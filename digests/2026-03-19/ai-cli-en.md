# AI CLI Tools Community Digest 2026-03-19

> Generated: 2026-03-18 22:05 UTC | Tools covered: 7

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
**Date:** 2026-03-19 | **Analyst:** Senior Technical Analyst

---

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a fiercely competitive market with seven major contenders now shipping production-grade releases. All tools are converging on agent-based architectures with autonomous coding capabilities, but differentiation is emerging around **context management sophistication**, **platform stability**, and ** extensibility frameworks**. The dominant technical narrative this cycle is the shift from simple conversational interfaces to **multi-agent orchestration systems** with persistent memory, parallel execution, and sandboxed filesystem operations. Enterprise adoption blockers—particularly authentication, platform support, and resource consumption—remain unsolved across the ecosystem.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (Active) | Latest Release | Development Velocity |
|------|-------------|--------------|----------------|---------------------|
| **Claude Code** | 10 | 10 | v2.1.78 (stable) | High – plugin ecosystem expanding rapidly |
| **OpenAI Codex** | 10 | 10 | v0.116.0-alpha.8 (4 alphas/day) | Very High – aggressive Rust rewrite |
| **Gemini CLI** | 10 | 10 | v0.35.0-preview.1 (no new release) | Moderate – architectural refactors |
| **GitHub Copilot CLI** | 10 | 1 | v1.0.8 (stable) | Low – minimal PR activity |
| **Kimi Code CLI** | 10 | 8 | v1.24.0 (stable) | High – unified router, plan mode |
| **OpenCode** | 10 | 10 | No new release | High – desktop app beta, memory optimization |
| **Qwen Code** | 10 | 10 | CLI v0.13.0 + SDK v0.1.6 | Very High – multi-model arena, 10+ active PRs |

**Key Observations:**
- OpenAI Codex leads iteration velocity with 4 alpha releases in 24 hours
- Qwen Code shows strongest feature velocity (Agent Arena, SDK, UI enhancements)
- GitHub Copilot CLI shows minimal public PR activity despite active releases
- Gemini CLI in architectural transition phase with no new releases

---

## 3. Shared Feature Directions

| Direction | Tools | Specific Requirements |
|-----------|-------|----------------------|
| **MCP (Model Context Protocol) Integration** | Claude Code, OpenAI Codex, Kimi, Qwen Code | Sampling support, server validation, transport compliance |
| **Git Worktree / Parallel Agent Execution** | Gemini CLI, OpenCode, Qwen Code | Isolated contexts for concurrent subagent workflows |
| **Plan Mode Improvements** | Gemini CLI, Kimi CLI | Multi-option selection, reliable execution transitions, editable plans |
| **Context Window Management** | OpenCode, Qwen Code, Claude Code | Sliding window, compression reliability, token visibility |
| **Windows/WSL Platform Stability** | Claude Code, OpenAI Codex, OpenCode | BSOD fixes, sandbox stability, input lag, JIT compatibility |
| **Desktop Application Development** | OpenAI Codex, OpenCode | Native apps (Tauri-based), platform support gaps (Intel Mac, ARM64 Windows) |
| **Subagent Ecosystems** | Claude Code, Qwen Code, Gemini CLI | Hierarchical skills, AST-aware tools, parallel task execution |
| **AST-Aware Code Intelligence** | Gemini CLI, GitHub Copilot CLI | LSP integration, structural code understanding beyond text search |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Key Differentiator |
|------|--------------|-------------|-------------------|-------------------|
| **Claude Code** | Plugin extensibility, enterprise workflows | Professional developers, teams | Hook system, plugin marketplace | Mature plugin architecture with persistent state |
| **OpenAI Codex** | Infrastructure hardening | Enterprise, power users | Rust rewrite, exec-server sandboxing | Aggressive architectural overhaul for security |
| **Gemini CLI** | Agent memory & planning | Research-oriented developers | Subagent orchestration, SDD | Memory Manager with global/project scope routing |
| **GitHub Copilot CLI** | VS Code ecosystem integration | Existing Copilot subscribers | Extension model, MCP allowlists | Native GitHub/VS Code integration |
| **Kimi Code CLI** | UX refinement, Plan Mode | Individual developers | Unified prompt router | Multi-option plan selection, input persistence |
| **OpenCode** | Open-source flexibility | Privacy-conscious, tinkerers | Tauri desktop, multi-provider | Provider-agnostic, memory optimization focus |
| **Qwen Code** | Multi-model comparison | AI researchers, power users | Agent Arena, SDK ecosystem | Parallel multi-model competitive execution |

**Strategic Positioning:**
- **Claude Code**: Enterprise plugin ecosystem leader
- **OpenAI Codex**: Trading stability for speed in Rust rewrite
- **Qwen Code**: Pushing multi-model experimentation frontier
- **OpenCode**: Open-source alternative with desktop ambitions
- **Gemini CLI**: Betting on sophisticated agent memory architecture

---

## 5. Community Momentum & Maturity

### Momentum Ranking (by engagement velocity)

| Rank | Tool | Momentum Indicators |
|------|------|---------------------|
| 1 | **Claude Code** | 456+ comments on phone verification issue, active plugin PRs, high upvote engagement |
| 2 | **Qwen Code** | 10+ active PRs, SDK releases, rapid feature shipping |
| 3 | **OpenAI Codex** | 4 releases/day, 388 👍 on remote development request |
| 4 | **Gemini CLI** | RFCs on voice mode, active architectural debates |
| 5 | **OpenCode** | Desktop beta driving engagement, deep technical debugging |
| 6 | **Kimi Code** | Steady releases, focused UX improvements |
| 7 | **GitHub Copilot CLI** | Low community engagement relative to user base size |

### Maturity Assessment

| Maturity Level | Tools | Characteristics |
|----------------|-------|-----------------|
| **Production Ready** | Claude Code, GitHub Copilot CLI | Stable releases, enterprise features, ecosystem support |
| **Rapid Iteration** | OpenAI Codex, Qwen Code, Kimi CLI | Frequent releases, active feature development |
| **Architectural Transition** | Gemini CLI, OpenCode | Major refactors, desktop app development |

---

## 6. Trend Signals

### Critical Industry Trends

1. **MCP Becoming Standard Protocol**
   - Evidenced by: Claude Code (Sampling support request with 92 👍), OpenAI Codex (allowlist feature), Kimi (disconnect issues), Qwen (transport compliance)
   - **Signal**: MCP is emerging as the de facto standard for tool/model integration, but implementations remain fragmented

2. **Desktop Application Convergence**
   - OpenAI Codex and OpenCode shipping native desktop apps
   - Persistent requests for macOS Intel, Windows ARM64 support
   - **Signal**: CLI tools evolving into hybrid TUI/desktop experiences for broader adoption

