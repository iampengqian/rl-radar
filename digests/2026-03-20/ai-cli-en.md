# AI CLI Tools Community Digest 2026-03-20

> Generated: 2026-03-19 22:02 UTC | Tools covered: 7

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem Cross-Analysis Report
**Date:** 2026-03-20

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation, shifting from basic code completion wrappers to fully autonomous agent frameworks. Today's digests reveal a collective industry focus on **extensibility through plugin systems** and **enterprise-grade governance**, as evidenced by concurrent plugin infrastructure rollouts across OpenAI Codex, Kimi CLI, Qwen Code, and Gemini CLI. Simultaneously, providers are grappling with the growing pains of agent reliability, specifically regarding context window management, tool execution fidelity, and authentication complexity in multi-tenant environments.

---

## 2. Activity Comparison

| Tool | Repository | Issues Highlighted | Active PRs Noted | Release Status | Sentiment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | `anthropics/claude-code` | 10 (1 critical auth fire) | 10 | **v2.1.79** (Stable) | 🔴 Negative (Phone verification crisis) |
| **OpenAI Codex** | `openai/codex` | 10 | 10 | **rust-v0.116.0** (Stable) | 🟠 Mixed (UX praised, token costs criticized) |
| **Gemini CLI** | `google-gemini/gemini-cli` | 10 | 10 | **v0.35.0-preview.2** | 🟢 Positive (Architectural improvements) |
| **GitHub Copilot CLI** | `github/copilot-cli` | 10 | 0 | **v1.0.9** (Stable) | 🟠 Mixed (Stability fixes vs. regressions) |
| **Kimi Code CLI** | `MoonshotAI/kimi-cli` | 10 | 10+ | None (Dev branch active) | 🟢 Positive (Rapid feature addition) |
| **OpenCode** | `anomalyco/opencode` | 10 | 10 | Staging **v2.0** | 🔴 Negative (Provider legal issues) |
| **Qwen Code** | `QwenLM/qwen-code` | 10 | 10 | **v0.13.0-preview.0** | 🟠 Mixed (New features vs. critical bugs) |

---

## 3. Shared Feature Directions

The digests reveal strong convergence on three key architectural pillars:

### A. Plugin & Skill Extensibility
*   **Requirement:** Users are moving beyond bundled capabilities and demanding standardized ways to inject custom tools, prompts, and agents.
*   **Tools:** **Kimi CLI** (Skill System), **Qwen Code** (Extensible Skills), **OpenAI Codex** (TUI Plugin Menu), **Claude Code** (Hooks/Plugins).

### B. Enterprise Governance & Security
*   **Requirement:** Admin-forced configurations, fine-grained permission controls (beyond simple allow/deny), and security policies for autonomous actions.
*   **Tools:** **Gemini CLI** (Admin-forced MCP servers), **Qwen Code** (Rule-based permission system), **Claude Code** (Security-guidance hooks), **OpenCode** (Privacy defaults debate).

### C. Context & Memory Management
*   **Requirement:** "Smarter" context handling to prevent context window saturation, including AST-aware reads, memory routing (Global vs. Project), and better compaction.
*   **Tools:** **Gemini CLI** (Memory Subsystem, AST investigation), **OpenAI Codex** (Remote compact tasks), **Claude Code** (API limits).

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Workflow Integration** | Professional Developers & Enterprises | Leverages Claude 3/4 models for high-fidelity reasoning; focuses on IDE/CLI symbiosis (VS Code, Web). Heavy emphasis on "Hooks" for customization. |
| **OpenAI Codex** | **Onboarding & UX** | Wide range (Pro to Business) | Rust-based core for performance; aggressive refactoring for stability. Focuses on lowering friction (device-code login, plugin prompts). |
| **Gemini CLI** | **Agent Architecture** | Enterprise & Advanced Users | Modular "AgentSession" architecture; strong focus on evals, policy engines, and reducing "agent noise" (error classification, truncation). |
| **GitHub Copilot CLI** | **Terminal Native** | GitHub Ecosystem Users | Tight integration with GitHub.com context; focuses on terminal stability (SSH, WSL) and standard terminal emulation compliance. |
| **Kimi CLI** | **Feature Velocity** | Early Adopters & Power Users | Rapid iteration (20 PRs/day); aggressive feature additions (Plugins, Timeouts, Skip logic) to close gap with incumbents. |
| **OpenCode** | **Provider Agnosticism** | Multi-model Power Users | Open-source aggregator aiming to support all providers (Anthropic, xAI, Grok). Currently facing existential legal/provider friction. |
| **Qwen Code** | **Customization** | International & Enterprise | Focuses on deep customization (System prompts, Skill extensions) and IDE companions; battling agent reliability issues. |

---

## 5. Community Momentum & Maturity

*   **Most Active Iteration:** **Kimi CLI** shows the highest development velocity relative to its size (20 PRs in one day), signaling a aggressive push to reach feature parity.
*   **Mature but Troubled:** **Claude Code** has a massive, highly engaged community, but is currently suffering a crisis of confidence due to the phone verification issue (520+ comments), overshadowing its technical maturity.
*   **Architectural Refactoring:** **Gemini CLI** and **OpenCode** are in deep refactoring phases (AgentSession, OpenCode 2.0), prioritizing future scalability over immediate feature drops.
*   **Stability Focus:** **OpenAI Codex** and **GitHub Copilot CLI** are in a "stabilization" phase, fixing regressions and refining existing features rather than introducing radical new architectures.

---

## 6. Trend Signals

