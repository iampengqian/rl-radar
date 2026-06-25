# AI CLI Tools Community Digest 2026-06-26

> Generated: 2026-06-25 22:26 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the June 26, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tools landscape in mid-2026 is characterized by a rapid transition from simple code assistants to autonomous, multi-agent coding environments. Ecosystems are aggressively competing on context management—specifically overcoming working-state amnesia during context compaction—and deep standardization around the Model Context Protocol (MCP) for tool integration. However, this rapid iteration is introducing significant operational friction, with developers frequently encountering system-level stability issues like Out-Of-Memory (OOM) errors, memory leaks, and severe Terminal User Interface (TUI) rendering bugs. Overall, the industry is maturing but currently grappling with the growing pains of scaling complex agentic workflows across diverse operating systems.

### 2. Activity Comparison
*Note: Data reflects the 24-hour window leading up to 2026-06-26.*

| Tool | Active Issues Logged | Active PRs Logged | Release Status | Primary Current Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 2 | **v2.1.193** Released | Auto-mode classifier tuning, fixing runaway processes/rate limits. |
| **OpenAI Codex** | 10 | 10 | **v0.142.1 / v0.142.2** Released | Addressing severe quota token regressions, SQLite history migration. |
| **Gemini CLI** | 10 | 10 | **v0.49.0** & **v0.50.0-preview** | Fixing subagent loops, MCP resource boundary security, eval testing. |
| **GitHub Copilot CLI** | 10 | 1 | None | Enterprise MCP policies, subagent observability, CVE patching. |
| **Kimi Code CLI** | 2 | 1 | None (on v0.19.2) | Handling massive MCP toolsets, fixing subagent config leaks. |
| **OpenCode** | 10 | 10 | **v1.17.11** Released | Session snapshots, Windows stability, memory leak mitigation. |
| **Pi** | 10 | 10 | None | TUI rendering bugs, headless/RPC APIs, fixing provider context drift. |
| **Qwen Code** | 10 | 10 | **Nightly** Released | Fixing Windows PowerShell memory leaks, multi-modal (voice/vision). |
| **CodeWhale (DeepSeek)**| 10 | 10 | **v0.8.65** Released | Multi-model "Fleet" routing, finalizing rebrand, provider throttling. |

### 3. Shared Feature Directions
*   **Robust Context & Compaction Survival:** Almost all tools face user complaints regarding "amnesia" during context limits. Developers demand working-state continuity that survives compaction and clears without dropping in-flight task logic. *(Claude Code, OpenAI Codex, Gemini CLI, Pi, OpenCode)*
*   **Model Context Protocol (MCP) Hardening & Parity:** The ecosystem is universally adopting MCP, but fighting implementation bugs. Users require seamless OAuth, cross-server resource isolation, and CLI/Desktop parity for MCP configurations. *(OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI)*
*   **Granular Agentic Sandbox & Safety Controls:** As agents gain autonomy, users are demanding "Plan Modes" that strictly enforce read-only or sandboxed states, alongside reliable `/undo` features for file safety. *(OpenAI Codex, OpenCode, Gemini CLI, CodeWhale)*
*   **Heavy-Duty OS Resource Management:** Tools are struggling with OS-level process lifecycle management. Memory leaks, orphaned subprocesses, and UI flickering are major shared pain points. *(Claude Code, Qwen Code, OpenCode, Pi, Kimi Code CLI)*
*   **Advanced Multi-Modal & Provider Routing:** There is a strong push to decouple the CLI from a single provider. Developers want multi-model routing, concurrency limits for local endpoints, and multi-modal inputs like voice and vision. *(Qwen Code, CodeWhale, OpenCode)*

### 4. Differentiation Analysis
*   **Claude Code & GitHub Copilot CLI** focus heavily on **enterprise readiness and security guardrails**, though they face friction with overzealous false positives (AUP blocks) and enterprise IT policy routing. Copilot is leaning into unique integrations like Voice mode and VSCode/IDE parity.
*   **OpenAI Codex** is differentiated by massive **backend architectural refactoring** (moving from JSONL to SQLite, standalone V8 execution hosts) and is currently battling severe server-side quota calculation regressions rather than just client bugs.
*   **Gemini CLI** focuses heavily on **agent self-awareness and reliability**, notably investing in AST-aware navigation and robust component behavioral evals to prevent infinite reasoning loops and false success reporting.
*   **CodeWhale & Qwen Code** target **power users and multi-model orchestration**. CodeWhale's "Fleet" routing and MMO-style "Hotbar" UI cater to heavy multi-taskers, while Qwen leads in pushing alternative I/O like voice dictation.
*   **Pi & OpenCode** serve the **hackable, open-source ecosystem**. Pi is pivoting towards a headless local orchestrator daemon for multi-agent management via RPC, while OpenCode focuses on session state management (snapshots/reverts) and fixing local resource bottlenecks.

