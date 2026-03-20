# AI CLI Tools Community Digest 2026-03-21

> Generated: 2026-03-20 22:02 UTC | Tools covered: 7

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
**Report Date:** 2026-03-21 | **Analyst:** Senior Technical Analyst

---

## 1. Ecosystem Overview

The AI CLI tools landscape in March 2026 shows intense competition and rapid iteration across seven major platforms. All tools are converging on agentic capabilities—autonomous code execution, multi-step task orchestration, and IDE integration—while differentiating through sandboxing approaches, permission models, and ecosystem extensibility. A clear industry-wide tension exists between **security hardening** (sandbox improvements, permission controls) and **developer velocity** (reduced friction, automation workflows). Platform stability, particularly on Windows and Linux sandbox environments, remains a critical differentiator as these tools move from early adopters to enterprise deployment.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases | Top Issue Engagement |
|------|-------------|-----------|----------|---------------------|
| **Claude Code** | 50 | 16 | v2.1.80 | 537 comments (phone verification) |
| **OpenAI Codex** | High* | 10+ | 4 (alpha/maintenance) | 153 comments (token burn) |
| **Gemini CLI** | 10+ | 10+ | None | P0 security vulnerability |
| **GitHub Copilot CLI** | 10+ | 0 | v1.0.10 | 106 👍 (OAuth for MCP) |
| **Kimi Code CLI** | 20 | 38 | None | 5 👍 (MCP resilience) |
| **OpenCode** | 50 | 20 | None | 202 comments (quota misattribution) |
| **Qwen Code** | 10+ | 10+ | v0.13.0-preview | Critical data loss reports |

*\*Codex issue volume inferred from activity patterns*

**Key Observation:** Kimi Code CLI shows the highest PR-to-issue ratio (38 PRs / 20 issues), indicating aggressive community-driven development. Claude Code and OpenCode lead in discussion volume, reflecting larger user bases with more complex enterprise use cases.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Requirements |
|-----------|---------------|----------------------|
| **Permission Granularity & Persistence** | Claude Code, Gemini CLI, Kimi CLI, Qwen Code | "Always allow" persistence, context-aware permissions (plan vs. execute mode), skip-without-abort options |
| **Windows Platform Parity** | Claude Code, Codex, Kimi CLI, OpenCode | Console flashing fixes, PowerShell compatibility, file locking resolution, UTF-8 encoding |
| **MCP/Integration Resilience** | Claude Code, Codex, Kimi CLI, Copilot CLI | Graceful degradation when MCP servers fail, OAuth support for remote MCPs, connector sync reliability |
| **Agent Hooks & Lifecycle Events** | Claude Code, Codex, Gemini CLI, OpenCode | `PreToolUse`/`PostToolUse` hooks, session start triggers, security policy injection points |
| **Token/Quota Visibility** | Claude Code, Codex, OpenCode | Rate limit statusline display, premium quota tracking, cost attribution accuracy |
| **Remote Development Support** | Codex, OpenCode, Copilot CLI | SSH/containers, WSL backends, Codespaces compatibility |
| **Plan/Execute Mode Separation** | Gemini CLI, Qwen Code, Copilot CLI | Read-only planning phase, model switching post-confirmation, safety guarantees |
| **Local Model Support** | Qwen Code, OpenCode | LM Studio, Ollama integration, OpenAI-compatible local endpoints |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach | Key Differentiator |
|------|--------------|-------------|-------------------|-------------------|
| **Claude Code** | Enterprise automation, plugin ecosystem | Professional developers, enterprises | Extensible hook system, 7+ security plugins in active development | Most mature plugin architecture; connector marketplace |
| **OpenAI Codex** | Code mode architecture, sandbox security | VS Code users, API customers | V8 runtime isolation, bubblewrap sandboxing, Rust-based CLI | Deepest IDE integration; aggressive sandbox hardening |
| **Gemini CLI** | Spec-driven development, browser automation | Research/technical users | Plan mode separation, layered prompt DSL, Browser Agent | Strongest planning workflow; telemetry optimization focus |
| **GitHub Copilot CLI** | Terminal-native assistance, remote workflows | GitHub ecosystem users | Native terminal integration, Codespaces optimization | Best GitHub/enterprise SSO integration; stable release cadence |
| **Kimi Code CLI** | Cross-platform stability, rapid community fixes | Emerging market developers | Defensive coding, Unicode handling, configurable shells | Fastest community merge velocity; Windows-first fixes |
| **OpenCode** | Multi-provider support, cost transparency | Power users, multi-model workflows | AI SDK v6, provider-agnostic architecture | Broadest model provider support; quota visibility focus |
| **Qwen Code** | Local-first, Chinese language support | Local inference users, CJK developers | LM Studio/Ollama native, CJK tokenization handling | Best local model support; multi-language path handling |

---

## 5. Community Momentum & Maturity

**High Momentum, High Maturity:**
- **Claude Code**: Largest discussion volume (537+ comments on top issue), active plugin marketplace, enterprise feature requests (Linear integration, multi-tenant). Clear product-market fit in professional/enterprise segment.

**High Momentum, Building Maturity:**
- **OpenAI Codex**: Strong enterprise push with remote development (404 👍), but plagued by token consumption complaints and sandbox stability across Linux distributions. V8 refactor indicates architectural investment.

