# AI CLI Tools Community Digest 2026-03-26

> Generated: 2026-03-25 22:07 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Report
**Analysis Date:** 2026-03-26
**Analyst:** Senior Technical Analyst, AI Developer Tools

---

## 1. Ecosystem Overview

The AI CLI tool landscape is maturing rapidly, shifting from simple chat interfaces to sophisticated agentic workflows involving multi-agent orchestration, hooks systems, and deep IDE integration. **MCP (Model Context Protocol)** has emerged as a critical integration standard, yet all major tools struggle with implementation nuances like server discovery, subagent access, and schema compatibility. There is a clear industry-wide push toward **"voice-first" and "remote-first" workflows**, but current implementations are fragile, with multiple tools reporting platform-specific regressions in audio and TUI stability. Competition is fierce between proprietary ecosystems (Claude Code, OpenAI Codex, Copilot) and open-source alternatives (OpenCode, Qwen, Kimi), with the latter differentiating on extensibility and privacy while the former lead on out-of-the-box capability.

## 2. Activity Comparison

| Tool | Issues (Hot/Active) | PRs (Active/Merged) | Latest Release | Development Velocity |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ high-engagement | 10 active/merged | v2.1.83 (Yesterday) | High — Enterprise focus, some regression debt |
| **OpenAI Codex** | 10+ critical issues | 10 active | rust-v0.117.0-alpha.19 | **Very High** — 6 alpha releases in 1 day (Rust client) |
| **Gemini CLI** | 10 significant | 10 active/merged | v0.36.0-preview.3 | High — A2A & SDD architecture focus |
| **GitHub Copilot CLI**| 10 persistent | **0 active** | v1.0.12-0 | **Low/Medium** — Release driven, PR pipeline stagnant |
| **Kimi Code CLI** | 10 moderate | 10 active/merged | **v1.26.0** | High — Plugin system reaching maturity |
| **OpenCode** | 10 diverse | 10 active/merged | v1.3.2 | High — Multi-provider & infra focus |
| **Qwen Code** | 10 stability-focused | 10 active/merged | v0.14.0-preview.0 | High — Automation & channel expansion |

## 3. Shared Feature Directions

The following requirements are appearing simultaneously across multiple tool communities, indicating convergent evolution in user needs:

| Direction | Tools Involved | Specific Needs |
| :--- | :--- | :--- |
| **Voice Input Stability** | Claude Code, OpenCode | Hands-free coding is a top feature request, but current pipelines are broken on Linux, macOS (transcription), and WSL2. |
| **Hook Systems & Lifecycle Events** | Claude Code, Kimi Code, OpenAI Codex | Demand for `PreToolUse` / `PostToolUse` hooks to inject custom logic (e.g., direnv, shell commands) is growing; Kimi just added 13 hook events. |
| **Plugin/Skills Ecosystems** | Claude Code, Kimi Code, OpenAI Codex | Users want marketplaces or shared configurations for "skills" (agents.md) to modularize capabilities. OpenAI users explicitly want "plugins like Claude." |
| **Remote & Channel Integration** | Claude Code, Qwen Code, OpenCode | Controlling agents via messaging apps (WhatsApp, Telegram, WeChat) is a rising trend for mobile workflow continuity. |
| **MCP Reliability** | Claude Code, GitHub Copilot, OpenAI Codex | Model Context Protocol is standard but buggy: issues include subagent access, hyphenated name parsing, and schema incompatibility with specific models. |
| **Usage Transparency** | Claude Code, OpenAI Codex, GitHub Copilot | "Token burning," opaque rate limits, and instant lockouts on paid plans are the top trust-breaking issues across proprietary tools. |

## 4. Differentiation Analysis

| Tool | Feature Focus | Target User | Technical Approach |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **Enterprise Governance** & **Agentic Scale** | Large teams, Enterprise IT | Managed settings directories, 1M context window inheritance for "Agent Teams," but struggling with platform QA consistency. |
| **OpenAI Codex** | **Performance** & **Multi-Modality** | Individual Pro users, Power users | Aggressive Rust client optimization (6 alphas/day), strong VS Code integration, but suffering from CPU spikes and token drain bugs. |
| **Gemini CLI** | **Workflow Architecture** | Google Cloud power users | Innovating on "Spec-Driven Development" (DAG-based tasks) and Agent-to-Agent (A2A) protocols, but UI/UX lags behind competitors. |
| **GitHub Copilot CLI** | **IDE Integration** | VS Code/GitHub native users | Deepest IDE coupling (`/ide` commands), but slow PR iteration and restrictive OAuth scopes frustrating security-conscious users. |
| **Kimi Code CLI** | **Interoperability** | Open-source enthusiasts | Moving toward compatibility with Claude/OpenCode plugins; strong focus on network resilience for unstable connections. |
| **OpenCode** | **Privacy & Choice** | Local-first / Multi-cloud users | Multi-provider architecture (Bedrock, Ollama, Poe) with heap debugging; struggling with cross-provider schema parity. |
| **Qwen Code** | **Automation** | DevOps / Automation engineers | Leading with `/loop` command for periodic tasks; strong focus on channel expansion (WeChat/Telegram) for remote ops. |

## 5. Community Momentum & Maturity

*   **Rapid Iterators:** **OpenAI Codex** shows the highest velocity with rapid-fire Rust releases, and **Qwen Code** is aggressively shipping automation features. This suggests a "race to stability" phase for their core infrastructure.
*   **Mature but Stagnant:** **GitHub Copilot CLI** shows the lowest PR activity, suggesting a mature but perhaps under-resourced or closed development cycle compared to the frantic pace of competitors.
*   **Community Engagement:** **Claude Code** hosts the largest active discussions (1,300+ comments on billing issues), indicating high adoption but also high friction. **OpenCode** benefits from open-source contributions driving multi-provider support.
*   **Stability Leaders:** **Gemini CLI** and **Kimi Code** appear focused on architectural refactoring (DAG tasks, hooks systems), prioritizing long-term robustness over short-term feature bloat.

## 6. Trend Signals

1.  **The "Context Inheritance" Problem:** As tools move to multi-agent systems (Claude's "Teams", Gemini's "A2A"), ensuring child agents retain parent permissions, context windows, and MCP access is the critical architectural challenge of Q1 2026.
2.  **Billing Trust Erosion:** The dominant narrative across proprietary tools (Claude, Codex, Copilot) is user frustration with invisible usage limits and "token burning." This creates an opening for transparent, local-first, or BYOK (Bring Your Own Key) alternatives like OpenCode or Qwen.
3.  **Shift from Chat to Control Plane:** The CLI is evolving from a chat interface into a **control plane**. Features like WhatsApp channels (Claude/Qwen), automation loops (Qwen), and hook systems (Kimi/Claude) indicate users want agents integrated into their broader development lifecycle, not just isolated coding assistants.
4.  **Platform Fragmentation:** Linux and WSL2 are consistently treated as second-class citizens across *all* tools (audio bugs, TUI regressions, package manager friction). Specialized teams focusing on cross-platform parity will gain a significant adoption advantage.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Snapshot Date:** 2026-03-26

---

## 1. Top Skills Ranking

Based on repository positioning and community engagement signals, here are the most prominent Skills under development:

