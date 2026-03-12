import type { RepoFetch } from "./github.ts";
import type { RepoDigest } from "./prompts.ts";
import { buildRlPrompt } from "./prompts.ts";
import { buildRlReportContent } from "./report-builders.ts";
import { callLlm, saveFile } from "./report.ts";

export async function generateRlDigests(
  fetchedRl: RepoFetch[],
  dateStr: string,
  lang: "zh" | "en" = "zh",
): Promise<RepoDigest[]> {
  const noActivity = lang === "en" ? "No activity in the last 24 hours." : "过去24小时无活动。";
  const fail = lang === "en" ? "⚠️ Summary generation failed." : "⚠️ 摘要生成失败。";

  return Promise.all(
    fetchedRl.map(async ({ cfg, issues, prs, releases }) => {
      if (!issues.length && !prs.length && !releases.length) {
        console.log(`  [${cfg.id}] No RL activity, skipping LLM call`);
        return { config: cfg, issues, prs, releases, summary: noActivity };
      }

      console.log(`  [${cfg.id}] Calling LLM for RL summary...`);
      try {
        const summary = await callLlm(buildRlPrompt(cfg, issues, prs, releases, dateStr, lang));
        return { config: cfg, issues, prs, releases, summary };
      } catch (err) {
        console.error(`  [${cfg.id}] RL LLM call failed: ${err}`);
        return { config: cfg, issues, prs, releases, summary: fail };
      }
    }),
  );
}

export function saveRlDailyReport(
  rlDigests: RepoDigest[],
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): string {
  const fileName = lang === "en" ? "rl-daily-en.md" : "rl-daily.md";
  const content = buildRlReportContent(rlDigests, comparison, utcStr, dateStr, footer, lang);
  return saveFile(content, dateStr, fileName);
}
