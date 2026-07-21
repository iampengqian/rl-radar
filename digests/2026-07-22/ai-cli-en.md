# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-21 22:16 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 22, 2026 community digests.

### 1. Ecosystem Overview
The AI developer tools ecosystem has decisively shifted from simple code completion to complex, multi-agent orchestration. As CLI tools evolve into heavyweight desktop applications and IDE companion extensions, they face traditional software engineering challenges—such as memory leaks, cross-platform UI bottlenecks, and sandbox security—alongside LLM-specific hurdles like context compaction and token management. The Model Context Protocol (MCP) has become the universal standard for tool integration, though it currently introduces significant stability and authentication friction across the board. Meanwhile, the open-source community is driving deep architectural refactors, pushing tools toward Abstract Syntax Tree (AST) codebase mapping, resilient local LLM execution, and standardized agent communication frameworks.

### 2. Activity Comparison
*Note: The following data reflects the specific volume of highlights tracked in today's (July 22, 2026) community digests.*

| Tool | Hot Issues Tracked | Key PRs Tracked | Release Status | Primary Focus Area |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 10 | `v2.1.217` (Released) | MCP reliability & Plugin cross-platform stability |
| **OpenAI Codex** | 10 | 10 | `v0.145.0` (Released) | Windows process management & Sandbox networking |
| **Gemini CLI** | 10 | 10 | Nightly (Auto-published) | Agent loop prevention & Security hardening |
| **GitHub Copilot CLI**| 10 | 1 | `v1.0.74-0` (Released) | MCP spec parity & Payload limit handling |
| **Kimi Code CLI** | 5 | 1 | None (Split versions) | Model tool-calling formatting & TUI rendering |
| **OpenCode** | 10 | 10 | None | V2 runtime stabilization & TUI performance |
| **Pi (pi-mono)** | 10 | 10 | `v0.81.1` (Released) | Local LLM (`llama.cpp`) integration & Session state |
| **Qwen Code** | 10 | 10 | `v0.20.1` (Released) | Subagent lifecycle management & SDK bugs |
| **DeepSeek TUI** | 10 | 10 | None (Pre-`v0.9.1`) | UI performance & Fleet agent orchestration |

