# AI CLI Tools Community Digest 2026-04-01

> Generated: 2026-03-31 22:07 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Report — 2026-04-01

## 1. Ecosystem Overview

The AI CLI tooling landscape is experiencing a period of aggressive feature expansion paired with growing stability challenges. Incumbents like **Claude Code** and **OpenAI Codex** are grappling with enterprise-scale reliability issues—rate limiting bugs, token opacity, and platform-specific crashes—while simultaneously defending against community frustration over closed-source ecosystems. Meanwhile, challengers (**Gemini CLI**, **Qwen Code**, **Kimi CLI**, **OpenCode**) are rapidly iterating on differentiated architectures focused on "agentic" workflows: multi-agent swarms, persistent memory systems, and AST-aware code intelligence. The overarching industry trajectory is clear: developers demand **transparency** (usage, costs, data privacy), **reliability** (Windows/WSL parity, stable APIs), and **autonomy** (customizable models, self-hosted options, open-source alignment).

---

## 2. Activity Comparison

| Tool | Issues (24h Active) | PRs (24h Active) | Release Status | Signal |
|------|---------------------|------------------|----------------|--------|
| **Claude Code** | 10+ (1,700+ comments on top issue) | 10+ | v2.1.88 **YANKED** (source leak) | 🔴 Crisis Mode |
| **OpenAI Codex** | 10 | 10 | **v0.118.0** (security/auth) | 🟡 Active/Stabilizing |
| **Gemini CLI** | 10 | 10 | **v0.36.0-preview.7** | 🟢 Healthy Iteration |
| **GitHub Copilot CLI** | 10 | 2 (low PR visibility) | **v1.0.15-0** (WSL/Kitty fixes) | 🟡 Controversial UX |
| **Kimi Code CLI** | 21 | 16 | None (v1.27.0 testing) | 🟢 High Velocity |
| **OpenCode** | 10+ | 10+ | **v1.3.11** (Kimi support) | 🟢 Rapid Expansion |
| **Qwen Code** | 10 | 10 | **v0.13.2-nightly** | 🟡 Experimental |

