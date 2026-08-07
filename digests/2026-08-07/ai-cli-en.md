# AI CLI Tools Community Digest 2026-08-07

> Generated: 2026-08-06 23:58 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the August 7, 2026 community digests.

### 1. Ecosystem Overview
As of mid-2026, the AI developer tools ecosystem has matured from simple code-completion assistants into complex, autonomous CLI agents capable of orchestrating multi-step workflows. The prevailing architectural paradigm heavily relies on multi-agent orchestration, the Model Context Protocol (MCP) for tool integration, and sophisticated context management systems. However, this rapid functional expansion has introduced systemic growing pains across the sector. Major friction points for developers now center around agent lifecycle management—specifically preventing runaway token consumption, avoiding zombie subprocesses, and maintaining stable terminal rendering across diverse operating systems.

### 2. Activity Comparison
*Note: The metrics below reflect the explicit top-10 issues and PRs highlighted in today's community digests, representing the most impactful and active threads rather than total absolute repo traffic.*

| Tool | Version / Release Status | Hot Issues Tracked | Key PRs / Active Dev |
| :--- | :--- | :--- | :--- |
| **Claude Code** | `v2.1.223` (Released) | 10 | 5 PRs (Focus: plugin validation, bot management) |
| **OpenAI Codex** | `rust-v0.147.0-alpha.13` | 10 | 10 PRs (Focus: MCP caching, state durability) |
| **Gemini CLI** | `v0.54.0` (Stable) & `v0.55.0` (Preview) | 10 | 10 PRs (Focus: model support, UI fixes) |
| **GitHub Copilot CLI**| `v1.0.79-6` (Released) | 10 | 0 PRs (Updates shipped directly via patches) |
| **Kimi Code CLI** | No new release | 8 | 4 PRs (Focus: file corruption patches, UI) |
| **OpenCode** | No new release | 10 | 10 PRs (Focus: TUI queues, auth errors) |
| **Pi** | `v0.84.0` (Released) | 10 | 10 PRs (Focus: Harness v2, TUI fullscreen) |
| **Qwen Code** | `v0.21.7` (Released) | 10 | 10 PRs (Focus: terminal rendering, security) |
| **DeepSeek TUI** | `v0.9.4` (In Dev) | 10 | 10 PRs (Focus: HTTP runtime APIs, subagents) |

### 3. Shared Feature Directions
*   **Strict Agent Isolation & Lifecycle Management:** As multi-agent workflows become standard, preventing rogue agents from consuming resources is a universal priority. *Claude Code* is battling resurrected background agents and shared MCP states; *OpenAI Codex* and *DeepSeek TUI* are implementing strict delegation ceilings and recursion budgets; *Gemini CLI* and *Pi* are fixing agents that hang indefinitely or trigger loops.
*   **Optimizing Context Windows & MCP Scalability:** Tools are moving away from monolithic context injection to lazy-loading and dynamic compaction to save tokens. *Kimi Code* and *OpenAI Codex* are actively implementing lazy-loading for MCP schemas. *Claude Code*, *Pi*, and *OpenCode* are actively addressing failing context compactions that crash agents or force total restarts.
*   **Cross-Platform Terminal & Windows Friction:** Almost all tools are fighting OS-level integration bugs. *Claude Code*, *OpenAI Codex*, and *Qwen Code* report severe Windows UI/process management bugs (ConPTY duplication, WMI exhaustion). Meanwhile, general CLI tools (*Pi*, *Gemini CLI*, *Copilot CLI*) are fighting TUI rendering bugs inside `tmux` and `Wayland`.

### 4. Differentiation Analysis
*   **The Heavyweights (Claude, Codex, Gemini, Copilot):** These tools are focused on enterprise-grade deployment, deep IDE integration, and complex model routing. *Claude Code* is doubling down on marketplace policies and usage limits, *OpenAI Codex* is deeply refactoring its core in Rust for durability, and *Copilot CLI* is tightly coupling with GitHub enterprise ecosystems.
*   **The Open & Agnostic Tools (Qwen, OpenCode, Pi):** These tools differentiate by offering extreme flexibility and BYOK (Bring Your Own Key) capabilities. *Qwen Code* and *Pi* are highly focused on adding diverse third-party models (Kimi, Xiaomi, DeepSeek) and offering raw, highly customizable TUI experiences. 
*   **The Headless/API-First Frontier (DeepSeek TUI):** *DeepSeek TUI* (CodeWhale) stands out by shifting focus toward comprehensive HTTP Runtime APIs, essentially transforming the CLI into a headless backend that can be controlled by external editors (like Zed) via the Agent Communication Protocol (ACP).

