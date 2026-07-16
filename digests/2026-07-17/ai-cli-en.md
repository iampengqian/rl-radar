# AI CLI Tools Community Digest 2026-07-17

> Generated: 2026-07-16 22:18 UTC | Tools covered: 9

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

Here is the cross-tool comparative analysis of the AI CLI tool ecosystem based on the July 17, 2026 community digests.

### 1. Ecosystem Overview
The AI CLI tool ecosystem in mid-2026 is characterized by rapid maturation and a shift from single-agent prompt-response systems toward complex, multi-agent orchestration. Major players like OpenAI, Anthropic, and Google are heavily focused on enterprise integrations, sandbox security, and infrastructure stability, while emerging tools are racing to implement advanced context management (like AST-aware reading) and multi-agent parallelization. Interoperability is expanding, with universal adoption of the Model Context Protocol (MCP) and "Bring Your Own Key" (BYOK) architectures becoming standard expectations. Consequently, the competitive edge is moving from raw model capability toward workflow reliability, granular agentic control, and seamless IDE integration.

### 2. Activity Comparison
*Note: Issue and PR counts reflect the volume of noteworthy items explicitly highlighted in today's digests.*

| Tool | Release Status | Noteworthy Issues | Active PRs | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | `v2.1.211` | 10 | 6 | Desktop UI, MCP stability, and session context security. |
| **OpenAI Codex** | `rust-v0.144.5` | 10 | 10+ | Windows stability, Bedrock integration, and sub-agent lifecycle. |
| **Gemini CLI** | `v0.51.0` / `v0.52.0-preview` | 10 | 10 | Sandbox hardening, execution deadlocks, and AST-aware context. |
| **GitHub Copilot CLI**| `v1.0.72-0` | 10 | 0 | BYOK, context compaction, and TUI/OS friction. |
| **Kimi Code CLI** | `v1.49.0` | 3 | 4 | UI quick toggles, rate-limit transparency, and onboarding DX. |
| **OpenCode** | `v1.18.3` | 10 | 10 | Provider stability, V2 TUI refactors, and RTL accessibility. |
| **Pi** | `v0.80.10` | 10 | 10 | Model runtime unification, dynamic tool loading, and auth. |
| **Qwen Code** | `v0.19.11` | 10 | 10 | Multi-workspace daemon, Git web-shell, and multi-agent RFCs. |
| **DeepSeek TUI (CodeWhale)**| `v0.9.0` | 10 | 10 | WhaleFlow orchestration, UI refactors, and guided UX onboarding.|

### 3. Shared Feature Directions
*   **Multi-Agent Orchestration & Delegation:** Almost all tools are moving beyond single-threaded execution. **DeepSeek TUI** (WhaleFlow Conductor), **Qwen Code** (parent/child delegation), **OpenAI Codex** (sub-agent reloads), and **Claude Code** (workflow routing) are actively building architectures where agents can fan out, synthesize results, and manage parallel tasks autonomously.
*   **Advanced Context Management & Compaction:** To combat context exhaustion, tools are implementing smarter memory and compaction. **Gemini CLI** and **Copilot CLI** are exploring AST (Abstract Syntax Tree) aware file reading to save tokens, while **OpenAI Codex** and **Pi** are refining SQLite storage and auto-compaction fallbacks to prevent session crashes.
*   **Sandbox Safety & Guardrails:** As agents execute more destructive commands, CLI tools are hardening their bash execution layers. **OpenAI Codex** improved `rm` detection, **Gemini CLI** patched macOS Seatbelt escapes and variable expansion bypasses, and both **Qwen Code** and **Pi** are actively deploying three-state command evaluations and guardrails against forced git deletions.
*   **Frictionless UI & Inline Controls:** Developers are frustrated by deep menu nesting and broken terminal UX. **Kimi Code** and **OpenCode** are pushing for inline slash commands (e.g., adjusting reasoning effort without leaving the keyboard), while multiple tools are battling TUI bugs related to scroll jumps, text selection, and pasted text collapsing.

### 4. Differentiation Analysis
*   **Enterprise & Platform Lock-in vs. Agnostic Flexibility:** **OpenAI Codex** and **Claude Code** are heavily focused on enterprise needs (e.g., MDM deployments, Amazon Bedrock cost attribution, compliance). In contrast, tools like **Pi**, **OpenCode**, and **Qwen Code** are differentiating by remaining model-agnostic, prioritizing BYOK, dynamic provider catalogs, and multi-workspace portability.
*   **Target Audiences:** **Copilot CLI** focuses heavily on the GitHub/VS Code native developer, seeking tight IDE synergies. **DeepSeek TUI (CodeWhale)** and **Gemini CLI** are leaning into power-user and research workflows, proposing highly autonomous orchestration (like handling 3-million-word novels or deep codebase investigations). **Kimi Code** is heavily focused on the developer "flow state," prioritizing frictionless UI transitions over raw infrastructure.
*   **Technical Architecture:** **Codex** and **DeepSeek TUI** have migrated or are refactoring into compiled languages (Rust) for performance and memory safety. Meanwhile, Node/TypeScript-based tools like **Qwen Code** and **OpenCode** are focusing on daemonizing (running as background services) and web-shells to bridge the gap between local CLI and cloud workflows.

### 5. Community Momentum & Maturity
*   **High Iteration & Momentum:** **Pi** shipped three releases in a single day, showcasing incredibly agile development focused on rapidly integrating new models (Kimi K3) and providers (Telnyx, Bedrock). **DeepSeek TUI** (transitioning to CodeWhale) showed massive momentum with its v0.9.0 release, completely overhauling its shell interaction system and actively refactoring monolithic code to handle scale.
*   **Scale & Stability Focus (Mature Phase):** **OpenAI Codex** and **Claude Code** are dealing with mature-product scale issues—specifically, managing massive memory leaks (Codex's MCP processes leaking 9GB+ RAM), Windows platform brittleness, and deep security vulnerabilities (Claude Code fixing forged session contexts and homoglyph attacks).
*   **Active but Fragmented:** **Gemini CLI** and **OpenCode** have highly active communities shaping feature RFCs (like AST reading and multi-workspaces), but they are currently bogged down by basic operational deadlocks and upstream provider network errors.

### 6. Trend Signals
*   **The Demand for Agentic Determinism:** The honeymoon phase of AI agents is over. Developers are aggressively demanding predictability, evidenced by requests for "hard tool budgets" (DeepSeek), deterministic safety flows (Pi), and strict overrides for auto-memory. Engineers want guarantees that agents won't execute destructive Git commands or run up API quotas via infinite reasoning loops.
*   **Platform Support is a Major Bottleneck:** A clear trend across all digests is the friction between cross-platform CLI aspirations and the reality of OS-level constraints. Windows specifically is a massive pain point across the board (spawning git processes, ARM64 crashes, file system truncation), and legacy Linux distributions (CentOS 7) are being aggressively dropped by modern Node/Rust binaries, leaving enterprise users stranded.
*   **Local Context Remains King:** Despite cloud capabilities, the industry recognizes that local context handling is broken. The push toward AST-aware tools, component-level evaluations, and fixing silent background compaction failures signals that the next leap in AI coding productivity will come from better codebase comprehension, not just larger model context windows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the technical analysis report for the Claude Code Skills ecosystem based on recent community activity.

### 1. Top Skills Ranking (Most-Discussed PRs)
Based on repository activity and linked discussions, these represent the most actively debated Skills and core ecosystem contributions:

*   **Skill-Creator Evaluation Fixes (PRs #1298, #1099, #1050)** 
    *   **Functionality:** Core fixes to the `skill-creator` meta-skill's evaluation scripts (`run_eval.py` and `run_loop.py`).
    *   **Discussion Highlights:** The community discovered that the description-optimization loop reports `0% recall` for all skills, effectively optimizing against noise. Extensive discussion covers Windows compatibility issues (e.g., `PATHEXT`, `cp1252` encoding) and broken subprocess pipes.
    *   **Status:** Open ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050))
