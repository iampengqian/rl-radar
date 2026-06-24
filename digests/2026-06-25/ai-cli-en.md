# AI CLI Tools Community Digest 2026-06-25

> Generated: 2026-06-24 22:25 UTC | Tools covered: 9

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

Here is the cross-tool comparative analysis of the AI CLI ecosystem for June 25, 2026.

### 1. Ecosystem Overview
The AI developer tools ecosystem in mid-2026 is characterized by rapid maturation and a shift toward complex, multi-agent orchestration. Tools are moving beyond simple code generation to handle deep repository navigation, autonomous task execution, and external API integrations via the Model Context Protocol (MCP). Consequently, community focus has pivoted toward enterprise-grade reliability—specifically sandboxing, context preservation, and cross-platform stability. There is also a pronounced tension between maximizing autonomous capabilities and managing the economic friction of heavy token consumption, forcing tool maintainers to build highly sophisticated context compaction and budget-control mechanisms.

### 2. Activity Comparison
The development velocity and community engagement vary significantly across the ecosystem. Claude Code and OpenAI Codex dominate GitHub activity, while emerging tools like Gemini CLI and DeepSeek TUI iterate aggressively on architectural refactoring.

| AI CLI Tool | Issues Logged (24h) | PRs Logged (24h) | Latest Release Status | Primary Focus Area |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 5 | **v2.1.191** (Released) | Multi-repo context, security patching (SSRF/Injections) |
| **OpenAI Codex** | 10 | 10 | **rust-v0.143.0-alpha.15** (Alpha) | "Ultra" reasoning tier, remote execution stability |
| **Gemini CLI** | 10 | 10 | No new releases | Subagent recovery, POSIX shell native execution |
| **GitHub Copilot CLI**| 10 | 1 | **v1.0.65** (Released) | Custom agent discovery, enterprise configurations |
| **Kimi Code CLI** | 5 | 1 | No new releases | Context compaction cost reduction |
| **OpenCode** | 10 | 10 | **v1.17.10** (Released) | MCP OAuth stability, session snapshot systems |
| **Pi** | 10 | 10 | No new releases | Provider stream recovery, parallel task execution |
| **Qwen Code** | 10 | 10 | **v0.19.2** (Failed publish) | Voice tooling, CI/CD pipeline stabilization |
| **DeepSeek TUI** | 10 | 10 | Targeting v0.8.65 | Multi-provider routing (Fleet substrate) |

### 3. Shared Feature Directions
Analyzing the community digests reveals several unified development vectors:
*   **Context Compaction & State Recovery:** As tasks grow longer, managing the context window is critical. *OpenAI Codex* and *Kimi Code* are fighting bugs where compaction loses operational state or unnecessarily reloads system prompts (burning ~20k tokens). *Claude Code* introduced a `/rewind` feature, while *OpenCode* is building a snapshot-and-revert system to safely manage state rollbacks.
*   **Granular MCP (Model Context Protocol) Lifecycle Control:** The initial hype of MCP is giving way to practical lifecycle management. *Claude Code* users want lazy-loading to prevent startup bloat, *OpenCode* and *GitHub Copilot CLI* are heavily focused on stabilizing remote MCP OAuth/Entra authentication, and *Qwen Code* patched a critical path traversal vulnerability in MCP deletion. 
*   **Cost Transparency & Token Burn Mitigation:** Extreme API consumption is the most widespread developer pain point. *Claude Code* and *Qwen Code* users reported silent background model switching (to Opus/Pro), resulting in massive, unexpected bills. *OpenAI Codex* and *Kimi Code* users report that hidden chain-of-thought (CoT) reasoning burns through daily quotas in minutes.
*   **Advanced Subagent Orchestration:** Tools are shifting to multi-agent architectures. *OpenAI Codex* is adding "Ultra" reasoning for multi-agent delegation, *Pi* is implementing `runParallelAgentTasks`, *DeepSeek TUI* is building a "Fleet" substrate, and *Gemini CLI* is rushing to fix P1 bugs where subagents hang indefinitely or falsely report success.

### 4. Differentiation Analysis
*   **Technical Approach to Tooling:** *Gemini CLI* is leaning into the model's native bash affinity, aiming to replace heavy built-in UI tools with sandboxed POSIX commands (`sed`, `grep`). In contrast, *Claude Code* and *OpenAI Codex* rely on strict internal tool-call JSON parsing and AST-aware navigations.
*   **Target Audience & Ecosystem:** *GitHub Copilot CLI* is heavily focused on enterprise team workflows, evidenced by requests for Azure DevOps integrations, mobile session parity, and enterprise-managed settings. *OpenCode* and *DeepSeek TUI* are targeting power users and "bring-your-own-model" advocates, focusing on decoupling providers from routing logic (e.g., supporting local LLMs, Zhipu, Mistral, and custom endpoints).
*   **Autonomy vs. Control:** *DeepSeek TUI* is actively battling "rogue" agents that enter self-dialogue loops and over-extend their scope. Conversely, *Qwen Code* is dealing with invisible background cron loops, highlighting a stark difference in how tools enforce human-in-the-loop guardrails.

### 5. Community Momentum & Maturity
*   **High Momentum & High Maturity:** **Claude Code** and **OpenAI Codex** have the most active ecosystems. Codex is iterating incredibly fast (5 Rust alpha builds in 24 hours), indicating a major stable release is imminent. Claude Code is demonstrating maturity by swiftly patching critical SSRF and injection vulnerabilities.
*   **Rapid Evolution (Transitional Phase):** **Gemini CLI**, **OpenCode**, and **DeepSeek TUI** are undergoing massive architectural refactoring. DeepSeek is internationalizing its codebase and overhauling its provider routing; OpenCode is stabilizing its TUI across Windows/Linux; Gemini is aggressively fixing subagent reliability and UI rendering bottlenecks.
*   **Enterprise/Steady State:** **GitHub Copilot CLI**, **Kimi Code**, and **Qwen Code** show steady, targeted updates. Qwen is heavily investing in voice-to-code and CI/CD reliability, while Copilot CLI is refining the terminal UX for daily corporate use.

### 6. Trend Signals
*   **Prompt Caching & CoT Economics are Broken:** The reality of 2026 LLMs (with massive hidden reasoning tokens) is making sustained, hours-long CLI tasks financially unviable. Developers now demand strict visibility into *reasoning* token counts and require hard budget caps.
*   **Rise of AST-Aware Context:** Brute-forcing file reads is no longer acceptable. Communities (especially Gemini and Claude) are demanding AST (Abstract Syntax Tree) parsing to allow agents to read exact method bounds, significantly reducing wasted tokens and navigational errors.
*   **Standardization of Agent Protocols:** Tools are moving away from proprietary subagent communication. Both *DeepSeek TUI* and *OpenAI Codex* are adopting the `AgentClientProtocol` (A2A) and strict wire contracts, signaling an impending industry standard for how CLI agents communicate with sidecar processes and IDEs.
*   **Security Shifts to Agentic Vectors:** Traditional web vulnerabilities are appearing in CLI tools. The SSRF vulnerabilities (Claude Code), path traversals (Qwen Code), and MCP URI shadowing (Gemini CLI) show that prompt injection and malicious MCP servers are the new frontier for supply chain attacks.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report based on the latest repository activity.

### 1. Top Skills Ranking
While comment metrics are currently flattening in the raw data, the following Pull Requests represent the most active, critical, and disruptive submissions in the ecosystem:

*   **Skill-Creator Recall & Trigger Fixes ([PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1323](https://github.com/anthropics/skills/pull/1323))**
    *   **Functionality:** Fixes a critical bug in `run_eval.py` where the description-optimization loop reported `recall=0%` for every skill, essentially optimizing against noise.
    *   **Highlights:** This patch addresses one of the most widely reproduced bugs in the repo (Issue #556), fixing trigger detection, Windows stream reading, and artifact installation. Status: **Open**.
*   **Skill-Creator Windows Compatibility ([PR #1099](https://github.com/anthropics/skills/pull/1099), [PR #1050](https://github.com/anthropics/skills/pull/1050))**
    *   **Functionality:** Resolves fatal Windows errors when running the `skill-creator` evaluation loops. 
    *   **Highlights:** Fixes Unix-first assumptions that broke the subprocess `PATHEXT`, pipe reading, and `cp1252` encoding on Windows 11. Status: **Open**.
*   **Document-Typography Skill ([PR #514](https://github.com/anthropics/skills/pull/514))**
    *   **Functionality:** Automated typographic quality control for generated documents.
    *   **Highlights:** Solles common AI generation annoyances like orphan word wraps, widow paragraphs, and numbering misalignment. Status: **Open**.
*   **Meta-Skills: Quality & Security Analyzers ([PR #83](https://github.com/anthropics/skills/pull/83))**
    *   **Functionality:** Introduces two analyzers to evaluate the structural quality and security vulnerabilities of community-submitted skills.
    *   **Highlights:** Provides a comprehensive 5-dimension scoring system for SKILL.md documentation and resource handling. Status: **Open**.
*   **Frontend-Design Skill Improvements ([PR #210](https://github.com/anthropics/skills/pull/210))**
    *   **Functionality:** Revises the frontend-design skill for better clarity and token efficiency.
    *   **Highlights:** Ensures instructions are highly actionable for Claude within a single conversation rather than reading like developer documentation. Status: **Open**.

### 2. Community Demand Trends
Based on open Issues, the community is pushing heavily for the following new directions and improvements:

*   **Enterprise Governance & Security:** Strong requests for policy enforcement, audit trails, and trust scoring ([Issue #412](https://github.com/anthropics/skills/issues/412)), as well as warnings about trust boundary abuse from unofficial community skills masquerading under the `anthropic/` namespace ([Issue #492](https://github.com/anthropics/skills/issues/492)).
*   **Agent Memory & State Management:** Users want persistent context across conversations. Proposed solutions include symbolic notation to compress agent states ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) and dedicated memory skills to maintain context efficiently.
*   **Organizational Sharing:** A massive demand for native, org-wide skill sharing libraries to eliminate the need to manually pass around `.skill` files via internal chat channels ([Issue #228](https://github.com/anthropics/skills/issues/228)).
*   **Standardized MCP Integration:** Requests to expose Skills cleanly as Model Context Protocol (MCP) tools, treating skills as strict API endpoints rather than prompt-based hacks ([Issue #16](https://github.com/anthropics/skills/issues/16)).

### 3. High-Potential Pending Skills
These active PRs address specific, high-impact community pain points and are strong candidates for imminent merging:

*   **[PR #361](https://github.com/anthropics/skills/pull/361) & [PR #539](https://github.com/anthropics/skills/pull/539):** Pre-parse validation for unquoted YAML special characters in skill descriptions. This fixes a silent failure mode that breaks skill triggering.
*   **[PR #362](https://github.com/anthropics/skills/pull/362):** Replaces character-based length checks with UTF-8 byte-length validation, preventing Rust panics in the CLI when processing multi-byte characters.
*   **[PR #541](https://github.com/anthropics/skills/pull/541):** A crucial bugfix for the DOCX skill that prevents document corruption by stopping `w:id` collisions between tracked changes and existing bookmarks.
*   **[PR #154](https://github.com/anthropics/skills/pull/154):** The `shodh-memory` skill, which introduces a highly requested persistent memory system for AI agents.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **reliable infrastructure (specifically fixing cross-platform `skill-creator` evaluation loops)** alongside **robust security governance** to safely share and evaluate these skills at the enterprise level.

---

Here is the Claude Code community digest for June 25, 2026.

### 1. Today's Highlights
Claude Code rolled out two new patch versions (v2.1.190 and v2.1.191), introducing a highly requested `/rewind` feature to recover conversations cleared by mistake and fixing an annoying UI scroll bug during streaming. The community remained highly active, with robust discussions around token consumption, unexpected model switching, and recurring API parsing errors. Additionally, several critical security vulnerabilities in plugin hooks and API rate-limiting handling were addressed via newly opened pull requests.

### 2. Releases
*   **v2.1.191** ([GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.191))
    *   **New Feature:** Added `/rewind` support, allowing users to resume a conversation from right before `/clear` was executed.
    *   **Bug Fix:** Resolved an issue where the UI scroll position jumped to the bottom while reading earlier outputs during a live streaming response.
    *   **Bug Fix:** Fixed an issue where background agents were "resurrecting" after being manually stopped from the tasks panel.
*   **v2.1.190** ([GitHub Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.190))
    *   General bug fixes and reliability improvements.

### 3. Hot Issues
1.  **[#63875](https://github.com/anthropics/claude-code/issues/63875) - Recurring API parse errors interrupting sessions (108 👍 | 69 💬):** Users are experiencing repeated mid-task failures where "The model's tool call could not be parsed," forcing them to abort actions. This seems to happen across various platforms and heavily degrades the DX.
2.  **[#62123](https://github.com/anthropics/claude-code/issues/62123) - macOS/VSCode tool call parsing failures (107 👍 | 59 💬):** Similar to #63875, this issue highlights that Opus models are frequently failing to parse tool calls in VSCode, stalling development workflows. 
3.  **[#42249](https://github.com/anthropics/claude-code/issues/42249) - Extreme token consumption depleting quotas (17 👍 | 23 💬):** Developers report that normal tasks (reading files, running git) are burning through daily API limits in under an hour, making the tool economically unviable for heavy daily use.
4.  **[#69238](https://github.com/anthropics/claude-code/issues/69238) - "No response from API" when Advisor is triggered (34 👍 | 23 💬):** When using Sonnet as the base model, the Opus 4.8 Advisor frequently crashes the session with API network errors, breaking the multi-model workflow.
5.  **[#60093](https://github.com/anthropics/claude-code/issues/60093) - Silent switching to Opus resulting in $1,050 overcharge (9 💬):** A user reported massive unexpected charges due to the backend silently switching from Sonnet to Opus without UI disclosure. This underscores severe anxieties around cost transparency.
6.  **[#23627](https://github.com/anthropics/claude-code/issues/23627) - Multi-repository support for remote/web sessions (81 👍 | 15 💬):** Users are heavily requesting the ability to work across multiple repositories simultaneously in web/remote environments, a crucial feature for microservices architectures.
7.  **[#22931](https://github.com/anthropics/claude-code/issues/22931) - Archived Claude Cowork chats missing (28 👍 | 27 💬):** Archiving Cowork chats currently acts as a hard delete, causing panic over lost context and crucial team handoffs.
8.  **[#25045](https://github.com/anthropics/claude-code/issues/25045) - Allow skills to programmatically rename sessions (92 👍 | 9 💬):** A highly requested feature to let custom skills automatically name and organize chat sessions based on the task being executed.
9.  **[#21432](https://github.com/anthropics/claude-code/issues/21432) - Disable automatic macOS sleep prevention (27 👍 | 7 💬):** Claude Code repeatedly spawns `caffeinate`, forcing macOS laptops to stay awake. Users want a setting to toggle this behavior to save battery.
10. **[#63130](https://github.com/anthropics/claude-code/issues/63130) - Recurring macOS TCC popup (6 👍 | 3 💬):** A persistent privacy permissions popup ("would like to access data from other apps") keeps bothering macOS Sequoia users despite granting permissions.

### 4. Key PR Progress
*Note: Only 5 open PRs were logged in the last 24 hours, all listed below.*
1.  **[PR #70634](https://github.com/anthropics/claude-code/pull/70634) - Handle server rate limiting during normal usage:** Improves the client's resilience when the Anthropic API throttles standard operations.
2.  **[PR #70633](https://github.com/anthropics/claude-code/pull/70633) - Handle rate-limiting headers for Anthropic API:** Introduces proper parsing and backoff behavior based on API rate-limit headers.
3.  **[PR #70582](https://github.com/anthropics/claude-code/pull/70582) - Fix critical security issue in `llm.py`:** Patches an SSRF/URL injection vulnerability where user-controlled URLs were improperly accepted in the security-guidance plugin hooks.
4.  **[PR #70538](https://github.com/anthropics/claude-code/pull/70538) - Sanitize subprocess call in `gitutil.py`:** Fixes a critical command injection vulnerability by sanitizing inputs passed to subprocesses in the git utility plugin.
5.  **[PR #66854](https://github.com/anthropics/claude-code/pull/66854) - Token fix:** A typo'd PR title ("toekn") addressing token calculation or handling (awaiting detailed description from the author).

### 5. Feature Request Trends
*   **Advanced Context & Workspace Management:** There is a massive demand for more flexible workspace definitions. Users want multi-repository support ([#23627](https://github.com/anthropics/claude-code/issues/23627)), parent-directory scoping for `.mcp.json` ([#68603](https://github.com/anthropics/claude-code/issues/68603)), and the ability to programmatically organize and rename sessions via skills ([#25045](https://github.com/anthropics/claude-code/issues/25045)).
*   **MCP (Model Context Protocol) Lifecycle Control:** Developers are asking for finer control over MCP servers, specifically lazy loading or auto-start flags in `.mcp.json` to prevent all servers from booting on startup ([#70015](https://github.com/anthropics/claude-code/issues/70015)).
*   **Hardware & OS Integrations:** Requests to tone down aggressive OS integrations, such as preventing forced sleep avoidance on macOS ([#21432](https://github.com/anthropics/claude-code/issues/21432)).

### 6. Developer Pain Points
*   **Cost Anxiety and Silent Model Switching:** The single biggest frustration is cost control. Users are frustrated by extreme token burn rates ([#42249](https://github.com/anthropics/claude-code/issues/42249)) and are deeply anxious about the system silently upgrading them to expensive models like Opus without explicit consent, leading to bill shocks ([#60093](https://github.com/anthropics/claude-code/issues/60093)). 
*   **API and Tool Parsing Reliability:** Frequent mid-task crashes caused by the model failing to generate valid tool-call JSON ("tool call could not be parsed") are heavily disrupting workflows ([#63875](https://github.com/anthropics/claude-code/issues/63875), [#62123](https://github.com/anthropics/claude-code/issues/62123)).
*   **MCP Server Flakiness:** The MCP ecosystem is proving fragile. Developers report built-in MCPs (like `claude_design`) throwing consistent 404s ([#69313](https://github.com/anthropics/claude-code/issues/69313), [#69317](https://github.com/anthropics/claude-code/issues/69317)), variable expansions like `${HOME}` breaking on reconnects ([#70146](https://github.com/anthropics/claude-code/issues/70146)), and long-running synchronous MCP calls triggering UI watchdog timeouts ([#58480](https://github.com/anthropics/claude-code/issues/58480)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the community digest for OpenAI Codex based on the latest GitHub activities.

# OpenAI Codex Community Digest — 2026-06-25

## 1. Today's Highlights
Codex development is buzzing with rapid iterations towards a new v0.143.0 stable release, evidenced by five new Rust alpha builds pushed in the last 24 hours. The team is heavily focused on stabilizing the architecture around remote executors, introducing an "Ultra" reasoning effort, and resolving critical lifecycle and context compaction bugs in the Desktop App and CLI.

## 2. Releases
The team has pushed a rapid succession of alpha builds for the Rust core, indicating active stabilization for an upcoming release:
*   **rust-v0.143.0-alpha.15** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.15))
*   **rust-v0.143.0-alpha.14** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.14))
*   **rust-v0.143.0-alpha.13** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.13))
*   **rust-v0.143.0-alpha.12** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.12))
*   **rust-v0.143.0-alpha.11** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.11))

## 3. Hot Issues
1.  **[Token Burn Rate](https://github.com/openai/codex/issues/14593)** (#14593): A massive thread with 620 comments and 271 upvotes. Business tier users on VS Code are experiencing extremely fast token consumption, making the tool financially unviable for many.
2.  **[Context Compaction Memory Loss](https://github.com/openai/codex/issues/29356)** (#29356): Users report that automatic context compaction in long Desktop tasks loses operational continuity, breaking complex workflows mid-task.
3.  **[Cloudflare 403 Blocks WebSearch](https://github.com/openai/codex/issues/29197)** (#29197): The Codex WebSearch tool is receiving HTTP 403 Cloudflare challenges, entirely breaking the agent's ability to browse the web.
4.  **[macOS Code Signing Bloat](https://github.com/openai/codex/issues/25667)** (#25667): The macOS Desktop app is leaving behind ~965MB of `code_sign_clone` directories upon every launch, quickly consuming disk space.
5.  **[Orphaned Subagents & Session Hangs](https://github.com/openai/codex/issues/24389)** (#24389): A critical issue where `multi_agent_v1.close_agent` hangs for hours when trying to close an unresponsive subagent, freezing the parent thread.
6.  **[macOS High CPU on Large Threads](https://github.com/openai/codex/issues/25251)** (#25251): Opening large conversation threads in the Desktop app pegs the CPU at 100% indefinitely until the application is force-restarted.
7.  **[Windows Sandbox "Module Not Found"](https://github.com/openai/codex/issues/29127)** (#29127): Following recent updates, Windows 10 users are encountering sandbox setup failures, preventing local execution.
8.  **[Remote Compaction Fatal Error](https://github.com/openai/codex/issues/28592)** (#28592): CLI users on WSL2 are hitting a fatal error during remote context compaction (`expected exactly one compaction output item`), crashing sessions.
9.  **[Windows Desktop Crash Persistence](https://github.com/openai/codex/issues/26990)** (#26990): Local Windows state is not crash-safe; sudden power losses reset pins/projects and corrupt future timestamps.
10. **[Automation Tasks Ignoring Full Access](https://github.com/openai/codex/issues/15310)** (#15310): Scheduled desktop automations silently fall back to restricted `workspace-write` sandboxes, ignoring the user's `danger-full-access` configuration.

## 4. Key PR Progress
1.  **[Add Ultra Reasoning Effort](https://github.com/openai/codex/pull/29899)** (#29899): Introduces a new "Ultra" reasoning tier designed to combine maximum reasoning effort with proactive multi-agent delegation.
2.  **[Preserve Live Turn History Across Reconnects](https://github.com/openai/codex/pull/29754)** (#29754): Fixes App Server disconnects by ensuring the latest turn history is fully reconstructed instead of reverting to partial snapshots.
3.  **[Isolate Curated Plugin Sync Git Environment](https://github.com/openai/codex/pull/29785)** (#29785): A crucial fix that prevents the Codex plugin sync from accidentally deleting user files or resetting local Git branches due to ambient environment variables.
4.  **[Define Process Host Wire Protocol](https://github.com/openai/codex/pull/29804)** (#29804): Establishes a strict wire contract for "code mode," ensuring safe communication between the client and sidecar processes.
5.  **[Make Windows Executable Resolution Deterministic](https://github.com/openai/codex/pull/29845)** (#29845): Fixes a bug where Windows command lookups used the parent environment instead of the child environment, causing mismatches in `PATH` and `PATHEXT`.
6.  **[Add Managed New-Thread Model Settings](https://github.com/openai/codex/pull/29683)** (#29683): Allows managed defaults (like model and reasoning effort) to be parsed directly from `requirements.toml` for new threads.
7.  **[Read Connector Declarations from Executor Plugins](https://github.com/openai/codex/pull/29852)** (#29852): Improves remote execution by allowing capability roots to read hosted connectors across different operating systems.
8.  **[Normalize Parent Segments in Absolute Joins](https://github.com/openai/codex/pull/29903)** (#29903): Fixes a `PathUri` bug where absolute path joins incorrectly handled `..` segments, leading to wrong file resolution.
9.  **[Bounded AGENTS.md and Git Root Probes](https://github.com/openai/codex/pull/29870)** (#29870): Significantly reduces remote execution latency by pipelining metadata calls during project root discovery.
10. **[Flush Trailing Realtime Transcript on Session End](https://github.com/openai/codex/pull/29914)** (#29914): Ensures that late-arriving transcript entries are safely flushed during session teardown, fixing race conditions.

## 5. Feature Request Trends
*   **Claude Code Feature Parity:** Developers are actively requesting feature parity with Claude Code, specifically highlighting the need for deep lifecycle hooks ([#21753](https://github.com/openai/codex/issues/21753)) and a customizable TUI status line to monitor token usage/model context ([#17827](https://github.com/openai/codex/issues/17827)).
*   **Mature Subagent Management:** Users want better visibility and control over multi-agent architectures, including the ability to manually intervene in orphaned/hanging subagents ([#19197](https://github.com/openai/codex/issues/19197)).
*   **MCP Integration Expansions:** There is a strong push to support inbound MCP notifications from external channels directly into active CLI sessions ([#15299](https://github.com/openai/codex/issues/15299)).
*   **Session Sync & Continuity:** Users desire seamless synchronization between CLI and Desktop App sessions, allowing remote resume capabilities without losing historical context ([#14722](https://github.com/openai/codex/issues/14722)).

## 6. Developer Pain Points
*   **Resource Leaks & Overheads:** Unacceptable token burn rates ([#14593](https://github.com/openai/codex/issues/14593)), 100% CPU spikes on large threads ([#25251](https://github.com/openai/codex/issues/25251)), and massive disk bloat on macOS ([#25667](https://github.com/openai/codex/issues/25667)) are severely impacting developer workflows.
*   **Windows OS Instability:** Windows users continue to face an uphill battle with broken sandbox setups ([#29127](https://github.com/openai/codex/issues/29127)), non-crash-safe local states ([#26990](https://github.com/openai/codex/issues/26990)), and applications failing to restart after updates ([#29787](https://github.com/openai/codex/issues/29787)).
*   **Context Compaction Fragility:** Developers are frustrated by how easily long-running contexts break during CLI and Desktop compaction events, resulting in lost operational steps or fatal JSON-RPC errors ([#29356](https://github.com/openai/codex/issues/29356), [#28592](https://github.com/openai/codex/issues/28592)).
*   **Sandbox Permission Friction:** Configured permissions are frequently ignored or reset. Users report being constantly badgered for manual approvals despite having "Full Access" enabled ([#23393](https://github.com/openai/codex/issues/23393)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 25, 2026.

### 1. Today's Highlights
The Gemini CLI community is heavily focused on enhancing subagent reliability, with significant discourse surrounding execution hangs, recovery mechanisms, and strict permission boundaries. Key architectural improvements are also underway, highlighted by robust security PRs for sandboxing/file operations and major performance optimizations for the CLI's terminal rendering engine.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Hot Issues
Developers and maintainers are actively discussing structural improvements to agent delegation and system reliability. Here are the top 10 noteworthy issues:

*   **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS is reported as GOAL success:** A P1 bug where the `codebase_investigator` falsely reports success after hitting its turn limit, masking task interruptions from the user.
*   **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs:** A high-impact P1 issue where the CLI hangs indefinitely (sometimes for an hour) when deferring simple tasks to the generalist subagent. 
*   **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command execution gets stuck:** Another P1 reliability issue where the terminal gets stuck "Awaiting user input" long after a simple CLI command has successfully executed.
*   **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Zero-Dependency OS Sandboxing:** A major architectural proposal to leverage Gemini 3's native bash affinity (using `grep`, `awk`, `sed`) securely by implementing OS-level sandboxing and post-execution intent routing.
*   **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations:** An epic issue focusing on expanding the CLI's behavioral eval testing infrastructure across the 6 supported Gemini models to prevent regressions.
*   **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads and mapping:** An investigation into integrating Abstract Syntax Tree (AST) aware tools to allow the agent to read precise method bounds, drastically reducing token noise and wasted turns.
*   **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Add deterministic redaction for Auto Memory:** A crucial security enhancement requesting deterministic secret redaction *before* local transcripts are sent to the background memory extraction agent.
*   **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Stop Auto Memory from retrying low-signal sessions:** Addresses an annoying loop where the memory agent continuously surfaces unprocessed, low-signal transcripts because it fails to mark them as skipped.
*   **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills/sub-agents enough:** Highlights user frustration that the model rarely triggers custom skills (like `gradle` or `git`) autonomously, requiring explicit prompt instructions.
*   **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Discourage destructive behavior:** Requests behavioral guardrails to prevent the agent from executing dangerous commands (e.g., `git reset --force` or raw DB modifications) when safer alternatives exist.

### 4. Key PR Progress
Recent pull requests show a strong push toward hardening security, fixing terminal rendering bottlenecks, and refining tool execution.

*   **[PR #27966](https://github.com/google-gemini/gemini-cli/pull/27966) Enforce case-insensitive sensitive path blocklist:** Implements a strict, production-grade security fix to prevent prompt injection from bypassing blocklists on sensitive directories (`.git`, `.env`).
*   **[PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971) Resolve thought leakage:** Surgically strips Gemini's internal reasoning/monologue thoughts from plain-text history turns, preventing the model from getting confused or entering infinite monologue loops.
*   **[PR #28053](https://github.com/google-gemini/gemini-cli/pull/28053) Defensive path resolution for at-reference files:** Fixes a critical production bug where file tools failed because the model passed paths prefixed with `@` (e.g., `@policies/new-policies.txt`).
*   **[PR #27636](https://github.com/google-gemini/gemini-cli/pull/27636) Optimize VirtualizedList:** A massive UI performance update that optimizes the rendering of large datasets and fixes click-handling anomalies for static terminal items.
*   **[PR #27964](https://github.com/google-gemini/gemini-cli/pull/27964) Scope MCP resource resolution:** Fixes a vulnerability where cross-server URI collisions allowed an untrusted MCP server to silently shadow a trusted server's resources.
*   **[PR #28132](https://github.com/google-gemini/gemini-cli/pull/28132) Prevent workspace binary shadowing:** Fixes a CI pipeline issue where integration tests were mistakenly running against local workspace source instead of the published NPM bundle.
*   **[PR #28131](https://github.com/google-gemini/gemini-cli/pull/28131) Fix `no_proxy` test:** Adds environment variable checks to prevent test failures in CI environments where `NO_PROXY` is already set.
*   **[PR #25354](https://github.com/google-gemini/gemini-cli/pull/25354) Shell inference for file operations:** A foundational PR that excludes lower-fidelity file tools when sandboxing is enabled, forcing the agent to rely on native POSIX commands (`sed`, `grep`) via the shell.
*   **[PR #27101](https://github.com/google-gemini/gemini-cli/pull/27101) Stop after unsupported metadata listing:** A fix for the A2A (Agent-to-Agent) server that gracefully returns a `501` for non-memory task stores instead of crashing.
*   **[PR #28054](https://github.com/google-gemini/gemini-cli/pull/28054) Strip URL punctuation in auth errors:** A small but helpful UX fix that removes trailing periods from HTTP links in sign-in error messages, ensuring the URLs remain clickable in the terminal.

### 5. Feature Request Trends
*   **AST-Aware Codebase Navigation:** Strong demand for integrating AST parsing tools (like `tilth` or `glyph`) to allow the agent to read exact method bounds, reducing token waste and navigational errors.
*   **Agent Autonomy & Resilience:** Requests for subagents to automatically recover from soft locks or max-turn limits without faking "success" states, alongside better autonomous triggering of custom skills.
*   **Native Shell First (POSIX Tooling):** A desire to lean into Gemini 3's native bash capabilities by replacing heavy built-in UI tools with sandboxed raw shell execution.
*   **Observability & Trajectory Sharing:** Enhanced visibility into what subagents are doing, such as making subagent trajectories viewable via `/chat share` and including subagent context in `/bug` reports.

### 6. Developer Pain Points
*   **Execution Hangs:** The most prominent frustration is the CLI hanging indefinitely during simple tasks—specifically when spawning generalist subagents, executing shell commands, or triggering interactive CLI tools like Vite.
*   **Auto Memory System Quirks:** Developers are experiencing noisy background processes where the Auto Memory agent loops over invalid patches, retries low-signal sessions indefinitely, or risks exposing secrets before redaction.
*   **Tool & Context Overload:** Running multiple extensions pushes the agent over the 128-tool limit, causing 400 errors, which highlights a need for smarter dynamic tool scoping.
*   **Workspace Pollution:** Users complain that when restricted to shell execution, the agent litters random directories with temporary edit scripts, making version control cleanup annoying.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 25, 2026.

### 1. Today's Highlights
GitHub Copilot CLI rolled out version **v1.0.65**, bringing highly anticipated quality-of-life updates to session directory persistence (`/cd`), custom agent discovery, and filesystem permissions. Community activity remains heavily focused on UI/UX refinements, particularly around keyboard input flows, mobile session parity, and enterprise configurations. Additionally, a major drive for MCP (Model Context Protocol) flexibility highlights the ecosystem's push toward deeply customized, agentic workflows.

### 2. Releases
**[v1.0.65](https://github.com/github/copilot-cli/releases/tag/v1.0.65)** (Released 2026-06-24)
*   **Directory & Agent Context:** The `/cd` command now persists the working directory, ensuring that resuming a session returns you to the correct context and automatically discovers custom agents in that directory.
*   **Permission Fixes:** Commands utilizing slash-prefixed string arguments (e.g., `--body "/azp run"`) no longer trigger spurious filesystem permission prompts.
*   **UI Enhancements:** The fullscreen timeline stays anchored during operations for a smoother visual experience.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[#1632 [OPEN]](https://github.com/github/copilot-cli/issues/1632) Support subfolders for skills:** With 21 upvotes, users are heavily requesting the ability to organize skills into subfolders, as the current flat structure doesn't scale well for power users.
*   **[#3832 [CLOSED]](https://github.com/github/copilot-cli/issues/3832) Models 'Blocked/Disabled' after outage:** A recent GitHub outage caused the model selection UI to block all models. While resolved, it highlights fragility in the CLI's fallback handling. 
*   **[#2643 [OPEN]](https://github.com/github/copilot-cli/issues/2643) Silent command rewrite via `preToolUse`:** Plugin authors are frustrated that `updatedInput` with `permissionDecision: allow` still triggers interactive confirmation dialogs, breaking automated agent flows.
*   **[#2419 [OPEN]](https://github.com/github/copilot-cli/issues/2419) Configurable Key Bindings:** Users want to map function keys to slash commands to enable frictionless, rapid model switching without typing out `/model` IDs.
*   **[#3913 [CLOSED]](https://github.com/github/copilot-cli/issues/3913) Model selection empty on resume:** A nasty bug in v1.0.64 prevented users from selecting models when resuming sessions, effectively blocking continued multi-turn agent tasks.
*   **[#3909 [OPEN]](https://github.com/github/copilot-cli/issues/3909) Enterprise server-managed settings:** Org admins lack a way to centrally push configurations (like environment variables) to local CLI installs, severely limiting enterprise adoption.
*   **[#2978 [OPEN]](https://github.com/github/copilot-cli/issues/2978) Headless SDK fails behind corporate proxy:** The Copilot SDK's `session.create` fails with "fetch failed" behind corporate HTTP proxies, blocking headless automation in enterprise environments.
*   **[#1729 [OPEN]](https://github.com/github/copilot-cli/issues/1729) Configurable Keybinds:** Echoing #2419, the community strongly desires custom keybind overrides to align the CLI with their existing terminal muscle memory.
*   **[#3692 [OPEN]](https://github.com/github/copilot-cli/issues/3692) Escape cancels queued prompts:** Pressing `Escape` to stop a running task unexpectedly discards the user's queued follow-up prompt rather than shifting focus to it.
*   **[#2916 [OPEN]](https://github.com/github/copilot-cli/issues/2916) Contextual `/mcp` for agents:** The `/mcp` command currently operates globally; users need MCP servers to load contextually based on the active custom agent.

### 4. Key PR Progress
*Note: Activity in the PR queue was unusually light over the last 24 hours, with only one major movement.*
*   **[PR #2587 [CLOSED]](https://github.com/github/copilot-cli/pull/2587):** Introduced an AI-powered issue classification workflow using GitHub Agentic Workflows. This backend enhancement automates the applying of `area:` and `triage` labels, significantly speeding up repository maintenance.

### 5. Feature Request Trends
*   **Granular Plugin & Agent Context:** Users are moving beyond basic agent execution. There is a strong push for plugins to manage their own state better, evidenced by requests for programmatic compaction via `/compact` ([#3916](https://github.com/github/copilot-cli/issues/3916)), agent-specific MCP loading ([#2916](https://github.com/github/copilot-cli/issues/2916)), and organizing skill sets into subfolders ([#1632](https://github.com/github/copilot-cli/issues/1632)).
*   **Remote & Mobile Session Parity:** Developers want to manage CLI sessions from their phones. A rapid succession of issues requested support for slash commands, `!shell` execution, and file/image uploads via the GitHub Mobile App ([#3922](https://github.com/github/copilot-cli/issues/3922), [#3924](https://github.com/github/copilot-cli/issues/3924), [#3923](https://github.com/github/copilot-cli/issues/3923)).
*   **Enterprise & Multi-Platform Alignment:** There is a growing demand to integrate broader DevOps workflows. Users are asking for native Azure DevOps support in the Up Next panel ([#3794](https://github.com/github/copilot-cli/issues/3794)) and centralized enterprise environment management ([#3909](https://github.com/github/copilot-cli/issues/3909)).

### 6. Developer Pain Points
*   **Terminal UI Quirks:** Minor rendering bugs are breaking immersion. The markdown renderer misinterprets double em-dashes as strikethroughs ([#3920](https://github.com/github/copilot-cli/issues/3920)), and multiple-choice prompts drop characters on line wraps ([#3921](https://github.com/github/copilot-cli/issues/3921)).
*   **Input Friction:** Keyboard navigation currently lacks the intuitiveness of standard shells. Autocomplete behaviors in `/cd` are unpredictable ([#3918](https://github.com/github/copilot-cli/issues/3918)), recalling previous `!shell` commands via arrow keys doesn't work ([#2680](https://github.com/github/copilot-cli/issues/2680)), and changing models mid-prompt interrupts drafting flows ([#3138](https://github.com/github/copilot-cli/issues/3138)).
*   **Environment & Networking Fragility:** Corporate proxies and custom auth remain a massive hurdle. Users report frustrating failures with Kerberos proxies ([#523](https://github.com/github/copilot-cli/issues/523)), Azure OAuth token refresh errors ([#3583](https://github.com/github/copilot-cli/issues/3583)), and Linux AppImages leaking library paths and breaking git HTTPS fetches ([#3925](https://github.com/github/copilot-cli/issues/3925)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest (2026-06-25)

Here is the technical digest for the Kimi Code CLI community based on the last 24 hours of GitHub activity.

### 1. Today's Highlights
The past 24 hours saw no new official releases, but the community remained highly active in identifying edge cases related to context management and token consumption. Notably, developers have flagged significant overhead during context compaction and raised concerns regarding K2.6/K2.7 model token billing calculations. 

### 2. Releases
**None.** 
*No new releases were recorded in the last 24 hours. The latest circulated versions appear to be around v0.18.0 - v0.19.2, with some users testing older versions like v0.76.*

### 3. Hot Issues
*   **[OPEN] Context compaction reloads system prompts, wasting ~20k tokens** ([Issue #2472](https://github.com/MoonshotAI/kimi-cli/issues/2472))
    *   *Why it matters:* A newly raised enhancement request that directly impacts operational costs. When context compaction triggers, the CLI currently reloads system prompts and project instructions (like `AGENTS.md`) from scratch, costing around 20k tokens. Optimizing this state retention will be critical for long-running sessions.
*   **[OPEN] KimiCode usage calculation problem / 2-hour quota exhausted too fast** ([Issue #1994](https://github.com/MoonshotAI/kimi-cli/issues/1994))
    *   *Why it matters:* Gained significant community traction (👍 7). Users are frustrated that the K2.6 model's long chain-of-thought (CoT) exhausts the 5-hour token quota after only 1 or 2 prompts. The community is demanding clarity on whether billing is strictly by API request count or by the heavily inflated CoT token count.
*   **[OPEN] Kimi CLI stuck reading a single file in an infinite loop** ([Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640))
    *   *Why it matters:* An older but highly persistent bug (active since Jan 2026). Users utilizing custom Anthropic endpoints on Linux are experiencing agent halts due to read-file loops, stalling development workflows.
*   **[CLOSED] `kimi web` starts MCP servers from CLI installation directory** ([Issue #2469](https://github.com/MoonshotAI/kimi-cli/issues/2469))
    *   *Why it matters:* A critical path-resolution bug affecting the K2.7 web interface. Launching `kimi web` incorrectly resolved MCP servers from the global CLI installation directory rather than the relative workspace directory, breaking local MCP tools. 
*   **[CLOSED] Web command bug in v0.19.2** ([Issue #2473](https://github.com/MoonshotAI/kimi-cli/issues/2473))
    *   *Why it matters:* A generic but timely bug report regarding the `/web` instruction throwing errors upon startup. Flagged and closed within 24 hours, indicating active maintenance by the core team.

### 4. Key PR Progress
*   **[CLOSED] feat: add vim-style j/k keyboard navigation for approval and question prompts** ([PR #1377](https://github.com/MoonshotAI/kimi-cli/pull/1377))
    *   *Summary:* A community-submitted feature to enhance terminal UX by integrating Vim-style `j`/`k` keybindings for navigating CLI approval and question prompts. The PR was closed after several months of review.

### 5. Feature Request Trends
*   **Context Optimization & State Retention:** Developers want smarter context compaction. Specifically, requests to cache or retain system-level prompts and project configurations locally during context window shifts, rather than blindly re-pushing massive system prompts (Issue #2472).
*   **Workspace-Aware Tooling:** Strong demand for the CLI and Web interfaces to respect workspace-relative paths natively, especially for MCP server initializations (Issue #2469).
*   **Terminal UX Tweaks:** Continued interest from power users for keyboard-centric navigation (e.g., Vim bindings) to speed up agent approvals (PR #1377).

### 6. Developer Pain Points
*   **Hidden Token Bloat from CoT:** The most prominent frustration is the disconnect between advertised API request quotas and actual token usage. Because models like K2.6/K2.7 generate extremely long background reasoning chains, developers are finding their quotas burned up almost instantly, making sustained coding impossible without clear visibility into background token drains (Issue #1994).
*   **Agent Looping Failures:** Agents getting trapped in cyclical file-reading routines is eroding trust in fully autonomous CLI task execution, requiring manual user intervention to break the loop (Issue #640).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for June 25, 2026.

### 1. Today's Highlights
OpenCode rolled out version **v1.17.10**, introducing significant enhancements to Model Context Protocol (MCP) utilities, including resource reading and template listing, alongside a new lightweight `--mini` CLI mode. The community and core contributors have mobilized a massive debugging effort focused on MCP OAuth authentication flows, connection stability, and robust security redactions. Additionally, the team is actively integrating new LLM providers and prototyping a highly-anticipated session snapshot and revert system.

### 2. Releases
**[v1.17.10](https://github.com/anomalyco/opencode/releases)**
*   **Core Improvements:** Added MCP server instructions to session context, added OpenCode-managed provider integration support, and implemented MCP resource template listing and resource read tools. Also introduced a new `--mini` CLI mode for lightweight operations.
*   **Bugfixes:** General stability fixes including hiding MCP resource template tools when not applicable.

### 3. Hot Issues
1.  **[#2072: Support for Cursor?](https://github.com/anomalyco/opencode/issues/2072)** - As Cursor's CLI gains traction, the community is highly active (185 upvotes) in requesting native integration or support within OpenCode.
2.  **[#10416: OpenCode is not private by default?](https://github.com/anomalyco/opencode/issues/10416)** - A major privacy concern where session titles are computed via external networks even when users restrict outbound traffic for locally hosted LLMs. 
3.  **[#12308: Entra Authentication for MCP doesn't work](https://github.com/anomalyco/opencode/issues/12308)** - Highlights ongoing friction with enterprise identity providers, specifically regarding mismatches in `resource` parameters during Entra (Azure AD) app logins.
4.  **[#5444: MCP with oauth doesn't work](https://github.com/anomalyco/opencode/issues/5444)** - Reflects broad user frustration with remote MCP OAuth configurations failing to trigger authentication flows properly.
5.  **[#31119: [BUG] Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119)** - A breaking change in recent updates causing database schema errors that block users from launching the application entirely.
6.  **[#31607: launch opencode 1.17.00 tui may cause crash](https://github.com/anomalyco/opencode/issues/31607)** - Critical crash reports on Windows linked to Bun standalone executables, citing segmentation faults.
7.  **[#32706: TUI crash with "An error occurred in Effect.tryPromise"](https://github.com/anomalyco/opencode/issues/32706)** - Immediate TUI startup failures on version 1.17.7+, deeply affecting Windows developers.
8.  **[#24817: Ctrl+Z closes/suspends OpenCode instead of undoing text input](https://github.com/anomalyco/opencode/issues/24817)** - A persistent UX pain point on Linux where the SIGTSTP signal overrides standard text-input undo behaviors.
9.  **[#33721: qwen3.7-max/plus service instability on OpenCode Go (Zen API)](https://github.com/anomalyco/opencode/issues/33721)** - Users report severe intermittent timeouts (Cloudflare 524 errors) when using newer Qwen models in thinking mode due to 120s proxy limits.
10. **[#23556: MCP server connection lost after context compaction](https://github.com/anomalyco/opencode/issues/23556)** - A critical workflow disruption where MCP tools completely disappear post-compaction, forcing users to restart sessions.

### 4. Key PR Progress
1.  **[#33723: fix(opencode): redact secrets from config responses](https://github.com/anomalyco/opencode/pull/33723)** - Major security improvement that recursively replaces sensitive provider headers and options with `[redacted]` in config API endpoints.
2.  **[#33226: feat(core): add session snapshot and revert system](https://github.com/anomalyco/opencode/pull/33226)** - Introduces a backend-neutral Git service for capturing session states, allowing users to preview and revert file changes seamlessly.
3.  **[#33724: fix(opencode): reconnect closed remote MCP clients](https://github.com/anomalyco/opencode/pull/33724)** - Implements automatic reconnection with exponential backoff for remote MCP clients, resolving stale status indicators.
4.  **[#33456: feat(llm): add Mistral AI and Together AI support](https://github.com/anomalyco/opencode/pull/33456)** - Expands model ecosystem support by mapping Mistral and Together AI SDK packages to the OpenAI-compatible chat route.
5.  **[#33715: fix(mcp): make oauth callback startup atomic](https://github.com/anomalyco/opencode/pull/33715)** - Prevents race conditions by binding the OAuth callback listener directly to `127.0.0.1` before publishing module-global server states.
6.  **[#30153: feat: save file attachments to disk before model processing](https://github.com/anomalyco/opencode/pull/30153)** - Fixes modality limits by saving uploaded images/PDFs to disk locally when passing context to text-only models (like DeepSeek).
7.  **[#33727: fix(ui): guard custom-answer textarea against IME composition Enter](https://github.com/anomalyco/opencode/pull/33727)** - Vital UX fix for international users, preventing accidental prompt submission when hitting Enter during multi-key input compositions.
8.  **[#33718: fix(opencode): restrict local mcp environment](https://github.com/anomalyco/opencode/pull/33718)** - Sandboxes local MCP subprocesses by restricting them from inheriting the complete parent environment variables.
9.  **[#31201: fix(app): preserve prompt drafts across session switches](https://github.com/anomalyco/opencode/pull/31201)** - Fixes an annoying bug where prompt drafts were marked as "ready" before asynchronous storage fully loaded.
10. **[#33708: refactor(protocol): extract server contracts](https://github.com/anomalyco/opencode/pull/33708)** - Significant architectural refactor moving pure Effect `HttpApi` contracts and DTO schemas into dedicated `protocol` and `schema` packages.

### 5. Feature Request Trends
*   **MCP Authentication & Stability:** Deep demand for better handling of OAuth, Entra ID, Mutual TLS (mTLS), and automatic reconnections for remote MCP servers.
*   **External Tooling Integration:** Strong community push (led by Issue #2072) to support or integrate competing CLI tools like Cursor's new CLI.
*   **Local Configuration Overrides:** Requests for project-level config overrides (e.g., `opencode.local.json`) to manage environment-specific settings without altering shared repository files (Issue #17232).
*   **Session Management:** Desire for robust history manipulation, specifically reverting file changes to specific steps and maintaining tool availability after context compaction.

### 6. Developer Pain Points
*   **Cross-Platform TUI Crashes:** Windows and Linux users are experiencing hard crashes (Segmentation faults, Effect.tryPromise errors) on v1.17.x, often tied to underlying Bun executable issues.
*   **Flaky Zen API Timeouts:** Developers utilizing OpenCode Go's hosted models (specifically Qwen3.7) are hitting strict 120-second Cloudflare proxy timeouts, breaking complex agentic workflows.
*   **Unhandled Global States:** The CLI suspending or closing on `Ctrl+Z` (Linux/Ubuntu) instead of executing text-level undos breaks standard developer typing habits.
*   **Network Privacy Defaults:** Unexpected outbound network calls for basic features (like session naming) undermine the tool's viability for strictly local, air-gapped, or privacy-conscious deployments.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-06-25.

### 1. Today's Highlights
The Pi ecosystem saw significant activity focused on provider connectivity and Terminal UI (TUI) reliability. The community and maintainers actively addressed critical session-hanging bugs, particularly with Anthropic and OpenAI APIs, while pushing important fixes to prevent TUI crashes and scroll-back clearing. Additionally, robust discussions emerged around the safety of third-party packages following reports of malicious extensions.

### 2. Releases
*No new official releases in the last 24 hours.*

### 3. Hot Issues
1. **[OPEN] openai-codex Connection Reliability Issues** ([#4945](https://github.com/earendil-works/pi/issues/4945)): With 69 comments, this remains the most active discussion. Users report the TUI getting stuck on `Working...` with GPT-5.5/codex without any visible error, requiring an escape to recover.
2. **[OPEN] Streaming markdown forces scroll to bottom** ([#5825](https://github.com/earendil-works/pi/issues/5825)): A high-complaint issue where scrolling up to read code is interrupted because Pi forces a scroll to the bottom during markdown streaming. 
3. **[OPEN] Official local LLM provider extension** ([#3357](https://github.com/earendil-works/pi/issues/3357)): A highly upvoted feature request to dynamically fetch model lists from `baseUrl` to seamlessly integrate local runners like `llama.cpp` and `ollama`.
4. **[OPEN] Move off Shrinkwrap** ([#5653](https://github.com/earendil-works/pi/issues/5653)): A discussion addressing dependency bloat where installing multiple Pi packages places duplicate copies of `pi-ai` on disk, causing module-level registry failures.
5. **[CLOSED] Sessions hang on "working" with Anthropic subscription** ([#5291](https://github.com/earendil-works/pi/issues/5291)): Reported by Enterprise users, sessions frequently hang concurrently. This often requires task interruption and is tied to provider timeouts.
6. **[CLOSED] OpenAI Responses mid-stream retryable error is not retried** ([#6019](https://github.com/earendil-works/pi/issues/6019)): Highlighted a gap in error handling where OpenAI explicitly allowed a retry, but Pi finalized the message with a `stopReason: "error"`.
7. **[OPEN] AgentSession settlement/continuation and assistant-tail lifecycle bugs** ([#5886](https://github.com/earendil-works/pi/issues/5886)): A critical meta-issue detailing post-run logic bugs where the agent tries to continue from stale or invalid transcripts.
8. **[OPEN] `SessionManager.open()` silently truncates non-session files** ([#6002](https://github.com/earendil-works/pi/issues/6002)): A destructive bug where passing an NDJSON log file to `--session` silently overwrites it with a 133-byte session header without warning.
9. **[CLOSED] TUI full redraw clears terminal scrollback during active rendering** ([#6050](https://github.com/earendil-works/pi/issues/6050)): A core TUI rendering bug where custom redraws cause the terminal scrollbar to jump back to the beginning of the chat.
10. **[CLOSED] Package Report: @hypabolic/pi-hypa** ([#6052](https://github.com/earendil-works/pi/issues/6052)): Security concerns raised by the community regarding the safety and rapid download volume of the `@hypabolic/pi-hypa` package, marking a need for tighter registry scanning.

### 4. Key PR Progress
1. **[feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/5509):** Introduces native support for Amazon Bedrock Mantle, including compatibility for GPT 5.5 and 5.4 models.
2. **[fix: Recover from hung streams and retry unmodeled Bedrock errors](https://github.com/earendil-works/pi/pull/6051):** Directly addresses connection hanging by adding idle (240s) and connect timeouts, turning silent socket failures into retryable exceptions.
3. **[feat: Normalize modern Microsoft Foundry Responses API endpoints](https://github.com/earendil-works/pi/pull/6004):** Fixes HTTP 400 errors by normalizing modern Foundry base URLs provided via `AZURE_OPENAI_BASE_URL`.
4. **[feature: Show context estimates in session tree](https://github.com/earendil-works/pi/pull/6018):** Improves UX by adding context usage estimates to the Session Tree, helping users find heavy sessions quickly.
5. **[fix: TUI crashes instead of truncating lines that exceed terminal width](https://github.com/earendil-works/pi/issues/6058):** Prevents fatal crashes when a rendered TUI line exceeds the terminal width, opting for graceful truncation instead.
6. **[feat: Expose reasoning token counts to Usage](https://github.com/earendil-works/pi/issues/6057):** Adds an optional `reasoning` field to the Usage API output, capturing thinking tokens from providers like OpenAI and Anthropic that were previously dropped.
7. **[fix: Show resources before messages when resuming session](https://github.com/earendil-works/pi/pull/6048):** Fixes resume behavior so loaded resources (Context, Skills, Prompts) appear at the top of the chat, rather than after the restored messages.
8. **[feat: Add `runParallelAgentTasks` for concurrent independent sub-task loops](https://github.com/earendil-works/pi/pull/6054):** Introduces a new utility to execute independent agent loops in parallel, optimizing workflow execution time.
9. **[fix: Stabilize working status row](https://github.com/earendil-works/pi/pull/6026):** A targeted fix for the TUI scrolling bug to ensure the "working" status row doesn't force viewport jumps during active streams.
10. **[feat: Add support for reading BMP files from disk](https://github.com/earendil-works/pi/issues/6047):** Extends the `read` tool capabilities to handle BMP files locally, matching existing clipboard support.

### 5. Feature Request Trends
* **Local and Custom LLM Onboarding:** Users want a frictionless way to connect local models (Ollama, LM Studio, llama.cpp) and custom hosted endpoints (Microsoft Foundry, Charm Hyper) without hardcoding static model lists.
* **Parallel Agent Orchestration:** Demand for concurrent agent execution loops, allowing multiple sub-tasks to be evaluated simultaneously rather than sequentially.
* **Token Transparency:** Developers are requesting deeper insights into reasoning tokens and context estimates directly within the TUI and API payload to better manage context windows.

### 6. Developer Pain Points
* **Stream Connectivity Drops:** High frustration surrounds silent connection failures (half-open sockets) on major providers (OpenAI/Anthropic) that leave the TUI hanging on `Working...` indefinitely without triggering an auto-retry.
* **TUI Rendering Quirks:** The TUI frequently fights the user during active streams by forcefully scrolling to the bottom or hard-crashing on wide lines instead of wrapping or truncating gracefully.
* **Destructive State Management:** Edge cases in session management continue to frustrate developers, notably a bug where accidentally pointing the CLI to an invalid log file silently destroys megabytes of data.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-06-25.

### 1. Today's Highlights
Qwen Code rolled out multiple release candidates (up to v0.19.2) alongside heavy CI/CD infrastructure improvements aimed at stabilizing the release pipeline. The community was highly active in reporting edge cases in UI rendering, background loops, and local LLM integrations. Security also took center stage with a critical path traversal vulnerability being swiftly addressed in the desktop app.

### 2. Releases
*   **[v0.19.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2)** & **[v0.19.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.2-preview.0)**: 
    *   Added a new remote LSP (Language Server Protocol) status route via PR [#5762](https://github.com/QwenLM/qwen-code/pull/5762).
    *   *Note: The automated release workflow for v0.19.2 failed during the publish job and is currently being investigated (see [Issue #5831](https://github.com/QwenLM/qwen-code/issues/5831)).*

### 3. Hot Issues
1.  **[Issue #5834](https://github.com/QwenLM/qwen-code/issues/5834) - [P1] Path traversal vulnerability in source deletion:** A high-severity security bug where crafted `sourceSlug` inputs could escape workspace directories and delete arbitrary files. A fix was quickly opened in PR #5829.
2.  **[Issue #5819](https://github.com/QwenLM/qwen-code/issues/5819) - Silent model upgrade causes token waste:** Users reported that upgrading Qwen Code silently modified `settings.json` to use a more expensive Pro model, rapidly draining API credits. Also noted were unexpected Traditional Chinese outputs.
3.  **[Issue #5800](https://github.com/QwenLM/qwen-code/issues/5800) - TUI overwrites last line on long replies:** In Static render mode, replies taller than the terminal window have their last line overwritten upon completion, breaking upstream Ink behavior.
4.  **[Issue #5836](https://github.com/QwenLM/qwen-code/issues/5836) - Request for project-level persistence:** Currently, todos, plans, and memories are saved globally. Users are requesting an option to save these inside the project directory (e.g., `.qwen/todos`) to enable Git version control and cross-device syncing.
5.  **[Issue #5736](https://github.com/QwenLM/qwen-code/issues/5736) - Local LLM full prompt reprocessing:** Developers using local backends (like llama.cpp) noticed recent updates cause excessive full prompt re-processing during continuous conversations, severely impacting local performance.
6.  **[Issue #5219](https://github.com/QwenLM/qwen-code/issues/5219) - Integration tests skipping PRs:** E2E integration tests only run during nightly releases, meaning breaking changes pass PR checks but break the release pipeline.
7.  **[Issue #5611](https://github.com/QwenLM/qwen-code/issues/5611) - `web_fetch` fails on JSON APIs:** The tool sends `text/*` Accept headers by default, causing HTTP 415 Unsupported Media Type errors when hitting standard JSON REST APIs.
8.  **[Issue #5823](https://github.com/QwenLM/qwen-code/issues/5823) - Invisible background cron loops:** The `/loop` command fires scheduled tasks silently. Users found the AI working autonomously on old tasks in new sessions without the ability to easily list or halt them.
9.  **[Issue #5806](https://github.com/QwenLM/qwen-code/issues/5806) - Esc doesn't cancel pending loops:** Aborting an in-flight `/loop` tick with `Esc` doesn’t cancel the scheduled wakeup, leading to unexpected ghost executions later.
10. **[Issue #5798](https://github.com/QwenLM/qwen-code/issues/5798) - TUI flicker during multi-agent runs:** Background agents cause severe screen flickering and break scroll-back functionality in non-VP (Viewport) terminal mode.

### 4. Key PR Progress
1.  **[PR #5829](https://github.com/QwenLM/qwen-code/pull/5829) - fix(desktop): reject unsafe source slugs before deletion:** Directly patches the P1 path traversal vulnerability (Issue #5834) by sanitizing deletion paths.
2.  **[PR #5804](https://github.com/QwenLM/qwen-code/pull/5804) - feat(telemetry): Make sensitive span attribute limit configurable:** Increases the default OpenTelemetry payload truncation to 1 MiB and allows custom env var overrides.
3.  **[PR #5809](https://github.com/QwenLM/qwen-code/pull/5809) - refactor(cli): Split serve server routes:** Major architectural refactor modularizing the `qwen serve` daemon to handle routes, auth, and telemetry independently.
4.  **[PR #5778](https://github.com/QwenLM/qwen-code/pull/5778) - feat(cli): add /model --vision:** Introduces a fallback vision model setting, allowing a text-only primary model to borrow image processing capabilities from a specified vision model.
5.  **[PR #5817](https://github.com/QwenLM/qwen-code/pull/5817) - feat(cli): support user-configurable keyterms file for voice dictation:** Expands voice ASR biasing beyond hardcoded generic dev terms, allowing custom domain-specific vocabulary.
6.  **[PR #5827](https://github.com/QwenLM/qwen-code/pull/5827) - fix(core): add streaming inactivity timeout:** Resolves a major local-LLM hang where the OpenAI pipeline would wait infinitely for an inactive stream chunk.
7.  **[PR #5779](https://github.com/QwenLM/qwen-code/pull/5779) - ci: add `@qwen-code /resolve`:** Introduces a maintainer-triggered bot command to automatically resolve Git merge conflicts on eligible pull requests.
8.  **[PR #5832](https://github.com/QwenLM/qwen-code/pull/5832) - ci(release): make release flow merge-queue-safe:** Cleans up release notes by hiding automated release PRs and adapts the pipeline for GitHub merge queues.
9.  **[PR #5657](https://github.com/QwenLM/qwen-code/pull/5657) - fix(cli): stop repeated duplicate provider responses:** Fixes a tool-result loop where duplicate provider tool-call IDs caused infinite repetitive executions.
10. **[PR #5826](https://github.com/QwenLM/qwen-code/pull/5826) - feat(cli): Add skill usage stats:** Adds live, per-session skill invocation metrics accessible via `/stats skills`.

### 5. Feature Request Trends
*   **Ubiquitous Voice Tooling:** Expanding voice dictation capabilities is a major focus. Users want configurable ASR biasing ([Issue #5816](https://github.com/QwenLM/qwen-code/issues/5816)), LLM transcript refinement before prompt insertion ([Issue #5770](https://github.com/QwenLM/qwen-code/issues/5770)), and extension of these features to Web/Desktop UIs ([Issue #5796](https://github.com/QwenLM/qwen-code/issues/5796)).
*   **Cross-Device & Project Portability:** Strong demand to shift from global user configurations to project-level persistence for Todos, Plans, and Memories, enabling seamless multi-device and team-based workflows ([Issue #5836](https://github.com/QwenLM/qwen-code/issues/5836)).
*   **Smarter Terminal UX:** Requests to make the CLI more readable out-of-the-box, such as enabling the built-in status line by default ([Issue #5789](https://github.com/QwenLM/qwen-code/issues/5789)) and standardizing Unicode symbols over emojis ([Issue #5787](https://github.com/QwenLM/qwen-code/issues/5787)).
*   **Intelligent Worktree Management:** Automating `node_modules` symlinks conditionally based on dependency changes, rather than applying static global rules ([Issue #5790](https://github.com/QwenLM/qwen-code/issues/5790)).

### 6. Developer Pain Points
*   **Fragile CI/CD Pipeline:** Multiple issues ([#5219](https://github.com/QwenLM/qwen-code/issues/5219), [#5665](https://github.com/QwenLM/qwen-code/issues/5665), [#4805](https://github.com/QwenLM/qwen-code/issues/4805)) highlight deep frustration with the current testing loop. Stale green checks allow semantic conflicts to merge, and because E2E tests only run at release time, regressions are discovered too late.
*   **Unpredictable Autonomous Agents:** Background loops and cron tasks are firing silently ([Issue #5823](https://github.com/QwenLM/qwen-code/issues/5823)), and `Esc` fails to fully kill pending wakeups ([Issue #5806](https://github.com/QwenLM/qwen-code/issues/5806)). This makes the AI feel out of control during automated tasks.
*   **Local/OpenAI-Backend Quirks:** Developers running local or OpenAI-compatible backends face significant friction. Issues include unbounded streaming timeouts causing hangs ([PR #5827](https://github.com/QwenLM/qwen-code/pull/5827)), broken prompt caching triggering massive re-processing ([Issue #5736](https://github.com/QwenLM/qwen-code/issues/5736)), and irrelevant follow-up suggestions cluttering local interactions ([PR #5821](https://github.com/QwenLM/qwen-code/pull/5821)).
*   **Cost Control & Configuration Safety:** The framework silently altering critical configurations—like switching to a more expensive model upon upgrade ([Issue #5819](https://github.com/QwenLM/qwen-code/issues/5819))—erodes trust and incurs real financial costs.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for DeepSeek TUI (CodeWhale) for June 25, 2026.

### 1. Today's Highlights
The CodeWhale project is undergoing a massive architectural stabilization phase, heavily focused on the **v0.8.65** milestone to decouple provider identities from model routing. Significant strides were made today in refactoring the configuration engine, introducing a unified provider readiness dashboard, and finalizing the "Fleet" subagent execution substrate. Additionally, the team successfully merged major internationalization (i18n) efforts and resolved critical TUI usability regressions around approval modals.

### 2. Releases
No new official releases were cut in the last 24 hours. The project remains in an intensive integration and stabilization phase targeting the **v0.8.65** milestone.

### 3. Hot Issues
Here are the 10 most noteworthy issues driving current development:

*   **[#3275](https://github.com/Hmbown/CodeWhale/issues/3275) [bug] CodeWhale self-questioning and scope creep:** 
    A highly discussed issue where the agent over-extends its scope, entering a self-driven loop of proposing and executing code without user confirmation. This highlights ongoing challenges in tightly bounding agent autonomy.
*   **[#3205](https://github.com/Hmbown/CodeWhale/issues/3205) [enhancement] Fleet loadout auto and semantic route roles:** 
    Defines the core architecture for CodeWhale's multi-agent "Fleet" system. It demands that automatic compute loadouts resolve whole role/slot configurations rather than just picking model strings.
*   **[#3461](https://github.com/Hmbown/CodeWhale/issues/3461) [bug] MCP duplicate server instance lifecycle:** 
    A reliability blocker where a single MCP server entry spawns two processes—one orphaned—wasting RAM and causing pipe crashes if either is killed.
*   **[#2608](https://github.com/Hmbown/CodeWhale/issues/2608) [epic] Separate provider facts, model facts, and route resolution:** 
    The foundational epic for v0.8.65. It enforces the invariant that model strings alone are insufficient for routing, requiring explicit provider-scoped execution contexts.
*   **[#3439](https://github.com/Hmbown/CodeWhale/issues/3439) [enhancement] Integrate Zhipu GLM-5.2 as provider route fixture:** 
    A strong community request to integrate GLM-5.2 specifically to handle long-document understanding and Chinese language creation better than DeepSeek, utilizing the new Fleet subagents.
*   **[#3192](https://github.com/Hmbown/CodeWhale/issues/3192) [enhancement] Registry listing for agentclientprotocol:** 
    Requests listing CodeWhale in the `agentclientprotocol/registry` to streamline installations and native usage inside IDEs like Zed.
*   **[#3466](https://github.com/Hmbown/CodeWhale/issues/3466) [bug] Approval modal cancellation and review-required semantics:** 
    Users report friction from a regression (since v0.8.64) that forces destructive approval modals every time, requesting an option to revert to no-confirmation execution.
*   **[#3385](https://github.com/Hmbown/CodeWhale/issues/3385) [enhancement] Provider-owned live catalogs and secret-free model cache:** 
    Pushes for dynamic `/models` results so hosted aggregators and local runtimes can expose current model rows without relying on hardcoded lists in the codebase.
*   **[#3154](https://github.com/Hmbown/CodeWhale/issues/3154) [epic] Fleet execution substrate for profiled workers:** 
    Defines the durable execution layer for profiled CodeWhale workers, separating the agent engine from role/model policy.
*   **[#3494](https://github.com/Hmbown/CodeWhale/issues/3494) [question] Evaluate Orchestration disposition in constitution.md:** 
    An empirical evaluation tracking whether newly added prompt instructions in the agent's "constitution" actually help orchestration or just add token bloat.

### 4. Key PR Progress
Recent merges showcase a heavy push toward finalizing v0.8.65 routing and UI improvements:

*   **[PR #3562](https://github.com/Hmbown/CodeWhale/pull/3562): Passive MCP tool discovery + custom provider rows**
    Fixes the duplicate MCP process bug (#3461) by preventing passive API actions from spawning stdio processes, and adds support for custom provider configurations.
*   **[PR #3556](https://github.com/Hmbown/CodeWhale/pull/3556): Provider live /models fetch + secret-free cache**
    Implements the engine and tests for dynamic model fetching, allowing CodeWhale to securely cache provider catalogs without storing API secrets.
*   **[PR #3555](https://github.com/Hmbown/CodeWhale/pull/3555): /provider readiness dashboard**
    Introduces capability, metadata, and reasoning readiness badges directly into the TUI's `/provider` dashboard, greatly improving multi-provider visibility. 
*   **[PR #3549](https://github.com/Hmbown/CodeWhale/pull/3549) & [PR #3559](https://github.com/Hmbown/CodeWhale/pull/3559): Chinese locale extraction**
    Successfully harvests 408 hardcoded Simplified Chinese strings into a dedicated `locales/zh-Hans.json` file, cleaning up a massive 5,385-line localization file.
*   **[PR #3554](https://github.com/Hmbown/CodeWhale/pull/3554): Capability-aware fallback acceptance coverage**
    Adds critical test coverage and local/private guardrails for the provider fallback chain, preventing silent vendor switching during route failures.
*   **[PR #3553](https://github.com/Hmbown/CodeWhale/pull/3553): Suppress typed ask-rule prompts in YOLO mode**
    Resolves TUI friction where YOLO (full tool access) mode was still triggering approval modals for specific shell/file commands due to overlapping `permissions.toml` rules.
*   **[PR #3547](https://github.com/Hmbown/CodeWhale/pull/3547): Save exact file ask rules from write approvals**
    Users can now press `S` during a write/edit approval to permanently whitelist a workspace file, preventing the TUI from asking again for that specific path.
*   **[PR #3561](https://github.com/Hmbown/CodeWhale/pull/3561): Extract shared bridge core helpers**
    Refactors Telegram, Feishu, WeCom, and Weixin integrations to use a unified `integrations/bridge-core` package, reducing code duplication.
*   **[PR #2486](https://github.com/Hmbown/CodeWhale/pull/2486): WhaleFlow cost tracking**
    Adds `tokens_used` and `cost_usd` fields to `SubAgentResult`, allowing the WhaleFlow runtime and TUI to display per-agent API expenses.
*   **[PR #3557](https://github.com/Hmbown/CodeWhale/pull/3557): /config preset calm**
    Delivers a highly requested "beautiful/calm transcript" UI preset, separating aesthetic preferences from power-user debug settings.

### 5. Feature Request Trends
*   **Multi-Provider & Open Routing:** The overwhelming trend is moving away from DeepSeek-specific architecture toward an agnostic "provider/model/route" system. Users want the ability to easily configure custom endpoints (Issue #1519) and leverage diverse models (e.g., Zhipu GLM-5.2, OpenAI Codex) side-by-side.
*   **"Fleet" Subagent Orchestration:** There is massive momentum behind building a robust multi-agent framework. Users want granular control over agent roles, delegations, and profile-based loadouts (Issues #3205, #3167).
*   **Session & Telemetry Visibility:** Developers are requesting better observability into agent operations, specifically regarding sidebar session browsing (Issue #2934) and normalized usage telemetry across different providers (Issue #2961).

### 6. Developer Pain Points
*   **Over-Extended Agent Autonomy:** The most prominent frustration is the agent "going rogue" or over-stepping bounds—making unrequested modifications and entering self-dialogue loops without pausing for human review (Issue #3275).
*   **Approval Modal Fatigue:** Recent changes to destructive action approvals have caused significant friction. Developers are highly annoyed by redundant confirmation pop-ups, especially when operating in YOLO/Auto modes or when applying rules that should persist (Issue #3466).
*   **Provider Routing Ambiguity:** Configuring local vs. hosted models has historically been confusing due to mixed identities (e.g., `vllm` vs `openai` base formats). The strict separation of API protocols from provider identities is a major relief for users setting up complex environments (Issue #2300).

</details>