import { describe, it, expect, vi, beforeEach } from "vitest";
import type { RepoFetch } from "../github.ts";

const { mockCallLlm, mockSaveFile } = vi.hoisted(() => ({
  mockCallLlm: vi.fn<(prompt: string, maxTokens?: number) => Promise<string>>(),
  mockSaveFile: vi.fn<(content: string, ...segments: string[]) => string>(),
}));

vi.mock("../report.ts", async (importOriginal) => {
  const orig = await importOriginal<typeof import("../report.ts")>();
  return {
    ...orig,
    callLlm: mockCallLlm,
    saveFile: mockSaveFile,
  };
});

import { generateRlDigests, saveRlDailyReport } from "../rl-daily.ts";

function makeFetch(overrides: Partial<RepoFetch> = {}): RepoFetch {
  return {
    cfg: { id: "trl", repo: "huggingface/trl", name: "TRL" },
    issues: [],
    prs: [],
    releases: [],
    ...overrides,
  };
}

describe("generateRlDigests", () => {
  beforeEach(() => {
    mockCallLlm.mockReset();
  });

  it("skips the LLM when a repo has no recent activity", async () => {
    const digests = await generateRlDigests([makeFetch()], "2026-03-11");

    expect(digests).toHaveLength(1);
    expect(digests[0]!.summary).toBe("过去24小时无活动。");
    expect(mockCallLlm).not.toHaveBeenCalled();
  });

  it("calls the RL prompt builder when activity exists", async () => {
    mockCallLlm.mockResolvedValueOnce("RL summary");
    const digests = await generateRlDigests(
      [
        makeFetch({
          issues: [
            {
              number: 1,
              title: "Need new PPO trainer docs",
              state: "open",
              user: { login: "alice" },
              labels: [],
              created_at: "2026-03-10T00:00:00Z",
              updated_at: "2026-03-10T12:00:00Z",
              comments: 3,
              body: "docs request",
              html_url: "https://github.com/huggingface/trl/issues/1",
            },
          ],
        }),
      ],
      "2026-03-11",
    );

    expect(digests[0]!.summary).toBe("RL summary");
    expect(mockCallLlm).toHaveBeenCalledOnce();
    expect(mockCallLlm.mock.calls[0]![0]).toContain("强化学习（RL）开源生态");
    expect(mockCallLlm.mock.calls[0]![0]).toContain("huggingface/trl");
  });
});

describe("saveRlDailyReport", () => {
  beforeEach(() => {
    mockSaveFile.mockReset();
    mockSaveFile.mockReturnValue("digests/2026-03-11/rl-daily.md");
  });

  it("saves the Chinese RL report to rl-daily.md", () => {
    const path = saveRlDailyReport(
      [
        {
          config: { id: "trl", repo: "huggingface/trl", name: "TRL" },
          issues: [],
          prs: [],
          releases: [],
          summary: "x",
        },
      ],
      "2026-03-11 00:00",
      "2026-03-11",
      "\nfooter",
    );

    expect(path).toBe("digests/2026-03-11/rl-daily.md");
    expect(mockSaveFile).toHaveBeenCalledOnce();
    expect(mockSaveFile.mock.calls[0]![1]).toBe("2026-03-11");
    expect(mockSaveFile.mock.calls[0]![2]).toBe("rl-daily.md");
    expect(mockSaveFile.mock.calls[0]![0]).toContain("# RL 开源生态日报 2026-03-11");
  });
});
