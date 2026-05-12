# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

agents-radar is a daily digest generator for the AI open-source ecosystem. A GitHub Actions cron job runs daily and produces bilingual (Chinese + English) reports, published as GitHub Issues and committed Markdown files. Weekly and monthly rollup reports are generated automatically.

## Commands

```bash
pnpm start            # run the full digest locally
pnpm test             # vitest run (unit tests)
pnpm test:watch       # vitest in watch mode
pnpm test:coverage    # vitest with coverage
pnpm typecheck        # tsc --noEmit
pnpm lint             # ESLint
pnpm lint:fix         # ESLint --fix
pnpm format           # Prettier --write src
pnpm format:check     # Prettier --check src
pnpm manifest         # generate manifest.json + feed.xml
pnpm weekly           # run weekly rollup
pnpm monthly          # run monthly rollup
pnpm notify           # send Telegram notification
pnpm notify:feishu    # send Feishu notification
```

Run a single test file: `pnpm vitest run src/__tests__/github.test.ts`

Required env vars for local runs:

```bash
export GITHUB_TOKEN=ghp_xxxxx
export DIGEST_REPO=owner/repo   # omit to skip GitHub issue creation

# LLM provider (default: anthropic)
export LLM_PROVIDER=anthropic   # anthropic | openai | github-copilot | openrouter

# Anthropic (default)
export ANTHROPIC_API_KEY=sk-ant-xxxxx
export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/  # omit for Anthropic

# OpenAI
# export OPENAI_API_KEY=sk-xxxxx

# GitHub Copilot — uses GITHUB_TOKEN

# OpenRouter
# export OPENROUTER_API_KEY=sk-or-xxxxx
```

## Architecture

### Pipeline phases (in `src/index.ts`)

1. **`fetchAllData`** — all network I/O in parallel: GitHub API for all repo groups, Claude Code Skills, Anthropic/OpenAI sitemaps, GitHub Trending, HN, Product Hunt, ArXiv, Hugging Face, Dev.to, Lobste.rs.
2. **`generateSummaries`** — per-repo LLM calls, all in parallel, rate-limited to 5 concurrent requests by the queue in `src/report.ts`.
3. **Comparisons** — multiple LLM calls: CLI cross-tool, OpenClaw cross-ecosystem, RL cross-project, Agent Orchestrator cross-project.
4. **Save phase** — builders assemble Markdown strings; savers call LLM + write file + create GitHub Issue.

### Repo groups (configured via `config.yml`)

All tracked repos are loaded from `config.yml` via `src/config.ts`, falling back to built-in defaults:

- **CLI_REPOS** (7): claude-code, codex, gemini-cli, copilot-cli, kimi-cli, opencode, qwen-code
- **OPENCLAW** + **OPENCLAW_PEERS** (13): openclaw/openclaw + 12 peer projects
- **RL_REPOS** (15): ROLL, ROCK, slime, AReaL, TRL, Tianshou, OpenRLHF, verl, torchtune, etc.
- **AGENT_ORCH_REPOS** (30+): coding agent orchestrators + multi-agent frameworks (AutoGPT, CrewAI, LangGraph, etc.)
- **CLAUDE_SKILLS_REPO**: anthropics/skills — no date filter, sorted by popularity

### Key source files

| File | Responsibility |
|------|---------------|
| `src/index.ts` | Orchestration: config loading, phase functions, `main()` |
| `src/config.ts` | Loads `config.yml`, validates, falls back to defaults |
| `src/i18n.ts` | Centralized bilingual strings: `Lang` type, report titles, labels, `MSG` constants, `REPORT_LABELS` |
| `src/github.ts` | GitHub API helpers: `fetchRecentItems`, `fetchRecentReleases`, `fetchSkillsData`, `createGitHubIssue` |
| `src/repo-activity.ts` | Shared `fetchRepoActivity(cfg, since)` — used by all repo-group fetchers |
| `src/prompts.ts` | LLM prompt builders for repo reports (CLI, OpenClaw peers, RL, Orch, Skills, comparisons) |
| `src/prompts-data.ts` | LLM prompt builders for data-source reports (trending, web, HN, weekly, monthly, highlights) |
| `src/report.ts` | `callLlm` (with concurrency limiter), `saveFile`, `autoGenFooter`, LLM token budget constants |
| `src/report-builders.ts` | `buildCliReportContent`, `buildOpenclawReportContent`, `buildOrchReportContent`, `buildRlReportContent` |
| `src/report-savers.ts` | `saveWebReport`, `saveTrendingReport`, `saveHnReport`, `savePhReport`, `saveArxivReport`, `saveHfReport`, `saveCommunityReport` |
| `src/rl-daily.ts` | RL ecosystem daily digest generator |
| `src/agent-orch-daily.ts` | Agent orchestrator daily digest generator |
| `src/rollup.ts` | Weekly and monthly rollup report logic |
| `src/web.ts` | Sitemap-based web content fetching; state in `digests/web-state.json` |
| `src/trending.ts` | GitHub Trending HTML scraper + Search API |
| `src/hn.ts` | Hacker News via Algolia API |
| `src/ph.ts` | Product Hunt via GraphQL API |
| `src/arxiv.ts` | ArXiv papers (cs.AI, cs.CL, cs.LG) |
| `src/hf.ts` | Hugging Face trending models |
| `src/devto.ts` | Dev.to AI/LLM articles |
| `src/lobsters.ts` | Lobste.rs AI/ML stories |
| `src/feishu.ts` | Feishu webhook notification |
| `src/notify.ts` | Telegram bot notification |
| `src/social.ts` | Social media posting (xiaohongshu, wechat) |
| `src/generate-manifest.ts` | Generates `manifest.json` (Web UI sidebar) + `feed.xml` (RSS) |
| `src/date.ts` | Date utilities: `toCstDateStr`, `toUtcStr`, `sleep` |
| `src/providers/` | LLM provider abstraction: `LlmProvider` interface, factory in `index.ts`, per-provider files |

