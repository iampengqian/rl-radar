import { beforeEach, describe, expect, it, vi } from "vitest";
import type { GitHubItem, GitHubRelease, RepoConfig } from "../github.ts";

const { mockFetchRecentItems, mockFetchRecentReleases } = vi.hoisted(() => ({
  mockFetchRecentItems: vi.fn(),
  mockFetchRecentReleases: vi.fn(),
}));

vi.mock("../github.ts", async (importOriginal) => {
  const orig = await importOriginal<typeof import("../github.ts")>();
  return {
    ...orig,
    fetchRecentItems: mockFetchRecentItems,
    fetchRecentReleases: mockFetchRecentReleases,
  };
});

import { fetchRepoActivity } from "../repo-activity.ts";

const cfg: RepoConfig = { id: "trl", repo: "huggingface/trl", name: "TRL" };
const since = new Date("2026-03-11T00:00:00Z");

function makeIssue(overrides: Partial<GitHubItem> = {}): GitHubItem {
  return {
    number: 1,
    title: "Issue",
    state: "open",
    user: { login: "alice" },
    labels: [],
    created_at: "2026-03-11T00:00:00Z",
    updated_at: "2026-03-11T01:00:00Z",
    comments: 0,
    html_url: "https://github.com/huggingface/trl/issues/1",
    ...overrides,
  };
}

describe("fetchRepoActivity", () => {
  beforeEach(() => {
    mockFetchRecentItems.mockReset();
    mockFetchRecentReleases.mockReset();
  });

  it("filters pull requests out of the issues list", async () => {
    mockFetchRecentItems
      .mockResolvedValueOnce([makeIssue(), makeIssue({ number: 2, pull_request: {} })])
      .mockResolvedValueOnce([
        makeIssue({ number: 3, html_url: "https://github.com/huggingface/trl/pull/3" }),
      ]);
    mockFetchRecentReleases.mockResolvedValueOnce([] satisfies GitHubRelease[]);

    const result = await fetchRepoActivity(cfg, since);

    expect(result.cfg).toEqual(cfg);
    expect(result.issues).toHaveLength(1);
    expect(result.issues[0]!.number).toBe(1);
    expect(result.prs).toHaveLength(1);
    expect(result.prs[0]!.number).toBe(3);
  });

  it("falls back to empty activity when one GitHub fetch fails", async () => {
    mockFetchRecentItems.mockRejectedValueOnce(new Error("GitHub API error 502"));

    const result = await fetchRepoActivity(cfg, since);

    expect(result).toEqual({ cfg, issues: [], prs: [], releases: [] });
  });
});
