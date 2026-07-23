# AI CLI Tools Community Digest 2026-07-24

> Generated: 2026-07-23 22:18 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 24, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem in mid-2026 is characterized by rapid maturation, shifting aggressively from simple code completion to fully autonomous, multi-agent workflows. Interoperability is emerging as a core tenet, with tools increasingly adopting standard protocols like Model Context Protocol (MCP) and Agent Client Protocol (ACP) while actively building bridges to support competitor plugins (e.g., OpenCode mapping Claude plugins). The technical focus across the board has pivoted to solving complex systemic challenges: unbounded context management, sub-agent orchestration, and cross-platform terminal stability. Meanwhile, providers are heavily investing in local-first architectures, supporting diverse setups ranging from enterprise external memory systems to localized, sandboxed deployments via `llama.cpp` and Ollama.

### 2. Activity Comparison
*Note: The following data reflects the specific activity highlighted in the July 24 community digests.*

| Tool | Hot Issues Highlighted | Active PRs Highlighted | Release Status (24h) |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 5 | No new releases |
| **OpenAI Codex** | 10 | 10 | 2 (rust-v0.146.0-alpha.4 & .5) |
| **Gemini CLI** | 10 | 10 | 1 (v0.52.0-nightly) |
| **GitHub Copilot CLI**| 10 | 2* | 1 (v1.0.74) |
| **Kimi Code CLI** | 7 | 10 | No new releases |
| **OpenCode** | 10 | 10 | No new releases |
| **Pi** | 10 | 10 | No new releases |
| **Qwen Code** | 10 | 10 | No new releases |
| **DeepSeek TUI** | 10 | 10 | 0 (Gated for security) |

*\*GitHub Copilot CLI noted several "Pending PRs" mapped to internal development rather than public repository PRs.*

### 3. Shared Feature Directions
*   **Context Management & Auto-Compaction:** Nearly all tools are battling context window limitations. Developers are demanding configurable compaction thresholds to prevent infinite loops and session wedging (seen in **Copilot CLI, OpenCode, Codex, Gemini CLI, Qwen Code**).
*   **Sub-Agent Orchestration & Visibility:** There is a universal push toward multi-agent architectures paired with UI elements to track them. Users want isolated worker pools, dedicated sub-agent timelines, and cost-tiered model routing (evident in **Claude Code, Gemini CLI, DeepSeek TUI, OpenCode, Kimi Code**).
*   **MCP Standardization & Deep IDE Integration:** Model Context Protocol is solidifying as the industry standard. Communities want seamless passing of MCP states between IDEs (like VS Code) and CLIs, as well as better handling of MCP context budgets (**Copilot CLI, Codex, Kimi Code, OpenCode**).
*   **Procedural Guardrails & Security:** As agents gain autonomy, communities are demanding deterministic safety mechanisms, such as hardcoded blocks for destructive Git commands and robust tool sandboxing (**Gemini CLI, Qwen Code, DeepSeek TUI, OpenCode**).
*   **Cross-Platform Desktop & Terminal Parity:** There is massive demand for native desktop applications—especially for Linux—and robust terminal handling, including CJK/RTL text rendering and mobile remote-control capabilities (**Codex, Claude Code, Kimi Code, Pi, OpenCode**).

### 4. Differentiation Analysis
*   **Provider Ecosystem Strategy:** First-party tools (**Claude Code, Codex, Gemini, Copilot**) are deeply integrating their latest foundational models (Fable 5, GPT-5, Gemini 3.6) and tightening subscriptions. In contrast, third-party and open aggregators (**Pi, OpenCode, DeepSeek TUI**) focus on model-agnostic routing, native local LLM discovery, and complex fallback logic across OpenAI, Anthropic, and local endpoints.
*   **Target Audience:** **Qwen Code** is heavily targeting enterprise users, focusing on external memory profiles, localized AcpBridge integrations (WeChat), and CI/CD pipeline reliability. **Kimi Code** is prioritizing cross-device workflows, specifically optimizing for mobile synchronization and background processing. 
*   **Technical Approaches to Autonomy:** **Gemini CLI** is exploring advanced infrastructure with AST-aware codebase navigation and server-side autonomous pipelines ("Antigravity"). **OpenAI Codex** is undergoing deep architectural rewrites into Rust to handle SQLite state management and HTTP routing natively. **Claude Code** relies on deep workflow integration but currently faces friction with invisible internal tool regressions.

### 5. Community Momentum & Maturity
*   **High Velocity & Foundational Refactoring:** **OpenAI Codex** (Rust alpha releases) and **OpenCode** (V2 architecture) show immense momentum, rapidly merging foundational PRs to overhaul state management and provider interoperability. 
*   **Active Stabilization:** **Kimi Code, Pi,** and **Qwen Code** have highly active open-source communities submitting dense, bug-fixing PRs. They are currently in a "hardening" phase, particularly battling Windows compatibility and CLI/TUI rendering bugs.
*   **Maturity & Scale:** **Claude Code** and **GitHub Copilot CLI** exhibit signs of massive enterprise scale, dealing less with foundational bugs and more with complex agentic loops, OAuth integrations, and large-scale UI regressions. **DeepSeek TUI** is currently in a strict pre-release maturity phase, formally gating releases via security audits and dependency disposition.

### 6. Trend Signals
*   **The "Hanging Sub-Agent" Problem:** As the industry pivots to multi-agent systems, execution deadlocks are the new critical bug. Background tasks and sub-agents frequently fail to yield control back to the parent process, severely degrading trust in autonomous workflows.
*   **The True Cost of Context:** Developers are realizing that unoptimized context handling—such as retaining large binaries in session logs or failing to drop image payloads—leads to massive storage bloat and silent API overbilling. Next-gen CLIs must offer granular, AST-level file reading and aggressive context budgeting.
*   **Convergence on TUI as a First-Class Citizen:** Terminal interfaces are no longer just basic stdin/stdout wrappers. Developers are demanding highly customizable, themeable, and metadata-rich TUIs (live token counters, dependency graphs) that rival native desktop applications, without breaking under strict terminal environments like `tmux` or Windows `cp936`. 
*   **Cross-Tool Protocol Adoption:** The active merging of Open Plugin Specs, MCP, and ACP indicates that vendor lock-in is becoming unpopular. Developers expect tools to interoperate, share context, and inherit configurations from one another seamlessly.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent community activity.

### 1. Top Skills Ranking & Core Tooling Fixes
*(Note: PR comment counts are currently suppressed in the dataset; rankings below are determined by update frequency, linked issue traction, and ecosystem impact).*

