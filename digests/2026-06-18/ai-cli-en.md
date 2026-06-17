# AI CLI Tools Community Digest 2026-06-18

> Generated: 2026-06-17 22:30 UTC | Tools covered: 9

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

Here is the cross-tool comparison report based on the June 18, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem in mid-2026 is characterized by a rapid transition from simple code assistants to autonomous, multi-agent orchestration frameworks. OpenAI Codex, Google Gemini, and Claude Code are fiercely competing on enterprise-grade features, complex agent delegation, and deep IDE integrations. Meanwhile, open-source and alternative providers like OpenCode, Qwen, and Pi are gaining significant traction by prioritizing model-agnostic flexibility (BYOK), local network control, and highly specialized workflows. Underpinning all these tools is a massive architectural shift to support multi-agent state management, background execution, and strict security sandboxing.

### 2. Activity Comparison
Community engagement and release velocities vary significantly across the ecosystem. Codex and Gemini are leading pure code iteration, while Claude Code and Copilot CLI are pushing stable enterprise features. 

| Tool | Issues (24h Activity) | PRs (24h Activity) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 active/highlighted | 4 | **Released** v2.1.181 |
| **OpenAI Codex** | 10 active/highlighted | 10 | **Alpha** rust-v0.141.0 (3 builds) |
| **Gemini CLI** | 10 active/highlighted | 10 | *No new releases* |
| **GitHub Copilot CLI** | 10 active/highlighted | 0 | **Released** v1.0.64-0 |
| **OpenCode** | 10 active/highlighted | 10 | **Released** v1.17.8 |
| **Qwen Code** | 10 active/highlighted | 10 | **Released** v0.18.3 |
| **Pi** | 10 active/highlighted | 10 | *No new releases* |
| **DeepSeek TUI** | 10 active/highlighted | 10 | *No new releases* |
| **Kimi Code CLI** | 2 active | 0 | *No new releases* |

### 3. Shared Feature Directions
*   **Multi-Agent Orchestration & Subagents:** Almost all tools are building complex delegation frameworks. However, they share the exact same growing pains. *Codex*, *Gemini*, *DeepSeek TUI*, and *Qwen* all face community reports of agents getting trapped in infinite loops, hanging indefinitely during delegation, or falsely reporting success when timing out.
*   **Context Preservation vs. Compaction Amnesia:** As context windows push 1M tokens, managing context limits is the top technical friction point. *Claude Code*, *Codex*, and *Copilot CLI* users report severe degradation or complete loss of instructions (`CLAUDE.md` / `AGENTS.md`) following automatic context compaction. 
*   **Enterprise Security, Sandboxing & Guardrails:** There is a universal push for tightened security. *Claude* and *OpenCode* are introducing native OS-level sandboxing (macOS seatbelt). *Codex* is implementing local credential brokers. *Gemini* and *Copilot CLI* are actively patching overly aggressive false-positive guardrails that block local development workflows.
*   **Dynamic Model Routing:** Moving away from static model selection. *OpenCode*, *Pi*, and *Qwen* are actively merging PRs to allow dynamic model discovery, automatic routing based on task complexity, and frictionless switching between local vLLM, OpenAI-compatible endpoints, and proprietary models.

### 4. Differentiation Analysis
*   **OpenAI Codex & Claude Code:** Heavily focused on large-scale enterprise reliability and deep IDE integration (VS Code). They are moving away from single-file edits towards rollout budgets, plugin lifecycle management, and native desktop applications (despite current macOS memory leak issues).
*   **Gemini CLI:** Differentiated by its aggressive adoption of multimodality (native drag-and-drop image support in the terminal) and deep investigations into AST-aware codebase mapping to reduce token bloat.
*   **GitHub Copilot CLI:** Leaning into its native GitHub ecosystem advantage with features like `/security-review` and MCP registry browsing, though currently held back by backend API and websocket instability.
*   **OpenCode, Pi & Qwen:** Focused on maximum interoperability and developer transparency. They prioritize BYOK (Bring Your Own Key), OpenAI-compatible auto-discovery, and exposing granular token telemetry (tracking context/cached tokens) to manage costs.
*   **DeepSeek TUI:** Pioneering a unique "chat-native workroom" concept, aiming to evolve the CLI into a multi-threaded, mobile-accessible workspace rather than just a terminal prompt.

