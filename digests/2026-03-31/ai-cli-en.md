# AI CLI Tools Community Digest 2026-03-31

> Generated: 2026-03-30 22:07 UTC | Tools covered: 7

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
**Analysis Period:** 2026-03-31

---

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing a critical transition from single-agent chat interfaces to multi-agent orchestration systems, with "Agent Teams" and parallel execution emerging as dominant themes. Platform stability has become a key differentiator as tools mature beyond experimental phases, yet all major players are simultaneously grappling with significant growing pains around permission systems, resource quotas, and cross-platform compatibility. Security and enterprise-readiness concerns (granular permissions, credential handling, file access controls) are now table-stakes requirements rather than niche features, indicating the market is preparing for mainstream enterprise adoption. The rapid emergence of standardized extensibility mechanisms—Hooks systems, MCP (Model Context Protocol) integration, and plugin architectures—suggests the ecosystem is converging toward a composable, platform-like model rather than monolithic tooling.

---

## 2. Activity Comparison

| Tool | Issues (Day) | PRs (Day) | Release Status | Sentiment Signal |
|------|-------------|-----------|----------------|------------------|
| **Claude Code** | 10+ | 10 | No release | 🔴 Negative — Max plan limits crisis, 9-month bypassPermissions bug |
| **OpenAI Codex** | 10 | 10 | No release | 🟡 Mixed — Security concerns, permission model friction |
| **Gemini CLI** | 10 | 10 | No release | 🟢 Constructive — SDD framework evolution, memory system advances |
| **GitHub Copilot CLI** | 10 | 2 | v1.0.13 / v1.0.14-0 | 🟡 Mixed — Keybinding regression, clipboard bugs |
| **Kimi Code CLI** | 10 | 10 | **v1.28.0** | 🟢 Positive — Hooks system, light theme, stability fixes |
| **OpenCode** | 10 | 10 | v1.3.7 / v1.3.8 | 🟢 Constructive — PowerShell support, deep architectural discussions |
| **Qwen Code** | 10 | 10 | v0.13.2 / v0.14.0-preview.2 | 🟡 Mixed — Windows permission persistence, proxy bugs |

