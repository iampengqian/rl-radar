# AI CLI Tools Community Digest 2026-03-12

> Generated: 2026-03-12 03:19 UTC | Tools covered: 7

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

# AI CLI Tools Ecosystem Cross-Tool Analysis Report
**Date:** 2026-03-12 | **Analyst:** Senior Technical Analyst, AI Developer Tools

---

## 1. Ecosystem Overview

The AI CLI tools landscape on March 12, 2026, demonstrates a sector in rapid maturation, transitioning from novelty coding assistants to production-grade development agents. All seven major tools are converging on three critical architectural pillars: **robust context management** (intelligent compression, session continuity, checkpoints), **enterprise-grade security** (sandboxing, granular permissions, audit trails), and **extensibility** (MCP protocol adoption, event hooks, plugin systems). The day's activity—spanning 10 releases and 100+ issues/PRs across tools—reveals a competitive race to stabilize core agent reliability while differentiating on platform integration and advanced workflow features. Windows platform support remains a universal pain point, indicating a significant opportunity for any tool that achieves cross-platform parity.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (Active) | Release Status | Velocity Signal |
|------|:------------:|:-------------:|----------------|-----------------|
| **Claude Code** | 10 | 10 | v2.1.73, v2.1.74 shipped | High — 2 releases, enterprise focus |
| **OpenAI Codex** | 10 | 10 | 5 alpha builds (v0.114–v0.115) | Very High — rapid alpha iteration |
| **Gemini CLI** | 10 | 10 | None (stabilization phase) | Medium — architectural refactoring |
| **GitHub Copilot CLI** | 10 | 2 | v1.0.4 shipped | Medium — observability push |
| **Kimi Code CLI** | 10 | 10 | v1.20.0 shipped | High — Web UI focus |
| **OpenCode** | 10 | 10 | None | Medium — PR backlog clearing |
| **Qwen Code** | 10 | 10 | v0.12.1 shipped, v0.12.2 pending | High — Windows stabilization |

