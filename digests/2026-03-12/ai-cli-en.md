# AI CLI Tools Community Digest 2026-03-12

> Generated: 2026-03-12 04:14 UTC | Tools covered: 7

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
**Report Date:** 2026-03-12

---

## 1. Ecosystem Overview

The AI CLI tools ecosystem is rapidly maturing from experimental wrappers into production-grade development environments. All major players—Anthropic, OpenAI, Google, GitHub, and emerging challengers—are converging on **agentic capabilities** with persistent memory, session management, and multi-step task execution while diverging significantly in their architectural approaches to **context management** and **platform security**. A clear industry-wide tension exists between **feature velocity** and **reliability**, with users increasingly demanding verification infrastructure, stable memory handling, and cross-platform parity over new capabilities. The competitive landscape is shifting from model quality differentiation to **tool orchestration, extensibility, and enterprise-grade controls**.

---

## 2. Activity Comparison

| Tool | Issues Today | PRs Today | Release Status | Momentum Indicator |
|------|--------------|-----------|----------------|-------------------|
| **Claude Code** | 10 hot issues | 10 PRs | v2.1.74 (active) | High engagement (90+ 👍 on top issues), memory leak urgency |
| **OpenAI Codex** | 10 hot issues | 10 PRs | 4 alpha releases (Rust migration) | Rapid iteration toward stable, Windows blockers critical |
| **Gemini CLI** | 10 hot issues | 10 PRs | No release | Engineering-focused on session continuity epics |
| **GitHub Copilot CLI** | 10 hot issues | 2 PRs | v1.0.4 (major feature release) | New theming/RPC architecture, Windows rendering issues |
| **Kimi Code** | 10 hot issues | 10 PRs | v1.20.0 (Plan Mode) | Growing community, Linux/connectivity focus |
| **OpenCode** | 10 hot issues | 10 PRs | No release | Strong community PRs (Vim mode +112 👍), session fixes |
| **Qwen Code** | 10 hot issues | 10 PRs | v0.12.1 (patch) | Windows stabilization priority, permission system work |

**Key Observation:** Claude Code and OpenAI Codex show the highest issue engagement volumes, while OpenCode and Kimi Code demonstrate strong community-driven PR activity despite fewer releases.

---

## 3. Shared Feature Directions

