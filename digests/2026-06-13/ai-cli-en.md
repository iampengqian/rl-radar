# AI CLI Tools Community Digest 2026-06-13

> Generated: 2026-06-12 22:27 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

Here is the cross-tool comparison report based on the June 13, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem on June 13, 2026, is characterized by rapid iteration and a sharp pivot from basic code generation toward autonomous, multi-agent orchestration. Major players like Claude Code and OpenAI Codex are pushing enterprise-grade features and architectural overhauls, while emerging tools like Gemini CLI and OpenCode focus heavily on multimodal inputs and local execution safety. Across both proprietary and open-source models, the overarching industry challenge has shifted to managing token economics, context window limitations, and preventing runaway autonomous loops. Developers now expect these CLIs to function not just as assistants, but as highly observable, platform-agnostic automation harnesses.

### 2. Activity Comparison
*Note: The following data is based on the specific issues, PRs, and releases explicitly highlighted in today's (June 13, 2026) community digests.*

| Tool | Issues Highlighted | PRs Highlighted | Release Status (Today) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 3 | **Active** (3 releases: v2.1.174-v2.1.176) |
| **OpenAI Codex** | 10 | 7 | **Rapid Alpha** (4 alphas: v0.140.0) |
| **Gemini CLI** | 10 | 10 | None |
| **GitHub Copilot CLI** | 10 | 0 | **Recent** (v1.0.62-1) |
| **Kimi Code CLI** | 3 | 1 | None |
| **OpenCode** | 10 | 10 | **Active** (v1.17.4) |
| **Pi** | 10 | 10 | **Active** (v0.79.2) |
| **Qwen Code** | 10 | 10 | **Active** (v0.18.0) |
| **DeepSeek TUI** | 10 | 10 | None |

### 3. Shared Feature Directions
*   **Context Compaction & Memory Management:** As context windows saturate, tools are implementing aggressive memory management. However, this is universally causing friction. *Claude Code, OpenAI Codex, GitHub Copilot CLI, and DeepSeek TUI* all reported critical bugs today involving infinite compaction loops, session hangs post-compaction, or cross-session checkpoint failures.
*   **Autonomous Loop Prevention ("Doom Loops"):** Preventing agents from burning through API quotas via repetitive actions is a top priority. *Claude Code (parallel agent spawning), OpenCode (doom loops), Gemini CLI (agent hangs), Qwen Code (identical tool calls), and Kimi Code (file reading loops)* are all actively deploying guards and hard-stops against these behaviors.
*   **Sub-agent Orchestration & Tool Routing:** The industry is moving toward multi-agent architectures, but execution remains buggy. *Claude Code, Gemini CLI, OpenCode,* and *DeepSeek TUI* communities are demanding better guardrails, visibility into background tasks, and prevention of "silent failures" (where a sub-agent reports success after hitting a limit).
*   **Windows OS Parity & Reliability:** Cross-platform support—specifically for Windows—remains a massive pain point. *OpenAI Codex (global sandbox failures), GitHub Copilot CLI (rendering/keyboard bugs), Qwen Code (shell execution errors), OpenCode (auto-update paths),* and *DeepSeek TUI (UI event loop starvation)* all reported severe Windows-specific blocking issues today.
*   **Multimodal Inputs:** Moving beyond text, *Gemini CLI (drag-and-drop images), OpenCode (.docx/.xlsx parsing),* and *DeepSeek TUI (voice-to-text)* are actively merging PRs to support richer, multi-format developer inputs.

### 4. Differentiation Analysis
*   **Enterprise Governance vs. Local Control:** *Claude Code* and *OpenAI Codex* are heavily focused on enterprise readiness, rolling out managed model routing, plugin authentication, and API state management. In contrast, *Pi* and *OpenCode* cater to power users wanting local control, focusing heavily on third-party LLM proxy compatibility (vLLM, Bedrock, custom gateways) and granular, localized permission systems.
*   **Security & Permission Models:** *OpenCode* and *Claude Code* are prioritizing system-level safety, implementing strict `deny` rules and preventing sub-agents from bypassing enterprise policies. *Qwen Code* is taking a different technical route by migrating its Computer Use tool to a Rust-based background driver to natively isolate OS automation without stealing UI focus.
*   **Platform vs. Provider-Agnostic:** *OpenAI* and *Claude* CLIs are building walled-garden ecosystems with remote control and IDE integrations. Conversely, tools like *Pi* and *DeepSeek TUI* are explicitly building "provider fallback chains" and data-driven registries to allow seamless swapping between proprietary (GPT-5.5, Opus) and open-source (Kimi, DeepSeek, Qwen) models.

### 5. Community Momentum & Maturity
*   **High Momentum & Rapid Iteration:** *OpenAI Codex* is moving at a breakneck pace (4 alpha releases in 24 hours) but is currently held back by severe macOS launch loops and Windows instability. *Gemini CLI* shows massive community PR momentum, closing critical security vulnerabilities (CVEs) and rapidly shipping multimodal features without formal releases.
*   **Enterprise Maturity:** *Claude Code* exhibits the maturity of an enterprise tool, actively addressing international localization, GitLab integration, and tier/quote management. However, its community is highly vocal regarding opaque billing and quota reconciliation bugs. *GitHub Copilot CLI* is stabilizing but struggles with fundamental terminal rendering glitches.
*   **Rising Challengers:** *Qwen Code* and *OpenCode* show strong, issue-driven engagement, actively pushing patches for memory management and dynamic workflows. *Qwen Code* is particularly notable for deploying AI-driven autonomous bug fixing in its own CI pipeline.
*   **Niche / Early Stage:** *Kimi Code* has relatively low community activity but is addressing critical logical flaws (CoT token billing). *DeepSeek TUI* is heavily focused on foundational architecture, specifically i18n and cross-platform UI stability.

### 6. Trend Signals
*   **The "Context Wall" & Transparent Token Economics:** As tasks become deeply agentic, developers are hitting hard context limits and unexpected token drains (especially from hidden Chain-of-Thought reasoning, as seen in *Kimi* and *Claude*). There is a clear industry signal demanding transparent, granular cost telemetry and deterministic compaction that doesn't break the agent's workflow.
*   **Shift from Text Parsing to AST:** There is a growing frustration with naive text-based codebase searches. *Gemini CLI's* push for AST (Abstract Syntax Tree)-aware file reads signals an industry shift toward giving agents deep, compiler-level understanding of codebases to reduce token noise and turn counts.
*   **Local Gateway Integrations:** With the rise of enterprise AI gateways, CLI tools can no longer assume direct API connections. The heavy traction around proxy support, BYOK (Bring Your Own Key) configurations, and custom endpoint routing (as seen in *Pi* and *OpenCode*) indicates that provider-agnostic routing is now a baseline expectation for developers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on community activity up to June 2026. 

*Note: As the provided dataset lacked explicit comment counts for PRs, rankings and discussions below were inferred by cross-referencing the PR summaries with the most active and highly-upvoted community Issues.*

### 1. Top Skills Ranking
Based on community engagement, troubleshooting efforts, and proposed capabilities, these are the most closely watched Skills and PRs:

*   **Skill-Creator / Evaluator Enhancements** ([PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1140](https://github.com/anthropics/skills/pull/1140))
    *   **Functionality:** A meta-skill designed to help developers create, validate, and optimize new Skills. 
    *   **Discussion Highlights:** This is currently the most actively debugged area of the ecosystem. Multiple PRs are addressing critical bugs where the description optimization loop fails to trigger Skills, reports 0% recall ([Issue #556](https://github.com/anthropics/skills/issues/556)), and crashes on Windows environments. 
    *   **Status:** Open
*   **Frontend-Design Enhancements** ([PR #1046](https://github.com/anthropics/skills/pull/1046), [PR #210](https://github.com/anthropics/skills/pull/210))
    *   **Functionality:** Guides Claude in generating high-quality, actionable frontend UI/UX code.
    *   **Discussion Highlights:** The community is heavily focused on refining this Skill's internal coherence and ensuring its instructions are specific enough to steer Claude's behavior without causing token bloat. 
    *   **Status:** Open
*   **Agent-Creator Skill** ([PR #1140](https://github.com/anthropics/skills/pull/1140))
    *   **Functionality:** A meta-skill for creating task-specific agent sets and handling multi-tool parallel evaluations.
    *   **Discussion Highlights:** Tackles the need for structured, multi-agent governance by allowing users to dynamically generate specialized agents for complex tasks. 
    *   **Status:** Open
*   **Color-Expert Skill** ([PR #1302](https://github.com/anthropics/skills/pull/1302))
    *   **Functionality:** Provides deep color expertise, covering naming systems, color spaces (OKLCH, OKLAB), and accessibility.
    *   **Discussion Highlights:** A highly anticipated, self-contained skill that solves specific pain points in design generation, ensuring Claude uses correct color models for scales and gradients.
    *   **Status:** Open
*   **Skill-Quality & Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83))
    *   **Functionality:** Automated analysis tools that evaluate Skills across structural, documentation, and security dimensions.
    *   **Discussion Highlights:** Directly addresses community fears regarding malicious prompts or poorly formatted skills acting as attack vectors or degrading context windows.
    *   **Status:** Open

### 2. Community Demand Trends
Analysis of the Issues queue reveals strong community demand in four distinct areas:

*   **Workflow Automation & Integrations:** Users are eager to push Claude beyond local code execution. There are high demands for Skills that interact with external systems, such as an **n8n-builder** ([PR #190](https://github.com/anthropics/skills/pull/190)) for creating workflows from scratch, and seamless integrations with **SharePoint Online** for enterprise document access ([Issue #1175](https://github.com/anthropics/skills/issues/1175)).
*   **Enterprise Collaboration & Governance:** Teams want to use Skills as shared organizational assets. The most requested feature is **org-wide skill sharing** to eliminate manual `.skill` file passing via Slack ([Issue #228](https://github.com/anthropics/skills/issues/228)). Furthermore, there is a strong push for an **agent-governance skill** to enforce safety policies, threat detection, and audit trails ([Issue #412](https://github.com/anthropics/skills/issues/412)).
*   **Advanced Documentation & Formatting:** Moving beyond basic Markdown, the community wants robust typographic controls. This includes preventing orphan word wraps and widow paragraphs ([PR #514](https://github.com/anthropics/skills/pull/514)), alongside advanced support for **OpenDocument (ODT)** formats ([PR #486](https://github.com/anthropics/skills/pull/486)).
*   **Tooling Standardization (MCP):** A significant portion of the community wants Skills packaged and exposed as **Model Context Protocol (MCP) servers**, treating Skills as structured APIs rather than just prompt templates ([Issue #16](https://github.com/anthropics/skills/issues/16)).

### 3. High-Potential Pending Skills
These active PRs solve widespread pain points and have a high likelihood of being merged soon:

*   **[PR #1298](https://github.com/anthropics/skills/pull/1298): Fix `run_eval.py` 0% Recall & Windows Compatibility.** Resolves a critical blocker that breaks the Skill description optimization loop, alongside fixing subprocess stream reading and trigger detection.
*   **[PR #541](https://github.com/anthropics/skills/pull/541): Fix DOCX `w:id` Collision.** Prevents document corruption when the DOCX skill adds tracked changes to documents that already contain bookmarks—a vital fix for enterprise Word users.
*   **[PR #538](https://github.com/anthropics/skills/pull/538): PDF Case-Sensitivity Fix.** Corrects uppercase references to lowercase file names in `SKILL.md`, preventing silent failures on case-sensitive operating systems (Linux/macOS).
*   **[PR #362](https://github.com/anthropics/skills/pull/362): UTF-8 Panic Fix.** Replaces character-based length checks with byte-length validation to stop Rust panics when the CLI processes multi-byte characters in non-English languages.

### 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is for robust cross-platform stability (particularly Windows support), secure enterprise sharing capabilities, and reliable meta-tooling for the `skill-creator` itself.

---

Here is the Claude Code community digest for June 13, 2026.

### 1. Today's Highlights
Claude Code rolled out three new releases (v2.1.174 to v2.1.176) focusing on UI/UX refinements, localization for session titles, and stricter enterprise model routing controls. The community remains highly active around agent orchestration, with significant frustration brewing over uncontrolled parallel agent spawning that leads to massive token consumption. Meanwhile, feature requests are heavily leaning into enterprise and power-user needs, particularly around better GitLab integration, team tier pricing, and advanced IDE diff reviews.

### 2. Releases
*   **[v2.1.176](https://github.com/anthropics/claude-code/releases/tag/v2.1.176)**
    *   Session titles now match the language of the user's conversation (pin via the `language` setting).
    *   Added `footerLinksRegexes` setting for custom, regex-matched link badges in the footer.
    *   Improved Bedrock credential handling.
*   **[v2.1.175](https://github.com/anthropics/claude-code/releases/tag/v2.1.175)**
    *   Added the `enforceAvailableModels` managed setting. This tightens enterprise security by ensuring the Default model adheres to the `availableModels` allowlist and prevents user/project settings from widening the scope.
*   **[v2.1.174](https://github.com/anthropics/claude-code/releases/tag/v2.1.174)**
    *   Added `wheelScrollAccelerationEnabled` to toggle mouse-wheel acceleration in fullscreen.
    *   Fixed a UI bug in the `/model` picker that hid the resolved default model family (e.g., Opus, Sonnet) on various premium plans.

### 3. Hot Issues
1.  **[Max Plan Session Limits Depleting Abnormally](https://github.com/anthropics/claude-code/issues/38335)** (783 comments, 464 👍) - A massive ongoing thread indicating that CLI usage on the Max plan has been draining abnormally fast since March 2026. High community engagement highlights ongoing frustrations with usage telemetry.
2.  **[False "Limit Hit" at 84% Usage](https://github.com/anthropics/claude-code/issues/19673)** (100 comments, 75 👍) - Users are hard-blocked by rate limits while the UI still shows 84% session availability, pointing to reconciliation bugs between the CLI and the backend quota system.
3.  **[GitLab Integration Request](https://github.com/anthropics/claude-code/issues/12346)** (40 comments, 104 👍) - Developers are heavily requesting native GitLab integration (Repository connection, MRs, mobile access) to match existing GitHub capabilities.
4.  **[MCP Permission Prompts Fail in Web UI](https://github.com/anthropics/claude-code/issues/60385)** (16 comments) - When using `--remote-control`, non-read MCP tool permission prompts block the session because they render locally in the TUI instead of the web UI.
5.  **[SendMessage Tool Broken After Resume Removal](https://github.com/anthropics/claude-code/issues/38183)** (18 comments) - A critical regression where agent continuation breaks because `SendMessage` is referenced but no longer available after parameter changes.
6.  **[Subagent Model Routing Fails](https://github.com/anthropics/claude-code/issues/43869)** (9 comments) - Subagents silently ignore routing configurations and default to the parent model (Opus), inadvertently driving up token costs.
7.  **[Parallel Agent Spawning Crashes & Drains Tokens](https://github.com/anthropics/claude-code/issues/67636)** (4 comments) - Users report Claude autonomously spawning 10-15 agents for trivial tasks, resulting in million-token consumption spikes before crashing.
8.  **[JetBrains Diff Auto-Focus Accessibility Issue](https://github.com/anthropics/claude-code/issues/50899)** (5 comments) - JetBrains users are frustrated by forced tab-switching and diff auto-focus, requesting an accessibility setting to disable it.
9.  **[MCP Servers Lack Session Identifiers](https://github.com/anthropics/claude-code/issues/41836)** (10 comments) - HTTP MCP servers cannot distinguish concurrent sessions, making per-conversation state management impossible.
10. **[Desktop Extension Reinstall Bug](https://github.com/anthropics/claude-code/issues/67919)** (5 comments) - Uninstalled Claude Desktop extensions cannot be reinstalled, with the broken state persisting across app reinstalls.

### 4. Key PR Progress
1.  **[PR #67753: Case-insensitive completion promise matching](https://github.com/anthropics/claude-code/pull/67753)** - Fixes false negatives in agent completion tracking when output casing differs from configured promises (e.g., `Complete` vs `COMPLETE`). 
2.  **[PR #67722: Automated Issue Dedupe Workflow](https://github.com/anthropics/claude-code/pull/67722)** - Proposes a GitHub Action to automatically generate deduplicated issues.
3.  **[PR #67699 & #67697: Block autonomous background scripts](https://github.com/anthropics/claude-code/pull/67699)** - Community-generated (AI-assisted) PRs addressing issue #67654, attempting to stop Claude from autonomously running paid external background scripts.

### 5. Feature Request Trends
*   **Enterprise & Tooling Integrations:** Strong demand for native connections to third-party enterprise tools like GitLab, bypassing the GitHub-centric ecosystem.
*   **Granular Cost & Tier Controls:** Power users on Team plans are requesting a "Max 20x" equivalent tier ([Issue #47509](https://github.com/anthropics/claude-code/issues/47509)) to match their high-volume CLI usage.
*   **Agent Orchestration Control:** Developers want safer agent guardrails. Requests include exposing hook variables to permission pickers ([Issue #61085](https://github.com/anthropics/claude-code/issues/61085)) and better programmatic focus for background sessions ([Issue #68064](https://github.com/anthropics/claude-code/issues/68064)).
*   **IDE Workflow Improvements:** VS Code users want a batch diff review mode ([Issue #31888](https://github.com/anthropics/claude-code/issues/31888)), and JetBrains users want better accessibility controls over UI focus stealing.

### 6. Developer Pain Points
*   **Unpredictable Quotas & Rate Limits:** The biggest frustration continues to be early throttling. Users frequently hit invisible walls ("You've hit your limit") despite the UI showing significant remaining capacity.
*   **Runaway Token Consumption:** Whether through subagents silently falling back to Opus or agents aggressively spawning parallel workers, developers are seeing massive token drains without corresponding quality improvements.
*   **Context Window Bloat:** Several bugs reported today involve unexpected context saturation, such as a bundled `/claude-api` skill spiking context by 77% ([Issue #63566](https://github.com/anthropics/claude-code/issues/63566)) and a WSL bug injecting 9.3M tokens into the system prompt ([Issue #65429](https://github.com/anthropics/claude-code/issues/65429)).
*   **MCP & Agent State Asynchrony:** Developers building complex agent architectures are running into invisible walls, such as background agent notifications routing to the wrong agent IDs ([Issue #68065](https://github.com/anthropics/claude-code/issues/68065)) and a complete lack of session context passed to custom MCP servers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for June 13, 2026.

### 1. Today's Highlights
OpenAI Codex accelerated its Rust CLI iteration today, pushing four new alpha builds (v0.140.0) alongside a flurry of core architectural improvements. The development team is heavily focused on refining plugin authentication, advancing the Responses API state management, and stabilizing the sandbox environment. However, the community remains vocal about persistent macOS app launch loops and critical Windows sandbox failures that continue to block productivity.

### 2. Releases
The CLI saw rapid iteration in the last 24 hours with four consecutive alpha releases. 
* **[rust-v0.140.0-alpha.16](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.16)**
* **[rust-v0.140.0-alpha.15](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.15)**
* **[rust-v0.140.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.14)**
* **[rust-v0.140.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.140.0-alpha.13)**

### 3. Hot Issues
* **[macOS] syspolicyd File Descriptor Exhaustion & App Loops** ([#25882](https://github.com/openai/codex/issues/25882), [#25243](https://github.com/openai/codex/issues/25243)): The Codex macOS app is relaunching its main binary in a tight loop, exhausting `syspolicyd` file descriptors and freezing system-wide app launches. This critical performance bug has gained significant community traction but remains open.
* **[Windows] Global Sandbox Setup Failures** ([#24391](https://github.com/openai/codex/issues/24391), [#26737](https://github.com/openai/codex/issues/26737)): Windows users on CLI and Desktop are reporting widespread "spawn setup refresh" failures in clean environments. This completely breaks local execution and tool usage, drawing heavy community frustration.
* **[Context] Automatic Context Compaction Failures** ([#26493](https://github.com/openai/codex/issues/26493), [#24014](https://github.com/openai/codex/issues/24014)): Users are experiencing task continuity breakages when the CLI/App attempts to compact long context windows, repeatedly throwing `invalid_enum_value` or `context_length_exceeded` errors.
* **[macOS] Workspace Dependencies Startup Crash** ([#19220](https://github.com/openai/codex/issues/19220)): A recent update introduced an unsupported feature enablement bug (`workspace_dependencies`) that instantly crashes the macOS app on startup. The issue was recently closed, indicating a fix is likely merged.
* **[macOS] Dictation Hotkey Regression** ([#27296](https://github.com/openai/codex/issues/27296)): A highly upvoted issue noting that the global `Fn` dictation hotkey stops working system-wide after updating to macOS app version 26.608.12217.
* **[Windows] WSL app-server Launch Failure** ([#23777](https://github.com/openai/codex/issues/23777)): Codex Desktop on Windows fails to launch the WSL app-server due to a CRLF/LF SQLx migration checksum mismatch, effectively breaking cross-platform development workflows.
* **[Windows] Unbounded Memory Commit Growth** ([#12414](https://github.com/openai/codex/issues/12414)): An older but highly viewed issue where the CLI on Windows 10 exhibits severe memory leaks when idle (reaching ~90GB), causing system Out-Of-Memory (OOM) crashes.
* **[macOS] Existing Threads Fail to Load** ([#16817](https://github.com/openai/codex/issues/16817), [#15448](https://github.com/openai/codex/issues/15448)): The Desktop app routinely hides or fails to load existing chat threads upon restart, particularly when workspaces are symlinked to external drives.
* **[Windows] Blank Screen Post-Login** ([#23795](https://github.com/openai/codex/issues/23795)): Windows users are confronting a "blank white screen" immediately after completing the ChatGPT OAuth login flow, locking them out of the app entirely.
* **[Windows] Computer Use Exports Mismatch** ([#27747](https://github.com/openai/codex/issues/27747)): The Computer Use bootstrap fails on Windows due to the bundled `@oai/sky` package not correctly exporting required internal subpaths. 

### 4. Key PR Progress
* **Core API & WebSocket State Management:** [PR #27954](https://github.com/openai/codex/pull/27954) adds item-level metadata for `turn_id` in the Responses API, while [PR #27929](https://github.com/openai/codex/pull/27929) ensures opaque turn state is sent securely over WebSockets per request rather than connection headers.
* **Advanced Plugin & Marketplace Auth Routing:** A massive stack of PRs ([#27602](https://github.com/openai/codex/pull/27602), [#27958](https://github.com/openai/codex/pull/27958), [#27956](https://github.com/openai/codex/pull/27956), [#27904](https://github.com/openai/codex/pull/27904)) introduces capability-aware filtering, ensuring API-key sessions and Git-backed plugins are properly validated and don't expose unusable app/MCP declarations.
* **Sandbox & File Resolution Routing:** [PR #27923](https://github.com/openai/codex/pull/27923) fixes MCP file uploads to route correctly through the environment filesystem, and [PR #27963](https://github.com/openai/codex/pull/27963) optimizes developer permissions messaging by directly referencing writable roots.
* **Windows Testing & Execution Patches:** [PR #26657](https://github.com/openai/codex/pull/26657) addresses a critical bug where `apply_patch` bypassed Windows sandbox wrappers. To prevent future regressions, [PR #27964](https://github.com/openai/codex/pull/27964) and [PR #27937](https://github.com/openai/codex/pull/27937) introduce hermetic Wine test support to run Windows binary exec-servers directly in Linux CI.
* **TUI & Developer Experience:** [PR #27509](https://github.com/openai/codex/pull/27509) adds support for handling large pasted text in TUI goals, and [PR #27925](https://github.com/openai/codex/pull/27925) relands the highly anticipated token activity command for the terminal.

### 5. Feature Request Trends
* **Configurable Storage Directories:** Users are strongly requesting the ability to change default workspace and chat storage paths ([#19909](https://github.com/openai/codex/issues/19909)). Storing data in `~/Documents` natively conflicts with iCloud Drive syncing, which corrupts local coding sessions.
* **Cross-Platform Tooling Parity:** There is a massive demand for feature parity on Windows, specifically regarding reliable sandbox setups, functional Computer Use deployments, and stable plugin/Chrome execution.
* **Stable Remote Control & Mobile Sync:** Requests to improve thread persistence and history loading when utilizing Android Remote Control features tied to Mac desktop hosts ([#22762](https://github.com/openai/codex/issues/22762)).

### 6. Developer Pain Points
* **Windows Instability:** Windows developers report severe friction, with issues ranging from unbounded memory leaks to completely broken sandbox execution and white-screen OAuth loops rendering the CLI/App unusable.
* **macOS App Freezes:** The macOS app's tendency to enter tight relaunch loops not only crashes Codex but actively degrades broader macOS system performance by exhausting OS-level policy daemons.
* **Opaque Rate Limits:** Several users note dramatic spikes in invisible quota consumption ([#26306](https://github.com/openai/codex/issues/26306)), leading to sudden rate limits without clear metrics or visibility into token draining.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-13

## 1. Today's Highlights
It was a highly active day for the Gemini CLI repository, with no new official releases but massive community and contributor momentum. Maintainers and external contributors submitted a flurry of critical bug fixes—most notably addressing agent hangs, oversized tool responses, and CLI crashes. Meanwhile, feature-rich pull requests introducing native image pasting, a new `models` command, and vital CVE patches highlight the project's push toward multimodal parity, usability, and enterprise security. 

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues

1. **Generalist agent hangs indefinitely** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))
   *Why it matters:* The most liked issue (👍 8) in this cycle. Users report that deferring to the generalist agent causes the CLI to hang forever, requiring manual cancellation. 
   *Community Reaction:* High frustration; users are currently forced to use prompt-instructions to disable sub-agents as a workaround.

2. **Shell command execution gets stuck** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
   *Why it matters:* A critical UX blocker where the CLI hangs on "Awaiting user input" long after a simple shell command finishes.
   *Community Reaction:* 3 thumbs up; users report this happening on extremely basic commands.

3. **Subagent falsely reports success on `MAX_TURNS` interruption** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
   *Why it matters:* Hides real failures. The `codebase_investigator` subagent hits its turn limit and ceases analysis, but incorrectly reports `status: "success"`.
   *Community Reaction:* 2 thumbs up. Makes debugging agent workflows incredibly misleading for developers.

4. **Gemini does not use skills and sub-agents enough** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))
   *Why it matters:* Even with explicit custom skills configured, the model ignores them autonomously and only uses them when specifically instructed.
   *Community Reaction:* Acknowledged as a widespread anecdotal issue limiting the usefulness of custom tooling.

5. **Deterministic redaction needed for Auto Memory** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))
   *Why it matters:* Auto Memory reads local transcripts and sends content to the background agent. Secrets are only redacted *after* entering the model context, posing a potential security risk.
   *Community Reaction:* Maintainers are actively prioritizing deterministic redaction prior to context injection.

6. **Auto Memory retries low-signal sessions indefinitely** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))
   *Why it matters:* Causes unnecessary background processing and token usage. The agent repeatedly surfaces unprocessed low-signal sessions instead of marking them as skipped.

7. **Browser subagent fails in Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))
   *Why it matters:* Linux users on modern Wayland displays are completely blocked from using the browser agent.
   *Community Reaction:* 1 thumb up; currently fails silently or with vague termination reasons.

8. **AST-aware file reads and codebase mapping investigations** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
   *Why it matters:* An Epic tracking AST-aware tools (like AST grep) to let agents read method bounds precisely in a single call, reducing token noise and turn counts.

9. **Gemini CLI encounters 400 error with > 128 tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))
   *Why it matters:* Hard limits on tool counts break workflows for users with heavily customized MCP/Skill environments.
   *Community Reaction:* Users expect the agent to be smarter about dynamically scoping enabled tools.

10. **Symlinked agents not recognized** ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079))
    *Why it matters:* Breaks standard dotfile management practices (like stow or symlinks) for `~/.gemini/agents/filename.md`.

## 4. Key PR Progress

1. **feat(cli): add native drag-and-drop and Cmd+V clipboard image pasting** ([PR #27859](https://github.com/google-gemini/gemini-cli/pull/27859))
   Brings multimodal parity to the CLI, allowing users to drop images directly into the terminal or paste from the clipboard via Cmd/Ctrl+V.

2. **feat(cli): add 'models' command** ([PR #27848](https://github.com/google-gemini/gemini-cli/pull/27848))
   Introduces a `gemini models` command to list available models, context limits, and tiers (Pro/Flash) in text or JSON format.

3. **fix(core): cap pending tool responses** ([PR #27870](https://github.com/google-gemini/gemini-cli/pull/27870))
   Prevents crashes and state corruption by capping oversized tool outputs before they become the pending `functionResponse` for the next model turn.

4. **Fix/pending tools and trust overrides** ([PR #27854](https://github.com/google-gemini/gemini-cli/pull/27854))
   Prevents premature state progression when the agent is waiting for user tool approvals and forces sequential file writes to eliminate race conditions.

5. **fix(core): handle multi-line escaped quotes in stripShellWrapper** ([PR #27467](https://github.com/google-gemini/gemini-cli/pull/27467))
   Resolves a parsing bug where wrapped shell commands with complex multi-line escaped quotes failed. Migrates logic to use the `shell-quote` library.

6. **fix(cli): preserve executing subagent tool calls in UI** ([PR #27862](https://github.com/google-gemini/gemini-cli/pull/27862))
   Fixes a UI bug where executing subagent tool calls disappear from the display, giving users better visibility into what sub-agents are doing.

7. **fix(core): improve SKILL.md frontmatter parsing robustness** ([PR #27873](https://github.com/google-gemini/gemini-cli/pull/27873))
   Fixes parsing issues in custom skills by handling UTF-8 BOMs, trailing spaces, and normalizing YAML types correctly.

8. **fix(a2a-server): prevent crash when tasks metadata endpoint returns 501** ([PR #27867](https://github.com/google-gemini/gemini-cli/pull/27867))
   Improves resilience for agent-to-agent (a2a) server communications when endpoints are unimplemented.

9. **fix(theme): honor custom border colors** ([PR #27866](https://github.com/google-gemini/gemini-cli/pull/27866))
   Resolves an annoying theming bug where terminals reporting background colors would override custom UI border colors.

10. **fix: upgrade shell-quote to 1.8.4 (CVE-2026-9277)** ([PR #27856](https://github.com/google-gemini/gemini-cli/pull/27856))
    Patches a CRITICAL security vulnerability related to command parsing/escaping, safeguarding shell executions.

## 5. Feature Request Trends

*   **Deep Codebase Awareness (AST):** Strong interest in moving away from naive text-based file searches toward Abstract Syntax Tree (AST) aware tools for reading, mapping, and searching codebases. 
*   **Smarter Sub-agent Routing:** Users want the model to autonomously leverage custom-defined skills and local/remote sub-agents when appropriate, without requiring explicit instructions per prompt.
*   **Native Multimodal Inputs:** High demand for visual context, realized in today's PRs, requesting drag-and-drop and standard OS clipboard image pasting.
*   **Better Self-Introspection ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)):** Requests for the agent to know its own CLI flags, hotkeys, and capabilities to act as an expert guide to the user.

## 6. Developer Pain Points

*   **Execution Hangs:** The most prevalent frustration. Agents hanging indefinitely, getting stuck waiting for shell commands to finish, or trapping the CLI in retry loops on zero quotas.
*   **Stealth Failures:** Sub-agents silently failing (reporting success) when hitting `MAX_TURNS` or crashing, making orchestration extremely hard to debug.
*   **Token Context Bloat:** Overly large tool responses crashing the CLI or degrading performance, combined with a lack of dynamic tool scoping, causes unnecessary token consumption and hard API limits.
*   **Workspace Messiness:** Agents littering the workspace with temporary edit scripts in random directories instead of using clean, in-memory, or tmp-designated edits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the community digest for GitHub Copilot CLI.

# GitHub Copilot CLI Community Digest
**Date:** 2026-06-13

### 1. Today's Highlights
GitHub Copilot CLI rolled out version `v1.0.62-1`, introducing highly requested features like custom `.github/prompts` slash commands, session-scoped extensions, and server-side filtering for Issues and PRs. However, the community is actively reporting significant terminal rendering glitches during streaming, alongside persistent context-memory management issues and enterprise policy blocks affecting MCP server usage. 

### 2. Releases
**v1.0.62-1** introduces several quality-of-life improvements and expanded capabilities:
- Added a 'YOLO' (allow all) indicator in the footer and integrated an allow-all state into `custom statusLine.command`.
- Enabled server-side filtering for GitHub search by pressing `/` on the Issues or Pull Requests tabs.
- Introduced session-scoped extensions and canvases.
- Allowed SDK clients to configure session memory thresholds.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

- **#53 [OPEN] Bring back the GitHub Copilot in the CLI commands to not break workflows** *(75 👍)*
  After six months without an official response, users are frustrated by changes that broke existing CLI workflows. The community has begun rolling out alternative custom versions. ([Issue #53](https://github.com/github/copilot-cli/issues/53))
- **#618 [CLOSED] Feature Request: Support custom slash commands from .github/prompts directory** *(99 👍)*
  A massive community victory. This highly requested feature to support custom prompt files (similar to Claude Code) was addressed in the latest `v1.0.62-1` release. ([Issue #618](https://github.com/github/copilot-cli/issues/618))
- **#1481 [CLOSED] SHIFT + ENTER should spawn a line break, but executes the prompt instead** *(15 👍)*
  A core UX frustration where the universal `SHIFT + ENTER` keystroke executed prompts rather than creating a line break. This has now been resolved. ([Issue #1481](https://github.com/github/copilot-cli/issues/1481))
- **#2661 [CLOSED] ❌ Error: The requested model is not supported (Opus 4.5)** *(0 👍)*
  Users were blocked from using the Opus 4.5 model despite having proper access via the Student Pack. The issue, caused by a CAPIError 400, has been fixed. ([Issue #2661](https://github.com/github/copilot-cli/issues/2661))
- **#1999 [OPEN] Cannot enter @ on German keyboard (Alt-Gr + q)** *(1 👍)*
  A critical internationalization bug rendering the CLI unusable for German keyboard layouts, as Alt-Gr combinations fail to register. ([Issue #1999](https://github.com/github/copilot-cli/issues/1999))
- **#2306 [OPEN] You are not authorized to use this Copilot feature** *(3 👍)*
  Intermittent enterprise/organization policy errors are locking developers out of the CLI 2-3 times a week without warning. ([Issue #2306](https://github.com/github/copilot-cli/issues/2306))
- **#3749 [OPEN] Terminal streaming renderer corrupts output** *(7 👍)*
  The terminal renderer is producing doubled characters, truncated tokens, and repeated lines during the streaming and reasoning phases. ([Issue #3749](https://github.com/github/copilot-cli/issues/3749))
- **#3755 [OPEN] Reasoning/thinking display garbles streamed text** *(2 👍)*
  Similar to #3749, enabling `showReasoning: true` results in overlapping text fragments (e.g., "number" becomes "numbnumber"). ([Issue #3755](https://github.com/github/copilot-cli/issues/3755))
- **#1614 [CLOSED] Session hangs ~8 minutes after compaction** *(3 👍)*
  A dangerous state where the CLI appears completely frozen on "Thinking..." for extended periods following a context cache miss after memory compaction. ([Issue #1614](https://github.com/github/copilot-cli/issues/1614))
- **#3621 [OPEN] Auto-compaction loops infinitely when instruction files are large** *(0 👍)*
  Large global or repo-level instruction files trigger an infinite auto-compaction loop, continuously wiping working memory and halting multi-step tasks. ([Issue #3621](https://github.com/github/copilot-cli/issues/3621))

*(Note: Only 1 PR was updated in the last 24 hours, so Section 4 has been omitted to maintain quality.)*

### 5. Feature Request Trends
Distilling the latest issues reveals several clear directions the community wants:
- **Advanced Context & Memory Control:** Users want more granular control over token overhead. Requests include configurable system prompts to reduce fixed token bloat (#2627), long-running cross-session goals via `.copilot/goals.md` (#3364), and tools to prevent infinite compaction loops caused by large instruction files (#3621).
- **Enhanced MCP (Model Context Protocol) Management:** Developers are asking for better control over MCP servers, such as the ability to toggle them on/off temporarily from the UI (#3564) and support for custom third-party providers via ACP mode (#3048).
- **Enterprise Telemetry:** Teams are requesting the emission of cost and premium-request metrics via OpenTelemetry to match the analytics capabilities of competitor tools (#3778).
- **Agent Scheduling & Execution:** There is a need for reliable deferred action execution (e.g., executing a prompt via `/after` without dropping the task on non-existent ticks) (#3774).

### 6. Developer Pain Points
- **Terminal Rendering Glitches:** The most high-frequency complaint over the last 24 hours is corrupted streamed output. Overlapping text, doubled characters, and mangled UI during the "thinking" phase are heavily disrupting readability across both Windows and Unix environments (#3749, #3755, #3501, #3769, #3780, #982).
- **International Keyboard Support:** Non-US developers are repeatedly blocked by the CLI's inability to process `AltGr` combinations, making it impossible to type essential characters like `@`, `#`, or Polish diacritics (#1999, #2920).
- **Context Compaction & Session Hangs:** Developers are frustrated by aggressive context-window compaction. Large system prompts cause infinite compaction loops, and prompt cache misses result in multi-minute session hangs with zero UI feedback (#1614, #3621).
- **MCP Server Instability:** Network and policy-related MCP issues are rampant. Users report MCP servers respawning in unbounded tight loops (causing system resource drains) (#3782), built-in servers failing post-update on Windows (#3455), and enterprise policies silently blocking third-party servers (#3756).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI based on the provided GitHub data.

### 1. Today's Highlights
Community activity over the past 24 hours focused heavily on resolving execution loop bugs and clarifying API rate-limiting mechanics. While no new releases were deployed, maintainers and contributors are actively addressing critical Web UI infinite looping, Python 3.13 dependency compatibility, and transparency regarding token consumption limits.

### 2. Releases
**None.** 
No new releases were published in the last 24 hours.

### 3. Hot Issues
Although only three issues saw updates today, they highlight critical areas concerning billing, UI stability, and agent execution loops.

*   **[OPEN] Kimi CLI stuck in reading one file again and again and stuck in a loop** ([Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640))
    *   **Why it matters:** Infinite agent loops waste valuable API tokens and completely halt the development workflow. This issue highlights an edge case where the CLI gets trapped re-reading the same file. 
    *   **Community reaction:** 8 comments and ongoing discussion indicate users are actively troubleshooting workarounds, particularly around custom endpoints and older CLI versions.
*   **[OPEN] kimiCode用量计算有问题 || There is a problem with kimiCode usage calculation** ([Issue #1994](https://github.com/MoonshotAI/kimi-cli/issues/1994))
    *   **Why it matters:** Token billing transparency is critical for developers managing costs. The user reports that extended Chain-of-Thought (CoT) processing in the K2.6 model rapidly drains token quotas, contradicting expectations of request-based limits.
    *   **Community reaction:** This is a highly impactful issue with 7 upvotes and 6 comments, reflecting a shared frustration among users regarding quota depletion and official pricing documentation.
*   **[OPEN] [Bug] Kimi Work tab: "Daimon control WS not ready" + infinite reload at 99%** ([Issue #2435](https://github.com/MoonshotAI/kimi-cli/issues/2435))
    *   **Why it matters:** The `kimi web` interface is experiencing a complete failure in its Work tab due to a WebSocket daemon initialization error, rendering the feature unusable for Windows users.
    *   **Community reaction:** Users are reporting complete UI dead-ends with infinite reloading at 99%, requiring urgent patching in an upcoming release.

### 4. Key PR Progress
*   **[OPEN] fix: guard trafilatura import to prevent cascading tool load failure on Python 3.13** ([PR #1597](https://github.com/MoonshotAI/kimi-cli/pull/1597))
    *   **Summary:** This PR addresses a critical compatibility issue for modern Python environments. On Python 3.13, the `charset-normalizer` package uses compiled `.so` binaries incompatible with the interpreter, causing a cascading failure when importing `trafilatura`. The author implements an import guard to prevent this web fetching tool from crashing the entire CLI.

### 5. Feature Request Trends
Based on recent issues, the community is pushing for improvements in two primary areas:
*   **Cost Transparency & Quota Controls:** Users are requesting clearer breakdowns of how tokens—especially those consumed by hidden Chain-of-Thought (CoT) reasoning—are calculated against their API limits. There is a strong desire for usage dashboards or warnings before heavy loops deplete quotas.
*   **Robust Execution Guardrails:** Developers want built-in timeout mechanisms or loop-detection algorithms to prevent the CLI agent from getting stuck reading files or executing redundant API calls.

### 6. Developer Pain Points
*   **Hidden Token Consumption:** Developers are frustrated by the rapid depletion of their 5-hour API quotas. Extended backend thinking processes (like K2.6's CoT) consume massive amounts of tokens without explicit user consent or visibility, making the tool unviable for sustained, complex projects.
*   **Agent Cycling & Instability:** The CLI occasionally enters infinite loops (e.g., repeatedly reading files), wasting time and resources.
*   **Web UI Reliability & Dependency Management:** Breakpoints like WebSocket daemon failures in `kimi web` and strict, unhandled dependency requirements (like `trafilatura` on Python 3.13) create friction during environment setup and daily usage.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-13

## 1. Today's Highlights
OpenCode shipped **v1.17.4**, introducing connector-based authentication flows, workspace-relative `cwd` support for local MCP servers, and new v2 API endpoints for session management. The community remains highly focused on permission model reliability—multiple high-traction issues report sub-agents and wildcards bypassing `deny` rules. Meanwhile, contributors are actively submitting PRs to stabilize Windows upgrades (Winget/NSIS), recover stale MCP sessions, and add database health diagnostics.

## 2. Releases

**v1.17.4** — Released 2026-06-13
- **Local MCP `cwd` support**: MCP servers can now start from a workspace-relative directory (contributed by @Grantmartin2002).
- **Connector-based auth**: New authentication flows and stored provider credential support.
- **V2 Session API**: New endpoints to create, fetch, and list sessions.

---

## 3. Hot Issues

1. **[#27436](https://github.com/anomalyco/opencode/issues/27436) — Permission prompt UI gets stuck (👍 11, 16 comments)**  
   Users report that clicking "Allow once" is unresponsive, "Allow always" loops, and "Reject" blocks submission—effectively deadlocking the session. High thumb count signals widespread impact.

2. **[#17505](https://github.com/anomalyco/opencode/issues/17505) — `session/update` notifications arrive after `end_turn` (👍 8, 13 comments)**  
   ACP consumers like Fabriqa receive late notifications, causing their UI to render incomplete/empty content. Affects anyone integrating OpenCode as an ACP provider.

3. **[#16610](https://github.com/anomalyco/opencode/issues/16610) — Startup hang when `inotify` user instances are exhausted (👍 7, 8 comments)**  
   OpenCode freezes silently at startup in `.git` directories if the system's inotify limit is low. Users expect a graceful warning rather than a hang.

4. **[#31204](https://github.com/anomalyco/opencode/issues/31204) — `session_message.seq` NOT NULL crash on agent-switched sessions (👍 2, 6 comments)**  
   Recent SQLite migrations cause crashes when an agent switch occurs during a session. A regression that breaks multi-agent workflows.

5. **[#12716](https://github.com/anomalyco/opencode/issues/12716) — Doom loop not caught during reasoning/output (👍 3, 9 comments)**  
   Infinite repetition during model reasoning is not detected, burning tokens and budget. Complements the broader doom-loop detection issues (#25254, #18108).

6. **[#24335](https://github.com/anomalyco/opencode/issues/24335) — Permission wildcard `*` overwrites lower permissions (👍 4, 7 comments)**  
   The documented "last matching rule wins" behavior doesn't work as expected with wildcards, undermining the entire permission rule chain.

7. **[#32024](https://github.com/anomalyco/opencode/issues/32024) — Sub-agents bypass `deny` rules for read/grep (👍 1, 2 comments)**  
   Sub-agents spawned via the Task tool ignore `deny` permission rules (e.g., `**/.env`), a critical security gap. Fresh issue, likely to gain traction.

8. **[#18441](https://github.com/anomalyco/opencode/issues/18441) — `edit` permission rules ignored when `external_directory` is `allow` (👍 3, 2 comments)**  
   Even with explicit `edit: deny` rules, writes proceed if `external_directory` is set to `allow`. Permissions appear inconsistent across rule types.

9. **[#26818](https://github.com/anomalyco/opencode/issues/26818) — Windows auto-update ignores custom install directory (👍 1, 2 comments)**  
   Auto-update rewrites the install path to `%LocalAppData%`, disregarding the user's original `D:\OpenCode` choice. A persistent pain point for Windows users.

10. **[#31755](https://github.com/anomalyco/opencode/issues/31755) — MiniMax direct API caching regression (6 comments)**  
    Caching stopped working for MiniMax M3 via the direct API, possibly related to a new thinking toggle, while OpenRouter BYOK still caches correctly.

---

## 4. Key PR Progress

1. **[#30242](https://github.com/anomalyco/opencode/pull/30242) — Allow choosing Windows install directory** (@Fatty911)  
   Switches NSIS from one-click to assisted installer flow, preserving custom directories across updates. Directly fixes #26818.

2. **[#30025](https://github.com/anomalyco/opencode/pull/30025) — Support Winget upgrades** (@pascalandr)  
   Detects WinGet shim paths and routes `opencode upgrade` through `winget upgrade`. Closes #30026.

3. **[#32088](https://github.com/anomalyco/opencode/pull/32088) — Recover expired MCP sessions** (@rekram1-node)  
   Patches the MCP SDK to reinitialize Streamable HTTP sessions on 404, coalesces concurrent stale-session failures, and retries rejected POSTs once.

4. **[#28071](https://github.com/anomalyco/opencode/pull/28071) — Well-known auth service [beta]** (@thdxr)  
   Introduces `AuthWellKnown` service with legacy `auth.json` migration, shared `{env:…}` / `{file:…}` substitution, and centralized config loading.

5. **[#32075](https://github.com/anomalyco/opencode/pull/32075) — Configurable plan reminders** (@DuncanCasteleyn)  
   Allows users to override or disable the built-in plan reminder prompt, addressing repeated community requests (#17968, #16442).

6. **[#31392](https://github.com/anomalyco/opencode/pull/31392) — Stage edits for native review in ACP clients** (@PacoDw)  
   Enables OpenCode to present diffs for native file review in ACP clients like Zed and Devin—a major UX improvement for third-party integrations.

7. **[#32093](https://github.com/anomalyco/opencode/pull/32093) — `db doctor` and `db repair` commands** (@pascalandr)  
   Adds CLI diagnostics and repair tools for local SQLite databases, giving users a first-line fix for migration and corruption issues.

8. **[#32104](https://github.com/anomalyco/opencode/pull/32104) — Drag-and-drop `.docx` and `.xlsx` in TUI** (@GP-commits)  
   Extends the TUI and read tool to handle Office documents via `mammoth` (docx→HTML→Markdown) and `xlsx` parsing.

9. **[#32085](https://github.com/anomalyco/opencode/pull/32085) — Handle "session not found" without renderer crash** (@SisyphusZheng)  
   Gracefully handles 404s when Desktop restores a session ID that no longer exists on the server.

10. **[#31713](https://github.com/anomalyco/opencode/pull/31713) — Retry on provider connection hangs with 60s delay** (@reduardo7)  
    Retries on ECONNRESET / HTTP 504 / engine crash errors from providers like NVIDIA, preventing agents from hanging indefinitely.

---

## 5. Feature Request Trends

- **Permission system hardening** — The dominant theme. Users want `deny` rules to be enforced consistently across sub-agents, wildcards, `external_directory`, and tool-specific overrides (#24335, #18441, #24429, #32024).
- **Doom-loop and infinite-retry mitigation** — Multiple issues request better detection of repetitive tool-call loops and reasoning loops, including cross-message patterns (#12716, #25254, #18108, #17169).
- **Windows parity** — Winget upgrades, install directory preservation, and PowerShell compatibility remain recurring asks (#26818, #30026, #25938).
- **Configurable provider/model management** — Users want to override `disabled_providers` (#32103), auto-discover local models (#32076), and get better caching transparency (#31755).
- **Observability and diagnostics** — Requests for machine-readable skill inventories (#32100), DB health tooling (#32093), and system notification support under tmux/zellij (#29099).

---

## 6. Developer Pain Points

- **Permission system trust is eroding.** The highest-engagement issues cluster around permissions not working as documented—sub-agents bypassing deny rules, wildcards ignoring specificity, and `edit` rules being silently ignored. Developers relying on OpenCode for sensitive workflows (e.g., `.env` protection) cannot trust the current enforcement model.
- **Doom loops waste tokens and money.** Several reports describe infinite retry or repetition cycles that are not caught by existing detection logic, leading to unexpected API costs. The detection scope is limited to single messages and misses cross-message patterns.
- **Windows experience lags behind.** Auto-update breaking custom installs, lack of Winget support, and PowerShell-specific hangs suggest Windows is a second-class citizen in the current release cycle.
- **Startup reliability on resource-constrained environments.** Silent hangs due to inotify limits (#16610) or stale server state (#31917) create a poor first impression, especially for users in CI or containerized environments where resource limits are common.
- **Documentation drift.** Deleted agents (scout) and non-functional language pickers (#29326, #32105) indicate docs are not being kept in sync with codebase changes, eroding developer trust in official references.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community on 2026-06-13.

### 1. Today's Highlights
Pi v0.79.2 was released, bringing clearer AWS data retention validation guidance for Amazon Bedrock users. The community has been highly active in reporting edge cases across third-party LLM proxies, with a major focus on resolving indefinite UI hangs and unhandled stream closures in OpenAI and Anthropic integrations. Several critical merges today also improved context compaction stability and extension isolation.

### 2. Releases
*   **[v0.79.2](https://github.com/earendil-works/pi/blob/v0.79.2/packages/coding-agent/docs/providers.md#amazon-bedrock)**: Introduced clearer validation guidance for Amazon Bedrock. Data retention validation errors now directly link out to the official AWS documentation, streamlining the troubleshooting process for enterprise AWS users.

### 3. Hot Issues
1.  **[#4945](https://github.com/earendil-works/pi/issues/4945) - OpenAI Codex Connection Reliability Issues**: A highly upvoted issue (30 👍) where `gpt-5.5` causes the interactive TUI to freeze on "Working..." without feedback. Highlights critical reliability friction with OpenAI integrations.
2.  **[#5667](https://github.com/earendil-works/pi/issues/5667) - Bash overflow spill crashes pi with EACCES**: Reveals a severe UX flaw where large bash outputs (>50KB) spill to macOS's non-writable `$TMPDIR`, causing Pi to crash entirely via an uncaught exception. 
3.  **[#5644](https://github.com/earendil-works/pi/issues/5644) - Incorrect GPT 5.5 context window size**: Users point out that the context window limits for GPT-5.5 (400K for Codex vs 1M for API) are mismatched in the agent's configuration, causing premature context exhaustion.
4.  **[#5653](https://github.com/earendil-works/pi/issues/5653) - Duplicate `pi-ai` install splits API provider registry**: Installing both `pi-ai` and `pi-coding-agent` creates duplicate module instances, breaking the API provider registry due to module-level Maps. Shows underlying package management friction.
5.  **[#5363](https://github.com/earendil-works/pi/issues/5363) - Add amazon-bedrock-mantle provider**: Community members are requesting support for Bedrock Mantle models via an OpenAI-compatible endpoint, noting the current Converse API provider is incompatible. 
6.  **[#5673](https://github.com/earendil-works/pi/issues/5673) - Add "vllm-deepseek" thinking format**: As self-hosted corporate deployments grow, users need a specific `thinkingFormat` to properly trigger reasoning in DeepSeek models hidden behind vLLM proxies.
7.  **[#5592](https://github.com/earendil-works/pi/issues/5592) - Anthropic streams wait for EOF after message_stop**: Anthropic-compatible streams hang if the proxy keeps the connection open after the `message_stop` event, demonstrating fragility with third-party gateways.
8.  **[#5619](https://github.com/earendil-works/pi/issues/5619) - `pi update` triggers 'trust this folder dialog'**: A UI annoyance where running global update commands in a home directory accidentally triggers local workspace security scopes.
9.  **[#5577](https://github.com/earendil-works/pi/issues/5577) - Persona override for system prompt**: Users want to use Pi as a generalized agentic harness (for PM, QA, or security tasks) without losing core coding capabilities by allowing custom agent personas.
10. **[#5613](https://github.com/earendil-works/pi/issues/5633) - Kimi 2.6 Reasoning Error**: Exposes state-handling bugs with newer LLMs (like Kimi 2.6) where "out-of-cache" session continuations fail because `reasoning_content` is missing in tool calls.

### 4. Key PR Progress
1.  **[#5678](https://github.com/earendil-works/pi/pull/5678) - Add `excludeFromContext` for custom messages**: Merged support to flag custom messages as display-only, preventing them from triggering provider turns or consuming context compaction limits.
2.  **[#5660](https://github.com/earendil-works/pi/pull/5660) - Prevent uppercase headers treated as env vars**: Fixes a critical regex bug where static uppercase header values in `models.json` (like "BEARER") were mistakenly migrated into broken environment variable lookups.
3.  **[#5675](https://github.com/earendil-works/pi/pull/5675) - Stabilize compaction after reload**: Fixes a compaction crash (`prevCompaction is not defined`) that occurred when reloading sessions or delivering queued messages. 
4.  **[#5600](https://github.com/earendil-works/pi/pull/5600) - Honor Codex SSE header timeout setting**: Resolves timeout errors on slow connections by allowing the previously hardcoded 10-second Codex SSE header timeout to respect user configurations.
5.  **[#5674](https://github.com/earendil-works/pi/pull/5674) - Avoid project trust prompt for update**: Improves security boundaries so running `pi update` from the home directory no longer prompts an irrelevant workspace trust dialog.
6.  **[#5666](https://github.com/earendil-works/pi/pull/5666) - Preserve Anthropic refusal details**: Maps Anthropic's `stop_reason: "refusal"` to a readable `errorMessage`, giving developers better insight into why a model rejected a prompt.
7.  **[#5586](https://github.com/earendil-works/pi/pull/5586) - Bedrock `apiKey` as bearer-token fallback**: Expands Bedrock authentication to allow `models.json` API keys to act as bearer tokens for custom AI gateways fronting Bedrock.
8.  **[#5650](https://github.com/earendil-works/pi/pull/5650) - Remove stale OpenRouter Kimi assertion**: Fixes a CI-breaking issue by removing hardcoded assertions for free Kimi models that are no longer served by OpenRouter's live API.
9.  **[#5665](https://github.com/earendil-works/pi/pull/5665) - Handle `setActiveTools(undefined)`**: Fixes a `TypeError` thrown by the agent session when extensions attempt to restore the default toolset by passing `undefined`.
10. **[#5634](https://github.com/earendil-works/pi/pull/5634) - Normalize generated model costs**: Cleans up floating-point artifacts in pricing generation for OpenRouter and Vercel AI Gateways, ensuring accurate USD token calculations.

### 5. Feature Request Trends
*   **Self-Hosted & Proxy Compatibility**: There is a strong trend of users running Pi against local or corporate LLM gateways. Requests for vLLM proxies ([#5673](https://github.com/earendil-works/pi/issues/5673)), LiteLLM JSON schema fixes ([#5575](https://github.com/earendil-works/pi/issues/5575)), and Bedrock Mantle ([#5363](https://github.com/earendil-works/pi/issues/5363)) indicate a desire for plug-and-play compatibility with diverse routing layers.
*   **Agent Persona Generalization**: Users are shifting Pi from a strict coding assistant to a generalized agentic harness. Requests for persona overrides ([#5577](https://github.com/earendil-works/pi/issues/5577)) and native image generation ([#4095](https://github.com/earendil-works/pi/issues/4095)) highlight the demand for multi-disciplinary agent capabilities.
*   **Fine-grained Context Control**: As context windows fill up faster, developers want programmatic control over what gets persisted. The `excludeFromContext` flag ([#5654](https://github.com/earendil-works/pi/issues/5654)) and better local compaction handling are highly requested.

### 6. Developer Pain Points
*   **Silent Hangs & Network Timeouts**: A major frustration is the TUI freezing or hanging indefinitely without errors. Issues with OpenAI Codex ([#4945](https://github.com/earendil-works/pi/issues/4945)), missing terminal stream events ([#5526](https://github.com/earendil-works/pi/pull/5526)), and unauthenticated default providers ([#5571](https://github.com/earendil-works/pi/issues/5571)) show that Pi currently lacks robust fail-fast mechanisms for network drops.
*   **Workspace & Package Management Friction**: Developers experience significant friction with Pi's file and package boundaries. Duplicate dependency installations ([#5653](https://github.com/earendil-works/pi/issues/5653)), unhandled bash executions on macOS ([#5667](https://github.com/earendil-works/pi/issues/5667)), and aggressive folder-trust prompts ([#5619](https://github.com/earendil-works/pi/issues/5619)) break the development flow.
*   **Token State Loss in Next-Gen Models**: Newer reasoning models (like Kimi 2.6 and GPT-5.5) are exposing flaws in how Pi caches tool call states, resulting in `400 Bad Request` errors when continuing sessions ([#5633](https://github.com/earendil-works/pi/issues/5633), [#5569](https://github.com/earendil-works/pi/issues/5569)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-06-13.

### 1. Today's Highlights
Qwen Code officially rolled out **v0.18.0**, bringing new iterations to the CLI and core workflows. The community is actively addressing agent reliability, with multiple high-priority PRs targeting infinite tool call loops, context forgetting in long-range tasks, and OOM (Out of Memory) prevention. Additionally, the ecosystem is expanding with robust integrations for declarative agents, cross-platform computer use, and OpenAI-compatible API migrations.

### 2. Releases
*   **v0.18.0** ([Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.0))
    *   The latest stable release includes patching from v0.17.1 and various CLI fixes, such as skipping thought parts in copy outputs to clean up clipboard data. 

### 3. Hot Issues
*   **[Issue #3203](https://github.com/QwenLM/qwen-code/issues/3203): Qwen OAuth Free Tier Policy Adjustment**
    A highly debated issue (126 comments) regarding the proposed reduction of the daily free quota from 1,000 to 100 requests/day and the eventual phase-out of the free OAuth tier. The community is actively pushing back on these limitations.
*   **[Issue #5015](https://github.com/QwenLM/qwen-code/issues/5015): Qwen Code executes repeated identical tool calls**
    A critical P1 bug where the agent gets stuck in a loop executing the exact same tool call repeatedly. This severely degrades the UX and burns through API quotas.
*   **[Issue #5018](https://github.com/QwenLM/qwen-code/issues/5018): Long-context task attention loss & memory failures**
    Users report significant degradation in agent performance during extended coding sessions, resulting in massive forgetting and broken context chains. 
*   **[Issue #5055](https://github.com/QwenLM/qwen-code/issues/5055): Trojan false positive on Windows VS Code extension**
    A P1 security issue where Windows Defender flags the v0.18.0 VSIX (`qwen-code-vscode-ide-companion`) with a JS/ShaiWorm trojan warning, blocking enterprise deployment.
*   **[Issue #5052](https://github.com/QwenLM/qwen-code/issues/5052): CI PR Review "fake success"**
    The automated GitHub Actions PR review workflow silently fails but reports a green checkmark if the Qwen model disconnects mid-review, leaving PRs without actual human or AI feedback.
*   **[Issue #4994](https://github.com/QwenLM/qwen-code/issues/4994): /stats permanently double-counts sessions**
    Introduced recently, opening the `/stats` dashboard during the very first turn duplicates the session record permanently, skewing local telemetry and usage analytics.
*   **[Issue #4488](https://github.com/QwenLM/qwen-code/issues/4488): VS Code extension hidden in newer versions**
    The Qwen Code extension flashes and disappears in the left sidebar for VS Code versions 1.120.0+, though it works fine on 1.95.3.
*   **[Issue #4999](https://github.com/QwenLM/qwen-code/issues/4999): /goal iteration counter resets on resume**
    A logic bug allows the `/goal` safety cap (MAX_GOAL_ITERATIONS) to be bypassed, as the counter resets back to zero every time a user resumes a previous session.
*   **[Issue #5010](https://github.com/QwenLM/qwen-code/issues/5010): Windows execution error (`'printf' is not recognized`)**
    On Windows, `execSync` defaults to `cmd.exe`, which lacks the `printf` command used during recent Git status checks, breaking startup for CMD users.
*   **[Issue #4825](https://github.com/QwenLM/qwen-code/issues/4825): Script-friendly session management**
    A request for a `qwen sessions list` subcommand equipped with `--json`, `--tag`, and date filters to better support automated workflows and external scripts.

### 4. Key PR Progress
*   **[PR #5036](https://github.com/QwenLM/qwen-code/pull/5036): Hard-stop repeated identical tool calls**
    Directly addresses recent P1 bugs by implementing a guard that stops the agent's turn and clears queued calls after 10 consecutive identical tool requests.
*   **[PR #4914](https://github.com/QwenLM/qwen-code/pull/4914): Harden OOM prevention**
    Adds regression tests for compaction idempotency and explicit GC triggers to aggressively manage memory leaks and prevent node.js OOM crashes during long tasks.
*   **[PR #5058](https://github.com/QwenLM/qwen-code/pull/5058): Avoid stale tool schema recall**
    Improves auto-memory safety by preventing the model from incorrectly saving guessed MCP parameter schemas, field mappings, or failed tool-call formats into long-term memory.
*   **[PR #5034](https://github.com/QwenLM/qwen-code/pull/5034): Dynamic Workflows P3**
    Implements phase 3 of the Dynamic Workflows port, adding per-call `agent()` options (schema, agentType, model, worktree isolation) to align Qwen Code's capabilities with Claude Code 2.1.168.
*   **[PR #5051](https://github.com/QwenLM/qwen-code/pull/5051): Migrate Computer Use to `cua-driver`**
    Upgrades the built-in Computer Use tool to use a Rust-based background driver (`cua-driver-rs`) for native, focus-stealing-free OS automation over MCP.
*   **[PR #4989](https://github.com/QwenLM/qwen-code/pull/4989): Daily Autonomous Bug Autofix**
    Introduces a scheduled GitHub Action where Qwen Code autonomously selects a stale bug report, reproduces it, and submits a PR to fix it.
*   **[PR #5004](https://github.com/QwenLM/qwen-code/pull/5004): Durable cron jobs for `/loop`**
    Enables `/loop` tasks to survive restarts by saving them to a local `.qwen/scheduled_tasks.json` file, ensuring persistent automations (e.g., "check my PRs hourly").
*   **[PR #4929](https://github.com/QwenLM/qwen-code/pull/4929): OSC 52 clipboard fallback**
    Implements an escape-sequence fallback for clipboard operations (`/copy`, vim yank), allowing seamless copy-pasting in headless SSH environments lacking X11/Wayland.
*   **[PR #5057](https://github.com/QwenLM/qwen-code/pull/5057): Persist file history snapshots**
    Fixes an issue with the `/rewind` feature by ensuring file-history snapshots are durably recorded immediately after tracked edits, preventing data loss on sudden crashes.
*   **[PR #5053](https://github.com/QwenLM/qwen-code/pull/5053): Fix CI PR review silent failures**
    Updates the CI pipeline to fail explicitly if the `review-pr` job aborts mid-stream, ensuring fallback comments are triggered instead of faking success.

### 5. Feature Request Trends
*   **Agent Autonomy & Reliability:** Heavy demand for more robust background execution. Users want declarative agent definitions ([#4821](https://github.com/QwenLM/qwen-code/issues/4821)), better permission queuing for subagents ([#4928](https://github.com/QwenLM/qwen-code/issues/4928)), and durable task scheduling.
*   **Flexible Model Routing & Migration:** Users are utilizing multiple backends. There are strong requests for dynamic multi-model support for OpenAI-compatible endpoints ([#1206](https://github.com/QwenLM/qwen-code/issues/1206)), shared `baseUrl` configurations ([#4813](https://github.com/QwenLM/qwen-code/issues/4813)), and one-click config migration from Claude Code/Desktop ([#4845](https://github.com/QwenLM/qwen-code/issues/4845)).
*   **Context & Memory Management:** As tasks scale, developers need better control over the context window. Trends point towards non-AI assisted rapid context compression ([#4264](https://github.com/QwenLM/qwen-code/issues/4264)) and fixes for long-context attention degradation.

### 6. Developer Pain Points
*   **Agent Hallucinations & Infinite Loops:** The most glaring pain point is the model getting trapped in repetitive, identical tool calls ([#5015](https://github.com/QwenLM/qwen-code/issues/5015), [#5019](https://github.com/QwenLM/qwen-code/issues/5019)), which terminates sessions via API errors and frustrates developers.
*   **Terminal & UI Quirks:** VS Code integration breaks on newer builds ([#4488](https://github.com/QwenLM/qwen-code/issues/4488)), and terminal users experience severe SGR mouse sequence leaks, viewport sizing bugs, and unhandled keybindings (Ctrl+U clearing issues).
*   **Platform Compatibility Gaps:** Windows users continue to face native execution blockers (like the missing `printf` command in `cmd.exe`), highlighting a need for better cross-platform shell abstraction.
*   **Cost & Quota Anxiety:** With the looming reduction of the OAuth free tier ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)), developers are increasingly worried about tool limits and burning quotas on looping agent bugs.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek TUI (CodeWhale) for June 13, 2026.

### 1. Today's Highlights
The DeepSeek TUI (CodeWhale) community is currently focused on enhancing **runtime reliability** and expanding **multilingual support**. A standout merged PR introduces an automatic provider fallback chain to prevent workflow interruptions during API rate limits or timeouts. Meanwhile, the UI/UX experience is seeing massive overhauls, led by a comprehensive i18n integration phase and critical fixes for terminal rendering bugs that have long frustrated Windows users.

### 2. Releases
*No new official releases were published in the last 24 hours. The community is actively testing fixes targeting the v0.8.59+ branches.*

### 3. Hot Issues
Here are the 10 most noteworthy issues based on community engagement and technical impact:

*   **#1120 [bug] Cache hit rate inconsistencies** ([Link](https://github.com/Hmbown/CodeWhale/issues/1120))
    *   **Why it matters:** High cache miss rates directly impact cost and latency for developers. The community is actively investigating whether recent updates introduced false positives or underlying degradation in context caching.
*   **#774 [bug] TUI stuck at "Working" state indefinitely** ([Link](https://github.com/Hmbown/CodeWhale/issues/774))
    *   **Why it matters:** A fundamental blocker where the TUI hangs after sending a message. It highlights a critical failure in API handshake or streaming response handling on certain global npm setups.
*   **#765 [bug] Windows global npm install fails to trigger conversations** ([Link](https://github.com/Hmbown/CodeWhale/issues/765))
    *   **Why it matters:** Windows compatibility remains a sore spot. This issue details how standard `npm install -g` executions result in a frozen UI, severely impacting first-time developer onboarding.
*   **#3149 [bug] `read_file` panics on specific PDFs** ([Link](https://github.com/Hmbown/CodeWhale/issues/3149))
    *   **Why it matters:** Ungraceful crashes. Encountering non-Identity-H CMap CID fonts causes a hard panic instead of a caught error, killing the agent's execution loop without user feedback. *(Note: A fix was rapidly merged in PR #3176).*
*   **#861 [bug] "Thinking collapse" during reasoning** ([Link](https://github.com/Hmbown/CodeWhale/issues/861))
    *   **Why it matters:** Chain-of-thought transparency is crucial for debugging. Users report that streaming reasoning blocks either freeze indefinitely, silently truncate, or disappear entirely during generation.
*   **#1812 [bug] Intermittent Windows UI freezes** ([Link](https://github.com/Hmbown/CodeWhale/issues/1812))
    *   **Why it matters:** Deep dive into `crossterm` polling issues on Windows 11. The TUI event loop becomes effectively starved, locking up keyboard and screen inputs while the process remains alive in the background.
*   **#1722 [enhancement] TUI starvation at high context capacity** ([Link](https://github.com/Hmbown/CodeWhale/issues/1722))
    *   **Why it matters:** Highlights a critical architectural bottleneck where hitting ~99.6% context capacity causes the entire UI to lock up. Requests a configurable auto-compact threshold (Ctrl+L).
*   **#1062 [bug] Broken cross-session memory checkpointing** ([Link](https://github.com/Hmbown/CodeWhale/issues/1062))
    *   **Why it matters:** State recovery is broken. The engine fails to persist memory records on session termination unless explicitly manually toggled, breaking continuous development workflows.
*   **#1679 [bug] SSE multi-agent parallel timeouts on Windows** ([Link](https://github.com/Hmbown/CodeWhale/issues/1679))
    *   **Why it matters:** Multi-agent orchestration features are failing under Windows 11, timing out at 45s and causing cascading UI visual glitches before degrading to solo serial execution.
*   **#2323 [enhancement] Lack of IME (Input Method Editor) support** ([Link](https://github.com/Hmbown/CodeWhale/issues/2323))
    *   **Why it matters:** A major usability blocker for international users. Typing in Chinese causes UI overlaps and improperly routes raw pinyin letters into model input fields instead of the IME composition.

### 4. Key PR Progress
The development team is making strong strides in architecture cleanup and feature expansion:

*   **PR #2773: Automatic Provider Fallback Chain** ([Link](https://github.com/Hmbown/CodeWhale/pull/2773))
    Adds resilience to the model lab. If the active provider returns a retryable error (429, 5xx, timeout), the engine automatically switches to a pre-configured fallback provider.
*   **PR #2239: i18n Phase 1-4b Wiring** ([Link](https://github.com/Hmbown/CodeWhale/pull/2239))
    A massive refactor that wires message ID translations directly into the UI layer across 47 files, superseding older patches and fixing 109 upstream compilation errors.
*   **PR #3013: Legacy Binary Migration Detection** ([Link](https://github.com/Hmbown/CodeWhale/pull/3013))
    Improves developer onboarding by detecting legacy `deepseek` / `deepseek-tui` binaries during self-updates and printing exact migration instructions to the new `codewhale` executable.
*   **PR #3051: Voice-to-Text Input (`/voice`)** ([Link](https://github.com/Hmbown/CodeWhale/pull/3051))
    Introduces speech recording, AI transcription, and composer insertion via slash commands, cleverly reusing the active provider's existing chat completion APIs.
*   **PR #3005: Data-Driven Provider Registry** ([Link](https://github.com/Hmbown/CodeWhale/pull/3005))
    Eliminates ~100 manually maintained match arms by extracting provider IDs, aliases, and defaults into a single static `PROVIDER_REGISTRY` backed by a Rust trait.
*   **PR #3176: Hardened PDF and Terminal Stability** ([Link](https://github.com/Hmbown/CodeWhale/pull/3176)) *(Closed/Merged)*
    Directly addresses Issue #3149 by catching `pdf-extract` panics for non-standard fonts, alongside preserving critical Windows env vars for MSBuild FileTracker.
*   **PR #2808: Runtime API Session Endpoints** ([Link](https://github.com/Hmbown/CodeWhale/pull/2808))
    Introduces new `/v1/sessions` endpoints to allow GUI clients to save, undo, retry, and snapshot sessions by hooking directly into the TUI's existing logic layer.
*   **PR #3010: Prompt Token Optimization** ([Link](https://github.com/Hmbown/CodeWhale/pull/3010))
    Removes the default "Calm" personality overlay from the core prompt path, shaving ~1,376 characters (222 tokens) off static prompt overhead.
*   **PR #2851: Command-Strategy Refactor** ([Link](https://github.com/Hmbown/CodeWhale/pull/2851))
    Architectural cleanup that restructures large command implementation files, moving command behaviors into focused, localized groups rather than treating them as shared monoliths.
*   **PR #3184: `pdf-extract` Dependency Bump** ([Link](https://github.com/Hmbown/CodeWhale/pull/3184))
    Bumps the underlying PDF parsing library from 0.7 to 0.10, laying the groundwork for better document ingestion reliability.

### 5. Feature Request Trends
*   **Robust State Persistence & Recovery:** Users are heavily requesting reliable cross-session memory and checkpoint systems, specifically asking for auto-compaction triggers (like `Ctrl+L`) before the context window hits 100%.
*   **Advanced Orchestration & Input Modalities:** There is a strong desire to push beyond text-based CLI, evidenced by community requests for multi-agent parallel processing, voice input, and complex UI state management.
*   **Seamless Internationalization (i18n):** Translating standard CLI outputs and slash commands is in high demand, alongside the critical need for proper IME integration to support CJK (Chinese, Japanese, Korean) inputs natively.

### 6. Developer Pain Points
*   **Windows Ecosystem Fragility:** The vast majority of UI-related bug reports stem from Windows environments. Developers report frequent UI freezing, event loop starvation, scroll glitches, and terminal rendering bugs (borders, overlapping text).
*   **Streaming Latency & Timeouts:** 45-second SSE timeouts are aggressively disrupting workflows, particularly during complex multi-agent runs or heavy-context operations, leading to a degraded "serial-only" fallback mode.
*   **Opaque Error Handling:** Users are frustrated by silent failures—such as clipboard copy failures on Wayland or UI freezes when reaching context limits—where the TUI gives no visible error or recovery prompt.

</details>