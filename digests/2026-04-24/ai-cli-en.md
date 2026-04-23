# AI CLI Tools Community Digest 2026-04-24

> Generated: 2026-04-23 22:11 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI Developer CLI Tools: Cross-Tool Ecosystem Report (2026-04-24)

## 1. Ecosystem Overview
The AI developer CLI landscape is transitioning rapidly from basic prompt-response utilities into sophisticated, agentic coding environments. As of April 2026, major tech giants and ambitious startups are fiercely competing to capture the developer workflow, resulting in a massive proliferation of features like multi-agent swarms, autonomous execution (YOLO modes), and deep IDE integrations. However, this breakneck pace of innovation is outpacing infrastructure stability, leading to shared growing pains across the board—specifically regarding runaway token consumption, brittle terminal UIs (TUI), and friction in enterprise permissions and billing. Consequently, developer trust currently hinges less on model intelligence and more on an ecosystem's ability to provide transparent context management and stable, cross-platform reliability.

## 2. Activity Comparison
Community and maintainer activity varies significantly across the ecosystem. Kimi Code is currently experiencing an explosive surge in community patches, while OpenCode is driving rapid internal iterations. 

| Tool | Notable Hot Issues (Activity) | Notable PRs (24h) | Release Status (Today) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (2,077 👍 on top issue) | 10 | **v2.1.118** shipped |
| **OpenAI Codex** | 10 (594 👍 on top issue) | 10 | **v0.124.0** shipped |
| **Gemini CLI** | 10 (High bug severity) | 10 | Nightly **v0.41.0** rolling out |
| **GitHub Copilot CLI** | 10 (75 👍 on top issue) | **1** | Patch releases **v1.0.35-5/6** |
| **Kimi Code CLI** | 10 (High debate volume) | **27+** | No release (v1.38.0 prev.) |
| **OpenCode** | 10 (63 comments on megathread) | 10 | Patches **v1.14.21/22** shipped |
| **Qwen Code** | 10 (Heated policy debate) | 10 | **v0.15.1** shipped |

## 3. Shared Feature Directions
*   **Vim/Advanced Keybindings (Codex, Claude Code):** Power users demand terminal-native editing. Claude Code introduced visual modes (`v`/`V`), while Codex rolled out a full Vim composer mode.
*   **Multi-Agent Architectures & Observability (Claude, Codex, Kimi, Qwen, OpenCode):** Tools are pivoting to "agent swarms." A universal requirement is the need for sub-agent observability—developers want to know what child agents are doing, their token consumption, and their status without UI freezing.
*   **YOLO / Autonomous Modes (Gemini, Kimi, OpenCode):** There is a strong push for unattended, autonomous execution ("YOLO" or "auto-approve" modes). Communities are actively demanding orthogonal controls to separate "auto-approve" from "non-interactive/background" modes.
*   **Memory & Context Routing (Claude, Gemini, Copilot, OpenCode):** As context windows stretch, intelligent routing is critical. Tools are moving toward AST-aware code reading, decoupled memory settings (global vs. project-specific), and preventing context "drift" during long sessions.

## 4. Differentiation Analysis
*   **Claude Code** focuses heavily on **enterprise sandboxes and deep workflows**. Its differentiator is the "Cowork" VM environment, though it currently struggles with filesystem (VirtioFS) maturity. It leans into deep engineering tasks but suffers from UI regressions (e.g., destroyed terminal scrollback).
*   **OpenAI Codex** is pushing a **desktop-first, plugin-rich ecosystem**. With a marketplace, secure enclave auth, and Amazon Bedrock provider support, Codex targets developers wanting a polished, extensible app, though it struggles with remote development parity.
*   **Gemini CLI** prioritizes **offline resilience and AI-driven devex**. By bundling `ripgrep` for offline search and introducing AI bots for repo maintenance, Gemini targets robust, air-gapped or network-unstable environments. 
*   **GitHub Copilot CLI** remains the **enterprise compliance laggard but workflow incumbent**. Its primary focus is resolving enterprise friction (custom hostnames, org-level models), but it lags behind in native CLI agility and network resilience (rate limits).
*   **Kimi Code CLI** is defined by **hyper-active community iteration and multi-model compatibility**. It is heavily focused on refining the underlying plumbing (MCP JSON schemas, shell PTY allocation) to serve developers building complex external swarm APIs.
*   **Qwen Code** is heavily focused on **SDK integration and developer tooling**. Its unique angle is pushing first-party Python/Java SDKs and local LLM support, though it is currently bogged down by internal policy debates regarding free-tier quotas.

## 5. Community Momentum & Maturity
*   **Hyper-growth / Fragmented (Kimi Code, OpenCode, Qwen):** These communities are moving the fastest. Kimi Code's 27 PRs in a single day indicates explosive momentum. However, they exhibit "growing pains" typical of rapidly maturing software, such as OpenCode's memory leak megathreads and Kimi/Qwen's strict API schema compatibility issues.
*   **Mature but Heavily Constrained (GitHub Copilot):** Copilot has the largest built-in user base but the lowest CLI PR velocity (only 1 PR today). Community frustration is high due to network fragility (infinite retry loops) and lagging feature parity with its own VS Code extension.
*   **Stable Enterprise Baseline (Claude Code, Codex, Gemini):** These tools ship regular, predictable releases. Claude and Codex communities are currently highly focused on the macroeconomics of AI development (token burn, billing bugs, rate limits), signaling a user base deploying these tools in production rather than just for local experimentation.

## 6. Trend Signals
1.  **The Context Tracking Crisis:** Across almost all platforms, developers report that actual context/token usage drastically mismatches UI dashboards (e.g., OpenCode, Kimi, Codex). As models support 1M+ tokens, **client-side token tracking infrastructure is critically lagging behind API capabilities**, leading to unexpected costs and hard 400 API limits.
2.  **Terminal UI (TUI) is a Universal Pain Point:** The transition from simple command-line interfaces to rich TUIs is breaking standard terminal behaviors. Keystroke lag (Kimi), broken scrollback (Claude), high CPU usage (Codex), and broken backspace keys (Gemini) indicate that **vendors need to invest more heavily in native terminal rendering stacks** rather than relying on heavy web-view abstractions.
3.  **Enterprise Guardrails vs. Developer Autonomy:** There is a clear industry tug-of-war. Developers want "YOLO" modes and mid-flight prompt injections to speed up local workflows, while enterprise users demand granular file-read permissions, SSH/remote support, and strict allowlists. Vendors that can cleanly decouple these two paradigms into distinct profiles will capture the enterprise market.
4.  **GPT-5.5 Integration Bottlenecks:** The rollout of newer, heavier models (GPT-5.5, Kimi K2.6, Gemma 4) is exposing integration fragilities. Tools are experiencing breaking changes in reasoning effort wire formats, context window truncations, and safety guardrails (e.g., deleting files without permission). **Engineering teams should pin their AI CLI versions and test model upgrades in isolated environments before updating.**

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Through April 24, 2026 | **Source:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

Based on community engagement, longevity, and functional impact, these are the most prominent Skills under active discussion:

| Rank | Skill / PR | Author | Status | Core Functionality |
|:---:|---|---|:---:|---|
| 1 | [#514 — document-typography](https://github.com/anthropics/skills/pull/514) | PGTBoos | 🟢 Open | Prevents orphan lines, widow paragraphs, and numbering misalignment in AI-generated documents |
| 2 | [#83 — skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | eovideu | 🟢 Open | Meta-skills for evaluating skill quality (5 dimensions) and performing security analysis |
| 3 | [#210 — frontend-design (improved)](https://github.com/anthropics/skills/pull/210) | justinwetch | 🟢 Open | Revises the frontend-design skill for higher actionability and instruction clarity |
| 4 | [#486 — ODT / OpenDocument](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | 🟢 Open | Enables creation, template filling, parsing, and HTML conversion of ODT/ODS files |
| 5 | [#723 — testing-patterns](https://github.com/anthropics/skills/pull/723) | 4444J99 | 🟢 Open | Comprehensive testing stack: philosophy, unit testing, React component testing, integration & E2E |
| 6 | [#568 — ServiceNow platform](https://github.com/anthropics/skills/pull/568) | Vanka07 | 🟢 Open | Broad ServiceNow assistant covering ITSM, ITOM, SecOps, HRSD, CSDM, and IntegrationHub |
| 7 | [#806 — sensory (macOS AppleScript)](https://github.com/anthropics/skills/pull/806) | AdelElo13 | 🟢 Open | Native macOS automation via `osascript` with a two-tier permission model |
| 8 | [#997 — xiao (Xiaomi Robot Vacuum)](https://github.com/anthropics/skills/pull/997) | dacrypt | 🟢 Open | Agent-ready CLI skill controlling Xiaomi robot vacuums via cloud API |

**Discussion Highlights:**
- **#514 (typography)** addresses a universal pain point—AI-generated documents suffer from subtle but persistent formatting flaws that erode professional quality.
- **#83 (meta-skills)** represents the community's push toward self-improving skill quality; the security analyzer component has drawn notable interest given trust concerns (see Issue [#492](https://github.com/anthropics/skills/issues/492)).
- **#486 (ODT)** fills a significant gap in open-standard document support, remaining active through mid-April 2026.
- **#723 (testing-patterns)** is the most comprehensive testing skill proposed to date, covering the full Testing Trophy model.

---

## 2. Community Demand Trends

Analysis of the top Issues reveals five concentrated demand vectors:

| Trend | Evidence (Issues) | Signal Strength |
|---|---|:---:|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (👍5) — Users want shared skill libraries, not manual file-swap workflows | 🔴 High |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) — Community skills impersonating the `anthropic/` namespace enable privilege escalation | 🔴 High |
| **Skill-as-MCP Protocol** | [#16](https://github.com/anthropics/skills/issues/16) — Exposing Skills as Model Context Protocol servers for standardized APIs | 🟡 Medium |
| **Reliability & Deduplication** | [#189](https://github.com/anthropics/skills/issues/189) (👍7), [#556](https://github.com/anthropics/skills/issues/556) (👍6) — Duplicate skills waste context; `run_eval.py` shows 0% trigger rate | 🔴 High |
| **Enterprise / SSO Compatibility** | [#29](https://github.com/anthropics/skills/issues/29) (Bedrock), [#532](https://github.com/anthropics/skills/issues/532) (API key gate) — Enterprise users are blocked by auth model gaps | 🟡 Medium |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) — Demand for policy enforcement, threat detection, and audit trail skills for AI agent systems | 🟡 Medium |

---

## 3. High-Potential Pending Skills

These open PRs are strong candidates for near-term merging based on maintenance activity, functional value, and scope:

| PR | Skill | Why It's Ready | Last Active |
|---|---|---|:---:|
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX tracked-change fix | Precise bug fix resolving document corruption from `w:id` collision | Apr 16 |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML validation fix | Prevents silent parsing failures in `quick_validate.py` | Apr 16 |
| [#538](https://github.com/anthropics/skills/pull/538) | PDF case-sensitivity fix | 8 reference mismatches on case-sensitive filesystems | Apr 16 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT document creation | Addresses open-standard gap; actively updated | Apr 14 |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow platform | Extremely broad enterprise coverage; latest update Apr 23 | Apr 23 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Full-stack testing coverage; updated Apr 21 | Apr 21 |
| [#666](https://github.com/anthropics/skills/pull/666) | Remove duplicate skill-creator | Cleanup PR eliminating 356-line redundant version | Mar 29 |

> **Note:** Three of the seven highest-potential PRs are from contributor **Lubrsy706**, who has emerged as a key quality-maintenance contributor focused on file-validation and OOXML correctness.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for enterprise-grade reliability—deduplication, proper evaluation tooling, and org-level sharing—rather than any single new skill category, reflecting a maturing ecosystem where infrastructure concerns now outweigh novelty.**

---

# Claude Code Community Digest — 2026-04-24

---

## 1. Today's Highlights

Release **v2.1.118** shipped today, bringing vim visual modes (`v`/`V`) and a unified `/usage` command that merges `/cost` and `/stats`, along with custom theme support from `/theme`. On the issue tracker, a new crop of **Cowork** (sandboxed VM) bugs surfaced around VirtioFS mounts and OTLP monitoring, while the community continues to push for finer-grained control over context compaction and memory settings. Several housekeeping PRs from contributor **sakal-s** fix subtle scripting bugs in the repo's CI/tooling infrastructure.

---

## 2. Releases

### v2.1.118
- **Vim visual mode (`v`) and visual-line mode (`V`)** — full selection, operators, and visual feedback for vim users.
- **`/usage` command** — merges the previous `/cost` and `/stats` commands into a single tabbed view; `/cost` and `/stats` remain as typing shortcuts that redirect to the relevant tab.
- **Custom named themes** — create and switch between themes directly from `/theme`, with support for hand-edited theme files.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#42796](https://github.com/anthropics/claude-code/issues/42796) — *Claude Code unusable for complex engineering tasks with Feb updates* | **2077 👍 · 580 comments.** The single most-upvoted issue on the tracker. Community reports a sustained regression in model capability for large-scale refactoring since February. Still a lightning rod for frustration despite being closed. |
| 2 | [#8477](https://github.com/anthropics/claude-code/issues/8477) — *Add option to always show Claude's thinking* | **235 👍 · 74 comments.** Long-standing request to make extended-thinking output permanently visible. Consistently resurfaces with each release. |
| 3 | [#43052](https://github.com/anthropics/claude-code/issues/43052) — *Claude Opus sabotaging code / token waste* | **42 comments.** Represents a vocal fringe convinced the model intentionally inflates token usage. Labeled `invalid`, but highlights genuine distrust around cost transparency. |
| 4 | [#36151](https://github.com/anthropics/claude-code/issues/36151) — *Multi-account switching in Claude Mobile without shared email* | **138 👍 · 42 comments.** Top feature request for mobile; users with work/personal accounts want seamless switching. |
| 5 | [#23134](https://github.com/anthropics/claude-code/issues/23134) — *Option to disable paste text collapse in input field* | **93 👍 · 38 comments.** The `[Pasted text #N +X lines]` UI collapse prevents review before submit — a daily friction point for power users. |
| 6 | [#42670](https://github.com/anthropics/claude-code/issues/42670) — *No way to access conversation history — alternate screen buffer kills scrollback* | **35 👍 · 10 comments.** Critical UX regression since v2.1.89's fullscreen TUI switch. Users lose native terminal scrollback with no in-app alternative. |
| 7 | [#51686](https://github.com/anthropics/claude-code/issues/51686) — *CLAUDE.md language/dialect instructions drift during long sessions* | **5 comments.** Highly specific repro: Spanish `voseo` leaks into neutral-Spanish output over time. Exposes a systemic context-drift problem in long sessions. |
| 8 | [#52251](https://github.com/anthropics/claude-code/issues/52251) — *Agent-Teams sub-agents with model: opus cannot call SendMessage/TaskCreate* | **3 comments.** New issue affecting the Agent Teams (tmux backend) feature — Opus-model sub-agents are blocked from inter-agent communication tools despite correct frontmatter. |
| 9 | [#52488](https://github.com/anthropics/claude-code/issues/52488) — *Decouple CLAUDE.md and MEMORY.md controls* | **3 comments.** `autoMemoryEnabled` toggles both files simultaneously; users want independent control. Clean, actionable feature request. |
| 10 | [#52553](https://github.com/anthropics/claude-code/issues/52553) — *Prompt input locked after rate-limit error — only full restart recovers* | **2 comments.** Rate-limit errors can brick the prompt input indefinitely. High-impact UX bug that needs urgent attention. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#52418](https://github.com/anthropics/claude-code/pull/52418) — *Prevent heredoc injection in ralph loop setup* | Splits state-file writes into heredoc (frontmatter) + `printf` (prompt) to prevent early heredoc termination and variable expansion in user prompts. |
| 2 | [#52417](https://github.com/anthropics/claude-code/pull/52417) — *Add explicit sort params to auto-close-duplicates query* | Fixes GitHub Issues API query to sort `created ASC`, eliminating wasted API calls on recent issues that are always filtered out by the 3-day age check. |
| 3 | [#52416](https://github.com/anthropics/claude-code/pull/52416) — *Escape regex metacharacters in frontmatter field names* | Field names like `my.setting` would regex-match `myXsetting`; now properly escaped in `parse-frontmatter.sh` and `validate-settings.sh`. |
| 4 | [#52415](https://github.com/anthropics/claude-code/pull/52415) — *Normalize whitespace in completion promise before comparison* | One-sided whitespace normalization caused false mismatches in the completion-promise check; now both sides are normalized consistently. |
| 5 | [#52239](https://github.com/anthropics/claude-code/pull/52239) — *Fix $schema URL (was 404)* | The `$schema` field pointed to a non-existent `anthropic.com` URL; redirected to SchemaStore.org where the schema is being published. Closed/merged. |
| 6 | [#26328](https://github.com/anthropics/claude-code/pull/26328) — *Session-manager plugin* | Community plugin adding `/session-manager:delete`, list, and cleanup commands. Addresses a long-missing session lifecycle management gap. Closed (likely superseded or needs rework). |
| 7 | [#41518](https://github.com/anthropics/claude-code/pull/41518) — *Fully Open Source Claude Code* | Ambitious community effort: extracted **1906 TypeScript source files** from the shipped `cli.js.map`, added Bun build config with shims and stubs. Successfully compiles `--version`/`--help`. Still open — a statement piece for the open-source community. |
| 8 | [#50567](https://github.com/anthropics/claude-code/issues/50567) — *OTEL_METRICS_EXPORTER=otlp silently no-ops* | (Filed as issue, cross-referenced in PR discussions) OTLP exporter packages are missing from the bundled build, making the env var a no-op. |
| 9 | [#39471](https://github.com/anthropics/claude-code/issues/39471) — *Cowork OTLP monitoring not emitting events* | Companion to the above — Cowork VM's OTel exporter sends zero HTTP requests despite correct config. Affects enterprise observability workflows. |
| 10 | [#52567](https://github.com/anthropics/claude-code/issues/52567) — *Cowork macOS VirtioFS mount fails after first artifact* | OneDrive-symlinked `~/Documents` causes VirtioFS to fail on every prompt after the first successful mount in Cowork. |

---

## 5. Feature Request Trends

1. **Granular memory/context control** — Multiple issues request independent toggles for `CLAUDE.md` vs `MEMORY.md` (#52488), configurable auto-compact thresholds (#52487), and pre-compact hooks (#43946). Users want to manage *what* gets compacted and *when*.

2. **Thinking transparency** — The enduring request for always-visible thinking (#8477, #24285) continues to accumulate support. Users don't just want to know *that* Claude thought — they want to see *what* it thought.

3. **Session and conversation management** — Resuming sessions loses history (#52146), scrollback is destroyed by the alternate screen buffer (#42670), and there's no built-in session lifecycle tooling (#26328). Session continuity is a top pain point.

4. **Model-specific UX clarity** — `/effort` levels that don't apply to the current model still appear in menus (#52566). Users want the UI to reflect what's actually active.

5. **Enterprise & multi-tenancy** — Multi-account switching (#36151), HKLM managed settings not applying (#52546), and team vs. pro rate-limit confusion (#52558) all point to growing enterprise usage outpacing the current account management infrastructure.

---

## 6. Developer Pain Points

- **Context window and compaction opacity** — The single biggest frustration cluster. Developers cannot control when compaction fires, cannot hook into it reliably (no `PreCompact` event), and lose conversation state after compaction or session resume. This directly impacts long-running engineering workflows.

- **Cost unpredictability and billing bugs** — Weekly usage window resets shifting dates (#52564), $1,400 in gift credits destroyed by Stripe proration (#41499), and the persistent narrative of "token waste" (#43052) erode trust. Users need transparent, predictable cost controls.

- **Terminal/TUI regressions** — The switch to the alternate screen buffer broke scrollback (#42670), paste collapse hides reviewable content (#23134), and `--name` labels render inconsistently (#52562). Each release seems to introduce small but cumulative TUI friction.

- **Cowork (sandboxed VM) reliability** — VirtioFS mount failures (#52567), silent OTLP no-ops (#50567, #39471), and monitoring gaps suggest the Cowork feature shipped before its observability and filesystem integration were mature.

- **Encoding and platform compatibility** — Windows-1252 file corruption (#7134) remains open after 7 months. Cross-platform edge cases in encoding, path handling, and terminal compatibility continue to affect a significant minority of users.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-24

## 1. Today's Highlights
OpenAI shipped Codex **v0.124.0** alongside a massive push of internal infrastructure PRs, introducing quick reasoning controls in the TUI and sticky multi-environment support for app-server sessions. Community focus is sharply divided between excitement over new features (Amazon Bedrock integration, Vim composer mode, and a plugin marketplace) and ongoing frustration with the GPT-5.5 rollout, which appears to have broken 1M context windows and exacerbated existing rate-limit and token-burn issues.

## 2. Releases

- **rust-v0.124.0**: Introduces quick TUI reasoning controls (`Alt+,` to lower, `Alt+.` to raise), with automatic resets when models are upgraded. App-server sessions now support managing multiple sticky environments.
- **rust-v0.123.0**: Adds a built-in `amazon-bedrock` model provider with configurable AWS profile support, a `/mcp verbose` slash command for full MCP diagnostics, and plugin MCP loading improvements.

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#14593](https://github.com/openai/codex/issues/14593) — *Burning tokens very fast* (559 💬, 237 👍) | The top-voted open issue. Users report rapid, unexplained token consumption, especially on Business/Pro plans, directly impacting cost and trust. |
| 2 | [#10450](https://github.com/openai/codex/issues/10450) — *Remote Development in Codex Desktop App* (155 💬, 594 👍) | The highest 👍 issue overall. Developers want to connect the Desktop App to remote workspaces, matching the core VS Code remote workflow. |
| 3 | [#19208](https://github.com/openai/codex/issues/19208) — *1M context window gone after GPT 5.5 Release* (4 💬, 3 👍) | A possible regression: users who enabled 1M context for GPT-5.4 find it missing after upgrading to 5.5. |
| 4 | [#19185](https://github.com/openai/codex/issues/19185) — *config.toml context window settings are not respected* (4 💬, 6 👍) | Related to above; `model_context_window` in `config.toml` appears to be ignored, breaking manual configuration. |
| 5 | [#16231](https://github.com/openai/codex/issues/16231) — *High CPU usage on macOS after VS Code extension update* (45 💬, 58 👍) | A regression in the latest VS Code extension causes severe CPU spikes on Apple Silicon, making Codex unusable for many. |
| 6 | [#19202](https://github.com/openai/codex/issues/19202) — *Deleting files without permission* (2 💬) | Critical safety concern: the agent deleted files despite no explicit permission given, undermining trust in the sandbox/permission model. |
| 7 | [#16911](https://github.com/openai/codex/issues/16911) — *Constant ask for MCP Tool approvals* (4 💬, 9 👍) | MCP tools repeatedly prompt for approval even after being trusted, creating a disruptive UX loop. |
| 8 | [#11023](https://github.com/openai/codex/issues/11023) — *Codex App for Linux* (14 💬, 59 👍) | Strong demand for a native Linux desktop app; users with Intel Mac issues also want this as an alternative. |
| 9 | [#18341](https://github.com/openai/codex/issues/18341) — *Persistent blurred overlay on Intel Mac* (11 💬, 8 👍) | UI bug rendering the Desktop App unusable on Intel Macs; remains unresolved in recent alphas. |
| 10 | [#19197](https://github.com/openai/codex/issues/19197) — *Persistent orphaned subagents & session freezes* (2 💬) | Subagent lifecycle management failures causing complete session freezes, especially in long-running sessions. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#18595](https://github.com/openai/codex/pull/18595) — *feat(tui): add vim composer mode* | Adds full Vim normal/operator bindings to the TUI composer, togglable via `/vim` command with frozen preset snapshots. |
| 2 | [#18593](https://github.com/openai/codex/pull/18593) — *feat(tui): add configurable keymap support* | Refactors hardcoded TUI shortcuts into a fully configurable keymap system, the foundation for the Vim mode and custom bindings. |
| 3 | [#18594](https://github.com/openai/codex/pull/18594) — *feat(tui): add keymap slash command* | Adds a guided `/keymap` slash command for discovering and editing bindings from within the TUI. |
| 4 | [#18704](https://github.com/openai/codex/pull/18704) — */plugins: add marketplace install flow* | Introduces an "Add Marketplace" tab to `/plugins` for discovering and installing third-party plugin sources. |
| 5 | [#18950](https://github.com/openai/codex/pull/18950) — *feat: let model providers own model discovery* | Decouples model catalog fetching from the central manager, making it easier for providers like Bedrock to manage their own model lists. |
| 6 | [#18431](https://github.com/openai/codex/pull/18431) — *app-server: add macOS device key provider* | Hardware-backed Secure Enclave keys on macOS for non-extractable signing, strengthening app-server auth. |
| 7 | [#18897](https://github.com/openai/codex/pull/18897) — *Add sticky environment API and thread state* | Persists environment selections across turns in a thread, enabling consistent model/reasoning choices. |
| 8 | [#19114](https://github.com/openai/codex/pull/19114) — *Support ChatGPT Library file tools* | Enables `store_in_library` file uploads and propagates `library_file_id` into MCP file arguments. |
| 9 | [#19216](https://github.com/openai/codex/pull/19216) — *Allow any granular approval requirement* | Adds `{ granular = "any" }` to approval policies, enabling more flexible managed permission configurations. |
| 10 | [#19193](https://github.com/openai/codex/pull/19193) — *Support Codex Apps auth elicitations* | Routes MCP auth URL flows through the TUI app-link handler, improving third-party OAuth flows. |

## 5. Feature Request Trends

1. **Remote Development Support** — The single most-upvoted request (#10450, 594 👍). Developers need to connect the Desktop App to remote/SSH containers, matching standard VS Code workflows.
2. **Native Linux Desktop App** — Strong demand (#11023, 59 👍) driven by both Linux developers and Intel Mac users experiencing unresolved bugs.
3. **Cross-machine Config Sync** — Users want `~/.codex/config.toml` split into user preferences and local trust entries, with an easy sync path (#11061, #14601).
4. **Granular Sandbox/Approval Controls** — Community wants more fine-grained permission management, especially for MCP tools and shell commands, without constant re-approval (#16911, #19216).
5. **Extended Context Windows** — The GPT-5.5 rollout has renewed demand for reliable, large context support (#19208, #19185), with users explicitly configuring 960K–1M token windows.

## 6. Developer Pain Points

- **Token Burn & Rate Limits**: Issue #14593 (237 👍, 559 comments) remains the most active issue. Users on paid plans are experiencing rapid, unexplained token consumption that makes the tool financially risky to use.
- **GPT-5.5 Regression**: The 5.5 model appears to have broken or reset 1M context window settings, and some users report the model behaving erratically (deleting files without permission, #19202).
- **macOS Performance**: The latest VS Code extension causes severe CPU spikes on Apple Silicon (#16231), and the Desktop App remains buggy on Intel Macs with persistent UI overlays (#18341).
- **Windows Instability**: Multiple reports of automations not starting (#19011), git permission denied errors (#19190), and WSL settings disappearing from the UI (#14925) suggest Windows support still lags behind macOS.
- **MCP Approval Fatigue**: Repeated prompts for already-approved MCP tools (#16911) and unclear permission boundaries are disrupting developer flow.
- **Subagent Lifecycle Issues**: Orphaned subagents and session freezes (#19197, #18335) indicate the multi-agent architecture needs better resource management, especially in long-running sessions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-04-24.

### 1. Today's Highlights
The Gemini CLI ecosystem is actively pushing towards v0.41.0, with recent nightly builds introducing highly-requested offline capabilities via ripgrep bundling and critical fixes for YOLO mode. Community activity is heavily focused on Windows compatibility, specifically resolving a severe backspace regression introduced in v0.39.0 where standard backspace triggers word deletion. Behind the scenes, maintainers are merging significant architectural improvements, including a new context manager, availability-aware model routing, and an AI-driven "Cognitive Repository" bot for automated issue triage.

### 2. Releases
*   **[v0.41.0-nightly.20260423](https://github.com/google-gemini/gemini-cli/releases/tag/v0.41.0-nightly.20260423.gd1c91f526):** Bundles `ripgrep` binaries into the SEA (Single Executable Application) for robust offline support, and prevents YOLO mode from being accidentally downgraded.
*   **[v0.40.0-preview.2](https://github.com/google-gemini/gemini-cli/releases/tag/v0.40.0-preview.2):** Introduces a retry mechanism for OpenSSL 3.x SSL errors encountered during streaming.
*   **[v0.39.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.39.0):** Simplifies policy priorities for read-only rules in the plan mode and adds a memory usage integration test harness.

### 3. Hot Issues
1.  **[Incorrect backspace behaviour (#25856)](https://github.com/google-gemini/gemini-cli/issues/25856):** A top user complaint where pressing `Backspace` in Windows behaves like `Ctrl+Backspace` since the v0.39.0 update. High engagement confirms widespread impact on Windows/VS Code terminal users.
2.  **[Shell command execution gets stuck (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166):** Gemini incorrectly hangs on "Waiting input" after executing simple CLI commands that have already finished. Gained 3 upvotes, indicating a frustrating workflow blocker.
3.  **[Subagent recovery hides interruption (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323):** A P1 maintainer issue where subagents falsely report `status: "success"` upon hitting maximum turn limits, hiding the fact that the agent was interrupted before finishing its analysis.
4.  **[Gemini cli keeps asking for permissions (#24916)](https://github.com/google-gemini/gemini-cli/issues/24916):** Users report that "allow for all future sessions" frequently fails to persist, causing repetitive permission prompts for the same files.
5.  **[AST-aware file reads and mapping (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745):** A major architectural investigation exploring AST-aware tooling to allow precise method-bound reads, reducing token noise and multi-turn misalignment.
6.  **[Maximum turns typo points to missing file (#25889)](https://github.com/google-gemini/gemini-cli/issues/25889):** The CLI warns users to update a non-existent `setting.json` instead of the correct `settings.json` when hitting the 25-turn limit.
7.  **[Implement memory routing: global vs. project (#22819)](https://github.com/google-gemini/gemini-cli/issues/22819):** A highly-requested structural change to ensure the memory subagent correctly distinguishes between global user preferences (`~/.gemini/`) and project-specific conventions (`.gemini/`).
8.  **[Model frequently creates tmp scripts (#23571)](https://github.com/google-gemini/gemini-cli/issues/23571):** Users report that shell-execution restrictions inadvertently cause the model to generate messy edit scripts in random directories, polluting the workspace.
9.  **[Agent should discourage destructive behavior (#22672)](https://github.com/google-gemini/gemini-cli/issues/22672):** Requests inherent safety blocks against forceful commands (like `git reset --force` or raw DB modifications) when safer alternatives exist.
10. **[Gemini CLI encounters 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246):** A hard blocker for tool-heavy environments where the agent fails to dynamically limit its tool scope, resulting in API errors.

### 4. Key PR Progress
1.  **[fix(core): prevent ENOENT crash due to proper-lockfile race (#25885)](https://github.com/google-gemini/gemini-cli/pull/25885):** A P0 fix for a critical startup crash/hang caused by a race condition when accessing `.gemini/projects.json.lock`.
2.  **[feat(repo): add gemini-cli-bot metrics and workflows (#25888)](https://github.com/google-gemini/gemini-cli/pull/25888):** Introduces an automated "Cognitive Repository" architecture using high-frequency Pulse workflows and daily Brain workflows for repository maintenance.
3.  **[feat: bundle ripgrep binaries into SEA for offline support (#25342)](https://github.com/google-gemini/gemini-cli/pull/25342):** Integrated into the latest nightly, allowing code search functionality to operate without network dependencies.
4.  **[fix(cli): restrict ctrl+backspace detection to Windows Terminal (#25882)](https://github.com/google-gemini/gemini-cli/pull/25882):** Resolves the hot backspace issue by narrowing the detection logic so `cmd.exe` and PowerShell aren't incorrectly treated as Windows Terminal.
5.  **[feat(routing): availability-aware auto-routing with best-effort pro (#25886)](https://github.com/google-gemini/gemini-cli/pull/25886):** Implements intelligent fallback routing to Flash models if the Pro model times out, introducing a "Best Effort Pro" setting.
6.  **[perf(core): fix slow boot by fetching experiments and quota asynchronously (#25758)](https://github.com/google-gemini/gemini-cli/pull/25758):** Addresses 9+ second boot times by refactoring the `refreshAuth` sequence to execute network requests concurrently.
7.  **[feat(voice): implement real-time voice mode (#24174)](https://github.com/google-gemini/gemini-cli/pull/24174):** Implements native voice dictation with a pluggable backend supporting both the zero-install Gemini Live API and local `whisper.cpp`.
8.  **[feat(core): add support for Gemma 4 models (#25604)](https://github.com/google-gemini/gemini-cli/pull/25604):** Adds integration for the new Gemma 4 model family (`gemma-4-31b-it` and `gemma-4-26b-a4b-it`) with advanced "Thinking" capabilities.
9.  **[feat(core): wire up the new ContextManager and AgentChatHistory (#25409)](https://github.com/google-gemini/gemini-cli/pull/25409):** Major foundational refactoring replacing legacy history structures to improve agent memory and context window management.
10. **[feat(core): enhance shell command validation (#25720)](https://github.com/google-gemini/gemini-cli/pull/25720):** Improves the policy engine by implementing recursive command checking for subshells and adding a configurable core tools allowlist.

### 5. Feature Request Trends
*   **Advanced Context & Memory Routing:** Strong momentum towards intelligent memory management, specifically differentiating global preferences from project-specific rules, and proactively writing to memory without explicit user prompts.
*   **Robust Offline & Standalone Capabilities:** Growing demand for self-contained binaries (SEA) that bundle search (ripgrep) and transcription (Whisper) tools to ensure full functionality in offline or air-gapped environments.
*   **Code-Aware (AST) Tooling:** Users and maintainers are heavily interested in shifting from regex/text-based file reading to AST-aware searches to map codebases, minimizing token waste and improving code-edit accuracy.

### 6. Developer Pain Points
*   **Windows Terminal Compatibility:** The CLI struggles with terminal input sequences on Windows, leading to broken keystrokes (Backspace/Ctrl+Backspace confusion) and UI rendering bugs (thick black borders, corrupted screens after exiting external editors).
*   **Permission and State Persistence:** Users are frustrated by the CLI's inability to reliably remember tool permissions across sessions and confusing state management errors (e.g., hangs on "Waiting input", lockfile race crashes).
*   **Subagent Hallucinations & Messy Workspaces:** Agents hitting maximum turn limits tend to mask failures as "successes". Furthermore, when restricted from direct edits, models resort to littering temporary shell scripts across workspace directories instead of using clean, in-memory edits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-24

## 1. Today's Highlights
GitHub shipped two rapid-fire releases (`v1.0.35-5` and `v1.0.35-6`) introducing much-needed enterprise hostname support, new session management commands, and improved UI completion controls. On the community front, rate limiting remains the dominant frustration, filling the tracker with reports of infinite retry loops, abrupt sub-agent failures, and wildly inaccurate usage percentage displays, prompting several network-layer fix proposals.

## 2. Releases

### [v1.0.35-6](https://github.com/github/copilot-cli/releases/tag/v1.0.35-6)
* **Improved:** Session sync prompts now use clearer labels and explicitly explain GitHub.com cross-device sync behavior.

### [v1.0.35-5](https://github.com/github/copilot-cli/releases/tag/v1.0.35-5)
* **Added:** `COPILOT_GH_HOST` environment variable for GitHub hostname, which takes precedence over `GH_HOST` (essential for GitHub Enterprise Server setups).
* **Added:** `Ctrl+Y` shortcut (alongside `Tab`) to accept the highlighted option in completion popups (e.g., `@`-mentions, path completions, slash commands).
* **Added:** `/session delete`, `/session delete <id>`, and `/session delete-all` sub-commands.

## 3. Hot Issues

1. **[#53 [OPEN] Bring back the GitHub Copilot in the CLI commands to not break workflows](https://github.com/github/copilot-cli/issues/53)**
   A mega-thread with 75 thumbs-up and 30 comments. Users are frustrated by breaking changes, and the community has started building open-source alternatives like `shell-ai`. This is the top-voted issue, signaling deep dissatisfaction with CLI workflow regressions.
2. **[#1703 [OPEN] Copilot CLI does not list all org-enabled models (e.g., Gemini 3.1 Pro)](https://github.com/github/copilot-cli/issues/1703)**
   With 38 thumbs-up, users report that the CLI filters out models enabled at the organization level—a critical parity gap with VS Code Copilot that limits enterprise flexibility.
3. **[#2760 [CLOSED] Implement proper HTTP retry logic for 429 responses](https://github.com/github/copilot-cli/issues/2760)**
   Users observed aggressive, instant retries on HTTP 429 (Rate Limited) responses, creating 20+ retries per minute. This highlights the fragility of the networking layer under throttling.
4. **[#2787 [CLOSED] Endless rate limit prompts](https://github.com/github/copilot-cli/issues/2787)**
   Users hit global rate limits and receive endless prompt loops. The 6-second reset window is far too short, and the UX exposes the raw internals rather than gracefully recovering.
5. **[#2889 [CLOSED] Percentage of remaining premium requests is changing widely during session](https://github.com/github/copilot-cli/issues/2889)**
   Premium request percentages fluctuate wildly during a session (23% → 57% → 52%), eroding trust in the quota tracking system. Users cannot reliably budget their usage.
6. **[#2869 [CLOSED] Delete Session folder command](https://github.com/github/copilot-cli/issues/2869)**
   Directly led to the new `/session delete` and `/session delete-all` commands shipped in v1.0.35-5. A textbook example of community-driven development.
7. **[#2840 [CLOSED] Rate limit aborts subagents](https://github.com/github/copilot-cli/issues/2840)**
   When rate-limited using auto-model, spawned sub-agents silently emit "rate limited" and fail, forcing the main agent to retry—compounding the rate limit problem.
8. **[#2416 [CLOSED] Sub-agents cannot see skills from their own plugin due to token truncation](https://github.com/github/copilot-cli/issues/2416)**
   Custom agents only see 29 truncated skills due to `<available_skills>` token truncation. A critical issue for the plugin/agent ecosystem.
9. **[#2932 [OPEN] Cannot use Grok 4.20 due to reasoningEffort being sent always for responses wire format](https://github.com/github/copilot-cli/issues/2932)**
   The CLI always sends `reasoningEffort` in the responses wire format, making it incompatible with third-party providers like xAI's Grok. A blocker for bring-your-own-model scenarios.
10. **[#2857 [CLOSED] `.github/instructions` files fully inlined into system prompt ignoring `applyTo` frontmatter](https://github.com/github/copilot-cli/issues/2857)**
    Instruction files with `applyTo` YAML frontmatter are indiscriminately dumped into the system prompt, wasting context window tokens. A significant context-management regression.

## 4. Key PR Progress

> **Note:** Only 1 PR was updated in the last 24 hours, so we highlight the single notable entry.

1. **[#2565 [OPEN] Guard against duplicate PATH entries on reinstall](https://github.com/github/copilot-cli/pull/2565)** by `marcelsafin`
   Prevents the installer from appending duplicate PATH configuration lines to shell profiles when run multiple times without restarting the shell. A common pain point for automated setup scripts and CI environments.

*(The remaining 9 PR slots are omitted due to low activity in the past 24 hours. The repository shows only 1 updated PR in this window.)*

## 5. Feature Request Trends

1. **Bring Your Own Model / Third-Party Provider Support** — Multiple requests to use xAI Grok, Google Gemini, and OpenAI-compatible endpoints with proper wire format flexibility (#2932, #1703).
2. **Session Lifecycle Management** — Strong demand for granular session control, culminating in the new `/session delete` commands (#2869, #2813).
3. **Codebase Indexing Parity** — Persistent requests for repository indexing to match VS Code capabilities (#20).
4. **`/ask` Mode (Read-Only)** — A non-agent, non-editing query mode for asking questions without risking code changes (#92).
5. **Custom Instructions Reliability** — Better handling of `.github/instructions`, respecting `applyTo` frontmatter, and not ignoring `.gitignore` paths (#2857, #1981).
6. **Smarter Permissions / Allow-All Customization** — Fine-grained auto-approve rules (e.g., allow everything *except* destructive operations) (#2855).
7. **Containerized Distribution** — Docker images and Dev Container support for environments without Node.js (#55, #35).

## 6. Developer Pain Points

1. **Rate Limiting UX is Broken** — The single biggest complaint. Aggressive retries (#2760), endless prompts (#2787), sub-agent failures (#2840), and erratic quota percentages (#2889, #2804) make the CLI feel unstable under normal usage. Users report being unable to consume their allocated premium requests.
2. **Context Window Waste** — Compaction summaries flooding the terminal (#2858) and full inlining of instruction files (#2857) waste tokens and screen real estate.
3. **Enterprise Features Lagging** — Missing org-enabled models (#1703), broken `/remote` URLs (#2813), and custom instructions being silently skipped (#1981) erode enterprise trust.
4. **Terminal Compatibility** — Windows TUI corruption (#2864), IDE conflicts causing crashes (#2747), and missing macOS text editing shortcuts (#45) degrade daily usage.
5. **Feature Parity Gaps with VS Code** — Lack of codebase indexing (#20), reduced model availability (#1703), and no open-source transparency (#83) remain long-standing community grievances.


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-24

## 1. Today's Highlights
The Kimi Code CLI community is seeing a massive surge in contributor activity, with over 27 Pull Requests updated in the last 24 hours, focused heavily on fixing terminal UI lag, refining the new `--yolo` mode, and improving MCP (Model Context Protocol) compatibility. Key discussions revolve around model performance debates (Kimi K2.5 vs. K2.6) and significant token context tracking bugs. Overall, the ecosystem is maturing rapidly with community members actively patching pain points related to IDE integrations, terminal rendering, and agentic workflows.

## 2. Releases
No new official releases were published in the last 24 hours. The repository remains on recent versions 1.37.0 and 1.38.0 (source checkout).

## 3. Hot Issues
Here are the 10 most noteworthy issues currently shaping the Kimi CLI development landscape:

1. **[OPEN] [Kimi K2.5 vs K2.6 (#1925)](https://github.com/MoonshotAI/kimi-cli/issues/1925)**: Users report that the newer K2.6 model "drowns out creativity" with excessive thinking and increases hallucinations. This is a hot debate with 8 comments discussing personality loss and model regression.
2. **[OPEN] [IDEA Terminal Crash (#1990)](https://github.com/MoonshotAI/kimi-cli/issues/1990)**: A critical bug affecting JetBrains/IDEA users where sending a message via Kimi CLI directly closes the entire terminal window.
3. **[OPEN] [VS Code Approval Notifications (#2040)](https://github.com/MoonshotAI/kimi-cli/issues/2040)**: Request for native VS Code `showInformationMessage` popups. Currently, approval dialogs get lost if the IDE window is minimized, freezing the agent's workflow.
4. **[OPEN] [MCP JSON Schema Incompatibility (#1595)](https://github.com/MoonshotAI/kimi-cli/issues/1595)**: A widely acknowledged issue (cross-referenced in many PRs). The Kimi API uses a strict "Moonshot Flavored JSON Schema" that breaks compatibility with standard MCP servers.
5. **[OPEN] [Bottom Toolbar Typing Lag (#2038)](https://github.com/MoonshotAI/kimi-cli/issues/2038)**: Highly detailed isolation of a UX bug where continuous `git` subprocess calls for the bottom toolbar cause noticeable keystroke lag during normal typing.
6. **[OPEN] [Context Window Miscalculation (#2011)](https://github.com/MoonshotAI/kimi-cli/issues/2011)**: Kimi fails with a 400 error (exceeding 262k token limit) even though the local UI indicates the context window is below 50% capacity, indicating a critical tracking bug in the client.
7. **[OPEN] [Subagent Context Blindness (#2024)](https://github.com/MoonshotAI/kimi-cli/issues/2024)**: When utilizing multi-agent swarms, parent agents do not track or display context/token usage from child subagents, making context management a guessing game.
8. **[OPEN] [Shell Tool PTY Allocation (#2037)](https://github.com/MoonshotAI/kimi-cli/issues/2037)**: The shell tool closes `stdin` and lacks PTY allocation, causing interactive CLI commands (`sudo`, `ssh-add`) to corrupt the terminal and hang.
9. **[OPEN] [MCP Server Initialization Failure (#2031)](https://github.com/MoonshotAI/kimi-cli/issues/2031)**: MCP stdio transport fails due to `fastmcp`'s `keep_alive=True` parameter, causing "Server is already initialized" errors.
10. **[CLOSED] [Python 3.14 Segfault (#2022)](https://github.com/MoonshotAI/kimi-cli/issues/2022)**: Dev environment setup (`make prepare`) segfaults on Python 3.14.0a5 in the C YAML extension. Resolved quickly after tracking to the alpha Python version.

## 4. Key PR Progress
Community members are actively submitting high-quality fixes. Here are the top 10 PRs:

1. **[fix(yolo): unblock AskUserQuestion; add orthogonal afk mode (#2045)](https://github.com/MoonshotAI/kimi-cli/pull/2045)**: Fixes `--yolo` mode incorrectly suppressing user-interaction capabilities. Splits logic into distinct "auto-approve" and "non-interactive/afk" modes.
2. **[fix(kosong/kimi): fill in missing JSON Schema type for MCP tool parameters (#2030) - CLOSED](https://github.com/MoonshotAI/kimi-cli/pull/2030)**: Directly addresses the "Moonshot Flavored JSON Schema" issue (#1595) by automatically filling in missing `type` fields for MCP tool parameters.
3. **[feat(soul): RalphFlow architecture with ephemeral context (#1960)](https://github.com/MoonshotAI/kimi-cli/pull/1960)**: Introduces a sophisticated iteration framework to prevent infinite agentic loops by running iterations in isolated temporary context files.
4. **[fix(acp): load ~/.kimi/mcp.json in ACP server sessions (#2047)](https://github.com/MoonshotAI/kimi-cli/pull/2047)**: Fixes an issue where external editors (like Zed) running Kimi as an ACP agent completely ignored user-configured MCP servers.
5. **[fix(skill): scope-group the skills system prompt (#2044)](https://github.com/MoonshotAI/kimi-cli/pull/2044)**: Fixes a bug where local project skills and global skills were merged flatly. Now groups them by scope to improve the model's reasoning capabilities.
6. **[fix(shell): show active agent task count (#2041)](https://github.com/MoonshotAI/kimi-cli/pull/2041)**: Alleviates the "UI feels stalled" issue by exposing the count of actively running background subagents in the prompt status bar.
7. **[feat(tools): enable strict mode for specific tools (#2036)](https://github.com/MoonshotAI/kimi-cli/pull/2036)**: Implements OpenAI/Anthropic strict schema validation for core tools (e.g., `Shell`, `WriteFile`) to drastically reduce function-call hallucinations.
8. **[fix(ui): flip /usage gauge color thresholds (#2046)](https://github.com/MoonshotAI/kimi-cli/pull/2046)**: Resolves an inverted UI bug where low remaining context was incorrectly colored green instead of red. 
9. **[feat(kimi): add KIMI_MODEL_THINKING_KEEP env for preserved thinking (#2029) - CLOSED](https://github.com/MoonshotAI/kimi-cli/pull/2029)**: Adds support for forwarding `thinking.keep` to the Moonshot API, enabling preserved thinking context for K2.6 models.
10. **[fix(cli): clear tombstone when disk token was rotated (#2026)](https://github.com/MoonshotAI/kimi-cli/pull/2026)**: Fixes concurrent process auth crashes (e.g., multiple VS Code windows) by properly handling token rotation and clearing outdated tombstones.

## 5. Feature Request Trends
*   **Advanced Agentic APIs & Swarm Control**: Users are building complex external tools and asking for official APIs to leverage Kimi CLI as an execution engine and interact with "Agent Swarm" capabilities ([#2014](https://github.com/MoonshotAI/kimi-cli/issues/2014)).
*   **Mid-Flight Prompting**: High demand for the ability to inject additional instructions to the AI *while* it is currently processing a task, without needing to press ESC to interrupt the generation ([#2042](https://github.com/MoonshotAI/kimi-cli/issues/2042)).
*   **IDE and Web UI Integration**: Requests for tighter OS-level integrations, such as native VS Code notifications for pending approvals ([#2040](https://github.com/MoonshotAI/kimi-cli/issues/2040)) and a Yolo-mode toggle switch for the Web UI ([#2033](https://github.com/MoonshotAI/kimi-cli/issues/2033)).
*   **Claude-Compatible Plugin Support**: Interest in a compatibility layer for Claude-style local plugins, streamlining tool migration for users switching AI ecosystems ([#1714](https://github.com/MoonshotAI/kimi-cli/issues/1714)).

## 6. Developer Pain Points
*   **UI Latency and Rendering Glitches**: Developers are highly frustrated by terminal keystroke lag caused by inefficient polling ([#2038](https://github.com/MoonshotAI/kimi-cli/issues/2038), [#2032](https://github.com/MoonshotAI/kimi-cli/issues/2032)) and rendering issues like blurry fonts in VS Code ([#2023](https://github.com/MoonshotAI/kimi-cli/issues/2023)).
*   **Fragmented Context/Token Tracking**: Users hit hard API limits unexpectedly because the client fails to calculate context usage accurately, especially when subagents are involved ([#2011](https://github.com/MoonshotAI/kimi-cli/issues/2011), [#2024](https://github.com/MoonshotAI/kimi-cli/issues/2024)).
*   **Strict API Schemas Breaking MCP**: The Moonshot API's strict enforcement of non-standard JSON Schemas continues to be a major bottleneck for developers attempting to connect standard third-party MCP servers ([#1595](https://github.com/MoonshotAI/kimi-cli/issues/1595)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-24

## 1. Today's Highlights

OpenCode rolled out two back-to-back patch releases (v1.14.21 and v1.14.22) aimed at improving LSP diagnostics, Git compatibility, and desktop session stability. On the community side, GPT-5.5 integration dominated discussions with multiple issues and a quick-turnaround PR already in review, while the ongoing memory megathread (#20695) saw fresh bug reports identifying TUI event listener leaks and unbounded SSE stream growth as likely culprits.

## 2. Releases

### [v1.14.22](https://github.com/anomalyco/opencode/releases/tag/v1.14.22)
- **Core:** `.npmrc` settings are now respected during npm installs; projects can store custom icon overrides that persist correctly.
- **Desktop:** Fixed a bug where session views and nested session items could get stuck with stale state when switching between sessions.

### [v1.14.21](https://github.com/anomalyco/opencode/releases/tag/v1.14.21)
- **Core:** Added support for pull diagnostics from LSP servers (including C# and Kotlin); fixed project detection and caching for bare Git repos and worktrees; improved session compaction for long threads to retain more useful context; improved UTF-8 handling.

## 3. Hot Issues

1. **[#20695](https://github.com/anomalyco/opencode/issues/20695) — Memory Megathread** _(63 comments, 39 👍)_
   The central tracking issue for all memory problems. Maintainers are explicitly asking the community to submit heap snapshots rather than LLM-generated guesses. Freshly filed bugs (#24052, #24058) are providing concrete leads.

2. **[#24036](https://github.com/anomalyco/opencode/issues/24036) — GPT-5.5 Support** _(4 comments, 17 👍, closed)_
   OpenAI's just-announced GPT-5.5 prompted an immediate feature request. A companion PR (#24055) was opened the same day to add it to the Codex OAuth allowed-model list.

3. **[#8785](https://github.com/anomalyco/opencode/issues/8785) — "Bun has crashed"** _(28 comments, 6 👍)_
   A persistent Windows-specific Bun runtime crash that has been open since January. Remains one of the most-commented bugs in the tracker.

4. **[#22408](https://github.com/anomalyco/opencode/issues/22408) — Kimi K2.6 Integration** _(21 comments, 18 👍, closed)_
   Community request for first-class Kimi K2.6 model support. Significant interest from users working with non-Western LLM providers.

5. **[#7846](https://github.com/anomalyco/opencode/issues/7846) — `/skills` Command for TUI** _(21 comments, 56 👍)_
   The highest-upvoted open feature request: a quick way to list and invoke skills from the TUI. Strong demand for a skill-discovery workflow.

6. **[#24039](https://github.com/anomalyco/opencode/issues/24039) — GPT-5.5 for OpenAI Provider** _(11 comments, 12 👍, closed)_
   A more detailed companion to #24036, requesting full `model: gpt-5.5` configuration support including context limits and thinking variants.

7. **[#14808](https://github.com/anomalyco/opencode/issues/14808) — Plugin `session.created` Event Not Firing** _(15 comments, 12 👍)_
   Plugins subscribing to the event bus never receive `session.created`. Affects memory and persistence plugins like Engram. Blocks the plugin ecosystem.

8. **[#22683](https://github.com/anomalyco/opencode/issues/22683) — v1.4.6 Constantly Crashing** _(11 comments)_
   After the memory leak errors were quelled, users report the app now crashes silently instead. Possibly related to the broader memory saga.

9. **[#16612](https://github.com/anomalyco/opencode/issues/16612) — Stale Context / Replies to Previous Turn** _(10 comments, 5 👍)_
   The assistant sometimes responds to a prior user message rather than the latest one, and gets stuck repeating old answers. Directly impacts reliability.

10. **[#24052](https://github.com/anomalyco/opencode/issues/24052) — TUI Event Listeners Leak Memory** _(2 comments)_
    A precise bug report: `event.on()` and `event.subscribe()` calls in the TUI are never unsubscribed, leaving orphaned listeners and closures after session switches. Directly feeds into the memory megathread.

## 4. Key PR Progress

1. **[#24055](https://github.com/anomalyco/opencode/pull/24055)** — Allow GPT-5.5 in Codex OAuth model list *(closed/merged)*
   Same-day fix adding `gpt-5.5` to the explicit allowed-model list. `models.dev` already had the entry; this unblocks OAuth-based OpenAI users.

2. **[#24058](https://github.com/anomalyco/opencode/pull/24058)** — Prevent unbounded memory growth from stuck SSE streams
   When an SSE peer disconnects via TCP half-close, Hono's `onAbort` never fires on Bun and the unbounded `AsyncQueue` accumulates data at ~14 MB/min. Adds a size limit and a wall-clock timeout.

3. **[#24059](https://github.com/anomalyco/opencode/pull/24059)** — Evict gitignored files from shadow snapshot index
   Files staged before being added to `.gitignore` stayed in the index forever. This adds eviction logic targeting a specific case called out in the memory megathread.

4. **[#24066](https://github.com/anomalyco/opencode/pull/24066)** — Preserve custom `User-Agent` from provider headers
   Custom headers set in `provider.options.headers` were being silently overwritten. Fixes a regression affecting users with API gateways or proxy setups.

5. **[#23494](https://github.com/anomalyco/opencode/pull/23494)** — Terminal notifications via OSC escape sequences
   Replaces broken macOS "Script Editor" desktop notifications with proper OSC-based terminal bell/notify sequences. Cleaner integration for terminal users.

6. **[#20039](https://github.com/anomalyco/opencode/pull/20039)** — Split bash tool into bash/pwsh/powershell
   Refactors the monolithic shell tool into distinct tools per shell runtime, improving Windows PowerShell support and allowing per-shell permission controls.

7. **[#13885](https://github.com/anomalyco/opencode/pull/13885)** — Native status line template system
   Adds configurable `tui.status_line.templates` resolved server-side from project info, session data, model/token stats, shell commands, and plugin-provided variables. Long-requested TUI customization.

8. **[#10713](https://github.com/anomalyco/opencode/pull/10713)** — Move `diff_style` from config to `kv.json` with toggle menu
   Makes diff style runtime-switchable via a System menu item instead of requiring config edits. Nice UX polish.

9. **[#23557](https://github.com/anomalyco/opencode/pull/23557)** — Interactive split-footer mode
   Adds a split-footer panel in the TUI for running commands interactively alongside the agent. Addresses a long-standing power-user request.

10. **[#23318](https://github.com/anomalyco/opencode/pull/23318)** — Respect `OPENCODE_CONFIG` in serve/web
    `opencode serve` and `opencode web` were only loading the global config, ignoring the `OPENCODE_CONFIG` env var. Critical for containerized and remote deployments.

## 5. Feature Request Trends

- **New model support is the dominant theme.** GPT-5.5 (OpenAI), Kimi K2.6 (Moonshot), and Azure GPT-5 parameter fixes all appeared in the last 24 hours. The community expects rapid first-class model integration.
- **ACP (Agent Client Protocol) adoption is accelerating.** Issues requesting Claude-via-ACP (#24038) and TUI-as-ACP-client (#5182) signal growing interest in interoperable agent protocols.
- **Subagent observability.** Multiple requests (#22233, #23028) ask for visibility into which subagent is running, what model it uses, and how long it has been active.
- **Plugin extensibility for the TUI.** Persistent footer items (#18969), the `/skills` command (#7846), and the status line template system (#13885) all point toward a richer, plugin-driven TUI.
- **Configurable limits and safety.** Truncation limits (#22565), shell permission bypasses (#23907), and tool-output boundaries reflect a maturing power-user base that wants fine-grained control.

## 6. Developer Pain Points

- **Memory leaks remain the #1 frustration.** The megathread has 63 comments and counting, and new root-cause reports (orphaned TUI listeners #24052, unbounded SSE queues #24058, shadow index bloat #24059) keep surfacing. Users on resource-constrained environments are particularly affected.
- **Stale context and repeated responses** (#16612) erode trust in the agent's reliability. When the assistant replies to the wrong turn, developers lose confidence and must re-send messages.
- **Windows stability** is a recurring theme: Bun crashes (#8785), constant crashes after updates (#22683), `.cmd` scripts bypassing shell permissions (#23907), and Java LSP regressions (#20452) all point to Windows as a second-class citizen.
- **Provider integration friction.** Azure parameter mismatches (#22623), disappearing Nvidia Nim support (#24044), and broken custom headers (#24066 / #22608) suggest the provider abstraction layer needs hardening as the model landscape diversifies rapidly.
- **Plugin event bus reliability.** `session.created` not firing (#14808) blocks memory and persistence plugins, limiting the ecosystem's ability to build on top of OpenCode.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-24

## 1. Today's Highlights
The Qwen Code team shipped **v0.15.1**, highlighted by a critical hotfix for a `StreamingToolCallParser` state-leak bug (#3516) that could corrupt concurrent OpenAI-compatible streams. Community activity remained robust: developers pushed a wave of new feature PRs for image pasting, conversation rewind, Python SDK support, and OSC terminal notifications. Meanwhile, the most heated discussion continues to swirl around the proposed **free tier quota reduction**, alongside growing pains around local LLM configuration and recurring file-reading loops.

---

## 2. Releases

### v0.15.1
- **fix(core): scope `StreamingToolCallParser` per stream, not per Converter** (#3516 by @zhangxy-zju, PR #3525) — eliminates shared mutable state that caused tool-call parsing failures across concurrent streams.
- **feat(cli): combine elapsed + timeout in shell time indicator** (by @wenshao, PR #3512) — unified time display for shell command execution.

### v0.15.0-nightly.20260423.d40fe7cdb
- Includes the same `StreamingToolCallParser` scoping fix as above for nightly users.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|--------------------|
| 1 | [#3203 — Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203) | Proposes reducing daily free quota from 1,000 → 100 requests and fully phasing out the free tier. | **116 comments**, heated debate on accessibility and open-source ethos. |
| 2 | [#3384 — Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384) | Users running local models (e.g., Qwen3.6-35B-A3B on VLLM) can't get configuration working. | 9 comments, signals persistent local-model onboarding friction. |
| 3 | [#3530 — Maximum update depth exceeded on `/model`](https://github.com/QwenLM/qwen-code/issues/3530) | React render loop when switching models via the `/model` command. | 5 comments, 2 👍 — affects daily CLI usage. |
| 4 | [#3532 — 本地模型到底要怎么配置？](https://github.com/QwenLM/qwen-code/issues/3532) | Chinese-language frustration that local model setup doesn't match documentation. | 4 comments; echoes #3384. |
| 5 | [#3473 / #2201 — Read tool stuck in loop reading file beginning](https://github.com/QwenLM/qwen-code/issues/3473) | `read_file` offset parameter ignored; agent loops over first 100-150 lines. | Recurring pattern across multiple issues; blocks code-understanding tasks. |
| 6 | [#3553 — Kimi-K2.5 tool_calls type error](https://github.com/QwenLM/qwen-code/issues/3553) | Third-party model (Kimi-K2.5) sends non-standard `tool_calls.type`, causing API rejection. | Highlights compatibility pain with non-Qwen providers. |
| 7 | [#3558 — ReadFile rejects empty `pages` parameter](https://github.com/QwenLM/qwen-code/issues/3558) | Models that default optional strings to `""` (Qwen/DeepSeek) trigger validation error. | Quickly fixed in PR #3559; exposed regression from #3160. |
| 8 | [#3307 — Alibaba Cloud Coding Plan "Temporarily out of stock"](https://github.com/QwenLM/qwen-code/issues/3307) | Paid plan for Qwen 3.6 Plus inaccessible for over a week. | 5 comments, user frustration with commercial availability. |
| 9 | [#3535 — CLI flag to ignore SSL errors](https://github.com/QwenLM/qwen-code/issues/3535) | Needed for self-signed certs in corporate/air-gapped environments. | Practical enterprise request; no comments yet. |
| 10 | [#3536 — Java SDK `setEnv()` silently dropped](https://github.com/QwenLM/qwen-code/issues/3536) | SDK-passed env vars never reach CLI subprocess, breaking programmatic usage. | Critical for SDK integrators; zero comments (just opened). |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#3559 — fix(core): treat empty `pages` as unset in ReadFile](https://github.com/QwenLM/qwen-code/pull/3559) | **Merged.** Fixes regression where `pages: ""` caused validation errors. |
| 2 | [#3519 — feat(cli): paste base64/data URL images + drag-and-drop](https://github.com/QwenLM/qwen-code/pull/3519) | Unifies image input via `[Image #N]` placeholders — paste, drag, or data URL. Closes #3518. |
| 3 | [#3441 — feat(cli): conversation rewind with double-ESC and `/rewind`](https://github.com/QwenLM/qwen-code/pull/3441) | Allows rolling back conversation history and restarting from a prior turn. |
| 4 | [#3494 — feat(SDK): Python SDK implementation](https://github.com/QwenLM/qwen-code/pull/3494) | Adds `packages/sdk-python` with async/sync query, transport, and E2E smoke tests. |
| 5 | [#3562 — feat(cli): OSC notifications for iTerm2/Kitty/Ghostty](https://github.com/QwenLM/qwen-code/pull/3562) | Rich system notifications via OSC 9/99/777 with tmux passthrough. Supersedes #3560 & #3561. |
| 6 | [#3540 — feat(session): auto-title sessions via fast model](https://github.com/QwenLM/qwen-code/pull/3540) | **Merged.** Auto-generates 3-7 word session titles; adds `/rename --auto`. |
| 7 | [#3550 — refactor(core): make OpenAI converter stateless](https://github.com/QwenLM/qwen-code/pull/3550) | Follow-up to #3525; removes all shared mutable state from the converter singleton. |
| 8 | [#3463 — fix(cli): run ACP Agent tool calls concurrently](https://github.com/QwenLM/qwen-code/pull/3463) | Executes multiple Agent tool calls in parallel instead of sequential for-loop. Closes #2516. |
| 9 | [#3471 — feat(core): model-facing agent control](https://github.com/QwenLM/qwen-code/pull/3471) | Adds `task_stop`, `send_message`, and live transcript reading for sub-agents. |
| 10 | [#3567 — fix(cli): respect `OPENAI_MODEL` precedence](https://github.com/QwenLM/qwen-code/pull/3567) | Ensures CLI model resolution follows: `argv.model` → `OPENAI_MODEL` → `QWEN_MODEL` → `settings.model`. |

---

## 5. Feature Request Trends

1. **Enhanced local/third-party model support** — Multiple issues (#3384, #3532, #3553, #3555) demand easier configuration for local LLMs and multi-provider setups.
2. **Agent control & sub-agent management** — Requests for configurable concurrency limits (#3568), mid-flight task redirection (#3471), and better sub-agent tool discipline.
3. **ACP protocol expansion** — HTTP MCP transport for ACP mode (#3549) and configurable plan directories (#3548).
4. **CLI UX improvements** — Voice input (#3110), conversation rewind (#3441), auto-titling (#3540), and `/simplify` workflow (#3565).
5. **Enterprise/devex tooling** — SSL bypass flags (#3535), OpenTelemetry docs clarity (#3461), and Java SDK env passthrough (#3536).

---

## 6. Developer Pain Points

- **Read-file loop bug** — A persistent, high-impact defect (#2201, #3473) where the `offset` parameter is ignored, trapping the agent in an infinite loop reading the first 100-150 lines. No official fix yet for the core offset logic.
- **Local model onboarding complexity** — Despite documentation, users consistently fail to configure OpenAI-compatible endpoints (#3384, #3532), suggesting the settings schema and auth flow need simplification.
- **Free tier uncertainty** — The proposed 90% quota cut (#3203) and Alibaba Cloud stock-outs (#3307) are eroding trust among hobbyists and open-source contributors.
- **React render loops** — Multiple reports of "Maximum update depth exceeded" (#3530, #3566) during model switching or `/skills list`, indicating unstable state management in the CLI UI layer.
- **SDK maturity gaps** — Both the Java SDK (#3536) and Python SDK (#3494, still open) have integration gaps that limit programmatic adoption.

</details>