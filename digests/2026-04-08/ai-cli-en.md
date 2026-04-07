# AI CLI Tools Community Digest 2026-04-08

> Generated: 2026-04-07 22:09 UTC | Tools covered: 7

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
**Report Date:** 2026-04-08

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing rapid maturation with aggressive feature iteration across all major players. The competitive focus has shifted from basic code completion to **multi-agent orchestration**, **enterprise-grade extensibility via MCP (Model Context Protocol)**, and **platform stability**—particularly on Windows. A clear bifurcation is emerging between proprietary, vertically-integrated solutions (Claude Code, OpenAI Codex, GitHub Copilot) pushing seamless cloud experiences, and open or permissive projects (OpenCode, Qwen Code, Kimi CLI) prioritizing multi-provider flexibility and community-driven architecture. Common growing pains include token consumption transparency, context window management, and the challenge of maintaining model quality while scaling agentic capabilities.

---

## 2. Activity Comparison

| Tool | Issues (Active Discussion) | PRs (Recent Activity) | Release Status (Last 24h) |
|------|----------------------------|----------------------|---------------------------|
| **Claude Code** | 10+ hot issues (750+ 👍 on top issue) | 10 PRs (plugins, diagnostics, open-source efforts) | **v2.1.94** — Bedrock/Mantle support, effort level changes |
| **OpenAI Codex** | 10 hot issues (464 comments on token burn) | 10 PRs (image gen, sandbox refactor) | **4 alpha releases** (v0.119.0-alpha.13-16) — Rapid Rust iteration |
| **Gemini CLI** | 10 hot issues (95 👍 on latency issue) | 10 PRs (memory management, Windows fixes) | **v0.37.0-preview.2**, **v0.36.0-nightly** |
| **GitHub Copilot CLI** | 10 hot issues (MCP config, rendering bugs) | 2 PRs (PATH guard, skill addition) | **v1.0.20 & v1.0.21** — MCP command, OpenTelemetry |
| **Kimi Code CLI** | 10 issues (API errors, rules system) | 10 PRs (Python→TypeScript rewrite proposal, hooks) | No release |
| **OpenCode** | 10 issues (provider failures, multi-agent) | 10 PRs (tool refactor, OTLP observability) | No release |
| **Qwen Code** | 10 issues (blank screen, edit failures) | 10 PRs (VS Code fix, CJK support, status line) | **v0.14.1** (quickly followed by v0.14.2 fix) |

**Key Observation:** Claude Code, OpenAI Codex, Gemini CLI, and GitHub Copilot CLI are shipping releases daily, indicating mature CI/CD pipelines. Kimi CLI and OpenCode are in heavy development phases with significant architectural PRs but no recent releases.

---

## 3. Shared Feature Directions

| Feature Direction | Tools Involved | Specific Requirements |
|-------------------|----------------|----------------------|
| **MCP (Model Context Protocol) Support** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi CLI, Qwen Code, OpenCode | Native MCP server management, tool discovery, lifecycle stability (session resume persistence) |
| **Hook Systems & Lifecycle Events** | Claude Code, OpenAI Codex, Kimi CLI, OpenCode | `PreToolUse`, `PostToolUse`, `Stop`, permission request hooks for external approval workflows and CI/CD integration |
| **Multi-Agent Orchestration** | Claude Code (wmux plugin), Gemini CLI, OpenCode | Coordinator shells, parallel subagent execution, shared memory, dependency-aware task decomposition |
| **Context Window Management** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode | Auto-compaction triggers, configurable context limits, session persistence, "effort" level controls |
| **Token/Billing Transparency** | Claude Code, OpenAI Codex | Clear consumption metrics, anomaly detection, rate limit visibility |
| **Windows Platform Stability** | Claude Code, Gemini CLI, GitHub Copilot CLI, Qwen Code | WSL segfaults, permissions handling, terminal rendering, MSYS2 compatibility |
| **OpenTelemetry/Observability** | GitHub Copilot CLI, OpenCode | OTLP tracing for latency analysis, distributed debugging |
| **Three-Tier Configuration Hierarchy** | Kimi CLI, Claude Code (CLAUDE.md), OpenCode | Global → User → Project rules precedence |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise integration (Bedrock/Vertex), plugin ecosystem, security guardrails | Enterprise teams, complex engineering workflows | TypeScript/Bun, closed-source with plugin extensibility, Mantle platform abstraction |
| **OpenAI Codex** | Image generation, Rust performance, sandbox isolation architecture | ChatGPT ecosystem users, performance-sensitive developers | Rust-based runtime, exec-server sandbox architecture, SIWC-first rollout |
| **Gemini CLI** | Agent latency optimization, context splitting, AST-aware tooling | Google Cloud users, large codebase teams | Go/TypeScript hybrid, role-specific metrics, browser agent isolation |
| **GitHub Copilot CLI** | Enterprise auth, terminal UX, VS Code ecosystem integration | GitHub-native developers, enterprise compliance | Native terminal rendering, OpenTelemetry, Azure OpenAI BYOK |
| **Kimi Code CLI** | Lifecycle hooks, rules hierarchy, memory persistence | Power users, Chinese market, automation-focused devs | Python → TypeScript/Bun/React Ink migration proposed, open development |
| **OpenCode** | Multi-provider flexibility, local model support, multi-agent coordination | Self-hosted teams, multi-model workflows, privacy-conscious orgs | Provider-agnostic, OTLP observability, Claude Code hooks compatibility |
| **Qwen Code** | CJK language optimization, WeChat/Telegram integration, Chinese ecosystem | Chinese developers, mobile-first workflows | VS Code extension focus, multimodal expansion (PDF, images) |

**Strategic Insight:** 
- **Proprietary tools** (Claude Code, Codex, Copilot) are doubling down on ecosystem lock-in through proprietary backends (Mantle, SIWC, GitHub auth).
- **Open/permissive tools** (OpenCode, Kimi CLI, Qwen Code) emphasize provider flexibility, local model support, and community-driven feature development.
- **Geographic differentiation** is emerging: Qwen Code targets Chinese users with WeChat/Telegram integration; Kimi CLI (MoonshotAI) serves similar markets.

---

## 5. Community Momentum & Maturity

| Category | Tools | Evidence |
|----------|-------|----------|
| **High Maturity, Rapid Iteration** | OpenAI Codex, GitHub Copilot CLI, Claude Code | Daily releases, enterprise features (MCP, OpenTelemetry, Bedrock), established issue triage |
| **Active Development, Scaling Pains** | Gemini CLI, Qwen Code | Preview releases, high-engagement issues on latency/UI, quick regression fixes |
| **Architectural Transition** | Kimi CLI | Major rewrite proposal (Python→TypeScript), hook system expansion, active community PRs |
| **Community-Driven Innovation** | OpenCode | Multi-agent proposals, provider compatibility crisis, OTLP observability PRs |

**Maturity Indicators:**
- **Claude Code** shows enterprise maturity (Bedrock, Team/Enterprise tiers) but faces significant community trust issues (750+ 👍 on performance regression issue).
- **OpenAI Codex** demonstrates aggressive iteration (4 alpha releases in one day) but lacks release note transparency.
- **GitHub Copilot CLI** has the most stable release cadence with clear enterprise features (OpenTelemetry, MCP management).
- **OpenCode** and **Kimi CLI** show the most ambitious architectural community contributions (full rewrites, multi-agent systems).

---

## 6. Trend Signals

### 🔴 Critical Industry-Wide Challenges

1. **Token Consumption Transparency Crisis**
   - Evidence: OpenAI Codex #14593 (464 comments), Claude Code #41930 (abnormal drain), Qwen Code #1937 (infinite loops)
   - **Signal:** Users lack visibility into agentic token consumption; runaway loops are causing billing disputes and trust erosion

2. **Model Performance Regression Concerns**
   - Evidence: Claude Code #42796 (750+ 👍 on Feb updates breaking engineering workflows), OpenAI Codex #16548/#13867 (model behavior inconsistencies)
   - **Signal:** Rapid model updates are degrading reliability for complex engineering tasks; users demand stability guarantees

3. **Windows Platform Second-Class Status**
   - Evidence: Claude Code (Bun segfaults), GitHub Copilot CLI (WSL CPU spinning), Qwen Code (MSYS2 crashes), Gemini CLI (SSH text scrambling)
   - **Signal:** Windows/WSL users face systemic stability issues across all tools; platform parity remains unresolved

### 🟢 Emerging Opportunities

