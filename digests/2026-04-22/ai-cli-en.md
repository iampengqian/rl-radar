# AI CLI Tools Community Digest 2026-04-22

> Generated: 2026-04-21 22:12 UTC | Tools covered: 7

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

# Cross-Tool Analysis: AI CLI Developer Ecosystem — 2026-04-22

## 1. Ecosystem Overview
The AI CLI tooling landscape is rapidly maturing from basic terminal assistants into sophisticated, autonomous agent platforms. Current development across the sector is heavily defined by a push toward enterprise readiness, characterized by the integration of lifecycle hooks, structured authentication providers, and complex multi-agent orchestration. However, this aggressive pace of innovation is exposing significant growing pains, particularly regarding platform stability on Windows, non-interactive CI/CD reliability, and mounting user frustration over opaque billing and token consumption. MCP (Model Context Protocol) has clearly cemented itself as the standard for tool integration, though its implementation remains fragile across the board.

## 2. Activity Comparison
*Note: Metrics reflect the volume of highly active "Hot" issues and open/updated PRs documented in today's digests.*

| Tool | Issue Activity | PR Activity | Release Status | Current Engineering Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | High (10 hot issues, including a 2,000+ 👍 megathread) | Low (4 PRs updated, 0 maintainer PRs) | **v2.1.116** (Performance optimization, introduced MCP regressions) | Billing transparency, MCP reliability |
| **OpenAI Codex** | High (10 hot issues, massive token-drain thread) | Very High (10 core PRs) | **Rust v0.123.0-alpha.2-7** (6 rapid-fire alpha releases) | Rust core overhaul, enterprise environments & auth |
| **Gemini CLI** | Medium-High (10 hot issues) | Very High (10 core PRs) | **None** (No new releases) | Async boot optimization, Windows shell parity |
| **GitHub Copilot CLI**| High (10 hot issues, sudden model availability outrage) | Low (1 PR updated) | **v1.0.35-0 to v1.0.35-2** (3 pre-releases) | HTTP hooks, Auto-mode degradation fixes |
| **Kimi Code CLI** | Medium-High (10 hot issues) | High (10 community PRs) | **None** (No new releases) | TTY/MCP shutdown fixes, OAuth subagent routing |
| **OpenCode** | High (10 hot issues) | Very High (10 PRs, major schema migration) | **v1.14.20** (Targeted patch for regressions) | Zod → Effect Schema migration, provider compatibility |
| **Qwen Code** | Medium-High (10 hot issues, auth flood) | High (10 PRs, heavy community contribs) | **v0.15.0-preview.1** | ACP hooks, file indexing performance, third-party models |

## 3. Shared Feature Directions
Several unified requirements are emerging simultaneously across independent tool communities, highlighting universal needs in the AI developer workflow:

*   **Robust Windows/WSL Support:** Windows users are universally experiencing friction. *Claude Code* (UI lag), *OpenAI Codex* (typing lag, broken WSL context), *Gemini CLI* (PowerShell encoding bottlenecks), and *Kimi Code* (atomic write errors) all indicate that cross-platform terminal compatibility remains a major unsolved challenge.
*   **Enterprise Auth & Lifecycle Hooks:** There is a concerted push to integrate CLI tools into corporate CI/CD pipelines. *OpenAI Codex* (AuthProvider traits, `requirements.toml` hooks), *GitHub Copilot CLI* (HTTP hooks, fine-grained PATs), *Qwen Code* (ACP hooks), and *Kimi Code* (PreToolUse hooks) are all building out governance and automation capabilities.
*   **MCP Lifecycle Management:** MCP is standard but unstable. *Claude Code* broke OAuth tool discovery today via a deferred-loading regression; *OpenAI Codex* is leaking orphaned MCP child processes during long sessions; and *GitHub Copilot CLI* is blocking MCP sampling in non-interactive modes.
*   **Sub-agent Orchestration & Memory:** Tools are moving beyond single-threaded chats. *Qwen Code* (parent-agent control over subagents), *Gemini CLI* (routing global vs. project memory), and *Kimi Code* (OAuth passing to subagents) show a trend toward autonomous, multi-agent delegation.
*   **Context Window & Cost Management:** As context windows scale, managing them is becoming critical. *OpenAI Codex* (failure to compact long contexts), *Qwen Code* (auto-compression lag), and *Claude Code* (prompt cache expiration causing token spikes) demonstrate the need for smarter memory pruning.

## 4. Differentiation Analysis
While feature sets converge, technical approaches and target audiences differ significantly:

*   **Anthropic (Claude Code):** Focuses on deep integration and raw model capability for power users, but is currently bottlenecked by a severe trust deficit regarding billing opacity and a massive (2,000+ upvote) community complaint regarding sustained drops in complex reasoning quality.
*   **OpenAI (Codex):** Taking the most aggressive architectural route with a ground-up Rust rewrite. They are heavily targeting enterprise IT requirements (sticky environments, rollout tracing, Entra auth) at the cost of near-term stability (CPU pinning, massive session storage leaks).
*   **Google (Gemini CLI):** Highly focused on architectural safety and performance internals. Unique focus on implementing strict policy engines for shells, AST-aware code mapping, and reducing API friction (tool count loop caps), signaling a focus on secure, large-scale deployment.
*   **GitHub (Copilot CLI):** Leverages its distribution advantage but suffers from model-gating friction. Unique differentiators include deep integration with the GitHub marketplace/plugins and a focus on graceful model degradation (switching models on rate-limit).
*   **OpenCode:** Stands out as an open, provider-agnostic platform undergoing a massive type-safety overhaul (Zod to Effect Schema). Its primary differentiator is a commitment to universal LSP/provider compatibility and preventing schema emission bugs across diverse AI models.
*   **Eastern Markets (Kimi & Qwen):** Highly responsive community-driven development. Differentiated by a strong focus on ecosystem-specific integrations (e.g., ZhipuAI/GLM, AWS Bedrock, regional API support) and catching up to Western counterparts in agentic capabilities. 

## 5. Community Momentum & Maturity
*   **Rapid Iterators:** *OpenAI Codex* (6 alphas in 24 hours) and *GitHub Copilot CLI* (3 pre-releases) show the fastest release cadences, though they are currently trading stability for velocity. *OpenCode* is also moving incredibly fast with a massive schema migration stack.
*   **Community Momentum:** *Qwen Code* and *Kimi Code* exhibit fantastic community momentum, with a high ratio of external PRs addressing core pain points (e.g., worker thread indexing, Python SDKs). *Claude Code* has massive community engagement (evidenced by massive upvote counts) but low community contribution throughput, indicating a closed-off engineering pipeline.
*   **Maturity:** *Claude Code* and *OpenAI Codex* communities are expressing "post-honeymoon" frustrations typical of maturing tools (billing disputes, enterprise compliance, model regression). In contrast, *Kimi* and *Qwen* communities are focused on fundamental feature parity and baseline stability.

## 6. Trend Signals
1.  **The "Second-Class Citizen" OS Gap is Widening:** The assumption of a macOS/Linux developer environment is actively harming adoption. AI tools utilizing complex terminal rendering (TUI), sandboxing, and process forking are breaking spectacularly on Windows/WSL. Development teams must allocate dedicated QA for Windows architectures.
2.  **Opaque Billing is the Biggest Threat to Enterprise Adoption:** Across *Claude Code*, *OpenAI Codex*, and *GitHub Copilot CLI*, the most severe community friction involves unexpected token drain, invisible background consumption (Extended Thinking), and sudden model quota limits. Real-time telemetry and hard cost-caps are urgently needed.
3.  **MCP Requires Standardized Lifecycle Management:** As MCP becomes the universal standard for tool integration, the lack of robust lifecycle management is causing systemic issues (zombie processes, auth header stripping). Building resilient MCP connection managers will be a critical differentiator.
4.  **Non-Interactive/CI-CD Execution is Broken:** Automated coding workflows are failing due to context compaction failures, prompt submission race conditions, and non-interactive permission blocks. Developing reliable, headless agent execution should be the primary roadmap focus for teams targeting DevOps integration.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Snapshot Date:** 2026-04-22

