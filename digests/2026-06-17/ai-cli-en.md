# AI CLI Tools Community Digest 2026-06-17

> Generated: 2026-06-16 22:35 UTC | Tools covered: 9

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

Here is the cross-tool comparative analysis of the AI developer tools ecosystem based on the June 17, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tooling landscape has matured significantly, shifting from simple terminal-based chat interfaces to sophisticated, multi-agent orchestration ecosystems. Tools are aggressively competing to support complex autonomous workflows, deep IDE integrations, and cross-platform compatibility. However, this rapid pace of innovation is introducing systemic growing pains: developers are universally grappling with runaway token consumption, context preservation during model switches, and fragile terminal rendering. Furthermore, the Model Context Protocol (MCP) has become a foundational standard, though its implementation is currently surfacing critical security, stability, and authorization challenges across the board.

### 2. Activity Comparison
*Note: Data reflects activity and engagement within the 24-hour digest window.*

| Tool | Hot Issues Tracked | PRs Updated | Release Status (Last 24h) | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 10 | **v2.1.179** (Stable) | Stability, macOS CPU leaks, network resiliency |
| **OpenAI Codex** | 10 | 10 | **v0.141.0** (3 Alpha builds) | Rust migration, rate limits, local credential brokering |
| **Gemini CLI** | 10 | 10 | None | Security (MCP OAuth), AST-aware mapping, bug fixing |
| **GitHub Copilot CLI**| 10 | 1 (Spam/Low-quality) | **v1.0.63** (Stable) | Subagent reliability, MCP config, UX improvements |
| **Kimi Code CLI** | 5 | 1 | None | Agent autonomy limits, context compaction |
| **OpenCode** | 10 | 10 | None | Agentic looping, multi-model metadata preservation |
| **Pi** | 10 | 10 | **v0.79.5 / v0.79.6** (Stable) | Provider routing, DeepSeek V4 support, HTTP error surfaces |
| **Qwen Code** | 10 | 10 | **v0.18.1-preview.0** | Multi-agent orchestration, local LLM bridging |
| **DeepSeek TUI (CodeWhale)**| 10 | 8 | **v0.8.61** (Stable/Rebrand) | Architecture refactoring, provider fallbacks |

### 3. Shared Feature Directions
*   **Agentic Automation & Looping:** There is a massive industry push toward self-healing, iterative agents. **OpenCode** (native `/loop` and `/goal`), **Qwen Code** (aligning `/loop` with Claude Code), and **DeepSeek TUI** (mid-turn intervention and YOLO mode stability) are all actively building frameworks for autonomous, long-running task execution without manual re-prompting.
*   **MCP Security & Integration Hardening:** As the Model Context Protocol becomes ubiquitous, tools are scrambling to secure it. **Gemini CLI** is patching SSRF vulnerabilities and atomic OAuth token writes, **Claude Code** is patching sandbox escapes and symlinks, while **Copilot CLI** and **Kimi Code** are fighting bugs related to deferred tool loading and ghosting deleted MCP servers.
*   **Advanced Multi-Model Routing & Fallbacks:** The walled-garden approach is eroding. **Pi**, **DeepSeek TUI**, and **OpenCode** are heavily focused on seamless provider fallback mechanisms, dynamic API key fetching, and ensuring reasoning metadata survives model switches mid-session.
*   **Context Management & Telemetry:** To combat unpredictable token burn (most acutely felt in **OpenAI Codex** and **Claude Code**), tools like **Gemini CLI** and **DeepSeek TUI** are pursuing Abstract Syntax Tree (AST)-aware file reads and agent-facing telemetry to give models self-awareness of context pressure and token budgets.

