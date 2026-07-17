# AI CLI Tools Community Digest 2026-07-18

> Generated: 2026-07-17 22:13 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 18, 2026 community digests.

## 1. Ecosystem Overview
The AI CLI tool ecosystem is rapidly maturing beyond simple chat interfaces into complex, multi-agent orchestration platforms. Today’s development activity across the board is dominated by the challenges of autonomous delegation, specifically focusing on preventing infinite loops, fortifying security perimeters, and managing cross-platform execution environments (Windows/Linux/macOS). Developers are increasingly frustrated by UI jank, process leaks, and token bloat, pushing maintainers to implement stricter memory management, AST-aware context retrieval, and robust background session handling. As these tools evolve into backend daemons (e.g., Web Shells, remote fleets) and enterprise workspace managers, standardizing security guardrails and cost transparency has become the ecosystem's top priority.

## 2. Activity Comparison
*Note: Data reflects tracked issues and PRs explicitly summarized in the July 18 digests.*

| Tool | Issues Highlighted | PRs Highlighted | Release Status (Last 24h) | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 8 | **v2.1.212** | Background workflows (`/fork`), cost guardrails, plugin security. |
| **OpenAI Codex** | 10 | 10 | 2 Alpha Rust builds | Core stability, thread history search, Windows app performance. |
| **Gemini CLI** | 10 | 10 | None | Session security, loop mitigation, automated issue-to-PR pipelines. |
| **GitHub Copilot CLI** | 10 | 0 | **v1.0.72-1** | Plugin management flags, UI determinism, zombie process fixes. |
| **Kimi Code CLI** | 4 | 0 | None | Model regression (K2.6), Windows install blockers, enterprise plugin bugs. |
| **OpenCode** | 10 | 10 | None (QA/Internal) | V2 stability, OpenAI-compatible provider support, session/event scoping. |
| **Pi (pi-mono)** | 10 | 10 | None | Model compatibility (Kimi K3), compaction reliability, TUI performance. |
| **Qwen Code** | 10 | 10 | 1 Nightly build | Multi-workspace daemon architecture, subagent delegation, Web Shell UI. |
| **DeepSeek TUI** | 10 | 10 | None (Freeze) | v0.9.1 freeze, HarmonyOS/Termux support, Windows PTY leaks. |

## 3. Shared Feature Directions
*   **Subagent Guardrails & Loop Prevention:** Almost all tools are battling autonomous agents that yo-yo, hang indefinitely, or overwrite data. **Claude Code**, **Gemini CLI**, **Qwen Code**, and **DeepSeek TUI** are actively implementing iteration limits, 3-state safety parsers, and strict leaf-agent permissions to prevent infinite tool calls.
*   **Windows OS Instability:** Cross-platform consistency remains a massive pain point. **OpenAI Codex**, **GitHub Copilot CLI**, **Kimi Code CLI**, and **DeepSeek TUI** reported critical Windows bugs ranging from UI freezes and unresponsive HID enumeration to zombie process accumulation and ConPTY infrastructure crashes.
*   **Advanced Context & Memory Compaction:** As context windows fill, summarizing history without losing state is critical. **OpenAI Codex** is adding thread context pins, **OpenCode** and **Pi** are fixing context compaction reliability, while **Gemini CLI** and **Claude Code** are exploring AST-aware codebase navigation to reduce token noise.
*   **Plugin & Toolchain Extensibility:** There is a strong push towards dynamic plugin management and MCP (Model Context Protocol) support. **GitHub Copilot CLI** and **Claude Code** introduced granular plugin flags and hardening, while **OpenCode** and **Qwen Code** focused on runtime MCP controls and live reloading capabilities.

## 4. Differentiation Analysis
*   **Architecture & Scope:** **Claude Code** and **Qwen Code** are pushing towards "fleet" and multi-workspace daemon architectures, allowing background tasks and web shells. In contrast, tools like **Pi** and **OpenCode** remain heavily focused on the single-user power-user experience, emphasizing deep OpenAI-compatible provider integrations and highly customizable TUIs.
*   **Security Philosophies:** **Gemini CLI** and **Claude Code** are taking proactive, zero-trust approaches (e.g., macOS Seatbelt profiles, YAML injection blocking, and bash variable expansion checks). **DeepSeek TUI** and **GitHub Copilot CLI** are currently more reactive, dealing with permission bypasses (e.g., forced git deletes) and agent "constitutions."
*   **Ecosystem Expansion vs. Core Stability:** **DeepSeek TUI** is uniquely focused on expanding hardware/OS boundaries, actively building for HarmonyOS and Android/Termux. Meanwhile, **OpenAI Codex** and **GitHub Copilot CLI** are dedicating heavy resources to fundamental desktop app stability and native Windows performance.

## 5. Community Momentum & Maturity
*   **High Iteration & Momentum:** **Claude Code**, **OpenAI Codex**, **Gemini CLI**, and **Qwen Code** demonstrate the highest momentum. They are processing massive PR merge cycles (10+ PRs daily) and shipping rapid-fire releases. Their communities are highly engaged in architectural RFCs (e.g., Qwen’s multi-workspace daemon).
*   **Maturing/Stabilizing Phase:** **DeepSeek TUI** and **GitHub Copilot CLI** are in explicit stabilization phases. DeepSeek TUI is in a v0.9.1 release freeze focusing entirely on bug fixes, while Copilot CLI shipped a patch release with zero new PRs, indicating a focus on triage.
*   **Stalled/Narrow Focus:** **Kimi Code CLI** shows the lowest momentum today, hampered by internal SDK leaks breaking public plugins and severe community backlash regarding model regressions (K2.6), requiring manual intervention rather than forward feature development.

## 6. Trend Signals
*   **The Shift to Ambient Background Execution:** The CLI is no longer just a terminal; it is becoming an orchestrator for background fleets (Claude Code's `/fork`, Qwen's Web Shell). Developers should prepare their workflows and cost monitoring tools for asynchronous, multi-agent fan-outs rather than just synchronous terminal interactions.
*   **Cost & Token Shock:** The era of unbounded agent context is ending abruptly. Severe operational cost bugs (e.g., Claude Code's $1,000 unintended charges, Pi's Copilot pricing miscalculations) signal an urgent industry need for hard per-turn tool budgets, accurate telemetry, and provider-agnostic cost tracking.
*   **The Local/Custom Provider Renaissance:** With premium models frequently walled off or regressing (e.g., Claude's Fable 5 API-only shift, Kimi K2.6's output degradation), there is a massive trend toward local inference. Tools that seamlessly auto-discover and support OpenAI-compatible endpoints via Ollama, vLLM, or SGLang (like **OpenCode**, **Pi**, and **DeepSeek TUI**) will capture developers seeking autonomy from major cloud providers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report based on the recent data.

### 1. Top Skills Ranking
*Based on community engagement and PR activity, these represent the most actively discussed Skill improvements and additions:*