### 5. Community Momentum & Maturity
*   **High Momentum & Iteration (Codex, Gemini, Pi, Qwen, CodeWhale, OpenCode):** These projects are seeing 10+ active PRs daily, indicating aggressive engineering pushes. They are rapidly shipping structural changes (e.g., Codex's SQLite migration, Pi's orchestrator, CodeWhale's multi-provider routing). 
*   **High Maturity / High Friction (Claude Code, Copilot CLI):** These tools have massive user bases generating high issue engagement but slower public PR iteration. Their momentum is tied up in addressing enterprise scale, IT policy friction, and model-level degradation (e.g., Claude Opus 4.8 performance regression).
*   **Stabilization Phase (Kimi Code CLI):** Currently experiencing lower community visibility and issue volume, focusing strictly on making its existing subagent and TUI architecture stable rather than shipping new paradigms.

### 6. Trend Signals
*   **The CLI is becoming a Headless Backend:** Tools are shifting from being just terminal interfaces to local orchestration daemons (e.g., Pi's `.sock` IPC, Qwen's Daemon API, Codex's Mobile parity). The CLI is evolving to control fleets of background agents remotely.
*   **Quota & Token Economics are the New Bottleneck:** The biggest threat to productivity isn't context limits, but unpredictable server-side quota accounting (seen heavily in Codex and Copilot). Providers are tightening rate limits, forcing CLI tools to build complex local fallback and throttling logic.
*   **Cross-Platform Fragmentation:** The industry is experiencing a harsh Windows penalty. Whether it's Bun segfaults in OpenCode, PowerShell memory leaks in Qwen, or sandbox crashes in Codex, developers on Windows face significantly degraded experiences compared to macOS/Linux users. 
*   **Distrust of Autonomous Loops:** Developers want agents to loop, but require strict, deterministic kill-switches. The prevalence of runaway processes (Claude Code) and false-positive success states (Gemini CLI) signals a strong market demand for reliable, judge-model-evaluated termination conditions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent repository activity.

### 1. Top Skills Ranking & Discussion Highlights
Based on community engagement and pull request activity, the following Skills represent the most significant contributions and discussions:

*   **skill-creator Eval Fixes (Recall & Windows Compatibility)**
    *   **PRs:** [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)
    *   **Functionality:** Fixes for the native `skill-creator` tooling.
    *   **Highlights:** This is currently the most active area of development. Multiple community members have independently reproduced critical bugs where `run_eval.py` reports `0% recall` (Issue [##556](https://github.com/anthropics/skills/issues/556)) making the description optimization loop completely non-functional. Concurrently, developers have aggressively targeted Windows compatibility, patching subprocess `PATHEXT` failures, `cp1252` encoding panics, and broken pipe select loops. **Status:** *Open / Active Development*
*   **YAML Validation & UTF-8 Safety**
    *   **PRs:** [#539](https://github.com/anthropics/skills/pull/539), [#361](https://github.com/anthropics/skills/pull/361), [#362](https://github.com/anthropics/skills/pull/362)
    *   **Functionality:** Upgrades to `quick_validate.py` to catch unquoted YAML special characters (which silently break Skill descriptions) and replace string-length checks with byte-length validation to prevent Rust panics on multi-byte (UTF-8) characters. **Status:** *Open*
*   **Document Generation & Control (ODT & Typography)**
    *   **PRs:** [#486](https://github.com/anthropics/skills/pull/486), [#514](https://github.com/anthropics/skills/pull/514)
    *   **Functionality:** Expands Claude's document capabilities. PR #486 introduces robust `.odt`/OpenDocument parsing and template filling. PR #514 acts as a typography quality-control skill to prevent orphan words, widow paragraphs, and numbering misalignment in generated documents. **Status:** *Open*
*   **Codebase Inventory & Audit**
    *   **PR:** [#147](https://github.com/anthropics/skills/pull/147)
    *   **Functionality:** A systematic cleanup skill that identifies orphaned code, documentation gaps, and infrastructure bloat, outputting a single-source-of-truth `CODEBASE-STATUS.md`. **Status:** *Open*

### 2. Community Demand Trends
By analyzing the Issues tracker, the community is clearly pushing the ecosystem in three major directions:

*   **Enterprise Security & Governance:** There is a high demand for guardrails in enterprise environments. Issue [##492](https://github.com/anthropics/skills/issues/492) highlights severe concerns over trust boundaries, noting that community Skills can impersonate official Anthropic Skills under the same namespace. Additionally, Issue [##412](https://github.com/anthropics/skills/issues/412) proposes an `agent-governance` skill for policy enforcement and audit trails, while Issue [##1175](https://github.com/anthropics/skills/issues/1175) discusses securely handling SharePoint access controls.
*   **Persistent Agent Memory & State:** As agents perform longer tasks, context window degradation is a major pain point. Users are heavily requesting memory management skills, evidenced by proposals for `shodh-memory` (PR [##154](https://github.com/anthropics/skills/pull/154)) and `compact-memory` (Issue [##1329](https://github.com/anthropics/skills/issues/1329)) to maintain symbolic, compressed context across sessions.
*   **Frictionless Team Distribution:** Users want native, org-level Skill sharing. Issue [##228](https://github.com/anthropics/skills/issues/228) (7 upvotes) emphasizes that manually passing `.skill` files via Slack is inefficient, requesting direct organizational sharing libraries and links.

### 3. High-Potential Pending Skills
The following open PRs address highly requested features or critical bugs and have a strong likelihood of merging soon:

*   **[PR #538](https://github.com/anthropics/skills/pull/538) & [PR #541](https://github.com/anthropics/skills/pull/541) (DOCX/PDF Fixes):** Crucial reliability patches that fix case-sensitive file referencing in Linux/Mac environments and resolve OOXML `w:id` collisions that corrupt DOCX files when adding tracked changes.
*   **[PR #509](https://github.com/anthropics/skills/pull/509) (CONTRIBUTING.md):** Addresses a critical gap in repo health metrics (Issue [##452](https://github.com/anthropics/skills/issues/452)), creating standardized contribution guidelines which will directly accelerate the merging of future community skills.
*   **[PR #723](https://github.com/anthropics/skills/pull/723) (Testing-Patterns Skill):** Introduces a comprehensive skill standardizing testing philosophies (Testing Trophy model), unit testing (AAA pattern), and integration testing across the stack.

### 4. Skills Ecosystem Insight
At the ecosystem level, the community's most concentrated demand is transitioning from static task execution toward **reliable, enterprise-grade infrastructure—specifically prioritizing cross-platform evaluation tooling, strict namespace security boundaries, and persistent agent memory management.**

---

Here is the Claude Code community digest for June 26, 2026.

### 1. Today's Highlights
The latest Claude Code release (v2.1.193) introduces significant updates to the auto-mode classifier, alongside improvements to permission denial tracking and transcript visibility. The community is currently voicing substantial frustrations regarding context retention after compaction, aggressive AUP/cybersecurity false positives, and runaway background processes causing severe system impacts. Meanwhile, active pull requests aim to resolve rate-limiting and repository management workflows.

### 2. Releases
*   **v2.1.193** ([GitHub Release](https://github.com/anthropics/claude-code/releases))
    *   Added the `autoMode.classifyAllShell` setting, forcing all Bash/PowerShell commands through the auto-mode classifier rather than just arbitrary-code-execution patterns.
    *   Added auto-mode denial reasons directly into the transcript, denial toasts, and the `/permissions` recent denials UI.
    *   Introduced partial `cla...` features (details truncated in release notes).

### 3. Hot Issues
1.  **[OPEN] [BUG] Claude Opus 4.8 reasoning degradation, speed and performance regression** ([#68780](https://github.com/anthropics/claude-code/issues/68780))
    *   *Why it matters:* Users report severe quality degradation with Opus 4.8, even on Max effort. The thread is generating high engagement and extreme frustration regarding model performance and business impact.
2.  **[OPEN] [FEATURE] Multi-account switching in Claude Mobile app without shared email** ([#36151](https://github.com/anthropics/claude-code/issues/36151))
    *   *Why it matters:* With 109 comments and 379 upvotes, this remains a highly requested quality-of-life feature for developers managing multiple organizational accounts.
3.  **[OPEN] [FEATURE] Working-state continuity: survive compaction and /clear** ([#70555](https://github.com/anthropics/claude-code/issues/70555))
    *   *Why it matters:* Addresses the "goes dumb" problem on long sessions. Developers are increasingly frustrated by the assistant forgetting in-flight threads and confidently repeating work after context compaction.
4.  **[OPEN] [BUG] Excessive false positive blocks on document reading requests** ([#71442](https://github.com/anthropics/claude-code/issues/71442))
    *   *Why it matters:* A barrage of newly opened issues highlights that safety classifiers and AUP blocks are aggressively interrupting benign tasks (like reading URLs to save to Obsidian).
5.  **[OPEN] [BUG] Bash tool: runaway child processes are memory-uncapped** ([#68647](https://github.com/anthropics/claude-code/issues/68647))
    *   *Why it matters:* A critical system stability issue where orphaned `pytest` processes spawned by sub-agents exhausted 128 GB of RAM and caused a macOS kernel panic.
6.  **[OPEN] [BUG] Desktop: Bypass Permissions mode can't be enabled on macOS** ([#61415](https://github.com/anthropics/claude-code/issues/61415))
    *   *Why it matters:* macOS users are blocked from utilizing Bypass Permissions mode, severely interrupting automated workflows.
7.  **[OPEN] [BUG] API Error: Server is temporarily limiting requests** ([#53915](https://github.com/anthropics/claude-code/issues/53915))
    *   *Why it matters:* Continuous rate-limiting errors on the API and VSCode extensions are making standard development workflows intermittently unusable.
8.  **[CLOSED] [BUG] settings.json env vars leak into Bash tool context** ([#71432](https://github.com/anthropics/claude-code/issues/71432))
    *   *Why it matters:* A serious security boundary failure where `env.AWS_PROFILE` bleeds into the Bash execution context, bypassing credential isolation.
9.  **[OPEN] [BUG] Connection closed mid-response makes Claude Code unusable** ([#69415](https://github.com/anthropics/claude-code/issues/69415))
    *   *Why it matters:* WSL users are experiencing frequent network drops, entirely disrupting active coding sessions.
10. **[OPEN] [Bug] Auto-mode classifier false positive on GPO printer mapping** ([#71445](https://github.com/anthropics/claude-code/issues/71445))
    *   *Why it matters:* Demonstrates a growing pain point with the newly refined `autoMode` shell classifier, which is mistakenly blocking routine IT/sysadmin scripts.

### 4. Key PR Progress
*(Note: Only 2 active PRs were logged in the last 24 hours, both highlighted below.)*
1.  **[OPEN] fix: handle server rate limiting during normal usage** ([PR #70634](https://github.com/anthropics/claude-code/pull/70634))
    *   Directly addresses Issue #70631. Implements better client-side handling for HTTP 429s and transient server rate limits to prevent hard crashes during heavy API usage.
2.  **[CLOSED] Bump stale and autoclose timeouts from 14 to 90 days** ([PR #63686](https://github.com/anthropics/claude-code/pull/63686))
    *   Adjusts the repository's bot lifecycle scripts to keep issues open for 90 days instead of 14, preventing active bug reports from being closed prematurely before Anthropic staff can review them.

### 5. Feature Request Trends
*   **Long-term Context Continuity:** A strong demand for mechanisms that survive context compaction and `/clear`, allowing the agent to remember working states without manual re-priming ([#70555](https://github.com/anthropics/claude-code/issues/70555)).
*   **Enhanced TUI Media and Inputs:** Requests to make pasted image tags interactive/tab-able ([#68986](https://github.com/anthropics/claude-code/issues/68986)) and toggles to disable copy-on-selection in the agents view to match native OS terminal behavior ([#60755](https://github.com/anthropics/claude-code/issues/60755)).
*   **Multi-Account Portability:** Sustained demand for seamless account switching across desktop and mobile environments without shared email restrictions ([#36151](https://github.com/anthropics/claude-code/issues/36151)).

### 6. Developer Pain Points
*   **Overzealous Safety/Permission Classifiers:** The new `autoMode` shell classifier and cybersecurity AUP filters are generating false positives that halt authorized security work, document parsing, and routine shell commands ([#71442](https://github.com/anthropics/claude-code/issues/71442), [#70741](https://github.com/anthropics/claude-code/issues/70741), [#71445](https://github.com/anthropics/claude-code/issues/71445)).
*   **Sub-process Management & Resource Leaks:** The Bash tool struggles to govern child processes. Orphaned processes created by parallel sub-agents ignore timeouts and memory limits, resulting in system-wide OOM (Out of Memory) panics ([#68647](https://github.com/anthropics/claude-code/issues/68647), [#71387](https://github.com/anthropics/claude-code/issues/71387)).
*   **Network and API Reliability:** Developers are consistently frustrated by transient server errors. Dropping connections mid-response in WSL ([#69415](https://github.com/anthropics/claude-code/issues/69415)) and server-side rate limiting during normal usage ([#53915](https://github.com/anthropics/claude-code/issues/53915)) are eroding trust in the tool for mission-critical tasks.
*   **Git Worktree Handling:** Pathing inside automated git worktrees remains broken, causing Claude's Edit, Read, and Write tools to target the main workspace instead of the isolated worktree branch ([#36182](https://github.com/anthropics/claude-code/issues/36182), [#70324](https://github.com/anthropics/claude-code/issues/70324)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for June 26, 2026.

### 1. Today's Highlights
Codex rolled out crucial updates (v0.142.1 and v0.142.2) focusing on enhanced MCP tool discovery and expanded proxy support for Windows and macOS. However, the community is currently in an uproar over severe server-side quota regressions causing Pro and Plus 5-hour limits to drain almost instantly. Behind the scenes, the Codex engineering team is merging massive architectural improvements, shifting towards a SQLite-backed pagination system and a robust, process-owned code execution mode.

### 2. Releases
*   **[rust-v0.142.2](https://github.com/openai/codex/releases/tag/rust-v0.142.2)**: Enabled MCP tool search by default for better tool discovery (#29486) and introduced `respect_system_proxy` for macOS to honor PAC and WPAD settings (#26709).
*   **[rust-v0.142.1](https://github.com/openai/codex/releases/tag/rust-v0.142.1)**: Added opt-in Windows system proxy support for authentication, handling PAC, WPAD, static proxies, and bypass rules (#26708).
*   **codex-zsh-v0.1.0**: Initial release for the Codex ZSH integration.
*   *Note: Multiple 0.143.0 alpha builds were also pushed, indicating active iteration on the next minor version.*

### 3. Hot Issues
*   **[#28879](https://github.com/openai/codex/issues/28879) - Quota costs per token jumped 10-20x (149 👍 300)**: Plus and Pro users report the `gpt-5.5` rate-limit cost per token has skyrocketed since June 16, draining budgets in 2-3 prompts. This is the most pressing community issue right now.
*   **[#9203](https://github.com/openai/codex/issues/9203) - Bring back `/undo` (50 comments, 👍 296)**: Highly requested feature to revert unintentional file deletions or modifications made outside of Git tracking. 
*   **[#25719](https://github.com/openai/codex/issues/25719) - macOS `syspolicyd` CPU runaway (34 comments)**: Codex Desktop is triggering persistent CPU and memory spikes via `syspolicyd` and `trustd` on Darwin/ARM64 systems.
*   **[#5957](https://github.com/openai/codex/issues/5957) - Auto compaction breaks agent context (30 comments)**: GPT-5-Codex loses track of mid-task states and edited files during context auto-compaction, halting workflows.
*   **[#28978](https://github.com/openai/codex/issues/28978) - Desktop v26.616 MCP "Invalid request" bug (25 comments)**: Starting new conversations fails with an `inputSchema` missing field error, though the CLI functions normally with the same config.
*   **[#29955](https://github.com/openai/codex/issues/29955) - 100 credits consumed by 1 message (23 comments)**: A sudden spike in server-side quota accounting leaves Pro users locked out after a single prompt.
*   **[#30002](https://github.com/openai/codex/issues/30002) - Server over-reports token usage after 5h reset (19 comments)**: Post-reset, accounts are hitting `usage_limit_reached` on roughly 1.35M tokens—a massive regression from typical ~156M token allowances.
*   **[#17265](https://github.com/openai/codex/issues/17265) - MCP OAuth tokens fail to auto-refresh (18 comments)**: Routed MCP servers persist refresh tokens but fail to use them, causing tool calls to break with auth errors after token expiration.
*   **[#29200](https://github.com/openai/codex/issues/29200) - Windows Sandbox error on `apply_patch` (16 comments)**: Since the 26.616 update, Windows users face a `codex-windows-sandbox-setup.exe` error dialog on every patch invocation.
*   **[#23527](https://github.com/openai/codex/issues/23527) - iOS fails to show Mac SSH remote projects (9 comments)**: Codex mobile connects to Mac hosts, but SSH remote projects available on the desktop app are missing from the mobile project selector.

### 4. Key PR Progress
*   **[#30131](https://github.com/openai/codex/pull/30131) - SQLite thread history migration**: Laying the groundwork for paginated local thread history to replace legacy rollout JSONL files.
*   **[#30111](https://github.com/openai/codex/pull/30111) - Standalone code-mode process host**: Introduces a supervised `codex-code-mode-host` to route sessions and handle V8 failure boundaries safely.
*   **[#30101](https://github.com/openai/codex/pull/30101) - Pin MCP runtimes to model steps**: Ensures model steps execute calls through the exact MCP manager they were advertised to, preventing race conditions during runtime refreshes.
*   **[#30118](https://github.com/openai/codex/pull/30118) - Atomic MCP requirements**: Refactors MCP composition so higher-priority server requirements completely replace lower-priority ones, preventing mixed/broken configurations.
*   **[#29375](https://github.com/openai/codex/pull/29375) - NPM Marketplace plugin support**: Fixes a bug where `{"source":"npm"}` plugins were silently skipped, re-enabling NPM-backed plugin installations.
*   **[#30088](https://github.com/openai/codex/pull/30088) - World State executor skills**: Dynamically projects executor skills based on environment availability, saving token bandwidth by avoiding unnecessary file rescans.
*   **[#29988](https://github.com/openai/codex/pull/29988) - Work web & mobile thread originators**: Improves telemetry attribution by recognizing threads started via `codex_work_web` and `codex_work_mobile`.
*   **[#29877](https://github.com/openai/codex/pull/29877) - MCP reauthentication surfacing**: Distinguishes between first-time missing credentials and expired tokens, explicitly prompting users when re-authentication is required.
*   **[#30120](https://github.com/openai/codex/pull/30120) - Deny-read during escalation**: Ensures administrator-defined deny-read rules remain enforced when commands are escalated, plugging a potential sandbox bypass.
*   **[#30127](https://github.com/openai/codex/pull/30127) - Route MCP elicitation to live runtime**: Fixes an issue where MCP calls waiting for user approval would crash if the underlying runtime environment changed.

### 5. Feature Request Trends
*   **Sandbox & Safety Controls**: High demand for a native `/undo` command (#9203) to recover untracked files altered by the agent. Additionally, users want stricter guardrails on context retention (#5957) and manual approval processes to prevent automatic cancellation of pending approvals (#29627).
*   **Headless & Mobile Parity**: Developers are pushing for Codex mobile to act as a true headless remote control for always-on Linux servers via SSH, without needing a desktop app running (#23200, #23527).
*   **Update & App Telemetry Management**: Users are asking for the ability to disable automatic updates, citing instability and performance degradation introduced in recent auto-updates (#18546, #30122).

### 6. Developer Pain Points
*   **Rate Limit & Quota Volatility**: The most significant frustration is unpredictable quota accounting. Developers are seeing 5-hour limits and credits vanish in a fraction of the time historically required, effectively rendering Pro/Plus tiers unusable for heavy daily work (#28879, #29955, #30002).
*   **Windows Desktop Instability**: Recent updates have made the Windows experience highly unstable, characterized by severe memory pressure, broken sandbox executions, and recurring UAC/system dialogs (#29200, #30024, #30050).
*   **Desktop vs. CLI Fragmentation**: There is a growing gap in reliability between the CLI and Desktop App. Desktop users are experiencing show-stopping bugs (like the MCP `inputSchema` failure) that do not exist in the equivalent CLI environments (#28978, #26951).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 26, 2026.

### 1. Today's Highlights
Gemini CLI rolled out the **v0.49.0** stable release alongside the **v0.50.0-preview.1** build, bringing enhancements to CI release verification, dependency management, and the new tool registry. Community and maintainer efforts are heavily focused on hardening agent reliability, particularly addressing subagent execution hangs, improving memory system security, and resolving terminal UI bugs. Additionally, several crucial pull requests were merged to fix thought leakage in agent reasoning and enforce stricter security boundaries for MCP resources.

### 2. Releases
*   **v0.49.0** ([Release Notes](https://github.com/google-gemini/gemini-cli/pull/28152))
    *   Introduced cooldown periods for NPM dependabot updates and general version bumps.
*   **v0.49.0-nightly.20260625** ([Release Notes](https://github.com/google-gemini/gemini-cli/pull/28136))
    *   Patched a path traversal vulnerability during skill installations.
    *   Addressed pending tools and trust overrides.
*   **v0.50.0-preview.1** ([Release Notes](https://github.com/google-gemini/gemini-cli/pull/28150))
    *   Added fixes to prevent workspace binary shadowing in release verification and ignore NPM scripts during CI.

### 3. Hot Issues
1.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs** (P1): Users report the generalist agent hanging indefinitely during simple tasks like folder creation, currently requiring explicit instructions to disable subagents. 
2.  **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills and sub-agents enough** (P2): A highly relatable frustration where the CLI ignores custom skills (e.g., gradle, git) unless explicitly instructed to use them.
3.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS is reported as GOAL success** (P1): A critical masking bug where subagents falsely report success after hitting their max turn limit without performing the requested analysis.
4.  **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command execution gets stuck** (P1): Shell execution hangs while waiting for user input on commands that have already finished.
5.  **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Add deterministic redaction and reduce Auto Memory logging** (P2): Security push to prevent Auto Memory background agents from logging or exposing secrets before model-level redaction occurs.
6.  **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) Gemini CLI encounters 400 error with > 128 tools** (P2): Tool overload causes API failures; users request smarter agent scoping for enabled tools.
7.  **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Stop Auto Memory from retrying low-signal sessions indefinitely** (P2): Auto Memory loops infinitely trying to process low-signal sessions that it ultimately skips.
8.  **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) get-shit-done output hook causes crash** (P1): Output hooks cause the CLI to crash right before printing user summaries.
9.  **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent fails in wayland** (P1): Browser agents are failing to execute properly in Wayland Linux environments.
10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent should stop/discourage destructive behavior** (P2): Requests for the agent to avoid dangerous commands (like `git reset --force`) when safer alternatives exist.

### 4. Key PR Progress
1.  **[#27971](https://github.com/google-gemini/gemini-cli/pull/27971) fix(core): strip thoughts from scrubbed history turns**: Fixes a "Thought Leakage" issue where internal monologues leaked into plain-text history, causing infinite reasoning loops.
2.  **[#28149](https://github.com/google-gemini/gemini-cli/pull/28149) fix(skills): respect .gitignore/.geminiignore in skill resource listing**: Prevents the agent from reading and sharing unwanted files when mapping a skill's folder structure.
3.  **[#28143](https://github.com/google-gemini/gemini-cli/pull/28143) fix(core): resolve MCP resources by server**: Fixes a major bug where cross-server MCP resources could be mixed up if they shared the same URI.
4.  **[#28144](https://github.com/google-gemini/gemini-cli/pull/28144) fix(cli): detect available editors lazily**: Significantly improves startup times on Windows by avoiding synchronous system probes for text editors.
5.  **[#28142](https://github.com/google-gemini/gemini-cli/pull/28142) fix(core): honor GOOGLE_CLOUD_LOCATION for Vertex AI with API key**: Fixes regional routing for Vertex AI requests, ensuring they don't default globally when using API keys.
6.  **[#27915](https://github.com/google-gemini/gemini-cli/pull/27915) fix(core): trust dialog discloses the hook shape**: Resolves a vulnerability where malicious workspace hooks could execute without being displayed in the Trust prompt.
7.  **[#27979](https://github.com/google-gemini/gemini-cli/pull/27979) Wrap read_mcp_resource output with wrapUntrusted()**: Enforces strict security boundaries by treating MCP server resource text as untrusted input to the model.
8.  **[#28148](https://github.com/google-gemini/gemini-cli/pull/28148) fix(docker): copy packed artifacts from the builder stage**: Fixes a broken Docker multi-stage build where `.tgz` artifacts were missing from the final image.
9.  **[#28153](https://github.com/google-gemini/gemini-cli/pull/28153) fix(core): ignore stale update_topic calls**: Prevents race conditions where an orphaned tool call could corrupt state after a session `/clear`.
10. **[#28094](https://github.com/google-gemini/gemini-cli/pull/28094) fix(a2a-server): deep-merge user and workspace settings**: Fixes an issue where nested workspace settings (tools, telemetry) overwrote user settings instead of merging cleanly.

### 5. Feature Request Trends
*   **AST-Aware Codebase Navigation**: Strong interest in integrating Abstract Syntax Tree (AST) tools to allow agents to map codebases and read methods precisely, reducing token noise and execution turns ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
*   **Robust Component & Behavioral Evals**: Maintainers are heavily investing in structural evaluations to test multi-model support and agent reliability dynamically ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#23166](https://github.com/google-gemini/gemini-cli/issues/23166)).
*   **Enhanced Trajectory Visibility**: Requests to make subagent actions and trajectories easily shareable via `/chat share` for better debugging and evaluation ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
*   **Improved Agent Self-Awareness**: Features enabling the CLI to accurately understand its own hotkeys, flags, and configurations to better guide users natively ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

### 6. Developer Pain Points
*   **Agent Looping & Unresponsiveness**: Developers frequently experience agents getting stuck "waiting for input," hanging indefinitely, or falling into infinite monologue loops instead of executing tasks.
*   **Overly Eager or Underutilized Agents**: A duality of frustration where agents either trigger subagents without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) or completely ignore highly relevant custom skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
*   **Messy Workspaces**: The model frequently litters temporary scripts across random directories instead of writing cleanly to a single target directory or utilizing standard native tools ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
*   **Terminal UI Flakiness**: Resizing the terminal or exiting external text editors results in flickering, performance drops, or screen corruption, requiring low-level RenderWorker updates to fix ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 26, 2026.

### 1. Today's Highlights
The community focus remains heavily centered on agent autonomy, Model Context Protocol (MCP) integrations, and terminal rendering quirks across different operating systems. Developers are actively discussing enterprise policy restrictions for MCP servers and seeking better observability into background subagents. No official releases were rolled out in the last 24 hours, keeping the spotlight on user-reported bugs and UX enhancements.

### 2. Releases
**None.** There were no new versions or official releases of GitHub Copilot CLI published in the last 24 hours.

### 3. Hot Issues
Here are the 10 most noteworthy issues updated in the last 24 hours:

*   **[CVE Assignment Request](https://github.com/github/copilot-cli/issues/3906)** (#3906): A security researcher has submitted a security audit with a GHSA ID and is formally requesting a CVE assignment while preparing patch suggestions.
*   **[Enterprise MCP Policy Blocks](https://github.com/github/copilot-cli/issues/3934)** (#3934): Users report that custom local MCP registries are being blocked by an ambiguous enterprise policy, despite these configurations working perfectly in VSCode and IntelliJ.
*   **[Subagent Observability Gap](https://github.com/github/copilot-cli/issues/3937)** (#3937): The `/tasks` command shows "No subagents" even when the timeline clearly shows an inline `Code-review(gpt-5.5)` agent actively reading files and searching.
*   **[Premium Quota Calculation Bug](https://github.com/github/copilot-cli/issues/3881)** (#3881): A user noticed that a 6x multiplier model (Claude Sonnet 4.5) subtracted 5% of their total quota for a single request, rather than the mathematically expected 2%. 
*   **[Resumed Sessions Lose Authentication](https://github.com/github/copilot-cli/issues/3596)** (#3596): Resuming an older session breaks the `/model` command, throwing a "Not authenticated" error when trying to fetch the model catalog. 
*   **[Voice Mode Blocked by VPNs](https://github.com/github/copilot-cli/issues/3636)** (#3636): Activating `/voice` fails for users on corporate VPNs because the CLI cannot fetch the Speech-to-Text model catalog required to initialize the feature.
*   **[Autopilot Mode Drops Out](https://github.com/github/copilot-cli/issues/3933)** (#3933): A recent UX change causes the CLI to unexpectedly drop out of "autopilot" mode after every single prompt, requiring users to re-enable it continuously.
*   **[WSL2 Clipboard Failure](https://github.com/github/copilot-cli/issues/3534)** (#3534): The `/copy` command fails on WSL2 (ARM64) due to a command-line quoting bug in the `cmd.exe` wrapper (`clip.exe`).
*   **[AppImage Breaks Git HTTPS on Linux](https://github.com/github/copilot-cli/issues/3925)** (#3925): The Copilot CLI AppImage leaks its bundled `LD_LIBRARY_PATH` to child processes, breaking HTTPS git fetches and blocking session creation.
*   **[Silent Command Rewriting in Hooks](https://github.com/github/copilot-cli/issues/2643)** (#2643): `preToolUse` hooks cannot silently rewrite commands. Even when setting `permissionDecision: allow`, the CLI forces a user confirmation dialog for every rewritten command.

### 4. Key PR Progress
There was limited pull request activity over the past 24 hours:

*   **[Add .gitignore and settings configuration](https://github.com/github/copilot-cli/pull/3928)** (PR #3928): An open community PR aimed at improving local repository handling and default configuration management for CLI users.

*(Note: Only one PR was updated in the provided data window.)*

### 5. Feature Request Trends
Analyzing the broader issue tracker, three major feature trends emerge:
*   **Enhanced MCP Lifecycle Management:** Users want better runtime control over MCP servers. Requests include the ability to asynchronously run `/mcp show` and `/plugin list` without waiting for agent turns ([#3829](https://github.com/github/copilot-cli/issues/3829)), as well as native UI toggles to temporarily disable MCPs without fully deleting them ([#2956](https://github.com/github/copilot-cli/issues/2956), [#3564](https://github.com/github/copilot-cli/issues/3564)).
*   **Model & Context Transparency:** Developers are asking for better visibility into context limits and model behaviors. Feature requests include listing all currently supported models and their multipliers via a `--list-models` flag ([#700](https://github.com/github/copilot-cli/issues/700)), and ensuring that initialization "instructions" returned by MCP servers are actually fed to the LLM ([#1579](https://github.com/github/copilot-cli/issues/1579)).
*   **External Platform Integration:** As workflows become more hybrid, users want the global "Up next" inbox to support assigned Azure DevOps work items alongside standard GitHub items ([#3794](https://github.com/github/copilot-cli/issues/3794)).

### 6. Developer Pain Points
*   **Terminal Rendering Quirks:** The terminal UI continues to frustrate Windows users. Issues include the vertical scroll bar permanently misaligning text ([#3501](https://github.com/github/copilot-cli/issues/3501)), incorrectly disabled mouse tracking on exit ([#3876](https://github.com/github/copilot-cli/issues/3876)), and the Markdown renderer mistakenly applying strikethrough formatting to text bracketed by two em-dashes ([#3920](https://github.com/github/copilot-cli/issues/3920)).
*   **Keyboard Shortcut Confusion:** The CLI's shift toward Claude Code-style parity is hitting friction. Users are confused by the disconnect between "queued" vs "pending" messages ([#3919](https://github.com/github/copilot-cli/issues/3919)), pressing `Escape` accidentally drops pending prompts instead of canceling just the active task ([#3692](https://github.com/github/copilot-cli/issues/3692)), and the `Ctrl+Enter` enqueue shortcut actually inserts a line break instead of queueing the prompt ([#3760](https://github.com/github/copilot-cli/issues/3760)).
*   **Settings and Migration Instability:** Upgrades and migrations are proving brittle. Custom skills migrated from Claude Code are being wiped after updates ([#3938](https://github.com/github/copilot-cli/issues/3938)), VSCode terminal users report themes defaulting to "light" regardless of system settings ([#3935](https://github.com/github/copilot-cli/issues/3935)), and the `autoUpdate` flag in `config.json` is being silently ignored ([#2615](https://github.com/github/copilot-cli/issues/2615)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest (2026-06-26)

## 1. Today's Highlights
The Kimi Code CLI community is currently focused on identifying UI stability bugs and resolving long-standing Model Context Protocol (MCP) integration issues. While no new releases were deployed in the last 24 hours, developers are actively reporting edge cases on version 0.19.2 using the K2.7 models, particularly around terminal rendering and large MCP toolset handling. 

## 2. Releases
*No new releases were recorded in the last 24 hours.*

## 3. Hot Issues
*Note: Only 2 issues saw updates in the last 24 hours, both highlighting immediate bugs in the current v0.19.2 build.*

*   **[Issue #2475](https://github.com/MoonshotAI/kimi-cli/issues/2475) [bug] MCP tools**
    *   **Why it matters:** A Windows user utilizing the K2.7 model reported failures when attempting to load a large MCP server containing 212 tools with descriptions. This highlights potential payload limits or indexing bottlenecks when Kimi Code CLI interacts with massive tool environments. 
    *   **Community Reaction:** No comments yet, but it signals a need for better large-scale MCP tool pagination or context management.
*   **[Issue #2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) [bug] Interface shaking and re-rendering**
    *   **Why it matters:** A Linux user reported severe UI degradation where the CLI interface constantly "shakes" and inexplicably re-renders the entire conversation from scratch. This directly impacts developer productivity and points to a terminal UI state-management bug.
    *   **Community Reaction:** Fresh issue with no comments yet, but the severity of the UX interruption makes it a high-priority target for the maintainers.

## 4. Key PR Progress
*Note: Only 1 PR saw activity in the last 24 hours.*

*   **[PR #1942](https://github.com/MoonshotAI/kimi-cli/pull/1942) [CLOSED] fix(mcp): propagate MCP configs to subagents and resume immediately**
    *   **Details:** This PR addressed critical MCP failures where subagents (like `explore`, `coder`, and `plan`) were not inheriting MCP configurations due to a hardcoded empty list (`mcp_configs=[]`). It also fixed an issue where MCP tools were unavailable in resumed sessions. Though closed recently, the underlying fixes are crucial for multi-agent workflows.

## 5. Feature Request Trends
Based on the recent issue and PR trajectory, the community is pushing for:
*   **Heavy-Duty MCP Support:** Developers are building complex environments and need the CLI to seamlessly handle MCP servers with hundreds of tools without crashing or timing out.
*   **Robust Subagent Delegation:** There is a strong trend toward relying on Kimi Code's internal subagents, requiring them to have the same tool access and context as the main agent, especially across session interruptions/resumes.

## 6. Developer Pain Points
*   **Terminal UI Instability:** Random screen flickering, "shaking," and full conversation re-rendering are major frustrations that break developer immersion and trust in the tool.
*   **MCP Configuration Leaks:** Discovering that subagents drop MCP configurations forces developers to manually intervene or avoid using subagents altogether, limiting the CLI's autonomous coding capabilities.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-06-26

## 1. Today's Highlights
OpenCode rolled out **v1.17.11**, introducing highly anticipated session snapshots and revert controls, alongside improvements to MCP OAuth flows. The community has been actively reporting critical Windows-specific segmentation faults tied to recent v1.17.x releases and the embedded Bun runtime. Meanwhile, prolific PR activity today targets major Desktop UI refactors, plugin discovery enhancements, and stricter agentic permission controls.

## 2. Releases
### [v1.17.11](https://github.com/anomalyco/opencode/releases)
- **Core Improvements:** Added session snapshots and revert controls, allowing users to roll a session back to an earlier message, including file changes.
- **Bugfixes:** Resolved an issue where the MCP OAuth URL wouldn't print, ensuring manual sign-in works if the browser flow fails.
- **Desktop Improvements:** Various UI enhancements including Chrome-style integrations. *(Note: Some users are reporting post-upgrade config errors, see issues below).*

## 3. Hot Issues
1. **[#20695](https://github.com/anomalyco/opencode/issues/20695) Memory Megathread [OPEN]:** A central hub tracking widespread memory leak reports. Maintainers are actively asking the community not to use LLMs to suggest fixes, but instead to provide manual heap snapshots to aid debugging.
2. **[#33742](https://github.com/anomalyco/opencode/issues/33742) Bun Segfault on Windows [OPEN]:** A critical regression in v1.17.10 causing native Bun segmentation faults on Windows. Users note that downgrading to v1.17.9 stops the crashes.
3. **[#15585](https://github.com/anomalyco/opencode/issues/15585) Free Model Usage Limits [CLOSED]:** High discussion volume around unexpected "free usage exceed" errors when using free-tier models during intensive sessions.
4. **[#23944](https://github.com/anomalyco/opencode/issues/23944) Frequent OpenAI Errors [OPEN]:** Users continue to face persistent `server_error` outputs when routing requests through `openai/gpt-5.4`.
5. **[#11409](https://github.com/anomalyco/opencode/issues/11409) Native Jupyter Support [OPEN]:** Strong community push for built-in `.ipynb` file parsing and execution to make OpenCode more viable for data science workflows.
6. **[#16610](https://github.com/anomalyco/opencode/issues/16610) Startup Hangs via inotify [OPEN]:** On Linux, OpenCode hangs at startup if a `.git` directory is present and `fs.inotify.max_user_instances` is set too low.
7. **[#33938](https://github.com/anomalyco/opencode/issues/33938) Desktop ConfigInvalidError [OPEN]:** A fresh bug introduced in v1.17.11 where the desktop app throws a `ConfigInvalidError` and fails to populate the sidebar with sessions, particularly affecting non-git directories on Windows.
8. **[#33399](https://github.com/anomalyco/opencode/issues/33399) 100% CPU Utilization [OPEN]:** Reports of the OpenCode CLI randomly maxing out CPU, resulting in unresponsive keyboard inputs.
9. **[#17557](https://github.com/anomalyco/opencode/issues/17557) `/compact` Command Bug [OPEN]:** Running `/compact` silently fails, ironically *increasing* the context token count rather than reducing it. 
10. **[#33632](https://github.com/anomalyco/opencode/issues/33632) `@filename` Crash [OPEN]:** Mentioning files via `@filename` triggers a crash, seemingly tied to the size of the directory containing the file.

## 4. Key PR Progress
1. **[#33967](https://github.com/anomalyco/opencode/pull/33967) Enforce bash restriction in Plan Mode [OPEN]:** Hardens the permission system by preventing arbitrary shell writes via bash when agents are operating in "Plan Mode".
2. **[#33926](https://github.com/anomalyco/opencode/pull/33926) Refine small model defaults [OPEN]:** Fixes small-model deployment assumptions for Azure and Google Vertex by merging title instructions into the first user message to ensure valid alternating roles.
3. **[#33208](https://github.com/anomalyco/opencode/pull/33208) Delete button for sessions [OPEN]:** Introduces a UI trash icon in the desktop app sidebar to allow easy deletion of root sessions.
4. **[#33819](https://github.com/anomalyco/opencode/pull/33819) Auto-discover TUI plugins [CLOSED]:** Automatically discovers TUI plugins from local directories and surfaces load errors via toast notifications.
5. **[#33944](https://github.com/anomalyco/opencode/pull/33944) Add `/goal` stop-condition command [CLOSED]:** Implements a command that forces an independent judge model to evaluate if an agent's goal is fully satisfied before allowing the main loop to terminate.
6. **[#33954](https://github.com/anomalyco/opencode/pull/33954) Split session composer [CLOSED]:** A significant Desktop refactor isolating project selection UI and state from the main prompt input.
7. **[#33924](https://github.com/anomalyco/opencode/pull/33924) Scope MCP auth status [CLOSED]:** Fixes stale credentials by validating MCP auth strictly against the currently configured remote server URL.
8. **[#33927](https://github.com/anomalyco/opencode/pull/33927) Prevent VCS crash on huge repos [OPEN]:** Fixes a crash in the VCS layer when a Git repository contains thousands (e.g., 1200+) of untracked files.
9. **[#33734](https://github.com/anomalyco/opencode/pull/33734) Publish `tui.session.select` event [OPEN]:** Emit bus events during in-TUI session navigation, allowing external plugins to track user focus accurately.
10. **[#33392](https://github.com/anomalyco/opencode/pull/33392) Codex Parity for tool definitions [CLOSED]:** Hardcodes `strict: false` on OpenAI Responses API function tools to prevent dynamic schemas from being rejected.

## 5. Feature Request Trends
* **Better Session Management:** Users want more robust controls over their chat history and context. Requests include native Jupyter notebook support ([#11409](https://github.com/anomalyco/opencode/issues/11409)), renaming sessions via the UI ([#33932](https://github.com/anomalyco/opencode/issues/33932)), and UI support for deleting old sessions ([#33208](https://github.com/anomalyco/opencode/pull/33208)).
* **Local & Multi-Account Model Routing:** The community is leaning heavily into local and multi-account setups. Requests include round-robin load balancing for multiple Codex OAuth accounts ([#8145](https://github.com/anomalyco/opencode/issues/8145)), auto-detecting local LM Studio models via the `/v1/models` API ([#23327](https://github.com/anomalyco/opencode/issues/23327)), and configurable OAuth callback hosts for remote dev containers ([#33966](https://github.com/anomalyco/opencode/issues/33966)).
* **Security and Plugin Integrations:** Requests to move plaintext tokens into the system credential store ([#4318](https://github.com/anomalyco/opencode/issues/4318)) and deeper plugin integration via bus events for session switching ([#31051](https://github.com/anomalyco/opencode/issues/31051)).

## 6. Developer Pain Points
* **Windows Stability:** The embedded Bun runtime is causing severe friction for Windows users, manifesting as fatal segfaults during long-running FFI polling sessions ([#31144](https://github.com/anomalyco/opencode/issues/31144)) and general instability after recent v1.17.x upgrades ([#33742](https://github.com/anomalyco/opencode/issues/33742)).
* **Context & Performance Degradation:** Developers are experiencing significant sluggishness during critical workflows. Startup times are bottlenecked by Git inotify limits ([#16610](https://github.com/anomalyco/opencode/issues/16610)), the `/compact` command is failing and ballooning token counts ([#17557](https://github.com/anomalyco/opencode/issues/17557)), and toggling "Git Changes" in the UI adds massive API call latency ([#33952](https://github.com/anomalyco/opencode/issues/33952)).
* **IDE Integration Regressions:** Users running the OpenCode TUI inside IDEs (Cursor, Windsurf) are frustrated that native keyboard shortcuts (e.g., `Cmd+Option+K`) are being swallowed by the terminal rather than forwarded to the IDE ([#27006](https://github.com/anomalyco/opencode/issues/27006)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-06-26, based on the latest repository activities.

### 1. Today's Highlights
Pi saw heavy debugging and stabilization efforts over the last 24 hours, with core maintainers tackling critical Terminal UI (TUI) rendering bugs, extension lifecycle issues, and AI provider context management. A new experimental local orchestrator daemon was introduced to manage multi-agent lifecycles, alongside several robust fixes for custom widget rendering and compaction logic. 

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **#4945 [OPEN] openai-codex Connection Reliability Issues** (70 comments, 30 👍)
    The highest-trafficked issue details `gpt-5.5` leaving the interactive TUI stuck on `Working...` without streaming text or errors, requiring a manual abort. This indicates a critical flaw in how Pi handles provider timeouts.
*   **#5103 [CLOSED] pi-windows-x64.zip build can't detect git-bash** (23 comments)
    Resolved an issue where Windows users couldn't utilize the built-in bash tool because the packaged binary failed to respect the system's `PATH` for Git Bash.
*   **#6050 [CLOSED] TUI full redraw clears terminal scrollback** (10 comments)
    A major UX frustration where active TUI rendering jumps the terminal scrollbar back to the beginning of the chat. Root cause was tracked to the core TUI renderer.
*   **#5595 [CLOSED] openai-completions maxTokens not passing through** (8 comments)
    Users reported reasoning models (like DeepSeek v4pro via Together.ai) running out of output tokens mid-turn. Resolved an issue where Pi ignored user-defined `maxTokens` limits.
*   **#6060 [CLOSED] TypeError: content is not iterable** (4 comments)
    Addressed a crash in the TUI footer when rendering token stats on sessions containing tool-call-only assistant messages. 
*   **#6002 [CLOSED] SessionManager.open() silently truncates non-session files** (4 comments)
    A highly destructive bug where pointing `--session <path>` at a standard log file instantly truncated it to a 133-byte session header without warning. 
*   **#6061 [CLOSED] MiniMAX-M2.7-highspeed context budget smaller than expected** (4 comments)
    Highlighted a provider mismatch where the built-in `minimax-cn` provider artificially capped context windows at ~131k tokens, causing long conversations to crash.
*   **#6052 [CLOSED] Any Flag for @hypabolic/pi-hypa?** (2 comments)
    A critical security report regarding the highly downloaded `@hypabolic/pi-hypa` extension, flagged by the community for potentially malicious or unsafe behavior.
*   **#5886 [OPEN] AgentSession settlement/continuation lifecycle bugs** (2 comments)
    A meta-issue by contributor `mitsuhiko` tracking recurring bugs where post-run logic attempts to continue the agent from an outdated transcript state.
*   **#6085 [CLOSED] Compiled binary extension resolver cannot resolve npm packages** (1 comment)
    Broadened the scope of an earlier issue, revealing that the Bun-compiled `pi` binary fails to resolve *all* npm package imports within extensions.

### 4. Key PR Progress
The repository saw active merging across TUI, core agent logic, and DX. Here are 10 key PRs:

*   **PR #6084 [CLOSED] fix(tui): preserve custom widget render order** 
    Fixes a visual bug where background ticks and high-frequency refreshes caused custom TUI widgets to flicker or change order due to JS `Map` re-insertion behavior.
*   **PR #6064 [OPEN] feat(experimental): pi orchestrator**
    Introduces a new local orchestrator daemon (`.pi/orchestrator/orchestrator.sock`) using newline-delimited JSON over IPC to manage the lifecycle of multiple pi instances.
*   **PR #5832 [OPEN] fix(ai): surface provider HTTP error body**
    Vastly improves debugging behind corporate proxies/gateways by surfencing actual HTTP error bodies instead of opaque SDK messages like `Unknown: UnknownError`.
*   **PR #6078 [OPEN] feat(coding-agent): add get_entries and get_tree RPC commands**
    Empowers developers driving Pi headlessly via the SDK by exposing read-only RPC commands to fetch session trees and append-order entries.
*   **PR #6067 [CLOSED] fix(prompt): add an overeager scope-discipline rule**
    Borrows a concept from Aider, updating the system prompt to force the agent to stay strictly within the scope of the user's request and stop modifying unrelated code.
*   **PR #5270 [CLOSED] Ephemeral session model and thinking level selection**
    Improves local configuration management by ensuring in-session changes (via `Ctrl+P`, `/model`) default to session-only mode, preventing accidental overwrites of global defaults.
*   **PR #6074 [OPEN] fix(coding-agent): avoid pre-prompt compaction continue**
    Resolves backend bugs related to context compaction throwing off the agent's continuation logic. 
*   **PR #6081 [CLOSED] feat: add #RRGGBBAA alpha support for theme colors**
    Enhances custom theming by supporting 8-digit hex codes, applying terminal-safe color blending at load time.
*   **PR #5515 [CLOSED] feat(coding-agent): add alwaysTrust setting**
    Adds a flag to disable project trust gating, highly requested by developers running Pi inside trusted CI/CD pipelines.
*   **PR #6063 [CLOSED] Extension stats**
    Implements backend tracking for extension usage and cleans up `OSC garbage` console output during startup benchmarking.

### 5. Feature Request Trends
*   **Headless & RPC Integrations:** A strong push to use Pi purely as a backend agent, evidenced by requests for Durable HITL tool-call interrupts (#5901), deterministic in-memory session IDs (#6070), and richer RPC session APIs (#5810).
*   **Richer Telemetry & Usage Stats:** Developers want better visibility into agent operations, specifically requesting reasoning token counts to be preserved in the `Usage` object rather than dropped (#6057).
*   **CLI & Shell DX:** Requests for native shell autocompletion (bash/zsh/fish) for pi commands and flags (#6086), alongside a single executable binary (#6065) to prevent Node.js version conflicts.

### 6. Developer Pain Points
*   **TUI Rendering Quirks:** The TUI is showing growing pains, with frequent reports of viewport jumping (#6073), crashing on un-truncated wide lines (#6058), and clearing terminal scrollbacks (#6050)—especially noticeable inside `tmux`.
*   **Provider Configuration Drift:** Users frequently run into artificial context limits (#6061) or broken reasoning states (#6009) because Pi's built-in adapters don't correctly map or persist proprietary provider features (like `maxTokens` pass-through).
*   **Extension Fragility in Compiled Builds:** The transition to a compiled binary has severely impacted the extension ecosystem, with widespread npm package resolution failures (#6085) breaking heavily relied-upon extensions like `pi-lovely-codex` and `pi-vim`.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for June 26, 2026.

### 1. Today's Highlights
Qwen Code rolled out the **v0.19.2-nightly** build, primarily addressing `web_fetch` JSON fallback issues. The community was highly active, with heavy focus on optimizing agentic loops, introducing multi-modal support (like voice dictation and vision models), and fixing critical performance bugs. Notably, developers flagged severe memory leaks on Windows related to shell tool spawning, which has become a top priority for maintainers.

### 2. Releases
*   **v0.19.2-nightly.20260625.b2f11b735**
    *   **Core Fix:** Resolved an issue preventing `web_fetch` from properly falling back to JSON formatting ([PR #5660](https://github.com/QwenLM/qwen-code/pull/5660)).

### 3. Hot Issues
1.  **[P1] Windows PowerShell Memory Leak until OOM** ([#5873](https://github.com/QwenLM/qwen-code/issues/5873)): A highly impactful bug where the agent spawns a new PowerShell process for every tool execution but never closes them, resulting in 100% reproduction of Out-Of-Memory crashes on Windows.
2.  **[P1] Context Compression Gateway Timeouts** ([#5861](https://github.com/QwenLM/qwen-code/issues/5861)): When hitting context limits, `ChatCompressionService` uses `stream: false`, causing gateway timeouts in high-latency deployments. The community suggests switching to streaming.
3.  **[P1] API Streaming Setup Timeout** ([#401](https://github.com/QwenLM/qwen-code/issues/401)): A recurring bug where the CLI fails to set up streaming within 6 seconds, causing interruptions. 
4.  **[P2] Allow Adjustment of Agent-Initiated CMD Timeouts** ([#5838](https://github.com/QwenLM/qwen-code/issues/5838)): Users are requesting configurable timeout settings for shell processes spawned by the AI agent, as default limits are often too short for complex operations.
5.  **[P2] Last Agent Response Cut Off** ([#5837](https://github.com/QwenLM/qwen-code/issues/5837)): A Windows UI rendering bug where the agent's final output gets truncated mid-sentence during streaming.
6.  **[P2] Repeated Shell Tool Results** ([#5641](https://github.com/QwenLM/qwen-code/issues/5641)): OpenAI-compatible providers inadvertently cause Qwen Code to resubmit completed shell tool calls in a loop.
7.  **[P2] Live Syntax Highlighting in Web Shell** ([#5866](https://github.com/QwenLM/qwen-code/issues/5866)): Request to re-tokenize streaming markdown code blocks to prevent UI flickering and fix fence-language aliases.
8.  **[P2] Enrich Session Status in Daemon API** ([#5863](https://github.com/QwenLM/qwen-code/issues/5863)): A call to add live turn-phase, active tools, and pending permissions data to the `GET /session/:id/status` endpoint for better external orchestration.
9.  **[P2] CI Merge Queue Improvement** ([#4805](https://github.com/QwenLM/qwen-code/issues/4805)): Needs an up-to-date branch requirement for PR merges to prevent semantic conflicts from slipping through via stale CI checks.
10. **[P2] Voice Dictation Keyterms Customization** ([##5816](https://github.com/QwenLM/qwen-code/issues/5816)): Users want to override the hardcoded ASR biasing list to improve voice-to-code accuracy for domain-specific jargon.

### 4. Key PR Progress
1.  **[PR #5856] feat(desktop): voice dictation in the desktop app:** Brings `/voice` dictation to the desktop environment, adding a microphone button with live waveform UI to the composer toolbar.
2.  **[PR #5778] feat(cli): add /model --vision:** Introduces a fallback vision model configuration, allowing text-only main models to seamlessly delegate image-processing tasks.
3.  **[PR #5844] feat(core): make self-paced /loop lean on monitor/background-task notifications:** Upgrades the `/loop` command to rely on event-driven notifications rather than rigid timer wakeups, drastically improving agentic autonomous workflows.
4.  **[PR #5738] fix(cli): default to virtualized terminal history:** Solves screen flickering and scroll-back issues by enabling the virtualized history viewport by default for CLI users.
5.  **[PR #5868] feat(core): add configurable auto-compact threshold:** Adds customizable thresholds for context compaction, giving developers finer control over token management and latency.
6.  **[PR #5780] feat: add `qwen update` and `/update` commands:** Implements a much-needed standalone auto-updater and manual update guide for npm/yarn/pnpm environments.
7.  **[PR #5811] fix(cli): improve token speed accounting:** Refines the live `tok/s` display by using wall-clock time and pausing the timer during tool execution, preventing inaccurate speed dips.
8.  **[PR #5629] feat(core): surface PreToolUse hook 'ask' as a TUI confirmation:** Improves security and UX by intercepting `PreToolUse` hooks to prompt native TUI confirmations before tool execution.
9.  **[PR #5849] feat(cli): support @extension mention in input autocomplete:** Allows users to call installed extensions dynamically via `@extension` mentions directly in the CLI input box.
10. **[PR #5869] feat(web-shell): stream-highlight code blocks:** Fixes the web shell UI to incrementally parse markdown AST for smooth, live syntax highlighting without flickering during code generation.

### 5. Feature Request Trends
*   **Advanced Agentic Workflows:** Developers are pushing for more robust autonomous features, seen in requests for event-driven `/loop` wakeups ([#5841](https://github.com/QwenLM/qwen-code/issues/5841)) and daemon APIs for live session orchestration ([#5855](https://github.com/QwenLM/qwen-code/issues/5855)).
*   **Multi-Modal & Accessibility Tools:** A strong trend towards non-text inputs, highlighted by rapid community PRs for voice dictation customization and vision model routing.
*   **Team & Shared Configurations:** Requests for git-shared "team" memory tiers ([#5867](https://github.com/QwenLM/qwen-code/issues/5867)) indicate a shift from solo developer usage toward standardized team environments.
*   **Fine-Grained UX Control:** Users want toggleable defaults, such as configurable history collapsing ([#5759](https://github.com/QwenLM/qwen-code/issues/5759)) and built-in status lines ([#5789](https://github.com/QwenLM/qwen-code/issues/5789)).

### 6. Developer Pain Points
*   **Windows Stability:** The PowerShell memory leak bug ([#5873](https://github.com/QwenLM/qwen-code/issues/5873)) is a major source of frustration, compounded by UI rendering cut-offs ([#5837](https://github.com/QwenLM/qwen-code/issues/5837)) on the same OS.
*   **Token Management & Timeouts:** Non-streaming context compression ([#5861](https://github.com/QwenLM/qwen-code/issues/5861)) and rigid shell execution timeouts ([#5838](https://github.com/QwenLM/qwen-code/issues/5838)) are causing artificial crashes and workflow bottlenecks.
*   **Security Vulnerabilities in Tools:** Developers are increasingly auditing agent tools, flagging unsafe URL parsing in `WebFetch` ([#5782](https://github.com/QwenLM/qwen-code/issues/5782)) and path traversal risks in source deletion ([PR #5829](https://github.com/QwenLM/qwen-code/pull/5829)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical digest for the CodeWhale (formerly DeepSeek TUI) project for June 26, 2026.

### 1. Today's Highlights
CodeWhale has officially released **v0.8.65**, finalizing its rebrand from `deepseek-tui` and introducing the highly anticipated "Fleet loadout auto" for multi-model routing. The development team is aggressively pushing forward with the **v0.8.66 "Hotbar" update**, landing multiple PRs today that finalize its config schema, rendering, and action metadata. Additionally, critical reliability patches were merged today to address provider SSE stream timeouts and workflow context drift.

### 2. Releases
*   **[v0.8.65](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.65)**
    *   **Rebrand Finalization:** `CodeWhale` is now the canonical name across all project surfaces. The legacy npm package `deepseek-tui` is officially deprecated.
    *   **Migration:** Users upgrading from legacy `v0.8.x` `deepseek` commands should refer to the new `docs/REBRAND.md` for migration instructions.

### 3. Hot Issues
1.  **[#3568 - Plan and agent mode mixed up YET AGAIN](https://github.com/Hmbown/CodeWhale/issues/3568)**: A highly frustrating bug where the AI loses context of Plan vs. Agent mode switching, causing it to attempt file modifications while in Plan mode. Receiving active community traction (👍 1).
2.  **[#3541 - Rust-based native runtime / desktop client](https://github.com/Hmbown/CodeWhale/issues/3541)**: A proposal to abandon the Node.js/TypeScript runtime in favor of Rust to reduce cold-start latency, memory footprint, and event-loop stalls during long agent sessions.
3.  **[#3496 - Throttle Zhipu/GLM-5.2 to avoid SSE timeouts](https://github.com/Hmbown/CodeWhale/issues/3496)**: A critical reliability issue causing provider failures under concurrent load in Fleet workers due to strict API concurrency limits.
4.  **[#3205 - Fleet model classes & loadout auto](https://github.com/Hmbown/CodeWhale/issues/3205)**: The core tracker for v0.8.65's multi-model support, designed to establish a universal automatic compute loadout resolver across TUI, CLI, and subagents.
5.  **[#3582 - install.sh endpoint returns HTML](https://github.com/Hmbown/CodeWhale/issues/3582)**: A production-breaking bug where the documented `curl | sh` install command failed because the endpoint served a Next.js HTML page instead of a shell script.
6.  **[#3486 - Repo constitution and context-policy drift guard](https://github.com/Hmbown/CodeWhale/issues/3486)**: An effort to resolve context drift between CodeWhale's global compiled base prompt and repo-local authority policies.
7.  **[#3572 - Windows env variables not inherited](https://github.com/Hmbown/CodeWhale/issues/3572)**: A bug preventing Windows user-level environment variables from loading into CodeWhale's spawned shells, breaking local build tools and exec commands.
8.  **[#3389 - v0.8.66 EPIC: Hotbar MVP command surface](https://github.com/Hmbown/CodeWhale/issues/3389)**: The umbrella issue coordinating the new MMO-style 8-slot quick action bar, tying together config, adapters, rendering, and safety checks.
9.  **[#3461 - MCP duplicate server instance lifecycle](https://github.com/Hmbown/CodeWhale/issues/3461)**: A bug where a single MCP server config spawns two processes (one orphaned), causing memory waste and shared pipe crashes.
10. **[#3545 - Custom context size for providers](https://github.com/Hmbown/CodeWhale/issues/3545)**: A request to allow manual configuration of context window sizes (e.g., setting 1M for Qwen models that default to 128k).

### 4. Key PR Progress
1.  **[PR #3595 - fix(tui): throttle Z.ai provider requests](https://github.com/Hmbown/CodeWhale/pull/3595)**: Implements `max_concurrency` config for providers, defaulting Z.ai/GLM to 3 concurrent requests to prevent SSE stream timeouts.
2.  **[PR #3598 - fix(tui): render hotbar sidebar panel](https://github.com/Hmbown/CodeWhale/pull/3598)**: Delivers the UI for the Hotbar, rendering an 8-slot grid at the bottom of the sidebar with active, empty, and disabled states.
3.  **[PR #3592 - fix(tui): preserve mode when editing a turn](https://github.com/Hmbown/CodeWhale/pull/3592)**: Directly addresses Issue #3568 by ensuring `/edit` redispatches the turn using the engine's current mode instead of forcing Agent mode.
4.  **[PR #3590 - fix(web): serve install script before app fallback](https://github.com/Hmbown/CodeWhale/pull/3590)**: Quickly patched the production web server to correctly serve `/install.sh` as a static file before OpenNext app routing intercepts it.
5.  **[PR #3601 - fix(tui): surface provider concurrency status](https://github.com/Hmbown/CodeWhale/pull/3601)**: Adds a read-only engine snapshot in the TUI so users can see live active request counts and API caps via the `/provider` command.
6.  **[PR #3596 - fix(tui): surface repo constitution drift](https://github.com/Hmbown/CodeWhale/pull/3596)**: Updates the repo constitution policy to warn users if they hard-code stale version integration lanes in their config.
7.  **[PR #3599 - fix(tui): harden hotbar action metadata](https://github.com/Hmbown/CodeWhale/pull/3599)**: Establishes a strict metadata contract for Hotbar actions, paving the way for reliable MCP tool and plugin integrations.
8.  **[PR #3588 - fix(command-safety): python -m arity reachable](https://github.com/Hmbown/CodeWhale/pull/3588)**: Fixes a dead code branch where `python -m` commands bypassed proper arity classification because flags were stripped too early.
9.  **[PR #3585 - Add OpenModel provider support](https://github.com/Hmbown/CodeWhale/pull/3585)**: Introduces OpenModel as a first-class provider, defaulting to `deepseek-v4-flash` via the Anthropic Messages wire protocol.
10. **[PR #3591 - chore: use stable rust toolchain](https://github.com/Hmbown/CodeWhale/pull/3591)**: Unlocks the repo from the exact `1.88` Rust version, allowing the use of the latest stable toolchain while keeping MSRV guards.

### 5. Feature Request Trends
*   **UI / Workflow Efficiencies:** There is a massive push towards keyboard-driven productivity, highlighted by the impending **Hotbar** (MMO-style action bar) and natural language approval workflows.
*   **Advanced Provider Routing:** Users want deeper control over multi-model setups. Requests include custom endpoints, OpenModel integration, and intelligent "Fleet loadout" auto-switching based on task complexity.
*   **Performance & Native Execution:** Developers are feeling the overhead of Node.js and are strongly requesting a **fully native Rust runtime** to eliminate event-loop stalls and reduce memory consumption during long agent sessions.
*   **Granular Provider Configuration:** Users need to override hardcoded limits, specifically requesting customizable context window sizes (e.g., 1M tokens for Qwen) and fine-grained concurrency throttles for APIs like Zhipu/GLM.

### 6. Developer Pain Points
*   **Mode Switching Amnesia:** A recurring frustration is the AI "forgetting" it is in Plan mode and silently attempting destructive file modifications, breaking user trust in the TUI's safety gates.
*   **Provider API Fragility:** Developers running concurrent sub-agents (Fleet mode) frequently hit SSE stream timeouts and API rate limits, requiring manual implementation of local concurrency throttles to prevent crashes.
*   **Installation & OS Friction:** Recent updates broke standard `curl | sh` installation due to web routing flaws. Meanwhile, Windows developers continue to struggle with environment variable inheritance, making local tool integration cumbersome.
*   **Stale Tooling & Configurations:** Hardcoded version locks (like the Rust 1.88 toolchain) and legacy context policies have caused unnecessary friction, though the team is actively refactoring these Technical Debt items this week.

</details>