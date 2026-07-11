# AI CLI Tools Community Digest 2026-07-12

> Generated: 2026-07-11 22:13 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 12, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem on July 12, 2026, is characterized by rapid maturation and a shared pivot towards complex, multi-agent orchestration. Major players like OpenAI, Anthropic, and Google are pushing boundaries with next-generation models (e.g., GPT-5.6 Sol, Claude Opus 4.x) and native cloud integrations, while open-source alternatives focus on specialized workflows and local model support. The overarching technical challenge has shifted from basic code generation to managing deeply nested autonomous workflows, context preservation, and cross-platform execution stability (specifically navigating Windows/WSL complexities). Meanwhile, developers are demanding tighter IDE integrations, granular cost telemetry, and seamless local-model parity.

### 2. Activity Comparison
Community activity varies significantly, with Claude Code and OpenAI Codex driving the highest volume of issue triage and core architectural PRs, reflecting their massive enterprise user bases. 

| Tool | Issues (24h) | PRs (24h) | Release Status | Primary Focus / Theme |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 5 | **v2.1.207** Released | Cloud GA (Bedrock/Vertex), Cowork stability, TUI/Security fixes |
| **OpenAI Codex** | 10 | 10 | Alpha 3 & 4 (Rust) | GPT-5.6 multi-agent quirks, subagent env inheritance, OS parity |
| **Gemini CLI** | 10 | 10 | None | Subagent recovery/stability, AST navigation, OS sandboxing |
| **GitHub Copilot CLI**| 6 | 1 | None | MCP OAuth bridging, Voice Mode fixes, Session sync |
| **OpenCode** | 10 | 10 | None | CPU optimizations, DeepSeek V4 Pro limits, Next-gen model support|
| **Pi** | 10 | 10 | None | GPT-5.6 integration, Extension API enhancements, AWS Bedrock |
| **Qwen Code** | 10 | 10 | **v0.19.8** Nightly | Multi-workspace daemons, MCP OAuth, prompt caching |
| **Kimi Code CLI** | 1 | 3 | None | ACP protocol parity, telemetry tracking, minor UI fixes |
| **DeepSeek TUI** | 5 | 4 | None | Anthropic API schema validation, cross-platform compilation |

### 3. Shared Feature Directions
Analysis of the community digests reveals several unified development vectors across the ecosystem:
*   **Next-Gen Model Integration & Caching:** The rollout of OpenAI's GPT-5.6 family (Sol/Terra/Luna) is heavily impacting **Codex**, **Pi**, and **OpenCode**. Simultaneously, tools are building complex prompt caching mechanisms to manage costs, seen in **Pi**'s GPT-5.6 cache headers, **Qwen Code**'s tool-discovery caching, and **DeepSeek TUI**'s Anthropic cache-write billing fixes.
*   **Subagent Architecture & Lifecycle Management:** Moving beyond single-turn prompts, tools are racing to stabilize background agents. **Codex** is fixing environment inheritance for subagents; **Gemini CLI** and **Qwen Code** are battling infinite loops and `MAX_TURNS` false positives; **Claude Code** and **Pi** are refining scoped models and telemetry for background tasks.
*   **MCP (Model Context Protocol) Authentication:** Standardizing external tool integrations remains a hurdle. **GitHub Copilot CLI** is plagued by OAuth token bridging failures, while **Qwen Code** and **Kimi Code** are actively patching HTTP 401 recovery flows and global MCP config loading for background daemons.
*   **Windows / WSL / IDE Fragility:** Cross-platform execution remains a major pain point. **Claude Code** and **Codex** are wrestling with virtualization (Cowork) and sandbox access denials (`C:\mnt\c` loops), while VS Code extensions are experiencing state desyncs and blank webviews across **Codex**, **Gemini CLI**, and **Copilot CLI**.

### 4. Differentiation Analysis
*   **Claude Code & OpenAI Codex:** Both are competing for the enterprise desktop. Claude Code is heavily investing in zero-friction cloud deployments (Auto Mode GA) and isolated container environments ("Cowork"). Codex is leveraging Rust for core rewrites and pushing the boundaries of multi-agent V2 configurations, though struggling with GPT-5.6 forced metadata.
*   **Gemini CLI:** Distinguishes itself through a focus on architectural efficiency and safety. It is actively investigating AST-aware codebase mapping to reduce token noise and proposing zero-dependency OS sandboxing to safely leverage the model's bash affinity.
*   **OpenCode & Pi:** These tools act as highly agnostic hubs. OpenCode is aggressively optimizing for local AI workflows (Ollama, LM Studio) and cost-effective models like DeepSeek V4 Pro. Pi is establishing itself as the premier API chameleon, seamlessly routing between AWS Bedrock, GitHub Copilot, and OpenAI APIs while building a robust Extension API.
*   **GitHub Copilot CLI:** Uniquely focused on multi-modal developer experiences, heavily pushing Voice Mode and cross-app session synchronization (Desktop to CLI to VS Code), though currently hampered by audio routing and OAuth bugs.
*   **Niche / Specialized Tools:** **Qwen Code** is pioneering multi-workspace daemon management (`1 daemon = N workspaces`), ideal for polyglot microservice developers. **DeepSeek TUI** is hyper-focused on edge/mobile computing compilation (Termux, NetBSD). 

### 5. Community Momentum & Maturity
**Claude Code** and **OpenAI Codex** exhibit the highest maturity and momentum, processing dozens of issues and complex PRs daily, indicative of massive scale and active enterprise feedback loops. **Gemini CLI** and **OpenCode** show incredibly healthy open-source momentum, utilizing community RFCs effectively (e.g., AST navigation, YOLO mode) to drive rapid iteration. **Pi** is moving exceptionally fast, rapidly integrating bleeding-edge API features (developer roles, constrained sampling, GPT-5.6). Conversely, **Kimi Code CLI** and **DeepSeek TUI** show lower volume but highly targeted, specialized development, indicating smaller but dedicated niche communities.

### 6. Trend Signals
*   **Cost & Token Visibility is Non-Negotiable:** As context windows scale (e.g., 272K+ thresholds), developers are demanding exact, real-time telemetry. Silent drops in token tracking (Claude Code) or hidden pricing band jumps (Codex/OpenCode) are major friction points.
*   **The Death of "Single-Workspace" Agents:** There is a strong industry signal towards parallel processing. Developers want fire-and-forget overnight tasks, multi-agent coordination sharing a single working tree, and daemons that manage multiple repositories simultaneously.
*   **Resilience over Perfection:** Communities are accepting of complex features (like auto-compaction and subagents) failing, as long as the tools recover gracefully. Injecting provider errors back into the LLM context for self-correction (Pi) and bounding memory leaks after cancelled worker storms (DeepSeek TUI) are emerging as best practices.
*   **AST Over Grep:** The industry is recognizing that naive `grep/cat` searching is insufficient for complex codebases. Expect a rapid industry-wide shift towards AST-aware CLI mapping to preserve context limits.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report based on the repository data as of 2026-07-12.

### 1. Top Skills Ranking
*Note: Due to missing comment counts in the provided dataset, these Skills are ranked by community attention, issue correlation, and impact.*

*   **Skill-Creator (Meta-Skill Fixes)** 
    *Functionality:* The native skill-creation and description-optimization tool for Claude Code. 
    *Discussion Highlights:* This tool is currently the center of the ecosystem's most critical bug. As detailed in [PR #1298](https://github.com/anthropics/skills/pull/1298) and [Issue #556](https://github.com/anthropics/skills/issues/556), its evaluation script (`run_eval.py`) currently reports 0% recall due to trigger detection failures, essentially optimizing against noise. It also suffers from severe Windows compatibility issues ([PR #1050](https://github.com/anthropics/skills/pull/1050), [PR #1099](https://github.com/anthropics/skills/pull/1099)). *Status: Open (Active Development)*
