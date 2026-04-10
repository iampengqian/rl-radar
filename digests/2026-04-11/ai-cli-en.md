# AI CLI Tools Community Digest 2026-04-11

> Generated: 2026-04-10 22:07 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem: Cross-Tool Comparison Report (2026-04-11)

## 1. Ecosystem Overview
The AI CLI tooling landscape is experiencing a period of aggressive, rapid iteration, transitioning from simple terminal assistants to complex, multi-agent coding environments. Major AI labs and open-source communities are actively building foundational infrastructure—such as secure sandboxing, context management, and Model Context Protocol (MCP) integrations—to support autonomous agentic workflows. Across the board, developers are pushing these tools to their limits, exposing critical growing pains around token consumption, rate limiting, and cross-platform Terminal UI (TUI) stability. As these tools mature, the focus is visibly shifting from core feature launches to enterprise-grade security, precise cost observability, and seamless local/open-source model compatibility.

## 2. Activity Comparison
| Tool | Issues Active Today | Key PRs / Merged Today | Release Status | Core Focus Today |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ (High volume, 1,200+ 👍 on top issue) | 10 | v2.1.101 | Enterprise TLS, Agent Composability, Token Consumption |
| **OpenAI Codex** | 10+ (518 👍 on top issue) | 10 | Alpha v0.119.0-33 | Multi-host SSH execution, TUI performance, Rate limits |
| **GitHub Copilot CLI** | 10+ | 0 | v1.0.24-0 | Agentic mode flags, Premium billing transparency, MCP bugs |
| **Gemini CLI** | 10+ | 10 | Nightly v0.39.0 | Context Architecture, Memory routing, Authentication blocks |
| **Kimi Code CLI** | 10+ | 10 | v1.31.0 | Token lifecycle hardening, Context overflow fixes, Windows bugs |
| **OpenCode** | 10+ | 10 | v1.4.3 | Local model compatibility, Effect architecture, TUI bugs |
| **Qwen Code** | 10+ | 10 | v0.14.3 | TUI flickering/rendering, Session management, Auth fixes |

## 3. Shared Feature Directions

*   **Cost & Token Accountability:** Almost universally, developers are reporting unpredictable token consumption and erratic rate limiting. 
    *   *Claude Code* (Max plan limits), *OpenAI Codex* (10x faster usage drains), and *GitHub Copilot CLI* (double/triple premium request counting) are all facing severe community backlash regarding billing fairness and the urgent need for transparent usage dashboards.
*   **Context, Memory, & Session Resilience:** Tools are moving beyond ephemeral chats toward persistent project understanding.
    *   *Gemini CLI* (global vs. project memory routing), *OpenCode* (breaking cyclic prompt dependencies), *Qwen Code* (named session management), and *Kimi CLI* (external session querying) are all prioritizing stateful memory and context window optimizations.
*   **MCP & Identity Propagation:** The Model Context Protocol is standardizing, but executing it securely is a challenge.
    *   *Claude Code* (MCP OAuth token refresh gaps for subagents) and *GitHub Copilot CLI* (schema parsing bugs, enterprise registry blocking) show that integrating external tools and enterprise auth seamlessly is a primary hurdle for production readiness.
*   **Cross-Platform Terminal UI Stability:** Rendering engines are struggling with agentic output volumes.
    *   *Qwen Code* (severe parallel agent flickering), *OpenCode* (iTerm2 scrolling bugs), *Gemini CLI* (SSH/tmux text scrambling), and *OpenAI Codex* (Windows UI lag) highlight the ongoing battle to render fast, streaming agentic outputs cleanly across varied terminal emulators.

## 4. Differentiation Analysis

*   **Claude Code vs. OpenAI Codex (The Enterprise Arms Race):** Claude Code is deeply focused on *composable multi-agent workflows* (custom teammate agents) and enterprise integration (OS CA certs). OpenAI Codex is differentiating by decoupling the UI from the local machine via *remote multi-host execution* ("Waypoints" over SSH) and refining core TUI ergonomics (Vim mode, keymaps).
*   **GitHub Copilot CLI (Billing & Guardrails):** Copilot CLI's evolution is heavily shaped by its ecosystem coupling. Its primary focus is managing the transition to agentic "Premium Requests" and refining permission models (allowlists vs. `--allow-all`), essentially acting as a controlled gateway to GitHub's ecosystem.
*   **Gemini CLI vs. Qwen Code vs. Kimi CLI (Open/Local Model Integration):** *Gemini CLI* is setting itself apart with deep architectural overhauls for "proactive memory" and AST-aware code navigation. *Kimi CLI* is aggressively patching cross-process auth resilience and token lifecycle management. *Qwen Code* is highly focused on localized developer experience, specifically solving CJK markdown rendering and tracking AI-generated code vs human code via commit attribution.
*   **OpenCode (The Agnostic Alternative):** Uniquely positioned by prioritizing *open-source and local model compatibility* (fixing Gemma 4 and Kimi k2.5 tool loops). It is undergoing a significant internal architectural refactor (`Tool.defineEffect`), prioritizing type safety and modularity to support a fragmented landscape of AI models.

## 5. Community Momentum & Maturity

*   **Most Rapidly Iterating (Velocity):** **OpenAI Codex** (3 alpha releases in 24 hours), **Qwen Code**, and **Kimi Code**, all pushing frequent, incremental builds. **Claude Code** also shows high velocity with back-to-back patch releases and massive community engagement.
*   **Highest Community Engagement (Volume/Friction):** **Claude Code** and **OpenAI Codex** have the most active issue trackers, characterized by massive upvote counts (1,200+ and 500+ on top issues respectively). This reflects a large, highly invested professional user base currently frustrated by token consumption and billing limits. 
*   **Most Active Open-Source Contribution:** **OpenCode**, **Gemini CLI**, and **Qwen Code** are seeing substantial, complex community PRs (architectural refactors, UI overhauls), indicating strong grassroots momentum and maintainer responsiveness.
*   **Bottlenecked Maturity:** **GitHub Copilot CLI** shows signs of ecosystem friction, with zero public PRs updated today, lagging enterprise token support, and a broken self-update mechanism, suggesting a closed or internally bottlenecked development pipeline compared to its peers.

## 6. Trend Signals (Strategic Takeaways)

1.  **The "AgenticBilling" Crisis is Here:** The transition from chat-based to agentic workflows (where a single user prompt triggers dozens of automated tool calls) is breaking existing billing models. Providers must urgently transition to granular cost dashboards and predictable agentic rate limits, as professional workflows are currently being unexpectedly throttled.
2.  **Security & Permission Models Need Granularity:** The binary "allow-all" or "approve-every-prompt" model is dead. As these tools execute complex bash scripts and file edits, developers are demanding fine-grained, persistent allowlists, sandbox hardening, and clear boundaries for sub-agent permissions.
3.  **Local/Open-Source Tool Calling is the Final Frontier:** As seen in OpenCode and Qwen efforts, while proprietary models have standardized tool calling, local models (like Gemma 4 via Ollama) still struggle with structured JSON outputs and streaming loops. Standardizing local model tool interfaces is the next major unlock for the ecosystem.
4.  **TUI is a Solved Problem, Except When It Isn't:** Despite the AI revolution, basic terminal rendering (flickering, scrolling, SSH/tmux compatibility) remains a glaring weak point. For technical decision-makers, prioritizing tools that have recently overhauled their rendering engines (like moving to Rust or dedicated rendering loops) will yield immediate UX dividends.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Repository:** [github.com/anthropics/skills](https://github.com/anthropics/skills)
**Analysis Period:** Data snapshot as of 2026-04-11

*Note: The data source for this snapshot indicated 0 total Pull Requests and 0 total Issues. This suggests the repository may be newly provisioned, recently had its data cleared, or is operating in a closed-development phase. The following analysis is a structural report based on the provided null dataset.*

---

## 1. Top Skills Ranking
**Status:** No Pull Requests or active PR discussions were recorded in this snapshot. 

Because the dataset contains 0 PRs, there are currently no most-discussed Skills to rank. We will monitor this section in future updates as the community begins submitting new Skills (e.g., prompt chains, automated workflows, and code review automations). 
*Check back here next week for the top 5-8 ranked Skills.*

## 2. Community Demand Trends
**Status:** 0 Issues reported in the snapshot.

Due to the absence of open Issues, we cannot accurately extrapolate specific community demand trends for this period. Historically, the Claude Code ecosystem shows heavy interest in test-generation, CI/CD pipeline integration, and automated code-review Skills. We are monitoring the issue tracker to see which of these workflows the community prioritizes first.

