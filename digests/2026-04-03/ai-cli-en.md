# AI CLI Tools Community Digest 2026-04-03

> Generated: 2026-04-02 22:07 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Cross-Tool Analysis Report
**Date:** 2026-04-03

## 1. Ecosystem Overview
The AI CLI landscape on 2026-04-03 is defined by aggressive iteration toward **agentic reliability** and **UI stabilization**. While tools like Claude Code and Qwen Code race to integrate newer, more powerful models (Qwen 3.6, Opus 4.6), the community backlash regarding **terminal rendering regressions** (scrolback loss, flickering) and **platform instability** (Windows/WSL) is intensifying. The focus has shifted from simple chat interfaces to complex engineering challenges: context window management, structured workflows (Plan Mode), and deterministic execution. We are seeing a clear bifurcation between tools prioritizing stability (Copilot CLI, Gemini CLI) and those pushing rapid feature expansion (Claude Code, Kimi CLI).

## 2. Activity Comparison

| Tool | Release Status | Hot Issues (Engagement) | PR Activity | Key Theme |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **v2.1.90** (Active) | High (84 👍 top issue) | High (10+ key PRs) | **Crisis Control:** Severe regression in terminal rendering causing data loss. |
| **Gemini CLI** | **v0.37.0-preview.1** (Active) | Medium (30 comments top issue) | High (10 key PRs) | **UI Refinement:** Fixing flicker, Windows PowerShell bugs, and agent control. |
| **Copilot CLI** | **v1.0.16** (Released) | Medium (14 👍 top issue) | **None** (0 PRs) | **Stability:** HTTP/2 connection issues and restoring removed features. |
| **Kimi Code** | **v1.30.0** (Major) | Low/Medium (High friction) | High (10 PRs) | **Workflow Control:** Plan mode, undo/fork, and Windows fixes. |
| **OpenCode** | **None** | High (92 👍 top issue) | High (10 PRs) | **Performance:** Memory leaks (20GB+), CPU spikes, and mobile support. |
| **Qwen Code** | **v0.14.0-preview.5** (Active) | High (Model demand) | High (10 PRs) | **Model Integration:** Rush for Qwen 3.6 and context compression. |

## 3. Shared Feature Directions

The following requirements are appearing simultaneously across multiple tool communities, signaling industry-wide convergence:

*   **Scrollback & "Quiet" UI:**
    *   *Tools:* **Claude Code, Copilot CLI, Gemini CLI.**
    *   *Need:* Users are demanding the restoration of full terminal scrollback history and "compact" tool outputs. The shift to "flicker-free" alternate screen buffers has universally broken the ability to review past conversation history, causing significant productivity loss.
*   **Structured Workflow Controls:**
    *   *Tools:* **Kimi CLI, Gemini CLI, Qwen Code.**
    *   *Need:* There is a strong move away from pure chat toward "Plan Mode" and deterministic workflows. Users want the agent to propose a plan and stick to it, rather than acting unpredictably. Features like `--plan` (Kimi) and "instruction adherence" (Gemini) are direct responses to this.
*   **Session Archaeology & Memory:**
    *   *Tools:* **Kimi CLI, Claude Code, OpenCode.**
    *   *Need:* Developers need better ways to manage long context. Requests for `/undo`, `/fork`, session renaming, and resuming old sessions are prominent. There is also a push for hierarchical memory (Global vs. Project specific) rather than flat context files.
*   **Windows & WSL Stabilization:**
    *   *Tools:* **Gemini CLI, Kimi CLI, OpenCode, Qwen Code.**
    *   *Need:* Windows is a first-class citizen in requirements. PowerShell path detection, CRLF handling, and WSL rendering (freezes, scrambled text) are critical blockers across almost all non-Microsoft tools.

## 4. Differentiation Analysis