*Note: The upstream data snapshot for this repository indicates zero open Pull Requests and zero open Issues at the time of extraction. This suggests a highly curated ecosystem where submissions are rapidly triaged, merged, or closed, resulting in a clean backlog. The following report is based on the provided empty-state data.*

---

## 1. Top Skills Ranking
Currently, there are **0 open or recently active Pull Requests** in the repository. 
* In a matured or heavily curated repository, this typically means that new Skills are being merged internally by Anthropic without prolonged public discussion, or the community is in a transition phase between major skill dumps. 
* *(No GitHub links to provide for this section).*

## 2. Community Demand Trends
Based on the current snapshot showing **0 open Issues**, there is no visible backlog of community-requested features or unmet demands.
* A zero-issue state implies that user feedback, bug reports, and feature requests are either being handled through alternative channels (e.g., Discord, direct integrations, or internal tracking) or that the current official Skills suite is satisfying baseline user needs.

## 3. High-Potential Pending Skills
There are **no active, unmerged Pull Requests** pending in the repository at this time. Any high-potential skills currently in development are likely being worked on in private forks or have already been merged into the main branch prior to this snapshot.

## 4. Skills Ecosystem Insight
With an empty Issues and PR queue, the ecosystem's current state suggests that community demands have either been fully consolidated into the existing Claude Code framework or that public skill contribution cycles are currently paused pending a new update to the Claude Code architecture.

---

# Claude Code Community Digest — 2026-04-22

## 1. Today's Highlights