## 3. High-Potential Pending Skills
**Status:** No open or draft PRs are currently pending.

There are no active PRs with comments awaiting merge. Future reports will highlight the most promising community-submitted Skills that are currently under maintainer review.

## 4. Skills Ecosystem Insight
**Summary:** The repository is currently experiencing an initialization or dormant phase with zero community PRs and Issues, making it a blank slate ready for the community to define its first wave of high-impact workflow automations.

---

# Claude Code Community Digest — 2026-04-11

---

## 1. Today's Highlights

Claude Code shipped **v2.1.100** and **v2.1.101** in rapid succession, introducing a new `/team-onboarding` command that auto-generates teammate ramp-up guides from your local usage history, plus long-requested OS CA certificate store trust for enterprise TLS proxies. Meanwhile, the community is loudly focused on **token consumption regressions** since v2.1.88 and persistent **agent teams/MCP authentication gaps**, with multiple high-traction issues accumulating hundreds of upvotes. The plugin ecosystem continues to mature with community PRs for cross-platform PowerShell support, session persistence, and notification hooks.

---

## 2. Releases

### [v2.1.101](https://github.com/anthropics/claude-code/releases/tag/v2.1.101)
- **`/team-onboarding` command** — generates a teammate ramp-up guide derived from your local Claude Code usage patterns, lowering the friction of onboarding new engineers to AI-assisted workflows.
- **OS CA certificate store trust by default** — enterprise TLS proxies (e.g., corporate MITM inspections) now work without manual certificate configuration. Set `CLAUDE_CODE_CERT_STORE=bundled` to revert to bundled-only CAs.
- Truncated changelog entry for `/ultrapl…` (likely `/ultraplan` improvement; full notes pending).