### Report outputs

Files written to `digests/YYYY-MM-DD/`. Each report has ZH and EN variants (e.g., `ai-cli.md` + `ai-cli-en.md`):

| File | Label | Notes |
|------|-------|-------|
| `ai-cli.md` | `digest` | Always generated |
| `ai-agents.md` | `openclaw` | Always generated |
| `ai-rl.md` | `rl-daily` | Always generated |
| `ai-agent-orch.md` | `agent-orch` | Always generated |
| `ai-web.md` | `web` | Skipped if no new sitemap content |
| `ai-trending.md` | `trending` | Skipped if both data sources fail |
| `ai-hn.md` | `hn` | Skipped if Algolia fetch fails |
| `ai-ph.md` | `ph` | Skipped if `PRODUCTHUNT_TOKEN` not set or no data |
| `ai-arxiv.md` | `arxiv` | ArXiv papers from cs.AI/cs.CL/cs.LG |
| `ai-hf.md` | `hf` | Hugging Face trending models |
| `ai-community.md` | `community` | Dev.to + Lobste.rs combined |

### GitHub Actions schedules

| Workflow | Cron (UTC) | CST |
|----------|-----------|-----|
| Daily digest | `0 22 * * *` | 06:00 next day |
| Weekly rollup | `0 23 * * 0` | 07:00 Monday |
| Monthly rollup | `0 0 1 * *` | 08:00 on the 1st |

## Key conventions

- All bilingual strings (titles, labels, footers, messages) are centralized in `src/i18n.ts`. Use the `Lang` type (`"zh" | "en"`) and `Record<Lang, string>` maps. Do not add inline bilingual ternaries elsewhere. Use `MSG.*` for status/error messages.
- LLM prompt builders are split: `src/prompts.ts` (repo-level) and `src/prompts-data.ts` (data-source and rollup).
- `callLlm(prompt, maxTokens?)` defaults to 4096 tokens. Web report uses 8192, trending uses 6144.
- On 429 rate-limit errors `callLlm` retries up to 3 times with exponential backoff (5 s / 10 s / 20 s); the concurrency slot is released during the wait.
- The concurrency limiter (`LLM_CONCURRENCY = 5`) prevents 429s. Do not bypass it by calling SDK clients directly.
- Provider implementations live in `src/providers/`. The factory in `src/providers/index.ts` validates the provider name and logs only the provider name — never API keys or endpoints.
- `config.yml` in the repo root customizes tracked repos. `src/config.ts` loads it with built-in defaults as fallback. No code changes needed to add/remove repos.
- GitHub issue label colors are defined in `LABEL_COLORS` in `src/github.ts`.
- `sampleNote(total, sampled)` in `src/prompts.ts` formats the sampling note. Reuse it — do not inline.
- Web state (`digests/web-state.json`) is committed to git on every run — source of truth for seen URLs.
- The `REPORT_LABELS` map in `src/i18n.ts` must be kept in sync with the `LABELS` object in `index.html` when adding new report types.

## Adding a new report type

1. Create a data fetcher (or add to an existing one).
2. Add a `buildXxxPrompt` in `src/prompts-data.ts` (data-source) or `src/prompts.ts` (repo-level).
3. Add bilingual strings (titles, labels, issue title function) to `src/i18n.ts`.
4. Add a `saveXxxReport` in `src/report-savers.ts`.
5. Wire into `fetchAllData`, `generateSummaries`, and the save phase in `src/index.ts`.
6. Add label color in `LABEL_COLORS` in `src/github.ts`.
7. Add report ID + label to `REPORT_LABELS` in `src/i18n.ts` and `LABELS` in `index.html`.
8. Add file name to `REPORT_FILES` in `src/generate-manifest.ts`.
9. Update both README files and this file.

## Adding a new tracked repo group

1. Add default entries to `src/config.ts` (both the `DEFAULT_*` array and the `RadarConfig` interface).
2. Add a section to `config.yml` for the new group.
3. Create a `src/xxx-daily.ts` file following the pattern in `src/rl-daily.ts` or `src/agent-orch-daily.ts`.
4. Wire into `fetchAllData` and the save phase in `src/index.ts`.
5. Add prompt builders in `src/prompts.ts` and report builder in `src/report-builders.ts`.