3. **Multi-Agent Parallelization**
   - Git worktree integration (Gemini CLI #22973, Qwen Code #1912)
   - Concurrent task execution (Qwen Code #2434)
   - **Signal**: Single-threaded agent conversation giving way to orchestrated multi-agent systems

4. **Windows/WSL as Second-Class Platform**
   - Claude Code: BSOD issues requiring plugin workarounds
   - OpenAI Codex: Sandbox setup errors, 401 issues
   - OpenCode: WSL2 freezes traced to Node.js JIT bugs
   - **Signal**: Platform-specific bugs disproportionately affect Windows; developers should prioritize Linux/macOS for production use

5. **Context Management Arms Race**
   - Sliding window proposals (OpenCode #4659)
   - Memory Manager subagents (Gemini CLI #22726)
   - Compression reliability fixes (Qwen Code #2464)
   - **Signal**: As context windows grow, intelligent management—not just truncation—is the competitive frontier

6. **Token Consumption Anxiety**
   - OpenAI Codex: "burning tokens" (#14593), rapid depletion (#14762)
   - Qwen Code: quota reduction complaints (#2426)
   - **Signal**: Users demanding transparency and control over costs; tools that hide consumption lose trust

### Actionable Recommendations for Developers

| Priority | Recommendation |
|----------|----------------|
| **High** | Test CLI tools on Linux/macOS before Windows production deployment |
| **High** | Monitor MCP implementation maturity before committing to tool ecosystem |
| **Medium** | Evaluate context management strategies for long-running sessions |
| **Medium** | Consider multi-model tools (Qwen Arena) for experimentation workflows |
| **Low** | Wait for desktop app stabilization before enterprise rollout |

---

**Report Compiled:** 2026-03-19 | **Tools Analyzed:** 7 | **Issues Reviewed:** 70+ | **PRs Tracked:** 59

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills | **Snapshot Date:** 2026-03-19

---

## 1. Top Skills Ranking (Most-Discussed PRs)

Based on repository activity, update recency, and functional impact, here are the most notable Skills in the pipeline:

| Rank | Skill | Author | Status | Description |
|------|-------|--------|--------|-------------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | @PGTBoos | 🟢 OPEN | Typographic quality control for AI-generated documents—fixes orphan word wrap, widow paragraphs, and numbering misalignment. |
| 2 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | @eovidiu | 🟢 OPEN | Two meta-skills for marketplace: quality analysis (5 dimensions) and security scanning for Skills. |
| 3 | **[frontend-design (Improved)](https://github.com/anthropics/skills/pull/210)** | @justinwetch | 🟢 OPEN | Revised frontend-design skill with improved clarity, actionability, and single-conversation executability. |
| 4 | **[SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** | @amitlals | 🟢 OPEN | Leverages SAP's open-source tabular foundation model for predictive analytics on SAP business data. |
| 5 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | @p19dixon | 🟢 OPEN | 10-step workflow for codebase cleanup—identifies orphaned code, unused files, and documentation gaps. |
| 6 | **[ODT (OpenDocument)](https://github.com/anthropics/skills/pull/486)** | @GitHubNewbie0 | 🟢 OPEN | Create, fill templates, and parse `.odt` files (LibreOffice/OpenOffice ISO standard format). |
| 7 | **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** | @junaid1460 | 🟢 OPEN | AI-powered media generation via Masonry CLI—Imagen 3.0 images, Veo 3.1 videos. |
| 8 | **[avoid-ai-writing](https://github.com/anthropics/skills/pull/535)** | @conorbronsdon | 🟢 OPEN | Detects and rewrites 21 categories of "AI-isms" with a 43-entry replacement table. |

---

## 2. Community Demand Trends (From Issues)

The Issues reveal clear patterns in what users are asking for:

| Trend | Description | Key Issue(s) |
|-------|-------------|--------------|
| **🔧 Core Infrastructure Fixes** | Duplicate skills, API errors, and namespace confusion are blockers. Users need stable skill management. | [#189](https://github.com/anthropics/skills/issues/189), [#406](https://github.com/anthropics/skills/issues/406), [#492](https://github.com/anthropics/skills/issues/492) |
| **🔐 Enterprise & Security** | Demand for agent governance, trust boundaries, and security patterns for AI systems. | [#412](https://github.com/anthropics/skills/issues/412), [#492](https://github.com/anthropics/skills/issues/492) |
| **🔌 Integration & Interoperability** | Skills should work with AWS Bedrock, MCP protocol, and enterprise SSO (no API key required). | [#29](https://github.com/anthropics/skills/issues/29), [#16](https://github.com/anthropics/skills/issues/16), [#532](https://github.com/anthropics/skills/issues/532) |
| **🧠 Meta-Skills & Tooling** | Better tooling for creating, validating, and improving skills—including evaluation frameworks. | [#202](https://github.com/anthropics/skills/issues/202), [#556](https://github.com/anthropics/skills/issues/556) |

---

## 3. High-Potential Pending Skills

Active PRs that are updated recently and likely to merge soon:

| Skill | Updated | Why It Matters |
|-------|---------|----------------|
| **[feature-dev workflow fix](https://github.com/anthropics/skills/pull/363)** | 2026-02-12 | Critical bug fix—prevents Phase 6/7 skipping in TodoWrite workflow. |
| **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | 2026-03-03 | Persistent memory system for AI agents across conversations. |
| **[x402 BSV micropayments](https://github.com/anthropics/skills/pull/374)** | 2026-02-17 | Natural-language AI service payments via Bitcoin SV. |
| **[YAML validation improvements](https://github.com/anthropics/skills/pull/361)** | 2026-02-12 | Pre-parse detection of unquoted special characters—improves skill reliability. |
| **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | 2026-03-04 | Addresses community health gap; boosts repo from 25% → better GitHub health score. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust document processing capabilities (typography, ODT, DOCX) paired with urgent infrastructure fixes to resolve namespace conflicts, duplicate skills, and enterprise authentication barriers.**

---

# Claude Code Community Digest
**2026-03-19**

---

## Today's Highlights

Version **v2.1.78** shipped with important hook enhancements: a new `StopFailure` event for API error handling and `${CLAUDE_PLUGIN_DATA}` for persistent plugin state. The community is actively developing plugin-based workarounds for several platform-specific bugs, including Windows BSOD issues and terminal scroll regressions. A highly-upvoted feature request for MCP Sampling support continues gaining traction as users seek ways to leverage Claude Max subscriptions and reduce API costs.

---

## Releases

### v2.1.78
- **`StopFailure` hook event** — Fires when a turn ends due to API errors (rate limits, auth failures, etc.), enabling better error handling in automation workflows
- **`${CLAUDE_PLUGIN_DATA}` variable** — Provides plugins with persistent state that survives updates; `/plugin uninstall` now prompts before deleting this data
- **`effort` parameter** — Partially documented in release notes (truncated), appears related to model effort level configuration

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#34229](https://github.com/anthropics/claude-code/issues/34229)** - Phone verification | 456 comments, 522 👍. Massive ongoing frustration with phone verification requirements blocking access. |
| 2 | **[#1785](https://github.com/anthropics/claude-code/issues/1785)** - MCP Sampling support | 92 👍. Users want Claude Code to support MCP Sampling to use Claude Max subscriptions instead of pay-per-token API calls. |
| 3 | **[#10238](https://github.com/anthropics/claude-code/issues/10238)** - Subdirectories in skills | 106 👍. Skills organization limited to flat structure; teams want hierarchical skill directories. |
| 4 | **[#28571](https://github.com/anthropics/claude-code/issues/28571)** - Remote control resync | iOS-to-desktop remote sessions silently fail after connection drops with no user indication. |
| 5 | **[#22685](https://github.com/anthropics/claude-code/issues/22685)** - macOS login loop | Desktop app completely unusable due to persistent "Invalid authorization" errors. |
| 6 | **[#35950](https://github.com/anthropics/claude-code/issues/35950)** - Web UI to Desktop connection | claude.ai/code web sessions show "Environment in use" and fail to execute tools locally. |
| 7 | **[#28125](https://github.com/anthropics/claude-code/issues/28125)** - Private GitHub marketplace | Cowork feature can't add private GitHub marketplaces, blocking enterprise plugin distribution. |
| 8 | **[#22735](https://github.com/anthropics/claude-code/issues/22735)** - Windows silent exits | Claude Code exits gracefully mid-operation during Write/Bash on Windows with NPM installations. |
| 9 | **[#32964](https://github.com/anthropics/claude-code/issues/32964)** - Background task disk fill | Background agent output files grow unbounded after crashes, potentially filling disks. |
| 10 | **[#35942](https://github.com/anthropics/claude-code/issues/35942)** - Protected dir prompts | v2.1.78's new protected directory prompts (`/git`, `.claude/`) now fire even with `bypassPermissions` enabled. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | **[#35710](https://github.com/anthropics/claude-code/pull/35710)** - tool-mutex plugin | **Critical**: Prevents Windows BSOD (Wof.sys) by adding concurrency limits to parallel filesystem operations. |
| 2 | **[#35960](https://github.com/anthropics/claude-code/pull/35960)** - model-router plugin | Classifies prompts with Haiku and recommends optimal model/effort level via `UserPromptSubmit` hook. |
| 3 | **[#35683](https://github.com/anthropics/claude-code/pull/35683)** - scroll-fix plugin | Fixes terminal scroll-to-top regression across all platforms using cursor-clamping in synchronized output. |
| 4 | **[#35864](https://github.com/anthropics/claude-code/pull/35864)** - worktree-guardian plugin | Warns about orphaned agent worktrees with uncommitted changes; `/worktree-audit` command for inspection. |
| 5 | **[#11713](https://github.com/anthropics/claude-code/pull/11713)** - developer-utilities plugin | Adds 8 commands: `/clean`, `/validate-commands`, session picker, and more for power users. |
| 6 | **[#35684](https://github.com/anthropics/claude-code/pull/35684)** - bridge-fix plugin | Fixes Chrome extension bridge connection failure for Max subscribers with `tengu_copper_bridge`. |
| 7 | **[#35761](https://github.com/anthropics/claude-code/pull/35761)** - powershell-default plugin | Replaces Bash tool default shell with PowerShell 7+ Preview across all platforms. |
| 8 | **[#15806](https://github.com/anthropics/claude-code/pull/15806)** - UTF-8 safe slicing | **Merged**: Fixes Rust panics when processing Korean/CJK multi-byte text. |
| 9 | **[#35168](https://github.com/anthropics/claude-code/pull/35168)** - Etudes plugin | Sprint coach that interviews builders and generates 3-5 day sprints with daily check-ins. |
| 10 | **[#35543](https://github.com/anthropics/claude-code/pull/35543)** - SDK headless fix | **Merged**: Fixes `resultmessage` never emitted in headless SDK mode. |

---

## Feature Request Trends

1. **MCP Sampling Integration** — Strong demand for Claude Code to act as a full MCP client, leveraging Claude Max subscriptions to reduce API costs
2. **Intent-based Model Routing** — Multiple requests for plugins/hooks to programmatically set model and effort level per-request (#30806)
3. **Skills Organization** — Subdirectory support for hierarchical skill management in complex projects
4. **Context Visibility** — Expose token count and context window utilization in status line (#35963)
5. **Session Quality of Life** — Auto-naming sessions based on first prompt, similar to ChatGPT conversation titles

---

## Developer Pain Points

1. **Authentication & Access** — Phone verification issues dominate community frustration; login loops on Desktop remain unresolved for many
2. **Cross-platform Stability** — Windows users face BSODs and silent crashes; macOS users report persistent authentication failures
3. **Remote Control Reliability** — Session drops between mobile and desktop are silent and require manual reconnection
4. **Plugin Development Friction** — Documentation gaps around frontmatter, `hooks/hooks.json`, and validation processes
5. **Permission System Overreach** — New protected directory prompts interfere with `bypassPermissions` workflows, suggesting security defaults may be too aggressive for power users

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-19

## 1. Today's Highlights
The OpenAI Codex team is aggressively iterating on the **Rust-based CLI infrastructure**, releasing four alpha versions (up to `v0.116.0-alpha.8`) in the last 24 hours. Concurrently, engineering efforts are focused on a major architectural overhaul involving a new **exec-server** for sandboxed filesystem operations and hardened plugin security gates. On the community front, users continue to report significant friction regarding **rate limits**, **Windows sandbox stability**, and the highly requested **macOS Intel support** for the desktop app.

## 2. Releases
*   **rust-v0.116.0-alpha.8**: The latest alpha release in the rapid `0.116.0` iteration cycle.
    *   **Link:** [github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.8)

## 3. Hot Issues

1.  **[OPEN] macOS Intel (x86_64) Support for Desktop App** ([#10410](https://github.com/openai/codex/issues/10410))
    *   **Why:** The most upvoked issue (👍 186). Users on Intel Macs are unable to use the new Codex Desktop App, requesting a Universal build or specific x86_64 support.
2.  **[OPEN] Excessive Token Consumption in VS Code Extension** ([#14593](https://github.com/openai/codex/issues/14593))
    *   **Why:** Users report that the latest VS Code extension (v26.311.21342) is "burning tokens" much faster than expected, leading to premature usage caps.
3.  **[OPEN] 401 Unauthorized Errors in CLI** ([#12764](https://github.com/openai/codex/issues/12764))
    *   **Why:** A high-volume bug affecting Windows and agent workflows. Users encounter `401 Unauthorized` and stream disconnections, blocking CLI usage entirely.
4.  **[OPEN] Feature Request: Remote Development Support** ([#10450](https://github.com/openai/codex/issues/10450))
    *   **Why:** High demand (👍 388) for the Desktop App to support SSH/Remote Development contexts, similar to VS Code's capabilities, which is currently a major blocker for professional workflows.
5.  **[OPEN] Reconnecting Issues in Desktop App (Europe)** ([#14209](https://github.com/openai/codex/issues/14209))
    *   **Why:** Users report severe stability issues and constant "reconnecting" loops in the Desktop App, particularly affecting European users.
6.  **[OPEN] Feature Request: LSP Integration for CLI** ([#8745](https://github.com/openai/codex/issues/8745))
    *   **Why:** Strong community support (👍 188) for built-in Language Server Protocol support in the CLI to improve code intelligence and diagnostic accuracy.
7.  **[OPEN] Paid Usage Dropping Too Quickly** ([#14762](https://github.com/openai/codex/issues/14762))
    *   **Why:** Users purchasing extra credits report rapid depletion, suspecting hidden costs or inefficiencies in how background tasks (like OpenClaw) consume credits.
8.  **[OPEN] CLI 0.115.0 Approval Prompt Regression** ([#14936](https://github.com/openai/codex/issues/14936))
    *   **Why:** A recent regression causes the CLI to prompt for approval on nearly every command, ignoring the "don't ask again" flag and breaking automation flows.
9.  **[OPEN] MCP Zombie Processes & Memory Leak** ([#12491](https://github.com/openai/codex/issues/12491))
    *   **Why:** Critical performance bug where the Desktop App spawns MCP child processes that are not reaped, leading to 1300+ zombie processes and massive memory leaks.
10. **[OPEN] Sandbox Setup Error on Windows** ([#10601](https://github.com/openai/codex/issues/10601))
    *   **Why:** Windows users continue to face significant friction with sandbox initialization, preventing the agent from running edits successfully.

## 4. Key PR Progress

1.  **fix: harden plugin feature gating** ([#15104](https://github.com/openai/codex/pull/15104))
    *   Re-submission of security hardening for plugin gates, ensuring feature configs strictly control plugin availability.
2.  **Add exec-server filesystem RPC implementation** ([#15091](https://github.com/openai/codex/pull/15091))
    *   Part of a major architectural stack (3/3) moving filesystem operations into a sandboxed exec-server RPC, removing in-process file reads.
3.  **[app-server] Reap orphaned idle threads** ([#14997](https://github.com/openai/codex/pull/14997))
    *   Fixes the critical memory leak/zombie process issue by ensuring local stdio MCP servers are killed when threads lose subscribers.
4.  **core: add a sandbox-backed filesystem helper** ([#14989](https://github.com/openai/codex/pull/14989))
    *   Refactors `view_image` and other file operations to run strictly within the sandbox, preventing privilege escalation.
5.  **Add i18n scaffolding** ([#15101](https://github.com/openai/codex/pull/15101))
    *   Laying the groundwork for internationalization (i18n) support, starting with elicitation messages.
6.  **Wire remote app-server auth through the client** ([#14853](https://github.com/openai/codex/pull/14853))
    *   Implements the client-side logic for remote app-server websocket authentication, enabling secure remote session connections.
7.  **Feat: reuse persisted model and reasoning effort** ([#14888](https://github.com/openai/codex/pull/14888))
    *   Improves quality of life by ensuring resumed threads remember the model and reasoning settings used previously.
8.  **Simple directory mentions** ([#14970](https://github.com/openai/codex/pull/14970))
    *   TUI enhancement allowing users to mention directories (with a trailing slash) to better scope context.
9.  **[oai] feature: add granular builtin tool enablement** ([#14525](https://github.com/openai/codex/pull/14525))
    *   Adds configuration surfaces (`config.tools`) to enable/disable specific built-in tools per thread.
10. **chore: add zsh-fork support to macOS sandbox debugging** ([#15031](https://github.com/openai/codex/pull/15031))
    *   Developer tooling update to better debug sandbox behaviors specifically related to zsh fork execution on macOS.

## 5. Feature Request Trends
*   **Expanded Platform Support:** The community is clamoring for **macOS Intel (x86_64)** support and better **Windows/WSL** integration.
*   **Remote & Professional Workflows:** High demand for **Remote Development** (SSH) capabilities in the Desktop App and **LSP support** in the CLI to match VS Code's utility.
*   **Resource & Model Control:** Developers want finer control over costs, specifically preventing **rapid token burn**, and the ability to assign **specific models/providers to subagents**.

## 6. Developer Pain Points
*   **Reliability vs. Speed:** The rapid release of alpha versions is destabilizing some workflows; users are experiencing regressions in sandbox approvals and authentication.
*   **Windows Instability:** Windows users face a disproportionate number of bugs involving sandboxing, authentication loops, and path normalization.
*   **Usage Anxiety:** The opaque nature of token consumption (particularly with background agents) is causing frustration among Business/Pro subscribers who hit caps unexpectedly.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-19

## 1. Today's Highlights
The Gemini CLI ecosystem is undergoing a significant architectural evolution focused on **agent memory** and **workflow isolation**. A major push is underway to replace the basic `save_memory` tool with a sophisticated Memory Manager Subagent capable of routing context between global and project scopes (#22726). Concurrently, new Git worktree integration (#22973) and Spec-Driven Development (SDD) refactors (#22871) are landing to support robust parallel execution, while critical fixes target "ghosting" (context dropping) in Plan Mode (#22266, #23020).

## 2. Releases
*No new stable releases were recorded in the last 24 hours. The last tagged version is v0.35.0-preview.1.*

## 3. Hot Issues

1.  **[RFC] Hands-Free Multimodal Voice Mode Architecture** [#21869](https://google-gemini/gemini-cli/issue/21869)
    A high-engagement proposal to transform the CLI into a real-time, hands-free voice coding assistant. The community is actively debating the architecture required for low-latency audio interaction.

2.  **Agent "Ghosts" User After Plan Approval** [#22266](https://google-gemini/gemini-cli/issue/22266)
    A critical workflow blocker where the agent silently drops context and stops execution immediately after a user approves a generated plan. This is a high priority for the maintainers.

3.  **Assess Impact of AST-Aware Tools** [#22745](https://google-gemini/gemini-cli/issue/22745)
    An Epic investigating the integration of Abstract Syntax Tree (AST) tools. The goal is to reduce token noise and improve precision by allowing the agent to "read" code structure (methods, classes) rather than just raw text.

4.  **Git Worktree Integration with Subagents** [#22967](https://google-gemini/gemini-cli/issue/22967)
    Request for native support of git worktrees to allow subagents to work in parallel on different branches without file contention, essential for complex multi-tasking workflows.

5.  **Plan Mode Execution Leaks** [#22434](https://google-gemini/gemini-cli/issue/22434)
    Users report that the agent executes code changes while in "Plan Mode," violating the read-only constraint expected during the planning phase.

6.  **Browser Agent Fails on Wayland** [#21983](https://google-gemini/gemini-cli/issue/21983)
    A P1 bug affecting Linux users running Wayland display servers, causing the browser subagent to crash during execution.

7.  **Support Passing Prompts to `/plan`** [#22855](https://google-gemini/gemini-cli/issue/22855)
    A quality-of-life request to allow `/plan [text]` in a single command rather than opening a separate input box, streamlining the planning workflow.

8.  **Subagent Recovery Hides Interruptions** [#22323](https://google-gemini/gemini-cli/issue/22323)
    A reporting bug where subagents report "Success" even when they hit `MAX_TURNS` and fail to complete their analysis, misleading the user regarding task completion.

9.  **Proactive Memory Usage Needed** [#21968](https://google-gemini/gemini-cli/issue/21968)
    Users report that the agent rarely invokes custom skills or subagents (like git/gradle helpers) autonomously, requiring explicit instructions rather than recognizing context.

10. **Interactive `/worktree` Command Request** [#22954](https://google-gemini/gemini-cli/issue/22954)
    Proposal to add a slash command for switching git worktrees mid-session, allowing users to isolate contexts dynamically without restarting the CLI.

## 4. Key PR Progress

1.  **feat(core): Add experimental memory manager agent** [#22726](https://google-gemini/gemini-cli/pull/22726)
    Introduces a new subagent to replace the legacy `save_memory` tool. It adds logic for adding, removing, and organizing memories across global (`~/.gemini/`) and project (`.gemini/`) scopes.

2.  **feat(worktree): Add Git worktree support** [#22973](https://google-gemini/gemini-cli/pull/22973)
    Implements a `WorktreeService` to manage isolated parallel sessions, enabling multiple Gemini agents to operate on different branches of the same repo simultaneously without conflicts.

3.  **fix(plan): Add state transition override** [#23020](https://google-gemini/gemini-cli/pull/23020)
    A direct fix for the "ghosting" issue, adding explicit directives to the system prompt to force the LLM to transition from planning to execution mode correctly.

4.  **feat(core): Text after `/plan` command** [#22833](https://google-gemini/gemini-cli/pull/22833)
    Implements the ability to pass text directly to the `/plan` command, enabling one-action plan generation.

5.  **refactor(sdd): Align prompt instructions** [#22871](https://google-gemini/gemini-cli/pull/22871)
    Finalizes the migration of Spec-Driven Development (SDD) from a legacy concept ("Conductor") to a built-in extension, updating prompt instructions and variable handling.

6.  **feat(core): Resilient subagent tool rejection** [#22951](https://google-gemini/gemini-cli/pull/22951)
    Improves subagent robustness by distinguishing between "Soft Rejection" (retry with feedback) and "Hard Abort" when a user denies a specific tool action.

7.  **feat(core): Generic forbidden resource service** [#23021](https://google-gemini/gemini-cli/pull/23021)
    Adds a kernel-level service to parse `.gitignore` and `.geminiignore` into a standardized list of forbidden resources, enhancing sandbox security.

8.  **fix(plan): Sandbox path resolution** [#22737](https://google-gemini/gemini-cli/pull/22737)
    Prevents LLM hallucinations in Plan Mode by restricting file path resolution to the designated plans directory.

9.  **feat(core): Native Windows Sandboxing** [#21807](https://google-gemini/gemini-cli/pull/21807)
    Implements robust isolation for Windows using Restricted Tokens and Mandatory Integrity Control (MIC), moving away from container dependencies.

10. **fix(ui): Flickering on small terminal heights** [#21416](https://google-gemini/gemini-cli/pull/21416)
    Enhances UI rendering logic to prevent flickering and buffer conflicts on smaller terminals, specifically during tool confirmations.

## 5. Feature Request Trends

*   **Advanced Context Management:** There is a strong demand for "smarter" memory. Users want the agent to distinguish between global preferences (user style) and project facts (codebase structure) and to remember these preferences proactively without manual save commands.
*   **Parallel & Isolated Workflows:** Developers are pushing for better multi-tasking support, specifically through Git worktrees and parallel subagents, to allow the AI to handle multiple independent tasks (e.g., debugging while refactoring) without context bleeding.
*   **Deeper Code Understanding (AST):** A trend toward moving beyond text-search. Requests for AST-aware tools suggest users want the CLI to understand code syntax trees natively for more precise refactoring and navigation.

## 6. Developer Pain Points

*   **Plan Mode Instability:** The transition from "Planning" to "Execution" is currently fragile. Users are frustrated by agents that either refuse to execute (ghosting) or execute prematurely (ignoring read-only constraints).
*   **Subagent Opacity:** When subagents (like `codebase_investigator` or `browser`) fail or hit limits, they often report success or generic errors, making it difficult for developers to debug why a task wasn't completed.
*   **Accidental Exits:** A minor but frequent annoyance where `Ctrl+D` exits the CLI even if text is currently in the input buffer, contrasting with standard shell behavior (#23019).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-19

## 1. Today's Highlights
Version **v1.0.8** has been released, delivering significant quality-of-life improvements including default alternate screen buffer support for a cleaner terminal experience and color fixes for non-truecolor environments like tmux and SSH. On the extensibility front, the team has introduced **extension mode settings** and an experimental **MCP_ALLOWLIST** feature for validating MCP servers against configured registries. Community discussions are currently dominated by terminal rendering issues (scrolling and copy/paste bugs) and requests for more robust hook configurations.

## 2. Releases

### **v1.0.8** (2026-03-18)
**Stability & UI Improvements:**
*   **Terminal Compatibility:** Fixed agent mode labels and borders to display correct colors on non-truecolor terminals (tmux, SSH, screen).
*   **UX:** Enabled alternate screen buffer by default to prevent scrollback history clutter during sessions.
*   **Bug Fix:** Ensured the exit plan mode tool remains available when an extension subprocess joins an active session.

### **v1.0.8-0** (Pre-release/Edge)
**Extensibility & Configuration:**
*   **MCP Security:** Added experimental `MCP_ALLOWLIST` feature flag to validate MCP servers against registries.
*   **Settings:** Added extension mode setting and support for defining hooks in `settings.json` and `settings.local.js`.
*   **CLI:** `--resume` flag now accepts a task ID in addition to a session ID.

## 3. Hot Issues

1.  **[#1584] Incessant Scrolling during long running operations** (Open)
    *   **Why it matters:** Users report disruptive auto-scrolling during long operations ("giving me a seizure"), significantly degrading the UX for complex tasks.
    *   [View Issue](https://github.com/github/copilot-cli/issues/1584)

2.  **[#1897] [triage] You are not authorized** (Open)
    *   **Why it matters:** A blocking authentication issue affecting users with active Copilot Pro subscriptions, preventing CLI usage entirely.
    *   [View Issue](https://github.com/github/copilot-cli/issues/1897)

3.  **[#1157] Feature Request: Global Hooks Configuration** (Open)
    *   **Why it matters:** High-demand request (👍 16) to allow hooks to be configured globally rather than per-repository, aligning with workflows in tools like Claude Code.
    *   [View Issue](https://github.com/github/copilot-cli/issues/1157)

4.  **[#970] Copilot app blocked by macOS Gatekeeper** (Open)
    *   **Why it matters:** Recurring friction for Mac users installing via Homebrew (👍 18), requiring manual security overrides after every update.
    *   [View Issue](https://github.com/github/copilot-cli/issues/970)

5.  **[#2099] "Claude Sonnet 4.5" is not available warning** (Open)
    *   **Why it matters:** Confusion regarding model availability in custom agents; users are defining models that fall back silently, affecting predictability.
    *   [View Issue](https://github.com/github/copilot-cli/issues/2099)

6.  **[#2117] React hooks error: 'Rendered more hooks than during the previous render'** (Open)
    *   **Why it matters:** A crash in v1.0.6 related to the UI rendering engine, indicating potential stability regressions in the TUI framework.
    *   [View Issue](https://github.com/github/copilot-cli/issues/2117)

7.  **[#1838] Copilot CLI hangs in Nix/direnv environments** (Open)
    *   **Why it matters:** Specific deadlock issue affecting developers using Nix flake environments, rendering the tool unusable in these setups.
    *   [View Issue](https://github.com/github/copilot-cli/issues/1838)

8.  **[#2143] Text selection and copy (Ctrl+C) captures only first character** (Open)
    *   **Why it matters:** Critical usability regression where users cannot copy output from the terminal, blocking basic workflows.
    *   [View Issue](https://github.com/github/copilot-cli/issues/2143)

9.  **[#2101] Transient API Error & Rate Limiting** (Open)
    *   **Why it matters:** Users hitting rate limits faster than expected, coupled with retry loops that degrade the interactive experience.
    *   [View Issue](https://github.com/github/copilot-cli/issues/2101)

10. **[#1944] Mouse wheel scroll captured by input box** (Closed)
    *   **Why it matters:** Windows regression affecting navigation through conversation history; likely addressed in recent UI overhauls.
    *   [View Issue](https://github.com/github/copilot-cli/issues/1944)

## 4. Key PR Progress
*   **[#1850] Create blank.yml:** Currently the only active PR update; appears to be a workflow configuration update.
    *   [View PR](https://github.com/github/copilot-cli/pull/1850)

*(Note: PR activity was minimal in the last 24 hours. Most changes appear to be released directly in v1.0.8.)*

## 5. Feature Request Trends
*   **Global Configuration:** Strong demand for **Global Hooks** and centralized settings (Issue #1157) to avoid repetitive repository setup.
*   **Model Transparency & Selection:** Users want explicit control and visibility over which model (e.g., Claude vs. Copilot native) is running in subagents (Issue #2099, #2104).
*   **API Customization:** Continued interest in pointing the CLI to custom base URLs or alternative endpoints (Issue #104) for use with proxies or non-standard deployments.
*   **Enhanced Subagent Capabilities:** Requests for subagents to access skills defined in the `.github/skill` folder (Issue #839).

## 6. Developer Pain Points
*   **Clipboard & Input Handling:** A cluster of issues surrounds text interaction—copying text (especially Unicode/CJK characters) is broken or inconsistent on WSL, Linux, and Windows (Issues #1918, #1940, #2143).
*   **Terminal Compatibility:** While v1.0.8 fixed colors, scrolling, and buffer management remain contentious points, particularly in `tmux`, `screen`, and `SSH` environments (Issues #1584, #2110).
*   **Stability in Dev Environments:** Specific hangs and crashes in complex environments like Nix/direnv and during parallel agent execution suggest growing pains with advanced shell integrations (Issues #1838, #2132).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-03-19

## 1. Today's Highlights
**Version 1.24.0** has been released, headlined by a **Unified Prompt Router** that preserves user input across agent turns and significant enhancements to **Plan Mode**, including multi-option selection during approval and the ability to edit plan files via `StrReplaceFile`. Concurrently, performance optimizations landed to streamline Windows startup times by deferring heavyweight module loading, addressing a critical user pain point.

## 2. Releases
*   **v1.24.0** ([Changelog](https://github.com/MoonshotAI/kimi-cli/pull/1496))
    *   **Unified Prompting:** Replaced the dual-prompt architecture with a persistent input router, ensuring text isn't lost during agent execution cycles (#1491).
    *   **Plan Mode Upgrades:** AI can now propose multiple plan options for user selection (#1494) and directly edit plan files using `StrReplaceFile` (#1490).
    *   **Performance:** Optimized startup paths and lazy-loaded CLI commands to improve launch speed (#1486).
    *   **UI Polish:** Raised thresholds for aggressive text collapsing in the shell interface (#1488).

## 3. Hot Issues
1.  **[#1493] CLI Animation Freeze** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/1493))
    *   *Why:* Users report the loading animation stops turning during runs, causing confusion about whether the process has hung or is still working.
2.  **[#1442] Billing/Invoice Window Request** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/1442))
    *   *Why:* A recurring request from enterprise users seeking a UI method to generate invoices for Kimi Code subscriptions.
3.  **[#1296] Intermittent MCP Disconnection** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/1296))
    *   *Why:* Long-standing instability with Model Context Protocol (MCP) connections disconnecting unexpectedly during coding sessions.
4.  **[#1487] HTTPS MCP Header Requirements** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/1487))
    *   *Why:* Developers note that the MCP HTTP client fails without a standard `User-Agent` header, blocking custom server integrations.
5.  **[#1495] Configurable Plan Storage Paths** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/1495))
    *   *Why:* Users want to customize where `Plan Mode` artifacts are saved (e.g., `.kimi/plans`) to keep project roots clean.
6.  **[#1489] Aggressive Text Collapsing (Resolved)** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/1489))
    *   *Why:* Highlighted a UX friction point where short pasted snippets were hidden too aggressively, making voice input hard to verify. Fixed in v1.24.0.
7.  **[#1343] Slow Windows Startup (Resolved)** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/1343))
    *   *Why:* Significant friction for Windows users installed via `uv`, experiencing 600ms+ delays due to module loading. Fixed by lazy-loading optimizations.
8.  **[#1492] Command Length Truncation** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/1492))
    *   *Why:* Developers find the shell command truncation too aggressive, hiding context in the UI (e.g., `Used Shell (cd /home... | tail -10)`).
9.  **[#884] Dependency Updates** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/884))
    *   *Why:* Large dependency bump (Ruff 0.14 -> 0.15) highlights ongoing maintenance to keep the linter stack modern.
10. **[#1485] Token Stats Test Flakes** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/1485))
    *   *Why:* Indicates active work stabilizing the test suite for new token usage analytics features.

## 4. Key PR Progress
1.  **[#1491] feat: Unified Prompt Router** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/1491))
    *   Refactors the core input loop to maintain state during agent runs, preventing UI input loss.
2.  **[#1494] feat: Plan Mode Multi-Option** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/1494))
    *   Allows the model to offer distinct plan variants (A/B/C) rather than a simple binary approve/reject.
3.  **[#1490] feat: Plan File Editing** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/1490))
    *   Enables `StrReplaceFile` inside plan mode, streamlining the iterative planning workflow.
4.  **[#1486] perf: Startup Optimization** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/1486))
    *   Addresses Windows latency by deferring imports for loggers and CLI subcommands until needed.
5.  **[#1488] refactor: Paste Thresholds** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/1488))
    *   Adjusts UI folding logic to 15 lines/1000 chars, improving usability for voice/typeless input.
6.  **[#1496] chore: Version Bump 1.24.0** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/1496))
    *   Aggregates the Unreleased changes into the stable release and syncs documentation.
7.  **[#1485] fix: Token Stats Tests** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/1485))
    *   Fixes brittle tests in the new token ledger system to ensure accurate stats reporting.
8.  **[#884] chore(deps): Bump Ruff** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/884))
    *   Automated dependency update to the latest Ruff linter version.

## 5. Feature Request Trends
*   **Customizable UI Verbosity:** Users are requesting control over how much information is hidden (e.g., command collapsing in #1492, paste collapsing in #1489).
*   **Plan Mode Persistence:** Growing interest in managing the artifact outputs of Plan Mode, specifically file locations and formats (#1495).
*   **Enterprise/Billing UX:** Non-technical friction points, such as accessing invoices directly within the CLI tool (#1442).
*   **MCP Protocol Robustness:** Continued demand for stable and standard-compliant MCP connections (headers, disconnect handling) (#1487, #1296).

## 6. Developer Pain Points
*   **UI Responsiveness Confusion:** The lack of distinct visual feedback (frozen animations) makes it difficult to distinguish between a heavy process and a hang (#1493).
*   **Platform-Specific Latency:** Windows users specifically faced slow startup times due to Python import overhead, though this has been addressed in the latest release (#1343).
*   **Input State Persistence:** The previous behavior of clearing input buffers during agent execution was a major friction point, now resolved in v1.24.0 (#1491).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-19
**Source:** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 1. Today's Highlights
The community is buzzing with activity around the OpenCode Desktop app (Tauri-based), which is currently in beta. Major discussions focus on WSL2 performance issues, specifically input lag and freezing, with recent findings pointing toward Node.js v25 JIT bugs. On the development side, significant progress has been made on memory optimization and new features like GitLab Agent support and ReScript LSP.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

*   **[#3936 [OPEN] Github Enterprise authorization](https://github.com/anomalyco/opencode/issues/3936)**
    A long-standing issue regarding login failures with GitHub Enterprise. With 57 comments, this is a critical blocker for enterprise adoption. A companion PR (#18103) is currently open to address multistep auth flows.

*   **[#8598 [CLOSED] Copilot requested model not supported](https://github.com/anomalyco/opencode/issues/8598)**
    Users reported that specific Copilot models (e.g., 5.2-Codex, Raptor) fail in OpenCode despite working in VSCode. This highlights ongoing sync issues between OpenCode and upstream Copilot updates.

*   **[#4340 [CLOSED] Add Windows arm64 support](https://github.com/anomalyco/opencode/issues/4340)**
    A highly requested feature (23 👍) for Windows 11 arm64 users. The closure suggests this support may now be implemented or resolved via recent updates.

*   **[#5220 [OPEN] Glob search uses 100% of CPU](https://github.com/anomalyco/opencode/issues/5220)**
    A critical performance bug where file searching spikes CPU usage to 100%, severely impacting usability. PR #18137 is currently attempting to address memory and performance issues related to context handling.

*   **[#4659 [OPEN] Sliding window context management](https://github.com/anomalyco/opencode/issues/4659)**
    A deep technical discussion on improving context compaction. The author proposes a "sliding window" approach to prevent the AI from losing context during long-running sessions, gaining traction with 18 👍.

*   **[#8484 [OPEN] Screen lag/freezing when typing text (WSL2)](https://github.com/anomalyco/opencode/issues/8484)**
    Users on WSL2/TMUX/Alacritty setups report significant input lag. This ties into broader Windows/WSL performance concerns seen in recent issues.

*   **[#18132 [OPEN] TUI freezes on WSL2 traced to Node.js v25.8](https://github.com/anomalyco/opencode/issues/18132)**
    A fascinating deep-dive analysis suggesting that the freezes are caused by the Node.js v25.8 JIT generating SIGILL instructions on specific hardware (AMD Ryzen).

*   **[#18023 [OPEN] Permission "always" should be conversation-level](https://github.com/anomalyco/opencode/issues/18023)**
    A UX friction point: users want the "always allow" permission setting to persist only for the current conversation rather than the global session, for safety reasons.

*   **[#17796 [OPEN] TUI: Copy via Selection no longer works](https://github.com/anomalyco/opencode/issues/17796)**
    A regression in the Terminal UI where selecting text claims to copy it but fails to update the clipboard, disrupting workflows.

*   **[#15338 [OPEN] Mini Max M2.5 Caching Problem](https://github.com/anomalyco/opencode/issues/15338)**
    Users of the OpenCode Zen service report extremely poor cache hit rates with the MiniMax model, impacting cost and latency.

## 4. Key PR Progress

*   **[#18137 reduce memory usage during prompting](https://github.com/anomalyco/opencode/pull/18137)**
    A major optimization PR aiming to reduce peak RSS memory usage from ~8GB to ~1.2GB via lazy boundary scanning and context windowing.

*   **[#18014 Enable GitLab Agent Platform](https://github.com/anomalyco/opencode/pull/18014)**
    Adds full support for the GitLab Agent Platform with dynamic workflow model discovery, expanding OpenCode's enterprise capabilities.

*   **[#17995 Add ReScript LSP support](https://github.com/anomalyco/opencode/pull/17995)**
    Implements language server support for `.res` and `.resi` files, enhancing the developer experience for the ReScript community.

*   **[#18103 Integrate multistep auth flows into desktop app](https://github.com/anomalyco/opencode/pull/18103)**
    Companion to Issue #3936, this PR aims to fix GitHub Enterprise authorization within the new Tauri desktop application.

*   **[#16918 OpenCode 2-0](https://github.com/anomalyco/opencode/pull/16918)**
    A massive structural refactor involving the LSP server and core improvements, likely paving the way for the next major version.

*   **[#16227 Git repo cloning dialog + shortcut](https://github.com/anomalyco/opencode/pull/16227)**
    Improves the Desktop UX by allowing users to clone repos directly from the interface without switching to a browser or terminal.

*   **[#15697 Make questions popup collapsible](https://github.com/anomalyco/opencode/pull/15697)**
    A UI tweak to reduce clutter by making the questions prompt collapsible, currently in beta/vouched status.

*   **[#18142 Add session screenshot export](https://github.com/anomalyco/opencode/pull/18142)**
    Adds the ability to export sessions as screenshots, a handy feature for sharing and reporting.

*   **[#17276 Add --output-schema flag](https://github.com/anomalyco/opencode/pull/17276)**
    Extends the CLI to support structured output schemas, facilitating integration with other tools and scripts.

*   **[#18126 Show concrete config validation errors](https://github.com/anomalyco/opencode/pull/18126)**
    A closed (merged) PR that improves the CLI by printing detailed error messages when the configuration file is invalid.

## 5. Feature Request Trends
*   **Desktop UX Parity:** Users are requesting standard desktop behaviors, such as minimizing to the system tray (#18134) and proper notification handling (#18133), as they transition from the TUI to the Tauri app.
*   **Context Management:** There is a strong desire for smarter context handling, specifically moving away from simple truncation toward sliding window or summary-based retention (#4659).
*   **Remote & Enterprise Workflows:** Requests for remote directory switching (#18119) and provider diversification (e.g., DigitalOcean Inference Hub #18124) indicate a maturing user base with complex infrastructure needs.

## 6. Developer Pain Points
*   **WSL2 Stability:** The "Freeze on WSL2" theme is pervasive (#8484, #17985, #11145), with deep technical investigation (#18132) suggesting incompatibility between newer Node.js versions and the WSL kernel on certain hardware.
*   **Resource Consumption:** High CPU usage during glob searches (#5220) and massive memory spikes during prompting remain significant hurdles for performance.
*   **Model & Auth Integration:** Enterprise users continue to struggle with GitHub Enterprise login (#3936) and inconsistent model support for Copilot (#8598) and custom providers.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-19

## 1. Today's Highlights
The Qwen Code ecosystem sees significant activity with a new **TypeScript SDK v0.1.6** release bundling CLI v0.13.0, alongside nightly builds for the main CLI. The community is actively discussing stability, with critical reports of "edit failed" errors damaging codebases (#2460) and VS Code extension initialization failures (#2382). Development momentum remains strong on the v0.13.0 milestone, focusing heavily on **Agent Arena multi-model execution**, UI enhancements (token usage displays), and system stability improvements like `/compress` reliability fixes.

## 2. Releases
*   **[sdk-typescript-v0.1.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.6-preview.0)**: A significant release bundling **CLI version 0.13.0**. This backfilled release fixes previous workflow failures and includes version bumps to 0.8.2.
*   **[v0.12.6-nightly.20260318](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.6-nightly.20260318.ac30c98a2)**: Latest nightly build for cutting-edge testing.
*   **[v0.12.5-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.12.5-preview.0)**: Preview release channel update.

## 3. Hot Issues
1.  **[Critical: Edit Failures Damaging Codebases](https://github.com/QwenLM/qwen-code/issues/2460)** (#2460)
    *   **Why it matters:** Users report severe "edit failed" errors in both CLI and VS Code plugins. The tool fails to locate `old_string` text and reportedly attempts to use node/ps processes to edit content, resulting in corrupted project files.
2.  **[VS Code Extension Initialization Failure](https://github.com/QwenLM/qwen-code/issues/2382)** (#2382)
    *   **Why it matters:** A regression introduced after v0.12.2 leaves users stuck at "Preparing Qwen Code..." regardless of VS Code version. High comment volume indicates widespread impact.
3.  **[Quota Reduction Complaints](https://github.com/QwenLM/qwen-code/issues/2426)** (#2426)
    *   **Why it matters:** Users perceive a significant reduction in daily free API quotas (from 1000 to ~300 requests), sparking discussion about the "free tier" value proposition.
4.  **[Crash on Command Permission Prompt](https://github.com/QwenLM/qwen-code/issues/2306)** (#2306)
    *   **Why it matters:** A regression in v0.12.0 causes the CLI to crash immediately when users select 'always allow' for command execution, breaking automated workflows.
5.  **[Context Compression Errors](https://github.com/QwenLM/qwen-code/issues/2459)** (#2459)
    *   **Why it matters:** When context hits 100% usage, the `/compress` command throws an "Internal error," forcing users to terminate the session rather than seamlessly continuing.
6.  **[Subagent System Parity Request](https://github.com/QwenLM/qwen-code/issues/2409)** (#2409)
    *   **Why it matters:** A strategic feature request to bring Qwen Code's subagent system (currently ~40-45% feature complete) to parity with competitors like Claude Code.
7.  **[LSP Configuration Ignored](https://github.com/QwenLM/qwen-code/issues/1873)** (#1873)
    *   **Why it matters:** Long-standing bug where the LSP support ignores `.lsp.json` configurations, returning "No document symbols found" for valid C/C++ files, hindering coding assistance accuracy.
8.  **[Model Switching Wipes Manual Configs](https://github.com/QwenLM/qwen-code/issues/2454)** (#2454)
    *   **Why it matters:** A usability bug where using the `/model` command silently deletes manually added model configurations in `settings.json`, causing data loss for power users.
9.  **[OpenAI API Tool Response Compliance](https://github.com/QwenLM/qwen-code/issues/2450)** (Ref PR #2450)
    *   **Why it matters:** Users connecting via OpenAI-compatible proxies (e.g., OneAPI, OpenRouter) face 400 errors due to non-compliant tool response formats in the message history.
10. **[MCP Streamable HTTP Transport Failure](https://github.com/QwenLM/qwen-code/issues/2436)** (#2436)
    *   **Why it matters:** The MCP client fails to connect to servers using the newer "Streamable HTTP Transport" mode (spec 2024-11-05), limiting integration with modern MCP servers.

## 4. Key PR Progress
1.  **[feat(arena): Multi-Model Competitive Execution](https://github.com/QwenLM/qwen-code/pull/1912)** (#1912)
    *   Implements the "Agent Arena" feature, allowing users to run tasks across multiple AI models in parallel (using git worktrees for isolation) and compare/merge results.
2.  **[fix: /compress reliability and error handling](https://github.com/QwenLM/qwen-code/pull/2464)** (#2464)
    *   Critical fix for Issue #2459. Ensures failed compression flags are reset and implements progressive strategies (dropping oldest messages) to fit context limits.
3.  **[feat: Display token usage in progress indicator](https://github.com/QwenLM/qwen-code/pull/2445)** (#2445)
    *   Enhances UI by showing real-time token counts in the loading spinner, giving developers visibility into consumption costs during generation.
4.  **[feat: Add `/context` command](https://github.com/QwenLM/qwen-code/pull/1835)** (#1835)
    *   Adds a diagnostic command to visualize context window usage breakdown via a color-coded progress bar.
5.  **[feat(core): Concurrent task tool execution](https://github.com/QwenLM/qwen-code/pull/2434)** (#2434)
    *   Performance optimization allowing "task" tools (spawning independent sub-agents) to run concurrently rather than sequentially.
6.  **[fix(core): Truncation support for MCP tool output](https://github.com/QwenLM/qwen-code/pull/2446)** (#2446)
    *   Prevents MCP tools from overwhelming the context window with large outputs by enforcing standard truncation logic.
7.  **[fix: OpenAI API compliance for tool response](https://github.com/QwenLM/qwen-code/pull/2450)** (#2450)
    *   Fixes storage and conversion format for tool responses to ensure compatibility with OpenAI-compatible APIs (resolves 400 errors).
8.  **[feat(vscode): Tab key fill-only behavior](https://github.com/QwenLM/qwen-code/pull/2431)** (#2431)
    *   Refines UX: `Tab` now completes the suggestion without sending, allowing argument editing, while `Enter` sends immediately.
9.  **[feat(vscode): Fuzzy search for file completion](https://github.com/QwenLM/qwen-code/pull/2437)** (#2437)
    *   Replaces substring matching with backend fuzzy search for file completions, improving performance in large workspaces.
10. **[feat: `auth` CLI command & Claw skill](https://github.com/QwenLM/qwen-code/pull/2440)** (#2440)
    *   Introduces a dedicated `qwen auth` command to streamline OAuth and API Key configuration flows.

## 5. Feature Request Trends
*   **Multi-Agent Collaboration:** Strong demand for "Agent Teams" (#1815) and parallel execution environments where multiple models can work on the same task simultaneously for comparison.
*   **Enhanced Context Management:** Users want more granular control and visibility over context windows, driving requests for real-time usage stats in the UI (#2013, #2452) and reliable compression mechanisms.
*   **Subagent & Skill Ecosystem:** Requests to deepen subagent capabilities (#2409) and standardize skill loading across different agent configuration directories (`.cursor`, `.claude`, `.qwen`).
*   **IDE Integration Parity:** Requests for better `@` mention support (folders + fuzzy search) (#2325) and image pasting support in VS Code (#1978).

## 6. Developer Pain Points
*   **Stability Regressions:** Frequent mentions of features breaking between minor versions (specifically v0.12.2 -> v0.12.3+), particularly regarding the VS Code extension startup and edit tools.
*   **Edit Tool Reliability:** High anxiety regarding the "edit failed" mechanism, with users reporting that the tool's attempt to recover from errors can actively corrupt code files (#2460).
*   **API & Proxy Compatibility:** Recurring friction when using Qwen Code with intermediary proxies (OneAPI, OpenRouter) due to strict API validation or non-standard message formatting (#1779).
*   **Context Window Ceiling:** Users hitting the context limit frequently face "Internal error" or broken sessions, highlighting the need for more robust automatic context management strategies.

</details>