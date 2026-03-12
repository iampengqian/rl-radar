import { fetchRecentItems, fetchRecentReleases, type RepoConfig, type RepoFetch } from "./github.ts";

export async function fetchRepoActivity(cfg: RepoConfig, since: Date): Promise<RepoFetch> {
  try {
    const [issuesRaw, prs, releases] = await Promise.all([
      fetchRecentItems(cfg, "issues", since),
      fetchRecentItems(cfg, "pulls", since),
      fetchRecentReleases(cfg.repo, since),
    ]);
    const issues = issuesRaw.filter((item) => !item.pull_request);
    console.log(`  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`);
    return { cfg, issues, prs, releases };
  } catch (err) {
    console.error(`  [${cfg.id}] GitHub fetch failed: ${err}`);
    return { cfg, issues: [], prs: [], releases: [] };
  }
}
