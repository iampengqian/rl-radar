# AI CLI Tools Community Digest 2026-06-24

> Generated: 2026-06-23 22:22 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the June 24, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI ecosystem in mid-2026 is undergoing a massive architectural shift from simple interactive chat interfaces to autonomous, multi-agent orchestration platforms. Developers are pushing these tools to handle complex, fire-and-forget workflows, which has exposed critical gaps in execution safety, context management, and system-level stability. As a result, maintainers are aggressively refactoring their underlying engines to support nested subagents, persistent background daemons, and standardized cross-provider routing. Meanwhile, enterprise requirements are forcing a rapid maturation of security boundaries, placing a heavy emphasis on sandboxing, granular permissions, and budget transparency to prevent runaway token consumption.

### 2. Activity Comparison
*Note: The following metrics reflect the specific snapshot of community activity tracked over the last 24 hours.*

| Tool | Active Issues Highlighted | Active PRs Highlighted | Release Status (Last 24h) | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 2 | `v2.1.187` Released | Enterprise security, cost guardrails, fixing TUI regressions. |
| **OpenAI Codex** | 10 | 10 | 9 Alpha releases (`v0.143.0`) | Multi-agent routing, core decoupling, Windows stability. |
| **Gemini CLI** | 10 | 10 | No releases | SSRF/security hardening, resolving agent deadlocks. |
| **GitHub Copilot CLI** | 10 | 1 | `v1.0.64` Released | Billing UX, ACP/MCP integration, fixing resource leaks. |
| **OpenCode** | 10 | 10 | No releases | Modularized workflow engine, nested subagents. |
| **Qwen Code** | 10 | 10 | `v0.19.0` & `v0.19.1` | Persistent daemons, type validation, MCP/IDE parity. |
| **Pi (pi-mono)** | 10 | 10 | 3 Patch releases (`v0.80.x`) | Provider routing fixes, multi-agent UI dashboards. |
| **DeepSeek TUI** | 10 | 10 | No releases (Pre-`v0.8.65`) | "Fleet" multi-provider substrate, security hardening. |
| **Kimi Code CLI** | 1 | 0 | No releases | Bug fixes for autonomous (YOLO) execution. |

### 3. Shared Feature Directions
*   **Multi-Agent Orchestration & "Fleets":** Almost all tools are moving beyond single-agent loops. *Claude Code*, *OpenAI Codex*, and *OpenCode* are actively implementing nested subagent spawning. *Pi* and *DeepSeek TUI* are building "AgentSwarm" dashboards and multi-provider routing fleets.
*   **Cost Transparency & Guardrails:** With autonomous agents, uncontrolled token burn is a universal pain point. *Claude Code* users are reporting catastrophic recursive loops, prompting demands for upfront cost estimates. *OpenAI Codex* and *GitHub Copilot CLI* are actively addressing this with API budget visibility and pay-as-you-go limits.
*   **Persistent Daemons & Background Execution:** There is a strong community push to decouple the AI from the terminal window. *Qwen Code* (proposing a `qwen daemon`) and *GitHub Copilot CLI* are exploring scheduled agents and persistent background services hosted via system-level processes (e.g., systemd/launchd).
*   **Security, Sandboxing & SSRF Prevention:** As CLIs execute more code, system safety is paramount. *Gemini CLI* is aggressively patching SSRF vulnerabilities and DNS rebinding, while *Claude Code* and *OpenCode* are tightening sandbox credentials and file-system write protections.
*   **Ecosystem Protocols (MCP & ACP):* Standardization is occurring via the Model Context Protocol and Agent Client Protocol. However, *Copilot CLI* and *Claude Code* users report friction where MCP servers connect but fail to load tools, while *Qwen Code* is actively merging PRs to streamline MCP resource discovery.

### 4. Differentiation Analysis
*   **Target Environments:** *Claude Code* and *Copilot CLI* are heavily focused on enterprise compliance, auditing, and IDE integrations (VS Code, iPadOS). In contrast, *OpenCode*, *Pi*, and *DeepSeek TUI* cater more to power users and terminal purists who want granular control over BYOK (Bring Your Own Key), custom VIM keybindings, and local LLM routing.
*   **Technical Architectures:** *OpenAI Codex* and *DeepSeek TUI* are undergoing massive Rust-based refactors (Codex shipped 9 alpha releases decoupling wire types, while DeepSeek is rebuilding its engine around a provider-agnostic "Fleet" substrate). *Qwen Code* is differentiating by heavily leaning into client-side voice APIs and Chrome extension integrations powered by local WebSockets.
*   **Safety Approaches:** *Gemini CLI* and *Qwen Code* are focusing on deterministic safety (e.g., dropping late tool calls on SIGINT, hard-blocking destructive git commands). *Kimi Code* remains uniquely fixated on ensuring its "YOLO mode" can bypass manual approvals entirely for pure CI/CD automation.

### 5. Community Momentum & Maturity
*   **Hyper-Iterators:** *OpenAI Codex* and *Qwen Code* show massive momentum. Codex pushed 9 alpha builds in a single day, while Qwen merged 10 substantial PRs spanning daemons, parallel pipelines, and voice APIs. *OpenCode* is also moving at breakneck speed with a 6-part PR stack rebuilding its workflow engine overnight.
*   **Mature Stabilizers:** *Claude Code* and *GitHub Copilot CLI* show mature, enterprise-paced releases. Their community discussions are less about "will it run" and more about UI accessibility, context compaction limits, and billing budgets—hallmarks of tools heavily deployed in production environments.
*   **Niche / Early Stage:** *Kimi Code* is in a quiet maintenance phase. *DeepSeek TUI* is in a transparent but heavy transitional period (pre-`v0.8.65`), explicitly holding releases until its architectural debt is cleared.

### 6. Trend Signals
*   **The "Autonomy Paradox":** Developers want fully autonomous agents, but are simultaneously terrified of their destructive potential. The most highly requested features today are strict turn-limits for subagents, bypass permissions for trusted workflows, and hard blocks on destructive shell commands (`git reset --force`). 
*   **The Death of the Single-Provider CLI:** Tools that only interface with one AI provider (like *DeepSeek TUI* and *Pi*) are rapidly refactoring into provider-agnostic hubs. The industry standard is shifting toward dynamic load balancing, where text inference, vision processing, and subagent delegation are routed to entirely different models based on cost and capability.
*   **Windows Subsystem Hostility:** Windows remains a friction point for terminal-based AI. *OpenAI Codex* (RAM leaks), *Copilot CLI* (resource exhaustion), and *OpenCode* (PATH corruption) all face severe OS-level bugs related to ConPTY, WSL path translations, and unmanaged background processes.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the Claude Code Skills ecosystem based on recent repository activity.

### 1. Top Skills Ranking & Core Fixes
While the ecosystem sees many new Skill proposals, the most active discussions center around critical bugs in the `skill-creator` tooling and enterprise document handling. 

