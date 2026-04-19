# AI CLI Tools Community Digest 2026-04-20

> Generated: 2026-04-19 22:05 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Cross-Tool Report — 2026-04-20

## 1. Ecosystem Overview
The AI CLI tools landscape is rapidly maturing from simple prompt-based assistants into complex, autonomous agentic systems. Industry leaders and open-source contenders are aggressively shipping features like multi-agent orchestration, persistent memory, and native IDE integrations. However, this breakneck pace of innovation is outstripping stability, resulting in widespread community friction around context management, resource leaks, and opaque usage limits. As these tools transition from novelty to production infrastructure, developers are increasingly prioritizing reliability, cross-platform parity, and deterministic rule compliance over raw model capabilities.

## 2. Activity Comparison
*(Data reflects activity and highlights from the 2026-04-20 community digests)*

| Tool | Issues Tracked (Hot) | PRs Highlighted | Release Status (Last 24h) |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 10 | No new releases |
| **OpenAI Codex** | 10 | 11 | 2 alpha releases (Rust core v0.122.0) |
| **Gemini CLI** | 10 | 10 | No new releases |
| **GitHub Copilot CLI** | 10 | 0 | No new releases; PR activity stalled |
| **Kimi Code CLI** | 9 | 3 | No new releases |
| **OpenCode** | 10 | 10 | 2 patch releases (v1.14.17, v1.14.18) |
| **Qwen Code** | 10 | 10 | 1 nightly release |

## 3. Shared Feature Directions
Analysis of community feedback and PRs reveals several unified requirements driving the next generation of AI CLIs:

*   **Robust Sub-Agent / Multi-Agent Orchestration:** The transition from single-threaded assistants to swarms is a dominant theme. **OpenAI Codex** is building "Goal Mode" with budget tracking, while both **Qwen Code** and **Kimi Code** are actively addressing sub-agent working-directory inheritance, context loading, and infinite-loop prevention.
*   **Context Window & Compaction Management:** As models handle larger codebases, developers are hitting severe compaction bugs. **Claude Code** users face a destructive auto-compaction loop at 200k tokens, **Qwen Code** UI freezes due to failed auto-compression, and **Kimi Code** is pushing PRs for configurable compaction providers to optimize costs.
*   **Advanced CLI Customization (Vim/Keymaps):** Power users demand IDE-like customization within the terminal. **OpenAI Codex** shipped configurable TUI keymaps and a Vim composer mode, while **OpenCode** users are highly requesting YOLO/auto-approve modes to bypass permission frictions.
*   **Enterprise Security & Admin Controls:** As CLIs enter corporate environments, granular control is required. **Qwen Code** introduced `slashCommands.disabled` for MDM/compliance, while **OpenAI Codex** is hardening Windows sandbox ACLs to prevent escape vectors.
*   **Reliability of MCP (Model Context Protocol):** External tool integrations via MCP remain highly unstable. **OpenAI Codex** is plagued by zombie MCP processes consuming gigabytes of RAM, **OpenCode** fixed MCP tools bypassing agent permissions, and **Gemini CLI** users are experiencing API-exhausting infinite loops via MCP tools.

## 4. Differentiation Analysis
*   **Claude Code** focuses heavily on system prompts and configuration compliance (e.g., `CLAUDE.md`), but currently struggles with model obedience. Its ecosystem is heavily skewed toward desktop/CLI parity, though Windows support currently lags.
*   **OpenAI Codex** is aggressively differentiating its technical architecture, transitioning to a Rust core and targeting deep workflow integration via TUI customization (Vim) and autonomous "Goal Mode." However, it suffers from critical infrastructure leaks.
*   **GitHub Copilot CLI** leverages its massive installed base but is currently bottlenecked by infrastructure—specifically HTTP/2 networking race conditions and rate-limiting telemetry bugs. It lags behind its own VS Code extension in model parity.
*   **Qwen Code & Kimi Code** are pushing the boundaries of decentralized and multi-model agentic systems (e.g., Agent Teams, hook rewriting), but face acute growing pains regarding OAuth stability and enterprise deployment friction.
*   **Gemini CLI & OpenCode** are focused heavily on core CLI/OS stability. Gemini is investing in AST-awareness to reduce token noise, while OpenCode is iterating rapidly on TUI rendering and memory leak resolutions to stabilize its open-source base.

## 5. Community Momentum & Maturity
*   **Rapid Iterators:** **OpenAI Codex** and **OpenCode** show the highest engineering momentum today. Codex is merging massive architectural PRs (Goal Mode, Rust rewrites), while OpenCode shipped rapid patch releases to address critical UX/storage failures.
*   **Vocal/High-Friction Communities:** **Claude Code** and **Qwen Code** have highly engaged communities currently reacting to acute platform issues (1,900+ upvotes on Claude's engineering bug; 100+ comments on Qwen's OAuth/free-tier changes). This indicates strong dependency on these tools, paired with current unmet stability needs.
*   **Stalled/Stabilizing:** **GitHub Copilot CLI** appears the quietest today, with zero PR activity and issues heavily centralized around backend rate-limiting and networking rather than frontend feature development.

## 6. Trend Signals
*   **Context Management is the New Bottleneck:** The industry is moving past the "context window size" marketing metric. The actual battleground is *context compaction efficiency*. Tools that silently lose instructions or loop during compaction (Claude, Qwen) will lose enterprise trust.
*   **The Rise of the Agentic CLI:** The CLI is no longer just a chat interface; it is becoming an orchestrator of sub-agents. The emergence of features like Codex's Goal Mode, Qwen's Agent Teams, and Kimi's hook rewrites signals that autonomous, multi-threaded terminal workflows are the defining trend of 2026.
*   **Accountability and Cost Transparency:** Across the board, developers are rejecting opaque quota systems. From Copilot's miscalculated rate limits to Claude's token consumption during loops, users are demanding strict separation of "platform error costs" and "user consumption," alongside programmatic access to capacity endpoints.
*   **MCP Requires Standardized Lifecycle Management:** The proliferation of MCP zombie processes and memory leaks highlights a critical gap in how CLI tools manage long-running child processes. Robust process reaping and isolation will be a necessary prerequisite for enterprise adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-20 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

Based on community engagement, comment activity, and functional impact, the following Pull Requests represent the most-watched Skills in the ecosystem:

