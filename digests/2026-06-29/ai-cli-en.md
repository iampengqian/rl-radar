# AI CLI Tools Community Digest 2026-06-29

> Generated: 2026-06-28 22:18 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the June 29, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem in mid-2026 is characterized by rapid iteration toward autonomous "agentic" workflows, with a strong industry pivot toward native runtimes (Rust) and unified architectures. As models handle more complex tasks, developers are increasingly burdened by brittle context management, runaway token consumption, and erratic terminal UI behaviors, making cost predictability and execution stability the primary battlegrounds for tool adoption. Provider-agnostic tools are gaining significant traction, while native ecosystem tools (like Claude Code and Gemini CLI) are heavily focused on deep IDE integrations and automated safety guardrails. Furthermore, the Model Context Protocol (MCP) has matured into a baseline requirement, shifting community focus toward securing and optimizing these tool calls rather than just enabling them.

### 2. Activity Comparison
*Note: Counts are derived from explicitly highlighted "Hot Issues" and "Key PRs" in today's digests.*

| AI CLI Tool | Notable Issues | Notable PRs | Release Status | Primary Focus Area Today |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 5 | No new releases | Cybersecurity safety filters, OS/IDE integration bugs |
| **OpenAI Codex** | 10 | 10 | `rust-v0.143.0-alpha.29` | `gpt-5.5` quota billing bugs, MCP OAuth hardening |
| **Gemini CLI** | 10 | 10 | `v0.51.0-nightly` | Agent hanging/subagent recovery, AST integration, VS Code fixes |
| **GitHub Copilot CLI**| 7 | 0 | No new releases | Multi-session organization, corporate proxy support |
| **Kimi Code CLI** | 2 | 0 | No new releases | Infinite read loops, VS Code memory leaks |
| **OpenCode** | 10 | 10 | No new releases | V2 core architecture refactor, LiteLLM/Cursor integration |
| **Pi** | 10 | 10 | No new releases | Cross-provider token caching (Z.ai/GLM), TUI stability |
| **Qwen Code** | 10 | 10 | **v0.19.3** | "Zombie sessions" burning tokens, auto-compression thresholds |
| **DeepSeek TUI** | 10 | 10 | No new releases | Modal UI bleeding, prompt cache fragmentation |

### 3. Shared Feature Directions
*   **Cost Transparency & Anti-Bleed Mechanisms:** Almost every community is fighting silent token consumption. **OpenAI Codex** (10-20x token billing jumps), **Qwen Code** (30M token "zombie sessions"), **Claude Code** (quota limits hit without active API calls), and **Pi / DeepSeek TUI** (prompt-cache misses) show a desperate need for deterministic context caching, accurate telemetry, and auto-disconnect fail-safes.
*   **Context Window Management & Auto-Compaction:** As models process larger codebases, naive compaction fails. **OpenCode**, **Qwen Code**, and **Gemini CLI** are actively fixing infinite compaction loops, 400 context limit errors, and pushing for AST-aware file reading to reduce token noise.
*   **Sub-agent Reliability & Recovery:** Delegating tasks to background agents is notoriously unstable. **Gemini CLI**, **OpenCode**, and **Pi** all reported high-priority bugs where subagents hang indefinitely, falsely mask failures as "success," or get stuck in infinite tool-call loops.
*   **Sandboxing, Trust, and `.ignore` Controls:** Developers want strict boundaries on agentic power. **OpenAI Codex** (massive demand for `.codexignore`), **OpenAI Codex** (new `writes` approval mode), **OpenCode** (plugin permission gates), and **Gemini CLI** (workspace trust dialogs) are all implementing hard blockers to prevent agents from executing destructive commands or reading sensitive files.
*   **Windows & Cross-OS Friction:** Native Windows support remains highly fragmented. **Claude Code** (Snapdragon ARM64 VM crashes), **OpenAI Codex** (sandbox/patching failures), **Pi** (drive root path parsing), and **GitHub Copilot CLI** (multi-terminal crashes) highlight that Windows is still a second-class citizen in many CLI stacks.

### 4. Differentiation Analysis
*   **Provider-Locked vs. Agnostic:** **Claude Code**, **OpenAI Codex**, and **Gemini CLI** are tightly coupling their CLIs to their respective frontier models (and new hardware architectures, in Claude's case). Conversely, **OpenCode** and **Pi** differentiate by acting as orchestration layers, focusing on LiteLLM, AWS Kiro, and custom proxy integrations, allowing developers to swap models mid-session.
*   **Target Audiences:** **GitHub Copilot CLI** is focusing on enterprise team workflows and high-level UI session management. **Claude Code** is heavily focused on the nuanced needs of cybersecurity professionals and reverse engineers (safety filter tuning). **OpenCode** and **Gemini CLI** are catering to power users who demand deep architectural overhauls (V2 refactors, AST mapping).
*   **Technical Architecture:** **DeepSeek TUI** and **OpenAI Codex** are aggressively pushing toward Rust-based native cores to escape the limitations of Node.js/TypeScript event loops, aiming to eliminate cold-start latency and single-threaded UI stalls.

### 5. Community Momentum & Maturity
*   **High Velocity & Maturity:** **OpenAI Codex**, **Gemini CLI**, **OpenCode**, and **Qwen Code** demonstrated massive momentum today, each shipping or merging 10+ PRs. These projects are deeply engaged with their communities, systematically closing bugs and pushing architectural refactors.
*   **Niche / Stalled Momentum:** **GitHub Copilot CLI** and **Kimi Code CLI** had quiet days with zero merged PRs. Copilot is transitioning into a mature, stable phase where issues are primarily UI/UX feature requests. Kimi Code is currently bottlenecked by severe memory and infinite-loop bugs that are halting developer workflows.
*   **Rapid Problem Solvers:** **DeepSeek TUI** showed strong maturity by immediately identifying and merging targeted fixes for their UI regressions and caching bugs, preparing the tool for an imminent patch release.

### 6. Trend Signals
*   **The Rust Migration is Accelerating:** To support deep agentic workflows, the inherent I/O bottlenecks of JavaScript-based TUIs are becoming unacceptable. DeepSeek and Codex's focus on Rust cores signals an industry shift toward compiled, native CLI binaries for high-performance agent execution.
*   **AST Over Raw Text:** Gemini's push for AST-aware file reads indicates that LLMs can no longer rely on naive text dumping to understand codebases. Token limits and cost demand that CLIs parse code structurally, fetching only the necessary method bounds.
*   **Security as an Afterthought vs. Core Feature:** The sheer volume of requests for `.codexignore`, deterministic PII redaction (Gemini's Auto Memory), and Cedar policy gates (Claude's MCP plugin) proves that developers expect CLIs to handle proprietary code with the same security postures as traditional CI/CD pipelines.
*   **The "Agentic Black Hole" Problem:** The prevalence of infinite loops—whether reading files (Kimi), executing sub-agents (Gemini), or compacting context (OpenCode)—reveals that models are struggling with self-correction. Future development must focus on deterministic "circuit breakers" to prevent agents from burning API credits when they lose context.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the community highlights report for the Claude Code Skills ecosystem based on recent repository activity.

### 1. Top Skills Ranking
*Ranking based on PR activity, urgency, and community engagement in fixing critical pipeline bugs:*

*   **Meta-Skill Infrastructure Fix: Eval Pipeline Optimization** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
    *   **Functionality:** Overhauls `skill-creator`'s evaluation scripts to accurately measure recall and parallelize workers.
    *   **Discussion Highlights:** Addresses a critical flaw where the description-optimization loop was evaluating against noise (reporting 0% recall across the board), severely impacting the community's ability to automate skill creation. 
    *   **Status:** Open
*   **New Skill: Document Typography Quality Control** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Automatically prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents.
    *   **Discussion Highlights:** Praised for solving subtle visual formatting issues that users rarely explicitly prompt for but drastically improve document polish.
    *   **Status:** Open
*   **New Skill: Skill-Quality & Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83))
    *   **Functionality:** Adds two meta-skills to the marketplace: one for evaluating structural quality and another for auditing security vulnerabilities in community-created skills.
    *   **Discussion Highlights:** Highly relevant given recent security concerns in the ecosystem; provides a standardized way to vet community contributions.
    *   **Status:** Open
