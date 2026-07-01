# AI CLI Tools Community Digest 2026-07-02

> Generated: 2026-07-01 22:24 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the July 2, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem in mid-2026 is characterized by rapid maturation, shifting from simple code generators to autonomous, multi-agent background services. Major players like OpenAI, Anthropic, and Google are heavily investing in native desktop applications and enterprise-grade ecosystem integrations, while smaller open-source challengers compete on local model support, customizability, and developer UX. A shared industry-wide focus on standardizing tool-calling protocols (Model Context Protocol) and optimizing token context windows is emerging as these tools scale to handle complex, long-running software engineering tasks. 

### 2. Activity Comparison
*Note: Data reflects recorded GitHub activity from the 24-hour window of July 2, 2026.*

| Tool | Issues (24h) | PRs (24h) | Release Status | Primary Development Focus |
| :--- | :---: | :---: | :--- | :--- |
| **OpenAI Codex** | 10 | 10 | Stable (`v0.142.5`), Alpha (`v0.143.0`) | Git security hardening, multi-agent logging, Windows stability |
| **Gemini CLI** | 10 | 10 | Nightly (`v0.51.0`) | AST-aware tooling, SSRF/symlink patching, subagent reliability |
| **Claude Code** | 10 | 2 | Stable (`v2.1.198`) | Chrome GA extension, background agents, fixing AUP false-positives |
| **GitHub Copilot CLI** | 10 | 1 | Stable (`v1.0.68`) | Model expansion (Kimi k2.7), IDE resilience, plugin/MCP scoping |
| **OpenCode** | 10 | 10 | Stable (`v1.17.13`) | Multi-session grid UI, V2 plugin architecture, local model compat |
| **Qwen Code** | 10 | 10 | Stable (`v0.19.4`) | Background scheduling, model fallback, daemon lifecycle |
| **CodeWhale (DeepSeek)**| 10 | 10 | Stable (`v0.8.66`) | Rebranding, dynamic MCP creation, constitution-first setup |
| **Pi** | 10 | 10 | Pre-release | Cloud provider expansion (Vertex, Bedrock), AOT compilation |
| **Kimi Code CLI** | 4 | 2 | Pre-release | Cross-platform compat, goal/state persistence, rebranding |

### 3. Shared Feature Directions
*   **Advanced Context & Token Management:** As context limits are easily exhausted during deep programming tasks, communities are demanding better compaction and memory controls. *Copilot CLI* and *OpenCode* are battling infinite compaction loops, while *Qwen Code*, *Kimi Code*, and *Pi* are introducing file-based goal offloading, lazy-loading memory, and `excludeFromContext` features to preserve token limits.
*   **Local Model & OpenAI-Compatible Support:** Developers want flexibility beyond first-party APIs. *OpenCode* and *Qwen Code* are heavily focused on fixing tool-calling formatting bugs for local models (e.g., Qwen variants via LM Studio/Ollama), while *Pi* is rapidly adding cloud gateways (AWS Bedrock Mantle, Anthropic Vertex) and local backend concurrency limits.
*   **Granular Permissions & MCP Security:** As AI agents gain more system access, users want strict boundaries. *GitHub Copilot CLI* and *OpenAI Codex* are exploring project-scoped plugins, global allowed-tools lists, and Git patch security. *CodeWhale* is prioritizing a "constitution-first" runtime posture, while *Gemini CLI* patches severe MCP OAuth/SSRF vulnerabilities.
*   **Cross-Platform Friction:** Non-Unix environments remain a major pain point. Windows and WSL2 users are facing severe bugs across *OpenAI Codex* (Defender CPU spikes), *OpenCode* (UNC path breakages), *Pi* (OAuth login hangs), and *Kimi Code* (clipboard media pasting).

### 4. Differentiation Analysis
*   **First-Party vs. Third-Party Providers:** Tools like *Claude Code*, *OpenAI Codex*, and *Gemini CLI* focus strictly on their native models while pushing desktop app parity and native cloud extensions. In contrast, *OpenCode*, *Pi*, and *GitHub Copilot CLI* act as agnostic aggregators, focusing heavily on BYOK (Bring Your Own Key), concurrent multi-model routing, and local LLM tool-call standardization.
*   **Ecosystem UX vs. Core Engine:** *GitHub Copilot CLI* and *Claude Code* are doubling down on IDE and browser integrations (e.g., Copilot's `kimi-k2.7` routing, Claude's Chrome GA). Meanwhile, *Qwen Code* and *Gemini CLI* are making architectural bets on background execution (cron daemons) and AST-aware file reading to fundamentally reduce token bloat.
*   **Target Audience:** *CodeWhale* is leaning into highly customizable "runtime postures" for power users comfortable with TUI configurations. *OpenAI Codex* and *OpenCode* are targeting heavy enterprise/developer workflows with multi-agent grid views and robust OpenTelemetry (OTEL) observability stacks.

### 5. Community Momentum & Maturity
*   **Hyper-Active Enterprise Cadence:** *OpenAI Codex*, *Gemini CLI*, and *OpenCode* show the highest raw volume of activity today, each pushing 10 substantial PRs alongside triaging 10 major issues. They are rapidly iterating on core architectural flaws (Windows stability, Git hardening, multi-agent logging).
*   **Stable Maturation:** *Claude Code* is stabilizing its enterprise features (Chrome GA, background agents) but is currently facing scale-related friction, specifically an influx of false-positive cybersecurity safety filters blocking legitimate devops workflows.
*   **Emerging Agnostic Competitors:** *Pi* and *Qwen Code* demonstrate strong momentum in foundational architecture—implementing SQLite session storage, AOT compilation, and background scheduling—positioning themselves as highly modular alternatives to the walled gardens of the Big 3.

### 6. Trend Signals for Developers
*   **The Death of the "Dumb File Reader":** *Gemini CLI’s* push for AST-aware file reads signals a shift in how agents parse codebases. Developers should expect upcoming tools to map syntax trees rather than read raw files, drastically reducing token noise and improving navigational accuracy.
*   **Dynamic Tool Generation over Static Configs:** *CodeWhale's* introduction of an LLM tool that dynamically spins up MCP servers from chat context suggests a future where agents build, use, and discard their own tooling on the fly, rather than relying on static JSON configurations.
*   **Compaction as a Primary Bottleneck:** The recurring "Plan→Compact→Re-Plan" loops seen across multiple tools indicate that standard LLM context windows are fundamentally bottlenecking autonomous workflows. Solutions are diverging between deterministic memory redaction (*Gemini CLI*), SQL-backed session storage (*Pi*), and file-based state offloading (*Kimi Code*).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report based on recent repository activity. 

### 1. Top Skills Ranking
*Due to missing comment counts on recent PRs, this ranking is determined by the highest level of community engagement, issue cross-referencing, and ecosystem impact.*

*   **[Meta] Skill-Creator & Eval Optimizer** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
    *   **Functionality:** Critical infrastructure fix for the `run_eval.py` script, which serves as the engine for evaluating and auto-optimizing Skill descriptions.
    *   **Discussion Highlights:** This addresses a systemic failure where the optimization loop was reporting 0% recall across all queries, effectively rendering the auto-evaluation tools useless. It also patches Windows-specific execution bugs.
    *   **Status:** Open
*   **[Meta] Skill Quality & Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83))
    *   **Functionality:** Introduces two meta-skills designed to audit other skills, checking for structural quality (documentation, examples) and security vulnerabilities. 
    *   **Discussion Highlights:** A highly impactful addition that directly addresses the security and trust boundary concerns raised by the community regarding third-party skills.
    *   **Status:** Open