4. **MCP as Universal Extensibility Standard**
   - Evidence: All 7 tools have MCP-related issues/PRs; GitHub Copilot CLI shipped `copilot mcp` command
   - **Signal:** MCP is becoming the de facto standard for AI CLI tool extensibility; tool discovery and lifecycle management are the next battleground

5. **Multi-Agent Orchestration Demand**
   - Evidence: Claude Code wmux plugin, OpenCode coordinator shell proposals, Gemini CLI parallelism requests
   - **Signal:** Single-agent workflows are insufficient for complex codebases; hierarchical agent architectures are the next frontier

6. **Observability as Enterprise Requirement**
   - Evidence: GitHub Copilot CLI (OpenTelemetry), OpenCode (OTLP support), Kimi CLI (diagnostic logging)
   - **Signal:** Enterprise adoption requires distributed tracing and debugging capabilities for agentic workflows

7. **Context Management Automation**
   - Evidence: Claude Code (effort levels, auto-compaction), Gemini CLI (context splitting), GitHub Copilot CLI (auto-compact requests)
   - **Signal:** Manual context management is unsustainable; intelligent context pruning and compaction are becoming table stakes

### 📊 Developer Decision Matrix

| Priority | Recommended Tool | Rationale |
|----------|------------------|-----------|
| **Enterprise Compliance** | GitHub Copilot CLI | OpenTelemetry, Azure BYOK, stable releases, GitHub ecosystem |
| **Multi-Provider Flexibility** | OpenCode | Provider-agnostic, local model support, OTLP observability |
| **Claude Ecosystem** | Claude Code | Bedrock/Vertex support, plugin ecosystem, enterprise tiers |
| **Chinese Market** | Qwen Code or Kimi CLI | WeChat integration, CJK optimization, local compliance |
| **Cutting-Edge Features** | OpenAI Codex | Image generation, Rust performance, rapid alpha iteration |
| **Cost Transparency** | ⚠️ No clear leader | All tools have token consumption opacity issues |

---

**Summary:** The AI CLI ecosystem is in a transitional phase where **extensibility (MCP)**, **multi-agent orchestration**, and **enterprise observability** are becoming competitive differentiators. However, foundational issues—token transparency, model regression, and Windows stability—remain unresolved across the board. Organizations should prioritize tools with clear enterprise support, stable release cadences, and active community engagement while advocating for better consumption metrics and platform parity.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** `anthropics/skills` (as of 2026-04-08)

---

## 1. Top Skills Ranking

Based on repository activity, here are the most prominent Skills currently under discussion or development:

