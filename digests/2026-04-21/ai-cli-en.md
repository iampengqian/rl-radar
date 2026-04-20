# AI CLI Tools Community Digest 2026-04-21

> Generated: 2026-04-20 22:12 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Cross-Tool Report — 2026-04-21

## 1. Ecosystem Overview
The AI CLI tooling landscape is experiencing a rapid maturation phase, shifting from foundational code generation to complex, multi-agent workflows and deep IDE integrations. Tools are converging on core competencies—such as robust context management, autonomous file editing, and sandboxed execution—while differentiating themselves through provider ecosystems and target user bases. However, the ecosystem is currently strained by growing pains: developers are increasingly frustrated by unpredictable rate limiting, token consumption opacity, and significant platform instability, particularly on Windows and WSL. As these tools transition from experimental developer utilities to production-grade infrastructure, managing enterprise constraints (proxies, auth, security) and ensuring cross-platform reliability have emerged as the primary battlegrounds for adoption.

## 2. Activity Comparison
Activity across the ecosystem remains high, though release cadences and community engagement models vary significantly. OpenAI Codex and Kimi CLI are currently iterating the fastest on core architecture, while Anthropic's Claude Code is experiencing intense community pressure over unreleased fixes.

| Tool | Issues Noted Today | PRs Noted Today | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ (Massive traction: #42796 has 2,003 👍) | 4 (No official Anthropic PRs) | **No releases** (Last: v2.1.114) |
| **OpenAI Codex** | 10 | 10 (Major internal refactors) | **Released rust-v0.122.0** (Standalone installs, `/side` conversations) |
| **Gemini CLI** | 10 | 10 (Focus on core architecture) | **No releases** |
| **GitHub Copilot CLI**| 10 | 0 | **Released v1.0.33 & v1.0.34** (Remote session inheritance, rate limit UI fixes) |
| **Kimi Code CLI** | 10 | 10 (Enterprise/ACP focus) | **Released v1.37.0** (Dynamic model lists, CRLF fixes) |
| **OpenCode** | 10 (Regression cluster around themes) | 10 (Extensive provider integrations) | **Released v1.14.19** (Critical startup & data-loss fixes) |
| **Qwen Code** | 10 | 10 (ACP and auth migrations) | **Nightly release** (ACP hooks, compact mode UX) |

## 3. Shared Feature Directions
Communities across the ecosystem are driving tool maintainers toward a unified set of advanced capabilities required for production workflows:

*   **Advanced Context & Memory Management:**
    *   *Claude Code, OpenAI Codex, Gemini CLI, Qwen Code:* Context compaction is universally painful. Users demand selective compaction to preserve recent code diffs over older conversation history. Global vs. project-level memory routing is a heavily requested feature.
*   **Sub-agent Reliability & Orchestration:**
    *   *Claude Code, Kimi Code CLI, Gemini CLI, Qwen Code:* Multi-agent workflows are breaking due to infinite read loops and subagents failing to inherit core system rules. There is a widespread demand for deterministic guardrails, convergence detection, and hook events (e.g., `OnAgentSpawn`) to enforce rules across spawned agents.
*   **Windows & WSL Parity:**
    *   *OpenAI Codex, GitHub Copilot CLI, Kimi Code CLI, OpenCode:* Windows remains a second-class citizen across the ecosystem. Silent crashes, CRLF file corruption, and WSL path/sandbox friction are critical blockers for enterprise adoption.
*   **TUI / Terminal UX Refinements:**
    *   *GitHub Copilot CLI, Gemini CLI, Qwen Code, OpenCode:* As tools adopt complex rendering (Markdown, AST elements), terminal breakages are rising. Communities demand robust OSC 11 theme detection, CJK/IME input support, and copy/paste reliability.

## 4. Differentiation Analysis
While features converge, underlying philosophies and target demographics diverge:

*   **Claude Code** is uniquely positioned as a pure-play high-complexity coding agent. Its differentiation lies in deep workspace analysis, but it is currently suffering under the weight of a massive user backlash regarding model degradation and opaque Max subscription usage limits.
*   **OpenAI Codex** is heavily focused on architectural purity and enterprise readiness. The current massive `PermissionProfile` migration indicates a focus on creating bulletproof, standardized sandboxing for large-scale corporate deployment.
*   **GitHub Copilot CLI** leverages its native GitHub monopoly to focus on seamless remote workflows (`--remote` session inheritance) and CI/CD integrations, though it suffers from internal friction regarding model parity (hiding "Extra High" reasoning levels) and enterprise auth bugs.
*   **Gemini CLI** is pushing the technical boundaries of local-first agentic systems, actively developing AST-aware codebase mapping and direct local model integrations (`gemini gemma`), aiming for highly optimized, low-token-noise operations.
*   **Kimi Code CLI** & **Qwen Code** are rapidly capturing the open-weight/API-flexible market. They are currently hyper-focused on standardizing Agent Communication Protocol (ACP) integrations to ensure editor parity (VS Code, JetBrains) and urgently migrating away from deprecated OAuth free tiers toward API-key-based access.
*   **OpenCode** serves as the universal adapter. Its differentiation is extreme provider flexibility (supporting Open WebUI, Kiro, NVIDIA NIM, Claude), appealing to power users who want a single TUI interface for multi-model failover.

## 5. Community Momentum & Maturity
*   **High Momentum, High Friction (Claude Code):** The community is intensely active but highly frustrated. The record-breaking 2,000+ 👍 on a single issue regarding model quality indicates a tool that scaled its user base faster than its infrastructure and QA could support.
*   **Mature, Steady Iteration (OpenAI Codex, GitHub Copilot CLI):** These tools show steady, methodical progress (e.g., refactoring 512K+ source files, 7-PR merge stacks). The communities are focused on practical feature requests like `/undo` and plan-mode workflows.
*   **Rapid Growth & Agility (Kimi Code CLI, Qwen Code, OpenCode):** These communities are shipping features and critical bug fixes at breakneck speed (multiple PRs merging daily). They are actively building out enterprise telemetry, session management, and multi-provider support to challenge incumbents.
*   **Deep Technical Exploration (Gemini CLI):** The momentum here is less about UI flash and more about hardcore systems engineering (context managers, terminal signal forwarding, AST parsing), targeting highly technical early adopters.

## 6. Trend Signals (Strategic Insights)
1.  **The "Tax" of Agentic Loops:** Infinite loop bugs (reading the same file repeatedly) are burning through user credits across all tools. *Developer takeaways:* Build hard iteration caps and convergence detection into agentic frameworks. Expect providers to start offering "loop protection" guarantees to assuage cost anxiety.
2.  **The Battle for Sandbox Control:** Tools are tightening network and file system sandboxes (e.g., OpenAI's `PermissionProfile`, Claude's `OPERON_SANDBOXED_NETWORK`), which repeatedly break local developer workflows (SSH, Playwright MCP, `gh auth`). *Developer takeaways:* Sandboxes must become context-aware; enterprise developers will demand granular opt-out configurations rather than blanket restrictions.
3.  **Vendor Auth & Usage Opacity is Intolerable:** The most consistent pain point across tools is unpredictable rate limits, sudden credit consumption spikes, and broken usage UI. (e.g., GPT-5.4 Fast mode costing 2x for negligible speed, Copilot displaying negative percentages, Claude burning through session caps). *Developer takeaways:* Tool builders must expose precise, real-time token accounting to maintain the trust of power users.
4.  **Standardization of Editor Integrations (ACP):** The Agent Communication Protocol is rapidly becoming the standard for editor-to-terminal agent communication. *Developer takeaways:* Building first-party ACP support (ensuring hooks, system reminders, and sub-agents work identically in the CLI and the IDE) is now a mandatory requirement for any tool aiming for mainstream adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Analysis Date:** April 21, 2026

*Note: As of the extraction date, the repository metrics show 0 active Pull Requests and 0 open Issues. This indicates that the repository is either newly initialized, currently undergoing a backlog migration, or operating in a gated-submission mode without public open activity. The following sections reflect this current baseline state.*

---

### 1. Top Skills Ranking
There are currently no active or merged Pull Requests with community comments to rank. The repository does not yet have public PR activity to evaluate. As the repository scales and accepts community contributions, this section will feature the most-discussed Skills based on comment volume, code review activity, and merge status.

### 2. Community Demand Trends
There are currently **0 open Issues** in the repository. Because no feature requests, bug reports, or Skill proposals have been publicly logged, distinct community demand trends cannot be extrapolated at this time. Standard anticipated trends for AI coding assistants include workflow automation, automated code review, and contextual test generation, but specific demand for the Claude Code ecosystem remains unlogged in this repository's public Issues.

### 3. High-Potential Pending Skills
There are no pending (open) Pull Requests. There are currently no unmerged PRs with active review cycles or community discussion indicating upcoming, high-potential Skills.

### 4. Skills Ecosystem Insight
Based on the current public repository activity, there is no concentrated community demand captured yet; the official `anthropics/skills` ecosystem is currently in a pre-community-contribution or zero-public-activity state awaiting its first wave of Skill proposals and discussions.

---

## 1. Today's Highlights

A relatively quiet day on the release front with **no new versions shipped in the last 24 hours**, but community activity remains intense. The two dominant themes are persistent frustration over **model quality degradation since February** (issue #42796 now at 2,003 👍, the highest in the repo) and growing complaints about **network sandboxing in Claude Desktop** that blocks LAN SSH connections. Several new bugs filed today also highlight ongoing instability with the Cowork VM feature on Windows ARM64.

---

## 2. Releases

No new releases were published in the last 24 hours. The last observed activity continues around versions **2.1.113–2.1.114** as referenced in recent bug reports.

---

## 3. Hot Issues

1. **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Max plan session limits exhausted abnormally fast (CLI usage). Open since March with **651 comments and 429 👍**. Users report Claude Max subscriptions burning through session caps at an accelerated rate, particularly via the CLI. The `invalid` label suggests Anthropic views this as expected behavior, but the community strongly disagrees. *Why it matters: Directly impacts paying power users' ability to use the tool.*

2. **[#42796](https://github.com/anthropics/claude-code/issues/42796)** — Claude Code unusable for complex engineering tasks since Feb updates. **2,003 👍** (highest in repo), 547 comments. Closed but remains the bellwether issue for model quality regression. *Why it matters: Signals a systemic degradation that Anthropic has acknowledged but the community feels is unresolved.*

3. **[#24055](https://github.com/anthropics/claude-code/issues/24055)** — API Error: response exceeded 32K output token maximum. 121 comments, 82 👍, labeled `has repro` and `oncall`. *Why it matters: Hard ceiling on output length breaks complex refactoring and code generation workflows.*

4. **[#37994](https://github.com/anthropics/claude-code/issues/37994) / [#51313](https://github.com/anthropics/claude-code/issues/51313)** — Claude Desktop update breaks LAN SSH/network access due to `OPERON_SANDBOXED_NETWORK=1`. Two reports (the newer one already closed as duplicate). *Why it matters: A silent policy change that cripples remote development workflows with no opt-out.*

5. **[#33603](https://github.com/anthropics/claude-code/issues/33603)** — CLAUDE.md hard rules and persistent memory instructions consistently ignored, escalating with each session. 16 comments. *Why it matters: Strikes at the core value proposition of configurable agent behavior—users report rules being violated despite repeated reinforcement.*

6. **[#45612](https://github.com/anthropics/claude-code/issues/45612) / [#45622](https://github.com/anthropics/claude-code/issues/45622) / [#51311](https://github.com/anthropics/claude-code/issues/51311)** — Community wants `/buddy` (the "Loamwise" adversarial code reviewer from the April 1–7 rollout) back as a permanent opt-in feature. 18 👍 on the lead issue. *Why it matters: A well-received feature experiment that users found genuinely useful, now removed.*

7. **[#49106](https://github.com/anthropics/claude-code/issues/49106)** — Feature request for `OnAgentSpawn` hook event. Subagents don't inherit `CLAUDE.md` rules, and the model progressively abbreviates manually-prepended instructions. *Why it matters: Critical for multi-agent workflows where consistent instruction-following is required across spawned subagents.*

8. **[#48959](https://github.com/anthropics/claude-code/issues/48959)** — Hypothesis: post-compaction `CLAUDE.md` drift is a positioning problem, not a content preservation problem. A thoughtful analysis arguing the reloaded instructions get buried in context. *Why it matters: Proposes a specific, actionable fix direction for one of the most-reported complaints.*

9. **[#50665](https://github.com/anthropics/claude-code/issues/50665)** — Stop button unresponsive; UI stuck in "working" state even when Claude is idle. *Why it matters: A TUI usability regression that forces users to kill sessions, losing context.*

10. **[#51291](https://github.com/anthropics/claude-code/issues/51291)** — Rate limit error (429) triggers unexpected plan usage consumption on Windows. *Why it matters: Users are being charged for requests that fail due to rate limiting—a cost fairness issue.*

---

## 4. Key PR Progress

| PR | Title | Status | Notes |
|---|---|---|---|
| [#1](https://github.com/anthropics/claude-code/pull/1) | Create SECURITY.md | **CLOSED** | The repo's original PR from Feb 2025; still seeing activity. A foundational housekeeping item. |
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | feat: open source claude code ✨ | Open | Community-submitted PR attempting to open-source the codebase. Closes 5 issues. Unlikely to merge but gauges community desire for transparency. |
| [#50638](https://github.com/anthropics/claude-code/pull/50638) | Fix README images (EU region) | Open | Documentation fix for broken image references. |
| [#50643](https://github.com/anthropics/claude-code/pull/50643) | Ethos Aegis project config/templates | Open | Adds CI/CD workflows, issue templates, and branding configs. Community-driven standardization effort. |

*Note: Only 4 PRs saw updates today. No Anthropic-authored PRs were active in this window, consistent with the absence of new releases.*

---

## 5. Feature Request Trends

- **Context compaction control**: Multiple issues (#48959, #51329) request selective or smarter compaction—users want to preserve recent important context (e.g., a PR diff) over older conversation history. The drift-after-compaction problem is one of the most recurring themes.

- **`/buddy` / adversarial reviewer as permanent feature**: Three separate issues (#45612, #45622, #51311) request the return of the `/buddy` companion ("Loamwise") that was active April 1–7. Users found it genuinely effective as an automated code reviewer.

- **Subagent instruction inheritance**: #49106 proposes an `OnAgentSpawn` hook so developers can inject rules into spawned subagents. The current workaround (manual prepending) is unreliable at scale.

- **Granular sandbox/network controls**: Users want an opt-out for `OPERON_SANDBOXED_NETWORK=1` (#37994, #51313) so LAN SSH workflows remain functional.

---

## 6. Developer Pain Points

1. **Model quality regression** remains the #1 concern. Issue #42796 (2,003 👍) is the most-upvoted issue in the entire repo. Developers report Claude Code is "unusable for complex engineering tasks" post-February, and the closure of that issue has not restored confidence.

2. **Session limit exhaustion** (#38335, 429 👍) continues to frustrate Max plan subscribers who feel their usage caps are being consumed faster than expected with no transparency into accounting.

3. **CLAUDE.md / memory drift** is a structural problem that compounds with every session. Rules are loaded but not reliably followed, and compaction makes it worse. Users are working around it with increasing levels of prompt engineering gymnastics.

4. **Windows ARM64 support is broken** for Cowork VMs (#39636, #45480, #49748, #50942)—Snapdragon X Plus users report zero successful connections across dozens of attempts. This is a growing pain point as ARM laptops gain market share.

5. **Desktop sandbox overreach**—the new `OPERON_SANDBOXED_NETWORK=1` policy silently broke SSH-based remote development with no documented opt-out, eroding trust in update stability.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-21

## 1. Today's Highlights
OpenAI shipped **Codex rust-v0.122.0**, introducing self-contained standalone installs (with native `codex app` desktop integration for Windows and Intel Macs) and new TUI `/side` conversations for inline queries. Meanwhile, a massive internal **PermissionProfile migration** dominated pull request activity, aiming to refactor legacy sandbox policies into a unified canonical abstraction across the CLI, app-server, and exec-server.

## 2. Releases

### rust-v0.122.0
- **Self-contained installs**: Standalone installs are now more isolated; `codex app` correctly opens or installs the Desktop app on Windows and Intel Macs ([#17022](https://github.com/openai/codex/issues/17022), [#18500](https://github.com/openai/codex/issues/18500)).
- **TUI `/side` conversations**: Open quick side-question threads without leaving the current session.
- **Queued input improvements**: Slash commands and `!` shell prompts now work in queued input mode.

### rust-v0.122.0-alpha.13
- Pre-release channel build for 0.122.0.

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|---------------|--------------------|
| 1 | [#13476](https://github.com/openai/codex/issues/13476) — **Excessive approval prompts for Playwright MCP** (regression) | Excessive sandbox approval prompts break MCP-driven automation workflows on Linux. | 39 👍, 29 comments; high-frustration regression. |
| 2 | [#9203](https://github.com/openai/codex/issues/9203) — **Bring back `/undo`** | Users need undo for accidental untracked-file deletions or uncommitted modifications. | 134 👍, 23 comments; top-voted enhancement request. |
| 3 | [#17432](https://github.com/openai/codex/issues/17432) — **Windows npm install fails with missing @openai/codex-win32-x64** | Global npm install on Windows x64 succeeds but CLI refuses to run. | 16 comments; blocks Windows onboarding. |
| 4 | [#13699](https://github.com/openai/codex/issues/13699) — **Codex Windows crashes with WSL config** | WSL mode causes startup crashes on Enterprise accounts. | 16 comments, 9 👍; ongoing WSL pain. |
| 5 | [#10561](https://github.com/openai/codex/issues/10561) — **Plan Mode: "Copy Plan" & "Clear Context before coding"** | Bridges the gap between planning and execution phases. | 14 comments, 30 👍; aligns with competitor workflows. |
| 6 | [#10695](https://github.com/openai/codex/issues/10695) — **GitHub Fix CI skill blocked by sandbox keychain access** | Sandbox isolates `gh auth` and `GH_TOKEN`, breaking the built-in CI skill. | 11 comments, 4 👍; sandbox vs. tooling tension. |
| 7 | [#14339](https://github.com/openai/codex/issues/14339) — **Clear context before implementing plan** (CLOSED) | Similar to #10561; request for post-plan context reset. | 11 comments, 22 👍; likely addressed by recent plan-mode changes. |
| 8 | [#18365](https://github.com/openai/codex/issues/18365) — **WSL `apply_patch` always requests approval** (CLOSED) | Sandbox regression on WSL where patches in writable workspaces still prompt. | 11 comments; recently closed, possibly fixed in v0.122.0. |
| 9 | [#11881](https://github.com/openai/codex/issues/11881) — **GitHub Action connector auth loop** | Codex PR reviewer keeps asking users to create/connect accounts despite connector being enabled. | 10 comments, 21 👍; CI/CD adoption blocker. |
| 10 | [#18692](https://github.com/openai/codex/issues/18692) — **GPT-5.4 Fast mode not faster, but 2× credit cost** | Users report Fast mode provides negligible speedup over Standard while doubling credit consumption. | 3 comments, 1 👍; cost-transparency concern. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#18401](https://github.com/openai/codex/pull/18401) — **Support multiple managed environments** | Refactors `EnvironmentManager` to support keyed environments with local/remote lookup, keeping remote exec-server client creation lazy. |
| 2 | [#18276](https://github.com/openai/codex/pull/18276) → [#18287](https://github.com/openai/codex/pull/18287) — **PermissionProfile migration series** | A 7-PR stack replacing legacy `SandboxPolicy` with canonical `PermissionProfile` across exec-server, app-server, clients, TUI, MCP, and shell-escalation paths. |
| 3 | [#18713](https://github.com/openai/codex/pull/18713) — **Preserve glob scan depth in permission profiles** | Security fix ensuring `glob_scan_max_depth` survives the sandbox-to-profile round-trip (relevant for `**/*.env` deny rules). |
| 4 | [#18446](https://github.com/openai/codex/pull/18446) — **Reserve missing preserved paths in Linux sandbox** | Prevents untracked `.git`/`.agents` directories from being created inside sandboxed execution and bypassing the preserved path set. |
| 5 | [#18027](https://github.com/openai/codex/pull/18027) — **Fail exec client operations after disconnect** | Rejects new operations and converts pending RPCs to closed errors after transport disconnect. |
| 6 | [#18725](https://github.com/openai/codex/pull/18725) — **Reload app-server OTel from thread config** | Fixes [#17110](https://github.com/openai/codex/issues/17110) by reloading OpenTelemetry config after `thread/start` resolves project-scoped settings. |
| 7 | [#18753](https://github.com/openai/codex/pull/18753) — **Refactor TUI app module into submodules** | Splits the 512K+ `app.rs` below CI's source-file cap without changing runtime behavior. |
| 8 | [#18752](https://github.com/openai/codex/pull/18752) — **Extract utility crates from codex-core** | First landable slice extracting `codex-file-watcher` and another utility crate from the monolithic `codex-core`. |
| 9 | [#18746](https://github.com/openai/codex/pull/18746) — **Add Code Review skill** | Centralizes codex code-review rules into a dedicated skill module. |
| 10 | [#18635](https://github.com/openai/codex/pull/18635) — **Add realtime `remain_silent` tool** | Gives the realtime v2 model an explicit non-speaking action for collaboration modes where silence is intended. |

## 5. Feature Request Trends

- **Plan Mode workflow maturity**: Multiple issues (#10561, #14339) request a "clear context and start coding" step after planning, plus copy/export of plans. Users want a cleaner handoff between planning and execution, matching competitor UX patterns.
- **Session history & undo**: The return of `/undo` (#9203, 134 👍) and versioned session action exports (#18469) signal strong demand for reversible, inspectable session histories.
- **TUI polish**: Terminal title support via OSC 0/2 (#18740), scrollback rerender on resize (#5259), and TUI keymap refactoring (#18754) indicate the community wants a more terminal-native experience.
- **Rate-limit transparency**: Several issues (#18692, #18721, #18345) question credit consumption accuracy and speed-tier value, reflecting growing cost awareness among Pro users.

## 6. Developer Pain Points

- **Windows + WSL instability remains the #1 platform pain point**: Issues #17432, #13699, #14461, #18365, and #18506 collectively describe crashes, missing binaries, UNC path breakage, and config leakage between Windows and WSL environments.
- **Sandbox vs. tooling friction**: The tightened sandbox blocks GitHub CLI auth (#10695), triggers excessive approval prompts for MCP tools (#13476), and breaks `apply_patch` on WSL (#18365). Developers want smarter sandbox defaults that don't impede real workflows.
- **Auth & connector confusion**: GitHub Action reviewer auth loops (#11881) and account-connection messages despite enabled connectors erode trust in CI/CD integrations.
- **Token usage regression**: Users report 60%+ token increases after upgrading to v0.121.0 (#18345), raising concerns about implicit prompt changes across versions.
- **Desktop-CLI config divergence**: Settings like `plan_mode_reasoning_effort` work in CLI but are ignored by the Desktop app (#18712), frustrating users who switch between interfaces.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-21

## 1. Today's Highlights
The Gemini CLI ecosystem saw no new releases today, but development activity remains high with significant focus on agent reliability and system prompt optimization. Key architectural advancements include a major refactor of the `ContextManager` and `AgentChatHistory`, alongside new implementations for local model support via the `gemini gemma` command. The community and maintainers are actively addressing critical edge cases, including a dangerous shell command injection vulnerability and terminal UI rendering bugs.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1. **[Fatal Crash on Loop Detection](https://github.com/google-gemini/gemini-cli/issues/20106) (#20106)**
   *Why it matters:* The CLI experiences a hard crash (`AbortError`) when the LLM generates repetitive content triggering the `LoopDetectionService`. This critical bug affects both interactive and headless modes, completely halting workflows. *(9 comments)*
2. **[AST-Aware Codebase Mapping Investigation](https://github.com/google-gemini/gemini-cli/issues/22745) (#22745)**
   *Why it matters:* Maintainers are evaluating AST-aware file operations. Moving from string-matching to AST-aware reads and searches would drastically reduce token noise and prevent misaligned file edits, representing a major leap in agent accuracy. *(5 comments)*
3. **[Repetitive Permission Prompts](https://github.com/google-gemini/gemini-cli/issues/24916) (#24916)**
   *Why it matters:* The CLI repeatedly asks for file permissions despite users clicking "allow for all future sessions." This persistent friction point disrupts automated and headless workflows. *(3 comments)*
4. **[Shell Execution Hangs "Waiting Input"](https://github.com/google-gemini/gemini-cli/issues/25166) (#25166)**
   *Why it matters:* Simple, non-interactive shell commands frequently hang after completion while the UI shows "Awaiting user input," severely breaking the user experience in automated task chains. *(2 comments, 3 👍)*
5. **[Subagent Falsely Reports Success on MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323) (#22323)**
   *Why it matters:* Subagents hitting their maximum turn limit report their termination status as `GOAL` success, hiding the fact that the task was interrupted and incomplete from the orchestrator. *(2 comments, 2 👍)*
6. **[Agent Creates Tmp Scripts in Random Directories](https://github.com/google-gemini/gemini-cli/issues/23571) (#23571)**
   *Why it matters:* When restricted to shell execution, the model scatters temporary edit scripts across the workspace. This creates a massive cleanup overhead and pollutes git tracking. *(2 comments)*
7. **[Browser Agent Ignores settings.json Overrides](https://github.com/google-gemini/gemini-cli/issues/22267) (#22267)**
   *Why it matters:* The Browser Agent currently ignores `settings.json` (e.g., `maxTurns`), limiting user control over browser automation loops and resource consumption. *(2 comments)*
8. **[Global vs. Project Memory Routing](https://github.com/google-gemini/gemini-cli/issues/22819) (#22819)**
   *Why it matters:* The agent currently lacks robust routing for persistent memory. Implementing clear boundaries between global user preferences and project-specific instructions is crucial for multi-project developers. *(1 comment, 2 👍)*
9. **[400 Error with > 128 Tools](https://github.com/google-gemini/gemini-cli/issues/24246) (#24246)**
   *Why it matters:* Heavy extension usage pushes the available tool count past the API's limits, causing 400 errors. Smarter dynamic tool scoping is required to prevent this. 
10. **[Screen Reader / SSH Text Scrambling](https://github.com/google-gemini/gemini-cli/issues/24202) (#24202)**
    *Why it matters:* Users operating over SSH or relying on screen readers experience scrambled text and broken table layouts during streaming, heavily impacting accessibility and remote usage.

## 4. Key PR Progress

1. **[feat(cli): add streamlined `gemini gemma` local model setup](https://github.com/google-gemini/gemini-cli/pull/25498) (#25498)**
   Introduces a native `gemini gemma` command to easily set up and manage local models via a LiteRT server, including log viewing.
2. **[feat(core): wire up the new ContextManager and AgentChatHistory](https://github.com/google-gemini/gemini-cli/pull/25409) (#25409)**
   A major architectural update replacing legacy context management with a new `ContextManager`, likely yielding better token utilization and context window handling.
3. **[Fix/command injection shell](https://github.com/google-gemini/gemini-cli/pull/24170) (#24170)**
   Patches a critical security vulnerability where shell substitution syntax (`$()`, backticks) in arguments was executed instead of being treated as literal strings.
4. **[fix(core): resolve nested plan directory duplication and relative path policies](https://github.com/google-gemini/gemini-cli/pull/25138) (#25138)**
   Fixes path resolution logic for nested plan files and ensures agents correctly respect custom security policies by utilizing relative paths.
5. **[fix(cli): forward termination signals to relaunched child process](https://github.com/google-gemini/gemini-cli/pull/25642) (#25642)**
   Resolves zombie process issues by ensuring the CLI properly forwards `SIGTERM`, `SIGHUP`, and `SIGINT` to child processes when the parent is killed.
6. **[fix(telemetry): implement bounded structural truncation](https://github.com/google-gemini/gemini-cli/pull/25344) (#25344)**
   Prevents OOM errors and JSON parsing failures in telemetry by implementing bounded structural truncation and resolving high-cardinality label explosions.
7. **[feat: detect new files in @ recommendations with watcher based updates](https://github.com/google-gemini/gemini-cli/pull/25256) (#25256)**
   Improves the `@` file attachment UX by using a file watcher to instantly update suggestions when new files are added to the workspace, bypassing the need for a full recrawl.
8. **[fix(TableRenderer): guard against negative column widths in renderBorder](https://github.com/google-gemini/gemini-cli/pull/25713) (#25713)**
   Fixes a `RangeError` crash that occurred when the terminal was resized to an extremely narrow width.
9. **[chore: apply prompt optimizations](https://github.com/google-gemini/gemini-cli/pull/25710) (#25710)**
   Applies systematic optimizations to system prompts and tool descriptions to reduce token usage and sharpen instruction clarity.
10. **[shell tool rc](https://github.com/google-gemini/gemini-cli/pull/25712) (#25712)**
    Re-introduces support for a `shellToolRcFile` setting and forces `PAGER=cat` to prevent UI hangs from commands trying to open interactive pagers like `less`.

## 5. Feature Request Trends

*   **Proactive Memory Management:** Strong momentum is building around improving agent memory, specifically routing context correctly between global (`~/.gemini/`) and project (`.gemini/`) scopes, and tuning the agent to automatically save user preferences without being asked. 
*   **AST-Aware Code Operations:** A major requested paradigm shift is moving from raw text string manipulation to Abstract Syntax Tree (AST) awareness for reading, searching, and mapping codebases, which would significantly reduce LLM hallucinations.
*   **Local-First Support:** The introduction of the `gemini gemma` workflow highlights a growing demand for seamless, first-party integration of local and on-device models.
*   **Voice Mode:** Real-time voice-to-text dictation is being actively developed, aiming to support both cloud (Gemini Live API) and local (Whisper) backends.

## 6. Developer Pain Points

*   **Stuck Processes and UI Hangs:** Developers frequently experience the CLI hanging during shell execution (waiting for input that isn't coming) or failing to die cleanly when terminated, requiring manual process cleanup.
*   **Prompt and Permission Fatigue:** Persistent issues with the agent repeatedly asking for previously granted permissions, or ignoring global `settings.json` configurations (especially in the Browser Agent).
*   **Messy Workspace Generation:** Users are frustrated by the model's tendency to scatter temporary shell scripts and edit files across random directories when performing complex tasks, making repository hygiene difficult to maintain.
*   **Accessibility & Terminal Compatibility:** Rendering bugs (scrambled text, broken streaming tables) remain a thorn in the side for users accessing the CLI via SSH or utilizing screen readers.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-21

## 1. Today's Highlights
Two new releases (**v1.0.33** and **v1.0.34**) dropped within the last 24 hours, bringing quality-of-life improvements to remote session handling, new slash command aliases, and clearer rate limit messaging. Meanwhile, the community remains highly active around model-related concerns — particularly the hidden "Extra High" reasoning level for GPT-5.x models and inconsistent rate limit/usage percentage displays across sessions.

---

## 2. Releases

### v1.0.34 (2026-04-20)
- Rate limit error message updated to say **"session rate limit"** instead of "global rate limit" — a small but important clarity fix given ongoing confusion about usage reporting.

### v1.0.33 (2026-04-20)
- **Remote session inheritance**: `--resume` or `--continue` now automatically inherits the `--remote` flag without re-specifying it.
- **New slash command aliases**: `/bug`, `/continue`, `/release-notes`, `/export`, `/reset`, and `/upgrade` (alias for `/update`).
- **Fuzzy slash command picker**: Typing an unrecognized or misspelled slash command now suggests similar valid commands.
- **ctrl+t** now toggles the reasoning/thinking display.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#1595](https://github.com/github/copilot-cli/issues/1595)** — Sporadic enterprise policy blocking model retrieval (👍10, 27 comments) | Enterprise users with valid subscriptions are intermittently blocked from listing models via `/models`. After 2 months open, this remains a top enterprise-blocking issue. |
| 2 | **[#2725](https://github.com/github/copilot-cli/issues/2725)** — GPT-5.4 model picker hides "Extra High" effort level (👍19, 24 comments) | The UI shows only Low/Medium/High for GPT-5.4, yet `xhigh` still works at runtime. This inconsistency is generating significant community friction and ties directly to the new `ctrl+t` reasoning toggle feature. |
| 3 | **[#1687](https://github.com/github/copilot-cli/issues/1687)** — Access active CLI sessions from phone (👍34, 3 comments) | The highest-thumbs-up open issue requests remote phone access to running sessions — a natural extension of the just-released `--remote` flag improvements. Strong community demand signal. |
| 4 | **[#1504](https://github.com/github/copilot-cli/issues/1504)** — Custom theme support (👍11, 3 comments) | Users want shareable custom themes (JSON-based), beyond the built-in options. Consistently popular with the community. |
| 5 | **[#1164](https://github.com/github/copilot-cli/issues/1164)** — CLI exits immediately on Windows 11 (👍3, 12 comments) | Nearly 3 months open. Newer versions silently crash on Windows 11 with no output, forcing users onto an outdated version (0.0.3xx). A critical platform compatibility gap. |
| 6 | **[#2739](https://github.com/github/copilot-cli/issues/2739)** — xhigh reasoning removed for GPT-5.4 and GPT-5.3-codex (👍6, 4 comments) | Strongly-worded community pushback on the removal/hiding of xhigh reasoning for premium models. Closely related to #2725. |
| 7 | **[#2839](https://github.com/github/copilot-cli/issues/2839)** — Rate limit display completely off (👍1, 3 comments) | Multiple CLI windows show different percentages (0% vs 33% vs actual ~40% remaining), directly contradicting the v1.0.34 rate limit messaging fix. |
| 8 | **[#2797](https://github.com/github/copilot-cli/issues/2797)** — Random percentage shown after exceeding premium request limit (5 comments, CLOSED) | Usage display goes haywire (including negative values) once the 300-request cap is exceeded. Closed, possibly addressed in recent releases. |
| 9 | **[#2625](https://github.com/github/copilot-cli/issues/2625)** — Poor rendering performance in long sessions (👍3, 3 comments) | Terminal hangs for 30–45 seconds as conversations grow. Clearing the conversation fixes it, pointing to a memory/rendering accumulation bug. |
| 10 | **[#2751](https://github.com/github/copilot-cli/issues/2751)** — `/remote` fails on organization repos (👍3, 1 comment) | `Remote session disabled: could not resolve repository` blocks a key workflow on org-owned repos, undermining the new remote session features in v1.0.33. |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The repository shows **0 PRs** with activity, suggesting the team is currently in a release-testing or planning cycle following the dual v1.0.33/v1.0.34 releases.

---

## 5. Feature Request Trends

1. **Mobile/remote session access** ([#1687](https://github.com/github/copilot-cli/issues/1687), 👍34) — The #1 feature request by community votes. Users want to monitor and interact with long-running CLI sessions from their phones.

2. **Custom/shareable themes** ([#1504](https://github.com/github/copilot-cli/issues/1504), 👍11) — Extending the theming system with user-defined JSON themes and sharing capability.

3. **Azure DevOps support for `/delegate`** ([#1150](https://github.com/github/copilot-cli/issues/1150), 👍11) — Enterprise users want agent delegation to work with ADO repositories, not just GitHub.

4. **IntelliJ IDE integration via `/ide`** ([#1641](https://github.com/github/copilot-cli/issues/1641), 👍2) — Connecting the CLI to JetBrains/IntelliJ IDEs alongside the existing VS Code integration.

5. **Custom agents folder configuration** ([#1506](https://github.com/github/copilot-cli/issues/1506), 👍2) — Parity with VS Code's `chat.agentFilesLocations` setting for organizing custom agents.

6. **ACP model metadata** ([#1262](https://github.com/github/copilot-cli/issues/1262)) — Returning usage multipliers (1x, 0.33x) and enablement info in the `_meta` field for ACP integrations.

---

## 6. Developer Pain Points

- **Rate limit & usage display is unreliable**: Multiple issues ([#2839](https://github.com/github/copilot-cli/issues/2839), [#2797](https://github.com/github/copilot-cli/issues/2797)) report inconsistent, random, or negative percentages. The v1.0.34 messaging rename (session vs global) is a start, but the underlying calculation remains broken across windows and after cap exceedance.

- **Windows platform is a second-class citizen**: The CLI silently crashes on Windows 11 ([#1164](https://github.com/github/copilot-cli/issues/1164)), certificate handling fails ([#1250](https://github.com/github/copilot-cli/issues/1250)), and Tab key behavior is broken in VS Code integrated terminal ([#2856](https://github.com/github/copilot-cli/issues/2856)). These issues collectively span months with limited resolution.

- **Enterprise authentication & policy enforcement is flaky**: Recurring "not authorized" errors ([#1897](https://github.com/github/copilot-cli/issues/1897), [#2306](https://github.com/github/copilot-cli/issues/2306)) and sporadic policy blocking ([#1595](https://github.com/github/copilot-cli/issues/1595)) create unpredictable experiences for paying Enterprise users.

- **Model feature parity between UI and runtime**: The hiding of `xhigh` effort level for GPT-5.x models in the picker ([#2725](https://github.com/github/copilot-cli/issues/2725), [#2739](https://github.com/github/copilot-cli/issues/2739)) while it still works via manual configuration erodes trust in the interface.

- **Context/memory compaction issues**: Empty model responses during compaction ([#2861](https://github.com/github/copilot-cli/issues/2861)) and overly verbose compaction summaries flooding terminals ([#2858](https://github.com/github/copilot-cli/issues/2858)) degrade long-session reliability.

- **MCP server instability**: Web Search tool errors via `github-mcp-server` ([#2692](https://github.com/github/copilot-cli/issues/2692)) and related `CAPIError 400` failures ([#2859](https://github.com/github/copilot-cli/issues/2859), [#2860](https://github.com/github/copilot-cli/issues/2860)) are blocking agent workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-21

## 1. Today's Highlights
Kimi Code CLI officially shipped **v1.37.0**, introducing auto-refreshing managed model lists at startup and improved API display names for OAuth users. The community was highly active, surfacing critical bugs such as infinite subagent loops, CRLF file corruption, and startup crashes triggered by IPv6 proxy configurations. Meanwhile, several feature-rich pull requests—including telemetry integration, MCP config propagation to subagents, and Shift+Enter newline support—signal strong momentum toward enterprise readiness.

## 2. Releases

### v1.37.0 ([PR #1955](https://github.com/MoonshotAI/kimi-cli/pull/1955))
- **Auto-refresh managed models**: OAuth-logged-in users now get up-to-date model lists and display names pulled dynamically from the provider's `/models` endpoint, rather than frozen-at-login static data ([PR #1948](https://github.com/MoonshotAI/kimi-cli/pull/1948)).
- **Background task safety in `--print` mode**: The one-shot print mode now waits for background tasks before exiting (capped by `print_wait_ceiling_s`), and lists each killed task on stderr.
- **Docs**: Clarified quoted TOML keys for dotted model names in configuration ([PR #1870](https://github.com/MoonshotAI/kimi-cli/pull/1870)).

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [**#1924** — API temperature bug: "only 0.6 allowed" even for 0.6](https://github.com/MoonshotAI/kimi-cli/issues/1924) | A server-side API validation bug rejects all `temperature` values—including the supposedly correct 0.6—breaking third-party SDK and curl usage. 4 comments confirm broad reproducibility. |
| 2 | [**#1927** — Subagent infinite loop / repeatedly reads same file](https://github.com/MoonshotAI/kimi-cli/issues/1927) | The subagent enters an unbounded loop reading the same file hundreds of times, wasting tokens and time. Mirrored by [#1950](https://github.com/MoonshotAI/kimi-cli/issues/1950), indicating a systemic agentic control-flow issue. |
| 3 | [**#1959** — Crash on startup: IPv6 CIDR in `NO_PROXY` triggers httpx error](https://github.com/MoonshotAI/kimi-cli/issues/1959) | Corporate networks with IPv6 entries in `NO_PROXY` cause an immediate crash with `Invalid port: ':'`. Blocks adoption in enterprise environments. |
| 4 | [**#1952** — CRLF corruption during `StrReplaceFile`](https://github.com/MoonshotAI/kimi-cli/issues/1952) | Editing files with Windows-style CRLF line endings silently injects broken line endings. A PR fix is already in flight ([PR #1953](https://github.com/MoonshotAI/kimi-cli/pull/1953)). |
| 5 | [**#1956** — ACP session history not replayed for Zed/JetBrains](https://github.com/MoonshotAI/kimi-cli/issues/1956) | All Agent-Client-Protocol integrations start from a blank context, making session persistence useless for editor-based workflows. |
| 6 | [**#1596** — AGENTS.md instructions ignored (low priority compliance)](https://github.com/MoonshotAI/kimi-cli/issues/1596) | The agent ignores project-level `AGENTS.md` constraints and follows user prompts instead, undermining trust in rule-based customization. Closed with discussion but highlights a model-behavior gap. |
| 7 | [**#1949** — `ImportError` from local `typing_extensions.py` shadowing](https://github.com/MoonshotAI/kimi-cli/issues/1949) | If the project root contains a file named `typing_extensions.py`, Kimi CLI crashes on import. A fix is proposed in [PR #1951](https://github.com/MoonshotAI/kimi-cli/pull/1951). |
| 8 | [**#1946** — Pasted text sent as `[Pasted X chars]` literal](https://github.com/MoonshotAI/kimi-cli/issues/1946) | Long pasted content is forwarded to the model as a placeholder string rather than actual text, silently degrading task quality. |
| 9 | [**#1873** — Cannot install without administrator rights on Windows](https://github.com/MoonshotAI/kimi-cli/issues/1873) | Newer versions require admin privileges that locked-down enterprise machines don't have, a regression from earlier versions. |
| 10 | [**#1944** — Feature Request: PowerShell 7 support on Windows](https://github.com/MoonshotAI/kimi-cli/issues/1944) | Shell tool hardcodes PowerShell 5.1; users of modern `pwsh.exe` cannot leverage cross-platform PowerShell 7 features. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [**#1955** — `chore(release): bump to 1.37.0`](https://github.com/MoonshotAI/kimi-cli/pull/1955) | **Merged.** The official v1.37.0 release PR bundling all recent fixes and features. |
| 2 | [**#1948** — `feat(auth): auto-refresh managed models`](https://github.com/MoonshotAI/kimi-cli/pull/1948) | **Merged.** OAuth users now get live model lists and display names at startup via background refresh. |
| 3 | [**#1802** — `fix(soul): keep agent loop alive during background tasks`](https://github.com/MoonshotAI/kimi-cli/pull/1802) | **Merged.** Prevents the agent loop from exiting prematurely when background tasks are still running, avoiding silent kills. |
| 4 | [**#1943** — `feat(shell): support Shift+Enter for newline`](https://github.com/MoonshotAI/kimi-cli/pull/1943) | **Merged.** Adds xterm and kitty keyboard protocol support for Shift+Enter, complementing existing Ctrl+J. |
| 5 | [**#1953** — `fix(file): preserve CRLF during file edits`](https://github.com/MoonshotAI/kimi-cli/pull/1953) | Open. Directly addresses [Issue #1952](https://github.com/MoonshotAI/kimi-cli/issues/1952) by preserving original line endings in `StrReplaceFile`. |
| 6 | [**#1957** — `fix(acp): list_sessions without cwd returns all sessions`](https://github.com/MoonshotAI/kimi-cli/pull/1957) | Open. Fixes ACP session enumeration so editor integrations (Zed, JetBrains) can properly retrieve history. |
| 7 | [**#1951** — `fix(web): guard web imports from cwd module shadowing`](https://github.com/MoonshotAI/kimi-cli/pull/1951) | Open. Resolves [Issue #1949](https://github.com/MoonshotAI/kimi-cli/issues/1949) by isolating imports from user project files. |
| 8 | [**#1942** — `fix(mcp): propagate MCP configs to subagents and resume`](https://github.com/MoonshotAI/kimi-cli/pull/1942) | Open. Fixes two issues: subagents not receiving MCP tool configs and resumed sessions missing MCP state. |
| 9 | [**#1798** — `feat(telemetry): integrate telemetry across interactive and non-interactive modes`](https://github.com/MoonshotAI/kimi-cli/pull/1798) | Open. Adds comprehensive telemetry tracking for better product analytics and debugging. |
| 10 | [**#1935** — `feat(hooks): updatedInput for transparent command rewriting`](https://github.com/MoonshotAI/kimi-cli/pull/1935) | Open. Enables PreToolUse hooks to rewrite commands transparently via `hookSpecificOutput.updatedInput`, aligning with hooks Beta docs. |

## 5. Feature Request Trends

1. **Better editor/IDE integration (ACP parity):** Multiple issues ([#1956](https://github.com/MoonshotAI/kimi-cli/issues/1956), [#1947](https://github.com/MoonshotAI/kimi-cli/issues/1947)) request seamless session history and model support in VS Code, Cursor, Zed, and JetBrains via ACP.
2. **Non-interactive / CI-friendly UX:** [Issue #1954](https://github.com/MoonshotAI/kimi-cli/issues/1954) calls for clearer error messages on unknown models and a `list configured models` command for scripting workflows.
3. **Windows enterprise compatibility:** Admin-less installation ([#1873](https://github.com/MoonshotAI/kimi-cli/issues/1873)) and PowerShell 7 support ([#1944](https://github.com/MoonshotAI/kimi-cli/issues/1944)) are recurring asks from corporate users.
4. **Agent reliability / loop prevention:** Infinite subagent loops ([#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927), [#1950](https://github.com/MoonshotAI/kimi-cli/issues/1950)) and AGENTS.md compliance ([#1596](https://github.com/MoonshotAI/kimi-cli/issues/1596)) highlight demand for deterministic guardrails in autonomous workflows.
5. **Rich input handling:** Pasted text not being sent correctly ([#1946](https://github.com/MoonshotAI/kimi-cli/issues/1946)) and image/file re-sending bugs ([#1945](https://github.com/MoonshotAI/kimi-cli/issues/1945)) indicate the community wants robust multimodal input.

## 6. Developer Pain Points

- **Token waste from runaway loops:** The infinite-read bug ([#1927](https://github.com/MoonshotAI/kimi-cli/issues/1927)) can burn significant API credits before users notice. Users are requesting a hard iteration cap or convergence detection—partially addressed by community PR [#1960](https://github.com/MoonshotAI/kimi-cli/pull/1960) (RalphFlow architecture).
- **Fragile startup on constrained environments:** IPv6 proxy parsing crashes ([#1959](https://github.com/MoonshotAI/kimi-cli/issues/1959)), local module shadowing ([#1949](https://github.com/MoonshotAI/kimi-cli/issues/1949)), and admin-privilege regressions ([#1873](https://github.com/MoonshotAI/kimi-cli/issues/1873)) collectively make onboarding fragile, especially in corporate settings.
- **Silent data integrity issues:** CRLF corruption ([#1952](https://github.com/MoonshotAI/kimi-cli/issues/1952)) and paste-placeholder substitution ([#1946](https://github.com/MoonshotAI/kimi-cli/issues/1946)) produce incorrect results without clear errors, eroding trust in automated edits.
- **Inconsistent ACP/editor experience:** Session history gaps ([#1956](https://github.com/MoonshotAI/kimi-cli/issues/1956)) and model incompatibilities ([#1947](https://github.com/MoonshotAI/kimi-cli/issues/1947)) make editor-based workflows feel second-class compared to the terminal UX.
- **API-level regression (temperature validation):** [Issue #1924](https://github.com/MoonshotAI/kimi-cli/issues/1924) is particularly concerning because it affects all API consumers (not just CLI users) and has lingered for days, suggesting server-side validation logic needs urgent attention.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-21

---

## 1. Today's Highlights

OpenCode shipped **v1.14.19**, a targeted stability release that resolves a critical circular-dependency crash at binary startup and fixes a data-loss bug where concurrent file edits could overwrite each other. The **dark theme / OSC 11 detection regression** continues to dominate community attention across macOS terminals (Ghostty, Alacritty), with multiple interconnected issues now tracking the problem. Meanwhile, the contributor pipeline is active: new provider integrations (Kiro, Open WebUI) and several long-standing TUI rendering fixes advanced today.

---

## 2. Releases

### [v1.14.19](https://github.com/anomalyco/opencode/releases/tag/v1.14.19)

| Change | Impact |
|--------|--------|
| **Fixed circular session schema dependency** that caused compiled binaries to fail on startup | 🔴 Critical — prevents silent crash-on-launch |
| **Renamed compaction setting** to `preserve_recent_tokens` (budget keeping recent turns verbatim) | Yellow — config migration may be needed |
| **Preserved concurrent edits to the same file** instead of letting parallel edits clobber each other | 🔴 Critical — data integrity fix |

---

## 3. Hot Issues

1. **[#13984](https://github.com/anomalyco/opencode/issues/13984) — Copy/paste broken in CLI** *(29 comments, 10 👍)*
   A long-standing frustration: clipboard shows "copied" but `Ctrl+V` pastes nothing. Affects daily workflow heavily; still open since Feb 2026.

2. **[#4031](https://github.com/anomalyco/opencode/issues/4031) — Python SDK request** *(31 comments)*
   The oldest active issue in today's list (Nov 2025). Community clearly wants a first-party Python SDK / Dev API package for ≥1.0.39.

3. **[#20926](https://github.com/anomalyco/opencode/issues/20926) — System theme not respected (macOS Ghostty)** *(15 comments, 6 👍)*
   Light theme always activates regardless of system dark mode. Closed but related to a broader regression tree.

4. **[#23110](https://github.com/anomalyco/opencode/issues/23110) — Regression: no providers load from project config (Bedrock)** *(14 comments, 4 👍)*
   v1.4.7+ breaks project-level provider configs; downgrading to v1.4.6 is the only workaround. Blocks AWS Bedrock users entirely.

5. **[#23196](https://github.com/anomalyco/opencode/issues/23196) — OSC 11 detection broken, themes always render light** *(11 comments, 3 👍)*
   Broader duplicate of #20926 affecting all macOS terminals. Confirms the theme regression is systemic, not terminal-specific.

6. **[#23521](https://github.com/anomalyco/opencode/issues/23521) — Default dark mode failed after recent update** *(4 comments, 10 👍)*
   Fresh report from today with strong upvotes. Dark system + dark terminal → OpenCode forces light theme.

7. **[#16685](https://github.com/anomalyco/opencode/issues/16685) — "Provider returned error" with Kimi K2.5 on Windows** *(10 comments, 3 👍)*
   Consistent failures with Kimi K2.5 via OpenCode Go on Windows. Provider compatibility gap.

8. **[#23211](https://github.com/anomalyco/opencode/issues/23211) — v1.4.7+ fails to render UI, loses all config** *(9 comments, 1 👍)*
   Catastrophic regression for some users: blank UI and lost sessions after upgrade. Screenshots show total render failure.

9. **[#23543](https://github.com/anomalyco/opencode/issues/23543) — Code text renders white in Ghostty on macOS** *(3 comments, 9 👍)*
   Quickly gaining traction. Content/code text is white-on-white in Ghostty despite correct terminal color config. High visual impact.

10. **[#21079](https://github.com/anomalyco/opencode/issues/21079) — `package-lock.json` ignores `~/.npmrc` registry** *(8 comments, 13 👍)*
    Most-upvoted issue today. OpenCode generates lock files with default npm registry, breaking behind corporate mirrors/proxies.

---

## 4. Key PR Progress

1. **[#22612](https://github.com/anomalyco/opencode/pull/22612) — Handle numeric tool call IDs from NVIDIA NIM kimik2.5** *(fixes #19947)*
   NVIDIA NIM returns numeric IDs where strings are expected → Zod validation crash. This PR coerces to strings. Directly resolves a blocking provider bug.

2. **[#23593](https://github.com/anomalyco/opencode/pull/23593) — Fix permissions routing for remote workspaces** *(by @jlongster)*
   Permissions dialog is completely broken when using remote workspaces. Critical for remote-dev workflows; author also plans a broader remote testing strategy.

3. **[#23586](https://github.com/anomalyco/opencode/pull/23586) — Restore auto-accept UI button in prompt input** *(fixes #21578, #21423, #21999)*
   The auto-accept permissions toggle was removed from the chat UI in v1.4.0; this restores it. Community had multiple open complaints.

4. **[#14772](https://github.com/anomalyco/opencode/pull/14772) — Disable assistant prefill for Claude 4.6 models** *(fixes #13768)*
   Claude Opus 4.6 and Sonnet 4.6 reject requests with assistant-prefilled last messages. Prevents API errors on Anthropic's latest models.

5. **[#18306](https://github.com/anomalyco/opencode/pull/18306) — Add Open WebUI provider** *(fixes #13537)*
   New provider integration enabling self-hosted Open WebUI endpoints. Increases flexibility for users running local LLMs.

6. **[#20491](https://github.com/anomalyco/opencode/pull/20491) — Add Kiro (AWS) provider** *(fixes #9165)*
   Adds Kiro as a first-class provider. Notable because it expands OpenCode's cloud-provider surface area.

7. **[#13854](https://github.com/anomalyco/opencode/pull/13854) — Stop streaming markdown after message completes** *(fixes #13855)*
   `TextPart` always passed `streaming={true}`, causing the last table row to vanish on finished messages. Visual correctness fix.

8. **[#22988](https://github.com/anomalyco/opencode/pull/22988) — Ensure assistant message ID > parent user message ID** *(fixes #15657)*
   Fixes assistant messages appearing *above* user messages in the timeline. A subtle but disorienting ordering bug.

9. **[#23591](https://github.com/anomalyco/opencode/pull/23591) — Emit completed assistant chat messages** *(fixes #22831)*
   Plugin API gap: completed assistant messages were never emitted via `chat.message`, making it impossible for plugins to react to full AI responses.

10. **[#23590](https://github.com/anomalyco/opencode/pull/23590) — Add debug workspace server** *(by @jlongster)*
    Closed/merged. Provides a simulated remote workspace for testing. Infrastructure improvement that should prevent future remote-workspace regressions like #23211.

---

## 5. Feature Request Trends

| Trend | Evidence | Signal |
|-------|----------|--------|
| **First-party Python SDK** | [#4031](https://github.com/anomalyco/opencode/issues/4031) — 31 comments, persisting since Nov 2025 | High demand for programmatic/SDK access beyond the CLI |
| **"YOLO Mode" — auto-approve all permissions** | [#11831](https://github.com/anomalyco/opencode/issues/11831) — 20 👍 | Power users want frictionless workflows; trust-over-prompt model |
| **Custom session IDs via CLI flags** | [#17344](https://github.com/anomalyco/opencode/issues/17344) — `--session my-project` | Better session management for scripted/multi-project workflows |
| **Markdown preview in file viewer sidebar** | [#14187](https://github.com/anomalyco/opencode/issues/14187) — 13 👍 | Desktop app UX gap; raw markdown display is a frequent complaint |
| **Auto-switch provider/model on usage limit** | [#17137](https://github.com/anomalyco/opencode/issues/17137) | Multi-provider failover for uninterrupted workflows |
| **`--output-schema` flag for `opencode run`** | [PR #17276](https://github.com/anomalyco/opencode/pull/17276) | Structured output from CLI for pipeline integration |
| **Git branch name as session title** | [PR #22826](https://github.com/anomalyco/opencode/pull/22826) | Better session organization, `autotitle: "branch" \| "llm"` |
| **Mobile/touch optimization** | [PR #18767](https://github.com/anomalyco/opencode/pull/18767) | Growing interest in mobile-desktop hybrid usage |

---

## 6. Developer Pain Points

1. **Theme/dark-mode regression is systemic and unresolved.** At least 4 interconnected issues ([#20926](https://github.com/anomalyco/opencode/issues/20926), [#23196](https://github.com/anomalyco/opencode/issues/23196), [#23521](https://github.com/anomalyco/opencode/issues/23521), [#23543](https://github.com/anomalyco/opencode/issues/23543)) report light variants always rendering. OSC 11 terminal background detection appears fundamentally broken on macOS. This is the loudest visual bug right now (19 total 👍 across issues).

2. **v1.4.7 introduced a severe regression wave.** Multiple issues ([#23110](https://github.com/anomalyco/opencode/issues/23110), [#23211](https://github.com/anomalyco/opencode/issues/23211)) report total UI render failure and lost configuration. Users are pinning to v1.4.6 as a workaround, indicating insufficient pre-release testing.

3. **Clipboard copy/paste remains broken** ([#13984](https://github.com/anomalyco/opencode/issues/13984), 29 comments, 10 👍). Open since Feb 2026, this strikes at basic terminal interaction and has no fix in sight.

4. **Remote workspace support is fragile.** Permissions routing broken ([PR #23593](https://github.com/anomalyco/opencode/pull/23593)), UI render failures ([#23211](https://github.com/anomalyco/opencode/issues/23211)). The merged debug workspace server ([PR #23590](https://github.com/anomalyco/opencode/pull/23590)) suggests the team recognizes the testing gap.

5. **Provider compatibility is fragmented.** Numeric tool-call IDs from NVIDIA NIM ([#19947](https://github.com/anomalyco/opencode/issues/19947)), Kimi K2.5 errors on Windows ([#16685](https://github.com/anomalyco/opencode/issues/16685)), Claude caching failures ([#11083](https://github.com/anomalyco/opencode/issues/11083)) — each provider has its own non-standard edge case that breaks Zod schemas or API contracts.

6. **Corporate/enterprise proxy friction.** `package-lock.json` ignoring `~/.npmrc` registry ([#21079](https://github.com/anomalyco/opencode/issues/21079), 13 👍 — highest upvote count today) blocks adoption behind firewalls and mirrors.

7. **Windows is a second-class citizen.** CJK garbling ([#14768](https://github.com/anomalyco/opencode/issues/14768)), Kimi K2.5 failures ([#16685](https://github.com/anomalyco/opencode/issues/16685)), desktop launch failures ([#21256](https://github.com/anomalyco/opencode/issues/21256)), git permission bypass ([#23597](https://github.com/anomalyco/opencode/issues/23597)) — Windows-specific bugs cluster heavily.

---

*Data sourced from [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) activity through 2026-04-21 00:00 UTC.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-21

## 1. Today's Highlights
The community is buzzing with activity following the strict **reduction and phase-out of the Qwen OAuth free tier**, which has triggered a massive influx of 401 authentication errors and feature requests to expand VS Code extension auth options. To address the changing landscape, contributors are rapidly submitting architectural improvements to the **ACP (Agent Communication Protocol)** integration, including concurrent sub-agent execution, missing system reminders, and full hooks support. Additionally, the latest nightly release brings UX enhancements to compact mode and expanded hook integrations.

## 2. Releases
- **[v0.14.5-nightly.20260420.60a6dfc14](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260420.60a6dfc14)**
  - Added complete hooks support for ACP integration (#3248).
  - Optimized compact mode UX, including shortcuts, settings sync, and safety features (#3100).
  - Added HTTP Hooks support.

## 3. Hot Issues
1. **[Qwen OAuth Free Tier Policy Adjustment (#3203)](https://github.com/QwenLM/qwen-code/issues/3203)**: A highly discussed issue (104 comments) highlighting user frustration over the daily free quota dropping from 1,000 to 100 requests and the imminent total phase-out of the free tier.
2. **[API Error: 400 InternalError (#656)](https://github.com/QwenLM/qwen-code/issues/656)**: A persistent P1 core bug where users experience continuous 400 Algo InvalidParameter errors during standard usage.
3. **[Bring subagent system to feature parity with Claude Code (#2409)](https://github.com/QwenLM/qwen-code/issues/2409)**: Users are requesting accelerated development to match competitor sub-agent capabilities, noting Qwen Code currently covers only 40-45% of expected features.
4. **[Unable to add OpenAI-compatible local LLM (#3384)](https://github.com/QwenLM/qwen-code/issues/3384)**: Developers are struggling to route traffic to local vLLM instances due to configuration hurdles with custom endpoints.
5. **[Read tool stuck in an infinite loop (#2201)](https://github.com/QwenLM/qwen-code/issues/2201)**: A bad-case bug where the file reading agent gets stuck repeatedly reading the first 100-300 lines of a file.
6. **[Feedback for "Authentication" page (#3382)](https://github.com/QwenLM/qwen-code/issues/3382)**: Documentation is out of date following the April 15 discontinuation of the free tier, causing confusion for new users.
7. **[ACP / VS Code IDE Companion hook support is incomplete (#3108)](https://github.com/QwenLM/qwen-code/issues/3108)**: Reports that critical hooks (UserPromptSubmit, Stop, PreToolUse) are missing in the ACP execution path.
8. **[Alibaba Cloud Coding Plan "Temporarily out of stock" (#3307)](https://github.com/QwenLM/qwen-code/issues/3307)**: Users are unable to purchase Qwen 3.6 Plus access through Alibaba Cloud due to persistent inventory errors.
9. **[Qwen reports API error each time after restart (#3417)](https://github.com/QwenLM/qwen-code/issues/3417)**: A bug where the CLI fails to read the persisted API key from `settings.json` on startup, forcing manual re-entry.
10. **[CJK IME composition text appears at wrong position (#3456)](https://github.com/QwenLM/qwen-code/issues/3456)**: The TUI incorrectly renders Pinyin/character candidates on an extra line rather than inline at the cursor, impacting Chinese/Japanese/Korean workflows.

## 4. Key PR Progress
1. **[feat(vscode): replace OAuth with Coding Plan / API Key provider setup (#3398)](https://github.com/QwenLM/qwen-code/pull/3398)**: A critical architectural update replacing the deprecated OAuth flow in the VS Code extension with a guided setup for Coding Plans and Standard/Custom API Keys.
2. **[fix(cli): run ACP Agent tool calls concurrently (#3463)](https://github.com/QwenLM/qwen-code/pull/3463)**: Resolves a major latency bottleneck by allowing multiple Agent tool calls within a single ACP turn to execute concurrently instead of sequentially.
3. **[fix(cli): inject plan/subagent/arena system reminders in ACP (#3479)](https://github.com/QwenLM/qwen-code/pull/3479)**: Fixes an issue where plan mode and sub-agents failed silently in ACP by ensuring necessary system reminders are injected into the ACP session stream.
4. **[feat(cli): add conversation rewind feature (#3441)](https://github.com/QwenLM/qwen-code/pull/3441)**: Introduces a highly requested `/rewind` command and double-ESC UI to allow users to rollback conversation history to a previous turn.
5. **[feat(vscode): add native context menu copy actions (#3477)](https://github.com/QwenLM/qwen-code/pull/3477)**: Implements native webview right-click menus (Copy Message, Copy All, Copy Last Reply) to easily extract chat responses.
6. **[fix(cli): pin /recap above input and align defaults (#3478)](https://github.com/QwenLM/qwen-code/pull/3478)**: Improves the session recap feature by keeping it pinned above the input box as a sticky banner so context isn't lost when the model streams a reply.
7. **[feat(cli): make ACP message rewrite timeout configurable (#3475)](https://github.com/QwenLM/qwen-code/pull/3475)**: Prevents silent data loss by replacing the hardcoded 30s rewrite timeout with a user-configurable setting, useful for large Markdown/table outputs.
8. **[Fix permission persistence failure due to Windows path case-sensitivity (#2670)](https://github.com/QwenLM/qwen-code/pull/2670)**: Fixes "Always allow" permissions not persisting across sessions on Windows by correcting case-sensitive path comparisons.
9. **[feat(cli): add API preconnect to reduce first-call latency (#3318)](https://github.com/QwenLM/qwen-code/pull/3318)**: Optimizes startup speed by firing a fire-and-forget HEAD request early to warm the TCP+TLS connection, saving ~100-200ms on the first API call.
10. **[fix(cli): Strengthen error handling to prevent unhandled 'error' event (#3481)](https://github.com/QwenLM/qwen-code/pull/3481)**: Prevents CLI crashes on headless/Linux environments (e.g., RISC-V) where `xdg-open` is missing.

## 5. Feature Request Trends
* **Authentication Diversification:** Immediate demand for the VS Code extension to support Coding Plans, Alibaba API keys, and custom endpoints (matching CLI capabilities) following the OAuth free tier closure.
* **Sub-agent & ACP Parity:** Strong requests for the ACP and IDE Companion experiences to reach feature parity with the core CLI, specifically regarding hook execution, sub-agent orchestration, and plan mode functionality.
* **TUI / UX Refinements:** Continued requests for quality-of-life improvements such as one-click response copying, CJK IME input fixes, and conversation history rewind capabilities.

## 6. Developer Pain Points
* **Authentication Instability:** A disproportionate number of recent issues report `401 invalid access token` errors. This is partly due to the OAuth phase-out, but also exacerbated by bugs where the CLI fails to load saved API keys on restart.
* **Third-Party Model Hallucinations:** When using compatible third-party models (like GLM-5.1) via API, the models frequently hallucinate that shell commands returned empty outputs, severely breaking agentic tool loops.
* **Access Friction:** The combination of the discontinued free tier and the Alibaba Cloud Coding Plan being consistently "out of stock" is creating a frustrating barrier to entry for new developers trying to adopt the platform.

</details>