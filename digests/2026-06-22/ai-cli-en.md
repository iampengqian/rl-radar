# AI CLI Tools Community Digest 2026-06-22

> Generated: 2026-06-21 22:22 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the June 22, 2026 community digests.

### 1. Ecosystem Overview
As of mid-2026, the AI CLI tooling ecosystem has matured from simple prompt-based chat interfaces into highly complex, agentic execution environments. The current development landscape is characterized by a massive architectural shift toward local and remote sub-agent orchestration, requiring intricate context and state management. Developers and technical decision-makers are now demanding enterprise-grade reliability, cost observability, and seamless IDE integrations, pushing maintainers to solve advanced systems engineering challenges like memory compaction, sandbox security, and local hardware compatibility. Consequently, the focus has pivoted from raw model capability to the resilience, safety, and usability of the agent harness itself.

### 2. Activity Comparison
*Note: Activity counts are based on explicit issues and PRs documented in the June 22 digests.*

| Tool | Issues Highlighted | Key PRs Highlighted | Release Status | Primary Development Focus |
| :--- | :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 10 | 10 | 3 Alpha Releases (`v0.142.0-alpha.10`) | Rust core refactoring, thread state optimization, fixing critical Windows regressions. |
| **OpenCode** | 10 | 10 | 1 Stable Release (`v1.17.9`) | Agent execution stability, TUI crash fixes, provider integration (Copilot/Zen). |
| **Gemini CLI** | 10 | 9 | None | Subagent reliability, MCP schema normalization, VS Code companion resource leaks. |
| **CodeWhale (DeepSeek)**| 10 | 10 | 1 Major Release (`v0.8.63`) | Architectural refactoring, rebranding, sandbox fixes, subagent budget controls. |
| **Qwen Code** | 10 | 10 | 1 Stable Release (`v0.18.5`) | CI/CD pipeline robustness, UI/TUI rendering, path resolution, background agents. |
| **Claude Code** | 10 | 2 | None | Fixing binary distribution regressions, unattended automation, UI queuing. |
| **GitHub Copilot CLI** | 7 | 1 (Spam/Invalid) | None | Plugin scoping, cost telemetry, terminal state management. |
| **Pi** | 10 | 5 (PRs) / 5 (Issues)| None | Local LLM support, compaction triggers, API stream hanging fixes. |
| **Kimi Code CLI** | 1 (Closed) | 0 | None | Administrative cleanup; heads-down on internal iteration. |

### 3. Shared Feature Directions
*   **Advanced Context Compaction & Management:** As tasks grow longer, brittle context windows are a universal pain point. **Pi** is implementing safe between-turn checkpoints for compaction; **OpenAI Codex** is battling aggressive compaction that interrupts workflows; **CodeWhale** is prioritizing smart compaction to avoid context overflow; and **GitHub Copilot CLI** users are requesting visual indicators for silent context compaction.
*   **Frictionless Background Automation (Sub-agents):** Communities want reliable, asynchronous task delegation. **Qwen Code** is building revivable background sub-agents; **CodeWhale** is adding token budget regulators for sub-agents; **Gemini CLI** and **OpenCode** are urgently fixing bugs where subagents hang indefinitely or falsely report success.
*   **Robust CI/CD & Headless Execution:** Developers want to use these tools in unattended pipelines. **Claude Code** is pushing for better print mode (`-p`) and hook alignment in CI; **Qwen Code** is fixing loop-detection silent exits to ensure failing CI workflows actually fail; and **OpenCode** is adding durable session failure events for better telemetry.
*   **Granular Telemetry & Cost Observability:** With API costs soaring, enterprises demand transparency. **GitHub Copilot CLI** and **Claude Code** users are requesting OpenTelemetry integrations and strict tracking for runaway token consumption, such as OpenAI Codex’s current 10-20x rate-limit cost bug.

### 4. Differentiation Analysis
*   **Architecture & Tech Stack:** **OpenAI Codex** and **CodeWhale** are heavily refactoring their cores in Rust to optimize SQLite routing and dismantle monolithic "god objects," respectively. Meanwhile, **Claude Code** and **OpenCode** rely heavily on JS/Bun, leading to different challenges like native AVX CPU baseline support and TUI memory leaks.
*   **Target Environments:** **Codex** is deeply integrating its CLI with a Desktop app and ChatGPT ecosystem, aiming for seamless session hand-offs. **Gemini CLI** is heavily focused on VS Code IDE integration and API security (SSRF guards, schema validation). **Claude Code** targets power users and unattended CI environments, though it is currently held back by OS compatibility issues (Termux/older hardware).
*   **Provider Ecosystems:** **Pi** and **OpenCode** differentiate as model-agnostic hubs, focusing on bridging tools for local LLMs (vLLM, Ollama) and managing cross-provider API idiosyncrasies. In contrast, tools like **Codex**, **Claude Code**, and **Gemini CLI** are building tightly coupled, optimized ecosystems around their proprietary frontier models.

### 5. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** **OpenAI Codex** shipped three rapid-fire alpha releases showing intense momentum behind the scenes, though it is currently creating friction with severe billing and resource-consumption regressions. **CodeWhale** shows massive momentum with a massive 52-commit release train, shifting its focus to modularity and visual verification loops. **Qwen Code** and **OpenCode** are showing mature, steady iteration, heavily focused on testing, CI pipelines, and developer QoL.
*   **Stabilization Phase (Mature):** **Claude Code** and **Gemini CLI** are spending their current cycles hardening security, fixing memory leaks, and patching silent data corruption rather than releasing flashy new features. 
*   **Quiet/Early Stage:** **Kimi Code CLI** is in a lull, likely preparing for a major architectural shift, while **Pi** has a highly active but tightly focused community centered around local LLM enthusiasts.