*   **Skill-Creator: Eval & Optimization Pipeline Fixes** 
    *   **PRs:** [#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)
    *   **Functionality:** Fixes for `run_eval.py` and `run_loop.py` within the Skill Creator.
    *   **Discussion Highlights:** This is the most actively discussed area in the PR tracker. The description-optimization loop is currently crippled by a 0% recall bug (Issue [#556](https://github.com/anthropics/skills/issues/556)) and multiple Windows compatibility issues (subprocess `PATHEXT`, stream reading). These open PRs propose comprehensive fixes for trigger detection, multi-byte UTF-8 validation, and cross-platform OS support.
*   **Meta-Skills: Quality, Security & Self-Auditing**
    *   **PRs:** [#83](https://github.com/anthropics/skills/pull/83), [#1367](https://github.com/anthropics/skills/pull/1367)
    *   **Functionality:** Frameworks to evaluate AI output before delivery. #83 introduces a 5-dimension quality and security analyzer, while #1367 adds a mechanical file verification and 4-dimension reasoning gate.
    *   **Discussion Highlights:** High community interest in "Guardrails." These PRs aim to give Claude Code a standardized pre-emptive failure detection system, preventing hallucinated file paths and logic errors before output delivery.
*   **Frontend-Design Refactor**
    *   **PR:** [#210](https://github.com/anthropics/skills/pull/210)
    *   **Functionality:** Revising the frontend-design skill for better clarity, actionability, and token efficiency.
    *   **Discussion Highlights:** Addresses a broader community concern that skills often read like "developer documentation" rather than strict operational instructions for an LLM. Status: Open.
*   **Pyxel (Retro Game Development)**
    *   **PR:** [#525](https://github.com/anthropics/skills/pull/525)
    *   **Functionality:** Wraps the `pyxel-mcp` server to allow Claude to generate and iterate on 8-bit retro games.
    *   **Discussion Highlights:** One of the longest-standing open PRs (updated recently in July 2026), showing sustained niche community interest in expanding Claude's creative coding capabilities. 

### 2. Community Demand Trends
Based on the most active Issues, the community is pushing heavily for the following new directions:
*   **Enterprise Governance & Security:** High demand for skills that enforce AI safety patterns, audit trails, and access control. Issue [#412](https://github.com/anthropics/skills/issues/412) proposes an "agent-governance" skill for policy enforcement, while Issue [#1175](https://github.com/anthropics/skills/issues/1175) highlights the need for secure permission logic when handling SharePoint documents.
*   **Agent State & Memory Management:** Issue [#1329](https://github.com/anthropics/skills/issues/1329) proposes a "compact-memory" skill utilizing symbolic notation. This addresses a major community pain point: reducing token bloat by converting long-running prose memory into dense, structured formats.
*   **Standardized API Exposure (Skills as MCPs):** Issue [#16](https://github.com/anthropics/skills/issues/16) suggests translating internal skill parameters into standardized MCP tool calls (e.g., turning an art generation skill into `generateAlgorithmArt()`), allowing for better programmatic software interaction.
*   **Organizational Workflow Automation:** Issue [#228](https://github.com/anthropics/skills/issues/228) requests native organization-wide skill sharing, moving away from manual `.skill` file transfers toward an enterprise shared library.

### 3. High-Potential Pending Skills
These active PRs tackle critical ecosystem bugs and are strong candidates for imminent merging:
*   **[Document Creation] ODT Skill ([#486](https://github.com/anthropics/skills/pull/486)):** Introduces native OpenDocument (.odt, .ods) parsing and template filling, rounding out Claude's office document capabilities.
*   **[Typography Quality Control] ([#514](https://github.com/anthropics/skills/pull/514)):** Automatically prevents orphan words, widow paragraphs, and numbering misalignment in generated PDFs/DOCX files. 
*   **[Core Bug Fixes] DOCX ID Collisions & YAML Parsing ([#541](https://github.com/anthropics/skills/pull/541), [#539](https://github.com/anthropics/skills/pull/539), [#538](https://github.com/anthropics/skills/pull/538)):** A cluster of highly technical, targeted PRs by community members (Lubrsy706, Mr-Neutr0n) fixing OOXML shared-ID document corruption, silent YAML parsing failures on unquoted special characters, and case-sensitive file reference breaks. 

### 4. Skills Ecosystem Insight
The community's most concentrated demand is shifting from static, task-specific prompt engineering toward **dynamic meta-skills focused on agent governance, automated quality auditing, and the stabilization of the skill-creation toolchain itself.**

---

Here is the Claude Code community digest for July 24, 2026.

### 1. Today's Highlights
The community is currently facing significant friction with missing task-tracking tools and access restrictions around the newly standardized Fable 5 model. Multiple critical bugs disrupting workflows include phantom escape sequences freezing the CLI in VS Code and background subagents idling indefinitely. Meanwhile, community contributors are actively submitting PRs to harden internal automation scripts and fix command execution bugs.

### 2. Releases
*No new releases or version updates were recorded in the last 24 hours.*

### 3. Hot Issues
*   **#79337 [BUG] Fable 5 prompts 'usage credits required' on Max plan:** Since Fable 5 became standard on the Max plan (2026-07-20), users report being locked out, with Claude Code silently downgrading sessions to Opus 4.8. A duplicate issue (#80706) confirms this is an ongoing, widespread blocker.
*   **#80210 & #77577 Task/Todo tools not exposed:** A severe regression (~2026-07-21) is completely hiding `TaskCreate`, `TaskUpdate`, and `TodoWrite` from the model. Users report the tools are missing despite `todoFeatureEnabled: true`, severely breaking agentic workflows.
*   **#80659 Mouse-tracking escape sequences leak into prompt:** Focus-reporting and mouse-tracking sequences are leaking into the Claude Code CLI prompt after opening a plan in VS Code. This causes garbled characters and input freezing, heavily disrupting terminal usage.
*   **#78782 Background Bash task completion never resumes subagents:** When an in-process subagent uses a background Bash task, the task's completion fails to re-invoke the subagent. This leaves subagents idling forever while finished work sits unread on disk.
*   **#80263 Plugin submissions stuck in "Published" state:** Plugin developers are hitting a wall where submissions reach "Published" in the Claude Console but fail to propagate to the public directory due to a name-collision bug. 
*   **#76156 `skillOverrides` silently ignored for plugin skills:** Plugin-provided skills are being hard-coded to `"on"` by the runtime resolver. The `/skills` UI falsely implies that user overrides are being applied, creating confusion.
*   **#73647 Peer-message security boilerplate spam:** Security boilerplate prepends every teammate `idle_notification` status ping. On mobile Remote Control, this security warning takes up ~80% of the screen height per message.
*   **#74559 Cowork agent registration 409 persists after app quit:** Mac users are experiencing orphaned Cowork agent registrations that lock out secondary machines, returning a 409 error with no way to manually release the lock.
*   **#80707 Channel notifications enqueue forever into abandoned session:** After utilizing the `/fork` command, inbound messages are silently dropped. They continue enqueuing into the abandoned original session ID instead of the newly active forked session.
*   **#80702 LaTeX math corrupted in terminal output:** Assistant messages containing LaTeX math are being silently corrupted by markdown escaping and displayed as raw source code instead of rendered math in terminal output.

### 4. Key PR Progress
*While only 5 PRs saw activity today, here are the most important updates from the community:*

*   **PR #80508: fix(scripts): paginate comments and reactions in auto-close-duplicates**
    Fixes an internal automation script bug where pagination limits on GitHub's API caused incomplete reads of comments and reactions when trying to close duplicate issues.
*   **PR #80495: fix(ralph-wiggum): stop parsing /ralph-loop prompt text as shell code**
    A critical injection/execution fix. Previously, arguments passed to `/ralph-loop` were directly substituted into shell lines, causing the loop to crash or execute unintended commands.
*   **PR #80353: docs(gcp): stop on checksum mismatch**
    A safety improvement for GCP gateway deployments that ensures the deployment sequence halts and cleans up if a downloaded binary fails checksum verification.
*   **PR #42604: Remove "retro-futuristic" recommendation from Frontend Design Skill** *(Closed)*
    An older, closed PR that removed a specific stylistic recommendation from an internal frontend design skill prompt. 
*   **PR #18217: feat(plugins): add /planwith command** *(Closed)*
    A previously closed feature attempt to add inline arguments to plan mode (e.g., `/planwith "prompt"`) to reduce the two-step friction of toggling plan mode before typing a prompt.

### 5. Feature Request Trends
*   **Accessibility & RTL Support:** There is a massive ongoing push for native Right-to-Left (RTL) rendering for languages like Hebrew and Arabic across both the CLI and Claude Desktop/Cowork (Issues #38005, #16814).
*   **Remote Control Resiliency:** Users want a failure-resistant session model for mobile Remote Control, specifically asking for sessions to survive hibernation and auto-reattach gracefully (#78784).
*   **UI & Context Signals:** Requests for Claude to autonomously change the session color mid-session to indicate internal state or context shifts dynamically (#80699).
*   **Multi-Connector Support:** High demand to support multiple accounts from the same connector (e.g., multiple GitHub orgs/workspaces) simultaneously in Claude Code on the web (#27302).

### 6. Developer Pain Points
*   **Unstable Tool Availability:** The most glaring pain point right now is invisible configuration changes. Developers are frustrated that task management tools (`TaskCreate`, `TodoWrite`) and newly integrated models (`Fable 5`) are silently disabled or gated behind fake "usage credit" requirements, breaking highly scripted automation.
*   **Terminal/TUI Interference:** Developers frequently report terminal breakage. Whether it's VS Code focus sequences leaking into the prompt, LaTeX breaking markdown parsing, or random characters spawning in the TUI, terminal rendering bugs are actively disrupting manual coding workflows. 
*   **Broken Agentic Loops:** Background tasks and subagents are proving unreliable. Developers utilizing heavy background processing report that subagents idle indefinitely upon task completion, requiring manual interventions that entirely defeat the purpose of autonomous background tasks.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 24, 2026.

### 1. Today's Highlights
Codex continues its rapid iteration cycle with the rollout of Rust v0.146.0 alpha builds, bringing underlying architectural improvements alongside a massive sweep of backend and UI pull requests. The community's focus is heavily divided between highly requested Linux/Windows desktop parity features and critical performance bugs, most notably severe WMI storms and process-cleanup loops on Windows. 

### 2. Releases
*   **[rust-v0.146.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.5)**
*   **[rust-v0.146.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.4)**
*   *Note: The OpenAI team merged a high volume of foundational PRs alongside these alpha releases, focusing heavily on HTTP routing, SQLite state management, and plugin attribution.*

### 3. Hot Issues
*   **[Issue #11023](https://github.com/openai/codex/issues/11023): Codex desktop app for Linux (185 comments, 825 👍)** 
    The most requested feature by far. Users are clamoring for a native Linux desktop app, largely due to battery and thermal issues on macOS.
*   **[Issue #34260](https://github.com/openai/codex/issues/34260): Windows Desktop: unbounded taskkill.exe cleanup storm (27 comments)**
    A critical Windows bug where Codex spawns hundreds of lingering `taskkill.exe` and `conhost.exe` processes, exhausting WMI provider quotas and degrading system performance.
*   **[Issue #32925](https://github.com/openai/codex/issues/32925): Browser plugins fail with `Cannot redefine property: process` (57 comments)**
    A confirmed bug in Desktop v26.707 where bundled browser and Chrome plugin integrations crash upon initialization.
*   **[Issue #17827](https://github.com/openai/codex/issues/17827): Customizable status line for TUI (32 comments, 122 👍)**
    Users want feature parity with Claude Code’s terminal UI, specifically requesting a customizable status line to track token usage, context limits, and git branches.
*   **[Issue #33776](https://github.com/openai/codex/issues/33776): ChatGPT.exe spawns hundreds of processes causing DWM degradation (21 comments)**
    Another severe Windows regression related to #34260, resulting in massive WMI failure storms and Desktop Window Manager (DWM) degradation.
*   **[Issue #4003](https://github.com/openai/codex/issues/4003): Patched files have mixed line endings on Windows (26 comments)**
    A long-standing issue where Codex tool calls fail to respect existing CRLF/LF line endings, causing messy git diffs for Windows developers.
*   **[Issue #24948](https://github.com/openai/codex/issues/24948): Session logs grow to 700MB-2GB (19 comments)**
    The TUI is experiencing unbounded log file growth due to repeated history compaction and raw tool outputs, straining local storage.
*   **[Issue #33493](https://github.com/openai/codex/issues/33493): Local compaction v2 retains unbounded image payloads (4 comments)**
    Image-heavy threads get stuck in an infinite auto-compaction loop because the system fails to drop `input_image` payloads.
*   **[Issue #34014](https://github.com/openai/codex/issues/34014): Standalone Windows app triggers WMI Provider Host 90-100% CPU (21 comments)**
    The native Windows app pegs CPU at 100% via WMI when opening certain projects, though the exact same project runs fine in the VS Code extension.
*   **[Issue #34967](https://github.com/openai/codex/issues/34967): Regression: Automatic approval broken for all GPT-5 models (3 comments)**
    A fresh regression in Windows Desktop v26.715 that disables automatic sandbox approvals for GPT-5 models, frustrating Pro/Plus users.

### 4. Key PR Progress
*   **[PR #35011](https://github.com/openai/codex/pull/35011): Keep side conversations open when switching threads**
    Introduces a `ctrl-/` shortcut to toggle between side conversations and parent threads without losing context.
*   **[PR #35013](https://github.com/openai/codex/pull/35013): Support incremental replay of updated thread items**
    Optimizes state retrieval by tracking rollouts, allowing callers to read thread updates incrementally without replaying entire sessions.
*   **[PR #31781](https://github.com/openai/codex/pull/31781): Bound executor-controlled HTTP response buffering**
    Implements vital security bounds on the remote exec-server to prevent untrusted peers from flooding the app-server with oversized JSON-RPC frames.
*   **[PR #35016](https://github.com/openai/codex/pull/35016): Add trusted plugin script attribution**
    Enhances plugin security by resolving script commands to verified plugin IDs and normalized paths.
*   **[PR #34991](https://github.com/openai/codex/pull/34991): Allow omitting MCP tool prefixes per server**
    Adds granular configuration to optionally drop the legacy `mcp__` namespace prefix for specific servers, cleaning up the tool surface.
*   **[PR #34997](https://github.com/openai/codex/pull/34997): Warn when skill catalogs exceed their context budget**
    Surfaces warnings to the user when enabled skills exceed the model's context window, forcing descriptions to be truncated or omitted.
*   **[PR #34986](https://github.com/openai/codex/pull/34986): Enforce single-writer ownership for paginated threads**
    Implements filesystem locks to prevent concurrent write corruptions when multiple app-server processes access paginated threads.
*   **[PR #34979](https://github.com/openai/codex/pull/34979): Infer the bundled Claude Code plugin marketplace**
    Improves interoperability by automatically mapping plugins from the `claude-code-plugins` repository to their proper marketplace source.
*   **[PR #34994](https://github.com/openai/codex/pull/34994): Honor the configured SQLite home across state consumers**
    Fixes state persistence inconsistencies by enforcing a unified SQLite configuration path across all consumers.
*   **[PR #35000](https://github.com/openai/codex/pull/35000): Make TUI turn interrupts nonblocking**
    Improves TUI responsiveness by dispatching turn interrupts in the background, allowing continuous processing of thread events.

### 5. Feature Request Trends
*   **Cross-Platform Desktop Parity:** There is a massive demand to expand desktop availability. Linux users desperately want a native app ([Issue #11023](https://github.com/openai/codex/issues/11023)), while Windows users are requesting expanded Remote Control capabilities from Windows-to-Windows and Windows-to-Android ([Issue #34028](https://github.com/openai/codex/issues/34028), [Issue #31786](https://github.com/openai/codex/issues/31786)).
*   **TUI Customization & Metadata:** CLI users are pushing for richer terminal experiences, specifically requesting live status bars for rate limits/context ([Issue #17827](https://github.com/openai/codex/issues/17827)) and terminal tab syncing with thread names ([Issue #31124](https://github.com/openai/codex/issues/31124)).
*   **Session & Context Management:** As threads grow longer, users want better workspace organization. Requests include grouping remote machines logically by project ([Issue #31561](https://github.com/openai/codex/issues/31561)) and fixing Mac-to-Mac remote UI sidebars ([Issue #26640](https://github.com/openai/codex/issues/26640)).

### 6. Developer Pain Points
*   **Windows WMI Storms & Process Leaks:** The standalone Windows app is severely strained by unbounded process loops. Users are consistently reporting `taskkill` storms and 100% CPU usage via WMI Provider Hosts, making the app nearly unusable on Windows without switching to the VS Code extension.
*   **Unbounded Storage Growth:** Both CLI and Desktop users are experiencing massive local storage bloat. Session logs are ballooning to gigabytes due to raw tool outputs and failed image-compaction loops.
*   **Model & Rate Limit Quirks:** Developers are frustrated by ghost rate-limit consumption on startup ([Issue #22073](https://github.com/openai/codex/issues/22073)), mysterious downgrading of subscription tiers in the CLI ([Issue #32344](https://github.com/openai/codex/issues/32344)), and sudden disappearances of new models like `gpt-5.6-sol` ([Issue #34027](https://github.com/openai/codex/issues/34027)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the community digest for the Gemini CLI project based on the latest GitHub activity.

# Gemini CLI Community Digest (2026-07-24)

## 1. Today's Highlights
The Gemini CLI ecosystem sees the release of **v0.52.0-nightly**, introducing a critical credential caching fix and a new eval coverage reporting command. The engineering team is doubling down on autonomous capabilities with the rollout of a new headless "Antigravity" code generation pipeline designed to automatically resolve GitHub issues. Meanwhile, community discussions remain heavily focused on refining subagent reliability, enhancing Auto Memory safety, and fixing persistent terminal and authentication loop bugs.

## 2. Releases
**v0.52.0-nightly.20260723.g9681621c6** 
*   **Credential Stability:** `fix(core)` sequentially verifies cached credentials and restores the `GOOGLE_APPLICATION_CREDENTIALS` fallback, smoothing out the local auth experience ([Release Notes](https://github.com/google-gemini/gemini-cli/releases)).
*   **Eval Tooling:** `feat(evals)` introduces a new eval coverage report command to better track agent testing.

## 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **#22323 [OPEN]** Subagent recovery after MAX_TURNS is reported as GOAL success. This P1 bug is critical because it masks agent interruptions, making the CLI incorrectly report that an analysis was completed successfully when it actually timed out.
*   **#21409 [OPEN]** Generalist agent hangs. A highly disruptive issue (8 👍) where simple tasks (like folder creation) cause the generalist subagent to hang indefinitely, forcing users to manually disable subagents to keep working.
*   **#24353 [OPEN]** Robust component-level evaluations. This EPIC tracks the expansion of behavioral evals to cover all 6 supported Gemini models, aiming to systematically eliminate behavioral regressions in agents.
*   **#22745 [OPEN]** Assess AST-aware file reads. A feature investigation into whether AST (Abstract Syntax tree) mapping can reduce token noise and improve the agent's ability to read method bounds accurately.
*   **#21968 [OPEN]** Gemini does not use skills enough. Users report that the model rarely triggers custom skills or subagents autonomously, requiring explicit user instruction to utilize them properly.
*   **#26522 [OPEN]** Auto Memory infinite retries. The memory agent gets stuck looping over "low-signal" sessions indefinitely, attempting to process them repeatedly instead of discarding them.
*   **#26525 [OPEN]** Auto Memory redaction. A security-focused issue requesting deterministic redaction of secrets *before* local transcripts are sent to the extraction model, rather than relying on the model to self-redact.
*   **#25166 [OPEN]** Shell execution stuck. A frustrating core bug where the terminal hangs showing "Awaiting user input" long after a simple shell command has finished executing. 
*   **#24246 [OPEN]** 400 error with > 128 tools. Users integrating heavily via MCP encounter hard API limits when the tool scope isn't automatically constrained by the agent.
*   **#22672 [OPEN]** Destructive agent behavior. Community members request guardrails to prevent the agent from executing dangerous Git commands (like `git reset --force`) when safer alternatives exist.

## 4. Key PR Progress
Recent pull requests highlight a strong push toward infrastructure, security, and UI stability:

*   **#28434 / #28433 / #28432 [OPEN]** The **Antigravity Agent Pipeline**: A massive set of PRs introducing a headless, server-side agent runner with Firestore dual-locking, iterative bug-fixing loops, and automated PR generation from GitHub issues.
*   **#28519 [OPEN]** Prevents an infinite authentication loop by properly awaiting the asynchronous saving of `oauth_creds.json` before forcing consent.
*   **#28509 [OPEN]** Fixes a context leak by filtering out internal "thought parts" (`thought: true`) from historical context when context management is disabled.
*   **#28183 [OPEN]** A highly requested VS Code companion fix that preserves terminal keyboard focus when closing diff tabs, preventing users from having to click back into the terminal after every file edit.
*   **#28481 [OPEN]** Resolves an MCP OAuth token refresh failure by properly utilizing the stored client ID during dynamic client registration.
*   **#28517 [OPEN]** Enforces HTTPS for `GoogleCredentialsAuthProvider` to block potential cleartext leakage of Application Default Credentials (ADC).
*   **#28446 [OPEN]** Swaps the underlying network library for native `fetch` during OAuth token exchange, resolving a "Premature close" network error common on headless VPS environments.
*   **#28515 [CLOSED]** Upgrades `body-parser` dependency to patch a recently identified security vulnerability.
*   **#28411 [OPEN]** Improves developer relations by configuring the triage agent to post explanatory comments *before* auto-closing issues, giving users a chance to provide missing context.
*   **#28485 [OPEN]** Adds the upcoming `gemini-3.5-flash` and `gemini-3.6-flash` models to the interactive CLI model selector.

## 5. Feature Request Trends
*   **AST-Aware Codebase Navigation:** Growing demand for integrating AST parsing tools (like `tilth` or `glyph`) to allow agents to read specific code blocks precisely, drastically reducing token waste and misaligned reads (Issues #22745, #22746).
*   **Subagent Trajectory Transparency:** Users and maintainers want the ability to easily view, share, and debug subagent "thought processes" and actions via existing tools like `/chat share` (Issue #22598).
*   **Procedural Guardrails:** Strong requests for deterministic safety mechanisms that prevent the model from autonomously executing destructive git/database commands (Issue #22672).

## 6. Developer Pain Points
*   **Agent State & Hanging:** A recurring frustration is the agent "hanging" indefinitely. This happens during simple shell executions waiting for phantom inputs (#25166) or when deferring to subagents that fail to return control gracefully (#21409).
*   **Auto Memory Overhead:** The Auto Memory system currently requires heavy babysitting, suffering from infinite retry loops on low-signal data (#26522) and silently dropping malformed memory patches (#26523).
*   **Authentication Friction:** Despite recent patches, users—especially those on headless servers—are still fighting upstream battles with OAuth token exchanges, MCP token refreshes, and infinite login loops.
*   **Littering of Temp Files:** When barred from executing certain shell scripts, the agent compensates by generating multiple temporary edit scripts scattered randomly across the workspace, requiring manual cleanup before commits (#23571).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for July 24, 2026.

### 1. Today's Highlights
GitHub Copilot CLI rolled out version **v1.0.74**, bringing official support for Open Plugin Spec v1 and `mcp.json` configurations, alongside improved resilience for IDE integrations during MCP reloads. Community focus remains heavily centered on Model Context Protocol (MCP) stability, with developers actively reporting edge cases ranging from OAuth tool visibility issues to BigInt serialization failures. Meanwhile, context window management continues to be a critical pain point, as large attachments and binary diffs frequently wedge sessions past the CAPI 5MB native limit.

### 2. Releases
**v1.0.74** (Released 2026-07-23)
This release focuses on extensibility and IDE reliability:
* **Added:** Support for Open Plugin Spec v1 plugin manifests and `mcp.json` configuration.
* **Improved:** Subagent timelines now clearly identify whether prompts originated from the main agent or another subagent.
* **Fixed:** IDE integration now reconnects reliably when the CLI reloads MCP servers or changes its working directory.
* **Fixed:** Resolved an edge case where typing `?` while the `/search` bar was open inputted it as text instead of opening the quick help menu.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

1. **[#4097](https://github.com/github/copilot-cli/issues/4097) `apply_patch` permanently breaks session with binary deletions** (👍 5): Deleting a large binary file stores the entire file content as a textual diff in the session history. This pushes subsequent requests over the CAPI 5MB limit, permanently wedging the session.
2. **[#4143](https://github.com/github/copilot-cli/issues/4143) CLI should inherit VS Code MCP tools** (👍 5): Users want CLI sessions attached to VS Code to automatically inherit MCP tools (like MSSQL or Anthropic tools) already installed in the IDE environment.
3. **[#1688](https://github.com/github/copilot-cli/issues/1688) Add configurable auto-compaction threshold** (👍 5): When using high-capacity models (e.g., Claude Opus 4.6), context window bloat degrades performance long before the CLI's default compaction triggers. Users are requesting a configurable threshold in `config.json`.
4. **[#3767](https://github.com/github/copilot-cli/issues/3767) Oversized attachments wedge session** (👍 1): If an attachment exceeds the 5MB CAPI Responses limit, the session permanently fails with no native recovery mechanism. 
5. **[#4016](https://github.com/github/copilot-cli/issues/4016) BYOK rejected in `--acp` mode** (👍 4): Custom providers configured via `COPILOT_PROVIDER_*` work in standard piped mode but fail with a `-32000 Authentication required` error when using Agent Client Protocol (`--acp`).
6. **[#3534](https://github.com/github/copilot-cli/issues/3534) `/copy` fails on WSL2 (ARM64)** (👍 4): Clipboard operations fail with `clip.exe exited with code 1` due to a quoting bug in the `cmd.exe` wrapper introduced in v1.0.55.
7. **[#4206](https://github.com/github/copilot-cli/issues/4206) Environment footer stuck on "Loading:"** (👍 2): Under organizational MCP policies, the built-in GitHub MCP handshake stalls, causing the status UI to permanently display "Loading..." despite tools actually being ready.
8. **[#4165](https://github.com/github/copilot-cli/issues/4165) `copilot --resume` hangs on Windows** (👍 1): Resuming a session directly from PowerShell causes the CLI to hang indefinitely at "Resuming session..." without throwing an error.
9. **[#4122](https://github.com/github/copilot-cli/issues/4122) Subagents fail to resolve relative markdown links** (👍 2): In `.agent.md` files, relative paths for supporting docs are resolved against the current working directory (cwd) instead of the agent file's actual directory.
10. **[#4211](https://github.com/github/copilot-cli/issues/4211) BigInt serialization fails in MCP responses** (👍 0): If an MCP server returns a large number (BigInt), the CLI crashes the ongoing task with a `TypeError: Do not know how to serialize a BigInt`.

### 4. Key PR Progress
*(Note: Only 2 PRs saw activity in the last 24 hours. Here is their status, alongside critical bug-fix PRs referenced by hot issues.)*

1. **[PR #4228](https://github.com/github/copilot-cli/pull/4228) (CLOSED) Withdrawn: Fix for #3534** 
   The author withdrew a PR intended to fix the WSL2 `/copy` clipboard bug, noting it mistakenly targeted documentation rather than the private clipboard runtime implementation.
2. **[PR #3163](https://github.com/github/copilot-cli/pull/3163) (OPEN) ViewSonic monitor**
   A miscellaneous PR referencing runner configurations for hardware-related tracking issues.
3. **[Issue #4234](https://github.com/github/copilot-cli/issues/4234) Pending PR: Plugin MCP project directory resolution**
   A highly requested bug where MCP servers launched from plugins use the installation root as the cwd. Core architectural changes are required via an internal PR to ensure child processes receive the active workspace path.
4. **[Issue #4189](https://github.com/github/copilot-cli/issues/4189) Pending PR: Accurate MCP context footprint reporting**
   Requires internal updates so that the `/context` command accurately computes the *deferred* cost of MCP tool schemas, rather than misleading users with the un-deferred footprint.
5. **[Issue #3713](https://github.com/github/copilot-cli/issues/3713) (CLOSED) Pending PR: `updatedPrompt` in userPromptSubmitted hook**
   Feature request closed and mapped to internal development, allowing hooks to actively modify or replace prompt text before the model processes it.

### 5. Feature Request Trends
* **Advanced Context Management:** Strong demand for granular control over context limits, specifically user-defined auto-compaction thresholds (#1688) and better memory management when large files are processed (#3767, #4097).
* **Deeper IDE & Editor Synchronization:** Users want a seamless bridge between the CLI and their IDEs. Inheriting VS Code MCP tools automatically (#4143) and keeping MCP tool lists synced mid-turn (#3125) are top priorities.
* **MCP Protocol Maturity:** Requests to support advanced MCP primitives like resource subscriptions/notifications (#3073) and resolving tool visibility post-OAuth (#4089).
* **ACP (Agent Client Protocol) Parity:** Developers using external editors (like Zed) want full feature parity, specifically requesting `usage_update` emissions to track AI credits and context limits natively (#4233).

### 6. Developer Pain Points
* **Session "Wedging" & Compaction:** The 5MB CAPI limit is a major source of frustration. Unhandled large binaries or oversized attachments permanently crash sessions, and the built-in compaction triggers too late for complex, multi-step agent workflows.
* **MCP State & Context Discrepancies:** Developers are frustrated by invisible MCP states. Tools updated mid-turn aren't recognized by the model immediately (#3125), OAuth authentications silently fail to expose tools (#4089), and context size reporting is wildly inaccurate (#4189).
* **UI & Terminal Hangs:** Cross-platform terminal rendering issues remain a thorn in developers' sides, with severe hangs reported during session resumes on Windows (#4165), broken UI elements for failed MCP tools (#4238), and unresponsive Ctrl+C interrupts (#4235).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest — 2026-07-24

## 1. Today's Highlights
The Kimi Code CLI community is seeing a massive surge in active development, with 17 open PRs focused heavily on fixing Windows compatibility, stabilizing MCP (Model Context Protocol) integrations, and improving shell interactions. On the issues front, developers are eager to push the CLI beyond single-session desktop use, heavily requesting remote control capabilities, mobile synchronization, and multi-agent cost optimizations.

## 2. Releases
No new releases were published in the last 24 hours. 

## 3. Hot Issues
Here are the most noteworthy issues raised and updated by the community:

*   **#1282 [enhancement] Feature Request: Remote Control - Continue local sessions from any device** (👍 16, 💬 6)
    A highly-upvoted request to enable remote control of local CLI sessions from mobile devices or browsers. *Why it matters:* This would bridge the gap between local development environments and on-the-go accessibility, a major workflow pain point for developers stepping away from their desks. ([Link](https://github.com/MoonshotAI/kimi-cli/issues/1282))
*   **#2553 /plugins crashes with TypeError when 2+ plugins are installed (v0.29.0, Windows)**
    Installing multiple plugins crashes the CLI's management screen due to a `TypeError`. *Why it matters:* This is a critical blocker for the plugin ecosystem on Windows, preventing users from effectively utilizing multiple toolsets simultaneously. ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2553))
*   **#2538 [Bug] kimi-datasource plugin worker pool blocks all sessions on timeout**
    When multiple sessions query the `yahoo_finance` API via the `kimi-datasource` plugin, a timeout in one session deadlocks the worker pool, freezing all concurrent sessions. *Why it matters:* Exposes a critical flaw in plugin worker isolation, heavily impacting multi-tasking workflows. ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2538))
*   **#2534 [bug] Model API error 400 Validation: Unsupported parameter(s): `prompt_cache_key`**
    The latest update broke compatibility with third-party APIs (like Nvidia NIM) by incorrectly passing Moonshot-specific parameters. *Why it matters:* Significantly impacts developers building atop non-Moonshot models, restricting API provider choices. ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2534))
*   **#2533 Feature Request: Per-agent model selection for sub-agents**
    Users want the ability to assign different models to sub-agents, rather than inheriting the session's default. *Why it matters:* Unlocks cost-tiered multi-agent workflows (e.g., using GPT-4o for complex logic and GPT-4o-mini for basic file edits). ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2533))
*   **#2545 [enhancement] Synchronize queued prompts to backend to improve phone user experience with Kimi Web**
    Queued prompts fail to send when a mobile browser is backgrounded or the phone is locked. *Why it matters:* Mobile continuity is broken, forcing users to keep their screens active to ensure prompts are processed. ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2545))
*   **#2552 [Bug][Kimi Desktop] Poor font kerning (letter spacing) for Cyrillic text in chat markdown**
    Markdown rendering of Cyrillic text shows broken spacing on Windows. *Why it matters:* A localized UX bug that makes AI-generated text difficult to read for non-Latin alphabet users. ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2552))

## 4. Key PR Progress
The development team and contributors submitted a high volume of structural and bugfix PRs today:

*   **#2535 fix(llm): scope prompt cache keys to Moonshot APIs** by [Sanjays2402](https://github.com/MoonshotAI/kimi-cli/pull/2535)
    Fixes the critical `400 Validation` error (#2534) by ensuring third-party endpoints don't receive Moonshot-specific cache keys.
*   **#2548 fix(mcp): reuse initialized client sessions** by [lihailong00](https://github.com/MoonshotAI/kimi-cli/pull/2548)
    Optimizes MCP performance by keeping initialized client sessions open for the toolset's lifetime, reusing them for repeated tool calls rather than re-initializing.
*   **#2547 fix(windows): configure stdio as utf-8** by [lihailong00](https://github.com/MoonshotAI/kimi-cli/pull/2547)
    A major fix for Windows users, safely reconfiguring stdout/stderr to UTF-8 to prevent rendering crashes on strict `cp936` streams.
*   **#2544 fix(kaos): terminate local process trees** by [lihailong00](https://github.com/MoonshotAI/kimi-cli/pull/2544)
    Isolates KAOS commands into their own process groups, ensuring that cancellations or timeouts properly kill the entire local process tree. 
*   **#2542 fix(logging): isolate Windows process log files** by [lihailong00](https://github.com/MoonshotAI/kimi-cli/pull/2542)
    Prevents concurrent Windows Python processes from causing race conditions by switching logs to a `kimi.<pid>.log` naming convention.
*   **#2551 fix(shell): search past file completion limit** by [lihailong00](https://github.com/MoonshotAI/kimi-cli/pull/2551)
    Fixes `@` file completion, allowing users to search beyond the first 1000 filesystem entries for non-Git queries while keeping memory budgets bounded.
*   **#2537 fix(shell): support numeric keypad input** by [lihailong00](https://github.com/MoonshotAI/kimi-cli/pull/2537)
    Adds support for DEC application-keypad sequences emitted by Windows Terminal, fixing numeric keypad input.
*   **#2540 fix(media): normalize ICO images to PNG** by [lihailong00](https://github.com/MoonshotAI/kimi-cli/pull/2540)
    Ensures image stability by converting `.ico` files to `.png` before transmitting them to the LLM, preventing provider-side processing errors.
*   **#2549 fix(shell): index tracked vendor files** by [lihailong00](https://github.com/MoonshotAI/kimi-cli/pull/2549)
    Allows Git-tracked files under `vendor/` to be eligible for `@` file completion while still filtering out `node_modules` and untracked files.
*   **#2530 fix(shell): stop blocking until timeout when a detached child holds the pipes** by [ayaangazali](https://github.com/MoonshotAI/kimi-cli/pull/2530)
    Fixes an issue where running background daemons (e.g., `some_daemon &`) would block the CLI's stdout/stderr EOF checks until a timeout occurred.

## 5. Feature Request Trends
Analyzing the recent issues, two primary feature trends emerge:
1.  **Cross-Device & Mobile Continuity:** Users want to decouple the execution engine from the UI. Requests for remote session management (#1282) and backgrounded web prompt queuing (#2545) indicate strong demand for "fire-and-forget" local processing that can be monitored and interacted with via mobile or web interfaces.
2.  **Cost-Tiered Multi-Agent Orchestration:** As multi-agent workflows become more common, developers want granular control over resource allocation. The request for per-agent model selection (#2533) highlights the need to route cheap tasks to lightweight models and complex tasks to heavy models within the same CLI session.

## 6. Developer Pain Points
Based on today's data, developers are experiencing recurring frustrations in three main areas:
*   **Windows Environment Stability:** The CLI struggles with native Windows terminal handling. A large volume of PRs today target UTF-8 encoding crashes, log file locking race conditions, cp936 strict stream failures, and numeric keypad blind spots. 
*   **Third-Party API Compatibility:** Breaking changes frequently impact developers using non-official endpoints (like Nvidia NIM). Tight coupling between Moonshot-native features (like `prompt_cache_key`) and the generic LLM layer causes hard crashes for custom setups.
*   **Plugin & MCP Reliability:** Developers running multiple plugins or heavily utilizing MCP servers concurrently are hitting deadlocks (e.g., `kimi-datasource` worker pool blocking) and UI crashes. There is a clear need for stricter worker isolation and robust plugin lifecycle management.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 24, 2026.

### 1. Today's Highlights
OpenCode's daily activity was dominated by intensive work on the V2 runtime architecture and the Desktop app (v1.18.x). Core contributors focused on stabilizing provider integrations—particularly fixing tool-calling argument truncation and billing logic for content filters—while the community voiced strong demand for better sub-agent visibility and local model discovery.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion:

*   **Auto-discover models from local provider endpoints** ([#6231](https://github.com/anomalyco/opencode/issues/6231))
    *Why it matters:* With 187 upvotes and 30 comments, this is the highest-traction issue. Users are frustrated by the need to manually configure `opencode.json` for local OpenAI-compatible servers (Ollama, LM Studio) and are pushing for automated endpoint discovery.
*   **Auto-compaction loop stops generation** ([#30680](https://github.com/anomalyco/opencode/issues/30680))
    *Why it matters:* A critical regression where the tool enters an infinite compaction loop, consuming tokens without generating responses even in fresh directories.
*   **Windows ARM64 TUI initialization failure** ([#19130](https://github.com/anomalyco/opencode/issues/19130))
    *Why it matters:* While CLI commands work on Windows 11 ARM64, the TUI crashes on startup due to a `bun:ffi` dynamic link error, blocking native development on ARM devices.
*   **False positive content-filter results in $20 charge for blocked Output** ([#35475](https://github.com/anomalyco/opencode/issues/35475))
    *Why it matters:* A severe billing bug. OpenCode's safety guardrails are blocking benign queries from `claude-fable-5`, yet users are still being billed ~$6.69 per cache write despite receiving zero output.
*   **Enter key fails during permission granting** ([#27875](https://github.com/anomalyco/opencode/issues/27875))
    *Why it matters:* A breaking UI bug where the Enter key stops working during sub-agent permission prompts, completely locking the user out of the workflow.
*   **Infinite loop after tool calls complete (Zen/Big-pickle)** ([#26220](https://github.com/anomalyco/opencode/issues/26220))
    *Why it matters:* The agent successfully finishes its tool execution but hangs indefinitely afterward, forcing developers to manually kill the process.
*   **Math equations not rendering in Desktop app** ([#37326](https://github.com/anomalyco/opencode/issues/37326))
    *Why it matters:* A regression introduced in recent Desktop versions where both inline and block LaTeX equations are outputted as raw text instead of being rendered.
*   **OpenAI tool arguments truncation breaks V2 execution** ([#36766](https://github.com/anomalyco/opencode/issues/36766))
    *Why it matters:* OpenAI's native response path intermittently finalizes tool calls with malformed JSON. OpenCode V2 catches the error but hard-crashes the entire execution thread.
*   **"Always Allow" permission acts like "Allow Once"** ([#37880](https://github.com/anomalyco/opencode/issues/37880))
    *Why it matters:* A frustrating Desktop UX bug where setting a tool to "Always Allow" resets immediately, requiring constant manual approval for repetitive tasks.
*   **Subagent termination fails to kill child processes** ([#38564](https://github.com/anomalyco/opencode/issues/38564))
    *Why it matters:* When an agent task is cancelled, spawned background scripts (like PowerShell disk scanners) continue running silently, creating severe I/O abuse and security risks.

### 4. Key PR Progress
Active development today focused heavily on LLM provider standardization and V2 architectural refactors:

*   **[feat(core): render CodeMode catalog deltas from structured snapshots](https://github.com/anomalyco/opencode/pull/38183)** (Open)
    Upgrades the core instruction source to use semantic skill-style prompting instead of basic string replacement for the CodeMode catalog.
*   **[fix(provider): preserve Alibaba DeepSeek effort](https://github.com/anomalyco/opencode/pull/38566)** (Closed/Merged)
    Routes DeepSeek V4 Pro and Flash through the OpenAI-compatible runtime to preserve native `reasoning_effort` fields while applying cache controls.
*   **[refactor(tools): unify tool APIs and result handling](https://github.com/anomalyco/opencode/pull/38367)** (Closed/Merged)
    A massive V2 refactor establishing a canonical vocabulary (`Tool.Tool`, `tool`) across authored tools, provider schemas, execution, and terminal results.
*   **[fix(ai): keep tools when Gemini tool choice is none](https://github.com/anomalyco/opencode/pull/38556)** (Closed/Merged)
    Resolves an issue where setting `toolChoice` to "none" stripped tool definitions, breaking prompt-cache hits. Now temporarily disables function calling without losing context.
*   **[feat: add RTL text support for Persian/Farsi](https://github.com/anomalyco/opencode/pull/38559)** (Closed/Merged)
    Implements Right-to-Left `dir="auto"` text support across markdown and UI message containers for better internationalization.
*   **[chore: merge dev into v2](https://github.com/anomalyco/opencode/pull/38563)** (Closed/Merged)
    Integrates legacy app server protocols, health fallbacks, and Mistral fixes into the V2 branch while keeping the legacy runtime cleanly deprecated.
*   **[fix(core): isolate tool hook outcomes](https://github.com/anomalyco/opencode/pull/38571)** (Closed/Merged)
    Hardens the tool execution path by isolating `execute.after` plugin mutations from core-owned outcome states.
*   **[feat(tui): expose native OpenCode theme](https://github.com/anomalyco/opencode/pull/38536)** (Open)
    Introduces `DEFAULT_THEMES_V2` with a canonical native theme (`opencode-v2`) while maintaining backward compatibility with legacy theme imports.
*   **[fix(core): soft-fail realPath in bash advisory arg scan](https://github.com/anomalyco/opencode/pull/38562)** (Open)
    Prevents the V2 shell tool from fatally crashing when encountering absolute paths to live Unix-domain sockets during realPath advisory scans.
*   **[fix(observability): dispose AppRuntime before process.exit to flush OTel spans](https://github.com/anomalyco/opencode/pull/30089)** (Closed/Merged)
    Fixes a telemetry bug where `process.exit()` killed the app before OpenTelemetry spans could be flushed to the server.

### 5. Feature Request Trends
Analyzing recent issues, developers are asking for three major enhancements:
1.  **Sub-agent visibility and controls:** Users want dedicated UI views for sub-agent outputs, reasoning levels exposed in the interface, and mobile-app connectivity to monitor terminal tasks remotely ([#26266](https://github.com/anomalyco/opencode/issues/26266), [#37267](https://github.com/anomalyco/opencode/issues/37267), [#33163](https://github.com/anomalyco/opencode/issues/33163)).
2.  **Seamless Local LLM Discovery:** The community wants zero-friction integration with local environments, specifically eliminating manual JSON configs for frequently changing local models.
3.  **Broader Free Provider Integration:** Direct, out-of-the-box support for new free gateways like LLM7 and Aionlabs (addressed in PR [#38551](https://github.com/anomalyco/opencode/pull/38551)).

### 6. Developer Pain Points
The community is currently expressing frustration over several critical workflow blockers:
*   **Unreliable Permission Handling:** Enter-key locks ([#27875](https://github.com/anomalyco/opencode/issues/27875)) and non-persistent "Always Allow" toggles ([#37880](https://github.com/anomalyco/opencode/issues/37880)) severely disrupt autonomous workflows.
*   **Runaway Loops and Orphaned Processes:** Infinite loops during compaction ([#30680](https://github.com/anomalyco/opencode/issues/30680)) and after tool calls ([#26220](https://github.com/anomalyco/opencode/issues/26220)) degrade trust, while un-killable background scripts from cancelled sub-agents pose operational hazards ([#38564](https://github.com/anomalyco/opencode/issues/38564)).
*   **Billing for Blocked Content:** Paying full cache and generation costs for responses that OpenCode's own content filters ultimately suppress is a major point of contention ([#35475](https://github.com/anomalyco/opencode/issues/35475)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community on 2026-07-24.

### 1. Today's Highlights
Pi developers focused heavily on stabilizing provider integrations and refining the Terminal User Interface (TUI). Key efforts include removing hardcoded token limits for `llama.cpp`, addressing Linux clipboard (`wl-copy`) fallback failures, and adding native support for the SiliconFlow aggregator. Under the hood, maintainers merged critical fixes to prevent TUI crashes during streaming and laid the groundwork for JSON-schema constrained tool sampling.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
1. **[qwen3.8-max-preview reasoning effort mismatch](https://github.com/earendil-works/pi/issues/6951)** - Pi's default reasoning tiers (`minimal`, `low`, `medium`, `high`) do not match Qwen's API limits (`low`, `medium`, `xhigh`), causing configuration failures for new Qwen models.
2. **[Restore `models.json` hot-reload](https://github.com/earendil-works/pi/issues/6999)** - A recent regression in `ModelRuntime` (v0.80.8+) broke the mid-session hot-reloading of custom models. Users now have to restart Pi to apply changes made to `models.json`. 
3. **[Llama provider hardcoded `maxTokens` limit](https://github.com/earendil-works/pi/issues/6994)** - The built-in `llama.cpp` provider artificially caps output tokens at 16,384, severely restricting local model generations regardless of the actual context window.
4. **[Malformed `pi` manifest crash-loops app](https://github.com/earendil-works/pi/issues/7033)** - A truthy but non-array resource field (e.g., `"skills": "./skills"` instead of `["./skills"]`) in a package manifest throws an unhandled `TypeError`, crashing Pi indefinitely at boot.
5. **[`wl-copy` false success reports](https://github.com/earendil-works/pi/issues/6872)** - When running Pi in sandboxed environments (like `bwrap`), Pi reports clipboard copy success even when `wl-copy` fails because it doesn't await the exit code, skipping necessary fallbacks.
6. **[Cloudflare AI Gateway drops provider prefix](https://github.com/earendil-works/pi/issues/7030)** - A bug in `compat.js` causes the provider prefix to be dropped when routing OpenAI models through the Cloudflare AI Gateway, resulting in failed API resolutions.
7. **[`/resume` self-reference loop](https://github.com/earendil-works/pi/issues/7029)** - Running the `/resume` command inside a session that was already resumed collapses the history picker to a single self-reference, breaking session workflows.
8. **[Native provider support for SiliconFlow](https://github.com/earendil-works/pi/issues/7013)** - Developers are requesting built-in support for SiliconFlow (an OpenRouter-style aggregator) to easily access various open-source models across global and Chinese endpoints.
9. **[Github Copilot token invalidation](https://github.com/earendil-works/pi/issues/6970)** - Pi's use of the `GitHub Copilot Plugin` OAuth flow (instead of standard device auth) is causing token invalidation when used alongside other tools like Neovim's `copilot-lsp`.
10. **[Anthropic tool-call ID collisions](https://github.com/earendil-works/pi/issues/7002)** - The normalization sanitizer for Anthropic tool-call IDs can cause collisions with long foreign IDs, potentially breaking sequential tool execution in cross-provider sessions.

### 4. Key PR Progress
1. **[PR #7036: Reload model config in picker](https://github.com/earendil-works/pi/pull/7036)** - Addresses the `models.json` hot-reload regression by refreshing the configuration directly within the model picker UI.
2. **[PR #6341: Support constrained sampling](https://github.com/earendil-works/pi/pull/6341)** - Introduces an opt-in `constrainedSampling` config allowing tools to request provider-side JSON-schema constrained tool inputs for stricter LLM grammar.
3. **[PR #7034: Use llama context for output limit](https://github.com/earendil-works/pi/pull/7034)** - Resolves the 16k token cap by dynamically deriving the `llama.cpp` output limits from each loaded model's specific context window.
4. **[PR #7015: Truncate narrow editor scroll indicators](https://github.com/earendil-works/pi/pull/7015)** - Fixes a TUI crash that occurred when rendering interactive composer borders in narrow terminals by safely truncating scroll indicators.
5. **[PR #7028: Keep `/resume` unfiltered](https://github.com/earendil-works/pi/pull/7028)** - Fixes the nested `/resume` bug, ensuring the command remains idempotent and lists all available previous sessions correctly.
6. **[PR #7009: Await `wl-copy` exit code](https://github.com/earendil-works/pi/pull/7009)** - Rectifies the clipboard bug by awaiting the `wl-copy` spawn process and properly falling through to `xclip` or `OSC 52` upon failure.
7. **[PR #7017: Experimental support for limited repainting](https://github.com/earendil-works/pi/pull/7017)** - Introduces an experimental setting to prevent the TUI from repainting entire transcripts during very long sessions, optimizing rendering performance.
8. **[PR #7018: Add `hiddenThinkingLabel` field](https://github.com/earendil-works/pi/pull/7018)** - Enables per-message thinking labels (e.g., "Thought for 3s") so users can monitor extended thinking durations and know if a model is processing or hanging.
9. **[PR #7031: Keep model registry tests offline](https://github.com/earendil-works/pi/pull/7031)** - Hardens CI pipelines by disabling network requests during model registry tests, preventing timeouts caused by external model catalog fetching.
10. **[PR #7011: Share host modules with native ESM extensions](https://github.com/earendil-works/pi/pull/7011)** - Prevents state divergence between the host and extensions by intercepting native ESM imports, forcing extensions to reuse the host's Pi modules rather than instantiating private copies.

### 5. Feature Request Trends
* **Third-party Aggregators & Gateways:** There is a strong push to natively support enterprise routing and aggregators like SiliconFlow, Cloudflare AI Gateway, and OpenAI Codex without requiring manual `models.json` overrides.
* **Granular State & Context Control:** Developers want better session and state management, highlighted by requests to isolate extension module states, prevent persistent model overwrites on startup, and safely defer extension reloads.
* **Advanced Tool & Schema Configuration:** The community is moving toward strict, predictable LLM behaviors, shown by requests for JSON-schema constrained tool sampling and standardizing optional object schemas across OpenAI-compatible providers.

### 6. Developer Pain Points
* **Local Linux/Sandbox Environments:** Developers running Pi in sandboxed environments or TTYs face recurring friction with unhandled UI exceptions (CJK text alignment) and system integrations (Wayland clipboard fallbacks).
* **Fragile Model Loading:** Startup race conditions and broken mid-session hot-reloading are causing significant friction, particularly when mapping default providers to custom local models (`llama.cpp`) or external token plans.
* **Cross-Provider Compatability Quirks:** Maintaining unified configurations across providers leads to edge cases, such as mismatched thinking level tiers (Qwen), foreign ID sanitization collisions (Anthropic), and OAuth conflicts (GitHub Copilot).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-24.

### 1. Today's Highlights
The Qwen Code community is actively pushing the boundaries of enterprise integration and CLI reliability. Major discussions today revolve around proposals for external memory and context providers, alongside significant improvements to daemon stability and resource management. Meanwhile, developers are troubleshooting recurring CI pipeline friction caused by flaky E2E tests and recent update mechanisms.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the top issues driving community discussion:

*   **#7616 [OPEN] Do we really need this many E2E tests?** ([yiliang114](https://github.com/QwenLM/qwen-code/issues/7616))
    *A major talking point.* Devs are frustrated by E2E tests failing due to non-deterministic LLM API responses and slow Docker sandboxes rather than actual code regressions. The community is calling for a restructuring of the CI pipeline.
*   **#7449 [OPEN] Proposal: Define an enterprise external-memory integration profile** ([doudouOUC](https://github.com/QwenLM/qwen-code/issues/7449))
    A high-impact feature discussion proposing a provider-neutral way to integrate external/enterprise memory systems into Qwen Code via extensions, without altering the Core API.
*   **#7590 [OPEN] WeChat channel crashes** ([Varorbc](https://github.com/QwenLM/qwen-code/issues/7590))
    Users report that configuring and sending messages via the WeChat channel causes an `Internal error` in the AcpBridge JSON-RPC session cancellation handler.
*   **#7287 [CLOSED] Auto-memory `MEMORY.md` write rejection** ([pomelo-nwu](https://github.com/QwenLM/qwen-code/issues/7287))
    An annoying core bug where `MEMORY.md` is loaded into the system prompt but isn't registered in `FileReadCache`, causing the model's first attempt to update the file to be rejected.
*   **#6806 [OPEN] Context usage percentage doesn't refresh after `/compress`** ([qwen-code-dev-bot](https://github.com/QwenLM/qwen-code/issues/6806))
    A UI/UX bug where the status line context percentage remains stuck at pre-compression values until the next prompt is sent.
*   **#6014 [OPEN] New version hides read file names** ([fantasyz](https://github.com/QwenLM/qwen-code/issues/6014))
    Users are frustrated by a UI downgrade where `read_file` messages only show "read 1 file" instead of the actual file name, reducing transparency.
*   **#7543 & #7520 [CLOSED] Update check registry errors** ([nerdalytics](https://github.com/QwenLM/qwen-code/issues/7543) | [xdfnet](https://github.com/QwenLM/qwen-code/issues/7520))
    Two related issues affecting CLI updates. One breaks `getNpmCliPath` when using the `mise` manager, and the other causes update checks to fail on npm 12 / Node.js 26 due to array parsing issues.
*   **#5736 [CLOSED] Frequent full prompt re-processing** ([fantasyz](https://github.com/QwenLM/qwen-code/issues/5736))
    Users pairing Qwen Code with local LLMs (via `llama.cpp`) noticed a caching degradation causing full prompt re-processing on simple follow-ups.
*   **#7489 [CLOSED] VS Code image attachment fails** ([kengnattakit](https://github.com/QwenLM/qwen-code/issues/7489))
    In the VS Code extension, using the file picker to attach an image inserts `@filename` as text but fails to actually pass the image data to the model.
*   **#7566 [CLOSED] Stopping a monitor triggers a notification turn** ([yiliang114](https://github.com/QwenLM/qwen-code/issues/7566))
    Stopping a monitor with `task_stop` queues a user notification that inadvertently initiates another model turn, creating unexpected loops.

### 4. Key PR Progress
Notable code contributions shaping the next version of Qwen Code:

*   **[PR #7607](https://github.com/QwenLM/qwen-code/pull/7607) feat(core): add configurable image generation models**
    Introduces a built-in, approval-gated image generation tool, allowing users to configure specific provider routes just for image outputs (`/model --image`).
*   **[PR #7471](https://github.com/QwenLM/qwen-code/pull/7471) feat(web-shell): add git mode selector for new session creation**
    Brings a unified git mode selector to the Web Shell composer, allowing users to easily create sessions in "Current branch", "New branch", or "Detached HEAD" workflows.
*   **[PR #7622](https://github.com/QwenLM/qwen-code/pull/7622) fix(acp-bridge): resource hardening for session events**
    Addresses daemon reliability (DAEMON-009/010/011) by strictly enforcing event serialization size limits and properly cleaning up orphaned event subscriptions.
*   **[PR #7620](https://github.com/QwenLM/qwen-code/pull/7620) fix(web-shell): parse 256-color and truecolor SGR sequences**
    Fixes ANSI escape sequence parsing so that 256-color and RGB truecolor outputs from shell tools render correctly in the Web Shell.
*   **[PR #7497](https://github.com/QwenLM/qwen-code/pull/7497) feat(cli): support native video input in `/learn`**
    Expands the `/learn` command to process local and HTTP video files (MP4, WebM, MOV), unlocking video-based learning and context injection for capable models.
*   **[PR #7469](https://github.com/QwenLM/qwen-code/pull/7469) feat(ci): replace broad CODEOWNERS with intelligent core review router**
    Improves repo maintenance by replacing rigid CODEOWNERS rules with a dynamic GitHub Actions workflow that routes core review requests intelligently.
*   **[PR #7268](https://github.com/QwenLM/qwen-code/pull/7268) feat(serve): Hot-reload workspace trust changes**
    Eliminates the need to restart the daemon to apply workspace trust policy updates, applying semantic trust snapshots dynamically.
*   **[PR #7302](https://github.com/QwenLM/qwen-code/pull/7302) feat(cli): reference prior sessions via `@`**
    Adds project-scoped session history to `@` mentions, injecting read-only transcript summaries from previous sessions directly into the current agent context.
*   **[PR #7531](https://github.com/QwenLM/qwen-code/pull/7531) fix(core): close force-flag gaps in destructive-git guard**
    Strengthens the safety guardrails by ensuring all spelling variations of destructive git commands (`git clean`, `git checkout --force`) are properly blocked.
*   **[PR #7580](https://github.com/QwenLM/qwen-code/pull/7580) feat: visualize ordinary-session plan execution**
    Adds a dependency graph view that visualizes Todo plans, agent executions, and transcript flows for daemon-backed sessions.

### 5. Feature Request Trends
*   **Enterprise Context & Memory:** Strong demand for official, provider-neutral architectures to inject external knowledge. Developers want to integrate centralized enterprise memory and shared context layers without modifying Qwen Core.
*   **Multi-Modal Expansion:** The community is eager to push beyond text and basic images. Native video ingestion (`/learn`) and dedicated image generation models are highly requested and actively being developed.
*   **IDE & Terminal Integration:** Users desire deeper integration with their native environments. Requests include routing shell outputs directly to the VS Code integrated terminal rather than trapping them in the chat UI.
*   **Session & Memory Lifecycles:** Managing long-running context is a priority. Features like referencing prior sessions via `@` mentions and UI visualizations of plan execution are highly sought after to manage complex agentic workflows.

### 6. Developer Pain Points
*   **CI Flakiness vs. Determinism:** The E2E testing strategy is a major source of frustration. Relying on non-deterministic LLM APIs to test deterministic code logic causes high false-positive failure rates, blocking PRs and causing noise.
*   **Update Mechanism Fragility:** Recent CLI updates have broken the update checker (`registry error`) across multiple modern environments (Node 26/npm 12 and `mise` wrappers), causing migration headaches.
*   **CLI/Terminal UI Jank:** TUI rendering bugs remain prevalent. From large blank areas after `qwen resume` and un-refreshing context percentage counters to terminal flickering in `tmux`/`alacritty`, UI polish needs attention to match competing tools.
*   **Channel Integration Stability:** Developers utilizing Qwen Code for external messaging channels (WeChat, Telegram) are encountering brittle AcpBridge implementations that fail on routine session cancellations or message routing.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek TUI (CodeWhale) for July 24, 2026.

### 1. Today's Highlights
The community is heavily focused on hardening the v0.9.1 release, with maintainers actively closing release-blocker UI/UX bugs and patching security vulnerabilities. Significant progress was made in refactoring the TUI "Work" surface into a more actionable To-do + Sub-agent bar. However, critical stop-ship bugs regarding terminal crashes and prompt byte-corruption have been flagged as immediate priorities.

### 2. Releases
**None.** No new releases were deployed in the last 24 hours. The team is currently gating the v0.9.1 release pending security scans and dependency disposition.

### 3. Hot Issues
Here are the 10 most noteworthy issues updated in the last 24h:

*   **[STOP-SHIP] TUI crashes immediately on launch ([#4716](https://github.com/Hmbown/CodeWhale/issues/4716))** - Running `codew` in macOS Terminal.app instantly returns `[Process completed]`. This is a critical bug in the v0.9.1 candidate that completely blocks launch.
*   **Prompt byte-corruption in Composer ([#4719](https://github.com/Hmbown/CodeWhale/issues/4719))** - Pasting long, multi-line prompts causes paths and text to mangle or truncate before reaching the model, breaking automated agent workflows that rely on exact string matching.
*   **v0.9.1 Security Gate ([#4713](https://github.com/Hmbown/CodeWhale/issues/4713))** - The v0.9.1 release is formally blocked until 17 open Dependabot alerts (7 high, 10 moderate) across npm dependencies are resolved. 
*   **Environment-level Tool Sandboxing ([#4042](https://github.com/Hmbown/CodeWhale/issues/4042))** - *Closed*. This tracked the runtime enforcement of tool restrictions (`--disallowed-tools`) across sub-agents and Fleet workers, significantly improving multi-agent security.
*   **Auto-switching Providers feels under-baked ([#4720](https://github.com/Hmbown/CodeWhale/issues/4720))** - The runtime unexpectedly switched from DeepSeek to Zhipu AI (GLM-5.2). The community is asking for more intentional and transparent provider routing logic.
*   **Legacy "DeepSeek fallback" UI Mislabeling ([#4717](https://github.com/Hmbown/CodeWhale/issues/4717))** - The settings menu prominently displays a DeepSeek fallback model even when an alternative provider (like ZAI) is actively running, highlighting legacy code assumptions.
*   **Brazilian Keyboard AltGr Conflict ([#4723](https://github.com/Hmbown/CodeWhale/issues/4723))** - On Windows ABNT2 layouts, typing `/` (AltGr+Q) falsely triggers the help overlay because the OS reports it as Ctrl+Alt+Q.
*   **Settings Menu Density & Audit ([#4721](https://github.com/Hmbown/CodeWhale/issues/4721))** - Opened to track a holistic audit of the configuration menus to remove inert rows, mislabeled labels, and confusing option density.
*   **High Information Density in Transcripts ([#4718](https://github.com/Hmbown/CodeWhale/issues/4718))** - Users report that reasoning states are too noisy (e.g., "reasoning live", "reasoning hidden; model is still working") and the "Option+V" hint repeats on every tool card.
*   **Replacing the generic "Work" surface ([#4700](https://github.com/Hmbown/CodeWhale/issues/4700))** - *Closed*. Influenced the new v0.9.1 UI direction to hide completed internal operations and display strictly user-owned To-dos and active Sub-agents.

### 4. Key PR Progress
Here are the 10 most impactful PRs updated in the last 24h:

*   **[OPEN] Show complete edit previews in details ([#4722](https://github.com/Hmbown/CodeWhale/pull/4722))** - Refines the TUI by keeping the compact `edit_file` approval card bounded, while lazily rendering the full `-/+` search/replace diff in the Alt+V pager.
*   **[OPEN] Archive completed background shell output ([#4724](https://github.com/Hmbown/CodeWhale/pull/4724))** - Cleans up the TUI by archiving the final stdout/stderr tail of background shell jobs into the originating ExecCell upon completion, freezing duration timers.
*   **[OPEN] Patch npm lockfiles for Dependabot alerts ([#4714](https://github.com/Hmbown/CodeWhale/pull/4714))** - Directly addresses the v0.9.1 security gate by running `npm audit fix --package-lock-only` across npm workspaces.
*   **[OPEN] Add configurable session token header ([#4610](https://github.com/Hmbown/CodeWhale/pull/4610))** - Introduces a new `tui.header_items` config contract, allowing users to display cumulative input, cache-hit, and output token counts in the UI header.
*   **[CLOSED] Focus v0.9.1 chrome on todos and agents ([#4711](https://github.com/Hmbown/CodeWhale/pull/4711))** - Merged the UI overhaul that restricts the top/side live strips to To-dos and Sub-agents, while making dividers draggable and theme-native.
*   **[CLOSED] Unified `/skills` manager ([#4679](https://github.com/Hmbown/CodeWhale/pull/4679))** - Delivers a comprehensive UI for inventorying, auditing, installing, updating, and removing CodeWhale skills/agents.
*   **[CLOSED] Sanitize tool input_schema for Anthropic adapter ([#4346](https://github.com/Hmbown/CodeWhale/pull/4346))** - Resolves HTTP 400 Bad Request errors from Anthropic by flattening/sanitizing top-level `oneOf`/`anyOf`/`allOf` in tool schemas.
*   **[OPEN] Split hooks config and executor modules ([#4087](https://github.com/Hmbown/CodeWhale/pull/4087))** - A much-needed architectural refactor splitting `crates/tui/src/hooks.rs` into a config module and a separate runtime executor.
*   **[CLOSED] Expire transient failed shell operations ([#4702](https://github.com/Hmbown/CodeWhale/issues/4702))** - Fixes a release-blocker where ordinary non-durable shell failures were incorrectly persisting as "Needs input" work items in the UI.
*   **[CLOSED] PTY acceptance tests must not emit desktop notifications ([#4712](https://github.com/Hmbown/CodeWhale/issues/4712))** - Fixes local/CI test execution by suppressing macOS Notification Center triggers during sealed PTY fixtures.

### 5. Feature Request Trends
*   **Provider Flexibility & Multi-Model Routing:** Developers want seamless transitions between providers (DeepSeek, Anthropic, ZAI/GLM) without UI/UX confusion or silent fallbacks, requiring dynamic adapter logic (like Anthropic schema sanitization).
*   **Granular TUI Customization:** There is a strong push for user-controlled UI density. Requests include configurable header metrics (token counts), resizable panes, and the ability to hide noisy transcript metadata (like reasoning states and repetitive hints).
*   **Agent Lifecycle & Skills Management:** With the introduction of the `/skills` manager, the community is leaning heavily into custom sub-agent workflows, necessitating clearer UI separations between user tasks and internal agent operations.

### 6. Developer Pain Points
*   **Stop-Ship Launch Bugs:** Running the CLI in fresh macOS terminal environments results in immediate crashes, entirely blocking developer access to the v0.9.1 candidate.
*   **Input Truncation / Pasting Bugs:** The composer mishandling large text blocks (truncating paths) forces developers to double-check prompts and severely degrades trust in automated agent sequences.
*   **Legacy Code/Branding Bleed:** As the tool transitions from purely "DeepSeek" focused to multi-provider, developers are encountering inert settings, confusing fallback models, and hardcoded assumptions that break the experience when using alternative APIs.

</details>