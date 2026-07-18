# AI CLI Tools Community Digest 2026-07-19

> Generated: 2026-07-18 22:13 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 19, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tools ecosystem in mid-2026 is characterized by a rapid transition from simple terminal assistants to fully autonomous, multi-agent desktop and cloud environments. As tools integrate deeper into operating systems and external services, communities are uniformly demanding stricter security boundaries, better cost transparency, and reliable subagent orchestration. Major players like OpenAI and Anthropic are iterating on massive context windows (approaching 1M+ tokens) and unified desktop applications, which has introduced a new class of complex bugs related to operating system lifecycle management, memory leaks, and network streaming. Meanwhile, open-source alternatives and specialized CLIs are gaining traction by focusing on local model support, deep codebase semantic understanding (AST), and frictionless developer workflows.

### 2. Activity Comparison
*Note: GitHub issue/PR numbers are sequential and grow continuously. The following table reflects the magnitude of project scale based on current issue/PR indices, alongside today's specific development activity.*

| Tool | Issue Scale (Index) | PR Scale (Index) | Today's Active Issues | Today's Active PRs | Release Status (24h) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | ~78,000+ | ~78,000+ | 10 Highlights | 4 Active | **Released** (v2.1.214) |
| **OpenAI Codex** | ~34,000+ | ~34,000+ | 10 Highlights | 10 Active | **Released** (v0.144.6) |
| **Gemini CLI** | ~28,000+ | ~28,000+ | 10 Highlights | 8 Active | **Nightly** (v0.52.0) |
| **GitHub Copilot CLI**| ~4,000+ | ~4,000+ | 10 Highlights | 0 Active | **None** |
| **OpenCode** | ~37,000+ | ~37,000+ | 10 Highlights | 10 Active | **None** (Dev/Next branches) |
| **Qwen Code** | ~7,000+ | ~7,000+ | 10 Highlights | 10 Active | **Released** (v0.19.12) |
| **Pi** | ~6,000+ | ~6,000+ | 10 Highlights | 10 Active | **None** |
| **Kimi Code CLI** | ~2,500+ | ~2,500+ | 2 Highlights | 3 Active | **None** |
| **DeepSeek TUI** | ~4,000+ | ~4,000+ | 10 Highlights | 10 Active | **None** (Prepping v0.9.1/2) |

### 3. Shared Feature Directions
Based on the community digests, several unified developer needs have emerged across the ecosystem:
*   **Subagent Orchestration & Reliability:** Developers are struggling with multi-agent setups. *OpenAI Codex* is seeing massive disk I/O from zombie subagents, *Gemini CLI* agents falsely report success when hitting turn limits, and *Qwen Code* subagents are mutating main session models. Users demand better delegation logic, strict lifecycle management, and traceability.
*   **Cost & Context Transparency:** As context windows expand (e.g., GPT-5.6 hitting 1M tokens), developers are increasingly anxious about silent token drains. *Claude Code* users report extreme cache-read consumption during browser automation, *Copilot CLI* users are begging for persistent UI status bars, and *Pi* users are noting incorrect cost calculations for cache writes.
*   **Robust Execution Security & Sandboxing:** With agents running shell commands, there is a massive push for safe execution. *Gemini CLI* and *Claude Code* are actively patching directory traversal and variable expansion bypasses. *DeepSeek TUI* and *Kimi Code* users are requesting granular, persistent permission rules (allow vs. deny logic) to safely restrain autonomous edits.
*   **Frictionless Agentic Controls:** Developers want zero "flow-state" interruptions. *Kimi Code*, *OpenAI Codex*, and *Qwen Code* communities are all requesting inline commands (e.g., quick slash commands) to dynamically adjust reasoning/thinking levels and swap models mid-session.

### 4. Differentiation Analysis
*   **Platform Architecture Focus:** *Claude Code* and *OpenAI Codex* are heavily focused on unified Desktop/Cloud applications (Cowork, Windows MSIX), bringing unique OS-level friction (UI freezes, file permission bugs). In contrast, tools like *Pi* and *Kimi Code* remain hyper-focused on terminal UI (TUI) optimizations and startup latency.
*   **Codebase Comprehension:** *Gemini CLI* is differentiating by pushing for AST (Abstract Syntax Tree) aware file reads and zero-dependency OS sandboxing, aiming to move beyond naive `grep` searches and provide precise, token-efficient codebase mapping.
*   **Ecosystem Agnosticism vs. Native Integration:** *OpenCode* and *DeepSeek TUI* are heavily leaning into local model ecosystems (LM Studio, Ollama) and alternative providers (OpenCode Zen, Grok, Kimi K3). Meanwhile, *GitHub Copilot CLI* and *Claude Code* are tightly integrating with their respective native ecosystems (GitHub Projects, Chrome WebMCP, Claude Design).
*   **Workflow Automation:** *Qwen Code* is uniquely pivoting its daemon to act as a persistent background agent, focusing heavily on automated scheduled tasks and direct delivery of results to IM channels (Telegram, Chat).

