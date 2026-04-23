# AI CLI Tools Community Digest 2026-03-30

> Generated: 2026-03-29 22:03 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Report
**Analysis Date:** 2026-03-30

---

## 1. Ecosystem Overview

The AI CLI tooling landscape is maturing rapidly, shifting from single-user chat interfaces toward complex, multi-agent collaboration systems. However, this rapid evolution is creating significant stability challenges: all major tools are grappling with critical bugs related to token consumption, context management, and data integrity. There is a clear industry-wide pivot toward "agentic architectures" (sub-agents, swarms, teams) and "Spec-Driven Development," moving beyond simple prompt-response patterns to structured, persistent workflows. Simultaneously, the expansion of context windows to 1M+ tokens has introduced new quality-versus-quantity trade-offs, with users reporting intelligence regressions and context bloat.

---

## 2. Activity Comparison

| Tool | Releases | Hot Issues (Critical/High) | Key PRs | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.87 (Cowork fix) | 10+ (Usage limits, Data loss) | 10 | Session continuity, Multi-agent teams, Plugin ecosystem |
| **OpenAI Codex** | None | 10 | 10 | Telemetry, Architecture refactoring, Remote control |
| **Gemini CLI** | None | 10 | 10 | Security (Command Injection), SDD architecture, AST-aware tools |
| **GitHub Copilot CLI** | None | 10 | 2 (Merged) | Cross-platform stability crashes, Session management |
| **Kimi Code CLI** | None | 5 | 4 | Granular permissions, Agent Swarm architecture, UI for reasoning |
| **OpenCode** | v1.3.5, v1.3.6 | 10 | 10+ | AI SDK v6 migration fixes, Windows/PowerShell support |
| **Qwen Code** | v0.13.1-nightly | 10 | 10 | Windows compatibility, Skill testing, IDE integration |

---

## 3. Shared Feature Directions

The following requirements are appearing across multiple tool communities, indicating industry-wide convergence:

*   **Granular Permission Controls (Safety):**
    *   **Tools:** Claude Code, Kimi Code CLI, Gemini CLI.
    *   **Need:** Users are rejecting binary "YOLO/auto-approve" modes. There is a strong demand for trusted lists and granular rules to allow safe operations (e.g., reading files) while guarding sensitive actions (e.g., git push, deletions).

*   **Advanced Multi-Agent Architectures:**
    *   **Tools:** Claude Code, Kimi Code CLI, OpenAI Codex, Qwen Code.
    *   **Need:** Moving beyond simple sub-agent delegation toward "Agent Teams" or "Swarms" where agents have peer-to-peer collaboration capabilities, separate working directories, and shared context.

*   **Session Persistence & Memory:**
    *   **Tools:** Claude Code, GitHub Copilot CLI, OpenCode.
    *   **Need:** Solving the "AI Groundhog Day" problem where agents lose context between sessions. Users want persistent project memory and the ability to resume complex workflows without re-doing 50-75% of the work.

*   **Cross-Platform Stability (Windows/ARM64):**
    *   **Tools:** Claude Code, GitHub Copilot CLI, Qwen Code, OpenCode.
    *   **Need:** Windows and WSL/ARM64 users face disproportionate instability, including shell execution failures, path handling errors, and memory crashes. First-class Windows support is a major gap.

*   **Token Transparency & Cost Control:**
    *   **Tools:** Claude Code, OpenAI Codex, OpenCode.
    *   **Need:** "Bill shock" and rapid quota depletion are rampant. Users require real-time visibility into sub-agent costs, "burn rate" metrics, and backoff policies to prevent accidental limit exhaustion.

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Enterprise Collaboration** | Power users, Teams | Robust plugin system, "Cowork" dispatch features, focus on multi-repo workflows. |
| **OpenAI Codex** | **Observability & Architecture** | Backend developers | Heavy Rust-based refactoring, telemetry-first approach, focus on remote control/orchestration. |
| **Gemini CLI** | **Reliability & Security** | Enterprise, Security-conscious | "Spec-Driven Development" (SDD), AST-aware code mapping, strict sandboxing. |
| **GitHub Copilot CLI** | **IDE Integration** | VS Code/GitHub ecosystem users | Tightly coupled with GitHub ecosystem; currently struggling with standalone CLI stability. |
| **Kimi Code CLI** | **Architectural Innovation** | AI-native developers | Pushing "Agent Swarm" architectures and advanced tracing/visualization for reasoning models. |
| **OpenCode** | **Extensibility & Local Support** | Open-source contributors | AI SDK v6 migration, dynamic model discovery, focus on local providers (LM Studio, etc.). |
| **Qwen Code** | **Enterprise Features** | Enterprise teams | Focus on skill testing frameworks, project-level analytics, and IDE companions. |

---

## 5. Community Momentum & Maturity

*   **High Momentum, High Churn:** **Claude Code** and **OpenCode** show the highest community engagement and release velocity. They are iterating rapidly on agentic features and plugin ecosystems, but users are experiencing significant churn from bugs (data loss, token counting).
*   **Architectural Pivot:** **Gemini CLI** and **OpenAI Codex** are in deep architectural refactoring phases (SDD, codex-tools extraction). Activity is high in PRs, but user-facing releases are paused, indicating a "building phase" rather than a "shipping phase."
*   **Stability Crisis:** **GitHub Copilot CLI** and **Qwen Code** are currently facing critical platform stability issues (segfaults, shell failures). Community sentiment is focused on "fixing basics" rather than new features.
*   **Emerging Player:** **Kimi Code CLI** is driving unique architectural conversations (Agent Swarms) and developer tooling (network-accessible tracing), positioning itself as an innovator in the open-source space.

---

## 6. Trend Signals

1.  **Context Window Expansion Has Hidden Costs:** The jump to 1M+ token context windows (Claude Code, etc.) has introduced "intelligence regression" and "context bloat." Users report that models lose focus or reasoning sharpness when context is too large. **Takeaway:** Tools need better context distillation and "forgetting" mechanisms, not just larger windows.

2.  **"YOLO Mode" is Dying:** The industry is moving away from "run without supervision" toward **granular, auditable permissions**. Enterprise adoption requires the ability to define precise safety boundaries for autonomous agents.

3.  **The "Groundhog Day" Problem is a Major Blocker:** Session continuity is the single most requested feature across tools. **Takeaway:** Persistent project memory (storing state in `.tracker/` or similar) will be a standard requirement for any competitive AI coding tool by Q3 2026.

4.  **Reasoning Models Require New UI Paradigms:** With the rise of "thinking" models (e.g., Kimi K2, Claude Thinking), verbose output is cluttering terminals. **Takeaway:** Tools must implement "quiet modes" or collapsible thinking blocks to maintain usability while retaining reasoning quality.

5.  **Windows is a Second-Class Citizen:** Nearly every tool reported significant Windows/WSL/ARM64 bugs. **Takeaway:** There is a substantial market opportunity for a tool that prioritizes first-class, native Windows support (e.g., via PowerShell, not just Git Bash).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills | **Snapshot:** 2026-03-30

---

## 1. Top Skills Ranking

The following Skills have garnered the most community attention through active discussion and iteration:

| Rank | Skill | Author | Status | Focus |
|------|-------|--------|--------|-------|
| 1 | [**document-typography**](https://github.com/anthropics/skills/pull/514) | PGTBoos | OPEN | Document quality control |
| 2 | [**skill-quality-analyzer & skill-security-analyzer**](https://github.com/anthropics/skills/pull/83) | eovideu | OPEN | Meta/skills analysis |
| 3 | [**frontend-design**](https://github.com/anthropics/skills/pull/210) | justinwetch | OPEN | UI/UX design |
| 4 | [**ODT (OpenDocument)**](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | OPEN | Document format |
| 5 | [**system-documentation & flowcharts**](https://github.com/anthropics/skills/pull/95) | TylerALofall | OPEN | Architecture docs |
| 6 | [**roadmap-pilot**](https://github.com/anthropics/skills/pull/536) | antconsales | OPEN | Codebase cleanup |
| 7 | [**shodh-memory**](https://github.com/anthropics/skills/pull/154) | varun29ankuS | OPEN | Persistent context |
| 8 | [**plan-task**](https://github.com/anthropics/skills/pull/522) | LevNas | OPEN | Task persistence |

**Notable Highlights:**
- **document-typography (#514)** addresses a universal pain point—orphan lines, widow paragraphs, and numbering misalignment in AI-generated documents. Its broad applicability has driven significant attention.
- **Meta-skills (#83)** for quality and security analysis of Skills themselves represent a maturing ecosystem—tools to evaluate tools.
- **frontend-design (#210)** focuses on making instructions actionable within single conversations, addressing token-efficiency concerns raised in Issue #202.
- **roadmap-pilot (#536)** and **plan-task (#522)** both tackle session continuity—Claude Code's inability to persist context across sessions.

---

## 2. Community Demand Trends

Analysis of Issues reveals concentrated demand in these directions:

| Trend | Evidence | Demand Level |
|-------|----------|--------------|
| **Session/Memory Persistence** | Issues #154, #522, #536 | 🔴 High |
| **Enterprise Features** | Issues #228 (org-wide sharing), #29 (Bedrock support) | 🔴 High |
| **Security & Governance** | Issues #492 (trust boundaries), #412 (agent governance) | 🟠 Medium-High |
| **API/Platform Stability** | Issues #406, #403, #389, #61 (500 errors, upload failures) | 🔴 High |
| **MCP Integration** | Issue #16 (expose Skills as MCPs) | 🟠 Medium |
| **Skill-creator Improvements** | Issues #202, #532, #556 | 🟠 Medium |

**Key Insight:** The community is pushing for **production-ready infrastructure**—reliable APIs, enterprise deployment options, and persistent memory—beyond individual skill functionality.

---

## 3. High-Potential Pending Skills

These well-developed PRs show active maintenance and strong community interest, suggesting imminent merge potential:

| Skill | PR | Value Proposition | Maturity Indicators |
|-------|-----|-------------------|---------------------|
| **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | Enterprise ITSM/ITOM coverage | Broad scope, active updates (Mar 28) |
| **8-Skill Development Series** | [#288](https://github.com/anthropics/skills/pull/288) | Tutorial-builder, a11y-auditor, changelog-curator, etc. | Comprehensive, recently updated (Mar 26) |
| **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | Predictive analytics on SAP data | Enterprise-focused, active discussion |
| **x402 BSV Micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Natural language AI service payments | Novel use case |
| **Masonry AI Media Generation** | [#335](https://github.com/anthropics/skills/pull/335) | Image/video generation (Imagen 3.0, Veo 3.1) | High-demand capability |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent, cross-session memory and enterprise-grade deployment capabilities—fundamental infrastructure that would transform Claude Code from a per-session tool into a continuous development partner.**

---

## Appendix: Critical Issues Requiring Attention

| Issue | Impact | 👍 |
|-------|--------|-----|
| [#556](https://github.com/anthropics/skills/issues/556) - Skills never trigger via `claude -p` | Evaluation framework broken | 6 |
| [#189](https://github.com/anthropics/skills/issues/189) - Duplicate skills from plugins | Context window pollution | 6 |
| [#492](https://github.com/anthropics/skills/issues/492) - Namespace trust boundary abuse | Security vulnerability | 2 |
| [#406](https://github.com/anthropics/skills/issues/403) - Skill upload 500 errors | Platform unusable | 4 |

---

# Claude Code Community Digest
**Date:** 2026-03-30

---

## Today's Highlights

Version **v2.1.87** shipped with a critical fix for Cowork Dispatch message delivery failures. The community remains focused on **token consumption concerns**, with multiple high-engagement issues reporting unexpectedly rapid quota depletion on Max subscriptions. A new wave of **session continuity and data-loss bugs** has emerged, including a critical report of Claude Code silently running `git reset --hard` every 10 minutes.

---

## Releases

### v2.1.87
- **Fixed:** Messages in Cowork Dispatch not getting delivered — a critical regression affecting the dispatch/collaboration messaging system.

---

## Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | **Instantly hitting usage limits with Max subscription** | The most-engaged issue (1,369 comments, 610 👍). Users report hitting rate limits immediately despite paid Max subscriptions. Ongoing since Jan 2026 with no resolution. |
| [#24964](https://github.com/anthropics/claude-code/issues/24964) | **Cowork: Folder picker rejects folders outside home directory** | Blocks symlinks/junctions and external directories — a significant limitation for power users with monorepos or linked project structures (122 comments). |
| [#29579](https://github.com/anthropics/claude-code/issues/29579) | **Rate limit reached despite Claude Max and only 16% usage** | Another subscription/quota mismatch report. Users seeing rate limits when dashboard shows ample remaining capacity (115 comments). |
| [#24055](https://github.com/anthropics/claude-code/issues/24055) | **Response exceeded 32000 output token maximum** | Long-running tasks hitting output token ceiling unexpectedly. Affects complex code generation workflows (114 comments). |
| [#38239](https://github.com/anthropics/claude-code/issues/38239) | **Extremely rapid token consumption** | New report (Mar 24) of token calculation/quota bugs. Users experiencing 5-hour limits in "a few prompts" (23 comments, trending). |
| [#40697](https://github.com/anthropics/claude-code/issues/40697) | **Claude Code runs git reset --hard every 10 minutes** | **Critical data-loss bug.** Internal checkpoint system destroys uncommitted changes. Confirmed via git reflog. Closed quickly but severity demands attention. |
| [#40547](https://github.com/anthropics/claude-code/issues/40547) | **Intelligence regression since 200K→1M context upgrade** | Users report noticeable quality drop after context window expansion. Suggests potential model behavior changes at scale. |
| [#39961](https://github.com/anthropics/claude-code/issues/39961) | **"AI Groundhog Day" — agent redoes completed work** | Session continuity failure causing 50-75% redundant work. No mechanism to carry forward prior session accomplishments. |
| [#39523](https://github.com/anthropics/claude-code/issues/39523) | **Bypass permissions mode fundamentally broken** | META issue tracking 9 months of `bypassPermissions` failures with 12+ duplicates. Core automation feature non-functional. |
| [#23669](https://github.com/anthropics/claude-code/issues/23669) | **Agent Teams: per-teammate working directory support** | Feature request for multi-repo workflows. Teammates currently inherit lead's directory, blocking parallel work across repositories. |

---

## Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#40572](https://github.com/anthropics/claude-code/pull/40572) | **Global Hookify rules support** | Load Hookify rules from `~/.claude/` globally alongside project configs. Enables cross-project rule consistency. |
| [#40594](https://github.com/anthropics/claude-code/pull/40594) | **test-writer plugin** | Automates comprehensive test generation with 5-phase workflow: detect framework, analyze gaps, plan, write, fix-until-green. |
| [#40586](https://github.com/anthropics/claude-code/pull/40586) | **session-manager plugin** | Adds `/sessions` command to list saved sessions for current working directory with resume instructions. |
| [#35864](https://github.com/anthropics/claude-code/pull/35864) | **worktree-guardian plugin** | Detects orphaned agent worktrees with unsaved work. Prevents silent data loss during cleanup with `/worktree-audit` command. |
| [#39148](https://github.com/anthropics/claude-code/pull/39148) | **preserve-session plugin** | Path-independent session history using UUID registry. Survives directory renames/moves. |
| [#29835](https://github.com/anthropics/claude-code/pull/29835) | **agents-md plugin** | AGENTS.md fallback support when no CLAUDE.md present. Addresses highly-upvoted compatibility request. |
| [#40456](https://github.com/anthropics/claude-code/pull/40556) | **Fix: session resume crash with Edit tool** | Null guard in `renderToolResultMessage` prevents crash when `replace_all: true` with empty `new_string`. |
| [#40454](https://github.com/anthropics/claude-code/pull/40454) | **Fix: preserve labels on duplicate auto-close** | Auto-close script was replacing all labels instead of appending "duplicate". |
| [#40208](https://github.com/anthropics/claude-code/pull/40208) | **Fix: plugin hook script execute permissions** | Adds `chmod +x` post-install to fix "SessionStart:resume hook error" from missing execute bits. |
| [#36433](https://github.com/anthropics/claude-code/pull/36433) | **agent-wallet plugin** | Non-custodial wallet capabilities for AI agents. Enables autonomous payment handling via agent-wallet-sdk. |

---

## Feature Request Trends

1. **Multi-account/profile management** — [#18435](https://github.com/anthropics/claude-code/issues/18435) (266 👍) requests easy switching between Claude accounts within Desktop app. Strong demand from users separating work/personal contexts.

2. **Session continuity & memory** — "AI Groundhog Day" issue [#39961](https://github.com/anthropics/claude-code/issues/39961) highlights need for persistent context across sessions. Users wasting 50-75% of sessions re-doing work.

3. **Multi-repo agent teams** — [#23669](https://github.com/anthropics/claude-code/issues/23669) requests per-teammate working directories, CLAUDE.md, and MCP configs for parallel work across related repositories.

4. **Output suppression for loops** — [#40635](https://github.com/anthropics/claude-code/issues/40635) requests quieter `/loop` output for polling scenarios where results are unchanged.

---

## Developer Pain Points

| Category | Summary |
|----------|---------|
| **Token/Quota System** | Widespread reports of rate limits hitting despite low dashboard usage, rapid consumption after renewal, and Max subscription holders blocked instantly. Appears to be systemic quota calculation issue. |
| **Data Loss** | Two critical reports: `git reset --hard` auto-destruction (#40697) and worktree cleanup silently deleting uncommitted work. Users losing significant code. |
| **Permissions Bypass** | 9-month-old bug (#39523) where `bypassPermissions` mode doesn't actually bypass permissions. Blocks automation workflows entirely. |
| **Cowork/Dispatch Reliability** | Multiple issues around session collisions, message loss, folder restrictions, and VM startup failures on Windows ARM64. Collaboration feature unstable across platforms. |
| **Context Window Trade-offs** | Report [#40547](https://github.com/anthropics/claude-code/issues/40547) suggests 1M context expansion came with intelligence regression. Quality vs. quantity tension. |
| **Windows Platform Support** | Disproportionate bug reports from Windows users (ARM64, WSL, path handling, service startup). Platform parity lagging behind macOS. |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-30

## 1. Today's Highlights
No new software releases were published today. The community focus remains heavily on **resource efficiency**, with the top issue regarding rapid token consumption (#14593) accumulating over 300 comments. On the development side, activity centers on **architectural refactoring** (extracting tools into `codex-tools`) and **observability improvements** (telemetry for thread events and agent watchdogs).

## 2. Releases
**None.** No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1.  **[#14593 Burning tokens very fast](https://github.com/openai/codex/issues/14593)**
    *   **Why it matters:** This is currently the most active issue (318 comments, 105 👍). Users on Business subscriptions report that the VS Code extension consumes tokens at an unsustainable rate, potentially draining quotas during standard usage.
2.  **[#9224 Codex Remote Control](https://github.com/openai/codex/issues/9224)**
    *   **Why it matters:** A highly popular enhancement request (224 👍) seeking the ability to control the local `codex` CLI remotely via the ChatGPT mobile app. This reflects a strong demand for seamless cross-device workflows.
3.  **[#8648 Codex replies to earlier messages instead of latest one](https://github.com/openai/codex/issues/8648)**
    *   **Why it matters:** A critical context bug in GPT-5.2-xhigh where the assistant hallucinates the conversation history, replying to outdated messages instead of the current prompt. This breaks multi-turn coding tasks.
4.  **[#11981 Codex app 100% CPU Usage](https://github.com/openai/codex/issues/11981)**
    *   **Why it matters:** Performance regression in the desktop app. Users report excessive CPU load even when idle or running a single agent, causing system slowdowns on macOS.
5.  **[#15162 "Open in Popup Window" now replaces existing popup](https://github.com/openai/codex/issues/15162)**
    *   **Why it matters:** A regression in the macOS app (v26.317) that hinders multitasking. Users previously relied on multiple popup windows for different agents/conversations, but the update forces a single-window workflow.
6.  **[#5320 Proposal: Add Python SDK for Codex](https://github.com/openai/codex/issues/5320)**
    *   **Why it matters:** A closed discussion indicating community interest (49 👍) in a first-party Python SDK. The author has already developed a functional prototype, suggesting a potential gap in official library support.
7.  **[#15648 GPT-5.3-Codex-Spark model not supported](https://github.com/openai/codex/issues/15648)**
    *   **Why it matters:** Users are encountering confusing errors regarding model support tiers ("not supported when using Codex with a ChatGPT account"), highlighting friction in subscription/model mapping.
8.  **[#5259 Allow re-rendering scrollback after terminal resize](https://github.com/openai/codex/issues/5320)**
    *   **Why it matters:** A TUI enhancement request (20 👍). Currently, resizing the terminal window leaves the chat history poorly formatted (wrapped to the old width), affecting users who switch between laptop and monitor setups.
9.  **[#16189 CapsLock/Shift and key repeat broken in VS Code terminal](https://github.com/openai/codex/issues/16189)**
    *   **Why it matters:** A specific but frustrating input bug in the CLI when running inside VS Code's integrated terminal on macOS, preventing efficient typing.
10. **[#12488 Sub-agent costs are too high and too opaque](https://github.com/openai/codex/issues/12488)**
    *   **Why it matters:** Users are struggling with "bill shock" when using multi-agent workflows. The cost of spawning sub-agents is not transparent enough during execution, leading to unexpectedly high spend.

## 4. Key PR Progress

1.  **[#15690 [telemetry] thread events](https://github.com/openai/codex/pull/15690)**
    *   Refactors the analytics crate to support thread lifecycle events (start, fork, resume), improving observability for complex agent workflows.
2.  **[#16193 codex-tools: extract discovery tool specs](https://github.com/openai/codex/pull/16193)**
    *   Continues the architectural migration of tool discovery logic (`tool_search`, `tool_suggest`) from `codex-core` to `codex-tools` to reduce core bloat.
3.  **[#16153 Add setTimeout support to code mode](https://github.com/openai/codex/pull/16153)**
    *   Introduces timer support for code execution mode, though the author notes the current implementation uses a thread-per-timer approach that may need optimization via Tokio.
4.  **[#13678 feat(core): add watchdog runtime and prompts](https://github.com/openai/codex/pull/13678)**
    *   Adds a "watchdog" runtime to manage agent lifecycle and compaction hooks, enhancing the stability of long-running or forked agent threads.
5.  **[#16110 Fix tui_app_server ghost subagent entries](https://github.com/openai/codex/pull/16110)**
    *   Fixes a UI bug where the `/agent` command showed stale or "ghost" threads that resulted in "agent not found" errors when selected.
6.  **[#15209 chat history image](https://github.com/openai/codex/pull/15209)**
    *   Restores image generation history when resuming a thread, ensuring visual context is not lost across sessions.
7.  **[#16055 Force forked agents to inherit parent model settings](https://github.com/openai/codex/pull/16055)**
    *   Ensures that spawned sub-agents use the same model and reasoning effort as the parent, preventing context reuse errors and unexpected cost variations.
8.  **[#16184 Route TUI /feedback submission through app server](https://github.com/openai/codex/pull/16184)**
    *   Standardizes feedback submission by routing it through the app server rather than a local crate, ensuring proper auth tagging (e.g., `chatgpt_user_id`).
9.  **[#16191 feat: refresh non-curated cache from plugin list](https://github.com/openai/codex/pull/16191)**
    *   Improves plugin management by enabling cache refresh based on versions defined in `plugin.json` for non-curated plugins.
10. **[#16009 Forward app-server turn clientMetadata to Responses](https://github.com/openai/codex/pull/16009)**
    *   A fix to ensure client-side metadata (analytics/tracking) is preserved during turns in the Rust-based app server implementation.

## 5. Feature Request Trends

*   **Remote & Cross-Device Workflows:** Significant demand for controlling CLI instances remotely (via mobile) and syncing sessions/VS Code states across devices.
*   **SDK & API Extensibility:** Developers are asking for official Python SDKs and better support for orchestrating multi-agent workflows programmatically.
*   **Granular Cost Controls:** Requests for better visibility into sub-agent costs and features like "backoff policies" to prevent accidental rate limit exhaustion (429 errors) and token burn.

## 6. Developer Pain Points

*   **Token Economy:** The "Burning tokens" issue highlights a deep frustration with opaque token consumption, particularly regarding background agents and rate limiting.
*   **Context Fidelity:** Several bugs involve the model losing track of the conversation (replying to old messages) or failing to preserve formatting during window resizes, eroding trust in the agent's "memory."
*   **Platform Quirks:** Windows and VS Code Terminal users continue to face specific integration bugs (Mojibake characters, EOL issues, input locking) that hinder daily usage.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-30
**Data Source:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
No new releases were published today, but the repository saw significant activity in architectural overhauls and security hardening. A critical **Command Injection vulnerability** was identified and patched by the community, while maintainers pushed forward with the **"SDD" (Spec-Driven Development)** initiative and **AST-aware code mapping** to improve agent reliability. Additionally, new PRs introduce unified context management and native reasoning traces for API consumers.

## 2. Releases
*   **None** (No releases published in the last 24 hours).

## 3. Hot Issues
These issues highlight critical bugs, strategic architectural discussions, and user experience friction points.

1.  **[OPEN] #24103 - 429 RESOURCE_EXHAUSTED and timeouts on ULTRA**
    *   **Why it matters:** High-tier paying users are experiencing severe latency ("taking a bit longer") and rate limits on the `ULTRA` model tier. This touches on the tension between free-tier allowances and paid-tier reliability.
    *   **Link:** [Issue #24103](https://github.com/google-gemini/gemini-cli/issues/24103)
2.  **[OPEN] #24170 - Command Injection Vulnerability in Shell Execution**
    *   **Why it matters:** A high-priority security flaw allowing shell substitution syntax (`$()`, backticks) to execute arbitrary commands. A fix is already proposed in PR #24170.
    *   **Link:** [Issue #24170](https://github.com/google-gemini/gemini-cli/pull/24170) *(See PR section for details)*
3.  **[OPEN] #22745 - Assess impact of AST-aware file reads**
    *   **Why it matters:** An Epic investigating the use of Abstract Syntax Trees (AST) for code navigation. This aims to reduce token noise and prevent misaligned file reads, fundamentally improving the agent's "understanding" of codebases.
    *   **Link:** [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
4.  **[OPEN] #23858 - Files edited while in Plan Mode**
    *   **Why it matters:** A critical logic bug where the agent modifies files despite being in "Plan Mode" (read-only intention). This breaks trust in the planning workflow.
    *   **Link:** [Issue #23858](https://github.com/google-gemini/gemini-cli/issues/23858)
5.  **[OPEN] #23724 - Persistent Project-Level Tracker Storage**
    *   **Why it matters:** Part of the SDD (Spec-Driven Development) workstream. Moving task tracking from temporary session storage to `.gemini/tracker/` allows state to persist across sessions and be committed to Git.
    *   **Link:** [Issue #23724](https://github.com/google-gemini/gemini-cli/issues/23724)
6.  **[OPEN] #23582 - Subagents Awareness of Approval Modes**
    *   **Why it matters:** Subagents currently ignore "Plan Mode" or "Auto-Edit Mode" constraints in their internal reasoning, leading to blocked tool calls and inefficiency.
    *   **Link:** [Issue #23582](https://github.com/google-gemini/gemini-cli/issues/23582)
7.  **[OPEN] #23571 - Model creates tmp scripts in random spots**
    *   **Why it matters:** The agent frequently litters workspaces with temporary edit scripts, making `git clean` difficult. Users want the agent to write to designated temp directories.
    *   **Link:** [Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)
8.  **[OPEN] #22855 - Support passing prompt to `/plan`**
    *   **Why it matters:** UX request to allow `/plan [text]` in a single command rather than opening a separate box. High demand for workflow fluidity.
    *   **Link:** [Issue #22855](https://github.com/google-gemini/gemini-cli/issues/22855)
9.  **[OPEN] #22819 - Memory Routing (Global vs. Project)**
    *   **Why it matters:** Defining the architecture for memory separation—distinguishing user preferences (Global) from codebase-specific context (Project).
    *   **Link:** [Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)
10. **[OPEN] #23803 - Prevent surfacing raw Tracker UUIDs**
    *   **Why it matters:** UX improvement to hide "robotic" internal IDs (e.g., `005f0b`) from user chat output during task tracking.
    *   **Link:** [Issue #23803](https://github.com/google-gemini/gemini-cli/issues/23803)

## 4. Key PR Progress
Significant code changes focusing on security, architecture, and stability.

1.  **[#24170] Fix Command Injection Shell (Priority P1)**
    *   **Summary:** Patches a vulnerability in `run_shell_command` where shell substitution syntax was executed. Introduces `detectCommandSubstitution()` in `shell-utils.ts`.
    *   **Link:** [PR #24170](https://github.com/google-gemini/gemini-cli/pull/24170)
2.  **[#24157] Unified Context Management and Tool Distillation**
    *   **Summary:** A major refactor consolidating history and distillation settings into `contextManagement`. Aims to solve context window stability for long workflows.
    *   **Link:** [PR #24157](https://github.com/google-gemini/gemini-cli/pull/24157)
3.  **[#24167] Terminal-Integrated Performance & Memory Companion**
    *   **Summary:** Implements a 4-stage heap/CPU investigation pipeline as built-in skills, closing the memory observability gap.
    *   **Link:** [PR #24167](https://github.com/google-gemini/gemini-cli/pull/24167)
4.  **[#20974] Implement Compact Tool Output (Priority P0)**
    *   **Summary:** Introduces a compact, high-signal rendering mode for tool outputs to reduce visual noise and token usage.
    *   **Link:** [PR #20974](https://github.com/google-gemini/gemini-cli/pull/20974)
5.  **[#24081] Stabilize Sandbox for Windows/Linux**
    *   **Summary:** Fixes critical blocking bugs for Windows (nested syntax errors) and Linux (type mismatch) in sandbox managers.
    *   **Link:** [PR #24081](https://github.com/google-gemini/gemini-cli/pull/24081)
6.  **[#24060] Emit Thoughts in stream-json mode**
    *   **Summary:** Allows headless orchestrators to access the AI's reasoning traces (`GeminiEventType.Thought`) via NDJSON packets.
    *   **Link:** [PR #24060](https://github.com/google-gemini/gemini-cli/pull/24060)
7.  **[#24123] Fix Plan Mode Replan Loop**
    *   **Summary:** Fixes a bug where opening a plan in an external editor and closing it (without changes) triggered an unnecessary replan cycle.
    *   **Link:** [PR #24123](https://github.com/google-gemini/gemini-cli/pull/24123)
8.  **[#24003] Handle backslash-escaped glob metacharacters**
    *   **Summary:** Fixes file search on Windows where backslash-escaped characters were mishandled due to path separator conflicts.
    *   **Link:** [PR #24003](https://github.com/google-gemini/gemini-cli/pull/24003)
9.  **[#22987] Migrate nonInteractiveCli to LegacyAgentSession**
    *   **Summary:** Part 4 of a stacked PR series refactoring the non-interactive CLI session architecture.
    *   **Link:** [PR #22987](https://github.com/google-gemini/gemini-cli/pull/22987)
10. **[#23587] Telemetry Mapping Fix**
    *   **Summary:** Adds unit tests for `tool-call-decision.ts` and maps `ProceedAlwaysAndSave` to `AUTO_ACCEPT`.
    *   **Link:** [PR #23587](https://github.com/google-gemini/gemini-cli/pull/23587)

## 5. Feature Request Trends
Analysis of open issues reveals three primary development vectors:

*   **Spec-Driven Development (SDD):** A massive internal push is underway to replace linear Markdown planning with a **DAG (Directed Acyclic Graph)** based task tracker. This includes persistent storage (`.gemini/tracker`), spec-to-tracker bridges, and hiding internal UUIDs from users.
*   **Context & Memory Management:** There is a strong focus on "proactive memory writes" and distinguishing between **Global vs. Project memory**. Users and maintainers want the agent to remember preferences (e.g., "I prefer tabs") without being re-taught.
*   **AST-Aware Tooling:** Moving beyond regex/grep-based file reading. The team is investigating **AST-aware tools** (referencing `tilth` and `glyph`) to allow the agent to read specific method bounds precisely, reducing token waste.

## 6. Developer Pain Points
*   **Platform Instability:** Users on the `ULTRA` tier report frustrating 429 errors and timeouts, feeling that paid tiers are throttled by the limitations of free-tier infrastructure.
*   **Workspace Cleanliness:** Developers are frustrated by the agent creating temporary scripts and edit files in random directories, requiring manual cleanup before commits.
*   **Mode Reliability:** Users report that "Plan Mode" is leaky—sometimes the agent edits files when it should only be planning, or subagents ignore the constraints of the active mode.
*   **Cross-Platform Bugs:** Windows users specifically face issues with globbing and sandbox stability, though recent PRs aim to address this.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-30

## 1. Today's Highlights
The community activity over the last 24 hours highlights significant stability challenges across different platforms, with critical reports regarding file descriptor leaks on servers and memory access crashes on Windows. Several new quality-of-life feature requests were submitted, focusing on improving agent introspection and session management. Additionally, the maintainers merged two pull requests optimizing the installation process, although no new official release was published today.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
Here are the top 10 issues driving community discussion, highlighting stability bugs and feature gaps:

*   **[CRITICAL] Headless Server File Descriptor Leak ([#2389](github/copilot-cli Issue #2389))**
    *   **Why it matters:** Users running `copilot --headless` report that the process accumulates `kqueue` file watchers indefinitely. This leads to process hangs or crashes during long-running automated tasks, particularly in multi-agent workflows.
*   **[CRITICAL] Windows ACCESS_VIOLATION Crash ([#2387](github/copilot-cli Issue #2387))**
    *   **Why it matters:** A severe segmentation fault (`0xC0000005`) is causing the CLI to crash abruptly during AI model requests on Windows. This makes the tool unreliable for Windows developers, with crashes occurring anywhere from 4 to 100 minutes into use.
*   **[BUG] Rate Limit Handling Confusion ([#2385](github/copilot-cli Issue #2385))**
    *   **Why it matters:** When users hit rate limits, the error banner fails to parse the `<duration>` variable, displaying the raw placeholder text instead of the actual wait time. This adds frustration to an already interrupted workflow.
*   **[BUG] Session Resumption Corruption ([#2012](github/copilot-cli Issue #2012))**
    *   **Why it matters:** Attempting to `/resume` a session crashes the CLI if the history file (`events.jsonl`) contains Unicode line separators (U+2028/U+2029), a common occurrence in copy-pasted logs.
*   **[BUG] Plugin Installation Pathing Broken ([#2390](github/copilot-cli Issue #2390))**
    *   **Why it matters:** The `copilot plugin install` command currently fails to locate `plugin.json` when installing directly from a GitHub repository, rendering custom skills and agents undiscoverable.
*   **[FEATURE] Subagent Model Awareness ([#2383](github/copilot-cli Issue #2383))**
    *   **Why it matters:** Subagents launched by the main Task tool do not receive system prompts regarding their own model identity. This prevents developers from building reliable routing logic or validating which model is actually processing a specific sub-task.
*   **[BUG] Model Selection Restricted to GPT-4.1 ([#2386](github/copilot-cli Issue #2386))**
    *   **Why it matters:** A user reported being unable to select any model other than GPT-4.1 via the `/models` command, resulting in 400 errors when attempting to switch to other supported models.
*   **[BUG] Session Dates 56 Years in the Past ([#2376](github/copilot-cli Issue #2376))**
    *   **Why it matters:** The session picker UI displays all session dates as occurring in 1970 (Unix epoch 0), making it nearly impossible for users to identify and resume their most recent work sessions.
*   **[FEATURE] Agent Information Display ([#2382](github/copilot-cli Issue #2382))**
    *   **Why it matters:** When selecting a custom agent, the CLI currently only shows the name. Users are requesting the description and title be displayed to ensure the correct agent is selected for the job.
*   **[BUG] WSL2 ARM64 Stability ([#2379](github/copilot-cli Issue #2379))**
    *   **Why it matters:** On WSL2 ARM64 architectures, the CLI frequently crashes with `setRawMode EIO` errors, causing loss of stdin connection and session termination.

## 4. Key PR Progress
The following Pull Requests saw updates or merges today:

*   **[MERGED] install: add fish shell support for PATH configuration ([#2381](github/copilot-cli PR #2381))**
    *   **Summary:** Fixed an issue where the install script wrote POSIX syntax to `~/.profile` for Fish shell users, which resulted in the CLI not being added to the PATH correctly.
*   **[MERGED] install: use EXIT trap for temp directory cleanup ([#2380](github/copilot-cli PR #2380))**
    *   **Summary:** Improved the robustness of the installation script by implementing an `EXIT` trap to ensure temporary directories are cleaned up even if the script fails prematurely (e.g., during download or extraction).
*   **[OPEN] Dev ([#2316](github/copilot-cli PR #2316))**
    *   **Summary:** An open PR aiming to update devcontainer configurations to include the GitHub CLI feature.
*   **[CLOSED] Add initial devcontainer configuration ([#678](github/copilot-cli PR #678))**
    *   **Summary:** An older PR regarding devcontainer setup was closed without merging.

## 5. Feature Request Trends
Analysis of recent issues reveals distinct trends in user needs:

*   **Enhanced Agent Introspection:** Developers want more transparency when working with agents. Requests include displaying agent descriptions during selection ([#2382](github/copilot-cli Issue #2382)) and ensuring subagents know which model they are running ([#2383](github/copilot-cli Issue #2383)).
*   **Session Management & Durability:** Users are asking for better ways to manage state. This includes the ability to clone sessions to branch off work without losing context ([#1400](github/copilot-cli Issue #1400)) and an "auto-share on exit" feature to prevent data loss during unexpected restarts ([#2227](github/copilot-cli Issue #2227)).
*   **Model Availability Parity:** There is continued demand for the CLI to support the same model roster as VS Code Copilot Chat, specifically requesting access to GPT-4o ([#2377](github/copilot-cli Issue #2377)).

## 6. Developer Pain Points
*   **Cross-Platform Stability:** The tool is currently facing distinct critical stability issues on three major fronts: file descriptor leaks on Linux servers ([#2389](github/copilot-cli Issue #2389)), segfaults on Windows ([#2387](github/copilot-cli Issue #2387)), and I/O crashes on WSL2 ARM64 ([#2379](github/copilot-cli Issue #2379)).
*   **Tooling Compatibility Friction:** The removal of the `--no-alt-screen` option in version 1.0.12 has broken mouse-selection workflows for macOS Terminal.app users ([#2384](github/copilot-cli Issue #2384)), and a lack of Fish shell support (until today's fix) caused installation headaches.
*   **Interruption Handling:** Users are frustrated by the inability to cancel specific queued messages without stopping the current operation ([#2378](github/copilot-cli Issue #2378)), leading to inefficient "fighting" with the interface when a prompt is mistyped.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-30

### 1. Today's Highlights
The community focused heavily on **usability enhancements and architecture transparency**. Key discussions centered on refining the "YOLO" auto-approval mechanism for granular control and introducing "Agent Swarm" architectures for better multi-agent collaboration. Additionally, significant progress was made in developer tooling with improvements to the shell mode persistence and the introduction of a network-accessible tracing visualizer.

### 2. Releases
No new releases were recorded in the last 24 hours. The community continues to iterate on the `1.27.0` version baseline via Pull Requests.

### 3. Hot Issues
*   **[#1631 Granular Auto-Approval Rules](https://github.com/MoonshotAI/kimi-cli/issues/1631)**
    *   **Why it matters:** Users are finding the current binary "YOLO mode" (all-or-nothing auto-approval) too risky. This issue requests granular rules (similar to competitors like Claude Code) to allow auto-approval for safe operations while guarding sensitive actions.
*   **[#1633 Agent Swarm / Teammates Mode](https://github.com/MoonshotAI/kimi-cli/issues/1633)**
    *   **Why it matters:** A high-value architectural request. The user argues that the current `subagent` model lacks peer-to-peer interaction capabilities, requesting a true "Agent Swarm" where agents can collaborate rather than operate in a strict hierarchy.
*   **[#1632 Option to Hide Thinking Content](https://github.com/MoonshotAI/kimi-cli/issues/1632)**
    *   **Why it matters:** With the adoption of reasoning models like `kimi-k2-thinking-turbo`, the terminal output is becoming cluttered with real-time thinking processes. Users want a toggle to hide this "internal monologue" for a cleaner interface while retaining the reasoning quality.
*   **[#1629 JetBrains IDE Integration Failure](https://github.com/MoonshotAI/kimi-cli/issues/1629)**
    *   **Why it matters:** A blocking bug for Windows/JetBrains users. Attempts to integrate Kimi CLI with JetBrains' official AI Assistant are failing due to an "ACP Not Supported" error, limiting IDE adoption.
*   **[#1627 Linux Input Parsing Bug [CLOSED]](https://github.com/MoonshotAI/kimi-cli/issues/1627)**
    *   **Why it matters:** A platform-specific bug affecting Linux (specifically CachyOS) users' ability to input commands. This was quickly resolved and closed by the team.

### 4. Key PR Progress
*   **[#1630 Network-Accessible Tracing Visualizer](https://github.com/MoonshotAI/kimi-cli/pull/1630)**
    *   **Details:** Major enhancement to debugging capabilities. Adds `--network` and `--host` flags to the visualizer, allowing developers to inspect agent tracing via LAN and a new `/vis` slash command for runtime toggling.
*   **[#1587 Shell Mode Context Injection](https://github.com/MoonshotAI/kimi-cli/pull/1587)**
    *   **Details:** Improves the `Ctrl+X` shell mode. Output from user shell commands is now injected back into the LLM context as system reminders, and `cd` commands are now persistent across the session.
*   **[#1628 Refactor `skills_dirs` Naming [CLOSED]](https://github.com/MoonshotAI/kimi-cli/pull/1628)**
    *   **Details:** A cleanup PR renaming `extra_skills_dirs` to `skills_dirs` to fix misleading semantics—removing the `extra_` prefix clarifies that this flag overrides default discovery rather than appending to it.
*   **[#1626 Fix `--skills-dir` Help Text [CLOSED]](https://github.com/MoonshotAI/kimi-cli/pull/1626)**
    *   **Details:** Corrects documentation for the `--skills-dir` flag to explicitly state that it supports multiple directories and overrides the default skill discovery path.

### 5. Feature Request Trends
*   **Granular Safety Controls:** A shift away from "YOLO" mode toward trusted/permissioned lists for tool execution (Issue #1631).
*   **Advanced Agentic Architectures:** Growing demand for decentralized agent systems (Swarms) rather than centralized sub-agent delegation (Issue #1633).
*   **Clean UI for Reasoning Models:** As "thinking" models become standard, users require UI toggles to manage verbose output verbosity (Issue #1632).

### 6. Developer Pain Points
*   **IDE Integration Stability:** Users encounter basic protocol errors (ACP support) when attempting to use Kimi CLI as a backend for standard IDE AI plugins, particularly on Windows (Issue #1629).
*   **Misleading Configuration Flags:** Developers were confused by `extra_skills_dirs` expecting an append behavior when it actually performed an override, leading to configuration errors (Addressed in PR #1628).
*   **Context Awareness in Shell:** Previously, the agent lost track of directory changes (`cd`) and shell outputs, breaking the workflow; this is being actively fixed in PR #1587.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-30

## Today's Highlights

OpenCode v1.3.6 landed with a critical TUI fix for variant dialog search filtering, while v1.3.5 addressed async plugin hooks and prompt refinement. The community is actively reporting regressions from the recent AI SDK v6 upgrade, particularly around token double-counting and context bloat on session restore. A heartfelt message from the Chinese developer community (#19891) highlights growing international adoption and engagement.

---

## Releases

### v1.3.6
- **TUI:** Fixed variant dialog search so typing now properly filters the list of variants ([PR #19917](https://github.com/anomalyco/opencode/pull/19917))

### v1.3.5
- **Core:** Fixed plugin hooks to properly handle async operations
- **Core:** Adjusted GPT prompt to be more minimal and fixed file reference annoyances

### v1.3.4
- **Core:** Added prompt slot feature
- **Core:** Updated `opencode-gitlab-auth` to 2.0.1 (@vglafirov)
- **Core:** Refactored session processor to use effect-based architecture
- **Core:** Upgraded OpenTUI to version 0.1.91
- **Core:** Upgraded to AI SDK v6

---

## Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#988](https://github.com/anomalyco/opencode/issues/988) | **Feature request: add MCP remote using OAuth** | Top-voted feature (79 👍) requesting OAuth 2.1 support for MCP server installation to simplify auth flow without manual secret management. |
| [#19757](https://github.com/anomalyco/opencode/issues/19757) | **Token usage double-counting after AI SDK v6 upgrade** | Critical regression causing 2x inflated token counts for Anthropic/Bedrock providers since v1.3.4. Fixed in v1.3.6 via PR #19758. |
| [#2656](https://github.com/anomalyco/opencode/issues/2656) | **Hotkey switch between "accept" and "approve" mid-session** | Highly requested (17 👍) workflow enhancement for alternating between auto-accept and manual review modes during conversations. |
| [#19696](https://github.com/anomalyco/opencode/issues/19696) | **Variant selector only shows "thinking"** | Regression in v1.3.4/1.3.5 preventing users from deselecting thinking mode. Affects Linux/Ubuntu users. |
| [#17982](https://github.com/anomalyco/opencode/issues/17982) | **Prompt loop continues after `finish=stop`** | Bug causing OpenCode to advance conversation loop even after normal completion, triggering prefill errors on claude-opus-4-6. |
| [#14674](https://github.com/anomalyco/opencode/issues/14674) | **Add /dump-context command** | Request for debugging tool to inspect the full context sent to LLM providers (13 👍). |
| [#19897](https://github.com/anomalyco/opencode/issues/19897) | **Session restore context doubles from v1.3.3 to v1.3.4+** | Performance regression where context usage jumps from 46% to 93% on session restore, with stale MCP schemas still being loaded. |
| [#16449](https://github.com/anomalyco/opencode/issues/16449) | **MCP Subsystem unresponsive on Windows Desktop** | Systemic failure of MCP runtime on Windows causing timeouts and complete unavailability. |
| [#19891](https://github.com/anomalyco/opencode/issues/19891) | **Heartfelt plea from Chinese developer community** | Community message (10 👍) expressing appreciation and highlighting international developer engagement. |
| [#16077](https://github.com/anomalyco/opencode/issues/16077) | **Persistent Session Memory** | Feature request for loading previous conversation context at startup for cross-session continuity. |

---

## Key PR Progress

| PR | Title | Status | Description |
|----|-------|--------|-------------|
| [#16069](https://github.com/anomalyco/opencode/pull/16069) | feat(windows): add first-class pwsh/powershell support | OPEN | Adds native PowerShell support on Windows, replacing Git Bash dependencies with native filesystem helpers. |
| [#19943](https://github.com/anomalyco/opencode/pull/19943) | feat(app): surface recent models in picker | OPEN | Implements recent models section at top of model picker, addressing #19935. |
| [#19944](https://github.com/anomalyco/opencode/pull/19944) | fix: auto-scrub tool call IDs for NVIDIA NIM | OPEN | Fixes "expected id to be a string" error for NVIDIA NIM kimik2.5 and similar providers. |
| [#19545](https://github.com/anomalyco/opencode/pull/19545) | feat: mobile voice integration + APN relay | OPEN | Adds mobile voice capabilities with Apple Push Notification relay. |
| [#17803](https://github.com/anomalyco/opencode/pull/17803) | Remove CLI from electron app | OPEN | Refactors Electron app to spawn server directly via `Server.listen` instead of bundling CLI. |
| [#17670](https://github.com/anomalyco/opencode/pull/17670) | feat: dynamic model discovery for local providers | OPEN | Enables automatic model list population for LM Studio, llama.cpp, and OpenAI-compatible providers. |
| [#15926](https://github.com/anomalyco/opencode/pull/15926) | feat: add MCP Apps support | OPEN | Implements MCP Apps protocol for rich iframe UIs from MCP servers. |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | feat(app): Mobile Touch Optimization | OPEN | Optimizes OpenCode app for mobile/touch devices while preserving desktop experience. |
| [#19934](https://github.com/anomalyco/opencode/pull/19934) | feat(github): auto-extract issue prompt | CLOSED/MERGED | Enables "assign to bot → it works on it" workflow by auto-extracting issue context. |
| [#17554](https://github.com/anomalyco/opencode/pull/17554) | feat: add Italian translation | CLOSED/MERGED | Adds Italian (it) localization and glossary to the project. |

---

## Feature Request Trends

1. **OAuth-based MCP Authentication** — Simplified server installation without manual secret management (#988 with 79 👍)
2. **Session Persistence & Memory** — Cross-session context continuity for long-running projects (#16077)
3. **Workflow Mode Switching** — Hotkey toggle between auto-accept and manual review modes (#2656)
4. **Debug/Inspection Tools** — Commands like `/dump-context` for prompt engineering visibility (#14674)
5. **Enhanced Model Management** — Recent models surface, dynamic discovery for local providers (#19935, #17670)
6. **Mobile & Touch Support** — Voice integration and touch-optimized UIs for on-the-go development

---

## Developer Pain Points

1. **AI SDK v6 Regression Cluster** — Token double-counting (#19757), context bloat on restore (#19897), and prompt loop bugs (#17982) are affecting users who upgraded to v1.3.4+
2. **Windows Desktop Stability** — MCP subsystem failures (#16449), TUI session list limitations (#16733), and Kimi provider errors (#16685) persist on Windows
3. **Thinking Mode Lock-in** — Users unable to disable thinking mode after v1.3.4 upgrade (#19696)
4. **Path Handling Issues** — Tab-complete fails for files with spaces in paths (#19152)
5. **Documentation/Tool Mismatches** — Inconsistencies like `patch` vs `apply_patch` tool naming causing silent plugin hook failures (#19941)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-03-30

## 1. Today's Highlights
The Qwen Code team released **v0.13.1-nightly.20260329**, focusing on documentation updates for ModelStudio integration. The community saw a surge in contributions around **tooling enhancements**, particularly for the `/insight` command and IDE companion features. Significant attention was drawn to **Windows compatibility issues** and the need for a **Skill testing framework**, indicating a maturing ecosystem demanding enterprise-grade stability.

## 2. Releases
*   **v0.13.1-nightly.20260329.070ec5b43**
    *   **Docs:** Updated references from "Bailian" to "ModelStudio" in README ([PR #2714](https://github.com/QwenLM/qwen-code/pull/2714)).
    *   **Chore:** Version bumped to 0.13.1 ([PR #2716](https://github.com/QwenLM/qwen-code/pull/2716)).

## 3. Hot Issues
1.  **[OPEN] Supports project-level Insight** ([#2040](https://github.com/QwenLM/qwen-code/issues/2040))
    *   *Why it matters:* Users currently cannot segregate analytics by project, limiting utility in multi-project workspaces.
2.  **[OPEN] Shell commands fail on Windows** ([#2727](https://github.com/QwenLM/qwen-code/issues/2727))
    *   *Why it matters:* Critical blocker for Windows users; `npm` and `npx` commands fail despite proper installation.
3.  **[OPEN] Bring subagent system to parity with Claude Code** ([#2409](https://github.com/QwenLM/qwen-code/issues/2409))
    *   *Why it matters:* Highlights a feature gap (currently 40-45% parity) that users are actively comparing against competitors.
4.  **[OPEN] Skill Testing Framework: Recording and Playback** ([#2447](https://github.com/QwenLM/qwen-code/issues/2447))
    *   *Why it matters:* With hundreds of skills managed, the lack of automated testing creates regression risks.
5.  **[OPEN] Qwen Code freezes when running shell commands** ([#2740](https://github.com/QwenLM/qwen-code/issues/2740))
    *   *Why it matters:* Reports of session freezes due to missing `tree-sitter` WASM files, requiring restarts.
6.  **[OPEN] QwenCode refuses to perform actions** ([#2730](https://github.com/QwenLM/qwen-code/issues/2730))
    *   *Why it matters:* Users experiencing "refusal" behaviors where the AI avoids executing tasks without clear reasons.
7.  **[OPEN] IntelliJ Plugin issues with Local Ollama** ([#2724](https://github.com/QwenLM/qwen-code/issues/2724))
    *   *Why it matters:* Local model support in IntelliJ 2026.1 is broken, forcing cloud login loops.
8.  **[OPEN] CLI Config Error / Invalid URL** ([#2736](https://github.com/QwenLM/qwen-code/issues/2736))
    *   *Why it matters:* Critical startup crash caused by invalid URL parsing in proxy configuration.
9.  **[OPEN] No standalone binary build (Node SEA)** ([#2359](https://github.com/QwenLM/qwen-code/issues/2359))
    *   *Why it matters:* Limits adoption in CI/CD and containerized environments lacking Node.js runtimes.
10. **[OPEN] Planning Mode Question Loop** ([#2735](https://github.com/QwenLM/qwen-code/issues/2735))
    *   *Why it matters:* AI gets stuck in an error loop when attempting to ask clarifying questions in planning mode.

## 4. Key PR Progress
1.  **[OPEN] feat(cli, webui): add follow-up suggestions feature** ([PR #2525](https://github.com/QwenLM/qwen-code/pull/2525))
    *   Introduces context-aware "Next-Step Suggestions" (NES) similar to Claude Code, suggesting actions like "commit" or "run tests" after task completion.
2.  **[OPEN] feat(vscode-ide-companion): support /insight command** ([PR #2593](https://github.com/QwenLM/qwen-code/pull/2593))
    *   Enables generation of insight reports directly within VSCode, eliminating context switching to the terminal.
3.  **[OPEN] fix(shell): resolve Git Bash path for node-pty on Windows** ([PR #2733](https://github.com/QwenLM/qwen-code/pull/2733))
    *   Addresses the "File not found" errors on Windows by explicitly resolving the Git Bash executable path for `node-pty`.
4.  **[OPEN] feat(tools): add Markdown for Agents support to WebFetch** ([PR #2734](https://github.com/QwenLM/qwen-code/pull/2734))
    *   Implements Cloudflare's "Markdown for Agents" spec to reduce token usage by up to 80% when fetching web content.
5.  **[OPEN] feat(cron): add in-session loop scheduling** ([PR #2731](https://github.com/QwenLM/qwen-code/pull/2731))
    *   Allows the model to schedule recurring jobs within a session to monitor long-running ops (CI/CD, deploys) autonomously.
6.  **[OPEN] Enhance /review: verification and PR comments** ([PR #2687](https://github.com/QwenLM/qwen-code/pull/2687))
    *   Upgrades the review agent with false positive controls and the ability to post inline comments directly to PRs.
7.  **[OPEN] refactor: centralize IDE diff interaction** ([PR #2728](https://github.com/QwenLM/qwen-code/pull/2728))
    *   Major refactor to fix token waste and multi-edit bugs by moving diff logic to `CoreToolScheduler`.
8.  **[OPEN] feat: /insight report localization** ([PR #2739](https://github.com/QwenLM/qwen-code/pull/2739))
    *   Localizes the `/insight` HTML report based on user language settings.
9.  **[OPEN] fix: prevent AI thinking loop in default permission mode** ([PR #2737](https://github.com/QwenLM/qwen-code/pull/2737))
    *   Fixes an infinite retry loop in the WebUI when users ignore permission dialogs.
10. **[OPEN] feat(vscode): expose /skills with secondary picker** ([PR #2548](https://github.com/QwenLM/qwen-code/pull/2548))
    *   Improves UX in VSCode by adding a secondary picker for selecting skills via slash commands.

## 5. Feature Request Trends
*   **Enterprise & Team Features:** Strong demand for **Project-level Insights** (#2040) and **Skill Testing Frameworks** (#2447), indicating a shift from individual experimentation to team-based production workflows.
*   **Parity with Competitors:** Users are actively requesting features present in **Claude Code**, specifically regarding subagent capabilities (#2409) and "Next-Step" suggestions (#2525).
*   **Distribution & Deployment:** Requests for **Standalone Binaries** (Node SEA #2359) and **IDE Integrations** (IntelliJ, VSCode) suggest users want lower friction access points beyond the standard CLI.

## 6. Developer Pain Points
*   **Windows Instability:** A significant cluster of issues ([#2727](https://github.com/QwenLM/qwen-code/issues/2727), [#2733](https://github.com/QwenLM/qwen-code/pull/2733)) relate to shell execution failures on Windows, impacting a large portion of the dev base.
*   **Agent Reliability:** Users report frustration with the agent entering **unresponsive loops** or **refusing tasks** ([#2730](https://github.com/QwenLM/qwen-code/issues/2730), [#2735](https://github.com/QwenLM/qwen-code/issues/2735)), eroding trust in the autonomous capabilities.
*   **Local Model Integration:** Breaking changes in **IntelliJ 2026.1** regarding local Ollama support ([#2724](https://github.com/QwenLM/qwen-code/issues/2724)) are causing friction for users relying on offline/local inference.

</details>