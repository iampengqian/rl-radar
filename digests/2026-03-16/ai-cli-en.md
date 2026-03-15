# AI CLI Tools Community Digest 2026-03-16

> Generated: 2026-03-15 22:03 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Report
**Date:** 2026-03-16 | **Analyst:** Senior Technical Analyst

---

## 1. Ecosystem Overview

The AI CLI tools landscape is undergoing rapid maturation, shifting from novelty coding assistants to production-grade agentic systems capable of autonomous multi-step workflows. A clear industry-wide standardization effort is emerging around cross-tool configuration files (`AGENTS.md`), signaling vendors' recognition that developer lock-in through proprietary context files is unsustainable. Meanwhile, all major tools are grappling with similar growing pains: terminal UI stability, session persistence, and resource management (particularly memory leaks and token consumption). The competitive differentiator is shifting from model quality—now table stakes—to infrastructure reliability, extensibility, and developer experience polish.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Notable Signal |
|------|-------------|-----------|----------------|----------------|
| **Claude Code** | 10+ tracked | 6 (light) | No release | 3,217 👍 on `AGENTS.md` feature request |
| **OpenAI Codex** | 10+ tracked | 20 active | No release | Heavy architectural refactoring (TUI → app-server) |
| **Gemini CLI** | 10 tracked | 10 active | No release | "Epic" session continuity workstream |
| **GitHub Copilot CLI** | 10 tracked | 0 | No release | v1.0.5 regression backlash |
| **Kimi Code CLI** | 4 active | 3 active | No release | ACP 0.8 migration in progress |
| **OpenCode** | 10+ tracked | 10+ active | No release | 20+ contributors on memory leak crisis |
| **Qwen Code** | 10 tracked | 10+ active | **v0.12.3-nightly** | Only tool to ship today |