### 📈 Rising Trends
1.  **The "Skill" Standard:** There is a clear move toward markdown-based or declarative skill definitions (Kimi, Qwen) that allow users to version control agent behaviors.
2.  **Security Granularity:** The binary "Allow/Deny" permission model is dying. Users demand "Suspend/Skip/Review" options (Kimi #729, Qwen #2283, OpenAI #14399) to handle autonomous workflows safely.
3.  **Headless & CI/CD Readiness:** Multiple tools (Gemini, OpenCode, Copilot) are fixing non-interactive modes and output formatting, indicating a push toward integrating AI agents into automated pipelines.

### 📉 Key Frictions
1.  **Authentication Fragility:** As tools shift to OAuth/Subscription models, authentication is breaking across the board (OpenCode legal removal, Claude phone verification, Codex token handling), creating a major adoption barrier.
2.  **Clipboard & Terminal Wars:** Basic terminal functionality (Copy/Paste, Scrollback, IME support) remains a persistent cross-platform Achilles' heel (Copilot #2159, OpenCode #13984, Qwen #2491).
3.  **Token Opacity:** Users are increasingly sensitive to "Token Burning" (Codex #14593) and silent context saturation, demanding better visibility into cost and context usage.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Report
**Data Source:** `anthropics/skills` (as of 2026-03-20)

---

## 1. Top Skills Ranking

Based on community engagement and recent activity, here are the most notable Skills currently in development:

| Rank | Skill Name | Description | Status | Link |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **document-typography** | Quality control for generated documents. Prevents orphan word wraps, widow paragraphs, and numbering misalignment—addressing universal issues in AI-generated text. | **OPEN** | [#514](https://github.com/anthropics/skills/pull/514) |
| **2** | **frontend-design** (Revamp) | Significant revision to improve clarity and actionability of frontend design instructions, ensuring guidance is specific enough to steer behavior. | **OPEN** | [#210](https://github.com/anthropics/skills/pull/210) |
| **3** | **skill-quality-analyzer** | A meta-skill that evaluates other Skills across 5 dimensions: structure, documentation, examples, resources, and compatibility. | **OPEN** | [#83](https://github.com/anthropics/skills/pull/83) |
| **4** | **CONTRIBUTING.md** | Critical infrastructure addition addressing community health gaps; the repo currently scores only 25% on GitHub's health metrics. | **OPEN** | [#509](https://github.com/anthropics/skills/pull/509) |
| **5** | **shodh-memory** | Persistent context system for AI agents that maintains relevant memories across conversations via a `proactive_context` mechanism. | **OPEN** | [#154](https://github.com/anthropics/skills/pull/154) |
| **6** | **session-memory** | Zero-dependency skill to preserve critical technical facts (tool outputs, test results) across context compaction and session restarts. | **OPEN** | [#629](https://github.com/anthropics/skills/pull/629) |
| **7** | **codebase-inventory-audit** | Systematic 10-step workflow for identifying orphaned code, unused files, and documentation gaps, producing a `CODEBASE-STATUS.md` report. | **OPEN** | [#147](https://github.com/anthropics/skills/pull/147) |
| **8** | **masonry-generate-image-and-videos** | CLI integration for AI-powered image (Imagen 3.0) and video (Veo 3.1) generation with job management capabilities. | **OPEN** | [#335](https://github.com/anthropics/skills/pull/335) |

---

## 2. Community Demand Trends

Analysis of open Issues reveals strong demand in the following areas:

| Trend | Description | Key Issue |
| :--- | :--- | :--- |
| **🔒 Security & Trust** | Users are concerned about community skills appearing under the `anthropic/` namespace, creating potential trust boundary vulnerabilities. Clear provenance/signing is requested. | [#492](https://github.com/anthropics/skills/issues/492) |
| **🛠️ Tooling Improvements** | `skill-creator` needs modernization; it currently reads like developer documentation rather than an actionable skill, with verbose content wasting tokens. | [#202](https://github.com/anthropics/skills/issues/202) |
| **🔌 MCP Integration** | Community wants Skills exposed as MCPs (Model Context Protocol) to standardize APIs for software interaction (e.g., `generateAlgorithmArt({ prompt })`). | [#16](https://github.com/anthropics/skills/issues/16) |
| **🧠 Agent Governance** | Request for safety patterns in AI agent systems—policy enforcement, threat detection, trust scoring, and audit trails for enterprise use cases. | [#412](https://github.com/anthropics/skills/issues/412) |
| **☁️ Platform Support** | Users on AWS Bedrock and Enterprise SSO report authentication and compatibility issues when trying to use Skills. | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532) |

---

## 3. High-Potential Pending Skills

These open PRs show strong community interest and may merge soon:

| Skill | Value Proposition | PR Link |
| :--- | :--- | :--- |
| **SAP-RPT-1-OSS Predictor** | Enterprise analytics skill leveraging SAP's open-source tabular foundation model for predictive analytics on business data. | [#181](https://github.com/anthropics/skills/pull/181) |
| **ODT Document Handler** | Creates, fills templates, and parses OpenDocument text files (.odt) to ISO/IEC 26300 standard—useful for LibreOffice/Google Docs workflows. | [#486](https://github.com/anthropics/skills/pull/486) |
| **x402 BSV Micropayments** | Natural language interface for BSV micropayments to discover, authenticate, and pay AI services (`/x402 transcribe meeting.wav`). | [#374](https://github.com/anthropics/skills/pull/374) |
| **Buildr Telegram Bridge** | Mirrors Claude Code sessions to Telegram for mobile control—start/stop tasks, manage permissions from your phone. | [#419](https://github.com/anthropics/skills/pull/419) |
| **Windows Screenshot Paste** | Enables `Ctrl+V` image pasting in Claude Code on Windows via AutoHotkey v2 script. | [#646](https://github.com/anthropics/skills/pull/646) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent memory/context systems and robust document output quality control—reflecting core limitations in current AI coding assistants.**

---

# Claude Code Community Digest — 2026-03-20

---

## Today's Highlights

Version **v2.1.79** ships with quality-of-life improvements including Console (API billing) authentication via `--console` flag and a turn duration toggle in `/config`. A critical subprocess hang affecting Python integrations was fixed. The community remains highly active around phone verification requirements (520+ comments), while new plugin contributions address terminal scrolling regressions and hook system enhancements.

---

## Releases

### v2.1.79
- **`--console` flag for `claude auth login`** — Enables Anthropic Console (API billing) authentication directly from CLI
- **Turn duration toggle** — New "Show turn duration" option in `/config` menu for performance monitoring
- **Subprocess hang fix** — Resolved `claude -p` hanging when spawned without explicit stdin (e.g., Python `subprocess.run`)
- **Ctrl+ handling** — Partial changelog indicates additional Ctrl+ keybinding fixes

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#34229](https://github.com/anthropics/claude-code/issues/34229)** — Phone verification | 520+ comments, 584 👍. The single most-discussed issue—users report phone verification blocking access with no clear path to resolution. Labeled `[invalid]` but community frustration is palpable. |
| 2 | **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — Multiple Connector accounts | 53 comments, 69 👍. Enterprise users need to switch between accounts for the same connector (e.g., multiple GitHub orgs) in claude.ai/code web interface. |
| 3 | **[#10018](https://github.com/anthropics/claude-code/issues/10018)** — Non-default branch sessions | 53 comments, 74 👍. Claude Code Web currently only starts from the default branch; users want to launch sessions from feature branches directly. |
| 4 | **[#30864](https://github.com/anthropics/claude-code/issues/30864)** — ARM processor support | 48 comments, 48 👍. Cowork feature lacks ARM support, blocking Apple Silicon and ARM server users from collaborative sessions. |
| 5 | **[#28951](https://github.com/anthropics/claude-code/issues/28951)** — VS Code Remote Control | 46 comments, 38 👍. `/rc` command not supported in the VS Code extension, limiting remote workflows for IDE users. |
| 6 | **[#11864](https://github.com/anthropics/claude-code/issues/11864)** — Immediate exit bug | 42 comments, 23 👍. Claude starts then exits within 3 seconds; ongoing investigation with oncall involvement. |
| 7 | **[#23134](https://github.com/anthropics/claude-code/issues/23134)** — Paste text collapse | 23 comments, 53 👍. Multi-line paste shows collapsed `[Pasted text #N +X lines]` with no way to review before submitting—risky for code review. |
| 8 | **[#26018](https://github.com/anthropics/claude-code/issues/26018)** — 20MB API limit | 10 comments, 9 👍. Read tool doesn't pre-check payload size when reading multiple PDFs, causing preventable 20MB API limit errors. |
| 9 | **[#36287](https://github.com/anthropics/claude-code/issues/36287)** — credential_process regression | 2 comments. **v2.1.79 regression** — AWS Bedrock credential_process fails on second API call in session. Critical for enterprise auth flows. |
| 10 | **[#27805](https://github.com/anthropics/claude-code/issues/27805)** — Model hallucinates user message | 8 comments, 4 👍. Claude Opus 4.6 generated a fake user message and responded to itself—a concerning fidelity issue. |

---

## Key PR Progress

| # | PR | Description |
|---|----|----|
| 1 | **[#36279](https://github.com/anthropics/claude-code/pull/36279)** — Agent context in hooks | Adds 4 new agent-context fields to hook input JSON, enabling hooks to distinguish main agent from subagents for security policies. |
| 2 | **[#35683](https://github.com/anthropics/claude-code/pull/35683)** — scroll-fix plugin | Community plugin fixing terminal scroll-to-top regression across all platforms/terminals with Ctrl+6 toggle. |
| 3 | **[#36333](https://github.com/anthropics/claude-code/pull/36333)** — Hookify Python imports | Fixes broken `from hookify.core.config_loader import ...` causing `No module named 'hookify'` errors in all 4 hook scripts. |
| 4 | **[#36300](https://github.com/anthropics/claude-code/pull/36300)** — ralph-wiggum stop hook | Fixes JSON schema mismatch: stop hook used `"decision"` field but schema requires `"ok"` boolean. |
| 5 | **[#36260](https://github.com/anthropics/claude-code/pull/36260)** — IPv6 firewall rules | Adds ip6tables rules to devcontainer mirroring IPv4 policy—closes IPv6 security gap. |
| 6 | **[#35960](https://github.com/anthropics/claude-code/pull/35960)** — model-router plugin | Uses claude-haiku-4-5 to classify prompts and surfaces model recommendations (e.g., Opus 4.6) via UserPromptSubmit hook. |
| 7 | **[#36253](https://github.com/anthropics/claude-code/pull/36253)** — Hook examples | Adds examples for file guard, session primer, and notification hooks—valuable for plugin developers. |
| 8 | **[#31529](https://github.com/anthropics/claude-code/pull/31529)** — /remote-control-diagnose | New slash command to debug "Remote Control not available for your account" errors affecting multiple issues. |
| 9 | **[#23971](https://github.com/anthropics/claude-code/pull/23971)** — Manifest docs fix | Corrects `agents` field type from string to array in plugin manifest reference—string values cause silent install failures. |
| 10 | **[#36252](https://github.com/anthropics/claude-code/pull/36252)** — security-guidance README | Documents all 9 security patterns detected by the security-guidance plugin. |

---

## Feature Request Trends

1. **Multi-account/multi-tenant support** — Consistent demand for switching between accounts within same connector type (GitHub orgs, cloud providers)
2. **Git branch awareness** — Ability to launch Claude Code Web from non-default branches
3. **ARM architecture support** — Cowork feature parity for Apple Silicon and ARM servers
4. **Enhanced CLI history navigation** — Scrollback access to full conversation history in TUI mode (#28077)
5. **Config portability** — Environment variable (`CLAUDE_CONFIG_DIR`) for relocating `~/.claude/` directory (#25762)
6. **Paste preview control** — Option to disable collapsed paste view for verification before submission

---

## Developer Pain Points

1. **Authentication friction** — Phone verification (#34229) remains the top complaint with 584 👍; Console auth added in v2.1.79 helps but doesn't address core verification concerns
2. **IDE integration gaps** — VS Code lacks `/rc` support (#28951); workspace handling defaults to first project (#12808); SSH remote issues on Desktop (#36378)
3. **Hook reliability** — Multiple issues with hooks bypassing execution (EnterWorktree #35557), schema mismatches (ralph-wiggum #36300), and import failures (#36333)
4. **Memory/context fidelity** — Reports of model ignoring MEMORY.md instructions (#36372, #36376) and hallucinating code behavior instead of reading source
5. **Platform-specific stability** — RHEL8 immediate exits (#12084), Windows CoworkVMService failures (#29941), Ghostty keybinding issues (#16830)
6. **API limit edge cases** — No pre-flight size checks before hitting 20MB limit when reading multiple files (#26018)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-20

## 1. Today's Highlights
OpenAI has shipped **Codex rust-v0.116.0**, introducing smoother onboarding with device-code ChatGPT sign-in for the TUI and improved plugin management capabilities. The community is currently divided between applauding these UX improvements and voicing significant frustration over **token consumption rates**, with one issue regarding fast token burning accumulating over 130 comments. Additionally, the engineering team is aggressively refactoring core components, with multiple PRs focusing on sandbox security, authentication flows, and plugin infrastructure.

## 2. Releases
### **rust-v0.116.0**
The latest stable release focuses on onboarding and plugin ecosystem integration:
*   **TUI Authentication:** The App-server TUI now supports device-code ChatGPT sign-in, allowing users to authenticate without a browser on the same machine, and handles token refreshing automatically.
*   **Plugin Setup:** Enhanced plugin experience where Codex can prompt for missing plugin installations, honor suggestion allowlists, and sync install/uninstall states across sessions.

## 3. Hot Issues
1.  **[Token Consumption Spike](https://github.com/openai/codex/issues/14593)** (137 comments, 63 upvotes)
    Users report that the recent VS Code extension update (26.311.21342) is burning through tokens at an accelerated rate. This remains the most active issue, with Business subscribers specifically noting unexpected usage depletion.
2.  **[App UI Lag During Long Sessions](https://github.com/openai/codex/issues/11984)** (21 comments, 11 upvotes)
    A persistent performance issue where the Electron-based desktop app becomes laggy and unresponsive during extended usage, affecting Pro users on macOS.
3.  **[Context Window Errors](https://github.com/openai/codex/issues/9046)** (17 comments)
    Users are hitting context window limits unexpectedly early in conversations, receiving "Codex ran out of room" errors even after clearing history.
4.  **[CLI Approval Prompt Regression](https://github.com/openai/codex/issues/14936)** (16 comments, 10 upvotes)
    CLI v0.115.0 introduced a regression where the "Don't ask again" option for command approvals is ignored, forcing users to re-approve repetitive commands constantly.
5.  **[Paid Usage Dropping Quickly](https://github.com/openai/codex/issues/14762)** (15 comments, 20 upvotes)
    Distinct from the token burning issue, this report highlights discrepancies in credit consumption, where small tasks consume disproportionately large amounts of paid credits.
6.  **[Model Confusion in gpt-5.4](https://github.com/openai/codex/issues/13864)** (12 comments)
    A model behavior bug where `gpt-5.4` generates responses intended for earlier messages in the thread history rather than the latest user prompt.
7.  **[Markdown Table Formatting](https://github.com/openai/codex/issues/8259)** (10 comments, 32 upvotes)
    A highly upvoted enhancement request asking for readable markdown tables in the TUI, as current whitespace rendering renders them unreadable.
8.  **[Standalone Windows Installer](https://github.com/openai/codex/issues/13993)** (10 comments, 36 upvotes)
    Users are requesting a `codex-setup.exe` outside the Microsoft Store to bypass corporate restrictions and system policies that block Store apps.
9.  **[Remote Compact Task Timeout](https://github.com/openai/codex/issues/9211)** (15 comments)
    Linux/CLI users are facing timeouts when running remote compact tasks, stalling workflows on server VMs.
10. **[Permission Fatigue](https://github.com/openai/codex/issues/14399)** (4 comments)
    Users feel caught between "Default" (too restrictive) and "Full Access" (too permissive), requesting fine-grained permission controls for better security granularity.

## 4. Key PR Progress
1.  **[feat: Initial plugins TUI menu](https://github.com/openai/codex/pull/15215)**
    Introduces a `/plugins` menu in the TUI, allowing users to view, install, and manage plugins directly from the terminal interface.
2.  **[feat: expose needs_auth for plugin/read](https://github.com/openai/codex/pull/15217)** (Closed/Merged)
    Exposes authentication requirements for plugins, enabling the UI to render appropriate login prompts or states.
3.  **[fix: Protect first-time project .codex creation](https://github.com/openai/codex/pull/15067)**
    Security patch ensuring that the creation of the `.codex` configuration directory requires explicit approval, preventing unauthorized modifications across sandboxes.
4.  **[feat: Render OSC-8 markdown links in TUI](https://github.com/openai/codex/pull/15200)**
    Improves TUI usability by making markdown links clickable terminal hyperlinks (OSC-8 standard), resolving accessibility issues.
5.  **[refactor: Move auth code into login crate](https://github.com/openai/codex/pull/15150)**
    A structural refactor moving authentication logic into a dedicated `codex-login` crate to streamline dependency management and modularity.
6.  **[feat: Add in-process app-server parent request headers](https://github.com/openai/codex/pull/15097)**
    Improves telemetry and debugging by forwarding parent request headers to child processes and MCP HTTP requests.
7.  **[feat: Add experimental network delegation transport](https://github.com/openai/codex/pull/15121)**
    Lays the groundwork for delegated model execution through the app-server, potentially enabling remote/offloaded processing.
8.  **[fix(apply-patch): CRLF Support](https://github.com/openai/codex/pull/15035)**
    Fixes parsing issues with `apply_patch` on Windows by properly handling Carriage Return Line Feed (CRLF) line endings.
9.  **[tui: add ephemeral /btw side-question threads](https://github.com/openai/codex/pull/14506)**
    Experimental feature allowing users to fork the current conversation into a temporary side-thread (`/btw`) for quick questions without cluttering the main history.
10. **[fix: keyring split-entry storage](https://github.com/openai/codex/pull/13191)**
    Addresses Windows Credential Manager failures by splitting large OAuth tokens into multiple entries, fixing login crashes for users with complex auth payloads.

## 5. Feature Request Trends
*   **Windows OS Parity:** There is a strong demand for a standalone Windows installer and better OS integration, moving away from the forced Microsoft Store distribution model.
*   **Granular Permissions:** Users want a middle ground for sandbox security—a system that allows defining trusted projects or specific command allowlists to reduce permission fatigue without disabling security entirely.
*   **Session Management:** Requests for better history handling, including the ability to "fork" threads before starting (PR support pending) and better compacting tools to manage context windows.
*   **UI/UX Refinements:** Formatting improvements (Markdown tables) and better voice dictation hotkey mapping (Windows `Ctrl+M` conflicts) are high on the list.

## 6. Developer Pain Points
*   **Token Economy Transparency:** The overwhelming sentiment is that usage metrics are opaque. Developers report "burning" through credits/tokens faster than expected following recent updates, with no clear diagnostics to trace the consumption.
*   **Sandbox "Nagging":** The CLI sandbox environment is currently seen as brittle and annoying, with frequent prompts for approvals even when "Don't ask again" is selected, significantly interrupting flow state.
*   **Windows Stability:** The Windows desktop client appears to be suffering from quality issues, including process cleanup failures (zombie processes on exit), WSL mode crashes, and patch application errors in nested directories.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-20

## 1. Today's Highlights
The Gemini CLI ecosystem is doubling down on **Agent Reliability** and **Enterprise Governance**. Key developments include a significant architectural refactor introducing `AgentSession` for better state management and the implementation of admin-forced MCP server installations. Additionally, the team is aggressively tackling "noise" in the agent loop by improving error classification, truncating verbose tool results, and refining the new Memory Subsystem to prevent context window overflow.

## 2. Releases
*   **v0.35.0-preview.2**
    *   **Summary:** A patch release addressing specific issues in the `v0.35.0-preview.1` line.
    *   [View Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-preview.2)
*   **v0.36.0-nightly.20260318.e2658ccda**
    *   **Summary:** Includes fixes for CI evaluation false positives and a critical patch for passing the message bus to the policy engine during MCP tool saves.
    *   [View Release](https://github.com/google-gemini/gemin)

## 3. Hot Issues
1.  **[EPIC] AST-Aware File Reads & Mapping** [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
    *   **Why it matters:** This investigation tracks moving from text-based file reads to Abstract Syntax Tree (AST) aware tools. This would allow the agent to read specific method bounds in a single call, drastically reducing token noise and "misaligned reads."
2.  **Support passing prompt to `/plan`** [#22855](https://github.com/google-gemini/gemini-cli/issues/22855)
    *   **Why it matters:** Currently, `/plan` opens a separate UI box. This feature request aims to let users kick off complex planning in a single command action, streamlining the workflow.
3.  **Fix the loop problem** [#22933](https://github.com/google-gemini/gemini-cli/issues/22933)
    *   **Why it matters:** Users are reporting the agent getting stuck in loops (e.g., repeatedly trying to write to a locked path). This highlights ongoing stability challenges in agent routing logic.
4.  **Implement memory routing: Global vs. Project** [#22819](https://github.com/google-gemini/gemini-cli/issues/22819)
    *   **Why it matters:** As the new Memory Subsystem rolls out, defining where memories live (`~/.gemini/` for user preferences vs. `.gemini/` for project specifics) is critical for context hygiene.
5.  **Agent struggle locating task tracker storage** [#22995](https://github.com/google-gemini/gemini-cli/issues/22995)
    *   **Why it matters:** The agent is having difficulty discovering where it stores its own task data, a meta-cognitive failure that hampers long-running autonomous tasks.
6.  **ACP: Upgrade SDK from 0.12 to 0.16.1** [#23128](https://github.com/google-gemini/gemini-cli/issues/23128) (Closed)
    *   **Why it matters:** A necessary dependency upgrade to support the latest Agent Communication Protocol features.
7.  **Tray with tracker list is not visible** [#23133](https://github.com/google-gemini/gemini-cli/issues/23133)
    *   **Why it matters:** UI bug affecting the visibility of the new task tracker, blocking users from visualizing agent progress.
8.  **Gemini CLI is fond of using unsafe object cloning** [#22863](https://github.com/google-gemini/gemini-cli/issues/22863)
    *   **Why it matters:** A code quality observation where the agent generates partial object implementations, potentially introducing type safety bugs into the codebase.
9.  **SDD: Refine `/spec setup` for existing directories** [#22822](https://github.com/google-gemini/gemini-cli/issues/22822)
    *   **Why it matters:** Ensures that the Spec-Driven Development workflow doesn't conflict with existing project structures (like `.conductor` directories).
10. **Remove hardcoded non-interactive `ask_user` deny** [#22857](https://github.com/google-gemini/gemini-cli/issues/22857)
    *   **Why it matters:** Improves headless/CI execution by moving hardcoded denials into the configurable default policy, giving users more control over non-interactive flows.

## 4. Key PR Progress
1.  **feat(core): Introduce AgentSession** [#23159](https://github.com/google-gemini/gemini-cli/pull/23159)
    *   **Details:** Major refactor introducing `AgentSession` and moving to a subscription-based event model (`agent_start`, `agent_end`). This modernizes the core protocol.
2.  **feat(core): Admin-forced MCP server installations** [#23163](https://github.com/google-gemini/gemini-cli/pull/23163)
    *   **Details:** Allows enterprise admins to inject required MCP servers that cannot be disabled by the user, critical for corporate governance.
3.  **feat(browser): Sensitive action controls** [#22867](https://github.com/google-gemini/gemini-cli/pull/22867)
    *   **Details:** Implements hard blocks and policy confirmations for browser agent actions, even in "YOLO" (auto-approve) mode, to prevent unsafe web interactions.
4.  **feat(tools): Add max_results param to glob** [#23155](https://github.com/google-gemini/gemini-cli/pull/23155)
    *   **Details:** Prevents context window blow-up in large monorepos by capping glob results (default 500) and improving truncation warnings.
5.  **feat(tools): Structured error classification** [#23157](https://github.com/google-gemini/gemini-cli/pull/23157)
    *   **Details:** Adds `error_type`, `recoverable`, and `hint` metadata to tool errors, helping the model distinguish between fatal crashes and retryable failures.
6.  **fix(core): Unregister subagents as tools when disabled** [#23161](https://github.com/google-gemini/gemini-cli/pull/23161)
    *   **Details:** Fixes a bug where disabled subagents persisted in the tool registry until session restart.
7.  **feat(evals): Add PR impact analysis workflow** [#23023](https://github.com/google-gemini/gemini-cli/pull/23023)
    *   **Details:** Introduces automated evaluation workflows to analyze the impact of PRs before merging.
8.  **feat(cli): Migrate nonInteractiveCli to LegacyAgentSession** [#22987](https://github.com/google-gemini/gemini-cli/pull/22987)
    *   **Details:** Part of the ongoing effort to unify session management architectures.
9.  **feat(core): Support hybrid evals** [#23121](https://github.com/google-gemini/gemini-cli/pull/23121)
    *   **Details:** Infrastructure update to support hybrid evaluation environments.
10. **fix(ui): Make tool confirmations take full terminal height** [#22366](https://github.com/google-gemini/gemini-cli/pull/22366)
    *   **Details:** UX improvement that scales tool confirmation dialogs to use the full terminal height, improving readability for large diffs.

## 5. Feature Request Trends
*   **Context Optimization:** Strong demand for "AST-aware" tools and `max_results` limits to reduce token usage and noise.
*   **Workflow Streamlining:** Requests for single-command flows (e.g., `/plan [text]`) rather than multi-step UI interactions.
*   **Granular Control:** Users want control over UI clutter (hiding `/skills`) and memory routing (separating global vs. project context).
*   **Enterprise Readiness:** Continued focus on admin controls, forced configurations, and write-protected governance files.

## 6. Developer Pain Points
*   **Agent Looping:** Developers are frustrated by the agent getting stuck in repetitive logic loops, particularly regarding path resolution and policy checks.
*   **Context Window Saturation:** The agent still struggles with "blowing up context windows" in large codebases, necessitating manual result capping.
*   **UI/State Desync:** Issues where the UI (tracker tray) doesn't reflect the internal state, or where disabled tools remain active until restart.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-20

## 1. Today's Highlights
Version **v1.0.9** was released yesterday, focusing heavily on terminal stability and internationalization. The update eliminates spurious I/O errors during SSH disconnects and fixes a critical bug where copying text on WSL corrupted CJK (Chinese, Japanese, Korean) and non-ASCII characters. However, the community has noted a surge in regression reports regarding copy/paste functionality across various environments (Linux, Windows/PuTTY) immediately following this release.

## 2. Releases

### **v1.0.9** (2026-03-19)
*   **Stability:** Spurious I/O error messages (`ENOTCONN`, `EIO`) no longer appear in the timeline during SSH disconnects or terminal closes.
*   **File Context:** Added `include_gitignored` config option to include gitignored files in `@` file search.
*   **Internationalization:** Fixed a bug where copying text on WSL failed to correctly preserve CJK and other non-ASCII characters.

## 3. Hot Issues

1.  **[OPEN] Screen flickering and scrolling issues (#239)**
    *   **Why it matters:** A long-standing usability blocker. Users with conversation histories exceeding 10 messages experience severe screen flickering and involuntary scrolling to the top, making the tool difficult to use for complex tasks.
    *   **Community Reaction:** 66 upvotes; users are frustrated by the lack of a fix for this persistent UI regression.

2.  **[OPEN] Copy and paste broken on Windows PuTTY SSH (#2159)**
    *   **Why it matters:** A potential regression in v1.0.9. Users connecting to Linux Mint via PuTTY cannot copy/paste using mouse selection or right-click, severing a critical workflow for transferring prompts.

3.  **[CLOSED] Support OAuth for HTTP MCP servers (#33)**
    *   **Why it matters:** High-demand feature (106 upvotes). Users want to connect CLI to remote MCP servers like Figma and Atlassian which require OAuth, moving beyond local tools.

4.  **[OPEN] Regression: TMUX scrolling and keybinds broken (#2148)**
    *   **Why it matters:** Following the v1.0.8 upgrade, the CLI traps scroll events, breaking standard TMUX workflows (page scroll, search). This forces users to rely on application-specific scrolling mechanisms.

5.  **[OPEN] "Claude Sonnet 4.5" model availability warning (#2099)**
    *   **Why it matters:** Users with Copilot Pro are seeing warnings that specific Claude models (4.5/4.6) defined in agent configurations are unavailable, causing a fallback to default models and breaking expected behavior.

6.  **[OPEN] Ctrl+C only captures the first character of selected text (#2143)**
    *   **Why it matters:** A critical regression preventing users from copying code snippets or output from the CLI. This severely hampers the utility of the tool as a coding assistant.

7.  **[OPEN] Feature Request: Global Hooks Configuration (#1157)**
    *   **Why it matters:** Currently, hooks must be configured per repository. Users want global hooks for events like `UserPromptSubmit` to standardize workflows (e.g., logging, redaction) across all projects.

8.  **[OPEN] XDG_CONFIG_HOME support incorrect (#1347) / (#1750)**
    *   **Why it matters:** Linux standards compliance. The CLI currently creates a dot-prefixed directory inside `.config` (e.g., `~/.config/.copilot`), violating the XDG Base Directory Specification.

9.  **[OPEN] Arrow keys output literal characters during session (#1284)**
    *   **Why it matters:** A terminal escape sequence failure where arrow keys print `A`, `B`, `C`, `D` instead of navigating command history, breaking the interactive experience.

10. **[OPEN] Request for vi/vim input mode (#13)**
    *   **Why it matters:** A highly requested UX enhancement (37 upvotes) for power users who prefer modal editing for prompt refinement.

## 4. Key PR Progress
*No active Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends
*   **MCP & Extensibility:** Strong demand for **OAuth support** in MCP servers (#33) and better discovery of **Organization-level Agents** (#1285).
*   **UX Customization:** Users are pushing for **Global Hooks** (#1157) and **OpenTelemetry Export** (#1911) to monitor and control agent behavior programmatically.
*   **Terminal Experience:** Recurring requests for **Vim keybindings** (#13) and better integration with terminal multiplexers like **TMUX** (#2148).

## 6. Developer Pain Points
*   **Clipboard/Selection Regression:** The most immediate pain point is the **broken copy/paste functionality** across different platforms (Linux, WSL, PuTTY) in the latest releases.
*   **Terminal Ownership:** Developers are frustrated by the CLI taking over scrolling and mouse events, breaking established workflows with tools like **TMUX** and standard terminal emulators.
*   **Config Sprawl:** The lack of global configuration for **hooks** and **skills** creates repetitive setup work for developers who work across multiple repositories.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-20

## 1. Today's Highlights
The Kimi CLI community saw an explosion of activity today with **20 new Pull Requests** submitted, signaling a major push in feature development and stabilization. Key advancements include the introduction of a **Plugin System** (Skills + Tools), resolving the long-standing request for custom capabilities, and significant UX improvements like **auto-submitting slash commands** and a configurable **timeout command**. A series of "connection error" bugs affecting Linux users were also diagnosed as HTTP header pollution issues, with fixes underway.

## 2. Releases
No new official releases were recorded in the last 24 hours. The repository remains active on the development front, likely preparing for a consolidated feature release soon.

## 3. Hot Issues

1.  **[#107] [CLOSED] [enhancement] Kimi CLI Skill.md**
    *   **Significance:** This issue tracks the highly anticipated request for a plugin/skill system.
    *   **Context:** The feature allows users to define custom, reusable capabilities via markdown. It was closed today following the submission of PR #1503, marking a major milestone in extensibility.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/107)

2.  **[#1285] [OPEN] [bug] Bug: LLM provider error: Connection error.**
    *   **Significance:** High-impact connectivity issue.
    *   **Context:** Users on Linux (v1.15.0+) are experiencing persistent connection errors. This appears to be related to HTTP header validation failures (see below), causing workflow interruptions.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1285)

3.  **[#1389] [CLOSED] [bug] HTTP Headers pollution problem**
    *   **Significance:** Root cause identification for widespread connection errors.
    *   **Context:** Identified that `platform.version()` output (containing special characters or trailing whitespace) was polluting HTTP headers, causing the server to reject connections. The closure suggests a fix has been merged or identified.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1389)

4.  **[#625] [OPEN] [enhancement] Add /timeout command**
    *   **Significance:** Addresses a frequent developer frustration regarding rigid timeout limits.
    *   **Context:** Users are requesting the ability to dynamically adjust the 60-second timeout for long-running tasks (like `npm install`). A corresponding PR (#1507) was opened today.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/625)

5.  **[#1437] [OPEN] [bug] Enter key appends `[13u` in VS Code terminal**
    *   **Significance:** Critical usability blocker for VS Code users.
    *   **Context:** Affects Linux/VS Code users (v1.22.0) where the Enter key malfunctions due to the Kitty keyboard protocol. This prevents effective CLI usage in integrated terminals.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1437)

6.  **[#729] [OPEN] [enhancement] Add "skip" option for command execution**
    *   **Significance:** Workflow optimization.
    *   **Context:** Users want the ability to "Skip" a specific command execution without aborting the entire agent flow. This allows the agent to proceed with remaining tasks rather than halting completely.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/729)

7.  **[#1513] [OPEN] [bug] Windows installation script crashes**
    *   **Significance:** Barrier to entry for new Windows users.
    *   **Context:** On clean Windows systems, the installation script fails silently due to default `Restricted` PowerShell execution policies, preventing successful setup.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1513)

8.  **[#781] [OPEN] Ctrl+V paste issue in Windows Terminal**
    *   **Significance:** UX friction on Windows.
    *   **Context:** Windows Terminal intercepts `Ctrl+V`, preventing image pasting into Kimi CLI. Users are requesting an alternative shortcut (Alt+V) to bypass the terminal intercept.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/781)

9.  **[#765] [CLOSED] [enhancement] Persist approve_for_session**
    *   **Significance:** Session management improvement.
    *   **Context:** The `approve_for_session` setting is currently lost when a session is resumed. This feature request to persist approvals across restarts was closed today, likely implemented in a recent PR.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/765)

10. **[#1266] [OPEN] HTTP header validation error (Trailing whitespace)**
    *   **Significance:** Specific instance of the header pollution bug.
    *   **Context:** Detailed technical analysis proving that trailing whitespace in `platform.uname().version` causes HTTP validation errors on Ubuntu. This reinforces the need for defensive string cleaning in the header generation logic.
    *   [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1266)

## 4. Key PR Progress

1.  **[#1503] feat: add plugin system (Skills + Tools)**
    *   **Description:** Implements the "Skills" system, allowing users to define custom tools and agents via markdown/zip/git URL. Includes commands `kimi plugin install/list/remove`.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1503)

2.  **[#1509] feat: auto-submit slash commands upon selection**
    *   **Description:** Resolves UX friction by executing slash commands immediately upon selection from the menu, removing the need for a second "Enter" press.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1509)

3.  **[#1507] feat: add /timeout command**
    *   **Description:** Introduces a `/timeout` slash command allowing users to configure the shell command timeout duration dynamically, solving issues with long-running installations.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1507)

4.  **[#1514] & [#1502] fix: disable/handle Kitty keyboard protocol**
    *   **Description:** Addresses the VS Code Enter key bug (#1437) by detecting/disabling the Kitty keyboard protocol which sends incompatible CSI-u sequences to `prompt_toolkit`.
    *   [View PR #1514](https://github.com/MoonshotAI/kimi-cli/pull/1514) | [View PR #1502](https://github.com/MoonshotAI/kimi-cli/pull/1502)

5.  **[#1506] feat: add skip option for tool approval prompts**
    *   **Description:** Adds a "Skip, continue with remaining tasks" button to the tool approval dialog, allowing users to bypass specific commands without stopping the agent's thought process.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1506)

6.  **[#1515] fix(web): enable inline math formula rendering**
    *   **Description:** Fixes the Web UI where block math (`$$`) worked but inline math (`$`) failed to render by adjusting the `remark-math` configuration.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1515)

7.  **[#1516] fix: handle PowerShell Restricted execution policy**
    *   **Description:** Improves the Windows installation experience by detecting and handling the `Restricted` execution policy which previously caused silent crashes.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1516)

8.  **[#1508] feat: add git branch and status display in toolbar**
    *   **Description:** Enhances the shell toolbar to show the current git branch and sync status, alongside rotating tips and background task counts.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1508)

9.  **[#1512] fix(acp): handle ValueError when 'kimi' not in sys.argv**
    *   **Description:** Fixes an IDE integration crash ("list.index(x): x not in list") when the CLI is invoked in ways where 'kimi' is absent from system arguments.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1512)

10. **[#1472] fix: restore codeblock copy functionality in Web UI**
    *   **Description:** Fixes the broken copy button in non-HTTPS environments (e.g., remote servers) by falling back to alternative methods when the Clipboard API is unavailable.
    *   [View PR](https://github.com/MoonshotAI/kimi-cli/pull/1472)

## 5. Feature Request Trends
*   **Workflow Granularity:** Users want finer control over agent execution (e.g., "Skip" specific commands rather than aborting, adjusting timeouts per task).
*   **Extensibility:** High demand for custom agent behaviors (Skills/Plugins) and integration hooks.
*   **Session Persistence:** Strong desire for state preservation across restarts (resuming approvals, keeping context).
*   **Terminal Compatibility:** Requests for better handling of specific terminal emulators (Windows Terminal, VS Code, Termux).

## 6. Developer Pain Points
*   **Connectivity Instability:** A significant cluster of issues relates to "Connection error" caused by low-level HTTP header pollution (specifically unsanitized system info like kernel versions). This affects Linux users disproportionately.
*   **Environment Interference:** Developers are struggling with terminal-specific keybindings (Kitty protocol in VS Code, Ctrl+V in Windows Terminal) that conflict with CLI inputs.
*   **Rigid Constraints:** The hardcoded 60-second timeout for shell commands is a frequent source of frustration during complex installations or builds.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-20

## 1. Today's Highlights
The OpenCode community is in a state of high alert regarding **Anthropic provider support**. A major PR (#18186) was merged removing all Anthropic references and authentication plugins "per legal requests," coinciding with widespread reports of OAuth breakdowns and 429 errors. Concurrently, the release of **OpenCode 2.0** is imminent, with the core team merging significant architectural refactors in PR #16918 to support the next major version.

## 2. Releases
No official stable releases were published in the last 24 hours. However, activity suggests a significant release candidate or beta for **OpenCode 2.0** is currently being staged via the `opencode 2-0` PR branch.

## 3. Hot Issues

1.  **#18267 [bug, core] Claude code 0auth broked!?**
    Users are unable to log in via OAuth, facing persistent `429` errors. This issue has sparked high engagement (65 comments) due to a complete workflow blockage for Claude subscribers.
    [Link](https://github.com/anomalyco/opencode/issues/18267)

2.  **#18186 [Vouched] anthropic legal requests** (PR Reference)
    While technically a PR, this closed merge is causing confusion. It removed the `opencode-anthropic-auth` plugin and provider hints "per legal requests," leading to speculation about the future of Anthropic support in OpenCode.
    [Link](https://github.com/anomalyco/opencode/pull/18186)

3.  **#18265 Repository anomalyco/opencode-anthropic-auth no longer exists**
    A direct follow-up to the PR above, users are questioning if Anthropic is being deprecated as a provider entirely after the authentication repository vanished.
    [Link](https://github.com/anomalyco/opencode/issues/18265)

4.  **#10416 OpenCode is not private by default?**
    A high-visibility discussion (23 👍) regarding privacy. Users discovered that session titles are computed via external networks even when using local LLMs, bypassing firewall rules.
    [Link](https://github.com/anomalyco/opencode/issues/10416)

5.  **#16331 [bug, core] Permissions ignored**
    Users report that `opencode.json` permission configurations (specifically `deny` rules for `.env` files) are being bypassed, raising security concerns for enterprise use.
    [Link](https://github.com/anomalyco/opencode/issues/16331)

6.  **#7957 [UX] Ctrl+C should not exit OpenCode**
    A highly upvoted request (17 👍) highlighting that `Ctrl+C` conflicts with standard copy behavior on Windows/Linux, causing accidental application exits.
    [Link](https://github.com/anomalyco/opencode/issues/7957)

7.  **#17910 [core] OAuth + cache_control causes HTTP 400**
    A technical deep-dive indicating that OpenCode's SDK unconditionally injects `cache_control` on Claude models, which fails when using the new OAuth subscription flow.
    [Link](https://github.com/anomalyco/opencode/issues/17910)

8.  **#5636 [bug] HTTP 405 on Figma MCP**
    Integration issues persist with the Figma MCP server, returning `405 Method not Allowed` during authentication, preventing usage of this design tool integration.
    [Link](https://github.com/anomalyco/opencode/issues/5636)

9.  **#11301 [bug, windows] Processing stops after compaction**
    Critical for long-context sessions: the agent loop halts entirely after context compaction on Windows, requiring manual user intervention to continue.
    [Link](https://github.com/anomalyco/opencode/issues/11301)

10. **#11403 [bug] Unexpected file named "nul" created**
    A persistent annoyance on Windows where OpenCode repeatedly creates a junk file named `nul` in the working directory after updates.
    [Link](https://github.com/anomalyco/opencode/issues/11403)

## 4. Key PR Progress

1.  **#18186 [CLOSED] Remove Anthropic references**
    A critical compliance PR that strips out Anthropic prompts and the auth plugin. This defines the immediate limitation of Claude support in the tool.
    [Link](https://github.com/anomalyco/opencode/pull/18186)

2.  **#16918 [OPEN] opencode 2-0**
    The massive "beta" refactor for version 2.0. Includes LSP server improvements, dynamic formatter resolution, and core architecture changes.
    [Link](https://github.com/anomalyco/opencode/pull/16918)

3.  **#18288 [OPEN] Multi-grid session tiling view**
    Introduces a Hyprland-style tiling mode for the desktop app, allowing users to view multiple chat sessions in a grid layout simultaneously.
    [Link](https://github.com/anomalyco/opencode/pull/18288)

4.  **#18292 [OPEN] Fix permission import cycle**
    Resolves a circular dependency crash related to permission evaluation during truncation/todo updates.
    [Link](https://github.com/anomalyco/opencode/pull/18292)

5.  **#18291 [OPEN] Include linked directories in file search**
    Fixes a bug where `ripgrep` ignored symlinked directories, making `@` file completions work correctly for monorepos with linked packages.
    [Link](https://github.com/anomalyco/opencode/pull/18291)

6.  **#17130 [OPEN] Fix usage price calculation**
    Corrects cost estimation logic for providers that do not discount cache reads, ensuring accurate billing display.
    [Link](https://github.com/anomalyco/opencode/pull/17130)

7.  **#15269 [OPEN] Clickable file references**
    Enhances the desktop UI by making file paths in chat messages clickable, opening the file directly at the referenced line.
    [Link](https://github.com/anomalyco/opencode/pull/15269)

8.  **#18272 [OPEN] ACP attach support**
    Adds `--attach` flag to `opencode acp`, allowing stdio bridging to an existing backend server rather than spawning a new one.
    [Link](https://github.com/anomalyco/opencode/pull/18272)

9.  **#13324 [CLOSED] Split Bedrock 1M context models**
    Explicitly separates Bedrock models into 200K and 1M context variants to handle API requirements correctly.
    [Link](https://github.com/anomalyco/opencode/pull/13324)

10. **#11938 [OPEN] /session-id command**
    Simple QoL addition to copy the current session ID to the clipboard via a slash command.
    [Link](https://github.com/anomalyco/opencode/pull/11938)

## 5. Feature Request Trends
*   **Grok & xAI Support:** High demand for updating the xAI provider to support Grok 4.2 "Thinking" mode and fixing the completions vs. responses API usage (#18179, #17030).
*   **Shell Integration:** Strong community desire for native tab completion scripts for bash/zsh/fish to improve CLI ergonomics (#1515).
*   **Performance Metrics:** Users want visibility into inference speed, specifically a "tokens per second" display to compare providers (#5374).
*   **Quiet Mode:** Requests for a `--quiet` or script-friendly mode in the CLI to suppress verbose tool output during automated runs (#6999).

## 6. Developer Pain Points
*   **Clipboard Reliability:** Copy/paste functionality in the CLI (TUI) is broken across platforms—users report "Copied to clipboard" toasts, but the clipboard remains empty (#13984, #17796).
*   **Windows Stability:** The Windows client faces specific regressions, including the "nul" file bug and agent halts after context compaction (#11301, #11403).
*   **Provider Auth Fragility:** The transition to OAuth for consumer subscriptions is breaking local tooling. Users struggle with 429s and 400s, exacerbated by the removal of the dedicated Anthropic auth plugin (#18267, #17910).
*   **Looping Models:** Certain models (KIMI K2, GLM 4.6) get stuck in tool-calling loops, requiring manual stops or `/compact` commands to recover (#3743).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-20

## 1. Today's Highlights
The community is buzzing with activity surrounding the **v0.13.0-preview.0** release, which introduces system prompt customization and critical pipeline fixes. However, a **critical regression in the Edit tool** (Issue #1922, #2460) is causing widespread code corruption and workflow blockages, dominating user discussions. Concurrently, the developer ecosystem is rapidly evolving through new "Skills" extensibility features and enhanced IDE integrations, despite these stability growing pains.

## 2. Releases
### **v0.13.0-preview.0**
*   **System Prompt Customization:** Added options for users to define custom system prompts.
*   **Pipeline Fixes:** Resolved handling of duplicate `finish_reason` chunks from OpenRouter (contributed by @simon100500).
*   **Version Bump:** Chore update to 0.13.0.
*   **Link:** [Release v0.13.0-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.0-preview.0)

## 3. Hot Issues

1.  **[#1922 & #2460] Critical Edit Tool Failures & Code Corruption**
    *   **Why:** A regression in the latest version is causing the `edit` tool to fail frequently. Worse, the agent attempts fallback strategies using `node` or `ps` commands that can overwrite and corrupt entire project files.
    *   **Reaction:** High urgency; users report being "unable to use" the tool and having projects destroyed.
    *   **Links:** [Issue #1922](https://github.com/QwenLM/qwen-code/issues/1922) | [Issue #2460](https://github.com/QwenLM/qwen-code/issues/2460)

2.  **[#2499] Data Loss via Overwrite**
    *   **Why:** The agent is skipping `read_file` steps and using `write_file` to truncate or overwrite content incorrectly, leading to data loss.
    *   **Reaction:** Users are frustrated by the lack of "surgical" editing logic in the agent's default behavior.
    *   **Link:** [Issue #2499](https://github.com/QwenLM/qwen-code/issues/2499)

3.  **[#486] Standardized Tool Management**
    *   **Why:** A major proposal to establish a formal package management system for Qwen-Code tools/skills, similar to NPM.
    *   **Reaction:** Highly requested to facilitate sharing and distribution of complex agent workflows.
    *   **Link:** [Issue #486](https://github.com/QwenLM/qwen-code/issues/486)

4.  **[#2454] `/model` Command Wipes Custom Configs**
    *   **Why:** Switching models via the CLI slash command silently deletes manually added model entries in `settings.json`.
    *   **Reaction:** A significant UX bug affecting power users with custom model configurations.
    *   **Link:** [Issue #2454](https://github.com/QwenLM/qwen-code/issues/2454)

5.  **[#2496] Filename Encoding Bug (Chinese/English)**
    *   **Why:** Mixed Chinese-English filenames are parsed with incorrect spaces, breaking file reading capabilities.
    *   **Reaction:** Critical bug for international users.
    *   **Link:** [Issue #2496](https://github.com/QwenLM/qwen-code/issues/2496)

6.  **[#2155] `.agents` vs `.agent` Directory Convention**
    *   **Why:** Users want support for the `.agents` (plural) directory to align with emerging industry conventions for skills storage.
    *   **Link:** [Issue #2155](https://github.com/QwenLM/qwen-code/issues/2155)

7.  **[#2488] MCP Integration Failures**
    *   **Why:** Agent ignores configured MCP tools (like Pencil) and falls back to internal skills, defeating the purpose of external integrations.
    *   **Link:** [Issue #2488](https://github.com/QwenLM/qwen-code/issues/2488)

8.  **[#2294] ACP `writeTextFile` on Non-Existent Files**
    *   **Why:** Writing to new files via ACP fails with "invalid path" instead of creating the file.
    *   **Status:** Closed (Addressed in recent PRs).
    *   **Link:** [Issue #2294](https://github.com/QwenLM/qwen-code/issues/2294)

9.  **[#2491] Input Method Editor (IME) Bug on Linux**
    *   **Why:** Single Chinese characters cannot be inputted via Sougou Pinyin on Ubuntu; they are replaced by spaces.
    *   **Link:** [Issue #2491](https://github.com/QwenLM/qwen-code/issues/2491)

10. **[#2034] Customizing "Thinking" UI**
    *   **Why:** Users want to disable or customize the rotating quotes in the TUI during model inference.
    *   **Link:** [Issue #2034](https://github.com/QwenLM/qwen-code/issues/2034)

## 4. Key PR Progress

1.  **[PR #2504] Fix `/model` Command Config Overwrite**
    *   Fixes a critical bug where `setValue()` wiped unrelated keys from `settings.json`.
    *   **Link:** [PR #2504](https://github.com/QwenLM/qwen-code/pull/2504)

2.  **[PR #2502] Extensible Skills System**
    *   Introduces `extends: bundled` in `SKILL.md`, allowing users to append custom dimensions to bundled skills (like adding "Accessibility" to the `/review` skill) without copying the entire file.
    *   **Link:** [PR #2502](https://github.com/QwenLM/qwen-code/pull/2502)

3.  **[PR #2483] ACP Fallback Logic**
    *   Improves robustness by falling back to the local filesystem if the IDE companion rejects a `writeTextFile` request.
    *   **Link:** [PR #2483](https://github.com/QwenLM/qwen-code/pull/2483)

4.  **[PR #1978] Image Paste in VS Code**
    *   Adds rich image paste support to the VS Code IDE Companion, enhancing multimodal capabilities.
    *   **Link:** [PR #1978](https://github.com/QwenLM/qwen-code/pull/1978)

5.  **[PR #2283] Permission System**
    *   Implements a fine-grained, rule-based permission system (e.g., allowing `Bash(git *)` but denying others) for safer agent execution.
    *   **Link:** [PR #2283](https://github.com/QwenLM/qwen-code/pull/2283)

6.  **[PR #2503] Markdown Table Rendering**
    *   Fixes a bug where escaped pipe characters (`\|`) in table cells broke the column layout.
    *   **Link:** [PR #2503](https://github.com/QwenLM/qwen-code/pull/2503)

7.  **[PR #2474] CRLF Normalization**
    *   Fixes Edit tool failures on Windows by normalizing CRLF line endings in parameters.
    *   **Link:** [PR #2474](https://github.com/QwenLM/qwen-code/pull/2474)

8.  **[PR #2371] `/btw` Slash Command**
    *   Adds an ephemeral Q&A command for side questions that utilizes context without polluting main history or tool state.
    *   **Link:** [PR #2371](https://github.com/QwenLM/qwen-code/pull/2371)

9.  **[PR #2509] Anthropic Thinking Budget Fix**
    *   Ensures `max_tokens` strictly exceeds `thinking.budget_tokens` to prevent 400 errors with Anthropic models.
    *   **Link:** [PR #2509](https://github.com/QwenLM/qwen-code/pull/2509)

10. **[PR #2490] Coding Plan Auth & i18n**
    *   Integrates Alibaba Cloud Coding Plan authentication and adds multilingual support for the WebUI.
    *   **Link:** [PR #2490](https://github.com/QwenLM/qwen-code/pull/2490)

## 5. Feature Request Trends
*   **Advanced Customization of Skills:** Users are moving beyond simple usage to requesting deep modification of bundled skills (e.g., custom review dimensions) and standardized distribution methods (Proposal #486).
*   **Enhanced Safety & Control:** Increased demand for fine-grained permissions (PR #2283) and options to disable persistent "Always Allow" approvals (Issue #2497) to prevent accidental data loss.
*   **UI/UX Refinement:** Requests to make the CLI interface more adaptable, such as disabling "thinking" animations and adapting keyboard shortcuts for different OSs (Issue #2227).

## 6. Developer Pain Points
*   **Agent Reliability:** The most significant pain point is the **Edit Tool reliability**. Users are experiencing "hallucinated edits" where the agent fails to find strings and then destructively overwrites files using shell commands.
*   **Settings Persistence:** The CLI frequently overwrites manual `settings.json` edits, making it difficult to manage custom model providers or complex configurations.
*   **Input Method Support:** Linux users (specifically Ubuntu + Sougou) are facing fundamental input bugs, preventing effective usage in non-English environments.

</details>