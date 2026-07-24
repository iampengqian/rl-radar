# AI CLI Tools Community Digest 2026-07-25

> Generated: 2026-07-24 22:20 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 25, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem is rapidly maturing, shifting focus from basic code generation to complex, multi-agent orchestration and deep IDE integration. Major industry players like Anthropic, OpenAI, Google, and GitHub are heavily iterating on context management, sandbox security, and enterprise readiness, exemplified by the swift, near-simultaneous integration of Claude Opus 5 across multiple platforms. Meanwhile, a vibrant open-source and regional ecosystem—including Qwen, Pi, OpenCode, and CodeWhale—is driving fierce innovation in local LLM support, cross-device mobility, and specialized agentic frameworks. However, as context windows expand to 1M tokens, developers across the board are encountering shared growing pains related to context degradation, subagent reliability, and terminal UI instability.

### 2. Activity Comparison
*Note: The following data reflects community and maintainer activity specifically reported in the July 25 digests.*

| Tool | Maintainer Releases | Noteworthy Issues Highlighted | Active PRs Highlighted | Current Focus / Status |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | v2.1.219 | 10 | 2 | Opus 5 rollouts, enterprise IDE support, sandboxing. |
| **OpenAI Codex** | 3 Alpha builds (v0.146.0) | 10 | 10 | Backend MCP overhaul, enterprise plans, Windows stability. |
| **Gemini CLI** | None | 10 | 10 | Reliability/SSR pipelines, AST-aware tooling, security fixes. |
| **GitHub Copilot CLI** | v1.0.75 | 10 | 0 | Opus 5 integration, resolving plan-mode regressions. |
| **Kimi Code CLI** | None | 6 | 3 | Corporate proxy support, remote session continuity. |
| **OpenCode** | v1.18.5 | 10 | 10 | UI/UX stability, resolving subagent deadlocks, local LLM ergonomics. |
| **Pi (Pi-Mono)** | v0.82.0 | 10 | 10 | Constrained tool sampling, model hot-swapping, local llama.cpp support. |
| **Qwen Code** | v0.21.0 | 10 | 10 | SWE-bench testing, background process orchestration, Web Shell UX. |
| **CodeWhale (DeepSeek)**| v0.9.1 (Rebrand) | 10 | 10 | "Fleet/Workflow" multi-agent architecture, global localization. |

### 3. Shared Feature Directions
*   **Subagent Orchestration & Reliability:** Almost all tools are struggling with or actively building features for multi-agent workflows. *Claude Code*, *Gemini CLI*, *OpenCode*, and *Qwen Code* all report critical bugs where subagents hang silently, spawn against rules, or false-report successes. *CodeWhale* and *Codex* are actively building structured orchestration layers (e.g., Fleet/Workflow models and MultiAgentV2).
*   **Advanced Context & Memory Management:** As tasks get longer, maintaining context is a top priority. *Claude Code*, *Copilot CLI*, and *Pi* report aggressive auto-compaction bugs resulting in lost instructions, truncated summaries, or exceeding API payload limits (5MB+ CAPI limits). *Gemini CLI* and *Qwen Code* are exploring AST-aware code reads to reduce token bloat.
*   **Enterprise Security, Hooks, & Proxies:** There is a strong push for safer, automated execution. *Claude Code* and *Codex* are heavily expanding lifecycle hooks and MCP controls. Meanwhile, *Kimi Code*, *OpenCode*, and *Pi* share a massive pain point around corporate proxies, SSL strictness, and enterprise authentication failures (Zscaler, Copilot Enterprise, Bedrock). 
*   **Rapid Frontier Model Integration:** The integration of new models (Claude Opus 5, DeepSeek V4, Qwen 3.8) is happening within days of their release, though this introduces state-management and authentication friction, particularly in tools like *Pi* and *Copilot CLI*.

### 4. Differentiation Analysis
*   **Enterprise vs. Consumer/Local Focus:** *Claude Code* and *GitHub Copilot CLI* are heavily focused on native IDE parity (Visual Studio 2026, Zed, VS Code) and large-enterprise features. Conversely, *Pi*, *OpenCode*, and *Qwen Code* are differentiating by prioritizing local LLM ergonomics (e.g., Ollama, llama.cpp) and cross-provider routing without strict vendor lock-in.
*   **Technical Architecture Approaches:** *CodeWhale* (formerly DeepSeek TUI) is taking a highly structured approach to AI execution, pioneering a formal "Fleet, Workflow, Lane, Runtime" vocabulary to secure autonomous coding. *OpenAI Codex* is doubling down on Rust CLI backends to handle complex MCP and plugin pagination. *Gemini CLI* is unique in using "LLM-as-a-Judge" frameworks internally to evaluate its own issue triage agent.
*   **Market & Regional Strategies:** While US tools dominate enterprise integrations, *Kimi Code* and *CodeWhale* are aggressively targeting cross-device mobility (remote control via mobile/web) and global localization matrices (Devanagari, Southeast Asian languages).

### 5. Community Momentum & Maturity
*   **Highest Iteration Velocity:** *OpenAI Codex* (3 Rust alpha releases, 10 active PRs) and *Qwen Code* (active SWE-bench POC runs, 10 PRs) are pushing code at a remarkable pace, focusing heavily on backend stability and benchmark performance.
*   **Highest Community Engagement Volume:** *Claude Code* and *GitHub Copilot CLI* are fielding massive enterprise feedback loops, with highly upvoted issues regarding native IDE integration (Visual Studio 2026) and critical plan-mode regressions.
*   **Maturing Open-Source Ecosystem:** *Gemini CLI*, *Pi*, and *OpenCode* show high maturity, with communities actively contributing complex refactors (e.g., state-machine rollbacks, bi-directional pagination, constrained JSON schema sampling) rather than just surface-level bug reports.

### 6. Trend Signals
*   **Context Blindness is the New Bottleneck:** Expanding context windows to 1M tokens has not solved long-session degradation; it has merely delayed it. The industry is shifting towards deterministic context recovery, AST-aware tooling, and strict prompt layering (as seen in *Qwen* and *Gemini*) rather than relying purely on the LLM's raw attention span.
*   **The Shift to "Headless" & Background Agents:** Developers no longer want just a terminal assistant; they want reliable background workers. The push for `--auto` runs, headless service engines (*Qwen*), and remote session handoffs (*Kimi Code*) indicates that CLI tools are evolving into the primary computational engines for continuous, asynchronous software engineering. 
*   **Standardization of Agent Permissions:** The era of "YOLO mode" (allowing AI unrestricted terminal access) is ending. There is a unified demand for typed execution policies, dry-run API commands, and strict sandbox allowlists across both enterprise and open-source tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical community highlights report for the Claude Code Skills ecosystem based on recent activity.

### 1. Top Skills Ranking
While comment counts are obfuscated in the raw data, cross-referencing the top PRs with heavily discussed community Issues reveals the most active and impactful Skills and tooling updates:

*   **Skill-Creator & Eval Tooling Fixes** ([PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1323](https://github.com/anthropics/skills/pull/1323))
    *   **Functionality:** Fixes for `run_eval.py` and `run_loop.py` to accurately detect skill triggers and prevent 0% recall loops. 
    *   **Discussion Highlights:** This is the most critical active discussion, directly resolving a major workflow breakdown reported in [Issue #556](https://github.com/anthropics/skills/issues/556) and [Issue #1169](https://github.com/anthropics/skills/issues/1169) where description optimization completely failed.
    *   **Status:** Open
*   **Self-Audit & Reasoning Gate** ([PR #1367](https://github.com/anthropics/skills/pull/1367))
    *   **Functionality:** A universal meta-skill that mechanically verifies claimed output files and executes a four-dimension reasoning audit before delivery.
    *   **Discussion Highlights:** Tackles AI reliability and hallucination prevention, expanding on the pipeline proposed in [Issue #1385](https://github.com/anthropics/skills/issues/1385).
    *   **Status:** Open
*   **Document-Typography Quality Control** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Automatically prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents.
    *   **Discussion Highlights:** Addresses a highly requested "finish work" capability for document generation that users rarely prompt for explicitly.
    *   **Status:** Open
*   **OpenDocument (ODT) Skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
    *   **Functionality:** Enables reading, creating, and converting OpenDocument Format files (.odt, .ods) and parsing them to HTML.
    *   **Discussion Highlights:** Fills a major gap for open-source and ISO-standard enterprise workflows.
    *   **Status:** Open
*   **Testing-Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723))
    *   **Functionality:** A comprehensive guide for full-stack testing (Testing Trophy model, React components, edge cases).
    *   **Discussion Highlights:** A foundational developer skill aimed at standardizing how Claude writes and evaluates code tests.
    *   **Status:** Open
*   **Color-Expert Skill** ([PR #1302](https://github.com/anthropics/skills/pull/1302))
    *   **Functionality:** Deep color expertise for UI/UX tasks, covering naming systems, color spaces (OKLCH, OKLAB), and contrast ratios.
    *   **Discussion Highlights:** Recently updated (late July 2026), showing active iteration and high demand for design-specific capabilities.
    *   **Status:** Open

### 2. Community Demand Trends
By analyzing the most discussed Issues, the community is clearly pushing for capabilities in three main directions:

*   **Security, Trust, and Governance:** Users want strict boundaries. [Issue #492](https://github.com/anthropics/skills/issues/492) highlights the danger of community skills masquerading under the `anthropic/` namespace, showing a massive demand for cryptographic verification and trust scoring (also reflected in the proposed [Agent-Governance Skill](https://github.com/anthropics/skills/issues/412)).
*   **Enterprise and Team Workflows:** There is high anticipation for shared skill libraries across organizations. [Issue #228](https://github.com/anthropics/skills/issues/228) requests direct org-wide skill sharing, while [Issue #1175](https://github.com/anthropics/skills/issues/1175) discusses handling SharePoint Online permissions directly within SKILL.md files.
*   **MCP & Cross-Platform Interoperability:** The community wants Skills to translate seamlessly into APIs. [Issue #16](https://github.com/anthropics/skills/issues/16) proposes exposing Skills as Model Context Protocol (MCP) servers, and [Issue #29](https://github.com/anthropics/skills/issues/29) shows heavy demand for native AWS Bedrock compatibility.

### 3. High-Potential Pending Skills
These open PRs address acute, highly-upvoted pain points and have a strong likelihood of merging soon:

*   **`skill-creator` Cross-Platform Fixes:** [PR #1099](https://github.com/anthropics/skills/pull/1099) and [PR #1050](https://github.com/anthropics/skills/pull/1050) aim to fix broken `subprocess.Popen` calls, Windows `PATHEXT` issues, and `cp1252` encoding bugs, directly resolving the blockers in [Issue #1061](https://github.com/anthropics/skills/issues/1061).
*   **DOCX Bookmark Collision Fix:** [PR #541](https://github.com/anthropics/skills/pull/541) solves document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks (fixing shared OOXML `w:id` spaces).
*   **YAML Validation Edge Cases:** [PR #539](https://github.com/anthropics/skills/pull/539) and [PR #362](https://github.com/anthropics/skills/pull/362) introduce robust pre-parse checks to prevent silent YAML truncation and Rust panics on multi-byte (UTF-8) characters.
*   **Repository Contribution Guidelines:** [PR #509](https://github.com/anthropics/skills/pull/509) adds a `CONTRIBUTING.md`, addressing the repo's poor community health score and setting standards for external PRs.

### 4. Skills Ecosystem Insight
At the Skills level, the community's most concentrated demand is for **reliable core infrastructure (fixing the skill-creator/eval loops and cross-platform compatibility) and robust enterprise trust boundaries (verifiable namespaces and org-wide sharing).**

---

Here is the Claude Code community digest for July 25, 2026.

### 1. Today's Highlights
Claude Code rolled out version v2.1.219 today, officially introducing **Claude Opus 5** as the new default Opus model, featuring a massive 1M context window and a new fast mode. Alongside this major model upgrade, the release includes stricter sandbox networking and new event-driven hooks. However, the community has been quick to surface edge cases in the new release, with developers actively reporting issues ranging from aggressive system-prompt overrides to context instruction degradation in long sessions.

### 2. Releases
**v2.1.219**
- **Claude Opus 5 Integration:** Added `claude-opus-5` (now the default Opus model), boasting a 1M token context window and fast mode pricing at $10/$50 per million tokens.
- **Sandbox Security:** Introduced the `sandbox.network.strictAllowlist` setting, which automatically denies network requests to non-allowlisted hosts for sandboxed commands without prompting the user.
- **New Hooks:** Added a `DirectoryAdded` hook that triggers immediately after a new directory is introduced to the workspace.

### 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion:

- **[#80988](https://github.com/anthropics/claude-code/issues/80988) [BUG] Opus 5 `heron_brook` prompt overrides delegation:** The newest issue related to the v2.1.219 update. Users report that a newly injected system prompt section silently overrides user-configured agent delegation policies specifically for Opus 5, with no opt-out mechanism.
- **[#80873](https://github.com/anthropics/claude-code/issues/80873) Instruction adherence decays mid-session:** A highly relatable frustration where `CLAUDE.md` rules are strictly followed initially but "fade" or are ignored after 5–10 turns, even when the rules are still technically within the context window.
- **[#15942](https://github.com/anthropics/claude-code/issues/15942) Add support for Visual Studio 2026 Integration:** A massive feature request (409 upvotes, 144 comments) highlighting the strong enterprise demand for native Claude Code integration within Microsoft's Visual Studio 2026 IDE.
- **[#80716](https://github.com/anthropics/claude-code/issues/80716) Auto-mode classifier breaks in plan mode:** A regression where the auto-mode classifier repeatedly falls back to manual approval during plan mode, significantly slowing down automated workflows.
- **[#65844](https://github.com/anthropics/claude-code/issues/65844) Fullscreen TUI breaks macOS mouse copy:** A UI bug where `Cmd+C` is intercepted by Claude Code's internal selection mechanism in fullscreen TUI mode, breaking standard native macOS clipboard behaviors.
- **[#78313](https://github.com/anthropics/claude-code/issues/78313) Subagents hang on first tool call:** An intermittent but critical issue where spawned subagents emit opening text but hang indefinitely on their first tool execution, leaving the parent agent waiting forever.
- **[#58750](https://github.com/anthropics/claude-code/issues/58750) Cowork Desktop `AskUserQuestion` UI deadlocks:** On macOS, the desktop app shows a pending notification badge but fails to render the actual question UI. Quitting the app silently dismisses the agent's request.
- **[#80989](https://github.com/anthropics/claude-code/issues/80989) Opus 5 context artificially capped:** Despite being on the same Max 5x tier, one user's machine is being capped at 400K context for Opus 5, while their secondary machine correctly receives the advertised 1M limit.
- **[#76727](https://github.com/anthropics/claude-code/issues/76727) Cross-session coordination for independently-launched sessions:** Heavy users running parallel Claude Code instances on a single repo are requesting a first-party coordination story, as current `PreToolUse` hooks leave silent gaps in race conditions.
- **[#51222](https://github.com/anthropics/claude-code/issues/51222) Weekly usage reset time displayed incorrectly:** Though recently closed, this bug report highlights ongoing UI confusion among Pro plan users regarding exact quota reset times.

### 4. Key PR Progress
- **[#80883](https://github.com/anthropics/claude-code/pull/80883) feat: Add context-safety-net plugin:** A community-submitted PR aiming to solve silent context degradation during auto-compaction. It introduces a deterministic way to recover critical "anchor" files that agents frequently lose in long sessions.
- **[#41611](https://github.com/anthropics/claude-code/pull/41611) Add the missing source to claude code:** An open, older PR focused on patching missing source mappings in the codebase.

*(Note: Only 2 active PRs were updated in the data window. The community is currently highly focused on plugin ecosystems and hook robustness to patch UI/UX limitations natively).*

### 5. Feature Request Trends
Based on recent issue tracking, the community is pushing heavily for:
- **Enhanced Enterprise IDE Support:** Overwhelming demand for native extensions in legacy/enterprise environments, specifically Visual Studio 2026.
- **Advanced Session & Agent Management:** Developers want better orchestration tools, specifically first-party primitives for cross-session coordination, deterministic handling of parallel subagents, and customizable keyboard-first navigation (disabling mouse inputs).
- **Stricter Sandbox Controls:** Requests for deeper OS-level sandboxing on Windows (like Microsoft MXC) and more programmatic control over network allowlists.
- **Event-Driven Hook Expansions:** A desire for more granular lifecycle hooks (like `DirectoryAdded`) to build robust local automations and CI/CD integrations.

### 6. Developer Pain Points
- **Context & Instruction Degradation:** The most frustrating developer experience right now is "context blindness." Whether through auto-compaction losing track of files, or `CLAUDE.md` instructions being silently ignored mid-session, maintaining long-running agent accuracy is a top pain point.
- **Model Regression Friction:** The Opus 5 rollout has introduced operational quirks. Developers are frustrated by undocumented system prompts (`heron_brook`) that override their finely-tuned configurations, as well as inconsistent tier-based context window limits.
- **Subagent Reliability:** Subagents failing silently, hanging on tool calls, or bypassing custom approval policies (CVP) are causing significant bottlenecks in complex, multi-agent task execution.
- **UI/UX Friction in Desktop/TUI:** Minor UI bugs are compounding into major workflow interruptions. Pinned messages hiding outputs in VS Code, broken native clipboard shortcuts (`Cmd+C`) on macOS, and frozen UI elements in the Claude Desktop app are degrading the overall developer experience.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 25, 2026.

### 1. Today's Highlights
Codex rolled out three new Rust CLI alpha builds (v0.146.0) alongside a massive backend overhaul focused on stabilizing Model Context Protocol (MCP) refreshes, thread forking, and plugin management. However, the Windows desktop ecosystem is experiencing severe stability issues, with multiple high-traffic reports indicating that adding secondary project folders causes fatal app crashes and infinite Git process spawning.

### 2. Releases
*   **rust-v0.146.0-alpha.7**, **alpha.6**, and **alpha.3.1**
    *   The CLI continues its rapid weekly iteration. These alpha releases precede the stable v0.146.0 rollout and focus on core runtime stability, context compaction, and CLI command handling. ([Releases](https://github.com/openai/codex/releases))

### 3. Hot Issues
1.  **[Pro] Fast Rate Limit Depletion on 5.5 ([#19585](https://github.com/openai/codex/issues/19585))**
    *   *Why it matters:* Pro users report weekly quotas draining unusually fast, heavily exacerbated by unstable context compaction. This directly impacts core developer productivity.
2.  **[Windows] App Crashes on Adding Second Folder ([#35057](https://github.com/openai/codex/issues/35057))**
    *   *Why it matters:* A critical blocker for multi-root workspaces. Adding a second directory renders the Desktop app permanently unstartable ("Oops, an error has occurred").
3.  **[Windows] High CPU from Git Processes ([#22085](https://github.com/openai/codex/issues/22085))**
    *   *Why it matters:* A closed but highly active issue (24 👍). Users experience sustained CPU overload because Codex repeatedly spawns `git.exe` processes in the background during active sessions.
4.  **Model Picker Filters Out Custom Models ([#19694](https://github.com/openai/codex/issues/19694))**
    *   *Why it matters:* The desktop app UI is unexpectedly filtering out valid models returned by `model_catalog_json`, restricting developers from using fine-tuned or specific custom configurations.
5.  **[Windows] 12-13 Git Processes Per Second ([#33450](https://github.com/openai/codex/issues/33450))**
    *   *Why it matters:* A severe performance regression where the app enters a runaway loop spawning Git processes and creating invalid, empty `.git` directories.
6.  **Codex App Updates Too Frequently ([#30122](https://github.com/openai/codex/issues/30122))**
    *   *Why it matters:* Corporate and enterprise users report forced app updates almost every few days, disrupting continuous development workflows.
7.  **False Positive Cybersecurity Filters ([#33810](https://github.com/openai/codex/issues/33810))**
    *   *Why it matters:* Overly aggressive safety checks are blocking standard security testing, DevSecOps, and code auditing tasks, limiting the tool's utility for security engineers.
8.  **MultiAgentV2 Cross-Provider Failure ([#34833](https://github.com/openai/codex/issues/34833))**
    *   *Why it matters:* Complex subagent routing fails when a non-OpenAI custom provider child agent receives encrypted task assignments it cannot decrypt or consume.
9.  **Codex Desktop Sidebar Loses Chat History ([#23999](https://github.com/openai/codex/issues/23999))**
    *   *Why it matters:* UI reliability bug where the sidebar randomly hides previous chats and projects, forcing users to rely entirely on the search function to locate ongoing work.
10. **Codex CLI Will Not Enter Plan Mode ([#35237](https://github.com/openai/codex/issues/35237))**
    *   *Why it matters:* A critical regression preventing users from utilizing the highly anticipated "Plan Mode" for outlining architectural changes before execution.

### 4. Key PR Progress
1.  **Support Ephemeral Forks of Paginated Threads ([#35251](https://github.com/openai/codex/pull/35251))**
    *   Allows `thread/fork` to create ephemeral forks from paginated history, enabling users to branch off previous conversations without creating heavy rollout patterns.
2.  **Encapsulate MCP Refresh Coordination ([#35164](https://github.com/openai/codex/pull/35164))**
    *   Adds an `McpRefresh` module to serialize runtime refreshes, preventing race conditions and handling cancellation recovery safely during active sessions.
3.  **Route MCP Auth Discovery Through Runtime HTTP Clients ([#35239](https://github.com/openai/codex/pull/35239))**
    *   Fixes MCP authentication reliability by ensuring OAuth discovery uses the same proxy routing as the MCP transport layer.
4.  **Enable Resource Reads for Explicit Executor Skills ([#35198](https://github.com/openai/codex/pull/35198))**
    *   Fixes an issue where explicitly selected skills lacked the package identifiers needed to read referenced resources.
5.  **Preserve Output from Hooks that Exit Before Reading Stdin ([#35194](https://github.com/openai/codex/pull/35194))**
    *   Improves custom hook resilience by gracefully ignoring broken-pipe errors if a hook successfully exits before consuming all standard input data.
6.  **Compact Host Skill Paths Under Metadata Pressure ([#35172](https://github.com/openai/codex/pull/35172))**
    *   Optimizes token usage in the skill catalog by replacing long absolute paths with short aliases (e.g., `r0`, `r1`), leaving more context window for skill descriptions.
7.  **Reconnect MCP Servers on Explicit Refresh ([#35151](https://github.com/openai/codex/pull/35151))**
    *   Ensures explicit `RefreshMcpServers` operations force a complete teardown and rebuild of existing server connections rather than just reusing stale ones.
8.  **Support the `ent26` Enterprise Plan ([#35238](https://github.com/openai/codex/pull/35238))**
    *   Updates authentication and backend rate-limit schemas to officially recognize the new enterprise `ent26` workspace plan.
9.  **Expose Workspace Plugin Publish Capability ([#35254](https://github.com/openai/codex/pull/35254))**
    *   Adds nullable metadata to allow clients to dynamically determine if a user possesses the required permissions to publish plugins to a shared workspace.
10. **Refresh Managed MCP Requirements for Active Threads ([#35213](https://github.com/openai/codex/pull/35213))**
    *   Ensures that plugin requirements and server constraints are accurately synced to currently active threads during runtime config reloads.

### 5. Feature Request Trends
*   **Local Conversation Export:** Strong demand for a native feature to export full conversation logs to local files (JSON, TXT) directly from the Desktop app, rather than relying solely on "Copy as Markdown" ([#26740](https://github.com/openai/codex/issues/26740)).
*   **Granular Hook and Plugin Configurations:** Developers want more robust control over background agents and custom hooks, including better stdin handling and safe execution contexts for local scripts.
*   **Advanced Subagent Routing:** Better support for cross-provider routing within the MultiAgentV2 framework, allowing seamless integration of OpenAI parent models with open-source or local custom-provider child models.

### 6. Developer Pain Points
*   **Windows Desktop Stability:** The Windows client is currently the source of massive frustration. Critical bugs involving infinite Git process spawning ([#33450](https://github.com/openai/codex/issues/33450)) and fatal crashes upon adding secondary project folders ([#35057](https://github.com/openai/codex/issues/35057)) are severely breaking local workflows.
*   **Opaque Safety Filters:** Codex’s cybersecurity safety filters are triggering false positives on standard penetration testing and code auditing requests, often executing the full token-consuming run before blocking the output entirely ([#34257](https://github.com/openai/codex/issues/34257)).
*   **Token Drain & Context Compaction:** Pro and Max users are increasingly frustrated by "invisible" token drain, where unstable background context compaction eats into strict weekly usage limits before the primary task is even resolved ([#19585](https://github.com/openai/codex/issues/19585)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 25, 2026.

### 1. Today's Highlights
The Gemini CLI ecosystem is heavily focused on fortifying agent reliability and security this week. Key progress includes major architectural updates to the automated SSR Code Generation Pipeline (Antigravity) and the introduction of an "LLM-as-a-Judge" evaluation framework for the Caretaker triage agent. Meanwhile, the community is actively drawing attention to lingering agentic loop flaws, specifically subagents hanging or misreporting task successes.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
*   **[Subagent recovery hides GOAL interruption](https://github.com/google-gemini/gemini-cli/issues/22323)**: A P1 bug where the `codebase_investigator` falsely reports success after hitting `MAX_TURNS`, making it incredibly difficult for developers to realize their codebase analysis was truncated.
*   **[Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)**: Users are frustrated by the generalist subagent hanging forever on simple tasks like folder creation. The current community workaround is explicitly instructing the CLI not to defer to subagents.
*   **[Infinite auth loop on Windows](https://github.com/google-gemini/gemini-cli/issues/28341)**: A critical auth block preventing Windows users from utilizing the CLI. Re-authentication loops are persisting across multiple version downgrades.
*   **[AST-aware file reads and codebase mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**: An epic exploring AST-aware tooling. This is highly requested to reduce token noise, prevent misaligned reads, and help the agent navigate structural code relationships more efficiently.
*   **[Gemini CLI gets stuck awaiting input](https://github.com/google-gemini/gemini-cli/issues/25166)**: The agent repeatedly hangs on simple shell commands, falsely believing the command is still awaiting user input after execution completes.
*   **[Subagents running without permission](https://github.com/google-gemini/gemini-cli/issues/22093)**: A security and control concern where subagents initiate even when explicitly disabled in configurations, typically defaulting to the generalist agent.
*   **[400 Error triggered by > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: Users leveraging heavy MCP integrations are hitting API limits. The community requests smarter scoping logic when the tool count exceeds the model's limit.
*   **[Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**: Auto Memory continuously surfaces unprocessed, low-signal sessions because the agent skips reading them. This creates an annoying loop of repetitive inbox clutter.
*   **[Add deterministic redaction for Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)**: A security-focused request to ensure secrets are deterministically redacted *before* local transcripts enter the model's context window during extraction.
*   **[Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**: Developers want built-in guardrails to prevent the agent from executing destructive git commands (e.g., `git reset --force`) when safer alternatives exist.

### 4. Key PR Progress
*   **[PR #28433: SSR Pipeline Orchestrator](https://github.com/google-gemini/gemini-cli/pull/28433)**: Introduces a massive state machine for iterative bug-fixing, utilizing Firestore concurrency locking and ESLint static analysis to automate code generation safely.
*   **[PR #28530: Triage Evaluation Framework](https://github.com/google-gemini/gemini-cli/pull/28530)**: Adds an "LLM-as-a-Judge" rubric and a parallel Git Worktree benchmark runner to evaluate the Caretaker agent's issue triage accuracy.
*   **[PR #28446: Native fetch for OAuth token exchange](https://github.com/google-gemini/gemini-cli/pull/28446)**: Resolves a "Premature close" auth error on headless VPS environments by replacing the underlying fetch implementation during token exchange.
*   **[PR #28346: Trust dialog disclosure for hooks](https://github.com/google-gemini/gemini-cli/pull/28346)**: Improves folder-trust security by accurately identifying nested hook definitions and warning users before project settings execute command hooks.
*   **[PR #28531: Normalize CRLF to LF in A2A Server](https://github.com/google-gemini/gemini-cli/pull/28531)**: Fixes a Windows-specific bug where line-ending mismatches caused side-by-side diff views in Gemini Code Assist to fail at highlighting changes.
*   **[PR #28434: Antigravity agent runner templates](https://github.com/google-gemini/gemini-cli/pull/28434)**: Implements system prompt templates designed to guide headless Antigravity AI agents through iterative code generation and QA refinement.
*   **[PR #28481: Refresh MCP OAuth tokens](https://github.com/google-gemini/gemini-cli/pull/28481)**: Patches a P1 security issue where MCP OAuth token refreshes failed, resulting in the accidental deletion of stored credentials and forcing constant re-auth.
*   **[PR #28509: Filter thought parts from history turns](https://github.com/google-gemini/gemini-cli/pull/28509)**: Fixes context management logic so that internal monologue (`thought: true`) is completely filtered out from history turns, preventing duplicate reasoning blocks.
*   **[PR #28330: Atomic token file mode setting](https://github.com/google-gemini/gemini-cli/pull/28330)**: Closes a Time-of-Check to Time-of-Use (TOCTOU) security vulnerability where auth-token port files were briefly world-readable before permissions were updated.
*   **[PR #28331: Conscious stagnation detection](https://github.com/google-gemini/gemini-cli/pull/28331)**: Introduces a circuit breaker and guided recovery mechanism to prevent the agentic loop from terminating prematurely after a `/rewind` operation.

### 5. Feature Request Trends
*   **Advanced Codebase Comprehension (AST)**: Strong momentum is building around replacing naive file readers with AST-aware tools. Developers want precise method-bound reads to drastically reduce token waste and improve the agent's structural understanding of complex repositories.
*   **Robust Auto-Memory Management**: Users are requesting granular control over the Auto Memory system. Instead of passive recording, they want deterministic redaction, proper patch validation, and intelligent ignoring of low-signal sessions to keep context clean and secure.
*   **Subagent Visibility & Control**: There is a high demand for transparency in subagent trajectories. Developers want the ability to easily share subagent logs via `/chat share` and request better self-awareness from the CLI regarding its own delegation habits.

### 6. Developer Pain Points
*   **Agentic Hangs and False Successes**: Developers are experiencing a lack of trust in the CLI's autonomous capabilities. The agent frequently hangs on simple shell commands or defers to subagents that silently hit turn limits and report false successes.
*   **Authentication Instability**: Whether due to infinite OAuth loops on Windows, MCP token refresh deletions, or headless VPS network failures, simply keeping the CLI authenticated is a recurring frustration across multiple environments.
*   **Context Bloat & API Limits**: Users integrating extensive toolsets are running into hard 400 errors (>128 tools). Additionally, the agent's tendency to generate temporary edit scripts in random directories creates unnecessary workspace clutter that developers have to manually clean up before commits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for July 25, 2026.

### 1. Today's Highlights
The GitHub Copilot CLI rolled out version **v1.0.75** yesterday, officially introducing support for **Claude Opus 5**. However, the community is actively reporting significant stability challenges, particularly surrounding the newly enhanced plan-mode permissions and session memory management. Several critical regressions in v1.0.74, including severe memory spikes during session resumes and UI freezing on Windows, are currently dominating community discussions.

### 2. Releases
*   **v1.0.75** (2026-07-24)
    *   **Add support for Claude Opus 5:** Expands the CLI's model selection, allowing developers to leverage Anthropic's latest flagship model for terminal-based agentic workflows.

### 3. Hot Issues
Here are the top 10 noteworthy issues from the last 24 hours:

*   **[#4188 Regression on plan-mode](https://github.com/github/copilot-cli/issues/4188)**: Users report that plan-mode now blocks shell commands entirely. This is considered a major regression since agents previously used tools like the `gh` CLI to read issues and enrich planning workflows. (👍 3 | 💬 4)
*   **[#4183 Auto-compaction fails to prevent CAPI 5 MB limit](https://github.com/github/copilot-cli/issues/4183)**: Long, tool-heavy sessions are crashing because serialized CAPI requests exceed a 5 MB body limit. The CLI's auto-compaction fails to mitigate this, causing permanent inability to make further model calls. (👍 10 | 💬 3)
*   **[#4220 Plan mode blocks read-only `gh api` queries](https://github.com/github/copilot-cli/issues/4220)**: The command gate in plan mode is producing false positives, blocking read-only HTTP GET/GraphQL requests and commands piped to `python` or `jq` under the assumption that they "may modify the workspace." (👍 1 | 💬 1)
*   **[#4251 Resume of large session OOMs](https://github.com/github/copilot-cli/issues/4251)**: A severe regression in v1.0.74 causes memory usage to spike 3–4x (grinding a CPU core for ~70 minutes) when attempting to resume large, long-lived sessions. (👍 0 | 💬 0)
*   **[#4246 `archive_session` times out and orphans worktrees](https://github.com/github/copilot-cli/issues/4246)**: Archiving large repository worktrees times out after 60 seconds, leaving behind orphaned branches and consuming substantial disk space without safe recovery options. (👍 0 | 💬 0)
*   **[#4222 Regression: Infinite React/Ink render loop](https://github.com/github/copilot-cli/issues/4222)**: A previous fix for an infinite loop UI freeze has regressed in v1.0.72+. The main pane swallows output and freezes on native Windows terminals, requiring a session restart via `/resume`. (👍 0 | 💬 1)
*   **[#4239 MCP server args templating corrupts nested vars](https://github.com/github/copilot-cli/issues/4239)**: Complex nested bash parameter expansions (e.g., `${VAR:-${VAR2:-$(cmd)&#125;&#125;`) in MCP server arguments are being silently corrupted, leading to authentication and token failures. (👍 0 | 💬 0)
*   **[#4248 `/pr` fails with SSH host aliases](https://github.com/github/copilot-cli/issues/4248)**: The `/pr` command cannot resolve GitHub repositories if the user's git origin utilizes an SSH host alias in their `~/.ssh/config`. (👍 0 | 💬 0)
*   **[#4214 Eternally loading sessions](https://github.com/github/copilot-cli/issues/4214)**: Users are experiencing infinite "Loading: 1 skill" states upon starting a new session, rendering the CLI unresponsive. (👍 2 | 💬 2)
*   **[#3773 Broken light theme accessibility](https://github.com/github/copilot-cli/issues/3773)**: The user prompt background renders as black with low-contrast text in the light theme, making the CLI virtually unreadable for affected users. (👍 3 | 💬 3)

### 4. Key PR Progress
*No new Pull Requests were created or updated in the last 24 hours.*

### 5. Feature Request Trends
*   **Advanced Lifecycle Hooks:** Developers are asking for more granular agentic lifecycle hooks, specifically an `awaitingUserInput` hook to trigger UI or automation events when the agent is ready for interaction ([#1128](https://github.com/github/copilot-cli/issues/1128)).
*   **ACP & IDE Parity:** Users want feature parity between the CLI and IDE integrations. For example, emitting `usage_update` (AI credits/context window) in `--acp` mode for Zed users ([#4233](https://github.com/github/copilot-cli/issues/4233)), and enabling agent-invoked `/rename` inside VS Code ([#4244](https://github.com/github/copilot-cli/issues/4244)).
*   **Smarter Context Tagging:** As codebases grow, `applyTo` glob patterns are no longer sufficient. Developers are requesting domain or category "tags" inside `.instructions` files to better scope agent context automatically ([#4231](https://github.com/github/copilot-cli/issues/4231)).
*   **Granular Clipboard & OS Control:** Linux users are requesting the ability to target the X11/Wayland PRIMARY selection (mouse clipboard) independently from the standard `Ctrl+C/V` clipboard ([#4236](https://github.com/github/copilot-cli/issues/4236)).
*   **Configurable Worktrees:** There is a strong desire to make session worktrees configurable, self-cleaning, and consistently named, rather than relying on "magic" auto-generated paths ([#3675](https://github.com/github/copilot-cli/issues/3675)).

### 6. Developer Pain Points
*   **Overly Strict Plan-Mode Permissions:** The newly enhanced command gate is aggressively blocking read-only commands (like `gh api` and `jq` pipelines). This is actively preventing the agent from gathering necessary context during the planning phase ([#4188](https://github.com/github/copilot-cli/issues/4188), [#4220](https://github.com/github/copilot-cli/issues/4220)).
*   **Session State & Worktree Management:** Managing large worktrees is becoming a heavy burden. Users are frustrated by OOM crashes when resuming long sessions ([#4251](https://github.com/github/copilot-cli/issues/4251)), 60-second timeouts that orphan worktrees during archival ([#4246](https://github.com/github/copilot-cli/issues/4246)), and hidden startup errors in project sessions ([#4144](https://github.com/github/copilot-cli/issues/4144)).
*   **MCP Plugin Fragility:** Integrating external tools via MCP is proving difficult due to directory resolution bugs ([#4234](https://github.com/github/copilot-cli/issues/4234)), complex marketplace install failures ([#4247](https://github.com/github/copilot-cli/issues/4247), [#2200](https://github.com/github/copilot-cli/issues/2200)), and broken shell expansion parsing that breaks authentication ([#4239](https://github.com/github/copilot-cli/issues/4239)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-07-25

### 1. Today's Highlights
The Kimi Code CLI community is actively discussing remote session management and cross-device workflow continuity, highlighted by a highly-supported feature request. There is a noticeable influx of bug reports today related to environment-specific `kimi login` failures (SSL/network) and terminal UI glitches. Meanwhile, contributors are submitting valuable quality-of-life fixes, including better corporate proxy SSL support and refined logging for MCP servers.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*(Summarized based on the latest available community data)*

*   **[Feature Request] Remote Control - Continue local sessions from any device** (Issue [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282))
    *   **Why it matters:** Users want to step away from their desks and seamlessly continue local CLI sessions via phone, tablet, or browser. This has heavy community backing (16+ 👍) and points to a strong demand for workflow mobility.
*   **[Bug] VS code Kimi Freezes** (Issue [#2326](https://github.com/MoonshotAI/kimi-cli/issues/2326))
    *   **Why it matters:** Ubuntu users report consistent freezes and UI glitches in the VS Code extension. Editor integration stability is critical for adoption, making this a high-priority UX issue.
*   **[Bug] kimi login fails** (Issue [#2556](https://github.com/MoonshotAI/kimi-cli/issues/2556))
    *   **Why it matters:** A fresh issue reported today where OAuth login fails specifically on Linux ARM64 architectures, blocking adoption for developers running modern ARM hardware.
*   **[Bug] Windows terminal arrow key selection failure** (Issue [#2521](https://github.com/MoonshotAI/kimi-cli/issues/2521))
    *   **Why it matters:** Windows users interacting with Kimi inside `herdr` are unable to use arrow keys to navigate menus. Terminal emulator compatibility remains a pain point for the CLI UI.
*   **[Bug] Login failed: Cannot connect to host auth.kimi.com:443** (Issue [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070))
    *   **Why it matters:** A lingering but actively updated issue where corporate firewalls/proxies block SSL handshakes during login. It highlights the need for better network configuration flexibility.
*   **[Discussion] A-share quantification + AI Agent practice** (Issue [#2555](https://github.com/MoonshotAI/kimi-cli/issues/2555))
    *   **Why it matters:** A fascinating community discussion applying Kimi's Agent architecture concepts to financial trading algorithms, demonstrating developer interest in utilizing Kimi for complex, parameter-driven autonomous loops.

### 4. Key PR Progress
*(Summarized based on the latest available community data)*

*   **fix: respect SSL_CERT_FILE env var for corporate proxy support** (PR [#762](https://github.com/MoonshotAI/kimi-cli/pull/762))
    *   **Progress:** Aims to fix login/SSL failures by reading standard `SSL_CERT_FILE` environment variables. This will unblock enterprise users stuck behind corporate proxies like Zscaler or Fortinet.
*   **fix: route MCP server log notifications to loguru instead of TUI** (PR [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637))
    *   **Progress:** Cleans up the Terminal UI by preventing background MCP servers (like SearXNG) from dumping raw log data directly into the user's active interface, routing them safely to `loguru` instead.
*   **fix(tools): count StrReplaceFile replacements against running content** (PR [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554))
    *   **Progress:** A crucial correctness fix for the `StrReplaceFile` tool. It ensures that multiple replacements within the same file operation accurately count against the live content state rather than the initial state, preventing edge-case file corruption.

### 5. Feature Request Trends
*   **Cross-Device & Remote Session Continuity:** A major trend is the desire to decouple the CLI execution environment from the user's physical location, allowing local Kimi sessions to be controlled remotely via web or mobile interfaces (Issue #1282).
*   **Agent Autonomy & Parameter-Driven Execution:** Developers are increasingly exploring Kimi CLI not just as a coding assistant, but as a foundational framework for autonomous agents in other domains (like quantitative finance), demanding better support for JSON-based parameter loops and real-environment feedback (Issue #2555).

### 6. Developer Pain Points
*   **Network & Authentication Friction:** A recurring frustration is the `kimi login` process failing across various setups—whether due to strict corporate SSL proxies (Issue #1070, PR #762) or specific OS architectures like Linux ARM64 (Issue #2556). 
*   **Terminal UI/UX Instability:** Developers frequently encounter issues with the CLI's interactive elements, particularly arrow-key navigation breaking inside specific Windows terminal environments like `herdr` (Issue #2521) and general freezing inside the VS Code extension (Issue #2326). Additionally, TUI spam from background MCP logs is actively annoying users (PR #1637).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 25, 2026.

### 1. Today's Highlights
OpenCode version 1.18.5 has been released, focusing on core stability by refining Claude's adaptive thinking logic, preserving Mistral reasoning history, and fixing OpenAI Responses phase handling. The community is actively discussing a widespread `401 AuthError / Request blocked by upstream provider` issue affecting OpenCode Go subscription models across multiple platforms. Meanwhile, contributors have submitted a flurry of core refactors and bug fixes targeting TUI crashes, session pagination, and concurrent task execution.

### 2. Releases
*   **v1.18.5** focuses on core bugfixes and provider stability:
    *   Improved Claude adaptive thinking handling across more response shapes.
    *   Avoided an OpenAI Responses phase handling bug that broke some conversations.
    *   Preserved grep symlink paths in search results (contributed by `@remixz`).
    *   Preserved Mistral reasoning history across turns and stabilized the provider.

### 3. Hot Issues
1.  **[Auto-discover models from OpenAI-compatible provider endpoints](https://github.com/anomalyco/opencode/issues/6231)** (#6231): A highly requested feature (188 upvotes) asking for automatic model discovery for local providers like LM Studio and Ollama to eliminate manual `opencode.json` updates.
2.  **[Subscription models return "Request blocked by upstream provider"](https://github.com/anomalyco/opencode/issues/38218)** (#38218): Users report that OpenCode Go subscription models are uniformly failing with upstream errors. This seems connected to a similar auth issue in [#38195](https://github.com/anomalyco/opencode/issues/38195).
3.  **[Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** (#37012): Following a recent UI update, users are requesting a toggle for the legacy layout, citing better workspace accessibility and easier navigation compared to the new version.
4.  **[Permission asks from nested subagent sessions silently hang](https://github.com/anomalyco/opencode/issues/13715)** (#13715): A critical bug where spawned subagents requiring bash permissions hang indefinitely because the permission prompt is never rendered in the TUI.
5.  **[opencode reads agents.md from parent directories](https://github.com/anomalyco/opencode/issues/6479)** (#6479): Users highlight a security/context annoyance where OpenCode reads `agents.md` files up to two levels above the current working directory.
6.  **[Agent keeps stopping abruptly](https://github.com/anomalyco/opencode/issues/38749)** (#38749): Reflecting a pattern of user frustration (also seen in [#38731](https://github.com/anomalyco/opencode/issues/38731)), agents executing tasks are stopping unexpectedly mid-generation, requiring manual "continue" prompts.
7.  **[Long-running shell commands hang](https://github.com/anomalyco/opencode/issues/25038)** (#25038): Gradle builds and similar long-running shell commands cause the TUI to hang, even after outputting "BUILD SUCCESSFUL".
8.  **[OpenCode leaks temporary .so files in /tmp](https://github.com/anomalyco/opencode/issues/28089)** (#28089): A severe disk space issue where OpenCode leaves behind ELF shared object files in `/tmp`, consuming hundreds of GBs over time on Linux environments.
9.  **[opencode run --auto hangs indefinitely](https://github.com/anomalyco/opencode/issues/36868)** (#36868): Non-interactive automated runs hang permanently when a Task subagent requests permission, as parent sessions ignore child permission events.
10. **[TUI crash: undefined is not an object](https://github.com/anomalyco/opencode/issues/38690)** (#38690): A widespread TUI crash (`f.part.state.content[0]`) occurring within seconds of submitting tasks, causing major disruptions.

### 4. Key PR Progress
1.  **[feat(session): bi-directional cursor-based pagination](https://github.com/anomalyco/opencode/pull/8535)** (#8535): Implements robust bidirectional cursor pagination for session messages across server, TUI, and desktop apps.
2.  **[feat(usage): unified usage tracking with auth refresh](https://github.com/anomalyco/opencode/pull/9545)** (#9545): Introduces built-in usage tracking for OAuth-authenticated providers, replacing multiple outdated tracking implementations.
3.  **[fix(tui): handle Windows path separators](https://github.com/anomalyco/opencode/pull/38764)** (#38764): Corrects rendering of file paths in the `/status` dialog on Windows, resolving backslash formatting issues.
4.  **[fix(ai): preserve response message phases](https://github.com/anomalyco/opencode/pull/38762)** (#38762): Ports OpenAI Responses assistant message phase parsing to the V2 protocol stack, preserving annotations and multi-content boundaries.
5.  **[refactor(core): settle steps as a pure plan](https://github.com/anomalyco/opencode/pull/38743)** (#38743): Refactors step settlement into a pure decision over an immutable record, drastically reducing concurrency collision points.
6.  **[fix(acp): stage file edits for native review](https://github.com/anomalyco/opencode/pull/38198)** (#38198): Fixes a bug where ACP (Agent Communication Protocol) writes files twice, updated to stage edits for native review properly.
7.  **[fix(provider): generalize Claude adaptive thinking](https://github.com/anomalyco/opencode/pull/38757)** (#38757): Refactors Claude provider logic to treat adaptive thinking as a version capability rather than maintaining separate model allowlists (resolving Opus 5 bugs).
8.  **[fix(core): support PDF files in V2 read tool](https://github.com/anomalyco/opencode/pull/38732)** (#38732): Updates the V2 read tool to accept PDF files by bypassing the magic-byte rejection for `%PDF` headers.
9.  **[fix(opencode): keep concurrent task resumes foreground](https://github.com/anomalyco/opencode/pull/38758)** (#38758): Ensures concurrent foreground resumes stay attached to the foreground wait path unless explicitly requested as background tasks.
10. **[fix(tui): emit ready event for startup notifications](https://github.com/anomalyco/opencode/pull/38534)** (#38534): Adds a `tui.ready` event so server plugins can safely execute startup logic only after the TUI event transport is fully subscribed.

### 5. Feature Request Trends
*   **Local LLM Ergonomics:** Users want better integration with local models, specifically auto-discovery of available models from OpenAI-compatible local endpoints (LM Studio, Ollama) and support for new cloud providers like Crof AI and GPT 5.6 via GitHub Copilot.
*   **Workflow Telemetry:** There is a strong push for granular observability inside the TUI, such as viewing per-tool elapsed time and total turn duration.
*   **Cross-Project Context:** Users are frequently working across multiple repositories and desire cross-project session pickers and better workspace isolation in the UI. 
*   **Automated Research:** Requests to include native agentic loops for software research, such as an `opencode research` command to automate code experiments and measurement logging.

### 6. Developer Pain Points
*   **Agent Stalling & Silent Hangs:** A massive frustration for developers is the agent silently stopping mid-task or hanging indefinitely. This is compounded by nested subagents failing to surface permission requests, breaking automated (`--auto`) workflows entirely.
*   **Subscription Auth Blockers:** Widespread reports of `401 AuthError` and upstream provider blocks on paid OpenCode Go subscriptions are preventing developers from utilizing premium models across desktop, CLI, and IDE environments.
*   **UI Regression & Instability:** The new UI layout has alienated power users who relied on the legacy workspace. Additionally, recent TUI crashes (evaluating `undefined` objects) are forcing developers to constantly restart their sessions.
*   **System Resource Leaks:** Heavy Linux users are reporting severe memory/storage leaks, specifically temporary `.so` files flooding the `/tmp` directory, requiring manual cleanup scripts to prevent disk exhaustion.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi project on 2026-07-25.

### 1. Today's Highlights
Pi v0.82.0 has been released, introducing highly anticipated constrained tool sampling that allows developers to enforce strict JSON Schema or OpenAI Lark/regex grammars for more reliable tool interactions. The community is actively integrating newly released frontier models like Claude Opus 5 and Qwen 3.8, while also identifying critical state management edge cases when hot-swapping models mid-session. Under the hood, recent contributions have heavily focused on resolving network proxy issues, fixing context compaction bugs, and optimizing TUI rendering performance.

### 2. Releases
*   **[v0.82.0](https://github.com/earendil-works/pi/releases/tag/v0.82.0)**
    *   **Constrained tool sampling:** Tools can now prefer or require strict JSON Schema sampling or use OpenAI Lark/regex grammars. This update includes model capability metadata to prevent sending unsupported requests to incompatible models.

### 3. Hot Issues
*   **[#6922](https://github.com/earendil-works/pi/issues/6922) Default model cannot be a llama.cpp model: startup shows "No models available"**
    Pi fails to boot properly when configured to use local llama.cpp models by default due to startup timing issues. This is a high-priority bug for local-first developers, accumulating significant community upvotes.
*   **[#7067](https://github.com/earendil-works/pi/issues/7067) Model switch breaks session: GPT HTML errors, Qwen enable_thinking 400**
    Hot-swapping between disparate models (e.g., Qwen 3.8 to GPT 5.6) mid-session frequently causes hard crashes. The root cause involves a lack of pre-switch context window validation and unconverted thinking blocks.
*   **[#6768](https://github.com/earendil-works/pi/issues/6768) [bug] Compaction using Copilot Enterprise not possible**
    Users on Copilot Enterprise licenses are hitting `421 Misdirected Request` errors during context compaction for both OpenAI and Anthropic models, hampering long-running sessions.
*   **[#7047](https://github.com/earendil-works/pi/issues/7047) Gemini 3.x tool-call IDs stripped from function calls/responses**
    Multi-turn tool conversations with Gemini 3.x are breaking because Pi drops the unique `id` field from function calls/responses when replaying history, violating Gemini's strict state matching requirements.
*   **[#6951](https://github.com/earendil-works/pi/issues/6951) qwen3.8-max-preview supports adjusting the reasoning effort, but pi has not configured the thinkingLevelMap**
    The community notes that Pi's default reasoning tiers (minimal, low, medium, high) are misaligned with Qwen’s actual API specs (low, medium, xhigh), causing sub-optimal agentic reasoning.
*   **[#6948](https://github.com/earendil-works/pi/issues/6948) Built-in llama.cpp provider: defaultProvider/defaultModel not applied at startup**
    A race condition between startup and asynchronous model refreshing prevents Pi from applying the configured default local model, requiring manual intervention via `/model`.
*   **[#7048](https://github.com/earendil-works/pi/issues/7048) Compaction summary can be persisted truncated mid-word**
    A dangerous compaction bug where hitting the token output limit (`stopReason === "length"`) is not caught, resulting in truncated summary states being persisted to session history.
*   **[#7049](https://github.com/earendil-works/pi/issues/7049) Upgrade Undici to 8.8.0 for correct plain-HTTP proxy forwarding**
    Corporate proxy environments are broken due to Pi's pinned Undici version mishandling `HTTP_PROXY` tunnels for plain HTTP targets, causing massive friction for enterprise users.
*   **[#6970](https://github.com/earendil-works/pi/issues/6970) pi's integration with GitHub Copilot Plugin causes token invalidation**
    Using the `github-copilot` provider across multiple devices or alongside editors like Neovim triggers rapid token invalidation due to conflicts in Pi's OAuth handling.
*   **[#6957](https://github.com/earendil-works/pi/issues/6957) aws-bedrock provider ignores profile when there are AWS_* environment vars present**
    AWS Bedrock integration overrides explicitly configured local profiles if any `AWS_*` environment variables are globally set, causing silent authentication failures.

### 4. Key PR Progress
*   **[#7081](https://github.com/earendil-works/pi/pull/7081) feat(ai): support Claude Opus 5 on Bedrock**
    Adds support for Claude Opus 5 specifically tailored for Bedrock, implementing required adaptive thinking configurations and cleaning up verbose server-side validation errors.
*   **[#7082](https://github.com/earendil-works/pi/pull/7082) perf(tui): O(viewport) transcript rendering**
    A massive performance optimization that introduces viewport windowing and container memoization. It solves severe input lag in terminal sessions bloated by long transcripts and base64 images.
*   **[#7072](https://github.com/earendil-works/pi/pull/7072) fix(coding-agent): cache llama.cpp model catalog**
    Directly addresses local model boot race conditions by caching the llama.cpp model catalog, ensuring configurations are respected immediately on startup.
*   **[#7061](https://github.com/earendil-works/pi/pull/7061) fix(openai-completions): handle array content and missing finish_reason**
    Resolves parsing bugs for non-standard streaming responses from Databricks and Qwen models, fixing issues where typed arrays were stringified into useless `[object Object]` payloads.
*   **[#7050](https://github.com/earendil-works/pi/pull/7050) Normalize OpenAI tool schema required arrays**
    Fixes a schema generation bug where DeepSeek and other strict OpenAI-compatible providers rejected Pi's tools due to serialized `null` values in the `required` arrays.
*   **[#7055](https://github.com/earendil-works/pi/pull/7055) fix(ai,agent,coding-agent): prevent retry on tool validation errors**
    Prevents the agent from foolishly retrying tools when LLMs return malformed JSON arguments, specifically patching an issue where the text "429" inside an error message triggered a rate-limit fallback.
*   **[#7009](https://github.com/earendil-works/pi/pull/7009) fix: await wl-copy exit code and fall through to xclip on failure**
    Fixes the `/copy` command on Linux sandboxes. It now properly waits for `wl-copy` to succeed or fail before falling back to `xclip` or OSC 52 sequences.
*   **[#7046](https://github.com/earendil-works/pi/pull/7046) feat: add provider-neutral prompt cache contracts**
    Implements a universal caching breakpoint contract, standardizing how Pi handles prompt caches across various providers to optimize latency and token costs.
*   **[#7036](https://github.com/earendil-works/pi/pull/7036) fix(coding-agent): reload model config in picker**
    Improves the UX of the `/model` command by forcing an automatic reload of `models.json`, ensuring users see local config changes instantly without needing a manual app refresh.
*   **[#7085](https://github.com/earendil-works/pi/pull/7085) feat(coding-agent): add vitest eval harness**
    Introduces a standardized `vitest-evals` workspace within the Pi codebase, giving developers a structured framework to run smoke tests against various provider/model combinations.

### 5. Feature Request Trends
*   **Advanced Proxy and Networking Controls:** Enterprise users are heavily requesting better handling of corporate proxies, specifically asking for Undici upgrades and better tunneling logic for HTTP targets.
*   **Seamless Model Hot-Swapping:** There is a strong desire for a "smart" model switching mechanism that automatically converts incompatible state (like thinking blocks) and validates context window sizes before executing the swap.
*   **Strict AI Provider Adherence:** Developers want tighter alignment with official documentation for emerging models (e.g., Gemini's tool-call IDs and Qwen's specific reasoning tiers) to reduce 400/500 API errors during complex agentic loops.
*   **Terminal UI Enhancements:** Multiple requests focus on bringing standard OS text selection hotkeys to the TUI editor, alongside optimizations for rendering massive outputs.

### 6. Developer Pain Points
*   **Context Compaction Instability:** Compaction remains a major sore spot. Developers report frequent session crashes, silent failures, and truncated summaries that corrupt long-running coordinator sessions.
*   **Fragmented Local Model Support:** Integrating `llama.cpp` as a first-class default provider is currently riddled with race conditions and startup failures, frustrating offline and privacy-focused users.
*   **Enterprise Authentication Clashes:** Users utilizing corporate licenses (GitHub Copilot Enterprise, AWS Bedrock) frequently deal with broken auth states, token invalidations, and overwritten environment variables.
*   **Unstandardized LLM Error Handling:** Minor variances in provider API responses—such as Databricks returning arrays instead of strings, or validation errors containing "429"—frequently break Pi's retry logic, resulting in hallucinated failures.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-25.

### 1. Today's Highlights
Qwen Code officially rolled out **v0.21.0**, bringing a new workspace selector to the web shell composer. The development team also completed multiple full 500-case SWE-bench Verified POC runs to stress-test agent capabilities. Community focus is heavily centered on agentic workflows, with heated discussions around subagent spawning controls, daemon reliability, and background process observability. 

### 2. Releases
*   **[v0.21.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0)**: Introduced a workspace selector button with an add/switch dropdown in the web shell composer toolbar. No breaking changes were reported.
*   *Note: The repository also saw a high volume of isolated DSW SWE-bench Verified POC prereleases (e.g., [Run 3](https://github.com/QwenLM/qwen-code/releases/tag/dsw-swe-full-poc-20260724-fadeed2)). These are non-production benchmarking releases designed to test agent performance against the complete 500-case SWE-bench suite.*

### 3. Hot Issues
1.  **[#7626](https://github.com/QwenLM/qwen-code/issues/7626) - Model relaunches still-running background shells:** When running long background jobs with buffered stdout, the model mistakenly relaunches the process because the output file appears empty. This highlights critical gaps in the model's environmental awareness.
2.  **[#7679](https://github.com/QwenLM/qwen-code/issues/7679) - QWEN.md multi-agent rules overridden by system prompts:** Users report that custom rules preventing automatic subagent spawning are being ignored due to the system prompt's default bias towards exploration agents.
3.  **[#7659](https://github.com/QwenLM/qwen-code/issues/7659) - `tool_choice: "required"` rejected in thinking mode:** DashScope rejects tool choices during thinking mode, causing memory recall side-queries to fail with HTTP 400 errors.
4.  **[#7147](https://github.com/QwenLM/qwen-code/issues/7147) - MCP server tool/resource listing timeouts:** Users are experiencing persistent timeouts when attempting to fetch tool listings from third-party MCP servers (like Fastmail), despite authentication succeeding.
5.  **[#5800](https://github.com/QwenLM/qwen-code/issues/5800) - TUI rendering bug clips long replies:** In default Static mode, the last line of an assistant reply taller than the terminal height is overwritten and hidden upon completion.
6.  **[#7264](https://github.com/QwenLM/qwen-code/issues/7264) - CLI cold-start performance bottlenecks:** An audit of the ACP child process revealed a 17.24 MiB eager static import closure, prompting calls for further lazy-loading of modules to speed up CLI initialization.
7.  **[#7697](https://github.com/QwenLM/qwen-code/issues/7697) - Unity MCP fails to connect in VS Code:** Users report that while competing tools like Claude Code connect to Unity MCP seamlessly, the Qwen Code VS Code extension fails to execute tools.
8.  **[#7684](https://github.com/QwenLM/qwen-code/issues/7684) - macOS input method cursor misalignment:** In Command mode, if the status line displays multiple lines, the input method candidate box appears far away from the actual text cursor.
9.  **[#7634](https://github.com/QwenLM/qwen-code/issues/7634) - WSL rendering anomalies:** Under WSL + Windows Terminal, streaming output causes text to render multiple times per character, increasingly worsening as the output grows.
10. **[#4252](https://github.com/QwenLM/qwen-code/issues/4252) - Request for Generation Timing Metrics:** The community is requesting native exposure of real-time performance metrics, specifically Tokens Per Second (TPS) and Time-To-First-Token (TTFT), within the `/stats` command.

### 4. Key PR Progress
1.  **[PR #7669](https://github.com/QwenLM/qwen-code/pull/7669) - Status sidecars for background shells:** Directly addresses Issue #7626 by writing a machine-readable status sidecar (`shell-<id>.status`) for background tasks, preventing the model from misreading quiet processes.
2.  **[PR #7651](https://github.com/QwenLM/qwen-code/pull/7651) - Prompt layering optimization:** Restructures the system prompt into stable, context, and volatile layers, keeping the auto-memory section last to optimize token caching and context delivery.
3.  **[PR #7680](https://github.com/QwenLM/qwen-code/pull/7680) - Instant Web Shell git status:** Significantly improves Web Shell UX by loading the git branch chip from a per-workspace cached summary before the full git status command resolves.
4.  **[PR #7683](https://github.com/QwenLM/qwen-code/pull/7683) - Read-only GitHub PR panel:** Adds a new "Pull requests" tab to the Web Shell Git dialog, allowing developers to review PR titles, CI status, and author data without leaving the IDE.
5.  **[PR #7691](https://github.com/QwenLM/qwen-code/pull/7691) - Review workflow security:** Enforces a "submit-only write contract" by preventing the `/review` skill from bypassing the `qwen review submit` channel, blocking unauthorized write operations.
6.  **[PR #7268](https://github.com/QwenLM/qwen-code/pull/7268) - Workspace trust hot-reload:** Removes the need to restart the daemon when workspace trust policies change, applying semantic policy snapshots seamlessly to running instances.
7.  **[PR #7678](https://github.com/QwenLM/qwen-code/pull/7678) - Permission-free plan files:** Allows the model to read saved plan files from `~/.qwen/plans` automatically, removing annoying manual confirmation prompts.
8.  **[PR #7632](https://github.com/QwenLM/qwen-code/pull/7632) - GitHub polling channel adapter:** Introduces a new GitHub channel adapter that uses a notification-as-wakeup architecture to respond to @mentions on issues and PRs autonomously.
9.  **[PR #7637](https://github.com/QwenLM/qwen-code/pull/7637) - Workspace Channel Management API:** Exposes the first independently mergeable CRUD API contract for managing workspace integrations and channels via `qwen serve`.
10. **[PR #7673](https://github.com/QwenLM/qwen-code/pull/7673) - Plan mode exit fix:** Fixes an issue where manually switching out of plan mode caused the model to receive an unhelpful generic permission deny error instead of system guidance.

### 5. Feature Request Trends
*   **Advanced Subagent Orchestration:** Developers want finer control over spawned agents. Proposals include assigning model grades (small/medium/high) to subagents at spawn time ([#7685](https://github.com/QwenLM/qwen-code/issues/7685)) and creating "fork profiles" with named tool-restriction presets for cache-sharing ([#7625](https://github.com/QwenLM/qwen-code/issues/7625)).
*   **Background & Service Agents:** There is a strong push towards autonomous background execution, such as creating a Service Agent Engine for scheduled triggers ([#7696](https://github.com/QwenLM/qwen-code/issues/7696)) and requesting outbound image delivery in integrations like DingTalk ([#7687](https://github.com/QwenLM/qwen-code/issues/7687)).
*   **Native Observability & Metrics:** Users are asking for deeper network and runtime analytics, specifically requesting native TPS and TTFT metric tracking in CLI commands ([#4252](https://github.com/QwenLM/qwen-code/issues/4252)).

### 6. Developer Pain Points
*   **Agent Context Blindness:** The most prominent frustration is the AI's inability to understand implicit context—such as whether a long-running background process is still executing simply because stdout is buffered. This causes the model to erroneously restart tasks.
*   **Prompt & Rule Hierarchies:** Users are frustrated that explicitly defined operational rules (like "do not use subagents") are easily overridden by the system's internal default prompts, reducing trust in the agent's reliability.
*   **Cross-Platform TUI Inconsistencies:** Terminal rendering bugs remain a major pain point. Specifically, text clipping on long outputs in default mode, multi-line input method misalignment on macOS, and severe character duplication in WSL setups are actively disrupting developer workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek TUI (now officially transitioning to **CodeWhale**) for July 25, 2026.

### 1. Today's Highlights
The project is officially transitioning its public product identity from **DeepSeek TUI** to **CodeWhale** (developed by Shannon Labs), starting with the [v0.9.1 release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.1). Development is heavily focused on defining a robust "Fleet / Workflow / Lane / Runtime" architecture to manage autonomous subagents safely, alongside a massive infrastructure push for global localization and CI/CD pipeline automation.

### 2. Releases
*   **[v0.9.1](https://github.com/Hmbown/CodeWhale/releases)**: Marks the official public branding transition to `codewhale`. The legacy `deepseek-tui` npm package is deprecated and will receive no further updates.

### 3. Hot Issues
*   **[Issue #3275](https://github.com/Hmbown/CodeWhale/issues/3275)**: *Agent over-extension regression.* Users report the agent looping in self-Q&A and executing actions beyond user intent. This highlights ongoing struggles with balancing AI autonomy and user control.
*   **[Issue #1186](https://github.com/Hmbown/CodeWhale/issues/1186)**: *Typed persistent permission rules.* A highly requested enhancement to add granular `allow`/`deny` execution policies based on tool, command prefix, and path patterns.
*   **[Issue #4175](https://github.com/Hmbown/CodeWhale/issues/4175)**: *The Canonical Architecture Tracker.* A core issue defining the orchestration vocabulary (Fleet, Workflow, Lane, Runtime) to prevent concept collapse in multi-agent execution.
*   **[Issue #4178](https://github.com/Hmbown/CodeWhale/issues/4178)**: *Dogfooding the Fleet model.* The team is actively testing the new lane/fleet architecture against active stopship bugs to ensure real-world viability.
*   **[Issue #4179](https://github.com/Hmbown/CodeWhale/issues/4179)**: *Workflow Phase 3 Gates.* Proposes explicit role-to-role handoffs (scout → implementer → reviewer) with block/approve semantics to make multi-step agentic coding safer.
*   **[Issue #1004](https://github.com/Hmbown/CodeWhale/issues/1004)**: *Request for `/dryrun` command.* Users want the ability to preview API requests (and token consumption) before sending them to DeepSeek V4 Pro.
*   **[Issue #1425](https://github.com/Hmbown/CodeWhale/issues/1425)**: *Agent timeout deadlocks.* Attempting to analyze large texts (e.g., a 3-million-word novel) causes session freezes due to `agent_wait` timeouts when spawning sub-agents.
*   **[Issue #4790](https://github.com/Hmbown/CodeWhale/issues/4790)**: *Hindi Localization Spike.* Initiates work on Devanagari terminal-shaping, targeting India's massive developer population.
*   **[Issue #1651](https://github.com/Hmbown/CodeWhale/issues/1651)**: *VS Code instability.* Running the autonomous "YOLO Agent" in the VS Code integrated terminal causes unexpected crashes of the IDE.
*   **[Issue #4462](https://github.com/Hmbown/CodeWhale/issues/4462)**: *Provider catalog bug.* Custom LLM providers fail to dynamically load their `/v1/models` catalog in production, restricting users to default models.

### 4. Key PR Progress
*   **[PR #4768](https://github.com/Hmbown/CodeWhale/pull/4768)**: Adopts the "intent is the artifact" stance in agent docs, prioritizing generating fresh code over rebasing/reconciling old branches.
*   **[PR #4652](https://github.com/Hmbown/CodeWhale/pull/4652)**: Adds a `--no-project-config` CLI flag to ensure reproducible, headless agent execution independent of workspace settings.
*   **[PR #4608](https://github.com/Hmbown/CodeWhale/pull/4608)**: Significantly compacts permission modals and preserves "Full Access" postures across subagent handoffs, failing closed only for critical safety blocks.
*   **[PR #4653](https://github.com/Hmbown/CodeWhale/pull/4653)**: Implements PTY scenario testing to permanently lock in and fix UI transcript scrolling issues.
*   **[PR #4611](https://github.com/Hmbown/CodeWhale/pull/4611)**: Fixes durable goal tracking, allowing objectives and budgets to correctly carry over across multi-turn sessions.
*   **[PR #4792](https://github.com/Hmbown/CodeWhale/pull/4792)**: Fixes CI auto-labeller logic that incorrectly tagged well-specified feature requests as "bugs."
*   **[PR #4776](https://github.com/Hmbown/CodeWhale/pull/4776)**: Automates the deployment of the `codewhale.net` website on every push to `main`, preventing documentation drift.
*   **[PR #4746](https://github.com/Hmbown/CodeWhale/pull/4746)**: Strips marketing jargon from the README in favor of concise technical copy across all 6 translations.
*   **[PR #4793](https://github.com/Hmbown/CodeWhale/pull/4793)**: Cleans up legacy v0.8.68 workflow scripts, transitioning fully to the new architecture.
*   **[PR #4607](https://github.com/Hmbown/CodeWhale/pull/4607)**: Fixes UI redraw snapping, allowing users to scroll through work surfaces without being forcefully snapped back to active operations.

### 5. Feature Request Trends
*   **Advanced Multi-Agent Orchestration**: A massive push towards structured agentic workflows. The community wants explicit roles (Fleet), clear pipelines (Workflows), scoped execution (Lanes), and strict handoff gates (Phases 1-3) to make autonomous coding reliable.
*   **Granular Security Postures**: Users are moving away from "YOLO mode" and requesting typed, persistent execution policies (`execpolicy`), dry runs for API calls, and safer permission defaults.
*   **Global Localization Matrix**: A strategic initiative to support regional developer bases, specifically targeting Southeast Asia (Indonesian, Vietnamese), Europe (French, German, Ukrainian), and India (Hindi/Devanagari shaping).

### 6. Developer Pain Points
*   **Terminal & OS Compatibility**: Windows users continue to face severe friction. Issues range from CRLF line-ending failures in the `edit_file` tool ([#4764](https://github.com/Hmbown/CodeWhale/issues/4764)) to broken terminal rendering in Git Bash/Windows Terminal ([#1687](https://github.com/Hmbown/CodeWhale/issues/1687)).
*   **Agent Runaways & Deadlocks**: When pushing the AI to handle large contexts (like massive text files), sub-agents frequently timeout and freeze the session ([#1425](https://github.com/Hmbown/CodeWhale/issues/1425)). Conversely, agents sometimes make unauthorized modifications without waiting for user confirmation ([#3275](https://github.com/Hmbown/CodeWhale/issues/3275)).
*   **Provider Integration Friction**: Custom provider setups are brittle, with users noting that dynamic model catalogs fail to load, requiring manual URL overrides ([#4462](https://github.com/Hmbown/CodeWhale/issues/4462), [#1330](https://github.com/Hmbown/CodeWhale/issues/1330)).

</details>