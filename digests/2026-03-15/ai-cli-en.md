# AI CLI Tools Community Digest 2026-03-15

> Generated: 2026-03-14 22:01 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Cross-Tool Analysis
**Report Date:** 2026-03-15 | **Analyst:** Senior Technical Analyst

---

## 1. Ecosystem Overview

The AI CLI tools landscape in mid-March 2026 shows a maturing but intensely competitive ecosystem where vendors are racing to transform experimental command-line agents into production-grade development environments. The primary axis of competition has shifted from basic code generation to **agentic workflow reliability**—specifically around context management, multi-agent orchestration, and platform stability. MCP (Model Context Protocol) has emerged as a de facto extensibility standard, with all major players implementing or expanding support. Meanwhile, cross-platform consistency remains the single largest source of community friction, with Windows/macOS/WSL edge cases dominating issue trackers across every project.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Notable Activity |
|------|-------------|-----------|----------|------------------|
| **Claude Code** | 14+ | 8 | 1 (v2.1.76) | MCP Elicitation support; scroll regression dominating discussions |
| **OpenAI Codex** | 10+ | 10 | 5 (alpha cycle) | Heavy architectural refactoring; TUI → app-server migration |
| **Gemini CLI** | 10 | 10 | 2 (nightly/preview) | Plan Mode fixes; native Linux sandbox; Debug Companion |
| **GitHub Copilot CLI** | 10 | 0 | 0 | UI flickering reports; model configuration requests |
| **Kimi Code CLI** | 6 | 3 | 0 | Cross-platform input fixes (macOS/Windows) |
| **OpenCode** | 10 | 10 | 0 | Copilot billing bug (179 comments); memory leak severity |
| **Qwen Code** | 10 | 10 | 1 (nightly) | Sidebar flexibility merged; tool_calls API fix pending |

**Activity Leaders:** OpenAI Codex and Gemini CLI show the highest development velocity with 10 PRs each. Claude Code leads in release cadence with meaningful feature drops.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Requirements |
|-----------|----------------|----------------------|
| **Context Compaction Control** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code | Pre-compaction hooks, configurable thresholds, guided compression, preventing mid-task stops |
| **Multi-Agent / Subagent Management** | Claude Code, OpenAI Codex, Gemini CLI, Qwen Code | Watchdog runtimes, subagent inboxes, status monitoring, isolated parallel sessions via worktrees |
| **MCP Extensibility** | Claude Code, GitHub Copilot CLI, Gemini CLI | Elicitation support, project-level configs, SSRF security hardening |
| **Terminal UI Stability** | Claude Code, Gemini CLI, GitHub Copilot CLI, OpenCode | Scroll position jumping, streaming flicker, resize handling, VS Code terminal quirks |
| **Platform Parity (Windows/macOS)** | Claude Code, Kimi Code CLI, OpenCode, OpenAI Codex | Secondary drive access, symlink handling, WSL freezes, clipboard/input handling |
| **Session & Conversation Management** | OpenAI Codex, Gemini CLI, Qwen Code, Claude Code | Tree-based branching, session persistence, portable history, `/undo` commands |
| **Granular Model Configuration** | GitHub Copilot CLI, OpenAI Codex, Qwen Code | Task-specific model assignment (compaction vs. reasoning), custom model aliases |

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
|------|-----------------|-------------|-------------------|
| **Claude Code** | Enterprise agentic workflows with MCP extensibility | Enterprise teams, power users | Hook-based plugin system; Cowork remote control feature; strong security guardrails |
| **OpenAI Codex** | Architectural modernization for reliability | Professional developers, VS Code users | Rust-based core; app-server layer; guardian subagent for approvals; watchdog runtime |
| **Gemini CLI** | Agent stability and debugging infrastructure | Developers valuing introspection | Plan Mode refinement; Debug Companion with DAP; native bubblewrap sandbox |
| **GitHub Copilot CLI** | Deep GitHub ecosystem integration | GitHub-native developers | `/pr` workflows, PR feedback resolution, model flexibility for sub-tasks |
| **Kimi Code CLI** | Emerging market with cross-platform basics | Chinese-speaking developers, cost-conscious users | Fixing fundamental input/clipboard issues; API interoperability requests |
| **OpenCode** | Open-source flexibility, multi-provider support | Users wanting model choice | Plugin API depth; mobile expansion requests; Copilot billing as key authentication option |
| **Qwen Code** | VS Code integration quality, workflow safety | VS Code-centric developers | Multi-position sidebar; multi-model review; `/undo` safety nets |

---

## 5. Community Momentum & Maturity