**Key Finding:** Qwen Code is the only tool to ship a release today, indicating a faster iteration cadence. OpenAI Codex has the most active PR pipeline (20), suggesting a major version may be imminent.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Requirements |
|-----------|---------------|----------------------|
| **Cross-Tool Context Standardization** | Claude Code, Qwen Code | `AGENTS.md` as universal agent context file (Claude: 3,217 👍); portable chat history (Qwen: #2373) |
| **Session Persistence & Portability** | Claude Code, Gemini CLI, GitHub Copilot CLI, Qwen Code | Conversation history that survives restarts; project-local storage for Git sync; session resume without data loss |
| **Context/Token Management** | OpenAI Codex, Gemini CLI | Manual `/compact` command for context compression; visibility into token consumption; guided context pruning |
| **Remote & Cross-Device Control** | OpenAI Codex, Qwen Code | Mobile app control of local CLI; HTTP/WebSocket interfaces for headless operation |
| **Background Agent Notifications** | OpenAI Codex, GitHub Copilot CLI | Audio alerts; system notifications when long tasks complete |
| **Undo/Checkpoint Mechanisms** | Qwen Code, Claude Code | Code rollback to restore state after agent mistakes |
| **Local/Alternative Model Support** | Qwen Code, OpenCode | LM Studio, Ollama integration; OpenRouter compatibility |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Enterprise integration, VS Code synergy | Professional developers, teams | Proprietary `CLAUDE.md` context; strong VS Code extension; Max subscription tier with 1M context |
| **OpenAI Codex** | Architectural unification | VS Code + CLI power users | Aggressive TUI→app-server refactor to align extension and CLI; background process management |
| **Gemini CLI** | Agent stability for long-running tasks | Complex workflow automation | "Session Continuity" Epic; Plan Mode with approval gates; DAP debugging integration |
| **GitHub Copilot CLI** | GitHub ecosystem integration | GitHub-native developers | Fine-grained PAT permissions; worktree lifecycle management; tight GitHub.com integration |
| **Kimi Code CLI** | Multi-IDE support | Polyglot IDE users | ACP (AI Assistant Protocol) standard; JetBrains + VS Code support |
| **OpenCode** | Open-source, multi-provider | Privacy-conscious, tinkerers | Multi-model support (Claude, Gemini, Copilot); plugin hooks; community-driven fixes |
| **Qwen Code** | Customization & local inference | Power users, non-English markets | System prompt override; local model support; multilingual handling |

**Key Differentiator:** Claude Code and OpenAI Codex are betting on integrated proprietary ecosystems, while OpenCode and Qwen Code are pursuing extensibility and multi-provider flexibility.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Characteristics |
|------|-------|-----------------|
| **High Momentum, Mature** | **Claude Code**, **OpenAI Codex** | Large communities (3,000+ reactions on top issues); enterprise traction; active vendor engagement; architectural investments signaling long-term commitment |
| **Active, Stabilizing** | **Gemini CLI**, **GitHub Copilot CLI** | Steady engagement; focused on reliability over features; dealing with regression backlash (Copilot v1.0.5) |
| **Rapid Iteration, Growing** | **Qwen Code**, **OpenCode** | Fastest release cadence (Qwen shipped today); community-driven debugging (OpenCode: 20+ contributors on memory leak); addressing fundamental stability |
| **Niche/Emerging** | **Kimi Code CLI** | Smaller community; focused on specific integrations (ACP, JetBrains); cross-platform compatibility as primary concern |

**Maturity Indicator:** The nature of top issues shifts from "feature requests" (mature tools) to "startup/crash bugs" (emerging tools). Claude Code's top issue is a feature request; OpenCode's is a memory leak.

---

## 6. Trend Signals

### 🔮 Industry Directions

| Signal | Implication | Evidence |
|--------|-------------|----------|
| **`AGENTS.md` Standardization Push** | Industry moving toward portable agent configuration; vendor lock-in via proprietary context files will become competitive disadvantage | Claude Code #6235 (3,217 👍); Qwen Code #2373 |
| **Terminal UI Fragility is Universal** | TUI development remains a cross-platform challenge; all tools report flickering, scrolling, or rendering bugs | Copilot #1202, #2053; Gemini #21688; Kimi #1440 |
| **Background/Agent Mode is the Future** | All tools are building toward autonomous, long-running agents requiring notifications, process management, and session continuity | Codex `/stop` PR; Copilot background notifications; Gemini "Session Continuity" Epic |
| **Token Anxiety is Real** | Users demand visibility and control over consumption; uncached prompts and verbose system messages are financial friction | Codex #14593 (63 comments); Gemini phantom usage #22493 |
| **Windows is a Second-Class Citizen** | Consistent pattern of Windows-specific bugs, sandbox errors, and terminal incompatibilities across all tools | Codex #10601, #6062; Kimi #1436; Qwen #2401, #2286 |
| **Memory Management Separation** | Tools bifurcating: mature tools optimize token usage; emerging tools still fixing RAM leaks | OpenCode crisis (#16697) vs. Codex app-server optimization |

### 📌 Actionable Intelligence for Developers

1. **For Team Adoption:** Claude Code and OpenAI Codex offer the most polished enterprise-ready experiences, but budget for token consumption monitoring.
2. **For Customization Needs:** Qwen Code and OpenCode provide deeper control over system prompts and model selection.
3. **For Windows Teams:** Expect friction across all tools; allocate extra onboarding time for terminal configuration.
4. **For Agentic Workflows:** All tools are actively building background agent support—this is the 2026 development paradigm.
5. **For Vendor Neutrality:** Consider pushing `AGENTS.md` adoption internally to future-proof tool switching costs.

---

*Report generated from 7 repositories, 60+ issues, and 60+ PRs analyzed.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Analysis Date:** 2026-03-16

---

## 1. Top Skills Ranking

The most-discussed Pull Requests reveal a community focused on document quality, meta-tooling, and external integrations.

| Rank | Skill | Author | Status | Key Focus |
|:---|:---|:---|:---|:---|
| 1 | [**document-typography** #514](https://github.com/anthropics/skills/pull/514) | @PGTBoos | OPEN | Typographic quality control for AI-generated documents (orphans, widows, alignment) |
| 2 | [**skill-quality-analyzer & skill-security-analyzer** #83](https://github.com/anthropics/skills/pull/83) | @eovidiu | OPEN | Meta-skills for evaluating Skill quality across 5 dimensions & security auditing |
| 3 | [**frontend-design** #210](https://github.com/anthropics/skills/pull/210) | @justinwetch | OPEN | Improved clarity and actionability for UI/UX generation guidance |
| 4 | [**shodh-memory** #154](https://github.com/anthropics/skills/pull/154) | @varun29ankuS | OPEN | Persistent context/memory system for AI agents across conversations |
| 5 | [**masonry-generate-image-and-videos** #335](https://github.com/anthropics/skills/pull/335) | @junaid1460 | OPEN | AI media generation via Masonry CLI (Imagen 3.0, Veo 3.1) |
| 6 | [**ODT (OpenDocument) Skill** #486](https://github.com/anthropics/skills/pull/486) | @GitHubNewbie0 | OPEN | Create, fill templates, and parse `.odt` files (LibreOffice/ISO standard) |
| 7 | [**codebase-inventory-audit** #147](https://github.com/anthropics/skills/pull/147) | @p19dixon | OPEN | Detect orphaned code, unused files, and documentation gaps |
| 8 | [**Buildr - Telegram Bridge** #419](https://github.com/anthropics/skills/pull/419) | @hirodefi | OPEN | Control Claude Code sessions remotely via Telegram bot |

**Discussion Highlights:**
- **Typography (#514)** addresses a universal pain point—AI-generated documents frequently suffer from formatting issues users don't explicitly request fixes for.
- **Meta-analyzers (#83)** represent a maturing ecosystem where developers want tools to evaluate and secure Skills themselves.
- **Persistent memory (#154)** tackles the fundamental limitation of stateless AI conversations.

---

## 2. Community Demand Trends

Analysis of Issues reveals these anticipated directions:

| Trend | Description | Evidence |
|:---|:---|:---|
| **Agent Governance & Safety** | Patterns for policy enforcement, threat detection, and audit trails for AI agents | [Issue #412](https://github.com/anthropics/skills/issues/412) |
| **MCP Integration** | Exposing Skills as Model Context Protocol tools for standardized APIs | [Issue #16](https://github.com/anthropics/skills/issues/16) |
| **Enterprise/SSO Compatibility** | Skills must work without `ANTHROPIC_API_KEY` for SSO users | [Issue #532](https://github.com/anthropics/skills/issues/532) |
| **Duplicate Skill Resolution** | Better namespacing to prevent plugin overlap | [Issue #189](https://github.com/anthropics/skills/issues/189) |
| **AWS Bedrock Support** | Native compatibility with Bedrock deployments | [Issue #29](https://github.com/anthropics/skills/issues/29) |

---

## 3. High-Potential Pending Skills

Active PRs likely to merge soon based on engagement and utility:

| PR | Skill | Why It Matters |
|:---|:---|:---|
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves a ubiquitous, often-overlooked problem; recently updated (Mar 13) |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT Support** | Opens enterprise/government document workflows; actively discussed |
| [#154](https://github.com/anthropics/skills/pull/154) | **shodh-memory** | High community interest in persistent agent context |
| [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design v2** | Refines an already-popular capability; updated Mar 7 |
| [#362](https://github.com/anthropics/skills/pull/362) | **UTF-8 Fix for skill-creator** | Critical bug fix for international users; targets validation tooling |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for document quality control and persistent agent memory—reflecting a shift from "what can Claude generate" to "how reliably can it produce production-ready, context-aware outputs."**

---

# Claude Code Community Digest
**Date:** 2026-03-16

---

## 1. Today's Highlights

No new releases were published in the last 24 hours. Community attention remains focused on **authentication issues affecting macOS users** (multiple OAuth-related bugs) and a major **feature request for `AGENTS.md` support** that has garnered over 3,200 👍 reactions. Several bug fixes are in progress via open PRs, including a critical patch for unbounded task output file growth.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| 1 | [#6235](https://github.com/anthropics/claude-code/issues/6235) - **Support AGENTS.md** | Industry-wide standardization effort. `AGENTS.md` is emerging as a universal coding agent context file (Codex, Amp, Cursor support it). Current `CLAUDE.md` creates vendor lock-in. | **3,217 👍**, 242 comments. Highly demanded. |
| 2 | [#34229](https://github.com/anthropics/claude-code/issues/34229) - **Phone verification bug** | New users blocked from onboarding via phone verification failures. | 75 comments, 109 👍. High urgency. |
| 3 | [#33247](https://github.com/anthropics/claude-code/issues/33247) - **macOS login failure** | Users unable to authenticate; marked as duplicate but affects many. | 33 comments, 29 👍. |
| 4 | [#33239](https://github.com/anthropics/claude-code/issues/33239) - **OAuth error on individual accounts** | Distinct OAuth failure path on macOS for non-enterprise users. | 26 comments, ongoing discussion. |
| 5 | [#12872](https://github.com/anthropics/claude-code/issues/12872) - **VS Code past conversations not loading** | Persisted `.jsonl` transcripts exist but aren't displayed after restart. Has repro steps. | 22 comments, 17 👍. Affects workflow continuity. |
| 6 | [#13240](https://github.com/anthropics/claude-code/issues/13240) - **Indefinite hang during processing** | CLI stalls with no error output; users report 8+ minute hangs. | 17 comments, 11 👍. Reliability concern. |
| 7 | [#34083](https://github.com/anthropics/claude-code/issues/34083) - **Max plan features not working** | Paying Max users not getting 1M context window or Remote Control. | 8 comments. Subscription value issue. |
| 8 | [#33651](https://github.com/anthropics/claude-code/issues/33651) - **Session resume loses messages** | SubAgent progress chains can silently corrupt conversation history on resume. Has repro. | Data-loss severity, detailed technical analysis. |
| 9 | [#34164](https://github.com/anthropics/claude-code/issues/34164) - **$ARGUMENTS substitution broken in forked skills** | Skills with `context: fork` don't substitute `$ARGUMENTS` placeholders. | Blocks skill composition patterns. |
| 10 | [#34741](https://github.com/anthropics/claude-code/issues/34741) - **Windows deny rules ignored** | Absolute Windows paths in `settings.json` deny rules don't block file access. | Security/permissions gap on Windows. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| 1 | [#34545](https://github.com/anthropics/claude-code/pull/34545) | **Cap task `.output` file size** (100MB max) and delete on cleanup. Fixes #26911 where output files grew to 100s of GB. | OPEN |
| 2 | [#14842](https://github.com/anthropics/claude-code/pull/14842) | **Update documentation links** to new Claude Code site. Long-running docs migration. | OPEN |
| 3 | [#34735](https://github.com/anthropics/claude-code/pull/34735) | CI actions update. Maintenance/infrastructure. | OPEN |
| 4 | [#34757](https://github.com/anthropics/claude-code/pull/34757) | Short-lived PR, already closed. | CLOSED |
| 5 | [#34516](https://github.com/anthropics/claude-code/pull/34516) | Added sample client websites (Finnish businesses). Likely off-topic. | CLOSED |
| 6 | [#34399](https://github.com/anthropics/claude-code/pull/34399) | "Fitness optimization" - unclear purpose, possibly spam. | OPEN |

*Note: PR activity is light today with only 6 total updates. The most impactful is #34545 addressing disk space exhaustion.*

---

## 5. Feature Request Trends

| Trend | Description | Evidence |
|-------|-------------|----------|
| **AGENTS.md standardization** | Community wants cross-tool compatibility via `AGENTS.md` instead of tool-specific `CLAUDE.md`. | #6235 (3,217 👍) |
| **Persistent permissions** | Global permission persistence across sessions is highly requested. | #30953, #27040 |
| **Native context window indicator** | Desktop users want visibility into context usage. | #33257 |
| **Voice mode in VS Code** | Parity request for `/voice` command in VS Code extension. | #34743 |
| **CLAUDE.md executable instructions** | Startup instructions should be executed, not just loaded as context. | #34759, #34763 |
| **Rule inheritance control** | Ability to exclude parent directory `.claude/rules/` in subprojects. | #34209 |

---

## 6. Developer Pain Points

| Pain Point | Details | Affected Areas |
|------------|---------|----------------|
| **Authentication reliability** | Multiple OAuth bugs on macOS blocking login for individual and Pro accounts. | macOS, auth |
| **Session/state persistence** | Past conversations not loading in VS Code; session resume causes data loss. | VS Code, core |
| **Indefinite hangs** | CLI stalls without feedback, requiring force-quit. | TUI, core |
| **Max plan feature gaps** | Paid features (1M context, Remote Control, `/teleport`) not working for some users. | Subscriptions, core |
| **Permissions ignored** | Deny rules in `settings.json` not respected (Windows + general). | Permissions, Windows |
| **Skill composition bugs** | `$ARGUMENTS` substitution fails in forked skill contexts. | Skills, agents |
| **Config UI broken** | `/config` dialog immediately dismissed on macOS terminals. | TUI |
| **Remote control on headless systems** | QR code not displayed on non-GUI Linux systems. | CLI, Linux |

---

**Summary:** The community is pushing hard for **AGENTS.md adoption** as the industry standard for agent context files. Meanwhile, **authentication issues** and **session persistence bugs** are the primary friction points affecting daily usage. The most notable fix in progress is the **task output file size cap** (#34545) addressing disk space exhaustion.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-16

---

## 1. Today's Highlights

The Codex engineering team is aggressively refactoring the architecture, with multiple Pull Requests focused on migrating the TUI (Terminal User Interface) to sit on top of the new **app-server**. This shift aims to unify the extension and CLI behaviors and enable advanced features like background process management. On the community side, **rate limiting and token consumption** remain the top pain points, particularly regarding the VS Code extension's latest update.

---

## 2. Releases

No new stable releases were published in the last 24 hours. The repository currently lists **20 active PRs**, indicating heavy development activity ahead of a potential future release.

---

## 3. Hot Issues

Here are the top 10 issues driving community discussion:

1.  **[GPT-5.3-Codex Routing Bug](https://github.com/openai/codex/issues/11189)** (167 comments): Users report that selecting `gpt-5.3-codex` in the CLI routes requests to `gpt-5.2`. This high-traffic thread indicates significant backend routing confusion or capacity management.
2.  **[VS Code Extension Burning Tokens](https://github.com/openai/codex/issues/14593)** (63 comments): The latest VS Code update is consuming tokens at an unusually high rate. Users suspect verbose system prompts or unnecessary re-fetching of context.
3.  **[Codex App Manual /compact Command](https://github.com/openai/codex/issues/11325)** (34 comments): A highly requested feature to bring the CLI's `/compact` command to the desktop app, allowing users to manually compress conversation context to save tokens.
4.  **[Sound Notification Request](https://github.com/openai/codex/issues/3962)** (33 comments): A long-standing request for an audible notification when Codex finishes a task. This remains popular (115 👍) as background processing becomes more common.
5.  **[Windows Sandbox Setup Error](https://github.com/openai/codex/issues/10601)** (24 comments): Users on Windows are encountering persistent sandbox setup errors, blocking CLI usage.
6.  **[VS Code App-Server Crash](https://github.com/openai/codex/issues/6062)** (19 comments): The extension fails to start on Windows, citing `app-server process exited with code 1`.
7.  **[Codex Remote Control](https://github.com/openai/codex/issues/9224)** (17 comments): Users want to control their local CLI session remotely via the mobile ChatGPT app. This has gained significant traction (152 👍).
8.  **[Context Amnesia in Long Threads](https://github.com/openai/codex/issues/8648)** (16 comments): Reports that Codex replies to earlier messages in a thread rather than the latest one, breaking multi-step workflows.
9.  **[Missing Delete Task Option](https://github.com/openai/codex/issues/7727)** (16 comments): The VS Code extension context menu lacks a "Delete" option for tasks, cluttering the UI.
10. **[GPT-5.4 Model Stopping Mid-Task](https://github.com/openai/codex/issues/14414)** (6 comments): Users of the newer `gpt-5.4-high` model report it frequently stops and requires manual intervention to proceed.

---

## 4. Key PR Progress

The team is focusing heavily on infrastructure and "app-server" integration.

1.  **[Move TUI on top of app server](https://github.com/openai/codex/pull/14717)**: A major parallel code effort to refactor the Terminal UI to run on top of the app-server, aligning it with the extension architecture.
2.  **[Align main realtime v2 flow](https://github.com/openai/codex/pull/14763)**: Updates the session setup and interruption flow to match a "port branch," improving realtime stability.
3.  **[Preserve background terminals & rename cleanup to /stop](https://github.com/openai/codex/pull/14602)**: Prevents `Ctrl+C` from killing background dev servers and introduces a clearer `/stop` command.
4.  **[Publish codex app-server Python SDK](https://github.com/openai/codex/pull/14648)**: Splits the SDK into core and bundled packages for better dependency management.
5.  **[Add /btw side-question threads](https://github.com/openai/codex/pull/14506)**: Adds a `/btw` command to fork the current thread for side questions without polluting the main context.
6.  **[Reuse guardian session across approvals](https://github.com/openai/codex/pull/14668)**: Optimization to reuse subagent sessions during code approvals, improving latency and cache efficiency.
7.  **[Queue slash commands in TUI](https://github.com/openai/codex/pull/14170)**: Allows users to type slash commands while a turn is running; they will execute sequentially instead of failing.
8.  **[Improve search tool fallback](https://github.com/openai/codex/pull/14732)**: Optimization to bypass tool search and inject specs directly if tool count is low.
9.  **[Show turn-context diffs when backtracking](https://github.com/openai/codex/pull/14733)**: Improves the UI when rolling back history to show how permissions or models have changed.
10. **[V8 Build via Bazel](https://github.com/openai/codex/pull/14759)**: Infrastructure update to integrate V8 builds using Bazel, likely improving performance or sandboxing capabilities.

---

## 5. Feature Request Trends

*   **Remote & Cross-Device Workflows:** Significant demand for remote control of local CLI instances via mobile devices.
*   **Token & Context Management:** Users are desperate for tools to manage usage, specifically manual context compaction (`/compact`) for the desktop app.
*   **Background Task Management:** As agents run longer tasks, users need better control over background processes (keeping them alive on interrupt) and notifications (sound alerts).

---

## 6. Developer Pain Points

*   **Token Drain:** The community is frustrated by rapid token consumption, often attributed to "uncached prompt suffixes" or verbose extension updates. This is the most critical financial friction point for Pro/Business users.
*   **Model Reliability:** Reports of the newest models (GPT-5.3/5.4) routing incorrectly or halting mid-task are eroding trust in the upgrade cycle.
*   **Windows Stability:** Windows users continue to face a distinct set of challenges, from line endings and sandbox errors to specific extension crashes, making the platform feel like a second-class citizen compared to macOS/Linux.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-16

## 1. Today's Highlights
The Gemini CLI community is currently focused on refining agent stability and session continuity, with significant maintainer attention directed toward an "Epic" for improving long-running session coherence. Discussions are dominated by reports of erratic agent behavior—specifically "ghosting" (dropping context) after plan approvals—and platform-level concerns regarding invisible API usage consumption. Meanwhile, the contributor pipeline is active, with new proposals for a terminal-integrated debugging companion and enhanced extension configuration capabilities.

## 2. Releases
**None**
*No new releases were recorded in the last 24 hours.*

## 3. Hot Issues

1.  **Agent Performance Bottleneck**
    Users report extreme latency, with simple file edits taking up to 20 minutes.
    [Issue #21256](https://github.com/google-gemini/gemini-cli/issues/21256)

2.  **Phantom Usage Consumption**
    A critical concern where accounts hit API limits without active usage, suggesting a potential billing bug or security issue.
    [Issue #22493](https://github.com/google-gemini/gemini-cli/issues/22493)

3.  **Agent "Ghosting" Post-Plan Approval**
    The agent generates a plan successfully but silently drops context and fails to execute immediately after user approval.
    [Issue #22266](https://github.com/google-gemini/gemini-cli/issues/22266)

4.  **UI "Action Required" False Positives**
    The CLI incorrectly displays a "hand" icon indicating user input is needed during long-running shell scripts.
    [Issue #21925](https://github.com/google-gemini/gemini-cli/issues/21925)

5.  **Premature Usage Metering**
    Users observe that new models (e.g., `gemini-3-flash-preview`) show ~82% usage depletion before any prompts are sent.
    [Issue #22520](https://github.com/google-gemini/gemini-cli/issues/22520)

6.  **Stale Plan Context**
    In Plan Mode, the agent occasionally displays plans generated from previous requests rather than the current prompt.
    [Issue #22307](https://github.com/google-gemini/gemini-cli/issues/22307)

7.  **Epic: Session Continuity**
    Maintainers are tracking a major workstream to address context degradation in complex, long-running tasks.
    [Issue #21792](https://github.com/google-gemini/gemini-cli/issues/21792)

8.  **TUI Readability Issues**
    Sub-agent thought messages are concatenating without spaces, creating unreadable "blocks" of text during execution.
    [Issue #21688](https://github.com/google-gemini/gemini-cli/issues/21688)

9.  **Shell Alias Support**
    The CLI's shell command integration currently fails to recognize user-defined aliases (e.g., in `.bash_profile`).
    [Issue #21461](https://github.com/google-gemini/gemini-cli/issues/21461)

10. **Lack of Subagent Control**
    A high-priority architectural request for real-time observability and control over delegated subagents.
    [Issue #22571](https://github.com/google-gemini/gemini-cli/issues/22571)

## 4. Key PR Progress

1.  **Terminal Debug Companion (PoC)**
    Introduces a baseline for DAP-oriented debugging directly within the CLI terminal.
    [PR #22546](https://github.com/google-gemini/gemini-cli/pull/22546)

2.  **Scheduler Hang Fixes**
    Resolves critical hangs in the Policy Engine and improves visibility of policy violations.
    [PR #22462](https://github.com/google-gemini/gemini-cli/pull/22462)

3.  **Extension Configuration Support**
    Enables extensions to contribute their own CLI configuration settings via `gemini-extension.json`.
    [PR #22568](https://github.com/google-gemini/gemini-cli/pull/22568)

4.  **Tracker UI Polish**
    Improves task sorting (in_progress > blocked > closed) and formatting in the Tracker interface.
    [PR #22437](https://github.com/google-gemini/gemini-cli/pull/22437)

5.  **MCP Policy Centralization**
    Centralizes policy updates for MCP tools to ensure consistent enforcement across subagents.
    [PR #22343](https://github.com/google-gemini/gemini-cli/pull/22343)

6.  **Injection Service Refactor**
    Renames `UserHintService` to `InjectionService` to support generic, source-agnostic context injection (e.g., background completions).
    [PR #22544](https://github.com/google-gemini/gemini-cli/pull/22544)

7.  **Telemetry Opt-Out Verification**
    Adds integration tests to ensure telemetry files are strictly not created when disabled by the user.
    [PR #22569](https://github.com/google-gemini/gemini-cli/pull/22569)

8.  **Browser Agent Input Blocker**
    Fixes an issue where the input blocker overlay disappeared during browser navigations.
    [PR #22562](https://github.com/google-gemini/gemini-cli/pull/22562)

9.  **User Ignore Config for Env Vars**
    Prevents loading environment variables from the current directory if they are ignored by `.gitignore` or `.geminiignore`.
    [PR #17488](https://github.com/google-gemini/gemini-cli/pull/17488)

10. **Custom JSON Schema Output**
    Adds a `--schema-file` flag to support structured JSON output for headless/orchestration use cases.
    [PR #18032](https://github.com/google-gemini/gemini-cli/pull/18032)

## 5. Feature Request Trends
*   **Advanced Context Management:** Strong demand for "Guided Compression" (user-directed context pruning) and "Stale Output Elision" (collapsing outdated tool outputs) to manage token limits effectively.
*   **Subagent Isolation & Control:** Users want the ability to isolate tools between the main agent and subagents, alongside better real-time observability into subagent actions.
*   **Agent Self-Awareness:** Requests for the agent to better understand its own CLI flags, hotkeys, and capabilities to assist users effectively ("self-debugging").

## 6. Developer Pain Points
*   **UI/UX Flickering & Scrolling:** The TUI remains fragile, with reports of flickering on resize and the window scrolling to the top unexpectedly when clicked.
*   **Interactive Prompts:** The agent frequently gets stuck when encountering interactive shell prompts (e.g., during `npm create vite`), requiring manual intervention or better auto-handling.
*   **Invisible Usage Drains:** The anxiety surrounding "phantom" API usage consumption is a major blocker for trust, necessitating clearer metering and audit logs.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-16

## 1. Today's Highlights
No new releases were published in the last 24 hours, but the community remains highly active following the recent **v1.0.5** update. The primary focus is on stability, with multiple reports of UI regressions (scrolling and flickering) and connectivity issues (HTTP/2 GOAWAY errors) affecting the newest version. Feature discussions are trending toward advanced automation, specifically background agent notifications and persistent usage statistics.

## 2. Releases
*No new releases recorded in the last 24 hours.*

## 3. Hot Issues

1.  **[UI/Regression] Screen Flicker & Blinking (#1202)**
    *   **Why:** High engagement (35 comments, 34 thumbs up).
    *   **Summary:** Users report significant screen flickering and buffer artifacts in Windows Terminal (PowerShell) when interacting with Copilot's UI prompts.
    *   **Link:** [Issue #1202](https://github.com/github/copilot-cli/issues/1202)

2.  **[Connectivity] HTTP/2 GOAWAY & 503 Errors (#1754)**
    *   **Why:** Critical connectivity failure affecting retrospectives and general usage (11 comments).
    *   **Summary:** Users encounter `AssertionError` and HTTP/2 connection drops (503) during heavy operations, seemingly related to internal connection pooling.
    *   **Link:** [Issue #1754](https://github.com/github/copilot-cli/issues/1754)

3.  **[Model Support] Missing Org-Enabled Models (e.g., Gemini 3.1) (#1703)**
    *   **Why:** Parity gap between CLI and VS Code (8 comments, 17 thumbs up).
    *   **Summary:** The CLI fails to list all models enabled at the organization level (specifically Gemini 3.1 Pro) that are available and working in VS Code.
    *   **Link:** [Issue #1703](https://github.com/github/copilot-cli/issues/1703)

4.  **[UX/Regression] Scroll Bar Removed/Scroll Capture (#2053, #1944)**
    *   **Why:** Immediate regression in v1.0.5 affecting navigation.
    *   **Summary:** Users report the vertical scrollbar has vanished in the latest update (#2053). Additionally, mouse wheel scrolling is being captured by the input box instead of the chat history (#1944).
    *   **Links:** [Issue #2053](https://github.com/github/copilot-cli/issues/2053), [Issue #1944](https://github.com/github/copilot-cli/issues/1944)

5.  **[Agent/Regression] Background Agent Notifications Broken (#2051)**
    *   **Why:** Breaks agentic workflows in v1.0.5.
    *   **Summary:** A regression in v1.0.5 prevents the model from receiving `system_notification` when background agents complete, stalling automated workflows.
    *   **Link:** [Issue #2051](https://github.com/github/copilot-cli/issues/2051)

6.  **[Feature] Global Instructions File (#252)**
    *   **Why:** High demand for configuration management (8 comments, 11 thumbs up).
    *   **Summary:** Users want a global configuration file for custom instructions to avoid manually recreating them for every new repository or worktree.
    *   **Link:** [Issue #252](https://github.com/github/copilot-cli/issues/252)

7.  **[Auth] Fine-Grained Token Visibility (#223)**
    *   **Why:** Enterprise administration blocker (10 comments, 52 thumbs up).
    *   **Summary:** The "Copilot Requests" permission is missing when creating fine-grained PATs owned by an organization, hindering corporate automation adoption.
    *   **Link:** [Issue #223](https://github.com/github/copilot-cli/issues/223)

8.  **[UX] Display Blinking & Instability (#1924)**
    *   **Why:** Visual stability issue distinct from the flicker bug.
    *   **Summary:** Users report the CLI interface shaking or blinking uncontrollably during operation, requiring a hard escape to reset.
    *   **Link:** [Issue #1924](https://github.com/github/copilot-cli/issues/1924)

9.  **[Security/Feature] Tool Whitelist for Interactive Mode (#1973)**
    *   **Why:** Balancing security and usability.
    *   **Summary:** Users request a middle ground between "approve every tool" and "allow all." They want a whitelist for safe read-only operations (grep, git status) to reduce friction.
    *   **Link:** [Issue #1973](https://github.com/github/copilot-cli/issues/1973)

10. **[Feature] Git Worktree Lifecycle Management (#1613)**
    *   **Why:** Advanced workflow automation.
    *   **Summary:** A feature request for Copilot to autonomously create and destroy git worktrees to isolate tasks, keeping the main environment clean.
    *   **Link:** [Issue #1613](https://github.com/github/copilot-cli/issues/1613)

## 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends
*   **Session & Context Persistence:** Strong demand for **Global Instructions** (#252), **Session Memory** (#2048), and **Persistent Usage Stats** (#1394). Users want the CLI to "remember" context and configuration across sessions rather than treating every launch as a blank slate.
*   **Workflow Automation:** Requests for **Scheduled Prompts** (#2056) and **Worktree Management** (#1613) indicate users are trying to use Copilot CLI as a background agent or autonomous worker rather than just a chat interface.
*   **Input Flexibility:** Developers are asking for more versatile inputs, specifically **Image Pasting** (#1276) and **Emoji Picker Support** (#2057).

## 6. Developer Pain Points
*   **Terminal UI Regression:** The recent v1.0.5 update introduced significant UX friction, specifically regarding **mouse scrolling** and **missing scrollbars**, making it difficult to review long conversations.
*   **Model Parity:** Frustration continues regarding the disparity between VS Code and CLI regarding available models, specifically **Gemini 3.1 Pro**.
*   **Network Stability:** Intermittent **HTTP/2 GOAWAY (503)** errors are disrupting complex tasks, pointing to potential issues in the underlying connection pooling or API gateway handling.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-03-16

Here is the technical analysis for the **Kimi Code CLI** repository for March 16, 2026.

## 1. Today's Highlights
The community focus remains squarely on stability and terminal compatibility, with no new official releases in the last 24 hours. Key contributions include a critical fix for VS Code terminal rendering via the Kitty keyboard protocol and documentation updates for the Kimi IDE ACP configuration. Meanwhile, users continue to report initialization bugs across different platforms (Windows/Darwin) and seek clarity on administrative features like invoicing.

## 2. Releases
**None.**
No new stable or beta versions were released in the last 24 hours. The last tagged version appears to be referenced in issues as `v1.22.0`.

## 3. Hot Issues
We are tracking 4 active issues updated in the last 24 hours, focusing on startup stability and billing.

*   **[#1427 [OPEN] Excessive log output on CLI startup](https://github.com/MoonshotAI/kimi-cli/issues/1427)**
    *   **Summary:** Users on Darwin (macOS) running `v1.21.0` report that the CLI floods the console with verbose logs immediately upon launch.
    *   **Significance:** This affects the usability of the tool for developers trying to integrate it into scripts or clean terminal workflows.
    *   **Reaction:** 2 comments discussing reproduction steps; likely related to logging level configuration in recent builds.

*   **[#1436 [OPEN] GitBash startup failure on Windows](https://github.com/MoonshotAI/kimi-cli/issues/1436)**
    *   **Summary:** On Windows `v1.22.0`, executing `kimi` inside GitBash results in an immediate crash/fail state.
    *   **Significance:** GitBash is a standard tool for Windows developers; incompatibility here blocks a significant portion of the user base.

*   **[#1442 [OPEN] Request for Invoicing Feature](https://github.com/MoonshotAI/kimi-cli/issues/1442)**
    *   **Summary:** A user inquiry regarding how to generate invoices for "Kimi Code" subscriptions, noting the absence of a billing UI.
    *   **Significance:** Highlights a gap in the commercial/user experience layer of the platform.

*   **[#1355 [OPEN] ACP Session Initialization Error](https://github.com/MoonshotAI/kimi-cli/issues/1355)**
    *   **Summary:** An older but active bug where ACP sessions fail to initialize in IntelliJ IDEA (2025.03), throwing `list.index(x): x not in list`.
    *   **Significance:** Indicates potential regression in the AI Assistant Protocol (ACP) integration for JetBrains IDEs.

## 4. Key PR Progress
Active development is focused on terminal handling protocols and internal API refactoring.

*   **[#1440 [OPEN] fix(shell): Disable Kitty keys in VS Code](https://github.com/MoonshotAI/kimi-cli/pull/1440)**
    *   **Details:** Proposes disabling the Kitty keyboard protocol within VS Code terminals to prevent CSI-u sequences from appearing as literal text. Adds an environment variable override `KIMI_CLI_DISABLE_KITTY_KEYS`.
    *   **Impact:** Critical fix for developers using the integrated terminal in VS Code.

*   **[#1441 [OPEN] docs: Fix Kimi IDE ACP config](https://github.com/MoonshotAI/kimi-cli/pull/1441)**
    *   **Details:** Adds a missing `type: custom` field to the documentation regarding Kimi IDE ACP configuration.
    *   **Impact:** Prevents configuration errors for users setting up custom AI providers.

*   **[#1400 [OPEN] fix: Replace removed acp.TerminalHandle](https://github.com/MoonshotAI/kimi-cli/pull/1400)**
    *   **Details:** Refactors `tools.py` and `kaos.py` to replace the deprecated `acp.TerminalHandle` with the new ACP 0.8 request/response API `Client` methods.
    *   **Impact:** A significant architectural update to align with ACP 0.8 standards, improving maintainability.

## 5. Feature Request Trends
Based on the latest issues, the primary non-technical request is:
*   **Commercial UX:** Users are looking for better account management tools, specifically **in-dashboard invoicing** or billing history visibility directly within the CLI or linked platform (#1442).

## 6. Developer Pain Points
*   **Cross-Platform Terminal Instability:** A recurring theme in recent issues (#1427, #1436) is the fragility of the CLI across different environments (GitBash on Windows, standard Terminal on Darwin). Users frequently encounter crashes or verbose logging that interrupts workflows.
*   **IDE Integration Errors:** The persistence of issue #1355 suggests that the bridge between the CLI/Backend and IDEs (specifically IDEA/PyCharm) via the ACP protocol is prone to version-skew errors.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-16

## 1. Today's Highlights

A **critical memory leak crisis** is dominating community attention, with 20+ contributors independently investigating unbounded RAM growth during extended TUI sessions, spawning a wave of remediation PRs. On the feature front, work progresses on GitHub PR integration, prompt enhancement commands, and improved LM Studio support. No new releases were published today, keeping the focus on stabilizing the 1.2.x branch.

---

## 2. Releases

No new releases in the last 24 hours. Current stable version remains **1.2.26**.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [**#16697 - Multiple memory leaks cause unbounded RAM growth**](https://github.com/anomalyco/opencode/issues/16697) | **Critical.** 20+ contributors investigating; 8 👍. Directly linked to crash reports and Reddit threads. Multiple PRs (#17635, others) already targeting this. |
| 2 | [**#14171 - Opencode taking more RAM until computer crashes**](https://github.com/anomalyco/opencode/issues/14171) | **Severe user impact.** 7 👍. Reddit corroborates widespread issue. Tied to the broader memory leak investigation. |
| 3 | [**#16331 - Permissions ignored**](https://github.com/anomalyco/opencode/issues/16331) | **Security concern.** Users report `.env` and sensitive files being accessed despite explicit `deny` rules in `opencode.json`. |
| 4 | [**#12789 - Claude model not supported (Copilot)**](https://github.com/anomalyco/opencode/issues/12789) | **Model compatibility.** GitHub Copilot users can't use Claude models while Gemini works. 4 👍, 15 comments. |
| 5 | [**#17546 - Invalid string: must start with "prt"**](https://github.com/anomalyco/opencode/issues/17546) | **Regression in 1.2.26.** Blocks basic messaging flow immediately on startup. |
| 6 | [**#909 - Can't paste content from clipboard**](https://github.com/anomalyco/opencode/issues/909) | **Long-standing UX blocker.** 20 comments over 8 months. Still unresolved across platforms. |
| 7 | [**#9922 - Impossible to paste API key after /connect**](https://github.com/anomalyco/opencode/issues/9922) | **Onboarding blocker.** Windows/Ubuntu users can't complete initial setup. No UI hints provided. |
| 8 | [**#6835 - Desktop crashes when opening project on remote server**](https://github.com/anomalyco/opencode/issues/6835) | **Remote workflow broken.** Tailscale/network users hitting `UnknownError: No such file or directory`. 3 👍. |
| 9 | [**#17574 - SSE read timed out**](https://github.com/anomalyco/opencode/issues/17574) | **Reliability issue.** Frequent timeouts during long operations (e.g., writing planning documents). |
| 10 | [**#17655 - UI stuck on 'Thinking...' indefinitely**](https://github.com/anomalyco/opencode/issues/17655) | **TUI hang.** Tool output pending but never renders. Requires restart to recover. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [**#15785 - GitHub PR integration**](https://github.com/anomalyco/opencode/pull/15785) | First-class GitHub PR support for web/desktop apps. Major feature addition. |
| 2 | [**#17502 - Prompt enhancement via ctrl+x p**](https://github.com/anomalyco/opencode/pull/17502) | Adds `prompt_enhance` TUI command for improving prompts before submission. Closes #10237. |
| 3 | [**#17635 - Remove dead LSP clients**](https://github.com/anomalyco/opencode/pull/17635) | Fixes memory leak by cleaning up orphaned LSP connections. Directly addresses #16697. |
| 4 | [**#17640 - Refactor FileTimeService with Semaphore locks**](https://github.com/anomalyco/opencode/pull/17640) | Memory stabilization via Effect ServiceMap conversion and proper lock management. |
| 5 | [**#17651 - Recover MCP clients after transient failures**](https://github.com/anomalyco/opencode/pull/17651) | Prevents MCP servers from being stranded after temporary `listTools` failures. |
| 6 | [**#17644 - Add /edit slash command**](https://github.com/anomalyco/opencode/pull/17644) | Opens all session-edited files in `$EDITOR`. Quality-of-life improvement. |
| 7 | [**#17650 - Process queued messages after task completion**](https://github.com/anomalyco/opencode/pull/17650) | Fixes queue timing where messages interrupt running tasks or get stuck. |
| 8 | [**#17587 - Reflect reasoning effort in web UI**](https://github.com/anomalyco/opencode/pull/17587) | Web UI now shows configured thinking/reasoning effort from `opencode.json`. |
| 9 | [**#17660 - Detect light mode in Zellij terminal**](https://github.com/anomalyco/opencode/pull/17660) | TUI theme detection fix for Zellij multiplexer users. |
| 10 | [**#12304 - Align agent create command with docs**](https://github.com/anomalyco/opencode/pull/12304) | Fixes CLI output path (`agent/` vs `agents/`) to match documentation. |

---

## 5. Feature Request Trends

| Theme | Notable Requests |
|-------|------------------|
| **Memory/Session Management** | Auto-refresh session titles (#17631), share list & batch operations (#17625), self-improving prompt learning (#17661) |
| **Directory/Context Switching** | Dynamic `pwd` switching within same conversation (#17662) |
| **Granular Permissions** | Per-agent tool-level allow/deny (#17607) — complementary to existing path-level sandboxing |
| **Plugin/Extension Hooks** | Include user message text in `experimental.chat.system.transform` (#17637) for targeted context injection |
| **Render/Testing Infrastructure** | Upstream-native render-cycle harness for TUI command testing (#17649) |

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **🔴 Memory leaks** | Multiple independent reports (#16697, #14171), Reddit threads, 20+ contributors investigating. Primary stability concern. |
| **🔴 Clipboard/Paste broken** | Cross-platform issue spanning 8 months (#909, #9922, #10780). Blocks onboarding and daily usage. |
| **🟠 Permission system reliability** | Security-sensitive files accessed despite `deny` rules (#16331). Erodes trust in sandboxing. |
| **🟠 Model compatibility** | Claude models failing with Copilot (#12789), tool_call ID length errors (#12653). |
| **🟡 Documentation drift** | CLI vs docs mismatch for agent paths (#12302, #14410), missing setup steps for Zen models (#17550). |
| **🟡 TUI hangs** | "Thinking..." stuck states (#17655, #17624), blank session history on long chats (#17646). |

---

*Digest generated from 50 Issues and 20 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-03-16

## 1. Today's Highlights
The team shipped **v0.12.3-nightly**, introducing a bundled `/review` skill for out-of-the-box code reviews and improved error handling for qualitative insights. Community activity is surging around **system prompt customization** and **OpenRouter compatibility**, with multiple PRs submitted today to address streaming tool call failures. Additionally, there is a clear consensus among users requesting **project-local data storage** and **code rollback/checkpoint mechanisms** to match competitor features.

## 2. Releases
*   **v0.12.3-nightly.20260315.b2c9e641**
    *   **New Feature:** Added a bundled `/review` skill for immediate, zero-config code reviews ([PR #2348](https://github.com/QwenLM/qwen-code/pull/2348)).
    *   **Bug Fix:** Improved robustness of qualitative insights by handling individual LLM failures gracefully ([PR #2361](https://github.com/QwenLM/qwen-code/pull/2361)).

## 3. Hot Issues
1.  **[Bug] OpenRouter Tool Call Failures** ([#2402](https://github.com/QwenLM/qwen-code/issues/2402)): Duplicate `finish_reason` chunks from OpenRouter cause "Model stream ended with empty response text." Affects specific models like Gemini 3.1 via the proxy.
2.  **[Feature] Portable Chat History** ([#2373](https://github.com/QwenLM/qwen-code/issues/2373)): Request for project-local storage (`.qwen/chat-history/`) and export commands to enable seamless context portability across machines.
3.  **[Feature] Workspace-Local Storage** ([#2396](https://github.com/QwenLM/qwen-code/issues/2396)): Users want to store config, history, and logs directly in the workspace folder to sync environments via Git.
4.  **[Feature] Code Rollback/Checkpoint Mechanism** ([#2262](https://github.com/QwenLM/qwen-code/issues/2262)): Users are requesting a "rewind" or "checkpoint" feature to revert code changes, similar to Claude Code CLI.
5.  **[Bug] VS Code Extension Fails on 0.12.3** ([#2382](https://github.com/QwenLM/qwen-code/issues/2382)): Regression reported where the extension gets stuck on "Preparing Qwen Code..." in the latest version.
6.  **[Bug] CJK/Latin Spacing Breaks Paths** ([#2390](https://github.com/QwenLM/qwen-code/issues/2390)): The model inserts typographic spaces ("Pangu spacing") between Chinese/Japanese and Latin characters, breaking file paths and shell commands.
7.  **[Bug] Windows Terminal Caps Lock Freeze** ([#2401](https://github.com/QwenLM/qwen-code/issues/2401)): Pressing Caps Lock in the integrated terminal causes the keyboard to become completely unresponsive.
8.  **[Feature] Skill Invocation Hooks** ([#1441](https://github.com/QwenLM/qwen-code/issues/1441)): A request for hook mechanisms to improve the reliability of skill/subagent calls (e.g., auto-adding flags like `--run` to `npm test`).
9.  **[Bug] Severe Input Lag** ([#2395](https://github.com/QwenLM/qwen-code/issues/2395)): Reports of 5+ second delays when typing in the VS Code chat window.
10. **[Feature] Support Local Model Providers** ([#2385](https://github.com/QwenLM/qwen-code/pull/2385)): High interest in native support for LM Studio and Ollama for local inference.

## 4. Key PR Progress
1.  **[Feat] System Prompt Customization** ([#2400](https://github.com/QwenLM/qwen-code/pull/2400)): Adds options in SDK and CLI to override or append to the default system prompt, offering deeper model control.
2.  **[Fix] OpenRouter Streaming Crash** ([#2403](https://github.com/QwenLM/qwen-code/pull/2403)): Fixes the "empty response" error by ignoring duplicate finish chunks sent by OpenRouter.
3.  **[Fix] Tool Call Loss in Streams** ([#2404](https://github.com/QwenLM/qwen-code/pull/2404)): Addresses a race condition where tool calls were lost if function names arrived late during streaming.
4.  **[Feat] Local Model Support** ([#2385](https://github.com/QwenLM/qwen-code/pull/2385)): Integrates support for LM Studio and Ollama using their OpenAI-compatible APIs.
5.  **[Feat] Skill Allow/Exclude Lists** ([#2255](https://github.com/QwenLM/qwen-code/pull/2255)): Introduces configuration to whitelist/blacklist specific skills for security and governance.
6.  **[Fix] CRLF Line Ending Corruption** ([#2277](https://github.com/QwenLM/qwen-code/pull/2277)): Ensures the editor preserves Windows-style line endings instead of silently converting them to LF.
7.  **[Fix] Windows Extension Install** ([#2286](https://github.com/QwenLM/qwen-code/pull/2286)): Fixes permission errors during installation on Windows by dynamically detecting symlink support.
8.  **[Feat] Remote Control Interface** ([#2330](https://github.com/QwenLM/qwen-code/pull/2330)): Experimental HTTP/WebSocket server for browser-based CLI interaction.
9.  **[Fix] Auto-detect max_tokens** ([#2356](https://github.com/QwenLM/qwen-code/pull/2356)): Prevents response truncation in non-Qwen models by auto-detecting context limits when not explicitly set.
10. **[Feat] Keep Rejected Plans Visible** ([#2157](https://github.com/QwenLM/qwen-code/pull/2157)): Improves UX by preserving plan content on screen even after user rejection.

## 5. Feature Request Trends
*   **Data Portability & Sync:** Strong demand for storing chat history and configuration inside the project folder (`.qwen/`) to sync across devices via Git.
*   **Undo/Checkpointing:** Multiple requests for a "rewind" or "restore" command to roll back code changes without manual git surgery.
*   **Hook System:** Users want more sophisticated hooks to control skill execution and prevent common loop errors (e.g., test flags).
*   **Local/Alternative Inference:** Growing interest in running Qwen Code with local models (Ollama, LM Studio) or 3rd party proxies (OpenRouter).

## 6. Developer Pain Points
*   **Streaming Reliability:** Developers using OpenRouter or non-standard providers are frequently hitting "empty response" errors and tool call drops.
*   **Platform Instability:** Specific to the VS Code extension, users report severe lag, freezes on keystrokes (Caps Lock), and initialization failures on Windows.
*   **Model Behavior Artifacts:** The model's tendency to add spaces between multilingual characters is breaking code execution in non-English environments.

</details>