### 5. Community Momentum & Maturity
*   **Rapid Iterators:** *OpenAI Codex* and *Gemini CLI* show massive engineering momentum, heavily focused on architectural refactors (Rust migration for Codex, Gemini 3.6 integrations). *Pi* and *DeepSeek TUI* also show high velocity, aggressively overhauling their TUI and backend execution environments.
*   **Scale and Friction:** *Claude Code* currently has the highest-friction community, driven by massive engagement on usage limit issues (e.g., Issue #16157 with ~1,500 comments). This highlights the pains of mass enterprise adoption. *OpenCode* is facing severe trust friction regarding upstream provider reliability and model routing transparency. 
*   **Stability Chasers:** *GitHub Copilot CLI* and *Kimi Code* are currently in patch-heavy phases, focusing heavily on squashing critical lifecycle bugs (zombie processes for Copilot, silent data corruption for Kimi) rather than shipping net-new architectural features.

### 6. Trend Signals for Developers
*   **The Shift to "Steerable" Mid-Run Execution:** Developers no longer want to wait for agents to finish long tasks to provide feedback. There is a massive industry push for mid-run prompt queuing, pausing, and steering (seen in *OpenCode*, *Pi*, and *Codex*). Building UI/UX controls that allow developers to interrupt agent streams without corrupting state is becoming a baseline requirement.
*   **Security & Cost Containment is Paramount:** With agents executing bash commands and spawning subagents autonomously, "runaway loops" (like *Codex* copying an image 150,000 times or *Claude Code* burning 71% of a budget on phantom usage) are a primary developer anxiety. AI dev tools must implement "circuit breakers" and absolute recursion ceilings. 
*   **Workspace Trust Mechanics:** As CLIs read deeply into file systems, establishing secure workspace boundaries is critical. Flaws in `.env` injections and symlink bypasses (prominently featured in *Qwen Code* and *Claude Code*) indicate that developers demand strict, transparent permission scoping before granting agents execution privileges.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical community highlights report for the Claude Code Skills ecosystem based on recent activity.

### 1. Top Skills Ranking
*Note: As comment counts are currently undefined in the source data, this ranking is determined by update recency, community issue engagement, and cross-references.*

*   **Self-Audit Skill (v1.3.0)** | [PR #1367](https://github.com/anthropics/skills/pull/1367)
    *   **Functionality:** A quality-control skill that audits AI output before delivery, performing mechanical file verification followed by a four-dimension reasoning audit based on damage-severity.
    *   **Discussion & Status:** [OPEN]. Highly active and directly addresses community proposals for "Reasoning Quality Gate Pipelines" (Issue [#1385](https://github.com/anthropics/skills/issues/1385)). 
*   **Color-Expert Skill** | [PR #1302](https://github.com/anthropics/skills/pull/1302)
    *   **Functionality:** Provides deep color expertise, covering naming systems (ISCC-NBS, Munsell), color spaces (OKLCH, OKLAB), and contrast accessibility guidelines.
    *   **Discussion & Status:** [OPEN]. Frequently updated through July 2026, showing strong iterative refinement by the community.
*   **Skill-Creator Critical Fixes** | [PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1323](https://github.com/anthropics/skills/pull/1323)
    *   **Functionality:** Comprehensive fixes for the `skill-creator` evaluation loop (`run_eval.py`), addressing Windows compatibility, parallel worker isolation, and trigger detection failures.
    *   **Discussion & Status:** [OPEN]. These PRs represent the most critical infrastructure discussions in the ecosystem, directly resolving the "0% recall" bug detailed in Issue [#556](https://github.com/anthropics/skills/issues/556) (12 comments).
*   **Testing-Patterns Skill** | [PR #723](https://github.com/anthropics/skills/pull/723)
    *   **Functionality:** A comprehensive skill standardizing software testing paradigms, covering the Testing Trophy model, unit testing (AAA pattern), and React component testing.
    *   **Discussion & Status:** [OPEN]. Addresses a major gap in engineering workflows, aligning with broader community demand for automated QA tools.
*   **Plan-File-Hygiene Skill** | [PR #1479](https://github.com/anthropics/skills/pull/1479)
    *   **Functionality:** Introduces lifecycle management for planning artifacts, preventing context window clutter from accumulated agent notes and temporary plan files.
    *   **Discussion & Status:** [OPEN]. Addressed a specific, highly relevant community pain point regarding planning artifact accumulation (Issue [#1417](https://github.com/anthropics/skills/issues/1417)).

### 2. Community Demand Trends
Based on open Issues, the community is pushing heavily for **enterprise lifecycle management and system robustness**:
*   **Enterprise Distribution & Sharing:** Users want native org-wide skill sharing and marketplace security. Issue [#492](https://github.com/anthropics/skills/issues/492) (43 comments) highlights critical concerns regarding trust boundaries, as community skills impersonate official Anthropic skills under the same namespace. Issue [#228](https://github.com/anthropics/skills/issues/228) (16 comments) requests native organizational sharing links.
*   **Context Window Optimization & Agent Memory:** Users are hitting context limits and losing state. Issue [#1487](https://github.com/anthropics/skills/issues/1487) warns of the `claude-api` skill eagerly injecting 156k tokens, while Issue [#1329](https://github.com/anthropics/skills/issues/1329) proposes a "compact-memory" skill using symbolic notation to reduce agent state bloat.
*   **Meta-Skills for AI Governance:** There is a distinct demand for skills that manage AI behavior, seen in proposals for "agent-governance" safety patterns (Issue [#412](https://github.com/anthropics/skills/issues/412)) and reasoning quality gates (Issue [#1385](https://github.com/anthropics/skills/issues/1385)).

### 3. High-Potential Pending Skills
These active PRs address immediate, high-impact community pain points and have a high probability of merging soon:
*   **[PR #1298](https://github.com/anthropics/skills/pull/1298) & [PR #1323](https://github.com/anthropics/skills/pull/1323):** Fixes for the broken `skill-creator` evaluation loop. Merging these is critical for the community to effectively test and optimize future skills.
*   **[PR #541](https://github.com/anthropics/skills/pull/541) (DOCX bookmark collision fix):** Prevents document corruption (OOXML `w:id` collisions), resolving silent but severe file-generation bugs.
*   **[PR #514](https://github.com/anthropics/skills/pull/514) (Document typography):** Prevents common AI-generated document errors like orphan words and widow paragraphs, massively improving document output quality without user prompting.
*   **[PR #486](https://github.com/anthropics/skills/pull/486) (ODT Skill):** Fills a major gap by allowing Claude to natively create, fill, and parse OpenDocument Format (`.odt`, `.ods`) files.

### 4. Skills Ecosystem Insight
**Summary:** The community's most concentrated demand is shifting away from basic document formatting toward robust AI meta-governance—including strict context window management, secure organizational sharing boundaries, and standardized self-verification pipelines.

---

Here is the Claude Code community digest for August 7, 2026.

### 1. Today's Highlights
Claude Code v2.1.223 was released today, introducing GitHub org-wide marketplace permission policies and enhanced warning systems for rogue background agents. The community has been highly active, heavily reporting on phantom token consumption, un-terminated subprocesses, and context-isolation flaws in multi-agent workflows. Meanwhile, core contributors are focusing on hardening plugin validation scripts and preventing auto-close bot abuse in the background.

### 2. Releases
*   **v2.1.223**
    *   **Marketplace Access Control:** Added owner wildcard entries (`"owner/*"`) to `strictKnownMarketplaces` and `blockedMarketplaces` managed settings, allowing admins to easily allowlist or blocklist all repositories under a specific GitHub organization.
    *   **Agent Safety Warnings:** Introduced new warnings when workflow agents, forked skills, slash commands, or resumed background agents exhibit unexpected behavior.

### 3. Hot Issues
Here are the 10 most noteworthy issues from the last 24 hours:

*   **[#16157](https://github.com/anthropics/claude-code/issues/16157): Instantly hitting usage limits with Max subscription**
    *   *Why it matters:* An incredibly high-traffic issue (1486 comments, 692 upvotes). Users report burning through their Max subscription API/Claude limits almost immediately, indicating systemic friction in platform cost controls.
*   **[#84612](https://github.com/anthropics/claude-code/issues/84612): ~71% of weekly budget consumed by phantom "Fable" usage**
    *   *Why it matters:* A new account with strictly Opus 5 settings and no Fable invocations reported massive phantom usage by the "Fable" model, draining 71% of the weekly budget in under 24 hours.
*   **[#84647](https://github.com/anthropics/claude-code/issues/84647): Bash tool timeout fails to kill child processes**
    *   *Why it matters:* A critical system stability issue where the `Bash` tool's timeout leaves orphaned processes running. One user reported a single unattached `grep` process consuming 20 GB of RAM and surviving the agent that spawned it.
*   **[#84638](https://github.com/anthropics/claude-code/issues/84638): Concurrent subagents share MCP server processes**
    *   *Why it matters:* Breaks per-subagent isolation. Agents with byte-identical inline `mcpServers` configs are being deduplicated onto a single shared stdio server process, causing cross-bleeding of state and sessions.
*   **[#72080](https://github.com/anthropics/claude-code/issues/72080): Sub-agents stuck in infinite token-burning loops**
    *   *Why it matters:* Agents are repeatedly executing invisible `<count <invoke...>` loops, causing excessive and rapid token drain without progressing actual task completion.
*   **[#66339](https://github.com/anthropics/claude-code/issues/66339): Background agents "resurrect" after being stopped**
    *   *Why it matters:* Stopped background agents are continuing to run autonomously, silently consuming over 160k tokens across 21 hours directly against the explicit intent of the user.
*   **[#65796](https://github.com/anthropics/claude-code/issues/65796): Multi-agent workflows restart from scratch after auto-compaction**
    *   *Why it matters:* When context compaction triggers, the workflow resume mechanism fails to read cache correctly, silently restarting and re-running completed sub-agents.
*   **[#84657](https://github.com/anthropics/claude-code/issues/84657): AskUserQuestion window-focus bug**
    *   *Why it matters:* Users clicking to bring the Claude Code terminal into OS focus are accidentally selecting and submitting prompt answers, causing unintended agent actions.
*   **[#84667](https://github.com/anthropics/claude-code/issues/84667): Subagents inherit session model without cost confirmation**
    *   *Why it matters:* Subagents seamlessly inherit expensive models (like Fable) from the parent session without prompting the user, resulting in severe unintended quota drain.
*   **[#64968](https://github.com/anthropics/claude-code/issues/64968): Syntax highlighting missing in VS Code chat panel**
    *   *Why it matters:* A high-impact UI/UX issue. The VS Code extension currently renders all code blocks as monochrome text, ignoring themes and language tags, hindering developer readability.

### 4. Key PR Progress
Note: The pipeline shows 5 active PRs in the last 24 hours, focusing heavily on script safety, bot management, and tooling validation:

*   **[#84364](https://github.com/anthropics/claude-code/pull/84364): fix(hookify): fail closed on exceptions in pretooluse hook**
    *   Closes a critical security vulnerability where an `ImportError` in a pretool hook would cause it to exit successfully (status 0), accidentally authorizing gated actions. Now it strictly emits `deny`.
*   **[#84381](https://github.com/anthropics/claude-code/pull/84381): fix(plugin-dev): handle wrapped hook schemas**
    *   Improves the `validate-hook-schema.sh` script to properly support top-level `"hooks"` object wrappers and optional matchers, making local plugin validation more accurate.
*   **[#84427](https://github.com/anthropics/claude-code/pull/84427): fix(plugin-dev): prevent validate-agent.sh exiting on first warning**
    *   Fixes a Bash arithmetic bug in the validator script (`((error_count++))` under `set -e`) that caused the tool to terminate on the very first warning rather than aggregating all errors.
*   **[#84365](https://github.com/anthropics/claude-code/pull/84365): fix(scripts): allow any user to prevent auto-close with thumbs down**
    *   Updates the repo's dedupe/stale bot scripts to honor a thumbs-down reaction from *any* community member to prevent an issue from being auto-closed prematurely.
*   **[#84600](https://github.com/anthropics/claude-code/pull/84600): Enable frontend-design plugin at project scope**
    *   Registers the official anthropics marketplace and auto-enables the `frontend-design` skill in the repository's `.claude/settings.json` for immediate local use.

### 5. Feature Request Trends
*   **Strict Sub-Agent Isolation & Safety:** Developers are rapidly pushing for structural boundaries for autonomous agents. Requests include preventing agents from inheriting parent model costs without prompts, dedicated MCP server processes per agent, and fail-safes against infinite token-burning loops.
*   **Desktop App Window Management:** High demand for better OS-native window handling on Windows, specifically restoring the ability to drag, resize, and close floating/pinned conversation windows broken in the recent MSIX update (Issue [#84595](https://github.com/anthropics/claude-code/issues/84595), [#84661](https://github.com/anthropics/claude-code/issues/84661)).
*   **Context & Lifecycle Preservation:** Users want seamless session continuity. This includes avoiding total agent restarts after context compaction and adding the ability to unarchive Claude Code sessions in the desktop app.

### 6. Developer Pain Points
*   **Unbounded Resource & Cost Bleed:** The prevailing frustration across the community today is financial. Developers are terrified of background processes, orphaned subprocesses, and rogue sub-agents silently draining massive amounts of tokens (often in the hundreds of thousands) against their weekly budgets.
*   **Windows Ecosystem Instability:** Windows users continue to face unique friction points, such as invisible system tray memory leaks from un-terminated `claude.exe --resume` scheduled tasks and broken desktop window controls.
*   **Flaky Tooling & Integration Gateways:** Critical tools like "Auto Mode" (Issue [#83773](https://github.com/anthropics/claude-code/issues/83773)) have been completely unavailable to users for weeks. Meanwhile, basic developer expectations—like copying text from the CLI on Linux or rendering syntax highlighting in VS Code—remain broken, disrupting daily workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the community digest for OpenAI Codex based on the GitHub data from August 7, 2026.

# OpenAI Codex Community Digest - 2026-08-07

## 1. Today's Highlights
The Codex ecosystem continues its rapid iteration with a new alpha release for the Rust CLI and a massive set of merged PRs focused on stabilizing multi-agent workflows and the Model Context Protocol (MCP). There is a heavy engineering focus on improving context and thread durability, alongside critical fixes for Windows desktop stability. However, the community remains vocal about the need for a native Linux desktop application and better handling of Windows process management.

## 2. Releases
*   **[rust-v0.147.0-alpha.13](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.13)**
    The latest alpha release for the Rust-based CLI. This incremental version bump accompanies a flurry of recent architectural refactors to tool handling and multi-agent state tracking.

## 3. Hot Issues
1.  **[Linux Desktop App Demand #11023](https://github.com/openai/codex/issues/11023)**: With 932 upvotes and 202 comments, this is the most engaged issue in the repo. Users continue to push for a native Linux desktop client, especially as Mac and Windows variants currently face thermal and performance limitations.
2.  **[Windows 11 Freezes/Stutters #20214](https://github.com/openai/codex/issues/20214)**: A highly active bug report indicating that the Codex App experiences severe UI stutters on Windows 11 Pro, even on machines with robust system resources (e.g., Ryzen 5, 32GB RAM).
3.  **[WMI Exhaustion via Cleanup Storm #34260](https://github.com/openai/codex/issues/34260)**: A "Papercuts 2026" issue where the Windows Desktop client enters an infinite loop, spawning hundreds of `taskkill.exe` processes that ultimately exhaust the system's WMI provider quota.
4.  **[Disk Space Exhaustion (150GB) #35470](https://github.com/openai/codex/issues/35470)**: A critical bug where a subagent repeatedly copied an image file 150,000 times, consuming 400 GiB of disk space, highlighting runaway loop behaviors in tool execution.
5.  **[Falsely Confirmed Task States #35355](https://github.com/openai/codex/issues/35355)**: An edge case in CLI compaction where interrupted commands or ephemeral outputs are promoted into "confirmed task state", causing the model to operate on false premises in later sessions.
6.  **[GPT-5.6 Prompt Caching Gap #35300](https://github.com/openai/codex/issues/35300)**: Users note that Codex cannot currently emit the `prompt_cache_breakpoint` required by GPT-5.6, negating the performance benefits of reusable startup prefixes. 
7.  **[WSL/Sandbox Bridge Panics #24873](https://github.com/openai/codex/issues/24873)**: When utilizing WSL on Windows, the Codex Desktop sandbox fails to find the system `bwrap` and panics when falling back to legacy Landlock permissions.
8.  **[Windows Computer Use Failure #37255](https://github.com/openai/codex/issues/37255)**: The Computer Use plugin is failing to enumerate application windows on Windows, returning path-not-found errors for users attempting to control local apps like Notepad or WeChat.
9.  **[Subagent State Reconciliation #37222](https://github.com/openai/codex/issues/37222)**: Following an upgrade to Desktop build 26.730, completed historical subagents erroneously remain in a "Processing" state, failing to reconcile their terminal states.
10. **[Lost Web-to-Desktop History #33080](https://github.com/openai/codex/issues/33080)**: Users report losing hours of conversation history when seamlessly switching between the ChatGPT web application and the unified desktop app.

## 4. Key PR Progress
1.  **[Reuse MCP Handlers Across Sampling Steps #37273](https://github.com/openai/codex/pull/37273)**: Significantly optimizes sampling by caching immutable MCP tool handlers and Code Mode definitions per session instead of rebuilding schemas on every step.
2.  **[Lazy MCP Servers for Subagents #37261](https://github.com/openai/codex/pull/37261)**: Improves resource usage by deferring the startup of optional MCP servers for subagents until a specific tool from that server is explicitly called.
3.  **[Strict Delegation for Subagents (RFC) #36381](https://github.com/openai/codex/pull/36381)**: Implements a host-enforced, least-privilege preflight check for V1/V2 subagent spawns, ensuring children only request a monotonic subset of parent permissions.
4.  **[Fix First-Turn Model Switching #37260](https://github.com/openai/codex/pull/37260)**: Resolves an issue where switching models on the very first turn caused rollback errors, ensuring base instructions are properly tracked and preserved.
5.  **[Permissions-Scoped Exec Rules #29500](https://github.com/openai/codex/pull/29500)**: Upgrades the exec policy so that command approval rules are scoped to the active permissions profile (e.g., managed vs. sandbox) rather than acting globally.
6.  **[Harden Network Proxy MITM Auth #37211](https://github.com/openai/codex/pull/37211)**: A vital security patch ensuring that decoded or normalized paths cannot bypass authorization checks in the MITM inspection hooks.
7.  **[Durable User-Message Queue Dispatch #37204](https://github.com/openai/codex/pull/37204)**: Introduces a storage-neutral queue that manages user messages in FIFO order, dispatching them automatically when a conversation thread becomes idle.
8.  **[Persist Legacy Semantics During Rollout Migration #37191](https://github.com/openai/codex/pull/37191)**: Safeguards chat history by ensuring historical rollbacks and compaction checkpoints aren't migrated in ways that alter the visible conversation context.
9.  **[Cyber Model Guardian Circuit-Breaker #37190](https://github.com/openai/codex/pull/37190)**: Adds an aggressive kill-switch for models with the "cyber" specialty, interrupting the model immediately after a single Guardian policy denial.
10. **[Unified Image Budget #37206](https://github.com/openai/codex/pull/37206)**: Standardizes image preprocessing limits (6,000 pixels / 10,000 patches) across the board for newer models supporting Responses Lite.

## 5. Feature Request Trends
*   **Native Linux Desktop Support**: The community is clamoring for a first-class Linux app to avoid the severe thermal and battery drains currently experienced on macOS ([#11023](https://github.com/openai/codex/issues/11023)).
*   **Advanced Agent State & Context Management**: Developers want better safeguards against "hallucinated states." This includes RFCs for strict delegation ceilings ([#36381](https://github.com/openai/codex/issues/36381)) and fixes to prevent the model from treating intermediate checkpoint text as durable project facts ([#35355](https://github.com/openai/codex/issues/35355), [#37325](https://github.com/openai/codex/issues/37325)).
*   **Tooling & Execution Alignment**: Requests for better prioritization of exact-skill name matches over fuzzy matches ([#31247](https://github.com/openai/codex/issues/31247)) and improved integration with local bundled environments to avoid PATH conflicts (e.g., macOS PDF generation failing due to bare `python3` calls, [#37333](https://github.com/openai/codex/issues/37333)).

## 6. Developer Pain Points
*   **Windows OS Friction**: Windows users face a disproportionate number of papercuts and severe bugs. Frustrations include process cleanup storms ([#34260](https://github.com/openai/codex/issues/34260)), flashing PowerShell windows during polling ([#26613](https://github.com/openai/codex/issues/26613)), and general UI freezes ([#20214](https://github.com/openai/codex/issues/20214)).
*   **Session Desync & History Loss**: Developers are frustrated by the lack of reliability in session persistence, particularly when moving between the web UI and desktop app ([#33080](https://github.com/openai/codex/issues/33080)) or when dealing with subagents that refuse to reconcile their completed state ([#37222](https://github.com/openai/codex/issues/37222), [#37042](https://github.com/openai/codex/issues/37042)).
*   **Unoptimized Model Integration**: As models grow more advanced, lack of support for native API features—like GPT-5.6's prompt cache breakpoints ([#35300](https://github.com/openai/codex/issues/35300))—is causing unnecessary latency and token expenditure, much to the chagrin of power users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for August 7, 2026.

### 1. Today's Highlights
Gemini CLI rolled out multiple version bumps today, headlined by the **v0.54.0** stable release and new **v0.55.0** preview/nightly builds. The development team and community contributors are heavily focused on enhancing subagent reliability, modernizing the model configurations to support the latest Gemini 3.5/3.6 architectures, and resolving persistent UI/authentication bugs. 

### 2. Releases
*   **v0.54.0** ([Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0))
    General availability release consolidating changelogs from v0.52.0 and v0.53.0. A subsequent patch (v0.54.1) was also cherry-picked to fix tool response merging.
*   **v0.55.0-preview.1 & v0.55.0-nightly.20260806** ([Nightly Release](https://github.com/google-gemini/gemini-cli/releases))
    Introduces a fallback mechanism for embedded macOS seatbelt profiles and adds a new environment config parser and command executor for the PR generator core.

### 3. Hot Issues
*   **[Subagent recovery hides GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**: A high-priority bug where the `codebase_investigator` falsely reports success after hitting `MAX_TURNS`, masking task interruptions from the user.
*   **[Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**: A P1 issue where the generalist agent hangs indefinitely on simple operations (like folder creation), forcing users to manually disable subagents.
*   **[Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**: Linux users report that the browser subagent fails instantly on Wayland environments, hindering web automation tasks.
*   **[Browser Agent ignores settings.json](https://github.com/google-gemini/gemini-cli/issues/22267)**: Global and project-level overrides (like `maxTurns`) are completely bypassed by the Browser Agent.
*   **[Auto Memory retry loop](https://github.com/google-gemini/gemini-cli/issues/26522)**: The Auto Memory background agent indefinitely retries processing "low-signal" sessions because it only marks them as processed if it reads the transcript.
*   **[Auto Memory security & logging](https://github.com/google-gemini/gemini-cli/issues/26525)**: Critical security concern where local transcripts are sent to the extraction model *before* secrets are redacted.
*   **[Shell execution gets stuck](https://github.com/google-gemini/gemini-cli/issues/25166)**: The CLI repeatedly hangs on simple shell commands, perpetually displaying "Awaiting user input" after the command has already resolved.
*   **[Gemini CLI 400 Error with >128 Tools](https://github.com/google-gemini/gemini-cli/issues/24246)**: Tool scope limitations cause API failures when users have extensive custom tools and MCP servers configured.
*   **[Agents running without permission](https://github.com/google-gemini/gemini-cli/issues/22093)**: A regression causing subagents to execute automatically despite agent mode being explicitly disabled in user configurations.
*   **[Agent destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**: Requests for safety guardrails to prevent the agent from autonomously executing destructive git commands (like `git reset --force`) or database modifications.

### 4. Key PR Progress
*   **[PR #28673: Add Gemini 3.6 Flash and 3.5 Flash-Lite](https://github.com/google-gemini/gemini-cli/pull/28673)**: Adds base model definitions, multimodal tool capabilities, and aliases for the newest Gemini architectures.
*   **[PR #28700: Fix tool response fusing](https://github.com/google-gemini/gemini-cli/pull/28700)**: Resolves a frustrating bug where user messages were incorrectly merged into interrupted tool responses, causing the model to "finish your sentence" instead of answering. (Already cherry-picked to v0.54.1).
*   **[PR #28586: Preserve thoughtSignature](https://github.com/google-gemini/gemini-cli/pull/28586)**: Fixes a regression from v0.53.0 that caused 400 Bad Request errors during parallel tool calls due to stripped function call data.
*   **[PR #28716: Terminal Error for Capacity Exhaustion](https://github.com/google-gemini/gemini-cli/pull/28716)**: Optimizes error handling for insufficient credits/capacity by triggering immediate model fallback instead of wasteful retries.
*   **[PR #28641: Fix ghost text wrapping infinite loop](https://github.com/google-gemini/gemini-cli/pull/28641)**: Resolves a UI hang where narrow terminal widths caused an infinite loop during CJK/emoji ghost text rendering.
*   **[PR #28679: Improve Vertex AI 401 errors](https://github.com/google-gemini/gemini-cli/pull/28679)**: Enhances DX by failing early and providing a clear error message when standard API keys are incorrectly used for Vertex AI auth.
*   **[PR #19638: Cap search results](https://github.com/google-gemini/gemini-cli/pull/19638)**: Prevents context window overflows by capping `SearchText` (grep/ripgrep) outputs from broad queries returning thousands of matches.
*   **[PR #28639: Guard formatTruncatedToolOutput](https://github.com/google-gemini/gemini-cli/pull/28639)**: Fixes negative-index behavior that caused tool outputs to inflate by 2x when `maxChars` was set to 0.
*   **[PR #28481: Refresh MCP OAuth tokens](https://github.com/google-gemini/gemini-cli/pull/28481)**: Fixes token refresh failures for MCP servers using dynamic client registration, preventing forced re-auth loops.
*   **[PR #28676: Forward termination signals](https://github.com/google-gemini/gemini-cli/pull/28676)**: Ensures supervised `kill` commands properly cascade to spawned child processes instead of orphaning them.

### 5. Feature Request Trends
*   **AST-Aware Codebase Navigation**: Strong demand for integrating AST (Abstract Syntax Tree) aware tools to allow precise method-bound reads, reducing token noise and improving navigation compared to naive text reads ([Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)).
*   **Zero-Dependency OS Sandboxing**: Requests to leverage native POSIX tools and sandbox environments safely, allowing Gemini 3 models to utilize their native bash capabilities without risking user systems ([Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
*   **Enhanced Subagent Observability**: Users want deep visibility into subagent trajectories, including sharing capabilities via `/chat share` and comprehensive subagent context included in `/bug` reports ([Issue #22598](https://github.com/google-gemini/gemini-cli/issues/22598), [Issue #21763](https://github.com/google-gemini/gemini-cli/issues/21763)).

### 6. Developer Pain Points
Developers are increasingly frustrated by **subagent autonomy issues**. Users note that custom skills and defined subagents are rarely triggered organically; they only execute when explicitly instructed ([Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)). Conversely, when they *are* triggered, they often hang indefinitely or ignore user overrides. 

Additionally, **file and workspace management** remains a sore spot. Developers report that the agent frequently litters working directories with temporary execution scripts in random folders ([Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)), requiring manual cleanup before commits. Terminal rendering bugs, particularly UI corruption when exiting external editors and handling terminal resizes, further interrupt developer flow.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest (2026-08-07)

## 1. Today's Highlights
GitHub Copilot CLI rolled out two new patch releases (`v1.0.79-5` and `v1.0.79-6`) focusing heavily on UI stability, MCP (Model Context Protocol) server lifecycle management, and session concurrency. The community has been highly active in reporting edge cases around terminal rendering, model routing behaviors (such as unexpected model delegations), and background process execution.

## 2. Releases

*   **v1.0.79-6**
    *   **Fixed:** Resolved a rare internal delay that previously printed diagnostic warnings over the interactive UI. Fixed a silent failure during session-history loading that caused the transcript to remain permanently blank for the rest of the session.
*   **v1.0.79-5**
    *   **Added:** Support for managing multiple concurrent sessions directly from the Sessions tab and sidebar.
    *   **Improved:** Prompt pinning is now disabled by default (can be re-enabled via `pinnedPrompts: true`).
    *   **Fixed:** Sandboxed wrapper builds (e.g., `make`) now correctly retrieve the necessary dev tool caches based on the build manifest.

## 3. Hot Issues

1.  **[Issue #4392](https://github.com/github/copilot-cli/issues/4392) - Orphaned stdio MCP server processes at startup:**
    *   *Why it matters:* Post-authentication, the CLI tears down and rebuilds the MCP client, but fails to kill the initial `stdio` child processes, causing process leaks. This is a critical lifecycle bug for users running multiple MCP servers.
2.  **[Issue #3392](https://github.com/github/copilot-cli/issues/3392) - Bash tool breaks on NixOS (v1.0.49+):**
    *   *Why it matters:* A high-exposure bug (7 upvotes) where the agent fails to start bash processes on NixOS. The community has provided `strace` logs, indicating a platform-specific path or execution mismatch.
3.  **[Issue #4311](https://github.com/github/copilot-cli/issues/4311) - Transcript renders as blank lines in interactive mode:**
    *   *Why it matters:* A severe terminal rendering issue where the transcript blanks out (especially at the bottom) until a new message is submitted or the terminal width changes. `/resume` fails to recover it.
4.  **[Issue #4374](https://github.com/github/copilot-cli/issues/4374) - `/mcp search` fails in non-GitHub repositories:**
    *   *Why it matters:* Enterprise users report (4 upvotes) that the MCP registry browser throws a `400 Bad Request` if the trusted folder's git remote points to Azure DevOps instead of GitHub.
5.  **[Issue #4380](https://github.com/github/copilot-cli/issues/4380) - Rubber Duck agent uses the same model:**
    *   *Why it matters:* Adversarial review ("rubber-ducking") loses its effectiveness because the reviewer agent sometimes uses the same model family as the primary session instead of an independent reviewer.
6.  **[Issue #4346](https://github.com/github/copilot-cli/issues/4346) - MCP registry policy returns 403 for Actions `GITHUB_TOKEN`:**
    *   *Why it matters:* Breaks PAT-less CI setups. When authenticating with the workflow's built-in token in GitHub Actions, the MCP policy fetch is blocked, disabling all non-default MCP servers.
7.  **[Issue #4390](https://github.com/github/copilot-cli/issues/4390) - Missing organization models (Claude Sonnet 5/Opus 5):**
    *   *Why it matters:* Users are unable to access models explicitly enabled by their Copilot Business organization, citing false positives in the "disabled by organization" policy checks.
8.  **[Issue #4313](https://github.com/github/copilot-cli/issues/4313) - Allow scrolling through conversation history:**
    *   *Why it matters:* A highly requested UX feature (top comment count) to allow users to navigate the current conversation using PageUp/PageDown or the mouse wheel directly within the CLI.
9.  **[Issue #4211](https://github.com/github/copilot-cli/issues/4211) - BigInt serialization failure in MCP responses:**
    *   *Why it matters:* The CLI crashes and aborts ongoing tasks if an MCP server returns large numbers, failing with a `TypeError: Do not know how to serialize a BigInt`.
10. **[Issue #4385](https://github.com/github/copilot-cli/issues/4385) - Models don't recognize finished background tasks:**
    *   *Why it matters:* The agent waits indefinitely for background shell processes even after they have exited and output files are generated, severely blocking automated workflows.

## 4. Key PR Progress
*Note: No Pull Requests were created or updated in the last 24 hours. Active development progress is currently reflected in the recent patch releases.*

## 5. Feature Request Trends
*   **Advanced BYOM/BYOK Flexibility:** Users want greater control over custom providers, specifically requesting dynamic model discovery and in-session switching without restarting the CLI ([#4376](https://github.com/github/copilot-cli/issues/4376), [#3135](https://github.com/github/copilot-cli/issues/3135)).
*   **Workspace Customization via `.agents`:** Expanding the `.agents` folder convention to globally manage instructions, agents, and hooks across any opened folder, not just Git repositories ([#4204](https://github.com/github/copilot-cli/issues/4204)).
*   **Granular Worktree Management:** Extending the `/worktree` command to automatically preserve specific repo guidelines and branch naming conventions ([#3914](https://github.com/github/copilot-cli/issues/3914)).
*   **Improved Interactive Navigation:** Better terminal-native interactions, such as using PageUp/PageDown for history scrolling ([#4313](https://github.com/github/copilot-cli/issues/4313)) and standard tab-completion in shell `!` mode ([#4387](https://github.com/github/copilot-cli/issues/4387)).

## 6. Developer Pain Points
*   **Model Routing & Delegation Surprises:** Developers are frustrated by unpredictable model behaviors, such as GPT-5.6 Terra silently delegating expensive tasks to Opus subagents ([#4377](https://github.com/github/copilot-cli/issues/4377)), and reasoning efforts mismatching UI status lines ([#3053](https://github.com/github/copilot-cli/issues/3053)).
*   **Process Lifecycle & Orphaned Resources:** The CLI struggles with cleanup. Deleting a project session leaves orphaned Git worktrees on disk ([#4383](https://github.com/github/copilot-cli/issues/4383)), and MCP client rebuilds leave zombie `stdio` processes ([#4392](https://github.com/github/copilot-cli/issues/4392)).
*   **Agent Memory & Queueing Logic:** Background task monitoring is broken ([#4385](https://github.com/github/copilot-cli/issues/4385)), and users report that sending consecutive steering messages causes them to be permanently queued or executed out of order ([#4373](https://github.com/github/copilot-cli/issues/4373), [#4372](https://github.com/github/copilot-cli/issues/4372)).
*   **Terminal Compatibility Woes:** Rendering bugs remain a significant pain point, particularly inside multiplexers like `tmux` (dark-on-dark invisibility) ([#4212](https://github.com/github/copilot-cli/issues/4212)) and specific regional codepages causing screen clears on Windows ([#4391](https://github.com/github/copilot-cli/issues/4391)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest
**Date:** 2026-08-07

### 1. Today's Highlights
The community focused heavily on file-handling robustness and developer experience. A critical bug causing file corruption during string replacements in non-UTF-8 files was rapidly addressed through two separate community PRs. Additionally, strides were made in improving CLI resilience, with new fixes preventing mid-task crashes when processing unsupported media formats.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*   **#1283 [OPEN] Feature Request: Memory System** (👍 0, 💬 20)
    *   **Why it matters:** A highly discussed issue requesting persistent context and user preferences across CLI sessions. This is a major architectural request that would transform Kimi from a stateless tool into a personalized coding assistant.
*   **#2591 [OPEN] StrReplaceFile corrupts undecodable bytes** (👍 0, 💬 2)
    *   **Why it matters:** A critical data-loss bug. The `StrReplaceFile` tool was overwriting non-UTF-8 bytes with `U+FFFD` across the entire file, even outside edited regions, effectively corrupting binary or mixed-encoding files.
*   **#2474 [OPEN] Interface keeps shaking and re-rendering** (👍 2, 💬 2)
    *   **Why it matters:** A severe UX bug where the CLI inexplicably re-renders the entire conversation from scratch, causing screen "shaking." This disrupts flow and readability during complex debugging.
*   **#821 [CLOSED] [Security] Missing authorization checks + dependency updates** (👍 0, 💬 0)
    *   **Why it matters:** A high-severity security audit report detailing IDOR/missing authorization vulnerabilities in the web API and 5 dependency CVEs. Closure indicates proactive patching by the maintainers.
*   **#2147 [OPEN] [Feature] Lazy-load MCP tool schemas** (👍 1, 💬 1)
    *   **Why it matters:** Token efficiency. Injecting all MCP tool schemas at startup eats context window. The community is requesting dynamic loading so tokens are preserved for actual coding logic.
*   **#2317 [OPEN] [VSCode Extension] Plan mode file path not clickable** (👍 1, 💬 4)
    *   **Why it matters:** Friction in IDE integration. Users are unable to click file paths in the VSCode webview during plan mode, forcing manual navigation and slowing down development.
*   **#2593 [OPEN] Quick switching for auto/yolo/manual modes in VSCode** (👍 0, 💬 0)
    *   **Why it matters:** Developers want faster control over agent autonomy. The community is requesting UI shortcuts in the VSCode plugin to toggle execution modes and monitor 5-hour quota limits.
*   **#621 [CLOSED] The first WriteFile always errors (Invalid path)** (👍 0, 💬 2)
    *   **Why it matters:** A resolved but highly impactful workflow bug where the initial `WriteFile` execution would fail due to relative vs. absolute path resolution hiccups.

### 4. Key PR Progress
*   **[#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) fix(StrReplaceFile): refuse to edit files that are not valid UTF-8** by `shoemoney`
    *   *Progress:* A fail-fast approach to Issue #2591. Instead of attempting a risky edit, the CLI will now reject edit requests on files that aren't strictly valid UTF-8, preventing data corruption.
*   **[#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits** by `686f6c61`
    *   *Progress:* A competing/complementary fix for #2591. This PR alters the tool to apply edits directly to the raw byte buffer using UTF-8 byte substrings, allowing safe edits without corrupting surrounding non-UTF-8 data.
*   **[#2592](https://github.com/MoonshotAI/kimi-cli/pull/2592) fix(soul): degrade unsupported tool media instead of aborting mid-task** by `rainbowgore`
    *   *Progress:* Improves agent stability. If an MCP tool returns an image to a text-only model, the CLI will now gracefully degrade (e.g., drop the image) rather than crashing mid-task after side effects have already been applied.
*   **[#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255) feat(shell): support Shift+Enter for inserting newlines** by `donbeave`
    *   *Progress:* Closed/Merged. Brings industry-standard multi-line input to the CLI prompt, preventing users from having to use awkward shortcuts like `Ctrl-J` or `Alt-Enter`.

### 5. Feature Request Trends
*   **Context Optimization & Memory:** Developers want more intelligent token management. Requests for persistent cross-session memory (#1283) and lazy-loading MCP schemas (#2147) show a strong desire to maximize the usable context window.
*   **Granular UI Controls in VSCode:** Users are asking for tighter, more accessible integrations in their IDEs. Quick toggles for autonomous modes and visible quota tracking (#2593) are becoming expected baseline features.
*   **Agent Safety & Stability:** With Kimi taking on more autonomous tasks, developers are increasingly requesting guardrails to prevent unintended side effects, such as rejecting incompatible file types gracefully (#2592) and preventing silent data corruption (#2591).

### 6. Developer Pain Points
*   **Silent Data Corruption:** The most severe frustration is the `StrReplaceFile` bug, which permanently corrupted files by force-encoding non-UTF-8 bytes without warning. Developers expect strict adherence to raw byte preservation.
*   **UI Flickering & Rendering:** Terminal users are experiencing frustrating visual bugs. Screen shaking and full-conversation re-rendering (#2474) break immersion and make tracking complex AI outputs difficult.
*   **Path Resolution Reliability:** Historically, the CLI has struggled with establishing the correct working directory on its first execution, leading to false "Invalid path" errors on the initial `WriteFile` command (#621).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for August 6, 2026.

### 1. Today's Highlights
The OpenCode community is actively troubleshooting a widespread authentication outage affecting paid tiers (OpenCode Go and Zen), which has dominated recent issue traffic. Development focus is heavily centered on V2 architecture maturation, featuring substantial refactoring to the app shell and significant enhancements to the Terminal User Interface (TUI), including model session-scoping and queued prompt handling. 

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
*   **[OPEN] Auth Outage on Paid Tiers ([#38257](https://github.com/anomalyco/opencode/issues/38257), [#38218](https://github.com/anomalyco/opencode/issues/38218), [#38195](https://github.com/anomalyco/opencode/issues/38195))** 
    A critical upstream provider block is returning `401 AuthError` for users on active Go and Zen subscriptions, while free models operate normally. This has affected multiple clients and operating systems since July 21.
*   **[OPEN] Silent Subagent Stream Aborts ([#37852](https://github.com/anomalyco/opencode/issues/37852))**
    Aborted provider streams are being recorded as clean stops (`finish=unknown`) with zero tokens, causing subagents to fail silently without surfacing errors to the user. 
*   **[OPEN] Model Serving Mismatch ([#40409](https://github.com/anomalyco/opencode/issues/40409))**
    Users report that the `deepseek-v4-flash` endpoint is actually serving the older V3.2 model (cutoff 2025-05), causing high-severity concerns regarding billing and generation quality.
*   **[FEATURE] Privacy and Telemetry Transparency ([#39875](https://github.com/anomalyco/opencode/issues/39875))**
    Go subscribers are requesting the reinstatement of recently removed privacy wording and clearer attribution regarding provider telemetry and data retention policies.
*   **[OPEN] Web UI Real-time Sync Failure ([#40502](https://github.com/anomalyco/opencode/issues/40502))**
    The web interface currently fails to auto-refresh conversations, forcing users to manually reload the page to see new messages.
*   **[OPEN] "Exiting loop" Bug ([#38801](https://github.com/anomalyco/opencode/issues/38801))**
    A persistent bug is crashing TUI sessions with an `exiting loop` message when using various OpenAI APIs, severely degrading the terminal experience.
*   **[OPEN] Bedrock Compaction Errors ([#14332](https://github.com/anomalyco/opencode/issues/14332))**
    Amazon Bedrock (Opus 4.6) is throwing compaction failures, rejecting modified `thinking` or `redacted_thinking` blocks in the latest assistant messages.
*   **[OPEN] Web UI / Sessions Disconnect ([#40809](https://github.com/anomalyco/opencode/issues/40809))**
    In reverse-proxied Docker environments, the Web UI fails to list sessions or start agents, though TUI and mobile clients function normally.
*   **[FEATURE] Advanced Prompt Steering ([#32157](https://github.com/anomalyco/opencode/issues/32157))**
    A highly upvoted request to implement first-class `queue`, `steer`, and `break` semantics for prompts submitted to the agent mid-run.
*   **[OPEN] Null Workspace ID Hangs ([#36661](https://github.com/anomalyco/opencode/issues/36661))**
    Sessions with a `NULL` workspace_id in the database cause the TUI to hang completely and silently break the `opencode export` command.

### 4. Key PR Progress
*   **[OPEN] Hosted Workspace Execution ([PR #40784](https://github.com/anomalyco/opencode/pull/40784))**
    Introduces durable execution environments (Workspaces) for V2, decoupling the execution sandbox from the repository runner graph.
*   **[OPEN] Fix Auth Error Messaging ([PR #40944](https://github.com/anomalyco/opencode/pull/40944))**
    Addresses the massive upstream provider 401 auth block by implementing distinct error messages in the console for blocked workspaces.
*   **[OPEN] Queue Prompts with Option+Enter ([PR #40922](https://github.com/anomalyco/opencode/pull/40922))**
    Implements mid-run prompt queuing via `Option+Enter`/`Alt+Enter`, keeping steers inline in the transcript while holding queued work in a dedicated dock.
*   **[OPEN] Session-Scoped Model Selection ([PR #40913](https://github.com/anomalyco/opencode/pull/40913))**
    Refactors the TUI so that active models are tied to specific sessions rather than being shared as agent-level state, preventing context bleed.
*   **[OPEN] LAN Provider Auto-Discovery ([PR #27554](https://github.com/anomalyco/opencode/pull/27554))**
    Adds Local (LAN) discovery via mDNS to the `/connect` dialog, automatically identifying and configuring local OpenAI-compatible servers.
*   **[OPEN] Bounded Tool Output ([PR #40929](https://github.com/anomalyco/opencode/pull/40929))**
    Implements byte and line limits for top-level local tool text output, retaining full truncated text in managed temporary files to prevent context overflow.
*   **[OPEN] Remove Legacy App Layout ([PR #40947](https://github.com/anomalyco/opencode/pull/40947))**
    Completes the transition to the new tabs layout by removing legacy home, sidebar, and transition UI assets, while preserving legacy URL redirects.
*   **[OPEN] Bounded Compacted History Hydration ([PR #39930](https://github.com/anomalyco/opencode/pull/39930))**
    Fixes performance bottlenecks by preventing the system from hydrating message parts for history older than the latest completed compaction event.
*   **[CLOSED] Model Compatibility Options ([PR #40942](https://github.com/anomalyco/opencode/pull/40942))**
    Exposes granular compatibility configurations (like `maxTokensField` and `requireFinishReason`) for custom AI providers in the runtime models.
*   **[OPEN] TUI Pairing Password Toggle ([PR #40934](https://github.com/anomalyco/opencode/pull/40934))**
    Improves accessibility in the TUI by adding a keyboard-friendly toggle to reveal/hide the pairing password during device authentication.

### 5. Feature Request Trends
*   **Mid-Run Agent Control:** Users are heavily requesting ways to intervene during active LLM generation. The community wants clear distinctions between queuing future prompts, steering the model dynamically, or hard-breaking a generation.
*   **Telemetry & Privacy Controls:** Subscribers are asking for explicit consent flows, transparent retention policies, and the reversal of silent privacy policy changes regarding provider attribution.
*   **Robust Web UI Parity:** Users want the Web UI to match TUI reliability. This includes real-time auto-refresh for active conversations and fixing environment-specific session visibility bugs.
*   **Context Compaction Awareness:** Developers are asking for smarter handling of system prompts and context window limits, particularly ensuring models (like Qwen) don't break when dynamic context pruning occurs.

### 6. Developer Pain Points
*   **Upstream Provider Reliability:** The recurring `401 AuthError / Request blocked by upstream provider` bug is generating massive friction. It is blocking paid subscribers entirely, failing mid-generation without warning, and causing silent empty responses from subagents.
*   **Session and Context Management:** Losing chat history upon switching sessions, UI crashes tied to null database fields, and the inability to export sessions are consistent sources of developer frustration.
*   **Model Routing Transparency:** Discovering that subscribed models (e.g., DeepSeek V4) are routing to outdated versions erodes trust. Users demand accurate model catalogs and strict version enforcement.
*   **TUI Stability:** The terminal experience suffers from random "exiting loop" crashes and dead-pixel/hang issues during long-running agentic tasks or complex file-tree operations.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for August 7, 2026.

### 1. Today's Highlights
Pi rolled out **v0.84.0**, introducing a dynamic fullscreen TUI mode alongside major architectural updates like the new "Harness v2" for better agent state recovery. Community focus has been highly concentrated on refining the TUI experience (fixing mouse selection, scrolling, and width crashes), while the team also shipped significant backend improvements including SQLite query optimizations and durable session metadata.

### 2. Releases
**v0.84.0**
*   **Fullscreen TUI mode:** Users can now switch between regular and fullscreen modes at runtime. The new mode features a sticky editor and footer, an independently scrollable transcript, and draggable scrollbars. ([Release Notes](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settin))

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[#7547 [OPEN] Standardizing Pi on Windows](https://github.com/earendil-works/pi/issues/7547)**
    *   *Why it matters:* Windows represents a massive user base, but fragmented execution environments (WSL, native, etc.) make it hard to prioritize bug fixes. The community is actively discussing where the core team should focus their energy.
*   **[#6879 [OPEN] Auto-compaction failure past 100% context](https://github.com/earendil-works/pi/issues/6879)**
    *   *Why it matters:* Long-running agent loops occasionally ignore the context compaction threshold, resulting in hard crashes when the API rejects payloads >370k tokens. Users are requesting a compaction check after every agent turn. (👍 15)
*   **[#7128 [OPEN] System prompt encourages unnecessary bash calls](https://github.com/earendil-works/pi/issues/7128)**
    *   *Why it matters:* A recent guideline instructing the agent to inspect `PI_*` environment variables has biased it toward running spammy, unnecessary bash commands during standard tasks.
*   **[#7600 [OPEN] TUI leaks X11 connections over long sessions](https://github.com/earendil-works/pi/issues/7600)**
    *   *Why it matters:* Long-running Pi processes are silently leaking hundreds of X11 connections, eventually crashing the Linux desktop environment by maxing out the X server's client table.
*   **[#7321 [OPEN] Multi-line paste broken without bracketed paste mode](https://github.com/earendil-works/pi/issues/7321)**
    *   *Why it matters:* Pasting multi-line code on mobile/older terminals (like Termux) triggers premature submission due to `\r` carriage returns not being properly caught.
*   **[#7413 [CLOSED] Compaction fails on GitHub Copilot Enterprise](https://github.com/earendil-works/pi/issues/7413)**
    *   *Why it matters:* Highlighted an auth edge case where context summarization failed for GHE.com accounts due to "unknown stamp" token errors, which has now been resolved.
*   **[#7702 [OPEN] DeepSeek 400 error via OpenCode Zen gateway](https://github.com/earendil-works/pi/issues/7702)**
    *   *Why it matters:* Multi-turn tool calling breaks for DeepSeek models because `reasoning_content` is not being passed back to the API correctly through the compatibility layer.
*   **[#7736 [CLOSED] TUI Uncaught Exception on Terminal Width Exceedance](https://github.com/earendil-works/pi/issues/7736)**
    *   *Why it matters:* The new v0.84.0 TUI crashes fatally instead of truncating output when a rendered line exceeds the terminal width. 
*   **[#7703 [CLOSED] `Agent.reset()` race condition](https://github.com/earendil-works/pi/issues/7703)**
    *   *Why it matters:* Calling `reset()` mid-stream cleared the local transcript but didn't abort the active API call, resulting in orphaned, assistant-only transcripts when the stream settled.
*   **[#7720 [OPEN] Disable 'select to copy' in fullscreen TUI](https://github.com/earendil-works/pi/issues/7720)**
    *   *Why it matters:* Users who frequently highlight terminal text are accidentally overwriting their clipboards. A toggle for the new TUI's auto-copy behavior is highly requested.

### 4. Key PR Progress
Recent merges and active PRs show a strong push toward stability and extensibility:

*   **[#7710 Restore suspended harness operations](https://github.com/earendil-works/pi/pull/7710):** Implements a massive piece of the "Harness v2" architecture, allowing agents to fully recover, reload, and resume complex state operations from saved sessions.
*   **[#7717 Reject `Agent.reset()` during active runs](https://github.com/earendil-works/pi/pull/7717):** Fixes the race condition (Issue #7703) by preserving runtime state and transcript integrity until in-flight API responses settle.
*   **[#7708 Replace session summaries with durable metadata](https://github.com/earendil-works/pi/pull/7708):** Refactors session state tracking, replacing easily lost `SessionSummary` objects with backend-persistent `SessionMetadata` to prevent state drops during live refreshes.
*   **[#7727 SQLite query optimizations](https://github.com/earendil-works/pi/pull/7727):** Massively speeds up branch queries and membership lookups by utilizing cached entry types and covering indexes, reducing database bottlenecks.
*   **[#7715 Allow blocked tool calls to terminate](https://github.com/earendil-works/pi/pull/7715):** Adds a `terminate` boolean hint, allowing extensions that block a tool call to cleanly end the agent's turn rather than hanging or looping.
*   **[#7721 Avoid unwanted newlines when copying in fullscreen](https://github.com/earendil-works/pi/pull/7721):** Fixes a frustrating TUI bug where copying wrapped visual lines pasted them with hardcoded newline breaks.
*   **[#7671 Colocate tool prompt contributions](https://github.com/earendil-works/pi/pull/7671):** Refactors the codebase to store system-prompt snippets directly alongside their respective tool implementations, making it easier for developers to build custom tools.
*   **[#7681 Support `AGENTS.override.md`](https://github.com/earendil-works/pi/pull/7681):** Introduces directory-specific context overrides, allowing developers to locally overwrite parent `AGENTS.md` or `CLAUDE.md` rules without modifying shared files.
*   **[#7685 Disable `bunfig` autoload in binaries](https://github.com/earendil-works/pi/pull/7685):** Prevents standalone Pi binaries from crashing on startup due to broken or dependency-heavy `preload` scripts in a project's local `bunfig.toml`.
*   **[#7718 Preserve scrollback on content-driven redraws](https://github.com/earendil-works/pi/pull/7718):** Fixes a normal-screen TUI issue where streaming markdown reflows would aggressively scroll the viewport to the bottom, destroying user scroll position.

### 5. Feature Request Trends
Analyzing the recent issues and PRs, the community is pushing for three main feature directions:
*   **Advanced TUX/UX Controls:** As fullscreen TUI matures, developers want granular controls. Requests include double-click word selection ([#7725](https://github.com/earendil-works/pi/issues/7725)), half-page scroll bindings ([#7735](https://github.com/earendil-works/pi/issues/7735)), disabling auto-copy ([#7720](https://github.com/earendil-works/pi/issues/7720)), and better extension anchoring ([#7682](https://github.com/earendil-works/pi/issues/7682)).
*   **Auth & Provider Pre-flight Checks:** With an expanding matrix of models and enterprise gateways, users are asking for read-only `auth check` commands to verify provider/model credentials without mutating state or triggering refreshes ([#7152](https://github.com/earendil-works/pi/issues/7152)).
*   **Session Telemetry & State Observability:** Developers building extensions need programmatic ways to monitor agent operations. Active trends include requesting telemetry for stream configurations ([#7713](https://github.com/earendil-works/pi/pull/7713)) and methods to force-reload session files from disk inside plugins ([#7699](https://github.com/earendil-works/pi/issues/7699)).

### 6. Developer Pain Points
*   **TUI Brittleness:** The TUI rewrite is causing friction. Developers report fatal crashes on rendering errors—such as throwing exceptions instead of truncating wide lines ([#7736](https://github.com/earendil-works/pi/issues/7736), [#7737](https://github.com/earendil-works/pi/issues/7737)) and undefined property crashes in tool execution rendering ([#7695](https://github.com/earendil-works/pi/issues/7695)). 
*   **Fragmented Provider API Compatibility:** Supporting diverse LLMs remains painful. Developers note missing model lists for providers like Qwen/Fireworks ([#7674](https://github.com/earendil-works/pi/issues/7674), [#7676](https://github.com/earendil-works/pi/issues/7676)), missing reasoning payload passes for DeepSeek ([#7702](https://github.com/earendil-works/pi/issues/7702)), and enterprise auth quirks ([#5323](https://github.com/earendil-works/pi/issues/5323)).
*   **Inefficient Local Data Parsing:** Under the hood, performance bottlenecks like O(n²) re-parsing of streaming tool-call buffers ([#7698](https://github.com/earendil-works/pi/issues/7698)) and OS-level leaks (X11 connections) are degrading the performance of long-running agentic loops.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-08-07.

### 1. Today's Highlights
Qwen Code rolled out **v0.21.7**, headlined by the removal of the 50-turn limit for Goals and native inline image rendering for modern terminals like Kitty and iTerm2. The community and core team are heavily focused on hardening security boundaries, fixing terminal rendering quirks across WSL/tmux, and expanding third-party LLM provider support. 

### 2. Releases
*   **[v0.21.7](https://github.com/QwenLM/qwen-code/pull/8655)**
    *   Removed the 50-turn limit for Goals, enabling long-running tasks to resume seamlessly. ([PR #8421](https://github.com/QwenLM/qwen-code/pull/8421))
    *   Enabled inline terminal image rendering from model outputs in the interactive CLI for Kitty, iTerm2, WezTerm, Ghostty, and Warp. ([Issue #8090](https://github.com/QwenLM/qwen-code/issues/8090))
*   **[v0.21.6-nightly](https://github.com/QwenLM/qwen-code/pull/8604)**
    *   Included core testing flakes fixes (e.g., isolating glob external-path tests).

### 3. Hot Issues
1.  **[OAuth Free Tier Policy Adjustment #3203](https://github.com/QwenLM/qwen-code/issues/3203)**: A highly debated issue regarding the reduction of the free tier quota from 1,000 to 100 requests/day. Community members are actively discussing the impact on hobbyist and open-source developers.
2.  **[Shell Command Execution Bypass #8582](https://github.com/QwenLM/qwen-code/issues/8582)**: A critical security bug where the read-only shell classifier auto-approves arbitrary code execution hidden via line continuations or variable substitution.
3.  **[0.21.6 Hook System Regression #8622](https://github.com/QwenLM/qwen-code/issues/8622)**: A major regression where core lifecycle hooks (`PreToolUse`, `PostToolUse`, `PreCompact`) fail to dispatch, breaking custom CI/CD and safety gating integrations.
4.  **[Desktop Runtime Crash on Windows #8615](https://github.com/QwenLM/qwen-code/issues/8615)**: The bundled Node.js runtime in the new Desktop v0.1.0 installer crashes with an `EISDIR` error when opening workspaces on Windows 11.
5.  **[Untrusted Folder `.env` Injection #8643 & #8627](https://github.com/QwenLM/qwen-code/issues/8643)**: Security vulnerabilities where workspace trust evaluation flaws allow untrusted directories to load `.env` files or inject `qwen serve` bearer tokens.
6.  **[WSL/Terminal Streaming Duplication #7634](https://github.com/QwenLM/qwen-code/issues/7634)**: A persistent UI bug in WSL + Windows Terminal where streaming outputs render characters multiple times due to ConPTY mishandling cursor sequences.
7.  **[Windows Terminal IME Issue #8625](https://github.com/QwenLM/qwen-code/issues/8625)**: Chinese Pinyin input is visually broken and unreadable in the Windows terminal environment during active prompting.
8.  **[UI Language Switching Fails #8592](https://github.com/QwenLM/qwen-code/issues/8592)**: The Desktop app's settings dropdown fails to apply UI language changes, leaving the interface stuck in English.
9.  **[Anthropic Model-ID Parsing #8584](https://github.com/QwenLM/qwen-code/issues/8584)**: The Anthropic content generator breaks when parsing dotted-minor aliases (e.g., `claude-opus-4.8`), causing failures in proxy deployments.
10. **[Tmux Screen Flickering #8562](https://github.com/QwenLM/qwen-code/issues/8562)**: Users report severe screen flickering when conversing with the agent inside tmux sessions over SSH.

### 4. Key PR Progress
1.  **[feat(auth): add Kimi and Xiaomi MiMo providers #8368](https://github.com/QwenLM/qwen-code/pull/8368)**: Adds first-class authentication and API key support for Kimi and Xiaomi MiMo models.
2.  **[fix(cli): skip terminal redraw optimizer on WSL/ConPTY #7897](https://github.com/QwenLM/qwen-code/pull/7897)**: Directly addresses the highly requested fix for WSL text duplication by skipping batched cursor-up sequences.
3.  **[feat(audit): add legacy code audit workflow #8403](https://github.com/QwenLM/qwen-code/pull/8403)**: Introduces a new `/audit` command to evaluate existing codebases without requiring diffs or PRs.
4.  **[fix(providers): sync Token Plan model list with Bailian catalog #8651](https://github.com/QwenLM/qwen-code/pull/8651)**: Updates model lists to include `qwen3.8-max` and aligns DeepSeek flash entries with the official Bailian catalog.
5.  **[feat(review): add qwen-code repository context manifest #8654](https://github.com/QwenLM/qwen-code/pull/8654)**: Implements bounded review domains and path scopes to make AI-powered PR reviews faster and more context-aware.
6.  **[fix(core): Resolve symlinks before granting read permission #8636](https://github.com/QwenLM/qwen-code/pull/8636)**: A crucial security fix that ensures symlinks are canonicalized before file read permissions are granted.
7.  **[feat(channels): support group pairing #8440](https://github.com/QwenLM/qwen-code/pull/8440)**: Enhances chat integrations by allowing a group chat to be approved once and utilized by all members.
8.  **[feat(web-shell): add fullscreen view for the right artifact panel #8614](https://github.com/QwenLM/qwen-code/pull/8614)**: Brings a much-needed UI expand/collapse toggle to the Web Shell artifact panel.
9.  **[fix(cli): accept scope flags in /language ui #8633](https://github.com/QwenLM/qwen-code/pull/8633)**: Fixes a bug where global/project scope flags were rejected by language subcommands.
10. **[perf(ci): run docs-only automatic reviews at medium effort #8648](https://github.com/QwenLM/qwen-code/pull/8648)**: Optimizes CI runner execution time by scaling down review effort for documentation-only PRs.

### 5. Feature Request Trends
*   **Richer Terminal UI & Multimodal Support:** Users are pushing for native terminal capabilities, leading to the new image rendering features and proposals like the [Qwen Audio Agent](https://github.com/QwenLM/qwen-code/issues/8629) for full-duplex voice coding.
*   **Expanded Third-Party Model Integrations:** There is a strong desire to use Qwen Code as a universal agent layer, evidenced by recent PRs adding Kimi, Xiaomi MiMo, and fixes for Anthropic aliases. 
*   **Advanced Code Auditing:** Developers want the tool to proactively analyze existing code, resulting in the new `/audit` workflow.

### 6. Developer Pain Points
*   **Terminal Rendering Quirks:** Cross-platform terminal compatibility remains a thorn in users' sides. WSL/ConPTY, tmux over SSH, and Windows IMEs are generating duplicate text, flickering screens, and unreadable inputs.
*   **Workspace Security Boundaries:** The `DO_NOT_TRUST` and `TRUST_FOLDER` mechanics are currently viewed as overly complex and prone to edge-case bypasses, causing anxiety over `.env` and token leakage.
*   **CI/CD Hook Reliability:** The agent automation lifecycle (start, pre-tool, post-tool, stop) needs rock-solid stability. The 0.21.6 hook dispatch regression disrupted automated dev workflows, frustrating power users.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek TUI (CodeWhale) for 2026-08-07.

### 1. Today's Highlights
The community activity today is dominated by the integration and stabilization of the **v0.9.4 release train** ([PR #5135](https://github.com/Hmbown/CodeWhale/issues/5135)), which brings major architectural upgrades to agent workflows and the Runtime API. There is a heavy focus on expanding the HTTP Runtime API to support comprehensive lifecycle management for memory, skills, and MCP servers. Meanwhile, maintainers have closed several critical UX and build-performance issues, setting the stage for a highly efficient and robust agentic coding experience.

### 2. Releases
*No new official releases were published in the last 24 hours.* However, active development is converging on the `v0.9.4` milestone.

### 3. Hot Issues
Here are the 10 most noteworthy issues updated in the past 24 hours:

*   **[#5253](https://github.com/Hmbown/CodeWhale/issues/5253) [OPEN] Subagent recursion budget bypass:** A critical finding that nested subagents can widen the root session's absolute recursion budget (`MAX_SPAWN_DEPTH_CEILING`) by explicitly passing a larger `max_depth` on spawn. This needs urgent patching to prevent runaway agent loops.
*   **[#5244](https://github.com/Hmbown/CodeWhale/issues/5244) [OPEN] Silent context window downgrades:** An enhancement request to surface warnings when unknown model IDs silently fall back to the 128K legacy context limit. Currently, 1M-context models will compact prematurely without notifying the user.
*   **[#5250](https://github.com/Hmbown/CodeWhale/issues/5250) [OPEN] Single API key limitation:** Users are frustrated that switching between different providers (like DeepSeek and GLM) requires fetching a new key each time, requesting the ability to save multiple provider keys concurrently.
*   **[#5245](https://github.com/Hmbown/CodeWhale/issues/5245) [CLOSED] Git commit forces full TUI rebuild:** A major developer pain point where local git commits triggered a complete rebuild of `codewhale-tui` (620+ files) just to refresh the embedded HEAD SHA. Resolved by decoupling the SHA stamp from compilation.
*   **[#5246](https://github.com/Hmbown/CodeWhale/issues/5246) [CLOSED] Fat LTO on every pre-push build:** Resolved an issue where the local release gate was using the shipping profile (`lto = true`, `codegen-units = 1`), severely slowing down contributor workflows. Profiles have now been split.
*   **[#5223](https://github.com/Hmbown/CodeWhale/issues/5223) [CLOSED] TUI mouse scrolling bug:** Fixed an annoying UX issue where mouse wheel scrolling in the TUI cycled through input history instead of scrolling the conversation transcript. 
*   **[#5035](https://github.com/Hmbown/CodeWhale/issues/5035) [CLOSED] Inconsistent Workflow authoring failures:** Addressed a v0.9.4 release blocker where failed parallel fan-outs in workflows were treated as `null` and marked as successful, effectively hiding orchestration failures from the user.
*   **[#5040](https://github.com/Hmbown/CodeWhale/issues/5040) [CLOSED] Persistent Workflow status clutter:** Moved the durable Workflow status rendering from the bottom composer area to the top status bar, freeing up input space and improving UI clarity.
*   **[#5046](https://github.com/Hmbown/CodeWhale/issues/5046) [CLOSED] Fleet agent role restrictions:** Fixed an issue where named agents were given too much freedom over model selection, causing them to clone operator models instead of strictly binding to configured fleet roles.
*   **[#5178](https://github.com/Hmbown/CodeWhale/issues/5178) [CLOSED] Web Admin false success on digest post:** Patched a web API bug where the admin post endpoint returned `ok: true` but silently failed to publish, leaving drafts stuck in "Pending" indefinitely.

### 4. Key PR Progress
Here are the 10 most impactful Pull Requests updated today:

*   **[#5135](https://github.com/Hmbown/CodeWhale/pull/5135) release: Codewhale v0.9.4 release train:** The massive integration PR (77 commits ahead of main) consolidating all v0.9.4 features, including the 2026-08-01 source candidate.
*   **[#5129](https://github.com/Hmbown/CodeWhale/pull/5129) feat(runtime-api): Skill lifecycle endpoints:** Adds HTTP routes for `install`, `update`, `uninstall`, `trust`, and `audit`, allowing managed desktop/web clients to handle skills via API rather than direct config editing.
*   **[#5131](https://github.com/Hmbown/CodeWhale/pull/5131) feat: Runtime API memory endpoints:** Introduces `/v1/memory` to let managed clients inspect active memory, understand scope/provenance, and apply lifecycle controls.
*   **[#5238](https://github.com/Hmbown/CodeWhale/pull/5238) feat(mcp): MCP Registry discovery:** Implements a "Registry-first" tool-selection policy where the model checks a public MCP Registry for a zero-environment stdio server before falling back to writing custom code.
*   **[#5234](https://github.com/Hmbown/CodeWhale/pull/5234) fix(tui): Alternate scroll bug:** Fixes scroll routing by disabling xterm alternate-scroll mode (DECSET) when mouse capture is active, ensuring trackpads scroll the transcript properly. 
*   **[#5242](https://github.com/Hmbown/CodeWhale/pull/5242) feat(tui/subagent): Resume interrupted children:** Allows agents to resume interrupted sub-tasks from their last checkpoint via a `followup` trigger, preventing expensive long-running tasks from restarting from scratch.
*   **[#5225](https://github.com/Hmbown/CodeWhale/pull/5225) feat(acp): Expose tools over session/prompt:** Massively upgrades the Agent Communication Protocol (ACP) by allowing editor bridges (like Zed) to actually execute file, search, git, patch, and shell tools, turning ACP from a chat-only bridge into a true coding agent.
*   **[#5130](https://github.com/Hmbown/CodeWhale/pull/5130) feat(runtime-api): MCP server config lifecycle:** Adds mutation endpoints to create, update, and remove MCP servers dynamically via HTTP.
*   **[#5240](https://github.com/Hmbown/CodeWhale/pull/5240) feat(tui/shell): Surface wait elapsed time:** Exposes Bash `wait`/delta `duration_ms` directly in the tool content so the model can accurately gauge execution time, preventing busy-polling on stalled tasks.
*   **[#5077](https://github.com/Hmbown/CodeWhale/pull/5077) perf(prompt): Progressively disclose fresh context:** Optimizes prompt token usage by capping ambient skills blocks at 2,400 characters while keeping lazy-loading capabilities for skill bodies.

### 5. Feature Request Trends
Analyzing recent issues and PRs, three major feature trends emerge:
1.  **Comprehensive Runtime APIs:** A strong push to expose every TUI capability (memory, goals, verifier receipts, MCP, skills) over authenticated HTTP endpoints. This signals a shift towards making CodeWhale a headless backend for managed web/desktop clients.
2.  **Advanced Agentic Orchestration:** Features focusing on resilient agent execution. The community wants smarter subagents—ones that can be interrupted, paused, isolated, and resumed from checkpoints without breaking workflow state or hitting recursion limits.
3.  **Seamless Editor Integration (ACP):** Expanding the ACP server so that third-party editors (Zed, VS Code) act as fully-fledged UIs for CodeWhale, capable of executing real git/shell operations rather than just streaming text.

### 6. Developer Pain Points
*   **Context Window Fallbacks:** Models silently defaulting to 128K limits (Issue #5244) is a major frustration, causing premature context compaction on modern models with 1M+ capacities. 
*   **Provider Switching Overhead:** The inability to save multiple API keys simultaneously (Issue #5250) causes unnecessary friction for developers multi-tracking models like GLM and DeepSeek.
*   **Rust Build Friction:** Maintainers and contributors were heavily impacted by architectural choices that tied git SHAs to compilation triggers and forced fat LTO on local builds (Issues #5245, #5246). Decoupling these has been a massive quality-of-life improvement.
*   **macOS Compatibility:** The "underwater shell" interaction system introduced in v0.9.0 continues to cause permission friction on macOS, breaking native tools like `open` and `osascript` (Issue #4828).

</details>