### 4. Differentiation Analysis
*   **Enterprise Heavyweights vs. Modular Agnostics:** **Claude Code**, **OpenAI Codex**, and **GitHub Copilot CLI** are doubling down on enterprise features (e.g., Codex's local credential broker, Copilot's Enterprise-Managed models). Conversely, tools like **Pi**, **OpenCode**, and **DeepSeek TUI** are differentiating by remaining model-agnostic, focusing on local LLM discovery (OpenCode's mDNS) and bypassing walled-garden restrictions.
*   **Architectural Approaches:** **OpenAI Codex** is undergoing a major底层 refactoring to a Rust-based architecture to improve stability. **Qwen Code** and **DeepSeek TUI** are heavily optimizing for local/self-hosted ecosystems (e.g., vision-to-text bridging for non-multimodal local models). Meanwhile, **Gemini CLI** is prioritizing pure technical precision, evaluating AST tools to optimize token usage.
*   **Target Audiences:** **Copilot CLI** leans toward mainstream enterprise developers (IDE parity, GitHub integration). **Kimi Code** and **Qwen Code** are actively catering to cross-platform bot integrations (QQ Bot, WeChat) and cost-conscious developers facing free-tier limits.

### 5. Community Momentum & Maturity
*   **High Velocity / Mainstream Maturity:** **Claude Code**, **OpenAI Codex**, and **Qwen Code** show the highest raw momentum, pushing multiple releases and managing massive issue/PR queues. However, their communities are highly vocal about systemic friction—specifically unpredictable rate limits and token burn (Codex's 612-comment thread on fast token burning).
*   **Rapid Iteration / Ecosystem Expansion:** **OpenCode** and **Qwen Code** demonstrate explosive feature growth, rapidly porting advanced automation (looping, scheduling) and UI overhauls.
*   **Stabilization Phase:** **GitHub Copilot CLI** shows signs of slower open-source momentum (only 1 low-quality PR in 24 hours), suggesting internalized development or a community bottleneck. **Gemini CLI** and **Pi** are in heavy stabilization phases, prioritizing security audits, bug squashing, and HTTP routing over flashy new features.

### 6. Trend Signals
*   **The "Token Black Box" is a Strategic Risk:** Unpredictable API costs and invisible context windows are eroding developer trust. Tools that provide transparent, real-time telemetry and hard boundaries (like AST-based code reading instead of raw file ingesting) will win enterprise adoption.
*   **Convergence on "Agent Steering":** Developers no longer want "fire-and-forget" agents. The demand for mid-turn intervention, background subagent cancellation (OpenCode), and session looping indicates a shift toward supervised autonomy.
*   **Terminal UI Fragility Remains Unsolved:** Across almost all tools, TUI (Terminal User Interface) rendering remains a massive pain point—from Windows UI deadlocks (DeepSeek TUI) to tmux scroll-back wipes (Claude Code). This signals an industry opportunity for a unified, robust terminal rendering standard for AI outputs.
*   **Local/Open-Source Model Accommodations:** Features like Qwen's Vision-Bridge and OpenCode's LAN discovery highlight a persistent market demand for tools that gracefully handle the quirks (and parameter formatting failures) of self-hosted models.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent community activity.

### 1. Top Skills Ranking
Based on community engagement and developer attention, here are the most impactful Skill-related Pull Requests:

*   **skill-creator & Ecosystem Fixes (Suite of PRs)**: Rather than a single skill, the community has rallied around fixing the official `skill-creator` tool. PRs like [#1298 (Fix run_eval.py recall)](https://github.com/anthropics/skills/pull/1298), [#1099 (Fix Windows crash)](https://github.com/anthropics/skills/pull/1099), and [#1050 (Fix Windows subprocess bugs)](https://github.com/anthropics/skills/pull/1050) dominate recent activity. They aim to make the skill evaluation and optimization loop functional across operating systems. **Status:** All Open.
*   **[PR #514] document-typography**: A next-generation document generation skill that prevents common AI formatting errors like orphan words, widow paragraphs, and numbering misalignment. **Status:** Open.
*   **[PR #486] ODT (OpenDocument Text)**: Introduces comprehensive capabilities for creating, filling, and converting `.odt` and `.ods` files, bringing standardized open-source document handling to Claude. **Status:** Open.
*   **[PR #210] frontend-design Improvements**: A significant overhaul of the existing frontend-design skill to ensure instructions are strictly actionable within a single context window, improving Claude's coding coherence. **Status:** Open.
*   **[PR #83] skill-quality-analyzer & skill-security-analyzer**: Introduces two highly anticipated "meta-skills" designed to evaluate the structural quality and security posture of other community-created skills. **Status:** Open.
*   **[PR #568] ServiceNow Platform Skill**: A massive, enterprise-grade skill covering the entire ServiceNow ecosystem (ITSM, ITOM, SecOps, CSDM, IntegrationHub), showcasing a shift toward complex business platform integrations. **Status:** Open.

### 2. Community Demand Trends
Analysis of open Issues reveals clear clusters of unmet user needs and desired directions for the Skills ecosystem:

*   **Enterprise & Team Distribution (Issue [#228](https://github.com/anthropics/skills/issues/228)):** There is massive demand for org-wide skill sharing. Users want to avoid manual `.skill` file uploads and are asking for shared internal libraries or direct sharing links for Teams/Enterprise accounts.
*   **Trust, Security, & Governance (Issues [#492](https://github.com/anthropics/skills/issues/492), [#1175](https://github.com/anthropics/skills/issues/1175)):** Users are increasingly concerned about trust boundaries. There is a strong demand for robust security patterns, clear visual indicators for "official" vs. "community" skills, and access-control validation within the skills themselves.
*   **Ecosystem Interoperability (Issues [#29](https://github.com/anthropics/skills/issues/29), [#16](https://github.com/anthropics/skills/issues/16)):** Developers are actively requesting ways to bridge skills with other APIs, specifically asking for AWS Bedrock compatibility and the ability to expose Skills via the Model Context Protocol (MCP).
*   **Context Window Optimization (Issue [#1220](https://github.com/anthropics/skills/issues/1220)):** As skills become more complex, users want multi-file preloading and inline bundling to allow Claude to read reference files efficiently without exhausting token limits.

### 3. High-Potential Pending Skills
These PRs represent high-value additions that solve immediate ecosystem problems and are strong candidates for imminent merging:

*   **[PR #541] fix(docx): prevent tracked change w:id collision** ([Link](https://github.com/anthropics/skills/pull/541)): Fixes a critical bug where the DOCX skill corrupts documents by clashing IDs between tracked changes and existing bookmarks. 
*   **[PR #538] fix(pdf): correct case-sensitive file references** ([Link](https://github.com/anthropics/skills/pull/538)): Fixes broken local file references in the PDF skill's SKILL.md file, which currently break the skill on case-sensitive operating systems like Linux.
*   **[PR #361] Detect unquoted YAML special characters** ([Link](https://github.com/anthropics/skills/pull/361)) & **[PR #362] Fix UTF-8 panic** ([Link](https://github.com/anthropics/skills/pull/362)): Both PRs significantly improve the core skill-creator validator. The former stops silent YAML parsing failures, while the latter prevents Rust panics on multi-byte characters.
*   **[PR #509] docs: add CONTRIBUTING.md** ([Link](https://github.com/anthropics/skills/pull/509)): Addresses a major community health gap (Issue #452) by adding standard contribution guidelines, which will streamline future PR approvals.

### 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is for **robust lifecycle management**—specifically, fixing the `skill-creator` validation/evaluation tooling and establishing seamless, secure organizational sharing.

---

Here is the Claude Code community digest for June 17, 2026.

### 1. Today's Highlights
Anthropic shipped Claude Code **v2.1.179**, prioritizing critical stability fixes for mid-stream connection drops and WSL2/Windows Terminal mouse-wheel regressions. Meanwhile, the community was highly active on GitHub, with heavy discussion around severe macOS resource leaks (100% CPU spikes) and batch API script automations running up unintended usage charges.

### 2. Releases
*   **[v2.1.179](https://github.com/anthropics/claude-code/releases/tag/v2.1.179)**
    *   **Network Resiliency:** Fixed mid-stream connection drops. Partial responses are now saved rather than discarded with a raw error, and the UI spinner no longer hangs permanently on "running tool".
    *   **Terminal Fixes:** Resolved a mouse-wheel scrolling regression in WSL2 under Windows Terminal and VS Code.
    *   **Sandboxing:** Patched a configuration issue related to sandbox `denyR` rules.

### 3. Hot Issues
*   **[#18532](https://github.com/anthropics/claude-code/issues/18532) [BUG] Complete Freeze - 100% CPU on macOS:** A highly upvoted issue where Claude Code v2.1.9 hits an infinite loop on the main thread, consuming 100% CPU and ~7GB RAM until force-quit. Users report this as a recurring escalation of underlying memory bugs.
*   **[#15199](https://github.com/anthropics/claude-code/issues/15199) [BUG] CLI output formatting artifacts break copy/paste:** With 85 upvotes, developers are frustrated by 2-space indents and 80-character hard line breaks added to CLI outputs. Manual cleanup is required, ultimately wasting context tokens.
*   **[#25739](https://github.com/anthropics/claude-code/issues/25739) [FEATURE] Portable project memory across machines:** A popular request for multi-device workflows, asking for a standardized way to sync project-specific memory and configurations across different operating systems.
*   **[#68642](https://github.com/anthropics/claude-code/issues/68642) [BUG] Batch API script false completion:** A critical cost-related bug where Claude Code signals the completion of a background batch API script while processes are still running, leading to several hundred dollars in unintended API charges.
*   **[#65514](https://github.com/anthropics/claude-code/issues/65514) [BUG] Pro plan blocked from 1M context:** Users report being locked out of the 1M context window, receiving "usage credits required" errors despite having utilised only ~17% of their Pro plan allocation.
*   **[#68931](https://github.com/anthropics/claude-code/issues/68931) [BUG] Idle session pinned at 100% CPU:** A macOS regression in v2.1.177 causing an event-loop busy-spin (`kevent64`) during complete idle states, severely draining battery and spinning up fans.
*   **[#67289](https://github.com/anthropics/claude-code/issues/67289) TUI alternate-screen breaks tmux scroll-back:** A major workflow disruption for terminal users. The new TUI alternate-screen implementation clears tmux scroll-back history, making it impossible to review previous conversation outputs.
*   **[#47166](https://github.com/anthropics/claude-code/issues/47166) [FEATURE] JetBrains needs some love:** Developers are pleading for a dedicated, native Claude AI Assist interface plugin for IntelliJ, rather than relying on terminal-only workflows.
*   **[#53717](https://github.com/anthropics/claude-code/issues/53717) [BUG] Desktop app session data loss:** A severe Windows data-loss bug where the Desktop app sidebar displays sessions, but all message content is missing post-update because data wasn't persisted to the local JSONL files.
*   **[#68912](https://github.com/anthropics/claude-code/issues/68912) [BUG] Agent team tools not injected:** Following an auto-update to v2.1.178, multi-agent `TeamCreate` tools are silently dropped from the available toolset, breaking complex agentic workflows.

### 4. Key PR Progress
*   **[#68707](https://github.com/anthropics/claude-code/pull/68707) feat(bug-reporter): add `/bug` command:** Introduces a native CLI command allowing users to file GitHub issues directly from their terminal without breaking their workflow.
*   **[#46351](https://github.com/anthropics/claude-code/pull/46351) Enable PowerShell tool on macOS and Linux:** Removes the hard-coded Windows gate, allowing cross-platform use of the PowerShell tool (via env var) on Mac/Linux if `pwsh` is installed.
*   **[#68689](https://github.com/anthropics/claude-code/pull/68689) fix(security-guidance): block symlink escape:** Addresses a security vulnerability by preventing symlink escapes during extensibility config reads.
*   **[#68786](https://github.com/anthropics/claude-code/pull/68786) fix(plugin-dev): avoid shell injection:** Patching a shell injection vector in `test-hook.sh` by switching from embedded strings to stdin redirection.
*   **[#68699](https://github.com/anthropics/claude-code/pull/68699) fix(hookify): Python wrapper & Windows paths:** Adds a Python wrapper and normalizes plugin root paths, increasing stability for Windows hook developers.
*   **[#68785](https://github.com/anthropics/claude-code/pull/68785) fix(plugin-dev): tighten su* glob:** Corrects JSON injection vulnerabilities and tightens globs in example hook scripts to serve as safer reference implementations.
*   **[#68673](https://github.com/anthropics/claude-code/pull/68673) fix(scripts): pagination loop fix:** Optimizes GitHub API script operations by breaking pagination early when a page is not completely full, preventing API rate-limit exhaustion.
*   **[#68702](https://github.com/anthropics/claude-code/pull/68702) fix(ralph-wiggum): guard PROMPT_PARTS:** Fixes an expansion crash (`set -u` compatibility) for users running bash 3.x, which is the default on macOS.
*   **[#68694](https://github.com/anthropics/claude-code/pull/68694) fix(security-guidance): normalize CLAUDE_PLUGIN_ROOT:** Ensures path separators in plugin roots are correctly mapped for Windows environments.
*   **[#68701](https://github.com/anthropics/claude-code/pull/68701) fix(security-guidance): strip CRLF:** Cleans up carriage return line feeds when probing Python versions on Windows, preventing execution errors.

### 5. Feature Request Trends
*   **First-Class IDE Integrations:** Developers want more than just VS Code support. There is a strong push for native JetBrains/IntelliJ plugins ([#47166](https://github.com/anthropics/claude-code/issues/47166)) and a unified `/ide` command for the Desktop app to universally connect to any editor ([#61306](https://github.com/anthropics/claude-code/issues/61306)).
*   **Cross-Device Portability:** Users are frequently working across multiple machines and OS environments. There is a high demand for portable memory files and seamless session transfer capabilities ([#25739](https://github.com/anthropics/claude-code/issues/25739)).
*   **Advanced TUI Controls:** Users are requesting better terminal UX, specifically keyboard shortcuts to copy prompt buffers without using a mouse ([#68935](https://github.com/anthropics/claude-code/issues/68935)), alongside better documentation visibility ([#61916](https://github.com/anthropics/claude-code/issues/61916)).

### 6. Developer Pain Points
*   **Runaway Costs & Rate Limits:** Unintended token usage is a top frustration. Bugs related to background processes running up charges ([#68642](https://github.com/anthropics/claude-code/issues/68642)), false "filesystem full" warnings wasting Opus 4.8 tokens ([#68910](https://github.com/anthropics/claude-code/issues/68910)), and unexpected 1M context API rate limits ([#68928](https://github.com/anthropics/claude-code/issues/68928)) are eroding trust.
*   **Terminal (TUI) Friction:** Developers heavily relying on terminal multiplexers are running into UX-breaking bugs, such as tmux scroll-back history being wiped out ([#67289](https://github.com/anthropics/claude-code/issues/67289)), mouse-wheel inputs triggering command history instead of scrolling ([#12953](https://github.com/anthropics/claude-code/issues/12953)), and accidental prompt clearing via `Ctrl+C` ([#59408](https://github.com/anthropics/claude-code/issues/59408)).
*   **Sandbox & Bash Reliability:** Anthropic's sandbox environment is introducing subtle command mutations. Developers report spurious backslashes added before `!` characters, silently breaking bash commands ([#67735](https://github.com/anthropics/claude-code/issues/67735), [#61121](https://github.com/anthropics/claude-code/issues/61121)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the technical analyst digest for the OpenAI Codex repository.

# OpenAI Codex Community Digest - 2026-06-17

## 1. Today's Highlights
Codex CLI ramps up its Rust-based architecture with three new alpha releases (v0.141.0), focusing heavily on under-the-hood refinements. Community discussions today are largely dominated by frustration over aggressive token consumption and rate-limiting behaviors across both the IDE extension and Desktop App. Meanwhile, the OpenAI engineering team is actively merging sophisticated infrastructure improvements, notably around local credential brokering, MITM proxy configurations, and multi-tool plugin installations.

## 2. Releases
The Codex CLI saw rapid iteration in the last 24 hours with three new Rust alpha builds pushed:
*   **[rust-v0.141.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.3)**
*   **[rust-v0.141.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.2)**
*   **[rust-v0.141.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.141.0-alpha.1)**
*(Note: Specific changelogs were not provided in the data, but the alpha cadence indicates active prep for a stable v0.141.0 release).*

## 3. Hot Issues
1.  **[Issue #14593](https://github.com/openai/codex/issues/14593) - Burning tokens very fast [OPEN]** 
    A massive thread with 612 comments. Users on the VS Code IDE extension report that the model is consuming tokens at an alarming rate, heavily impacting Business tier subscribers.
2.  **[Issue #23794](https://github.com/openai/codex/issues/23794) - No visible context/token usage indicator [CLOSED]** 
    With 169 comments, users expressed heavy frustration after a Desktop App update removed the visible token usage indicator. Closing this issue indicates a fix has likely been prioritized.
3.  **[Issue #28190](https://github.com/openai/codex/issues/28190) - `rg` is blocked by macOS [OPEN]** 
    A highly upvoted CLI bug where Codex's attempts to use `ripgrep` (`rg`) for search operations are being blocked by macOS system privacy/security settings.
4.  **[Issue #24990](https://github.com/openai/codex/issues/24990) - Codex ChatGPT login flow [OPEN]** 
    Users report being caught in an authentication loop where `codex login` forces them to `auth.openai.com/add-phone`, locking paid ChatGPT Plus users out of the CLI.
5.  **[Issue #28507](https://github.com/openai/codex/issues/28507) - Selected model is at capacity [OPEN]** 
    Pro 5x subscribers are reporting persistent downtime and capacity errors when trying to select and use specific models.
6.  **[Issue #26564](https://github.com/openai/codex/issues/26564) - Doesn't work properly after resuming from suspend [CLOSED]** 
    A critical Linux CLI bug where the application enters a broken state when the OS wakes from sleep/suspend. 
7.  **[Issue #21211](https://github.com/openai/codex/issues/21211) - Thread navigation/loading slows [OPEN]** 
    A deep technical bug where unbounded thread metadata and eager large-history hydration are causing severe SQLite bottlenecks and UI lag.
8.  **[Issue #28095](https://github.com/openai/codex/issues/28095) - Archived chats deletion does not work [OPEN]** 
    A UI/UX bug where the "Delete" button for archived chats renders successfully but fails to execute the backend deletion command.
9.  **[Issue #27588](https://github.com/openai/codex/issues/27588) - Stuck in pre-write context compaction loop [OPEN]** 
    Developers note that when working on large projects, Codex gets trapped reading instructions and compacting context without ever writing to files.
10. **[Issue #16911](https://github.com/openai/codex/issues/16911) - Constant ask for MCP Tool approvals [OPEN]** 
    The sandbox environment repeatedly prompts users to approve Model Context Protocol (MCP) tools that have already been approved, disrupting workflow.

## 4. Key PR Progress
1.  **[PR #28593](https://github.com/openai/codex/pull/28593) - Suppress usage warnings with credits**
    Improves TUX/UX by hiding proactive rate-limit warnings if the system detects the user has workspace credits available.
2.  **[PR #28034](https://github.com/openai/codex/pull/28034) - Add local credential broker**
    Introduces a secure credential vaulting system for child processes, keeping real GitHub/OpenAI credentials within a managed network proxy and injecting them only during MITM requests.
3.  **[PR #27640](https://github.com/openai/codex/pull/27640) - Support multi-tool install requests**
    Upgrades the plugin ecosystem by allowing the model to request multiple tool/plugin installations simultaneously via `request_plugin_installs`, rather than sequential single installs.
4.  **[PR #28602](https://github.com/openai/codex/pull/28602) - Force offline standalone web search**
    Adds sticky state tracking; if a connector is used in a thread, subsequent standalone web searches are forced to run with `external_web_access=false` to maintain strict data boundaries.
5.  **[PR #19049](https://github.com/openai/codex/pull/19049) - Opt ChatGPT auth into agent identity**
    Implements agent identity assertion and task-registration primitives using JWT auth, streamlining single-run-task agent workflows.
6.  **[PR #28594](https://github.com/openai/codex/pull/28594) - Fail thread forks on malformed source rollouts**
    Crucial data-integrity fix: ensures `thread/fork` operations hard-fail if the source JSONL record is malformed, preventing silent data loss during cross-host handoffs.
7.  **[PR #28599](https://github.com/openai/codex/pull/28599) - Code-mode: move cell state into library actor**
    Refactors the JavaScript execution cell lifecycle in code-mode into a dedicated asynchronous actor, improving stability.
8.  **[PR #28400](https://github.com/openai/codex/pull/28400) - Generalize plugin suggestion presentation**
    Refactors how Codex suggests plugins/tools to the model, allowing for list-backed and developer-context presentations.
9.  **[PR #26706](https://github.com/openai/codex/pull/26706) - Add system proxy feature config surface**
    Lays the groundwork for native system PAC (Proxy Auto-Configuration) support behind a `respect_system_proxy` feature flag.
10. **[PR #28471](https://github.com/openai/codex/pull/28471) - Test code-mode variable truncation**
    Adds vital regression tests to ensure that nested tool results and code-mode outputs are appropriately truncated before being handed back to the LLM.

## 5. Feature Request Trends
*   **Context Management Exports:** Users are requesting better data portability, notably an option to export entire coding sessions directly from the TUI/CLI ([Issue #13267](https://github.com/openai/codex/issues/13267)).
*   **Voice Transcription for CLI:** Developers want the high-quality OpenAI voice transcription models currently used in the Desktop App to be integrated into the CLI/TUI dictation features ([Issue #14630](https://github.com/openai/codex/issues/14630)).
*   **Better Session/Archive Management:** Users want Archived chats surfaced back into the main UI rather than buried in settings ([Issue #27207](https://github.com/openai/codex/issues/27207)).
*   **Benevolent Limit Resets:** Given recent capacity downtime, there is a strong push for automatic or easily redeemable "benevolent" rate-limit resets for paid tiers ([Issue #28541](https://github.com/openai/codex/issues/28541)).

## 6. Developer Pain Points
*   **Unpredictable Rate Limits & Token Burn:** The most prominent pain point across the ecosystem is the rapid, unexplained depletion of tokens and "capacity" errors, making it difficult for Pro and Enterprise users to rely on Codex for sustained work.
*   **Desktop App Performance Degradation:** macOS and Windows users alike are reporting massive latency regressions. For instance, tasks that previously took 5 minutes are now taking 30-50 minutes ([Issue #28077](https://github.com/openai/codex/issues/28077)), alongside nested git repository bugs spawning thousands of background processes ([Issue #27570](https://github.com/openai/codex/issues/27570)).
*   **"Computer Use" Plugin Instability:** The Computer Use feature remains highly fragile across operating systems, routinely failing to detect bundled plugins or breaking entirely when run inside WSL on Windows.
*   **Update Reliability on Windows:** Auto-updates for the Windows Desktop App frequently fail to relaunch the application or fail cryptographic signature validation, requiring manual user intervention.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 17, 2026.

### 1. Today's Highlights
Security and reliability are the focal points of today's Gemini CLI updates. The community and maintainers are aggressively addressing vulnerabilities in MCP (Model Context Protocol) OAuth flows, path traversal, and workspace trust prompts. Meanwhile, significant architectural evaluations are underway to optimize agent performance, including AST-aware codebase mapping and improvements to auto-memory reliability.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*   **#21409 [p1] Generalist agent hangs:** A critical bug where the generalist agent hangs indefinitely on simple tasks. Users are forced to manually disable sub-agents, completely blocking agentic workflows. ([Link](https://github.com/google-gemini/gemini-cli/issues/21409))
*   **#25166 [p1] Shell execution stuck on "Waiting input":** A high-priority issue where the CLI hangs after executing simple shell commands, incorrectly believing it is awaiting user input. ([Link](https://github.com/google-gemini/gemini-cli/issues/25166))
*   **#26525 [p2] Add deterministic redaction for Auto Memory:** Auto Memory currently risks leaking secrets to the background extraction agent before the model has a chance to redact them, exposing a significant security gap. ([Link](https://github.com/google-gemini/gemini-cli/issues/26525))
*   **#22323 [p1] Subagent recovery hides interruptions:** `codebase_investigator` falsely reports success after hitting `MAX_TURNS`, causing the parent agent to proceed with empty or incomplete context. ([Link](https://github.com/google-gemini/gemini-cli/issues/22323))
*   **#24246 [p2] 400 error with > 128 tools:** Loading extensive toolsets (especially via MCP) triggers API limits. The agent currently lacks intelligent scoping to limit active tools dynamically. ([Link](https://github.com/google-gemini/gemini-cli/issues/24246))
*   **#22745 [p2] Assess AST-aware file reads:** Maintainers are investigating Abstract Syntax Tree (AST) tools to reduce token noise and improve the agent's ability to navigate method bounds accurately. ([Link](https://github.com/google-gemini/gemini-cli/issues/22745))
*   **#21968 [p2] Model ignores custom skills:** Despite explicit definitions, the model rarely triggers custom skills or sub-agents autonomously, requiring manual user intervention. ([Link](https://github.com/google-gemini/gemini-cli/issues/21968))
*   **#22186 [p1] Output hook causes crash:** Custom output hooks (like `get-shit-done`) are crashing the CLI during user summary generation, disrupting complex multi-step executions. ([Link](https://github.com/google-gemini/gemini-cli/issues/22186))
*   **#23571 [p2] Agent creates tmp scripts randomly:** When restricted to shell execution, the agent litters the workspace with temporary edit scripts across random directories, complicating repository management. ([Link](https://github.com/google-gemini/gemini-cli/issues/23571))
*   **#22267 [p2] Browser Agent ignores settings.json:** `maxTurns` and other crucial configurations are completely ignored by the Browser Agent, breaking controlled automation workflows. ([Link](https://github.com/google-gemini/gemini-cli/issues/22267))

### 4. Key PR Progress
*   **#27966 [Security] Enforce case-insensitive path blocklist:** Implements robust protections against prompt injection and directory bypasses for `.git`, `.env`, and `node_modules`. ([Link](https://github.com/google-gemini/gemini-cli/pull/27966))
*   **#27664 [Security] Write MCP OAuth tokens atomically:** Fixes potential token corruption by introducing atomic file renames during OAuth token writes. ([Link](https://github.com/google-gemini/gemini-cli/pull/27664))
*   **#27626 [Security] Block private OAuth metadata URLs:** Adds crucial SSRF protection to MCP OAuth metadata discovery to prevent unauthorized internal network requests. ([Link](https://github.com/google-gemini/gemini-cli/pull/27626))
*   **#27859 [Feature] Native drag-and-drop & image pasting:** Brings visual multimodal parity to the CLI, allowing users to drag images into the terminal or paste directly via `Cmd+V`/`Ctrl+V`. ([Link](https://github.com/google-gemini/gemini-cli/pull/27859))
*   **#27915 [Security] Trust dialog hook disclosure:** Fixes a major UX/security flaw where the workspace-trust dialog displayed the inverse of the hooks scheduled to run. ([Link](https://github.com/google-gemini/gemini-cli/pull/27915))
*   **#27959 [Core] Preserve newlines during truncation:** Fixes a bug where the string truncation utility silently stripped all newlines from multi-line text outputs. ([Link](https://github.com/google-gemini/gemini-cli/pull/27959))
*   **#27964 [MCP] Scope resource resolution:** Prevents malicious or misconfigured MCP servers from shadowing trusted server resources by failing closed when URI collisions occur. ([Link](https://github.com/google-gemini/gemini-cli/pull/27964))
*   **#27760 [Agent] Scope flash model names:** Fixes an issue causing model resolution failures on Vertex AI and Gateway backends by applying correct Flash model naming conventions per auth type. ([Link](https://github.com/google-gemini/gemini-cli/pull/27760))
*   **#27631 [Evals] Add static eval source analyzer:** Introduces a TypeScript AST parser to extract metadata from behavioral evaluation tests, improving internal eval infrastructure. ([Link](https://github.com/google-gemini/gemini-cli/pull/27631))
*   **#27956 [Core] Support GDC air-gapped Service Identity:** Adds support for isolated GDCH environments in the authentication library following a recent `google-auth-library` update. ([Link](https://github.com/google-gemini/gemini-cli/pull/27956))

### 5. Feature Request Trends
*   **Advanced Context & Navigation (AST):** Strong interest in moving beyond basic file reading into AST-aware codebase mapping and searching to reduce token overhead and improve precision (Issues #22745, #22747).
*   **Resilient Autonomous Workflows:** Users want self-healing agents that handle locked states gracefully, such as browser session takeover and lock recovery mechanisms (#22232).
*   **Refined Agent Steering:** Requests for the CLI to possess better "self-awareness" regarding its own mechanics, natively understanding CLI flags and hotkeys without hallucinating (#21432).
*   **Behavioral Guardrails:** Demand for the agent to natively recognize and avoid destructive shell commands (like `git reset --force`) in favor of safer alternatives during complex repository management (#22672).

### 6. Developer Pain Points
*   **Agent Hanging & Instability:** The most disruptive frustration is the CLI becoming unresponsive. Agents hanging indefinitely during simple shell commands or sub-agent delegation (#21409, #25166) forces developers to kill processes and lose progress.
*   **Tool & Context Overload:** As developers hook up more MCP servers, hitting the >128 tools limit causes hard failures (#24246). Developers are frustrated by the lack of dynamic tool-scoping.
*   **Messy Workspaces:** The agent's tendency to generate temporary scripts across random directories requires manual cleanup, breaking smooth Git commit workflows (#23571).
*   **Auto-Memory Fragility:** Background memory extraction is proving to be brittle, suffering from infinite retries on low-signal sessions and silently dropping memory patches due to malformed data (#26522, #26523).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 17, 2026.

### 1. Today's Highlights
The Copilot CLI team rolled out version `v1.0.63`, introducing highly requested quality-of-life updates like alphabetical `--help` sorting, clearer error messaging for blocked images, and a new `deferTools` option for MCP server configurations. Meanwhile, the community has been actively reporting critical bugs in the agent and session management workflows, highlighting recurring pain points around subagent model overrides, MCP tool accessibility, and TUI freezing during session resumes.

### 2. Releases
**v1.0.63 & v1.0.63-0** (Released 2026-06-15)
* **UX Improvements:** Options in `--help` output are now sorted alphabetically. Users can now press `w` in `/diff` to hide whitespace-only changes.
* **Better Error Handling:** Blocked image attachments now provide actionable guidance (e.g., enabling vision via preview features or switching models) instead of throwing generic errors.
* **MCP Configs:** Added a `deferTools` option to MCP server config, allowing specific tools to remain always available even when tool search is enabled.
* **Infrastructure:** Improved the reliability of API requests for OpenAI, Anthropic, and Azure OpenAI. Experimental updates to the `/rewind` command were also included.

### 3. Hot Issues
1. **[Enterprise] Support Enterprise-Managed Custom Models** ([#3730](https://github.com/github/copilot-cli/issues/3730)): Users are highly requesting (👍 4) the ability to use custom, centrally configured AI models from the Copilot Admin dashboard within the CLI, a feature currently limited to VS Code.
2. **[Sessions] Unarchive/Restore Project Sessions** ([#3518](https://github.com/github/copilot-cli/issues/3518)): A heavily requested feature (👍 3) to restore accidentally archived sessions, preventing the loss of complex orchestrator contexts and child session checkpoints.
3. **[Permissions] Authorization Fatigue** ([#1168](https://github/copilot-cli/issues/1168)): A long-standing complaint (👍 2) where the CLI prompts for authorization excessively during a single high-level request, severely interrupting developer workflows.
4. **[Platform-Windows] Fatal App Crashes Under Load** ([#3687](https://github.com/github/copilot-cli/issues/3687)): Windows ARM64 users report hard-aborts (`BEX64` / `0xc0000409`) when memory pressure spikes or multiple terminal tabs restore simultaneously.
5. **[Agents] Subagents Lose MCP Tool Access** ([#3812](https://github.com/github/copilot-cli/issues/3812)): A regression where custom subagents can no longer access MCP tools. The community suspects this stems from the newly introduced deferred loading of MCP tools.
6. **[Agents] Sub-agents Silently Running Different Models** ([#3824](https://github.com/github/copilot-cli/issues/3824)): Sub-agents are frequently executing on different models than the main session model due to agent-type defaults, with no UI surfacing or warning.
7. **[Permissions] `--allow-all` Wedges TUI on Resume** ([#3825](https://github.com/github/copilot-cli/issues/3825)): Launching with `--allow-all` alongside `-i` or `--resume` causes read-permission leaks to the UI dispatcher, freezing the input box entirely.
8. **[MCP] Figma Desktop MCP Fails to Connect** ([#2790](https://github.com/github/copilot-cli/issues/2790)): Configuring Figma MCP as an HTTP server incorrectly registers as SSE, resulting in a 400 status code error.
9. **[Models] Silent Downgrade of "xhigh" Reasoning Effort** ([#3823](https://github.com/github/copilot-cli/issues/3823)): When using models that don't support `xhigh` reasoning (like Claude Opus 4.6), the CLI silently falls back to `medium` instead of clamping to `max`, reducing output quality.
10. **[Sessions] `/update` Breaks Resumed Sessions** ([#3821](https://github.com/github/copilot-cli/issues/3821)): Running `/update` from a resumed session triggers a restart with conflicting `--session-id` and `--resume` flags, causing the CLI to fail.

### 4. Key PR Progress
*Note: Only one Pull Request was updated in the last 24 hours.*
* **kCreate "#"** ([PR #3817](https://github.com/github/copilot-cli/pull/3817)): Currently open, though the PR lacks a descriptive summary and appears to be a low-quality automated or spam submission based on the current metadata. 

### 5. Feature Request Trends
* **Enterprise & Custom AI Configurations:** Strong demand for feature parity with IDEs, specifically regarding the injection of Enterprise-Managed custom models and OpenAI-compatible endpoints ([#3730](https://github.com/github/copilot-cli/issues/3730)).
* **Granular Plugin & Hook Configuration:** Developers are asking for repo-level overrides for `skillDirectories` to make mono-repos manageable ([#3822](https://github.com/github/copilot-cli/issues/3822)), as well as clearer documentation for command hook `matcher` support to trigger post-tool formatters ([#3820](https://github.com/github/copilot-cli/issues/3820)).
* **Session Lifecycle Management:** Users want more robust control over their session history, specifically the ability to restore archived sessions ([#3518](https://github.com/github/copilot-cli/issues/3518)) and cleaner state handling when performing in-session updates ([#3821](https://github.com/github/copilot-cli/issues/3821)).

### 6. Developer Pain Points
* **Subagent Unpredictability:** The agentic workflow is currently suffering from silent breaking changes. Developers are frustrated that subagents operate outside the main context——using different models ([#3824](https://github.com/github/copilot-cli/issues/3824)) and losing access to essential MCP tools ([#3812](https://github.com/github/copilot-cli/issues/3812)).
* **Agent Loop Artifacts:** Canceling operations often leads to corrupted conversational state. For example, "Operation cancelled by user" is being injected back into the LLM as a literal user prompt, causing the agent to hallucinate responses to the system message ([#3826](https://github.com/github/copilot-cli/issues/3826)).
* **Rate Limit Transparency:** Hitting model rate limits is causing friction, primarily because the CLI lacks clarity regarding exact reset times and timezones ([#3819](https://github.com/github/copilot-cli/issues/3819)).
* **TUI & Terminal Fragility:** Developers continue to wrestle with terminal rendering bugs, such as garbled copy-pasting of Unicode/Japanese text in VS Code ([#3813](https://github.com/github/copilot-cli/issues/3813)) and hard crashes on Windows under load ([#3687](https://github.com/github/copilot-cli/issues/3687)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest (2026-06-17)

## 1. Today's Highlights
The Kimi Code CLI community is actively discussing agent orchestration limits and onboarding experiences, with no new official releases shipped in the last 24 hours. A critical bug regarding auto-discovery of deleted MCP servers ([#2457](https://github.com/MoonshotAI/kimi-cli/issues/2457)) and a fresh install authentication failure ([#2456](https://github.com/MoonshotAI/kimi-cli/issues/2456)) are currently the primary focus for v0.15.0 and v1.47 users. Meanwhile, a significant open PR aimed at fixing Chat Completions API tool-call formatting ([#1771](https://github.com/MoonshotAI/kimi-cli/pull/1771)) saw activity today. 

## 2. Releases
**None** - No new releases were published in the last 24 hours.

## 3. Hot Issues
*Here are the most noteworthy issues updated in the last 24 hours:*

*   **[OPEN] [bug] Kimi Code CLI auto-discovers MCP server after user deleted it, causing unfixable 400 errors ([#2457](https://github.com/MoonshotAI/kimi-cli/issues/2457))**
    *Why it matters:* Reported today on v0.15.0 with K2.7 Code, the CLI is un-deleting or re-discovering removed MCP servers. This causes persistent 400 errors that severely break core workflows for Windows users.
*   **[OPEN] Bug: Fresh install reports "LLM not set" with no guidance to run login ([#2456](https://github.com/MoonshotAI/kimi-cli/issues/2456))**
    *Why it matters:* First impressions matter. New users installing via Homebrew (v1.47) are hitting an immediate `LLM not set` error without being prompted to run `kimi login`, creating a blind alley in the onboarding flow.
*   **[OPEN] [bug] Error: [compaction.failed] APIStatusError: 400 The request was rejected because it was considered high risk ([#2402](https://github.com/MoonshotAI/kimi-cli/issues/2402))**
    *Why it matters:* Users running v0.6.0 with Kimi-k2.6 are experiencing broken context compaction due to backend API risk rejections. This disrupts long-running agent sessions.
*   **[OPEN] [enhancement] More Steps per turn By Default ([#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327))**
    *Why it matters:* Users report hitting the `Max number of steps reached: 100` limit while context window usage is still low (~34.5%). The community is pushing for a higher default threshold to allow the agent to finish complex tasks autonomously.
*   **[CLOSED] Feature Request: Option to hide thinking content while using thinking models ([#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632))**
    *Why it matters:* With the rise of models like `kimi-k2-thinking-turbo`, developers want cleaner terminal outputs. This issue highlighted the need to toggle the real-time "Thinking..." spinner and grey italic text without sacrificing reasoning quality.

## 4. Key PR Progress
*   **[OPEN] fix: always stringify tool message content in Chat Completions provider ([#1771](https://github.com/MoonshotAI/kimi-cli/pull/1771))**
    *Summary:* Updated yesterday, this PR addresses a critical 400 Bad Request error when using the OpenAI Chat Completions API standard. It enforces the stringification of `content` for `role: "tool"` messages, specifically fixing edge cases where tools return an array of `ContentPart`s (e.g., system reminders + text output).

## 5. Feature Request Trends
Based on recent issues, the community is heavily leaning into optimizing long-running agentic workflows and UI hygiene:
*   **Unleashing Agent Autonomy:** Developers want fewer manual interventions. There is a strong demand to increase or remove default step limits (like the 100-step cap) when context windows are still underutilized ([#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327)).
*   **Terminal UI De-cluttering:** As thinking models become the default for complex coding, users are requesting better UI controls to hide verbose reasoning text and spinners, keeping the terminal focused purely on code output ([#1632](https://github.com/MoonshotAI/kimi-cli/issues/1632)).

## 6. Developer Pain Points
*   **State & Config Persistence Bugs:** Users are frustrated by the CLI overriding local configurations, notably the ghosting of deleted MCP servers ([#2457](https://github.com/MoonshotAI/kimi-cli/issues/2457)).
*   **Opaque Initialization Errors:** The lack of actionable error messages (such as telling users to run `kimi login` when LLM keys are missing) is causing friction for new adopters ([#2456](https://github.com/MoonshotAI/kimi-cli/issues/2456)).
*   **Context Compaction Failures:** Unexpected backend API rejections during context compaction are halting long coding sessions, leaving developers without a clear workaround ([#2402](https://github.com/MoonshotAI/kimi-cli/issues/2402)).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-06-17

## 1. Today's Highlights
The OpenCode community is actively pushing the boundaries of agentic workflows, with heavy focus on native automation loops and persistent session goals. Model interoperability saw major breakthroughs, particularly in preserving reasoning metadata across model switches and enabling Z.AI's new GLM-5.2. The Desktop App and TUI also received numerous community-contributed quality-of-life improvements, including draggable tabs and better session filtering.

## 2. Releases
*No new official releases in the last 24 hours.*

## 3. Hot Issues
1. **[#27167](https://github.com/anomalyco/opencode/issues/27167) [FEATURE]: Add native session goals with /goal** (👍 87, 💬 50)
   A highly requested feature to add persistent session goals and lifecycle management natively, rather than relying on custom slash commands. 
2. **[#4276](https://github.com/anomalyco/opencode/issues/4276) Is zen/big-pickle glm 4.6?** (💬 28)
   A popular discussion where users are reverse-engineering the behavior of Zen models, suspecting them to be powered by GLM-4.6 due to context window and behavioral similarities.
3. **[#5408](https://github.com/anomalyco/opencode/issues/5408) [FEATURE]: Delayed queue feature** (👍 25, 💬 19)
   Users are requesting a built-in delayed queue to handle repeated Codex requests in a loop while capturing learnings, reducing the need for manual prompt resubmission.
4. **[#2047](https://github.com/anomalyco/opencode/issues/2047) LM Studio Failure to refresh models** (💬 17)
   A persistent local development pain point where adding/removing models in LM Studio doesn't reflect in OpenCode, even after auth cycles.
5. **[#8345](https://github.com/anomalyco/opencode/issues/8345) zsh: illegal hardware instruction opencode** (💬 15)
   A critical macOS bug causing hard crashes on launch for specific hardware architectures, currently blocking affected users from accessing the desktop app.
6. **[#18001](https://github.com/anomalyco/opencode/issues/18001) [FEATURE]: Implement /loop command** (👍 27, 💬 9)
   Echoing the demand for agentic automation, users want a native `/loop` command for iterative task execution without relying on complex natural language prompts.
7. **[#31182](https://github.com/anomalyco/opencode/issues/31182) TUI: /sessions search does not filter results** (💬 9)
   A broken search functionality in the TUI session picker where typing queries fails to filter the displayed sessions.
8. **[#29879](https://github.com/anomalyco/opencode/issues/29879) @ai-sdk/azure Responses API: encrypted content verification fails** (💬 7)
   A deep technical blocker for enterprise users: multi-turn Azure stateless sessions (`store: false`) consistently break after 3-4 tool calls due to encrypted content verification failing.
9. **[#32444](https://github.com/anomalyco/opencode/issues/32444) GLM-5.2 thinking-effort variants (High/Max) not exposed** (👍 5, 💬 2)
   Users discovered a blanket exclusion in OpenCode's provider transform logic that prevents access to GLM-5.2's advanced reasoning tiers.
10. **[#31972](https://github.com/anomalyco/opencode/issues/31972) New Layout and Designs cannot switch Plan/Build** (💬 3)
    A UI regression introduced by the new desktop layout flag, which breaks the Plan/Build mode toggle (both UI and `Ctrl+.` shortcut).

## 4. Key PR Progress
1. **[#13321](https://github.com/anomalyco/opencode/pull/13321) fix: robust subagent completion propagation**
   Fixes a severe hang where parent sessions would freeze indefinitely if a subagent completed without properly resolving the prompt.
2. **[#23104](https://github.com/anomalyco/opencode/pull/23104) fix(opencode): preserve reasoning providerMetadata across model switches**
   Resolves an issue where switching models stripped `providerMetadata` from Anthropic thinking blocks, breaking session continuity.
3. **[#27554](https://github.com/anomalyco/opencode/pull/27554) feat(opencode): local LAN provider discovery**
   Introduces mDNS-based auto-discovery for local OpenAI-compatible servers (like LM Studio/Ollama), heavily smoothing local development setup.
4. **[#32604](https://github.com/anomalyco/opencode/pull/32604) fix(session): preserve reasoning part type on model switch**
   Mitigates mass prefix cache invalidation and long delays when switching models mid-session by maintaining reasoning data structures.
5. **[#32593](https://github.com/anomalyco/opencode/pull/32593) fix(provider): expose GLM-5.2 thinking-effort variants**
   Directly resolves Issue #32444, removing the hardcoded `glm` exclusion to enable High/Max thinking efforts for Z.AI models.
6. **[#32425](https://github.com/anomalyco/opencode/pull/32425) feat(opencode): interrupt a running subagent**
   Adds the foundational primitives to steer, cancel, or abort running background subagents—a massive upgrade for agentic control.
7. **[#32584](https://github.com/anomalyco/opencode/pull/32584) feat(github): resume prior session on github run retries**
   Prevents OpenCode from starting from scratch on `opencode github run` retries, saving massive amounts of token usage by resuming state.
8. **[#31834](https://github.com/anomalyco/opencode/pull/31834) feat(acp): emit plan session updates from todowrite tool calls**
   Improves ACP (Agent Communication Protocol) compatibility by rendering plans in OpenCode exactly as they appear in Claude.
9. **[#32590](https://github.com/anomalyco/opencode/pull/32590) feat(app): add draggable titlebar tabs**
   A great UX enhancement allowing users to drag-and-drop reorder desktop titlebar tabs, with state persisted globally.
10. **[#32592](https://github.com/anomalyco/opencode/pull/32592) fix(opencode): send system context as structured messages on OpenAI OAuth path**
    Fixes a message formatting issue on the OpenAI OAuth/Codex path where system context was being improperly flattened.

## 5. Feature Request Trends
* **Agentic Automation & Looping:** There is a massive community push for automated iterative execution. Issues requesting native session goals (`/goal`), delayed queues, and looping mechanisms (`/loop`) indicate users want OpenCode to handle repetitive, self-correcting workflows autonomously.
* **Advanced UI Control & Layouts:** Developers want more command over their workspace. Requests for swappable left/right panels, draggable tabs, and better TUI session list filtering are highly prevalent.
* **Granular Tiered Pricing Models:** Users frequently hit the "Go" monthly cap and find Zen pay-as-you-go difficult to budget. A mid-tier ($20) Pro plan is heavily requested to bridge the gap.

## 6. Developer Pain Points
* **Cross-Model Context Loss:** Switching between models mid-session is currently fraught with issues, ranging from stripped reasoning metadata to massive prefix cache invalidations.
* **Stateless Multi-Turn Failures:** When using enterprise APIs (Azure/OpenAI) with `store: false`, encrypted reasoning content fails to verify after 3-4 turns, regularly breaking long-running agentic flows.
* **Windows Environment Instability:** Windows developers are experiencing severe friction, ranging from broken `Expand-Archive` PowerShell modules in Bun-compiled binaries to `@` file mentions failing entirely and terminal mouse-reporting getting stuck after force-killing the TUI.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community for June 17, 2026.

### 1. Today's Highlights
Pi v0.79.5 and v0.79.6 were released, introducing highly anticipated provider-scoped API key environments and critical fixes for HTTP dispatching and DeepSeek V4 compatibility. The community was highly active in squashing TUI bugs, improving terminal compatibility (Kitty, Warp, Windows Terminal), and resolving CLI hanging issues caused by MCP servers. Notable progress was also made in standardizing error surfacing across third-party LLM gateway providers.

### 2. Releases
*   **[v0.79.6](https://github.com/earendil-works/pi/releases/tag/v0.79.6)**: Fixed the HTTP dispatcher to respect deliberate `fetch` overrides instead of forcing `undici`. Also patched OpenCode Go DeepSeek V4 requests to correctly send the `thinking: { type: "disabled" }` compatibility parameter.
*   **[v0.79.5](https://github.com/earendil-works/pi/releases/tag/v0.79.5)**: Introduced **Provider-scoped API key environments**. `auth.json` API key entries can now define `env` overrides for Cloudflare, Azure OpenAI, Google Vertex, Bedrock, proxy settings, and more without altering the user's shell environment. 

### 3. Hot Issues
1.  **[#4945](https://github.com/earendil-works/pi/issues/4945) - OpenAI Codex Reliability Issues**: The TUI occasionally gets stuck on "Working..." when using `gpt-5.5`, requiring an abort. This highly upvoted issue remains in progress as the team investigates connection reliability.
2.  **[#5763](https://github.com/earendil-works/pi/issues/5763) - Gateway errors unreadable**: Providers currently swallow HTTP error bodies when responses fail schema validation, making gateway/proxy errors (like 403s) impossible to debug.
3.  **[#5822](https://github.com/earendil-works/pi/issues/5822) - Moonshot/Kimi schema rejections**: Kimi models return 400 errors due to `allOf` conflicts and missing property types in Pi's tool schemas, breaking tool usage entirely.
4.  **[#5571](https://github.com/earendil-works/pi/issues/5571) - CLI hangs on unresponsive stdin**: `pi -p` hangs indefinitely in non-TTY pipes when provider credentials are missing, rather than failing fast. 
5.  **[#5687](https://github.com/earendil-works/pi/issues/5687) - Commands hang on MCP servers**: `pi list` and `pi update` never exit if an installed extension runs a long-lived MCP server, creating frustrating CLI deadlocks.
6.  **[#5816](https://github.com/earendil-works/pi/issues/5816) - Tool 'search' not found**: In v0.79.4, the agent repeatedly attempts to call a missing `search` tool during refactoring tasks, breaking core coding workflows.
7.  **[#5372](https://github.com/earendil-works/pi/issues/5372) - Custom OAuth callbacks**: Developers are requesting the ability to override Pi's default OAuth callback HTML to integrate the agent into custom external UIs.
8.  **[#5810](https://github.com/earendil-works/pi/issues/5810) - RPC Session entries**: A request to expose `get_entries` and `get_tree` read-only RPC commands to allow external tools to drive Pi and read state programmatically.
9.  **[#5407](https://github.com/earendil-works/pi/issues/5407) - Kitty terminal double inputs**: Double backspace/enter registration on Kitty terminal makes typing difficult for Linux developers.
10. **[#5556](https://github.com/earendil-works/pi/issues/5556) - Session memory bloat**: `buildSessionInfo()` still retains full transcript text in memory during listing, causing performance overhead.

### 4. Key PR Progress
1.  **[#5807](https://github.com/earendil-works/pi/pull/5807) - Provider-scoped env overrides**: Implements the v0.79.5 feature allowing `auth.json` to securely provide proxy and cloud provider configs scoped directly to API keys.
2.  **[#5820](https://github.com/earendil-works/pi/pull/5820) - Preserve raw HTTP errors**: Fixes issue #5763 by extracting and surfacing raw HTTP status and body text for non-schema errors across all providers.
3.  **[#5803](https://github.com/earendil-works/pi/pull/5803) - Reject malformed OpenAI tool calls**: Cleans up OpenAI-compatible streamed tool calls that finish without IDs or function names, preventing them from breaking session history.
4.  **[#5809](https://github.com/earendil-works/pi/pull/5809) - Token/sec metrics**: Adds `durationMs` and `timeToFirstTokenMs` to the Usage interface, allowing TUI extensions to display throughput metrics.
5.  **[#5801](https://github.com/earendil-works/pi/pull/5801) - Nixify Pi**: Adds `nix flake` packaging for reproducible builds and seamless installation on NixOS environments.
6.  **[#5798](https://github.com/earendil-works/pi/pull/5798) - Vercel AI Gateway Attribution**: Adds `http-referer` and `x-title` headers required for routing tracking and attribution through the Vercel AI Gateway.
7.  **[#5812](https://github.com/earendil-works/pi/pull/5812) - Markdown table TUI fix**: Protects pipe (`|`) characters inside inline code blocks from being parsed as column delimiters in the TUI markdown renderer.
8.  **[#5789](https://github.com/earendil-works/pi/pull/5789) - Cursor & prompt history fix**: Restores proper boundary behavior when pressing the Up arrow on the first line of input without accidentally triggering prompt history browsing.
9.  **[#5645](https://github.com/earendil-works/pi/issues/5645) - Fix package hanging**: Proposes a fix for the CLI deadlocks (issue #5687) ensuring the real CLI process exits even if extensions leave active handles open.
10. **[#5796](https://github.com/earendil-works/pi/pull/5796) - TS target bumped to ES2024**: Modernizes the codebase by upgrading the TypeScript target and utilizing native `Promise.withResolvers()` over hand-rolled implementations.

### 5. Feature Request Trends
*   **Advanced Provider Configurations**: High demand for supporting complex gateway setups (Cloudflare, Vercel, Azure) directly within Pi's auth and settings layers (Issues #5728, #5790, #5761).
*   **Programmatic & RPC Control**: Developers are building tools on top of Pi and want deeper API integration, requesting read-only RPC endpoints (`get_entries`, `get_tree`) and customizable OAuth UI flows (Issues #5810, #5372).
*   **Modern Model Compatibility**: Frequent requests to quickly adapt Pi's tool schemas and parameter flags to meet the strict API requirements of newly released models like DeepSeek V4, Kimi K2.7, and Gemini 3.5 (Issues #5818, #5822, #5761).

### 6. Developer Pain Points
*   **Provider Error Masking**: Developers are extremely frustrated by providers swallowing raw HTTP error bodies, which makes debugging network, proxy, and authentication failures a guessing game.
*   **CLI/TUI Deadlocks & Hanging**: Multiple reports highlight the agent hanging during stdin pipe issues or CLI commands hanging indefinitely due to lingering MCP server handles.
*   **Encoding & Terminal Compatibility**: Non-UTF8 file edits (CP-1252) breaking legacy Windows codebases, alongside visual glitching in modern terminals (Warp, Kitty, Windows Terminal), remain major thorns in the side of daily users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for June 17, 2026.

### 1. Today's Highlights
Qwen Code continues to push boundaries in multi-agent orchestration and local LLM compatibility with the release of **v0.18.1-preview.0** and a new nightly build. The community is highly active around advanced workflow automation (aligning features with Claude Code) and extending Qwen's ecosystem with new channel adapters like QQ Bot. However, developers are experiencing acute friction with recent auto-update mechanisms on older Linux systems and security false positives on Windows.

### 2. Releases
*   **[v0.18.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.18.1-preview.0)** & **Nightly (a68b2e1e7)**
    *   **Context handling:** Added warnings for oversized context instructions ([PR #5073](https://github.com/QwenLM/qwen-code/pull/5073)).
    *   **Documentation:** Fixed stale defaults, CLI syntax drift, and tool naming conventions.

### 3. Hot Issues
1.  **[Issue #3203](https://github.com/QwenLM/qwen-code/issues/3203): Qwen OAuth Free Tier Policy Adjustment** 
    *   *Why it matters:* A highly debated issue (136 comments) regarding the sudden reduction of the free API tier from 1,000 to 100 requests/day, and its complete phase-out. This is causing significant disruption for developers relying on the free tier for testing.
2.  **[Issue #5206](https://github.com/QwenLM/qwen-code/issues/5206): Auto-update failure on older glibc (P2)**
    *   *Why it matters:* Updating from 0.18.0 to 0.18.1 on systems like CentOS 7 silently migrates npm installs to a standalone installer requiring newer glibc versions, completely breaking the CLI.
3.  **[Issue #5055](https://github.com/QwenLM/qwen-code/issues/5055): VSCode Extension flagged as Trojan (P1)**
    *   *Why it matters:* The Windows `.vsix` package for the IDE companion is being flagged as `Trojan:JS/ShaiWorm.DBA!MTB` by antivirus software, blocking adoption and raising security alarms.
4.  **[Issue #5180](https://github.com/QwenLM/qwen-code/issues/5180): Multi-agent core crashes mid-task (P2)**
    *   *Why it matters:* When using a main session as a project manager dispatching subagents, tasks crash halfway through. This exposes stability issues in long-running (12h+) multi-agent workflows.
5.  **[Issue #5201](https://github.com/QwenLM/qwen-code/issues/5201): Add QQ Bot Channel Adapter**
    *   *Why it matters:* Showcases strong community desire to expand Qwen Code into cross-platform messaging and DevOps bots beyond the existing Telegram/WeChat/DingTalk integrations.
6.  **[Issue #4615](https://github.com/QwenLM/qwen-code/issues/4615): Project-scoped .mcp.json with pending approval**
    *   *Why it matters:* As MCP (Model Context Protocol) usage grows, developers are requesting strict, project-level security boundaries requiring explicit approval before connecting to MCP servers.
7.  **[Issue #5124](https://github.com/QwenLM/qwen-code/issues/5124): Track /loop alignment work**
    *   *Why it matters:* A roadmap-defining issue to align Qwen Code's `/loop` command with Claude Code's self-paced background automation and scheduling primitives.
8.  **[Issue #5177](https://github.com/QwenLM/qwen-code/issues/5177): exit_plan_mode fails with empty plan (P3)**
    *   *Why it matters:* Models occasionally hallucinate empty plan parameters, causing wasted retry turns and breaking out of coding-plan modes unexpectedly.
9.  **[Issue #5160](https://github.com/QwenLM/qwen-code/issues/5160): Discontinued OAuth model lingers in /model list (P2)**
    *   *Why it matters:* UX clutter where the `/model` command shows deprecated Qwen OAuth models even when the user is authenticated via a different provider.
10. **[Issue #5176](https://github.com/QwenLM/qwen-code/issues/5176): Limit parallel sub-agents**
    *   *Why it matters:* Crucial for local LLM users who lack the hardware to run multiple agents concurrently; requests a queueing mechanism for sub-agent execution.

### 4. Key PR Progress
1.  **[PR #5197](https://github.com/QwenLM/qwen-code/pull/5197): feat(loop): wire prompt-only /loop to self-paced wakeups**
    *   Implements step 2 of the `/loop` alignment, allowing the model to schedule future task continuations dynamically rather than relying on fixed cron intervals.
2.  **[PR #5207](https://github.com/QwenLM/qwen-code/pull/5207): fix(cli): keep sudo-required npm installs on npm**
    *   Directly addresses Issue #5206 by preventing the silent migration to the standalone installer when `sudo` is detected, fixing the glibc crash on older Linux hosts.
3.  **[PR #5202](https://github.com/QwenLM/qwen-code/pull/5202): feat(channel): add QQ Bot adapter**
    *   A fully-featured PR adding QQ Bot WebSocket Gateway support to Qwen Code's messaging suite.
4.  **[PR #5126](https://github.com/QwenLM/qwen-code/pull/5126): feat(vision-bridge): transcribe images to text**
    *   A major usability enhancement that allows text-only local LLMs to process images by quietly routing the image to a multimodal model, then passing the text transcription back.
5.  **[PR #5167](https://github.com/QwenLM/qwen-code/pull/5167): fix(cli): hide unconfigured discontinued OAuth model**
    *   Cleans up the `/model` interactive picker by hiding deprecated entries for users on alternative auth providers.
6.  **[PR #4850](https://github.com/QwenLM/qwen-code/pull/4850): feat(extensions): interactive multi-tab manager**
    *   Overhauls the `/extensions` command into a rich UI with Installed, Discover, and Sources tabs for easier MCP and plugin management.
7.  **[PR #4793](https://github.com/QwenLM/qwen-code/pull/4793): fix(core): coerce non-string tool params**
    *   Critical for the local LLM ecosystem. Forces mistyped tool parameters (e.g., stringified JSON) into the correct format so self-hosted models (vLLM, LMStudio) don't fail tool executions.
8.  **[PR #5141](https://github.com/QwenLM/qwen-code/pull/5141): fix(core): Track supported sed edits in file history**
    *   Improves safety by parsing safe `sed -i` commands as standard edits, allowing them to be tracked in file history and previewed as diffs before writing.
9.  **[PR #5196](https://github.com/QwenLM/qwen-code/pull/5196): fix(permissions): block /dev/tcp and /dev/udp redirects**
    *   patches a significant shell security vector where bash network pseudo-devices could be used to open arbitrary TCP/UDP sockets disguised as file I/O.
10. **[PR #5002](https://github.com/QwenLM/qwen-code/pull/5002): refactor(serve): unify session title**
    *   Technical debt cleanup, unifying `title` and `displayName` across the daemon API to ensure AI-generated session names survive daemon restarts.

### 5. Feature Request Trends
*   **Deep Claude-Code Feature Parity:** A dominant trend is porting advanced automation features from Anthropic's ecosystem, specifically self-paced `/loop` wakeups, dynamic background workflows, and `terminalSequence` hooks.
*   **Local & Self-Hosted LLM Accommodations:** Heavy demand for features tailored to local hardware, such as sub-agent concurrency limits, vision-to-text bridging, and robust error-handling for malformed JSON/parameters from open-source models.
*   **Ecosystem & Channel Expansion:** Continued interest in using Qwen Code as a cross-platform bot backend, evidenced by the push for a QQ Bot adapter and enhanced extension/MCP management UI.
*   **Granular Workflow Controls:** Developers want finer control over agent execution, including better `/clear` flags, multi-agent queueing, and localized i18n for web-shells.

### 6. Developer Pain Points
*   **Auto-Update Instability:** The 0.18.0 → 0.18.1 update cycle severely broke environments with older glibc (CentOS 7) due to unexpected installer migrations, causing runtime crashes.
*   **Multi-Agent Stability:** Long-running, multi-tier agent sessions (12+ hours) are highly prone to crashing mid-task, consuming massive context windows without completing jobs.
*   **Security & Friction:** Windows users are frustrated by antivirus false positives blocking IDE installations. Meanwhile, CLI users report poor UX where deprecated models and stubborn session markers refuse to clear out.
*   **OAuth Policy Shock:** The abrupt reduction of the free API tier is a major roadblock for hobbyists and developers prototyping agentic workflows without enterprise budgets.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for CodeWhale (formerly DeepSeek TUI) for June 17, 2026.

### 1. Today's Highlights
CodeWhale (previously DeepSeek TUI) officially solidifies its v0.8.61 rebrand, emphasizing that legacy `deepseek-tui` packages are deprecated. The community is highly focused on extending agent context windows, preventing TUI freezing during multi-agent orchestration, and building a data-driven model/provider registry to replace hardcoded lists. Meanwhile, Linux build dependencies and dynamic API key fetching have emerged as immediate developer pain points.

### 2. Releases
*   **[v0.8.61](https://github.com/Hmbown/CodeWhale/releases)**: Marks the canonical transition to the **CodeWhale** name across the project, CLI, and npm packages. The legacy `deepseek-tui` package is officially deprecated. Users migrating from v0.8.x legacy names are directed to follow `docs/REBRAND.md`. 

### 3. Hot Issues
1.  **[Issue #2487](https://github.com/Hmbown/CodeWhale/issues/2487): Frequent error: Turn stalled in YOLO mode** - A critical bug where `yolo` operations freeze without a completion signal. Users are unable to resume operations even with `continue`, blocking automated workflows.
2.  **[Issue #1679](https://github.com/Hmbown/CodeWhale/issues/1679): SSE multi-agent parallel timeout & UI corruption on Windows** - Executing 4 parallel agents for script review causes a 45s timeout and UI breakage, forcing a downgrade to serial execution. Highlights persistent Windows-specific TUI rendering bugs.
3.  **[Issue #2574](https://github.com/Hmbown/CodeWhale/issues/2574): Provider fallback chain request** - Users are requesting native support for auto-switching providers (`fallback_providers`) in `config.toml` when encountering 401, 429, or 5xx API errors, preventing workflow interruptions.
4.  **[Issue #3004](https://github.com/Hmbown/CodeWhale/issues/3004): Dynamic API key execution** - A highly requested security enhancement to allow fetching `api_key` dynamically via shell scripts (e.g., from KeePassXC) instead of hardcoding them in plain text within `.env` or `config.toml`.
5.  **[Issue #2666](https://github.com/Hmbown/CodeWhale/issues/2666): Telemetry for agent token context** - Agents lack visibility into resource usage (token budget, cost, context pressure) during long-running tasks, leading to silent failures. Exposing this telemetry to the agent harness is heavily requested.
6.  **[Issue #3268](https://github.com/Hmbown/CodeWhale/issues/3268): Ubuntu 24.04 LTS installation failure** - `cargo install` fails on a fresh Ubuntu setup, pointing to missing documentation around necessary Linux build-time dependencies. 
7.  **[Issue #2629](https://github.com/Hmbown/CodeWhale/issues/2629): 401 Auth errors with SiliconFlow & Tencent Cloud** - Standard OpenAI-compatible endpoint configurations are failing with `401 invalid api key` on specific regional providers, suggesting issues with base URL configurations or auth headers.
8.  **[Issue #3240](https://github.com/Hmbown/CodeWhale/issues/3240): Legacy `.deepseek` directory creation** - Despite the rebrand, the runtime still spawns a `.deepseek` config directory alongside `.codewhale` on Windows, creating confusion and clutter.
9.  **[Issue #3264](https://github.com/Hmbown/CodeWhale/issues/3264): Restrict skill scanning paths** - Users want to limit skill scanning strictly to `~/.codewhale/skills/` to prevent the agent from accidentally indexing irrelevant repository files or global directories.
10. **[Issue #874](https://github.com/Hmbown/CodeWhale/issues/874): No mid-turn intervention in Agent mode** - When executing multi-step todos, user inputs are queued but ignored until the entire turn finishes. Users are asking for granular, mid-turn intervention capabilities.

### 4. Key PR Progress
1.  **[PR #3005](https://github.com/Hmbown/CodeWhale/pull/3005): Data-driven Provider Registry** - A massive refactor that extracts provider metadata into a single static registry, eliminating ~100 hand-maintained match arms across crates. *(Closed/Merged)*
2.  **[PR #2933](https://github.com/Hmbown/CodeWhale/pull/2933): Hippocampal Memory v2** - Introduces a sophisticated cross-session memory layer featuring namespaces, rollback capabilities, and a background daemon. *(Open)*
3.  **[PR #3269](https://github.com/Hmbown/CodeWhale/pull/3269): Hotbar Slash Commands** - Upgrades the TUI hotbar, allowing users to bind and execute existing slash commands (like `slash.mode` or `slash.task`) directly as UI actions. *(Open)*
4.  **[PR #3267](https://github.com/Hmbown/CodeWhale/pull/3267): Inline Paste Truncation** - Fixes a UX regression where pasting large texts converted them into uneditable `@file` mentions. Large pastes now stay inline with truncation and auto-expand. *(Closed/Merged)*
5.  **[PR #3270](https://github.com/Hmbown/CodeWhale/pull/3270): Linux Build Deps Docs** - Updates `cargo install` documentation to explicitly require `libdbus-1-dev` and `pkg-config`, fixing installation failures on bare Ubuntu instances. *(Open)*
6.  **[PR #3236](https://github.com/Hmbown/CodeWhale/pull/3236): DeepInfra Provider Support** - Adds native integration for the DeepInfra cloud provider, resolving missing runtime and TOML alias wirings. *(Closed/Merged)*
7.  **[PR #3271](https://github.com/Hmbown/CodeWhale/pull/3271): Ponytail Personality Integration** - Adds references to the "Ponytail" agent personality framework in project instructions, pending official cross-listing. *(Open)*
8.  **[PR #2998](https://github.com/Hmbown/CodeWhale/pull/2998): Tailwind CSS 4.3.1 Bump** - Standard dependency update bumping the web UI's Tailwind CSS from v3.x to v4.x. *(Open)*

### 5. Feature Request Trends
*   **Agent Telemetry & Control:** Strong demand for giving agents self-awareness regarding token limits and API costs ([#2666](https://github.com/Hmbown/CodeWhale/issues/2666)), alongside user-facing controls to pause or inject prompts mid-turn ([#874](https://github.com/Hmbown/CodeWhale/issues/874)).
*   **Resilient API Configurations:** Users want auto-fallback mechanisms for downed APIs ([#2574](https://github.com/Hmbown/CodeWhale/issues/2574)) and dynamic, script-based secret execution ([#3004](https://github.com/Hmbown/CodeWhale/issues/3004)) to build more robust enterprise setups.
*   **Registry & Protocol Adapters:** Moving away from hardcoded lists to dynamic, API-hydrated registries for models ([Issue #3071](https://github.com/Hmbown/CodeWhale/issues/3071)) and listing CodeWhale on the `agentclientprotocol/registry` for seamless IDE integrations like Zed ([Issue #3192](https://github.com/Hmbown/CodeWhale/issues/3192)).

### 6. Developer Pain Points
*   **Windows Instability:** Multi-agent SSE streaming and TUI polling continue to cause UI deadlocks and 45-second timeouts specifically on Windows 11 ([#1679](https://github.com/Hmbown/CodeWhale/issues/1679), [#1812](https://github.com/Hmbown/CodeWhale/issues/1812)).
*   **Reasoning Model Breakages:** DeepSeek-family endpoints and OpenAI-compatible models suffer from HTTP 400 errors due to mishandled `reasoning_content` replays and silently dropped "thinking" parameters ([#3016](https://github.com/Hmbown/CodeWhale/issues/3016), [#3024](https://github.com/Hmbown/CodeWhale/issues/3024)).
*   **Frictionless Onboarding:** Developers are frustrated by missing build prerequisites on Linux ([#3268](https://github.com/Hmbown/CodeWhale/issues/3268)) and legacy folders being created despite the rebrand ([#3240](https://github.com/Hmbown/CodeWhale/issues/3240)).

</details>