**Moderate Momentum, Technical Focus:**
- **Gemini CLI**: Security-first approach with rapid vulnerability response. Spec-driven development differentiates but limits mass appeal. Memory leak fixes show operational maturity.
- **Qwen Code**: v0.13.0 preview shows active development. Critical data loss issues (#2499) indicate maturity gaps but community is responding with PRs.

**Building Momentum:**
- **Kimi Code CLI**: Highest PR velocity (38 PRs) indicates vibrant community, but lower issue engagement suggests smaller user base. Strong Windows focus fills market gap.
- **OpenCode**: Multi-provider approach attracts power users. OAuth/quota issues are growing pains of rapid feature expansion.

**Stable/Conservative:**
- **GitHub Copilot CLI**: Lowest PR activity (0 today) but stable releases. Mature product with enterprise reliability focus. OAuth/MCP requests indicate ecosystem expansion needs.

---

## 6. Trend Signals

### Critical Industry Insights

**1. The Permission Model Convergence**
All seven tools are independently arriving at similar permission architectures: persistent approvals, context-aware policies (plan vs. execute), and "skip without abort" workflows. This indicates an industry-wide recognition that binary allow/deny models are insufficient for agentic coding. *Recommendation: Teams building AI tooling should design permission systems with granular context from day one.*

**2. Windows is the New Linux**
Historically, developer tools prioritized Linux/macOS. In 2026, Windows-specific issues (console flashing, PowerShell profiles, file locking, UTF-8 encoding) appear across 5 of 7 tools. Enterprise adoption is driving Windows-first development requirements. *Recommendation: Windows CI/CD and dedicated Windows testing should be mandatory for any AI CLI targeting enterprises.*

**3. MCP is the New API**
Model Context Protocol support is transitioning from "nice-to-have" to "critical infrastructure." Issues around MCP resilience, OAuth for remote MCPs, and connector sync appear in 4 tools. The community is treating MCP servers as potentially unreliable dependencies requiring graceful degradation patterns. *Recommendation: Design MCP integrations with circuit-breaker patterns and fallback behaviors.*

**4. The "Read-Before-Write" Safety Net**
Qwen Code's data loss issues and the corresponding PR (#2554) for 3-layer read-before-write guards signal a critical safety pattern. As agents gain autonomous file modification capabilities, preventing hallucinated overwrites becomes paramount. *Recommendation: All agentic file operations should require explicit read verification before write execution.*

**5. Quota Attribution as a Trust Issue**
OpenCode's 202-comment issue on Copilot quota misattribution and Claude Code's rate limit visibility feature reflect a new requirement: developers need accurate, real-time cost/quota visibility to trust AI tools with their budgets. Opacity here creates enterprise adoption friction. *Recommendation: Cost/quota telemetry should be exposed in CLI statuslines and TUI dashboards.*

**6. Local Models are Production-Ready**
Qwen Code, OpenCode, and Gemini CLI all show active local model integration (LM Studio, Ollama). This isn't experimental—it's a response to privacy requirements, cost management, and air-gapped enterprise environments. *Recommendation: Support OpenAI-compatible local endpoints as a first-class configuration option.*

**7. Sandbox Stability is the Hidden Differentiator**
Codex's bubblewrap issues across Ubuntu 24.04, Rocky 8, and Nix; Claude Code's Windows BSOD from parallel filesystem ops—sandbox failures are the #1 cause of "tool doesn't work" reports. Tools that solve cross-platform sandboxing will win enterprise trust. *Recommendation: Invest in sandbox abstraction layers with platform-specific fallbacks.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills | **Snapshot Date:** 2026-03-21

---

## 1. Top Skills Ranking

Based on discussion activity and community engagement, here are the most notable Skills currently in the pipeline:

| Rank | Skill | Author | Status | Focus Area |
|------|-------|--------|--------|------------|
| 1 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | PGTBoos | OPEN | Document Quality |
| 2 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | eoviciu | OPEN | Meta-Skills |
| 3 | **[frontend-design](https://github.com/anthropics/skills/pull/210)** | justinwetch | OPEN | UI/UX |
| 4 | **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** | amitlals | OPEN | Enterprise/Analytics |
| 5 | **[system-documentation & flowcharts](https://github.com/anthropics/skills/pull/95)** | TylerALofall | OPEN | Documentation |
| 6 | **[CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | narenkatakam | OPEN | Repo Health |
| 7 | **[codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | p19dixon | OPEN | Code Maintenance |
| 8 | **[shodh-memory](https://github.com/anthropics/skills/pull/154)** | varun29ankuS | OPEN | AI Memory/Persistence |

**Featured Details:**

- **document-typography** (#514) — Addresses a universal pain point: typographic quality issues in AI-generated documents (orphan word wrap, widow paragraphs, numbering misalignment). High utility for professional document workflows.

- **skill-quality-analyzer & skill-security-analyzer** (#83) — Meta-skills that evaluate other Skills across 5 quality dimensions and security posture. Represents the maturing of the ecosystem toward self-improvement.

- **frontend-design** (#210) — Substantial revision to improve actionability and internal coherence. Focuses on making instructions executable within a single conversation.

- **SAP-RPT-1-OSS predictor** (#181) — Leverages SAP's open-source tabular foundation model for predictive analytics on SAP business data. Signals enterprise adoption.

- **shodh-memory** (#154) — Persistent context system for AI agents; addresses cross-conversation memory retention, a frequent community request.

---

## 2. Community Demand Trends

Analysis of Issues reveals clear demand patterns:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Security & Trust Framework** | Namespace/auth vulnerabilities, skill provenance verification | Issue #492 (trust boundary abuse), #412 (agent governance) |
| **Platform Stability** | API reliability, skill loading/persistence errors | Issues #62, #61, #406, #403, #389 |
| **MCP Integration** | Exposing Skills as MCP tools for broader interoperability | Issue #16, #369 |
| **Memory & Context Persistence** | Cross-session retention of technical context | PRs #154, #629 |
| **Enterprise Feature Parity** | SSO users lack API key access for evaluation scripts | Issue #532 |
| **Best Practices Standardization** | skill-creator modernization, CONTRIBUTING guides | Issues #202, PR #509 |

**Emerging Directions:**
- Governance/safety patterns for AI agent systems
- Cross-platform skill portability (MCP Apps)
- Quality standardization (skill-creator improvements)

---

## 3. High-Potential Pending Skills

Active PRs with strong momentum that may merge soon:

| PR | Skill | Why It Matters |
|----|-------|----------------|
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | Solves a ubiquitous document quality problem |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | Closes #452; improves repo health score from 25% |
| [#629](https://github.com/anthropics/skills/pull/629) | session-memory | Zero-dependency context preservation across compaction |
| [#535](https://github.com/anthropics/skills/pull/535) | avoid-ai-writing | Detects/removes 21 "AI-ism" patterns in generated content |
| [#362](https://github.com/anthropics/skills/pull/362) | UTF-8 validation fix | Critical for international/multi-byte character support |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | OpenDocument support (ISO standard, LibreOffice/Google Docs compatible) |
| [#384](https://github.com/anthropics/skills/pull/384) | management-consulting | Structured problem-solving, strategic frameworks |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent memory/context capabilities and robust security/trust frameworks—reflecting the shift from experimental single-session Skills to production-grade, cross-conversation agent infrastructure.**

---

# Claude Code Community Digest — 2026-03-21

---

## Today's Highlights

Claude Code v2.1.80 ships with highly requested **rate limit visibility** in statusline scripts, plus a new `source: 'settings'` plugin marketplace option for inline plugin declarations. The community is actively debating **phone verification requirements** (537+ comments) and pushing forward numerous plugin contributions including security-focused hooks and mobile development workflows. Windows users continue reporting platform-specific challenges, particularly around rate limiting and console window flashing during tool execution.

---

## Releases

### v2.1.80

- **Rate limits in statusline**: New `rate_limits` field exposes Claude.ai usage data (5-hour and 7-day windows) with `used_percentage` and `resets_at` timestamps — addresses [Issue #34074](https://github.com/anthropics/claude-code/issues/34074)
- **Inline plugin declarations**: `source: 'settings'` marketplace source allows declaring plugin entries directly in `settings.json`
- **CLI tool improvements**: Enhanced CLI tooling (release notes truncated)

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [**#34229** — Phone verification bug](https://github.com/anthropics/claude-code/issues/34229) | 537 comments, 598 👍 — the most-discussed issue this cycle. Users report being locked out due to phone verification problems, sparking debate about authentication friction. |
| 2 | [**#34413** — API Rate limit reached](https://github.com/anthropics/claude-code/issues/34413) | 27 comments — Windows users hitting rate limits unexpectedly; may be related to the new rate_limits feature in v2.1.80. |
| 3 | [**#27302** — Multiple Connector accounts](https://github.com/anthropics/claude-code/issues/27302) | 75 👍 — users want to connect multiple accounts for the same connector (e.g., different Slack workspaces) in claude.ai/code. |
| 4 | [**#12925** — Linear integration for cloud agents](https://github.com/anthropics/claude-code/issues/12925) | 77 👍 — request to assign Linear issues to Claude Code and trigger autonomous cloud agent sessions. Strong enterprise demand. |
| 5 | [**#16446** — LaTeX rendering in VS Code](https://github.com/anthropics/claude-code/issues/16446) | 39 👍 — researchers and academics need native LaTeX rendering in the VS Code extension for mathematical notation. |
| 6 | [**#33367** — Scroll position jumps during streaming](https://github.com/anthropics/claude-code/issues/33367) | 42 👍 — TUI regression causing severe UX degradation when scrolling through history while Claude streams output. |
| 7 | [**#14828** — Windows console window flashing](https://github.com/anthropics/claude-code/issues/14828) | 14 👍 — persistent Windows-only bug where tool execution causes distracting console popup windows. |
| 8 | [**#32450** — Google Drive connector not loading in VS Code](https://github.com/anthropics/claude-code/issues/32450) | Connector works in claude.ai web but fails to appear as MCP tool in VS Code extension — indicates connector sync issues. |
| 9 | [**#36503** — Channels plugin ignores inbound notifications](https://github.com/anthropics/claude-code/issues/36503) | Telegram channel plugin runs but inbound messages don't trigger Claude responses — impacts async automation workflows. |
| 10 | [**#35646** — Protected directory prompt in bypassPermissions](https://github.com/anthropics/claude-code/issues/35646) | **CLOSED** — v2.1.78 introduced a prompt that can't be overridden even with `--dangerously-skip-permissions`, forcing workarounds. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [**#36645** — bash-guard plugin](https://github.com/anthropics/claude-code/pull/36645) | Fixes chained bash commands silently bypassing tool permission allowlists — critical security fix. |
| 2 | [**#35710** — tool-mutex plugin (Windows BSOD fix)](https://github.com/anthropics/claude-code/pull/35710) | Prevents `Wof.sys` Blue Screen of Death caused by unlimited parallel filesystem operations on Windows. |
| 3 | [**#36625** — Fix Pre/PostToolUse messages](https://github.com/anthropics/claude-code/pull/36625) | Corrects hookify plugin to show block messages to Claude (not just user) via `permissionDecisionReason`. |
| 4 | [**#36279** — Agent context fields for hooks](https://github.com/anthropics/claude-code/pull/36279) | Adds fields to distinguish main agent from subagents, enabling targeted security policies. |
| 5 | [**#36433** — agent-wallet plugin](https://github.com/anthropics/claude-code/pull/36433) | Non-custodial wallet for AI agents to handle payments via x402 protocol — emerging agent economy use case. |
| 6 | [**#25631** — agent-teams-pipeline plugin](https://github.com/anthropics/claude-code/pull/25631) | Lifecycle management for Agent Teams with 7 hooks and multi-phase pipeline orchestration skill. |
| 7 | [**#23946** — destructive-command-guard plugin](https://github.com/anthropics/claude-code/pull/23946) | PreToolUse hook blocking irreversible Bash commands (mass-deletion, destructive git operations). |
| 8 | [**#36614** — git-branch-info plugin](https://github.com/anthropics/claude-code/pull/36614) | Injects git branch context (name, dirty state, ahead/behind) into sessions via SessionStart and UserPromptSubmit hooks. |
| 9 | [**#36562** — CLAUDE_CODE_GIT_BASH_PATH env var](https://github.com/anthropics/claude-code/pull/36562) | Windows support for custom Git Bash paths — addresses non-standard installation locations. |
| 10 | [**#13204** — Plugin docs optimization](https://github.com/anthropics/claude-code/pull/13204) | **CLOSED** — Reduced skill-development SKILL.md by 60% (3,196→1,298 words) for leaner context usage. |

---

## Feature Request Trends

1. **Multi-account/multi-tenant support** — Multiple connector accounts ([#27302](https://github.com/anthropics/claude-code/issues/27302)), account switching in mobile app ([#36151](https://github.com/anthropics/claude-code/issues/36151))
2. **External integrations & automation** — Linear issue assignment ([#12925](https://github.com/anthropics/claude-code/issues/12925)), channel plugins for async workflows ([#36453](https://github.com/anthropics/claude-code/issues/36453))
3. **Visibility & observability** — Rate limits in statusline (now shipped!), usage info at startup ([#36490](https://github.com/anthropics/claude-code/issues/36490)), reasoning effort level exposure ([#36805](https://github.com/anthropics/claude-code/issues/36805))
4. **TUI/UX polish** — Message queue management UI ([#36817](https://github.com/anthropics/claude-code/issues/36817)), scroll behavior fixes, `--quiet` flag for minimal output ([#9340](https://github.com/anthropics/claude-code/issues/9340))
5. **Portable/configurable setups** — Custom config directory via `CLAUDE_CONFIG_DIR` ([#25762](https://github.com/anthropics/claude-code/issues/25762))

---

## Developer Pain Points

- **Phone verification friction** — The single most-upvoted issue this cycle; authentication blocking legitimate users
- **Windows platform stability** — Rate limit errors, console flashing, BSOD from parallel filesystem ops; Windows users feel like second-class citizens
- **Connector sync issues** — MCP tools configured in claude.ai not reliably appearing in VS Code/headless sessions ([#32450](https://github.com/anthropics/claude-code/issues/32450), [#36833](https://github.com/anthropics/claude-code/issues/36833))
- **Permission system edge cases** — `bypassPermissions` not honored in desktop app ([#29026](https://github.com/anthropics/claude-code/issues/29026)), protected directory prompts can't be disabled
- **macOS TCC prompts** — Repeated "node would like to access data from other apps" dialogs despite permissions being granted ([#36832](https://github.com/anthropics/claude-code/issues/36832))
- **Feature flag opacity** — Features like `--channels` gated behind server-side flags not visible to users, causing confusion when features appear broken

---

*Digest generated from 50 issues and 16 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-21

---

## 1. Today's Highlights

The Codex engineering team is aggressively iterating on the **Plugins ecosystem** and **Code Mode architecture**, with significant refactoring efforts visible in today's PR activity. A major focus is on **Linux sandbox stability**, with multiple community-reported issues targeting `bubblewrap` incompatibilities on various distributions (Ubuntu 24.04, Rocky 8, Nix environments). Meanwhile, **token consumption** in the VS Code extension remains the top user complaint, continuing to dominate community discussions.

---

## 2. Releases

| Release | Version | Notes |
|---------|---------|-------|
| **rusty-v8** | `v146.4.0` | V8 engine bindings update for Rust. |
| **rust** | `0.117.0-alpha.5` | Latest alpha release in the 0.117 cycle. |
| **rust** | `0.117.0-alpha.3` | Intermediate alpha build. |
| **rust** | `0.117.0-alpha.2` | Early alpha build. |

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| **#14593** | [bug, extension, rate-limits] **Still burning tokens very fast** | **153 comments, 69 👍** — The highest-engagement issue. Users report the VS Code extension is consuming tokens at an unsustainable rate even after recent updates. Critical for cost-conscious Business/Pro users. [Link](https://github.com/openai/codex/issues/14593) |
| **#12764** | [bug, windows-os, auth, agent] **CLI 401 Unauthorized** | **82 comments** — Authentication failures with `codex-cli` persist on Windows, blocking CLI usage entirely for affected users. [Link](https://github.com/openai/codex/issues/12764) |
| **#10450** | [enhancement, app] **Remote Development Support** | **404 👍** — The most-upvoted feature request. Users want Codex Desktop App to support remote development scenarios (SSH, containers) similar to VS Code Remote. [Link](https://github.com/openai/codex/issues/10450) |
| **#8745** | [enhancement, CLI, agent] **LSP integration for Codex CLI** | **198 👍** — Proposal for built-in Language Server Protocol support with auto-detection/installation to improve code intelligence in CLI sessions. [Link](https://github.com/openai/codex/issues/8745) |
| **#14919** | [bug, sandbox, regression] **Bubblewrap fails on Ubuntu 24.04** | **25 👍** — Regression in v0.115.0 causes `bwrap: loopback: Failed RTM_NEWADDR: Operation not permitted`, breaking sandbox execution on Ubuntu 24.04. [Link](https://github.com/openai/codex/issues/14919) |
| **#13476** | [bug, mcp, sandbox] **Excessive approval prompts for Playwright MCP** | **16 👍** — Recent changes introduced approval spam when using Playwright MCP, significantly degrading UX. [Link](https://github.com/openai/codex/issues/13476) |
| **#11981** | [bug, app] **100% CPU Usage with single agent** | — Desktop App consuming excessive CPU even with minimal workload, impacting battery life and system performance. [Link](https://github.com/openai/codex/issues/11981) |
| **#10715** | [enhancement, app] **LaTeX math rendering** | **9 👍** — Feature request to add rendered LaTeX support (inline + block) to match ChatGPT's math rendering capabilities. [Link](https://github.com/openai/codex/issues/10715) |
| **#13200** | [bug, auth, mcp, CLI] **MCP login fails for Slack MCP** | **15 👍** — `codex mcp login` fails with "Dynamic client registration not supported" error for official Slack MCP integration. [Link](https://github.com/openai/codex/issues/13200) |
| **#15336** | [bug, codex-web, rate-limits] **Usage dashboard over-consuming quota** | — Reports that the Codex usage dashboard may misclassify activity and over-consume weekly quotas. [Link](https://github.com/openai/codex/issues/15336) |

---

## 4. Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| **#15276** | **Code mode on v8** | Major refactor moving Code Mode to a dedicated crate with no Codex dependencies. Encodes semantics for lifetime, mounting, and tool calling on the V8 runtime. [Link](https://github.com/openai/codex/pull/15276) |
| **#15342** | **Plugins TUI install/uninstall** | Adds install/uninstall actions to the TUI plugins menu with immediate UI refresh and post-install app setup flows. [Link](https://github.com/openai/codex/pull/15342) |
| **#15338** | **Fix: vendored bubblewrap fallback** | Addresses sandbox failures on older distros by falling back to vendored `bwrap` when system version lacks `--argv0` support. Fixes [#15283](https://github.com/openai/codex/issues/15283). [Link](https://github.com/openai/codex/pull/15338) |
| **#15258** | **MCP caching: pool MCP backends** | Implements MCP backend reuse across loaded threads via a `ThreadManager`-owned pool for `Stdio` MCP servers. [Link](https://github.com/openai/codex/pull/15258) |
| **#15344** | **Realtime transcript notification in v2** | Adds typed `thread/realtime/transcriptUpdated` notification for live transcript deltas with flat field exposure. [Link](https://github.com/openai/codex/pull/15344) |
| **#15211** | **PreToolUse hook support** | Adds bash-only `PreToolUse` hook to block shell execution before dispatch with deny-only behavior. [Link](https://github.com/openai/codex/pull/15211) |
| **#15197** | **Codex Apps sediment file remapping** | Remaps MCP file params/outputs through `sediment://{file_id}` handles with managed temp download support. [Link](https://github.com/openai/codex/pull/15197) |
| **#15255** | **Telemetry: session source** | Introduces `session_source` schema (`cli`, `vscode`, `exec`, `mcp`, `subagent_*`) and denormalizes UUID/sandbox onto all items. [Link](https://github.com/openai/codex/pull/15255) |
| **#15036** | **Disable dangerous command check when unsandboxed** | Fixes logic so `ApprovalPolicy::Never` doesn't block dangerous commands in explicitly unsandboxed modes. [Link](https://github.com/openai/codex/pull/15036) |
| **#15351** | **Support home path for CODEX** | Enables `~/...` path expansion in config deserialization for AbsolutePathBufGuard mode. [Link](https://github.com/openai/codex/pull/15351) |

---

## 5. Feature Request Trends

| Trend | Description | Key Issues |
|-------|-------------|------------|
| **Remote Development** | Strong demand for SSH/container remote support in Desktop App, matching VS Code's Remote Development capabilities. | [#10450](https://github.com/openai/codex/issues/10450) |
| **LSP Integration** | Built-in Language Server Protocol support with auto-detection for improved code intelligence in CLI. | [#8745](https://github.com/openai/codex/issues/8745) |
| **Tool Lifecycle Hooks** | Request for `PreToolUse`/`PostToolUse` hooks to observe, validate, or block tool execution. | [#14882](https://github.com/openai/codex/issues/14882) |
| **Custom Model Providers** | Support for custom model providers in the Desktop App (currently CLI-only via `/model`). | [#10867](https://github.com/openai/codex/issues/10867) |
| **LaTeX Rendering** | Math rendering support for technical/scientific documentation workflows. | [#10715](https://github.com/openai/codex/issues/10715) |
| **Drag-and-Drop Files** | Ability to attach non-image files directly in VS Code extension via drag-and-drop. | [#3761](https://github.com/openai/codex/issues/3761) |

---

## 6. Developer Pain Points

| Pain Point | Details |
|------------|---------|
| **Token Consumption** | VS Code extension users continue to report excessive token burn rates (#14593), impacting subscription costs. |
| **Linux Sandbox Instability** | Multiple sandbox-related failures across distributions: Ubuntu 24.04 (#14919), Rocky 8 (#15291), Nix environments (#15340), and general `bwrap` compatibility issues. |
| **Windows Sandbox Issues** | Persistent Windows sandbox problems including PowerShell host failures (#13917), `CreateProcessAsUserW` errors (#10090), and setup refresh failures (#14409). |
| **Authentication Failures** | 401 Unauthorized errors in CLI (#12764) and MCP login failures for third-party integrations like Slack (#13200). |
| **CPU/Performance** | Desktop App CPU spikes during diff rendering (#15330) and with minimal agent activity (#11981). |
| **Permission/Approval UX** | Excessive approval prompts in MCP workflows (#13476) and sandbox permission configuration issues (#15300). |
| **Sandbox Rule Inconsistency** | `default.rules` not being honored for sandbox-escaping commands (#15298), breaking expected security policies. |

---

*Digest generated from GitHub activity on 2026-03-21. Data source: github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-21

## 1. Today's Highlights
The Gemini CLI team is aggressively tackling stability and security this week, with a primary focus on resolving critical memory leaks in the telemetry layer and tightening the security model for the Browser Agent. Significant engineering effort is also being directed toward "Spec-Driven Development" (SDD) and agent orchestration, specifically refining `/plan` mode, memory routing, and the new "tracker" UI. There were no new releases tagged in the last 24 hours, indicating a stabilization phase following recent feature drops.

## 2. Releases
**None**
*(No new releases were tagged in the last 24 hours. The team appears to be focusing on merging foundational refactors and security patches.)*

## 3. Hot Issues
1.  **[P0] Permanent Tool Call Permissions Broken** ([#16450](https://github.com/google-gemini/gemini-cli/issues/16450))
    *   **Why it matters:** Users report that setting tools to "allow for all future requests" fails to persist, forcing repetitive manual approvals. This is a high-priority usability blocker for automation flows.
2.  **[P1] `allowedDomains` Bypass via Google Translate Proxy** ([#23224](https://github.com/google-gemini/gemini-cli/issues/23224))
    *   **Why it matters:** A security vulnerability where the Browser Agent’s domain whitelist can be circumvented using public proxies. This has triggered an immediate set of hotfix PRs.
3.  **IDE Fetch Failure (`fetchFn is not a function`)** ([#23269](https://github.com/google-gemini/gemini-cli/issues/23269))
    *   **Why it matters:** A regression breaking the IDE companion connection via SSE, caused by bundler interoperability issues with dynamic imports. Resolved quickly in [PR #23268](https://github.com/google-gemini/gemini-cli/pull/23268).
4.  **Context-Aware Persistent Policy Approvals** ([#23245](https://github.com/google-gemini/gemini-cli/issues/23245))
    *   **Why it matters:** Proposes a smarter permission model where "Always Allow" in Plan Mode doesn't leak into Execute Mode, enhancing security for sensitive workflows.
5.  **Exiting Plan Mode Fails to Switch Model** ([#23230](https://github.com/google-gemini/gemini-cli/issues/23230))
    *   **Why it matters:** Users expect the CLI to auto-switch from a planning model (e.g., Pro) to an execution model (e.g., Flash) after confirmation, but the switch currently requires manual interruption.
6.  **Agent Looping Issues** ([#22933](https://github.com/google-gemini/gemini-cli/issues/22933))
    *   **Why it matters:** Reports of the agent getting stuck in logic loops regarding session IDs and policy checks, degrading the reliability of complex autonomous tasks.
7.  **Support Passing Prompt to `/plan`** ([#22855](https://github.com/google-gemini/gemini-cli/issues/22855))
    *   **Why it matters:** A highly requested UX improvement to allow `/plan [text]` in a single command, rather than opening a separate modal/box, streamlining the planning workflow.
8.  **Refactor: Extension Manager Initialization** ([#23171](https://github.com/google-gemini/gemini-cli/issues/23171))
    *   **Why it matters:** Addresses startup inefficiencies where `loadCliConfig` is called twice, aiming to optimize boot time and extension loading reliability.
9.  **Evals Blocking PRs on 500 Errors** ([#23168](https://github.com/google-gemini/gemini-cli/issues/23168))
    *   **Why it matters:** Internal infrastructure issue where server-side 500s halt CI pipelines. The team is seeking workarounds to prevent flaky evals from blocking development.
10. **Memory Routing: Global vs. Project** ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))
    *   **Why it matters:** Defines the architecture for the agent's long-term memory, distinguishing between user-specific preferences (`~/.gemini/`) and codebase-specific context (`./gemini/`).

## 4. Key PR Progress
1.  **[Security] Prevent Proxy Bypass in Browser Agent** ([#23225](https://github.com/google-gemini/gemini-cli/pull/23225), [#23228](https://github.com/google-gemini/gemini-cli/pull/23228), [#23229](https://github.com/google-gemini/gemini-cli/pull/23229))
    *   A rapid sequence of patches addressing the `allowedDomains` bypass. Introduces query param scanning for embedded URLs, `blockedUrlPatterns` config, and system prompt hardening.
2.  **Fix Critical Memory Leak in Telemetry** ([#23281](https://github.com/google-gemini/gemini-cli/pull/23281))
    *   Patches a ~1.7GB memory leak caused by V8 closure retention in OpenTelemetry spans. Also enforces `logPrompts` privacy to prevent sensitive data exfiltration.
3.  **Prevent OOM via OpenTelemetry Truncation** ([#23302](https://github.com/google-gemini/gemini-cli/pull/23302))
    *   Complements the leak fix by truncating massive string attributes on spans, reducing heap pressure from 2.5GB+ to manageable levels.
4.  **Fix IDE Companion Fetch Error** ([#23268](https://github.com/google-gemini/gemini-cli/pull/23268))
    *   Replaces dynamic `undici` imports with static fetch imports to fix a `TypeError` crashing the IDE connection in bundled environments. **Status:** Merged/Closed.
5.  **Apply "Proceed Always" in ACP Mode** ([#23305](https://github.com/google-gemini/gemini-cli/pull/23305))
    *   Fixes a bug where "Always Allow" in IDE/ACP mode didn't persist for the session, aligning behavior with the standalone CLI.
6.  **Prompt Snippets Layered Architecture** ([#23307](https://github.com/google-gemini/gemini-cli/pull/23307))
    *   Major refactor of the prompt engineering pipeline into a type-safe, layered DSL (Core Identity -> Environment -> Features), improving maintainability.
7.  **Redesign Context Compression UI** ([#23064](https://github.com/google-gemini/gemini-cli/pull/23064))
    *   Improves UX by making context compression less intrusive. Features auto-compression on overflow with subtle "gray italic" feedback rather than modal blocking.
8.  **Fix Ctrl+D Exit Behavior** ([#23306](https://github.com/google-gemini/gemini-cli/pull/23306))
    *   Prevents the CLI from terminating immediately if the input buffer has text, requiring a double `Ctrl+D` to confirm exit (standard shell behavior).
9.  **Foundational Layout & Identity Management** ([#23286](https://github.com/google-gemini/gemini-cli/pull/23286))
    *   Architectural groundwork for "compact tool output," improving how the CLI manages history and identity states in the terminal.
10. **Add `maxActionsPerTask` for Browser Agent** ([#23216](https://github.com/google-gemini/gemini-cli/pull/23216))
    *   Introduces a safety limit (default 100) on browser actions per task to prevent runaway infinite loops during web automation.

## 5. Feature Request Trends
*   **Granular Permission Contexts:** Users and maintainers are pushing for "Context-Aware Permissions" where tool approvals differ between "Plan Mode" (read-heavy) and "Execution Mode" (write-heavy).
*   **Agent Memory & Learning:** Strong interest in persistent memory that distinguishes between global user preferences (personal conventions) and project-specific context (codebase mapping).
*   **Streamlined Planning UX:** Requests to make `/plan` accept direct text input and switch models automatically post-confirmation to reduce friction.
*   **AST-Aware Code Navigation:** Investigating tools (Tilth, Glyph) to allow the agent to read code via Abstract Syntax Trees rather than raw text, reducing token noise and improving accuracy.

## 6. Developer Pain Points
*   **Memory Consumption:** The CLI is prone to OOM crashes (up to 2.5GB heap usage) during long sessions due to unbounded telemetry attributes, though fixes are landing.
*   **Flaky Internal Evals:** The internal evaluation system is causing CI bottlenecks (500 errors blocking PRs), frustrating maintainers who need faster merge cycles.
*   **Browser Agent Security:** The flexibility of the browser agent is clashing with security needs (proxy bypasses), leading to complex mitigation logic that may restrict legitimate use cases.
*   **Repetitive Approvals:** The failure of "Permanent Tool Allowances" forces users to micromanage the agent, breaking the "flow state" required for coding.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-21

## 1. Today's Highlights
Version 1.0.10 landed yesterday with critical quality-of-life improvements, focusing heavily on terminal stability and remote workflows. Key fixes include reduced memory usage for large files and corrected arrow key functionality in terminal applications. Concurrently, the latest pre-release versions introduced experimental multi-session support and SDK enhancements for custom slash commands.

## 2. Releases

### **v1.0.10 (Stable)**
*   **Performance:** Significant reduction in memory usage when viewing large files entirely.
*   **Remote/SSH:** Fixed `/login` device flow for Codespaces/remote terminals and corrected working directory detection in `--server` mode.
*   **Usability:** Arrow keys now function correctly across terminal apps.

### **v1.0.10-1 (Pre-release)**
*   **Integrations:** `/copy` command now writes formatted HTML to the clipboard on Windows for better compatibility with Office apps (Word, Outlook, Teams).

### **v1.0.10-0 (Pre-release)**
*   **SDK:** Clients can now register custom slash commands and utilize `session.ui.elicitation` for dialogs.
*   **Experimental:** Added support for multiple concurrent sessions.
*   **CLI:** Added `--effort` as a shorthand alias for `--reasoning-effort`.

---

## 3. Hot Issues

1.  **[OPEN] OAuth Support for Remote MCP Servers (#33)**
    *   **Why it matters:** With 106 upvotes and 34 comments, this is the most watched open issue. Users are eager to connect CLI agents to external tools like Figma and Atlassian, which rely on OAuth standards that the CLI currently struggles with.
2.  **[OPEN] Model Availability Warnings (#2099)**
    *   **Why it matters:** Users configuring specific models (e.g., "Claude Sonnet 4.5") in agent definitions are encountering fallbacks. This highlights friction in model selection configuration within the `.agent.md` files.
3.  **[OPEN] Global Instructions File Support (#252)**
    *   **Why it matters:** A highly requested quality-of-life improvement (11 upvotes). Developers want to define instruction sets once (globally) rather than duplicating them across every repository or worktree.
4.  **[OPEN] Linux Copy/Paste Regression (#2082)**
    *   **Why it matters:** `ctrl+shift+c` is a standard Linux terminal shortcut. Its breakage disrupts muscle memory, forcing users to rely on right-click context menus which are also experiencing issues (see #2158).
5.  **[OPEN] SessionStart Hooks Not Firing (#1730)**
    *   **Why it matters:** Hooks are critical for automated environment setup. Reports that `.github/hooks/*.json` are being ignored in recent versions undermine automation reliability.
6.  **[OPEN] Text Selection Captures Only First Character (#2143)**
    *   **Why it matters:** A high-severity usability bug preventing users from copying code snippets or logs from the terminal output, severely hampering debugging workflows.
7.  **[OPEN] MCP Regression in Non-Interactive Mode (#2178)**
    *   **Why it matters:** Users report that the recent v1.0.9 broke integration with third-party remote MCP servers when running in prompt mode (`-p`), affecting CI/CD and scripting workflows.
8.  **[OPEN] Plan Mode Executes Code (#1663)**
    *   **Why it matters:** Agents are bypassing the `[[PLAN]]` prefix constraints and implementing changes instead of just drafting them. This violates the "safety first" expectation of planning mode.
9.  **[CLOSED] Unknown Option '--no-warnings' (#1399)**
    *   **Why it matters:** While closed, the high comment count (4) and upvotes (8) indicate this error caused significant noise in logs during normal agent sessions recently.
10. **[OPEN] Theme Auto-Detection Failure (#2196)**
    *   **Why it matters:** `theme: "auto"` is failing to detect dark backgrounds in iTerm2, resulting in unreadable, muted text and forcing manual configuration.

---

## 4. Key PR Progress
*No Pull Requests were updated in the data source for this period.*

---

## 5. Feature Request Trends
*   **Enhanced Remote MCP Connectivity:** There is a strong push for standardized OAuth and CIMD support to connect CLI agents to external ecosystems (Figma, Atlassian) seamlessly (#33, #1305).
*   **Global Configuration:** Developers are moving toward "configure once" workflows, requesting global instruction files and centralized hook management to reduce repository setup overhead (#252).
*   **External Editor Integration:** Requests to open CLI prompts in external editors (like VS Code or Vim) for complex multi-line input are gaining traction (#867).

---

## 6. Developer Pain Points
*   **Terminal Hygiene (Copy/Paste/Scroll):** A significant cluster of issues relates to basic terminal interactions. Users are frustrated by broken standard shortcuts (Ctrl+Shift+C), capture-only-first-character bugs, and mouse wheel scroll events being captured by the input box instead of the history buffer.
*   **Hook Reliability:** Developers rely on the Hook system (`onSessionStart`, `joinSession`) for custom context injection. Recent regressions where hooks are silently ignored or overridden by extensions are breaking sophisticated automation pipelines.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-21

## 1. Today's Highlights
The Kimi CLI community activity surged with **20 active issues** and **38 pull requests**, though **no new official releases** were published today. A major focus is platform stability, with numerous community-contributed fixes merged to address critical cross-platform bugs (Windows, Linux) and Web UI enhancements. Key discussions revolve around the **MCP (Model Context Protocol) connection resilience** and **ACP terminal tool failures**, indicating a push towards more robust integrations.

## 2. Releases
No new releases were recorded in the last 24 hours. The last recorded version in issues is **v1.24**.

## 3. Hot Issues
1.  **[#769] [Enhancement] MCP Connection Resilience**
    *   **Why:** Highly requested (👍 5). Users want Kimi CLI to allow startup even if specific MCP servers fail, rather than crashing completely.
    *   **Reaction:** Community emphasizes the need for consistency with competitors like Codex/Claude Code.
    *   [Link](MoonshotAI/kimi-cli Issue #769)

2.  **[#1380] [Bug] ACP Terminal Tool Failure**
    *   **Why:** Critical for v1.17/v1.18 users. The `acp` module fails with `no attribute TerminalHandle`, blocking terminal usage on Linux.
    *   [Link](MoonshotAI/kimi-cli Issue #1380)

3.  **[#1513] [Bug] Windows Install Script Crash**
    *   **Why:** High impact for new users. The installation script fails silently on default Windows PowerShell execution policies, preventing adoption.
    *   [Link](MoonshotAI/kimi-cli Issue #1513)

4.  **[#1321] [Bug] System Kernel Variable Crash**
    *   **Why:** A defensive coding issue where CLI crashes entirely if `platform.uname().version` contains problematic variables.
    *   [Link](MoonshotAI/kimi-cli Issue #1321)

5.  **[#1428] [Bug] Web UI Attachment Button**
    *   **Why:** UX annoyance where clicking the attachment button triggers a premature form submit.
    *   [Link](MoonshotAI/kimi-cli Issue #1428)

6.  **[#1429] [Bug] Windows Permission Denied**
    *   **Why:** Concurrency issue on Windows leading to `PermissionError` during context writes.
    *   [Link](MoonshotAI/kimi-cli Issue #1429)

7.  **[#1378] [Bug] JSON Parsing Control Characters**
    *   **Why:** LLM generated tool arguments with control characters break the `strict=True` JSON parser, causing tool failure.
    *   [Link](MoonshotAI/kimi-cli Issue #1378)

8.  **[#1414] [Enhancement] Yolo Mode Toggle**
    *   **Why:** Users want a quick shortcut to switch to "yolo" (auto-approve) mode directly from the permission prompt for efficiency.
    *   [Link](MoonshotAI/kimi-cli Issue #1414)

9.  **[#1531] [Bug] Terminal Output Freezing**
    *   **Why:** Recent regression where concurrent terminal output during task execution causes the interface to freeze/jam.
    *   [Link](MoonshotAI/kimi-cli Issue #1531)

10. **[#1252] [Closed] CLI Permission Number Selection**
    *   **Why:** Parity request. Users want number-key shortcuts (1, 2, 3) for permission prompts, similar to the WebUI.
    *   [Link](MoonshotAI/kimi-cli Issue #1252)

## 4. Key PR Progress
1.  **[#1467] fix: add asyncio lock to context file writes**
    *   **Fix:** Resolves `PermissionError` on Windows by serializing concurrent writes to `context.jsonl`.
    *   [Link](MoonshotAI/kimi-cli PR #1467)

2.  **[#1497] fix: enforce UTF-8 encoding on Windows**
    *   **Fix:** Prevents crashes on Windows systems using legacy ANSI code pages (cp1252/ascii) when printing emoji.
    *   [Link](MoonshotAI/kimi-cli PR #1497)

3.  **[#1506] feat: add skip option for tool approval**
    *   **Feature:** Adds a "Skip" option to tool approval prompts, allowing the agent to continue with remaining tasks instead of aborting entirely.
    *   [Link](MoonshotAI/kimi-cli PR #1506)

4.  **[#1498] feat: add configurable default shell**
    *   **Feature:** Allows Windows users to switch from hardcoded `powershell.exe` to `pwsh`, `cmd.exe`, or Git Bash.
    *   [Link](MoonshotAI/kimi-cli PR #1498)

5.  **[#1460] fix: use strict=False for JSON parsing**
    *   **Fix:** Allows control characters in JSON tool call arguments, preventing parsing failures during LLM responses.
    *   [Link](MoonshotAI/kimi-cli PR #1460)

6.  **[#1462] fix: escape Rich markup in error content**
    *   **Fix:** Prevents `MarkupError` crashes when user input or error messages contain text resembling Rich tags (e.g., `[/login]`).
    *   [Link](MoonshotAI/kimi-cli PR #1462)

7.  **[#1463] feat: emit OSC terminal notifications**
    *   **Feature:** Integrates desktop notifications (OSC 9/OSC 777) when the agent completes a turn, supporting iTerm2, Windows Terminal, etc.
    *   [Link](MoonshotAI/kimi-cli PR #1463)

8.  **[#1472] fix: restore codeblock copy in Web UI**
    *   **Fix:** Restores copy functionality in non-HTTPS contexts (e.g., remote servers) by falling back to `execCommand` when the Clipboard API is blocked.
    *   [Link](MoonshotAI/kimi-cli PR #1472)

9.  **[#1507] feat: add /timeout command**
    *   **Feature:** Allows users to configure shell command timeouts dynamically, preventing long-running tasks (like installs) from being killed prematurely.
    *   [Link](MoonshotAI/kimi-cli PR #1507)

10. **[#1468] fix: source uv environment post-install**
    *   **Fix:** Fixes the `uv not found` error in `install.sh` by correctly sourcing the environment path after installation.
    *   [Link](MoonshotAI/kimi-cli PR #1468)

## 5. Feature Request Trends
*   **Granular Control & Workflow Fluidity:** Users are requesting more control over the execution flow, specifically the ability to "Skip" specific tool calls without aborting the mission (#1506) and "Yolo Mode" toggles for rapid auto-approval (#1414).
*   **Cross-Platform Parity:** Strong demand for a consistent experience across Windows, Linux, and macOS, evidenced by requests for specific shell configurations (#1498) and fixes for input handling (Paste support #1499).
*   **MCP Resilience:** A clear trend towards treating MCP servers as "optional/fallback" rather than "critical dependencies," asking the CLI to degrade gracefully when external servers fail (#769).

## 6. Developer Pain Points
*   **Windows Stability:** A significant portion of bugs stem from Windows-specific behaviors, such as file locking (`PermissionError`), encoding issues (ASCII vs UTF-8), and PowerShell profile loading interference.
*   **Strict Parsing Failures:** Developers are frustrated by crashes caused by "dirty" data (e.g., control characters in JSON, unescaped Rich markup), preferring the tool to be more forgiving or defensive.
*   **Installation Friction:** The install process is brittle on fresh systems (Windows PowerShell policies, Linux path sourcing), creating a high barrier to entry for new users.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-21

## 📌 Today's Highlights

Authentication and quota tracking dominate today's activity, with **GitHub Copilot premium request misclassification** and **Anthropic OAuth failures** causing significant user friction. On the contributor side, work progresses on **AI SDK v6 support** and several quality-of-life improvements including **offline mode**, **quiet CLI mode**, and enhanced **provider usage visibility** in the status popover.

---

## 🚀 Releases

No new releases in the last 24 hours.

---

## 🔥 Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#8030](https://github.com/anomalyco/opencode/issues/8030)** — Copilot auth sets too many requests as "user" consuming premium quota | **Critical billing impact.** Users report agent-initiated requests incorrectly receiving `X-Initiator: user` headers, rapidly depleting premium request quotas. 202 comments, 65 👍 indicate widespread pain. |
| 2 | **[#18267](https://github.com/anomalyco/opencode/issues/18267)** — Claude OAuth broken with 429 errors | **Login blocker.** Users cannot authenticate via OAuth due to persistent 429 responses. 126 comments reflect urgent demand for a fix. |
| 3 | **[#18362](https://github.com/anomalyco/opencode/issues/18362)** — Anthropic OAuth fails on Windows | **Platform-specific auth failure.** The callback step consistently fails with `ProviderAuthOauthCallbackFailed` on Windows across multiple OpenCode versions. |
| 4 | **[#18329](https://github.com/anomalyco/opencode/issues/18329)** — Anthropic OAuth fails at token exchange with 429 | **Root cause being investigated.** Debug logging confirms the 429 originates from `console.anthropic.com/v1/oauth/token` during code exchange. |
| 5 | **[#768](https://github.com/anomalyco/opencode/issues/768)** — Request premium quota display for Copilot | **Feature gap.** Cost tracker shows $0.00 for Copilot; users want premium request quota visibility similar to VS Code's extension. |
| 6 | **[#16470](https://github.com/anomalyco/opencode/issues/16470)** — Code output unreadable in light mode | **UX blocker.** Formatted code is invisible due to color scheme issues, making the TUI unusable for light-theme users. |
| 7 | **[#2072](https://github.com/anomalyco/opencode/issues/2072)** — Support for Cursor CLI | **Ecosystem expansion.** With Cursor releasing their own CLI, users want OpenCode integration. 136 👍 shows strong interest. |
| 8 | **[#18432](https://github.com/anomalyco/opencode/issues/18432)** — Windows directory corruption (junction loops, reserved names) | **Persistent corruption.** OpenCode creates corrupted directory structures including `nul` files and junction loops that survive reinstalls. |
| 9 | **[#10616](https://github.com/anomalyco/opencode/issues/10616)** — `tool_use` IDs without `tool_result` blocks | **API contract violation.** Messages with orphaned `tool_use` blocks cause errors; indicates state management issues in long sessions. |
| 10 | **[#5635](https://github.com/anomalyco/opencode/issues/5635)** — Run OpenCode backend via WSL on Windows | **Cross-platform enhancement.** Windows/WSL users cannot use Desktop app effectively. 30 👍 indicates significant demand. |

---

## 🔧 Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | **[#18433](https://github.com/anomalyco/opencode/pull/18433)** — AI SDK v6 support | Major upgrade to AI SDK v6. Currently WIP with pending work on logger configuration and message conversion. |
| 2 | **[#18235](https://github.com/anomalyco/opencode/pull/18235)** — Offline mode | Adds a "kill switch" for non-essential outbound connections for privacy-sensitive or restricted-network environments. |
| 3 | **[#18007](https://github.com/anomalyco/opencode/pull/18007)** — `session.start` lifecycle hook | New plugin hook with `startup`, `resume`, and `compact` triggers for session initialization workflows. |
| 4 | **[#18443](https://github.com/anomalyco/opencode/pull/18443)** — Retry transient 429 responses | Fixes retry classification gap where provider-marked non-retryable 429s were not being retried. |
| 5 | **[#18434](https://github.com/anomalyco/opencode/pull/18434)** — Provider usage display in Status | Adds percentage-based quota visibility with filters for connected providers. |
| 6 | **[#18445](https://github.com/anomalyco/opencode/pull/18445)** — Fix OpenRouter cache write token costs | Corrects cost underestimation when OpenRouter reports `prompt_tokens_details.cache_write`. |
| 7 | **[#18444](https://github.com/anomalyco/opencode/pull/18444)** — Surface sub-agent provider errors | Ensures sub-agent failures are visible in parent task flow instead of silently returning. |
| 8 | **[#18317](https://github.com/anomalyco/opencode/pull/18317)** — Quiet mode for CLI | Adds `-q \| --quiet` flag for cleaner output in automated/headless CLI runs. |
| 9 | **[#16751](https://github.com/anomalyco/opencode/pull/16751)** — Fix tool_use/tool_result mismatch | Addresses root causes and adds reconstruction-time safety for orphaned tool blocks. |
| 10 | **[#18115](https://github.com/anomalyco/opencode/pull/18115)** — Duplicate session command | Adds `/duplicate` command to fork current chat context into a new session (desktop-only). |

---

## 📈 Feature Request Trends

1. **Quota & Cost Visibility** — Strong demand for premium request tracking (#768), provider usage dashboards (#18434), and accurate cost attribution (#8030).
2. **Remote & Cross-Platform Development** — SSH connectivity for Desktop (#7790), WSL backend support (#5635), and multi-agent isolated workspaces (#17994).
3. **Ecosystem Integrations** — Cursor CLI support (#2072) and OpenRouter model validation bypass (#18398).
4. **UX Polish** — Light mode fixes (#16470), notification on build completion (#7242), and clipboard/session sharing improvements (#18425).

---

## 😤 Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **OAuth reliability** | Multiple auth failures across providers (Copilot #8030, Anthropic #18267, #18362, #18329) are blocking users from accessing paid services. |
| **Premium quota misattribution** | Users losing paid quota due to incorrect request classification — billing trust issue. |
| **Windows platform stability** | Persistent directory corruption (#18432), SQLite errors (#15221), and connection issues (#16122). |
| **Long-running session state** | Tool use/result mismatches (#10616) and MCP timeout errors (#14499) indicate fragility in extended sessions. |
| **Provider model restrictions** | Artificial blocking of valid OpenRouter models (#18398) frustrates users with custom workflows. |

---

*Digest generated from 50 issues and 20 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-21

## 1. Today's Highlights
The community is buzzing with activity around the **v0.13.0 release candidates** (preview and nightly builds), which introduce system prompt customization and critical pipeline fixes. A major theme today is **reliability**, with significant PR progress on preventing data loss in file operations and fixing input lag in the VS Code extension. Additionally, the ecosystem is expanding with new support for local model providers (LM Studio & Ollama) and AgentSmith orchestration.

## 2. Releases
### v0.13.0-preview.1 & v0.13.0-nightly.20260320
- **New Features:** Added system prompt customization options.
- **Fixes:** Handled duplicate `finish_reason` chunks from OpenRouter (contributed by @simon100500).
- **Chores:** Version bump to 0.13.0.

## 3. Hot Issues
1.  **[OPEN] Project-level Insight needed** ([#2040](https://github.com/QwenLM/qwen-code/issues/2040))
    *   **Why:** Users with multi-project workspaces find the current machine-level "Insight" feature insufficient. There is a strong need to scope insights to individual projects for better isolation.
2.  **[OPEN] Critical "Edit Failed" & Data Corruption** ([#2460](https://github.com/QwenLM/qwen-code/issues/2460))
    *   **Why:** A severe bad case where the agent fails to find strings to edit and subsequently destroys code. The user reports "almost unusable" stability in CLI & VS Code plugins.
3.  **[OPEN] Agent Overwrites Files Causing Data Loss** ([#2499](https://github.com/QwenLM/qwen-code/issues/2499))
    *   **Why:** The agent frequently uses `write_file` to overwrite entire files without reading them first, leading to content truncation and loss. This validates the severity of the "Edit Failed" complaints.
4.  **[OPEN] Auth Settings Overridden by Ollama Env** ([#2049](https://github.com/QwenLM/qwen-code/issues/2049))
    *   **Why:** If `OLLAMA_API_KEY` isn't exported, the CLI incorrectly overwrites `security.auth.selectedType` in `settings.json`, breaking user configurations.
5.  **[OPEN] Space Insertion Breaking Chinese Paths/Files** ([#2456](https://github.com/QwenLM/qwen-code/issues/2456))
    *   **Why:** Qwen 3.5 Plus forcibly inserts spaces between numbers and Chinese characters (e.g., turning `git手册` into `git 手册`), causing file operations and tool calls to fail entirely.
6.  **[OPEN] Web UI Follow-up Suggestions Request** ([#2523](https://github.com/QwenLM/qwen-code/issues/2523))
    *   **Why:** Users want Claude Code-style "Next Step" suggestions integrated into the Web UI to maintain workflow momentum after a task completes.
7.  **[OPEN] MCP Branching Support** ([#2466](https://github.com/QwenLM/qwen-code/issues/2466))
    *   **Why:** Users running complex local setups (Arch Linux, LM Studio) are requesting better branching logic for MCP (Model Context Protocol) executions.
8.  **[OPEN] Disable Persistent "Always Allow" Approvals** ([#2497](https://github.com/QwenLM/qwen-code/issues/2497))
    *   **Why:** Security-conscious users request an option to force per-action confirmation, disabling persistent approvals to prevent accidental mass changes.
9.  **[OPEN] "Empty Response" Errors via OpenRouter** ([#2530](https://github.com/QwenLM/qwen-code/issues/2530))
    *   **Why:** Users connecting via OpenRouter encounter API errors where the model stream ends empty or fails to use tool calling, stalling the agent.
10. **[OPEN] Reduce Memory Usage for Long Tasks** ([#2036](https://github.com/QwenLM/qwen-code/issues/2036))
    *   **Why:** Long-running sessions can consume 4GB-8GB of RAM, making model switching and session resumption painfully slow.

## 4. Key PR Progress
1.  **fix(tools): Enforce read-before-write guard** ([#2554](https://github.com/QwenLM/qwen-code/pull/2554))
    *   Addresses the critical data loss issue (#2499) by adding a 3-layer defense to prevent `write_file` from overwriting existing files with hallucinated content.
2.  **feat(vscode): Fix input lag in long conversations** ([#2550](https://github.com/QwenLM/qwen-code/pull/2550))
    *   Solves severe 5+ second input delays in VS Code by memoizing the message list component, reducing render cost from O(n) to constant time.
3.  **feat(cli, webui): Add follow-up suggestions** ([#2525](https://github.com/QwenLM/qwen-code/pull/2525))
    *   Implements context-aware "Next-Step Suggestions" (NES) similar to Claude Code, suggesting actions like "commit this" or "run tests" after task completion.
4.  **feat(core): Enable parallel tool call execution** ([#2000](https://github.com/QwenLM/qwen-code/pull/2000))
    *   Significant performance boost allowing independent tool calls in a single batch to execute concurrently using `Promise.allSettled` instead of sequentially.
5.  **feat(vscode): Enable Plan Mode & Approval UI** ([#2551](https://github.com/QwenLM/qwen-code/pull/2551))
    *   Brings CLI feature parity to VS Code, adding a cycle for `plan → default → auto-edit → yolo` modes and fixing `exit_plan` bugs.
6.  **fix(lsp): Improve C++/Java/Python support** ([#2547](https://github.com/QwenLM/qwen-code/pull/2547))
    *   Fixes LSP operations (definitions, hover) returning empty results for non-TS languages by ensuring `textDocument/didOpen` is sent correctly.
7.  **Support for Local Model Providers (LM Studio & Ollama)** ([#2385](https://github.com/QwenLM/qwen-code/pull/2385))
    *   Adds native connection support for local models via OpenAI-compatible APIs, removing the need for complex manual configurations.
8.  **feat(cli): Add /btw slash command** ([#2371](https://github.com/QwenLM/qwen-code/pull/2371))
    *   Introduces an ephemeral side-question command allowing users to query the model without polluting the main conversation history.
9.  **feat(vscode): Expose /skills with secondary picker** ([#2548](https://github.com/QwenLM/qwen-code/pull/2548))
    *   improves UX by showing a dropdown list of available skills when typing `/skills`, rather than requiring immediate execution.
10. **Add AgentSmith to Ecosystem** ([#2541](https://github.com/QwenLM/qwen-code/pull/2541))
    *   Documentation update adding [AgentSmith](https://github.com/guerro47/agentsmith), an orchestration library for Qwen-Agent/Qwen-Code, to the official README.

## 5. Feature Request Trends
*   **Granular Context & Control:** Users are moving beyond basic chat and requesting "Project-level" insights and "Follow-up" workflows.
*   **Local-First Support:** Strong demand for seamless integration with local inference engines like LM Studio and Ollama without API keys.
*   **Safety & Predictability:** A clear trend towards "Read-Before-Write" safety nets and forced confirmation modes to prevent the AI from running wild on codebases.
*   **Parallelism:** Requests for parallel sub-agent execution to speed up complex, multi-file tasks.

## 6. Developer Pain Points
*   **File Editing Reliability:** The most critical pain point is the `write_file` tool's tendency to overwrite content without reading, leading to data loss and "edit failed" loops.
*   **Tokenization/Path Issues:** Specifically with the Qwen 3.5 Plus model, the insertion of spaces between numbers and CJK characters is breaking file paths and tool usage for non-English users.
*   **Performance Overhead:** VS Code input lag and high memory usage (4GB+) for long sessions are degrading the developer experience.
*   **Opaque Errors:** Users face "Empty response" or "Edit failed" errors without clear guidance on resolution, often requiring deep dives into settings or logs.

</details>