**Notable:** Claude Code dominates comment volume due to the subscription/rate-limit crisis. Kimi CLI shows highest issue/PR throughput relative to community size.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Evidence |
|-----------|----------------|----------|
| **Multi-Agent / Swarm Architectures** | Kimi CLI, Gemini CLI, OpenCode | Kimi: "Agent Swarm Mode" (#1633); Gemini: Subagent awareness (#23582); OpenCode: Linear Agent integration (#3787) |
| **Persistent / Smart Memory Systems** | Gemini CLI, Kimi CLI, OpenCode | Gemini: Proactive memory writes (#22809), Global vs. Project routing (#22819); OpenCode: Native auto-memory PR (#20344); Kimi: Memory System feature (#1283) |
| **Windows / WSL Stabilization** | Claude Code, OpenAI Codex, Kimi CLI, Qwen Code, Copilot CLI | Claude: BSOD fix (#35710); Codex: App crashes with WSL (#13699); Kimi: PowerShell command context (#1673); Qwen: Git Bash encoding (#2746); Copilot: WSL image paste fix |
| **Compact / Quiet UI Modes** | Qwen Code, OpenAI Codex | Qwen: Compact/Verbose toggle (#2767); Codex: TUI output truncation complaints (#2558) |
| **MCP Ecosystem Expansion** | Claude Code, OpenAI Codex, Kimi CLI, OpenCode | Claude: MCP auth regression (#39271); Codex: Project config ignored (#13025); Kimi: MCP image handling fix (#1670); OpenCode: MCP Apps support request (#10884) |
| **AST-Aware Code Intelligence** | Gemini CLI, Claude Code (implied) | Gemini: AST-aware mapping epic (#22745); Claude: QueryEngine source analysis (#41584) |

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
|------|-----------------|-------------|---------------------|
| **Claude Code** | Enterprise reliability, Plugin ecosystem | Power users, Enterprises | Closed-source, TypeScript, Plugin architecture, Heavy caching |
| **OpenAI Codex** | Security-first sandboxing, Multi-provider auth | Enterprise, Cross-platform | Rust core, OS-level sandbox controls, Device code flow auth |
| **Gemini CLI** | Evaluation frameworks, Plan Mode rigor | Google ecosystem, Research | Event-driven subagent history, Policy Engine, JIT sandbox resolution |
| **GitHub Copilot CLI** | IDE integration, BYOM flexibility | VS Code users, GitHub ecosystem | Kitty protocol support, Model picker override, `/ide` command |
| **Kimi Code CLI** | Multi-agent collaboration, Cross-platform UX | Chinese market, Power users | Platform context injection, Agent Swarm architecture, Web UI parity |
| **OpenCode** | Customizable agent identity, Local-first privacy | Privacy-conscious, Tinkerers | Personality system (`SOUL.md`), Docker sandbox, Multi-provider support |
| **Qwen Code** | Extensibility, Model agility | Qwen ecosystem, Chinese devs | Plugin channels (Telegram/WeChat), Nightly releases, Cross-provider subagents |

**Key Differentiator:** Claude Code and OpenAI Codex are battling **trust and stability** issues at scale; OpenCode and Kimi CLI are racing toward **customizable agent identities**; Gemini CLI is investing heavily in **evaluations and policy control**.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **Mature but Volatile** | Claude Code, OpenAI Codex | High comment volume, enterprise feature depth, but currently managing reputational crises (rate limits, token opacity) |
| **Rapidly Iterating** | Kimi CLI, OpenCode, Gemini CLI | High PR velocity, responsive to community requests, investing in foundational architectures (memory, personality) |
| **Stabilizing** | GitHub Copilot CLI, Qwen Code | Slower release cadence, focused on platform parity (WSL, Windows), but UX controversies (keybindings, installer behavior) |

**Momentum Leader:** **Kimi CLI** (21 issues, 16 PRs in 24h with multiple merged fixes) and **OpenCode** (v1.3.11 + personality system merge).

**Maturity Leader:** **Claude Code** (despite current crisis, has deepest plugin architecture, enterprise features, and community-driven reimplementation attempts).

---

## 6. Trend Signals

### 🔴 Industry-Wide Pain Points
1. **Windows/WSL is a second-class citizen** — Every tool except Copilot CLI (which just fixed it) has active Windows-specific bugs (BSOD, encoding, sandbox, path issues).
2. **Token/Cost Opacity** — Users cannot predict or understand consumption. Claude Code's 20x cost regression (#34629) and Codex's "burning tokens" (#14593) are critical trust failures.
3. **Enterprise Auth Complexity** — Multiple tools struggling with MCP auth, custom provider headers, and gateway integrations.

### 🟢 Emerging Opportunities
1. **Open-Source Pressure** — Claude Code's accidental leak sparked 4+ open-source reimplementation PRs. Community demand for transparency is undeniable.
2. **Agent Identity & Memory** — Tools that allow persistent, customizable agent behavior (OpenCode's `SOUL.md`, Gemini's memory routing) will differentiate.
3. **Subagent Fallback & Resilience** — Codex's model fallback PR (#16197) and Gemini's subagent policy awareness (#23582) signal a shift toward self-healing agentic workflows.

### 📊 Actionable for Developers
- **Short-term:** Avoid Claude Code Max subscriptions until rate-limit bugs stabilize; monitor OpenAI Codex for Windows sandbox fixes.
- **Medium-term:** Evaluate OpenCode or Kimi CLI for customizable, privacy-conscious workflows; test Gemini CLI for eval-driven reliability.
- **Long-term:** Invest in MCP-compatible tooling; the protocol is becoming the de facto standard for agentic tool integration across all major players.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Reporting Period:** Data as of 2026-04-01

## 1. Top Skills Ranking
The most-discussed Pull Requests represent significant contributions focused on document quality, frontend development, and meta-tooling.

*   **[PR #514] document-typography skill**
    *   **Functionality:** Automated quality control for generated documents, preventing orphan word wraps, widow paragraphs, and numbering misalignment.
    *   **Status:** [OPEN]
    *   **Discussion:** High attention on solving pervasive formatting issues in AI-generated outputs.
    *   **Link:** [anthropics/skills #514](https://github.com/anthropics/skills/pull/514)

*   **[PR #210] Frontend-design skill improvements**
    *   **Functionality:** Revises instructions for better clarity and actionability in UI/UX development tasks.
    *   **Status:** [OPEN]
    *   **Discussion:** Focuses on making skill instructions executable by Claude in a single conversation.
    *   **Link:** [anthropics/skills #210](https://github.com/anthropics/skills/pull/210)

*   **[PR #83] skill-quality-analyzer & skill-security-analyzer**
    *   **Functionality:** Two meta-skills for evaluating other skills against five quality dimensions and security standards.
    *   **Status:** [OPEN]
    *   **Discussion:** A critical proposal for establishing ecosystem-wide security and structure benchmarks.
    *   **Link:** [anthropics/skills #83](https://github.com/anthropics/skills/pull/83)

*   **[PR #486] ODT (OpenDocument) skill**
    *   **Functionality:** Enables creation, template filling, and HTML parsing of `.odt` files (ISO standard).
    *   **Status:** [OPEN]
    *   **Discussion:** Addresses demand for open-standard document interoperability beyond DOCX/PDF.
    *   **Link:** [anthropics/skills #486](https://github.com/anthropics/skills/pull/486)

*   **[PR #541] DOCX tracked change fix**
    *   **Functionality:** Bug fix preventing document corruption via `w:id` collisions between bookmarks and tracked changes.
    *   **Status:** [OPEN]
    *   **Discussion:** Highlights technical complexity in OOXML manipulation.
    *   **Link:** [anthropics/skills #541](https://github.com/anthropics/skills/pull/541)

*   **[PR #154] shodh-memory skill**
    *   **Functionality:** Persistent context system allowing AI agents to maintain memory across conversation sessions.
    *   **Status:** [OPEN]
    *   **Discussion:** High interest in solving the "blank slate" problem for long-term projects.
    *   **Link:** [anthropics/skills #154](https://github.com/anthropics/skills/pull/154)

## 2. Community Demand Trends
Analysis of open Issues reveals strong demand in three specific areas:

*   **Enterprise Administration:** Users are urgently requesting **org-wide skill sharing** capabilities to avoid manual file distribution via Slack/Teams ([Issue #228](https://github.com/anthropics/skills/issues/228)).
*   **Security & Trust:** There are active concerns regarding **namespace collisions** where community skills appear under the `anthropic/` prefix, posing potential security risks ([Issue #492](https://github.com/anthropics/skills/issues/492)).
*   **Platform Stability:** Multiple reports cite **API instability** (500 errors) and broken upload/delete functionality for skills, particularly for Enterprise/SSO users ([Issue #406](https://github.com/anthropics/skills/issues/406), [Issue #532](https://github.com/anthropics/skills/issues/532)).

## 3. High-Potential Pending Skills
These open PRs show active maintenance or high community engagement and are likely candidates for merging:

*   **plan-task skill ([PR #522](https://github.com/anthropics/skills/pull/522)):** Persists multi-step plans in Markdown, allowing sessions to resume progress seamlessly.
*   **quality-playbook skill ([PR #659](https://github.com/anthropics/skills/pull/659)):** Revives traditional quality engineering practices by generating tests based on requirements rather than just source code.
*   **SAP-RPT-1-OSS predictor skill ([PR #181](https://github.com/anthropics/skills/pull/181)):** Integrates SAP's open-source tabular foundation model for predictive analytics on business data.

## 4. Skills Ecosystem Insight
The community is shifting from "creating individual tools" to **"building robust infrastructure"**—prioritizing persistent memory, enterprise-grade security, and workflow automation over single-use prompt tricks.

---

# Claude Code Community Digest — 2026-04-01

## Today's Highlights

The Claude Code community experienced seismic activity today following the **yanking of v2.1.88** after an accidental source code leak (59.8MB source map included in the release). This triggered a wave of community-driven PRs attempting to open-source the codebase, including multiple TypeScript extractions and even a full Rust reimplementation. Simultaneously, **Max subscription rate limiting bugs** continue dominating discussions with over 1,700 combined comments across related issues, signaling a critical pain point for paying users.

---

## Releases

**No new releases in the last 24 hours.** The previous v2.1.88 release was yanked due to an accidental source code leak, leaving v2.1.87 as the current stable version.

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#16157](https://github.com/anthropics/claude-code/issues/16157)** — Max subscription users hitting usage limits instantly | **1,410 comments, 641 👍** — The single most-active issue. Max plan subscribers report being rate-limited after minimal usage, making the tool effectively unusable. Labeled `oncall`, indicating internal escalation. |
| 2 | **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Abnormal session limit exhaustion since March 23 | **270 comments, 218 👍** — Regression-like behavior where CLI users exhaust 5-hour windows in just 1-2 prompts. Distinct from #16157 but likely related root cause. |
| 3 | **[#29579](https://github.com/anthropics/claude-code/issues/29579)** — Rate limit at 16% usage with Max subscription | **136 comments, 78 👍** — Has repro, affects Windows/VS Code. Demonstrates the rate-limit bug spans platforms and interfaces. |
| 4 | **[#41666](https://github.com/anthropics/claude-code/issues/41666)** — v2.1.88 yanked release caused token loss | **Direct fallout from today's incident.** Users who updated to the broken release report wasted sessions and significant token consumption before it was pulled. |
| 5 | **[#34629](https://github.com/anthropics/claude-code/issues/34629)** — Prompt cache regression causing ~20x cost increase | **Critical for heavy users.** The `--print --resume` flow no longer leverages prompt caching, dramatically increasing costs for long-running sessions. Labeled `regression`. |
| 6 | **[#40652](https://github.com/anthropics/claude-code/issues/40652)** — CLI mutates tool results, permanently breaking prompt cache | **Technical deep-dive.** The `cch=` billing hash substitution modifies historical tool results, invalidating cache. Long sessions lose 30-50K+ tokens per turn. |
| 7 | **[#41617](https://github.com/anthropics/claude-code/issues/41617)** — Excessive token consumption on Max plan (WSL) | **Fresh report from March 31.** Echoes the broader cost regression pattern, specifically affecting WSL users. |
| 8 | **[#23601](https://github.com/anthropics/claude-code/issues/23601)** — Claude Code hangs indefinitely in non-git directories | **Startup regression since v2.1.31.** Makes the CLI completely unusable when launched outside git repos. Last working version: 2.1.29. |
| 9 | **[#39271](https://github.com/anthropics/claude-code/issues/39271)** — HTTP MCP server auth regression in `-p` mode | **Headless/automation users affected.** Bearer token authentication broke in v2.1.83 for non-interactive mode. |
| 10 | **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Multi-account connector support | **116 👍** — Top feature request. Enterprise users need to switch between multiple accounts of the same connector type (e.g., multiple GitHub orgs). |

---

## Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| 1 | **[#41518](https://github.com/anthropics/claude-code/pull/41518)** — Fully Open Source Claude Code | Extracted 1,906 TypeScript source files from the leaked `cli.js.map`. Includes Bun bundler configuration and successfully builds `--version`/`--help`. |
| 2 | **[#41568](https://github.com/anthropics/claude-code/pull/41568)** — Rust Implementation: High-Performance Rewrite | Community member reimplemented Claude Code in Rust with a 16-crate workspace architecture. Full tool support, TUI, streaming, and QueryEngine. |
| 3 | **[#41661](https://github.com/anthropics/claude-code/pull/41661)** — Add 14 Revolutionary Plugins | Security, performance, architecture, and fullstack automation plugins with documentation and marketplace integration. |
| 4 | **[#35710](https://github.com/anthropics/claude-code/pull/35710)** — Fix Windows BSOD (Wof.sys) from parallel fs operations | **Critical fix.** Adds tool-mutex plugin to prevent kernel-level crashes from unconstrained parallel filesystem operations on Windows. |
| 5 | **[#31501](https://github.com/anthropics/claude-code/pull/31501)** — Fix TodoWrite overwriting phase-level todos | Fixes `/feature-dev` workflow skipping Phases 6-7 due to todo list replacement behavior. |
| 6 | **[#39148](https://github.com/anthropics/claude-code/pull/39148)** — Preserve-session plugin for path-independent history | Assigns UUIDs to projects, maintaining session continuity when directories are renamed or moved. |
| 7 | **[#41453](https://github.com/anthropics/claude-code/pull/41453)** — Safe Stop hook wrapper with PID lock | Reference implementation for running post-session background tasks without runaway processes. |
| 8 | **[#41229](https://github.com/anthropics/claude-code/pull/41229)** — Skip lifecycle comment job for non-lifecycle labels | Workflow optimization to prevent unnecessary CI runs for labels like `bug` or `enhancement`. |
| 9 | **[#41225](https://github.com/anthropics/claude-code/pull/41225)** — Remove all lifecycle labels on human activity | Extends `remove-autoclose-label.yml` to clean up `stale`, `needs-info`, `needs-repro`, and `invalid` labels when authors respond. |
| 10 | **[#41584](https://github.com/anthropics/claude-code/pull/41584)** — Community Architecture Analysis | 770+ line source analysis document covering QueryEngine, tools system, permission model, and plugin architecture. |

---

## Feature Request Trends

Based on issue and PR activity, the community is requesting:

1. **Open-source Claude Code** — Multiple PRs (#41518, #41568, #41621, #41447) and the leaked source have galvanized the community toward full open-sourcing.

2. **Multi-account/multi-tenant support** — [#27302](https://github.com/anthropics/claude-code/issues/27302) (116 👍) requests multiple connector accounts; enterprise workflows need this.

3. **Real-time feedback during reasoning** — [#30660](https://github.com/anthropics/claude-code/issues/30660) requests streaming extended thinking output; [#30492](https://github.com/anthropics/claude-code/issues/30492) wants mid-execution steering.

4. **Multi-window desktop support** — [#30154](https://github.com/anthropics/claude-code/issues/30154) (63 👍) for viewing multiple sessions simultaneously.

5. **Headless/automation improvements** — [#37797](https://github.com/anthropics/claude-code/issues/37797) (Discord permission relay), [#35072](https://github.com/anthropics/claude-code/issues/35072) (inter-agent messaging), and MCP auth fixes.

---

## Developer Pain Points

| Category | Description |
|----------|-------------|
| **Max subscription rate limiting** | The dominant complaint. Users on $100/month plans report exhausting quotas in 1-2 prompts or hitting limits at 16% reported usage. No official resolution yet. |
| **Prompt cache regressions** | Multiple reports (#34629, #40652) of cache invalidation causing 20x cost increases. Critical for long-running sessions and agentic workflows. |
| **Release quality** | The v2.1.88 yank incident eroded trust. Users report wasted tokens and broken sessions from the brief window it was live. |
| **Platform-specific bugs** | Windows BSOD from parallel filesystem ops (#35710), Linux startup hangs in non-git directories (#23601), macOS terminal state corruption (#39096). |
| **Billing transparency** | [#39465](https://github.com/anthropics/claude-code/issues/39465) reports 2% budget consumed just asking about budget — users can't predict or understand consumption. |
| **Headless/automation gaps** | MCP auth regressions, no notification mechanism when permission prompts block unattended sessions, and fragile hook patterns. |

---

*Digest generated from GitHub activity on 2026-04-01. Data source: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-04-01

## 1. Today's Highlights
The Codex team has shipped **rust-v0.118.0**, introducing critical security updates for Windows sandbox networking via OS-level egress rules and a new Device Code Flow for ChatGPT authentication. Activity remains high around platform stability, with significant PR work focused on **app-server deadlocks** and **subagent model fallbacks**. The community is actively discussing Windows/WSL integration challenges and token consumption transparency.

## 2. Releases

### rust-v0.118.0
*   **Windows Sandbox Networking:** Enforces proxy-only networking using OS-level egress rules, improving security beyond environment variable configurations. ([Release Notes](https://github.com/openai/codex/releases))
*   **Authentication:** App-server clients can now utilize a device code flow for ChatGPT sign-in, resolving reliability issues with browser callbacks.

*Pre-releases `0.119.0-alpha.1` and `0.118.0-alpha` iterations were also tagged for upcoming features.*

## 3. Hot Issues

1.  **[High Priority] Excessive Token Consumption (#14593)**
    *   **Why:** Users report tokens being consumed rapidly ("burning") in the VS Code extension.
    *   **Reaction:** 346 comments, 140 upvotes. This is currently the most active thread, with users demanding transparency on background token usage.
    *   [Link](https://github.com/openai/codex/issues/14593)

2.  **[Feature] Remote Development Support (#10450)**
    *   **Why:** Users want the Desktop App to connect to remote environments (SSH/Containers) similar to VS Code Remote.
    *   **Reaction:** 474 upvotes. The community views the current local-only limitation as a major blocker for enterprise adoption.
    *   [Link](https://github.com/openai/codex/issues/10450)

3.  **[Bug] Windows App Instability with WSL (#13699)**
    *   **Why:** The Codex App crashes when attempting to load WSL configurations.
    *   **Reaction:** 14 comments. A critical blocker for Windows developers relying on WSL for their dev environments.
    *   [Link](https://github.com/openai/codex/issues/13699)

4.  **[Bug] Unbounded SQLite Growth on Windows (#16270)**
    *   **Why:** `state_5.sqlite` and log files grow indefinitely, causing write lock contention and app restart loops.
    *   **Reaction:** 5 comments. High severity for long-running agents/workers on Windows.
    *   [Link](https://github.com/openai/codex/issues/16270)

5.  **[Bug] Truncated Output in Zellij (#2558)**
    *   **Why:** TUI output history disappears when scrolling inside a Zellij terminal session.
    *   **Reaction:** 108 upvotes. A persistent usability issue for CLI power users.
    *   [Link](https://github.com/openai/codex/issues/2558)

6.  **[Bug] `apply_patch` Fails in Windows Sandbox (#13574)**
    *   **Why:** Patching mechanism fails under default sandbox permissions on Windows.
    *   **Reaction:** 25 upvotes. Closed recently, likely addressed by the v0.118.0 networking updates.
    *   [Link](https://github.com/openai/codex/issues/13574)

7.  **[Bug] App-Server Deadlocks (#16364)**
    *   **Why:** The `codex app-server` hangs after emitting tool calls since v0.117.0.
    *   **Reaction:** Identified as a deadlock in request resolution; fix already merged in PR #16365.
    *   [Link](https://github.com/openai/codex/issues/16364)

8.  **[Bug] VS Code Extension Auth Failure (#16341)**
    *   **Why:** Extension receives Cloudflare HTML (403) instead of JSON, breaking auth in Remote SSH environments.
    *   **Reaction:** Critical connectivity issue for remote development workflows.
    *   [Link](https://github.com/openai/codex/issues/16341)

9.  **[Bug] Desktop App Ignores Project MCP Config (#13025)**
    *   **Why:** App loads MCP servers from `~/.codex/config.toml` but ignores project-level configs.
    *   **Reaction:** 17 upvotes. Breaks per-project tooling setups for teams.
    *   [Link](https://github.com/openai/codex/issues/13025)

10. **[Bug] Custom Model Provider Auth Loss (#15492)**
    *   **Why:** Authorization headers are dropped when WebSocket falls back to HTTPS for custom gateways.
    *   **Reaction:** 5 comments. Breaks compatibility with enterprise model gateways.
    *   [Link](https://github.com/openai/codex/issues/15492)

## 4. Key PR Progress

1.  **Fix App-Server Deadlocks (#16365)** - *Merged*
    *   Resolves critical hangs in `codex exec` by fixing worker blockages during server-request acknowledgement.
    *   [Link](https://github.com/openai/codex/pull/16365)

2.  **Subagent Model Fallback (#16197)** - *Open*
    *   Introduces ordered model fallback candidates for subagents, allowing automatic retries on quota exhaustion or specific errors.
    *   [Link](https://github.com/openai/codex/pull/16197)

3.  **Experimental Job Scheduling & `/loop` (#16282)** - *Open*
    *   Adds experimental scheduling capabilities and a `/loop` command for continuous agent execution workflows.
    *   [Link](https://github.com/openai/codex/pull/16282)

4.  **Telemetry: Turn Events (#15591)** - *Open*
    *   Part of a major telemetry stack update to capture turn-level metadata for better analytics and debugging.
    *   [Link](https://github.com/openai/codex/pull/15591)

5.  **Fix TUI Permission Profile Conversions (#16284)** - *Open*
    *   Fixes a bug where filesystem grants were dropped due to camelCase/snake_case mismatches in JSON payloads.
    *   [Link](https://github.com/openai/codex/pull/16284)

6.  **Windows Sandbox Unified Exec (#15578)** - *Open*
    *   Foundation work for improving Windows sandbox stability and process runtime handling.
    *   [Link](https://github.com/openai/codex/pull/15578)

7.  **Refactor ChatWidget Tests (#16361)** - *Open*
    *   Significant maintenance PR splitting a monolithic test file into topical modules to improve maintainability.
    *   [Link](https://github.com/openai/codex/pull/16361)

8.  **Watchdog Timer Reset (#16199)** - *Open*
    *   Resets the idle timer on user input, preventing the watchdog from killing the agent while the user is actively engaged.
    *   [Link](https://github.com/openai/codex/pull/16199)

9.  **Fix Stale Rate Limits in TUI (#16201)** - *Open*
    *   Ensures the `/status` command dynamically updates rate limit info rather than showing a frozen cached snapshot.
    *   [Link](https://github.com/openai/codex/pull/16201)

10. **Guardian Event Ordering (#16370)** - *Open*
    *   Fixes the order of "Guardian" auto-review events to ensure the frontend renders approval reviews correctly.
    *   [Link](https://github.com/openai/codex/pull/16370)

## 5. Feature Request Trends
*   **Remote/Container Support:** Strong demand for the Desktop App to support SSH and DevContainer connections, moving beyond local-only file system access.
*   **Advanced History Search:** Requests for `zsh`-style `Ctrl+R` reverse search in the CLI composer to navigate long prompt histories easier.
*   **Context Management:** Features to automatically fix git merge conflicts and better handle long-running context windows without truncation.
*   **UI/UX Polish:** Requests for better screenshot capture support in the Web/iPad versions and more stable scrolling behavior in terminal multiplexers (Zellij/Tmux).

## 6. Developer Pain Points
*   **Windows Stability:** A significant portion of high-activity issues involve Windows-specific crashes, WSL disconnection, and sandbox permissions.
*   **Token Opacity:** Developers are frustrated by the lack of visibility into "background" token usage, leading to unexpected quota depletion.
*   **Custom Provider Integration:** Recurring issues with headers and configuration loading when using non-OpenAI model gateways or MCP servers.
*   **Session State Durability:** Bugs involving lost thread history, session resumption failures, and database locking issues are frequently cited.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-04-01

## 1. Today's Highlights
The Gemini CLI team kicks off April with the **v0.36.0-preview.7** release, accompanied by significant architectural refactoring focused on context management and sandbox performance. A major theme in today’s activity is the stabilization of **Plan Mode**, with new PRs addressing deadlocks, tool visibility logic, and version control for plans. Additionally, the community is actively engaging with proposals for advanced evaluation frameworks (including a GSoC 2026 proposal) and smarter memory management systems.

## 2. Releases
*   **[v0.36.0-preview.7](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.7)**
    *   Incremental preview release preparing the codebase for the stable v0.36.0 milestone.
    *   [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.36.0-preview.6...v0.36.0-preview.7)

## 3. Hot Issues
1.  **[CLI "Thinking" Hangs Post-Command](https://github.com/google-gemini/gemini-cli/issues/22405)** - A high-impact bug where the CLI gets stuck "thinking" after the first command. Users report this occurring mid-session, causing a complete workflow halt. *Status: Needs Triage.*
2.  **[Structured Evaluation Framework (GSoC 2026)](https://github.com/google-gemini/gemini-cli/issues/24301)** - A proposal by Lucas Amaral Evangelista to build a formal, extensible evaluation framework for agent tool use reliability. This aligns with internal efforts to improve behavioral testing.
3.  **[SSH Text Scrambling on Windows](https://github.com/google-gemini/gemini-cli/issues/24202)** - Users accessing Linux cloudtops via SSH from Windows are experiencing scrambled terminal text, rendering the CLI unusable in this common cross-platform setup.
4.  **[AST-Aware Codebase Mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** - An epic investigating Abstract Syntax Tree (AST) aware tools. The goal is to enable the agent to read method bounds precisely and navigate code structure rather than just text, significantly improving coding accuracy.
5.  **[Subagent Awareness of Approval Modes](https://github.com/google-gemini/gemini-cli/issues/23582)** - Currently, subagents attempt actions blocked by the Policy Engine because they lack context about the active "Plan" or "Auto-Edit" modes. This issue tracks aligning subagent instructions with global constraints.
6.  **[Context Management Centralization](https://github.com/google-gemini/gemini-cli/issues/24379)** - A strategic refactor to consolidate scattered context management logic into a single `src/context` folder to improve maintainability.
7.  **[Memory Routing: Global vs. Project](https://github.com/google-gemini/gemini-cli/issues/22819)** - A request to distinguish between user preferences (Global `~/.gemini/`) and codebase specifics (Project `.gemini/`) to prevent memory "bleed" between different workspaces.
8.  **[Robust Component-Level Evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** - Following up on behavioral evals, this epic aims to harden the 76 existing tests and ensure reliability across supported Gemini models.
9.  **[Proactive Memory Writes](https://github.com/google-gemini/gemini-cli/issues/22809)** - Tuning the main agent to recognize when to save memories (e.g., detecting repeated user corrections) rather than requiring manual input.
10. **[Tool Limit Errors (>128 Tools)](https://github.com/google-gemini/gemini-cli/issues/24246)** - The CLI encounters 400 errors when tool counts exceed limits. The discussion focuses on making the agent smarter about scoping enabled tools dynamically.

## 4. Key PR Progress
1.  **[Refactor: Centralize Context Logic](https://github.com/google-gemini/gemini-cli/pull/24380)** - Moves context management into `src/context`. This is a foundational cleanup aimed at reducing technical debt for future agent features.
2.  **[Fix: Plan Mode Deadlock](https://github.com/google-gemini/gemini-cli/pull/24047)** - Resolves a critical deadlock where Plan Mode failed if the `.gemini/plans` directory didn't exist on the host, fixing sandbox interaction bugs.
3.  **[Feat: Dynamic Plan Mode Tool Visibility](https://github.com/google-gemini/gemini-cli/pull/24378)** - Implements logic to hide `enter_plan_mode` when already planning and `exit_plan_mode` when in standard mode, preventing LLM confusion.
4.  **[Feat: Plan Versioning & Diffing](https://github.com/google-gemini/gemini-cli/pull/24377)** - Introduces versioned backups (e.g., `plan.v1.md`) and color-coded diffs when users reject a plan, preventing loss of previous iterations.
5.  **[Fix: Command Injection Vulnerability](https://github.com/google-gemini/gemini-cli/pull/24170)** - A security fix preventing shell substitution syntax (`$()`, backticks) in command arguments from executing unintended commands.
6.  **[Refactor: JIT Sandbox Resolution](https://github.com/google-gemini/gemini-cli/pull/24374)** - Addresses startup performance regression by deferring expensive file system walks for sandbox configuration until they are actually needed.
7.  **[Fix: Subagent Chat Recording Gaps](https://github.com/google-gemini/gemini-cli/pull/24368)** - Ensures tool calls and session summaries are correctly persisted to disk, fixing issues where subagent history would vanish or appear incomplete.
8.  **[Fix: Pin AuthType.GATEWAY to Gemini 3.1](https://github.com/google-gemini/gemini-cli/pull/24375)** - Forces the Gateway auth flow (used by JetBrains) to resolve specifically to Gemini 3.1 Pro/Flash Lite to prevent unstable fallbacks.
9.  **[Feat: Event-Driven Subagent History](https://github.com/google-gemini/gemini-cli/pull/23914)** - Introduces a `MessageBus` event system for subagent activity, allowing the UI to render real-time traces without heavy polling.
10. **[Fix: Browser Agent UX](https://github.com/google-gemini/gemini-cli/pull/24312)** - Fixes UI bugs where browser agents would get stuck on "Starting..." and improves end-to-end test reliability.

## 5. Feature Request Trends
*   **Advanced Memory Architecture:** There is a strong push towards "smart memory," including background services for skill extraction (#24272) and distinct routing for global vs. project memory (#22819).
*   **Code Intelligence (AST):** Moving beyond text-based search, developers are requesting AST-aware tools (#22745) to allow the LLM to understand code structure (methods, classes) natively.
*   **Evaluation & Reliability:** A significant trend involves "evals"—frameworks to test agent reliability (#24301, #24353) and prevent regressions in logic or tool use.
*   **Safety & Policy Control:** Requests for better handling of destructive behaviors (#22672) and clearer constraints on subagents regarding approval modes (#23582).

## 6. Developer Pain Points
*   **Environment Stability:** Users are frequently reporting hangs (#22405) and SSH rendering issues (#24202), indicating friction in remote and cross-platform environments.
*   **Context & Token Limits:** Encountering 400 errors due to tool limits (#24246) highlights frustration with the model's context window management during complex sessions.
*   **Agent "hallucinations" in Code:** Maintainers note the agent often uses unsafe object cloning or partial implementations (#22863), suggesting the underlying model needs better prompting or tooling to verify code integrity before writing.
*   **Noisy Outputs:** Developers report that the model creates temporary scripts in random directories (#23571), creating cleanup overhead.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-01

## 1. Today's Highlights
The Copilot CLI team released **v1.0.15-0** and **v1.0.14**, delivering critical fixes for Windows Subsystem for Linux (WSL) image pasting and MCP server connectivity, alongside improved support for the Kitty keyboard protocol. However, the community is currently divided; while the new `Shift+Enter` behavior was intended to streamline workflows, it has inadvertently disrupted muscle memory for users expecting multiline input. Additionally, transient API errors and model availability confusion (specifically regarding GPT-5.3-Codex and Claude Opus) are dominating support channels.

## 2. Releases

### **v1.0.15-0** & **v1.0.14** (Recent Releases)
The latest updates focus on stability and input handling:
*   **WSL Fix:** Resolved an issue where pasting images from the Windows clipboard failed in WSL environments.
*   **MCP Stability:** Slow-to-connect MCP servers no longer block the agent from starting.
*   **Input Protocols:** `Shift+Enter` now inserts a newline in terminals supporting the Kitty keyboard protocol (though this has sparked debate regarding consistency).
*   **BYOM & Models:** Fixed image sending to Anthropic models in "Bring Your Own Model" (BYOM) scenarios. The model picker now correctly overrides the `--model` flag for the current session.
*   **UI Polish:** Terminal output no longer clears or jumps unexpectedly on error exits.

---

## 3. Hot Issues

1.  **[OPEN] Community Forks Arise Amidst Workflow Concerns** [#53](https://github.com/github/copilot-cli/issues/53)
    *   **Context:** With this issue open for 6 months, the community has begun rolling out alternatives like `shell-ai` to restore previous CLI behaviors.
    *   **Reaction:** High engagement (73 thumbs up); users are actively sharing workarounds and alternative toolchains.

2.  **[OPEN] Shift+Enter Behavior Inconsistency** [#1481](https://github.com/github/copilot-cli/issues/1481)
    *   **Context:** Users report that `Shift+Enter` executes the prompt instead of spawning a line break, whereas `Ctrl+Enter` spawns the break.
    *   **Reaction:** Seen as a violation of standard chat app conventions; confuses users migrating from other AI tools.

3.  **[OPEN] Transient API Errors and Rate Limiting** [#2101](https://github.com/github/copilot-cli/issues/2101)
    *   **Context:** A spike in "transient API errors" leading to rate limits has locked users out of sessions.
    *   **Reaction:** Frustration regarding the "retry" mechanism failing to handle rate limits gracefully.

4.  **[OPEN] GPT-5.3-Codex Stops Responding** [#2420](https://github.com/github/copilot-cli/issues/2420)
    *   **Context:** Users report that GPT-5.3-Codex specifically stopped working in the last 24 hours, potentially linked to the latest CLI update.
    *   **Reaction:** Urgent requests for clarification on model deprecation or backend changes.

5.  **[OPEN] Invalid Request Body (400 Errors)** [#1274](https://github.com/github/copilot-cli/issues/1274)
    *   **Context:** Code review tasks are failing with 400 errors, suggesting the CLI is crafting invalid payloads for certain diff files.
    *   **Reaction:** Blocks critical code review workflows.

6.  **[OPEN] Markdown Links Not Clickable** [#1974](https://github.com/github/copilot-cli/issues/1974)
    *   **Context:** Since v1.0.3, generated hyperlinks in the terminal are broken or unclickable.
    *   **Reaction:** Reduces the "copy-paste" efficiency of the CLI output.

7.  **[OPEN] Claude Sonnet 4.6 Connection Failures** [#2050](https://github/copilot-cli/issues/2050)
    *   **Context:** BYOM users on Claude Sonnet 4.6 are experiencing `503 GOAWAY` connection errors, while Gemini 3 Pro works fine.
    *   **Reaction:** Indicates potential model-specific stability issues in the CLI routing layer.

8.  **[OPEN] /ide Fails to Detect VS Code Workspace** [#1723](https://github.com/github/copilot-cli/issues/1723)
    *   **Context:** The `/ide` command cannot find active workspaces in VS Code on macOS Apple Silicon.
    *   **Reaction:** Breaks the integration between the terminal and the GUI IDE.

9.  **[OPEN] Request for /tools Command** [#407](https://github.com/github/copilot-cli/issues/407)
    *   **Context:** Users want a `/tools` command to list available capabilities (tools) the agent can access.
    *   **Reaction:** High demand (16 thumbs up) for better discoverability of agent features.

10. **[OPEN] X11 Middle-Click Paste Broken** [#2413](https://github.com/github/copilot-cli/issues/2413)
    *   **Context:** Middle-click paste (primary selection) stopped working in v1.0.11 for Linux/SSH users.
    *   **Reaction:** A specific but critical regression for Linux power users.

---

## 4. Key PR Progress

*   **[OPEN] Add uninstall script** [#2422](https://github.com/github/copilot-cli/pull/2422)
    *   Addresses a long-standing gap by providing a formal `uninstall.sh` script for curl/wget installations.
*   **[OPEN] Dev container features** [#2316](https://github.com/github/copilot-cli/pull/2316)
    *   Updates dev container configurations, likely smoothing the path for contributors.

*(Note: PR activity was low in the last 24 hours, with only maintenance and documentation updates visible.)*

---

## 5. Feature Request Trends

*   **"Side-Quest" Interactions (`/btw`):** There is a strong push for a `/btw` command ([#2078](https://github.com/github/copilot-cli/issues/2078), [#2280](https://github.com/github/copilot-cli/issues/2280)) to ask ephemeral questions without polluting the main context window.
*   **Input Mode Control:** Users are requesting granular control over input modes, specifically the ability to toggle "alt-screen" views ([#1799](https://github.com/github/copilot-cli/issues/1799)) and define custom keybindings for `Shift+Enter` vs. `Ctrl+Enter`.
*   **Session Management:** Requests for a `--caffeine` flag ([#1611](https://github.com/github/copilot-cli/issues/1611)) to prevent sleep during long automated tasks.
*   **Skill Organization:** Demand for subfolder support in the `/skills` directory ([#1632](https://github.com/github/copilot-cli/issues/1632)) to manage growing libraries of custom skills.

## 6. Developer Pain Points

*   **Keybinding Confusion:** The recent changes to `Shift+Enter` (newline vs. submit) have created significant friction, breaking the "muscle memory" for developers used to standard chat interfaces.
*   **Model Instability:** Developers are experiencing frequent disconnects with specific high-end models (Claude Sonnet, GPT-5.3-Codex), making the CLI unreliable for heavy tasks.
*   **Proxy & Auth Rigidness:** Enterprise users are hitting walls with strict token validation that rejects valid proxy-injected credentials ([#2431](https://github.com/github/copilot-cli/issues/2431)).
*   **Visual Accessibility:** Low-contrast text selection on dark backgrounds ([#2216](https://github.com/github/copilot-cli/issues/2216)) and broken Markdown links are degrading the user experience.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-04-01

## 1. Today's Highlights
The Kimi Code CLI community exhibited high activity today with **16 updated Pull Requests** and **21 Issues**. Key developments focus heavily on platform compatibility and UI stability, with critical fixes merged for Windows command execution errors and MCP tool image processing bugs. The feature roadmap is also expanding, with new proposals for Agent Swarm architectures and a persistent Memory System, alongside immediate improvements like `/title` session renaming and clipboard conflict resolution.

## 2. Releases
No new releases were recorded in the last 24 hours. The community is actively testing the latest `1.27.0` version.

## 3. Hot Issues
1.  **[OPEN] UI Rendering & Character Spacing** [#1681](https://github.com/MoonshotAI/kimi-cli/issues/1681): Users report critical UI rendering bugs where characters are spaced abnormally (e.g., `a dd-dir` instead of `add-dir`) and slash inputs are hidden, severely impacting readability and usage.
2.  **[OPEN] Content Filter False Positives** [#1671](https://github.com/MoonshotAI/kimi-cli/issues/1671): A high-priority bug where standard code references trigger a 400 "high risk" error from the content filter, blocking legitimate coding tasks.
3.  **[OPEN] Agent Swarm Mode Request** [#1633](https://github.com/MoonshotAI/kimi-cli/issues/1633): A highly discussed feature request asking for a "Agent Swarm" or "Teammates" mode to enable peer-to-peer agent interaction, contrasting with the current hierarchical subagent model.
4.  **[OPEN] AGENTS.md Instruction Compliance** [#1596](https://github.com/MoonshotAI/kimi-cli/issues/1596): Developers are frustrated that the agent ignores project-level constraints defined in `AGENTS.md`, prioritizing user prompts over project rules.
5.  **[OPEN] Memory System Feature** [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283): Continued interest in a comprehensive Memory System to persist context and user preferences across CLI sessions.
6.  **[OPEN] Windows CRLF Line Endings** [#1687](https://github.com/MoonshotAI/kimi-cli/issues/1687): A regression where file edits on Windows Terminal force CRLF line endings, disrupting cross-platform consistency compared to competitors like Claude Code.
7.  **[OPEN] Windows UX: Double Enter Required** [#1682](https://github.com/MoonshotAI/kimi-cli/issues/1682): A UX friction point where users must press Enter twice to execute autocompleted commands, breaking standard CLI conventions.
8.  **[OPEN] GLM-5.1 Integration Failure** [#1615](https://github.com/MoonshotAI/kimi-cli/issues/1615): Users integrating the GLM-5.1 model report that the CLI fails to receive feedback/tool responses, stalling the workflow.
9.  **[OPEN] Web UI Refresh Loop** [#1623](https://github.com/MoonshotAI/kimi-cli/issues/1623): Kimi Web users experience intermittent page refreshes that interrupt active sessions and data entry.
10. **[CLOSED] Windows Command Execution Fixed** [#1649](https://github.com/MoonshotAI/kimi-cli/issues/1649): (Resolved) Issue where Windows PowerShell incorrectly executed Linux commands (e.g., `grep`, `cat`) due to missing platform context.

## 4. Key PR Progress
1.  **[MERGED] Windows Platform Context Injection** [#1673](https://github.com/MoonshotAI/kimi-cli/pull/1673): Resolves #1649 by injecting OS and shell information into the system prompt, ensuring the model generates valid PowerShell commands on Windows.
2.  **[MERGED] Fix MCP Tool Image Handling** [#1670](https://github.com/MoonshotAI/kimi-cli/pull/1670): Fixes a 400 "text content is empty" error when MCP tools return only image data by ensuring a `TextPart` is always included in the payload.
3.  **[OPEN] Prevent Ctrl+W Clipboard Overwrite** [#1686](https://github.com/MoonshotAI/kimi-cli/pull/1686): Addresses a major pain point (#1567) where `Ctrl+W` (delete word) on macOS accidentally overwrites the system clipboard content.
4.  **[MERGED] Enhanced Explore Agent** [#1675](https://github.com/MoonshotAI/kimi-cli/pull/1675): Upgrades the explore agent with specialist roles, thoroughness levels, and automatic git context injection for better repository analysis.
5.  **[OPEN] Add `/title` Slash Command** [#1685](https://github.com/MoonshotAI/kimi-cli/pull/1685): Introduces `/title` (alias `/rename`) for manual session naming and unifies session metadata into a single `state.json` file.
6.  **[OPEN] Web UI WebSocket Reconnection** [#1669](https://github.com/MoonshotAI/kimi-cli/pull/1669): Proposes improvements to the WebSocket reconnection logic to stabilize the Web UI experience during network fluctuations.
7.  **[OPEN] Embedded Session Runtime for Web** [#1650](https://github.com/MoonshotAI/kimi-cli/pull/1650): Refactors `kimi web` to use an in-process embedded runtime by default to reduce latency and improve stability.
8.  **[MERGED] Fix OSC 8 Hyperlink Rendering** [#1677](https://github.com/MoonshotAI/kimi-cli/pull/1677): Strips OSC 8 hyperlink sequences to prevent escape bytes from leaking into the UI and garbling output.
9.  **[OPEN] Simplified Context Injection Hooks** [#1683](https://github.com/MoonshotAI/kimi-cli/pull/1683): Adds an `inject_prompt` hook feature, allowing developers to more easily insert context into conversations programmatically.
10. **[OPEN] ACPX Compatibility Fix** [#1688](https://github.com/MoonshotAI/kimi-cli/pull/1688): Fixes shell command parsing for `terminal/create` to resolve "Internal error" failures when using Agent Client Protocol clients.

## 5. Feature Request Trends
*   **Advanced Agentic Workflows:** The community is pushing beyond simple subagents toward "Agent Swarms" and "Teammates" models that allow autonomous inter-agent communication and collaboration.
*   **Project-Level Memory & Compliance:** Strong demand for a "Memory System" (#1283) and stricter adherence to `AGENTS.md` (#1596), indicating users want the AI to respect long-term project rules and context automatically.
*   **Ecosystem Alignment:** Requests to align with OpenAI Codex standards for skills discovery (#1684) and improved handling of third-party models (GLM-5.1) show a trend toward interoperability.

## 6. Developer Pain Points
*   **Windows Experience:** Windows users continue to face friction regarding line endings (CRLF vs. LF), specific terminal bugs (double Enter), and command compatibility, though fixes are actively being merged.
*   **Input & UX Polish:** Small but frequent annoyances are piling up, such as the `Ctrl+W` clipboard conflict on Mac, UI character spacing glitches, and proxy scheme support (SOCKS), indicating a need for UX refinement.
*   **Strict Content Filtering:** The current content safety filters are triggering false positives on legitimate code references, interrupting developer workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-01

## 1. Today's Highlights

OpenCode shipped **v1.3.11** with dedicated Kimi model support and improved TUI terminal passthrough. A major new **Personality System** (Hermes-inspired) was merged and subsequently split into multiple compliance phases, signaling a significant architectural shift toward customizable agent identities. The community is actively debating provider integration issues, particularly around GitHub Copilot Enterprise compaction failures and credential restrictions.

---

## 2. Releases

### v1.3.11
- **Core**: Added dedicated system prompt for Kimi models (@Yuxin-Dong)
- **TUI**: Improved terminal output passthrough for more reliable external command rendering
- **Extensions**: Plugins without matching server/TUI entrypoints now warn instead of failing

### v1.3.10
- **Core**: Subagent tool calls remain clickable while pending; improved storage migration reliability to prevent corruption from malformed legacy records
- **TUI**: Improved muted text contrast in Catppuccin themes

### v1.3.9
- **Core**: Fixed plugin entrypoint resolution for paths without leading dot

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#7456](https://github.com/anomalyco/opencode/issues/7456) | **Claude Code API credentials** (50 comments) | Users report Anthropic credentials from Claude Code CLI are blocked for "unauthorized use." High friction for developers migrating from official Anthropic tooling. |
| [#14273](https://github.com/anomalyco/opencode/issues/14273) | **Free usage exceeded on Zen free models** (17 comments) | Kimi K2.5/MiniMax2.5 free tiers incorrectly report balance issues despite valid credits—blocking free-tier adoption. |
| [#5474](https://github.com/anomalyco/opencode/issues/5474) | **`/undo` doesn't rollback file changes** (15 comments) | Critical UX bug: undoing AI changes only reverts chat messages, leaving orphaned file modifications. |
| [#13533](https://github.com/anomalyco/opencode/issues/13533) | **Compaction fails with 400 Bad Request** (13 comments) | Claude Opus 4.5 via GitHub Copilot fails during conversation summarization. |
| [#459](https://github.com/anomalyco/opencode/issues/459) | **Privacy and data collection clarification** (13 comments, 45 👍) | Top-voted issue requesting explicit documentation on local-first privacy guarantees. |
| [#3787](https://github.com/anomalyco/opencode/issues/3787) | **Linear Agent integration** (13 comments, 27 👍) | High-demand feature to assign Linear issues directly to OpenCode agents. |
| [#11157](https://github.com/anomalyco/opencode/issues/11157) | **Compaction 400 with GitHub Copilot Enterprise** (12 comments) | GitHub Copilot API rejects `role: "tool"` messages during summarization—blocking enterprise workflows. |
| [#20184](https://github.com/anomalyco/opencode/issues/20184) | **Subagent labels not navigating** (10 comments) | TUI regression: clicking subagent labels does nothing after session refactor. |
| [#9132](https://github.com/anomalyco/opencode/issues/9132) | **Official Docker sandbox template** (7 comments, 33 👍) | Community requests first-class Docker sandbox similar to Claude Code's offering. |
| [#10884](https://github.com/anomalyco/opencode/issues/10884) | **MCP Apps support in desktop app** (6 comments, 19 👍) | Request to support stable MCP Apps specification (v2026-01-26) in desktop client. |

---

## 4. Key PR Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#20353](https://github.com/anomalyco/opencode/pull/20353) | **Hermes-inspired soul & personality system** | CLOSED | Major feature adding personality presets, SOUL.md loading, and `/personality` command. |
| [#20352](https://github.com/anomalyco/opencode/pull/20352) | **Split soul.txt into routing + default-soul** | CLOSED | Architectural refactor separating F5 routing from user-editable identity. |
| [#20357](https://github.com/anomalyco/opencode/pull/20357) | **Upgrade opentui to 0.1.94** | CLOSED | Fixes double mount issue for replace slots. |
| [#20341](https://github.com/anomalyco/opencode/pull/20341) | **Remove 30-day limit from TUI session list** | OPEN | Restores visibility of older sessions filtered out by hardcoded limit. |
| [#20325](https://github.com/anomalyco/opencode/pull/20325) | **Fix useCompletionUrls for Azure providers** | CLOSED | Custom Azure-wrapped providers now correctly respect completion URL settings. |
| [#20329](https://github.com/anomalyco/opencode/pull/20329) | **Include active session directories in sidebar** | CLOSED | Workspace sidebar now auto-discovers and displays non-archived sessions. |
| [#20304](https://github.com/anomalyco/opencode/pull/20304) | **Migrate prompt tests to HTTP mock LLM** | OPEN | Replaces Bun mock with Effect HTTP server for more realistic provider testing. |
| [#20344](https://github.com/anomalyco/opencode/pull/20344) | **Native auto-memory for cross-session learning** | OPEN | Adds persistent pattern learning between sessions. |
| [#19955](https://github.com/anomalyco/opencode/pull/19955) | **GitLab DWS tool approval integration** | OPEN | Wires GitLab Duo Workflow Service approval into OpenCode's permission system. |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile touch optimization** | OPEN | Touch-friendly UI improvements for mobile/tablet usage. |

---

## 5. Feature Request Trends

1. **Agent Identity & Personalization** — Strong momentum behind personality systems, persistent souls, and customizable agent behavior (multiple compliance-phase issues merged).

2. **Enterprise Provider Support** — Repeated requests for GitHub Copilot Enterprise, GitLab DWS, and Azure custom endpoint reliability.

3. **MCP Ecosystem Expansion** — Community wants MCP Apps in desktop app, dynamic MCP server visibility, and broader tool protocol support.

4. **Cross-Session Memory** — Native auto-memory for learning user patterns across sessions (PR #20344).

5. **Docker/Container Workflows** — Official sandbox templates for isolated development environments.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Compaction failures with enterprise providers** | Multiple reports (#13533, #11157) of 400 Bad Request during summarization with Copilot Enterprise |
| **`/undo` incomplete rollback** | Long-standing bug (#5474) where file changes persist after undo—breaks trust in AI edits |
| **Provider credential friction** | Claude Code CLI credentials rejected (#7456); confusing error messages |
| **TUI session visibility** | Sessions older than 30 days hidden (#20341); subagent navigation broken (#20184) |
| **Windows path normalization** | False "must read first" errors due to read-gate string mismatch (#20354) |
| **Privacy uncertainty** | Top-voted issue (#459) requests explicit local-first privacy documentation |

---

*Digest generated from 50 issues and 50 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-04-01

## 1. Today's Highlights
The community is actively testing the **v0.13.2-nightly** release, with significant focus on stability issues surrounding shell command execution (tree-sitter WASM errors) and context window management. A standout feature gaining traction is the implementation of a **Compact/Verbose mode toggle** to manage UI noise during long agentic sessions. Additionally, the release of **Qwen3.6** model availability requests and new **extension/hook systems** signals a rapid expansion of the tool's ecosystem capabilities.

## 2. Releases
- **[v0.13.2-nightly.20260331.1b1a029fd](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.2-nightly.20260331.1b1a029fd)**
  - **Summary:** A nightly build addressing recent bug fixes. Users should note that this version introduces changes to how context usage is displayed and handles installation paths, though several stability issues regarding shell execution and git operations are currently being triaged based on this build.

## 3. Hot Issues
1.  **[Bug] Shell Commands Freeze Session** ([#2740](https://github.com/QwenLM/qwen-code/issues/2740))
    - **Why:** Critical usability blocker. Running basic shell commands (e.g., `ls`) freezes the session due to missing `tree-sitter.wasm` files in specific installations.
    - **Reaction:** Users are reporting forced restarts; fix PRs are already incoming (see PR #2764).
2.  **[Bug] Git Commit Generation Fails in v0.13.2** ([#2757](https://github.com/QwenLM/qwen-code/issues/2757))
    - **Why:** A regression in the latest nightly build prevents the agent from generating git commit messages and pushing code.
3.  **[Feature] Compact/Verbose Mode Toggle** ([#2767](https://github.com/QwenLM/qwen-code/issues/2767))
    - **Why:** High demand for UI cleanliness. Proposes `Ctrl+O` to hide tool output and thought chains during long autonomous runs.
4.  **[Bug] Context Usage Exceeds 100%** ([#2762](https://github.com/QwenLM/qwen-code/issues/2762))
    - **Why:** Visual bug where context usage displays >100%, confusing users about actual context limits.
5.  **[Request] Qwen3.6 Model Support** ([#2759](https://github.com/QwenLM/qwen-code/issues/2759))
    - **Why:** Users are frustrated that the newest model (Qwen3.6) is available in competitors (OpenCode) but not yet in the native Qwen Code tool.
6.  **[Bug] Installation Script Modifies User Config** ([#2768](https://github.com/QwenLM/qwen-code/issues/2768))
    - **Why:** The installer overwrites `~/.npmrc` settings and auto-starts the application, disrupting automated deployment scripts.
7.  **[Bug] Garbled Characters on Windows** ([#2746](https://github.com/QwenLM/qwen-code/issues/2746))
    - **Why:** Encoding issue on Windows with Chinese usernames, affecting file paths and logs (Mojibake).
8.  **[Bug] Web Fetch Returns AI Greeting** ([#2609](https://github.com/QwenLM/qwen-code/issues/2609))
    - **Why:** The `web_fetch` tool fails to retrieve actual content, returning hallucinations or irrelevant text instead.
9.  **[Bug] Ralph Loop Persists Across Sessions** ([#2657](https://github.com/QwenLM/qwen-code/issues/2657))
    - **Why:** Loops created in one session continue to trigger in new sessions due to persistent state files.
10. **[Bug] Git Bash Compatibility** ([#2774](https://github.com/QwenLM/qwen-code/issues/2774))
    - **Why:** Qwen CLI fails to detect input in Windows Git Bash, forcing users to switch to PowerShell.

## 4. Key PR Progress
1.  **[Feat] Compact/Verbose Mode Toggle** ([PR #2770](https://github.com/QwenLM/qwen-code/pull/2770))
    - Implements `Ctrl+O` toggle to switch between clean output and detailed debugging views.
2.  **[Fix] Tree-sitter WASM Path Resolution** ([PR #2764](https://github.com/QwenLM/qwen-code/pull/2764))
    - Fixes the critical shell-freeze bug by robustly resolving WASM paths for symlinked installations.
3.  **[Feat] Extensible Channels Platform** ([PR #2628](https://github.com/QwenLM/qwen-code/pull/2628))
    - Introduces a plugin system to integrate Qwen Code with Telegram, WeChat, and DingTalk.
4.  **[Feat] Cross-Provider Model Selection for Subagents** ([PR #2698](https://github.com/QwenLM/qwen-code/pull/2698))
    - Allows subagents to use a different model/provider than the main conversation (e.g., cheaper model for background tasks).
5.  **[Fix] Context Usage Display** ([PR #2766](https://github.com/QwenLM/qwen-code/pull/2766))
    - Adds visual warning (red text) and caps display at ">100%" when context limits are exceeded.
6.  **[Feat] Web Fetch in Plan Mode** ([PR #2763](https://github.com/QwenLM/qwen-code/pull/2763))
    - Enables `WebFetch` and `WebSearch` during planning mode with user approval, previously blocked.
7.  **[Feat] Event Hooks System** ([PR #2203](https://github.com/QwenLM/qwen-code/pull/2203))
    - Implements 10 core event hooks for session lifecycle and tool execution, enhancing extensibility.
8.  **[Feat] Math Rendering Support** ([PR #2732](https://github.com/QwenLM/qwen-code/pull/2732))
    - Adds rendering for LaTeX, fractions, and fractals, plus a markdown validator to prevent text leakage.
9.  **[Fix] NPM Registry & Path Issues** ([PR #2769](https://github.com/QwenLM/qwen-code/pull/2769) & [PR #2760](https://github.com/QwenLM/qwen-code/pull/2760))
    - Fixes path replacements in markdown and optional dependency handling for Windows (`node-pty`).
10. **[Feat] SDK Interrupt Handling** ([PR #2771](https://github.com/QwenLM/qwen-code/pull/2771))
    - Improves stability by handling `canUseTool` interrupts and cancelling pending tool calls immediately.

## 5. Feature Request Trends
- **Model Availability:** Immediate support for the latest **Qwen3.6** model is the top request.
- **UI Customization:** Strong demand for **Compact Modes** to reduce visual noise from tool outputs and long thought chains.
- **Platform Integration:** Users want to run Qwen Code on messaging platforms (Telegram/DingTalk) and manage it via **npm registry** for enterprise distribution.
- **Planning Mode Autonomy:** Requests to allow read-only tools (like `WebFetch`) during the planning phase to improve research capabilities.

## 6. Developer Pain Points
- **Windows Stability:** High frequency of issues related to **Git Bash compatibility**, **Chinese username encoding**, and **node-pty** binary loading.
- **Installation Intrusiveness:** Developers are unhappy with the installer changing `.npmrc` settings and auto-starting the process, breaking CI/CD and personal scripts.
- **Agent Reliability:** Reports of the agent "refusing to do anything" or freezing during shell commands are causing significant workflow interruptions.
- **Context Management:** Users are confused when context limits are hit without clear warning, leading to failed executions.

</details>