### [v2.1.100](https://github.com/anthropics/claude-code/releases/tag/v2.1.100)
- Empty release notes at time of digest (likely a patch/infra release preceding v2.1.101).

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [**#42796**](https://github.com/anthropics/claude-code/issues/42796) — *Model unusable for complex tasks after Feb updates* | **1,208 👍 / 258 comments.** The single highest-traction open issue. Users report significant quality degradation on complex engineering tasks post-Feb model update. Closed but remains the canonical reference for model quality concerns. |
| 2 | [**#41788**](https://github.com/anthropics/claude-code/issues/41788) — *Max 20 plan rate limit exhausted in ~70 min* | **76 👍 / 53 comments.** Users on the $200/mo Max 20 plan report that since v2.1.89, rate limits deplete in ~70 minutes — a regression that never occurred on earlier versions. Directly impacts professional workflows. |
| 3 | [**#42272**](https://github.com/anthropics/claude-code/issues/42272) — *Excessive token consumption since v2.1.88* | **9 👍 / 14 comments.** 66% of budget consumed in 2 questions on Max 5x with Opus 4.6. Corroborates a pattern of token-spending regressions across multiple subscription tiers. |
| 4 | [**#45756**](https://github.com/anthropics/claude-code/issues/45756) — *Pro Max 5x quota exhausted in 1.5 hours* | Filed just 2 days ago on WSL; confirms the token-consumption regression spans platforms (macOS + WSL/Linux). |
| 5 | [**#24316**](https://github.com/anthropics/claude-code/issues/24316) — *Allow custom `.claude/agents/` as agent team teammates* | **29 👍 / 35 comments.** Agent teams currently ignore custom agent definitions. A high-demand enhancement that would unlock composable, project-specific multi-agent workflows. |
| 6 | [**#30703**](https://github.com/anthropics/claude-code/issues/30703) — *Custom agent definitions silently ignored for team agents* | Related to #24316 — frontmatter and system prompts from `.claude/agents/*.md` are silently dropped when spawning team agents. Breaks user expectations of composability. |
| 7 | [**#5706**](https://github.com/anthropics/claude-code/issues/5706) — *Missing MCP server token refresh mechanism* | **50 👍 / 34 comments.** Open since Aug 2025. Deep integrators (enterprise platforms) cannot automatically refresh MCP OAuth tokens, forcing manual intervention. A blocker for production MCP adoption. |
| 8 | [**#46228**](https://github.com/anthropics/claude-code/issues/46228) — *Background subagents cannot access OAuth MCP servers* | Filed today. Extends the MCP auth story: background/subagent contexts lack the OAuth tokens available in the parent session, compounding #5706. |
| 9 | [**#43713**](https://github.com/anthropics/claude-code/issues/43713) — *`autoAllowBashIfSandboxed` bypassed for shell expansions* | **14 👍.** With sandboxing enabled, commands with `$VAR`, `$(...)`, or other shell constructs still prompt for permission. Undermines the "auto-allow" trust model for power users. |
| 10 | [**#44766**](https://github.com/anthropics/claude-code/issues/44766) — *Ultraplan remote session offers "implement here" but can't push code* | The remote cloud sandbox for `/ultraplan` generates plans but the ephemeral environment has no git credentials or MCP access. Creates a dead-end UX flow. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [**#46351**](https://github.com/anthropics/claude-code/pull/46351) — *Enable PowerShell tool on macOS/Linux* | Removes the Windows-only gate on the PowerShell tool. When `pwsh` 7.5+ is available, `CLAUDE_CODE_USE_POWERSHELL_TOOL=1` now works cross-platform. Directly addresses cross-platform parity. |
| 2 | [**#45621**](https://github.com/anthropics/claude-code/pull/45621) — *notify-on-complete plugin* | A ready-to-use Stop hook that fires desktop/mobile notifications when Claude finishes responding. Handles UTF-8 edge cases in `osascript`. Solves a frequent "walk away and forget" pain point. |
| 3 | [**#39148**](https://github.com/anthropics/claude-code/pull/39148) — *preserve-session plugin* | Assigns path-independent UUIDs to projects so session history survives directory renames, moves, or copies. Addresses a long-standing annoyance for reorganized codebases. |
| 4 | [**#32980**](https://github.com/anthropics/claude-code/pull/32980) — */create-test command plugin* | Two-agent pipeline: one extracts exports/types/edges, the other generates unit test files. Closed but represents the emerging "multi-agent command" plugin pattern. |
| 5 | [**#32979**](https://github.com/anthropics/claude-code/pull/32979) — *explain-architecture plugin* | Scans repos, parses imports (TS/JS/Python/Go), builds dependency graphs, and outputs Mermaid/PlantUML/JSON diagrams. Another multi-agent plugin demonstrating the extensibility model. |
| 6 | [**#32931**](https://github.com/anthropics/claude-code/pull/32931) — *Resolve hookify rules from project root* | Fixes rule discovery to use the project root instead of CWD, with tests for `CLAUDE_PROJECT_DIR` and nested directory scenarios. Important for monorepo users. |
| 7 | [**#29459**](https://github.com/anthropics/claude-code/pull/29459) — *Fix commit-commands allowed-tools mismatch* | The `/commit` command was failing because its dynamic git operations weren't listed in `allowed-tools`. A targeted fix for a common permission error. |
| 8 | [**#46186**](https://github.com/anthropics/claude-code/pull/46186) — *Remove `--cask` flag from Homebrew install docs* | Aligns README with official docs. Small but prevents new-user install failures. |
| 9 | [**#46025**](https://github.com/anthropics/claude-code/pull/46025) — *Linux subprocess isolation docs* | Documents `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB`, `CLAUDE_CODE_SCRIPT_CAPS`, and hardened settings for managed deployments. Valuable for enterprise security teams. |
| 10 | [**#46024**](https://github.com/anthropics/claude-code/pull/46024) — *Document `--exclude-dynamic-system-prompt-sections`* | Explains how to move per-machine dynamic system prompt sections into the first user message for better prompt caching — a cost optimization lever for power users. |

---

## 5. Feature Request Trends

1. **Composable multi-agent workflows** — Custom agent definitions as team members ([#24316](https://github.com/anthropics/claude-code/issues/24316)), skill injection in subagents ([#46311](https://github.com/anthropics/claude-code/issues/46311)), and custom teammate roles are all converging into a single theme: users want *fully configurable multi-agent architectures*.

2. **Enterprise MCP & auth hardening** — OAuth token refresh for MCP servers ([#5706](https://github.com/anthropics/claude-code/issues/5706)), OAuth propagation to subagents ([#46228](https://github.com/anthropics/claude-code/issues/46228)), and multi-connector account support ([#27302](https://github.com/anthropics/claude-code/issues/27302), 149 👍) indicate strong enterprise demand for robust MCP identity infrastructure.

3. **Cost observability & control** — Excessive token consumption reports ([#41788](https://github.com/anthropics/claude-code/issues/41788), [#42272](https://github.com/anthropics/claude-code/issues/42272), [#45756](https://github.com/anthropics/claude-code/issues/45756)) and silent token burning in agent stalls ([#45958](https://github.com/anthropics/claude-code/issues/45958)) point to a need for granular cost dashboards and budget alerts.

4. **Sandbox & permissions refinement** — `autoAllowBashIfSandboxed` gaps ([#43713](https://github.com/anthropics/claude-code/issues/43713)), branch-push restrictions ([#24535](https://github.com/anthropics/claude-code/issues/24535)), and subprocess isolation docs all reflect users pushing for *finer-grained trust models*.

5. **UX polish** — Message timestamps ([#21051](https://github.com/anthropics/claude-code/issues/21051)), newline keybinding fixes ([#27222](https://github.com/anthropics/claude-code/issues/27222)), and plan/session restore ([#33370](https://github.com/anthropics/claude-code/issues/33370), [#33369](https://github.com/anthropics/claude-code/issues/33369)) remain steady requests.

---

## 6. Developer Pain Points

- **Token consumption regressions (critical)** — The cluster of issues around v2.1.88–2.1.89 ([#41788](https://github.com/anthropics/claude-code/issues/41788), [#42272](https://github.com/anthropics/claude-code/issues/42272), [#45756](https://github.com/anthropics/claude-code/issues/45756)) represents the most acute pain point. Users on Max 20 and Pro Max plans report exhausting quotas in 1–2 hours on moderate workloads. No official acknowledgment or mitigation has appeared in release notes yet.

- **Agent teams are incomplete** — Custom agent definitions being silently ignored ([#30703](https://github.com/anthropics/claude-code/issues/30703)), skills not injecting into subagents ([#46311](https://github.com/anthropics/claude-code/issues/46311)), and parallel agent stalls burning tokens ([#45958](https://github.com/anthropics/claude-code/issues/45958)) collectively signal that the agent teams feature shipped before its composability model is fully wired.

- **MCP auth gaps block production use** — The lack of token refresh ([#5706](https://github.com/anthropics/claude-code/issues/5706), open 8 months) combined with subagents lacking OAuth context ([#46228](https://github.com/anthropics/claude-code/issues/46228)) means any MCP integration requiring short-lived tokens is fragile or manual.

- **Model sycophancy / quality regression** — Issue [#42796](https://github.com/anthropics/claude-code/issues/42796) (1,208 👍) and the newly filed [#46427](https://github.com/anthropics/claude-code/issues/46427) on Claude reversing correct answers under pushback suggest persistent model behavior concerns that go beyond tooling.

- **Windows/WSL Cowork instability** — Multiple Cowork issues ([#38993](https://github.com/anthropics/claude-code/issues/38993), [#45579](https://github.com/anthropics/claude-code/issues/45579)) indicate the virtualized Cowork environment has significant platform-specific gaps, particularly around FUSE mounts and feature detection on Windows 11.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## OpenAI Codex Community Digest — 2026-04-11

### 1. Today's Highlights
OpenAI shipped three rapid-fire Rust CLI alpha releases (up to `v0.119.0-alpha.33`), signaling aggressive iteration on core infrastructure. Internally, the team landed several foundational PRs, including the introduction of a multi-host remote execution registry via SSH ("Waypoints") and a new persistent timer tool for thread-local follow-ups. Community discussions were dominated by renewed complaints about unpredictable rate-limit tracking and ongoing sandbox stability issues on both Linux and Windows.

### 2. Releases
*   **rust-v0.119.0-alpha.33**, **alpha.32**, **alpha.29**
    Three CLI alpha versions were released within the last 24 hours. While official release notes are sparse ("Release 0.x.x"), the corresponding open PRs (e.g., Issue [#17313](https://github.com/openai/codex/issue/17313)) indicate these builds are iterating heavily on TUI performance, context window progress bars, and sandbox execution plumbing.

### 3. Hot Issues
1.  **[OPEN] [Remote Development in Codex Desktop App](https://github.com/openai/codex/issue/10450)** (👍 518)
    The highest-upvoted issue in the tracker. Users are frustrated by the Desktop app's lack of remote dev support (e.g., SSH into remote servers), a standard feature in VS Code. 
2.  **[OPEN] [Codex Desktop App: macOS Intel (x86_64) support](https://github.com/openai/codex/issue/10410)** (👍 262, 💬 174)
    A massive thread of users stranded on Intel Macs. The CLI currently installs an incompatible binary for x86_64 architectures.
3.  **[OPEN] [A way to exclude sensitive files](https://github.com/openai/codex/issue/2847)** (👍 309, 💬 67)
    Users are heavily requesting a `.codexignore` mechanism to prevent the agent from reading or sending sensitive files (like `.env` or secrets) to the model.
4.  **[OPEN] [Saying I'm out of usage when I'm at 4%](https://github.com/openai/codex/issue/17345)** (🔥 New)
    A critical regression where Business/Plus users are hitting hard rate-limit blocks despite the UI showing barely any usage consumed.
5.  **[OPEN] [Codex usage limit consumed ~10x faster](https://github.com/openai/codex/issue/16889)** 
    Corroborates the rate-limit bug above. Users report a single message consuming ~6% of a 5-hour window, making the tool virtually unusable.
6.  **[OPEN] [bwrap: Approval prompt shown for almost every command](https://github.com/openai/codex/issue/14936)** (💬 40)
    A regression in the Linux sandbox (v0.115.0+) causing the CLI to prompt for approval on routine commands, severely breaking developer flow.
7.  **[OPEN] [The codex cli giving: 401 unauthorized](https://github.com/openai/codex/issue/12764)** (💬 94)
    An ongoing auth meltdown. Related to [#15151](https://github.com/openai/codex/issue/15151), where users discovered that setting `OPENAI_API_KEY` silently overrides OAuth tokens, breaking ChatGPT/Business logins.
8.  **[OPEN] [WebSocket upgrade succeeds then server closes with 1008 Policy](https://github.com/openai/codex/issue/13041)** (💬 57)
    Linux/Arch users reporting persistent connection loops where WebSockets successfully handshake but are immediately dropped by server policy, forcing noisy HTTPS fallbacks.
9.  **[OPEN] [TUI/CLI performance regression from 116 to 117](https://github.com/openai/codex/issue/16335)** (💬 11)
    Windows users are experiencing noticeable UI lag and stuttering in the terminal interface following recent updates.
10. **[OPEN] [High GPU usage while the app is “thinking”](https://github.com/openai/codex/issue/16857)** (💬 7)
    The Desktop app's loading animation is needlessly maxing out macOS GPU cycles, draining laptop batteries during extended coding sessions.

### 4. Key PR Progress
1.  **[feat: add waypoints: multi-host remote execution](https://github.com/openai/codex/pull/17362)**
    A massive architectural addition. Introduces a shared multi-host execution registry, allowing `exec_command` to be routed to different hosts via an SSH-backed backend.
2.  **[feat: Add timer tool](https://github.com/openai/codex/pull/17380)**
    Adds persistent thread-local timers (`create_timer`, `delete_timer`, `list_timers`) with fired timers visible in transcripts, enabling better asynchronous and delayed task handling.
3.  **[feat: configurable keymaps and Vim mode](https://github.com/openai/codex/pull/17245)**
    Direct response to TUI complaints. Adds a guided `/keymap` picker, shifted-letter compatibility, and true Vim insert/normal cursor behaviors.
4.  **[refactor: Run exec-server fs operations through sandbox helper](https://github.com/openai/codex/pull/17294)**
    Hardens filesystem operations by routing them through a `codex-fs` arg0 helper, while keeping `DangerFullAccess` execution direct.
5.  **[fix: Include legacy deny paths in elevated Windows sandbox setup](https://github.com/openai/codex/pull/17365)**
    Directly addresses Windows OS issues by ensuring protected children are included in the deny-write payload pipe during elevated sandbox setups.
6.  **[feat: Support ChatGPT workspace allowlists](https://github.com/openai/codex/pull/17343)**
    Upgrades `forced_chatgpt_workspace_id` from accepting a single string to a list of workspace IDs, heavily requested by Enterprise managed configurations.
7.  **[feat: Add Bash PermissionRequest hooks](https://github.com/openai/codex/pull/17382)**
    Extends the hook system so that approval prompts (Guardian/User) for Bash commands can now be programmatically approved or denied by developer-defined hooks.
8.  **[refactor: Prepare to run initialized rpcs concurrently](https://github.com/openai/codex/pull/17372)**
    Refactors the `MessageProcessor` to share state via `Arc`/`OnceLock`, laying the groundwork for highly concurrent RPC handling in the app-server.
9.  **[feat: representing guardian review timeouts in protocol types](https://github.com/openai/codex/pull/17381)**
    Introduces `ReviewDecision::TimedOut` to the wire protocol, ensuring guardian reviews don't hang indefinitely and gracefully degrade.
10. **[chore: Add session source to Responses metadata](https://github.com/openai/codex/pull/17374)**
    Improves backend telemetry by adding `session_source` to turn metadata, transmitted via HTTP headers or WebSocket `client_metadata`.

### 5. Feature Request Trends
*   **Remote/SSH Execution:** The community heavily wants to decouple the Codex UI from local execution. Remote dev support is the most upvoted open issue, and OpenAI is clearly reacting, given the new "Waypoints" SSH multi-host PR.
*   **TUI Customization:** Developers are demanding desktop-class keyboard controls in the terminal. Requests for Vim emulation, configurable keymaps, and standard OSX cursor controls (like `Option+Backspace`) are surging.
*   **Granular Context Control:** Excluding sensitive files via `.codexignore`, exporting conversations as Markdown, and better context-window progress indicators represent a strong trend of users wanting strict control over their prompt payloads.

### 6. Developer Pain Points
*   **Broken Rate Limiting:** The most urgent frustration right now is erratic rate-limiting. Users with Plus/Business tiers are being blocked at 4% usage or seeing single prompts eat 6% of their quota.
*   **Sandbox Regressions:** Linux users are pulling their hair out over `bwrap` (bubblewrap) updates. Constant nags for approval prompts and `Operation not permitted` errors are breaking automated workflows. Windows users face similar blockers with failing `CreateProcessAsUserW` commands.
*   **Auth Clashes:** The silent collision between hardcoded `OPENAI_API_KEY` environment variables and modern OAuth tokens is causing a high volume of 401 Unauthorized errors, stalling developer onboarding.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-04-11

## 1. Today's Highlights
A new nightly release (`v0.39.0-nightly`) landed, bringing centralized Linux sandbox path resolution and a new `Ctrl+Shift+G` shortcut. The community remains highly active around startup performance and authentication friction, with the P1 authentication block issue ([#24517](https://github.com/google-gemini/gemini-cli/issues/24517)) accumulating 66 comments. On the PR front, contributors are pushing significant architectural improvements, including a decoupled `ContextManager` ([#24752](https://github.com/google-gemini/gemini-cli/pull/24752)) and fixes for fatal React rendering crashes ([#24959](https://github.com/google-gemini/gemini-cli/pull/24959)).

## 2. Releases
**v0.39.0-nightly.20260410.96cc8a0da**
*   **Refactored Linux Sandbox:** Centralized path resolution logic for the Linux sandbox ([PR #24985](https://github.com/google-gemini/gemini-cli/pull/24985)).
*   **New Shortcut:** Added support for `Ctrl+Shift+G` ([PR #25035](https://github.com/google-gemini/gemini-cli/pull/25035)).
*   **Subagent Refactor:** Initiated a refactor of the subagent tool to a unified interface.

## 3. Hot Issues
1.  **[OPEN | P1] 403 PERMISSION_DENIED for Google One AI Premium** — [#24517](https://github.com/google-gemini/gemini-cli/issues/24517)
    *   *Why it matters:* Premium subscribers are correctly identified but completely blocked from making API requests. With 66 comments and 38 thumbs-up, this is the most urgent community-wide pain point right now.
2.  **[OPEN | P1] exit_plan_mode hook regression** — [#25054](https://github.com/google-gemini/gemini-cli/issues/25054)
    *   *Why it matters:* A recent PR replaced `plan_path` with `plan_filename`, breaking automated documentation/hook workflows that rely on absolute paths.
3.  **[OPEN | P2] '�' character in Rust source file crashes CLI** — [#24547](https://github.com/google-gemini/gemini-cli/issues/24547)
    *   *Why it matters:* Severe crash triggered by encoding issues in non-UTF-8 friendly source files, highlighting gaps in CLI file parsing resilience.
4.  **[OPEN] feat(cli): add /context command** — [#23165](https://github.com/google-gemini/gemini-cli/issues/23165)
    *   *Why it matters:* Highly requested UX enhancement to display a segmented, color-coded usage bar showing exactly what is consuming the context window.
5.  **[OPEN] Repeated permission prompts on the same file** — [#24916](https://github.com/google-gemini/gemini-cli/issues/24916)
    *   *Why it matters:* Security settings aren't persisting across sessions, forcing users to repeatedly grant "allow for all future sessions" for the same files.
6.  **[OPEN] AST-aware file reads and codebase mapping** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   *Why it matters:* Maintainers are investigating AST-aware tooling to reduce token noise and enable precise, single-call method reading.
7.  **[OPEN] Tune main agent prompt for proactive memory writes** — [#22809](https://github.com/google-gemini/gemini-cli/issues/22809)
    *   *Why it matters:* Aims to solve the problem of the agent forgetting context by triggering memory saves automatically when users state preferences or correct behaviors.
8.  **[OPEN] Implement memory routing: global vs. project** — [#22819](https://github.com/google-gemini/gemini-cli/issues/22819)
    *   *Why it matters:* Crucial architectural work to separate user-specific global memories from codebase-specific project memories.
9.  **[OPEN] Minified React error #185** — [#24917](https://github.com/google-gemini/gemini-cli/issues/24917)
    *   *Why it matters:* Terminal UI crash occurring during high-volume output, causing severe session interruptions.
10. **[OPEN] Agent fails to show plan content in chat** — [#25042](https://github.com/google-gemini/gemini-cli/issues/25042)
    *   *Why it matters:* Breaks Plan Mode UX; the agent asks for informal agreement but fails to render the actual plan in the chat response.

## 4. Key PR Progress
1.  **feat(core): introduce decoupled ContextManager and Sidecar architecture** — [PR #24752](https://github.com/google-gemini/gemini-cli/pull/24752)
    *   *Details:* Major architectural shift to separate context management, laying the groundwork for better extensibility and tool isolation.
2.  **feat(cli): extract QuotaContext and resolve infinite render loop** — [PR #24959](https://github.com/google-gemini/gemini-cli/pull/24959)
    *   *Details:* Fixes the fatal "Maximum update depth exceeded" React crash (Error #185) by preventing high-frequency quota state updates from triggering infinite loops.
3.  **feat(cli): Add `/rewind <N>` index argument** — [PR #25150](https://github.com/google-gemini/gemini-cli/pull/25150)
    *   *Details:* Allows external orchestration tools to programmatically trim conversation history using the `/rewind` command.
4.  **feat(core): add skill patching support with /memory inbox integration** — [PR #25148](https://github.com/google-gemini/gemini-cli/pull/25148)
    *   *Details:* Enables the extraction agent to propose updates to existing skills using a pure-JS `diff` library, bypassing git dependencies.
5.  **feat(extensions): allow headless config and linking** — [PR #25151](https://github.com/google-gemini/gemini-cli/pull/25151)
    *   *Details:* Adds `--skip-settings` to `gemini extensions link`, enabling fully non-interactive extension setups in CI/CD pipelines.
6.  **fix(cli): exclude update_topic from confirmation queue count** — [PR #24945](https://github.com/google-gemini/gemini-cli/pull/24945)
    *   *Details:* Fixes a UI bug where background tools like `update_topic` artificially inflated the "X of Y" confirmation queue count.
7.  **fix(ui): use wrap instead of truncate for tool confirmation prompt text** — [PR #25149](https://github.com/google-gemini/gemini-cli/pull/25149)
    *   *Details:* Resolves a security/UX concern where long shell commands or URLs being approved were silently truncated rather than wrapped.
8.  **chore(deps): update vulnerable dependencies via npm audit fix** — [PR #25140](https://github.com/google-gemini/gemini-cli/pull/25140)
    *   *Details:* Patched 9 high/moderate severity vulnerabilities, including path traversal and middleware bypass in `hono`.
9.  **fix: correct redirect count increment in fetchJson** — [PR #24896](https://github.com/google-gemini/gemini-cli/pull/24896)
    *   *Details:* Fixes an unbounded redirect loop in `github_fetch.ts` caused by a post-increment bug that always passed `0` to the recursive limit.
10. **improve(core): require recurrence evidence before extracting skills** — [PR #25147](https://github.com/google-gemini/gemini-cli/pull/25147)
    *   *Details:* Prevents memory clutter by forcing the CLI to prove a behavior is recurring before automatically generating and saving a new "skill".

## 5. Feature Request Trends
*   **Deep Context & Memory Management:** Users and maintainers are heavily focused on memory routing ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819)), proactive memory writes ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809)), and context window transparency ([#23165](https://github.com/google-gemini/gemini-cli/issues/23165)). The goal is making the agent reliably remember project-specific vs. global settings.
*   **AST-Aware Code Navigation:** Strong momentum toward integrating AST tools ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) so the agent can read specific method bounds directly rather than ingesting entire files and wasting tokens.
*   **Advanced Session Handling:** Users are asking for better ways to manage conversation history, driving feature requests like session resumption based on prompt history ([#24719](https://github.com/google-gemini/gemini-cli/issues/24719)) and asynchronous background info injection (`/btw` command, [#24726](https://github.com/google-gemini/gemini-cli/issues/24726)).
*   **Richer Extension APIs:** Developers want extensions to contribute configuration settings natively ([#12634](https://github.com/google-gemini/gemini-cli/issues/12634)) rather than just contributing tools or context.

## 6. Developer Pain Points
*   **Startup Latency:** Slow initialization (20-30 seconds) remains a massive frustration. Multiple overlapping issues ([#21623](https://github.com/google-gemini/gemini-cli/issues/21623), [#24721](https://github.com/google-gemini/gemini-cli/issues/24721)) show that the CLI is still perceived as "super slow" on startup.
*   **Terminal UI & SSH Corruption:** Users running the CLI over SSH or inside `tmux` are experiencing scrambled text ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)), trailing spaces ([#25109](https://github.com/google-gemini/gemini-cli/pull/25109)), and screen flashing during long chats ([#24470](https://github.com/google-gemini/gemini-cli/issues/24470)).
*   **Premature Script Generation:** When restricted from editing files directly, the model frequently creates messy `tmp` scripts in random directories instead of writing clean diffs ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
*   **Authentication & Authorization Friction:** Beyond the top-voted 403 block issue, users are expressing frustration over flaky permissions ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)) that refuse to remember "allow for all future sessions" decisions.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-11

## 1. Today's Highlights

Two rapid-fire releases landed in the last 24 hours: **v1.0.23** and **v1.0.24-0**, introducing direct agent-mode launch flags (`--mode`, `--autopilot`, `--plan`) and a redesigned exit screen featuring the Copilot mascot. On the community side, premium request consumption remains a hot-button topic, with multiple issues reporting excessive quota burn and potential double/triple counting during agentic sessions.

---

## 2. Releases

### v1.0.24-0
**Improved:**
- Redesigned exit screen with Copilot mascot and cleaner usage summary layout.

**Fixed:**
- `--remote` flag is now respected when the session sync prompt appears on first run in a GitHub repo.

### v1.0.23 (2026-04-10)
- Added `--mode`, `--autopilot`, and `--plan` flags to start the CLI directly in a specific agent mode.
- Agent no longer hangs on the first turn when the memory backend is unavailable.
- Bazel/Buck build target labels (e.g. `//package:target`) are no longer misidentified as file paths.
- `Ctrl+L` now clears the screen instead of the conversation history ([#853](https://github.com/github/copilot-cli/issues/853)).

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#2591 — Infinite premium requests consumed per tool invocation](https://github.com/github/copilot-cli/issues/2591) | Users report a single agentic session burning 80–100 premium requests due to each tool invocation/thinking step triggering a new request. 12 comments, actively discussed. |
| 2 | [#2626 — Request consumption appears abnormally high (double/triple counting)](https://github.com/github/copilot-cli/issues/2626) | Even on a 1× multiplier model (GPT-5.4), quota burns at ~3× expected rate. Raises billing correctness concerns. |
| 3 | [#2498 — All MCP servers blocked by policy on GHE when /copilot/mcp_registry returns 404](https://github.com/github/copilot-cli/issues/2498) | Enterprise users on GHE are completely blocked from non-default MCP servers because the registry endpoint doesn't exist on their instance. 18 comments. |
| 4 | [#223 — "Copilot Requests" permission missing for org-owned fine-grained tokens](https://github.com/github/copilot-cli/issues/223) | Long-standing enterprise ask (62 👍). Orgs need PAT-based auth for automations but can't grant the Copilot Requests permission on org-owned tokens. |
| 5 | [#1973 — Tool whitelist for Interactive Mode](https://github.com/github/copilot-cli/issues/1973) | Users want granular approval for read-only tools vs. destructive ones instead of the current all-or-nothing `/allow-all`. 10 👍. |
| 6 | [#2484 — Configure allowed commands without `--allow-all`](https://github.com/github/copilot-cli/issues/2484) | Complements #1973. Users want persistent per-command allowlists so they don't re-approve every session. |
| 7 | [#1291 — Repository-level MCP configuration](https://github.com/github/copilot-cli/issues/1291) | Currently MCP servers are global-only (`~/.copilot/mcp-config.json`). Project-level config would enable team-shareable toolchains. 16 👍. |
| 8 | [#2583 — `copilot update` command broken since v1.0.17](https://github.com/github/copilot-cli/issues/2583) | The built-in self-update mechanism (`copilot update` and `/update`) is non-functional for a growing number of users on Windows/other platforms. |
| 9 | [#2634 — MCP tools loaded partially/incorrectly](https://github.com/github/copilot-cli/issues/2634) | Tool schemas from stdio MCP servers are being altered or truncated on load, causing Copilot to misuse tool parameters — a reliability blocker for MCP adopters. |
| 10 | [#1326 — Option to disable all animations](https://github.com/github/copilot-cli/issues/1326) | Accessibility and performance request: animations during "thinking" cannot be turned off, impacting users on slow terminals or with motion sensitivity. 16 👍. |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. The development activity appears concentrated in the release branch (v1.0.23 → v1.0.24-0) with no public-facing PRs merged or updated in this window.

---

## 5. Feature Request Trends

1. **Granular Permissions & Command Allowlists** — The strongest emerging theme is the demand for fine-grained tool/command approval (#1973, #2484). Developers want to whitelist safe read-only operations (grep, cat, git log) without opening the door to destructive commands.

2. **Enterprise & Org-Level Token Support** — Enterprise users continue to push for org-owned fine-grained PATs (#223) and proper GHE MCP registry handling (#2498), signaling that enterprise adoption is bottlenecked on auth/policy infrastructure.

3. **Per-Project/Repository Configuration** — Repository-level MCP config (#1291), subfolder support for skills (#1632), and per-agent model selection (#1354) all reflect a desire to move from global, one-size-fits-all settings to project-scoped workflows.

4. **MCP Ecosystem Maturity** — Multiple issues (#2634, #2636, #1876, #1938) highlight that the Model Context Protocol integration is still rough: schema handling bugs, HTML stripping, deferred connection support, and policy blocking. MCP is clearly a rapidly evolving area.

5. **Premium Request Transparency & Fairness** — With the agentic mode consuming requests per tool call, users are demanding clearer accounting (#2591, #2626, #1568) and predictable consumption rates tied to model multipliers.

---

## 6. Developer Pain Points

- **Premium Request Burn Rate**: The shift to agentic sessions has created a cost predictability crisis. A single task can consume 80–100 requests, and there are reports of multiplier mismatches (being charged 3× on a 1× model). This is eroding trust in the billing model.

- **All-or-Nothing Permission Model**: The binary choice between approving every tool call or using `--allow-all` is a daily friction point for developers in interactive mode, forcing them to either slow down or accept security risk.

- **MCP Integration Reliability**: Early MCP adopters are hitting schema parsing bugs (`$ref`/`$defs` not supported), HTML content stripping, and partial tool loading — making it hard to rely on Copilot CLI as a serious MCP client.

- **Broken Self-Update**: The `copilot update` command has been broken for multiple versions now (#2583), forcing manual updates and undermining the "it just works" CLI experience.

- **Model & Configuration Defaults**: Users cannot set a default model (#1824) and the `--config-dir` flag doesn't fully override the primary config (#2197), leading to repeated per-session configuration overhead.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-04-11

## 1. Today's Highlights
Version **1.31.0** has been released, featuring Rich markdown background color leak fixes, new `ReadFile` tool capabilities (`totalLines` and tail mode), and companion dependency bumps (kosong 0.49.0). A significant focus was placed on authentication resilience, with a multi-PR effort (#1819, #1821, #1822) rolling out token refresh retries, atomic writes, and cross-process file locking to eliminate forced re-logins. Additionally, a critical context overflow bug caused by large directories was patched, and a new startup update gate was introduced to improve the user update experience.

## 2. Releases
*   **v1.31.0** ([Release Notes](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.31.0))
    *   **fix(shell):** Prevented Rich default markdown styles from leaking background colors.
    *   **feat(tools):** Added `totalLines` and tail mode to the `ReadFile` tool.

## 3. Hot Issues
1.  **[#778](https://github.com/MoonshotAI/kimi-cli/issues/778) [bug] API Error 400 on Windows/PowerShell:** An ongoing, highly commented issue where Windows users face persistent 400 invalid request errors. Highlights cross-platform shell compatibility challenges.
2.  **[#1814](https://github.com/MoonshotAI/kimi-cli/issues/1814) [enhancement] Query and Restore Sessions from CLI:** Users want a `kimi-cli --list-sessions` flag to restore contexts without launching the interactive shell first. A strong signal that power users need better CLI workflow management.
3.  **[#1786](https://github.com/MoonshotAI/kimi-cli/issues/1786) [Performance] UI Lags Minutes Behind File Writes:** For files ~800 lines long, the UI blocks for minutes even after disk I/O completes. Points to synchronous UI rendering bottlenecks during tool execution.
4.  **[#1823](https://github.com/MoonshotAI/kimi-cli/issues/1823) [Feature] Configurable Approval Request Timeout:** Users are frustrated by the hardcoded 5-minute timeout for approval requests. Long-running code reviews easily exceed this, causing auto-cancellations.
5.  **[#1830](https://github.com/MoonshotAI/kimi-cli/issues/1830) [bug] VSCode Extension Slash Skill Glitch:** In v1.31.0, users cannot trigger slash skills in the VSCode extension until they type other characters first.
6.  **[#1809](https://github.com/MoonshotAI/kimi-cli/issues/1809) [bug] Empty Context Prompts Token Limit (Closed):** Running `kimi` in massive directories (like `node_modules`) injected thousands of files into the prompt, instantly hitting the 262k token limit. *(Fixed by PR #1827)*.
7.  **[#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327) [enhancement] More Steps Per Turn By Default:** The default limit of 100 max steps is perceived as too low, especially when context usage is low (~34%), causing premature task termination.
8.  **[#1794](https://github.com/MoonshotAI/kimi-cli/issues/1794) [bug] Pointless Session Picker (Closed):** `/sessions` showed a single-item picker if only one session existed. *(Fixed to show an early return message)*.
9.  **[#1824](https://github.com/MoonshotAI/kimi-cli/issues/1824) [bug] VS and Local Web Auth Failure (Closed):** Users reported authorization failures between local web and VSCode environments, likely resolved by the recent auth token lifecycle hardening.
10. **[#1819](https://github.com/MoonshotAI/kimi-cli/issues/1819) [bug] Forced Re-logins (Closed):** Users were forced to re-authenticate 3-4 times a day due to a lack of reactive recovery when 15-minute access tokens expired. 

## 4. Key PR Progress
1.  **[#1829](https://github.com/MoonshotAI/kimi-cli/pull/1829) [CLOSED] Chore: Bump kimi-cli 1.31.0:** The official release PR bumping core versions and syncing changelogs.
2.  **[#1826](https://github.com/MoonshotAI/kimi-cli/pull/1826) [CLOSED] Feat: Blocking Update Gate:** Adds a full-screen interactive prompt on startup if a new version is cached, allowing users to instantly upgrade via `uv tool` or skip.
3.  **[#1822](https://github.com/MoonshotAI/kimi-cli/pull/1822) [CLOSED] Fix: Cross-process File Lock for Auth:** Introduces `filelock` to coordinate token refreshes among multiple concurrent instances (e.g., Terminal + VS Code + Web).
4.  **[#1821](https://github.com/MoonshotAI/kimi-cli/pull/1821) [CLOSED] Fix: Harden Token Lifecycle:** Improves OAuth resilience with dynamic token expiry thresholds, atomic file writes, and revocation cleanup.
5.  **[#1819](https://github.com/MoonshotAI/kimi-cli/pull/1819) [CLOSED] Fix: Retry with Token Refresh:** Resolves frequent "Authorization failed" errors by intercepting 401s and proactively refreshing the token before failing.
6.  **[#1827](https://github.com/MoonshotAI/kimi-cli/pull/1827) [CLOSED] Fix: Cap `list_directory` to 500 Entries:** Solves the token limit crash by truncating directory outputs over 500 items, guiding the LLM to use `Glob` instead.
7.  **[#1831](https://github.com/MoonshotAI/kimi-cli/pull/1831) [CLOSED] Fix: Include Lazy CLI Subcommands:** Ensures PyInstaller bundles lazy-loaded CLI subcommands, fixing missing commands in packaged environments.
8.  **[#1832](https://github.com/MoonshotAI/kimi-cli/pull/1832) [OPEN] Fix: UserPromptSubmit Hook Bug:** Fixes a bug where third-party hooks received an empty prompt when `user_input` was passed as `list[ContentPart]`.
9.  **[#1789](https://github.com/MoonshotAI/kimi-cli/pull/1789) [OPEN] Feat: Render Mermaid Diagrams:** Upgrades the Web UI to natively render `mermaid` fenced code blocks into flowcharts/diagrams.
10. **[#1790](https://github.com/MoonshotAI/kimi-cli/pull/1790) [OPEN] Feat: Prefer `pwsh` over `powershell.exe`:** Modernizes the Windows shell tool to prioritize PowerShell 7 (`pwsh`) over legacy Windows PowerShell, improving compatibility.

## 5. Feature Request Trends
*   **External CLI Access to Sessions:** Users want to bypass the interactive shell to query (`--list-sessions`) and resume sessions directly from the terminal prompt.
*   **Flexible Autonomous Execution Limits:** A recurring demand to either raise the default max steps (currently 100) or make it dynamic based on context window capacity, allowing agents to finish complex tasks without manual tweaking.
*   **Advanced Web & UI Capabilities:** Expanding the web interface to match CLI autonomy (YOLO mode for web) and improving visualization (Mermaid diagram rendering).
*   **Timeout Customization:** Requests for user-configurable timeouts across the board, specifically for tool approval requests.

## 6. Developer Pain Points
*   **Authentication Instability:** Frequent forced logouts and cross-instance auth conflicts have been a major headache, though the triad of merged auth PRs (#1819, #1821, #1822) should provide significant relief.
*   **Context Bloat & UI Blockages:** Developers working in large repositories or editing long files experience severe performance degradation. The failure to truncate large directory trees previously consumed entire context windows, while heavy file writes cause the TUI to freeze.
*   **Windows Ecosystem Friction:** Windows users continue to face unique issues, ranging from legacy PowerShell quirks to distinct API 400 errors and extension UI glitches.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-11

## 1. Today's Highlights

OpenCode shipped **v1.4.3**, bringing OAuth authentication fixes for OpenAI accounts, improved Bash command interruption handling, and new fast mode variants for Claude and GPT models. The community is heavily focused on **local model compatibility**, with multiple high-engagement issues around Gemma 4 and Kimi k2.5 tool calling failures. On the architecture front, contributor **@kitlangton** is driving a significant refactor converting core tools to the `Tool.defineEffect` pattern, which promises better type safety and service injection across the codebase.

---

## 2. Releases

### [v1.4.3](https://github.com/anomalyco/opencode/releases/tag/v1.4.3)

- **Core:** Fixed `agent create` for OpenAI accounts authenticated with OAuth. Interrupted Bash commands now preserve their final output and truncation details instead of ending as aborted. Added fast mode variants for supported Claude and GPT models.
- **TUI:** Restored the hidden session scrollbar.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#20650 — Kimi k2.5 tool calling failures](https://github.com/anomalyco/opencode/issues/20650) | 43 comments. JSON parsing errors in bash tool calls make Kimi k2.5 unusable for agentic workflows. High engagement signals broad demand for Moonshot's model support. |
| 2 | [#4406 — Why must Read tool run before Edit?](https://github.com/anomalyco/opencode/issues/4406) | 33 comments, tagged `good first issue`. Questions a fundamental tool constraint — if AI already created a file and its content is in context, requiring an extra Read wastes tokens. Philosophical UX debate. |
| 3 | [#13984 — Cannot copy/paste in CLI](https://github.com/anomalyco/opencode/issues/13984) | 21 comments, 👍 8. Clipboard integration is broken — "copied to clipboard" appears but Ctrl+V yields nothing. Core usability blocker affecting daily workflows. |
| 4 | [#6209 — Cannot scroll in iTerm2](https://github.com/anomalyco/opencode/issues/6209) | 20 comments, 👍 17. TUI scrolling only moves the input box, not output. Affects all iTerm2 users — one of the most-upvoted TUI bugs. |
| 5 | [#11176 — Official VS Code extension](https://github.com/anomalyco/opencode/issues/11176) | 12 comments, 👍 **37**. Highest-upvoted feature request. Community wants OpenCode as a native VS Code extension, not just a terminal tool. |
| 6 | [#21034 — Gemma 4 26b/31b tool loops](https://github.com/anomalyco/opencode/issues/21034) | 11 comments, 👍 13. Even with latest tokenizer fixes and patched engines, Gemma 4 enters infinite tool loops. Highlights fragility of local model tool calling. |
| 7 | [#20995 — Gemma 4 streaming tool_calls via Ollama](https://github.com/anomalyco/opencode/issues/20995) | 10 comments, 👍 **27**. Ollama's OpenAI-compatible API returns tool_calls correctly but OpenCode doesn't recognize them in streaming mode. Second most-upvoted issue this period. |
| 8 | [#17516 — `opencode run` hangs indefinitely](https://github.com/anomalyco/opencode/issues/17516) | 8 comments. Non-interactive mode never exits after completing tool calls, requiring manual `kill`. Blocks CI/CD and automation use cases. |
| 9 | [#21793 — Permission skill patterns not enforced](https://github.com/anomalyco/opencode/issues/21793) | 4 comments. `permission.skill` deny patterns like `lark-*` don't prevent skills from being exposed to the model — a security concern for enterprise deployments. |
| 10 | [#21908 — PDF forwarded to models without PDF support](https://github.com/anomalyco/opencode/issues/21908) | 5 comments. Read tool attaches valid PDFs, then `MessageV2.toModelMessagesEffect()` forwards them to models that don't support `input.pdf`, producing bogus "badly formatted" errors. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#21948 — Break SessionPrompt/TaskTool cycle via ctx injection](https://github.com/anomalyco/opencode/pull/21948) | **Architectural refactor** by @kitlangton. Eliminates the circular dependency `SessionPrompt → ToolRegistry → TaskTool → SessionPrompt` by injecting prompt operations via `ctx.extra.promptOps`. Major step toward cleaner modularity. |
| 2 | [#21907 — Free model resolution](https://github.com/anomalyco/opencode/pull/21907) | Adds `Provider.resolveSelection()` so `--model free` resolves to a random zero-cost model. Combined with `--variant any`, enables cost-free onboarding. |
| 3 | [#21866 — Harden plan mode](https://github.com/anomalyco/opencode/pull/21866) | Three fixes: denies `plan_exit`/`plan_enter` in subagent sessions, adds plan preview, and guards against empty plans. Prevents subagents from escaping plan constraints. |
| 4 | [#21831 — Restore type safety on streaming chunk schema](https://github.com/anomalyco/opencode/pull/21831) | Addresses a long-standing TODO where the Copilot chat streaming transform lost type safety on the `Chunk` type. Proper Zod schema validation throughout the pipeline. |
| 5 | [#21943 — Harden Kimi structured output and replay](https://github.com/anomalyco/opencode/pull/21943) | Fixes two Kimi protocol mismatches: preserves `reasoning_content` in non-streaming mode and handles numeric tool call IDs. Directly addresses issues [#15197](https://github.com/anomalyco/opencode/issues/15197) and [#15226](https://github.com/anomalyco/opencode/issues/15226). |
| 6 | [#21937 — Convert grep tool to Tool.defineEffect](https://github.com/anomalyco/opencode/pull/21937) | Part of @kitlangton's Effect migration series. Replaces `Process.spawn` with `ChildProcessSpawner` service and uses `assertExternalDirectoryEffect`. Sets the pattern for remaining tool conversions. |
| 7 | [#21756 — Add env parameter to bash tool](https://github.com/anomalyco/opencode/pull/21756) | New `env` parameter on the bash tool for passing environment variables to spawned processes. Critical for plugins that need isolated or configured execution environments. |
| 8 | [#21453 — Fix watcher ignored paths and worktree git dirs](https://github.com/anomalyco/opencode/pull/21453) | Fixes review panel flickering caused by the experimental file watcher publishing events for ignored paths. Also handles git worktree directories correctly. |
| 9 | [#18767 — Mobile touch optimization](https://github.com/anomalyco/opencode/pull/18767) | Optimizes the desktop/web app for mobile and touch devices. Addresses a growing use case as developers use tablets for code review. |
| 10 | [#15412 — Surface agent and parentAgent in plugin hooks](https://github.com/anomalyco/opencode/pull/15412) | Adds `parentAgent` to plugin hook inputs so plugins can access subagent context in `tool.execute.before`/`after` hooks. Enables more sophisticated plugin orchestration. |

---

## 5. Feature Request Trends

1. **IDE integration** — The single most-upvoted request is an official VS Code extension ([#11176](https://github.com/anomalyco/opencode/issues/11176), 👍 37). Users want OpenCode inside their existing editor workflow, not as a separate terminal.

2. **Multi-agent orchestration** ([#17994](https://github.com/anomalyco/opencode/issues/17994)) — Requests for running teams of coding agents in isolated workspaces, similar to Claude Code's multi-agent patterns.

3. **WSL backend for Desktop** ([#5635](https://github.com/anomalyco/opencode/issues/5635), 👍 33) — Windows developers want the Tauri desktop app to spawn the OpenCode backend inside WSL rather than native Windows.

4. **Context panel transparency** ([#20631](https://github.com/anomalyco/opencode/issues/20631)) — Finer-grained context breakdown showing token usage by source (system prompt, files, tools) rather than coarse "User/Assistant/Other."

5. **Default support for newer models** ([#21883](https://github.com/anomalyco/opencode/issues/21883)) — Community wants GLM-5.1, MiniMax M2.7, and other emerging agentic models supported out of the box.

---

## 6. Developer Pain Points

- **Local/开源 model tool calling is fragile.** The dominant pain point this cycle is Gemma 4 and Kimi k2.5 tool calling failures across Ollama, LM Studio, llama.cpp, and NVIDIA NIM. Issues [#21034](https://github.com/anomalyco/opencode/issues/21034), [#20995](https://github.com/anomalyco/opencode/issues/20995), [#20908](https://github.com/anomalyco/opencode/issues/20908), and [#21746](https://github.com/anomalyco/opencode/issues/21746) all describe variants of the same problem: models return structurally valid tool calls that OpenCode can't parse, particularly around streaming, numeric IDs, and malformed JSON.

- **Clipboard and TUI interaction bugs.** Copy/paste being broken ([#13984](https://github.com/anomalyco/opencode/issues/13984)) and scrolling not working in iTerm2 ([#6209](https://github.com/anomalyco/opencode/issues/6209)) are basic UX regressions that erode trust. The Windows TUI also has window-resize crashes ([#9790](https://github.com/anomalyco/opencode/issues/9790)).

- **Non-interactive mode reliability.** `opencode run` hanging after completion ([#17516](https://github.com/anomalyco/opencode/issues/17516)) and SDK `server.close()` leaving orphan processes ([#21628](https://github.com/anomalyco/opencode/issues/21628)) make automation and CI pipelines unreliable.

- **Permission and security gaps.** Skill deny patterns being ignored ([#21793](https://github.com/anomalyco/opencode/issues/21793)) and PDFs forwarded to incompatible models ([#21908](https://github.com/anomalyco/opencode/issues/21908)) suggest the permission and message pipeline need hardening for production use.

- **Formatter override behavior.** Disabling `formatter.ruff` doesn't stop auto-formatting because OpenCode falls back to `uv format` ([#21864](https://github.com/anomalyco/opencode/issues/21864)). Users expect config entries to be authoritative, not suggestions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-11

## 1. Today's Highlights
Qwen Code shipped **v0.14.3**, focusing on critical TUI stability improvements—including fixes for a follow-up tool call UI leak and an input race condition. The community remains highly engaged around Terminal UI (TUI) flickering and rendering issues, with several substantial PRs submitted today to address screen stuttering, markdown rendering, and scrolling limitations. Meanwhile, the feature request pipeline is bustling with asks for better session management, notification hooks, and custom model rules.

## 2. Releases

### v0.14.3 (Stable, Preview, and Nightly builds released)
The team released three versions today (v0.14.3, v0.14.3-preview.0, and v0.14.2-nightly.20260410) containing the following targeted fixes:
* **fix(ui):** Removed dead `dirs` state and unused hook parameter from `InputPrompt` ([PR #2891](https://github.com/QwenLM/qwen-code/pull/2891) by @chinesepowered).
* **fix(followup):** Prevented tool call UI leak and fixed an "Enter accept buffer" race condition ([PR #2872](https://github.com/QwenLM/qwen-code/pull/2872) by @wenshao).

*(Note: A release workflow failure for v0.14.3 was also logged earlier in the day at [Issue #3113](https://github.com/QwenLM/qwen-code/issues/3113) but was subsequently resolved and published).*

## 3. Hot Issues

1. **[OPEN] Shift+Enter does not insert a newline** ([#241](https://github.com/QwenLM/qwen-code/issues/241))
   * **Why it matters:** A fundamental UX friction point. Users expect `Shift+Enter` to create a newline in the CLI, but it currently sends the message. This 8-month-old issue continues to gain traction (5 upvotes).
2. **[OPEN] TUI Flickering during parallel sub-Agent execution** ([#2928](https://github.com/QwenLM/qwen-code/issues/2928))
   * **Why it matters:** Running parallel agents causes severe UI stuttering on Windows, breaking the developer's focus during complex workflows.
3. **[OPEN] TUI performance and UX improvements** ([#2748](https://github.com/QwenLM/qwen-code/issues/2748))
   * **Why it matters:** A central tracker for core UI pain points, including 3-5 second slow startups when MCP servers are configured and general view-switching lag.
4. **[OPEN] Session scrolling goes out of control in long contexts** ([#2950](https://github.com/QwenLM/qwen-code/issues/2950))
   * **Why it matters:** In lengthy sessions, the TUI auto-scrolls up and down uncontrollably, making the interface completely unusable until the user intervenes.
5. **[OPEN] `run_shell_command` intermittently denied by permission rules** ([#3073](https://github.com/QwenLM/qwen-code/issues/3073))
   * **Why it matters:** Standard, non-destructive commands are unpredictably blocked during normal workflows, severely breaking developer momentum.
6. **[OPEN] Persistent permission prompts despite "Always Allow"** ([#2723](https://github.com/QwenLM/qwen-code/issues/2723))
   * **Why it matters:** Related to the above, the CLI fails to remember permission settings (MCP tools, shell commands), forcing users to repeatedly approve the same actions.
7. **[OPEN] Context usage shows wrong value after resuming compressed session** ([#3107](https://github.com/QwenLM/qwen-code/issues/3107))
   * **Why it matters:** Token counts display incorrectly when resuming a session that was previously compressed using `/compress`, misleading users about their actual context window limits.
8. **[OPEN] ACP / VS Code IDE Companion hook support is incomplete** ([#3108](https://github.com/QwenLM/qwen-code/issues/3108))
   * **Why it matters:** VS Code integration hooks (`PreToolUse`, `PostToolUse`, etc.) are not wired into the ACP execution path, limiting IDE companion capabilities.
9. **[OPEN] US user verification email not received** ([#3121](https://github.com/QwenLM/qwen-code/issues/3121))
   * **Why it matters:** New international users are completely blocked from adopting the CLI because OAuth account verification emails are failing to deliver.
10. **[OPEN] WebFetch performance is too slow** ([#3114](https://github.com/QwenLM/qwen-code/issues/3114))
    * **Why it matters:** Fetching web context via the tool takes up to 3 minutes for two pages, significantly lagging behind competitor agent speeds and stalling code generation.

## 4. Key PR Progress

1. **fix(ui): add SlicingMaxSizedBox to prevent terminal flickering** ([PR #3013](https://github.com/QwenLM/qwen-code/pull/3013))
   * Addresses the severe UI stuttering by chunking large tool outputs (e.g., `npm install` logs) instead of rendering them all at once.
2. **fix(cli): support Shift+Enter for newline insertion across terminals** ([PR #3103](https://github.com/QwenLM/qwen-code/pull/3103))
   * A highly anticipated fix for Issue #241, implementing three complementary mechanisms to reliably catch `Shift+Enter` across different terminal emulators.
3. **feat: add `/chat` command for named session management** ([PR #3105](https://github.com/QwenLM/qwen-code/pull/3105))
   * Introduces `/chat save`, `list`, `resume`, and `delete` to allow users to easily manage and navigate multiple conversational contexts.
4. **feat: add current folder and branch name in cli footer** ([PR #3101](https://github.com/QwenLM/qwen-code/pull/3101))
   * A quality-of-life update that displays the current working directory and Git branch at the bottom of the CLI, crucial for developers running multiple agent windows.
5. **feat: replace text input with model picker for Fast Model in `/settings`** ([PR #3120](https://github.com/QwenLM/qwen-code/pull/3120))
   * Replaces raw text ID input with a browsable model picker dialog, improving discoverability and preventing typos.
6. **feat: add commit attribution with per-file AI contribution tracking** ([PR #3115](https://github.com/QwenLM/qwen-code/pull/3115))
   * Introduces git trailer headers to distinguish AI-generated code from human code, a massive boon for enterprise compliance and open-source audits.
7. **fix: handle empty OAuth refresh response body** ([PR #3123](https://github.com/QwenLM/qwen-code/pull/3123))
   * Prevents the CLI from crashing with a `SyntaxError` when auth tokens are stale and the server returns an empty JSON body.
8. **feat(core): add run_in_background support for Agent tool** ([PR #3076](https://github.com/QwenLM/qwen-code/pull/3076))
   * Enables sub-agents to run asynchronously. Parent agents can now continue working and be notified when the background task finishes.
9. **fix(cli): improve markdown table rendering in terminal** ([PR #2914](https://github.com/QwenLM/qwen-code/pull/2914))
   * Fixes broken markdown tables in the CLI by correctly calculating column widths for CJK characters, ANSI colors, and implementing proper text wrapping.
10. **fix: use latest assistant token count on resume instead of stale compression checkpoint** ([PR #3109](https://github.com/QwenLM/qwen-code/pull/3109))
    * A one-line fix resolving Issue #3107, ensuring accurate token count display when resuming compressed sessions.

## 5. Feature Request Trends

* **Workflow Notifications & Alerting:** Strong demand for audio/visual cues when the agent finishes a task or requires approval ([#3106](https://github.com/QwenLM/qwen-code/issues/3106), [#2922](https://github.com/QwenLM/qwen-code/issues/2922)), allowing developers to context-switch safely during long automated builds or tests.
* **Context & Session Management:** Users want more control over their history. Requests include better identification for resumed sessions ([#3099](https://github.com/QwenLM/qwen-code/issues/3099)), prompt enhancement based on context ([#3059](https://github.com/QwenLM/qwen-code/issues/3059)), and persistent named sessions.
* **Customizable Rules & Persona:** Developers want to constrain the model's behavior locally, such as forcing specific coding styles or locking the output to a certain natural language ([#3117](https://github.com/QwenLM/qwen-code/issues/3117)).
* **Alternative Inputs:** Users are requesting voice input support (`/voice`) to reduce keyboard fatigue during long pair-programming sessions with the AI ([#3110](https://github.com/QwenLM/qwen-code/issues/3110)).

## 6. Developer Pain Points

* **Terminal UI Flickering & Rendering:** The most glaring issue across the board. Whether running parallel agents ([#2928](https://github.com/QwenLM/qwen-code/issues/2928)), long contexts ([#2950](https://github.com/QwenLM/qwen-code/issues/2950)), or switching windows ([#3118](https://github.com/QwenLM/qwen-code/issues/3118)), the TUI struggles with visual stability.
* **Unreliable Permissions State:** The system frequently forgets "Always Allow" preferences ([#2723](https://github.com/QwenLM/qwen-code/issues/2723)) or intermittently denies standard shell commands ([#3073](https://github.com/QwenLM/zwen-code/issues/3073)), breaking flow state.
* **Scrolling Limitations:** Developers using WSL or standard terminals cannot scroll back through long AI generations ([#3097](https://github.com/QwenLM/qwen-code/issues/3097)), losing access to earlier logs and code generations.
* **Slow Web Fetching:** The `WebFetch` tool takes minutes to scrape simple web pages, severely bottlenecking research-intensive coding tasks compared to competitor tools ([#3114](https://github.com/QwenLM/qwen-code/issues/3114)).

</details>