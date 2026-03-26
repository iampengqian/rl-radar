# AI CLI Tools Community Digest 2026-03-27

> Generated: 2026-03-26 22:02 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Report — 2026-03-27

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation with aggressive iteration cycles across all major players. Windows platform support has emerged as a critical battleground, with most tools shipping PowerShell integrations and sandbox fixes. A clear industry-wide shift toward **agentic autonomy** is visible, evidenced by unified efforts in memory consolidation, context compression, and lifecycle hook systems. However, **token consumption and rate limiting** issues are generating significant user friction across multiple platforms, suggesting backend infrastructure growing pains. Plugin ecosystems and extensibility frameworks are becoming key differentiators as users demand deeper workflow integration.

---

## 2. Activity Comparison

| Tool | Issues (Active Today) | PRs (Active Today) | Release Status | Primary Focus |
|------|----------------------|-------------------|----------------|---------------|
| **Claude Code** | 10+ (1,337+ comments on #16157) | 10 | v2.1.84 (Stable) | PowerShell preview, Max subscription limits, Plugin ecosystem |
| **OpenAI Codex** | 10 | 10 | 6 alpha releases (v0.117.0) | Rust codebase hardening, Windows sandbox, Telemetry refactor |
| **Gemini CLI** | 10 | 10 | v0.36.0-preview.4 / v0.35.1 (Stable) | Context compression, SDD DAG refactor, Rate limits |
| **GitHub Copilot CLI** | 10 | 1 | v1.0.12-2 (Stable) | Plugin hooks, Performance regression, MCP connectivity |
| **Kimi Code CLI** | 5 | 10 | No new release | Lifecycle hooks, JSON Schema compatibility, Memory optimization |
| **OpenCode** | 10 | 10 | v1.3.3 (Stable) | Embedded WebUI, Model compatibility, XSS security fix |
| **Qwen Code** | 10 | 10 | v0.13.1-preview.0 | Windows permissions, Hooks/Channels, Context bloat |

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Evidence |
|-----------|----------------|----------|
| **Windows Platform Parity** | Claude Code, OpenAI Codex, Qwen Code, GitHub Copilot CLI | PowerShell support (Claude), ACL/sandbox fixes (Codex), permission persistence (Qwen), PowerShell flag fixes (Copilot) |
| **Lifecycle Hooks & Extensibility** | Claude Code, Kimi Code CLI, Qwen Code, GitHub Copilot CLI | 13-point lifecycle system (Kimi #1561), Pre/PostToolUse hooks (Claude #39320), Hooks documentation (Qwen #2679), Plugin env vars (Copilot v1.0.12-2) |
| **Context Management & Compression** | Gemini CLI, OpenAI Codex, Qwen Code | Compression endless loop fixes (Gemini #23946), context compaction timeouts (Codex #14860), context window bloat (Qwen #2685) |
| **MCP Integration Challenges** | GitHub Copilot CLI, Kimi Code CLI, OpenCode, Qwen Code | Servers not recognized (Copilot #424), JSON Schema incompatibility (Kimi #1595), process leaks (OpenCode #19168), ACP initialization (Qwen #2671) |
| **Token/Rate Limit Frustrations** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI | Max subscription limits (Claude #16157 - 1,337 comments), burning tokens (Codex #14593 - 283 comments), 429 errors (Gemini #23900), transient API errors (Copilot #2101) |
| **Plan Mode Safety Controls** | Gemini CLI, OpenCode | Plan mode modifying files (Gemini #23858), bash execution in plan mode (OpenCode #19297) |
| **Memory & Session Persistence** | Claude Code, Gemini CLI, Kimi Code CLI | Session preservation plugins (Claude #39148), memory routing (Gemini #22819), global/local config merging (Kimi #1590) |

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
|------|-----------------|-------------|-------------------|
| **Claude Code** | Enterprise plugin ecosystem, cross-platform parity | Professional developers, power users | Mature hook system, UUID-based session persistence, AI-powered permission assessment |
| **OpenAI Codex** | Rust-native performance, enterprise telemetry | Enterprise teams, Windows-heavy orgs | Aggressive alpha cycle (6 releases/24h), unified exec runtime, thread-level observability |
| **Gemini CLI** | Agentic autonomy, spec-driven development | Autonomous workflow users | DAG-based task execution, compression-first context management, wildcard policy system |
| **GitHub Copilot CLI** | VS Code integration, GitHub ecosystem | GitHub-native developers | IDE parity focus, OSC hyperlink support, model status visibility |
| **Kimi Code CLI** | Ecosystem compatibility, performance at scale | Large repo developers | Git ls-files optimization (65k+ files), async feedback, OAuth device flow |
| **OpenCode** | Multi-model flexibility, desktop-first | Desktop power users, multi-provider users | Embedded WebUI, plugin SDK v2, MCP iframe UIs, MDM enterprise support |
| **Qwen Code** | Social integration, localization | Chinese market, bot developers | Telegram/WeChat/DingTalk channels, mixed-language handling, Alibaba Cloud CI/CD |

---

## 5. Community Momentum & Maturity

| Category | Tools | Evidence |
|----------|-------|----------|
| **Highest Velocity** | Gemini CLI, OpenAI Codex | 4 preview releases in 24h (Gemini), 6 alpha releases in 24h (Codex) |
| **Most Active Discussion** | Claude Code | #16157 has 1,337 comments and 603 👍 — highest engagement across all tools |
| **Emerging/Building Momentum** | Kimi Code CLI, Qwen Code | Strong PR activity (10 each), focus on ecosystem compatibility and localization |
| **Stable/Conservative** | GitHub Copilot CLI | Only 1 PR, stable releases with incremental UX improvements |
| **Most Feature-Rich Plugin Ecosystem** | Claude Code, OpenCode | Multiple community plugins (Claude: session preserve, Bark permissions, dream command), SDK v2 + MCP iframe UIs (OpenCode) |

---

## 6. Trend Signals

| Signal | Implication | Action for Developers |
|--------|-------------|----------------------|
| **Token accounting regressions across platforms** | Backend infrastructure strain from agentic workloads; cost predictability is broken | Monitor usage dashboards closely; consider rate-limiting wrappers for production |
| **Hooks becoming standard** | Lifecycle extensibility is now table stakes; AI CLI tools are becoming platforms | Invest in hook-based automation; standard interfaces emerging for Pre/PostToolUse |
| **Windows is no longer second-class** | Enterprise adoption driving Windows parity; ACL/sandbox issues are P0 | Test Windows deployments early; PowerShell integrations maturing rapidly |
| **Context compression is unsolved** | "Endless loops" and bloat issues plague long-running sessions | Keep sessions focused; use explicit context pruning; avoid 200k+ token contexts |
| **MCP ecosystem fragmentation** | JSON Schema incompatibilities, process leaks, connection drops | Pin MCP server versions; implement health checks; have fallback workflows |
| **Plan mode trust deficit** | Safety controls not reliable enough for production autonomy | Always audit plan mode outputs; don't assume read-only guarantees |
| **Social/bot channels emerging** | AI CLIs becoming backends for chatbots and automated workflows | Explore Telegram/WeChat integrations (Qwen leads here); consider ACP protocol |
| **Enterprise MDM demand** | IT-managed deployments becoming requirement for adoption | Prepare `.mobileconfig` and policy templates (OpenCode #19178 leads) |

---

*Report generated from 7 major AI CLI tool community digests on 2026-03-27.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Report
**Analysis Period:** Through 2026-03-27 | **Source:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

Based on pull request activity, community engagement, and functional impact, these are the most notable Skills currently in development:

| Rank | Skill | Author | Status | Focus |
|:---:|:---|:---|:---:|:---|
| 1 | [**document-typography**](https://github.com/anthropics/skills/pull/514) | PGTBoos | 🟢 OPEN | Document quality control |
| 2 | [**frontend-design** (revamp)](https://github.com/anthropics/skills/pull/210) | justinwetch | 🟢 OPEN | UI/UX design guidance |
| 3 | [**skill-quality-analyzer / skill-security-analyzer**](https://github.com/anthropics/skills/pull/83) | eovidiu | 🟢 OPEN | Meta-skills for ecosystem |
| 4 | [**ODT skill**](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | 🟢 OPEN | OpenDocument format support |
| 5 | [**roadmap-pilot**](https://github.com/anthropics/skills/pull/536) | antconsales | 🟢 OPEN | Incremental codebase cleanup |
| 6 | [**shodh-memory**](https://github.com/anthropics/skills/pull/154) | varun29ankuS | 🟢 OPEN | Persistent agent context |
| 7 | [**8-skill foundation series**](https://github.com/anthropics/skills/pull/288) | Eaprime1 | 🟢 OPEN | Multi-purpose toolkit |
| 8 | [**testing-patterns**](https://github.com/anthropics/skills/pull/723) | 4444J99 | 🟢 OPEN | Comprehensive testing stack |

**Highlights:**

- **document-typography** addresses a universal pain point—AI-generated documents suffer from orphan words, widow paragraphs, and numbering misalignment. High utility for all document workflows.

- **frontend-design** revision focuses on making instructions actionable within a single conversation, improving Claude's ability to execute specific UI/UX guidance.

- **Meta-skills** (quality-analyzer, security-analyzer) represent an emerging pattern: Skills that evaluate other Skills, enabling ecosystem self-improvement.

- **roadmap-pilot** introduces session-scoped task execution to prevent context overflow on large refactoring jobs—one task per session, auto-committed.

---

## 2. Community Demand Trends

From Issue discussions, the most requested directions for new Skills:

| Trend | Description | Evidence |
|:---|:---|:---|
| **Workflow Automation** | Skills that manage multi-step processes with state persistence | [shodh-memory PR #154](https://github.com/anthropics/skills/pull/154), [roadmap-pilot PR #536](https://github.com/anthropics/skills/pull/536) |
| **Codebase Maintenance** | Incremental cleanup, audit, and documentation tools | [codebase-inventory-audit PR #147](https://github.com/anthropics/skills/pull/147), [roadmap-pilot PR #536](https://github.com/anthropics/skills/pull/536) |
| **Testing & Quality Assurance** | Comprehensive test generation and pattern enforcement | [testing-patterns PR #723](https://github.com/anthropics/skills/pull/723), [skill-quality-analyzer PR #83](https://github.com/anthropics/skills/pull/83) |
| **Enterprise Document Formats** | Support for ODT, PPTX templates, and professional typography | [ODT skill PR #486](https://github.com/anthropics/skills/pull/486), [document-typography PR #514](https://github.com/anthropics/skills/pull/514) |
| **Agent Governance & Security** | Safety patterns, trust boundaries, and audit trails | [Issue #412](https://github.com/anthropics/skills/issues/412), [Issue #492](https://github.com/anthropics/skills/issues/492) |
| **MCP Integration** | Exposing Skills as Model Context Protocol tools | [Issue #16](https://github.com/anthropics/skills/issues/16), [Issue #369](https://github.com/anthropics/skills/issues/369) |

**Emerging Pattern:** Meta-skills that improve, analyze, or govern other Skills are gaining traction as the ecosystem matures.

---

## 3. High-Potential Pending Skills

Active PRs with strong functionality that may merge soon:

| Skill | PR | Why It Matters |
|:---|:---|:---|
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Addresses community health gap (repo currently at 25% on GitHub metrics); foundational for ecosystem growth |
| **Masonry AI (Image/Video)** | [#335](https://github.com/anthropics/skills/pull/335) | Bridges Claude to Imagen 3.0/Veo 3.1 for multimodal generation |
| **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | Enterprise predictive analytics on SAP business data using SAP's open-source foundation model |
| **claude-obsidian-reporter** | [#664](https://github.com/anthropics/skills/pull/664) | Auto-generates Git-based daily/weekly reports into Obsidian vaults—strong productivity use case |
| **x402 BSV Micropayments** | [#374](https://github.com/anthropics/skills/pull/374) | Natural language to AI service discovery, authentication, and micropayment |
| **Buildr (Telegram Bridge)** | [#419](https://github.com/anthropics/skills/pull/419) | Remote Claude Code control via Telegram—mobile workflow enablement |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for Skills that enhance output quality (typography, testing patterns) and manage complex workflows incrementally without context overflow.**

**Key Friction Points Identified:**
- Namespace/trust boundary confusion between official and community Skills ([Issue #492](https://github.com/anthropics/skills/issues/492))
- Duplicate Skills from overlapping plugin installations ([Issue #189](https://github.com/anthropics/skills/issues/189))
- Enterprise/SSO users blocked from Skill-creator features requiring API keys ([Issue #532](https://github.com/anthropics/skills/issues/532))

---

*Report generated from GitHub API data. All links reference the official repository at github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-03-27

---

## 1. Today's Highlights

Version **v2.1.84** ships with **PowerShell support as an opt-in preview for Windows**, marking a significant step toward CLI feature parity across platforms. The community remains intensely focused on **Max subscription usage limits**—the top issue now has over **1,337 comments**—with multiple new reports of abnormally fast token consumption since March 23rd. Plugin ecosystem activity is surging, with PRs for session preservation, memory consolidation, and AI-powered permission hooks.

---

## 2. Releases

### v2.1.84
- **PowerShell Tool (Windows Preview):** New opt-in tool for Windows users. Enable via [tools reference docs](https://code.claude.com/docs/en/tools-reference#powershell-tool).
- **Model Capability Override Env Vars:** Added `ANTHROPIC_DEFAULT_{OPUS,SONNET,HAIKU}_MODEL_SUPPORTS` environment variables to override effort/thinking capability detection for pinned default models—useful for custom or bleeding-edge model configurations.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#16157](https://github.com/anthropics/claude-code/issues/16157)** — *[bug, platform:macos, area:cost, area:api]* Instantly hitting usage limits with Max subscription | **1,337 comments, 603 👍.** The single most-discussed issue. Max subscribers report hitting session limits within minutes, severely impacting CLI workflows. No official resolution yet. |
| 2 | **[#34229](https://github.com/anthropics/claude-code/issues/34229)** — *[BUG] Phone verification* | **596 comments, 665 👍.** Users blocked by phone verification requirements, with frustration mounting over lack of clarity on eligibility or workaround. |
| 3 | **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — *[BUG] Claude Max plan session limits exhausted abnormally fast since March 23, 2026 (CLI usage)* | **60 comments in 3 days.** A recent spike in reports suggesting a regression or backend change affecting token accounting. |
| 4 | **[#38350](https://github.com/anthropics/claude-code/issues/38350)** — *[BUG] Abnormal / inflated rate limit / session usage* | **24 comments.** Corroborates rapid token burn; users suspect miscalculation in quota tracking. |
| 5 | **[#39381](https://github.com/anthropics/claude-code/issues/39381)** — *[BUG] VS Code: "Not responding - try stopping" offers no way to actually stop or recover* | **18 comments.** A UX failure where stuck sessions cannot be gracefully recovered, forcing users to lose all progress. |
| 6 | **[#28240](https://github.com/anthropics/claude-code/issues/28240)** — *[BUG] Permission prompt incorrectly triggers on `cd` instead of actual command in compound bash statements* | **29 comments.** Security/UX regression on Windows; prompts misattribute risk, undermining trust in permission system. |
| 7 | **[#28322](https://github.com/anthropics/claude-code/issues/28322)** — *[BUG] `/remote-control` (/rc) not recognized as built-in command in existing session* | **28 comments.** Breaks remote-control workflows mid-session, requiring session restart. |
| 8 | **[#38624](https://github.com/anthropics/claude-code/issues/38624)** — *[BUG] Caps Lock leaks as raw `[57358u` text in kitty keyboard protocol terminals* (CLOSED) | **26 👍.** Affects Ghostty, Kitty, WezTerm users—input corruption from keyboard protocol handling. |
| 9 | **[#39188](https://github.com/anthropics/claude-code/issues/39188)** — *[BUG] Caps Lock key event leaks as raw text `[57358u` into input* | **Duplicate of #38624.** Confirms impact across multiple terminals. |
| 10 | **[#34210](https://github.com/anthropics/claude-code/issues/34210)** — *[BUG] Claude Code silently deletes user files from `~/.claude/sessions/` — DATA LOSS* (CLOSED) | **3 comments.** Critical data loss bug where date-prefixed files are mistaken for stale PID files and deleted. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | **[#39559](https://github.com/anthropics/claude-code/pull/39559)** — Modernize pr-review-toolkit agents and overhaul review-pr command | Major overhaul of the PR review toolkit, updating agents to current Claude capabilities after 5 months of stagnation. |
| 2 | **[#39132](https://github.com/anthropics/claude-code/pull/39132)** — feat: add terminal-restore plugin for kitty keyboard protocol cleanup | Workaround for #38761—ensures terminal state is restored on exit, fixing Ctrl-C/Ctrl-D breakage in Ghostty/Kitty/WezTerm. |
| 3 | **[#39148](https://github.com/anthropics/claude-code/pull/39148)** — feat: add preserve-session plugin for path-independent session history | Assigns UUIDs to projects, preserving session history across renames/moves. Addresses a long-standing pain point. |
| 4 | **[#39320](https://github.com/anthropics/claude-code/pull/39320)** — feat: add Bark community plugin — AI-powered permission hook | Uses AI to assess tool call risk levels, auto-approving safe operations and prompting on risky ones. |
| 5 | **[#39299](https://github.com/anthropics/claude-code/pull/39299)** — feat: add /dream command plugin for manual memory consolidation | Implements `/dream` slash command for explicit memory consolidation, referenced in `/memory` UI hints. |
| 6 | **[#39370](https://github.com/anthropics/claude-code/pull/39370)** — feat(plugins): add frontend-design-system plugin | Generates design specs (wireframes, OKLCH color theory, design tokens) before implementation. |
| 7 | **[#36625](https://github.com/anthropics/claude-code/pull/36625)** — Fix Pre/PostToolUse message not being shown to Claude | Fixes hookify plugin: moves block messages to `permissionDecisionReason` so Claude actually sees them. |
| 8 | **[#39354](https://github.com/anthropics/claude-code/pull/39354)** — Fix silent validation failures and improve error handling | Adds stderr error messages for validation failures in `edit-issue-labels.sh`—improves debuggability. |
| 9 | **[#39164](https://github.com/anthropics/claude-code/pull/39164)** — fix(plugins): emit plain text from SessionStart hooks (CLOSED) | Fixes `explanatory-output-style` and `learning-output-style` hooks to emit plain text instead of JSON. |
| 10 | **[#39166](https://github.com/anthropics/claude-code/pull/39166)** — fix(plugins): quote official hook script paths (CLOSED) | Hardens plugin hook scripts against install paths containing spaces. |

---

## 5. Feature Request Trends

| Trend | Description |
|-------|-------------|
| **Hook System Expansion** | Multiple requests for `PrePlanMode`/`PostPlanMode` hooks (#14259), input-waiting hooks (#13024), and task lifecycle hooks. Users want deeper automation integration. |
| **Session & History Management** | Requests for session name in statusline JSON (#15029), persistent MCP configs (#11085), and path-independent session history (PR #39148). |
| **Theme & UX Polish** | Auto light/dark theme switching (#2990) and terminal input handling (Caps Lock, keyboard protocol) remain open. |
| **File/Project Permissions** | Requests for Claude to write/update project files directly (#16550) and improved permission prompt accuracy (#28240, #39560). |

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Max Subscription Usage Limits** | #16157 (1,337 comments), #38335, #38350, #38239—all report rapid token exhaustion, some within minutes. No clear communication on root cause. |
| **Session Recovery & Data Loss** | #39381 (no way to stop/recover stuck sessions), #34210 (silent file deletion). Users lose work with no recourse. |
| **Windows CLI Parity** | PowerShell tool added (v2.1.84), but permission prompts (#28240) and bash tool issues persist. |
| **Terminal Compatibility** | Kitty keyboard protocol issues (#38624, #39188, #38721) affect Ghostty, Kitty, WezTerm users. |
| **Plugin Hook Reliability** | Multiple fixes merged (PRs #39164, #39166, #39168, #39174) suggest documentation and edge-case handling were lacking. |

---

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-03-27

## 1. Today's Highlights
The Codex team is in a heavy iteration cycle on the **Rust codebase**, shipping **6 alpha releases** (v0.117.0-alpha.20–25) in the last 24 hours, signaling imminent stabilization. Engineering focus is split between hardening the **Windows sandbox** (ACL fixes, unified exec runtime) and refactoring the **telemetry architecture** to support thread/turn-level events. A critical **token consumption bug** (#14593) continues to dominate community discussion with nearly 300 comments.

---

## 2. Releases
**Rust SDK v0.117.0 Alpha Cycle (6 releases in 24h)**
- **Versions:** `rust-v0.117.0-alpha.25` down to `alpha.20`
- **Summary:** Rapid-fire alpha releases indicate aggressive integration of recent PRs, likely including the telemetry rework (#15690, #15591) and sandbox refactors (#15578). Developers depending on the Rust SDK should pin versions carefully during this unstable period.
- **Link:** [github.com/openai/codex/releases](https://github.com/openai/codex/releases)

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#14593 - Burning tokens very fast](https://github.com/openai/codex/issues/14593)** <br> `[bug, rate-limits]` · 👍 95 · 💬 283 | The top-voted active bug. Users report the VS Code extension consuming tokens at an abnormal rate, significantly increasing costs. No official fix yet; high community frustration. |
| 2 | **[#8745 - LSP integration for Codex CLI](https://github.com/openai/codex/issues/8745)** <br> `[enhancement, CLI, agent]` · 👍 214 · 💬 43 | Highly requested feature to add built-in Language Server Protocol support with auto-detection/installation. Would significantly improve code intelligence for CLI users. |
| 3 | **[#15777 - Windows sandbox corrupts ACL on AppData](https://github.com/openai/codex/issues/15777)** <br> `[bug, windows-os, sandbox]` · 👍 0 · 💬 22 | Critical Windows regression where Codex sandbox installation breaks Access Control Lists, causing GPU sandbox failures in Chromium browsers. Needs urgent attention. |
| 4 | **[#11981 - 100% CPU Usage with single agent](https://github.com/openai/codex/issues/11981)** <br> `[bug, app]` · 👍 0 · 💬 21 | Performance bug where the desktop app maxes out CPU even during idle/single-agent operation. Affects macOS users significantly. |
| 5 | **[#8648 - Codex replies to earlier messages](https://github.com/openai/codex/issues/8648)** <br> `[bug, context]` · 👍 14 · 💬 21 | Context handling bug in multi-turn conversations where the model responds to outdated messages instead of the latest. Impacts reliability for complex tasks. |
| 6 | **[#3049 - Configurable Hotkeys Support](https://github.com/openai/codex/issues/3049)** <br> `[enhancement, TUI]` · 👍 64 · 💬 18 | Long-standing request to allow users to customize hardcoded keybindings (Ctrl+J, Ctrl+H). Accessibility and workflow efficiency concern. |
| 7 | **[#13993 - Standalone Windows Installer](https://github.com/openai/codex/issues/13993)** <br> `[enhancement, windows-os, app]` · 👍 47 · 💬 14 | Enterprise users need a traditional `.exe` installer due to Microsoft Store restrictions in corporate/offline environments. |
| 8 | **[#15169 - Playwright MCP "approve for session" regression](https://github.com/openai/codex/issues/15169)** <br> `[bug, mcp, regression]` · 👍 11 · 💬 11 | MCP integration regression where session-level approvals are no longer remembered, forcing repeated permission prompts. |
| 9 | **[#14860 - Remote compact task timeout](https://github.com/openai/codex/issues/14860)** <br> `[bug, context]` · 👍 9 · 💬 17 | CLI users hitting timeouts during context compaction tasks, blocking long-running sessions on Linux. |
| 10 | **[#15648 - GPT-5.3-Codex-Spark model not supported](https://github.com/openai/codex/issues/15648)** <br> `[bug, auth, CLI]` · 👍 0 · 💬 6 | Auth/model availability confusion where ChatGPT accounts cannot access specific Codex models via CLI. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | **[#15690 - Telemetry: thread events](https://github.com/openai/codex/pull/15690)** | Reworks analytics crate to use reducer/publish architecture; adds events for `thread/start`, `thread/fork`, `thread/resume`. Foundational for observability. |
| 2 | **[#15578 - Windows sandbox unified exec runtime](https://github.com/openai/codex/pull/15578)** | Adds unified-exec session support for Windows sandbox (both restricted-token and elevated runner backends). Critical for Windows stability. |
| 3 | **[#15911 - Consolidate app-server TUI into codex-rs/tui](https://github.com/openai/codex/pull/15911)** | Merges split TUI/TUI-app-server into a single crate, removing runtime dispatch duplication. Simplifies architecture. |
| 4 | **[#15120 - Refactor network permissions](https://github.com/openai/codex/pull/15120)** | Replaces legacy allow/deny lists with explicit domain and Unix socket rule maps. Improves security granularity. |
| 5 | **[#15909 - Network proxy: fail closed on DNS errors](https://github.com/openai/codex/pull/15909)** | Security fix—ensures DNS lookup failures default to deny instead of allowing requests. |
| 6 | **[#15227 - Protect first-time project .codex creation on Windows](https://github.com/openai/codex/pull/15227)** | Closes ACL protection gap when `.codex` directory is first created on Windows sandbox. |
| 7 | **[#15561 - CLI /create-api-key slash command](https://github.com/openai/codex/pull/15561)** | Adds convenient CLI command for API key creation with OAuth/PKCE flow. Improves onboarding. |
| 8 | **[#15890 - Fix Windows timed-out shell_command cleanup](https://github.com/openai/codex/pull/15890)** | Uses `taskkill /T /F` for proper process-tree cleanup on Windows when shell commands timeout. |
| 9 | **[#15888 - Log upstream inline image limit rejections](https://github.com/openai/codex/pull/15888)** | Adds observability for API image limit failures with structured logging and Statsig counters. |
| 10 | **[#15910 - Docs: discourage adding code to codex-core](https://github.com/openai/codex/pull/15910)** | Guidance update to keep `codex-core` modular; contributors should use existing crates or create new ones. |

---

## 5. Feature Request Trends

1. **LSP Integration for CLI** — Auto-detection and installation of language servers is the top-voted enhancement (👍 214). Users want code intelligence parity between IDE and CLI experiences.

2. **Windows First-Class Support** — Multiple requests for standalone installers (#13993), sandbox ACL fixes (#15777, #14675), and PowerShell handling improvements (#8537). Windows users feel underserved.

3. **Customizable Keybindings** — Hardcoded hotkeys remain a pain point; configurable shortcuts would improve accessibility (#3049, 👍 64).

4. **MCP Tool Control** — Fine-grained ability to disable specific tools from MCP servers (#2963) rather than all-or-nothing.

5. **Multi-Chat/Tab Support** — Requests for displaying and managing multiple concurrent chat sessions in the desktop app (#13036, #9849).

6. **Enterprise/Team Configuration** — Centralized `AGENTS.md` or instructions file for company-wide rollouts (#3853).

---

## 6. Developer Pain Points

| Category | Pain Point | Evidence |
|----------|-----------|----------|
| **Token Economics** | Rapid token consumption burning through quotas | #14593 (283 comments, 95 👍) — top active issue |
| **Windows Stability** | Sandbox ACL corruption, CPU spikes, installer limitations | #15777, #11981, #13993, #14675, #8537 |
| **Context Reliability** | Model responds to wrong messages; compaction failures | #8648, #14860 |
| **CPU/Performance** | High resource usage even during idle | #11981 (100% CPU), #7972 (macOS extension CPU) |
| **Permission Friction** | MCP session approvals not remembered; repetitive prompts | #15169, #2963 |
| **Auth/Model Confusion** | Unclear model availability across subscription tiers | #15648 (GPT-5.3-Codex-Spark rejection) |
| **Undo/Editing** | Option-backspace deletes all text with no undo | #222 (closed but resurfaces periodically) |

---

*Digest generated from GitHub activity on 2026-03-27. For real-time updates, watch the [openai/codex](https://github.com/openai/codex) repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-27

### 1. Today's Highlights
The Gemini CLI team is aggressively iterating on the **v0.36.0 preview** (4th preview release in 24h) while simultaneously stabilizing **v0.35.1**. A major theme in today's activity is **Context Management & Compression**, with new "Epic" issues and PRs targeting endless loops and memory bloat in long-running agentic sessions. Additionally, the **Spec-Driven Development (SDD)** architecture is undergoing a significant refactor to move from linear markdown checklists to a robust Directed Acyclic Graph (DAG) execution model.

---

### 2. Releases
*   **[v0.36.0-preview.4](https://github.com/google-gemini/gemini-cli/releases/tag/v0.36.0-preview.4)**: Rapid iteration continues; see full changelog [here](https://github.com/google-gemini/gemini-cli/compare/v0.36.0-preview.3...v0.36.0-preview.4).
*   **[v0.35.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.35.1)**: Stable release patch; see changes [here](https://github.com/google-gemini/gemini-cli/compare/v0.35.0...v0.35.1).

---

### 3. Hot Issues

1.  **[Critical Service Outage & Timeouts (#23795)](https://github.com/google-gemini/gemini-cli/issues/23795)**
    *   **Why:** Users on "Google One AI Ultra" plans report the CLI hanging for 10+ minutes and timing out. With 16 upvotes and high activity, this is the top user-visible incident.
2.  **[Persistent 429 "Too Many Requests" Errors (#23900)](https://github.com/google-gemini/gemini-cli/issues/23900)**
    *   **Why:** Users hitting severe rate limits (HTTP 429) over the last 48 hours, suggesting backend throttling changes or quota bugs.
3.  **[Compression Endless Loop Investigation (#23907)](https://github.com/google-gemini/gemini-cli/issues/23907)**
    *   **Why:** A P0 internal investigation into "Ralph loops" where compression logic triggers endlessly in agentic sessions. This is critical for stability in autonomous modes.
4.  **[WriteTool Overwriting Files (#17776)](https://github.com/google-gemini/gemini-cli/issues/17776)**
    *   **Why:** A long-standing frustration where `WriteTool` replaces entire files instead of patching specific sections, causing data loss in `gemini-3-pro-preview`.
5.  **[Plan Mode Editing Files (#23858)](https://github.com/google-gemini/gemini-cli/issues/23858)**
    *   **Why:** Safety violation where the agent modifies code while in "Plan Mode," which should be read-only.
6.  **[SDD Phase 3: DAG-based Task Integration (#23320)](https://github.com/google-gemini/gemini-cli/issues/23320)**
    *   **Why:** Major architectural shift replacing static markdown plans with a persistent, file-based Directed Acyclic Graph for task tracking.
7.  **[Passing Prompts to `/plan` (#22855)](https://github.com/google-gemini/gemini-cli/issues/22855)**
    *   **Why:** UX request to allow `/plan [text]` to initiate planning in one command, rather than opening a separate modal box.
8.  **[Subagent Awareness of Approval Modes (#23582)](https://github.com/google-gemini/gemini-cli/issues/23582)**
    *   **Why:** Subagents currently ignore "Plan Mode" or "Auto-Edit Mode" constraints, leading to blocked tool calls and inefficient loops.
9.  **[Memory Routing: Global vs. Project (#22819)](https://github.com/google-gemini/gemini-cli/issues/22819)**
    *   **Why:** Defining where agents store memories (User preferences in `~/.gemini` vs. Project context in `.gemini/`).
10. **[Compression in ACP (#23945)](https://github.com/google-gemini/gemini-cli/issues/23945)**
    *   **Why:** Reports that the new compression logic fails to trigger in ACP (Agent Client Protocol) sessions.

---

### 4. Key PR Progress

1.  **[fix: prevent compression endless loop (#23946)](https://github.com/google-gemini/gemini-cli/pull/23946)**
    *   **Details:** P0 fix ensuring `tryCompressChat` fires only once per turn to stop infinite loops during long agentic sessions.
2.  **[fix(cli): prevent infinite re-render loop (#23948)](https://github.com/google-gemini/gemini-cli/pull/23948)**
    *   **Details:** P0 fix for UI lockups caused by `useFlickerDetector` and `useSessionResume` hooks missing dependency arrays.
3.  **[feat(cli): implement compact tool output (#20974)](https://github.com/google-gemini/gemini-cli/pull/20974)**
    *   **Details:** Major UI improvement rendering tool outputs in a compact, high-signal format to reduce context window noise.
4.  **[refactor(core): delegate sandbox denial parsing (#23928)](https://github.com/google-gemini/gemini-cli/pull/23928)**
    *   **Details:** Cleanup moving platform-specific sandbox logic to `SandboxManager` to prepare for Phase 2 sandbox features.
5.  **[feat(policy): replace YOLO mode with wildcard policy (#23041)](https://github.com/google-gemini/gemini-cli/pull/23041)**
    *   **Details:** Radical simplification removing hardcoded `ApprovalMode.YOLO` in favor of a data-driven `allowedTools: ["*"]` policy.
6.  **[fix(core): remove shell output buffer caching (#23751)](https://github.com/google-gemini/gemini-cli/pull/23751)**
    *   **Details:** Fixes memory bloat by removing unbounded buffers for shell output chunks and sanitizes prompt injection vectors.
7.  **[feat(core): subagent isolation and cleanup (#23903)](https://github.com/google-gemini/gemini-cli/pull/23903)**
    *   **Details:** Isolates subagent storage in subdirectories and hardens cleanup logic to prevent orphan files.
8.  **[fix(acp): Update allow approval policy flow (#23818)](https://github.com/google-gemini/gemini-cli/pull/23818)**
    *   **Details:** Unifies ACP (Agent Client Protocol) permission labels with the Terminal UI and fixes config persistence.
9.  **[feat(core): add forbiddenPaths to Sandbox (#23936)](https://github.com/google-gemini/gemini-cli/pull/23936)**
    *   **Details:** Refactors `createSandboxManager` to centralize security paths (like `.geminiignore`) into a single options object.
10. **[feat: implement high-signal PR regression check (#23937)](https://github.com/google-gemini/gemini-cli/pull/23937)**
    *   **Details:** Introduces a CI check to prevent prompt changes from breaking stable evaluations, reducing CI noise.

---

### 5. Feature Request Trends
*   **Advanced Context Control:** Users and maintainers are pushing hard for finer control over context windows. This includes "Truncation vs. Compression" debates (Issue [#23944](https://github.com/google-gemini/gemini-cli/issues/23944)) and keeping context under 200k tokens for optimal coding performance.
*   **Proactive Memory Systems:** Significant work is being directed toward "Memory Routing" (Issue [#22819](https://github.com/google-gemini/gemini-cli/issues/22819)) and tuning agents to proactively save user preferences (Issue [#22809](https://github.com/google-gemini/gemini-cli/issues/22809)) rather than waiting for explicit commands.
*   **Workflow Streamlining:** Requests to allow arguments for slash commands (e.g., `/plan <text>`) to maintain flow state without opening separate UI panes.

---

### 6. Developer Pain Points
*   **Service Instability:** A spike in "Thinking forever" and "429 Rate Limit" errors is causing significant disruption for paid tier users (Ultra/Pro).
*   **Agent Reliability:** Users report agents modifying files in Plan Mode (Issue [#23858](https://github.com/google-gemini/gemini-cli/issues/23858)) and overwriting entire files instead of patching (Issue [#17776](https://github.com/google-gemini/gemini-cli/issues/17776)), eroding trust in autonomous operations.
*   **UI "Lockup":** The TUI (Terminal User Interface) is prone to freezing due to re-render loops (PR [#23948](https://github.com/google-gemini/gemini-cli/pull/23948)), requiring restarts.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-27

## 1. Today's Highlights
The release of versions **v1.0.12-1** and **v1.0.12-2** introduces enhanced plugin hook environment variables and improved model status visibility, signaling a focus on extensibility and UX refinement. However, the community is currently voicing significant frustration regarding **performance regressions** (slow responses compared to VS Code) and **stability issues** related to session resumption and MCP server connectivity.

## 2. Releases

### **v1.0.12-2**
*   **Added:** Plugin hooks now receive `CLAUDE_PROJECT_DIR` and `CLAUDE_PLUGIN_DATA` environment variables, with support for `{{project_dir}}` and `{{plugin_data_dir}}` template variables.
*   **Improved:** The model display header now shows the active reasoning effort level (e.g., "(high)").

### **v1.0.12-1**
*   **Improved:** Status line payload now includes a `session_name` field alongside `session_id`.
*   **Fixed:** OSC 8 hyperlinks are now clickable in VS Code terminals.
*   **Fixed:** PowerShell flags (e.g., `/all`, `/enum-devices`) are no longer incorrectly treated as file paths.
*   **Fixed:** Trusted folder access prompts behavior improved (details truncated in source).

## 3. Hot Issues

1.  **[OPEN] Performance Regression vs. VS Code** [(#960)](https://github.com/github/copilot-cli/issues/960)
    *   **Context:** Users report the CLI takes 6x longer (12-14 mins vs 1-2 mins) than VS Code Copilot Chat for identical prompts and configs.
    *   **Reaction:** High engagement (5 👍); users suspect network handling or context processing differences in the CLI.

2.  **[OPEN] Rate Limiting & Transient API Errors** [(#2101)](https://github.com/github/copilot-cli/issues/2101)
    *   **Context:** A surge in "transient API errors" leading to immediate rate limits ("try again in 1 minute").
    *   **Reaction:** Multiple reports (see also [(#2267)](https://github.com/github/copilot-cli/issues/2267)), suggesting a possible backend or auth-token handling issue.

3.  **[OPEN] Linux Clipboard Support Broken** [(#2082)](https://github.com/github/copilot-cli/issues/2082)
    *   **Context:** `Ctrl+Shift+C` (standard Linux copy) stopped working in recent versions.
    *   **Reaction:** Users are forced to rely on right-click or `Ctrl+C`, which conflicts with interrupt signals.

4.  **[OPEN] MCP Servers Not Recognized** [(#424)](https://github.com/github/copilot-cli/issues/424) & [(#2176)](https://github.com/github/copilot-cli/issues/2176)
    *   **Context:** After updates, the CLI lists MCP servers as enabled, but the LLM claims it cannot see them.
    *   **Reaction:** Critical for workflows relying on external tools; "breaking changes" in updates seem to sever the connection.

5.  **[OPEN] Feature Request: Custom Slash Commands** [(#1113)](https://github.com/github/copilot-cli/issues/1113)
    *   **Context:** Users want to define reusable slash commands via `.md` files (similar to competitor tools) without building extensions.
    *   **Reaction:** Top feature request (11 👍); users want portable, file-based prompt libraries.

6.  **[CLOSED] Text Selection Captures Only First Character** [(#2143)](https://github.com/github/copilot-cli/issues/2143)
    *   **Context:** A critical UX bug where copying code snippets from the output captures only the first character.
    *   **Reaction:** Likely fixed in recent patches, but highlights rendering instability in the TUI.

7.  **[OPEN] Invisible Characters in Copied Commands** [(#2285)](https://github.com/github/copilot-cli/issues/2285)
    *   **Context:** Copying from Copilot CLI and pasting into external terminals results in "command not found" due to hidden characters.
    *   **Reaction:** significant friction for users trying to execute AI-generated commands.

8.  **[OPEN] GPT Model Schema Incompatibility** [(#2223)](https://github.com/github/copilot-cli/issues/2223)
    *   **Context:** GPT models fail with `400 Invalid schema` if MCP tools lack `properties`, whereas Claude handles it fine.
    *   **Reaction:** Highlights strict schema validation differences between model providers within the CLI.

9.  **[OPEN] Feature Request: Paste Images from Clipboard** [(#2328)](https://github.com/github/copilot-cli/issues/2328)
    *   **Context:** Users currently must save images to files to attach them.
    *   **Reaction:** Request for direct paste from snipping tools to streamline multimodal interactions.

10. **[OPEN] Session Resume Broken for Sub-Agents** [(#2323)](https://github.com/github/copilot-cli/issues/2323)
    *   **Context:** Resuming sessions involving parallel sub-agents causes `tool_use` / `tool_result` mismatch errors.
    *   **Reaction:** Breaking issue for complex workflows relying on multi-agent architectures.

## 4. Key PR Progress
*Activity is low in the public repository for this period.*

1.  **[(#2316) Dev](https://github.com/github/copilot-cli/pull/2316)**
    *   **Description:** Updates development container features to include `ghcr.io/devcontainers/features/github-cli:1`.
    *   **Significance:** Improves the inner-loop development experience for contributors by ensuring the GitHub CLI is available inside the dev container.

## 5. Feature Request Trends
*   **Workflow Portability:** Strong demand for **Custom Slash Commands** ([(#1113)](https://github.com/github/copilot-cli/issues/1113)) via markdown files to create reusable prompt libraries.
*   **Multimodal Inputs:** Users want to bypass file saving for images, requesting direct **Clipboard Image Pasting** ([(#2328)](https://github.com/github/copilot-cli/issues/2328)).
*   **Extensible UI:** Requests for a **Customizable Status Line** ([(#2326)](https://github.com/github/copilot-cli/issues/2326)) to display git context or custom scripts.
*   **Language Support:** Call for official documentation on **C# LSP Integration** ([(#2204)](https://github.com/github/copilot-cli/issues/2204)).

## 6. Developer Pain Points
*   **Cross-Platform Input Issues:** A recurring theme involves input handling differences across OSs. Specifically, **PowerShell argument parsing** (fixed in v1.0.12-1) and **Linux/Windows clipboard support** (copy/paste glitches, invisible characters).
*   **Agent "Drift":** Users report that when "steering" the agent (correcting it mid-task), the CLI often loses context and abandons the original task ([(#2248)](https://github.com/github/copilot-cli/issues/2248)).
*   **Silent Failures:** The CLI sometimes fails to start or crashes without output, often linked to **authentication** or **MCP initialization** errors ([(#2184)](https://github.com/github/copilot-cli/issues/2184)), making debugging difficult.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-27

## 1. Today's Highlights
Community activity remains high with no new official releases in the last 24 hours, shifting the focus entirely to upstream contributions and bug tracking. A significant incompatibility between the Kimi API's strict JSON Schema requirements and standard MCP servers has been flagged, threatening ecosystem interoperability. On the development front, contributors are actively enhancing the CLI's extensibility via a new lifecycle hooks system and improving large-repository performance by optimizing file discovery mechanisms.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
1.  **[#1595 JSON Schema Incompatibility with MCP Servers](https://github.com/MoonshotAI/kimi-cli/issues/1595)**
    *   **Why it matters:** A critical architectural issue where Kimi API rejects standard JSON Schema (used by MCP servers) because it mandates explicit `type` fields. This breaks compatibility with the broader MCP ecosystem.
    *   **Reaction:** Technical deep-dive provided by the author; currently awaiting maintainer response.

2.  **[#1594 Init Function Stuck at Shell Action](https://github.com/MoonshotAI/kimi-cli/issues/1594)**
    *   **Why it matters:** Users report the `/init` command hangs during shell actions on Windows & Debian, blocking project setup.
    *   **Reaction:** 0 comments so far, but affects core workflow reliability.

3.  **[#1592 High Memory Consumption in VSCode Plugin](https://github.com/MoonshotAI/kimi-cli/issues/1592)**
    *   **Why it matters:** Long-running coding tasks cause the VSCode extension to consume excessive memory, degrading system performance.
    *   **Reaction:** Validated by users running extended autonomous sessions.

4.  **[#1589 Request to Skip Tool Call Errors](https://github.com/MoonshotAI/kimi-cli/issues/1589)**
    *   **Why it matters:** In "Yolo" (autonomous) mode, a single tool error halts the entire process. Users want resilience to continue execution.
    *   **Reaction:** Highlights a need for more robust autonomous error handling.

5.  **[#1355 ACP Session Initialization Failure](https://github.com/MoonshotAI/kimi-cli/issues/1355)**
    *   **Why it matters:** Persistent bug affecting ACP session initialization in IDEA 2025, causing `list.index` errors.
    *   **Reaction:** Active discussion (3 comments) but remains unresolved since March 6.

## 4. Key PR Progress
1.  **[#1561 feat(hooks): Add Lifecycle Hooks System](https://github.com/MoonshotAI/kimi-cli/pull/1561)**
    *   Introduces a system to run user-defined shell commands at 13 key lifecycle points (e.g., `PreToolUse`, `PostToolUse`), aligning with Claude Code's extensibility architecture.

2.  **[#1588 fix(shell): Use git ls-files for Large Repos](https://github.com/MoonshotAI/kimi-cli/pull/1588)**
    *   Fixes file mention completion (`@`) failing in massive repositories (e.g., 65k+ files) by switching from standard file walking to `git ls-files`.

3.  **[#1593 feat(feedback): Async Feedback Submission](https://github.com/MoonshotAI/kimi-cli/pull/1593)**
    *   Implements an asynchronous `/feedback` command that collects context and metadata, falling back to GitHub issues if submission fails.

4.  **[#1591 fix(wire): Reject Steer Messages After Turn Ends](https://github.com/MoonshotAI/kimi-cli/pull/1591)**
    *   Fixes a complex race condition where "steer" messages could be silently lost during the transition between agent turns.

5.  **[#1512 feat: ACP Auth Rewrite](https://github.com/MoonshotAI/kimi-cli/pull/1512)**
    *   Major refactor of the ACP server authentication to support both terminal login and OAuth Device Flow for a more robust login experience.

6.  **[#1479 feat(web): HTTP Proxy Support](https://github.com/MoonshotAI/kimi-cli/pull/1479)**
    *   Adds support for HTTP/HTTPS proxies via environment variables, essential for corporate or restricted network environments.

7.  **[#1345 feat(soul): OSC 9 Terminal Notifications](https://github.com/MoonshotAI/kimi-cli/pull/1345)** (Closed)
    *   Implemented OSC 9 notifications to alert users upon task completion or approval requirements in compatible terminals.

8.  **[#1590 feat: Global & Local Config Merging](https://github.com/MoonshotAI/kimi-cli/pull/1590)**
    *   Enables loading global rules (`~/.kimi/AGENTS.md`) alongside local project rules, merging them intelligently for consistent coding standards.

9.  **[#1587 feat(shell): Inject Shell Output to Context](https://github.com/MoonshotAI/kimi-cli/pull/1587)**
    *   Allows output from shell mode (`Ctrl+X`) to enter the conversation context, ensuring the agent is aware of user-executed commands.

10. **[#1236 feat(http): Enable trust_env](https://github.com/MoonshotAI/kimi-cli/pull/1236)**
    *   Updates `aiohttp.ClientSession` creation to trust environment variables, complementing the proxy support efforts.

## 5. Feature Request Trends
*   **Resilient Autonomy:** Strong demand for "Yolo mode" to be fault-tolerant. Users want the CLI to skip or retry failed tool calls rather than stopping the entire task (#1589).
*   **Ecosystem Compatibility:** Developers expect standard JSON Schema support to ensure existing MCP servers work out-of-the-box (#1595).
*   **Performance Optimization:** Focus on resource efficiency, specifically regarding memory usage in IDEs (#1592) and responsiveness in large repositories (#1588).

## 6. Developer Pain Points
*   **MCP Integration Friction:** The strict "Moonshot Flavored JSON Schema" is a major blocker for developers trying to integrate standard external tools.
*   **Memory Leaks:** The VSCode plugin's memory usage during long sessions is a significant pain point for daily users.
*   **Configurability Limits:** Users are currently patching the code or waiting for PRs to get basic features like proxy support and global configuration files, indicating the default settings are too rigid for advanced dev environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-27

## Today's Highlights

OpenCode v1.3.3 arrives with significant performance optimizations for the TUI and a major architectural shift for the Desktop app, which now embeds the WebUI directly in the binary. Community discussions are heating up around model compatibility—specifically with Opus 4.6 prefill errors and Kimi 2.5 reasoning cutoffs—while enterprise users are scrutinizing security after a reported XSS vulnerability in the desktop-electron package.

---

## Releases

### [v1.3.3](https://github.com/anomalyco/opencode/releases/tag/v1.3.3)

**TUI Improvements:**
- **Performance:** Bypassed local SSE event streaming in worker, improving responsiveness ([#19183](https://github.com/anomalyco/opencode/pull/19183))
- **Windows Fix:** Resolved image paste support issues on Windows Terminal 1.25+ with kitty keyboard enabled ([#17674](https://github.com/anomalyco/opencode/pull/17674))

**Desktop App:**
- **Embedded WebUI:** WebUI is now embedded directly in the binary with configurable proxy flags ([#19299](https://github.com/anomalyco/opencode/pull/19299))
- **Bug Fix:** Addressed agent normalization issues

---

## Hot Issues

1. **[#4340](https://github.com/anomalyco/opencode/issues/4340) — [CLOSED] Windows arm64 Support**
   *Why it matters:* With ARM-based Windows devices gaining traction, this 38-comment thread reflects strong demand (23 👍) for native arm64 support. The issue was closed, suggesting it may be resolved or on the roadmap.

2. **[#13768](https://github.com/anomalyco/opencode/issues/13768) — [OPEN] Opus 4.6 Prefill Error with GitHub Copilot**
   *Why it matters:* Users integrating Opus 4.6 via GitHub Copilot face frequent "assistant message prefill" errors that halt sessions. With 36 comments, this is a critical compatibility blocker for enterprise workflows.

3. **[#6930](https://github.com/anomalyco/opencode/issues/6930) — [CLOSED] Anthropic OAuth ToS Violation & Account Bans**
   *Why it matters:* A cautionary tale—users report account bans after using OpenCode's OAuth login with Anthropic. This 21-comment discussion highlights risks around authentication methods and ToS compliance.

4. **[#13515](https://github.com/anomalyco/opencode/issues/13515) — [OPEN] Kimi 2.5 Reasoning Cutoff via NVIDIA API**
   *Why it matters:* The reasoning/thinking process is missing when using Kimi K2.5 through NVIDIA's API within OpenCode, despite working on NVIDIA's playground. Affects users relying on alternative model providers.

5. **[#16992](https://github.com/anomalyco/opencode/issues/16992) — [OPEN] Feature Request: `/btw` Command**
   *Why it matters:* Parity request with Anthropic's Claude Code CLI. The `/btw` command for contextual queries has strong community backing (31 👍), indicating demand for enhanced CLI interactions.

6. **[#16499](https://github.com/anomalyco/opencode/issues/16499) — [OPEN] GPT-5.4 Fast Mode (`/fast`) Support**
   *Why it matters:* The most-upvoted feature request (42 👍) seeks integration of GPT-5.4's fast mode toggle directly in the TUI for quicker iterations.

7. **[#17356](https://github.com/anomalyco/opencode/issues/17356) — [OPEN] XSS Vulnerability in Desktop Electron Markdown Renderer**
   *Why it matters:* Security issue (CWE-79) where unescaped `href`/`title` attributes and unblocked `javascript:` URLs could allow script execution. Critical for enterprise adoption.

8. **[#9003](https://github.com/anomalyco/opencode/issues/9003) — [CLOSED] Main Agent Hangs Due to Subagent (Explore)**
   *Why it matters:* Sessions freeze when subagent responses complete but never propagate to the main session. This regression affects core workflow reliability.

9. **[#19168](https://github.com/anomalyco/opencode/issues/19168) — [CLOSED] Local MCP Process Leak**
   *Why it matters:* Local MCP servers configured via stdio spawn new processes per session but never terminate them, causing memory bloat over time. A critical performance fix for long-running environments.

10. **[#19297](https://github.com/anomalyco/opencode/issues/19297) — [OPEN] Bash Executed in Plan Mode**
    *Why it matters:* Safety concern—users expect plan mode to be read-only, but bash commands execute without confirmation. Undermines trust in permission controls.

---

## Key PR Progress

1. **[#19299](https://github.com/anomalyco/opencode/pull/19299) — [CLOSED] Embed WebUI in Binary with Proxy Flags**
   *Summary:* Major architectural change embedding WebUI directly in the desktop binary, eliminating external dependencies and adding configurable proxy support.

2. **[#13321](https://github.com/anomalyco/opencode/pull/13321) — [OPEN] Robust Subagent Completion Propagation**
   *Summary:* Fixes parent session hangs when subagents complete but `SessionPrompt.prompt()` never resolves. Awaiting merge to resolve multiple hang-related issues.

3. **[#18516](https://github.com/anomalyco/opencode/pull/18516) — [OPEN] Plan Mode: Prevent Subagent Escape & Markdown Rendering**
   *Summary:* Prevents subagents from bypassing plan restrictions, improves exit prompts, and adds markdown rendering for better UX in experimental planning mode.

4. **[#12042](https://github.com/anomalyco/opull/12042) — [OPEN] Plugin SDK v2**
   *Summary:* Introduces SDK v2 alongside v1 for backward compatibility, enabling plugin authors to adopt newer APIs incrementally.

5. **[#15926](https://github.com/anomalyco/opencode/pull/15926) — [OPEN] MCP Apps Support for Rich iframe UIs**
   *Summary:* Enables MCP servers to render interactive UIs in sandboxed iframes—a significant extensibility enhancement for plugin ecosystems.

6. **[#18433](https://github.com/anomalyco/opencode/pull/18433) — [OPEN] AI SDK v6 Support**
   *Summary:* Migration to AI SDK v6, currently blocked by upstream dependency. Important for keeping pace with latest AI framework capabilities.

7. **[#19178](https://github.com/anomalyco/opencode/pull/19178) — [OPEN] macOS Managed Preferences (MDM) Support**
   *Summary:* Adds enterprise MDM deployment support via `.mobileconfig` for Jamf, Kandji, and FleetDM—critical for enterprise adoption.

8. **[#13854](https://github.com/anomalyco/opencode/pull/13854) — [OPEN] Fix TUI Markdown Streaming After Message Complete**
   *Summary:* Corrects streaming state detection so completed messages render all content, including final table rows.

9. **[#19335](https://github.com/anomalyco/opencode/pull/19335) — [OPEN] Workspace Routing Integration**
   *Summary:* Refactors server routing with workspace-aware control plane, improving multi-workspace session handling.

10. **[#18767](https://github.com/anomalyco/opencode/pull/18767) — [OPEN] Mobile Touch Optimization**
    *Summary:* Optimizes the OpenCode app for mobile/touch devices while preserving desktop UX—reflecting growing mobile usage.

---

## Feature Request Trends

- **Model Control Commands:** Strong demand for CLI shortcuts like `/btw` (31 👍) and `/fast` for GPT-5.4 (42 👍), indicating users want quick model/context switches without leaving the terminal.
- **Platform Parity:** Windows arm64 support, improved copy/paste across terminals (Linux Konsole, Windows CMD), and consistent cross-platform image pasting remain recurring requests.
- **Session Management:** Requests for archived session viewing on desktop and better session history navigation.
- **Enterprise Features:** MDM support, configurable editors in "Open in" menus, and permission granularity improvements.
- **Safety & Control:** Enhanced plan mode restrictions, undo capabilities for input messages (Ctrl+Z behavior), and more granular permission prompts.

---

## Developer Pain Points

- **Model Compatibility Fragility:** Frequent breaking changes with model providers (Opus 4.6 prefill, Kimi 2.5 reasoning cutoff, Sonnet via GitHub integration) cause unreliable experiences.
- **Terminal Rendering Issues:** TUI freezes in tmux, unresponsive terminals, and rendering bugs across different terminal emulators (Konsole, Windows Terminal) frustrate daily users.
- **Subagent Reliability:** Main agent hangs when subagents complete improperly, breaking autonomous workflows and requiring session restarts.
- **Copy/Paste Cross-Platform Inconsistency:** Linux's dual buffer system, Windows CMD limitations, and image paste failures across terminals create friction.
- **Permission Mode Trust:** Plan mode executing bash commands without confirmation undermines confidence in safety controls.
- **Process Leaks:** MCP server process accumulation over time degrades system performance for long-running sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-27

## 1. Today's Highlights
The community is actively testing the **v0.13.1-preview.0** release, which addresses critical extension installation issues and CLI memory display bugs. There is a strong surge in contributions around **Hooks and Channels**, with new PRs introducing Telegram/WeChat integration and comprehensive lifecycle documentation. However, friction remains high regarding **Windows permissions** and **context window management**, as users report persistent re-prompting and inefficient token usage.

## 2. Releases
### **v0.13.1-preview.0**
This preview release focuses on stability improvements for extensions and the CLI.
- **Extension Installation:** Added support for non-GitHub git URLs ([PR #2539](https://github.com/QwenLM/qwen-code/pull/2539)).
- **CLI Memory:** Fixed `/memory show` to correctly display all configured context files for both `--project` and `--global` scopes ([PR #23](https://github.com/QwenLM/qwen-code/pull/23)).

*(Note: v0.13.0-nightly.20260326 contains the same fixes for the nightly channel.)*

## 3. Hot Issues
1.  **[Windows] Permission Persistence Failure** ([#2669](https://github.com/QwenLM/qwen-code/issues/2669)): Users on Windows 11 CMD report that "Always allow" permissions fail to persist, causing endless re-prompts for execution rights. A fix is already proposed in [PR #2670](https://github.com/QwenLM/qwen-code/pull/2670).
2.  **Context Window Bloat** ([#2685](https://github.com/QwenLM/qwen-code/issues/2685)): A simple "Hello" consumes 20% of the context window in new sessions, suggesting a fallback issue is loading excessive default context.
3.  **ACP Initialization Failure in Zed** ([#2671](https://github.com/QwenLM/qwen-code/issues/2671)): Users integrating with the Zed editor via ACP mode are seeing "Failed to initialize OpenAI logger" errors due to path resolution issues (fixed in [PR #2675](https://github.com/QwenLM/qwen-code/pull/2675)).
4.  **Tool Calling "Amnesia"** ([#2686](https://github.com/QwenLM/qwen-code/issues/2686)): The model frequently forgets parameters (e.g., `old_string` vs `new_string`) during tool calls, requiring multiple retries.
5.  **Ripgrep Incompatibility on ARM64** ([#2676](https://github.com/QwenLM/qwen-code/issues/2676)): The bundled ripgrep fails on systems with 64K page sizes (e.g.,鲲鹏920), causing startup crashes.
6.  **VS Code UI Freezing** ([#2678](https://github.com/QwenLM/qwen-code/issues/2678)): In long conversations, new user messages fail to render, and the "Stop" button becomes unresponsive.
7.  **Git Bash Shell Switching** ([#2537](https://github.com/QwenLM/qwen-code/issues/2537)): Running the CLI from Git Bash on Windows unexpectedly switches the context to PowerShell.
8.  **Mixed-Language Filename Handling** ([#2688](https://github.com/QwenLM/qwen-code/issues/2688)): The model inconsistently adds spaces between Chinese and English characters in filenames, breaking file paths.
9.  **Request for Hooks System** ([#2677](https://github.com/QwenLM/qwen-code/issues/2677)): Users are requesting a robust Hooks system for workflow automation, similar to other leading AI coding tools.
10. **LSP Configuration Ignored** ([#1873](https://github.com/QwenLM/qwen-code/issues/1873)): The experimental LSP support ignores `.lsp.json` configurations, causing "No symbols found" errors in C/C++ files.

## 4. Key PR Progress
1.  **[feat] Channels Support** ([PR #2628](https://github.com/QwenLM/qwen-code/pull/2628)): Major feature addition enabling bot interactions via **Telegram, WeChat, and DingTalk** using the ACP protocol.
2.  **[fix] Windows Permission Persistence** ([PR #2670](https://github.com/QwenLM/qwen-code/pull/2670)): Fixes case-sensitivity logic causing permission rules to fail on Windows file systems.
3.  **[feat] Hooks Documentation & UI** ([PR #2679](https://github.com/QwenLM/qwen-code/pull/2679), [PR #2602](https://github.com/QwenLM/qwen-code/pull/2602)): Introduces comprehensive documentation and a refactored management UI for the new Hooks system.
4.  **[fix] ACP Logger Path** ([PR #2675](https://github.com/QwenLM/qwen-code/pull/2675)): Resolves the `ENOENT` error in ACP mode by correctly resolving the log directory using the config working directory.
5.  **[fix] Subagent Diff Stuck State** ([PR #2631](https://github.com/QwenLM/qwen-code/pull/2631)): Fixes a bug where VS Code diff tabs triggered by subagents remained stuck waiting for confirmation even after user action.
6.  **[fix] PTY Race Conditions** ([PR #2611](https://github.com/QwenLM/qwen-code/pull/2611)): Gracefully handles `EIO`/`EBADF` errors to prevent app crashes during shell process termination.
7.  **[fix] Shell Detection for Git Bash** ([PR #2645](https://github.com/QwenLM/qwen-code/pull/2645)): Ensures Qwen Code respects the Git Bash environment on Windows instead of defaulting to PowerShell/CMD.
8.  **[feat] Enhanced /review Command** ([PR #2687](https://github.com/QwenLM/qwen-code/pull/2687)): Upgrades the review skill with false positive control, verification steps, and PR inline comment integration.
9.  **[feat] VS Code ACP Auto-Reconnect** ([PR #2666](https://github.com/QwenLM/qwen-code/pull/2666)): Adds retry logic and auto-reconnect capabilities to the VS Code extension to handle ACP connection drops.
10. **[fix] External Editor Arguments** ([PR #2683](https://github.com/QwenLM/qwen-code/pull/2683)): Fixes the `EDITOR` env var parsing to support commands with arguments (e.g., `code --wait`).

## 5. Feature Request Trends
-   **Social & Bot Integration:** High interest in using Qwen Code as a backend for chatbots, evidenced by the "Channels" PR and requests for platform integrations.
-   **CI/CD Ecosystem Integration:** Users are requesting templates for non-GitHub CI/CD systems, specifically **Alibaba Cloud Yunxiao** (Issue #2649).
-   **Advanced Automation (Hooks):** There is a clear demand for a scriptable event lifecycle (Hooks) to integrate Qwen Code into larger development workflows.
-   **Multimodal CLI Inputs:** Users want the ability to paste images/files directly from the clipboard in Windows CMD (Issue #2605).

## 6. Developer Pain Points
-   **Windows Compatibility:** The majority of high-traffic issues involve Windows-specific bugs, particularly around **permission persistence**, **shell switching**, and **file path handling**.
-   **Context Management:** Developers are frustrated by inefficient context usage (the "20% for Hello" issue) and the model "forgetting" tool parameters mid-call.
-   **UI Responsiveness:** Critical UI failures, such as chat messages not rendering and the inability to stop ongoing processes, are forcing users to restart the IDE frequently.
-   **Configuration Complexity:** Setting up advanced features like MCP (Model Context Protocol) and LSP servers remains difficult, with users struggling to get configurations recognized.

</details>