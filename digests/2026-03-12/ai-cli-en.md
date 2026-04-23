# AI CLI Tools Community Digest 2026-03-12

> Generated: 2026-03-12 15:28 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Report — 2026-03-12

## 1. Ecosystem Overview

The AI CLI ecosystem is rapidly maturing from simple command-line wrappers into sophisticated agent orchestration platforms. Today's activity reveals a clear industry-wide transition: tools are pivoting from model inference quality to **agentic reliability, context window management, and security boundaries**. Windows platform stability remains a universal weak point across all vendors, while "Agent Teams" and multi-model architectures are emerging as the next competitive frontier. Enterprise features—sandboxes, permission systems, and auditability—are now table stakes rather than differentiators.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Primary Focus |
|------|--------------|-----------|----------------|---------------|
| **Claude Code** | 50 | 8 | v2.1.74 (2 releases) | Context optimization, security plugins, Windows fixes |
| **OpenAI Codex** | ~25 | 10 | Alpha rapid-iteration (v0.115.0-alpha.11) | Desktop app stability, context compaction, Python SDK |
| **Gemini CLI** | 10 | 10 | None (v0.34.0-preview patching) | Agents V1.0 architecture, parallel tool scheduling |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.5-0 (experimental) | UI/UX polish, terminal compatibility, embedding retrieval |
| **Kimi Code CLI** | 7 | 10 | v1.21.0 | Steering input, Linux header compatibility, Web UI |
| **OpenCode** | 10 | 10 | None | Background tasks (`/btw`), memory/performance, plugins |
| **Qwen Code** | 10 | 10 | v0.12.2 | Windows stability, DeepSeek compatibility, VS Code parity |

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Evidence |
|-----------|----------------|----------|
| **Windows as Second-Class Citizen** | Claude Code, OpenAI Codex, Qwen Code, Kimi Code | Permission loops (Claude #11380), PowerShell/sandbox failures (Codex #13917, #10601), OAuth flickering (Qwen #2315), header incompatibility (Kimi #1384) |
| **Context Window & Memory Management** | Claude Code, OpenAI Codex, OpenCode | Context optimization commands (Claude v2.1.74), auto-compaction amnesia (Codex #14447), memory leaks (OpenCode #3013) |
| **Agent Teams / Sub-Agent Architecture** | Claude Code, Gemini CLI, OpenAI Codex | Per-teammate model config (Claude #32110), SubAgent class proposal (Gemini #3132), nested tool dispatch (Codex PR #14437) |
| **Security Sandboxing & Permissions** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI | Hook-integrity-guard plugin (Claude PR #33390), `.codexignore` requests (Codex #2847), sandbox mode requests (Copilot #892), extension integrity verification (Gemini PR #21772) |
| **Background/Async Operations** | Kimi Code CLI, OpenCode | Steering input mid-turn (Kimi v1.21.0), `/btw` background command (OpenCode PR #17198) |
| **MCP (Model Context Protocol) Integration** | Claude Code, GitHub Copilot CLI, OpenCode, Qwen Code | Plugin MCP access (Claude #21560), MCP embedding retrieval (Copilot v1.0.5-0), remote MCP requests (OpenCode #3875), MCP OAuth UX (Qwen PR #2327) |
| **Transparent Thinking/Reasoning** | Claude Code, GitHub Copilot CLI | "Always show thinking" feature request (Claude #8477, 153 👍), reasoning effort CLI flags (Copilot #1048) |

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
|------|-----------------|-------------|-------------------|
| **Claude Code** | Enterprise security, extensibility, context governance | Enterprise devs, security-conscious teams | Plugin ecosystem with safety constraints, model overrides for Bedrock/enterprise LLMs |
| **OpenAI Codex** | Desktop-first experience, rapid iteration | Mainstream developers, VS Code migrants | Rust-based core, heavy investment in desktop GUI, Python SDK for programmatic access |
| **Gemini CLI** | Agent orchestration, parallelism | Advanced AI engineers, multi-agent builders | Model-driven tool scheduling, SubAgent recursive delegation architecture |
| **GitHub Copilot CLI** | IDE integration, workflow continuity | GitHub ecosystem users | Native VS Code parity, adaptive UI for diverse terminals, embedding-based context |
| **Kimi Code CLI** | Real-time interactivity | Power users needing mid-stream control | Steering input for live agent guidance, Web UI companion for visualization |
| **OpenCode** | Open extensibility, performance | Open-source contributors, plugin developers | Plugin SDK with auth/routing hooks, community-driven feature velocity |
| **Qwen Code** | Model flexibility, IDE companion | Users of alternative models (DeepSeek, etc.) | Multi-provider API adapters, VS Code extension with tab completion |

---

## 5. Community Momentum & Maturity

### High Velocity / Rapid Iteration
- **Claude Code**: 2 releases in one day, 50 issues processed, strong enterprise plugin ecosystem growth. Most mature issue triage.
- **Kimi Code CLI**: 10 PRs merged, same-day response to input bugs. Fastest turnaround on user-reported issues.
- **OpenCode**: Community-driven `/btw` feature proposed and implemented within 24 hours. Strong open-source momentum.

### Steady Progress / Strategic Bets
- **Gemini CLI**: Deep architectural work on Agents V1.0. Lower issue volume suggests focused, planned development rather than reactive patching.
- **OpenAI Codex**: Alpha rapid-fire releases (7 alphas in 24h), but Desktop App regressions suggest growing pains with GUI expansion.

### Early Stage / Catching Up
- **GitHub Copilot CLI**: Zero PRs updated today despite active issue discussion (72 👍 on workflow disruption). Community frustration evident.
- **Qwen Code**: Addressing fundamental Windows bugs. VS Code extension feature gaps (Plan Mode) indicate earlier maturity stage.

---

## 6. Trend Signals

| Signal | Implication |
|--------|-------------|
| **Windows is the #1 adoption blocker** | 6 of 7 tools report critical Windows-specific bugs. Enterprises should prioritize Mac/Linux for AI CLI rollouts or demand vendor SLAs for Windows support. |
| **Context compaction is an unsolved problem** | Users across Codex, Claude, and OpenCode report "amnesia" in long sessions. Tool selection should evaluate context retention strategies, not just model quality. |
| **Security plugins are becoming a category** | Claude's `hook-integrity-guard` (CVE-2025-59536) and Codex's `.codexignore` requests signal demand for guardrails that prevent AI self-modification and data leakage. |
| **Agent Teams are the next battleground** | Per-agent model config, sub-agent delegation, and parallel tool scheduling indicate multi-agent workflows will differentiate tools in 2026. |
| **Steering/Interruption is emerging** | Kimi's "steering input" feature addresses a universal pain point—users want to correct agents mid-turn, not wait for completion. Expect rapid adoption across competitors. |
| **MCP is becoming standard infrastructure** | All tools now support or are integrating MCP. Plugin ecosystems will increasingly define switching costs. |
| **Desktop GUIs introduce new instability** | OpenAI Codex Desktop and Kimi Web UI both show connectivity/regression issues. CLI remains the stable interface for production workflows. |

---

**Bottom Line for Decision-Makers:** For enterprise adoption, **Claude Code** leads in security/plugin maturity; **Gemini CLI** is the choice for multi-agent architectures; **OpenAI Codex** offers the best desktop experience but with current stability trade-offs. All tools require Windows validation before deployment. The competitive differentiator in 2026 is shifting from model quality to **agentic reliability and context governance**.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `github.com/anthropics/skills` | **Snapshot Date:** 2026-03-12

---

## 1. Top Skills Ranking

Based on repository activity, discussion volume, and community engagement:

| Rank | Skill | PR | Author | Status | Summary |
|------|-------|-----|--------|--------|---------|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | @PGTBoos | OPEN | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses ubiquitous quality issues users rarely explicitly request. |
| 2 | **skill-quality-analyzer / skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | @eovidiu | OPEN | Meta-skills for marketplace: evaluates Skills across 5 dimensions (structure, documentation, security) and provides comprehensive quality scoring. |
| 3 | **frontend-design (improved)** | [#210](https://github.com/anthropics/skills/pull/210) | @justinwetch | OPEN | Revised frontend-design skill for improved clarity, actionability, and single-conversation executability. |
| 4 | **system-documentation-flowcharts** | [#95](https://github.com/anthropics/skills/pull/95) | @TylerALofall | OPEN | Complete evidence management system documentation: architecture, workflows, component topology. |
| 5 | **shodh-memory** | [#154](https://github.com/anthropics/skills/pull/154) | @varun29ankuS | OPEN | Persistent memory system for AI agents—maintains context across conversations via `proactive_context` calls. |
| 6 | **codebase-inventory-audit** | [#147](https://github.com/anthropics/skills/pull/147) | @p19dixon | OPEN | 10-step workflow for codebase cleanup: identifies orphaned code, unused files, documentation gaps, produces `CODEBASE-STATUS.md`. |
| 7 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | @GitHubNewbie0 | OPEN | ISO-standard OpenDocument support: create, template-fill, and parse ODT to HTML. LibreOffice/Google Docs compatible. |
| 8 | **AURELION skill suite** | [#444](https://github.com/anthropics/skills/pull/444) | @Chase-Key | OPEN | Cognitive+memory framework: kernel (5-floor structured thinking), advisor, agent, memory modules for professional knowledge management. |

---

## 2. Community Demand Trends

Distilled from high-engagement Issues:

| Trend | Issue | Insight |
|-------|-------|---------|
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) | Strong demand for AI agent governance patterns: policy enforcement, threat detection, trust scoring, audit trails. Currently absent from Skills collection. |
| **Persistent Memory/Context** | [#154](https://github.com/anthropics/skills/pull/154), [#521](https://github.com/anthropics/skills/pull/521) | Multiple independent PRs addressing session-to-session context loss—Claude Code's most painful limitation. |
| **Meta-Skills for Quality** | [#202](https://github.com/anthropics/skills/issues/202), [#83](https://github.com/anthropics/skills/pull/83) | Community wants Skills that improve Skills: quality analysis, security auditing, best-practice enforcement. |
| **Google Workspace Integration** | [#299](https://github.com/anthropics/skills/pull/299) | Email triage, calendar, tasks via GOG CLI—personal assistant workflows. |
| **Telegram/Remote Control** | [#419](https://github.com/anthropics/skills/pull/419) | Mobile bridge for Claude Code session control. |
| **Enterprise Document Formats** | [#486](https://github.com/anthropics/skills/pull/486), [#514](https://github.com/anthropics/skills/pull/514) | Professional output quality: typography, ODT, ISO-standard formats. |
| **SAP/Enterprise Data Analytics** | [#181](https://github.com/anthropics/skills/pull/181) | SAP-RPT-1-OSS for predictive analytics on SAP business data. |

---

## 3. High-Potential Pending Skills

Open PRs with active discussion and strong utility (likely to merge):

| Skill | PR | Why It Matters |
|-------|-----|----------------|
| **record-knowledge** | [#521](https://github.com/anthropics/skills/pull/521) | Tags: session persistence, team knowledge. Saves workarounds to `.claude/knowledge/entries/` for cross-session/team reuse. |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | Closes #452. Single most impactful community health improvement—currently repo scores 25% on GitHub metrics. |
| **feature-dev fix** | [#363](https://github.com/anthropics/skills/pull/363) | Critical bug fix: TodoWrite overwrite causes Quality Review and Summary phases to be skipped. |
| **masonry-generate-image-video** | [#335](https://github.com/anthropics/skills/pull/335) | Imagen 3.0/Veo 3.1 integration—media generation via Masonry CLI. |
| **skill-creator frontmatter fix** | [#36](https://github.com/anthropics/skills/pull/36) | Fixes YAML validation errors blocking skill creation. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent cross-session memory and context retention**, evidenced by multiple independent PRs (shodh-memory #154, record-knowledge #521, AURELION #444) all solving Claude Code's inability to maintain context between sessions.

---

**Critical Issues to Watch:**
- **Security:** [#492](https://github.com/anthropics/skills/issues/492) — Community skills under `anthropic/` namespace enable trust boundary abuse
- **API Stability:** [#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 0% skill trigger rate; [#389](https://github.com/anthropics/skills/issues/389) — OPUS 4.5 Skills API instability
- **Duplicate Skills:** [#189](https://github.com/anthropics/skills/issues/189) — `document-skills` and `example-skills` install identical content

---

# Claude Code Community Digest — 2026-03-12

## Today's Highlights

Two back-to-back releases landed today: **v2.1.74** brings actionable context optimization suggestions and a configurable auto-memory directory, while **v2.1.73** adds `modelOverrides` for custom provider mappings (e.g., Bedrock ARNs) and improved SSL error guidance for corporate proxy users. On the community front, Windows permission loops remain the top pain point with 57 comments, and a new security plugin PR aims to prevent Claude from modifying its own safety constraints.

---

## Releases

### [v2.1.74](https://github.com/anthropics/claude-code/releases/tag/v2.1.74)
- **`/context` command upgrade**: Now provides actionable suggestions—identifies context-heavy tools, memory bloat, and capacity warnings with specific optimization tips
- **New `autoMemoryDirectory` setting**: Configure a custom directory for auto-memory storage
- **Bug fix**: Resolved memory leak in stream handling

### [v2.1.73](https://github.com/anthropics/claude-code/releases/tag/v2.1.73)
- **New `modelOverrides` setting**: Map model picker entries to custom provider model IDs (useful for Bedrock inference profile ARNs)
- **Improved OAuth/SSL error handling**: Actionable guidance when login or connectivity checks fail due to SSL certificate errors (addresses corporate proxy scenarios, `NODE_EXTRA_CA_CERTS`)

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#11380](https://github.com/anthropics/claude-code/issues/11380) — **Windows permission loop** (57 comments, 60 👍) | Long-standing bug where Claude repeatedly asks for permission despite "always allow" selection. Most upvoted active issue—critical for Windows adoption. |
| 2 | [#18170](https://github.com/anthropics/claude-code/issues/18170) — **Terminal copy/paste formatting** (50 comments, 93 👍) | Copies include unwanted indentation and trailing spaces matching prompt alignment. High-impact UX issue for daily users. |
| 3 | [#29579](https://github.com/anthropics/claude-code/issues/29579) — **Rate limit confusion with Claude Max** (39 comments) | Users with Claude Max subscriptions hit rate limits despite low reported usage. Indicates billing/quota tracking disconnect. |
| 4 | [#8477](https://github.com/anthropics/claude-code/issues/8477) — **Always show thinking** (31 comments, 153 👍) | Most-upvoted feature request: option to display Claude's extended thinking output since v2.0.0. Strong community demand for transparency. |
| 5 | [#13301](https://github.com/anthropics/claude-code/issues/13301) — **PyCharm connection failure** (13 comments) | Claude Code unable to connect via dedicated plugin or PyCharm terminals. Blocks JetBrains ecosystem users. |
| 6 | [#21317](https://github.com/anthropics/claude-code/issues/21317) — **Duplicate tool_use IDs** (11 comments) | API Error 400 with `--print --output-format json` mode. Blocks CI/CD automation workflows. |
| 7 | [#32110](https://github.com/anthropics/claude-code/issues/32110) — **Per-teammate model config for Agent Teams** (7 comments) | No way to assign different models to individual teammates—they inherit the lead's model. Limits cost/latency optimization in multi-agent setups. |
| 8 | [#21560](https://github.com/anthropics/claude-code/issues/21560) — **Plugin subagents can't access MCP tools** (5 comments, 5 👍) | Plugin-defined subagents cannot use MCP tools from their own `.mcp.json`. Breaks plugin ecosystem extensibility. |
| 9 | [#26744](https://github.com/anthropics/claude-code/issues/26744) — **Third-party plugins don't auto-update** (5 comments) | Only official marketplace plugins auto-update on session start. Creates maintenance burden for community plugin users. |
| 10 | [#29329](https://github.com/anthropics/claude-code/issues/29329) — **Sandbox TMPDIR mismatch** (2 comments, 3 👍) | Sandbox sets `TMPDIR=/tmp/claude` but actual writable path is `/tmp/claude-$UID`. Breaks tools relying on `TMPDIR`. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#33472](https://github.com/anthropics/claude-code/pull/33472) — **Inline comment permission fix** [CLOSED] | Passes `confirmed=true` when posting inline comments to prevent subagents from posting test/probe comments on customer PRs after GraphQL permission errors. |
| 2 | [#33390](https://github.com/anthropics/claude-code/pull/33390) — **Hook-integrity-guard security plugin** [OPEN] | Prevents Claude from modifying its own hooks, settings, and safety infrastructure. Addresses a class of vulnerabilities where the model weakens enforcement constraints. Mitigates CVE-2025-59536. |
| 3 | [#30636](https://github.com/anthropics/claude-code/pull/30636) — **Documentation URL migration** [OPEN] | Updates 25+ stale URLs to new canonical domains (`code.claude.com/docs/en/*`, `platform.claude.com/docs/en/*`). |
| 4 | [#33443](https://github.com/anthropics/claude-code/pull/33443) — **Dockerfile native installer** [OPEN] | Updates `.devcontainer/Dockerfile` to Node 24.14 and switches from deprecated `npm install` to native installer. |
| 5 | [#33397](https://github.com/anthropics/claude-code/pull/33397) — **Code-review permission reduction** [OPEN] | Reduces hundreds of permission prompts in code-review plugin by preventing unnecessary `cd /path && ...` prefixes that trigger compound command security checks. |
| 6 | [#33312](https://github.com/anthropics/claude-code/pull/33312) — **Ralph-loop bash injection fix** [OPEN] | Escapes special characters in ARGUMENTS to prevent bash injection when prompts contain backticks. |
| 7 | [#33234](https://github.com/anthropics/claude-code/pull/33234) — **Commit-commands initial commit fix** [OPEN] | Handles repos with no commits yet—`git diff HEAD` falls back to `git diff --cached`. |
| 8 | [#33351](https://github.com/anthropics/claude-code/pull/33351) — **False-positive update banner docs** [OPEN] | Documents workaround (`DISABLE_AUTOUPDATER=1`) for false-positive "Update available" banners on Homebrew/WinGet installs. |
| 9 | [#31035](https://github.com/anthropics/claude-code/issues/31035) — **Env var documentation request** [CLOSED] | Feature: centralized reference page for all Claude Code environment variables. Currently scattered across changelogs. |
| 10 | [#31056](https://github.com/anthropics/claude-code/issues/31056) — **Symlinked .claude discovery** [CLOSED] | Bug: custom subagents not discovered when `.claude` is a symlink. Affects monorepo setups sharing config across projects. |

---

## Feature Request Trends

1. **Thinking/transparency controls** — Option to always display Claude's thinking output (#8477, 153 👍)
2. **Per-agent model configuration** — Different models for different agent teammates (#32110) or phases like plan vs. implement (#31086)
3. **Permission UX improvements** — Consistent yes/no numbering (#30791), equivalent command treatment (#32452), reduced prompts overall
4. **Terminal/IDE polish** — Better copy/paste without formatting artifacts (#18170), full-width input background (#31052)
5. **Plugin ecosystem maturity** — MCP tool access for plugin subagents (#21560), third-party plugin auto-updates (#26744), hiding built-in integrations (#31042)

---

## Developer Pain Points

| Category | Summary |
|----------|---------|
| **Windows reliability** | Permission loops (#11380), bash command assumptions (#24019), path encoding issues (#27321, #33650)—Windows remains a second-class citizen |
| **Authentication fatigue** | Frequent re-login required (#32698), OAuth hangs (#30166), SSL/proxy friction in corporate environments |
| **Agent Teams limitations** | No per-teammate model config, env vars not inherited in tmux panes (#30754), symlink discovery failures |
| **Sandbox inconsistencies** | TMPDIR path mismatch (#29329), `CLAUDE_CODE_TMPDIR` sometimes ignored (#33303) |
| **Rate limit opacity** | Users hit limits despite low reported usage (#29579, #31090)—unclear how quotas are calculated or displayed |

---

*Digest generated from 50 issues and 8 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
A significant portion of today's activity focuses on the **Codex Desktop App**, with users reporting critical connectivity regressions and persistent Windows sandbox instability. On the CLI front, developers are actively discussing context window management, specifically the loss of reasoning history during auto-compaction. Meanwhile, the core team merged several quality-of-life improvements, including better tool dispatching and fixes for specific Unicode handling bugs.

## 2. Releases
The following Rust crate updates were released in the last 24 hours:
*   **rust-v0.115.0-alpha.11** (and alphas 4-9)
*   **rust-v0.114.0-alpha.7**
*   *Note:* These appear to be rapid iteration alpha releases for the upcoming `v0.115.0` stable candidate, likely testing internal refactoring and stability improvements ahead of a wider rollout.

## 3. Hot Issues

1.  **[Desktop] macOS Intel Support Request** [#10410](https://github.com/openai/codex/issues/10410)
    Users on Intel-based Macs (x86_64) are still waiting for official support or a Universal build for the Desktop App. With 151 upvotes, this remains a top-requested feature, leaving a significant portion of the user base unable to run the new desktop client.

2.  **[Enhancement] Sensitive File Exclusion (`.codexignore`)** [#2847](https://github.com/openai/codex/issues/2847)
    With 250 upvotes, this is the most backed enhancement request. Users are asking for a mechanism (like a `.codexignore` file) to explicitly block the agent from reading or sending sensitive files (e.g., `.env`) to the model, balancing utility with security.

3.  **[Desktop] Remote Development Support** [#10450](https://github.com/openai/codex/issues/10450)
    Highly upvoted (321 👍), this request asks for the Desktop App to support remote development (SSH/WSL), similar to VS Code Remote. Currently, the desktop app is limited to local environments, hindering workflows that rely on remote servers.

4.  **[Bug] Reconnecting Issues in Desktop App** [#14209](https://github.com/openai/codex/issues/14209)
    A recent regression is causing severe connection instability for European users. Reports indicate the app constantly attempts to reconnect, making it unusable for some.

5.  **[Bug] Context Loss After Auto-Compaction** [#14447](https://github.com/openai/codex/issues/14447)
    Users report that the context window remains nearly full even after auto-compaction, leading to degraded performance. Related issue [#14347](https://github.com/openai/codex/issues/14347) suggests the compaction prompt focuses too heavily on recent history, causing the model to "forget" decisions made earlier in long sessions.

6.  **[Bug] Codex Replies to Old Messages** [#8648](https://github.com/openai/codex/issues/8648)
    A puzzling bug where the AI responds to earlier messages in the thread rather than the latest user prompt. This behavior has been observed in both the App and CLI, affecting workflow reliability.

7.  **[Desktop] Thread Refresh Loop** [#14406](https://github.com/openai/codex/issues/14406)
    A regression in the latest Desktop App build (v26.309) causes threads to spam refresh, rendering the UI unusable with a persistent red error box.

8.  **[Windows] PowerShell Host Failure** [#13917](https://github.com/openai/codex/issues/13917)
    Windows users are encountering a session error (8009001d) preventing the Desktop App from starting a PowerShell host, effectively blocking usage on affected machines.

9.  **[CLI] Linux ARM64 Binary Segfault** [#14474](https://github.com/openai/codex/issues/14474)
    The bundled `codex-linux-arm64` (musl) binary is crashing with a segfault (exit 139) on devices like Raspberry Pi, blocking CLI usage on popular ARM platforms.

10. **[Windows] Sandbox Setup Failures** [#10601](https://github.com/openai/codex/issues/10601)
    Windows continues to face sandbox stability issues, with multiple reports of setup errors and permissions failures (e.g., `0xc0000022`) when attempting to enable sandbox mode.

## 4. Key PR Progress

1.  **Python SDK Public API & Examples** [#14446](https://github.com/openai/codex/pull/14446)
    A major addition introducing a public Python SDK layer with sync/async APIs, examples, and documentation, making it easier for developers to build on top of Codex programmatically.

2.  **Refactor: Tool Dispatch in Code Mode** [#14437](https://github.com/openai/codex/pull/14437)
    Refactors how tools are dispatched when code mode isn't directly awaited. It introduces a dedicated queue for nested tool calls, improving stability and simplifying the request/response plumbing.

3.  **Fix: `js_repl` Hangs on Unicode** [#14421](https://github.com/openai/codex/pull/14421)
    Fixes a specific bug where dynamic tool responses containing Unicode line separators (U+2028/U+2029) caused the tool to hang. The fix switches to byte-oriented JSONL framing.

4.  **Keyring Storage Split for Auth Tokens** [#13191](https://github.com/openai/codex/pull/13191)
    Addresses Windows Credential Manager size limits by splitting auth token storage. This prevents login failures caused by large OAuth tokens.

5.  **Smart Approvals for App & TUI** [#13860](https://github.com/openai/codex/pull/13860)
    Adds "Smart Approvals" logic to the app-server and TUI, allowing for more granular auto-approval policies (manual-only vs. auto-only) layered on top of existing modes.

6.  **Standardize Context Fragment Handling** [#13465](https://github.com/openai/codex/pull/13465)
    Unifies how context is injected into the model via `ModelVisibleContextFragment` and `ModelVisibleContextRole`, creating a cleaner separation between developer and user context.

7.  **Fix: Preserve ZSH Fork Semantics in Unified Exec** [#13644](https://github.com/openai/codex/pull/13644)
    Ensures that `zsh-fork` sessions routed through unified-exec handle file descriptors correctly, preventing escalation failures during long-lived PTY sessions.

8.  **Feat: Add Plugin Read Endpoint** [#14445](https://github.com/openai/codex/pull/14445)
    Adds functionality to return more detailed information for a specific plugin, likely in service of improved UI/management features.

9.  **Fix: Apply_patch Permissions** [#14429](https://github.com/openai/codex/pull/14429)
    Ensures that permissions granted via `request_permissions` are correctly passed to `apply_patch`, stopping the model from reverting to shell commands after approval.

10. **Fix: Legacy Linux Sandbox Flag** [#14473](https://github.com/openai/codex/pull/14473)
    Restores support for the `use_linux_sandbox_bwrap` flag as a no-op to prevent parsing errors for users with older configuration files.

## 5. Feature Request Trends

*   **Platform Parity for Desktop App:** There is intense demand for the Desktop App to match VS Code's capabilities, specifically regarding **Remote Development** (SSH/Containers) and support for **macOS Intel** chips.
*   **Security & Context Control:** Developers want more authority over what the AI sees. The push for a `.codexignore` mechanism and better context compaction strategies (retaining logic while dropping verbosity) are dominant themes.
*   **Model Availability:** Users are frequently requesting access to the latest models (GPT-5.4) across all interface layers (App, CLI, Extension) without authentication friction.

## 6. Developer Pain Points

*   **Windows Stability:** The Windows platform continues to be a source of friction, specifically regarding the sandbox environment. Errors related to PowerShell hosting, WSL integration, and permission inheritance are frequent.
*   **Context "Amnesia":** Users are frustrated by the AI losing track of the "big picture" during long sessions. The current compaction strategy appears to aggressively trim context, forcing users to re-explain project requirements frequently.
*   **Connectivity Regressions:** The Desktop App's reliability is currently questioned by users experiencing "reconnecting loops" and login method conflicts (Plus vs. API Key).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
Development activity remains high with a strong focus on architectural refactoring for **Agents V1.0** and significant improvements to the **Parallel Tool Scheduler**. The community is actively addressing stability issues, evidenced by new patches for the `v0.34.0` preview branch and critical fixes for race conditions in memory tools. Additionally, cross-platform support is expanding with new PRs enabling terminal notifications for Linux and Windows.

## 2. Releases
No new stable releases were published in the last 24 hours. However, internal patching is underway for the `v0.34.0-preview` branch.

## 3. Hot Issues

1.  **[OPEN] Post V1.0 Agent Architecture (#3132)**
    *   **Why it matters:** This is the central roadmap for the next major evolution of Gemini CLI. It proposes a `SubAgent` class for reusable LLM-driven tool orchestration, allowing iterative problem-solving.
    *   **Community Reaction:** High engagement (40 comments, 50 thumbs up) indicates strong developer interest in agent capabilities.
    *   **Link:** [Issue #3132](https://github.com/google-gemini/gemini-cli/issues/3132)

2.  **[OPEN] Request Stuck After Cancellation (#21096)**
    *   **Why it matters:** A P1 bug where the CLI hangs with "This is taking a bit longer..." after a user cancels a request, specifically noted on Android/Termux.
    *   **Community Reaction:** Frustration is building (18 comments) as interrupts are a common workflow action.
    *   **Link:** [Issue #21096](https://github.com/google-gemini/gemini-cli/issues/21096)

3.  **[OPEN] Multi-Arch Docker Support (#3717)**
    *   **Why it matters:** The current build process limits sandbox compatibility to specific CPU architectures.
    *   **Community Reaction:** While tagged "Stale," it was recently updated, suggesting renewed priority for native performance across diverse hardware.
    *   **Link:** [Issue #3717](https://github.com/google-gemini/gemini-cli/issues/3717)

4.  **[OPEN] Screenshot Context Understanding (#4493)**
    *   **Why it matters:** A feature request to allow the CLI to natively capture and analyze screenshots for debugging.
    *   **Community Reaction:** Consistently popular (10 comments) as it bridges the gap between terminal and GUI context.
    *   **Link:** [Issue #4493](https://github.com/google-gemini/gemini-cli/issues/4493)

5.  **[OPEN] App Freeze on Auth (#20129)**
    *   **Why it matters:** Critical P1 stability issue where the application freezes immediately after authentication, forcing a shell restart.
    *   **Link:** [Issue #20129](https://github.com/google-gemini/gemini-cli/issues/20129)

6.  **[OPEN] Native Selection in Alternate Buffer Mode (#13033)**
    *   **Why it matters:** UX improvement to allow text selection without toggling modes (Ctrl-S), streamlining copy-paste workflows in the TUI.
    *   **Link:** [Issue #13033](https://github.com/google-gemini/gemini-cli/issues/13033)

7.  **[OPEN] Internationalization (i18n) Support (#6525)**
    *   **Why it matters:** Proposal to integrate `react-i18next` to broaden accessibility for non-English speaking developers.
    *   **Link:** [Issue #6525](https://github.com/google-gemini/gemini-cli/issues/6525)

8.  **[OPEN] Suppress Verbose JSON Output (#14569)**
    *   **Why it matters:** Large JSON returns from tools flood the UI, making the agent's actual response hard to read.
    *   **Community Reaction:** Users are asking for better UI hygiene regarding tool artifacts.
    *   **Link:** [Issue #14569](https://github.com/google-gemini/gemini-cli/issues/14569)

9.  **[CLOSED] Policy Ignored in `exit_plan_mode` (#21806)**
    *   **Why it matters:** A logic flaw where scheduler policy "allow" decisions skipped necessary execution payloads. This was recently closed, likely addressing the bug.
    *   **Link:** [Issue #21806](https://github.com/google-gemini/gemini-cli/issues/21806)

10. **[OPEN] Screen Reader Repetition on Windows (#15014)**
    *   **Why it matters:** Accessibility bug where the entire CLI text is re-read from the start on state updates, making the tool unusable for visually impaired users on Windows.
    *   **Link:** [Issue #15014](https://github.com/google-gemini/gemini-cli/issues/15014)

## 4. Key PR Progress

1.  **Model-Driven Parallel Tool Scheduler (#21933)**
    *   Introduces `wait_for_previous` parameter to tool schemas, shifting concurrency control from hardcoded logic to explicit model intent for better parallelism.
    *   **Link:** [PR #21933](https://github.com/google-gemini/gemini-cli/pull/21933)

2.  **Fix TOCTOU Race Condition in MemoryTool (#20752)**
    *   Addresses a critical "Time-of-Check to Time-of-Use" vulnerability where the tool read `GEMINI.md` too early, leading to potential data loss.
    *   **Link:** [PR #20752](https://github.com/google-gemini/gemini-cli/pull/20752)

3.  **Cross-Platform Terminal Notifications (#22173)**
    *   Removes macOS-only guards, enabling the terminal bell notification system for Linux and Windows.
    *   **Link:** [PR #22173](https://github.com/google-gemini/gemini-cli/pull/22173)

4.  **Fix `exit_plan_mode` Policy Handling (#21802)**
    *   Ensures that `approvalPayload` is correctly generated even when user policies skip confirmation dialogs.
    *   **Link:** [PR #21802](https://github.com/google-gemini/gemini-cli/pull/21802)

5.  **Webfetch Tool Stage 1 Improvements (#21313)**
    *   Hardens the `web_fetch` tool with isolated rate limiting and improved SSRF security protection.
    *   **Link:** [PR #21313](https://github.com/google-gemini/gemini-cli/pull/21313)

6.  **Concurrent Safe Slash Commands (#21988)**
    *   Allows specific "safe" slash commands to execute immediately while the agent is busy, improving UI responsiveness.
    *   **Link:** [PR #21988](https://github.com/google-gemini/gemini-cli/pull/21988)

7.  **Voice Input with Pluggable Backend (#18499)**
    *   Adds native voice input support using Gemini (zero-install) or local Whisper as transcription backends.
    *   **Link:** [PR #18499](https://github.com/google-gemini/gemini-cli/pull/18499)

8.  **Cherry-Pick for v0.34.0-preview.1 (#22174)**
    *   Automated cherry-pick attempt with detected merge conflicts, indicating active patch management for the preview release.
    *   **Link:** [PR #22174](https://github.com/google-gemini/gemini-cli/pull/22174)

9.  **Extension Integrity Verification (#21772)**
    *   Implements cryptographic verification for extension updates to enhance supply chain security.
    *   **Link:** [PR #21772](https://github.com/google-gemini/gemini-cli/pull/21772)

10. **Fix Base64 Sanitization in Sandboxes (#20148)**
    *   Resolves a bug where `sanitizeEnvVar` silently corrupted identity tokens containing standard Base64 characters (`+`, `=`).
    *   **Link:** [PR #20148](https://github.com/google-gemini/gemini-cli/pull/20148)

## 5. Feature Request Trends
*   **Advanced Agent Orchestration:** Significant momentum behind the "SubAgent" pattern, requesting tools that can iteratively solve problems and delegate tasks recursively (#3132, #15179).
*   **Enhanced Context Awareness:** Users want the CLI to "see" more than just text, with requests for screenshot/snipping tools (#4493) and cohesive image support (#5316).
*   **Terminal UX Mastery:** A push for "flicker-free" rendering and seamless toggling between alternate and regular buffer modes (#14427, #10673) to create a smoother IDE-like experience.

## 6. Developer Pain Points
*   **Interrupt Handling:** Users report frequent hangs when canceling requests (#21096), suggesting the event loop or promise cancellation logic needs hardening.
*   **Verbose UI Pollution:** The CLI output is easily cluttered with raw JSON from tools, obscuring the agent's reasoning (#14569). Developers need better summarization or folding of tool outputs.
*   **Platform Gaps:** Specific bugs in Termux/Android (#21096) and Windows accessibility (#15014) indicate that non-macOS platforms still face stability and usability gaps.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
The GitHub Copilot CLI team has pushed significant updates with **v1.0.4** and **v1.0.5-0**, introducing a new adaptive color engine, syntax highlighting for 17 languages in `/diff`, and experimental embedding-based retrieval for MCP. Community engagement remains high regarding workflow disruptions (Issue #53), while new bug reports focus on UI flickering, terminal compatibility (Nix/direnv, Tmux, Neovim), and keyboard layout issues on international keyboards.

## 2. Releases

### **v1.0.5-0** (Latest Experimental)
*   **New Features:**
    *   `/version` command added to display version and check for updates interactively.
    *   Experimental embedding-based dynamic retrieval for MCP and skill instructions.
    *   Syntax highlighting in `/diff` views (supports 17 languages).
    *   Added `preCompact` hook.

### **v1.0.4** (Stable)
*   **New Features:**
    *   **Shell RPC Methods:** Added `session.shell.exec` and `session.shell.kill` for executing commands with streaming output.
    *   **Adaptive UI:** Introduced an adaptive color engine with dynamic modes and an interactive theme picker (graceful degradation for limited terminals).
    *   **Plugin Support:** Fixed loading of custom agents from `--plugin-dir` in ACP mode.
*   **Changes:**
    *   Replaced `/pr open` with `/pr view [local|web]`.

## 3. Hot Issues

1.  **[OPEN] Bring back the GitHub Copilot in the CLI commands to not break workflows** ([#53](https://github.com/github/copilot-cli/issues/53))
    *   **Why it matters:** With 72 upvotes and 30 comments, this is the most active issue. Users are frustrated by workflow disruptions. The community has begun creating forks like `shell-ai` to restore previous behaviors.
2.  **[OPEN] UI Bug: Copilot CLI output flickers/stutters constantly during text stream response** ([#1599](https://github.com/github/copilot-cli/issues/1599))
    *   **Why it matters:** Affects the core user experience. Users report a harsh visual "trembling" effect during streaming, making real-time reading difficult.
3.  **[OPEN] Allow reasoning effort to be set through the CLI** ([#1048](https://github.com/github/copilot-cli/issues/1048))
    *   **Why it matters:** High demand (30 upvotes). Users want to pair model selection (e.g., `gpt-5.2`) with reasoning effort settings (e.g., `--reasoning-effort high`) directly in the command line invocation, not just interactive mode.
4.  **[OPEN] Option to disable MCP Servers per default** ([#768](https://github.com/github/copilot-cli/issues/768))
    *   **Why it matters:** As MCP usage grows, users want granular control to disable servers by default to conserve tokens/costs, only enabling them on demand.
5.  **[OPEN] Cannot paste image from screenshot tools into CLI terminal** ([#1241](https://github.com/github/copilot-cli/issues/1241))
    *   **Why it matters:** Breaks multimodal workflows. Specifically affects Windows PowerShell users trying to paste from Snipping Tool/SnagIt.
6.  **[OPEN] Bug: Copilot CLI hangs in Nix/direnv environments due to subprocess I/O deadlock** ([#1838](https://github.com/github/copilot-cli/issues/1838))
    *   **Why it matters:** Critical compatibility issue for developers using Nix flakes. The CLI hangs indefinitely due to bash tool timeouts.
7.  **[OPEN] Add sandbox mode to restrict Copilot CLI file access** ([#892](https://github.com/github/copilot-cli/issues/892))
    *   **Why it matters:** Security focused. Users want to constrain the agent's filesystem permissions to a specific working directory to prevent accidental modifications outside the workspace.
8.  **[CLOSED] Sudden influx of "CAPIError: 400 The requested model is not supported"** ([#1941](https://github.com/github/copilot-cli/issues/1941))
    *   **Why it matters:** A recent spike in model support errors affecting agent progress. Users are unclear on the root cause, though the issue was recently closed.
9.  **[OPEN] Feature Request: User Level Hooks** ([#1067](https://github.com/github/copilot-cli/issues/1067))
    *   **Why it matters:** Users are requesting the ability to set hooks at the user level rather than project level to persist their automation across different repositories.
10. **[OPEN] Cannot enter @ on German keyboard (Alt-Gr + q)** ([#1999](https://github.com/github/copilot-cli/issues/1999))
    *   **Why it matters:** Regression affecting international keyboards (specifically German layout), making the CLI unusable for mentioning agents/files using `@`.

## 4. Key PR Progress
*   *No Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends
*   **Configuration Persistence:** Strong trend toward persisting user preferences across sessions. Examples include persisting model selection (e.g., `gpt-5-mini` in #1869) and reasoning effort levels (#1048).
*   **Security & Isolation:** Increased demand for "Guardrails" – specifically sandbox modes to restrict file system access (#892) and tool whitelists for interactive mode to avoid manual approval of read-only operations (#1973).
*   **BYOK (Bring Your Own Key):** Users want to integrate third-party models like Grok 4.1 via API keys to leverage larger context windows not natively supported (#1095).
*   **UI/UX Control:** Requests for more control over the interface, including disabling the new "alt-screen" views (#1799) and better scrolling support in Tmux environments (#1842).

## 6. Developer Pain Points
*   **Terminal Compatibility:** A significant number of recent issues highlight friction with specific terminal environments, particularly **Windows/PowerShell** (screenshot pasting), **Nix/direnv** (deadlocks), **Tmux** (scrolling issues), and **Neovim** (output repeating in `:terminal`).
*   **Visual Stability:** The new streaming UI is causing motion sickness/distraction for some users due to flickering/stuttering text (#1599).
*   **Access Control & Budgeting:** Confusion regarding premium request usage. Users see "0% remaining" or even negative percentages (-0.9%) without visibility into organizational overage costs (#1881, #1977).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest (2026-03-12)

## 1. Today's Highlights
**Version 1.21.0** has been released, introducing **Steering Input** (real-time guidance for running agents) and significant enhancements to the **Platform Setup** experience with API key verification. The community and core team are heavily focused on stability, submitting multiple patches to fix HTTP header inconsistencies across different Linux distributions and resolve Web UI rendering issues.

## 2. Releases

### **v1.21.0** (Latest)
*   **Steering Input:** Added the ability to send follow-up guidance to an agent *while* it is thinking/processing, rather than waiting for the turn to complete.
*   **Setup Enhancements:** Improved platform login with API key verification and setup summaries.
*   **Visualization:** Added "Open Dir" and "Copy DIR" actions to the session page, with Windows support for `open-in`.
*   **Context Persistence:** System prompts are now persisted in `context.jsonl` for better session restoration.
*   **Web Fixes:** Resolved stale `@` file mentions and WebSocket instability.

### **v1.20.0**
*   **Bug Fixes:** Addressed `@` file mention index staleness and API errors caused by media parts in compaction.

## 3. Hot Issues

1.  **[#1413] [Bug] Terminal `AskUserQuestion` Input Failure** (Closed)
    *   **Why:** Users on v1.20.0 couldn't input content into the last option of the `AskUserQuestion` tool.
    *   **Status:** Quickly addressed by maintainers.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1413)

2.  **[#1420] [Bug] Web Inline Formula Rendering** (Open)
    *   **Why:** A report that inline formulas (LaTeX) fail to render in the Web UI on Linux.
    *   **Context:** Impacts readability for math-heavy code or documentation discussions.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1420)

3.  **[#1409] [Bug] Web Mode Refresh Loop** (Open)
    *   **Why:** Users experienced constant refreshing and port switching in `/web` mode due to rapid WebSocket connect/close cycles.
    *   **Impact:** Renders the web interface unusable for some macOS users.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1409)

4.  **[#1383] [Bug] Multi-Agent Rate Limiting** (Open)
    *   **Why:** Users with membership rights supporting "multiple agents" hit rate limits when running two agents ("crayfish") simultaneously.
    *   **Context:** Clarification needed on concurrent execution limits vs. licensing.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1383)

5.  **[#1227] [Bug] LLM Provider Connection Error** (Closed)
    *   **Why:** Persistent connection errors on Linux (`h11` rejection) traced back to HTTP header formatting.
    *   **Resolution:** Solved by recent PRs stripping whitespace/newlines from headers.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1227)

6.  **[#1414] [Enhancement] "YOLO Mode" Toggle** (Open)
    *   **Why:** User requests a button in permission dialogs to switch directly to "YOLO" (auto-confirm) mode to speed up workflows.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1414)

7.  **[#1412] [Enhancement] API Key Login Support** (Closed)
    *   **Why:** Users wanted to log in directly using a `kimi-code` API key rather than OAuth.
    *   **Outcome:** Implemented in v1.21.0 setup enhancements.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1412)

## 4. Key PR Progress

1.  **[#1422] feat(shell): Support steering running agent turns**
    *   The flagship feature of v1.21.0. Allows users to intervene or guide the agent mid-process.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1422)

2.  **[#1415] feat(setup): Enhance platform setup with API key verification**
    *   Improves the first-run experience by verifying keys immediately and preventing configuration errors.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1415)

3.  **[#1419] fix(web): Stabilize WebSocket connect**
    *   Fixes the "reconnection storm" (Issue #1409) by optimizing how callbacks are captured during connection.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1419)

4.  **[#1384] fix: Sanitize HTTP header newline**
    *   Critical fix for Ubuntu users where `platform.version()` includes trailing newlines, causing connection errors.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1384)

5.  **[#1410] fix: Strip HTTP-unsafe characters from header values**
    *   Fixes connection failures on Linux kernels where version strings start with `#`.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1410)

6.  **[#1421] fix(tools): Treat dismissed questions as errors**
    *   Fixes a logic bug where dismissing a prompt caused the LLM to assume permission rather than waiting.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1421)

7.  **[#1417] feat(context): Persist system prompt in context.jsonl**
    *   Improves debugging and session replay by freezing the system prompt in the context file.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1417)

8.  **[#1411] fix(ui): Correct usage bar color logic**
    *   Corrects a UI bug where high usage was displayed in green and low usage in red.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1411)

9.  **[#1416] feat(vis): Add session dir actions and Windows open-in support**
    *   Enhances the visualization server with better file system interaction and Windows compatibility.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1416)

10. **[#1236] feat(http): Enable trust_env in aiohttp**
    *   Long-standing PR to support proxy environments via system environment variables.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1236)

## 5. Feature Request Trends
*   **Workflow Automation:** Users want fewer interruptions, specifically requesting an easy toggle for "YOLO mode" (auto-accept all actions) directly from permission prompts ([#1414](https://github.com/MoonshotAI/kimi-cli/issues/1414)).
*   **Flexible Authentication:** Strong demand for API Key based login as an alternative to interactive OAuth flows ([#1412](https://github.com/MoonshotAI/kimi-cli/issues/1412)).
*   **Parallelism:** Users are pushing the limits of concurrent agents and requesting clearer definitions of rate limits regarding "multi-agent" capabilities ([#1383](https://github.com/MoonshotAI/kimi-cli/issues/1383)).

## 6. Developer Pain Points
*   **Linux Header Incompatibility:** A major theme across recent PRs and Issues is the fragility of HTTP headers on various Linux distributions (Ubuntu/HWE). `platform.version()` returning trailing spaces, newlines, or `#` symbols is causing `httpx`/`h11` to crash connections. This is being actively patched via sanitization PRs ([#1384](https://github.com/MoonshotAI/kimi-cli/pull/1384), [#1410](https://github.com/MoonshotAI/kimi-cli/pull/1410)).
*   **Web UI Stability:** The Websocket implementation in the `/web` mode is prone to "reconnection storms," making the UI unstable for some users.
*   **UI Input Quirks:** Specific input fields in the terminal UI (specifically the last option in `AskUserQuestion`) are missing input focus or handlers, leading to user frustration.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-12

## 1. Today's Highlights

No new releases dropped today, but the community was highly active on the development front. A major new `/btw` command for background task management was proposed and quickly implemented via PR, signaling rapid iteration on workflow UX. On the issue tracker, performance remains a central theme, with memory leaks and conversation latency sparking significant discussion. Plugin ecosystem growth also accelerated, with new contributions for academic research tools and authentication gateways.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1.  **[#11112 - "Preparing write..." Hang](https://github.com/anomalyco/opencode/issues/11112)**
    *   **Why it matters:** A critical workflow blocker where the AI gets stuck in a loop preparing to write, forcing users to abort.
    *   **Reaction:** High engagement (40 comments); users are actively sharing logs and workarounds, but a definitive fix is still pending.

2.  **[#6918 - qwen3-coder Fails to Call Edit Tool](https://github.com/anomalyco/opencode/issues/6918)**
    *   **Why it matters:** Affects users leveraging the popular `qwen3-coder` model via OpenRouter, rendering the edit tool unusable.
    *   **Reaction:** 36 comments confirm this is a widespread issue with argument validation for the edit tool.

3.  **[#3013 - Excessive Memory Usage](https://github.com/anomalyco/opencode/issues/3013)**
    *   **Why it matters:** Severe memory bloat during long sessions causes the application to freeze or crash.
    *   **Reaction:** 29 comments indicate this is a top priority for performance optimization.

4.  **[#16351 - TUI Broken in tmux (Root Cause Found)](https://github.com/anomalyco/opencode/issues/16351)**
    *   **Why it matters:** Breaks the workflow for developers relying on `tmux`, causing rendering glitches and input failures.
    *   **Reaction:** Community member identified the regression in v1.2.17, helping narrow down the fix.

5.  **[#9045 - Codex Model Latency](https://github.com/anomalyco/opencode/issues/9045)**
    *   **Why it matters:** Response times degrade significantly as conversation history grows.
    *   **Reaction:** 24 comments discussing the trade-offs between full context sending and latency.

6.  **[#5474 - `/undo` Does Not Revert File Changes](https://github.com/anomalyco/opencode/issues/5474)**
    *   **Why it matters:** Breaks user trust in the undo feature; rolling back the chat message while leaving code changes intact causes confusion.
    *   **Reaction:** Viewed as a critical logic bug in state management.

7.  **[#17188 - Default Sharing Privacy Concerns](https://github.com/anomalyco/opencode/issues/17188)**
    *   **Why it matters:** Raises security questions about data uploading behavior being enabled by default.
    *   **Reaction:** Sparks a necessary debate on "privacy by design" principles.

8.  **[#7982 - Security Issue with Share Function](https://github.com/anomalyco/opencode/issues/7982)**
    *   **Why it matters:** Users are concerned about session data being uploaded without explicit consent.
    *   **Reaction:** Calls for clearer warnings and granular control over data sharing.

9.  **[#10119 - VSCode Extension Data Provider Error](https://github.com/anomalyco/opencode/issues/10119)**
    *   **Why it matters:** Renders the official VSCode extension unusable for some installations.
    *   **Reaction:** Users are confused by the "no data provider" error message.

10. **[#15092 - Minimax M2.5 Experience Issues](https://github.com/anomalyco/opencode/issues/15092)**
    *   **Why it matters:** Poor integration with the Minimax M2.5 model results in permanent stalls.
    *   **Reaction:** Specific to model compatibility, highlighting integration challenges.

---

## 4. Key PR Progress

1.  **[#17198 - feat: add /btw background session command](https://github.com/anomalyco/opencode/pull/17198)**
    *   Implements a requested feature to run lightweight background tasks or append todos without interrupting the main agent flow.

2.  **[#17186 - feat: session load perf](https://github.com/anomalyco/opencode/pull/17186)**
    *   Targets performance improvements specifically for loading sessions, addressing latency complaints.

3.  **[#16706 - feat(core): expose workspace adaptor and VCS branch hooks](https://github.com/anomalyco/opencode/pull/16706)**
    *   Significant extension to the plugin system, allowing deeper integration with version control systems.

4.  **[#16889 - feat(app): better themes](https://github.com/anomalyco/opencode/pull/16889)**
    *   Revamps the theming system (likely tied to PR #17192 for `cinder-jade` theme) to improve UI customization.

5.  **[#17033 - fix(app): fix slow workspace creation](https://github.com/anomalyco/opencode/pull/17033)**
    *   Addresses a UX bottleneck where creating a workspace in large repos took 12-15+ seconds.

6.  **[#17163 - docs: add opencode-papersflow plugin](https://github.com/anomalyco/opencode/pull/17163)**
    *   Expands the ecosystem by documenting a plugin for academic research tools via MCP.

7.  **[#16941 - feat(plugin): add getAuth and route to SDK](https://github.com/anomalyco/opencode/pull/16941)**
    *   Empowers plugins to handle authentication and HTTP routes, essential for building provider-specific integrations.

8.  **[#13854 - fix(tui): stop streaming markdown after message completes](https://github.com/anomalyco/opencode/pull/13854)**
    *   Fixes a UI glitch where finished messages were still treated as streaming, causing rendering artifacts.

9.  **[#17182 - refactor(provider): flow branded ProviderID/ModelID](https://github.com/anomalyco/opencode/pull/17182)**
    *   A code quality improvement replacing raw strings with static branded types to reduce model/provider handling bugs.

10. **[#16455 - docs: clarify subagent session navigation keybinds](https://github.com/anomalyco/opencode/pull/16455)**
    *   Corrects documentation to match actual keybind behavior, closing the gap between user expectation and reality.

---

## 5. Feature Request Trends

*   **Background & Asynchronous Operations:** Strong demand for non-blocking interactions, specifically the `/btw` command to run background queries.
*   **Official VSCode Extension:** Continued calls for a first-party, native VSCode experience ([#11176](https://github.com/anomalyco/opencode/issues/11176)).
*   **Remote MCP Support:** Users want better integration with remote services like Figma ([#3875](https://github.com/anomalyco/opencode/issues/3875)).
*   **Configuration Debugging:** Requests for CLI tools like `config resolve` and `doctor` to help debug complex setups ([#17164](https://github.com/anomalyco/opencode/issues/17164)).
*   **Platform Integrations:** Feature requests for Azure DevOps ([#2297](https://github.com/anomalyco/opencode/issues/2297)) and JetBrains improvements.

---

## 6. Developer Pain Points

*   **Performance Overhead:** Memory leaks ([#3013](https://github.com/anomalyco/opencode/issues/3013)) and slowdowns in large sessions remain the top complaint.
*   **Tool & Model Reliability:** Frequent errors with tool calling (e.g., edit tools failing on specific models like qwen3-coder) disrupt workflows.
*   **State Consistency:** The `/undo` bug ([#5474](https://github.com/anomalyco/opencode/issues/5474)) highlights frustration with state management not matching user mental models.
*   **Privacy Defaults:** Concerns regarding default data sharing settings ([#17188](https://github.com/anomalyco/opencode/issues/17188)) suggest a need for more transparent security defaults.
*   **TUI/Platform Quirks:** Terminal rendering issues in `tmux` and VSCode integrated terminals affect daily usage for power users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
Version **v0.12.2** was released today, focusing on stability improvements for the `export` command and updates to code ownership. Simultaneously, the development team and community are aggressively addressing platform stability, with significant PRs merged to fix **Windows PowerShell UI flickering** during OAuth and **DeepSeek API compatibility** issues. Activity is high in the VS Code extension ecosystem, with new features landing for tab completion and path validation.

## 2. Releases

### **v0.12.2** (Stable)
*   **Bug Fix:** The `export` command now correctly uses the current session ID instead of potentially loading the last session ([PR #2268](https://github.com/QwenLM/qwen-code/pull/2268)).
*   **Maintenance:** Added `@yiliang114` as the code owner for `vscode-ide-companion` and `webui` packages to streamline reviews ([PR #2312](https://github.com/QwenLM/qwen-code/pull/2312)).

### **v0.12.2-preview.0** & **Nightly Builds**
*   Includes the same session export fixes as the stable release.

---

## 3. Hot Issues

1.  **[#2101 Space Button Input Failure](https://github.com/QwenLM/qwen-code/issues/2101)**
    *   **Why:** A critical usability blocker where users cannot type spaces in the input field (v0.11.1).
    *   **Reaction:** 10 comments confirm reproducibility; users are forced to paste text from external editors.

2.  **[#2261 `write_file` Tool Fails on Windows x64](https://github.com/QwenLM/qwen-code/issues/2261)**
    *   **Why:** The tool accepts commands without error but fails to create files on Windows.
    *   **Reaction:** 8 comments confirm this is a specific environment issue breaking file operations.

3.  **[#2191 DashScope API 429 Throttling](https://github.com/QwenLM/qwen-code/issues/2191)**
    *   **Why:** Persistent `429 Too Many Requests` errors during web searches for 3+ days.
    *   **Reaction:** Users are experiencing service degradation in search functionalities.

4.  **[#1870 VS Code Sidebar Flexibility](https://github.com/QwenLM/qwen-code/issues/1870)**
    *   **Why:** Users cannot move the Qwen Chat panel to the secondary sidebar.
    *   **Reaction:** Limits workspace customization; a highly requested UX improvement.

5.  **[#1985 Plan Mode in VSCode Companion](https://github.com/QwenLM/qwen-code/issues/1985)**
    *   **Why:** The VSCode extension lacks the "Plan Mode" cycle available in the CLI.
    *   **Reaction:** Users want feature parity between the CLI and IDE extensions.

6.  **[#2325 Enhanced @ Mentions in VS Code](https://github.com/QwenLM/qwen-code/issues/2325)**
    *   **Why:** Feature request to support folder mentions and fuzzy search.
    *   **Reaction:** Highlights the need for better context management in the IDE.

7.  **[#2279 VS Code 0.12.0 Connection Spin](https://github.com/QwenLM/qwen-code/issues/2279)**
    *   **Why:** The extension gets stuck on "Preparing Qwen Code..." and loses the input line.
    *   **Reaction:** Connectivity regression affecting the latest IDE companion version.

8.  **[#2201 Read Tool Looping](https://github.com/QwenLM/qwen-code/issues/2201)**
    *   **Why:** The agent gets stuck reading the first 100-300 lines of a file repeatedly.
    *   **Reaction:** Wastes tokens and time; requires manual mediation.

9.  **[#2306 Crash on Permission Execution](https://github.com/QwenLM/qwen-code/issues/2306)**
    *   **Why:** Application crashes to terminal when selecting "Always Allow" for command execution in v0.12.0.
    *   **Reaction:** Critical regression in the permission workflow.

10. **[#2293 TAB Key Behavior in VS Code](https://github.com/QwenLM/qwen-code/issues/2293))**
    *   **Why:** TAB key shifts focus instead of autocompleting slash commands.
    *   **Reaction:** Breaks standard IDE workflow expectations (Resolved in PR #2308).

---

## 4. Key PR Progress

1.  **[PR #2315 & #2311] Fix OAuth UI Flickering (Merged)**
    *   Removed QR code rendering from the OAuth UI to prevent severe screen flickering on Windows 11 PowerShell.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2315)

2.  **[PR #2320] DeepSeek API Compatibility (Merged)**
    *   Fixes `400 Bad Request` errors by converting array content to strings for the DeepSeek provider.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2320)

3.  **[PR #2308] Tab Completion for VS Code (Merged)**
    *   Adds Tab key support to the completion menu, allowing users to select commands easily.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2308)

4.  **[PR #2324] LS Tool Truncation (Merged)**
    *   Adds output limits to the `LS` (list directory) tool to prevent context overflow in large directories.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2324)

5.  **[PR #2326] Auto-Retry Error Cleanup (Merged)**
    *   Ensures stale error messages are cleared immediately after an auto-retry succeeds.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2326)

6.  **[PR #2000] Parallel Tool Execution (Open)**
    *   Refactors tool execution to run independent calls in parallel using `Promise.allSettled` for performance gains.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2000)

7.  **[PR #2322] IDE Connection Optimization (Open)**
    *   Fixes connection failures in specific VSCode/Cursor clients (Codespaces/Code-server).
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2322)

8.  **[PR #2328] Export Metadata & Stats (Open)**
    *   Enriches HTML exports with session info, token usage, and file operation statistics.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2328)

9.  **[PR #1912] Agent Collaboration Arena (Open)**
    *   Introduces a mode to run tasks across multiple AI models in parallel for comparison.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/1912)

10. **[PR #2327] MCP OAuth UX Improvements (Open)**
    *   Improves the MCP auth flow with post-auth feedback, i18n support, and navigation fixes.
    *   [Link](https://github.com/QwenLM/qwen-code/pull/2327)

---

## 5. Feature Request Trends

*   **Enhanced IDE Context Control:** Users want more granular control over context injection, specifically requesting **folder mentions** and **fuzzy search** alongside file mentions ([#2325](https://github.com/QwenLM/qwen-code/issues/2325)).
*   **Workflow Parity (CLI vs. IDE):** There is a strong demand for the VS Code extension to match CLI capabilities, specifically **Plan Mode** toggling ([#1985](https://github.com/QwenLM/qwen-code/issues/1985)) and flexible UI panel positioning ([#1870](https://github.com/QwenLM/qwen-code/issues/1870)).
*   **Chat Management:** Requests for better hygiene tools, such as the ability to **delete chat history** directly from the CLI ([#1902](https://github.com/QwenLM/qwen-code/issues/1902)).

---

## 6. Developer Pain Points

*   **Windows Stability:** The Windows ecosystem remains a primary pain point. Users report **UI flickering** (now fixed), **input handling bugs** (space bar failure), and **file operation failures** (`write_file`), indicating a need for better platform-specific CI/CD testing.
*   **API Rate Limiting & Throttling:** Users are frequently hitting `429 Too Many Requests` errors with DashScope/Web Search ([#2191](https://github.com/QwenLM/qwen-code/issues/2191)), causing workflow interruptions.
*   **Third-Party Model Compatibility:** As users swap backends to DeepSeek or others, they encounter schema validation errors (array vs. string types), highlighting a need for more robust API adaptors.

</details>