### 6. Trend Signals
*   **The "Context Window" is the New Memory Leak:** Just as memory leaks plagued early software, "context bloat" is now the primary system failure point. Autonomous agents that mistakenly stream raw text instead of tool calls (CodeWhale, OpenCode) or trigger loops (Qwen) rapidly exhaust context limits. Expect a strong industry pivot toward AST-aware codebase mapping (already proposed by Gemini CLI) and deterministic context redaction.
*   **Regulatory Shift to "Secure-by-Default" Sandboxing:** Agent autonomy is forcing architectural changes in security. Communities are demanding native blocking of destructive commands (Gemini CLI), and maintainers are actively patching SSRF vulnerabilities (Gemini CLI) and fixing overly rigid sandbox policies that block standard Git writes (CodeWhale).
*   **Hardware & OS Compatibility Fractures:** The rush to bundle binaries (like Claude Code's shift to native Bun) is alienating developers on older hardware lacking AVX support or running niche environments like Termux. Tooling must account for glibc/AVX fallbacks to maintain broad developer adoption.
*   **Shift from "Chat" to "Live Steering":** Developers no longer want to submit a prompt and wait. There is a strong trend toward real-time intervention—editing queued messages, queuing inputs in VS Code without interrupting generation (Claude Code), and halting/steering mid-execution (OpenCode).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent community activity. 

*(Note: As GitHub comment data was flagged as `undefined` in the provided dataset, this report ranks "most-discussed" and "high-potential" activity by community engagement, cross-referencing PRs with related high-traffic Issues, upvotes, and update recency).*

### 1. Top Skills Ranking
While many PRs are submitted daily, the most impactful community attention is centered around document generation, enterprise frameworks, and meta-tooling:

*   **[document-typography](https://github.com/anthropics/skills/pull/514)** (PR #514 | OPEN): Introduces strict typographic quality control to prevent orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. Fills a massive gap in document generation quality.
*   **[ODT Skill](https://github.com/anthropics/skills/pull/486)** (PR #486 | OPEN): Brings native OpenDocument Format (.odt, .ods) creation, template filling, and ODT-to-HTML parsing to Claude Code. Highly requested for users in open-source and enterprise environments relying on ISO-standard formats.
*   **[frontend-design improvements](https://github.com/anthropics/skills/pull/210)** (PR #210 | OPEN): A significant overhaul of the existing frontend-design skill. It focuses on making instructions actionable and coherent within a single context window, steering Claude's behavior much more effectively.
*   **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** (PR #181 | OPEN): Integrates SAP's open-source tabular foundation model for predictive analytics, unlocking native business data intelligence directly within Claude Code workflows.
*   **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (PR #83 | OPEN): Introduces vital "meta-skills" designed to evaluate other Claude Skills across five dimensions of quality, plus security vulnerability detection.

### 2. Community Demand Trends
Based on the most active Issues, the community is demanding systemic improvements in four key areas:

*   **Enterprise Lifecycle Management**: Users want native support for large enterprise platforms. There is high demand for skills handling **SharePoint Online (SPO)** ([Issue #1175](https://github.com/anthropics/skills/issues/1175)) and comprehensive **ServiceNow** ([PR #568](https://github.com/anthropics/skills/pull/568)) workflows, including secure permission handling.
*   **Persistent Agent Memory**: To support long-running agentic tasks, users are rallying behind memory management skills like **shodh-memory** ([PR #154](https://github.com/anthropics/skills/pull/154)) and **compact-memory** ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) to maintain state without exhausting the context window.
*   **Automated Testing & Governance**: Significant appetite exists for a **testing-patterns** skill ([PR #723](https://github.com/anthropics/skills/pull/723)) covering the Testing Trophy model, as well as broader **agent-governance** patterns for threat detection and audit trails ([Issue #412](https://github.com/anthropics/skills/issues/412)).
*   **Developer Experience & OS Stability**: The community is frustrated by cross-platform issues. A massive wave of issues highlights the need for **Windows compatibility** in skill-creator scripts ([Issue #1061](https://github.com/anthropics/skills/issues/1061)) and better organizational sharing mechanisms ([Issue #228](https://github.com/anthropics/skills/issues/228)).

### 3. High-Potential Pending Skills
These open PRs directly address high-volume bugs and community pain points, making them highly likely to merge soon:

*   **Fix `skill-creator` eval loops & Windows compatibility**: Currently, `run_eval.py` reports 0% recall across the board, meaning description-optimization loops are optimizing against noise. [PR #1298](https://github.com/anthropics/skills/pull/1298), [PR #1099](https://github.com/anthropics/skills/pull/1099), and [PR #362](https://github.com/anthropics/skills/pull/362) comprehensively fix subprocess failures, Windows encoding panics, and artifact installation.
*   **Case-Sensitivity Fixes for PDF Skill**: [PR #538](https://github.com/anthropics/skills/pull/538) corrects 8 case-sensitive file references in the PDF skill (`REFERENCE.md` → `reference.md`). This is a critical fix for developers working on case-sensitive file systems (e.g., Linux/Ubuntu).
*   **YAML Pre-Parse Validation**: [PR #539](https://github.com/anthropics/skills/pull/539) and [PR #361](https://github.com/anthropics/skills/pull/361) add validation to catch unquoted YAML special characters in descriptions, preventing silent parsing failures when creating new skills.
*   **DOCX Tracked Changes Fix**: [PR #541](https://github.com/anthropics/skills/pull/541) prevents document corruption when the DOCX skill adds tracked changes to documents with existing bookmarks (fixing OOXML shared ID collisions).
*   **Community Contribution Guidelines**: [PR #509](https://github.com/anthropics/skills/pull/509) adds a `CONTRIBUTING.md` to standardize the contribution process, a necessary step as the repository's community health score is currently critically low. 

### 4. Skills Ecosystem Insight
The community's most concentrated demand is shifting away from simple prompt formats toward **enterprise system interoperability (SharePoint, SAP), robust persistent memory frameworks, and reliable cross-platform developer tooling for skill evaluation.**

---

Here is the Claude Code community digest for June 22, 2026.

### 1. Today's Highlights
The past 24 hours saw no new official releases, but the community has been highly active in reporting critical regressions related to recent packaging changes—specifically the transition to native Bun binaries. Windows and macOS power users are facing severe installation and environment crashes, while there is a growing consensus on the need for better unattended automation (print mode) controls and improved cost transparency for background agents. 

### 2. Releases
**None** — No new versions were published in the last 24 hours. The community is actively discussing issues impacting the latest stable branches (v2.1.183 to V2.1.185).

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[#50270](https://github.com/anthropics/claude-code/issues/50270) [bug] Native binary breaks Termux/Android support:** A major regression introduced in v2.1.113 replaced the JS entry point with a native glibc binary. This completely breaks Claude Code on Android/Termux environments (51 👍 / 51 comments). Users are frustrated by the lack of a JS fallback.
*   **[#53940](https://github.com/anthropics/claude-code/issues/53940) [bug] Cowork tools silently truncate files:** A deterministic bug where Cowork Edit/Write tools truncate files due to a byte-conservation buffer cap. This is causing silent data loss across all file sizes on Windows.
*   **[#18192](https://github.com/anthropics/claude-code/issues/18192) [feature] Recursive skill discovery:** A highly requested feature (57 👍) asking Claude Code to scan subdirectories in `~/.claude/skills/` rather than just the top-level folder, making complex skill management easier.
*   **[#55520](https://github.com/anthropics/claude-code/issues/55520) [bug] npm install ships Bun binary on Linux:** The shift to shipping a bundled Bun binary has broken the standard npm workaround for non-AVX VPS environments, leaving older hardware without an upgrade path.
*   **[#33153](https://github.com/anthropics/claude-code/issues/33153) [bug] Bundled Bun lacks AVX baseline support:** Continuing the Bun binary concerns, macOS users without AVX CPU support are experiencing persistent crashes. 
*   **[#17968](https://github.com/anthropics/claude-code/issues/17968) [feature] Support JSONC format for settings:** With 85 👍, this is the most upvoted issue of the cycle. Users desperately want `settings.jsonc` support so they can use standard comments to document their configurations.
*   **[#64624](https://github.com/anthropics/claude-code/issues/64624) [feature] Real-time steering:** Users want the ability to queue or inject messages mid-generation without needing to press Escape and discard the current in-progress work.
*   **[#30677](https://github.com/anthropics/claude-code/issues/30677) [feature] Queued message sending in VS Code:** Currently, typing while Claude Code is generating a response in VS Code interrupts the task. Developers are requesting a standard queue mechanism.
*   **[#69904](https://github.com/anthropics/claude-code/issues/69904) [bug] Max 20x limit exhausted in 3 hours:** A concerning cost/usage bug where the weekly limit is triggered and capped before the standard 5-hour session limit even applies. 
*   **[#69927](https://github.com/anthropics/claude-code/issues/69927) [bug] UTF-16 surrogate bricks sessions:** A lone UTF-16 surrogate (often from an emoji in truncated tool output) in a long-running CLI session causes an unrecoverable `400 ... no low surrogate` error on every subsequent turn.

### 4. Key PR Progress
Only two PRs saw activity in the last 24 hours:

*   **[#69916](https://github.com/anthropics/claude-code/pull/69916) fix: print error message before silent exit in edit-issue-labels.sh:** Fixes a silent crash in the `Claude Issue Triage` GitHub workflow when the script is called without label arguments.
*   **[#4943](https://github.com/anthropics/claude-code/pull/4943) feat: add shell completions (bash, zsh, fish):** A community submission that provides static completion scripts for tab autocompletion. The author notes that native integrated completions (e.g., `claude completion $SHELL`) would be the ideal long-term solution.

### 5. Feature Request Trends
*   **Smarter TUI & IDE Interactions:** Developers want basic queuing mechanisms. Instead of interrupting generations or forcing hard resets, users want to seamlessly queue instructions in VS Code (#30677) or steer generations in real-time (#64624).
*   **Configuration Flexibility:** There is a strong push to move away from rigid JSON formats. Supporting JSONC (#17968) and enabling nested directories for skills (#18192) are top priorities for developers managing complex environments.
*   **Accessibility Enhancements:** Requests to make Claude Code more accessible, such as built-in text-to-speech to read responses aloud for hands-free or low-vision workflows (#58429).
*   **Robust Unattended Automation:** Better parity for headless execution. Developers using `claude -p` are asking for strict control-plane alignment so that hooks, permissions, and MCP servers behave predictably in CI/CD pipelines (#59108).

### 6. Developer Pain Points
*   **Bundled Binary & Compatibility Nightmares:** The transition from a Node/JS entry point to a bundled native Bun binary has alienated users on older hardware (lacking AVX support), Linux VPS environments, and Android/Termux setups (#50270, #55520, #33153). 
*   **Windows Updater Reliability:** Windows native users are experiencing split-brain environment issues where `claude update` claims success but fails to replace the binary (#69881), or installs a plain Bun runtime instead of Claude Code (#69884).
*   **Unpredictable Token Consumption:** Heavy MCP users and Max plan subscribers are reporting inexplicably fast depletion of weekly limits (#69904) and token waste due to Claude autonomously spawning background agents without confirmation (#69915, #69931).
*   **Silent Data Loss/Corruption:** Whether through the Cowork tools silently truncating files via buffer caps (#53940) or isolated UTF-16 characters permanently bricking long-running autonomous sessions (#69927), developers are increasingly frustrated by silent, non-erroring failures.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for June 22, 2026.

### 1. Today's Highlights
OpenAI has shipped three new Rust core alphas (up to `v0.142.0-alpha.10`) alongside massive under-the-hood PRs aimed at optimizing thread listing, resuming, and state management. The community is currently sounding the alarm over severe regressions on Windows—ranging from broken sandbox executions to runaway SQLite I/O—and a major `gpt-5.5` rate-limiting regression that is draining Plus budgets in just 2-3 prompts.

### 2. Releases
*   **[rust-v0.142.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.142.0-alpha.10), [-alpha.8, & [-alpha.9](https://github.com/openai/codex/releases)**
    *   Three rapid-fire alpha releases for the Rust core were published in the last 24 hours, paving the way for improved thread state management, transport-neutral runtimes, and filesystem optimizations visible in the latest PRs.

### 3. Hot Issues
1.  **[Issue #28879](https://github.com/openai/codex/issues/28879): `gpt-5.5` rate-limit cost per token jumped ~10-20x`** 🔥
    *   *Why it matters:* Plus users report that since June 16, their 5-hour Codex budget drains in just 2-3 prompts. With 181 upvotes and 93 comments, this is the most urgent community issue right now, hinting at a backend token-counting or billing regression.
2.  **[Issue #28224](https://github.com/openai/codex/issues/28224): SQLite feedback logs writing ~640 TB/year`**
    *   *Why it matters:* The Codex CLI is aggressively writing to local SQLite log files, threatening user SSD endurance. This severe performance bug is highly concerning for daily CLI drivers.
3.  **[Issue #28971](https://github.com/openai/codex/issues/28971): Codex caught in a loop with Bitdefender PowerShell block`**
    *   *Why it matters:* Windows users running Bitdefender are stuck in an infinite loop where Codex repeatedly tries to execute a blocked PowerShell command, severely degrading the desktop app experience.
4.  **[Issue #29178](https://github.com/openai/codex/issues/29178): Windows Desktop regression breaks `apply_patch` with global proxy env vars`**
    *   *Why it matters:* A critical regression in Desktop `26.616.4196.0` that breaks filesystem tool calls for proxy users. Developers are forced to manually roll back to older app versions to get work done.
5.  **[Issue #21128](https://github.com/openai/codex/issues/21128): Desktop silently hides older project conversations`**
    *   *Why it matters:* The Desktop app only shows a global "recent 50" window, causing older project-specific histories to vanish. This breaks the app's utility as a long-term working memory.
6.  **[Issue #26867](https://github.com/openai/codex/issues/26867): GitHub PR review stuck on deactivated workspace`**
    *   *Why it matters:* Migrating from a Business to a Personal Pro account breaks Codex Cloud's GitHub integration. The bot continuously fails PR reviews citing a "deactivated workspace," even after re-authentication.
7.  **[Issue #9046](https://github.com/openai/codex/issues/9046): Context window crashes thread immediately`**
    *   *Why it matters:* Despite minimal prompts, users are hitting unrecoverable "ran out of room in context window" errors, leaving threads dead and requiring a complete restart.
8.  **[Issue #29193](https://github.com/openai/codex/issues/29193): `node_repl` MCP server fails on Windows Desktop`**
    *   *Why it matters:* JavaScript execution tool calls fail before code even runs due to a missing `sandboxPolicy` field in the MCP metadata, stalling JS developers on Windows.
9.  **[Issue #29330](https://github.com/openai/codex/issues/29330): Task interrupted by automatic compaction on every request`**
    *   *Why it matters:* An aggressive bug where the context compactor triggers on literally every single request, effectively halting mid-model generation and ruining agentic workflows.
10. **[Issue #29362](https://github.com/openai/codex/issues/29362): GPT-5.5 selected, but GPT-5.4 usage logged`**
    *   *Why it matters:* Users are suspecting silent model fallbacks. Selecting `gpt-5.5` is secretly burning `gpt-5.4` quotas, confusing billing and degrading output quality.

### 4. Key PR Progress
1.  **[PR #29357](https://github.com/openai/codex/pull/29357): Speed up thread resume without deferred repair**
    *   Massively improves local `thread/resume` times by parsing rollout files on blocking workers and preventing duplicate history reads.
2.  **[PR #29355](https://github.com/openai/codex/pull/29355): Speed up thread list with lightweight SQLite rows**
    *   Routes `thread/list` requests through an optimized SQLite projection, batching filesystem repairs so the app-server only reads necessary fields.
3.  **[PR #29290](https://github.com/openai/codex/pull/29290): Code-mode: Decouple cell creation from observation**
    *   Refactors session runtimes so that cell creation is acknowledged independently, ensuring canceled cells don't leak pending session-store writes.
4.  **[PR #29358](https://github.com/openai/codex/pull/29358): Allow codex sandbox to consume MCP sandbox state**
    *   Fixes sandbox integration by allowing the `codex sandbox` to natively parse JSON metadata from `node_repl` and other MCP servers without manual translation.
5.  **[PR #29301](https://github.com/openai/codex/pull/29301): Updated plan mode prompt**
    *   Refines prompting to dynamically render implementation plans during follow-ups, allowing users to seamlessly exit plan mode into execution.
6.  **[PR #29287](https://github.com/openai/codex/pull/29287): Code-mode: Make session shutdown authoritative**
    *   Replaces best-effort polling with a hierarchical cancellation token to make code-mode shutdowns non-blocking and completely authoritative.
7.  **[PR #29113](https://github.com/openai/codex/pull/29113): Apply sandbox intent inside remote exec servers**
    *   Enables remote execution servers to interpret and enforce sandbox intents using their own OS-level paths, improving security for remote agents.
8.  **[PR #29109](https://github.com/openai/codex/pull/29109): Avoid redundant rollout reads for history**
    *   Eliminates an inefficient path where `thread/read` builds a summary from a file only to parse the exact same file again for complete history.
9.  **[PR #29035](https://github.com/openai/codex/pull/29035): Optimize filesystem thread listing**
    *   Prevents the CLI from parsing thousands of useless summaries in directories with many subagent rollouts during fallback listing.
10. **[PR #28801](https://github.com/openai/codex/pull/28801): Improve thread list and resume RPC paths**
    *   A major foundational PR (now superseded by #29355 / #29357) that originally introduced SQLite-based routing to stop the app from materializing full threads just to list them.

### 5. Feature Request Trends
*   **Deeper ChatGPT & IDE Ecosystem Integration:** Users want a seamless bridge between the terminal and desktop. Highly requested features include integrated IDE diff approvals ([Issue #2998](https://github.com/openai/codex/issues/2998)) and the ability to pass sessions back and forth between ChatGPT and Codex CLI ([Issue #2153](https://github.com/openai/codex/issues/2153)).
*   **Better Local Storage & Project Management:** Developers are asking for more control over their data, specifically the ability to define custom local storage paths for Desktop chats ([Issue #24534](https://github.com/openai/codex/issues/24534)) and to stop the UI from hiding older project threads ([Issue #21128](https://github.com/openai/codex/issues/21128)).
*   **Advanced Workflow & Plan Mode Tools:** Inspired by competitor tools, users want a private, live plan file for Plan Mode so they can track agentic task progression invisibly without cluttering the prompt context ([Issue #19125](https://github.com/openai/codex/issues/19125)).

### 6. Developer Pain Points
*   **Windows Instability:** Windows users are bearing the brunt of recent bugs, fighting everything from flashing PowerShell background windows ([Issue #26613](https://github.com/openai/codex/issues/26613)) and proxy-related patch failures to sandbox regressions that break core CLI execution ([Issue #26158](https://github.com/openai/codex/issues/26158)).
*   **Runaway Resource Consumption:** Codex is currently too heavy on local system resources. Whether it's writing terabytes of data to SQLite logs ([Issue #28224](https://github.com/openai/codex/issues/28224)) or generating excessive I/O stalls ([Issue #29177](https://github.com/openai/codex/issues/29177)), the desktop app is dragging down developer machines.
*   **Fragile Context Management:** Developers are highly frustrated by brittle context windows. Frequent compactions interrupt mid-task execution ([Issue #29330](https://github.com/openai/codex/issues/29330)), and premature "out of room" errors are locking up threads, causing devs to lose active working states ([Issue #28920](https://github.com/openai/codex/issues/28920)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the community digest for the Gemini CLI project based on the last 24 hours of GitHub activity.

# Gemini CLI Community Digest — June 22, 2026

## 1. Today's Highlights
The Gemini CLI community is heavily focused on agent reliability, with multiple high-priority issues addressing subagent hangs, silent failures, and permission bypasses. Significant progress was made in hardening Model Context Protocol (MCP) integrations and the VS Code IDE companion, evidenced by a flurry of open PRs resolving OAuth refreshes, image MIME sniffing, and resource leaks. Additionally, maintainers are actively investigating advanced architectural improvements, specifically AST-aware codebase mapping and deterministic memory redaction.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues
Here are the top issues driving community discussion:

*   **Generalist agent hangs during simple tasks** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)): A high-priority bug (👍 8) where the generalist subagent hangs indefinitely on basic operations like folder creation. Users report having to explicitly disable subagents to get work done.
*   **False success reporting on MAX_TURNS** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)): The `codebase_investigator` subagent reports `status: "success"` even when it hits the maximum turn limit before completing any analysis, creating silent debugging traps.
*   **Subagents ignoring permissions since v0.33.0** ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)): Users report that agents are running without requested permissions, with subagents unexpectedly activating even when explicitly disabled in global configurations.
*   **Security flaw in Auto Memory logging** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)): Auto Memory currently sends local transcripts to the extraction model before redacting secrets. Maintainers are pushing for deterministic, pre-transmission redaction.
*   **Auto Memory stuck in infinite retry loops** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)): Low-signal sessions are repeatedly surfaced by Auto Memory because the extraction agent fails to mark them as processed if it skips reading them.
*   **Shell execution gets stuck awaiting input** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): The CLI repeatedly hangs on simple, non-interactive shell commands, permanently displaying "Awaiting user input" after the process finishes.
*   **Browser Agent overrides ignored** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)): The `browser_agent` is completely ignoring `maxTurns` and other configurations set in `settings.json`.
*   **400 Error triggered by >128 Tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246): When users equip more than 128 tools, the CLI throws a 400 API error, highlighting a need for dynamic tool scoping.
*   **Subagents and Skills rarely triggered autonomously** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968): The agent model exhibits a reluctance to invoke custom skills (e.g., git/gradle) on its own, requiring explicit user prompting.
*   **Epic: AST-aware file reads and codebase mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): Maintainers are assessing AST-aware tools to allow single-call method reads, reducing token noise and navigation turns.

## 4. Key PR Progress
Recent pull requests show a strong focus on strict schema validation, extension reliability, and IDE integration:

*   **[PR #27888] Normalize MCP tool schemas** ([#27888](https://github.com/google-gemini/gemini-cli/pull/27888)): Fixes API rejection by Vertex AI strict mode by ensuring MCP tool input schemas automatically inject a root `type: "object"`.
*   **[PR #27889] Fix MCP OAuth refresh path** ([#27889](https://github.com/google-gemini/gemini-cli/pull/27889)): Resolves authentication failures for auto-discovered MCP servers lacking a static `oauth.clientId` by correctly passing stored client metadata.
*   **[PR #27744] SSRF guard DNS resolution** ([#27744](https://github.com/google-gemini/gemini-cli/pull/27744)): Patches a Server-Side Request Forgery (SSRF) bypass vulnerability where wildcard DNS services (like `nip.io`) could trick the `isPrivateIp()` check. 
*   **[PR #27878] Sniff MCP image MIME types** ([#27878](https://github.com/google-gemini/gemini-cli/pull/27878)): Fixes HTTP 400 errors with Figma integrations by locally sniffing base64 data to correctly identify WebP images instead of defaulting to `image/png`.
*   **[PR #28068] Guard message inspectors** ([#28068](https://github.com/google-gemini/gemini-cli/pull/28068)): Fixes a JavaScript quirk where empty `parts` arrays were vacuously evaluated as valid function calls, leading to model confusion.
*   **[PR #28059] Harden extension loading** ([#28059](https://github.com/google-gemini/gemini-cli/pull/28059)): Prevents the entire extension system from crashing when a workspace `.env` file is unreadable due to sandbox permission restrictions.
*   **[PR #27886] Respect `.gitignore` in session context** ([#27886](https://github.com/google-gemini/gemini-cli/pull/27886)): Ensures the `<session_context>` directory tree honors `.gitignore` and `.geminiignore` rules to prevent leaking secret files into the prompt context.
*   **[PR #27885] Fix VS Code resource leak** ([#27885](https://github.com/google-gemini/gemini-cli/pull/27885)): Adds missing disposables to the VS Code IDE companion extension to prevent memory leaks during activation.
*   **[PR #27887] Fix custom theme borders** ([#27887](https://github.com/google-gemini/gemini-cli/pull/27887)): Corrects an issue where custom terminal theme borders were overwritten when terminals reported their background color via OSC 11.
*   **[PR #28071] Spawn check for ripgrep** ([#28071](https://github.com/google-gemini/gemini-cli/pull/28071)): Adds pre-registration checks for `ripgrep` to prevent the agent from attempting searches when the dependency is missing.

## 5. Feature Request Trends
Analysis of recent issues highlights several emerging architectural requests:
*   **AST-Aware Context Navigation:** Moving beyond raw text reads to AST-aware file mapping, allowing the agent to precisely locate method bounds and reduce token waste.
*   **Advanced Subagent Trajectories:** Users want deep visibility into subagent decision-making, including accessing subagent trajectories via `/chat share` and capturing local subagent context in `/bug` reports.
*   **Destructive Command Guardrails:** Native implementations to recognize and block dangerous system operations (like `git reset --force` or raw DB modifications).
*   **Self-Aware Agent Mechanics:** Enhancements to allow the CLI to serve as its own expert guide, accurately instructing users on hotkeys and necessary CLI flags. 

## 6. Developer Pain Points
Developers are currently expressing frustration over the reliability of the agent execution loop. A primary pain point is the CLI hanging indefinitely during shell execution—particularly when subagents attempt to run simple commands but fail to exit cleanly. Additionally, users are encountering "silent failures," where the agent falsely reports task success despite hitting turn limits or failing to execute underlying scripts. Finally, the strict limitations of the underlying API are causing friction; developers adding numerous MCP tools are hitting API-breaking errors, indicating a strong need for the CLI to dynamically manage and limit tool scopes automatically.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 22, 2026.

### 1. Today's Highlights
The community activity over the last 24 hours heavily focused on refining the plugin ecosystem and improving observability, with significant discourse around project-level plugin scoping and the need for cost-tracking metrics via OpenTelemetry. Several critical bugs were addressed or reported concerning terminal handling on Windows ARM64, silent context compaction, and unaligned sandbox documentation. 

### 2. Releases
No new releases were recorded in the past 24 hours.

### 3. Hot Issues
*   **[Project-Level Plugin Scoping]** [Issue #1665](github/copilot-cli Issue #1665) - A highly requested feature (17 upvotes) asking for Copilot CLI plugins to be scoped to specific repositories or projects rather than globally per-user. This remains a major architectural request for team-based workflows.
*   **[Windows ARM64 Crashes]** [Issue #3687](github/copilot-cli Issue #3687) - A critical bug where `copilot.exe` hard-aborts with a fatal-app-exit (BEX64) under memory pressure or when restoring multiple terminal tabs. This highlights ongoing stability issues on Windows ARM64 architectures.
*   **[Missing Hook Visibility]** [Issue #3871](github/copilot-cli Issue #3871) - Closed. Users reported the inability to list installed hooks (either bundled or individual). Unlike MCP servers which have a dedicated list command, hooks currently lack any enumerable CLI surface.
*   **[Misrepresented Sandbox Capabilities]** [Issue #3861](github/copilot-cli Issue #3861) - Open. The documentation and UI currently present local sandbox capabilities (like per-host network filtering) as fully functional when they are not. Users are requesting that docs align with actual runtime behavior.
*   **[Silent Context Compaction]** [Issue #3867](github/copilot-cli Issue #3867) - Closed. Users expressed frustration over the lack of a UI indicator for context window usage. Silent context compaction causes confusion when the agent loses track of earlier conversation history.
*   **[Broken `preToolUse` Hook Denials]** [Issue #3874](github/copilot-cli Issue #3874) - Open. A regression or bug where VS Code agent hooks configured to deny specific commands (`PreToolUse`) are being bypassed, representing a potential security and workflow constraint issue.
*   **[Cost Tracking via OpenTelemetry]** [Issue #3778](github/copilot-cli Issue #3778) - Open. A request to emit cost and premium-request metrics via OpenTelemetry, aiming for feature parity with competing tools (like Claude Code) to help enterprises monitor AI expenditure.
*   **[Mouse Tracking Bug on Exit]** [Issue #3876](github/copilot-cli Issue #3876) - Closed. A terminal rendering bug where Copilot CLI fails to disable mouse tracking (SGGR mouse mode) upon exit, rendering the user's terminal unable to scroll until manually reset.
*   **[Ambiguous Status Line States]** [Issue #3879](github/copilot-cli Issue #3879) - Open. The CLI status line conflates "actively generating" with "idle + background work running." This ambiguity prevents developers from knowing exactly when it is safe to resume typing inputs.

### 4. Key PR Progress
*   **[PR #3880](github/copilot-cli PR #3880)** - Currently open, though likely a spam/mistaken submission. The PR introduces a React component mapping an "Artist Card" UI, which falls entirely outside the scope and tech stack of the Copilot CLI repository.

### 5. Feature Request Trends
*   **Granular Plugin & Hook Management:** Developers want tighter control over the plugin lifecycle, specifically requesting repository-scoped installations (instead of global user-level) and CLI commands to audit or list active hooks.
*   **Telemetry & Cost Observability:** There is a distinct push for deeper operational telemetry. Users are asking for OpenTelemetry integrations that go beyond standard token counts to include direct cost metrics and premium-request billing visibility.
*   **UI/UX Context Indicators:** Developers desire more transparent agent state indicators in the terminal, specifically requesting visual gauges for context window limits, active compaction warnings, and clearer distinctions between background processing and active generation blocking.

### 6. Developer Pain Points
The most prominent frustrations stem from **terminal state mismanagement** (broken mouse scrolling on exit, BEX64 fatal crashes on Windows ARM64 under load) which disrupts baseline CLI workflows. Furthermore, a significant gap exists between **marketing/documentation and actual functionality**—particularly regarding local sandbox network policies and command-denial hooks that fail to execute securely. Finally, the lack of **transparent context management** forces developers to guess when the LLM has silently compacted its memory and forgotten prior instructions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest (2026-06-22)

**Repository:** [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

### 1. Today's Highlights
The Kimi Code CLI community experienced a quiet 24 hours with no new releases, open pull requests, or newly created issues. The primary activity was the administrative cleanup and closure of older tickets, notably [Issue #2440](https://github.com/MoonshotAI/kimi-cli/issues/2440) regarding UI navigation in the chat panel. This lull suggests the core team may be heads-down preparing for a major upcoming iteration or internal architectural changes.

### 2. Releases
*No new releases or version tags were published in the last 24 hours.*

### 3. Hot Issues
Due to a low-activity cycle in the last 24 hours, only one issue was updated. However, it touches on a critical aspect of developer experience:

*   **[#2440 - Clickable symbol / line references in Kimi Code chat panel](https://github.com/MoonshotAI/kimi-cli/issues/2440)** [CLOSED]
    *   **Why it matters:** Seamless navigation between AI-generated suggestions and the actual codebase is a major productivity bottleneck. While file paths (e.g., `tools/example_module.py`) were already clickable, the inability to click on specific function names or line numbers to jump directly to their definition forced developers to manually search for the referenced code. 
    *   **Community Reaction:** The issue was closed without comment. This typically indicates that the feature has either been silently implemented in an upcoming/nightly build, absorbed into a broader UX overhaul, or deemed out of scope for the current CLI architecture.

### 4. Key PR Progress
*There has been no pull request activity (new, updated, or merged) in the last 24 hours.*

### 5. Feature Request Trends
Based on recent issue tracking (including the latest updates), the prominent feature direction is:
*   **Deep IDE/Editor Context Navigation:** Developers don't just want the AI to write code; they want the AI's output to be deeply integrated with their editor's native navigation tools. Requests are leaning heavily toward making AI chat outputs fully interactive—moving beyond simple file-level linking to exact line numbers, function definitions, and symbol declarations.

### 6. Developer Pain Points
*   **Context Switching Friction:** A recurring frustration among Kimi Code CLI users is the mental overhead of context switching between reading the AI's output in the chat panel and locating the relevant code in their editor. When AI tools reference specific methods or variables using standard markdown text rather than interactive IDE hyperlinks, it breaks the developer's flow state and slows down the review-and-apply process.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for 2026-06-22.

### 1. Today's Highlights
OpenCode rolled out version **v1.17.9**, focusing on agent stability by enforcing configured step limits and fixing provider detection bugs. Today’s development heavily targets **execution stability and session state management**, with numerous core PRs addressing file reading failures, interrupted assistant steps, and TUI crashes. Meanwhile, the community has been actively reporting critical issues with Zen API routing, macOS kernel panics from memory leaks, and broken tool-call structures when using the latest Claude Opus models via GitHub Copilot.

### 2. Releases
*   **v1.17.9** ([GitHub Release](https://github.com/anomalyco/opencode/releases))
    *   **Core Bugfixes:** Forced final text responses to honor configured agent step limits instead of failing mid-run; fixed Devstral model detection for case-sensitive provider IDs (contributed by `@Robin1987China`); passed configured custom headers to Copilot model requests.
    *   **Improvements:** Introduced a new `high` configuration setting (details truncated, likely related to step limits or performance).

### 3. Hot Issues
*   **[#33028](https://github.com/anomalyco/opencode/issues/33028) Subagents hang indefinitely after quick bash tool call**
    *   *Why it matters:* Both primary and subagents are hanging indefinitely during streaming without timing out, requiring manual process termination. This completely blocks workflows using models like `glm-5.2` and `minimax-m3`.
*   **[#30192](https://github.com/anomalyco/opencode/issues/30192) Claude model via OpenCode Zen returns "no provider available"**
    *   *Why it matters:* A widespread issue affecting OpenCode Zen users attempting to use Claude Opus 4.6. Other Zen models work fine, pointing to an upstream routing or availability bug.
*   **[#31041](https://github.com/anomalyco/opencode/issues/31041) Zen API endpoints return 404 on CORS preflight (OPTIONS)**
    *   *Why it matters:* All Zen API endpoints are blocking browser-based clients due to failing CORS preflight requests. The community is frustrated as the actual API endpoints are functional, making this a pure routing misconfiguration.
*   **[#31247](https://github.com/anomalyco/opencode/issues/31247) Copilot Claude Opus 4.8 emits pseudo tool-call text**
    *   *Why it matters:* Instead of returning structured JSON tool calls, `github-copilot/claude-opus-4.8` is persisting malformed text, breaking agentic loops and subsequent API requests (often resulting in 400 errors, see [#31807](https://github.com/anomalyco/opencode/issues/31807)).
*   **[#32002](https://github.com/anomalyco/opencode/issues/32002) Kernel panic via EndpointSecurity on macOS**
    *   *Why it matters:* A severe memory leak in `opencode.exe` is exhausting the macOS kernel zone map via the EndpointSecurity kext, causing complete system crashes on macOS 26.3.
*   **[#32829](https://github.com/anomalyco/opencode/issues/32829) DeepSeek provider: `$ref/$defs` in MCP tool schemas causes AttributeError**
    *   *Why it matters:* Integrating complex MCP servers like Asana and Notion with DeepSeek models fails due to improper schema resolution, blocking developers from utilizing advanced RAG/tooling setups.
*   **[#32706](https://github.com/anomalyco/opencode/issues/32706) TUI crash with "Effect.tryPromise" on v1.17.0+**
    *   *Why it matters:* A major regression causing the TUI to crash immediately upon startup for several users, making the CLI entirely unusable without complex debug flags.
*   **[#32726](https://github.com/anomalyco/opencode/issues/32726) Hebrew/Arabic (RTL) text renders left-to-right**
    *   *Why it matters:* A UX-breaking bug for international users where RTL languages are incorrectly aligned LTR, disrupting punctuation and list formatting across the desktop app.
*   **[#33228](https://github.com/anomalyco/opencode/issues/33228) Secret-bearing files copied into world-readable directories**
    *   *Why it matters:* A critical security concern. Broad copy commands initiated by the agent can inadvertently expose `.env` files and private keys to public/served directories without user approval.
*   **[#32773](https://github.com/anomalyco/opencode/issues/32773) Subagent task entries unclickable / 0ms in TUI**
    *   *Why it matters:* A UI state bug where completed subagent tasks lose their `sessionId` metadata, making them unclickable in the TUI, though they remain accessible via keyboard shortcuts.

### 4. Key PR Progress
*   **[#33271](https://github.com/anomalyco/opencode/pull/33271) feat(core): publish terminal session run failures**
    *   Introduces durable `session.next.run.failed` events to better distinguish between typed execution failures and unknown defects, improving telemetry and error handling.
*   **[#33270](https://github.com/anomalyco/opencode/pull/33270) refactor(core): simplify runner transitions**
    *   A major architectural cleanup replacing mutually recursive retry functions with a single iterative transition loop, explicitly representing turn rebuilds instead of masking them as defects.
*   **[#33267](https://github.com/anomalyco/opencode/pull/33267) fix(tui): improve worker rpc errors handling**
    *   Fixes a communication breakdown where errors thrown in the Bun worker backend were swallowed rather than being transmitted back to the TUI caller.
*   **[#33207](https://github.com/anomalyco/opencode/pull/33207) fix(tui): restore terminal modes on exit**
    *   Fixes a long-standing annoyance where exiting OpenCode left terminal modes (DECCKM, mouse tracking, kitty) active, garbling the user's shell session.
*   **[#33160](https://github.com/anomalyco/opencode/pull/33160) fix(mcp): prevent null parameters in MCP tool calls**
    *   Resolves an issue where OpenAI-compatible models (like MiniMax) received `null` values for parameters that only had a description but no explicit `type`.
*   **[#33247](https://github.com/anomalyco/opencode/pull/33247) feat: Add queued message editing, wrap & steer, and halt & steer**
    *   A highly requested UX enhancement allowing users to edit queued messages, intervene mid-execution, and manually steer the conversation flow.
*   **[#33260](https://github.com/anomalyco/opencode/pull/33260) fix(core): handle read file failures**
    *   Transitions filesystem races, binary reads, and malformed UTF-8 sequences into typed `Schema.TaggedErrorClass` channels, preventing hard crashes and preserving partial outputs.
*   **[#33148](https://github.com/anomalyco/opencode/pull/33148) feat(opencode): allow skipping session title generation**
    *   Adds a `skip-title` configuration option, saving API calls and latency when using slow local models.
*   **[#31392](https://github.com/anomalyco/opencode/pull/31392) feat(acp): stage edits for native review in ACP clients**
    *   Enhances integration with Agent Client Protocol (ACP) tools like Zed and Devin, allowing OpenCode to stage file edits for native IDE review.
*   **[#9871](https://github.com/anomalyco/opencode/pull/9871) feat: add `/reload` slash command**
    *   Implements hot-reloading for configuration, plugins, and MCP servers without requiring a full TUI restart, deferring the reload safely if sessions are active.

### 5. Feature Request Trends
*   **Fine-grained Session & Context Control:** Users want more authority over the conversation state. Requests include the ability to rename sessions ([#32375](https://github.com/anomalyco/opencode/issues/32375)), save session data locally to project folders ([#14292](https://github.com/anomalyco/opencode/issues/14292)), and truncate long skill prompts to save context space ([#25926](https://github.com/anomalyco/opencode/issues/25926)).
*   **Automated Workflows & Autonomy:** High demand persists for frictionless automation, evidenced by requests for "YOLO Mode" to auto-approve permission prompts ([#11831](https://github.com/anomalyco/opencode/issues/11831)) and the proposal for a built-in compiled skills system ([#26342](https://github.com/anomalyco/opencode/issues/26342)).
*   **Accessibility & Localization:** Strong push for broader language inclusivity, specifically comprehensive Right-to-Left (RTL) support for Arabic, Hebrew, Persian, and Urdu ([#10908](https://github.com/anomalyco/opencode/issues/10908), [#32810](https://github.com/anomalyco/opencode/issues/32810), [#32726](https://github.com/anomalyco/opencode/issues/32726)).

### 6. Developer Pain Points
*   **Provider & API Integrations:** The GitHub Copilot integration is notoriously fragile with newer models (Opus 4.8/4.7, GPT-5.5), frequently breaking due to malformed pseudo tool-calls and stale auth tokens ([#31236](https://github.com/anomalyco/opencode/issues/31236), [#31807](https://github.com/anomalyco/opencode/issues/31807)). OpenCode Zen is also causing headaches with CORS routing failures ([#31041](https://github.com/anomalyco/opencode/issues/31041)) and missing model availability ([#33229](https://github.com/anomalyco/opencode/issues/33229)).
*   **Streaming & Hanging Agents:** Developers are frustrated by unpredictable hangs where subagents never time out after a tool call ([#33028](https://github.com/anomalyco/opencode/issues/33028)). Conversely, older issues like Qwen3 looping or stopping mid-chat ([#1522](https://github.com/anomalyco/opencode/issues/1522)) indicate underlying instability in streaming state machines across various providers.
*   **Billing Friction:** Several users reported international credit card declines when attempting to purchase OpenCode Go subscriptions, blocking access to paid tiers ([#33264](https://github.com/anomalyco/opencode/issues/33264), [#33252](https://github.com/anomalyco/opencode/issues/33252)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for June 22, 2026.

### 1. Today's Highlights
Pi's development over the past 24 hours has been heavily focused on hardening agent reliability and improving context management. Key progress was merged to make auto-compaction opt-in and safer between tool turns, alongside critical fixes for parsing vLLM context overflows. The community was also highly active in refining the local LLM experience and addressing extension API inconsistencies.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[OpenAI Codex Reliability Issues](https://github.com/earendil-works/pi/issues/4945)**: The TUI occasionally gets stuck on "Working..." when using `openai-codex` / `gpt-5.5` without throwing visible errors, requiring users to manually abort the turn. (64 comments, 30 upvotes)
*   **[Streaming Markdown Forces Scroll to Bottom](https://github.com/earendil-works/pi/issues/5825)**: Users report that when reading streaming markdown outputs, the TUI aggressively forces a scroll to the bottom if `clear on shrink` is enabled, disrupting the reading experience. (28 comments)
*   **[Official Local LLM Provider Extension](https://github.com/earendil-works/pi/issues/3357)**: A major community push to dynamically fetch model lists from `{baseUrl}/models`. This is highly requested to seamlessly hook Pi into local runtimes like `llama.cpp`, `ollama`, and `LM Studio`. (26 comments, 36 upvotes)
*   **[Improve Provider Search & Model Aliases](https://github.com/earendil-works/pi/issues/5916)**: With no UI to configure OpenRouter providers, users are manually editing `models.json`. This issue requests better support for model overrides and aliases in local configs. (10 comments)
*   **[Agent Core Hangs on Unresponsive Streams](https://github.com/earendil-works/pi/issues/5778)**: A critical vulnerability where `pi-agent-core` hangs indefinitely if the LLM provider stream drops without closing the iterator or if a tool's promise fails to resolve. (7 comments)
*   **[Support Multiple Live Agent Sessions](https://github.com/earendil-works/pi/issues/5700)**: A feature request to juggle multiple concurrent agent sessions and switch between them in the TUI, allowing background tasks to run without being torn down. (7 comments)
*   **[Opt-in Auto-compaction Safe Points](https://github.com/earendil-works/pi/issues/5939)**: Community discussion on making auto-compaction explicitly opt-in and ensuring it executes safely after a tool turn finishes, rather than mid-operation. (7 comments)
*   **[Links Not Clickable Anymore](https://github.com/earendil-works/pi/issues/4180)**: A UI regression where markdown/full URLs are no longer clickable in the terminal after the recent alternate term mode update. (14 comments)
*   **[Bash Tool Silently Drops `cwd` Parameter](https://github.com/earendil-works/pi/issues/5904)**: The built-in bash tool ignores `cwd` overrides and always defaults to the session directory, causing agent failures when working inside deleted worktrees. (3 comments)
*   **[Expose `ctx.navigateTree()` to Extensions](https://github.com/earendil-works/pi/issues/5932)**: Developers building custom extensions (like advanced goal-tracking) need the `navigateTree()` function exposed on the standard `ExtensionContext`, not just the command context. (3 comments)

### 4. Key PR Progress
Here are the top 10 PRs updated in the last 24 hours:

*   **[PR #5937: Harden opt-in auto-compaction](https://github.com/earendil-works/pi/pull/5937)**: Implements contextual between-turn checkpoints so Pi can compact safely after tool results finish, making auto-compaction explicitly opt-in to prevent mid-task interruptions.
*   **[PR #5929: Add vLLM overflow patterns](https://github.com/earendil-works/pi/pull/5929)**: Adds specific regex patterns to detect 400 context length errors from vLLM, ensuring the agent triggers compaction instead of looping the same error.
*   **[PR #5942 / #5941: Improve compaction extension API](https://github.com/earendil-works/pi/pull/5942)**: Adds `reason` ("manual", "threshold", "overflow") and `willRetry` fields to compaction events, allowing extensions to know exactly why context was shrunk.
*   **[PR #5950: Fix OpenRouter cost display](https://github.com/earendil-works/pi/pull/5950)**: Fixes a bug where Pi ignored the actual USD usage cost returned by the OpenRouter API, relying instead on inaccurate static per-token estimates.
*   **[PR #5938: Sync TUI components to clients](https://github.com/earendil-works/pi/pull/5938)**: Adds `defineTuiComponent` declarations and migrates built-in renderers into a new synced TUI component module for better client connectivity.
*   **[Issue #5770: GLM-5.2 Effort Level Support](https://github.com/earendil-works/pi/issues/5770)**: Closed issue mapping to merged work allowing Pi to utilize Zhipu's coding plan effort levels (Low, Medium, High, Max) for the newly released GLM-5.2.
*   **[Issue #5501: Tolerate extra keys on edit tool](https://github.com/earendil-works/pi/issues/5501)**: Closed issue resolving a strict schema bug where LLM hallucinations (like appending `newText_2`) caused edit tool failures.
*   **[Issue #5571: Fix `-p` hang on non-TTY pipes](https://github.com/earendil-works/pi/issues/5571)**: Resolved a critical CLI issue where running `pi -p` without credentials on a non-TTY pipe would hang indefinitely rather than failing fast.
*   **[Issue #5906: Bash and Read Tool Preview Bug](https://github.com/earendil-works/pi/issues/5906)**: Closed issue fixing hardcoded limits that caused the `bash` and `read` tools to display only 5-10 lines of content when collapsed. 
*   **[Issue #5921: Fail-safe for malformed tool calls](https://github.com/earendil-works/pi/issues/5921)**: Closed issue addressing a bug where empty/malformed tool calls from the model poisoned the conversation history, causing a persistent 400 error spiral.

### 5. Feature Request Trends
*   **Advanced Local LLM & Provider Configurations**: Users want seamless integrations for local runtimes (Ollama, vLLM, LM Studio). There is a strong desire for dynamic model fetching, better OpenRouter UI/config management, and per-model thinking/effort configurations.
*   **Context Window & Compaction Controls**: As context limits are pushed, developers want granular control over compaction triggers (e.g., between-turn checkpoints) and better observability into why compaction occurred via the extension API.
*   **Enhanced Session & Workspace Management**: Requests for multiple concurrent live agent sessions, better worktree/CWD handling, and custom system prompt routing (e.g., `AGENTS.md` as a user message instead of system prompt).

### 6. Developer Pain Points
*   **Agent Loop Hangs & Deadlocks**: A major frustration is the TUI hanging indefinitely ("Working..."). This is often caused by unclosed iterators on dropped LLM streams, unresolved tool execution promises, or missing provider credentials.
*   **TUI Quirks & UX Friction**: Developers are frequently reporting UI bugs—such as copy-pasting adding extra spaces, markdown streams breaking scroll positioning, broken hyperlinks, and IME input pre-edit erasure.
*   **Schema Strictness & Tool Execution**: LLMs occasionally hallucinate extra keys or empty fields in tool calls. Pi's strict schemas historically crashed the agent or caused error loops. Furthermore, tool output truncation limits are viewed as too rigid by users running massive local models.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for June 22, 2026.

### 1. Today's Highlights
Qwen Code rolled out stable version **v0.18.5**, featuring a critical fix that requires opt-in for plan mode prompts to prevent unexpected behaviors. The community saw a massive influx of high-quality bug reports and feature PRs, particularly around enhancing CI/CD automation, improving terminal UI rendering, and fixing path resolution edge cases across Windows and network drives. Additionally, powerful new capabilities like voice dictation, revivable background sub-agents, and interactive HTML artifacts are making their way through active pull requests.

### 2. Releases
*   **[v0.18.5](https://github.com/QwenLM/qwen-code/pull/5558)** 
    *   **Core Fix:** Requires explicit opt-in for plan mode prompts (`fix(core): require opt-in for plan mode prompt`).
    *   **Testing:** Cleaned up duplicate gitdiff untracked count test cases.

### 3. Hot Issues
1.  **[Issue #5019](https://github.com/QwenLM/qwen-code/issues/5019): Long-context tasks trigger massive tool repetition, killing sessions**
    *   *Why it matters:* Users are hitting `400 InternalError` because the model repeatedly calls the same tool. PR #5571 addresses this by enabling loop detection by default.
2.  **[Issue #5554](https://github.com/QwenLM/qwen-code/issues/5554): CI loop detection exits successfully without failing workflows**
    *   *Why it matters:* In GitHub Actions, loop detection was silently exiting without throwing an error, causing failed agent tasks to show up as green pipelines.
3.  **[Issue #5562](https://github.com/QwenLM/qwen-code/issues/5562): Discontinuous background rendering on wrapped input lines**
    *   *Why it matters:* A visual bug in the interactive TUI where multi-line inputs break background colors. Highly discussed UI frustration.
4.  **[Issue #5555](https://github.com/QwenLM/qwen-code/issues/5555): `--resume` truncates thinking blocks in space-preview**
    *   *Why it matters:* Users cannot read full AI reasoning trails when reviewing past sessions because the TUI clips the output.
5.  **[Issue #5552](https://github.com/QwenLM/qwen-code/issues/5552): Bare `fastModel` triggers wrong OAuth under OpenAI auth**
    *   *Why it matters:* A security/auth bug where legacy model strings bypass the configured OpenAI auth and fall back to hardcoded Qwen OAuth.
6.  **[Issue #4888](https://github.com/QwenLM/qwen-code/issues/4888): IDEA plugin doesn't show `ask_user_question` text or inputs**
    *   *Why it matters:* JetBrains IDE users are completely blocked from answering model questions, breaking interactive workflows.
7.  **[Issue #5540](https://github.com/QwenLM/qwen-code/issues/5540): Inability to resume completed background sub-agents**
    *   *Why it matters:* Currently, completed sub-agents are single-shot. Users want to "revive" them via `send_message` for iterative background tasks.
8.  **[Issue #5538](https://github.com/QwenLM/qwen-code/issues/5538): VS Code Companion mishandles UNC paths**
    *   *Why it matters:* Network paths (`\server\share`) are incorrectly treated as relative, breaking file opens and diffs in enterprise environments.
9.  **[Issue #5567](https://github.com/QwenLM/qwen-code/issues/5567): `OpenAILogger.getLogFiles(0)` returns all logs instead of none**
    *   *Why it matters:* A classic truthy/falsy bug (`0 == false`) causes massive log returns when zero logs are requested.
10. **[Issue #5219](https://github.com/QwenLM/qwen-code/issues/5219): Integration tests skipped in PR CI**
    *   *Why it matters:* E2E tests only run during nightly releases, allowing regressions to easily slip into the main branch.

### 4. Key PR Progress
1.  **[PR #5502](https://github.com/QwenLM/qwen-code/pull/5502): Native Voice Dictation**
    *   Introduces `/voice` with hold/tap modes, native audio capture, streaming transcription, and model biasing.
2.  **[PR #5556](https://github.com/QwenLM/qwen-code/pull/5556): Revivable Background Sub-agents**
    *   Implements session revival for completed agents and adds a TTL cleanup for old agent transcripts.
3.  **[PR #5557](https://github.com/QwenLM/qwen-code/pull/5557): Interactive HTML Artifacts Tool**
    *   Adds an `artifact` tool allowing the model to generate and open self-contained interactive HTML pages locally.
4.  **[PR #5126](https://github.com/QwenLM/qwen-code/pull/5126): Vision-bridge for text-only models**
    *   Automatically transcribes pasted/referenced images into text using a vision-capable middleman model before sending prompts to text-only models.
5.  **[PR #5561](https://github.com/QwenLM/qwen-code/pull/5561): MCP Server Live Reload**
    *   Implements hot-reloading for MCP servers, dynamically connecting/disconnecting them when `settings.json` changes.
6.  **[PR #5571](https://github.com/QwenLM/qwen-code/pull/5571): Enable loop detection by default**
    *   Fixes the duplicate tool call issue (#5019) by turning on `LoopDetectionService` automatically and lowering the threshold.
7.  **[PR #5564](https://github.com/QwenLM/qwen-code/pull/5564): Fix CI silent failures on loop detection**
    *   Forces non-interactive CLI runs to exit with a failure code if loop detection is triggered.
8.  **[PR #5572](https://github.com/QwenLM/qwen-code/pull/5572): VS Code Companion Auto-Publish**
    *   Connects the CLI release pipeline to the VSIX publish flow, automating IDE extension updates.
9.  **[PR #5569](https://github.com/QwenLM/qwen-code/pull/5569): Fix zero-limit log requests**
    *   Correctly slices log arrays to return an empty list when `limit = 0` is requested.
10. **[PR #5030](https://github.com/QwenLM/qwen-code/pull/5030): Seamless turn resumption**
    *   Allows interrupted AI turns to resume naturally without injecting a synthetic "continue" message into the transcript.

### 5. Feature Request Trends
*   **Advanced Background Automation:** Strong demand for persistent, asynchronous task management. Users want sub-agents that can be revived, scheduled, and managed via TTL.
*   **Robust CI/CD & Autofix Pipelines:** A major trend is self-healing release workflows—triggering the Qwen Autofix agent immediately if nightly releases or E2E tests fail.
*   **Multi-modal Fallbacks:** Requests for "compatibility bridges" (like Voice-to-Text and Vision-to-Text) to extend the capabilities of older, text-only primary models.
*   **Rich Terminal UX:** Requests for the CLI to behave more like a dedicated app (e.g., displaying current project/model context persistently, rendering interactive artifacts, and seamless multi-line UI).

### 6. Developer Pain Points
*   **Path Resolution Edge Cases:** A massive thorn in the community's side. Raw string prefix matching (`path.startsWith()`) routinely breaks UNC paths, Windows absolute paths (`C:\`), and sibling directories with similar names.
*   **Flaky/Silent CI Pipelines:** Developers are frustrated that GitHub Actions workflows hide failures (e.g., loop detection silent exits) and skip integration tests on PRs, causing delays in bug detection.
*   **TUI Rendering Quirks:** The interactive CLI struggles with Ink/React terminal rendering, notably clipping long text blocks and failing to paint backgrounds on wrapped lines.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for the CodeWhale (formerly DeepSeek TUI) project for June 22, 2026.

### 1. Today's Highlights
CodeWhale v0.8.63 is officially merge-ready, bringing massive architectural refactors, subagent budget controls, and reliability improvements to the TUI. The community is actively adjusting to the canonical rebranding from `deepseek-tui` to `codewhale`, while the core team shifts focus toward v0.8.64, prioritizing context compaction, modular architectures, and visual verification loops.

### 2. Releases
*   **v0.8.63** ([Release Notes](https://github.com/Hmbown/CodeWhale/releases/tag/v0.8.63))
    *   **Canonical Rebranding:** `CodeWhale` is now the official name for the project, command, npm package, and release assets. The legacy npm package `deepseek-tui` is deprecated. Users should migrate using `docs/REBRAND.md`.
    *   **Integration Train:** Includes 52 commits encompassing subagent budgets, command extraction, reliability fixes, and dependency bumps.

### 3. Hot Issues
1.  **[ #2487 ] Frequent error: Turn stalled - no completion signal received** ([Link](https://github.com/Hmbown/CodeWhale/issues/2487))
    *   *Why it matters:* A critical freeze in `yolo` mode where operations stall indefinitely and cannot be resumed. With 17 comments, it highlights severe reliability issues in long-running automated workflows.
2.  **[ #1812 ] TUI-freeze-Windows-crossterm-poll** ([Link](https://github.com/Hmbown/CodeWhale/issues/1812))
    *   *Why it matters:* Windows 11 users are experiencing hard UI freezes where the app becomes unresponsive but remains alive. This points to underlying issues with cross-platform terminal event polling.
3.  **[ #3275 ] CodeWhale is overly involved in making modifications, engaging in self-questioning** ([Link](https://github.com/Hmbown/CodeWhale/issues/3275))
    *   *Why it matters:* A regression where the agent overextends its scope, creating self-driven loops without waiting for user confirmation. This breaks user trust and autonomy in interactive sessions.
4.  **[ #3222 ] Add `reasoning_style` override for inline-tag thinking blocks** ([Link](https://github.com/Hmbown/CodeWhale/issues/3222))
    *   *Why it matters:* Parsing of reasoning content from 3rd-party models (MiniMax M3, Qwen, GLM) via OpenAI chat-completions is currently broken, severely impacting multi-model support.
5.  **[ #2608 ] Refactor: extract provider registry from ballooning config files** ([Link](https://github.com/Hmbown/CodeWhale/issues/2608))
    *   *Why it matters:* The TUI config file has grown to over 9,400 lines. Adding providers requires touching 15-30 match arms, making it a massive bottleneck for external model integration.
6.  **[ #3355 ] Sandbox blocks Git write ops on worktree workspaces** ([Link](https://github.com/Hmbown/CodeWhale/issues/3355))
    *   *Why it matters:* The macOS seatbelt sandbox incorrectly flags Git worktrees, forcing developers to use `trust_mode` or YOLO mode just to perform standard `git add` operations.
7.  **[ #3145 ] Add visual inspection artifacts for browser and UI tasks** ([Link](https://github.com/Hmbown/CodeWhale/issues/3145))
    *   *Why it matters:* Enhancing the agent's evidence loop by capturing DOM context and screenshots for UI work, closing the gap with competing tools like Cursor.
8.  **[ #3303 ] Make documented config keys editable and persistable from the TUI** ([Link](https://github.com/Hmbown/CodeWhale/issues/3303))
    *   *Why it matters:* Users are frustrated that powerful runtime behaviors are hardcoded in `config.toml` but cannot be discovered or modified directly through the interactive TUI.
9.  **[ #2900 ] DSML调用错误 (DSML Call Errors)** ([Link](https://github.com/Hmbown/CodeWhale/issues/2900))
    *   *Why it matters:* The model occasionally outputs DSML as raw text rather than executing it as a tool call, resulting in massive token consumption and context overflow.
10. **[ #3289 ] v0.8.61 ui freezed after auto spawn several agent** ([Link](https://github.com/Hmbown/CodeWhale/issues/3289))
    *   *Why it matters:* The TUI crashes/freezes during plan mode when multiple subagents are spawned dynamically, hindering complex orchestration.

### 4. Key PR Progress
1.  **[ #3347 ] v0.8.63 release train** ([Link](https://github.com/Hmbown/CodeWhale/pull/3347))
    *   *Status:* Closed (Merged). Successfully integrated the v0.8.63 workstreams, bumping workspace versions and clearing all CI gates.
2.  **[ #3356 ] fix(tui): allow worktree git metadata writes in sandbox** ([Link](https://github.com/Hmbown/CodeWhale/pull/3356))
    *   *Status:* Open. Resolves issue #3355 by allowing the sandbox to detect linked-worktree `.git` pointers without requiring YOLO mode.
3.  **[ #3345 ] refactor(config): move inline tests to module** ([Link](https://github.com/Hmbown/CodeWhale/pull/3345))
    *   *Status:* Open. Extracts massive inline test modules out of production files to reduce merge conflicts and improve navigability.
4.  **[ #3333 ] refactor(tui): split MCP header helpers** ([Link](https://github.com/Hmbown/CodeWhale/pull/3333))
    *   *Status:* Open. Ongoing effort to break down the monolithic `mcp.rs` file by extracting HTTP header framing and filtering.
5.  **[ #3321 ] fix(workflow): add token budget regulator for high fan-out agent runs** ([Link](https://github.com/Hmbown/CodeWhale/pull/3321))
    *   *Status:* Closed. Implements much-needed token budget regulations to prevent runaway costs and steps during sub-agent orchestration.
6.  **[ #3331 ] fix(tui): enable proxy env for js execution** ([Link](https://github.com/Hmbown/CodeWhale/pull/3331))
    *   *Status:* Closed. Fixes network connectivity issues by enabling Node env-proxy mode for JS tool execution.
7.  **[ #3344 ] fix(tui): retry Codex responses requests** ([Link](https://github.com/Hmbown/CodeWhale/pull/3344))
    *   *Status:* Closed. Adds much-needed retry logic for transient transport/status failures on Codex Responses API calls.
8.  **[ #3301 ] feat(tui): save ask permission rules from approvals** ([Link](https://github.com/Hmbown/CodeWhale/pull/3301))
    *   *Status:* Closed. Introduces a quality-of-life feature allowing users to save shell approval prompts as persistent `permissions.toml` rules.
9.  **[ #3317 ] fix(cli): tear down delegated serve/app-server child on dispatcher exit** ([Link](https://github.com/Hmbown/CodeWhale/pull/3317))
    *   *Status:* Open. Fixes zombie processes by ensuring delegated child processes are cleaned up when the main dispatcher terminates.
10. **[ #3330 ] Layer 4: replay FEAT-005 command extraction onto main** ([Link](https://github.com/Hmbown/CodeWhale/pull/3330))
    *   *Status:* Closed. A major architectural replay that extracts command routing logic, setting the stage for more robust command strategies.

### 5. Feature Request Trends
*   **Modular Architecture Breakdown:** A massive sweep of issues (#3306 - #3314, #2608) reveals a focused strategy to dismantle Rust "god objects" (like `App` and `RuntimeThreadManager`) and break apart monolithic config and runtime files into focused submodules.
*   **Smart Context & Model Profiles:** The team is pushing to make CodeWhale model-agnostic. Features like `ModelProfile` descriptors (#3365) to tailor tool curation based on model context size, and seamless auto-compaction (#3363) to prevent context overflow, are highly prioritized for v0.8.64.
*   **Visual & UI Verification Loops:** Expanding the agent's ability to "see" its work. Requests for screenshot-to-vision feedback loops (#3362) and browser console verification (#3361) indicate a shift toward more robust frontend development capabilities.
*   **Local & Custom Model Support:** Users want easier integration with diverse models, requesting features like custom provider URLs for Baidu Qianfan (#3357) and localized skill definitions to save tokens in non-English environments (#3354).

### 6. Developer Pain Points
*   **UI & Thread Freezing:** The most prominent complaint across versions v0.8.39 through v0.8.63 is the TUI intermittently freezing, specifically on Windows (#1812) and during heavy sub-agent spawning (#3289, #2487). Users lose progress when long tasks stall without a completion signal.
*   **Agent Over-Stepping & Context Bloat:** Developers are frustrated when CodeWhale enters "YOLO" mode autonomously, making unrequested edits (#3275) or mistakenly streaming raw tool-calls (like DSML) as standard text, rapidly blowing up the context window (#2900).
*   **Rigid Configurations:** Important runtime behaviors are obfuscated from the TUI, forcing developers to manually dig through an increasingly massive and tangled `config.toml` file to make simple adjustments (#3303).

</details>