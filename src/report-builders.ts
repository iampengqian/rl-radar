/**
 * Report content builders — extracted from index.ts for testability.
 */

import type { RepoConfig, RepoFetch } from "./github.ts";
import type { RepoDigest } from "./prompts.ts";
import { type Lang, CLI_REPORT, OPENCLAW_REPORT } from "./i18n.ts";

// ---------------------------------------------------------------------------
// CLI Report
// ---------------------------------------------------------------------------

export function buildCliReportContent(
  cliDigests: RepoDigest[],
  skillsSummary: string,
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  skillsRepo: string,
  lang: Lang = "zh",
): string {
  const repoLinks =
    cliDigests.map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`).join("\n") +
    `\n- [Claude Code Skills](https://github.com/${skillsRepo})`;

  const title = `# ${CLI_REPORT.title[lang]} ${dateStr}\n\n`;
  const meta = CLI_REPORT.meta(utcStr, cliDigests.length, lang);

  const skillsSection =
    `## ${CLI_REPORT.skillsHeading[lang]}\n\n` +
    `> ${CLI_REPORT.skillsSource[lang]}: [anthropics/skills](https://github.com/${skillsRepo})\n\n` +
    `${skillsSummary}\n\n---\n\n`;

  const toolSections = cliDigests
    .map((d) => {
      const skills = d.config.id === "claude-code" ? skillsSection : "";
      return [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        skills + d.summary,
        ``,
        `</details>`,
      ].join("\n");
    })
    .join("\n\n");

  return (
    title +
    meta +
    `${repoLinks}\n\n` +
    `---\n\n` +
    `## ${CLI_REPORT.comparison[lang]}\n\n` +
    comparison +
    `\n\n---\n\n` +
    `## ${CLI_REPORT.detail[lang]}\n\n` +
    toolSections +
    footer
  );
}

// ---------------------------------------------------------------------------
// OpenClaw Report
// ---------------------------------------------------------------------------

export function buildOpenclawReportContent(
  fetchedOpenclaw: RepoFetch,
  peerDigests: RepoDigest[],
  openclawSummary: string,
  peersComparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  openclaw: RepoConfig,
  openclawPeers: RepoConfig[],
  lang: Lang = "zh",
): string {
  const { issues, prs } = fetchedOpenclaw;

  const peersRepoLinks =
    `- [OpenClaw](https://github.com/${openclaw.repo})\n` +
    openclawPeers.map((p) => `- [${p.name}](https://github.com/${p.repo})`).join("\n");

  const peerDetailSections = peerDigests
    .map((d) =>
      [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n"),
    )
    .join("\n\n");

  const title = `# ${OPENCLAW_REPORT.title[lang]} ${dateStr}\n\n`;
  const meta =
    lang === "en"
      ? `> Issues: ${issues.length} | PRs: ${prs.length} | Projects covered: ${1 + openclawPeers.length} | Generated: ${utcStr} UTC\n\n`
      : `> Issues: ${issues.length} | PRs: ${prs.length} | 覆盖项目: ${1 + openclawPeers.length} 个 | 生成时间: ${utcStr} UTC\n\n`;

  return (
    title +
    meta +
    `${peersRepoLinks}\n\n` +
    `---\n\n` +
    `## ${OPENCLAW_REPORT.deepDive[lang]}\n\n` +
    openclawSummary +
    `\n\n---\n\n` +
    `## ${OPENCLAW_REPORT.comparison[lang]}\n\n` +
    peersComparison +
    `\n\n---\n\n` +
    `## ${OPENCLAW_REPORT.peers[lang]}\n\n` +
    peerDetailSections +
    footer
  );
}

export function buildOrchReportContent(
  orchDigests: RepoDigest[],
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): string {
  const repoLinks = orchDigests
    .map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`)
    .join("\n");
  const sections = orchDigests
    .map((d) => {
      return [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n");
    })
    .join("\n\n");

  const t =
    lang === "en"
      ? {
          title: `# Agent Orchestrator Ecosystem Digest ${dateStr}\n\n`,
          meta: `> Generated: ${utcStr} UTC | Projects covered: ${orchDigests.length}\n\n`,
          comparison: `## Cross-Project Comparison\n\n`,
          detail: `## Agent Orchestrator Project Reports\n\n`,
        }
      : {
          title: `# Agent 编排生态日报 ${dateStr}\n\n`,
          meta: `> 生成时间: ${utcStr} UTC | 覆盖项目: ${orchDigests.length} 个\n\n`,
          comparison: `## 横向对比分析\n\n`,
          detail: `## Agent 编排项目详细报告\n\n`,
        };

  return (
    t.title +
    t.meta +
    `${repoLinks}\n\n` +
    `---\n\n` +
    t.comparison +
    comparison +
    `\n\n---\n\n` +
    t.detail +
    sections +
    footer
  );
}

export function buildRlReportContent(
  rlDigests: RepoDigest[],
  comparison: string,
  utcStr: string,
  dateStr: string,
  footer: string,
  lang: "zh" | "en" = "zh",
): string {
  const repoLinks = rlDigests
    .map((d) => `- [${d.config.name}](https://github.com/${d.config.repo})`)
    .join("\n");
  const sections = rlDigests
    .map((d) => {
      return [
        `<details>`,
        `<summary><strong>${d.config.name}</strong> — <a href="https://github.com/${d.config.repo}">${d.config.repo}</a></summary>`,
        ``,
        d.summary,
        ``,
        `</details>`,
      ].join("\n");
    })
    .join("\n\n");

  const t =
    lang === "en"
      ? {
          title: `# RL Open Source Daily Digest ${dateStr}\n\n`,
          meta: `> Generated: ${utcStr} UTC | Projects covered: ${rlDigests.length}\n\n`,
          comparison: `## Cross-Project Comparison\n\n`,
          detail: `## RL Project Reports\n\n`,
        }
      : {
          title: `# RL 开源生态日报 ${dateStr}\n\n`,
          meta: `> 生成时间: ${utcStr} UTC | 覆盖项目: ${rlDigests.length} 个\n\n`,
          comparison: `## 横向对比分析\n\n`,
          detail: `## RL 项目详细报告\n\n`,
        };

  return (
    t.title +
    t.meta +
    `${repoLinks}\n\n` +
    `---\n\n` +
    t.comparison +
    comparison +
    `\n\n---\n\n` +
    t.detail +
    sections +
    footer
  );
}