### 3. Shared Feature Directions
*   **MCP Integration & Parity (Claude, Codex, Copilot CLI):** The Model Context Protocol is universally adopted but fragile. Teams are actively building full spec support (resources, prompts) and fixing silent failures where remote MCP servers authenticate but hide tools from the LLM.
*   **Advanced Context & Auto-Compaction (Copilot CLI, Pi, OpenCode, Qwen):** As sessions grow, tools are hitting hard physical limits (e.g., Copilot's 5MB CAPI limit). Teams are rushing to build smarter, configurable auto-compaction thresholds and SQLite-backed state management to prevent context overflows and infinite compaction loops.
*   **Sub-Agent State & Lifecycle Management (Gemini, Qwen, DeepSeek, OpenCode):** The industry is moving past single-shot agents. There is a massive push to define strict agent roles (Planner, Worker, Reviewer), enable background task pausing/resuming, and prevent "state bleed" where subagents accidentally crash or mutate the parent session's model. 
*   **Local LLM & Custom Provider Support (Pi, DeepSeek, Pi):** To reduce reliance on API rate limits, tools are adding native `llama.cpp` routing, local model dynamic fetching, and breaking away from hardcoded token catalogs to support self-hosted environments.
*   **Cross-Platform Terminal UI Optimization (Codex, DeepSeek, OpenCode, Kimi):** Teams are aggressively fixing terminal rendering issues. This includes batching Solid reactive events (OpenCode), separating UI acknowledgment from network prep (DeepSeek), and fixing input blockages on Windows.

### 4. Differentiation Analysis
*   **Enterprise vs. Local Focus:** GitHub Copilot CLI and Claude Code are heavily focused on enterprise constraints, BYOK (Bring Your Own Key) reasoning limits, and deep IDE/VCS integrations. Conversely, Pi is differentiating by natively targeting offline/edge deployments via `llama.cpp` and Linux ARM64/Termux environments.
*   **Architectural Approaches to Coding:** Gemini CLI is uniquely investigating AST-aware codebase mapping, aiming to feed the LLM precise method bounds rather than raw text. DeepSeek TUI is focusing on a rigid "Fleet" architecture with four strictly defined agent roles, whereas OpenAI Codex is doubling down on skill-based lexical routing.
*   **OS-Level Sandboxing:** Codex is uniquely dealing with deep OS-level process management, implementing Windows Job Objects and complex RPC payloads for HTTP/SOCKS5 traffic attribution within its sandbox.

### 5. Community Momentum & Maturity
*   **Hyper-Active Iteration:** OpenAI Codex, Gemini CLI, and Claude Code demonstrate the highest momentum, seamlessly balancing massive community bug reports (Windows WMI storms, MCP failures) with rapid, core-level merges. 
*   **Structured Community Growth:** OpenCode and DeepSeek TUI show highly mature open-source ecosystems. They are successfully managing complex V2 refactors (OpenCode) and strict release lockdown gates (DeepSeek) utilizing heavy community PR contributions.
*   **Emerging/Targeted Ecosystems:** Kimi Code CLI and Pi are showing strong, niche momentum. Kimi is navigating rapid model iteration (k2.5/k3) challenges, while Pi is fostering a tightly knit community around local execution and deterministic builds.

### 6. Trend Signals
*   **The "Terminal Bloatware" Era:** AI CLIs are no longer lightweight wrappers. The migration to Electron-like desktop apps and heavy embedded runtimes (e.g., Bun, Rust) is causing severe system friction, evidenced by unbounded WMI queries, OS daemon thrashing (`syspolicyd`), and zombie process accumulation.
*   **LLM Constitution/Adherence Friction:** As agents gain autonomy, they increasingly reject explicit instructions. DeepSeek's "Constitution breaks" (ignoring project scripts to write temporary ones) and Gemini's false success reporting after hitting `MAX_TURNS` signal a need for better behavioral evaluation frameworks.
*   **Vendor Lock-in Pushback:** Developers demand portability. OpenAI Codex's introduction of an `/import` feature to seamlessly migrate configurations from Cursor and Claude CLI highlights that frictionless ecosystem switching is becoming a competitive advantage.
*   **Security & Secret Redaction Gaps:** As agents read local file systems and execute bash commands, local secret redaction (like Gemini's Auto Memory leakage risk before LLM extraction) and sandbox worktree isolation (DeepSeek, Codex) are emerging as critical, non-negotiable baseline requirements.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical community highlights report for the Claude Code Skills ecosystem based on recent repository activity.

### 1. Top Skills Ranking
While exact comment counts are obfuscated, the following open PRs represent the most actively discussed and critical contributions, addressing both core functionality and ecosystem expansion:

*   **Skill-Creator Eval Fixes (`run_eval.py` & `run_loop.py`)**
    *   **Functionality:** Comprehensive overhaul of the skill-creator's evaluation pipeline, fixing a critical bug where `run_eval.py` reported 0% recall, effectively breaking the description-optimization loop. Includes cross-platform fixes for Windows subprocess handling and artifact installation.
    *   **Discussion Highlights:** This is the most heavily impacted area in the repo. Multiple interconnected PRs ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1323](https://github.com/anthropics/skills/pull/1323)) attempt to resolve issues mirrored in highly active community issues (#556, #1169).
    *   **Status:** Open
*   **Meta-Skills: Security and Quality Analyzers**
    *   **Functionality:** Introduces two meta-skills to the marketplace: one for comprehensive 5-dimension quality analysis of Claude Skills, and another for security auditing.
    *   **Discussion Highlights:** Gains traction as the community grapples with trust boundaries in third-party skills.
    *   **Status:** Open ([#83](https://github.com/anthropics/skills/pull/83))
*   **Self-Audit Reasoning Quality Gate**
    *   **Functionality:** A universal skill that performs mechanical file verification and a 4-dimension reasoning audit on AI output before final delivery, mitigating hallucinated file paths.
    *   **Discussion Highlights:** Seen as a proactive solution to AI reliability, closely tied to the reasoning pipeline proposal in Issue #1385.
    *   **Status:** Open ([#1367](https://github.com/anthropics/skills/pull/1367))
*   **Frontend-Design Skill Improvements**
    *   **Functionality:** Revises the frontend-design skill to be more actionable, internally coherent, and token-efficient.
    *   **Discussion Highlights:** Focuses on shifting skills from being "educational documentation" to strict, executable operational instructions for Claude.
    *   **Status:** Open ([#210](https://github.com/anthropics/skills/pull/210))
*   **Document Typography Quality Control**
    *   **Functionality:** Prevents common typographic errors in AI-generated documents, such as orphan words, widow paragraphs, and numbering misalignments.
    *   **Discussion Highlights:** Praised for solving "invisible" formatting issues that users rarely explicitly prompt for but expect in finished documents.
    *   **Status:** Open ([#514](https://github.com/anthropics/skills/pull/514))

### 2. Community Demand Trends
Analysis of the most active Issues reveals concentrated community demand in four key areas:

*   **Security and Trust Boundaries:** The most highly discussed issue ([#492](https://github.com/anthropics/skills/issues/492)) highlights severe vulnerabilities where community skills masquerade under the `anthropic/` namespace. There is massive demand for verifiable provenance and built-in security permission gates.
*   **Enterprise Collaboration & Integration:** Users are clamoring for org-wide skill sharing ([#228](https://github.com/anthropics/skills/issues/228)) to eliminate manual Slack/Teams file sharing. Additionally, native integration with enterprise platforms like AWS Bedrock ([#29](https://github.com/anthropics/skills/issues/29)) and SharePoint Online ([#1175](https://github.com/anthropics/skills/issues/1175)) is highly requested.
*   **Self-Regulating Agent Logic:** The community wants pre-task calibration and adversarial review pipelines ([#1385](https://github.com/anthropics/skills/issues/1385), [#1329](https://github.com/anthropics/skills/issues/1329)). There is a strong shift toward "meta-skills" that allow Claude to govern its own context window and audit its outputs before delivery.
*   **MCP Standardization:** Users want Skills abstracted into Model Context Protocol (MCP) servers ([#16](https://github.com/anthropics/skills/issues/16)), turning static skills into dynamic, API-driven software endpoints.

### 3. High-Potential Pending Skills
These active PRs address specific, high-friction pain points and are strong candidates for imminent merging:

*   **Windows Compatibility Fixes for Skill-Creator ([#1050](https://github.com/anthropics/skills/pull/1050)):** Fixes critical `subprocess.Popen` and encoding bugs that completely break the skill creation loop on Windows 11. Solves the highly-upvoted Issue #1061.
*   **DOCX Tracked Change ID Collision Fix ([#541](https://github.com/anthropics/skills/pull/541)):** Fixes document corruption in the DOCX skill when adding tracked changes to documents with existing bookmarks (resolving shared OOXML `w:id` collisions).
*   **UTF-8 Validation in Skill-Creator ([#362](https://github.com/anthropics/skills/pull/362)):** Replaces character-based length checks with byte-length validation to prevent Rust panics when evaluating multi-byte/unicode characters in skill descriptions.
*   **PDF Case-Sensitivity Fix ([#538](https://github.com/anthropics/skills/pull/538)):** A crucial, quick-win bugfix that corrects uppercase file references (`REFERENCE.md` to `reference.md`) in the PDF skill, which currently breaks deployment on case-sensitive operating systems like Linux.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **native cross-platform reliability (specifically fixing the skill-creator's broken evaluation loop) and strict security provenance to safely share skills across enterprise environments.**

---

Here is the Claude Code community digest for July 22, 2026.

### 1. Today's Highlights
The release of **v2.1.217** introduces quality-of-life updates like emoji shortcode autocomplete and critical warnings for disk/transcript write failures. However, the community is currently dominated by high-volume bug reports surrounding **Fable 5** integration, with many Max plan users reporting that the model is incorrectly walled behind paywalls. Additionally, local MCP (Model Context Protocol) tool discovery and execution have seen a significant spike in regressions across both the CLI and Desktop apps.

### 2. Releases
*   **[v2.1.217](https://github.com/anthropics/claude-code/releases)**
    *   **Features:** Added emoji shortcode autocomplete in the prompt input (e.g., typing `:hea` suggests ❤️). This can be disabled via the `emojiCompletionEnabled` setting.
    *   **Reliability:** Added active warnings when transcript writes fail (such as when the disk is full) or if session saving is disabled due to an inheritance setting.

### 3. Hot Issues
1.  **[#79337](https://github.com/anthropics/claude-code/issues/79337) [BUG] Fable 5 prompts 'usage credits required' on Max plan:** A high-impact regression where Max plan users are silently downgraded to Opus 4.8 when trying to use Fable 5, accompanied by false prompts to purchase usage credits.
2.  **[#75577](https://github.com/anthropics/claude-code/issues/75577) [BUG] Task tools silently disabled on newer models:** Task management tools (`TaskCreate`, `TaskGet`, etc.) are silently failing and reported as nonexistent on Opus 4.8, Sonnet 5, and Fable 5 due to a model-ID gating bug.
3.  **[#79926](https://github.com/anthropics/claude-code/issues/79926) [BUG] Desktop stops dispatching tools to local stdio MCP servers:** As of July 21, Claude Desktop is failing to route tool calls to local MCP servers, though remote connectors remain unaffected.
4.  **[#78826](https://github.com/anthropics/claude-code/issues/78826) [BUG] MCP server connects but tools aren't exposed:** A widespread issue where remote HTTP MCP servers authenticate and connect successfully, but their tools are never actually exposed to the LLM.
5.  **[#79221](https://github.com/anthropics/claude-code/issues/79221) [BUG] "Auto-fix CI & address comments" unresponsive:** A UI regression in the Claude Desktop CI monitoring panel where the auto-fix checkbox cannot be checked, and auto-merge is greyed out.
6.  **[#70584](https://github.com/anthropics/claude-code/issues/70584) [BUG] Ctrl+R reverse search limited to 18h window:** The terminal UI's reverse search only surfaces the last ~150 prompts, contradicting the "everywhere" scope and locking developers out of older history.
7.  **[#79942](https://github.com/anthropics/claude-code/issues/79942) [BUG] Auto-updater lacks cross-session lock:** When a new update drops, every running Claude Code session downloads the full 265MB binary independently, heavily taxing network resources.
8.  **[#79934](https://github.com/anthropics/claude-code/issues/79934) Subagent routing bug:** When nested subagents dispatch a `SendMessage` to "main", the message is routed to the root session rather than the orchestrator that spawned it.
9.  **[#79921](https://github.com/anthropics/claude-code/issues/79921) [BUG] Local sessions freeze until input is received elsewhere:** A strange concurrency bug where Desktop and VS Code sessions locally freeze until another active session receives user input.
10. **[#79939](https://github.com/anthropics/claude-code/issues/79939) [Bug] Subdirectory search returns Fable safeguards:** Executing a subdirectory search inexplicably returns Fable safeguard warnings instead of file results.

### 4. Key PR Progress
1.  **[#79898](https://github.com/anthropics/claude-code/pull/79898) Add Claude apps gateway on AWS example deployment assets:** Adds reference deployment artifacts for running the Claude apps gateway on AWS via Amazon Bedrock (Closed/Merged).
2.  **[#79620](https://github.com/anthropics/claude-code/pull/79620) feat: Add text-to-speech read-aloud hook:** Implements a multi-platform TTS hook designed to improve accessibility (screen reader parity) and hands-free coding workflows.
3.  **[#79889](https://github.com/anthropics/claude-code/pull/79889) fix(hookify): runnable without CLAUDE_PLUGIN_ROOT:** Resolves a path resolution issue that caused hook entrypoints to silently skip setup when the root environment variable was missing.
4.  **[#79644](https://github.com/anthropics/claude-code/pull/79644) fix: quote `${CLAUDE_PLUGIN_ROOT}` in plugin hook commands:** Fixes an unquoted path bug causing bundled plugins to fail on macOS due to spaces in the `~/Library/Application Support/` directory.
5.  **[#79873](https://github.com/anthropics/claude-code/pull/79873) fix(hookify): event: prompt rules never fire:** Corrects a payload key mismatch (`user_prompt` vs `prompt`) that prevented user prompt submission rules from triggering.
6.  **[#78532](https://github.com/anthropics/claude-code/pull/78532) gateway/gcp: PG16 Cloud SQL edition fix:** Updates Terraform examples to prevent Cloud SQL creation failures on PostgreSQL 16+ defaults.
7.  **[#79645](https://github.com/anthropics/claude-code/pull/79645) fix(hookify): read rule and transcript files as UTF-8:** Enforces UTF-8 encoding to prevent Windows cp1252 decode failures on files containing emojis or special characters.
8.  **[#79640](https://github.com/anthropics/claude-code/pull/79640) fix(ralph-wiggum): use disable-model-invocation:** Refactors a custom command frontmatter key to properly prevent the model from invoking user-only commands.
9.  **[#79643](https://github.com/anthropics/claude-code/pull/79643) docs(commit-commands): align /commit-push-pr description:** Fixes command documentation to clarify that PR descriptions are generated from staged changes only, not branch history.
10. **[#79642](https://github.com/anthropics/claude-code/pull/79642) docs(plugin-dev): correct marketplace name:** Updates documentation to point to the correct bundled marketplace name (`claude-code-plugins`).

### 5. Feature Request Trends
*   **VS Code Extension Parity:** Developers are requesting that the VS Code extension match the Desktop app's functionality, specifically asking for a "Background Tasks" panel ([#75863](https://github.com/anthropics/claude-code/issues/75863)).
*   **Accessibility (a11y) Improvements:** A continued push for better support of screen readers like NVDA and JAWS within the Terminal UI ([#11002](https://github.com/anthropics/claude-code/issues/11002)).
*   **Enterprise/Multi-Account Workflows:** Strong demand for seamless multi-account switching in the Claude Mobile app without relying on shared emails ([#36151](https://github.com/anthropics/claude-code/issues/36151)).

### 6. Developer Pain Points
*   **MCP Reliability:** The Model Context Protocol ecosystem is highly unstable right now. Developers are deeply frustrated by custom and remote MCP servers showing as "Connected" while their tools are silently dropped and never exposed to the model.
*   **Subagent & Session State Management:** Complex agent architectures are fragile. Broken message routing in nested subagents and local freezing bugs highlight that state management needs optimization for heavy, multi-session workloads.
*   **Cross-Platform Path Handling:** A recurring, frustrating theme in community PRs is the failure of plugin hooks on macOS and Windows due to unquoted file paths and a lack of strict UTF-8 encoding defaults.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 22, 2026.

### 1. Today's Highlights
OpenAI Codex rolled out version `0.145.0`, introducing experimental paginated thread history with search and sub-agent support, alongside a highly requested `/import` feature for migrating settings from Cursor and Claude Code. The community has been highly active in reporting severe performance regressions on the Windows standalone desktop app, specifically unbounded WMI queries and `taskkill.exe` spawning storms. In response, the engineering team shipped a massive batch of core PRs focused on sandboxing, routing, and aggressively fixing Windows process tree management.

### 2. Releases
**[rust-v0.145.0](https://github.com/openai/codex/releases/tag/rust-v0.145.0)**
*   **Thread Management:** Introduced experimental paginated thread history with efficient resume, search, persisted names, sub-agent support, and memories.
*   **Ecosystem Integration:** Expanded the `/import` command to seamlessly migrate configurations, MCP servers, plugins, sessions, and project rules from competing tools like Cursor and Claude Code.

### 3. Hot Issues
*   **[#25719: macOS `syspolicyd`/`trustd` CPU runaway](https://github.com/openai/codex/issues/25719)** - The Codex Desktop app for macOS is repeatedly triggering system policy daemons, causing severe CPU and memory spikes. *Why it matters:* With 344 upvotes, this remains a top-tier reliability blocker for Mac developers.
*   **[#8745: Built-in LSP integration for Codex CLI](https://github.com/openai/codex/issues/8745)** - Users are heavily requesting (430 upvotes) native Language Server Protocol (LSP) support for auto-detection and diagnostics within the CLI. *Why it matters:* This would significantly reduce hallucinated code paths and improve code accuracy.
*   **[#2998: IDE-integrated diff / approval](https://github.com/openai/codex/issues/2998)** - A request to bring the CLI’s terminal-based red/green diff approval flow directly into the IDE experience. *Why it matters:* Developers want visual, in-editor change management rather than context-switching to a terminal.
*   **[#33776: Windows Desktop `taskkill.exe`/`conhost.exe` WMI storm](https://github.com/openai/codex/issues/33776)** - The Windows desktop client is spawning hundreds of background processes, exhausting WMI provider quotas and degrading the OS UI (DWM). *Why it matters:* A critical performance degradation making the Windows standalone app nearly unusable for affected users.
*   **[#20214: Codex App freezes on Windows 11 despite high-end hardware](https://github.com/openai/codex/issues/20214)** - Frequent stuttering and UI freezes on Windows. *Why it matters:* Indicates that recent Windows builds have systemic performance overhead issues.
*   **[#34260: Unbounded taskkill cleanup storm exhausts WMI](https://github.com/openai/codex/issues/34260)** - A duplicate/confirming report of the WMI process exhaustion issue, highlighting that the issue is actively reproducible across different user environments.
*   **[#15310: Desktop automations fall back to workspace-write sandbox](https://github.com/openai/codex/issues/15310)** - Scheduled tasks ignore the `danger-full-access` sandbox policy until a user manually interacts with the UI. *Why it matters:* Breaks unattended, automated agentic workflows.
*   **[#33685: Weekly limit draining like the old 5-hour limit](https://github.com/openai/codex/issues/33685)** - Despite transitioning from a 5-hour to a weekly rate limit, Pro users report normal usage (like GPT-5.5 High) depleting their quota alarmingly fast. *Why it matters:* Widespread frustration over perceived throttling and quota calculations.
*   **[#7291: VSCode extension failed to revert changes](https://github.com/openai/codex/issues/7291)** - The VS Code extension silently fails to revert file changes when users reject an agent's proposal. *Why it matters:* High risk of leaving codebases in a broken state during rapid iteration.
*   **[#34606: macOS Simulator workflows exhaust RAM and disk](https://github.com/openai/codex/issues/34606)** - Computer Use agent interacting with Xcode simulators destabilizes the entire host system by exhausting memory and disk space. *Why it matters:* Highlights the need for better resource bounding during Computer Use sessions.

### 4. Key PR Progress
*   **[PR #34624: Terminate Windows process trees with job objects](https://github.com/openai/codex/pull/34624)** - Directly addresses the critical Windows CPU issue by assigning processes to Windows Job Objects to ensure child processes terminate correctly without spawning WMI storms.
*   **[PR #34625: Fix Windows TUI navigation key handling](https://github.com/openai/codex/pull/34625)** - Fixes a bug where navigation keys in the Windows TUI were registering as literal escape bytes due to inherited virtual terminal input modes.
*   **[PR #34621: Load paginated model context across rollout lineages](https://github.com/openai/codex/pull/34621)** - Underlying infrastructure for the v0.145.0 release, ensuring efficient reverse-scanning of thread lineages for paginated histories.
*   **[PR #34588: Bind MCP calls to captured catalog revisions](https://github.com/openai/codex/pull/34588)** - Prevents race conditions where an MCP tool call is executed against an outdated or replaced tool catalog, ensuring strict consistency between model intent and tool execution.
*   **[PR #34620: Add exec-server network policy callback types](https://github.com/openai/codex/pull/34620)** - Enhances sandbox networking by defining new RPC payloads to attribute HTTP/HTTPS/SOCKS5 traffic to specific processes.
*   **[PR #34605: Allow naming sessions with `/new` and `/clear`](https://github.com/openai/codex/pull/34605)** - Quality-of-life improvement allowing developers to explicitly name their agent sessions from the CLI.
*   **[PR #34581: Add routing-card lexical skill selection](https://github.com/openai/codex/pull/34581)** - Introduces a bounded, weighted exact-match system for the agent to better autonomously select appropriate skills/tools based on lexical routing.
*   **[PR #34598: Skip missing paths in filesystem sandbox entries](https://github.com/openai/codex/pull/34598)** - Improves sandbox setup logic so that read-only protections for `.git` or `.codex` directories don't accidentally materialize missing folders as ACL targets.
*   **[PR #34613: Route Windows sandbox proxy traffic by restricting SID](https://github.com/openai/codex/pull/34613)** - Stabilizes elevated Windows sandboxes by keeping managed-proxy ports alive while preserving environment attribution per process.
*   **[PR #30985: Let idle auto-attached threads unload](https://github.com/openai/codex/pull/30985)** - Optimizes memory/resource usage by allowing implicit, unengaged core threads to unload after 30 minutes instead of persisting indefinitely.

### 5. Feature Request Trends
*   **Native Tooling Integration (LSP):** A massive push (led by #8745) to give the CLI agent native access to Language Server Protocols, enabling real-time linting and type-checking rather than relying purely on LLM inference.
*   **Seamless IDE/UI Workflows:** Developers want the advanced diffing, reverting, and approval workflows currently constrained to the terminal to function natively inside VS Code and Cursor extensions (#2998, #7291).
*   **Cross-Tool Migration:** The ecosystem is shifting towards frictionless transitions. The newly added `/import` feature for Claude Code/Cursor proves the team is leaning into making it easy for developers to switch to Codex without losing MCP server configs or project rules.
*   **Advanced Thread Management:** Demand for complex, multi-agent histories with memory and persistent naming.

### 6. Developer Pain Points
*   **Windows Standalone App Instability:** Windows users are experiencing extreme frustration with the desktop application. The unbounded spawning of `taskkill.exe`, exhaustion of WMI providers, and conflicts with Windows Defender are causing severe system degradation (#33776, #34260, #20214).
*   **macOS Daemon Thrashing:** Similar to Windows, Mac users are fighting system-level resource hogging, specifically with `syspolicyd` and `trustd` triggering endlessly (#25719).
*   **Rate Limit Opacity:** Pro and Business tier users feel that the shift from a 5-hour limit to a weekly limit didn't actually increase their usable throughput, with quota draining unexpectedly fast during normal coding sessions (#33685).
*   **Sandbox & Automation Edge Cases:** Automated and scheduled tasks running in the background frequently fail to respect intended sandbox boundaries (e.g., falling back to `workspace-write`), breaking unattended agent loops (#15310).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 22, 2026.

### 1. Today's Highlights
The Gemini CLI ecosystem is heavily focused on **agent stability, security hardening, and enterprise readiness**. The community and core maintainers are actively addressing critical workflow blockers, such as infinite agent loops, shell execution memory leaks, and dangerous remote code execution (RCE) vulnerabilities in the A2A server. Concurrently, there is a massive architectural push toward AST-aware codebase mapping and robust component-level behavioral evaluations to systematically improve agent reliability.

### 2. Releases
*   **v0.52.0-nightly.20260721.gacae7124b**
    The latest nightly build was automatically bumped and published. 
    [View Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)

### 3. Hot Issues
1.  **[ #22323 ] Subagent recovery after MAX_TURNS is reported as GOAL success:** A critical logic flaw where the `codebase_investigator` falsely reports success after hitting the maximum turn limit, hiding the fact that it was interrupted and did no actual analysis.
2.  **[ #21409 ] Generalist agent hangs:** A high-frustration issue where the CLI hangs indefinitely (up to an hour) when deferring to the generalist agent for simple tasks. Users are currently forced to explicitly disable sub-agents.
3.  **[ #24353 ] Robust component-level evaluations (Epic):** Maintainers are scaling up behavioral evaluations across 6 supported Gemini models to systematically track and fix agent regressions.
4.  **[ #22745 ] AST-aware file reads and codebase mapping:** A major architectural investigation into using Abstract Syntax Trees to allow agents to read precise method bounds in a single tool call, drastically reducing token noise and multi-turn misalignment.
5.  **[ #25166 ] Shell command execution gets stuck:** Users report the UI hangs on "Awaiting user input" long after a simple shell command has successfully completed in the background.
6.  **[ #21968 ] Low utilization of custom skills and sub-agents:** Developers note that Gemini rarely triggers custom skills (e.g., gradle/git) autonomously, requiring explicit user prompts to invoke them.
7.  **[ #26522 ] Auto Memory infinite retry loops:** The Auto Memory background agent keeps re-reading and retrying "low-signal" transcripts indefinitely instead of marking them as processed.
8.  **[ #24246 ] 400 API Error with > 128 tools:** The agent fails to handle tool scope efficiently, resulting in API rejections when users have a large number of tools (e.g., via MCP) enabled.
9.  **[ #26525 ] Auto Memory data leakage risk:** A security concern where local transcripts containing secrets are sent to the extraction model *before* redaction occurs.
10. **[ #21983 ] Browser subagent fails in Wayland:** The browser agent fails completely for Linux users utilizing Wayland display servers.

### 4. Key PR Progress
1.  **[ PR #28469 ] fix(core): rotate session ID on model fallback:** Fixes a stateful API error (`[API Error: Please submit a new query...]`) by rotating the session ID when falling back to `gemini-2.5-flash`.
2.  **[ PR #28472 ] fix(core): sequentially verify cached credentials:** Surgically fixes a fatal authentication regression (Exit Code 41) that crashed the VS Code GCA Agent Mode.
3.  **[ PR #28403 ] fix(core): block $VAR expansion bypass:** Patches an incomplete security check (GHSA-wpqr-6v78-jr5g) that allowed malicious bash variable expansion patterns to bypass security gates.
4.  **[ PR #28397 ] fix(core): remove synchronous I/O from shell tool:** Replaces blocking sync filesystem calls with async alternatives (`fs.mkdtempSync` → `node:fs/promises`), eliminating UI stuttering and frame drops in the terminal UI.
5.  **[ PR #28394 ] fix(core): remove temp files on background process exit:** Resolves an OS-level resource leak where temporary directories were permanently left behind after background shell executions.
6.  **[ PR #28389 ] fix(core): add real-world time budget to prevent infinite loops:** Introduces a shared deadline to prevent infinite-loop, event-driven state transitions in autonomous agents.
7.  **[ PR #28388 ] fix(core): scope tools.core wildcard deny:** Fixes a bug where setting `tools.core` to an empty array accidentally disabled all trusted MCP tools due to an overly broad wildcard DENY rule.
8.  **[ PR #28305 ] feat(evals): add tool call formatter:** Greatly improves debugging by printing a compact, numbered timeline of agent tool calls and arguments directly in the console when a behavioral eval fails.
9.  **[ PR #28411 ] feat(caretaker): auto-close feature requests:** Implements an automated triage bot that posts explanatory comments before auto-closing feature requests, allowing the core team to focus on stability.
10. **[ PR #28386 ] fix(vscode): track activation disposables:** Fixes a memory leak in the VS Code extension where JavaScript comma expressions caused disposable registrations to be dropped.

### 5. Feature Request Trends
*   **Deep AST Codebase Integration:** Users want the CLI to move beyond naive text searching and leverage AST-aware tools to intelligently map code, read specific method bounds, and navigate package structures efficiently.
*   **Resilient Browser Automation:** Strong demand for a `browser_agent` that doesn't "fail-fast" on locked profiles or Wayland environments, including automatic session takeover and lock recovery.
*   **Safer Autonomous Operations:** Developers are requesting built-in guardrails that actively prevent the agent from executing destructive shell commands (like `git reset --force` or dangerous DB modifications) without safer fallbacks.
*   **Trajectory Transparency:** The ability to view and share sub-agent decision trajectories via existing tools like `/chat share` for better debugging and behavioral analysis.

### 6. Developer Pain Points
*   **Agent Halting & Looping:** The highest frequency of frustration stems from agents hanging indefinitely on simple tasks, getting stuck in interactive prompts (like Vite app creation), or looping silently until manually cancelled.
*   **Subagent Unpredictability:** Developers find it highly unreliable that subagents often execute without permission, fail to invoke custom skills when contextually relevant, or falsely report successful task completion when interrupted by MAX_TURNS.
*   **Memory & Telemetry Noise:** The Auto Memory system requires immediate attention, as it currently creates infinite retry loops, generates excessive logging, skips invalid patches silently, and poses potential data redaction risks before context is sent to the LLM.
*   **Tool Scope Overwhelm:** The agent's inability to dynamically narrow its tool scope when a user has a heavily customized environment (>128 tools) leads to API failures and degraded reasoning performance.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for July 22, 2026.

### 1. Today's Highlights
GitHub Copilot CLI rolled out **v1.0.74-0**, introducing granular model selection specifically for plan mode (`/model plan`), alongside general availability refinements for session search. The community remains highly focused on expanding Model Context Protocol (MCP) capabilities and addressing context management limitations, as seen in several active discussions around CAPI payload limits and token compaction.

### 2. Releases
**v1.0.74-0** & **v1.0.73** (Recent Updates)
*   **Added:** Introduced `/model plan` (or `/model --plan`) to specify or clear a model used exclusively during plan mode. ([Release Notes](https://github.com/github/copilot-cli/releases))
*   **Improved:** Resume search now matches session titles accurately regardless of whitespace differences. 
*   **Fixed/Improved:** Anthropic subagents now continue working seamlessly when additional directories are configured. Relative links in custom agent instructions are now resolved correctly from the agent file's location.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[#1305](https://github.com/github/copilot-cli/issues/1305) Support CIMD for Remote OAuth MCP Servers:** A highly requested feature (26 👍) asking for CIMD (Continuous Integration and Modeling Domain) support for Remote MCP Servers, building on previous Dynamic Client Registration (DCR) OAuth capabilities.
*   **[#4188](https://github.com/github/copilot-cli/issues/4188) Regression on plan-mode:** Users report a regression where plan mode now blocks necessary shell commands (like `gh cli`), severely limiting the agent's ability to enrich plans autonomously.
*   **[#4012](https://github.com/github/copilot-cli/issues/4012) Bug with BYOK: reasoning effort not supported:** A impacting bug (16 👍) for Bring-Your-Own-Key (BYOK) users where the `--reasoning-effort max` flag fails on custom models like `glm-5.2:cloud` despite valid configurations.
*   **[#2193](https://github.com/github/copilot-cli/issues/2193) Default model configuration for /fleet subagents:** Users want the ability to set default models globally or per-project for `/fleet` spawned subagents (14 👍), rather than restating it in every prompt.
*   **[#1518](https://github.com/github/copilot-cli/issues/1518) Support MCP resources and prompts:** Currently, Copilot CLI only supports MCP tools. This popular issue (14 👍) requests full MCP spec support, including `resources` and `prompts`.
*   **[#3622](https://github.com/github/copilot-cli/issues/3622) Copy to clipboard silently fails on Windows:** A persistent UI bug where copying agent output to the clipboard silently fails on Windows, leaving users with previous clipboard contents.
*   **[#4183](https://github.com/github/copilot-cli/issues/4183) Auto-compaction does not prevent CAPI 5 MB failure:** In heavy tool-use sessions, serialized CAPI Responses requests can exceed a 5MB body limit and crash the session before auto-compaction can intervene. 
*   **[#1688](https://github.com/github/copilot-cli/issues/1688) Add configurable auto-compaction threshold:** Users request a configurable compaction threshold in `config.json` because context bloat severely degrades performance on slower, high-capacity models well before the default limits trigger.
*   **[#4163](https://github.com/github/copilot-cli/issues/4163) copilot CLI 1.0.71 does not reap child processes:** A critical platform issue on Linux where finished subprocesses accumulate as "zombies" under the Copilot PID at a rate of roughly 2 per minute.
*   **[#1803](https://github.com/github/copilot-cli/issues/1803) Support MCP resources/read primitive:** A targeted feature request to allow MCP servers to expose data through the `resources/read` primitive, essential for autonomous workflows.

### 4. Key PR Progress
*Note: Only 1 Pull Request showed activity in the last 24h.*

*   **[#3163](https://github.com/github/copilot-cli/pull/3163) ViewSonic monitor:** A currently open PR related to GitHub Actions runner infrastructure monitoring. (Author: tijuks)

### 5. Feature Request Trends
Based on the latest issues, the community is pushing heavily for three major capabilities:
*   **Full MCP Specification Parity:** Users are moving beyond basic tool execution and requesting robust support for MCP resources (`resources/read`, `resources/subscribe`), prompts, and dynamic tool list updating mid-turn.
*   **Advanced Agent Orchestration:** Developers want more control over subagent environments. Requests include default models for `/fleet` subagents, explicit inline invocation for agent chaining, per-subagent AI credit tracking, and better retention for completed background agents.
*   **Deeper Customization via Config:** There is a strong desire to bypass UI interactions for efficiency, such as setting configurable auto-compaction thresholds, quickly switching between pre-set model configurations, and broadening `.agents` folder discovery for non-Git repositories.

### 6. Developer Pain Points
*   **Context Window & Payload Limits:** Developers are frustrated by how fast heavy tool-use sessions hit the 5MB CAPI request limit or bloat context windows, resulting in latency or crashes before auto-compaction kicks in.
*   **BYOK Friction:** Custom model integrations are experiencing API-level friction, particularly with streaming `reasoning_content` deltas and unsupported reasoning effort flags.
*   **Plan Mode Constraints:** Plan mode is currently viewed as too restrictive. By blocking shell commands to enforce safety/sandboxing, the CLI is stripping developers of essential context-gathering tools (like issue reading via `gh`).
*   **MCP Authentication & Integration Complexity:** OAuth flows for remote MCP servers are proving brittle—particularly around silent refresh tokens, required runtime registry headers, and BigInt serialization failures that abort ongoing agent tasks.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest — 2026-07-22

## 1. Today's Highlights
The past 24 hours in the Kimi Code CLI community were highly active on the troubleshooting front, with developers primarily stress-testing newer models (k2.5, k3) and the recently introduced `0.28.1` version. The spotlight is on a critical tool-calling failure in the k2.5 model and a community-submitted PR fixing sequential chained edits in the `StrReplaceFile` tool. 

## 2. Releases
*No new releases were rolled out in the last 24 hours. The community remains split between the stable `0.19.2` and the newer `0.28.1`.*

## 3. Hot Issues
Here are the most noteworthy issues raised or updated by the community:

*   **[#2527](https://github.com/MoonshotAI/kimi-cli/issues/2527) [bug] k2.5 model tool calling completely invalid + goal mode infinite loop (must appear)**
    *Why it matters:* A critical blocker. When using the k2.5 model, tool calling (specifically Bash) fails with "Tool not found" regardless of the formatting used (`functions_Bash`, JSON, etc.), causing an infinite loop in goal mode. 
    *Community reaction:* High priority due to the "must appear" reproducibility; users are currently blocked from using goal mode with k2.5.
*   **[#2526](https://github.com/MoonshotAI/kimi-cli/issues/2526) [bug] StrReplaceFile reports too few total replacements for chained edits**
    *Why it matters:* Impacts automated refactoring. `StrReplaceFile` counts replacements against the *original* file rather than the progressively edited content, causing dependent/chained edits to fail validation.
*   **[#2529](https://github.com/MoonshotAI/kimi-cli/issues/2529) [bug] Numpad keys not registering in input box**
    *Why it matters:* A UI/UX blocker on Windows environments. Clicking right-side numpad numbers yields no response in the CLI input box, likely due to missing key event listeners.
*   **[#2528](https://github.com/MoonshotAI/kimi-cli/issues/2528) [bug] Output too long when using shell mode**
    *Why it matters:* UX degradation. When executing shell commands (using `!`), standard commands like `git status` produce overwhelmingly long outputs, cluttering the terminal context.
*   **[#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) [bug] Interface shaking and re-rendering conversation from scratch**
    *Why it matters:* Severe terminal UX issue on Linux (v0.19.2). The CLI interface inexplicably "shakes" and completely re-renders the whole conversation history from the beginning, disrupting developer flow.

## 4. Key PR Progress
*   **[#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) [OPEN] fix(tools): count StrReplaceFile replacements against the running content**
    *Description:* A highly targeted fix contributed by the community to resolve Issue #2526. It refactors the edit counting mechanism in `StrReplaceFile` to validate against the *running* (progressively edited) content rather than the original file blob. This enables reliable chained edits.

## 5. Feature Request Trends
*   **Advanced Terminal Output Management:** Developers are requesting smarter truncation, folding, or summarization for native shell executions (`!` commands) to prevent context window pollution (Issue #2528).
*   **Robust Multi-Model Tool Calling:** There is a strong demand for standardized, fail-safe tool-calling execution as developers rapidly adopt newer models like k2.5 and k3 (Issue #2527).
*   **Terminal Rendering Stability:** Requests for smoother, diff-based UI updates instead of full conversational re-renders to prevent UI jitter (Issue #2474).

## 6. Developer Pain Points
The primary frustrations today revolve around **regression in tool execution** and **terminal UX quirks**. Developers are heavily frustrated by broken chained file edits (where the tool fails to recognize text generated by a previous step in the same operation). Additionally, CLI input handling on Windows (missing numpad support) and unstable terminal rendering (screen shaking/full re-renders) are breaking immersion and requiring workarounds. The complete failure of k2.5's goal mode highlights that model-context formatting needs better abstraction or fallback mechanisms in the CLI layer.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 22, 2026.

### 1. Today's Highlights
OpenCode's community activity remains highly focused on stabilizing the V2 runtime and refining the desktop experience. The engineering team and contributors merged significant V2 refactors—including keybind migrations and TUI performance optimizations—while the community actively reported recurring edge cases with OpenCode Go subscriptions, LLM streaming hangs, and Windows localhost connections.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** - With 117 comments, memory leak tracking remains the biggest open discussion. The team is actively requesting manual heap snapshots from users rather than LLM-generated solutions to isolate the root causes.
*   **[[BUG] OpenCode Go subscription paid successfully but workspace shows "Insufficient balance"](https://github.com/anomalyco/opencode/issues/37790)** - A blocking billing state mismatch where Stripe processes payments, but the workspace fails to reflect the OpenCode Go subscription.
*   **[[FEATURE]: keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012)** - Users are pushing back against UI navigation changes, requesting a toggle to keep the legacy layout for easier, centralized access to workspace options.
*   **[[BUG] Subagents hang indefinitely after quick bash tool call](https://github.com/anomalyco/opencode/issues/33028)** - A critical execution bug where agents hang indefinitely after a bash command. The LLM stream neither completes nor times out, requiring a manual process kill.
*   **[[BUG]: Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119)** - A regression or schema mismatch breaking the app completely for users updating to recent versions. 
*   **[Windows ARM64 native: OpenTUI fails to initialize](https://github.com/anomalyco/opencode/issues/19130)** - While non-interactive commands work on Windows ARM64, the TUI crashes on initialization due to a `bun:ffi` dynamic linking error.
*   **[opencode-go (Console Go) provider returns 400/401/500](https://github.com/anomalyco/opencode/issues/37056)** - High-volume error rates reported when accessing subscribed models via proxy, particularly failing on large request payloads (300KB+).
*   **[OpenCode immediately enters auto-compaction loop](https://github.com/anomalyco/opencode/issues/30680)** - An infinite compaction loop that burns tokens and halts generation entirely, even in fresh, empty directories.
*   **[[BUG] Tool calls fail with SchemaError...](https://github.com/anomalyco/opencode/issues/34652)** - A provider-specific bug where the native Anthropic SDK returns nested array arguments as JSON strings instead of real arrays, breaking tools like `todowrite`.
*   **[[Windows] @ai-sdk/openai-compatible cannot connect to localhost:9877](https://github.com/anomalyco/opencode/issues/38140)** - Local development is blocked on Windows because the embedded Bun runtime fails to fetch `127.0.0.1` URLs, a path that works perfectly under Node.js.

### 4. Key PR Progress
Recent pull requests highlight a strong push towards V2 stability and tooling improvements:

*   **[feat(plugin): expose app metadata (#38179)](https://github.com/anomalyco/opencode/pull/38179)** - Centralizes user-agent formatting and exposes app metadata (host name, version, channel) to V2 Effect and Promise plugin contexts.
*   **[refactor(tui): use command IDs for v2 keybinds (#37174)](https://github.com/anomalyco/opencode/pull/37174)** - Migrates CLI config keybinds to canonical command IDs for V2 while preserving legacy V1 plugin shims.
*   **[feat(codemode): support generator functions (#38172)](https://github.com/anomalyco/opencode/pull/38172)** - Introduces robust support for sync and async generator functions with lazy `yield` delegation and async cleanup.
*   **[fix(acp): stage file edits for native review (#38198)](https://github.com/anomalyco/opencode/pull/38198)** - Resolves an underlying gap in the Agent Communication Protocol (ACP) by staging file edits properly instead of writing them twice.
*   **[perf(tui): batch event propagation (#38177)](https://github.com/anomalyco/opencode/pull/38177)** - Significant TUI performance optimization that batches Solid reactive propagation during server-event bursts without dropping protocol events.
*   **[fix(opencode): skip tui migration when tui.jsonc exists (#38194)](https://github.com/anomalyco/opencode/pull/38194)** - Fixes a config migration bug that repeatedly forced migration even if a valid `.jsonc` config existed.
*   **[fix(github): remove eyes reaction when `use_github_token: true` (#38185)](https://github.com/anomalyco/opencode/pull/38185)** - Cleans up CI/CD noise by preventing OpenCode from adding the 👀 reaction to issues when running via GitHub Actions.
*   **[feat(session-ui): render mermaid code blocks (#38175)](https://github.com/anomalyco/opencode/pull/38175)** - Enhances chat UX by natively rendering Mermaid fenced code blocks as diagrams.
*   **[fix(opencode): use most-specific-pattern-wins (#37936)](https://github.com/anomalyco/opencode/pull/37936)** - Squashes long-standing path permission bugs by replacing "last-match-wins" with "most-specific-pattern-wins" logic.
*   **[fix(core): identify spawned subagents (#38189)](https://github.com/anomalyco/opencode/pull/38189)** - Prefixes child prompts with explicit spawned-subagent context, helping the core model better understand delegation state.

### 5. Feature Request Trends
Analyzing recent issues, three major feature trends emerge:
*   **Workspace & Session Persistence:** Users want more control over where data is stored locally. There are active requests to save session data directly to project folders ([#14292](https://github.com/anomalyco/opencode/issues/14292)) rather than a global directory, and to auto-name sessions based on the first prompt ([#38163](https://github.com/anomalyco/opencode/issues/38163)).
*   **Granular Command Execution:** Developers are requesting better handling of long-running terminal commands, specifically asking for OpenCode to step away or background processes rather than indefinitely blocking the agent loop ([#38070](https://github.com/anomalyco/opencode/issues/38070)).
*   **Remote & Mobile Access:** There is a growing desire to decouple OpenCode from the desktop CLI, evidenced by community contributions like a Telegram Assistant integration to delegate coding tasks remotely ([#38130](https://github.com/anomalyco/opencode/issues/38130)).

### 6. Developer Pain Points
*   **Cross-Platform Networking Constraints:** Windows users are hitting persistent friction with networking and native binaries. The embedded Bun runtime failing to hit `localhost` ([#38140](https://github.com/anomalyco/opencode/issues/38140)) and WSL sidecar boot sequences fataling the desktop app ([#37481](https://github.com/anomalyco/opencode/issues/37481)) are major blockers for local AI development on Windows.
*   **OpenCode Go Reliability:** Subscription validation and upstream proxying for the "Go" tier are causing widespread friction, with users locked out of paid features due to balance errors ([#37790](https://github.com/anomalyco/opencode/issues/37790)) and frequent 400/500 errors on large payloads ([#37056](https://github.com/anomalyco/opencode/issues/37056)).
*   **Agent Loop Fragility:** Developers are frustrated by silent failures in agent execution, particularly streaming timeouts ([#33028](https://github.com/anomalyco/opencode/issues/33028)) and token-burning auto-compaction loops ([#30680](https://github.com/anomalyco/opencode/issues/30680)) that require manual intervention to escape.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for July 22, 2026, based on the latest GitHub activities.

### 1. Today's Highlights
Pi v0.81.1 and v0.81.0 were released, introducing native local LLM management via `llama.cpp` and verifiable release source archives. The community was highly active in addressing v0.81.0 upgrade instabilities, including critical crashes on session resumption and auto-compaction overflows. Significant architectural progress was also made behind the scenes, with new PRs focusing on SQLite session storage, OpenRouter OAuth integration, and provider-reported cost tracking.

### 2. Releases
*   **v0.81.1** ([Release Notes](https://github.com/earendil-works/pi/blob/v0.81.1/README.md))
    *   Added verifiable release source archives: GitHub releases now include deterministic, checksummed source archives with instructions for rebuilding standalone binaries.
*   **v0.81.0** ([Release Notes](https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/llama-cpp.md))
    *   Introduced local `llama.cpp` model management: Users can now connect to a `llama.cpp` router, search and download Hugging Face models, and explicitly load or unload models with live progress tracking.

### 3. Hot Issues
1.  **[CLOSED] Official local LLM provider extension** ([#3357](https://github.com/earendil-works/pi/issues/3357)): Highly requested feature (43 👍) to dynamically fetch model lists from `baseUrl`, vastly improving hookups to local runtimes like `llama.cpp`, Ollama, and LM Studio.
2.  **[CLOSED] Claude models failing ~20% of edits** ([#6278](https://github.com/earendil-works/pi/issues/6278)): New Claude models were inventing extra keys (e.g., `new_text_x`, `closeenough`) during tool validation, causing high failure rates in coding sessions.
3.  **[OPEN] Move off Shrinkwrap** ([#5653](https://github.com/earendil-works/pi/issues/5653): Installing `pi-ai` and `pi-coding-agent` together results in duplicated on-disk modules, breaking the module-level API provider registry.
4.  **[CLOSED] Pi crashes on resume after 0.81.0 update** ([#6915](https://github.com/earendil-works/pi/issues/6915)): A critical regression where resuming a previous session triggers `TypeError: streamFunction is not a function`. 
5.  **[OPEN] API for enhancing agent message markdown** ([#6747](https://github.com/earendil-works/pi/issues/6747)): Request from `xl0` for extensions to mutate agent message representations (TUI chrome) without altering the content sent to the LLM, specifically to enable a formula renderer.
6.  **[OPEN] External editor slow to launch** ([#6774](https://github.com/earendil-works/pi/issues/6774)): Writing `Ctrl+G` temp files directly into `os.tmpdir()` causes severe launch delays on systems with crowded temp directories.
7.  **[CLOSED] OpenAI SDK retries sleep full `Retry-After`** ([#6911](https://github.com/earendil-works/pi/issues/6911)): SDKs were sleeping for days based on HTTP 429 responses, completely ignoring `AbortSignal` and freezing the agent.
8.  **[OPEN] `find` tool fails with path patterns on Windows** ([#6817](https://github.com/earendil-works/pi/issues/6817)): Glob patterns featuring path separators (like `src/**/*.ts`) return zero results on Windows environments.
9.  **[OPEN] Auto-compaction never triggers until provider overflow** ([#6879](https://github.com/earendil-works/pi/issues/6879)): Long-running agentic sessions blow past the 100% context window threshold, only compacting when the provider API outright rejects the request.
10. **[CLOSED] Autocomplete crash with non-string values** ([#6920](https://github.com/earendil-works/pi/issues/6920)): Typing `/` in interactive mode crashes Pi via `TypeError: value.startsWith is not a function` if a provider returns a non-string autocomplete value.

### 4. Key PR Progress
1.  **[OPEN] Native OpenRouter OAuth support** ([#6927](https://github.com/earendil-works/pi/pull/6927)): Implements PKCE S256 and ephemeral localhost callbacks for secure, native OpenRouter browser authentication.
2.  **[OPEN] Add Amazon Bedrock Mantle provider** ([#6216](https://github.com/earendil-works/pi/pull/6216)): Integrates Bedrock's new Mantle OpenAI Responses API for streamlined AWS routing.
3.  **[CLOSED] Never enable OpenAI/Anthropic SDK `Retry-After` sleeps** ([#6912](https://github.com/earendil-works/pi/pull/6912)): Forces SDK `maxRetries` to 0 to prevent multi-day agent freezes, keeping retries strictly at the agent level where they are abortable.
4.  **[CLOSED] Compaction & branch summarization follow retry policy** ([#6901](https://github.com/earendil-works/pi/pull/6901)): Resolves mid-stream socket drops by applying standard retry policies to context compaction.
5.  **[OPEN] Use provider-reported cost** ([#6881](https://github.com/earendil-works/pi/pull/6881)): Automatically reads billed costs from gateway responses (like Vercel AI) instead of computing them via local catalog rates.
6.  **[OPEN] `AgentHarness` execution tools** ([#6916](https://github.com/earendil-works/pi/pull/6916)): Introduces an abstraction layer to pass arbitrary app-specific contexts (like Execution Environments and session IDs) into agent tools.
7.  **[CLOSED] SQLite session storage** ([#6594](https://github.com/earendil-works/pi/pull/6594)): Major backend refactor to store session data in SQLite, optimizing context loading by only walking up to the last compaction node.
8.  **[OPEN] Generate reasoning options from `models.dev`** ([#6928](https://github.com/earendil-works/pi/pull/6928)): Automates the syncing of supported thinking levels directly from `models.dev/api.json`.
9.  **[OPEN] Render image blocks in interactive messages** ([#6572](https://github.com/earendil-works/pi/pull/6572): Allows users to attach clipboard images seamlessly into interactive user prompts without inserting raw temp file paths.
10. **[CLOSED] Speed up external editor launch** ([#6903](https://github.com/earendil-works/pi/pull/6903)): Fixes slow `Ctrl+G` launches by moving temp prompt files into an isolated `mkdtemp` subdirectory.

### 5. Feature Request Trends
*   **Advanced Context & State Management:** Users want more control over the agent's memory, requesting features like durable remote sessions ([#6929](https://github.com/earendil-works/pi/issues/6929)), stable session entry IDs for syncing, and manual hiding of environment variables to sandbox the agent ([#6923](https://github.com/earendil-works/pi/issues/6923)).
*   **Granular TUI & Chrome Customization:** There is a strong desire to customize the UI without impacting LLM logic, such as rendering markdown formulas ([#6747](https://github.com/earendil-works/pi/issues/6747)) or customizing the hardcoded prefixes for assistant thinking blocks and user messages ([#6876](https://github.com/earendil-works/pi/issues/6876)).
*   **Resilient Local & Edge Deployment:** Requests for Linux ARM64 binaries via Termux ([#6899](https://github.com/earendil-works/pi/issues/6899)) and options to download text-only models for local `llama.cpp` execution ([#6921](https://github.com/earendil-works/pi/issues/6921)) highlight a push to use Pi in offline or constrained environments.

### 6. Developer Pain Points
*   **v0.81.0 Regressions:** The latest release introduced severe stability issues, notably the `streamFunction` crash on session resume ([#6915](https://github.com/earendil-works/pi/issues/6915)) and TUI autocomplete crashes ([#6920](https://github.com/earendil-works/pi/issues/6920)).
*   **Dependency & Bloat Conflicts:** Node module duplication continues to plague complex setups. The Shrinkwrap issue ([#5653](https://github.com/earendil-works/pi/issues/5653)) splits module-level maps, and developers are frustrated by the lack of straightforward onboarding/installation documentation ([#6907](https://github.com/earendil-works/pi/issues/6907)).
*   **Uncontrolled Background Operations:** Unattended agent loops are locking up systems. The auto-compaction logic waits too long to intervene ([#6879](https://github.com/earendil-works/pi/issues/6879)), and third-party SDKs easily hijack the CLI with infinite sleep timers on rate limits ([#6911](https://github.com/earendil-works/pi/issues/6911)).
*   **Cross-Platform Inconsistencies:** Windows support shows fragility, specifically with file path globbing in the `find` tool ([#6817](https://github.com/earendil-works/pi/issues/6817)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-22.

### 1. Today's Highlights
Qwen Code officially rolled out **v0.20.1**, stabilizing the autofix and release pipeline alongside new prebuilt binaries for the `cua-driver` Rust crate (now featuring relative-coordinate support). The community is highly focused on hardening the subagent architecture, with multiple high-discussion issues addressing OpenAI tool-call compatibility, model context bleeding, and background agent lifecycle management.

### 2. Releases
*   **[v0.20.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1)**: Introduces a label-driven takeover for autofix and resolves forced-dispatch green no-op issues. 
*   **[v0.20.0-nightly.20260721](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721)**: Nightly iteration continuing the autofix and release pipeline enhancements.
*   **[cua-driver-rs v0.7.3](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.3)**: Ships codesigned/notarized macOS universal binaries, Linux x86_64/arm64 (glibc 2.31+), and Windows binaries. Enables relative coordinate tracking.

### 3. Hot Issues
*   **[#7156](https://github.com/QwenLM/qwen-code/issues/7156) [P1] Subagent mutates main session model:** A critical bug where subagent execution silently overrides the main session's chosen LLM, leading to fatal context overflows. 
*   **[#7316](https://github.com/QwenLM/qwen-code/issues/7316) [P2] OpenAI toolCall incompatibility breaks subAgents:** Certain OpenAI-compatible models return empty strings for optional parameters (like `working_dir`), resulting in mutually exclusive field validation errors that completely break subagent launches.
*   **[#7056](https://github.com/QwenLM/qwen-code/issues/7056) [P2] VS Code Companion connection failure:** Users report "Qwen ACP process exited unexpectedly" errors when trying to connect the IDE companion extension on Windows.
*   **[#7306](https://github.com/QwenLM/qwen-code/issues/7306) [P2] Harden tool-output budgeting:** An ongoing effort to improve wire-level observability and artifact lifecycle management. Phase 1 successfully reduced model-facing characters by over 14,000.
*   **[#7427](https://github.com/QwenLM/qwen-code/issues/7427) [P2] Web-shell artifact fetch spam:** The `qwen serve` web shell repeatedly displays "Load artifacts failed" error toasts during automatic background refreshes.
*   **[#7404](https://github.com/QwenLM/qwen-code/issues/7404) [P3] CLI update check timeouts:** The startup update check times out too quickly, particularly when the CLI is loading long running previous sessions.
*   **[#7433](https://github.com/QwenLM/qwen-code/issues/7433) [P2] SDK misreports local models:** When using local OpenAI-compatible models via ACP, the SDK incorrectly defaults and reports `coder-model(qwen-oauth)`.
*   **[#7287](https://github.com/QwenLM/qwen-code/issues/7287) [P2] Auto-memory write rejection:** `MEMORY.md` is loaded into the system prompt but skipped by `FileReadCache`, causing the model's first programmatic attempt to update the file to be blocked.
*   **[#7332](https://github.com/QwenLM/qwen-code/issues/7332) [P1] BadRequestError on thinking-only models:** Internal operations (like context compaction) incorrectly send `enable_thinking=false` to thinking-only models (e.g., qwen3.8-max-preview), causing 400 errors.
*   **[#7452](https://github.com/QwenLM/qwen-code/issues/7452) [P2] Cron parser deviation:** The `*/N` step logic in day-of-month/day-of-week deviates from standard vixie-cron semantics, causing unexpected scheduling.

### 4. Key PR Progress
*   **[#7426](https://github.com/QwenLM/qwen-code/pull/7426) Keep completed background agents resident:** Implements persistent background agent runtimes, allowing `send_message` to revive completed tasks without rebuilding state.
*   **[#7455](https://github.com/QwenLM/qwen-code/pull/7455) Lazy-load Undici:** Major performance optimization moving the 2 MiB Undici HTTP client out of the eager startup closure to drastically improve ACP cold-start times.
*   **[#7302](https://github.com/QwenLM/qwen-code/pull/7302) Prior session `@` mentions:** Adds interactive autocomplete for referencing past sessions via `@`, injecting a read-only transcript summary into the current context.
*   **[#7343](https://github.com/QwenLM/qwen-code/pull/7343) Ignore empty `working_dir` placeholders:** Fixes OpenAI model incompatibility by normalizing empty string parameters before Agent routing.
*   **[#7458](https://github.com/QwenLM/qwen-code/pull/7458) Detect stale SSE cursors:** Hardens the daemon's event replay mechanism using random epoch tokens to prevent mis-resumes across daemon restarts.
*   **[#7256](https://github.com/QwenLM/qwen-code/pull/7256) Strip daemon secrets:** Security fix preventing spawned shell subprocesses from inheriting the `QWEN_SERVER_TOKEN` environment variable.
*   **[#6486](https://github.com/QwenLM/qwen-code/pull/6486) Model toggle hotkey:** Adds a `Ctrl+F` shortcut to seamlessly switch between primary and alternate models mid-session.
*   **[#7395](https://github.com/QwenLM/qwen-code/pull/7395) Custom skill directories:** Introduces a `skills.directories` setting, allowing users to share custom skills (SKILL.md) across multiple AI coding harnesses.
*   **[#7268](https://github.com/QwenLM/qwen-code/pull/7268) Hot-reload workspace trust:** Enables runtime updates to workspace trust policies without requiring a full daemon restart.
*   **[#6723](https://github.com/QwenLM/qwen-code/pull/6723) Stabilize prompt cache:** Keeps provider tool declaration sets stable after deferred tool discovery to prevent unnecessary cache invalidation.

### 5. Feature Request Trends
*   **Advanced Subagent Management:** Users are strongly requesting better lifecycle controls for background agents, specifically the ability to pause, resume, and revive completed subagents rather than treating them as single-shot executions.
*   **Cross-Provider Tool Schema Standardization:** High demand for making Qwen Code's tool schemas (especially for `agent` and `working_dir`) more resilient to the quirks of third-party OpenAI-compatible models.
*   **Custom Skill Portability:** Requests to decouple skills from the core binary, allowing developers to load custom agent behaviors from external directories.
*   **Web Shell Maturity:** Continuous feature requests to bring desktop-grade CLI features (like workspace context switching and reliable authentication) to the `qwen serve` web interface.

### 6. Developer Pain Points
*   **Model Bleed & Context Overflows:** Developers are frustrated by subagents secretly changing the parent session's model, resulting in lost context and fatal 400 errors.
*   **Update Check Timeouts:** Startup latency caused by loading large previous sessions triggers network timeouts during the CLI's version check, breaking the startup flow.
*   **Windows Environment Friction:** Windows developers continue to face installation and sandbox execution hurdles (e.g., PowerShell hash validation failures, Docker bind-mount `chdir` errors).
*   **Auto-Memory Friction:** The automated `MEMORY.md` manager frequently hits permission/write blocks because the file isn't registered in the read cache before the model attempts an update.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek-TUI (CodeWhale) for July 22, 2026.

# CodeWhale Community Digest (2026-07-22)

## 1. Today's Highlights
The CodeWhale project is currently in an intense lock-down phase for the **v0.9.1 release**, with the core team merging dozens of architectural refactors focused on sub-agent reliability, UI performance, and unified tooling contracts. Significant breakthroughs were made today in resolving long-standing UI/UX bottlenecks, including streaming timeout diagnostics and TUI input lag. Meanwhile, the open-source community actively contributed crucial compatibility patches for self-hosted models, domestic LLM providers, and cross-platform builds like HarmonyOS.

## 2. Releases
No new official version cuts were released in the last 24 hours. The project remains on the `v0.9.0` public build as maintainers finalize the massive `v0.9.1` integration and dogfooding gate ([Issue #4650](https://github.com/Hmbown/CodeWhale/issues/4650)).

## 3. Hot Issues
Here are the 10 most noteworthy issues driving today's development:

1. **[Release Blocker] Completion Board & Dogfood Gate ([#4650](https://github.com/Hmbown/CodeWhale/issues/4650))**
   * **Why it matters:** This is the master tracking issue for the v0.9.1 freeze. It prevents premature publishing until exact local dogfooding and integration evidence are met.
2. **UI Freeze on Enter Key ([#4605](https://github.com/Hmbown/CodeWhale/issues/4605))**
   * **Why it matters:** A P1 high-frequency bug affecting Windows/pwsh users where pressing "Enter" to send froze the TUI for up to 1.2 seconds. Community reaction was highly supportive of immediate hotfixing.
3. **Broken Long-Output Scrolling ([#4603](https://github.com/Hmbown/CodeWhale/issues/4603))**
   * **Why it matters:** The TUI viewport silently truncated long diffs and logs beyond recovery. This sparked discussions on improving terminal buffer management.
4. **CodeWhale Ignoring Project Constitution ([#4032](https://github.com/Hmbown/CodeWhale/issues/4032))**
   * **Why it matters:** A highly discussed (41 comments) behavioral bug where the agent ignored user-provided scripts to write its own temporary ones. It highlights ongoing struggles with prompt-adherence reliability.
5. **Unknown Self-Hosted Model Token Caps ([#4655](https://github.com/Hmbown/CodeWhale/issues/4655))**
   * **Why it matters:** Developers hosting local models hit a hard 4K output token fallback for uncataloged model aliases, severely throttling generation limits.
6. **Hardcoded xAI Device-Code OAuth Path ([#4410](https://github.com/Hmbown/CodeWhale/issues/4410))**
   * **Why it matters:** A mismatch between CodeWhale's hardcoded auth path and the official Grok CLI broke `/auth xai-device`. 
7. **Collapsing Agent Roles ([#3934](https://github.com/Hmbown/CodeWhale/issues/3934))**
   * **Why it matters:** Standardizes the internal "Fleet" architecture into exactly four strict roles: Planner, Worker, Reviewer, and Verifier. 
8. **Worktree Context Leakage in Sub-Agents ([#4674](https://github.com/Hmbown/CodeWhale/issues/4674))**
   * **Why it matters:** Revealed a sandboxing risk where sub-agent Bash commands without an explicit `cwd` executed in the parent workspace instead of their isolated worktree.
9. **Insufficient `edit_file` Approval Preview ([#4659](https://github.com/Hmbown/CodeWhale/issues/4659))**
   * **Why it matters:** Users reported that the approval UI hardcodes a 3-line limit for diffs, making reviewing larger code changes impossible before execution.
10. **Environment Mapping for Contributors ([#4227](https://github.com/Hmbown/CodeWhale/issues/4227))**
    * **Why it matters:** A proposal to build a dedicated Skill/workflow that helps contributors automatically sync, rebuild, and map the CodeWhale dev environment, addressing the friction of the project's high PR velocity.

## 4. Key PR Progress
1. **[PR #4654](https://github.com/Hmbown/CodeWhale/pull/4654) - fix(tui): Acknowledge Enter before slow send prep**
   * Resolves the severe TUI input lag by separating UI acknowledgment from the actual network preparation phase.
2. **[PR #4653](https://github.com/Hmbown/CodeWhale/pull/4653) - test(tui): Lock long-output transcript scrolling**
   * Implements an E2E PTY scenario to permanently prevent output truncation bugs (paired with Issue #4603).
3. **[PR #4673](https://github.com/Hmbown/CodeWhale/pull/4673) - fix(shell): Default no-cwd shell commands to context.workspace**
   * Fixes sub-agent sandbox isolation by ensuring commands run in their specific worktree rather than the parent workspace.
4. **[PR #4656](https://github.com/Hmbown/CodeWhale/pull/4656) - fix(route): Honor explicit limits for unknown local models**
   * Fixes the 4K token fallback issue, allowing explicit configuration limits to bypass the static catalog for self-hosted models.
5. **[PR #4657](https://github.com/Hmbown/CodeWhale/pull/4657) - fix(streaming): Report progress on idle timeouts**
   * Greatly improves SSE debugging by distinguishing between a true prefill stall (0 bytes) and a mid-stream generation stall.
6. **[PR #4658](https://github.com/Hmbown/CodeWhale/pull/4658) - feat(runtime-api): Add provider registry + switch endpoints**
   * Adds three new API endpoints to allow GUI clients to switch models atomically without nuking existing provider configurations.
7. **[PR #4652](https://github.com/Hmbown/CodeWhale/pull/4652) - feat(cli): Add public --no-project-config**
   * Introduces reproducible headless execution by ignoring workspace-specific configs, crucial for automated testing harnesses.
8. **[PR #4613](https://github.com/Hmbown/CodeWhale/pull/4613) - fix(tui): Sanitize Moonshot tool parameters per MFJS spec**
   * Critical compatibility fix for Kimi/Moonshot models, modifying tool schemas to comply with their strict JSON object root requirements.
9. **[PR #4566](https://github.com/Hmbown/CodeWhale/pull/4566) - update tui Cargo.toml for HarmonyOS build**
   * Unblocks compilation for HarmonyOS PC environments by adjusting `portable-pty` dependencies.
10. **[PR #4487](https://github.com/Hmbown/CodeWhale/pull/4487) - chore(release): Reconcile late v0.9.1 intake**
    * The master PR merging all late-breaking v0.9.1 lanes into `main` and reconciling community contributor credits.

## 5. Feature Request Trends
- **Tooling Unification:** Developers strongly desire a shift away from fragmented internal execution tools toward a single, unified `Bash` tool ([Issue #4625](https://github.com/Hmbown/CodeWhale/issues/4625)) and a single Skills manager ([Issue #4651](https://github.com/Hmbown/CodeWhale/issues/4651)).
- **Better Self-Hosted & Custom Provider Support:** There is a strong push to support custom aliases dynamically, specifically mirroring Kimi Code's configuration model ([Issue #4660](https://github.com/Hmbown/CodeWhale/issues/4660)) and fetching complete model lists for local providers ([PR #4370](https://github.com/Hmbown/CodeWhale/pull/4370)).
- **Sub-Agent Orchestration:** Deep interest in robust multi-agent workflows. The community is pushing for distinct role separation (Planner, Worker, Reviewer, Verifier) and bounded task delegation without scope collision ([Issue #4598](https://github.com/Hmbown/CodeWhale/issues/4598), [Issue #4647](https://github.com/Hmbown/CodeWhale/issues/4647)).

## 6. Developer Pain Points
- **TUI Reliability Bottlenecks:** Input blockages (Enter key lag), broken scrolling on long outputs, and overly restrictive hardcoded diff previews in the approval pipeline have been frustrating daily users.
- **Prompt Adhesion ("Constitution" breaks):** Agents frequently abandoning established context to write unnecessary temporary scripts undermines trust in autonomous execution loops.
- **Rigid Catalog Assumptions:** Built-in assumptions about model capabilities and token limits frequently break when routing through self-hosted endpoints or non-standard model wrappers.

</details>