import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const ORIGINAL_CONCURRENCY = process.env["GITHUB_API_CONCURRENCY"];
const ORIGINAL_MIN_INTERVAL = process.env["GITHUB_API_MIN_INTERVAL_MS"];

function restoreEnv(name: string, value: string | undefined): void {
  if (value === undefined) {
    delete process.env[name];
  } else {
    process.env[name] = value;
  }
}

function makeJsonResponse(body: unknown, init: ResponseInit = {}): Response {
  return new Response(JSON.stringify(body), {
    status: 200,
    headers: { "Content-Type": "application/json" },
    ...init,
  });
}

describe("github rate limiting", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-04-25T00:00:00Z"));
    vi.resetModules();
    process.env["GITHUB_API_CONCURRENCY"] = "1";
    process.env["GITHUB_API_MIN_INTERVAL_MS"] = "1";
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
    restoreEnv("GITHUB_API_CONCURRENCY", ORIGINAL_CONCURRENCY);
    restoreEnv("GITHUB_API_MIN_INTERVAL_MS", ORIGINAL_MIN_INTERVAL);
  });

  it("retries 429 responses using retry-after", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockResolvedValueOnce(
        new Response("too many requests", {
          status: 429,
          headers: { "retry-after": "1" },
        }),
      )
      .mockResolvedValueOnce(
        makeJsonResponse([{ tag_name: "v1.0.0", name: "v1.0.0", published_at: "2026-04-25T00:00:00Z" }]),
      );
    vi.stubGlobal("fetch", fetchMock);

    const { fetchRecentReleases } = await import("../github.ts");
    const promise = fetchRecentReleases("openai/agents", new Date("2026-04-24T00:00:00Z"));

    await vi.advanceTimersByTimeAsync(1_001);

    await expect(promise).resolves.toEqual([
      { tag_name: "v1.0.0", name: "v1.0.0", published_at: "2026-04-25T00:00:00Z" },
    ]);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("releases the concurrency slot before backing off a retried request", async () => {
    const fetchMock = vi
      .fn<typeof fetch>()
      .mockImplementationOnce(async () => new Response("secondary rate limit", { status: 403 }))
      .mockImplementationOnce(async () =>
        makeJsonResponse([{ tag_name: "v2.0.0", name: "v2.0.0", published_at: "2026-04-25T00:00:00Z" }]),
      )
      .mockImplementationOnce(async () =>
        makeJsonResponse([{ tag_name: "v1.0.1", name: "v1.0.1", published_at: "2026-04-25T00:00:00Z" }]),
      );
    vi.stubGlobal("fetch", fetchMock);

    const { fetchRecentReleases } = await import("../github.ts");
    const first = fetchRecentReleases("openai/first", new Date("2026-04-24T00:00:00Z"));
    const second = fetchRecentReleases("openai/second", new Date("2026-04-24T00:00:00Z"));

    await vi.advanceTimersByTimeAsync(1);
    expect(fetchMock).toHaveBeenCalledTimes(2);

    await vi.advanceTimersByTimeAsync(10_001);

    await expect(Promise.all([first, second])).resolves.toEqual([
      [{ tag_name: "v1.0.1", name: "v1.0.1", published_at: "2026-04-25T00:00:00Z" }],
      [{ tag_name: "v2.0.0", name: "v2.0.0", published_at: "2026-04-25T00:00:00Z" }],
    ]);
    expect(fetchMock).toHaveBeenCalledTimes(3);
    expect(fetchMock.mock.calls.map(([url]) => String(url))).toEqual([
      "https://api.github.com/repos/openai/first/releases?per_page=10",
      "https://api.github.com/repos/openai/second/releases?per_page=10",
      "https://api.github.com/repos/openai/first/releases?per_page=10",
    ]);
  }, 20_000);
});
