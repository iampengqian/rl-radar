# AI CLI Tools Community Digest 2026-07-16

> Generated: 2026-07-15 22:17 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 16, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tools ecosystem in mid-2026 is characterized by rapid iterations, complex multi-agent orchestration, and a strong shift toward local desktop applications and daemon architectures. Major players like Anthropic, OpenAI, Google, and GitHub are pushing the boundaries of autonomous execution, which has consequently introduced systemic growing pains around fleet management, context window optimization, and cross-platform UI stability. Developers now expect these tools to function not just as chat interfaces, but as resilient, highly configurable background agents capable of securely managing parallel workflows and integrating deeply with enterprise ecosystems via Model Context Protocol (MCP).

### 2. Activity Comparison
*Note: Data reflects activity explicitly reported in the July 16, 2026 digests.*

| Tool | Issues Highlighted | PRs Highlighted | Release Status (Today) |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 4 | **v2.1.210** (Released) |
| **OpenAI Codex** | 10 | 10 | **v0.145.0-alpha.14** (Alpha) |
| **Gemini CLI** | 10 | 10 | **v0.52.0-nightly** (Nightly) |
| **GitHub Copilot CLI**| 10 | 0 | **v1.0.71-3** (Released) |
| **OpenCode** | 10 | 10 | **v1.18.2** (Released) |
| **Pi (pi-mono)** | 10 | 10 | None |
| **Qwen Code** | 10 | 10 | **v0.19.10-nightly** (Multiple) |
| **DeepSeek TUI** | 5 | 2 | None |
| **Kimi Code CLI** | 0 | 1 | None |

### 3. Shared Feature Directions
*   **Multi-Agent Lifecycle & Orchestration:** Almost all ecosystems are wrestling with subagent management. **Claude Code** (zombie processes), **OpenAI Codex** (thread caps & config overrides), **Gemini CLI** (subagent hangs), **Qwen Code** (weak bidirectional state syncing), and **OpenCode** (recursive spawning) all face issues with cleanly spawning, executing, and terminating child agents without hanging or dropping context.
*   **Granular Permissions & Security Boundaries:** As agents gain more autonomous execution capabilities, communities are demanding tighter sandboxing and granular tool permissions. **OpenCode** and **Qwen Code** are patching prompt injection vectors and strict workspace boundaries; **Gemini CLI** is working on OS-level sandboxing for bash execution; and **Claude Code** users are requesting per-skill permission configurations to avoid repetitive approvals.
*   **MCP (Model Context Protocol) Integration:** MCP is becoming the universal standard for tool integration, but native implementations are struggling with scale and OAuth. **GitHub Copilot CLI** has a critical OAuth bridging failure, **Gemini CLI** is capping discovery timeouts and facing API limits with >128 tools, and **Qwen Code** is rejecting tool names with dots. **OpenCode** and **Claude Code** are pushing for per-session and per-skill MCP state isolation.
*   **Cost & Context Optimization:** Token waste and memory management remain universal pain points. **Claude Code** users report code-review skills burning millions of tokens; **Gemini CLI** and **Qwen Code** are dealing with context bleeding from disabled memory features; **Pi** is building SQLite session storage for optimized compaction; and **GitHub Copilot CLI** users are hitting hard context limits due to binary diffs.

