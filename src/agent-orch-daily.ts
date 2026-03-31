import type { RepoFetch } from "./github.ts";
import type { RepoDigest } from "./prompts.ts";
import { buildOrchPrompt } from "./prompts.ts";
import { buildOrchReportContent } from "./report-builders.ts";
import { callLlm, saveFile } from "./report.ts";
import { MSG } from "./i18n.ts";

export async function generateOrchDigests(
  fetchedOrch: RepoFetch[],
  dateStr: string,
  lang: "zh" | "en" = "zh",
): Promise<RepoDigest[]> {
  const noActivity = MSG.noActivity[lang];
  const fail = MSG.summaryFailed[lang];

  return Promise.all(
    fetchedOrch.map(async ({ cfg, issues, prs, releases }) => {
      if (!issues.length && !prs.length && !releases.length) {
        console.log(`  [${cfg.id}] No Agent Orch activity, skipping LLM call`);
        return { config: cfg, issues, prs, releases, summary: noActivity };
      }

      console.log(`  [${cfg.id}] Calling LLM for Agent Orch summary...`);
      try {
        const summary = await callLlm(buildOrchPrompt(cfg, issues, prs, releases, dateStr, lang));
        return { config: cfg, issues, prs, releases, summary };
      } catch (err) {
        console.error(`  [${cfg.id}] Agent Orch LLM call failed: ${err}`);
        return { config: cfg, issues, prs, releases, summary: fail };
      }
    }),
  );
}

export function saveOrchDailyReport(
  orchDigests: RepoDigest[],
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): string {
  const fileName = lang === "en" ? "agent-orch-en.md" : "agent-orch.md";
  const content = buildOrchReportContent(orchDigests, comparison, utcStr, dateStr, footer, lang);
  return saveFile(content, dateStr, fileName);
}