*   **skill-creator (Evaluation & Optimization Fixes)**
    *   **Functionality:** Fixes the `run_eval.py` script within the skill-creator, which previously reported 0% recall and failed to evaluate descriptions accurately. 
    *   **Discussion Highlights:** This is the most critical active pain point in the ecosystem, with multiple overlapping PRs (#1298, #1323, #1099, #1050) attempting to fix subprocess bugs, Windows compatibility (`PATHEXT`/`cp1252` issues), and trigger detection. 
    *   **Current Status:** Open
*   **skill-creator (Validation & YAML Handling)**
    *   **Functionality:** Replaces character-based length checks with UTF-8 byte-length validation and adds pre-parse checks for unquoted YAML special characters.
    *   **Discussion Highlights:** Resolves silent parsing failures and Rust panics when the CLI processes multi-byte or special characters. 
    *   **Current Status:** Open ([PR #362](https://github.com/anthropics/skills/pull/362), [PR #361](https://github.com/anthropics/skills/pull/361), [PR #539](https://github.com/anthropics/skills/pull/539))
*   **Meta-Skills: Quality, Security, and Self-Auditing**
    *   **Functionality:** "Meta-skills" designed to audit AI output before delivery, verify claimed files exist, and analyze other skills for quality and security vulnerabilities.
    *   **Discussion Highlights:** High interest in gating mechanisms to prevent AI hallucination and enforce governance/policy compliance before code is delivered to the user.
    *   **Current Status:** Open ([PR #1367](https://github.com/anthropics/skills/pull/1367), [PR #83](https://github.com/anthropics/skills/pull/83))
*   **Document & Typography Enhancements**
    *   **Functionality:** Prevents typographical errors in generated documents (orphan words, widow paragraphs) and fixes OOXML `w:id` collisions that corrupt DOCX files with tracked changes.
    *   **Discussion Highlights:** Users want polished, enterprise-ready document generation without manual cleanup. 
    *   **Current Status:** Open ([PR #514](https://github.com/anthropics/skills/pull/514), [PR #541](https://github.com/anthropics/skills/pull/541))

### 2. Community Demand Trends
*Distilled from the most active Issues, the community is demanding better trust, lifecycle management, and enterprise utility:*

*   **Security & Trust Boundaries:** Users are highly concerned about community skills impersonating official Anthropic skills under the `anthropic/` namespace, demanding stricter validation and security measures ([Issue #492](https://github.com/anthropics/skills/issues/492), [Issue #1175](https://github.com/anthropics/skills/issues/1175)).
*   **Organizational & Lifecycle Management:** There is heavy anticipation for org-wide skill sharing to eliminate manual file passing via Slack/Teams, as well as better state/memory management for long-running agents ([Issue #228](https://github.com/anthropics/skills/issues/228), [Issue #1329](https://github.com/anthropics/skills/issues/1329)).
*   **Standardized API Exposure:** Developers want Skills packaged and exposed via the Model Context Protocol (MCP) to create standardized, programmatic software interfaces ([Issue #16](https://github.com/anthropics/skills/issues/16)).
*   **Enterprise Ecosystem Integrations:** Clear demand for native integrations with enterprise platforms like AWS Bedrock and SharePoint Online ([Issue #29](https://github.com/anthropics/skills/issues/29), [Issue #1175](https://github.com/anthropics/skills/issues/1175)).

### 3. High-Potential Pending Skills
*These open PRs represent highly functional, community-driven skills that are likely to be merged soon:*

*   **[Add document-typography skill](https://github.com/anthropics/skills/pull/514):** An automated quality control skill for documents that eliminates common AI generation formatting errors (widows/orphans).
*   **[Add ODT skill](https://github.com/anthropics/skills/pull/486):** Enables Claude to natively create, read, and fill OpenDocument Format (.odt, .ods) files, heavily requested by open-source users.
*   **[Add pyxel skill](https://github.com/anthropics/skills/pull/525):** Integrates the Pyxel retro game engine, allowing Claude to write, run, and iterate on 8-bit Python games.
*   **[Add testing-patterns skill](https://github.com/anthropics/skills/pull/723):** A comprehensive skill standardizing test generation based on the "Testing Trophy" model and React component testing.
*   **[Add color-expert skill](https://github.com/anthropics/skills/pull/1302):** A self-contained utility giving Claude deep knowledge of color naming systems, spaces (OKLCH, CAM16), and contrast guidelines.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for robust quality-control mechanisms (both for skill creation and AI output delivery) alongside strict security boundaries to safely expand Claude Code into enterprise and collaborative workflows.

---

# Claude Code Community Digest
**Date:** 2026-07-18

## 1. Today's Highlights
Claude Code v2.1.212 introduces a major refactor to background workflows, replacing the in-session subagent with a dedicated `/fork` command that spawns a true background session. Meanwhile, the community is actively responding to yesterday's sudden shift of the **Fable 5** model to API-only access, with users consolidating feedback over unexpected paywall blocks. Plugin security and architecture also saw significant community-driven hardening, focusing on preventing runaway agents and fixing plugin manifests.

## 2. Releases
*   **[v2.1.212](https://github.com/anthropics/claude-code/releases/tag/v2.1.212)**
    *   `/fork` has been upgraded to copy the current conversation into a new background session (visible via `claude agents`). The old in-session subagent functionality is now accessed via `/subtask`.
    *   Added a new `claude auto-mode reset` command to easily restore default auto-mode configurations.

## 3. Hot Issues
1.  **[Issue #78613](https://github.com/anthropics/claude-code/issues/78613) - Fable 5 → API-only: please reconsider a subscription path**
    *   *Why it matters:* A consolidated thread tracking the sudden shift of the Fable 5 model to API-only access. Users who rely on subscriptions are reporting broken workflows, generating rapid community alignment (15+ 👍 in hours).
2.  **[Issue #27302](https://github.com/anthropics/claude-code/issues/27302) - Support multiple Connector accounts**
    *   *Why it matters:* With 214 comments and 311 👍, this remains the top-voted enhancement. Developers deeply need the ability to link multiple accounts from the same connector (e.g., distinct GitHub orgs) simultaneously in Claude Code on the web.
3.  **[Issue #8856](https://github.com/anthropics/claude-code/issues/8856) - Memory leak: Missing cleanup for `/tmp/claude-*-cwd`**
    *   *Why it matters:* A long-standing Linux/WSL performance bug. Claude Code creates temp files for Bash tracking but never deletes them, slowly eating disk space. 
4.  **[Issue #68285](https://github.com/anthropics/claude-code/issues/68285) - Workflow fan-out inherits premium-tier default with no cost ceiling**
    *   *Why it matters:* A critical operational cost bug. Background agents inherit expensive model defaults without guardrails, leading to reports of ~$1,000 in unintended, auto-purchased API charges.
5.  **[Issue #3412](https://github.com/anthropics/claude-code/issues/3412) - Allow viewing/editing of “pasted text” blocks**
    *   *Why it matters:* Dictation users are frustrated that pasted text enters the TUI as a collapsed block, preventing quick edits before submission. A highly requested accessibility refinement.
6.  **[Issue #75577](https://github.com/anthropics/claude-code/issues/75577) - Task tools silently disabled on Opus 4.8 / Sonnet 5 / Fable 5**
    *   *Why it matters:* The `TaskCreate` and `TaskUpdate` tools are silently disabled for newer models due to a model-id gate, returning "nonexistent" instead of a clear error.
7.  **[Issue #65632](https://github.com/anthropics/claude-code/issues/65632) - Inline KaTeX math (`$...$`) no longer renders (regression)**
    *   *Why it matters:* A regression in the desktop app's chat output where inline math formatting breaks unless elevated to block-level formatting.
8.  **[Issue #76500](https://github.com/anthropics/claude-code/issues/76500) - Agent Teams mailbox: turn-boundary delays & lost reports**
    *   *Why it matters:* Developers utilizing experimental Agent Teams are seeing massive latency (up to 62 minutes) and dropped final reports as the mailbox shutdown handshake fails.
9.  **[Issue #78590](https://github.com/anthropics/claude-code/issues/78590) - Desktop app Remote Control repeatedly fails**
    *   *Why it matters:* Remote control credentials are failing to refresh after token expiry, leaving background remote sessions completely unresponsive.
10. **[Issue #52420](https://github.com/anthropics/claude-code/issues/52420) - Add a configurable verb for post-turn completion line**
    *   *Why it matters:* A popular UI request to make the whimsical end-of-turn text (e.g., "cogitated for 12s") configurable via `settings.json` rather than relying on a hard-coded list.

## 4. Key PR Progress
1.  **[PR #78371](https://github.com/anthropics/claude-code/pull/78371) - Harden ralph-wiggum plugin**
    *   Adds critical safety bounds (iteration limits) and push/publish guards to prevent autonomous agent loops from merging unreviewed, half-finished code.
2.  **[PR #76581](https://github.com/anthropics/claude-code/pull/76581) - fix(plugins): harden YAML and symlink handling**
    *   Implements strong security fixes against YAML frontmatter injection and symlink-based credential overwrites in official plugin scripts.
3.  **[PR #78532](https://github.com/anthropics/claude-code/pull/78532) - gateway/gcp: optional internal ALB + PG16 Cloud SQL fix**
    *   Resolves a breaking terraform issue where default GCP Cloud SQL tiers were rejected by the new PG16+ ENTERPRISE_PLUS edition requirements.
4.  **[PR #78425](https://github.com/anthropics/claude-code/pull/78425) - fix(code-review): require explicit user invocation**
    *   Prevents LLMs and subagents from programmatically re-entering multi-agent review workflows, saving tokens and preventing infinite review loops.
5.  **[PR #78441](https://github.com/anthropics/claude-code/pull/78441) - fix(devcontainer script): detect native command failures**
    *   Fixes a PowerShell issue where native executable failures (`docker`, `podman`) weren't triggering `catch` blocks because they don't throw terminating errors. 
6.  **[PR #78446](https://github.com/anthropics/claude-code/pull/78446) - fix(plugin-dev): add missing plugin.json manifest**
    *   Adds the missing `.claude-plugin/plugin.json` to the `plugin-dev` directory, bringing it in line with the repo's other 12 plugins.
7.  **[PR #77427](https://github.com/anthropics/claude-code/pull/77427) - fix(pr-review-toolkit): make code-reviewer a leaf agent**
    *   Restricts the `pr-review-toolkit` code reviewer to repository-inspection only, preventing it from invoking additional agents and escalating permissions.
8.  **[PR #78445](https://github.com/anthropics/claude-code/pull/78445) - docs: correct plugin descriptions**
    *   Fixes three discrepancies between marketplace metadata/prose and actual plugin behavior (e.g., wrong hook events and pattern counts).

## 5. Feature Request Trends
*   **Multi-Account & Auth Context Switching:** Users heavily desire the ability to manage multiple accounts under the same connector (GitHub/GitLab orgs) natively in VSCode and web environments without manual switching.
*   **Cost Control & Agent Guardrails:** A strong trend asking for per-agent cost ceilings, clearer warnings when dropping to premium/API-only models, and strict limitations on what autonomous loops can push or publish.
*   **Remote Fleet & Session Management:** As agent fleets grow, developers need the desktop/mobile UIs to distinguish sessions by hostname and `cwd`, rather than just repo name, to properly track background machines.
*   **Plugin/Tool Live-Reload:** Developers want `~/.claude/skills/` to be hot-reloaded without terminating the active Claude Code session.

## 6. Developer Pain Points
*   **Background Agent Invisibility:** Scheduled tasks and `/fork` background sessions are frequently missing from Recents or the sidebar, forcing users to rely entirely on Search to locate their running jobs.
*   **State Leakage on Autonomation:** Idle notifications arriving instead of final reports, combined with `/clear` queue leaks in the Agent Teams mailbox, are making complex orchestration unreliable.
*   **Desktop App Auto-Updater Breakage:** The macOS auto-updater (ShipIt) silently quits the app post-update without relaunching, disrupting any workflows that depend on the desktop client staying open persistently.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 18, 2026.

### 1. Today's Highlights
Codex rolled out two new Rust core builds (v0.145.0-alpha.20 and .22) alongside a massive batch of merged PRs focused on optimizing thread history search, refining real-time session state, and supporting ChatGPT-branded desktop builds. However, the community discourse is currently dominated by severe performance regressions and UI hangs on the Windows desktop app, as well as persistent frustrations with sandbox environments and plugin lifecycles. 

### 2. Releases
*   **rust-v0.145.0-alpha.22** & **rust-v0.145.0-alpha.20**: Two rapid-fire alpha releases for the Rust-based core/app-server over the last 24 hours. While detailed changelogs aren't provided in the release metadata, they align tightly with today's heavy merge cycle focusing on core stability and hook integrations.

### 3. Hot Issues
*   **[Issue #20214](https://github.com/openai/codex/issues/20214) [bug, windows-os, performance]**: The Codex Windows App frequently freezes and stutters despite having sufficient system resources. Garnering 45 comments and 62 upvotes, this remains the most active ongoing pain point for Windows users.
*   **[Issue #33375](https://github.com/openai/codex/issues/33375) [CLOSED, bug, windows-os, performance]**: A highly upvoted (30) issue regarding `serialport.node` delay-load failures causing severe UI lag on Windows. The team managed to resolve this over the last day.
*   **[Issue #17229](https://github.com/openai/codex/issues/17229) [bug, windows-os, app]**: The Windows app continuously spawns `git.exe status` commands, leaving behind orphaned `git` and `conhost` processes that eventually degrade system performance.
*   **[Issue #31836](https://github.com/openai/codex/issues/31836) [bug, app]**: In the macOS desktop app, the "Projects" view "Sort By Last Updated" feature is broken—only sorting tasks within groups rather than reordering the projects themselves.
*   **[Issue #33780](https://github.com/openai/codex/issues/33780) [bug, windows-os, performance]**: A newly reported critical bug where the Windows app hangs indefinitely during launch because the main process blocks forever while trying to enumerate unresponsive HID (Human Interface Devices).
*   **[Issue #28919](https://github.com/openai/codex/issues/28919) [bug, windows-os, remote]**: Users are unable to use the "control other devices" remote feature from Windows because the tab is entirely missing from the Connections settings.
*   **[Issue #25247](https://github.com/openai/codex/issues/25247) [bug, safety-check, browser]**: Browser plugin bootstrapping fails outright in the desktop app due to the browser-client not being recognized as a trusted entity.
*   **[Issue #29908](https://github.com/openai/codex/issues/29908) [bug, sandbox, CLI]**: CLI users on Ubuntu 24.04 are experiencing broken `apply_patch` commands due to Bubblewrap loopback/userns errors during sandbox setup.
*   **[Issue #31987](https://github.com/openai/codex/issues/31987) [bug, codex-web, app]**: A major UX complaint where the "auto-recharge credits" toggle silently turns itself back on every time a user attempts to purchase credits.
*   **[Issue #33032](https://github.com/openai/codex/issues/33032) [bug, extension]**: A deep-dive report identifying that many "stuck on logo" bugs in VS Code are caused by a stale webview service-worker cache, providing a workaround while asking Codex to defend against the platform bug.

### 4. Key PR Progress
*   **[PR #33907](https://github.com/openai/codex/pull/33907)**: Adds a much-needed experimental `thread/searchOccurrences` method, enabling efficient, case-insensitive literal search across messages without the heavy overhead of replaying the thread.
*   **[PR #33905](https://github.com/openai/codex/pull/33905) & [#33902](https://github.com/openai/codex/pull/33902)**: Massive performance improvements to memory and history fetching, introducing bounded batch lookups (128 rows / 64 KiB limits) so deep reverse searches no longer tank app performance.
*   **[PR #33901](https://github.com/openai/codex/pull/33901)**: Implements support for ChatGPT-branded Desktop app builds, allowing the desktop client to dynamically search for either Codex or ChatGPT executables without breaking CLI discovery.
*   **[PR #33895](https://github.com/openai/codex/pull/33895)**: Introduces `SessionEnd` hooks, giving users and extensions the ability to cleanly execute teardown logic during app shutdown, archival, or idle unloads.
*   **[PR #33893](https://github.com/openai/codex/pull/33893) & [#33876](https://github.com/openai/codex/pull/33876)**: Upgrades the world-state tracking to persistently maintain realtime conversation status and collaboration modes (like Pair Programming), making session reconstruction much more robust.
*   **[PR #33906](https://github.com/openai/codex/pull/33906)**: Launches managed network proxies on remote executors, ensuring loopback proxy addresses are safely reachable by launched processes.
*   **[PR #33908](https://github.com/openai/codex/pull/33908)**: Expands plugin sharing capabilities by allowing plugins to be published through share updates via a new `LISTED` discoverability flag.
*   **[PR #33867](https://github.com/openai/codex/pull/33867)**: Fixes a race condition by adding a 1-second grace period to code-mode yield timeouts, ensuring late-finishing nested tool calls return properly.
*   **[PR #31058](https://github.com/openai/codex/pull/31058)**: Implements a retry mechanism for structured model-capacity errors, keeping the turn alive for up to three patient retries (30s, 2m, 5m waits) instead of instantly failing the user's request.
*   **[PR #33896](https://github.com/openai/codex/pull/33896)**: Improves plugin UX by exposing `mustShowInstallationInterstitial` metadata, allowing the app to accurately determine when a plugin requires explicit user installation prompts.

### 5. Feature Request Trends
*   **Advanced Context Retention & Pinning:** Developers are consistently asking for better ways to manage long-running context. Requests include thread context pins ([#26889](https://github.com/openai/codex/issues/26889)) to preserve crucial instructions across `/compact` events, and the ability to manually attach external ChatGPT web conversations as task context ([#32033](https://github.com/openai/codex/issues/32033)).
*   **Workspace & Repo Flexibility:** Users want the desktop app to support parent workspaces containing multiple independent Git repositories, facilitating better monorepo and multi-repo workflows ([#26338](https://github.com/openai/codex/issues/26338)).
*   **Fine-grained Session Control:** Developers are requesting features to disable timed auto-resolution for AI questions ([#29702](https://github.com/openai/codex/issues/29702)) and want more granular severity levels for CLI Hooks (e.g., `info/notice` instead of just `warning`) ([#29906](https://github.com/openai/codex/issues/29906)).

### 6. Developer Pain Points
*   **Windows App Instability:** The overwhelming majority of high-comment issues stem from Windows users. Recurring themes include complete UI freezing, memory leaks (high CPU/GPU usage when idle or visible), and broken integration with core OS features like HID device enumeration and native messaging hosts.
*   **Browser & Computer Use Fragility:** Codex's advanced browser automation features are proving highly unstable. Users report frequent `EXC_BAD_ACCESS` crashes on macOS during browser debugging ([#32399](https://github.com/openai/codex/issues/32399)), missing Computer Use plugins ([#29137](https://github.com/openai/codex/issues/29137)), and total bootstrap failures due to trust validations.
*   **Linux CLI Sandboxing:** On the CLI side, Ubuntu 24.04 users are consistently blocked by strict kernel defaults breaking Bubblewrap (`bwrap`) sandboxing, preventing the execution of standard tools like `apply_patch`.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 18, 2026.

### 1. Today's Highlights
The Gemini CLI ecosystem is heavily focused on fortifying agent security and infrastructure. Today’s activity highlights a major push to mitigate infinite ReAct loops and prompt injection vulnerabilities, alongside the introduction of automated Issue-to-PR pipelines. Additionally, the community is actively reporting subagent reliability issues, prompting maintainers to rethink memory constraints and tool execution limits.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Hot Issues
*   **Subagent Recovery and Interruption Masking** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323): The `codebase_investigator` subagent reports `GOAL` success even when hitting the `MAX_TURNS` limit, hiding failures from the user.
*   **Generalist Agent Infinite Hangs** [#21409](https://github.com/google-gemini/gemini-cli/issues/21409): A high-friction bug where simple deferrals to the generalist agent cause indefinite hangs, forcing users to manually disable subagents.
*   **Robust Component-Level Evaluations** [#24353](https://github.com/google-gemini/gemini-cli/issues/24353): An epic to scale behavioral evals across all supported Gemini models, ensuring safer and more predictable agent deployments.
*   **Auto Memory Retry Loops** [#26522](https://github.com/google-gemini/gemini-cli/issues/26522): The Auto Memory background agent infinitely retries processing low-signal transcripts if it fails to explicitly read and dismiss them.
*   **Deterministic Redaction in Auto Memory** [#26525](https://github.com/google-gemini/gemini-cli/issues/26525): Security concern raised because local transcripts are sent to the extraction model *before* the model is prompted to redact secrets.
*   **AST-Aware Codebase Navigation** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745): Investigation into adopting AST tools (like Tilth or Glyph) to allow precise method-bound reads, drastically reducing token noise and misaligned tool calls.
*   **400 Error with >128 Tools** [#24246](https://github.com/google-gemini/gemini-cli/issues/24246): Users hitting API limits when equipping over 128 tools, highlighting the need for smarter dynamic tool scoping.
*   **Shell Execution "Waiting Input" Hang** [#25166](https://github.com/google-gemini/gemini-cli/issues/25166): Core agent execution gets falsely stuck in an "Awaiting user input" state after a simple CLI command successfully completes.
*   **Symlinked Custom Agents Ignored** [#20079](https://github.com/google-gemini/gemini-cli/issues/20079): Symlinks placed in `~/.gemini/agents/filename.md` are currently bypassed by the agent registry, limiting dotfile management setups.
*   **Core Memory Crashes** [#28357](https://github.com/google-gemini/gemini-cli/issues/28357): High memory consumption during active sessions is leading to unexpected CLI crashes.

### 4. Key PR Progress
*   **Loop & Injection Mitigation** [#28429](https://github.com/google-gemini/gemini-cli/pull/28429): Introduces a safer session-level turn limit (15 turns) and enhanced loop detection to block Denial of Service (DoS) attacks via malicious workspace files.
*   **Issue-to-PR Code Generation Pipeline** [#28435](https://github.com/google-gemini/gemini-cli/pull/28435): Lays the foundation for an internal pipeline using Cloud Run, Firestore locking, and Antigravity AI agents to autonomously generate PRs from GitHub issues.
*   **macOS Seatbelt Profiles** [#28424](https://github.com/google-gemini/gemini-cli/pull/28424): Refactors macOS permissive Seatbelt profiles to align with a `deny default` model while preserving standard developer workflows.
*   **Variable Expansion Security Bypass** [#28403](https://github.com/google-gemini/gemini-cli/pull/28403): Fixes a critical bypass in bash/powershell substitution checks (`GHSA-wpqr-6v78-jr5g`) that allowed arbitrary variable expansion.
*   **Hook Trust Dialog Disclosure** [#28346](https://github.com/google-gemini/gemini-cli/pull/28346): Improves folder-trust discovery to accurately inspect and warn users about nested, executable command hooks in project settings.
*   **Native `AGENTS.md` Support** [#28240](https://github.com/google-gemini/gemini-cli/pull/28240): Adds `AGENTS.md` as a default recognized memory file alongside `GEMINI.md`, eliminating the need for manual settings configuration.
*   **Optional Direct GCP Telemetry** [#28275](https://github.com/google-gemini/gemini-cli/pull/28275): Moves direct Google Cloud telemetry exporters out of core runtime dependencies, reducing bloat for consumers not using GCP.
*   **Atomically Set Token File Modes** [#28330](https://github.com/google-gemini/gemini-cli/pull/28330): Closes a Time-of-Check to Time-of-Use (TOCTOU) vulnerability that left auth-token port files briefly world-readable.
*   **A2A-Server Environment Isolation** [#28319](https://github.com/google-gemini/gemini-cli/pull/28319): Ensures workspace path trust checks occur *before* loading environment variables, utilizing `AsyncLocalStorage` to isolate task environments.
*   **Static Eval Validation** [#28344](https://github.com/google-gemini/gemini-cli/pull/28344): Adds an `eval:validate` CLI command to lint eval source files against 9 rules, making it usable for CI pipeline gating.

### 5. Feature Request Trends
*   **Smarter Context & Navigation:** Developers want the CLI to leverage AST-aware file readers and mappers to prevent the model from reading entire files and wasting tokens ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)).
*   **Subagent Trajectory Visibility:** There is a strong demand for better debugging tools, specifically the ability to view subagent decision-making and trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
*   **Tooling & Resource Limits:** Users are requesting dynamic tool scoping to prevent API rejections when using many custom tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), alongside broader support for local configurations like symlinks ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
*   **Enhanced Agent Self-Awareness:** Requests to improve the model's understanding of its own capabilities, flags, and hotkeys so it can guide users without trial and error ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

### 6. Developer Pain Points
*   **Unreliable Subagent Delegation:** Users are frustrated that the model either ignores custom skills/subagents entirely unless explicitly prompted ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), or conversely, runs subagents in the background without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
*   **Terminal & Shell Hangs:** Interactive friction remains high, with reports of the CLI getting stuck on simple shell commands, interactive prompts (like Vite app creation), and terminal buffer corruption upon exiting external editors ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935)).
*   **Messy Workspaces:** When restricted from direct execution, the model frequently creates temporary scripts in random directories, leaving a messy Git workspace for the developer to clean up ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for July 18, 2026.

### 1. Today's Highlights
GitHub Copilot CLI rolled out version `v1.0.72-1`, introducing granular plugin management flags (`--plugin`, `--mcp`, `--skill`) alongside UI improvements for file path visibility and deterministic plan approvals. However, the community has raised significant alarms around OS-level process management, with new reports of zombie processes accumulating on Linux and installation failures on Windows. Security and permissions management also dominated the discussion, highlighting critical misclassifications for destructive git commands.

### 2. Releases
**v1.0.72-1**
*   **Added:** New `--plugin`, `--mcp`, and `--skill` flags for targeted plugin mutations. Users can now specifically remove skills via `copilot plugins remove --skill`.
*   **Improved:** Expanded compact editing rows now reveal full file paths. The plan-approval menu has been made deterministic across different models, and `/add-dir` directories are now kept visible during active sessions.

### 3. Hot Issues
1.  **[Zombie Processes Accumulate Under Copilot PID](https://github.com/github/copilot-cli/issues/4163)** *(New)*: A critical regression in v1.0.71 where the CLI fails to reap child processes, causing zombie processes (state=Z) to accumulate at a rate of ~2/min and pose long-running resource exhaustion risks.
2.  **[Forced Git Branch Deletion Misclassified](https://github.com/github/copilot-cli/issues/4156)** *(New)*: A dangerous security bypass where `git branch -D` executes silently without triggering a permission request, unlike `git push --delete`. 
3.  **[Windows Plugin Installs Fail Completely](https://github.com/github/copilot-cli/issues/4151)** *(Updated)*: Users on Windows 11 are hitting a 100% failure rate for plugin installations (`os error 5: Access is denied`) across all sources (marketplace, Git, and local).
4.  **[Voice Mode ASR Models Fail Silently](https://github.com/github/copilot-cli/issues/4024)** *(Updated)*: The `/voice` command successfully captures audio but returns empty transcriptions across all three `nemotron` models due to a `MultiModalProcessor` routing bug. 
5.  **[Plan Mode Over-Blocks Read-Only Commands](https://github.com/github/copilot-cli/issues/4160)** *(New)*: Plan mode's shell heuristic uses substring matching instead of semantic parsing, falsely blocking provably safe, read-only commands and breaking agent workflows.
6.  **[Interactive Mode Goes Blank in Windows Terminal](https://github.com/github/copilot-cli/issues/4159)** *(New)*: The interactive TUI renders initially but goes entirely blank after submitting a prompt, forcing Windows users to rely on the `-p` non-interactive flag.
7.  **[Copy Contaminated by Input Box Border](https://github.com/github/copilot-cli/issues/4116)** *(Updated)*: A UI annoyance where mouse-selecting prompt text includes the decorative box-drawing glyph in the clipboard payload.
8.  **[Gemini Models Returning 400 Bad Request](https://github.com/github/copilot-cli/issues/4155)** *(New)*: Selecting Gemini models (`gemini-3.1-pro-preview`, `gemini-3.5-flash`) currently results in immediate CAPI 400 errors, even for basic text prompts.
9.  **[Oversized Attachments Permanently Wedge Session](https://github.com/github/copilot-cli/issues/3767)** *(Closed)*: A previously major issue where attachments exceeding the 5MB CAPI limit permanently broke a session. The community is actively verifying the fix.
10. **[Scheduled Prompts Stuck in Queue](https://github.com/github/copilot-cli/issues/4137)** *(Updated)*: A regression reported this week where scheduled prompts remain active in the backend but fail to fire into the session or trigger an assistant turn overnight.

### 4. Key PR Progress
*No Pull Requests (PRs) were created, merged, or updated in the last 24 hours. Development focus over the past day appears to be captured entirely in patch releases and issue triage.*

### 5. Feature Request Trends
*   **Granular Permission Scoping:** Developers are asking for less binary permission controls. Proposals include supporting path prefixes for file/web permissions ([#4157](https://github.com/github/copilot-cli/issues/4157)) and properly parsing multi-word commands like "make fix" in `permissions-config.json` ([#4150](https://github.com/github/copilot-cli/issues/4150)).
*   **Local Model & AI Credit Autonomy:** Users want the ability to run local models via `/remote` with zero risk of consuming paid credits, requesting the removal of the `-max-ai-credits >= 30` validation for local inference ([#4167](https://github.com/github/copilot-cli/issues/4167)) and the ability to suppress "low credit" warnings injected into the LLM context ([#4168](https://github.com/github/copilot-cli/issues/4168)).
*   **Terminal-Native UX:** Despite GUI-like TUI improvements, developers still strongly desire native terminal paradigms. Requests include `j/k` (Vim-style) navigation for multiple-choice prompts ([#4152](https://github.com/github/copilot-cli/issues/4152)) and ensuring standard OS text selection/copying works without capturing UI borders ([#4116](https://github.com/github/copilot-cli/issues/4116)).
*   **Account & Session Management:** Better multi-account handling, specifically the ability to set a default GitHub account/login rather than defaulting to the most recently added ([#4166](https://github.com/github/copilot-cli/issues/4166)).

### 6. Developer Pain Points
*   **Windows Instability:** Windows users are experiencing a fragmented experience, with blocking issues ranging from plugin installation permissions ([#4151](https://github.com/github/copilot-cli/issues/4151)) to UI rendering failures ([#4159](https://github.com/github/copilot-cli/issues/4159)) and session resume hangs ([#4165](https://github.com/github/copilot-cli/issues/4165)).
*   **Context Noise & UI Friction:** Recent TUI updates have impaired standard text selection ([#4154](https://github.com/github/copilot-cli/issues/4154), [#4116](https://github.com/github/copilot-cli/issues/4116)). Additionally, system messages (like image size warnings) are excessively repetitive, printing up to six times for a single error ([#4164](https://github.com/github/copilot-cli/issues/4164)).
*   **Tooling & Agent Relapses:** Users are experiencing regressions in core agent functionality, notably the unavailability of the `task_complete` tool when switching back to autopilot mode ([#4161](https://github.com/github/copilot-cli/issues/4161)) and broken OTEL telemetry emission when running in `-p` script mode ([#4169](https://github.com/github/copilot-cli/issues/4169)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI Community Digest (2026-07-18)

### 1. Today's Highlights
Over the past 24 hours, the Kimi Code CLI community has been focused on installation blockers and model performance regressions. Windows users reported critical issues with both the PowerShell installation script and enterprise data plugins, while a highly active discussion regarding the downgrade from Kimi K2.6 back to K2.5 highlights growing user frustration with the latest model's behavioral changes.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Hot Issues
Here are the noteworthy issues updated in the last 24 hours:

*   **Model Regression and Personality Loss** ([#1925](https://github.com/MoonshotAI/kimi-cli/issues/1925))
    *   **Why it matters:** A heavily discussed issue (13 comments) where users report that Kimi K2.6 introduces severe hallucinations and "drowns out creativity" compared to K2.5.
    *   **Community reaction:** Users are actively requesting an option to downgrade or switch back to the K2.5 model, noting a significant loss of model "personality" and usability.
*   **Windows PowerShell Installation Crash** ([#2504](https://github.com/MoonshotAI/kimi-cli/issues/2504))
    *   **Why it matters:** A critical onboarding blocker. The `install.ps1` script crashes with an `IndexOutOfRangeException` during binary download on Windows PowerShell 5.1. 
    *   **Community reaction:** No comments yet, but this is a high-priority bug affecting new user acquisition on Windows environments.
*   **Wind Plugin Dependency Network Error** ([#2505](https://github.com/MoonshotAI/kimi-cli/issues/2505))
    *   **Why it matters:** Kimi Work's desktop Wind data plugin is completely broken because it relies on an internal SDK (`agent-gw-pysdk`) hosted on Moonshot's private intranet (`dev.msh.team`), which public users cannot reach.
    *   **Community reaction:** Users are completely blocked from utilizing the data retrieval features, returning uniform `NETWORK_ERROR` codes.
*   **TUI Markdown Rendering Bug** ([#2379](https://github.com/MoonshotAI/kimi-cli/issues/2379))
    *   **Why it matters:** A UI/UX bug where wrapped Markdown list items in the Terminal User Interface drop characters and incorrectly split words.
    *   **Community reaction:** Minor frustration over readability, but acknowledged as a persistent visual glitch since version 1.45.0.

### 4. Key PR Progress
No new Pull Requests were merged or updated in the last 24 hours.

### 5. Feature Request Trends
*   **Model Version Selection & Control:** The most prominent feature request is the ability to manually select specific model versions. Users want strict CLI flags to bypass newer, unstable models in favor of older, more reliable workflows.
*   **Prompt Customization Overrides:** Tied to model downgrades, there is a trend of users wanting to inject legacy or custom system prompts to restore previous AI behavioral traits.

### 6. Developer Pain Points
*   **Fragile Installation Pipelines:** Developers are experiencing friction during the initial setup. Scripts like `install.ps1` are failing on default Windows environments (PowerShell 5.1), while external plugins are shipping with hard-coded internal corporate dependencies, blocking public adoption.
*   **Degraded LLM Output Quality:** Developers feel that recent iterations (K2.6) are overly verbose and restrictive, actively hindering code generation by increasing hallucinations and breaking established creative workflows.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 18, 2026.

### 1. Today's Highlights
OpenCode v2 (next) is seeing intense testing and iteration, with the development team rolling out critical fixes for OpenAI-compatible providers, reasoning delta parsing, and session management. The community is highly engaged around v2 stability and UI transitions, heavily requesting the preservation of the legacy multi-project layout and better native handling of custom AI models. Meanwhile, significant architectural improvements are landing in the server and TUI, including scoped event subscriptions and theme adjustments.

### 2. Releases
No official stable versions were published in the last 24 hours. Recent internal releases (`pr-37526-screenshots`, `pr-37516-screenshots`, `pr-37510-spinner`, `pr-37510-screenshots`) were limited to OpenCode Drive visual verification assets for QA and UI checks.

### 3. Hot Issues
*   **[Issue #6231](https://github.com/anomalyco/opencode/issues/6231): Auto-discover models from OpenAI-compatible endpoints** - With 181 upvotes, this is a massive community priority. Users are frustrated by the need to manually declare local models (LM Studio, Ollama) in `opencode.json` and want automatic endpoint discovery.
*   **[Issue #37012](https://github.com/anomalyco/opencode/issues/37012): Keep legacy layout option** - Users are pushing back against the new UI, requesting that the old, easily accessible multi-project/workspace layout be maintained rather than deprecated.
*   **[Issue #7790](https://github.com/anomalyco/opencode/issues/7790): SSH-based remote server connections for Desktop** - Highly requested (73 upvotes). Developers want first-class SSH support to connect the desktop client directly to remote OpenCode servers.
*   **[Issue #31041](https://github.com/anomalyco/opencode/issues/31041): Zen API CORS preflight returns 404** - A critical bug where all Zen API endpoints return 404 on `OPTIONS` requests, completely blocking browser-based clients from interacting with the API.
*   **[Issue #33028](https://github.com/anomalyco/opencode/issues/33028): Subagents hang indefinitely after bash tool call** - A severe regression where agent streams never time out after quick tool executions, forcing developers to manually kill the process.
*   **[Issue #34652](https://github.com/anomalyco/opencode/issues/34652): SchemaError on nested array arguments (Anthropic)** - Built-in tools like `todowrite` crash when the Anthropic native provider returns arrays as JSON strings instead of raw arrays.
*   **[Issue #35403](https://github.com/anomalyco/opencode/issues/35403): "no such column: replacement_seq" crash** - Plugin/CLI version mismatches are causing database migration failures, breaking subagent execution entirely.
*   **[Issue #36902](https://github.com/anomalyco/opencode/issues/36902): WSL/Windows Path corruption** - Running `opencode web` in WSL breaks the server when Windows paths are pushed via SSE, resulting in database corruption and 100% CPU spikes.
*   **[Issue #37381](https://github.com/anomalyco/opencode/issues/37381): Prompt queue and interrupt controls** - Developers want the ability to queue follow-up messages or inject prompts mid-stream without having to interrupt the current LLM response.
*   **[Issue #37428](https://github.com/anomalyco/opencode/issues/37428): Desktop client brightness extremes** - A humorous but valid complaint that the new Desktop client's default contrast levels are "absurdly dark" compared to the crisp terminal UI.

### 4. Key PR Progress
*   **[PR #37558](https://github.com/anomalyco/opencode/pull/37558): Parse OpenAI-compatible reasoning deltas** - Fixes a major v2 bug where reasoning content from providers like vLLM (using `delta.reasoning` instead of `_content`) was silently dropped.
*   **[PR #37486](https://github.com/anomalyco/opencode/pull/37486) & [PR #37487](https://github.com/anomalyco/opencode/pull/37487): Event subscription scoping** - Introduces location and session-based interest scoping for server events, drastically optimizing SSE payload handling.
*   **[PR #37549](https://github.com/anomalyco/opencode/pull/37549): Session request hook** - Adds a powerful new plugin API allowing mutable HTTP/JSON payload transformations before model authentication and signing.
*   **[PR #37559](https://github.com/anomalyco/opencode/pull/37559): Bound event projections via session blobs** - Implements bounded tool and admitted event payloads to manage memory and data overhead efficiently in v2.
*   **[PR #37554](https://github.com/anomalyco/opencode/pull/37554): Fix OpenAI-compatible parser (v2)** - Another fix ensuring streamed reasoning details are properly preserved during assistant history replay. *(Merged)*
*   **[PR #37308](https://github.com/anomalyco/opencode/pull/37308): Runtime MCP controls** - Allows dynamic connection, disconnection, and replacement of MCP servers at runtime without persisting junk state to the config file.
*   **[PR #37555](https://github.com/anomalyco/opencode/pull/37555): Soften theme scale extremes** - Directly addresses UI complaints by pulling back harsh dark/bright theme variables and anchoring them to safer scales.
*   **[PR #37557](https://github.com/anomalyco/opencode/pull/37557): Honor OAuth attempt expiration** - Improves authentication stability by respecting provider-defined absolute token expiration times (e.g., xAI device codes). *(Merged)*
*   **[PR #37539](https://github.com/anomalyco/opencode/pull/37539): Fix prompt submission on session resume** - Ensures startup prompts are properly carried into resumed or forked sessions without getting lost. *(Merged)*
*   **[PR #37379](https://github.com/anomalyco/opencode/pull/37379): Fail empty provider output** - Adds validation to treat empty LLM streams as `provider.invalid-output`, preventing silent failures when models return no visible text. *(Merged)*

### 5. Feature Request Trends
*   **Better OpenAI-Compatible & Local Model Support:** Strong demand for seamless auto-discovery of local models (Ollama, LM Studio) and better translation of custom provider streaming formats (especially for reasoning tokens).
*   **Remote & Multi-Project Workflows:** Developers frequently request SSH-first remote server capabilities and want the v1 multi-project workspace layout maintained in the new desktop client.
*   **Advanced Composer Controls:** Users want finer control over streaming interactions, specifically requesting prompt queues, mid-stream interruptions, and better IME (Input Method Editor) support for languages like Chinese.
*   **Plugin & Hook Extensibility:** There is a clear trend of developers wanting deeper integration via plugin hooks, specifically to intercept and modify HTTP requests before they hit the LLM providers.

### 6. Developer Pain Points
*   **V2 Provider Configurations:** Getting custom OpenAI-compatible providers working in `opencode2` (next) is currently frustrating; users report models showing as unavailable, hanging during chat completion, or dropping reasoning tokens.
*   **Database Migration Drift:** Auto-updating the CLI often breaks older plugins due to missing database columns (e.g., `replacement_seq`), requiring manual database interventions.
*   **Cost & Token Tracking Bugs:** Long-running sessions and certain APIs (like Kimi K3 / Moonshot AI) are failing to report token usage and costs accurately, leading to shockingly high actual bills despite the UI showing $0.01 spent.
*   **Cross-Platform Pathing:** Connecting Windows desktop clients to a Linux/WSL backend causes catastrophic failures due to un-converted native paths, resulting in 100% CPU lockups and database corruption.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for July 18, 2026.

### 1. Today's Highlights
The Pi ecosystem saw intense focus on extending model compatibility and refining the agentic loop's stability. Key updates include expanded support for Kimi K3's thinking levels and the introduction of new providers like StepFun, alongside crucial fixes for TUI rendering performance and context compaction reliability. Under the hood, maintainers are actively refactoring model catalog generation to minimize git churn and streamline provider integrations.

### 2. Releases
*No new official releases were published in the last 24 hours. Development remains focused on merging feature branches and bug fixes into the main branch.*

### 3. Hot Issues
*   **[#6755 Memory Leak in Agent Loop](https://github.com/earendil-works/pi/issues/6755)**: Long-running tools that emit frequent updates cause massive memory bloat and UI freezes because the agent loop retains every partial update promise. This critical UX blocker is currently under investigation.
*   **[#6665 High CPU Usage During Streaming](https://github.com/earendil-works/pi/issues/6665)**: Users report the TUI maxing out a full CPU core during long streaming sessions due to uncached grapheme segmentation and per-chunk Markdown rebuilds. 
*   **[#6725 Copilot Pricing Miscalculation](https://github.com/earendil-works/pi/issues/6725)**: OpenAI models routed through GitHub Copilot are inaccurately calculating costs in Pi by missing `cacheWrite` multipliers, leading to skewed user billing data.
*   **[#6762 SSE Stream JSON Parsing Crashes](https://github.com/earendil-works/pi/issues/6762)**: Models emitting raw control characters (like ANSI escapes) inside tool-call arguments crash the SSE stream, highlighting the need for a more robust JSON repair utility.
*   **[#6747 Extension Markdown Mutation API](https://github.com/earendil-works/pi/issues/6747)**: A highly requested feature to allow extensions to visually mutate agent messages (e.g., rendering math formulas to Unicode) without altering the raw text sent to the LLM.
*   **[#6768 Copilot Enterprise Compaction Failures](https://github.com/earendil-works/pi/issues/6768)**: Enterprise users hitting context limits are unable to auto-compact, receiving `421 Misdirected Request` errors when routing summarizations through Copilot's OpenAI/Anthropic endpoints.
*   **[#6668 Copilot Long-Context Pricing Tiers Missing](https://github.com/earendil-works/pi/issues/6668)**: The built-in catalog is missing tiered pricing metadata for heavy models (Luna, Sol, Terra) when context exceeds 200K+ tokens.
*   **[#6740 Incorrect GPT 5.4 Mini Thinking Map](https://github.com/earendil-works/pi/issues/6740)**: Pi's configuration attempts to pass an unsupported "minimal" thinking effort to GPT 5.4-mini, which breaks the intended reasoning constraints.
*   **[#6724 Summaries Break with Env API Keys](https://github.com/earendil-works/pi/issues/6724)**: Users authenticating via environment variables find that context summarization fails, pointing to an auth-passing bug isolated to the compaction sub-system.
*   **[#6761 Orphaned Tool Use Errors in Anthropic API](https://github.com/earendil-works/pi/issues/6761)**: Deep conversations with Claude models frequently 400 out because historical `tool_use` IDs lack corresponding synthetic `tool_result` blocks before payload submission.

### 4. Key PR Progress
*   **[PR #6770 Expose Kimi K3 Thinking Levels](https://github.com/earendil-works/pi/pull/6770)**: Adds support for `low`, `high`, and `max` reasoning parameters for Kimi K3 models, aligning Pi with Moonshot's latest API capabilities.
*   **[PR #6783 Add StepFun Providers](https://github.com/earendil-works/pi/pull/6783)**: Implements four native StepFun providers (spanning global and China scopes) sourced automatically via `models.dev`.
*   **[PR #6765 Separate Generated Model Data](https://github.com/earendil-works/pi/pull/6765)**: A major architectural refactor by `mitsuhiko` that moves generated model values into JSON files to drastically reduce git commit churn when updating model catalogs.
*   **[PR #6775 Compaction Retry Logic](https://github.com/earendil-works/pi/pull/6775)**: Fixes transient stream drops by adding retry mechanisms for context compaction and branch summarization failures.
*   **[PR #6779 Freeform Tool Calls](https://github.com/earendil-works/pi/pull/6779)**: Introduces typed JSON and freeform tool definitions, enabling OpenAI custom tool calls and replaying of legacy JSON tool executions.
*   **[PR #6778 Preserve Extension Provider Auth](https://github.com/earendil-works/pi/pull/6778)**: Resolves a frustrating bug where extension-based providers would lose their auth state during availability refreshes or when starting new sessions.
*   **[PR #6750 Markdown Transformer API](https://github.com/earendil-works/pi/pull/6750)**: Implements the API requested in Issue #6747, allowing extensions to safely intercept and visually format Markdown streams.
*   **[PR #6771 External Editor Launch Optimization](https://github.com/earendil-works/pi/pull/6771)**: Speeds up the `Ctrl+G` workflow by writing prompt temp files to a private directory rather than a cluttered system temp directory.
*   **[PR #6764 Handle CRLF/CR Line Endings](https://github.com/earendil-works/pi/pull/6764)**: Fixes physical cursor corruption in the TUI by properly stripping carriage returns during text wrapping.
*   **[PR #4823 Built-in Llama-cpp Provider](https://github.com/earendil-works/pi/pull/4823)**: Introduces a seamless local-model experience via an inline `ExtensionFactory` that auto-activates when `LLAMA_*` env vars are detected.

### 5. Feature Request Trends
*   **Advanced Reasoning Controls**: Users want finer control over model cognition. Beyond Kimi K3 thinking levels, there are requests to map unsupported thought tiers (like GPT 5.4-mini's efforts) gracefully.
*   **Environment Variable Parity**: Developers are pushing for full configuration via environment variables (`PI_MODEL`, `PI_PROVIDER`), matching traditional CLI flags to streamline `envrc` setups.
*   **TUI Performance & Cleanup**: Frequent requests to declutter the UI, such as defaulting tool outputs to collapsed headers and resetting UI state logically upon running `/clear`.
*   **Provider-Specific Optimizations**: Growing demand to support native provider features seamlessly, such as Codex/Azure server-side context compaction and Gemini's `thought_signature` round-tripping.

### 6. Developer Pain Points
Developers are currently expressing frustration with **resiliency during long agent runs**. Memory leaks caused by Promise accumulation and UI thread starvation via heavy Markdown rendering are major blockers for power users. Furthermore, **context compaction** is proving to be highly fragile; transient network drops, Enterprise auth limitations, and API-specific 400 errors (like Anthropic's orphaned tool IDs) frequently crash sessions. Users heavily invested in the **GitHub Copilot** ecosystem are also hindered by missing context-pricing tiers and inaccurate cost tracking.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-18.

### 1. Today's Highlights
Qwen Code rolled out the `v0.19.11` nightly build, focusing heavily on hardening the multi-workspace daemon architecture, optimizing startup telemetry, and fixing critical IDE integration bugs. The community and core team are actively shaping the subagent ecosystem, introducing better delegation defaults, model-specific concurrency limits, and persistent session metadata. Meanwhile, significant visual and functional upgrades are landing in the Web Shell, including Git status awareness and split-view persistence.

### 2. Releases
*   **v0.19.11-nightly.20260717** ([Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.11-nightly.20260717.f8e6e8931))
    *   Introduced tracing for cold first-session startups to gather performance telemetry.
    *   Hardened multi-workspace ownership boundaries within the `qwen serve` daemon to prevent cross-workspace session conflicts.

### 3. Hot Issues
1.  **[RFC] Support multiple workspaces in one `qwen serve` daemon** ([#6378](https://github.com/QwenLM/qwen-code/issues/6378))
    *   *Why it matters:* A high-impact architectural RFC discussing the transition from `1 daemon = 1 workspace` to a `1 daemon = N workspaces` model. This is the foundation for upcoming enterprise and power-user workflows.
2.  **[RFC] Reliable auto-memory recall — timing, quality, and telemetry** ([#7040](https://github.com/QwenLM/qwen-code/issues/7040))
    *   *Why it matters:* Memory management is crucial for long-running sessions. This RFC focuses on improving the recall path for all users without over-engineering it into a complex enterprise governance platform.
3.  **VS Code Companion ACP launch depends on inherited `ELECTRON_RUN_AS_NODE`** ([#7101](https://github.com/QwenLM/qwen-code/issues/7101))
    *   *Why it matters:* A P2 bug affecting Linux users where the VS Code extension fails to start the bundled ACP CLI. The team is moving away from relying on inherited environment variables to fix this.
4.  **Streaming a code block taller than the viewport breaks rendering** ([#7006](https://github.com/QwenLM/qwen-code/issues/7006))
    *   *Why it matters:* A major CLI UI bug where tall streaming code blocks lose syntax highlighting, reset line numbers, and stall. It significantly hampers the live coding experience.
5.  **Explore subagent hangs forever — has `ask_user_question` despite being read-only** ([#7126](https://github.com/QwenLM/qwen-code/issues/7126))
    *   *Why it matters:* Read-only subagents hanging blocks automated multi-agent pipelines. This highlights friction in the current sub-agent delegation guardrails.
6.  **Status line context usage percentage does not refresh after `/compress`** ([#6806](https://github.com/QwenLM/qwen-code/issues/6806))
    *   *Why it matters:* A UX annoyance where token usage UI doesn't update post-compression, leaving developers blind to their actual context window limits until the next API call.
7.  **[BUG] Chained MCP calls fail silently with "Server configuration not found"** ([#6992](https://github.com/QwenLM/qwen-code/issues/6992))
    *   *Why it matters:* Windows users utilizing Model Context Protocol (MCP) encounter deadlocks when chaining tools that require local permissions.
8.  **Optimize daemon cold start and `qwen serve` fast-path latency** ([#4748](https://github.com/QwenLM/qwen-code/issues/4748))
    *   *Why it matters:* Performance tracking issue. The gap between CLI initialization and daemon boot is closing, but remains a priority for non-interactive workflows.
9.  **Web Shell: Sent messages text gets incorrectly concatenated after refresh** ([#7128](https://github.com/QwenLM/qwen-code/issues/7128))
    *   *Why it matters:* A 100% reproducible UI bug in the Web Shell where failed prompts are duplicated and merged upon page refresh.
10. **Safety classifier deadlock under `tools.approvalMode = "auto"`** ([#6927](https://github.com/QwenLM/qwen-code/issues/6927))
    *   *Why it matters:* The safety classifier is persistently fail-closing in auto-approval mode, blocking all tools (including `write_file`) and completely locking out the developer.

### 4. Key PR Progress
1.  **[feat(core): improve subagent delegation defaults and guardrails #7048](https://github.com/QwenLM/qwen-code/pull/7048):** Shifts top-level one-shot subagents to run in the background by default, speeding up main-thread execution while keeping nested agents safe.
2.  **[fix(vscode): preserve Electron Node mode for ACP launch #7106](https://github.com/QwenLM/qwen-code/pull/7106):** Resolves the Linux VS Code ACP crash by explicitly enabling Electron's Node mode during startup instead of relying on environment inheritance.
3.  **[feat(web-shell): git status chip, visual working-tree diff, and sidebar git status #7054](https://github.com/QwenLM/qwen-code/pull/7054):** Brings rich, live Git awareness (dirty state, branch diffs) directly into the browser-based daemon UI.
4.  **[feat(agents): support per-model sub-agent concurrency limits #6984](https://github.com/QwenLM/qwen-code/pull/6984):** Introduces `agents.maxParallelAgentsByModel` to prevent overwhelming specific LLM endpoints during complex multi-agent operations.
5.  **[refactor(core): Classify shell safety as read-only, write, or unknown #7053](https://github.com/QwenLM/qwen-code/pull/7053):** Implements a robust 3-state internal parser for shell commands, paving the way for smarter auto-approvals.
6.  **[fix(core): persist resolved subagent model in metadata #7104](https://github.com/QwenLM/qwen-code/pull/7104):** Fixes a bug where sub-agents logged the parent's model instead of their specifically assigned model in `.meta.json`.
7.  **[fix(web-shell): stop stacking duplicate copies when restoring prompt text #7134](https://github.com/QwenLM/qwen-code/pull/7134):** Makes the composer's prompt-restoration logic idempotent, fixing the text concatenation bug from issue #7128.
8.  **[fix(cli): hide sticky task panel when agent is idle #7062](https://github.com/QwenLM/qwen-code/pull/7062):** Improves UI clarity by hiding the "Current tasks" panel when an agent finishes, preventing false indications of background activity.
9.  **[feat(web-shell): persist the split view across refresh, per tab #7136](https://github.com/QwenLM/qwen-code/pull/7136):** Upgrades the Web Shell to remember split-screen pane setups locally, surviving tab reloads.
10. **[feat(core): unify tool description paths and add live hint #7110](https://github.com/QwenLM/qwen-code/issues/7110):** Improves tool summaries by standardizing path formatting across `read-file`, `edit`, and `write-file` tools.

### 5. Feature Request Trends
*   **Advanced Sub-Agent Workflows:** Developers want robust multi-agent pipelines. Requests include safer read-only agent delegations ([#7048](https://github.com/QwenLM/qwen-code/pull/7048)), fixing stale agent caches ([#7108](https://github.com/QwenLM/qwen-code/issues/7108)), and exposing workspace-scoped contacts to channels ([#7103](https://github.com/QwenLM/qwen-code/issues/7103)).
*   **Daemon & Web Shell Enterprise Features:** There is a strong push to evolve the daemon from a single-user CLI to a multi-workspace backend. Key requests include workspace session info endpoints ([#7070](https://github.com/QwenLM/qwen-code/issues/7070)) and UI improvements like Web Shell folder pickers ([#7102](https://github.com/QwenLM/qwen-code/issues/7102)).
*   **Granular Concurrency & Telemetry:** Users are asking for deeper control over execution limits and observability, such as per-model concurrency caps ([#6984](https://github.com/QwenLM/qwen-code/pull/6984)) and startup latency tracing ([#6907](https://github.com/QwenLM/qwen-code/pull/6907)).

### 6. Developer Pain Points
*   **UI Rendering Jank:** Streaming tall code blocks breaks syntax formatting ([#7006](https://github.com/QwenLM/qwen-code/issues/7006)), and multi-line diff previews become garbled in permission dialogs ([#6809](https://github.com/QwenLM/qwen-code/issues/6809)).
*   **Environment & IDE Integration Friction:** VS Code companion users (especially on Linux) are experiencing hard failures where the ACP process crashes because internal Electron flags aren't explicitly set ([#7101](https://github.com/QwenLM/qwen-code/issues/7101), [#7051](https://github.com/QwenLM/qwen-code/issues/7051)).
*   **State & Memory Sync Issues:** The UI frequently falls out of sync with the backend core. Examples include token limits not updating after compression ([#6806](https://github.com/QwenLM/qwen-code/issues/6806)), terminal inputs getting duplicated on refresh ([#7128](https://github.com/QwenLM/qwen-code/issues/7128)), and Ctrl+C exits leaving the terminal in a garbled state ([#6776](https://github.com/QwenLM/qwen-code/issues/6776)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical digest for the DeepSeek TUI (CodeWhale) community for July 18, 2026.

### 1. Today's Highlights
Development today was dominated by finalizing the **v0.9.1 release freeze**, with maintainers merging critical reliability patches for Windows PTY/hooks and MCP sub-agent security. There is also a major strategic push towards expanding ecosystem support, highlighted by significant progress on HarmonyOS (OpenHarmony) builds, official Termux/Android arm64 support, and first-class integration for Kimi K3.

### 2. Releases
*No new official releases were published in the last 24 hours. The project remains in the v0.9.1 release freeze and reconciliation phase.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community and maintainer discussion:

*   **[#4032](https://github.com/Hmbown/CodeWhale/issues/4032) [bug]: Codewhale not following the constitution (35 comments)**
    *A highly discussed issue where the agent ignores established rules/scripts ("the constitution") and writes unauthorized temporary scripts, highlighting frustrations with agent obedience.*
*   **[#3275](https://github.com/Hmbown/CodeWhale/issues/3275) [bug]: CodeWhale is overly involved in making modifications (17 comments)**
    *Users report the agent entering self-driven loops of proposing, answering, and executing tasks without waiting for user confirmation.*
*   **[#3192](https://github.com/Hmbown/CodeWhale/issues/3192) [enhancement]: Put it up for agentclientprotocol/registry (12 comments)**
    *A highly upvoted request to list CodeWhale in the official Agent Client Protocol registry to streamline installation and usage within the Zed editor.*
*   **[#1481](https://github.com/Hmbown/CodeWhale/issues/1481) [enhancement]: Support OpenCode Go/Zen for DeepSeek-V4 (9 comments)**
    *The community is requesting alternative, cost-effective providers to access DeepSeek-V4 models.*
*   **[#4242](https://github.com/Hmbown/CodeWhale/issues/4242) & [#4236](https://github.com/Hmbown/CodeWhale/issues/4236) [enhancement]: Official Termux / Android arm64 support (15 comments total)**
    *Maintainers have opened an Epic and a detailed QA matrix to bring native Android/Termux support to the TUI, moving away from mismatched Linux arm64 binaries.*
*   **[#4100](https://github.com/Hmbown/CodeWhale/issues/4100) [bug]: exec_shell fails with exit code 2147483647 on Windows (4 comments)**
    *A severe ConPTY infrastructure failure causing state corruption in long-running Windows sessions.*
*   **[#4489](https://github.com/Hmbown/CodeWhale/issues/4489) [bug]: Hooks process leak (4 comments)**
    *Node.js processes leak on Windows because hook timeouts only kill the intermediate `cmd.exe`, leaving child processes hanging.*
*   **[#4417](https://github.com/Hmbown/CodeWhale/issues/4417) & [#4387](https://github.com/Hmbown/CodeWhale/issues/4387) [enhancement]: Kimi K3 OAuth and Model Support (6 comments total)**
    *Maintainers are scoping out first-class Moonshot AI Kimi K3 support, including device login OAuth and token lifecycle management.*
*   **[#4479](https://github.com/Hmbown/CodeWhale/issues/4479) & [#4482](https://github.com/Hmbown/CodeWhale/issues/4482) [bug]: TUI rendering glitches and Ctrl+O pager bugs (6 comments total)**
    *Users on Windows Terminal are experiencing character spacing glitches and truncated outputs when using the Ctrl+O inspector pager.*
*   **[#4415](https://github.com/Hmbown/CodeWhale/issues/4415) [bug]: Enforce hard per-turn tool budgets (1 comment)**
    *A critical reliability issue where routed models (like GLM-5.2) ignore strict tool-call budgets and file constraints, leading to infinite read loops.*

### 4. Key PR Progress
The development team (led by `Hmbown`) and community contributors made massive strides in addressing the issues above:

*   **[#4491](https://github.com/Hmbown/CodeWhale/pull/4491) [closed]: fix(runtime): contain hooks and preserve Windows PTY status**
    *Directly addresses the Windows Node.js process leak (#4489) and fixes the lossy exit-status sentinel that masked the ConPTY crash (#4100).*
*   **[#4499](https://github.com/Hmbown/CodeWhale/pull/4499) [closed]: fix: close v0.9.1 MCP and Fleet truth gaps**
    *Enforces exact, strict approval semantics for MCP adapters in sub-agents and separates configured providers from live health checks to prevent false alarms.*
*   **[#4504](https://github.com/Hmbown/CodeWhale/pull/4504) [open]: fix(onboarding): accept keyless local providers**
    *Fixes the onboarding friction (#3927) by allowing users to proceed past the API key screen if they are self-hosting via SGLang, vLLM, or Ollama.*
*   **[#4498](https://github.com/Hmbown/CodeWhale/pull/4498) [open]: fix(tui): make Ctrl+O inspector complete and draft-safe**
    *Resolves the pager truncation bug (#4482) by ensuring the complete final assistant result is preserved in the inspector.*
*   **[#4501](https://github.com/Hmbown/CodeWhale/pull/4501) [closed]: fix(auth): fail closed on legacy Kimi imports**
    *Removes hard-coded Kimi client IDs and impersonation headers, transitioning legacy auth to a safer, read-only compatibility mode ahead of the new K3 OAuth rollout.*
*   **[#4384](https://github.com/Hmbown/CodeWhale/pull/4384) & [#4470](https://github.com/Hmbown/CodeWhale/pull/4470) [closed]: HarmonyOS / OpenHarmony Support**
    *Contributor `shenyongqing` and `shenjackyuanjie` successfully enabled QuickJS bindings and gated unsupported PTY tools to get the Rust runtime compiling for HarmonyOS.*
*   **[#4484](https://github.com/Hmbown/CodeWhale/pull/4484) [closed]: fix(tui): target the terminal client clipboard over SSH**
    *Improves the remote developer experience by intelligently routing copy commands to the local terminal client (via OSC 52 / tmux) instead of the remote host's clipboard.*
*   **[#4500](https://github.com/Hmbown/CodeWhale/pull/4500) [open]: feat(auto): surface routing scope and per-turn receipts**
    *Brings transparency to the "Auto" fast-tier model routing by generating typed per-turn receipts detailing the selected provider, tier, and reasoning.*
*   **[#4503](https://github.com/Hmbown/CodeWhale/pull/4503) [closed]: fix(ohos): wrap Windows final links**
    *Fixes cross-compilation issues by pointing OpenHarmony links to a repository-local Windows launcher.*
*   **[#4488](https://github.com/Hmbown/CodeWhale/pull/4488) [closed]: fix(tui): isolate prior-session work receipts**
    *Cleans up the TUI workspace by hiding stale, failed-agent states from previous sessions, keeping the work surface focused on live tasks.*

### 5. Feature Request Trends
*   **Platform & Ecosystem Expansion:** There is a massive push to make CodeWhale ubiquitous. Requests and active epics target Android/Termux native support ([#4236](https://github.com/Hmbown/CodeWhale/issues/4236)), HarmonyOS builds ([#4384](https://github.com/Hmbown/CodeWhale/pull/4384)), and better remote tooling via US-based Cloudflare/AWS workbenches ([#1990](https://github.com/Hmbown/CodeWhale/issues/1990)).
*   **Alternative Provider Integrations:** Users want freedom from the default DeepSeek API gate. There are active requests for OpenCode Go/Zen ([#1481](https://github.com/Hmbown/CodeWhale/issues/1481)) and first-class Moonshot Kimi K3 support ([#4387](https://github.com/Hmbown/CodeWhale/issues/4387)).
*   **Global Localization:** Preparing the TUI for a broader global audience with requests for Korean, Spanish, and Brazilian Portuguese translations ([#3093](https://github.com/Hmbown/CodeWhale/issues/3093)).

### 6. Developer Pain Points
*   **Agent Autonomy & "Yo-Yo" Loops:** Developers are highly frustrated by the agent's tendency to over-extend its scope, question its own answers, and ignore system instructions (constitutions) regarding scripts and tool-call budgets ([#4032](https://github.com/Hmbown/CodeWhale/issues/4032), [#3275](https://github.com/Hmbown/CodeWhale/issues/3275)).
*   **Windows Host Instability:** Long-running Windows sessions remain brittle. Catastrophic ConPTY crashes, exit code `2147483647` errors, and leaked Node.js background hooks are causing persistent state corruption ([#4100](https://github.com/Hmbown/CodeWhale/issues/4100), [#4489](https://github.com/Hmbown/CodeWhale/issues/4489)).
*   **Rigid Onboarding:** The initial TUI setup assumes everyone wants to use the standard DeepSeek API. Local-first users and those leveraging alternative providers feel artificially gated by the current UX ([#3927](https://github.com/Hmbown/CodeWhale/issues/3927)).

</details>