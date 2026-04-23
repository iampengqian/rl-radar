# AI CLI Tools Community Digest 2026-03-29

> Generated: 2026-03-28 22:03 UTC | Tools covered: 7

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
**Date:** 2026-03-29

## 1. Ecosystem Overview

The AI CLI tooling ecosystem is maturing rapidly, shifting from novelty to production-critical infrastructure. All major players are aggressively pursuing **agentic architectures** with subagent orchestration, hook systems for extensibility, and persistent memory mechanisms. However, this acceleration is exposing growing pains: **rate limiting opacity**, **session data integrity issues**, and **platform-specific bugs** (particularly Windows/WSL) are dominant themes across virtually every project. Security vulnerabilities in permission systems and credential handling are also emerging as critical concerns as these tools gain deeper system access.

---

## 2. Activity Comparison

| Tool | Issues Active | PRs Active | Releases | Top Issue Theme |
|------|---------------|------------|----------|-----------------|
| **Claude Code** | 10+ | 10+ | None | Rate limiting & session data loss |
| **OpenAI Codex** | 10+ | 10+ | 2 (alpha) | Token burning & platform parity |
| **Gemini CLI** | 10+ | 10+ | 2 (patch) | Rate limits & SDD workflow |
| **Copilot CLI** | 10+ | 0 | None | Autopilot loops & scrolling bugs |
| **Kimi Code** | 10+ | 7 | None | Platform compatibility & proxy protocols |
| **OpenCode** | 10+ | 10+ | None | Claude Max outage & extensibility |
| **Qwen Code** | 10+ | 5 | None | Windows bugs & subagent parity |

**Notable Release Activity:** OpenAI Codex shipped two rapid-fire Rust alpha releases (v0.118.0-alpha.2/3), and Gemini CLI issued two patch releases for stability.

---

## 3. Shared Feature Directions

| Direction | Tools Involved | Specific Requirements |
|-----------|----------------|----------------------|
| **Hook/Plugin Systems** | Claude Code, Codex, OpenCode, Gemini | `PreToolUse`/`PostToolUse` hooks for governance, StatusLine APIs, plugin event buses |
| **Subagent Orchestration** | Claude Code, Codex, OpenCode, Qwen | Dynamic model assignment, reliable `@mention` invocation, DAG-based task tracking |
| **Session & Memory Persistence** | Claude Code, Gemini, OpenCode, Qwen | Context survival across resume, memory routing (global vs. project), session aliases |
| **Rate Limiting Transparency** | Claude Code, Codex, Gemini | Programmatic access to usage data, visibility into token consumption |
| **Remote/Container Development** | Codex, Copilot, Claude Code | SSH support, devcontainer integration, WSL consistency |
| **AST-Aware Code Analysis** | Gemini, Claude Code | Precision file reads by method bounds to reduce token waste and hallucinations |
| **Third-Party Proxy Support** | Kimi, Qwen, OpenCode | Compatibility with "One API" gateways, OpenAI-compatible endpoints, custom base URLs |

---

## 4. Differentiation Analysis

| Tool | Strategic Focus | Target User | Technical Approach |
|------|-----------------|-------------|-------------------|
| **Claude Code** | Enterprise security, plugin ecosystem | Professional developers, teams | Hook system depth, devcontainer networking, agent wallet for autonomous payments |
| **OpenAI Codex** | Performance, desktop app | VS Code users, macOS/Windows | Rust rewrite (alpha), aggressive modularization (`codex-tools` extraction), Bazel build system |
| **Gemini CLI** | Spec-Driven Development (SDD) | Methodical planners, teams | DAG-based task tracking, persistent tracker storage, AST integration research |
| **Copilot CLI** | GitHub integration, enterprise | Enterprise GitHub users | OpenTelemetry observability, org-token permissions, SEA binary distribution |
| **Kimi Code** | Multi-model support, Chinese market | Cost-conscious developers, proxy users | One API compatibility, GLM integration, reasoning content protocol handling |
| **OpenCode** | Extensibility, provider agnostic | Power users, tinkerers | Effect pattern architecture, Nix builds, mobile touch optimization, plugin TUI integration |
| **Qwen Code** | Integration channels, automation | Bot builders, Chinese platforms | Channels platform (Telegram/WeChat/DingTalk), in-session cron scheduling, math rendering |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Assessment |
|------|-------|------------|
| **High Momentum** | Claude Code, OpenAI Codex | Large engaged communities, frequent issues (100+ comments on top issues), active PR pipelines. Claude Code's 88-comment rate limit issue and Codex's 315-comment token burning issue indicate strong enterprise adoption. |
| **Rapid Iteration** | Gemini CLI, OpenCode | Gemini's SDD/DAG work and OpenCode's Effect pattern refactor show architectural investment. Both have 10+ active PRs with substantial feature work. |
| **Stabilizing** | Copilot CLI, Kimi Code, Qwen Code | Fewer PRs active, more focus on bug fixes and compatibility. Copilot CLI had zero PR updates today. Qwen and Kimi are addressing platform gaps (Windows, proxy protocols). |

**Maturity Signals:**
- **Most Mature:** Claude Code, Codex — addressing enterprise concerns (cost, security, governance)
- **Growing Pains:** Gemini, OpenCode — architectural refactors suggest scaling for future complexity
- **Niche/Regional:** Kimi, Qwen — strong in Chinese market, working on cross-platform parity

---

## 6. Trend Signals

### 🚨 Critical Industry-Wide Issues

1. **Rate Limiting Crisis** — Three tools (Claude Code, Codex, Gemini CLI) have top-voted issues around opaque rate limiting. Users cannot predict or monitor consumption, causing enterprise budget concerns. **Implication:** Backend metering APIs and real-time usage dashboards are urgently needed.

2. **Session Data Loss** — Claude Code's compaction race condition destroying transcripts and resume silently dropping context is a trust-killer. **Implication:** Long-running agentic workflows require ACID-grade session persistence.

3. **Security Gaps** — Command injection via glob patterns (Claude Code) and auto-edit bypassing approvals (Qwen) reveal that permission systems are not yet battle-hardened. **Implication:** Enterprise security audits will be a major blocker for adoption.

### 📈 Emerging Patterns

4. **Subagent Architecture is Standardizing** — All major tools now support or are building subagent systems. The differentiator is moving from "can it do subagents?" to "can it reliably orchestrate, monitor, and delegate to them?"

5. **Hook Systems as Platform Play** — Pre/Post tool hooks are becoming the primary extensibility mechanism, suggesting these CLIs are evolving into platforms rather than tools.

6. **AST Awareness** — Gemini's investigation into AST-aware file reads signals the next frontier in token efficiency: reading only relevant code sections rather than entire files.

### 💡 Recommendations for Developers

| Priority | Action |
|----------|--------|
| **Immediate** | Implement defensive session backup strategies; don't trust auto-persistence |
| **Short-term** | Build monitoring for token/rate consumption outside the tool (API-level) |
| **Strategic** | Invest in hook-based customization for governance; choose tools with mature plugin APIs |
| **Risk Mitigation** | Audit permission configurations; test glob patterns and shell command boundaries |

---

*Report generated from 7 AI CLI tool community digests dated 2026-03-29*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Source:** github.com/anthropics/skills (2026-03-29)

---

## 1. Top Skills Ranking

The following Skills PRs represent the most-watched community contributions, sorted by engagement and functional impact:

| Rank | Skill | Author | Status | Focus |
|------|-------|--------|--------|-------|
| 1 | **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** | PGTBoos | 🟢 OPEN | Document Quality |
| 2 | **[#83 skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | eovdidu | 🟢 OPEN | Meta-Skills |
| 3 | **[#210 frontend-design](https://github.com/anthropics/skills/pull/210)** | justinwetch | 🟢 OPEN | UI/UX |
| 4 | **[#486 ODT (OpenDocument)](https://github.com/anthropics/skills/pull/486)** | GitHubNewbie0 | 🟢 OPEN | Document Format |
| 5 | **[#509 CONTRIBUTING.md](https://github.com/anthropics/skills/pull/509)** | narenkatakam | 🟢 OPEN | Repo Infrastructure |
| 6 | **[#95 System Documentation & Flowcharts](https://github.com/anthropics/skills/pull/95)** | TylerALofall | 🟢 OPEN | Documentation |
| 7 | **[#181 SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** | amitlals | 🟢 OPEN | Enterprise Analytics |
| 8 | **[#288 8-Skill Foundation Series](https://github.com/anthropics/skills/pull/288)** | Eaprime1 | 🟢 OPEN | Multi-Skill Bundle |

### Skill Descriptions & Discussion Highlights

**#514 document-typography** — Addresses a universal pain point: typographic defects in AI-generated documents (orphan lines, widow paragraphs, numbering misalignment). High community interest because it affects "every document Claude generates" and users rarely explicitly request good typography.

**#83 Meta-Skills Suite** — Proposes two marketplace skills: `skill-quality-analyzer` (5-dimension quality scoring) and `skill-security-analyzer`. Represents a "meta" trend of using Claude to improve Claude Skills themselves.

**#210 frontend-design** — Major revision to improve actionability and clarity. Discussion focuses on making instructions executable within a single conversation while avoiding over-specification.

**#486 ODT Support** — Adds comprehensive OpenDocument format capabilities (ISO/IEC 26300), enabling Claude to work with LibreOffice/OpenOffice ecosystems. Strong enterprise relevance.

**#509 & #512 Repo Infrastructure** — Contributor experience improvements addressing the repo's 25% community health score. Companion PR for PR templates ([#512](https://github.com/anthropics/skills/pull/512)).

**#288 Foundation Series** — Bundle submission including `tutorial-builder`, `quiz-generator`, `a11y-auditor`, `changelog-curator`, `data-storytelling`, and 3 others. Represents the largest single content expansion.

---

## 2. Community Demand Trends

Analysis of Issues reveals these anticipated Skill directions:

| Trend | Related Issues | Community Signal |
|-------|----------------|------------------|
| **Workflow Automation** | [#228](https://github.com/anthropics/skills/issues/228) (org-wide sharing), [#299](https://github.com/anthropics/skills/pull/299) (Google Workspace) | High demand for cross-platform automation and team collaboration |
| **Security & Governance** | [#492](https://github.com/anthropics/skills/issues/492), [#412](https://github.com/anthropics/skills/issues/412) | Trust boundary concerns, agent governance patterns, audit trails |
| **Enterprise Integration** | [#29](https://github.com/anthropics/skills/issues/29) (Bedrock), [#406](https://github.com/anthropics/skills/issues/406), [#532](https://github.com/anthropics/skills/issues/532) (SSO/API issues) | AWS Bedrock support, enterprise authentication compatibility |
| **MCP (Model Context Protocol)** | [#16](https://github.com/anthropics/skills/issues/16) | Exposing Skills as MCPs for standardized API interfaces |
| **Skill Quality Tooling** | [#202](https://github.com/anthropics/skills/issues/202) | Updating `skill-creator` to best practices, reducing verbosity |
| **Persistent Memory** | [#154](https://github.com/anthropics/skills/pull/154) (`shodh-memory`) | Context retention across conversations |

**Key Insight:** Security/trust issues (namespace impersonation, API failures) are generating urgent community concern alongside feature requests.

---

## 3. High-Potential Pending Skills

Active PRs with strong functional merit likely to merge soon:

| PR | Skill | Why High-Potential |
|----|-------|-------------------|
| **[#536 roadmap-pilot](https://github.com/anthropics/skills/pull/536)** | Incremental codebase cleanup autopilot | Solves context overflow on large refactoring; one-task-per-session design |
| **[#535 avoid-ai-writing v3.1.0](https://github.com/anthropics/skills/pull/535)** | AI writing pattern removal | 34 pattern categories, tiered vocabulary—addresses growing anti-AI-detection need |
| **[#281 faf-context](https://github.com/anthropics/skills/pull/281)** | Project context generation | "Missing link between package.json and README"—instant project understanding for AI |
| **[#299 Google Workspace Suite](https://github.com/anthropics/skills/pull/299)** | 6 personal assistant skills | Email triage, calendar, tasks via GOG CLI—practical productivity automation |
| **[#147 codebase-inventory-audit](https://github.com/anthropics/skills/pull/147)** | Orphan code detection | 10-step workflow producing CODEBASE-STATUS.md—strong enterprise utility |
| **[#154 shodh-memory](https://github.com/anthropics/skills/pull/154)** | Persistent agent context | Addresses fundamental limitation of stateless conversations |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade integrations (Google Workspace, SAP, ODT) combined with meta-quality tooling (security analysis, typography auditing) that makes Claude's outputs production-ready and trustworthy.**

---

# Claude Code Community Digest — 2026-03-29

## Today's Highlights

No new releases in the last 24 hours, but the community is actively reporting critical issues around **rate limiting anomalies** and **session data loss**. A cluster of new security vulnerabilities have been disclosed, including command injection via permission glob patterns and API key exposure bugs. On the contributions front, several community plugins are progressing through review, including an AI agent payment wallet and automated `/tmp` cleanup utilities.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#38335](https://github.com/anthropics/claude-code/issues/38335)** — Claude Max plan session limits exhausted abnormally fast since March 23 (CLI usage) | **88 comments, 87 👍** — The most-discussed issue this week. Multiple Max subscribers report session limits draining far faster than expected since March 23, 2026. Affects CLI workflows specifically. High community frustration; likely a backend metering bug. |
| 2 | **[#38029](https://github.com/anthropics/claude-code/issues/38029)** — Abnormal Usage Consumption on Session Resume | **16 comments, 14 👍** — Session resume appears to consume disproportionate usage credits. Related to #38335 but focused on the resume mechanism. Labeled `area:cost`, `area:core`. |
| 3 | **[#40352](https://github.com/anthropics/claude-code/issues/40352)** — Compaction race condition destroys entire conversation transcript | **Data loss severity** — If a rate limit error occurs during compaction, the JSONL transcript is wiped before the API call succeeds, leaving 4,300+ empty messages. Critical for long-running sessions. |
| 4 | **[#40319](https://github.com/anthropics/claude-code/issues/40319)** — Session resume loads zero conversation history | **Context loss** — `--continue` silently drops all context; `cache_read_input_tokens` drops from 348k–434k to 0. Undermines trust in session persistence. |
| 5 | **[#40344](https://github.com/anthropics/claude-code/issues/40344)** — Permission allow list glob wildcards enable command injection | **Security vulnerability** — Glob `*` matches shell operators (`&&`, `;`, `|`), allowing arbitrary command execution via maliciously-crafted commands that match allow rules. |
| 6 | **[#2142](https://github.com/anthropics/claude-code/issues/2142)** — Claude Code ignores CLAUDE.md security guidelines, exposes API keys | **Long-standing security issue (June 2025)** — Despite explicit documentation, Claude repeatedly commits sensitive credentials to public repos. 14 comments, still open. |
| 7 | **[#40179](https://github.com/anthropics/claude-code/issues/40179)** — Dispatch responses generated but never delivered (Cowork & mobile) | **Cowork feature broken** — Messages are marked as read but responses never appear in desktop Cowork or mobile clients. Affects real-time collaboration. |
| 8 | **[#38648](https://github.com/anthropics/claude-code/issues/38648)** — Voice mode regression: transcription broken in 2.1.81-2.1.83 | **Regression with repro** — Works in 2.1.80, broken in newer versions. Affects accessibility and hands-free workflows. |
| 9 | **[#40307](https://github.com/anthropics/claude-code/issues/40307)** — Windows: bash deadlocked in auto-created worktrees | **Platform-specific unrecoverable state** — Bash becomes completely non-functional inside certain worktree configurations on Windows. |
| 10 | **[#40380](https://github.com/anthropics/claude-code/issues/40380)** — Hook systemMessage silently dropped without hookSpecificOutput | **Plugin developer pain** — `warn` action rules in hooks are invisible when `hookSpecificOutput` is missing. Breaks feedback loops for plugin authors. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | **[#40322](https://github.com/anthropics/claude-code/pull/40322)** — feat(devcontainer): hybrid static/dynamic IP firewall | Enhances devcontainer networking with hybrid IP management. Supersedes #5609 with fixes for sudo env stripping and crontab availability. |
| 2 | **[#40290](https://github.com/anthropics/claude-code/pull/40290)** — fix: pin 7 actions to commit SHA | Security hardening — pins third-party GitHub Actions to immutable commit SHAs instead of mutable version tags. Resubmission of #39515. |
| 3 | **[#40276](https://github.com/anthropics/claude-code/pull/40276)** — Fix changelog accuracy issues v2.1.83-86 | Corrects changelog entries including the skill listing budget reduction (2% → 1% context window) that wasn't fully documented. |
| 4 | **[#36433](https://github.com/anthropics/claude-code/pull/36433)** — feat(plugins): agent-wallet plugin for AI agent payments | Non-custodial wallet capabilities for AI agents using agent-wallet-sdk v5.1.1. Enables agents to pay for API access autonomously. |
| 5 | **[#39977](https://github.com/anthropics/claude-code/pull/39977)** — feat(plugin): tmp-cleanup for /tmp disk leak mitigation | Auto-prunes leaked `.output` files (reported up to 46 GB each) and old session directories from `/tmp`. Addresses disk space exhaustion. |
| 6 | **[#33224](https://github.com/anthropics/claude-code/pull/33224)** — feat(devcontainer): configurable Node.js version | Makes Node version configurable via `NODE_VERSION` env var. Changes default from Node 20 (EOL April 2026) to Node 24 LTS. |
| 7 | **[#40208](https://github.com/anthropics/claude-code/pull/40208)** — fix(plugins): chmod +x hook scripts after install | Fixes #40187 — plugin hook scripts lose execute permissions post-install, causing `SessionStart:resume` errors. |
| 8 | **[#32755](https://github.com/anthropics/claude-code/pull/32755)** — feat(plugins): edit-verifier for post-edit verification | PostToolUse hook that verifies Edit tool changes actually succeeded. Prevents silent failures from whitespace mismatches or already-modified code. |
| 9 | **[#40265](https://github.com/anthropics/claude-code/pull/40265)** — Fix typo in settings README | Minor documentation fix. |
| 10 | **[#40357](https://github.com/anthropics/claude-code/issues/40357)** — [FEATURE] Configurable Read tool file size limit | Requests making the 10k (Desktop) / 25k (CLI) token limit configurable for the Read tool. |

---

## Feature Request Trends

1. **Programmatic Rate Limit Access** — [#19385](https://github.com/anthropics/claude-code/issues/19385) requests exposing `/usage` data (session %, weekly %) to statusline JSON for custom scripts. Strong community support (13 👍).

2. **LSP Protocol Expansion** — [#32502](https://github.com/anthropics/claude-code/issues/32502) requests call hierarchy, rename, code actions, and type hierarchy support in the LSP tool. Important for advanced IDE-like features.

3. **Configurable Tool Limits** — [#40357](https://github.com/anthropics/claude-code/issues/40357) highlights demand for user-configurable file size limits on the Read tool, as Desktop (10k) and CLI (25k) caps differ.

4. **Memory Auto-Update** — [#40374](https://github.com/anthropics/claude-code/issues/40374) requests automatic memory propagation after code changes in conversation, rather than requiring explicit user requests.

5. **Error Recovery for API Failures** — [#40376](https://github.com/anthropics/claude-code/issues/40376) (closed) requested retry/rescue mechanisms for 4xx and 5xx API errors to prevent action loss.

---

## Developer Pain Points

| Category | Summary |
|----------|---------|
| **Rate Limiting Opacity** | Multiple reports (#38335, #38029, #39581, #38896, #39079) of rate limits triggering despite low/zero displayed usage. The `/usage` command data doesn't match actual behavior, and the limits aren't accessible programmatically. |
| **Session Data Loss** | Critical bugs around session resume (#40319, #40352, #27048) where context is silently dropped or transcripts destroyed. Long-running sessions are unreliable. |
| **Security Gaps** | Two distinct security issues: (#2142) ignoring CLAUDE.md security guidelines leading to credential exposure, and (#40344) command injection via glob wildcards in permission allow lists. |
| **Cowork/Dispatch Instability** | Multiple reports (#40178, #40179, #40283) of messages marked read but responses never delivered across desktop and mobile clients. |
| **Terminal State Corruption** | [#39272](https://github.com/anthropics/claude-code/issues/39272) (11 👍) reports terminal left in broken state after exit — Ctrl-D, Ctrl-L, Ctrl-C print garbage instead of working. |
| **Platform-Specific Bugs** | Windows users face bash deadlocks in worktrees (#40307); macOS users hit voice mode regression (#38648) and TUI rendering issues (#40371). |
| **Hook System Brittleness** | Plugin developers report silent failures (#40380) and execute permission loss (#40208) that break feedback loops and session resume. |

---

*Digest generated from GitHub activity on 2026-03-29. Data source: github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-03-29

## 1. Today's Highlights
The Codex team has shipped two rapid-fire Rust alpha releases (**v0.118.0-alpha.2** and **v0.118.0-alpha.3**), signaling an aggressive push toward the next stable milestone. Development focus remains split between architectural refactoring—specifically extracting tool specs into `codex-tools` and migrating linters to native Bazel aspects—and stabilizing the new `tui_app_server`, which received multiple fixes for ghost threads and UI scrolling today.

## 2. Releases
- **[rust-v0.118.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.3)**
- **[rust-v0.118.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.118.0-alpha.2)**
  - *Note:* No detailed release notes were provided in the feed, but the rapid iteration suggests urgent bug fixes or minor feature additions following the alpha.2 release.

## 3. Hot Issues

1. **[#14593: Burning tokens very fast](https://github.com/openai/codex/issues/14593)**
   - **Why:** With 315 comments, this is the most active issue. Business tier users report the VS Code extension consuming tokens at an unsustainable rate, directly impacting cost and utility.
   - **Reaction:** High frustration among enterprise users; demands for transparency regarding context window usage are frequent.

2. **[#10410: Codex Desktop App: macOS Intel (x86_64) support](https://github.com/openai/codex/issues/10410)**
   - **Why:** Despite the rise of Apple Silicon, a significant portion of the dev community remains on Intel Macs. This request has garnered 209 👍.
   - **Reaction:** Users feel abandoned by the shift to ARM-only desktop builds; requests for a Universal binary are ongoing.

3. **[#10450: Remote Development in Codex Desktop App](https://github.com/openai/codex/issues/10450)**
   - **Why:** Remote development (SSH/Containers) is a critical workflow for modern devs. This is the highest upvoted issue (459 👍) in this batch.
   - **Reaction:** Users praise the new Desktop App but consider it unusable for professional work without remote connection support.

4. **[#2558: Codex client output truncated when scrolling in Zellij](https://github.com/openai/codex/issues/2558)**
   - **Why:** A long-standing TUI bug affecting terminal multiplexer users (Zellij/tmux).
   - **Reaction:** Users relying on terminal workflows find this disruptive; workarounds are unreliable.

5. **[#9203: Please make "/undo" back](https://github.com/openai/codex/issues/9203)**
   - **Why:** The removal of the `/undo` command poses a risk for data loss when Codex modifies untracked files.
   - **Reaction:** Strong community consensus (101 👍) that this safety feature is essential for agentic workflows.

6. **[#14919: bwrap: Failed RTM_NEWADDR: Operation not permitted](https://github.com/openai/codex/issues/14919)**
   - **Why:** A regression in Linux sandboxing (bubblewrap) that prevents subagents from executing commands.
   - **Reaction:** Critical for Linux users; currently blocks usage of sandbox mode on Ubuntu 24.04.

7. **[#13476: Excessive approval prompts for Playwright MCP](https://github.com/openai/codex/issues/13476)**
   - **Why:** Recent changes triggered a regression where Playwright MCP tools request approval excessively, disrupting automation flows.
   - **Reaction:** Annoyance among users integrating browser automation; workflow interruption is a common complaint.

8. **[#13549: Codex App on Windows references Windows config when using WSL](https://github.com/openai/codex/issues/13549)**
   - **Why:** Windows users trying to leverage WSL for a Linux environment are blocked by config file pathing issues.
   - **Reaction:** A fundamental impediment to the "Windows + WSL" hybrid workflow strategy.

9. **[#16100: CODEX.md instead of AGENTS.md](https://github.com/openai/codex/issues/16100)**
   - **Why:** A proposal to rename the context file to strengthen Codex branding and standardize across IDE/CLI.
   - **Reaction:** Mixed; while some appreciate the branding, others worry about ecosystem fragmentation (Claude uses `CLAUDE.md`).

10. **[#14754: Add PreToolUse and PostToolUse hook events](https://github.com/openai/codex/issues/14754)**
    - **Why:** Users want to enforce code quality gates (e.g., linters) before Codex executes tool calls.
    - **Reaction:** Seen as a high-value enhancement for enterprise governance and safety.

## 4. Key PR Progress

1. **[#16080: Increase MCP startup timeout](https://github.com/openai/codex/pull/16080)**
   - Increases the MCP startup timeout from 10s to 30s to prevent local MCP servers from timing out during initialization.

2. **[#16106: Migrate argument-comment-lint to native Bazel aspect](https://github.com/openai/codex/pull/16106)**
   - Optimizes the linting process by integrating it into the Bazel build graph, significantly speeding up CI lanes.

3. **[#16110: Fix tui_app_server ghost subagent entries](https://github.com/openai/codex/pull/16110)**
   - Resolves a bug where the `/agent` command showed stale or blank subagent threads in the app-server TUI.

4. **[#16114: Remove TUI voice transcription feature](https://github.com/openai/codex/pull/16114)**
   - Removes the incomplete voice transcription flow from the TUI composer to clean up the codebase.

5. **[#16129: codex-tools: extract configured tool specs](https://github.com/openai/codex/pull/16129)**
   - Continues the architectural migration of tool definitions from `codex-core` to `codex-tools` for better modularity.

6. **[#16062: Stabilize zsh-fork approvals](https://github.com/openai/codex/pull/16062)**
   - Fixes a macOS-specific bug related to `zsh` forking and stabilizes related integration tests.

7. **[#16128: Refresh expired macOS SDK pin](https://github.com/openai/codex/pull/16128)**
   - Updates the Bazel module configuration to fix a `403 Forbidden` error from the Apple CDN during macOS builds.

8. **[#16109: Fix skills picker scrolling](https://github.com/openai/codex/pull/16109)**
   - Fixes a UI bug in the app-server TUI where the skills picker (`$` mention) was truncating the list to 8 items.

9. **[#16125: Stabilize Windows apply_patch harness](https://github.com/openai/codex/pull/16125)**
   - Addresses flaky integration tests on Windows related to shell selection in the `apply_patch` tool.

10. **[#13678: Add watchdog runtime and prompts](https://github.com/openai/codex/pull/13678)**
    - Introduces a "watchdog" runtime layer for managing agent lifecycles and compaction hooks, likely for long-running autonomous tasks.

## 5. Feature Request Trends
- **Platform Parity for Desktop App:** High demand for **Linux** support and **macOS Intel** builds to match the Windows/Mac ARM availability.
- **Remote Development Support:** Overwhelming demand for the Desktop App to support SSH and Remote Container connections.
- **Advanced Hook System:** Developers want `PreToolUse` and `PostToolUse` hooks to implement custom safety rails and quality checks.
- **Undo/Safety Mechanisms:** Restoration of the `/undo` command is frequently requested to mitigate accidental file modifications.
- **Context Management:** Requests for dynamic loading of nested `AGENTS.md` (or `CODEX.md`) files to better handle large monorepos.

## 6. Developer Pain Points
- **Performance & Resources:** The VS Code extension and Desktop App are causing **excessive CPU usage** and **high power consumption**, particularly on macOS.
- **Sandbox Limitations:** The Linux `bubblewrap` sandbox and macOS `seatbelt` profiles are frequently breaking network access or command execution, forcing users to disable security features.
- **Authentication Stability:** Pro users report frequent, disruptive re-authentication requests (`codex login`).
- **Token Opacity:** Lack of visibility into context window usage leads to "token burning," causing unexpected cost spikes for Business tier users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-03-29

## 1. Today's Highlights
Patch releases **v0.36.0-preview.6** and **v0.35.3** were issued to address a specific conflict (PR #24055), ensuring stability across preview and stable channels. Development activity remains heavily focused on **SDD (Spec-Driven Development)** and the **Tracker Service**, with multiple issues tracking the migration from linear checklists to persistent Directed Acyclic Graph (DAG) based task management. Additionally, the community is actively discussing **AST-aware tooling** to reduce token noise and improve codebase mapping accuracy.

## 2. Releases
Two patch releases were published in the last 24 hours:
*   **[v0.36.0-preview.6](https://github.com/google-gemini/gemini-cli/pull/24061):** Cherry-picked a fix to resolve conflicts in the release branch.
*   **[v0.35.3](https://github.com/google-gemini/gemini-cli/pull/24063):** Applied a specific patch (commit `765fb67`) to the stable release line.

## 3. Hot Issues
1.  **[Optimize Test Suite Logging (#23328)](https://github.com/google-gemini/gemini-cli/issues/23328)**
    *   **Context:** The test suite is flooding stdout/stderr with massive logs during successful runs, making CI debugging difficult.
    *   **Reaction:** High engagement (17 upvotes, 55 comments). A fix is already proposed in [PR #24116](https://github.com/google-gemini/gemini-cli/pull/24116).
2.  **[Rate Limit Errors on Pro Accounts (#22545)](https://github.com/google-gemini/gemini-cli/issues/22545)**
    *   **Context:** Users with paid Google AI Pro accounts are consistently hitting `429 RESOURCE_EXHAUSTED` errors, even after full resets.
    *   **Reaction:** Significant user frustration (20 upvotes); currently awaiting triage.
3.  **[Files Edited During Plan Mode (#23858)](https://github.com/google-gemini/gemini-cli/issues/23858)**
    *   **Context:** A critical safety concern where the agent modifies files while ostensibly in "Plan Mode."
    *   **Significance:** Undermines trust in the "planning before execution" workflow.
4.  **[Investigate AST-Aware File Reads (#22745)](https://github.com/google-gemini/gemini-cli/issues/22745)**
    *   **Context:** An EPIC to evaluate Abstract Syntax Tree (AST) tools for better code mapping.
    *   **Significance:** Could significantly reduce hallucinations and token usage by allowing the model to read specific method bounds rather than entire files.
5.  **[Support Passing Prompt to /plan (#22855)](https://github.com/google-gemini/gemini-cli/issues/22855)**
    *   **Context:** Request to allow `/plan [text]` to initiate planning in a single command rather than opening a separate box.
    *   **Significance:** Quality-of-life improvement for workflow efficiency.
6.  **[Memory Routing: Global vs. Project (#22819)](https://github.com/google-gemini/gemini-cli/issues/22819)**
    *   **Context:** Defining logic for the memory subagent to distinguish between user preferences (Global) and codebase context (Project).
    *   **Significance:** Essential for context persistence across sessions.
7.  **[SDD: Persistent Tracker Storage (#23724)](https://github.com/google-gemini/gemini-cli/issues/23724)**
    *   **Context:** Moving task tracking from temp directories to `.gemini/tracker/` for git commitability.
    *   **Significance:** Enables team collaboration on complex tasks.
8.  **[GeminiCLI.com Returns "null" (#24102)](https://github.com/google-gemini/gemini-cli/issues/24102)**
    *   **Context:** A user reported the CLI returning "null" continuously after 5 hours of troubleshooting.
    *   **Significance:** Highlights potential edge-case failures in the getting-started experience.
9.  **[Subagent Awareness of Approval Modes (#23582)](https://github.com/google-gemini/gemini-cli/issues/23582)**
    *   **Context:** Subagents currently attempt tool calls that violate the active Approval Mode (e.g., Plan Mode).
    *   **Significance:** Wastes tokens and cycles on invalid tool calls that the Policy Engine inevitably blocks.
10. **[Proactive Memory Writes (#22809)](https://github.com/google-gemini/gemini-cli/issues/22809)**
    *   **Context:** Tuning the main agent to automatically save preferences when the user corrects it.
    *   **Significance:** Reduces the need for users to manually teach the agent preferences repeatedly.

## 4. Key PR Progress
1.  **[Silence debugLogger Globally (#24116)](https://github.com/google-gemini/gemini-cli/pull/24116)**
    *   Centralizes the mock for `debugLogger` in test setup, cleaning up the massive output reported in Issue #23328.
2.  **[UX for Topic Narration Tool (#24079)](https://github.com/google-gemini/gemini-cli/pull/24079) [CLOSED]**
    *   Introduced a UI update replacing turn narration with updates from a `topic` tool, making high-level tasks easier to track. (Merged/Closed).
3.  **[Preserve Structured Thoughts During Resume (#24106)](https://github.com/google-gemini/gemini-cli/pull/24106)**
    *   Fixes a bug where `[Thought: true]` leaked as literal text after resuming a session.
4.  **[Fix OAuth Double Close (#24120)](https://github.com/google-gemini/gemini-cli/pull/24120)**
    *   Prevents `ERR_SERVER_NOT_RUNNING` errors by adding guards against multiple `server.close()` calls in the OAuth flow.
5.  **[Auto-Restart Agent on Background Task Completion (#22807)](https://github.com/google-gemini/gemini-cli/pull/22807)**
    *   Prevents dropped completions by auto-submitting background task output as a new agent turn when idle.
6.  **[Event-Driven Subagent History (#23914)](https://github.com/google-gemini/gemini-cli/pull/23914)**
    *   Infrastructure for real-time UI rendering of subagent activity without heavy polling.
7.  **[XDG Directory Support (#23992)](https://github.com/google-gemini/gemini-cli/pull/23992)**
    *   Implements standard Linux directory handling (XDG) for config/cache/tmp, allowing explicit environment variable overrides.
8.  **[GSoC Prototype: Performance Companion (#24121)](https://github.com/google-gemini/gemini-cli/pull/24121)**
    *   A draft PR adding an in-CLI performance observability dashboard for memory and latency metrics.
9.  **[Strip functionResponse.id (#22957)](https://github.com/google-gemini/gemini-cli/pull/22957)**
    *   Sanitizes API requests by stripping internal `id` fields from function responses at the boundary.
10. **[Deduplicate GEMINI.md Loads (#20776)](https://github.com/google-gemini/gemini-cli/pull/20776)**
    *   Fixes double-loading of context files on case-insensitive filesystems (macOS/Windows).

## 5. Feature Request Trends
*   **SDD & DAG Workflows:** A strong push toward Spec-Driven Development using Directed Acyclic Graphs (DAG) for task tracking rather than linear lists (Issues #23320, #23804).
*   **Context & Memory Persistence:** Users and maintainers are prioritizing features that persist context (Memory Routing #22819) and project states (Tracker Storage #23724) across sessions.
*   **AST Integration:** Growing interest in using AST-aware tools to improve code navigation precision and reduce token waste (Issue #22745).
*   **Enterprise/Team Features:** Requests for team-level defaults and trackers (Issue #23925) indicate a maturing user base moving from individual to collaborative use.

## 6. Developer Pain Points
*   **Debugging Noise:** The test suite output issue (#23328) highlights a friction point in CI/CD workflows where verbose logging obscures actual failures.
*   **Rate Limiting Confusion:** The recurrence of `429` errors on paid tiers (#22545) suggests a disconnect between user expectations of "unlimited" usage and actual backend quotas.
*   **Agent "Disobedience":** The issue of files being edited in Plan Mode (#23858) and subagents ignoring policy constraints (#23582) points to ongoing challenges in enforcing strict safety boundaries within the agentic loop.
*   **Installation Failures:** The "null" output error (#24102) suggests that error handling during initialization or authentication failures remains opaque for some users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-03-29

## 1. Today's Highlights
No new releases were published in the last 24 hours. The community focus remains heavily on **usability bugs**, particularly scrolling issues across different environments (Windows, Tmux, WSL), and **Agent behavior**, specifically regarding autonomy and infinite loops. There is also significant traction on feature requests for **observability** and **local LLM support**.

## 2. Releases
*No new releases recorded in the last 24 hours.*

## 3. Hot Issues
1.  **[Org-Token Permissions for "Copilot Requests" #223](https://github.com/github/copilot-cli/issues/223)**
    *   **Why it matters:** Enterprise adoption is hindered because fine-grained PATs owned by organizations lack the specific "Copilot Requests" permission visibility.
    *   **Reaction:** High engagement (👍 60, 16 comments); users are looking for secure automation methods without relying on individual user PATs.

2.  **[SHIFT + ENTER Executes Prompt Instead of Line Break #1481](https://github.com/github/copilot-cli/issues/1481)**
    *   **Why it matters:** Violates standard UX conventions for chat interfaces (where `SHIFT + ENTER` usually creates a new line), leading to premature prompt submissions.
    *   **Reaction:** Strong annoyance expressed in comments (14 comments); users want consistency with standard chat applications.

3.  **[Autopilot Enters Infinite Loop #2374](https://github.com/github/copilot-cli/issues/2374)**
    *   **Why it matters:** A critical reliability issue where the agent loops indefinitely after completing a plan approval, rendering the automation feature risky.
    *   **Reaction:** Immediate concern regarding resource usage and reliability.

4.  **[Regression: Mouse Wheel Scroll Captured by Input Box (Windows) #1944](https://github.com/github/copilot-cli/issues/1944)**
    *   **Why it matters:** A specific regression on Windows prevents users from scrolling through conversation history; the focus traps in the input box.
    *   **Reaction:** Marked as Closed/Resolved recently, but highlights ongoing cross-platform UI challenges.

5.  **[Export Traces/Metrics via OpenTelemetry (OTel) #1911](https://github.com/github/copilot-cli/issues/1911)**
    *   **Why it matters:** Enterprise and power users need visibility into agent interactions, token usage, and tool executions for cost monitoring and debugging.
    *   **Reaction:** Highly requested (👍 7) for integration into existing observability stacks.

6.  **[CLI Spins CPU at 100% in WSL #2208](https://github.com/github/copilot-cli/issues/2208)**
    *   **Why it matters:** Performance bottleneck where long sessions (large context state) cause the TUI to become unresponsive and consume max CPU.
    *   **Reaction:** Critical for developers working within WSL environments.

7.  **[Model Quality Regression on GPT 5.4 #2272](https://github.com/github/copilot-cli/issues/2272)**
    *   **Why it matters:** Users report that Copilot CLI performs worse on `gpt-5.4` compared to `5.3-codex` and lags behind the "Codex" tool using the same model.
    *   **Reaction:** Raises questions about prompt engineering and context handling in the CLI vs. other tools.

8.  **[Cannot Use MCP Servers / Access Denied #1976](https://github.com/github/copilot-cli/issues/1976)**
    *   **Why it matters:** Organizational policies are blocking third-party MCP servers, severely limiting extensibility for custom workflows.
    *   **Reaction:** Confusion regarding default policies and built-in server limitations.

9.  **[SEA Binary Hangs on IPv6 Unroutable #2361](https://github.com/github/copilot-cli/issues/2361)**
    *   **Why it matters:** A networking stack issue where the bundled Node.js SEA binary fails to fallback to IPv4 when IPv6 is unroutable, causing startup hangs.
    *   **Reaction:** Technical deep-dive required for network configurations in corporate environments.

10. **[Feature: Paste Images Directly from Snipping Tool #2328](https://github.com/github/copilot-cli/issues/2328)**
    *   **Why it matters:** Currently requires saving images to file first; direct pasting would streamline multimodal interactions significantly.
    *   **Reaction:** Positive reception (👍 4) for UX improvement.

## 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends
Based on the latest issues, developers are trending toward:
*   **Enhanced Autonomy Controls:** Requests for finer control over the "Autopilot" mode, specifically to prevent autonomous implementation beyond the scoped task (#2358) and to fix looping behaviors (#2374).
*   **Local & Custom Model Support:** Strong demand for `OPENAI_BASE_URL` support (#2283) and auto-detection of local LLMs (Ollama/LM Studio) (#2366) to reduce costs and enable offline use.
*   **Observability & Debugging:** Requests for OpenTelemetry integration (#1911) to track token usage and agent decision paths.
*   **UI/UX Polish:** Requests for "Vim-like" exit commands (`:q`) (#2373), better input/output color differentiation (#2371), and smooth scrolling animations (#2362).

## 6. Developer Pain Points
*   **Scrolling & Navigation:** A recurring theme across multiple issues (#1481, #1944, #1842, #2369, #2372). Developers are frustrated by the inability to easily scroll through long outputs or history, specifically in Tmux, Windows, and WSL environments.
*   **Agent Reliability:** The agent ignoring explicit stop instructions (#2358) or getting stuck in infinite loops (#2374) erodes trust in the "Autopilot" feature.
*   **Corporate/Enterprise Constraints:** Issues regarding Organizational policy blocks for MCP servers (#1976) and the lack of visibility for Copilot permissions in Org-owned tokens (#223) indicate friction in enterprise adoption.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-03-29

## 1. Today's Highlights
Community activity focused heavily on **platform compatibility** and **model protocol alignment**. A critical fix was submitted for an infinite crash loop on macOS when external drives are unplugged, while Windows users rallied for better shell integration and image support. Additionally, several issues and PRs addressed breaking changes related to reasoning content handling for Kimi-K2.5 and third-party API proxies.

## 2. Releases
*No new releases recorded in the last 24 hours.*

## 3. Hot Issues

1.  **[#1621 [bug] CWD 被移除时底部工具栏渲染无限抛异常](https://github.com/MoonshotAI/kimi-cli/issues/1621)**
    *   **Context:** High-priority bug where removing the Current Working Directory (CWD) filesystem (e.g., unplugging a USB drive) causes the TUI bottom toolbar to trigger an infinite exception loop.
    *   **Impact:** Crashes the CLI session on macOS/Darwin systems. A fix is already proposed in PR #1622.

2.  **[#1616 [OPEN] fix: One API 平台 Kimi-K2.5 模型报错 'thinking is enabled but reasoning_content is missing'](https://github.com/MoonshotAI/kimi-cli/issues/1616)**
    *   **Context:** When using Kimi-K2.5 via "One API" proxies, the client fails to send `reasoning_effort` if the history already contains `reasoning_content`, resulting in a 400 error.
    *   **Impact:** Breaks multi-turn conversations for users utilizing third-party API gateways.

3.  **[#1615 [OPEN] [bug] 使用GLM5.1,模型反馈接收不到信息](https://github.com/MoonshotAI/kimi-cli/issues/1615)**
    *   **Context:** The tool call returns data successfully on the VIS (Visual Interface), but the GLM5.1 model fails to receive/ingest the feedback.
    *   **Impact:** Critical compatibility issue for users integrating GLM models via the `/setup` generic provider.

4.  **[#1617 [OPEN] [bug] Ctrl-V 无法在 Windows Terminal 中粘贴图片](https://github.com/MoonshotAI/kimi-cli/issues/1617)**
    *   **Context:** Standard `Ctrl-V` paste fails to import images into the CLI when running inside Windows Terminal.
    *   **Impact:** hinders multimodal coding workflows on Windows.

5.  **[#1618 [OPEN] [bug] Windows 上允许配置 Shell 执行器](https://github.com/MoonshotAI/kimi-cli/issues/1618)**
    *   **Context:** Users cannot switch the default shell executor on Windows (currently forced to PowerShell).
    *   **Impact:** Feature request to allow `bash` or `zsh` (via WSL/Git Bash) as the default executor to align with cross-platform scripts.

6.  **[#1619 [OPEN] [bug] `kimi acp` does not accept the Moonshot Open Platform authentication](https://github.com/MoonshotAI/kimi-cli/issues/1619)**
    *   **Context:** The `acp` command ignores existing authentication for the Moonshot Open Platform.
    *   **Impact:** Blocks usage of the ACP feature for official platform users on Linux.

7.  **[#1624 [OPEN] [bug] SearXNG MCP Logs Dumped into TUI](https://github.com/MoonshotAI/kimi-cli/issues/1624)**
    *   **Context:** Internal MCP logs from SearXNG are being printed directly into the user interface on every request.
    *   **Impact:** Clutters the interface, disrupting the user experience during search-augmented sessions.

8.  **[#1623 [OPEN] [bug] Kimi Web 刷新网页影响体验](https://github.com/MoonshotAI/kimi-cli/issues/1623)**
    *   **Context:** Kimi Web interface suffers from intermittent auto-refreshes.
    *   **Impact:** Disrupts workflow and state retention in the browser-based IDE experience.

9.  **[#1625 [OPEN] feat(mcp): add --scope option for OAuth](https://github.com/MoonshotAI/kimi-cli/issues/1625)** *(Note: Link leads to PR but context is relevant to Issue tracking)*
    *   **Context:** Discovered when connecting to OAuth MCP servers (e.g., Supabase) requiring specific scopes.
    *   **Impact:** Current auth flow is insufficient for granular permission APIs.

10. **[#1600 [OPEN] feat(shell): highlight user input](https://github.com/MoonshotAI/kimi-cli/issues/1600)**
    *   **Context:** Visual distinction of user messages in the shell UI is currently low.
    *   **Impact:** Minor UX friction; community proposes bright blue highlighting and separators.

## 4. Key PR Progress

1.  **[#1622 [OPEN] fix(shell): exit gracefully with crash report when CWD is removed](https://github.com/MoonshotAI/kimi-cli/pull/1622)**
    *   Resolves the infinite crash loop (#1621) by wrapping `os.getcwd()` calls in the bottom toolbar renderer. Instead of cascading errors, it now triggers a graceful crash report.

2.  **[#1620 [OPEN] fix: auto-set reasoning_effort when history contains ThinkPart](https://github.com/MoonshotAI/kimi-cli/pull/1620)**
    *   Fixes One API proxy errors (#1616) by ensuring `reasoning_effort` is implicitly set if the conversation history already contains `ThinkPart`.

3.  **[#1625 [OPEN] feat(mcp): add --scope option for OAuth](https://github.com/MoonshotAI/kimi-cli/pull/1625)**
    *   Adds `--scope` flag to `kimi mcp auth` to support complex OAuth flows (e.g., Supabase) and fixes upstream authentication redirection issues.

4.  **[#1512 [OPEN] feat: 重写 ACP 认证流程](https://github.com/MoonshotAI/kimi-cli/pull/1512)**
    *   Major overhaul of the ACP server authentication system. Implements a robust architecture supporting both Terminal Login and OAuth Device Flow.

5.  **[#1605 [CLOSED] fix(skills): restore --skills-dir override behavior](https://github.com/MoonshotAI/kimi-cli/pull/1605)**
    *   Merged/Closed. This PR reverted the skills directory behavior from "append" back to "override" to match v1.25.0 semantics.

6.  **[#1606 [OPEN] revert(skills): --skills-dir supports multi-path append](https://github.com/MoonshotAI/kimi-cli/pull/1606)**
    *   A follow-up to #1605. This PR attempts to revert *back* to the "append" behavior, suggesting an active debate on whether `--skills-dir` should replace or augment default paths.

7.  **[#1600 [OPEN] feat(shell): highlight user input](https://github.com/MoonshotAI/kimi-cli/pull/1600)**
    *   Enhances shell UI by applying bright blue (#007AFF) color to user input and adding a full-width separator line for better readability.

## 5. Feature Request Trends
*   **Cross-Shell Support on Windows:** Strong demand to decouple the CLI from PowerShell, with requests for configurable `bash`/`zsh` executors (Issue #1618).
*   **Robust Third-Party Proxy Support:** As more users adopt "One API" style gateways, there is a growing need for the CLI to handle non-standard or slightly modified API responses (specifically regarding `reasoning_content`).
*   **Enhanced MCP UX:** Developers want cleaner logs and more granular control (scopes) when integrating external MCP tools like SearXNG and Supabase.

## 6. Developer Pain Points
*   **Session Fragility:** The CLI is sensitive to filesystem changes; losing the CWD causes a fatal crash loop rather than a warning (Issue #1621).
*   **Windows Multimodal Gaps:** Windows users feel like second-class citizens regarding clipboard image support (Issue #1617) compared to Unix-based systems.
*   **Reasoning Protocol Drift:** The `reasoning_content` handling causes frequent 400 errors when switching between official platforms and proxies, creating friction in model selection.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-03-29

## Today's Highlights

The OpenCode community is actively troubleshooting a critical **Claude Max outage** (Issue #7410) that has garnered significant attention with 393 comments. On the development front, contributors are pushing substantial improvements including **Nix build fixes**, **Mistral Enterprise endpoint support**, and a major **SessionPrompt service refactor** using the Effect pattern. Feature discussions continue to emphasize **plugin extensibility** and **subagent management** as key areas of interest.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | **[#7410 - Broken Claude Max](https://github.com/anomalyco/opencode/issues/7410)** | Critical outage affecting Claude Max users. 393 comments and 358 👍 indicate widespread impact. Users report authentication/connection failures. Status: OPEN, awaiting fix. |
| 2 | **[#7101 - Custom system prompts](https://github.com/anomalyco/opencode/issues/7101)** | Highly requested feature (71 👍) for global/project-level system prompt configuration. Would enable better prompt engineering workflows. |
| 3 | **[#8501 - Expand pasted text](https://github.com/anomalyco/opencode/issues/8501)** | Top-voted feature (103 👍) requesting ability to expand summarized paste previews like `[Pasted ~1 lines]` for editing. |
| 4 | **[#6152 - Session context usage](https://github.com/anomalyco/opencode/issues/6152)** | Feature request (64 👍) for a `/context`-style TUI dialog showing token breakdown. Critical for managing context windows. |
| 5 | **[#7002 - Regression in 1.1.3](https://github.com/anomalyco/opencode/issues/7002)** | Active bug (28 comments) with `edit` tool throwing invalid argument errors after upgrade. Impacts core editing workflow. |
| 6 | **[#3743 - Loop in certain models](https://github.com/anomalyco/opencode/issues/3743)** | Model behavior issue causing infinite tool-calling loops with KIMI K2, MiniMax 2, and GLM 4.6. Needs investigation. |
| 7 | **[#6651 - Dynamic model selection for subagents](https://github.com/anomalyco/opencode/issues/6651)** | Feature request (25 👍) to let primary agents dynamically assign models to subagents via Task tool. |
| 8 | **[#8619 - Native StatusLine Hook](https://github.com/anomalyco/opencode/issues/8619)** | Plugin API request (25 👍) for persistent status display without polluting conversation context. |
| 9 | **[#5444 - MCP OAuth doesn't work](https://github.com/anomalyco/opencode/issues/5444)** | Bug preventing OAuth authentication with remote MCP servers like Atlassian Jira. Blocks enterprise integrations. |
| 10 | **[#19538 - @mention subagent not guaranteed](https://github.com/anomalyco/opencode/issues/19538)** | Fresh bug report: `@mention` syntax doesn't reliably invoke subagents despite documentation claiming it should. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | **[#19483 - Effectify SessionPrompt service](https://github.com/anomalyco/opencode/pull/19483)** | Major refactor migrating SessionPrompt to Effect service pattern with fiber-based cancellation. Modernizes core architecture. |
| 2 | **[#19561 - Nix embedded web-ui support](https://github.com/anomalyco/opencode/pull/19561)** | Fixes building/bundling embedded web-ui for Nix builds. Closes #19307. |
| 3 | **[#19560 - Mistral Enterprise endpoint](https://github.com/anomalyco/opencode/pull/19560)** | Adds support for custom Mistral API endpoints via interactive auth flow. Enables enterprise deployments. |
| 4 | **[#19550 - Plugin sync hook crash](https://github.com/anomalyco/opencode/pull/19550)** | Fixes crash with `undefined is not an object` error in plugin sync hooks. MERGED. |
| 5 | **[#19520 - StdinParser mouse sequence fix](https://github.com/anomalyco/opencode/pull/19520)** | Patches StdinParser to prevent garbled text from fragmented mouse sequences during high-load streaming. |
| 6 | **[#18767 - Mobile Touch Optimization](https://github.com/anomalyco/opencode/pull/18767)** | Optimizes OpenCode desktop app for mobile/touch devices while preserving desktop experience. |
| 7 | **[#19555 - Sanitize image attachments](https://github.com/anomalyco/opencode/pull/19555)** | Sanitizes image attachments before API submission to prevent provider limit violations. Closes #4781. |
| 8 | **[#19556 - MCP tool name in permissions](https://github.com/anomalyco/opencode/pull/19556)** | Fixes MCP tools showing `*` instead of actual tool names in permission dialogs. |
| 9 | **[#12520 - MCP-search lazy loading](https://github.com/anomalyco/opencode/pull/12520)** | Implements `mcp-search` tool for lazy loading MCP resources. Improves startup performance. |
| 10 | **[#19386 - OSC 11 terminal background sync](https://github.com/anomalyco/opencode/pull/19386)** | Syncs terminal background color to theme via OSC 11 escape sequences. Fixes visual glitches. |

---

## Feature Request Trends

1. **Plugin Extensibility** — Strong demand for hooks like `tui.footer.items` (#18969), StatusLine APIs (#8619), and custom sound uploads (#19559). Developers want deeper TUI integration.

2. **Subagent Management** — Multiple requests for `/subagents` command (#19415), dynamic model selection (#6651), and reliable `@mention` invocation (#19538).

3. **Context Window Control** — Session context usage breakdown (#6152), `num_ctx` for Ollama (#3250), and system prompt customization (#7101) reflect needs for fine-grained token management.

4. **Provider Expansion** — Requests for Atlassian Rovo Dev (#10726), Thaura AI (#19522), and Mistral Enterprise (#19560) show demand for broader provider support.

5. **UX Polish** — Expandable paste previews (#8501), hot reload for configs (#10899), and non-English IME support (#16252) indicate maturation needs.

---

## Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Claude Max Outage** | Issue #7410 (393 comments, 358 👍) — Critical service disruption with no resolution yet. |
| **Model Looping** | Issue #3743 — Certain models (KIMI K2, MiniMax, GLM) get stuck in infinite tool-calling loops. |
| **Context Bloat** | Issues #6574, #10306 — "Request entity too large" errors from screenshots/context exceeding limits. |
| **Unreliable Subagent Invocation** | Issue #19538 — `@mention` syntax documented but doesn't work consistently. |
| **Plugin Event Bus Issues** | Issue #14808 — `session.created` events not firing for plugins, breaking memory systems. |
| **OAuth MCP Integration** | Issue #5444 — OAuth authentication failing for remote MCP servers, blocking enterprise workflows. |
| **Windows/WSL Edge Cases** | Issue #19502 — Inconsistent image paste behavior in Windows Terminal + WSL2. |

---

*Digest generated from GitHub activity on 2026-03-29. Data source: github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-03-29

## 1. Today's Highlights
No new version was released today, but the community remains highly active. Key developments include significant architectural refactoring to centralize IDE diff interactions and the introduction of a new "Channels" platform for messaging integration. On the issue front, attention is focused on Windows compatibility bugs and discussions regarding the feature parity of the subagent system compared to competitors like Claude Code.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues

*   **Windows Shell Execution Failure ([#2727](https://github.com/QwenLM/qwen-code/issues/2727))**
    A critical bug is affecting Windows users where shell commands (e.g., `npm run format`) fail with "File not found" errors despite packages being installed correctly. This points to potential environment path resolution issues in the agent's shell wrapper.

*   **Subagent System Parity Request ([#2409](https://github.com/QwenLM/qwen-code/issues/2409))**
    A high-impact feature request asking to bring Qwen Code's subagent system to feature parity with Claude Code. The author notes that Qwen currently implements roughly 40-45% of the subagent capabilities found in competitors, highlighting a gap in agentic orchestration.

*   **Automated Skill Testing Framework ([#2447](https://github.com/QwenLM/qwen-code/issues/2447))**
    Proposed by contributor `wenshao`, this issue advocates for a recording, playback, and assertion framework to test the hundreds of skills managed by the codebase. Currently, skill modifications lack automated verification, posing a risk for regression.

*   **VSCode "Edit Automatically" Security Risk ([#2722](https://github.com/QwenLM/qwen-code/issues/2722))**
    A security concern was raised regarding the "Edit automatically" mode in the VS Code extension. Users report that this mode allows the agent to run arbitrary programs and shell commands without explicit approval, bypassing expected safety guardrails.

*   **Agent Reliability and Hallucination ([#2641](https://github.com/QwenLM/qwen-code/issues/2641))**
    A frustrated user reported that the model frequently changes code unexpectedly and "destroys production products," citing issues with guardrails and parameter count claims versus actual performance stability.

*   **Session Management Enhancement ([#2630](https://github.com/QwenLM/qwen-code/issues/2630))**
    Feature request for Session Aliases and Auto-Summarization. Currently, sessions are identified only by UUIDs, making management difficult. The proposal suggests adding human-readable names and auto-generated descriptions.

*   **Context Window Inefficiency ([#2685](https://github.com/QwenLM/qwen-code/issues/2685))**
    Users report that a simple greeting ("Hello") consumes 20% of the context window in a new session. This suggests a potential issue with the default system prompt size or context injection logic.

*   **Tool Invocation Amnesia ([#2686](https://github.com/QwenLM/qwen-code/issues/2686))**
    A bad case where the model frequently forgets parameters (e.g., missing `old_string` or `new_string`) when invoking edit/write tools, requiring repeated corrections by the user.

*   **JSON Serialization Error with DeepSeek ([#2695](https://github.com/QwenLM/qwen-code/issues/2695))**
    Users connecting via the OpenAI-compatible endpoint (specifically pointing to DeepSeek API) are encountering JSON deserialization errors, indicating possible message format incompatibilities.

*   **Refusal to Operate ([#2730](https://github.com/QwenLM/qwen-code/issues/2730))**
    A regression report where the agent refuses to perform tasks it previously handled well, constantly generating excuses rather than executing commands.

## 4. Key PR Progress

*   **[Feature] Channels Platform ([#2628](https://github.com/QwenLM/qwen-code/pull/2628))**
    A major PR introducing a "Channels" platform, allowing Qwen Code to interact via Telegram, WeChat, and DingTalk. It includes a plugin system for building custom channel adapters.

*   **[Feature] In-Session Cron Scheduling ([#2731](https://github.com/QwenLM/qwen-code/pull/2731))**
    Adds session-scoped recurring jobs ("loops") using cron syntax. This enables the model to monitor long-running operations (like CI/CD) without continuous user prompting.

*   **[Refactor] Centralize IDE Diff Interaction ([#2728](https://github.com/QwenLM/qwen-code/pull/2728))**
    Architectural cleanup moving diff handling from individual tools into `CoreToolScheduler`. This aims to fix token waste and mitigate bugs related to multi-editing the same file.

*   **[Feature] Math Rendering Support ([#2732](https://github.com/QwenLM/qwen-code/pull/2732))**
    Adds support for rendering complex math (LaTeX, fractions) and includes a markdown validator to prevent text leakage and code block breaking.

*   **[Fix] Terminal Response Leakage on SSH ([#2718](https://github.com/QwenLM/qwen-code/pull/2718))**
    Fixes an issue where terminal responses to kitty protocol detection queries appeared as garbage text during high-latency SSH sessions.

## 5. Feature Request Trends
*   **Agentic Parity:** Strong demand to close the gap with competitors, specifically regarding subagent orchestration and autonomous capabilities.
*   **Testing & Reliability:** A shift towards enterprise-grade needs, specifically requests for automated testing frameworks for skills and better session management (aliases/summaries).
*   **Integration:** Increased interest in using Qwen Code as a backend bot, evidenced by the Channels PR and related discussions.

## 6. Developer Pain Points
*   **Windows Compatibility:** The "File not found" issue highlights ongoing friction for Windows developers using the CLI/Agent tools.
*   **Context Management:** Inefficiencies in context window usage and the lack of readable session identifiers make long-term interaction cumbersome.
*   **Tool Reliability:** "Amnesia" regarding tool parameters and unexpected refusals to execute tasks remain significant workflow disruptors.

</details>