| Rank | Skill | PR | Author | Status | Summary |
|------|-------|-----|--------|--------|---------|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | OPEN | Typographic quality control for AI-generated documents—prevents orphan word wrap, widow paragraphs, and numbering misalignment. Addresses a universal pain point since "every document Claude generates" has these issues. |
| 2 | **frontend-design** (improved) | [#210](https://github.com/anthropics/skills/pull/210) | justinwetch | OPEN | Major revision improving clarity, actionability, and internal coherence of frontend design guidance to ensure instructions are executable within a single conversation. |
| 3 | **skill-quality-analyzer & skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | eovidiu | OPEN | Two meta-skills for the marketplace: comprehensive quality analysis (5-dimension evaluation) and security analysis for Claude Skills themselves. |
| 4 | **system-documentation** (flowcharts) | [#95](https://github.com/anthropics/skills/pull/95) | TylerALofall | OPEN | Detailed documentation suite covering evidence management system architecture, component topology, and workflow lifecycle diagrams. |
| 5 | **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | narenkatakam | OPEN | Addresses community health gap (repo currently at 25% on GitHub metrics); adds contribution guidelines, PR standards, and development setup. |
| 6 | **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | amitlals | OPEN | Enterprise skill leveraging SAP's open-source tabular foundation model for predictive analytics on SAP business data. |
| 7 | **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | p19dixon | OPEN | 10-step workflow producing `CODEBASE-STATUS.md` for identifying orphaned code, unused files, documentation gaps, and infrastructure bloat. |
| 8 | **8-Skill Foundation Series** | [#288](https://github.com/anthropics/skills/pull/288) | Eaprime1 | OPEN | Bundle including: tutorial-builder, quiz-generator, a11y-auditor, changelog-curator, data-storytelling, and 3 more foundation skills. |

---

## 2. Community Demand Trends

Analysis of Issues reveals strong demand in these directions:

| Trend | Evidence | Description |
|-------|----------|-------------|
| **Agent Governance & Safety** | [Issue #412](https://github.com/anthropics/skills/issues/412) | Policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems—currently missing from the ecosystem. |
| **MCP Integration** | [Issue #16](https://github.com/anthropics/skills/issues/16) | Exposing Skills as Model Context Protocol tools with typed APIs (e.g., `generateAlgorithmArt({ prompt, options })`). |
| **AWS Bedrock Compatibility** | [Issue #29](https://github.com/anthropics/skills/issues/29) | Cross-platform support for Skills beyond Anthropic's direct API, particularly AWS Bedrock integration. |
| **Enterprise/SSO Support** | [Issue #532](https://github.com/anthropics/skills/issues/532) | Skills requiring `ANTHROPIC_API_KEY` fail for enterprise SSO users who lack individual API keys. |
| **Duplicate Skill Resolution** | [Issue #189](https://github.com/anthropics/skills/issues/189) | `document-skills` and `example-skills` plugins install identical content, wasting context window space. |
| **Skill Evaluation Infrastructure** | [Issue #556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` shows 0% skill trigger rate—testing infrastructure needs improvement. |
| **API Stability & Deletion** | [Issue #403](https://github.com/anthropics/skills/issues/403), [Issue #406](https://github.com/anthropics/skills/issues/406) | Upload failures and inability to delete skill versions (500 errors) blocking workflow. |

---

## 3. High-Potential Pending Skills

Active PRs with strong momentum likely to merge soon:

| Skill | PR | Why It Matters |
|-------|-----|----------------|
| **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | Persistent context across conversations—addresses Claude's session isolation limitation with `proactive_context` pattern. |
| **session-memory** | [#629](https://github.com/anthropics/skills/pull/629) | Zero-dependency solution preserving technical facts across context compaction; survives tool output loss. |
| **plan-task** | [#522](https://github.com/anthropics/skills/pull/522) | Persists multi-step plans in `.claude/tasks/` so sessions can resume where previous sessions left off. |
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Tagged Markdown entries in `.claude/knowledge/` for workarounds and insights that survive session boundaries. |
| **management-consulting** | [#384](https://github.com/anthropics/skills/pull/384) | Structured problem solving, strategic frameworks, business case development, and executive communication. |
| **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | ISO-standard document creation, template filling, and HTML parsing for LibreOffice/Google Docs ecosystem. |
| **Google Workspace Suite** | [#299](https://github.com/anthropics/skills/pull/299) | 6 skills via GOG CLI: email triage, email drafting, calendar, tasks management—personal assistant capabilities. |
| **x402 BSV micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Natural language AI service payments: `/x402 generate photo`, `/x402 transcribe`, `/x402 upload`. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent context and memory solutions**—roughly 20% of high-activity submissions address Claude's session isolation limitation through knowledge persistence, plan continuity, or memory systems that survive context compaction.

---

*Report generated from 50 PRs and 15 Issues analyzed. All links reference `github.com/anthropics/skills`.*

---

# Claude Code Community Digest — 2026-03-26

## Today's Highlights

Version **2.1.83** dropped yesterday with significant enhancements for enterprise policy management and reactive hooks, but it's generating substantial community friction due to multiple **regressions in voice mode** across Linux, macOS, and WSL2 platforms. The Agent Teams feature also continues to surface context-window inheritance bugs. On the ecosystem side, new community plugins for **WhatsApp channels**, memory monitoring, and parallel workspaces are in active development.

---

## Releases

### v2.1.83
- **`managed-settings.d/` drop-in directory** — Allows separate teams to deploy independent policy fragments that merge alphabetically alongside the existing `managed-settings.json`. Enterprise-friendly for multi-team governance.
- **New hook events** — Added `CwdChanged` and `FileChanged` events for reactive environment management (e.g., automatic direnv integration).
- *Note: Changelog appears truncated in source data.*

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#16157](https://github.com/anthropics/claude-code/issues/16157) — **Instantly hitting usage limits with Max subscription** (1316 comments, 579 👍) | The single most-discussed issue. Max subscription users report hitting usage limits almost immediately, pointing to potential billing/quota logic bugs. High escalations suggest this is a top community priority. |
| 2 | [#33367](https://github.com/anthropics/claude-code/issues/33367) — **Scroll position jumps during upward scrolling** (29 comments, 58 👍) | TUI regression affecting productivity—users can't read prior output while Claude streams. Affects daily workflows significantly. |
| 3 | [#38666](https://github.com/anthropics/claude-code/issues/38666) — **Voice mode broken on Linux after 2.1.83 upgrade** (6 comments, 4 👍) | Regression in the latest release. `/voice` completely non-functional on Linux. |
| 4 | [#38648](https://github.com/anthropics/claude-code/issues/38648) — **Voice transcription broken in 2.1.81-2.1.83** (6 comments, 6 👍) | Another voice regression on macOS. Works in 2.1.80, broken since. Indicates a systemic issue in recent voice pipeline changes. |
| 5 | [#38979](https://github.com/anthropics/claude-code/issues/38979) — **Voice mode broken in WSL2** (3 comments) | 2.1.83 introduced a `/proc/asound/cards` check that fails on WSL2's PulseAudio/RDP audio setup. Platform-specific regression. |
| 6 | [#34421](https://github.com/anthropics/claude-code/issues/34421) — **Agent Teams teammates lose [1m] context window suffix** (6 comments) | Spawned teammates inherit model ID but not the 1M context variant, limiting their effectiveness in large-context workflows. |
| 7 | [#13898](https://github.com/anthropics/claude-code/issues/13898) — **Custom Subagents cannot access project-scoped MCP servers** (14 comments, 8 👍) | Subagents hallucinate MCP results instead of making actual calls. Blocks modular agent architectures. |
| 8 | [#38842](https://github.com/anthropics/claude-code/issues/38842) — **Uppercase letters broken in xterm under Linux** (3 comments, 1 👍) | Surprising TUI input regression in 2.1.83 affecting basic typing. |
| 9 | [#38411](https://github.com/anthropics/claude-code/issues/38411) — **Feature request: scroll lock / pause auto-scroll** (7 comments, 3 👍) | Complements #33367—users want explicit control over scroll behavior during streaming. |
| 10 | [#38910](https://github.com/anthropics/claude-code/issues/38910) — **Spurious usage spikes and 100% weekly limit lockout after plan upgrade** (3 comments, 3 👍) | Billing/usage tracking bug causing immediate lockouts post-upgrade. Related to the larger #16157 discussion. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#38105](https://github.com/anthropics/claude-code/pull/38105) — **WhatsApp channel plugin** | Adds WhatsApp as a Claude Code channel via Baileys linked-device protocol. Bidirectional messaging with full remote control, matching Telegram/Discord parity. |
| 2 | [#38728](https://github.com/anthropics/claude-code/pull/38728) — **memory-alert plugin** | Monitors Claude Code's own process memory and alerts when exceeding configurable thresholds. Cross-platform (macOS/Linux). |
| 3 | [#38636](https://github.com/anthropics/claude-code/pull/38636) — **multi-setup plugin** | Enables parallel development workspaces by cloning repos into isolated environments. Useful for multi-tasking agents. |
| 4 | [#23853](https://github.com/anthropics/claude-code/pull/23853) — **Dockerfile installer fix** | Replaces deprecated `npm install -g` with native installer in devcontainer. Modernizes deployment approach. |
| 5 | [#38182](https://github.com/anthropics/claude-code/pull/38182) — **session-rename plugin [CLOSED]** | Added `/rename` slash command for custom session titles. Uses non-breaking `.meta.json` sidecar files. |
| 6 | *Related to voice issues* | Multiple voice-related bugs (#38666, #38648, #38979) suggest upcoming hotfix PRs are likely. |
| 7 | *Related to Agent Teams* | Issues #34421 and #36670 indicate context-window inheritance fixes are needed. |
| 8 | *Related to TUI scrolling* | Issues #33367 and #38411 may drive scroll-lock feature PRs. |
| 9 | *Related to MCP* | Issue #13898 (subagent MCP access) and #36975 (channel notifications) highlight MCP integration gaps. |
| 10 | *Related to skills/plugins* | Issue #37683 (`allowed-tools` not enforced) and #38670 (third-party marketplace plugins failing) need fixes. |

---

## Feature Request Trends

1. **Scroll control in TUI** — Auto-scroll interference (#33367, #38411) is a top usability complaint. Users want scroll-lock or pause-streaming controls.

2. **Voice mode reliability** — With 3+ regression reports in 2.1.83 alone, voice needs stabilization across Linux, macOS, and WSL2.

3. **Agent Teams robustness** — Context-window inheritance (#34421, #36670) and teammate response handling (#38932) need fixes for multi-agent workflows.

4. **MCP improvements** — Project-scoped MCP for subagents (#13898) and channel notification surfacing (#36975, #38926) are blocking advanced integrations.

5. **Plugin/skills enforcement** — `allowed-tools` restrictions (#37683) and third-party marketplace plugin registration (#38670) are enterprise-critical.

6. **Usage/billing transparency** — Usage limit issues (#16157, #38910) remain a persistent concern for paid subscribers.

---

## Developer Pain Points

| Category | Summary |
|----------|---------|
| **Voice regressions** | Version 2.1.83 broke voice on Linux, macOS transcription, and WSL2. Developers relying on `/voice` for hands-free workflows are blocked. |
| **TUI scrolling** | Jittery scroll behavior makes it impossible to review history during active streaming. Affects daily productivity. |
| **Agent Teams context loss** | Teammates not inheriting the `[1m]` context window variant undermines large-context workflows. |
| **MCP integration gaps** | Subagents can't access project-scoped MCP servers, and channel notifications aren't surfaced properly. |
| **Usage limits opaqueness** | Max subscription users hitting limits instantly creates trust issues; better visibility and fair-use clarity needed. |
| **Platform-specific bugs** | Windows (EBUSY on `/insights`), WSL2 (audio checks), and Linux xterm (uppercase input) show uneven platform QA. |
| **Plugin ecosystem friction** | Third-party marketplace plugins fail to register skills/commands, limiting extensibility. |

---

*Digest generated from GitHub data as of 2026-03-26. For real-time updates, monitor the [claude-code repository](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-26

## 1. Today's Highlights
The Codex team is in a heavy iteration phase, pushing **6 alpha releases for the Rust client (v0.117.0)** within a single day, signaling aggressive optimization or refactoring efforts. On the issue tracker, **performance and resource usage** are the dominant themes: a critical bug regarding excessive token consumption in the VS Code extension has garnered over 250 comments, while multiple reports cite high CPU usage and overheating on macOS and Linux. Meanwhile, the engineering team is bolstering the platform's observability and security, with new Pull Requests focusing on **telemetry, secure keyring storage, and git safety checks**.

## 2. Releases
*   **rust-v0.117.0-alpha.19** (and alpha.14 through .18)
    *   A rapid sequence of releases occurred for the Rust client, targeting version `0.117.0`. While specific release notes are sparse, the frequency suggests urgent bug fixes or iterative testing for an upcoming stable beta.
    *   [View Release](https://github.com/openai/codex/releases/tag/rust-v0.117.0-alpha.19)

## 3. Hot Issues

1.  **[#14593 [OPEN] Excessive Token Burning in VS Code Extension**
    *   **Why it matters:** This is the most active issue of the day. Users report that the latest VS Code update (`26.311.21342`) is consuming tokens at an unsustainable rate, potentially draining paid credits.
    *   **Community Reaction:** High frustration with 254 comments and 86 upvotes; users are actively trying to diagnose if background agents or compacting tasks are the cause.
    *   [Link](https://github.com/openai/codex/issues/14593)

2.  **[#8745 [OPEN] LSP Integration for Codex CLI**
    *   **Why it matters:** The top feature request (212 upvotes). Users want the CLI to auto-detect and install Language Servers to improve code context accuracy without manual config.
    *   **Community Reaction:** Strong consensus that LSP support would significantly close the gap between CLI and IDE capabilities.
    *   [Link](https://github.com/openai/codex/issues/8745)

3.  **[#14762 [OPEN] Paid Usage Dropping Too Quickly**
    *   **Why it matters:** distinct from the extension bug, this issue highlights a systemic problem where small tasks drain significant credit balances, raising concerns about the cost-efficiency of "Fast mode" and agent spawning.
    *   [Link](https://github.com/openai/codex/issues/14762)

4.  **[#15764 [OPEN] CPU Regression in VS Code (Mac/Linux)**
    *   **Why it matters:** A regression introduced after version `26.313.41514` is causing the "Code Helper" process to exceed 100% CPU during code patches.
    *   **Community Reaction:** Users are reporting overheating hardware (specifically MacBook Air M4 in related issues) and forced to disable the extension.
    *   [Link](https://github.com/openai/codex/issues/15764)

5.  **[#15684 [OPEN] Extension Stuck on Dark Theme**
    *   **Why it matters:** A UI regression where the Codex sidebar ignores the IDE's theme, remaining stuck in dark mode.
    *   [Link](https://github.com/openai/codex/issues/15684)

6.  **[#9253 [CLOSED] Headless Login Issues**
    *   **Why it matters:** A point of friction for CI/CD users. The CLI failed to login in headless environments unless specific admin settings were toggled. The closure suggests a fix may have been deployed.
    *   [Link](https://github.com/openai/codex/issues/9253)

7.  **[#10601 [OPEN] Sandbox Setup Error on Windows**
    *   **Why it matters:** Windows users continue to face stability issues with the sandbox environment, blocking CLI usage on the platform.
    *   [Link](https://github.com/openai/codex/issues/10601)

8.  **[#8512 [OPEN] Implement Codex Plugins (like Claude)**
    *   **Why it matters:** Users want a plugin system to share "skills" and `agents.md` configurations across teams, mirroring competitor functionality.
    *   [Link](https://github.com/openai/codex/issues/8512)

9.  **[#15565 [OPEN] Hyphenated MCP Server Names Bug**
    *   **Why it matters:** A specific parsing bug causes working MCP servers to appear as having "Tools: (none)" if their name contains a hyphen, breaking tool discovery.
    *   [Link](https://github.com/openai/codex/issues/15565)

10. **[#9544 [OPEN] Remote Compact Task Disconnection**
    *   **Why it matters:** Long-running tasks fail when the stream disconnects during the "compact" phase, losing context and progress.
    *   [Link](https://github.com/openai/codex/issues/9544)

## 4. Key PR Progress

1.  **[#15796] Block Unsafe Git Global Options**
    *   Improves security by preventing git global options (which could redirect config/helpers) from being auto-approved in safe lists.
    *   [Link](https://github.com/openai/codex/pull/15796)

2.  **[#15632] Split JSON Storage for Keyring**
    *   Refactors credential storage to use a shared, generalized keyring format for both OAuth and CLI auth, improving security and maintainability.
    *   [Link](https://github.com/openai/codex/pull/15632)

3.  **[#15798] Avoid Duplicate Auth Refreshes**
    *   Fixes a race condition where authentication tokens could be refreshed twice in a single request, causing intermittent failures.
    *   [Link](https://github.com/openai/codex/pull/15798)

4.  **[#15792] Add Responses Spans & MCP Metrics**
    *   Enhances telemetry by adding explicit spans for HTTP requests and MCP tool calls, allowing for better performance monitoring.
    *   [Link](https://github.com/openai/codex/pull/15792)

5.  **[#15797] Fix MCP Tool Display for Hyphenated Names**
    *   Directly addresses Issue #15565, fixing the sanitization logic that hid tools for servers with hyphens in their names.
    *   [Link](https://github.com/openai/codex/pull/15797)

6.  **[#15531] Add PostToolUse Shell Support**
    *   Expands hook capabilities to allow shell commands to run *after* tool usage, complementing existing PreToolUse hooks.
    *   [Link](https://github.com/openai/codex/pull/15531)

7.  **[#15800] Improve Custom MCP Elicitation**
    *   Improves handling of custom MCP tools, adding "don't ask again" support and ensuring safety checks run correctly in different modes.
    *   [Link](https://github.com/openai/codex/pull/15800)

8.  **[#15197] Codex Apps Sediment File Remapping**
    *   Updates how Codex Apps handle file uploads, bridging local file paths to the OpenAI file upload flow automatically.
    *   [Link](https://github.com/openai/codex/pull/15197)

9.  **[#15561] Add /api-provision Slash Command**
    *   Introduces a CLI command to manage API key provisioning via OAuth, streamlining setup for users bringing their own keys.
    *   [Link](https://github.com/openai/codex/pull/15561)

10. **[#15789] Treat ChatGPT "hc" Plan as Enterprise**
    *   Fixes a bug where a specific "hc" plan type wasn't fetching cloud requirements, treating it correctly as an Enterprise tier.
    *   [Link](https://github.com/openai/codex/pull/15789)

## 5. Feature Request Trends
*   **Plugin Ecosystem:** Demand is growing for a formal plugin architecture (Issue #8512) to facilitate sharing of agent configurations and prompts within teams.
*   **LSP Support:** Auto-detection and management of Language Servers in the CLI (Issue #8745) remains a high-priority request to enable "drop-in" coding agents.
*   **Mobile/Remote Context:** Users are requesting better continuity between desktop sessions and mobile access (Issue #15782).
*   **Custom Request Body Injection:** Advanced users want the ability to inject arbitrary JSON into provider requests (Issue #5458) to toggle vendor-specific features (e.g., Anthropic thinking blocks).

## 6. Developer Pain Points
*   **Credit Consumption Speed:** A significant portion of negative feedback revolves around "drain spikes." Developers feel that recent updates (specifically around `v0.111.0`) and "Fast Mode" defaults make the tool prohibitively expensive to use for routine tasks.
*   **Extension Performance:** The VS Code extension is causing severe performance degradation (CPU spikes > 100%), particularly on macOS and Linux, forcing some users to disable it.
*   **Windows Stability:** Windows users continue to face distinct friction points regarding WSL integration, sandbox setup, and line-ending handling (Issue #4003), creating a fragmented experience compared to Unix-based systems.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-26
**Data Source:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

### 1. Today's Highlights
The team released **v0.36.0-preview.3**, focusing on patch stability. Development activity is heavily concentrated on **Agent-to-Agent (A2A)** protocol reliability and the **Spec-Driven Development (SDD)** workflow, specifically moving task tracking from linear Markdown checklists to a Directed Acyclic Graph (DAG) system. A significant portion of the community discourse today revolves around service stability, with users reporting timeouts and "thinking" loops lasting over 10 minutes.

### 2. Releases
*   **[v0.36.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.3)**
    *   A patch release primarily focused on cherry-picking fix `055ff92` to address stability issues in the preview branch.

### 3. Hot Issues
1.  **[Service Instability: "Thinking" for 10+ mins & Timeouts](https://github.com/google-gemini/gemini-cli/issues/23795)** - *High Impact*
    Users report the CLI becoming unresponsive, timing out constantly, or "thinking" for extended periods. This seems to affect users on the "Gemini Code Assist" plan using Gemini 3 models.
2.  **[Plan Mode Model Switching Failure](https://github.com/google-gemini/gemini-cli/issues/23230)** - *Agent Workflow*
    A regression where the agent fails to switch to `gemini-3-flash-preview` automatically after confirming a plan, requiring manual interruption to trigger the switch.
3.  **[F12 Debug Display Unresponsive on Cloudtop](https://github.com/google-gemini/gemini-cli/issues/23815)** - *P1 Bug*
    The `F12` shortcut to toggle debug logs fails to update the display immediately; logs only appear after subsequent user input (typing text).
4.  **[A2A Server Ignoring "Ask" Policies](https://github.com/google-gemini/gemini-cli/issues/23829)** - *Architecture*
    The A2A server defaults to non-interactive mode in headless environments, causing it to automatically fail tool calls that require user confirmation ("ask" policies) instead of forwarding the request to the calling agent.
5.  **[Confusing UI for Completed Tasks](https://github.com/google-gemini/gemini-cli/issues/23730)** - *UX*
    Completed tasks move to the bottom of the list without clear delineation from pending tasks, causing confusion about the agent's current focus.
6.  **[Annoying Gemini 3 Preview Access Overwrite](https://github.com/google-gemini/gemini-cli/issues/23721)** - *Configuration*
    Users with Gemini 2.5 Pro configurations report the CLI aggressively attempts to upgrade them to the Gemini 3 Preview channel, disrupting established workflows.
7.  **[SDD Phase 3: DAG-based Task Integration](https://github.com/google-gemini/gemini-cli/issues/23320)** - *Roadmap*
    Major architectural shift to replace the manual `plan.md` checkbox system with a native `TrackerService` that handles tasks as a Directed Acyclic Graph.
8.  **[Memory Routing: Global vs. Project Scope](https://github.com/google-gemini/gemini-cli/issues/22819)** - *Feature*
    Proposal to refine the memory subagent to distinguish between user-level preferences (Global `~/.gemini/`) and codebase-specific context (Project `.gemini/`).
9.  **[Model Creating Tmp Scripts in Random Directories](https://github.com/google-gemini/gemini-cli/issues/23571)** - *Hygiene*
    When restricted to shell execution, the model creates temporary edit scripts in unpredictable locations, causing workspace clutter and difficult cleanup.
10. **[Automatic Update Failure UX](https://github.com/google-gemini/gemini-cli/issues/23786)** - *Enhancement*
    Request to improve the error message when auto-updates fail by including the specific npm command needed to manually update the CLI.

### 4. Key PR Progress
1.  **[fix(a2a-server): Execute ask policies in interactive mode](https://github.com/google-gemini/gemini-cli/pull/23831)**
    Fixes a critical misconfiguration where the A2A server failed to forward permission requests to the user because it incorrectly identified itself as purely non-interactive.
2.  **[feat(workspaces): Remote Development Infrastructure](https://github.com/google-gemini/gemini-cli/pull/22714) [Closed]**
    Introduced "Gemini Workspaces," a feature allowing maintainers to offload heavy tasks (builds, reviews) to dedicated GCP workers. While the PR is closed, the infrastructure work is being split into follow-ups (see #23814).
3.  **[feat(cli): Unify session modes in footer](https://github.com/google-gemini/gemini-cli/pull/23508)**
    Refactors the UI to consolidate session mode indicators into a single footer element and reorganizes the composer for better hierarchy.
4.  **[fix(core): Mitigate unbounded buffer growth](https://github.com/google-gemini/gemini-cli/pull/23751)**
    Addresses a severe memory bloat issue where shell execution output chunks were held in unbounded arrays, leading to system crashes during high-volume commands.
5.  **[fix(cli): Allow ask question dialog full window height](https://github.com/google-gemini/gemini-cli/pull/23693)**
    Removes the 15-line constraint on user prompts, allowing the dialog to utilize available terminal height for better readability of long tool calls.
6.  **[SDD: Spec-to-Tracker Bridge & DAG Execution](https://github.com/google-gemini/gemini-cli/issues/23802) [Related PRs]**
    Series of PRs (including logic for `tracker_list_tasks`) refactoring `/spec:implement` to use dynamic, dependency-aware task execution rather than linear parsing.
7.  **[feat(sandbox): Dynamic Linux sandbox expansion](https://github.com/google-gemini/gemini-cli/pull/23692)**
    Brings Linux sandboxing up to par with macOS Seatbelt, adding support for dynamic path resolution and Git worktrees.
8.  **[refactor(core): Improve ignore resolution](https://github.com/google-gemini/gemini-cli/pull/23816)**
    Fixes a bug in `GitIgnoreParser` where hierarchical traversal logic failed to correctly match directories, improving file watching performance.
9.  **[feat(acp): Separate storage for allow settings](https://github.com/google-gemini/gemini-cli/pull/23818)**
    Fixes a persistence bug where tool permissions ("Allow and Save Permanent") failed to stick between sessions in isolated IDE configurations.
10. **[feat(cli): Enable notifications cross-platform](https://github.com/google-gemini/gemini-cli/pull/21618)**
    Removes the macOS-only restriction on notifications, enabling the terminal bell fallback and OSC 9 notifications for Linux/Windows users.

### 5. Feature Request Trends
*   **Spec-Driven Development (SDD) Enhancements:** Strong momentum towards treating tasks as graph nodes (DAG) rather than list items, allowing for parallel execution and better dependency management.
*   **Context-Aware Memory:** Users want the agent to intelligently separate "who I am" (global preferences) from "what I'm working on" (project facts).
*   **AST-Aware Tooling:** Investigations are underway (#22745) to move from regex-based text manipulation to Abstract Syntax Tree (AST) aware file reads, reducing token noise and improving code edit precision.
*   **UI/UX Refinement:** Requests for better visual delineation in the UI (task completion, dependency trees) and more expansive use of terminal real estate (full-height dialogs).

### 6. Developer Pain Points
*   **Latency & Stability:** Users are experiencing significant lag and timeouts, specifically when the CLI enters extended "thinking" states without fallback or recovery.
*   **Model Selection Friction:** The CLI's aggressive attempt to default to "Preview" models is disrupting users who wish to remain on stable Pro versions.
*   **Workspace Pollution:** The agent's tendency to generate temporary scripts in random directories makes version control and workspace hygiene difficult to maintain.
*   **Interrupt Handling:** Ongoing work (#21683) highlights continued struggles with handling `Ctrl+C` and `Escape` reliably during shell execution and chat compression.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-26

## 1. Today's Highlights
Version **v1.0.12-0** was released, introducing support for Claude-specific configuration files (`.claude/settings.json`) and a revamped full-screen model picker with inline reasoning adjustments. On the community front, friction remains high regarding **MCP server visibility** and **rate limiting errors**, while keyboard layout issues (German `@` key and `SHIFT+ENTER` behavior) continue to frustrate international and power users.

## 2. Releases

### **v1.0.12-0**
*   **Configuration:** Added support for reading `.claude/settings.json` and `.claude/settings.local.json` as additional repository config sources.
*   **UI/UX:** The model picker now opens in a full-screen view. Users can adjust reasoning effort inline using `←` / `→` arrow keys.
*   **Telemetry:** OpenTelemetry (OTEL) hook executions are now recorded as span events rather than child spans, reducing telemetry noise.

## 3. Hot Issues

1.  **[OPEN] macOS Gatekeeper Blocking Copilot CLI ([#970](github/copilot-cli Issue #970))**
    *   **Why it matters:** This is the highest-upvoted issue of the day (+18). Users installing via HomeBrew on macOS face repeated "malware" verification blocks under corporate security policies, disrupting workflow significantly.
2.  **[OPEN] MCP Servers Disappearing from Org Registry ([#2236](github/copilot-cli Issue #2236))**
    *   **Why it matters:** A critical regression for enterprise users. MCP servers configured via organization registries are vanishing, replaced by a false warning that they are "disabled by policy," breaking established automation workflows.
3.  **[OPEN] SHIFT + ENTER Executes Prompt Instead of Line Break ([#1481](github/copilot-cli Issue #1481))**
    *   **Why it matters:** The highest-commented thread (+12 comments). The deviation from standard chat behavior (where Shift+Enter creates a new line) is causing frequent accidental prompt submissions.
4.  **[OPEN] German Keyboard Layout Cannot Type `@` Symbol ([#1999](github/copilot-cli Issue #1999))**
    *   **Why it matters:** A blocking usability bug for German users. The `Alt-Gr + Q` combination fails to register, making it impossible to use mentions or email addresses within the CLI.
5.  **[OPEN] Transient API Errors and Aggressive Rate Limiting ([#2101](github/copilot-cli Issue #2101))**
    *   **Why it matters:** Users report hitting rate limits even with substantial quota remaining (also echoed in [#2289](github/copilot-cli Issue #2289)), often triggered by transient API errors that force retries.
6.  **[OPEN] Over-Permissioned OAuth Scope Request ([#953](github/copilot-cli Issue #953))**
    *   **Why it matters:** Security-conscious users are concerned that the CLI requests Read/Write access to *all* repositories and account data, even when working within a single scope.
7.  **[OPEN] `/ide` Fails to Detect VS Code Workspaces ([#1723](github/copilot-cli Issue #1723))**
    *   **Why it matters:** The integration hook `/ide` fails to find active workspaces on fresh macOS installs, preventing the CLI from interacting with the VS Code environment.
8.  **[OPEN] `CTRL+C` Conflicts with UI Cancel Prompts ([#1422](github/copilot-cli Issue #1422))**
    *   **Why it matters:** The UI states `ESC` cancels operations, but `CTRL+C` also triggers cancellation. This catches users off guard, as `CTRL+C` is often habitually used to clear input rather than kill the process.
9.  **[OPEN] Model Support Request: Gemini 3.1 Pro ([#1664](github/copilot-cli Issue #1664))**
    *   **Why it matters:** High community interest (+16 votes) in expanding model support to Google's latest Gemini iteration.
10. **[OPEN] GPT Models Fail on MCP Schemas Without Properties ([#2223](github/copilot-cli Issue #2223))**
    *   **Why it matters:** A schema compatibility bug where GPT models return a 400 error if the MCP schema is a generic `object` without defined properties, whereas Claude handles it correctly.

## 4. Key PR Progress
*No active Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends
*   **Plugin Management:** Users are requesting a "Update All" feature for plugins ([#2296](github/copilot-cli Issue #2296)) and startup alerts for outdated plugins ([#2295](github/copilot-cli Issue #2295)) to improve maintenance workflows.
*   **Session Management:** A request for `/rename` to auto-generate session titles based on context ([#2292](github/copilot-cli Issue #2292)) aims to reduce manual friction.
*   **Visual Accessibility:** Requests for visual differentiation of user input text ([#2288](github/copilot-cli Issue #2288)) suggest users want better readability similar to competitor CLI tools (e.g., Claude Code).
*   **Licensing:** Inquiries from Linux distro maintainers ([#2294](github/copilot-cli Issue #2294)) indicate a desire for broader, native distribution via package managers like Arch Linux.

## 6. Developer Pain Points
*   **Rate Limiting Logic:** Users express frustration at receiving rate-limit errors while the dashboard shows remaining quota ([#2289](github/copilot-cli Issue #2289)), coupled with the fact that error messages themselves consume rate limit tokens.
*   **Context Retention:** Developers report that when "steering" the agent (correcting it mid-task), the CLI tends to lose the original objective and drift into unrelated solutions ([#2248](github/copilot-cli Issue #2248)).
*   **Enterprise Configuration:** Issues with `enabledPlugins` failing to auto-install ([#2249](github/copilot-cli Issue #2249)) and `--config-dir` silently ignoring agent instructions ([#2281](github/copilot-cli Issue #2281)) are breaking automation reliability.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-26

## 1. Today's Highlights

Kimi Code CLI version **1.26.0** has been released, officially marking the **Plugin System as Beta** and introducing a robust **Hooks System** for lifecycle customization. This update brings significant stability improvements, including automatic retry mechanisms for unstable networks and real-time streaming for background tasks. The community is actively engaging with the new plugin architecture while pushing for enhanced keyboard customization and persistent memory features.

## 2. Releases

### Version 1.26.0
- **Plugin System:** Documentation updated to mark the plugin system as beta ([#1558](https://github.com/MoonshotAI/kimi-cli/pull/1558))
- **Terminal Handling:** Replaced removed `acp.TerminalHandle` with Client terminal methods ([#1400](https://github.com/MoonshotAI/kimi-cli/pull/1400))
- **YOLO Mode:** Fixed auto-resolve for `QuestionRequest` in yolo mode

## 3. Hot Issues

| Issue | Description | Why It Matters |
|-------|-------------|----------------|
| [#1566 - Plugin System Questions](https://github.com/MoonshotAI/kimi-cli/issues/1566) | Users question compatibility with Claude Code/Open Code plugins and installation methods | High interest in the newly released beta plugin system; clarification needed on ecosystem interoperability |
| [#1375 - File Mentions Bug](https://github.com/MoonshotAI/kimi-cli/issues/1375) | `@` file mentions cannot find files since v1.18.0 | Core workflow feature broken for weeks; impacts daily productivity |
| [#1585 - Shift+Enter Newline](https://github.com/MoonshotAI/kimi-cli/issues/1585) | Request for customizable newline keybinding (Shift+Enter) | Strong user frustration with current `Ctrl+J` behavior; muscle memory from other IDEs |
| [#1283 - Memory System](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Request for persistent context across sessions | Highly requested feature for maintaining project patterns and user preferences |
| [#1570 - Edit Tool Stuck](https://github.com/MoonshotAI/kimi-cli/issues/1570) | Edit tool consistently hangs in v1.25.0 | Critical usability blocker on Linux systems |
| [#1572 - Invalid Web Tools](https://github.com/MoonshotAI/kimi-cli/issues/1572) | `SearchWeb` and `FetchURL` tools reported as invalid | Web capabilities broken in latest version |
| [#1583 - Task Queuing](https://github.com/MoonshotAI/kimi-cli/issues/1583) | Request for input queuing instead of interrupting running tasks | UX improvement to match Claude Code behavior |
| [#1334 - JetBrains IDE Issue](https://github.com/MoonshotAI/kimi-cli/issues/1334) | Kimi unavailable in JetBrains IDE | Integration broken for JetBrains users |
| [#1574 - Custom Keyboard Shortcuts](https://github.com/MoonshotAI/kimi-cli/issues/1574) | Comprehensive request for customizable keybindings | Multiple users echoing need for keybinding flexibility |
| [#1569 - Web-to-CLI Queue Sync](https://github.com/MoonshotAI/kimi-cli/issues/1569) | Web queued messages lost on disconnect/refresh | Data loss issue affecting web interface reliability |

## 4. Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| [#1561 - Hooks System](https://github.com/MoonshotAI/kimi-cli/pull/1561) | OPEN | **Major Feature:** Adds 13 lifecycle hook events (PreToolUse, PostToolUse, etc.) aligning with Claude Code's hooks architecture |
| [#1578 - Skills Multi-path](https://github.com/MoonshotAI/kimi-cli/pull/1578) | MERGED | `--skills-dir` now supports multiple appendable paths instead of override |
| [#1544 - Network Retry](https://github.com/MoonshotAI/kimi-cli/pull/1544) | MERGED | Adds retry logic for protocol errors and 504 Gateway Timeout during streaming |
| [#1580 - JSON Parsing Fix](https://github.com/MoonshotAI/kimi-cli/pull/1580) | MERGED | Uses `json.loads(strict=False)` to handle LLM output with control characters |
| [#1579 - Shell Subprocess Fix](https://github.com/MoonshotAI/kimi-cli/pull/1579) | MERGED | Prevents shell subprocess hangs on interactive prompts by closing stdin |
| [#1576 - Background Task Streaming](https://github.com/MoonshotAI/kimi-cli/pull/1576) | MERGED | Real-time streaming of background agent output to fix empty `/task` display |
| [#1571 - Auto-trigger on Task Completion](https://github.com/MoonshotAI/kimi-cli/pull/1571) | MERGED | Agent automatically triggers when background tasks complete while idle |
| [#1581 - MCP Debug Noise Fix](https://github.com/MoonshotAI/kimi-cli/pull/1581) | MERGED | Redirects stderr before MCP loading to prevent console pollution |
| [#1512 - ACP Authentication Rewrite](https://github.com/MoonshotAI/kimi-cli/pull/1512) | OPEN | Complete authentication system supporting terminal login and OAuth Device Flow |
| [#1573 - Web Workspace Panel](https://github.com/MoonshotAI/kimi-cli/pull/1573) | OPEN | Adds expandable file panel to web interface for viewing/downloading workspace files |

## 5. Feature Request Trends

1. **Keyboard Customization** - Overwhelming demand for `Shift+Enter` newline insertion and general keybinding customization to match VS Code/JetBrains/Cursor conventions
2. **Persistent Memory System** - Strong interest in AI-managed context that survives across sessions for project patterns and preferences
3. **Task Queue Management** - Request for non-blocking input queuing during task execution (like Claude Code)
4. **Plugin Ecosystem Compatibility** - Clarification and support for Claude Code/Open Code plugin compatibility

## 6. Developer Pain Points

- **Unstable Network Handling:** Users on mobile hotspots or high-latency connections experienced crashes until recent retry fixes (now addressed in v1.26.0)
- **TTY/Shell Conflicts:** Multiple reports of terminal hangs when shell subprocesses compete for TTY input
- **JSON Parsing Fragility:** LLM-generated content with control characters caused tool execution failures
- **MCP Console Pollution:** OAuth MCP servers spammed debug messages to console during startup
- **Edit Tool Reliability:** Reports of edit tool getting stuck, particularly on Linux platforms

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-26

## Today's Highlights

OpenCode shipped **v1.3.2** with heap snapshot debugging capabilities, following **v1.3.1** which added Poe OAuth support, Amazon Bedrock token caching, and syntax highlighting for Kotlin, HCL, Lua, and TOML. The community is actively discussing voice input features, multi-provider compatibility issues, and architectural improvements for message queuing and subagent permissions.

---

## Releases

### v1.3.2
- **Heap Snapshot Functionality**: New "Write heap snapshot" command captures memory snapshots for both TUI (`tui.heapsnapshot`) and server (`server.heapsnapshot`) processes — invaluable for debugging memory leaks and performance issues.

### v1.3.1
- **Poe Authentication Provider**: Built-in OAuth and API key support for Poe (#18477)
- **Amazon Bedrock Token Caching**: Enabled for custom providers, reducing costs and latency (#18959)
- **Extended Syntax Highlighting**: Added support for Kotlin, HCL, Lua, and TOML files (#18198)
- **Theme Mode Lock**: Manual lock/unlock capability for theme preferences

---

## Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#4695](https://github.com/anomalyco/opencode/issues/4695) | **Speech-to-Text Voice Input** | Top-voted feature request (117 👍) for hands-free coding. Community actively collaborating on implementation approaches. |
| [#11753](https://github.com/anomalyco/opencode/issues/11753) | **GitHub Copilot Premium Request Consumption** | Users report Copilot consuming multiple premium requests per session during context switches — critical cost concern for enterprise users. |
| [#10567](https://github.com/anomalyco/opencode/issues/10567) | **"opencode" → "Claude" String Replacement Bug** | Anthropic models trigger global string replacement in directory paths, breaking file references. Fixed but highlights provider-specific edge cases. |
| [#14970](https://github.com/anomalyco/opencode/issues/14970) | **SQLite Corruption on NFS with Concurrent Sessions** | Multiple sessions on NFS-mounted drives corrupt the shared database — blocking issue for shared development environments. |
| [#1549](https://github.com/anomalyco/opencode/issues/1549) | **File Watch for Inline Instructions** | Aider-style `--watch-files` feature request (26 👍) for comment-driven AI edits during active coding. |
| [#4287](https://github.com/anomalyco/opencode/issues/4287) | **Granular File Permissions for Agents** | Request for glob-based deny/allow/ask permissions per agent — essential for multi-agent workflows with documentation or test agents. |
| [#11413](https://github.com/anomalyco/opencode/issues/11413) | **Gemini/Vertex AI Schema Incompatibility** | Built-in "question" tool's JSON schema triggers 400 errors with Google models — cross-provider compatibility gap. |
| [#14026](https://github.com/anomalyco/opencode/issues/14026) | **Ollama Models Not Executing Tool Calls** | Local models (qwen2.5-coder, ministral) output tool calls but don't execute them — blocking local-first development. |
| [#16102](https://github.com/anomalyco/opencode/issues/16102) | **Message Queue Interruption** | Queued messages interrupt running tasks, causing lost context. PR #19156 proposes queuing prompts for next LLM call instead. |
| [#19101](https://github.com/anomalyco/opencode/issues/19101) | **Subagent Todo Tool Permissions** | Documentation claims `todowrite`/`todoread` can be enabled for subagents, but hardcoded denial prevents it. Fix merged in PR #19125. |

---

## Key PR Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#18433](https://github.com/anomalyco/opencode/pull/18433) | **AI SDK v6 Support** | OPEN | Major infrastructure upgrade to AI SDK v6 — blocked by upstream GitLab MR. Critical for future model compatibility. |
| [#18753](https://github.com/anomalyco/opencode/pull/18753) | **Multi-Agent Team Coordination** | OPEN | Adds primitives for lead agent to orchestrate parallel subagent teams — addresses multiple coordination feature requests. |
| [#19156](https://github.com/anomalyco/opencode/pull/19156) | **Queue Pending Prompts** | MERGED | Implements non-interrupting message queuing — prompts inject at next LLM call instead of disrupting active tasks. |
| [#19125](https://github.com/anomalyco/opencode/pull/19125) | **Fix Subagent Todo Permissions** | MERGED | Removes hardcoded denial, enabling `todowrite`/`todoread` via agent permission config. |
| [#19163](https://github.com/anomalyco/opencode/pull/19163) | **Windows Git Spawn Fix** | OPEN | Replaces `NodeChildProcessSpawner` with `CrossSpawnSpawner` for proper Windows `.cmd` path quoting. |
| [#19173](https://github.com/anomalyco/opencode/pull/19173) | **PWA Support** | OPEN | Adds Progressive Web App capabilities for installable, app-like web experience. |
| [#18767](https://github.com/anomalyco/opencode/pull/18767) | **Mobile Touch Optimization** | OPEN | Touch-friendly UI improvements while preserving desktop experience. |
| [#16504](https://github.com/anomalyco/opencode/pull/16504) | **Bedrock Prompt Caching** | OPEN | Extends caching to custom ARNs and inference profiles for Claude/Nova models. |
| [#19154](https://github.com/anomalyco/opencode/pull/19154) | **Gemini Schema Fix** | MERGED | Decouples internal Zod schemas from LLM tool definitions, fixing Gemini 400 errors. |
| [#19139](https://github.com/anomalyco/opencode/pull/19139) | **Effectify Config Service** | OPEN | Migrates Config to Effect service runtime with per-instance state — architectural refactoring for better testability. |

---

## Feature Request Trends

1. **Voice/Audio Input** — Strong demand for speech-to-text (#4695) enabling hands-free prompting
2. **Granular Permissions** — File-level and agent-specific access controls using glob patterns (#4287)
3. **Local-First Model Support** — Better Ollama integration and local model tool execution (#14026)
4. **Watch-Mode Workflows** — Aider-style file watching for inline comment instructions (#1549)
5. **Multi-Agent Orchestration** — Team coordination primitives for parallel subagent workflows (#18753)
6. **Mobile/PWA Experience** — Touch optimization and installable web app (#18767, #19173)
7. **Provider Parity** — Consistent behavior across Anthropic, OpenAI, Gemini, Mistral, and local models

---

## Developer Pain Points

- **Premium Request Waste**: GitHub Copilot consuming extra requests during session switches (#11753) — direct cost impact
- **Cross-Provider Schema Fragility**: Tool schemas work for some providers but break others (#11413, #19115) — reliability concern
- **Windows Platform Gaps**: Path quoting, package installation failures, and temp file accumulation (#19163, #8023, #6523)
- **Concurrent Session Limitations**: SQLite corruption on shared storage (#14970) — blocks team workflows
- **Interrupt-Driven UX**: Messages disrupting active tasks (#16102) — now addressed by merged PR #19156
- **Documentation/Config Mismatches**: Features documented but non-functional (#19101) — trust erosion

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-03-26

## 1. Today's Highlights
The community sees the release of **v0.14.0-preview.0**, alongside active development on v0.15.0 features like the new `/loop` command for automation. A major focus is on **process management stability**, with multiple PRs addressing orphan ACP processes in VSCode and connection reliability. Additionally, **permission system improvements** are underway to fix Windows path persistence issues and enhance UX with human-readable labels.

## 2. Releases
*   **v0.14.0-preview.0**: A new preview release is available.
    *   [Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.13.0...v0.14.0-preview.0)
*   **v0.13.0-nightly.20260325.3776825c2**:
    *   **Fix**: Added support for non-GitHub git URLs for extension installation.
    *   **New Contributor**: Welcome @d191!

## 3. Hot Issues
1.  **[OPEN] Answers not saving in one session (#2640)**
    *   Users report that permission decisions (e.g., "Always allow in this project") are not persisting, causing the CLI to re-prompt endlessly. This is a high-priority UX blocker affecting workflow continuity.
2.  **[CLOSED] QWEN CLI crashes on Linux permission request (#2626)**
    *   Critical bug where the shell crashes with "Terminated" during permission prompts on Ubuntu Server within `tmux`. Users confirmed rolling back to v0.12.6 fixes it.
3.  **[OPEN] VSCode orphan processes after tab close (#2665)**
    *   Closing a chat tab in VSCode fails to terminate the ACP child process, leaving orphans that consume resources until the IDE is fully closed.
4.  **[OPEN] `web_fetch` returns AI greeting instead of content (#2609)**
    *   The tool is returning irrelevant AI-generated text instead of actual web page content when using specific APIs (e.g., Bailian Coding Plan), rendering the tool unreliable.
5.  **[OPEN] Global Skills `read_file` blocked outside workspace (#2543)**
    *   Skills stored globally in `~/.qwen/skills/` cannot reference their own documentation files if they reside outside the current project workspace due to security sandboxing.
6.  **[OPEN] Feature: Add `/loop` command (#2638)**
    *   High-interest feature request for a `/loop` slash command to execute periodic tasks (e.g., CI monitoring), enabling hands-off automation workflows.
7.  **[OPEN] ACP Mode: Tool call not found in Zed (#1131)**
    *   Persistent integration issues with the Zed editor where tool calls are not found, highlighting instability in third-party IDE integrations.
8.  **[OPEN] Context not cleared on "New Session" (#2621)**
    *   Confusion in the VSCode plugin where clicking "New Session" does not reset the context window usage, leading users to hit context limits unexpectedly.
9.  **[OPEN] Manual `/compress` command failure (#2647)**
    *   Users report that manual compression fails when history is near the context limit, whereas the automatic compression mechanism works correctly.
10. **[OPEN] `Debug mode enabled` cannot be disabled (#2660)**
    *   Users are unable to find a configuration to turn off persistent "Debug mode enabled" logging messages, cluttering the output.

## 4. Key PR Progress
1.  **feat(cli): add /loop command (#2643)**
    *   Implements the `/loop` command for periodic task execution with `LoopManager` integration, targeting v0.15.0.
2.  **fix: prevent orphan ACP processes on tab close (#2662)**
    *   Comprehensive fix that cleans up MCP subprocesses and handles VSCode `onDispose` events to ensure ACP processes die with the tab.
3.  **Fix permission persistence failure (Windows) (#2670)**
    *   Addresses Issue #2640 by correcting case-sensitive path comparisons on Windows (case-insensitive OS).
4.  **feat(vscode): add retry logic and auto-reconnect for ACP (#2666)**
    *   Improves VSCode extension stability by adding exponential backoff retries and auto-reconnect logic for the ACP connection.
5.  **fix: resolve `/clear` command and ESC key lag (#2656)**
    *   Performance optimization removing unnecessary blocking `await` calls in the hooks system that caused UI lag.
6.  **feat(channels): add Telegram and WeChat support (#2628)**
    *   Exciting new feature allowing Qwen Code to interact via messaging platforms using the Agent Client Protocol.
7.  **feat(auth): implement Alibaba Cloud Standard API Key support (#2668)**
    *   Adds a dedicated auth flow for Alibaba Cloud API keys with region selection, separating them from generic OpenAI-compatible keys.
8.  **fix: improve /compress split point selection (#2659)**
    *   Fixes manual compression failures by recognizing tool call boundaries as valid split points.
9.  **refactor: replace shell-utils string parsing with tree-sitter AST (#2652)**
    *   Major refactoring to use tree-sitter for shell parsing, significantly improving robustness for complex commands (heredocs, nested constructs).
10. **fix: change default context filename to AGENTS.md (#2654)**
    *   Aligns with community standards by switching the default context file from `QWEN.md` to `AGENTS.md` (backward compatible).

## 5. Feature Request Trends
*   **Automation & Agents**: Strong demand for autonomous behaviors, specifically the `/loop` command for monitoring and periodic execution.
*   **IDE & Protocol Stability**: Frequent requests for better handling of "orphan" processes and robust reconnection logic in VSCode and third-party clients (Zed).
*   **Authentication UX**: Requests for more granular auth options, specifically separating Alibaba Cloud specific flows from generic API keys.
*   **Context Management**: Users want more control over context limits, including better manual compression and session clearing mechanisms.
*   **Platform Integration**: Interest in integrating Qwen Code into messaging channels (Telegram/WeChat) and local CI/CD systems (Alibaba Cloud Yunxiao).

## 6. Developer Pain Points
*   **Permission System Friction**: The transition in v0.13.0 introduced regressions where permissions don't persist (especially on Windows), causing constant interruptions.
*   **Process Hygiene**: Developers are frustrated by background processes that don't clean up after the IDE or tab is closed, leading to resource leaks.
*   **Tool Reliability**: Core tools like `web_fetch` and `read_file` (in global skills) are hitting edge cases that break basic functionality.
*   **Performance Hiccups**: UI lag on simple actions like `/clear` or `ESC` disrupts the coding flow.

</details>