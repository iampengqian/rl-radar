# AI CLI Tools Community Digest 2026-03-25

> Generated: 2026-03-24 22:06 UTC | Tools covered: 7

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
**Date:** 2026-03-25 | **Analyst:** Senior Technical Analyst

---

## 1. Ecosystem Overview

The AI CLI tooling landscape on March 25, 2026, shows a market aggressively transitioning from simple command-line assistants to sophisticated **agentic integrated development environments (IDEs)**. The tools are rapidly converging on core capabilities like persistent agent loops, model context protocol (MCP) integration, and robust permission systems. However, this accelerated iteration has introduced growing pains: **memory management**, **token efficiency**, and **cross-platform stability** have emerged as critical challenges across nearly all major platforms. The ecosystem is effectively in a "stabilization phase," attempting to refine complex agentic architectures for reliable daily developer use.

---

## 2. Activity Comparison

| Tool | Issues Filed/Active | PRs Merged/Active | Release Status | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | High (10+ critical) | High (10+) | **Active** (3 Alpha releases) | Rust SDK, Hook System, Token Efficiency |
| **Gemini CLI** | Moderate (10 open) | Very High (10+ open) | **Active** (v0.35.0 Stable, v0.36.0 Preview) | SDD Workflows, Sandbox Security, Performance |
| **GitHub Copilot CLI** | Moderate (10 discussions) | Low (1 closed) | **Inactive** (No new releases) | MCP Stability, Policy/Model Parity |
| **OpenCode** | High (10+ critical) | High (10+ active) | **Inactive** (No new releases) | Memory Leaks, Auth Refactor, SDK v6 |
| **Qwen Code** | Moderate (10 active) | High (10+ merged) | **Active** (Nightly builds) | Permission UX, Telegram Integration, Windows |
| *Claude Code* | *N/A* | *N/A* | *Summary Failed* | *Data Unavailable* |
| *Kimi Code* | *N/A* | *N/A* | *Summary Failed* | *Data Unavailable* |

---

## 3. Shared Feature Directions

The community feedback reveals three distinct "waves" of feature convergence:

### A. Automation & "Set and Forget" Loops
*   **Trend:** A shift from interactive REPLs to autonomous agents capable of scheduled or recurring tasks.
*   **Evidence:** **OpenAI Codex** users are requesting `/loop` commands and scheduling ([Issue #15679](https://github.com/openai/codex/issues/15679)); **Gemini CLI** implemented a `/loop` command ([PR #23714](https://github.com/google-gemini/gemini-cli/pull/23714)); **Qwen Code** added a `/loop` command for periodic execution ([PR #2643](https://github.com/QwenLM/qwen-code/pull/2643)).

### B. Security Hooks & Permission Granularity
*   **Trend:** Demand for "Guardrails" over simple permissions. Developers want code gates (linting/testing) *before* file writes, and safer sandbox boundaries.
*   **Evidence:** **OpenAI Codex** is building `PreToolUse` and `PostToolUse` hooks ([PR #15531](https://github.com/openai/codex/pull/15531)); **Gemini CLI** is dynamically expanding Linux/Windows sandboxes ([PR #23692](https://github.com/google-gemini/gemini-cli/pull/23692), [PR #23691](https://github.com/google-gemini/gemini-cli/pull/23691)); **Qwen Code** is refining human-readable permission labels ([PR #2637](https://github.com/QwenLM/qwen-code/pull/2637)).

### C. Context & Memory Management
*   **Trend:** Explicit control over context windows and memory to reduce cost and hallucinations.
*   **Evidence:** **Gemini CLI** is debating Global vs. Project memory routing ([Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)); **OpenCode** is filtering context files ([PR #17980](https://github.com/anomalyco/opencode/pull/17980)); **OpenAI Codex** users are reporting "Model Reluctance" to read long files ([Issue #15646](https://github.com/openai/codex/issues/15646)).

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
| :--- | :--- | :--- | :--- |
| **OpenAI Codex** | **Enterprise Scale & Speed** | Professional Devs, Teams | Aggressive Rust SDK optimization; Guardian review system for safety; Heavy focus on VS Code synergy. |
| **Gemini CLI** | **Workflow & Security** | Enterprise, Security-conscious | Spec-Driven Development (SDD); Advanced sandboxing (Linux/Mac/Win); Deep focus on "Plan" vs. "Act" modes. |
| **GitHub Copilot CLI** | **Ecosystem Integration** | GitHub/VS Code Users | Tight VS Code parity (org settings, models); MCP reliance; Currently focused on fixing policy regressions. |
| **OpenCode** | **Architecture & Flexibility** | Power Users, Tinkerers | "Effect"-native functional architecture; Multi-provider support (Bedrock, Copilot); Focus on TUI performance. |
| **Qwen Code** | **UX & Accessibility** | Global Devs, Hobbyists | External channel integration (Telegram); Strong focus on non-English path handling; Web UI parity. |

---

## 5. Community Momentum & Maturity

*   **Most Rapid Iteration:** **OpenAI Codex** and **Gemini CLI**. Both released multiple versions or previews in 24 hours, with heavy PR traffic focused on architectural refactoring (Rust SDK for Codex, Sandbox/Memory for Gemini).
*   **Most Active Community Feedback:** **OpenAI Codex** and **OpenCode**. Codex has high engagement on "pain points" (Token burn, Tool loops), while OpenCode has a coordinated community investigation into memory leaks.
*   **Stability Concerns:** **GitHub Copilot CLI** appears to be in a maintenance/triage phase, with no releases but significant friction regarding MCP policies and model availability regressions. **OpenCode** is facing a critical maturity test with its memory leak issues.

---

## 6. Trend Signals

1.  **The "Agentic Loop" is the New Standard:** The simultaneous appearance of `/loop` commands across Codex, Gemini, and Qwen indicates that "one-shot" prompting is obsolete. Developers want persistent background agents.
2.  **The "Token Burn" Backlash:** The intense reaction to OpenAI Codex's token consumption ([Issue #14593](https://github.com/openai/codex/issues/14593)) signals that cost-utility efficiency is now a primary competitive metric, overtaking raw model intelligence for daily dev tasks.
3.  **MCP is the New "DLL Hell":** Model Context Protocol (MCP) integration is causing significant friction (Copilot CLI false warnings, Codex tool loops). The industry needs to standardize MCP implementation or risk fragmenting the tooling ecosystem.
4.  **Platform Parity is Non-Negotiable:** Windows and Linux users are increasingly vocal about second-class citizenship (Windows sandbox issues in Codex, Linux PTY crashes in Qwen). Tools that solve cross-platform stability first will win the enterprise market.

---
*End of Report*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Snapshot Date:** 2026-03-25

---

## 1. Top Skills Ranking

The following Pull Requests represent the most active and impactful community contributions currently under review:

| Rank | Skill | Author | Status |
| :--- | :--- | :--- | :--- |
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | PGTBoos | 🟢 Open |
| **Functionality:** Automated quality control for generated documents, specifically targeting orphan word wraps, widow paragraphs, and numbering misalignment. | | |
| **Highlight:** Addresses a universal pain point—typographic errors in AI output—that affects nearly every document generation workflow. | | |

| Rank | Skill | Author | Status |
| :--- | :--- | :--- | :--- |
| 2 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | eovvidiu | 🟢 Open |
| **Functionality:** Two "meta-skills" for the marketplace. The Quality Analyzer evaluates skills across 5 dimensions (structure, docs, etc.), while the Security Analyzer checks for vulnerabilities. | | |
| **Highlight:** A mature contribution proposing standardized quality and security gates for the entire ecosystem. | | |

| Rank | Skill | Author | Status |
| :--- | :--- | :--- | :--- |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | justinwetch | 🟢 Open |
| **Functionality:** A complete revision of the existing frontend-design skill to improve clarity, actionability, and internal coherence. | | |
| **Highlight:** Focuses on token efficiency and ensuring instructions are immediately executable by Claude within a single conversation. | | |

| Rank | Skill | Author | Status |
| :--- | :--- | :--- | :--- |
| 4 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | narenkatakam | 🟢 Open |
| **Functionality:** Adds essential contributor documentation to improve the repository's community health score (currently 25%). | | |
| **Highlight:** Infrastructure-level contribution aimed at lowering the barrier to entry for new skill authors. | | |

| Rank | Skill | Author | Status |
| :--- | :--- | :--- | :--- |
| 5 | **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** | amitlals | 🟢 Open |
| **Functionality:** Integrates SAP's open-source tabular foundation model for predictive analytics on SAP business data. | | |
| **Highlight:** Represents a key bridge between Claude Code and enterprise ERP/data warehousing systems. | | |

| Rank | Skill | Author | Status |
| :--- | :--- | :--- | :--- |
| 6 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | varun29ankuS | 🟢 Open |
| **Functionality:** A persistent memory system for AI agents that maintains context across conversations via `proactive_context`. | | |
| **Highlight:** Tackles the critical "memory" limitation, enabling more coherent long-term interactions. | | |

---

## 2. Community Demand Trends

Analysis of open Issues reveals clear themes in what the community needs next:

*   **Stability & Infrastructure:** The most active issues aren't feature requests, but bug reports about skills disappearing, 404 errors on load, and API 500 errors during upload/delete operations. **Reliability is the top blocker.**
*   **Security & Trust:** [Issue #492](https://github.com/anthropics/skills/issues/492) raises a critical concern about community skills appearing under the `anthropic/` namespace, creating potential trust boundary vulnerabilities. Users are demanding clearer signing or namespacing for official vs. community skills.
*   **Better Authoring Tools:** [Issue #202](https://github.com/anthropics/skills/issues/202) highlights demand for a best-practice update to the `skill-creator` skill, specifically to make it less "educational" and more "operational" for efficient skill generation.
*   **Platform Interoperability:** Users are actively asking for skills that bridge Claude Code with **AWS Bedrock** ([Issue #29](https://github.com/anthropics/skills/issues/29)) and **MCP (Model Context Protocol)** apps ([Issue #16](https://github.com/anthropics/skills/issues/16)).

---

## 3. High-Potential Pending Skills

These open PRs have strong momentum and address clear use cases, making them likely candidates for merging:

*   **[session-memory](https://github.com/anthropics/skills/pull/629)**: Preserves critical technical facts across context compaction with zero dependencies. Solves a fundamental limitation for long coding sessions.
*   **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)**: CLI integration for Imagen 3.0 and Veo 3.1. High demand for multimodal generation capabilities within Claude Code.
*   **[management-consulting](https://github.com/anthropics/skills/pull/384)**: Structured problem solving and strategic framework application. Targets the growing enterprise user base.
*   **[ODT Skill](https://github.com/anthropics/skills/pull/486)**: OpenDocument creation and template filling. Essential for interoperability with LibreOffice and open-source office suites.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is shifting from *novel capability creation* toward **reliability, persistent context, and professional-grade document output**.

---

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-25

## 1. Today's Highlights
The Codex engineering team is aggressively iterating on the **Rust SDK**, releasing three alpha versions (v0.117.0-alpha.11 through .13) within 24 hours. Development focus is heavily split between refining the **Guardian review system** (explicit timeout handling) and expanding the **Hook system** with `PreToolUse` and `PostToolUse` events. Meanwhile, the community is voicing significant concerns regarding **token consumption efficiency** in the latest VS Code extension updates.

## 2. Releases
*   **rust-v0.117.0-alpha.13** (and .12, .11)
    *   A rapid sequence of releases for the Rust SDK suggests active stabilization of the `0.117.0` line.
    *   [View Release](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.13)

## 3. Hot Issues
1.  **[Token Burn Rate]** [Issue #14593](https://github.com/openai/codex/issues/14593): Users report the latest VS Code extension (v26.311) is consuming tokens at an unsustainable rate. With 229 comments and 83 upvotes, this is currently the most urgent community concern.
2.  **[Remote Development]** [Issue #10450](https://github.com/openai/codex/issues/10450): A highly requested feature (+438 👍) asking for remote dev support in the Codex Desktop App to match VS Code's capabilities.
3.  **[Tool Loop Bug]** [Issue #15642](https://github.com/openai/codex/issues/15642): Critical bug where Codex gets stuck in a loop claiming `no apply_patch tool available`, breaking workflow execution.
4.  **[CPU Spikes]** [Issue #15503](https://github.com/openai/codex/issues/15503): Reports of drastic CPU spikes during normal use in VS Code, linked to debug console output spam.
5.  **[Config Security]** [Issue #15680](https://github.com/openai/codex/issues/15680): The agent can modify its own project-level `.codex/config.toml` without permission, potentially bypassing safety rails.
6.  **[Model Reluctance]** [Issue #15646](https://github.com/openai/codex/issues/15646): `gpt-5.4` appears resistant to reading files longer than ~220 lines, limiting its ability to process large contexts.
7.  **[Exit Codes]** [Issue #15536](https://github.com/openai/codex/issues/15536): `codex exec` returns exit code 0 even when internal commands fail, breaking CI/CD pipeline logic.
8.  **[Auth Error]** [Issue #15648](https://github.com/openai/codex/issues/15648): Users encounter errors when trying to use `GPT-5.3-Codex-Spark` with ChatGPT accounts via the CLI.
9.  **[Review UI Bug]** [Issue #12942](https://github.com/openai/codex/issues/12942): The `/review` branch picker allows comparing a branch against itself (e.g., `main -> main`), causing confusion.
10. **[Sandbox Permissions]** [Issue #10187](https://github.com/openai/codex/issues/10187): Windows users report Codex repeatedly asking for command approval despite "auto-approve" settings being enabled.

## 4. Key PR Progress
1.  **[Hooks System]** [PR #15531](https://github.com/openai/codex/pull/15531): Introduces non-streaming `PostToolUse` shell hooks, enabling developers to enforce code quality gates after tool execution.
2.  **[Guardian Timeouts]** [PR #15667](https://github.com/openai/codex/pull/15667): Increases guardian reviewer timeout to 120s and adds explicit `TimedOut` status handling to prevent silent failures.
3.  **[Rollout Refactor]** [PR #15548](https://github.com/openai/codex/pull/15548): Extracts rollout logic into a dedicated `codex-rollout` crate to modularize the codebase.
4.  **[App Server API Provisioning]** [PR #15687](https://github.com/openai/codex/pull/15687): Adds `/api-provision` to the app-server TUI, allowing hot-apply of API keys without rewriting `auth.json`.
5.  **[Codex Apps Bridge]** [PR #15197](https://github.com/openai/codex/pull/15197): Implements file remapping for Codex Apps, bridging local file inputs/outputs to the OpenAI files API.
6.  **[Context State]** [PR #14822](https://github.com/openai/codex/pull/14822): Refactors reference turn context state to improve synchronization between settings and model-visible baselines.
7.  **[Plugin UI Polish]** [PR #15674](https://github.com/openai/codex/pull/15674) & [PR #15676](https://github.com/openai/codex/pull/15676): Improves plugin loading UX with delayed shimmer effects and clearer menu wording.
8.  **[Agent Identity]** [PR #15588](https://github.com/openai/codex/pull/15588): Registers agent identities behind the `use_agent_identity` feature flag for better tracking.
9.  **[MDM Config]** [PR #15351](https://github.com/openai/codex/pull/15351): Enables `~` expansion in MDM workspace write roots for macOS enterprise management.
10. **[Telemetry]** [PR #15591](https://github.com/openai/codex/pull/15591): Adds turn-level metadata (thread ID, model slug, effort) to out-of-band telemetry.

## 5. Feature Request Trends
*   **Automation & Scheduling:** High demand for "set and forget" capabilities, specifically time-based task scheduling ([Issue #8317](https://github.com/openai/codex/issues/8317)) and recurring prompt loops (`/loop`) within the TUI ([Issue #15679](https://github.com/openai/codex/issues/15679)).
*   **Remote & Enterprise Workflow:** Strong push for Remote Development support in the Desktop App ([Issue #10450](https://github.com/openai/codex/issues/10450)) and persistent background agents ([Issue #14110](https://github.com/openai/codex/issues/14110)).
*   **Safety & Control Hooks:** Developers want granular control over the agent lifecycle, specifically `PreToolUse` and `PostToolUse` hooks to enforce linting, testing, or security checks before/after file modifications ([Issue #14754](https://github.com/openai/codex/issues/14754)).

## 6. Developer Pain Points
*   **Token Economy:** The perception that recent updates are "burning" tokens significantly faster than previous versions is causing frustration for Business/Pro users ([Issue #14593](https://github.com/openai/codex/issues/14593)).
*   **Tool Reliability:** Users are encountering breaking loops where the agent fails to invoke basic tools like `apply_patch` ([Issue #15642](https://github.com/openai/codex/issues/15642)) or fails to read full file contexts ([Issue #15646](https://github.com/openai/codex/issues/15646)).
*   **Platform Parity:** Windows users continue to face specific friction points, including unclickable file links ([Issue #15006](https://github.com/openai/codex/issues/15006)) and sandbox permission loops ([Issue #10187](https://github.com/openai/codex/issues/10187)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-25

## 1. Today's Highlights
The Gemini CLI ecosystem sees significant activity with the release of **v0.35.0** (stable) and **v0.36.0-preview.0**, introducing customizable keyboard shortcuts and multi-registry architecture for subagents. Development is heavily focused on **SDD (Spec-Driven Development)** workflows and **sandbox security**, evidenced by numerous PRs addressing dynamic permissions across Linux, macOS, and Windows. The community remains vocal about performance bottlenecks, specifically startup latency and UI freezing during authentication.

## 2. Releases

*   **v0.35.0 (Stable)**
    *   **Customizable Keyboard Shortcuts:** Users can now define their own keybindings ([PR #21945](https://github.com/google-gemini/gemini-cli/pull/21945)).
    *   **Core Context Threading:** `AgentLoopContext` is now threaded through the core architecture, likely improving state management in complex loops ([PR #21944](https://github.com/google-gemini/gemini-cli/pull/21944)).
*   **v0.36.0-preview.0**
    *   **Multi-Registry Architecture:** Implements tool filtering and multi-registry support for subagents, enhancing modularity ([PR #22712](https://github.com/google-gemini/gemini-cli/pull/22712)).
    *   **Telemetry & Evals:** Adds onboarding telemetry and improves evaluation resilience by retrying on API errors ([PR #23118](https://github.com/google-gemini/gemini-cli/pull/23118), [PR #23322](https://github.com/google-gemini/gemini-cli/pull/23322)).

## 3. Hot Issues

1.  **[OPEN] Slow Startup Latency** [#21623](https://github.com/google-gemini/gemini-cli/issues/21623)
    *   **Why it matters:** Users report a critical 20-30 second delay on launch with no feedback. This is a major barrier to entry for daily use.
    *   **Reaction:** High engagement (18 comments/+18 votes); users are frustrated by the lack of responsiveness in the terminal shell.

2.  **[OPEN] App Freeze During Authentication** [#20129](https://github.com/google-gemini/gemini-cli/issues/20129)
    *   **Why it matters:** A P1 bug where the entire application freezes post-authentication, forcing users to restart the shell.
    *   **Reaction:** 13 comments; confirms stability issues in the auth flow on specific client versions.

3.  **[OPEN] Lack of Guidance for New Users** [#23441](https://github.com/google-gemini/gemini-cli/issues/23441)
    *   **Why it matters:** The `/skills` command returns "No skills available" without explaining how to acquire them.
    *   **Reaction:** Highlights a need for better UX onboarding and "zero-state" documentation within the CLI.

4.  **[OPEN] Security: Inconsistent Workspace Boundaries** [#23717](https://github.com/google-gemini/gemini-cli/issues/23717)
    *   **Why it matters:** The CLI enforces boundaries differently between bash scripts and internal tools, potentially creating security gaps where agents can modify files outside the workspace.

5.  **[OPEN] AST-Aware Codebase Mapping** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **Why it matters:** Maintainers are investigating AST-aware tools to improve code navigation and reduce token usage during file reads.
    *   **Reaction:** Highly technical discussion on improving agent efficiency vs. current linear file reading methods.

6.  **[OPEN] Plan Mode Model Switching Failure** [#23230](https://github.com/google-gemini/gemini-cli/issues/23230)
    *   **Why it matters:** The agent fails to switch to `gemini-3-flash-preview` automatically after exiting plan mode, breaking the intended workflow optimization.

7.  **[OPEN] Support passing prompt to `/plan`** [#22855](https://github.com/google-gemini/gemini-cli/issues/22855)
    *   **Why it matters:** Users want to initiate planning in a single command rather than entering a separate interactive box.

8.  **[OPEN] Subagent Awareness of Approval Modes** [#23582](https://github.com/google-gemini/gemini-cli/issues/23582)
    *   **Why it matters:** Subagents currently ignore "Plan Mode" or "Auto-Edit Mode" constraints, conflicting with the Policy Engine.

9.  **[OPEN] SDD Phase 3: Tasks Integration** [#23320](https://github.com/google-gemini/gemini-cli/issues/23320)
    *   **Why it matters:** Transitioning SDD from linear Markdown checklists to a Directed Acyclic Graph (DAG) task system.

10. **[OPEN] Memory Routing (Global vs. Project)** [#22819](https://github.com/google-gemini/gemini-cli/issues/22819)
    *   **Why it matters:** Agents currently lack defined logic for storing preferences in `~/.gemini/` (global) vs. `.gemini/` (project).

## 4. Key PR Progress

1.  **[OPEN] feat(cli): add UI to update extensions** [#23682](https://github.com/google-gemini/gemini-cli/pull/23682)
    *   Adds an interactive UI to the Extension Manager to handle pending updates directly, improving maintainability.

2.  **[OPEN] feat(sandbox): dynamic Linux sandbox expansion** [#23692](https://github.com/google-gemini/gemini-cli/pull/23692)
    *   Brings Linux Sandbox to feature parity with macOS, supporting dynamic path resolution and Git worktree.

3.  **[OPEN] feat(sandbox): implement secret visibility lockdown** [#23712](https://github.com/google-gemini/gemini-cli/pull/23712)
    *   Implements strict visibility lockdown for `.env` files across all sandboxes to prevent credential leakage.

4.  **[OPEN] feat(theme): introduce safe and rich themes** [#23719](https://github.com/google-gemini/gemini-cli/pull/23719)
    *   Introduces "rich" themes for true-color terminals and "safe" themes for 256-color environments.

5.  **[OPEN] feat(skills): add ci skill for automated failure replication** [#23720](https://github.com/google-gemini/gemini-cli/pull/23720)
    *   Automates the replication of CI failures locally, streamlining the PR feedback loop.

6.  **[OPEN] feat(ui): redesign context and compression UI** [#23064](https://github.com/google-gemini/gemini-cli/pull/23064)
    *   Reduces UI noise with subtle compression indicators and forced auto-compression on overflow.

7.  **[OPEN] fix(cli): stabilize copy mode** [#22584](https://github.com/google-gemini/gemini-cli/pull/22584)
    *   Fixes flickering and cursor resets in fullscreen/alternate buffer mode on macOS/Windows.

8.  **[OPEN] feat(core): new skill for PR duplication review** [#23704](https://github.com/google-gemini/gemini-cli/pull/23704)
    *   Introduces a `review-duplication` skill to detect code redundancy during code reviews.

9.  **[OPEN] feat(core): implement Windows sandbox expansion** [#23691](https://github.com/google-gemini/gemini-cli/pull/23691)
    *   Implements dynamic permissions for Windows, specifically for network access and Low Integrity filesystem writes.

10. **[OPEN] feat(core): /loop command** [#23714](https://github.com/google-gemini/gemini-cli/pull/23714)
    *   Adds a built-in `/loop` command for recurring scheduled prompts within a session.

## 5. Feature Request Trends

*   **Context & Memory Management:** Strong demand for separating global user preferences from project-specific context (Global vs. Project memory routing).
*   **SDD (Spec-Driven Development) Enhancements:** Continued requests for deeper task integration, specifically moving away from flat Markdown lists to DAG-based task tracking.
*   **Interactive Planning:** Users want to pass arguments directly to `/plan` to avoid mode-switching overhead.
*   **Tool Awareness:** Requests for agents to be context-aware regarding approval modes (Plan vs. Auto-Edit) to prevent policy conflicts.

## 6. Developer Pain Points

*   **Startup Performance:** The 20-30 second cold start is the primary frustration for daily drivers.
*   **Extension & Config Overhead:** Duplicate startup warnings and complex configuration migrations (e.g., `conductor` to `sdd`) are causing friction.
*   **Agent "Messiness":** Developers are annoyed by agents creating temporary scripts in random directories, making workspace cleanup difficult.
*   **Telemetry & Logging:** Lack of visibility into background shell processes makes debugging agent actions difficult.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-25

## 1. Today's Highlights
No new releases were recorded in the last 24 hours, but community activity remains high regarding Model Context Protocol (MCP) stability and model availability. A significant number of reports highlight discrepancies between Copilot CLI and VS Code Copilot, specifically concerning the visibility of organization-enabled models (like Gemini 3.1 Pro) and the enforcement of third-party MCP server policies. Additionally, performance concerns are surfacing regarding the upcoming GPT 5.4 integration and resource usage in remote environments.

## 2. Releases
*No new releases detected in the last 24 hours.*

## 3. Hot Issues

1.  **[Org Models Missing in CLI](https://github.com/github/copilot-cli/issues/1703)** (Issue #1703)
    *   **Why it matters:** Users are frustrated that the CLI filters out models (e.g., Gemini 3.1 Pro) that are explicitly enabled in their organization settings and visible in VS Code. This inconsistency hinders the use of specific models for CLI workflows.
    *   **Reaction:** 22 upvotes; users confirm the bug across different organizational setups.

2.  **[False "MCP Disabled" Warnings](https://github.com/github/copilot-cli/issues/2236)** (Issue #2236)
    *   **Why it matters:** In version 1.0.11, users report that organization-level MCP servers disappear, replaced by a false warning that policy disables them. This blocks critical custom tooling integrations.
    *   **Reaction:** High engagement for a 2-day old issue (7 upvotes), indicating a possible regression in the latest version.

3.  **[Regression: Third-Party MCP Servers Blocked](https://github.com/github/copilot-cli/issues/1707)** (Issue #1707)
    *   **Why it matters:** Similar to #2236, users on v0.0.418 found third-party MCP servers blocked without a valid policy change. Downgrading to v417 resolves it, pointing to a recent logic error in policy detection.
    *   **Reaction:** Currently closed, but linked to ongoing triage regarding MCP policy enforcement.

4.  **[MCP Timeouts Not Respected](https://github.com/github/copilot-cli/issues/172)** (Issue #172)
    *   **Why it matters:** Developers building custom MCP servers with long runtimes are hitting a hard timeout wall. The CLI ignores the `timeout` field in `mcp-config.json`, causing requests to fail prematurely.
    *   **Reaction:** Persistent issue since Oct 2025; users are asking for configuration control over timeout limits.

5.  **[Claude Sonnet 4.6 Connectivity Issues](https://github.com/github/copilot-cli/issues/2050)** (Issue #2050)
    *   **Why it matters:** Users leveraging Claude Sonnet 4.6 are experiencing 503 errors and HTTP/2 connection terminations ("GOAWAY"), making the model unreliable for complex generation tasks.
    *   **Reaction:** 3 upvotes; users are comparing stability against other models like Gemini 3 Pro.

6.  **[Autopilot Continues Unnecessarily](https://github.com/github/copilot-cli/issues/1477)** (Issue #1477)
    *   **Why it matters:** After a task is complete, the CLI continues to trigger "premium requests" in autopilot mode, consuming quota without user intent. This raises cost concerns for heavy users.
    *   **Reaction:** 7 upvotes; users looking for stricter "stop" criteria in autopilot mode.

7.  **[Transient API Errors & Rate Limits](https://github.com/github/copilot-cli/issues/2101)** (Issue #2101)
    *   **Why it matters:** A spike in "transient API errors" followed by immediate rate limiting ("try again in 1 minute") is disrupting workflows.
    *   **Reaction:** Users feel the retry logic or rate limit bucket allocation is too aggressive for interactive CLI usage.

8.  **[CRLF Line Ending Corruption](https://github.com/github/copilot-cli/issues/1148)** (Issue #1148)
    *   **Why it matters:** A classic developer headache: Copilot CLI is forcing CRLF line endings on files that originally used LF, dirtying git diffs and breaking linting rules.
    *   **Reaction:** Ongoing triage; affects Windows/WSL users significantly.

9.  **[Glob Cannot See Git-Ignored Files](https://github.com/github/copilot-cli/issues/2084)** (Issue #2084)
    *   **Why it matters:** The CLI's file globbing strictly respects `.gitignore`, preventing users from inspecting build artifacts or local configs intentionally kept out of git. This limits the AI's context awareness.
    *   **Reaction:** Closed, but highlights a constraint in the file access layer users want overridden.

10. **[Termux/Android Support](https://github.com/github/copilot-cli/issues/1257)** (Issue #1257)
    *   **Why it matters:** There is demand for mobile coding workflows. The CLI currently fails to load `pty.node` on Android/Termux.
    *   **Reaction:** 5 upvotes; users want "Copilot on the go."

## 4. Key PR Progress
Only one pull request showed activity in the last 24 hours:

*   **[PR #1253: Docs - Experimental Mode](https://github.com/github/copilot-cli/pull/1253)**
    *   **Status:** Closed.
    *   **Summary:** This PR updated the README to document the `--experimental` flag and `/experimental` slash command. It specifically detailed **autopilot mode**, explaining how the setting persists in the configuration. While a documentation-only change, this is crucial for discoverability of the CLI's autonomous capabilities.

## 5. Feature Request Trends
*   **Persistent Permissions:** Users want a way to permanently whitelist safe binaries (like `ls`, `grep`) or read-only PowerShell commands to reduce interruption friction during sessions (See [Issue #2256](https://github.com/github/copilot-cli/issues/2256), [Issue #2273](https://github.com/github/copilot-cli/issues/2273)).
*   **Shell & Environment Control:** Requests to configure the default shell (Bash vs. PowerShell) on Windows ([Issue #2271](https://github.com/github/copilot-cli/issues/2271)) and better support for alternative terminals like Warp ([Issue #2246](https://github.com/github/copilot-cli/issues/2246)).
*   **Mode Flags at Startup:** Users want to launch Copilot directly into specific modes via flags (e.g., `--plan`, `--autopilot`) to better integrate CLI sessions into automated scripts ([Issue #2268](https://github.com/github/copilot-cli/issues/2268)).
*   **Advanced Context Control:** Demand for granular control over file inclusion/exclusion (ignoring `.gitignore` selectively) ([Issue #899](https://github.com/github/copilot-cli/issues/899)) and proper loading of `~/.agents/skills` globally ([Issue #2161](https://github.com/github/copilot-cli/issues/2161)).

## 6. Developer Pain Points
*   **Inconsistency with VS Code:** The most significant pain point is the divergence in feature parity. Users expect their organization's models, MCP servers, and skills to work identically in the CLI as they do in VS Code, but currently face a "reduced experience."
*   **Resource Usage & Performance:** Reports indicate that the CLI (and SDK) can be CPU-heavy, making 4-core Codespaces "unusable" ([Issue #2269](https://github.com/github/copilot-cli/issues/2269)) and causing UI freezes in WSL ([Issue #2208](https://github.com/github/copilot-cli/issues/2208)).
*   **MCP Stability:** The ecosystem around MCP servers is currently viewed as unstable due to false policy warnings and ignored timeout configurations, undermining trust in the extensibility of the platform.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-25

---

## 1. Today's Highlights

The community is heavily focused on performance and stability, with **multiple memory leak issues** dominating discussions—over 20 contributors have independently investigated unbounded RAM growth during extended TUI usage (Issue #16697). On a positive note, significant architectural work is progressing, including **AI SDK v6 migration** (PR #18433) and **Effect-native service refactoring** for git operations (PR #18900). Authentication changes have sparked user confusion following the removal of on-the-fly API key creation (Issue #18811).

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| Issue | Why It Matters |
|-------|----------------|
| **[#16697 - Multiple memory leaks cause unbounded RAM growth](https://github.com/anomalyco/opencode/issues/16697)** | Critical performance issue affecting extended TUI sessions. 20+ contributors have filed related PRs. 11 👍 |
| **[#12661 - Add Agent Teams Equivalent](https://github.com/anomalyco/opencode/issues/12661)** | High-demand feature request (96 👍) for multi-agent orchestration similar to Claude Code's Agent Teams. |
| **[#3472 - Context awareness not working in VSCode](https://github.com/anomalyco/opencode/issues/3472)** | Long-standing bug (30 comments) where the extension fails to recognize selected code context. 18 👍 |
| **[#4804 - High CPU usage on MacOS](https://github.com/anomalyco/opencode/issues/4804)** | Performance regression causing sustained high CPU even during idle sessions. 4 👍 |
| **[#8003 - VS Code Integration for Diff Preview](https://github.com/anomalyco/opencode/issues/8003)** | Request for better change visualization in VS Code instead of painful TUI preview for large files. 41 👍 |
| **[#18811 - Removed API key creation and Claude login options](https://github.com/anomalyco/opencode/issues/18811)** | Users frustrated by removal of convenient auth methods despite having corporate permission to use them. |
| **[#11753 - GitHub Copilot consuming multiple premium requests](https://github.com/anomalyco/opencode/issues/11753)** | Cost concern: premium requests being consumed during session switches/compaction. 9 👍 |
| **[#18950 - Cannot connect with Claude in Web UI](https://github.com/anomalyco/opencode/issues/18950)** | Recent update removed authentication options, leaving only API key input—blocking users without direct API access. 2 👍 |
| **[#18981 - Used over 90GB of memory](https://github.com/anomalyco/opencode/issues/18981)** | Extreme manifestation of the memory leak issue causing system resource exhaustion. |
| **[#17400 - Bedrock fails with PDF uploads](https://github.com/anomalyco/opencode/issues/17400)** | AWS Bedrock users unable to use PDF document uploads. 2 👍 |

---

## 4. Key PR Progress

| PR | Description |
|----|-------------|
| **[#18433 - AI SDK v6 support](https://github.com/anomalyco/opencode/pull/18433)** | Major migration to AI SDK v6, including Copilot SDK and GitLab AI SDK updates. WIP but actively progressing. |
| **[#18900 - Restore git-backed review modes](https://github.com/anomalyco/opencode/pull/18900)** | Introduces Effect-native `Git` service for consistent git operations across VCS, worktree, project, file, and CLI flows. |
| **[#18679 - Effectify Worktree service](https://github.com/anomalyco/opencode/pull/18679)** | Migrates Worktree service to Effect pattern with proper `ChildProcess` and `FileSystem` abstractions. |
| **[#19012 - Skip OAuth loader with direct API key](https://github.com/anomalyco/opencode/pull/19012)** | Fixes auth priority issue where stale OAuth data overrides explicitly configured API keys. |
| **[#18767 - Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)** | Touch/mobile optimizations for the OpenCode app while preserving desktop experience. |
| **[#13854 - Stop streaming markdown after message completes](https://github.com/anomalyco/opencode/pull/13854)** | Fixes rendering bug where completed messages incorrectly treated as still streaming. |
| **[#9164 - Add Kiro provider](https://github.com/anomalyco/opencode/pull/9164)** | New provider for AWS CodeWhisperer/Kiro enabling Claude via Bedrock with Kiro CLI authentication. |
| **[#18317 - Quiet mode for CLI runs](https://github.com/anomalyco/opencode/pull/18317)** | Adds `-q | --quiet` flag for cleaner CLI output in automated/scripted contexts. |
| **[#17980 - Context filtering for instruction files](https://github.com/anomalyco/opencode/pull/17980)** | Allows excluding external AI tool instruction files (e.g., `AGENTS.md`) from context loading. |
| **[#19016 - Add black formatter for Python](https://github.com/anomalyco/opencode/pull/19016)** | Built-in `black` formatter support for Python files (`.py`, `.pyi`). |

---

## 5. Feature Request Trends

1. **Multi-Agent Orchestration** — Strong demand for Agent Teams-like functionality (96 👍 on #12661) enabling coordinated multi-agent workflows.

2. **Enhanced IDE Integration** — Requests for VS Code diff previews (#8003, 41 👍), clickable file paths in terminal (#19005), and improved context awareness (#3472).

3. **Remote/Mobile Access** — Native P2P remote access via WebRTC (#19013) and mobile-optimized interfaces.

4. **Auth Provider Expansion** — Requests for Poe OAuth (#18478), restored Claude Max/Pro login, and simplified API key creation.

5. **Tooling & Formatter Support** — Community contributing formatters (Black, CSharpier, StyLua) and TTS capabilities.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Memory/CPU resource exhaustion** | Multiple reports of 90GB+ RAM usage (#18981), sustained high CPU during idle (#4804), and coordinated investigation by 20+ contributors (#16697) |
| **Authentication friction** | Removal of convenient auth methods (#18811, #18950) blocking users who lack manual API key access |
| **Cross-platform inconsistencies** | Path matching failures on Windows (#7279), clipboard issues on Pop-OS (#2413), NixOS crashes (#18818), and build failures in Nix flakes (#18273) |
| **Context/document handling** | PDF upload failures on Bedrock (#17400), context awareness bugs in VSCode (#3472) |
| **Premium request cost concerns** | GitHub Copilot consuming multiple premium requests per session (#11753) |
| **Large file change preview** | TUI diff preview "very painful" for files with hundreds of lines (#8003) |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-25

## 1. Today's Highlights
The community sees heavy activity around the new **v0.13.0-nightly** release, with developers actively testing the latest changes. Key developments include significant work on the **permission system UX**, **Telegram channel integration**, and **CLI stability fixes**. The team is clearly focusing on polishing the developer experience (DX) for the upcoming v0.14.0 milestone, addressing critical bugs in VSCode integration and terminal handling.

## 2. Releases
- **v0.13.0-nightly.20260324.aebe889b3**
  - This nightly build includes the latest commits from the main branch. Users are testing fixes for PTY race conditions, ACP process management, and new features like the `/loop` command.
  - [Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.13.0...v0.13.0-nightly.20260324.aebe889b3)

## 3. Hot Issues
1.  **[#1370] Questions about VSCode Extension Settings** (6 comments)
    - Users are seeking clarity on the VSCode extension's configuration capabilities, specifically asking for a dedicated settings UI. *Why it matters:* Highlights a gap in documentation and UI discoverability for IDE users.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/1370)
2.  **[#241] Shift+Enter Behavior** (4 comments)
    - A long-standing request to make `Shift+Enter` insert a newline instead of sending the message, aligning with common chat conventions. *Why it matters:* High impact on workflow efficiency for coding tasks.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/241)
3.  **[#2626] CLI Crashes on Permission Request (Linux)** (4 comments)
    - Critical bug where the CLI terminates on Linux (specifically Ubuntu/tmux) when prompting for user permissions. *Why it matters:* Blocks usage on a key developer platform.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/2626)
4.  **[#2640] Session Approvals Not Persisting** (1 comment, 4 👍)
    - Users report that "Always allow" permissions for commands (like `yarn *`) are repeatedly asked within the same session. *Why it matters:* High frustration point that interrupts flow.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/2640)
5.  **[#2632] Infinite Answer Loop** (3 comments)
    - The model occasionally enters a state where it never stops generating, requiring a manual `ESC` to terminate. *Why it matters:* Wastes resources and breaks automation.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/2632)
6.  **[#2498] Agent Fails to Locate Config Files** (4 comments)
    - The agent struggles to find non-root configuration files (e.g., `.eslintrc`) due to lack of systematic directory exploration. *Why it matters:* Limits the agent's autonomy in complex projects.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/2498)
7.  **[#1897] & [#2496] Tokenization Issues with Chinese Paths** (3 & 2 comments)
    - LLM incorrectly adds spaces in Chinese/mixed-language file paths (e.g., `DNF私服` -> `DNF 私服`), causing tool failures. *Why it matters:* Critical reliability issue for international users.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/1897)
8.  **[#2552] Custom System Prompt in Settings** (3 comments)
    - Feature request to define the main agent system prompt directly in `settings.json` rather than via environment variables. *Why it matters:* Easier configuration for custom agent behaviors.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/2552)
9.  **[#2523] Follow-up Suggestions in Web UI** (3 comments)
    - Request to port "Next-Step Suggestions" (like "commit this") from CLI to the Web UI. *Why it matters:* Improves feature parity across interfaces.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/2523)
10. **[#2508] Anthropic Thinking Token Error** (1 comment)
    - Configuration bug causing `max_tokens` to conflict with `thinking.budget_tokens` when using Anthropic models. *Why it matters:* Blocks usage of extended thinking features on third-party models.
    - [View Issue](https://github.com/QwenLM/qwen-code/issues/2508)

## 4. Key PR Progress
1.  **[#2628] feat(channels): Telegram Integration**
    - Introduces a "Channels" system to bridge Qwen Code with messaging platforms like Telegram via ACP. *Significance:* Expands usage scenarios beyond the terminal/IDE.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2628)
2.  **[#2643] feat(cli): Add /loop Command**
    - Implements a new slash command for periodic task execution at configurable intervals. *Significance:* Enables automation and monitoring workflows.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2643)
3.  **[#2637] feat: Human-Readable Permission Labels**
    - Replaces raw syntax (e.g., `Read(//Users/**)`) with readable labels (e.g., "read files in /Users/") in dialogs. *Significance:* Major UX improvement for the security model.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2637)
4.  **[#2525] feat(cli, webui): Follow-up Suggestions**
    - Adds context-aware suggestions (e.g., "run tests") after task completion, similar to Claude's NES. *Significance:* proactive assistance enhances productivity.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2525)
5.  **[#2633] fix: Avoid Orphan ACP Processes**
    - Prevents background processes from becoming orphans when the IDE is closed by skipping the relaunch wrapper. *Significance:* Critical fix for resource management.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2633)
6.  **[#2645] fix(windows): Git Bash/MSYS2 Detection**
    - Ensures shell commands run in Bash instead of `cmd.exe` when using Git Bash on Windows. *Significance:* Improves cross-platform consistency.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2645)
7.  **[#2631] fix(acp-integration): Clear Stale Subagent Diffs**
    - Fixes a bug where subagent-triggered diff tabs remained stuck waiting for confirmation. *Significance:* Smoothes the IDE integration experience.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2631)
8.  **[#2636] fix(core): Accept Thought-Only Responses**
    - Fixes stream validation errors for models that return only reasoning/thought content. *Significance:* Improves compatibility with advanced reasoning models.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2636)
9.  **[#2548] feat(vscode): /skills Secondary Picker**
    - Enhances `/skills` in VSCode to open a secondary picker for selecting available skills. *Significance:* Better discoverability of agent capabilities.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2548)
10. **[#2642] fix(mcp): Restore Trust Permission Check**
    - Restores the `trust: true` setting for MCP servers which broke in v0.13.0. *Significance:* Essential fix for seamless MCP tool usage.
    - [View PR](https://github.com/QwenLM/qwen-code/pull/2642)

## 5. Feature Request Trends
-   **Multimodal Input:** Strong demand for **clipboard image pasting** across CLI and VSCode environments (#2605, #1951, #1891) to support visual context in queries.
-   **UX Polish & Control:** Requests for granular control over session naming (#2619), system prompts via settings (#2552), and **persistent permission whitelists** (#2335) to reduce repetitive prompts.
-   **Advanced Capabilities:** Interest in **automation features** like the new `/loop` command and **policy engines** (#1933) for safer, more autonomous agent operation.

## 6. Developer Pain Points
-   **Interrupted Workflows:** The most frequent frustration is **permissions not persisting** correctly or being asked repeatedly within a single session (#2640), alongside the desire for `Shift+Enter` to insert newlines rather than send messages (#241).
-   **Platform Instability:** Linux users are experiencing crashes related to PTY handling and permission prompts (#2626), and Windows users face shell detection issues (#2645).
-   **Path Handling:** Recurring issues with **non-ASCII characters** (specifically Chinese) in file paths, where the LLM hallucinates spaces, leading to tool execution failures (#1897, #2496).

</details>