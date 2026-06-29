# AI CLI Tools Community Digest 2026-06-30

> Generated: 2026-06-29 22:20 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the provided community digests from June 30, 2026.

### 1. Ecosystem Overview
The AI CLI tooling ecosystem in mid-2026 has matured beyond simple chat interfaces into complex, terminal-native agentic platforms. The paradigm has decisively shifted toward multi-agent orchestration, autonomous workflows ("Yolo" modes, background loops), and deep IDE integration. However, as these tools attempt to manage massive context windows and execute commands autonomously, they are universally grappling with systemic growing pains: brittle Terminal UI (TUI) input handling, aggressive token consumption, and context compaction amnesia. The ecosystem is highly fragmented, ranging from vendor-locked flagship tools (Claude Code, OpenAI Codex) to highly extensible, open-ecosystem clients (OpenCode, Pi) competing on provider flexibility and cost efficiency.

### 2. Activity Comparison
*Note: Counts below reflect the specific noteworthy issues and PRs explicitly highlighted in today's digests, serving as a proxy for daily community momentum.*

| Tool | Tracked Issues | Tracked PRs | Release Status | Primary Focus / Theme |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 1 | No new releases | TUI regressions, multi-agent state management, safety filters |
| **OpenAI Codex** | 10 | 10 | `rust-v0.142.4` (No user-facing changes) | Context compaction fixes, budget drain, local provider routing |
| **Gemini CLI** | 10 | 10 | `v0.51.0-nightly` | Security hardening, sandboxing, fixing infinite agent loops |
| **GitHub Copilot CLI**| 10 | 0 | `v1.0.66-2` | Plugin ecosystem, enterprise governance, Windows OS parity |
| **Kimi Code CLI** | 1 | 0 | No new releases | Quiet period; basic cross-platform input UX |
| **OpenCode** | 10 | 10 | No new releases | V2 architectural refactor, provider compatibility, session isolation |
| **Pi** | 10 | 7 | No new releases | Third-party provider expansion, network error surfacing, state profiles |
| **Qwen Code** | 10 | 10 | No new releases | Daemon (`qwen serve`) stability, autonomous `/loop` automation |
| **DeepSeek TUI** | 10 | 10 | Preparing `v0.8.67` | Onboarding overhaul, YOLO mode trust boundaries, cache optimization |

### 3. Shared Feature Directions
*   **Context Compaction & Memory Management:** Nearly all tools are fighting "agent amnesia." Codex (forgetting plot/rules), OpenCode (session forking), Qwen (configurable compaction models), and Pi (pruning 90k char thought blocks) all show developers demanding deterministic ways to preserve core operational context during long sessions.
*   **Autonomous & Background Execution ("YOLO" Modes):** Users want unsupervised automation. Claude Code (`tmux` background agents), Qwen Code (`/loop` autonomous PR fixing), DeepSeek TUI (YOLO trust boundaries), and Gemini (zero-dependency sandboxing) are all building ways to let agents execute shell commands safely without continuous user approval.
*   **Terminal UI (TUI) Stability & Navigation:** Terminal rendering is a major shared pain point. Mouse capture regressions are frustrating users across Claude Code, Copilot CLI, and Qwen Code. Meanwhile, Gemini and OpenCode are pushing for structural code navigation (AST-aware file reading) to reduce token noise.
*   **Granular Model Routing & Cost Control:** As token costs spike, communities are demanding multi-model orchestration. OpenCode and Pi are heavily focused on routing to alternative providers (Scaleway, Ollama, OpenRouter). DeepSeek, Qwen, and Claude users are specifically requesting the ability to assign cheaper models to background tasks (like summarization) to save API budgets.

### 4. Differentiation Analysis
*   **Vendor-Locked vs. Provider-Agnostic:** Claude Code, Codex, and Copilot CLI are tightly integrated with their parent ecosystems (Anthropic, OpenAI, GitHub). In contrast, OpenCode and Pi differentiate heavily as universal interfaces, prioritizing seamless routing to local LLMs (Ollama) and regional providers (Scaleway, Xiaomi).
*   **Target Environments:** Codex and Copilot CLI are heavily leaning into Enterprise/Corporate environments (server-managed settings, GitHub attachment variants). Qwen Code is uniquely positioned around remote daemon management (`qwen serve`) with direct integrations into chat apps like DingTalk and Telegram.
*   **Architectural Approach:** Gemini CLI is focusing on zero-dependency OS sandboxing to safely leverage native bash execution. OpenCode is undergoing a massive decoupling refactor to its `@opencode-ai/client` to allow embedders to build custom UIs and toolchains.