**Notable:** Kimi Code CLI and OpenCode are the only tools shipping significant releases today. Claude Code has the highest-friction community sentiment due to unresolved billing/limit issues.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Requirements |
|-----------|---------------|----------------------|
| **Multi-Agent Orchestration** | Claude Code, OpenCode, OpenAI Codex, Kimi Code | Agent Teams/Teammates for parallel task execution; spawn fresh threads for implementation (#12661 +102 👍 in OpenCode, #39447 in Claude, #10948 in Codex) |
| **Hooks & Lifecycle Extensibility** | Kimi Code, Claude Code, OpenAI Codex | User-defined triggers at lifecycle events for CI/CD integration; Kimi shipped Hooks Beta v1.28.0, Claude has open PRs for hookify rules |
| **Granular Permissions** | OpenAI Codex, Qwen Code, Claude Code, Gemini CLI | Rejection of binary "allow/deny" in favor of command-specific, role-based permissions; persistent "Always Allow" that actually works |
| **Persistent/Long-Term Memory** | Gemini CLI, Kimi Code | Background services that extract skills from chat history; automatic `SKILL.md` generation; context that survives sessions |
| **Non-Interactive/Plan Mode** | Kimi Code, Gemini CLI, Qwen Code | `--plan` flags for CI/CD pipelines; structured output schemas; Spec-Driven Development (SDD) with DAG-based task tracking |
| **Vim/IDE Parity** | Gemini CLI, OpenCode, Kimi Code | Cursor shape indicators, modal editing support, clickable file references in terminal UI |
| **Theme/UI Customization** | Kimi Code, Claude Code, OpenCode | Light theme support, collapsible tool output, configurable thinking animations, statusline metadata |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target User | Technical Approach |
|------|--------------|-------------|-------------------|
| **Claude Code** | Enterprise automation, agentic workflows | Power users, CI/CD teams | `bypassPermissions` for headless ops; Agent Teams with tmux orchestration; strongest focus on automation but currently plagued by reliability issues |
| **OpenAI Codex** | Desktop app experience, enterprise integration | VS Code users, enterprise devs | Binary permission model (being challenged); personalities system; strong IDE integration but Windows stability lagging |
| **Gemini CLI** | Spec-Driven Development, context management | Complex project teams | DAG-based planning; AST-aware file reads; tool distillation for 128+ tool limits; "Confucius" memory sub-agent; most advanced architectural thinking |
| **GitHub Copilot CLI** | Performance, authentication stability | GitHub ecosystem users | Parallelized startup; Entra ID integration; limited extensibility; strongest enterprise auth story but feature-light vs competitors |
| **Kimi Code CLI** | Rapid iteration, cross-platform UX | Individual developers, JetBrains users | Hooks system (first to ship); embedded web runtime; fastest release cadence; strong IDE integration focus |
| **OpenCode** | Plugin ecosystem, architectural rigor | Advanced users, plugin developers | Effect-based services; remote control/serve mode; SQLite local queries; deepest architectural discussions around session reliability |
| **Qwen Code** | Extensibility, regional markets | Chinese market, messaging platform users | Channels platform (Telegram/WeChat/DingTalk); npm registry extensions; cron/loop scheduling; most aggressive platform expansion |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Characteristics |
|------|-------|-----------------|
| **High Momentum, High Maturity** | Gemini CLI, OpenCode | Deep architectural discussions (DAGs, Effect migration, AST tools), constructive issue reports with technical depth, active PR merging |
| **High Momentum, Maturing** | Kimi Code CLI | Fastest shipping cadence (v1.28.0 with 15+ merged PRs), rapidly addressing stability issues, community engaged with architectural proposals |
| **Moderate Momentum, High Maturity** | OpenAI Codex | Active development but community friction around permission model; enterprise-focused PRs (auth, analytics) progressing steadily |
| **Stalled/Low Momentum** | GitHub Copilot CLI | Only 2 PRs updated; appears to rely on internal development; external contribution pathway limited |
| **Crisis Mode** | Claude Code | Highest community engagement but predominantly negative; unresolved Max plan limits (190+ comments) and 9-month bypassPermissions failure eroding trust |
| **Emerging** | Qwen Code | Active development addressing Windows issues; innovative features (Channels, cron tools) but stability concerns dominate feedback |

---

## 6. Trend Signals

### 🚨 Critical: Usage Tracking & Quota Transparency
Multiple tools (Claude Code, OpenAI Codex) face community backlash over opaque usage calculations. Users cannot predict when limits trigger, and attribution errors (Codex #13854, Copilot #1977 negative counters) are eroding trust. **Action:** Tools must ship real-time quota dashboards and accurate usage attribution.

### 📈 Rising: Multi-Agent Orchestration
"Agent Teams" is the most highly-voted feature category across tools (OpenCode #12661: +102 👍). The industry is shifting from single-threaded assistant interactions to parallel agent collaboration with task distribution, specialized sub-agents, and fresh-thread implementation patterns.

### ⚠️ Persistent: Windows as Second-Class Platform
Every tool without exception has Windows-specific bugs: UI freezes (Claude), CPU spikes (Codex), permission persistence failures (Qwen), SSH rendering issues (Gemini), PowerShell tool failures (Copilot). **Action:** Windows compatibility must be elevated from "nice-to-have" to release-blocking requirement.

### 🔒 Emerging: Security-by-Default for Agentic Access
Community alarm over `.env` file access (Codex #13778) and hardcoded secret detection (Claude PRs) signals that agentic tools need explicit file masking, `.gitignore` adherence, and secret detection as built-in safety layers—not optional configurations.

### 🔧 Converging: Extensibility Standards
Hooks systems (Kimi, Claude), plugin architectures (OpenCode, Qwen npm), and MCP server integration (Gemini, Claude) indicate the ecosystem is standardizing on composable, event-driven extension models. Tools without robust extensibility will be outcompeted for enterprise adoption.

### 📊 Architectural: From Linear to DAG-Based Planning
Gemini CLI's Spec-Driven Development with DAGs and OpenCode's session processor refactoring represent a shift from linear checklists to dependency-aware task graphs—enabling parallel execution, persistent state, and resumable complex workflows.

---

**Summary for Decision-Makers:** Gemini CLI and OpenCode demonstrate the healthiest community dynamics with deep technical engagement. Kimi Code is shipping fastest. Claude Code faces a trust crisis requiring immediate attention to quota transparency. All tools should prioritize Windows parity, granular permissions, and multi-agent orchestration as table-stakes for 2026 competitiveness.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Report
**Analysis Period:** Data as of 2026-03-31 | **Source:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking

The most-discussed Skills PRs reveal a community focused on document quality, development workflow, and enterprise integration:

| Rank | Skill | Author | Status | Focus |
|------|-------|--------|--------|-------|
| 1 | **document-typography** | PGTBoos | OPEN | Document quality |
| 2 | **frontend-design** | justinwetch | OPEN | UI/UX |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | eovidiu | OPEN | Meta-tools |
| 4 | **ODT (OpenDocument)** | GitHubNewbie0 | OPEN | Document format |
| 5 | **system-documentation** | TylerALofall | OPEN | Architecture docs |
| 6 | **SAP-RPT-1-OSS predictor** | amitlals | OPEN | Enterprise ML |
| 7 | **testing-patterns** | 4444J99 | OPEN | QA automation |
| 8 | **roadmap-pilot** | antconsales | OPEN | Codebase cleanup |

**Featured Highlights:**

- **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** — Addresses "orphan word wrap," "widow paragraphs," and numbering misalignment in AI-generated documents. Fills a critical gap: users rarely request typography, but every document suffers from these issues.

- **[#210 frontend-design](https://github.com/anthropics/skills/pull/210)** — Major revision to improve clarity and actionability. Refines instructions so Claude can execute them within a single conversation while maintaining specific behavioral guidance.

- **[#83 Meta Skills Suite](https://github.com/anthropics/skills/pull/83)** — Two tools for the ecosystem: `skill-quality-analyzer` (5-dimension quality scoring) and `skill-security-analyzer` (vulnerability detection). Enables community self-policing of skill quality.

- **[#486 ODT Skill](https://github.com/anthropics/skills/pull/486)** — OpenDocument (ISO/IEC 26300) support for LibreOffice, OpenOffice, and Google Docs compatibility. Includes template filling and HTML parsing.

- **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** — Comprehensive testing stack: philosophy (Testing Trophy), unit testing (AAA pattern), React component testing, and more.

- **[#536 roadmap-pilot](https://github.com/anthropics/skills/pull/536)** — Incremental codebase cleanup autopilot that executes ONE task per session to prevent context overflow on large refactoring jobs.

---

## 2. Community Demand Trends

Analysis of Issues reveals the following most-anticipated directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Org-Wide Sharing** | Enterprise teams need shared skill libraries | [#228](https://github.com/anthropics/skills/issues/228) — direct sharing links, shared libraries |
| **Security & Trust** | Namespace confusion between official/community skills | [#492](https://github.com/anthropics/skills/issues/492) — trust boundary vulnerability |
| **MCP Integration** | Expose Skills as Model Context Protocol tools | [#16](https://github.com/anthropics/skills/issues/16) — standardized API for algorithmic skills |
| **Agent Governance** | Safety patterns for autonomous agent systems | [#412](https://github.com/anthropics/skills/issues/412) — policy enforcement, threat detection |
| **Platform Stability** | API reliability, Bedrock support, error fixes | [#62](https://github.com/anthropics/skills/issues/62), [#29](https://github.com/anthropics/skills/issues/29), [#406](https://github.com/anthropics/skills/issues/406) |

**Key Insight:** Enterprise users are pushing for organization-level skill management and clear security boundaries between official Anthropic skills and community contributions.

---

## 3. High-Potential Pending Skills

Active PRs likely to merge soon based on community engagement and completeness:

| PR | Skill | Maturity Indicators |
|----|-------|---------------------|
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Infrastructure — addresses community health gap (repo scored 25%) |
| [#512](https://github.com/anthropics/skills/pull/512) | **PR Template** | Companion to #509 — reduces contributor friction |
| [#522](https://github.com/anthropics/skills/pull/522) | **plan-task** | Persists multi-step plans across sessions in `.claude/tasks/` |
| [#288](https://github.com/anthropics/skills/pull/288) | **8-Skill Suite** | tutorial-builder, quiz-generator, a11y-auditor, changelog-curator, data-storytelling, and more |
| [#335](https://github.com/anthropics/skills/pull/335) | **masonry-generate** | AI image/video generation via Masonry CLI (Imagen 3.0, Veo 3.1) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade workflow automation (persistent task planning, codebase cleanup, and org-wide skill sharing) combined with clear security boundaries between official and community skills.**

---

*Report generated from anthropics/skills repository data, 2026-03-31*

---

# Claude Code Community Digest — 2026-03-31

## Today's Highlights

No new releases were published in the last 24 hours. The community's attention is focused on **Claude Max plan session limits** being exhausted abnormally fast since March 23rd—a critical issue with 190+ comments and 159 👍 that remains unresolved. Additionally, a **meta-issue on `bypassPermissions` mode** highlights a 9-month trail of broken functionality with 12+ duplicate reports, signaling significant frustration among power users relying on automation workflows.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) — **Claude Max session limits exhausted abnormally fast** | Max plan subscribers report CLI sessions throttling within minutes since March 23, severely impacting productivity. | 190 comments, 159 👍 — high frustration, multiple reports of same behavior |
| 2 | [#37394](https://github.com/anthropics/claude-code/issues/37394) — **Max Plan hitting limits extremely fast** | Related to above; users question cost tracking accuracy and whether background processes consume quota. | 43 comments, 31 👍 — demands for transparency on usage calculation |
| 3 | [#39523](https://github.com/anthropics/claude-code/issues/39523) — **META: Bypass permissions mode fundamentally broken** | `bypassPermissions` has failed since July 2025; blocks CI/CD and automation use cases. | 8 comments, 6 👍 — long-standing pain point, 12+ duplicates cited |
| 4 | [#40535](https://github.com/anthropics/claude-code/issues/40535) — **Session throttling in daily limit** | Users experiencing aggressive throttling even within nominal usage patterns. | 9 comments, 6 👍 — confusion on limit mechanics |
| 5 | [#41174](https://github.com/anthropics/claude-code/issues/41174) — **Usage limit reached in 10 minutes** | Fresh report of extreme limit exhaustion; may indicate systemic backend issue. | 1 comment, 2 👍 — escalating pattern |
| 6 | [#39447](https://github.com/anthropics/claude-code/issues/39447) — **Explore agents terminate immediately in plan mode** | Sub-agents spawn but complete with zero tool uses, breaking agentic planning workflows. | 2 comments — impacts complex multi-step tasks |
| 7 | [#40960](https://github.com/anthropics/claude-code/issues/40960) — **Orchestrator crashes on burst agent completions** | Silent crashes when multiple background agents finish simultaneously; loses tmux sessions. | 1 comment — reliability concern for parallel agents |
| 8 | [#40168](https://github.com/anthropics/claude-code/issues/40168) — **Agent Teams tmux split-pane race condition** | Commands sent before shell is ready, causing teammate startup failures. | 1 comment — timing bug in agent orchestration |
| 9 | [#41164](https://github.com/anthropics/claude-code/issues/41164) — **UI freezes on first prompt (Windows 11)** | Windows client becomes non-interactive for seconds on initial submission. | 2 comments — platform-specific UX blocker |
| 10 | [#40529](https://github.com/anthropics/claude-code/issues/40529) — **Stale "brew upgrade" hint in statusline** | Misleading upgrade suggestion shown even on latest version. | 1 comment, 2 👍 — minor but annoying UX bug |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| 1 | [#40572](https://github.com/anthropics/claude-code/pull/40572) — **Global Hookify rules support** | Enables loading hook rules from `~/.claude/` for cross-project configuration. | Open |
| 2 | [#40776](https://github.com/anthropics/claude-code/pull/40776) — **Security rules for bash command validator** | Adds defense-in-depth patterns to block dangerous shell commands. | Open |
| 3 | [#40777](https://github.com/anthropics/claude-code/pull/40777) — **Recommended settings template** | Introduces `settings-recommended.json` with balanced security defaults. | Open |
| 4 | [#40778](https://github.com/anthropics/claude-code/pull/40778) — **Prevent session URL leakage in commits** | Explicitly blocks claude.ai links from commit messages/PR descriptions. | Open |
| 5 | [#40768](https://github.com/anthropics/claude-code/pull/40768) — **Hardcoded secret detection patterns** | Adds 6 patterns (GitHub tokens, AWS keys, API keys) to security-guidance plugin. | Open |
| 6 | [#40779](https://github.com/anthropics/claude-code/pull/40779) — **Devcontainer firewall: allow googleapis.com** | Fixes GCS, BigQuery, Vertex AI access inside sandboxed devcontainers. | Open |
| 7 | [#40822](https://github.com/anthropics/claude-code/pull/40822) — **VS Code "Not responding" status docs** | Documents status bar states and clarifies 60s timeout behavior. | Open |
| 8 | [#40969](https://github.com/anthropics/claude-code/pull/40969) — **Read issue number from workflow event** | Simplifies helper scripts by using `$GITHUB_EVENT_PATH` payload. | Open |
| 9 | [#39855](https://github.com/anthropics/claude-code/pull/39855) — **Bash parameter expansion in gh.sh** | Replaces `echo | tr` with `${var,,}` for efficient lowercase conversion. | Closed (merged) |
| 10 | [#20452](https://github.com/anthropics/claude-code/pull/20452) — **Use -exist flag in allowed-domains** | Silently ignores duplicate ipset entries; prevents errors. | Open (long-running) |

---

## Feature Request Trends

1. **UI/UX Enhancements for `/btw` command** — [#39992](https://github.com/anthropics/claude-code/issues/39992) requests clipboard copy support (`C` keybinding) for `/btw` overlay output.
2. **Collapsible tool output by default** — [#40428](https://github.com/anthropics/claude-code/issues/40428) proposes `compactToolOutput` setting to reduce visual noise from MCP tool calls.
3. **Theme information in statusline JSON** — [#40329](https://github.com/anthropics/claude-code/issues/40329) seeks theme metadata for custom statusline scripts.
4. **Configurable thinking verb list** — [#40429](https://github.com/anthropics/claude-code/issues/40429) wants user-customizable "thinking" animations.

---

## Developer Pain Points

1. **Max Plan usage tracking opacity** — Multiple reports ([#38335](https://github.com/anthropics/claude-code/issues/38335), [#37394](https://github.com/anthropics/claude-code/issues/37394), [#40535](https://github.com/anthropics/claude-code/issues/40535), [#41174](https://github.com/anthropics/claude-code/issues/41174)) indicate users cannot understand or predict when limits trigger. Clear usage dashboards and real-time quota visibility are highly requested.

2. **Agent orchestration reliability** — Issues like orchestrator crashes ([#40960](https://github.com/anthropics/claude-code/issues/40960)), tmux race conditions ([#40168](https://github.com/anthropics/claude-code/issues/40168)), and explore agents terminating early ([#39447](https://github.com/anthropics/claude-code/issues/39447)) reveal fragility in multi-agent workflows.

3. **Long-standing permission bypass failures** — The 9-month unresolved `bypassPermissions` issue ([#39523](https://github.com/anthropics/claude-code/issues/39523)) continues to block automation and CI/CD integrations, eroding trust in enterprise-grade reliability.

4. **Platform-specific bugs (Windows/macOS)** — Windows UI freezes ([#41164](https://github.com/anthropics/claude-code/issues/41164)), macOS syntax highlighting breakage ([#39805](https://github.com/anthropics/claude-code/issues/39805)), and worktree isolation failures ([#40164](https://github.com/anthropics/claude-code/issues/40164)) indicate platform parity remains uneven.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-31

## 1. Today's Highlights
No new software releases were recorded in the last 24 hours, but the development team is actively merging infrastructure improvements focused on authentication flexibility and analytics. A significant portion of the community discussion revolves around the **Codex Desktop App**, specifically regarding a restrictive binary choice between "Default" and "Full Access" permissions and stability issues on Windows. There is also notable friction regarding model usage attribution and the security of sensitive files (like `.env`) within workspaces.

## 2. Releases
*   **None** (No releases published in the last 24 hours).

## 3. Hot Issues
*   **[App][Regression] Single Popup Window Limitation** ([#15162](https://github.com/openai/codex/issues/15162))
    *   *Why it matters:* A recent update forced "Open in Popup Window" to replace existing popups rather than allowing multiple concurrent windows. This breaks workflows for developers who use multiple floating windows for context.
    *   *Status:* Closed (likely addressed or reverted), but indicates recent UI volatility.

*   **[Security][Bug] Codex Reading `.env` Files** ([#13778](https://github.com/openai/codex/issues/13778))
    *   *Why it matters:* Users are alarmed that Codex can read `.env` files within the workspace despite expectations of privacy or ignore rules. This has sparked a discussion about the safety of using the agent on sensitive projects.
    *   *Community Reaction:* High engagement (👍 4) regarding the need for better `.gitignore` adherence or explicit file masking.

*   **[Enhancement] Fine-Grained Permissions** ([#14399](https://github.com/openai/codex/issues/14399))
    *   *Why it matters:* The current choice is binary: restrict everything or allow full access. Users are asking for a middle ground to approve specific command types (e.g., allow `npm install` but block `rm -rf`).
    *   *Community Reaction:* Widely viewed as critical for enterprise adoption and safety.

*   **[Bug] Usage Attributed to Wrong Models** ([#13854](https://github.com/openai/codex/issues/13854))
    *   *Why it matters:* Pro users report that usage is being incorrectly counted, potentially leading to premature rate limit hits or incorrect billing attribution.

*   **[Bug] Thread History Broken After Update** ([#13724](https://github.com/openai/codex/issues/13724))
    *   *Why it matters:* Following recent app updates, older threads are throwing `invalid_encrypted_content` or `organization_id mismatch` errors, resulting in data loss for historical context.

*   **[Bug] Subagent Metadata Model Mismatch** ([#15177](https://github.com/openai/codex/issues/15177))
    *   *Why it matters:* When spawning subagents with `gpt-5.4-mini`, the metadata incorrectly labels them as `gpt-5.4`. This causes confusion regarding cost and model performance analysis.

*   **[Windows][Bug] VS Code Extension High CPU Usage** ([#16108](https://github.com/openai/codex/issues/16161))
    *   *Why it matters:* The extension causes 200% CPU utilization and high power consumption during chat sessions, making the IDE unusable for some Windows users.

*   **[Windows][Bug] Cmake Output Blocking** ([#14453](https://github.com/openai/codex/issues/14453))
    *   *Why it matters:* On Windows, `cmake` return values cannot be captured until the process times out, preventing Codex from verifying build success in C++ projects.

*   **[Bug] Global "Full Access" Permission Leakage** ([#16190](https://github.com/openai/codex/issues/16190))
    *   *Why it matters:* Switching a *single* thread to "Full Access" appears to change permissions for *all* active threads across different projects, creating a security risk.

*   **[Enhancement] "Create New Thread & Implement Plan"** ([#10948](https://github.com/openai/codex/issues/10948))
    *   *Why it matters:* A highly requested feature (👍 11) to automate the workflow where Codex plans a spec in one thread and then spawns a fresh thread with clean context to implement it.

## 4. Key PR Progress
*   **Dynamic Auth Tokens for Model Providers** ([#16267](https://github.com/openai/codex/pull/16267))
    *   Enables custom model providers to use short-lived bearer tokens rather than static keys. Essential for enterprise integrations using rotating credentials.

*   **User-Defined Personalities** ([#16274](https://github.com/openai/codex/pull/16274))
    *   Introduces support for loading custom "personalities" from `.codex/personalities`. This allows developers to fine-tune the agent's behavior/ persona via configuration files.

*   **Consolidated Request Auth & 401 Recovery** ([#16275](https://github.com/openai/codex/pull/16275))
    *   Refactors the authentication stack to unify logic between model listing and standard requests, fixing drift issues where auth retries behaved differently depending on the code path.

*   **Handle Inline Image Request Caps** ([#15569](https://github.com/openai/codex/pull/15569))
    *   Implements graceful handling of API limits for inline images (capped at 512 MiB or 1,500 images). Prevents hard errors when agents aggregate large amounts of visual context.

*   **Fix: Symlinked Writable Roots in Sandbox** ([#15981](https://github.com/openai/codex/pull/15981))
    *   Fixes a bug where Codex failed to write to directories that were symlinked outside the project root, improving compatibility with various project structures.

*   **Thread Events Analytics** ([#15690](https://github.com/openai/codex/pull/15690))
    *   Adds telemetry for thread lifecycle events (start, fork, resume), laying the groundwork for better observability of long-running agent tasks.

*   **Fix TUI "Not Available" Regression** ([#16273](https://github.com/openai/codex/pull/16273))
    *   Fixes a UI bug where `Ctrl+C` during startup caused the terminal UI to spam "Not available in app-server TUI" errors.

*   **CI: Native Bazel on Windows** ([#16120](https://github.com/openai/codex/pull/16120))
    *   An infrastructure update to move Windows CI onto native Bazel lanes, aiming to speed up the often-slow Windows build verification process.

*   **Hook Execution Ordering** ([#15936](https://github.com/openai/codex/pull/15936))
    *   Enforces a strict order for hooks so that non-project (trusted) hooks run before project-level hooks, preventing potentially malicious project configs from overriding system safety measures.

*   **Sandbox Namespace Warnings** ([#15893](https://github.com/openai/codex/pull/15893))
    *   Improves warning logic for when `bwrap` (sandboxing) is missing or lacks namespace permissions, reducing noise for users intentionally running in `danger-full-access` mode.

## 5. Feature Request Trends
*   **Granular Permissions:** The single most prominent trend is the rejection of the binary "Default vs. Full Access" toggle. Users want role-based or command-specific permissions (e.g., "Allow network but not file deletion").
*   **Environment Isolation:** Developers working across multiple clients/organizations are requesting isolated profiles to prevent credential leakage and separate context per project folder ([#14330](https://github.com/openai/codex/issues/14330)).
*   **Agentic Workflows:** There is strong demand for "meta-agency" features, specifically the ability for Codex to spawn a fresh thread to implement a plan generated in a previous thread ([#10948](https://github.com/openai/codex/issues/10948)).

## 6. Developer Pain Points
*   **Windows Stability:** A disproportionate number of high-comment issues involve Windows-specific crashes, particularly regarding the Windows Sandbox, `cmake` execution hanging, and VS Code CPU spikes.
*   **Sensitive File Exposure:** The discovery that `.env` files are read by default ([#13778](https://github.com/openai/codex/issues/13778)) is a major concern for security-conscious users who assume workspace isolation implies `.gitignore` compliance.
*   **Model Selector Limitations:** Users utilizing third-party providers or local models are frustrated by the lack of a model selector in the App UI ([#15138](https://github.com/openai/codex/issues/15138)), forcing them to revert to the CLI.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-31
**Data Source:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. Today's Highlights
No new releases were published today, but development activity remains high with significant architectural improvements to the "Spec-Driven Development" (SDD) framework and memory systems. A critical user-reported issue regarding API rate limits (429 errors) affecting legitimate workflows has sparked discussion about the balance between abuse prevention and usability. Additionally, the team is pushing for "Gemini 3.1" integration across the test suite to replace legacy models.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues

1.  **[Bug] Official CLI agents trigger 429 Abuse/Throttle blocks** ([#24227](https://github.com/google-gemini/gemini-cli/issues/24227))
    *   **Context:** Users report that legitimate multi-tool workflows (specifically `codebase-investigator`) are being instantly blocked by 429 errors following the March 25th abuse detection update.
    *   **Impact:** High. This effectively breaks the CLI for power users utilizing native MCP hooks and complex agents on Ultra OAuth.

2.  **Long-Context & Complex Reasoning Coding Evaluation Dataset** ([#23316](https://github.com/google-gemini/gemini-cli/issues/23316))
    *   **Context:** A proposal to create a new benchmark dataset as current standards (SWE-bench Pro) saturate.
    *   **Impact:** High interest (12 upvotes, 60 comments). This indicates a community push toward harder, more realistic evaluation metrics for agentic coding.

3.  **Listing MCP servers is inconsistent and confusing** ([#24258](https://github.com/google-gemini/gemini-cli/issues/24258))
    *   **Context:** A UX bug where `gemini mcp list` fails to show servers added via `gemini mcp add` depending on project context/trust settings.
    *   **Impact:** Affects discoverability and trust in the MCP (Model Context Protocol) integration.

4.  **Gemini CLI encounters 400 error with > 128 tools** ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246))
    *   **Context:** The CLI crashes or errors when the tool definition count exceeds API limits.
    *   **Impact:** Highlights the need for smarter "tool distillation" or dynamic loading strategies.

5.  **Remove experimental feature flag for planning** ([#24263](https://github.com/google-gemini/gemini-cli/issues/24263))
    *   **Context:** Maintainers are preparing to graduate the "Plan Mode" from experimental to a general setting (`general.plan`).
    *   **Impact:** Signals stabilization of the planning/agentic workflow features.

6.  **Hardcoded padding in terminal title causes issues in tmux** ([#24211](https://github.com/google-gemini/gemini-cli/issues/24211))
    *   **Context:** The CLI adds trailing spaces to the window title, breaking `tmux` pane title parsing.
    *   **Impact:** Specific pain point for developers using terminal multiplexers.

7.  **Add vim mode cursor shape indicator** ([#18390](https://github.com/google-gemini/gemini-cli/issues/18390))
    *   **Context:** Request for visual feedback (block vs. bar cursor) when switching between Normal and Insert modes in Vim emulation.
    *   **Impact:** Quality-of-life improvement for Vim users; currently has 5 comments discussing implementation.

8.  **Assess impact of AST-aware file reads** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
    *   **Context:** An Epic investigating whether Abstract Syntax Tree (AST) tools can improve context retrieval (precision) over simple text search.
    *   **Impact:** Architectural evolution toward "code-aware" agents rather than text-processing agents.

9.  **Running SSH text is scrambled** ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202))
    *   **Context:** Windows users SSH-ing into Linux boxes are seeing garbled text.
    *   **Impact:** Cross-platform terminal rendering issue affecting remote development workflows.

10. **Background memory service for automatic skill extraction** ([#24272](https://github.com/google-gemini/gemini-cli/issues/24272))
    *   **Context:** Proposal for a background service that scans past chats to automatically generate `SKILL.md` files.
    *   **Impact:** Represents a shift toward persistent, autonomous learning for the agent.

## 4. Key PR Progress

1.  **feat(core): Unified Context Management and Tool Distillation** ([#24157](https://github.com/google-gemini/gemini-cli/pull/24157))
    *   **Details:** Introduces a multi-tiered context window management strategy to handle long conversations and distill tools dynamically. Critical for preventing context overflow in complex tasks.

2.  **feat(core): automatically execute read-only MCP tools** ([#24226](https://github.com/google-gemini/gemini-cli/pull/24226))
    *   **Details:** Removes the confirmation prompt for MCP tools flagged as read-only. This significantly speeds up agentic workflows by reducing friction for safe operations.

3.  **feat(core): add background memory service for skill extraction** ([#24274](https://github.com/google-gemini/gemini-cli/pull/24274))
    *   **Details:** Implements the "Confucius" sub-agent which scans history to extract reusable skills into memory files, aligning with the "persistent memory" roadmap.

4.  **fix(core): batch macOS seatbelt rules** ([#24255](https://github.com/google-gemini/gemini-cli/pull/24255))
    *   **Details:** Fixes a crash on macOS where large `node_modules` would exceed `ARG_MAX` limits during sandbox initialization by batching rules into a profile file.

5.  **feat(cli): add experimental /btw side inquiry feature** ([#24270](https://github.com/google-gemini/gemini-cli/pull/24270))
    *   **Details:** Adds an ephemeral chat mode (`/btw`) for quick questions that don't pollute the main context history.

6.  **perf(cli): enable V8 compile cache** ([#22269](https://github.com/google-gemini/gemini-cli/pull/22269))
    *   **Details:** **[CLOSED/Merged]** Improves CLI startup time by enabling V8 bytecode caching for Node >= 22.

7.  **fix(core): resolve Plan Mode deadlock** ([#24047](https://github.com/google-gemini/gemini-cli/pull/24047))
    *   **Details:** Fixes a bug where the agent couldn't create a plan file if the directory didn't exist, caused by sandbox restrictions.

8.  **chore(test-utils): switch integration tests to Gemini 3.1** ([#24273](https://github.com/google-gemini/gemini-cli/pull/24273))
    *   **Details:** Infrastructure update to validate the CLI against the upcoming `gemini-3.1` model family.

9.  **feat(ui): optimize startup flow to be non-blocking** ([#22110](https://github.com/google-gemini/gemini-cli/pull/22110))
    *   **Details:** **[CLOSED/Merged]** Moves auth and config initialization to the background, allowing users to type immediately upon launch.

10. **fix(core): resolve 500 errors with gemini-3-flash-preview** ([#24269](https://github.com/google-gemini/gemini-cli/pull/24269))
    *   **Details:** Fixes incompatibility issues where the "Flash" model was receiving parameters intended for "Thinking" models (causing 500 errors).

## 5. Feature Request Trends

*   **Spec-Driven Development (SDD) & DAGs:** There is a massive internal focus on moving from linear checklists to Directed Acyclic Graphs (DAGs) for task management (Issues #23320, #23804). Users want parallel execution and persistent tracking of complex tasks.
*   **Persistent & Context-Aware Memory:** Multiple issues (#24272, #22819, #22809) focus on giving the agent a "long-term memory" that persists across sessions and differentiates between global user preferences and project-specific rules.
*   **AST-Aware Tooling:** A shift away from regex/grep-based tools toward AST-aware file reading and code mapping for higher precision in large codebases (#22745, #22746).
*   **Vim/IDE Parity:** Continued demand for better Vim emulation, specifically regarding cursor feedback (#18390).

## 6. Developer Pain Points

*   **API Rate Limits vs. Agentic Workflows:** The 429 "Abuse" errors (#24227) highlight a friction point where agentic loops (which make rapid successive calls) trigger anti-abuse mechanisms designed for human-paced traffic.
*   **Tool Bloat:** The 400/128 tool limit error (#24246) reveals that the current architecture struggles to expose the growing number of tools/MCP servers without hitting API constraints.
*   **Terminal Compatibility:** Issues with SSH/Tmux (#24211, #24202) suggest the TUI (Terminal User Interface) rendering logic has edge cases on Windows or restricted terminals.
*   **Cluttered Output:** Users find the agent's chattiness distracting. Issues like #23803 (hiding UUIDs) and #23924 (hiding tracker tool calls) indicate a need for a "Quiet Mode" or cleaner UI abstraction.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-31

## 1. Today's Highlights
Version **v1.0.13** and pre-release **v1.0.14-0** were rolled out recently, focusing heavily on performance optimizations and authentication stability. Key improvements include parallelizing startup tasks to reduce launch time and fixing a recurring bug where MCP servers using Microsoft Entra ID prompted for consent on every login. However, the new rendering engine has introduced a clipboard bug (Byte Order Mark characters) and a regression regarding `Shift+Enter` behavior, sparking active community discussion.

## 2. Releases

### **v1.0.14-0 (Pre-release)**
*   **Behavior Change:** `Shift+Enter` now executes the prompt immediately, whereas previous versions inserted a line break. (Note: This has generated significant user feedback; see Issues below).

### **v1.0.13**
*   **Performance:**
    *   Reduced CLI startup time by running terminal detection, authentication, and git operations in parallel.
    *   Optimized spinner rendering and task polling to lower CPU usage during streaming.
*   **Fixes:**
    *   **Auth:** MCP servers using Microsoft Entra ID no longer show the consent screen on every login.
    *   **Stability:** Shell processes are now cleaned up properly when a session ends.
    *   **Search:** `grep` and `glob` search results now return promptly upon timeout.

## 3. Hot Issues

1.  **[OPEN] SHIFT + ENTER Regression** [#1481](https://github.com/github/copilot-cli/issues/1481)
    *   **Context:** Users are frustrated that `Shift+Enter` now executes prompts instead of creating line breaks (standard in most chat interfaces).
    *   **Impact:** High engagement (16 comments, 10 thumbs up). Users prefer `Ctrl+Enter` for execution or configurable keybindings.
2.  **[OPEN] Model Access Denied Despite Enterprise Subscription** [#1595](https://github.com/github/copilot-cli/issues/1595)
    *   **Context:** Enterprise users with valid subscriptions are encountering "access denied by Copilot policy" when listing models.
    *   **Impact:** Blocks usage for paying Enterprise customers; currently triaged.
3.  **[OPEN] Linux Clipboard Shortcut Broken** [#2082](https://github.com/github/copilot-cli/issues/2082)
    *   **Context:** The standard `ctrl+shift+c` copy shortcut stopped working in Linux terminals (Ubuntu 24.04) recently.
    *   **Impact:** disrupts workflow for Linux developers relying on terminal copy-paste.
4.  **[OPEN] Byte Order Mark in Clipboard** [#2406](https://github.com/github/copilot-cli/issues/2406)
    *   **Context:** Copying text from the new rendering engine in v1.0.13 pastes an invalid character (BOM) at the start of the string.
    *   **Impact:** Affects code copy-pasting hygiene, requiring manual cleanup of pasted content.
5.  **[OPEN] 400 Errors on Code Review** [#1274](https://github.com/github/copilot-cli/issues/1274)
    *   **Context:** Users attempting to perform code reviews on diff files are frequently hitting 400 Bad Request errors.
    *   **Impact:** Renders the diff review feature unreliable (95% failure rate reported by user).
6.  **[OPEN] Request for OpenAI-Compatible Base URL** [#2283](https://github.com/github/copilot-cli/issues/2283)
    *   **Context:** Feature request to support `OPENAI_BASE_URL` to route traffic through proxies like LiteLLM or Ollama.
    *   **Impact:** Highly requested for self-hosted or local model usage scenarios.
7.  **[OPEN] Negative Premium Request Counter** [#1977](https://github.com/github/copilot-cli/issues/1977)
    *   **Context:** After setting a budget for premium requests, the UI displays remaining requests as a negative percentage (-0.9%).
    *   **Impact:** Confusing UX regarding usage limits and budgets.
8.  **[OPEN] Bash Tool Sync Mode Missing Output** [#2402](https://github.com/github/copilot-cli/issues/2402)
    *   **Context:** When the agent uses the bash tool in `sync` mode, it receives an exit code but no stdout output.
    *   **Impact:** Breaks agent autonomy; the AI cannot "read" the result of successful shell commands.
9.  **[OPEN] PowerShell Tool Failure on Windows** [#2355](https://github.com/github/copilot-cli/issues/2355)
    *   **Context:** Internal PowerShell tool fails to spawn `pwsh.exe` (ENOENT) even when PowerShell 7 is correctly installed.
    *   **Impact:** Windows users cannot utilize PowerShell-driven agent features.
10. **[OPEN] Plugin Install Ignores System Git Credentials** [#2404](https://github.com/github/copilot-cli/issues/2404)
    *   **Context:** Installing plugins from private repos fails because the CLI installer doesn't use the OS-level git credentials.
    *   **Impact:** Blocks adoption of private plugin marketplaces or internal tools.

## 4. Key PR Progress

*   **[#2380] Install Script Cleanup:** Proposed using an `EXIT` trap to reliably clean up temporary directories during installation, preventing orphaned files during failed downloads. (Status: Closed).
*   *Note: Only 2 PRs were updated in the data source window. The repository appears to rely primarily on internal development flows with limited external PR activity in the last 24 hours.*

## 5. Feature Request Trends

*   **Local Model Integration:** Continued demand for seamless integration with local LLMs (Ollama, LM Studio) via base URL overrides or auto-detection ([#2283](https://github.com/github/copilot-cli/issues/2283), [#2366](https://github.com/github/copilot-cli/issues/2366)).
*   **Multimodal Support:** Developers want the ability to paste images/screenshots directly into the CLI for vision-capable models to analyze ([#2409](https://github.com/github/copilot-cli/issues/2409)).
*   **Configuration Persistence:** Users are asking for ways to persist settings, specifically regarding permissions ([#2398](https://github.com/github/copilot-cli/issues/2398)) and context compaction thresholds ([#1761](https://github.com/github/copilot-cli/issues/1761)), to avoid per-session setup.
*   **Enterprise Controls:** Requests for granular policies, such as disabling "autopilot" mode at the organization level ([#1671](https://github.com/github/copilot-cli/issues/1671)).

## 6. Developer Pain Points

*   **Keybinding Friction:** The change to `Shift+Enter` is a significant source of annoyance. Users expect standard chat inputs (newline on Shift+Enter) and are struggling with the current execution behavior.
*   **Environment Inheritance:** The CLI appears to run in a sanitized environment that does not inherit the user's `PATH` or git credentials. This causes issues with Nix-managed binaries ([#2397](https://github.com/github/copilot-cli/issues/2397)) and private git plugins ([#2404](https://github.com/github/copilot-cli/issues/2404)).
*   **Output Truncation:** There are recurring reports of the CLI truncating output, specifically missing the last few lines of shell output (e.g., Aspire Dashboard URLs) ([#2388](https://github.com/github/copilot-cli/issues/2388)).
*   **Transient API Errors:** Users are frequently seeing "transient API error" messages without clear context on whether it is a network issue or a bug ([#2410](https://github.com/github/copilot-cli/issues/2410)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-31

## 1. Today's Highlights
Kimi Code CLI released **version 1.28.0**, a significant update headlined by the new **Hooks System (Beta)** for lifecycle customization and full **Light Theme Support**. The team merged over 15 PRs addressing critical stability issues, including fixes for the Write tool freezing, context overflow crashes, and OpenAI-compatible API compatibility. The community is actively engaging with architectural proposals for runtime modes and advanced agentic capabilities.

## 2. Releases
### **v1.28.0**
*   **Hooks System (Beta):** Introduced a new system allowing users to trigger custom logic at specific lifecycle events.
*   **UI Themes:** Added official support for light terminal themes, resolving visibility issues for users with light backgrounds.
*   **Stability Fixes:** Resolved a critical event loop blocking issue in the Write tool and improved `grep` performance by switching to async subprocesses.
*   **Compatibility:** Fixed `ValueError` crashes in ACP (JetBrains) and auto-set `reasoning_effort` for OpenAI-compatible APIs (e.g., One API).
*   **Docs:** Added comprehensive documentation for the new Hooks system.

## 3. Hot Issues
1.  **[Bug] Write Tool Freezing (#1607):** Users reported that calling the write tool often froze the session in v1.26+. *Significance:* This was a critical workflow blocker. **Status:** Resolved in v1.28.0 via event loop fixes.
2.  **[Bug] OAuth Login Failures (#1635):** Users logging in via OAuth encountered "incorrect API KEY" errors when executing skills. *Significance:* Impacted user onboarding and skill usage. **Status:** Fixed by improving error handling layers.
3.  **[Bug] JetBrains/ACP Initialization Crash (#1355, #1629):** JetBrains AI Assistant integration failed with `list.index` errors. *Significance:* Blocked enterprise users using IDE integrations. **Status:** Fixed by handling `argv` entry-points correctly.
4.  **[Bug] OpenAI API 400 Error (#1616):** Using Kimi-K2.5 via One API caused "thinking is enabled but reasoning_content is missing" errors. *Significance:* Broke compatibility with popular API gateways. **Status:** Fixed by auto-setting `reasoning_effort`.
5.  **[Bug] Light Theme Readability (#1636):** UI elements appeared as black blocks on light terminals. *Significance:* Poor accessibility for light mode users. **Status:** Resolved via the new theme system.
6.  **[Enhancement] Embedded Web Runtime (#1641):** Proposal to switch `kimi web` from subprocess mode to an embedded library model to reduce overhead and improve process management. *Significance:* Architectural debate on resource efficiency.
7.  **[Feature] Plan Mode CLI Flag (#1666):** Request for `--plan` flag to start sessions directly in planning mode. *Significance:* High demand for non-interactive/scripted workflows.
8.  **[Bug] MCP Image Input Errors (#1663):** LLM provider 400 errors when processing images from MCP tools. *Significance:* Breaks multimodal workflows involving screenshots or assets.
9.  **[Feature] Code Review Command (#1646):** Request for a `/review` slash command similar to Codex. *Significance:* Identifies code review as a high-frequency developer need.
10. **[Enhancement] Auto-evolving Skills (#1662):** Proposal to integrate OpenSpace design for autonomous skill generation. *Significance:* Represents the community's desire for self-improving agent capabilities.

## 4. Key PR Progress
1.  **[PR #1664] chore: bump kimi-cli 1.28.0:** The main release PR aggregating 15 changes including hooks, themes, and timeout protections.
2.  **[PR #1659] fix(diff): prevent event loop blocking:** Resolved the Write tool freeze by fixing `difflib` blocking calls and watcher crashes.
3.  **[PR #1661] feat(ui): add light theme support:** Implemented a full theme system with `ThemeColors` dataclass and auto-detection.
4.  **[PR #1655] fix(grep): async subprocess:** Replaced blocking `ripgrepy` with async subprocesses to prevent UI hangs during search.
5.  **[PR #1654] feat(timeout): add timeout protection:** Implemented default timeouts for Agent tools and HTTP requests to prevent background task hangs.
6.  **[PR #1657] fix(acp): prevent ValueError crash:** Fixed ACP initialization logic to support different entry-point names (e.g., `kimi-code`).
7.  **[PR #1656] fix(openai): auto-set reasoning_effort:** Ensured compatibility with OpenAI-compatible APIs that return reasoning content by default.
8.  **[PR #1651] docs(hooks): add hooks documentation:** Added detailed documentation (zh/en) for the new Hooks system, defining triggers and configuration.
9.  **[PR #1650] feat(web): add embedded session runtime:** Implementation of the embedded runtime mode discussed in Issue #1641 (currently Open).
10. **[PR #1614] feat(security): shell command analysis:** Community contribution adding security analysis patterns to the approval workflow (currently Open).

## 5. Feature Request Trends
*   **Workflow Automation:** Strong demand for non-interactive modes, specifically a `--plan` flag (#1666) and structured output schemas (#1638) for CI/CD integration.
*   **Agentic Architecture:** Users are pushing for more complex agent structures, specifically "Agent Swarm" or "Teammates" (#1633) rather than just subagents, and self-evolving skills (#1662).
*   **IDE Integration Quality:** Continued focus on seamless integration with JetBrains and VS Code, including better handling of platform-specific commands (#1649) and OAuth flows.
*   **Code Review:** Requests for dedicated review workflows (#1646) indicate a shift from using CLI solely for generation to quality assurance.

## 6. Developer Pain Points
*   **Stability in v1.26-v1.27:** The recent versions introduced significant regressions regarding the Write tool freezing and context overflow, causing frustration for active users.
*   **Platform Consistency:** Windows users reported errors due to the CLI executing Linux commands in PowerShell (#1649), highlighting a need for better cross-platform shell detection.
*   **Quota/Limit Confusion:** Users reported sudden quota limits (#1639) and authentication errors (#1667), suggesting a need for clearer feedback on rate limits and subscription status within the CLI.
*   **Web Mode Resource Usage:** The current subprocess model for `kimi web` is perceived as resource-heavy, driving the push for an embedded runtime (#1641).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-31

## Today's Highlights

OpenCode shipped **v1.3.7** with first-class PowerShell support on Windows and improved plugin configuration handling, followed by a patch release (v1.3.8). The community is actively discussing multi-agent orchestration capabilities, with the "Agent Teams" feature request gaining significant traction (+102 👍). Several deep-dive bug reports around session cancellation, tool execution timeouts, and path handling have sparked important architectural discussions about OpenCode's reliability under edge conditions.

---

## Releases

### [v1.3.7](https://github.com/anomalyco/opencode/releases/tag/v1.3.7)
- **Core:** Added first-class PowerShell support on Windows
- **Core:** Plugin installs now preserve JSONC comments in configuration files
- **Core:** Fixed `OPENCODE_DISABLE_CLAUDE_CODE_PROMPT` not being respected for project-level CLAUDE.md
- **TUI:** Improved variant modal behavior to be less intrusive
- **TUI:** Added new theme

### [v1.3.8](https://github.com/anomalyco/opencode/releases/tag/v1.3.8)
- No notable changes (stability patch)

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [**#12661 — Agent Teams Equivalent or Better**](https://github.com/anomalyco/opencode/issues/12661) | Top-voted feature request (+102 👍). Community wants multi-agent orchestration similar to Claude Code's Agent Teams for parallel task execution and collaboration. |
| 2 | [**#20094 — Stream iteration hangs on abort; zombie sessions**](https://github.com/anomalyco/opencode/issues/20094) | Critical reliability issue: `SessionProcessor.process()` can deadlock or leave sessions permanently running when abort fires during stuck tool results. |
| 3 | [**#20095 — Session cancel races cause lost cancels**](https://github.com/anomalyco/opencode/issues/20095) | Detailed analysis of multiple race conditions in session cancellation, including lost cancels before start and stale aborts affecting new generations. |
| 4 | [**#20096 — Tool/task execution hangs with no timeout**](https://github.com/anomalyco/opencode/issues/20096) | High-impact: tool calls can block indefinitely with no recovery path when external services, shell commands, or LLM providers hang. |
| 5 | [**#19604 — Write tool fails silently on large files (~1000+ lines)**](https://github.com/anomalyco/opencode/issues/19604) | High-impact bug causing silent data loss when writing larger files; multiple retries produce same failure with no error message. |
| 6 | [**#5199 — Add output-style feature similar to Claude Code**](https://github.com/anomalyco/opencode/issues/5199) | Popular request (+8 👍) for customizable AI communication styles and behavior profiles for different use cases. |
| 7 | [**#7006 — `permission.ask` plugin hook defined but not triggered**](https://github.com/anomalyco/opencode/issues/7006) | New Permissions system from PR #6319 has a hook that exists but doesn't fire, blocking plugin developers from customizing auto-approvals. |
| 8 | [**#20078 — LM Studio ignores limit.output, hardcodes max_tokens to 32000**](https://github.com/anomalyco/opencode/issues/20078) | Custom OpenAI-compatible providers bypass output limits, causing forced conversation truncation. |
| 9 | [**#20126 — Exponential backoff caps at ~25 days**](https://github.com/anomalyco/opencode/issues/20126) | Absurd backoff cap of ~24.86 days when APIs return errors without `retry-after` header makes sessions appear permanently stuck. |
| 10 | [**#2513 — Virtual tools for GitHub Copilot 128-tool limit**](https://github.com/anomalyco/opencode/issues/2513) | GitHub Copilot models fail with >128 configured tools; VSCode's virtual tool concept could solve this. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [**#19545 — OpenCode remote control + serve dependencies**](https://github.com/anomalyco/opencode/pull/19545) | Major feature enabling `opencode serve` for remote control with relay secrets and advertise-host support for Tailscale integration. |
| 2 | [**#20132 — Effectify Storage service**](https://github.com/anomalyco/opencode/pull/20132) | Architectural refactor migrating Storage service from promise-based to Effect-based using `ServiceMap.Service`, `TxReentrantLock`, and `AppFileSystem`. |
| 3 | [**#16751 — Fix tool_use/tool_result mismatch root causes**](https://github.com/anomalyco/opencode/issues/16751) | Comprehensive fix for tool pairing mismatches with reconstruction-time safety net; references 9 related issues. |
| 4 | [**#19955 — GitLab DWS tool approval integration**](https://github.com/anomalyco/opencode/pull/19955) | Wires GitLab Duo Workflow Service tool-call approval checkpoints into OpenCode's permission system. |
| 5 | [**#20035 — Local SQLite query package**](https://github.com/anomalyco/opencode/pull/20035) | New `@opencode-ai/local` workspace package for reading local OpenCode SQLite database without HTTP API. |
| 6 | [**#18836 — Clickable markdown file references**](https://github.com/anomalyco/opencode/pull/18836) | UX improvement making file references in markdown messages clickable in session view. |
| 7 | [**#19494 — Process memory telemetry and heap snapshot hooks**](https://github.com/anomalyco/opencode/pull/19494) | Diagnostic tooling for memory leaks with signal-triggered heap snapshot support. |
| 8 | [**#20129 — Mobile remote pairing workflow**](https://github.com/anomalyco/opencode/pull/20129) | Built-in mobile remote workflow for secure pairing between local agent and mobile devices. |
| 9 | [**#15513 — Replace elixir-ls with Expert LSP**](https://github.com/anomalyco/opencode/pull/15513) | Updates Elixir language server to the official Expert LSP with HEEx file support. |
| 10 | [**#20123 — Bump ai-sdk/xai to 3.0.75**](https://github.com/anomalyco/opencode/pull/20123) | Fix for xAI tool calls; quickly merged after identifying compatibility issue. |

---

## Feature Request Trends

1. **Multi-Agent Orchestration** — Strong demand for Agent Teams/parallel agent capabilities (#12661 with +102 👍)
2. **Output Customization** — Users want configurable AI communication styles (#5199)
3. **Provider Fallbacks** — Request for configurable provider/model fallback on transient errors (#20098)
4. **OAuth Credential Support** — Interest in Claude Code OAuth for Anthropic provider (#20079)
5. **Model Indicators** — Visual feedback when switching between models (#20122)
6. **Language Server Updates** — Community maintaining LS parity (Elixir Expert #15512)

---

## Developer Pain Points

1. **Session Reliability** — Multiple reports of deadlocks, zombie sessions, and race conditions in cancellation flows (#20094, #20095, #20096, #20097)
2. **Plugin Metadata Loss** — `fromPlugin` wrapper discards custom metadata from `context.metadata()` (#12527, #18585)
3. **Path Handling Inconsistencies** — Edit permissions use relative paths while `external_directory` uses absolute paths (#20045, #20113)
4. **Terminal Compatibility** — TUI rendering issues on JuiceSSH/Android (#20128) and console.warn bleeding through (#20047)
5. **Provider-Specific Limitations** — Hardcoded `max_tokens` for custom providers (#20078), 128-tool limit for Copilot (#2513)
6. **Timeout/Recovery Gaps** — No safety net for stuck tools/sessions when abort handlers fail (#20096, #20097)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-03-31.

---

# Qwen Code Community Digest (2026-03-31)

### 1. Today's Highlights
The Qwen Code ecosystem is actively bridging the gap between preview features and stable releases, evidenced by the back-to-back releases of **v0.13.2** (Stable) and **v0.14.0-preview.2**. A major theme across the community today is "reliability," with significant developer effort focused on fixing persistent permission prompts on Windows and resolving network/proxy configuration errors. Additionally, the project is expanding its extensibility via a new **Channels platform PR** and **npm registry support for extensions**.

### 2. Releases
*   **[v0.14.0-preview.2](https://github.com/QwenLM/qwen-code/compare/v0.13.2...v0.14.0-preview.2)**: The latest preview build, likely containing early fixes for proxy handling and TUI improvements.
*   **[v0.13.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.13.2)**: A stable maintenance release.
    *   **Docs**: Updated references from "Bailian" to "ModelStudio" in README ([#2714](https://github.com/QwenLM/qwen-code/pull/2714)).
    *   **Chore**: Version bumps and SDK synchronization.
*   **[sdk-typescript-v0.1.6](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.6)**: A backfilled release for the TypeScript SDK, bundling CLI version 0.13.1.

### 3. Hot Issues
1.  **[Answers not saving in one session](https://github.com/QwenLM/qwen-code/issues/2640)** (👍 8): Users report that selecting "Always allow in this project" for shell commands (like `yarn *`) fails to persist, causing repetitive prompts within a single session.
2.  **[Persistent permission prompts on Windows](https://github.com/QwenLM/qwen-code/issues/2723)** (👍 1): Similar to #2640, this issue highlights that "Always Allow" preferences for MCP tools and search are ignored, forcing users to re-approve actions constantly.
3.  **[Proxy URL "Invalid URL" Crash](https://github.com/QwenLM/qwen-code/issues/2736)**: Users unable to run the CLI due to a critical `TypeError: Invalid URL` when proxy configurations lack protocol prefixes (e.g., `127.0.0.1:7860` vs `http://...`).
4.  **[Windows Shell Commands Fail](https://github.com/QwenLM/qwen-code/issues/2727)**: Shell commands (e.g., `npm run format`) fail with "File not found" on Windows even when packages are installed, indicating potential PATH or environment resolution issues.
5.  **[Qwen Freezes on Shell Command](https://github.com/QwenLM/qwen-code/issues/2740)**: A critical bug where the session freezes when attempting to run shell commands, linked to missing `tree-sitter` WASM files.
6.  **[TUI Performance and UX](https://github.com/QwenLM/qwen-code/issues/2748)**: High-upvote feedback regarding slow startup (3-5s), screen flicker, and verbose logging affecting the Terminal User Interface experience.
7.  **[Garbled Characters with Chinese Usernames](https://github.com/QwenLM/qwen-code/issues/2746)**: Encoding issues (mojibake) on Windows when the username contains Chinese characters, breaking file paths and logs.
8.  **[Agent Confuses Config Syntax](https://github.com/QwenLM/qwen-code/issues/1910)**: The agent lacks self-knowledge regarding its configuration schema, often hallucinating permissions or MCP syntax from other AIs (Claude/Gemini).
9.  **[API Streaming Timeout](https://github.com/QwenLM/qwen-code/issues/2756)**: Users hitting `Streaming request timeout after 46s` errors immediately upon starting a session, requiring manual config adjustments.
10. **[Git Commit Error in 0.13.2](https://github.com/QwenLM/qwen-code/issues/2757)**: A regression in the latest version causing errors when generating git commit messages and pushing.

### 4. Key PR Progress
1.  **[Fix Windows Permission Persistence](https://github.com/QwenLM/qwen-code/pull/2670)**: Resolves the "Always Allow" bug on Windows by switching from case-sensitive to case-insensitive path comparisons.
2.  **[Normalize Proxy URLs](https://github.com/QwenLM/qwen-code/pull/2745)**: Fixes the `Invalid URL` crash by automatically prepending `http://` to proxy addresses missing the protocol.
3.  **[Channels Platform (Telegram/WeChat)](https://github.com/QwenLM/qwen-code/pull/2628)**: Introduces a major new feature allowing Qwen Code to interact via messaging platforms like Telegram and DingTalk through a plugin system.
4.  **[Cron/Loop Scheduling Tool](https://github.com/QwenLM/qwen-code/pull/2731)**: Adds session-scoped recurring jobs, enabling the model to monitor long-running operations (CI/Deploys) autonomously.
5.  **[npm Registry for Extensions](https://github.com/QwenLM/qwen-code/pull/2719)**: Enables installation of Qwen Code extensions directly via npm (including private registries), streamlining enterprise distribution.
6.  **[Fix History Memory Pressure](https://github.com/QwenLM/qwen-code/pull/2568)**: Replaces `structuredClone` with shallow copy to drastically reduce Garbage Collection pressure during long sessions.
7.  **[Parallelize Read-Only Tools](https://github.com/QwenLM/qwen-code/pull/2569)**: Optimizes performance by batching read-only operations (Read/Search/Fetch) to run in parallel rather than sequentially.
8.  **[Tool Output Masking](https://github.com/QwenLM/qwen-code/pull/2573)**: Reclaims context window space by replacing old, bulky tool outputs with snippets while preserving full data on disk.
9.  **[Read Many Files Tool](https://github.com/QwenLM/qwen-code/pull/2580)**: Introduces `read_many_files` to reduce overhead when ingesting multiple files simultaneously (ported from Gemini CLI).
10. **[Resilient Network Retries](https://github.com/QwenLM/qwen-code/pull/2583)**: Improves stability by adding retry logic for transient SSL/TLS and network errors.

### 5. Feature Request Trends
*   **External Platform Integration**: Strong interest in running Qwen Code headless or via existing communication tools (Telegram, WeChat, DingTalk).
*   **Advanced Context Control**: Requests for real-time token consumption displays and "Planning Mode" access to WebFetch for better research capabilities.
*   **Enhanced Media Support**: Users want the ability to capture screenshots or window contents directly from the CLI to aid in debugging UI issues.
*   **Undo/Redo & Editing**: A push for better conversational management, specifically the ability to edit previous user messages or undo agent actions.

### 6. Developer Pain Points
*   **Broken "Trust" Mechanics**: The most significant frustration is the failure of permission persistence. Users are fatigued by having to repeatedly approve the same safe commands (e.g., `python *` or `yarn *`) despite selecting "Always Allow."
*   **Windows Compatibility**: A cluster of issues related to path handling, encoding (Chinese usernames), and shell execution stability on Windows.
*   **Agent "Laziness"**: Reports of the agent refusing to execute tasks or claiming inability to perform actions it previously handled well.

</details>