*   **Self-Audit Reasoning Quality Gate (PR #1367)**
    *   **Functionality:** A universal quality gate skill that audits AI output before delivery, enforcing mechanical file verification and four-dimension reasoning audits.
    *   **Discussion Highlights:** Tied closely to community demand for agent self-verification, preventing AI hallucinations regarding file creation and output integrity.
    *   **Status:** Open ([#1367](https://github.com/anthropics/skills/pull/1367))
*   **Document-Typography Skill (PR #514)**
    *   **Functionality:** Automated typographic quality control for generated documents (preventing orphan words, widow paragraphs, and numbering misalignment).
    *   **Discussion Highlights:** Addresses a widely felt but rarely articulated pain point in AI-generated document generation. 
    *   **Status:** Open ([#514](https://github.com/anthropics/skills/pull/514))
*   **Meta-Skills: Quality & Security Analyzers (PR #83)**
    *   **Functionality:** Introduces two meta-skills to the marketplace that evaluate the structural quality and security posture of *other* Claude Skills.
    *   **Discussion Highlights:** Highly relevant to recent debates around trust boundaries and vetting community-contributed skills.
    *   **Status:** Open ([#83](https://github.com/anthropics/skills/pull/83))
*   **Skill-Creator YAML & UTF-8 Validation (PRs #362, #539, #361)**
    *   **Functionality:** Pre-parse validation checks to prevent silent YAML parsing failures and Rust panics when handling multi-byte (UTF-8) characters.
    *   **Discussion Highlights:** Addresses a critical pain point where unquoted special characters break skill triggering entirely.
    *   **Status:** Open ([#362](https://github.com/anthropics/skills/pull/362), [#539](https://github.com/anthropics/skills/pull/539), [#361](https://github.com/anthropics/skills/pull/361))

### 2. Community Demand Trends
Analysis of recent Issues reveals clear strategic directions the community wants from the next iteration of Skills:

*   **Security & Trust Boundaries:** The most debated issue ([#492](https://github.com/anthropics/skills/issues/492)) highlights vulnerability concerns where community skills mimic the official `anthropic/` namespace. There is heavy demand for an **Agent Governance Skill** to enforce permissions, threat detection, and trust scoring ([#412](https://github.com/anthropics/skills/issues/412)).
*   **Memory State Optimization:** High demand for skills that reduce context window bloat, such as the proposed **compact-memory skill** that converts prose-based agent memory into efficient symbolic notation ([#1329](https://github.com/anthropics/skills/issues/1329)).
*   **Enterprise & Organizational Workflows:** Users are pushing for native org-wide skill sharing without manual file distribution ([#228](https://github.com/anthropics/skills/issues/228)) and standardized handling of enterprise platforms like SharePoint Online ([#1175](https://github.com/anthropics/skills/issues/1175)).
*   **MCP Protocol Integration:** Requests to bridge the gap between Skills and external tools by exposing complex Skills (like algorithmic art generation) as standard Model Context Protocol (MCP) APIs ([#16](https://github.com/anthropics/skills/issues/16)).

### 3. High-Potential Pending Skills
These active PRs address specific technical gaps and have a high likelihood of merging soon based on community engagement and issue resolution tracking:

*   **PR #538: Fix PDF Case-Sensitivity References** 
    *   Solves a critical bug where case mismatches in `SKILL.md` break the PDF skill on Linux/macOS. ([PR #538](https://github.com/anthropics/skills/pull/538))
*   **PR #541: Prevent DOCX Tracked Change ID Collisions** 
    *   Fixes document corruption when the DOCX skill adds tracked changes alongside existing bookmarks. ([PR #541](https://github.com/anthropics/skills/pull/541))
*   **PR #210: Frontend-Design Skill Improvements**
    *   Revises the frontend-design skill to ensure instructions are highly actionable and token-efficient for Claude within a single conversation. ([PR #210](https://github.com/anthropics/skills/pull/210))
*   **PR #723: Comprehensive Testing-Patterns Skill**
    *   Introduces a new skill covering the "Testing Trophy" model, React component testing, and unit test architecture. ([PR #723](https://github.com/anthropics/skills/pull/723))

### 4. Skills Ecosystem Insight
The community's most concentrated demand is currently focused on **ecosystem stability and meta-tooling**—specifically, fortifying the `skill-creator` evaluation loops, enforcing strict YAML validation, and establishing rigid security boundaries for community-contributed skills.

---

Here is the community digest for Claude Code based on the latest GitHub activity.

# Claude Code Community Digest - 2026-07-17

## 1. Today's Highlights
Claude Code rolled out version `v2.1.211`, introducing new flags for subagent stream-json outputs and patching critical UI security vulnerabilities related to bidirectional text spoofing. Community engagement today was heavily anchored in desktop app and UI improvements, alongside active investigations into session context security and MCP (Model Context Protocol) connectivity regressions. 

## 2. Releases
*   **[v2.1.211](https://github.com/anthropics/claude-code/releases)**
    *   **Features:** Added the `--forward-subagent-text` flag and `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` environment variable to include subagent text and reasoning within `stream-json` outputs.
    *   **Security Fixes:** Fixed permission preview relays in chat channels that failed to neutralize bidirectional-override, zero-width, and homoglyph (look-alike) characters.

## 3. Hot Issues
1.  **[#78241 - Forged user turns injected into session context](https://github.com/anthropics/claude-code/issues/78241)**: A critical security report where forged user turns are being injected mid-session into `claude-fable-5` contexts without appearing in the local transcript or breaking the parentUuid chain.
2.  **[#78159 - Fable 5 stops writing local transcript JSONLs](https://github.com/anthropics/claude-code/issues/78159)**: Since v2.1.209, sessions running on `claude-fable-5` silently fail to write local transcript logs (`~/.claude/projects/...`), though Opus sessions on the same binary behave normally.
3.  **[#78193 - Streamable-HTTP MCP connector throws 405/Client capabilities error](https://github.com/anthropics/claude-code/issues/78193)**: A networking bug where remote Streamable-HTTP MCP connectors (like Atlassian) fatally crash the Desktop app with a "Client server capabilities not available" toast upon encountering an SSE GET 405 error.
4.  **[#71671 - Model ignores memory and instructions, causing data loss](https://github.com/anthropics/claude-code/issues/71671)**: A high-impact behavioral bug where the model repeatedly ignores saved memory, scripts, and explicit user instructions, resulting in production data loss for the developer.
5.  **[#78032 - Cloud routines refused as "NOT USER INPUT"](https://github.com/anthropics/claude-code/issues/78032)**: Scheduled cloud routines triggered via API suddenly started getting refused by the model as "NOT USER INPUT" starting July 13, breaking automated workflows. (Closed, likely resolved).
6.  **[#18435 - Multi-account management in Claude Desktop](https://github.com/anthropics/claude-code/issues/18435)**: A massively popular request (658 thumbs up) asking for native profile switching to manage multiple Claude accounts simultaneously in the Desktop app.
7.  **[#16135 - Background process termination crashes Docker containers](https://github.com/anthropics/claude-code/issues/16135)**: A persistent Linux bug where killing background processes inside Docker causes Claude Code itself to crash with SIGKILL (exit code 137).
8.  **[#77610 - GitHub repo-scoping gateway returns 403](https://github.com/anthropics/claude-code/issues/77610)**: A web platform issue where the repo-scoping gateway blocks `github.com` egress even with "All domains" enabled, breaking Bazel dependency resolution.
9.  **[#23134 - Disable paste text collapse in TUI](https://github.com/anthropics/claude-code/issues/23134)**: A highly requested enhancement to stop the CLI from automatically collapsing pasted multi-line text into `[Pasted text #N +X lines]`, which hinders review before submission.
10. **[#78276 - Workflow output renders with overlapping ghost frames](https://github.com/anthropics/claude-code/issues/78276)**: A TUI visual bug where returning from a `/workflow` to the main view scrambles agent outputs, tables, and text layers together into an unreadable state.

## 4. Key PR Progress
*(Note: Only 6 PRs were updated in the last 24h; all 6 are highlighted below)*

1.  **[PR #78057: fix(security-guidance): flag Python exec()](https://github.com/anthropics/claude-code/pull/78057)**: Enhances the security guidance linter to flag Python `exec()` as a code-injection sink, matching the existing rules for `eval()`.
2.  **[PR #78049: fix(mdm): Set-ClaudeCodePolicy.ps1 architecture issue](https://github.com/anthropics/claude-code/pull/78049)**: Fixes an MDM deployment script bug where running in a default 32-bit PowerShell host (via Intune) mistakenly wrote policies to `Program Files (x86)`.
3.  **[PR #77977: docs(plugin-dev): skipLfs marketplace sources](https://github.com/anthropics/claude-code/pull/77977)**: Adds official documentation and examples for using the `skipLfs` option in `github` and `git` plugin marketplace sources to prevent massive LFS downloads.
4.  **[PR #16680: feat: Conversation context recovery plugin](https://github.com/anthropics/claude-code/pull/16680)** (Closed): Introduced a plugin designed to index messages and recover older conversation contexts seamlessly. 
5.  **[PR #58646: feat(plugin): git-aware-history](https://github.com/anthropics/claude-code/pull/58646)** (Closed): Proposed a plugin solution to fix session fragmentation across git worktrees by keying history by repository rather than raw CWD paths.
6.  **[PR #27204: Fix hook validator schema](https://github.com/anthropics/claude-code/pull/27204)** (Closed): Aimed to update `validate-hook-schema.sh` to auto-detect plugin wrapper formats and support optional matchers correctly.

## 5. Feature Request Trends
*   **Desktop App Customization:** There is a strong demand for native UI controls, specifically regarding terminal font family modifications and adjustable font sizes for the Code tab.
*   **Profile & Account Portability:** Users are frequently requesting better multi-account handling and source-control linking for organization-wide skills.
*   **Transparency in TUI:** Developers want granular control over CLI input parsing, specifically the ability to toggle UI behaviors like automatic paste-collapse.

## 6. Developer Pain Points
*   **Windows & Cowork Instability:** Windows users continue to report severe operational issues, ranging from persistent white screens on the Desktop app to truncated/stale files served by the `virtiofs` FUSE mount in Cowork VMs.
*   **MCP Integration Regressions:** Connecting custom MCP tools via Streamable-HTTP or directory connectors has become increasingly unstable following recent Desktop updates, often resulting in silent tool failures or fatal capability errors.
*   **Claude-in-Chrome Limitations:** Browser automation via the Chrome MCP continues to struggle with multi-profile environments, failing to distinguish between active browser profiles and frequently evicting idle sessions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for July 17, 2026.

### 1. Today's Highlights
Codex rolls out a new stable release (`rust-v0.144.5`) focusing on enhanced sandbox safety via improved dangerous-command detection. Meanwhile, the engineering team merged a massive batch of structural refactors and performance fixes, tackling everything from sub-agent lifecycle management to custom Amazon Bedrock transports. On the community front, critical Windows performance regressions and MCP process leaks continue to dominate user discussions.

### 2. Releases
*   **rust-v0.144.5** ([Changelog](https://github.com/openai/codex/compare/rust-v0.144.4...rust-v0.144.5))
    *   **Sandbox Safety:** Improved dangerous-command detection, including more variations of forced `rm` commands, and provided clearer rejection reasons when commands are denied ([#33455](https://github.com/openai/codex/pull/33455)).
*   **Alpha Builds:** Progress continues on the `0.145.0` branch, with four new alpha releases (`alpha.15` through `alpha.19`) pushed in the last 24 hours, indicating active iteration toward the next minor version.

### 3. Hot Issues
*   **Windows ARM64 App Crashes:** Users are reporting severe crash-loops on Windows ARM64 builds because `ChatGPT.exe` no longer exports N-API symbols, causing delay-load failures ([#33381](https://github.com/openai/codex/issues/33381), [#33429](https://github.com/openai/codex/issues/33429)).
*   **Git Process Spamming on Windows:** The Codex Desktop app on Windows is spawning hundreds of `git.exe status` probes per minute, severely degrading system performance and causing kernel token leaks ([#20567](https://github.com/openai/codex/issues/20567), [#30926](https://github.com/openai/codex/issues/30926), [#17229](https://github.com/openai/codex/issues/17229)).
*   **MCP Server Memory Leaks:** The app-server spawns global MCP server processes for each thread but fails to clean them up, leading to massive memory bloat (9GB+ RSS) and orphaned background tasks ([#30408](https://github.com/openai/codex/issues/30408), [#32997](https://github.com/openai/codex/issues/32997)).
*   **Broken Enterprise Auth:** A tracker issue highlights that Codex business access-tokens are throwing 401 Unauthorized errors, breaking enterprise workflows ([#25246](https://github.com/openai/codex/issues/25246)).
*   **Python SDK Stagnation:** The Python SDK on PyPI hasn't been updated in 5 weeks. Users are stuck on version `0.137` and are unable to access the newer GPT-5.6 models via the SDK ([#32478](https://github.com/openai/codex/issues/32478)).
*   **Rate Limit Regression:** Pro users report that the new "weekly limit" is draining as fast as the old 5-hour limit, severely restricting usage during normal coding sessions ([#33685](https://github.com/openai/codex/issues/33685)).
*   **Sub-agent Lifecycle Bugs:** Orphaned sub-agents are causing eventual session freezes. Furthermore, custom agents are ignoring prompt model steering ([#19197](https://github.com/openai/codex/issues/19197), [#32291](https://github.com/openai/codex/issues/32291)).
*   **Custom stdio MCP Tools Unexposed:** Codex Desktop discovers custom MCP servers but fails to actually expose the tools to the UI threads, a regression in the app-server ([#19425](https://github.com/openai/codex/issues/19425)).
*   **CLI LSP Integration Request:** A highly requested feature (420+ upvotes) asking for Codex CLI to natively auto-detect and auto-install Language Server Protocol (LSP) integrations for better context ([#8745](https://github.com/openai/codex/issues/8745)).
*   **Amazon Bedrock Cost Attribution:** Enterprise users need a way to attribute Amazon Bedrock inference costs to specific workloads or teams within the CLI ([#27613](https://github.com/openai/codex/issues/27613)).

### 4. Key PR Progress
*   **Amazon Bedrock Custom Transports ([#33695](https://github.com/openai/codex/pull/33695)):** Introduces support for custom endpoints, headers, and bearer authentication for the `amazon-bedrock` provider.
*   **Sub-agent Reload & Spawn Fixes ([#33657](https://github.com/openai/codex/pull/33657), [#33656](https://github.com/openai/codex/pull/33656)):** Fixes a bug where durable v2 sub-agents lost their role configurations upon lazy reload, and adds validation for reasoning efforts after spawn roles are applied.
*   **Active-Turn Environment Stability ([#33658](https://github.com/openai/codex/pull/33658)):** Prevents settings updates from interrupting or altering the environment snapshot of an active execution turn.
*   **Auto-Compaction Fallback ([#31529](https://github.com/openai/codex/pull/31529)):** Implements a structured fallback that runs just before an automatic context compaction rollover occurs.
*   **TUI & Terminal Enhancements ([#33684](https://github.com/openai/codex/pull/33684), [#33645](https://github.com/openai/codex/pull/33645)):** Refactors TUI approval payloads into dedicated structs and allows parallel `write_stdin` tool calls across independent terminal sessions.
*   **Migration & Database Repair ([#33687](https://github.com/openai/codex/pull/33687)):** Optimizes SQLite legacy recency repair to stop unnecessary UPDATE queries from locking the writer slot.
*   **Memory & Provenance ([#33683](https://github.com/openai/codex/pull/33683)):** Ensures imported agent memory retains its source frontmatter and provenance, keeping project-specific knowledge properly scoped.
*   **Credit Redemption Safeguards ([#31329](https://github.com/openai/codex/pull/31329)):** Adds safe-default UI confirmations and handles backend metadata for usage-limit reset redemptions.
*   **Plugin Analytics ([#31571](https://github.com/openai/codex/pull/31571)):** Resolves remote plugin identities to properly emit `remote_plugin_id` for skill invocation analytics.
*   **Codebase Cleanup ([#33639](https://github.com/openai/codex/pull/33639)):** Removes the unused `codex-realtime-webrtc` crate and its complex native dependency graph.

### 5. Feature Request Trends
*   **Workspace & Directory Flexibility:** Users want strict control over where Codex creates local files. There are active requests to change the default project directory away from OneDrive/iCloud-backed folders, set custom directories for projectless threads, and support parent workspaces containing multiple Git repositories.
*   **Native LSP Support for CLI:** Strong demand for Codex CLI to natively leverage Language Server Protocol diagnostics and symbol intelligence, reducing hallucinations and improving code accuracy.
*   **Advanced Enterprise Cost Controls:** As AI usage scales in enterprises, developers require granular cost attribution features (such as custom Bedrock project tags) to bill internal teams accurately.

### 6. Developer Pain Points
*   **Windows App Instability:** The Windows desktop app is currently perceived as highly unstable. Users are frustrated by aggressive resource consumption (spawning thousands of background Git processes) and disruptive UI behaviors (flashing PowerShell/conhost windows stealing focus).
*   **Sandbox Constraints Breaking Workflows:** The `apply_patch` tool in the Windows desktop sandbox is failing to write to the workspace, forcing the AI to fallback to un-sandboxed PowerShell scripts to complete tasks.
*   **Unpredictable Rate Limits:** Developers are finding the transition from 5-hour limits to weekly limits frustrating, reporting that quotas drain far too quickly during standard GPT-5.5/High sessions, interrupting active development.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for July 17, 2026.

### 1. Today's Highlights
Gemini CLI has officially shipped **v0.51.0** alongside the first preview for **v0.52.0**, introducing automated triage workers and critical bug fixes for Agent-to-Agent (A2A) communication. The development team is heavily focused on core stability and security, evidenced by a surge of foundational PRs addressing sandbox escapes, terminal UI flickering, and multi-agent reliability. Additionally, automated memory management and agent routing behaviors are undergoing significant overhauls based on active community feedback.

### 2. Releases
*   **[v0.51.0](https://github.com/google-gemini/gemini-cli/pull/28420)**: General availability release focusing on core stabilization, including fixes for `no_proxy` test handling and backend version bumps.
*   **[v0.52.0-preview.0](https://github.com/google-gemini/gemini-cli/pull/28419)**: Introduces foundational modules for the new `caretaker-triage` worker and refactors CI configuration files out of the workspace context.
*   **[v0.52.0-nightly.20260716](https://github.com/google-gemini/gemini-cli/pull/28413)**: Features a critical fix to group cancelled tool responses, coalescing consecutive roles to prevent `400 Bad Request` errors in A2A communication. 

### 3. Hot Issues
*   **[#21409: Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**: A high-impact bug (8 👍) where the CLI hangs indefinitely when deferring simple tasks (like folder creation) to the generalist subagent. Users are forced to manually disable subagents to maintain workflow.
*   **[#22323: Subagent false success on MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)**: The `codebase_investigator` subagent reports a `GOAL` success even when it hits the maximum turn limit before executing any actual analysis, hiding critical workflow interruptions.
*   **[#25166: Shell command execution gets stuck](https://github.com/google-gemini/gemini-cli/issues/25166)**: Commands hang in an "Awaiting user input" state after completion, severely breaking the developer REPL loop.
*   **[#26522: Auto Memory infinite retries](https://github.com/google-gemini/gemini-cli/issues/26522)**: The background Auto Memory agent continuously resurfaces "low-signal" sessions instead of marking them as processed, leading to context bloat.
*   **[#21968: Low passive usage of skills and sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)**: Developers report friction with custom skills; the agent ignores contextual skills during normal operation unless explicitly prompted by the user.
*   **[#24353: Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**: An Epic issue tracking behavioral evals across 6 supported Gemini models to establish better baseline reliability for agentic workflows.
*   **[#21983: Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**: Linux users on Wayland desktop environments are experiencing termination failures when spinning up the browser subagent.
*   **[#26525: Deterministic redaction for Auto Memory](https://github.com/google-gemini/gemini-cli/issues/26525)**: A security/privacy concern where local transcripts containing secrets are sent to the model before the extraction prompt can redact them.
*   **[#22745: AST-aware file reads and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**: An investigation Epic exploring AST-aware tools to reduce token noise and improve method-bound navigation within the CLI.
*   **[#22672: Destructive agent behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**: Users request built-in safeguards to prevent the agent from executing dangerous commands (like `git reset --force` or DB modifications) without safer alternatives.

### 4. Key PR Progress
*   **[#28424: macOS Seatbelt sandbox hardening](https://github.com/google-gemini/gemini-cli/pull/28424)**: Aligns macOS permissive Seatbelt profiles to a `deny-default` model, patching a CVE-2023-32364-class devfs-mount escape vulnerability.
*   **[#28403: Block variable expansion bypass (GHSA-wpqr-6v78-jr5g)](https://github.com/google-gemini/gemini-cli/pull/28403)**: Defense-in-depth hardening fixing an incomplete security gate that allowed `$VAR` and `${VAR}` expansion bypasses in shell execution.
*   **[#28164: Limit recursive reasoning turns](https://github.com/google-gemini/gemini-cli/pull/28164)**: Introduces a strict 15-turn limit per user request to protect local CPU resources and API quotas from infinite agentic loops.
*   **[#28345: LLM triage orchestrator](https://github.com/google-gemini/gemini-cli/pull/28345)**: Implements the foundational LLM inference orchestration and Cloud Run job definitions for the CLI's new automated issue triaging system.
*   **[#28319: A2A environment isolation](https://github.com/google-gemini/gemini-cli/pull/28319)**: Enforces workspace path trust checks prior to loading environment variables and isolates task environments using `AsyncLocalStorage`.
*   **[#28405: Fix terminal UI scroll jumps](https://github.com/google-gemini/gemini-cli/pull/28405)**: Resolves a frustrating UX bug where the terminal scroll position aggressively jumped to the top/bottom during content generation if the user scrolled up.
*   **[#28309: Markdown rendering for CJK text](https://github.com/google-gemini/gemini-cli/pull/28309)**: Fixes hard line-wrapping issues and misinterpreted lists for CJK (Chinese, Japanese, Korean) characters in the CLI UI.
*   **[#28422: Resolve extension checkout ambiguity](https://github.com/google-gemini/gemini-cli/pull/28422)**: Improves the robustness of CLI extension cloning by resolving Git references to concrete commit SHAs and verifying checkout integrity.
*   **[#28304: Code Assist tier error handling](https://github.com/google-gemini/gemini-cli/pull/28304)**: Replaces raw backend errors with user-friendly messaging when accounts lack the proper consumer Code Assist tier.
*   **[#28386: VS Code activation disposables tracking](https://github.com/google-gemini/gemini-cli/pull/28386)**: Fixes a subtle memory leak in the VS Code companion extension where event registrations were being swallowed by JavaScript comma expressions.

### 5. Feature Request Trends
*   **Code-Aware Context Navigation**: Strong demand for AST (Abstract Syntax Tree) aware tools, allowing the agent to precisely map codebases and read method bounds without wasting tokens on misaligned file reads.
*   **Granular Agentic Control**: Users want more deterministic control over the agent's autonomy, specifically requesting native safeguards against destructive Git/DB commands and better rules for when (or when not) to defer to subagents.
*   **Memory System Transparency**: Requests to surface or quarantine invalid Auto Memory patches, alongside better ways to review and share subagent trajectories via `/chat share`.

### 6. Developer Pain Points
*   **Execution Deadlocks & Hangs**: The primary frustration is the CLI timing out or hanging indefinitely during basic operations—such as shell command execution, vite app creation, or generalist agent deferral.
*   **Resource & Quota Mismanagement**: The agent occasionally falls into recursive reasoning loops or ignores tool limits (e.g., hitting 400 errors when loading >128 tools), wasting time and API quotas before safely terminating.
*   **Workspace Pollution**: Developers report frustration when the model scatters `tmp` edit scripts across random directories instead of writing cleanly to an isolated workspace, complicating Git commits and project hygiene.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for July 17, 2026.

### 1. Today's Highlights
GitHub Copilot CLI rolled out version `v1.0.72-0`, bringing persistent multi-turn subagents and tool search support for Claude Haiku 4.5+. The community remains highly engaged around context and session management, with ongoing discussions highlighting critical pain points in background compaction failures, CAPI 5 MB limits, and Bring Your Own Key (BYOK) integration.

### 2. Releases
**v1.0.72-0** & **v1.0.71** (2026-07-16)
* **Added:** Multi-turn subagents are now always enabled, allowing developers to send follow-up messages to running agents. Tool search is now enabled for Claude Haiku 4.5+.
* **Improved:** Scheduled prompts are now delivered as steering messages when the agent is busy. The `-p --autopilot` mode no longer hangs on background tasks and properly honors `COPILOT_TASK_WAIT_TIMEOUT_SECONDS`.
* **Fixed:** Reopening the `/subagents` model picker now retains individual reasoning effort and context tiers. Emoji shortcodes (like `:tada:`) rendering bugs have been resolved.

### 3. Hot Issues
Here are the top 10 noteworthy issues driving community discussion:

* **[#4024](https://github.com/github/copilot-cli/issues/4024) [OPEN]**: Voice mode is failing silently across all bundled ASR models (`nemotron_speech` RNNT) in Foundry Local Core due to a `MultiModalProcessor` routing bug. Audio captures fine, but transcriptions return empty.
* **[#3762](https://github.com/github/copilot-cli/issues/3762) [OPEN]**: The `contextTier` configuration option is reportedly ignored on startup. Users are forced to manually switch models via the model picker to actually trigger long context limits.
* **[#4097](https://github.com/github/copilot-cli/issues/4097) [OPEN]**: `apply_patch` stores deleted binary files as textual diffs in session history. This permanently breaches the CAPI 5 MB limit and breaks `/compact`, requiring manual session restarts.
* **[#4016](https://github.com/github/copilot-cli/issues/4016) [OPEN]**: BYOK (`COPILOT_PROVIDER_*`) is being rejected in `--acp --stdio` mode, demanding GitHub authentication for `session/new`. This is a regression from versions 1.0.61–1.0.68.
* **[#3481](https://github.com/github/copilot-cli/issues/3481) [OPEN]**: Long context tiers (`contextTier=long_context`) are not applied on startup for non-interactive sessions. Developers are requesting a dedicated CLI flag to reliably enforce this.
* **[#3407](https://github.com/github/copilot-cli/issues/3407) [CLOSED]**: Long-running sessions are getting permanently wedged by `CAPIError: 400` (Invalid `signature` in `thinking` block) immediately after a background sub-agent completes, with no auto-recovery. 
* **[#4148](https://github.com/github/copilot-cli/issues/4148) [CLOSED]**: The native in-CLI "Issues" panel fails to fetch issues from GitHub Enterprise Server (GHES) custom domains (`*.ghe.com`), returning empty arrays despite matching open issues.
* **[#4122](https://github.com/github/copilot-cli/issues/4122) [CLOSED]**: Subagents were resolving relative markdown links in `.agent.md` against the current working directory instead of the agent file's directory, causing supporting docs to fail loading.
* **[#4156](https://github.com/github/copilot-cli/issues/4156) [OPEN]**: Critical triage flag: forced local git branch deletions (`git branch -D`) are misclassified by the permission engine and execute silently without prompting the user for approval.
* **[#4155](https://github.com/github/copilot-cli/issues/4155) [OPEN]**: Gemini models (`gemini-3.1-pro-preview`, `gemini-3.5-flash`) are universally throwing `CAPIError: 400 Bad Request` in the CLI, even on basic text prompts without tools.

### 4. Key PR Progress
*No Pull Requests were updated or merged in the last 24 hours.*

### 5. Feature Request Trends
Analyzing the latest issues reveals a strong community push toward **flexible model integration** and **customizable workflows**:
* **Bring Your Own Model (BYOM) Expansion:** Developers want broader support for external LLM endpoints (Google Cloud AI, Azure OpenAI, local models) natively within the CLI, alongside the ability to define custom Speech-to-Text languages for voice mode ([#4139](https://github.com/github/copilot-cli/issues/4139), [#3658](https://github.com/github/copilot-cli/issues/3658)).
* **Enhanced IDE-CLI Synergy:** Users are requesting tighter integration with their existing environments, specifically asking the CLI to inherit MCP tools natively from the parent VS Code instance ([#4143](https://github.com/github/copilot-cli/issues/4143)).
* **Session Management Control:** Developers desire more granular control over worktrees and session histories. Popular requests include applying sparse-checkouts during session creation to save time on large monorepos ([#4145](https://github.com/github/copilot-cli/issues/4145)) and sorting the `/resume` picker by last-updated timestamps ([#4140](https://github.com/github/copilot-cli/issues/4140)).

### 6. Developer Pain Points
* **Context Memory & Compaction Fragility:** A major recurring frustration is the inability of the CLI to gracefully handle large contexts. Background compaction fails silently and hangs processes during session resume ([#4138](https://github.com/github/copilot-cli/issues/4138)), and large attachments or deleted binaries easily wedge sessions past the 5 MB CAPI limit with no auto-recovery ([#3767](https://github.com/github/copilot-cli/issues/3767), [#4097](https://github.com/github/copilot-cli/issues/4097)).
* **TUI vs. Native OS Friction:** The push towards a more graphical TUI experience is annoying power users. Text selection via the mouse is currently broken in parts of the interface ([#4154](https://github.com/github/copilot-cli/issues/4154)), and standard macOS behaviors like `cmd+click` to open links are behaving erratically ([#3580](https://github.com/github/copilot-cli/issues/3580)).
* **Windows Installation Issues:** Several developers reported installation blockers on Windows, notably `plugin install` failing 100% of the time with "Access is denied (os error 5)" regardless of the source ([#4151](https://github.com/github/copilot-cli/issues/4151)), alongside broader `winget` installation failures ([#4149](https://github.com/github/copilot-cli/issues/4149)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest 
**Date:** 2026-07-17

### 1. Today's Highlights
Kimi Code CLI officially rolled out **v1.49.0**, bringing internal version bumps (including `kosong` to v0.55.0) and crucial optimizations to context budgeting and reasoning content parsing. The community is actively focusing on refining User Interface (UI) workflows and developer onboarding, with new pull requests addressing actionable error messages for fresh installs and expanded telemetry tracking. Meanwhile, users are highly requesting more granular in-line controls for reasoning effort without disrupting their coding flow.

### 2. Releases
*   **[v1.49.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.49.0)**
    *   **Context Optimization:** Fixed completion budget calculation to utilize remaining context efficiently (`@RealKai42`).
    *   **Reasoning Parse Fix:** Updated `kosong` to preserve empty-string `reasoning_content` as `ThinkPart`, stopping the sending of incomplete reasoning payloads (`@bigeagle`).

### 3. Hot Issues
*(Note: 3 active issues recorded in the last 24 hours)*
*   **[#2501](https://github.com/MoonshotAI/kimi-cli/issues/2501) [Feature Request] TUI Quick Switch for Reasoning Level**
    *   **Why it matters:** Users find it frustrating to break their "flow state" to navigate multi-level menus (`/model`) just to adjust thinking effort. The community is requesting slash commands (e.g., `/think`) or a direct UI dropdown, comparing the UX favorably to competitors like OpenAI's Codex.
*   **[#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318) [Bug] Organization TPD Rate Limit Calculation Error**
    *   **Why it matters:** A high-impact bug reported on Windows/kimi2.6 where users hit `TPD rate limit` prematurely. The issue suggests the CLI is miscalculating or misreporting Tokens Per Day limits on the moonshot.ai platform.
*   **[#1559](https://github.com/MoonshotAI/kimi-cli/issues/1559) [Bug] Official Docs Download Command Error**
    *   **Why it matters:** A barrier to entry for new users. The installation command listed on the official "getting-started" documentation is reportedly throwing errors, causing friction for initial onboarding.

### 4. Key PR Progress
*(Note: 4 active PRs recorded in the last 24 hours)*
*   **[#2503](https://github.com/MoonshotAI/kimi-cli/pull/2503) [CLOSED] chore(release): bump kimi-cli to 1.49.0 and kosong to 0.55.0**
    *   Official release engineering PR synchronizing version pins, updating release notes, and bumping the core `kosong` engine to 0.55.0.
*   **[#2500](https://github.com/MoonshotAI/kimi-cli/pull/2500) [CLOSED] feat(telemetry): align events with TS schema, add trace_id**
    *   Significantly improves debuggability by capturing `x-trace-id` response headers (for both stream and non-stream requests) and aligning Python telemetry events with the TypeScript rewrite (`agent-core-v2`).
*   **[#2488](https://github.com/MoonshotAI/kimi-cli/pull/2488) [OPEN] fix(soul): make LLMNotSet error message actionable**
    *   Improves Developer Experience (DX) for fresh Homebrew installs. Instead of a generic "LLM not set", it now prompts the user to run `kimi login`, directly addressing onboarding friction.
*   **[#2471](https://github.com/MoonshotAI/kimi-cli/pull/2471) [OPEN] feat(tools): add Monitor tool for per-line stdout streaming**
    *   Introduces a new streaming counterpart to background tasks, allowing developers to monitor per-line standard output directly within the CLI environment. 

### 5. Feature Request Trends
*   **Frictionless UI Controls:** There is a strong push to move configuration options out of deep, nested menus. Developers want inline, contextual controls—such as quick-toggle slash commands for reasoning levels/thinking effort directly in the primary TUI interface.
*   **Enhanced Process Observation:** Requests for better real-time visibility into what the agent is doing, highlighted by PRs aiming to introduce streaming stdout monitors for background tasks.

### 6. Developer Pain Points
*   **Interrupted Cognitive Flow:** Having to switch contexts or dive into sub-menus to change model parameters (like reasoning intensity) severely interrupts the coding experience. Developers expect seamless, inline toggles.
*   **Opaque Rate Limits & Networking:** Users are experiencing confusing roadblocks related to platform quotas (TPD limits) and generic configuration errors, making troubleshooting difficult without proper trace IDs (which the team is actively fixing in PR #2500).
*   **Onboarding Friction:** Buggy installation commands in the official docs and non-actionable error messages prior to authentication are creating unnecessary hurdles for first-time users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for July 16, 2026.

### 1. Today's Highlights
OpenCode shipped version v1.18.3, bringing quality-of-life improvements to the subagent picker and fixing critical UI bugs in the Desktop app. The community was highly active today, focusing heavily on V2 refinements, including major refactors to the TUI keymap and action states. Meanwhile, developers flagged ongoing provider connectivity issues and strongly requested native RTL language rendering and a unified plugin marketplace.

### 2. Releases
*   **v1.18.3** ([View Release](https://github.com/anomalyco/opencode/releases))
    *   **Core:** Added an Up Arrow shortcut to close the subagent picker when the first item is selected.
    *   **Desktop:** Fixed home page scrolling behaviors for sticky headers and session lists. Fixed startup readiness to properly include WSL server loading before launching the UI.

### 3. Hot Issues
1.  **[Issue #13984](https://github.com/anomalyco/opencode/issues/13984): Cannot copy and paste in OpenCode CLI** - A highly discussed issue (53 comments) where the CLI indicates text is copied, but paste fails.
2.  **[Issue #14273](https://github.com/anomalyco/opencode/issues/14273): False "Free usage exceeded" warning on Zen models** - Users with active Zen balances are hitting walls when using free models like Kimi K2.5.
3.  **[Issue #25270](https://github.com/anomalyco/opencode/issues/25270): Model generates identical response twice** - A persistent bug causing LLMs to duplicate their outputs verbatim, disrupting developer workflows.
4.  **[Issue #22132](https://github.com/anomalyco/opencode/issues/22132): App hangs with local Ollama provider** - OpenCode freezes on simple prompts when using `@ai-sdk/openai-compatible` and Ollama, despite direct API calls working fine.
5.  **[Issue #28696](https://github.com/anomalyco/opencode/issues/28696): Unified Marketplace Request** - Garnering 23 upvotes, users are asking for an official registry to discover and manage plugins, agents, and MCP servers.
6.  **[Issue #35319](https://github.com/anomalyco/opencode/issues/35319): RTL (Arabic) rendering broken in Desktop app** - A comprehensive issue not only reporting broken RTL alignment but providing a fully tested fix recipe for maintainers.
7.  **[Issue #37231](https://github.com/anomalyco/opencode/issues/37231): Console Go "Upstream request failed"** - A widespread error affecting all Go models across CLI, Desktop, and VS Code extensions.
8.  **[Issue #36506](https://github.com/anomalyco/opencode/issues/36506): Paid OpenCode Zen models failing** - Paid tiers consistently throw "Upstream request failed", forcing users to fallback to free models.
9.  **[Issue #37339](https://github.com/anomalyco/opencode/issues/37339): Desktop black screen and zombie sessions** - The Desktop UI goes entirely black during processing, while new tabs connect to unresponsive "zombie" sessions.
10. **[Issue #36318](https://github.com/anomalyco/opencode/issues/36318): Support GPT-5.6 prompt caching defaults** - Developers want OpenCode to automatically utilize OpenAI's new prompt caching behaviors for GPT-5.6+ to save costs.

### 4. Key PR Progress
1.  **[PR #37300](https://github.com/anomalyco/opencode/pull/37300): Migrate to `aube-node` native installer** - A major core refactor swapping `@npmcli/arborist` for `@jdxcode/aube-node` to handle runtime package installations.
2.  **[PR #37206](https://github.com/anomalyco/opencode/pull/37206): Remove legacy TUI keymap layer** - Deletes the legacy `keymap.tsx` and migrates V2 TUI shortcuts and command palettes to the new `context/keymap.tsx`.
3.  **[PR #37392](https://github.com/anomalyco/opencode/pull/37392): Surface refusal category on content filter** - Improves error clarity by mapping Anthropic's `stop_reason: "refusal"` to specific, readable content-filter categories instead of a hardcoded message.
4.  **[PR #37379](https://github.com/anomalyco/opencode/pull/37379): Fail empty provider output** - Fixes V2 behavior where an assistant response containing only reasoning (no visible text/tools) was incorrectly recorded as a successful execution.
5.  **[PR #26861](https://github.com/anomalyco/opencode/pull/26861): TUI lazy-scroll loading** - Fixes an issue where old messages disappeared during long sessions by implementing paginated loading of 50 messages when scrolling up.
6.  **[PR #37226](https://github.com/anomalyco/opencode/pull/37226): Per-agent `subagent_depth` override** - Introduces granular control, allowing developers to override global subagent depth limits via agent configuration files.
7.  **[PR #37385](https://github.com/anomalyco/opencode/pull/37385): Preserve file API text content** - Fixes an issue where the instance file API unintentionally trimmed leading, trailing, and blank-line whitespace from decoded text.
8.  **[PR #37375](https://github.com/anomalyco/opencode/pull/37375): Prompt coding-quality exceptions** - Modifies the default system prompt to exempt logs, tests, and comments from aggressive token-minimization rules, preventing unreliable code generation.
9.  **[PR #37305 / #37391](https://github.com/anomalyco/opencode/pull/37391): Aube C ABI (bun:ffi) installer demo** - An alternative approach to PR #37300, demonstrating a Bun-native FFI installer backend for Npm.Service.
10. **[PR #36524](https://github.com/anomalyco/opencode/pull/36524): Deduplicate image bytes in tool events** - Optimizes tool event payload sizes by preventing identical base64 image bytes from being stored in both structured content and model-visible content.

### 5. Feature Request Trends
*   **Ecosystem & Agent Management:** Strong demand for a centralized marketplace to manage plugins, connectors, and external CLI agent adapters ([#28696](https://github.com/anomalyco/opencode/issues/28696), [#37376](https://github.com/anomalyco/opencode/issues/37376), [#37388](https://github.com/anomalyco/opencode/issues/37388)).
*   **Global Accessibility (RTL Support):** Multiple requests to fix Right-to-Left rendering for Arabic, Farsi, and Urdu, including proper chat box alignment and word ordering ([#35319](https://github.com/anomalyco/opencode/issues/35319), [#34697](https://github.com/anomalyco/opencode/issues/34697), [#33201](https://github.com/anomalyco/opencode/issues/33201)).
*   **Workflow & Queue Management:** Users want better control over streaming responses, specifically prompt queues, interrupt controls, and automated mode switching (e.g., Plan -> Build) ([#37381](https://github.com/anomalyco/opencode/issues/37381), [#37222](https://github.com/anomalyco/opencode/issues/37222)).
*   **Advanced Data Handling:** Requests for native Microsoft Office file (.docx, .xlsx) drag-and-drop, PDF reading in V2 tools, and broader provider rate-limit configurations ([#27689](https://github.com/anomalyco/opencode/issues/27689), [#37323](https://github.com/anomalyco/opencode/issues/37323), [#32423](https://github.com/anomalyco/opencode/issues/32423)).

### 6. Developer Pain Points
*   **Provider Instability:** A massive pain point right now is the "Upstream request failed" error flooding both paid OpenCode Zen and Console Go models. This is disrupting workflows across all interfaces (CLI, Desktop, VS Code) ([#37231](https://github.com/anomalyco/opencode/issues/37231), [#36506](https://github.com/anomalyco/opencode/issues/36506), [#37056](https://github.com/anomalyco/opencode/issues/37056)).
*   **Network/Fetch Errors:** General `TypeError: Failed to fetch` errors are routinely killing Desktop sessions and subagent explorations shortly after startup ([#27474](https://github.com/anomalyco/opencode/issues/27474), [#27755](https://github.com/anomalyco/opencode/issues/27755)).
*   **Model Over-engineering:** Despite instructions, models are ignoring explicit negative constraints (e.g., "don't do X"), over-complicating trivial tasks, and hallucinating fixes (like assuming expired links instead of checking auth tokens) ([#37338](https://github.com/anomalyco/opencode/issues/37338)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the technical digest for the Pi community for July 17, 2026.

### 1. Today's Highlights
Pi saw rapid iteration today with the release of v0.80.8, v0.80.9, and v0.80.10, focusing heavily on a unified model runtime, provider authentication, and native support for Kimi K3 models. The community was highly active around provider integrations and security, submitting several PRs for new backends like Bedrock Mantle and Telnyx, alongside addressing critical vulnerabilities, Windows stability, and UI scaling bugs.

### 2. Releases
*   **v0.80.10** ([Release Notes](https://github.com/earendil-works/pi/blob/v0.80.10/packages/co)) - Adds adaptive thinking compatibility for Kimi Coding models, correctly exposing K3's `max` level and supporting empty-signature thinking block replays.
*   **v0.80.9** ([Release Notes](https://github.com/earendil-works/pi/blob/v0.80.9/packages/coding-agent/docs/extensions.md#dyn)) - Introduces Kimi K3 support across built-in providers, enabling progressive extension tool activation through Kimi’s native protocol (Dynamic Tool Loading).
*   **v0.80.8** ([Release Notes](https://github.com/earendil-works/pi/blob/v0.80.8/packages/coding-agent/docs/providers.md)) - Unifies the model runtime (`ModelRuntime`), centralizes model configuration, adds provider-owned `/login`, and implements dynamic provider catalogs.

### 3. Hot Issues
1.  **[Issue #6657](https://github.com/earendil-works/pi/issues/6657): Bedrock AWS_PROFILE authentication not working** — Users report persistent `AccessDeniedException: 403` errors when using `AWS_PROFILE` with Bedrock, noting that a previous fix in v0.80.7 did not resolve the issue.
2.  **[Issue #6743](https://github.com/earendil-works/pi/issues/6743): pi-ollama-cloud extension crash on v0.80.8/0.80.9** — A critical failure where the extension throws "Cannot read properties of undefined", currently forcing users to downgrade to v0.80.7.
3.  **[Issue #6210](https://github.com/earendil-works/pi/issues/6210): /scoped-models fails with bracketed IDs** — The model selector breaks when custom model IDs contain brackets (e.g., `custom/bracketed-model[1m]`) due to regex parsing issues. 
4.  **[Issue #6740](https://github.com/earendil-works/pi/issues/6740): Incorrect thinking level for GPT 5.4 mini** — The `openai.models.ts` mapping incorrectly applies unsupported "minimal" thinking effort to GPT 5.4-mini.
5.  **[Issue #6716](https://github.com/earendil-works/pi/issues/6716): No destructive command guardrails in Bash** — The bash tool currently executes arbitrary commands without allowlisting/denylisting. The community is requesting built-in safety flows by default.
6.  **[Issue #6729](https://github.com/earendil-works/pi/issues/6729): Broad permissions for /tmp files** — Files generated in `/tmp` use default umask (0022) instead of strict `0600` permissions, creating a potential security exposure.
7.  **[Issue #6689](https://github.com/earendil-works/pi/issues/6689): ChatGPT OAuth overridden by OPENAI_API_KEY** — Silent authentication failures occur for Codex subscription users if an `OPENAI_API_KEY` environment variable happens to be set globally.
8.  **[Issue #6736](https://github.com/earendil-works/pi/issues/6736): xAI removed models still visible** - Despite release notes claiming removal in v0.80.9, Grok 3 and Grok 4.20 variants are still exposed in the xAI model catalog.
9.  **[Issue #6717](https://github.com/earendil-works/pi/issues/6717): Cursor provider breaks built-in advisor** — Routing through the `cursor-agent` API causes the built-in advisor to generate responses but fail to call the `advise` tool, breaking UI integrations.
10. **[Issue #6704](https://github.com/earendil-works/pi/issues/6704): TUI off-by-one render crash** - In a 188-column terminal, the TUI input box attempts to render 189 columns, triggering a crash via the render-width assertion.

### 4. Key PR Progress
1.  **[PR #6216](https://github.com/earendil-works/pi/pull/6216): Add Amazon Bedrock Mantle provider** — Open PR integrating Bedrock Mantle's OpenAI Responses API directly into Pi.
2.  **[PR #6739](https://github.com/earendil-works/pi/pull/6739): Add Telnyx Inference** — Adds Telnyx GPU infrastructure as a built-in OpenAI-compatible provider.
3.  **[PR #6651](https://github.com/earendil-works/pi/pull/6651): xAI device OAuth & Grok-4.5 routing** — Implements device-code OAuth for xAI and routes Grok-4.5 through the Responses API with reasoning parameters.
4.  **[PR #6594](https://github.com/earendil-works/pi/pull/6594): SQLite session storage** — Optimizes token walking by adding `retainedTail` to compaction entries and updating path traversal to stop at the last compaction node.
5.  **[PR #6730](https://github.com/earendil-works/pi/pull/6730): Preserve compaction queue behavior** — Ensures that messages queued during compaction properly preserve their steering/follow-up intent.
6.  **[PR #6731](https://github.com/earendil-works/pi/pull/6731): Skip highlighting read errors** - Fixes a UI annoyance where failed file read errors were incorrectly passed through the syntax highlighter.
7.  **[PR #6721](https://github.com/earendil-works/pi/pull/6721): Test model catalogs against PR merge refs** - Infrastructure improvement by `mitsuhiko` to validate generated catalogs using GitHub merge refs.
8.  **[PR #6692](https://github.com/earendil-works/pi/pull/6692): Absolute System32 path for taskkill** - Fixes a Windows crash where `taskkill` and `rundll32` fail with `ENOENT` if System32 isn't in the PATH.
9.  **[PR #6697](https://github.com/earendil-works/pi/pull/6697): Normalize tabs for terminal output** - Fixes terminal desync issues by translating raw TAB bytes into 3-column visible layouts.
10. **[PR #6734](https://github.com/earendil-works/pi/pull/6734): Trim xAI built-in model list** - Cleans up redundant xAI models and introduces a better OAuth sign-in flow with prefilled codes.

### 5. Feature Request Trends
*   **Advanced Tool Loading & Agent Context:** With the introduction of Kimi K3's dynamic tool loading, users are requesting more granular control, such as deferred canonical reloads for extensions ([Issue #6552](https://github.com/earendil-works/pi/issues/6552)).
*   **Provider & Model Expansion:** High demand for expanding internal catalogs and routing. Users are pushing for specific model tiers (e.g., GPT-5.6 Sol Fast in [Issue #6738](https://github.com/earendil-works/pi/issues/6738)) and better subscription tier handling (Anthropic OAuth in [Issue #5821](https://github.com/earendil-works/pi/issues/5821)).
*   **Core-level Prompt Optimization:** Requests for improving provider-side KV/prompt cache hit rates by changing how system prompts are constructed and compacted ([Issue #5253](https://github.com/earendil-works/pi/issues/5253)).

### 6. Developer Pain Points
*   **Authentication Collisions:** Developers are frustrated when trying to leverage subscription tiers (ChatGPT Plus/Pro, Claude). Silent overrides caused by global ENV variables (like `OPENAI_API_KEY`) lead to confusing 401 errors ([Issue #6689](https://github.com/earendil-works/pi/issues/6689)).
*   **Security Guardrails:** There is growing anxiety about arbitrary code execution. The bash tool lacks destructive command guards ([Issue #6716](https://github.com/earendil-works/pi/issues/6716)), `/tmp` files are created with open permissions ([Issue #6729](https://github.com/earendil-works/pi/issues/6729)), and project-local extensions auto-execute without approval ([Issue #6715](https://github.com/earendil-works/pi/issues/6715)).
*   **Cross-Platform Stability:** Windows environments are particularly brittle right now, with mislabeled dependent extension paths ([Issue #6619](https://github.com/earendil-works/pi/issues/6619)) and process termination failures due to missing PATH variables requiring absolute system paths to fix.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-07-17.

### 1. Today's Highlights
Qwen Code rolled out **v0.19.11**, bringing highly anticipated working-tree Git awareness to the Web Shell and improving subagent delegation logic. The community is heavily focused on two major themes: implementing robust multi-workspace session management within the `qwen serve` daemon and standardizing the CLI/TUI user interface (including path rendering and tool summaries). Additionally, significant traction is building around RFCs for auto-memory governance and multi-agent parallel processing.

### 2. Releases
*   **[v0.19.11](https://github.com/QwenLM/qwen-code/pull/6853)**: The latest stable release introduces a workspace path lock for the Web Shell and sets new default behaviors for subagent background processing. No breaking changes were reported.
*   **v0.19.10-nightly**: The preceding nightly build capped PR review scopes and laid the initial Web Shell workspace path groundwork.

### 3. Hot Issues
*   **[#6378](https://github.com/QwenLM/qwen-code/issues/6378) - RFC: Multiple workspaces in one daemon**: A high-discussion RFC proposing a shift from the `1 daemon = 1 workspace` paradigm to `1 daemon = N workspaces`, preserving backward compatibility.
*   **[#7056](https://github.com/QwenLM/qwen-code/issues/7056) - VS Code Companion Fails to Connect (v0.19.11)**: Users report the IDE companion extension fails to launch the Qwen ACP process, apparently due to unhandled Electron/Chromium flags (`acp`, `channel`).
*   **[#6996](https://github.com/QwenLM/qwen-code/issues/6996) - Custom OpenAI Provider Connection Errors**: Custom OpenAI-compatible endpoints are failing with generic "Connection error" messages, masking the actual underlying fetch failures.
*   **[#7040](https://github.com/QwenLM/qwen-code/issues/7040) - RFC: Reliable Auto Memory Roadmap**: A proposal to transition auto-memory from a direct-write background agent into a reviewable lifecycle with candidate extraction, validation, and provenance tracking.
*   **[#7002](https://github.com/QwenLM/qwen-code/issues/7002) - CentOS 7 / GLIBC Compatibility**: Users on older Linux distributions (like CentOS 7) are completely blocked from running the CLI due to missing `GLIBC_2.27` and `GLIBCXX_3.4.21` dependencies.
*   **[#7017](https://github.com/QwenLM/qwen-code/issues/7017) - Security: Channel Pairing Global Scope Bug**: A high-priority security issue where `PairingStore` persists state globally instead of scoping it securely to the active workspace.
*   **[#7016](https://github.com/QwenLM/qwen-code/issues/7016) - Agent Spawn Rate Limiting**: The application crashes and throws errors when users spawn too many agents simultaneously.
*   **[#6813](https://github.com/QwenLM/qwen-code/issues/6813) - Compact Tool Summaries**: Users want the TUI to show file names instead of generic counts (e.g., changing "Read 3 files" to "Read a.ts, b.ts, c.ts").
*   **[#6093](https://github.com/QwenLM/qwen-code/issues/6093) - Multi-Agent Orchestration**: A highly discussed request for parallel multi-agent processing, allowing a parent AI to delegate, review, and iterate with child agents that retain task memory.
*   **[#7023](https://github.com/QwenLM/qwen-code/issues/7023) - Model Switching Invalidates Daemon Session**: Switching active models in an embedded WebShell/daemon client causes the loaded persisted session to drop unexpectedly.

### 4. Key PR Progress
*   **[PR #7054](https://github.com/QwenLM/qwen-code/pull/7054) - Web Shell Git Awareness**: Adds live working-tree Git awareness to the browser UI, including dirty state chips, visual diffs, and sidebar status indicators.
*   **[PR #7048](https://github.com/QwenLM/qwen-code/pull/7048) - Subagent Delegation Defaults**: Refines subagent behavior to run one-shot tasks in the background by default, keeping nested and worktree-bound tasks in the foreground.
*   **[PR #7052](https://github.com/QwenLM/qwen-code/pull/7052) - Adaptive Tool-Call Cap**: Implements dynamic rate-limiting for tool calls per turn, adapting to context size and model capabilities.
*   **[PR #7053](https://github.com/QwenLM/qwen-code/pull/7053) - Shell Safety Refactor**: Introduces a three-state safety layer (`read-only`, `write`, `unknown`) for evaluating bash syntax and command execution safety.
*   **[PR #7045](https://github.com/QwenLM/qwen-code/pull/7045) - Multimodal Routing**: Automatically routes entire image-bearing turns through a designated vision-capable fallback model if the primary model is text-only.
*   **[PR #7033](https://github.com/QwenLM/qwen-code/pull/7033) - Review Roster Optimization**: Optimizes the `/review` tool to build participant rosters in a single call and ensures review reports are strictly backed by transcript evidence.
*   **[PR #6981](https://github.com/QwenLM/qwen-code/pull/6981) - Streaming Tool Call Fix**: Resolves a silent argument-loss bug in the `StreamingToolCallParser` when providers reuse streaming indices.
*   **[PR #6096](https://github.com/QwenLM/qwen-code/pull/6096) - zvec-grep Integration**: Adds an opt-in first-party tool providing both semantic search and regex/exact search capabilities directly to the workspace.
*   **[PR #7012](https://github.com/QwenLM/qwen-code/pull/7012) - Web Shell Tab Performance Fix**: Batches SSE stream transcript dispatches to prevent the TUI from freezing when restoring hidden browser tabs.
*   **[PR #6998](https://github.com/QwenLM/qwen-code/pull/6998) - CI Autofix Loop**: Hardens the autonomous CI fixer (`qwen-code-dev-bot`) to recover gracefully when generated-artifact CI gates fail.

### 5. Feature Request Trends
*   **Multi-Workspace & Session Architecture**: A massive cluster of requests (Issues #6378, #7015, #7014) focuses on evolving the daemon to manage multiple workspaces, including defining ownership semantics for forking, branching, and `cd` commands.
*   **Multi-Agent Orchestration**: High demand for parallelized AI workflows where parent agents can delegate to child agents that maintain contextual memory (Issues #6093, #7040).
*   **UI Path Standardization**: A strong push to clean up CLI/TUI rendering by unifying 9 different scattered path formatters into a single utility and displaying file names instead of generic counts in tool summaries (Issues #7004, #7007, #7008, #7009, #6813).

### 6. Developer Pain Points
*   **Integration Connectivity**: Custom OpenAI-compatible providers and IDE companion extensions are prone to generic, opaque connection errors, making local debugging exceptionally frustrating (Issues #6996, #7056).
*   **Legacy OS Support**: The bundled Node.js binary aggressively drops support for older Linux kernels (CentOS 7), locking out researchers and developers using stable HPC or enterprise environments (Issue #7002).
*   **Resource Exhaustion on Startup**: Users are experiencing hard crashes when initializing too many agents (Issue #7016) or hitting persistent state invalidations when simply toggling models during an active daemon session (Issue #7023).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the community digest for DeepSeek TUI (now transitioning to CodeWhale) for July 17, 2026.

### 1. Today's Highlights
CodeWhale (formerly DeepSeek TUI) has officially shipped **v0.9.0**, a major milestone that introduces the new "underwater" shell interaction system, message-first "Operate" capabilities, and hardened Fleet workflows. Alongside the release, the codebase is undergoing massive architectural refactoring to split monolithic Rust modules, paving the way for highly autonomous multi-agent orchestration (WhaleFlow). The ecosystem also saw major expansions in provider support, adding Kimi K3, TelecomJS, and TormentNexus extensions.

### 2. Releases
*   **[v0.9.0](https://github.com/Hmbown/CodeWhale/pull/4386)**: Marking the public release from Shannon Labs. This version replaces the default terminal shell with the underwater interaction system, transitions Operate to a message-first paradigm, and significantly hardens Fleet, routing, and workflow runtimes. *Note: The legacy `deepseek-tui` npm package is officially deprecated in favor of `codewhale`.*

### 3. Hot Issues
1.  **[#3793](https://github.com/Hmbown/CodeWhale/issues/3793) - Guided localized constitution creator:** Rethinking first-run UX. Instead of a blank prompt editor, the team is building a guided setup that strictly separates user language/autonomy preferences from runtime security controls.
2.  **[#3205](https://github.com/Hmbown/CodeWhale/issues/3205) - Fleet loadout auto-routing:** Designing a unified model/loadout selector across TUI, CLI, and subagents to automatically resolve compute loadouts dynamically based on task roles.
3.  **[#4010](https://github.com/Hmbown/CodeWhale/issues/4010) - WhaleFlow Conductor Agent:** Proposing an orchestrator agent designed to manage agent ensembles—fanning out scouts, managing dependencies, and synthesizing results autonomously.
4.  **[#1512](https://github.com/Hmbown/CodeWhale/issues/1512) - Mouse scroll wheel bug:** A highly discussed UI bug where scrolling fails to model output context, significantly hindering terminal UX. 
5.  **[#2625](https://github.com/Hmbown/CodeWhale/issues/2625) - HarmonyOS Porting:** Community member @shenjackyuanjie made progress porting the app to OpenHarmony Next, currently debugging transitive `nix` dependency ioctl mismatches.
6.  **[#4413](https://github.com/Hmbown/CodeWhale/issues/4413) - Crates.io packaging fix:** A release blocker for v0.9.0 where `cargo publish` failed due to embedded repository-root changelog paths in UI modules.
7.  **[#4415](https://github.com/Hmbown/CodeWhale/issues/4415) - Hard tool budgets:** Enforcing strict per-turn tool call limits (e.g., max 8 calls) to prevent models like GLM-5.2 from over-reading files and ignoring prompt constraints.
8.  **[#3306](https://github.com/Hmbown/CodeWhale/issues/3306) - Rust Monolith Refactor:** Addressing technical debt by planning the breakdown of massive Rust files (routing, renderers, state machines) into owned, focused modules to reduce scaling risk.
9.  **[#4387](https://github.com/Hmbown/CodeWhale/issues/4387) - First-class Kimi K3 support:** Adding native integration for Moonshot AI's Kimi K3 model via the existing Kimi provider catalog.
10. **[#1425](https://github.com/Hmbown/CodeWhale/issues/1425) - Sub-agent timeouts:** Analyzing engine crashes/freezes caused by `agent_wait` timeouts when processing massive texts (e.g., 3-million-word novels) chunked across 10 sub-agents.

### 4. Key PR Progress
1.  **[#4386](https://github.com/Hmbown/CodeWhale/pull/4386) - Release: v0.9.0:** Finalizes and ships the underwater shell, Operate, and Fleet updates.
2.  **[#4378](https://github.com/Hmbown/CodeWhale/pull/4378) - Fix Kimi context budget:** Corrects `max_output` math for Moonshot Kimi, fixing an issue where the input context budget was collapsing to ~1024 tokens.
3.  **[#4367](https://github.com/Hmbown/CodeWhale/pull/4367) - Bound `@`-completion walk:** Adds a wall-clock budget to file-index walks, preventing the TUI from freezing when `@`-mentioning massive non-workspace directories.
4.  **[#4199](https://github.com/Hmbown/CodeWhale/pull/4199) - Agent-callable verify tool:** Introduces a `verify` tool allowing agents to run adversarial self-reviews using elevated reasoning before claiming a task is complete.
5.  **[#4419](https://github.com/Hmbown/CodeWhale/pull/4419) - xAI device login fix:** Restores xAI OAuth device login by discovering endpoints via OIDC metadata and fixing user-principal scope requests.
6.  **[#4087](https://github.com/Hmbown/CodeWhale/pull/4087) - Hooks module split:** Refactors `hooks.rs` to separate configuration definitions from executor runtime behaviors, simplifying policy updates.
7.  **[#4383](https://github.com/Hmbown/CodeWhale/pull/4383) - Windows shell kill fix:** Prevents terminal deadlocks by avoiding synchronous reader thread joins when background shells are killed on Windows.
8.  **[#4384](https://github.com/Hmbown/CodeWhale/pull/4384) - HarmonyOS workflow build:** Updates `workflow-js` Cargo.toml to generate `rquickjs` bindings locally, as pre-generated bindings aren't shipped for HarmonyOS.
9.  **[#4381](https://github.com/Hmbown/CodeWhale/pull/4381) - Hourly schedule anchoring:** Fixes automation drift by allowing hourly tasks to anchor against `BYHOUR`/`BYMINUTE`, preventing phase shifts across resumes or day changes.
10. **[#4086](https://github.com/Hmbown/CodeWhale/pull/4086) - TormentNexus Extension:** Adds a native Rust extension for persistent L2 memory, MCP tool discovery, and RBAC, achieving parity with the Pi Coding Agent extension.

### 5. Feature Request Trends
*   **Autonomous Agent Orchestration (WhaleFlow):** Strong demand for moving beyond single-agent execution. The community wants "Conductor" agents capable of orchestrating ensembles, fanning out parallel workers, and synthesizing heterogeneous model outputs automatically.
*   **Guided UX & Onboarding:** Users find raw config editing daunting. There is a massive push for localized, step-by-step guided setups—especially for defining AI autonomy limits and security postures without touching code.
*   **Eclectic Model Support:** Developers are utilizing a highly diverse LLM stack. Rapid requests are coming in to natively support everything from Kimi K3 and TelecomJS to Xiaomi MiMo, GLM, and xAI.
*   **Strict Tooling Constraints:** Users want harder guardrails around agent execution, specifically requesting strict per-turn tool call budgets and write-first constraints to prevent context exhaustion and unnecessary file reading.

### 6. Developer Pain Points
*   **TUI Rendering & Scrolling Bugs:** The most visibly frustrating issues involve the terminal UI itself. Users consistently report that mouse scrolling fails to render model outputs correctly, text gets truncated on Windows, and large outputs cause the terminal to hang.
*   **macOS & Windows UX Friction:** Mac users (especially on iTerm2) report persistent issues with multi-line copy/pasting triggering premature sends, lack of macOS-specific keybindings, and ungraceful task cancellations (`Ctrl+C` closing the whole app instead of just the query).
*   **Monolithic Codebase Scaling:** Internal developers and contributors are feeling the pain of large Rust files (like `engine.rs` and `hooks.rs`). Monolithic structures have made policy tweaks and bug fixes increasingly risky, prompting a massive refactoring effort.
*   **Context Window Mismanagement:** Developers are frustrated when models silently exhaust context limits or aggressively spawn sub-agents without hitting proper budgets, resulting in frozen sessions during heavy text-processing tasks.

</details>