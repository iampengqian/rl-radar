# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

rl-radar is a daily digest generator for the RL (Reinforcement Learning) open-source ecosystem, forked from agents-radar. A GitHub Actions cron job runs at 00:00 UTC (08:00 CST) and produces bilingual (Chinese + English) reports, published as GitHub Issues and committed Markdown files.

The repository maintains two layers:
- **RL-radar adaptations** (live): RL repository tracking, `rl-daily.md` reports
- **Inherited agents-radar modules** (still present): AI CLI tools, OpenClaw ecosystem, web/trending/HN digests, weekly/monthly rollups

## Commands

```bash
pnpm start          # run the full digest locally
pnpm typecheck      # tsc --noEmit
pnpm lint           # ESLint
pnpm lint:fix       # ESLint --fix
pnpm format         # Prettier --write src
pnpm format:check   # Prettier --check src
pnpm test           # run tests once
pnpm test:watch     # run tests in watch mode
pnpm test:coverage  # run tests with coverage
pnpm manifest       # regenerate manifest.json and feed.xml
pnpm weekly         # generate weekly rollup
pnpm monthly        # generate monthly rollup
pnpm notify         # send Telegram notification (requires secrets)
```

Required env vars for local runs:

```bash
export GITHUB_TOKEN=ghp_xxxxx
export DIGEST_REPO=owner/repo   # omit to skip GitHub issue creation

# LLM provider (default: anthropic)
export LLM_PROVIDER=anthropic   # anthropic | openai | github-copilot | openrouter

# Anthropic (default)
export ANTHROPIC_API_KEY=sk-ant-xxxxx
export ANTHROPIC_BASE_URL=https://api.kimi.com/coding/  # omit for Anthropic
export ANTHROPIC_MODEL=your-model-name                   # model override

# OpenAI
# export OPENAI_API_KEY=sk-xxxxx

# GitHub Copilot — uses GITHUB_TOKEN

# OpenRouter
# export OPENROUTER_API_KEY=sk-or-xxxxx

# Optional: LLM rate limiting
export LLM_CONCURRENCY=2        # max concurrent LLM calls (default: 2)
export LLM_MIN_INTERVAL_MS=5000 # min ms between calls (default: 5000)
```

## Architecture

The pipeline runs in four sequential phases, each implemented as a named async function in `src/index.ts`:

1. **`fetchAllData`** — all network I/O in parallel: GitHub API (issues/PRs/releases) for CLI repos, OpenClaw ecosystem, and RL repos, plus Claude Code Skills, Anthropic/OpenAI sitemaps, GitHub Trending HTML + Search API, Hacker News Algolia API.
2. **`generateSummaries`** — per-repo LLM calls, all in parallel, rate-limited by concurrency and pacing in `src/report.ts`.
3. **Comparisons** — multiple LLM calls: cross-tool CLI comparison, OpenClaw cross-ecosystem comparison, RL cross-project comparison.
4. **Save phase** — report builders create Markdown strings; savers write files and optionally create GitHub Issues.

All repo configuration is loaded from `config.yml` via `src/config.ts`, which falls back to built-in defaults if the file is missing.

## Source files

| File | Responsibility |
|------|---------------|
| `src/index.ts` | Orchestration: repo config, phase functions, `main()` |
| `src/config.ts` | Loads `config.yml` with fallback defaults; exports `RadarConfig` type |
| `src/github.ts` | GitHub API helpers: `fetchRecentItems`, `fetchRecentReleases`, `fetchSkillsData`, `createGitHubIssue`; shared `RepoConfig`, `RepoFetch` types |
| `src/repo-activity.ts` | `fetchRepoActivity` — wraps GitHub API calls for a single repo |
| `src/prompts.ts` | LLM prompt builders (one per report type) and `formatItem`; `RepoDigest` type |
| `src/report-builders.ts` | `buildCliReportContent`, `buildOpenclawReportContent`, `buildRlReportContent` |
| `src/rl-daily.ts` | `generateRlDigests`, `saveRlDailyReport` — RL-specific digest generation |
| `src/date.ts` | CST (UTC+8) date helpers: `toCstDateStr`, `toUtcStr` |
| `src/report.ts` | `callLlm` (with concurrency limiter + pacing), `saveFile`, `autoGenFooter`, LLM token budget constants |
| `src/web.ts` | Sitemap-based web content fetching; state persisted to `digests/web-state.json` |
| `src/trending.ts` | GitHub Trending HTML scraper + Search API topic queries |
| `src/hn.ts` | Hacker News top AI stories via Algolia HN Search API |
| `src/rollup.ts` | Weekly (`runWeeklyRollup`) and monthly (`runMonthlyRollup`) rollup generators |
| `src/notify.ts` | Telegram notification sender; reads `manifest.json` |
| `src/generate-manifest.ts` | Generates `manifest.json` (sidebar data) and `feed.xml` (RSS 2.0) |
| `src/providers/` | LLM provider implementations (Anthropic, OpenAI, GitHub Copilot, OpenRouter) |

