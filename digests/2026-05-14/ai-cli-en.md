# AI CLI Tools Community Digest 2026-05-14

> Generated: 2026-05-13 22:23 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

Here is the cross-tool comparison report for the AI developer tools ecosystem based on the community digests from May 14, 2026.

### 1. Ecosystem Overview
The AI CLI tool ecosystem is aggressively pivoting from simple interactive chat interfaces toward complex, multi-agent architectures capable of autonomous execution. This transition is friction-heavy, with developer communities across all major platforms reporting significant growing pains related to context management, system stability, and memory overhead. MCP (Model Context Protocol) has become the universal standard for tool integration, yet almost every tool is battling OAuth fragility, zombie processes, and SSE streaming instabilities. Meanwhile, underlying reliability is being tested by model updates, prompting simultaneous user demands for stricter safety guardrails and deeper IDE integrations.

### 2. Activity Comparison
| Tool | Issues Noted (24h) | PRs Noted (24h) | Release Status (24h) | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 10 | No Release | Billing regressions, Agentic UX, MCP Auth |
| **OpenAI Codex** | 10 | 10 | No Release | Desktop App performance, TUI crashes, Diagnostics |
| **Gemini CLI** | 10 | 10 | 2 Releases (v0.42.0, v0.43.0-preview) | Agent safety/hallucinations, UI performance |
| **GitHub Copilot CLI** | 10 | 2 | 2 Releases (v1.0.47, v1.0.48-0) | Native binding crashes, Sub-agent MCP routing |
| **Kimi Code CLI** | 10 | 10 | No Release (v1.44.0 imminent) | Model quality regression, stderr TUI leaks |
| **OpenCode** | 10 | 10 | 1 Release (v1.14.49) | SSE streaming instability, Dynamic models |
| **Pi** | 10 | 10 | No Release | Supply-chain security, Dependency bloat |
| **Qwen Code** | 10 | 10 | 1 Release (v0.15.11) | Daemon architecture, Memory OOM crashes |
| **DeepSeek TUI** | 10 | 10 | 1 Release (v0.8.34) | Terminal rendering/flickering, Security alerts |

### 3. Shared Feature Directions
Several clear requirements are driving development simultaneously across the ecosystem:

*   **Context Compaction & Memory Management:**
    *   *Tools:* Claude Code, OpenAI Codex, Gemini CLI, Kimi Code, OpenCode, Qwen Code.
    *   *Needs:* As models support longer context windows, naive token-counting is causing Out-of-Memory (OOM) crashes. Tools are rushing to implement memory-based compaction, media stripping (replacing base64 with placeholders), and configurable compaction models (using cheaper models to summarize context).
*   **Sub-Agent Architecture & Tool Propagation:**
    *   *Tools:* Claude Code, GitHub Copilot CLI, OpenAI Codex, OpenCode, Qwen Code.
    *   *Needs:* Moving beyond single-agent loops. Developers want multi-agent workflows where a "primary" agent delegates to sub-agents. There is a massive shared demand for sub-agents to inherit parent permissions, environment variables, and MCP server connections.
*   **MCP Stability & Auth:**
    *   *Tools:* Claude Code, OpenAI Codex, GitHub Copilot CLI, Kimi Code, DeepSeek TUI.
    *   *Needs:* MCP is standardizing, but implementation is brittle. Communities are requesting fixes for zombie child processes, better OAuth redirect handling, and the ability to pass custom headers (e.g., `Authorization`) to MCP servers.
*   **Advanced Agentic Safety & Guardrails:**
    *   *Tools:* Claude Code, Gemini CLI, GitHub Copilot CLI, DeepSeek TUI.
    *   *Needs:* With agents executing terminal commands autonomously, "yolo" modes are breaking things. Communities demand pre-execution hooks for destructive commands (like `git reset --force` or mass file deletions), file policy engines, and safeguards against recursive self-invocation (fork bombs).
*   **Terminal UI (TUI) Resilience:**
    *   *Tools:* Gemini CLI, OpenAI Codex, DeepSeek TUI, OpenCode, Pi.
    *   *Needs:* High-volume LLM outputs are breaking terminal rendering. Shared requirements include text throttling, capping UI buffers to prevent React/terminal jank, and clean exits on `SIGINT` to avoid leaving terminals in broken raw states.

### 4. Differentiation Analysis
*   **Target Users & Deployment:** GitHub Copilot CLI and OpenAI Codex are heavily focused on the enterprise desktop/IDE parity experience, addressing Windows/macOS UI freezes and VS Code integrations. Conversely, Qwen Code, Kimi Code, and OpenCode are differentiating by focusing on headless/CLI-first workflows, pushing daemon modes (`qwen serve`) and local/self-hosted LLM routing.
*   **Security Philosophy:** Pi is uniquely focused on supply-chain hardening, actively purging dependency trees and pinning versions to counter compromised npm packages. Gemini CLI and DeepSeek TUI are focused on runtime safety, battling catastrophic file deletions and malicious external repositories. Claude Code is caught between enterprise permission models and power users wanting to bypass them.
*   **Technical Stack Maturation:** Kimi Code and OpenCode are building dynamic model discovery (fetching live models from OpenRouter). DeepSeek TUI is differentiating via prompt-caching optimizations (stripping dynamic tool arrays to save token costs), while Claude Code and Gemini are dealing with the heavy overhead of AST-aware code manipulations.

### 5. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** **OpenCode**, **Qwen Code**, and **DeepSeek TUI** are merging significant architectural PRs daily, indicating fast-moving, community-driven development heavily focused on core infrastructure (daemons, memory management, rendering). **Gemini CLI** shows strong momentum in releasing rapid patches for critical agent bugs.
*   **Stable/Maturing Ecosystems:** **Claude Code** and **OpenAI Codex** have mature, highly active issue trackers dominated by integration, billing, and edge-case bugs rather than core architecture PRs. Their communities are highly engaged in grinding down regressions.
*   **Enterprise Integration Focus:** **GitHub Copilot CLI** is iterating quickly on enterprise-readiness (forking sessions, native bindings), though it currently faces friction with regression bugs in its latest releases.

### 6. Trend Signals
*   **The "Context Compaction" Crisis:** As context windows scale to 1M tokens, the industry is hitting a memory management wall. Simply storing history is crashing Node.js environments. *Developer Takeaway:* Building AI tooling requires aggressive memory bounding, lazy loading, and delegating context summarization to cheaper models.
*   **The Multi-Agent Security Catch-22:** The shift to autonomous agents is outpacing security models. Tools are allowing agents to spawn sub-processes while safety hooks fail to propagate. *Developer Takeaway:* Agent frameworks must treat permission propagation and lifecycle hooks as first-class features, not optional plugins.
*   **Local First / Bring Your Own Model (BYOM):** Users are increasingly frustrated with locked-in, overloaded proprietary servers (e.g., Kimi K2.6) and want to route tasks dynamically to local, cheaper, or open-source models. *Developer Takeaway:* AI tools must support dynamic model discovery, accurate local token counting, and flexible API routing to survive in a heterogeneous hardware environment.
*   **Supply Chain as an Attack Vector:** As AI tools download and execute massive dependency trees dynamically, they are targets for malware. *Developer Takeaway:* Strict dependency pinning, sandboxing, and file-policy engines will become standard requirements for any CLI tool running autonomous agents.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Analysis Period:** Through 2026-05-14 | **Repository:** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. Top Skills Ranking
Below are the most-discussed and highest-attention Pull Requests in the ecosystem, based on community engagement, update frequency, and functional impact.