**Most Active Communities:**
1. **OpenCode** — Highest engagement on critical issues (179 comments on #8030 billing bug), indicating a passionate but frustrated user base
2. **OpenAI Codex** — Rapid iteration with 5 alpha releases in 24 hours; strong enterprise demand (macOS Intel support at 163 👍)
3. **Claude Code** — Mature issue tracking with clear pain point aggregation (6+ duplicate scroll issues); active community PR contributions

**Rapidly Iterating:**
- **OpenAI Codex** and **Gemini CLI** are in aggressive development cycles with 10 PRs each, focused on architectural stability
- **Qwen Code** showing momentum with significant UX merges (sidebar flexibility)

**Stabilizing/Maintenance Mode:**
- **GitHub Copilot CLI** — Zero PRs and no releases; focus on triage and feature gathering rather than shipping
- **Kimi Code CLI** — Maintenance fixes for cross-platform basics; no releases

---

## 6. Trend Signals

### Industry-Wide Patterns:

1. **"Context Compaction" is the #1 Technical Challenge**
   Every tool's community is actively discussing how to handle context window limits. The industry is converging on solutions involving user-configurable thresholds, pre-compaction hooks, and guided compression. This is the critical bottleneck for long-running agentic sessions.

2. **MCP Becoming the Extensibility Standard**
   MCP support is now table stakes. The frontier has moved to advanced features like *Elicitation* (mid-task user input) and security hardening. Developers should expect MCP proficiency to be a core skill.

3. **Subagent Architecture Maturing**
   The shift from single-agent to multi-agent systems is evident in Codex's watchdog runtime, Gemini's subagent history fixes, and Qwen's parallel session requests. This enables complex workflows but introduces new failure modes.

4. **Terminal UI Quality is a Differentiator**
   Scroll jumping, streaming flicker, and resize handling are persistent across tools. These "paper cuts" significantly impact daily productivity and are driving users toward VS Code extensions over pure CLI experiences.

5. **Safety Nets are Non-Negotiable**
   Users are demanding `/undo` commands, project-local history, and two-step deletion flows. The "one mistake and no way to recover" problem is a critical adoption barrier for agentic tools taking autonomous actions.

6. **Billing Transparency is a Growing Concern**
   OpenCode's 179-comment billing bug and OpenAI Codex's token burn reports signal that as these tools consume API credits autonomously, users need granular visibility and control over costs.

### Recommendations for Technical Decision-Makers:

| Priority | Recommendation |
|----------|----------------|
| **Immediate** | Test TUI stability in your target environment (VS Code, WSL, etc.) before committing—scroll/flicker bugs affect all tools |
| **Short-term** | Establish context compaction strategies; monitor token consumption closely during evaluation |
| **Strategic** | Invest in MCP-compatible tooling; the protocol is becoming the universal plugin standard |
| **Risk Management** | Implement `/undo` workflows and session backups; agentic tools can make irreversible changes |

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `anthropics/skills` (as of 2026-03-15)

---

## 1. Top Skills Ranking

The following Skills PRs have garnered the most community attention and discussion:

| Rank | Skill | Author | Status | Description |
|------|-------|--------|--------|-------------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | @PGTBoos | 🟢 OPEN | Typographic quality control for AI-generated documents—prevents orphan word wrap, widow paragraphs, and numbering misalignment. Addresses a universal pain point since "every document Claude generates" has these issues. |
| 2 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | @eovidiu | 🟢 OPEN | Two meta-skills for the marketplace: (1) quality analysis across 5 dimensions, (2) security analysis for skill validation. Long-standing PR since Nov 2025. |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | @justinwetch | 🟢 OPEN | Major revision improving clarity, actionability, and internal coherence of the frontend-design skill to ensure instructions are executable within a single conversation. |
| 4 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | @varun29ankuS | 🟢 OPEN | Persistent memory system for AI agents—maintains context across conversations with `proactive_context` calls and rich memory structuring. |
| 5 | **[Google Workspaces Skills](https://github.com/anthropics/skills/pull/299)** | @meticulo3366 | 🟢 OPEN | 6-agent skill suite for personal assistant functionality via GOG CLI: email triage, drafting, calendar management, and task coordination. |
| 6 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | @p19dixon | 🟢 OPEN | 10-step workflow for codebase cleanup—identifies orphaned code, unused files, documentation gaps, and produces a `CODEBASE-STATUS.md` single source of truth. |
| 7 | **[masonry-generate-image-and-videos](https://github.com/anthropics/skills/pull/335)** | @junaid1460 | 🟢 OPEN | Media generation skill using Masonry CLI for Imagen 3.0 images and Veo 3.1 videos with job management. |
| 8 | **[ODT Skill](https://github.com/anthropics/skills/pull/486)** | @GitHubNewbie0 | 🟢 OPEN | OpenDocument (ISO 26300) support—ODT creation, template filling, and HTML parsing for LibreOffice/Google Docs compatibility. |

---

## 2. Community Demand Trends

Analysis of open Issues reveals these high-demand Skill directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Agent Governance & Safety** | Skills for policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems | [Issue #412](https://github.com/anthropics/skills/issues/412) (proposal for `agent-governance` skill) |
| **MCP Integration** | Exposing Skills as Model Context Protocol tools for standardized API interfaces | [Issue #16](https://github.com/anthropics/skills/issues/16) |
| **Enterprise/SSO Compatibility** | Skills that work without requiring `ANTHROPIC_API_KEY` for enterprise users | [Issue #532](https://github.com/anthropics/skills/issues/532) |
| **Platform Stability** | Reliable skill loading, deletion, and upload functionality across Bedrock, API, and Desktop | [Issue #29](https://github.com/anthropics/skills/issues/29), [Issue #406](https://github.com/anthropics/skills/issues/406), [Issue #403](https://github.com/anthropics/skills/issues/403) |
| **Skill Deduplication** | Cleaner plugin architecture to avoid duplicate skills in context window | [Issue #189](https://github.com/anthropics/skills/issues/189) (👍 5) |

---

## 3. High-Potential Pending Skills

Active PRs with strong community engagement likely to merge soon:

| Skill | Why It Matters |
|-------|----------------|
| **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | Addresses community health gap—current repo scores 25% on GitHub metrics. Closes #452. |
| **[YAML Quoting Fix](https://github.com/anthropics/skills/pull/359)** & **[Unquoted Detection](https://github.com/anthropics/skills/pull/361)** | Critical for preventing silent parser errors in `SKILL.md` frontmatter. |
| **[Case-Sensitive SKILL.md Fix](https://github.com/anthropics/skills/pull/356)** | Fixes silent skill loading failures when using lowercase `skill.md`. |
| **[UTF-8 Encoding Fix](https://github.com/anthropics/skills/pull/284)** | Cross-platform consistency for skill-creator on Windows systems. |
| **[x402 BSV Micropayment](https://github.com/anthropics/skills/pull/374)** | Natural-language micropayments for AI services—enables pay-per-use workflows. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-quality document formatting and persistent agent memory capabilities—functionality that bridges Claude's conversational output with professional, enterprise-grade deliverables.**

---

# Claude Code Community Digest — 2026-03-15

## Today's Highlights

**MCP Elicitation Support** lands in v2.1.76, enabling MCP servers to request structured user input mid-task via interactive dialogs—a significant extensibility boost for agentic workflows. The **scroll position regression** continues dominating community discussions with 6+ duplicate issues, affecting productivity across platforms. Community PRs are stepping up with **session management plugins** and **sensitive file protection** tools addressing long-standing gaps.

---

## Releases

### v2.1.76
- **MCP Elicitation Support**: MCP servers can now request structured input mid-task through interactive dialogs (form fields or browser URL)
- **New Hooks**: `Elicitation` and `ElicitationResult` hooks allow intercepting and overriding responses before they're sent back
- Added `-n` / `--nam` flag (release notes truncated)

---

## Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#29583](https://github.com/anthropics/claude-code/issues/29583) | **Cowork: Cannot use folders outside home directory on Windows** | 51 comments, 41 👍 — Critical for Windows users with secondary drives. Cowork feature fundamentally broken for common project layouts. |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | **Support multiple Connector accounts** | 45 comments, 50 👍 — Top feature request for users managing work/personal Claude accounts. High demand from enterprise users. |
| [#34229](https://github.com/anthropics/claude-code/issues/34229) | **Phone verification blocking access** | 29 comments, 51 👍 — Users locked out despite active subscriptions. Marked invalid but community engagement suggests legitimate pain point. |
| [#10835](https://github.com/anthropics/claude-code/issues/10835) | **Terminal scrolling infinite loop** | 18 comments, 15 👍 — Long-standing Windows TUI bug (since Nov 2025) causing "uninterruptible high speed scrolling." |
| [#28402](https://github.com/anthropics/claude-code/issues/28402) | **Remote Control session not visible, cannot reconnect** | 16 comments, 17 👍 — Cowork sessions disappear from list after leaving, no recovery path. Breaks mobile-to-desktop workflows. |
| [#28758](https://github.com/anthropics/claude-code/issues/28758) | **Remote Control not connecting from mobile app** | 13 comments, 27 👍 — macOS-specific connectivity issue preventing mobile app from connecting to terminal sessions. |
| [#33367](https://github.com/anthropics/claude-code/issues/33367) | **Scroll position jumps during upward scrolling** | 6 comments, 13 👍 — Recent regression: scrolling through history while Claude streams output causes position to jump to top. **Multiple duplicates (#33814, #34052, #34400)** indicate widespread impact. |
| [#34143](https://github.com/anthropics/claude-code/issues/34143) | **Opus 4.6 shows 200K context instead of 1M** | 5 comments, 5 👍 — v2.1.75 promised 1M context for Max/Team plans but `/context` still shows 200K cap. Potential billing/value discrepancy. |
| [#31208](https://github.com/anthropics/claude-code/issues/31208) | **MCP ImageContent returned as text (10-20x token waste)** | 4 comments — MCP images encoded as text instead of native blocks, massively inflating token costs for image-heavy workflows. |
| [#34456](https://github.com/anthropics/claude-code/issues/34456) | **Claude ignoring .gitignore, reading .env secrets** | 1 comment, 1 👍 — Security concern: Claude Code reads secret keys from `.env` despite `.gitignore`. Requests `.claudeignore` defaults. |

---

## Key PR Progress

| # | Title | Description |
|---|-------|-------------|
| [#34168](https://github.com/anthropics/claude-code/pull/34168) | **Sessions plugin for listing and deleting sessions** | Community contribution adding `/sessions:list` and `/sessions:delete` commands. Project-scoped by default, `--all` flag for cross-project view. Addresses most-requested session management feature. |
| [#34286](https://github.com/anthropics/claude-code/pull/34286) | **Harden sensitive file guard confirmation flow** | Refactors sensitive-file-guard to use structured `PreToolUse` permission decisions with deny/ask/allow risk levels. Clears pending state on tool failure. |
| [#34257](https://github.com/anthropics/claude-code/pull/34257) | **Add sensitive-file-guard plugin** | New plugin protecting `.env`, config files, and infrastructure from accidental overwrites via `PreToolUse` hook. Directly addresses #34456. |
| [#34251](https://github.com/anthropics/claude-code/pull/34251) | **Agent-status plugin for subagent monitoring** | Adds visibility into subagent status and last-run logs. Solves pain point of agents "going silent" during execution. |
| [#34399](https://github.com/anthropics/claude-code/pull/34399) | *Content unclear* | PR description empty — appears to be off-topic or spam contribution. |
| [#34010](https://github.com/anthropics/claude-code/pull/34010) | **Add client websites and building inspection app** | CLOSED — Added unrelated project files. Likely rejected for scope/relevance. |

---

## Feature Request Trends

1. **Multi-account support** (#27302, 50 👍) — Switching between work/personal Claude accounts without logout/login friction
2. **Remote Control for VS Code** (#30905, 13 👍) — Extending mobile control to VS Code chat mode, not just terminal
3. **Pre-compaction hooks** (#34299) — Warning before automatic context compression with ability to preserve critical info
4. **Remote Control + `--dangerously-skip-permissions`** (#31908) — Combining features for Docker sandbox monitoring
5. **Bundled API allotment for third-party platforms** (#26576) — Using subscription credits on sanctioned agentic platforms

---

## Developer Pain Points

| Category | Issues | Summary |
|----------|--------|---------|
| **Scroll/TUI Regressions** | #33367, #33814, #34052, #34400, #34354 | Widespread scroll-jumping bug affecting multiple platforms. Users can't read output while Claude streams. |
| **Remote Control Reliability** | #28402, #28758, #29591 | Sessions not visible, connection failures, ECONNRESET errors on macOS |
| **Windows Platform Gaps** | #29583, #10835, #34457 | Secondary drive access, infinite scroll bug, hooks causing 5+ min hangs |
| **Context Window Discrepancies** | #34143, #34454, #27179 | 1M context promised but 200K delivered; rate limit errors despite low usage |
| **Token Efficiency** | #31208, #34461 | MCP images as text (10-20x waste), excessive consumption for simple edits |
| **Security Defaults** | #34456 | `.env` files read despite `.gitignore`; requests safer defaults |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-15

---

## 1. Today's Highlights

The Codex engineering team is in a heavy development cycle, merging significant architectural changes to the CLI and TUI infrastructure, including a new **app-server layer** and **watchdog runtime** for subagent management. Community attention is split between **rate limit concerns** with the latest VS Code extension and a highly-upvoted request for **macOS Intel support** in the Desktop App. Additionally, multiple fixes address **sandbox policies** affecting symlinked directories and memories storage.

---

## 2. Releases

Five Rust alpha releases were published in the last 24 hours:

- **v0.115.0-alpha.24** → [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.24)
- **v0.115.0-alpha.23** → [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.23)
- **v0.115.0-alpha.22** → [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.22)
- **v0.115.0-alpha.21** → [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.21)
- **v0.115.0-alpha.20** → [Release Notes](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.20)

These releases appear to be incremental iterations stabilizing features for the upcoming `v0.115.0` release.

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| [#10410](https://github.com/openai/codex/issues/10410) | **macOS Intel (x86_64) support for Codex Desktop App** | The top-voted issue (163 👍) requests a Universal build or x86_64 support for the desktop app. Many enterprise and power users still on Intel Macs are unable to use the native app. |
| [#10582](https://github.com/openai/codex/issues/10582) | **Personality should be optional (None)** | RESOLVED. A passionate discussion (40 comments) about the AI's "overly chatty" personality. The team has addressed the ability to disable personality features. |
| [#14593](https://github.com/openai/codex/issues/14593) | **VS Code extension burning tokens fast** | Users report the latest VS Code extension update (26.311.21342) is rapidly consuming tokens. 36 comments indicate this is affecting multiple Business-tier users. |
| [#10384](https://github.com/openai/codex/issues/10384) | **Make `request_user_input` tool available in code mode** | CLOSED. A highly-upvoted feature (99 👍) to allow interactive prompts during code generation has been implemented. |
| [#14331](https://github.com/openai/codex/issues/14331) | **GPT-5.3-Codex model not working in paid accounts** | CLOSED. Authentication/entitlement issues preventing Plus users from accessing specific Codex models have been resolved. |
| [#3049](https://github.com/openai/codex/issues/3049) | **Configurable hotkeys support** | Long-standing request (63 👍) for customizable keyboard shortcuts in the TUI to improve accessibility and workflow efficiency. |
| [#14346](https://github.com/openai/codex/issues/14346) | **Context Compaction Hanging** | Pro users on GPT-5.4 are experiencing hangs during context compaction when the window fills up, blocking productivity. |
| [#14681](https://github.com/openai/codex/issues/14681) | **`/review` task drains usage 2x** | CLOSED. A critical issue where the code review task was consuming double the expected tokens has been identified. |
| [#12450](https://github.com/openai/codex/issues/12450) | **Tree-based conversation management** | Feature request for branching chat history (similar to git branches) to allow rolling back to previous context nodes. |
| [#14694](https://github.com/openai/codex/issues/14694) | **`apply_patch` fails with symlinked `~/.codex`** | A bug introduced by the memories feature causes sandbox failures when the config directory is a symlink to another partition. |

---

## 4. Key PR Progress

| # | Title | Summary |
|---|-------|---------|
| [#14710](https://github.com/openai/codex/pull/14710) | **Move TUI on top of app server** | Major architectural refactor to run the TUI through the app-server layer, enabling unified event handling and server-side features. |
| [#13678](https://github.com/openai/codex/pull/13678) | **Watchdog runtime and prompts** | Introduces a watchdog runtime for agent lifecycle management with specialized prompts and model overrides for monitoring subagents. |
| [#13657](https://github.com/openai/codex/pull/13657) | **Enable subagent inbox delivery** | Implements structured message passing between parent agents and subagents, making inbox messages first-class citizens. |
| [#14668](https://github.com/openai/codex/pull/14668) | **Reuse guardian session across approvals** | Optimizes approval workflows by reusing a guardian subagent session, improving cache efficiency and reducing startup overhead. |
| [#13825](https://github.com/openai/codex/pull/13825) | **Custom model aliases in config.toml** | Allows users to define model aliases with custom context windows and compaction limits in their configuration. |
| [#14602](https://github.com/openai/codex/pull/14602) | **Preserve background terminals on interrupt** | Ctrl+C now stops the current turn without killing background shells (like dev servers). Also renames cleanup command to `/stop`. |
| [#14718](https://github.com/openai/codex/pull/14718) | **Trust-gate project hooks and exec policies** | Security improvement: disables untrusted project-level `.codex` configuration files until explicitly trusted by the user. |
| [#14674](https://github.com/openai/codex/pull/14674) | **Fix symlinked writable roots in sandbox** | CLOSED/MERGED. Resolves the symlinked directory issue affecting `apply_patch` and memories storage. |
| [#13537](https://github.com/openai/codex/pull/13537) | **Add `--fork` option to `codex exec`** | Enables non-interactive session forking for automation workflows, allowing programmatic reuse of conversation context. |
| [#14699](https://github.com/openai/codex/pull/14699) | **Route fresh-session lifecycle through app-server** | Unifies thread lifecycle management so fresh sessions properly trigger server-side events like skills-changed notifications. |

---

## 5. Feature Request Trends

1. **Session & Conversation Management** — Strong demand for tmux-style session management, tree-based conversation branching, and safe two-step delete flows in the session browser.

2. **Customization & Control** — Users want configurable hotkeys, custom compaction hooks, and the ability to fully disable AI personalities.

3. **Platform Parity** — Significant requests for macOS Intel support and improved WSL integration on Windows, including proper worktree handling.

4. **Tool Access in All Modes** — Developers want `request_user_input` and other tools available consistently across code mode, agent mode, and CLI.

5. **Usage Efficiency** — Requests for more granular control over token consumption, especially around context compaction and the `/review` task.

---

## 6. Developer Pain Points

1. **Rate Limits & Token Burn** — Multiple reports (e.g., [#14593](https://github.com/openai/codex/issues/14593), [#14681](https://github.com/openai/codex/issues/14681)) of extensions consuming tokens faster than expected, particularly with VS Code updates and review tasks.

2. **Compaction Reliability** — Context compaction hanging at low percentages or failing entirely is a recurring blocker for long-running sessions.

3. **Windows/WSL Edge Cases** — Worktree detection, path-length limits, and PowerShell encoding issues continue to frustrate Windows users.

4. **Model Entitlement Confusion** — Users are occasionally "mistakenly directed to old models" or find certain Codex models unavailable on Team/Plus subscriptions.

5. **Symlink & Sandbox Issues** — The new memories feature broke workflows for users with symlinked `~/.codex` directories, though a fix has been merged in [#14674](https://github.com/openai/codex/pull/14674).

---

*Digest generated from github.com/openai/codex activity.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-15

## 1. Today's Highlights
The Gemini CLI team is aggressively iterating on **Agent stability and context management**, with a major push to refine "Plan Mode" and session continuity. Today's activity highlights significant friction in **Sub-agent behaviors**—specifically "ghosting" after plan approvals and incorrect context loading—which maintainers have elevated to high-priority tracking issues. On the tooling front, community contributions are bolstering security and debugging capabilities, introducing a native Linux sandbox and an AI-powered "Debug Companion."

## 2. Releases
### **v0.35.0-nightly.20260314 (3038fdce2)**
*   **Change:** Automated nightly build.
*   **Detail:** Includes changelog updates for v0.33.1.
*   **Link:** [v0.35.0-nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.0-nightly.20260314.3038fdce2)

### **v0.34.0-preview.3**
*   **Change:** Patch release.
*   **Detail:** Cherry-picked fix `24adacd` to address issues found in the second preview release.
*   **Link:** [v0.34.0-preview.3](https://github.com/google-gemini/gemini-cli/releases/tag/v0.34.0-preview.3)

## 3. Hot Issues
1.  **Agent "Ghosts" User After Plan Approval** [#22266](https://github.com/google-gemini/gemini-cli/issues/22266)
    *   **Why:** Critical flow break. The agent generates a plan and registers approval but then silently drops context instead of executing.
    *   **Reaction:** 6 comments discussing the severity of the context loss.

2.  **Plan Mode Loads Stale Context** [#22307](https://github.com/google-gemini/gemini-cli/issues/22307)
    *   **Why:** Reliability issue. Plan mode displays plans based on *previous* requests rather than the current prompt, breaking trust in the feature.

3.  **Deprecated `glob@10.5.0` Warning** [#18327](https://github.com/google-gemini/gemini-cli/issues/18327)
    *   **Why:** High-friction onboarding. Fresh installs trigger npm deprecation warnings via the `rimraf` -> `gaxios` dependency chain.
    *   **Reaction:** 6 comments; users annoyed by "unclean" install logs.

4.  **Paper cuts and Misbehaviors (Epic)** [#22464](https://github.com/google-gemini/gemini-cli/issues/22464)
    *   **Why:** Strategic tracking. Maintainers opened a P1 Epic to aggregate user-reported agent misbehaviors, including getting stuck at interactive prompts.

5.  **Session Continuity & Coherence (Epic)** [#21792](https://github.com/google-gemini/gemini-cli/issues/21792)
    *   **Why:** Architectural focus. Addressing context degradation and forgotten constraints in long-running sessions.

6.  **CLI Gets Stuck at Interactive Prompts** [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)
    *   **Why:** Common blocker. Agents creating apps (e.g., Vite) hang when encountering interactive terminal prompts.

7.  **False "Action Required" Notification** [#21925](https://github.com/google-gemini/gemini-cli/issues/21925)
    *   **Why:** UX confusion. The UI shows a "hand" icon requiring action during long shell scripts, misleading the user.

8.  **Plan Mode Incompatible with ACP** [#22191](https://github.com/google-gemini/gemini-cli/issues/22191)
    *   **Why:** Platform gap. Plan mode fails completely in ACP environments because the agent cannot determine where to write the plan file.

9.  **TUI Scroll Jump Bug** [#22028](https://github.com/google-gemini/gemini-cli/issues/22028)
    *   **Why:** UX annoyance. In VS Code, clicking the terminal causes the CLI content to scroll to the top.

10. **Self-Awareness & Flag Knowledge** [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)
    *   **Why:** Meta-improvement. The agent currently struggles to explain its own CLI flags and hotkeys accurately.

## 4. Key PR Progress
1.  **Native Bubblewrap Sandbox (Linux)** [#22399](https://github.com/google-gemini/gemini-cli/pull/22399)
    *   Implements a hardened, zero-dependency `bwrap` sandbox for Linux, removing the need for rootless Podman/Docker.

2.  **Debug Companion (AI-Powered Debugging)** [#22472](https://github.com/google-gemini/gemini-cli/pull/22472)
    *   Proposes a production-grade debugging subsystem with DAP support to help the agent debug itself and user code.

3.  **Interactive Policies Dialog** [#22456](https://github.com/google-gemini/gemini-cli/pull/22456)
    *   Replaces text-based policy output with a searchable, tabbed UI component categorizing rules by Allow/Ask/Deny.

4.  **Fix: Shell Output Crash (RangeError)** [#22467](https://github.com/google-gemini/gemini-cli/pull/22467)
    *   Prevents crashes by capping shell output at 10MB, handling massive outputs that previously caused memory errors.

5.  **Fix: ENAMETOOLONG Crash** [#22480](https://github.com/google-gemini/gemini-cli/pull/22480)
    *   Patches a critical crash caused by users inputting extremely long strings starting with `@` (file reference).

6.  **Refreshed UX for Composer Layout** [#21212](https://github.com/google-gemini/gemini-cli/pull/21212)
    *   Promotes a modern "2-row status" layout to default, stabilizing the footer and status area.

7.  **Visual Validation Framework** [#22461](https://github.com/google-gemini/gemini-cli/pull/22461)
    *   Introduces high-fidelity TTY smoke testing to catch visual bugs that logic-based integration tests miss.

8.  **Fix: Paste Triggering Shell Mode** [#21102](https://github.com/google-gemini/gemini-cli/pull/21102)
    *   Prevents pasted text starting with `!` from accidentally activating shell mode (common in Termux).

9.  **OAuth & MCP Security Migration** [#22459](https://github.com/google-gemini/gemini-cli/pull/22459)
    *   Migrates unsafe `fetch()` calls to `safeFetch()` to mitigate Server-Side Request Forgery (SSRF) risks.

10. **Fix: Subagent History Deletion** [#22407](https://github.com/google-gemini/gemini-cli/pull/22407)
    *   Ensures `--delete-session` actually removes subagent history files, preventing disk leaks.

## 5. Feature Request Trends
*   **Context Management & Compression:** Strong demand for better handling of long sessions. Requests include "Guided Compression" (user prompts for what to keep) and "Stale Output Elision" (pruning old tool results).
*   **Agent Self-Improvement:** Users want the CLI to be "self-aware" (know its own flags) and capable of self-correcting or recommending new "skills" based on session trajectory.
*   **Advanced Memory Control:** Requests for workspace-level memory and Just-In-Time (JIT) memory loading to replace the current static memory systems.

## 6. Developer Pain Points
*   **Plan Mode Instability:** Developers report that Plan Mode is currently the most fragile part of the workflow, suffering from context amnesia and file-writing permissions issues in non-standard environments.
*   **Interactive Shell Hangs:** The agent frequently freezes when encountering interactive CLI tools (like `npm create vite`), requiring manual intervention or restarts.
*   **UI/UX Flickering:** Resize events and VS Code focus changes cause the TUI to jump or flicker, disrupting the flow.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-15

## 1. Today's Highlights
Activity in the last 24 hours focused heavily on granular configuration and autonomy. Developers are pushing for more control over model selection, specifically requesting the ability to assign different models to sub-agents (like summarization or exploration) versus the primary chat. Additionally, there is significant demand for "true" autopilot modes that can handle user elicitation without blocking, as well as improved terminal UI stability to resolve persistent flickering issues during streaming.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1.  **[OPEN] UI Bug: Copilot CLI output flickers/stutters constantly during text stream response (#1599)**
    *   **Why it matters:** This is a high-engagement issue (7 👍) affecting core usability. Users report a harsh visual "trembling" effect that makes real-time reading difficult.
    *   **Link:** [github/copilot-cli Issue #1599](https://github.com/github/copilot-cli/issues/1599)

2.  **[OPEN] Support for configurable models for internal sub-tasks (#2032)**
    *   **Why it matters:** A proposal to allow decoupling the model used for primary chat from the models used for auxiliary tasks (e.g., compaction, exploration). This reflects a mature user base seeking to optimize cost/performance ratios.
    *   **Link:** [github/copilot-cli Issue #2032](https://github.com/github/copilot-cli/issues/2032)

3.  **[OPEN] [triage] Add support for repo-specific / folder-specific MCP configs (#288)**
    *   **Why it matters:** With 5 👍, this long-standing request asks for project-level MCP server definitions rather than purely global ones, essential for developers context-switching between disparate tech stacks.
    *   **Link:** [github/copilot-cli Issue #288](https://github.com/github/copilot-cli/issues/288)

4.  **[OPEN] [triage] Skills (slash commands) not loaded when using -p/--prompt mode (#2040)**
    *   **Why it matters:** A potential blocker for automation scripts. Custom skills (`/my-skill`) are ignored when running in non-interactive prompt mode, limiting CLI extensibility in CI/CD environments.
    *   **Link:** [github/copilot-cli Issue #2040](https://github.com/github/copilot-cli/issues/2040)

5.  **[OPEN] [triage] Execution failed: CAPIError: 400 image media type not supported (#2030)**
    *   **Why it matters:** Reports of sudden session terminations when the CLI encounters unsupported image formats. This crash behavior disrupts workflows involving multimodal inputs.
    *   **Link:** [github/copilot-cli Issue #2030](https://github.com/github/copilot-cli/issues/2030)

6.  **[OPEN] [triage] Elicitation in autopilot mode should auto-select best option (#2029)**
    *   **Why it matters:** Challenges the definition of "autopilot." Users want the CLI to autonomously resolve `ask_user` prompts (or similar) rather than hanging indefinitely for human input during automated runs.
    *   **Link:** [github/copilot-cli Issue #2029](https://github.com/github/copilot-cli/issues/2029)

7.  **[OPEN] [triage] CLI does not respect `XDG_CONFIG_HOME` when creating agents (#2035)**
    *   **Why it matters:** A compliance issue for Linux power users. The tool currently ignores standard environment variables for config paths, forcing files into hardcoded or default directories.
    *   **Link:** [github/copilot-cli Issue #2035](https://github.com/github/copilot-cli/issues/2035)

8.  **[OPEN] [triage] Feature Request: Support sub-command granularity in --allow-tool shell filter (#2037)**
    *   **Why it matters:** Security fine-tuning. Users want to restrict `shell` tool permissions to specific sub-commands (e.g., allowing `deno task` but blocking `deno run`) to enforce least-privilege principles.
    *   **Link:** [github/copilot-cli Issue #2037](https://github.com/github/copilot-cli/issues/2037)

9.  **[OPEN] [triage] /pr fix does not close feedback on the PR (#2027)**
    *   **Why it matters:** Workflow friction. While the `/pr fix` command successfully commits and pushes changes, it fails to resolve the corresponding GitHub review comments, leaving manual cleanup work.
    *   **Link:** [github/copilot-cli Issue #2027](https://github.com/github/copilot-cli/issues/2027)

10. **[OPEN] [triage] Markdown links not converted to OSC 8 hyperlinks (#2033)**
    *   **Why it matters:** A terminal UX annoyance. Links are not rendered as clickable OSC 8 hyperlinks, causing terminal emulators to misinterpret trailing parentheses as part of the URL.
    *   **Link:** [github/copilot-cli Issue #2033](https://github.com/github/copilot-cli/issues/2033)

## 4. Key PR Progress
No Pull Requests were updated in the last 24 hours.

## 5. Feature Request Trends
*   **Granular Model Mapping:** Users are moving beyond simple model selection. The trend is toward "task-aware" configuration, where users can assign cheaper/smaller models to background tasks (compaction, summarization) while reserving powerful models for complex reasoning (#2032, #1263).
*   **Automation & Autonomy:** There is a clear demand for "headless" robustness. Requests include auto-submitting initial prompts (#2028), preventing autopilot blocking on user questions (#2029), and ensuring skills load in non-interactive modes (#2040).
*   **Security & Sandboxing:** Requests for finer control over tool permissions, specifically filtering shell commands at the argument level rather than the binary level (#2037).

## 6. Developer Pain Points
*   **Visual Stability:** The flickering/streaming UI issue (#1599) remains a significant detractor for the user experience during long code generations.
*   **Session State Fragility:** Several reports indicate errors when switching models mid-session (#2041) or handling session state/files, suggesting underlying instability in state management.
*   **Platform Compliance:** Lack of support for `XDG_CONFIG_HOME` (#2035) and specific Windows path handling issues remain pain points for non-macOS users.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-15

## 1. Today's Highlights
The community remains highly active in bug fixing and platform compatibility improvements, though no new official releases were published today. A significant portion of activity focused on **macOS usability**, specifically resolving input handling for `Cmd+V` image pasting and correcting `Enter` key behavior in VS Code terminals. Additionally, contributors are actively fixing **Windows concurrency issues**, specifically addressing file locking errors in async operations.

## 2. Releases
*   **No new releases** recorded in the last 24 hours. The community is currently focused on stabilizing recent changes via Pull Requests.

## 3. Hot Issues
1.  **[OPEN] [enhancement] Add /timeout so we can adjust the timeout** ([#625](https://github.com/MoonshotAI/kimi-cli/issues/625))
    *   **Why it matters:** Users are experiencing process termination (60s limit) during long-running tasks (like installations). This is a high-friction issue for users attempting complex operations.
    *   **Reaction:** Continuing interest (Updated Mar 14), with users seeking flexible timeout configurations.

2.  **[OPEN] [bug] clipboard对于图片的处理只考虑了Ctrl + V 快捷方式，忽略了Cmd + V** ([#1433](https://github.com/MoonshotAI/kimi-cli/issues/1433))
    *   **Why it matters:** Critical usability bug for macOS users who cannot paste images via `Cmd+V`.
    *   **Reaction:** Confirmed by users on Darwin platforms; a fix is already being proposed in PR #1434.

3.  **[OPEN] [bug] cli启动时会输出大量类似日志的内容** ([#1427](https://github.com/MoonshotAI/kimi-cli/issues/1427))
    *   **Why it matters:** Excessive logging on startup creates a poor first impression and clutters the terminal.
    *   **Reaction:** Reported on macOS (v1.21.0), currently under investigation.

4.  **[OPEN] [bug] Enter key appends `[13u` instead of sending message in VS Code integrated terminal** ([#1437](https://github.com/MoonshotAI/kimi-cli/issues/1437))
    *   **Why it matters:** Breaks the workflow for developers using VS Code on Linux. The terminal fails to translate the Enter key correctly.
    *   **Reaction:** Fresh bug reported on Linux (Arch), affecting v1.22.0.

5.  **[OPEN] [bug] Gitbash start kimi failed** ([#1436](https://github.com/MoonshotAI/kimi-cli/issues/1436))
    *   **Why it matters:** Windows users on Gitbash are unable to start the CLI at all.
    *   **Reaction:** Blocker for Windows developers; requires immediate attention for compatibility.

6.  **[OPEN] [enhancement] Feature Request: Add PicoClaw support for Kimi For Coding API** ([#1435](https://github.com/MoonshotAI/kimi-cli/issues/1435))
    *   **Why it matters:** Users want to utilize their Kimi subscription with third-party agent frameworks like PicoClaw.
    *   **Reaction:** Highlights a demand for broader API interoperability.

*(Note: Only 6 issues were updated in the last 24h; all are listed above.)*

## 4. Key PR Progress
1.  **fix: add asyncio.Lock to Context to prevent concurrent file write errors on Windows** ([#1438](https://github.com/MoonshotAI/kimi-cli/pull/1438))
    *   **Description:** Fixes `PermissionError` crashes on Windows by adding an `asyncio.Lock` to the `Context` class, preventing race conditions during file writes.

2.  **fix(shell): handle Cmd+V image paste via BracketedPaste event** ([#1434](https://github.com/MoonshotAI/kimi-cli/pull/1434))
    *   **Description:** Resolves Issue #1433. Implements handling for bracketed paste events on macOS, allowing `Cmd+V` to correctly trigger image pasting logic.

3.  **docs: clarify dev setup** ([#1439](https://github.com/MoonshotAI/kimi-cli/pull/1439))
    *   **Description:** Improves `CONTRIBUTING.md` by adding clear instructions for Web UI development and hot reloading, lowering the barrier for new contributors.

*(Note: Only 3 PRs were updated in the last 24h; all are listed above.)*

## 5. Feature Request Trends
*   **Task Control & Customization:** There is a strong request for user-defined control over CLI execution parameters, specifically **adjustable timeouts** for long-running tasks.
*   **Third-Party Integration:** Users are increasingly asking to decouple the "Kimi For Coding" subscription from the official CLI to use it with other open-source agents (e.g., PicoClaw).

## 6. Developer Pain Points
*   **Cross-Platform Input Handling:** A significant pain point involves terminal input inconsistencies across macOS (Bracketed Paste), Windows (GitBash startup), and Linux (VS Code terminal `Enter` key).
*   **Windows File System Reliability:** The `PermissionError` on `context.jsonl` indicates that the async file handling strategy does not translate well to Windows file locking semantics.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-15

---

## 1. Today's Highlights

No new releases were published in the last 24 hours. Community activity remains focused on **stability and UX improvements**, with critical discussions around Copilot authentication consuming premium quotas unexpectedly (#8030), persistent clipboard issues across platforms (#4283, #8100), and severe memory leaks on macOS (#12687). Several quality-of-life PRs were merged, including Ctrl+R reverse search for the TUI and fixes for session list sorting.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| **[#8030](https://github.com/anomalyco/opencode/issues/8030)** | Copilot auth sets too many requests as "user" | **Critical billing impact.** Users report agent-initiated requests incorrectly classified as premium user requests, rapidly depleting monthly quotas. 179 comments, 62 👍. |
| **[#4283](https://github.com/anomalyco/opencode/issues/4283)** | Copy To Clipboard not working | **Core UX blocker.** TUI clipboard functionality broken across multiple platforms, disrupting basic copy-paste workflows. 71 comments, 52 👍. |
| **[#12687](https://github.com/anomalyco/opencode/issues/12687)** | Severe Memory Leak causing kernel panic (macOS) | **System stability critical.** Intensive use triggers kernel panics and forced restarts on macOS due to unbounded resource consumption. |
| **[#5361](https://github.com/anomalyco/opencode/issues/5361)** | TUI freezes periodically on WSL2 | **Regression in v1.0.129.** 2-10 second freezes during typing/scrolling on WSL2, input buffered during freeze. Affects developer flow. |
| **[#17318](https://github.com/anomalyco/opencode/issues/17318)** | SSE read timed out | **Workflow interruption.** Server-Sent Events timeout during file writing operations, breaking long-running planning sessions. |
| **[#16470](https://github.com/anomalyco/opencode/issues/16470)** | Code output unreadable in light mode | **Accessibility issue.** Formatted code blocks invisible due to color scheme bug in light mode. |
| **[#13217](https://github.com/anomalyco/opencode/issues/13217)** | Stops after compaction | **Task completion blocker.** TUI halts mid-task after context compaction, requiring manual "keep going" prompts. |
| **[#8619](https://github.com/anomalyco/opencode/issues/8619)** | Native StatusLine Hook for Plugins | **High-demand feature.** 22 👍. Plugins need context-free display mechanism for persistent info without polluting conversation context. |
| **[#10288](https://github.com/anomalyco/opencode/issues/10288)** | Mobile version request | **Platform expansion.** 32 👍. Community wants Android/iOS/Web UI for on-the-go coding assistance. |
| **[#2845](https://github.com/anomalyco/opencode/issues/2845)** | Disable text selection/clipboard overrides | **Power user friction.** Terminal selection/clipboard overrides disruptive; users want native OS/terminal facilities. 21 👍. |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#17525](https://github.com/anomalyco/opencode/pull/17525)** | ✅ Merged | **Ctrl+R reverse search.** Adds bash-style reverse-i-search to TUI prompt for navigating command history. |
| **[#17526](https://github.com/anomalyco/opencode/pull/17526)** | ✅ Merged | **Session list sort fix.** Corrects session ordering to use `time.updated` instead of arbitrary `id`, fixing confusing ordering. |
| **[#17520](https://github.com/anomalyco/opencode/pull/17520)** | 🟡 Open | **Safari/Desktop comment fix.** Resolves button-click comment addition failures on macOS Safari due to event handling differences. |
| **[#17529](https://github.com/anomalyco/opencode/pull/17529)** | 🟡 Open | **DeepSeek API reasoning fix.** Corrects `reasoning_content` handling for Error 400, adds test cases. Closes #17523, #9397, #5577. |
| **[#17517](https://github.com/anomalyco/opencode/pull/17517)** | 🟡 Open | **Plugin hook error handling.** Awaits plugin event hooks properly, prevents silent error swallowing in database effects. |
| **[#17514](https://github.com/anomalyco/opencode/pull/17514)** | 🟡 Open | **Windows path comparison fix.** Case-insensitive path comparison for global session migration on Windows. |
| **[#17527](https://github.com/anomalyco/opencode/pull/17527)** | 🟡 Open | **Italian translation.** Adds `it.json` translation and glossary for Italian localization. |
| **[#15685](https://github.com/anomalyco/opencode/pull/15685)** | 🟡 Open | **`--command` flag for TUI.** Enables TUI startup with initial command execution, matching `run --command` behavior. |
| **[#13854](https://github.com/anomalyco/opencode/pull/13854)** | 🟡 Open | **Streaming markdown fix.** Derives streaming state from `message.time.completed` to properly render final table rows. |
| **[#17511](https://github.com/anomalyco/opencode/pull/17511)** | ✅ Merged | **Permission refactor + ALS bug fix.** Extracts Effect-native `PermissionService`, fixes `InstanceState` ALS context bug. |

---

## 5. Feature Request Trends

1. **Mobile/Cross-Platform Access** — Strong demand (32 👍 on #10288) for Android, iOS, and Web UI to extend OpenCode beyond terminal.
2. **Plugin Extensibility** — Native StatusLine hooks (#8619), context-aware prompt enhancement (#10237), and plugin event handling improvements indicate desire for richer plugin APIs.
3. **Context Management Controls** — Requests for configurable compaction thresholds (#10017), background incremental compaction (#16466), and better handling of long sessions.
4. **Accessibility & Localization** — Light mode fixes (#16470), Italian translation (#17527), and UI scaling for large project lists (#9088).

---

## 6. Developer Pain Points

| Category | Recurring Frustrations |
|----------|------------------------|
| **Clipboard & Input** | Multiple reports of broken copy/paste (#4283, #8100, #10780), disruptive selection overrides (#2845) |
| **Resource Management** | Memory leaks causing system instability (#12687), TUI freezes on WSL2 (#5361) |
| **Billing/Quota** | Copilot auth misclassifying agent requests as premium (#8030) — significant cost impact |
| **Streaming/Timeouts** | SSE read timeouts (#17318), truncated output with certain plugins (#15613) |
| **Platform-Specific Bugs** | Windows path handling (#17458, #17514), Safari event handling (#17520), WSL2 regressions (#5361) |
| **Context Compaction** | Tasks stopping mid-execution (#13217), lack of configurable thresholds (#10017) |

---

*Digest generated from GitHub activity on 2026-03-15.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest (2026-03-15)

## 1. Today's Highlights
The Qwen Code ecosystem saw significant activity today, highlighted by the release of **v0.12.3-nightly** and a major merge enabling **multi-position sidebar support in VS Code**. Development focus has shifted heavily toward **workflow flexibility** (git worktrees, undo commands) and **tooling robustness** (fixing "tool_calls" API errors and adding standalone binary support). The community is actively pushing for more customizable UI layouts and advanced agentic capabilities like multi-model code review.

## 2. Releases
*   **v0.12.3-nightly.20260314.f1ee4638**
    *   **Changes:** This nightly build includes upstream updates from the stable `v0.12.3` branch.
    *   **Changelog:** [View Comparison](https://github.com/QwenLM/qwen-code/compare/v0.12.3...v0.12.3-nightly.20260314.f1ee4638)

## 3. Hot Issues
1.  **Sidebar Layout Flexibility (#1870, #1308)**
    *   **Why:** Users are frustrated by the inability to move the Qwen Chat panel to the Secondary Sidebar or Activity Bar, a standard feature in competitor tools.
    *   **Reaction:** High engagement (7 👍 on #1308); users attach screenshots comparing Qwen Code to other AI tools to demonstrate desired layouts. *Note: This appears resolved by PR #2188.*
2.  **CLI Spacebar Input Bug (#2198)**
    *   **Why:** A critical usability blocker where pressing the spacebar in the CLI input field yields no result, making it impossible to type multi-word prompts.
    *   **Reaction:** confusing for users; currently closed, likely fixed in recent builds.
3.  **Request for Isolated Parallel Sessions (#2194)**
    *   **Why:** Developers want to run multiple Qwen Code agents simultaneously in the same repo. The proposal asks for a `--worktree` flag to isolate sessions via git worktrees to prevent file conflicts.
    *   **Reaction:** Highly relevant for power users managing parallel tasks.
4.  **Recurring "Internal Error" (Tool Calls Mismatch) (#2360, #2190, #2381)**
    *   **Why:** A P0 bug causing frequent workflow interruptions. The API rejects requests because assistant messages with `tool_calls` aren't correctly followed by tool response messages.
    *   **Reaction:** Users report it is "so annoying" and blocks usage after several chat rounds.
5.  **Confusing Skills Context (#2338)**
    *   **Why:** Users installing skills (e.g., `shadcn/ui`) expect them to activate automatically based on context, but the AI often fails to trigger the correct skill unless explicitly instructed.
    *   **Reaction:** Highlights a gap in the agent's context-awareness capabilities.
6.  **CLI "/undo" Command Request (#2342)**
    *   **Why:** A user points out the critical lack of an `/undo` function, noting that "one mistake and no way to recover" makes the tool risky for irreversible actions.
    *   **Reaction:** Strong sentiment that this is a baseline requirement for agentic coding tools.
7.  **VS Code Extension Failures on 0.12.3 (#2382)**
    *   **Why:** Users report the extension gets stuck on "Preparing Qwen Code..." after updating to 0.12.3, forcing downgrades or troubleshooting.
    *   **Reaction:** Immediate stability concerns for the latest version.
8.  **Input Length Constraints (#2384)**
    *   **Why:** Users hitting `InternalError.Algo.InvalidParameter: Range of input length` errors, indicating context management or token limit issues in the current build.
9.  **Multi-Model Configuration (#1119)**
    *   **Why:** Users want to configure multiple models under the same API key/provider and easily switch between them globally.
10. **Portable Chat History (#2373)**
    *   **Why:** Feature request for project-local storage (`.qwen/chat-history/`) to sync chats across machines and share context with team members.

## 4. Key PR Progress
1.  **[MERGED] feat(vscode-ide-companion): Sidebar & Multi-Position Chat (#2188)**
    *   Adds an Activity Bar entry and supports moving the chat UI to the sidebar, bottom panel, or Secondary Side Bar. This directly addresses the top user complaints regarding UI layout.
2.  **[OPEN] feat(review): Multi-Model Code Review (#2376)**
    *   Implements a system where multiple LLMs review code in parallel, and an arbitrator model produces a unified report. Leverages different model strengths to catch more issues.
3.  **[OPEN] fix(core): Strip Orphaned User Entries (#2367)**
    *   Critical fix for the "tool_calls must be followed by tool messages" API errors. It cleans up chat history before retrying requests to ensure protocol compliance.
4.  **[OPEN] feat(skills): Extend Bundled Skills (#2380)**
    *   Introduces `extends: bundled` logic, allowing users to append custom instructions to built-in skills (like `/review`) without completely overwriting them.
5.  **[MERGED] feat(skills): Bundled /review Skill (#2348)**
    *   Adds a built-in code review skill that works out-of-the-box, removing the need for manual configuration.
6.  **[OPEN] feat(cli): Add /btw Command (#2371)**
    *   Adds an ephemeral side-question command (`/btw`) for quick queries that reuse context but don't pollute the main conversation history.
7.  **[OPEN] feat: Standalone Binary Build (Node SEA) (#2359)**
    *   Proposes packaging Qwen Code as a standalone executable (Single Executable Application) to run in environments without Node.js installed.
8.  **[OPEN] fix(vscode): Prompt Cancellation Race Conditions (#2374)**
    *   Fixes race conditions that corrupted chat history when users cancelled streaming prompts, which was another source of API errors.
9.  **[MERGED] fix(insight): Handle LLM Failures (#2361)**
    *   Fixes the `/insight` command to prevent a single LLM failure from crashing the entire report generation process.
10. **[OPEN] fix: Auto-detect max_tokens (#2356)**
    *   Ensures that non-Qwen models (Claude, GPT) respect the correct `max_tokens` limits rather than defaulting to potentially small provider limits.

## 5. Feature Request Trends
*   **UI Customization:** Strong demand for "VS Code native" flexibility, specifically moving the chat window to the Secondary Sidebar or Activity Bar.
*   **Agentic Parallelism:** Requests for `--worktree` support and "Arena" modes indicate a trend toward running multiple agents/tasks in parallel without conflict.
*   **Workflow Safety:** Users are clamoring for safety nets like `/undo` and project-local history to prevent data loss and allow recovery from agent mistakes.
*   **Skills Extensibility:** Developers want more granular control over skills, such as extending bundled skills rather than replacing them, and better auto-detection of context.

## 6. Developer Pain Points
*   **API Protocol Instability:** The "tool_calls" mismatch error is the top source of frustration, breaking workflows mid-session. Fixes are incoming, but users currently face frequent retries.
*   **Input/CLI Bugs:** Reports of spacebar inputs failing (#2198) and inability to paste API keys (#2383) suggest regressions in the CLI input handler.
*   **Context Limit Errors:** Users are hitting input length limits unexpectedly (#2384), suggesting the tool needs better context pruning or clearer warnings regarding token limits.

</details>