## Report outputs

Files written to `digests/YYYY-MM-DD/`:

| File | Label | Notes |
|------|-------|-------|
| `ai-cli.md` / `ai-cli-en.md` | `digest` | AI CLI tools digest |
| `ai-agents.md` / `ai-agents-en.md` | `openclaw` | OpenClaw ecosystem digest |
| `rl-daily.md` / `rl-daily-en.md` | `rl-daily` | RL ecosystem digest |
| `ai-web.md` / `ai-web-en.md` | `web` | Skipped if no new sitemap content |
| `ai-trending.md` / `ai-trending-en.md` | `trending` | Skipped if both data sources fail |
| `ai-hn.md` / `ai-hn-en.md` | `hn` | Skipped if Algolia fetch fails |
| `ai-weekly.md` / `ai-weekly-en.md` | `weekly` | Generated by `pnpm weekly` |
| `ai-monthly.md` / `ai-monthly-en.md` | `monthly` | Generated by `pnpm monthly` |

## Configuration

Repository pools are configured in `config.yml`:

```yaml
cli_repos:        # AI CLI tools for cross-tool comparison
skills_repo:      # Claude Code Skills repo
openclaw:         # Primary OpenClaw project (deep-dive)
openclaw_peers:   # Peer projects for ecosystem comparison
rl_repos:         # RL ecosystem projects
```

Each repo entry requires `id`, `repo`, `name`. Add `paginated: true` for high-volume repos.

## Key conventions

- All LLM prompts are in `src/prompts.ts`. Each report type has its own builder function. Prompts are written in Chinese and produce Chinese output (English variants use `lang: "en"`).
- `callLlm(prompt, maxTokens?)` defaults to 4096 tokens. Web report uses 8192, trending uses 6144, rollups use 8192.
- Rate limiting: `LLM_CONCURRENCY` controls max concurrent calls (default: 2); `LLM_MIN_INTERVAL_MS` enforces minimum time between calls (default: 5000ms).
- On 429 rate-limit errors `callLlm` retries up to 3 times with exponential backoff (5s / 10s / 20s).
- LLM provider is selected via `LLM_PROVIDER` env var (default: `anthropic`). Valid values: `anthropic`, `openai`, `github-copilot`, `openrouter`.
- Provider implementations live in `src/providers/`. Each file implements the `LlmProvider` interface.
- `sampleNote(total, sampled)` in `src/prompts.ts` formats the "(共 N 条，展示前 M 条)" note. Reuse it.
- Web state (`digests/web-state.json`) is committed to git on every run. It tracks which URLs have been seen.

## Web UI & RSS Feed

- Web UI: `index.html` reads `manifest.json` to build the sidebar, then fetches `digests/YYYY-MM-DD/report.md` on demand.
- Site URL: `https://iampengqian.github.io/rl-radar`
- RSS Feed: `feed.xml` at the repo root. Contains the latest 30 items across all report types.
- Both `manifest.json` and `feed.xml` are generated by `src/generate-manifest.ts` via `pnpm manifest`.
- The `REPORT_LABELS` map in `generate-manifest.ts` must be kept in sync with the `LABELS` object in `index.html` when adding new report types.

## Adding a new report type

1. Add repo entries to `config.yml` (or create a new section).
2. Add a `buildXxxPrompt` function in `src/prompts.ts`.
3. Create a `buildXxxReportContent` function in `src/report-builders.ts` (or inline in index.ts).
4. Wire into `fetchAllData`, `generateSummaries`, and a save function in `src/index.ts`.
5. Add a label color entry in `LABEL_COLORS` in `src/github.ts`.
6. Add the report ID and label to `REPORT_LABELS` in `src/generate-manifest.ts` and `LABELS` in `index.html`.
7. Add the report file name (without `.md`) to `REPORT_FILES` in `src/generate-manifest.ts`.
8. Add labels to `ZH_LABELS` and `EN_LABELS` in `src/notify.ts` for Telegram notifications.
9. Run `pnpm manifest` to regenerate manifest and feed.