| Rank | Skill / PR | Author | Status | Core Functionality |
|:---:|:---|:---|:---:|:---|
| 1 | [**document-typography** (PR #514)](https://github.com/anthropics/skills/pull/514) | PGTBoos | OPEN | Automated typographic quality control for AI-generated documents (orphan/widow prevention, numbering alignment). |
| 2 | [**frontend-design clarity revision** (PR #210)](https://github.com/anthropics/skills/pull/210) | justinwetch | OPEN | Reworks the frontend-design skill for higher actionability and internal coherence. |
| 3 | [**skill-quality-analyzer & skill-security-analyzer** (PR #83)](https://github.com/anthropics/skills/pull/83) | eovidiu | OPEN | Meta-skills that evaluate other Skills across quality, structure, and security dimensions. |
| 4 | [**testing-patterns** (PR #723)](https://github.com/anthropics/skills/pull/723) | 4444J99 | OPEN | Full-stack testing philosophy & patterns (unit, React, integration) based on the Testing Trophy model. |
| 5 | [**AURELION skill suite** (PR #444)](https://github.com/anthropics/skills/pull/444) | Chase-Key | OPEN | A 4-skill cognitive framework (kernel, advisor, agent, memory) for structured knowledge management. |
| 6 | [**ODT / OpenDocument** (PR #486)](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | OPEN | Enables creation, template filling, parsing, and HTML conversion of `.odt` / `.ods` files. |
| 7 | [**sensory — macOS automation via AppleScript** (PR #806)](https://github.com/anthropics/skills/pull/806) | AdelElo13 | OPEN | Replaces screenshot-based computer use with native `osascript` automation; two-tier permission model. |
| 8 | [**ServiceNow platform skill** (PR #568)](https://github.com/anthropics/skills/pull/568) | Vanka07 | OPEN | Broad ServiceNow assistant covering ITSM, ITOM, SecOps, FSM, SPM, CSDM, and IntegrationHub. |

**Discussion Highlights:**
- **Typography (#514)** resonates because it targets a universal pain point—every AI-generated document suffers from these issues, yet users rarely think to prompt for fix them.
- **Frontend-design (#210)** and **testing-patterns (#723)** reflect a community push to raise the baseline quality of Claude's output in software engineering workflows.
- **AURELION (#444)** and **shodh-memory (#154)** signal strong interest in persistent memory and structured cognition for multi-turn agent use cases.

---

## 2. Community Demand Trends
Analysis of the most-commented Issues reveals clear, actionable themes:

| Trend | Signal Issues | What the Community Wants |
|:---|:---|:---|
| **Org-wide Skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (13 comments, 👍7) | Shared skill libraries, direct sharing links, or team-scoped registries—eliminating manual `.skill` file distribution via Slack/Teams. |
| **Skill reliability & trigger bugs** | [#556](https://github.com/anthropics/skills/issues/556) (8 comments, 👍6), [#62](https://github.com/anthropics/skills/issues/62) (10 comments) | Deterministic skill invocation; `claude -p` never triggers skills in evals, and users report skills silently disappearing. |
| **Security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (6 comments, 👍2) | Namespace separation between official `anthropic/` skills and community submissions to prevent trust boundary abuse. |
| **Plugin deduplication & packaging** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍8), [#1087](https://github.com/anthropics/skills/issues/1087) (2 comments) | Clean separation of `document-skills` vs. `example-skills`; only declared skills should load from `marketplace.json`. |
| **Skill-as-MCP exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | Wrapping Skills as MCP tools with typed APIs, enabling programmatic composition and integration. |
| **Enterprise / SSO compatibility** | [#532](https://github.com/anthropics/skills/issues/532) (2 comments, 👍1), [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | Skills tooling must work without a raw `ANTHROPIC_API_KEY`, supporting SSO, Bedrock, and managed-license auth flows. |
| **MCP data optimization** | [#1102](https://github.com/anthropics/skills/issues/1102) (2 comments) | MCP servers (especially database-related) should compress or paginate returns to avoid context-window congestion. |

**Anticipated new Skill directions derived from demand:**
1. **Agent governance & safety patterns** (proposed in [#412](https://github.com/anthropics/skills/issues/412)) — policy enforcement, audit trails, trust scoring.
2. **Workflow automation orchestration** — chaining Skills across multi-step business processes.
3. **Codebase audit & inventory** — already prototyped in [PR #147](https://github.com/anthropics/skills/pull/147) (orphan detection, documentation gaps).

---

## 3. High-Potential Pending Skills
These actively-maintained PRs have strong functional proposals, are recently updated, and are likely candidates for merging:

| PR | Skill | Updated | Why It's Promising |
|:---|:---|:---|:---|
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | 2026-04-29 | Small, targeted, corrects a real cross-platform bug; low-risk merge. |
| [#360](https://github.com/anthropics/skills/pull/360) | **AppDeploy** | 2026-05-04 | Full-stack webapp deployment to public URLs; fills a major gap in Claude's deployment capabilities. |
| [#444](https://github.com/anthropics/skills/pull/444) | **AURELION suite** | 2026-05-06 | Ambitious memory/cognition framework; active iteration suggests author is responsive to feedback. |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow** | 2026-04-23 | Enterprise-grade coverage of a massive platform; strong demand signal from enterprise users. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 2026-04-21 | Addresses a universal developer need; well-structured skill with broad applicability. |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT / OpenDocument** | 2026-04-14 | Open-standard document format support—complements existing DOCX/PDF skills. |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change collision fix** | 2026-04-16 | Fixes document corruption from `w:id` namespace collisions in OOXML; critical for DOCX skill reliability. |
| [#509](https://github.com/anthropics/skills/pull/509) + [#512](https://github.com/anthropics/skills/pull/512) | **CONTRIBUTING.md + PR template** | 2026-03-19 | Infrastructure improvements that unblock community health; paired together for high impact. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable skill infrastructure—deterministic triggering, clean plugin packaging, enterprise-compatible tooling, and trust-worthy namespace boundaries—outweighing even the demand for any individual new Skill.**

Underlying this insight: the top Issues by engagement (#228, #556, #492, #189) all concern *platform reliability and governance*, not feature requests, signaling that the ecosystem is maturing past the "add more skills" phase into a "make skills dependable" phase.

---

# Claude Code Community Digest — 2026-05-14

---

## 1. Today's Highlights

No new releases landed in the past 24 hours, but the issue tracker is ablaze. A cluster of **model-picker bugs** reveals that selecting Opus 4.7 (200K) silently upgrades sessions to the 1M-context variant, burning through Max plan limits at an alarming rate — multiple duplicates and growing 👍 counts signal a high-urgency regression. Meanwhile, the **Agents View** feature continues to generate friction: users on AWS Bedrock/Vertex backends discovered it's hard-disabled despite documentation suggesting otherwise, and several issues request finer-grained control over agent permissions, worktrees, and flag passthrough. On the PR front, community contributors submitted a wave of **documentation and plugin improvements**, including a proposed `agents.txt` spec and a new `/teach` command for incremental project onboarding.

---

## 2. Releases

No releases were published in the last 24 hours. The latest stable version remains unchanged.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#53327](https://github.com/anthropics/claude-code/issues/53327) — Model picker shows Opus 4.7 (200K) but silently runs 1M context | User burned 18% of a 5-hour Max limit on a single small prompt. 7 comments, confirmed by multiple users — this is a **cost-critical regression** affecting anyone on tiered usage plans. |
| 2 | [#53780](https://github.com/anthropics/claude-code/issues/53780) — Model picker selects Opus 4.7 1M when choosing 200K (possibly after compaction) | Independent confirmation of the same silent-upgrade bug with a reproducible compaction trigger. Duplicates [#53031](https://github.com/anthropics/claude-code/issues/53031). Together these form a clear pattern. |
| 3 | [#37714](https://github.com/anthropics/claude-code/issues/37714) — Slack MCP plugin OAuth redirect_uri mismatch (16 comments, 32 👍) | The highest-engagement open issue. Slack MCP OAuth is fundamentally broken due to a hardcoded `localhost:3118` callback that doesn't match registered URIs. Blocking all Slack plugin users for nearly two months. |
| 4 | [#58735](https://github.com/anthropics/claude-code/issues/58735) — MCP OAuth fails: protected resource domain mismatch (Asana MCP V2) | A second OAuth failure mode — when the MCP server's public URL differs from its internal resource URL, the SDK rejects it. Suggests a **systemic MCP auth architecture gap**. |
| 5 | [#58799](https://github.com/anthropics/claude-code/issues/58799) — Windows idle: 25% CPU + 5 MB/s disk writes from TanStack Query cache rewrite | Root-caused to `persistQueryClient` rewriting a ~45 MB IndexedDB blob on every mutation. A significant **performance regression** for Windows Desktop users. |
| 6 | [#57602](https://github.com/anthropics/claude-code/issues/57602) — Windows: active session auto-archives on window focus loss | Alt-tabbing away for 30 seconds causes an active session to archive itself. Severely impacts any workflow requiring cross-reference with a browser. |
| 7 | [#58284](https://github.com/anthropics/claude-code/issues/58284) — Agent View hard-disabled on Bedrock/Vertex/Foundry (11 👍) | Users on third-party provider backends are locked out of Agents View entirely, contradicting the docs. High demand from enterprise users on AWS/GCP. |
| 8 | [#58838](https://github.com/anthropics/claude-code/issues/58838) — `claude sessions list` via Bash tool triggers recursive fork bomb | Running a seemingly harmless command through Claude's own Bash tool causes uncontrolled recursive spawning, exhausting usage quotas. A **self-inflicted denial-of-service** vector. |
| 9 | [#58806](https://github.com/anthropics/claude-code/issues/58806) — Disabled marketplace plugins still spawn MCP servers and open browser tabs | Privacy and consent concern: plugins explicitly disabled by the user continue to execute in the background and open browser tabs without permission. |
| 10 | [#54482](https://github.com/anthropics/claude-code/issues/54482) — Thinking blocks stripped from in-prompt context on every turn | In Opus 4.7 sessions, extended thinking is persisted to disk but silently removed from subsequent prompt context. The model has no signal this happened, leading to **phantom reasoning loss**. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#58842](https://github.com/anthropics/claude-code/pull/58842) — Use `git diff --stat` in commit-commands | Replaces full unified diffs with stat summaries in `/commit` and `/commit-push-pr`, eliminating significant context bloat on every invocation. Simple, high-impact optimization. |
| 2 | [#58801](https://github.com/anthropics/claude-code/pull/58801) — Add `agents.txt` v1.0 at repo root | Proposes a new standard for declaring what AI agents may do in a repository. Notably, the spec and PR were built entirely in Claude Code's autonomous `/goal` mode — dogfooding at its purest. |
| 3 | [#58744](https://github.com/anthropics/claude-code/pull/58744) — Add `/teach` command | Introduces `/teach <topic>` to let users incrementally teach Claude about project conventions, patterns, and architecture, with learnings saved to CLAUDE.md. Addresses a long-standing onboarding gap. |
| 4 | [#58646](https://github.com/anthropics/claude-code/pull/58646) — git-aware-history plugin | Fixes session fragmentation across git worktrees by keying history to the Git remote URL instead of raw CWD. Resolves orphaned session directories when worktrees are deleted. |
| 5 | [#58655](https://github.com/anthropics/claude-code/pull/58655) — Fix positional substitution in `clean_gone` | Replaces `awk '{print $1}'` with `sed` field extraction to prevent Claude's command positional substitution from mangling `$1` literals. A subtle but important toolchain fix. |
| 6 | [#58644](https://github.com/anthropics/claude-code/pull/58644) — Docs: chained Bash hook example | Adds a conservative `PreToolUse` hook example that blocks chained Bash commands outside quoted strings, addressing a security gap in plugin permission models. |
| 7 | [#58657](https://github.com/anthropics/claude-code/pull/58657) — Docs: clarify instruction precedence | Documents the precedence hierarchy for instruction files (global → project → session), clearing up consistent user confusion about which CLAUDE.md wins. |
| 8 | [#56334](https://github.com/anthropics/claude-code/pull/56334) — Docs: Windows Developer Mode for symlinks | Documents that Windows Developer Mode is required for symlink support, fixing silent "0 tokens" failures on background agent outputs. |
| 9 | [#58639](https://github.com/anthropics/claude-code/pull/58639) — Docs: support AGENTS.md in review guidelines | Updates bundled review workflows to recognize `AGENTS.md` alongside `CLAUDE.md` as a project instruction source, with clear precedence rules. |
| 10 | [#11713](https://github.com/anthropics/claude-code/pull/11713) — Developer-utilities plugin (long-running) | A community plugin with 5 utility commands, still open since November 2025 after removing commands that were upstreamed. Demonstrates the community plugin ecosystem maturing. |

---

## 5. Feature Request Trends

Several clear demand vectors emerged from today's issue and PR activity:

- **Agents View maturity**: The dominant theme. Users want Agent View on third-party backends ([#58284](https://github.com/anthropics/claude-code/issues/58284)), configurable worktree behavior ([#58597](https://github.com/anthropics/claude-code/issues/58597)), permission passthrough for subagents ([#58835](https://github.com/anthropics/claude-code/issues/58835), [#58380](https://github.com/anthropics/claude-code/issues/58380)), and proper top-level flag support ([#58624](https://github.com/anthropics/claude-code/issues/58624)). Agents are clearly the feature with the largest gap between user expectations and current capability.

- **IDE parity and expansion**: Image paste support in VS Code ([#52647](https://github.com/anthropics/claude-code/issues/52647), 6 comments), and an Eclipse IDE integration request with 42 👍 ([#30914](https://github.com/anthropics/claude-code/issues/30914)) indicate users want feature-complete, multi-IDE coverage.

- **MCP OAuth reliability**: Two distinct OAuth failures ([#37714](https://github.com/anthropics/claude-code/issues/37714), [#58735](https://github.com/anthropics/claude-code/issues/58735)) suggest the community needs a more robust and configurable OAuth flow for MCP servers, particularly when redirect URIs or resource domains differ from canonical URLs.

- **Permission and hook flexibility**: Custom descriptions in permission prompts ([#53799](https://github.com/anthropics/claude-code/issues/53799), 13 👍), chained-command security hooks ([PR #58644](https://github.com/anthropics/claude-code/pull/58644)), and `--allow-dangerously-skip-permissions` for agent dispatch all point to power users wanting finer-grained control over the permission model.

- **Incremental knowledge onboarding**: The `/teach` command PR ([#58744](https://github.com/anthropics/claude-code/pull/58744)) and the `agents.txt` proposal ([#58801](https://github.com/anthropics/claude-code/pull/58801)) reflect demand for structured, persistent ways to teach Claude about project-specific context.

---

## 6. Developer Pain Points

- **Silent model context escalation is a trust-breaker.** The Opus 4.7 200K→1M switch ([#53327](https://github.com/anthropics/claude-code/issues/53327), [#53780](https://github.com/anthropics/claude-code/issues/53780), [#53031](https://github.com/anthropics/claude-code/issues/53031)) silently consumes usage quota with zero user feedback. Multiple independent reports spanning weeks suggest the fix isn't landing fast enough for a bug that directly costs users money.

- **Windows Desktop experience remains second-class.** Idle CPU thrashing ([#58799](https://github.com/anthropics/claude-code/issues/58799)), auto-archiving on focus loss ([#57602](https://github.com/anthropics/claude-code/issues/57602)), and path handling failures ([#55107](https://github.com/anthropics/claude-code/issues/55107)) collectively paint a picture of a platform that needs dedicated QA investment.

- **Plugin consent and lifecycle management is underdeveloped.** Disabled plugins spawning processes and opening browser tabs without consent ([#58806](https://github.com/anthropics/claude-code/issues/58806)) is a trust issue. Users expect "disabled" to mean "does not run."

- **Context loss in extended sessions undermines confidence.** Thinking blocks silently stripped from prompt context ([#54482](https://github.com/anthropics/claude-code/issues/54482)) means the model loses its own reasoning without knowing it. For users relying on long-running sessions with Opus 4.7, this is a subtle but damaging reliability gap.

- **Self-referential command execution is a foot-gun.** The fork bomb from `claude sessions list` ([#58838](https://github.com/anthropics/claude-code/issues/58838)) highlights that Claude Code lacks safeguards against recursive self-invocation through its own Bash tool — a sharp edge that can exhaust a user's quota in seconds.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-14

## 1. Today's Highlights
It was a busy day in the `openai/codex` repository with no new official releases, but a massive amount of activity on the engineering side. The core team and contributors merged several long-awaited infrastructure fixes, including the new `codex doctor` diagnostic command, a crucial TUI panic fix, and enabled plugin hooks by default. Meanwhile, the community is heavily focused on Desktop App performance issues and context management limitations, with several highly-upvoted issues gaining renewed traction.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Hot Issues
Here are the top 10 noteworthy issues updated today:

*   **[#14860] [bug] Error running remote compact task** (👍 49, 💬 67)
    An older but highly active bug affecting remote task execution and context compaction. It continues to draw significant community frustration due to task failures in enterprise workflows.
    *Link: openai/codex Issue #14860*
*   **[#9224] [Feature] Codex Remote Control** (👍 398, 💬 49)
    A massively popular feature request asking for the ability to control a local desktop CLI remotely via the ChatGPT mobile app. Remains one of the most upvoted issues in the repo's history.
    *Link: openai/codex Issue #9224*
*   **[#12491] [bug] MCP child processes not reaped — 1300+ zombies, 37GB memory leak** (👍 3, 💬 22)
    A critical memory leak in the Codex Desktop GUI where MCP child processes spawn endlessly. Though closed, it is being closely monitored by users experiencing severe memory degradation.
    *Link: openai/codex Issue #12491*
*   **[#18404] [bug] Computer Use plugin remains "unavailable" on macOS Intel** (👍 7, 💬 19)
    Users on Intel-based Macs (x86_64) report that the Computer Use plugin fails to initialize despite MCP servers being active, blocking a key workflow for legacy hardware users.
    *Link: openai/codex Issue #18404*
*   **[#21527] [bug] Codex is really too slow** (👍 7, 💬 16)
    Highlighting general UI and model response latency across both the VS Code extension and the Desktop App, this issue serves as a lightning rod for general performance grievances.
    *Link: openai/codex Issue #21527*
*   **[#21000] [bug] Codex Web cannot open PRs** (👍 8, 💬 13)
    A high-impact bug where clicking "Create PR" in Codex Web consistently fails. This cripples the core CI/CD loop for web-based coding tasks.
    *Link: openai/codex Issue #21000*
*   **[#20301] [bug] Low cache hit rate when Codex integrates with GPT-5.5** (👍 4, 💬 13)
    Users integrating with the newest GPT-5.5 model are noticing significantly degraded prompt caching efficiency, leading to higher token costs and slower response times.
    *Link: openai/codex Issue #20301*
*   **[#12098] [Feature] Tabbed interface for parallel chat sessions** (👍 27, 💬 13)
    Developers are requesting a native tabbed UI inside the VS Code/Cursor extensions to easily switch between parallel chats without navigating clunky drop-downs.
    *Link: openai/codex Issue #12098*
*   **[#12862] [Feature] CLI: add `--worktree` and `--tmux` flags** (👍 53, 💬 12)
    A highly requested enhancement to allow the CLI to spin up isolated git worktrees attached to tmux sessions in a single command, streamlining parallel development.
    *Link: openai/codex Issue #12862*
*   **[#22486] [Feature] Make context compaction use a configurable model** (👍 4, 💬 3)
    A newly opened issue requesting the ability to route context compaction tasks to a cheaper/faster model (e.g., GPT-4o-mini) while keeping the main session on a premium model like o3 or GPT-5.5.
    *Link: openai/codex Issue #22486*

## 4. Key PR Progress
Here are the top 10 PRs showing active development progress today:

*   **[#22336] [CLOSED] feat(cli): add `codex doctor` diagnostics**
    Introduces a new `codex doctor` command to automatically check runtime environment, config, auth, and network state, making it vastly easier for users to debug setup issues.
    *Link: openai/codex PR #22336*
*   **[#21235] [CLOSED] Fix TUI wrapping for external borrowed slices**
    Fixes a severe TUI panic (byte index overflow) caused by bracketed-paste injection over stdin. Resolves a critical crash-on-paste bug for terminal users.
    *Link: openai/codex PR #21235*
*   **[#22549] [CLOSED] Enable plugin hooks by default**
    Merges a change that turns on the `plugin_hooks` feature flag by default, allowing plugin-bundled hooks to execute without requiring explicit user opt-in.
    *Link: openai/codex PR #22549*
*   **[#22531] [OPEN] Support OAuth client metadata URLs for MCP login**
    Enhances the MCP (Model Context Protocol) login flow to support optional client metadata URLs, enabling better dynamic registration for enterprise OAuth flows.
    *Link: openai/codex PR #22531*
*   **[#22529] [CLOSED] Spill oversized PreToolUse additionalContext**
    Fixes a bug where oversized context from the `PreToolUse` hook could bypass truncation logic, preventing subsequent model failures from token overflow.
    *Link: openai/codex PR #22529*
*   **[#22399] [OPEN] Route delegated MCP elicitations back to child session**
    Fixes a broken UX in `/review` mode where MCP prompts surfaced in the parent UI but failed when the user responded, because the answer was routed to the wrong session thread.
    *Link: openai/codex PR #22399*
*   **[#20532] [CLOSED] feat(app-server): API proposal for better thread loading performance**
    Lays the API groundwork for optimizing how the Desktop App fetches and loads large conversation histories, directly targeting the severe UI stuttering issues.
    *Link: openai/codex PR #20532*
*   **[#22528] [CLOSED] Make `multi_agent_v2` wait_agent timeouts configurable**
    Removes hard-coded timeouts for subagent mailbox waits, allowing the model to configure better wakeup/timeout bounds for complex, multi-agent tasks.
    *Link: openai/codex PR #22528*
*   **[#21400] [CLOSED] Avoid PowerShell profiles in elevated Windows sandbox**
    Prevents the Windows sandbox from inadvertently loading the real user's PowerShell profile script when executing elevated commands, improving security and stability.
    *Link: openai/codex PR #21400*
*   **[#22552] [OPEN] Remove plugin hooks feature flag**
    A follow-up to the recent default-on PR, proposing the complete removal of the `PluginHooks` feature flag to clean up technical debt and branching logic.
    *Link: openai/codex PR #22552*

## 5. Feature Request Trends
*   **Advanced Context & Agent Management:** Users want finer control over the agent's memory. There is a strong push for configurable models specifically for compaction (#22486), preventing fatal context window exhaustion (#7808), and preserving context when editing older messages (#20287).
*   **Desktop & Extension UX Parity:** Developers are asking for interface improvements that match competing tools, most notably native tabbed sessions in IDE extensions (#12098) and the ability to open Codex chats as full-sized editor tabs (#20951).
*   **CLI Workflow Automation:** Power users are pushing for native automation and isolation features, such as first-class `--worktree` and `--tmux` flags (#12862), custom local slash commands (#18857), and better session renaming for easier CLI resumption (#22526).

## 6. Developer Pain Points
*   **Desktop App Performance:** The most prominent recurring theme is UI lag. Users report that the Desktop App frequently stutters, freezes, or faces severe typing delays. This is particularly bad on Windows 11 (#20214, #21527) and on profiles with large local databases (#18693).
*   **MCP & Plugin Instability:** The transition to MCP and new plugins is causing friction. Users are battling massive memory leaks from zombie processes (#12491), missing plugins on specific architectures like macOS Intel (#18404), and broken MCP schemas (#13746).
*   **Windows OS Friction:** Windows users continue to face platform-specific bugs, including invisible progress panels requiring horizontal scrolling in VS Code (#21625), missing plugins (#21862), and systemic UI freezes (#21948).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-14

## 1. Today's Highlights
Gemini CLI rolls out version bumps focusing on smarter tool steering and safer auto-updates. The community remains highly engaged regarding agent reliability and safety, highlighted by a viral P0 issue reporting catastrophic file deletion during an Obsidian vault edit. Behind the scenes, significant work is being merged to stabilize UI performance, fix sandboxing environments, and overhaul memory system reliability.

## 2. Releases
*   **v0.43.0-preview.0** ([Release](https://github.com/google-gemini/gemini-cli/releases)): Introduces a core feature to steer the model toward using the `edit` tool for surgical edits rather than rewriting entire files, alongside documentation clarifications for Auto Memory.
*   **v0.42.0** ([Release](https://github.com/google-gemini/gemini-cli/releases)): Resolves a critical CLI issue preventing automatic updates from accidentally switching users to less stable release channels.

## 3. Hot Issues
1.  **Mass File Deletion via Agent (#26856)**: A user reported the AI agent completely ignoring instructions and deleting thousands of files in an Obsidian vault, causing massive data loss. Garnered 37 comments and 12 thumbs-ups, highlighting severe concerns about destructive agent actions and the need for stronger safety guardrails.
2.  **429 Rate Limiting Errors (#26911)**: Users are hitting "Too Many Requests" errors after just 5-10 minutes of use, despite utilizing less than 10% of their quota. This leaves the CLI hanging for up to an hour, severely impacting developer workflow.
3.  **Subagent Reports False Success (#22323)**: Subagents hitting the `MAX_TURNS` limit report a `status: "success"` instead of indicating an interruption, silently hiding incomplete executions from the user.
4.  **Critical WSL2 Reliability Failures (#26117)**: Comprehensive reports of cascading failures in WSL2 environments during autonomous `--yolo` workflows, including fork table exhaustion and unfavorable comparisons with competing models.
5.  **Shell Execution Hangs (#25166)**: The CLI repeatedly gets stuck showing "Awaiting user input" long after a simple shell command has finished executing, requiring manual intervention.
6.  **Memory Leak via Error Trace (#26909)**: Pasting a 400-line error trace into the CLI causes memory consumption to violently spike from 1GB to 12GB, indicating significant resource management issues in the UI layer.
7.  **`save_memory` Tool Not Found (#26563)**: Users attempting to use `/memory add` are encountering "Tool not found" errors, breaking expected Auto Memory workflows.
8.  **Subagents Ignoring Disabled Settings (#22093)**: Since v0.33.0, subagents (like the generalist) are running automatically even when explicitly disabled in configuration files, raising permission and autonomy concerns.
9.  **Agents Creating Tmp Scripts Everywhere (#23571)**: The model frequently writes temporary edit scripts in random directories instead of using surgical edits, leaving massive cleanup overhead for developers.
10. **400 Error with >128 Tools (#24246)**: The CLI throws a 400 error when workspace configurations exceed tool limits, requiring better dynamic scoping of enabled tools.

## 4. Key PR Progress
1.  **Throttling Shell Text Output (#26955)**: Merges a crucial fix to throttle `data` events to 1-second intervals and caps the UI buffer at 100k chars, preventing React re-render UI jank during high-volume shell outputs. (Fixes #25459)
2.  **Docker Sandbox Fix (#26995)**: Resolves a crash when launching the CLI in sandboxed mode by fixing the Docker entrypoint commandline conflict with `bash -c`.
3.  **Improve `replace` Block Matching (#26976)**: Prevents the `replace` tool from editing the wrong code block by forcing it to fail gracefully during ambiguous approximate matches rather than applying incorrect changes.
4.  **Clean Up Launched Memory Features (#26941)**: Removes old experimental settings and legacy memory surfaces, making the new JIT context and memory context manager the default paths.
5.  **Context Files Append Instead of Replace (#26950)**: Fixes a destructive behavior where context files were being entirely replaced instead of appended to, preserving previous context data.
6.  **Prevent Crashes from Mentions (#25980)**: Fixes an `ENAMETOOLONG` crash that occurred when large JSON-like content or hallucinated tool calls were pasted into the interactive prompt.
7.  **Expose RAG Snippets for Debugging (#27016)**: Introduces an opt-in setting (`general.logRagSnippets`) to log Code Customization RAG retrieved snippets to a local file for enterprise debugging.
8.  **Fix Snapshot Recovery (#26939)**: Resolves a cross-session bug where state snapshots were failing to recover properly.
9.  **Robust Stale Issue Lifecycle (#27015)**: Improves GitHub issue triage workflows to better manage the growing bug backlog and prevent accidental bumping of stale issues.
10. **Buffer Chat Compression Telemetry (#27020)**: Wraps OpenTelemetry logging in a buffer to optimize telemetry transmission during chat compression events.

## 5. Feature Request Trends
*   **Destructive Behavior Guardrails**: Strong community demand for pre-execution checks to prevent irreversible commands (e.g., `git reset --force`, mass file deletions) and to sandbox agent file manipulations.
*   **AST-Aware Code Manipulation**: Continued requests for AST-aware file reading and mapping to reduce token noise and prevent misaligned code edits.
*   **Subagent Lifecycle Hooks**: Requests for `UserCancel` hook events to allow developers to execute custom cleanup logic when an agent execution is interrupted via Ctrl+C.
*   **Browser Agent Resilience**: Features requested to automatically recover locked browser profiles rather than failing immediately during persistent sessions.

## 6. Developer Pain Points
*   **Agent Reliability & Hallucinations**: Developers are increasingly frustrated by agents hallucinating tool calls, silently failing, or disobeying explicit instructions, leading to broken codebases or lost data.
*   **UI Performance under Load**: The CLI struggles with high-volume text outputs, causing severe UI jank, memory leaks, and unresponsive terminals.
*   **Rate Limits Quota Bugs**: Hitting 429 errors well before actual quota limits are reached completely stalling development workflows.
*   **Misconfigured Tool Context**: The agent attempting to use tools that don't exist (like `save_memory`) or hitting hard API limits (>128 tools) indicates friction in how the model resolves its available capabilities.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-14

## 1. Today's Highlights
The GitHub Copilot CLI team shipped versions **v1.0.47** and a rapid patch **v1.0.48-0**, introducing the highly requested `/fork` command for session branching and `j/k` navigation in the `/diff` view. Meanwhile, the community is actively reporting a critical regression in **v1.0.46** regarding missing native bindings for MCP servers, which is dominating today's issue tracker alongside continued demand for deeper sub-agent and MCP tooling support.

## 2. Releases
### **v1.0.48-0**
* **Improved:** The `/ask` dialog no longer prompts for follow-up replies it cannot receive. Skill content injected into the model now excludes YAML frontmatter metadata.
* **Fixed:** Auto-disable the built-in `github-mcp-server` in Azure DevOps-only workspaces when running in prompt/headless mode.

### **v1.0.47 & v1.0.47-0**
* **Added:** The new `/fork` command allows users to branch a session for side quests, and forked sessions now display their origin in the sessions dialog. Support for `j/k` keys for up/down navigation was added to the `/diff` view.
* **Improved:** Copilot Max subscribers now see the correct models available to their subscription tier. The `--resume` flag now supports Copilot cloud agent sessions where the agent hasn't pushed any changes to its branch.

## 3. Hot Issues
1. **[#3281](https://github.com/github/copilot-cli/issues/3281) CLI Unusable After v1.0.46 Upgrade:** A critical bug where the CLI fails to start MCP servers due to missing native bindings. *Why it matters:* This is a blocker for users on certain environments attempting to upgrade, generating 6 comments in just one day.
2. **[#2630](https://github.com/github/copilot-cli/issues/2630) Custom Agent MCP Servers Not Connected in Sub-agents:** Custom agents lose MCP tool connections when invoked via the `task` tool or `--prompt` mode. *Why it matters:* Severely limits the composability of multi-agent architectures (9 comments).
3. **[#2058](https://github.com/github/copilot-cli/issues/2058) Add `/fork` Command for Side Quests:** Users requested a way to ask side questions without abandoning the main objective. *Why it matters:* Addressed directly in today's v1.0.47 release, showing strong community-developer alignment (9 comments, 7 thumbs-up).
4. **[#3287](https://github.com/github/copilot-cli/issues/3287) v1.0.46 Native Binding Blocker:** Similar to #3281, users are experiencing fatal crashes when typing any message due to native binding failures. *Why it matters:* High-frequency regression forcing users to downgrade.
5. **[#1433](https://github.com/github/copilot-cli/issues/1433) COPILOT_CUSTOM_INSTRUCTIONS_DIRS Pathing Issue:** Custom instructions outside the working directory hierarchy are ignored. *Why it matters:* Affects standardized enterprise deployments using shared network drives (8 comments, 6 thumbs-up).
6. **[#3293](https://github.com/github/copilot-cli/issues/3293) Propagate Extension Tools to Nested Sub-agents:** Extension tools currently only work up to depth 1. *Why it matters:* A limiting factor for complex, multi-step agentic workflows (3 thumbs-up).
7. **[#3288](https://github.com/github/copilot-cli/issues/3288) Linux CLI Crashes on Large Diffs:** The Rust-based diff runtime crashes when handling massive files (e.g., 15k lines, 850 inserts). *Why it matters:* Stability issue for users working with large generated files or substantial refactors.
8. **[#3296](https://github.com/github/copilot-cli/issues/3296) MCP Fails on Ubuntu 20.04:** Native runtime requires `glibc 2.33+`, breaking compatibility with older enterprise Linux distributions.
9. **[#3013](https://github.com/github/copilot-cli/issues/3013) Security Bypass: Hooks Don't Fire for Background Agents:** Safety hooks are skipped by background/task agents. *Why it matters:* A significant security concern for autonomous coding agents executing commands.
10. **[#3083](https://github.com/github/copilot-cli/issues/3083) MCP Servers Not Loading from `./.mcp.json`:** A regression where repository-level MCP servers fail to initialize on startup.

## 4. Key PR Progress
*Note: Only 2 PRs saw updates in the last 24 hours, both of which were closed.*
1. **[PR #772](https://github.com/github/copilot-cli/pull/772) Add Installation Script:** Proposed a `curl`-based bash installation script to streamline Linux/macOS setup. Closed after lingering for several months.
2. **[PR #2587](https://github.com/github/copilot-cli/pull/2587) Add Automated Issue Classification:** Implemented an AI-powered workflow using GitHub Agentic Workflows (`gh-aw`) to automatically apply `area:` and `triage` labels to new issues. Closed and likely integrated into the repository's action suite to help manage the high volume of incoming bugs.

## 5. Feature Request Trends
* **Deepened MCP & Agent Integration:** Users want MCP servers and extension tools to seamlessly propagate to sub-agents, nested agents, and isolated modes like `/research` ([#2630](https://github.com/github/copilot-cli/issues/2630), [#3293](https://github.com/github/copilot-cli/issues/3293), [#3302](https://github.com/github/copilot-cli/issues/3302)).
* **Enhanced Session Management:** Following the addition of `/fork`, the community is pushing for better session tracking, specifically the ability to "star" or favorite sessions for easier `--resume` access ([#3300](https://github.com/github/copilot-cli/issues/3300)).
* **Advanced UI/UX Flexibility:** Requests include a local web interface to supplement the TUI ([#3301](https://github.com/github/copilot-cli/issues/3301)), larger/searchable picker dialogs ([#3294](https://github.com/github/copilot-cli/issues/3294)), and smart model routing to automatically switch models based on input type (e.g., text vs. vision) ([#3295](https://github.com/github/copilot-cli/issues/3295)).
* **Greater Agentic Autonomy:** Proposals to allow tool-callable `cwd` changes and the ability to reject constrained option lists in plan mode ([#3035](https://github.com/github/copilot-cli/issues/3035), [#3303](https://github.com/github/copilot-cli/issues/3303)).

## 6. Developer Pain Points
* **Node/NPM Native Binding Nightmares:** The most vocal frustration today is the `Cannot find native binding` error introduced in v1.0.46. It completely breaks the CLI for many users, requiring manual `node_modules` hacking or downgrading ([#3281](https://github.com/github/copilot-cli/issues/3281), [#3287](https://github.com/github/copilot-cli/issues/3287)).
* **Legacy OS Support Drops:** Users running older operating systems (like Ubuntu 20.04 or Windows Server via complex SSH/tmux setups) are encountering silent failures or missing prebuild binaries without clear documentation on newly dropped support ([#3296](https://github.com/github/copilot-cli/issues/3296), [#3298](https://github.com/github/copilot-cli/issues/3298), [#3260](https://github.com/github/copilot-cli/issues/3260)).
* **Security and Control Limitations:** Developers are expressing growing unease about autonomous agents. The fact that safety hooks can be bypassed by sub-agents ([#3013](https://github.com/github/copilot-cli/issues/3013)) is a major pain point for teams trying to adopt Copilot CLI in secure CI/CD or production environments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-14

## 1. Today's Highlights

The community is buzzing around the upcoming **v1.44.0 release** (bumped in PR #2262) and the rapid rollout of patches addressing the **MCP stdio stderr leak regression** introduced in v1.43.0. Meanwhile, the K2.6 model continues to draw heavy fire from users reporting degraded quality and overloaded servers, sparking active debate in several long-running issues. On the contribution side, the PR pipeline is healthy with notable community-driven features like Shift+Enter support, slash-command alias resolution, and memory-leak fixes.

---

## 2. Releases

No new release was published in the last 24 hours. However, **PR #2262** bumps `kimi-cli` and `kimi-code` to **1.44.0** and was closed/merged today, suggesting an imminent release.

---

## 3. Hot Issues

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#2077 — K2.6 model overloaded, unusable under normal load](https://github.com/MoonshotAI/kimi-cli/issues/2077) | Critical: Allegretto members on macOS/Apple Silicon report K2.6 constantly returns overload errors. 8 comments, 1 👍—a top reliability complaint. |
| 2 | [#2268 — Insane degradation since model change](https://github.com/MoonshotAI/kimi-cli/issues/2268) | Filed yesterday; user reports a dramatic quality drop from v1.30 `kimi-for-coding` to current K2.6. Rapidly gaining attention (1 👍 in <24h). |
| 3 | [#1925 — Kimi K2.5 vs K2.5 model switch request](https://github.com/MoonshotAI/kimi-cli/issues/1925) | Users want to revert to K2.5, citing K2.6's excessive thinking, reduced creativity, and lost personality. 11 comments show strong community debate. |
| 4 | [#2265 / #2263 / #2251 — MCP stdio stderr leaks into TUI (regression)](https://github.com/MoonshotAI/kimi-cli/issues/2265) | Multiple duplicate reports across Linux and macOS after the v1.43.0 upgrade. MCP subprocess stderr corrupts the interactive terminal. A fix is already in PR #2259. |
| 5 | [#2267 — Free version does not work at all](https://github.com/MoonshotAI/kimi-cli/issues/2267) | Users on the free tier cannot even start a session. Critical for adoption and onboarding. |
| 6 | [#2266 — Refresh system prompt template variables on context compaction](https://github.com/MoonshotAI/kimi-cli/issues/2266) | High-quality technical proposal: `BuiltinSystemPromptArgs` is rendered once at session start and never updated, causing stale context in long sessions. |
| 7 | [#2264 — Proposal: Explore a Rust port of Kimi CLI](https://github.com/MoonshotAI/kimi-cli/issues/2264) | Bold community proposal (with self-aware humor) to port the CLI to Rust for performance. Sparks discussion on long-term architecture. |
| 8 | [#2256 — Official Co-authored-by git trailer with branded avatar](https://github.com/MoonshotAI/kimi-cli/issues/2256) | Requests first-class attribution for AI-generated commits via a dedicated GitHub account. 1 👍; aligns with enterprise provenance requirements. |
| 9 | [#2252 — Add /goal command + Codex coding plan import](https://github.com/MoonshotAI/kimi-cli/issues/2252) | Parity request with OpenAI Codex's `/goal` command and cross-tool plan import. Signals growing demand for interoperability. |
| 10 | [#2178 — Windows kimi.exe blank FileVersionInfo blocks VS Code extension](https://github.com/MoonshotAI/kimi-cli/issues/2178) | Windows-specific: missing version metadata causes the VS Code extension to reject the CLI as incompatible. Affects a large user segment. |

---

## 4. Key PR Progress

| # | PR | Summary |
|---|----|---------|
| 1 | [#2262 — chore(release): bump to 1.44.0](https://github.com/MoonshotAI/kimi-cli/pull/2262) | Closes/merged today. Bumps both `kimi-cli` and `kimi-code` to **1.44.0** and reorganizes breaking-change notes for 1.43.0. |
| 2 | [#2259 — fix: redirect stdio MCP stderr to logs](https://github.com/MoonshotAI/kimi-cli/pull/2259) | Directly addresses the TUI-corruption regression (#2265, #2263, #2251) by routing MCP subprocess stderr to `~/.kimi/logs/mcp/<server>.log`. Includes regression test. |
| 3 | [#2261 — feat(shell): slash command alias resolution & display](https://github.com/MoonshotAI/kimi-cli/pull/2261) | Adds canonical command resolution for aliases with clear UI indication and correct telemetry tracking. |
| 4 | [#2255 — feat(shell): support Shift+Enter for newlines](https://github.com/MoonshotAI/kimi-cli/pull/2255) | Implements the widely requested Shift+Enter shortcut (closes #2254, relates to 4 prior issues). Complements existing Ctrl-J and Alt-Enter. |
| 5 | [#2260 — feat: add kill_ring_system_clipboard config option](https://github.com/MoonshotAI/kimi-cli/pull/2260) | New `kill_ring_system_clipboard` toggle (default: true) to control whether the kill ring syncs with the OS clipboard. |
| 6 | [#2246 — feat(shell): --prompt-interactive / -P option](https://github.com/MoonshotAI/kimi-cli/pull/2246) | Lets users pass an initial prompt at launch while keeping the session open for follow-up—bridging one-shot and interactive modes. |
| 7 | [#2236 — fix(utils): bound broadcast queues & cap web store cache](https://github.com/MoonshotAI/kimi-cli/pull/2236) | Prevents OOM by bounding `asyncio.Queue` per subscriber and capping the in-memory session cache. |
| 8 | [#2231 — fix(aiohttp): reuse TCPConnector to prevent connection leaks](https://github.com/MoonshotAI/kimi-cli/pull/2231) | Reuses a single `TCPConnector` across calls, eliminating per-request TCP handshakes and FD pressure under heavy parallel operations. |
| 9 | [#2257 — refactor(telemetry): track /btw side-question as tool_call event](https://github.com/MoonshotAI/kimi-cli/pull/2257) | Replaces lightweight `input_btw` event with structured `tool_call` telemetry for better observability of the `/btw` flow. Closed/merged. |
| 10 | [#2176 — fix(hooks): extract text from ContentPart for UserPromptSubmit hook](https://github.com/MoonshotAI/kimi-cli/pull/2176) | Fixes hooks receiving empty prompts when `user_input` is a `list[ContentPart]` instead of a plain string. |

---

## 5. Feature Request Trends

1. **Model choice & quality control** — The dominant theme: users want the ability to pin or revert to K2.5 / `kimi-for-coding`, citing K2.6 regression in creativity, personality, and reliability. Configurable model switching is a top ask.
2. **Shell & input UX** — Shift+Enter for newlines (#2254), `/goal` command parity with Codex (#2252), and `--prompt-interactive` mode all point to a desire for a more flexible, editor-like interactive experience.
3. **Git attribution & provenance** — `Co-authored-by` trailers with a branded bot account (#2256) reflect enterprise interest in auditable AI-assisted commits.
4. **Cross-tool interoperability** — Importing Kimi coding plans into Codex (#2252) and system prompt template refresh on compaction (#2266) indicate demand for seamless multi-tool workflows.
5. **Rust port exploration** — A long-tail but notable request (#2264) signals performance-conscious users are thinking about native-binary speed and distribution.

---

## 6. Developer Pain Points

- **K2.6 reliability & quality regression** — The most frequently cited frustration. Overloaded servers, increased hallucinations, loss of model "personality," and degraded task completion compared to prior models are driving users to demand rollback or model-selection options.
- **MCP stdio stderr TUI corruption (v1.43.0 regression)** — Three independent reports in one day; the terminal becomes unusable when MCP servers log to stderr. Fix is incoming (#2259), but the regression slipped through testing.
- **Free-tier broken out of the box** — Users who cannot even start a session (#2267) represent a critical funnel leak for new adoption.
- **Background task timeout inflexibility** — Kimi's overly optimistic timeout estimates kill long-running tasks mid-execution (#2232), requiring manual restarts. Users need configurable or dynamic timeout adjustment.
- **Windows compatibility gaps** — Blank `FileVersionInfo` (#2178) and bundled CLI installation failures (#2258) block Windows users from basic functionality and VS Code integration.
- **Memory & connection leaks** — Unbounded async queues and unreleased TCP connectors (#2236, #2231) cause gradual OOM and FD exhaustion in long sessions, especially for power users running parallel operations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-14

Here is the technical analysis for the OpenCode (`anomalyco/opencode`) repository based on the latest 24 hours of GitHub activity.

## 1. Today's Highlights

OpenCode shipped version **v1.14.49**, introducing a new v2 model/provider listing API, DigitalOcean OAuth support, and auto-generated configuration files with a full JSON schema. On the infrastructure front, a highly anticipated community Pull Request landed to implement dynamic model discovery for OpenRouter, aiming to resolve dozens of stale model-list issues. Community focus continues to be heavily divided between SSE streaming stability, context compaction bugs, and a highly requested official VS Code extension.

## 2. Releases

### **v1.14.49**
- **v2 Model & Provider API:** Introduced a new listing API for models and providers, setting the stage for better dynamic model fetching.
- **DigitalOcean Integration:** Added OAuth and Inference Router support (Contributor: @Spherrrical).
- **Configuration Defaults:** OpenCode now automatically creates a global `opencode.jsonc` with a linked full JSON schema (`customize-opencode`) if no config exists, significantly improving the first-time setup experience.
- **Misc:** Added autocomplete enhancements (note truncated in release notes).

## 3. Hot Issues

1. **[#6651] [FEATURE]: Dynamic model selection for subagents via Task tool** (👍 44)
   The top-voted issue of the day. The community strongly wants primary agents to dynamically assign specific models to subagents when invoking the Task tool, rather than relying on global defaults.
2. **[#11176] [FEATURE]: Official OpenCode VS Code extension** (👍 80)
   A massive community ask with 16 comments. Users want a native, first-party VS Code extension to replace current workarounds, bringing OpenCode directly into their primary IDE.
3. **[#26697] Bug: SSE /event stream closes immediately after server.connected** (👍 12)
   A critical bug affecting programmatic users. The event stream terminates right after the initial connection event, preventing clients from receiving subsequent message delta events.
4. **[#25879] What happened to the opencode-cli TUI?**
   Users are reporting that the TUI binary (`opencode-cli`) vanished from Debian packages between v1.14.30 and v1.14.39 without clear release notes, causing deployment confusion.
5. **[#26230] Double compaction for Copilot Opus 4.7**
   A regression where recent updates cause OpenCode to trigger context compaction twice consecutively when using Opus 4.7, sometimes causing token usage to unexpectedly spike from 100K to 200K+.
6. **[#25168] Jinja template error after compaction (LM Studio / Qwen3)**
   Context compaction is crashing consistently for local LM Studio users, throwing a "No user query found" jinja error on subsequent messages.
7. **[#25832] OpenCode cannot read images anymore**
   A regression appeared around late April where image inputs (`.png`, `.jpg`) are no longer parsed correctly, failing with a "Bad Request" error.
8. **[#27365] SSE stream boundary loss causing AI_JSONParseError**
   A deep-dive issue tracing JSON parse errors across multiple models back to a downstream `eventsource-parser` bug concatenating `data:` lines without proper `\n\n` boundaries.
9. **[#27315] "Input exceeds context window" in empty sessions**
   A severe recent regression where auto-compaction is triggered instantly upon launching a session in a completely empty directory.
10. **[#26846] OpenCode segfaults in NixOS+WSL**
    NixOS users are experiencing hard segmentation faults when attempting to run the binary via `nix run` inside Windows Subsystem for Linux.

## 4. Key PR Progress

1. **[#27382] feat(provider): implement dynamic model discovery for OpenRouter**
   A monumental community PR that drops the static `models.dev` dependency, allowing OpenCode to dynamically fetch available models directly from OpenRouter. Closes numerous model-list bugs (e.g., #15225).
2. **[#26949] [beta] perf(app): virtualize session timeline rows**
   Major performance improvement for the UI by upgrading the virtualizer (`virtua`) and flattening the rendering of user/assistant messages into row keys. Should drastically reduce DOM load for long sessions.
3. **[#27376] feat: Add Ask Mode**
   Introduces an "Ask Mode" (similar to GitHub Copilot/Codex) where the AI is strictly forbidden from making file edits or executing system tools, keeping it purely conversational.
4. **[#27386] fix(tui): refresh session messages after reconnect**
   Fixes a UI sync issue where the TUI rendered stale message caches after an event stream reconnect by forcing a REST sync.
5. **[#12822] fix(env): proxy directly to process.env instead of snapshotting**
   A long-standing fix that stops the `Env` service from snapshotting `process.env` at initialization, allowing environment variables to update dynamically during runtime.
6. **[#18767] feat(app): Mobile Touch Optimization**
   Improves the Desktop/Web app for mobile and touch interfaces without degrading the standard desktop experience.
7. **[#27389] fix(session): dedup file and agent parts in slash command merge**
   Fixes an annoying bug where using slash commands with `@file` attachments resulted in the file being processed twice in the prompt payload.
8. **[#23430] fix(app): make prompt submit and newline rebindable**
   Resolves a widespread frustration by allowing users to rebind Enter (submit) and Shift+Enter (newline) in the web prompt composer settings.
9. **[#27384] fix keymap fallback priority and TUI config diagnostics**
   Corrects the OpenTUI keymap dispatch logic so direct event matches take precedence over fallback matches, while also cleaning up local dev logging.
10. **[#27324] feat(server): add OIDC auth mode**
    Adds configurable server authentication modes (`disabled`, `basic`, `oidc`), enabling enterprise-grade OIDC protection for self-hosted OpenCode servers.

## 5. Feature Request Trends

- **Official VS Code / IDE Integration:** Users are heavily pushing for a first-party native extension for VS Code (#11176), moving beyond terminal-only workflows.
- **Granular Model Routing:** Strong demand for dynamic model selection, specifically allowing subagents to use different models than the primary agent (#6651), and better local model support routing (e.g., OpenRouter dynamic discovery).
- **Multi-Project & Workspace Support:** Developers are asking for parity with tools like Claude Code, specifically requesting persistent configuration for multiple working directories (`/add-dir` equivalent) (#16662).
- **Ask / Read-Only Mode:** A growing trend requesting safe, non-destructive chat modes where the LLM can analyze but not mutate the file system (#27376).

## 6. Developer Pain Points

- **Event Streaming (SSE) Instability:** A disproportionate number of bugs stem from the `/event` SSE stream. Whether it's immediate disconnections (#26697), boundary parsing errors (#27365), or stale UI states (#27380), headless and programmatic users are severely impacted.
- **Context Compaction Regressions:** Compaction logic is currently brittle. Users report double-compaction loops (#26230), compaction breaking Jinja templates for local providers (#25168), and compaction triggering nonsensically in empty contexts (#27315).
- **Silent Regressions in Core Features:** Several core functionalities have silently broken recently, most notably the inability to ingest images (#25832) and missing TUI binaries in Debian packages without documentation (#25879).
- **Keybinding Configuration Fragility:** The recent transition to a flat keybind format in the TUI has broken leader keys and standard inputs, frustrating heavy keyboard users (#27081, #26817).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-14

## 1. Today's Highlights
The Pi community experienced a surge of dependency hardening and supply-chain security efforts following the discovery of a compromised Mistral package (v2.2.4). Concurrently, a massive community-driven refactoring push led by core contributors eliminated numerous unnecessary dependencies, hardened proxy handling, and resolved several long-standing Terminal User Interface (TUI) rendering bugs. Extension APIs also saw iterative improvements, focusing on better subagent detection and inter-extension communication. 

## 2. Releases
No new official releases were published in the last 24 hours.

## 3. Hot Issues

1. **[Mistral package 2.2.4 compromised](https://github.com/earendil-works/pi/issues/4432)**: A critical supply-chain alert. Maintainers confirmed Pi uses `2.2.1` (which is safe) and immediately pushed PRs to strictly pin versions and harden `.npmrc`.
2. **[Official local LLM provider extension](https://github.com/earendil-works/pi/issues/3357)**: Highly upvoted (👍 23) request to dynamically fetch local model lists (`{baseUrl}/models`) for llama.cpp/Ollama/LM Studio. Continues to generate heavy community discussion.
3. **[Agent stuck "working" with no progress](https://github.com/earendil-works/pi/issues/4338)**: A critical usability blocker where the agent loops silently without making changes. Highlighted the need for better timeout handling and progress indicators.
4. **[Kimi k2.6 returns "reasoning_content is missing" error](https://github.com/earendil-works/pi/issues/4251)**: A compatibility breakdown when using specific models via OpenCode Go, triggered by strict API requirements for thinking/reasoning blocks.
5. **[Add "max" thinking level for Opus 4.7 API sync](https://github.com/earendil-works/pi/issues/3299)**: Requests adding a `max` rung to Pi's thinking ladder to support the newest tier of Claude Opus 4.7's reasoning capabilities.
6. **[Fake context window usage size](https://github.com/earendil-works/pi/issues/4477)**: Users noticed that local LLM servers report `0` tokens used, causing Pi's UI to display incorrect (fake) context percentages.
7. **[Extension API: Typed cross-extension service calls](https://github.com/earendil-works/pi/issues/4207)**: A popular architectural proposal to replace ad-hoc RPC over the untyped event bus with a lightweight, typed service registry.
8. **[Auto-compaction never triggers for local models](https://github.com/earendil-works/pi/issues/4497)**: A follow-up to the context window bug; because local models report `0` tokens, Pi's auto-compaction logic never fires, eventually crashing the session.
9. **[Brew formula does not pin Node version](https://github.com/earendil-works/pi/issues/4478)**: A packaging issue where an upstream Node.js DNS change broke Homebrew installs using sandbox environments.
10. **[Harmony response format corrupts tool calls](https://github.com/earendil-works/pi/issues/4439)**: Models using the Harmony format output unparsed tokens (e.g., `read<|channel|>commentary`), causing tool resolution failures.

## 4. Key PR Progress

1. **[Harden .npmrc and pin @mistralai/mistralai==2.2.1](https://github.com/earendil-works/pi/pull/4483)**: Direct response to the compromised Mistral package issue. Disables pre-install scripts and pins versions to prevent future supply chain attacks.
2. **[refactor(ai): Replace proxy agent dependencies](https://github.com/earendil-works/pi/pull/4470)**: A massive dependency purge by `mitsuhiko`. Vendors HTTP proxy resolution and removes heavy, unnecessary deps like `quickjs-emscripten`.
3. **[chore(deps): Kill small dependencies](https://github.com/earendil-works/pi/pull/4467)**: Vendors small utilities (like `strip-ansi` and `uuid`) to eliminate 17 lockfile entries, continuing the aggressive tree-shaking trend.
4. **[fix(compaction): Auto-compaction for local models](https://github.com/earendil-works/pi/pull/4496)**: Resolves the zero-usage local LLM bug by falling back to estimation logic when token usage data returns `0`.
5. **[Address edge-case with kitty protocol in wezterm](https://github.com/earendil-works/pi/pull/4482)**: Fixes a broken `Esc` key in WezTerm by correctly handling legacy meta-key sequences alongside kitty keyboard protocol sequences.
6. **[Fix(tui): Make markdown.ts robust to larger files](https://github.com/earendil-works/pi/pull/4463)**: Resolves a `Maximum call stack size exceeded` crash by refactoring how the spread operator handles arrays larger than the V8 limit (65,535).
7. **[fix(tui): Place image correctly when viewport height < image height](https://github.com/earendil-works/pi/pull/4461)**: Removes an error-prone cursor-up/down dance in the TUI, fixing image overflow in constrained terminal windows.
8. **[fix(ai): OpenAI Codex SSE - prefer retry-after](https://github.com/earendil-works/pi/pull/4486)**: Improves rate-limit handling by honoring `retry-after-ms` and `retry-after` headers from the OpenAI API instead of falling back to static timeouts.
9. **[fix(ai): Mark inception/mercury-2 thinkingLevelMap.off as null](https://github.com/earendil-works/pi/pull/4473)**: Prevents the OpenAI completions provider from erroneously sending `effort: "none"` to models that don't support the parameter.
10. **[Add Windows ARM64 Binary Output](https://github.com/earendil-works/pi/pull/4458)**: Upgrades the Bun version to 1.3.10 to enable native ARM64 builds for Windows users.

## 5. Feature Request Trends

- **Advanced Agentic Extensions:** Strong momentum toward building a robust extension API. Developers are requesting typed service registries, model filtering hooks, and ways to detect if a script is running in a "subagent" context to prevent duplicate hook executions.
- **Deep Local LLM Integration:** The community is pushing hard for feature parity between cloud and local models. Dynamic model fetching, correct context window estimation, and local-first compaction are highly requested.
- **Provider Interoperability:** Requests to support standard environment variables (`ANTHROPIC_BASE_URL`, `ANTHROPIC_AUTH_TOKEN`) and integrate new providers seamlessly (e.g., AirLLM, NVIDIA NIM attribution headers).

## 6. Developer Pain Points

- **Supply Chain Jitters:** The compromised `mistralai` package caused significant anxiety, highlighting the need for stricter dependency auditing and lockfile hygiene in the mono-repo.
- **Agent Loop Stalls:** Users remain frustrated by the agent silently looping or saying "working" without progress. The lack of automatic escape mechanisms for stuck interactive terminal commands (like GPG pinentry) exacerbates this.
- **Thinking-Level Model Mismatches:** As providers rapidly update their reasoning APIs (e.g., Opus 4.7, Kimi k2.6), Pi's hardcoded thinking ladders and reasoning block parsers frequently break, causing 400 errors mid-session.
- **TUI Quirks in Modern Terminals:** Visual bugs—such as active cursors on blurred windows, WezTerm ESC key failures, and image overflow in small viewports—continue to degrade the polished feel of the CLI.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-14

Here is the technical digest for the `QwenLM/qwen-code` project based on the latest GitHub activity.

## 1. Today's Highlights
The Qwen Code team released version **v0.15.11**, focusing on significant performance optimizations for session metadata handling. The core architecture is undergoing a major shift with new pull requests implementing the proposed "1 daemon = 1 workspace" model, while several community contributors submitted crucial patches addressing long-session memory management and telemetry hierarchical tracing.

## 2. Releases
- **[v0.15.11](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.11)**: The primary stable release for this cycle. It introduces core performance enhancements where session-list metadata reads are now bounded to the head/tail 64KB, utilizing buffer pooling and lazy message counting to reduce memory overhead.
- **v0.15.11-preview.2, v0.15.10-preview.1, v0.15.10-nightly**: Released alongside the stable version, containing the same performance patches and end-to-end test stabilization for early testing environments.

## 3. Hot Issues
1. **[Daemon Mode Proposal (#3803)](https://github.com/QwenLM/qwen-code/issues/3803)**: A massive 14-chapter design series proposing `qwen serve`. Stage 1 is currently merging, setting the foundation for background agent execution.
2. **[DashScope-intl Fetch Failures (#4035)](https://github.com/QwenLM/qwen-code/issues/4035)**: Users on the international DashScope endpoint are experiencing universal prompt failures due to an `undici` dispatcher incompatibility. It has garnered +2 reactions.
3. **[Automatic Task Stoppage (#3730)](https://github.com/QwenLM/qwen-code/issues/3730)**: A critical bug where the agent prematurely halts heavy, long-running tasks without user input, affecting workflows that previously ran flawlessly for over a week.
4. **[Context Window Bug (#4089)](https://github.com/QwenLM/qwen-code/issues/4089)**: The `/context detail` command incorrectly displays a 1,000,000 token window even when the model's generation config is explicitly set to 262K.
5. **[SessionStart Hook Injection Failure (#4111)](https://github.com/QwenLM/qwen-code/issues/4111)**: Internal Alibaba teams reported that `additionalContext` and `systemMessage` outputs from the `SessionStart` hook are failing to inject into the active context.
6. **[Tool Calls Returning Empty (#4076)](https://github.com/QwenLM/qwen-code/issues/4076)**: Users utilizing 3rd-party endpoints (SiliconFlow) report that tool calls are failing to return actual content, causing agent loops.
7. **[Compress Command Failure (#4098)](https://github.com/QwenLM/qwen-code/issues/4098)**: The `/compress` command (vital for freeing up context in long chats) is currently non-functional.
8. **[Tab Completion for Models (#4029)](https://github.com/QwenLM/qwen-code/issues/4029)**: A highly requested UX feature asking for `<TAB>` auto-completion for the `/model` command.
9. **[Command Substitution Security Inconsistencies (#4093)](https://github.com/QwenLM/qwen-code/issues/4093)**: The shell security check denying command substitution (`$()`, backticks) is applied opaquely and inconsistently, which could lead to sandbox bypasses.
10. **[High CPU Usage During Idle Waits (#4033)](https://github.com/QwenLM/qwen-code/issues/4033)**: Qwen Code consumes excessive CPU power while simply waiting for external processes (like dependency downloads) to complete.

## 4. Key PR Progress
1. **[Daemon Architecture Refactor (#4113)](https://github.com/QwenLM/qwen-code/pull/4113)**: Re-architecting the daemon mode to enforce a "1 daemon = 1 workspace" routing model, moving away from the previous multi-workspace setup.
2. **[Memory-Based Chat Compression (#4127)](https://github.com/QwenLM/qwen-code/pull/4127)**: Replaces the standard entry-count caps with memory-based compaction to prevent Node.js heap OOM (Out of Memory) errors during 80+ minute sessions.
3. **[Session-Scoped `/goal` Command (#4123)](https://github.com/QwenLM/qwen-code/pull/4123)**: Introduces a `/goal <condition>` command allowing users to set an objective that is continuously evaluated by an LLM judge to decide if the task requires further autonomous turns.
4. **[Progressive MCP Loading (#3994)](https://github.com/QwenLM/qwen-code/pull/3994)**: Significantly improves startup performance by allowing the CLI to accept user input before all MCP discovery handshakes complete, removing bottlenecks from slow MCP servers.
5. **[File Restoration for `/rewind` (#4064)](https://github.com/QwenLM/qwen-code/pull/4064)**: Upgrades the `/rewind` command to include a file-copy-based backup system, allowing users to roll back files modified by the assistant without manual `git checkout`.
6. **[Hierarchical Telemetry Tracing (#4126)](https://github.com/QwenLM/qwen-code/pull/4126)**: Fixes the trace tree so LLM and tool spans become properly nested children of the interaction span, replacing flat sibling traces.
7. **[Background Task Result Trimming (#4125)](https://github.com/QwenLM/qwen-code/pull/4125)**: Trims outdated terminal task results to a maximum of 32 entries, reducing UI clutter and memory footprint.
8. **[IDE Context Merging Fix (#3980)](https://github.com/QwenLM/qwen-code/pull/3980)**: Fixes API history pollution by prepending IDE context to the current user prompt instead of injecting it as a separate history entry.
9. **[Structured Output Documentation (#4051)](https://github.com/QwenLM/qwen-code/pull/4051)**: Adds comprehensive user and design documentation for the newly shipped `--json-schema` structured output CLI feature.
10. **[Media Stripping for Compaction (#4101)](https://github.com/QwenLM/qwen-code/pull/4101)**: Optimizes chat compaction by replacing heavy inline base64 data (images, PDFs) with lightweight `[image: <mime>]` placeholders before sending history to the summary model.

## 5. Feature Request Trends
- **Daemon & Headless Execution**: There is a massive push toward background processing, specifically requesting robust daemon modes (`qwen serve`) and better runaway protection/guardrails for headless non-interactive CI/CD environments.
- **Advanced Session Management**: Users want more control over their context limits and session lifespan. Requests include better `/compress` functionality, batch deletion of sessions, and `--quiet-restore` flags for cleaner terminal output.
- **Authentication & Provider Flexibility**: Simplifying the onboarding process for custom API keys, replacing complex OAuth flows with standard API key authentication (e.g., OpenRouter), and fixing international endpoint routing.

## 6. Developer Pain Points
- **Out-of-Memory (OOM) Crashes**: Developers are experiencing severe memory leaks and heap crashes during long interactive sessions. The current token-based compaction logic fails when large shell outputs or files are loaded.
- **Tool Call Reliability with 3rd-Party Endpoints**: Switching between different model providers (like SiliconFlow or international DashScope) frequently breaks tool calling capabilities or causes undici dispatcher errors, disrupting agentic workflows.
- **Premature Agent Termination**: A frustrating bug where the agent decides to stop long-running tasks automatically. This requires developers to manually babysit extensive codebases instead of allowing the agent to work autonomously.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-05-14

## 1. Today's Highlights
The DeepSeek TUI project saw rapid iteration with the release of **v0.8.34** and the immediate preparation of **v0.8.35** ([PR #1587](https://github.com/Hmbown/DeepSeek-TUI/pull/1587)). The community was highly active in reporting terminal rendering bugs—specifically severe screen flickering across Ubuntu CLI, Windows PowerShell, and macOS Ghostty. Meanwhile, a critical security alert ([Issue #1286](https://github.com/Hmbown/DeepSeek-TUI/issues/1286)) warning users about a malicious repository distributing malware gained significant traction.

## 2. Releases
- **v0.8.34** and **v0.8.33**: Released within the last 24 hours. The primary update focuses on distribution improvements, strongly recommending the `npm install -g deepseek-tui` wrapper which automatically downloads the correct binaries. Docker/GHCR support with API Key environment passing is also highlighted. 

## 3. Hot Issues
1. **[Security] Fake Repository Distributing Worm Virus** [#1286](https://github.com/Hmbown/DeepSeek-TUI/issues/1286) (👍 8)
   *Why it matters:* A malicious repo is impersonating DeepSeek-TUI and distributing malware via ZIP assets. Community members are actively reporting it to GitHub to protect users.
2. **[Bug] Screen flickering on Ubuntu CLI** [#1557](https://github.com/Hmbown/DeepSeek-TUI/issues/1557) & [#1515](https://github.com/Hmbown/DeepSeek-TUI/issues/1515)
   *Why it matters:* Severe UI flickering on Linux makes the tool almost unusable. Users note that `low_motion` settings fail to resolve the issue.
3. **[Bug] Screen flickering on macOS Ghostty** [#1556](https://github.com/Hmbown/DeepSeek-TUI/issues/1556) & **Windows PowerShell** [#1590](https://github.com/Hmbown/DeepSeek-TUI/issues/1590)
   *Why it matters:* Terminal rendering issues are cross-platform, pointing to fundamental conflicts with terminal rendering engines across different environments.
4. **[Enhancement] Forcing specific language for CoT "Thinking"** [#683](https://github.com/Hmbown/DeepSeek-TUI/issues/683) (14 comments) & [#1118](https://github.com/Hmbown/DeepSeek-TUI/issues/1118) (8 comments)
   *Why it matters:* The most discussed topic. Users are frustrated that despite configuring Chinese, the model's "thinking" traces remain in English, breaking user immersion and causing confusion.
5. **[Bug] Text not line-wrapping** [#1411](https://github.com/Hmbown/DeepSeek-TUI/issues/1411) (5 comments)
   *Why it matters:* When reading long context (like novel outlines), content bleeds off-screen without wrapping, making TUI output unreadable.
6. **[Bug] Checklist tool + LoopGuard infinite loop** [#1574](https://github.com/Hmbown/DeepSeek-TUI/issues/1574)
   *Why it matters:* A P0 bug where the agent gets stuck in an unrecoverable death spiral during tool execution, requiring manual process kills.
7. **[Bug] Terminal left in broken raw mode after Ctrl+C** [#1583](https://github.com/Hmbown/DeepSeek-TUI/issues/1583)
   *Why it matters:* Unhandled SIGINT leaves the user's shell in an unusable state, echoing raw ANSI escape codes after exiting the TUI.
8. **[Bug] Mouse scroll wheel only shows user input** [#1512](https://github.com/Hmbown/DeepSeek-TUI/issues/1512) & **Windows Scrolling** [#1106](https://github.com/Hmbown/DeepSeek-TUI/issues/1106)
   *Why it matters:* Scrolling context in the TUI is fundamentally broken for many users, preventing them from reading AI responses.
9. **[Enhancement] "Auto" model router latency overhead** [#1549](https://github.com/Hmbown/DeepSeek-TUI/issues/1549)
   *Why it matters:* The "auto" router adds a full network round-trip (up to 4s delay) *before* every message, severely hurting UX.
10. **[Bug] MCP session ID not supported** [#1488](https://github.com/Hmbown/DeepSeek-TUI/issues/1488)
   *Why it matters:* Missing `mcp-session-id` headers cause immediate request rejections from MCP servers.

## 4. Key PR Progress
1. **[Chore] Prepare v0.8.35** [#1587](https://github.com/Hmbown/DeepSeek-TUI/pull/1587): Public corrective release reducing first-turn context noise and clarifying compaction thresholds.
2. **[Fix] Restore terminal on SIGINT/SIGTERM** [#1586](https://github.com/Hmbown/DeepSeek-TUI/pull/1586): Fixes raw terminal pollution on exit by adding an async signal handler to pop terminal flags cleanly.
3. **[Fix] Windows PowerShell flicker** [#1591](https://github.com/Hmbown/DeepSeek-TUI/pull/1591): Auto-enables low-motion and synchronized output for legacy Windows console hosts.
4. **[Configurable theme colors] [#1589](https://github.com/Hmbown/DeepSeek-TUI/pull/1589)**: Replaces harsh default reasoning colors with gray-blue tones and exposes semantic `theme_colors` overrides.
5. **[MCP] Custom headers for HTTP MCP** [#1456](https://github.com/Hmbown/DeepSeek-TUI/pull/1456): Adds `headers` field to MCP config, allowing `Authorization` or `X-API-Key` to be passed. 
6. **[Security] File policy engine for tool harness** [#1585](https://github.com/Hmbown/DeepSeek-TUI/pull/1585): Implements a strict file access policy ported into serial and parallel tool execution.
7. **[Cache] Reduce prefix churn from tool catalog** [#1576](https://github.com/Hmbown/DeepSeek-TUI/pull/1576): Fixes prompt cache misses caused by the tool array dynamically growing during workflows.
8. **[Cache] Reduce tool-result replay tail** [#1581](https://github.com/Hmbown/DeepSeek-TUI/pull/1581): Stops replaying stale tool results to prevent prompt cache bloat.
9. **[Fix] Exclude binaries from snapshots** [#884](https://github.com/Hmbown/DeepSeek-TUI/pull/884): Fixes massive memory bloat that occurred when broad directories were accidentally snapshotted.
10. **[UX] Treat drag-and-dropped files as @-mentions** [#1580](https://github.com/Hmbown/DeepSeek-TUI/pull/1580): Resolves an issue where macOS drag-and-drop file paths triggered "Unknown command" errors.

## 5. Feature Request Trends
- **Thinking Chain Localization:** Users strongly desire the ability to force the DeepSeek V4 model's Chain-of-Thought (CoT) into their native language (e.g., Chinese) rather than English.
- **Theming & UI Polish:** A high volume of requests for custom color palettes, theme selection, and better default contrast (e.g., Issue #1579 "This color is really ugly").
- **Session Continuity in CLI:** Users want the ability to use `--resume` or `--session-id` in non-interactive mode (`exec`) for multi-turn scripting workflows (Issue #1530).
- **File/Multimodal Support:** Repeated requests to support ingesting `.docx`, image files, and more robust file context.

## 6. Developer Pain Points
- **Terminal Rendering & Compatibility:** The most prominent developer headache is TUI rendering across different terminals. Users report severe flickering on Ubuntu's xterm, macOS's Ghostty, and Windows PowerShell, as well as broken mouse scrolling and CJK text overflow.
- **Prompt Caching Costs:** Advanced users deploying the TUI at scale note that dynamic tool catalogs and un-trimmed tool results are breaking DeepSeek's prefix cache, resulting in unnecessary token spend and latency.
- **CLI Subcommand Confusion:** The current CLI argument parsing is fragmented (Issue #1570, #1575). Developers are accidentally passing sub-command flags as top-level arguments, prompting PRs to clean up the dispatcher architecture.

</details>