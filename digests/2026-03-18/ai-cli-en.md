# AI CLI Tools Community Digest 2026-03-18

> Generated: 2026-03-17 22:06 UTC | Tools covered: 7

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
**Report Date:** 2026-03-18

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation with a clear shift from basic code generation toward autonomous agentic workflows. All major players are investing heavily in memory subsystems, execution sandboxing, and Model Context Protocol (MCP) integration to enable persistent, multi-step development tasks. The ecosystem shows growing pains typical of this transition: API reliability issues are widespread across providers, enterprise authentication requirements are exposing architectural gaps, and Windows platform support remains a consistent second-class concern. Competition is intensifying around context window management as models support larger contexts (up to 1M tokens), creating cost-control challenges that all tools are scrambling to address.

---

## 2. Activity Comparison

| Tool | Open Issues Mentioned | PRs/Releases Active | Latest Release | Release Frequency |
|------|----------------------|---------------------|----------------|-------------------|
| **Claude Code** | 10 | 7 PRs + v2.1.77 | v2.1.77 (today) | High (weekly+) |
| **OpenAI Codex** | 10 | 10 PRs + 3 alphas | rust-v0.116.0-alpha.3 (today) | Very High (multiple/day during alpha) |
| **Gemini CLI** | 10 | 10 PRs + 2 releases | v0.35.0-preview.1 (today) | High (preview channel) |
| **GitHub Copilot CLI** | 10 | 0 new PRs | v1.0.7 (yesterday) | Moderate (weekly) |
| **Kimi Code CLI** | 10 | 10 PRs + v1.23.0 | v1.23.0 (today) | High |
| **OpenCode** | 10 | 10 PRs | None (no release) | Moderate |
| **Qwen Code** | 10 | 10 PRs + v0.12.6 | v0.12.6 (today) | High |

**Notable:** OpenAI Codex shows the most aggressive iteration with 3 alpha releases in one day, while OpenCode had no releases but substantial PR activity indicating upcoming changes.

---

## 3. Shared Feature Directions

### 3.1 Context & Memory Management
| Requirement | Tools | Specific Needs |
|-------------|-------|----------------|
| **Configurable context limits** | Claude Code, OpenCode, Qwen Code, Gemini CLI | User-controlled caps to manage costs; sliding window vs. truncation |
| **Persistent agent memory** | Gemini CLI, OpenCode, Kimi Code | Structured memory layers distinguishing global preferences from project context |
| **Context visibility tools** | Gemini CLI (`/context`), Qwen Code (token display) | Real-time monitoring of context window consumption |

### 3.2 Execution Architecture
| Requirement | Tools | Specific Needs |
|-------------|-------|----------------|
| **Background/async task execution** | Kimi Code, OpenAI Codex | Detached processes for long-running operations |
| **Sandboxing improvements** | OpenAI Codex (Bubblewrap), Claude Code (`allowRead`) | Secure isolation with granular filesystem permissions |
| **Remote execution support** | OpenAI Codex, OpenCode | SSH/container-based development workflows |

### 3.3 Enterprise Integration
| Requirement | Tools | Specific Needs |
|-------------|-------|----------------|
| **Pre-configured OAuth (non-DCR)** | Claude Code, GitHub Copilot CLI | Azure AD, Okta compatibility without Dynamic Client Registration |
| **MCP policy enforcement** | GitHub Copilot CLI, OpenCode | Organization-level allowlists for enterprise deployment |
| **Proxy/network configuration** | Kimi Code, Qwen Code | Corporate proxy support via environment variables |

### 3.4 Local Model Integration
| Requirement | Tools | Specific Needs |
|-------------|-------|----------------|
| **Auto-discovery for local providers** | OpenCode, Qwen Code | LM Studio, llama.cpp, Ollama integration via OpenAI-compatible APIs |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Qwen Code |
|-----------|-------------|--------------|------------|-------------------|-----------|----------|-----------|
| **Primary Model** | Opus 4.6 / Sonnet 4.6 | GPT-5.3-Codex | Gemini 3 Pro | Multi-model (GPT-5.4-mini added) | Moonshot models | Agnostic | Qwen models |
| **Context Window** | 1M (Max) / 200K | Standard | Standard | Standard | Standard | Standard | Standard |
| **Target User** | Power users, enterprises | Cross-platform developers | Google ecosystem developers | GitHub-integrated teams | Chinese market, general | Open-source enthusiasts | Chinese market, VS Code users |
| **Architecture Focus** | Plugin marketplace, sandboxing | Rust rewrite, exec-server | Spec-driven development, AST tooling | SDK extensibility, accessibility | Background tasks, Web UI | Local models, provider flexibility | IDE integration, parallel execution |
| **Unique Strength** | Largest context (128K output) | Rapid Rust iteration | Memory subsystem design | GitHub native integration | Async notifications | Agnostic model support | Skill testing framework |
| **Geographic Focus** | Global | Global | Global | Global | China/Asia | Global | China/Asia |

**Key Differentiators:**
- **Claude Code**: Leading on context window size (128K output, 1M context) but suffering from subscription value perception issues
- **OpenAI Codex**: Most aggressive technical refactoring (Rust rewrite, exec-server separation) for architectural cleanliness
- **Gemini CLI**: Pioneering structured memory hierarchies and AST-aware code manipulation
- **GitHub Copilot CLI**: Best GitHub ecosystem integration but lagging on customization features
- **Kimi Code**: Strong on async/background execution and notification infrastructure
- **OpenCode**: Most flexible model provider support (local model auto-discovery)
- **Qwen Code**: Leading on skill testing frameworks and parallel tool execution

---

## 5. Community Momentum & Maturity

### Activity Levels (High → Low)
1. **OpenAI Codex** — Highest velocity with 3 alpha releases/day and 10 active PRs; indicates aggressive pre-release iteration
2. **Gemini CLI** — Strong momentum on memory/memory subsystem overhauls; preview channel releasing frequently
3. **Claude Code** — High engagement but dominated by complaint threads (1,245 comments on top issue); stable release cadence
4. **Kimi Code** — Active development with 15+ PRs; focused on platform stability
5. **Qwen Code** — Consistent releases; strong IDE integration focus
6. **OpenCode** — Moderate release frequency but active PR pipeline on local model support
7. **GitHub Copilot CLI** — Lowest public PR visibility; enterprise-focused development may be private

### Maturity Indicators
| Tool | Stability | Enterprise Readiness | Platform Parity |
|------|-----------|---------------------|-----------------|
| Claude Code | 🟡 API instability (500/529) | 🟡 OAuth blockers | 🟡 Windows gaps |
| OpenAI Codex | 🟡 Linux sandbox regression | 🟡 Remote dev missing | 🔴 Linux broken, Windows auth issues |
| Gemini CLI | 🟡 Plan mode instability | 🟢 Strong design focus | 🟢 Wayland support tracked |
| GitHub Copilot CLI | 🟡 503/GOAWAY errors | 🔴 MCP policies missing | 🟢 Good |
| Kimi Code | 🟡 Windows file locking | 🟡 Proxy issues | 🟡 Windows second-class |
| OpenCode | 🟢 Stable | 🔴 GHE auth failures | 🔴 WSL2 freezes |
| Qwen Code | 🟡 DevContainer issues | 🟡 Connectivity gaps | 🟡 Cursor IDE broken |

---

## 6. Trend Signals

### Industry Trends from Community Feedback