### 5. Community Momentum & Maturity
*   **High Velocity / High Momentum:** *OpenCode*, *Gemini CLI*, and *OpenAI Codex* show the highest development velocity, each pushing or merging 10 PRs in a single day. They are rapidly iterating on core architectural limitations. *Qwen* also shows massive momentum, driven by its highly active open-source community contributing unique adapters (e.g., QQ Bot, LaTeX rendering).
*   **Mature / Stabilizing:** *Claude Code* and *GitHub Copilot CLI* are focusing on stability, polishing UI/UX, and patching long-standing meta-bugs (e.g., Claude's 9-month bypass permission bug). Copilot's complete stall in PR velocity suggests a bottleneck in their internal engineering pipeline following recent outages. 
*   **Niche / Early Stage:** *DeepSeek TUI* is actively navigating a major architectural refactor and brand migration. *Kimi Code CLI* has a very quiet community, currently bottlenecked by fundamental enterprise blockers like SSL interception.

### 6. Trend Signals
*   **The Compaction Ceiling:** Developers are hitting the absolute limits of current LLM context retention. The industry desperately needs "Context Pinning" or structural AST-level code reading (as explored by Gemini) rather than brute-forcing larger token windows.
*   **Headless & Background Agents:** Tools are shifting from synchronous chat interfaces to managed background execution (*OpenCode*, *Codex*). Developers want to define persistent per-session goals and let bounded agents work in the background securely.
*   **The 3rd-Party Provider Tax:** Navigating provider-specific API quirks (e.g., MiniMax tool-call leaks, DeepSeek replay rules, Azure statelessness) remains a massive headache. There is a strong industry trend toward strict standardization via the Model Context Protocol (MCP) and universal API translation layers.
*   **Autonomy vs. Control Dilemma:** As models gain "YOLO/Autopilot" execution rights, developers are demanding granular tool whitelists, read-only execution modes, and safeguards against silent configuration overwrites to prevent AI-driven destructive actions.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report based on the recent repository activity. 

### 1. Top Skills Ranking
The most-discussed activity in the ecosystem heavily features enhancements to the **Skill Creator (`skill-creator`)**, which dominates community engagement as users attempt to refine the core framework for building and evaluating skills. 

*   **skill-creator: Evaluation & Windows Pipeline Fixes** ([PR #1298](https://github.com/anthropics/skills/pull/1298))
    *   **Functionality:** Fixes a critical bug in `run_eval.py` that caused 0% recall during skill description optimization, alongside fixing Windows subprocess stream reading.
    *   **Highlights:** Addresses a heavily reproduced issue that caused the description-optimization loop to run against pure noise.
    *   **Status:** [OPEN]
*   **UTF-8 & YAML Validation Fixes for skill-creator** ([PR #362](https://github.com/anthropics/skills/pull/362) & [PR #539](https://github.com/anthropics/skills/pull/539))
    *   **Functionality:** Replaces character-based length checks with byte-length validation to prevent Rust panics on multi-byte characters, and adds pre-parse validation for unquoted YAML special characters.
    *   **Highlights:** Resolves silent parsing failures and core CLI crashes when handling international text or formatting anomalies.
    *   **Status:** [OPEN]
*   **skill-quality-analyzer and skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83))
    *   **Functionality:** Introduces two "meta-skills" to evaluate the structural quality of SKILL.md files and scan for security vulnerabilities.
    *   **Highlights:** A highly anticipated framework addition that scored multiple dimensions of skill design (documentation, security, structure).
    *   **Status:** [OPEN]
*   **document-typography skill** ([PR #514](https://github.com/anthropics/skills/pull/514))
    *   **Functionality:** Automated typographic quality control for AI-generated documents (preventing orphan words, widow paragraphs, and numbering misalignment).
    *   **Highlights:** Tackles the "last-mile" formatting issues that plague AI-generated DOCX/PDF files.
    *   **Status:** [OPEN]
*   **ODT (OpenDocument) Creation and Parsing Skill** ([PR #486](https://github.com/anthropics/skills/pull/486))
    *   **Functionality:** Enables Claude to create, fill, and convert OpenDocument Format files (.odt, .ods) and parse them to HTML.
    *   **Highlights:** Expands enterprise document compatibility beyond traditional Microsoft formats.
    *   **Status:** [OPEN]
*   **Frontend-design Skill Improvements** ([PR #210](https://github.com/anthropics/skills/pull/210))
    *   **Functionality:** Revises the frontend-design skill for better clarity, actionability, and internal coherence.
    *   **Highlights:** Ensures every instruction is something Claude can actually follow within a single conversation context.
    *   **Status:** [OPEN]

### 2. Community Demand Trends
Based on the Issue tracker, the community is pushing for several major ecosystem improvements:
*   **Enterprise Distribution & Governance:** There is massive demand for [org-wide skill sharing](https://github.com/anthropics/skills/issues/228) and enterprise access controls. Users want to build internal skill libraries without manual file sharing, alongside robust [security patterns and permission logic](https://github.com/anthropics/skills/issues/1175) for proprietary data (like SharePoint).
*   **Cross-Platform & API Integration:** Developers are actively requesting ways to [expose Skills as MCPs](https://github.com/anthropics/skills/issues/16) and require better integration with cloud infrastructure like [AWS Bedrock](https://github.com/anthropics/skills/issues/29).
*   **Namespace Security:** Users are flagging trust boundary abuses and requesting stricter enforcement to prevent [community skills from impersonating official Anthropic skills](https://github.com/anthropics/skills/issues/492) under the `anthropic/` namespace.

### 3. High-Potential Pending Skills
These open PRs represent high-value, actively developed Skills that are likely to land in the main repository soon:
*   **ServiceNow Platform Skill** ([PR #568](https://github.com/anthropics/skills/pull/568)): A massive, comprehensive assistant covering ITSM, ITOM, SecOps, and CSDM for enterprise ServiceNow management. 
*   **Comprehensive Testing-Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723)): A deeply structured skill covering the "Testing Trophy" model, unit testing, React component testing, and edge cases.
*   **SAP-RPT-1-OSS Predictor Skill** ([PR #181](https://github.com/anthropics/skills/pull/181)): Integrates SAP's open-source tabular foundation model for predictive analytics directly into Claude Code.
*   **Shodh-Memory Skill** ([PR #154](https://github.com/anthropics/skills/pull/154)): Introduces a persistent context and memory system for AI agents that survives across multiple conversations.
*   **AURELION Skill Suite** ([PR #444](https://github.com/anthropics/skills/pull/444)): Brings a structured 5-floor cognitive framework and professional knowledge management layer to the agent.

### 4. Skills Ecosystem Insight
At the Skills level, the community's most concentrated demand is for **robust lifecycle management tools—specifically cross-platform compatibility, reliable skill evaluators, and secure organizational sharing mechanisms.**

---

Here is the Claude Code community digest for June 18, 2026, based on the latest GitHub activities.

# Claude Code Community Digest: 2026-06-18

### 1. Today's Highlights
Claude Code v2.1.181 was released today, introducing highly requested configuration shortcuts like inline `/config key=value` and new macOS sandboxing controls. The community remains highly active around persistent memory limitations and subagent management, with a massive meta-issue highlighting that `bypassPermissions` mode has been fundamentally broken for months. Meanwhile, the team merged several PRs to fix the code-review plugin and modernize development containers.

### 2. Releases
*   **v2.1.181**
    *   **Inline Configuration:** Added `/config key=value` syntax allowing developers to instantly change settings (like `/config thinking=false`) directly from the prompt across interactive, `-p`, and Remote Control modes.
    *   **macOS Sandbox Updates:** Introduced `sandbox.allowAppleEvents` opt-in setting, enabling sandboxed commands to securely send Apple Events on macOS. 

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

*   **[#34556] Persistent Memory Across Context Compactions:** A highly detailed report documenting memory loss across 59 context compactions. The developer was forced to build a custom external memory system, highlighting a major gap in long-running sessions.
*   **[#39523] [META] Bypass Permissions Mode Broken:** With 17 upvotes and 12 duplicate issues, this meta-thread tracked a 9-month trail of `bypassPermissions` failing to actually bypass permissions.
*   **[#18192] Recursive Skill Discovery:** A popular request (57 upvotes) asking Claude Code to scan subdirectories in `~/.claude/skills/` automatically, rather than only reading top-level folders.
*   **[#19637] Windows cmd Rendering Issues:** Developers on Windows are still experiencing text overlapping and garbled displays in the TUI since v2.1.3.
*   **[#10524] `excludedCommands` Ignored:** A highly upvoted bug (30 upvotes) pointing out that configuration settings for excluding specific commands from automated execution are not being respected.
*   **[#33603] CLAUDE.md Instructions Ignored:** Reports that explicitly defined "hard rules" in `CLAUDE.md` and memory files are consistently violated by the model, escalating with each new session.
*   **[#64651] Background Agents Disrupting Foreground:** In VSCode, background agent output streams directly into active foreground chats, interrupting current workflows and conversations. 
*   **[#35319] Skill Analytics Tracking:** An enterprise-focused feature request asking for invocation tracking and usage analytics to measure how internal teams adopt custom skills.
*   **[#58015] MCP Connector Naming Bugs:** OAuth-protected MCP servers default to displaying UUIDs instead of their designated `serverInfo.name`, making multi-server management confusing.
*   **[#65156] Invalid `--effort` Values:** Passing `ultracode` to the `--effort` CLI flag throws an unrecognized value error, showing inconsistencies in CLI argument parsing.

### 4. Key PR Progress
Activity in the pull request queue focused on plugin reliability and environment updates:

*   **[PR #19867] Fix code-review plugin skipping:** Addresses a major frustration where the code-review plugin ignores new commits. Introduces smarter skip logic and documents the `--force` flag to manually bypass the check.
*   **[PR #33443] Modernize Dev Container:** Migrates the repository's `.devcontainer/Dockerfile` to Node 24.14 and replaces the deprecated npm install method with the native installer.
*   **[PR #60427] README Standardization:** Minor documentation fix to align product name capitalization with standard GitHub formatting.
*   **[PR #60732] Plugins README Polish:** Improves wording and readability in the documentation explaining the plugin ecosystem.

### 5. Feature Request Trends
Distilled from the latest issues, developers are asking for:
*   **Advanced Skill Management:** Developers are organizing complex workflows and need recursive subdirectory scanning for skills, alongside enterprise-grade analytics to track skill invocation.
*   **Better Diff/UI Tooling:** Multiple requests (now marked as duplicates) focused on improving UI experiences, such as adding diff views for iterative plan updates, customizable syntax highlighting colors, and diff filters for uncommitted changes.
*   **Autopilot Consistency:** A strong desire to surface the `bypassPermissions` (Autopilot) mode consistently across the UI—similar to GitHub Copilot—rather than burying it in `settings.json`.
*   **IDE View-Only Tools:** Requests for an `OpenFile` tool so Claude can point developers to a file in the IDE for viewing without triggering a full diff/edit operation.

### 6. Developer Pain Points
*   **Context & Memory Fragmentation:** The single biggest frustration is the amnesia following context compaction. Despite `CLAUDE.md` setups, developers note that hard rules are frequently ignored over time.
*   **Windows & TUI Instability:** Windows users continue to battle with terminal rendering bugs (overlapping text) and Native Host JSON parsing errors when integrating with browser extensions.
*   **Subagent Interruptions:** Background tasks and subagents are leaking into the main workflow, actively disrupting developers via foreground output streams or malformed, silently dropped tool calls.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for June 18, 2026.

### 1. Today's Highlights
Codex continues its rapid iteration with three new Rust CLI alpha releases and significant architectural PRs focused on multi-agent orchestration, rollout budgets, and enterprise-grade plugin management. The community remains highly engaged around desktop app stability—specifically addressing severe memory leaks and Windows/WSL path resolutions—while strongly requesting better handling of long-context windows and automatic compaction.

### 2. Releases
*   **rust-v0.141.0-alpha.6, alpha.5, and alpha.4**
    Codex shipped three sequential alpha builds over the last 24 hours. While detailed changelogs are pending, the `0.141.0` pipeline clearly aligns with the active PRs currently merging multi-agent turn controls, rollout budget limits, and core plugin lifecycle trackers.

### 3. Hot Issues
1.  **[Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)** - With nearly 600 upvotes, the demand for a native Linux desktop app remains one of the repository's most active requests, driven by macOS power consumption issues.
2.  **[Frequent reconnect loop in Codex App](https://github.com/openai/codex/issues/18960)** - Pro users on macOS are experiencing recurring websocket closures (`response.completed` failures), causing streaming interruptions in the Desktop app. 
3.  **[Codex Desktop rewrites WSL `/home` paths as `C:\home`](https://github.com/openai/codex/issues/28094)** - A critical regression for Windows/WSL users where valid project directories are flagged as missing, breaking project chat associations.
4.  **[Codex Desktop generates +5GB/day of Crashpad dumps](https://github.com/openai/codex/issues/25921)** - A severe performance issue where the app infinitely generates `.dmp` and `_sidecar.json` files, quickly exhausting disk space.
5.  **[Codex CLI `rg` blocked by macOS](https://github.com/openai/codex/issues/28190)** - Users report that macOS system privacy/security settings are blocking `ripgrep` execution, breaking CLI search capabilities.
6.  **[False positive cybersecurity safety check blocks CLI](https://github.com/openai/codex/issues/28015)** - DevOps hygiene tasks (like checking local repo permissions) are being repeatedly halted by overly aggressive safety guardrails in the CLI.
7.  **[Auto compaction causes GPT-5-Codex to lose the plot](https://github.com/openai/codex/issues/5957)** - Enterprise users note mid-task failures when auto-compaction triggers, causing the model to forget previously edited files.
8.  **[Context compaction forgets AGENTS rules](https://github.com/openai/codex/issues/25792)** - Task progress drastically regresses (e.g., dropping from 97% to 42%) when context is compacted, highlighting a need for persistent memory rules.
9.  **[Codex Desktop exhausts `syspolicyd` on macOS](https://github.com/openai/codex/issues/28071)** - Recent app versions cause system-level policy daemon exhaustion, requiring a full system reboot to relaunch Codex.
10. **[Computer Use plugin fails on Windows](https://github.com/openai/codex/issues/28676)** - The `@oai/sky` package subpath is not properly exported for Windows environments, breaking Computer Use bootstrap before `sky.list_apps()` can run.

### 4. Key PR Progress
1.  **[Add per-turn multi-agent mode (#28685)](https://github.com/openai/codex/pull/28685)** - Introduces proactive delegation for multi-agent v2, allowing clients to toggle delegation per turn without rewriting model context.
2.  **[Add experimental local credential broker (#28034)](https://github.com/openai/codex/pull/28034)** - Massively improves security by moving injectable local credentials behind a managed network proxy, preventing child processes from exfiltrating secrets.
3.  **[Rollout budget implementation (#28494)](https://github.com/openai/codex/pull/28494)** - Establishes shared rollout-budget accounting in `AgentControl`, setting the foundation for limiting token usage across complex agent workflows.
4.  **[Support plugin manifest path lists (#28790)](https://github.com/openai/codex/pull/28790)** - Upgrades `plugin.json` to accept an array of paths for skills, allowing complex plugins to expose multiple directories.
5.  **[Enable auth elicitation by default (#28772)](https://github.com/openai/codex/pull/28772)** - Promotes interactive auth elicitation from an experimental feature to a stable default state.
6.  **[Add unified exec plugin lifecycle adapter (#28037)](https://github.com/openai/codex/pull/28037)** - Integrates a lifecycle tracker into the unified-exec spawn process, improving deterministic cancellation for tool runtimes.
7.  **[Add keyed shell environment rules to config (#28411)](https://github.com/openai/codex/pull/28411)** - Replaces clunky array formats with canonical keyed patterns in `config.toml` (e.g., `"CORP_*" = "include"`) for environment variable filtering.
8.  **[Run plugin installs through extension executor (#28799)](https://github.com/openai/codex/pull/28799)** - Refactors plugin installations to process through a dedicated extension executor API, decoupling core tool handlers.
9.  **[TUI Plugin Sharing: Render remote plugin catalog (#26703)](https://github.com/openai/codex/pull/26703)** - Introduces a dedicated UI in the TUI to browse and manage remote plugin marketplaces.
10. **[Show hook status messages in browser (#28781)](https://github.com/openai/codex/pull/28781)** - Improves TUI UX by surfacing custom `statusMessage` text from hooks, replacing generic `Hook n` labels.

### 5. Feature Request Trends
*   **Context Preservation Pins:** Heavy demand for the ability to "pin" or explicitly retain context, files, and `AGENTS.md` rules during automatic context compaction.
*   **Long Context Support:** Developers are urgently requesting the promised 1M token context window for GPT-5.5 to handle large-scale codebases.
*   **Workspace/Project Management:** Requests to bring ChatGPT-style "Projects" to the Desktop app, allowing shared memory, context, and file uploads across multiple chats.
*   **Granular Input Control:** Users want native toggles to stop the app from automatically converting pasted text into `.txt` file attachments.

### 6. Developer Pain Points
*   **Desktop App Stability:** The macOS Desktop app is causing severe system drain, manifested by infinite Crashpad dump generation (5GB+/day) and `syspolicyd` exhaustion.
*   **Windows / WSL Friction:** Path translations (`/home` vs `C:\home`) and missing environment variables (like `AZURE_OPENAI_API_KEY`) continue to break the developer flow for Windows users operating inside WSL.
*   **Disruptive Guardrails:** Overzealous cybersecurity safety checks in the CLI are falsely triggering on standard local repository maintenance, interrupting paid interactive sessions.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for June 18, 2026.

### 1. Today's Highlights
The Gemini CLI community is highly focused on refining agent orchestration and autonomy, with significant maintainer and community engagement around resolving subagent hangs, improving tool selection logic, and preventing destructive command executions. Multimodal and terminal interactivity took a massive leap forward with new pull requests introducing native drag-and-drop and clipboard image pasting. Additionally, crucial security and stability patches—including fixes for CI artifact poisoning and history "thought leakage"—are making their way through the review pipeline.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Hot Issues
Here are the top discussed issues driving the Gemini CLI roadmap:

*   **Generalist agent hangs indefinitely** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)): A high-priority bug where deferring to the generalist agent causes infinite hangs on simple tasks. Users are frustrated by the manual intervention required, highlighting stability issues in subagent delegation.
*   **Assess AST-aware file reads and codebase mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): An epic investigating AST-aware tools. This aims to reduce token noise and multi-turn misalignments by allowing the agent to read specific method bounds directly, which the community sees as a major potential upgrade to codebase navigation.
*   **Robust component-level evaluations** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)): A maintainer-driven initiative to expand the CLI's behavioral evaluation suite across all supported Gemini models, ensuring prompt adherence and tool usage remain stable during rapid iteration.
*   **False success reports on `MAX_TURNS` interruption** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)): The `codebase_investigator` subagent reports `status: "success"` even when it hits turn limits before completing analysis. This is particularly painful as it hides underlying failures from the orchestrating agent. 
*   **Under-utilization of custom skills and sub-agents** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968): Users report that the CLI won't autonomously invoke custom skills (e.g., gradle/git) even when contextually relevant, requiring explicit prompts. Improving the model's routing logic here is highly requested.
*   **Deterministic redaction for Auto Memory** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)): A privacy/security issue noting that Auto Memory currently sends local transcript content to the extraction agent *before* redacting secrets. The community is asking for pre-transmission redaction.
*   **Indefinite Auto Memory retries on low-signal sessions** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)): Auto Memory continuously surfaces low-signal transcripts because it only marks them "processed" if fully read. This creates unnecessary background noise and token consumption.
*   **Shell execution stuck on "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): A pesky core bug where the terminal interface hangs on simple, non-interactive shell commands, degrading the CLI interactive experience.
*   **Agent destructive behavior guardrails** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)): Users are requesting systemic guardrails to prevent the model from autonomously executing dangerous commands like `git reset --force` or destructive DB modifications.
*   **Browser Agent configuration overrides ignored** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)): A bug where `settings.json` configurations (like `maxTurns`) are bypassed during `AgentRegistry` initialization, limiting user control over the browser subagent.

### 4. Key PR Progress
Active development is heavily targeting security, interactivity, and bug resolution:

*   **[Native drag-and-drop & image pasting](https://github.com/google-gemini/gemini-cli/pull/27858)** (#27858): Brings visual multimodal parity to the CLI, allowing users to drag files directly into the terminal or use `Cmd+V` to paste images natively. 
*   **[Mitigate CI `workflow_run` artifact poisoning](https://github.com/google-gemini/gemini-cli/pull/27753)** (#27753): Fixes a critical P1 security vulnerability where malicious PRs from forks could execute poisoned code using repository secrets via the chained E2E pipeline.
*   **[Fix internal "Thought Leakage"](https://github.com/google-gemini/gemini-cli/pull/27971)** (#27971): Surgically strips the model's internal monologue/reasoning traces from plain-text history turns, preventing the model from getting confused or entering infinite monologue loops in subsequent iterations.
*   **[Charset decoding for `web-fetch`](https://github.com/google-gemini/gemini-cli/pull/27996)** (#27996): Resolves garbled text outputs by correctly decoding HTTP responses using the `charset` parameter from the `Content-Type` header, greatly improving support for non-UTF-8 legacy and international sites.
*   **[Wrap MCP resource outputs with `wrapUntrusted()`](https://github.com/google-gemini/gemini-cli/pull/27979)** (#27979): Enhances prompt injection defenses by treating MCP server-supplied text as untrusted data before passing it to the model.
*   **[Fix parallel workspace compilation race conditions](https://github.com/google-gemini/gemini-cli/pull/27643)** (#27643): Stabilizes local and CI builds by splitting the workspace compilation process into sequential topological stages.
*   **[Throw `FatalConfigError` in argument parsing](https://github.com/google-gemini/gemini-cli/pull/27987)** (#27987): Refactors the CLI to cleanly handle fatal errors during argument parsing instead of abruptly calling `process.exit`, resolving persistent Vitest/E2E test hangs.
*   **[Fix macOS symlink path mismatches](https://github.com/google-gemini/gemini-cli/pull/27990)** (#27990): Resolves failing core file tool tests on macOS by acknowledging `/var` to `/private/var` symlinks.
*   **[Report cached & thought tokens in ACP](https://github.com/google-gemini/gemini-cli/pull/27986)** (#27986): Improves cost-estimation accuracy in ACP clients by including cached and reasoning token counts in the `PromptResponse.usage` payload.
*   **[Strict dependency pinning & 14-day cooldown](https://github.com/google-gemini/gemini-cli/pull/27948)** (#27948): Improves repository stability by strictly pinning dependencies and slowing down automated dependency churn.

### 5. Feature Request Trends
Based on recent issue tracking, the community is heavily leaning into:
*   **Deeper Context & Codebase Navigation:** Strong demand for AST-aware file tools (#22745, #22746) to help the agent accurately map and read code without hallucinating method boundaries.
*   **Autonomy & Subagent Reliability:** Feature requests focusing on background processing, advanced remote agent auth (#20303), and giving the generalist agent better self-awareness regarding CLI hotkeys and flags (#21432).
*   **Browser Agent Resilience:** Requests for automatic session takeover and lock recovery (#22232) to make the browser subagent more robust during persistent sessions.

### 6. Developer Pain Points
Developers utilizing Gemini CLI for complex workflows are currently voicing frustration over a few key roadblocks:
*   **Unpredictable Delegation:** The agent either hangs entirely when calling a subagent (#21409) or falsely reports success when it times out (#22323). 
*   **Token & Workspace Bloat:** The model frequently writes temporary edit scripts in random directories instead of standardizing them (#23571), and Auto Memory creates excessive background loops by reading low-value files (#26522).
*   **Hidden Context Limits:** Developers run into silent failures when providing >128 tools (#24246) or when the model ignores persistent configuration overrides, making complex, multi-agent setups fragile.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for June 18, 2026.

### 1. Today's Highlights
The Copilot CLI dropped version **v1.0.64-0**, bringing major quality-of-life updates including the general availability of `/security-review`, a new `/diagnose` command, and substantial enhancements to Model Context Protocol (MCP) tooling. Community discussions today are largely dominated by the aftermath of the June 16 API outage, with several resolved issues regarding model blocking and transient API errors. Meanwhile, active discussions highlight the community's strong demand for granular permission controls, expanded context windows for advanced models like Claude Opus 4.6, and deeper enterprise integrations.

### 2. Releases
**v1.0.64-0** introduces several major features and tooling expansions:
*   **Security & Diagnostics:** `/security-review` is now stable and available to all users without the `--experimental` flag. A new `/diagnose` command was added to help analyze session logs.
*   **MCP Enhancements:** Users can now browse and install MCP servers via the `/mcp registry`. The CLI can now automatically discover MCP servers provided by installed plugins, and MCP tools now support CSV output formatting.

### 3. Hot Issues
Here are the top 10 noteworthy issues from the past 24 hours:

*   **#3832 [CLOSED]** [Bug] All models show as 'Blocked/Disabled' after June 16 outage
    *   *Why it matters:* A mass-disabling of models occurred directly after the June 16 Copilot outage. It was quickly tracked and closed, but impacted many users temporarily. ([Link](https://github.com/github/copilot-cli/issues/3832))
*   **#1973 [OPEN]** [area:permissions] Feature Request: Tool whitelist for Interactive Mode
    *   *Why it matters:* With 20 upvotes, users are frustrated by the binary choice between approving every safe read-only operation (like `cat` or `git status`) or using `/allow-all` which permits destructive actions. ([Link](https://github.com/github/copilot-cli/issues/1973))
*   **#3355 [OPEN]** [area:context-memory] Allow configurable context window for Claude Opus 4.6
    *   *Why it matters:* Copilot CLI caps Claude Opus 4.6 at 200K tokens, despite the model's native 1M token capability. Developers are experiencing frustrating context compaction during deep technical sessions. ([Link](https://github.com/github/copilot-cli/issues/3355))
*   **#3560 [OPEN]** [area:models] Execution failed: CAPIError: 400 websocket_error (Duplicate item)
    *   *Why it matters:* A breaking bug where tool/function calls result in websocket duplicate item errors. Standard chat works, but tool workflows fail, blocking agentic tasks. ([Link](https://github.com/github/copilot-cli/issues/3560))
*   **#2643 [OPEN]** [area:plugins] preToolUse: silent command rewrite via updatedInput
    *   *Why it matters:* Plugin and hook developers cannot silently rewrite commands. Even when `permissionDecision: allow` is set, an interactive prompt still interrupts the user. ([Link](https://github.com/github/copilot-cli/issues/2643))
*   **#3730 [OPEN]** [area:enterprise] Support Enterprise-Managed Custom Models in Copilot CLI
    *   *Why it matters:* Enterprise users want custom models configured via the Copilot Admin dashboard to be accessible in the CLI, matching the current VS Code experience. ([Link](https://github.com/github/copilot-cli/issues/3730))
*   **#3754 [OPEN]** [area:sessions] copilot --resume "Name With Spaces" fails silently
    *   *Why it matters:* A blocking UX bug where resuming named sessions with spaces exits silently with code 1, contradicting documentation and breaking standard workflows. ([Link](https://github.com/github/copilot-cli/issues/3754))
*   **#3812 [OPEN]** [area:agents, area:mcp] Subagents can no more access MCP tools
    *   *Why it matters:* Deferred loading of MCP tools has accidentally hidden them from subagents. Top-level agents still see them, but delegated tasks can no longer utilize MCP tools. ([Link](https://github.com/github/copilot-cli/issues/3812))
*   **#3839 [OPEN]** [triage] Ollama Cloud Does Not Support custom_tool_call Payload
    *   *Why it matters:* Fleet Mode users bringing their own keys (BYOK) via Ollama Cloud are experiencing 400 errors because LiteLLM rejects Copilot CLI's `custom_tool_call` payload structure. ([Link](https://github.com/github/copilot-cli/issues/3839))
*   **#3841 [OPEN]** [triage] Copilot CLI incorrectly enforces content exclusions
    *   *Why it matters:* Org-level content exclusion policies meant for GitHub.com are bleeding into local CLI agents, falsely blocking local file tool execution. ([Link](https://github.com/github/copilot-cli/issues/3841))

### 4. Key PR Progress
*Note: There were no open or updated Pull Requests in the last 24 hours.* Community contribution velocity has stalled, though triage activity on issues remains high.

### 5. Feature Request Trends
Analyzing the latest issues, developers are pushing the CLI toward more autonomous and customized workflows:
*   **Granular Autonomy & Hooks:** Developers want fewer manual touchpoints. Requests for tool whitelists (#1973), silent command rewrites via hooks (#2643), and bypassing lazy-loading to preload tools (#3787) indicate power users want frictionless, automated agent loops.
*   **Enterprise & BYOK Model Flexibility:** There is a strong trend of users wanting to decouple the CLI from standard GitHub models. Requests include integrating Enterprise-managed custom models (#3730), removing context caps on native models like Claude Opus (#3355), and fully supporting 3rd-party proxies like Ollama Cloud (#3839).
*   **Better Session & Plugin Management:** As usage scales, basic UX features are lagging. Users are requesting bulk plugin updates (#3830), persistent per-repo instruction opt-outs (#3840), and better multi-folder session handling (#3837).

### 6. Developer Pain Points
Developers are currently frustrated by several recurring stability and configuration roadblocks:
*   **API & Backend Flakiness:** The June 16th outage left lingering model access issues (#3832) and exposed deep-seated websocket instability during tool execution (#3560, #3831).
*   **MCP Complexity:** The Model Context Protocol ecosystem is proving difficult to manage locally. Users report breaking changes in MCP subagent visibility (#3812), incompatible JSON schemas between VS Code and CLI (#3835), and silent OAuth authentication failures with tools like Google Drive (#3838).
*   **Environment/OS Edge Cases:** Auto-updating is breaking on non-standard Linux distros like Alpine/musl (#3696), and local Git configurations (`core.fsmonitor`) are breaking plugin installations (#3842).
*   **Session Corruption:** Critical bugs like a single malformed attachment permanently poisoning a session (#3791) highlight data fragility within the CLI's memory management.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** June 18, 2026

## 1. Today's Highlights
The Kimi Code CLI community had a quiet day regarding codebase updates, with no new releases or merged Pull Requests in the last 24 hours. However, discussion continues with two new open issues focusing on enterprise network security (SSL interception) and dynamic workflow execution (mid-session mode switching). 

## 2. Releases
*No new releases or version updates were published in the last 24 hours.*

## 3. Hot Issues
*Note: Only two issues saw activity within the last 24 hours. Both are newly created.*

*   **Issue [#2459](https://github.com/MoonshotAI/kimi-cli/issues/2459): [Feature Request] Supports switching execution mode during session running (Agent ↔ Cluster)**
    *   **Why it matters:** Users are looking for greater workflow flexibility. Currently, execution modes appear to be locked in once a session starts. Allowing dynamic switching between autonomous Agent mode and Cluster mode mid-session would significantly optimize iterative development and resource management.
    *   **Community Reaction:** Newly created; currently gathering initial feedback and upvotes.
*   **Issue [#2458](https://github.com/MoonshotAI/kimi-cli/issues/2458): [enhancement] Add option to ignore ssl certificate**
    *   **Why it matters:** This is a critical blocker for enterprise users. Many corporate environments deploy MiTM (Man-in-the-Middle) antivirus proxies that intercept SSL traffic, which breaks Kimi CLI's authentication process. A flag to bypass strict SSL validation is essential for adoption in restricted corporate networks.
    *   **Community Reaction:** Newly created with no comments yet, but addresses a highly common pain point for enterprise developers.

## 4. Key PR Progress
*No active Pull Requests were updated or merged in the last 24 hours.*

## 5. Feature Request Trends
Based on the most recent issues, the community is pushing for two primary feature directions:
*   **Enterprise & Network Compatibility:** A strong need for the CLI to operate seamlessly within strictly controlled corporate IT environments (e.g., handling MiTM SSL proxies, custom certificate trusts).
*   **Dynamic Workflow Control:** Developers want less rigid session management, specifically the ability to transition between localized Agent tasks and distributed Cluster processing without terminating their current context.

## 6. Developer Pain Points
*   **Corporate Network Interference:** IT-managed security tools (like antivirus MiTM proxies) are actively blocking authentication attempts. Developers currently lack a native workaround (like an `--insecure` or `--ignore-ssl` flag) to bypass these controls, rendering the CLI unusable in some enterprise setups without manual system configuration.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for June 18, 2026.

### 1. Today's Highlights
OpenCode rolled out version `v1.17.8`, focusing on core stability improvements like faster session timelines and critical bug fixes for OpenAI-compatible providers. The community was highly active, submitting major Pull Requests that introduce background process management for shells, autonomous per-session goals, and automatic model discovery. Meanwhile, heavy discussions sparked around unbounded SQLite storage issues, agent sandboxing, and model latency, reflecting OpenCode's growing pains as it scales to handle complex, long-running agentic workflows.

### 2. Releases
**[v1.17.8](https://github.com/anomalyco/opencode/releases)**
*   **Improvements:** Session timelines now load significantly faster with eliminated flickering or scroll jumps.
*   **Bugfixes:**
    *   Fixed MCP tool schema validation failures for OpenAI-compatible providers.
    *   Resolved an issue where the Cloudflare AI Gateway was not receiving the correctly configured API key.

### 3. Hot Issues
1.  **[Issue #29079](https://github.com/anomalyco/opencode/issues/29079) - GPT Models take too long to respond:** Users report severe latency inconsistencies with GPT models (like GPT 5.4 xhigh), where simple commands sometimes take minutes. The issue has garnered significant attention (49 👍).
2.  **[Issue #2242](https://github.com/anomalyco/opencode/issues/2242) - Agent Sandboxing:** A highly supported request (54 👍) asking for native terminal command sandboxing (similar to macOS `seatbelt` used in codex-cli) to prevent agents from editing files outside the working directory.
3.  **[Issue #20902](https://github.com/anomalyco/opencode/issues/20902) - Bash tool hangs on background processes:** The bash tool hangs for two minutes when commands spawn background child processes (e.g., `npm run build &`), blocking the LLM from proceeding.
4.  **[Issue #32547](https://github.com/anomalyco/opencode/issues/32547) & [Issue #32714](https://github.com/anomalyco/opencode/issues/32714) - "no such column: data" SQLite bug:** A critical, spontaneous error causing all tool calls (bash, read, edit, etc.) to fail due to SQLite interpreting bare `data` as a column instead of a string literal.
5.  **[Issue #11176](https://github.com/anomalyco/opencode/issues/11176) - Official VS Code Extension:** The community is heavily petitioning (110 👍) for an official Visual Studio Code extension to run OpenCode natively inside the IDE.
6.  **[Issue #32444](https://github.com/anomalyco/opencode/issues/32444) - GLM-5.2 thinking-effort variants missing:** Z.AI's new GLM-5.2 model is missing High/Max thinking-effort variants due to a blanket exclusion in `ProviderTransform.variants()`.
7.  **[Issue #16101](https://github.com/anomalyco/opencode/issues/16101) - Session Lifecycle Management:** Users are frustrated by unbounded session growth. This feature request suggests TTLs, storage caps, and auto-cleanup for old sessions.
8.  **[Issue #8456](https://github.com/anomalyco/opencode/issues/8456) - Automatic Model Selection:** A popular request (36 👍) for OpenCode to dynamically switch models based on task complexity rather than requiring manual selection per session.
9.  **[Issue #27589](https://github.com/anomalyco/opencode/issues/27589) - Alpine Linux (musl) TUI failure:** A regression causing the TUI render library to fail with a `getcontext symbol not found` error on Alpine Linux.
10. **[Issue #19466](https://github.com/anomalyco/opencode/issues/19466) - High idle CPU usage:** When waiting for API rate limits to reset, OpenCode incorrectly consumes ~50% of a CPU core.

### 4. Key PR Progress
1.  **[PR #32675](https://github.com/anomalyco/opencode/pull/32675) - Managed background shell mode:** Introduces background execution capabilities to the core bash tool, addressing the critical issue of hanging background processes.
2.  **[PR #32731](https://github.com/anomalyco/opencode/pull/32731) - Auto-discover models:** Eliminates the need to manually define models. OpenCode will now query `GET /models` to auto-discover available models from OpenAI-compatible providers.
3.  **[PR #32743](https://github.com/anomalyco/opencode/pull/32743) - Native per-session goals:** Adds a `/goal` command allowing users to set persistent, autonomous goals (with statuses like active/paused) for agentic execution.
4.  **[PR #32734](https://github.com/anomalyco/opencode/pull/32734) - OpenRouter model variants:** Fixes a bug where suffix variants (`:free`, `:nitro`, `:thinking`, etc.) were rejected by resolving them to their base catalog entries.
5.  **[PR #21002](https://github.com/anomalyco/opencode/pull/21002) - `/ask` side-question panel:** Introduces a non-queued side-question command, allowing developers to get instant answers without interrupting the primary agent's current turn.
6.  **[PR #32738](https://github.com/anomalyco/opencode/pull/32738) - Context-aware bash tool:** Fixes an issue where the bash tool description mislead the LLM by referencing `Edit`/`Write` tools even when the agent was in a read-only context.
7.  **[PR #30849](https://github.com/anomalyco/opencode/pull/30849) - MiniMax tool-call leak fix:** Adds a sanitizer to strip unexpected tool-call marker suffixes from MiniMax M3 assistant responses.
8.  **[PR #31392](https://github.com/anomalyco/opencode/pull/31392) - ACP native review staging:** Updates OpenCode to stage edits natively for review in Agent Client Protocol (ACP) clients like Zed and Devin.
9.  **[PR #32737](https://github.com/anomalyco/opencode/pull/32737) - Safe turn reversion:** Fixes a destructive bug where reverting a no-change turn would accidentally overwrite the user's unstaged working tree edits.
10. **[PR #32727](https://github.com/anomalyco/opencode/pull/32727) - RTL Text Support:** Implements automatic Right-to-Left (RTL) text detection for Hebrew and Arabic languages in the UI composer and messages.

### 5. Feature Request Trends
*   **Intelligent Resource Management:** As sessions grow, developers are urgently asking for automated database management—including TTLs, auto-archival, and retention configs ([Issue #32630](https://github.com/anomalyco/opencode/issues/32630), [Issue #32716](https://github.com/anomalyco/opencode/issues/32716)).
*   **Dynamic Model Routing:** Users want to move away from static model selection, requesting the ability to automatically assign models based on task complexity or easily switch between new reasoning models like GLM-5.2 ([Issue #32736](https://github.com/anomalyco/opencode/issues/32736), [Issue #8456](https://github.com/anomalyco/opencode/issues/8456)).
*   **Deeper IDE Ecosystem Integration:** There is a strong push to bring OpenCode's capabilities directly into established developer workflows via an official VS Code extension and robust LSP configurations ([Issue #11176](https://github.com/anomalyco/opencode/issues/11176), [PR #32741](https://github.com/anomalyco/opencode/pull/32741)).
*   **Advanced Agentic Controls:** Developers are asking for tighter control over what agents can do, requesting sandboxing, native per-session goals, and better handling of long-running background tasks.

### 6. Developer Pain Points
*   **Database Stability:** The sudden emergence of the `no such column: "data"` SQLite parsing error has broken core tool execution mid-session for multiple users. Furthermore, the local SQLite footprintballooning to hundreds of megabytes is causing OOM fears.
*   **Agent Hallucinations & Permissions:** Developers are frustrated by agents attempting to run sudo commands, spawning uncontrollable background processes, or accidentally escalating privileges ([Issue #32729](https://github.com/anomalyco/opencode/issues/32729), [Issue #1852](https://github.com/anomalyco/opencode/issues/1852)).
*   **Provider API Fragility:** Navigating provider-specific quirks remains a massive headache. Users are hitting roadblocks ranging from encrypted content verification failures on stateless Azure calls to Perplexity rejecting `store: false` flags, and broken MiniMax trailing tool calls.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for June 18, 2026.

### 1. Today's Highlights
The Pi ecosystem sees major enhancements in provider compatibility and debugging visibility, with new support for Azure AI Foundry and SiliconFlow, alongside critical fixes that expose raw HTTP error bodies for easier debugging. The community drove substantial improvements to the agent's core reasoning capabilities, merging support for the `max` thinking level across newer Anthropic models and refining context compaction mechanisms. 

### 2. Releases
*No new official releases were published in the last 24 hours.*

### 3. Hot Issues
*   **#5825 [OPEN] Streaming markdown forces scroll to bottom:** A high-priority UX bug where the TUI forces a scroll to the bottom during streaming if `clear on shrink` is enabled. ([GitHub Link](https://github.com/earendil-works/pi/issues/5825))
*   **#5653 [OPEN] Move off Shrinkwrap:** Highlights architectural friction where installing both `pi-ai` and `pi-coding-agent` results in duplicate module copies on disk, breaking the module-level API provider registry. ([GitHub Link](https://github.com/earendil-works/pi/issues/5653))
*   **#5763 [OPEN] Providers swallow the HTTP error body:** A highly frustrating issue where proxies/gateways return unparseable error bodies (like 403s), and Pi drops them in favor of opaque messages. ([GitHub Link](https://github.com/earendil-works/pi/issues/5763))
*   **#5700 [OPEN] Support multiple live agent sessions:** Users are requesting the ability to juggle background agent sessions in the TUI without tearing down the current session via `switchSession`. ([GitHub Link](https://github.com/earendil-works/pi/issues/5700))
*   **#3715 [CLOSED] Local-LLM streams terminate at 5 min:** A long-standing limitation where `undici`'s default 5-minute `bodyTimeout` kills long-running local tool calls, bypassing user-configured timeout limits. ([GitHub Link](https://github.com/earendil-works/pi/issues/3715))
*   **#5797 [CLOSED] File edits break encoding of CP-1252 files:** On Windows, Pi unintentionally converts legacy CP-1252 files to UTF-8 during edits, breaking older C++ constant definitions. ([GitHub Link](https://github.com/earendil-works/pi/issues/5797))
*   **#5654 [OPEN] Add `excludeFromContext` to custom messages:** A request to allow custom programmatic messages to be skipped during LLM context conversion, mirroring existing bash execution behaviors. ([GitHub Link](https://github.com/earendil-works/pi/issues/5654))
*   **#5810 [OPEN] RPC: expose session entries and tree:** Developers building external UIs want read-only RPC commands (`get_entries`, `get_tree`) to fetch append-order session data and leaf IDs. ([GitHub Link](https://github.com/earendil-works/pi/issues/5810))
*   **#5811 [CLOSED] DeepSeek V4 invalid role:tool chain:** Highlights serialization challenges where Pi-native tool call/result pairs translate into invalid API payloads for DeepSeek's specific replay rules. ([GitHub Link](https://github.com/earendil-works/pi/issues/5811))
*   **#5830 [CLOSED] Tree navigator truncates long entries:** The `/tree` navigator cuts off wide entries without horizontal scrolling capabilities, severely degrading chat navigation UX. ([GitHub Link](https://github.com/earendil-works/pi/issues/5830))

### 4. Key PR Progress
*   **PR #5849 [CLOSED] feat(ai): add Azure AI Foundry provider:** Brings first-class support for Anthropic Claude models hosted on Azure AI Foundry, including Entra ID authentication. ([GitHub Link](https://github.com/earendil-works/pi/pull/5849))
*   **PR #5829 [CLOSED] feat: add "max" thinking level:** Unlocks the highest reasoning tier (`max`) for adaptive Anthropic models like Claude Opus 4.8 and 4.7. ([GitHub Link](https://github.com/earendil-works/pi/pull/5829))
*   **PR #5833 [CLOSED] Compaction-related fixes:** Optimizes the context compaction process by reordering summary operations, fixing inefficiencies noticed by local `llama.cpp` users. ([GitHub Link](https://github.com/earendil-works/pi/pull/5833))
*   **PR #5846 [OPEN] fix(tui): stabilize streaming code fence rendering:** Addresses the scroll-to-bottom bug (#5825) by stabilizing how markdown renders during active token streaming. ([GitHub Link](https://github.com/earendil-works/pi/pull/5846))
*   **PR #5832 [OPEN] fix(ai): surface provider HTTP error body:** Resolves issue #5763 by routing unparseable HTTP errors through a shared formatter that displays the raw gateway response. ([GitHub Link](https://github.com/earendil-works/pi/pull/5832))
*   **PR #5841 [OPEN] feat(tui): detect Warp terminal:** Properly detects the Warp terminal environment, enabling native Kitty graphics protocol support for inline images. ([GitHub Link](https://github.com/earendil-works/pi/pull/5841))
*   **PR #5850 [CLOSED] chore(deps): bump vitest:** A mechanical dependency bump resolving 5 high-severity `npm audit` vulnerabilities tied to development transitives. ([GitHub Link](https://github.com/earendil-works/pi/pull/5850))
*   **PR #5801 [CLOSED] Nixify pi:** Adds a Nix flake to the repository, allowing NixOS users to seamlessly build and run the agent. ([GitHub Link](https://github.com/earendil-works/pi/pull/5801))
*   **PR #5812 [CLOSED] fix(tui): protect pipe characters:** Fixes a markdown table rendering bug where pipe characters `|` inside inline code blocks were incorrectly parsed as column delimiters. ([GitHub Link](https://github.com/earendil-works/pi/pull/5812))
*   **PR #4742 [CLOSED] Add SiliconFlow provider:** Integrates SiliconFlow as a built-in provider, giving users access to a broad catalog of open-source models via OpenAI-compatible endpoints. ([GitHub Link](https://github.com/earendil-works/pi/pull/4742))

### 5. Feature Request Trends
*   **Enhanced RPC & Extension APIs:** Developers are heavily leaning into headless/programmatic usage of Pi. There are active requests to expose live tool executable objects ([#5781](https://github.com/earendil-works/pi/issues/5781)), readiness/idle states of the `AgentHarness` ([#5855](https://github.com/earendil-works/pi/issues/5855)), and structural tree RPCs ([#5810](https://github.com/earendil-works/pi/issues/5810)).
*   **Next-Gen Model & Context Support:** The community is rapidly adopting newer model capabilities. Recent requests focus on managing 1-million token context windows (like GitHub Copilot and Zhipu GLM-5.2) and exposing granular model configurations such as GLM effort levels ([#5768](https://github.com/earendil-works/pi/issues/5768), [#5770](https://github.com/earendil-works/pi/issues/5770), [#5692](https://github.com/earendil-works/pi/issues/5692)).
*   **Multimodal Expansion:** Users want to push beyond text and images, requesting that the `prompt` RPC command be extended to accept video and audio payloads for true multimodal agent interactions ([#3200](https://github.com/earendil-works/pi/issues/3200)).

### 6. Developer Pain Points
*   **Opaque Error Visibility:** A major point of friction is debugging provider failures. When operating behind corporate proxies or custom local gateways, the SDK frequently swallows crucial HTTP error bodies, making 4xx/5xx errors nearly impossible to diagnose.
*   **TUI State Jank:** Core UI interactions remain a recurring frustration. Users report state desyncs when hot-swapping models ([#5696](https://github.com/earendil-works/pi/issues/5696)), aggressive viewport hijacking during token streaming, and lack of basic navigation features like horizontal scrolling for deep chat trees.
*   **Ecosystem & Platform Standards:** Linux users are actively petitioning for compliance with modern standards like the XDG Base Directory specification ([#534](https://github.com/earendil-works/pi/issues/534)), while Windows developers face silent data corruption/encoding breaks when working with legacy filesystem encodings.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for June 18, 2026.

### 1. Today's Highlights
Qwen Code continues its rapid iteration with the release of **v0.18.3**, focusing on CLI stability and context management. The community is highly active around token consumption tracking, multi-agent memory handling, and expanding third-party provider support. Meanwhile, developers are eagerly contributing new adapters, including a highly-anticipated QQ Bot channel and terminal LaTeX rendering.

### 2. Releases
*   **[v0.18.3](https://github.com/QwenLM/qwen-code/pull/5243)**: Includes a CLI fix to stop execution immediately after a cancelled `ask_user_question` prompt, improving interactive safety. 
*   **[v0.18.2](https://github.com/QwenLM/qwen-code/releases)**: Introduced a warning system for oversized context instructions and fixed documentation drift regarding CLI syntax and tool naming.
*   *Note: Both releases were pushed alongside their respective `preview` branches.*

### 3. Hot Issues
1.  **[#3203: Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)** (151 comments): A massive discussion regarding the sudden reduction of the daily free quota from 1,000 to 100 requests and the impending phase-out of the free tier.
2.  **[#4479: Token Usage Analytics](https://github.com/QwenLM/qwen-code/issues/4479)** (16 comments): Users are requesting built-in telemetry for daily token consumption after being surprised by massive token drains (e.g., 30M tokens in a single session).
3.  **[#3384: Unable to add OpenAI-compatible local LLM](https://github.com/QwenLM/qwen-code/issues/3384)** (15 comments): Highlights ongoing friction when trying to route Qwen Code through local vLLM instances using `settings.json`.
4.  **[#1855: OAuth/API Key Session Collision](https://github.com/QwenLM/qwen-code/issues/1855)** (14 comments): A persistent bug where old OAuth tokens interfere with newly entered API keys, causing 401 authentication errors.
5.  **[#3307: Alibaba Cloud Coding Plan "Out of Stock"](https://github.com/QwenLM/qwen-code/issues/3307)** (10 comments): Users express frustration over the inability to purchase premium coding plans on Alibaba Cloud due to persistent inventory shortages.
6.  **[#3914: Silent API Fetch Failures](https://github.com/QwenLM/qwen-code/issues/3914)** (9 comments): Reports of API connections dropping silently with `fetch failed` errors when routing through providers like OpenRouter.
7.  **[#5210: ExitPlanMode Infinite Hang](https://github.com/QwenLM/qwen-code/issues/5210)** (5 comments): A regression in v0.18.1 where the agent gets stuck for hours in `ExitPlanMode` instead of prompting the user to switch to YOLO mode.
8.  **[#5090: Decouple Provider Identity from SDK Protocol](https://github.com/QwenLM/qwen-code/issues/5090)** (5 comments): An architectural feature request to treat `providerId` as a free-form string, allowing better routing for custom OpenAI/Gemini/Anthropic endpoints.
9.  **[#5180: Multi-Agent Session Crashes](https://github.com/QwenLM/qwen-code/issues/5180)** (4 comments: Core execution crashes when subagents are deployed as task workers alongside a primary project manager agent.
10. **[#5147: OOM on `/quit` from Auto-Memory](https://github.com/QwenLM/qwen-code/issues/5147)** (3 comments): V8 heap memory exhaustion triggered by background `auto-memory` transcript building when exiting large text-only sessions.

### 4. Key PR Progress
1.  **[PR #5202: QQ Bot Channel Adapter](https://github.com/QwenLM/qwen-code/pull/5202)**: Introduces a `@qwen-code/channel-qqbot` package, expanding Qwen Code's chat platform integrations alongside Telegram, WeChat, and DingTalk.
2.  **[PR #5126: Vision Bridge](https://github.com/QwenLM/qwen-code/pull/5126)**: Automatically transcribes pasted/referenced images into text using a multimodal fallback model, allowing text-only models to process visual data.
3.  **[PR #5242: Tool Call Circuit Breaker](https://github.com/QwenLM/qwen-code/pull/5242)**: Fixes the infinite tool-calling loop bug by adding a circuit breaker for repetitive API actions.
4.  **[PR #4564: Token Usage Stats](https://github.com/QwenLM/qwen-code/pull/4564)**: Implements persistent token tracking with `/stats` UI updates, allowing users to view/export daily and monthly usage.
5.  **[PR #3439: CLI LaTeX Rendering](https://github.com/QwenLM/qwen-code/pull/3439)**: Brings terminal-friendly rendering for inline and block LaTeX math syntax.
6.  **[PR #5038: Idempotent Tool-Call IDs](https://github.com/QwenLM/qwen-code/pull/5038)**: Prevents the agent from executing duplicate actions when providers accidentally return the same `tool_call_id` multiple times.
7.  **[PR #5220: Tool Name i18n](https://github.com/QwenLM/qwen-code/pull/5220)**: Localizes tool-call badges (e.g., `TodoWrite`, `ReadFile`) in the TUI for non-English users.
8.  **[PR #4934: Daemon Idle Detection](https://github.com/QwenLM/qwen-code/pull/4934)**: Adds deep health checks (`GET /health?deep=true`) to report active prompts and SSE connections for external schedulers.
9.  **[PR #5175 & #5266: Mid-Turn Messages](https://github.com/QwenLM/qwen-code/pull/5266)**: Allows web-shell users to inject messages into an active turn without waiting for execution to finish, plus memory leak fixes.
10. **[PR #5264: Independent IDE MCP Servers](https://github.com/QwenLM/qwen-code/pull/5264)**: Refactors the VSCode companion to spawn isolated MCP servers per CLI session rather than relying on a singleton.

### 5. Feature Request Trends
*   **Token & Cost Transparency:** As agent context windows grow, developers are demanding granular tracking of daily/monthly token consumption and context size warnings before execution.
*   **Custom Provider Flexibility:** Users want to easily mix local LLMs (vLLM), third-party routers (OpenRouter), and native Qwen APIs without breaking the UI model-picker.
*   **Advanced Session Management:** Frequent requests for robust sub-agent handling, CLI UI history collapsing, and clearing IDE context cleanly.
*   **Platform Expansion:** High enthusiasm for extending Qwen Code's reach via messaging app adapters (QQ Bot) and better web-shell integration.

### 6. Developer Pain Points
*   **Authentication Instability:** Switching between the free OAuth tier and paid API keys frequently causes persistent 401 errors due to cached tokens.
*   **Infinite Loops & Hangs:** Models occasionally trap themselves in repetitive tool-call loops, or hang indefinitely on `ExitPlanMode` during agentic workflows.
*   **Memory Bloat:** Large agentic sessions trigger V8 Out-of-Memory (OOM) errors, especially during the auto-memory generation phase upon `/quit`.
*   **Cloud Quota Frustration:** The combination of slashed free-tier limits and the "out of stock" status of Alibaba premium plans is blocking developers from testing and deploying in production.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for the DeepSeek-TUI (CodeWhale) project based on the latest GitHub activities.

### 1. Today's Highlights
The community is highly focused on resolving agent autonomy issues and UI stability, particularly addressing critical regressions where agents overstep user intent or get stuck in self-questioning loops. Significant progress was made today in merging architectural refactors, including the "command-boundary" EPIC and fixes for legacy file path migrations (`deepseek` to `codewhale`). Furthermore, the v0.9.0 roadmap is taking shape with major proposals for chat-native workrooms and threaded multi-agent orchestration.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Hot Issues
Here are the 10 most noteworthy issues driving community discussion today:

*   **[#3275: Agent over-involvement and self-questioning loops](https://github.com/Hmbown/CodeWhale/Issue/3275)** [OPEN] - A critical regression where the agent creates self-sustaining loops of proposing, answering, and executing without user confirmation. This highlights ongoing struggles with balancing agent autonomy and user control.
*   **[#3279: Plan/Agent Mode Toggle Inconsistency & Tool Permission Chaos](https://github.com/Hmbown/CodeWhale/Issue/3279)** [OPEN] - Users report that switching from Plan to Agent mode causes persistent `denied by user` errors for standard tools (`write_file`, `exec_shell`). Upon recovery, the AI begins auto-executing without permission.
*   **[#3209: v0.9.0 EPIC: Chat-native CodeWhale workrooms](https://github.com/Hmbown/CodeWhale/Issue/3209)** [OPEN] - A major v0.9.0 feature proposal to evolve the TUI into a chat-native workroom supporting threads, channels, mentions, and shareable links for multi-agent workflows.
*   **[#3289: UI freezes after auto-spawning several agents](https://github.com/Hmbown/CodeWhale/Issue/3289)** [OPEN] - A high-priority bug where the TUI hard-freezes during plan improvements that trigger the automatic spawning of multiple background agents.
*   **[#3292: Snapshots ignore `enabled=false` config](https://github.com/Hmbown/CodeWhale/Issue/3292)** [OPEN] - A frustrating disk-space bug where setting `snapshots.enabled = false` in `config.toml` is ignored by per-tool operations, resulting in GBs of unintended git repository copies.
*   **[#3282: `config.toml` content erased on TUI modifications](https://github.com/Hmbown/CodeWhale/Issue/3282)** [OPEN] - Users are losing custom comments and temporarily disabled configurations because the TUI completely rewrites the config file without preserving existing formatting.
*   **[#2870: EPIC: Staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/Issue/2870)** [OPEN] - Tracking issue for breaking down a massive architectural refactor into smaller, mergeable PRs to improve command and TUI architecture stability safely.
*   **[#3102: First-class clarification questions for agents](https://github.com/Hmbown/CodeWhale/Issue/3102)** [CLOSED] - Successfully implemented a feature allowing agents to ask users clarifying questions via modal-style UI interactions rather than just dumping text into the chat stream.
*   **[#2917: `cargo` distribution error post-rename](https://github.com/Hmbown/CodeWhale/Issue/2917)** [CLOSED] - Resolved upgrade confusion where users updating from `deepseek-tui` encountered "failed to spawn `codewhale`" path errors.
*   **[#2652: Clipped sub-agent evaluation mistaken for complete evidence](https://github.com/Hmbown/CodeWhale/Issue/2652)** [CLOSED] - Addressed a dangerous hallucination vector where the model would confidently claim it reviewed full outputs despite the TUI transcript being clipped.

### 4. Key PR Progress
Recent pull requests show a strong focus on immediate bug fixing and architectural performance:

*   **[PR #3290: Prevent self-questioning agent loops](https://github.com/Hmbown/CodeWhale/PR/3290)** [OPEN] - Directly addresses Issue #3275 by introducing `scope_discipline` rules into the agent's constitution prompt to break autonomous self-answering loops.
*   **[PR #3283: Fix Plan/Agent Mode Toggle](https://github.com/Hmbown/CodeWhale/PR/3283)** [OPEN] - Restores `approval_mode` state correctly after switching from Plan to Agent and adds a guard to prevent unintended auto-execution.
*   **[PR #3293: Respect `snapshots.enabled` config](https://github.com/Hmbown/CodeWhale/PR/3293)** [OPEN] - Adds a missing boolean guard to the per-tool snapshot call site, finally preventing snapshot creation when the feature is disabled.
*   **[PR #3291: Preserve comments in config files](https://github.com/Hmbown/CodeWhale/PR/3291)** [OPEN] - Migrates config writing paths to use `toml_edit`, ensuring user annotations survive CLI and TUI edits.
*   **[PR #3284: Debounce thinking-stream re-renders](https://github.com/Hmbown/CodeWhale/PR/3284)** [OPEN] - A major performance fix for fast reasoning models where streaming text appeared painfully slow due to UI invalidation on every single reasoning delta.
*   **[PR #3288: Move volatile workspace path out of static system prompt](https://github.com/Hmbown/CodeWhale/PR/3288)** [OPEN] - Optimizes API payloads by removing dynamic paths (like `pwd`) from the static system prefix, greatly improving prompt caching hit rates.
*   **[PR #3294: Write composer history under `.codewhale`](https://github.com/Hmbown/CodeWhale/PR/3294)** [OPEN] - Fixes a legacy path issue where the TUI continuously recreated the old `~/.deepseek/` directory.
*   **[PR #3286: Fix `type:object` injection for Kimi schemas](https://github.com/Hmbown/CodeWhale/PR/3286)** [OPEN] - Expands schema sanitization to support `$ref`, `allOf`, and `anyOf` roots, preventing 400 errors from Moonshot/Kimi APIs.
*   **[PR #3285: Persist session before stall/cancel recovery](https://github.com/Hmbown/CodeWhale/PR/3285)** [OPEN] - Fixes data loss where a stalled or canceled agent turn would cause `--continue` to load the previous session.
*   **[PR #3171: Define Agent Fleet protocol types](https://github.com/Hmbown/CodeWhale/PR/3171)** [CLOSED] - Introduces the durable, serializable contract for the upcoming v0.8.60 multi-agent control plane.

### 5. Feature Request Trends
Analyzing the issue tracker reveals three clear directions for the project's evolution:
*   **Durable Multi-Agent Orchestration:** Strong demand for coordinated, visible multi-agent fleets. Users want bounded parallel workers with specific roles that can reconcile disagreements and report through a unified UI surface (#3209, #2007).
*   **Chat-Native & Mobile Workrooms:** A push to move beyond terminal-only limitations toward threaded, shareable workspaces that support GitHub context, mobile access, and multi-model inspection (#3209).
*   **Interactive Agent Clarifications:** Enhancing the harness to act as a true UI rather than a text stream. This includes first-class modal prompts for agents to ask questions, rather than guessing user intent (#3102).

### 6. Developer Pain Points
Developers and end-users are currently expressing frustration with several recurring friction points:
*   **Loss of User Control:** The most common complaint is the agent over-extending its scope. Users are frustrated by agents that auto-execute workflows without waiting for confirmation, or worse, get stuck in infinite self-questioning loops.
*   **State & UI Instability During Spawns:** Heavy instability when the UI attempts to auto-spawn subagents. This leads to hard UI freezes, lost session data on cancellation, and general TUI lockups.
*   **Silent Configuration Overwrites:** The TUI's tendency to aggressively rewrite `config.toml` (wiping comments) and ignore specific snapshot flags makes local environment setup feel fragile and unpredictable.
*   **Legacy Migration Friction:** Ongoing pain points for upgrading users regarding the `deepseek` to `codewhale` binary rename, resulting in broken CLI paths and duplicated config directories.

</details>