*   **Eval & Skill Creator Fixes (Multiple PRs):** The most concentrated area of community development is fixing the `run_eval.py` script, which currently suffers from a `0% recall` bug that completely breaks the description-optimization loop. Top PRs addressing this include [#1298](https://github.com/anthropics/skills/pull/1298) (fixing eval artifacts and Windows stream reading), [#1323](https://github.com/anthropics/skills/pull/1323) (fixing trigger detection), and [#1099](https://github.com/anthropics/skills/pull/1099) & [#1050](https://github.com/anthropics/skills/pull/1050) (resolving Windows subprocess and encoding crashes). **Status:** All Open.
*   **Frontend-Design Skill Enhancement:** PR [#210](https://github.com/anthropics/skills/pull/210) revises the existing frontend-design skill to be more actionable and token-efficient, ensuring instructions can be executed within a single conversation context. **Status:** Open.
*   **Document Typography Skill:** PR [#514](https://github.com/anthropics/skills/pull/514) introduces automated quality control for generated PDF/DOCX files, preventing orphan words, widow paragraphs, and numbering misalignment. **Status:** Open.
*   **ODT (OpenDocument) Skill:** PR [#486](https://github.com/anthropics/skills/pull/486) proposes comprehensive support for creating, filling, and converting `.odt` and `.ods` files, bridging a gap for open-source document standards. **Status:** Open.
*   **Skill Quality & Security Analyzers:** PR [#83](https://github.com/anthropics/skills/pull/83) proposes "meta-skills" that evaluate other skills across five dimensions, including structure, documentation, and security (e.g., detecting prompt injection). **Status:** Open.

### 2. Community Demand Trends
Analysis of repository Issues reveals strong community demand in three key directions:
*   **Enterprise & Team Collaboration:** Users are heavily requesting native organizational features, such as org-wide Skill sharing without manual file transfers (Issue [#228](https://github.com/anthropics/skills/issues/228)) and better access control for enterprise platforms like SharePoint (Issue [#1175](https://github.com/anthropics/skills/issues/1175)).
*   **Advanced Agent State Management:** There is a distinct push toward long-running agent efficiency, highlighted by requests for persistent memory and context retention skills like "shodh-memory" (PR [#154](https://github.com/anthropics/skills/pull/154)) and "compact-memory" using symbolic notation (Issue [#1329](https://github.com/anthropics/skills/issues/1329)).
*   **Security & Namespace Integrity:** With the rise of community-shared Skills, users are demanding stricter trust boundaries to prevent malicious actors from disguising community Skills as official Anthropic releases under the `anthropic/` namespace (Issue [#492](https://github.com/anthropics/skills/issues/492)).

### 3. High-Potential Pending Skills
The following highly technical PRs are actively addressing widespread bugs and have a high probability of landing in the main repository soon:
*   **PR [#1298](https://github.com/anthropics/skills/pull/1298):** Solves the critical `0% recall` bug in `run_eval.py`, which currently renders the automated skill-description optimization loop completely non-functional.
*   **PR [#362](https://github.com/anthropics/skills/pull/362):** Fixes a UTF-8 byte-length panic in the CLI's Rust backend when the `skill-creator` encounters multi-byte characters, implementing safe truncation helpers.
*   **PR [#541](https://github.com/anthropics/skills/pull/541):** Prevents DOCX file corruption by fixing a shared ID collision between tracked changes and existing bookmarks in OOXML.
*   **PR [#538](https://github.com/anthropics/skills/pull/538) & [#361](https://github.com/anthropics/skills/pull/361):** Crucial under-the-hood fixes for case-sensitivity mismatches in document skills and silent YAML parsing failures caused by unquoted special characters.

### 4. Skills Ecosystem Insight
The community's most concentrated demand right now is stabilizing the `skill-creator`'s evaluation loop (fixing cross-platform Windows and 0% recall bugs) alongside a pressing need for robust security boundaries and enterprise-grade sharing mechanisms.

---

Here is the Claude Code community digest for June 24, 2026, based on the latest GitHub activities.

### 1. Today's Highlights
Claude Code rolled out version `v2.1.187`, introducing critical enterprise security features via `sandbox.credentials` and org-level model restrictions. Meanwhile, the community has been actively reporting severe regressions in the TUI renderer (layout oscillations and scrolling freezes) and escalating concerns over uncontrolled token consumption caused by recursive subagent spawning during deep-research workflows. 

### 2. Releases
**[v2.1.187](https://github.com/anthropics/claude-code/releases)**
*   **Security & Sandboxing:** Introduced a new `sandbox.credentials` setting to prevent sandboxed commands from accessing credential files and secret environment variables.
*   **Enterprise Management:** Added organization-configured model restrictions across the model picker, `--model`, `/model`, and `ANTHROPIC_MODEL` environment variables.

### 3. Hot Issues
1.  **[#68619](https://github.com/anthropics/claude-code/issues/68619) [CRITICAL] Subagent infinite recursion & token burn:** Users report a catastrophic bug where subagents spawn recursively (50+ levels deep), ignoring environment flags and causing massive, uncontrolled token usage. 
2.  **[#70433](https://github.com/anthropics/claude-code/issues/70433) Deep-research subagent fan-out:** Similar to the critical bug above, the built-in `deep-research` workflow triggers ~100 subagents without warning or confirmation, quickly exhausting session token quotas.
3.  **[#70144](https://github.com/anthropics/claude-code/issues/70144) [iPadOS] Session crashes:** A severe main-thread stack overflow in SwiftUI causes the iPad app to crash immediately upon opening any session in the Code tab.
4.  **[#34556](https://github.com/anthropics/claude-code/issues/34556) Persistent memory across compactions:** A highly-discussed feature request where a user documented 59 context compactions, ultimately having to build their own external memory persistence system to avoid losing context.
5.  **[#2682](https://github.com/anthropics/claude-code/issues/2682) MCP tools list but don't load:** A long-standing bug where Claude Desktop successfully connects to an MCP server and lists tools, but the tools never actually become available in the chat interface.
6.  **[#68780](https://github.com/anthropics/claude-code/issues/68780) Opus 4.8 performance regression:** Users are reporting severely degraded reasoning capabilities and processing speed with Claude Opus 4.8, even on maximum effort settings.
7.  **[#70432](https://github.com/anthropics/claude-code/issues/70432) TUI layout oscillation:** A recent regression in `v2.1.186` causes the terminal UI layout to continuously jump up and down by one line while background tasks are running.
8.  **[#53442](https://github.com/anthropics/claude-code/issues/53442) Cowork Google Drive MCP blindspot:** The Cowork Google Drive MCP integration completely fails to see or access content within Workspace Shared Drives.
9.  **[#13843](https://github.com/anthropics/claude-code/issues/13843) Context sharing from Claude.ai:** Users are heavily requesting the ability to seamlessly share conversation context and planning history directly from the Claude.ai web interface into Claude Code.
10. **[#70425](https://github.com/anthropics/claude-code/issues/70425) Accessibility deficits:** A blind accessibility architect detailed the need for out-of-the-box screen reader support, audio cues, and better heading discipline in the TUI.

### 4. Key PR Progress
*Note: Only 2 active PRs were updated in the repository during this window.*
1.  **[PR #70173](https://github.com/anthropics/claude-code/pull/70173) Fix `/clean_gone` branch detection:** Fixes a broken git command where `[gone]` branches were not being properly detected and deleted due to errors in `git branch -v` grep filtering.
2.  **[PR #20448](https://github.com/anthropics/claude-code/pull/20448) Web4 Governance Plugin:** Introduces a lightweight AI governance plugin featuring T3 trust tensors, entity witnessing, and R6 audit trails for agent cryptographic provenance.

### 5. Feature Request Trends
*   **Cost Transparency & Guardrails:** With the rise of complex agentic workflows, developers are urgently requesting upfront cost estimates, quota warnings, and explicit confirmation steps before resource-heavy skills (like `deep-research`) are executed ([#68703](https://github.com/anthropics/claude-code/issues/68703), [#70433](https://github.com/anthropics/claude-code/issues/70433)).
*   **Context & Memory Persistence:** There is a strong demand for better context retention, specifically requests to exempt `CLAUDE.md` from compactions and build reliable persistent memory across sessions ([#34556](https://github.com/anthropics/claude-code/issues/34556), [#68636](https://github.com/anthropics/claude-code/issues/68636)).
*   **Ecosystem & API Integration:** Developers want tighter integration with their existing tools, including sharing context from Claude.ai to Code ([#13843](https://github.com/anthropics/claude-code/issues/13843)), an API for org-wide skills ([#57609](https://github.com/anthropics/claude-code/issues/57609)), and support for VS Code's new browser-sharing API so Claude can visually validate web UI changes ([#57034](https://github.com/anthropics/claude-code/issues/57034)).
*   **Granular Hooks:** Developers are pushing for more customizable programmatic hooks, such as the ability to inject updated input into approval hooks ([#16001](https://github.com/anthropics/claude-code/issues/16001)) and a new `PermissionResolved` event hook ([#64170](https://github.com/anthropics/claude-code/issues/64170)).

### 6. Developer Pain Points
*   **TUI Rendering Bugs:** The fullscreen Terminal UI is currently a major source of frustration. Recent versions have introduced scrolling limitations ([#70429](https://github.com/anthropics/claude-code/issues/70429)), UI oscillation ([#70432](https://github.com/anthropics/claude-code/issues/70432)), and intercepted mouse wheel inputs ([#66601](https://github.com/anthropics/claude-code/issues/66601)).
*   **MCP Deployment Friction:** Developers continue to struggle with MCP reliability. Tools frequently connect successfully but fail to load into the model's usable context, an issue compounded by missing documentation regarding secret-safe terminal outputs for MCP commands ([#70397](https://github.com/anthropics/claude-code/issues/70397), [#64886](https://github.com/anthropics/claude-code/issues/64886)).
*   **Silent Data Loss:** A dangerous regression on Windows involves TUI sessions spawned under ConPTY failing to write conversation records to session transcripts, silently breaking session resumes ([#67603](https://github.com/anthropics/claude-code/issues/67603)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for June 24, 2026.

### 1. Today's Highlights
Codex CLI saw a massive architectural refactor today, pushing 8 new alpha releases (`v0.143.0-alpha.1` through `alpha.9`) focused on decoupling core domain logic from app-server wire types and enhancing multi-agent capabilities. The community remains highly engaged around severe system-level performance issues on Windows—specifically unbounded git processes and UI freezing. Meanwhile, developers are expressing growing frustration over sudden rate-limit budget drains and intermittent API errors when attempting to use the latest `gpt-5.5` models.

### 2. Releases
The team shipped an aggressive series of Rust CLI alpha releases over the last 24 hours, moving from `v0.143.0-alpha.1` to `v0.143.0-alpha.9`. This rapid iteration underscores a major internal restructuring phase, heavily reflected in today's Pull Requests, which prioritize decoupling core protocols from the app-server.

### 3. Hot Issues
Here are the top community-reported issues impacting developers:

*   **[Rate Limit Regression] ([#28879](https://github.com/openai/codex/issues/28879))**: Users report that `gpt-5.5` token costs have unexpectedly jumped 10-20x since June 16, draining the 5-hour ChatGPT Plus budget in just 2-3 prompts. (👍 257 | 128 comments)
*   **[Massive Log I/O] ([#28224](https://github.com/openai/codex/issues/28224))**: A highly popular issue detailing how SQLite feedback logs could write ~640 TB/year, destroying SSD endurance. The author confirmed that recent merged PRs cut 85% of the bloat, allowing the issue to be closed. (👍 322 | 69 comments)
*   **[GPT-5.5 & 5.6 404 Errors] ([#29546](https://github.com/openai/codex/issues/29546) & [#29663](https://github.com/openai/codex/issues/29663))**: Multiple users are experiencing `404 Model not found` errors when specifically selecting `gpt-5.5`, while `gpt-5.4` continues to function normally. There is also community clamoring for the unannounced `gpt-5.6`.
*   **[Windows Memory Leak] ([#29729](https://github.com/openai/codex/issues/29729))**: Long-running Windows sessions involving local Git and PowerShell are spawning massive numbers of stale `git.exe` token objects, causing system RAM to spike to 30+ GB on 32GB machines. 
*   **[Windows Shell Freezing] ([#16374](https://github.com/openai/codex/issues/16374))**: The Codex desktop app intermittently freezes the entire Windows shell/UI. Oddly, opening the Codex Settings panel acts as a temporary workaround to stop the freeze.
*   **[Stale Permissions in `/goal`] ([#29693](https://github.com/openai/codex/issues/29693))**: A critical security/UX bug where `/goal` continuations can bypass active settings and reuse stale permission contexts, even when the user's global config is set to `approval_policy = "never"`.
*   **[Desktop UI Desync] ([#29689](https://github.com/openai/codex/issues/29689))**: After a successful patch-only turn, the Desktop renderer drops its thread-state sync and spams raw `{"detail":"Unsupported content type"}` JSON errors to the UI.
*   **[Cloudflare Blocking WebSearch] ([#29197](https://github.com/openai/codex/issues/29197))**: Codex WebSearch requests are being blocked by Cloudflare, returning HTTP 403 managed challenges that break the tool-calling flow.
*   **[macOS `syspolicyd` Spikes] ([#16767](https://github.com/openai/codex/issues/16767))**: Launching Codex Desktop on macOS consistently triggers sustained CPU spikes in `syspolicyd` and `trustd` due to sandbox and trust check repetitive looping.
*   **[Missing Windows Plugins] ([#29673](https://github.com/openai/codex/issues/29673))**: Bundled Codex plugins (like OpenAI-curated tools) are missing or fail to load on Windows 11, despite being successfully installed on macOS/Linux environments.

### 4. Key PR Progress
Today's PRs reflect a massive effort to cleanly separate domain logic from app-server APIs, alongside major agent improvements:

*   **[PR #29710](https://github.com/openai/codex/pull/29710)**: Derives multi-agent mode directly from "Ultra" effort settings, removing competing sources of truth and making agent lifecycle deterministic during thread forks and subagent spawns.
*   **[PR #29692](https://github.com/openai/codex/pull/29692)**: Introduces concurrent reasoning summaries (`concurrent_cutoff`), preventing reasoning text from being attached to the wrong output items during overlapping model responses.
*   **[PR #29734](https://github.com/openai/codex/pull/29734)**: Fixes Windows ConPTY input handling in the unified-exec TTY, addressing critical issues where backspace and line endings were being mangled in PowerShell/cmd.
*   **[PR #29736](https://github.com/openai/codex/pull/29736)**: Injects an explicit agent graph store into the `ThreadManager`, optimizing how agent spawn, close, and recursive resume commands are routed.
*   **[PR #29626](https://github.com/openai/codex/pull/29626)**: Fixes cross-platform skill discovery. Previously, executor skills were converted to host paths, meaning a foreign Windows root couldn't be read by a Unix host.
*   **[PR #29711](https://github.com/openai/codex/pull/29711)**: Updates image generation extension hosts to control output persistence natively, allowing images to be returned directly to the UI without being force-written to the local filesystem.
*   **[PR #29721](https://github.com/openai/codex/pull/29721)**: Moves authentication mode logic down from the app-server wire types into core domain crates, ensuring lower-level libraries don't depend on unrelated APIs.
*   **[PR #29665](https://github.com/openai/codex/pull/29665)**: Fixes token context budget calculations so that persistent prefixes don't count against the active body window during model auto-compaction.
*   **[PR #29735](https://github.com/openai/codex/pull/29735)**: Adds a `wait` tool for models, allowing an agent to pause mid-turn while a requested execution environment is still booting up.
*   **[PR #29733](https://github.com/openai/codex/pull/29733)**: Allows external MCP servers to explicitly utilize the current ChatGPT session for authentication, rather than inferring auth strictly from reserved Codex App server names.

### 5. Feature Request Trends
*   **Cross-Platform Execution & Plugins Parity**: With Codex now deeply integrated into local systems, developers are heavily requesting robust, unified plugin architectures that work identically across Linux, macOS, and Windows ConPTY.
*   **TUI / CLI Transcript Navigation**: Developers want richer terminal UI capabilities, specifically keyboard shortcuts (e.g., `Alt+Up`) to jump between user prompts and review historical outputs quickly without scrolling.
*   **Custom Provider Support in Desktop**: Users enjoy bringing their own model providers via `config.toml` in the CLI, and are requesting that the Codex Desktop app receive the same sane, configurable model catalog and picker experience.

### 6. Developer Pain Points
*   **Windows Ecosystem Instability**: The Windows Desktop app is a major source of friction. Users report unresponsive shells, out-of-control background processes (`git.exe` object leaks), firewall conflicts, and missing marketplace plugins.
*   **Opaque Budget & Rate Limits**: Devs are frustrated by the inability to diagnose sudden drops in tooling efficiency, specifically highlighting the unexplained 10-20x increase in rate-limit token costs on `gpt-5.5`.
*   **Desktop App State Desyncs**: The Desktop UI frequently fails to match the actual execution state. Dropping raw JSON errors into the chat pane or losing session history threads when prompts are pasted as attachments breaks developer trust in the app's stability.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 24, 2026.

### 1. Today's Highlights
The Gemini CLI community is highly focused on enhancing **agent stability** and fortifying **security boundaries**. Key developments include multiple robust fixes to prevent Server-Side Request Forgery (SSRF) and tighten file system permissions, alongside deep architectural discussions on improving subagent execution and Auto Memory reliability.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs** (👍 8): A high-priority bug where the generalist subagent hangs indefinitely during simple operations like folder creation. Users are currently forced to manually disable subagents to maintain workflow.
*   **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command execution gets stuck** (👍 3): A frustrating UX issue where the CLI hangs on "Awaiting user input" long after a simple shell command has successfully completed execution.
*   **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent false success on MAX_TURNS** (👍 2): The `codebase_investigator` subagent reports a "GOAL" success even when it hits the maximum turn limit, hiding execution failures from the main agent and the user.
*   **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Low autonomous usage of skills/sub-agents** (👍 0): Developers report that Gemini requires explicit prompting to use defined skills (e.g., gradle, git), reducing the overall agentic utility of custom configurations.
*   **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Investigate AST-aware file reads** (👍 1): A proposed architectural shift to map codebases using Abstract Syntax Trees (AST), which would drastically reduce token noise and prevent misaligned file reads during codebase investigations.
*   **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory data redaction** (👍 0): A security and privacy concern highlighting that the Auto Memory background agent exposes local transcripts/secrets to the model *before* the extraction prompt attempts to redact them.
*   **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 Error with > 128 tools** (👍 0): A scaling limit where the CLI throws an API error when too many MCP tools are enabled, requesting smarter tool-scoping logic within the agent loop.
*   **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser agent fails in Wayland** (👍 1): Environment-specific crashes where the browser subagent fails to execute properly on Wayland Linux desktops. 
*   **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) Output hook crashes CLI** (👍 0): The `get-shit-done` output hook causes a hard crash during user summary printing, abruptly terminating the CLI process.
*   **[#28114](https://github.com/google-gemini/gemini-cli/issues/28114) Missing Node.js version check** (👍 0): Users running older Node versions (like v18) face cryptic bundle errors on startup, highlighting the need for an explicit engine version check.

### 4. Key PR Progress
Recent Pull Requests show a strong push toward hardening security and refining tool execution:

*   **[#28112](https://github.com/google-gemini/gemini-cli/pull/28112) SSRF protection for MCP OAuth metadata:** Adds crucial DNS validation and loopback checks to OAuth discovery flows, closing a vulnerability present in MCP server integrations.
*   **[#27966](https://github.com/google-gemini/gemini-cli/pull/27966) Strict case-insensitive blocklist:** Prevents prompt injection and directory bypasses by strictly enforcing a case-insensitive blocklist for sensitive paths (`.git`, `.env`, `node_modules`).
*   **[#27971](https://github.com/google-gemini/gemini-cli/pull/27971) Fix "Thought Leakage":** Surgically strips internal model thoughts/reasoning from plain-text history turns, preventing the model from getting confused or entering infinite monologue loops in subsequent turns.
*   **[#28103](https://github.com/google-gemini/gemini-cli/pull/28103) OAuth Keep-Alive Fix:** Resolves a spurious `ERR_STREAM_PREMATURE_CLOSE` error during Google Sign-In on Node.js >= 24.17.0 by avoiding socket reuse regressions.
*   **[#28096](https://github.com/google-gemini/gemini-cli/pull/28096) Drop late tool calls on SIGINT:** Ensures that delayed provider tool-call chunks are safely dropped if the user sends a cancelation (Ctrl+C) signal, preventing runaway side effects.
*   **[#28015](https://github.com/google-gemini/gemini-cli/pull/28015) Caretaker Webhook Service:** Implements a scalable Cloud Run webhook ingestion service to verify, store, and queue GitHub issue payloads securely via Pub/Sub.
*   **[#28113](https://github.com/google-gemini/gemini-cli/pull/28113) Tool Registry & AST Extraction:** Adds a foundational registry for eval reporting and extracts tool names used inside eval assertions, significantly boosting CI testing capabilities.
*   **[#27744](https://github.com/google-gemini/gemini-cli/pull/27744) DNS rebinding mitigation in web-fetch:** Prevents SSRF attacks by resolving DNS before checking against the SSRF guard, closing loopholes using wildcard DNS services (like `nip.io`).
*   **[#28058](https://github.com/google-gemini/gemini-cli/pull/28058) JSON output for eval inventory:** Adds machine-readable JSON output to the eval inventory command, making it vastly easier to use Gemini CLI evaluations in automated CI/CD pipelines.
*   **[#27914](https://github.com/google-gemini/gemini-cli/pull/27914) False session resume prompt:** Fixes a UX issue where the CLI offered to resume a chat session that had actually failed to save due to disk space (ENOSPC) errors.

### 5. Feature Request Trends
*   **Advanced Codebase Navigation:** There is a strong desire to move beyond naive string matching, with multiple issues requesting AST-aware file reads and codebase mapping to reduce token usage and increase accuracy ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
*   **Robust Autonomous Tool Selection:** Users want the agent to be smarter about context limits—specifically requesting dynamic tool-limit handling to prevent 400 errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) and better proactive utilization of custom user-defined skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
*   **Resilient Subagent Workflows:** A trend of requests aim to make subagents more fault-tolerant, including automatic browser session recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) and making subagent trajectories visible via `/chat share` for better debugging ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).

### 6. Developer Pain Points
*   **Agent & Process Hanging:** Developers express deep frustration with execution deadlocks. The CLI hangs when deferring to the generalist agent ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), running interactive shell commands like `vite create` ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), or simply waiting for terminal execution to finish ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
*   **Workspace Hygiene:** The agent's tendency to generate temporary edit scripts in random directories creates significant workspace pollution and overhead when cleaning up for Git commits ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)). Additionally, developers are concerned about the agent executing destructive commands (`git reset --force`) without sufficient safety guardrails ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
*   **Auto Memory Unreliability:** The Auto Memory extraction system is currently viewed as fragile. It retries low-signal sessions indefinitely ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) and silently drops memory patches if they are malformed or escape allowed paths ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 24, 2026.

### 1. Today's Highlights
GitHub Copilot CLI rolled out version `v1.0.64` yesterday, introducing enhanced path access transparency and improved pay-as-you-go budget visibility. The community was highly active, with heavy discussion around the Agent Client Protocol (ACP), Model Context Protocol (MCP) plugin architecture, and multiple reports of visual bugs in custom terminal environments.

### 2. Releases
*   **[v1.0.64](https://github.com/github/copilot-cli/releases/tag/v1.0.64)** (Published: 2026-06-23)
    *   **Security Transparency:** Path access prompts now show resolved symlink targets, allowing developers to verify exactly what access is being granted.
    *   **Billing UX:** The pay-as-you-go additional usage budget is now displayed at launch, dynamically refreshes if a request is rejected due to spend limits, and provides a friendly warning message.

### 3. Hot Issues
1.  **[#3892](https://github.com/github/copilot-cli/issues/3892) [OPEN] Session state directory never pruned:** A critical report noting that `~/.copilot/session-state` is never cleaned up, leading to EMFILE (file descriptor exhaustion) that can crash VS Code Copilot Chat.
2.  **[#3891](https://github.com/github/copilot-cli/issues/3891) [OPEN] Sub-agent `model:` override fails in BYOK mode:** When using custom providers (Bring Your Own Key), custom agents silently drop their specific `model:` configurations, breaking specialized routing. 
3.  **[#3889](https://github.com/github/copilot-cli/issues/3889) [OPEN] Missing stdio transport support in ACP:** Copilot CLI is currently rejecting `stdio` servers in `session/new` requests, violating the Agent Client Protocol specification.
4.  **[#3897](https://github.com/github/copilot-cli/issues/3897) [OPEN] Multi-account auth confusion:** Users with both EMU and personal GitHub accounts authenticated are experiencing 403 push failures because the CLI attempts to push with the wrong identity.
5.  **[#3731](https://github.com/github/copilot-cli/issues/3731) [OPEN] Private network `web_fetch` blocked:** A recent change (introduced in 1.0.60) now blocks agents from reading internal corporate network files, breaking enterprise automations. Gained community traction with requests for an opt-in override.
6.  **[#3866](https://github.com/github/copilot-cli/issues/3866) [OPEN] Unreadable reasoning text:** The "Thinking..." text generated during model inference uses hardcoded dim colors, rendering it nearly invisible on dark terminal backgrounds.
7.  **[#2590](https://github.com/github/copilot-cli/issues/2590) [OPEN] Marketplace plugins invisible to ACP:** Plugins installed via local marketplace clones work in the standard CLI but are completely invisible to models when accessed via ACP.
8.  **[#3893](https://github.com/github/copilot-cli/issues/3893) [OPEN] MCP Server namespace collisions:** If multiple plugins register MCP servers with the same name, the CLI silently loads the last installed one. The author requests a warning system.
9.  **[#3894](https://github.com/github/copilot-cli/issues/3894) [OPEN] `agentStop` breaks `/review`:** Custom hooks on `agentStop` are inadvertently triggering on subagent turns, causing infinite loops where code reviews never complete.
10. **[#3898](https://github.com/github/copilot-cli/issues/3898) [OPEN] OSC 11 background color bug:** Custom terminal backgrounds set via `osc 11` result in black text on a dark blue background due to CLI hardcoded foreground assumptions.

### 4. Key PR Progress
*Note: Only 1 active PR was recorded in the last 24 hours.*
1.  **[#3873](https://github.com/github/copilot-cli/pull/3873) [OPEN] Add initial console log for greeting:** A minor UX contribution by `EverydayEvertime` introducing a greeting log upon CLI initialization. 

### 5. Feature Request Trends
*   **Autonomous & Scheduled Agents:** A strong push to evolve Copilot CLI from an interactive tool into a background scheduler (Issue #2056), capable of executing recurring agentic workflows without manual prompting.
*   **Granular AI Parameter Control:** Developers want decoupled API parameters. Specifically, separating "extended thinking" from "reasoning effort" for Anthropic models to better optimize token usage (Issue #3888).
*   **Enterprise Network Flexibility:** Requests to soften the local sandbox restrictions to allow `web_fetch` access to internal corporate networks, acknowledging the needs of enterprise automations (Issue #3731).
*   **MCP/ACP Ecosystem Maturity:** As plugin adoption grows, developers are asking for better namespace collision warnings (Issue #3893) and full protocol compliance for stdio transports (Issue #3889).

### 6. Developer Pain Points
*   **Terminal Theme Compatibility:** The CLI is heavily struggling with custom terminal setups. Hardcoded text colors for "thinking/reasoning" states and poor handling of OSC 11 background escapes are creating frustrating accessibility and readability gaps.
*   **Resource Leakage:** The failure to garbage collect `session-state` GUID directories (Issue #3892) is a severe operational bottleneck for power users, ultimately crashing background IDE processes.
*   **Complex Provider Configurations:** Advanced users leveraging BYOK (Bring Your Own Key) and custom sub-agents are hitting silent failures (Issue #3891), indicating a need for stricter validation during model routing overrides.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the Kimi Code CLI community digest for June 24, 2026.

### 1. Today's Highlights
The Kimi Code CLI community experienced a quiet period over the last 24 hours, with no new version releases, newly opened pull requests, or freshly created issues. Activity was limited to ongoing maintenance, with a brief update on a previously reported bug regarding YOLO mode failing to bypass manual approval prompts. Developers currently have a stable window to integrate the existing v0.12.0 release into their workflows while the team prepares the next batch of updates.

### 2. Releases
*No new releases in the last 24 hours. The CLI remains on version v0.12.0.*

### 3. Hot Issues
*(Based on the 1 issue updated in the last 24 hours)*

*   **[Issue #2448](https://github.com/MoonshotAI/kimi-cli/issues/2448) [bug] Kimi CLI is prompting for approval in yolo mode**
    *   **Why it matters:** "YOLO mode" is critical for developers utilizing Kimi Code CLI in autonomous pipelines, CI/CD environments, or automated bulk-refactoring tasks. If the CLI interrupts the agent loop to ask for human permission, it breaks automation and halts productivity.
    *   **Community Reaction:** The issue recently received a new comment, indicating renewed attention from the maintainers. The community is looking for a swift patch, as this directly impacts the autonomy of the k2.6 model when executing terminal commands on Linux environments.

### 4. Key PR Progress
*No pull requests were created or updated in the last 24 hours.*

### 5. Feature Request Trends
*(Inferred from the active issue and general project trajectory)*

*   **Uninterrupted Autonomous Execution:** A primary trend is the demand for robust, fully autonomous operational modes. Developers want strict guarantees that when "yolo mode" or similar automation flags are enabled, the CLI will execute commands—especially potentially destructive shell commands—without default fallbacks to human approval.
*   **Strict Flag Adherence:** Developers are pushing for the CLI to strictly honor configuration flags over internal safety heuristics, ensuring predictable behavior when integrating the tool into larger, unattended DevOps or CI/CD pipelines.

### 6. Developer Pain Points
*   **Automation Friction:** The most prominent frustration right now is workflow interruption. When utilizing the k2.6 model via API for complex tasks, having the CLI suddenly pause execution to prompt for approval defeats the purpose of an automated AI agent.
*   **State Management on Linux:** Developers running the CLI on Debian/Linux environments are experiencing friction with how the application caches its configuration state (specifically regarding modes like "yolo"), requiring them to monitor background processes rather than trusting the tool to run completely hands-off.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-06-24

## 1. Today's Highlights
Today's focus is on architectural scalability and user experience, headlined by a massive 6-part PR stack introducing a modularized workflow engine. The community is actively engaging in discussions around expanding provider capabilities, improving terminal UI (TUI) navigational efficiency, and refining multi-agent orchestration patterns to prevent early task termination.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[FEATURE]: Adjust Go usage limits after DeepSeek V4 Pro permanent 75% price reduction** ([#28846](https://github.com/anomalyco/opencode/issues/28846))
    *Why it matters:* With the massive price drop for DeepSeek V4 Pro, users are heavily requesting an adjustment to the OpenCode Go subscription usage limits to maximize their token throughput.
*   **[FEATURE]: TUI - Search for and find string in session buffer** ([#4714](https://github.com/anomalyco/opencode/issues/4714))
    *Why it matters:* A highly requested quality-of-life feature. As AI context windows grow, users need a standard text-editor "find" functionality to parse long agent outputs in the TUI.
*   **Have multiple instances of the same provider** ([#6217](https://github.com/anomalyco/opencode/issues/6217))
    *Why it matters:* Users managing multiple API keys (e.g., personal and enterprise OpenRouter accounts) want the ability to group and toggle between identical provider instances in the model selection menu.
*   **Winget installation option for windows** ([#5121](https://github.com/anomalyco/opencode/issues/5121))
    *Why it matters:* Windows users have spotted discrepancies between the official GitHub releases and the community-maintained Winget package (`SST.opencode`), prompting requests for official package ownership.
*   **[FEATURE]: Add skill usage tracking to CLI** ([#22225](https://github.com/anomalyco/opencode/issues/22225))
    *Why it matters:* Developers want analytics on their local agent usage. Tracking skill invocations via a local JSON file will help teams identify their most effective custom workflows.
*   **[FEATURE]: VIM Keyboard Layout** ([#11111](https://github.com/anomalyco/opencode/issues/11111))
    *Why it matters:* Power users are advocating for native VIM keybindings (motions and modes) within the prompt input box to keep their hands on the home row.
*   **Task Tool Timeouts & Early Termination in Multi-Agent Conductor Pattern** ([#6792](https://github.com/anomalyco/opencode/issues/6792))
    *Why it matters:* Critical for enterprise workflows. Orchestrator agents running parallel sub-agents are hitting unexpected timeouts. This highlights stability issues in complex, multi-level agent delegation.
*   **[FEATURE]: Support more DBMS' for OpenCode state storage** ([#14212](https://github.com/anomalyco/opencode/issues/14212))
    *Why it matters:* OpenCode's migration to Drizzle for ORM management has opened the door for PostgreSQL and other DBMS support, a highly requested feature for teams wanting centralized state storage.
*   **Desktop v1.16.0 converts WSL `/mnt/c/...` workspace to Windows `C:\...` path** ([#30895](https://github.com/anomalyco/opencode/issues/30895))
    *Why it matters:* A breaking bug for Windows/WSL developers. Path translation issues between the Tauri desktop client and the WSL server are causing workspace loading and file-read failures.
*   **opencode deleted Node.js and corrupted PATH environment variable** ([#32080](https://github.com/anomalyco/opencode/issues/32080))
    *Why it matters:* A severe system-level bug reported on Windows where an agent installing Graphviz catastrophically corrupted the system PATH and deleted Node.js. Highlights the ongoing need for stricter agent sandboxing on Windows environments.

## 4. Key PR Progress
Significant strides were made today in pull requests, focusing on a new workflow engine and UI refinements:

*   **feat(workflow): engine-core (1/6)** ([#32390](https://github.com/anomalyco/opencode/pull/32390)) - The first of a massive 6-part stack. This extracts the core workflow engine into `packages/opencode`, setting the foundation for complex visual and programmatic task routing.
*   **feat(workflow): server routes + SDK (2/6)** ([#32392](https://github.com/anomalyco/opencode/pull/32392)) - Introduces the HTTP API endpoints and regenerates the SDK client types to support the new workflow engine.
*   **feat(workflow): web app + desktop (4/6)** ([#32394](https://github.com/anomalyco/opencode/pull/32394)) - Brings workflow support to the Tauri desktop app, adding dashboard surfaces and run/approval dialogs.
*   **feat: nested sub-agent spawning (up to 5 levels)** ([#32301](https://github.com/anomalyco/opencode/pull/32301)) - A major architectural update allowing sub-agents to spawn their own sub-agents recursively up to 5 levels deep, fixing previous depth-transition crashes.
*   **feat(sdk): add HttpApi clients and embedded host** ([#33445](https://github.com/anomalyco/opencode/pull/33445)) - Introduces an `httpapi-codegen` compiler to auto-generate Promise and Effect clients directly from HttpApi contracts, vastly improving SDK maintainability.
*   **fix(tui): Old messages disappearing during long sessions** ([#26861](https://github.com/anomalyco/opencode/pull/26861)) - Implements lazy-scroll loading in the TUI. Scrolling up now dynamically fetches older messages, saving memory and preventing UI truncation in long context chats.
*   **fix(opencode): scope --continue to the current worktree directory** ([#33521](https://github.com/anomalyco/opencode/pull/33521)) - Fixes a context bug where running `opencode --continue` inside a git worktree would accidentally pull the session state from the main repository branch.
*   **fix: honor model limit overrides** ([#33552](https://github.com/anomalyco/opencode/pull/33552)) - Resolves bugs where user-configured model rate limits and compaction opt-outs were silently ignored during provider routing.
*   **fix: Home and End keys** ([#33554](https://github.com/anomalyco/opencode/pull/33554)) - Fixes a frustrating prompt input bug where Home/End keys failed to move the text cursor.
*   **feat: enforce tagged error messages** ([#33553](https://github.com/anomalyco/opencode/pull/33553)) - Implements an Oxlint repository rule requiring structured `Schema.TaggedErrorClass` declarations, moving the codebase away from squashed `unknown` errors to highly debuggable error messages.

## 5. Feature Request Trends
*   **Advanced Multi-Agent Orchestration:** There is a strong push toward complex agent topologies. Users are requesting nested sub-agent spawning, granular tool-level permissions per agent, and reliable "Conductor" patterns for parallel execution.
*   **IDE & TUI Parity:** Developers want the CLI/TUI to behave like modern text editors. Highly upvoted requests include VIM keyboard layouts, string search within session buffers, and customizable submit/newline keybinds.
*   **Flexible Provider & Model Routing:** With fluctuating LLM prices, users want dynamic usage limits, the ability to load multiple instances of the same provider (e.g., dual OpenRouter accounts), and finer control over model modes (like disabling "Thinking" modes by default).
*   **Enterprise State & Plugin Management:** Requests for centralized database support (PostgreSQL via Drizzle) and local skill usage tracking indicate a trend of teams adopting OpenCode for structured, enterprise-level workflows.

## 6. Developer Pain Points
*   **Windows & WSL Path Instability:** The Tauri desktop client and CLI continue to struggle with WSL path translations (`/mnt/c/` vs `C:\`), frequently breaking file system reads. Furthermore, a severe bug involving agent-driven package installations wiping the Windows PATH environment variable highlights critical sandboxing concerns.
*   **Unpredictable Context/Agent Linking:** Developers are frustrated when the AI ignores paths defined in `AGENTS.md` or when built-in sub-agents (like Scout) mysteriously vanish from the `@` autocomplete menu.
*   **Opaque Error Messaging:** Multiple PRs today targeted "squashed" or unknown errors. Developers have been struggling to debug tool failures and provider connection issues because the core system was discarding structured error data in favor of generic exceptions.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community on 2026-06-24.

### 1. Today's Highlights
Pi rolled out three rapid-fire patch releases (v0.80.0 to v0.80.2) focusing on overarching API refactors and provider stability, but inadvertently introduced breaking changes for several local and third-party models. Community efforts are currently heavily divided between fixing provider endpoint routing (DeepSeek, Nvidia, Cloudflare) and advancing sophisticated multi-agent UI and orchestration capabilities. 

### 2. Releases
*   **[v0.80.2](https://github.com/badlogic/pi-mono/releases/tag/v0.80.2):** Changed inherited `ApiKeyCredential` to use the `auth.json`-compatible discriminator `type: "api_key"`, and renamed the agent-core public harness shell execution options type.
*   **[v0.80.1](https://github.com/badlogic/pi-mono/releases/tag/v0.80.1):** Targeted provider fixes, resolving Amazon Bedrock scoped `AWS_PROFILE` endpoint inference and fixing Togetherness/Fireworks Anthropic-compatible requests for custom models.
*   **[v0.80.0](https://github.com/badlogic/pi-mono/releases/tag/v0.80.0):** Added `Ctrl+J` as a default newline keybinding. Renamed the `zai` provider label to "ZAI Coding Plan (Global)" for clarity, and removed pi-ai's old global API (`stream`/`complete`).

### 3. Hot Issues
*   **[#6020](https://github.com/earendil-works/pi/issues/6020) DeepSeek provider broken in 0.80:** The v0.80 update broke the DeepSeek provider due to an unrecognized `developer` role variant in API payloads, causing serialization failures.
*   **[#6016](https://github.com/earendil-works/pi/issues/6016) & [#6017](https://github.com/earendil-works/pi/issues/6017) Nvidia & Local Models broken in 0.80.1:** Users reported `streamSimpleOpenAICompletions is not a function` when using Nvidia or local plugins (like Ollama). This highlights instability in the v0.80.x OpenAI-completions adapter path.
*   **[#6021](https://github.com/earendil-works/pi/issues/6021) Cloudflare Workers.AI 404s:** Cloudflare integrations broke in v0.80.1 due to malformed URL encoding of the `CLOUDFLARE_ACCOUNT_ID` in API base URLs.
*   **[#5825](https://github.com/earendil-works/pi/issues/5825) TUI markdown scroll bug:** A highly discussed bug (29 comments) where streaming markdown forces a scroll to the bottom if the user scrolls up to read while the agent is still generating output. 
*   **[#5989](https://github.com/earendil-works/pi/issues/5989) Extension breakage:** The v0.80 update broke compatibility with popular community extensions like `pi-lovely-codex` due to internal API interface changes.
*   **[#6002](https://github.com/earendil-works/pi/issues/6002) Dangerous file truncation:** A critical bug where `SessionManager.open()` silently truncates non-session files (e.g., 3.2MB log files) to 133-byte headers without warning if passed via `--session`.
*   **[#5700](https://github.com/earendil-works/pi/issues/5700) Concurrent Agent Sessions:** Users are requesting the ability to juggle multiple live agent sessions with TUI switching, rather than tearing down the current session to start a new one.
*   **[#6011](https://github.com/earendil-works/pi/issues/6011) AgentSwarm TUI visibility:** Users want a visual TUI dashboard to track multi-agent execution states (pending, running, completed) and outputs, which are currently invisible.
*   **[#5556](https://github.com/earendil-works/pi/issues/5556) Session memory bloat:** `buildSessionInfo()` still retains full transcript text in `allMessagesText`, causing memory overhead during session search/listing operations.
*   **[#6023](https://github.com/earendil-works/pi/issues/6023) Codex Responses API rejection:** Codex is rejecting follow-up requests when replaying `reasoning` items with `encrypted_content`, breaking multi-turn context continuity.

### 4. Key PR Progress
*   **[#6022](https://github.com/earendil-works/pi/pull/6022) fix(ai): omit reasoning replay items for Codex responses:** Fixes the Codex API 400 error by adding an option to omit unsupported reasoning items during API replay.
*   **[#6018](https://github.com/earendil-works/pi/pull/6018) feature(coding-agent): show context estimates in session tree:** Enhances the TUI by displaying token context estimates next to session branches, allowing users to quickly spot heavy agent operations.
*   **[#5832](https://github.com/earendil-works/pi/pull/5832) fix(ai): surface provider HTTP error body:** Replaces opaque SDK errors with actual HTTP response bodies, drastically improving debuggability behind proxies/gateways.
*   **[#6004](https://github.com/earendil-works/pi/pull/6004) feat: Normalize Foundry Responses API endpoints:** Fixes Azure OpenAI compatibility by correctly normalizing modern Microsoft Foundry `*.ai.azure.com` endpoints.
*   **[#5262](https://github.com/earendil-works/pi/pull/5262) feat(ai): add Anthropic Vertex provider:** Adds a native built-in adapter for running Claude models via Google Cloud Vertex AI.
*   **[#5784](https://github.com/earendil-works/pi/pull/5784) fix(coding-agent): sort threaded sessions:** Refactors Threaded mode to sort sessions by latest subtree activity rather than root creation date, aiding long-running project management.
*   **[#5999](https://github.com/earendil-works/pi/pull/5999) fix(coding-agent): normalize session names:** Fixes a TUI rendering bug where literal `\n` characters in LLM-generated session names broke the editor layout.
*   **[#5994](https://github.com/earendil-works/pi/pull/5994) fix(ai): route OpenCode Go models through Anthropic:** Correctly identifies Anthropic-compatible metadata on OpenCode and forces the Anthropic SDK path instead of standard OpenAI `/v1/chat/completions`.
*   **[#5987](https://github.com/earendil-works/pi/pull/5987) fix(coding-agent): resolve --session by agent name:** Upgrades the identity daemon so users can pass friendly agent names (e.g., `lucid-gecko-24`) via `--session` instead of raw file paths.
*   **[#5526](https://github.com/earendil-works/pi/pull/5526) Require terminal events for OpenAI Responses:** Fixes an issue where OpenAI streams randomly hung, forcing users to type "continue", by enforcing strict terminal response events.

### 5. Feature Request Trends
*   **Multi-Agent Orchestration & UI:** A strong demand for "AgentSwarm" and "AgentTeam" architectures. Users want native slash commands (`/swarm`) and rich TUI dashboards to visualize real-time execution states and sub-agent outputs (Issues #6011, #6012, #6014).
*   **Session & Context Management:** Improved transparency into session metrics, such as visualizing token context estimates directly in the session tree, and the ability to maintain multiple live, concurrent agent sessions (Issues #5700, #5909).
*   **Developer & Tooling Hooks:** Expanding extension capabilities, such as requests for `after_provider_response` hooks to expose raw API responses before the core agent parses them (Issue #5730).
*   **New Provider Integrations:** Continued requests to fold popular gateways and APIs directly into Pi's core, including Merge Gateway and MiniMax image generation (Issues #5986, #6024).

### 6. Developer Pain Points
*   **v0.80.x Regression Instability:** The transition to the new global API and refactored OpenAI completion paths in v0.80 has caused widespread breakage. Developers relying on Nvidia, Cloudflare, DeepSeek, and local models are being forced to pin to v0.79.10 to maintain functionality.
*   **Opaque Provider Errors:** Proxy and gateway debugging remains highly frustrating due to swallowed HTTP error bodies. Developers strongly desire native visibility into raw HTTP 4xx/5xx responses rather than generic SDK errors (Addressed in PR #5832).
*   **Data Loss & File Truncation:** Unforgiving CLI edge cases, such as `SessionManager` destroying non-session log files without backups or prompts, undermine trust in the agent handling local filesystems safely (Issue #6002).
*   **Extension Maintenance Burden:** Frequent core refactors (like renaming execution options and changing API discriminators) are breaking community extensions, requiring constant patching by third-party maintainers (Issue #5989).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for June 24, 2026.

### 1. Today's Highlights
Qwen Code rolled out versions **v0.19.0 and v0.19.1**, focusing heavily on enhancing Model Context Protocol (MCP) resource discovery and automating the VSCode companion publishing pipeline. The community was highly active in hardening CLI and core validation logic—largely spearheaded by contributor `tt-a1i`—while also proposing exciting new architectural shifts, such as a persistent `qwen daemon` service and a revived Chrome extension integration.

### 2. Releases
*   **[v0.19.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.1)**
    *   **feat(cli):** Enhanced MCP resource completions to match by name and improved server discovery ([PR #5733](https://github.com/QwenLM/qwen-code/pull/5733) by @wenshao).
*   **[v0.19.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.0)**
    *   **ci(release):** Implemented auto-publishing for the VSCode companion immediately following stable releases ([PR #5558](https://github.com/QwenLM/qwen-code/pull/5558) by @yiliang114).

### 3. Hot Issues
1.  **[Issue #5758](https://github.com/QwenLM/qwen-code/issues/5758): Protocol / AuthType Decoupling**
    *   *Why it matters:* Highlights a friction point where CLI configs (`modelId` + `baseUrl`) don't translate cleanly to ACP/VSCode (`providerId` + `modelId`). Sparks deep discussion on standardizing SDK routing.
2.  **[Issue #5761](https://github.com/QwenLM/qwen-code/issues/5761): Model Selector UI Bug**
    *   *Why it matters:* A high-priority (P2) UI glitch where the dropdown shows two checked models simultaneously and the status bar displays the wrong plan, indicating state-management drift in the UI.
3.  **[Issue #5736](https://github.com/QwenLM/qwen-code/issues/5736): Increased Full Prompt Reprocessing**
    *   *Why it matters:* Users leveraging local LLMs (via llama.cpp) report performance regressions, noting that recent updates cause the model to needlessly re-process the full context during continuous chats.
4.  **[Issue #5768](https://github.com/QwenLM/qwen-code/issues/5768): Proposal for `qwen daemon`**
    *   *Why it matters:* Outlines a major architectural request to introduce an optional persistent background process (managed by systemd/launchd) to power durable cron jobs and background loops without a foreground CLI.
5.  **[Issue #5782](https://github.com/QwenLM/qwen-code/issues/5782): WebFetch Security Vulnerability**
    *   *Why it matters:* Points out that `WebFetch` accepts URLs with embedded userinfo (e.g., `user:pass@host`), posing a credential leakage risk in diagnostic logs.
6.  **[Issue #5749](https://github.com/QwenLM/qwen-code/issues/5749): Guards Against Destructive Git Commands**
    *   *Why it matters:* Requests deterministic, hard-coded blocks for commands like `git reset --hard` or `git clean -fd` when the agent operates in autonomous "auto mode" to prevent silent work loss.
7.  **[Issue #5734](https://github.com/QwenLM/qwen-code/issues/5734): Fork Subagent Hardening**
    *   *Why it matters:* Exposes two critical gaps in detached background agents: unbounded turn counts (causing token burn) and auto-denied permission gates failing silently.
8.  **[Issue #5708](https://github.com/QwenLM/qwen-code/issues/5708): Negative Session List Cursors**
    *   *Why it matters:* A P3 bug where unsafe numeric values are accepted as pagination cursors, reflecting a broader pattern of loose type validation in the CLI.
9.  **[Issue #5626](https://github.com/QwenLM/qwen-code/issues/5626): Revive Chrome Extension via Daemon**
    *   *Why it matters:* A strategic proposal to abandon the complex Native Messaging host architecture in favor of connecting the browser extension directly to a local `qwen serve` daemon.
10. **[Issue #4488](https://github.com/QwenLM/qwen-code/issues/4488): VSCode Sidebar Flickering/Disappearing**
    *   *Why it matters:* A highly-commented bug where the plugin fails to anchor in newer VSCode versions (1.120.0+), heavily impacting user onboarding.

### 4. Key PR Progress
1.  **[PR #5781](https://github.com/QwenLM/qwen-code/pull/5781): Expose MCP Resource Read Tool** by @yiliang114
    *   Empowers the LLM to autonomously read MCP resources by server name and URI during tool-calls, removing the need for manual `@` injections.
2.  **[PR #5765](https://github.com/QwenLM/qwen-code/pull/5765) & [PR #5755](https://github.com/QwenLM/qwen-code/pull/5755): Voice APIs & Web Shell Dictation** by @doudouOUC, @qqqys
    *   Introduces client-side voice configuration and streams microphone data over WebSockets to the daemon for server-side transcription.
3.  **[PR #5778](https://github.com/QwenLM/qwen-code/pull/5778): Add `/model --vision`** by @yiliang114
    *   Adds a much-requested interactive picker to set a fallback vision-capable model when using text-only primary models.
4.  **[PR #5785](https://github.com/QwenLM/qwen-code/pull/5785): Optimize Serve Daemon Startup** by @doudouOUC
    *   Massively improves startup time by creating a "slim fast path" that defers React/Ink and full settings loads until after the HTTP listener is live.
5.  **[PR #5743](https://github.com/QwenLM/qwen-code/pull/5743): Workspace Permissions Rules API** by @doudouOUC
    *   Establishes a persistent remote daemon surface to handle `allow`, `ask`, and `deny` lists for user and workspace scopes.
6.  **[PR #5777](https://github.com/QwenLM/qwen-code/pull/5777): Revive Chrome Extension** by @yiliang114
    *   Implements the architecture proposed in #5626, turning the Chrome extension into a lightweight client that communicates directly with the local daemon via HTTP+SSE.
7.  **[PR #5780](https://github.com/QwenLM/qwen-code/pull/5780): Add `qwen update`** by @liziwl
    *   Introduces built-in CLI and slash commands to automatically query the npm registry and apply standalone updates.
8.  **[PR #5747](https://github.com/QwenLM/qwen-code/pull/5747): Bundle Audio Capture** by @qqqys
    *   Fixes package mirroring issues by bundling native voice capture build artifacts directly into the published npm package.
9.  **[PR #4947](https://github.com/QwenLM/qwen-code/pull/4947): Workflow P2 - Parallel/Pipeline** by @LaZzyMan
    *   Implements dynamic concurrent fan-out primitives, allowing up to 16 parallel agents to run in flight via a sliding window.
10. **[PR #5652](https://github.com/QwenLM/qwen-code/pull/5652): Require Integer Microcompaction Keep Count** by @tt-a1i
    *   A prime example of this week's validation hardening push, ensuring environment variables handling array slicing aren't coerced into dangerous fractions.

### 5. Feature Request Trends
*   **Daemon & Background Architecture:** There is a massive community push to evolve Qwen Code from a foreground CLI into a persistent system service. Users want durable background agents, cron scheduling, and browser integrations all hosted by a resident `qwen daemon` ([Issue #5768](https://github.com/QwenLM/qwen-code/issues/5768), [Issue #5626](https://github.com/QwenLM/qwen-code/issues/5626), [PR #5777](https://github.com/QwenLM/qwen-code/pull/5777)).
*   **Granular Model Routing:** Users desire more dynamic model switching, specifically decoupling text inference from vision processing. The request for `/model --vision` fallbacks allows developers to pair fast, cheap text models with capable vision models ([PR #5778](https://github.com/QwenLM/qwen-code/pull/5778), [Issue #5758](https://github.com/QwenLM/qwen-code/issues/5758)).
*   **Agent Autonomy Safeties:** As auto-mode and fire-and-forget fork subagents grow in capability, developers are requesting hard limits—such as turn caps and blocked destructive git commands—to prevent runaway token burn or accidental data deletion ([Issue #5749](https://github.com/QwenLM/qwen-code/issues/5749), [Issue #5734](https://github.com/QwenLM/qwen-code/issues/5734)).

### 6. Developer Pain Points
*   **Pervasive Type Coercion Flaws:** An overwhelming trend this cycle was the discovery that countless CLI arguments, LSP parameters, and environment variables (e.g., `maxSessions`, `limit`, `maxRestarts`) silently accept fractional or negative numbers. While many of these "fractional value" bugs have been swiftly closed, it highlights a frustrating DX where JSON schema validation has historically been too loose ([Issue #5704](https://github.com/QwenLM/qwen-code/issues/5704), [Issue #5690](https://github.com/QwenLM/qwen-code/issues/5690), [Issue #5692](https://github.com/QwenLM/qwen-code/issues/5692)).
*   **IDE Integration Instability:** A significant portion of user friction stems from IDE companion apps. Issues ranging from the plugin disappearing in newer VSCode versions ([Issue #4488](https://github.com/QwenLM/qwen-code/issues/4488)) to 401 auth failures in JetBrains ([Issue #3757](https://github.com/QwenLM/qwen-code/issues/3757)) indicate that cross-platform UI and auth state management remain fragile.
*   **Context Management Overhead:** Local LLM developers are experiencing performance degradation due to the system needlessly forcing full prompt re-processing during multi-turn conversations ([Issue #5736](https://github.com/QwenLM/qwen-code/issues/5736)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek TUI (CodeWhale) based on the June 24, 2026 data snapshot.

### 1. Today's Highlights
The CodeWhale (formerly DeepSeek TUI) project is undergoing a massive architectural overhaul centered on the **v0.8.65 release**, focusing heavily on decoupling provider configurations, model routing, and execution logic. While the maintainer notes that v0.8.65 is not yet release-ready (with 0 of 25 milestone issues closeable), today saw a flurry of foundational PR merges implementing the new "Fleet" execution substrate, cross-provider model routing, and UI hardening. 

### 2. Releases
No new releases were published in the last 24 hours. The project remains focused on stabilizing the `v0.8.65` milestone and clearing the issue backlog before tagging a new public release.

### 3. Hot Issues
1. **Security Hardening Tracker** ([#3368](https://github.com/Hmbown/CodeWhale/issues/3368)): The maintainer has opened a public tracker for v0.8.64 security fixes derived from CodeQL and advisory reports, ensuring release gates are met without exposing exploit details.
2. **TUI Stalling in YOLO Mode** ([#2487](https://github.com/Hmbown/CodeWhale/issues/2487)): A critical bug where autonomous `yolo` operations freeze and display "Turn stalled - no completion signal received," requiring a hard restart. 
3. **Auto-Review Policy Request** ([#3144](https://github.com/Hmbown/CodeWhale/issues/3144)): Proposed enhancement to add natural-language auto-review and pre-push gates, taking inspiration from Cursor's recent Bugbot and custom tool implementations.
4. **Agent Self-Answering Loops** ([#3275](https://github.com/Hmbown/CodeWhale/issues/3275)): A regression where the agent over-extends its scope, entering a self-driven loop of proposing, answering, and executing tasks without waiting for user confirmation.
5. **Inline Reasoning Stream Overrides** ([#3222](https://github.com/Hmbown/CodeWhale/issues/3222)): Request to support style overrides for `<think>...</think>` blocks so OpenAI-compatible gateways can display inline reasoning correctly without breaking the UI.
6. **Windows Crossterm Freezing** ([#1812](https://github.com/Hmbown/CodeWhale/issues/1812)): DeepSeek TUI intermittently freezes on Windows 11, remaining alive but completely unresponsive to keyboard input or screen updates.
7. **Provider/Model Fact Separation EPIC** ([#2608](https://github.com/Hmbown/CodeWhale/issues/2608)): The core architectural issue for v0.8.65. It aims to stop the engine from mixing provider identity, model identity, and wire IDs, enforcing that a model string alone is never enough to select a route.
8. **Live Catalogs & Secret-free Caching** ([#3385](https://github.com/Hmbown/CodeWhale/issues/3385)): Proposal to add provider-owned live model catalogs so custom endpoints can expose current models without relying on hardcoded lists or leaking secrets.
9. **Request for Zhipu GLM-5.2 Provider** ([#3439](https://github.com/Hmbown/CodeWhale/issues/3439)): The community wants to integrate GLM-5.2 as a provider route specifically for sub-agent delegation in long-document and Chinese language creation scenarios.
10. **Lack of Cross-Session Memory** ([#2492](https://github.com/Hmbown/CodeWhale/issues/2492)): Users are frustrated that the agent forgets previous sessions on restart and fails to proactively read forced memory injections.

### 4. Key PR Progress
1. **[feat(config): Models.dev-backed catalog snapshot + secret-free live cache #3498](https://github.com/Hmbown/CodeWhale/pull/3498)**: Implements the data layer for issue #3385, introducing reusable provider-catalog types and a secret-free cache to feed the new routing engine.
2. **[feat(tui): resolve provider switches through an atomic RouteCandidate #3492](https://github.com/Hmbown/CodeWhale/pull/3492)**: Realizes issue #3384, ensuring all provider/model switches are resolved through a single, testable route candidate to prevent partial state mutations.
3. **[feat(config): offering pricing projection with provenance #3501](https://github.com/Hmbown/CodeWhale/pull/3501)**: Overhauls pricing telemetry so that route costs are tied to the specific provider offering rather than a generic model string.
4. **[test(config): provider descriptor conformance #3502](https://github.com/Hmbown/CodeWhale/pull/3502)**: Adds a network-free conformance suite that pins behavior for all 27 shipped `ProviderKind`s, ensuring CI fails if a provider lacks proper descriptor wiring.
5. **[feat(memory): v2 memory system #2933](https://github.com/Hmbown/CodeWhale/pull/2933)**: Upgrades the hippocampal memory system to v2, featuring namespaces, rollback capabilities, auto-injection, and a background daemon for persistent context.
6. **[docs: add v0.8.65 release ledger #3493](https://github.com/Hmbown/CodeWhale/pull/3493)**: Documents the current state of the v0.8.65 release, explicitly outlining that major Fleet substrate architecture is still required before release.
7. **[fix: prevent ordinary prompt text from being interpreted as a mode switch #3491](https://github.com/Hmbown/CodeWhale/pull/3491)**: Fixes a bug where unrecognized text in prompts could silently trigger unintended application mode switches.
8. **[feat(tui): add cross-provider model picker search #3484](https://github.com/Hmbown/CodeWhale/pull/3484)**: Enhances the `/model` command to allow cross-provider searching, returning explicit provider-labeled routes instead of ambiguous model mutations.
9. **[Add provider readiness dashboard rows #3485](https://github.com/Hmbown/CodeWhale/pull/3485)**: Replaces the `/provider` picker with a detailed dashboard showing auth status, catalog state, protocol, and usage class.
10. **[docs: add Orchestration disposition + Fleet design note #3470](https://github.com/Hmbown/CodeWhale/pull/3470)**: Introduces the philosophical and architectural design notes for the new "Fleet" execution substrate (Track B / EPIC #3154).

### 5. Feature Request Trends
*   **Multi-Provider Routing & Fleet Substrate**: The overwhelming trend is the transition from a single-model focus to a "many-provider" architecture. Users want explicit provider scopes, automatic fallbacks, and custom loadouts (Fleet profiles) for sub-agents.
*   **Agent Visibility & Telemetry**: Developers are requesting rich UI indicators for agent resource usage—including elapsed time, token budget pressure, context window limits, and API costs during long-running tasks.
*   **Memory & Persistence**: There is a strong demand for reliable cross-session memory, including user-defined personas and auto-injected context windows that persist across application restarts.
*   **Enhanced UI Artifact Loops**: Drawing inspiration from tools like Cursor, users want visual inspection artifacts (like screenshots and layout context) fed back into the agent during browser/UI development tasks.

### 6. Developer Pain Points
*   **UI Reliability & Freezing**: Windows users continue to face severe TUI freezing issues. Additionally, the agent sometimes completely stalls during autonomous ("yolo") execution, failing to send completion signals.
*   **Agent Hallucination & Scope Creep**: When using autonomous modes, developers are frustrated when the agent over-extends its scope, ignoring user intent and getting stuck in self-questioning/self-answering loops.
*   **Configuration Discoverability**: Many powerful configuration knobs exist in `config.toml`, but users complain they cannot easily discover, edit, or validate these settings from the TUI itself.
*   **Clunky UX Chrome**: Minor UI frictions remain a pain point, such as output being hard to copy, intrusive approval modals blocking the main interface, and low-contrast text in selection pickers.

</details>