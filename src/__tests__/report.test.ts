import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import fs from "node:fs";

// ---------------------------------------------------------------------------
// Mock provider — intercepts createProvider() so the module-level `provider`
// in report.ts uses our controllable mock instead of a real SDK client.
// ---------------------------------------------------------------------------

const { mockCall } = vi.hoisted(() => ({
  mockCall: vi.fn<(prompt: string, maxTokens: number) => Promise<string>>(),
}));

vi.mock("../providers/index.ts", async (importOriginal) => {
  const orig = await importOriginal<typeof import("../providers/index.ts")>();
  return {
    ...orig,
    createProvider: () => ({ name: "mock", call: mockCall }),
  };
});

import {
  is429,
  callLlm,
  saveFile,
  autoGenFooter,
  readLlmRuntimeConfig,
  resetLlmStateForTest,
  escapeLiquid,
} from "../report.ts";

// ---------------------------------------------------------------------------
// is429
// ---------------------------------------------------------------------------

describe("is429", () => {
  it("detects status 429 from error-like objects", () => {
    expect(is429({ status: 429 })).toBe(true);
  });

  it("detects 429 from string representation", () => {
    expect(is429(new Error("Request failed with 429"))).toBe(true);
  });

  it("returns false for other status codes", () => {
    expect(is429({ status: 500 })).toBe(false);
    expect(is429({ status: 200 })).toBe(false);
  });

  it("returns false for null/undefined", () => {
    expect(is429(null)).toBe(false);
    expect(is429(undefined)).toBe(false);
  });

  it("returns false for unrelated errors", () => {
    expect(is429(new Error("Something else"))).toBe(false);
  });

  it("detects OpenAI SDK RateLimitError shape (status + code)", () => {
    const openaiError = Object.assign(new Error("Rate limit reached"), {
      status: 429,
      code: "rate_limit_exceeded",
      type: "tokens",
    });
    expect(is429(openaiError)).toBe(true);
  });

  it("detects Anthropic SDK APIError shape (status + headers)", () => {
    const anthropicError = Object.assign(new Error("rate_limit_error"), {
      status: 429,
      headers: { "retry-after": "30" },
    });
    expect(is429(anthropicError)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// saveFile
// ---------------------------------------------------------------------------

describe("saveFile", () => {
  beforeEach(() => {
    vi.spyOn(fs, "mkdirSync").mockReturnValue(undefined);
    vi.spyOn(fs, "writeFileSync").mockReturnValue(undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the expected file path", () => {
    const result = saveFile("content", "2026-03-09", "ai-cli.md");
    expect(result).toBe("digests/2026-03-09/ai-cli.md");
  });

  it("creates parent directories recursively", () => {
    saveFile("content", "2026-03-09", "ai-cli.md");
    expect(fs.mkdirSync).toHaveBeenCalledWith("digests/2026-03-09", { recursive: true });
  });

  it("writes content as utf-8", () => {
    saveFile("hello world", "2026-03-09", "test.md");
    expect(fs.writeFileSync).toHaveBeenCalledWith("digests/2026-03-09/test.md", "hello world", "utf-8");
  });

  it("escapes Liquid tags in content", () => {
    saveFile('Use `{% include "file.md" %}` to include files', "2026-03-09", "test.md");
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "digests/2026-03-09/test.md",
      'Use `&#123;&#37; include "file.md" &#37;&#125;` to include files',
      "utf-8",
    );
  });
});

// ---------------------------------------------------------------------------
// escapeLiquid
// ---------------------------------------------------------------------------

describe("escapeLiquid", () => {
  it("escapes {% and %} tags", () => {
    expect(escapeLiquid('{% include "file.md" %}')).toBe('&#123;&#37; include "file.md" &#37;&#125;');
  });

  it("escapes {{ and }} tags", () => {
    expect(escapeLiquid("{{ variable }}")).toBe("&#123;&#123; variable &#125;&#125;");
  });

  it("returns unchanged content without Liquid tags", () => {
    expect(escapeLiquid("plain text")).toBe("plain text");
  });

  it("handles multiple Liquid tags", () => {
    const input = "{% if true %}{{ var }}{% endif %}";
    const expected =
      "&#123;&#37; if true &#37;&#125;&#123;&#123; var &#125;&#125;&#123;&#37; endif &#37;&#125;";
    expect(escapeLiquid(input)).toBe(expected);
  });
});

// ---------------------------------------------------------------------------
// autoGenFooter
// ---------------------------------------------------------------------------

describe("autoGenFooter", () => {
  const originalEnv = process.env["DIGEST_REPO"];

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env["DIGEST_REPO"] = originalEnv;
    } else {
      delete process.env["DIGEST_REPO"];
    }
  });

  it("returns empty string when DIGEST_REPO is not set", () => {
    delete process.env["DIGEST_REPO"];
    expect(autoGenFooter()).toBe("");
  });

  it("returns empty string when DIGEST_REPO is empty", () => {
    process.env["DIGEST_REPO"] = "";
    expect(autoGenFooter()).toBe("");
  });

  it("returns Chinese footer when DIGEST_REPO is set", () => {
    process.env["DIGEST_REPO"] = "user/repo";
    const result = autoGenFooter("zh");
    expect(result).toContain("agents-radar");
    expect(result).toContain("github.com/user/repo");
    expect(result).toContain("自动生成");
  });

  it("returns English footer when lang is en", () => {
    process.env["DIGEST_REPO"] = "user/repo";
    const result = autoGenFooter("en");
    expect(result).toContain("auto-generated");
    expect(result).toContain("agents-radar");
  });
});

describe("readLlmRuntimeConfig", () => {
  it("uses defaults when env vars are missing", () => {
    expect(readLlmRuntimeConfig({})).toEqual({
      concurrency: 2,
      minIntervalMs: 5_000,
    });
  });

  it("reads concurrency and interval overrides from env", () => {
    expect(
      readLlmRuntimeConfig({
        LLM_CONCURRENCY: "3",
        LLM_MIN_INTERVAL_MS: "2500",
      }),
    ).toEqual({
      concurrency: 3,
      minIntervalMs: 2_500,
    });
  });

  it("falls back to defaults for invalid env values", () => {
    expect(
      readLlmRuntimeConfig({
        LLM_CONCURRENCY: "0",
        LLM_MIN_INTERVAL_MS: "-1",
      }),
    ).toEqual({
      concurrency: 2,
      minIntervalMs: 5_000,
    });
  });
});

// ---------------------------------------------------------------------------
// callLlm
// ---------------------------------------------------------------------------

describe("callLlm", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-03-12T00:00:00Z"));
    mockCall.mockReset();
    resetLlmStateForTest();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("passes prompt and maxTokens to provider.call()", async () => {
    mockCall.mockResolvedValueOnce("response text");

    const result = await callLlm("hello", 2048);

    expect(result).toBe("response text");
    expect(mockCall).toHaveBeenCalledOnce();
    expect(mockCall).toHaveBeenCalledWith("hello", 2048);
  });

  it("uses default maxTokens of 4096", async () => {
    mockCall.mockResolvedValueOnce("ok");

    await callLlm("prompt");

    expect(mockCall).toHaveBeenCalledWith("prompt", 4096);
  });

  it("retries on 429 with exponential backoff", async () => {
    const err429 = Object.assign(new Error("rate limited"), { status: 429 });
    mockCall.mockRejectedValueOnce(err429);
    mockCall.mockResolvedValueOnce("success after retry");

    const promise = callLlm("prompt", 1024);

    // First call rejects with 429 — retry is gated by the 5 s backoff,
    // which also matches the default pacing window.
    await vi.advanceTimersByTimeAsync(5_000);

    const result = await promise;
    expect(result).toBe("success after retry");
    expect(mockCall).toHaveBeenCalledTimes(2);
  }, 20_000);

  it("retries up to MAX_RETRIES times then throws", async () => {
    const err429 = Object.assign(new Error("rate limited"), { status: 429 });
    mockCall
      .mockRejectedValueOnce(err429)
      .mockRejectedValueOnce(err429)
      .mockRejectedValueOnce(err429)
      .mockRejectedValueOnce(err429);

    const promise = callLlm("prompt", 1024);
    // Attach a no-op catch immediately so Node doesn't flag unhandled rejection
    // before the expect() below gets a chance to inspect the rejection.
    promise.catch(() => {});

    // Retry schedule under 5 s pacing:
    // initial at t=0, retries at t=5, t=15, t=35.
    await vi.advanceTimersByTimeAsync(5_000);
    await vi.advanceTimersByTimeAsync(10_000);
    await vi.advanceTimersByTimeAsync(20_000);

    await expect(promise).rejects.toThrow("rate limited");
    // 1 initial + 3 retries = 4 total calls
    expect(mockCall).toHaveBeenCalledTimes(4);
  }, 20_000);

  it("throws immediately on non-429 errors", async () => {
    mockCall.mockRejectedValueOnce(new Error("server error"));

    await expect(callLlm("prompt")).rejects.toThrow("server error");
    expect(mockCall).toHaveBeenCalledOnce();
  });

  it("paces consecutive calls with a minimum interval", async () => {
    mockCall.mockResolvedValue("ok");

    const first = callLlm("p1");
    const second = callLlm("p2");

    await vi.advanceTimersByTimeAsync(0);
    expect(mockCall).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(4_999);
    expect(mockCall).toHaveBeenCalledTimes(1);

    await vi.advanceTimersByTimeAsync(1);
    expect(mockCall).toHaveBeenCalledTimes(2);

    await expect(Promise.all([first, second])).resolves.toEqual(["ok", "ok"]);
  });

  it("does not leak concurrency slots on 429 retries", async () => {
    const err429 = Object.assign(new Error("429"), { status: 429 });
    mockCall.mockRejectedValueOnce(err429);
    mockCall.mockResolvedValueOnce("ok");

    const promise = callLlm("prompt");
    await vi.advanceTimersByTimeAsync(5_000);
    await promise;

    // If slots leaked, the second call would hang even after the first
    // finishes retrying. With the default pacing, only one new request should
    // start immediately and the next one should wait for the 5 s interval.
    mockCall.mockResolvedValue("ok");
    const batch = [callLlm("p1"), callLlm("p2")];
    const priorCalls = mockCall.mock.calls.length;

    await vi.advanceTimersByTimeAsync(0);
    expect(mockCall).toHaveBeenCalledTimes(priorCalls);

    await vi.advanceTimersByTimeAsync(4_999);
    expect(mockCall).toHaveBeenCalledTimes(priorCalls);

    await vi.advanceTimersByTimeAsync(1);
    expect(mockCall).toHaveBeenCalledTimes(priorCalls + 1);

    await vi.advanceTimersByTimeAsync(5_000);
    const results = await Promise.all(batch);
    expect(results).toEqual(["ok", "ok"]);
    expect(mockCall).toHaveBeenCalledTimes(priorCalls + 2);
  }, 20_000);
});