*   **[Workflow] Self-Audit Reasoning Gate** ([PR #1367](https://github.com/anthropics/skills/pull/1367))
    *   **Functionality:** A universal pre-delivery quality gate that audits AI output across four dimensions: Completeness, Consistency, Grounding, and specific project criteria before execution.
    *   **Discussion Highlights:** Reflects a strong community desire for autonomous, self-correcting agentic workflows rather than purely reactive code generation.
    *   **Status:** Open
*   **[Automation] Sensory (macOS Automation)** ([PR #806](https://github.com/anthropics/skills/pull/806))
    *   **Functionality:** Enables Claude to execute native macOS automation using `osascript` (AppleScript) via a two-tier permission system, bypassing the need for slow screenshot-based UI interactions.
    *   **Discussion Highlights:** Highly praised as a practical alternative to visual computer use, offering faster, more reliable local environment manipulation.
    *   **Status:** Open
*   **[Formatting] Document Typography Skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Automatically prevents common typographical errors in AI-generated documents, such as orphan words, widow paragraphs, and numbering misalignments.
    *   **Discussion Highlights:** Users noted that while they rarely ask for good typography, its absence makes AI-generated documents look highly unprofessional, making this an essential "quality of life" skill.
    *   **Status:** Open

### 2. Community Demand Trends
Based on open Issues, the community is pushing heavily for the following capabilities:
*   **Enterprise & Team Collaboration:** Users want native ways to share skills across organizations without manual file transfers ([Issue #228](https://github.com/anthropics/skills/issues/228)) and better integration with enterprise platforms like SharePoint ([Issue #1175](https://github.com/anthropics/skills/issues/1175)).
*   **Agent Memory & State Management:** Proposals like `compact-memory` ([Issue #1329](https://github.com/anthropics/skills/issues/1329)) highlight a demand for skills that help agents efficiently manage long-term context and persistent memory using symbolic notation.
*   **Security & Governance Frameworks:** A critical demand for strict sandboxing, trust scoring, and policy enforcement skills to prevent malicious code execution and namespace impersonation ([Issue #492](https://github.com/anthropics/skills/issues/492), [Issue #412](https://github.com/anthropics/skills/issues/412)).
*   **MCP / API Interoperability:** Requests to bridge the gap between Skills and the Model Context Protocol (MCP), allowing skills to be exposed programmatically as API endpoints ([Issue #16](https://github.com/anthropics/skills/issues/16)).

### 3. High-Potential Pending Skills
These active, problem-solving PRs are currently open and have a high likelihood of merging soon due to their critical nature:
*   **Trigger Detection Fixes:** [PR #1323](https://github.com/anthropics/skills/pull/1323) and [PR #1099](https://github.com/anthropics/skills/pull/1099) solve the fatal `recall=0%` bug in the skill-creator evaluation loop, making automated description optimization actually function. 
*   **UTF-8 & YAML Validation:** [PR #362](https://github.com/anthropics/skills/pull/362) and [PR #361](https://github.com/anthropics/skills/pull/361) introduce necessary multi-byte character support and YAML parsing safeguards to prevent silent failures in skill creation.
*   **Case-Sensitive File Fixes:** [PR #538](https://github.com/anthropics/skills/pull/538) patches case-sensitivity mismatches in the PDF skill that break execution on Linux/Unix systems.
*   **OOXML ID Collision Fix:** [PR #541](https://github.com/anthropics/skills/pull/541) prevents document corruption in the DOCX skill by ensuring tracked changes don't collide with existing bookmark IDs.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust quality assurance, secure cross-platform sharing, and reliable native execution**—shifting focus from creating basic skills to building trustworthy, enterprise-ready agent infrastructure.

---

Here is the Claude Code community digest for July 2, 2026, based on the latest GitHub activity.

### 1. Today's Highlights
Claude Code v2.1.198 rolls out today, bringing native background agent lifecycle notifications and marking the general availability of Claude in Chrome. The community remains highly engaged, with significant friction around overzealous cybersecurity safety filters blocking legitimate defensive-hardening workflows, alongside critical reports of a recent regression affecting GitHub repository data access.

### 2. Releases
**[v2.1.198](https://github.com/anthropics/claude-code/releases)** 
* **Claude in Chrome GA:** The browser extension is now generally available.
* **Agent Notifications:** Background agents in `claude agents` now fire the `Notification` hook (`agent_needs_input` / `agent_completed`) when sessions require user input or finish a task.
* **New Skill:** Introduced the `/dataviz` skill for in-terminal chart and dashboard design guidance.

### 3. Hot Issues
1. **[#71542](https://github.com/anthropics/claude-code/issues/71542) [OPEN]** - A critical account-wide regression where the GitHub connector successfully links repositories but Claude cannot access any content (public or private). Gaining significant traction (20 comments).
2. **[#54136](https://github.com/anthropics/claude-code/issues/54136) [OPEN]** - Feature request to expose `/mcp` UI or an auto-reconnect mechanism in the Claude Desktop app, as users currently have to `Cmd+Q` to recover dead MCP servers.
3. **[#54179](https://github.com/anthropics/claude-code/issues/54179) [OPEN]** - A frustrating macOS Desktop GUI SSH bug where opening multiple Claude Code sessions on the same remote host invalidates auth tokens and causes indefinite hangs.
4. **[#69022](https://github.com/anthropics/claude-code/issues/69022) [OPEN]** - A behavioral bug in `claude agents` view where spawned agents act like "team members," never close properly, and ignore messages. 
5. **[#68497](https://github.com/anthropics/claude-code/issues/68497) [CLOSED]** - A false-positive block where cyber-related safeguards halted a user's legitimate infrastructure automation request. 
6. **[#71853](https://github.com/anthropics/claude-code/issues/71853) [CLOSED]** - Legitimate cloud IAM privilege escalation path analysis for a security audit was wrongly blocked as an Acceptable Use Policy (AUP) violation.
7. **[#71888](https://github.com/anthropics/claude-code/issues/71888) [CLOSED]** - A safety filter falsely triggered while uninstalling legacy antivirus software and deploying a new endpoint security agent.
8. **[#71892](https://github.com/anthropics/claude-code/issues/71892) [CLOSED]** - Defensive DMARC policy updates during an email security hardening workflow were blocked by the cyber safety filter.
9. **[#71981](https://github.com/anthropics/claude-code/issues/71981) [CLOSED]** - A routine security log review and triage workflow was unexpectedly halted by the platform's safety filters.
10. **[#71850](https://github.com/anthropics/claude-code/issues/71850) [CLOSED]** - Defensive firmware extraction and analysis workflow for an embedded device research team was blocked as a cyber threat. *(Note: 17 other similar issues regarding drone firmware/RE were closed as duplicates).*

### 4. Key PR Progress
*Community PR activity over the last 24 hours was limited to minor corrections and testing.*
1. **[PR #72866](https://github.com/anthropics/claude-code/pull/72866) [OPEN]** - Minor documentation fix: corrects the capitalization of "Github" to "GitHub" in the main README.
2. **[PR #72543](https://github.com/anthropics/claude-code/pull/72543) [OPEN]** - An open PR titled "Create Cha" with an empty description currently pending maintainer review/triage.

### 5. Feature Request Trends
* **In-Session MCP Server Recovery:** Users are heavily requesting a way to manage, status-check, and restart dead or hung MCP servers directly from the Claude Desktop UI without force-quitting the application (see #54136).
* **Advanced Data Visualization:** The community's need for native data interpretation tools was answered today via the inclusion of the `/dataviz` skill in v2.1.198.
* **Remote Session Management:** Better isolation and auth-token handling for multi-session SSH workflows via the GUI SSH client (see #54179).

### 6. Developer Pain Points
* **Overzealous Cyber/AUP Safety Filters:** By far the biggest frustration in the tracker. A massive cluster of issues (mostly filed by user `sworrl`) highlights that legitimate security tasks—specifically reverse-engineering owned consumer hardware (like drones), defensive firmware analysis, IAM auditing, and endpoint security deployments—are being abruptly halted by false-positive triggers.
* **Integration Breakages:** The GitHub connector regression (#71542) is a high-impact blocker preventing Claude Code from reading repository files, stalling development workflows account-wide. 
* **UI/State Desyncs:** Desktop users report process lifecycle issues, such as agents ignoring inputs and hanging (#69022), and SSH auth-token invalidation requiring constant app restarts (#54179).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the technical digest for the OpenAI Codex community for July 2, 2026.

### 1. Today's Highlights
The Codex team rolled out critical security and logging fixes alongside heavy infrastructure improvements to multi-agent communication and patch application. A massive portion of today's PR activity is dedicated to hardening Git operations—specifically blocking malicious executable filters, merge drivers, and path escapes during patch staging. Meanwhile, the community remains highly vocal about Windows desktop performance issues (like Defender CPU spikes) and long-standing feature requests such as Linux desktop support and file exclusion rules.

### 2. Releases
*   **[rust-v0.142.5](https://github.com/openai/codex/releases/tag/rust-v0.142.5)**
    *   **Bug Fix:** Prevented full Responses WebSocket request payloads from being written to trace logs (PR [#30771](https://github.com/openai/codex/pull/30771)), addressing recent concerns about local log bloat.
*   **[rust-v0.143.0-alpha.32](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.32)**
    *   Pre-release alpha build for the upcoming `0.143.0` version.

### 3. Hot Issues
1.  **[#11023 [OPEN] Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**: With 672 upvotes and 138 comments, this remains the most requested feature. Users are struggling with macOS power consumption and are eager for a native Linux desktop experience.
2.  **[#2847 [CLOSED] A way to exclude sensitive files](https://github.com/openai/codex/issues/2847)**: A massively popular request (456 upvotes) pushing for a `.codexignore` mechanism to prevent the agent from reading or sending sensitive files (like `.env` or secrets) to the model.
3.  **[#8648 [OPEN] Codex replies to earlier messages instead of latest one](https://github.com/openai/codex/issues/8648)**: A frustrating context bug where the agent loses track of the latest prompt in multi-message conversations, causing it to hallucinate or backtrack.
4.  **[#9203 [OPEN] Please make "/undo" back](https://github.com/openai/codex/issues/9203)**: Users are urgently requesting the return of the `/undo` command to quickly revert unintended file deletions or modifications, especially when working outside of Git commits.
5.  **[#29072 [OPEN] Windows Codex App: apply_patch fails](https://github.com/openai/codex/issues/29072)**: A critical blocker for Windows users where the sandbox setup executable fails to launch from the package path, breaking the `apply_patch` tool entirely.
6.  **[#29047 [OPEN] SIGTRAP in v8::Isolate::New on macOS Intel](https://github.com/openai/codex/issues/29047)**: A severe regression in `0.141.0` causing Intel Macs running macOS 26 to crash with a `SIGTRAP` error when any tool is invoked. 
7.  **[#30132 [OPEN] automation_update tool json start with "oneOf" causing error](https://github.com/openai/codex/issues/30132)**: Azure OpenAI endpoint users are experiencing failures because the schema keyword `oneOf` is not supported by their endpoint configuration.
8.  **[#29911 [OPEN] Codex Desktop Creates Empty `.git` Directories](https://github.com/openai/codex/issues/29911)**: On Windows, the app creates empty `.agent` directories that trigger continuous scanning loops, resulting in massive Microsoft Defender CPU usage.
9.  **[#19504 [OPEN] Add full RTL text direction support](https://github.com/openai/codex/issues/19504)**: Arabic, Persian, and Hebrew users are reporting broken text alignment and punctuation rendering, requesting native Right-To-Left UI support.
10. **[#30689 [OPEN] Unexpectedly High Usage Consumption](https://github.com/openai/codex/issues/30689)**: Users report abnormal rate-limit consumption where a single context compaction burns through their usage quotas unexpectedly.

### 4. Key PR Progress
1.  **[#30867 & #30872 Multi-Agent v2 Communication Logging](https://github.com/openai/codex/pull/30867)**: Consolidates multi-agent outbound communications (direct messages, follow-ups, spawns) into a single sink to standardize lifecycle logging.
2.  **[#30752 Configurable Reasoning Summary Delivery](https://github.com/openai/codex/pull/30752)**: Introduces a `reasoning_summary_delivery` config option (sequential, concurrent, concurrent_cutoff) to stream options via HTTP/WebSocket on Responses API requests.
3.  **[#30848, #30850, #30854 & #30844 Patch & Git Security Hardening](https://github.com/openai/codex/pull/30848)**: A major stack of PRs securing patch application. Blocks executable Git clean/smudge/process filters, merge drivers, and confines staging paths strictly to the parent worktree to prevent malicious code execution.
4.  **[#30627 Elicitation Service Overhaul](https://github.com/openai/codex/pull/30627)**: Moves to a shared session-level `ElicitationService` to prevent code-mode tool results from returning to the model before the user resolves an MCP elicitation request.
5.  **[#30866 Reconcile Loaded Thread History](https://github.com/openai/codex/pull/30866)**: Fixes thread state coherence by serializing running-thread resume with rollback and history injection when `thread/resume` is called.
6.  **[#30601 App-Server OTEL Startup Best Effort](https://github.com/openai/codex/pull/30601)**: Changes OpenTelemetry provider startup to non-fatal. Invalid OTLP exporter settings will no longer crash the app-server before it responds to `initialize`.
7.  **[#29500 Permissions-Scoped Exec Rules](https://github.com/openai/codex/pull/29500)**: Makes command execution prefix rules aware of the active permissions profile, ensuring a command approved in a sandbox isn't globally approved for less restrictive profiles.
8.  **[#29602 Flatten Namespace Tools for Third-Party Providers](https://github.com/openai/codex/pull/29602)**: Removes the `type: "namespace"` wrapper for non-OpenAI endpoints that fail to preserve namespace semantics, ensuring better compatibility with third-party Responses-compatible APIs.
9.  **[#30863 Structured Git Status Refusals](https://github.com/openai/codex/pull/30863)**: Enhances workspace change detection by refusing executable clean filters before Git inspects the worktree, returning structured refusal reasons to the caller.
10. **[#30849 V8 x86 Smoke Test](https://github.com/openai/codex/pull/30849)**: Adds a specific test to verify and isolate the V8 engine initialization problem currently crashing x86 Macs (see Issue #29047).

### 5. Feature Request Trends
*   **Platform Parity & Expansions:** There is a massive push for a native Linux Desktop application, as well as requests for Termux/Android CLI support.
*   **Workspace & Session Management:** Users want first-class project management capabilities, including the ability to register local folders and migrate conversation threads between different projects.
*   **Data Safety & Granular Control:** Developers are asking for strict boundaries on what the AI can see, notably via global or repo-level `.codexignore` files, and the ability to quickly undo actions on non-tracked files.
*   **Localization & Accessibility:** Better handling of Right-To-Left (RTL) languages (Arabic, Farsi, Hebrew) is being heavily requested to make the tool usable for global developers.

### 6. Developer Pain Points
*   **Windows Performance Degradation:** A recurring theme among Windows users is severe system slowdowns. The app is repeatedly triggering Microsoft Defender via empty `.git`/`.agent` folder creation, spawning infinite `git.exe` polling processes, and causing shell/UI freezes.
*   **Update Stability Regressions:** Recent releases have introduced breaking regressions, such as Intel Mac V8 engine crashes (`SIGTRAP`) and broken patch application on Windows, eroding trust in automatic updates. 
*   **Token & Rate Limit Anxiety:** Context compaction and background operations are consuming usage limits much faster than anticipated, causing friction for Plus/Pro users trying to manage long coding sessions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 2, 2026.

### 1. Today's Highlights
Gemini CLI rolled out a new nightly build (v0.51.0) focusing on core tool path resolution and Cloud Run webhook ingestion. The community and maintainers are heavily focused on enhancing agentic capabilities, with significant progress made on AST-aware tooling, "Caretaker" backend services, and patching multiple high-severity security vulnerabilities including symlink directory escapes and SSRF flaws.

### 2. Releases
*   **[v0.51.0-nightly.20260701](https://github.com/google-gemini/gemini-cli/pull/28226)** 
    *   Fixed defensive path resolution for at-reference files and resolved macOS test failures ([PR #28053](https://github.com/google-gemini/gemini-cli/pull/28053)).
    *   Implemented the Cloud Run webhook ingestion service for the Caretaker agent ([PR #28015](https://github.com/google-gemini/gemini-cli/pull/28015)).

### 3. Hot Issues
1.  **[#22323: Subagent false success on MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)** - A P1 bug where the `codebase_investigator` falsely reports success when hitting its turn limit. This is critical as it masks underlying agent failures.
2.  **[#21409: Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** - A highly disruptive (8 👍) P1 bug where the CLI hangs indefinitely when deferring simple tasks (like folder creation) to the generalist subagent. 
3.  **[#25166: Shell command execution gets stuck](https://github.com/google-gemini/gemini-cli/issues/25166)** - A P1 core bug where simple shell commands complete but the CLI hangs forever waiting for user input, severely breaking the developer workflow.
4.  **[#19873: Native bash affinity via OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873)** - A strategic P2 discussion on leveraging Gemini 3's native bash capabilities safely through zero-dependency OS sandboxing and intent routing.
5.  **[#22745: AST-aware file reads and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** - An investigation EPIC exploring AST-aware tools to reduce token noise and prevent misaligned file reads during codebase navigation.
6.  **[#26525: Auto Memory data redaction](https://github.com/google-gemini/gemini-cli/issues/26525)** - A P2 security/privacy issue highlighting that Auto Memory reads local transcripts and sends data to the extraction model *before* redacting secrets.
7.  **[#24353: Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** - A P1 Epic to expand behavioral evaluation coverage across the 6 supported Gemini models to prevent agent regressions.
8.  **[#21968: Low utilization of skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)** - Users report that the CLI rarely invokes custom skills or sub-agents autonomously, requiring explicit prompt instructions to trigger them.
9.  **[#21983: Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** - A P1 environment-specific bug causing the browser agent to fail completely on Linux Wayland desktop sessions.
10. **[#22267: Browser Agent ignores settings overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** - A P2 bug where configuration overrides like `maxTurns` in `settings.json` are completely ignored by the Browser Agent.

### 4. Key PR Progress
1.  **[PR #28233: Fix symbolic link directory escape](https://github.com/google-gemini/gemini-cli/pull/28233) (Closed)** - Patched a high-severity vulnerability in the JIT Memory Import Processor where malicious repos could use symlinks to escape workspace boundaries.
2.  **[PR #28223: Bypass LLM correction for JSON/IPYNB](https://github.com/google-gemini/gemini-cli/pull/28223)** - A critical fix preventing the `write_file` and `replace` tools from corrupting JSON and Jupyter Notebook files during auto-correction.
3.  **[PR #28232: Fix supply chain RCE in eval workflow](https://github.com/google-gemini/gemini-cli/pull/28232)** - Mitigates a critical RCE flaw where forked PRs could execute code with elevated GitHub and Gemini API tokens.
4.  **[PR #27971: Fix thought leakage in history turns](https://github.com/google-gemini/gemini-cli/pull/27971)** - Resolves an issue where Gemini's internal reasoning/monologues leaked into plain-text history, confusing the model in subsequent turns.
5.  **[PR #28167 & #28163: Caretaker Agent foundations](https://github.com/google-gemini/gemini-cli/pull/28167)** - Introduces the foundational cloud run skeletons and triage worker modules for the new automated "Caretaker" agent system.
6.  **[PR #28103: Prevent OAuth keep-alive socket reuse](https://github.com/google-gemini/gemini-cli/pull/28103)** - Fixes OAuth token exchange failures triggered by the June 2026 Node.js security patch (CVE-2026-48931).
7.  **[PR #28112: Add SSRF protection to MCP OAuth discovery](https://github.com/google-gemini/gemini-cli/pull/28112)** - Extends loopback and DNS validation to MCP server OAuth discovery flows to prevent Server-Side Request Forgery.
8.  **[PR #28094: Deep-merge user and workspace settings](https://github.com/google-gemini/gemini-cli/pull/28094)** - Fixes an `a2a-server` config bug where shallow merging caused workspace settings to completely wipe out user-level tool configurations.
9.  **[PR #28224: Avoid splitting emoji during truncation](https://github.com/google-gemini/gemini-cli/pull/28224)** - Fixes a terminal UI bug that caused rendering issues (replacement characters) when truncating strings containing emojis.
10. **[PR #28126: Show ellipsis on multi-line edit snippets](https://github.com/google-gemini/gemini-cli/pull/28126)** - A UI enhancement ensuring multi-line edits display properly with an ellipsis rather than masquerading as single-line changes.

### 5. Feature Request Trends
*   **Advanced Tooling (AST & Native Bash):** The community is pushing for a shift away from naive file reading. There is strong momentum towards AST-aware codebase mapping (Issues #22745, #22746) and leveraging Gemini's native bash affinity through secure OS sandboxing (Issue #19873) to reduce token overhead.
*   **Agent Autonomy & Reliability:** Users want smarter delegation. There are active requests for better autonomous use of sub-agents (Issue #21968), automatic session takeover for the browser agent (Issue #22232), and preventing agents from taking destructive actions like `git reset --force` (Issue #22672).
*   **Memory System Enhancements:** A cluster of activity围绕 Auto Memory improvements, focusing on quarantining invalid patches, deterministic secret redaction, and filtering low-signal sessions (Issues #26525, #26523, #26522).

### 6. Developer Pain Points
*   **Agent Hanging & Looping:** The most disruptive pain point is the CLI becoming unresponsive. Whether it's the generalist agent hanging indefinitely (Issue #21409), the shell getting stuck on "Awaiting user input" (Issue #25166), or subagents getting stuck at interactive prompts (Issue #22465), these block developer workflows entirely.
*   **Messy Workspaces:** Developers express frustration with the agent frequently creating temporary edit scripts in random directories, leaving a messy workspace that requires manual cleanup before commits (Issue #23571).
*   **Context Loss During Debugging:** When agents fail, developers struggle to figure out why. The `/bug` report tool currently omits subagent context (Issue #21763), and subagent trajectories aren't easily shareable via `/chat share` (Issue #22598), making debugging agentic workflows highly difficult.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the community digest for GitHub Copilot CLI based on the recent repository activity.

### 1. Today's Highlights
GitHub Copilot CLI rolled out version `v1.0.68`, introducing support for the `kimi-k2.7-code` model, improved accessibility in the `/mcp` configuration UI, and enhanced resilience for IDE tool connections during transient network disconnects. Community discussions today are heavily focused on refining the plugin and tooling ecosystem, with high demand for project-scoped plugins, globally configurable permissions (BYOK and MCP), and custom theming. 

### 2. Releases
*   **v1.0.68 (2026-07-01)**
    *   **New Model:** Added support for the `kimi-k2.7-code` model.
    *   **Accessibility Update:** The focused field in the `/mcp` config form now utilizes a "❯ " chevron indicator alongside color, improving usability for visually impaired users.
    *   **IDE Resilience:** IDE tools now remain available during transient disconnects. The CLI returns a clear error when disconnected and automatically recovers once the IDE reconnects.

### 3. Hot Issues
1.  **[#1665](https://github.com/github/copilot-cli/issues/1665) [OPEN] Support Copilot CLI Plugins Scoped to Project or Repository**
    *   *Why it matters:* Currently, plugins are installed globally per user. This creates friction for teams wanting to standardize tooling and share plugin configurations across specific repositories or projects.
2.  **[#3596](https://github.com/github/copilot-cli/issues/3596) [OPEN] Error loading model list: Error: Not authenticated**
    *   *Why it matters:* Users are encountering an authentication bug that prevents them from switching models via the `/model` command when resuming previous sessions, forcing them to start entirely new sessions.
3.  **[#3028](https://github.com/github/copilot-cli/issues/3028) [OPEN] MCP permissions**
    *   *Why it matters:* As MCP (Model Context Protocol) servers become more prevalent, users are requesting configuration allowances similar to `trustedFolders` to securely manage and restrict tool usage per MCP server.
4.  **[#1504](https://github.com/github/copilot-cli/issues/1504) [OPEN] Add custom theme support**
    *   *Why it matters:* While basic theming exists, the community (20 upvotes) is requesting the ability to create, customize, and share custom themes (e.g., via JSON files) to better match their terminal aesthetics.
5.  **[#3948](https://github.com/github/copilot-cli/issues/3948) [OPEN] Any web_fetch: TypeError: fetch failed**
    *   *Why it matters:* Users report that the `web_fetch` tool consistently fails with a `TypeError` despite proxy and network configurations being correctly set up for model access and authentication. 
6.  **[#3282](https://github.com/github/copilot-cli/issues/3282) [OPEN] Add multiple BYOK model capability in copilot cli**
    *   *Why it matters:* Developers want to use multiple Bring-Your-Own-Key (BYOK) models simultaneously. Currently, switching BYOK models requires terminating the session and updating environment variables.
7.  **[#3997](https://github.com/github/copilot-cli/issues/3997) [OPEN] Copilot Web: Model "gpt-5.3-codex" is not available**
    *   *Why it matters:* A widespread error `[runtime:-32603]` is preventing users from utilizing Copilot as an agent, specifically failing to access the `gpt-5.3-codex` model.
8.  **[#3331](https://github.com/github/copilot-cli/issues/3331) [OPEN] Feature request: auto-update plugins on CLI startup via marketplace flag**
    *   *Why it matters:* Without auto-updates, developers may silently fall behind on critical plugin updates. Teams need a way to signal that installed plugins should be updated automatically when the CLI starts.
9.  **[#179](https://github.com/github/copilot-cli/issues/179) [OPEN] Globally configurable allowed tools**
    *   *Why it matters:* Highly requested (41 upvotes), this issue asks for global tool permissions in `config.json`, mimicking Claude Code's approach to streamline workflows and reduce prompt fatigue for trusted tools.
10. **[#3158](https://github.com/github/copilot-cli/issues/3158) [OPEN] Plan→Compact→Re-Plan infinite loop in Copilot CLI**
    *   *Why it matters:* A high-severity bug where the agent enters an infinite logic loop (zero execution) after hitting ~75% context capacity and compacting, causing severe session degradation.

### 4. Key PR Progress
*(Note: Only 1 active PR was recorded in the last 24 hours)*
*   **[#3873](https://github.com/github/copilot-cli/pull/3873) [OPEN] Add initial console log for greeting**
    *   A minor UX enhancement proposing to add an initial console log greeting when the CLI is initialized. 

### 5. Feature Request Trends
*   **Granular Permissions & Security:** There is a strong push for more sophisticated permission management. Users want global configuration for allowed tools ([#179](https://github.com/github/copilot-cli/issues/179)), specific MCP server permissions ([#3028](https://github.com/github/copilot-cli/issues/3028)), and persistent command deny-rules ([#3995](https://github.com/github/copilot-cli/issues/3995)) to safely automate agentic workflows.
*   **Advanced Plugin Ecosystem:** The community wants plugins to mature beyond global user states. Key requests include repository/project-level plugin scoping ([#1665](https://github.com/github/copilot-cli/issues/1665)) and automated plugin updates from marketplaces ([#3331](https://github.com/github/copilot-cli/issues/3331)).
*   **Flexible Model Management:** Developers are asking for better model routing, specifically per-mode defaults (e.g., different models for plan vs. autopilot modes) ([#2958](https://github.com/github/copilot-cli/issues/2958)) and the ability to load multiple BYOK models simultaneously without dropping sessions ([#3282](https://github.com/github/copilot-cli/issues/3282)).

### 6. Developer Pain Points
*   **Windows Environment Bugs:** Windows users are experiencing disproportionate friction, including terminal flickering during model "thinking" states ([#3984](https://github.com/github/copilot-cli/issues/3984)), local caching preventing fresh plugin code updates ([#3627](https://github.com/github/copilot-cli/issues/3627)), and incompatibility with Claude-style `.claude/settings.json` hooks ([#4001](https://github.com/github/copilot-cli/issues/4001)).
*   **Context Compaction Failures:** A major pain point for deep agentic work is the CLI's context management. The Plan-Compact-Replan infinite loop ([#3158](https://github.com/github/copilot-cli/issues/3158)) and the loss of token usage statistics when running `/new` ([#3994](https://github.com/github/copilot-cli/issues/3994)) result in wasted time and lost billing/usage metrics.
*   **Network and Tool Reliability:** Developers are frustrated by silent failures in background networking tools. The persistent `web_fetch` failures ([#3948](https://github.com/github/copilot-cli/issues/3948)) and clipboard copy failures in remote VSCode Server environments ([#3996](https://github.com/github/copilot-cli/issues/3996)) interrupt automated data gathering and developer workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for the Kimi Code CLI project.

# Kimi Code CLI Community Digest — 2026-07-02

### 1. Today's Highlights
The Kimi Code community is actively focusing on improving execution resilience and cross-platform compatibility. A new PR addressing Windows terminal clipboard limitations highlights an ongoing effort to broaden OS support, while strategic feature requests—such as file-based goal management—indicate that power users are pushing the CLI's boundaries for complex, long-running tasks. Additionally, the community has flagged an urgent need to finalize the "Kimi CLI" to "Kimi Code" brand migration across the downstream ecosystem.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
*(Note: 4 issues were active in the last 24h; all are detailed below.)*

*   **[OPEN] "Kimi CLI" → "Kimi Code" migration is half-done** ([Issue #2483](https://github.com/MoonshotAI/kimi-cli/issues/2483))
    *   **Why it matters:** A tracking issue highlighting fragmented naming conventions across the ecosystem (READMEs, Zed/VS Code extensions, SDKs, PyPI). Inconsistent branding creates confusion for downstream toolchain integrators.
*   **[OPEN] Super long goals automatically saved as `goal.md`** ([Issue #2482](https://github.com/MoonshotAI/kimi-cli/issues/2482))
    *   **Why it matters:** The current `/goal` command has a 4000-byte limit. The community proposes a Codex-style approach where long goals automatically offload to a markdown file, drastically improving context management for long-running agentic tasks.
*   **[OPEN] [bug] Kimi CLI stuck in reading one file again and again** ([Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640))
    *   **Why it matters:** A highly discussed (15 comments) and persistent loop bug occurring on custom Anthropic endpoints (mimo-v2-flash). Infinite file-reading loops severely degrade token efficiency and halt automated workflows.
*   **[CLOSED] Add push notifications to Kimi-CLI-Web** ([Issue #1938](https://github.com/MoonshotAI/kimi-cli/issues/1938))
    *   **Why it matters:** Reflects the growing demand for mobile-remote workflows. Users want native push notifications when web-based tasks finish, allowing asynchronous task execution without manual polling.

### 4. Key PR Progress
*(Note: 2 PRs were active in the last 24h; both are detailed below.)*

*   **[OPEN] fix(shell): read clipboard media on BracketedPaste for Windows terminals** ([PR #2481](https://github.com/MoonshotAI/kimi-cli/pull/2481))
    *   **Summary:** Fixes a cross-platform bug where pasting binary content (images) silently failed in Windows Terminal and VS Code. Updates the paste handler to intercept `BracketedPaste` events and correctly parse media payloads.
*   **[CLOSED] feat(subagent): add API key pool for parallel subagent execution** ([PR #2369](https://github.com/MoonshotAI/kimi-cli/pull/2369))
    *   **Summary:** Introduced a round-robin `APIKeyPool` (`src/kimi_cli/llm_key_pool.py`) to allocate keys dynamically for parallel subagents. *Status note: The PR was closed, suggesting it may have been superseded, merged into a larger branch, or rejected in favor of another concurrency approach.*

### 5. Feature Request Trends
*   **State & Context Persistence:** Strong demand for better handling of massive context blocks, specifically via file-based goal tracking (`goal.md`) to bypass hard token limits in complex agentic workflows.
*   **Asynchronous & Remote Workflows:** Users are frequently executing long tasks via Kimi-CLI-Web from mobile devices. There is a clear trend toward requiring push notifications and remote alerting to avoid checking the terminal repeatedly.
*   **High-Concurrency Support:** Requests for multi-key management (API Key pools) to parallelize subagent execution and bypass strict rate limits.

### 6. Developer Pain Points
*   **Execution Loops & Instability:** Custom endpoint integrations (e.g., Anthropic endpoints using flash models) are triggering infinite file-reading loops, resulting in wasted API credits and broken pipelines.
*   **Cross-Platform Terminal Quirks:** Windows and VS Code integrated terminals handle inputs (like clipboard pasting) fundamentally differently than Unix-based systems, causing silent failures when passing multimodal data to the CLI.
*   **Ecosystem Fragmentation:** The incomplete transition from "Kimi CLI" to "Kimi Code" has left developers dealing with mismatched package names, binary paths, and extension identifiers, complicating CI/CD pipelines and automated installations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 2, 2026, based on the latest GitHub activity.

### 1. Today's Highlights
OpenCode rolled out **v1.17.13**, focusing on core stability by patching reasoning mode applications for OpenAI-compatible models and fixing stale GitHub Copilot request failures. The community is actively testing **V2 plugin architecture** and multi-session workspaces, evidenced by highly discussed feature requests for plugin hooks and merged PRs for grid UI modes. However, friction remains around local LLM tool calling (especially Qwen models) and context window compaction loops.

### 2. Releases
**v1.17.13** ([Release Notes](https://github.com/anomalyco/opencode/releases))
* **Core Bugfixes:** Forced reasoning mode for custom OpenAI-compatible deployments to ensure settings apply reliably. Stopped replaying stale GitHub Copilot response item IDs, which previously caused follow-up request failures.
* **Desktop Bugfix:** Question prompts in the Desktop app can now be minimized.

### 3. Hot Issues
1. **[Tool execution aborted with local models](https://github.com/anomalyco/opencode/issues/26063)** - *Comments: 27, 👍: 2*. Users running local models via LM Studio (e.g., Qwen3.6) report persistent tool execution terminations, highlighting friction in OpenCode's local model tool-calling parity.
2. **[Feature: `opencode session export` to Markdown/JSON](https://github.com/anomalyco/opencode/issues/9387)** - *Comments: 12, 👍: 10*. A highly requested feature to export sessions from the TUI, crucial for sharing AI workflows and generating documentation.
3. **[Desktop app crashing on file changes](https://github.com/anomalyco/opencode/issues/13681)** - *Closed*. A major bug where the desktop app crashes upon opening file changes has been resolved.
4. **[Desktop App sends UNC paths to WSL-hosted server](https://github.com/anomalyco/opencode/issues/19473)** - *Comments: 8*. Windows/WSL2 interoperability breaks bash tool calls because the UI stores Windows UNC paths instead of Linux paths in the global config. 
5. **[Feature: YOLO Mode (Skip Permission Prompts)](https://github.com/anomalyco/opencode/issues/9070)** - *Closed*. Power users successfully pushed for a mode to bypass tool permission prompts for faster, uninterrupted workflows (similar to Claude Code's `--dangerously-skip-permissions`).
6. **[Qwen 3.7 Plus/Max unknown/invalid tool calls](https://github.com/anomalyco/opencode/issues/33618)** - *Comments: 7*. Via OpenRouter, newer Qwen models are sporadically failing tool calls with empty names, triggering infinite retry loops and aborted sessions.
7. **[Infinite compaction loop on every response](https://github.com/anomalyco/opencode/issues/31152)** - *Comments: 6*. A critical regression where even a simple "hi" in a zero-config environment triggers an unbreakable context compaction loop.
8. **[TUI prompt input fail on Enter](https://github.com/anomalyco/opencode/issues/31217)** - *Comments: 5*. An input bug where pressing Enter swallows the text without submitting, heavily impacting international users utilizing complex input methods.
9. **[macOS Kernel Panic via EndpointSecurity](https://github.com/anomalyco/opencode/issues/32002)** - *Comments: 4*. A severe memory leak in `opencode.exe` is exhausting the macOS kernel zone map, resulting in system-level panics.
10. **[LSP initialize timeout too short for Java/Gradle](https://github.com/anomalyco/opencode/issues/23982)** - *Comments: 4*. The default 15s Language Server Protocol timeout is insufficient for heavy JDTLS projects (requiring ~114s), breaking Java diagnostics.

### 4. Key PR Progress
1. **[feat: simulation control surface and architecture spec](https://github.com/anomalyco/opencode/pull/34801)** by `jlongster` - Introduces a robust simulation architecture spec, including control servers and layer replacement for local research and testing.
2. **[feat(web): add grid mode for multi-session workspace](https://github.com/anomalyco/opencode/pull/34797)** by `vlgalib` - *Closed/Merged*. Brings a multi-session grid view to the Solid SPA web app, allowing developers to monitor multiple agents side-by-side. 
3. **[fix: Home and End keys not working](https://github.com/anomalyco/opencode/pull/33554)** by `carolitascl` - Resolves a frustrating text editing bug where Home/End keys stopped functioning in the prompt input.
4. **[feat(provider): add `--model free`](https://github.com/anomalyco/opencode/pull/34794)** by `caretak3r` - Adds a convenient CLI flag to automatically resolve and use a random zero-cost model from OpenCode Zen.
5. **[feat(observability): Implement OTel telemetry parity](https://github.com/anomalyco/opencode/pull/34633)** by `Starefossen` - Significantly upgrades observability by adding granular OpenTelemetry metrics for agent and tool executions.
6. **[fix(go): filter models list to oa-compat supported models](https://github.com/anomalyco/opencode/pull/33547)** by `devinoldenburg` - Cleans up the API response to only display models that actually support OpenAI compatibility, reducing user error.
7. **[feat(desktop): refine session tab preview popover](https://github.com/anomalyco/opencode/pull/34792)** by `usrnk1` - UX improvements to the desktop app's session hover preview based on design review feedback.
8. **[fix(session): read text attachments as text for non-text/plain MIME types](https://github.com/anomalyco/opencode/pull/34786)** by `adityachaudhary99` - Prevents attached text files (with wrong MIME types) from being sent as unreadable binary garbage to the LLM.
9. **[fix(tui): pin queued prompts below output](https://github.com/anomalyco/opencode/pull/34791)** by `nexxeln` - Fixes UI synchronization by keeping queued prompt rows pinned underneath active assistant output.
10. **[feat(provider): add RFC 8628 device-flow OAuth](https://github.com/anomalyco/opencode/pull/34785)** by `fijimunkii` - Expands custom gateway support by implementing device-flow OAuth authentication.

### 5. Feature Request Trends
* **V2 Plugin Architecture & Hooks:** The upcoming V2 architecture is generating significant interest, with formal requests for **plugin request hooks** ([#34490](https://github.com/anomalyco/opencode/issues/34490)) and **progressive `AGENTS.md` loading via plugins** ([#34341](https://github.com/anomalyco/opencode/issues/34341)).
* **Workspace & Session Management:** Developers want better overviews of concurrent tasks. The community is actively contributing **Grid Views for both Web and TUI** to manage multiple sessions simultaneously.
* **Customization of Internal Behaviors:** Users are requesting deeper config options, such as **respecting `disable-model-invocation` in SKILL.md** ([#34498](https://github.com/anomalyco/opencode/issues/34498)), **decoupling API IDs from system prompts** ([#34770](https://github.com/anomalyco/opencode/issues/34770)), and **per-agent git worktree isolation** ([#34216](https://github.com/anomalyco/opencode/issues/34216)).

### 6. Developer Pain Points
* **Local & Open-Compat Model Tool Calling:** There is a recurring theme of local/OpenAI-compatible models (specifically Qwen variants via Ollama, LM Studio, or OpenRouter) failing to format tool calls properly, resulting in empty names, execution aborts, or conversations hanging ([#26063](https://github.com/anomalyco/opencode/issues/26063), [#33618](https://github.com/anomalyco/opencode/issues/33618), [#34798](https://github.com/anomalyco/opencode/issues/34798)). 
* **Context & Compaction Failures:** Developers are frustrated by context window management. Issues include infinite compaction loops on basic prompts ([#31152](https://github.com/anomalyco/opencode/issues/31152)) and conversations growing too large to compact without crashing ([#34781](https://github.com/anomalyco/opencode/issues/34781)).
* **Cross-Environment Pathing:** Windows users leveraging WSL2 experience broken tool calls due to path concatenation mismatches ([#19473](https://github.com/anomalyco/opencode/issues/19473)), a classic but persistent pain point in hybrid OS development environments.
* **IME & TUI Input Friction:** Complex Input Method Editors (IMEs) used for non-English languages are causing text to disappear upon pressing Enter in the TUI ([#31217](https://github.com/anomalyco/opencode/issues/31217)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for July 2, 2026.

### 1. Today's Highlights
Pi sees intense community focus on expanding LLM provider flexibility, highlighted by new integrations for Anthropic Vertex and Amazon Bedrock Mantle, alongside rapid community efforts to add Claude Sonnet 5 to the GitHub Copilot provider. Performance and extensibility are also taking center stage, with major pull requests introducing Ahead-of-Time (AOT) compilation for TypeScript extensions to drastically cut startup times, and a new SQLite backend for session storage.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[Issue #5653](https://github.com/earendil-works/pi/issues/5653): Move off Shrinkwrap** *(OPEN)*
    Installing `pi-ai` and `pi-coding-agent` together currently creates duplicate copies on disk, fracturing the module-level API provider registry. This highlights a critical architectural discussion around dependency management that needs resolving.
*   **[Issue #2870](https://github.com/earendil-works/pi/issues/2870): Follow XDG Base Directory** *(CLOSED)*
    With 34 upvotes, this highly requested Linux enhancement resolves config clutter by enforcing standard XDG directory paths (`$XDG_CONFIG_HOME`) instead of dumping files into the user's home directory.
*   **[Issue #5654](https://github.com/earendil-works/pi/issues/5654): Add `excludeFromContext` to custom messages** *(CLOSED)*
    Driven by SDK consumers, this requested feature allows specific messages to bypass model context during compaction while remaining in the UI transcript—a vital optimization for managing token limits.
*   **[Issue #6187](https://github.com/earendil-works/pi/issues/6187): Pi login hangs in WSL after GitHub Copilot authorization** *(CLOSED)*
    A friction point for Windows users: the terminal client fails to detect completed browser OAuth flows in WSL environments, causing the login process to hang indefinitely.
*   **[Issue #5501](https://github.com/earendil-works/pi/issues/5501): Tolerate extra keys on edit tool edits[] items** *(CLOSED)*
    To prevent tool execution failures, the schema will no longer use strict `additionalProperties: false` on edit items, allowing the agent to gracefully ignore hallucinated stray keys generated by LLMs.
*   **[Issue #5536](https://github.com/earendil-works/pi/issues/5536): Split-turn compaction causes 429 on local backends** *(CLOSED)*
    Pi's concurrent summarization requests were overwhelming single-slot local backends (like `llama.cpp`). The resolution ensures Pi respects the concurrency limits of local models.
*   **[Issue #6208](https://github.com/earendil-works/pi/issues/6208): Add Claude Sonnet 5 to the GitHub Copilot provider** *(CLOSED)*
    Following Sonnet 5's GA release, users quickly flagged that the model was missing from the GitHub Copilot provider catalog, proving how fast the community expects new model support.
*   **[Issue #6215](https://github.com/earendil-works/pi/issues/6215): `pi update` fails due to missing `@smithy/node-http-handler`** *(CLOSED)*
    A blocking dependency resolution bug (`ERR_PNPM_NO_MATCHING_VERSION`) that prevented users from updating to version 0.80.3.
*   **[Issue #6201](https://github.com/earendil-works/pi/issues/6201): Expose model resolution helpers through the SDK** *(CLOSED)*
    SDK developers need access to Pi's internal model selection logic (`resolveCliModel`) to accurately mirror the CLI's routing behavior in their own applications.
*   **[Issue #6231](https://github.com/earendil-works/pi/issues/6231): Auth Blocking Local Models** *(CLOSED)*
    A UX blocker where users attempting to run fully local models (e.g., DeepSeek) were incorrectly prompted for OAuth/API keys before they could proceed.

### 4. Key PR Progress
Significant code improvements merged or updated in the last 24 hours:

*   **[PR #6213](https://github.com/earendil-works/pi/pull/6213): feat(coding-agent): implement AOT compilation for TypeScript extensions**
    Uses `esbuild` to pre-compile TypeScript extensions, eliminating runtime `jiti` overhead and dropping extension load times from seconds to milliseconds.
*   **[PR #6227](https://github.com/earendil-works/pi/pull/6227): feat: sqlite session storage**
    Introduces an opt-in SQLite storage engine (`PI_SQLITE_SESSION_STORAGE=1`) for agent transcripts, providing a structured alternative to the default `.jsonl` files.
*   **[PR #5262](https://github.com/earendil-works/pi/pull/5262): feat(ai): add Anthropic Vertex provider**
    A seamless adapter allowing users to route Claude models through Google Cloud Vertex AI using native Anthropic SDK streams.
*   **[PR #6216](https://github.com/earendil-works/pi/pull/6216): feat: Add Amazon Bedrock Mantle OpenAI Responses provider**
    Adds native support for Bedrock Mantle's OpenAI Responses API, unlocking access to GPT 5.5 and 5.4 models.
*   **[PR #6207](https://github.com/earendil-works/pi/pull/6207): feat(ai): add Claude Sonnet 5 to the GitHub Copilot provider**
    Quickly routes the newly GA Claude Sonnet 5 through the GitHub Copilot ecosystem for subscribed users.
*   **[PR #5678](https://github.com/earendil-works/pi/pull/5678): Add excludeFromContext for custom messages**
    Updates the agent harness to allow tagging specific custom messages so they are visible to the user but skipped during LLM context generation and compaction.
*   **[PR #6225](https://github.com/earendil-works/pi/pull/6225): fix(ai): infer toolUse when provider omits finish_reason**
    Patches the OpenAI completions handler to safely infer `tool_calls` when providers (like NVIDIA NIM) close streams without explicitly sending a `finish_reason`.
*   **[PR #6230](https://github.com/earendil-works/pi/pull/6230): fix(coding-agent): preserve first path segment in find relativization**
    Fixes an annoying path resolution bug where executing commands from a bare root directory (`/` or `C:\`) would inadvertently strip the first character from file paths.
*   **[PR #6196](https://github.com/earendil-works/pi/pull/6196): fix(context-canvas): return empty string for empty tool results**
    Stops the API from falsely returning "(see attached image)" when an editing tool successfully executes but returns no visual or text output.
*   **[PR #2780](https://github.com/earendil-works/pi/pull/2780): feat(coding-agent,tui): support argument-hint frontmatter**
    Enables developers to include argument hints directly in prompt template frontmatter, adding rich autocomplete metadata for slash commands in the TUI.

### 5. Feature Request Trends
*   **Expanding Provider & Model Ecosystems:** There is a massive push to future-proof provider integrations. Users are rapidly requesting access to the latest models (Claude Sonnet 5, GPT 5.5/5.4, GLM 5.2 Fast) and demanding broader cloud support (Anthropic Vertex, AWS Bedrock Mantle).
*   **Advanced Extension Workflows:** Developers want richer extension APIs. Requests for features mimicking Cloudflare's "Code Mode"—allowing extensions to call tools by name rather than just setting active tools—indicate a desire to build complex, scriptable micro-environments.
*   **Tighter SDK Control over Context:** Developers need more granular control over what the model actually sees. Requests for `excludeFromContext` and the exposure of model resolution helpers point to a trend of users building sophisticated, custom routing layers on top of Pi's core engine.

### 6. Developer Pain Points
*   **Cross-Platform & Terminal Quirks:** Environments like WSL (login hangups) and Windows Terminal (unresponsive backspace bugs) continue to frustrate users. Additionally, CLI rendering issues—such as blank image previews in Kitty and leftover spinner artifacts in scrollback—degrade the TUI experience.
*   **Tool Call Schema Fragility:** LLMs frequently append stray, duplicate keys during tool calls, breaking Pi's strict JSON schema validation. The community is actively pushing for fault-tolerant schemas that prioritize execution over strict API contracts.
*   **Authentication and Syncing Bottlenecks:** Local developers are annoyed when unwarranted OAuth/API walls block them from running local models. Additionally, machine-to-machine syncing via `pi update --extensions` currently fails to install missing packages automatically, breaking workflows for developers who sync their setups via Git.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for July 2, 2026.

### 1. Today's Highlights
Qwen Code rolls out v0.19.4, introducing a configurable auto-compact threshold alongside refreshed daemon documentation. The community is driving a massive wave of architectural enhancements, notably focusing on background scheduling capabilities, multi-model fallback logic, and substantial improvements to the Web Shell and daemon lifecycle management.

### 2. Releases
*   **[v0.19.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.4)**: Introduced a configurable auto-compact threshold and a new `Stop` mechanism to give developers finer control over context management. The release also includes a wave of refreshed daemon documentation.
*   **v0.19.3-nightly.20260701.a974594d7**: Nightly release incorporating the latest daemon docs and core configuration features leading up to the stable v0.19.4 release.

### 3. Hot Issues
*   **[Issue #6116](https://github.com/QwenLM/qwen-code/issues/6116) - Fallback model chain**: A highly requested P2 feature to automatically switch to backup models during rate limits (429/503/529). Developers are heavily backing this to ensure uninterrupted coding sessions.
*   **[Issue #6144](https://github.com/QwenLM/qwen-code/issues/6144) - Incorrect context window calculation**: A P2 bug where Qwen-Code miscalculates the active context window (e.g., failing to respect custom `ctx-size` in local Ollama deployments), severely impacting local model users. 
*   **[Issue #6119](https://github.com/QwenLM/qwen-code/issues/6119) - Inconsistent git-ignore handling**: Developers report frustrating edge cases where `list_directory` correctly hides git-excluded files, but `read_file` behaves inconsistently, complicating agent context handling.
*   **[Issue #3696](https://github.com/QwenLM/qwen-code/issues/3696) - Comprehensive hot-reload system**: A tracking issue for allowing runtime updates to MCP servers, LSP servers, and extensions without restarting the session. This remains a critical UX priority for the community.
*   **[Issue #4748](https://github.com/QwenLM/qwen-code/issues/4748) - Optimize daemon cold start latency**: A performance enhancement to reduce daemon boot times from 2.5s to ~1.5s. While warm sessions are fast, the cold start delay remains a developer annoyance.
*   **[Issue #6077](https://github.com/QwenLM/qwen-code/issues/6077) - Follow-up suggestion filtering bug**: The CLI's internal logic incorrectly filters out valid follow-up suggestions if they contain punctuation that mimics multiple sentences (e.g., "Let's start...").
*   **[Issue #4888](https://github.com/QwenLM/qwen-code/issues/4888) - IDEA plugin rendering bug**: JetBrains users report that the `ask_user_question` tool fails to render text or input fields, completely breaking interactive flows in the IDE.
*   **[Issue #6143](https://github.com/QwenLM/qwen-code/issues/6143) - Webpack debug log noise**: The build system outputs annoying `SleepInhibitor` and `ENOENT` logs on startup and tool calls, breaking terminal immersion.
*   **[Issue #5080](https://github.com/QwenLM/qwen-code/issues/5080) - Alibaba Cloud API Key conflicts**: A persistent configuration bug where mixing standard API keys (`sk-xxx`) with Token Plan endpoints causes immediate `401 Invalid API-key` errors.
*   **[Issue #2373](https://github.com/QwenLM/qwen-code/issues/2373) - Portable chat history**: Developers want project-local storage for chat sessions (`.qwen/chat-history/`) to make contexts easily portable and shareable across different OS environments.

### 4. Key PR Progress
*   **[PR #6118](https://github.com/QwenLM/qwen-code/pull/6118) / [PR #6125](https://github.com/QwenLM/qwen-code/pull/6125) - Local `/schedule` daemon**: Introduces durable, always-on background routines that execute scheduled tasks via cron syntax without requiring an interactive CLI session to be open.
*   **[PR #6138](https://github.com/QwenLM/qwen-code/pull/6138) - Leader approval for plan-required teammates**: Expands agentic capabilities by allowing named sub-agents (teammates) to spawn in child plan mode, investigate, and submit plans for leader (user) approval.
*   **[PR #6072](https://github.com/QwenLM/qwen-code/pull/6072) - Unified reasoning effort (`/effort`)**: Implements a provider-agnostic command (`/effort low/medium/high/max`) to standardize reasoning budgets across different LLM providers.
*   **[PR #6139](https://github.com/QwenLM/qwen-code/pull/6139) - Skill caching optimization**: Memoizes `collectAvailableSkillEntries()`, eliminating 7+ redundant disk scans at startup and noticeably reducing CLI boot time.
*   **[PR #5895](https://github.com/QwenLM/qwen-code/pull/5895) - Session artifact APIs**: Implements a complete first-class system for agents and tools to attach structured metadata (artifacts) to results, viewable via daemon clients.
*   **[PR #6141](https://github.com/QwenLM/qwen-code/pull/6141) - Smart whitespace diffs**: Fixes an annoying UI bug where whitespace-only edits (like re-indentation) showed "No changes detected" instead of an actual code diff.
*   **[PR #6104](https://github.com/QwenLM/qwen-code/pull/6104) - Lazy-load memory prompts**: Reduces system prompt overhead by ~6k tokens by outputting a condensed memory protocol when memory indexes are empty.
*   **[PR #6032](https://github.com/QwenLM/qwen-code/pull/6032) - HTTPS/TLS for `qwen serve`**: Adds `--tls-cert` and `--tls-key` flags to securely expose the daemon Web Shell over HTTPS.
*   **[PR #6142](https://github.com/QwenLM/qwen-code/pull/6142) - Web Shell Mobile UX**: A massive overhaul making the Web Shell feel like a native app on iOS, fixing safe-area insets and preventing rubber-band overscroll.
*   **[PR #6060](https://github.com/QwenLM/qwen-code/pull/6060) - Per-project model persistence**: Adds `--project` and `--global` flags to the `/model` command, preventing models from auto-switching when navigating between different repositories.

### 5. Feature Request Trends
*   **Background Automation & Agents**: A major paradigm shift towards running Qwen Code as a persistent background service. The community wants scheduled tasks (PR #6118) and multi-agent architectures (PR #6138).
*   **Resilient Model Routing**: High demand for fault-tolerant LLM configurations, specifically automatic model fallbacks during 429/503 outages (Issue #6116) and easier multi-provider routing.
*   **Granular Context & History Portability**: Users want more control over what the agent remembers and ignores, including portable chat histories (Issue #2373) and consistent `.gitignore` rules across all file-reading tools.
*   **Performance via Lazy Loading**: Reducing token bloat and CPU overhead. PRs like #6104 (lazy-loading memory prompts) and #6139 (caching skills) reflect a trend of stripping away unnecessary static context.

### 6. Developer Pain Points
*   **IDE Plugin Instability**: The JetBrains/IDEA plugin continues to have critical rendering issues (Issue #4888), breaking interactive agent workflows.
*   **Token Miscalculations**: Local model users (Ollama/GGUF) are frustrated by hard-coded or incorrect context window calculations (Issue #6144), which lead to premature context truncation.
*   **Daemon Latency**: While warm sessions are incredibly fast (~21ms), the 2.5s daemon cold start (Issue #4748) remains a noticeable hiccup in rapid CI/CD or scripting workflows.
*   **Configuration Fragmentation**: Conflicting settings—such as standard vs. token-plan Alibaba API keys (Issue #5080) and global vs. project model scopes—cause setup friction for new developers.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the technical community digest for the DeepSeek TUI (CodeWhale) project.

# CodeWhale (DeepSeek TUI) Community Digest
**Date:** 2026-07-02

## 1. Today's Highlights
The project is actively transitioning from its legacy `deepseek-tui` identity to the canonical **CodeWhale** branding, with the latest v0.8.66 release marking the deprecation of old npm packages. Development is heavily focused on the upcoming **v0.8.67 release**, which introduces a "constitution-first" setup wizard to greatly improve first-run user experience and runtime security boundaries. Additionally, significant architectural refactoring is underway to support dynamic MCP server creation directly from chat context.

## 2. Releases
*   **[v0.8.66](https://github.com/Hmbown/CodeWhale/releases)** 
    *   **Summary:** Establishes **CodeWhale** as the canonical name for the project, command, npm package, and release assets. The legacy npm package `deepseek-tui` is officially deprecated. Users upgrading from legacy `v0.8.x` names should refer to the newly provided `docs/REBRAND.md` for migration instructions.

## 3. Hot Issues
Here are the top discussed issues impacting the community:

1.  **[#3275](https://github.com/Hmbown/CodeWhale/issues/3275) - Agent self-questioning and deviating from intent (14 comments):** A critical regression where CodeWhale over-extends its scope, entering a self-driven loop of proposing, answering, and executing tasks without waiting for user confirmation. 
2.  **[#3406](https://github.com/Hmbown/CodeWhale/issues/3406) - Setup support: runtime posture card with constitution boundary (13 comments):** Addresses runtime security by ensuring the constitution creator cannot silently change settings. Proposes a new explicit posture selector (ask-first, normal agent, high-trust local).
3.  **[#3736](https://github.com/Hmbown/CodeWhale/issues/3736) - Separate work mode from approval policy before Auto loop (12 comments):** Highlights a UX bottleneck where the mode/permission model carries overlapping knobs (`allow_shell`, `approval_mode`, etc.), causing confusion between UI labels and actual runtime permissions.
4.  **[#2870](https://github.com/Hmbown/CodeWhale/issues/2870) - EPIC: staged command-boundary refactor (10 comments):** Tracking issue for mergeable layers of the command-boundary refactor to improve shell command execution safety.
5.  **[#3793](https://github.com/Hmbown/CodeWhale/issues/3793) - Build a guided localized constitution creator (10 comments):** Feature request to transition the constitution creator from a blank prompt editor to a language-first, guided canvas.
6.  **[#3412](https://github.com/Hmbown/CodeWhale/issues/3412) - Docs: constitution-first setup, localization, and copy (8 comments):** Parent issue tracking the documentation for the new v0.8.67 setup wizard lane.
7.  **[#3806](https://github.com/Hmbown/CodeWhale/issues/3806) - Make `/constitution` the primary management surface (8 comments):** Proposes shifting constitution setup and review away from context internals to a primary, user-facing `/constitution` command.
8.  **[#3411](https://github.com/Hmbown/CodeWhale/issues/3411) - Setup verification and doctor integration (7 comments):** Aims to turn setup verification into a single actionable report using targeted `codewhale doctor` readiness checks.
9.  **[#3829](https://github.com/Hmbown/CodeWhale/issues/3829) - Ship ModalShell v1 for release-blocking menus (6 comments):** Proposes a small, shared `ModalShell` layout to fix unusable popups and standardize release-blocking TUI menus.
10. **[#3864](https://github.com/Hmbown/CodeWhale/issues/3864) - Sub-agent state persists to `.deepseek/` (3 comments):** A rebrand-era bug where sub-agent state JSONs are still written to the legacy `.deepseek/` directory instead of `.codewhale/`.

## 4. Key PR Progress
Recent PRs show a strong push towards v0.8.67 readiness, codebase cleanup, and dynamic tooling:

1.  **[#3861](https://github.com/Hmbown/CodeWhale/pull/3861) - feat(config): v0.8.67 constitution-first setup foundation:** Lays the groundwork for the new setup wizard, implementing the shared state model, persistence, and renderer in `crates/config`.
2.  **[#3866](https://github.com/Hmbown/CodeWhale/pull/3866) - feat: LLM can start MCP servers:** Introduces a `start_mcp_server` tool allowing the LLM to dynamically spin up MCP servers (stdio or HTTP) directly from conversation context.
3.  **[#3865](https://github.com/Hmbown/CodeWhale/pull/3865) - fix(tui): persist sub-agent state to `.codewhale/`:** Fixes the lingering path bug (#3864) to correctly write sub-agent state to the new rebranded directories.
4.  **[#3870](https://github.com/Hmbown/CodeWhale/pull/3870) & [#3869](https://github.com/Hmbown/CodeWhale/pull/3869) - Dynamic MCP Infrastructure:** Closed prerequisite PRs that refactored `McpTool` storage to `Arc<McpTool>` and added the dynamic server pool infrastructure required for PR #3866.
5.  **[#3789](https://github.com/Hmbown/CodeWhale/pull/3789) - fix(tui): show safety policy in status:** Updates the `/status` command to display the mode-derived sandbox and network posture (e.g., Plan = read-only, Yolo = unsandboxed).
6.  **[#3830](https://github.com/Hmbown/CodeWhale/issues/3830) - Ship configured-provider route manager:** (PR tracking) Separates provider account management (`/provider`) from model picking (`/model`) to reduce first-run friction.
7.  **[#3822](https://github.com/Hmbown/CodeWhale/pull/3822) - fix(update): prefer exact binary release assets:** Improves the auto-updater to prioritize exact platform binaries before falling back to prefix matches, preventing failed updates.
8.  **[#3784](https://github.com/Hmbown/CodeWhale/pull/3784) - feat(runtime-api): config persistence for GUI:** Adds persistence for nested-table config keys and fixes a type bug, allowing the GUI config panel to save properly.
9.  **[#3831](https://github.com/Hmbown/CodeWhale/issues/3831) - Hotbar slot editor v1:** Prepares a v1 editor for the Hotbar, allowing users to customize 8 visible slots from a real action catalog.
10. **[#3873](https://github.com/Hmbown/CodeWhale/pull/3873), [#3872](https://github.com/Hmbown/CodeWhale/pull/3872), [#3871](https://github.com/Hmbown/CodeWhale/pull/3871) - Repository Cleanup:** A series of PRs removing unused TUI modules (execpolicy, model registry helpers, request tuning metadata) to reduce compile times and technical debt.

## 5. Feature Request Trends
*   **Guided Onboarding & "Constitution" UX:** The community strongly desires a frictionless first-run experience. Future iterations are trending towards a "Setup Wizard" that replaces manual config edits with a localized, step-by-step guided canvas for setting agent boundaries and security postures.
*   **Dynamic Tooling & MCP:** There is a clear push to make the Model Context Protocol (MCP) more agile. Users want the agent to dynamically manage its own toolset—specifically starting MCP servers on the fly based on conversational context.
*   **Simplified Provider/Model Routing:** Users are requesting clearer separation between provider configuration and model selection to streamline workflows, particularly when managing multiple endpoints.
*   **Natural Language Fleet Management:** Users want high-level orchestration (via `fleet` and `whaleflow`) to be entirely driven by natural language rather than requiring manual JSON editing.

## 6. Developer Pain Points
*   **Agent Over-Stepping:** A major frustration is the agent entering autonomous loops—self-questioning, self-answering, and deviating from the explicit user prompt without asking for approval.
*   **Permission Mode Ambiguity:** The current permission model has four overlapping variables (`allow_shell`, `approval_mode`, `trust_mode`, `auto_approve`). Developers are confused when the UI displays a specific mode, but the underlying runtime permissions do not match.
*   **Misleading UI Cues:** Developers noted that prompts like "Ctrl+B backgrounds this command" are functionally misleading, as bash commands cannot truly be backgrounded for LLM continuation, leading to broken workflows.
*   **Lingering Rebrand Artifacts:** Despite v0.8.66 finalizing the CodeWhale rebrand, underlying file systems are still writing state to old `.deepseek/` directories, causing fragmented state issues.

</details>