### 5. Community Momentum & Maturity
*   **High Momentum & Iteration:** OpenAI Codex, Gemini CLI, Qwen Code, and OpenCode show massive momentum today, each tracking 10 active PRs addressing complex architectural issues. Qwen and OpenCode are rapidly iterating on daemon capabilities and V2 refactors, respectively.
*   **Mature but Stagnant/Troubled Hotspots:** Claude Code and Copilot CLI have massive user bases (indicated by high upvotes and enterprise focus), but are currently bottlenecked by severe platform regressions (Claude's false-positive cyber filters, Copilot's broken Windows MCP execution). Kimi Code CLI shows the lowest momentum, dealing only with basic key-mapping issues.
*   **Fast Followers:** DeepSeek TUI and Pi are moving quickly to patch holes left by the major players, specifically focusing on UX friction (DeepSeek's setup wizard) and provider error transparency (Pi).

### 6. Trend Signals
*   **Token Economics are Critical:** Multiple communities (Codex, DeepSeek, Qwen, Pi) report massive frustration over explosive token consumption (e.g., Codex 5.5 budget draining 20x faster, DeepSeek burning 400M tokens daily). This signals that context caching is fundamentally broken in many tools, and developers urgently need cost attribution dashboards and isolated compaction models.
*   **The Death of the "Alt-Screen" TUI:** There is severe pushback against heavy, app-like terminal interfaces. Copilot CLI and Claude Code users are actively requesting inline rendering and the ability to disable alt-screen modes, signaling a preference for CLI tools that feel like native shell extensions rather than isolated GUI applications.
*   **Supply Chain & Security Posturing:** As agents gain autonomous execution rights, security is tightening. Gemini (patching sandbox escapes), Codex (adding 256-bit WebSocket auth), and Pi (flagging NPM supply chain risks) highlight the industry's realization that autonomous agents pose severe local security risks if not properly sandboxed.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem, based on repository activity up to June 30, 2026.

### 1. Top Skills Ranking
*Note: As comment counts are currently masked in the API data, these are ranked by community engagement velocity, cross-references, and overall discussion impact.*

1. **Skill-Creator (Evaluation & Optimization Overhaul)**
   * **Functionality:** Fixes the `run_eval.py` script and the description-optimization loop (`run_loop.py`) that currently reports `0% recall`, effectively breaking the automated skill-testing pipeline.
   * **Discussion Highlights:** This is the most actively discussed topic in the ecosystem. Multiple PRs ([#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323)) and Issues (#556, #1169) independently report and propose fixes for the trigger detection failures and Windows subprocess compatibility bugs. 
   * **Status:** Open
2. **Skill-Creator (Cross-Platform & YAML Validation)**
   * **Functionality:** Adds pre-parse validation to prevent silent YAML parsing failures when descriptions contain unquoted special characters, and fixes UTF-8 byte-length panics.
   * **Discussion Highlights:** Highly coordinated community effort (PRs [#361](https://github.com/anthropics/skills/pull/361), [#539](https://github.com/anthropics/skills/pull/539), [#362](https://github.com/anthropics/skills/pull/362)) to harden the skill-creator against edge-case crashes.
   * **Status:** Open
3. **Self-Audit (Four-Dimension Reasoning Quality Gate)**
   * **Functionality:** A universal quality-control skill that audits AI output for completeness, consistency, groundedness, and formatting before delivering a final response to the user.
   * **Discussion Highlights:** Touted as a universal wrapper for any tech stack, reflecting a massive community desire for automated AI self-correction ([PR #1367](https://github.com/anthropics/skills/pull/1367)).
   * **Status:** Open
4. **Document-Typography Skill**
   * **Functionality:** Automatically prevents common typographic errors in AI-generated documents, such as orphan words, widow paragraphs, and numbering misalignment.
   * **Discussion Highlights:** Addresses a highly requested quality-of-life improvement since users rarely prompt for good typography but expect it ([PR #514](https://github.com/anthropics/skills/pull/514)).
   * **Status:** Open
5. **Skill-Quality-Analyzer & Skill-Security-Analyzer**
   * **Functionality:** Meta-skills designed to evaluate other skills across structural quality, documentation, and security vulnerabilities.
   * **Discussion Highlights:** Directly addresses the growing anxiety around permission boundaries by providing automated linting/security scanning for skill developers ([PR #83](https://github.com/anthropics/skills/pull/83)).
   * **Status:** Open
6. **Frontend-Design Skill Enhancements**
   * **Functionality:** Revises the existing frontend-design instructions to be more actionable and token-efficient for Claude within a single conversation.
   * **Discussion Highlights:** Focuses on the intersection of UI/UX generation and context-window management ([PR #210](https://github.com/anthropics/skills/pull/210)).
   * **Status:** Open

### 2. Community Demand Trends
Based on the most active Issues, the community is pushing the ecosystem in four distinct directions:
* **Enterprise Security & Namespace Trust Boundaries:** The highest-voted Issue ([#492](https://github.com/anthropics/skills/issues/492)) highlights a critical vulnerability where community skills can impersonate official Anthropic skills. There is massive demand for sandboxing, strict permission logic (as seen in [Issue #1175](https://github.com/anthropics/skills/issues/1175)), and trust-scoping.
* **Organizational & Cross-Platform Collaboration:** Users want seamless sharing. Issue [#228](https://github.com/anthropics/skills/issues/228) requests org-wide skill libraries (instead of manual file sharing), while Issue [#16](https://github.com/anthropics/skills/issues/16) proposes exposing Skills as standardized MCPs (Model Context Protocol) for broader API interoperability. 
* **Persistent Memory & Context Management:** To handle long-running agentic tasks, developers are proposing state-management skills like *compact-memory* ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) and *shodh-memory* ([PR #154](https://github.com/anthropics/skills/pull/154)) to symbolically compress agent state and reduce token bloat.
* **Automated Testing Patterns:** The community wants Claude to write better tests, leading to proposals for comprehensive testing trophy methodologies and React component testing skills ([PR #723](https://github.com/anthropics/skills/pull/723)).

### 3. High-Potential Pending Skills
These open PRs solve critical, widely-acknowledged pain points and have a high probability of merging soon:
* **PR #1298 & PR #1323:** Fix the broken skill-creator evaluation loop. Because the `0% recall` bug halts automated skill optimization completely, merging one of these comprehensive fixes is critical for the repo's future throughput.
* **PR #541 (DOCX Tracked Changes Fix):** Fixes document corruption caused by OOXML `w:id` collisions when adding tracked changes to documents with existing bookmarks. A highly specific, immediate fix for enterprise document users.
* **PR #486 (ODT Skill):** Introduces native creation, filling, and HTML conversion for OpenDocument/LibreOffice files—bridging a major gap for international and open-source enterprise users.
* **PR #509 (CONTRIBUTING.md):** Addresses the poor community health score by establishing clear guidelines for how external developers should propose and format new skills.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust developer tooling (specifically fixing the broken skill-creator evaluation pipeline) and strict security guardrails to prevent namespace abuse in enterprise environments.**

---

# Claude Code Community Digest - 2026-06-30

## 1. Today's Highlights
The Claude Code community remained highly active in the terminal UI (TUI) and agent orchestration spaces, with significant friction around mouse input regressions on macOS/WSL and the spawning of background teammates. A sudden spike in cybersecurity false-positive blocks (specifically involving video processing and drone telemetry) has halted several developer workflows. Additionally, billing transparency for premium slash commands like `/ultrareview` and account access post-payment continue to be major operational frustrations.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion today:

*   **[#69238 [BUG] No response from API error when Advisor is triggered](https://github.com/anthropics/claude-code/issues/69238)** (👍 46)
    *   *Why it matters:* Users utilizing Sonnet as a base model are experiencing severe API timeouts when the "Advisor" feature attempts to use Opus 4.8. This breaks the core workflow of developers relying on automated model escalation.
*   **[#69415 [BUG] API Error: Connection closed mid-response](https://github.com/anthropics/claude-code/issues/69415)** (👍 34)
    *   *Why it matters:* WSL/VSCode users report frequent connection drops, making the tool fundamentally unusable for complex, long-running coding tasks.
*   **[#72337 / #72328 [BUG] Cyber filter blocks legitimate video/drone UI workflows](https://github.com/anthropics/claude-code/issues/72337)**
    *   *Why it matters:* A cluster of nearly identical issues highlights a major regression in Claude's server-side safety filters. Developers building FFmpeg pipelines, H.264 decoders, and drone telemetry UIs are having their sessions abruptly halted as false-positive "cyber" threats.
*   **[#65833 v2.1.150: scroll wheel no longer scrolls conversation](https://github.com/anthropics/claude-code/issues/65833)** (👍 45)
    *   *Why it matters:* A frustrating regression in WSL where the mouse scroll wheel cycles through command history instead of scrolling the TUI output, severely disrupting navigation.
*   **[#71465 Mouse clicks not responding in TUI on Terminal.app](https://github.com/anthropics/claude-code/issues/71465)**
    *   *Why it matters:* A recent regression on macOS causing mouse clicks to fail entirely in agents mode, preventing users from selecting agents or clicking links.
*   **[#72343 Agent Teams: tmux/auto teammates crash on spawn](https://github.com/anthropics/claude-code/issues/72343)**
    *   *Why it matters:* Multi-agent orchestration is broken for `tmux` users. Spawned teammates immediately crash due to non-TTY stdin triggering `--print` without a prompt.
*   **[#69829 Random text insertion in agent harness under high concurrent load](https://github.com/anthropics/claude-code/issues/69829)**
    *   *Why it matters:* Developers running massive parallel agent fleets (20+ agents) on Mac are seeing random strings (e.g., "hello") injected into the harness, indicating race conditions under heavy load.
*   **[#72012 Agent View: reopening stopped session respawns with a new session-id](https://github.com/anthropics/claude-code/issues/72012)**
    *   *Why it matters:* A critical state-management bug where reopening a completed background agent wipes the prior conversation history, breaking continuity for long-term background tasks.
*   **[#72278 /ultrareview charges for failed runs](https://github.com/anthropics/claude-code/issues/72278)**
    *   *Why it matters:* Community frustration over the billing model for premium skills. Users are being charged (or consuming free quotas) for operations that crash before producing results.
*   **[#5088 Claude Account Disabled After Payment](https://github.com/anthropics/claude-code/issues/5088)** (👍 58)
    *   *Why it matters:* An older but heavily upvoted issue where developers are being instantly locked out of their accounts after paying for the Max 5x plan. Still generating active community support.

## 4. Key PR Progress
Only one open PR was updated in the last 24 hours, but it provides a valuable documentation update for hook developers:

*   **[#72264 docs(examples/hooks): note Bash tool_input also exposes run_in_background/description/timeout](https://github.com/anthropics/claude-code/pull/72264)**
    *   *Summary:* Updates the Python bash command validator example to document additional payload fields (`run_in_background`, `description`, `timeout`). This is highly relevant for developers building robust `PreToolUse` hooks to intercept and audit complex terminal commands.

## 5. Feature Request Trends
Based on recent issue tracking, developers are heavily requesting the following enhancements:
*   **TUI Notifications & Accessibility:** Strong demand for a terminal bell (`BEL`) notification when Claude pauses for tool approval ([#36850](https://github.com/anthropics/claude-code/issues/36850)), alongside better Right-to-Left (RTL) language support for Arabic and Hebrew ([#38005](https://github.com/anthropics/claude-code/issues/38005)).
*   **Session Continuity & Limits:** Users want the ability to seamlessly continue working or gracefully degrade when hitting session context limits ([#13354](https://github.com/anthropics/claude-code/issues/13354)), as well as better UI pinning for scheduled background routines ([#54517](https://github.com/anthropics/claude-code/issues/54517)).
*   **Transparency & Control:** High demand (300+ 👍) for an option to always show Claude's internal thinking process by default ([#8477](https://github.com/anthropics/claude-code/issues/8477)), and requests to hide aggressive usage-limit warning banners in the IDE ([#65396](https://github.com/anthropics/claude-code/issues/65396)).

## 6. Developer Pain Points
*   **Terminal/IDE Regressions:** A massive cluster of current bugs relates to terminal capture and input. Developers are frustrated by mouse events (clicks, scrolls, and focus-in sequences) being improperly consumed by the TUI, which breaks terminal text selection and triggers accidental permission denials in IntelliJ/VSCode ([#65833](https://github.com/anthropics/claude-code/issues/65833), [#71465](https://github.com/anthropics/claude-code/issues/71465), [#72188](https://github.com/anthropics/claude-code/issues/72188)).
*   **Overzealous Safety Filters:** Security researchers and video engineers are hitting a wall with ClAudit's `cyber` safety filters. Legitimate dev tasks involving video decoding, telemetry UI, and FFmpeg configurations are being flagged as threats, completely blocking authorized work ([#72355](https://github.com/anthropics/claude-code/issues/72355), [#72323](https://github.com/anthropics/claude-code/issues/72323)).
*   **Agent State Management:** As developers push Claude Code into multi-agent architectures, keeping background agents alive and reconnecting to their state without spawning new sessions is proving highly brittle ([#72012](https://github.com/anthropics/claude-code/issues/72012), [#69829](https://github.com/anthropics/claude-code/issues/69829)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the community digest for OpenAI Codex based on the GitHub data provided.

# OpenAI Codex Community Digest - 2026-06-30

## 1. Today's Highlights
Today's updates are headlined by a new CLI release (`rust-v0.142.4`) and significant infrastructure improvements, including enhanced WebSocket tracing and fixes for MCP (Model Context Protocol) server blocking. However, the community is actively voicing frustration over severe context compaction bugs that derail long-running tasks and persistent rate-limiting issues that rapidly drain user budgets. Developers contributing to the CLI will also notice a strong focus on refining the agent review pipeline and custom provider compatibility.

## 2. Releases
*   **[rust-v0.142.4](https://github.com/openai/codex/compare/rust-v0.142.3...rust-v0.142.4)**
    *   **Chores:** No user-facing changes were identified for this release.

## 3. Hot Issues
1.  **[#28879](https://github.com/openai/codex/issues/28879) GPT-5.5 Rate-limit cost jumped 10-20x (197 comments, 340 upvotes):** ChatGPT Plus users report that since mid-June, the 5-hour Codex budget drains in just 2-3 prompts. Logs show a massive increase in the limit-percentage consumed per token.
2.  **[#14593](https://github.com/openai/codex/issues/14593) Burning tokens very fast (626 comments, 276 upvotes):** A long-standing issue where VS Code extension users feel their tokens are being consumed far too quickly. 
3.  **[#28224](https://github.com/openai/codex/issues/28224) SQLite feedback logs causing massive SSD wear (107 comments, 406 upvotes):** The CLI was writing ~640 TB/year of logs. The original author confirmed recent merged PRs reduced log volume by 85%, saving SSD endurance.
4.  **[#11023](https://github.com/openai/codex/issues/11023) Codex desktop app for Linux (132 comments, 658 upvotes):** Due to macOS battery drain issues, users are highly requesting a native Linux desktop application. This remains the most upvoted enhancement request.
5.  **[#2847](https://github.com/openai/codex/issues/2847) Exclude sensitive files from sandbox (90 comments, 456 upvotes):** Users are requesting an explicit `.codexignore` mechanism to prevent the agent from reading or sending sensitive local files to the model.
6.  **[#5957](https://github.com/openai/codex/issues/5957) Auto compaction causes GPT-5-Codex to lose the plot (32 comments):** Users report that context compaction makes the agent forget it is mid-task, resulting in halted progress and forgotten file edits.
7.  **[#25792](https://github.com/openai/codex/issues/25792) Context compaction forgets AGENTS rules (11 comments):** After automatic compaction triggers, Codex is dropping operational context, causing task progress to inexplicably jump backwards (e.g., from 97% back to 42%).
8.  **[#29356](https://github.com/openai/codex/issues/29356) Preserve operational continuity during compaction (14 comments):** Users suggest that Codex should explicitly preserve the last 5 operational steps verbatim during context compaction to prevent the amnesia mentioned above.
9.  **[#26234](https://github.com/openai/codex/issues/26234) Flatten MCP namespace for non-OpenAI providers (22 comments):** Codex wraps MCP tools in a proprietary format that breaks compatibility when routing requests through Ollama, OpenRouter, or AWS Bedrock.
10. **[#13270](https://github.com/openai/codex/issues/13270) "Invalid input: string too long" error (8 comments):** The CLI throws an unhelpful error when tool call arguments exceed 1MB, with no built-in chunking or graceful handling.

## 4. Key PR Progress
1.  **[#30618](https://github.com/openai/codex/pull/30618) Prevent tool-search rollout poisoning:** Fixes a critical bug where malformed `tool_search_call.arguments` could permanently brick a user's session by being replayed infinitely on cold resumes.
2.  **[#30269](https://github.com/openai/codex/pull/30269) Disable Nagle on Rendezvous WebSockets:** Disables Nagle's algorithm unconditionally for exec-server WebSockets to reduce latency in remote connections.
3.  **[#29602](https://github.com/openai/codex/pull/29602) Flatten namespace tools for providers without wrappers:** Resolves [Issue #26234](https://github.com/openai/codex/issues/26234) by allowing custom providers (like local LLMs) to utilize MCP tools without requiring OpenAI's proprietary wrapper format.
4.  **[#30315](https://github.com/openai/codex/pull/30315) Add generated token auth to app-server WebSockets:** Enhances local security by requiring a 256-bit URL-safe token for app-server WebSocket listeners.
5.  **[#30500](https://github.com/openai/codex/pull/30500) & [#30509](https://github.com/openai/codex/pull/30509) Run reviews without unfinished MCP servers:** Decouples code review sessions from MCP startup times, allowing users to run `/review` without waiting for background MCP OAuth discovery.
6.  **[#30611](https://github.com/openai/codex/pull/30611) Bound outbound requests by their total deadline:** Fixes an issue where app-server backpressure caused outbound requests to dispatch past their deadlines, resulting in misleading timeout errors.
7.  **[#30604](https://github.com/openai/codex/pull/30604) Apply current permissions before goal continuations:** Ensures that sandbox policies and approval profiles are resolved and applied *before* a thread's goal state becomes visible, improving execution safety.
8.  **[#30601](https://github.com/openai/codex/pull/30601) Make app-server OTEL startup best effort:** Prevents the app-server from crashing on startup if a user has invalid OpenTelemetry exporter settings.
9.  **[#30621](https://github.com/openai/codex/pull/30621) Trace startup WebSocket prewarm:** Improves debugging by preserving trace contexts across spawned Tokio tasks during the startup prewarming phase.
10. **[#30516](https://github.com/openai/codex/pull/30516) Add explicit agent communication logging:** Introduces structured `TRACE` logging for agent communication lifecycles and mailbox enqueue events.

## 5. Feature Request Trends
*   **Robust Context Memory Management:** The most prominent feature trend is fixing "auto compaction." Developers want mechanisms to verbatim preserve recent steps, core task objectives, and `AGENTS.md` rules so the AI doesn't forget what it's doing during long coding sessions.
*   **Alternative Provider & Proxy Support:** There is a high demand to use Codex as an interface for non-OpenAI models. Users are requesting native support for routing through proxies, OpenRouter, Ollama, and enhanced cost attribution controls for AWS Bedrock.
*   **Cross-Platform & Remote Parity:** Linux users are heavily petitioning for a native desktop app. Additionally, users want seamless, Claude Code-style remote control capabilities (mobile/CLI sync without SSH tunnels).
*   **Sandboxing & Data Safety:** Developers are asking for granular control over what the agent can see (e.g., `.codexignore`) to prevent leaking proprietary code or local secrets.

## 6. Developer Pain Points
*   **Unpredictable Rate Limiting:** A massive pain point right now is the GPT-5.5 budget drain, where limits are consumed 10-20x faster than usual. Similarly, background tasks like `ambient_suggestions` are quietly eating up to 70k tokens, frustrating Business and Pro users.
*   **Windows App Instability:** Windows users report severe performance issues, including slow thread switching, multi-session sends that hang indefinitely, and repetitive `git.exe` polling processes that get stuck in the background.
*   **Hardware Resource Drain:** Beyond token limits, local resource usage is a major frustration. Developers have had to actively fight against the CLI writing terabytes of SQLite logs to disk, while macOS users complain about severe power consumption preventing laptop battery usage.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 29, 2026.

### 1. Today's Highlights
Gemini CLI rolled out a new nightly build (v0.51.0) focusing on backend stability and security hardening. The community and maintainers are heavily focused on refining agentic capabilities, specifically addressing subagent reliability, fixing infinite loop behaviors, and patching critical security vulnerabilities related to sandbox escapes and memory logging. 

### 2. Releases
*   **[v0.51.0-nightly.20260629](https://github.com/google-gemini/gemini-cli/compare/v0.51.0-nightly.20260628.gae0a3aa7b...v0.51.0-nightly.20260629.gae0a3aa7b)**: Automated nightly version bump and release. ([Release PR #28198](https://github.com/google-gemini/gemini-cli/pull/28198))

### 3. Hot Issues
*   **[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent recovery after MAX_TURNS reported as GOAL success**: A P1 bug where the `codebase_investigator` subagent falsely reports success after hitting its turn limit, hiding the fact that it was interrupted and never finished its analysis.
*   **[Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873) - Zero-Dependency OS Sandboxing & Intent Routing**: A highly discussed enhancement proposal to leverage Gemini 3's native bash affinity securely using OS-level sandboxing, rather than restricting shell execution.
*   **[Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525) - Add deterministic redaction to Auto Memory**: A P2 security issue highlighting that Auto Memory currently sends local transcript context to the extraction agent *before* redacting secrets.
*   **[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist agent hangs**: A critical bug (8 👍) where the CLI hangs indefinitely (sometimes for over an hour) when deferring simple tasks to the generalist subagent.
*   **[Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353) - Robust component-level evaluations**: An epic tracking the expansion of the CLI's behavioral evaluation suite to improve reliability across supported Gemini models.
*   **[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745) - AST-aware file reads and mapping**: An investigation into integrating Abstract Syntax Tree-aware tools to reduce token noise and improve codebase navigation precision.
*   **[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166) - Shell command execution gets stuck**: A frustrating P1 bug where the UI hangs on "Awaiting user input" long after a simple shell command has finished executing.
*   **[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246) - 400 error with > 128 tools**: An architectural limitation where the CLI throws a 400 API error if there are too many tools (MCP servers/skills) registered simultaneously.
*   **[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672) - Discourage destructive behavior**: A request for the agent to inherently avoid dangerous shell commands (like `git reset --force` or destructive DB operations) when safer alternatives exist.
*   **[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968) - Gemini doesn't use skills enough**: Users report that the core agent fails to autonomously invoke custom skills (like `git` or `gradle` tools) even when the task directly relates to them.

### 4. Key PR Progress
*   **[PR #28015](https://github.com/google-gemini/gemini-cli/pull/28015) - feat(caretaker): implement Cloud Run webhook ingestion service**: Introduces a new Cloud Run service for the Caretaker agent to securely ingest, verify, and process GitHub webhooks via Pub/Sub.
*   **[PR #28053](https://github.com/google-gemini/gemini-cli/pull/28053) - fix(core-tools): defensive path resolution for at-reference files**: Resolves a production bug where file tools fail because the model accidentally prefixes paths with `@` (e.g., `@file.txt`).
*   **[PR #28215](https://github.com/google-gemini/gemini-cli/pull/28215) - Harden file-write scope (CLOSED)**: Addressed a severe security issue preventing sandbox escapes that allowed the agent to modify its own `.gemini` config or `.gitconfig` under auto-accept mode.
*   **[PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164) - Limit recursive reasoning turns**: Protects local CPU and API quotas by enforcing a strict 15-turn limit per single user request to prevent infinite reasoning loops.
*   **[PR #27971](https://github.com/google-gemini/gemini-cli/pull/27971) - fix(core): strip thoughts from scrubbed history**: Fixes "Thought Leakage," where the model's internal reasoning bled into plain-text history, causing it to emulate scratchpads or loop infinitely.
*   **[PR #28202](https://github.com/google-gemini/gemini-cli/pull/28202) - fix: forward SIGINT/SIGTERM during relaunch (CLOSED)**: Ensures that Ctrl+C properly kills child processes when the CLI is updating or relaunching itself, preventing orphaned background tasks.
*   **[PR #27910](https://github.com/google-gemini/gemini-cli/pull/27910) - fix(core): bound web search tool latency (CLOSED)**: Implements a 120-second timeout for the `google_web_search` tool, forcing graceful error recovery instead of hanging indefinitely.
*   **[PR #28216](https://github.com/google-gemini/gemini-cli/pull/28216) - Refactor: exclude transient CI config from workspace**: Cleans up workspace context by explicitly ignoring dynamically generated GitHub Actions credential files.
*   **[PR #28126](https://github.com/google-gemini/gemini-cli/pull/28126) - fix(core-tools): show ellipsis on multi-line edits**: Improves UI clarity by appending `...` to UI snippets when multi-line edits are hidden, preventing accidental large changes from looking like single-line tweaks.
*   **[PR #27915](https://github.com/google-gemini/gemini-cli/pull/27915) - fix(core): trust dialog discloses hook shape (CLOSED)**: Fixes a security issue where the workspace-trust dialog masked malicious `SessionStart` shell hooks, allowing arbitrary execution upon clicking "Trust".

### 5. Feature Request Trends
*   **Advanced Codebase Navigation**: Strong momentum behind AST-aware file reading, searching, and mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) to reduce token noise and improve the accuracy of file edits.
*   **Native OS Sandboxing**: Community desire to safely unleash Gemini's native bash/chaining capabilities without compromising security via zero-dependency sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
*   **Agent Self-Awareness & Visibility**: Requests for the CLI to accurately understand its own hotkeys/flags ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) and to make subagent trajectories easily shareable via UI components like `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
*   **Native File-Based Task Management**: Proposals to transition the agent's internal task tracker from shell scripts to native file tools for better reliability and cleaner workspaces ([#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).

### 6. Developer Pain Points
*   **Agent Hanging & Infinite Loops**: Frequent frustration with the CLI getting stuck—whether waiting for input that doesn't exist ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), locking up during recursive reasoning ([#28164](https://github.com/google-gemini/gemini-cli/pull/28164)), or hanging indefinitely when invoking the generalist subagent ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)).
*   **Tool Overload Errors**: Developers integrating multiple MCP servers are hitting hard limits, resulting in 400 API errors when exceeding 128 concurrent tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).
*   **Workspace Pollution**: Users report the model frequently creating temporary `tmp` scripts in random directories when forced into restricted shell modes, creating git overhead ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
*   **Auto-Memory Friction**: The Auto Memory system currently suffers from quality-of-life issues, including retrying low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) and silently failing or skipping invalid memory patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the community digest for GitHub Copilot CLI based on the last 24 hours of activity.

# GitHub Copilot CLI Community Digest - 2026-06-30

## 1. Today's Highlights
The highlight of today is the release of **Copilot CLI v1.0.66-2**, which introduces significant plugin and LSP improvements, including allowing skills with the same name from different plugins to coexist and enabling integrations to read/write CLI user settings. However, the community is actively reporting a severe regression in this version regarding stdio MCP server execution on Windows. Meanwhile, discussions around terminal rendering behaviors and enterprise configuration management continue to dominate community feedback.

## 2. Releases
**v1.0.66-2** introduces several new capabilities and quality-of-life updates:
*   **Plugin Ecosystem:** Enabled skills with the same name from different plugins to coexist without conflict.
*   **Settings & Integrations:** Integrations can now read and write directly to CLI user settings.
*   **Diagnostics:** Added the ability to view LSP server logs via `/lsp logs` and `read_agent`.
*   **GitHub Integration:** The CLI will now prompt users to install the `gh` CLI if it is missing when interacting with GitHub repositories.
*   **Prompting:** Added GitHub attachment variants to prompt rendering.

## 3. Hot Issues
Here are the 10 most noteworthy issues updated in the last 24 hours:

*   **[OPEN] Windows: v1.0.66 MCP Regression** ([#3958](https://github.com/github/copilot-cli/issues/3958)): A critical regression in v1.0.66 prevents Windows users from starting stdio MCP servers if the command relies on a `.bat`/`.cmd` file with arguments. The child process immediately dies, severely blocking MCP usage on Windows.
*   **[OPEN] Enterprise Server-Managed Settings** ([#3909](https://github.com/github/copilot-cli/issues/3909)): Org admins currently lack a way to centrally push configurations (like environment variables) to developers' *local* Copilot CLI installs. This is a major blocker for enterprise adoption.
*   **[OPEN] Turning off Alt-Screen Views** ([#1799](https://github.com/github/copilot-cli/issues/1799)): A highly upvoted issue (7 thumbs up) where users express frustration with the recently released alt-screen terminal mode, requesting a toggle to revert to the original inline rendering.
*   **[OPEN] Broken `web_fetch` Tool** ([#3948](https://github.com/github/copilot-cli/issues/3948)): All `web_fetch` tool calls are failing with `TypeError: fetch failed`. Users note this isn't a proxy issue, making the tool completely unresponsive regardless of the prompt.
*   **[OPEN] Trackpad Scrolling Triggers History Selection** ([#3957](https://github.com/github/copilot-cli/issues/3957)): On macOS (Ghostty), using a trackpad to scroll the window incorrectly selects previous prompts instead of scrolling the terminal view. 
*   **[OPEN] Local SQL Sync Fails Silently** ([#2654](https://github.com/github/copilot-cli/issues/2654)): When session sync is set to local-only, the `session_store_sql` tool returns 0 rows without telling the agent the cloud store is empty, causing agent confusion.
*   **[OPEN] `/chronicle standup` Blocked by Cloud Errors** ([#3904](https://github.com/github/copilot-cli/issues/3904): The standup command completely fails if the cloud session store returns an internal server error, ignoring available local fallback data due to timestamp predicate issues.
*   **[OPEN] Expand Paste Tokens in `$EDITOR`** ([#3936](https://github.com/github/copilot-cli/issues/3936)): When `compactPaste` is enabled, opening the prompt in `$EDITOR` (Ctrl+G) writes the literal token instead of the expanded text, making it impossible to edit pasted blocks effectively.
*   **[OPEN] Duplicate MCP Server Names Need Warnings** ([#3893](https://github.com/github/copilot-cli/issues/3893)): If multiple plugins register MCP servers with the same name, the CLI silently loads the last installed one. The community requests a warning system to prevent silent failures.
*   **[CLOSED] Phantom Mouse Input & UI Glitches** ([#3972](https://github.com/github/copilot-cli/issues/3972)): Users report a bizarre terminal rendering bug where raw characters representing mouse movements flood the UI on initial load.

## 4. Key PR Progress
*Note: There have been 0 open or updated Pull Requests from the community in the last 24 hours.* 

However, issue #3958 regarding the Windows MCP `.bat` regression has been triaged as a high priority, and maintainers are expected to merge a hotfix PR imminently to restore v1.0.65 behavior.

## 5. Feature Request Trends
Analyzing the latest issues, three clear feature trends emerge:
*   **Advanced Session Management:** Users are dealing with session sprawl and are requesting robust UI features. This includes user-defined searchable tags for sessions ([#3970](https://github.com/github/copilot-cli/issues/3970)), visual plan status indicators/badges in the session list ([#3969](https://github.com/github/copilot-cli/issues/3969)), and visible session retention/expiration policies ([#3963](https://github.com/github/copilot-cli/issues/3963)).
*   **Enterprise & Org-level Governance:** There is a strong push for server-managed configurations, specifically allowing enterprise admins to manage environment variables and local CLI policies from the cloud ([#3909](https://github.com/github/copilot-cli/issues/3909)).
*   **Repository-Backed Session UI Parity:** Users want repository-backed sessions (worktrees) to feature the exact same full file-tree browser in the side panel as standard folder-backed sessions, rather than just showing a git changes view ([#3971](https://github.com/github/copilot-cli/issues/3971)).

## 6. Developer Pain Points
*   **Terminal Rendering & UI Quirks:** A significant portion of the community's frustration stems from the CLI's Terminal User Interface (TUI). The newly introduced alt-screen view is universally disruptive for some workflows ([#1799](https://github.com/github/copilot-cli/issues/1799)), alongside mouse-scroll capture glitches ([#3957](https://github.com/github/copilot-cli/issues/3957)) and visual artifacts left behind when deleting text ([#3959](https://github.com/github/copilot-cli/issues/3959)).
*   **Cross-Platform (Windows) Fragility:** Windows users continue to face an uphill battle. From critical `.bat` execution failures in MCP servers ([#3958](https://github.com/github/copilot-cli/issues/3958)) and broken OAuth loopback port caching ([#3973](https://github.com/github/copilot-cli/issues/3973)), to missing symlink support for plugins ([#2286](https://github.com/github/copilot-cli/issues/2286)), cross-platform parity remains a major pain point.
*   **Cloud Dependency Failures:** Developers are frustrated when cloud outages break local workflows. Issues like `CloudQueryError` breaking `/chronicle standup` ([#3904](https://github.com/github/copilot-cli/issues/3904)) and orphaned, indefinitely running agent sessions ([#3600](https://github.com/github/copilot-cli/issues/3600)) highlight a need for more resilient local fallback mechanisms.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

### Kimi Code CLI Community Digest (2026-06-30)

**1. Today's Highlights**
The past 24 hours have been exceptionally quiet for the Kimi Code CLI repository, with no new releases, merged pull requests, or active code submissions. The sole community activity stems from a new enhancement proposal focused on fixing keyboard mapping inconsistencies (specifically the "Enter" key behavior) to improve the accessibility of the tool across desktop and mobile environments. 

**2. Releases**
No new releases were published in the last 24 hours.

**3. Hot Issues**
*Note: Only one issue was updated in the past 24 hours.*
*   **[#2479 [enhancement] Bad usage of return and enter for desktop and mobile](https://github.com/MoonshotAI/kimi-cli/issues/2479)**
    *   **Why it matters:** CLI and terminal-based tools often suffer from rigid keyboard mappings that frustrate users attempting to format multiline prompts. This issue highlights a critical UX friction point: the inability to intuitively create new lines on desktop without obscure key combinations, and the accidental sending of prompts on mobile.
    *   **Community Reaction:** Newly created by author `Dealazer` with no comments or upvotes yet, but it addresses a highly relatable pain point for developers using terminal interfaces on non-standard or constrained devices.

**4. Key PR Progress**
No pull requests were created, updated, or merged in the past 24 hours. 

**5. Feature Request Trends**
Based on today's data, the primary feature trend revolves around **Cross-Platform Input Handling & UX**. Users are actively seeking adaptive input configurations that respect the constraints of different hardware environments. Specifically, there is a clear demand for customizable "submit" key bindings (e.g., separate mappings for sending a prompt versus inserting a line break) to bring terminal-based AI tools in line with standard web/mobile chat application behaviors.

**6. Developer Pain Points**
Developers are currently experiencing friction with rigid input constraints when drafting complex prompts in the CLI. The forced reliance on modifier keys (like `Shift + Enter`) to achieve basic text formatting breaks muscle memory for users accustomed to modern AI chat interfaces. Furthermore, the lack of mobile-optimized input handling makes remote or on-the-go terminal usage impractical, highlighting a need for context-aware keyboard event handling.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# 🛠️ OpenCode Community Digest - June 30, 2026

Repository: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

### 1. Today's Highlights
OpenCode is undergoing a massive architectural refactoring, heavily focused on abstracting the core service layer and migrating the TUI to a new generated `@opencode-ai/client`. Alongside these structural improvements, the community is actively reporting intermittent caching and compatibility issues with newer models like GLM-5.2 via the OpenCode Go gateway. Desktop users on macOS are also facing a few critical UI roadblocks, such as inaccessible settings menus and disappearing session histories.

### 2. Releases
*No new official releases in the last 24 hours.*

### 3. Hot Issues (Top 10)
Here are the most noteworthy issues driving community discussion:

*   **#8601 [OPEN] Error: unknown certificate verification error** - [Link](https://github.com/anomalyco/opencode/issues/8601)
    *   *Why it matters:* Users are experiencing certificate verification blocks across multiple AI providers, which also prevents Gemini logins. It has accumulated significant community traction (28 comments) as a critical blocker for usage.
*   **#22132 [OPEN] OpenCode 1.4.3 hangs with local Ollama provider** - [Link](https://github.com/anomalyco/opencode/issues/22132)
    *   *Why it matters:* Integration with local models is a key workflow. The TUI hangs indefinitely on simple prompts when using `@ai-sdk/openai-compatible`, despite the standard `/v1/chat/completions` endpoint functioning perfectly.
*   **#33998 [OPEN] GLM-5.2 prompt cache randomly drops to ~500 tokens on opencode-go** - [Link](https://github.com/anomalyco/opencode/issues/33998)
    *   *Why it matters:* Intermittent prompt caching failures with GLM-5.2 are causing performance degradation and unexpected latency in long-running coding workflows, even with stable system prompts.
*   **#31348 [OPEN] GLM-5.1 prompt cache randomly drops to 0, while DeepSeek V4 Flash works reliably** - [Link](https://github.com/anomalyco/opencode/issues/31348)
    *   *Why it matters:* Highlights a provider-specific caching inconsistency that leads to massive cost spikes for developers using OpenCode Go with GLM models.
*   **#34359 [OPEN] Track TUI migration to @opencode-ai/client** - [Link](https://github.com/anomalyco/opencode/issues/34359)
    *   *Why it matters:* This tracks the massive V2 migration from the legacy SDK client to the new generated Promise client, setting the foundation for OpenCode's next major UI iteration.
*   **#34380 [OPEN] Add session-scoped keyed context** - [Link](https://github.com/anomalyco/opencode/issues/34380)
    *   *Why it matters:* A highly technical structural discussion about giving embedders a way to attach app-owned, non-global context to specific OpenCode sessions, which will greatly expand integration capabilities.
*   **#34507 [OPEN] Cannot open Settings in Opencode Desktop v1.17.11 on Mac** - [Link](https://github.com/anomalyco/opencode/issues/34507)
    *   *Why it matters:* A critical usability bug where `CMD +,` or the menubar settings button simply stops working on macOS.
*   **#34471 [OPEN] Desktop loses access to existing sessions after profile reset** - [Link](https://github.com/anomalyco/opencode/issues/34471)
    *   *Why it matters:* Users are losing all chat history on Web and Desktop after troubleshooting profile issues, despite the local `opencode.db` still containing the session data.
*   **#31500 [OPEN] VS Code extension fails to install / missing link** - [Link](https://github.com/anomalyco/opencode/issues/31500)
    *   *Why it matters:* The IDE integration onboarding is currently broken for new users trying to set up the environment via VS Code.
*   **#34446 [CLOSED] Option to disable automatic prompt draft restoration** - [Link](https://github.com/anomalyco/opencode/issues/34446)
    *   *Why it matters:* Reflects community feedback on TUI UX quirks—specifically, the tool auto-restoring previous prompt drafts when starting a new session, which clutters the "clean slate" experience.

### 4. Key PR Progress (Top 10)
Notable code contributions and refactors merged or updated today:

*   **#34515 [OPEN] refactor(opencode): build runtimes from layer nodes** by @jlongster - [Link](https://github.com/anomalyco/opencode/pull/34515)
    *   Moves `AppRuntime` and `BootstrapRuntime` to be constructed through `AppNodeBuilder` graphs, laying the groundwork for a cleaner V2 architecture.
*   **#34517 [OPEN] refactor(opencode): remove app service layer exports** by @jlongster - [Link](https://github.com/anomalyco/opencode/pull/34517)
    *   Internalizes implementation layers behind exported nodes and removes high-level `defaultLayer` exports to enforce stricter boundaries.
*   **#34504 [OPEN] feat(client): expose fs read in Promise client** by @kitlangton - [Link](https://github.com/anomalyco/opencode/pull/34504)
    *   Adds binary `Uint8Array` support and trailing wildcard paths to the new generated Promise client, enabling `files.read` capabilities.
*   **#34514 [OPEN] feat(cli): add auth command to list authenticated providers** by @rekram1-node - [Link](https://github.com/anomalyco/opencode/pull/34514)
    *   Adds a highly requested CLI command (`opencode auth`) to easily verify which AI providers (AWS, Google, etc.) are currently authenticated.
*   **#34467 [CLOSED] fix(console): cancel upstream provider requests** by @StarpTech - [Link](https://github.com/anomalyco/opencode/pull/34467)
    *   Crucial performance fix that propagates caller cancellation signals upstream, preventing wasted compute on abandoned LLM inference requests.
*   **#34512 [OPEN] fix(core): sanitize registered tool names** by @rekram1-node - [Link](https://github.com/anomalyco/opencode/pull/34512)
    *   Cleans up tool registration by applying MCP-style string replacement rules, ensuring model-facing tool names are strictly compliant.
*   **#32213 [OPEN] feat(app): add session panels** by @oshtz - [Link](https://github.com/anomalyco/opencode/pull/32213)
    *   Introduces a tiled tabs/panel mode for open sessions in the Desktop app, allowing developers to view multiple agent chats simultaneously.
*   **#34511 [CLOSED] surface provider error in assistant footer** by @rekram1-node - [Link](https://github.com/anomalyco/opencode/pull/34511)
    *   Improves TUI debugging by catching V2 provider errors (like `401 Unauthorized`) and surfacing them visibly in the assistant footer, rather than silently failing.
*   **#18306 [CLOSED] feat(opencode): add Open WebUI provider** by @SamirMoustafa - [Link](https://github.com/anomalyco/opencode/pull/18306)
    *   Integrates Open WebUI as a first-class provider option, expanding the local/self-hosted model ecosystem.
*   **#29948 [OPEN] fix(tui): keep command palette available in questions** by @opencode-agent[bot] - [Link](https://github.com/anomalyco/opencode/pull/29948)
    *   UX enhancement allowing developers to trigger the command palette via shortcut even while a question prompt dialog is currently active.

### 5. Feature Request Trends
Based on recent issues, the community is heavily requesting:
1.  **Stricter Context & Session Control:** Developers want better ways to isolate app-owned context (keyed context) and the ability to fork sessions from specific messages ([#34380](https://github.com/anomalyco/opencode/issues/34380), [#34430](https://github.com/anomalyco/opencode/issues/34430)).
2.  **Cost & Token Analytics:** As agent workflows get more complex, there is a high demand for calculating the total cost of sub-agents, not just the primary model ([#4925](https://github.com/anomalyco/opencode/issues/4925)).
3.  **Frontmatter & Skill Flexibility:** Parity with ecosystems like Claude Code, specifically supporting `disable-model-invocation` inside `SKILL.md` files ([#34498](https://github.com/anomalyco/opencode/issues/34498)).
4.  **IDE Integrations & Paneling:** Better VS Code onboarding and multi-tab/session panel support in the Desktop app ([#32213](https://github.com/anomalyco/opencode/pull/32213), [#31500](https://github.com/anomalyco/opencode/issues/31500)).

### 6. Developer Pain Points
OpenCode developers are currently expressing frustration with:
*   **Model Compatibility Quirks:** Rapid updates to models (like GLM-5.1 and 5.2) are causing unpredictable behaviors in OpenCode Go, specifically breaking prompt caching or rejecting specific JSON fields like `instructions` ([#33998](https://github.com/anomalyco/opencode/issues/33998), [#33490](https://github.com/anomalyco/opencode/issues/33490)).
*   **Desktop App Stability (macOS):** Mac users are hitting severe roadblocks with version 1.17.11, ranging from completely inaccessible settings to local DBs becoming unreadable after minor profile resets ([#34507](https://github.com/anomalyco/opencode/issues/34507), [#34471](https://github.com/anomalyco/opencode/issues/34471)).
*   **Network & Provider Authentication Blocking:** Unexplained certificate verification errors and silent authentication failures are disrupting standard workflows, forcing manual debugging ([#8601](https://github.com/anomalyco/opencode/issues/8601)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community on 2026-06-30.

### 1. Today's Highlights
The Pi ecosystem saw intense activity focused on enhancing provider compatibility and fixing streaming network robustness. Key discussions highlighted the community's push for broader third-party LLM support (Scaleway, Charm Hyper) and isolated environment management. Additionally, the maintainers and users actively triaged several NPM package reports, flagging potential malicious or dead extensions to ensure supply chain security.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **#6083 [CLOSED] LLM cache burns through z.ai GLM coding plan** (👍 9): Users reported that multi-step tool calls consume excessive session limits on z.ai GLM due to cache inefficiencies. Highlighting the need for better context caching for aggressive coding workflows. [View Issue](https://github.com/earendil-works/pi/issues/6083)
*   **#5825 [CLOSED] Streaming markdown forces scroll to bottom** (42 comments): A highly discussed UI bug where streaming markdown yapping forces a scroll to the bottom if "clear on shrink" is enabled, severely hurting readability. [View Issue](https://github.com/earendil-works/pi/issues/5825)
*   **#4877 [CLOSED] Session folder collision** (20 comments): A path-naming quirk where directories like `/a/b/c/d` and `/a-b/c-d` hash to the same session folder, causing unexpected state overlaps. [View Issue](https://github.com/earendil-works/pi/issues/4877)
*   **#5871 [OPEN] Anthropic OAuth-token detection hardcoded** (6 comments): Currently, Claude Code scoped keys (`sk-ant-api03`) aren't recognized as OAuth/Bearer credentials because detection relies on a hardcoded `sk-ant-oat` substring check. [View Issue](https://github.com/earendil-works/pi/issues/5871)
*   **#5763 [CLOSED] Providers swallow HTTP error bodies** (5 comments): Behind proxies or gateways, non-2xx responses with unparsable bodies are dropped by SDKs, surfacing useless errors like `403 (no body)` instead of the actual gateway message. [View Issue](https://github.com/earendil-works/pi/issues/5763)
*   **#5932 [OPEN] Exposing `ctx.navigateTree()` to agents** (4 comments): Extension developers request access to `navigateTree()` on standard event/tool contexts to enable advanced custom goal implementations. [View Issue](https://github.com/earendil-works/pi/issues/5932)
*   **#3966 [CLOSED] Built-in `--profile` support** (3 comments): A strong feature request for isolated Pi states (auth, sessions, extensions) across different projects (work vs. personal) via a simple `--profile <name>` flag. [View Issue](https://github.com/earendil-works/pi/issues/3966)
*   **#6138 [OPEN] Incorrect Xiaomi MiMo pricing** (3 comments): Hardcoded pricing for `mimo-v2.5-pro` in the Xiaomi provider adapter doesn't match official rates, causing skewed cost tracking. [View Issue](https://github.com/earendil-works/pi/issues/6138)
*   **#6124 [OPEN] Devnagri breaks the Pi harness UI** (3 comments): Typing Devanagari script (e.g., `नेटवर्क`) causes visual breakage in the TUI, highlighting localization and Unicode rendering issues. [View Issue](https://github.com/earendil-works/pi/issues/6124)
*   **#6155, #6154, #6152 [CLOSED] NPM Package Security Reports**: Multiple reports flagged extensions like `pi-wiki`, `pi-env`, and `@artale/pi-envman` for having dead repository links or missing source code, raising supply chain security concerns. [View Example Report](https://github.com/earendil-works/pi/issues/6154)

### 4. Key PR Progress
Recent pull requests show a strong focus on UI stability and LLM provider error handling:

*   **[PR #6170](https://github.com/earendil-works/pi/pull/6170) [CLOSED] Avoid replaying historical inline images:** Fixes TUI corruption by replacing historical image escape payloads with lightweight `[Image: ...]` labels during session rebuilds.
*   **[PR #6169](https://github.com/earendil-works/pi/pull/6169) [OPEN] Disable padding for assistant messages:** UI tweak to close padding issues around assistant outputs. 
*   **[PR #6051](https://github.com/earendil-works/pi/pull/6051) [CLOSED] Recover from hung streams (Bedrock/Anthropic):** Introduces idle timeouts and connect timeouts to prevent the agent from hanging indefinitely on half-open sockets.
*   **[PR #5832](https://github.com/earendil-works/pi/pull/5832) [CLOSED] Surface provider HTTP error body:** Fixes opaque SDK error messages by passing through the actual HTTP response body from proxies/gateways.
*   **[PR #6026](https://github.com/earendil-works/pi/pull/6026) [CLOSED] Stabilize working status row:** TUI fix to stop the interface from jumping when the agent is "thinking" or outputting data.
*   **[PR #6161](https://github.com/earendil-works/pi/pull/6161) [CLOSED] Map Bedrock apiKey to bearer token:** Implements request-scoped `AWS_BEARER_TOKEN_BEDROCK` mapping for Bedrock Converse API integrations.
*   **[PR #6156](https://github.com/earendil-works/pi/pull/6156) [CLOSED] Fix empty tool results:** Stops the OpenAI handler from confusingly passing `(see attached image)` to the model when a tool call silently succeeds.

### 5. Feature Request Trends
*   **Provider Expansion & Accuracy:** Users are highly interested in plugging in alternative and regional AI providers. Requests include adding EU-hosted **Scaleway Generative APIs** ([#6165](https://github.com/earendil-works/pi/issues/6165)) and **Charm Hyper** ([#6042](https://github.com/earendil-works/pi/issues/6042)), alongside demands for accurate native pricing models (Xiaomi MiMo).
*   **State Isolation & Management:** A major trend is managing multiple workflows. Developers want built-in profile management to separate auth, context limits, and sessions cleanly across different local repos ([#3966](https://github.com/earendil-works/pi/issues/3966)).
*   **Extension API Extensibility:** Builders are hitting the limits of the Extension context API. There is a distinct trend of requesting deeper harness exposure, such as accessing tree navigation natively in custom tools ([#5932](https://github.com/earendil-works/pi/issues/5932)).
*   **Localized & Multilingual Context:** Requests to translate internal agent logic—such as generating compaction summaries in the user's conversational language ([#6157](https://github.com/earendil-works/pi/issues/6157)).

### 6. Developer Pain Points
*   **Opaque Network & Provider Errors:** A major frustration is debugging broken LLM streams. When networks drop ([#6133](https://github.com/earendil-works/pi/issues/6133)) or providers return gateway errors, Pi often swallowed the body or crashed via `ECONNRESET`, leaving developers blind. 
*   **Context Compaction Inefficiencies:** Developers working with "thinking" models are frustrated by compaction logic that fails to prune massive 90k char thought blocks ([#6166](https://github.com/earendil-works/pi/issues/6166)), resulting in wasted context windows.
*   **Infinite Tool Loops:** Agents occasionally get stuck issuing the exact same shell command (e.g., `ls` 6 times in a row) without manual intervention ([#6158](https://github.com/earendil-works/pi/issues/6158)), eroding trust in automated multi-step task execution.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for June 30, 2026.

### 1. Today's Highlights
The Qwen Code community is heavily focused on enhancing the **`qwen serve` daemon** and **background automation** capabilities. There is a strong push towards implementing autonomous workflows, notably through the new `/loop` autonomous mode and daemon-managed chat channel integrations (DingTalk, Feishu, Telegram). Meanwhile, significant efforts are being made to optimize context window management, improve TUI rendering stability across different operating systems, and reduce API overhead.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[Issue #5975](https://github.com/QwenLM/qwen-code/issues/5975): API Error: No stream activity for 120000ms**
    A high-priority bug in v0.19.3 where the API drops streaming connections after a brief period of inactivity ("Thought for 2s" then indefinite hang). Users are experiencing severe workflow interruptions, requesting urgent triage.
*   **[Issue #5942](https://github.com/QwenLM/qwen-code/issues/5942): Anthropic provider prompt-cache misses inflate cost**
    Developers report that Qwen Code fails to utilize prompt caching effectively with Anthropic endpoints, leading to significantly inflated API costs compared to similar tools like Claude Code. The community is actively discussing how side-queries invalidate the cache prefix.
*   **[Issue #6004](https://github.com/QwenLM/qwen-code/issues/6004): CLI crashes during MCP installation**
    A critical memory allocation failure causing the CLI to crash abruptly when installing certain MCP servers. Users are actively sharing GC logs to help maintainers diagnose the out-of-memory issue on macOS.
*   **[Issue #5970](https://github.com/QwenLM/qwen-code/issues/5970): Auto enter Plan mode in Yolo mode**
    A regression bug where starting the agent in autonomous (`-y` / Yolo) mode inexplicably triggers Plan mode, halting execution to ask for file read permissions and failing to follow instructions.
*   **[Issue #5941](https://github.com/QwenLM/qwen-code/issues/5941): TUI scroll jump bug on Windows**
    Windows users are frustrated by a UI bug where scrolling up slightly with the mouse wheel during model generation instantly snaps the view to the very top of the transcript.
*   **[Issue #5956](https://github.com/QwenLM/qwen-code/issues/5956): Configurable compaction model**
    Developers request the ability to designate a cheaper, faster model specifically for conversation auto-compaction. Currently, expensive models waste their context window summarizing previous states.
*   **[Issue #5683](https://github.com/QwenLM/qwen-code/issues/5683): Subagent token counting accuracy**
    When using local LLMs, token consumption metrics for sub-agents are significantly miscalculated, showing millions of tokens and breaking context limits prematurely.
*   **[Issue #6014](https://github.com/QwenLM/qwen-code/issues/6014): File names hidden in new UI version**
    A UI downgrade where file read operations are summarized generically as `read 1 file` instead of displaying the specific file name, reducing visibility into agent actions.
*   **[Issue #5968](https://github.com/QwenLM/qwen-code/issues/5968): Daemon memory system fails to save**
    When running via `qwen serve`, the agent's long-term memory fails to initialize or save automatically, requiring explicit `/memory` commands to function correctly.
*   **[Issue #6007](https://github.com/QwenLM/qwen-code/issues/6007): GLM-5.2 leaks thinking text**
    When paired with GLM-5.2, the model's internal reasoning (wrapped in `<think>` tags) leaks into the standard output, breaking formatting and potentially exposing internal logic.

### 4. Key PR Progress
Recent Pull Requests highlight active development in daemon stability and user experience:

*   **[PR #5852](https://github.com/QwenLM/qwen-code/pull/5852): Resumable `/acp` session stream**
    Implements SSE `Last-Event-ID` for daemon sessions, allowing dropped connections to reconnect and resume the event stream exactly where they left off.
*   **[PR #5991](https://github.com/QwenLM/qwen-code/pull/5991): Autonomous mode for `/loop`**
    Introduces a self-paced autonomous loop (`/loop` with no arguments), enabling the agent to independently maintain in-progress PRs, fix flaky CI, or continue unfinished work without user intervention.
*   **[PR #5957](https://github.com/QwenLM/qwen-code/pull/5957): Fix compression threshold calculation**
    Fixes a critical miscalculation where reserved output tokens were not subtracted from the context window, causing auto-compression to fail and resulting in 400 API errors.
*   **[PR #6013](https://github.com/QwenLM/qwen-code/pull/6013): Keep serve health responsive**
    Defers heavy runtime graph initialization until after the initial `/health` probe, ensuring the daemon boots quickly and cleanly without timing out on startup.
*   **[PR #6011](https://github.com/QwenLM/qwen-code/pull/6011): Mouse interactions in TUI**
    Adds full mouse click and hover support for alternate-screen mode, enabling users to interact with menus, permission prompts, and dialogs natively.
*   **[PR #6015](https://github.com/QwenLM/qwen-code/pull/6015): Transcript scroll fix during multi-agent runs**
    Resolves a highly requested UI fix where the terminal transcript violently snapped back to the bottom during complex multi-agent operations (like `/review`).
*   **[PR #6006](https://github.com/QwenLM/qwen-code/pull/6006): Browser MCP tools by default**
    Makes the browser MCP path (CDP tunnel) available out-of-the-box for `qwen serve`, auto-registering the chrome-devtools MCP server for immediate web interaction.
*   **[PR #6012](https://github.com/QwenLM/qwen-code/pull/6012): Glob patterns for MCP management**
    Adds wildcard (`*`, `?`) support to `mcp.allowed` and `mcp.excluded`, vastly simplifying server management for administrators.
*   **[PR #6005](https://github.com/QwenLM/qwen-code/pull/6005): Daemon-backed prompt queuing**
    Upgrades the web shell to queue prompts server-side while a turn is currently running, preventing input loss and improving async workflow UX.
*   **[PR #5974](https://github.com/QwenLM/qwen-code/pull/5974): TUI East Asian width alignment fix**
    Replaces ambiguous Unicode characters with standard geometric shapes (◆) to fix terminal rendering misalignments frequently experienced by East Asian users.

### 5. Feature Request Trends
*   **Background Automation & Autonomy:** A massive trend towards "set it and forget it" agents. Requests for autonomous `/loop` modes, daemon-managed channels (DingTalk, Feishu, Telegram), and `.qwen/loop.md` task files show users want durable, long-running background workers.
*   **Granular Model Routing:** Developers want multi-model orchestration. Requests like `model.compactionModel` and inline model switching (`/model <id> <prompt>`) indicate a desire to assign cheaper/smaller models to background tasks (like summarization) while reserving heavy models for complex coding.
*   **Daemon UI & Web Shell Parity:** Mobile and remote access via `qwen serve` is heavily requested, specifically focusing on TLS support, responsive mobile sidebars, and secure voice input (getUserMedia) for local network deployments.
*   **Hot-Reload Capabilities:** Users are eager for a comprehensive hot-reload system ([Issue #3696](https://github.com/QwenLM/qwen-code/issues/3696)) that dynamically applies changes to skills, MCPs, and extensions without restarting the current session.

### 6. Developer Pain Points
*   **API Connection Instability:** The combination of streaming timeouts ([Issue #5975](https://github.com/QwenLM/qwen-code/issues/5975)) and broken cache utilization is causing high friction (and high bills) for developers using paid cloud APIs.
*   **Terminal UI Quirks:** The TUI remains a pain point across different operating systems. Users are frustrated by scroll-jumping on Windows, terminal flickering, missing output details (hidden file names), and text overwriting in long conversations.
*   **Daemon Context/Memory Loss:** The daemon (`qwen serve`) mode feels inferior to the interactive CLI due to bugs like memory failing to save automatically ([Issue #5968](https://github.com/QwenLM/qwen-code/issues/5968)) and raw XML tags leaking into the context ([Issue #6023](https://github.com/QwenLM/qwen-code/issues/6023)).
*   **Yolo Mode Regressions:** Autonomous developers are annoyed when `Yolo` mode abruptly changes permissions or shifts into `Plan` mode, breaking unattended pipelines.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek TUI (CodeWhale) based on the GitHub activity on 2026-06-30.

### 1. Today's Highlights
Development over the last 24 hours has been heavily dominated by the architectural overhaul for the **v0.8.67 setup wizard**, which aims to transform the first-run user experience from manual config editing into a guided, game-like onboarding flow. Concurrently, maintainers pushed critical fixes to **v0.8.66** to resolve permission boundary overlaps in "YOLO" mode and correct misleading UI copy regarding session-scoped approvals.

### 2. Releases
*No new official releases were published in the last 24 hours. The repository is actively finalizing the v0.8.66 candidate and laying the groundwork for the v0.8.67 EPIC.*

### 3. Hot Issues
*   **[#3790](https://github.com/Hmbown/CodeWhale/issues/3790) - Permissions are over-abstracted: make the MODE the single authority**
    *Why it matters:* A release-blocker issue (closed rapidly) addressing that YOLO mode was still triggering approval prompts due to competing `auto-review` safety layers. This established that the selected mode must be the ultimate authority for permissions.
*   **[#3402](https://github.com/Hmbown/CodeWhale/issues/3402) - v0.8.67 EPIC: CodeWhale setup wizard and guided configuration hub**
    *Why it matters:* The foundational issue for v0.8.67. It outlines a massive UX overhaul to ensure new users get a verified prompt with an API key, model, and safety posture configured smoothly. 
*   **[#3766](https://github.com/Hmbown/CodeWhale/issues/3766) - Correct approval UI copy for session-scoped approvals**
    *Why it matters:* A trust-boundary bug where the UI said "always" or "Approve always," but the system only approved for the current TUI session. Maintainers quickly closed this to fix the misleading copy.
*   **[#1177](https://github.com/Hmbown/CodeWhale/issues/1177) - [bug] 输入缓存命中率太低**
    *Why it matters:* A highly discussed issue (24 comments) where users complain that cache hit rates are drastically lower compared to alternatives like DeepSeek-Reasonix, severely impacting performance.
*   **[#3275](https://github.com/Hmbown/CodeWhale/issues/3275) - CodeWhale is overly involved in making modifications...**
    *Why it matters:* Highlights a regression where the agent over-extends its scope, entering self-driven loops of proposing and executing code without waiting for user confirmation.
*   **[#743](https://github.com/Hmbown/CodeWhale/issues/743) - token消耗增大了很多**
    *Why it matters:* Users report massive, abnormal token consumption (e.g., 400 million tokens in half a day), indicating deeply nested or overly intensive API interactions.
*   **[#3407](https://github.com/Hmbown/CodeWhale/issues/3407) - v0.8.67 Setup: tools, MCP, skills, and plugins step**
    *Why it matters:* Defines how power features will be surfaced in the new setup wizard, making them discoverable without being mandatory for new users.
*   **[#3765](https://github.com/Hmbown/CodeWhale/issues/3765) - Expose SeamManager.enabled and CompactionConfig.enabled to config.toml**
    *Why it matters:* Developers request more granular control, noting that crucial engine mechanisms like Soft seams and Compaction are currently hardcoded to `true` without a configuration override.
*   **[#3791](https://github.com/Hmbown/CodeWhale/issues/3791) - Redesign /fleet setup: progressive "agent team" setup**
    *Why it matters:* Pushes to reframe the Fleet configuration from a dense matrix into a "sub-agent / agent-team" delegation concept, aligning the UI with user mental models.
*   **[#3751](https://github.com/Hmbown/CodeWhale/issues/3751) - Neuralwatt Provider**
    *Why it matters:* Reflects community demand for integrating the popular Neuralwatt provider, known for offering GLM 5.2 and innovative non-token-based pricing.

### 4. Key PR Progress
*   **[PR #3797](https://github.com/Hmbown/CodeWhale/pull/3797) - fix(tui): make the mode authoritative for YOLO**
    *Details:* Directly addresses Issue #3790 by dropping the `auto_review` safety floor carve-out that incorrectly forced approval prompts during `git push` or publish actions in YOLO mode.
*   **[PR #3788](https://github.com/Hmbown/CodeWhale/pull/3788) - feat(tui): make Hotbar introduced, configurable, and easy to disable**
    *Details:* Completes the UI story for the 0.8.66 Hotbar feature, correctly displaying OS-specific modifier keys (⌥ vs Alt) in the panel title and adding a launch nudge.
*   **[PR #3773](https://github.com/Hmbown/CodeWhale/pull/3773) - fix(tui): label session-scoped approval honestly, not "always"**
    *Details:* Corrects the trust-boundary UI bug by renaming the approval option from "always" to accurately reflect that it is only approved for the current in-memory TUI session.
*   **[PR #3756](https://github.com/Hmbown/CodeWhale/pull/3756) - fix(tui): default interactive Agent shell to approval-gated on**
    *Details:* Significantly alters default UX by exposing shell tools automatically in Agent-mode TUI sessions, gated behind the standard approval flow.
*   **[PR #3784](https://github.com/Hmbown/CodeWhale/pull/3784) - feat(runtime-api): add config persistence for GUI config panel**
    *Details:* Adds necessary support for persisting nested-table config keys and fixes a bug preventing the `allow_shell` setting from saving correctly via the GUI.
*   **[PR #3789](https://github.com/Hmbown/CodeWhale/pull/3789) - fix(tui): show safety policy in status**
    *Details:* Improves transparency by adding a Safety row to `/status`, showing the user exactly what sandbox and network posture the current mode enforces.
*   **[PR #3779](https://github.com/Hmbown/CodeWhale/pull/3779) - fix(release): guard public install/version snippets**
    *Details:* Fixes CI pipeline gaps where installation snippets and version numbers in docs could silently drift while the release gate remained green.
*   **[PR #3785](https://github.com/Hmbown/CodeWhale/pull/3785) - Localize Hotbar setup wizard**
    *Details:* Expands localization by translating the Hotbar setup wizard UI, built-in action names, and auto-routing reasons for non-English users.
*   **[PR #3783](https://github.com/Hmbown/CodeWhale/pull/3783) - fix(subagent): preserve event headroom for progress**
    *Details:* Prevents routine sub-agent progress updates from consuming reserved UI event-channel headroom under heavy load, ensuring critical UI events remain responsive.
*   **[PR #3782](https://github.com/Hmbown/CodeWhale/pull/3782) - docs(tui): clarify Hotbar help shortcuts**
    *Details:* Improves in-app documentation to explicitly state that only `Alt+1` through `Alt+8` dispatch Hotbar slots, preventing input conflicts.

### 5. Feature Request Trends
*   **Guided Setup & Onboarding Overhaul:** A massive trend centered around the v0.8.67 EPIC. Users and maintainers want to replace manual config file editing with a progressive, wizard-based onboarding flow (covering providers, tools, trust boundaries, and localized constitutions).
*   **Granular Configuration & Telemetry:** Requests to expose hardcoded engine behaviors (like `SeamManager` and `CompactionConfig`) to `config.toml` so developers can toggle them dynamically ([#3765](https://github.com/Hmbown/CodeWhale/issues/3765)).
*   **Mental-Model Alignment for Fleet/Agents:** Users are asking for the "Fleet" feature to be redesigned as a visual "agent team" delegation matrix, rather than a generic configuration grid ([#3791](https://github.com/Hmbown/CodeWhale/issues/3791)).
*   **New Provider Integrations:** Consistent requests to support emerging AI providers like Neuralwatt for their unique pricing models and access to models like GLM 5.2 ([#3751](https://github.com/Hmbown/CodeWhale/issues/3751)).

### 6. Developer Pain Points
*   **Inefficient Context Caching:** The most prominent frustration is the abysmal input cache hit ratio compared to competitor tools, leading to sluggish performance and duplicated effort ([#1177](https://github.com/Hmbown/CodeWhale/issues/1177), [#1120](https://github.com/Hmbown/CodeWhale/issues/1120)).
*   **Explosive Token Consumption:** Developers are frustrated by massive token drains, citing instances of hundreds of millions of tokens being consumed in mere hours due to overly dense context interactions ([#743](https://github.com/Hmbown/CodeWhale/issues/743), [#1818](https://github.com/Hmbown/CodeWhale/issues/1818)).
*   **Agent Overstepping & Looping:** Users are experiencing the agent "hijacking" the session—proposing, answering, and executing changes autonomously without waiting for user confirmation, requiring constant babysitting ([#3275](https://github.com/Hmbown/CodeWhale/issues/3275)).
*   **Permission/Trust Boundary Confusion:** Prior to today's fixes, developers were confused by contradictory safety abstractions where YOLO mode would unexpectedly prompt for approvals, breaking automated workflows ([#3790](https://github.com/Hmbown/CodeWhale/issues/3790)).

</details>