### 4. Differentiation Analysis
*   **Desktop vs. Native CLI Focus:** OpenAI Codex, GitHub Copilot CLI, and OpenCode are heavily focused on Desktop application environments (Windows/Mac). Consequently, their pain points skew heavily toward OS-level friction—such as Codex's Windows ARM64 crash loops and antivirus flags, and OpenCode's UI tab layout backlash. Conversely, tools like Claude Code, Gemini CLI, and Pi remain deeply rooted in terminal/TUI optimization.
*   **Enterprise Readiness vs. Power User Customization:** GitHub Copilot CLI and Qwen Code show distinct enterprise signals, focusing on GitHub App authentication, automation tokens, and workspace daemon management. Claude Code and Pi are leaning heavily into power-user territory, focusing on highly complex workflows, provider fallback flexibility (e.g., Pi's Bedrock/xAI OAuth), and advanced fleet management.
*   **Architectural Approaches:** Gemini CLI is pioneering AST-aware file reads to reduce token noise mathematically. Qwen Code is treating its CLI as a local server daemon (`qwen serve`) to support multiple isolated workspaces, differing significantly from OpenAI's approach of spinning up concurrent local threads within a desktop app.

### 5. Community Momentum & Maturity
*   **Highest Momentum & Iteration:** **OpenAI Codex**, **Gemini CLI**, and **Qwen Code** are demonstrating massive engineering velocity, rolling out nightly or multiple alpha/beta builds per day alongside heavy PR merges (10+ PRs each in 24 hours). They are rapidly evolving but experiencing high regression rates (especially Codex on Windows).
*   **Highest Maturity & Stability Focus:** **Claude Code** and **GitHub Copilot CLI** are focusing heavily on pipeline security, code quality, and enterprise features. Copilot CLI notably had zero PRs updated today, indicating a period of issue triaging rather than active code merging.
*   **Niche/Early-Stage Ecosystems:** **DeepSeek TUI** and **Kimi Code CLI** are showing much lower raw volume in community activity. DeepSeek is focusing on UX conversation flows (YOLO guardrails), while Kimi is in a quiet backend maintenance phase (telemetry standardization).

### 6. Trend Signals
*   **The "Windows Desktop" Penalty:** A major industry trend is the friction of moving AI CLI tools into cross-platform Desktop apps. OpenAI Codex and OpenCode are currently experiencing severe user backlash due to memory leaks, ARM64 N-API crashes, and aggressive UI changes, signaling that TUIs might remain the preferred environment for power developers for the foreseeable future.
*   **Prompt Injection & Autonomous Safety:** As CLIs adopt "YOLO" modes or autonomous background loops, "fail-closed" safety mechanisms are becoming too aggressive. Qwen Code, DeepSeek TUI, and Claude Code are all facing issues where safety classifiers or auto-approval caches "brick" user sessions or bypass explicit confirmation gates. Developers need dynamic, context-aware guardrails rather than hard-coded blockers.
*   **State & Context Transience:** There is a strong industry push toward making agent states ephemeral and cleanly compacted. Pi's move to SQLite for session storage, GitHub Copilot's push for 1M context windows, and widespread frustration over context poisoning (e.g., ghost writes in Claude Code, binary diffs in Copilot) indicate that efficiently managing LLM memory limits without human intervention is the next major technical frontier.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent community activity.

### 1. Top Skills Ranking & Critical Fixes
*Note: PR comment data is currently propagating; rankings are determined by community cross-referencing, severity, and issue overlap.*

*   **Meta-Skill Fix: `skill-creator` Evaluation Engine** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
    *   **Functionality:** Fixes a critical bug in `run_eval.py` where skill recall was always reported as 0%, causing the description-optimization loop to optimize against noise.
    *   **Discussion Highlights:** This is the most impactful active PR, directly resolving a highly reproduced blocker ([Issue #556](https://github.com/anthropics/skills/issues/556), [Issue #1169](https://github.com/anthropics/skills/issues/1169)) where skills failed to trigger during automated testing.
    *   **Status:** Open
*   **New Skill: `document-typography`** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Automated typographic quality control to prevent orphan words, widow paragraphs, and numbering misalignment in generated documents.
    *   **Discussion Highlights:** Addresses an inherent limitation in AI generation—users rarely prompt for good typography, making it a perfect candidate for an invisible, automated Skill.
    *   **Status:** Open
*   **New Skill: `testing-patterns`** ([PR #723](https://github.com/anthropics/skills/pull/723))
    *   **Functionality:** A comprehensive Skill guiding Claude through the full software testing stack (Unit, Integration, E2E) using the Testing Trophy model.
    *   **Discussion Highlights:** Fills a major gap in enterprise software development workflows, ensuring Claude generates maintainable test architectures rather than isolated test scripts.
    *   **Status:** Open
*   **New Skill: `pyxel` (Retro Game Engine)** ([PR #525](https://github.com/anthropics/skills/pull/525))
    *   **Functionality:** Integrates the `pyxel-mcp` server, allowing Claude to write, run, and debug retro/pixel-art games in Python.
    *   **Discussion Highlights:** Represents an expanding intersection of Claude Code and creative coding, highly praised for its tight write-run-inspect workflow loop. 
    *   **Status:** Open
*   **New Meta-Skill: `self-audit`** ([PR #1367](https://github.com/anthropics/skills/pull/1367))
    *   **Functionality:** A universal delivery gatekeeper that mechanically verifies file existence before performing a four-dimension reasoning audit on AI output.
    *   **Discussion Highlights:** Tackles AI "hallucination" and undelivered promises head-on, closely aligning with community proposals for adversarial review pipelines ([Issue #1385](https://github.com/anthropics/skills/issues/1385)).

### 2. Community Demand Trends
Based on the most active Issues, the community is demanding Skills that expand Claude's operational autonomy, safety, and enterprise utility:
*   **Trust, Safety & Governance:** Users are highly concerned about security boundaries. [Issue #492](https://github.com/anthropics/skills/issues/492) highlights vulnerabilities where community skills spoof the `anthropic/` namespace, driving demand for a secure namespace and governance skills ([Issue #412](https://github.com/anthropics/skills/issues/412)).
*   **Agent State Management:** For long-running tasks, there is a strong appetite for memory compaction. The proposed `compact-memory` skill ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) aims to replace verbose prose memory with efficient symbolic notation.
*   **Enterprise Team Workflows:** Users want collaborative functionality. [Issue #228](https://github.com/anthropics/skills/issues/228) requests org-wide skill sharing for Claude.ai, bypassing the need to manually pass around `.skill` files.
*   **Reasoning Quality Pipelines:** Moving beyond simple prompt generation, users want multi-step verification. [Issue #1385](https://github.com/anthropics/skills/issues/1385) proposes a full pipeline involving pre-task calibration, adversarial review, and mechanical delivery verification.

### 3. High-Potential Pending Skills
These open PRs address specific, highly-upvoted community pain points and have a high probability of merging in upcoming releases:
*   **System-Level Windows Compatibility:** ([PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1323](https://github.com/anthropics/skills/pull/1323)) A cluster of PRs dedicated to fixing `subprocess.Popen`, PATHEXT, and CP1252 encoding bugs that make the `skill-creator` completely unusable on Windows. 
*   **OOXML Corruption Fixes (`docx`):** ([PR #541](https://github.com/anthropics/skills/pull/541)) Prevents document corruption by fixing a shared ID collision between tracked changes and existing bookmarks in Word documents.
*   **UTF-8 & YAML Validation:** ([PR #362](https://github.com/anthropics/skills/pull/362), [PR #539](https://github.com/anthropics/skills/pull/539)) Resolves silent crashes and parsing failures in the Rust CLI engine when skills use multi-byte characters (UTF-8) or unquoted YAML special characters in their descriptions.
*   **Enterprise Color Management:** ([PR #1302](https://github.com/anthropics/skills/pull/1302)) Adds deep expertise in color spaces (OKLCH, CAM16) and naming systems for design-heavy enterprise workflows.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is shifting away from static domain knowledge and toward **cross-platform tooling reliability (Windows/UTF-8 support) and automated quality assurance (trigger evaluation, self-auditing, and memory compaction) to enable trustworthy, long-running autonomous agents.**

---

Here is the Claude Code community digest for July 16, 2026, based on the latest GitHub activities.

### 1. Today's Highlights
Claude Code rolled out version v2.1.210, introducing a live elapsed-time counter for long-running tool calls to improve UI transparency, alongside new startup warnings for outdated permission rules. The community was highly active, with heavy discussion around background agent fleet management (including zombie processes and unexpected billing) and recurring API "No Response" errors during advisor tasks. Developers also submitted several new plugin PRs to enhance code quality pipelines and marketplace security.

### 2. Releases
**[v2.1.210](https://github.com/anthropics/claude-code/releases)** 
* **UI Enhancement:** Added a live elapsed-time counter to the collapsed tool summary line. Long-running tool calls will now visibly tick, preventing the UI from looking stuck.
* **Deprecation Warnings:** Implemented a startup warning for legacy `Write(path)`, `NotebookEdit(path)`, and `Glob(path)` permission rules. Developers are advised to migrate to `Edit(path)` or `Read(path)`.

### 3. Hot Issues
1. **[ #16157 ] Instantly hitting usage limits with Max subscription** - * area:cost, area:api *
A long-standing issue with nearly 1,500 comments. Users report abruptly hitting usage limits on Max subscriptions, causing significant disruptions to active development workflows.
2. **[ #69238 ] No response from API error when Advisor is triggered** - * area:tui, area:api *
Users leveraging Sonnet as a base model report consistent "No response from API" errors when the system attempts to trigger Opus 4.8 for advisory tasks.
3. **[ #68461 ] Renderer corrupts screen in long iTerm2 sessions** - * area:tui, regression *
A highly disruptive UI regression where the TUI renderer progressively corrupts the screen in macOS iTerm2, forcing developers to frequently manually redraw (`Ctrl+L`).
4. **[ #77869 ] Built-in git-worktree auto-sync for `--spawn` worktree** - * area:agents *
A feature request addressing multi-session workflows. Developers note that isolated branches created via `git worktree` sit invisibly unless manually synced, requesting native auto-syncing.
5. **[ #77943 ] Workflow code-review burns excessive tokens** - * area:cost, area:skills *
The built-in `code-review` workflow is reportedly consuming massive token counts (1.1M+ for just 5 files) and timing out with null results, severely impacting usage limits.
6. **[ #77876 ] Background agent keeps running and billing after window closed** - * area:cost, area:agents *
A critical billing and lifecycle bug where closing a terminal window and re-authenticating fails to terminate background agents, which continue to consume compute invisibly.
7. **[ #77942 ] File edits from aborted streaming attempts executed but unrecorded** - * area:tools, area:desktop *
"Ghost writes" are occurring where file edits from aborted or retried streaming attempts are applied to disk but left absent from the session transcript.
8. **[ #77655 ] Subagent view renders main session's identity** - * area:tui, area:agent-view *
When inspecting a spawned subagent, the UI chrome incorrectly displays the parent session's model, effort, and agent definition rather than the subagent's actual configurations.
9. **[ #77939 ] Plugin registry creates duplicates due to drive-letter casing (Windows)** - * area:plugins *
Windows users are experiencing duplicated project-scope plugin installs because the registry tracks paths as raw strings without normalizing case-insensitive drive letters.
10. **[ #77764 ] `AskUserQuestion` skipping reported to model as "No preference"** - * area:tools, user-experience *
When a user skips a forced-choice prompt, the model interprets it as "No preference," effectively giving the AI delegated authority to proceed on an assumption rather than halting.

### 4. Key PR Progress
*(Note: Only 4 PRs were updated in the last 24 hours, all highlighted below)*
1. **[PR #77916] Add code-quality-pipeline plugin**: Introduces a robust skill-based plugin defining strict, sequential quality gates (including per-file pipelines) that sit between code writing and merging.
2. **[PR #77709] Add settings example: official marketplace only**: Adds a new configuration example demonstrating how to lock plugin marketplaces strictly to the official Anthropic registry using `strictKnownMarketplaces`.
3. **[PR #77705] Fix `validate-settings.sh` false-passes**: Resolves a bug in the plugin-dev tooling where scripts meant to reject files without YAML frontmatter would false-pass on empty files.
4. **[PR #77613] Claude-compare**: A new utility pull request (details sparse in digest data) aimed at adding comparative capabilities to the agent workflow.

### 5. Feature Request Trends
* **Agent Lifecycle & Fleet Management:** With the rise of multi-agent workflows, developers urgently want better `claude agents` fleet view controls. This includes auto-syncing `git worktrees`, properly clearing zombie/completed sessions, and preventing cross-window UI glitches.
* **Granular Skill Permissions:** Developers are asking for per-skill permission configurations (e.g., in `settings.json`) to avoid repetitive approvals when running automated workflows across multiple repositories.
* **Verbose Logging Controls:** Users are requesting the ability to suppress noisy file diff outputs in terminal logging, allowing them to focus on high-level agent reasoning rather than scrolling through console spam.

### 6. Developer Pain Points
* **API Timeouts in Advisory Modes:** Intermittent "No Response from API" errors during long Opus processing tasks are causing massive workflow slowdowns, with the system often falsely flagging local network issues.
* **Ghost Writes & State Desyncs:** File execution and transcript states are falling out of sync, particularly when streams are aborted, leaving developers with unrecorded disk modifications.
* **Windows & Network Incompatibilities:** Windows users continue to face friction with mapped network drives (invisible session resumes) and strict path-casing issues breaking plugin registries.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 16, 2026.

### 1. Today's Highlights
The OpenAI Codex team rolled out three new Rust CLI alpha builds (up to `v0.145.0-alpha.14`) alongside a massive batch of merged PRs focused on concurrent loading and agent communication optimizations. However, the community is actively sounding the alarm over severe stability issues in the Windows Desktop app, specifically a crash-loop on ARM64 devices and major UI stuttering on x64 builds. There is also a strong push from power users for better subagent configurability and the removal of timed auto-resolutions.

### 2. Releases
*   **[rust-v0.145.0-alpha.14](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.14)**, **[rust-v0.145.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.13)**, and **[rust-v0.145.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.12)**: Three consecutive CLI alpha iterations pushing the `0.145.0` version branch.

### 3. Hot Issues
1.  **[Windows ARM64 App Crash-Loops](https://github.com/openai/codex/issues/33381)** (#33381): A critical regression where the Windows app crashes ~15 seconds after launch due to missing `napi_*` symbols and a failing `serialport` delay-load. Garnered high engagement as it completely blocks ARM usage.
2.  **[Windows x64 UI Lag & 0xC06D007F Errors](https://github.com/openai/codex/issues/33375)** (#33375): Desktop users on x64 are experiencing severe input lag and repeated `serialport.node` delay-load failures when opening new tasks.
3.  **[Disable 60-Second Auto-Resolve](https://github.com/openai/codex/issues/28969)** (#28969): A highly upvoted request (123 thumbs up) asking for a CLI setting to prevent Codex from auto-resolving user questions after 60 seconds. 
4.  **[MultiAgent V2 Forcing GPT-5.6 Sol Instances](https://github.com/openai/codex/issues/31814)** (#31814): A closed but highly discussed bug (153 thumbs up) where `GPT-5.6 Sol` overrides subagent model configurations, forcing all subagents to run Sol.
5.  **[Missing Projects After App Upgrade](https://github.com/openai/codex/issues/31845)** (#31845): Users report that local projects and chat threads disappeared from the UI following a recent app upgrade, heavily impacting workflows.
6.  **[Codex App Freezes on Windows 11 Pro](https://github.com/openai/codex/issues/20214)** (#20214): A persistent, long-running issue where the app stutters and freezes despite having ample system resources (e.g., 32GB RAM).
7.  **[Silent Model Switching](https://github.com/openai/codex/issues/33418)** (#33418): Users are frustrated by the CLI silently switching models (e.g., from Luna Light), resulting in unexpected token usage and wasted time debugging the unexpected output.
8.  **[Workspace Write DENY ACL Blocks Git](https://github.com/openai/codex/issues/32880)** (#32880): A Windows sandbox regression (versions 26.707.3748 → 26.707.6957) that blocks Codex from performing autonomous Git operations in linked worktrees.
9.  **[Antivirus Flagging (Norton 360 & Defender)](https://github.com/openai/codex/issues/32331)** (#32331): The Windows app is routinely triggering behavioral protection in Norton 360 and Microsoft Defender just by opening existing threads, causing severe CPU spikes.
10. **[Multi-Agent Thread Cap Regression](https://github.com/openai/codex/issues/33039)** (#33039): Codex Desktop is ignoring the configured `agents.max_threads=6` and artificially capping concurrency at 4 threads.

### 4. Key PR Progress
1.  **[PR #33423: Load executor plugin declarations concurrently](https://github.com/openai/codex/pull/33423)**: Major performance boost for remote environments by reading MCP server and app connector declarations simultaneously rather than sequentially.
2.  **[PR #33432: Preserve paginated history for spawned subagents](https://github.com/openai/codex/pull/33432)**: Improves subagent context handling by inheriting paginated history from parent agents while safely excluding parent prefixes from child token counts.
3.  **[PR #33426: Add Cursor support to setup import](https://github.com/openai/codex/pull/33426)**: Codex can now natively detect and import settings, MCP servers, hooks, and project instructions directly from Cursor.
4.  **[PR #33367: Respect final-answer boundaries for queued agent mail](https://github.com/openai/codex/pull/33367)**: Fixes an agent-loop issue where late-arriving messages from child agents would inappropriately restart sampling after a final answer was generated.
5.  **[PR #29500: Support permissions-scoped exec rules](https://github.com/openai/codex/pull/29500)**: Upgrades exec policy prefixes to be aware of the active permissions profile (managed vs. sandbox), preventing globally applied risk rules.
6.  **[PR #33369: Scan skill roots concurrently](https://github.com/openai/codex/pull/33369)**: Optimizes filesystem operations by scanning up to eight skill roots simultaneously.
7.  **[PR #33411: Migrate plugin commands into skills on install](https://github.com/openai/codex/pull/33411)**: Automatically converts supported plugin command Markdown into generated skills, streamlining plugin management.
8.  **[PR #33363: Add opt-in releases.openai.com support to standalone installers](https://github.com/openai/codex/pull/33363)**: Adds a fallback/alternative download path for CLI releases directly via `releases.openai.com` alongside GitHub.
9.  **[PR #33430: Avoid creating metadata paths in the Windows sandbox](https://github.com/openai/codex/pull/33430)**: Fixes a sandbox issue where elevated Windows setups turned read-only protections into hard deny-write paths, artificially creating missing metadata directories.
10. **[PR #33373: Render TUI prompts before submitting user turns](https://github.com/openai/codex/pull/33373)**: UX fix that optimistically renders user prompts immediately, preventing the input from disappearing while the CLI waits on remote work.

### 5. Feature Request Trends
*   **Advanced Subagent Configuration:** Power users want granular control over multi-agent setups. Requests include project-scoped policy profiles, model/effort gates, and specific concurrency quotas per named agent ([#33437](https://github.com/openai/codex/issues/33437)).
*   **Removal of Forced Timers:** There is a strong consensus to allow users to permanently disable the 60-second auto-resolution timer for AI questions, as it prematurely closes required user inputs ([#28969](https://github.com/openai/codex/issues/28969), [#29702](https://github.com/openai/codex/issues/29702)).

### 6. Developer Pain Points
*   **Windows Stability Crisis:** The vast majority of high-traffic issues stem from Windows desktop instability. ARM64 users are entirely blocked by N-API/`serialport` delay-load crashes, while x64 users face system-wide input lag, repeated crashes, and OS-level antivirus triggers.
*   **Unintended Model/Agent Overrides:** Developers are frustrated when the CLI or App silently overrides explicitly configured models or thread caps (e.g., the `GPT-5.6 Sol` MultiAgent forcing and the `max_threads` cap), leading to wasted tokens and broken CI expectations.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 16, 2026.

### 1. Today's Highlights
Gemini CLI rolled out a new nightly build (v0.52.0) focusing on UI stability, tightening security boundaries for bash execution, and optimizing agentic loops. The community and maintainers are actively tackling agent reliability, specifically addressing subagent hang-ups, shell execution freezes, and memory system bugs. Several crucial PRs also landed today to patch an API-breaking tool configuration bug and enhance terminal rendering performance.

### 2. Releases
*   **[v0.52.0-nightly.20260715](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260714.gfa975395b...v0.52.0-nightly.20260715.gfa975395b)**: Automated nightly bump focusing on underlying core refactoring and dependency alignment (such as Vitest and Google Auth Library updates).

### 3. Hot Issues
1.  **[#22323: Subagent recovery after MAX_TURNS hides interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** - *Bug*: The `codebase_investigator` falsely reports success when hitting turn limits, masking underlying failures from the user.
2.  **[#21409: Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** - *Bug*: High-impact issue where deferring to the generalist agent causes infinite hangs on basic operations, currently requiring users to manually disable subagents.
3.  **[#25166: Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** - *Bug*: The CLI frequently hangs after simple command execution, falsely awaiting user input and disrupting terminal workflows.
4.  **[#21968: Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** - *Enhancement*: Users report the model ignores custom skills (e.g., gradle, git) unless explicitly instructed, reducing the efficacy of automated tooling.
5.  **[#19873: OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** - *Feature*: A proposal to safely leverage Gemini 3's native bash affinity via zero-dependency OS sandboxing, allowing the model to use standard POSIX tools securely.
6.  **[#24353: Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** - *Eval Infra*: An epic tracking the expansion of behavioral evals to ensure component-level reliability across supported Gemini models.
7.  **[#26522: Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** - *Bug*: Auto Memory repeatedly surfaces low-signal sessions because the extraction agent fails to mark them as processed without reading them.
8.  **[#26525: Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** - *Security*: Exposes a flaw where local transcripts are sent to the model before secrets are redacted. 
9.  **[#22745: Assess AST-aware file reads and codebase mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** - *Feature*: Investigating AST tools to reduce token noise and misaligned reads, allowing precise method-bound extractions.
10. **[#24246: Gemini CLI encounters 400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** - *Bug*: The agent hits API limits when overloaded with tools, highlighting the need for smarter, scoped tool selection.

### 4. Key PR Progress
1.  **[#28410: Shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)** - Prevents the CLI from silently freezing for 10 minutes at startup when an MCP server fails to respond to discovery requests.
2.  **[#28407: Group cancelled tool responses to prevent 400 Bad Request](https://github.com/google-gemini/gemini-cli/pull/28407)** - Fixes a severe chat continuity bug where rejecting tool calls would break the session and lose context.
3.  **[#28403: Block $VAR variable expansion bypass](https://github.com/google-gemini/gemini-cli/pull/28403)** - Critical security patch fixing a bash shell vulnerability that allowed malicious prompts to exfiltrate environment secrets via `$VAR` expansion.
4.  **[#28406: Apply modelIdResolutions to tool sub-agent configs](https://github.com/google-gemini/gemini-cli/pull/28406)** - Resolves `INVALID_MODEL` API errors for users relying on standard API keys by mapping utility tools away from hardcoded preview models.
5.  **[#28405: Prevent scroll position jump during content updates](https://github.com/google-gemini/gemini-cli/pull/28405)** - UI fix stopping the terminal from snapping to the bottom when a user scrolls up to review code while new content streams in.
6.  **[#28319: Enforce path trust check prior to environment loading](https://github.com/google-gemini/gemini-cli/pull/28319)** - Refactors the `a2a-server` initialization to isolate task environments, ensuring workspace trust checks occur before loading `.env` variables.
7.  **[#28164: Limit recursive reasoning turns per user request](https://github.com/google-gemini/gemini-cli/pull/28164)** - Protects local CPU and API quotas by enforcing a strict 15-turn limit on infinite reasoning loops per single prompt.
8.  **[#28275: Make direct GCP telemetry exporters optional](https://github.com/google-gemini/gemini-cli/pull/28275)** - Moves heavy Google Cloud telemetry dependencies out of the core runtime, improving startup times for local users.
9.  **[#28224: Avoid splitting emoji when truncating display strings](https://github.com/google-gemini/gemini-cli/pull/28224)** - Fixes a terminal rendering bug that caused visual corruption (replacement characters) when the UI truncated strings containing surrogate pairs/emojis.
10. **[#28305: Add tool call formatter and failure summaries to evals](https://github.com/google-gemini/gemini-cli/pull/28305)** - Improves developer observability by outputting a numbered, compact timeline of agent tool calls directly in the console when a behavioral eval fails.

### 5. Feature Request Trends
*   **Advanced Sandboxing & Bash Affinity**: Strong demand for zero-dependency OS sandboxing to allow Gemini 3 to natively and safely chain POSIX tools without compromising system security ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
*   **AST-Aware Codebase Navigation**: Requests for Abstract Syntax Tree mapping to reduce token noise and enable precise method-bound reads, reducing multi-turn failures ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)).
*   **Proactive Skill Utilization**: Enhancements to the agent's internal routing so it autonomously triggers custom user-defined skills/subagents contextually, rather than requiring explicit prompt commands ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
*   **Resilient Subagent Workflows**: Calls for automatic lock recovery and session takeover in browser agents, alongside better trajectory visibility for debugging ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).

### 6. Developer Pain Points
*   **Agent Unreliability & Freezing**: The most frequent frustration is the CLI hanging indefinitely. This happens during subagent deferral ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), generic shell execution ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive CLI prompt triggers (like creating a Vite app).
*   **Workspace Clutter from Scripts**: When restricted from direct file edits, the model overuses bash to create scattered `tmp` edit scripts, making version control and workspace cleanup highly tedious ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
*   **Auto Memory Intrusiveness**: The background memory system creates friction by retrying low-signal sessions endlessly ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) and processing transcript data before secrets are deterministically redacted ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the community digest for GitHub Copilot CLI based on the last 24 hours of activity.

# GitHub Copilot CLI Community Digest — 2026-07-16

## 1. Today's Highlights
The Copilot CLI shipped two rapid-fire releases (v1.0.71-2 and v1.0.71-3), introducing persistent voice mode microphone selection, agent access limiting, and robust canvas support for extension-driven interactions. Meanwhile, the community has surfaced a major systemic blocker: third-party OAuth for Model Context Protocol (MCP) servers is failing to bridge tokens to CLI sessions, resulting in falsely reported "Connected" statuses while tools remain invisible to the agent.

## 2. Releases

### [v1.0.71-3](https://github.com/github/copilot-cli/releases/tag/v1.0.71-3)
**Fixed**
- On startup, invalid `settings.json` files now trigger a warning identifying the offending value instead of silently ignoring user settings.
- `/terminal-setup` no longer skips setup on terminals without real kitty keyboard support.

### [v1.0.71-2](https://github.com/github/copilot-cli/releases/tag/v1.0.71-2)
**Added**
- `/voice devices` to choose and persist the microphone for voice mode.
- Limiting capabilities for built-in agents available to tasks and subagents.
- Canvas support in the CLI for extension-driven interactions.
**Improved**
- `/chronicle` cost-tips recommendations now feature a richer cost profile.

## 3. Hot Issues

1. **[#223](https://github.com/github/copilot-cli/issues/223) [OPEN]**: Enterprise users are heavily requesting (76 👍) that "Copilot Requests" permissions be visible for org-owned fine-grained PATs to enforce corporate automation standards without relying on individual user tokens.
2. **[#4024](https://github.com/github/copilot-cli/issues/4024) [OPEN]**: Voice mode is failing silently across all bundled ASR models (`nemotron_speech` RNBT) due to a `MultiModalProcessor` routing bug in Foundry Local Core, resulting in empty transcriptions.
3. **[#4096](https://github.com/github/copilot-cli/issues/4096) [OPEN]**: A critical MCP OAuth bug where third-party servers (like Atlassian) show a "Connected" badge in the UI but fail to bridge tokens to the CLI session, keeping tools completely hidden.
4. **[#2785](https://github.com/github/copilot-cli/issues/2785) [CLOSED]**: High-demand request (62 👍) to implement a 1 million context window for Claude Opus 4.7 to achieve feature parity with Anthropic's native Claude Code tooling. 
5. **[#1979](https://github.com/github/copilot-cli/issues/1979) [CLOSED]**: Developers are asking for remote session capabilities (53 👍) to attach to running CLI processes from mobile devices or browsers, matching competitor workflows.
6. **[#2052](https://github.com/github/copilot-cli/issues/2052) [CLOSED]**: Users want an always-visible token/context usage indicator in the UI (19 👍) to easily track context window utilization without running separate commands.
7. **[#1477](https://github.com/github/copilot-cli/issues/1477) [CLOSED]**: A bug causing the agent to erroneously continue autonomously and consume premium requests immediately following a model completion.
8. **[#4097](https://github.com/github/copilot-cli/issues/4097) [OPEN]**: `apply_patch` stores deleted binary files in session history as textual diffs, permanently exceeding the CAPI 5 MB limit and breaking subsequent requests.
9. **[#4006](https://github.com/github/copilot-cli/issues/4006) [OPEN]**: The CLI is not following MCP `tools/list` pagination (`nextCursor`), silently dropping tools beyond the first page and violating the MCP specification.
10. **[#4053](https://github.com/github/copilot-cli/issues/4053) [OPEN]**: A `SIGCHLD` race condition in Linux environments using NFS/GPFS causes the TUI to hang indefinitely at "Loading: N skills" when spawning subprocesses over network drives.

## 4. Key PR Progress
*Note: There were no active updates to Pull Requests in the repository over the last 24 hours.*

## 5. Feature Request Trends
- **Expanded Context Windows & Model Access:** A continued push for deep model parity, specifically requesting native access to Claude Opus 4.7's 1M token window and better routing/reasoning support for newer models like Codex 5.3.
- **Advanced MCP Server Management:** Users are requesting deeper lifecycle controls, including configurable tool access for research subagents (`definitions/research.agent.yaml`), interactive input variables (`${input:...}`) for dynamic MCP configuration, and persistent microphone routing for voice inputs.
- **Enterprise & Automation Readiness:** Strong demand for non-interactive and enterprise-compliant operations, such as bringing-your-own-key (BYOK) in `--acp` mode without login gates, and exposing Copilot Requests permissions for org-owned automation tokens.
- **Remote Workflows:** Similar to Claude Code, developers want the ability to decouple the CLI execution from the frontend by attaching to running Copilot sessions remotely via mobile or browser.

## 6. Developer Pain Points
- **The "Connected but Useless" MCP OAuth Bug:** The single most frustrating pattern reported today involves non-first-party MCP servers (Atlassian, incident.io, Azure DevOps). The UI shows a successful OAuth connection, but the tools are completely unavailable to the CLI agent due to unbridged tokens, pagination failures, or race conditions.
- **Silent Data Drops:** In both Voice Mode and the chat composer, users report that typing during the transcript finalization window or pasting nested markdown drops leading whitespace, wiping dictated inputs and breaking formatting.
- **Context Poisoning:** Developers note that hidden binary data from `apply_patch` executions can silently poison the context history, permanently exceeding CAPI size limits. This forces users to kill sessions rather than naturally relying on `/compact`.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest - 2026-07-16

Here is the technical digest for the `MoonshotAI/kimi-cli` repository based on the last 24 hours of GitHub activity. 

### 1. Today's Highlights
The past 24 hours in the `kimi-cli` repository have been relatively quiet, with no new issues filed and no official version releases. The primary activity centers around repository maintenance and technical alignment, highlighted by a significant pull request focused on standardizing telemetry data. 

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
*No issues were created or updated in the last 24 hours. (Current total active items: 0)*

### 4. Key PR Progress
Development momentum continues quietly in the background with a focus on internal observability:
*   **[PR #2500](https://github.com/MoonshotAI/kimi-cli/pull/2500) [OPEN] feat(telemetry): align events with TS schema, add trace_id and missing events** by [@7Sageer](https://github.com/7Sageer)
    *   **Summary:** This PR focuses on aligning the Python telemetry implementation with the TypeScript rewrite (`agent-core-v2` `events.ts`). It introduces end-to-end tracing by capturing the `x-trace-id` response header from the Kimi provider for both streaming and non-streaming requests. It also backfills missing event types to ensure data parity across different CLI environments.

### 5. Feature Request Trends
Due to zero issue activity in the last 24 hours, no new feature requests or trend directions can be identified for this specific reporting period. 

### 6. Developer Pain Points
With no recent issue filings, there are no newly reported developer frustrations to highlight today. However, the submission of [PR #2500](https://github.com/MoonshotAI/kimi-cli/pull/2500) implicitly points to a recent internal developer pain point: the lack of unified traceability and telemetry parity between the Python and TypeScript versions of the CLI, which makes cross-environment debugging difficult. Today's PR directly addresses this underlying infrastructure gap.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for 2026-07-16.

### 1. Today's Highlights
OpenCode rolled out **v1.18.2**, introducing safeguards against recursive subagent spawning and refining reasoning parameters for Meta models. The community focus is currently dominated by severe user backlash over the new Desktop UI tab layout, which has hidden the crucial Plan/Build mode toggle and squashed session titles. Meanwhile, maintainers are merging a flurry of security and UX PRs to harden WebFetch domain scoping, prevent prompt injection, and refine the V2 TUI theming.

### 2. Releases
**v1.18.2** ([GitHub Release](https://github.com/anomalyco/opencode/releases))
* **Core**: Stopped subagents from launching nested subagents by default. A configurable `subagent_depth` limit was added for controlled execution. Also improved default reasoning depth for Meta models.
* **Desktop**: Added `Mod+N` as a shortcut for opening a new tab.

### 3. Hot Issues
* **[#36997](https://github.com/anomalyco/opencode/issues/36997) & [#37070](https://github.com/anomalyco/opencode/issues/37070): Desktop App v1.18.1/v1.18.2 layout hides Plan/Build UI** 
  The recent layout update completely hid the agent switching indicator, leaving users unable to toggle between Plan and Build modes. This caused massive friction, though some users reported a temporary fix by disabling `newLayoutDesigns`.
* **[#36936](https://github.com/anomalyco/opencode/issues/36936): Desktop: New tab layout truncates titles** 
  Users are highly frustrated that the new horizontal tabs truncate session titles, making it nearly impossible to identify active sessions. Reverting to v1.17 is the current community workaround.
* **[#20695](https://github.com/anomalyco/opencode/issues/20695): Memory Megathread** 
  An ongoing, highly tracked issue (109 comments) where the maintainers are actively requesting heap snapshots from the community to diagnose widespread memory leaks and spikes.
* **[#1764](https://github.com/anomalyco/opencode/issues/1764): [FEATURE] Vim motions in input box** 
  A highly requested feature (172 upvotes) asking for Vim keyboard shortcuts within the OpenCode prompt input, aligning its UX with competitors like Claude Code.
* **[#36942](https://github.com/anomalyco/opencode/issues/36942): [FEATURE] Vertical tabs** 
  A direct response to the new horizontal tab layout. Users are requesting a vertical tab alternative to maximize screen real estate and view more session titles simultaneously.
* **[#34222](https://github.com/anomalyco/opencode/issues/34222): GitHub Copilot MAI-Code-1-Flash endpoint error** 
  Enterprise users are hitting `not accessible via the /chat/completions endpoint` errors when trying to utilize newly enabled Microsoft models via Copilot.
* **[#35587](https://github.com/anomalyco/opencode/issues/35587): Prompt leaks between sessions** 
  A critical bug where prompt histories (recalled via the Up arrow) are bleeding into independent sessions, raising data isolation concerns.
* **[#37168](https://github.com/anomalyco/opencode/issues/37168): Per-session MCP selection** 
  Feature request to allow distinct Model Context Protocol (MCP) enabled/disabled states when multiple clients are connected to a single `opencode serve` instance.
* **[#37165](https://github.com/anomalyco/opencode/issues/37165): `ctrl+p` unresponsive on Windows** 
  The command list hotkey broke entirely in v1.18.2 for Windows users, severely disrupting workflow navigation.
* **[#35988](https://github.com/anomalyco/opencode/issues/35988): V2 TUI swallows initial user message** 
  In the V2 TUI, the first user prompt occasionally fails to render, even though the LLM generates a response based on it.

### 4. Key PR Progress
* **[#37182](https://github.com/anomalyco/opencode/pull/37182): Scope `webfetch` always-allow to specific domains** 
  A crucial security fix preventing the "always allow" action for WebFetch from applying globally (`['*']`). It now correctly scopes permissions to the URL origin.
* **[#37188](https://github.com/anomalyco/opencode/pull/37188): Prevent prompt injection via boundary markers** 
  Wraps `AGENTS.md` and config instructions in semantic boundary tags, explicitly marking them as data rather than executable commands to neutralize malicious prompts.
* **[#36903](https://github.com/anomalyco/opencode/pull/36903): Track usage for openai-compatible models** 
  Resolves a major cost-tracking gap by applying config price overrides and usage tracking for custom OpenAI-compatible providers. 
* **[#37181](https://github.com/anomalyco/opencode/pull/37181): Refactor core system prompt selection** 
  Decouples system prompts from the core runner, making them model-agnostic and relying on granular built-in plugins (OpenAI, Anthropic, Meta, etc.) to load the correct prompt.
* **[#37145](https://github.com/anomalyco/opencode/pull/37145): Migrate core surfaces to V2 themes** 
  Lays the groundwork for the next UI iteration by migrating the Home, Prompt, and Session surfaces to the new V2 component and theming API.
* **[#37113](https://github.com/anomalyco/opencode/pull/37113): Fix Node.js Desktop build versioning** 
  Fixes an issue where the desktop app failed to install the published plugin version because it fell back to a `local` build tag.
* **[#36691](https://github.com/anomalyco/opencode/pull/36691): Replace `LLMError` reasons with flat tagged union** 
  Significant architectural cleanup to error handling, converting stacked error reasons into a flat, predictable union (e.g., `BadRequest`, `RateLimit`, `ContextOverflow`).
* **[#36951](https://github.com/anomalyco/opencode/pull/36951): Exit subagent menu with Up arrow** 
  UX refinement for the V2 TUI allowing users to cleanly back out of the subagent picker using the Up arrow.
* **[#37180](https://github.com/anomalyco/opencode/pull/37180): Preserve prompt footer actions** 
  Fixes a UI compression bug where long directory paths would crush the `tab agents` and `ctrl+p commands` buttons into unreadable text.
* **[#37157](https://github.com/anomalyco/opencode/pull/37157): Endpoint handshake protocol** 
  Adds a canonical `simulation.handshake` request to simulation WebSocket endpoints to detect protocol mismatches before executing UI or LLM operations.

### 5. Feature Request Trends
* **UI Layout Customization & Vertical Tabs:** The new horizontal tab layout has sparked an immediate demand for vertical tab options and better session title visibility.
* **Vim Motions & Advanced Navigation:** Continued strong desire for Vim-native keyboard shortcuts, alongside requests to fix shortcut collisions (like `Ctrl+R` and `Ctrl+P`).
* **Granular Session & MCP Isolation:** Developers running multi-agent setups want per-session MCP state isolation, ensuring tools can be toggled per client context rather than globally.
* **Rich Media Rendering:** Requests to natively render image attachments returned by tools (like `webfetch` or MCP servers) directly inside the chat UI.
* **Autonomous Session Naming:** Auto-generating short, descriptive titles for sessions as they start, reducing sidebar clutter.

### 6. Developer Pain Points
* **The v1.18.x UI Rollback:** The new tab layout is the most prominent pain point right now. Hiding the Plan/Build toggle and truncating tab titles has broken core workflows for thousands of users.
* **Context Isolation Failures:** Prompt histories leaking between sessions and subagents recursively spawning (addressed in v1.18.2) are causing unpredictable agent behavior and user frustration.
* **Windows IME & Shortcut Clashes:** Global hotkeys are intercepting custom IDE shortcuts (like VS Code's `Ctrl+R`), and Windows Input Method Editors (IME) are actively blocking terminal leader keys.
* **Enterprise Model Routing:** Copilot Enterprise users are struggling with endpoint compatibility (e.g., `/chat/completions` vs native function calling) when trying to use Microsoft's proprietary models through OpenCode.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for July 16, 2026.

### 1. Today's Highlights
The Pi ecosystem is actively tackling next-generation model compatibility and harness performance bottlenecks. Key discussions today center around adapting strict tool schemas for newer Claude models, optimizing high CPU usage during terminal streaming, and expanding cloud provider support with new Bedrock and xAI OAuth integrations.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **#4945 [OPEN] openai-codex Connection Reliability Issues** ([Link](https://github.com/badlogic/pi-mono/issues/4945))
    *Why it matters:* The `gpt-5.5` integration via Codex frequently freezes on `Working...` without streaming text or throwing errors. With 75 comments, this is a highly disruptive reliability issue for OpenAI users.
*   **#6278 [OPEN] New Claude models work poorly with the current Pi's edit tool** ([Link](https://github.com/badlogic/pi-mono/issues/6278))
    *Why it matters:* Newer Claude models are hallucinating extra keys (e.g., `new_text_x`, `closeenough`) in tool calls, causing a 20% failure rate for edits. This highlights a growing need for more forgiving tool schemas.
*   **#6673 [CLOSED] OpenAI Codex exposes raw Cloudflare 520 HTML** ([Link](https://github.com/badlogic/pi-mono/issues/6673))
    *Why it matters:* When the Codex backend hits a Cloudflare error, Pi renders the raw HTML, exposing the user's public IP address and Ray ID directly in the session JSONL.
*   **#6303 [CLOSED] Exponential retry backoff has no cap** ([Link](https://github.com/badlogic/pi-mono/issues/6303))
    *Why it matters:* Missing `maxDelayMs` boundaries in `getRetrySettings()` allowed exponential backoffs to stall agents for minutes over transient network blips. 
*   **#6665 [OPEN] TUI pins a full core while streaming** ([Link](https://github.com/badlogic/pi-mono/issues/6665))
    *Why it matters:* Long streaming sessions cause a 100% CPU spike on a single core. The root cause is un-cached grapheme segmentation (`Intl.Segmenter`) running during per-chunk Markdown rebuilds.
*   **#6212 [OPEN] Bedrock path should honor `compat.forceAdaptiveThinking`** ([Link](https://github.com/badlogic/pi-mono/issues/6212))
    *Why it matters:* Users want the Bedrock API to dynamically decide adaptive thinking via model definitions rather than relying on a hardcoded substring allowlist.
*   **#5263 [OPEN] Make in-session model changes ephemeral** ([Link](https://github.com/badlogic/pi-mono/issues/5263))
    *Why it matters:* Developers want temporary model/thinking-level switches to reset for new sessions rather than silently persisting as global defaults.
*   **#6647 [OPEN] Compaction fails on a single transient stream drop** ([Link](https://github.com/badlogic/pi-mono/issues/6647))
    *Why it matters:* Pi's compaction logic lacks retry logic for summarization calls, meaning a brief socket death fails the whole context compaction process.
*   **#6685 [CLOSED] Intermittent failure to execute tool calls** ([Link](https://github.com/badlogic/pi-mono/issues/6685))
    *Why it matters:* Across various providers, the Pi harness intermittently drops tool execution events and hides thinking blocks, requiring an application restart.
*   **#6657 [OPEN] Bedrock AWS_PROFILE authentication not working** ([Link](https://github.com/badlogic/pi-mono/issues/6657))
    *Why it matters:* Users report continuous `403 AccessDeniedException` errors despite a supposed fix shipped in version 0.80.7.

### 4. Key PR Progress
Significant code improvements are in the pipeline across providers, performance, and local storage:

*   **#6651 feat(ai): add xAI device OAuth and route grok-4.5 through Responses** ([Link](https://github.com/badlogic/pi-mono/pull/6651))
    Introduces device-code OAuth for xAI (alongside API keys) and routes `grok-4.5` through the Responses API with reasoning support.
*   **#6594 feat: sqlite session storage** ([Link](https://github.com/badlogic/pi-mono/pull/6594))
    Massive architectural improvement that transitions session storage to SQLite, optimizing tree-walking for compaction and historical data retrieval. 
*   **#6216 feat: Add Amazon Bedrock Mantle OpenAI Responses provider** ([Link](https://github.com/badlogic/pi-mono/pull/6216))
    Adds native support for Amazon Bedrock Mantle's new OpenAI Responses API implementation.
*   **#6671 add usage info to branch summary, compaction and tool results** ([Link](https://github.com/badlogic/pi-mono/pull/6671))
    Implements token usage tracking visibility directly inside tool results and branch summarization entries in the UI.
*   **#6533 fix: Codex compaction returns "Model not found" for gpt-5.6-luna** ([Link](https://github.com/badlogic/pi-mono/pull/6533))
    Resolves a 404 API error during manual and auto-compaction by correcting internal tier-suffixed slug mapping for OpenAI models.
*   **#6659 fix(openai-codex): clamp session-id header** ([Link](https://github.com/badlogic/pi-mono/pull/6659))
    Fixes ChatGPT backend validation crashes by aggressively clamping `session-id` and `x-client-request-id` headers to 64 characters.
*   **#6683 fix(coding-agent): accept colon-qualified skill names** ([Link](https://github.com/badlogic/pi-mono/pull/6683))
    Resolves a bug where valid namespaced plugin skills (e.g., `inc:ship-it`) triggered false conflict warnings during startup.
*   **#6667 fix(tui): guard null children in Box and Container render** ([Link](https://github.com/badlogic/pi-mono/pull/6667))
    Prevents uncaught `TypeError` crashes during extension installation or removal by filtering stale component references.
*   **#6680 parse extension package name in case of dependent extension** ([Link](https://github.com/badlogic/pi-mono/pull/6680))
    Fixes UI mislabeling on Windows where dependent extension paths overran the Extensions banner.
*   **#6681 windows: reset pi terminal title after checking npm packages** ([Link](https://github.com/badlogic/pi-mono/pull/6681))
    A quick fix to restore the terminal window title back to "Pi" after an automated npm package version check hijacks it.

### 5. Feature Request Trends
*   **Robust Provider Auth & Fallbacks:** Strong demand for provider flexibility, specifically OAuth integrations for xAI (#6651), better Bedrock role/profile handling (#6657, #6212), and clarifying precedence between OAuth and API Keys (#6689).
*   **Session & State Management:** Developers want better control over their local environments. Requests include ephemeral model settings (#5263), SQL-based session storage (#6594), and richer UI capabilities to browse, organize, and archive past sessions (#6674).
*   **Tool Execution Observability:** Plugin creators are asking for deeper access to Pi's internal events, such as exposing `ToolExecution*Events` in the TypeScript definitions (#6687) and allowing extensions to read/modify native retry behaviors dynamically (#6684).

### 6. Developer Pain Points
*   **LLM Schema Hallucinations:** Modern models (especially Claude) are breaking strict tool schemas by inventing extra JSON keys, causing up to a 20% failure rate in local edits. The tool validation layer needs to become more fault-tolerant (#6278).
*   **Provider Retries & Dropped Streams:** Developers are frustrated by fragile streaming logic. Transient network drops fatalistically crash compaction routines (#6647), un-capped exponential backoffs hang agents for minutes (#6303), and Codex connections silently stall (#4945).
*   **TUI Rendering Bottlenecks:** The Markdown renderer is showing severe performance degradation during long sessions, maxing out CPU cores due to un-cached `Intl.Segmenter` calls on every single streamed chunk (#6665). Additionally, the UI viewport lacks windowing for large dropdown lists (#6688).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for July 16, 2026.

### 1. Today's Highlights
Qwen Code rolls out critical security patches and daemon enhancements this week, most notably fixing privilege escalation flaws in MCP tool execution and trusted folder configurations. The web shell experience received a massive visual and functional upgrade, alongside new CI/CD workflows for safer, diff-scoped visual previews and automated agent testing.

### 2. Releases
*   **v0.19.10-nightly.20260715** ([Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.10-nightly.20260715.c538bd70d)): Introduces PR scope capping after repeated review rounds and adds a workspace path lock for the web shell.
*   **v0.19.9-preview.0** ([Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.9-preview.0)): Shares the same PR scope and web shell updates as the nightly branch, preparing for stable release.
*   **cua-driver-rs v0.7.2** ([Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.2)): Ships relative-coordinate support for the Computer Use Agent (CUA) driver. Includes codesigned/notarized universal binaries for macOS and unsigned builds for Linux/Windows (x86_64 + arm64).

### 3. Hot Issues
1.  **[#6378](https://github.com/QwenLM/qwen-code/issues/6378) RFC: Multiple workspaces per daemon:** A high-discussion RFC proposing a shift from the `1 daemon = 1 workspace` model to support multiple isolated workspaces within a single `qwen serve` process.
2.  **[#4782](https://github.com/QwenLM/qwen-code/issues/4782) ACP Streamable HTTP transport tracking:** Details the implementation of the `/acp` endpoint, allowing ACP-native editors like Zed and JetBrains to connect to `qwen serve` without custom adapter code.
3.  **[#6928](https://github.com/QwenLM/qwen-code/issues/6928) GitHub App auth fails in new workspaces:** Users report that newly created workspaces from private GitHub repos mount correctly but lack injected GitHub authentication headers.
4.  **[#5239](https://github.com/QwenLM/qwen-code/issues/5239) Weak sub-agent communication:** Developers are frustrated by the lack of bidirectional state syncing. If a sub-agent crashes, the main session hangs indefinitely waiting for output.
5.  **[#6936](https://github.com/QwenLM/qwen-code/issues/6936) Context wasted by disabled memory:** Even when `enableManagedAutoMemory` is set to `false`, the system still injects a 7-9 KB instruction block, needlessly burning context tokens.
6.  **[#6914](https://github.com/QwenLM/qwen-code/issues/6914) Fractional tool-call limits break runs:** Count-based settings like `maxToolCallsPerTurn` incorrectly accept fractional values (e.g., `0.5`), causing tasks to terminate immediately on the first turn.
7.  **[#6990](https://github.com/QwenLM/qwen-code/issues/6990) Agent stops mid-response:** Both the CLI and VS Code extension suffer from an integration bug where the agent abruptly stops generating output and dumps raw XML to the screen.
8.  **[#6970](https://github.com/QwenLM/qwen-code/issues/6970) MCP tool name rejection:** OpenAI and Anthropic-compatible models reject MCP tool names containing dots (e.g., `mcp__db.literature.query`), while Gemini accepts them.
9.  **[#6943](https://github.com/QwenLM/qwen-code/issues/6943) Rigid output language constraints:** Users request an "auto" mode for output language so the LLM can dynamically match the user's input language rather than relying on hard-coded configurations.
10. **[#6927](https://github.com/QwenLM/qwen-code/issues/6927) Auto-approval classifier deadlock:** A fail-closed safety classifier under `approvalMode = "auto"` blocks *all* tool calls (including the `write_file` needed to fix the settings), bricking the session.

### 4. Key PR Progress
1.  **[#6975](https://github.com/QwenLM/qwen-code/pull/6975) Backend daemon A/B previews:** Upgrades CI to automatically diff JSON API responses before and after PR changes, preventing silent regressions in `qwen serve`.
2.  **[#6954](https://github.com/QwenLM/qwen-code/pull/6954) Workspace MCP Management:** Introduces a UI within the Web Shell to manage and discover workspace-scoped MCP plugins without requiring an active chat session.
3.  **[#6929](https://github.com/QwenLM/qwen-code/pull/6929) Fix AUTO-mode classifier deadlock:** Resolves the [#6927](https://github.com/QwenLM/qwen-code/issues/6927) deadlock by forcing `tool_choice` in `generateJson` queries to prevent the model from looping.
4.  **[#6967](https://github.com/QwenLM/qwen-code/pull/6967) Plan mode exit safeguard:** Ensures the agent requires explicit user approval before exiting "Plan mode" to execute commands, preventing hallucinated workflow transitions.
5.  **[#6980](https://github.com/QwenLM/qwen-code/pull/6980) Bake cua-driver v0.7.2:** Integrates the new relative-coordinate CUA driver directly into the CLI's default installers.
6.  **[#6895](https://github.com/QwenLM/qwen-code/pull/6895) Trusted invocation context:** Implements a secure, runtime-only context (`InvocationContextV1`) that tracks the origin root, session, and daemon client across the entire agent execution chain to harden tool permissions.
7.  **[#6984](https://github.com/QwenLM/qwen-code/pull/6984) Per-model sub-agent limits:** Adds a `maxParallelAgentsByModel` setting, allowing developers to fine-tune background agent concurrency limits based on rate limits or model pricing.
8.  **[#6961](https://github.com/QwenLM/qwen-code/pull/6961) Deep Health Aggregation:** Upgrades the `GET /health?deep=1` endpoint to provide a single, daemon-wide snapshot of all active channels, sessions, and pending permissions across multiple workspaces.
9.  **[#6945](https://github.com/QwenLM/qwen-code/pull/6945) Daemon Todo Stop Guard:** An opt-in feature that allows daemon sessions to automatically continue incomplete agent workflows up to two times after a natural stop, preventing premature task abandonment.
10. **[#6900](https://github.com/QwenLM/qwen-code/pull/6900) Fix trusted-folders cache mutation:** Patches a severe security issue ([#6831](https://github.com/QwenLM/qwen-code/issues/6831)) where simply *previewing* an untrusted folder's execution state would permanently cache it as trusted.

### 5. Feature Request Trends
*   **Multi-Workspace Daemon Management:** Users are heavily requesting a decoupling of daemons and workspaces. The community wants to run multiple isolated project environments under a single background process to save system resources.
*   **Background/Channel Automation Enhancements:** Significant interest in extending the agent's lifespan in non-interactive environments. This includes adding bounded "Todo continuations" for background tasks and deeper integration with messaging platforms (e.g., delivering Qwen outputs directly to DingTalk single chats).
*   **Adaptive LLM Configuration:** Developers want the agent to be less rigidly constrained by global configs, asking for features like "auto" output language matching and dynamic, hotkey-based model switching (e.g., PR [#6486](https://github.com/QwenLM/qwen-code/pull/6486) for `Ctrl+F` model toggling).

### 6. Developer Pain Points
*   **Safety Mechanisms Causing Deadlocks:** Overly aggressive safety classifiers are frequently bricking CLI sessions. When the auto-approver fail-closes, it blocks the user from even editing config files to fix the issue.
*   **Context Token Bleeding:** Developers are frustrated by silent context waste. System configurations and prompt instructions (like the auto-memory block) are still injected even when their corresponding features are disabled, degrading the effective context window.
*   **Flaky CI/CD E2E Tests:** Multiple maintainers and bots note that tight timeout limits in E2E tests (e.g., 30-second API call races) are causing frequent, false-positive build failures on shared runners.
*   **Agent Lifecycle Stability:** The agent frequently gives up mid-task. This happens either through premature termination via fractional tool-call limits, or by halting mid-generation and dumping raw XML to the user without finishing the code response.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek TUI (CodeWhale) for July 16, 2026.

### 1. Today's Highlights
The DeepSeek TUI community focused heavily on refining agent workflow friction and tool management. Key discussions centered around improving YOLO mode safety guardrails, ensuring user confirmation gates aren't bypassed during autonomous loops, and fixing visibility issues for native memory tools. Additionally, the community saw active pull requests resolving inline command parsing and expanding LLM provider catalogs.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
*   **#4375 [bug, enhancement, tui] Suggestion: show explanation when session denied cache auto-rejects an approval**
    *   **Context:** In YOLO mode, rejecting a "publish-like action" (e.g., `git push`) causes the session cache to silently auto-reject all subsequent identical calls without prompting the user.
    *   **Community Reaction:** Users find the silent rejection confusing; there is a strong consensus to surface an explanation in the TUI when the denied cache triggers.
*   **#4374 [bug, question, tui] Goal continuation skips user confirmation gate**
    *   **Context:** The `/goal` persistence loop ignores user interaction states (like answering a model's question) and continuously injects "continue making progress" prompts because it only recognizes "real blockers".
    *   **Community Reaction:** Developers note this breaks interactive conversational flows, causing the agent to act prematurely before the user explicitly confirms.
*   **#4373 [bug, tui, reliability] Bug: remember tool missing from DEFAULT_ACTIVE_NATIVE_TOOLS whitelist**
    *   **Context:** The `remember` tool (for auto-capturing user memory) is unintentionally deferred from the model's visible catalog by the `apply_native_tool_deferral` step.
    *   **Community Reaction:** High concern over reliability, as the model cannot utilize memory features unless it hallucinates or explicitly searches for the tool.
*   **#3915 [CLOSED] ux(skills): `$skill <task>` and `/<skill> <task>` silently discard the task text**
    *   **Context:** Claude-Code-style invocations (e.g., `$debug why does auth fail`) were activating the skill but throwing away the trailing context, forcing users to retype their queries.
    *   **Community Reaction:** Well-received resolution; closing this issue clears the path for much smoother CLI command chaining.
*   **#4371 [enhancement, tui] Allow scrolling/reviewing reasoning output while approval dialog is active**
    *   **Context:** When CodeWhale (using DeepSeek V4) generates a structured plan, the approval dialog locks the screen, preventing users from scrolling up to review the chain-of-thought before approving.
    *   **Community Reaction:** High interest in decoupling the TUI's modal approval system from the scrollback buffer to allow informed decision-making.

### 4. Key PR Progress
*   **#4372 [CLOSED] fix(skills): preserve inline task text**
    *   Submitted by *nightt5879*, this PR resolves Issue #3915. It dispatches trailing task text in the same turn for `$<skill> do X` and `/<skill> do X` invocations, while preserving bare activations for the next message and protecting management commands like `/skill install`.
*   **#4370 [OPEN] feat: add TelecomJS provider support with configuration and catalog i…**
    *   Submitted by *baendlorel*, this PR introduces TelecomJS (Telecom JiangSu) as a custom provider. It addresses a critical bug where `refresh_catalog_cache` wasn't invoked in production, which previously restricted the model picker to a single `deepseek-v4-pro` model instead of fetching the full `/v1/models` endpoint payload.

### 5. Feature Request Trends
*   **Non-blocking TUI Modals:** A clear trend is emerging toward decoupling approval dialogs from background processing and scrollback buffers. Users want the ability to review logs and agent reasoning simultaneously while an approval prompt is active (Issue #4371).
*   **Context-Aware Autonomy Guardrails:** Developers are requesting smarter autonomous loops. Rather than hard-coded persistence, the `/goal` feature needs semantic awareness to pause execution when the agent asks a clarifying question (Issue #4374).
*   **Transparent Auto-Rejection Systems:** Users want clear, visible feedback when system caches (like the YOLO mode session denied cache) silently intervene and alter agent behavior (Issue #4375).

### 6. Developer Pain Points
*   **Agent Over-eagerness:** A major frustration is the agent pushing forward without explicit user confirmation, particularly during conversational pauses or when encountering "soft blockers" (Issue #4374).
*   **Tool Catalog Obscurity:** Native tools mysteriously disappearing from the model's context due to overly aggressive deferral pipelines creates a broken UX, requiring manual troubleshooting to make standard features work (Issue #4373).
*   **Command Argument Parsing:** The friction of typing out a prompt, having the system eat the arguments, and needing to retype them has been a persistent UX thorn for CLI/TUI users (Issue #3915).

</details>