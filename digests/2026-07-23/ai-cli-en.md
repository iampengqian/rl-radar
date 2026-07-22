# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-22 22:18 UTC | Tools covered: 9

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

Here is the cross-tool comparison report for the AI CLI ecosystem based on the July 23, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tooling landscape in mid-2026 is defined by a rapid shift from isolated chat interfaces to deeply integrated, multi-agent terminal environments. Major players like OpenAI, Google, and Anthropic are pushing the boundaries of autonomous execution, resulting in complex new challenges around context management, token budgeting, and platform stability. Meanwhile, a vibrant open-source and regional ecosystem—including OpenCode, Pi, DeepSeek TUI, and Qwen—is driving aggressive innovation in provider interoperability, local model support, and context optimization ("diets"). As agentic workflows mature, the entire sector is coalescing around the need for robust sandboxing, standardized tool-calling protocols, and granular telemetry to manage costs.

### 2. Activity Comparison
*Note: Data reflects the specific activity tracked within the 24-hour window of the digest.*

| Tool | Issues Tracked (24h) | PRs Tracked (24h) | Release Status (07/23/26) | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 7 | **v2.1.218** | Desktop app stability, background processing, UX accessibility. |
| **OpenAI Codex** | 10 | 10 | **v0.146.0-alpha.3** | Rust CLI core optimization, Windows app refactoring, sandboxing. |
| **Gemini CLI** | 10 | 10 | **v0.53.0-preview.0** | Autonomous agent reliability, RCE security patching, a2a pipelines. |
| **GitHub Copilot CLI**| 10 | 1 | **v1.0.74** | New model integration (Gemini 3.6), cost tracking, UI rendering fixes. |
| **Kimi Code CLI** | 3 | 1 | *None* | API schema compatibility, shell pipeline deadlocks, TPD limits. |
| **OpenCode** | 10 | 10 | *None* | V2 branch migration, resolving upstream 401 outage, state loops. |
| **Pi (pi-mono)** | 10 | 10 | *None* | Provider OAuth, local model routing, abortable SDK retries. |
| **Qwen Code** | 10 | 11 | **v0.20.0-preview.0** | Environment sanitization, OpenAI-compat fallbacks, Web Shell UI. |
| **DeepSeek TUI** | 10 | 10 | *RC (v0.9.1)* | Token optimization ("Context Diet"), installer fixes, skill packs. |

### 3. Shared Feature Directions
Analyzing community requests and bug reports reveals several converging trends across the industry:
*   **Context Management & Token Optimization:** As agentic loops consume massive token volumes, developers are demanding cost control and context preservation. *Copilot CLI* and *OpenAI Codex* users are requesting per-subagent credit breakdowns and Ultra budget guardrails. *DeepSeek TUI* and *Qwen Code* are actively refactoring their cores to implement "Context Diets" and cache-stable prompt fragments to reduce payload sizes.
*   **Agent Orchestration & Subagent Visibility:** Users want reliable multi-agent workflows without silent failures. *Gemini CLI*, *Claude Code*, and *Copilot CLI* communities are all reporting bugs where subagents hang indefinitely, ignore model constraints, or misreport success statuses. There is a cross-tool demand for granular trajectory visibility and reliable inter-agent messaging.
*   **Windows OS & Terminal Friction:** Cross-platform stability remains a massive pain point. *Codex*, *Claude Code*, *Copilot CLI*, and *Kimi Code* all reported severe Windows-specific bugs today, ranging from WMI CPU exhaustion and clipboard paste failures to GBK encoding crashes (Kimi) and `libuv` teardown faults (Copilot). Compatibility inside `tmux` and VS Code integrated terminals also remains universally fragile.
*   **Model Context Protocol (MCP) Compatibility & Leaks:** As MCP becomes the standard for tool integration, memory and process leaks are plaguing *Codex* and *Gemini CLI*. Furthermore, strict API validations are breaking standard MCP schemas, forcing *Kimi Code* and *Qwen Code* to implement client-side schema sanitization layers.

### 4. Differentiation Analysis
While tools share common challenges, their technical approaches and target demographics differ significantly:
*   **The Enterprise vs. Local Divide:** *GitHub Copilot CLI* and *Claude Code* are leaning heavily into enterprise controls, focusing on organizational telemetry, secure sandboxing, and fleet management. Conversely, tools like *Pi*, *OpenCode*, and *DeepSeek TUI* are catering to power users by prioritizing local/self-hosted models (e.g., `llama.cpp`), Bring-Your-Own-Key (BYOK) setups, and highly customized visual TUI themes.
*   **Core Architecture:** *OpenAI Codex* is differentiating itself by migrating its CLI core to Rust to optimize SQLite pooling and API serialization. Meanwhile, TypeScript/Node-based CLIs (*Qwen*, *Claude*, *OpenCode*) are focused on cold-start mitigations and V8 memory optimizations.
*   **Regional Specialization:** *DeepSeek TUI*, *Kimi Code*, and *Qwen Code* show a strong focus on the Asian market, specifically optimizing for Chinese-locale Windows environments (GBK encoding), integrating regional cloud providers (MiniMax, StepFun, TelecomJS), and supporting alternative routing endpoints.
*   **Safety vs. Autonomy:** *Gemini CLI* and *Claude Code* are actively building safety classifiers and auto-guards, though users report friction with false positives. In contrast, *Pi* and *DeepSeek TUI* are focused on giving developers low-level control via `PreToolUse` hooks and strict workspace isolation boundaries.

### 5. Community Momentum & Maturity
*   **Hyper-Active & Iterative:** *OpenAI Codex*, *Gemini CLI*, and *Qwen Code* show massive engineering momentum, each tracking 10+ PRs daily and rapidly pushing out nightly or alpha builds. Codex’s move to Rust and Gemini’s introduction of an LLM-assisted issue triager (`caretaker-triage`) highlight highly mature, automated development pipelines.
*   **Stable but Strained:** *Claude Code* and *GitHub Copilot CLI* appear to be in a mature, stable release phase (v2.1+ and v1.0+). However, their communities are highly vocal about infrastructure strains, specifically regarding desktop app bloat, rate limits, and silent agentic failures.
*   **Agile & Niche:** *OpenCode*, *Pi*, and *DeepSeek TUI* boast incredibly active open-source communities driving complex architectural overhauls (e.g., OpenCode's V2 migration, Pi's native OAuth implementations). DeepSeek TUI shows strong momentum in defining a user-friendly, skill-based TUI experience. 