**Summary:** OpenAI Codex leads in raw release velocity (5 alphas in 24h), while Claude Code, GitHub Copilot CLI, Kimi, and Qwen all shipped stable releases. Gemini CLI and OpenCode are in stabilization phases with substantial PR activity but no releases.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Requirements |
|-----------|----------------|----------------------|
| **Context Compression & Management** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Kimi | Intelligent summarization, "guided compression" preserving user-specified context, auto-distillation of noisy tool outputs, avoiding "hamster wheel" compaction loops |
| **Agent/Subagent Isolation** | Claude Code (#4476, 184👍), Gemini CLI (#21901), Qwen Code | Decoupled MCP configurations, tool isolation boundaries, scoped permissions for subagents |
| **Granular Permission Systems** | Claude Code, Gemini CLI, Qwen Code (#2283), OpenAI Codex | Rule-based permissions (`Bash(git *)`, `Read(./secrets/**)`), policy guards against unsafe configs, reduced permission prompt fatigue |
| **Event Hooks & Automation** | OpenAI Codex (#2109, +489👍), Qwen Code (#2203), GitHub Copilot CLI | Scriptable lifecycle hooks (pre/post tool execution), configurable hotkeys, CI/CD integration |
| **Session Continuity & Portability** | Claude Code (#13354), Gemini CLI (#21792), OpenCode (#16201), Kimi (#1402) | Checkpoints, session import/export, seamless continuation across limits, resumable agent states |
| **Plan Mode / Structured Workflows** | Claude Code, Kimi (#1381), Qwen Code (#1985) | Explicit `/plan` and `/spec` commands, Plan Mode toggles with persistence, separation of planning from execution |
| **Windows Platform Stabilization** | Claude Code, GitHub Copilot CLI, OpenCode, Qwen Code, Kimi | Terminal flickering fixes, PowerShell support, Git Bash detection, input handling (space key bugs), symlink handling |

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
|------|-----------------|-------------|-------------------|
| **Claude Code** | Enterprise integration, verification rigor | Enterprise developers, security-conscious teams | Model overrides (Bedrock ARNs), SSL/proxy guidance, security-hardening plugins, `/context` optimization insights |
| **OpenAI Codex** | Performance & multimodal expansion | Power users, early adopters | Rust-based core (5 alpha releases), Bubblewrap sandboxing (Linux), private desktop isolation (Windows), aggressive GPT-5.x integration |
| **Gemini CLI** | Agent architecture & context coherence | Developers building complex agent systems | Profiles system, auto-distillation (Flash Lite for tool output filtering), policy engine hardening, voice mode visualization |
| **GitHub Copilot CLI** | Enterprise ecosystem integration | GitHub Enterprise users, VS Code natives | OpenTelemetry instrumentation, RPC shell execution (`session.shell.exec`), Adaptive Color Engine, org policy synchronization |
| **Kimi Code CLI** | Web UI & session management | Users preferring browser-based interfaces | Plan Mode toggle (persistent), Playwright E2E testing, session import/export (ZIP), WebUI-first development |
| **OpenCode** | Customization & power-user features | Vim/Emacs users, tinkerers | MCP server mode, PowerShell support, per-subtask model overrides (`@agent:provider/model`), fullscreen diff viewer |
| **Qwen Code** | Cross-platform stability | Budget-conscious developers, Chinese market | RFC 9728 OAuth compliance, structured permission system, AI tool migration skills (`migrate-to-qwen`), CLI/VS Code parity |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **High Momentum** | OpenAI Codex, Claude Code | OpenAI's 5 alpha releases in 24h indicates aggressive iteration toward v0.115.0 stability. Claude Code's dual-release day with enterprise features (model overrides, context insights) shows mature product management addressing business needs. |
| **Active Development** | Qwen Code, Kimi, Gemini CLI | Qwen and Kimi shipped stable releases with clear feature roadmaps. Gemini CLI's lack of releases but 10 PRs suggests substantial architectural work (profiles, auto-distillation) nearing completion. |
| **Stabilizing** | GitHub Copilot CLI, OpenCode | GitHub Copilot CLI's low PR count (2) but significant v1.0.4 release (OpenTelemetry, shell RPC) indicates focused, milestone-driven development. OpenCode has substantial PR backlog (10 active) addressing fundamental issues (compaction, PowerShell) but no release rhythm yet. |

**Maturity Indicators:**
- **Most Enterprise-Ready:** Claude Code (SSL/proxy handling, Bedrock support, security plugins), GitHub Copilot CLI (OpenTelemetry, org policy sync)
- **Most Innovative:** OpenAI Codex (Rust core, advanced sandboxing), Gemini CLI (auto-distillation, profiles)
- **Most Community-Driven:** OpenCode (112 👍 on Vim motions), Claude Code (184 👍 on agent isolation)

---

## 6. Trend Signals

### 📈 Emerging Industry Trends

1. **Context Window Intelligence is the New Battleground**
   - All tools are moving beyond simple truncation toward *intelligent* context management. Gemini's "auto-distillation" (using Flash Lite to filter tool outputs) and Claude's `/context` optimization insights signal a shift from passive context handling to active, AI-driven context optimization. **Implication:** Expect all tools to adopt tiered summarization with lightweight models filtering context for heavyweight reasoning models.

2. **The "Plan-Execute" Workflow is Becoming Standard**
   - Plan Mode features (Claude, Kimi, Qwen requests) and structured workflow commands indicate developers want explicit control over the planning vs. execution phases. This reflects a maturing understanding that agentic coding works best when users can review/approve architectural decisions before implementation. **Implication:** Tools without explicit Plan Mode will face pressure to add it.

3. **Security Hardening is Escalating from Afterthought to Core Feature**
   - Claude's `hook-integrity-guard` plugin (prevents self-modification), Gemini's policy engine regex fixes, OpenAI's Bubblewrap/private desktop sandboxing, and Qwen's structured permission system all indicate security is being built into the core architecture, not bolted on. **Implication:** Enterprise adoption will increasingly depend on demonstrable security boundaries and audit capabilities.

4. **Windows is the Weakest Link Across the Ecosystem**
   - 5 of 7 tools report significant Windows issues (terminal flickering, input bugs, PowerShell incompatibilities, Git Bash detection failures). This represents a massive gap in cross-platform parity. **Implication:** Any tool that achieves robust Windows support gains immediate competitive advantage in the enterprise market.

5. **MCP (Model Context Protocol) is Becoming the Integration Standard**
   - All tools except Kimi explicitly mention MCP integration progress (OAuth scopes, server modes, FQN validation). The protocol is achieving critical mass as the standard for tool/context integration. **Implication:** Developers building AI tooling should prioritize MCP compatibility for future-proofing.

6. **Session Portability is Emerging as a User Expectation**
   - Kimi's session import/export (ZIP), Gemini's checkpoint discussions, and Claude's session continuity requests indicate users want to share, archive, and resume complex agent states. **Implication:** Session management will become a key differentiator for collaborative and long-running workflows.

### 🚨 Risk Signals

- **Rate Limit Frustration:** OpenAI Codex users report Team/Business accounts being "second-class citizens" for rate limits. Claude Code users face session limits interrupting work. **Action:** Enterprise buyers should evaluate rate limit policies carefully.
- **Agent Reliability Trust Gap:** Claude Code users report agents claiming completion without execution ("I would write this employee up for lying to me"). OpenAI Codex has "hamster wheel" compaction issues. **Action:** Verification features and completion integrity will be critical for production trust.

---

**Report compiled from 70 issues, 52 PRs, and 10 releases across 7 major AI CLI tools.**

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills | **Snapshot Date:** 2026-03-12

---

## 1. Top Skills Ranking

Based on repository activity and community engagement, here are the most notable Skills currently in development:

| Rank | Skill | Author | Status | Focus Area |
|------|-------|--------|--------|------------|
| 1 | **document-typography** | @PGTBoos | 🟢 OPEN | Document Quality |
| 2 | **frontend-design** (improved) | @justinwetch | 🟢 OPEN | UI/UX |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | @eovidiu | 🟢 OPEN | Meta/Tooling |
| 4 | **codebase-inventory-audit** | @p19dixon | 🟢 OPEN | DevOps |
| 5 | **shodh-memory** | @varun29ankuS | 🟢 OPEN | Agent Memory |
| 6 | **plan-task** | @LevNas | 🟢 OPEN | Task Management |
| 7 | **AURELION skill suite** | @Chase-Key | 🟢 OPEN | Cognitive Framework |
| 8 | **SAP-RPT-1-OSS predictor** | @amitlals | 🟢 OPEN | Enterprise Analytics |

### Detailed Breakdown

**1. [document-typography](https://github.com/anthropics/skills/pull/514)** *(PR #514)*
- **Functionality:** Automated typographic quality control for AI-generated documents—fixes orphan word wrap, widow paragraphs, and numbering misalignment.
- **Highlights:** Addresses a universal pain point (every document Claude generates has these issues). Strong community resonance for "invisible but critical" quality improvements.
- **Status:** OPEN (Created 2026-03-04)

**2. [frontend-design skill improvement](https://github.com/anthropics/skills/pull/210)** *(PR #210)*
- **Functionality:** Revised frontend-design skill with clearer, more actionable instructions for Claude to follow within a single conversation.
- **Highlights:** Long-running PR (active since Jan 2026). Focus on reducing ambiguity and making guidance specific enough to steer behavior effectively.
- **Status:** OPEN (Updated 2026-03-07)

**3. [skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** *(PR #83)*
- **Functionality:** Two meta-skills for the marketplace—quality analysis across 5 dimensions (structure, documentation, etc.) and security analysis for skill validation.
- **Highlights:** "Skills for skills" approach—demonstrates community interest in self-improving tooling and governance.
- **Status:** OPEN (Created 2025-11-06)

**4. [codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** *(PR #147)*
- **Functionality:** Comprehensive codebase cleanup and documentation audit—identifies orphaned code, unused files, documentation gaps, and infrastructure bloat. Produces a `CODEBASE-STATUS.md` source of truth.
- **Highlights:** 10-step systematic workflow; addresses enterprise code health concerns.
- **Status:** OPEN (Updated 2026-02-04)

**5. [shodh-memory](https://github.com/anthropics/skills/pull/154)** *(PR #154)*
- **Functionality:** Persistent memory system for AI agents—maintains context across conversations via `proactive_context` calls and structured memory storage.
- **Highlights:** Directly addresses Claude Code's stateless session limitation. Rich content structuring for memories.
- **Status:** OPEN (Updated 2026-03-03)

**6. [plan-task](https://github.com/anthropics/skills/pull/522)** *(PR #522)*
- **Functionality:** Persists multi-step plans and task progress as Markdown files in `.claude/tasks/`, enabling session continuity.
- **Highlights:** Supports both Git-tracked (shared team) and local modes. Companion to record-knowledge skill.
- **Status:** OPEN (Created 2026-03-05)

**7. [AURELION skill suite](https://github.com/anthropics/skills/pull/444)** *(PR #444)*
- **Functionality:** Four-skill cognitive framework—kernel (structured thinking templates), advisor, agent, and memory components for professional knowledge management.
- **Highlights:** Represents community interest in structured cognitive frameworks for AI collaboration.
- **Status:** OPEN (Created 2026-02-21)

**8. [SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** *(PR #181)*
- **Functionality:** Leverages SAP's open-source tabular foundation model (Apache 2.0) for predictive analytics on SAP business data.
- **Highlights:** Enterprise-focused; integrates with SAP Event TechEd 2025 release.
- **Status:** OPEN (Updated 2026-03-11)

---

## 2. Community Demand Trends

Analysis of Issues reveals the following most-anticipated Skill directions:

| Trend Category | Description | Key Issue References |
|----------------|-------------|---------------------|
| **🔄 Persistent Memory & Session Continuity** | Overcoming Claude Code's stateless nature—skills that persist context, plans, and knowledge across sessions | [#62](https://github.com/anthropics/skills/issues/62), PRs #154, #521, #522 |
| **🛡️ Agent Governance & Safety** | Policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems | [#412](https://github.com/anthropics/skills/issues/412) |
| **🔌 MCP Integration** | Exposing Skills as MCPs (Model Context Protocol) for standardized software interfaces | [#16](https://github.com/anthropics/skills/issues/16), [#369](https://github.com/anthropics/skills/issues/369) |
| **🏗️ Infrastructure & Platform Support** | AWS Bedrock compatibility, enterprise SSO support, API reliability | [#29](https://github.com/anthropics/skills/issues/29), [#532](https://github.com/anthropics/skills/issues/532), [#389](https://github.com/anthropics/skills/issues/389) |
| **🔒 Trust & Security Boundaries** | Namespace security, preventing impersonation of official Anthropic skills | [#492](https://github.com/anthropics/skills/issues/492) |
| **📚 Documentation Quality** | Better contributing guides, best practices for skill-creator, reducing duplication | [#202](https://github.com/anthropics/skills/issues/202), [#189](https://github.com/anthropics/skills/issues/189), [#509](https://github.com/anthropics/skills/pull/509) |

---

## 3. High-Potential Pending Skills

These actively-discussed PRs are strong candidates for merging:

| Skill | Why It Matters | PR Link |
|-------|----------------|---------|
| **shodh-memory** | Solves the #1 requested feature (persistent context); actively updated | [#154](https://github.com/anthropics/skills/pull/154) |
| **plan-task** | Complements memory skills; fills critical workflow gap | [#522](https://github.com/anthropics/skills/pull/522) |
| **document-typography** | Universal applicability; solves subtle but pervasive quality issues | [#514](https://github.com/anthropics/skills/pull/514) |
| **codebase-inventory-audit** | Enterprise-ready; systematic approach to technical debt | [#147](https://github.com/anthropics/skills/pull/147) |
| **CONTRIBUTING.md** | Infrastructure improvement that raises community health score | [#509](https://github.com/anthropics/skills/pull/509) |
| **YAML validation fixes** (#361, #359, #284) | Quality-of-life improvements preventing parser errors—multiple related PRs indicate strong community consensus | [#361](https://github.com/anthropics/skills/pull/361), [#359](https://github.com/anthropics/skills/pull/359), [#284](https://github.com/anthropics/skills/pull/284) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent memory and session continuity—enabling Claude Code to maintain context, plans, and knowledge across conversations rather than starting from scratch each session.**

This theme appears across multiple top PRs (shodh-memory, plan-task, record-knowledge) and is the core complaint in several high-engagement Issues.

---

# Claude Code Community Digest — 2026-03-12

## Today's Highlights

Two back-to-back releases land today with significant quality-of-life improvements. **v2.1.74** introduces actionable optimization suggestions in the `/context` command and adds configurable auto-memory directory settings, while also fixing a notable memory leak in streaming. **v2.1.73** brings enterprise-friendly features with `modelOverrides` for custom provider mappings (including Bedrock ARN support) and improved SSL/corporate proxy error guidance. The community is actively discussing Windows platform stability issues and proposing security-hardening plugins.

---

## Releases

### v2.1.74
- **Context optimization insights**: `/context` command now identifies context-heavy tools, memory bloat, and capacity warnings with specific actionable tips
- **Configurable memory storage**: New `autoMemoryDirectory` setting allows custom directories for auto-memory storage
- **Bug fix**: Resolved memory leak in streaming operations

### v2.1.73
- **Model override mapping**: New `modelOverrides` setting maps model picker entries to custom provider model IDs (e.g., Bedrock inference profile ARNs)
- **Better OAuth troubleshooting**: Actionable guidance when OAuth login or connectivity fails due to SSL certificate errors (corporate proxies, `NODE_EXTRA_CA_CERTS`)

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#24964](https://github.com/anthropics/claude-code/issues/24964) — **Cowork folder picker blocks directories outside home** | 103 👍, 81 comments. Critical for enterprise users with projects on external drives or network shares. Symlinks/junctions also blocked on Windows/macOS. |
| 2 | [#26224](https://github.com/anthropics/claude-code/issues/26224) — **Claude Code hanging/freezing for 5-20+ minutes** | Urgent performance regression affecting usability. Users report extended freezes on numerous prompts. |
| 3 | [#4476](https://github.com/anthropics/claude-code/issues/4476) — **Agent-scoped MCP configuration with isolation** | 184 👍. Closed but highly requested feature for decoupling sub-agents from main agent MCP servers. Strong community desire for this architectural improvement. |
| 4 | [#33258](https://github.com/anthropics/claude-code/issues/33258) — **OAuth login timeout after successful browser flow** | 33 comments, recently closed. Auth flow completes in browser but CLI times out — frustrating authentication UX issue. |
| 5 | [#8674](https://github.com/anthropics/claude-code/issues/8674) — **VS Code extension fails to detect Git Bash on Windows** | 58 comments, 33 👍. Long-standing Windows integration issue despite correct configuration. |
| 6 | [#30457](https://github.com/anthropics/claude-code/issues/30457) — **Google Drive connector shows connected but tools not exposed** | Cowork integration bug — connector appears healthy but tools aren't available to the agent. |
| 7 | [#33356](https://github.com/anthropics/claude-code/issues/33356) — **High memory usage (50.4GB)** | Severe memory leak report. Reinforces importance of v2.1.74's streaming memory fix. |
| 8 | [#13354](https://github.com/anthropics/claude-code/issues/13354) — **Continue when session limit reached** | 34 👍. Feature request for seamless session continuation across limits — productivity blocker for long-running tasks. |
| 9 | [#32650](https://github.com/anthropics/claude-code/issues/32650) — **Meta: Systematic completion-integrity failures** | Comprehensive meta-issue documenting 16 failure patterns across 100+ sessions. Raises concerns about agent reliability and verification rigor. |
| 10 | [#33000](https://github.com/anthropics/claude-code/issues/33000) — **`/effort` command shown but returns "Unknown skill"** | UI/UX mismatch — status bar suggests `/effort` is available but command fails. 10 👍. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#33443](https://github.com/anthropics/claude-code/pull/33443) — **Dockerfile native installer update** | Updates devcontainer to Node 24.14 and replaces deprecated npm install with native installer. |
| 2 | [#33390](https://github.com/anthropics/claude-code/pull/33390) — **hook-integrity-guard security plugin** | Prevents Claude from modifying its own hooks, settings, and safety infrastructure. Addresses self-weakening vulnerability class. |
| 3 | [#33397](https://github.com/anthropics/claude-code/pull/33397) — **Code-review plugin permission reduction** | Reduces hundreds of permission prompts by eliminating unnecessary `cd /path && ...` prefixes that trigger compound command checks. |
| 4 | [#30636](https://github.com/anthropics/claude-code/pull/30636) — **Documentation URL migration** | Updates 25+ stale URLs to new canonical domains (`code.claude.com`, `platform.claude.com`). |
| 5 | [#33312](https://github.com/anthropics/claude-code/pull/33312) — **Ralph-loop bash injection fix** | Escapes special characters in ARGUMENTS to prevent backtick command substitution exploits. |
| 6 | [#33234](https://github.com/anthropics/claude-code/pull/33234) — **Commit-commands initial commit handling** | Fixes `/commit` failing on repos with no commits yet (graceful fallback to staged diff). |
| 7 | [#33224](https://github.com/anthropics/claude-code/pull/33224) — **Configurable Node.js version in DevContainer** | Makes Node version configurable via `NODE_VERSION` build arg instead of hardcoded `node:20`. |
| 8 | [#33070](https://github.com/anthropics/claude-code/pull/33070) — **Reframe debugging plugin** | New `/reframe` slash command applying cognitive frameworks (first principles, inversion, analogy) to stuck debugging problems. |
| 9 | [#33351](https://github.com/anthropics/claude-code/pull/33351) — **False-positive update banner workaround docs** | Documents `DISABLE_AUTOUPDATER=1` workaround for Homebrew/WinGet version mismatch confusion. |
| 10 | [#5609](https://github.com/anthropics/claude-code/pull/5609) — **DevContainer hybrid firewall IP management** | Enhanced firewall with static/dynamic IP handling for CDN and load-balanced services. |

---

## Feature Request Trends

1. **Agent Isolation & MCP Scoping** — Strong demand for sub-agents with isolated MCP configurations that don't inherit or pollute the main agent's tool registry (#4476 with 184 👍).

2. **Session Continuity** — Requests for seamless continuation across session limits (#13354), plan file storage in project directories for version control (#14866), and terminal title customization (#17951).

3. **Verification & Integrity Controls** — Multiple issues (#32650, #32658, #32291) call for post-edit verification, non-tautological checks, and distinction between verified facts vs. inferred claims in completion summaries.

4. **Remote Control Enablement** — Users on Max plans report `claude remote-control` returning "not yet enabled" errors (#33119), indicating unmet expectations for remote capability access.

---

## Developer Pain Points

1. **Windows Platform Stability** — A cluster of issues (#24964, #8674, #25419, #32650) highlight systemic Windows challenges: Cowork sandbox failures, Git Bash detection, folder picker restrictions, and Hyper-HV VM spawning.

2. **Trust & Verification Gap** — Users express frustration that Claude reports tasks as "complete" without actual execution (#32281), skips verification steps (#32295), and doesn't surface its own mistakes (#32301). One user bluntly stated: *"I would write this employee up at work for lying to me."*

3. **Performance & Memory** — High memory consumption (50GB+ in #33356), extended freezing/hanging (#26224), and memory leaks in streaming (addressed in v2.1.74) remain ongoing concerns.

4. **Permission Prompt Fatigue** — The code-review plugin's excessive permission prompts (#33397) render it "essentially unusable without constant babysitting" — a UX pattern that needs systematic improvement.

5. **Enterprise/Corporate Environment Friction** — SSL certificate issues with corporate proxies, OAuth timeouts, and model provider mapping complexities (Bedrock ARNs) indicate room for smoother enterprise adoption.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
Development velocity remains high with **5 new Rust alpha releases** (v0.114.0–v0.115.0) shipped in the last 24 hours. On the engineering front, significant progress was made on Linux sandboxing (switching to Bubblewrap) and Windows isolation (private desktops). However, the community is currently voicing significant frustration regarding **connection stability** in the Desktop App and perceived **inequities in rate limit resets** for Team/Business accounts.

## 2. Releases
*   **rust-v0.115.0-alpha.6** through **rust-v0.114.0-alpha.7**: A rapid succession of alpha builds were released, focusing on iterative fixes and stability improvements for the upcoming v0.115.0 milestone.
    *   [View Releases](https://github.com/openai/codex/releases)

## 3. Hot Issues

1.  **[CLOSED] CLI hangs indefinitely on all prompts (Windows/WSL)**
    *   **Why it matters:** A critical bug affecting Windows users on v0.111.0+ caused the CLI to hang forever on GPT-5.x models.
    *   **Reaction:** With 124 comments and 77 upvotes, this was the top issue. It appears recently closed, likely addressed by the influx of alpha patches.
    *   [Issue #14048](https://github.com/openai/codex/issues/14048)

2.  **[OPEN] Event Hooks Request**
    *   **Why it matters:** Users want scriptable automation (triggering commands before/after Codex behaviors) via pattern matching.
    *   **Reaction:** Highly requested feature (+489 upvotes) seeing renewed discussion.
    *   [Issue #2109](https://github.com/openai/codex/issues/2109)

3.  **[OPEN] Desktop Reconnecting Loops**
    *   **Why it matters:** Users report the Desktop App is stuck in "Reconnecting..." loops, particularly in Europe, rendering the app unusable.
    *   **Reaction:** Frustration is rising as connectivity degrades compared to previous builds.
    *   [Issue #14209](https://github.com/openai/codex/issues/14209)

4.  **[OPEN] Context Compaction "Hamster Wheel"**
    *   **Why it matters:** On high-tier models (GPT-5.4 xhigh), the agent gets stuck compacting context for hours without producing code changes.
    *   **Reaction:** Users on powerful hardware (M3 Max) are finding the tool unusable for large contexts.
    *   [Issue #14120](https://github.com/openai/codex/issues/14120)

5.  **[OPEN] Paid Account Model Exclusion**
    *   **Why it matters:** Users report GPT-5.3-Codex fails on paid accounts while working on free tiers, hinting at a licensing or auth regression.
    *   [Issue #14331](https://github.com/openai/codex/issues/14331)

6.  **[OPEN] Team/Business Rate Limit Exclusion**
    *   **Why it matters:** Business users report being systematically excluded from usage resets, leading to faster rate limiting compared to individual accounts.
    *   **Reaction:** Accusations of being "second-class citizens" despite paying enterprise rates.
    *   [Issue #14329](https://github.com/openai/codex/issues/14329)

7.  **[OPEN] PDF Support**
    *   **Why it matters:** A long-standing request to allow Codex to ingest text/images/charts from PDFs natively.
    *   **Reaction:** +82 upvotes; users want multi-modal context beyond code.
    *   [Issue #1797](https://github.com/openai/codex/issues/1797)

8.  **[OPEN] Model Confusion (Responding to Old Messages)**
    *   **Why it matters:** GPT-5.4 in the Desktop App is reportedly generating responses to previous prompts rather than the current user input.
    *   [Issue #13864](https://github.com/openai/codex/issues/13864)

9.  **[OPEN] Thread UI Refresh Bug**
    *   **Why it matters:** A regression in the latest Desktop build (v26.309) causes threads to spam-refresh, blocking access to history.
    *   [Issue #14406](https://github.com/openai/codex/issues/14406)

10. **[OPEN] Image Generation Integration**
    *   **Why it matters:** Developers want to generate visual assets (banners, diagrams) directly within Codex to support the code they are writing.
    *   [Issue #8758](https://github.com/openai/codex/issues/8758)

## 4. Key PR Progress

1.  **feat(tui): migrate TUI to in-process app-server**
    *   Refactors the TUI to communicate via the `app-server` protocol rather than direct thread handles, enabling better telemetry and control.
    *   [PR #14018](https://github.com/openai/codex/pull/14018)

2.  **refactor: make bubblewrap the default Linux sandbox**
    *   Replaces the legacy Landlock sandbox with Bubblewrap (`bwrap`) as the default for improved isolation on Linux systems.
    *   [PR #13996](https://github.com/openai/codex/pull/13996)

3.  **Use a private desktop for Windows sandbox**
    *   Improves Windows security by launching sandboxed processes on a private desktop object instead of the default interactive desktop.
    *   [PR #14400](https://github.com/openai/codex/pull/14400)

4.  **Fix js_repl hangs on U+2028/U+2029**
    *   Fixes a bug where specific Unicode line separators in tool responses caused the JS REPL to hang indefinitely.
    *   [PR #14421](https://github.com/openai/codex/pull/14421)

5.  **feat: search_tool migrate to "bring your own tool"**
    *   Migrates the internal BM25 search tool to the official Responses API standard for client-executed search tools.
    *   [PR #14274](https://github.com/openai/codex/pull/14274)

6.  **Standardize context fragment handling**
    *   Unifies how context is injected into the model via typed fragments and envelopes (`DeveloperEnvelopeBuilder`), cleaning up legacy technical debt.
    *   [PR #13465](https://github.com/openai/codex/pull/13465)

7.  **fix: preserve split filesystem semantics in linux sandbox**
    *   Ensures that split filesystem permissions are respected correctly under the new sandboxing regime.
    *   [PR #14173](https://github.com/openai/codex/pull/14173)

8.  **use scopes_supported for OAuth on MCP servers**
    *   Improves the Model Context Protocol (MCP) integration by auto-discovering and using advertised OAuth scopes.
    *   [PR #14419](https://github.com/openai/codex/pull/14419)

9.  **feat(app-server): propagate traces across tasks**
    *   Improves observability by keeping trace context alive across async boundaries in the app-server.
    *   [PR #14387](https://github.com/openai/codex/pull/14387)

10. **Support waiting for code_mode sessions**
    *   Refactors the code mode runner protocol to use explicit session IDs and persist runner processes for better stability.
    *   [PR #14295](https://github.com/openai/codex/pull/14295)

## 5. Feature Request Trends
*   **External Tooling & Automation:** Strong demand for **Event Hooks** (#2109) and **Configurable Hotkeys** (#3049). Users want Codex to fit into their existing workflows and keybindings rather than dictating them.
*   **Multimodal Capabilities:** Requests for **PDF parsing** (#1797) and **Image Generation** (#8758) are trending. Developers are looking for a "one-stop-shop" agent that handles documentation and assets alongside code.
*   **Granular Control:** Users want the ability to set **reasoning effort per automation** (#12239) rather than using global defaults, allowing for "low effort" quick tasks and "extra high effort" complex reviews.

## 6. Developer Pain Points
*   **Context Management Overhead:** Users report the "context compaction" logic is too aggressive or inefficient, leading to agents that "think" for hours without acting (#14120, #14346).
*   **Network & Auth Stability:** A spike in reports regarding **"Reconnecting" loops** in the desktop app (#14209) and confusing **Model Access errors** on paid tiers (#14331).
*   **Enterprise Rate Limits:** Business/Team users feel penalized by rate limit policies that seem to reset differently compared to Plus accounts (#14329, #14349).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
The Gemini CLI development cycle is currently heavily focused on **Agent Continuity and Context Management**, with a major push to overhaul session coherence, history compression, and checkpoint mechanisms. Significant progress was made on platform security with the patching of policy engine vulnerabilities, alongside enhancements to the Terminal User Interface (TUI) stability. No new releases were published today, indicating a stabilization phase for these substantial architectural changes.

## 2. Releases
**None.**
*No new versions were released in the last 24 hours. The team appears to be focusing on merging architectural improvements and bug fixes ahead of the next stable release.*

## 3. Hot Issues

1.  **Policy Engine Logic Flaw in Plan Mode** [#21806](https://github.com/google-gemini/gemini-cli/issues/21806)
    A critical logic bug was identified where `exit_plan_mode` ignores a policy's `allow` decision if the scheduler skips confirmation. This causes `approvalPayload` to remain null during execution, breaking automation workflows that rely on pre-approved policies.

2.  **Epic: Improving Session Continuity and Coherence** [#21792](https://github.com/google-gemini/gemini-cli/issues/21792)
    Maintainers opened a major epic to address context degradation in long-running sessions. This tracks efforts to move beyond linear chat histories toward a more robust session lifecycle that handles context window limitations intelligently.

3.  **UI "Hand Icon" Confusion** [#21925](https://github.com/google-gemini/gemini-cli/issues/21925)
    Users are reporting that the CLI incorrectly displays the "Action Required" (hand icon) notification when long-running shell scripts are executing, confusing waiting time with interactive input requirements.

4.  **Shell Command Aliases Not Supported** [#21461](https://github.com/google-gemini/gemini-cli/issues/21461)
    A recurring frustration where shell aliases defined in `.bash_profile` fail to resolve within the Gemini CLI execution environment, limiting the tool's ability to leverage existing developer environments.

5.  **Auto-Distillation for Tool Calls** [#21889](https://github.com/google-gemini/gemini-cli/issues/21889)
    A high-priority feature request to automatically summarize noisy tool outputs (like large grep results or compiler errors) using a lightweight model (e.g., Flash Lite) before they pollute the main context window.

6.  **Subagent Tool Isolation** [#21901](https://github.com/google-gemini/gemini-cli/issues/21901)
    A request for strict tool isolation between the main agent and subagents to improve manageability and security. Currently, there is no boundary preventing subagents from accessing tools defined for the main agent.

7.  **Guided Compression** [#21892](https://github.com/google-gemini/gemini-cli/issues/21892)
    Proposes enhancing the `/compress` command to accept user prompts (e.g., "Retain the SQL query"), ensuring that aggressive summarization doesn't discard critical context currently in focus.

8.  **CLI Scrolling to Top on Click** [#22028](https://github.com/google-gemini/gemini-cli/issues/22028)
    A specific bug in the VS Code terminal integration where clicking anywhere in the window forces the CLI scroll position to jump to the top, disrupting the reading of long outputs.

9.  **Suspicious Policy Warnings** [#21596](https://github.com/google-gemini/gemini-cli/issues/21596)
    A safety feature request to warn users if they configure "obviously unwise" policies, such as auto-approving `rm` commands, preventing accidental data loss by novice users configuring `settings.json`.

10. **Agent "Self-Awareness"** [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)
    An interesting feature request to ensure the Gemini CLI agent understands its own mechanics (flags, hotkeys) enough to guide users, effectively acting as its own documentation expert.

## 4. Key PR Progress

1.  **Security Fix: Policy Engine & Regex Anchoring** [#22104](https://github.com/google-gemini/gemini-cli/pull/22104)
    **Closed.** A critical security patch that fixes an argument injection vulnerability via unanchored regex in `argsPattern`. It also reverts an escalation issue with `WEB_FETCH_TOOL_NAME`.

2.  **User-Agent Differentiation** [#22059](https://github.com/google-gemini/gemini-cli/pull/22059)
    **Closed.** Implements a hybrid User-Agent header strategy to distinguish traffic from `a2a-server` and ACP clients, improving telemetry for enterprise customers.

3.  **Feature: Profiles System** [#22091](https://github.com/google-gemini/gemini-cli/pull/22091)
    **Closed.** Introduces a robust "Profiles" feature, allowing users to maintain named configurations with specific extensions, models, and personas (system instructions).

4.  **Feat: Auto-Distillation for Tool Output** [#21976](https://github.com/google-gemini/gemini-cli/pull/21976)
    **Open.** Implements the logic requested in Issue #21889, using a lightweight model to filter "signal from noise" in large tool outputs before context injection.

5.  **Concurrent Safe Tool Execution** [#21988](https://github.com/google-gemini/gemini-cli/pull/21988)
    **Open.** Adds support for `isSafeConcurrent` flags in slash commands, allowing specific safe tools to execute immediately even while the main agent loop is busy.

6.  **UI Fix: Settings Dialog Glitches** [#22105](https://github.com/google-gemini/gemini-cli/pull/22105)
    **Closed.** Adjusts the search section height calculation in the settings dialog to prevent list overflow and scroll glitches on Windows terminals.

7.  **Docs: Clarify `tools.core` Allowlist** [#18813](https://github.com/google-gemini/gemini-cli/pull/18813)
    **Open.** A documentation update clarifying that `tools.core` acts as an allowlist for *all* built-in tools, not just shell commands, addressing user configuration confusion.

8.  **MCP Tool FQN Validation Fix** [#22069](https://github.com/google-gemini/gemini-cli/pull/22069)
    **Open.** Resolves an issue where subagents rejected standard MCP Fully Qualified Names (FQNs) due to outdated validation logic preferring legacy formats.

9.  **Voice Waveform Visualizer** [#21115](https://github.com/google-gemini/gemini-cli/pull/21115)
    **Open.** Adds an animated Ink component for voice mode, providing visual feedback (rippling bars) for listening, processing, and speaking states.

10. **Display Pending Tool Calls** [#22106](https://github.com/google-gemini/gemini-cli/pull/22106)
    **Open.** Improves UX by ensuring tool calls are visible immediately after approval and filters noise from the thinking process display.

## 5. Feature Request Trends

*   **Context Management & Compression:** There is a massive trend toward "smart context." Requests include *Guided Compression* (user-directed summarization), *Auto-Distillation* (AI filtering of tool outputs), and *History Pruning* (removing stale file content).
*   **Session Longevity:** Developers want "checkpoints" that support long-term sessions without losing context, moving toward persistent, resumable agent states (Issue #21920).
*   **Subagent Architecture:** A clear trend toward defining boundaries, specifically *Tool Isolation* for subagents and better management of subagent "self-awareness" and memory.
*   **Enterprise & Safety:** Requests for better policy guards (warning against unsafe configs) and better identification of agent traffic via User-Agents.

## 6. Developer Pain Points

*   **Terminal UI Flicker & Scroll:** Users are experiencing significant "flicker" during terminal resizing and annoying auto-scroll behavior in VS Code, indicating performance issues in the Ink-based TUI rendering engine.
*   **Shell Environment Gaps:** The inability to use standard shell aliases (e.g., `.bash_profile`) inside the CLI restricts developers from using their optimized workflows.
*   **Policy Complexity:** Users find the policy configuration powerful but dangerous; accidental `allow` rules for destructive commands are easy to create, prompting requests for "guard rails" in the config itself.
*   **Notification False Positives:** The "Action Required" indicator triggers erroneously during long processes, breaking trust with the notification system.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
Version 1.0.4 was released today, introducing significant observability and UI enhancements. Key additions include **OpenTelemetry instrumentation** for monitoring agent sessions and a new **Adaptive Color Engine** with an interactive theme picker that gracefully degrades on limited terminals. Developers can now also execute shell commands via new RPC methods (`session.shell.exec`/`kill`) with streaming output support.

## 2. Releases

### **v1.0.4** (2026-03-11)
[View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.4)

This release aggregates several improvements rolled out in pre-releases:
*   **New:** OpenTelemetry instrumentation for observability into LLM calls and tool executions.
*   **New:** Adaptive color engine with dynamic modes and an interactive theme picker.
*   **Added:** `session.shell.exec` and `session.shell.kill` RPC methods for shell command execution with streaming stdout/stderr.
*   **Improved:** The `/pr open` command is now `/pr view [local|web]`.
*   **Fixed:** Custom agents from `--plugin-dir` now load correctly in ACP mode.
*   **Added:** Support for extensions written as CommonJS modules (`extension.cjs`) and a `disableAllHooks` flag.

## 3. Hot Issues

1.  **[#1202 Screen Flickering on Windows](https://github.com/github/copilot-cli/issues/1202)**
    *   **Why it matters:** A high-impact visual bug causing the terminal screen to flash and fill the buffer with artifacts when selecting specific options in Windows Terminal/PowerShell.
    *   **Reaction:** 31 comments; users are actively troubleshooting terminal escape sequence handling.

2.  **[#33 OAuth for MCP Servers](https://github.com/github/copilot-cli/issues/33)** [CLOSED]
    *   **Why it matters:** High-demand request (104 👍) for supporting OAuth-authenticated remote MCP servers (e.g., Figma, Atlassian).
    *   **Reaction:** Closed after significant discussion, likely addressed in recent auth updates.

3.  **[#1595 Enterprise Access Denial](https://github.com/github/copilot-cli/issues/1595)**
    *   **Why it matters:** Enterprise users with valid subscriptions are locked out of models via CLI, receiving "access denied by Copilot policy" despite policies being correct.
    *   **Reaction:** 15 comments; suggests a policy synchronization or interpretation bug between CLI and Enterprise settings.

4.  **[#1703 Missing Org-Enabled Models](https://github.com/github/copilot-cli/issues/1703)**
    *   **Why it matters:** CLI fails to list models (like Gemini 3.1 Pro) that are visible and enabled in VS Code for the same organization.
    *   **Reaction:** 16 👍; indicates a discrepancy in how the CLI fetches model lists compared to the VS Code extension.

5.  **[#1284 Arrow Keys Literal Output](https://github.com/github/copilot-cli/issues/1284)**
    *   **Why it matters:** Arrow keys output `A`, `B`, `C`, `D` instead of navigating history, breaking basic terminal usability.
    *   **Reaction:** Users report this occurs mid-session, suggesting a state corruption or raw mode issue.

6.  **[#1754 HTTP/2 GOAWAY & Assertion Error](https://github.com/github/copilot-cli/issues/1754)**
    *   **Why it matters:** Deep system crash during retrospectives involving HTTP/2 connection pooling (undici) and assertion failures.
    *   **Reaction:** 9 👍; critical failure during complex agent operations.

7.  **[#1972 Configurable Submit Key (IME Support)](https://github.com/github/copilot-cli/issues/1972)**
    *   **Why it matters:** CJK users experience accidental prompt submission because `Enter` is used for both IME confirmation and sending messages.
    *   **Reaction:** 27 👍; strong demand for `Ctrl+Enter` or similar alternatives to decouple submission from confirmation.

8.  **[#1241 Screenshot Paste Failure](https://github.com/github/copilot-cli/issues/1241)**
    *   **Why it matters:** The "paste screenshot" feature fails silently on Windows with common tools like SnagIt/Snipping Tool.
    *   **Reaction:** Users confirm the feature is currently non-functional in PowerShell.

9.  **[#1974 Unclickable Markdown Links](https://github.com/github/copilot-cli/issues/1974)**
    *   **Why it matters:** Regression in v1.0.3 where generated markdown links in the terminal are no longer clickable.
    *   **Reaction:** Impacts navigation efficiency for users relying on link outputs.

10. ** [#892 Sandbox Mode](https://github.com/github/copilot-cli/issues/892)**
    *   **Why it matters:** Request for a security sandbox to restrict the agent's file system access to a specific working directory.
    *   **Reaction:** 18 👍; critical for enterprise adoption and safe agentic coding.

## 4. Key PR Progress

1.  **[#1968 Retry Install without Token](https://github.com/github/copilot-cli/pull/1968)** [OPEN]
    *   **Summary:** Improves the installation script to handle SAML/SSO failures. If an authenticated request fails, it automatically retries without a token for public repo access.
2.  **[#1365 Prerelease & Terminal Fixes](https://github.com/github/copilot-cli/pull/1365)** [CLOSED]
    *   **Summary:** Fixed prerelease tag filtering logic and simplified terminal detection in `install.sh`.

*(Note: Only 2 PRs were updated in the last 24 hours.)*

## 5. Feature Request Trends

*   **User Interface/UX Control:** Strong requests for granular control over the TUI, including disabling the new "alt-screen" views ([#1799](https://github.com/github/copilot-cli/issues/1799)) and configuring submit keys to support IME input ([#1972](https://github.com/github/copilot-cli/issues/1972)).
*   **Security & Sandboxing:** Continued demand for a "sandbox mode" to restrict file system operations ([#892](https://github.com/github/copilot-cli/issues/892)) and "user-level hooks" for lifecycle management ([#1067](https://github.com/github/copilot-cli/issues/1067)).
*   **Tooling & Integration:** Users want feature parity with VS Code, specifically regarding the visibility of `.github/prompts` ([#1895](https://github.com/github/copilot-cli/issues/1895)) and better handling of background processes/servers ([#1033](https://github.com/github/copilot-cli/issues/1033)).
*   **Observability:** Requests for visibility into billing/usage, specifically displaying premium request overages ([#1881](https://github.com/github/copilot-cli/issues/1881)).

## 6. Developer Pain Points

*   **Enterprise Policy Sync:** A recurring frustration where CLI clients misinterpret Copilot policies, resulting in "Access Denied" errors ([#1595](https://github.com/github/copilot-cli/issues/1595), [#1976](https://github.com/github/copilot-cli/issues/1976)) or missing models ([#1703](https://github.com/github/copilot-cli/issues/1703)).
*   **Terminal Compatibility:** Frequent issues with terminal escape sequences and raw mode, manifesting as flickering screens ([#1202](https://github.com/github/copilot-cli/issues/1202)), broken arrow keys ([#1284](https://github.com/github/copilot-cli/issues/1284)), and broken scrolling in Windows ([#1944](https://github.com/github/copilot-cli/issues/1944)).
*   **Model/Session Persistence:** Settings like model selection (`gpt-5-mini`) revert to defaults after closing the CLI ([#1869](https://github.com/github/copilot-cli/issues/1869)).
*   **Network & Rate Limits:** Unauthenticated update checks hitting rate limits ([#1230](https://github.com/github/copilot-cli/issues/1230)) and complex HTTP/2 connection failures during agent tasks ([#1754](https://github.com/github/copilot-cli/issues/1754)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest - 2026-03-12

## 1. Today's Highlights
Version **1.20.0** has landed, introducing a persistent **Plan Mode** in the Web UI and resolving critical HTTP header pollution issues affecting Linux users. The team has significantly bolstered the platform's stability with fixes for context compaction errors and established new **Playwright E2E testing infrastructure** to prevent future UI regressions. Concurrently, the community is actively discussing multi-agent rate limits and WebUI reliability.

## 2. Releases

### **v1.20.0**
This release focuses on Web UI enhancements and platform stability.
*   **New Features:** Added a **Plan Mode toggle** in the Web UI with state persistence across sessions.
*   **Bug Fixes:**
    *   **Web:** Fixed stale `@` file mention indices when switching sessions ([#1385](https://github.com/MoonshotAI/kimi-cli/pull/1385)).
    *   **Compaction:** Filtered media parts during context compaction to prevent `400 Bad Request` errors ([#1398](https://github.com/MoonshotAI/kimi-cli/pull/1398)).
    *   **Linux:** Patched HTTP header issues potentially causing connection failures.

## 3. Hot Issues

1.  **[#1383] [BUG] Multi-Agent Rate Limits**
    *   **Why:** Users hitting limits when running two agents simultaneously despite "multi-agent" membership claims.
    *   **Reaction:** Users are confused about specific rate limits for concurrent "crayfish" (agents).
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1383)

2.  **[#1389] [BUG] HTTP Headers Pollution on Linux**
    *   **Why:** Linux kernel version strings (containing `#`) were leaking into HTTP headers, causing connection errors.
    *   **Reaction:** Critical for Linux users; resolved by PR #1410.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1389)

3.  **[#1409] [BUG] Web Mode Port Switching & Refresh Loop**
    *   **Why:** The `/web` command connects to different ports and refreshes indefinitely in v1.20.0.
    *   **Reaction:** High priority for users relying on the browser interface.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1409)

4.  **[#1404] [BUG] Reckless Behavior**
    *   **Why:** Reports of the agent making plans and executing actions prematurely without user confirmation.
    *   **Reaction:** Raises safety concerns regarding autonomous execution.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1404)

5.  **[#1070] [BUG] Login Failure (Network Unreachable)**
    *   **Why:** Persistent issue connecting to `auth.kimi.com:443`.
    *   **Reaction:** Ongoing troubleshooting for network/SSL environments.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1070)

6.  **[#1381] [ENHANCEMENT] Request for `/plan` and `/spec` commands**
    *   **Why:** Users want explicit commands for planning and specification similar to the "trae" tool.
    *   **Reaction:** Reflects demand for structured workflow commands.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1381)

7.  **[#1395] [BUG] Invalid `video_url` Part Type**
    *   **Why:** API rejected messages containing video attachments during specific operations.
    *   **Reaction:** Identifies gaps in multimodal support handling.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1395)

8.  **[#1390] [BUG] Error with Video Attachment**
    *   **Why:** Similar to #1395, users uploading videos received LLM provider errors.
    *   **Reaction:** Highlights need for robust media validation.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/issues/1390)

9.  **[#1375] [Implied] File Mention Autocomplete Failures** (Referenced in PR #1403)
    *   **Why:** In large repos, the `@` completer failed to find files in alphabetically later directories (e.g., `tests/`).
    *   **Reaction:** Major UX improvement for large monorepos.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1403)

10. **[#884] [MAINTENANCE] Bump Ruff**
    *   **Why:** Dependency maintenance to keep the linter updated.
    *   **Reaction:** Standard housekeeping.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/884)

## 4. Key PR Progress

1.  **[#1408] Chore: Bump v1.20.0** [CLOSED]
    *   Finalizes the release of v1.20.0 and updates the `kosong` dependency to v0.45.0.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1408)

2.  **[#1406] Feat(web): Plan Mode Toggle** [CLOSED]
    *   Implements a UI toggle for Plan Mode in the prompt toolbar and propagates state via backend events.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1406)

3.  **[#1410] Fix: Strip HTTP-Unsafe Characters** [OPEN]
    *   Prevents Linux kernel version strings (e.g., `#101~...`) from breaking HTTP headers.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1410)

4.  **[#1411] Fix(ui): Correct Usage Bar Color Logic** [OPEN]
    *   Fixes a UI bug where high resource usage appeared green and low usage appeared red.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1411)

5.  **[#1402] Feat(vis): Session Import/Export** [CLOSED]
    *   Adds full support for downloading, importing, and exporting sessions as ZIP files.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1402)

6.  **[#1405] Feat(web): Playwright E2E Tests** [OPEN]
    *   Establishes a robust E2E testing framework to catch regressions in the Web UI.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1405)

7.  **[#1403] Fix(shell): Scope File-Mention Walk** [OPEN]
    *   Optimizes `@` file completion to walk relative to the typed directory prefix, fixing lag in large projects.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1403)

8.  **[#1407] Fix(ui): API Rate Limit (429) Handling** [OPEN]
    *   Adds user-friendly error messages for rate limits instead of generic connection errors.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1407)

9.  **[#1399] Refactor(soul): Dynamic Injection** [CLOSED]
    *   Refactors the attachment system to `DynamicInjection` and adds provider error isolation.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1399)

10. **[#1358] Fix(llm): Reasoning-Effort Handling** [CLOSED]
    *   Corrects logic for OpenAI Responses providers to prevent implicit reasoning shutdowns.
    *   [Link](https://github.com/MoonshotAI/kimi-cli/pull/1358)

## 5. Feature Request Trends
*   **Structured Workflow Commands:** Users are requesting distinct `/plan` and `/spec` commands to separate architectural planning from coding, indicating a desire for more controllable, step-by-step agentic workflows.
*   **Enhanced Session Portability:** The introduction of session import/export in PR #1402 addresses the growing need for developers to share context states or archive complex debugging sessions.

## 6. Developer Pain Points
*   **Linux Compatibility:** Developers on Linux (specifically Ubuntu variants) faced "Network Unreachable" errors due to unsanitized system version strings leaking into HTTP headers.
*   **Rate Limit Opacity:** Confusion regarding "Multi-Agent" subscription limits suggests that the current error messaging or documentation around concurrent API usage is insufficient for power users.
*   **Web Mode Stability:** The WebUI suffers from connection and refreshing issues, indicating that the bridge between the local CLI and the browser interface remains a fragile component for some environments.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-12

## 1. Today's Highlights

No new releases shipped today, but the community remains highly active with critical bug reports and feature discussions. The most pressing concerns involve **compaction failures** causing agent stops, **TUI rendering issues** on Windows and macOS, and **token limit handling** for Opus 4.6. On the positive side, significant PR progress was made on **PowerShell support**, **session lifecycle management**, and **MCP server mode**—all nearing merge readiness.

---

## 2. Releases

No releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#11112](https://github.com/anomalyco/opencode/issues/11112) — "Preparing write..." stuck** | 40 comments. A critical UX blocker where the agent hangs indefinitely during file writes. PR [#16024](https://github.com/anomalyco/opencode/pull/16024) proposes a fix by showing streaming progress. |
| 2 | **[#4140](https://github.com/anomalyco/opencode/issues/4140) — Black screen on TUI v1.0.47+** | 36 comments. A regression rendering the TUI unusable for users on newer versions; many are pinned to v1.0.46. |
| 3 | **[#1764](https://github.com/anomalyco/opencode/issues/1764) — Vim motions in input box** | 112 👍, 30 comments. Highly requested feature for power users. Community actively discussing implementation approaches. |
| 4 | **[#12338](https://github.com/anomalyco/opencode/issues/12338) — Opus 4.6 1M token limit** | 26 comments. Users hitting the 200k token ceiling despite "zen" mode claims. Exposes confusion around context limits. |
| 5 | **[#7602](https://github.com/anomalyco/opencode/issues/7602) — Model fallback/failover support** | 49 👍, 16 comments. Long-running agents fail without automatic fallback between different models—a critical reliability feature. |
| 6 | **[#12687](https://github.com/anomalyco/opencode/issues/12687) — macOS kernel panic from memory leak** | 12 comments. Severe resource management issue causing system instability during intensive use. |
| 7 | **[#13217](https://github.com/anomalyco/opencode/issues/13217) — Agent stops after compaction** | 12 👍, 9 comments. Frequent mid-task stops post-compaction. PR [#16073](https://github.com/anomalyco/opencode/pull/16073) addresses this. |
| 8 | **[#8751](https://github.com/anomalyco/opencode/issues/8751) — Hot-reload agents/skills/commands** | 24 👍, 12 comments. Would enable rapid iteration without restarting OpenCode. |
| 9 | **[#16878](https://github.com/anomalyco/opencode/issues/16878) — Old sessions cannot be loaded** | 10 comments. Session list appears empty; data loss concern for users upgrading. |
| 10 | **[#16847](https://github.com/anomalyco/opencode/issues/16847) — Proxy support for API calls** | 4 comments. Users in restricted network regions (e.g., mainland China) need proxy configuration for API traffic. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | **[#16069](https://github.com/anomalyco/opencode/pull/16069) — PowerShell support** | Adds first-class `pwsh`/`powershell` support on Windows, replacing Git Bash dependencies with native filesystem helpers. |
| 2 | **[#16201](https://github.com/anomalyco/opencode/pull/16201) — Session lifecycle management** | Introduces storage reclamation, CLI commands, and VACUUM support for session cleanup. |
| 3 | **[#16073](https://github.com/anomalyco/opencode/pull/16073) — Fix compaction continuation** | Prevents agents from stopping after compaction by improving continuation logic. |
| 4 | **[#16024](https://github.com/anomalyco/opencode/pull/16024) — Streaming progress for large writes** | Shows real-time progress instead of static "Preparing write..." for 100KB+ file operations. |
| 5 | **[#6452](https://github.com/anomalyco/opencode/pull/6452) — MCP server mode** | Enables `opencode mcp serve` to expose custom tools via stdio for external MCP clients. **Merged.** |
| 6 | **[#11217](https://github.com/anomalyco/opencode/pull/11217) — Per-subtask model overrides** | Allows `@agent:provider/model` syntax for subagent model selection with TUI autocomplete. |
| 7 | **[#15710](https://github.com/anomalyco/opencode/pull/15710) — Fullscreen local diff viewer** | Adds a dedicated diff viewer dialog with fast file-to-file navigation in TUI. |
| 8 | **[#13854](https://github.com/anomalyco/opencode/pull/13854) — Fix markdown streaming on completed messages** | Derives streaming state from `message.time.completed` to render all table rows correctly. |
| 9 | **[#16686](https://github.com/anomalyco/opencode/pull/16686) — Reuse open project root for nested folders** | Prevents duplicate project entries when opening nested child folders. |
| 10 | **[#17106](https://github.com/anomalyco/opencode/pull/17106) — Refactor ID parsing with branded types** | Replaces manual ID construction with `.parse()` at boundaries for better type safety. |

---

## 5. Feature Request Trends

1. **Vim/Emacs keybindings in input fields** — Consistently high demand (112 👍 on [#1764](https://github.com/anomalyco/opencode/issues/1764)). Users want familiar editing paradigms.
2. **Native model fallback/failover** — Automatic switching between models when rate-limited or errored ([#7602](https://github.com/anomalyco/opencode/issues/7602)).
3. **Hot-reload for configs/agents/skills** — Developer productivity boost by avoiding restarts ([#8751](https://github.com/anomalyco/opencode/issues/8751)).
4. **Proxy/network configuration** — Fine-grained proxy support for API calls in restricted networks ([#16847](https://github.com/anomalyco/opencode/issues/16847), [#12083](https://github.com/anomalyco/opencode/issues/12083)).
5. **Shell tab completions** — bash/fish/zsh completion scripts for CLI integration ([#1515](https://github.com/anomalyco/opencode/issues/1515), 26 👍).
6. **Improved diff display options** — Collapsed/minimal diff view for large files ([#9089](https://github.com/anomalyco/opencode/issues/9089)).

---

## 6. Developer Pain Points

| Category | Summary |
|----------|---------|
| **Compaction reliability** | Agents stopping mid-task after compaction is a frequent complaint ([#13217](https://github.com/anomalyco/opencode/issues/13217), [#13533](https://github.com/anomalyco/opencode/issues/13533)). |
| **Windows TUI stability** | Black screens, screen bugs, and symlink issues plague Windows users ([#4140](https://github.com/anomalyco/opencode/issues/4140), [#3541](https://github.com/anomalyco/opencode/issues/3541), [#16647](https://github.com/anomalyco/opencode/issues/16647)). |
| **Memory/resource management** | Severe memory leaks leading to kernel panics on macOS during intensive use ([#12687](https://github.com/anomalyco/opencode/issues/12687)). |
| **Session persistence** | Lost or unloadable sessions after upgrades ([#16878](https://github.com/anomalyco/opencode/issues/16878)). |
| **Large file handling UX** | "Preparing write..." stuck for minutes without feedback ([#11112](https://github.com/anomalyco/opencode/issues/11112)). |
| **Plugin hook reliability** | `experimental.chat.system.transform` mutations silently discarded ([#17100](https://github.com/anomalyco/opencode/issues/17100)). |
| **Token limit clarity** | Confusion around Opus 4.6's 1M token claims vs. actual 200k limits ([#12338](https://github.com/anomalyco/opencode/issues/12338)). |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-03-12

## 1. Today's Highlights
The community is buzzing with the release of **v0.12.1**, which brings critical fixes for MCP authentication (RFC 9728 compliance) and CLI stability. A significant portion of user reports today focuses on **Windows platform stability**, specifically regarding input handling (space key issues), PowerShell UI flickering, and file operation failures. Meanwhile, the core team is aggressively iterating on the next version, with **v0.12.2 already in the release pipeline** and major architectural PRs—such as a new permission system and event hooks—under active review.

## 2. Releases

### **v0.12.1 (Stable)**
This stable release focuses on protocol compliance and UX cleanup.
*   **MCP Scopes Fix:** Updated to use scopes from protected resource metadata per **RFC 9728** ([PR #2212](https://github.com/QwenLM/qwen-code/pull/2212)).
*   **CLI Cleanup:** Fixed static error messages persisting when starting a new query ([PR #2110](https://github.com/QwenLM/qwen-code/pull/2110)).

### **v0.12.1-nightly.20260312**
*   **Session Export Fix:** Corrected the `/export` command to reference the current active session ID rather than defaulting to the last loaded session ([PR #2268](https://github.com/QwenLM/qwen-code/pull/2268)).

---

## 3. Hot Issues

1.  **[#2101 Critical Input Bug: Space Key Unresponsive](https://github.com/QwenLM/qwen-code/issues/2101)**
    *   **Context:** Users on Windows (v0.11.1) report being unable to type spaces in the input field. This fundamentally breaks the tool's usability for composing prompts.
    *   **Reaction:** High engagement (10 comments, 5 thumbs up). Users are frustrated as this blocks basic interaction.

2.  **[#2191 API Throttling Errors (429 Too Many Requests)](https://github.com/QwenLM/qwen-code/issues/2191)**
    *   **Context:** Users are hitting "THROTTLING.userQpsLimit" errors during WebSearch via DashScope, persisting for over 3 days.
    *   **Reaction:** Users are questioning the free tier limits and current QPS quotas, indicating a need for clearer rate limit documentation or handling.

3.  **[#2229 File Operations Fail on Windows 11](https://github.com/QwenLM/qwen-code/issues/2229)**
    *   **Context:** Basic file operations (read/write) fail on Win11 v0.12.0, even when specifying git bash. This suggests a regression in Windows compatibility.
    *   **Reaction:** Reports of "impossible to work with" states. *Note: This issue was closed, likely fixed by recent patches.*

4.  **[#2049 Config Override on Missing OLLAMA_API_KEY](https://github.com/QwenLM/qwen-code/issues/2049)**
    *   **Context:** If `OLLAMA_API_KEY` isn't exported, the startup process overwrites `security.auth.selectedType` in `settings.json`, breaking user configurations.
    *   **Reaction:** Concerns about config stability and environment variable handling.

5.  **[#1870 Missing Sidebar Options in VS Code](https://github.com/QwenLM/qwen-code/issues/1870)**
    *   **Context:** Users cannot move the Qwen Chat panel to the secondary sidebar, limiting workspace customization.
    *   **Reaction:** A common UX request for better IDE integration flexibility.

6.  **[#2306 Crash on Permission Execution](https://github.com/QwenLM/qwen-code/issues/2306)**
    *   **Context:** A regression in v0.12.0 causes the CLI to crash completely when a user selects "Always Allow" for a command execution permission.
    *   **Reaction:** Critical bug causing immediate workflow interruption.

7.  **[#1985 Request for "Plan Mode" in VSCode Companion](https://github.com/QwenLM/qwen-code/issues/1985)**
    *   **Context:** The VSCode extension lacks the "Plan Mode" available in the CLI (accessible via Shift+Tab).
    *   **Reaction:** Users want feature parity between the CLI and IDE extensions.

8.  **[#2201 Read Tool Stuck in Loop](https://github.com/QwenLM/qwen-code/issues/2201)**
    *   **Context:** The agent gets stuck repeatedly reading the first 100-300 lines of a file instead of the target section.
    *   **Reaction:** Users are manually intervening to stop the loop; indicates an agent logic issue.

9.  **[#2122 Input Only Accepts Combined Characters (Linux)](https://github.com/QwenLM/qwen-code/issues/2122)**
    *   **Context:** On Ubuntu server, the CLI input field rejects separate characters, only accepting them if typed "connected" (or pasted).
    *   **Reaction:** Similar to the Windows space key issue, pointing to cross-platform terminal input handling bugs.

10. **[#1951 Clipboard Image Support](https://github.com/QwenLM/qwen-code/issues/1951)**
    *   **Context:** Users want to paste screenshots directly from the clipboard into the chat, rather than saving and uploading files.
    *   **Reaction:** Highly requested UX improvement for multimodal workflows.

---

## 4. Key PR Progress

1.  **[PR #2307] Release v0.12.2**
    *   **Status:** Open
    *   **Impact:** Version bump preparing for the next patch release, likely aggregating the fixes seen in recent PRs.

2.  **[PR #2311] Fix: OAuth UI Flickering on Windows**
    *   **Status:** Open
    *   **Impact:** Removes the QR code from the OAuth UI to stop severe screen flickering in Windows PowerShell caused by high-frequency re-renders.

3.  **[PR #2283] Feat: Structured Permission System**
    *   **Status:** Open
    *   **Impact:** Introduces a rule-based permission system (e.g., `Bash(git *)`, `Read(./secrets/**)`) to replace simple allow/deny lists, offering fine-grained agent control.

4.  **[PR #2203] Feat: 10 Core Event Hooks**
    *   **Status:** Open
    *   **Impact:** Implements hooks for session lifecycle, tool execution, and subagent operations, enabling advanced extensibility and automation.

5.  **[PR #2300] Fix: Path Corruption in Qwen3.5 Models**
    *   **Status:** Open
    *   **Impact:** Fixes an issue where specific models inserted spaces into file paths mixing Chinese and Latin characters, causing file operation failures.

6.  **[PR #2305] Fix: VSCode Path Validation**
    *   **Status:** Open
    *   **Impact:** Adds validation to the ACP `writeTextFile` handler to prevent errors when creating new files in VS Code.

7.  **[PR #2308] Fix: Tab Key Support in Completion Menu**
    *   **Status:** Open
    *   **Impact:** Allows users to press `Tab` to select completion items (commands/files) in the WebUI, standardizing autocomplete behavior.

8.  **[PR #2288] Feat: AI Tool Config Migration Skill**
    *   **Status:** Open
    *   **Impact:** Adds a `migrate-to-qwen` skill to help users port configurations from other AI coding assistants (e.g., Cursor, Copilot) to Qwen Code.

9.  **[PR #2211] Fix: Block Tab Key During Streaming**
    *   **Status:** Closed (Merged)
    *   **Impact:** Prevents users from accidentally switching approval modes by pressing `Tab` while the AI is streaming a response.

10. **[PR #2130] Fix: Kitty Terminal Input**
    *   **Status:** Closed (Merged)
    *   **Impact:** Restores space and printable key input for terminals using Kitty CSI-u sequences (fixes Linux/terminal specific input bugs).

---

## 5. Feature Request Trends

*   **IDE Integration Parity:** Users are clamoring for the VS Code extension to match CLI capabilities, specifically requesting **Plan Mode** toggling and flexible panel positioning (secondary sidebar support).
*   **Multimodal Inputs:** There is a strong trend toward native **clipboard support for images**, moving away from file-upload workflows to streamline visual debugging.
*   **Advanced Permission Control:** Developers want granular control over agent autonomy. The trend is shifting from simple "allow/deny" lists to **scoped permissions** (e.g., allowing `git` commands but blocking `rm`, or restricting file reads to specific directories).
*   **Session Management:** Requests for better control over chat history, specifically the ability to **bulk delete or manage CLI chat logs** to reduce clutter.

## 6. Developer Pain Points

*   **Cross-Platform Input Instability:** The most significant pain point today is **keyboard input failure**. Whether it is the space key on Windows (#2101) or character input on Ubuntu (#2122), developers are blocked from basic interaction.
*   **Windows Compatibility:** Beyond input, Windows users face specific hurdles like **PowerShell UI flickering** (#2311), symlink permission errors during installation, and file operation crashes.
*   **Agent Reliability:** Developers report frustration with **looping behaviors** (Read tool loops #2201) and **regressive crashes** during routine permissions (#2306), which erode trust in the agent's autonomy.

</details>