*   **Self-Audit & Reasoning Quality Gate** ([PR #1367](https://github.com/anthropics/skills/pull/1367))
    *Functionality:* A universal auditing skill that verifies AI output before delivery, checking for mechanical file existence followed by a four-dimension reasoning audit. 
    *Discussion Highlights:* Tied to [Issue #1385](https://github.com/anthropics/skills/issues/1385), the community is actively discussing the need for "reasoning quality pipelines" to prevent hallucinated outputs. *Status: Open*
*   **Document-Typography Skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *Functionality:* Automated typographic quality control for AI-generated documents (preventing orphan words, widow paragraphs, and numbering misalignment).
    *Discussion Highlights:* Addresses a subtle but highly prevalent issue in AI-generated documents that users rarely explicitly prompt for but immediately notice. *Status: Open*
*   **Testing-Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723))
    *Functionality:* Provides a comprehensive guide to full-stack testing philosophies (Testing Trophy model), unit testing, and React component testing.
    *Discussion Highlights:* Highly sought after by developers looking to enforce strict architectural and testing standards in AI-generated codebases. *Status: Open*
*   **Color-Expert Skill** ([PR #1302](https://github.com/anthropics/skills/pull/1302))
    *Functionality:* Deep color expertise for UI/UX tasks, covering naming systems, color spaces (OKLCH, OKLAB), and gradient generation.
    *Discussion Highlights:* Recognized as a highly specialized, self-contained skill that fills a major gap in frontend design capabilities. *Status: Open*
*   **Skill-Quality & Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83))
    *Functionality:* Meta-skills designed to evaluate the structural quality and security vulnerabilities of other community skills.
    *Discussion Highlights:* Directly addresses the trust boundary and security concerns raised by the community regarding third-party skill execution. *Status: Open*

### 2. Community Demand Trends
Based on the open Issues, the community is pushing heavily for the following new directions:
*   **Enterprise Security & Governance:** Users want safe agent execution patterns. [Issue #412](https://github.com/anthropics/skills/issues/412) proposes an "agent-governance" skill for policy enforcement and audit trails, while [Issue #1175](https://github.com/anthropics/skills/issues/1175) requests secure handling for SharePoint documents and access controls.
*   **Context Window Optimization:** With long-running agents burning through context, there is strong demand for state-management skills like the proposed "compact-memory" skill ([Issue #1329](https://github.com/anthropics/skills/issues/1329)), which uses symbolic notation to compress agent memory.
*   **Organizational Workflows:** Teams want the ability to share skills across an organization without manual file passing, essentially requesting an internal, org-wide Skill marketplace or direct sharing links ([Issue #228](https://github.com/anthropics/skills/issues/228)).
*   **MCP Interoperability:** Developers are advocating for Skills to be exposed as Model Context Protocol (MCP) servers, bridging the gap between prompt-based skills and hard-coded APIs ([Issue #16](https://github.com/anthropics/skills/issues/16)).

### 3. High-Potential Pending Skills
These open PRs represent high-value, actively discussed skills and critical fixes that are prime candidates for merging in the near future:
*   [PR #1261](https://github.com/anthropics/skills/pull/1261): **fix(skill-creator): isolate trigger-eval command files**. A critical security/stability fix preventing parallel eval workers from flooding and corrupting the user's live project `.claude/commands/` directory.
*   [PR #541](https://github.com/anthropics/skills/pull/541): **fix(docx): prevent tracked change w:id collision**. Fixes document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks.
*   [PR #486](https://github.com/anthropics/skills/pull/486): **Add ODT skill**. Introduces comprehensive OpenDocument Format (.odt, .ods) creation and parsing, massively expanding Claude's enterprise document capabilities.
*   [PR #362](https://github.com/anthropics/skills/pull/362): **Fix skill-creator UTF-8 panic**. Resolves Rust panics and CLI crashes when skills process multi-byte (non-English) characters. 

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **reliable execution and enhanced safety**, specifically evidenced by the urgent push to fix broken evaluation frameworks (`run_eval.py`), establish strict security boundaries for community-generated skills, and implement automated reasoning quality gates to verify AI outputs.

---

Here is the Claude Code community digest for July 12, 2026.

### 1. Today's Highlights
Claude Code rolled out version **v2.1.207**, which eliminates the opt-in requirement for Auto Mode across major cloud providers (Bedrock, Vertex AI, Foundry) and patches a critical terminal lag issue during long-stream responses. The community was highly active in reporting edge cases in the newly introduced Windows "Cowork" environment, alongside exposing significant flaws in session transcript persistence and subagent token accounting. Security and plugin stability also took center stage, with multiple community PRs submitted to harden plugin execution and patch certificate handling for the Bun runtime.

### 2. Releases
*   **[v2.1.207](https://github.com/anthropics/claude-code/releases)**
    *   **Auto Mode General Availability:** Auto mode is now natively available on Bedrock, Vertex AI, and Foundry without needing the `CLAUDE_CODE_ENABLE_AUTO_MODE` environment variable. Users can disable it via `disableAutoMode` in settings.
    *   **Terminal Streaming Fix:** Resolved a bug causing the terminal to freeze and keystrokes to lag while streaming responses that contained very long lists, tables, or paragraphs.

### 3. Hot Issues
1.  **[#74649](https://github.com/anthropics/claude-code/issues/74649): Cowork broken on Windows 11 Pro (Missing HCS services)** 
    A highly discussed issue (50 comments) where Windows users cannot utilize Cowork due to missing `vfpext` virtualization services. This signals a major compatibility blocker for the new containerized environments.
2.  **[#62699](https://github.com/anthropics/claude-code/issues/62699) & [#66192](https://github.com/anthropics/claude-code/issues/66192): TUI Copy-Paste Failures** 
    With over 60 combined upvotes, developers are heavily frustrated that copying text via `Ctrl+Shift+C` or standard shortcuts fails across Linux and macOS Terminal UI environments.
3.  **[#70539](https://github.com/anthropics/claude-code/issues/70539): Scroll-only mouse mode** 
    A popular request (68 upvotes) asking for a TUI mode that allows mouse wheel scrolling without registering accidental button clicks (like expanding tool outputs) when clicking to focus the terminal.
4.  **[#35744](https://github.com/anthropics/claude-code/issues/35744): Auto-continue after rate limit resets** 
    Users with 61 upvotes are requesting a feature to auto-resume long-running or overnight tasks when the 5-hour subscription usage limit resets, eliminating the need to manually type "continue".
5.  **[#17017](https://github.com/anthropics/claude-code/issues/17017): Project permissions override globals** 
    A serious security/configuration bug where `.claude/settings.local.json` completely replaces global permissions instead of merging them, creating unexpected operational constraints.
6.  **[#76635](https://github.com/anthropics/claude-code/issues/76635) & [#76600](https://github.com/anthropics/claude-code/issues/76600): Swallowed assistant text** 
    Crucial text generated between tool calls and user prompts is failing to render in the UI and is completely missing from session `.jsonl` transcripts, disrupting complex agent workflows.
7.  **[#76484](https://github.com/anthropics/claude-code/issues/76484): Missing subagent token tracking** 
    Background/async subagent completions are not writing token usage to the parent transcript, making it impossible for developers to track API consumption and costs on delegated tasks.
8.  **[#66020](https://github.com/anthropics/claude-code/issues/66020): macOS kernel zone leak** 
    Claude Code CLI is triggering a severe memory leak (`data.kalloc.1024`) on macOS 26.5.1, causing panic crashes at ~20GB of memory usage under heavy agent loads.
9.  **[#76751](https://github.com/anthropics/claude-code/issues/76751): Statusline 1M-context misreporting** 
    Despite active 1M-context sessions on Fable 5, the status line hardcodes to a 200k limit, permanently pegging context usage at 100% and breaking UI logic.
10. **[#76743](https://github.com/anthropics/claude-code/issues/76743): Windows permission click-through** 
    A dangerous UX bug where clicking the terminal window to gain focus inadvertently registers as a click on a pending permission dialog, potentially authorizing unintended tool executions.

### 4. Key PR Progress
1.  **[#76640](https://github.com/anthropics/claude-code/pull/76640): Fix macOS Bun Runtime SSL and Proxy Blackhole**
    Resolves Cowork connection failures ("Self-signed certificate detected") by properly loading macOS system certificates into the Bun runtime and fixing `NO_PROXY` handling.
2.  **[#76581](https://github.com/anthropics/claude-code/pull/76581): Harden Plugin Scripts (YAML & Symlink)**
    A crucial security PR that protects official plugin scripts from YAML frontmatter breakouts, path traversals, and symlink-based credential overwrites.
3.  **[#76576](https://github.com/anthropics/claude-code/pull/76576): Align userConfig docs with v2.1.207 shell-injection fix**
    Updates the hosted plugin development documentation to reflect recent safety patches that block unsafe `${user_config.*}` execution in shell-form plugin hooks.
4.  **[#76673](https://github.com/anthropics/claude-code/pull/76673): Lifecycle & Ralph State Isolation**
    A closed PR focusing on backend robustness—fixing issue triage cancellation, `invalid` state auto-closing, and isolating session states to prevent PID reuse lock issues.
5.  **[#39043](https://github.com/anthropics/claude-code/pull/39043): Remove "retro-futuristic" Frontend Skill**
    An open, community-driven PR aimed at updating the default styling recommendations output by Claude Code's frontend design capabilities.

### 5. Feature Request Trends
*   **Asynchronous Workflow Management:** High demand for "fire-and-forget" capabilities, specifically requests to auto-resume tasks after rate-limit resets (#35744) and persistent Remote Control sessions that survive desktop reboots and can reconnect via mobile (#76070).
*   **Multi-Agent & Session Coordination:** Developers running heavy parallel workloads want native cross-session coordination mechanisms for independently launched agents sharing a single working tree (#76727).
*   **Granular Terminal UI Controls:** Requests for refined terminal interactions, such as decoupling mouse wheel scrolling from mouse clicks (#70539), and making the `/context` command graph-only by default to reduce visual clutter (#64996).

### 6. Developer Pain Points
*   **Windows "Cowork" Stability:** Windows developers are experiencing an unstable Cowork environment, plagued by Hyper-V Host Compute Service access denials (#69102) and missing virtualization services (#74649).
*   **Transcript Integrity & Observability:** Broken session transcripts are severely impacting debugging. Assistant text is frequently dropped from `.jsonl` logs (#76635), and async subagent token usage is silently lost (#76484), ruining cost-tracking efforts.
*   **Cross-Platform Tool Execution Quirks:** Windows environments are suffering from forced CRLF rewrites breaking script approvals (#71553), leaky shell redirections in hooks creating zero-byte files (#76774), and dangerous click-throughs on permission dialogs (#76743).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 12, 2026.

### 1. Today's Highlights
Codex rolled out two new Rust alpha iterations (v0.145.0-alpha.3 and alpha.4) alongside a massive suite of merged PRs focusing heavily on subagent architecture, environment caching, and IDE/TUI rendering improvements. The community was highly active in reporting friction with the new GPT-5.6 Sol model's multi-agent configuration, alongside ongoing frustrations with rate limits, quota resets, and Windows/WSL sandbox environments.

### 2. Releases
- **[rust-v0.145.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.4)**
- **[rust-v0.145.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.3)**
*Note: Specific changelogs were not detailed in the release notes, but these alphas incorporate the rapid merges seen in today's PR pipeline.*

### 3. Hot Issues
1. **[#31814](https://github.com/openai/codex/issues/31814) - GPT-5.6 Sol subagent configuration bug** *(98 👍 / 47 💬)*: GPT-5.6 Sol forces MultiAgent V2 metadata, overriding user configurations and forcing all subagents to run as Sol instances. This is a critical workflow blocker for power users.
2. **[#31606](https://github.com/openai/codex/issues/31606) - Wasted rate limit resets** *(38 👍 / 30 💬)*: Pro users report that initiating a rate limit reset fails to apply but still decrements the available reset counter.
3. **[#21753](https://github.com/openai/codex/issues/21753) - Full Claude Code Hook Parity** *(19 👍 / 25 💬)*: A highly supported enhancement proposal requesting a comprehensive lifecycle event and hook system to match competitor capabilities.
4. **[#32041](https://github.com/openai/codex/issues/32041) - VS Code webview blank on Linux** *(22 💬)*: The latest VS Code extension updates (26.5707.*) are rendering completely blank webviews on Linux, forcing users to downgrade and lose GPT-5.6 Sol support.
5. **[#31846](https://github.com/openai/codex/issues/31846) - GPT-5.3 Codex Spark fails** *(17 👍 / 9 💬)*: Spark sessions are crashing with an `Unsupported parameter: reasoning.summary` error, blocking access to the model entirely for some users.
6. **[#32486](https://github.com/openai/codex/issues/32486) - GPT-5.6 context crosses 272K pricing threshold** *(3 💬)*: Users warn that default GPT-5.6 Sol/Luna context sizes silently push sessions into higher-usage pricing bands without explicit user opt-in.
7. **[#18506](https://github.com/openai/codex/issues/18506) - Windows + WSL integration broken** *(14 👍 / 10 💬)*: Opening repos via WSL UNC paths breaks the integrated terminal and leaks Windows environment configurations into the Linux space.
8. **[#23527](https://github.com/openai/codex/issues/23527) - Mobile SSH remote projects missing** *(13 👍 / 10 💬)*: SSH remote projects visible on the Codex macOS desktop app do not populate in the iOS mobile app's project selector.
9. **[#32184](https://github.com/openai/codex/issues/32184) - Windows sandbox hangs** *(2 💬)*: The Windows app sandbox completely hangs on every child process execution, returning `Access is denied` for PowerShell and cmd.exe alike.
10. **[#31412](https://github.com/openai/codex/issues/31412) - Custom Responses API 401 errors** *(9 💬)*: Routing ChatGPT auth to a custom provider fails with a missing `api.responses.write` scope error, heavily impacting enterprise/local deployments.

### 4. Key PR Progress
1. **[#30016](https://github.com/openai/codex/pull/30016) - Inherit step environments in subagents**: Fixes environment resolution by ensuring subagents spawned by deferred executors inherit the correct, updated runtime environment rather than a frozen snapshot.
2. **[#31526](https://github.com/openai/codex/pull/31526) - Restrict hosted threads to server-registered tools**: Adds a `server_registered_tools_only` feature to prevent Codex from injecting native/extension tools into hosted app-server threads unnecessarily.
3. **[#31806](https://github.com/openai/codex/pull/31806) - Publish releases to Cloudflare R2**: Implements a shadow copy of installer releases to Cloudflare R2, acting as a robust CDN fallback while keeping GitHub Releases canonical.
4. **[#32441](https://github.com/openai/codex/pull/32441) - Sandbox enforcement for memory consolidation**: Ensures memory consolidation agents respect the exact permission profiles and legacy sandbox overrides established by the parent turn.
5. **[#30036](https://github.com/openai/codex/pull/30036) - Deterministic Windows executable resolution**: Fixes a Windows-specific security/execution bug where the OS could unpredictably resolve an executable before Codex applied its child environment variables.
6. **[#29946](https://github.com/openai/codex/pull/29946) - Cache stable plugin metadata**: Separates static plugin manifests from live MCP server states, caching the metadata to prevent unnecessary rebuilds when connections drop.
7. **[#32461](https://github.com/openai/codex/pull/32461) - Expand tabs in TUI diffs**: Improves code review readability inside the CLI by replacing literal tab characters with four spaces without breaking wrapping styles.
8. **[#32460](https://github.com/openai/codex/pull/32460) - Thread-idle lifecycle after guardian interrupts**: Ensures the extension lifecycle properly emits an idle state when a turn is aborted by the system guardian, preventing UI hangs.
9. **[#30135](https://github.com/openai/codex/pull/30135) - Versioned bash fork artifacts**: Reintroduces a custom patched Bash shell as an independently versioned CI artifact, decoupling it from standard Rust releases.
10. **[#32305](https://github.com/openai/codex/pull/32305) - File blob upload diagnostics**: Replaces leaky signed URLs in error logs with precise `x-ms-client-request-id` tracking for much safer and clearer transport diagnostics.

### 5. Feature Request Trends
* **Lifecycle & Hook Expansions:** There is a strong push for deeper automation and event tracking, highlighted by requests for full Claude Code-style hooks ([#21753](https://github.com/openai/codex/issues/21753)) and lifecycle emission fixes in the backend.
* **Advanced Context Controls:** Developers want tighter grips on token usage and context windows, requesting features like bounded large execution outputs ([#30831](https://github.com/openai/codex/issues/30831)) and transparent alerts when models cross higher pricing bands ([#32486](https://github.com/openai/codex/issues/32486)).
* **CLI/TUI Customization:** Requests for localized prompt aliases ([#31666](https://github.com/openai/codex/issues/31666)) and multi-line status lines ([#21653](https://github.com/openai/codex/issues/21653)) show a desire for highly personalized, scriptable CLI workflows.
* **Platform Parity:** FreeBSD support ([#13802](https://github.com/openai/codex/issues/13802)) and deeper iOS/Remote SSH synchronization remain highly requested platform expansions.

### 6. Developer Pain Points
* **GPT-5.6 Integration Quirks:** The rollout of GPT-5.6 Sol is causing headaches due to hard-coded multi-agent configurations overriding user setups ([#31814](https://github.com/openai/codex/issues/31814)), alongside missing models in CLI for some team tiers ([#32034](https://github.com/openai/codex/issues/32034)).
* **Windows / WSL Fragility:** Windows power users are fighting constant battles with UNC path resolutions breaking terminals ([#18506](https://github.com/openai/codex/issues/18506)), invalid `C:\mnt\c` cache loops ([#24268](https://github.com/openai/codex/issues/24268)), and overly aggressive sandbox child-process blocking ([#32184](https://github.com/openai/codex/issues/32184)).
* **Quota & Rate Limit Anxiety:** The reset and quota mechanics for $200/mo Pro accounts are exhibiting bugs—from resets not applying properly ([#31606](https://github.com/openai/codex/issues/31606)) to allowances randomly disappearing ([#32484](https://github.com/openai/codex/issues/32484)).
* **IDE Extension Stability:** The VS Code extension is proving unstable across operating systems, particularly the webview mounting failures on Windows and Linux, causing unresponsive states and flooded IPC logs ([#32041](https://github.com/openai/codex/issues/32041), [#31149](https://github.com/openai/codex/issues/31149)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 12, 2026.

### 1. Today's Highlights
The Gemini CLI community is heavily focused on enhancing agent reliability, specifically addressing subagent instability and lifecycle hangs. There is a strong push towards hardening security and workspace boundaries, evidenced by active PRs enforcing path trust checks and shell wrapper stripping. Additionally, core system improvements like AST-aware codebase mapping and Auto Memory refinement are dominating maintainer discussions.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community and maintainer discussion:

*   **[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323): Subagent recovery after MAX_TURNS is reported as GOAL success**
    *Why it matters:* The `codebase_investigator` agent falsely reports success when it actually hits its max turn limit, interrupting workflows and hiding failures from the user.
*   **[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409): Generalist agent hangs**
    *Why it matters:* A severe P1 bug where deferring to the generalist agent causes infinite hangs. Users are forced to explicitly disable subagents to maintain basic functionality.
*   **[Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873): Leverage model's bash affinity via Zero-Dependency OS Sandboxing**
    *Why it matters:* Proposes utilizing the model's native bash capabilities safely by implementing OS-level sandboxing and routing execution intents securely without compromising UX.
*   **[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166): Shell command execution gets stuck with "Waiting input"**
    *Why it matters:* The CLI repeatedly hangs on simple shell commands, leaving the UI stuck in an "Awaiting user input" state after the process has already terminated.
*   **[Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522): Stop Auto Memory from retrying low-signal sessions indefinitely**
    *Why it matters:* Auto Memory wastes background processing cycles endlessly resurfacing "low-signal" sessions because they fail to register as processed unless explicitly read.
*   **[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983): Browser subagent fails in Wayland**
    *Why it matters:* Environment compatibility breakdown where the browser agent immediately fails upon initialization on Wayland desktop environments.
*   **[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246): Gemini CLI encounters 400 error with > 128 tools**
    *Why it matters:* Scalability roadblock preventing power users from loading large toolsets (MCP servers), requiring smarter agent-level tool filtering.
*   **[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745): Assess the impact of AST-aware file reads, search, and mapping**
    *Why it matters:* A major architectural investigation into adopting AST tools to reduce token noise, navigate dependencies better, and prevent misaligned file reads.
*   **[Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525): Add deterministic redaction and reduce Auto Memory logging**
    *Why it matters:* Security enhancement request to prevent secrets from local transcripts reaching the extraction model's context, moving to strict deterministic redaction.
*   **[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672): Agent should stop/discourage destructive behavior**
    *Why it matters:* Safety concern regarding the model occasionally utilizing destructive git commands (`git reset --force`) when safer, reversible alternatives exist.

### 4. Key PR Progress
Here are the top 10 active PRs showcasing ongoing development:

*   **[PR #28183](https://github.com/google-gemini/gemini-cli/pull/28183): fix(vscode-ide-companion): preserve terminal focus when closing diff tabs**
    Fixes a highly irritating UX issue where the VS Code extension steals terminal focus when a file edit is approved.
*   **[PR #28359](https://github.com/google-gemini/gemini-cli/pull/28359): fix(core): strip login/interactive shell wrappers in stripShellWrapper**
    Patches the policy engine to properly intercept and strip complex shell wrappers (e.g., `bash -lc`), ensuring accurate re-checking of wrapped payloads.
*   **[PR #28349](https://github.com/google-gemini/gemini-cli/pull/28349): fix(cli): guard customDeepMerge against circular references**
    Resolves a crash in the settings manager (`RangeError: Maximum call stack`) caused by cyclic objects during recursive merging.
*   **[PR #28319](https://github.com/google-gemini/gemini-cli/pull/28319): refactor(a2a-server): enforce path trust check prior to environment loading**
    Critical security update ensuring workspace path trust is verified *before* any workspace-level environment variables are loaded or applied.
*   **[PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164): fix(core): limit recursive reasoning turns per single user request** *(Closed)*
    Introduces a strict cap of 15 reasoning turns per user request to safeguard local CPU resources and API quotas from infinite agent loops.
*   **[PR #28248](https://github.com/google-gemini/gemini-cli/pull/28248): docs: explain MCP env expansion**
    Greatly improves developer documentation by clarifying supported/unsupported environment variable syntaxes for MCP servers across different OS platforms.
*   **[PR #28247](https://github.com/google-gemini/gemini-cli/pull/28247): fix(core): match ls ignore globs by relative path**
    Upgrades the `ls` tool to correctly evaluate complex ignore patterns (like `**/*.log`) against workspace-relative paths using `picomatch`.
*   **[PR #21924](https://github.com/google-gemini/gemini-cli/issues/21924): High performance and flicker free behavior on terminal resize** *(Ref: Issue)*
    Ongoing core work to migrate terminal rendering to `RenderStatic` to eliminate massive UI flickering during terminal resizes.
*   **[Issue/PR #22746](https://github.com/google-gemini/gemini-cli/issues/22746): Investigate using AST aware CLI tools to map codebase**
    Underlying tooling implementation exploring third-party AST tools (tilth/glyph) to map repositories natively without API calls.
*   **[PR #24935](https://github.com/google-gemini/gemini-cli/issues/24935): Corruption after exiting external editors in terminalBuffer mode**
    Addresses UI corruption by forcing a full-screen refresh on the Ink rendering layer upon exiting external editors (like `vim`).

### 5. Feature Request Trends
*   **Advanced Codebase Navigation (AST):** High demand for moving beyond naive `grep/cat` searching towards AST-aware file mapping and reading to optimize token context and execution turns.
*   **Robust Auto Memory & Evals:** Requests for deterministic redaction, better loop prevention, and component-level behavioral evaluations (76 behavioral evals proposed) to quantify agent quality reliably.
*   **Enhanced Sandboxing & Safety:** A strong trend toward zero-dependency OS-level sandboxing that allows the agent to execute native bash chains freely without risking the user's workspace.

### 6. Developer Pain Points
*   **Subagent Instability & Infinite Loops:** Developers are highly frustrated by agents hanging indefinitely, getting stuck in interactive shell prompts (e.g., Vite app creation), or hitting `MAX_TURNS` silently.
*   **Tool & Context Overload:** The CLI struggles to scale with complex environments, resulting in API `400` errors when tool counts exceed 128, causing the model to lose self-awareness of its own CLI flags and skills.
*   **Workspace Pollution:** The model has an annoying habit of dropping temporary execution scripts in random directories, forcing developers to manually clean up their working tree before commits.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-12

## 1. Today's Highlights
The Copilot CLI community is currently dominated by discussions around Model Context Protocol (MCP) OAuth integrations and the newly introduced Voice Mode. A significant cluster of high-priority issues highlights authentication bridging failures between the desktop UI and CLI sessions for remote MCP servers. Meanwhile, feature requests for voice mode UX improvements and cross-platform session synchronization are gaining notable traction.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
Here are the 10 most impactful issues updated in the last 24 hours:

*   **MCP OAuth Bridging Failures (Atlassian & Work IQ):** A critical regression appears to prevent third-party OAuth MCP servers from loading tools into CLI sessions. Servers show as "Connected" in the app UI, but the token is never bridged, resulting in zero tools exposed.
    *   *Atlassian MCP zero tools:* [Issue #4089](https://github.com/github/copilot-cli/issues/4089)
    *   *Atlassian auto-connects without OAuth:* [Issue #4086](https://github.com/github/copilot-cli/issues/4086)
    *   *MCP servers marked needs-auth / drop after 90s:* [Issue #4085](https://github.com/github/copilot-cli/issues/4085)
    *   *General OAuth token bridging failure:* [Issue #4096](https://github.com/github/copilot-cli/issues/4096)
*   **Voice Mode Silent ASR Failure:** In Foundry Local Core, all bundled Automatic Speech Recognition (ASR) models fail silently, returning empty transcriptions despite successful mic capture. [Issue #4024](https://github.com/github/copilot-cli/issues/4024)
*   **`web_search` Tool Hallucinations:** The built-in `web_search` tool is confidently returning fabricated answers presented as fact when underlying retrieval fails to find relevant information. [Issue #4093](https://github.com/github/copilot-cli/issues/4093)
*   **Orphaned Sessions in VS Code:** Deleting a session in the Copilot Desktop App does not propagate to `session-store.db` or VS Code Copilot Chat history, leaving orphaned data. [Issue #4094](https://github.com/github/copilot-cli/issues/4094)
*   **Windows Plugin Update Blocker:** Running `copilot plugin update` on Windows fails with "Access is denied" (os error 5) because the VS Code Copilot extension holds watcher handles on the installed-plugins directory. [Issue #4095](https://github.com/github/copilot-cli/issues/4095)
*   **Corporate Proxy Blocks Voice Runtime:** Downloading the voice mode inference runtime fails on corporate networks due to an `ENOTFOUND` proxy resolution error. [Issue #4083](https://github.com/github/copilot-cli/issues/4083)

## 4. Key PR Progress
Only **1 Pull Request** saw activity in the last 24 hours.

*   **PR #2565: [install] Guard against duplicate PATH entries on reinstall**
    *   **Author:** marcelsafin ([PR #2565](https://github.com/github/copilot-cli/pull/2565))
    *   **Summary:** Fixes an installation friction point where running the installer twice without a shell restart appends duplicate PATH configuration lines to the shell profile. The PR updates the check to look at the profile file directly rather than relying on `command -v copilot`.

## 5. Feature Request Trends
Analysis of recent issues reveals a strong community push toward the following enhancements:
*   **Voice Mode UX Refinements:** Developers want tighter integration for push-to-talk, requesting auto-submission upon spacebar release ([Issue #4090](https://github.com/github/copilot-cli/issues/4090)) and automatic muting of system audio playback during voice capture to prevent speaker interference ([Issue #4092](https://github.com/github/copilot-cli/issues/4092)).
*   **Advanced Context & Memory:** There is a high demand for smarter context injection. A notable request proposes allowing dynamic command placeholders (e.g., `!`<command>``) inside `SKILL.md` files ([Issue #4088](https://github.com/github/copilot-cli/issues/4088)). Additionally, users are asking for clearer documentation on global instruction files like `AGENTS.md` and `CLAUDE.md` ([Issue #3983](https://github.com/github/copilot-cli/issues/3983)).
*   **BYOK (Bring Your Own Key) Enhancements:** Custom provider users are requesting automatic model discovery via API queries, rather than forcing users to manually define `COPILOT_MODEL` identifiers ([Issue #3795](https://github.com/github/copilot-cli/issues/3795)).
*   **Cross-App Session Sync:** Users are asking for unified state management, requesting that sessions started in the CLI be immediately accessible in the Copilot Desktop App, and vice versa ([Issue #4082](https://github.com/github/copilot-cli/issues/4082)).

## 6. Developer Pain Points
*   **Fragmented MCP Authentication:** The most severe current pain point is MCP OAuth reliability. Developers are highly frustrated that third-party servers (Atlassian, Azure AD) authenticate perfectly in the GUI but fail to pass credentials or tools down to the CLI agent. 
*   **State Desync Across Platforms:** Managing sessions across VS Code, the Desktop App, and the CLI results in orphaned database rows, requiring manual cleanup of the SQLite stores.
*   **Local Runtime Dependencies:** Setting up Voice Mode requires pulling heavy dependencies (Foundry Local Core) which routinely break behind corporate proxies or fail silently due to audio routing bugs in the `MultiModalProcessor`.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI Community Digest (2026-07-12)

### 1. Today's Highlights
The past 24 hours in the Kimi Code CLI community were marked by a strong focus on system stability and multi-session compatibility, featuring no new releases but three significant bug fix Pull Requests. Notably, developer `nankingjing` drove critical patches addressing background agent telemetry, UI truncation logic, and global MCP configuration loading for ACP servers. Additionally, the community flagged a minor but annoying IDE autocomplete issue regarding plugin metadata parsing.

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Hot Issues
*Note: Only 1 issue had activity in the last 24h.*
*   **[OPEN] Bug: kimi-datasource CHANGELOG.md incorrectly listed as a skill** (Created/Updated: 2026-07-11 | 👍: 0 | [Issue #2491](https://github.com/MoonshotAI/kimi-cli/issues/2491))
    *   **Why it matters:** User `zhangleilaoge` reported a UI/UX friction point where the `/skill` autocomplete dropdown is incorrectly surfacing `CHANGELOG.md` from the `kimi-datasource` plugin. This violates the expected behavior defined in the plugin documentation and clutters the developer interface with non-executable files. Currently awaiting community or maintainer engagement.

### 4. Key PR Progress
*Note: 3 PRs were updated in the last 24h, all authored by `nankingjing`.*
*   **[OPEN] Fix: record started_at for background agent tasks so duration is reported** ([PR #2493](https://github.com/MoonshotAI/kimi-cli/pull/2493))
    *   **Details:** Fixes a telemetry blind spot where background *agent* tasks were missing the `runtime.started_at` timestamp (unlike background *bash* tasks). This fix ensures that execution run durations are accurately tracked and reported for all background operations.
*   **[OPEN] fix: shorten_middle output exceeds target width by ellipsis length** ([PR #2492](https://github.com/MoonshotAI/kimi-cli/pull/2492))
    *   **Details:** Addresses an off-by-three error in `src/kimi_cli/utils/string.py`. The `shorten_middle` function previously failed to account for the 3-character length of the `...` ellipsis, causing truncated string outputs to overflow the intended UI width constraints.
*   **[OPEN] fix(acp): load global MCP config in kimi acp server** ([PR #2490](https://github.com/MoonshotAI/kimi-cli/pull/2490))
    *   **Details:** Resolves a feature parity gap between interactive CLI and background servers. The `kimi acp` multi-session server was previously ignoring globally configured MCP servers. This fix allows ACP clients (like Zed, JetBrains AI Assistant, and orchestrators) to correctly discover and utilize user-configured MCP tools alongside built-in ones.

### 5. Feature Request Trends
Based on recent issue trajectories and PR resolutions, community requests are heavily leaning toward **seamless IDE and orchestrator integration via the ACP (Agent Client Protocol)**. Developers expect strict parity between interactive CLI capabilities and background/IDE-integrated servers—specifically demanding that global tool configurations (like MCP) work out-of-the-box across all execution contexts. 

### 6. Developer Pain Points
*   **Telemetry and Debugging Gaps:** Developers rely on background agents to execute long-running tasks, but broken or missing telemetry (such as unrecorded task durations) makes it difficult to profile and optimize agent performance.
*   **UI Polish & Metadata Parsing:** Minor UI overflows (string truncation exceeding widths) and file loading logic (interpreting markdown files as executable skills) indicate underlying friction in how the CLI parses and displays plugin metadata, slightly degrading the developer experience.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 12, 2026.

### 1. Today's Highlights
OpenCode's development focus over the last 24 hours has heavily pivoted towards aggressive performance optimizations and V2 UI stability. Core contributors pushed multiple critical fixes to address severe CPU usage spikes during idle states and large repository indexing. Additionally, the community is actively discussing integrating next-gen models like GPT-5.6 Luna and DeepSeek V4 Pro, though OAuth integrations are currently facing compatibility friction.

### 2. Releases
No new official releases were published in the last 24 hours. Development remains focused on merging fixes into the main branch ahead of the next stable cut.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **GPT-5.6 Luna OAuth Failure** ([#36140](https://github.com/anomalyco/opencode/issues/36140)): Users are hitting HTTP 404 errors when trying to access `gpt-5.6-luna` via ChatGPT OAuth. This highlights growing pains as OpenCode rushes to support the latest OpenAI models.
*   **DeepSeek V4 Pro Pricing & Usage Limits** ([#28846](https://github.com/anomalyco/opencode/issues/28846)): Following a massive 75% price cut for DeepSeek V4 Pro, users are clamoring for an adjustment to the OpenCode Go subscription limits. This closed issue shows active communication between the community and maintainers regarding cost-benefit ratios.
*   **High CPU Usage Spikes** ([#30086](https://github.com/anomalyco/opencode/issues/30086)): A critical regression where running just 3 OpenCode sessions cripples modern CPUs. This has sparked significant community frustration and ties directly to the file-indexing fixes seen in today's PRs. 
*   **Auto-Discover OpenAI-Compatible Models** ([#6231](https://github.com/anomalyco/opencode/issues/6231): With strong support (169 👍), users want automated model discovery for local endpoints like Ollama and LM Studio, reducing friction in local AI workflows.
*   **Porting Claude Code's `/btw` Command** ([#16992](https://github.com/anomalyco/opencode/issues/16992)): The highest-voted feature request (153 👍) asks to implement Anthropic's `/btw` command for inline follow-up questions without losing session context.
*   **The Return of YOLO Mode** ([#8463](https://github.com/anomalyco/opencode/issues/8463)): A highly requested feature (91 👍) to add a `--dangerously-skip-permissions` flag for automated, trusted environments where manual permission approvals interrupt CI/CD pipelines.
*   **GPT-5.6 Codex Metadata Mismatch** ([#36247](https://github.com/anomalyco/opencode/issues/36247)): A technical discrepancy where the Codex OAuth backend uses lower input budgets than the direct API limits inherited from `models.dev`, confusing developers tracking context limits.
*   **Standalone TUI Bash Tool Streaming** ([#34966](https://github.com/anomalyco/opencode/issues/34966)): Developers report that long-running bash commands in the TUI do not stream stdout live, only outputting upon completion, which breaks interactive debugging workflows.
*   **Session Renaming Broken** ([#36439](https://github.com/anomalyco/opencode/issues/36439)): Despite active plugins, sessions are stuck on the "New Session..." default label, breaking session management UX.
*   **SQLite Schema Migration Crashes** ([#36407](https://github.com/anomalyco/opencode/issues/36407)): Older `opencode.db` files are causing hard crashes on startup due to a missing `name` column, exposing flaws in the database migration system for legacy users.

### 4. Key PR Progress
Core contributors and bots focused heavily on under-the-hood performance and V2 architecture stability today:

*   **fix(core): disable unused fff content caches** ([#36452](https://github.com/anomalyco/opencode/pull/36452) & [#36453](https://github.com/anomalyco/opencode/pull/36453)): Directly addresses the CPU usage complaints by disabling eager FFF mmap cache warmup and content indexing, leaning entirely on `ripgrep` for agent search.
*   **fix(core): initialize fff lazily** ([#36449](https://github.com/anomalyco/opencode/pull/36449)): Defers native FFF creation until a `find`, `glob`, or `grep` is actually executed, vastly improving startup times.
*   **fix(core): skip fff for aggregate locations** ([#36437](https://github.com/anomalyco/opencode/pull/36437)): Prevents the engine from eagerly indexing massive, non-VCS aggregate directories, bounding filesystem operations to actual VCS repositories.
*   **fix(cli): hand update completion directly to the TUI** ([#36455](https://github.com/anomalyco/opencode/pull/36455)): Cleans up the CLI update process by removing receipt spam in the terminal scrollback, replacing it with a smooth UI dissolve.
*   **fix(client): accept larger SSE events** ([#36442](https://github.com/anomalyco/opencode/pull/36442)): Increases the Server-Sent Events (SSE) payload limit from 1 MiB to 16 MiB to accommodate larger V2 event schemas.
*   **fix(provider): apply config model cost overrides at runtime** ([#17645](https://github.com/anomalyco/opencode/pull/17645)): Fixes a gap where custom model pricing in user configs wasn't being applied dynamically at runtime.
*   **fix(session): reconcile compaction summary with preserved tail** ([#28067](https://github.com/anomalyco/opencode/pull/28067)): Ensures context compaction summaries remain accurate when recent turns complete prior tasks.
*   **fix(opencode): support GPT-5.6 Responses Lite** ([#36143](https://github.com/anomalyco/opencode/pull/36143)): Updates the ChatGPT OAuth routing to correctly handle the new `gpt-5.6-sol`, `terra`, and `luna` models via the Responses Lite contract.
*   **fix(tui): preserve pending session work** ([#36433](https://github.com/anomalyco/opencode/pull/36433)): Fixes a V2 race condition where reconnecting to a session would drop prompts that hadn't fully hydrated yet.
*   **fix(app): skip agent.set when agent unchanged in Web UI** ([#36425](https://github.com/anomalyco/opencode/pull/36425)): Resolves Web UI state bugs triggered by changing URLs while keeping the same agent.

### 5. Feature Request Trends
Analyzing the issue tracker reveals distinct trends in what developers want next from OpenCode:
*   **Local & Open-Source Model Parity:** High demand for seamless integration with local AI providers. Users want automated discovery for LM Studio/Ollama (#6231) and better support for OpenAI-compatible endpoints.
*   **Automated Pipeline Streamlining:** Developers are pushing for features that allow OpenCode to run autonomously in trusted environments, such as YOLO mode (#8463) and real-time TUI bash streaming (#34966).
*   **Next-Gen Model Adoption:** Immediate requests to adjust UI limits and internal logic to support the newly released GPT-5.6 variants and capitalize on DeepSeek V4 Pro's price cuts.
*   **AI Agent Context Control:** Requests for features like `/btw` (#16992), `/clear` (#36432), and opt-in anonymized data sharing (#35303) show a desire for finer control over how the AI ingests, resets, and processes session context.

### 6. Developer Pain Points
*   **Resource Hogging at Idle:** The most prominent complaint is OpenCode consuming 50%+ of a CPU core while simply waiting for an API rate limit to reset (#19466), with overall CPU usage spiking even when idle.
*   **Database Migration Fragility:** Several users report catastrophic startup freezes caused by SQLite schema mismatches when upgrading older local databases (#36407).
*   **Web GUI State Desync:** GUI users experience persistent "thinking..." hangs following crashes (#35986) or notice that UI components like SubAgent changes fail to track in the Diff Viewer (#36459).
*   **Disjointed Session Management:** Developers are frustrated by sessions losing their auto-generated names (#36439) and duplicate messages appearing when working across attached client/server setups (#27928).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community on 2026-07-12.

### 1. Today's Highlights
The Pi ecosystem experienced a massive influx of updates today, predominantly focused on integrating and stabilizing the newly released **GPT-5.6 (Sol/Terra/Luna)** model family. Significant architectural improvements were also landed to enhance the extension API, including deferred reloads, scoped model contexts, and better cost reporting for subagents. Additionally, critical patches were merged to resolve authentication regressions for AWS Bedrock and fix routing issues for GitHub Copilot's specialized models.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
*   **#6097 [CLOSED] Add support for 'max' thinking level** (👍 18): As OpenAI launches GPT-5.6 Sol with a sixth `max` reasoning level, the community successfully pushed to ensure Pi supports this deepest reasoning tier, aligning it with Anthropic's Opus capabilities. 
*   **#6475 [CLOSED] Add GPT-5.6 to the GitHub Copilot provider catalog** (👍 8): A highly requested feature to add the Sol, Terra, and Luna models to the GitHub Copilot provider, ensuring users can leverage the new models via their Copilot subscriptions.
*   **#6524 [OPEN] Hide GPT-5.6 reasoning-summary empty placeholders**: Users note that GPT-5.6 models output messy empty placeholders (e.g., `<!-- -->`) during reasoning. The community is looking for a client-side fix to clean up the TUI display.
*   **#6472 [CLOSED] compaction.enabled=false bypassed by overflow recovery path**: A critical bug where setting `compaction.enabled: false` was ignored during context overflow. This was a major pain point for users manually managing context windows.
*   **#6513 [OPEN] Codex cached WebSocket can retain previous account after credential changes**: A security and routing concern where account switching mid-session re-used the previous account's WebSocket and `previous_response_id` instead of initiating a fresh handshake.
*   **#6157 [CLOSED] Compaction summary should be in the session's language**: Users highlighted that automatic compaction summaries were strictly in English. The community successfully pushed to localize checkpoints based on the session's conversational language.
*   **#6531 [CLOSED] Bedrock AWS_PROFILE authentication sent as invalid bearer token**: A recent Bedrock API update caused `AWS_PROFILE` ambient logins to fail with 403 errors, severely blocking AWS users. 
*   **#6502 [OPEN] Windows Terminal scrolls to top on TUI redraw**: A frustrating UX bug where the `\x1b[3J` ANSI code wipes the scrollback buffer, forcing the view to the top during normal Pi TUI interactions.
*   **#6456 [CLOSED] ctrl-p should show previous prompt**: Developers migrating from Codex/Claude expressed frustration that `Ctrl+P` changes the model instead of cycling through prompt history (standard Unix behavior).
*   **#6522 [OPEN] No min floor on max_completion_tokens**: When using proxied OpenAI endpoints with incorrect context limits, Pi can calculate a `max_tokens` of 1, resulting in 400 Bad Request errors from the provider.

### 4. Key PR Progress
*   **#6534 [OPEN] feat(ai): add developer message role**: An experimental, highly anticipated PR by `mitsuhiko` introducing a `developer` role for system prompts, based on RFC 54.
*   **#6341 [OPEN] feat(ai): support constrained sampling**: Adds opt-in provider-side JSON-schema constrained sampling, allowing models to strictly format tool arguments.
*   **#6530 [CLOSED] perf(coding-agent): cut Node CLI startup cost**: Major performance optimization that fast-paths `--version` calls and moves Bun-only extension virtual module imports out of the Node startup sequence.
*   **#6528 [CLOSED] fix(ai): support GPT-5.6 prompt cache options**: Implements GPT-5.6-specific caching headers (`prompt_cache_options`) to optimize latency and costs for Sol/Terra/Luna models.
*   **#6538 [CLOSED] fix(ai): route GitHub Copilot MAI-Code models through /responses endpoint**: Fixes a crash with `mai-code-1-flash-picker` by correctly mapping it to Copilot's `/responses` API instead of `/chat/completions`.
*   **#6532 [CLOSED] Fix Bedrock AWS_PROFILE authentication regression**: Resolves the 403 error by separating API-key login logic from ambient AWS credential resolution.
*   **#6539 [CLOSED] fix(ai): bind Codex WebSocket reuse to account**: Fixes the session crossover bug by binding WebSocket ownership to normalized endpoints and JWT account claims, ensuring safe credential switching.
*   **#6518 [CLOSED] feat(coding-agent): expose scoped models to extensions**: Adds `pi.getScopedModels()`, a massive quality-of-life update for extension developers allowing them to align subagent tasks with the parent session's model cycle.
*   **#6551 [CLOSED] feat(coding-agent): add deferred extension reload requests**: Introduces `ExtensionContext.requestReload()`, allowing tools and handlers to safely reload the host environment without breaking active streams or compaction.
*   **#6540 [CLOSED] fix(coding-agent): surface provider errors to the LLM via advisories**: Stops silent failures by injecting provider errors (like context overflow or retry exhaustion) back into the LLM context via advisories so the model can attempt self-correction.

### 5. Feature Request Trends
*   **GPT-5.6 Deep Integration**: The overwhelming trend is adapting Pi to OpenAI's newest models, specifically requesting support for the "max" reasoning limit, localized prompt caching (`ttl`), and clean rendering of reasoning summaries.
*   **Advanced Extension APIs**: Developers are building complex, autonomous subagents. There is a strong demand for richer extension contexts, including multi-message attachments, scoped models, usage cost reporting, and lifecycle controls (pause/resume/cancel).
*   **Broadening Provider Support**: The community wants seamless out-of-the-box support for alternative gateways, seen in requests to add LLM Gateway as a core provider and requests to support GitHub Copilot's "auto" pseudo-model for free/student tiers.
*   **Context Window Optimization**: Users want smarter context management, specifically the ability to view how much context extensions/skills consume ahead of time, and better control over auto-compaction triggers.

### 6. Developer Pain Points
*   **CLI/TUI UX Frictions**: Terminal compatibility remains a headache. Windows Terminal's handling of scrollback clearing (`ESC[3J`) and deviations from standard Bash keybindings (like `Ctrl+P` for history) are frustrating power users.
*   **Proxy & Context Misconfigurations**: Developers routing Pi through proxies (like Cloudflare or internal gateways) frequently hit 400 errors because Pi trusts the proxy's (often incorrect) context limits, resulting in negative token math.
*   **Extension State Permanence**: Developers are expressing frustration that custom tools and system prompts configured via CLI flags reset when resuming or continuing a session, breaking workflow automation.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for July 12, 2026.

### 1. Today's Highlights
Qwen Code rolled out a new nightly build (`v0.19.8`) focusing on CLI stability and workflow preservation. The community and core development team are heavily focused on multi-workspace daemon management, Web Shell UI enhancements, and extending Claude Opus 4.x context/token limits. Meanwhile, significant progress was made in fixing token caching, MCP OAuth recovery, and model stream stability.

### 2. Releases
*   **[v0.19.8-nightly.20260711](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.8-nightly.20260711.0ef3a76bd)**
    *   **fix(core):** Prevented the model from accidentally overriding YOLO mode when it autonomously calls `enter_plan_mode` ([PR #6630](https://github.com/QwenLM/qwen-code/pull/6630)).
    *   **feat(cli):** Forwarded the `ask_user` capability, improving interactive agent workflows.

### 3. Hot Issues
*   **[Issue #6378](https://github.com/QwenLM/qwen-code/issues/6378): RFC: Support multiple workspaces in one `qwen serve` daemon** 
    A highly discussed RFC (20 comments) proposing a shift from the `1 daemon = 1 workspace` paradigm to `1 daemon = N workspaces`, allowing better resource management for multi-project developers.
*   **[Issue #6710](https://github.com/QwenLM/qwen-code/issues/6710): Distinguish user-cancelled turns from unexpected interruptions (P1)**
    Addresses a critical session management bug where explicit user cancellations are confused with process crashes during daemon restarts, causing unexpected continuation behaviors.
*   **[Issue #6721](https://github.com/QwenLM/qwen-code/issues/6721): Deferred tool discovery invalidating prompt cache**
    Developers noticed that revealing hidden tools mid-session triggers `setTools()`, breaking the prompt cache prefix and increasing token costs/latency. 
*   **[Issue #6639](https://github.com/QwenLM/qwen-code/issues/6639): MCP servers show offline on HTTP 401**
    Highlights a UX trap where MCP servers using HTTP transport fail to trigger the automatic OAuth recovery flow upon receiving a 401 Unauthorized error.
*   **[Issue #6590](https://github.com/QwenLM/qwen-code/issues/6590): Ctrl+V image paste broken on macOS standalone**
    A packaging oversight where the `@teddyzhu/clipboard` native module is missing from the standalone installation bundle, entirely breaking image pasting on macOS.
*   **[Issue #6713](https://github.com/QwenLM/qwen-code/issues/6713): Microcompaction clears managed memory**
    An architectural quirk where the model's durable managed memory is treated like a normal tool result and gets wiped by context microcompaction, causing the AI to "forget" core directives.
*   **[Issue #6734](https://github.com/QwenLM/qwen-code/issues/6734): Claude Opus 4.6-4.8 `max_tokens` exceeds API limits**
    Qwen Code defaulted to a binary `131072` output token limit instead of Anthropic's strict decimal `128000` limit, causing API rejections for long-running generations.
*   **[Issue #6726](https://github.com/QwenLM/qwen-code/issues/6726): Daemon restart drops Web Shell workspaces**
    Dynamically added workspaces via the Web Shell are not persisted to disk, forcing users to manually re-register them every time the `qwen serve` daemon restarts.
*   **[Issue #6581](https://github.com/QwenLM/qwen-code/issues/6581): JetBrains ACP agent ignores user prompts**
    When using Qwen Code as an agent in IntelliJ IDEA, it only receives bootstrap context and entirely misses the actual user prompt input.
*   **[Issue #6666](https://github.com/QwenLM/qwen-code/issues/6666): Qwen 3.7 max returns `<think>` tags in `content`**
    Inconsistencies in the DashScope API where reasoning data bleeds into the main `content` field instead of utilizing `reasoning_content`, breaking downstream parsing.

### 4. Key PR Progress
*   **[PR #6638](https://github.com/QwenLM/qwen-code/pull/6638): Extension Management V2 for `qwen serve`**
    Introduces additive extension management capabilities, allowing extensions to be installed at the user level while activating via policy across specific hosted workspaces.
*   **[PR #6723](https://github.com/QwenLM/qwen-code/pull/6723): Fix prompt cache missing during tool discovery**
    Solves the token caching issue (#6721) by returning discovered tool schemas as model-visible content rather than mutating the provider-facing function declarations.
*   **[PR #6745](https://github.com/QwenLM/qwen-code/pull/6745): Runtime workspace removal**
    Complements multi-workspace support by adding the ability to dynamically unregister and remove workspaces from a running `qwen serve` daemon.
*   **[PR #6712](https://github.com/QwenLM/qwen-code/pull/6712): Tolerate repeated invalid model streams**
    Increases the retry budget for transient invalid model streams (empty responses) from 2 to 4 attempts, applying linear backoff to prevent immediate hard failures.
*   **[PR #6707](https://github.com/QwenLM/qwen-code/pull/6707): Add `/reload-env` command**
    A major quality-of-life feature allowing developers to hot-reload API keys and `.env` variables without restarting the active CLI session.
*   **[PR #6732](https://github.com/QwenLM/qwen-code/pull/6732): MCP OAuth recovery after HTTP 401**
    Restores OAuth recovery for Streamable HTTP MCP servers by performing a bounded HEAD probe to challenge the 401 and run the interactive authentication flow.
*   **[PR #6096](https://github.com/QwenLM/qwen-code/pull/6096): Add `zvec-grep` search tool**
    Integrates a powerful new first-class tool offering both semantic search (for concepts) and `rg`-style exact/regex search directly within the agent workspace.
*   **[PR #6486](https://github.com/QwenLM/qwen-code/pull/6486): Model toggle hotkey (Ctrl+F)**
    Adds a quick toggle hotkey to switch between the primary model and a configured alternate model (`model.toggleModel`) on the fly.
*   **[PR #6743](https://github.com/QwenLM/qwen-code/issues/6743): Make chat recording failures durable**
    Upgrades the JSONL chat recorder to explicitly handle write rejections, permanently stopping the affected recorder to prevent silent data loss and parent-chain corruption.
*   **[PR #6680](https://github.com/QwenLM/qwen-code/pull/6680): Recover daemon channel sessions after restarts**
    Preserves daemon-managed channel conversations across restarts by separating stable channel routes from live daemon bindings.

### 5. Feature Request Trends
*   **Multi-Workspace & Daemon Management:** A massive push from the community to decouple the daemon from a single workspace. Proposals include unified crash recovery services, cross-workspace session organization, and persistent workspace registration.
*   **Web Shell UI Enhancements:** Strong demand to upgrade the Web Shell composer toolbar to match desktop client standards. Requested additions include workspace selectors, execution context dropdowns, and live Git branch displays.
*   **Interactive CLI Workflows:** Developers want less friction when switching contexts. There are requests for inline model switching (`/model <id> <prompt>`), manual prompt caching via `Ctrl+S`, and quick environment reloads.

### 6. Developer Pain Points
*   **Model API & Context Instability:** Developers are frequently frustrated by upstream API inconsistencies. Issues like Claude Opus token limits failing silently, Qwen 3.7 reasoning tags bleeding into main outputs, and intermittent empty streams causing `InvalidStreamError` disrupt automated agentic flows.
*   **Agent State & Memory Amnesia:** The agent losing its "YOLO" mode or having its managed memory wiped by microcompaction undermines trust in long-running, autonomous sessions.
*   **Packaging & Integration Friction:** Missing native dependencies (like macOS clipboard modules) and IDE integration bugs (JetBrains ACP failing to capture inputs) create a fragmented experience across different operating systems and editors.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest - 2026-07-12

## 1. Today's Highlights
The community focus over the last 24 hours has been heavily centered on **Anthropic API integration stability** and **cross-platform build compatibility**. Key PRs address critical HTTP 400 errors caused by invalid JSON schemas and improper cache token billing, while multiple issues and PRs highlight a strong push to support mobile (*Android/Termux*) and BSD environments. 

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
*(Note: 5 total issues reported in the last 24h are summarized below)*

*   **[#4329 Anthropic API error](https://github.com/Hmbown/CodeWhale/issues/4329)** 
    *Why it matters:* Users are encountering `HTTP 400 Bad Request` errors due to `tool_use` IDs missing subsequent `tool_result` blocks. This breaks agentic workflows relying heavily on tool-calling.
*   **[#4326 Perf: explain and bound RSS after cancelling a 32-worker storm](https://github.com/Hmbown/CodeWhale/issues/4326)**
    *Why it matters:* Maintainer `Hmbown` identified a memory issue where RSS (memory footprint) remains high after cancelling a massive 32-worker PTY operation. This is crucial for maintaining TUI responsiveness during heavy concurrency.
*   **[#4350 Cargo Build in android with termux meets rquickjs error](https://github.com/Hmbown/CodeWhale/issues/4350)**
    *Why it matters:* Users trying to run the TUI directly on Android via Termux are blocked because the `rquickjs` dependency lacks pre-generated bindings for `aarch64-linux-android`. 
*   **[#4345 key 太不友好了，不能放在终端进行吗？](https://github.com/Hmbown/CodeWhale/issues/4345)**
    *Why it matters:* A UX complaint regarding cumbersome API key setup. The user requests a more streamlined, terminal-native way to input and manage API keys.
*   **[#4227 feat: help JayBeest map the CodeWhale tsunami 🌊](https://github.com/Hmbown/CodeWhale/issues/4227)**
    *Why it matters:* A proposal for an automated contributor workflow/skill to help devs sync with the highly active `main` branch (10+ PRs/day) and maintain local build environments effortlessly.

## 4. Key PR Progress
*(Note: 4 total PRs updated in the last 24h are summarized below)*

*   **[PR #4346: fix: sanitize tool input_schema for Anthropic adapter](https://github.com/Hmbown/CodeWhale/pull/4346)**
    *Summary:* Directly resolves the `HTTP 400 Bad Request` from Issue #4329. It sanitizes top-level `oneOf`, `anyOf`, and `allOf` from tool `input_schema` payloads, ensuring Anthropic accepts complex tool definitions.
*   **[PR #4348: fix(tui): bill Anthropic cache-write tokens at published rates (#4318)](https://github.com/Hmbown/CodeWhale/pull/4348)**
    *Summary:* Improves cost tracking accuracy. It stops folding Anthropic `cache_creation_input_tokens` into standard cache-misses and introduces accurate 5-minute write rates (e.g., for `claude-fable-5`) in the TUI's `CurrencyPricing` module.
*   **[PR #4347: i18n: add Korean (ko) locale support](https://github.com/Hmbown/CodeWhale/pull/4347)**
    *Summary:* Expands global accessibility by adding a complete Korean translation (`ko.json`), covering all 752 leaf keys in the TUI.
*   **[PR #4349: Update Cargo.toml to allow build under NetBSD](https://github.com/Hmbown/CodeWhale/pull/4349)**
    *Summary:* Fixes cross-platform compilation issues by allowing the build script to dynamically generate `rquickjs` bindings for NetBSD, FreeBSD, OpenBSD, and DragonFly BSD.

## 5. Feature Request Trends
Based on recent interactions, the community is pushing the project in three main directions:
1.  **Mobile & Edge Computing:** High demand for running the DeepSeek TUI natively on mobile devices, specifically via Android's Termux.
2.  **Frictionless Onboarding & Maintenance:** Requests for automated environment syncing tools to handle the project's rapid release cadence, alongside more native, terminal-friendly API key management UX.
3.  **Accurate Telemetry & Cost Analytics:** As developers chain complex subagents (like the 32-worker storms), there is a strong need for precise memory bounding and accurate, real-time token cost billing for provider-specific features (like Anthropic's cache writes).

## 6. Developer Pain Points
*   **`rquickjs` Compilation Barriers:** The lack of pre-generated bindings for non-standard targets (Android, BSDs) is a recurring headache for developers attempting non-standard builds.
*   **Strict API Schemas (Anthropic):** Anthropic's unforgiving API validation—specifically regarding nested JSON schemas (`oneOf`/`anyOf`) and strict `tool_use` to `tool_result` pairing—frequently breaks runtime workflows.
*   **Memory Management during Cancellation:** When spinning up dozens of concurrent PTY workers, developers notice that memory isn't being garbage collected efficiently post-cancellation, leading to potential bloat.

</details>