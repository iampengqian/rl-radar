# AI CLI Tools Community Digest 2026-06-02

> Generated: 2026-06-01 22:41 UTC | Tools covered: 9

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

# AI Developer Tools Ecosystem Cross-Tool Report (2026-06-02)

## 1. Ecosystem Overview
The AI CLI tooling landscape is rapidly maturing from simple terminal wrappers into sophisticated, autonomous coding agents. As of mid-2026, the ecosystem is characterized by aggressive feature iterations—particularly around multi-agent orchestration, Model Context Protocol (MCP) integrations, and enriched Terminal User Interfaces (TUIs). However, this breakneck pace is exposing growing pains: cross-platform instability (especially on Windows), agent reliability and safety concerns, and memory management bottlenecks are dominant themes across all major tools. Both corporate-backed titans and nimble open-source projects are vying to define the standard for the AI-augmented terminal.

## 2. Activity Comparison
The following table summarizes community and development activity across the major AI CLI tools for the past 24 hours:

| Tool | Sponsor | Hot Issues (Top 10) | Active PRs (Top 10) | Release Status (Last 24h) | Primary Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | Anthropic | 10 (High engagement) | 6 | **None** | Agent safety, Windows stability, Issue lifecycle |
| **OpenAI Codex** | OpenAI | 10 | 10 | **v0.136.0** | TUI upgrades, Desktop-CLI teleporting, Windows stability |
| **Gemini CLI** | Google | 10 | 10 | **None** | Gemini 3.5 Flash integration, MCP reliability, Agent self-healing |
| **GitHub Copilot CLI** | GitHub | 10 | 1 | **v1.0.57** (June 1) | Clipboard regressions, API rate limits, Shell compatibility |
| **Kimi Code CLI** | Moonshot AI | 2 | 4 | **None** | State/session resilience, Clipboard integration |
| **OpenCode** | Anomaly Co | 10 | 10 | **None** | Permission system rewrite (V2), Subscription pricing, TUI bugs |
| **Pi** | Earendil Works | 10 | 10 | **None** | New model integrations (MiniMax, Gemini), TUI/media edge cases |
| **Qwen Code** | QwenLM | 10 | 10 | **Nightly (June 1)** | Daemon mode, Memory leak fixes, Vim mode |
| **DeepSeek TUI (CodeWhale)**| Hmbown | 10 | 10 | **v0.8.49** | Project rebrand to CodeWhale, Turn stalling, Migration |