### 6. Trend Signals
For technical decision-makers and developers, the current ecosystem digests highlight several actionable industry trends:
*   **The Rise of "Context Dieting":** With auto-compaction failing to prevent serialized payload limits (e.g., Copilot's 5MB CAPI limit), static system prompts and tool schemas are becoming too bloated. The industry is moving toward AST-aware tooling (Gemini) and aggressive trimming of JSON schemas (DeepSeek) to maximize active working memory.
*   **The False-Positive Tax on Autonomy:** Across Claude, Codex, and Copilot, safety classifiers and command-gate scanners are actively disrupting legitimate developer workflows. Overly strict guardrails are misclassifying read-only Git commands and local DevOps tasks, eroding developer trust in "Auto Modes."
*   **Standardization via Necessity:** The reliance on the OpenAI-compatible API standard is fracturing, as proprietary endpoints (Moonshot, Bedrock, OpenRouter) enforce strict, non-standard schema validations. Building resilient client-side fallback logic (as seen in Qwen and Pi) is becoming mandatory for CLI tool survival.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem, based on repository activity up to July 23, 2026.

## 1. Top Skills Ranking & Core Fixes
*Note: As comment counts are currently capped/unreported in the raw data, these are ranked by community engagement across interconnected issues and PRs.*

*   **Meta-Skill Infrastructure: `skill-creator` Fixes**
    *   **Description:** A suite of critical fixes for the official skill-creator utility, addressing YAML validation, UTF-8 byte-length panics, and OS-level compatibility.
    *   **Highlights:** This is the most active area in the repo. Community members submitted multiple patches to fix broken description-optimization loops (`run_eval.py` returning 0% recall) and Windows compatibility (e.g., `claude.cmd` `PATHEXT` resolution and `cp1252` encoding).
    *   **Status:** Open ([PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #362](https://github.com/anthropics/skills/pull/362), [PR #1050](https://github.com/anthropics/skills/pull/1050))
*   **Document Quality Control: `document-typography`**
    *   **Description:** Prevents common AI-generation artifacts in documents, such as orphan words, widow paragraphs, and numbering misalignment.
    *   **Highlights:** Addresses a subtle but universal issue in AI-generated formatting that users rarely explicitly prompt for but immediately notice.
    *   **Status:** Open ([PR #514](https://github.com/anthropics/skills/pull/514))
*   **Frontend & UI Enhancement: `frontend-design`**
    *   **Description:** Revises the existing frontend skill to improve clarity, actionability, and token efficiency.
    *   **Highlights:** Focused on ensuring guidelines are specific enough to steer Claude's behavior without overwhelming the context window.
    *   **Status:** Open ([PR #210](https://github.com/anthropics/skills/pull/210))
*   **Testing Automation: `testing-patterns`**
    *   **Description:** A comprehensive skill covering the "Testing Trophy" model, including unit tests, React component testing, and integration strategies.
    *   **Highlights:** Highly requested by developers looking to standardize code quality outputs within Claude Code.
    *   **Status:** Open ([PR #723](https://github.com/anthropics/skills/pull/723))
*   **Retro Game Development: `pyxel`**
    *   **Description:** Integrates the Pyxel retro game engine via an MCP server for 8-bit, pixel-art game creation in Python.
    *   **Highlights:** Showcases the powerful synergy between Skills and MCP servers for highly specialized, interactive workflows.
    *   **Status:** Open ([PR #525](https://github.com/anthropics/skills/pull/525))

## 2. Community Demand Trends
Based on open Issues, the community is pushing the ecosystem in three major directions:

*   **Meta-Skills & AI Self-Governance:** There is a massive appetite for skills that audit AI behavior. Proposals like *agent-governance* (Issue [#412](https://github.com/anthropics/skills/issues/412)) and the *Reasoning Quality Gate Pipeline* (Issue [#1385](https://github.com/anthropics/skills/issues/1385)) aim to give Claude pre-task calibration, adversarial review, and safety enforcement capabilities.
*   **Enterprise & Organizational Workflows:** Users want native, org-wide skill sharing and enterprise integrations. Issue [#228](https://github.com/anthropics/skills/issues/228) highlights the friction of manually sharing `.skill` files, while Issue [#1175](https://github.com/anthropics/skills/issues/1175) discusses building secure permission logic for SharePoint Online environments. 
*   **Skill-to-MCP Conversions:** A foundational architectural request (Issue [#16](https://github.com/anthropics/skills/issues/16)) advocates for exposing Skills strictly as MCPs, suggesting that the community views the Model Context Protocol as the ideal API standard for packaging and triggering AI software capabilities.

## 3. High-Potential Pending Skills
These PRs represent high-value, mechanically sound contributions that are currently open and likely to be merged soon:

*   **`self-audit` (Verification Gate):** Forces Claude to perform mechanical file verification and a four-dimension reasoning audit before delivering output. ([PR #1367](https://github.com/anthropics/skills/pull/1367))
*   **`color-expert`:** A self-contained skill mapping complex color theory (OKLCH, CAM16, Munsell) and naming systems directly into CSS generation. ([PR #1302](https://github.com/anthropics/skills/pull/1302))
*   **`skill-quality-analyzer` & `skill-security-analyzer`:** Meta-skills designed to evaluate the structural quality and security vulnerabilities of other skills in the marketplace. ([PR #83](https://github.com/anthropics/skills/pull/83))
*   **DOCX/PDF Structural Fixes:** Crucial patches that fix case-sensitive file referencing in PDFs ([PR #538](https://github.com/anthropics/skills/pull/538)) and prevent OOXML `w:id` collisions that corrupt DOCX files with existing bookmarks ([PR #541](https://github.com/anthropics/skills/pull/541)).

## 4. Skills Ecosystem Insight
At the ecosystem level, the community's most concentrated demand is for **reliable meta-infrastructure—specifically robust skill-creator tooling, cross-platform compatibility (Windows/UTF-8), and stringent security/trust boundaries** to ensure that both creating and executing Skills is safe, verifiable, and OS-agnostic.

---

Here is the Claude Code community digest for July 23, 2026.

### 1. Today's Highlights
Claude Code rolled out **v2.1.218**, bringing UX improvements to code reviews and accessibility by running `/code-review` as a background subagent and adding screen-reader announcements for text deletions. The community was highly active on both macOS and Windows fronts, with major discussions revolving around desktop app file bridge failures, unresponsiveness in MCP filesystem tools, and persistent clipboard/paste bugs. 

### 2. Releases
*   **[v2.1.218](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)**
    *   **Background Code Reviews:** The `/code-review` command now runs as a background subagent. This prevents review outputs from flooding the active conversation window and ensures stacked slash commands remain targeted to the review.
    *   **Accessibility Updates:** Added screen-reader announcements for deleted text when using word and line deletion shortcuts (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`).

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

1.  **[#42776](https://github.com/anthropics/claude-code/issues/42776) [BUG] Claude Code Desktop fails to Relaunch on Windows:** An older but highly-voted issue (47 👍 / 115 comments) detailing orphaned file locks that prevent the Windows desktop app from relaunching cleanly.
2.  **[#80002](https://github.com/anthropics/claude-code/issues/80002) macOS: Filesystem extension never dispatches tools/call:** A critical, heavily discussed bug (51 comments) where the first-party filesystem extension lists tools successfully but never actually executes them.
3.  **[#32791](https://github.com/anthropics/claude-code/issues/32791) Image paste stopped working in Windows Terminal:** Core functionality regression (20 👍 / 26 comments) where `Ctrl+V` image pasting broke in the CLI for Windows users. 
4.  **[#26679](https://github.com/anthropics/claude-code/issues/26679) Paste images from clipboard directly into Claude Code (Windows):** A major feature request (26 👍) emphasizing the dire need for robust clipboard image handling on Windows.
5.  **[#80016](https://github.com/anthropics/claude-code/issues/80016) Windows Filesystem extension handshake succeeds but tools/call never dispatched:** A duplicate of the macOS filesystem bug, confirming the MCP tool execution failure is cross-platform.
6.  **[#49535](https://github.com/anthropics/claude-code/issues/49535) Auto mode blocked by "safety classifier temporarily unavailable":** Widespread frustration (28 👍) where Edit/Write/Bash tools fail entirely in Auto mode due to persistent safety classifier outages.
7.  **[#78933](https://github.com/anthropics/claude-code/issues/78933) Remote Control never connects:** Desktop app users are unable to use `/remote-control`, failing with a session URL resolution error on both connect and disconnect attempts.
8.  **[#80129](https://github.com/anthropics/claude-code/issues/80129) Task management tools missing from session tool roster on Windows:** Users on v2.1.216/v2.1.217 reported that built-in task trackers (`TaskCreate`, `TaskList`, etc.) completely vanished from the tool roster.
9.  **[#80340](https://github.com/anthropics/claude-code/issues/80340) Plugin install fails for git-subdir sources pinned to commit SHA:** The new plugin installer fails when resolving commit SHAs because it incorrectly relies on `git clone --branch`.
10. **[#80308](https://github.com/anthropics/claude-code/issues/80308) General Protection Fault on VirtualBox:** Claude Code v2.1.217 is hard-crashing with GPFs for users running Kubuntu 26.04 inside VirtualBox.

### 4. Key PR Progress
Developers are actively contributing fixes and new plugins:

1.  **[PR #80326](https://github.com/anthropics/claude-code/pull/80326) Add account profiles plugin:** Introduces an experimental plugin to manage isolated `CLAUDE_CONFIG_DIR` environments, making it seamless to switch between personal, work, and client accounts.
2.  **[PR #80008](https://github.com/anthropics/claude-code/pull/80008) Add twilight plugin:** Proposes a spec-first design and implementation strategy utilizing a durable focus stack to unlock deeper, sustained functionality.
3.  **[PR #80112](https://github.com/anthropics/claude-code/pull/80112) Make devcontainer firewall init resilient:** Hardens the firewall initialization script so a transient DNS failure doesn't abort the entire setup process.
4.  **[PR #80241](https://github.com/anthropics/claude-code/pull/80241) Fix console scrolling bug:** Resolves an annoying UI glitch where the console jumped to the top of the history when Claude appended new text.
5.  **[PR #80196](https://github.com/anthropics/claude-code/pull/80196) Fix Auto-compact bug:** Addresses an issue where auto-compact would fail to trigger, leaving the statusline stuck at "100% context used".
6.  **[PR #80195](https://github.com/anthropics/claude-code/pull/80195) Fix Max subscription usage limits:** Attempts to resolve an issue where users were instantly hitting usage limits despite being on a Max subscription tier.
7.  **[PR #80294](https://github.com/anthropics/claude-code/pull/80294) & [PR #80229](https://github.com/anthropics/claude-code/pull/80229) Docs fixes:** Automated LinkMedic PRs that resolve broken npm registry links in the `README.md` via archive.org snapshots.

### 5. Feature Request Trends
*   **Robust Multi-Agent Orchestration:** Developers want less friction in multi-session workflows, requesting trusted cross-session agent messaging without per-message user confirmations ([#79870](https://github.com/anthropics/claude-code/issues/79870)).
*   **Autonomous Workflow Controls:** Requests for configurable runtime budgets and limits for internal `agent()` calls inside workflows ([#79953](https://github.com/anthropics/claude-code/issues/79953)).
*   **Granular Browser Permissions:** Users desire per-action approvals for browser tools that actually respect the allowed sites list ([#78315](https://github.com/anthropics/claude-code/issues/78315)).
*   **Seamless OS Integration:** Continued demand for reliable clipboard image pasting on Windows ([#26679](https://github.com/anthropics/claude-code/issues/26679)).

### 6. Developer Pain Points
*   **Desktop App Stability:** File bridge disconnects ([#77385](https://github.com/anthropics/claude-code/issues/77385), [#76054](https://github.com/anthropics/claude-code/issues/76054)) and failed auto-updates breaking UI tabs ([#80318](https://github.com/anthropics/claude-code/issues/80318)) are severely disrupting Cowork sessions.
*   **Process Leaks & Locks:** Orphaned processes are a cross-platform headache. Windows users battle file locks ([#42776](https://github.com/anthropics/claude-code/issues/42776)) and locked background session worktrees ([#79888](https://github.com/anthropics/claude-code/issues/79888)), while Linux users report `xclip` leaks causing complete desktop freezes ([#80330](https://github.com/anthropics/claude-code/issues/80330)).
*   **False Positives & Rate Limiting:** Auto-mode safety classifiers are triggering false positives, blocking legitimate tool execution ([#49535](https://github.com/anthropics/claude-code/issues/49535), [#80343](https://github.com/anthropics/claude-code/issues/80343)), compounded by frustration over aggressive 429 server rate limits on valid requests ([#80346](https://github.com/anthropics/claude-code/issues/80346)).
*   **Silent Failures & Agentic Errors:** Tools failing silently—such as the Edit tool applying changes despite returning a user-rejection error ([#80347](https://github.com/anthropics/claude-code/issues/80347)) or agents looping prematurely via `ScheduleWakeup` ([#80350](https://github.com/anthropics/claude-code/issues/80350))—are undermining developer trust in autonomous actions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 23, 2026.

### 1. Today's Highlights
Codex development is firing on all cylinders with a rapid succession of Rust CLI alpha releases (pushing towards v0.146.0) and over 20 merged pull requests in the last 24 hours. The engineering team has heavily focused on infrastructure stability, rolling out significant performance optimizations for context handling, sandboxing, and telemetry. However, the community remains highly vocal about persistent performance bottlenecks and UI regressions specifically plaguing the standalone Windows desktop application.

### 2. Releases
The CLI core is rapidly iterating towards version 0.146.0, with four new alpha builds pushed in the last 24 hours. 
* **rust-v0.146.0-alpha.3, alpha.2, alpha.1, and v0.145.0-alpha.30** ([Releases](https://github.com/openai/codex/releases))
* *Summary:* While detailed changelogs are pending, the sheer volume of merged PRs regarding core architecture (SQLite centralization, thread startup consolidation, and API request optimization) indicates these alphas are laying the groundwork for major CLI performance and stability improvements.

### 3. Hot Issues
The most actively discussed issues highlight a clear divide: the CLI is largely stable, but the standalone Windows Desktop app is causing significant user friction.

1. **[#34014](https://github.com/openai/codex/issues/34014) Standalone Windows app triggers WMI Provider Host (90–100% CPU)**: Opening projects in the standalone Windows app causes massive CPU spikes via WMI, a regression that makes the VS Code extension currently unusable for affected users. *(18 comments, 11 upvotes)*
2. **[#28969](https://github.com/openai/codex/issues/28969) Add setting to disable the auto-resolve in 60 seconds for questions**: The CLI's 60-second auto-resolve for questions is interrupting complex workflows, particularly on Linux. The community strongly desires configurable timeouts. *(53 comments, 151 upvotes)*
3. **[#20214](https://github.com/openai/codex/issues/20214) Codex App frequently freezes/stutters on Windows 11 Pro**: Despite sufficient system resources (32GB RAM), the Windows app suffers severe UI stutters. *(72 comments, 71 upvotes)*
4. **[#28015](https://github.com/openai/codex/issues/28015) False positive cybersecurity safety check repeatedly blocks normal local repo maintenance**: The safety-check guardrails are too aggressive, repeatedly interrupting paid interactive CLI sessions for routine local DevOps tasks. *(22 comments)*
5. **[#34061](https://github.com/openai/codex/issues/34061) Insane Codex Disk Usage from Subagents**: Subagents are generating excessive disk usage, causing crashes and local state corruption. *(7 comments)*
6. **[#34822](https://github.com/openai/codex/issues/34822) Bring back 5-hr limit or allow Ultra budgets**: Users are reporting unexpectedly burning through massive percentages of their Pro 20x plans during single overnight Ultra runs, requesting better budget guardrails. *(3 comments)*
7. **[#17574](https://github.com/openai/codex/issues/17574) Subagents leak stdio MCP helper trees**: In the Codex App, MCP helper processes (like xcodebuildmcp) accumulate indefinitely, creating severe memory leaks. *(12 comments)*
8. **[#27597](https://github.com/openai/codex/issues/27597) Codex IDE extension fails to load in VS Code Remote-SSH**: While the CLI works fine, the IDE extension completely fails to establish a connection in Remote-SSH environments. *(15 comments)*
9. **[#30712](https://github.com/openai/codex/issues/30712) Codex desktop app on Windows injects split writable roots**: A pathing bug in the Windows desktop sandbox renders `apply_patch` unusable, forcing agents to bypass the sandbox and use PowerShell. *(10 comments, 11 upvotes)*
10. **[#34782](https://github.com/openai/codex/issues/34782) WSL path resolution broken after 2026-07-22 Store update**: A recent Store update broke WSL path resolution, causing task creation to fail and sidebar histories to disappear. *(3 comments)*

### 4. Key PR Progress
Today's merged PRs showcase a strong focus on performance, tooling capabilities, and safe execution boundaries.

1. **[PR #34825](https://github.com/openai/codex/pull/34825) Reduce cloning when building Responses requests**: Optimizes API prep by serializing tool definitions into shared raw JSON, drastically reducing overhead during incremental WebSocket requests.
2. **[PR #34808](https://github.com/openai/codex/pull/34808) Centralize SQLite connection configuration**: Introduces `SqliteConfig` to manage database pools, replacing standalone helpers for better state management.
3. **[PR #31311](https://github.com/openai/codex/pull/31311) Route MCP resource reads by originating tool call**: Fixes a critical bug where Codex Apps sharing the same MCP server could return the wrong widget HTML to another app's tool call.
4. **[PR #34835](https://github.com/openai/codex/pull/34835) Track compaction time in turn profiles**: Isolates manual and automatic context compaction as an exclusive profile phase, allowing accurate measurement of turn durations.
5. **[PR #34819](https://github.com/openai/codex/pull/34819) Enable git attribution across Codex entry points**: Expands authenticated workspace policy controls for commits and PRs to the app server and MCP server.
6. **[PR #34796](https://github.com/openai/codex/pull/34796) Skip syntax highlighting for lines over 4 KiB**: Prevents UI freezes and excessive memory consumption by falling back to plain text for extremely long lines of code.
7. **[PR #34823](https://github.com/openai/codex/pull/34823) Run code-mode tests in non-Windows Bazel CI**: Removes skip filters so Linux and macOS run the full integration suite during CI, hardening cross-platform stability.
8. **[PR #34831](https://github.com/openai/codex/pull/34831) Flush analytics before in-process app server shutdown**: Ensures telemetry and accepted-line events aren't lost during rapid app server restarts.
9. **[PR #34811](https://github.com/openai/codex/pull/34811) Fix network access rendering in sandbox prompts**: Corrects placeholder syntax in `danger-full-access` and `workspace-write` templates so LLMs accurately understand network permissions.
10. **[PR #34789](https://github.com/openai/codex/pull/34789) Avoid unnecessary post-sampling token estimates**: Reduces post-sampling compute load by moving token estimates to a dedicated trace target rather than running them constantly.

### 5. Feature Request Trends
Based on recent issues, the community is pushing for better control over agent autonomy and resource consumption:
* **Configurable Autonomy & Safety**: High demand for the ability to disable or configure the 60-second auto-resolve timeout ([#28969](https://github.com/openai/codex/issues/28969)) and requests to tune or bypass aggressive cybersecurity safety flags for trusted local repos ([#28015](https://github.com/openai/codex/issues/28015)).
* **Better Token & Quota Management**: Developers want built-in mechanisms to filter shell command output natively to save tokens ([#19001](https://github.com/openai/codex/issues/19001)), alongside UI/CLI guardrails to prevent accidental depletion of Ultra/Pro budgets during long sessions ([#34822](https://github.com/openai/codex/issues/34822)).
* **Advanced Subagent Configuration**: Requests for global/default model configurations for subagents via `config.toml` to standardize behavior across custom agents ([#19482](https://github.com/openai/codex/issues/19482)).

### 6. Developer Pain Points
The most glaring pain point is the **standalone Windows Desktop application**. A massive portion of active bug reports detail severe CPU bottlenecks (often tied to WMI Provider Host and process-monitoring loops), UI freezing, and corrupted local states (`chat_processes.json`). Furthermore, developers utilizing **WSL** are experiencing constant friction with path normalization, causing features like custom pets, `apply_patch`, and basic PR integrations to fail. Finally, **MCP (Model Context Protocol) leaks** remain a headache, as subagents fail to clean up stdio helper trees, resulting in aggressive disk usage and memory accumulation.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 23, 2026.

### 1. Today's Highlights
Gemini CLI rolled out the **v0.52.0** stable release alongside the first preview for **v0.53.0**, introducing LLM-assisted issue triaging and critical a2a-server security hardening. Community focus remains heavily centered on the autonomous "Generalist" and "Browser" subagents, with multiple P1 bugs highlighting persistent issues around execution hangs, context truncation, and ignored permission overrides.

### 2. Releases
*   **[v0.53.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0)**: Introduces foundational modules and container builds for a new LLM triage orchestrator (`caretaker-triage`). Also includes a fix for a2a communication to group cancelled tool responses, preventing `400 Bad Request` API errors.
*   **[v0.52.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0)**: Refactors workspace context to exclude transient CI configuration files and adds the core triage worker modules.
*   **[v0.52.0-nightly.20260722](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260722.gc776c665b)**: Patches a critical security vulnerability (RCE) by enforcing workspace trust and task isolation in the a2a-server.

### 3. Hot Issues
1.  **[#21409: Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**: A high-impact P1 bug where deferring to the generalist agent causes infinite hangs during basic operations. Users are forced to manually disable sub-agents to keep the CLI functional.
2.  **[#22323: Subagent recovery hides interruptions](https://github.com/google-gemini/gemini-cli/issues/22323)**: The `codebase_investigator` inaccurately reports `status: "success"` even when it hits `MAX_TURNS`, misleading the main agent into thinking its analysis was completed.
3.  **[#25166: Shell execution gets stuck "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**: A frustrating P1 core bug where the interface hangs after executing simple CLI commands, falsely reporting that it is awaiting user input.
4.  **[#22186: "get-shit-done" output hook crashes CLI](https://github.com/google-gemini/gemini-cli/issues/22186)**: Output hooks cause the CLI to crash completely when printing final user summaries, halting complex workflows.
5.  **[#22267: Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**: Settings like `maxTurns` are loaded by the `AgentRegistry` but completely ignored by the Browser Agent at runtime, breaking execution constraints.
6.  **[#22093: Subagents running without permission](https://github.com/google-gemini/gemini-cli/issues/22093)**: A regression causing background agents to execute autonomously despite having agent mode explicitly disabled in configuration.
7.  **[#24246: 400 Error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: The CLI fails with an API 400 error when MCP servers push the available tool count past 128, highlighting the need for intelligent tool-scoping.
8.  **[#26522: Auto Memory stuck in retry loop](https://github.com/google-gemini/gemini-cli/issues/26522)**: The Auto Memory system permanently retries "low-signal" sessions, causing unnecessary background processing overhead. 
9.  **[#26525: Auto Memory data redaction risks](https://github.com/google-gemini/gemini-cli/issues/26525)**: A security concern where local transcripts are sent to the extraction model *before* secrets are redacted, rather than redacting deterministically beforehand.
10. **[#21968: Gemini ignores custom skills/sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)**: The model rarely invokes custom-defined skills (e.g., specific gradle/git commands) autonomously, requiring explicit user prompting.

### 4. Key PR Progress
1.  **[PR #28470 (Merged in Nightly)](https://github.com/google-gemini/gemini-cli/pull/28470)**: Patched a critical RCE vulnerability by enforcing strict workspace trust and task isolation in the a2a-server.
2.  **[PR #28446: Native fetch for OAuth](https://github.com/google-gemini/gemini-cli/pull/28446)**: Fixes a P1 auth bug causing "Premature close" errors during token exchange on headless VPS environments by migrating to native fetch.
3.  **[PR #28469: Rotate Session ID on Model Fallback](https://github.com/google-gemini/gemini-cli/pull/28469)**: Fixes stateful API errors by rotating the active session ID when falling back to `gemini-2.5-flash`. 
4.  **[PR #28485: Add gemini-3.5-flash to model selector](https://github.com/google-gemini/gemini-cli/pull/28485)**: Resolves an issue where `gemini-3.5-flash` was completely missing from the UI model selector in the v0.51.0 legacy build path.
5.  **[PR #28394: Fix temp directory leak](https://github.com/google-gemini/gemini-cli/pull/28394)**: Resolves an OS-level resource leak where temporary directories were permanently left behind in the host OS temp folder during background shell execution.
6.  **[PR #28506: Propagate AbortSignal in /compress](https://github.com/google-gemini/gemini-cli/pull/28506)**: Prevents dangling network requests by passing an `AbortController` signal to the `/compress` command, allowing clean cancellation.
7.  **[PR #28407 (Merged in Preview)](https://github.com/google-gemini/gemini-cli/pull/28407)**: Coalesces consecutive roles and groups cancelled tool responses to prevent `400 Bad Request` errors in the core a2a pipeline.
8.  **[PR #28169: Eval coverage report command](https://github.com/google-gemini/gemini-cli/pull/28169)** (Closed): An attempt to introduce an `eval:coverage` command to cross-reference eval inventory with the tool registry. 
9.  **[PR #28431: PR Generator Infra](https://github.com/google-gemini/gemini-cli/pull/28431)**: Lays the cloud foundation for an SSR Code Generation Pipeline using Cloud Run, Docker, and Eventarc.
10. **[PR #28499: Restrict wildcard DENY policy](https://github.com/google-gemini/gemini-cli/pull/28499)** (Closed): Fixed a policy bug where a wildcard DENY rule for `tools.core` was silently excluding all MCP tools.

### 5. Feature Request Trends
*   **AST-Aware Tooling & Codebase Mapping**: Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) request AST-aware file reads and searches. This would allow the model to accurately read method bounds in a single call, vastly reducing token noise and turn counts.
*   **Zero-Dependency OS Sandboxing**: Users want to safely leverage the model's native bash affinity (Issue [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) without relying on heavy container runtimes, utilizing native POSIX sandboxing instead.
*   **Robust Component-Level Evals**: An Epic ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) is tracking the expansion of "behavioral evals" across all 6 supported Gemini models to harden agent reliability.
*   **Granular Trajectory Visibility**: Requests to make subagent trajectories easily accessible via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and included in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) for better debugging.

### 6. Developer Pain Points
*   **Execution Instability & Hangs**: The most prominent frustration is the CLI freezing during basic tasks. Subagents hanging indefinitely ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck waiting for input ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and Vite app initialization breaking the interactive prompt ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) are heavily impacting core workflows.
*   **Poor Autonomous Tool Selection**: Developers note that the agent frequently ignores configured subagents and custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) and struggles with context limits when dealing with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)). 
*   **Workspace Pollution & Destructive Actions**: Users report the model randomly creating temporary edit scripts across various directories instead of using native file tools ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), and occasionally running dangerous git commands (like `git reset --force`) when safer alternatives exist ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the community digest for GitHub Copilot CLI.

# GitHub Copilot CLI Community Digest — 2026-07-23

## 1. Today's Highlights
The Copilot CLI team rolls out **v1.0.74**, bringing official support for Google's `gemini-3.6-flash` model and an improved first-run sandbox opt-in experience. Concurrently, the community has surfaced a critical batch of Windows-specific crashes and terminal rendering bugs (especially within `tmux` and VS Code integrated terminals). Enterprise users and agent enthusiasts are also heavily requesting deeper telemetry and cost-tracking capabilities for subagent orchestrations.

## 2. Releases
### Latest: v1.0.74
- **New Features:** Added a first-run splash screen to opt into the default sandbox. Introduced support for the `gemini-3.6-flash` model.
- **Improvements:** Fixed an issue where multiplexed sessions would leak open dialogs into other sessions; pickers now correctly reopen when switching back. Enhanced the `$` interactive shell shortcut.
- **Patch:** General fixes and changes applied in `v1.0.74-2` and `v1.0.74-1`.

## 3. Hot Issues
Here are the 10 most noteworthy issues updated in the last 24 hours:

1. **[#4183] Auto-compaction fails to prevent CAPI 5 MB limit crashes (👍 7):** Long, tool-heavy sessions hit a hard 5MB serialized request limit before token limits are reached. Auto-compaction currently fails to mitigate this, causing permanent model call failures. 
2. **[#4016] BYOK rejected in `--acp` mode (👍 4):** A regression affecting versions 1.0.61–1.0.68 where custom providers (`COPILOT_PROVIDER_*`) work login-free in standard CLI mode, but get gated by GitHub authentication requirements when using Agent Client Protocol (`--acp --stdio`).
3. **[#4163] Linux zombie process accumulation (👍 2):** Copilot CLI v1.0.71 fails to reap child processes on Linux. Subprocesses accumulate as zombies (state=Z) at a rate of ~2/min, eventually causing system resource exhaustion.
4. **[#4206] Environment footer stuck "Loading" forever (👍 2):** Under organizational MCP policies, the GitHub MCP handshake stalls indefinitely, leaving the status footer permanently stuck at "Loading" even though `/env` proves everything loaded successfully.
5. **[#4218] Allow users to configure Auto mode model pool (👍 6):** Users are requesting the ability to restrict which models Auto mode can select from to better predict costs and control agent behavior. 
6. **[#4207] Per-subagent AI credit usage breakdown (👍 6):** The `/usage` command currently shows cumulative credits. Users want a granular breakdown to see how many credits are consumed by individual subagents versus the main agent.
7. **[#4222] React/Ink render loop regression (Windows/VS Code):** The "Maximum update depth exceeded" UI freeze bug previously fixed in v1.0.31 has regressed in v1.0.72+, causing the main pane to swallow output and freeze.
8. **[#4223] Shell completion never detected inside `tmux`:** Shell tool commands execute successfully within `tmux`, but Copilot CLI fails to detect command completion, leaving even basic commands like `echo` hanging as "still running."
9. **[#4217] Windows crash on exit via `libuv`:** On Windows x64, `copilot.exe` consistently triggers a fatal fail-fast (`FAST_FAIL_FATAL_APP_EXIT`) during process teardown due to a `uv_async_send` call on a closing handle.
10. **[#443] Built-in PDF reading support (👍 33):** A long-standing request to natively read PDF documents inside the CLI to assist with academic papers and technical documentation without relying on external shell utilities.

## 4. Key PR Progress
*Note: Activity in the public Pull Request queue has been remarkably quiet over the last 24 hours.*
1. **[#3163] ViewSonic monitor:** A stale/external PR that appears to be mistakenly submitted to this repository. It triggers a GitHub Action for runners regarding monitors and has no bearing on the CLI codebase. 

## 5. Feature Request Trends
Based on recent issue activity, the community is pushing hard on **Agent Orchestration & Observability**. Developers want explicit mechanisms for agent chaining and inline invocations ([#4208](https://github.com/github/copilot-cli/issues/4208)), alongside tool aliases to grant custom agents access to the `skill` tool ([#4209](https://github.com/github/copilot-cli/issues/4209)). Furthermore, accurately measuring the cost of these distributed agents is a massive priority, evidenced by requests for granular per-subagent cost tracking ([#4207](https://github.com/github/copilot-cli/issues/4207), [#4224](https://github.com/github/copilot-cli/issues/4224)) and better predictability for Auto Mode ([#4218](https://github.com/github/copilot-cli/issues/4218)). There is also a clear trend toward natively supporting complex data formats, most notably PDF parsing ([#443](https://github.com/github/copilot-cli/issues/443)).

## 6. Developer Pain Points
Developers are experiencing significant friction with **Terminal Multiplexer (`tmux`) Compatibility**. Issues like invisible dark-on-dark prompt rendering ([#4212](https://github.com/github/copilot-cli/issues/4212)) and infinite hangs waiting for command completion detection ([#4223](https://github.com/github/copilot-cli/issues/4223)) make using the CLI inside `tmux` highly frustrating. 

Additionally, **Windows Platform Stability** has degraded recently. Users report hard native crashes triggered by native toast notifications ([#4219](https://github.com/github/copilot-cli/issues/4219)), libuv teardown faults ([#4217](https://github.com/github/copilot-cli/issues/4217)), and session resume hangs in PowerShell ([#4165](https://github.com/github/copilot-cli/issues/4165)). 

Finally, **Overly Strict Permission Scanners** are actively disrupting developer workflows. The CLI's command gate is generating false positives, misclassifying `git log` search arguments as directory access requests ([#4221](https://github.com/github/copilot-cli/issues/4221)) and blocking read-only `gh api` queries in plan mode under the assumption they might mutate the workspace ([#4220](https://github.com/github/copilot-cli/issues/4220)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest (2026-07-23)

### 1. Today's Highlights
The Kimi Code CLI community focused heavily on API compatibility and shell execution stability over the past 24 hours. There were no new official releases, but developers actively reported critical integration blockers, including Moonshot API rejecting MCP tool schemas and organizational rate limit miscalculations. Progress is being made on the execution front, with a new PR addressing asynchronous pipeline deadlocks in detached shell processes.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*   **#2318 [bug] request reached organization TPD rate limit, current: 1505241** ([View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2318))
    *   **Why it matters:** Users report critical miscalculations in Tokens Per Day (TPD) rate limiting on the Moonshot platform, which falsely triggers rate limits and blocks API usage. 
    *   **Community Reaction:** Active since May, this continues to garner attention (2 upvotes) as it directly impacts production availability for heavy users.
*   **#2531 MCP tool names & schemas rejected by Moonshot API (HTTP 400)** ([View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2531))
    *   **Why it matters:** The Moonshot API is currently rejecting certain MCP (Model Context Protocol) tool definitions due to strict validation of JSON schemas (specifically `anyOf` types).
    *   **Community Reaction:** High priority for agent builders; the reporter suggests the CLI needs to sanitize or format these schemas client-side before sending requests to the API.
*   **#2532 kimi web crashes at startup on Windows when stdout is redirected: UnicodeEncodeError (gbk)** ([View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2532))
    *   **Why it matters:** The `kimi web` command crashes immediately on Chinese-locale Windows machines if standard output is piped or captured by a parent process.
    *   **Community Reaction:** A significant blocker for automation and CI/CD pipelines on Windows, caused by the inability of the GBK encoding to parse the `➜` (U+279C) banner character.

### 4. Key PR Progress
*   **#2530 fix(shell): stop blocking until timeout when a detached child holds the pipes** ([View PR](https://github.com/MoonshotAI/kimi-cli/pull/2530))
    *   **Description:** Resolves issue #2468. Currently, `_run_shell_command` waits for an EOF on stdout/stderr pipelines before checking exit codes. If a user runs a detached daemon (e.g., `some_daemon & echo done`), the pipe remains open, causing the CLI to hang until a timeout. This PR fixes the asynchronous execution path to correctly handle detached child processes without blocking.

### 5. Feature Request Trends
*   **Robust Windows Automation Support:** A clear trend is emerging around making Kimi CLI natively compatible with non-interactive Windows environments, specifically requesting seamless stdout piping and localized encoding (GBK) support without crashing (Issue #2532).
*   **Client-Side Schema Sanitization:** With the rise of agentic workflows, developers are requesting built-in translation layers within the CLI to handle standard MCP/JSON schemas and safely adapt them to proprietary API requirements (Issue #2531).

### 6. Developer Pain Points
*   **Moonshot API Strictness:** Developers are frustrated by the friction between standard developer tools (like MCP) and the Moonshot API's strict, non-standard schema validations, which require manual workaround efforts.
*   **Shell Execution Reliability:** CLI users running complex bash commands or background services experience degraded performance due to the CLI holding open pipelines for child processes.
*   **Platform Quota Bugs:** Existing organizational limits (TPD) are being flagged as inaccurate, creating artificial bottlenecks and disrupting developer workflows (Issue #2318).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 23, 2026.

### 1. Today's Highlights
The OpenCode community faced a widespread service disruption today as the "OpenCode Go" subscription experienced a server-side `401 Request blocked by upstream provider` error, dominating community discussions. On the development side, maintainers are aggressively pushing the **V2 TUI theme migration** forward and merging critical `dev` branch updates—including complete removals of the legacy runtime—into the `v2` branch. Additionally, core architectural improvements landed to fix infinite session loops and standardize tool result plumbing.

### 2. Releases
*No notable versioned releases were published in the last 24 hours. Activity was focused on feature branches, issue triaging, and patching the ongoing Go subscription outage.*

### 3. Hot Issues
*   **OpenCode Go Upstream Outage:** Multiple highly-commented issues ([#38257](https://github.com/anomalyco/opencode/issues/38257), [#38218](https://github.com/anomalyco/opencode/issues/38218), [#38195](https://github.com/anomalyco/opencode/issues/38195), [#38190](https://github.com/anomalyco/opencode/issues/38190)) reported that all models under the Go subscription started returning `401 Request blocked by upstream provider`. The `/v1/models` endpoint works, but `chat/completions` is blocked, confirming a server-side provider routing issue affecting paying users.
*   **Infinite Tool Loop Bug:** In [#26220](https://github.com/anomalyco/opencode/issues/26220), users reported OpenCode entering an unresponsive infinite loop after completing tool calls in versions like "Zen/big-pickle", requiring manual process termination.
*   **High CPU Usage on Rate Limits:** [Issue #19466](https://github.com/anomalyco/opencode/issues/19466) highlights an inefficiency where OpenCode consumes ~50% of an i9 CPU core while sitting entirely idle waiting for API rate limits to reset.
*   **Auto-discover OpenAI-compatible Models:** A massive feature request ([#6231](https://github.com/anomalyco/opencode/issues/6231) with 185 👍) asks for the automatic discovery of local models (LM Studio, Ollama) to eliminate tedious manual configurations in `opencode.json`.
*   **Web-based VSCode Clipboard Failure:** Users running OpenCode in code-server, Codespaces, or Gitpod noticed that the copy functionality silently fails in web environments ([#26459](https://github.com/anomalyco/opencode/issues/26459)).
*   **Subagents Corrupting Files:** A critical bug ([#38356](https://github.com/anomalyco/opencode/issues/38356)) was reported where a subagent task wrote raw null bytes instead of actual code content, ruining repository files.
*   **Token Accumulation on Bedrock:** [Issue #38344](https://github.com/anomalyco/opencode/issues/38344) detailed severe per-turn token accumulation (growing from 4K to 95K input tokens over 34 turns) when using OpenAI models on Bedrock Mantle due to encrypted reasoning blocks.
*   **New Session Model Persistence:** Users found that creating a new session with an agent selected doesn't apply the agent's pre-configured model until manually reselected ([#38333](https://github.com/anomalyco/opencode/issues/38333)).
*   **Orphaned Sub-sessions:** When a parent session is aborted, sub-agent sessions are left hanging indefinitely in a `tool-calls` state, consuming background resources ([#37314](https://github.com/anomalyco/opencode/issues/37314)).
*   **Media Support for Read Tool:** Developers are requesting that the built-in `read` tool support audio and video attachments for active agent retrieval, rather than rejecting them as binary blobs ([#22260](https://github.com/anomalyco/opencode/issues/22260)).

### 4. Key PR Progress
*   **V2 Theme Migration:** [PR #38383](https://github.com/anomalyco/opencode/pull/38383) and [PR #38001](https://github.com/anomalyco/opencode/pull/38001) finalize the migration of the TUI (dialogs, lists, renderer backgrounds) from the flat V1 palette to the new V2 elevated theme tokens.
*   **Canonical Tool Results:** [PR #38367](https://github.com/anomalyco/opencode/pull/38367) significantly refactors core plumbing by consolidating multiple mutable tool result states into a single canonical representation per fact.
*   **Dev to V2 Branch Merge:** [PR #38377](https://github.com/anomalyco/opencode/pull/38377) merges recent bug fixes and state management updates into `v2`, while officially removing the legacy `packages/opencode` runtime.
*   **Session Turn Loop Fix:** Addressing a frustrating infinite loop, [PR #38387](https://github.com/anomalyco/opencode/pull/38387) fixes the session loop logic to reply based on parent relationships rather than message ID timestamps.
*   **Markdown Prompt Interpolation:** [PR #38379](https://github.com/anomalyco/opencode/pull/38379) introduces `{file:path}` syntax in agent markdown configurations, allowing dynamic external file imports for system prompts.
*   **Accessibility (a11y) Improvements:** [PR #38393](https://github.com/anomalyco/opencode/pull/38393) exposes streaming assistant content to screen readers during generation, fixing a major accessibility gap.
*   **ACP Native Review Staging:** [PR #38198](https://github.com/anomalyco/opencode/pull/38198) changes how file edits are handled in the Agent Client Protocol, staging them for native review rather than writing them immediately.
*   **Search Backend Docs Expanded:** Multiple PRs ([#38394](https://github.com/anomalyco/opencode/pull/38394), [#38395](https://github.com/anomalyco/opencode/pull/38395)) updated web search documentation to officially include the newly supported "Parallel" backend alongside "Exa".
*   **Tab Key Focus Fix:** [PR #38361](https://github.com/anomalyco/opencode/pull/38361) stops the OpenCode TUI from consuming the `Tab` key when the prompt textarea is disabled during permission requests, restoring standard keyboard navigation.
*   **Apply Patch Permission Fix:** [PR #16051](https://github.com/anomalyco/opencode/pull/16051) fixes a mapping bug where `apply_patch` was not properly registered under the `edit` permission scope.

### 5. Feature Request Trends
*   **Enhanced Multimodal Interactions:** There is a strong push to expand the agent's ability to process media natively, specifically asking for audio/video inputs in the `read` tool ([#22260](https://github.com/anomalyco/opencode/issues/22260)).
*   **Local Developer Ergonomics:** Seamless integration with local LLMs is highly requested, highlighted by the demand for auto-discovering models from local OpenAI-compatible endpoints ([#6231](https://github.com/anomalyco/opencode/issues/6231)).
*   **Portability and Sandboxing:** A notable request was made for a "Portable USB Creator" to allow execution on locked-down, air-gapped, or corporate machines without installation ([#38391](https://github.com/anomalyco/opencode/issues/38391)).
*   **TUI Navigation Enhancements:** Users want better ways to navigate lengthy agent sessions, specifically requesting a quick-jump sidebar for user prompts ([#32165](https://github.com/anomalyco/opencode/issues/32165)) and better terminal rendering for LaTeX math formulas ([#34407](https://github.com/anomalyco/opencode/issues/34407)).

### 6. Developer Pain Points
The most glaring pain point today was the **OpenCode Go outage**, which prevented subscribed developers from getting any work done and caused confusion across the community. Beyond the outage, developers are increasingly frustrated by **session state instability**—manifesting as infinite tool loops ([#26220](https://github.com/anomalyco/opencode/issues/26220)), orphaned background processes ([#37314](https://github.com/anomalyco/opencode/issues/37314)), and files being corrupted by null bytes ([#38356](https://github.com/anomalyco/opencode/issues/38356)). Finally, **resource inefficiency** while idle—such as high CPU usage during API rate-limit waits ([#19466](https://github.com/anomalyco/opencode/issues/19466))—continues to degrade the experience for local and heavy enterprise users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-07-23.

### 1. Today's Highlights
The Pi ecosystem saw significant activity in provider compatibility and developer tooling, with notable community contributions introducing native OpenRouter OAuth, StepFun models, and constrained sampling. Critical stability issues were addressed, including fixes for runaway provider SDK retries and TUI crashes. There is also a strong community focus on refining local model support (like `llama.cpp`) and resolving caching quirks when routing Anthropic models through third-party gateways.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[OpenAI SDK Retries Sleep Indefinitely](https://github.com/earendil-works/pi/issues/6911)**: The OpenAI/Anthropic SDKs currently sleep for the full `Retry-After` duration on HTTP 429s without capping the delay, and they ignore `AbortSignal`, meaning users cannot cancel hanging requests.
*   **[Copilot Enterprise Compaction Fails](https://github.com/earendil-works/pi/issues/6768)**: Users on Copilot Enterprise are unable to compact context, receiving `421 Misdirected Request` errors across both OpenAI and Anthropic models. 
*   **[`llama.cpp` Cannot Be Default Model](https://github.com/earendil-works/pi/issues/6922)**: Setting `llama.cpp` as the default local provider causes Pi to erroneously show "No models available," blocking local-first development workflows.
*   **[OpenRouter Anthropic Cache Breakpoints Stalling](https://github.com/earendil-works/pi/issues/6940)**: When routing Anthropic models through OpenRouter, the conversation cache breakpoint stops advancing during consecutive tool-only turns, causing unnecessary token bloat.
*   **[Windows ConPTY/`herdr` Key Binding Collisions](https://github.com/earendil-works/pi/issues/6973)**: Running Pi nested inside the `herdr` terminal multiplexer on native Windows breaks arrow keys and Escape sequences due to conflicting `modifyOtherKeys` negotiations.
*   **[OpenAI-compatible Timeouts Regression](https://github.com/earendil-works/pi/issues/6476)**: A regression in v0.80.6 caused `httpIdleTimeoutMs` to be ignored for self-hosted OpenAI-compatible APIs (like vLLM), breaking long-running inference requests. 
*   **[Concurrent Extension Dialogs Hang TUI](https://github.com/earendil-works/pi/issues/6978)**: If two extension dialogs open simultaneously, the first creates an orphaned Promise that never resolves, causing the interactive TUI to hang indefinitely on "Working...".
*   **[OAuth Anthropic Billed as API Usage](https://github.com/earendil-works/pi/issues/6979)**: Users report that OAuth-authenticated Anthropic requests are being metered as standard API usage rather than utilizing the user's active Pro/Max session limits.
*   **[Malicious Extension Bleeding Across Sessions](https://github.com/earendil-works/pi/issues/6972)**: The extension `pi-goal-x` was reported for unsafe behavior, leaking command-line instructions and state across independent `pi` terminal sessions.
*   **[Bracket Characters Break `/scoped-models`](https://github.com/earendil-works/pi/issues/6210)**: Custom model IDs containing brackets (e.g., `[1m]`) are incorrectly parsed by the selector regex, preventing users from loading specifically named local models.

### 4. Key PR Progress
Here are the 10 most impactful PRs from the last 24 hours:

*   **[PR #6980: Make Provider Retries Abortable](https://github.com/earendil-works/pi/pull/6980)**: Directly addresses the indefinite retry sleep issue (#6911) by enforcing a maximum delay and allowing users to interrupt retries via `AbortSignal`.
*   **[PR #6341: Support Constrained Sampling](https://github.com/earendil-works/pi/pull/6341)**: Adds an opt-in config allowing tools to request provider-side JSON-schema constrained tool argument generation (strict mode), vastly improving reliability for complex tool inputs.
*   **[PR #6927: Add Native OpenRouter OAuth Support](https://github.com/earendil-works/pi/pull/6927)**: Implements a seamless browser-based OAuth flow with PKCE S256 for OpenRouter, eliminating the need for manual API key configuration.
*   **[PR #6967: Expose Session Metadata to Bash Tools](https://github.com/earendil-works/pi/pull/6967)**: Passes active session metadata (provider, model, reasoning level) to the bash tool's environment, allowing helper scripts and subprocesses to easily introspect the current Pi state.
*   **[PR #6903: Speed up External Editor Launch](https://github.com/earendil-works/pi/pull/6903)**: Fixes severe launch delays for the `Ctrl+G` external editor by writing temp files to an isolated `mkdtemp` subdirectory rather than a cluttered root `os.tmpdir()`.
*   **[PR #6960: Add StepFun Providers](https://github.com/earendil-works/pi/pull/6960)**: Introduces four native models for the StepFun provider, covering both Chinese and global routing endpoints.
*   **[PR #6916: Add AgentHarness Execution Tools](https://github.com/earendil-works/pi/pull/6916)**: Introduces an abstraction layer (`AgentHarnessTool`) to pass arbitrary application context (like `ExecutionEnvironment` and session IDs) to tool execution, greatly enhancing extension developer capabilities.
*   **[PR #6984: Force Adaptive Thinking in Bedrock](https://github.com/earendil-works/pi/pull/6984)**: Fixes a `ValidationException` for newer Claude models (like Sonnet-5) on AWS Bedrock by honoring `compat.forceAdaptiveThinking` rather than relying purely on hardcoded model name matches.
*   **[PR #6881: Use Provider-Reported Costs](https://github.com/earendil-works/pi/pull/6881)**: Updates the AI core to dynamically read actual billed costs provided in API responses, providing more accurate usage telemetry than static catalog estimates.
*   **[PR #6955: Handle WebSocket Recovery](https://github.com/earendil-works/pi/pull/6955)**: Improves OpenAI WebSocket resilience by clearing the `previous_response` cache and establishing a fresh connection if a `previous_response_not_found` error is encountered.

### 5. Feature Request Trends
*   **Advanced Session & Context Telemetry**: Developers want deeper introspection of active Pi sessions. This includes requests to expose session metadata to external scripts (PR #6967), emit granular `bash_execution_update` events for parallel tracking (PR #6971), and dynamically fetch available thinking levels via RPC (PR #6865).
*   **Smarter Model Switching & Routing**: Users are asking for better UX around model selection, such as MRU (Most Recently Used) model toggling instead of strict alphabetical cycling, and more robust routing support for BYO local/self-hosted providers like `llama.cpp`.
*   **Cost Control & Caching Optimization**: There is a strong push for maximizing token efficiency. This includes surfacing actual upstream provider costs (PR #6881), enforcing provider-side constrained tool generation (PR #6341), and ensuring cache breakpoints operate perfectly during multi-step tool usage.

### 6. Developer Pain Points
*   **Third-Party SDK Hangups**: Pi’s reliance on native OpenAI and Anthropic SDKs for retry mechanisms has been a major source of frustration. Un-capped `Retry-After` timers that ignore abort signals are causing workflow bottlenecks, though the community has actively stepped up with patches.
*   **Terminal & OS Compatibility Friction**: Windows users continue to battle with terminal emulator compatibility. The combination of nested ConPTY environments, VT-input negotiations, and Pi's keybindings causes unresponsive arrow keys and broken UI elements.
*   **Extension State Bleeds**: The extension ecosystem is showing growing pains. Developers are frustrated by scope collapsing when installing new extensions, concurrent extension dialogs orphaning promises, and worst-case scenarios where poorly authored packages bleed global configuration into isolated terminal sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-23.

### 1. Today's Highlights
Qwen Code rolled out its first **v0.20.0 preview and nightly builds**, accompanied by an active push to stabilize core testing and fix CLI update mechanisms. The community and core team focused heavily on hardening agent security—specifically sanitizing environment variables to prevent credential leakage—and resolving breaking API interactions with OpenAI-compatible endpoints.

### 2. Releases
*   **[v0.20.0-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-preview.0)** & **[v0.20.0-nightly.20260722](https://github.com/QwenLM/qwen-code/releases)**: Initial v0.20.0 pre-releases. Notable changes include expanded telemetry test coverage for daemon metric initialization ordering ([PR #7456](https://github.com/QwenLM/qwen-code/pull/7456)).
*   **v0.0.0-benchmark-poc.20260722**: A temporary pre-release validating the GitHub Actions → ECS benchmark worker publication path (not a production release).

### 3. Hot Issues
*   **[#7284](https://github.com/QwenLM/qwen-code/issues/7284) [P1] `web_fetch` side-query breaks TokenPlan endpoints:** Forced `enable_thinking=false` in side-queries caused 400 errors on strict endpoints. (Closed, heavily discussed alongside [#7440](https://github.com/QwenLM/qwen-code/issues/7440)).
*   **[#7316](https://github.com/QwenLM/qwen-code/issues/7316) [P2] OpenAI toolCall incompatibility breaks `subAgent`:** OpenAI-compatible models returning empty strings for optional tool parameters (like `working_dir`) are breaking subagent workflows. 
*   **[#7306](https://github.com/QwenLM/qwen-code/issues/7306) [P2] Harden tool-output budgeting & artifact lifecycle:** Core team proposal to finalize phase 1 correctness for tool output budgets and artifact management, building on recently merged regressions.
*   **[#7449](https://github.com/QwenLM/qwen-code/issues/7449) [P3] Enterprise external-memory integration profile:** A documentation-first proposal to define a provider-neutral memory integration architecture for enterprise users.
*   **[#7404](https://github.com/QwenLM/qwen-code/issues/7404) [P3] Update check timeout too short:** The CLI version check almost always times out when loading large legacy sessions on startup.
*   **[#6577](https://github.com/QwenLM/qwen-code/issues/6577) [P2] Windows Alt+V paste broken:** Users report clipboard screenshots cannot be pasted via Alt+V in Windows PowerShell/Terminal.
*   **[#5958](https://github.com/QwenLM/qwen-code/issues/5958) [P2] Web Shell mobile bugs:** The CodeMirror input editor is non-functional on iOS Safari and Android Chrome.
*   **[#7264](https://github.com/QwenLM/qwen-code/issues/7264) [P2] Cold-start performance:** Identifies 17+ MiB of eager static imports in the ACP child process causing slow cold starts, requesting lazy-loading refactors.
*   **[#7287](https://github.com/QwenLM/qwen-code/issues/7287) [P2] Auto-memory write rejection:** `MEMORY.md` is loaded into prompts but skipped by `FileReadCache`, causing the agent's first programmatic write to fail.
*   **[#7537](https://github.com/QwenLM/qwen-code/issues/7537) [P1] Core test suite red on main:** A failing fork dispatch test is currently blocking all Ubuntu CI runs on PRs.

### 4. Key PR Progress
*   **[PR #7534](https://github.com/QwenLM/qwen-code/pull/7534) fix(core): retry requests when providers require thinking:** Implements an automatic single-retry for OpenAI-compatible endpoints that reject `enable_thinking=false` requests.
*   **[PR #7527](https://github.com/QwenLM/qwen-code/pull/7527) fix(core): strip daemon secrets from child env:** Expands `sanitizeChildEnv()` to hooks and tool-discovery spawns, fixing the credential exposure risk outlined in #6601.
*   **[PR #7531](https://github.com/QwenLM/qwen-code/pull/7531) fix(core): close gaps in destructive-git guard:** Patches the AUTO guard to catch missing spellings of `git clean` and `git checkout`, preventing accidental destructive actions.
*   **[PR #7471](https://github.com/QwenLM/qwen-code/pull/7471) feat(web-shell): add git mode selector:** Adds a UI popover allowing users to choose git workflows (e.g., current branch vs. worktree) when starting a new web session.
*   **[PR #7493](https://github.com/QwenLM/qwen-code/pull/7493) fix(vscode): use file picker image paths:** Fixes a bug where images selected via the VS Code UI weren't actually sent to the vision model.
*   **[PR #7530](https://github.com/QwenLM/qwen-code/pull/7530) refactor(core): tier prompt fragments:** Overhauls prompt rendering to tier fragments by cache stability, optimizing context window usage and token costs.
*   **[PR #7540](https://github.com/QwenLM/qwen-code/pull/7540) test(core): un-red main CI:** Fixes the blocking `agent.test.ts` stub registry to restore CI functionality for pending PRs.
*   **[PR #7517](https://github.com/QwenLM/qwen-code/pull/7517) feat(core): add Goal v3 state protocol:** Introduces a versioned lifecycle state contract with deterministic transitions and optimistic-concurrency controls.
*   **[PR #7545](https://github.com/QwenLM/qwen-code/pull/7545) / [PR #7544](https://github.com/QwenLM/qwen-code/pull/7544) fix(cli): resolve npm wrappers:** Resolves update failures occurring when version managers (like `mise`) replace the standard `npm` executable with bash wrappers.
*   **[PR #7497](https://github.com/QwenLM/qwen-code/pull/7497) feat(cli): support native video input:** Upgrades the `/learn` command to accept local and HTTP video files (MP4, WebM, etc.) natively.

### 5. Feature Request Trends
*   **Advanced Web Shell & Worktree Management:** Users want richer UI controls in the Web Shell, specifically context and workspace selectors to fluidly switch between local execution and isolated git worktrees ([#6700](https://github.com/QwenLM/qwen-code/issues/6700), [#6701](https://github.com/QwenLM/qwen-code/issues/6701), [#7471](https://github.com/QwenLM/qwen-code/pull/7471)).
*   **Resilient Tooling Fallbacks:** The community is asking for automated degradation paths rather than hard failures—such as falling back to `curl` when the standard `web_fetch` tool is blocked or encounters provider API friction ([#7298](https://github.com/QwenLM/qwen-code/issues/7298)).
*   **Multi-Agent Visualization:** Demand for better observability of agent orchestration, specifically visualizing Todo plan execution as a Directed Acyclic Graph (DAG) linked to live subagent performance ([#7525](https://github.com/QwenLM/qwen-code/issues/7525)).

### 6. Developer Pain Points
*   **OpenAI Compatibility Friction:** Integrating 3rd-party OpenAI-compatible endpoints remains painful. Strict parameter validation (e.g., rejecting empty strings in tool calls, hard-failing on `enable_thinking=false`) is breaking agents and web fetches, requiring core-level patches to gracefully negotiate parameters ([#7316](https://github.com/QwenLM/qwen-code/issues/7316), [#7284](https://github.com/QwenLM/qwen-code/issues/7284)).
*   **CLI Startup & Update Reliability:** Developers using Node version managers (like `mise`) or loading large legacy sessions frequently encounter broken update mechanisms, either via registry timeouts or path resolution errors pointing to bash wrappers instead of `npm-cli.js` ([#7404](https://github.com/QwenLM/qwen-code/issues/7404), [#7515](https://github.com/QwenLM/qwen-code/issues/7515), [#7543](https://github.com/QwenLM/qwen-code/issues/7543)).
*   **Mobile and Terminal Rendering:** Mobile users are entirely blocked by broken CodeMirror inputs in WebShell ([#5958](https://github.com/QwenLM/qwen-code/issues/5958)), while Linux/TMUX users continue to fight with UI flickering and WASM memory access crashes during rendering ([#6137](https://github.com/QwenLM/qwen-code/issues/6137), [#6820](https://github.com/QwenLM/qwen-code/issues/6820)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek TUI (CodeWhale) for July 23, 2026.

### 1. Today's Highlights
CodeWhale is making the final push towards the **v0.9.1 release**, with maintainers heavily focused on release-gating, UI/UX refinement, and dogfooding. A major architectural proposal for a **"Context Diet" (v0.9.2)** was introduced to aggressively optimize token usage by trimming system prompts and tool schemas. Additionally, the community saw a surge in third-party provider integrations, including minimax and TelecomJS, alongside critical fixes for Windows environment setups.

### 2. Releases
*No new stable releases were cut in the last 24 hours. The project remains in an active release-candidate/dogfooding phase for v0.9.1.*

### 3. Hot Issues
Here are the 10 most noteworthy issues driving community and maintainer discussion:

*   **[EPIC] Context Diet & Token Attribution ([#4704](https://github.com/Hmbown/CodeWhale/issues/4704))**: A massive architectural proposal for v0.9.2 to audit and minimize every model-facing byte. It aims to reduce stable system prompt sizes (currently ~29 KB) and eliminate redundant context.
*   **UI Refactor Needed ([#2766](https://github.com/Hmbown/CodeWhale/issues/2766))**: A highly-supported community complaint (9 comments) pointing out that terminal output is hard to copy and that confirmation pop-ups obscure the main interface. 
*   **EPIC: Staged Command-Boundary Refactor ([#2870](https://github.com/Hmbown/CodeWhale/issues/2870))**: An ongoing effort (17 comments) to break down the command-strategy refactor discussed in #2791 into smaller, mergeable layers to ensure reliability.
*   **CodeWhale Tsunami Mapper ([#4227](https://github.com/Hmbown/CodeWhale/issues/4227))**: A request for a bundled skill/workflow to help contributors automatically pull the latest `main` and rebuild the project, mitigating integration churn caused by the project's high velocity (10+ PRs/day).
*   **Universal PreToolUse/PostToolUse Hooks ([#1917](https://github.com/Hmbown/CodeWhale/issues/1917))**: A proposal for a hook-based lifecycle layer that allows Cancel (with rollback), Pause, and Resume capabilities for any tool action.
*   **Sub-agent Details in TUI ([#2889](https://github.com/Hmbown/CodeWhale/issues/2889))**: Restored issue tracking the need for the sidebar's Work/To-do and Agents panes to display real sub-agent details and structured current activity.
*   **Default Skill Pack Shipping ([#4691](https://github.com/Hmbown/CodeWhale/issues/4691))**: Closed issue securing the requirement to ship a first-party end-user skill pack (interview, plan, debug, etc.) in v0.9.1, comparable to Claude Code or Devin.
*   **Kimi K3 Model-ID Cross-Pairing Bug ([#4687](https://github.com/Hmbown/CodeWhale/issues/4687))**: A release-blocker where CodeWhale treated Kimi Code and direct Moonshot K3 routes as interchangeable, causing routing failures.
*   **macOS Dropbox File Provider Failure ([#4085](https://github.com/Hmbown/CodeWhale/issues/4085))**: A lingering bug where CodeWhale cannot read/write files in the modern `~/Library/CloudStorage/Dropbox/` directory due to macOS File Provider framework boundaries.
*   **Windows PATH Overwrite ([#4685](https://github.com/Hmbown/CodeWhale/issues/4685))**: A critical bug report indicating that the Windows `CodeWhaleSetup.exe` overwrites the user's PATH variable instead of appending to it, breaking existing workflows.

### 4. Key PR Progress
Recent pull requests highlight the intense focus on finalizing v0.9.1 and expanding provider support:

*   **[PR #4711](https://github.com/Hmbown/CodeWhale/pull/4711)**: Focuses the TUI top bar specifically on active To-dos and Sub-agents, hiding empty coordination chrome and making dividers draggable.
*   **[PR #4695](https://github.com/Hmbwn/CodeWhale/pull/4695)**: Ships the default CodeWhale skill pack (bundled v5), providing built-in workflows for implementation, debugging, and security reviews.
*   **[PR #4693](https://github.com/Hmbown/CodeWhale/pull/4693)**: Fixes Work summary lifecycle and top-area hierarchy, ensuring transient work summaries expire after 4 seconds to reduce UI clutter.
*   **[PR #4694](https://github.com/Hmbown/CodeWhale/pull/4694)**: Implements "fail closed" logic for mismatched Kimi Code and Moonshot K3 model IDs to prevent silent routing errors.
*   **[PR #4686](https://github.com/Hmbown/CodeWhale/pull/4686)**: Adds new API routes for MiniMax, specifically handling the Chinese/Token Plan sibling endpoint (`api.minimaxi.com`).
*   **[PR #4679](https://github.com/Hmbown/CodeWhale/pull/4679)**: Delivers the unified `/skills` manager, acting as a single source of truth for inventorying, auditing, installing, and updating skills.
*   **[PR #4696](https://github.com/Hmbown/CodeWhale/pull/4696)**: Introduces a fun, staged `/uwu` theme (with `owo` and `kawaii` aliases) featuring soft color shimmers and classic empty-state marks.
*   **[PR #4370](https://github.com/Hmbown/CodeWhale/pull/4370)**: Fixes a bug where custom providers (like TelecomJS) only showed 1 model by properly triggering the `refresh_catalog_cache` function.
*   **[PR #4675](https://github.com/Hmbown/CodeWhale/pull/4675)**: Integrates broad v0.9.1 runtime simplifications, including a final TUI color grammar (cool mode colors, warm permission colors).
*   **[PR #4673](https://github.com/Hmbown/CodeWhale/pull/4673)**: Fixes sub-agent isolation by defaulting shell commands to the `context.workspace` instead of falling back to the parent workspace.

### 5. Feature Request Trends
*   **Context & Token Optimization**: With models processing increasingly complex tool calls, there is a massive demand for "context diets"—stripping redundant JSON properties, shortening tool descriptions, and deduplicating project/environment context to save prefix tokens.
*   **First-Party Skill Ecosystems**: Users want CodeWhale to act more like Claude Code and Devin out-of-the-box, requesting robust `/skills` management and bundled default packs (plan, debug, review) that the model can autonomously invoke.
*   **Expanded Regional LLM Providers**: High activity around integrating China-specific and alternative API routes (e.g., MiniMax CN, Moonshot K3, TelecomJS).
*   **Workspace & Sub-agent Isolation**: As multi-agent workflows mature, users are requesting stricter boundaries—ensuring sub-agents operate strictly within their assigned worktrees and don't leak state into parent directories.

### 6. Developer Pain Points
*   **Windows Installer Flaws**: The current installer overwriting the system PATH variable is a high-severity issue that completely disrupts developer environments.
*   **TUI Clutter & Obstruction**: Developers are frustrated by UI elements that block terminal output, display unnecessary `<turn_meta>` tags upon session reload, or clutter the screen with useless operational coordination data.
*   **Cross-Boundary File Access**: Despite setting `sandbox_mode = "danger-full-access"`, the internal tools layer still blocks file access in modern macOS cloud storage locations (like Dropbox File Provider), requiring manual workarounds.
*   **Flaky DeepSeek API Routing**: Users report intermittent network failures when using the default DeepSeek completions endpoint, often failing after prolonged sessions.

</details>