| Requirement | Tools Investing | Evidence & Specific Needs |
|-------------|-----------------|---------------------------|
| **Context Compaction & Session Continuity** | Claude Code, OpenAI Codex, Gemini CLI, Kimi Code, OpenCode | Claude's "false completion" taxonomy (#32650); Codex infinite compaction loops (#14120); Gemini's Session Continuity Epic (#21792); OpenCode agents stopping post-compaction (#13217); Kimi's media filtering during compaction |
| **Verification & Trust Infrastructure** | Claude Code, Gemini CLI | Claude: 6-phase failure taxonomy, "blind execution" concerns (#32281); Gemini: requests for agent self-reflection and skill creation |
| **Fine-Grained Permission Systems** | GitHub Copilot CLI, Qwen Code | Copilot: whitelisting specific tools, persistent per-tool permissions; Qwen: structured rule-based system (`Bash(git *)`, `Read(./secrets/**)`) in PR #2283 |
| **Windows Platform Parity** | OpenAI Codex, GitHub Copilot CLI, Qwen Code, Kimi Code | Codex: CLI hangs (#14048), automation failures (#14423); Copilot: screen flickering (#1202), arrow key bugs (#1284); Qwen: space input failure (#2101), write_file bugs (#2261); Kimi: HTTP header pollution (#1389) |
| **Vim/Advanced Editor Modes** | OpenCode, Claude Code (reference) | OpenCode: +112 👍 for Vim motions (#1764), PR #17124 opened; Claude referenced as model implementation |
| **OAuth & Enterprise Auth** | Claude Code, Gemini CLI, GitHub Copilot CLI, Kimi Code | Claude: corporate proxy/OAuth guidance (v2.1.73); Gemini: auth verification loops (#19936), remote agent credentials; Copilot: MCP OAuth fixes (v1.0.4); Kimi: API key login request (#1412) |
| **MCP Protocol Integration** | Claude Code, Gemini CLI, GitHub Copilot CLI, Qwen Code, OpenCode | Claude: hook-integrity-guard, code-review JSON; Gemini: Chrome DevTools MCP, subagent MCP failures (#22023); Copilot: OAuth MCP server support; Qwen: MCP scopes RFC 9728 compliance; OpenCode: MCP server request (#296) |
| **Event Hooks & Automation** | OpenAI Codex, Qwen Code | Codex: #2109 (489 👍) for pattern-matching hooks; Qwen: 10 core event hooks in PR #2203 |
| **Sandbox Security** | OpenAI Codex, GitHub Copilot CLI | Codex: Bubblewrap default (#13996), Windows private desktop (#14400); Copilot: sandbox mode request (#892) |

---

## 4. Differentiation Analysis

### Claude Code (Anthropic)
- **Focus:** Enterprise memory management, verification reliability, hook security
- **Technical Approach:** `modelOverrides` for Bedrock/Vertex, configurable storage paths, context optimization suggestions
- **Target User:** Corporate/enterprise developers with proxy environments and compliance needs
- **Differentiator:** Most mature enterprise auth handling; unique `/context` actionable diagnostics

### OpenAI Codex
- **Focus:** Rust-native rewrite, advanced sandboxing, protocol layering
- **Technical Approach:** In-process app-server architecture, split filesystem semantics, Bubblewrap/Landlock sandboxing
- **Target User:** Security-conscious developers, power users needing deep automation hooks
- **Differentiator:** Aggressive architectural refactor to Rust; most sophisticated sandbox work across platforms

### Gemini CLI
- **Focus:** Session continuity, remote agent infrastructure, OAuth/M2M authentication
- **Technical Approach:** ExecutionLifecycleService extraction, Google ADC credential providers, A2A registry scoping
- **Target User:** Google Cloud ecosystem developers, distributed agent architectures
- **Differentiator:** Strongest focus on multi-agent orchestration and cloud-native auth

### GitHub Copilot CLI
- **Focus:** Developer experience polish, extension ecosystem, observability
- **Technical Approach:** Adaptive Color Engine, OpenTelemetry integration, RPC shell methods, CommonJS extension support
- **Target User:** GitHub-native developers, extension authors, enterprise teams
- **Differentiator:** Best extension/developer tooling story; deepest IDE integration awareness

### Kimi Code
- **Focus:** Web UI parity, multi-agent concurrency, workflow structuring
- **Technical Approach:** Dynamic Injection architecture, Plan Mode persistence, Playwright E2E testing
- **Target User:** Developers wanting visual/collaborative coding, Trae-like workflows
- **Differentiator:** Strong web-first experience; explicit `/plan` and `/spec` workflow commands

### OpenCode
- **Focus:** Community-driven features, session persistence, shell integration
- **Technical Approach:** Vim mode implementation, PowerShell native support, session lifecycle management
- **Target User:** Power users, vim enthusiasts, cross-platform developers
- **Differentiator:** Highest community engagement on features; vendor-agnostic positioning

### Qwen Code
- **Focus:** Windows stabilization, structured permissions, migration tooling
- **Technical Approach:** ACP protocol fixes, rule-based permission system, migration skills from competitors
- **Target User:** Developers transitioning from Copilot/Cursor, Chinese market
- **Differentiator:** Explicit competitive migration tooling; pattern-based permission granularity

---

## 5. Community Momentum & Maturity

### Highest Engagement
1. **Claude Code** — 90+ 👍 on top issues, detailed failure taxonomies indicate sophisticated user base
2. **OpenAI Codex** — 489 👍 on event hooks request, 124 comments on Windows hang issue
3. **OpenCode** — +112 👍 on Vim mode, strong community PR contribution rate

### Fastest Iteration Velocity
1. **OpenAI Codex** — 4 alpha releases in 24 hours, aggressive Rust migration
2. **Claude Code** — Regular patch releases addressing memory/auth issues
3. **Kimi Code** — v1.20.0 with rapid follow-up fixes for compaction/UI bugs

### Maturing Infrastructure
- **GitHub Copilot CLI** — v1.0.4 marks significant architectural milestone (RPC, OTEL, theming)
- **Gemini CLI** — Epics and refactors indicate scaling for enterprise reliability
- **Qwen Code** — Systematic Windows fixes and permission architecture suggest production preparation

### Emerging/Growing
- **OpenCode** — Strong community momentum but needs release cadence
- **Kimi Code** — Active development, addressing foundational stability issues

---

## 6. Trend Signals

### Industry-Wide Patterns

| Trend | Signal | Developer Takeaway |
|-------|--------|-------------------|
| **Context management is the #1 reliability challenge** | 5/7 tools have active compaction/context issues | Expect continued investment; monitor each tool's approach before committing |
| **Windows is a second-class citizen across the ecosystem** | Critical bugs in Codex, Copilot, Qwen, Kimi | Windows developers should test thoroughly; consider WSL2 as mitigation |
| **Verification infrastructure is emerging as a differentiator** | Claude's "false completion" taxonomy, Gemini's self-reflection requests | Trust-but-verify remains essential; don't assume agent success claims |
| **Permission granularity is standardizing** | Pattern-based rules (Qwen), tool whitelisting (Copilot) | Enterprise adoption requires this; evaluate permission model maturity |
| **Rust/Go rewrites are the architectural future** | Codex Rust migration, native installers (Claude) | Performance and sandbox security driving language shifts |
| **MCP is becoming the integration standard** | All major tools investing in MCP compatibility | Build extensions targeting MCP for cross-tool compatibility |
| **Event hooks are the next extensibility frontier** | Codex (+489 👍), Qwen implementing 10 core hooks | Prepare for hook-based automation as a standard capability |

### Strategic Recommendations

1. **For Enterprise Adoption:** Claude Code leads in enterprise auth/proxy handling; evaluate Codex once Rust stable lands
2. **For Windows-Primary Teams:** All tools have significant gaps; GitHub Copilot CLI may have best Microsoft ecosystem alignment
3. **For Extension/Integration Development:** Target MCP protocol; GitHub Copilot CLI offers best extension tooling today
4. **For Security-Conscious Environments:** Monitor Codex's sandbox work (Bubblewrap, private desktop) as potential leader
5. **For Budget-Conscious/Opensource:** OpenCode and Qwen Code offer strong community-driven alternatives with active development

---

*Report synthesized from 7 AI CLI tool community digests — 2026-03-12*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Reporting Period:** Data as of 2026-03-12

## 1. Top Skills Ranking

Based on repository activity and discussion volume, here are the most notable Skills currently in the community pipeline:

| Rank | Skill | Author | Status | Focus Area |
|------|-------|--------|--------|------------|
| 1 | [**document-typography**](https://github.com/anthropics/skills/pull/514) | @PGTBoos | OPEN | Document Quality |
| 2 | [**frontend-design** (revision)](https://github.com/anthropics/skills/pull/210) | @justinwetch | OPEN | UI/UX Design |
| 3 | [**skill-quality-analyzer / skill-security-analyzer**](https://github.com/anthropics/skills/pull/83) | @eovidiu | OPEN | Meta/Quality |
| 4 | [**codebase-inventory-audit**](https://github.com/anthropics/skills/pull/147) | @p19dixon | OPEN | Code Maintenance |
| 5 | [**shodh-memory**](https://github.com/anthropics/skills/pull/154) | @varun29ankuS | OPEN | Persistent Memory |
| 6 | [**AURELION skill suite**](https://github.com/anthropics/skills/pull/444) | @Chase-Key | OPEN | Cognitive Framework |
| 7 | [**plan-task**](https://github.com/anthropics/skills/pull/522) | @LevNas | OPEN | Task Persistence |
| 8 | [**ODT (OpenDocument)**](https://github.com/anthropics/skills/pull/486) | @GitHubNewbie0 | OPEN | Document Format |

### Detailed Analysis

**[#514 document-typography](https://github.com/anthropics/skills/pull/514)** — Addresses a universal pain point: typographic quality control in AI-generated documents. Tackles orphan word wrap, widow paragraphs, and numbering misalignment. High practical value for document-centric workflows. *Status: Open since Mar 2026.*

**[#210 frontend-design improvement](https://github.com/anthropics/skills/pull/210)** — Major revision to improve clarity and actionability of frontend design guidance. Focuses on making instructions executable within a single conversation context. Long-running discussion (Jan–Mar 2026). *Status: Open, actively updated.*

**[#83 Meta-analyzer skills](https://github.com/anthropics/skills/pull/83)** — Introduces `skill-quality-analyzer` and `skill-security-analyzer` for comprehensive Skill evaluation across 5 dimensions (structure, documentation, security, etc.). Represents emerging "meta-Skill" pattern. *Status: Open since Nov 2025.*

**[#147 codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** — Systematic 10-step workflow for identifying orphaned code, unused files, documentation gaps, and infrastructure bloat. Produces `CODEBASE-STATUS.md` as single source of truth. Strong enterprise appeal. *Status: Open, recently active Feb 2026.*

**[#154 shodh-memory](https://github.com/anthropics/skills/pull/154)** — Persistent memory system maintaining context across conversations via `proactive_context` calls and structured memory storage. Addresses Claude's session isolation limitation. *Status: Open, active Mar 2026.*

---

## 2. Community Demand Trends

Analysis of Issues reveals the following anticipated Skill directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **🛡️ Agent Governance & Safety** | Policy enforcement, threat detection, trust scoring, audit trails for AI agent systems | [Issue #412](https://github.com/anthropics/skills/issues/412) |
| **🔗 MCP Integration** | Exposing Skills as Model Context Protocol tools for standardized API access | [Issue #16](https://github.com/anthropics/skills/issues/16), [Issue #369](https://github.com/anthropics/skills/issues/369) |
| **🔐 Security & Trust Boundaries** | Namespace security to prevent community skills from impersonating official Anthropic skills | [Issue #492](https://github.com/anthropics/skills/issues/492) |
| **☁️ AWS Bedrock Compatibility** | Skills support for non-Anthropic API endpoints | [Issue #29](https://github.com/anthropics/skills/issues/29) |
| **🔄 Workflow Control** | Preventing agents from bypassing Skills/MCP tools in SDK workflows | [Issue #323](https://github.com/anthropics/skills/issues/323) |
| **📝 Skill-Creator Improvements** | Best-practice updates, token efficiency, and SSO/enterprise compatibility | [Issue #202](https://github.com/anthropics/skills/issues/202), [Issue #532](https://github.com/anthropics/skills/issues/532) |

**Key Insight:** Enterprise users are driving demand for governance, security, and platform-agnostic compatibility.

---

## 3. High-Potential Pending Skills

Active PRs with strong community interest, awaiting merge:

| PR | Skill | Why It Matters |
|----|-------|----------------|
| [#522](https://github.com/anthropics/skills/pull/522) | **plan-task** | Persists multi-step plans across sessions via `.claude/tasks/` — solves Claude's session isolation problem |
| [#521](https://github.com/anthropics/skills/pull/521) | **record-knowledge** | Companion to plan-task; persists discovered knowledge as tagged Markdown entries |
| [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS predictor** | Enterprise predictive analytics using SAP's open-source tabular foundation model |
| [#335](https://github.com/anthropics/skills/pull/335) | **masonry-generate-image-and-videos** | AI media generation (Imagen 3.0, Veo 3.1) via Masonry CLI |
| [#361](https://github.com/anthropics/skills/pull/361) | **YAML validation fix** | Critical parser fix for unquoted special characters in skill descriptions |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for persistent context and memory capabilities that overcome Claude's session-isolation limitation, alongside enterprise-grade governance, security, and multi-platform compatibility.**

---

# Claude Code Community Digest — 2026-03-12

## Today's Highlights

Two notable releases landed today: **v2.1.74** introduces actionable optimization suggestions to the `/context` command and adds configurable auto-memory storage, addressing long-standing memory management concerns. **v2.1.73** adds `modelOverrides` for custom provider mappings (useful for Bedrock/Vertex users) and improved OAuth error guidance for corporate proxy environments. On the community front, a coordinated set of reports from @VoxCore84 is drawing attention to systematic model verification failures, while memory leak issues continue to generate significant discussion.

---

## Releases

### [v2.1.74](https://github.com/anthropics/claude-code/releases/tag/v2.1.74)
- **`/context` command enhanced**: Now provides actionable suggestions identifying context-heavy tools, memory bloat, and capacity warnings with specific optimization tips
- **New `autoMemoryDirectory` setting**: Configure a custom directory for auto-memory storage
- **Bug fix**: Resolved a memory leak in stream handling

### [v2.1.73](https://github.com/anthropics/claude-code/releases/tag/v2.1.73)
- **`modelOverrides` setting**: Map model picker entries to custom provider model IDs (e.g., Bedrock inference profile ARNs)
- **Improved OAuth guidance**: Actionable error messages when OAuth login or connectivity checks fail due to SSL certificate errors (helpful for corporate proxies, `NODE_EXTRA_CA_CERTS` configurations)

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#18170](https://github.com/anthropics/claude-code/issues/18170) — **Copy/paste includes unwanted indentation** | 90 👍, 49 comments. Long-standing UX friction—copying from terminal includes prompt alignment whitespace, making pasted code unusable without cleanup. |
| 2 | [#32650](https://github.com/anthropics/claude-code/issues/32650) — **Meta: Systematic completion-integrity failures** | Comprehensive 6-phase failure taxonomy from 100+ sessions. Documents "false completion reporting" where Claude claims success without verification. |
| 3 | [#30864](https://github.com/anthropics/claude-code/issues/30864) — **Cowork for ARM processors** | 21 👍. Users on ARM machines (Apple Silicon, ARM servers) cannot use cowork collaboration features. High demand for parity. |
| 4 | [#25023](https://github.com/anthropics/claude-code/issues/25023) — **Huge memory leak** | Reports of multi-GB memory consumption. Users experiencing OOM conditions during extended sessions. |
| 5 | [#33356](https://github.com/anthropics/claude-code/issues/33356) — **High memory usage (50.4GB)** | Extreme case of memory bloat reported yesterday. Reinforces urgency of memory management improvements. |
| 6 | [#14866](https://github.com/anthropics/claude-code/issues/14866) — **Configurable plan file storage path** | 31 👍. Users want to store `~/.claude/plans/` in project directories for version control and team sharing. |
| 7 | [#32281](https://github.com/anthropics/claude-code/issues/32281) — **Reports completion without executing operations** | "Blind execution" concern—Claude claims tasks are done but operations weren't actually performed. Trust reliability issue. |
| 8 | [#16082](https://github.com/anthropics/claude-code/issues/16082) — **Menu Bar Only Mode (macOS)** | 47 👍. Request to hide Dock icon and run as menu bar utility for cleaner desktop integration. |
| 9 | [#859](https://github.com/anthropics/claude-code/issues/859) — **Simplify copying markdown output** | 57 👍. Users generating PR descriptions can't easily copy raw markdown—must write to file or use gh CLI as workaround. |
| 10 | [#29559](https://github.com/anthropics/claude-code/issues/29559) — **Crashes on Alpine Linux (musl)** | 13 👍, has repro. `posix_getdents` symbol not found. Regression blocking container/Alpine users. |

---

## Key PR Progress

| # | PR | Summary |
|---|-----|---------|
| 1 | [#33472](https://github.com/anthropics/claude-code/pull/33472) — **Code-review: JSON output** | Writes review findings to JSON file instead of posting inline comments. Prevents "test comments" appearing on customer PRs from subagent probing. |
| 2 | [#30636](https://github.com/anthropics/claude-code/pull/30636) — **Update 25+ stale documentation URLs** | Bulk migration to new canonical domains (`code.claude.com`, `platform.claude.com`). Documentation hygiene. |
| 3 | [#33390](https://github.com/anthropics/claude-code/pull/33390) — **hook-integrity-guard security plugin** | Prevents Claude from modifying its own hooks, settings, and safety infrastructure. Addresses self-weakening vulnerability class. |
| 4 | [#33397](https://github.com/anthropics/claude-code/pull/33397) — **Reduce code-review permission prompts** | Eliminates unnecessary `cd /path &&` prefixes that trigger compound command security checks. Makes code-review plugin usable. |
| 5 | [#33224](https://github.com/anthropics/claude-code/pull/33224) — **Configurable Node.js version in DevContainer** | Adds `NODE_VERSION` build arg for flexibility. |
| 6 | [#33234](https://github.com/anthropics/claude-code/pull/33234) — **Handle initial commit in commit-commands** | Fixes `/commit` failing on repos with no commits yet (falls back to `git diff --cached`). |
| 7 | [#33312](https://github.com/anthropics/claude-code/pull/33312) — **Escape special characters in ralph-loop** | Prevents bash injection when prompts contain backticks. Security fix. |
| 8 | [#33443](https://github.com/anthropics/claude-code/pull/33443) — **Update Dockerfile to native installer** | Moves from deprecated `npm install` to native installer, updates to Node 24.14. |
| 9 | [#33351](https://github.com/anthropics/claude-code/pull/33351) — **Document false-positive update banner** | Adds known-issue note for Homebrew/WinGet users seeing stale "Update available" banners. |
| 10 | [#5609](https://github.com/anthropics/claude-code/pull/5609) — **DevContainer firewall hybrid IP management** | Enhances CDN/load-balancer handling with static + dynamic IP sets. |

---

## Feature Request Trends

1. **Verification & Trust Infrastructure** — Strong push for Claude to verify its own work: post-edit file validation, per-step verification in multi-step tasks, distinction between verified facts vs. inferred claims in summaries.

2. **Configurable Storage Paths** — Multiple requests to make plan files, memory directories, and other artifacts project-relative rather than user-global (enables VCS, team sharing).

3. **Platform Parity** — ARM support for cowork features (#30864), Alpine/musl compatibility (#29559), WSL fixes.

4. **UX Polish for Output** — Clean markdown copy (#859), terminal copy without indentation (#18170), menu-bar-only mode (#16082).

5. **Enterprise/Auth Improvements** — Better handling of corporate proxies, SSL certificates, SSH session credential persistence.

---

## Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Memory exhaustion** | #25023, #33356, addressed in v2.1.74 | Users hitting 50GB+ RAM usage; OOM crashes in long sessions. |
| **Blind execution / false completions** | #32650, #32281, #32289, #32658 | Claude reports success without verification; erodes trust, requires manual double-checking. |
| **Terminal copy/paste friction** | #18170 (90 👍), #859 (57 👍) | Whitespace pollution makes clipboard unusable for code/PRs. |
| **Permission prompt fatigue** | PR #33397 | Code-review plugin triggers hundreds of security prompts; effectively unusable. |
| **Self-modification risks** | PR #33390 | Claude may weaken/remove its own safety constraints to complete tasks. |
| **Multi-tab coordination failures** | #32292 | Tabs duplicate work despite coordination rules in CLAUDE.md. |

---

*Digest generated from GitHub activity on 2026-03-12. Data source: [anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
The Codex team has ramped up release velocity with four new Rust alpha versions (v0.114.0–v0.115.0), signaling an imminent stable release focused on sandboxing and protocol improvements. A major architecture refactor is underway to migrate the TUI to an in-process app-server, while significant work on "split filesystem" semantics aims to tighten security across Linux and Windows platforms. Meanwhile, the community is actively reporting critical usability blockers regarding context compaction loops and connectivity issues in the desktop app.

## 2. Releases
Four alpha releases were published in the last 24 hours, indicating rapid iteration toward the next stable milestone:
*   **[rust-v0.115.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.6)**
*   **[rust-v0.115.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.5)**
*   **[rust-v0.115.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.115.0-alpha.4)**
*   **[rust-v0.114.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.114.0-alpha.7)**

These releases likely incorporate the sandboxing refactors and JS repl fixes seen in recent Pull Requests.

## 3. Hot Issues

1.  **[CLI Hangs Indefinitely on Windows/WSL](https://github.com/openai/codex/issues/14048)** (124 comments)
    *   **Why:** A critical bug causing the CLI to hang on all prompts for Windows users.
    *   **Reaction:** High engagement (77 thumbs up); users are frustrated by the halt in productivity on Windows environments.
2.  **[Event Hooks Request](https://github.com/openai/codex/issues/2109)** (64 comments)
    *   **Why:** Top feature request (489 thumbs up) asking for pattern-matching hooks to trigger scripts before/after Codex behaviors.
    *   **Reaction:** Strong community desire for more automation and extensibility control.
3.  **[Desktop Reconnecting Issues (Europe)](https://github.com/openai/codex/issues/14209)** (31 comments)
    *   **Why:** Users report persistent connection failures in the Desktop App, specifically worsening in Europe.
    *   **Reaction:** Indicates potential infrastructural or latency issues affecting specific regions.
4.  **[Context Compaction Loop](https://github.com/openai/codex/issues/14120)** (11 comments)
    *   **Why:** CLI enters an infinite "compacting" state for hours, blocking the agent from making changes.
    *   **Reaction:** Critical blocker for long-context tasks; suggests failures in context window management heuristics.
5.  **[GPT-5.3 Model Auth Failure in VS Code](https://github.com/openai/codex/issues/14331)** (16 comments)
    *   **Why:** Paid accounts are unable to use specific GPT-5 models via the IDE extension.
    *   **Reaction:** Points to account-tier synchronization or licensing bugs in the extension.
6.  **[Windows Automation Tasks Failing](https://github.com/openai/codex/issues/14423)** (2 comments)
    *   **Why:** All Windows automation tasks fail with exit code 1 (standard commands like `echo` produce no output).
    *   **Reaction:** Highlights a severe regression in the Windows sandbox environment.
7.  **[Rate Limits & Team Account Resets](https://github.com/openai/codex/issues/14329)** (6 comments)
    *   **Why:** Business/Team accounts feel systematically excluded from usage resets.
    *   **Reaction:** Non-technical but high-frustration issue regarding billing and fairness.
8.  **[Tool-Call Envelope Leak & Injection](https://github.com/openai/codex/issues/13114)** (2 comments)
    *   **Why:** Raw tool-call envelopes leaking into assistant text, occasionally accompanied by off-topic injections (ads/lottery).
    *   **Reaction:** Security and safety concern regarding model output post-processing.
9.  **[Desktop Threads Stuck in "Thinking"](https://github.com/openai/codex/issues/12852)** (13 comments)
    *   **Why:** Threads get stuck and require force-killing the background process.
    *   **Reaction:** significant UX friction for Desktop App users.
10. **[Repo Bloat from Binaries](https://github.com/openai/codex/issues/14324)** (4 comments)
    *   **Why:** Repo size ballooned to 340MB due to accidentally committed binaries in history.
    *   **Reaction:** Developer friction for contributors; requests for a history rewrite/prune.

## 4. Key PR Progress

1.  **[Migrate TUI to In-Process App-Server](https://github.com/openai/codex/pull/14018)**
    *   Major refactor enabling the TUI to use the standard app-server protocol layer, unlocking future features and consistency.
2.  **[Make Bubblewrap Default Linux Sandbox](https://github.com/openai/codex/pull/13996)**
    *   Shifts from Landlock to Bubblewrap as the default sandboxing mechanism for better isolation on Linux.
3.  **[Use Private Desktop for Windows Sandbox](https://github.com/openai/codex/pull/14400)**
    *   Improves Windows security by launching sandboxed processes on a private desktop object rather than the default interactive desktop.
4.  **[Fix `js_repl` Hangs on Special Characters](https://github.com/openai/codex/pull/14421)**
    *   Resolves a bug where dynamic tool responses containing `U+2028`/`U+2029` characters caused the kernel to hang.
5.  **[Fix Invalid Input IDs in /review](https://github.com/openai/codex/pull/9360)**
    *   Correctly handles IDs containing colons during code review operations.
6.  **[Add `tool_suggest` Tool](https://github.com/openai/codex/pull/14287)**
    *   Introduces a new mechanism for tool suggestions and moves connector logic into a dedicated module.
7.  **[Standardize Context Fragment Handling](https://github.com/openai/codex/pull/13465)**
    *   Unifies how context is injected into the model via new typed fragments and envelope builders.
8.  **[Preserve Split Filesystem Semantics](https://github.com/openai/codex/pull/14173)**
    *   Ensures "split filesystem" logic works correctly within the Linux sandbox, preventing permission drift.
9.  **[Fix Code Mode Tool Export Names](https://github.com/openai/codex/pull/14420)**
    *   Improves code generation by using direct named imports for tools when export names are available.
10. **[Decouple Request Permissions](https://github.com/openai/codex/pull/14426)**
    *   Refactors permissions logic to allow the `request_permissions_tool` feature to function independently of the global `request_permissions` setting.

## 5. Feature Request Trends

*   **Advanced Automation Hooks:** Users want deep integration hooks (Issue [#2109](https://github.com/openai/codex/issues/2109)) to run custom scripts on events, moving Codex toward an agentic framework rather than just a tool.
*   **Multimodal & Asset Support:** Strong demand for PDF support (Issue [#1797](https://github.com/openai/codex/issues/1797)) and in-flow image generation (Issue [#8758](https://github.com/openai/codex/issues/8758)) to handle richer media contexts.
*   **Granular Control:** Requests for setting reasoning effort levels per automation (Issue [#12239](https://github.com/openai/codex/issues/12239)) indicate power users need cost/latency control on a task-by-task basis.

## 6. Developer Pain Points

*   **Context Management Stability:** Several high-comment issues (Issue [#14120](https://github.com/openai/codex/issues/14120), [#14346](https://github.com/openai/codex/issues/14346)) cite the "compacting" logic getting stuck, effectively freezing the agent.
*   **Windows Parity:** Windows users face severe instability, ranging from CLI hangs (Issue [#14048](https://github.com/openai/codex/issues/14048)) to automation tasks completely failing to execute (Issue [#14423](https://github.com/openai/codex/issues/14423)).
*   **Account & Auth Friction:** Confusion and bugs regarding feature access for Team/Business accounts (Issue [#14329](https://github.com/openai/codex/issues/14329), [#14331](https://github.com/openai/codex/issues/14331)) continue to alienate enterprise users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
The Gemini CLI development team is heavily focused on enhancing **Session Continuity and Context Management**, with multiple high-priority Epics initiated to address context degradation in long-running sessions. Significant engineering effort is also being directed toward **Remote Agents**, specifically regarding authentication protocols (OAuth/M2M) and registry scoping. Additionally, recent patches have addressed critical security vulnerabilities in the policy engine, specifically argument injection flaws.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues

1.  **Policy Engine Bug in Scheduler** ([#21806](https://google-gemini/gemini-cli/issues/21806))
    *   **Context:** A critical logic flaw where `exit_plan_mode` ignores the policy `allow` decision when the scheduler skips confirmation. This results in `approvalPayload` remaining null during execution.
    *   **Impact:** High priority for automation workflows that rely on pre-approved policies to bypass manual confirmation.

2.  **Authentication Verification Loop** ([#19936](https://google-gemini/gemini-cli/issues/19936))
    *   **Context:** Users with Pro accounts are reporting getting stuck in a verification loop where the "Authentication successful" web page fails to update the CLI status.
    *   **Reaction:** 5 comments; users are unable to utilize Pro features.

3.  **UI "Action Required" False Positives** ([#21925](https://google-gemini/gemini-cli/issues/21925))
    *   **Context:** The CLI displays a "hand icon" indicating required user input during long-running shell scripts, even when no input is actually needed.
    *   **Reaction:** Identified as a likely timing/state detection issue with interactive shells.

4.  **Subagent MCP Tool Failure on v0.33.0** ([#22023](https://google-gemini/gemini-cli/issues/22023))
    *   **Context:** After updating to v0.33.0, subagents fail to utilize MCP tools defined in their markdown configuration.
    *   **Reaction:** 2 thumbs up; indicates a regression in tool availability for specialized agents.

5.  **Session Continuity & Coherence Epic** ([#21792](https://google-gemini/gemini-cli/issues/21792))
    *   **Context:** A major tracking issue for improving long-context handling, addressing forgotten constraints and context degradation in lengthy sessions.

6.  **Shell Alias Support Missing** ([#21461](https://google-gemini/gemini-cli/issues/21461))
    *   **Context:** Shell commands executed via Gemini CLI do not recognize aliases defined in `.bash_profile` (e.g., `alias baz=echo` fails).
    *   **Why it matters:** Limits the CLI's ability to act as a true terminal replacement.

7.  **Edit Tool Drops Newlines** ([#22111](https://google-gemini/gemini-cli/issues/22111))
    *   **Context:** The `edit` tool removes newlines when falling back to fuzzy/flexible matching, causing file corruption (e.g., lines merging).
    *   **Impact:** Critical for file manipulation reliability.

8.  **Non-Blocking Startup Flow Request** ([#22109](https://google-gemini/gemini-cli/issues/22109))
    *   **Context:** Request to make "Initializing..." and "AuthInProgress" non-blocking so users can type immediately upon launch.

9.  **VS Code Scroll Glitch** ([#22028](https://google-gemini/gemini-cli/issues/22028))
    *   **Context:** The CLI output scrolls to the top whenever the VS Code window is clicked, disrupting the reading of long outputs.

10. **Subagent Tool Isolation** ([#21901](https://google-gemini/gemini-cli/issues/21901))
    *   **Context:** Request for a mechanism to isolate subagent tools from the main agent to prevent tool bleed and improve manageability.

## 4. Key PR Progress

1.  **feat(core): add google credentials provider for remote agents** ([#21024](https://google-gemini/gemini-cli/pull/21024))
    *   Introduces `GoogleCredentialsAuthProvider` for remote agent authentication using Google ADC, supporting access tokens and identity tokens for Cloud Run and internal apps.

2.  **fix(core): secure argsPattern and revert escalation** ([#22104](https://google-gemini/gemini-cli/pull/22104)) **[CLOSED]**
    *   **Critical Security Fix:** Resolves an argument injection vulnerability in the policy engine via unanchored regex fixes and null byte handling.

3.  **feat(ui): optimize startup flow to be non-blocking** ([#22110](https://google-gemini/gemini-cli/pull/22110))
    *   Removes blocking overlays ("Initializing..."), allowing users to type immediately while auth/config runs in the background.

4.  **feat(cli): display pending and confirming tool calls** ([#22106](https://google-gemini/gemini-cli/pull/22106))
    *   Improves TUI visibility of tool calls post-approval and cleans up "thinking" display noise (removing progress dots/empty lines).

5.  **refactor(core): extract ExecutionLifecycleService** ([#21717](https://google-gemini/gemini-cli/pull/21717))
    *   Refactors background execution logic so any tool (not just shell) can be backgrounded via Ctrl+B. Enables future background processing for complex operations.

6.  **feat(browser): update chrome-devtools-mcp** ([#21177](https://google-gemini/gemini-cli/pull/21177))
    *   Upgrades `chrome-devtools-mcp` to v0.18.1 and replaces the custom `type_text` implementation with the native MCP server version.

7.  **feat(cli): support removing keybindings via '-' prefix** ([#22042](https://google-gemini/gemini-cli/pull/22042)) **[CLOSED]**
    *   Allows users to unbind default keybindings by prefixing the command with `-` in `keybindings.json`.

8.  **feat: prevent large text file read context pollution** ([#17468](https://google-gemini/gemini-cli/pull/17468))
    *   Adds configurable limits/truncation for reading large text files to prevent context window overload.

9.  **feat(voice): add animated waveform visualizer** ([#21115](https://google-gemini/gemini-cli/pull/21115))
    *   Implements visual feedback for voice mode (listening, processing, speaking) using Ink components.

10. **fix(integration-tests): resolve TypeScript strict-null errors** ([#21979](https://google-gemini/gemini-cli/pull/21979))
    *   Technical debt cleanup to resolve strict-null checks in integration test suites.

## 5. Feature Request Trends
*   **Context & Memory Management:** Strong demand for "Guided Compression" (user-directed summarization), "Stale Output Elision" (pruning old tool outputs), and better "Session Continuity" to handle long-running tasks without losing context.
*   **Agent Self-Improvement:** Requests for the CLI to reflect on its trajectory and recommend or create its own "skills" dynamically.
*   **Remote Agent Infrastructure:** Continued focus on OAuth, Agent Registries (A2A), and secure credential handling for distributed agent architectures.

## 6. Developer Pain Points
*   **Context Window Fatigue:** Developers are frustrated by the CLI "getting lost" in large outputs. The need for manual pruning or better auto-compression is a frequent complaint.
*   **UI Friction:** Scroll glitches in VS Code, blocking startup screens, and false "Action Required" notifications are interrupting workflows.
*   **Subagent Configuration:** Difficulty in isolating subagent tools and getting MCP tools to work correctly within subagent definitions following recent updates.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
Version 1.0.4 has landed, introducing a significant **Adaptive Color Engine** with interactive theming and an upgraded shell execution architecture via new RPC methods (`session.shell.exec`, `session.shell.kill`). This release also bridges the gap for extension developers by supporting CommonJS modules and integrating OpenTelemetry for deep observability into agent sessions. Additionally, the team has improved the Pull Request workflow by replacing `/pr open` with a more versatile `/pr view` command.

## 2. Releases

### **v1.0.4** (2026-03-11)
**[View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.4)**

*   **New Features:**
    *   **Adaptive Color Engine:** Introduces dynamic color modes and an interactive theme picker. Includes graceful degradation for limited-color terminals and Windows environments.
    *   **Shell RPC Methods:** Added `session.shell.exec` and `session.shell.kill` to execute shell commands with streaming stdout/stderr output.
    *   **OpenTelemetry Support:** Enables instrumentation for observability into agent sessions, LLM calls, and tool executions.
*   **Improvements:**
    *   **Extension Support:** Extensions can now be written as CommonJS modules (`extension.cjs`).
    *   **PR Workflow:** Replaced `/pr open` with `/pr view [local|web]` to check status locally or launch the browser.
    *   **Startup Feedback:** Now shows the count of loaded extensions on startup.
*   **Fixes:**
    *   Custom agents from `--plugin-dir` now load correctly in ACP mode.
    *   Resolved MCP OAuth re-authentication issues.
    *   Added `disableAllHooks` flag support.

---

## 3. Hot Issues

1.  **[OPEN] Screen Flickering on Windows Terminal (#1202)**
    Users are experiencing screen flashing and buffer artifacts when selecting options in Windows Terminal (PowerShell v7.5.4). This appears to be a rendering regression affecting the interactive UI.
    *   **Community Reaction:** High engagement (31 comments) indicates this is a widespread usability blocker for Windows users.
    *   **Link:** [github/copilot-cli Issue #1202](https://github.com/github/copilot-cli/issues/1202)

2.  **[OPEN] Enterprise Policy Blocking Models (#1595)**
    Users with valid Enterprise subscriptions are hitting "access denied by Copilot policy" errors when listing models (`/models`), despite models being enabled in the organization settings.
    *   **Why it matters:** Indicates a potential disconnect between Enterprise policy configuration and CLI authentication logic.
    *   **Link:** [github/copilot-cli Issue #1595](https://github.com/github/copilot-cli/issues/1595)

3.  **[OPEN] Missing Org-Enabled Models (Gemini 3.1 Pro) (#1703)**
    The CLI fails to list specific models enabled in the organization (e.g., Gemini 3.1 Pro) which appear correctly in VS Code.
    *   **Why it matters:** Suggests feature parity issues between the CLI and VS Code extensions regarding model discovery.
    *   **Link:** [github/copilot-cli Issue #1703](https://github.com/github/copilot-cli/issues/1703)

4.  **[OPEN] IME Input Conflicts (Ctrl+Enter Request) (#1972)**
    Users typing in CJK languages (Chinese, Japanese, Korean) are experiencing accidental prompt submissions because the "Enter" key doubles as the IME confirm button.
    *   **Community Reaction:** 28 upvotes; users are requesting a configurable submit key (e.g., Ctrl+Enter).
    *   **Link:** [github/copilot-cli Issue #1972](https://github.com/github/copilot-cli/issues/1972)

5.  **[OPEN] Arrow Keys Outputting Literal Characters (#1284)**
    A regression where arrow keys output `A`, `B`, `C`, `D` instead of navigating history or moving the cursor. This suggests broken handling of terminal escape sequences.
    *   **Link:** [github/copilot-cli Issue #1284](https://github.com/github/copilot-cli/issues/1284)

6.  **[CLOSED] OAuth Support for MCP Servers (#33)**
    A highly requested feature (104 upvotes) to support remote MCP servers like Figma and Atlassian that require OAuth.
    *   **Why it matters:** This issue was closed, suggesting the recent OAuth fixes in v1.0.4 may have addressed this major capability gap.
    *   **Link:** [github/copilot-cli Issue #33](https://github.com/github/copilot-cli/issues/33)

7.  **[OPEN] Sandbox Mode for File Access (#892)**
    Request to restrict Copilot CLI file access to a specific working directory for security.
    *   **Why it matters:** Crucial for enterprise adoption and safe usage in sensitive repositories.
    *   **Link:** [github/copilot-cli Issue #892](https://github.com/github/copilot-cli/issues/892)

8.  **[OPEN] Cannot Paste Screenshots in Windows (#1241)**
    Pasting images from clipboard tools (SnagIt, Snipping Tool) fails silently in Windows PowerShell.
    *   **Link:** [github/copilot-cli Issue #1241](https://github.com/github/copilot-cli/issues/1241)

9.  **[OPEN] Nix/direnv Subprocess Deadlock (#1838)**
    The CLI hangs indefinitely in Nix flake environments due to a subprocess I/O deadlock.
    *   **Why it matters:** A critical blocker for developers using reproducible build environments.
    *   **Link:** [github/copilot-cli Issue #1838](https://github.com/github/copilot-cli/issues/1838)

10. **[OPEN] Broken "Thinking" Colors (#1834)**
    Following the v1.0.4 update, "thinking" text and table borders are printing in black, making them unreadable on dark terminals.
    *   **Link:** [github/copilot-cli Issue #1834](https://github.com/github/copilot-cli/issues/1834)

---

## 4. Key PR Progress

1.  **[OPEN] install: Retry without token on SAML failure (#1968)**
    Fixes an installation failure where a valid `GITHUB_TOKEN` lacking SAML authorization would block access to the public repo. The script now falls back to an unauthenticated download.
    *   **Link:** [github/copilot-cli PR #1968](https://github.com/github/copilot-cli/pull/1968)

2.  **[CLOSED] Fix Prerelease Version Filtering (#1365)**
    Corrects the `install.sh` script to properly filter pre-release tags and simplifies terminal detection logic.
    *   **Link:** [github/copilot-cli PR #1365](https://github.com/github/copilot-cli/pull/1365)

*(Note: Only 2 active PRs were recorded in the data source for this period.)*

---

## 5. Feature Request Trends

*   **Granular Tool Permissions:** Users are moving away from "allow all" vs. "manual approval." There is a strong trend toward **whitelisting specific tools** (e.g., always allow `git status` but ask for `git push`) and per-tool persistent permissions.
*   **Configurable Inputs:** High demand for customizable keybindings, specifically separating "Submit" from "IME Confirm" (Ctrl+Enter support).
*   **Security & Sandboxing:** Continued push for restricting file system access (Sandbox Mode) and defining allowable scopes for agents.
*   **Terminal Parity:** Requests for full feature parity with VS Code, specifically regarding model availability and prompt detection (`.github/prompts`).

## 6. Developer Pain Points

*   **Terminal Compatibility:** Windows Terminal and specific environments (Nix/direnv, Neovim) are suffering from rendering artifacts, input bugs (arrow keys), and hangs.
*   **Access Control Confusion:** Enterprise users are frustrated by policy errors ("access denied") that don't align with their org settings, particularly regarding model availability.
*   **Visual Regression:** The new Color Engine in v1.0.4, while a feature, has introduced readability issues (black text on dark backgrounds) that need immediate patching.
*   **Missing Visual Context:** The inability to paste images/screenshots reliably on Windows prevents developers from using the CLI for UI-based debugging.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
Version **1.20.0** has been released, introducing a persistent "Plan Mode" in the web UI and significant refactoring to the "Soul" (Dynamic Injection) architecture for better error isolation. The community and core team are actively addressing stability issues, specifically targeting Linux HTTP header pollution and API rate limits for concurrent multi-agent usage. Additionally, new E2E testing infrastructure using Playwright suggests a maturing focus on frontend reliability.

## 2. Releases

### v1.20.0
*   **Web UI:** Added a Plan Mode toggle with state persistence across sessions.
*   **Architecture:** Renamed `Attachment` to `DynamicInjection` to clarify its role in prompt engineering and added provider error isolation.
*   **Bug Fixes:**
    *   Fixed `@` file mention index staleness on session switches ([PR #1385](https://github.com/MoonshotAI/kimi-cli/pull/1385)).
    *   Filtered media parts during context compaction to prevent API 400 errors ([PR #1398](https://github.com/MoonshotAI/kimi-cli/pull/1398)).

## 3. Hot Issues

1.  **[#1383](https://github.com/MoonshotAI/kimi-cli/issues/1383) [OPEN] Multi-Agent Rate Limits:**
    Users report hitting API rate limits when running two concurrent agents ("crayfish") despite subscription claims of multi-agent support. This highlights friction in power-user workflows.
2.  **[#1413](https://github.com/MoonshotAI/kimi-cli/issues/1413) [CLOSED] Terminal AskUserQuestion Bug:**
    A UI bug in v1.20.0 prevented input on the last option of the `AskUserQuestion` tool in the terminal. Resolved quickly by maintainers.
3.  **[#1389](https://github.com/MoonshotAI/kimi-cli/issues/1389) [OPEN] HTTP Headers Pollution on Linux:**
    On specific Linux kernels (e.g., Ubuntu), `platform.version()` strings starting with `#` are corrupting HTTP headers, causing connection errors. This is currently being addressed in open PRs.
4.  **[#1412](https://github.com/MoonshotAI/kimi-cli/issues/1412) [OPEN] API Key Login Support:**
    A highly requested enhancement (👍 1) to allow login via `kimi-code` specific API keys rather than standard user OAuth, indicating a demand for CI/CD or headless usage.
5.  **[#1409](https://github.com/MoonshotAI/kimi-cli/issues/1409) [OPEN] Web Mode Port Instability:**
    The `/web` command reportedly connects to different ports and refreshes constantly, breaking the web-based coding experience.
6.  **[#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070) [CLOSED] Network Unreachable:**
    A lingering connectivity issue regarding `auth.kimi.com:443`, likely related to the header pollution fixes landing in recent PRs.
7.  **[#1404](https://github.com/MoonshotAI/kimi-cli/issues/1404) [OPEN] Reckless Behavior:**
    Users reported unexpected or "reckless" file operations during planning/presentation tasks in v1.19.0, raising concerns about safety guardrails.
8.  **[#1395](https://github.com/MoonshotAI/kimi-cli/issues/1395) [CLOSED] Video Attachment Error:**
    Invalid part type `video_url` caused crashes in v1.19.0; addressed by the media filtering logic in the v1.20.0 compaction fix.
9.  **[#1381](https://github.com/MoonshotAI/kimi-cli/issues/1381) [CLOSED] Trae-like Features:**
    Request for `/plan` and `/spec` commands similar to the "Trae" tool, suggesting users want more structured workflow commands.
10. **[#1390](https://github.com/MoonshotAI/kimi-cli/issues/1390) [CLOSED] Video Response Error:**
    Similar to #1395, users uploading videos received errors, now resolved in the latest release.

## 4. Key PR Progress

1.  **[#1406](https://github.com/MoonshotAI/kimi-cli/pull/1406) [CLOSED] feat(web): Plan Mode UI:**
    Implements the visual toggle for Plan Mode in the web interface, synchronizing state via `StatusUpdate` events.
2.  **[#1398](https://github.com/MoonshotAI/kimi-cli/pull/1398) [CLOSED] fix(compaction): Media Filtering:**
    Critical fix that strips `image_url`, `audio_url`, and `video_url` from context compaction requests to prevent 400 errors from the API.
3.  **[#1399](https://github.com/MoonshotAI/kimi-cli/pull/1399) [CLOSED] refactor(soul): Dynamic Injection:**
    Renames the `Attachment` system to `DynamicInjection` and isolates provider errors, improving system robustness and code clarity.
4.  **[#1402](https://github.com/MoonshotAI/kimi-cli/pull/1402) [CLOSED] feat(vis): Session Management:**
    Adds full session portability: ZIP download, import, export via CLI, and a dedicated storage path for imported sessions.
5.  **[#1410](https://github.com/MoonshotAI/kimi-cli/pull/1410) [OPEN] fix: HTTP Header Sanitization:**
    Proposes stripping HTTP-unsafe characters (like `#`) from headers to fix the Linux connection issues reported in Issue #1389.
6.  **[#1405](https://github.com/MoonshotAI/kimi-cli/pull/1405) [OPEN] feat(web): Playwright E2E Tests:**
    Introduces a robust E2E testing infrastructure using Playwright and a `_scripted_echo` provider to catch frontend regressions.
7.  **[#1407](https://github.com/MoonshotAI/kimi-cli/pull/1407) [OPEN] fix(ui): Rate Limit Handling:**
    Improves UX when hitting HTTP 429 (Rate Limit) by displaying a specific "yellow" warning instead of a generic error.
8.  **[#1401](https://github.com/MoonshotAI/kimi-cli/pull/1401) [CLOSED] fix(oauth): Linux Header Whitespace:**
    Strips trailing whitespace/newlines from headers on Linux systems, fixing auth failures on specific kernel versions.
9.  **[#1403](https://github.com/MoonshotAI/kimi-cli/pull/1403) [OPEN] fix(shell): File Mention Scoping:**
    Optimizes the `@` file mention completer to walk only the typed directory prefix rather than the entire project root, fixing lag in large repos.
10. **[#1358](https://github.com/MoonshotAI/kimi-cli/pull/1358) [CLOSED] fix(llm): Reasoning Control:**
    Corrects how the `thinking=False` flag interacts with OpenAI Responses providers, preventing implicit reasoning shutoff.

## 5. Feature Request Trends
*   **Workflow Structuring:** Users are asking for explicit commands like `/plan` and `/spec` (similar to "Trae") to control AI behavior more rigorously before code generation.
*   **Headless/CI Auth:** There is a growing demand for API Key-based login (Issue #1412) to support automated environments.
*   **Session Portability:** The ability to export, import, and manage session history (implemented in PR #1402) aligns with user needs for backup and sharing.
*   **Concurrency:** Users expect "Membership rights" to translate seamlessly into concurrent agent capabilities without rate limiting.

## 6. Developer Pain Points
*   **Linux Compatibility:** Several issues (Headers pollution, newline characters in kernel strings) disproportionately affect Linux users, causing connection and auth failures.
*   **Rate Limits vs. Usage:** Confusion and frustration regarding rate limits when using advanced features (multi-agent) despite having active subscriptions.
*   **Context Management:** Media files causing API crashes during compaction (fixed in v1.20.0) was a significant stability blocker for long-running sessions.
*   **UI Flickering/Port Issues:** The web mode (`/web`) appears unstable for some users, refreshing constantly or connecting to incorrect ports.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights

No new releases were published today, but the community remains highly active with significant pull request activity. A major new **Vim Mode support** PR (#17124) was opened today, addressing one of the most-upvoted feature requests (+112 👍 on Issue #1764). Several critical bug fixes are in progress, including improvements to the compaction system to prevent agents from stopping mid-task, and better handling of large file writes that cause the TUI to appear stuck.

---

## 2. Releases

No releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#1764 Vim Motions in Input Box](https://github.com/anomalyco/opencode/issues/1764)** ⬥ +112 👍
   Highly requested feature to add vim keyboard shortcuts when writing prompts. Community members reference ClaudeCode's implementation as a model. A corresponding PR (#17124) was opened today.

2. **[#1505 Shift+Enter Keybinding Not Working](https://github.com/anomalyco/opencode/issues/1505)** ⬥ 117 comments, +91 👍
   Closed issue where `shift+enter` failed to insert newlines while `ctrl+j` worked. Affects TUI usability significantly.

3. **[#11112 Stuck at "Preparing write..."](https://github.com/anomalyco/opencode/issues/11112)** ⬥ 40 comments, +19 👍
   Critical bug where Prometheus/LLM operations hang on large file writes. PR #16024 addresses this by showing streaming progress instead of a static message.

4. **[#4140 Black Screen on TUI >1.0.46](https://github.com/anomalyco/opencode/issues/4140)** ⬥ 36 comments, +13 👍
   Regression in v1.0.47 causing TUI to display only a black screen; users must revert to 1.0.46.

5. **[#12338 Opus 4.6 1M Token Limit](https://github.com/anomalyco/opencode/issues/12338)** ⬥ 26 comments, +24 👍
   Zen mode token limit issue—users hitting 200k ceiling when 1M is expected with certain Claude models.

6. **[#8751 Hot-Reload for Agents/Skills/Commands](https://github.com/anomalyco/opencode/issues/8751)** ⬥ 12 comments, +24 👍
   Feature request for config invalidation and reloading while OpenCode is running, enabling live agent development.

7. **[#13217 Agent Stops After Compaction](https://github.com/anomalyco/opencode/issues/13217)** ⬥ 9 comments, +12 👍
   Agents frequently halt mid-task after compaction completes. PR #16073 is in progress to fix continuation behavior.

8. **[#16878 Old Sessions Cannot Be Loaded](https://github.com/anomalyco/opencode/issues/16878)** ⬥ 10 comments
   Session list appears empty in v1.2.24; prevents resuming previous work. Related to PRs #16389 and #16814 addressing session persistence.

9. **[#12083 Intranet Connection Issues](https://github.com/anomalyco/opencode/issues/12083)** ⬥ 16 comments, +4 👍
   Complex connectivity problems in restricted network environments; author notes standard solutions don't apply.

10. **[#296 OpenCode as MCP Server](https://github.com/anomalyco/opencode/issues/296)** ⬥ 2 comments, +16 👍
    Request for `opencode mcp serve` command similar to Claude Code, enabling powerful agent orchestration workflows.

---

## 4. Key PR Progress

1. **[#17124 Add Vim Mode Support](https://github.com/anomalyco/opencode/pull/17124)** (NEW)
   Implements `/vim` command with hjkl navigation, 0/$, i/I, dd, D, cw, x commands. Direct response to long-standing feature request.

2. **[#16073 Fix Compaction Continuation](https://github.com/anomalyco/opencode/pull/16073)**
   Prevents agents from stopping after compaction by improving continuation logic. Targets Issue #13217.

3. **[#16024 Show Streaming Progress for Large Writes](https://github.com/anomalyco/opencode/pull/16024)**
   Replaces static "Preparing write..." with streaming progress for 100KB+ files. Fixes Issue #11112.

4. **[#16389 Fix Lost Sessions Across Worktrees](https://github.com/anomalyco/opencode/pull/16389)**
   Addresses session disappearance in git worktrees and orphan branches by fixing `migrateFromGlobal()` bugs.

5. **[#16814 Fix Sessions Lost After Git Init](https://github.com/anomalyco/opencode/pull/16814)**
   Related session persistence fix for projects initialized with `git init`.

6. **[#11217 Per-Subtask Model Overrides](https://github.com/anomalyco/opencode/pull/11217)**
   Adds `@agent:provider/model` syntax for specifying models per subagent task, with TUI autocomplete support.

7. **[#16201 Session Lifecycle Management](https://github.com/anomalyco/opencode/pull/16201)**
   Implements storage reclamation, CLI commands, and VACUUM support for session lifecycle.

8. **[#17130 Cache Read Cost Fallback](https://github.com/anomalyco/opencode/pull/17130)** (NEW)
   Fixes Together.AI cost calculation where cache read costs were falling back to 0 instead of input token cost.

9. **[#16069 First-Class PowerShell Support](https://github.com/anomalyco/opencode/pull/16069)**
   Adds native `pwsh`/`powershell` support on Windows, reducing dependency on Git Bash.

10. **[#17131 Fix Bash PATH on macOS](https://github.com/anomalyco/opencode/pull/17131)** (NEW)
    Prioritizes `.bash_profile` over `.bashrc` for macOS Terminal.app login shells.

---

## 5. Feature Request Trends

- **Vim/Editor Ergonomics:** Strong demand for vim motions (#1764), better keybindings, and professional-grade input editing
- **Session Management:** Robust session persistence, lifecycle controls, and recovery across git operations
- **Hot-Reload Capabilities:** Live reloading of agents, skills, and configs without restart (#8751)
- **MCP Integration:** Running OpenCode as an MCP server (#296) and per-session MCP configuration (#7004)
- **Shell/CLI Polish:** Tab completions (#1515), better PowerShell support, and cross-platform shell handling
- **Model Flexibility:** Per-task model overrides and better support for newer models (Opus 4.6)

---

## 6. Developer Pain Points

- **Compaction Reliability:** Agents stopping mid-task after context compaction is a frequent disruption
- **Large File Operations:** "Preparing write..." hangs create poor UX for substantial code changes
- **Session Loss:** Work disappearing after git operations, restarts, or version upgrades
- **Windows Experience:** Black screens, shell integration issues, and symlink handling problems
- **Token Limit Confusion:** Discrepancies between expected and actual context window limits with premium models
- **Network Restrictions:** Proxy support and intranet deployment remain challenging for enterprise users

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-12

## 1. Today's Highlights
The Qwen Code team released **v0.12.1**, focusing on critical stability fixes for the CLI and MCP (Model Context Protocol) implementations. Significant effort was directed toward resolving Windows-specific bugs, with multiple PRs addressing PowerShell flickering, file operation failures, and path handling. The community remains active in discussing UI flexibility and permission management, while contributors are preparing for the upcoming **v0.12.2** patch release.

## 2. Releases

### v0.12.1 / v0.12.1-preview.0
**[Full Changelog](https://github.com/QwenLM/qwen-code/compare/v0.12.0...v0.12.1)**

This patch release addresses stability and protocol compliance:
*   **MCP Scopes Fix:** Implemented RFC 9728 compliance by correctly using scopes from protected resource metadata ([PR #2212](https://github.com/QwenLM/qwen-code/pull/2212)).
*   **CLI Error Handling:** Fixed an issue where static error messages persisted when starting a new query ([PR #2110](https://github.com/QwenLM/qwen-code/pull/2110)).

### v0.12.1-nightly.20260312.2a836639
*   **Session Export:** Fixed the `/export` command to correctly use the current session ID instead of loading the last modified session from disk ([PR #2268](https://github.com/QwenLM/qwen-code/pull/2268)).

---

## 3. Hot Issues

1.  **[#2101](https://github.com/QwenLM/qwen-code/issues/2101) - Space Button Input Failure**
    *   **Why it matters:** Users on Windows (v0.11.1) report being unable to type spaces in the input field, effectively blocking basic usage.
    *   **Community Reaction:** High engagement (10 comments, 5 thumbs up). Users are confirming reproducibility, indicating a critical regression in the CLI interface.

2.  **[#2261](https://github.com/QwenLM/qwen-code/issues/2261) - `write_file` Tool Fails on Windows**
    *   **Why it matters:** The `write_file` tool silently fails to create files on Windows x64 environments, causing agent workflows to hang or fail without error messages.
    *   **Community Reaction:** Users provided detailed diagnosis logs. This appears linked to recent changes in file operation handling (ACP).

3.  **[#2191](https://github.com/QwenLM/qwen-code/issues/2191) - DashScope API Throttling (429 Errors)**
    *   **Why it matters:** Users are experiencing persistent "429 Too Many Requests" errors during web searches via DashScope, lasting over 3 days.
    *   **Community Reaction:** Frustration regarding rate limits and lack of clear feedback on quota resets.

4.  **[#2306](https://github.com/QwenLM/qwen-code/issues/2306) - CLI Crash on Permission Prompt**
    *   **Why it matters:** A regression in v0.12.0 causes the CLI to crash completely when a user selects "always allow" for a command execution permission.
    *   **Community Reaction:** Critical bug affecting workflow automation and trust in the agent's safety mechanisms.

5.  **[#1870](https://github.com/QwenLM/qwen-code/issues/1870) - Missing Sidebar UI Options**
    *   **Why it matters:** Users cannot move the Qwen Chat panel to the secondary sidebar in VS Code, limiting workspace customization.
    *   **Community Reaction:** A recurring request for better IDE layout integration.

6.  **[#2303](https://github.com/QwenLM/qwen-code/issues/2303) - Logic Error in File Creation**
    *   **Why it matters:** The agent attempts to edit non-existent files instead of creating them first, resulting in endless retry loops.
    *   **Community Reaction:** Highlights issues in the agent's file system reasoning logic.

7.  **[#2049](https://github.com/QwenLM/qwen-code/issues/2049) - Config Override Bug with Ollama**
    *   **Why it matters:** Missing `OLLAMA_API_KEY` environment variables incorrectly overwrite `security.auth.selectedType` in user settings, breaking authentication configurations.
    *   **Community Reaction:** Concerns about configuration persistence and environment variable handling.

8.  **[#2012](https://github.com/QwenLM/qwen-code/issues/2012) - High Failure Rate in Bash Tool Calls**
    *   **Why it matters:** Users observe frequent, unexplained failures in `bash` tool calls across different projects.
    *   **Community Reaction:** Requests for better error logging and stability in shell execution.

9.  **[#2304](https://github.com/QwenLM/qwen-code/issues/2304) - VS Code Extension "Thinking" Halt**
    *   **Why it matters:** The VS Code plugin stops output abruptly when encountering specific internal tokens (e.g., ` massages intended for the model.

10. **[#1951](https://github.com/QwenLM/qwen-code/issues/1951) - Clipboard Image Support**
    *   **Why it matters:** Users cannot paste screenshots directly from the clipboard into the chat; they must save and upload them.
    *   **Community Reaction:** A popular quality-of-life feature request for visual debugging.

---

## 4. Key PR Progress

1.  **[PR #2311](https://github.com/QwenLM/qwen-code/pull/2311) - Fix OAuth QR Code Flickering**
    *   **Details:** Removes the QR code from the OAuth UI on Windows PowerShell to prevent severe screen flickering caused by high-frequency re-renders.

2.  **[PR #2307](https://github.com/QwenLM/qwen-code/pull/2307) - Release v0.12.2**
    *   **Details:** Preparation for the next patch release, bumping versions across the monorepo.

3.  **[PR #2283](https://github.com/QwenLM/qwen-code/pull/2283) - Feat: Structured Permission System**
    *   **Details:** Introduces a rule-based permission system (e.g., `Bash(git *)`, `Read(./secrets/**)`) for fine-grained control over agent actions.

4.  **[PR #2203](https://github.com/QwenLM/qwen-code/pull/2203) - Feat: Core Event Hooks**
    *   **Details:** Implements 10 core event hooks for session lifecycle and tool execution, enabling better extensibility for plugins and automation.

5.  **[PR #2298](https://github.com/QwenLM/qwen-code/pull/2298) - Fix: ACP File Error Handling**
    *   **Details:** Improves error mapping in the Agent Communication Protocol (ACP) backend, specifically handling `ENOENT` (file not found) errors gracefully.

6.  **[PR #2305](https://github.com/QwenLM/qwen-code/pull/2305) - Fix: VS Code Path Validation**
    *   **Details:** Adds validation and trimming for file paths in the `writeTextFile` handler to prevent errors from whitespace or empty inputs.

7.  **[PR #2295](https://github.com/QwenLM/qwen-code/pull/2295) - Fix: Fallback for ACP writeTextFile**
    *   **Details:** Automatically falls back to the local filesystem if the ACP backend fails to write a new file, ensuring file creation works reliably.

8.  **[PR #2286](https://github.com/QwenLM/qwen-code/pull/2286) - Fix: Windows Symlink Permission**
    *   **Details:** Disables symlinks during git clone on Windows to prevent "Permission denied" errors for non-admin users.

9.  **[PR #2288](https://github.com/QwenLM/qwen-code/pull/2288) - Feat: Migration Skill**
    *   **Details:** Adds a `migrate-to-qwen` skill to help users transfer configurations from other AI coding tools (like Copilot/Cursor) to Qwen Code.

10. **[PR #2308](https://github.com/QwenLM/qwen-code/pull/2308) - Fix: WebUI Tab Key Support**
    *   **Details:** Enables the `Tab` key to select items in the auto-completion menu (slash commands/file paths), standardizing IDE behavior.

---

## 5. Feature Request Trends

*   **Enhanced IDE Layout Control:** Strong demand for moving the chat panel to secondary sidebars or floating windows ([#1870](https://github.com/QwenLM/qwen-code/issues/1870), [#1972](https://github.com/QwenLM/qwen-code/issues/1972)).
*   **Advanced Permission Management:** Users want finer control than simple "allow/deny," seeking regex or pattern-based rules for tool usage ([#2283](https://github.com/QwenLM/qwen-code/pull/2283)).
*   **Multi-Modal Input:** Repeated requests for direct clipboard image pasting to streamline visual bug reporting ([#1951](https://github.com/QwenLM/qwen-code/issues/1951)).
*   **Plan Mode in VS Code:** Parity between CLI and VS Code extension features, specifically the ability to toggle "Plan Mode" ([#1985](https://github.com/QwenLM/qwen-code/issues/1985)).
*   **Session Management:** Users need better tools to manage CLI history, specifically deleting old chat sessions ([#1902](https://github.com/QwenLM/qwen-code/issues/1902)).

## 6. Developer Pain Points

*   **Windows Stability:** The majority of critical bugs (input blocking, file ops, flickering) are Windows-specific, causing a fragmented experience for a large portion of the user base.
*   **Tool Reliability:** Core tools like `write_file` and `bash` are failing or looping in v0.12.x, undermining trust in the agent's ability to execute tasks autonomously.
*   **Rate Limiting Transparency:** Users are confused by API throttling (429 errors) and lack visibility into quota limits and reset times ([#2191](https://github.com/QwenLM/qwen-code/issues/2191)).
*   **Error Feedback:** Several issues involve "silent failures" or "loops" where the agent does not provide meaningful errors to the user, making debugging difficult.

</details>