*(Note: Active PR counts reflect the "Top 10" or most notable PRs highlighted in each tool's digest, serving as a proxy for daily development momentum).*

## 3. Shared Feature Directions
Despite different codebases and corporate backers, community demands and developer focuses are converging on several key fronts:

*   **First-Class MCP Governance & Reliability:** Almost every tool is grappling with Model Context Protocol (MCP) reliability. **Gemini CLI**, **OpenCode**, and **Qwen Code** are actively fixing race conditions, transient network drop errors, and permission inheritances for MCP servers. Communities want advanced governance, such as bidirectional MCP notifications (**OpenAI Codex**) and granular token-saving toggles (**GitHub Copilot CLI**).
*   **Robust Permission & Security Systems:** As agents gain more autonomy, users are demanding better guardrails. **OpenCode** is literally rewriting its permission system (PermissionV2) because legacy rules were silently bypassed. **Qwen Code** is hardening auto-mode self-modification checks, while **DeepSeek TUI (CodeWhale)** communities are asking for typed, scoped execution policies.
*   **Advanced Session Continuity & Compaction:** Context window management is a shared pain point. Users are rejecting simplistic summarization in favor of native API compaction (**OpenCode**), resilient `--resume` and daemon modes (**Qwen Code**), and ephemeral session switches (**Gemini CLI**, **Pi**). 
*   **Terminal UI (TUI) Refinement:** The era of raw terminal output is ending. Tools are adding rich markdown tables, OSC 8 web links (**OpenAI Codex**), and resolving complex rendering bugs like CJK wide-char boundary slicing (**Pi**) and crossterm polling freezes (**DeepSeek TUI**).
*   **New Model Adaptability:** The community rapidly adopts new foundational models. There is a simultaneous push across **Gemini CLI**, **Pi**, and **Qwen Code** to integrate **Gemini 3.5 Flash** and **MiniMax M3**, requiring quick patches for provider-specific API quirks (e.g., role schema rejections, reasoning block timeouts).

## 4. Differentiation Analysis
*   **Corporate Giants vs. Open-Source Agnostics:** **Claude Code**, **OpenAI Codex**, and **GitHub Copilot CLI** act as walled-garden or semi-walled-garden gateways to their proprietary models. In contrast, tools like **Pi** and **OpenCode** differentiate by offering multi-provider swizzling (e.g., native integrations for OpenRouter, Vertex AI, local llama.cpp), appealing to power users who optimize costs and capabilities per-task.
*   **Target User Base:** **GitHub Copilot CLI** focuses heavily on enterprise/org model parity and VS Code synergies. **Qwen Code** and **DeepSeek TUI** show strong localization and usage in non-Western developer markets (reflected in language-specific issues and regional network restrictions). **Pi** and **OpenCode** are targeting the hyper-customizer, offering deep keybinding overrides and extension hooks.
*   **Architectural Approach:** **Qwen Code** is uniquely leaning into a "daemon mode" architecture to allow programmatic, non-blocking agent interactions. **OpenAI Codex** is building "Desktop-to-CLI teleporting" to blur the lines between local rich apps and terminal environments.

## 5. Community Momentum & Maturity
*   **Rapid Iterators:** **OpenAI Codex**, **Qwen Code**, **Pi**, and **OpenCode** show immense development momentum, evidenced by 10+ meaningful PRs merged or updated daily. These projects are actively stabilizing multi-agent paradigms and TUI frameworks.
*   **Friction and Frustration:** **Claude Code** currently shows signs of community-maintainer friction. The #1 issue ("Bring Back Buddy") has 1,128 👍 and no resolution, alongside complaints about aggressive issue auto-closing. **DeepSeek TUI** is experiencing migration anxiety due to its abrupt rebrand to "CodeWhale."
*   **Windows as a Second-Class Citizen:** A universal maturity gap across the ecosystem is Windows support. From the Microsoft Store failures in **OpenAI Codex** to clipboard bugs in **GitHub Copilot CLI** and UI rendering failures in **Qwen Code**, Linux/macOS remain the primary development environments for these agent tools.

## 6. Trend Signals (Strategic Takeaways)
1.  **The "Trust but Verify" Crisis:** Users are deploying these CLIs in high-stakes environments and realizing that autonomous agents frequently hallucinate commands, ignore safety instructions, or cause data/financial loss (e.g., Claude Code's $112 loss report). Unvalidated execution policies are the biggest blocker to enterprise production adoption.
2.  **Context is Expensive—And Leaky:** Unbounded log growth (e.g., Claude Code's 278GB disk exhaustion), session state desyncs, and broken context compaction are ubiquitous. Developers optimizing AI workflows need first-class SDK primitives to pause, resume, and truncate agent memory safely.
3.  **Terminal Renaissance vs. Desktop Apps:** The lines between CLI and Desktop are blurring. OpenAI's "teleporting" feature suggests that future developer tools will use the terminal for execution but may rely on Electron/Tauri wrappers for advanced rendering, git diffs, and configuration management.
4.  **Commoditization of Underlying Models:** With the rapid introduction of cheaper, highly capable models like DeepSeek V4 Pro and Gemini 3.5 Flash, platform communities (like **OpenCode**) are actively revolting against fixed subscription pricing, demanding usage caps that reflect the plummeting cost of underlying API inference.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-06-02 | Source: [github.com/anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking

The most actively watched and discussed Skills in the repository, based on community engagement, update frequency, and issue cross-references:

| Rank | Skill | PR | Author | Status |
|:---:|---|---|---|:---:|
| 1 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | OPEN |
| 2 | **odt (OpenDocument)** | [#486](https://github.com/anthropics/skills/pull/486) | GitHubNewbie0 | OPEN |
| 3 | **frontend-design** (revamp) | [#210](https://github.com/anthropics/skills/pull/210) | justinwetch | OPEN |
| 4 | **skill-quality-analyzer & skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | eovidiu | OPEN |
| 5 | **pdf bug fixes** (case-sensitivity) | [#538](https://github.com/anthropics/skills/pull/538) | Lubrsy706 | OPEN |
| 6 | **skill-creator YAML validation fix** | [#539](https://github.com/anthropics/skills/pull/539) | Lubrsy706 | OPEN |
| 7 | **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | Vanka07 | OPEN |
| 8 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | OPEN |

**Detailed breakdown:**

1. **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) — Addresses orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Solves a universal pain point since "users rarely ask for good typography" but notice when it's absent. High watch activity across its 9-day active window.

2. **ODT / OpenDocument** ([#486](https://github.com/anthropics/skills/pull/486)) — Comprehensive OpenDocument Format creation, template filling, and ODT→HTML conversion. Longest active maintenance window of any current PR (March 1 → April 14), suggesting ongoing refinement. Fills a significant gap for LibreOffice/OpenDocument workflows.

3. **frontend-design revision** ([#210](https://github.com/anthropics/skills/pull/210)) — Not a new skill, but a substantial overhaul to improve clarity and actionability of existing frontend-design instructions. Highlights community focus on *skill quality* over mere quantity.

4. **skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) — Two "meta skills" that evaluate other skills across five quality dimensions and detect security issues. One of the oldest still-active PRs (Nov 2025), indicating sustained interest in skill ecosystem governance.

5. **pdf case-sensitivity fix** ([#538](https://github.com/anthropics/skills/pull/538)) — Corrects 8 file reference mismatches in the PDF skill that break on case-sensitive filesystems (Linux). Small but critical — represents the class of platform-compatibility fixes the community needs.

6. **skill-creator YAML validation** ([#539](https://github.com/anthropics/skills/pull/539)) — Prevents silent YAML parsing failures when `description` fields contain unquoted special characters. Directly addresses recurring authoring pain (see also [#361](https://github.com/anthropics/skills/pull/361) for a parallel fix).

7. **ServiceNow platform** ([#568](https://github.com/anthropics/skills/pull/568)) — Broad enterprise platform skill covering ITSM, ITOM, ITAM/SAM, FSM, SPM, CSDM, HRSD, Vulnerability Response, and IntegrationHub. Represents the growing enterprise adoption pattern.

8. **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) — Full-stack testing coverage: unit (AAA pattern), React component testing, integration, E2E with Playwright, and contract testing. Aligns with strong community demand for testing guidance.

---

## 2. Community Demand Trends

Analysis of the top Issues reveals five clear demand vectors:

### 🔥 Trend 1: Org-Wide Skill Sharing & Distribution
- **[Issue #228](https://github.com/anthropics/skills/issues/228)** (13 comments, 7 👍) — Users want native org-level skill libraries, not manual `.skill` file sharing via Slack/Teams.
- **[Issue #492](https://github.com/anthropics/skills/issues/492)** (7 comments) — Community skills under `anthropic/` namespace create trust boundary vulnerabilities. Users need **verified authorship and namespacing**.

### 🔥 Trend 2: Platform Reliability & Compatibility
- **[Issue #62](https://github.com/anthropics/skills/issues/62)** (10 comments) — Skills disappearing after file renames; fragile local file binding.
- **[Issue #61](https://github.com/anthropics/skills/issues/61)** (3 comments) — 404 errors loading skills on Team plans.
- **[Issue #556](https://github.com/anthropics/skills/issues/556)** (9 comments) — `run_eval.py` has 0% trigger rate, blocking skill validation entirely.
- **[PR #1099](https://github.com/anthropics/skills/pull/1099) & [PR #1050](https://github.com/anthropics/skills/pull/1050)** — Windows compatibility is broken in core tooling.

### 🔥 Trend 3: Context Window & Data Optimization
- **[Issue #189](https://github.com/anthropics/skills/issues/189)** (6 comments, 8 👍 — highest 👍 in Issues) — Duplicate skills from overlapping plugins waste context.
- **[Issue #1087](https://github.com/anthropics/skills/issues/1087)** — Plugin loader fetches all 17 skills instead of declared 4.
- **[Issue #1102](https://github.com/anthropics/skills/issues/1102)** — MCP returns uncompressed data, causing context congestion.

### 🔥 Trend 4: Skills-as-MCP & API Exposure
- **[Issue #16](https://github.com/anthropics/skills/issues/16)** (4 comments) — Request to expose Skills as MCPs with structured APIs. Long-standing architectural ask.

### 🔥 Trend 5: Multi-File Skill Loading
- **[Issue #1220](https://github.com/anthropics/skills/issues/1220)** (2 comments, recent) — Skills split across multiple reference files can't preload all content, limiting complex skill effectiveness.

---

## 3. High-Potential Pending Skills

These open PRs are actively maintained and address clear gaps — likely candidates for near-term merging:

| PR | Skill | Why It's Likely to Land |
|---|---|---|
| [#538](https://github.com/anthropics/skills/pull/538) | pdf case-sensitivity fix | Small, targeted, blocks Linux users — low-risk merge |
| [#539](https://github.com/anthropics/skills/pull/539) | skill-creator YAML validation | Fixes a silent data corruption bug; parallels [#361](https://github.com/anthropics/skills/pull/361) |
| [#541](https://github.com/anthropics/skills/pull/541) | docx tracked-change ID collision | Fixes actual document corruption; narrow scope |
| [#1099](https://github.com/anthropics/skills/pull/1099) | run_eval.py Windows fix | Unblocks all Windows-based skill developers |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | Addresses the [#452](https://github.com/anthropics/skills/issues/452) community health gap; improves contribution quality |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | Comprehensive, high community value, clear scope |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | Solves universal document quality issue |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is reliable platform fundamentals — fixing skill loading, evaluation tooling, and duplicate/context bloat — before expanding into new skill domains.**

The highest-upvoted issue ([#189](https://github.com/anthropics/skills/issues/189), 8 👍) is about duplicate skills wasting context, and the most-commented issue ([#228](https://github.com/anthropics/skills/issues/228), 13 comments) is about basic sharing infrastructure. Until skill distribution, validation, and loading work reliably across operating systems and team plans, the community is signaling that *infrastructure maturity matters more than skill quantity*.

---

# Claude Code Community Digest — 2026-06-02

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The community's energy remains concentrated on the months-long **"Bring Back Buddy"** campaign (#45596, 1,128 👍), which continues to dominate discussion. Meanwhile, several high-impact bugs gained traction today — notably a **model-parse-failure regression** blocking Windows sessions (#63875), an **unauthorized-1M-context switch** silently inflating costs (#62199), and a new report of the AI **ignoring user instructions and causing financial loss** (#64574).

---

## 2. Releases

None in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#45596 — Bring Back Buddy](https://github.com/anthropics/claude-code/issues/45596) (261 💬, 1,128 👍) | The mega-thread demanding restoration of the `/buddy` skill removed in v2.1.97. Now nearly two months old, it remains the most-upvoted open issue and shows no sign of slowing. |
| 2 | [#63875 — Recurring "model's tool call could not be parsed" on Windows](https://github.com/anthropics/claude-code/issues/63875) (17 💬, 18 👍) | A parsing regression that aborts in-progress work mid-session. Affects multiple Windows users and has no workaround. |
| 3 | [#62199 — Default model silently changed to 1M context](https://github.com/anthropics/claude-code/issues/62199) (16 💬, 8 👍) | Pro users report Claude Code switched to a 1M-context model without notification, resulting in unexpected cost increases. |
| 4 | [#26466 — Built-in HTTPS proxy breaks Go-based CLIs (gh, terraform)](https://github.com/anthropics/claude-code/issues/26466) (7 💬, 47 👍) | The sandbox HTTPS proxy intercepts traffic from Go tools, causing TLS failures. High 👍 count signals broad impact on infrastructure-heavy workflows. |
| 5 | [#64574 — AI ignored instructions, caused $112.77 financial loss](https://github.com/anthropics/claude-code/issues/64574) (6 💬) | A stark report: during Polymarket bot setup, Opus 4.6 made unauthorized code changes. Raises questions about agent reliability in high-stakes scenarios. |
| 6 | [#64227 — Repeated unauthorized destructive changes, permanent data loss](https://github.com/anthropics/claude-code/issues/64227) (4 💬) | Another data-loss report spanning multiple sessions. Tagged `data-loss` and `area:model`, suggesting systemic model obedience issues. |
| 7 | [#55586 — Agent Teams: single teammate spawns 10–151 duplicate workers](https://github.com/anthropics/claude-code/issues/55586) (10 💬) | The Agent Teams feature creates runaway worker proliferation on WSL, each consuming full context — a critical resource-exhaustion bug. |
| 8 | [#60001 — Background-Agent notifications drop silently with ≥3 parallel agents](https://github.com/anthropics/claude-code/issues/60001) (7 💬) | Completion notifications for parallel background agents are lost, making multi-agent orchestration unreliable. |
| 9 | [#19976 — Tmux notification support](https://github.com/anthropics/claude-code/issues/19976) (10 💬, 24 👍) | OSC sequences aren't wrapped in DCS passthrough inside tmux, so desktop notifications silently fail for a large dev demographic. |
| 10 | [#41737 — Task output files fill entire disk (278 GB in minutes)](https://github.com/anthropics/claude-code/issues/41737) (3 💬) | Intermittent unbounded log growth in `/private/tmp/claude*` causes complete disk exhaustion — a severity-critical issue for long-running tasks. |

---

## 4. Key PR Progress

Only six PRs saw updates today; none were merged. The most notable:

| PR | Description |
|----|-------------|
| [#63686 — Bump stale/autoclose timeouts from 14 → 90 days](https://github.com/anthropics/claude-code/pull/63686) | Proposed by community member `caseyWebb`. Would give issues 90 days before stale marking and closure — a direct response to complaints that legitimate bugs are being auto-closed too aggressively. |
| [#63872 — docs: fix README capitalization and wording](https://github.com/anthropics/claude-code/pull/63872) | Standardizes `GitHub`/`macOS` casing and cleans up intro punctuation. Small but improves first-impression professionalism. |
| [#63467 — docs: add Windows `gh` CLI install instruction](https://github.com/anthropics/claude-code/pull/63467) | Adds `winget install --id GitHub.cli` alongside the existing `brew` instruction, closing a documentation gap for Windows users. |
| [#64489 — Updated example file](https://github.com/anthropics/claude-code/pull/64489) | Adds new sample content to an example file; minor contribution. |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) / [#61478](https://github.com/anthropics/claude-code/pull/61478) | Appear to be low-quality/spam submissions (title: "s" and a marketing-related string). Likely awaiting triage/close. |

---

## 5. Feature Request Trends

Several clear themes emerge from the enhancement-tagged issues:

1. **Multi-agent coordination primitives** (#48965): Cross-session messaging, shared task boards, and compaction-resistant state for orchestrating N workers from a PM agent — the community wants first-class multi-agent support rather than DIY assembly.
2. **TUI/UX enrichment** (#52518, #19976, #56618): Users are asking for a richer terminal UI (sidebar with context/token stats, better message layout), tmux notification support, and right-aligned user messages to match standard chat conventions.
3. **MCP governance for teams** (#60246): Documentation and tooling for adopting MCP servers at scale within organizations, including security review guidance.
4. **Cowork quality-of-life** (#44933, #50873): Default project folders for auto-load, and fixing virtiofs stale/truncated file serving on Windows — essential for multi-agent cowork workflows.
5. **Telemetry opt-in for plugin labels** (#59951): Teams running internal observability want verbatim plugin/skill labels on `token.usage` and `cost.usage` metrics to attribute spend accurately.
6. **Localized session summaries** (#64573): Requests for session summaries to be generated in the same language as the conversation (e.g., Japanese).

---

## 6. Developer Pain Points

| Theme | Evidence |
|-------|----------|
| **Windows is a second-class citizen** | At least 8 of today's top 30 issues are `platform:windows` — encoding corruption (#7134), parse failures (#63875), duplicate agent spawns (#55586), virtiofs truncation (#50873), desktop UI bugs (#54461, #59736), JetBrains plugin detection (#61807), log exporter silence (#64396). |
| **Agent reliability & safety** | Multiple reports of the model ignoring explicit instructions, making unauthorized edits, and causing real financial/data loss (#64574, #64227, #62199). Agent Teams features (duplicate workers, dropped notifications) compound the concern. |
| **Silent cost increases** | The 1M-context default switch (#62199) and unbounded task output files (#41737) both erode trust around cost predictability — a critical factor for production use. |
| **Issue lifecycle frustration** | PR #63686's proposed 14 → 90 day timeout change directly reflects community complaints that real bugs are being auto-closed too quickly, forcing users to repeatedly reopen or re-file. |
| **Disk/resource exhaustion** | 278 GB task logs (#41737) and 151× duplicate agent instances (#55586) show that resource guardrails for long-running or multi-agent tasks are insufficient. |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-06-02

Here is the technical digest for the `openai/codex` repository based on the latest GitHub activity.

## 1. Today's Highlights
Codex rolls out **version 0.136.0**, bringing significant Terminal UI (TUI) upgrades like clickable OSC 8 web links, dynamic table formatting, and a new session archiving feature (`/archive` in TUI, `codex archive` in CLI). Under the hood, the engineering team is aggressively refactoring core systems, evidenced by multiple merged PRs enabling Desktop-to-CLI session "teleporting," parallel web search execution, and robust multi-agent runtime persistence. Meanwhile, the community remains highly active regarding Windows Desktop stability, with several critical bugs surrounding the Microsoft Store installation, sandboxing, and OAuth callbacks.

## 2. Releases
*   **rust-v0.136.0** 
    *   **TUI Markdown Upgrades:** Web links now remain clickable via OSC 8 metadata, and cramped tables dynamically switch to readable key/value records without losing link targets (#24472, #24636, #24825).
    *   **Session Management:** Users can now archive sessions directly from the TUI using `/archive` or via the CLI with `codex archive` / `codex u`.

## 3. Hot Issues
1.  **[Phone Verification Loop](https://github.com/openai/codex/issues/20161) (179 comments, 115 👍):** A major pain point where SSO logins on new devices get trapped in an unskippable phone number verification screen.
2.  **[Token Refresh Failure](https://github.com/openai/codex/issues/9634) (45 comments):** Persistent "refresh token already used" errors are locking Pro users out of the `gpt-5.2-codex` model on macOS.
3.  **[`/compact` Regression](https://github.com/openai/codex/issues/21671) (23 comments):** Updating to v0.129.0 broke the `/compact` command due to a rejected `service_tier` API parameter. 
4.  **[Win 10 Dependency Loop](https://github.com/openai/codex/issues/19811) (16 comments):** Codex Desktop prompts Windows 10 users to repair workspace dependencies, but the installation silently fails because Win 10 is unsupported.
5.  **[File Read Permission Spam](https://github.com/openai/codex/issues/13117) (15 comments):** A regression in the VS Code extension causes Codex to re-prompt for permission on every single file read.
6.  **[Windows OAuth Fails](https://github.com/openai/codex/issues/25157) (14 comments, 13 👍):** The "Open in Codex" OAuth callback triggers a raw Electron crash instead of completing the Desktop App login.
7.  **[API Service Tier Support](https://github.com/openai/codex/issues/2916) (14 comments, 40 👍):** Users are heavily upvoting a feature request to expose OpenAI's `service_tier` parameter for cost/latency optimization.
8.  **[Codex Web Cannot Open PRs](https://github.com/openai/codex/issues/21000) (14 comments):** Cloud users are experiencing universal "Failed to create PR" errors upon task completion.
9.  **[Hidden Chat History](https://github.com/openai/codex/issues/25084) (12 comments):** Codex Desktop UI stops displaying older, locally persisted threads in the sidebar.
10. **[Bundled Plugins Fail on EFS](https://github.com/openai/codex/issues/25220) (10 comments):** Windows plugins (Computer Use, Browser) fail to load due to `copyfile` errors on EFS-encrypted WindowsApps directories.

## 4. Key PR Progress
1.  **[feat(tui): add desktop session teleport command](https://github.com/openai/codex/pull/25638):** Introduces `/teleport` to seamlessly hand off a CLI session to the Codex Desktop app using deep links.
2.  **[fix(tui): space multiline list siblings](https://github.com/openai/codex/pull/25305):** Improves TUI markdown rendering to add visual spacing for nested blocks and multiline lists. 
3.  **[[codex] enable parallel standalone web search calls](https://github.com/openai/codex/pull/25702) (Merged):** Opts the `web.run` tool into parallel execution to speed up search-backed tasks.
4.  **[feat: persist and inherit per-thread multi-agent runtime](https://github.com/openai/codex/pull/25708):** Locks the multi-agent version to a specific thread, preventing runtime breaks if a user changes models mid-session.
5.  **[[profile-switcher][rust] Add app-server account session lifecycle](https://github.com/openai/codex/pull/25383):** Implements Rust-based multi-account profile switching lifecycle (`add`, `list`, `switch`, `logout`) for the Desktop app.
6.  **[feat: enforce allow_git through permissions](https://github.com/openai/codex/pull/17036):** Allows Codex to make limited Git writes (like commits) within the secure sandbox environment without full exec permissions.
7.  **[feat: show enterprise monthly credit limits in status](https://github.com/openai/codex/pull/24812):** Surfaces `spend_control.individual_limit` in `/status` so enterprise users can track monthly credit allowances.
8.  **[Reject directory rollout paths for pathless side chats](https://github.com/openai/codex/pull/25661):** Fixes a bug where ephemeral Desktop "side chats" incorrectly attempted to load persistent directory rollouts.
9.  **[[codex] Publish release symbol artifacts](https://github.com/openai/codex/pull/25649):** Ensures stripped production binaries publish separate debugging symbols for better crash stack traces.
10. **[core: stop threading SandboxPolicy through exec](https://github.com/openai/codex/pull/25700):** Refactors legacy Windows sandbox plumbing to decouple sandbox policies from the core execution logic.

## 5. Feature Request Trends
*   **Granular API Configurability:** Developers want more control over API routing, specifically requesting the ability to set `service_tier` and `flex` processing parameters to balance latency and cost ([#2916](https://github.com/openai/codex/issues/2916)).
*   **Advanced MCP Integrations:** There is a strong push to make MCP servers bidirectional, allowing external channels to push live notifications directly into an active Codex session ([#15299](https://github.com/openai/codex/issues/15299)).
*   **Robust Cloud Git/VCS Integration:** Users are asking for reliable commit syncing and PR creation within Codex Web/Cloud, as state desyncs and failed pushes are currently breaking cloud-based workflows ([#21771](https://github.com/openai/codex/issues/21771), [#21000](https://github.com/openai/codex/issues/21000)).

## 6. Developer Pain Points
*   **Windows Instability:** The Windows Desktop ecosystem is highly unstable right now. Users are reporting show-stopping bugs across the board—from Microsoft Store installations failing with error `0X87E10BC6` ([#25421](https://github.com/openai/codex/issues/25421)) to broken sandboxing (`os error 740`) and dead OAuth callbacks ([#25157](https://github.com/openai/codex/issues/25157), [#25297](https://github.com/openai/codex/issues/25297)).
*   **Fragmented Authentication Flows:** Auth regressions remain a severe headache. Users are frequently locked out of their accounts due to broken token refresh loops and redundant phone verifications, even when utilizing high-tier Pro subscriptions ([#20161](https://github.com/openai/codex/issues/20161), [#25670](https://github.com/openai/codex/issues/25670)).
*   **State Desync in Desktop UI:** Many developers are experiencing data integrity issues where local SQLite databases retain session history, but the UI fails to render older chats, projects, or sidebars after app updates ([#23193](https://github.com/openai/codex/issues/23193), [#25084](https://github.com/openai/codex/issues/25084)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-06-02

## 1. Today's Highlights
No new versions were released in the last 24 hours, but the community and maintainers remain highly active. Several significant pull requests aim to introduce the new **Gemini 3.5 Flash** model family, improve MCP server reliability, and add highly requested CLI flags like `--ephemeral`. Under the hood, maintainers are pushing forward on core infrastructure robustness, focusing on agent stability, secure credential handling, and AST-aware codebase mapping. 

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Hot Issues
Here are the 10 most noteworthy issues currently driving community discussion:

1. **Generalist Agent Hangs indefinitely** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)) - Users report that the CLI hangs forever when deferring to the generalist agent (even for simple folder creation), forcing manual cancellation. Highly upvoted (👍 8), this remains a critical usability blocker.
2. **Subagent falsely reports success after hitting `MAX_TURNS`** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) - The `codebase_investigator` subagent hides interruptions by claiming `"success"` when it actually hits the turn limit, making it difficult for developers to trust agent completion states.
3. **Shell command execution gets stuck on "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) - Even after a simple CLI command finishes, the terminal incorrectly remains active and awaits user input. 
4. **Gemini ignores custom skills and sub-agents** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) - Developers are frustrated that the model will not autonomously use configured custom skills (e.g., `gradle`, `git`) unless explicitly instructed to do so.
5. **AST-Aware File Reads and Codebase Mapping** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) - An investigative epic tracking the integration of AST tools (like AST grep) to reduce token noise and improve multi-turn file reading accuracy.
6. **Security Risk: Auto Memory fails to redact secrets before logging** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) - Auto Memory reads local transcripts and risks exposing secrets to the background extraction model before redaction occurs.
7. **Silent failures in Auto Memory inbox** ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) - Invalid memory patches are silently skipped rather than surfaced or quarantined, complicating debugging for users relying on persistent agent memory.
8. **Model frequently creates tmp scripts in random spots** ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) - When restricted to shell execution, the agent scatters temporary edit scripts across directories, causing workspace pollution.
9. **Sub-agents run without permission since v0.33.0** ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) - A regression where disabled subagents automatically execute, causing unexpected behavior for users who only intended to use MCP functionality.
10. **Browser Agent ignores `settings.json` overrides** ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) - Settings like `maxTurns` are completely bypassed by the Browser Agent despite the `AgentRegistry` correctly reading them.

## 4. Key PR Progress
Here are the 10 most important Pull Requests seeing activity today:

1. **Add support for Gemini 3.5 Flash model family** ([PR #27614](https://github.com/google-gemini/gemini-cli/pull/27614)) - Adds support for `gemini-3.5-flash-preview` and `gemini-3.5-flash-lite-preview`, updating core model configurations.
2. **Transition to flash GA model with experiment flag** ([PR #27570](https://github.com/google-gemini/gemini-cli/pull/27570)) - Implements a safe, gated rollout to replace legacy Flash models with `gemini-3.5-flash` for backward compatibility.
3. **Add ephemeral session mode (`--ephemeral`)** ([PR #27365](https://github.com/google-gemini/gemini-cli/pull/27365)) - Introduces a highly requested flag to prevent headless mode from flooding user session logs.
4. **Fix: Atomic update in MCP tool discovery** ([PR #27619](https://github.com/google-gemini/gemini-cli/pull/27619)) - Resolves the "tool not found" error during transient network drops by ensuring the tool registry isn't prematurely wiped.
5. **Fix: Preserve `refresh_token` in file-based cache** ([PR #27463](https://github.com/google-gemini/gemini-cli/pull/27463)) - Resolves an annoying authentication loop where default file-based storage inadvertently overwrote `refresh_token`.
6. **Fix: Multi-line escaped quotes in `stripShellWrapper`** ([PR #27467](https://github.com/google-gemini/gemini-cli/pull/27467)) - Replaces naive string parsing with `shell-quote` to fix bugs when unescaping multi-line shell commands.
7. **Fix: tmux false positive background detection** ([PR #27572](https://github.com/google-gemini/gemini-cli/pull/27572)) - Resolves a regression causing inappropriate light/dark theme switching when running Gemini CLI via `tmux`/`mosh`.
8. **Fix: Use `docker inspect` exit code for sandbox checks** ([PR #27428](https://github.com/google-gemini/gemini-cli/pull/27428)) - Improves Docker sandbox reliability by moving away from brittle `stdout` parsing.
9. **Security: Consolidated MCP server lists for ACP/policy-engine** ([PR #27605](https://github.com/google-gemini/gemini-cli/pull/27605)) - Patches an MCP allow/block list bypass by correctly merging settings across workspace scopes.
10. **Fix: Include all executing subagent tool calls in state** ([PR #22590](https://github.com/google-gemini/gemini-cli/pull/22590)) - Fixes an edge case where subagent tool calls operating concurrently bypassed the `useToolScheduler` state filter.

## 5. Feature Request Trends
Analysis of recent issues reveals a strong community push toward **advanced autonomous coding capabilities** and **developer control**:
* **AST-Aware Tooling:** Multiple issues (e.g., [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) request AST-aware codebase mapping, searching, and reading to make file operations more precise and token-efficient.
* **Improved Memory & Continuity:** Better handling of agent memory, including robust redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) and better summarization of long context threads.
* **Self-Healing Agents:** Demand for better resilience in subagents, such as browser lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) and accurate reporting of interruption states ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
* **Agent Self-Awareness:** Requests ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) for the model to understand its own CLI flags, hotkeys, and limits so it can better guide users without hallucinating features.

## 6. Developer Pain Points
Recurring frustrations from developers and contributors using Gemini CLI in production workflows include:
* **Unpredictable Agent Delegation:** The CLI tends to hang when switching to sub-agents ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), or ignores custom skills completely ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)). 
* **Workspace Pollution:** Agents frequently create tmp scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) and fail to keep workspaces clean for commits.
* **MCP Reliability:** Network blitches too easily result in "tool not found" errors, breaking flow states.
* **Permission Regressions:** Subagents occasionally execute without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), making it difficult for developers to safely integrate Gemini into automated pipelines.
* **Terminal UI Flickering:** UI jitter upon terminal resizing ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)) and broken rendering when exiting external editors in `terminalBuffer` mode.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-06-02.

### 1. Today's Highlights
GitHub Copilot CLI released **v1.0.57**, delivering enhanced UX for plugin operations and crucial API rate-limit error handling. The community's primary focus is currently centered around significant regressions in clipboard handling across multiple operating systems introduced in recent patches. Additionally, developers are actively advocating for advanced Model Context Protocol (MCP) configurations and improved session/context management capabilities.

### 2. Releases
**[v1.0.57](https://github.com/github/copilot-cli/releases/tag/v1.0.57)** (Released 2026-06-01)
*   **API Rate Limiting:** Added actionable error messages when GitHub API rate limits are hit during `copilot update`.
*   **UX Improvements:** Plugin slash commands (`/plugin install`, `uninstall`, `update`, `marketplace`) now display immediate feedback during execution.
*   **Process Control:** Improved handling for canceling running shell commands via `Ctrl+C`.

### 3. Hot Issues
1.  **[#1703](https://github.com/github/copilot-cli/issues/1703) [OPEN] Missing Org-Enabled Models:** Copilot CLI fails to list all organization-enabled models (e.g., Gemini 3.1 Pro) that are successfully available in VS Code. *Why it matters:* High engagement (53 👍, 27 comments) points to a significant disparity between CLI and IDE capabilities.
2.  **[#3609](https://github.com/github/copilot-cli/issues/3609) [OPEN] Clipboard Copy Regression:** Users cannot copy text to the clipboard from the console since v1.0.56. *Why it matters:* A critical daily-workflow blocker that completely interrupts knowledge extraction from the agent.
3.  **[#3622](https://github.com/github/copilot-cli/issues/3622) [OPEN] Windows Clipboard Failure:** Copy to clipboard silently fails specifically on Windows, pasting older clipboard contents instead. *Why it matters:* Highlights OS-specific regressions in terminal rendering.
4.  **[#3620](https://github.com/github/copilot-cli/issues/3620) [OPEN] `Ctrl+C` Overload:** Users are frustrated by `Ctrl+C` performing unexpected actions (copying, emptying prompt, or canceling). *Why it matters:* Touches on fundamental terminal UX expectations and conflicts with the new copy regressions.
5.  **[#3619](https://github.com/github/copilot-cli/issues/3619) [OPEN] Fish Shell Incompatibility:** The bash tool's exit-code sentinel uses Bash syntax (`$?`), causing errors in the Fish shell. *Why it matters:* Breaks tool execution reliability for developers using non-Bash shells.
6.  **[#3601](https://github.com/github/copilot-cli/issues/3601) [OPEN] Non-ASCII Characters Dropped:** Shell environments spawned by the tool force `LC_CTYPE="C"`, silently stripping non-ASCII characters (CJK, emojis). *Why it matters:* Excludes internationalized file paths and codebases from being processed correctly.
7.  **[#3621](https://github.com/github/copilot-cli/issues/3621) [OPEN] Infinite Auto-Compaction Loops:** Large instruction files trigger continuous auto-compaction, wiping working memory on every turn. *Why it matters:* Agents become unusable for complex multi-step tasks when instructions are long.
8.  **[#3616](https://github.com/github/copilot-cli/issues/3616) [OPEN] Git Safe Directory Misassociation:** Permission prompts incorrectly associate non-git directories with the session's active git repo. *Why it matters:* Poses potential security/mutability risks if users approve permissions for the wrong scope.
9.  **[#768](https://github.com/github/copilot-cli/issues/768) [CLOSED] MCP Servers Opt-Out:** Request for a config option to define but disable MCP servers by default to save context tokens. *Why it matters:* Highly requested (36 👍), indicating users want granular control over context window allocation.
10. **[#3605](https://github.com/github/copilot-cli/issues/3605) [OPEN] Multiline Copy Truncation:** Drag-selecting multiple lines truncates the spaces between lines during copy operations. *Why it matters:* Degrades code output fidelity when sharing or saving CLI responses.

### 4. Key PR Progress
*Note: Only one pull request showed activity in the last 24 hours.*
*   **[#3473](https://github.com/github/copilot-cli/pull/3473) README Update:** An open PR attempting to update the README. *Note:* This PR currently appears to be spam/low-quality based on the author's name and unrelated summary containing promotional links. No meaningful core-maintenance PRs were updated in this 24-hour window.

### 5. Feature Request Trends
*   **Advanced Context & Memory Management:** Requests for better handling of context windows, including natural-language session lookups (`--resume "<query>"` in [#3615](https://github.com/github/copilot-cli/issues/3615)) and preventing infinite compaction loops.
*   **Granular Permissions for MCP:** Users want fine-grained control over MCP servers, specifically the ability to toggle servers off to save tokens (#768) and configure tool-level permissions (#3028).
*   **UI/UX Toggles for Agents:** A strong demand for customizable UI density, specifically the ability to hide intermediate streaming/tool-call activity to reduce terminal noise ([#3614](https://github.com/github/copilot-cli/issues/3614)).
*   **Better Skill/Plugin Organization:** Developers want the ability to use subfolders to organize growing plugin/skills libraries ([#1632](https://github.com/github/copilot-cli/issues/1632)).

### 6. Developer Pain Points
*   **Terminal Rendering Regressions:** The transition through versions 1.0.56 and 1.0.57 has introduced severe instability in basic terminal operations, notably clipboard copy/paste and space truncation during multiline selection.
*   **LSP Integration Reliability:** The CLI agent frequently ignores available LSP servers ([#3516](https://github.com/github/copilot-cli/issues/3516)) in favor of raw `grep`/`glob` searches, and struggles with project-level LSP configurations ([#1323](https://github.com/github/copilot-cli/issues/1323)), leading to suboptimal code analysis.
*   **Cross-Platform/Shell Failures:** Core tooling assumes Bash/Linux environments, causing frustrating errors for developers on Windows or using alternative shells like Fish ([#3619](https://github.com/github/copilot-cli/issues/3619), [#3622](https://github.com/github/copilot-cli/issues/3622)).
*   **Model Discrepancies:** The CLI environment is perceived as a second-class citizen compared to VS Code, as it lacks feature parity for organization-enabled models, leading to restricted workflows ([#1703](https://github.com/github/copilot-cli/issues/1703)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-06-02

## 1. Today's Highlights
No new releases were published in the last 24 hours. However, community activity remains steady, with a newly opened bug report regarding historical image pollution on session restart and continued progress on several significant pull requests. Key PR updates today focus on improving authentication robustness, refining session state management (`/undo` logic), and enhancing tool error feedback.

## 2. Releases
*No new releases were recorded in the past 24 hours.*

## 3. Hot Issues
Although only 2 issues saw updates in the last 24 hours, they highlight specific edge cases affecting user experience:

*   **[#2413](https://github.com/MoonshotAI/kimi-cli/issues/2413) [OPEN] Session history image pollution on restart:** A newly reported bug indicates that restarting the CLI can resend historical images from the web client, inadvertently polluting the current context. This is a critical issue for users utilizing multi-modal inputs across different platforms (Ubuntu/Windows).
*   **[#1914](https://github.com/MoonshotAI/kimi-cli/issues/1914) [CLOSED] Installation failures in GitHub-restricted regions:** This older issue regarding the `uv` installer failing in regions where GitHub is unreachable was updated today. Its presence highlights ongoing infrastructure access challenges for a segment of the global developer community.

## 4. Key PR Progress
Four notable pull requests received updates today, bringing quality-of-life improvements and critical bug fixes:

*   **[#2414](https://github.com/MoonshotAI/kimi-cli/pull/2414) `fix(auth)`: Prevent invalid OAuth persistence:** This PR introduces a validation step for returned model lists before saving OAuth credentials. It also implements a rollback mechanism if the config save fails, hardening the CLI against authentication state corruption.
*   **[#2386](https://github.com/MoonshotAI/kimi-cli/pull/2386) `fix(session)`: Correct `/undo` context mapping:** Resolves a complex bug where `/undo` and fork features would fall out of sync with `context.jsonl` when local slash commands were used. It properly maps wire turns to context turns, ensuring session history remains accurate.
*   **[#2389](https://github.com/MoonshotAI/kimi-cli/pull/2389) `fix(tools)`: Improve shell command error briefs:** Modifies error handling to include trailing output when shell commands fail. This provides developers with much-needed stdout/stderr context directly in the UI instead of truncated error messages.
*   **[#1741](https://github.com/MoonshotAI/kimi-cli/pull/1741) `feat`: Add `/copy` command:** A long-standing community contribution that introduces a native `/copy` shell command to instantly copy the assistant's last response to the system clipboard, streamlining the copy-paste workflow.

## 5. Feature Request Trends
Based on recent repository activities (including open PRs and resolved issues), current development and feature trends are heavily focused on:
*   **Clipboard Integration:** Native, frictionless transfer of AI-generated code to the system clipboard.
*   **Data Local-State Resilience:** Preventing state corruption during config writes or when mapping history across different session files (`wire.jsonl` vs `context.jsonl`).
*   **Offline/Distributed Reliability:** Improving the installation experience in network-restricted environments.

## 6. Developer Pain Points
*   **Multi-modal Context Bleeding:** As seen in Issue #2413, synchronizing state between Web and CLI interfaces is proving complex, leading to unintended image uploads that waste tokens and pollute the conversational context.
*   **Cross-Platform Installation Friction:** Dependency on GitHub-hosted releases for tools like `uv` creates hard blockers for developers in certain network environments.
*   **Session History Desync:** Managing `undo` operations correctly across varying command types (local commands vs. actual LLM queries) has historically caused context misalignment, which maintainers are actively addressing.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-06-02

---

## 1. Today's Highlights

No new releases shipped today, but the community remained highly active around **v1.15.13 regressions**—particularly MCP server loading failures on the Desktop app and a TUI auto-scroll bug. A major architectural PR introducing a **location-based permission system (PermissionV2)** was opened, aiming to resolve long-standing complaints about ignored security rules. Several contributors also submitted targeted TUI rendering fixes, signaling an active stabilization sprint.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

1. **[#28846](https://github.com/anomalyco/opencode/issues/28846) — Adjust Go usage limits after DeepSeek V4 Pro 75% price reduction** (43 comments, 57 👍)
   The top issue by engagement. Users argue that since DeepSeek V4 Pro API costs dropped permanently, OpenCode Go subscription caps should be raised proportionally. Strong community consensus; no maintainer response yet.

2. **[#16331](https://github.com/anomalyco/opencode/issues/16331) — Permissions ignored** (40 comments, 8 👍)
   A critical security concern: `opencode.json` permission rules (deny on `.env` files, restrict bash commands) are silently bypassed. This long-open issue continues to attract reports from users with similar configs.

3. **[#27589](https://github.com/anomalyco/opencode/issues/27589) — TUI fails on Alpine Linux (musl) in 1.14.50** (24 comments, 12 👍)
   Regression from 1.14.48→1.14.50. The `getcontext` symbol is unresolved under musl libc, blocking all Alpine/edge users. Still unresolved across multiple patch releases.

4. **[#29786](https://github.com/anomalyco/opencode/issues/29786) — Opus 4.8 bug in dev branch** (19 comments, 3 👍)
   Sub-agent errors when using Anthropic's Opus 4.8 on the dev branch. Blocks early adopters testing bleeding-edge models.

5. **[#8832](https://github.com/anomalyco/opencode/issues/8832) — opencode not respecting permissions** (15 comments, 7 👍)
   Another permissions-bypass report (separate from #16331), confirming this is a systemic problem rather than an edge case.

6. **[#17519](https://github.com/anomalyco/opencode/issues/17519) — Vertex AI Gemini crashes during active sessions** (10 comments, 5 👍)
   Vertex AI Gemini Flash preview models work initially but crash mid-session with "must include at least one parts field" errors, after which all new sessions also fail.

7. **[#5200](https://github.com/anomalyco/opencode/issues/5200) — `/compact` should use OpenAI Responses API compaction** (8 comments, 23 👍)
   Request to integrate GPT-5's native compaction API for context management instead of the current summarization approach. High 👍 relative to comments indicates broad but quiet support.

8. **[#29992](https://github.com/anomalyco/opencode/issues/29992) — Auto-scroll stops working after manual scroll** (7 comments, 12 👍)
   A TUI UX regression: scrolling up to read history and returning to the bottom breaks auto-scroll for the rest of the session. Directly impacts daily usability.

9. **[#30104](https://github.com/anomalyco/opencode/issues/30104) — Desktop MCP tab shows "No MCPs configured" despite working CLI** (7 comments, 9 👍)
   v1.15.13 Desktop app fails to display MCP servers that are properly connected via CLI. Likely related to the race condition identified in #30130.

10. **[#30265](https://github.com/anomalyco/opencode/issues/30265) — MCP broken on v1.15.13** (5 comments, 3 👍)
    Independent confirmation that v1.15.13 broke MCP loading entirely—config is present but the list is empty. Appears to be a widespread regression.

---

## 4. Key PR Progress

1. **[#30287](https://github.com/anomalyco/opencode/pull/30287) — `feat(core): add location-based permission service`** (thdxr)
   Introduces `PermissionV2` with `action`/`resource`/`decision` schemas, normalized project-level remembered grants, and DB migrations. Directly addresses the systemic permissions failures (#16331, #8832). The most architecturally significant PR of the day.

2. **[#30290](https://github.com/anomalyco/opencode/pull/30290) — `fix(tui): keep configured model when navigating sessions`** (rekram1-node)
   Prevents session navigation from overwriting an explicitly configured `model`/`default_agent` in the per-agent model store. Fixes the model-selection overwrite bug reported in #13456.

3. **[#30288](https://github.com/anomalyco/opencode/pull/30288) — `fix(opencode): inherit MCP tool allow permissions in subagent sessions`** (ollikurki)
   Subagents spawned via the Task tool now inherit MCP tool allow permissions. Fixes #16491 and #3808, unblocking multi-agent MCP workflows.

4. **[#30181](https://github.com/anomalyco/opencode/pull/30181) — `feat(core): update Copilot for token-based billing`** (rekram1-node) ✅ Merged
   Migrates Copilot to a new API version with dynamic model/pricing discovery and proper session cost tracking. Important for GitHub Copilot subscribers.

5. **[#30293](https://github.com/anomalyco/opencode/pull/30293) — `fix(ui): heal incomplete backticks in streaming text`** (agent-daryl)
   Fixes truncated streaming responses containing backticks by deferring partial code-block rendering until complete. Closes #15774.

6. **[#30278](https://github.com/anomalyco/opencode/pull/30278) — `fix(tui): deliver live events for sessions resumed with -s across directories`** (sjawhar)
   Restores real-time TUI updates when resuming a session from a different working directory via `opencode -s <id>`. Fixes #28581.

7. **[#30019](https://github.com/anomalyco/opencode/pull/30019) — `feat(mcp): add TUI notifications for plugins`** (Shodocan)
   Adds an MCP↔TUI notification bridge so MCP servers can push messages to the active TUI session. Enables progress indicators and status updates from external tools.

8. **[#29928](https://github.com/anomalyco/opencode/pull/29928) — `fix(desktop): collapse full-context git diffs`** (dayhaysoos)
   Desktop Git Changes view was rendering entire file contents for patches with full-file context. This PR collapses them to standard diff hunks.

9. **[#29874](https://github.com/anomalyco/opencode/pull/29874) — `fix(opencode): avoid rendering oversized snapshot diffs`** (Yoshi-OOF)
   Prevents large snapshot diffs from hanging session loading. Adds size-based skipping with partial fallback rendering.

10. **[#30269](https://github.com/anomalyco/opencode/pull/30269) — `feat(tui): add internal debug frames`** (kitlangton)
    Introduces a debug-only fixture transport for rendering static TUI frames through the real rendering pipeline. A developer-experience improvement for TUI contributors.

---

## 5. Feature Request Trends

| Direction | Signals | Traction |
|---|---|---|
| **Go subscription value adjustments** | DeepSeek V4 Pro 75% price cut → users want higher usage caps (#28846) | 🔥 57 👍 |
| **More model provider integrations** | Minimax M3 (#30210, 13 👍), Minimax M2.5 (#13362, 11 👍) | Consistent demand for emerging providers |
| **Native compaction for context management** | OpenAI Responses API `/compact` integration (#5200) | 23 👍, technical depth |
| **Git submodule support** | Desktop can't manage submodule sessions (#7769) | 13 👍 |
| **Session metadata in UI** | Show session start time/age in sidebar (#30282) | Reasonable UX request |
| **Permission system overhaul** | Multiple issues confirm current system is unreliable | Community consensus |

**Trend:** The community is pushing for OpenCode Go to deliver better per-dollar value as underlying API costs drop, while also requesting support for newer, cheaper model providers (Minimax, DeepSeek). The permissions system is widely acknowledged as broken and in need of the V2 rewrite in progress.

---

## 6. Developer Pain Points

- **Permissions are unreliable:** At least three long-open issues (#16331, #8832, #30291) report that `deny` rules, `edit` restrictions, and MCP filesystem tool gates are silently bypassed. This erodes trust in OpenCode as a safe coding agent. The PermissionV2 PR (#30287) is the hoped-for fix.

- **v1.15.13 Desktop MCP regression:** Multiple reports (#30265, #30104, #30130) confirm MCP servers fail to load in the Desktop app due to a race condition (PR #28937), while the CLI works fine. This blocks a core workflow for Desktop users.

- **TUI rendering and UX bugs:** Auto-scroll breakage (#29992), Question tool panels not rendering (#30246), high CPU/memory on macOS ARM64 (#30126), and Alpine/musl incompatibility (#27589) collectively suggest the TUI layer needs a stabilization pass.

- **Model/provider reliability gaps:** Opus 4.8 errors on dev branch (#29786), Vertex AI Gemini mid-session crashes (#17519), `claude-opus-4-6` returning 500s on Zen (#30283), and Requesty not loading approved models (#16344) indicate fragile provider adapter layers—especially for non-OpenAI providers.

- **Remote environment limitations:** Clipboard copy fails in devcontainers (#8237), code-server, and Codespaces (#26459). These are table-stakes for cloud-native dev workflows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-06-02

## 1. Today's Highlights
The Pi ecosystem saw a massive influx of community contributions today, focusing heavily on hardening the TUI against edge cases (CJK input, Kitty image rendering, and overlay crashes) and expanding LLM provider support to include the newly released **MiniMax-M3** and **Gemini 3.5 Flash**. Significant architectural improvements also landed, including better extension event hooks (`ui_prompt_start/end`), configurability for keybindings, and crucial bug fixes for persistent session hangs across various LLM providers. 

## 2. Releases
No new official releases were published in the last 24 hours. Development remains focused on merging feature PRs and resolving stability bugs for the next version bump.

## 3. Hot Issues

1. **[OPEN] openai-codex can hang on Working... with zero-usage aborted turns ([#4945](https://github.com/earendil-works/pi/issues/4945))**
   *The most active issue today (50 comments).* Users report `gpt-5.5` leaving the interactive TUI permanently stuck on "Working..." without streaming text or throwing errors. This requires a manual escape, resulting in corrupted zero-usage turn history.
2. **[OPEN] Anthropic provider modifies thinking blocks causing 400 errors ([#5223](https://github.com/earendil-works/pi/issues/5223))**
   Multi-turn conversations with Claude Opus 4.8 (adaptive thinking) fail mid-session due to invalid `thinking` or `redacted_thinking` blocks in the message array. This is a high-priority blocker for advanced Claude users.
3. **[CLOSED] Doesn't seem to respect `timeoutMs` past a certain value ([#5089](https://github.com/earendil-works/pi/issues/5089))**
   Users running heavy local models (like Qwen 3.6 27b q8 on CPU) hit unexpected timeouts during long file reads. The internal `timeoutMs` fails to keep the connection alive past a certain threshold.
4. **[OPEN] MiniMax on OpenRouter is broken ([#5229](https://github.com/earendil-works/pi/issues/5229))**
   *Update: Fixed via PR [#5221](https://github.com/earendil-works/pi/pull/5221).* OpenRouter rejects MiniMax requests because Pi sends the unsupported `developer` role instead of `system`.
5. **[CLOSED] Minimax m3 support ([#5271](https://github.com/earendil-works/pi/issues/5271))**
   Users successfully petitioned to add the newly released MiniMax-M3 (featuring 1M-context MSA and native multimodality) to the native provider catalog.
6. **[OPEN] Make in-session model and thinking-level changes ephemeral by default ([#5263](https://github.com/earendil-works/pi/issues/5263))**
   A highly requested UX change. Users want mid-session model switches (via `/settings`) to apply only to the current session rather than altering global defaults.
7. **[CLOSED] Add support for Gemini 3.5 Flash on Google Vertex AI ([#5011](https://github.com/earendil-works/pi/issues/5011))**
   The recently announced `gemini-3.5-flash` triggers an immediate `FailoverError` in the `google-vertex` provider. Users are requesting a quick catalog update.
8. **[OPEN] SDK embed requires package-adjacent `package.json` at runtime ([#5226](https://github.com/earendil-works/pi/issues/5226))**
   Breaking for advanced users: bundling `@earendil-works/pi-coding-agent` into a custom Node app crashes if the bundled environment lacks an adjacent `package.json`.
9. **[OPEN] Missing pricing info for Github Copilot models ([#5286](https://github.com/earendil-works/pi/issues/5286))**
   With GitHub Copilot's shift to per-token pricing, Pi still displays `$0.000 (sub)`, making cost-tracking impossible for Copilot users.
10. **[CLOSED] Wrap `forwardStream` in try/catch to prevent silent hang ([#5290](https://github.com/earendil-works/pi/issues/5290))**
    Highlighting a core architectural pain point: unhandled provider stream errors silently crash `target.end()`, resulting in the widespread "Working..." hang.

## 4. Key PR Progress

1. **[OPEN] Add `ui_prompt_start`/`ui_prompt_end` extension events ([#5302](https://github.com/earendil-works/pi/pull/5302))**
   Introduces new lifecycle hooks for extensions, allowing external status bars and multiplexers to react when Pi opens/closes blocking UI dialogs.
2. **[CLOSED] Fix OpenRouter reasoning instruction role ([#5221](https://github.com/earendil-works/pi/pull/5221))**
   Corrects a critical integration bug by forcing `system` messages for OpenRouter reasoning requests, reserving `developer` exclusively for native OpenAI models.
3. **[CLOSED] Add MiniMax-M3 to minimax and minimax-cn ([#5284](https://github.com/earendil-works/pi/pull/5284))**
   Adds native support for the flagship MiniMax-M3 model, enabling 512K context, 128K max output, and native multimodal vision/reasoning.
4. **[CLOSED] Fix TUI overlay CJK strict wide-char boundary ([#5295](https://github.com/earendil-works/pi/pull/5295))**
   Fixes an annoying UI glitch where overlay columns sliced right through the middle of wide CJK graphemes, causing visual corruption.
5. **[CLOSED] Fix: Don't decode non-image binary files as UTF-8 in read tool ([#5288](https://github.com/earendil-works/pi/pull/5288))**
   Prevents the agent from crashing or corrupting memory when reading binary files by adding proper base64/byte handling for non-image, non-text files.
6. **[CLOSED] Keep Kitty images visible in WezTerm ([#5296](https://github.com/earendil-works/pi/pull/5296))**
   Supersedes an earlier patch to perfectly balance Kitty inline image rendering for WezTerm without breaking UI placement for tall images on standard terminals.
7. **[OPEN] Support keybindings for all commands ([#5281](https://github.com/earendil-works/pi/pull/5281))**
   A major UX enhancement that unifies built-in and extension command handling, allowing users to map custom keybindings to *any* command via a `cmd.<name>` convention.
8. **[CLOSED] Add `gitContextBoundary` setting ([#5277](https://github.com/earendil-works/pi/pull/5277))**
   Prevents a global `AGENTS.md` in the `$HOME` directory from leaking into every project by forcing the context walker to stop at the Git repository root.
9. **[CLOSED] Sanitize local model artifacts in tool `prepareArguments` ([#5308](https://github.com/earendil-works/pi/pull/5308))**
   Excellent local-model hardening: strips YAML frontmatter leakage and Markdown formatting from outputs generated by models like Qwen 3.6 and DeepSeek.
10. **[CLOSED] Fix: `/new` inside `--no-session` creates ephemeral session ([#5273](https://github.com/earendil-works/pi/pull/5273))**
    Fixes a privacy/UX bug where users utilizing `--no-session` (in-memory) accidentally wrote persistent `.jsonl` history files to disk when starting a new session.

## 5. Feature Request Trends

* **New Model Integrations & Hardware Support:** The community is extremely quick to adopt new models. There is a rapid push for native integrations of **MiniMax-M3**, **Gemini 3.5 Flash**, and **Anthropic via Vertex AI**. 
* **Rich Media in CLI:** SSH/remote users are heavily requesting the ability to attach and analyze local image files (`.jpeg`, `.png`) directly via the CLI prompt to utilize vision models like Gemma 4.
* **Session Management Enhancements:** Users want finer control over session lifecycles. Specifically, naming sessions directly from `/new`, `/clone`, and `/fork` commands, as well as ephemeral model switches that don't alter global configurations.

## 6. Developer Pain Points

* **TUI "Working..." Hangs:** The single biggest frustration remains the CLI locking up silently on "Working...". This is caused by a combination of unhandled stream errors, OpenAI timeouts, and Anthropic reasoning-block mismatches. 
* **Local/Edge-Model Edge Cases:** Developers running local models (Qwen 3.6/3.7, DeepSeek) via llama.cpp continue to struggle with Pi's timeout limits and invalid tool-argument generation. Local LLMs frequently hallucinate formatting, requiring more robust sanitization layers in Pi's tool-execution pipeline.
* **Packaging & Environment Leaks:** Embedding the Pi SDK into broader Node applications is fragile due to hardcoded reliance on adjacent `package.json` files and `process.env` reads directly within TUI components rather than using dependency injection.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-06-02

## 1. Today's Highlights
Qwen Code shipped **v0.17.0-nightly.20260601**, addressing a critical rewind bug that caused false "compressed turn" errors during mid-turn interruptions. The community remains highly focused on **stability and resource management**, with multiple reports of OOM crashes during `--resume` sessions and aggressive memory leaks. Meanwhile, contributor momentum around the **daemon mode architecture** and **Vim mode hardening** continues to grow, with several high-quality PRs submitted today.

## 2. Releases

### [v0.17.0-nightly.20260601.1c48e4121](https://github.com/QwenLM/qwen-code/pull/4626)
- **Fixed:** A false "compressed turn" error that triggered when a mid-turn message interruption occurred during the rewind process. This resolves a frustrating UX issue where users who interrupted the model mid-generation would see corrupted session state.

---

## 3. Hot Issues

1. **[OOM on `--resume` due to Memory Leak](https://github.com/QwenLM/qwen-code/issues/4624)** 👍 2  
   *Why it matters:* `qwen --resume` causes child process memory to climb hundreds of MBs per operation and never release, eventually crashing. This is a critical blocker for long-running sessions and has gained quick community validation.

2. **[Auto-mode Classifier Times Out Too Easily](https://github.com/QwenLM/qwen-code/issues/4676)** 👍 1  
   *Why it matters:* In AUTO approval mode, the two-stage LLM classifier fails *closed* on any timeout, blocking actions as "infrastructure failures." Users report this is overly aggressive and degrades the agentic experience.

3. **[Windows UI Bug Doubles Token Count](https://github.com/QwenLM/qwen-code/issues/4420)**  
   *Why it matters:* On Windows 11 (Git Bash), CLI rendering completely breaks in v0.16.0+, causing garbled UI and phantom token doubling. This is a P1 visibility issue for a large user segment.

4. **[Vim Mode Esc Key Leak and Enter Bug](https://github.com/QwenLM/qwen-code/issues/4675)**  
   *Why it matters:* Esc in INSERT mode leaks to the AppContainer handler (clearing input/interrupting model), and Enter doesn't send in NORMAL mode. Core usability for Vim enthusiasts is broken.

5. **[Qwen3.7-max Infinite Repetition Loop](https://github.com/QwenLM/qwen-code/issues/4686)**  
   *Why it matters:* When using thinking mode with Qwen3.7-Max, the model intermittently falls into an infinite repetition loop during streaming, requiring forced termination.

6. **[MCP Connection Instability on Windows](https://github.com/QwenLM/qwen-code/issues/4641)**  
   *Why it matters:* With 8 MCP servers configured, only 3-5 actually connect per session, and *which* ones succeed is non-deterministic. MCP reliability is essential for the tool-augmented workflow.

7. **[Auto-accept/YOLO Mode Read Errors Delay File Updates](https://github.com/QwenLM/qwen-code/issues/4672)**  
   *Why it matters:* In automated modes, file read errors cause writes to be silently skipped until the next prompt, forcing users to re-issue commands. A significant efficiency killer.

8. **[Body Timeout Errors on Long Tasks](https://github.com/QwenLM/qwen-code/issues/4604)**  
   *Why it matters:* Prompts processing web pages or long-context tasks hit `Body Timeout Error`, suggesting infrastructure timeout defaults are too aggressive for complex agentic loops.

9. **[Ollama + Qwen 3.6 Cannot Complete Tasks](https://github.com/QwenLM/qwen-code/issues/4657)**  
   *Why it matters:* Local LLM users report Qwen Code simply failing to finish tasks when paired with Ollama, pointing to compatibility gaps with local model serving.

10. **[Request for SDK: Resume Unfinished Turns Natively](https://github.com/QwenLM/qwen-code/issues/4679)**  
    *Why it matters:* Currently, resuming an interrupted session requires injecting a synthetic "continue" prompt. A first-class SDK primitive for turn resumption would improve programmatic integrations significantly.

---

## 4. Key PR Progress

1. **[Fix Vim Mode Esc Leak, Enter Submit, Render Lag](https://github.com/QwenLM/qwen-code/pull/4677)** by @zzhenyao  
   Comprehensive fix for three Vim mode bugs plus implementation of missing NORMAL mode commands. Directly addresses issue #4675.

2. **[Harden Auto Mode Self-Modification Checks](https://github.com/QwenLM/qwen-code/pull/4572)** by @qqqys  
   Prevents writes to Qwen Code configuration, instructions, hooks, and MCP config from bypassing the classifier via workspace edit fast-paths. A significant security hardening.

3. **[Standalone Auto-Update Support](https://github.com/QwenLM/qwen-code/pull/4629)** by @yiliang114  
   Adds self-update for standalone installations (non-npm), with SHA256 verification and atomic binary replacement. Important for the growing standalone installer audience.

4. **[Auto-Dump Memory Diagnostics on Pressure](https://github.com/QwenLM/qwen-code/pull/4654)** by @yiliang114  
   Writes lightweight diagnostics JSON to disk when memory pressure is detected, surviving OOM crashes. Directly aids debugging issue #4624.

5. **[CPU Profiling for Chrome DevTools](https://github.com/QwenLM/qwen-code/pull/4620)** by @yiliang114  
   Adds `.cpuprofile` generation via env var, `SIGUSR1` signal toggle, or programmatic API. A powerful tool for debugging performance bottlenecks.

6. **[Inject Context Env Vars into Shell Subprocesses](https://github.com/QwenLM/qwen-code/pull/4649)** by @yiliang114  
   Automatically injects `QWEN_CODE_SESSION_ID`, `AGENT_ID`, `PROMPT_ID` into all shell spawn points. Enables business scripts to correlate execution context.

7. **[Extract DaemonWorkspaceService from AcpSessionBridge](https://github.com/QwenLM/qwen-code/pull/4563)** by @doudouOUC  
   Refactors workspace-level operations out of the session bridge into a dedicated facade. A clean architectural separation for the daemon mode evolution.

8. **[Expand Daemon Telemetry Route Coverage](https://github.com/QwenLM/qwen-code/pull/4682)** by @doudouOUC  
   Adds telemetry spans to all daemon write routes and fixes trailing-slash path matching bugs. Improves observability for daemon deployments.

9. **[Truncate Model-Facing Tool Output](https://github.com/QwenLM/qwen-code/pull/4520)** by @Jerry2002tintin  
   Moves tool-output truncation to `CoreToolScheduler` so all tools (not just shell) have bounded output before entering conversation history. Prevents context bloat.

10. **[Fix Clipboard Image Paste on Linux/WSL2](https://github.com/QwenLM/qwen-code/pull/4647)** by @CNCSMonster  
    Replaces the native clipboard module with `wl-paste`/`xclip` on Linux, fixing image paste in WSL2+Wayland. Closes two long-standing issues (#3517, #2885).

---

## 5. Feature Request Trends

- **Session Resilience & Continuity:** Multiple requests for native SDK support to resume interrupted turns (#4679), coupled with the daemon-mode non-blocking prompt RFC (#4582), indicate strong demand for production-grade session durability.
- **Security & Permission Granularity:** Project-scoped `.mcp.json` with pending approval (#4615) and hardened auto-mode self-modification checks (#4572) reflect a maturing security model. Users want fine-grained trust boundaries.
- **Customization & UI Polish:** Statusline ANSI color respect (#4669), improved hooks UI hierarchy (#4536), and `InstructionsLoaded` hook events (#4664) show power users want deeper extensibility at the UI and lifecycle layers.
- **Provider & Model Diversity:** MiniMax-M3 integration (#4663) and ongoing OpenAI-compatible endpoint struggles (#3384) reveal demand for broader model provider support beyond DashScope.

---

## 6. Developer Pain Points

- **Memory management is the top concern.** The `--resume` OOM issue (#4624, 👍 2) combined with unbounded shell output (#4524) and rescue compression retry loops (#4526) paint a picture of a tool that doesn't yet handle long sessions gracefully.
- **Timeouts are too aggressive.** Body timeouts on long tasks (#4604), auto-mode classifier timeouts (#4676), and local LLM task failures (#4657) all point to timeout defaults that are tuned for fast cloud inference, not local or complex agentic workflows.
- **Windows experience lags behind.** UI rendering bugs (#4420), MCP instability (#4641), sandbox argument errors (#4671), and auto-accept file update failures (#4672) cluster on the Windows platform, suggesting it's a second-class citizen in testing.
- **Local/open-source model integration friction.** Users trying to use VLLM, Ollama, or other OpenAI-compatible endpoints consistently hit configuration walls (#3384) and task completion failures (#4657), suggesting the local-LLM path needs first-class QA investment.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-06-02

## 1. Today's Highlights
The most significant update today is the release of **v0.8.49**, which officially renames the project from "DeepSeek TUI" to **CodeWhale**. Legacy binaries (`deepseek`, `deepseek-tui`) will ship as deprecation shims for one cycle before being removed in v0.9.0. Alongside the rebranding, the community is actively grappling with the transition, surfacing migration concerns and contributing numerous PRs to stabilize TUI behavior across Windows, macOS, and Linux.

---

## 2. Releases

### v0.8.49
- **Project Rebrand to CodeWhale**: The application is officially renamed. Legacy binaries are maintained as deprecation shims that print a one-line warning and forward to `codewhale` / `codewhale-tui`. They will be fully removed in v0.9.0.
- **Migration Reference**: Users are directed to `docs/REBRAND.md` for migration instructions.

---

## 3. Hot Issues

1. **[#1615](https://github.com/Hmbown/CodeWhale/issues/1615) [CLOSED] Docker 拉取直接跑乱码** — A highly commented issue (192 comments) where running the Docker container resulted in terminal garble/crash requiring a hard Linux server reset. High community friction around environment setup and API key configuration.
2. **[#2487](https://github.com/Hmbown/CodeWhale/issues/2487) [OPEN] Frequent error: Turn stalled - no completion signal received** — Users in `yolo` mode report frequent UI freezes. This is a recurring stability issue affecting productivity, with duplicates in [#2497](https://github.com/Hmbown/CodeWhale/issues/2497) and [#2496](https://github.com/Hmbown/CodeWhale/issues/2496).
3. **[#1969](https://github.com/Hmbown/CodeWhale/issues/1969) [OPEN] Rebrand migration: Do sessions and skills persist?** — Users are concerned about losing historical sessions, skills, and custom configurations during the transition to CodeWhale. The lack of clear manual migration docs exacerbates anxiety.
4. **[#2492](https://github.com/Hmbown/CodeWhale/issues/2492) [OPEN] 不具备跨会话记忆** — Reports that the tool lacks cross-session memory. Restarting causes it to forget previous context, and manually forcing memory writes doesn't reliably load on next launch.
5. **[#1757](https://github.com/Hmbown/CodeWhale/issues/1757) [CLOSED] Ctrl+C cancel and re-input text into Composer** — Feature request to roll back sent text into the input box upon Ctrl+C cancellation, improving the UX of correcting prompts in the terminal.
6. **[#1186](https://github.com/Hmbown/CodeWhale/issues/1186) [OPEN] Add typed persistent permission rules** — Proposal for a robust execution policy layer supporting scoped tool/command/path rules (`allow`, `deny`, `ask`), essential for enterprise adoption and safe autonomous agent operation.
7. **[#1812](https://github.com/Hmbown/CodeWhale/issues/1812) [OPEN] TUI freeze on Windows (crossterm poll)** — Deep dives into intermittent UI freezes on Windows 11 where the process stays alive but the UI becomes unresponsive. Includes thread-state analysis.
8. **[#2523](https://github.com/Hmbown/CodeWhale/issues/2523) [OPEN] `exec_shell` unavailable despite config opt-in** — Configuration for `allow_shell = true` and `trusted = true` is ignored, blocking shell tool usage in workspaces.
9. **[#2261](https://github.com/Hmbown/CodeWhale/issues/2261) [OPEN] TUI focus leak to PowerShell** — On Windows, a focus loss during AI response causes typed content to execute as PowerShell commands—a critical security and UX defect.
10. **[#534](https://github.com/Hmbown/CodeWhale/issues/534) [OPEN] EPIC: v0.9.0 Phase 3 — Graph-structured memory store** — The core maintainer's roadmap to evolve memory from flat markdown files to a typed, salience-weighted graph structure. Signals a major architectural shift.

---

## 4. Key PR Progress

1. **[#2504](https://github.com/Hmbown/CodeWhale/pull/2504) v0.8.50 triage harvest** — The main maintainer's triage branch harvesting fixes for state migration, turn timeouts, config parsing, and memory system stabilization.
2. **[#2529](https://github.com/Hmbown/CodeWhale/pull/2529) fix(config): honor workspace shell opt-in** — Fixes the bug where workspace-specific `allow_shell = true` was ignored at launch, directly addressing Issue #2523.
3. **[#2538](https://github.com/Hmbown/CodeWhale/pull/2538) fix(mcp): surface invalid stdio output** — Improves MCP error messages by showing a preview of invalid stdio output instead of a generic parse error.
4. **[#2551](https://github.com/Hmbown/CodeWhale/pull/2551) feat(tui): add mention browser completions** — Introduces an opt-in directory-browsing mode for `@` mentions, enabling deterministic child-directory listings.
5. **[#2511](https://github.com/Hmbown/CodeWhale/pull/2511) feat: run ToolCallBefore hooks before tool execution** — Implements Phase 2 of the custom slash command lifecycle hooks architecture, allowing pre-tool-execution hooks.
6. **[#2549](https://github.com/Hmbown/CodeWhale/pull/2549) docs(rebrand): clarify state migration paths** — Documents how sessions, tasks, skills, and MCP configs migrate from `.deepseek` to `.codewhale` paths.
7. **[#2537](https://github.com/Hmbown/CodeWhale/pull/2537) fix(subagent): guard truncated tool calls** — Prevents sub-agents from executing truncated tool calls caused by hitting response token limits in non-streaming mode.
8. **[#2534](https://github.com/Hmbown/CodeWhale/pull/2534) fix(tui): refresh prompt on model switch** — Fixes stale system prompts when switching models via `/model` during a session.
9. **[#2540](https://github.com/Hmbown/CodeWhale/pull/2540) fix(tui): read Wayland clipboard via wl-paste** — Restores clipboard functionality for Linux Wayland users by prioritizing `wl-paste` over the `arboard` crate.
10. **[#2548](https://github.com/Hmbown/CodeWhale/pull/2548) chore: remove orphaned tui-core crate** — Cleans up dead code by removing an unused 192-line `tui-core` scaffold with zero workspace dependencies.

---

## 5. Feature Request Trends

1. **Robust Memory and Session Persistence**: A dominant theme. Users want cross-session memory that survives restarts (#2492) and a migration path from the flat-markdown memory substrate to a structured graph store (#534).
2. **Execution Policy & Permission Systems**: Demand for fine-grained, persistent permission rules for tool execution, shell commands, and file paths (#1186, #1917), crucial for "YOLO" mode safety.
3. **Provider and Model Extensibility**: Support for custom OpenAI-compatible endpoints, OpenRouter configurations, local models, and third-party providers like opencode-go (#1978, #2478, #2436).
4. **Windows Terminal Stability**: TUI freezes, IME deadlocks, and focus leaks on Windows represent a significant chunk of requests, highlighting the need for better crossterm/Windows integration (#1812, #2261, #1835).
5. **macOS/iTerm2 Usability**: Mac users report keybinding mismatches, newline handling issues in the composer, and session management friction (#2494).

---

## 6. Developer Pain Points

1. **Rebranding Confusion**: The rename to CodeWhale has caused immediate anxiety about data loss. Users are unsure if historical sessions, skills, and configurations will survive the transition, and the documentation hasn't caught up (#1969).
2. **Turn Stalling / UI Freezing**: Frequent "Turn stalled - no completion signal received" errors and complete TUI freezes across Windows and macOS are causing significant workflow disruptions (#2487, #1812). The `yolo` mode is particularly affected.
3. **Configuration Fragmentation and Failures**: Config files are fragmented across `.deepseek` and `.codewhale` directories, and parser regressions (e.g., `tui.status_items` being incorrectly required) are breaking launches out-of-the-box (#2369, #2483).
4. **Cross-Platform Clipboard and Input Handling**: Linux Wayland users lack clipboard support, and Windows users with IMEs (e.g., Sogou) face keystroke deadlocks. Focus leaks in terminal environments pose both usability and security risks (#2261, #1835).
5. **Provider Compatibility Friction**: Connecting non-native providers (Kimi, OpenRouter gateways, local models) often fails due to tool schema rejections or misunderstood cache capabilities, requiring deep debugging by end-users (#2438, #1978).

</details>