| Rank | Skill | PR | Status | Author |
|------|-------|----|--------|--------|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟢 Open | PGTBoos |
| 2 | **skill-quality-analyzer & skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🟢 Open | eovidiu |
| 3 | **frontend-design (revised)** | [#210](https://github.com/anthropics/skills/pull/210) | 🟢 Open | justinwetch |
| 4 | **ODT (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | 🟢 Open | GitHubNewbie0 |
| 5 | **record-knowledge (persistent context)** | [#521](https://github.com/anthropics/skills/pull/521) | 🟢 Open | LevNas |
| 6 | **sensory (macOS AppleScript automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟢 Open | AdelElo13 |
| 7 | **masonry-generate-image-and-videos** | [#335](https://github.com/anthropics/skills/pull/335) | 🟢 Open | junaid1460 |
| 8 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟢 Open | 4444J99 |

### Functional Breakdown

- **#514 document-typography** — Addresses orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets a universally experienced but rarely requested quality gap. High utility for any document-generation workflow.

- **#83 skill-quality-analyzer / skill-security-analyzer** — Two meta-skills for the marketplace: one evaluates skill quality across five dimensions (structure, documentation, correctness, security, performance), the other performs security analysis. Positioned as essential tooling for skill authors.

- **#210 frontend-design (revision)** — Overhauls the existing frontend-design skill for clarity, actionability, and single-conversation executability. A quality-of-contribution improvement rather than a new capability.

- **#486 ODT skill** — Full OpenDocument support (`.odt`, `.ods`): creation, template filling, parsing to HTML, and format conversion. Fills a significant gap for open-source/ISO-standard document workflows.

- **#521 record-knowledge** — Persistent cross-session memory for Claude Code. Records tagged Markdown entries in `.claude/knowledge/entries/` so workarounds and insights survive session resets. Directly addresses one of the community's most cited pain points.

- **#806 sensory** — Native macOS automation via `osascript`/AppleScript with a two-tier permission model, offering a screenshot-free alternative to computer use for Mac-centric workflows.

- **#335 masonry** — AI-powered image (Imagen 3.0) and video (Veo 3.1) generation via the Masonry CLI, with job management and download workflows.

- **#723 testing-patterns** — Comprehensive testing skill covering the Testing Trophy model, unit/component/integration/E2E patterns, React Testing Library, and CI integration.

---

## 2. Community Demand Trends

Distilled from the top 15 most-commented Issues:

### 🔥 Trend 1: Skill Distribution & Sharing Infrastructure
- **Org-wide skill sharing** ([#228](https://github.com/anthropics/skills/issues/228), 9 comments, 👍5) — The #1 requested feature. Teams want a shared skill library or direct sharing links instead of manual `.skill` file distribution via Slack/Teams.
- **Skills-as-MCPs** ([#16](https://github.com/anthropics/skills/issues/16), 4 comments) — Converting skills into standardized MCP tool interfaces for API-level integration.
- **Security: namespace trust boundary** ([#492](https://github.com/anthropics/skills/issues/492), 4 comments, 👍2) — Community skills impersonating the `anthropic/` namespace, creating permission escalation risk.

### 🔥 Trend 2: Platform Reliability & Bug Fixes
- **Skill loading failures** ([#62](https://github.com/anthropics/skills/issues/62), 10 comments) — Skills disappearing after file renames or path changes.
- **Eval script never triggers skills** ([#556](https://github.com/anthropics/skills/issues/556), 6 comments, 👍6) — `run_eval.py` achieving 0% trigger rate; fundamental testing infrastructure is broken.
- **Duplicate skills from overlapping plugins** ([#189](https://github.com/anthropics/skills/issues/189), 5 comments, 👍7) — `document-skills` and `example-skills` installing identical content.
- **API 500 errors on delete/upload** ([#403](https://github.com/anthropics/skills/issues/403), [#406](https://github.com/anthropics/skills/issues/406)) — Skill lifecycle operations failing server-side.

### 🔥 Trend 3: Enterprise & Multi-Platform Compatibility
- **AWS Bedrock support** ([#29](https://github.com/anthropics/skills/issues/29), 4 comments) — Skills not working with Bedrock-hosted Claude.
- **Enterprise SSO compatibility** ([#532](https://github.com/anthropics/skills/issues/532), 2 comments) — `skill-creator` requires `ANTHROPIC_API_KEY`, blocking SSO/managed-license users.

### 🔥 Trend 4: Governance & Safety
- **Agent governance skill** ([#412](https://github.com/anthropics/skills/issues/412), 4 comments) — Policy enforcement, threat detection, trust scoring, and audit trails for AI agent systems.

### Anticipated Skill Directions
| Direction | Signal Strength | Example Issues/PRs |
|-----------|----------------|-------------------|
| Persistent memory / cross-session context | High | #521, #154 |
| Document format coverage (ODT, DOCX fixes) | High | #486, #541 |
| Meta-skills (quality/security analysis) | Medium-High | #83 |
| System automation (native OS control) | Medium | #806 |
| AI governance & safety | Medium | #412 |
| Testing infrastructure | Medium | #723, #556 |

---

## 3. High-Potential Pending Skills

These open PRs are actively maintained (updated within the last 30 days) and address validated community needs—likely candidates for near-term merging:

| PR | Skill | Updated | Merge Readiness |
|----|-------|---------|-----------------|
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change fix** (w:id collision) | 2026-04-16 | ⭐ High — Targeted bug fix with clear root cause |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML validation** | 2026-04-16 | ⭐ High — Prevents silent parse failures |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | 2026-04-16 | ⭐ High — 8 file reference fixes, trivial merge |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | 2026-04-14 | 🔶 Medium — Large new skill, needs thorough review |
| [#512](https://github.com/anthropics/skills/pull/512) | **PR template** | 2026-03-19 | ⭐ High — Companion to CONTRIBUTING.md |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | 2026-03-19 | ⭐ High — Addresses repo health (25% → improved) |
| [#374](https://github.com/anthropics/skills/pull/374) | **x402 BSV micropayments** | 2026-04-01 | 🔶 Medium — Niche but novel payment protocol skill |

**Author spotlight:** `Lubrsy706` authored three targeted, high-quality bug fixes (#541, #539, #538) all updated on 2026-04-16—these are the strongest near-term merge candidates.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable skill distribution infrastructure (org-wide sharing, namespace security, and deduplication) rather than individual skill features—platform trust and team workflows are the bottleneck, not skill content.**

---

# Claude Code Community Digest — 2026-04-20

## 1. Today's Highlights

No new releases shipped in the past 24 hours. Community activity continues to be dominated by Opus 4.7 model behavior concerns—including premature auto-compaction at ~200k tokens and recurring CLAUDE.md compliance failures—alongside a surge of desktop app parity requests (session resume, Cowork tab availability, and diff auto-focus settings). A notable number of `duplicate`-tagged bugs suggests the issue tracker is seeing heavy repeat traffic on known regressions.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [#42796 — Claude Code unusable for complex engineering tasks (Feb updates)](https://github.com/anthropics/claude-code/issues/42796) | **1,968 👍 · 535 comments.** Still the most-upvoted open issue. Users report the model fails to maintain coherent multi-file edits after February model changes. Community frustration remains high with no official resolution posted. |
| 2 | [#34197 — Claude Code continually ignores CLAUDE.MD file](https://github.com/anthropics/claude-code/issues/34197) | Persistent reports that the model skips or overrides project-level instructions, undermining trust in the configuration system. |
| 3 | [#50888 — Opus 4.7 auto-compaction at 200k tokens makes it unusable for long sessions](https://github.com/anthropics/claude-code/issues/50888) | Opus 4.7 is advertised as 1M context but auto-compacts at ~200k, then spends ~150k reconstructing context only to recompact—creating a destructive loop. Critical for power users on long refactoring sessions. |
| 4 | [#50905 — Agent violated explicit user rule 12+ times — no accountability mechanism](https://github.com/anthropics/claude-code/issues/50905) | Highlights a systemic trust issue: persistent memory rules (e.g., "always use feature branches") are repeatedly ignored with no enforcement or feedback loop. |
| 5 | [#38435 — Severe session limit reduction for Pro users (~3 simple prompts)](https://github.com/anthropics/claude-code/issues/38435) | Pro users report hitting 100% usage after just 3 prompts. Combined with #50917 (17% quota consumed in a single chat), cost transparency is a growing concern. |
| 6 | [#50897 — /rewind default option unsafe: rolls back code without confirmation](https://github.com/anthropics/claude-code/issues/50897) | The `/rewind` command defaults to "code and conversation," silently reverting file changes. A significant UX footgun that can cause data loss. |
| 7 | [#50895 — Cowork tab missing on Windows](https://github.com/anthropics/claude-code/issues/50895) | Windows users only see Chat and Code tabs; the new Cowork feature is absent, indicating a platform parity gap. |
| 8 | [#47478 — API Error 500 during active session](https://github.com/anthropics/claude-code/issues/47478) | Repeated HTTP 500 errors make sessions completely unresponsive. No workaround exists client-side; this is an infrastructure-level reliability issue. |
| 9 | [#50886 — EEXIST: mkdir error when .claude is symlinked to OneDrive folder (Windows)](https://github.com/anthropics/claude-code/issues/50886) | A reproducible conflict between Claude's session directory creation and OneDrive's sync behavior on Windows—common enterprise setup. |
| 10 | [#50903 — Channels feature regression (tengu_harbor evaluates false)](https://github.com/anthropics/claude-code/issues/50903) | A feature flag regression between versions 2.1.104 and 2.1.114 breaks the Channels feature for Personal Max subscribers, suggesting insufficient regression testing around rollouts. |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [#39043 — Remove "retro-futuristic" recommendation from Frontend Design Skill](https://github.com/anthropics/claude-code/pull/39043) | Community contributor (t3dotgg) proposes removing an unpopular aesthetic recommendation from the built-in frontend design skill. Still open after ~3 weeks. |
| 2 | [#50672 — docs(changelog): fix skill name in 2.1.111 entry](https://github.com/anthropics/claude-code/pull/50672) | One-character fix correcting `/less-permission-prompts` → `/fewer-permission-prompts` in the changelog. References Issue #50226. Clean docs-only PR. |
| 3 | [#50578 — Wrangler observability bootstrap](https://github.com/anthropics/claude-code/pull/50578) | Adds observability/bootstrap tooling. Details are sparse in the summary. |
| 4 | [#50595 — Fix duplicate imports and restore classes](https://github.com/anthropics/claude-code/pull/50595) | Code quality fix targeting duplicate import statements and missing class definitions. |
| 5 | [#50565 — Fix configuration again](https://github.com/anthropics/claude-code/pull/50565) | Iterative configuration fix from the GoodshytGroup contributor cluster. |
| 6 | [#47895 — Add Claude Mythos operating contract for Veriflow immune system](https://github.com/anthropics/claude-code/pull/47895) | Long-running external contribution adding an "operating contract" framework. Niche but persistent contributor. |
| 7–10 | [#50643](https://github.com/anthropics/claude-code/pull/50643), [#50638](https://github.com/anthropics/claude-code/pull/50638), [#50637](https://github.com/anthropics/claude-code/pull/50637), [#46095 (closed)](https://github.com/anthropics/claude-code/pull/46095) | A cluster of PRs from **GoodshytGroup** introducing project templates, CI workflows, and README image fixes. Appear to be from an external project ("Ethos Aegis") rather than core Claude Code changes. |

> **Note:** Most PRs this cycle are from external contributors with minimal core-team activity visible in the last 24 hours.

---

## 5. Feature Request Trends

Analyzing the issue landscape reveals four clear demand vectors:

1. **Desktop ↔ CLI Parity** — Multiple requests ([#50067](https://github.com/anthropics/claude-code/issues/50067), [#50891](https://github.com/anthropics/claude-code/issues/50891), [#43943](https://github.com/anthropics/claude-code/issues/43943)) ask for session resume, CLI session visibility in the desktop sidebar, and `/resume` support in the desktop app.

2. **IDE Diff/Tab Control** — Both VS Code ([#25018](https://github.com/anthropics/claude-code/issues/25018), 23 👍) and JetBrains ([#50899](https://github.com/anthropics/claude-code/issues/50899)) users want a setting to disable automatic diff tab opening when Claude edits files. Strong accessibility (a11y) angle.

3. **Conversation Export & Session Management** — [#39587](https://github.com/anthropics/claude-code/issues/39587) requests markdown/JSON export of conversations; [#50884](https://github.com/anthropics/claude-code/issues/50884) (5 👍) asks for the ability to remove stale Remote Control environments from the claude.ai/code environment list.

4. **API Capacity Transparency** — [#50913](https://github.com/anthropics/claude-code/issues/50913) proposes a public capacity-signal endpoint so automation users can schedule work during off-peak hours. Relevant given the recurring 500 errors.

---

## 6. Developer Pain Points

- **Model compliance is the #1 trust issue.** The two highest-engagement issues—[#42796](https://github.com/anthropics/claude-code/issues/42796) (1,968 👍) and [#34197](https://github.com/anthropics/claude-code/issues/34197)—both concern the model ignoring explicit instructions. [#50905](https://github.com/anthropics/claude-code/issues/50905) reinforces this: rules in persistent memory are violated repeatedly with no enforcement mechanism.

- **Opus 4.7 context window feels misleading.** Auto-compaction at 200k tokens ([#50888](https://github.com/anthropics/claude-code/issues/50888)) effectively makes the advertised 1M context unusable. The compaction→reconstruction→re-compaction loop wastes tokens and money.

- **Cost unpredictability.** Users on Pro plans are hitting quota limits after just a few prompts ([#38435](https://github.com/anthropics/claude-code/issues/38435)), and ultrareview timeouts consume credits without producing results ([#49905](https://github.com/anthropics/claude-code/issues/49905)). Token accounting opacity ([#50917](https://github.com/anthropics/claude-code/issues/50917)) compounds frustration.

- **Windows is a second-class citizen.** Missing Cowork tab ([#50895](https://github.com/anthropics/claude-code/issues/50895)), OneDrive symlink conflicts ([#50886](https://github.com/anthropics/claude-code/issues/50886)), and global instructions being erased in Cowork ([#50910](https://github.com/anthropics/claude-code/issues/50910)) suggest Windows testing coverage is insufficient.

- **Destructive operations lack guardrails.** `/rewind` silently reverting code changes ([#50897](https://github.com/anthropics/claude-code/issues/50897)) and undocumented image size limits causing mid-session failures ([#50890](https://github.com/anthropics/claude-code/issues/50890)) erode confidence in using Claude Code for production work.

- **Platform instability.** Recurring API 500 errors ([#47478](https://github.com/anthropics/claude-code/issues/47478)) and feature flag regressions across minor version bumps ([#50903](https://github.com/anthropics/claude-code/issues/50903)) suggest growing pains in release quality.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-04-20

## 1. Today's Highlights
OpenAI shipped two rapid-fire Rust core releases (**v0.122.0-alpha.11** and **v0.122.0-alpha.12**) alongside a massive internal feature push for "Goal Mode"—a 5-PR stack introducing persistent, autonomous agent goals with budget tracking and TUI integration. On the community front, MCP (Model Context Protocol) process leaks remain the top operational pain point, while new contributions bring configurable TUI keymaps, a Vim composer mode, and responsive markdown tables to the CLI.

## 2. Releases

| Release | Version | Summary |
|---------|---------|---------|
| `rust-v0.122.0-alpha.12` | 0.122.0-alpha.12 | Latest alpha; details pending full notes. |
| `rust-v0.122.0-alpha.11` | 0.122.0-alpha.11 | Preceding alpha; rapid iteration cycle continues. |

## 3. Hot Issues

1. **[#14936](https://github.com/openai/codex/issues/14936) — bwrap approval prompt on almost every command (49 comments, 20 👍)**  
   A regression in the Linux sandbox (`bwrap`) causes Codex to show an approval prompt for nearly every command. Widely impacting Linux users; still open after a month.

2. **[#8648](https://github.com/openai/codex/issues/8648) — Codex replies to earlier messages instead of latest (45 comments, 37 👍)**  
   In multi-turn conversations, the agent sometimes targets an older message. A fundamental context-handling bug that erodes trust in long sessions.

3. **[#9544](https://github.com/openai/codex/issues/9544) — "stream disconnected before completion" during remote compact (30 comments, 9 👍)**  
   Long-running compact tasks fail mid-stream. Closed, but still receiving community updates, suggesting ongoing edge cases.

4. **[#16088](https://github.com/openai/codex/issues/16088) — Empty `.codex` file left behind in projects (21 comments, 58 👍)**  
   Starting a thread without an existing `.codex` config leaves an empty file artifact. High 👍 count signals strong community annoyance; regression tag applied.

5. **[#8758](https://github.com/openai/codex/issues/8758) — Image generation from Codex (20 comments, 50 👍)**  
   Feature request for native image/visual asset generation. Closed, but the 50 👍 indicate significant demand for multimodal output.

6. **[#6395](https://github.com/openai/codex/issues/6395) — "Don't ask again" permission flag ignored (20 comments)**  
   Codex continues prompting even after the user approves with persistence. Directly affects developer flow state.

7. **[#12491](https://github.com/openai/codex/issues/12491) — 1300+ MCP zombie processes, 37 GB memory leak (13 comments)**  
   The Codex Desktop GUI fails to reap MCP child processes. Extreme resource exhaustion reported on macOS.

8. **[#18333](https://github.com/openai/codex/issues/18333) — Full MCP stacks restarted per session/subagent (12 comments)**  
   A newer regression where Codex Desktop spawns complete MCP server stacks for every new session or subagent, compounding the leak problem from #12491.

9. **[#17832](https://github.com/openai/codex/issues/17832) — Playwright MCP leak persists after prior fix (7 comments)**  
   Despite fix #16895, Playwright MCP stdio processes still orphan—213 pairs consuming 13.6 GB RSS. Indicates the MCP lifecycle problem is systemic.

10. **[#18194](https://github.com/openai/codex/issues/18194) — Review errors consume the 5-hour rate limit (6 comments)**  
    Failed code reviews still count against the usage cap. Directly penalizes users for infrastructure errors.

## 4. Key PR Progress

| PR | Author | Description |
|----|--------|-------------|
| **[#18593](https://github.com/openai/codex/pull/18593)** | fcoury-oai | **Configurable TUI keymaps** — Replaces hardcoded keyboard shortcuts with a centralized, user-configurable keymap system. Foundation for editor-style customization. |
| **[#18595](https://github.com/openai/codex/pull/18595)** | fcoury-oai | **Vim composer mode** — Adds normal/operator Vim bindings, a `/vim` slash command, and frozen preset snapshots. Built on the keymap infrastructure from #18593. |
| **[#18594](https://github.com/openai/codex/pull/18594)** | fcoury-oai | **Keymap slash command (`/keymap`)** — Provides a guided TUI wizard for discovering and editing keybindings without manual TOML editing. |
| **[#18073–#18077](https://github.com/openai/codex/pull/18073)** | etraut-openai | **Goal Mode (5-PR stack)** — Introduces persisted agent goals with token budgets, app-server APIs, model tools (`get_goal`, `set_goal`, `update_goal`), autonomous continuation, and a `/goal` TUI command with statusline indicators. A landmark feature for long-running autonomous workflows. |
| **[#18597](https://github.com/openai/codex/pull/18597)** | guinness-oai | **Realtime handoff transcript sharing** — Passes full realtime conversation transcript deltas to the Codex agent on delegation, improving context continuity between realtime voice and coding modes. |
| **[#18393](https://github.com/openai/codex/pull/18393)** | dylan-hurd-oai | **Auto-review for `request_permissions`** — Extends the auto-review system to handle permission request tools, reducing manual approval friction. |
| **[#18576](https://github.com/openai/codex/pull/18576)** | fcoury-oai | **Responsive markdown tables** — Terminal-width-aware boxed table rendering with streaming support for agent output. |
| **[#18575](https://github.com/openai/codex/pull/18575)** | fcoury-oai | **Terminal resize backlog reflow** — Fixes stale line wrapping in TUI history when the terminal window is resized. |
| **[#18443](https://github.com/openai/codex/pull/18443)** + **[#18493](https://github.com/openai/codex/pull/18493)** | efrazer-oai | **Windows sandbox ACL hardening** — Stops granting broad ACLs on `USERPROFILE` and filters SSH config dependency roots, closing a significant sandbox escape surface. |
| **[#18502](https://github.com/openai/codex/pull/18502)** | acrognale-oai | **Multi-cwd thread filtering** — Allows `thread/list` to accept multiple working-directory filters with an opt-in SQLite fast path. |

## 5. Feature Request Trends

- **Command queuing for all slash commands** — Multiple issues ([#14588](https://github.com/openai/codex/issues/14588), [#13779](https://github.com/openai/codex/issues/13779), [#14286](https://github.com/openai/codex/issues/14286), [#14081](https://github.com/openai/codex/issues/14081)) request the ability to queue `/compact`, `/review`, and `/fast` while the agent is busy. Currently only text input can be queued via Tab.
- **Notification for approval events** — [#3247](https://github.com/openai/codex/issues/3247) (33 👍) asks for notify triggers when Codex pauses for user approval, not just on completion.
- **Configurable worktree location** — [#10599](https://github.com/openai/codex/issues/10599) (32 👍) requests control over where Codex creates Git worktrees in the desktop app.
- **Multimodal / visual asset generation** — [#8758](https://github.com/openai/codex/issues/8758) (50 👍) reflects demand for image generation within coding workflows.
- **Hierarchical multi-agent systems** — [#18557](https://github.com/openai/codex/issues/18557) proposes a sidebar-driven multi-agent orchestration UI.
- **Side questions without context pollution** — [#18125](https://github.com/openai/codex/issues/18125) proposes a `/btw` command for transient questions that don't affect the main session context.
- **Disable automatic app updates** — [#18546](https://github.com/openai/codex/issues/18546) requests an opt-out toggle for auto-updates in Codex Desktop.

## 6. Developer Pain Points

- **MCP process lifecycle is critically broken.** Three separate issues ([#12491](https://github.com/openai/codex/issues/12491), [#18333](https://github.com/openai/codex/issues/18333), [#17832](https://github.com/openai/codex/issues/17832)) document zombie processes, multi-GB memory leaks, and redundant stack spawning. This is the single most impactful operational defect for Desktop users.
- **Sandbox permission regressions erode trust.** [#14936](https://github.com/openai/codex/issues/14936) and [#6395](https://github.com/openai/codex/issues/6395) show that persistent approval settings are broken or ignored, forcing constant re-approval and breaking flow.
- **Rate limits penalize users for platform errors.** [#18194](https://github.com/openai/codex/issues/18194) and [#17950](https://github.com/openai/codex/issues/17950) highlight that failed reviews and capacity errors consume limited usage budgets.
- **Context stability in long conversations.** [#8648](https://github.com/openai/codex/issues/8648) (replying to wrong messages) and [#14063](https://github.com/openai/codex/issues/14063) / [#9544](https://github.com/openai/codex/issues/9544) (stream disconnections during compact) make extended sessions unreliable.
- **Windows support gaps persist.** [#17444](https://github.com/openai/codex/issues/17444) (MCP boot failures), [#7777](https://github.com/openai/codex/issues/7777) (PowerShell language mode), and the sandbox ACL PRs indicate Windows remains a second-class platform.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## 1. Today's Highlights
No new official releases were published today, but the community and maintainers remain highly active. Several critical bugs were addressed, including fixes for CLI restart loops, broken extension scaffolding, and environment variable hangs during local development. Maintainers also continue their deep architectural focus on Agent behaviors, AST-awareness, and memory management. 

## 2. Releases
*Omitted — no new releases published in the last 24 hours.*

## 3. Hot Issues
1. **Copy Mode Prompt Inaccessibility** ([#25532](https://github.com/google-gemini/gemini-cli/issues/25532)): Users report that `Ctrl+S` copies outputs but scrolling back to the prompt kicks them out of Copy Mode. A high-friction UX bug with 9 active comments.
2. **AST-Aware Codebase Mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)): A maintainer epic assessing Abstract Syntax Tree (AST) tools to reduce token noise and misaligned file reads. Crucial for upcoming agent precision improvements.
3. **Repetitive Permission Prompts** ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)): The CLI repeatedly asks for file execution permissions despite being granted "allow for all future sessions," interrupting agent workflows.
4. **Shell Command "Waiting Input" Hangs** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)): After executing simple CLI commands, Gemini sometimes gets stuck displaying "Awaiting user input" even after the process finishes.
5. **Temp Script Littering** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)): When restricted to shell execution, the agent creates temporary edit scripts in random directories, polluting the workspace.
6. **SequentialThinking MCP Infinite Loops** ([#25671](https://github.com/google-gemini/gemini-cli/issues/25671)): A newly reported critical bug where the agent loops redundant thoughts until API quotas are exhausted.
7. **EISDIR Crash on Temporary Paths** ([#25216](https://github.com/google-gemini/gemini-cli/issues/25216)): Running the CLI in `--yolo` mode on Windows crashes with an `EISDIR` error when encountering certain directory paths.
8. **Memory Routing Architecture** ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819)): A workstream tracking the implementation of global vs. project-scoped memory routing for the memory subagent.
9. **Agent Destructive Behavior** ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)): An initiative to prevent the model from using dangerous commands (e.g., `git reset --force`) when safer alternatives exist.
10. **SSH Session Text Scrambling** ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)): Users running the CLI over SSH on Windows report heavily scrambled terminal output, rendering the tool unusable.

## 4. Key PR Progress
1. **Prevent IDE Trust Restart Loop** ([#25163](https://github.com/google-gemini/gemini-cli/pull/25163)): Fixes an infinite restart loop that occurs when workspace trust settings mismatch between the user's IDE and local CLI config.
2. **Add `/restart` Slash Command** ([#25657](https://github.com/google-gemini/gemini-cli/pull/25657)): Introduces a command to gracefully restart the CLI process and automatically resume the current chat session.
3. **Fix Extension Build Templates** ([#25653](https://github.com/google-gemini/gemini-cli/pull/25653)): Resolves a build packaging error where running `gemini extensions new` failed due to missing example templates in the published package.
4. **Silently Skip Directory GEMINI.md** ([#25662](https://github.com/google-gemini/gemini-cli/pull/25662)): Prevents CLI crashes by silently ignoring directories named `GEMINI.md` instead of throwing an `EISDIR` read error.
5. **Fix Duplicate Agent Initialization** ([#25670](https://github.com/google-gemini/gemini-cli/pull/25670)): Removes a redundant `loadAgents` call triggered during `/agents reload` to improve performance.
6. **Preserve Extension Rollback State** ([#25654](https://github.com/google-gemini/gemini-cli/pull/25654)): Fixes extension updates to properly preserve the installed version for rollback and ensures startup profiling completes even if command loading fails.
7. **Strip `CI_*` Env Vars in Dev Mode** ([#25649](https://github.com/google-gemini/gemini-cli/pull/25649)): Resolves a local development hang where `ink` detected CI environment variables and forced the CLI into non-interactive mode.
8. **Add Hostname to Footer** ([#25663](https://github.com/google-gemini/gemini-cli/pull/25663)): Adds the current system hostname to the bottom status bar, helping users distinguish between multiple CLI sessions running across different SSH hosts or containers.
9. **Correct API Key Validation Logic** ([#25453](https://github.com/google-gemini/gemini-cli/pull/25453)): Fixes contradictory logic in `handleApiKeySubmit` that previously allowed invalid API keys to bypass validation.
10. **Guarantee Credential Cleanup** ([#25485](https://github.com/google-gemini/gemini-cli/pull/25485)): Prevents orphaned test credentials from being left in the user's OS keychain if the keychain validation process is interrupted.

## 5. Feature Request Trends
*   **Agent Workflow & Memory Improvements:** A strong ongoing push for persistent, scoped memory (global vs. project-level) and agents that proactively save user preferences. 
*   **AST-Aware Capabilities:** High demand/interest from maintainers to integrate AST-aware file searching and code mapping to reduce wasted token context.
*   **Enhanced Terminal UI / UX:** Requests for better handling of long chats, multi-indent dependency trees, and fixes for streaming table rendering in screen readers.
*   **Slash Command Aliases:** Community desire for more intuitive CLI commands (e.g., using `/delete` instead of `/uninstall` for extensions).

## 6. Developer Pain Points
*   **Environment and Terminal Instability:** Windows users and SSH users continue to face disproportionate UI and path-resolving friction (text scrambling, `EISDIR` crashes).
*   **Agent Autonomy Failures:** Developers are frustrated by workflow interruptions, notably the agent getting stuck awaiting input, ignoring permission allow-lists, or creating messy temporary files.
*   **Infinite Loops & Resource Exhaustion:** MCP tool integration bugs (like `sequentialthinking`) causing infinite loops represent a critical pain point for users managing API quotas.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-04-20

## 1. Today's Highlights

No new releases or pull requests were published today, but the community remains highly active on the issue tracker. **Rate limiting problems dominate the conversation**, with multiple reports of incorrect usage displays, endless prompts, and rate limits aborting subagents, making this the most critical area requiring attention. Additionally, there is growing demand for **UI/UX improvements around session management and theming**, alongside ongoing troubleshooting for networking edge cases (HTTP/2 GOAWAY race conditions).

## 2. Releases

No new releases or pull requests were published in the last 24 hours. The latest public version remains **v1.0.32**.

## 3. Hot Issues

1. **[#1703] [area:models] Copilot CLI does not list all org-enabled models (e.g., Gemini 3.1 Pro)** — 23 comments, 👍 34
   A long-standing parity issue where the CLI model picker omits organization-enabled models that appear correctly in VS Code. This is a top-voted issue and indicates a significant gap in enterprise feature parity. [View Issue](https://github.com/github/copilot-cli/issues/1703)

2. **[#2725] [area:models] GPT-5.4 /model picker hides Extra High effort level** — 22 comments, 👍 17
   The model picker UI for GPT-5.4 only displays Low/Medium/High, despite `xhigh` functioning at runtime. This UI/runtime inconsistency misleads users about model capabilities. [View Issue](https://github.com/github/copilot-cli/issues/2725)

3. **[#2336] [area:models] Strange rate limit message** — 17 comments, 👍 6
   Users receive confusing rate-limit errors during moderate tasks, with unclear messaging about limits and reset times. Community discussion points to systemic issues in how rate limits are surfaced. [View Issue](https://github.com/github/copilot-cli/issues/2336)

4. **[#2421] [area:networking] HTTP/2 GOAYAWAY race condition causing cascading retry failures** — 6 comments, 👍 16
   A well-documented consolidation issue covering the CLI's `undici` HTTP/2 connection pool mishandling GOAWAY frames, resulting in wasted premium requests. Highly technical and well-regarded by the community. [View Issue](https://github.com/github/copilot-cli/issues/2421)

5. **[#2840] [area:agents] Rate limit aborts subagents** — 2 comments, 👍 1
   When rate-limited on the auto model, spawned subagents emit "rate limited" and fail, forcing the main agent to retry, significantly degrading autonomous workflows. [View Issue](https://github.com/github/copilot-cli/issues/2840)

6. **[#2839] [area:models] Rate limit display is completely off** — 2 comments, 👍 1
   Two simultaneous CLI windows show 0% and 33% usage, while GitHub settings show 60.6% used. Highlights a fundamental synchronization issue in usage tracking. [View Issue](https://github.com/github/copilot-cli/issues/2839)

7. **[#2843] [area:models] ACP mode: session/set\_model rejects "auto" but rate-limit error suggests switching to it** — Closed, 1 comment
   A UX contradiction in ACP mode: rate-limit messages advise switching to "auto," but the `session/set_model` API rejects the "auto" value. A clear actionability gap. [View Issue](https://github.com/github/copilot-cli/issues/2843)

8. **[#2818] [area:sessions] Session token expired. Please resend your message.** — 1 comment, 👍 4
   Long-running autopilot tasks are aborted when session tokens expire unexpectedly. Particularly frustrating for users relying on unattended background execution. [View Issue](https://github.com/github/copilot-cli/issues/2818)

9. **[#2078] [triage] Add /btw command** — 6 comments, 👍 26
   A highly upvoted feature request to add a `/btw` command (common in other CLIs) for contextual follow-up prompts. Strong community demand. [View Issue](https://github.com/github/copilot-cli/issues/2078)

10. **[#2833] [area:agents] Plan approval in autopilot+fleet mode triggers execution with fleet dispatch ordering mismatch** — 0 comments
    A race condition bug where approving a plan simultaneously triggers both execution and fleet dispatch, causing ordering conflicts in multi-agent workflows. Critical for fleet/autopilot users. [View Issue](https://github.com/github/copilot-cli/issues/2833)

## 4. Key PR Progress

No pull requests were created or updated in the last 24 hours. There is currently no public PR activity to report. Given the volume and severity of open issues (especially around rate limiting and model parity), the community is anticipating targeted fixes in upcoming releases.

## 5. Feature Request Trends

- **Rate Limit Transparency & UX**: Multiple issues ([#2827](https://github.com/github/copilot-cli/issues/2827), [#2828](https://github.com/github/copilot-cli/issues/2828), [#2797](https://github.com/github/copilot-cli/issues/2797)) request better visibility into rate limit status, including inline usage indicators, clearer reset messaging, and accurate percentage tracking across sessions.

- **Session Management Enhancements**: Requests for session summaries in the picker ([#2330](https://github.com/github/copilot-cli/issues/2330)), behavioral posture/mode separation ([#2837](https://github.com/github/copilot-cli/issues/2837)), and cleanup of orphaned session-state folders ([#2836](https://github.com/github/copilot-cli/issues/2836)) indicate a maturing user base wanting better session lifecycle control.

- **Customization & Extensibility**: Custom color themes ([#2830](https://github.com/github/copilot-cli/issues/2830)), custom search paths for skills/agents ([#2829](https://github.com/github/copilot-cli/issues/2829)), easier MCP toggling ([#2805](https://github.com/github/copilot-cli/issues/2805)), and experimental feature flag controls ([#2820](https://github.com/github/copilot-cli/issues/2820)) all reflect a desire for greater personalization.

- **Agent Telemetry & Events**: A request for dedicated events on agent switches ([#2838](https://github.com/github/copilot-cli/issues/2838)) signals growing demand for observability hooks in agentic workflows.

## 6. Developer Pain Points

- **Rate limiting is the #1 pain point**: From incorrect displays ([#2839](https://github.com/github/copilot-cli/issues/2839), [#2797](https://github.com/github/copilot-cli/issues/2797)) and endless prompts ([#2787](https://github.com/github/copilot-cli/issues/2787)) to aggressive retry loops ([#2760](https://github.com/github/copilot-cli/issues/2760)) and subagent failures ([#2840](https://github.com/github/copilot-cli/issues/2840)), rate limiting is broken across multiple dimensions. Paid Pro+ users are particularly frustrated ([#2742](https://github.com/github/copilot-cli/issues/2742), [#2769](https://github.com/github/copilot-cli/issues/2769)).

- **Model parity with VS Code**: The CLI consistently lags behind VS Code Copilot in model availability and configuration ([#1703](https://github.com/github/copilot-cli/issues/1703)), undermining trust for users who work across both tools.

- **Networking reliability**: HTTP/2 connection handling remains fragile, with GOAWAY race conditions ([#2421](https://github.com/github/copilot-cli/issues/2421)) silently wasting premium requests during retries.

- **Session reliability for unattended workflows**: Token expiration mid-task ([#2818](https://github.com/github/copilot-cli/issues/2818)) and orphaned session scaffolds ([#2836](https://github.com/github/copilot-cli/issues/2836)) break long-running autonomous and fleet-mode workflows, eroding confidence in autopilot modes.

- **Platform-specific input issues**: Mouse scroll not working in SSH terminals like MobaXterm/PuTTY ([#2841](https://github.com/github/copilot-cli/issues/2841)) and missing slash command handling on Android ([#2842](https://github.com/github/copilot-cli/issues/2842)) affect remote and mobile developers.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI Community Digest — 2026-04-20

---

### 1. Today's Highlights

No new releases were cut today, but the community remains highly active around **subagent architecture and working-directory inheritance**, which dominated both issues and PRs. Three notable pull requests—covering subagent `work_dir` overrides, hook-based command rewriting, and configurable compaction providers—saw renewed review activity. The ecosystem discussion is also broadening, with new feature requests targeting voice input, web UI push notifications, and IDE integration improvements.

---

### 2. Releases

No new releases in the last 24 hours.

---

### 3. Hot Issues

1. **[#1931 — Subagent does not inherit parent's CWD](https://github.com/MoonshotAI/kimi-cli/issues/1931)**
   A breaking issue for git worktree + subagent workflows: when a parent agent `cd`s into a subdirectory and dispatches a subagent, the child still operates from the root directory. A companion PR (#1933) is already open. Community traction is strong with active discussion.

2. **[#1936 — Shell tool ignores overridden `work_dir` in subagents](https://github.com/MoonshotAI/kimi-cli/issues/1936)**
   A follow-up to #1931, identifying that even after the `work_dir` fix lands, the `Shell` tool still reads `session.work_dir` instead of the per-subagent override, and `AGENTS.md` context is not loaded from the new directory. Critical for the subagent architecture to be fully consistent.

3. **[#1927 — Subagent infinite loop reading the same file](https://github.com/MoonshotAI/kimi-cli/issues/1927)**
   Users report subagents getting stuck in infinite loops—re-reading the same file hundreds of times. This is a severe reliability blocker for agentic workflows and likely tied to context/compaction behavior.

4. **[#1903 — LLM provider error 400](https://github.com/MoonshotAI/kimi-cli/issues/1903)**
   A persistent `400` error from the `kimi-for-coding` model on macOS (v1.34.0) with 6 comments. Affects core inference availability and remains unresolved.

5. **[#1939 — ACP protocol command parsing issue](https://github.com/MoonshotAI/kimi-cli/issues/1939)**
   When invoked via `acpx`, the `command` field is expected to be `command + args` but Kimi sends it differently, breaking ACP protocol compatibility for external tool orchestration.

6. **[#1940 — Auth failure count in VSCode/Cursor](https://github.com/MoonshotAI/kimi-cli/issues/1940)**
   Users hitting authentication/count failures when running Kimi Code inside VSCode and Cursor (marketplace extension v0.5.3). Important for the IDE integration story.

7. **[#1873 — Installation without admin rights on Windows](https://github.com/MoonshotAI/kimi-cli/issues/1873)**
   Enterprise users on locked-down Windows machines report newer versions requiring admin privileges that previously didn't. Affects enterprise adoption significantly.

8. **[#1938 — Push notifications for Kimi-CLI-Web](https://github.com/MoonshotAI/kimi-cli/issues/1938)**
   Request for web push notifications when long-running web tasks complete, plus terminal notifications on macOS. Reflects growing use of Kimi-CLI-Web for mobile-driven remote workflows.

9. **[#1934 — Voice input mode for Terminal and Web UI](https://github.com/MoonshotAI/kimi-cli/issues/1934)**
   Feature request to add voice input (à la Claude Code) for hands-free brainstorming and long prompts. Shows community appetite for multi-modal interaction.

---

### 4. Key PR Progress

1. **[PR #1933 — `feat(subagents): add work_dir override for subagent dispatch`](https://github.com/MoonshotAI/kimi-cli/pull/1933)**
   Adds an optional `work_dir` parameter to the `Agent` tool so subagents operate in the correct directory. Directly fixes #1931. Under active review.

2. **[PR #1935 — `feat(hooks): support updatedInput for transparent command rewriting`](https://github.com/MoonshotAI/kimi-cli/pull/1935)**
   A focused 34-line addition enabling `hookSpecificOutput.updatedInput` in the `PreToolUse` hook lifecycle, allowing hooks to transparently rewrite commands before execution. Aligns with the existing Beta hooks documentation.

3. **[PR #1549 — `feat(plugin): add configurable compaction providers`](https://github.com/MoonshotAI/kimi-cli/pull/1549)**
   Introduces `loop_control.compaction_model` to decouple context compaction from the active chat model, allowing users to route compaction to a cheaper/different model. Significant for long-session cost optimization. Open since March; still under review.

---

### 5. Feature Request Trends

| Theme | Description | Signals |
|---|---|---|
| **Subagent isolation & composability** | Full working-directory inheritance, per-subagent context loading, and correct Shell execution paths | #1931, #1936, PR #1933 |
| **Multi-modal & hands-free interaction** | Voice input for terminal and web UI | #1934 |
| **Remote & mobile workflow support** | Push notifications for web UI task completion, terminal notifications | #1938 |
| **Enterprise deployability** | Admin-free Windows installation, better proxy/auth handling in corporate environments | #1873, #1940 |
| **Protocol & hook extensibility** | ACP protocol compliance, hook-based command rewriting for custom tool pipelines | #1939, PR #1935 |
| **Cost & context management** | Configurable compaction models to reduce token spend on long sessions | PR #1549 |

---

### 6. Developer Pain Points

- **Subagent reliability is the top concern.** Infinite loops (#1927), broken CWD inheritance (#1931), and inconsistent tool behavior (#1936) make multi-agent workflows fragile. This is the most critical cluster for the core team to address.

- **IDE integration friction.** Authentication failures in VSCode and Cursor (#1940) undermine the "use it everywhere" promise. The marketplace extension appears to be out of sync with CLI auth flows.

- **Enterprise environments are underserved.** The regression requiring admin rights on Windows (#1873) blocks adoption in large corporate deployments, and proxy/auth edge cases remain unresolved.

- **Observability gap in long-running tasks.** Users running Kimi-CLI-Web remotely have no way to know when tasks finish (#1938), making the web UI less practical for real workflows.

- **Model provider errors remain ambiguous.** The 400 error (#1903) lacks clear diagnostics, and users are left unsure whether the issue is quota, payload, or service-side—better error messages would significantly reduce support burden.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-04-20

## 1. Today's Highlights

OpenCode shipped two rapid-fire patch releases (v1.14.17 and v1.14.18), headlined by the restoration of the native ripgrep backend to fix unreliable file search and listing. The community is buzzing over the confusing version jump from 1.4.x to 1.14.x, while the long-running memory megathread continues to dominate issue discussion with 60 comments and counting.

## 2. Releases

- **[v1.14.18](https://github.com/anomalyco/opencode/releases/tag/v1.14.18)** — Restored the native ripgrep backend for reliable file search/listing. Community contributor @ariane-emory added documentation for the `--dangerously-skip-permissions` CLI flag.
- **[v1.14.17](https://github.com/anomalyco/opencode/releases/tag/v1.14.17)** — Fixed executable permission loss during Docker builds, reduced unnecessary plugin reinstalls, defaulted to `display: summarized` for Anthropic Bedrock Opus 4.7 requests, and improved attachment type detection from file contents (images/PDFs).

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|---------------|
| 1 | [**#20695** — Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) *(60 comments, 36 👍)* | Central hub for all memory/leak investigations. Maintainers are explicitly requesting heap snapshots rather than LLM-generated suggestions, signaling this is a deep architectural problem. |
| 2 | [**#23419** — Version jump 1.4.x→1.14.x?](https://github.com/anomalyco/opencode/issues/23419) *(5 comments, 10 👍)* | Users are confused and concerned about the aggressive, seemingly erratic versioning scheme and frequent buggy releases. Reflects broader trust concerns. |
| 3 | [**#8501** — Expand pasted text preview](https://github.com/anomalyco/opencode/issues/8501) *(17 comments, 141 👍)* | Highest upvote count in the digest. Users love paste summarization but desperately need to inspect/edit pasted content after the fact. |
| 4 | [**#22444** — Azure OpenAI models broken](https://github.com/anomalyco/opencode/issues/22444) *(10 comments, 4 👍)* | All Azure OpenAI models (GPT-5.3-Codex, GPT-5.2-Codex, GPT-5.4 Mini) fail after the latest update — a blocking regression for enterprise users. |
| 5 | [**#22630** — Blank window on macOS 26.4 Tahoe](https://github.com/anomalyco/opencode/issues/22630) *(10 comments)* | OpenCode Desktop is completely unresponsive on Apple's latest macOS Tahoe beta. Platform compatibility issue that will grow as adoption increases. |
| 6 | [**#23211** — v1.4.7+ breaks TUI rendering and loses config](https://github.com/anomalyco/opencode/issues/23211) *(7 comments)* | Severe regression where newer versions fail to render the UI and lose all configured models/login state. Users are pinned to v1.4.6. |
| 7 | [**#23045** — MCP tools bypass agent permission filtering](https://github.com/anomalyco/opencode/issues/23045) *(7 comments, CLOSED)* | Security-relevant: MCP tools ignore agent-level permission deny rules. Root cause identified in `prompt.ts`. Community submitted a targeted fix. |
| 8 | [**#11532** — AGENTS.md not loaded after /new](https://github.com/anomalyco/opencode/issues/11532) *(16 comments, 10 👍)* | Running `/new` clears context but doesn't reload `AGENTS.md`, breaking expected workflow for project-specific agent instructions. |
| 9 | [**#22408** — Kimi K2.6 integration request](https://github.com/anomalyco/opencode/issues/22408) *(8 comments, 17 👍)* | Community demand for adding the latest Kimi K2.6 model, reflecting the fast-moving model landscape OpenCode must keep pace with. |
| 10 | [**#11831** — YOLO Mode: auto-approve all permissions](https://github.com/anomalyco/opencode/issues/11831) *(3 comments, 20 👍)* | Power users want a way to skip all permission prompts while respecting explicit deny rules. High upvote signal for a trust-based workflow mode. |

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| 1 | [**#23188** — Stabilize TUI theme persistence & KV writes](https://github.com/anomalyco/opencode/pull/23188) | Fixes theme detection, persistence logic, and serializes `kv.json` writes with cross-process locking to prevent corruption. |
| 2 | [**#23335** — Remove model ID blocklist from reasoning variants](https://github.com/anomalyco/opencode/pull/23335) | Replaces hardcoded model name blocklist with a cleaner approach in `transform.ts`, fixing overly aggressive filtering of reasoning models. |
| 3 | [**#12050** — Align plugin tool types with built-in capabilities](https://github.com/anomalyco/opencode/pull/12050) | Long-running contributor PR exposing `ToolContext` fields (callID, extra) to plugin tools, closing the capability gap between plugins and native tools. |
| 4 | [**#23447** — Terminal notifications via OSC escape sequences](https://github.com/anomalyco/opencode/pull/23447) | Replaces macOS osascript notifications with terminal-native OSC sequences, fixing the "Script Editor" alert issue and enabling cross-platform desktop notifications. |
| 5 | [**#14307** — Fix prompt loop using parentID matching](https://github.com/anomalyco/opencode/pull/14307) | Replaces fragile ID ordering with parentID-based matching for message rendering and prompt loop exit, fixing incorrect message ordering in complex conversations. |
| 6 | [**#17401** — Handle PDFs in tool results for Amazon Bedrock](https://github.com/anomalyco/opencode/pull/17401) | Works around `@ai-sdk/amazon-bedrock`'s lack of non-image media support by converting PDF tool results into a compatible format. |
| 7 | [**#6370** — Enable primary clipboard for Wayland/X11](https://github.com/anomalyco/opencode/pull/6370) | Adds `clipboard.linux.enablePrimaryCopy` config option to fix Linux middle-click paste by populating both regular and primary selections. |
| 8 | [**#23439** — Fix --continue hang with no prior sessions](https://github.com/anomalyco/opencode/pull/23439) | `opencode -c` hung indefinitely in directories with no prior sessions. This PR handles the empty session case gracefully. |
| 9 | [**#18443** — Retry transient 429 responses regardless of provider flag](https://github.com/anomalyco/opencode/pull/18443) | Fixes retry classification gap where OpenCode trusted the provider's `isRetryable` flag instead of independently evaluating HTTP 429 status. |
| 10 | [**#21722** — Improve UX and design](https://github.com/anomalyco/opencode/pull/21722) | Large design overhaul PR addressing the perception that OpenCode's UI lags behind competitors. Visual and interaction improvements across the board. |

## 5. Feature Request Trends

- **Workflow automation & trust modes:** "YOLO mode" for auto-approving permissions ([#11831](https://github.com/anomalyco/opencode/issues/11831)), sound notifications on completion ([#23184](https://github.com/anomalyco/opencode/issues/23184)), and Shift+Enter for multi-line input ([#16226](https://github.com/anomalyco/opencode/issues/16226)) all reflect power users wanting less friction and more autonomous operation.
- **Multi-model and new provider support:** Requests for Kimi K2.6 ([#22408](https://github.com/anomalyco/opencode/issues/22408)), agent-teams/multi-agent orchestration ([#15035](https://github.com/anomalyco/opencode/issues/15035)), and continued LM Studio compatibility fixes indicate the community is rapidly adopting diverse model backends.
- **TUI paste and editing experience:** Expandable pasted text ([#8501](https://github.com/anomalyco/opencode/issues/8501), 141 👍) is the single most-upvoted feature request, alongside broader complaints about streaming display bugs and input handling.

## 6. Developer Pain Points

- **Release quality and versioning confusion:** The jump from 1.4.x to 1.14.x ([#23419](https://github.com/anomalyco/opencode/issues/23419)) combined with multiple breaking regressions (TUI rendering failure in [#23211](https://github.com/anomalyco/opencode/issues/23211), blank macOS window in [#22630](https://github.com/anomalyco/opencode/issues/22630), Azure OpenAI breakage in [#22444](https://github.com/anomalyco/opencode/issues/22444)) is eroding confidence in the release cadence.
- **Memory and stability:** The memory megathread ([#20695](https://github.com/anomalyco/opencode/issues/20695), 60 comments) remains unresolved, and sub-agent aborts causing full workflow hangs ([#23415](https://github.com/anomalyco/opencode/issues/23415)) suggest architectural fragility in the agent orchestration layer.
- **Plugin and tooling gaps:** Plugin tools can't return image attachments ([#21383](https://github.com/anomalyco/opencode/issues/21383)), custom commands aren't discoverable ([#18987](https://github.com/anomalyco/opencode/issues/18987)), and `file://` plugin identity is broken ([#16200](https://github.com/anomalyco/opencode/pull/16200)) — indicating the plugin ecosystem needs foundational investment.
- **Cross-platform inconsistencies:** Windows ARM64 TUI failures ([#19130](https://github.com/anomalyco/opencode/issues/19130)), WSL image paste issues ([#19502](https://github.com/anomalyco/opencode/issues/19502)), and Nix build breaks from missing dev dependencies ([#23256](https://github.com/anomalyco/opencode/issues/23256)) show that non-macOS platforms remain second-class citizens.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-04-20

## 1. Today's Highlights
The most critical event today is a widespread authentication outage, with numerous users reporting `401 invalid access token or token expired` errors across both the CLI and VSCode extension. This coincides with a highly controversial proposal to drastically reduce and phase out the Qwen OAuth free tier ([#3203](https://github.com/QwenLM/qwen-code/issues/3203)), which has garnered over 100 comments. On the engineering front, the `v0.14.5-nightly.20260419` release shipped major improvements to ACP hooks and compact mode UX, while contributors continue pushing hard on next-generation features like Agent Teams, `--bare` startup mode, and crucial VSCode parity updates.

## 2. Releases
**[v0.14.5-nightly.20260419.a623655c8](https://github.com/QwenLM/qwen-code/releases/tag/v0.14.5-nightly.20260419.a623655c8)**
* **ACP Hooks:** Added complete hooks support for ACP integration ([PR #3248](https://github.com/QwenLM/qwen-code/pull/3248)).
* **UX & Safety:** Optimized compact mode with better shortcuts, settings sync, and safety mechanisms ([PR #3100](https://github.com/QwenLM/qwen-code/pull/3100)).

## 3. Hot Issues
1. **[OPEN] [Qwen OAuth Free Tier Policy Adjustment](https://github.com/QwenLM/qwen-code/issues/3203)**: A proposal to slash the daily free quota from 1,000 to 100 requests and phase out the free tier completely. Community reaction is intense (102 comments), heavily impacting hobbyists and open-source contributors.
2. **[OPEN] [Recurrent problem - 401 invalid access token](https://github.com/QwenLM/qwen-code/issues/3425)**: Users report successful logins immediately followed by 401 errors. This systemic auth failure is currently the highest-upvoted bug of the day (👍 2).
3. **[OPEN] [Context window fails to auto-compress, causing freezes](https://github.com/QwenLM/qwen-code/issues/3447)**: During long sessions, the context window fills up but doesn't trigger auto-compression, leading to severe task slowdowns and UI stuttering.
4. **[OPEN] [Interrupting Agent Chain-of-Thought](https://github.com/QwenLM/qwen-code/issues/2786)**: When the agent is processing a thought chain, urgent user interventions are queued rather than executing immediately, preventing users from correcting wayward agents in real-time.
5. **[OPEN] [Support disabling slash commands via settings](https://github.com/QwenLM/qwen-code/issues/3444)**: A request for `slashCommands.disabled` to lock down the CLI surface for enterprise and multi-tenant deployments.
6. **[OPEN] [VS Code Extension: Support all auth methods](https://github.com/QwenLM/qwen-code/issues/2134)**: Users are frustrated that the VSCode extension relies solely on OAuth (which is currently broken/phasing out), while the CLI offers API keys and Coding Plans.
7. **[CLOSED] [OAuth session persists after switching to API key](https://github.com/QwenLM/qwen-code/issues/1855)**: A tricky bug where switching auth methods leaves stale session tokens, resulting in 401 errors. 
8. **[OPEN] [MiniMax-2.7 context compression error](https://github.com/QwenLM/qwen-code/issues/3282)**: Token counting errors prevent chat history compression for specific third-party models, corrupting the session.
9. **[OPEN] [VSCode hooks not triggering](https://github.com/QwenLM/qwen-code/issues/3205)**: Users note that hooks configured for the CLI do not fire in the VSCode IDE companion.
10. **[OPEN] [400 Invalid 'messages' payload with local Qwen 3.6](https://github.com/QwenLM/qwen-code/issues/3437)**: Image analysis prompts cause structural payload errors when routed through local/custom model endpoints.

## 4. Key PR Progress
1. **[feat(vscode): replace OAuth with Coding Plan / API Key provider](https://github.com/QwenLM/qwen-code/pull/3398)**: A critical fix replacing the failing OAuth flow in VSCode with native QuickPick setups for API Keys and Coding Plans.
2. **[feat(cli): add bare startup mode](https://github.com/QwenLM/qwen-code/pull/3448)**: Introduces `--bare` mode for CI/CD, skipping implicit hooks, LSPs, and memory discovery for clean, scripted executions.
3. **[feat(cli): add slashCommands.disabled setting](https://github.com/QwenLM/qwen-code/pull/3445)**: Implements administrative controls to disable specific slash commands, addressing enterprise compliance needs raised in [#3444](https://github.com/QwenLM/qwen-code/issues/3444).
4. **[feat: add Agent Team experimental feature](https://github.com/QwenLM/qwen-code/pull/2886)**: Brings dynamic parallel sub-agent coordination to Qwen Code, moving it closer to agentic swarm architectures.
5. **[fix(core): normalize Windows PATH for MCP stdio servers](https://github.com/QwenLM/qwen-code/pull/3451)**: Resolves a cross-platform bug where GUI-hosted environments passed conflicting `PATH` values to MCP servers.
6. **[feat(core): replace fdir crawler with git ls-files + ripgrep](https://github.com/QwenLM/qwen-code/pull/3214)**: Major performance optimization for the `@` file mention autocomplete, preventing full-directory rescans on every keystroke.
7. **[fix(core): parse MiniMax think tags in OpenAI responses](https://github.com/QwenLM/qwen-code/pull/3411)**: Fixes a parsing bug where third-party model thinking tags leaked into visible assistant text.
8. **[feat(core): PDF text extraction fallback and Jupyter parsing](https://github.com/QwenLM/qwen-code/pull/3160)**: Expands file comprehension capabilities for text-only base models (like deepseek/qwen3-coder).
9. **[feat(arena): add comparison summary for agent results](https://github.com/QwenLM/qwen-code/pull/3394)**: Enhances the Arena mode by generating an automatic summary comparing outputs from different competing agents.
10. **[feat(core): support QWEN_HOME env var](https://github.com/QwenLM/qwen-code/pull/2953)**: Allows users to move the `~/.qwen` configuration directory, highly requested for external drive setups.

## 5. Feature Request Trends
* **Authentication Decoupling & Parity:** There is a massive community push to decouple the IDE from Qwen's proprietary OAuth, demanding CLI parity for Coding Plans, Standard API Keys, and Custom Endpoints inside the VSCode Companion.
* **Enterprise Administration Controls:** Increased requests for environment variables and MDM hooks to restrict features (e.g., disabling slash commands, custom config directories) for multi-tenant and sandbox deployments.
* **Advanced Agentic Orchestration:** Strong demand for parallel processing features, specifically "Agent Swarm/Team" architectures that allow users to interrupt thought chains and dispatch multiple workers simultaneously.
* **Context Management Upgrades:** Users want more robust, transparent, and aggressive context window compression, especially when operating with third-party models or handling large codebases.

## 6. Developer Pain Points
* **OAuth Instability:** The authentication system is currently the single biggest pain point. The proliferation of 401 errors makes the tool completely unusable for many, compounded by the anxiety of the free tier suddenly dropping from 1,000 to 100 daily requests.
* **VSCode Extension Limitations:** The IDE companion often feels like a second-class citizen compared to the CLI, lacking support for hooks, multiple auth methods, and Plan Mode toggling.
* **Long-Running Session Degradation:** Without reliable auto-compression or memory management, long coding sessions inevitably degrade, freeze, or require manual session restarts to restore performance.
* **Third-Party Model Fragility:** Integrating non-Qwen models (like MiniMax or local Qwen 3.6) frequently breaks fundamental features like token counting, context compression, and message payload formatting.

</details>