*   **New Skill: ODT (OpenDocument) Creation and Parsing** ([PR #486](https://github.com/anthropics/skills/pull/486))
    *   **Functionality:** Enables Claude to create, fill, and convert OpenDocument Format files (.odt, .ods) and parse them to HTML.
    *   **Discussion Highlights:** Fills a major gap for open-source and enterprise users relying on ISO-standard formats rather than proprietary Microsoft formats.
    *   **Status:** Open
*   **Enhancement: Frontend-Design Actionability** ([PR #210](https://github.com/anthropics/skills/pull/210))
    *   **Functionality:** Revises the `frontend-design` skill to ensure instructions are clear, specific, and immediately actionable by Claude.
    *   **Discussion Highlights:** Focuses on token efficiency and reducing ambiguity, ensuring Claude doesn't waste cycles parsing verbose educational text.
    *   **Status:** Open

### 2. Community Demand Trends
Based on open Issues, the community is heavily trending toward **Enterprise Collaboration, Security, and Cross-Platform Stability**:

*   **Organizational Workflows:** Users are desperately requesting native, org-wide skill sharing without manual file passing ([Issue #228](https://github.com/anthropics/skills/issues/228)).
*   **Security & Trust Boundaries:** There is massive anxiety around community skills spoofing the `anthropic/` namespace to gain elevated permissions. Users want strict governance and trust scoring built into the skill execution layer ([Issue #492](https://github.com/anthropics/skills/issues/492), [Issue #412](https://github.com/anthropics/skills/issues/412)).
*   **Cross-Cloud & API Integration:** Developers want skills to map cleanly to MCPs ([Issue #16](https://github.com/anthropics/skills/issues/16)) and seek official guidance/tutorials for running skills via AWS Bedrock ([Issue #29](https://github.com/anthropics/skills/issues/29)).
*   **Reliability of the `skill-creator` Toolchain:** The community is heavily focused on fixing broken silent failures in YAML parsing, multi-byte UTF-8 truncation, and Windows compatibility ([Issue #1061](https://github.com/anthropics/skills/issues/1061), [Issue #1169](https://github.com/anthropics/skills/issues/1169)).

### 3. High-Potential Pending Skills
These open PRs address immediate pain points and have a high likelihood of merging soon:

*   **Eval & Trigger Detection Fixes** ([PR #1323](https://github.com/anthropics/skills/pull/1323)): Solves the literal slash-command trigger failures in `run_eval.py`. Merging this is a prerequisite for resuming automated skill optimization.
*   **DOCX Tracked Changes Collision Fix** ([PR #541](https://github.com/anthropics/skills/pull/541)): Fixes a severe bug where the DOCX skill uses hardcoded low IDs, colliding with existing bookmarks and corrupting Word documents.
*   **Windows Subprocess & Compatibility Fixes** ([PR #1050](https://github.com/anthropics/skills/pull/1050)): Implements one-line fixes for `PATHEXT` failures and `cp1252` encoding bugs that make `run_loop.py` completely unusable on Windows 11.
*   **UTF-8 Byte-Length Validation** ([PR #362](https://github.com/anthropics/skills/pull/362)): Prevents Rust-CLI panics by switching from character-based length checks to byte-length validation during skill validation.
*   **Community Contributions Guideline** ([PR #509](https://github.com/anthropics/skills/pull/509)): Adds a `CONTRIBUTING.md` to address the repo's low community health score and streamline external PRs.

### 4. Skills Ecosystem Insight
The community's most concentrated demand is for **robust security boundaries to prevent namespace spoofing, native enterprise-grade sharing capabilities, and a reliable cross-platform `skill-creator` evaluation pipeline.**

---

Here is the Claude Code community digest for June 29, 2026, based on the latest GitHub repository activity.

### 1. Today's Highlights
The community saw a massive influx of feature requests and bug reports surrounding cybersecurity safety filters, reverse-engineering workflows, and API cost tracking. Several new plugin PRs were introduced to enhance tool-call security and LLM context sharing. Meanwhile, Windows and WSL users continue to face critical environment integration bugs.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[Bug] Cowork VM fails to boot on Snapdragon X Plus (ARM64)** ([#39636](https://github.com/anthropics/claude-code/issues/39636)): A highly-discussed bug (33 comments) where the Cowork VM guest kernel times out on ARM64 Windows devices, completely blocking developers using the new Snapdragon X hardware.
*   **[A11y] Speak Claude's responses aloud** ([#58429](https://github.com/anthropics/claude-code/issues/58429)): An accessibility request (22 comments) to implement Text-to-Speech (TTS) for Claude's responses, aiding blind/low-vision users and hands-free workflows.
*   **[Cost] Team plan needs a Max 20x equivalent tier** ([#47509](https://github.com/anthropics/claude-code/issues/47509): With 45 upvotes, power users are requesting a higher-tier Team plan. The current "Premium" (6.25x Pro usage) is insufficient for heavy agentic coding workflows.
*   **[Bug][cyber] Drone firmware rollback falsely flagged** ([#72148](https://github.com/anthropics/claude-code/issues/72148)): An authorized developer was blocked from rolling back consumer drone firmware to remove a closed-source blob due to a false positive in the cybersecurity safety filter.
*   **[Bug][cyber] Cloud IAM audit work incorrectly flagged** ([#72132](https://github.com/anthropics/claude-code/issues/72132)): Legitimate Cloud IAM auditing and review tasks were halted by the safety filter, highlighting blind spots in the model's contextual understanding of authorized security work.
*   **[Bug] Weekly usage limit increased without API calls** ([#69428](https://github.com/anthropics/claude-code/issues/69428)): A macOS user reported a mysterious jump from 75% to 100% weekly quota usage without any active sessions, eroding trust in the platform's cost tracking.
*   **[Bug] API errors causing quota limits/usage** ([#72023](https://github.com/anthropics/claude-code/issues/72023)): A closed issue where a user discovered that server-side API errors (which ran repeatedly during large sessions) consumed their entire weekly usage limit.
*   **[Bug] `/rewind` overwrites settings.json** ([#72125](https://github.com/anthropics/claude-code/issues/72125): On Windows, using the `/rewind` command inadvertently restores global configurations (`settings.json`) to previous states, wiping out third-party model configurations and auth tokens.
*   **[Bug] `/ide` rejects valid JetBrains lockfile from WSL2** ([#72129](https://github.com/anthropics/claude-code/issues/72129)): WSL2 integration remains buggy; Claude Code falsely treats live JetBrains IDEs as orphaned because it can't map Windows PIDs from inside the Linux subsystem.
*   **[Bug] Claude Code fails basic Electron video embedding** ([#72151](https://github.com/anthropics/claude-code/issues/72151)): A developer reported Claude struggling for hours with a straightforward task (embedding mpv video playback in Electron), resulting in poor technical choices and infinite loop debugging.

### 4. Key PR Progress
Developers contributed 5 new Pull Requests focusing on security and workflow extensibility:

*   **Add handover plugin** ([#72037](https://github.com/anthropics/claude-code/pull/72037)): Introduces a `/handover` plugin that exports the current session context into a structured markdown file, allowing seamless handoffs to a new Claude session, a different LLM, or human teammates.
*   **Add protect-mcp plugin** ([#72014](https://github.com/anthropics/claude-code/pull/72014)): Implements a fail-closed Cedar policy gate that intercepts, validates, and signs MCP tool calls, providing offline-verifiable receipts for every approved execution.
*   **Open source claude code** ([#41447](https://github.com/anthropics/claude-code/pull/41447)): A community-driven PR (open since March) aiming to address multiple highly-requested transparency and open-source issues.
*   **Fix hookify event filtering** ([#62315](https://github.com/anthropics/claude-code/pull/62315)): A recently closed PR that patched event filtering behaviors within pre and post-execution hooks.
*   **Docs: Update plugin install instructions** ([#72000](https://github.com/anthropics/claude-code/pull/72000)): Updates the official documentation to recommend specific modern installers for Claude Code plugins.

### 5. Feature Request Trends
*   **Safety Filter Tuning for Security Work:** The vast majority of today's issues call for refined safety heuristics. Legitimate security researchers, reverse engineers, and Cloud IAM auditors are getting their sessions halted due to overly broad `cyber` classifications.
*   **Advanced Accessibility (a11y):** Request for intrinsic UI accommodations, specifically built-in Text-to-Speech for hands-free coding.
*   **Usage & Quota Transparency:** Developers want clearer insights into what is actively consuming their rate limits, especially regarding unintended background processes and server-side errors.
*   **Data Redaction Controls:** Requests for the ability to audit, scrub, and redact Personally Identifiable Information (PII) and secrets *before* submitting feedback (`/feedback`) to Anthropic.

### 6. Developer Pain Points
*   **Invisible Costs:** Developers are increasingly frustrated by quota limits being consumed by server-side API errors or phantom background usage that occurred outside of their active coding sessions. 
*   **Windows & WSL2 Instability:** The Windows ecosystem remains highly unstable for advanced workflows. PID mapping between Windows and WSL2 breaks IDE integrations, and state-rewinding tools (like `/rewind`) destructively overwrite global configurations.
*   **Hard-Stop False Positives:** The model's refusal to process safe, authorized code (particularly in cryptography, reverse engineering, and firmware modification) without offering a manual override is causing severe workflow bottlenecks for security professionals.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for June 29, 2026.

### 1. Today's Highlights
The Codex community is actively discussing severe discrepancies in rate-limit token consumption following the rollout of `gpt-5.5`, with multiple high-traffic issues reporting that 5-hour quotas are being drained almost instantly. On the development side, the team shipped a new Rust core alpha (`0.143.0-alpha.29`) and pushed several key Pull Requests focused on hardening MCP (Model Context Protocol) OAuth stability and introducing granular tool approval modes.

### 2. Releases
*   **[rust-v0.143.0-alpha.29](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.29)**: Latest alpha release for the Rust-based core components.

### 3. Hot Issues
*   **[#28879](https://github.com/openai/codex/issues/28879) [bug] Rate-limit cost per token jumped 10-20x**: A highly upvoted issue (339 👍) where Plus plan users report `gpt-5.5` token billing has multiplied drastically since June 16, draining the 5h budget in just 2-3 prompts.
*   **[#29955](https://github.com/openai/codex/issues/29955) & [#30002](https://github.com/openai/codex/issues/30002) [bug] Instant quota drain**: Users on Pro plans report that 5-hour limits reset to 0% after a single message or roughly 1.35M tokens due to server-side quota accounting bugs.
*   **[#28224](https://github.com/openai/codex/issues/28224) [bug] SQLite feedback logs causing 640 TB/year writes**: Closed after a successful community fix, this highlighted a critical issue where persistent logging was rapidly degrading SSD endurance. 
*   **[#2847](https://github.com/openai/codex/issues/2847) [enhancement] Exclude sensitive files**: A massively popular request (446 👍) asking for a `.codexignore` mechanism at both global and repository levels to prevent the agent from reading or uploading sensitive context.
*   **[#30364](https://github.com/openai/codex/issues/30364) [bug] GPT-5.5 reasoning-token clustering**: Developers found that `gpt-5.5` outputs disproportionately cluster reasoning tokens at exact boundaries (516, 1034, 1552), leading to degraded performance on complex tasks.
*   **[#23794](https://github.com/openai/codex/issues/23794) [bug] Missing token usage indicator**: ChatGPT Business users report a UI regression where the Desktop app no longer displays visible context or token usage metrics.
*   **[#29072](https://github.com/openai/codex/issues/29072) [bug] Windows apply_patch sandbox failures**: The `apply_patch` tool fails on Windows because the sandbox setup executable cannot launch properly from its package path.
*   **[#24510](https://github.com/openai/codex/issues/24510) [bug] High CPU from unbounded thread metadata**: Desktop app performance degradation caused by sustained CPU/GPU usage when local profiles contain large numbers of active threads.
*   **[#29532](https://github.com/openai/codex/issues/29532) [bug] macOS SQLite TRACE log churn**: Even after the `v0.142.0` patch, macOS users report ongoing high-frequency log churning persisting to local SQLite databases.
*   **[#30357](https://github.com/openai/codex/issues/30357) [bug] Excessive limit consumption for "ping"**: Users note that a simple "ping" message on `gpt-5.5` low consumes 13% of the 5-hour usage limit, indicating deeply flawed telemetry or billing execution.

### 4. Key PR Progress
*   **[#30482](https://github.com/openai/codex/pull/30482) Add `writes` app approval mode**: Introduces a new tool approval mode where read-only tools skip approval, but all write/destructive tools prompt the user.
*   **[#30395](https://github.com/openai/codex/pull/30395) Show usage-limit reset expiry details**: Updates the rate limits API response to include banked usage-limit reset expiry dates, allowing clients to display better context to frustrated users.
*   **[#30292 - #30296](https://github.com/openai/codex/pull/30292) MCP OAuth Stack**: A 5-PR stack dedicated to hardening MCP authentication by serializing credential stores, routing OAuth recovery through Codex, and handling credential drift.
*   **[#30467](https://github.com/openai/codex/pull/30467) Treat `max` as first-class reasoning effort**: Upgrades the `max` reasoning effort from an opaque custom effort to a productized label for Bedrock GPT-5.6 compatibility.
*   **[#29740](https://github.com/openai/codex/pull/29740) Model metadata for skills usage**: Moves away from hardcoded legacy-model matching to dynamically consuming skills usage instructions via model metadata.
*   **[#30252](https://github.com/openai/codex/pull/30252) Cache remote Bash environment exports**: Optimizes remote Bash execution by initializing exports once per session and keeping them executor-local in memory.
*   **[#30480](https://github.com/openai/codex/pull/30480) Fix duplicate unicode keyboard input**: Resolves TUI bugs where non-ASCII characters were being duplicated in specific terminals like Windows Terminal and Warp.
*   **[#30217](https://github.com/openai/codex/pull/30217) Remove unavailable task messages**: Cleans up the `list_agents` payload by stripping encrypted V2 task messages that the bridge cannot decrypt.
*   **[#30228](https://github.com/openai/codex/pull/30228) Expose thread-selected skills**: Passes thread-scoped environment skills to invocation clients so the UI correctly updates when an executor becomes ready.
*   **[#30297](https://github.com/openai/codex/pull/30297) Enable remote plugins by default**: Promotes the remote plugin feature from "under development" to stable and enabled by default.

### 5. Feature Request Trends
*   **Granular Sandbox Controls & Security**: Developers are requesting better mechanisms to control what the agent can see and touch. The massive response to `.codexignore` support (#2847) shows a strong desire for repo-local and global path exclusions.
*   **Execution Control & Automation**: Users want more control over automated agent workflows, such as disabling the 60-second auto-resolve timer for questions (#28969) to allow for asynchronous, unattended operations.
*   **Native OS Synergies**: There is an ongoing trend of requests to make the Codex Desktop app behave more like a standard native application (e.g., standard macOS window controls #27505, fixing native Git UI panes #30484).

### 6. Developer Pain Points
*   **Severe Rate Limiting & Telemetry Bugs**: The most prominent pain point across the ecosystem right now is broken token accounting on `gpt-5.5`, resulting in strict usage limits triggering after a fraction of the expected usage.
*   **Windows OS Stability**: Windows users are facing a disproportionate number of sandboxing, patching, and shell-parsing bugs (e.g., #29072, #30473, #30405, #30486).
*   **App Resource Consumption**: Background processing continues to be a hardware headache, with unbounded thread metadata (#24510), idle fan noise (#29281), and SQLite database I/O churn (#29532) rapidly degrading SSDs and draining batteries.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 29, 2026.

### 1. Today's Highlights
The Gemini CLI rolled out a new nightly build (v0.51.0) focusing on tightening security path blocklists. The community and maintainers are heavily focused on enhancing agent autonomy, specifically addressing subagent reliability, task execution hangs, and improving the robustness of the Auto Memory system. Additionally, significant strides were made in patching Model Context Protocol (MCP) integration bugs and VS Code companion quirks.

### 2. Releases
*   **[v0.51.0-nightly.20260628](https://github.com/google-gemini/gemini-cli/releases/tag/v0.51.0-nightly.20260628.gae0a3aa7b)**
    *   **Security Fix:** Enforced a case-insensitive sensitive path blocklist and improved VS Code Human-in-the-Loop (HITL) security checks ([PR #27966](https://github.com/google-gemini/gemini-cli/pull/27966)).

### 3. Hot Issues
1.  **[Subagent recovery masking failures (#22323)](https://github.com/google-gemini/gemini-cli/issues/22323):** A high-priority bug where the `codebase_investigator` subagent falsely reports "success" after hitting `MAX_TURNS`, hiding the fact that no analysis was actually completed.
2.  **[Generalist agent hangs indefinitely (#21409)](https://github.com/google-gemini/gemini-cli/issues/21409):** A critical P1 issue where the generalist agent hangs forever on simple operations like folder creation. Users are currently forced to manually disable subagents to maintain workflow.
3.  **[Leveraging bash via Zero-Dependency OS Sandboxing (#19873)](https://github.com/google-gemini/gemini-cli/issues/19873):** A highly discussed proposal to utilize the model's native bash affinity securely without compromising user systems.
4.  **[Deterministic redaction for Auto Memory (#26525)](https://github.com/google-gemini/gemini-cli/issues/26525):** Security concern regarding Auto Memory sending local transcripts to background models. The community is requesting pre-processing redaction before secrets hit the model context.
5.  **[Shell command execution gets stuck (#25166)](https://github.com/google-gemini/gemini-cli/issues/25166):** The CLI frequently hangs on "Awaiting user input" long after simple shell commands have finished executing.
6.  **[Gemini doesn't use custom skills/sub-agents (#21968)](https://github.com/google-gemini/gemini-cli/issues/21968):** Developers report that custom-defined skills (like `gradle` or `git` wrappers) are ignored by the model unless explicitly prompted.
7.  **[Auto Memory retry loops (#26522)](https://github.com/google-gemini/gemini-cli/issues/26522):** Low-signal sessions are being indefinitely retried by the memory extractor because they are never properly marked as processed.
8.  **[AST-aware file reads and mapping (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745):** An investigation EPIC exploring AST-aware tools to reduce token noise and improve file-reading precision via single tool calls.
9.  **[Agent ignores destructive commands safety (#22672)](https://github.com/google-gemini/gemini-cli/issues/22672):** Users request built-in guardrails to discourage destructive git operations (like `git reset --force`) when safer alternatives exist.
10. **[400 Error with > 128 tools enabled (#24246)](https://github.com/google-gemini/gemini-cli/issues/24246):** The CLI crashes when MCP and native tools exceed standard limits, highlighting a need for dynamic tool scoping.

### 4. Key PR Progress
1.  **[Preserve Terminal Focus in VS Code ([PR #28183](https://github.com/google-gemini/gemini-cli/pull/28183))]:** Fixes a major UI pain point where approving file edits in VS Code closes the diff tab and steals keyboard focus from the integrated terminal.
2.  **[Fix Workspace-Trust Dialog Flaw ([PR #27915](https://github.com/google-gemini/gemini-cli/pull/27915))]:** Resolves a critical vulnerability where arbitrary shell commands in `SessionStart` hooks could execute without being displayed in the trust dialog.
3.  **[DNS Resolution for SSRF Guard ([PR #27744](https://github.com/google-gemini/gemini-cli/pull/27744))]:** Patched the `web-fetch` tool to block hostname-to-private-IP bypasses (e.g., wildcard DNS like `127.0.0.1.nip.io`).
4.  **[MCP Image MIME Type Sniffing ([PR #27878](https://github.com/google-gemini/gemini-cli/pull/27878))]:** Fixes HTTP 400 errors with Figma MCP integrations by properly sniffing WebP image signatures instead of defaulting to `image/png`.
5.  **[Fix MCP OAuth Refresh Path ([PR #27889](https://github.com/google-gemini/gemini-cli/pull/27889))]:** Resolves authentication failures for auto-discovered MCP servers lacking a static OAuth client ID.
6.  **[Normalize MCP Tool Schemas ([PR #27888](https://github.com/google-gemini/gemini-cli/pull/27888))]:** Automatically injects the root `type: "object"` into MCP tool input schemas to prevent Vertex AI strict mode validation crashes.
7.  **[Improve Slash-Command Conflict Notifier ([PR #27860](https://github.com/google-gemini/gemini-cli/pull/27860))]:** Fixes a deduplication bug where resolved slash-command conflicts were not re-notified if they reappeared later.
8.  **[UI Update: ToDo to Tasks ([PR #22279](https://github.com/google-gemini/gemini-cli/pull/22279))]:** Refactors the list tray component in the UI to rename "ToDo" to the more accurate "Tasks".
9.  **[A2A Server Crash Prevention ([PR #27754](https://github.com/google-gemini/gemini-cli/pull/27754))]:** Adds a missing return statement in the Agent-to-Agent (A2A) server HTTP handling to prevent `ERR_HTTP_HEADERS_SENT` crashes.
10. **[Honor `.gitignore` in `<session_context>` ([PR #27886](https://github.com/google-gemini/gemini-cli/pull/27886))]:** Ensures the directory tree passed to the model properly respects repository ignore rules, preventing unnecessary token bloat.

### 5. Feature Request Trends
*   **Deep AST Integration:** Developers want to move beyond naive text reading. There is a strong push to integrate AST-aware CLI tools (like *tilth* or *glyph*) so agents can read specific method bounds, map codebases intelligently, and reduce token overhead.
*   **Resilient Browser & Sub-Agents:** The community is asking for better self-recovery mechanisms for agents. Key requests include browser agent lock recovery, automatic session takeover, and surfacing subagent trajectories in `/chat share` for better debugging.
*   **Enhanced Agent Self-Awareness:** Requests to improve how the model understands its own CLI mechanics—specifically knowing its own flags, hotkeys, and when *not* to use destructive shell commands.

### 6. Developer Pain Points
*   **Agent Reliability & Hanging:** The most prominent frustration is the generalist agent hanging indefinitely on trivial tasks. Developers are disabling subagents just to keep their workflows running.
*   **Unsafe Workspace Modifications:** Users are frustrated by agents scattering temporary edit scripts across directories and using risky `git` commands, requiring extensive manual workspace cleanup.
*   **Auto Memory System Noise:** The memory system is currently viewed as over-aggressive and insecure. It loops indefinitely on low-signal files and fails to deterministically redact sensitive data before sending local transcripts to the background extraction model.
*   **IDE Context Switching:** In VS Code, losing terminal focus after approving diffs forces a repetitive, click-heavy workflow that breaks developer flow state.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 29, 2026.

### 1. Today's Highlights
The community activity over the past 24 hours has been heavily focused on enhancing session management and UI navigation, with multiple feature requests aiming to improve multi-tasking workflows. Developers also reported a few persistent environmental bugs, notably regarding proxy configurations in enterprise setups and terminal integration issues on Ubuntu.

### 2. Releases
**None.** 
There have been no new releases or version updates in the last 24 hours. 

### 3. Hot Issues
*   **[#2978](https://github.com/github/copilot-cli/issues/2978) [OPEN] `session.create` fails behind corporate proxy**
    *   *Why it matters:* Enterprise users running the Copilot SDK in headless mode are encountering "fetch failed" errors due to corporate HTTP proxies. This blocks adoption in restricted corporate network environments.
    *   *Community reaction:* Low engagement so far (2 comments), but represents a critical blocker for enterprise integrations.
*   **[#3964](https://github.com/github/copilot-cli/issues/3964) [CLOSED] Copying soft-wrapped output drops space at wrap boundary**
    *   *Why it matters:* Copying multi-line terminal outputs currently glues words together at the wrap boundary. This was reported as an incomplete fix for a previous issue (#3666) and causes broken code or commands when pasted elsewhere.
    *   *Community reaction:* Resolved/closed quickly with 1 comment, indicating active maintenance on terminal rendering bugs.
*   **[#3971](https://github.com/github/copilot-cli/issues/3971) [OPEN] [Feature] Full file-tree browser for repository-backed sessions**
    *   *Why it matters:* Currently, only folder-backed sessions get a file-tree UI. Users want this expanded to repository-backed (worktree) sessions so they aren't restricted to just the git *Changes* view when navigating code.
    *   *Community reaction:* Newly created, pending triage.
*   **[#3970](https://github.com/github/copilot-cli/issues/3970) [OPEN] [Feature] User-defined tags on sessions**
    *   *Why it matters:* As developers juggle multiple features or repositories, the flat session list is becoming difficult to navigate.
    *   *Community reaction:* Addresses a growing need for better organization and searchability of past CLI sessions.
*   **[#3969](https://github.com/github/copilot-cli/issues/3969) [OPEN] [Feature] Plan status indicators on session list**
    *   *Why it matters:* Users want visual badges or symbols on the session list to see the execution status of a Copilot plan at a glance, preventing the need to click into each session.
    *   *Community reaction:* Highly aligned with current trends of improving multi-session management.
*   **[#3967](https://github.com/github/copilot-cli/issues/3967) [OPEN] Copilot disappeared while working in two terminals (Ubuntu)**
    *   *Why it matters:* A frustrating runtime crash where the CLI uninstalls or becomes uncallable after being invoked in parallel terminals (Guake/Terminal). 
    *   *Community reaction:* The user expressed high enthusiasm for the tool initially, making the sudden environment failure a jarring experience.
*   **[#3815](https://github.com/github/copilot-cli/issues/3815) [OPEN] Debug logs saved to location missing a `\` on Windows**
    *   *Why it matters:* A simple but annoying path formatting bug on Windows. The missing backslash breaks copy-pasting log directories directly into Windows Explorer.
    *   *Community reaction:* Pending triage since mid-June, highlighting a minor but persistent UX friction point for Windows developers.

### 4. Key PR Progress
*   **[#3968](https://github.com/github/copilot-cli/pull/3968) [CLOSED] Rename changelog.md to changelog.md**
    *   *Summary:* A minor, no-op repository maintenance PR that was closed. No significant feature or bug-fix PRs were merged or updated in the last 24 hours.

### 5. Feature Request Trends
The most prominent trend is **Session Organization and Visibility**. As developers scale their usage of the Copilot CLI, managing multiple active workstreams is becoming a primary friction point. The community is collectively asking for better Information Architecture (IA) in the UI—specifically requesting custom tagging, visual status badges, and unified file-tree navigation regardless of the underlying session type (folder vs. repository-backed).

### 6. Developer Pain Points
*   **Terminal & Output Handling:** Developers are frequently frustrated by terminal interaction bugs, such as spaces being dropped during soft-wrap copy/pasting ([#3964](https://github.com/github/copilot-cli/issues/3964)) and erratic behavior when running the CLI across multiple terminal instances ([#3967](https://github.com/github/copilot-cli/issues/3967)).
*   **Environment & OS Specific Friction:** Corporate proxies continue to be a major hurdle for headless SDK usage ([#2978](https://github.com/github/copilot-cli/issues/2978)), alongside minor platform-specific formatting bugs, such as broken Windows file paths in debug outputs ([#3815](https://github.com/github/copilot-cli/issues/3815)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the community digest for the Kimi Code CLI project.

### 1. Today's Highlights
The Kimi Code CLI community experienced a relatively quiet day with no new releases or merged Pull Requests. However, two significant open bug reports saw renewed activity and discussions. The focus remains on improving agent execution stability and optimizing memory consumption for IDE integrations during intensive tasks.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
*(Note: Distilled from the available 24-hour update window)*

*   **[#640] [bug] Kimi CLI stuck in reading one file again and again and stuck in a loop**
    *   **Why it matters:** Infinite loops are critical failures for autonomous coding agents, rendering the tool unusable and consuming excessive token limits. This issue occurs on Linux (v0.76) when using a custom Anthropic endpoint with the `mimo-v2-flash` model.
    *   **Community Reaction:** Highly active discussion (15 comments), with users troubleshooting context handling, model configurations, and file-reading logic. 
    *   **Link:** [MoonshotAI/kimi-cli Issue #640](https://github.com/MoonshotAI/kimi-cli/issues/640)
*   **[#1592] [bug] kimi code vscode plug-in consumes a lot of memory**
    *   **Why it matters:** High memory consumption directly impacts developer workflow, causing IDE lag or crashes during long-running code generation or refactoring tasks. 
    *   **Community Reaction:** Users on macOS (Darwin arm64) have reported memory bloat in the VSCode extension (v0.4.5) after approximately 30 minutes of complex task execution.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1592](https://github.com/MoonshotAI/kimi-cli/issues/1592)

### 4. Key PR Progress
*No Pull Requests were updated or merged in the last 24 hours.*

### 5. Feature Request Trends
Based on recent issue trajectories and community feedback, the primary requests focus on:
*   **Agent Stability & Guardrails:** Users are heavily requesting improved context management and strict loop-prevention mechanisms to stop agents from getting stuck reading the same files or repeating failed actions.
*   **IDE Resource Optimization:** Strong demand for better memory management and garbage collection within the VSCode plugin, allowing developers to run long, continuous tasks without degrading editor performance.
*   **Third-Party Model Compatibility:** Ongoing interest in refining the CLI's interaction with custom endpoints (e.g., Anthropic proxies) and non-native models (e.g., `mimo-v2-flash`), ensuring stable context parsing across different API formats.

### 6. Developer Pain Points
*   **Execution Freezes:** The agent entering infinite loops during complex file parsing is a major frustration, breaking the core promise of autonomous task completion.
*   **Extension Bloat:** IDE sluggishness caused by memory leaks during prolonged Kimi Code sessions forces developers to frequently restart their environment or abandon long-running agentic tasks midway.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for June 29, 2026.

### 1. Today's Highlights
OpenCode's engineering focus remains locked into the V2 architecture overhaul, evidenced by a flurry of pull requests enabling V2 session forking, manual compaction, and subagent tooling. Community discussions are heavily centered around provider compatibility (notably local models like Gemma-4 and NVIDIA NIM endpoints) and critical stability bugs, including high CPU utilization and TUI clipboard failures.

### 2. Releases
*No new releases were published in the last 24 hours. The latest active development continues to target the V2 core architecture.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[Feature] Support for Cursor?** ([#2072](https://github.com/anomalyco/opencode/issues/2072))
    *   **Why it matters:** With Cursor releasing a dedicated CLI, the community (186 👍) is highly interested in native integration. This highlights a strong demand for OpenCode to act as an agnostic orchestration layer for emerging coding agents.
*   **[Bug] Cannot copy and paste in OpenCode CLI** ([#13984](https://github.com/anomalyco/opencode/issues/13984))
    *   **Why it matters:** A fundamental UX blocker. Users report that copying from the CLI indicates success but fails system-wide on `Ctrl+V`, causing significant frustration in daily workflows.
*   **[Bug] High CPU utilization (99-100%) making CLI unresponsive** ([#33399](https://github.com/anomalyco/opencode/issues/33399))
    *   **Why it matters:** Periodic CPU spiking causes the CLI to freeze and ignore keyboard inputs entirely. This severely impacts reliability for developers leaving sessions running in the background.
*   **[Bug] Gemma-4 interaction issues leading to tool loops** ([#21034](https://github.com/anomalyco/opencode/issues/21034))
    *   **Why it matters:** Shows a critical gap in local LLM reliability. Gemma-4 models (26b/31b) running via LM Studio fall into infinite tool loops, highlighting tokenizer and prompt adherence issues with smaller/local models.
*   **[Bug] Auto-compaction loop stops generation** ([#30680](https://github.com/anomalyco/opencode/issues/30680))
    *   **Why it matters:** OpenCode is陷入 (stuck) in an infinite compaction loop, burning tokens even in empty directories and ultimately refusing to generate outputs. This completely bricks the user session.
*   **[Bug] Switching models mid-session causes SQLiteError** ([#31606](https://github.com/anomalyco/opencode/issues/31606))
    *   **Why it matters:** Changing models on the fly throws a `NOT NULL constraint failed: session_message.seq` error, instantly corrupting the session history and making it unusable.
*   **[Feature] LLM command-approval classifier ("auto mode")** ([#33585](https://github.com/anomalyco/opencode/issues/33585))
    *   **Why it matters:** A highly requested quality-of-life feature proposing an LLM-based gatekeeper to auto-approve safe commands, reducing manual friction during agentic workflows.
*   **[Bug] OpenCode Desktop fails to start (Bootstrap/SQLite errors)** ([#34303](https://github.com/anomalyco/opencode/issues/34303))
    *   **Why it matters:** Following crashes, the desktop app fails to boot entirely due to schema migration issues (`no such column: "data"`), locking Windows users out of the application.
*   **[Bug] Exposes unstable, incomplete subset of project skills** ([#34228](https://github.com/anomalyco/opencode/issues/34228))
    *   **Why it matters:** Skills configured in `.opencode/skills` are inconsistently loaded between sessions. This undermines trust in OpenCode's custom skill/tool routing capabilities.
*   **[Feature] SessionStart hook for lifecycle events** ([#5409](https://github.com/anomalyco/opencode/issues/5409))
    *   **Why it matters:** Developers want Claude Code-style hooks to execute scripts upon session initialization, crucial for dynamic environment setup and context priming.

### 4. Key PR Progress
Active development is heavily focused on the V2 core refactor and expanding provider support:

*   **[feat(core)] V2 Session Forking** ([#34343](https://github.com/anomalyco/opencode/pull/34343))
    *   Implements `SessionV2.fork()` to create child sessions with fresh message IDs and advanced event sequences, preventing seq collisions.
*   **[feat(core)] V2 Manual Compaction** ([#34336](https://github.com/anomalyco/opencode/pull/34336))
    *   Brings manual compaction to V2 sessions by unifying the selector and summarizer logic with the automatic compaction events.
*   **[feat(core)] Wire V2 Subagent Tool** ([#34320](https://github.com/anomalyco/opencode/pull/34320))
    *   Registers the `subagent` tool in V2, allowing foreground child completion and background promotion while securely resolving caller-location agents.
*   **[feat(core)] Generate Anthropic Thinking Variants** ([#34333](https://github.com/anomalyco/opencode/pull/34333))
    *   Fixes a V2 regression where Anthropic reasoning models lost UI controls. This PR dynamically generates thinking variants for Claude models to enable reasoning toggles.
*   **[fix(core)] Commit Staged Revert Before Prompt** ([#34338](https://github.com/anomalyco/opencode/pull/34338))
    *   Ensures that staged reverts are committed before a new user prompt is processed, preventing history corruption and ensuring prompts execute from the reverted state.
*   **[feat(core)] Optional Plugin Gate in PermissionV2** ([#34329](https://github.com/anomalyco/opencode/pull/34329))
    *   Enhances the V2 permission engine by allowing plugins to dynamically transition tool permissions from "allow" to "ask", tightening security controls.
*   **[feat(opencode)] Add LiteLLM Provider** ([#14468](https://github.com/anomalyco/opencode/pull/14468))
    *   Introduces native LiteLLM support, auto-discovering models from local proxies and eliminating manual configuration overhead for developers using multi-proxy setups.
*   **[fix(mcp)] Stabilize Tool Ordering** ([#32510](https://github.com/anomalyco/opencode/pull/32510))
    *   Sorts MCP servers and tools alphabetically based on sanitized prompt keys, ensuring deterministic behavior regardless of JSON config ordering.
*   **[feat(usage)] Unified Usage Tracking with Auth Refresh** ([#9545](https://github.com/anomalyco/opencode/pull/9545))
    *   Implements a unified `Usage.Service` layer to track token consumption seamlessly across OAuth providers like Claude, GitHub Copilot, and ChatGPT.
*   **[feat(opencode)] Add Kiro Provider** ([#20491](https://github.com/anomalyco/opencode/pull/20491))
    *   Bundles AWS Kiro as a native provider, expanding OpenCode's enterprise cloud ecosystem reach.

### 5. Feature Request Trends
Analyzing the issue tracker reveals three distinct trends in what developers want next:
1.  **Broader Provider & CLI Integrations:** Strong momentum behind supporting external agents and wrappers. Users want OpenCode to support Cursor CLI ([#2072](https://github.com/anomalyco/opencode/issues/2072)), AWS Kiro ([#20491](https://github.com/anomalyco/opencode/pull/20491)), and LiteLLM ([#14468](https://github.com/anomalyco/opencode/pull/14468)).
2.  **Automated Safety & Workflow Hooks:** Developers are asking for ways to reduce manual intervention. This includes LLM-based "auto-approve" classifiers for permissions ([#33585](https://github.com/anomalyco/opencode/issues/33585)) and lifecycle hooks like `SessionStart` to automate environment prep ([#5409](https://github.com/anomalyco/opencode/issues/5409)).
3.  **Cost & Token Transparency:** As context windows grow, users want granular insights into their usage. Requests to break down cached vs. fresh tokens in the context meter ([#34296](https://github.com/anomalyco/opencode/issues/34296)) and unified usage tracking ([#9545](https://github.com/anomalyco/opencode/pull/9545)) are gaining traction.

### 6. Developer Pain Points
*   **Local Model Fragility:** Integrating local engines (LM Studio, llama.cpp) remains a massive pain point. Models like Gemma-4 easily trip into infinite tool loops ([#21034](https://github.com/anomalyco/opencode/issues/21034)), and providers like NVIDIA NIM require strict, easily broken chat templates to enable reasoning ([#24264](https://github.com/anomalyco/opencode/issues/24264), [#34177](https://github.com/anomalyco/opencode/issues/34177)).
*   **Context & Compaction Failures:** Auto-compaction is currently over-aggressive and buggy. Users report it looping infinitely and consuming tokens even in empty folders ([#30680](https://github.com/anomalyco/opencode/issues/30680)), completely halting their workflows.
*   **State Persistence & DB Crashes:** Session state management is fragile. Switching models mid-session breaks SQLite constraints ([#31606](https://github.com/anomalyco/opencode/issues/31606)), and unexpected crashes are corrupting local databases, causing bootstrap failures on startup ([#34303](https://github.com/anomalyco/opencode/issues/34303)).
*   **TUI/CLI Quirks:** Fundamental terminal interactions are degrading the experience, specifically the clipboard integration failing to copy text ([#13984](https://github.com/anomalyco/opencode/issues/13984)) and the CLI hijacking CPU resources to the point of input lag ([#33399](https://github.com/anomalyco/opencode/issues/33399)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-06-29.

### 1. Today's Highlights
The Pi community is actively addressing provider compatibility and Terminal UI (TUI) stability. Key discussions revolve around optimizing token consumption for large context models like z.ai's GLM, while contributors have merged several crucial fixes to prevent agent loops and normalize LLM tool interactions.

### 2. Releases
*No new releases in the last 24 hours.*

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community engagement:

*   **[Connection Reliability Issues with openai-codex / gpt-5.5](https://github.com/earendil-works/pi/issues/4945)** - The most active issue (72 comments) highlights a critical bug where `openai-codex` leaves the TUI stuck on `Working...` without streaming text or tool calls. This severely impacts developer flow, requiring a hard reset via Escape.
*   **[Streaming markdown forces scroll to bottom](https://github.com/earendil-works/pi/issues/5825)** - Users are frustrated that reading streamed markdown is nearly impossible, as the TUI forcibly scrolls to the bottom while text is generating (especially with `clear on shrink` enabled).
*   **[LLM cache not working properly with z.ai GLM coding plan](https://github.com/earendil-works/pi/issues/6083)** - Using Pi with z.ai GLM burns through session limits rapidly during multi-step tool calls. Proper caching is urgently needed to prevent users from hitting rate limits prematurely.
*   **[OpenAI Responses API mislabels empty tool results as "(see attached image)"](https://github.com/earendil-works/pi/issues/6103)** - A latent bug where empty tool call outputs are falsely rendered as image attachments, confusing the LLM and breaking automated workflows.
*   **[Windows `find` drops path characters from bare drive roots](https://github.com/earendil-works/pi/issues/6104)** - Searching from `C:\` or `I:\` results in corrupted relative paths, causing fundamental file-search operations to fail on Windows environments.
*   **[Devnagri script breaks the Pi harness UI](https://github.com/earendil-works/pi/issues/6124)** - Typing non-Latin scripts like `नेटवर्क` crashes or visually breaks the TUI, highlighting internationalization gaps in the terminal renderer.
*   **[High session usage on GLM Coding Plan - solution found](https://github.com/earendil-works/pi/issues/6113)** - A community-driven resolution detailing how to drastically reduce session token consumption when utilizing Z.ai Lite coding plans.
*   **[Scoped Anthropic API keys need necessary request params](https://github.com/earendil-works/pi/issues/6093)** - Pi currently misidentifies Claude-Code scoped API keys (which look like standard keys) due to prefix-based logic, breaking authentication for scoped workflows.
*   **[Strip unsupported `reasoning_content` for providers like Groq](https://github.com/earendil-works/pi/issues/6139)** - OpenAI-compatible endpoints that don't support `reasoning_content` throw `400 BadRequest` errors. Pi needs to gracefully strip unsupported fields before dispatching API requests.
*   **[Full screen redraw (flicker) on multiple simultaneous tool calls](https://github.com/earendil-works/pi/issues/6131)** - Asynchronous tool execution causes severe screen flickering, significantly degrading the user experience during complex agent tasks.

### 4. Key PR Progress
Recent pull requests show strong momentum in provider compatibility and core agent loop stability:

*   **[PR #6136: Guard compaction continuation](https://github.com/earendil-works/pi/pull/6136)** - Fixes an infinite loop bug where `agent.continue()` was called on an empty message queue after compaction, saving wasted compute and API calls.
*   **[PR #6144: Normalize tabs to spaces in edit tool fuzzy matching](https://github.com/earendil-works/pi/pull/6144)** - Resolves a massive pain point where LLMs fail `edit` operations because they generate spaces while the source file uses tab indentation.
*   **[PR #6146: Reverts OpenCode Go workaround](https://github.com/earendil-works/pi/pull/6146)** - Cleans up previous hotfixes; MiniMax M2.7 and Qwen 3.6 Plus now natively support `anthropic-messages` routing on OpenCode Go.
*   **[PR #4110: Fix model mismatch for OpenCode Go](https://github.com/earendil-works/pi/pull/4110)** - The predecessor to PR #6146, which originally mapped Qwen and MiniMax models to the correct API interfaces.
*   **[PR #6141: Normalize matrix-run AiCommand response parsing](https://github.com/earendil-works/pi/pull/6141)** - Hardens server-side Zod validation by unwrapping nested model envelopes before validating AI command intents and patches.
*   **[PR #6142: Enable DeepSeek `reasoning_effort: high` for scripts](https://github.com/earendil-works/pi/pull/6142)** - Introduces configurable DeepSeek reasoning effort to improve the quality of automated GitHub agent scripts.
*   **[PR #6148: Support Anthropic bearer token env](https://github.com/earendil-works/pi/pull/6148)** - Open PR by `mitsuhiko` attempting to resolve interface limitations with Anthropic bearer token authentication.
*   **[PR #6115: Add configurable chat padding](https://github.com/earendil-works/pi/pull/6115)** - Addresses highly requested Discord feedback by attempting to make terminal UI padding configurable, though architectural concerns are currently under discussion.
*   **[PR #6078: Add `get_entries` and `get_tree` RPC commands](https://github.com/earendil-works/pi/pull/6078)** - Introduces new read-only RPC commands to expose SessionManager methods, improving programmatic history retrieval.
*   **[PR #60: Fuzzy search for files and folders](https://github.com/earendil-works/pi/pull/60)** - Adds highly requested `@`-initiated fuzzy search for project files, significantly improving context attachment over manual directory walking.

### 5. Feature Request Trends
*   **Broader LLM Provider Support:** High demand for out-of-the-box integration with newer inference providers (e.g., Charm Hyper, Friendli) and seamless support for emerging models (GLM-5.2, MiniMax M3).
*   **Terminal UI Customization:** Developers want more control over the TUI experience, specifically requesting adjustable chat padding, configurable redraw behavior, and fixes for aggressive auto-scrolling.
*   **Extension Architecture Improvements:** Users are asking for deeper extension hooks, such as the ability to register payload transforms on built-in providers and expose loaded skills to custom tooling.
*   **Package Management Safety:** Requests for `npmInstallArgs` configurations (e.g., `--min-release-age`) to prevent automatically pulling in broken or malicious packages.

### 6. Developer Pain Points
*   **Context Window & Token Bleed:** A major frustration is the rapid consumption of paid session limits (particularly with z.ai), caused by inefficient LLM caching and overly aggressive context passing during tool calls.
*   **Fragile Text Editing Workflows:** LLMs struggle to perfectly replicate existing indentation (tabs vs. spaces), causing `edit` and `replace` tools to fail and forcing agents into retry loops.
*   **Cross-Platform Quirks:** Developing on Windows remains tricky due to path-parsing bugs in bare drive roots, while macOS users suffer from Pi defaulting to Apple's highly outdated system Bash (v3.2).
*   **Silent Failures in Extensions:** When custom TUI renderers fail (e.g., missing imports), Pi silently swallows the exception and falls back to default renderers, making debugging agonizingly difficult for extension developers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for June 29, 2026.

### 1. Today's Highlights
Qwen Code rolled out the **v0.19.3** patch, bringing core stability fixes such as JSON fallback for `web_fetch` and optimizations to repeated shell inspection loops. The community and core team are heavily focused on resolving aggressive token consumption behaviors—including "zombie sessions" and prompt-cache misses—alongside major architectural refactors to unify chat interfaces and optimize the daemon's performance. 

### 2. Releases
*   **[v0.19.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.3)** & **v0.19.2-nightly.20260628.714513df2**
    *   **Core:** Allowed `web_fetch` JSON fallback ([PR #5660](https://github.com/QwenLM/qwen-code/pull/5660)).
    *   **Stability:** Halted repeated, semantically similar shell inspection variants (e.g., endless `git status` loops) via an always-on loop guard ([PR #5944](https://github.com/QwenLM/qwen-code/pull/5944)).

### 3. Hot Issues
1.  **[Issue #5964](https://github.com/QwenLM/qwen-code/issues/5964) - Zombie session burns 30M tokens (P1)**
    A critical issue where an 8-hour background "zombie" agent silently exhausted API credits due to a logging blind spot at session end. The author requests proper timeout logging and auto-disconnect.
2.  **[Issue #5942](https://github.com/QwenLM/qwen-code/issues/5942) - Anthropic provider prompt-cache misses inflate cost**
    Users report that side-queries use different prefixes, causing avoidable cache misses and higher billing on Anthropic endpoints compared to Claude Code.
3.  **[Issue #5736](https://github.com/QwenLM/qwen-code/issues/5736) - Frequent full prompt re-processing**
    When using local LLMs (like llama.cpp), the client is triggering full prompt re-processing too frequently during continuous conversations, severely impacting local inference performance.
4.  **[Issue #5950](https://github.com/QwenLM/qwen-code/issues/5950) - Context length overflow (400 Internal Error)**
    The agent fails to recognize context window limits (e.g., requesting 135K tokens on a 131K limit), causing crashes instead of triggering automatic context compression.
5.  **[Issue #5683](https://github.com/QwenLM/qwen-code/issues/5683) - Subagent token counting accuracy**
    Token consumption metrics for sub-agents are wildly inaccurate, sometimes showing numbers larger than the model's allowed maximum context.
6.  **[Issue #5819](https://github.com/QwenLM/qwen-code/issues/5819) - Auto-modification of settings to expensive models**
    A highly discussed bug where upgrading the client silently overwrites `setting.json` to use pricier models (e.g., DeepSeek-4 Pro instead of Flash) and unexpectedly outputs Traditional Chinese instead of Simplified.
7.  **[Issue #5800](https://github.com/QwenLM/qwen-code/issues/5800) - Terminal UI overwrites last line (TUI Bug)**
    In default Static render mode, if an assistant reply is taller than the terminal window, the final line is overwritten the moment generation completes.
8.  **[Issue #5837](https://github.com/QwenLM/qwen-code/issues/5837) - Agent response cut off mid-generation**
    The UI stops rendering at "Dependencies added:", though raw logs show the model actually finished the thought. 
9.  **[Issue #5958](https://github.com/QwenLM/qwen-code/issues/5958) - Web Shell CodeMirror editor broken on mobile**
    The input editor fails to function entirely on mobile browsers (iOS Safari/Android Chrome) when accessing the Web Shell via `qwen serve`.
10. **[Issue #5941](https://github.com/QwenLM/qwen-code/issues/5941) - Aggressive scroll jump during generation**
    Scrolling up even slightly while the model is generating output instantly snaps the view back to the very top of the transcript.

### 4. Key PR Progress
1.  **[PR #5957](https://github.com/QwenLM/qwen-code/pull/5957) - Fix auto-compression thresholds**
    Solves the 400 context length error by subtracting reserved max output tokens from the calculation, ensuring auto-compression fires before hitting API hard limits.
2.  **[PR #5951](https://github.com/QwenLM/qwen-code/pull/5951) - Unified `@qwen-code/chat-panel`**
    A massive architectural refactor extracting the Web Shell's conversation flow into a shared package for future use across Web Shell, VSCode, and Desktop apps.
3.  **[PR #5030](https://github.com/QwenLM/qwen-code/pull/5030) - Native turn resumption**
    Allows the SDK to resume an interrupted/crashed assistant turn natively without injecting hacky synthetic "continue" user prompts.
4.  **[PR #5962](https://github.com/QwenLM/qwen-code/pull/5962) - `--insecure` TLS flag**
    Adds a much-needed CLI flag (`--insecure` / `QWEN_TLS_INSECURE`) to skip TLS verification for self-hosted endpoints with self-signed certificates.
5.  **[PR #5852](https://github.com/QwenLM/qwen-code/pull/5852) - Daemon `/acp` session stream resumption**
    Implements SSE `Last-Event-ID` handling for the daemon's event-replay engine, allowing seamless stream reconnects.
6.  **[PR #5963](https://github.com/QwenLM/qwen-code/pull/5963) - Optimize memory recall**
    Prevents the agent from spinning up memory recall tasks if the auto-memory feature is disabled, saving background token usage.
7.  **[PR #5960](https://github.com/QwenLM/qwen-code/pull/5960) - Telemetry docs overhaul**
    Comprehensively matches telemetry documentation to the current implementation, adding 34 previously undocumented events and dozens of metrics.
8.  **[PR #5848](https://github.com/QwenLM/qwen-code/pull/5848) - Collapsible UI history**
    Introduces `ui.history.collapsePreviewCount` to keep only the N most recent turns visible when resuming long, collapsed sessions.
9.  **[PR #5847](https://github.com/QwenLM/qwen-code/pull/5847) - Runtime context injection**
    Adds a per-session key-value store for external callers to inject dynamic `<system-reminder>` blocks into every turn.
10. **[PR #5821](https://github.com/QwenLM/qwen-code/pull/5821) - Disable follow-ups on local LLMs**
    Automatically disables follow-up suggestion generation for local OpenAI-compatible endpoints (localhost) to reduce inference latency.

### 5. Feature Request Trends
*   **Granular Model Routing:** Users want multi-model orchestration, specifically requesting a configurable compaction model ([Issue #5956](https://github.com/QwenLM/qwen-code/issues/5956)) to prevent expensive models from burning context windows on summarization, as well as inline model switching via `/model <id> <prompt>` ([Issue #5967](https://github.com/QwenLM/qwen-code/issues/5967)).
*   **Cross-Platform UI Parity:** Strong demand to standardize features across surfaces—specifically bringing voice dictation to Web/Desktop ([Issue #5796](https://github.com/QwenLM/qwen-code/issues/5796)) and fixing mobile browser compatibility for the Web Shell.
*   **Daemon & Infrastructure Tuning:** Requests to optimize daemon cold start latency from 2.5s to 1.5s ([Issue #4748](https://github.com/QwenLM/qwen-code/issues/4748)) and standardize the `serve/` module architecture ([Issue #5576](https://github.com/QwenLM/qwen-code/issues/5576)).

### 6. Developer Pain Points
*   **Silent Token Bleeding:** The most severe frustration is agents running out of control. Between zombie sessions ([Issue #5964](https://github.com/QwenLM/qwen-code/issues/5964)), undocumented auto-upgrades to pricier models ([Issue #5819](https://github.com/QwenLM/qwen-code/issues/5819)), and prompt-cache misses ([Issue #5942](https://github.com/QwenLM/qwen-code/issues/5942)), developers are losing API credits without real-time visibility.
*   **Terminal UI Quirks:** Rendering glitches are highly disruptive, particularly the terminal cutting off the last line of long outputs ([Issue #5800](https://github.com/QwenLM/qwen-code/issues/5800)), broken IME (Chinese input) support ([Issue #5966](https://github.com/QwenLM/qwen-code/issues/5966)), and erratic scrolling during generation.
*   **Context Boundary Mismanagement:** Developers are frustrated by the tool's failure to handle context limits gracefully. Instead of compacting proactively, it hits hard 400 errors ([Issue #5950](https://github.com/QwenLM/qwen-code/issues/5950)) or forces local setups to do full prompt reprocessing ([Issue #5736](https://github.com/QwenLM/qwen-code/issues/5736)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek TUI (CodeWhale) based on the last 24 hours of GitHub activity.

### 1. Today's Highlights
Development over the past 24 hours has been heavily focused on fixing critical UI/UX regressions and aggressive token consumption. The maintainer team successfully merged a flurry of fixes addressing broken modal rendering, shell approval misclassifications, and context caching regressions that were inflating API costs for users. 

### 2. Releases
No new official releases were published in the last 24 hours. However, the rapid merging of UI and caching fixes indicates that a patch release (likely stabilizing the **v0.8.66/v0.8.67** milestones) is imminent.

### 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion:

*   **[Token & Cache Regressions](https://github.com/Hmbown/CodeWhale/issues/1177)** (#1177): Users report severe drops in input cache hit rates compared to alternatives like DeepSeek-Reasonix, directly leading to massive token consumption (e.g., burning 400 million tokens in hours). 
*   **[Agent Over-Extension](https://github.com/Hmbown/CodeWhale/issues/3275)** (#3275): The AI is falling into self-questioning/answering loops, executing modifications beyond user intent without waiting for confirmation. 
*   **[Plan vs. Agent Mode Confusion](https://github.com/Hmbown/CodeWhale/issues/3568)** (#3568): A highly approved issue ([#3568](https://github.com/Hmbown/CodeWhale/issues/3568)) highlighting that switching between Plan and Agent modes fails at the system level, with the agent trying to modify files during the planning phase.
*   **[Auto Mode Misclassifications](https://github.com/Hmbown/CodeWhale/issues/3730)** (#3730): Auto mode was flagging read-only commands like `codewhale --version` as DESTRUCTIVE, breaking seamless workflows.
*   **[Broken Modal UI/UX](https://github.com/Hmbown/CodeWhale/issues/3732)** (#3732): A critical visual bug where background transcript text bleeds through confirmation modals, and action rows are truncated or overflow on narrow terminals.
*   **[Plan Mode Write-Block Mismatch](https://github.com/Hmbown/CodeWhale/issues/3734)** (#3734): The prompt claims Plan mode blocks all writes, but the underlying turn loop only sandboxes them rather than hard-blocking `write_file` or `edit_file` tools.
*   **[Editor Crashes Application](https://github.com/Hmbown/CodeWhale/issues/3657)** (#3657): Opening the external editor via `Ctrl-O` (Draft mode) completely freezes the application, requiring a hard process kill.
*   **[Windows DSML Stream Interruption](https://github.com/Hmbown/CodeWhale/issues/3717)** (#3717): Windows users reported that processing tasks are abruptly interrupted whenever DSML-related content appears in the context output stream.
*   **[Registry Integration Request](https://github.com/Hmbown/CodeWhale/issues/3192)** (#3192): The community is requesting CodeWhale to be listed on the `agentclientprotocol/registry` to streamline usage within the Zed editor.
*   **[Moraine Memory Backend Adoption](https://github.com/Hmbown/CodeWhale/issues/3495)** (#3495): A strategic enhancement to adopt "Moraine" as a lossless, long-term agent-memory backend exposed via MCP tools.

### 4. Key PR Progress
Maintainers closed a massive amount of PRs today, largely addressing the hot issues above:

*   **[PR #3739: Defer hollow Auto mode](https://github.com/Hmbown/CodeWhale/pull/3739):** Removes the name-only "Auto" mode from the UI until a proper auto-review implementation is ready, preventing accidental privilege escalation.
*   **[PR #3742: Split trust from approval bypass](https://github.com/Hmbown/CodeWhale/pull/3742):** Fixes a security/logic flaw where workspace trust was incorrectly treated as authority to auto-resolve tool approvals.
*   **[PR #3750: Clear modal backdrop centrally](https://github.com/Hmbown/CodeWhale/pull/3750):** Fixes the UI bleed-through bug by ensuring the `ViewStack` paints an opaque backdrop before rendering any modals.
*   **[PR #3745 & #3743: Cache telemetry routes](https://github.com/Hmbown/CodeWhale/pull/3745):** Adds route columns to cache telemetry, allowing users to see exactly which provider/model is fragmenting the prompt cache.
*   **[PR #3729: Pause input pump for external editor](https://github.com/Hmbown/CodeWhale/pull/3729):** Resolves the crash when launching Vim/external editors by pausing the terminal input pump and draining buffered events before handoff.
*   **[PR #3718: Strip fullwidth DSML tool wrappers](https://github.com/Hmbown/CodeWhale/pull/3718):** Fixes the Windows-specific bug where fullwidth DSML markup interrupted task execution.
*   **[PR #3747 & #3746: Label readonly shell approvals](https://github.com/Hmbown/CodeWhale/pull/3747):** Implements a strict read-only shell classifier to stop benign commands from triggering destructive approval prompts.
*   **[PR #3721: Verifier preview policy table](https://github.com/Hmbown/CodeWhale/pull/3721):** Adds a new `[verifier]` config table mapping pass/fail verdicts to "hunt" policies (hunted/wounded/escaped).
*   **[PR #3749: Sakana AI Fugu provider](https://github.com/Hmbown/CodeWhale/pull/3749):** Adds Sakana AI's Fugu as a first-class, OpenAI-compatible provider.
*   **[Refactoring MCP Transports](https://github.com/Hmbown/CodeWhale/pull/3723):** Extracted bulky Stdio, SSE, and Streamable HTTP transports into focused modules, cleaning up `mcp.rs` significantly.

### 5. Feature Request Trends
*   **Cost & Context Optimization:** The loudest trend is bringing CodeWhale's base prompt footprint and completion tokens down to parity with tools like Codex CLI to reduce API costs.
*   **Native Runtime (Rust):** Users are requesting a migration away from Node/TypeScript toward a native Rust desktop client/TUI to eliminate cold-start latency and single-threaded event-loop stalls.
*   **Expanded Localization:** Pushing for broader global reach with native support for Korean, Spanish, and Brazilian Portuguese.
*   **Advanced Sub-agent Routing:** Requests for more granular "Fleet" model selection, allowing specific roles/slots to automatically resolve different compute loadouts.

### 6. Developer Pain Points
Developers are primarily frustrated by **context and caching unreliability**. The tool's dynamic per-turn injections (like `<turn_meta>` blocks) are repeatedly busting DeepSeek's prompt cache prefix, causing token usage to balloon out of control. Secondary frustrations stem from **workflow unpredictability**—agents deviating from instructions (over-extending scope), ignoring mode constraints (writing files in Plan mode), and UI crashes when trying to use external editors during long sessions.

</details>