| Trend | Signal Strength | Evidence | Implication |
|-------|-----------------|----------|-------------|
| **API reliability strain** | 🔴 High | 500/529 errors (Claude), 503/GOAWAY (Copilot), capacity issues across tools | Infrastructure scaling not keeping pace with agentic workload growth |
| **Subscription value erosion** | 🔴 High | Claude Max limits (#16157: 1,245 comments), Qwen free tier reduction | Pricing models misaligned with agentic token consumption patterns |
| **Context window cost anxiety** | 🔴 High | Requests for context caps across 4+ tools | 1M context windows creating unexpected cost burden; users want granular control |
| **Enterprise authentication gaps** | 🟠 Medium | OAuth/DCR issues blocking Azure AD in 3 tools | Enterprise adoption blocked by IdP incompatibility |
| **Windows as second-class platform** | 🟠 Medium | Consistent issues across 5 tools (file locking, terminal, auth) | Market opportunity for Windows-first AI CLI |
| **Local model demand rising** | 🟠 Medium | Auto-discovery features in OpenCode, Qwen Code | Privacy/cost concerns driving local inference adoption |
| **Memory subsystem convergence** | 🟢 Emerging | Gemini CLI memory manager, Claude context tools, Kimi session persistence | Industry moving toward structured, hierarchical agent memory |
| **Spec-driven development** | 🟢 Emerging | Gemini CLI SDD integration | Formalized development methodologies emerging for AI-assisted coding |

### Strategic Recommendations

1. **For Tool Vendors**: Prioritize cost transparency (usage dashboards, context caps) and Windows platform parity
2. **For Enterprise Adopters**: Evaluate OAuth/IdP compatibility early; MCP policy support remains a gap
3. **For Developers**: Monitor API reliability SLAs closely; have fallback providers configured
4. **For Investors**: Memory management and context optimization represent key competitive moats as context windows scale

---

*Report generated from 7 AI CLI tool community digests dated 2026-03-18*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills | **Snapshot Date:** 2026-03-18

---

## 1. Top Skills Ranking

Based on community engagement, update activity, and functional impact, here are the most significant Skills currently in development:

| Rank | Skill | Author | Status | Focus Area |
|------|-------|--------|--------|------------|
| 1 | **document-typography** | @PGTBoos | OPEN | Document Quality |
| 2 | **frontend-design** (improved) | @justinwetch | OPEN | UI/UX |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | @eovidiu | OPEN | Meta/Tooling |
| 4 | **SAP-RPT-1-OSS** | @amitlals | OPEN | Enterprise Analytics |
| 5 | **shodh-memory** | @varun29ankuS | OPEN | Agent Memory |
| 6 | **ODT (OpenDocument)** | @GitHubNewbie0 | OPEN | Document Format |
| 7 | **masonry-generate-image-and-videos** | @junaid1460 | OPEN | Multimodal |
| 8 | **session-memory** | @Lordanakun | OPEN | Context Persistence |

### Detailed Breakdown

**#514 [OPEN] document-typography**
> Solves pervasive typographic issues in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Affects virtually every document Claude generates.
- **Link:** https://github.com/anthropics/skills/pull/514
- **Status:** Active development (Updated 2026-03-13)

**#210 [OPEN] frontend-design (revision)**
> Comprehensive rewrite to improve clarity and actionability of frontend design guidance—ensuring instructions are executable within a single conversation.
- **Link:** https://github.com/anthropics/skills/pull/210
- **Status:** Under review (Updated 2026-03-07)

**#83 [OPEN] skill-quality-analyzer & skill-security-analyzer**
> Two meta-skills for the marketplace: quality analysis across 5 dimensions (20% weight each) and security scanning for Skills.
- **Link:** https://github.com/anthropics/skills/pull/83
- **Status:** Pending integration

**#181 [OPEN] SAP-RPT-1-OSS predictor**
> Leverages SAP's open-source tabular foundation model (Apache 2.0, released at SAP TechEd 2025) for predictive analytics on SAP business data.
- **Link:** https://github.com/anthropics/skills/pull/181
- **Status:** Recently updated (2026-03-16)

**#154 [OPEN] shodh-memory**
> Persistent memory system for AI agents—maintains context across conversations with proactive memory surfacing.
- **Link:** https://github.com/anthropics/skills/pull/154

**#629 [OPEN] session-memory**
> Zero-dependency solution to preserve critical technical facts across context compaction and session restarts.
- **Link:** https://github.com/anthropics/skills/pull/629

**#486 [OPEN] ODT Skill**
> OpenDocument text creation, template filling, and ODT↔HTML conversion. ISO-standard format support (ISO/IEC 26300).
- **Link:** https://github.com/anthropics/skills/pull/486

**#335 [OPEN] masonry-generate-image-and-videos**
> CLI skill for Imagen 3.0 images and Veo 3.1 video generation via Masonry AI.
- **Link:** https://github.com/anthropics/skills/pull/335

---

## 2. Community Demand Trends

Analysis of Issues reveals concentrated demand in these directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Agent Memory & Context** | Persistent, cross-session memory systems | `shodh-memory`, `session-memory` PRs; multiple requests |
| **Trust & Security Governance** | Namespace security, skill authentication, agent governance policies | Issue #492 (trust boundary abuse), #412 (agent-governance proposal) |
| **MCP Integration** | Exposing Skills as MCPs for standardized APIs | Issue #16 — strong interest in MCP-as-skill-interface |
| **Enterprise/SSO Compatibility** | Skills usable without raw API keys | Issue #532 — `skill-creator` unusable for SSO users |
| **Document Quality & Format Support** | Typography, ODT, OOXML handling | PRs #514, #486, #143 |
| **Bedrock/API Portability** | Using Skills with AWS Bedrock | Issue #29 — still unresolved |

---

## 3. High-Potential Pending Skills

These active PRs are not yet merged but show strong community interest and recent activity:

| PR | Skill | Recent Update | High-Impact Factor |
|----|-------|---------------|-------------------|
| **#514** | document-typography | 2026-03-13 | Addresses universal pain point in AI-generated docs |
| **#181** | SAP-RPT-1-OSS | 2026-03-16 | Enterprise-grade predictive analytics |
| **#486** | ODT creation/templating | 2026-03-16 | ISO-standard document format support |
| **#629** | session-memory | 2026-03-17 | Zero-dep solution to context compaction |
| **#335** | masonry-multimodal | 2026-03-14 | Latest-gen image/video generation |
| **#83** | quality/security analyzers | 2026-01-07 | Meta-tooling for ecosystem health |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent agent memory systems and enterprise-grade security governance—reflecting a maturing ecosystem focused on production reliability over novelty.**

---

*Report generated from anthropics/skills repository data. All links reference github.com/anthropics/skills.*

---

# Claude Code Community Digest
**Date:** 2026-03-18

---

## 1. Today's Highlights

Claude Code v2.1.77 ships with major output token limit increases—**Opus 4.6 now defaults to 64k tokens with a 128k upper bound**. The release also introduces granular sandbox filesystem controls via `allowRead` and extends the `/copy` command with new options. However, the community is experiencing significant **API instability** with widespread 500/529 errors affecting productivity, alongside ongoing frustration with Max subscription usage limits.

---

## 2. Releases

### v2.1.77
| Change | Impact |
|--------|--------|
| **Increased output token limits** — Opus 4.6 default raised to 64k, upper bound to 128k (Sonnet 4.6 also gets 128k max) | Enables longer code generations and complex refactors |
| **`allowRead` sandbox setting** — Re-allows read access within `denyRead` regions | Fine-grained filesystem permission control |
| **`/copy` command options** — Now accepts configurable options | Enhanced clipboard workflow customization |

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [**#16157** — Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/issues/16157) `[OPEN]` | **1,245 comments, 543 👍** — The top community complaint. Max subscribers report hitting usage limits almost immediately despite paying for "unlimited" access. Ongoing since Jan 2026 with no resolution. |
| 2 | [**#35455** — Anthropic API Error: Internal Server Error (500)](https://github.com/anthropics/claude-code/issues/35455) `[OPEN]` | **Active outage** — Multiple reports of 500 errors disrupting workflows on v2.1.77. Indicates backend instability affecting all platforms. |
| 3 | [**#35487** — Overloaded Error (529) during operations](https://github.com/anthropics/claude-code/issues/35487) `[CLOSED-Duplicate]` | High-volume 529 errors making Claude Code "hardly usable." Points to capacity issues on Anthropic's infrastructure. |
| 4 | [**#34143** — Opus 4.6 shows 200K context instead of 1M on Max plan](https://github.com/anthropics/claude-code/issues/34143) `[OPEN]` | Despite release notes claiming 1M context for Max/Team/Enterprise, users see only 200K. Possible entitlement bug. |
| 5 | [**#34650** — Add `--max-context` flag to cap context window](https://github.com/anthropics/claude-code/issues/34650) `[OPEN]` | Users burning API quota 5x faster with 1M context want optional limits. Reasonable cost-control request. |
| 6 | [**#26675** — Support pre-configured OAuth without Dynamic Client Registration](https://github.com/anthropics/claude-code/issues/26675) `[OPEN]` | Enterprise blocker — Azure AD/Entra ID incompatible with Claude Code's MCP OAuth. Critical for enterprise adoption. |
| 7 | [**#18949** — Marketplace plugin skills don't appear in slash command autocomplete](https://github.com/anthropics/claude-code/issues/18949) `[OPEN]` | Skills load correctly and work programmatically, but are invisible in autocomplete. UX friction for plugin ecosystem. |
| 8 | [**#15942** — Add Visual Studio 2026 Integration](https://github.com/anthropics/claude-code/issues/15942) `[OPEN]` | **138 👍** — Strong demand for VS IDE integration beyond VS Code. Windows developers underserved. |
| 9 | [**#4476** — Agent-scoped MCP configuration with strict isolation](https://github.com/anthropics/claude-code/issues/4476) `[CLOSED]` | **183 👍** — Feature request for decoupling subagent MCP servers from main agent. Security and modularity win. |
| 10 | [**#35513** — Explore agent triggers unscoped file access, downloads OneDrive cloud-only files](https://github.com/anthropics/claude-code/issues/35513) `[OPEN]` | Security/privacy concern — agent pulls cloud-only files without user intent. Impacts Windows users with OneDrive. |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [**#33312** — Fix bash injection in ralph-loop](https://github.com/anthropics/claude-code/pull/33312) | Escapes special characters in ARGUMENTS to prevent command substitution attacks via backticks. Security fix. | `OPEN` |
| [**#32944** — Upgrade dedupe workflow to Sonnet 4.6](https://github.com/anthropics/claude-code/pull/32944) | Updates issue-dedupe workflow from Sonnet 4.5 to 4.6 for better reliability on instruction-heavy tasks. | `OPEN` |
| [**#35350** — Portable shebangs in plugin scripts](https://github.com/anthropics/claude-code/pull/35350) | Replaces `#!/bin/bash` with `#!/usr/bin/env bash` for NixOS and other non-standard systems. Portability fix. | `OPEN` |
| [**#35302** — Chinese translation (README.zh.md)](https://github.com/anthropics/claude-code/pull/35302) | Full Chinese documentation to support the massive Chinese-speaking developer community. Accessibility improvement. | `OPEN` |
| [**#35168** — Add Etudes plugin](https://github.com/anthropics/claude-code/pull/35168) | Sprint coach plugin that interviews builders and generates 3-5 day sprints with daily check-ins. Productivity tool. | `OPEN` |
| [**#35421** — Minesweeper game implementation](https://github.com/anthropics/claude-code/pull/35421) | Complete HTML/CSS/JS Minesweeper game. Demonstrates Claude Code's capability for game development. | `OPEN` |
| [**#35106** — Fix typos in settings README](https://github.com/anthropics/claude-code/pull/35106) | Documentation corrections for clarity. Low-risk maintenance. | `OPEN` |

---

## 5. Feature Request Trends

| Trend | Description | Signal |
|-------|-------------|--------|
| **Enterprise OAuth compatibility** | Pre-configured OAuth client credentials for Azure AD, Okta, and enterprise providers | [#26675](https://github.com/anthropics/claude-code/issues/26675) + 5 related issues |
| **Context window control** | Flags to cap context at 200K to manage costs with new 1M default | [#34650](https://github.com/anthropics/claude-code/issues/34650), #34143 |
| **IDE integrations beyond VS Code** | Native Visual Studio, JetBrains IDE support | [#15942](https://github.com/anthropics/claude-code/issues/15942) (138 👍) |
| **Agent isolation & MCP scoping** | Decoupled subagents with isolated MCP configurations | [#4476](https://github.com/anthropics/claude-code/issues/4476) (183 👍) |
| **Multi-machine agent collaboration** | Agent-to-Agent protocol for distributed development | [#28300](https://github.com/anthropics/claude-code/issues/28300) |
| **Subscription quota visibility** | Expose `/usage` data in statusLine JSON for real-time monitoring | [#28999](https://github.com/anthropics/claude-code/issues/28999) (33 👍) |

---

## 6. Developer Pain Points

| Pain Point | Details | Evidence |
|------------|---------|----------|
| **🔴 API Instability (500/529 errors)** | Widespread service disruption on March 17 with internal server and overload errors | 8+ duplicate issues filed in 24h |
| **🔴 Max subscription value perception** | Users hitting limits instantly despite premium pricing; top issue for 3+ months | [#16157](https://github.com/anthropics/claude-code/issues/16157) — 1,245 comments |
| **🟠 1M context window confusion** | Announced feature not working for eligible users; quota burn concerns | [#34143](https://github.com/anthropics/claude-code/issues/34143), [#34650](https://github.com/anthropics/claude-code/issues/34650) |
| **🟠 Enterprise OAuth friction** | DCR requirement blocks Azure AD and other enterprise IdPs | [#26675](https://github.com/anthropics/claude-code/issues/26675) |
| **🟡 Plugin marketplace UX gaps** | Skills don't surface in autocomplete despite working programmatically | [#18949](https://github.com/anthropics/claude-code/issues/18949) (64 👍) |
| **🟡 Windows platform parity** | OneDrive file access issues, terminal backend gaps, VS integration missing | #35513, #32683, #15942 |

---

*Digest generated from GitHub activity on 2026-03-18. For real-time updates, monitor the [claude-code repository](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-18

## 1. Today's Highlights
Three new Rust alpha releases (v0.116.0-alpha.1 through alpha.3) were published today, signaling rapid iteration on the core Codex engine. The community is actively reporting a significant regression in CLI version 0.115.0 regarding Linux sandboxing (Bubblewrap), which is blocking subagent execution on Ubuntu 24.04. Additionally, internal development is heavily focused on refactoring execution architecture, evidenced by multiple PRs introducing a standalone `codex-exec-server` and filesystem abstractions.

## 2. Releases
- **rust-v0.116.0-alpha.3**: Latest alpha build released on 2026-03-18. [View Release](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.3)
- **rust-v0.116.0-alpha.2**: Second alpha build for v0.116.0. [View Release](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.2)
- **rust-v0.116.0-alpha.1**: Initial alpha build for v0.116.0. [View Release](https://github.com/openai/codex/releases/tag/rust-v0.116.0-alpha.1)

## 3. Hot Issues
1.  **[High Impact] Linux Sandbox Regression (Bubblewrap)**: Issue [#14919](https://github.com/openai/codex/issues/14919) reports that CLI v0.115.0 breaks subagent command execution on Ubuntu 24.04 due to a Bubblewrap permission error (`RTM_NEWADDR`). This is a critical blocker for Linux users and has generated a fix proposal in PR [#14963](https://github.com/openai/codex/pull/14963).
2.  **[High Impact] Repeated Permission Prompts**: Issue [#14936](https://github.com/openai/codex/issues/14936) highlights a regression in v0.115.0 where the CLI ignores "don't ask again" flags, spamming users with approval prompts for every command.
3.  **[High Interest] Remote Development Support**: Issue [#10450](https://github.com/openai/codex/issues/10450) remains highly active (+375 👍), requesting the ability to connect the Codex Desktop App to remote development environments (containers/SSH), a crucial feature for professional workflows.
4.  **[Bug] Excessive Token Consumption**: Users in Issue [#14593](https://github.com/openai/codex/issues/14593) report that the latest VS Code extension update is burning through tokens unusually fast, raising cost concerns for Business subscribers.
5.  **[CLI] 401 Unauthorized Errors**: Issue [#12764](https://github.com/openai/codex/issues/12764) continues to affect Windows/WSL users encountering 401 errors with the CLI, pointing to persistent authentication handshake issues.
6.  **[App] Manual `/compact` Command**: Issue [#11325](https://github.com/openai/codex/issues/11325) requests a manual trigger for context compaction in the Desktop App, a feature currently available only in the CLI.
7.  **[Bug] Windows App Automation Failures**: Issue [#14423](https://github.com/openai/codex/issues/14423) notes that the Windows Codex App fails to execute basic automation tasks (like `echo` or `dir`), resulting in exit code 1.
8.  **[MCP] Hyphenated Server Names Broken**: Issue [#14927](https://github.com/openai/codex/issues/14927) reveals that MCP servers with hyphens in their names aren't loading tools correctly in v0.115.0.
9.  **[Feature] Standalone Windows Installer**: Issue [#13993](https://github.com/openai/codex/issues/13993) requests a standalone `.exe` installer for Windows to bypass Microsoft Store restrictions common in enterprise environments.
10. **[Auth] Model Access Revoked**: Issue [#14735](https://github.com/openai/codex/issues/14735) reports that `gpt-5.3-codex` is no longer accessible via CLI for ChatGPT Plus subscribers, causing confusion over model availability.

## 4. Key PR Progress
1.  **Add codex-exec-server crate** ([#14862](https://github.com/openai/codex/pull/14862)): Introduces a standalone stdio JSON-RPC server for execution, separating execution logic from the core TUI.
2.  **Fix Linux Sandbox (Bubblewrap)** ([#14963](https://github.com/openai/codex/pull/14963)): Proposed fix to prefer system `/usr/bin/bwrap` to resolve AppArmor/permission conflicts on Ubuntu.
3.  **Add FS abstraction** ([#14960](https://github.com/openai/codex/pull/14960)): Implements a filesystem abstraction layer to decouple agent logic from local filesystem assumptions, paving the way for better remote support.
4.  **Gate realtime audio interruption logic** ([#14984](https://github.com/openai/codex/pull/14984)): Refactors audio handling to separate legacy (v1) and new (v2) interruption behaviors.
5.  **Fix TUI remote app-server interactions** ([#14932](https://github.com/openai/codex/pull/14932)): Restores command execution lifecycle events when TUI connects to remote app-servers.
6.  **View Image Sandboxing** ([#14989](https://github.com/openai/codex/pull/14989)): Security fix routing `view_image` through sandbox-backed helpers to prevent unauthorized file system access.
7.  **Thread/ShellCommand API** ([#14988](https://github.com/openai/codex/pull/14988)): Adds an app-server API for executing shell commands (`!`) within the sandbox.
8.  **Unify realtime shutdown** ([#14902](https://github.com/openai/codex/pull/14902)): Consolidates shutdown logic for realtime sessions to prevent state leaks and hangs.
9.  **Reuse persisted model on thread resume** ([#14888](https://github.com/openai/codex/pull/14888)): Improves `thread/resume` by persisting model selection and reasoning effort metadata.
10. **Plugin Installation Elicitations** ([#14873](https://github.com/openai/codex/pull/14873)): Adds support for the agent to request plugin installations during execution.

## 5. Feature Request Trends
-   **Remote & Cloud Development**: Strong demand for the Desktop App to support SSH/Remote development (Issue [#10450](https://github.com/openai/codex/issues/10450)) and cloud execution.
-   **Model Parity**: Users want consistent model access (specifically `gpt-5.3-codex`) across CLI, App, and VS Code extensions regardless of subscription type (Issue [#14735](https://github.com/openai/codex/issues/14735)).
-   **UX Parity (App vs. CLI)**: Requests to bring CLI power-user features to the Desktop App, such as the `/compact` command (Issue [#11325](https://github.com/openai/codex/issues/11325)).
-   **Enterprise Deployment**: Request for standalone installers (Issue [#13993](https://github.com/openai/codex/issues/13993)) to bypass store restrictions.

## 6. Developer Pain Points
-   **CLI v0.115.0 Regression**: The transition to vendored Bubblewrap in the latest CLI release has broken sandboxing on standard Ubuntu configurations, causing frustration for Linux developers.
-   **Permission Spam**: The "don't ask again" feature failing (Issue [#14936](https://github.com/openai/codex/issues/14936)) severely interrupts workflow automation.
-   **Windows Stability**: Windows users continue to face specific hurdles with authentication (Issue [#12764](https://github.com/openai/codex/issues/12764)) and agent execution failures (Issue [#11727](https://github.com/openai/codex/issues/11727)), indicating platform-specific stability gaps.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-18

## 1. Today's Highlights
The Gemini CLI project accelerates its march toward agent autonomy with the release of **v0.35.0-preview.1**, introducing customizable keyboard shortcuts and foundational updates to the agent loop. A significant portion of today's activity focuses on the **Memory Subsystem overhaul**, with new proposals and implementations aiming to replace the basic `save_memory` tool with a structured, hierarchical memory manager. Additionally, the community and maintainers are heavily investing in **Spec-Driven Development (SDD)** and **AST-aware tooling** to enhance code manipulation precision.

## 2. Releases

### **v0.35.0-preview.1**
*   **Customizable Shortcuts:** Users can now define their own keyboard shortcuts ([PR #21945](https://github.com/google-gemini/gemini-cli/pull/21945)).
*   **Core Refactoring:** `AgentLoopContext` has been threaded through the core system, paving the way for more complex agent state management ([PR #21944](https://github.com/google-gemini/gemini-cli/pull/21944)).

### **v0.34.0**
*   **Chat Resume:** Added a footer to sessions upon quit to facilitate easier chat resumption ([PR #20667](https://github.com/google-gemini/gemini-cli/pull/20667)).
*   **Visuals:** SVG snapshots now support bold and other text styles ([PR #20937](https://github.com/google-gemini/gemini-cli/pull/20937)).

## 3. Hot Issues

1.  **Agent "Ghosting" on `/plan` Approval** ([#22266](https://github.com/google-gemini/gemini-cli/issues/22266))
    *   *Why it matters:* A critical blocker where the agent silently drops context immediately after a user approves a generated plan, preventing execution.
2.  **Plan Mode Stuck or Confused** ([#22507](https://github.com/google-gemini/gemini-cli/issues/22507) & [#22307](https://github.com/google-gemini/gemini-cli/issues/22307))
    *   *Why it matters:* Users report plan mode getting stuck in "thinking" loops or displaying plans based on *previous* requests rather than current ones.
3.  **Unauthorized Subagent Execution** ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093))
    *   *Why it matters:* Since v0.33.0, subagents reportedly run even when explicitly disabled in configurations, raising security and resource usage concerns.
4.  **Browser Agent Fails on Wayland** ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983))
    *   *Why it matters:* High-priority bug causing the browser subagent to crash on Linux systems using Wayland display protocols.
5.  **Proactive Memory Management Proposal** ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809))
    *   *Why it matters:* Maintainers propose tuning the main agent to proactively save user preferences (e.g., "I prefer tabs") to memory without explicit commands.
6.  **Global vs. Project Memory Routing** ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))
    *   *Why it matters:* A design proposal to separate memories (global user preferences vs. project-specific facts) to prevent context pollution.
7.  **AST-Aware Codebase Mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
    *   *Why it matters:* Investigation into using Abstract Syntax Trees (AST) for file reads/searches to reduce token noise and improve code navigation precision.
8.  **Request for `/perf` Dashboard** ([#22483](https://github.com/google-gemini/gemini-cli/issues/22483))
    *   *Why it matters:* User request for an in-CLI dashboard to monitor session timing, memory usage, and tool/API stats in real-time.
9.  **Passing Prompts to `/plan`** ([#22855](https://github.com/google-gemini/gemini-cli/issues/22855))
    *   *Why it matters:* Users want to initiate planning in a single command (e.g., `/plan refactor auth`) rather than opening a separate input box.
10. **Ignored `settings.json` Overrides** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))
    *   *Why it matters:* The Browser Agent reportedly ignores `maxTurns` and other config overrides, leading to runaway operations.

## 4. Key PR Progress

1.  **Spec-Driven Development (SDD) Integration** ([PR #22849](https://github.com/google-gemini/gemini-cli/pull/22849))
    *   Integrates a built-in SDD extension to enforce a structured methodology for context-driven development.
2.  **Memory Manager Subagent** ([PR #22726](https://github.com/google-gemini/gemini-cli/pull/22726))
    *   Introduces an experimental memory manager to replace `save_memory`, offering richer operations (add, remove, de-duplicate) across global/project files.
3.  **Non-Interactive CLI Migration** ([PR #22825](https://github.com/google-gemini/gemini-cli/pull/22825))
    *   Refactors non-interactive mode to use the `AgentSession` protocol, decoupling the CLI from raw model parts.
4.  **Subagent Tool Isolation** ([PR #22718](https://github.com/google-gemini/gemini-cli/pull/22718))
    *   Finalizes tool isolation for subagents, wiring localized configuration into the agent scheduling loop.
5.  **Agent Knowledge Layer (AKL)** ([PR #22711](https://github.com/google-gemini/gemini-cli/pull/22711))
    *   Implements a "collective consciousness" layer to prevent agent amnesia in long workstreams (Note: PR status closed, likely merged).
6.  **Remote Maintainer Offload Skill** ([PR #22714](https://github.com/google-gemini/gemini-cli/pull/22714))
    *   Introduces a skill for high-performance, parallelized task execution on remote workstations.
7.  **`/plan` Command Enhancement** ([PR #22833](https://github.com/google-gemini/gemini-cli/pull/22833))
    *   Allows `/plan` to accept text arguments, streamlining the planning workflow.
8.  **`/context` Window Breakdown** ([PR #22856](https://github.com/google-gemini/gemini-cli/pull/22856))
    *   Adds a command to visualize context window consumption (system prompt vs. history) with token estimates.
9.  **Agent Loop Context Migration** ([PR #22864](https://github.com/google-gemini/gemini-cli/pull/22864))
    *   Technical refactoring to standardize context passing through the agent loop.
10. **Task Tracker Integration** ([PR #22442](https://github.com/google-gemini/gemini-cli/pull/22442))
    *   Integrates a file-based task tracking system (`.tracker/tasks/`) into the system prompt for better state management.

## 5. Feature Request Trends
*   **Enhanced Agent Memory:** Strong demand for a structured memory subsystem that distinguishes between global user preferences and project-specific context.
*   **Workflow Streamlining:** Users want to reduce friction in workflows, specifically requesting single-command inputs for `/plan` and better resume capabilities.
*   **Observability & Debugging:** Increased requests for tools like `/perf` (performance dashboard) and `/context` (window breakdown) to understand agent behavior and resource usage.
*   **Smarter Code Analysis:** Interest in AST-aware tools to improve the precision of code edits and reduce the "noise" in current file-reading approaches.

## 6. Developer Pain Points
*   **Plan Mode Instability:** The `/plan` command remains a significant source of frustration, with reports of context loss, hanging, and state confusion.
*   **Subagent Control:** Developers feel a lack of control over subagents, citing issues where agents run despite being disabled or ignore configuration limits (`maxTurns`).
*   **Context Retention:** Agents failing to utilize custom skills or recall previous context effectively (Agent Amnesia) is a recurring complaint.
*   **Unsafe Code Generation:** Users report the CLI generating unsafe TypeScript code (e.g., excessive casting, partial cloning), suggesting prompt tuning is needed to enforce best practices.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-18

## 1. Today's Highlights

Version **v1.0.7** was released yesterday, introducing **GPT-5.4-mini model support** and significant accessibility improvements, including better color contrast and screen reader optimizations. The release also includes experimental SDK session APIs for managing skills and MCP servers. On the issue front, the community is actively discussing persistent **API reliability problems (503/GOAWAY errors)** and **session stability regressions** introduced in the recent v1.0.6 update.

---

## 2. Releases

### **v1.0.7** (2026-03-17)
**Stability & Accessibility:**
- Improved color contrast across CLI themes for better readability
- User messages now display with subtle background color for visual differentiation
- Input placeholder text excluded from screen reader announcements
- Tab bar styling updated to compact `[label]` format

**Model Support:**
- Added support for `gpt-5.4-mini` model

**Experimental Features:**
- New SDK session APIs to list/manage skills, MCP servers, and plugins with auto-discovery
- `subagentStart` hook for injecting context when subagents spawn

### **v1.0.6** (2026-03-16)
- Fixed autopilot continuation blocking after errors
- `task_complete` summary now required and renders as markdown
- Free tree-sitter WASM improvements

> ⚠️ **Note:** Users report v1.0.6 breaks session resume for older sessions due to new `data.summary` schema validation requirements ([#2089](https://github.com/github/copilot-cli/issues/2089)).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| 1 | [**#1754 - AssertionError + HTTP/2 GOAWAY (503)**](https://github.com/github/copilot-cli/issues/1754) | Critical reliability failure during retrospectives with connection pooling errors | 10 👍 / 12 comments; users experiencing workflow-blocking crashes |
| 2 | [**#2050 - Claude Sonnet 4.6 execution failures**](https://github.com/github/copilot-cli/issues/2050) | Model-specific failures with 503 GOAWAY errors; works fine with Gemini 3 Pro | 3 👍 / 5 comments; indicates backend routing issues |
| 3 | [**#2089 - Session resume broken after v1.0.6 upgrade**](https://github.com/github/copilot-cli/issues/2089) | Schema validation changes corrupt perceived session files | Closed quickly; highlights backward compatibility concerns |
| 4 | [**#618 - Custom slash commands from `.github/prompts`**](https://github.com/github/copilot-cli/issues/618) | Feature parity request with VS Code extension | **91 👍** / 27 comments; highly requested customization feature |
| 5 | [**#1481 - SHIFT+ENTER executes instead of line break**](https://github.com/github/copilot-cli/issues/1481) | UX inconsistency with standard chat applications | 9 👍 / 10 comments; users expect `SHIFT+ENTER` for newlines |
| 6 | [**#599 - Enterprise MCP Policies**](https://github.com/github/copilot-cli/issues/599) | Blocking enterprise adoption without policy enforcement | 4 👍 / 5 comments; critical for org-wide deployment |
| 7 | [**#1811 - Terminal flickering in VS Code**](https://github.com/github/copilot-cli/issues/1811) | Severe usability issue during MCP loading | 8 👍 / 4 comments; impacts Visual Studio terminal users |
| 8 | [**#1897 - Authorization failures for Pro users**](https://github.com/github/copilot-cli/issues/1897) | Users with valid subscriptions unable to use CLI | 1 👍 / 9 comments; authentication infrastructure issue |
| 9 | [**#2088 - React hooks render error**](https://github.com/github/copilot-cli/issues/2088) | Crashes during active sessions on v1.0.6 | 3 👍 / 2 comments; potential React reconciliation bug |
| 10 | [**#1305 - CIMD for Remote OAuth MCP Servers**](https://github.com/github/copilot-cli/issues/1305) | Enhanced OAuth support for enterprise MCP integrations | 12 👍 / 1 comment; enterprise-focused enhancement |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours. However, based on release notes, recent merged work includes:
- SDK session management APIs
- Subagent hooks infrastructure
- Accessibility and theming improvements

---

## 5. Feature Request Trends

**1. Custom Slash Commands & Prompts** ([#618](https://github.com/github/copilot-cli/issues/618))
- Community wants `.github/prompts/` directory support for custom commands
- Parity with VS Code Copilot extension behavior

**2. Session Forking/Branching** ([#2058](https://github.com/github/copilot-cli/issues/2058))
- Ability to branch conversations for "side quests" without losing main context
- Prevents task derailment when exploring tangential questions

**3. User-Level Hooks** ([#1067](https://github.com/github/copilot-cli/issues/1067))
- Request for global hooks configuration at user level
- 21 👍 indicates strong demand for customization

**4. Enterprise MCP Policy Support** ([#599](https://github.com/github/copilot-cli/issues/599))
- Organization-enforced allowlists and policies
- Critical blocker for enterprise adoption

**5. Java/JVM Ecosystem Support** ([#1349](https://github.com/github/copilot-cli/issues/1349))
- Better LSP configuration and build tool detection
- Documentation heavily TS/JS-biased; Java developers underserved

---

## 6. Developer Pain Points

| Category | Issues | Summary |
|----------|--------|---------|
| **API Reliability** | [#1754](https://github.com/github/copilot-cli/issues/1754), [#2050](https://github.com/github/copilot-cli/issues/2050), [#2073](https://github.com/github/copilot-cli/issues/2073) | Frequent 503/GOAWAY errors, transient API failures, and rate limiting disrupting workflows |
| **Session Stability** | [#2089](https://github.com/github/copilot-cli/issues/2089), [#2088](https://github.com/github/copilot-cli/issues/2088) | Backward compatibility breaks, React errors, and corrupted session perception after upgrades |
| **Model Selection Persistence** | [#1869](https://github.com/github/copilot-cli/issues/1869) | Model choice (`gpt-5-mini`) resets between sessions; expected to persist |
| **Tool Availability** | [#1898](https://github.com/github/copilot-cli/issues/1898), [#2106](https://github.com/github/copilot-cli/issues/2106) | `ask_user` tool missing or truncating long questions, reducing usability in plan mode |
| **Authorization/Auth** | [#1897](https://github.com/github/copilot-cli/issues/1897) | Valid Pro subscriptions rejected; blocking legitimate users |
| **Cross-Platform UX** | [#2082](https://github.com/github/copilot-cli/issues/2082), [#1940](https://github.com/github/copilot-cli/issues/1940) | Linux clipboard shortcuts broken; Chinese text encoding issues on copy |

---

**Summary:** The v1.0.7 release addresses accessibility and adds GPT-5.4-mini support, but the community is experiencing significant API instability and session management issues. Enterprise users are blocked by missing MCP policy support, while power users want deeper customization through slash commands and hooks.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-18

## 1. Today's Highlights
Version **1.23.0** has been released, introducing **background bash tasks** and a notification infrastructure, allowing long-running shell commands to operate asynchronously. The community and core team have been highly active in fixing Web UI bugs and platform-specific issues, with over 15 PRs merged or opened focusing on proxy support, Windows stability, and UI rendering. Additionally, significant efforts are underway to optimize startup performance and improve session state persistence.

## 2. Releases
### **v1.23.0**
*   **Background Bash & Notifications:** Added `run_in_background=true` to the Shell tool, enabling detached worker processes. New tools `TaskList`, `TaskOutput`, and `TaskStop` allow management of these tasks. (PR [#1477](https://github.com/MoonshotAI/kimi-cli/pull/1477))
*   **Web UI Config Sync:** Fixed an issue where global configuration wasn't refreshed across tabs when the model was changed. (PR [#1447](https://github.com/MoonshotAI/kimi-cli/pull/1447))

## 3. Hot Issues
1.  **[#1234](https://github.com/MoonshotAI/kimi-cli/issues/1234) [Bug] Environment variable proxy not working:** Users behind corporate proxies are blocked because `aiohttp` defaults to ignoring system environment variables.
2.  **[#1341](https://github.com/MoonshotAI/kimi-cli/issues/1341) [Bug] Windows PowerShell Subprocess Handling:** Windows users are experiencing shell command failures due to profile loading issues in non-interactive contexts.
3.  **[#1428](https://github.com/MoonshotAI/kimi-cli/issues/1428) [Bug] Web Attachment Button Triggers Submit:** Clicking the attachment button in the Web UI incorrectly submits the chat form immediately.
4.  **[#1420](https://github.com/MoonshotAI/kimi-cli/issues/1420) [Bug] Inline Math Rendering:** The Web UI fails to render inline LaTeX formulas (`$...$`), though block formulas work.
5.  **[#765](https://github.com/MoonshotAI/kimi-cli/issues/765) [Enhancement] Persist Session Approvals:** Users are frustrated that "approve for session" permissions are lost upon restarting the CLI, requiring repetitive approvals.
6.  **[#734](https://github.com/MoonshotAI/kimi-cli/issues/734) [Bug] Google GenAI Provider Schema Error:** Using MCP tools with Google's provider causes `extra_forbidden` errors due to strict schema validation.
7.  **[#1429](https://github.com/MoonshotAI/kimi-cli/issues/1429) [Bug] Windows Concurrent Write Permission Denied:** Concurrent async writes to `context.jsonl` are causing file locking errors on Windows.
8.  **[#1107](https://github.com/MoonshotAI/kimi-cli/issues/1107) [Bug] Install Script Fails without `uv`:** The `curl` installation script fails to source the `uv` binary path immediately after installation.
9.  **[#1291](https://github.com/MoonshotAI/kimi-cli/issues/1291) [Bug] Markdown in Stdin Crashes CLI:** Invalid markdown formatting passed via stdin prompt causes the application to crash.
10. **[#1459](https://github.com/MoonshotAI/kimi-cli/issues/1459) [Bug] Self-Configuration Limitation:** Users report that the AI struggles to correctly configure its own MCP settings, often placing them in the wrong file.

## 4. Key PR Progress
1.  **[#1477](https://github.com/MoonshotAI/kimi-cli/pull/1477) [Merged] feat: add background bash tasks:** Implements the infrastructure for running shell commands in the background with persistence to disk.
2.  **[#1465](https://github.com/MoonshotAI/kimi-cli/pull/1465) [Merged] fix: enable proxy support:** Resolves the blocking proxy issue by enabling `trust_env=True` in `aiohttp`.
3.  **[#1469](https://github.com/MoonshotAI/kimi-cli/pull/1469) [Merged] feat: persist approve_for_session:** Fixes the UX friction by saving approval states to disk so they survive session restarts.
4.  **[#1473](https://github.com/MoonshotAI/kimi-cli/pull/1473) [Merged] fix: web UI diff overlap:** Corrects a layout bug where the git diff status bar obscured the prompt input field.
5.  **[#1466](https://github.com/MoonshotAI/kimi-cli/pull/1466) [Merged] fix: Google GenAI schema stripping:** Strips incompatible JSON schema fields (like `$schema`) to prevent validation errors with Google's SDK.
6.  **[#1486](https://github.com/MoonshotAI/kimi-cli/pull/1486) [Open] perf: streamline startup:** Major optimization effort to lazy-load logs, metadata, and subcommands to speed up CLI initialization.
7.  **[#1463](https://github.com/MoonshotAI/kimi-cli/pull/1463) [Open] feat: OSC terminal notifications:** Adds support for desktop notifications via OSC 9/777 escape sequences for compatible terminals.
8.  **[#1464](https://github.com/MoonshotAI/kimi-cli/pull/1464) [Open] fix: PowerShell -NoProfile:** Prevents profile scripts from breaking the Shell tool on Windows by adding the `-NoProfile` flag.
9.  **[#1467](https://github.com/MoonshotAI/kimi-cli/pull/1467) [Open] fix: asyncio lock for context writes:** Proposes a fix for Windows file locking errors by serializing writes to `context.jsonl`.
10. **[#1461](https://github.com/MoonshotAI/kimi-cli/pull/1461) [Open] fix: filter .git from mentions:** Cleans up the file mention autocomplete by removing internal `.git/objects` entries.

## 5. Feature Request Trends
*   **Notification Systems:** Strong demand for desktop/terminal integration when long tasks complete (OSC notifications).
*   **Memory & Context Management:** Users working on large projects are requesting optimized "memory layers" or better long-term context handling beyond the current session scope.
*   **Parallel Execution:** Requests for the ability to run multiple tasks simultaneously within a single session without truncating output.
*   **UI/UX Polish:** Continued requests for better visual distinction in light themes and displaying the current working directory in the prompt.

## 6. Developer Pain Points
*   **Proxy/Network Configuration:** A recurring frustration for developers in restricted corporate environments where the CLI fails to pick up standard proxy environment variables.
*   **Windows Stability:** Multiple reports highlight that the CLI on Windows feels like a second-class citizen, specifically regarding file locking (Permission Denied) and PowerShell subprocess handling.
*   **Session State Brittleness:** Developers find it painful that session-specific settings (like approvals) are lost easily, and corrupted `context.jsonl` files (due to control characters) can crash the tool.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-18

## 1. Today's Highlights

The community is actively discussing **Copilot integration challenges**, with high engagement on issues regarding premium request consumption and model support. A major focus emerges around **context management**, with developers requesting more control over compaction thresholds and sliding window approaches. On the contribution front, we're seeing strong momentum in **local model discovery features** for providers like LM Studio and llama.cpp, alongside significant UI improvements for project pinning and navigation.

**No new releases** were published in the last 24 hours.

---

## 2. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| **[#8030](https://github.com/anomalyco/opencode/issues/8030)** | Copilot auth consuming premium requests | **195 comments.** Critical bug where agent-initiated requests are incorrectly tagged as "user" requests, rapidly depleting Copilot quotas. High community impact with 64 👍. |
| **[#3936](https://github.com/anomalyco/opencode/issues/3936)** | GitHub Enterprise authorization failure | **55 comments.** Long-standing blocker for enterprise users unable to authenticate with GitHub Enterprise deployments. |
| **[#8598](https://github.com/anomalyco/opencode/issues/8598)** | Copilot model "not supported" errors | **43 comments.** Recent regression where models like 5.2-Codex and Raptor fail despite being enabled and working in VS Code. |
| **[#16331](https://github.com/anomalyco/opencode/issues/16331)** | Permissions configuration ignored | **27 comments.** Security-critical bug where `opencode.json` permission rules (deny patterns for `.env` files) are not being respected. |
| **[#4659](https://github.com/anomalyco/opencode/issues/4659)** | Sliding window context management | **20 comments, 18 👍.** Popular feature request proposing smarter context compaction that "slides" rather than "amputates" conversation history. |
| **[#8140](https://github.com/anomalyco/opencode/issues/8140)** | Configurable context limits | **14 comments, 26 👍.** Request for user-controlled compaction thresholds and context limits for cost optimization. |
| **[#14194](https://github.com/anomalyco/opencode/issues/14194)** | Database corruption in Docker | **12 comments.** Critical for devOps: sharing config between local and Docker sessions corrupts SQLite when running concurrently. |
| **[#8484](https://github.com/anomalyco/opencode/issues/8484)** | Screen lag/freezing in WSL2 | **9 comments, 13 👍.** Performance issue causing typing freezes in WSL2/TMUX/Alacritty setups. |
| **[#17977](https://github.com/anomalyco/opencode/issues/17977)** | Webapp serve wedged under delta storms | **5 comments.** Production issue where a single active session can hang the entire `opencode serve` instance. |
| **[#17890](https://github.com/anomalyco/opencode/issues/17890)** | `model: inherit` regression in subagents | **5 comments.** Breaking change affecting externally-installed subagents with `model: inherit` in frontmatter. |

---

## 3. Key PR Progress

| PR | Title | Description |
|----|-------|-------------|
| **[#17670](https://github.com/anomalyco/opencode/pull/17670)** | Dynamic model discovery for local providers | Adds automatic model list population for OpenAI-compatible local providers (LM Studio, llama.cpp) via `/models` API. |
| **[#17688](https://github.com/anomalyco/opencode/pull/17688)** | Built-in local server provider | Introduces a `local` provider with auto-discovery from any OpenAI-compatible endpoint—no manual model listing needed. |
| **[#17957](https://github.com/anomalyco/opencode/pull/17957)** | Effectify TruncateService | Major refactor converting `TruncateService` to Effect-based architecture and removing legacy `Scheduler` module. |
| **[#16068](https://github.com/anomalyco/opencode/pull/16068)** | Pinned workspaces in sidebar | Desktop app feature allowing users to pin frequently-used workspaces for quick access. |
| **[#17999](https://github.com/anomalyco/opencode/pull/17999)** | Project pinning to sidebar menu | Right-click pin/unpin action for projects, persisted in app server store. |
| **[#17997](https://github.com/anomalyco/opencode/pull/17997)** | Remount server-scoped providers | Fixes session list disappearing when switching between remote servers (closes #17654). |
| **[#17989](https://github.com/anomalyco/opencode/pull/17989)** | Diff aggregation fix | Corrects sidebar diff display to show tool-only modifications rather than net changes. |
| **[#17987](https://github.com/anomalyco/opencode/pull/17987)** | Optional history keybinds | Setting to disable up/down arrow history navigation in the composer. |
| **[#17587](https://github.com/anomalyco/opencode/pull/17587)** | Reasoning effort in Web UI | Fixes Web UI not reflecting `reasoningEffort` configured in `opencode.json`. |
| **[#7302](https://github.com/anomalyco/opencode/pull/7302)** | Built-in browser tools via Playwright | Adds optional browser automation toolkit (enabled via `OPENCODE_ENABLE_BROWSER=true`). |

---

## 4. Feature Request Trends

Based on issue analysis, the community is strongly requesting:

1. **Granular Context Control** — Users want configurable context limits, earlier compaction triggers, and sliding window approaches rather than abrupt truncation (#4659, #8140, #16129).

2. **Native Provider Integration** — Strong demand for provider-hosted web search (#10704) and better integration with Copilot's native features without quota penalties.

3. **Local Model Support** — Growing interest in seamless local LLM integration with auto-discovery (#17670, #17688).

4. **Enhanced TUI/Search** — Request for in-session string search similar to text editor "find" functionality (#4714).

5. **Thinking/Reasoning Control** — Ability to disable reasoning tokens per slash command (#16021).

---

## 5. Developer Pain Points

| Category | Details |
|----------|---------|
| **Copilot Quota Drain** | Incorrect `X-Initiator` headers causing agent requests to consume premium user quota (#8030). |
| **Windows/WSL Stability** | Recurring freezes, startup hangs, clipboard issues, and installation detection failures on Windows/WSL2 (#8484, #11657, #7048, #17295, #17985). |
| **Enterprise Auth** | GitHub Enterprise login failures blocking adoption in corporate environments (#3936). |
| **Permission System Reliability** | Security rules in `opencode.json` being ignored, risking exposure of sensitive files (#16331). |
| **Session Management** — Session list showing all sessions instead of directory-scoped, sessions disappearing, and database corruption in multi-environment setups (#8836, #16562, #14194). |
| **Model Provider Breakages** — Sudden stops in Poe provider, Copilot model incompatibilities, and thought_signature support gaps (#17302, #8598, #8321). |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-18

## 1. Today's Highlights
Qwen Code version **v0.12.6** was released today, focusing on stability by improving `max_tokens` handling with conservative defaults to prevent response truncation. The community remains highly active regarding **IDE connectivity issues**, particularly with VS Code DevContainers and Cursor, while significant engineering efforts are underway for **v0.13.0**, featuring parallel tool execution and better resource management.

## 2. Releases
### **v0.12.6**
This patch release addresses context handling stability.
*   **Improved `max_tokens` handling:** Moved logic to the provider level with conservative defaults (cap at 32K or model limit) to prevent truncation errors.
*   [Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.12.5...v0.12.6)

## 3. Hot Issues
1.  **[UI] Container 'qwen-code-secondary' does not exist (#2416)**
    Users moving the extension panel to the secondary sidebar encounter errors regarding missing view containers, affecting UI layout in specific VS Code versions.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/2416)
2.  **Failed to connect to IDE from VSCode Insider using DevContainers (#1094)**
    A high-priority issue where the CLI fails to handshake with the IDE when running inside a DevContainer, blocking development environments.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/1094)
3.  **Cursor IDE connectivity issues persist (#2382)**
    Users report that Qwen Code Companion v0.12.3 broke functionality in Cursor IDE, while v0.12.2 worked correctly.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/2382)
4.  **Skill Testing Framework Proposal (#2447)**
    A significant proposal by @wenshao to introduce a recording, playback, and assertion framework for testing "Skills," addressing the lack of automated verification for skill modifications.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/2447)
5.  **422 Error connecting local private models (#2441)**
    Users attempting to connect local deployed models via OpenAI-compatible APIs face "422 Check open ai req parameter error," indicating parameter validation friction.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/2441)
6.  **MCP Client fails to connect to Streamable HTTP Transport (#2436)**
    The current MCP implementation is outdated and fails to connect to servers using newer Streamable HTTP Transport specs.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/2436)
7.  **Context Limits not respected (#371)**
    A recurring bug where context limits are ignored during requests, causing issues for large codebases running on local inference engines like llama.cpp.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/371)
8.  **Terminal stops responding after Caps Lock (VS Code) (#2401)**
    A specific UI bug where pressing Caps Lock renders the terminal keyboard input unresponsive, requiring a restart.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/2401)
9.  **Clipboard Image Support Request (#1951)**
    Highly requested feature to allow pasting screenshots directly from the clipboard into the chat, rather than saving and uploading files.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/1951)
10. **Free Tier Quota Reduction Complaints (#2426)**
    Users are reporting that the advertised "1000 daily requests" for free users have been significantly reduced (approx. 300 requests), sparking frustration.
    [View Issue](https://github.com/QwenLM/qwen-code/issues/2426)

## 4. Key PR Progress
1.  **feat(core): execute task tools concurrently (#2434) [v0.13.0]**
    Enables parallel execution of independent task tools to improve performance, moving away from sequential processing.
    [View PR](https://github.com/QwenLM/qwen-code/pull/2434)
2.  **fix: improve max_tokens handling with conservative defaults (#2438)**
    **(Merged)** This fix increases default output limits and intelligently caps them to prevent API errors.
    [View PR](https://github.com/QwenLM/qwen-code/pull/2438)
3.  **fix(core): add truncation support for MCP tool output (#2446)**
    Prevents context window overflow by applying truncation logic to MCP tool results, which were previously unbounded.
    [View PR](https://github.com/QwenLM/qwen-code/pull/2446)
4.  **feat(ui): Display token usage in the loading/progress indicator (#2445)**
    Adds real-time token usage stats to the UI during generation, a feature heavily requested for parity with competitors.
    [View PR](https://github.com/QwenLM/qwen-code/pull/2445)
5.  **refactor: VS Code file completion system using fuzzy search (#2437)**
    Replaces client-side substring matching with backend fuzzy search for better performance in large workspaces.
    [View PR](https://github.com/QwenLM/qwen-code/pull/2437)
6.  **feat(vscode-ide-companion): add image paste support (#1978)**
    Implements the ability to paste images directly into the chat interface, addressing Issue #1951.
    [View PR](https://github.com/QwenLM/qwen-code/pull/1978)
7.  **feat: add `auth` CLI command (#2440)**
    Introduces a dedicated `qwen auth` command to simplify the configuration of OAuth and Alibaba Cloud credentials.
    [View PR](https://github.com/QwenLM/qwen-code/pull/2440)
8.  **fix: sanitize control characters in terminal output (#2007)**
    Fixes UI misalignment caused by carriage returns (`\r`) in tool outputs, specifically for Ink-based UIs.
    [View PR](https://github.com/QwenLM/qwen-code/pull/2007)
9.  **feat(hooks): implement hooks extension mechanism (#2352)**
    Adds lifecycle hooks for extensions, allowing commands to execute at specific events.
    [View PR](https://github.com/QwenLM/qwen-code/pull/2352)
10. **Support for Local Model Providers (LM Studio & Ollama) (#2385)**
    Improves out-of-the-box support for local model providers using OpenAI-compatible APIs.
    [View PR](https://github.com/QwenLM/qwen-code/pull/2385)

## 5. Feature Request Trends
*   **Enhanced Local Model Support:** Users want seamless integration with local deployments (Ollama, LM Studio) without complex `settings.json` editing.
*   **Workspace Portability:** Requests for storing config, chat history, and logs entirely within the workspace folder (`.qwen`) to sync environments across machines via Git.
*   **UI/UX Parity:** Frequent comparisons to tools like Claude Code and OpenCode, requesting features like token usage indicators and simpler API key configuration.
*   **Robust Testing Framework:** A trend toward professionalizing "Skills" development, specifically asking for automated testing/recording capabilities.

## 6. Developer Pain Points
*   **Configuration Complexity:** Users find `settings.json` cumbersome and documentation difficult to navigate ("long and messy"), demanding simpler CLI-based configuration like `qwen auth`.
*   **IDE/Container Connectivity:** A major frustration is the "Disconnected" error when using DevContainers, Remote SSH, or alternative IDEs like Cursor.
*   **Unstable Tooling:** Recent updates (v0.12.3+) caused regressions in connectivity and UI behavior, leading to downgrade requests.
*   **Clipboard Handling:** The inability to paste images or API keys directly into the CLI/Input fields creates significant friction in daily workflows.

</details>