| Rank | Skill | Functionality | Status |
|------|-------|---------------|--------|
| 1 | [**document-typography**](https://github.com/anthropics/skills/pull/514) | Quality control for AI-generated documents—fixes orphan word wrap, widow paragraphs, and numbering misalignment. | 🟡 Open |
| 2 | [**frontend-design** (Revamp)](https://github.com/anthropics/skills/pull/210) | Improves clarity and actionability of frontend design guidance for Claude. | 🟡 Open |
| 3 | [**skill-quality-analyzer & skill-security-analyzer**](https://github.com/anthropics/skills/pull/83) | Meta-skills for evaluating skill quality (5 dimensions) and security posture. | 🟡 Open |
| 4 | [**ODT Skill**](https://github.com/anthropics/skills/pull/486) | OpenDocument text creation, template filling, and ODT→HTML parsing (ISO/IEC 26300 standard). | 🟡 Open |
| 5 | [**testing-patterns**](https://github.com/anthropics/skills/pull/723) | Comprehensive testing guidance—Testing Trophy model, unit testing (AAA pattern), React component testing. | 🟡 Open |
| 6 | [**sensory (macOS Automation)**](https://github.com/anthropics/skills/pull/806) | Native macOS automation via AppleScript/osascript instead of screenshot-based computer use. | 🟡 Open |
| 7 | [**ServiceNow Platform**](https://github.com/anthropics/skills/pull/568) | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, and IntegrationHub. | 🟡 Open |
| 8 | [**shodh-memory**](https://github.com/anthropics/skills/pull/154) | Persistent context system for AI agents—maintains memory across conversations. | 🟡 Open |

---

## 2. Community Demand Trends

Analysis of open Issues reveals these high-demand directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Enterprise/Org Skill Sharing** | Organizations want centralized skill libraries for team-wide distribution. | [Issue #228](https://github.com/anthropics/skills/issues/228) — 4 👍 |
| **MCP Integration** | Community wants Skills exposed as Model Context Protocol tools for standardized APIs. | [Issue #16](https://github.com/anthropics/skills/issues/16) — 4 comments |
| **Security & Trust Boundaries** | Concerns about community skills appearing under `anthropic/` namespace; need clear trust model. | [Issue #492](https://github.com/anthropics/skills/issues/492) — 4 comments, 2 👍 |
| **Duplicate Skill Management** | Plugin overlap between `document-skills` and `example-skills` causing context bloat. | [Issue #189](https://github.com/anthropics/skills/issues/189) — 7 👍 |
| **Enterprise SSO Compatibility** | Skill-creator tools requiring `ANTHROPIC_API_KEY` exclude SSO/managed license users. | [Issue #532](https://github.com/anthropics/skills/issues/532) — 2 comments |
| **AWS Bedrock Support** | Users requesting guidance on running Skills with AWS Bedrock inference. | [Issue #29](https://github.com/anthropics/skills/issues/29) — 4 comments |

---

## 3. High-Potential Pending Skills

Active PRs with strong utility and recent activity, likely to merge:

| PR | Skill | Why It Matters |
|----|-------|----------------|
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX Tracked Change Fix** | Critical bugfix preventing document corruption from `w:id` collisions with existing bookmarks. |
| [#539](https://github.com/anthropics/skills/pull/539) | **YAML Validation Fix** | Prevents silent parsing failures when `description` fields contain unquoted special characters (`: # { } [ ]`). |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses community health gap—repo currently at 25% on GitHub health metrics. |
| [#363](https://github.com/anthropics/skills/pull/363) | **feature-dev Workflow Fix** | Fixes TodoWrite overwrite bug causing Phase 6/7 to skip during `/feature-dev` workflow. |
| [#147](https://github.com/anthropics/skills/pull/147) | **codebase-inventory-audit** | 10-step workflow producing `CODEBASE-STATUS.md` for orphaned code and documentation gaps. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for robust document generation quality (typography, ODT/DOCX standards) and enterprise-grade skill management (org sharing, security boundaries, SSO compatibility).**

---

# Claude Code Community Digest — 2026-04-08

## Today's Highlights

Claude Code v2.1.94 ships with Amazon Bedrock support via Mantle and upgrades default effort levels to "high" for paid tiers. The community is buzzing with concerns over model performance degradation following February updates, with a highly-discussed issue garnering 750+ 👍 reactions. Meanwhile, Windows platform stability remains a critical concern with multiple ongoing segfault and permissions issues.

---

## Releases

### v2.1.94
- **Amazon Bedrock via Mantle**: Set `CLAUDE_CODE_USE_MANTLE=1` to enable Mantle-powered Bedrock support
- **Default effort level change**: Moved from "medium" to "high" for API-key users, Bedrock/Vertex/Foundry, Team, and Enterprise tiers (controllable via `/effort`)
- **UI improvement**: Added compact `Slacked #channel` header with a cl (likely clipboard/collapse feature)

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [**#42796** - Claude Code unusable for complex engineering tasks with Feb updates](https://github.com/anthropics/claude-code/issues/42796) | **750 👍 · 114 comments** — Major regression report claiming the February model updates broke complex engineering workflows. Now closed, but represents significant user discontent. |
| 2 | [**#5088** - Claude Account Disabled After Payment for Max 5x Plan](https://github.com/anthropics/claude-code/issues/5088) | **47 👍 · 159 comments** — Long-standing payment/account access issue affecting Max plan subscribers since August 2025. Still open with oncall assigned. |
| 3 | [**#27302** - Support multiple Connector accounts](https://github.com/anthropics/claude-code/issues/27302) | **140 👍 · 102 comments** — Feature request for using multiple accounts of the same connector type (e.g., multiple GitHub orgs). High community demand. |
| 4 | [**#41930** - Widespread abnormal usage limit drain since March 23](https://github.com/anthropics/claude-code/issues/41930) | **29 👍 · 31 comments** — Critical report identifying multiple root causes for token consumption anomalies across paid tiers. No formal communication from Anthropic yet. |
| 5 | [**#21875** - Repeated Bun v1.3.5 segfaults on Windows + WSL](https://github.com/anthropics/claude-code/issues/21875) | **8 👍 · 27 comments** — 78 documented crashes with root cause identified. High-priority, has repro. Windows users severely affected. |
| 6 | [**#36192** - `--dangerously-skip-permissions` doesn't bypass Edit prompts](https://github.com/anthropics/claude-code/issues/36192) | **12 👍 · 22 comments** — Automation-blocking bug where the skip-permissions flag fails for Edit operations. Affects CI/CD workflows. |
| 7 | [**#42248** - macOS Desktop ignores PATH, Read tool can't find poppler](https://github.com/anthropics/claude-code/issues/42248) | **13 👍 · 16 comments** — Desktop app environment isolation breaks tool discovery for Homebrew-installed utilities. |
| 8 | [**#43989** - v2.1.92 regression: autocompact threshold reduced to 400k on Opus 4.6](https://github.com/anthropics/claude-code/issues/43989) | **4 comments** — Undocumented regression halving the effective context window for Opus 4.6 (1M context model). Impacts long-running sessions. |
| 9 | [**#44868** - Claude Code exposes secrets from .env files despite CLAUDE.md prohibitions](https://github.com/anthropics/claude-code/issues/44868) | **New** — Security concern: model reads and echoes secrets even with explicit instructions against it. Safety reflex fires too late. |
| 10 | [**#26767** - Effort doesn't work with Bedrock Application Inference Profiles](https://github.com/anthropics/claude-code/issues/26767) | **6 👍 · 4 comments** — `/effort` command compatibility issue with Bedrock inference profiles. Relevant given new Mantle/Bedrock support in v2.1.94. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [**#44874** - feat: add wmux-orchestrator plugin](https://github.com/anthropics/claude-code/pull/44874) | Multi-agent task orchestration plugin that decomposes complex tasks into parallel Claude Code agents with dependency-aware wave coordination. |
| 2 | [**#44742** - fix: diagnostic tool for session persistence data loss](https://github.com/anthropics/claude-code/pull/44742) | Addresses critical data loss bug where VS Code extension fails to persist conversation transcripts. Includes diagnostic script and root cause analysis. |
| 3 | [**#41447** - feat: open source claude code](https://github.com/anthropics/claude-code/pull/41447) | Community-driven PR to open-source Claude Code. References multiple related issues (#59, #456, #2846, #22002, #41434). |
| 4 | [**#41518** - Fully Open Source Claude Code](https://github.com/anthropics/claude-code/pull/41518) | Alternative open-source effort: extracted 1,906 TypeScript files from cli.js.map, added Bun bundler config, successfully builds. |
| 5 | [**#44676** - fix(plugin-dev): add missing plugin manifest](https://github.com/anthropics/claude-code/pull/44676) | Adds missing `plugin.json` for bundled plugin-dev to align with marketplace entry. |
| 6 | [**#44681** - fix(security-guidance): remove stale exec guidance](https://github.com/anthropics/claude-code/pull/44681) | Security documentation cleanup for plugin development. |
| 7 | [**#41938** - Add Linux/macOS Bash script for DevContainer startup](https://github.com/anthropics/claude-code/pull/41938) | Cross-platform parity: adds Bash equivalent to existing Windows PowerShell DevContainer script. |
| 8 | [**#39148** - feat: add preserve-session plugin](https://github.com/anthropics/claude-code/pull/39148) | Path-independent session history using UUID registry. Survives directory renames/moves with `/preserve-session:fix` command. |
| 9 | [**#41611** - add the missing source to claude code](https://github.com/anthropics/claude-code/pull/41611) | Another source extraction attempt for open-source initiative. |
| 10 | [**#41661** - Add 14 Revolutionary Claude Code Plugins](https://github.com/anthropics/claude-code/pull/41661) | **CLOSED** — Large plugin collection (security, performance, architecture, fullstack automation). Updated marketplace to 27 plugins total. |

---

## Feature Request Trends

1. **Open Source Claude Code** — Multiple PRs (#41447, #41518, #41611) and issues reflect strong community desire for source access
2. **Multi-account Connector Support** — High demand (#27302 with 140 👍) for using multiple accounts of same connector type
3. **Agent SDK for Personal Development** — Request to allow OAuth/subscription tokens with Agent SDK (#42106)
4. **Persistent Observer Agents** — Feature request for agents with conversation access that persist across sessions (#44882)
5. **Session Management UX** — Request for "Start new session" option in conversation resumption menu (#44886)

---

## Developer Pain Points

1. **Windows Platform Instability** — Recurring theme: Bun segfaults (#21875), permissions issues (#36192), CR/LF handling (#38887), MCP server loading (#32951), cowork VM networking (#41167)
2. **Token/Usage Consumption Anomalies** — Widespread reports of abnormal usage drain (#41930, #44885, #44885) especially for Max plan users experiencing drastically reduced session longevity
3. **Model Performance Regression** — Post-February updates perceived as degrading complex engineering capability (#42796, #44461, #44865)
4. **Security/Secrets Handling** — Model exposes secrets from `.env` files despite explicit prohibitions (#44868)
5. **Authentication/Account Issues** — Long-running payment-to-access problems (#5088, #42049) with slow resolution
6. **Desktop App Environment Isolation** — PATH issues on macOS prevent tool discovery (#42248, #41722)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-04-08

---

## 1. Today's Highlights

The Codex team has shipped four rapid-fire Rust alpha releases (v0.119.0-alpha.13–16), indicating an aggressive iteration cycle on the core runtime. A major new feature—**image generation**—has been merged and enabled by default, though it is currently rolling out only to SIWC (Sign-In with ChatGPT) users due to websocket stability concerns. On the issue tracker, **token consumption rate limits** and **macOS Intel support** continue to dominate community discussion, while several PRs focus on architectural refactoring to move sandbox execution to a dedicated exec-server.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **rust-v0.119.0-alpha.16** | Latest alpha release in the 0.119.0 cycle. |
| **rust-v0.119.0-alpha.15** | Preceding alpha build. |
| **rust-v0.119.0-alpha.14** | Preceding alpha build. |
| **rust-v0.119.0-alpha.13** | Preceding alpha build. |

*Note: No detailed release notes were provided in the data source beyond version bumps.*

---

## 3. Hot Issues

| # | Title | Why It Matters |
|---|-------|----------------|
| **[#14593](https://github.com/openai/codex/issues/14593)** | **Burning tokens very fast** | The #1 discussed issue (464 comments). Business users report rapid, unexplained token consumption, suggesting potential runaway agent loops or billing transparency problems. |
| **[#10410](https://github.com/openai/codex/issues/10410)** | **macOS Intel (x86_64) support** | Highly upvoted (👍 243). Users on Intel Macs are still without native desktop app support, creating a significant adoption barrier for a large macOS cohort. |
| **[#12764](https://github.com/openai/codex/issues/12764)** | **CLI 401 Unauthorized** | 93 comments. Authentication failures via `codex-cli` connecting to ChatGPT backend are blocking developer workflows, with potential issues in token refresh or session handling. |
| **[#9224](https://github.com/openai/codex/issues/9224)** | **Codex Remote Control** | 👍 246. Community wants the ability to control desktop CLI sessions remotely from the ChatGPT mobile app, enabling mobile-to-desktop coding workflows. |
| **[#16231](https://github.com/openai/codex/issues/16231)** | **High CPU usage on macOS** | Regression in VS Code extension v26.325 causing significant CPU spikes and thermal throttling on Apple Silicon (M5 Pro). |
| **[#13993](https://github.com/openai/codex/issues/13993)** | **Standalone Windows installer** | Users in corporate/offline environments cannot use Microsoft Store builds; requesting a traditional `.exe` installer. |
| **[#11095](https://github.com/openai/codex/issues/11095)** | **Cannot reach localhost services from sandbox** | Sandbox isolation prevents communication with local dev services (e.g., Docker containers), breaking common development patterns. |
| **[#16799](https://github.com/openai/codex/issues/16799)** | **Cross-project state leak** | Security concern: CLI session instructions leak approved command paths between unrelated projects. |
| **[#16548](https://github.com/openai/codex/issues/16548)** | **spawn_agent ignores gpt-5.4-mini** | Subagents launched with `gpt-5.4-mini` incorrectly use the full `gpt-5.4` model, impacting cost control and orchestration. |
| **[#13867](https://github.com/openai/codex/issues/13867)** | **GPT-5.4 emits internal tool format** | Model outputs corrupted internal `multi_tool_use.parallel` format mixed with training data artifacts instead of proper API tool calls. |

---

## 4. Key PR Progress

| PR | Title | Summary |
|----|-------|---------|
| **[#17049](https://github.com/openai/codex/pull/17049)** | Enable image generation by default | Marks `image_generation` as stable and enables it by default. **Closed/Merged.** |
| **[#17046](https://github.com/openai/codex/pull/17046)** | Image-gen SIWC rollout | Gates image generation to SIWC users only due to websocket load issues with ResponsesAPI. |
| **[#16736](https://github.com/openai/codex/pull/16736)** | Move unified-exec sandbox to exec-server | Major architectural refactor moving sandbox launch logic to a dedicated exec-server protocol. |
| **[#17048](https://github.com/openai/codex/pull/17048)** | Apply patches through executor filesystem | Improves `apply_patch` handling in remote environments by using executor filesystem instead of local shell. |
| **[#17039](https://github.com/openai/codex/pull/17039)** | Reduce TUI startup latency | Async fetching of account/rate limits to unblock TUI bootstrap. |
| **[#17040](https://github.com/openai/codex/pull/17040)** | Fix network proxy sandbox mode refresh | Ensures proxy settings update correctly when sandbox mode changes. |
| **[#15937](https://github.com/openai/codex/pull/15937)** | Managed hooks policy | Adds `allow_managed_hooks_only` config for enterprise security controls over lifecycle hooks. |
| **[#15936](https://github.com/openai/codex/pull/15936)** | Trusted-before-project hook ordering | Enforces execution order where non-project hooks run before project hooks for security-sensitive events. |
| **[#15134](https://github.com/openai/codex/pull/15134)** | Dismiss stale app-server requests | Fixes UI leaving stale approval overlays when requests are resolved by another client. |
| **[#15695](https://github.com/openai/codex/pull/15695)** | Async config loading | Refactors config loading to be async, improving startup performance. |

---

## 5. Feature Request Trends

1. **Remote Control & Mobile Integration** – Strong demand for mobile-to-desktop session control ([#9224](https://github.com/openai/codex/issues/9224)).
2. **Platform Parity** – Persistent requests for macOS Intel ([#10410](https://github.com/openai/codex/issues/10410)) and standalone Windows installer ([#13993](https://github.com/openai/codex/issues/13993)).
3. **Hook System Enhancements** – Requests for machine-readable event surfaces ([#16484](https://github.com/openai/codex/issues/16484)) and permission request hooks for auto-approve flows ([#16301](https://github.com/openai/codex/issues/16301)).
4. **Local Service Access in Sandbox** – Need to reach `localhost` services from within sandboxed environments ([#11095](https://github.com/openai/codex/issues/11095)).
5. **UI/UX Shortcuts** – Quick model/thinking mode switching via keyboard shortcuts ([#2920](https://github.com/openai/codex/issues/2920)).

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Token/Billing Transparency** | Users report "burning tokens very fast" without clear visibility into consumption ([#14593](https://github.com/openai/codex/issues/14593)). |
| **Authentication Stability** | Multiple auth-related failures (401 errors, session refresh issues) impacting CLI workflows ([#12764](https://github.com/openai/codex/issues/12764), [#17041](https://github.com/openai/codex/issues/17041)). |
| **Performance Regressions** | High CPU/GPU usage on macOS ([#16231](https://github.com/openai/codex/issues/16231), [#16857](https://github.com/openai/codex/issues/16857)) and startup hangs with large SSH configs ([#16553](https://github.com/openai/codex/issues/16553)). |
| **Sandbox Isolation Limitations** | Cannot reach localhost services ([#11095](https://github.com/openai/codex/issues/11095)) and shell blocking issues ([#16331](https://github.com/openai/codex/issues/16331)). |
| **Windows Stability** | App crashes on startup ([#16502](https://github.com/openai/codex/issues/16502)), MCP initialization failures ([#16834](https://github.com/openai/codex/issues/16834)), and path resolution bugs ([#16997](https://github.com/openai/codex/issues/16997)). |
| **Model Behavior Inconsistencies** | Internal format leakage ([#13867](https://github.com/openai/codex/issues/13867)), subagent model mismatch ([#16548](https://github.com/openai/codex/issues/16548)), and cross-project state leaks ([#16799](https://github.com/openai/codex/issues/16799)). |

---

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-04-08

## 1. Today's Highlights
The Gemini CLI team is actively stabilizing the **v0.37.0** release cycle, issuing a second preview patch (`v0.37.0-preview.2`) while integrating "role-specific metrics" and context splitting improvements into the nightly builds. A critical community thread regarding **severe agent latency** (1+ hour delays) continues to gain traction, highlighting significant pain points in agentic editing workflows. Meanwhile, development efforts are heavily focused on **platform robustness**, with multiple PRs addressing Windows compatibility, SSH detection, and memory management for large tool outputs.

## 2. Releases
### **v0.37.0-preview.2**
*   **Changelog:** A patch release primarily cherry-picking fixes to stabilize the `v0.37.0` preview branch.
*   **Link:** [Release v0.37.0-preview.2](https://github.com/google-gemini/gemini-cli/pull/24842)

### **v0.36.0-nightly.20260407**
*   **Changelog:** Introduced role-specific metrics to the `/stats` command and implemented context splitting optimizations.
*   **Link:** [Release v0.36.0-nightly](https://github.com/google-gemini/gemin)

## 3. Hot Issues
1.  **[OPEN] Gemini CLI becomes extremely slow (1+ HOURS) / stuck during small code-edit tasks** (#22141)
    *   **Why it matters:** This is the highest-voted issue (👍 95) currently. Users report the agent entering "zombie states" for hours during trivial edits, severely impacting developer productivity.
    *   **Link:** [Issue #22141](https://github.com/google-gemini/gemini-cli/issues/22141)
2.  **[OPEN] Feature Request - Increased Limits and Enhanced SubAgent Parallelism** (#24856)
    *   **Why it matters:** A new feature request asking for larger context windows and better parallel execution for subagents to handle complex enterprise-scale codebases.
    *   **Link:** [Issue #24856](https://github.com/google-gemini/gemini-cli/issues/24856)
3.  **[OPEN] Gemini CLI encounters 400 error with > 128 tools** (#24246)
    *   **Why it matters:** As the tool ecosystem grows, the CLI hits API limits, causing failures. This affects users with heavy plugin or extension configurations.
    *   **Link:** [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)
4.  **[OPEN] Model frequently creates tmp scripts in random spots** (#23571)
    *   **Why it matters:** A cleanliness/workspace hygiene issue where the agent litters the repository with temporary scripts, making version control difficult.
    *   **Link:** [Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)
5.  **[OPEN] [BUG] Browser Agent ignores settings.json overrides** (#22267)
    *   **Why it matters:** Configuration regression where global settings like `maxTurns` are ignored by the Browser Agent, potentially leading to infinite loops or cost overruns.
    *   **Link:** [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)
6.  **[OPEN] Subagent recovery after MAX_TURNS reports as GOAL success** (#22323)
    *   **Why it matters:** A "silent failure" where a subagent claims success despite hitting a turn limit, making debugging agentic workflows deceptive and difficult.
    *   **Link:** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
7.  **[OPEN] Implement memory routing: global vs. project** (#22819)
    *   **Why it matters:** A key architectural request to separate user preferences (global) from codebase-specific context (project), improving agent context awareness.
    *   **Link:** [Issue #22819](https://github.com/google-gemini/gemini-cli/issues/22819)
8.  **[OPEN] Assess the impact of AST-aware file reads** (#22745)
    *   **Why it matters:** Investigation into using Abstract Syntax Trees (AST) for file operations, which could drastically reduce token usage and improve code precision.
    *   **Link:** [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
9.  **[OPEN] Running SSH the text is scrambled** (#24202)
    *   **Why it matters:** High-friction bug for remote developers using Windows SSH to access Linux environments, rendering the CLI unusable.
    *   **Link:** [Issue #24202](https://github.com/google-gemini/gemini-cli/issues/24202)
10. **[OPEN] Subagents Awareness of Active Approval Modes** (#23582)
    *   **Why it matters:** Subagents currently try to perform actions that violate the active "Plan Mode" or "Auto-Edit Mode," causing friction and policy rejections.
    *   **Link:** [Issue #23582](https://github.com/google-gemini/gemini-cli/issues/23582)

## 4. Key PR Progress
1.  **feat(cli): refine tool output formatting for compact mode** (#24677)
    *   Improves information density in the terminal by cleaning up search and read tool outputs.
    *   **Link:** [PR #24677](https://github.com/google-gemini/gemini-cli/pull/24677)
2.  **perf(core): improve memory management for large tool output** (#20406)
    *   Critical performance fix that writes large shell outputs to disk instead of memory to prevent V8 OOM crashes.
    *   **Link:** [PR #20406](https://github.com/google-gemini/gemini-cli/pull/20406)
3.  **fix: preserve OAuth URLs in terminal auth flows** (#24853)
    *   Fixes a high-priority UX bug where login URLs were truncated or broken in narrow terminal windows.
    *   **Link:** [PR #24853](https://github.com/google-gemini/gemini-cli/pull/24853)
4.  **fix: isolate concurrent browser agent instances** (#24794)
    *   Fixes a race condition where concurrent browser agents would fight over a single singleton browser instance.
    *   **Link:** [PR #24794](https://github.com/google-gemini/gemini-cli/pull/24794)
5.  **refactor(plan): simplify policy priorities and consolidate read-only rules** (#24849)
    *   Cleans up the "Plan Mode" policy engine to reduce redundancy and prevent priority conflicts.
    *   **Link:** [PR #24849](https://github.com/google-gemini/gemini-cli/pull/24849)
6.  **fix(core): handle nested plan files by resolving paths correctly** (#24854)
    *   Fixes a bug preventing the creation of nested directory structures for plan files.
    *   **Link:** [PR #24854](https://github.com/google-gemini/gemini-cli/pull/24854)
7.  **fix: use directory junctions on Windows for skill linking** (#24823)
    *   Resolves `EPERM` errors on Windows when linking skills by switching from symlinks to junctions.
    *   **Link:** [PR #24823](https://github.com/google-gemini/gemini-cli/pull/24823)
8.  **test(core): optimize sandbox integration tests to fix Windows CI flakiness** (#24834)
    *   Infrastructure improvement to stabilize Windows CI pipelines by optimizing `icacls.exe` usage in sandbox tests.
    *   **Link:** [PR #24834](https://github.com/google-gemini/gemini-cli/pull/24834)
9.  **feat(cli): add OSC 8 hyperlinks for file paths and URLs** (#24826)
    *   Enhances terminal UX by making file paths clickable hyperlinks in supported terminals (VS Code, iTerm2).
    *   **Link:** [PR #24826](https://github.com/google-gemini/gemini-cli/pull/24826)
10. **feat(acp): add /help command** (#24839)
    *   Improves discoverability of commands within the Agent Client Protocol interface.
    *   **Link:** [PR #24839](https://github.com/google-gemini/gemini-cli/pull/24839)

## 5. Feature Request Trends
*   **Agent Context & Memory Management:** Strong demand for "smarter" memory, specifically distinguishing between global user preferences and project-specific facts (#22819), and proactively saving memories without explicit user prompts (#22809).
*   **AST-Aware Tooling:** A growing workstream is pushing for the CLI to understand code structure (AST) rather than treating files as text, aiming to reduce token waste and improve precision (#22745, #22746).
*   **Enhanced Parallelism:** Users are requesting the ability to run more subagents in parallel and increased token limits to handle larger codebases (#24856).
*   **Safety & Hygiene:** Requests to prevent the agent from creating "tmp" files randomly (#23571) and to enforce safer git operations (preventing `git reset --force`) (#22672).

## 6. Developer Pain Points
*   **Agent Latency & Reliability:** The most significant pain point remains the "zombie" agent loops, where the CLI gets stuck for hours on simple tasks (#22141).
*   **Platform Inconsistencies:** Windows and SSH users continue to face friction, ranging from text scrambling in SSH (#24202) to permission errors on file linking (#24823).
*   **Tool Management Limits:** Developers hitting the 128-tool limit are experiencing 400 errors, indicating the need for smarter tool filtering or higher API limits (#24246).
*   **Opaque Failures:** Subagents reporting "success" when they actually hit turn limits creates difficult debugging scenarios (#22323).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-08

## 1. Today's Highlights
The GitHub Copilot CLI team has pushed two significant stable releases (**v1.0.20** and **v1.0.21**) in the last 24 hours, headlined by the new `copilot mcp` command for managing MCP servers and official OpenTelemetry support for monitoring. The community is actively discussing terminal rendering behaviors, specifically around "alt-screen" conflicts and clipboard handling (Byte Order Marks), while requesting deeper customizability for status bars and session management.

## 2. Releases

### **v1.0.21** (2026-04-07)
*   **New Features:**
    *   **`copilot mcp` command:** Introduces direct management capabilities for MCP (Model Context Protocol) servers.
*   **Fixes & Improvements:**
    *   Resolved spinner UI freezing during long-running asynchronous shell commands.
    *   Enterprise login flow now correctly accepts keyboard input and submits on Enter.
    *   Fixed visual flickering in the slash command picker.

### **v1.0.20** (2026-04-07)
*   **New Features:**
    *   **OpenTelemetry Support:** Added `copilot help monitoring` topic containing configuration details and examples for observability.
*   **Improvements:**
    *   Spinner logic updated to remain active until background agents/shell commands finish, keeping user input available throughout.
    *   Azure OpenAI BYOK (Bring Your Own Key) now defaults to the GA versionless v1 route.

---

## 3. Hot Issues

1.  **[#2232 MCP Config Loading Failure](https://github.com/github/copilot-cli/issues/2232)**
    *   **Why:** High engagement (11 upvotes). Users report that v1.0.11-1 failed to load `.mcp.json` or `.vscode/mcp.json`, breaking custom tool integrations. This appears to be a core regression affecting the extensibility of the CLI.
2.  **[#2344 Native Terminal Copy Behavior Broken](https://github.com/github/copilot-cli/issues/2344)**
    *   **Why:** A recent change to the input handling overwrote standard terminal "copy-on-select" behavior, frustrating users who rely on native terminal features.
3.  **[#2406 Clipboard Byte Order Mark (BOM) Bug](https://github.com/github/copilot-cli/issues/2406)**
    *   **Why:** Copying text from the new rendering engine inserts a unicode BOM character at the start of the clipboard, causing "command not found" errors when pasting commands into shells.
4.  **[#2208 WSL CPU Spinning / Unresponsive TUI](https://github.com/github/copilot-cli/issues/2208)**
    *   **Why:** Critical performance issue on Windows Subsystem for Linux (WSL) causing 100% CPU usage and unresponsiveness, potentially linked to large context states (e.g., Claude Opus 4.6 1M).
5.  **[#2008 Auto-Compact for Context Limits](https://github.com/github/copilot-cli/issues/2008)**
    *   **Why:** Highly requested (3 upvotes). Long sessions currently hit CAPIError 400 limits, killing the process. Users want automatic context compaction *before* the error occurs rather than after losing work.
6.  **[#2107 Environment Variable for MCP Host Detection](https://github.com/github/copilot-cli/issues/2107)**
    *   **Why:** Open issue. Developers need a stable environment variable so local MCP servers can reliably detect they are running as a subprocess of Copilot CLI.
7.  **[#2283 OpenAI-Compatible Base URL Support](https://github.com/github/copilot-cli/issues/2283)**
    *   **Why:** Users want to route traffic through proxies like LiteLLM or Ollama using `OPENAI_BASE_URL`. Currently, the CLI ignores these variables in favor of proprietary endpoints.
8.  **[#2304 MCP Tools Fail on Session Resume](https://github.com/github/copilot-cli/issues/2304)**
    *   **Why:** Resuming a session via checkpoint restore breaks the connection to MCP server tools, rendering the "resume" feature ineffective for complex workflows involving external tools.
9.  **[#1444 Infinite Loop on Empty Bash Tool Call](https://github.com/github/copilot-cli/issues/1444)**
    *   **Why:** An open bug where the CLI gets stuck in a loop invoking an empty bash command thousands of times, requiring a process kill.
10. **[#2326 Customizable Status Bar Context](https://github.com/github/copilot-cli/issues/2326)**
    *   **Why:** Users want the status bar to display situational awareness info like Git auth status and working directory context, similar to other modern AI CLI tools.

---

## 4. Key PR Progress

*Only 2 PRs were updated in the last 24 hours; significant feature work appears to be landing directly via the releases noted above.*

1.  **[#2565 Guard Against Duplicate PATH Entries](https://github.com/github/copilot-cli/pull/2565)**
    *   **Fix:** Prevents the installer from appending duplicate PATH configuration lines to the shell profile if the user runs the installer twice without restarting their shell.
2.  **[#2556 Developer Skill Addition](https://github.com/github/copilot-cli/pull/2556)**
    *   **Feature:** Proposes adding a "Developer skill" (level up skills) to the default capabilities.

---

## 5. Feature Request Trends

*   **Status Bar Customization:** A strong trend involves users requesting a "persistent" and informative status bar. Requests include showing current model names, git branch, token usage/context percentage, and custom user-defined context ([#2347](https://github.com/github/copilot-cli/issues/2347), [#2342](https://github.com/github/copilot-cli/issues/2342)).
*   **Agent & Session Management:** Users want smarter session handling, such as auto-generating session names via `/rename` ([#2292](https://github.com/github/copilot-cli/issues/2292)) and user-scoped hooks that work across repositories ([#2430](https://github.com/github/copilot-cli/issues/2430)).
*   **Accessibility & Feedback:** Requests for audio alerts when input is required ([#2299](https://github.com/github/copilot-cli/issues/2299)) and better visual differentiation between user input and AI output ([#2288](https://github.com/github/copilot-cli/issues/2288)).

## 6. Developer Pain Points

*   **Terminal Rendering & Input:** The new rendering engine is causing friction with standard terminal behaviors. Specifically, mouse selections/copies are broken in "alt-screen" mode ([#2384](https://github.com/github/copilot-cli/issues/2384)), and keyboard inputs are being dropped in permission prompts/feedback forms ([#2313](https://github.com/github/copilot-cli/issues/2313), [#2360](https://github.com/github/copilot-cli/issues/2360)).
*   **MCP Stability:** While MCP support is expanding, developers are experiencing fragility in the lifecycle—tools stopping after `/new` commands ([#2312](https://github.com/github/copilot-cli/issues/2312)) or failing to load entirely ([#2232](https://github.com/github/copilot-cli/issues/2232)).
*   **Silent Failures:** Several reports indicate the CLI exits silently with non-zero codes during authentication or proxy errors, making debugging difficult ([#2184](https://github.com/github/copilot-cli/issues/2184), [#2225](https://github.com/github/copilot-cli/issues/2225)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-04-08

## 1. Today's Highlights

Community activity is surging around **extensibility and lifecycle management**, with multiple Pull Requests introducing hook systems for permissions, user prompts, and external approval workflows. A significant proposal to rewrite the entire CLI from Python to **Bun + TypeScript + React Ink** (PR #1707) has sparked interest regarding the project's future architectural direction. Additionally, several quality-of-life features like a three-tier rules system and session management commands are under active development.

## 2. Releases

No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1.  **[OPEN] [bug] API Error: 400 {"error":{"type":"invalid_request_error"...} (#1344)**
    *   **Why it matters:** A persistent "Invalid request Error" affecting multiple versions. With 21 comments, it is currently the most active discussion, indicating a critical or recurring stability issue with the API layer.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1344](https://github.com/MoonshotAI/kimi-cli/issues/1344)

2.  **[OPEN] [enhancement] Feature Request: Three-tier Rules System (#1747)**
    *   **Why it matters:** Proposes a structured hierarchy (Global > User > Project) for coding guidelines. This is a highly requested feature to bring consistency to AI behavior across different projects.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1747](https://github.com/MoonshotAI/kimi-cli/issues/1747)

3.  **[OPEN] [Bug] UserPromptSubmit hook event sends empty prompt field (#1779)**
    *   **Why it matters:** Affecting users trying to build monitoring or logging integrations. The hook mechanism fails to pass the actual user input, breaking external tool integrations.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1779](https://github.com/MoonshotAI/kimi-cli/issues/1779)

4.  **[OPEN] [bug] @mention file path error (#1774)**
    *   **Why it matters:** Users reporting that file context mentions (`@`) fail to resolve paths correctly in specific environments (e.g., home directory), hampering the tool's ability to reference local code.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1774](https://github.com/MoonshotAI/kimi-cli/issues/1774)

5.  **[OPEN] [Feature Request] Add /delete command to remove sessions (#1783)**
    *   **Why it matters:** Highlights a gap in session hygiene. Users currently lack a CLI-native way to manage disk space and privacy without manually editing filesystem folders.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1783](https://github.com/MoonshotAI/kimi-cli/issues/1783)

6.  **[OPEN] [bug] Streamable HTTP MCP connection error (#1785)**
    *   **Why it matters:** Reports of "Field name duplicated" errors when connecting to MCP (Model Context Protocol) servers, affecting users extending the CLI with custom tools.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1785](https://github.com/MoonshotAI/kimi-cli/issues/1785)

7.  **[OPEN] [enhancement] Memory persistence and work site restoration (#1782)**
    *   **Why it matters:** Users are asking for "save states" or memory branching to restore context after reboots or to revert to earlier logic paths in long conversations.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1782](https://github.com/MoonshotAI/kimi-cli/issues/1782)

8.  **[OPEN] [bug] LLM provider error: Connection error (#1775)**
    *   **Why it matters:** Basic connectivity failure on Windows 11 for the latest version (1.30.0), potentially blocking upgrades for a segment of the user base.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1775](https://github.com/MoonshotAI/kimi-cli/issues/1775)

9.  **[CLOSED] [bug] File mentions (@) can't find the files (#1375)**
    *   **Why it matters:** Although closed, this issue tracks the history of file discovery performance problems in large repos, relevant to understanding current PR fixes.
    *   **Link:** [MoonshotAI/kimi-cli Issue #1375](https://github.com/MoonshotAI/kimi-cli/issues/1375)

10. **[CLOSED] [enhancement] add hook for kimi-cli lifecycle (#1772)**
    *   **Why it matters:** A successful proposal to add `sessionStart` and `PromptInput` hooks, enabling better integration with external monitoring tools like "vibe-islands".
    *   **Link:** [MoonshotAI/kimi-cli Issue #1772](https://github.com/MoonshotAI/kimi-cli/issues/1772)

## 4. Key PR Progress

1.  **[OPEN] refactor: rewrite from Python to Bun + TypeScript + React Ink (#1707)**
    *   **Details:** A massive community contribution attempting a full stack migration to TypeScript. Includes 166 files and 32k lines of code, aiming for better terminal rendering performance via React Ink.
    *   **Link:** [MoonshotAI/kimi-cli PR #1707](https://github.com/MoonshotAI/kimi-cli/pull/1707)

2.  **[OPEN] feat(hooks): add PermissionRequest hook (#1751)**
    *   **Details:** Introduces a hook for external approval workflows, allowing tools to pause execution for user consent via desktop notifications or webhooks.
    *   **Link:** [MoonshotAI/kimi-cli PR #1751](https://github.com/MoonshotAI/kimi-cli/pull/1751)

3.  **[OPEN] fix: extract text from ContentPart list for UserPromptSubmit hook (#1781)**
    *   **Details:** Direct fix for Issue #1779, ensuring that shell UI inputs are correctly serialized to strings before being passed to hook events.
    *   **Link:** [MoonshotAI/kimi-cli PR #1781](https://github.com/MoonshotAI/kimi-cli/pull/1781)

4.  **[OPEN] feat(auth): add AWS Bedrock Mantle platform support (#1784)**
    *   **Details:** Extends the `/login` flow to support AWS Bedrock Mantle, dynamically constructing region-based URLs for enterprise users.
    *   **Link:** [MoonshotAI/kimi-cli PR #1784](https://github.com/MoonshotAI/kimi-cli/pull/1784)

5.  **[OPEN] feat(plugin): add Claude-compatible local plugin support (#1715)**
    *   **Details:** Adds a compatibility layer to discover and run local Claude Plugins, moving Kimi CLI toward broader ecosystem interoperability.
    *   **Link:** [MoonshotAI/kimi-cli PR #1715](https://github.com/MoonbotAI/kimi-cli/pull/1715)

6.  **[OPEN] fix: gracefully handle MCP connection failure (#1780)**
    *   **Details:** Prevents the worker process from crashing when an MCP server connection fails (e.g., port conflicts), improving robustness.
    *   **Link:** [MoonshotAI/kimi-cli PR #1780](https://github.com/MoonshotAI/kimi-cli/pull/1780)

7.  **[OPEN] Three-tier Rules System (#1777)**
    *   **Details:** Implementation of the requested hierarchy for development guidelines (Issue #1747), separating global, user, and project rules.
    *   **Link:** [MoonshotAI/kimi-cli PR #1777](https://github.com/MoonshotAI/kimi-cli/pull/1777)

8.  **[CLOSED] feat(btw): add /btw side question command (#1743)**
    *   **Details:** Adds a `/btw` command for "side questions" that don't interrupt the main agent context, addressing context pollution issues.
    *   **Link:** [MoonshotAI/kimi-cli PR #1743](https://github.com/MoonshotAI/kimi-cli/pull/1743)

9.  **[CLOSED] feat(logging): add diagnostic logging at key error paths (#1756)**
    *   **Details:** Enhances `kimi export` logs with 25+ new error call sites, drastically improving debuggability for remote triage.
    *   **Link:** [MoonshotAI/kimi-cli PR #1756](https://github.com/MoonshotAI/kimi-cli/pull/1756)

10. **[CLOSED] fix(shell): use git ls-files for @ file mention (#1588)**
    *   **Details:** Replaces `os.walk()` with `git ls-files` for file mentions, solving performance bottlenecks in large repositories (e.g., 65k+ files).
    *   **Link:** [MoonshotAI/kimi-cli PR #1588](https://github.com/MoonshotAI/kimi-cli/pull/1588)

## 5. Feature Request Trends

*   **Lifecycle Hooks & Extensibility:** Strong demand for "hooks" at every stage of the CLI lifecycle (session start, prompt input, tool use, permission request) to allow external monitoring and integration.
*   **Context Management:** Users want better control over long-term memory, specifically "branching" or "snapshotting" context to preserve the "work site" even after shutting down.
*   **Configuration Hierarchy:** A standardized, multi-tier rule system (Global/User/Project) is a top priority for enterprise and power-user workflows.

## 6. Developer Pain Points

*   **API Stability:** Recurring "400 Invalid Request" and connection errors remain a top frustration, often without clear debugging information.
*   **Context Loss:** Developers express frustration that long debugging sessions become "lost" where the AI drifts from the original proposition, with no way to roll back the memory state.
*   **MCP & Plugin Fragility:** Connecting to external tools via MCP is prone to silent failures or field mapping errors, halting workflows unexpectedly.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-04-08

---

## 1. Today's Highlights

The community is actively discussing **multi-agent coordination architectures**, with proposals for coordinator shells and DB-backed team memory systems gaining traction. A significant **provider compatibility crisis** has emerged: users report critical failures with Qwen (rate limiting), ChatGPT/Codex (model support errors), vLLM (version incompatibility), and local Gemma 4 models (tool loop issues). On the infrastructure front, a major **tool system refactor** (PR #21052) and new **OTLP observability support** (PR #21387) are progressing through review.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| Issue | Why It Matters |
|-------|----------------|
| [#8140](https://github.com/anomalyco/opencode/issues/8140) - Configurable context limit and auto-compaction | **35 👍** — High-demand enhancement for cost optimization. Users want to trigger context compaction earlier and set custom limits rather than being locked to model defaults. |
| [#21164](https://github.com/anomalyco/opencode/issues/21164) - Qwen 3.6 rate limit errors | **29 comments** — Users hitting Alibaba's "request rate increased too quickly" errors need client-side rate throttling. Related feature request in [#21140](https://github.com/anomalyco/opencode/issues/21140) proposes automatic retry with backoff. |
| [#12472](https://github.com/anomalyco/opencode/issues/12472) - Native Claude Code hooks compatibility | **13 👍** — Request to add `PreToolUse`, `PostToolUse`, and `Stop` hooks to match Claude Code's hooks system, complementing existing `CLAUDE.md` rules compatibility. |
| [#21034](https://github.com/anomalyco/opencode/issues/21034) - Gemma 4 tool loops/failures | **7 👍** — Local Gemma-4-26b/31b models unusable with OpenCode despite tokenizer fixes. Tool call reliability issues persist even with latest patched engines. |
| [#16851](https://github.com/anomalyco/opencode/issues/16851) - ChatGPT Codex not working in v1.2.24 | **11 comments** — API returns "gpt-5.3-codex model not supported when using Codex with a ChatGPT account." Users report increasing bugs in recent versions. |
| [#17505](https://github.com/anomalyco/opencode/issues/17505) - ACP session/update timing bug | **10 👍** — `session/update` notifications arrive *after* `session/prompt` response with `end_turn`, causing incomplete UI content for ACP consumers like Fabriqa. |
| [#20368](https://github.com/anomalyco/opencode/issues/20368) - Coordinator shell + fork mode | **4 comments** — Proposal for advanced subagent orchestration with coordinator shells and fork mode for parallel task execution. |
| [#19215](https://github.com/anomalyco/opencode/issues/19215) - DB-backed agent team coordination | **3 👍** — Feature request for parallel sub-agents with messaging and shared memory, addressing limitations of synchronous-only `TaskTool`. |
| [#7926](https://github.com/anomalyco/opencode/issues/7926) - Disable mouse capture in TUI | **15 👍** — TUI mouse capture breaks native selection in tmux/Zellij. Users need option to disable for terminal multiplexer compatibility. |
| [#21375](https://github.com/anomalyco/opencode/issues/21375) - `opencode serve` hangs | Critical bug where the server stops polling epoll fd, hanging all connections until restart. Health check (`/global/health`) also unresponsive. |

---

## 4. Key PR Progress

| PR | Description |
|----|-------------|
| [#21052](https://github.com/anomalyco/opencode/pull/21052) - **Refactor tool system** | Removes agent context from `Tool.init()`, making tool behavior predictable across agents. Major architectural cleanup. |
| [#21387](https://github.com/anomalyco/opencode/pull/21387) - **OTLP observability support** | Adds OpenTelemetry Protocol tracing via `OPENCODE_OTLP_BASE_URL` for latency analysis in session/snapshot/formatter workflows. |
| [#15926](https://github.com/anomalyco/opencode/pull/15926) - **MCP Apps iframe UIs** | Enables MCP servers to render interactive sandboxed UIs. Tools can be hidden from chat via `_meta.ui.visibility: ["app"]`. |
| [#21370](https://github.com/anomalyco/opencode/pull/21370) - **Fix reasoning block signatures** | Preserves empty text parts between reasoning blocks to maintain Anthropic cryptographic signature validity. |
| [#21371](https://github.com/anomalyco/opencode/pull/21371) - **Auto-compress oversized images** | Uses `sharp` to compress images exceeding API limits (Anthropic's 5MB base64 cap) at provider transform layer. |
| [#21385](https://github.com/anomalyco/opencode/pull/21385) - **MCP OAuth redirect URI** | Adds `redirectUri` config for custom OAuth callback URLs in MCP server authentication flows. |
| [#19955](https://github.com/anomalyco/opencode/pull/19955) - **GitLab DWS tool approval** | Integrates GitLab Duo Workflow Service tool-call approval checkpoints into OpenCode's permission system. |
| [#4604](https://github.com/anomalyco/opencode/pull/4604) - **Range-only formatting** | Restricts clang-format to changed lines only, preventing unrelated formatting changes in diffs. |
| [#13854](https://github.com/anomalyco/opencode/pull/13854) - **Fix TUI streaming render** | Derives streaming state from `message.time.completed` so finished messages render all table rows correctly. |
| [#21368](https://github.com/anomalyco/opencode/pull/21368) - **Footer subagent display toggle** | Adds `footerShowSubagents` config to show only primary agents in TUI footer selector (cleaner for plugin-heavy setups). |

---

## 5. Feature Request Trends

1. **Multi-Agent Orchestration** — Strong push for coordinator shells, fork mode, and DB-backed team coordination with shared memory for parallel sub-agent execution.

2. **Context & Cost Control** — Configurable context limits, earlier auto-compaction triggers, and token optimization in system prompts.

3. **Provider Rate Limiting** — Automatic retry with exponential backoff for Alibaba/DashScope and other providers.

4. **Local Model Tool Compatibility** — Better tool call reliability for local models (Gemma 4, Ollama) including proper `read_file` tool support.

5. **TUI/UX Customization** — Font configuration, paste preview visibility, and mouse capture toggles for terminal multiplexer users.

---

## 6. Developer Pain Points

- **Provider instability across the board**: Users experiencing failures with Qwen (rate limits), ChatGPT/Codex (model errors), vLLM (version 1.3.8+ incompatibility), and local Gemma 4 (tool loops).

- **Rate limiting lacks graceful handling**: No automatic backoff/retry for provider rate limits; requests fail immediately and cancel work.

- **Context window inflexibility**: Cannot customize context limits or trigger compaction earlier, leading to unnecessary API costs.

- **ACP timing issues**: `session/update` notifications arriving after turn completion breaks third-party integrations.

- **Terminal multiplexer conflicts**: Mouse capture prevents native text selection in tmux/Zellij environments.

- **Plugin registry issues**: Scoped npm registries in `~/.npmrc` ignored during plugin installation.

- **Desktop app UX friction**: Session management and switching described as "worst UX ever" by frustrated users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-04-08

## 1. Today's Highlights
The community released **v0.14.1** alongside its preview build to address critical stability issues, including hook error handling and CLI response management. However, the release was quickly followed by reports of a **blank screen bug in the VS Code extension**, which has already prompted a fix in PR #2959. Activity remains high with numerous feature requests for extended platform support (Telegram, PDF reading) and ongoing frustration regarding permission prompts and UI stability.

## 2. Releases

### **v0.14.1** & **v0.14.1-preview.0**
The latest stable and preview releases focus on internal stability and hook system robustness.
*   **Hook System Fix:** Cleaned up abort listeners in error handlers to prevent memory leaks or crashes ([PR #2841](https://github.com/QwenLM/qwen-code/pull/2841)).
*   **CLI State Management:** Fixed a race condition where pending AI responses were not committed before adding hook system messages ([PR #2848](https://github.com/QwenLM/qwen-code/pull/2848)).
*   **Link:** [Release v0.14.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.1)

---

## 3. Hot Issues

1.  **VS Code 0.14.1 Displays Blank Screen** ([#2956](https://github.com/QwenLM/qwen-code/issues/2956))
    *   **Why it matters:** A critical regression in the latest extension caused the UI to fail entirely.
    *   **Status:** Closed, addressed by PR #2959.
2.  **Edit Tool Failure Recurrence** ([#1922](https://github.com/QwenLM/qwen-code/issues/1922))
    *   **Why it matters:** A previously fixed bug has reappeared in v0.10.5+, preventing the AI from modifying Python files.
    *   **Community:** Users are frustrated as this blocks core coding workflows.
3.  **Request for Image Paste in Windows CMD** ([#2605](https://github.com/QwenLM/qwen-code/issues/2605))
    *   **Why it matters:** Windows users lack the ability to paste images/files directly into the CLI, a feature available on other platforms.
4.  **Telegram Bot Mode Request** ([#2339](https://github.com/QwenLM/qwen-code/issues/2339))
    *   **Why it matters:** Users want to interact with Qwen Code remotely via Telegram.
    *   **Community:** High interest (+2 votes) in enabling remote agent control.
5.  **Infinite Edit Loop & Token Consumption** ([#1937](https://github.com/QwenLM/qwen-code/issues/1937))
    *   **Why it matters:** Users report massive token usage due to repeated, failed edit attempts on the "Bailian Coding Plan".
6.  **WeChat Integration Compatibility** ([#2882](https://github.com/QwenLM/qwen-code/issues/2882))
    *   **Why it matters:** Users scanning QR codes via WeChat encounter "please upgrade WeChat interface version" errors.
7.  **Global Configuration Directory Support** ([#2951](https://github.com/QwenLM/qwen-code/issues/2951))
    *   **Why it matters:** Developers using mounted disks cannot persist configurations due to hardcoded `~/.qwen` paths.
8.  **App Crashes During System Checks** ([#2935](https://github.com/QwenLM/qwen-code/issues/2935))
    *   **Why it matters:** Stability concerns as the agent crashes while checking WSL/Podman configurations on Windows.
9.  **Request to Reduce Permission Prompts** ([#2946](https://github.com/QwenLM/qwen-code/issues/2946))
    *   **Why it matters:** Frequent permission requests interrupt autonomous agent workflows ("research" mode).
10. **Infinite Scrolling Bug** ([#2972](https://github.com/QwenLM/qwen-code/issues/2972))
    *   **Why it matters:** UI becomes unusable, scrolling uncontrollably when context exceeds 30% or during git commits.

---

## 4. Key PR Progress

1.  **[FIX] VS Code Blank Screen** ([#2959](https://github.com/QwenLM/qwen-code/pull/2959))
    *   Fixes the 0.14.1 webview crash caused by Node modules being pulled into the browser bundle; bumps version to 0.14.2.
2.  **[FEAT] Review Command Enhancement** ([#2932](https://github.com/QwenLM/qwen-code/pull/2932))
    *   Proposes adding deterministic analysis, auto-fix, and security hardening to the `/review` command to compete with Copilot/Claude.
3.  **[FEAT] Customizable Status Line** ([#2923](https://github.com/QwenLM/qwen-code/pull/2923))
    *   Introduces a `/statusline` command allowing users to run custom shell commands for context-aware info display.
4.  **[FEAT] CJK Word Segmentation** ([#2942](https://github.com/QwenLM/qwen-code/pull/2942))
    *   Optimizes Ctrl+Arrow navigation for Chinese/Japanese/Korean text, treating them as distinct words rather than single blocks.
5.  **[FEAT] Adaptive Output Token Escalation** ([#2898](https://github.com/QwenLM/qwen-code/pull/2898))
    *   Optimizes resource usage by defaulting to 8K output tokens and escalating to 64K only on truncation.
6.  **[FIX] VS Code Companion Autocomplete** ([#2971](https://github.com/QwenLM/qwen-code/pull/2971))
    *   Fixes autocomplete misfiring when the cursor is at position 0.
7.  **[FIX] WeChat Image Detection** ([#2970](https://github.com/QwenLM/qwen-code/pull/2970))
    *   Corrects PNG magic signature detection (checking all 4 bytes) to fix image handling for WeChat.
8.  **[FIX] Windows MSYS2 Crash** ([#2826](https://github.com/QwenLM/qwen-code/pull/2826))
    *   Prevents crashes in MSYS2 UCRT environments by correctly distinguishing between MSYS2 bash and Git Bash.
9.  **[FEAT] /Thinkback Command** ([#2917](https://github.com/QwenLM/qwen-code/pull/2917))
    *   (Closed/Experimental) Added a command to review session timelines and decision history.
10. **[FIX] LRU Cache Logic** ([#2968](https://github.com/QwenLM/qwen-code/pull/2968))
    *   Ensures `LruCache` correctly updates usage order even for falsy values (0, '', false).

---

## 5. Feature Request Trends

*   **Platform & Integration Expansion:** Strong demand for running Qwen Code as a **Telegram Bot** ([#2339](https://github.com/QwenLM/qwen-code/issues/2339)) and better **WeChat** integration ([#2882](https://github.com/QwenLM/qwen-code/issues/2882)).
*   **Multimodal Capabilities:** Users are requesting **PDF reading support** within the agent ([#2947](https://github.com/QwenLM/qwen-code/issues/2947)) and **image pasting** in Windows CLI ([#2605](https://github.com/QwenLM/qwen-code/issues/2605)).
*   **Autonomy & Workflow:** Requests for "Agentic" behavior improvements, specifically reducing interruptions via **fewer permission prompts** ([#2946](https://github.com/QwenLM/qwen-code/issues/2946)) and allowing **user interruptions** during long Chain-of-Thought processing ([#2786](https://github.com/QwenLM/qwen-code/issues/2786)).
*   **Session Management:** Persistent requests for **global configuration storage** ([#2951](https://github.com/QwenLM/qwen-code/issues/2951)) and **automatic chat saving** ([#113](https://github.com/QwenLM/qwen-code/issues/113)).

## 6. Developer Pain Points

*   **UI/UX Stability:** The **blank screen issue** ([#2956](https://github.com/QwenLM/qwen-code/issues/2956)) and **infinite scrolling** ([#2972](https://github.com/QwenLM/qwen-code/issues/2972)) are major blockers for VS Code users.
*   **Permission Fatigue:** Developers report that constant permission requests break flow state, making the agent feel less autonomous compared to competitors ([#2906](https://github.com/QwenLM/qwen-code/issues/2906), [#2946](https://github.com/QwenLM/qwen-code/issues/2946)).
*   **Terminal Flickering:** JetBrains terminal users experience significant **screen flickering** during agent execution ([#2903](https://github.com/QwenLM/qwen-code/issues/2903)).
*   **Code Reliability:** Recurring issues with the **edit tool failing** or creating **hallucinations/deletions** ([#1922](https://github.com/QwenLM/qwen-code/issues/1922), [#2867](https://github.com/QwenLM/qwen-code/issues/2867)) remain a trust concern.

</details>