Claude Code shipped **v2.1.116**, delivering significant performance improvements to `/resume` on large sessions (up to 67% faster on 40MB+) and optimizing MCP startup by deferring `resources/templates/list` calls until the first `@`-mention. However, the release appears to have introduced a regression affecting MCP tool discovery on macOS. Community frustration continues to simmer around billing transparency, with a mega-issue about abnormal usage limit drain (#41930) reaching 100 comments and a long-standing model-quality complaint (#42796) accumulating over 2,000 upvotes.

---

## 2. Releases

### [v2.1.116](https://github.com/anthropics/claude-code/releases/tag/v2.1.116)
- **`/resume` performance overhaul**: Significantly faster session resumption on large sessions (up to 67% improvement on 40MB+ sessions), with better handling of sessions containing many dead-fork entries.
- **MCP startup optimization**: When multiple stdio MCP servers are configured, `resources/templates/list` is now deferred until the first `@`-mention, reducing cold-start latency.

> ⚠️ **Post-release regression reported**: [Issue #51736](https://github.com/anthropics/claude-code/issues/51736) indicates custom MCP server tools may not be discovered after updating to 2.1.116, potentially related to the deferred-loading change.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [**#42796** — Claude Code unusable for complex engineering tasks since Feb updates](https://github.com/anthropics/claude-code/issues/42796) 🔥 2,045 👍 · 565 comments | The single most upvoted issue in the tracker. Community reports a sustained degradation in model reasoning quality for complex multi-file tasks. Closed but remains a lightning rod for dissatisfaction. |
| 2 | [**#41930** — Widespread abnormal usage limit drain across all paid tiers](https://github.com/anthropics/claude-code/issues/41930) 83 👍 · 100 comments | Multiple users on Max and Pro plans report mysterious credit depletion since late March. No formal Anthropic communication has been issued, fueling frustration. |
| 3 | [**#26302** — Severe UI lag and mouse stutter on Windows](https://github.com/anthropics/claude-code/issues/26302) 29 👍 · 36 comments | A 2-month-old performance regression on Windows Desktop that still lacks a fix, affecting daily usability for a large user segment. |
| 4 | [**#2142** — Claude Code repeatedly ignores CLAUDE.md security guidelines, exposes API keys](https://github.com/anthropics/claude-code/issues/2142) 10 👍 · 16 comments | Nearly a year old. The assistant systematically fails to honor explicit security instructions in `CLAUDE.md`, leading to leaked credentials in version control. Critical for enterprise adoption. |
| 5 | [**#39841** — Opus 1M context requires extra usage despite "included" documentation](https://github.com/anthropics/claude-code/issues/39841) 9 👍 · 17 comments | Clear mismatch between marketing docs and actual billing behavior on the Max 5x plan. Erodes trust in pricing transparency. |
| 6 | [**#32544** — Extra Usage charged despite available plan capacity + false rate limits](https://github.com/anthropics/claude-code/issues/32544) 11 👍 · 11 comments | Another billing-related complaint — users are being throttled and charged extra even when their plan should cover usage. |
| 7 | [**#51218** — Prompt cache expires mid-session, causing massive token spikes](https://github.com/anthropics/claude-code/issues/51218) 3 comments | Highlights a cost-optimization failure: if the cache TTL is too short, long sessions experience sudden token explosions on the next prompt. |
| 8 | [**#51740** — [REGRESSION] OAuth MCP servers broken — additional headersHelper removed](https://github.com/anthropics/claude-code/issues/51740) 2 comments | A regression in 2.1.116 that breaks OAuth-authenticated MCP servers by stripping custom header injection. Directly impacts enterprise MCP integrations. |
| 9 | [**#51736** — Custom MCP server tools not discovered after update to 2.1.116](https://github.com/anthropics/claude-code/issues/51736) 1 comment | Likely a direct consequence of the deferred `resources/templates/list` optimization in today's release. MCP tools silently fail to load. |
| 10 | [**#51568** — Extended Thinking causes 7–8 minute stalls with silent token consumption](https://github.com/anthropics/claude-code/issues/51568) 2 comments | Extended Thinking mode appears to hang for minutes while consuming tokens in the background — a worst-case combination of UX freeze and cost drain. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [**#41611** — Add missing source to Claude Code](https://github.com/anthropics/claude-code/pull/41611) | Open since March 31. Aims to add a missing source reference. Minimal community engagement; awaiting maintainer review. |
| 2 | [**#51452** — Update README.md](https://github.com/anthropics/claude-code/pull/51452) | Rewrites the README to remove AI-generated filler language, simplify installation instructions, and fix a broken npm badge. |
| 3 | [**#51451** — Revise security policy and reporting guidelines](https://github.com/anthropics/claude-code/pull/51451) | Restructures `SECURITY.md` to enforce HackerOne-only vulnerability reporting and clarifies out-of-scope items. |

> **Note**: Only 4 PRs were updated in the last 24 hours, and none appear to be from Anthropic maintainers. Community contribution throughput remains low.

---

## 5. Feature Request Trends

Based on issue labels and community discussion patterns:

1. **Zellij terminal multiplexer support** ([#24122](https://github.com/anthropics/claude-code/issues/24122), 79 👍) — Agent Teams currently supports tmux and iTerm2 for split-pane mode; Zellij is the most-requested addition.
2. **Better cost visibility and billing controls** — Multiple issues ([#41930](https://github.com/anthropics/claude-code/issues/41930), [#39841](https://github.com/anthropics/claude-code/issues/39841), [#32544](https://github.com/anthropics/claude-code/issues/32544), [#51218](https://github.com/anthropics/claude-code/issues/51218)) converge on the need for real-time token usage dashboards, cache TTL controls, and transparent billing breakdowns.
3. **ARM64/Windows on ARM support** — Snapdragon X users are unable to use Cowork VMs ([#39636](https://github.com/anthropics/claude-code/issues/39636), [#50674](https://github.com/anthropics/claude-code/issues/50674)), signaling growing demand for ARM-native support.
4. **MCP reliability and OAuth hardening** — A cluster of MCP-related bugs ([#51740](https://github.com/anthropics/claude-code/issues/51740), [#51716](https://github.com/anthropics/claude-code/issues/51716), [#51713](https://github.com/anthropics/claude-code/issues/51713), [#51736](https://github.com/anthropics/claude-code/issues/51736)) suggests the MCP layer needs stabilization, especially around auth flows and tool discovery.

---

## 6. Developer Pain Points

1. **Billing opacity is the #1 frustration.** The convergence of abnormal drain reports, phantom extra-usage charges, and misleading "included with subscription" documentation has created a trust deficit. Users are asking for a formal Anthropic response that has not materialized.

2. **MCP is fragile and regressing.** Today's v2.1.116 release appears to have broken MCP tool discovery ([#51736](https://github.com/anthropics/claude-code/issues/51736)) and OAuth header injection ([#51740](https://github.com/anthropics/claude-code/issues/51740)). Combined with the silent failure mode (servers show as "connected" but tools are unavailable), MCP is becoming a reliability liability for teams building on the platform.

3. **CLAUDE.md security instructions are unreliable.** Issue [#2142](https://github.com/anthropics/claude-code/issues/2142) — nearly a year old — documents the assistant's tendency to ignore explicit security guidelines and commit sensitive credentials. This remains a blocker for regulated or security-conscious teams.

4. **Windows is a second-class platform.** Persistent UI lag ([#26302](https://github.com/anthropics/claude-code/issues/26302)), process lock failures ([#42776](https://github.com/anthropics/claude-code/issues/42776)), and VS Code extension disconnects ([#51732](https://github.com/anthropics/claude-code/issues/51732)) suggest Windows QA investment is lagging behind macOS and Linux.

5. **Extended Thinking is a cost trap.** The feature can stall for minutes while silently consuming tokens ([#51568](https://github.com/anthropics/claude-code/issues/51568)), and prompt cache expiration mid-session causes sudden token spikes ([#51218](https://github.com/anthropics/claude-code/issues/51218)). Users need a way to set hard cost caps or receive real-time consumption alerts.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-22

## 1. Today's Highlights
The OpenAI Codex team is undergoing a massive architectural overhaul, with six rapid-succession Rust alpha releases (v0.123.0-alpha.2 through alpha.7) pushed in the last 24 hours. Alongside release stabilization, core development is heavily focused on enterprise-grade features, introducing new systems for sticky environments, rollout tracing, lifecycle hooks, and unified authentication providers. Meanwhile, the community remains highly active around desktop app performance issues and persistent Windows/WSL compatibility bugs.

## 2. Releases
Six alpha versions of the Rust core were released in rapid succession, indicating aggressive iteration and testing for the upcoming `v0.123.0` stable release:
*   **rust-v0.123.0-alpha.7** (and alpha.2 through alpha.6)
    *   *Summary:* Rapid patch cycle for the core Rust engine. While specific release notes were sparse in the data, these iterations align with merging the new rollout tracing, environment management, and auth provider PRs currently in the review pipeline.

## 3. Hot Issues

1. **[OPEN] [bug, rate-limits] Burning tokens very fast** ([#14593](https://github.com/openai/codex/issues/14593))
   * *Why it matters:* This is the most active bug today (555 comments, 234 thumbs-up). Enterprise/Business users are experiencing rapid, unexpected token consumption, directly impacting billing and usability. 
2. **[OPEN] [enhancement, app] Remote Development in Codex Desktop App** ([#10450](https://github.com/openai/codex/issues/10450))
   * *Why it matters:* A highly requested feature (580 👍) highlighting a major feature gap—the inability to use the Desktop App seamlessly with remote SSH/development containers as VS Code does.
3. **[OPEN] [bug, windows-os, TUI, regression] Typing on the CLI since 0.100 is very slow** ([#11678](https://github.com/openai/codex/issues/11678))
   * *Why it matters:* A severe regression for Windows CLI users causing unbearably slow TUI input lag.
4. **[OPEN] [bug, windows-os, app, terminal] Codex App on Windows references Windows-hosted config.toml inside WSL** ([#13549](https://github.com/openai/codex/issues/13549))
   * *Why it matters:* Windows/WSL integration remains broken. Users expecting a native Linux experience find their environment hijacked by Windows host configurations.
5. **[OPEN] [bug, context] Unable to compact the context in a VERY long running session** ([#10823](https://github.com/openai/codex/issues/10823))
   * *Why it matters:* Long-running daemon sessions are failing to compact context during high-demand periods, breaking continuous automated workflows.
6. **[OPEN] [bug, app] [critical] xhigh cpu usage forever by just open/reopen app forever** ([#18463](https://github.com/openai/codex/issues/18463))
   * *Why it matters:* The desktop app spawns render processes that pin the CPU at >100% indefinitely, making the app unusable for many.
7. **[OPEN] [bug, skills] macOS packaging error: SkyComputerUseClient crashes on macOS 14.x** ([#18755](https://github.com/openai/codex/issues/18755))
   * *Why it matters:* Codex computer-use skills are built for macOS 15.0+, causing instant crashes for users on macOS 14.x (12 👍).
8. **[CLOSED] [bug, app, session] Codex Sessions 61GB ??????** ([#18849](https://github.com/openai/codex/issues/18849))
   * *Why it matters:* Users are discovering that local session caches are ballooning to massive sizes (e.g., 61GB) over a few months, causing severe disk exhaustion.
9. **[CLOSED] [bug, model-behavior, tool-calls] Codex still writes literal "\n" into git commit messages** ([#18853](https://github.com/openai/codex/issues/18853))
   * *Why it matters:* A persistent model-behavior issue where the model outputs escaped characters instead of actual newlines during git operations.
10. **[OPEN] [bug, mcp] MCP child processes leak when McpConnectionManager is replaced** ([#18881](https://github.com/openai/codex/issues/18881))
    * *Why it matters:* Long-running unattended daemons are leaking orphaned MCP server processes (hundreds over 15 hours), which eventually crashes the host machine.

## 4. Key PR Progress

1. **[OPEN] Wire selected environments into tools** ([PR #18899](https://github.com/openai/codex/pull/18899))
   * *Description:* Part of a 3-part stack to route `apply_patch`, `unified exec`, and `view_image` through user-defined, sticky environments.
2. **[OPEN] Load named environments from config** ([PR #18898](https://github.com/openai/codex/pull/18898))
   * *Description:* Enables parsing of named environments directly from `config.toml`, wiring them into the CLI, TUI, and app-server startup routines.
3. **[OPEN] refactor: route Codex auth through AuthProvider** ([PR #18811](https://github.com/openai/codex/pull/18811))
   * *Description:* A crucial architectural shift moving auth from direct bearer-token handling to a shared `AuthProvider` trait, clearing the path for enterprise identity providers (like Entra).
4. **[OPEN] Support MCP tools in hooks** ([PR #18385](https://github.com/openai/codex/pull/18385))
   * *Description:* Upgrades lifecycle hooks from being Bash-only to supporting `PreToolUse` and `PostToolUse` for any MCP tool.
5. **[OPEN] fix(tui): reflow backlog on terminal resize** ([PR #18575](https://github.com/openai/codex/pull/18575))
   * *Description:* A massive UI fix resolving 6 major scrollback/resize bugs (e.g., #5538, #12223) by ensuring terminal outputs reflow correctly when the viewport width changes.
6. **[OPEN] Reserve missing preserved paths in Linux sandbox policy** ([PR #18446](https://github.com/openai/codex/pull/18446))
   * *Description:* Hardens the Linux sandbox by explicitly reserving `.codex`, `.git`, and `.agents` paths to prevent sandboxed code from overwriting session configurations.
7. **[OPEN] [rollout_trace] Record core session rollout traces** ([PR #18877](https://github.com/openai/codex/pull/18877))
   * *Description:* Introduces a new `codex-rollout-trace` crate to record model requests/responses and session boundaries, enabling exact replay and debugging of agent actions.
8. **[OPEN] codex: support hooks in config.toml and requirements.toml** ([PR #18893](https://github.com/openai/codex/pull/18893))
   * *Description:* Allows enterprise admins to ship lifecycle hook policies directly via managed `requirements.toml` rather than separate JSON payloads.
9. **[OPEN] /plugins: add marketplace install flow** ([PR #18704](https://github.com/openai/codex/pull/18704))
   * *Description:* Introduces the UI and backend flow for users to add and install custom plugin marketplaces directly from the app.
10. **[OPEN] refactor: add agent identity crate** ([PR #18871](https://github.com/openai/codex/pull/18871))
    * *Description:* Extracts agent assertion construction, task registration, and private-key signing into an isolated `codex-agent-identity` crate for better modularity.

## 5. Feature Request Trends
* **Remote & Container Development:** Strong demand (Issue #10450) for the Desktop App to support remote contexts (SSH, Docker, DevContainers) just like standard VS Code.
* **Enterprise Identity Integrations:** Continued requests for native Entra (Azure AD) authentication support (Issue #1056).
* **UI/UX Visibility:** Users want the Desktop App file explorer to display dotfiles (e.g., `.agents`, `.codex`) and allow folder-level mentions in the `@` search prompt (Issues #18299, #18297).

## 6. Developer Pain Points
* **Windows / WSL Stability:** Windows users feel like second-class citizens. The native app is plagued by sandbox permission errors (Issue #18861), typing lag in the CLI (Issue #11678), and broken WSL context isolation (Issue #13549).
* **Resource Exhaustion:** Unoptimized session storage is causing massive disk usage (Issue #18849 - 61GB sessions), and the Mac/Windows Desktop apps suffer from severe CPU/RAM leaks (Issue #18463, Issue #17257).
* **MCP Lifecycle Management:** Developers running long, automated agent sessions are constantly battling MCP child process leaks (Issue #18881) and losing connection to their MCP tools over time (Issue #15508).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the community digest for the Gemini CLI project on 2026-04-22.

## 1. Today's Highlights
The Gemini CLI community is actively focused on improving Windows interoperability and shell execution stability, alongside internal architectural enhancements to agent behaviors and memory systems. Key recent activities include significant performance optimizations for CLI boot times and infrastructure upgrades to default E2E testing to the faster Flash Preview model. 

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
1. **Windows Shell Configuration Bottleneck** ([#15493](https://github.com/google-gemini/gemini-cli/issues/15493)): Users are frustrated by the hardcoded fallback to PowerShell 5.1 on Windows, which causes severe encoding issues (GBK/mojibake). There is strong community consensus (9 👍) to make the default shell environment configurable (e.g., pwsh, bash, nu).
2. **AST-Aware Codebase Mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): An internal epic investigating AST-aware file reading and search. Maintainers note this could drastically reduce token noise and misaligned reads by precisely targeting method bounds rather than doing brute-force line reads.
3. **Permission Persistence Failures** ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)): A recurring security annoyance where the CLI repeatedly asks for file permissions despite the user selecting "allow for all future sessions."
4. **Agent Memory Routing Logic** ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819)): A highly requested architectural feature (2 👍) to give agents contextual awareness of where to save memories—separating global user preferences (`~/.gemini/`) from project-specific configs (`.gemini/`).
5. **UI Unresponsiveness ("Enter does nothing")** ([#23297](https://github.com/google-gemini/gemini-cli/issues/23297)): A widespread usability bug where the prompt gets stuck and requires a shell restart to resolve (5 👍).
6. **Infinite Loops from Tool Limit Exceedance** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)): The CLI fails with a 400 Bad Request error when tool counts exceed the API maximum (>128). Agents currently lack the logic to scope down enabled tools dynamically.
7. **Subagent Approval Mode Blindness** ([#23582](https://github.com/google-gemini/gemini-cli/issues/23582)): Subagents are repeatedly attempting blocked actions because they lack awareness of global approval modes (like Plan Mode), wasting turns and hitting policy walls.
8. **Agent Tendency to Create Litter** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)): When restricted to shell commands, the model tends to generate temporary edit scripts in random directories, creating significant workspace overhead.
9. **SSH Terminal Corruption** ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)): Text scrambling and broken UI elements when launching the CLI over SSH, highlighting the need for better headless/remote environment detection ([#24546](https://github.com/google-gemini/gemini-cli/issues/24546)).
10. **Generalist Subagent Limits** ([#25768](https://github.com/google-gemini/gemini-cli/issues/25768)): A request to bump the `maxTurns` and `maxTimeMinutes` for the generalist subagent, as the current limits (20 turns / 10 mins) are too restrictive for complex multi-step operations.

## 4. Key PR Progress
1. **Asynchronous Boot Optimization** ([PR #25758](https://github.com/google-gemini/gemini-cli/pull/25758)): A major performance fix that refactors the initialization sequence to fetch experiments and quotas asynchronously, eliminating a major bottleneck in CLI startup times.
2. **Windows Shell Interoperability** ([PR #25769](https://github.com/google-gemini/gemini-cli/pull/25769)): A community contribution adding cross-platform translation for `&&`, `||`, and `/dev/null`, ensuring these Unix paradigms finally work seamlessly in CMD and older PowerShell environments.
3. **E2E Testing Default Shift** ([PR #25753](https://github.com/google-gemini/gemini-cli/pull/25753)): Changes the default test rig model from `gemini-3-pro-preview` to `gemini-3-flash-preview` to reduce CI latency and save Pro-tier quotas on PR checks.
4. **Strict Tool Response Mapping** ([PR #25765](https://github.com/google-gemini/gemini-cli/pull/25765)): Resolves the infamous 400 API errors by enforcing a strict 1:1 part count mapping between tool calls and function responses, specifically addressing multimodal tool payloads.
5. **Hard Cap on Tool Loops** ([PR #25764](https://github.com/google-gemini/gemini-cli/pull/25764)): Prevents the model from entering an infinite loop when using "thinking" tools by adding a hard cap on consecutive same-name tool calls.
6. **Enhanced Policy Engine for Shells** ([PR #25720](https://github.com/google-gemini/gemini-cli/pull/25720)): Introduces recursive checking for sub-commands/subshells and adds a `tools.core` setting to allow high-precision allowlisting of core tools.
7. **Dynamic Vertex AI Region Support** ([PR #25362](https://github.com/google-gemini/gemini-cli/pull/25362)): Resolves regional 404 errors for preview models (like `gemini-3.1-pro-preview`) by allowing users to override the default `us-central1` region via a new `vertexLocation` config setting.
8. **Memory Initialization in ACP** ([PR #25626](https://github.com/google-gemini/gemini-cli/pull/25626)): Fixes a behavioral discrepancy where `experimental.autoMemory` was not being triggered during Agent-to-Client Protocol (ACP) sessions.
9. **CI Bundling Revival** ([PR #25426](https://github.com/google-gemini/gemini-cli/pull/25426)): A massive infrastructure update enabling artifact-centric CI and 16-core test parallelization to speed up PR validation times significantly.
10. **Telemetry Payload Truncation** ([PR #25344](https://github.com/google-gemini/gemini-cli/pull/25344)): Implements bounded structural truncation for telemetry to prevent OOM errors and resolves metric write failures caused by high-cardinality labels.

## 5. Feature Request Trends
*   **Advanced Codebase Context:** The community is pushing for deeper codebase understanding beyond raw text parsing, heavily featuring requests for AST-aware tools, precise method boundary detection, and intelligent codebase mapping.
*   **Cross-Platform Shell Parity:** Windows users are actively requesting equal footing, specifically the ability to configure default shells and ensure Unix-style terminal chaining/fallbacks translate properly to PowerShell and CMD.
*   **Persistent Context & Memory Routing:** There is a strong trend toward improving the agent's memory capabilities, particularly regarding teaching agents *when* to save memories ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809)) and *where* to route them (global vs. project scope).
*   **Subagent Autonomy & Safety:** Users and maintainers are requesting more refined controls for subagents, including better turn limits, awareness of destructive commands (e.g., preventing automatic `git reset --force`), and self-awareness of approval mode boundaries.

## 6. Developer Pain Points
*   **Session State Hangs:** Frequent UI dead-states where the CLI gets stuck on "Awaiting user input" after a command completes, or ignores user inputs completely, requiring manual shell restarts.
*   **UI/Terminal Rendering Bugs:** Friction for developers using SSH, tmux, or screen readers. Streaming tables render incrementally causing broken layouts, and background colors break true-color support in tmux ([PR #25339](https://github.com/google-gemini/gemini-cli/pull/25339)).
*   **Repetitive Permission Prompts:** The CLI frequently forgets "allow" rules between sessions or for identical files, requiring users to manually approve actions they've already whitelisted.
*   **Aggressive Token/API Limits:** Developers with large, multi-tool setups frequently encounter 400 errors when tool counts exceed 128, and standard subagent tasks frequently hit the 10-minute/20-turn ceiling before completion.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-22

## 1. Today's Highlights

A flurry of new pre-releases landed in the `v1.0.35` line, headlined by **HTTP hook support** for outbound JSON payloads and a **`continueOnAutoMode`** config to gracefully degrade models on rate-limit instead of halting. Meanwhile, the community was rocked by multiple reports that **Claude Opus models** suddenly returned "model not supported" errors for Copilot Pro subscribers, dominating the day's issue activity.

---

## 2. Releases

### v1.0.35-2
- **Added:** `continueOnAutoMode` config option — automatically switches to auto model on rate limit instead of pausing execution.
- **Fixed:** Auto mode no longer errors when switching to a model that doesn't support the configured reasoning effort; pattern-specific instruction files handling improved.

### v1.0.35-1
- Pre-release tagged `1.0.35-1` (no detailed changelog).

### v1.0.35-0
- **Added:** HTTP hook support — hooks can now POST JSON payloads to a configured URL instead of running a local command.
- **Improved:** `grep` and `glob` tools accept multiple search paths.
- **Fixed:** Subagent thinking hidden from timeline; custom agent name restored in statusline.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#2873 — Opus models pulled from Copilot Pro?](https://github.com/github/copilot-cli/issues/2873) | Multiple users report all Opus variants stopped working today for Pro subscribers. High urgency — could be a licensing/quota change or backend outage. 👍 0, 4 comments. |
| 2 | [#2661 — "Model not supported" for Opus 4.5](https://github.com/github/copilot-cli/issues/2661) | Pre-dates today but still active; student-pack users losing Opus 4.5 access. 6 comments, signals a systemic model-availability issue. |
| 3 | [#2867 — Opus 4.6 (high) returns "not supported" after quota wait](https://github.com/github/copilot-cli/issues/2867) | User followed CLI quota-reset prompt, then hit 400 error — suggests a bug in the quota→availability handshake. |
| 4 | [#2870 — Auto mode failure due to reasoning level mismatch](https://github.com/github/copilot-cli/issues/2870) | Directly relevant to today's `v1.0.35-2` fix; Haiku 4.5 doesn't support `reasoning_effort` parameter from Sonnet 4.6 config. Already closed — likely fixed by the new release. |
| 5 | [#2625 — Poor rendering performance on long conversations](https://github.com/github/copilot-cli/issues/2625) | Terminal hangs for 30-45s as context grows; clearing conversation fixes it. 4 comments, 👍 3. A top UX blocker for power users. |
| 6 | [#223 — Fine-grained token "Copilot Requests" permission missing for org-owned tokens](https://github.com/github/copilot-cli/issues/223) | Enterprise-critical: orgs can't use service-account PATs for Copilot automations. 21 comments, 👍 65. Long-running request. |
| 7 | [#1276 — Paste images from clipboard into CLI](https://github.com/github/copilot-cli/issues/1276) | 10 comments; would unlock screenshot-driven workflows natively in the terminal. Strong community demand. |
| 8 | [#222 — ACP (Agent Client Protocol) support](https://github.com/github/copilot-cli/issues/222) | 25 comments, 👍 146 — the highest-upvoted issue in today's set. ACP would standardize IDE/editor integration as "LSP for AI agents." Closed but clearly still influential. |
| 9 | [#2753 — Plugin skills not injected into agent system prompt](https://github.com/github/copilot-cli/issues/2753) | Marketplace plugins appear in `/skills` UI but aren't passed to the agent's `<available_skills>`. Effectively breaks third-party plugin usage. |
| 10 | [#2882 — MCP Sampling always declined in non-interactive mode](https://github.com/github/copilot-cli/issues/2882) | `--allow-all` doesn't permit MCP sampling in `-p` mode; blocks CI/CD and automation pipelines that rely on MCP servers. |

---

## 4. Key PR Progress

Only **one PR** was updated in the last 24 hours:

| PR | Title | Details |
|----|-------|---------|
| [#2800](https://github.com/github/copilot-cli/pull/2800) | Add initial devcontainer configuration | Opened 2026-04-17 by `qwfcw79ryj-alt`. Adds a devcontainer setup to simplify contributor onboarding. No comments yet; 👍 0. Early-stage but valuable for reducing friction for community contributors. |

> **Note:** With only a single PR updated today, the engineering focus appears to be on shipping the `v1.0.35` release line rather than merging external contributions.

---

## 5. Feature Request Trends

Several clear themes emerge from today's issue stream:

1. **Broader & stable model availability** — The dominant request is predictable access to Opus-tier models without sudden removal or confusing quota errors. Users want transparency on model rotation/availability policies.
2. **Hooks & automation extensibility** — Requests for user-level hooks ([#2875](https://github.com/github/copilot-cli/issues/2875)), HTTP hooks (shipped in v1.0.35-0), and non-interactive MCP sampling ([#2882](https://github.com/github/copilot-cli/issues/2882)) all point to users embedding Copilot CLI into larger automated workflows.
3. **Context & memory management** — Speculative context/checkpointing ([#2720](https://github.com/github/copilot-cli/issues/2720)), diff display improvements ([#2884](https://github.com/github/copilot-cli/issues/2884)), and rendering perf ([#2625](https://github.com/github/copilot-cli/issues/2625)) reflect growing pains as conversation lengths increase.
4. **Multimodal input** — Clipboard image pasting ([#1276](https://github.com/github/copilot-cli/issues/1276)) remains a top ask for visual debugging workflows.
5. **Enterprise permissions & governance** — Fine-grained PAT permissions ([#223](https://github.com/github/copilot-cli/issues/223)) and org-level configuration are blockers for enterprise adoption.
6. **Terminal UX polish** — Shell completions ([#334](https://github.com/github/copilot-cli/issues/334)), custom color themes ([#2830](https://github.com/github/copilot-cli/issues/2830)), and in-CLI feedback ([#1849](https://github.com/github/copilot-cli/issues/1849)) aim to bring CLI UX closer to IDE parity.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Sudden model removal / opaque model availability** | [#2873](https://github.com/github/copilot-cli/issues/2873), [#2661](https://github.com/github/copilot-cli/issues/2661), [#2867](https://github.com/github/copilot-cli/issues/2867), [#2878](https://github.com/github/copilot-cli/issues/2878) | Workflows break without warning; trust eroded especially for Pro subscribers paying for premium model access. |
| **Reasoning effort incompatibility across models** | [#2870](https://github.com/github/copilot-cli/issues/2870) | Auto mode falls over when switching from a model supporting `reasoning_effort` to one that doesn't. Partially addressed in v1.0.35-2. |
| **Terminal performance degradation over time** | [#2625](https://github.com/github/copilot-cli/issues/2625) | Long conversations cause 30-45s hangs; forces users to clear context, losing important history. |
| **Plugin skills not wired to agent** | [#2753](https://github.com/github/copilot-cli/issues/2753) | Marketplace plugins install visually but are invisible to the agent — a silent failure that frustrates extension developers. |
| **Non-interactive mode limitations** | [#2882](https://github.com/github/copilot-cli/issues/2882), [#2885](https://github.com/github/copilot-cli/issues/2885) | `--allow-all` doesn't cover MCP sampling in `-p` mode; `/ask` still prompts for follow-up in single-turn contexts. Blocks CI/headless usage. |
| **Enterprise token auth gaps** | [#223](https://github.com/github/copilot-cli/issues/223) | Org-owned fine-grained PATs can't grant Copilot permissions, forcing teams to use personal tokens — a compliance non-starter. |

---

*Data sourced from `github.com/github/copilot-cli` on 2026-04-22. Issue and PR counts reflect activity within the last 24 hours.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-22

## 1. Today's Highlights
The Kimi Code CLI community saw a surge of activity focused on platform stability and UX polish. Critical bugs were reported regarding terminal hangs on exit and OAuth authentication failures in subagent workflows, both of which already have corresponding community PRs submitted for review. Additionally, there is a clear and growing demand for deeper IDE and ecosystem integrations, with new feature requests ranging from voice input support to advanced terminal theming and remote control capabilities.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
1. **[#1984 Terminal hang on exit and MCP connection leak](https://github.com/MoonshotAI/kimi-cli/issues/1984)**: A critical UX bug where long sessions cause the terminal to freeze on `/exit`, leaving orphaned MCP connections. Quickly gained a linked PR (#1985) proposing a fix via non-blocking TTY reads.
2. **[#1983 Subagents fail with HTTP 401 using OAuth](https://github.com/MoonshotAI/kimi-cli/issues/1983)**: Root agents authenticated via OAuth work fine, but spawned subagents fail with invalid API key errors. A major blocker for agentic workflows.
3. **[#1925 Kimi K2.5 vs K2.6](https://github.com/MoonshotAI/kimi-cli/issues/1925)**: Users are actively requesting the ability to downgrade to the K2.5 model, citing that K2.6's "over-thinking" suppresses creativity and increases hallucinations. (6 comments)
4. **[#1975 Anthropic provider violates API spec](https://github.com/MoonshotAI/kimi-cli/issues/1975)**: A deep-dive structural bug where `kosong` splits parallel `tool_result` blocks into multiple user messages, breaking Anthropic API compliance. 
5. **[#1560 VS Code KimiCode skill interaction](https://github.com/MoonshotAI/kimi-cli/issues/1560)**: Highly requested (👍 3) enhancement to prevent VS Code from auto-submitting prompts immediately after selecting a skill via `Tab`, requesting parity with the CLI behavior.
6. **[#640 CLI stuck in file-reading loop](https://github.com/MoonshotAI/kimi-cli/issues/640)**: A persistent older bug where the tool reads the same file repeatedly, suggesting context window or agentic looping issues. (5 comments)
7. **[#1974 Undo command lands 4 turns earlier](https://github.com/MoonshotAI/kimi-cli/issues/1974)**: The `/undo` command is miscalculating session state, reverting much further back than the user expects.
8. **[#1967 JetBrains ACP initialization failure](https://github.com/MoonshotAI/kimi-cli/issues/1967)**: Users leveraging the CLI within JetBrains IDEs are experiencing "Failed to initialize ACP process" errors when invoking from historical sessions.
9. **[#1969 WinError 17 on Windows installation](https://github.com/MoonshotAI/kimi-cli/issues/1969)**: An OS-specific bug where Windows Python fails during `os.replace()` for atomic file writes.
10. **[#1934 Voice Input Mode Request](https://github.com/MoonshotAI/kimi-cli/issues/1934)**: A popular feature request asking for hands-free audio-to-text interaction, similar to competitor tools.

## 4. Key PR Progress
1. **[#1985 Fix TTY hang and MCP shutdown](https://github.com/MoonshotAI/kimi-cli/pull/1985)**: Directly addresses Issue #1984 by implementing non-blocking `os.read()` in the TTY cursor positioning and ensuring graceful MCP connection termination during the shutdown sequence.
2. **[#1978 Fix Anthropic parallel tool_results](https://github.com/MoonshotAI/kimi-cli/pull/1978)**: Resolves the API spec violation (#1975) by merging consecutive parallel `tool_result` blocks into a single user message before transmission.
3. **[#1979 Fix approval cancellation feedback](https://github.com/MoonshotAI/kimi-cli/pull/1979)**: Resolves a UX annoyance where timing out on an approval prompt misleadingly displayed "Rejected by user" instead of indicating a cancellation/timeout.
4. **[#1784 AWS Bedrock Mantle platform support](https://github.com/MoonshotAI/kimi-cli/pull/1784)**: Introduces AWS Bedrock as a first-class platform in the `/login` flow with dynamic region-based URL construction.
5. **[#1972 Visual context progress bar](https://github.com/MoonshotAI/kimi-cli/pull/1972)**: Replaces the plain-text context percentage with a color-coded Unicode block progress bar to improve UI visibility.
6. **[#1960 RalphFlow architecture](https://github.com/MoonshotAI/kimi-cli/pull/1960)**: Introduces an automated iteration framework utilizing ephemeral contexts and convergence detection to prevent infinite agent loops.
7. **[#1957 Fix list_sessions ACP bug](https://github.com/MoonshotAI/kimi-cli/pull/1957)**: Fixes an ACP protocol bug where omitting the `cwd` argument returned an empty list, breaking session history in third-party editors like Zed.
8. **[#1935 & [#1963 PreToolUse hook updates](https://github.com/MoonshotAI/kimi-cli/pull/1935)**: Two separate PRs introducing `updatedInput` for `PreToolUse` hooks, enabling external CLI proxies (like `rtk`) to modify tool arguments on the fly for token optimization.
9. **[#1236 Enable trust_env for aiohttp](https://github.com/MoonshotAI/kimi-cli/pull/1236)**: Allows the HTTP client to respect system proxy environments, a crucial fix for enterprise users behind corporate firewalls.
10. **[#1600 Highlight user input in shell](https://github.com/MoonshotAI/kimi-cli/pull/1600)**: Improves terminal UX by applying bright blue highlighting and separator lines to user inputs for better chat readability.

## 5. Feature Request Trends
*   **Model Context & Indexing Control:** Users want granular control over what the AI sees, specifically requesting the ability to index `vendor` directories (#1962) and overall remote control capabilities (#1964).
*   **Advanced UI Customization:** A strong push for aesthetic and accessibility flexibility, highlighted by requests for custom color themes (#1981, #1982) to match popular terminal palettes (Catppuccin, Nord, etc.).
*   **Agentic Autonomy Management:** Requests to fine-tune YOLO mode, specifically asking for flags that prevent the AI from auto-dismissing `AskUserQuestion` tool calls so users can maintain absolute oversight (#1966).

## 6. Developer Pain Points
*   **Cross-Platform Instability:** A disproportionate number of recent issues stem from Windows and WSL2 environments. Users are experiencing terminal rendering bugs in `tmux` (#1965), atomic write errors during installation (#1969), and outright login incompatibilities (#1961).
*   **Authentication & Proxy Fragility:** Network configurations remain a major hurdle. Users behind TUN modes or proxies face 401 errors (#1971), and OAuth token passing currently breaks in multi-agent setups (#1983).
*   **IDE Extension Friction:** Integrations are clunky outside the native terminal. JetBrains users are plagued by ACP initialization failures (#1967), and VS Code users are frustrated by missing prompt workflows (#1560) and key-binding conflicts (#1968).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-22

## 1. Today's Highlights

OpenCode shipped **v1.14.20**, a focused patch release addressing three critical regressions: a system theme rendering bug in the TUI, broken local dynamic imports on Windows/Node affecting plugin loading, and misdirected permission replies in remote workspaces. The release also introduces a new experimental `GET /config` HTTP API endpoint. Meanwhile, the core engineering team (led by contributor **kitlangton**) is executing a major **Zod → Effect Schema migration** across the session domain, with 8+ stacked PRs opened and several already merged.

---

## 2. Releases

### v1.14.20
- **TUI System Theme Fix**: Restored proper theme rendering after a regression broke the "System" theme's ability to inherit terminal default colors.
- **Experimental HTTP API**: Added `GET /config` endpoint for programmatic config access.
- **Windows/Node Plugin Loading**: Fixed local dynamic imports on Windows running under Node, resolving plugin and tool loading failures.
- **Remote Workspace Permissions**: Fixed permission replies being sent to the wrong workspace when using remote workspaces.

---

## 3. Hot Issues

1. **[#13768](https://github.com/anomalyco/opencode/issues/13768) — Opus 4.6 "assistant message prefill" error** *(60 comments, 23 👍)*
   The most-discussed issue in this cycle. Users of GitHub Copilot paired with Opus 4.6 hit frequent `"This model does not support assistant message prefill"` errors, halting conversations mid-session. High comment volume reflects widespread impact across the community.

2. **[#7101](https://github.com/anomalyco/opencode/issues/7101) — Custom system prompts at global/project/custom directory levels** *(33 comments, 89 👍)*
   The highest-upvoted issue in the digest. Users want configurable system prompt hierarchy (global → project → custom), sparked by community discussion on prompt optimization. Strong signal for the feature roadmap.

3. **[#13984](https://github.com/anomalyco/opencode/issues/13984) — Clipboard copy/paste broken in CLI** *(30 comments, 10 👍)*
   A basic UX regression: "copied to clipboard" toast appears but paste produces nothing. Affects daily workflow significantly, explaining the high engagement.

4. **[#14194](https://github.com/anomalyco/opencode/issues/14194) — SQLite database corruption with shared config across local + Docker** *(16 comments, 8 👍)*
   Running concurrent sessions locally and in Docker with shared `~/.local/share/opencode/` directories corrupts the SQLite database. A real concern for containerized workflows.

5. **[#23196](https://github.com/anomalyco/opencode/issues/23196) — OSC 11 detection broken on macOS; dark theme never loads** *(16 comments, 7 👍)*
   Since April 17, all themes render their light variant regardless of terminal background. Rooted in a double color normalization bug (see related PR #22615 below).

6. **[#22408](https://github.com/anomalyco/opencode/issues/22408) — Kimi K2.6 integration request** *(18 comments, 18 👍)*
   Community request to add Moonshot's Kimi K2.6 and K2.6-code-preview models. Closed after discussion, indicating either acceptance or deferral.

7. **[#17516](https://github.com/anomalyco/opencode/issues/17516) — `opencode run` hangs after tool completion** *(13 comments, 6 👍)*
   The `run` subcommand never exits after the model finishes its work, requiring manual process kills. Affects CI/CD and scripted workflows.

8. **[#23599](https://github.com/anomalyco/opencode/issues/23599) — System theme regression (closed)** *(8 comments, 13 👍)*
   The "System" theme stopped passing through terminal colors. Now closed, likely addressed by the v1.14.20 patch.

9. **[#23658](https://github.com/anomalyco/opencode/issues/23658) — Terminal background turns white after 1.14.19 upgrade** *(5 comments, 7 👍)*
   Users on Ghostty/macOS saw white backgrounds after upgrading. Downgrading to 1.14.18 fixed it, confirming a regression in that version.

10. **[#23704](https://github.com/anomalyco/opencode/issues/23704) — OpenRouter xAI/Grok tool schemas rejected** *(4 comments)*
    xAI models via OpenRouter reject tool schemas containing `additionalProperties: false`. A compatibility issue in schema emission that blocks Grok users from tool calling.

---

## 4. Key PR Progress

1. **[#23757](https://github.com/anomalyco/opencode/pull/23757) — Migrate MessageV2 DTOs (User/Assistant/Part/Info) to Effect Schema** *(kitlangton)*
   Fourth slice of the session-domain schema migration. Converts the core message discriminated unions from Zod to Effect Schema with full `.zod` compatibility.

2. **[#23756](https://github.com/anomalyco/opencode/pull/23756) — Migrate MessageV2 part leaves + ToolPart to Effect Schema** *(kitlangton)*
   Third slice: migrates all 13 part leaf schemas (TextPart, ReasoningPart, FileSource, etc.) to Effect Schema. Enables future type-safe transformations.

3. **[#23755](https://github.com/anomalyco/opencode/pull/23755) — Fix: preserve thinking/redacted_thinking blocks in Anthropic transforms** *(bbartels)*
   Fixes a critical Anthropic API error where `thinking` blocks in the latest assistant message caused failures. Directly related to the broader prefill issue (#13768).

4. **[#23754](https://github.com/anomalyco/opencode/pull/23754) — Derive all schema.ts leaves' .zod via effect-zod walker** *(kitlangton)*
   Replaces all remaining hand-written `z.custom<T>()` wrappers across the codebase with auto-derived schemas. Eliminates a large class of drift bugs.

5. **[#23753](https://github.com/anomalyco/opencode/pull/23753) [MERGED] — Derive provider schema .zod via effect-zod walker** *(kitlangton)*
   ProviderID and ModelID schemas now derive from canonical Effect Schema. Closes the gap between runtime validation and type definitions.

6. **[#23752](https://github.com/anomalyco/opencode/pull/23752) [MERGED] — Migrate MessageV2 tool state schemas to Effect Schema** *(kitlangton)*
   Converts ToolStatePending, ToolStateRunning, ToolStateCompleted, and ToolStateError unions. Foundation for the message DTO migration above.

7. **[#14463](https://github.com/anomalyco/opencode/pull/14463) [CLOSED] — Replace csharp-ls with roslyn-language-server** *(jmbryan4)*
   Replaces the community-maintained C# LSP with Microsoft's official Roslyn-based server. Directly implements feature request #14462 (13 comments, 8 👍).

8. **[#23743](https://github.com/anomalyco/opencode/pull/23743) — Fix workspace.create timeout race on Windows** *(spralle)*
   Fixes a timeout bug where local worktree workspaces on Windows always failed with "Timed out waiting for global event." Two race conditions identified and fixed.

9. **[#18584](https://github.com/anomalyco/opencode/pull/18584) [MERGED] — Fix `--prompt` auto-submit race condition** *(venables)*
   The `--prompt` flag stopped working in v1.2.25 after a refactor moved prompt state initialization. This fix resolves the race and restores scripted usage.

10. **[#18767](https://github.com/anomalyco/opencode/pull/18767) — Mobile touch optimization for desktop app** *(noahbentusi)*
    Adds touch event handling and mobile-specific UI adaptations. An open, longer-running effort to make the desktop app viable on tablets and touchscreens.

---

## 5. Feature Request Trends

- **Custom system prompt hierarchy** (#7101, 89 👍) — The most upvoted direction. Users want layered prompt configuration (global → project → custom), with support for shortened/specialized prompts per context.
- **Broader model support** (#22408 Kimi K2.6, #19479 Mistral Small reasoning, #23704 Grok schema compat) — Consistent demand for new frontier model integrations and compatibility fixes for non-OpenAI/Anthropic providers.
- **Advanced LSP choices** (#14462 Roslyn for C#) — Users want opt-in alternatives to community-maintained LSPs, preferring official vendor implementations.
- **Global permission configuration for custom tools** (#4881) — Plugin authors need a way to set tool permissions globally rather than per-session.
- **Configurable TUI layout** (#6087 sidebar width) — Requests for more terminal-size adaptiveness in the TUI layout.

---

## 6. Developer Pain Points

- **Theme/terminal detection regressions are recurring** — Three separate issues (#23196, #23599, #23658) and a v1.14.20 patch release all address the same class of problem: broken OSC 11 detection and light/dark theme rendering. The `getTerminalBackgroundColor()` double-normalization bug (#22615) appears to be the common root cause. This area needs more robust cross-platform testing.
- **Windows/WSL stability remains fragile** — Plugin loading failures on Windows/Node, WSL2 crashes requiring full reinstalls (#23708), agent loading failures (#20510), and workspace timeout races (#23743) collectively signal that Windows is a second-class platform. The v1.14.20 import fix is a start but not comprehensive.
- **`opencode run` non-interactive mode is unreliable** — The hanging process issue (#17516) and the recently-fixed `--prompt` race (#18584) together undermine CI/CD and scripted usage, which is a critical use case for developer tool adoption.
- **Model provider compatibility fragmentation** — Azure OpenAI endpoint migration (#7180), xAI schema rejection (#23704), Anthropic prefill errors (#13768), and thinking-block handling (#23755) all reflect a pattern where each provider's API quirks cause breakages. The ongoing Effect Schema migration should help, but provider-specific edge cases remain a long-tail problem.
- **Database concurrency under shared storage** — SQLite corruption with shared config directories (#14194) affects Docker-heavy workflows. Users running parallel sessions need either a concurrency-safe storage backend or explicit locking documentation.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-22

## 1. Today's Highlights
A new **v0.15.0-preview.1** release kicks off the next release cycle, introducing complete ACP hooks support and compact mode UX enhancements. Community contributors submitted a massive wave of pull requests targeting performance (offloading file indexing to worker threads, API preconnects) and multi-model support (adding ZhipuAI/GLM web search). Meanwhile, a cluster of 401 authentication errors dominated issue reports, signaling a potential systemic pain point in the VS Code extension's login flow.

## 2. Releases
**[v0.15.0-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.0-preview.1)**
- **ACP Hooks:** Complete hooks support for Agent Communication Protocol integration ([PR #3248](https://github.com/QwenLM/qwen-code/pull/3248)).
- **Compact Mode UX:** Optimized shortcuts, settings sync, and safety features ([PR #3100](https://github.com/QwenLM/qwen-code/pull/3100)).
- **HTTP Hooks:** Initial addition of HTTP hooks (summary truncated).

## 3. Hot Issues
1. **[Issue #3496](https://github.com/QwenLM/qwen-code/issues/3496) [OPEN]**: Users request compatibility with Chinese domestic search APIs (ZhipuAI/GLM, ByteDance) for the `webSearch` feature since free quotas expired. Driven 5 comments in one day.
2. **[Issue #3501](https://github.com/QwenLM/qwen-code/issues/3501) [OPEN]**: Persistent `401 invalid access token` error after successful login. Part of a widespread authentication breakdown affecting multiple users today.
3. **[Issue #2427](https://github.com/QwenLM/qwen-code/issues/2427) [CLOSED]**: Highly vocal feature request (+1 👍) asking for in-CLI API key setup instead of navigating cumbersome `settings.json` documentation, explicitly requesting an OpenCode-style built-in provider list.
4. **[Issue #2409](https://github.com/QwenLM/qwen-code/issues/2409) [CLOSED]**: Request to bring Qwen Code's subagent system to feature parity with Claude Code. Highlights that Qwen currently covers only ~40-45% of advanced subagent capabilities.
5. **[Issue #3464](https://github.com/QwenLM/qwen-code/issues/3464) [OPEN]**: Reports of severe performance degradation ("降智") and tool-call failures when using third-party models like GLM-5/5.1 compared to Qwen's native models. 
6. **[Issue #3483](https://github.com/QwenLM/qwen-code/issues/3483) [CLOSED]**: VS Code extension fails to authenticate and crashes the background CLI process (SIGTERM) on startup due to 401 errors.
7. **[Issue #3447](https://github.com/QwenLM/qwen-code/issues/3447) [OPEN]**: Context window fails to auto-compress when full during long-running tasks, causing lag and forcing users to manually start new sessions.
8. **[Issue #3470](https://github.com/QwenLM/qwen-code/issues/3470) [CLOSED]**: MCP OAuth authorization URLs break when wrapped across multiple lines in the terminal, making them un-clickable.
9. **[Issue #2134](https://github.com/QwenLM/qwen-code/issues/2134) [CLOSED]**: Request for the VS Code extension to support all CLI authentication methods (Coding Plan, API Key) instead of relying solely on basic Qwen OAuth.
10. **[Issue #3274](https://github.com/QwenLM/qwen-code/issues/3274) [CLOSED]**: The `/auth` command is unrecognized in the CLI, blocking users from adding third-party provider keys (e.g., OpenRouter).

## 4. Key PR Progress
1. **[PR #3502](https://github.com/QwenLM/qwen-code/pull/3502) [OPEN]**: Adds ZhipuAI (GLM) as a new web search provider, directly answering the community's call for better domestic Chinese API support.
2. **[PR #3455](https://github.com/QwenLM/qwen-code/pull/3455) [OPEN]**: Moves the `@`-picker file crawl and fzf indexing to `worker_threads`, preventing the CLI from freezing in 100k+ file monorepos.
3. **[PR #3398](https://github.com/QwenLM/qwen-code/pull/3398) [CLOSED]**: Replaces the deprecated OAuth flow in the VS Code extension with a native QuickPick setup for API Keys and Coding Plans.
4. **[PR #3471](https://github.com/QwenLM/qwen-code/pull/3471) [OPEN]**: Implements parent-agent control over subagents, allowing mid-flight messages, reading live transcripts, and `task_stop` commands.
5. **[PR #3505](https://github.com/QwenLM/qwen-code/pull/3505) [OPEN]**: Rejects truncated subagent `write_file` calls caused by max token limits, preventing half-generated files from being written to disk.
6. **[PR #3494](https://github.com/QwenLM/qwen-code/pull/3494) [OPEN]**: Introduces a Python SDK package, supporting async/sync queries and process transport.
7. **[PR #3318](https://github.com/QwenLM/qwen-code/pull/3318) [OPEN]**: Adds an API preconnect (fire-and-forget HEAD request) at startup to warm TCP+TLS, saving ~100-200ms on the first interaction.
8. **[PR #3080](https://github.com/QwenLM/qwen-code/pull/3080) [CLOSED]**: Implements persistent retry mode for unattended CI/CD pipelines, automatically handling HTTP 429/529 capacity errors.
9. **[PR #3214](https://github.com/QwenLM/qwen-code/pull/3214) [OPEN]**: Replaces the slow `fdir` crawler with `git ls-files` + `ripgrep` fallback for massive performance gains in file autocomplete.
10. **[PR #3499](https://github.com/QwenLM/qwen-code/pull/3499) [CLOSED]**: Fixes an API Error 400 bug where streaming responses with empty text bodies sent `null` instead of an empty string to the provider.

## 5. Feature Request Trends
- **Authentication & Onboarding UX:** A massive demand for streamlining the first-mile experience. Users want CLI-based interactive setups (`/auth`), built-in model provider lists, and API key input without editing JSON files manually.
- **Subagent & Agentic Capabilities:** Parity with frontier agents (like Claude Code). Developers want better background task management, real-time token consumption tracking, and two-way communication with running subagents.
- **Third-Party Model & Tooling Support:** High interest in decoupling Qwen Code from strictly Alibaba/Qwen APIs. Strong requests for better integration with OpenRouter, GLM, and domestic search providers.
- **Session & Context Management:** Better handling of long-running tasks, including auto-compression of bursting context windows, native commands to clear history (`/history clear`), and sticky TODO panels.

## 6. Developer Pain Points
- **Authentication Instability:** The most glaring issue today is a flood of `401 invalid access token` errors across both CLI and VS Code extensions. Even after successful logins or reinstalls, users are persistently blocked.
- **Third-Party Model Degradation:** When utilizing non-Qwen models (like GLM-5 via custom endpoints), developers experience broken tool calls and "dumbed-down" reasoning, suggesting system prompts or routing needs better optimization for third parties.
- **Context Window Mismanagement:** Context auto-compression is failing for long tasks, leading to degraded performance, lag, and a frustrating manual reset process for users working on complex, multi-hour coding tasks.

</details>