### 5. Community Momentum & Maturity
*   **High Momentum & Rapid Iteration:** **OpenAI Codex**, **Gemini CLI**, **Qwen Code**, and **OpenCode** show immense momentum, each backing up 8-10 active PRs in a single day. They are rapidly scaling their systems to handle new paradigms (e.g., OpenAI's audio handling, Gemini's AST evaluations, Qwen's IM integrations).
*   **Mature but Stagnated Pipelines:** **GitHub Copilot CLI** and **Kimi Code CLI** show slower engineering momentum today (0 and 3 active PRs, respectively). Copilot CLI appears to be in a maintenance/triage phase, fighting regressions in v1.0.71 rather than shipping new features.
*   **Niche / Research Phase:** **Pi** and **DeepSeek TUI** (CodeWhale) have highly active bug-fixing cycles (10 PRs each). They are focused on deep architectural hardening—Pi on network streaming resilience and DeepSeek TUI on strict execution policies and preventing agent "infinite loops."

### 6. Trend Signals
*   **The "Context Blind Spot" is the new bottleneck:** AI coding tools have successfully proven they can handle massive context sizes, but the infrastructure to manage the cost and visibility of that context has failed to keep pace. Vendors and plugin developers who build robust cost-telemetry (like ACP integrations) and token-guardrails will win enterprise trust.
*   **Agent Autonomy requires "Mid-Turn" Intervention:** Developers are growing frustrated by agents that run away with tasks (DeepSeek TUI, Copilot CLI plan-mode). The next iteration of TUI/CLI interfaces must natively support queuing mid-turn interventions, pausing execution, and injecting context without waiting for a multi-step goal to complete or crash.
*   **Security is Shifting from "Prompts" to "OS Boundaries":** Prompt-level safety is no longer sufficient. The frontier of AI tooling security is now OS-level sandboxing, AST-aware file writing, and strict daemon-level permission hierarchies (as seen in Gemini's seatbelt profiles and DeepSeek's dotenv authority containment).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent community activity.

### 1. Top Skills Ranking & Key PR Activity
Based on community traction and pull request activity, these are the most notable Skill submissions and updates:

*   **Document Typography Skill** by PGTBoos ([PR #514](https://github.com/anthropics/skills/pull/514)) - **Status: Open**
    *   **Functionality:** Automatically prevents common AI-generation typography errors like orphan words, widow paragraphs, and numbering misalignment in generated documents.
    *   **Discussion Highlights:** Highly anticipated because it addresses "invisible" quality issues that users rarely prompt for but consistently plague generated documents.
*   **Frontend-Design Skill Improvement** by justinwetch ([PR #210](https://github.com/anthropics/skills/pull/210)) - **Status: Open**
    *   **Functionality:** Revises the existing frontend-design skill to ensure instructions are strictly actionable within a single conversation context.
    *   **Discussion Highlights:** Focuses on improving internal coherence and token efficiency, ensuring Claude doesn't just read guidelines but actually executes them effectively.
*   **Meta-Skills: Quality & Security Analyzers** by eovidiu ([PR #83](https://github.com/anthropics/skills/pull/83)) - **Status: Open**
    *   **Functionality:** Introduces two new "meta-skills" that evaluate other skills across five structural dimensions and check for security vulnerabilities.
    *   **Discussion Highlights:** Represents a major leap toward self-regulating skill ecosystems, allowing Claude to audit its own toolset.
*   **Testing-Patterns Skill** by 4444J99 ([PR #723](https://github.com/anthropics/skills/pull/723)) - **Status: Open**
    *   **Functionality:** A comprehensive skill covering the full testing stack, including the Testing Trophy model, AAA pattern, and React component testing.
    *   **Discussion Highlights:** Fills a critical gap in the ecosystem by standardizing how Claude approaches Test-Driven Development (TDD) and QA workflows.
*   **Skill-Creator Critical Fixes (UTF-8 & YAML)** by Mr-Neutr0n ([PR #362](https://github.com/anthropics/skills/pull/362), [PR #361](https://github.com/anthropics/skills/pull/361)) - **Status: Open**
    *   **Functionality:** Replaces character-based length checks with byte-length validation (preventing Rust panics) and adds pre-parse checks for unquoted YAML special characters.
    *   **Discussion Highlights:** These are vital stability fixes; without them, international users and complex skill configurations face silent parsing failures.

### 2. Community Demand Trends
Analysis of recent Issues reveals strong community demand in three distinct areas:

*   **Enterprise Distribution & Trust Boundaries:** There is massive friction regarding how skills are shared. Users are urgently requesting org-wide skill sharing capabilities ([Issue #228](https://github.com/anthropics/skills/issues/228)). Concurrently, there is a severe security concern regarding community skills being spoofed under the trusted `anthropic/` namespace ([Issue #492](https://github.com/anthropics/skills/issues/492)).
*   **Agent Safety & State Management:** As agent sessions grow longer, users want built-in safety and memory protocols. This includes proposals for *Agent Governance* to enforce policy and audit trails ([Issue #412](https://github.com/anthropics/skills/issues/412)), and *Compact-Memory*, a symbolic notation skill designed to compress long-running agent context windows ([Issue #1329](https://github.com/anthropics/skills/issues/1329)).
*   **Developer Tooling & Platform Parity (Windows):** A massive trend is fixing the skill-creator's evaluation loop (`run_eval.py`) on Windows. Users are frustrated by Unix-first assumptions that break subprocess pipes, file encodings, and entirely halt automated skill testing ([Issue #1061](https://github.com/anthropics/skills/issues/1061)).

### 3. High-Potential Pending Skills
These active PRs solve immediate pain points and have a high likelihood of merging soon based on community dependency:

*   **Skill-Creator Eval Overhaul ([PR #1298](https://github.com/anthropics/skills/pull/1298)):** Fixes the broken `run_eval.py` script that currently reports `0% recall` for all skill descriptions, effectively breaking the automated description-optimization loop. 
*   **DOCX Tracked Changes Fix ([PR #541](https://github.com/anthropics/skills/pull/541)):** Resolves document corruption in the DOCX skill caused by `w:id` namespace collisions when adding tracked changes to documents with existing bookmarks.
*   **ODT (OpenDocument) Skill ([PR #486](https://github.com/anthropics/skills/pull/486)):** Adds native support for creating, reading, and converting `.odt` and `.ods` files, expanding Claude's enterprise document capabilities beyond Microsoft formats.
*   **PDF Case-Sensitivity Fix ([PR #538](https://github.com/anthropics/skills/pull/538)):** A small but critical PR that fixes 8 case-sensitivity mismatches in `SKILL.md`, preventing the PDF skill from completely failing on Linux/macOS environments.

### 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is for **robust lifecycle management**—specifically fixing broken developer evaluation scripts (`run_eval.py`), enforcing namespace security, and enabling seamless cross-platform (Windows) skill creation.

---

Here is the Claude Code community digest for July 19, 2026.

### 1. Today's Highlights
The latest **v2.1.214** release brings critical security and permission patches, specifically addressing Bash execution bypasses in Windows PowerShell and fixing over-permissive directory write rules. The community is currently highly focused on integrating Claude Code with external ecosystems (Telegram, GitHub Projects, Chrome), but several severe regressions in the Desktop app's Cowork feature and permission systems are causing significant friction.

### 2. Releases
*   **[v2.1.214](https://github.com/anthropics/claude-code/releases/tag/v2.1.214)**
    *   **Security Fix:** Patched a permission-check bypass that affected commands executed within Windows PowerShell 5.1 sessions.
    *   **File Editing Fix:** Resolved an issue where single-segment `dir/**` allow rules (e.g., `Edit(src/**)`) were unintentionally auto-approving writes to nested directories anywhere in the file tree, rather than restricting them to `<cwd>/dir`.
    *   **General:** Truncated release notes also mention an unspecified Bash permission fix.

### 3. Hot Issues
*   **[#74260](https://github.com/anthropics/claude-code/issues/74260) [BUG] Assistant text blocks silently dropped when followed by more thinking:** A severe data-loss issue on `claude-fable-5` where mid-turn text blocks are never rendered and go missing from the transcript JSONL.
*   **[#73587](https://github.com/anthropics/claude-code/issues/73587) [BUG] Desktop app ignores `permissions.allow` rules:** A regression causing the Desktop app to prompt for tool approvals even on explicitly allowed directories, grinding automated workflows to a halt.
*   **[#76032](https://github.com/anthropics/claude-code/issues/76032) [BUG] Fable-5: Desktop Code-session transcript drops assistant text:** A related high-impact bug where `AskUserQuestion` and `ExitPlanMode` spans cause ~50% of assistant text to be dropped (while `opus-4.8` remains unaffected).
*   **[#75625](https://github.com/anthropics/claude-code/issues/75625) [BUG] [Cowork] New project's local folder context fails to load:** Users report that the `remote-devices` MCP fails to register properly in new Cowork sessions, breaking local folder access.
*   **[#77360](https://github.com/anthropics/claude-code/issues/77360) [FEATURE] Browser automation silently burns extreme token volume:** An urgent cost warning revealing that Chrome automation MCP running in long-lived (~1M token) sessions silently consumes up to 43M cache-read tokens every 5 minutes without user warnings.
*   **[#77055](https://github.com/anthropics/claude-code/issues/77055) [BUG] `/mcp` interactive dialog replaced by plain text output:** A VS Code extension regression (since v2.1.205) that downgraded the MCP management UI to plain text, hindering MCP server configuration.
*   **[#78241](https://github.com/anthropics/claude-code/issues/78241) [BUG] Forged user turns injected into session context:** A bizarre security anomaly where forged user turns are injected into the live model context without ever being written to the local transcript file.
*   **[#78671](https://github.com/anthropics/claude-code/issues/78671) [BUG] Cloud Cowork sessions provisioned without remote-devices MCP:** Cloud Cowork environments silently fall back to an unbound state instead of properly using the authenticated remote device bridge.
*   **[#76034](https://github.com/anthropics/claude-code/issues/76034) [BUG] Cowork auto-start wipes `mcpServers` block:** A dangerous Desktop bug on Windows MSIX where launching Cowork deletes the entire `mcpServers` configuration block from `claude_desktop_config.json`.
*   **[#77805](https://github.com/anthropics/claude-code/issues/77805) [FEATURE] Expose session ID in UI:** A request to surface Session IDs directly in the interface to enable reliable cross-session messaging instead of relying on fuzzy title/branch matching.

*(Note: Only 4 active PRs were updated in the last 24h. They are detailed below in lieu of a standard top 10.)*
### 4. Key PR Progress
*   **[#78715](https://github.com/anthropics/claude-code/pull/78715) feat(hookify): add regex_not_match / not_regex_match operator:** Adds a highly requested negative-match regex operator to the `hookify` rule engine, allowing developers to build more complex trigger conditions.
*   **[#29460](https://github.com/anthropics/claude-code/pull/29460) (Closed) Improve oncall triage recency and engagement criteria:** An internal tooling PR that updated `.claude/commands/oncall-triage-ci.md` to enforce deterministic sorting for GitHub issues, improving automated CI triage reliability.
*   **[#6754](https://github.com/anthropics/claude-code/pull/6754) Document RTL support for Claude CLI:** A documentation contribution outlining how to fix broken Right-to-Left (Hebrew/Arabic/Persian) rendering when running the CLI inside the VS Code integrated terminal.
*   **[#41611](https://github.com/anthropics/claude-code/pull/41611) add the missing source to claude code:** A community submission attempting to patch missing source code references, currently sitting open since March 2026.

### 5. Feature Request Trends
*   **External Platform Integrations (Design & GitHub):** Users want to drive external tools natively via MCP. Requests include exposing Claude Design annotations/comments ([#78154](https://github.com/anthropics/claude-code/issues/78154)) and managing GitHub Projects V2 boards via Routines ([#77971](https://github.com/anthropics/claude-code/issues/77971)).
*   **Cross-Session & Peer Communication:** With the rise of multi-agent setups, developers are asking for better ways to link sessions. Trends include exposing Session IDs in the UI ([#77805](https://github.com/anthropics/claude-code/issues/77805)) and establishing "trusted peer sessions" to bypass manual approval for every cross-session message ([#78706](https://github.com/anthropics/claude-code/issues/78706)).
*   **Customizing Agent Output Loops:** Developers building headless or externally-monitored agents want flexibility in turn completion logic—specifically, letting a successful tool call (like a Telegram message) satisfy the model's requirement for visible output ([#78653](https://github.com/anthropics/claude-code/issues/78653)).
*   **Chrome Extension WebMCP:** Revisiting WebMCP tool discovery to allow sites to expose tools directly to Claude in Chrome ([#76809](https://github.com/anthropics/claude-code/issues/76809)).

### 6. Developer Pain Points
*   **Desktop Cowork Instability:** The Cowork feature is currently highly unstable, especially on Windows. Users are experiencing issues ranging from Cowork auto-start wiping MCP configurations ([#76034](https://github.com/anthropics/claude-code/issues/76034)) to the Desktop app completely failing to render windows after updates ([#78944](https://github.com/anthropics/claude-code/issues/78944)).
*   **"Fable-5" Model Regression:** Alongside missing text data, developers are noting that the `claude-fable-5` model exhibits severe task avoidance, incomplete responses, and "laziness" ([#78213](https://github.com/anthropics/claude-code/issues/78213)) compared to older iterations.
*   **Opaque Token & Cost Spikes:** Developers running long context sessions are frustrated by silent, massive token consumption spikes during browser automation tasks, with no UI guards or warnings before limits are hit ([#77360](https://github.com/anthropics/claude-code/issues/77360)).
*   **MCP & Tooling Reliability:** Interacting with MCP tools is proving brittle due to missing UI approval prompts (e.g., Claude Design grants in [#77878](https://github.com/anthropics/claude-code/issues/77878)) and buggy Chrome extension reads that fabricate HTTP 503 errors ([#77841](https://github.com/anthropics/claude-code/issues/77841)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the community digest for OpenAI Codex on July 19, 2026.

### 1. Today's Highlights
OpenAI shipped version `0.144.6` to address context window regressions and update bundled instructions for GPT-5.6 models (Sol, Terra, and Luna). The development team also merged a flurry of pull requests optimizing the Terminal User Interface (TUI), introducing audio input modalities, and fixing critical Windows execution bugs. Meanwhile, the community remains highly vocal regarding severe Windows desktop app instability and frustrations surrounding the newly adjusted weekly usage limits.

### 2. Releases
*   **[rust-v0.144.6](https://github.com/openai/codex/releases/tag/rust-v0.144.6)**
    *   **Bug Fixes:** Refreshed the bundled instructions for GPT-5.6 Sol, Terra, and Luna. Corrected an issue where their context windows were improperly reported by setting them to the accurate 272,000 tokens ([PR #33972](https://github.com/openai/codex/pull/33972), [PR #34009](https://github.com/openai/codex/pull/34009)).
*   **[rust-v0.145.0-alpha.23](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.23)**
    *   General alpha release for the upcoming `0.145.0` track, incorporating recent merges for audio handling and TUI optimizations.

### 3. Hot Issues
1.  **[#20214](https://github.com/openai/codex/issues/20214): Codex App frequently freezes/stutters on Windows 11 Pro** - With 48 comments and 64 upvotes, this remains a flagship complaint. Users report significant UI unresponsiveness despite having high-end hardware and system resources.
2.  **[#28969](https://github.com/openai/codex/issues/28969): Add setting to disable the auto-resolve in 60 seconds for questions** - A heavily requested enhancement (136 upvotes). Developers find the 60-second auto-resolution timeout for CLI questions too aggressive for complex coding tasks that require temporary context switching.
3.  **[#32806](https://github.com/openai/codex/issues/32806): [SEVERE REGRESSION] GPT-5.6 Sol context cut again** - A critical bug where the model's context dropped from 353K to 258K instead of utilizing the advertised 1.05M window. This was addressed in the recent `0.144.6` patch but remains a point of discussion.
4.  **[#33685](https://github.com/openai/codex/issues/33685): Weekly limit is draining like the old 5-hour limit** - Since the temporary removal of the 5-hour usage cap, Plus and Pro users report that the weekly limit depletes at the same accelerated rate, severely impacting long development sessions.
5.  **[#34035](https://github.com/openai/codex/issues/34035): Make the temporary removal of the 5-hour usage limit permanent** - Gaining rapid traction (57 upvotes), users are petitioning OpenAI to keep the 5-hour limit disabled permanently in favor of the weekly allowance. 
6.  **[#17265](https://github.com/openai/codex/issues/17265): Codex does not auto-refresh routed MCP OAuth tokens** - A long-standing pain point where Model Context Protocol (MCP) tool calls fail silently once short-lived access tokens expire, despite refresh tokens being available.
7.  **[#32385](https://github.com/openai/codex/issues/32385): Codex VS Code extension hangs on loading screen in Remote-SSH** - Business tier users are completely blocked from using the IDE extension over Remote-SSH connections, despite the CLI working perfectly in the same environment.
8.  **[#34061](https://github.com/openai/codex/issues/34061): Insane Codex Disk Usage from Subagents** - Pro users report massive disk I/O and storage consumption caused by completed subagents failing to spin down and continuously writing to the disk.
9.  **[#26429](https://github.com/openai/codex/issues/26429): Computer Use plugin becomes unavailable after Codex Desktop restart** - macOS users note that browser and OS control capabilities frequently break, requiring manual reconfiguration upon restarting the unified app.
10. **[#34004](https://github.com/openai/codex/issues/34004): Pasting code snippets converts to markdown, messing up text** - A frustrating TUI regression where pasting raw code or diffs applies aggressive markdown formatting, destroying indentation and syntax integrity.

### 4. Key PR Progress
1.  **[PR #34009](https://github.com/openai/codex/pull/34009): Narrow 0.144 hotfix to GPT-5.6 prompts and context** - Reverts unnecessary catalog metadata changes while keeping the vital 272,000-token context window fix for GPT-5.6 models.
2.  **[PR #31781](https://github.com/openai/codex/pull/31781): Bound executor-controlled HTTP response buffering** - A vital security/stability fix preventing untrusted remote exec-servers from overwhelming the app-server with oversized JSON-RPC payloads before backpressure kicks in.
3.  **[PR #34045](https://github.com/openai/codex/pull/34045): Render streamed Markdown incrementally** - Massively improves TUI performance by caching completed Markdown blocks instead of re-rendering the entire accumulated stream on every delta.
4.  **[PR #33932](https://github.com/openai/codex/pull/33932) & [PR #33982](https://github.com/openai/codex/pull/33982): Forward audio inputs & Gate audio history** - Introduces new multi-modal capabilities by allowing audio data URLs (wav/mp3) to be forwarded to the Responses API, while cleanly omitting audio history for models that don't support it.
5.  **[PR #33926](https://github.com/openai/codex/pull/33926): Fix quoted hook commands on Windows** - Resolves execution failures for Windows hook commands when executable paths contain spaces.
6.  **[PR #33950](https://github.com/openai/codex/pull/33950): Let users remember the working directory for resumed sessions** - Adds a new `tui.resume_cwd` configuration to streamline session forking and resuming workflows.
7.  **[PR #33938](https://github.com/openai/codex/pull/33938): Centralize SQLite connection configuration** - Standardizes database pools with consistent WAL, synchronization, and busy-timeout settings to prevent database locks and improve state runtime reliability.
8.  **[PR #34049](https://github.com/openai/codex/pull/34049): Avoid redundant TUI redraws while streaming** - Further TUI optimization that caches reasoning headers and status indicators to prevent flickering during model output.
9.  **[PR #34038](https://github.com/openai/codex/pull/34038): Handle compressed rollouts in doctor thread inventory** - Fixes the `codex doctor` diagnostics tool to properly recognize `.jsonl.zst` files, preventing false positives for stale database rows.
10. **[PR #33944](https://github.com/openai/codex/pull/33944): Track permission instructions in world state** - Optimizes model context by tracking instruction hashes, ensuring permission settings are only re-emitted to the model when actual changes occur.

### 5. Feature Request Trends
*   **Usage Limit Flexibility:** There is a massive push from the community to eliminate granular time-boxed limits (like the 5-hour window) entirely and rely strictly on weekly usage allowances to prevent workflow interruptions.
*   **Deeper Subagent Configuration:** Developers want more programmatic control over subagents, specifically requesting global default model assignments in `config.toml` (Issue #19482) and better management of subagent disk/session lifecycles.
*   **TUI Pasting & Formatting Overrides:** Users are requesting strict plain-text modes or "paste without formatting" options in the CLI to prevent the TUI's aggressive Markdown rendering from destroying code snippets and diffs.

### 6. Developer Pain Points
*   **Windows App Instability:** A staggering proportion of recent issues relate to the unified Windows Desktop app. Users are experiencing continuous micro-freezes, `0xC06D007F` crashes, WMI Provider Host CPU saturation (100%), and complete UI hangs. 
*   **Opaque Rate Limiting:** Developers are confused by usage attribution, noting that weekly limits drain faster than expected. New Plus subscribers are hitting absolute walls immediately, making the system feel unpredictable.
*   **Remote Development Disconnect:** The IDE extensions frequently hang or fail to load webview assets over Remote-SSH or on Linux/Wayland, pushing remote developers to abandon the GUI in favor of the CLI.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 19, 2026.

### 1. Today's Highlights
The Gemini CLI ecosystem is heavily focused on fortifying agent security and stabilizing subagent execution. The latest v0.52.0 nightly release introduces an LLM triage orchestrator and aligns macOS sandbox profiles, directly addressing ongoing community concerns around safe bash execution. Meanwhile, core maintainers and contributors are plugging critical security holes in path traversal and variable expansion, while feature discussions continue to center heavily on AST-aware codebase mapping and reliable subagent delegation.

### 2. Releases
*   **[v0.52.0-nightly.20260718](https://github.com/google-gemini/gemini-cli/pull/28436)** 
    *   **Triage Automation:** Introduced an LLM triage orchestrator and container build for automated issue management ([PR #28345](https://github.com/google-gemini/gemini-cli/pull/28345)).
    *   **macOS Security:** Refactored CLI sandboxing to align macOS permissive Seatbelt profiles with a strict deny-default model.

### 3. Hot Issues
*   **[Subagent recovery after MAX_TURNS is reported as GOAL success (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323)** - A critical reliability bug where subagents falsely report success when hitting turn limits, masking underlying failures from the main agent.
*   **[Generalist agent hangs (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409)** - A high-friction P1 bug where the generalist agent hangs indefinitely during simple tasks (like folder creation) unless explicitly told to avoid subagents. 
*   **[Gemini does not use skills and sub-agents enough (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968)** - Despite having custom skills defined, the CLI often ignores them unless explicitly prompted, reducing the utility of the custom skills framework.
*   **[Leverage model's bash affinity via Zero-Dependency OS Sandboxing (#19873)](https://github.com/google-gemini/gemini-cli/issues/19873)** - A major architectural proposal to let Gemini 3 models natively chain POSIX tools (`grep`, `awk`, `sed`) safely without risking the user's system.
*   **[Stop Auto Memory from retrying low-signal sessions indefinitely (#26522)](https://github.com/google-gemini/gemini-cli/issues/26522)** - Auto Memory gets stuck in a loop trying to process sessions it previously deemed low-signal, causing unnecessary background processing overhead.
*   **[Add deterministic redaction and reduce Auto Memory logging (#26525)](https://github.com/google-gemini/gemini-cli/issues/26525)** - Raises privacy concerns because local transcripts are sent to the extraction agent *before* the model is prompted to redact secrets.
*   **[Assess the impact of AST-aware file reads, search, and mapping (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745)** - An investigation epic exploring AST tools to allow precise method-bound reads, drastically reducing token noise and misaligned tool calls.
*   **[Robust component level evalutions (#24353)](https://github.com/google-gemini/gemini-cli/issues/24353)** - Maintainers are scaling up behavioral evaluation tests (currently 76 tests across 6 models) to catch regression bugs before they hit nightly builds.
*   **[Gemini CLI encounters 400 error with > 128 tools (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246)** - Context limits are hit aggressively when MCP servers and custom tools exceed 128 tools, requiring smarter tool-scoping logic.
*   **[Agent should stop/discourage destructive behavior (#22672)](https://github.com/google-gemini/gemini-cli/issues/22672)** - The agent sometimes defaults to destructive commands like `git reset --force` when safer alternatives should be enforced.

### 4. Key PR Progress
*   **[fix(core): block $VAR and ${VAR} variable expansion bypass (#28403)](https://github.com/google-gemini/gemini-cli/pull/28403)** - Addresses a high-priority security bypass (GHSA-wpqr-6v78-jr5g) allowing malicious variable expansion in bash/powershell execution.
*   **[refactor(a2a-server): enforce path trust check prior to environment loading (#28319)](https://github.com/google-gemini/gemini-cli/pull/28319)** - Introduces `AsyncLocalStorage` to isolate task environments and ensures workspace trust checks happen *before* loading `.env` files.
*   **[fix(a2a-server): prevent path traversal in restore command (#28353)](https://github.com/google-gemini/gemini-cli/pull/28353)** - Implements containment checks to prevent directory traversal exploits (e.g., `../../../etc/passwd`) via the checkpoint restore command.
*   **[fix: resolve MaxListenersExceededWarning and infinite auth loop (#28348)](https://github.com/google-gemini/gemini-cli/pull/28348)** - Fixes a critical Windows-specific bug causing infinite OAuth loops and memory leaks during API retries.
*   **[fix(core): match ls ignore globs by relative path (#28247)](https://github.com/google-gemini/gemini-cli/pull/28247)** - Merges a fix allowing `ls` ignore patterns to correctly evaluate workspace-relative paths rather than just basenames.
*   **[docs: explain MCP env expansion (#28248)](https://github.com/google-gemini/gemini-cli/pull/28248)** - Clarifies supported syntax (`$VAR`, `${VAR:-fallback}`) for `mcpServers` environment expansion to reduce misconfigurations.
*   **[Trim tool names before registry lookup (#28438)](https://github.com/google-gemini/gemini-cli/pull/28438)** - Small but effective bugfix ensuring whitespace-padded tool names resolve correctly in the script tool registry.
*   **[Experiment with using native file tools for task tracker (#21000)](https://github.com/google-gemini/gemini-cli/issues/21000)** - Ongoing work to transition the agent's internal task tracker away from shell echo/sed commands toward deterministic native file writing.

### 5. Feature Request Trends
*   **Deep Codebase Understanding (AST Integration):** Moving beyond naive `grep` and file-reading. The community strongly desires AST (Abstract Syntax Tree) aware tools to query method boundaries natively, reducing token waste and improving codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
*   **Smarter Subagent Delegation:** Users want the main agent to better intuit *when* to use specific subagents and custom skills without requiring explicit prompt engineering ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)). 
*   **Agent Traceability & Transparency:** Increased visibility into what subagents are actually doing. Requests include making subagent trajectories viewable via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and including subagent context in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).

### 6. Developer Pain Points
*   **Execution Deadlocks & Hanging:** Developers are frustrated by P1 bugs where the agent hangs indefinitely on basic shell commands or interactive CLI prompts (like Vite app generation) ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
*   **Sloppy Workspace Management:** When forced to use bash for edits, the model heavily litters the workspace with temporary `.tmp` scripts in random directories, creating messy `git` diffs ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
*   **Auto Memory Overhead:** The background memory extraction agent is currently viewed as too aggressive—logging excessive data, mishandling invalid patches, and risking secret exposure before redaction occurs ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest (2026-07-19)

### 1. Today's Highlights
The GitHub Copilot CLI community is currently navigating a series of regressions and edge cases in v1.0.71, with users reporting zombie process accumulation on Linux and cold-start resume hangs on Windows. There is strong community momentum behind improving context window visibility, multi-root workspace handling, and refining the autonomous "autopilot" and "plan mode" boundaries. 

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
Here are the 10 most noteworthy issues from the last 24 hours:

*   **[#4163 Zombie process accumulation on Linux](https://github.com/github/copilot-cli/issues/4163)**: v1.0.71 has a critical bug where finished subprocesses are not reaped, accumulating as zombies (~2/min) and pointing to severe lifecycle management issues on Linux.
*   **[#2785 Support 1M context window for Claude Opus 4.7](https://github.com/github/copilot-cli/issues/2785)**: A highly requested feature (62 upvotes) seeking context window parity with Claude Code to handle significantly larger codebases.
*   **[#4160 Plan mode over-blocks read-only shell commands](https://github.com/github/copilot-cli/issues/4160)**: Users report that a substring-matching heuristic is blocking provably safe, read-only shell commands, severely hindering plan mode workflows.
*   **[#4172 GPT-5.6 model fails to exit plan mode reliably](https://github.com/github/copilot-cli/issues/4172)**: Interactions with new GPT-5.6 models frequently stall out after saving plans, breaking the transition to implementation prompts.
*   **[#2052 Persistent Token/Context Usage Indicator](https://github.com/github/copilot-cli/issues/2052)**: With 19 upvotes, the community is heavily requesting an always-visible UI status bar to track token consumption against context limits.
*   **[#4173 Background tasks retain stale plan-mode write gates](https://github.com/github/copilot-cli/issues/4173)**: A fleet execution bug where background write tasks spawned post-plan-mode retain restrictive gates, consuming retry budgets and stalling operations.
*   **[#4165 `copilot --resume` hangs on Windows cold start](https://github.com/github/copilot-cli/issues/4165)**: Windows users are experiencing indefinite hangs when trying to resume sessions directly from PowerShell, forcing them to open a standard session first.
*   **[#4174 ACP server lacks token usage telemetry](https://github.com/github/copilot-cli/issues/4174)**: The Agent Client Protocol implementation (`copilot --acp`) currently provides no protocol messages for token usage or cost tracking, hindering IDE integrations.
*   **[#4164 Large Image Attachment Warning Spam](https://github.com/github/copilot-cli/issues/4164)**: Users attaching oversized images are bombarded by repetitive warning messages, highlighting a need for console log deduplication.
*   **[#4171 CLI segfaults on Linux with ASLR disabled](https://github.com/github/copilot-cli/issues/4171)**: Enterprise users on hardened SLES 15 SP4 environments (ASLR disabled) report immediate `SIGSEGV` crashes on startup.

### 4. Key PR Progress
There has been no active pull request progress to report in the last 24 hours.

### 5. Feature Request Trends
*   **Granular Model & Mode Configuration**: Users want tighter control over their AI environment, specifically requesting per-mode default models (Plan vs. Autopilot), the ability to use `-max-ai-credits=0` for local models, and suppressing "low credit" warnings injected into the prompt context ([#2958](https://github.com/github/copilot-cli/issues/2958), [#4167](https://github.com/github/copilot-cli/issues/4167), [#4168](https://github.com/github/copilot-cli/issues/4168)).
*   **BYOK (Bring Your Own Key) Enhancements**: There is a strong push to support custom HTTP headers for BYOK setups and fix silent failures when sub-agents declare model overrides ([#3399](https://github.com/github/copilot-cli/issues/3399), [#3891](https://github.com/github/copilot-cli/issues/3891)).
*   **Workspace Context & Multi-Root Support**: Developers are asking for deeper VS Code integration, specifically requesting that the CLI parse `.code-workspace` files to populate `AGENTS.md` instructions from multiple root folders ([#1826](https://github.com/github/copilot-cli/issues/1826)).
*   **Remote & Mobile Sessions**: Users are requesting browser and mobile attach capabilities for running CLI sessions, taking inspiration from Claude Code's remote session functionality ([#1979](https://github.com/github/copilot-cli/issues/1979)).

### 6. Developer Pain Points
*   **Plan Mode Friction**: The plan mode implementation is currently a major source of frustration. It is simultaneously over-blocking safe commands via naive keyword matching and silently failing to transition to implementation tasks properly ([#4160](https://github.com/github/copilot-cli/issues/4160), [#4172](https://github.com/github/copilot-cli/issues/4172), [#4173](https://github.com/github/copilot-cli/issues/4173)).
*   **Context Blind Spots**: Developers are anxious about invisible context consumption. The lack of telemetry in ACP integrations and the absence of a persistent token status bar make it difficult to trust long-running sessions ([#2052](https://github.com/github/copilot-cli/issues/2052), [#4174](https://github.com/github/copilot-cli/issues/4174)).
*   **Platform-Specific Instability**: v1.0.71 has introduced frustrating OS-level bugs. Linux developers are dealing with poor subprocess management (zombie processes), while Windows users face annoying workflow interruptions when resuming sessions ([#4163](https://github.com/github/copilot-cli/issues/4163), [#4165](https://github.com/github/copilot-cli/issues/4165)).
*   **Verbose UI & Repetitive Errors**: Users are annoyed by repeated console warnings for oversized attachments and unclear distinctions between session commands (`/clear` vs `/new`), pointing to a need for UX polish ([#4164](https://github.com/github/copilot-cli/issues/4164), [#3569](https://github.com/github/copilot-cli/issues/3569)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for Kimi Code CLI.

# Kimi Code CLI Community Digest — 2026-07-19

### 1. Today's Highlights
The community is highly focused on improving developer ergonomics and agentic workflow flexibility. A standout feature request to allow quick switching of reasoning effort directly from the TUI main interface has already resulted in a same-day PR submission. Additionally, contributors actively patched several edge-case bugs, including ACP server question handling and circular JSON schema dereferencing.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Hot Issues
*   **[OPEN] #2501: [Feature Request] Support quick switching of Reasoning Level / Thinking Effort in TUI** ([URL](https://github.com/MoonshotAI/kimi-cli/issues/2501))
    *   **Why it matters:** Currently, changing the reasoning effort requires navigating through a `/model` sub-menu, which interrupts the developer's flow during coding. The user requests slash commands (e.g., `/think`) or inline shortcuts to adjust thinking levels on the fly, mimicking the fluid experience of competing tools like Codex.
*   **[OPEN] #2508: Permission rules `deny` overrides `allow` regardless of order** ([URL](https://github.com/MoonshotAI/kimi-cli/issues/2508))
    *   **Why it matters:** A user reported a critical security/logic discrepancy in v0.27.0 where `deny` rules override `allow` rules regardless of their sequential order in the configuration. This directly contradicts the documentation, which states that the "first matching rule takes effect."

### 4. Key PR Progress
*   **[OPEN] #2509: feat(kimi): configurable thinking effort and `/effort` command** ([URL](https://github.com/MoonshotAI/kimi-cli/pull/2509))
    *   *Progress:* Directly resolving Issue #2501, contributor n-WN submitted a PR to introduce a configurable thinking effort mechanism and a dedicated `/effort` command, allowing seamless adjustments within the TUI.
*   **[OPEN] #2507: fix(acp): signal `QuestionNotSupported` instead of resolving empty answers** ([URL](https://github.com/MoonshotAI/kimi-cli/pull/2507))
    *   *Progress:* In ACP (Agentic Copilot/Control Panel) server mode, user dismissal of a question was previously indistinguishable from an actual empty answer. This PR correctly signals `QuestionNotSupported`, preventing the model from misinterpreting user intent.
*   **[OPEN] #2506: fix(kosong): raise a clear error on circular `$ref` in `deref_json_schema`** ([URL](https://github.com/MoonshotAI/kimi-cli/pull/2506))
    *   *Progress:* A self-contained bug fix targeting the `kosong` utility. It prevents infinite loops during JSON schema traversal by raising a clear error when circular `$ref` tags are encountered.

### 5. Feature Request Trends
*   **Frictionless Agentic Controls:** Developers are asking for less context-switching within the CLI. The top feature trend is bringing deeper model configurations (like reasoning/thinking levels) directly into the primary typing area via quick slash commands.
*   **Strict Configuration Predictability:** There is a strong expectation for tooling to strictly adhere to documented configuration behaviors, especially regarding security and file execution permissions.

### 6. Developer Pain Points
*   **Workflow Interruption:** Having to leave the main TUI prompt to adjust model parameters (like switching from a fast to a deep-reasoning mode) causes severe "flow state" interruptions during mid-prompt or active dialogue. 
*   **Unpredictable Permission Systems:** Misaligned permission hierarchies (where `deny` indiscriminately overrides `allow`) create unpredictable execution environments, posing a potential security and operational risk for automated agentic tasks.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 19, 2026.

### 1. Today's Highlights
The OpenCode community is heavily focused on the **v2.0 rollout** (including the new Desktop app and OpenCode Go), with contributors rapidly patching early-run bugs like headless native file leaks, UI glitches, and model configuration overrides. There is a strong collaborative push to refine the plugin ecosystem and local provider support, particularly through better MCP (Model Context Protocol) tool bridging and theme/UI adjustments. 

### 2. Releases
*No new official releases were published in the last 24 hours. The team and contributors are currently merging fixes and features into the `dev` and `next` branches (e.g., `opencode2 v0.0.0-next-15798`).*

### 3. Hot Issues
*   **#20695 [OPEN] Memory Megathread** (113 comments, 90 👍)
    *   *Why it matters:* A long-running central thread to tackle memory leaks. The maintainers are specifically asking users not to use LLMs for debugging but to provide manual heap snapshots to help isolate the root cause.
*   **#6231 [OPEN] Auto-discover models from OpenAI-compatible provider endpoints** (22 comments, 182 👍)
    *   *Why it matters:* Highly requested by the local AI community. Manually configuring `opencode.json` for local providers (LM Studio, Ollama) is tedious, and users want automatic endpoint discovery. 
*   **#2047 [OPEN] LM Studio Failure to refresh models** (22 comments, 5 👍)
    *   *Why it matters:* A long-standing UX friction point where adding/removing models in LM Studio doesn't reflect in OpenCode, even after an `auth` cycle.
*   **#26772 [OPEN] [FEATURE]: Integrated browser for desktop** (15 comments, 4 👍)
    *   *Why it matters:* Users want the upcoming Desktop app to feature a native browser workspace, allowing agents to inspect and interact with web contexts seamlessly.
*   **#34207 [OPEN] Model selection silently reverts** (8 comments, 2 👍)
    *   *Why it matters:* A critical workflow bug where changing the active model mid-task gets silently overwritten when the agent asks a clarifying question.
*   **#37544 [CLOSED] [2.0] config: existing model limit override is ignored** (4 comments)
    *   *Why it matters:* Prevented users from lowering the `limit.context` on `gpt-5.6-sol` to trigger auto-compaction earlier. 
*   **#36482 [OPEN] [2.0] tui: "Toggle MCPs" command has no effect** (4 comments)
    *   *Why it matters:* A broken keyboard shortcut in the V2 TUI where pressing the spacebar in the command palette fails to toggle MCP server states.
*   **#37101 [OPEN] Stuck in Plan Mode - cannot switch to Build mode** (4 comments)
    *   *Why it matters:* Users report being completely hard-stuck in Plan Mode, with the UI toggle missing and slash commands (`/build`) failing to respond.
*   **#33884 [OPEN] TUI plugins fail to load in 1.17.10** (4 comments)
    *   *Why it matters:* A regression caused by OpenTUI 0.4.2 broke npm-spec TUI plugin loading. It is mitigated in `dev`, but the underlying loader issue persists.
*   **#37552 [CLOSED] Kimi K3 works as primary but OpenCode Go rejects subagent requests** (4 comments)
    *   *Why it matters:* Exposed a routing issue in OpenCode Go where models like Kimi K3 succeed for primary agents but throw 400 errors when invoked via subagents.

### 4. Key PR Progress
*   **#37684 feat(mcp): bridge runtime-added MCP tools** 
    *   Bridges the daemon's independent MCP services into the core tool registry, fixing a major bug where runtime MCP tools were unavailable on the primary prompt path.
*   **#37681 feat(core): allow MCP Code Mode opt-out** 
    *   Introduces an optional `codemode` field in server configs, allowing users to register MCP tools directly on the provider list without entering full Code Mode.
*   **#37661 fix: build Windows binaries natively** 
    *   Resolves a critical Windows 11 compatibility error by transitioning away from Linux cross-compilation via Bun to native Windows compilation.
*   **#37670 feat(cli): add saved remote servers** 
    *   Adds the ability to configure named remote server profiles with optional basic-auth, accessible via `opencode2 -r <name>`.
*   **#37678 feat(session): expose toolChoice via PromptInput** 
    *   Empowers users to specify `toolChoice` directly through the UI and agent configs, reviving work from auto-closed PRs.
*   **#37679 fix(core): drop undefined metadata values** 
    *   Fixes a schema encoding bug that caused `session.permission.list` to crash when `glob` and `grep` omitted optional inputs.
*   **#37555 fix(tui): soften theme scale extremes** 
    *   Addresses community complaints about the V2 theme's poor contrast (issue #37428) by adjusting text/background roles and extrapolating outer scale steps safely.
*   **#37625 fix(provider): normalize kimi tool schemas** 
    *   Implements a model-agnostic compatibility layer so incompatible custom or MCP tools no longer cause Kimi to reject the entire prompt.
*   **#37669 fix(core): recover malformed tool input** 
    *   Improves system stability by intercepting malformed streamed tool arguments, safely failing the step, and continuing with a recovery Step instead of crashing.
*   **#37668 feat(tui): add server switcher** 
    *   Adds a client-side registry and `<leader>w` server picker to the V2 TUI, ensuring caches and sessions don't leak when switching between remote endpoints.

### 5. Feature Request Trends
*   **Native Desktop Workspace Enhancements:** Users are pushing for a more robust Desktop experience, requesting built-in browsers for live agent debugging (#26772) and better window/native menu management (#37642).
*   **Local Model Ergonomics:** There is a massive demand to make local LLM development frictionless. Users want auto-discovery of OpenAI-compatible endpoints (#6231) and reliable state syncing with tools like LM Studio (#2047).
*   **Agent Control & Subagents:** Developers want finer control over agent orchestration, such as configurable git worktree creation paths (#33332) and reliable toggling between Plan and Build modes (#37101).

### 6. Developer Pain Points
*   **V2 Migration Friction:** The rollout of OpenCode V2 and the next-gen Desktop app has introduced a wave of regressions. Developers are frustrated by broken config overrides (#37544), UI glitches like rapidly jumping selection states (#37663), and mode-switching dead-ends (#37101).
*   **Headless & CLI Bloat:** Backend developers noticed that headless CLI commands in V2 are unnecessarily loading the OpenTUI native library, leaking 13.1 MiB temp files per run (#37671).
*   **Cloud & Subscription Management:** Users of OpenCode Go and OpenCode Zen report ongoing frustrations with poor support accessibility and aggressive rate-limiting, even when holding active paid subscriptions and balances (#32482, #37680).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community based on the recent GitHub activity.

### 1. Today's Highlights
Today's development activity heavily focused on hardening network resilience and fixing streaming edge cases, particularly around compaction failures and OpenAI Responses API integrations. Significant performance bottlenecks were also addressed, including high CPU usage during large file generation and slow startup times caused by model catalog refreshes. Finally, the community saw a push toward better UI/UX accuracy, fixing everything from terminal cursor ghosts to incorrect model context indicators.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
*   **[#6768 Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)**: A critical bug preventing context compaction for Copilot Enterprise users due to API misdirect errors (421). This blocks a core workflow for enterprise users.
*   **[#6725 Copilot pricing for GPT-5.6 models is incorrect](https://github.com/earendil-works/pi/issues/6725)**: Pi is reportedly failing to include `cacheWrite` in cost calculations for OpenAI models accessed via Copilot, leading to skewed financial metrics.
*   **[#6792 High CPU usage when writing/editing big 500+ line files](https://github.com/earendil-works/pi/issues/6792)**: A major performance degradation issue causing 100% CPU utilization during large file generation, heavily impacting developer flow.
*   **[#6801 OpenAI Responses degenerate output self-amplifies](https://github.com/earendil-works/pi/issues/6801)**: Models occasionally emit serialized JSON envelopes as literal text, which Pi replays recursively across turns, eventually causing indefinite streaming.
*   **[#6794 Pi startup super slow due to model catalogue refresh](https://github.com/earendil-works/pi/issues/6794)**: The TUI is hanging on startup and submission due to synchronous, blocking model catalog refreshes.
*   **[#6782 Hindi (Devanagari) text corrupts editor repaint](https://github.com/earendil-works/pi/issues/6782)**: Pasting complex scripts into the Pi input box triggers a severe rendering bug, repeating lines on every keystroke.
*   **[#6675 `pi update --self` gives up after one transient failure](https://github.com/earendil-works/pi/issues/6675)**: The CLI self-update mechanism lacks retry logic for transient network drops, immediately failing the update process.
*   **[#6796 Duplicate `tool_call_id` error on model switch](https://github.com/earendil-works/pi/issues/6796)**: Switching live sessions to Deepseek-v4-pro throws HTTP 400 errors due to unresolved duplicate tool IDs from previous models.
*   **[#6806 Cannot remove scoped model after `/logout`](https://github.com/earendil-works/pi/issues/6806)**: UI state becomes stuck when a provider is logged out, forcing users to manually edit configuration files to remove orphaned models.
*   **[#6303 Exponential retry backoff has no cap](https://github.com/earendil-works/pi/issues/6303)**: Network retries utilize an unbounded exponential backoff algorithm, resulting in multi-minute hangs during consecutive retry attempts.

### 4. Key PR Progress
*   **[#6775 Retry on compaction summarization failures](https://github.com/earendil-works/pi/pull/6775)**: Adds crucial retry logic to context compaction streams, preventing total compaction failures on transient mid-stream socket deaths.
*   **[#6807 Stop Responses streams at terminal event](https://github.com/earendil-works/pi/pull/6807)**: Optimizes OpenAI Responses streaming by breaking the loop immediately upon `response.completed`, preventing UI hangs waiting for HTTP EOF.
*   **[#5262 Add Anthropic Vertex provider](https://github.com/earendil-works/pi/pull/5262)**: Introduces a built-in adapter for Claude on Google Cloud Vertex AI, expanding native cloud provider support.
*   **[#6804 Allow removing orphaned scoped models](https://github.com/earendil-works/pi/pull/6804)**: Fixes the selector logic so users can successfully uncheck models in the UI after their underlying provider has been removed.
*   **[#6802 Show actual extended context size in footer](https://github.com/earendil-works/pi/pull/6802)**: Replaces the hardcoded `[1M]` token indicator in the UI with the actual dynamic context window size of the active model (e.g., GPT-5.6).
*   **[#1762 Expose session/tree browsing to RPC](https://github.com/earendil-works/pi/pull/1762)**: Greatly expands the RPC protocol to allow external clients to discover and navigate tree-structured Pi sessions programmatically.
*   **[#6790 Clear inverted cursor on exit](https://github.com/earendil-works/pi/pull/6790)**: Resolves a visual bug where a "ghost" cursor remained in the terminal prompt line after the Pi process exited.
*   **[#6793 Perf: Optimize SessionManager.open()](https://github.com/earendil-works/pi/pull/6793)**: Cuts disk I/O during session loading in half by preventing redundant full-session reads when a `cwdOverride` is present.
*   **[#6812 Normalize bin path for lockfiles](https://github.com/earendil-works/pi/pull/6812)**: Removes `./` from the `pi-ai` package bin path to prevent constant, annoying `package-lock.json` churn in consumer projects.
*   **[#6809 Extension startup time optimization](https://github.com/earendil-works/pi/pull/6809)**: A community member demonstrated how compiling extensions with Bun drastically reduces load times from ~2s to 34ms.

### 5. Feature Request Trends
*   **Granular Retry Controls**: Developers are requesting more sophisticated network resilience features, including manual retry commands (`/retry`) ([#6810](https://github.com/earendil-works/pi/issues/6810)) and bounded, configurable retry strategies.
*   **Provider Management**: There is a strong desire for better lifecycle management of models and providers, such as the ability to temporarily hide/disable providers in `models.json` without fully deleting their configurations ([#6803](https://github.com/earendil-works/pi/issues/6803)).
*   **UI Configuration Shortcuts**: Requests for better keyboard ergonomics, like bidirectional cycling for thinking levels ([#3790](https://github.com/earendil-works/pi/issues/3790)) to avoid wrapping through long lists.

### 6. Developer Pain Points
*   **Streaming & Networking Flakiness**: A large volume of issues stem from Pi's handling of transient network drops. Lack of retries on critical paths like self-updates ([#6675](https://github.com/earendil-works/pi/issues/6675)) and compactions, combined with hanging HTTP streams ([#6808](https://github.com/earendil-works/pi/issues/6808)), are causing severe disruptions.
*   **TUI Performance & Rendering**: Developers are frustrated by heavy resource consumption during basic tasks. Slow startups from synchronous model fetches, 100% CPU spikes on large file writes, and complex script rendering bugs highlight a need for TUI optimization.
*   **State Desyncs**: UI elements frequently fall out of sync with internal state, such as the cost calculator ignoring OpenAI cache writes, API error bodies being silently ignored ([#6749](https://github.com/earendil-works/pi/issues/6749)), and scoped models becoming impossible to uncheck via the UI after a provider is logged out.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-19.

### 1. Today's Highlights
The Qwen Code team rolled out version **v0.19.12**, focusing heavily on daemon stability, startup latency tracing, and multi-workspace ownership hardening. Today’s development cycle was dominated by critical architectural fixes, notably addressing concurrent session state corruption and memory leaks in the TUI. Additionally, significant strides were made in daemon background automation, bringing deeper integration for scheduled IM channel deliveries and memory recall optimizations.

### 2. Releases
*   **[v0.19.12](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12)**
    *   **Features:** Introduced tracing for cold first-session startups in the daemon to aid latency diagnostics.
    *   **Fixes:** Hardened multi-workspace ownership guards to prevent cross-workspace state bleeding.

### 3. Hot Issues
1.  **[#7156](https://github.com/QwenLM/qwen-code/issues/7156) Subagent mutates main session model (P1 Bug)**
    Despite a previous fix, users are still experiencing fatal 400 errors because background subagents silently override the main session's chosen model, causing context overflow.
2.  **[#7164](https://github.com/QwenLM/qwen-code/issues/7164) Concurrent session writers fork transcript history (P1 Bug)**
    Running multiple Qwen Code processes on the same session causes divergent parent chains in the JSONL transcript, hiding responses and corrupting history on restart.
3.  **[#7181](https://github.com/QwenLM/qwen-code/issues/7181) `/goal` loop blocks user input (P1 Bug)**
    When an active goal loop runs, users are entirely blocked from interrupting, clearing, or replacing it, locking out the interactive CLI until completion or manual termination.
4.  **[#7159](https://github.com/QwenLM/qwen-code/issues/7159) EventEmitter memory leak crashes CLI (P2 Bug)**
    Heavy TUI usage triggers Node's `MaxListenersExceededWarning` (11+ resize listeners added), eventually crashing the client.
5.  **[#4748](https://github.com/QwenLM/qwen-code/issues/4748) Optimize daemon cold start latency (P2 Enhancement)**
    The community continues to highlight the 2.5s daemon cold-start gap. The team is actively tracking listener/health path optimizations to match the 0.7s standard CLI init.
6.  **[#7147](https://github.com/QwenLM/qwen-code/issues/7147) MCP server tool listing times out (P2 Bug)**
    Integrations like the Fastmail MCP server authenticate successfully but hang indefinitely when fetching tools/resources, stalling agent execution.
7.  **[#6936](https://github.com/QwenLM/qwen-code/issues/6936) `enableManagedAutoMemory` wastes context (P2 Bug)**
    Setting auto-memory to `false` stops memory operations but leaves a 7-9 KB system prompt instruction block, unnecessarily eating into the model's context limit.
8.  **[#6915](https://github.com/QwenLM/qwen-code/issues/6915) File permission rules miss symlink traversal (P2 Bug)**
    Deny rules for file writes can be bypassed if the agent uses symlinks or `../` path traversals, creating a potential security risk for protected directories.
9.  **[#6992](https://github.com/QwenLM/qwen-code/issues/6992) Chained MCP calls fail silently on Windows (P2 Bug)**
    Sequential MCP tool calls requiring local permissions fail silently, leaving the permission UI in a permanent stuck state.
10. **[#6824](https://github.com/QwenLM/qwen-code/issues/6824) Keyword search for conversation history**
    A highly requested UX feature to allow users to search across long, persisted conversation histories in both the CLI and VSCode extension.

### 4. Key PR Progress
1.  **[#7166](https://github.com/QwenLM/qwen-code/pull/7166) Enforce single-writer session persistence**
    Fixes transcript forking by introducing a process-level lease for sessions, authoritative transcript reloads, and UTF-8 byte fencing for appends.
2.  **[#7186](https://github.com/QwenLM/qwen-code/pull/7186) Share `stdout` resize listener**
    Directly addresses the memory leak crash (#7159) by refactoring `useTerminalSize` to use a single module-scoped resize listener instead of one per component mount.
3.  **[#7179](https://github.com/QwenLM/qwen-code/pull/7179) Workspace display names support**
    Implements an optional `displayName` property for daemon workspaces, allowing SDK consumers to show friendly names instead of raw directory paths.
4.  **[#7172](https://github.com/QwenLM/qwen-code/pull/7172) Route Plan-mode shell commands by safety**
    Introduces a generic shell classifier for Plan-mode to verify if commands are read-only, preventing untrusted CLI invocations from being blocked unnecessarily.
5.  **[#7175](https://github.com/QwenLM/qwen-code/pull/7175) Cache channel memory recall**
    Optimizes daemon IM channels by caching lexical recall indexes, preventing the system from reparsing the entire memory document for every inbound message.
6.  **[#7153](https://github.com/QwenLM/qwen-code/pull/7153) Deliver scheduled results to explicit channel targets**
    Empowers daemon scheduled tasks to autonomously deliver their final execution results directly to specified IM Chats or Users.
7.  **[#7188](https://github.com/QwenLM/qwen-code/pull/7188) Fix Java SDK 30-minute timeout**
    Corrects a literal typo in the Java SDK where `TIMEOUT_30_MINUTES` was incorrectly configured to 60 minutes.
8.  **[#7185](https://github.com/QwenLM/qwen-code/pull/7185) Inspect persisted conversation branches**
    Adds a topology inspector to identify semantic leaves and broken parent chains in session trees, greatly aiding state-corruption debugging.
9.  **[#7010](https://github.com/QwenLM/qwen-code/pull/7010) Surface `.cause` for OpenAI-compatible API errors**
    Improves debuggability by unwrapping `error.cause` for undici `AggregateError`s, giving developers actionable connection error messages instead of generic failures.
10. **[#6999](https://github.com/QwenLM/qwen-code/pull/6999) Replay ChatRecord history in readonly WebShell**
    Brings a deterministic replay pipeline to the WebShell, perfectly correlating historical tool calls and streamed fragments for past sessions.

### 5. Feature Request Trends
*   **Daemon Background Automation & IM Integrations:** A massive push to make `qwen serve` a persistent background agent. Requests focus on IM channel delivery (#7152, #7153), dynamic contact observation (#7103, #7154), and autonomous scheduled task execution.
*   **Robust Session & Workspace Management:** Developers are asking for better control over multi-workspace environments. Key requests include JSONL session imports (#7178), workspace display names (#7170), and tools to recover/inspect branched conversation histories (#7164, #7185).
*   **Interactive UX Enhancements:** Users want tighter CLI controls, such as inline model switching in a single command (`/model <id> <prompt>` - #5967), smarter keybinding handling (#7138, #4586), and keyword-searchable history (#6824).

### 6. Developer Pain Points
*   **State & Memory Bleeds:** Developers are frustrated by contexts bleeding into one another. The subagent model mutating the main session (#7156) and 7-9 KB of disabled memory instructions eating context (#6936) are major blockers for long-running tasks.
*   **MCP Protocol Flakiness:** Tool integration remains a sore spot, particularly on Windows. MCP servers time out during basic tool listing (#7147), and chained MCP calls freeze the permission UI (#6992).
*   **Node.js Resource Limits:** The TUI struggles with Node's EventEmitter constraints out-of-the-box (#7159), and developers find cold-start latency for the daemon unacceptable compared to raw CLI execution (#4748).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the DeepSeek TUI community digest for July 19, 2026.

### 1. Today's Highlights
DeepSeek TUI (CodeWhale) is currently undergoing a massive architectural hardening phase, heavily focused on security boundaries, lifecycle mutations, and release reliability. While no new official release dropped in the last 24 hours, the core team merged a flurry of critical fixes to plugin initialization, credential handling, and TUI rendering ahead of the v0.9.1/v0.9.2 milestone. Additionally, the community is highly engaged in refining agent autonomy and expanding multi-provider support, evidenced by active discussions around OpenCode Zen integration and persistent permission rules.

### 2. Releases
**None** - No new official releases were published in the last 24 hours. The team is actively merging release-blockers and CI improvements in preparation for the upcoming milestones.

### 3. Hot Issues
Here are the 10 most noteworthy issues currently driving community discussion:

*   **#4032 [bug, v0.9.3] Codewhale not following the constitution**
    *Why it matters:* Users are frustrated that the agent consistently ignores provided scripts and writes unauthorized temporary scripts to complete calculations.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/4032)*
*   **#3275 [bug, v0.9.2] CodeWhale is overly involved in making modifications**
    *Why it matters:* A regression has caused the agent to over-extend its scope, entering a self-driven loop of proposing and executing tasks without waiting for user confirmation.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/3275)*
*   **#3192 [enhancement] Put it up for agentclientprotocol/registry**
    *Why it matters:* Registering the TUI with the Agent Client Protocol would drastically simplify installation and usage inside popular editors like Zed.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/3192)*
*   **#1186 [enhancement] feat(execpolicy): add typed persistent permission rules**
    *Why it matters:* Developers are requesting granular, persistent execution policies (tool name, command prefix, workspace path) to safely manage agent permissions.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/1186)*
*   **#1481 [enhancement] Support OpenCode Go/Zen please, it provides DeepSeek-V4**
    *Why it matters:* There is high demand for alternative providers to access newer, cheaper models like DeepSeek-V4 via OpenCode Go/Zen.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/1481)*
*   **#689 [bug] deepseek doctor 诊断通过但 deepseek run 无法运行**
    *Why it matters:* A critical blocker where environment diagnostics pass perfectly, but the CLI fails to start conversations or produce any output.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/689)*
*   **#4022 [enhancement] v0.9.2: define CLI/TUI parity for subagent**
    *Why it matters:* As cloud and remote workbench development looms, the project owner is pushing to ensure subagent controls aren't trapped exclusively inside the TUI sidebar.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/4022)*
*   **#4085 [bug, v0.9.3] Cannot read/write files under macOS File Provider (Dropbox)**
    *Why it matters:* CodeWhale fails to interact with the default macOS Dropbox cloud storage directory, causing major friction for Mac developers.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/4085)*
*   **#874 [enhancement] Pending inputs not consumed until all todos complete**
    *Why it matters:* The lack of mid-turn intervention granularity forces users to wait until an entire multi-step todo list finishes before they can correct the agent.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/874)*
*   **#2327 [enhancement] COPYRIGHT concerns over UNOFFICIAL codewhale extensions**
    *Why it matters:* Unofficial, potentially malicious extensions are appearing on the VS Code Marketplace using the CodeWhale brand, posing a supply-chain risk to users.
    *[View Issue](https://github.com/Hmbown/CodeWhale/issues/2327)*

### 4. Key PR Progress
The team and contributors merged and advanced several crucial PRs in the last 24 hours:

*   **PR #4521 fix(security): contain workspace dotenv authority**
    *Details:* Treats repository `.env` files purely as credential surfaces, parsing them safely before Tokio starts to prevent untrusted repos from hijacking plugin roots or shell precedence. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4521)*
*   **PR #4530 fix(goal): keep lifecycle mutation root-owned**
    *Details:* Secures the goal lifecycle by ensuring active/paused goals cannot be replaced in place, reserving goal status mutations strictly for the root agent. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4530)*
*   **PR #4519 fix(tui): initialize plugins for every launch path**
    *Details:* Fixes a flaw where the plugin registry wasn't initialized for `resume`, `fork`, or `exec` launches, ensuring workspace `.env` files cannot redirect the plugin root. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4519)*
*   **PR #4510 fix(tui): keep keycap and emoji rendering grapheme-safe**
    *Details:* Resolves TUI visual corruption on Windows terminals caused by improperly rendered keycaps and emojis. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4510)*
*   **PR #4513 feat(tui): adopt the Blue Stage semantic palette**
    *Details:* Introduces a refreshed semantic color grammar (Blue Stage) for both dark and light themes, assigning distinct visual roles to warnings, live work, and human decisions. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4513)*
*   **PR #4528 fix(providers): refresh OpenCode Go chat models**
    *Details:* Updates the OpenCode Go provider contract to expose `grok-4.5` and `kimi-k3` models across shared routing and the TUI picker. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4528)*
*   **PR #4467 Feat/opencode zen provider**
    *Details:* An open PR adding OpenCode Zen as a model-aware provider, dynamically routing models across Responses, Anthropic Messages, and Chat Completions APIs. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4467)*
*   **PR #4518 fix(runtime-web): make replay and interaction recovery lossless**
    *Details:* Fixes broadcast lag and browser projection gaps, ensuring bounded, backpressured replay for web interaction recovery. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4518)*
*   **PR #4086 feat: add TormentNexus extension crate**
    *Details:* Introduces a native Rust extension implementing persistent L2 memory, MCP tool discovery, and RBAC parity with the TormentNexus Pi Coding Agent. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4086)*
*   **PR #4534 fix(release): exercise every shipped entrypoint**
    *Details:* Enhances the release CI pipeline to actively install and test the separately shipped native `codew` entrypoint across local dogfood, npm packaging, and CNB smoke tests. *[View PR](https://github.com/Hmbown/CodeWhale/pull/4534)*

### 5. Feature Request Trends
*   **Granular Execution Policies & Security:** Users want tighter control over what the agent can do autonomously, requesting persistent permission rules, explicit external CLI credential consent, and restricted workspace dotenv authority.
*   **Multi-Provider & Next-Gen Model Support:** A strong push to integrate alternative inference platforms (OpenCode Go/Zen) to unlock cheaper, faster models like DeepSeek-V4, Grok-4.5, and Kimi-k3.
*   **Editor & Protocol Integration:** Demand for standardized protocols (like the Agent Client Protocol registry) to make the TUI seamlessly accessible via modern editors like Zed, reducing terminal-only friction.
*   **Agent Memory & Skill Grouping:** Interest in L2 persistent memory (via extensions like TormentNexus) and the ability to group multiple "skills" together for rapid project bootstrapping.

### 6. Developer Pain Points
*   **Agent Overstepping & Infinite Loops:** The most prominent frustration is the agent ignoring instructions ("the constitution"), making unauthorized modifications, or getting stuck in self-questioning loops without pausing for user input.
*   **Cross-Platform Terminal Quirks:** Windows users frequently cite rendering corruption (emojis, borders, colors) and unresponsive hangs in PowerShell/wezTerm, while Mac users struggle with default cmd.exe limitations and Dropbox File Provider access blocks.
*   **Mid-Turn Intervention:** Developers are frustrated by their inability to interrupt, pause, or inject context while the agent is actively executing a multi-step plan.
*   **Localization & UI Truncation:** Non-English users frequently experience garbled real-time outputs (especially Chinese characters) and truncated text with no hover-tooltips, degrading the TUI readability.

</details>