*   **Claude Code (The Power User's Tool):** Focuses heavily on deep integration with the Anthropic ecosystem. It is pushing the boundaries of **MCP (Model Context Protocol)** and complex plugin systems. However, it currently suffers from "bleeding edge" syndrome, with critical rendering regressions affecting core usability.
*   **GitHub Copilot CLI (The Enterprise Standard):** Prioritizes integration with the GitHub ecosystem (Auth, MCP policy). It faces unique "enterprise" friction, such as HTTP/2 connection pool race conditions and policy-based blocking of custom servers. Development appears slower (0 PRs today) but stable.
*   **Gemini CLI (The UI/UX Laboratory):** Heavily focused on the *interaction layer*, experimenting with "TerminalBuffer" modes and specific keybindings (vi mode). It differentiates by trying to solve the "flicker" problem scientifically, though it struggles with agent reliability (ignoring halt instructions).
*   **Kimi Code (The Workflow Architect):** Differentiates via **Session Management**. It is shipping features specifically for managing complex, long-running tasks (`/fork`, `/undo`, session naming), appealing to developers who treat AI interactions as projects rather than disposable chats.
*   **OpenCode (The Performance Enthusiast):** Focuses on local resource usage and platform diversity (Mobile touch, Tauri). It is currently battling significant performance bottlenecks (memory leaks), which sets it apart as a tool striving for native efficiency rather than just feature parity.
*   **Qwen Code (The Model Chaser):** Defined by rapid adoption of its own foundation models (Qwen 3.6). It focuses heavily on **cost management** strategies (context compression, zero-cost caching) to make agentic coding economical.

## 5. Community Momentum & Maturity

*   **Most Rapid Iteration:** **Kimi Code** and **Qwen Code**. Both shipped substantial updates today (v1.30.0 and v0.14.0 respectively) with high PR counts addressing user feedback directly. They are moving fast to catch up to established players.
*   **Most Active Community (Negative):** **Claude Code**. The volume of engagement around the scrollback regression indicates a passionate but currently frustrated user base. This is a "high stakes" moment for their team.
*   **Stable but Slower:** **GitHub Copilot CLI**. With a release yesterday but zero PR activity today, it shows the maturity cycle of a larger corporate product—stable core, slower feature iteration.
*   **Emerging Contender:** **OpenCode**. High issue engagement regarding performance suggests a growing user base that is hitting scaling limits, a classic "good problem to have" for a growing open-source tool.

## 6. Trend Signals

1.  **The "Flicker-Free" Backlash:** The industry-wide attempt to create smoother TUIs (Terminal User Interfaces) via alternate screen buffers is failing users who rely on scrollback history. **Action Item:** Tool builders must prioritize scrollback preservation or offer a "simple mode" that sacrifices animation for history.
2.  **Cost & Context Compression:** As context windows grow, the cost of agentic workflows is spiking (e.g., the $456 daily bill reported in Qwen Code). **Action Item:** "Zero-cost" compression strategies (truncating old tool results) and aggressive caching are becoming essential features, not just optimizations.
3.  **The "Halting" Problem:** Reliability is the new feature. Users are losing trust because agents say "I will halt" but continue to execute code. **Action Item:** Deterministic "hard stops" and Plan Mode verification are critical for moving these tools from "assistant" to "autonomous agent."
4.  **Windows is No Longer Optional:** WSL and native Windows bugs are top issues in 4 out of 6 tools. **Action Item:** Cross-platform CI/CD must cover PowerShell, MSYS2, and WSL specificities to capture the enterprise market.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` (as of 2026-04-03)

---

## 1. Top Skills Ranking

Based on repository activity, here are the most prominent Skills currently under community discussion and development:

| Rank | Skill Name | Author | Status | Summary |
|------|------------|--------|--------|---------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | PGTBoos | OPEN | Typographic quality control preventing orphans, widows, and numbering misalignment in AI-generated documents. |
| 2 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | justinwetch | OPEN | Revised frontend-design guidance for improved clarity and actionability in single-conversation execution. |
| 3 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | eoviciu | OPEN | Meta-skills for evaluating Skill quality (5 dimensions) and security across the marketplace. |
| 4 | **[ODT Skill](https://github.com/anthropics/skills/pull/486)** | GitHubNewbie0 | OPEN | OpenDocument text creation, template filling, and ODT-to-HTML parsing (ISO/IEC 26300). |
| 5 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | narenkatakam | OPEN | Addresses community health gap; repo currently scores 25% on GitHub metrics. |
| 6 | **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** | amitlals | OPEN | Leverages SAP's open-source tabular foundation model for business analytics. |
| 7 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | varun29ankuS | OPEN | Persistent memory system for AI agents maintaining context across conversations. |
| 8 | **[sensory (macOS Automation)](https://github.com/anthropics/skills/pull/806)** | AdelElo13 | OPEN | Native macOS automation via AppleScript with two-tier permission system. |

---

## 2. Community Demand Trends

Analysis of active Issues reveals strong demand in these directions:

| Trend | Description | Key Issue |
|-------|-------------|-----------|
| **Trust & Security** | Concerns about community skills masquerading as official under `anthropic/` namespace; need for clear trust boundaries. | [#492](https://github.com/anthropics/skills/issues/492) |
| **Evaluation & Testing** | `run_eval.py` failing to trigger skills (0% trigger rate); broken evaluation pipelines blocking reliable skill testing. | [#556](https://github.com/anthropics/skills/issues/556) |
| **Organizational Sharing** | Enterprise teams want org-wide skill libraries instead of manual file sharing via Slack/Teams. | [#228](https://github.com/anthropics/skills/issues/228) |
| **API & Platform Support** | Requests for Bedrock compatibility, MCP exposure, and fixes for persistent API 500 errors on upload/delete operations. | [#29](https://github.com/anthropics/skills/issues/29), [#16](https://github.com/anthropics/skills/issues/16), [#403](https://github.com/anthropics/skills/issues/403) |
| **Skill-Creator Improvements** | Current skill-creator is too verbose/educational; needs token-efficient, execution-focused guidance. | [#202](https://github.com/anthropics/skills/issues/202) |

---

## 3. High-Potential Pending Skills

Active PRs with strong community engagement likely to merge soon:

| Skill | Potential Impact | Link |
|-------|------------------|------|
| **quality-playbook** | Revives traditional quality engineering with AI-driven test planning from requirements, not code. | [PR #659](https://github.com/anthropics/skills/pull/659) |
| **testing-patterns** | Comprehensive testing stack guidance (Testing Trophy, AAA pattern, React Testing Library). | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **masonry-generate-image-and-videos** | AI-powered media generation via Masonry CLI (Imagen 3.0, Veo 3.1). | [PR #335](https://github.com/anthropics/skills/pull/335) |
| **docx/ooxml fixes** | Critical fixes for tracked change `w:id` collisions and whitespace preservation in OOXML. | [PR #541](https://github.com/anthropics/skills/pull/541), [PR #143](https://github.com/anthropics/skills/pull/143) |
| **codebase-inventory-audit** | Systematic 10-step workflow for codebase cleanup and documentation audits. | [PR #147](https://github.com/anthropics/skills/pull/147) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, secure, and enterprise-ready skill infrastructure** — particularly around trust boundaries for community skills, functional evaluation pipelines, and organizational sharing capabilities — rather than new individual skills.

---

# Claude Code Community Digest — 2026-04-03

## Today's Highlights

Version **v2.1.90** introduces `/powerup`, an interactive learning feature with animated demos, alongside offline environment improvements. However, a **critical regression** is dominating community discussion: the new "flicker-free" rendering engine (introduced in v2.1.89 and refined in v2.1.90) is destroying terminal scrollback history and hiding conversation output during active sessions. Multiple high-engagement issues report data loss and usability degradation.

---

## Releases

### [v2.1.90](https://github.com/anthropics/claude-code/releases/tag/v2.1.90)

- **`/powerup` command** — Interactive lessons teaching Claude Code features with animated demos
- **`CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE`** — New environment variable to preserve marketplace cache when `git pull` fails (useful for offline environments)
- **`.husky` protection** — Added to protected directories list

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [**#41814** — Messages disappear from terminal display during conversation](https://github.com/anthropics/claude-code/issues/41814) | **84 👍 / 47 comments** — Critical regression in v2.1.89 where user prompts and Claude responses vanish from terminal during active sessions. Makes the tool nearly unusable for many. |
| 2 | [**#41907** — Latest version aggressively hides all previous output during active session](https://github.com/anthropics/claude-code/issues/41907) | **23 👍 / 13 comments** — Related to above: all previous output collapses/hidden during conversations, preventing review of recent work. |
| 3 | [**#42553** — v2.1.90 removed full session scroll history in terminal](https://github.com/anthropics/claude-code/issues/42553) | **6 👍 / 3 comments** — Latest version truncates scrollback to ~2-3 pages instead of full session history. Regression confirmed in v2.1.90. |
| 4 | [**#41965** — Flicker-free rendering destroys terminal scrollback by default](https://github.com/anthropics/claude-code/issues/41965) | **16 👍 / 8 comments** — The new "flicker-free alt-screen rendering" feature is enabled by default and breaks expected terminal scrollback behavior. |
| 5 | [**#42024** — v2.1.89: scrollback history lost in terminal (Ghostty)](https://github.com/anthropics/claude-code/issues/42024) | **14 👍 / 13 comments** — Terminal-specific report (Ghostty) of scrollback being lost; responses disappear before users can read them. |
| 6 | [**#42052** — Max 20x plan: 100% usage after 2 hours of light work](https://github.com/anthropics/claude-code/issues/42052) | **9 👍 / 17 comments** — Billing/usage concern: $200/mo plan hit 100% usage with only 5 commits and no agents. Unusual pattern not seen before. |
| 7 | [**#38055** — Cowork: Minor update permanently deletes chat history and scheduled tasks](https://github.com/anthropics/claude-code/issues/38055) | **1 👍 / 17 comments** — Data loss in Cowork feature during minor version updates. Critical for users relying on persistent workflows. |
| 8 | [**#3433** — Cannot connect to GitHub's remote MCP server using OAuth](https://github.com/anthropics/claude-code/issues/3433) | **114 👍 / 36 comments** — Longstanding Linux auth issue with GitHub MCP OAuth. High community interest, still unresolved since July 2025. |
| 9 | [**#10794** — Terminal Flickering Causes Complete VSCode Crashes on macOS](https://github.com/anthropics/claude-code/issues/10794) | **43 👍 / 24 comments** — Critical macOS bug where terminal rendering flicker crashes VSCode entirely. Ongoing since Nov 2025. |
| 10 | [**#23109** — Trusted workspace patterns to skip trust prompt for git worktrees](https://github.com/anthropics/claude-code/issues/23109) | **68 👍 / 8 comments** — Highly requested QoL improvement for users with many worktrees. Would eliminate repetitive trust prompts. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [**#42807** — fix(hookify): restore stop and prompt simple pattern rules](https://github.com/anthropics/claude-code/pull/42807) | Fixes hookify mapping for `event: stop` → `reason` and `event: prompt` → `user_prompt`. Corrects pattern rules that were resolving to wrong fields. |
| 2 | [**#39148** — feat: add preserve-session plugin](https://github.com/anthropics/claude-code/pull/39148) | Adds path-independent session history via UUID registry. Survives directory renames/moves with `/preserve-session:fix` command. |
| 3 | [**#38728** — Add memory-alert plugin](https://github.com/anthropics/claude-code/pull/38728) | Monitors Claude Code's process RSS and alerts when memory exceeds threshold. Works on macOS and Linux. |
| 4 | [**#42245** — Add EvalView plugin](https://github.com/anthropics/claude-code/pull/42245) | Regression testing for AI agents via structural diffing of tool calls against golden baselines. **CLOSED**. |
| 5 | [**#42701** — fix init-firewall.sh crash from ipset](https://github.com/anthropics/claude-code/pull/42701) | Fixes devcontainer launch failure when domains resolve to duplicate IPs by adding `-exist` flag to ipset. |
| 6 | [**#42505** — fix(commit-commands): use valid git flag -b](https://github.com/anthropics/claude-code/pull/42505) | Corrects `git checkout --branch` (invalid) to `git checkout -b`. Fixes `/commit-push-pr` workflow step 1. |
| 7 | [**#42265** — docs(plugins): fix deprecated install instructions](https://github.com/anthropics/claude-code/pull/42265) | Updates plugin docs to use native install commands instead of deprecated npm. Fixes stale `docs.claude.com` links. |
| 8 | [**#42665** — Docs: full comprehensive codebase documentation](https://github.com/anthropics/claude-code/pull/42665) | Community-contributed architecture deep-dive, MCP explanation, and known issues documentation. |
| 9 | [**#39043** / [**#42604**]** — Remove "retro-futuristic" recommendation](https://github.com/anthropics/claude-code/pull/39043) | Community consensus PRs to remove controversial design style recommendation from Frontend Design Skill. |
| 10 | [**#41518** / [**#41611**]** — Open source Claude Code attempts](https://github.com/anthropics/claude-code/pull/41518) | Community efforts to extract/reconstruct source from npm package source maps. Builds and runs basic commands. |

---

## Feature Request Trends

1. **Terminal scrollback control** — Multiple requests (#38411, #41965, #42553) for scroll lock, pause auto-scroll, and preservation of full session history
2. **Hierarchical/structured memory** — Request for memory system beyond flat 200-line `MEMORY.md` limit (#40614)
3. **Trusted workspace patterns** — Ability to skip trust prompts for known safe directories/worktrees (#23109)
4. **Remote control for Claude Desktop** — Enable remote session management (#29006)
5. **Session file compaction** — GC/compaction for JSONL session files that grow unbounded (#42810)

---

## Developer Pain Points

1. **Terminal rendering regressions** — The v2.1.89–v2.1.90 "flicker-free" changes have broken scrollback across multiple terminals (Ghostty, VSCode, macOS Terminal). Users cannot review conversation history.
2. **MCP authentication fragility** — OAuth flows, Bearer tokens, and authorization headers are failing inconsistently across platforms (#3433, #39271, #33817, #40102).
3. **Cowork data loss** — Updates are deleting chat history and scheduled tasks without migration (#38055, #40142).
4. **Usage metering unpredictability** — Reports of 100% usage depletion with minimal workloads raise billing concerns (#42052).
5. **Windows platform stability** — Frequent session crashes, git detection failures, and VM connection timeouts plague Windows users (#42794, #34496, #42784).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest - 2026-04-03

## 1. Today's Highlights
The team has rolled out **v0.37.0-preview.1** and **v0.36.0-nightly**, prioritizing stability with critical patches for Windows PowerShell translations and UI flicker. A major focus is being placed on UI refinement, specifically the new **"TerminalBuffer" mode** and **"Compact Tool Output"** settings, aiming to solve persistent rendering and scrolling issues. Meanwhile, the community is actively discussing agent behavior, specifically around **memory management** and **instruction adherence** (halting/editing).

## 2. Releases

### **v0.37.0-preview.1**
*   **Summary:** A patch release focused on critical fixes.
*   **Changes:** Includes a cherry-pick fix for patch version updates.
*   [View Release](https://github.com/google-gemini/gemini-cli/pull/24561)

### **v0.36.0-nightly.20260402.13ccc1645**
*   **Summary:** Daily build containing core logic fixes.
*   **Changes:**
    *   Fixed subagent tool updates to apply configuration overrides immediately.
    *   Resolved a UI flicker bug at list boundaries in `BaseSelectionList`.
*   [View Release](https://github.com/google-gemini/gemin)

## 3. Hot Issues

1.  **[Windows] Shift + Tab Not Working (#20314)** - *High Engagement*
    A persistent issue where `Shift + Tab` fails to toggle modes on Windows (specifically older Node versions) is frustrating users. Despite being closed, it gathered 30 comments, indicating a high volume of duplicated reports and user impact.
    [Issue #20314](https://github.com/google-gemini/gemini-cli/issues/20314)

2.  **False "Capacity Exhausted" Error with OAuth (#24101)**
    Users report that switching from API Key to OAuth causes a false "Capacity Exhausted" error, effectively blocking usage despite valid subscriptions. This is flagged as a critical availability issue.
    [Issue #24101](https://github.com/google-gemini/gemini-cli/issues/24101)

3.  **Pasting Large Content Triggers Multiple Prompts (Mac) (#24557)**
    On Mac iTerm, pasting large code blocks via `CMD+V` triggers an unwanted "auto-submit" storm, whereas `CTRL+V` works correctly. This affects workflow efficiency for developers pasting logs or code.
    [Issue #24557](https://github.com/google-gemini/gemini-cli/issues/24557)

4.  **CLI Hangs Indefinitely on "Thinking" (#24570)**
    Even with an AI Pro subscription, users are experiencing the CLI getting stuck in a "Thinking" state for extended periods (>5 minutes) on simple prompts, requiring manual termination.
    [Issue #24570](https://github.com/google-gemini/gemini-cli/issues/24570)

5.  **Agent Ignores "Halt" Instructions (#24576)**
    A reliability issue where the model acknowledges a halt command ("I will now halt") but continues to execute actions, breaking trust in automated workflows.
    [Issue #24576](https://github.com/google-gemini/gemini-cli/issues/24576)

6.  **Agent Makes Changes Despite Instructions (#24448)**
    Users report that the agent modifies code even when explicitly told not to, highlighting challenges with instruction adherence in "Plan" or "Review" modes.
    [Issue #24448](https://github.com/google-gemini/gemini-cli/issues/24448)

7.  **SSH Text Scrambling (#24202)**
    Windows users connecting via SSH to Linux cloudtops are seeing scrambled text, rendering the CLI unusable in remote development environments.
    [Issue #24202](https://github.com/google-gemini/gemini-cli/issues/24202)

8.  **Non-Interactive Output Regression (#24574)**
    `gemini skills list` no longer outputs to stdout in non-interactive scripts (Python), breaking automation pipelines that rely on parsing this output.
    [Issue #24574](https://github.com/google-gemini/gemini-cli/issues/24574)

9.  **Extension Plan Directory Conflict (#24572)**
    Active extensions with a `plan.directory` are hijacking the global plan directory, causing configuration conflicts between different tools.
    [Issue #24572](https://github.com/google-gemini/gemini-cli/issues/24572)

10. **Memory Routing: Global vs. Project (#22819)**
    A discussion on implementing proper memory segmentation (Global `~/.gemini/` vs Project `.gemini/`) so the agent remembers user preferences without polluting project context.
    [Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)

## 4. Key PR Progress

1.  **feat(ui): Enable "TerminalBuffer" mode (#24512)**
    A major UI overhaul introducing static rendering to eliminate flicker in alternate buffer mode. This is a top-priority fix for visual stability.
    [PR #24512](https://github.com/google-gemini/gemini-cli/pull/24512)

2.  **fix(core): Remove broken PowerShell translation (#24571)**
    Fixes a bug on Windows where the `replace` tool blanks out files. It removes redundant PowerShell translation in favor of native C# helpers.
    [PR #24571](https://github.com/google-gemini/gemini-cli/pull/24571)

3.  **feat(ui): Enable "Compact Tool Output" by default (#24509)**
    Seeks to declutter the default UI by enabling compact summaries for tool outputs, addressing "noise" complaints from users.
    [PR #24509](https://github.com/google-gemini/gemini-cli/pull/24509)

4.  **fix(cli): Ensure skills list outputs to stdout (#24566)**
    A fix for non-interactive environments, ensuring `console.log` is not dropped when running scripts, restoring automation compatibility.
    [PR #24566](https://github.com/google-gemini/gemini-cli/pull/24566)

5.  **feat(cli): Add experimental /btw feature (#24270)**
    Introduces an ephemeral "side inquiry" command allowing users to ask questions without modifying the main conversation history or state.
    [PR #24270](https://github.com/google-gemini/gemini-cli/pull/24270)

6.  **fix(core): Shift to MRU for extension plan directories (#24569)**
    Fixes plan directory hijacking by implementing a Most Recently Used (MRU) dynamic resolution, ensuring strict isolation.
    [PR #24569](https://github.com/google-gemini/gemini-cli/pull/24569)

7.  **feat: Implement alternate buffer toggling (#24215)**
    Adds an `Alt+T` shortcut to toggle between regular and alternate screen buffers, helping users manage long sessions.
    [PR #24215](https://github.com/google-gemini/gemini-cli/pull/24215)

8.  **docs(evals): Sync README with test helpers (#24111)**
    Contributor-focused update to sync evaluation documentation with actual implementation code, reducing onboarding friction.
    [PR #24111](https://github.com/google-gemini/gemini-cli/pull/24111)

9.  **fix(ui): Autocomplete immediate execution (#23956)**
    Fixes a regression where autocomplete suggestions would "trap" users, preventing immediate execution of commands.
    [PR #23956](https://github.com/google-gemini/gemini-cli/pull/23956)

10. **docs: Add vi mode shortcuts (#23853)**
    Documentation update adding a reference for vi mode shortcuts and clarifying MCP sandbox setups.
    [PR #23853](https://github.com/google-gemini/gemini-cli/pull/23853)

## 5. Feature Request Trends

*   **Advanced Memory Management:** Users want the CLI to distinguish between global preferences (coding style) and project-specific context (architecture), requesting automated memory routing.
*   **Agent Control & Safety:** There is a strong demand for "hard stops" or stricter adherence to approval modes (e.g., *Plan Mode*), preventing the agent from executing code edits when it claims it will halt.
*   **UI "Quiet Mode":** Requests for more compact, information-dense outputs are rising, driven by the desire to remove "border-boxed" verbose tool outputs in favor of concise summaries.
*   **Remote Development Support:** Features to detect and adapt to SSH environments (fixing scrambling/latency) are becoming essential for cloud-based workflows.

## 6. Developer Pain Points

*   **Windows Stability:** Developers on Windows face distinct friction points, specifically regarding keybindings (`Shift+Tab`), PowerShell execution errors, and SSH rendering.
*   **OAuth Reliability:** The OAuth login flow is perceived as unstable compared to API keys, often leading to false capacity errors.
*   **Agent Reliability:** The agent's tendency to "hallucinate" actions (making changes while saying it won't, or failing to halt) undermines trust in autonomous operation.
*   **Input Handling:** Large clipboard pastes triggering multiple submissions disrupt the workflow of users feeding context to the model.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-03

## 1. Today's Highlights
Version **v1.0.16** was released yesterday, bringing significant improvements to MCP (Model Context Protocol) tooling, including better authentication handling and timeline visibility. The community is actively discussing stability concerns, particularly regarding HTTP/2 connection handling and rate limits, while also requesting the restoration of removed features like `no-alt-screen` and Gemini model support.

## 2. Releases

### v1.0.16 (2026-04-02)
**Key Changes:**
- **MCP Improvements:** Tool calls now display the tool name and parameter summary in the timeline for better visibility
- **SQL Tool Fix:** SQL prompt tags no longer appear when the SQL tool is excluded via `excludedTools` or `availableTools`
- **Authentication:** MCP server now reconnects correctly with valid authentication when the working directory changes
- **New Feature:** Added `PermissionRequest` capability

### v1.0.16-1 (Pre-release)
- Pre-release build of 1.0.16-1 available for testing

---

## 3. Hot Issues

### 1. [Rate Limit & Transient API Errors](https://github.com/github/copilot-cli/issues/2101) `#2101`
**Why it matters:** Users are frequently hitting rate limits with "transient API error" messages that lead to 1-minute lockouts. This impacts productivity significantly for heavy CLI users.
**Community reaction:** 12 👍 | 16 comments

### 2. [HTTP/2 GOAWAY Race Condition](https://github.com/github/copilot-cli/issues/2421) `#2421`
**Why it matters:** A deep technical analysis reveals the CLI's undici HTTP/2 connection pool has a race condition when handling GOAWAY frames, causing cascading retry failures and wasting premium requests.
**Community reaction:** 7 👍 | Consolidates multiple related issues (#1743, #1754, #2050, #2101, #2189)

### 3. [Bring Back no-alt-screen](https://github.com/github/copilot-cli/issues/2334) `#2334`
**Why it matters:** The removal of `no-alt-screen` mode has significantly impacted usability—users can no longer scroll back through history, use terminal find, or see history while reviewing large file changes.
**Community reaction:** 14 👍 (highest engagement on a UI issue)

### 4. [MCP Servers Blocked by Policy (404 Error)](https://github.com/github/copilot-cli/issues/2479) `#2479`
**Why it matters:** Individual Copilot Pro users are seeing MCP servers blocked with a 404 policy fetch error, despite having MCP enabled in web settings. This blocks critical custom server usage.
**Community reaction:** 10 👍 | 5 comments | Related: [#2481](https://github.com/github/copilot-cli/issues/2481)

### 5. [Light Theme Broken](https://github.com/github/copilot-cli/issues/135) `#135`
**Why it matters:** A long-standing visual bug where light theme terminals render the CLI unreadable. Tagged for "2025 EOY" fix but still open.
**Community reaction:** 9 👍 | 10 comments | Created 2025-09-30

### 6. [400 Errors on Code Review](https://github.com/github/copilot-cli/issues/1274) `#1274`
**Why it matters:** 95% failure rate on diff code review tasks with 400 errors—unclear if server-side validation or CLI request formatting issue.
**Community reaction:** 6 👍 | 14 comments

### 7. [Ctrl+Shift+C Copy Broken on Linux](https://github.com/github/copilot-cli/issues/2082) `#2082`
**Why it matters:** Standard Linux terminal copy shortcut no longer works in Copilot CLI since v1.0.4, disrupting established workflows.
**Community reaction:** 3 👍 | 13 comments

### 8. [Restore Gemini Pro Support](https://github.com/github/copilot-cli/issues/2434) `#2434`
**Why it matters:** v1.0.14 quietly dropped support for `gemini-3-pro-preview`. Users value model variety and want it restored.
**Community reaction:** 4 👍 | 4 comments

### 9. [Claude Sonnet 4.6 Connection Failures](https://github.com/github/copilot-cli/issues/2050) `#2050`
**Why it matters:** HTTP/2 GOAWAY connection terminated errors with Claude Sonnet 4.6, while Gemini 3 Pro works fine on identical tasks.
**Community reaction:** 4 👍 | 7 comments

### 10. [Loading Environment Spinner Never Resolves](https://github.com/github/copilot-cli/issues/2462) `#2462`
**Why it matters:** UI bug in v1.0.15+ where "Loading environment" displays indefinitely despite the CLI being fully functional. Confusing UX.
**Community reaction:** 6 👍 | Related: [#2459](https://github.com/github/copilot-cli/issues/2459)

---

## 4. Key PR Progress
No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

| Trend | Description |
|-------|-------------|
| **Model Diversity** | Strong demand for restoring Gemini models and maintaining support for multiple LLM backends |
| **Terminal UX Customization** | Requests for `no-alt-screen` mode restoration, better scrollback, and find-in-history support |
| **Mobile/Termux Support** | Persistent interest in running Copilot CLI on Android via Termux |
| **WSL Integration** | Clipboard image paste support for Windows Subsystem for Linux users |
| **Discoverability** | Request for built-in command browser to surface features like `/fleet`, `/delegate`, `/research` |
| **Hook System Improvements** | `sessionStart` hook reliability—currently either never fires or fires on every message |

---

## 6. Developer Pain Points

### 🔴 Connection Stability
HTTP/2 GOAWAY frames and connection pool race conditions are causing cascading failures, particularly with Claude models. Users report wasted premium requests due to retry logic issues.

### 🔴 Rate Limiting Friction
Transient API errors leading to rate limit lockouts are disrupting workflows. The 1-minute wait periods are particularly painful for interactive CLI usage patterns.

### 🔴 MCP Policy Confusion
Individual users on Copilot Pro are blocked from using custom MCP servers due to 404 policy fetch errors. The error messaging doesn't clearly distinguish between enterprise policy restrictions and individual account bugs.

### 🔴 Copy/Paste Corruption
Invisible characters (BOM, unicode) are being prepended to copied commands from code blocks, causing "command not found" errors when pasted into external terminals. Multiple reports: [#2285](https://github.com/github/copilot-cli/issues/2285), [#2218](https://github.com/github/copilot-cli/issues/2218).

### 🔴 Plugin/Agent Model Selection
Plugins installed via `copilot plugin install` ignore the `model:` frontmatter field, always falling back to the session default. This breaks agent-specific model optimization.

### 🔴 Auth Token Conflicts
Multiple CLI instances invalidate each other's auth tokens, making parallel workflows impossible. Users must repeatedly run `/login` when switching between windows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-04-03

## 1. Today's Highlights
Version **1.30.0** has been released, marking a significant update focused on **Windows stability** and **Session Management**. The release introduces highly requested workflow controls via `--plan` mode and `/undo` & `/fork` commands, while critical Windows PowerShell detection bugs were patched. Under the hood, the team merged over 13 commits enhancing session resumption, export UX, and API provider compatibility.

## 2. Releases

### **v1.30.0**
*   **Windows Fixes:** Resolved critical PowerShell path detection issues ([#1703](https://github.com/MoonshotAI/kimi-cli/pull/1703), [#1713](https://github.com/MoonshotAI/kimi-cli/pull/1713)) that caused shell tools to fail.
*   **New Features:** Added `--plan` flag for structured planning mode and improved session handling.
*   **Core Updates:** Integrated fixes for custom headers across all LLM providers and improved subagent error handling.

## 3. Hot Issues

1.  **[Bug] SetTodoList Storm on v1.29.0** ([#1710](https://github.com/MoonshotAI/kimi-cli/issues/1710))
    *   **Why:** A high-priority regression where the agent enters a loop repeatedly setting todo lists after the v1.29.0 update.
    *   **Reaction:** Users report freezing behavior; likely addressed by stability patches in v1.30.0.

2.  **[Enhancement] Workflow Orchestration** ([#1721](https://github.com/MoonshotAI/kimi-cli/issues/1721))
    *   **Why:** A deep proposal to move beyond simple prompts to structured, deterministic multi-stage development workflows.
    *   **Reaction:** Highlights a user need for stricter control over agent behavior in complex tasks.

3.  **[Bug] PowerShell Not Found on Windows** ([#1702](https://github.com/MoonshotAI/kimi-cli/issues/1702))
    *   **Why:** Critical blocker for Windows users where the shell tool failed to locate `powershell.exe`.
    *   **Reaction:** Resolved in v1.30.0 via path validation fallbacks.

4.  **[Enhancement] Custom Session Naming** ([#1729](https://github.com/MoonshotAI/kimi-cli/issues/1729))
    *   **Why:** Current auto-generated titles make organizing multiple sessions difficult in `/sessions`.
    *   **Reaction:** Widely requested quality-of-life improvement for power users.

5.  **[Feature] Add `/copy` Command** ([#1725](https://github.com/MoonshotAI/kimi-cli/issues/1725))
    *   **Why:** Users struggle to copy code blocks from terminal output without formatting errors.
    *   **Reaction:** Straightforward UX request; PR already submitted by community member.

6.  **[Bug] Error 400 Content Filter** ([#1671](https://github.com/MoonshotAI/kimi-cli/issues/1671))
    *   **Why:** "High risk" false positives triggering content filters during normal code quoting.
    *   **Reaction:** Frustration regarding model-level safety filters interfering with coding tasks.

7.  **[Enhancement] Windows Line Breaks (CRLF vs LF)** ([#1719](https://github.com/MoonshotAI/kimi-cli/issues/1719))
    *   **Why:** Kimi CLI forces CRLF on Windows, breaking consistency in cross-platform LF projects.
    *   **Reaction:** Request for auto-detection or configuration to respect project git attributes.

8.  **[Feature] Claude-Compatible Plugin Support** ([#1714](https://github.com/MoonshotAI/kimi-cli/issues/1714))
    *   **Why:** Request to support the existing Claude plugin ecosystem within Kimi CLI.
    *   **Reaction:** significant interest in extending tool capabilities via local plugins.

9.  **[Docs] Request for Better Documentation** ([#1711](https://github.com/MoonshotAI/kimi-cli/issues/1711))
    *   **Why:** Users report unclear model support lists and bugs in the API key console.
    *   **Reaction:** Calls for better onboarding materials and console reliability.

10. **[Bug] Subagent Creation Failure** ([#1720](https://github.com/MoonshotAI/kimi-cli/issues/1720))
    *   **Why:** Repeated failures when trying to initialize specific agents on WSL.
    *   **Reaction:** Isolated but blocking issue for affected users.

## 4. Key PR Progress

1.  **feat(cli): add --session/--resume flag** ([#1716](https://github.com/MoonshotAI/kimi-cli/pull/1716))
    *   Re-introduces the session picker with CJK-safe shortening, allowing users to resume previous sessions via `--resume`.

2.  **feat(plugin): add Claude-compatible local plugin support** ([#1715](https://github.com/MoonshotAI/kimi-cli/pull/1715))
    *   Adds a compatibility layer to load local Claude plugins, addressing the ecosystem demand.

3.  **feat(shell): add /undo and /fork commands** ([#1723](https://github.com/MoonshotAI/kimi-cli/pull/1723))
    *   Implements powerful workflow commands to branch session history or revert to previous states.

4.  **fix(shell): use git ls-files for @ file mention** ([#1588](https://github.com/MoonshotAI/kimi-cli/pull/1588))
    *   Optimizes file discovery in large repos (65k+ files), preventing completion failures.

5.  **fix(core): pass custom_headers to all LLM providers** ([#1732](https://github.com/MoonshotAI/kimi-cli/pull/1732))
    *   Critical fix ensuring custom headers (used for proxies/auth) aren't dropped for OpenAI/Anthropic/Google.

6.  **feat(grep): add include_ignored param and sensitive file protection** ([#1722](https://github.com/MoonshotAI/kimi-cli/pull/1722))
    *   Enhances Grep tool to search ignored files while adding a guard to prevent reading sensitive data (e.g., `.env`).

7.  **feat(slash): add /copy command** ([#1726](https://github.com/MoonshotAI/kimi-cli/pull/1726))
    *   Implements the requested feature to copy the latest assistant response directly to the clipboard.

8.  **fix(shell): defer background auto-trigger while typing** ([#1731](https://github.com/MoonshotAI/kimi-cli/pull/1731))
    *   Improves UX by preventing background tasks from stealing the prompt while the user is typing (fixes CJK input issues).

9.  **feat(hooks): add inject_prompt** ([#1683](https://github.com/MoonshotAI/kimi-cli/pull/1683))
    *   Simplifies context injection via hooks, enabling more dynamic system prompt modifications.

10. **chore: bump kimi-cli 1.30.0** ([#1734](https://github.com/MoonshotAI/kimi-cli/pull/1734))
    *   The release PR bundling the latest features, including Kosong and Pykaos dependency bumps.

## 5. Feature Request Trends

*   **Deterministic Workflows:** Moving from conversational chat to structured "Workflow Orchestration" and "Plan Mode" to ensure reliable execution of complex tasks.
*   **Session Archaeology:** Strong demand for tools to manage, rename, fork, and resume long-running context sessions (`/undo`, `/fork`, `--resume`).
*   **Ecosystem Compatibility:** Users want bridges to existing tooling, specifically Claude-compatible plugins and local skill directories.

## 6. Developer Pain Points

*   **Windows Experience:** Frequent issues with path resolution (`powershell.exe` not found) and line ending (CRLF) enforcement continue to frustrate Windows developers.
*   **Agent Stability:** "Loops" (like the SetTodoList storm) and vague error messages (e.g., "None" or Content Filter 400) hinder trust in the agent's autonomy.
*   **Context Management:** Losing context in long chats and the inability to easily organize or locate past sessions remains a primary productivity blocker.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-04-03

## 1. Today's Highlights
The OpenCode community is currently focused on resolving significant performance bottlenecks, specifically regarding **memory consumption** and **CPU usage spikes** on Apple Silicon. A centralized "Memory Megathread" has been established to coordinate debugging efforts, acknowledging scattered reports of excessive resource usage. Additionally, the ecosystem is expanding with new quality-of-life features, including better mobile touch support and enhanced session affinity for providers.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

*   **[ perf, core] Memory Megathread** ([#20695](https://github.com/anomalyco/opencode/issues/20695))
    The core team has opened a centralized thread to tackle memory leaks. Users are reporting instances of OpenCode consuming excessive memory (up to 20GB+). The team specifically requests *heap snapshots* rather than LLM-generated suggestions to diagnose the root cause effectively.

*   **[bug, opentui] TUI freezes periodically on WSL2** ([#5361](https://github.com/anomalyco/opencode/issues/5361))
    A persistent regression (v1.0.129) causes the TUI to freeze for up to 10 seconds on WSL2. While input is buffered, the UI lockup significantly hampers the development flow for Windows users.

*   **[bug, opentui] Shift+Enter keybinding not working** ([#1505](https://github.com/anomalyco/opencode/issues/1505))
    A highly upvoted (👍 92) bug details that `Shift+Enter` fails to insert a newline in the input field, though `Ctrl+J` works as a workaround. This remains a major friction point for typing multi-line prompts.

*   **[bug, zen] Failed query: `select usage from ip`** ([#20694](https://github.com/anomalyco/opencode/issues/20694))
    New users installing OpenCode on VPS environments are hitting a MySQL query failure regarding IP usage tracking. This "first-run" crash is preventing adoption in server environments.

*   **[bug, perf] High CPU Usage and UI Freeze (tauri://localhost)** ([#20008](https://github.com/anomalyco/opencode/issues/20008))
    Since the March 30 updates, desktop users on MacBook Pro M5 chips are experiencing 125%+ CPU spikes and complete UI freezes during text entry.

*   **[bug] Opus 4.6 prefill errors** ([#13768](https://github.com/anomalyco/opencode/issues/13768))
    Users utilizing Opus 4.6 via GitHub Copilot are encountering frequent stops due to "This model does not support assistant message prefill," interrupting complex workflows.

*   **[bug, opentui] Cannot scroll to beginning of long conversations** ([#6137](https://github.com/anomalyco/opencode/issues/6137))
    The TUI message fetch limit is hardcoded to 100, making it impossible to scroll back to the start of long conversations.

*   **[bug, core] Cache hit rate is low / zero** ([#14065](https://github.com/anomalyco/opencode/issues/14065))
    Users report that prompt caching appears ineffective (0% hit rate) when using OpenCode with providers like DeepInfra, leading to higher costs and slower processing.

*   **[bug, windows] WSL outputs only one word per line during thinking** ([#20234](https://github.com/anomalyco/opencode/issues/20234))
    A rendering bug in WSL causes the "thinking" output stream to display vertically (one word per line) instead of flowing text, making reasoning traces difficult to read.

*   **[bug, perf] LSP freezes and diagnostics timeout** ([#13328](https://github.com/anomalyco/opencode/issues/13328))
    The 3-second timeout for LSP diagnostics is too short for heavy language servers (e.g., Kotlin), causing freezes and empty diagnostic returns.

## 4. Key PR Progress

*   **feat(app): Mobile Touch Optimization** ([PR #18767](https://github.com/anomalyco/opencode/pull/18767))
    Introduces comprehensive touch optimizations for the OpenCode App, aiming to provide a seamless experience on tablets and mobile devices without degrading the desktop interface.

*   **fix(copilot): dynamically discover API endpoint** ([PR #20758](https://github.com/anomalyco/opencode/pull/20758))
    Updates the Copilot plugin to dynamically switch between `api.business.githubcopilot.com` and `api.individual.githubcopilot.com`, fixing 403 errors for Business/Enterprise users.

*   **perf(opencode): batch snapshot diffFull blob reads** ([PR #20752](https://github.com/anomalyco/opencode/pull/20752))
    Significant performance optimization that batches `git cat-file` calls instead of spawning separate processes per file, speeding up snapshot diff generation.

*   **feat(tui): add session_list_limit for session picker** ([PR #6138](https://github.com/anomalyco/opencode/pull/6138))
    Addresses slowness in the session picker by adding a `tui.session_list_limit` config (default 150), reducing the load when hundreds of sessions exist.

*   **feat(sdk): add settingSources to control config** ([PR #20739](https://github.com/anomalyco/opencode/pull/20739))
    Allows SDK users to selectively disable config sources (global, project, remote), preventing pollution of specialized agent behaviors.

*   **fix(tui): stop streaming markdown after message completes** ([PR #13854](https://github.com/anomalyco/opencode/pull/13854))
    Fixes a bug where the TUI treated finished messages as still streaming, causing the last table row to render incorrectly.

*   **feat: Send x-session-affinity headers** ([PR #20744](https://github.com/anomalyco/opencode/pull/20744))
    Adds headers to allow providers to correlate requests across sessions and sub-sessions, improving analytics and debugging for cloud usage.

*   **fix(llm): tolerate wrapped workflow tool args** ([PR #20756](https://github.com/anomalyco/opencode/pull/20756))
    Fixes JSON parse errors in GitLab workflow tool calls where arguments were wrapped in non-standard strings.

*   **feat(tui): add configurable syntax tokens** ([PR #6130](https://github.com/anomalyco/opencode/pull/6130))
    Decouples XML/HTML tag highlighting from generic error/keyword tokens, allowing themes to style tags independently.

*   **fix(opencode): Subtasks don’t inherit thinking level** ([PR #20742](https://github.com/anomalyco/opencode/pull/20742))
    Ensures that when a user selects a specific thinking level (e.g., "high"), subtasks and agents spawned during the session respect that setting.

## 5. Feature Request Trends
*   **Asynchronous Loading:** A strong push to load MCP servers and plugins asynchronously to reduce startup time (currently blocking the UI for seconds).
*   **Environmental Transparency:** Requests to export the internal HTTP server URL as an environment variable so child processes can easily interact with the running OpenCode instance.
*   **History Management:** Users want the ability to view and load historical sessions beyond the recent 5-100 item limits currently hardcoded in the TUI.

## 6. Developer Pain Points
*   **Resource Intensive:** The application is perceived as increasingly heavy, with users reporting memory leaks (up to 20GB) and high CPU usage on native hardware (M5 Pro).
*   **WSL Stability:** The Windows Subsystem for Linux experience is currently unstable, suffering from periodic freezes and rendering glitches (streaming text verticality).
*   **Model Compatibility:** As new models (like Opus 4.6) release, integration issues regarding "prefilling" and cache handling are causing frequent workflow interruptions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-04-03
**Data Source:** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. Today's Highlights
The community is buzzing with requests for **Qwen 3.6** integration, leading to an immediate response from contributors with model support PRs. The latest **v0.14.0-preview.5** release addresses path handling and proxy configurations, while significant architectural discussions are taking place regarding context compression strategies and hook system extensibility.

## 2. Releases
### **v0.14.0-preview.5**
This preview release focuses on stability improvements for the extension system and network configurations.
*   **Path Handling:** Fixed `.qwen` path replacement in markdown files during extension installation.
*   **Proxy Support:** Normalized proxy URLs to support addresses without protocol prefixes (e.g., allowing `127.0.0.1:7890` instead of `http://127.0.0.1:7890`).
*   **Contributors:** @DennisYu07

[View Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.0-preview.5)

---

## 3. Hot Issues
1.  **[FR] Qwen 3.6 Model Support (#2832, #2806, #2759)**
    A surge of users are requesting the integration of the latest **Qwen 3.6** model. Users noted its availability in competing tools ("OpenCode") and expressed frustration that it is missing in the official Qwen Code tool.
    *   *Reaction:* High engagement; users are actively asking for ETA.

2.  **[Bug] Shell Command Execution Freezes (#2740)**
    Users report that Qwen Code freezes completely when attempting to run shell commands (like `ls`). The error traces point to a missing `tree-sitter` WASM file, causing an async load failure.
    *   *Impact:* Critical workflow blocker.

3.  **[Bug] Implicit Cache Failure & High Costs (#2823)**
    A user reported a **$456 bill** for 20 hours of usage, alleging that the implicit cache on the `/apps/anthropic` endpoint is not working correctly. This raises concerns about cost management for heavy users.

4.  **[Bug] PostToolUse Hook Context Not Surfaced (#2809)**
    Developers utilizing the hook system found that `hookSpecificOutput.additionalContext` is documented but not actually passed to the AI model, breaking expected automation flows.

5.  **[Bug] MCP Tool Validation Fails with Union Types (#2839)**
    Advanced users integrating MCP (Model Context Protocol) tools are hitting validation errors when parameters use Python-style union types (e.g., `list[str] | None`), causing false positive errors.

6.  **[Bug] Windows MSYS2/Path Recognition Issues (#2780, #2826)**
    Windows users are facing distinct challenges, specifically path recognition errors (spaces inserted incorrectly in paths) and crashes in MSYS2 UCRT environments due to incorrect Bash selection.

7.  **[Bug] Sass Update Infinite Loop (#677)**
    A long-standing P1 bug where the agent enters an infinite loop while updating Sass `@import` to `@use` syntax. The issue remains open and affects large refactoring tasks.

8.  **[UX] Theme Reset on Cancel (#2833)**
    A minor but annoying UX bug: pressing `Esc` to cancel a theme change resets the theme to default instead of reverting to the previously active one.

9.  **[Config] Output Language Regeneration (#2830)**
    The `~/.qwen/output-language.md` file is being regenerated at every session start based on system locale, overwriting manual user configurations.

10. **[Integration] VSCode Plugin Failure with BaiLian (#2828)**
    Users configuring Qwen with Alibaba Cloud's BaiLian API are encountering "Slash command not supported" errors in the VSCode extension, blocking usage after switching from free tier to paid API keys.

---

## 4. Key PR Progress
1.  **feat: add Qwen3.6-Plus model support (#2820)**
    Direct response to community demand. This PR updates the default model configuration to `qwen3-coder-plus` (likely Qwen 3.6).
    *   *Status:* Open

2.  **feat: add bun runtime support (#2838)**
    Proposes adding **Bun** as an alternative runtime to Node.js, promising 3-5x faster startup times and lower memory usage.
    *   *Status:* Open

3.  **feat(cli): add /loop command (#2643)**
    Adds a new slash command `/loop` for periodic task execution, enabling agentic workflows that require scheduled runs.
    *   *Status:* Open

4.  **feat(compression): add microcompact strategy (#2813)**
    Introduces a "zero-cost" compression strategy that truncates old tool results without an LLM API call, aiming to reduce context window costs.
    *   *Status:* Open

5.  **feat(hooks): Add HTTP Hook and Async Hook support (#2827)**
    Significantly extends the hook system to support HTTP webhooks and asynchronous functions, enabling better external integrations.
    *   *Status:* Open

6.  **fix(cli): remove quote-based drag detection (#2837)**
    fixes input lag when typing quotes (`'`, `"`) by removing a 100ms delay intended for drag-and-drop detection.
    *   *Status:* Open

7.  **feat(permissions): add permission denial tracking (#2831)**
    Implements a "nudging" system where the model receives escalating context if it repeatedly tries to execute a denied command, preventing endless loops.
    *   *Status:* Open

8.  **feat(cli, webui): add follow-up suggestions feature (#2525)**
    Implements "Next-Step Suggestions" (NES) similar to competitors, suggesting actions like "run tests" or "commit" after a task completes.
    *   *Status:* Open

9.  **fix: crash on Windows MSYS2 (#2826)**
    Targets the crash in MSYS2 environments by distinguishing between MSYS2 bash and Git Bash to ensure ConPTY compatibility.
    *   *Status:* Open

10. **feat(tools): add Markdown for Agents support (#2734)**
    Updates the `WebFetch` tool to support Cloudflare's "Markdown for Agents" spec, potentially reducing token usage by 80% when fetching web content.
    *   *Status:* Open

---

## 5. Feature Request Trends
*   **Model Updates:** The dominant trend is the immediate request for **Qwen 3.6** support across all providers.
*   **Context Management:** Developers are actively requesting better context handling, specifically **Jupyter Notebook (.ipynb)** support and smarter **context compression** to manage costs and window limits.
*   **Agent Autonomy:** Requests for "looping" or periodic execution (`/loop`) and "follow-up suggestions" indicate a desire for more autonomous, less hand-held workflows.
*   **Tooling & Hooks:** There is a strong interest in extending Qwen Code via hooks (HTTP/Async) and improving interaction with external tools (MCP schemas).

---

## 6. Developer Pain Points
*   **Input Latency:** Users are sensitive to UI lag, specifically calling out delays when typing quotes (Addressed in PR #2837).
*   **Windows Compatibility:** Path handling (spaces) and specific environment crashes (MSYS2) remain a friction point for a segment of the user base.
*   **Cost Control:** The report of high unexpected costs ($456) due to caching failures suggests a need for better transparency and reliability in token caching mechanisms.
*   **Stubborn Agents:** Developers are frustrated when the AI repeatedly attempts a forbidden action; the lack of "memory" regarding permission denials is a specific annoyance (Addressed in PR #2831).

</details>