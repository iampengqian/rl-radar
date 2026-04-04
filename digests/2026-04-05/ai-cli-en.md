# AI CLI Tools Community Digest 2026-04-05

> Generated: 2026-04-04 22:03 UTC | Tools covered: 7

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

# AI Developer Tools Ecosystem Cross-Tool Analysis
**Report Date:** 2026-04-05

## 1. Ecosystem Overview
The AI CLI tool ecosystem is experiencing a rapid maturation phase, shifting from simple code completion to complex **agentic workflows** capable of autonomous task execution. The dominant technical trend is the migration toward **high-performance runtimes** (Rust, Bun) and **modern UI frameworks** (React Ink) to support richer Terminal User Interfaces (TUIs). Simultaneously, vendors are aggressively differentiating by integrating proprietary features like **remote control**, **subagent orchestration**, and **voice support**, while users across all platforms are increasingly vocal about **resource consumption** (token burning, memory leaks) and **enterprise-grade stability**.

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Primary Focus |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 50 | 6 | **v2.1.92** (Stable) | Enterprise policies, Bedrock setup, handling session limit backlash. |
| **OpenAI Codex** | High Activity* | 10+ | **v0.119.0-alpha.x** (3 releases) | Aggressive Rust migration, WebRTC audio, fixing sandbox regressions. |
| **Gemini CLI** | 10+ | 10 | None | Architectural refactors (Context Manager), SSH stability, AST tooling. |
| **Copilot CLI** | 10+ | 0 | **v1.0.18** (Stable) | "Critic" agent, multi-device auth regression, rate limit friction. |
| **Kimi Code** | 10+ | 7 | None | **Major Rewrite** (Python → TS/Bun), QoL features (TPS meter, /btw). |
| **OpenCode** | 10+ | 10 | **v1.3.15** (Stable) | Patching Windows regressions, memory leak triage, proxy support. |
| **Qwen Code** | 10+ | 10 | Failed Nightly | Parallel agent teams, UI fixes, clipboard handling. |

*\*Note: OpenAI Codex maintains high volume in alpha releases and issue discussions regarding performance.*

## 3. Shared Feature Directions

The community feedback reveals converging requirements across all major tools:

*   **Multimodal Input Support (Image Paste):**
    *   **Need:** Users universally demand the ability to paste screenshots/images into the CLI for debugging UI issues or logs.
    *   **Tools:** Requested in Claude Code (#12644, #32005), Copilot CLI (#1276), Qwen Code (#2885, #2605), and causing crashes in Kimi (#1757) and OpenCode (#6455 PR).
*   **Performance Observability (TPS & Token Usage):**
    *   **Need:** Developers want real-time metrics like "Tokens Per Second" (TPS) and transparency into token consumption/costs.
    *   **Tools:** Kimi is adding a TPS meter (#1760); OpenCode users requested it (#6096); Claude Code users are fighting "token burning" (#38335).
*   **Context Management & Compaction:**
    *   **Need:** As agents run longer, users need ways to manage context windows without losing critical data or experiencing "fake completions" when limits are hit.
    *   **Tools:** Gemini is building an "Episodic Context Manager" (#24643); Copilot users want auto-compaction toggles (#2333); Codex reports compaction regressions (#16812).
*   **Remote & Cross-Device Workflows:**
    *   **Need:** Decoupling the development environment from specific hardware (Mobile <-> Desktop).
    *   **Tools:** Claude Code offers "Remote Control" (buggy #28758); Kimi users explicitly requested it (#1282).

## 4. Differentiation Analysis

*   **Architectural Strategy:**
    *   **OpenAI Codex & Kimi Code** are pursuing aggressive **performance rewrites**. Codex is pushing hard on a **Rust-based CLI** (3 alpha releases in one day), while Kimi is debating a full migration to **Bun + TypeScript + React Ink** (#1707) to replace Python.
    *   **Gemini CLI** is focusing on **structural intelligence**, investigating AST-aware tools (#22745) and immutable pipelines for context, rather than just UI rewrites.

*   **Agent Orchestration:**
    *   **Qwen Code** is differentiating with **parallelism**, introducing "Agent Teams" where sub-agents work in parallel (#2886).
    *   **GitHub Copilot** is focusing on **safety/review** with its new "Critic" agent that reviews plans before execution.
    *   **Gemini** is focusing on **reliability**, specifically tackling "false positive" completion states where agents claim success but actually timed out (#22323).

*   **Target Audience:**
    *   **Claude Code** is clearly targeting **Enterprise**, releasing features like `forceRemoteSettingsRefresh` and Bedrock wizards.
    *   **OpenCode** and **Qwen Code** appear more focused on the **individual power user** or **open-source community**, addressing issues like proxy support for restricted networks and local LLM timeouts.

## 5. Community Momentum & Maturity

*   **Most Rapid Iteration:** **OpenAI Codex**. The release of three Rust alpha versions in 24 hours, alongside major PRs for WebRTC and Exec Server architecture, indicates a high-velocity sprint toward a stable Rust client.
*   **Most Active Community Backlash:** **Claude Code**. The "Max plan session limits" issue (#38335) with 411 comments and 337 upvotes is the single most active discussion today. It signals a maturity crisis where users are hitting economic limits of the "agentic" workflow.
*   **Emerging Challenger:** **Kimi Code**. The discussion around the TypeScript rewrite (#1707) and the rapid implementation of QoL features (TPS, /btw) suggests a project trying to modernize quickly to catch up with incumbents.
*   **Stable Maintenance:** **GitHub Copilot CLI**. With only 1 release and 0 PR updates in the digest, it appears to be in a maintenance/stabilization phase, though suffering from growing pains regarding auth and rate limits.

## 6. Trend Signals

1.  **The "Runtime" Wars are Here:** The era of Python/Node-based CLI wrappers is ending. The complexity of TUIs (reactive rendering) and the need for low-latency agent loops are driving tools toward **Rust** (Codex) and **Bun/TypeScript** (Kimi, OpenCode).
2.  **User Revolt on "Black Box" Accounting:** The massive engagement on Claude Code's session limits and Copilot's "Premium Request" consumption indicates a market failure in **pricing transparency**. Developers will gravitate toward tools that offer granular control over token usage and clear "stop" mechanisms.
3.  **The "Agentic" Reliability Gap:** As tools become more autonomous (scheduled tasks, subagents), **reliability is degrading**. Issues like Codex's governance failure (#16798), Gemini's false positives (#22323), and Claude's scheduled task outages (#43440) show that autonomous agents are still fragile and require better feedback loops.
4.  **Clipboard & Environment Fragmentation:** Despite "AI" advancements, basic **OS integration remains a hurdle**. Wayland vs. X11 clipboard issues, Alpine Linux segfaults, and Windows path handling are causing significant friction, signaling a need for better cross-platform testing infrastructure.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-04-05 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

Based on community attention and discussion activity, here are the most notable Skills currently in the ecosystem:

| Rank | Skill | Author | Status | Focus Area |
|------|-------|--------|--------|------------|
| 1 | **document-typography** | PGTBoos | OPEN | Document Quality |
| 2 | **frontend-design** (improved) | justinwetch | OPEN | UI/UX |
| 3 | **skill-quality-analyzer / skill-security-analyzer** | eoviciu | OPEN | Meta/Tooling |
| 4 | **ODT (OpenDocument)** | GitHubNewbie0 | OPEN | Document Format |
| 5 | **CONTRIBUTING.md** | narenkatakam | OPEN | Repo Health |
| 6 | **SAP-RPT-1-OSS predictor** | amitlals | OPEN | Enterprise/Analytics |
| 7 | **shodh-memory** | varun29ankuS | OPEN | AI Memory/Context |
| 8 | **sensory (macOS automation)** | AdelElo13 | OPEN | OS Automation |

### Detailed Breakdown

**1. [document-typography](https://github.com/anthropics/skills/pull/514)** *(OPEN)*
Addresses a universal pain point: typographic quality control in AI-generated documents. Targets orphan word wrap, widow paragraphs, and numbering misalignment—issues that affect nearly every document Claude creates but users rarely explicitly request fixes for.

**2. [frontend-design (improved)](https://github.com/anthropics/skills/pull/210)** *(OPEN)*
A significant revision to improve clarity, actionability, and internal coherence of the existing frontend-design skill. Focuses on ensuring instructions are executable within a single conversation and specific enough to steer Claude's behavior effectively.

**3. [skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** *(OPEN)*
Two meta-skills for the marketplace: a comprehensive quality analysis tool evaluating skills across 5 dimensions (structure, documentation, etc.), and a security analyzer—essential tooling for skill developers.

**4. [ODT Skill](https://github.com/anthropics/skills/pull/486)** *(OPEN)*
Enables creation, template filling, and HTML parsing of OpenDocument text files (.odt)—the ISO-standard format used by LibreOffice, OpenOffice, and Google Docs.

**5. [CONTRIBUTING.md Addition](https://github.com/anthropics/skills/pull/509)** *(OPEN)*
Addresses community health gap (Issue #452)—the repo currently scores only 25% on GitHub's community health metrics. A foundational improvement for contributor experience.

**6. [SAP-RPT-1-OSS Predictor](https://github.com/anthropics/skills/pull/181)** *(OPEN)*
Leverages SAP's open-source tabular foundation model for predictive analytics on SAP business data—targeting enterprise workflows.

**7. [shodh-memory](https://github.com/anthropics/skills/pull/154)** *(OPEN)*
A persistent memory system for AI agents that maintains context across conversations. Teaches Claude when to call `proactive_context` and how to structure rich memory content.

**8. [sensory (macOS Automation)](https://github.com/anthropics/skills/pull/806)** *(OPEN)*
Native macOS automation via AppleScript/osascript instead of screenshot-based computer use. Features a two-tier permission system for direct app scripting and System Events UI automation.

---

## 2. Community Demand Trends

Analysis of Issues reveals the most sought-after Skill directions:

| Trend | Description | Evidence |
|-------|-------------|----------|
| **Enterprise/Org Sharing** | Organization-wide skill libraries and direct sharing links | [Issue #228](https://github.com/anthropics/skills/issues/228) — Skills should be shareable within orgs without manual file transfers |
| **Security & Governance** | Trust boundaries, policy enforcement, audit trails | [Issue #492](https://github.com/anthropics/skills/issues/492) — Namespace trust vulnerability; [Issue #412](https://github.com/anthropics/skills/issues/412) — Agent governance patterns |
| **MCP Integration** | Exposing Skills as Model Context Protocol APIs | [Issue #16](https://github.com/anthropics/skills/issues/16) — Convert skills to callable MCP endpoints |
| **Cross-Platform Support** | Bedrock compatibility, API access for enterprise | [Issue #29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock support; [Issue #532](https://github.com/anthropics/skills/issues/532) — SSO/Enterprise API key issues |
| **Skill Deduplication** | Plugin architecture cleanup | [Issue #189](https://github.com/anthropics/skills/issues/189) — document-skills and example-skills install identical content |
| **Quality Tooling** | Better validation and testing frameworks | [Issue #202](https://github.com/anthropics/skills/issues/202) — skill-creator best practices; [Issue #556](https://github.com/anthropics/skills/issues/556) — Eval script 0% trigger rate |

---

## 3. High-Potential Pending Skills

Active PRs with strong utility that may merge soon:

| Skill | PR | Why It Matters |
|-------|-----|----------------|
| **DOCX Tracked Changes Fix** | [#541](https://github.com/anthropics/skills/pull/541) | Critical bug fix for document corruption when adding tracked changes to documents with existing bookmarks |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive testing skill covering Testing Trophy, AAA pattern, React Testing Library, and more |
| **Quality Playbook** | [#659](https://github.com/anthropics/skills/pull/659) | Revives traditional quality engineering using AI—works from requirements, not source code |
| **Masonry AI Media Generation** | [#335](https://github.com/anthropics/skills/pull/335) | CLI skill for Imagen 3.0 and Veo 3.1 image/video generation |
| **Codebase Inventory Audit** | [#147](https://github.com/anthropics/skills/pull/147) | 10-step workflow for identifying orphaned code, unused files, and documentation gaps |
| **YAML Validation Fix** | [#539](https://github.com/anthropics/skills/pull/539) | Pre-parse validation for unquoted descriptions with special characters—prevents silent failures |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade features: organization-wide skill sharing, security/trust boundaries, and reliable API/platform integration—reflecting a maturing user base moving beyond experimentation to production deployment.**

---

# Claude Code Community Digest — 2026-04-05

## Today's Highlights

Version **v2.1.92** was released, introducing a `forceRemoteSettingsRefresh` policy for fail-closed enterprise configurations and an interactive **Bedrock setup wizard** accessible from the login screen. Meanwhile, the community continues to voice significant concerns around **Max plan session limits** (Issue #38335), which has accumulated 411 comments and 337 👍—making it the most active issue by far. Several new bugs around **Cloud IDE permissions**, **scheduled tasks API failures**, and **Windows Cowork mode** were also reported.

---

## Releases

### v2.1.92
- **`forceRemoteSettingsRefresh` policy**: When enabled, the CLI blocks startup until remote managed settings are freshly fetched. If the fetch fails, the CLI exits (fail-closed behavior)—important for enterprise environments requiring up-to-date policy enforcement.
- **Interactive Bedrock setup wizard**: Accessible from the login screen when selecting "3rd-party providers," simplifying AWS Bedrock configuration for users deploying through AWS infrastructure.

---

## Hot Issues

| # | Issue | Why It Matters |
|---|-------|----------------|
| 1 | [#38335](https://github.com/anthropics/claude-code/issues/38335) — **Max plan session limits exhausted abnormally fast** (411 comments, 337 👍) | The top issue by engagement. Users report CLI usage consuming session limits at an accelerated rate since March 23, 2026. Marked `[invalid]` by maintainers but continues to generate significant community frustration. |
| 2 | [#2990](https://github.com/anthropics/claude-code/issues/2990) — **Automatic light/dark theme selection** (40 comments, 222 👍) | Long-standing enhancement request for the TUI to follow system theme changes automatically. High community demand (222 👍) with no maintainer response yet. |
| 3 | [#28758](https://github.com/anthropics/claude-code/issues/28758) — **Remote Control: session not connecting from mobile app** (27 comments, 32 👍) | macOS users unable to connect to CLI sessions from the iOS mobile app. Affects remote workflows significantly. |
| 4 | [#42796](https://github.com/anthropics/claude-code/issues/42796) — **Claude Code unusable for complex engineering tasks post-Feb updates** (8 comments, 7 👍) | Model behavior regression report—users claim Opus/Sonnet models have degraded in complex engineering scenarios. |
| 5 | [#34751](https://github.com/anthropics/claude-code/issues/34751) — **"Request too large (max 20MB)" error on small files** (20 comments, 14 👍) | Linux users hitting spurious 20MB upload limits when attaching 99KB PNG files—likely a request size calculation bug. |
| 6 | [#41242](https://github.com/anthropics/claude-code/issues/41242) — **~80% ECONNRESET failure rate from Boston area** (11 comments, 2 👍) | Regional networking issue affecting Windows users in the Boston area specifically on March 30, 2026. |
| 7 | [#41034](https://github.com/anthropics/claude-code/issues/41034) — **All sites blocked in Cowork mode (Chrome)** (8 comments, 3 👍) | Cowork mode's browser virtualization now blocks all sites on Windows, breaking previously working workflows. |
| 8 | [#43397](https://github.com/anthropics/claude-code/issues/43397) — **Cloud scheduled tasks cannot access MCP connectors** (4 comments, 1 👍) | Scheduled cloud tasks fail to load MCP tools into session, rendering automated workflows broken. |
| 9 | [#43440](https://github.com/anthropics/claude-code/issues/43440) — **RemoteTrigger / Scheduled Tasks API returns 500** (4 comments) | API at `/v1/code/triggers` returning HTTP 500 for all operations—complete scheduled tasks outage. |
| 10 | [#43644](https://github.com/anthropics/claude-code/issues/43644) — **Cloud IDE sessions ignore permissions.allow rules** (2 comments) | Project-level `.claude/settings.json` permission allowlists are not respected in Claude Code Web sessions. |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| 1 | [#43563](https://github.com/anthropics/claude-code/pull/43563) — **fix: normalize Windows paths in security guidance hook** | Fixes a bug where Windows backslash paths could bypass `.github/workflows/` security checks. Normalizes paths to forward slashes before validation. |
| 2 | [#43559](https://github.com/anthropics/claude-code/pull/43559) — **docs: update plugin install instructions** | Updates documentation to reflect recommended install methods, removing deprecated npm guidance. |
| 3 | [#43598](https://github.com/anthropics/claude-code/pull/43598) — **Add upstream issue sync workflow** | Adds tooling to fetch and normalize upstream issues with robust GitHub CLI pagination handling. |
| 4 | [#41611](https://github.com/anthropics/claude-code/pull/41611) — **add the missing source to claude code** | Community contribution attempting to add missing source files. |
| 5 | [#42604](https://github.com/anthropics/claude-code/pull/42604) — **Remove "retetro-futuristic" recommendation from Frontend Design Skill** | Documentation/style fix for built-in skills. |
| 6 | [#41447](https://github.com/anthropics/claude-code/pull/41447) — **feat: open source claude code** | Community-submitted PR attempting to open-source the codebase (closes 5 related issues). Unlikely to merge but reflects strong community desire. |

---

## Feature Request Trends

1. **Automatic theme switching** — High demand (222 👍 on [#2990](https://github.com/anthropics/claude-code/issues/2990)) for TUI to follow system light/dark mode automatically.

2. **Image/screenshot clipboard paste in CLI** — Multiple requests ([#12644](https://github.com/anthropics/claude-code/issues/12644), [#32005](https://github.com/anthropics/claude-code/issues/32005)) for native image paste support in terminal environments.

3. **Configurable file size limits** — [#40357](https://github.com/anthropics/claude-code/issues/40357) requests making the Read tool's token limit configurable (currently 10k desktop / 25k CLI).

4. **Deny rules with reason/message field** — [#43650](https://github.com/anthropics/claude-code/issues/43650) proposes adding context to permission deny rules to guide agent behavior.

5. **Plugin hook system for AI reactions** — [#43671](https://github.com/anthropics/claude-code/issues/43671) requests a delegate response format so plugins can generate AI responses via Claude Code's session instead of independent API calls.

---

## Developer Pain Points

1. **Max plan session limit accounting** — The dominant frustration ([#38335](https://github.com/anthropics/claude-code/issues/38335)) with 411 comments. Users feel CLI usage consumes sessions faster than expected with no transparency into accounting.

2. **Platform-specific networking failures** — Regional issues like [#41242](https://github.com/anthropics/claude-code/issues/41242) (Boston ECONNRESET) and [#40427](https://github.com/anthropics/claude-code/issues/40427) (Windows virtualization unavailable) create unpredictable reliability.

3. **Cloud/Web feature parity gaps** — Permissions ([#43644](https://github.com/anthropics/claude-code/issues/43644)), MCP connectors ([#43397](https://github.com/anthropics/claude-code/issues/43397)), and scheduled tasks ([#43440](https://github.com/anthropics/claude-code/issues/43440)) all have broken or missing functionality in cloud sessions vs. local CLI.

4. **Remote Control reliability** — [#28758](https://github.com/anthropics/claude-code/issues/28758) highlights ongoing mobile-to-desktop connection issues affecting remote workflows.

5. **Model quality regression concerns** — [#42796](https://github.com/anthropics/claude-code/issues/42796) and [#43670](https://github.com/anthropics/claude-code/issues/43670) reflect user perception that recent model updates have degraded complex engineering capabilities.

---

*Digest generated from 50 issues and 6 PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-04-05

## 1. Today's Highlights
The Codex ecosystem sees a surge in activity surrounding the **v0.119.0-alpha** Rust releases, which are being pushed aggressively alongside significant architectural refactors in the CLI. The primary focus for developers today is troubleshooting **sandbox permission regressions** introduced in recent builds (specifically affecting `v0.118.0` and `v0.119.0`) and persistent **CPU performance issues** on macOS. Additionally, the engineering team is rolling out major infrastructure updates, including a migration from WebSockets to **WebRTC** for realtime audio and enhanced analytics for subagent tracking.

## 2. Releases
Three new alpha versions for the `rust` variant were released in rapid succession, indicating an aggressive integration and testing cycle:
- [rust-v0.119.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.9)
- [rust-v0.119.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.10)
- [rust-v0.119.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.119.0-alpha.11)

## 3. Hot Issues

1.  **[High Priority] Token Burning & Rate Limits**
    [Issue #14593](https://github.com/openai/codex/issues/14593) remains the most active discussion with 431 comments. Users on Business plans report that the IDE extension is consuming tokens at an unsustainable rate, hitting rate limits faster than expected during standard coding tasks.
2.  **[Regression] Sandbox Permission Denied**
    A critical regression in [Issue #16790](https://github.com/openai/codex/issues/16790) and [Issue #16402](https://github.com/openai/codex/issues/16402) reports that CLI `v0.118.0` fails to execute sandboxed commands on Linux due to `bwrap` permission errors (specifically regarding the `.codex` directory).
3.  **[Performance] macOS CPU Spikes**
    [Issue #16231](https://github.com/openai/codex/issues/16231) highlights severe CPU usage and overheating on macOS (Tahoma 26.4 / M5 Pro) following the update to extension version `26.325.31654`.
4.  **[Bug] VS Code "Code Helper" Renderer Lag**
    Users are experiencing UI freezes in VS Code when Codex applies patches. [Issue #15764](https://github.com/openai/codex/issues/15764) notes that the "Code Helper (Renderer)" process exceeds 100% CPU during these operations.
5.  **[Regression] Context Compaction Frequency**
    [Issue #16812](https://github.com/openai/codex/issues/16812) reports that CLI `v0.118` triggers context compaction twice as often as previous versions, leading to an explosion in token usage for long-running sessions.
6.  **[Feature] TUI Task Overview**
    A highly upvoted feature request ([Issue #16680](https://github.com/openai/codex/issues/16680)) asks for an "overview" panel in the CLI to track completed and remaining tasks during long-running autonomous loops.
7.  **[Bug] WSL Filesystem Handling**
    [Issue #13762](https://github.com/openai/codex/issues/13762) and [Issue #16088](https://github.com/openai/codex/issues/16088) detail persistent issues where the Codex Desktop app on Windows incorrectly uses Windows paths (`/mnt/c`) inside WSL environments instead of the native Linux filesystem.
8.  **[Bug] TUI Input Disappearing**
    [Issue #5538](https://github.com/openai/codex/issues/5538) notes a persistent UI bug where user input text vanishes from the terminal while the model is generating a response.
9.  **[Bug] Governance Failure in v0.117**
    A severe report in [Issue #16798](https://github.com/openai/codex/issues/16798) claims a "Total Governance Failure," suggesting the model ignored safety constraints in `v0.117.0`.
10. **[Enhancement] Markdown Export & Formatting**
    Requests for better data portability continue in [Issue #2880](https://github.com/openai/codex/issues/2880) (Copy as Markdown) and [Issue #8259](https://github.com/openai/codex/issues/8259) (Readable Markdown Tables), highlighting friction in documenting AI interactions.

## 4. Key PR Progress

1.  **WebRTC Migration**
    [PR #16805](https://github.com/openai/codex/pull/16805) migrates the realtime audio transport from WebSockets to WebRTC, likely to improve stability and latency for voice features.
2.  **Audio Echo Cancellation**
    [PR #16806](https://github.com/openai/codex/pull/16806) introduces shared audio processing for the TUI to enable proper echo cancellation between microphone and speaker streams.
3.  **Subagent Analytics**
    A stack of PRs ([PR #16706](https://github.com/openai/codex/pull/16706), [PR #16659](https://github.com/openai/codex/pull/16659), [PR #16641](https://github.com/openai/codex/pull/16641)) is being merged to emit detailed analytics for subagents, including token usage and steering metadata.
4.  **Exec Server MVP**
    [PR #16814](https://github.com/openai/codex/pull/16814) lays the groundwork for a new "exec-server" architecture, adding typed startup payloads and session contracts.
5.  **Fix: Orphan Stream Deltas**
    [PR #16803](https://github.com/openai/codex/pull/16803) addresses a crash/bug where the CLI panicked upon receiving reasoning deltas before an active item context existed.
6.  **MCP Server Migration**
    [PR #16804](https://github.com/openai/codex/pull/16804) adds logic to import Claude `mcpServers` configurations into Codex, improving interoperability.
7.  **Fix: Ephemeral Turn Backfill**
    [PR #16795](https://github.com/openai/codex/pull/16795) fixes a regression where `codex exec` attempted to backfill thread history on ephemeral threads, which the server rejects.
8.  **Skill Doc Annotation**
    [PR #16813](https://github.com/openai/codex/pull/16813) improves the TUI display by annotating generic "Read SKILL.md" actions with the actual name of the skill being accessed.
9.  **Bazel Build Restoration**
    [PR #16744](https://github.com/openai/codex/pull/16744) restores `lzma-sys` wiring for Bazel builds to ensure the development environment (devbox) functions correctly.
10. **Realtime Auth Refactor**
    [PR #16769](https://github.com/openai/codex/pull/16769) updates authentication routing for ChatGPT realtime calls, separating v1 intent handling from standard calls.

## 5. Feature Request Trends
-   **TUI Visibility & Control:** Developers want better insight into long-running processes. The demand for an "overview panel" ([#16680](https://github.com/openai/codex/issues/16680)) and better scrollback resizing ([#5259](https://github.com/openai/codex/issues/5259)) suggests the current TUI feels opaque during complex tasks.
-   **Cross-Platform Consistency:** There is a clear trend of frustration regarding WSL and sandbox interactions. Users expect seamless integration between the Windows App and the Linux subsystem without manual path or permission fixes.
-   **Data Portability:** Requests to export chats as Markdown ([#2880](https://github.com/openai/codex/issues/2880)) and fix table formatting ([#8259](https://github.com/openai/codex/issues/8259)) indicate a need to integrate Codex outputs into external documentation workflows.

## 6. Developer Pain Points
-   **Sandbox Permission Regressions:** The `v0.118.0` update has broken workflows for Linux users relying on `bubblewrap` for sandboxing. The error "Can't create file at .codex: Permission denied" is blocking development environments.
-   **Resource Consumption:** Both the Desktop App and VS Code extension are drawing heavy criticism for high CPU usage ([#11981](https://github.com/openai/codex/issues/11981), [#16231](https://github.com/openai/codex/issues/16231)), impacting battery life and system responsiveness.
-   **Cost & Limits:** The "burning tokens" issue ([#14593](https://github.com/openai/codex/issues/14593)) is a major financial friction point, with users feeling the tool consumes resources faster than the utility it provides in certain IDE contexts.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-04-05

## 1. Today's Highlights
Development activity remains high with no new official releases in the last 24 hours, allowing the team to focus on architectural improvements. A significant PR introducing an **Episodic Context Manager** was opened, aiming to refactor context manipulation into an immutable pipeline. Additionally, maintainers are actively triaging high-priority issues regarding **SSH usability** and **Compact Tool Output** formatting.

## 2. Releases
*   **None** (No releases published in the last 24 hours).

## 3. Hot Issues
These issues represent critical bugs, strategic architectural discussions, or high-impact user friction points.

1.  **[P1] Subagent False Positives on Goal Completion** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
    *   **Context:** The `codebase_investigator` subagent reports `status: "success"` even when it hits `MAX_TURNS`, effectively hiding the fact that it was interrupted before finishing analysis.
    *   **Impact:** This misleads users into thinking a task is complete when it has failed, representing a critical reliability issue for autonomous agents.

2.  **SSH Session Text Scrambling** ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202))
    *   **Context:** Users running Gemini CLI over SSH (specifically Windows to gLinux) encounter scrambled text, rendering the tool unusable.
    *   **Impact:** High friction for remote development workflows. A helper function to detect SSH environments is already being tracked in [#24546](https://github.com/google-gemini/gemini-cli/issues/24546).

3.  **AST-Aware Codebase Mapping Investigation** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
    *   **Context:** An epic investigating whether AST (Abstract Syntax Tree) aware tools can improve file reads and code navigation.
    *   **Impact:** Moving from text-based search to AST-aware navigation could significantly reduce token usage and improve the precision of code modifications.

4.  **Search Tool Output Overload** ([#24634](https://github.com/google-gemini/gemini-cli/issues/24634))
    *   **Context:** The search text tool currently lacks truncation/clipping, resulting in massive token consumption and cluttered history when results are large.
    *   **Impact:** Directly affects cost and performance; related to the "Compact Tool Output" initiative.

5.  **[P1] Edit Tool Output Leakage** ([#24644](https://github.com/google-gemini/gemini-cli/issues/24644))
    *   **Context:** When the `Edit` tool fails, unwanted content leaks into the conversation history if compact output is enabled.
    *   **Impact:** Pollutes the context window, potentially confusing the model in subsequent turns.

6.  **Tool Limit Exceeded (400 Error)** ([#24246](https://google-gemini/gemini-cli/issues/24246))
    *   **Context:** The CLI encounters a 400 error when the environment includes more than 128 tools.
    *   **Impact:** Limits extensibility and causes crashes in complex setups with many integrated extensions or MCP servers.

7.  **Memory Routing Strategy** ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819))
    *   **Context:** Discussion on how the memory subagent should decide where to store data: Global (`~/.gemini/`) vs. Project (`.gemini/`).
    *   **Impact:** Essential for preventing project-specific context from polluting global preferences and vice versa.

8.  **Unsafe Object Cloning** ([#22863](https://github.com/google-gemini/gemini-cli/issues/22863))
    *   **Context:** The model frequently generates "unsafe" partial clones of objects (proxies) rather than fully implementing target types.
    *   **Impact:** Leads to runtime type errors and fragile code generation.

9.  **Proactive Memory Storage** ([#22809](https://github.com/google-gemini/gemini-cli/issues/22809))
    *   **Context:** The main agent currently lacks prompting on *when* to save memories (e.g., user preference updates).
    *   **Impact:** Improving this would make the CLI "smarter" and more personalized over time without manual intervention.

10. **Model Steering Guidance CI in Forks** ([#24493](https://github.com/google-gemini/gemini-cli/issues/24493))
    *   **Context:** Internal CI for Model Steering Guidance fails when PRs are submitted from forks.
    *   **Impact:** Hinders external community contributions from passing required checks.

## 4. Key PR Progress
Active development is focused on context management, bug fixes, and expanding editor support.

1.  **feat(core): Implement V0 Episodic Context Manager** ([#24643](https://github.com/google-gemini/gemini-cli/pull/24643))
    *   **Details:** Replaces monolithic string-based context logic with an immutable "Episodic IR" pipeline. Includes processors for history squashing, tool masking, and semantic compression.

2.  **fix(core): prevent PTY resource leak** ([#24694](https://github.com/google-gemini/gemini-cli/pull/24694))
    *   **Details:** Ensures spawned subprocesses (via `node-pty`) are terminated if the CLI process crashes or is force-exited, preventing "zombie" processes on macOS/Linux.

3.  **fix(cli): resolve bunx execution error on Windows** ([#24653](https://github.com/google-gemini/gemini-cli/pull/24653))
    *   **Details:** Fixes a "interpreter executable -S not found" error on Windows caused by a GNU-specific env flag in the shebang.

4.  **feat(cli): add 'extensions select' command** ([#24661](https://github.com/google-gemini/gemini-cli/pull/24661))
    *   **Details:** Introduces a bulk enable/disable command for extensions, improving workflow for users who switch between different tooling subsets.

5.  **fix: false positive binary detection** ([#24685](https://github.com/google-gemini/gemini-cli/pull/24685))
    *   **Details:** Fixes an issue where files containing the Unicode replacement character (U+FFFD) were incorrectly flagged as binary, causing read errors for valid source files.

6.  **feat: Add voice input with pluggable backend** ([#18499](https://github.com/google-gemini/gemini-cli/pull/18499))
    *   **Details:** Implements native voice input using Gemini (zero-install) or Whisper (local) as backends.

7.  **feat(cli): add Sublime Text and Emacs Client editors** ([#21090](https://github.com/google-gemini/gemini-cli/pull/21090))
    *   **Details:** Expands the `$EDITOR` configuration support to include Sublime Text and Emacs Client, alongside improved error messages.

8.  **feat(core): implement additionalContext for BeforeModel hooks** ([#23957](https://github.com/google-gemini/gemini-cli/pull/23957))
    *   **Details:** Enhances the hook system to allow aggregation of context from multiple hooks before the model request is sent.

9.  **feat(mcp): add /mcp remove UI subcommand** ([#20717](https://github.com/google-gemini/gemini-cli/pull/20717))
    *   **Details:** Allows users to interactively remove MCP servers from the configuration directly within the chat session.

10. **fix(ui): hide frames in alternate buffer mode** ([#20066](https://github.com/google-gemini/gemini-cli/pull/20066))
    *   **Details:** Removes UI borders (pipes/corners) when the terminal is in alternate buffer mode, preventing copy-paste artifacts.

## 5. Feature Request Trends
*   **Context-Aware "Compactness":** A strong push towards "Compact Tool Output" (Issue [#24507](https://github.com/google-gemini/gemini-cli/issues/24507)) suggests developers are struggling with context window bloat. Users want concise summaries rather than raw, verbose tool outputs.
*   **Persistent Personalization:** Several issues ([#22819](https://github.com/google-gemini/gemini-cli/issues/22819), [#22809](https://github.com/google-gemini/gemini-cli/issues/22809)) highlight a desire for the CLI to autonomously learn and store user preferences (global vs. project) and apply them proactively.
*   **AST & Structural Intelligence:** Moving beyond regex/text search, there is a trend toward integrating AST-level understanding ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) to improve code manipulation accuracy.

## 6. Developer Pain Points
*   **Cross-Platform Stability:** Windows users continue to face specific friction points, such as `bunx` execution errors ([#24653](https://github.com/google-gemini/gemini-cli/pull/24653)) and SSH rendering issues ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)).
*   **Agent Reliability Loops:** Users are experiencing "fake completions" where agents claim success after hitting turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) or loop retrying rejected tool calls ([#23897](https://github.com/google-gemini/gemini-cli/issues/23897)).
*   **Workspace Pollution:** Agents creating temporary scripts in random directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) creates significant cleanup overhead for developers.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-04-05

## 1. Today's Highlights
Version **v1.0.18** was released yesterday, introducing a significant new **"Critic" agent** designed to automatically review plans and complex implementations using a complementary model to catch errors early (currently experimental for Claude models). This release also improves the session resume picker's UI logic. However, the community is actively reporting a critical regression regarding **multi-device authentication**, where logging in on a second device forcibly logs out the first, breaking concurrent workflows.

## 2. Releases
### **v1.0.18** (2026-04-04)
*   **New Feature:** Introduced a "Critic" agent in experimental mode. It uses a complementary model to automatically review plans and implementations for errors before execution.
*   **Improvement:** The session resume picker now correctly groups sessions by branch and repository upon first use.
*   **Fixes:** Updates to `preToolUse` hook permissions.

## 3. Hot Issues
1.  **[OPEN] Transient API Errors & Rate Limits (#2101)**
    *   **Why it matters:** Users are frequently hitting "transient API errors" followed by rate limits, effectively halting work.
    *   **Reaction:** 12 upvotes, 21 comments. High frustration regarding the granularity of limits and the "Sorry..." error messaging.
    *   [Link](github/copilot-cli Issue #2101)

2.  **[OPEN] Segmentation Fault on Alpine Linux (#107)**
    *   **Why it matters:** Critical blocker for users running containerized environments (Docker `alpine:latest`). Any tool call causes a crash.
    *   **Reaction:** Tagged `priority: medium` but `effort: large`. Users working in minimal container environments are currently deadlocked.
    *   [Link](github/copilot-cli Issue #107)

3.  **[OPEN] Multi-Device Session Regression (#2513)**
    *   **Why it matters:** A regression introduced in v1.0.15/16 causes login on Device B to automatically log out Device A.
    *   **Reaction:** Breaking workflow for developers using multiple machines or VMs.
    *   [Link](github/copilot-cli Issue #2513)

4.  **[OPEN] Unexpected Premium Request Consumption (#1477)**
    *   **Why it matters:** Users report the CLI continuing autonomously and consuming "premium requests" after a model completion without clear consent.
    *   **Reaction:** 9 upvotes. Concerns about transparency and cost control in "autopilot" mode.
    *   [Link](github/copilot-cli Issue #1477)

5.  **[OPEN] Sudo Commands Hang Indefinitely (#1082)**
    *   **Why it matters:** CLI attempts to run `sudo` commands but hangs because it cannot handle the interactive password prompt.
    *   **Reaction:** 7 upvotes. Prevents the CLI from managing system-level package installations or configurations.
    *   [Link](github/copilot-cli Issue #1082)

6.  **[OPEN] System Prompt Parameter Request (#232)**
    *   **Why it matters:** Developers want to pass global system instructions (e.g., coding standards) via CLI flags rather than repo-specific files.
    *   **Reaction:** 7 upvotes. Highly requested feature for CI/CD integration.
    *   [Link](github/copilot-cli Issue #232)

7.  **[OPEN] Image Paste Support (#1276)**
    *   **Why it matters:** Inability to paste screenshots (UI bugs, logs) directly into the terminal prompt limits visual debugging capabilities.
    *   **Reaction:** 6 upvotes. seen as a parity feature vs. VS Code extension.
    *   [Link](github/copilot-cli Issue #1276)

8.  **[OPEN] Session Resume Not Finding New Sessions (#2510)**
    *   **Why it matters:** The `--resume` flag is failing to detect recently created sessions, breaking the stateful workflow.
    *   **Reaction:** Regresses the user experience for context continuity.
    *   [Link](github/copilot-cli Issue #2510)

9.  **[OPEN] Wayland Clipboard Failure (#2511)**
    *   **Why it matters:** Copying suggested commands fails on Ubuntu/Wayland because the CLI checks for X11 tools but misses `wl-clipboard` dependencies.
    *   **Reaction:** Affects Linux users on modern distros defaulting to Wayland.
    *   [Link](github/copilot-cli Issue #2511)

10. **[OPEN] False Positive on `kill` Command Filter (#2509)**
    *   **Why it matters:** The safety filter blocks valid status checks (e.g., `kill -0`) because it blindly detects the `kill` string, assuming process termination.
    *   **Reaction:** Hinders sophisticated shell scripting where `kill` is used for polling/checking rather than terminating.
    *   [Link](github/copilot-cli Issue #2509)

## 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours.*

## 5. Feature Request Trends
*   **Enhanced Control & Configurability:** A strong trend is emerging around user control. Developers are requesting toggles for auto-compaction (#2333), configurable system prompts (#232), and customizable keybindings (specifically disabling `esc` to cancel #2508).
*   **Multimodal Inputs:** Continued demand for the ability to paste images directly into the CLI (#1276) to match the capabilities of desktop chat interfaces.
*   **Robust Linux Support:** Specific requests for better Wayland support (#2511) and Alpine/Linux compatibility highlight a need for better platform-specific dependency handling.

## 6. Developer Pain Points
*   **Rate Limiting Friction:** The transition to stricter rate limits is causing significant friction (#2101), with users feeling the "free lunch" is over and the error handling during limit hits is disruptive.
*   **Context Management:** Users are frustrated by the "black box" nature of context handling. Specific complaints include 8-minute hangs during cache misses (#1614) and the inability to disable automatic context compaction (#2333), leading to loss of conversational history at critical moments.
*   **Authentication Stability:** The new multi-device login issue (#2513) is a major workflow blocker for power users who operate across several environments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-04-05

## 1. Today's Highlights
The community is buzzing with activity surrounding the proposed **Bun + TypeScript + React Ink rewrite** of the CLI (PR #1707), which suggests a major architectural pivot from Python to enhance performance and UI capabilities. Concurrently, contributors are actively improving quality of life with new diagnostic logging, a `/btw` command for side queries, and fixes for critical crashes. No official releases were cut today, but the volume of high-impact PRs indicates significant development momentum.

## 2. Releases
*   **No new releases** recorded in the last 24 hours. The community focus remains on merging architectural refactors and bug fixes in the development branch.

## 3. Hot Issues
1.  **[REFRACTOR] Python to TypeScript Migration Discussion** ([#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707))
    *   *Note: Linked as Issue context.* This major proposal to rewrite the CLI using Bun and React Ink has sparked significant attention. The community is debating the trade-offs of leaving Python behind for a modern, terminal-native React stack.
2.  **Feature Request: Remote Control** ([#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282))
    *   Users are requesting the ability to sync and continue local CLI sessions from mobile devices or browsers. This highlights a strong demand for cross-device workflow continuity.
3.  **Increase Default Max Steps** ([#1327](https://github.com/MoonshotAI/kimi-cli/issues/1327))
    *   Developers find the default limit of 100 steps too restrictive, especially when context usage remains low. This suggests the defaults need tuning for modern agentic workflows.
4.  **Visibility for Subagent Reasoning** ([#1755](https://github.com/MoonshotAI/kimi-cli/issues/1755))
    *   A request to view the full internal prompts and reasoning chains of subagents, rather than just tool outputs. This points to a need for better debuggability in complex agentic tasks.
5.  **Garbled Characters in UI** ([#1754](https://github.com/MoonshotAI/kimi-cli/issues/1754))
    *   A bug report regarding character encoding issues (mojibake) in the CLI interface, likely related to font or encoding handling in the frontend rendering layer.
6.  **Feature Request: TPS Meter** ([#1760](https://github.com/MoonshotAI/kimi-cli/issues/1760))
    *   Request for a "Tokens Per Second" display in the status bar to gauge LLM performance in real-time. A matching PR has already been submitted.
7.  **Crash on Non-Text Clipboard Paste** ([#1757](https://github.com/MoonshotAI/kimi-cli/issues/1757))
    *   Critical stability issue where pasting image data or screenshots via Ctrl+V causes a `TypeError` crash. A fix is already under review.
8.  **IDEA 2026.1 ACP Initialization Failure** ([#1737](https://github.com/MoonshotAI/kimi-cli/issues/1737))
    *   Users encountering "list.index(x): x not in list" errors when initializing the Agent Communication Protocol (ACP) session in JetBrains IDEs.
9.  **Custom Session Naming** ([#1729](https://github.com/MoonshotAI/kimi-cli/issues/1729))
    *   Now closed, this issue requested manual renaming of sessions. It indicates a user need for better organization beyond auto-generated titles.
10. **OpenAI Compatibility & Reasoning Keys** ([#1749](https://github.com/MoonshotAI/kimi-cli/pull/1749))
    *   *Note: Linked as Issue context.* Discussion on filtering unsupported media types and extracting reasoning content when using OpenAI-compatible APIs.

## 4. Key PR Progress
1.  **refactor: Rewrite from Python to Bun + TypeScript + React Ink** ([#1707](https://github.com/MoonshotAI/kimi-cli/pull/1707))
    *   **Status:** Open
    *   A massive overhaul replacing the Python stack with Bun, TypeScript, and React Ink. Includes 211 functions and a full test suite, aiming for better performance and UI flexibility.
2.  **feat(btw): Add /btw side question command** ([#1743](https://github.com/MoonshotAI/kimi-cli/pull/1743))
    *   **Status:** Open
    *   Introduces a `/btw` command allowing users to ask side questions without polluting the main agent's context window, featuring dual-layer rendering.
3.  **feat(logging): Add diagnostic logging** ([#1756](https://github.com/MoonshotAI/kimi-cli/pull/1756))
    *   **Status:** Open
    *   Adds extensive logging at 25+ error paths and bundles logs in the export feature, significantly improving debuggability for maintainers.
4.  **feat(tps): Add TPS meter** ([#1759](https://github.com/MoonshotAI/kimi-cli/pull/1759))
    *   **Status:** Open
    *   Implements a configurable Tokens-Per-Second meter in the status bar and a `/tps` command for real-time performance monitoring.
5.  **fix: Prevent Ctrl+V crash** ([#1758](https://github.com/MoonshotAI/kimi-cli/pull/1758))
    *   **Status:** Open
    *   Implements a two-layer fix to handle non-text clipboard data (like images) gracefully instead of throwing a `TypeError`.
6.  **fix(diff): Align inline highlight offsets** ([#1709](https://github.com/MoonshotAI/kimi-cli/pull/1709))
    *   **Status:** Open
    *   Fixes alignment issues in diff views when tab-expanded text is present, improving code review accuracy.
7.  **fix: Filter unsupported content & reasoning_key** ([#1749](https://github.com/MoonshotAI/kimi-cli/pull/1749))
    *   **Status:** Open
    *   Enhances OpenAI API compatibility by filtering video/audio parts and adding support for extracting reasoning content via `reasoning_key`.

## 5. Feature Request Trends
*   **Deep Work Transparency:** Users want "X-Ray vision" into the agent's thought process, specifically requesting full visibility into subagent prompts and reasoning chains.
*   **Workflow Continuity:** Strong interest in decoupling the session from the specific hardware (Remote Control), allowing seamless transitions between desk and mobile.
*   **Granular Control:** Requests for finer configuration defaults (step limits) and UI metrics (TPS meters) indicate a user base transitioning from "trying it out" to "relying on it for production."

## 6. Developer Pain Points
*   **Stability of Input Handling:** The CLI crashes when handling non-text clipboard data, breaking standard OS copy-paste expectations.
*   **Integration Friction:** Errors in IDE integration (JetBrains/ACP) and API compatibility (OpenAI endpoints) remain a hurdle for users embedding Kimi CLI into existing dev environments.
*   **Agentic Constraints:** The default step limit (100) is causing premature halts in complex tasks, forcing manual configuration intervention.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**Date:** 2026-04-05

## 1. Today's Highlights
OpenCode released **v1.3.15** to patch a critical Windows regression where the embedded Bun runtime's hardcoded `node-gyp` path caused plugin installation failures. The community is actively discussing memory management issues in a new megathread, while significant friction points remain regarding proxy support for restricted network environments and aggressive timeouts for local LLMs.

## 2. Releases

### **v1.3.15**
- **Critical Fix:** Prevents npm installs from failing when Arborist hits the compiled binary's `node-gyp` path. This resolves an issue where plugins like `oh-my-openagent` failed to load on Windows after upgrading from v1.3.13.
- **Contributor:** @Yuxin-Dong refactored the Kimi skill section (#20393).

### **v1.3.14**
- **Features:** Restored git-backed review modes (uncommitted and branch diffs) and added macOS managed preferences for MDM-enforced config.
- **Fixes:** Resolved revert chains to ensure correct snapshot restoration and fixed sessions getting stuck.

## 3. Hot Issues

1.  **[Core] Memory Megathread** [#20695](https://github.com/anomalyco/opencode/issues/20695)
    *   **Why:** The maintainers have centralized scattered memory leak reports here. The team explicitly requested *not* to use LLMs for solutions but to submit manual heap snapshots to aid debugging.
    *   **Reaction:** High engagement (17 👍); users are actively submitting diagnostic data.

2.  **[Feature] HTTP_PROXY Support** [#531](https://github.com/anomalyco/opencode/issues/531)
    *   **Why:** A long-standing request (since mid-2025) affecting users behind corporate firewalls. It prevents API access in restricted regions/organizations.
    *   **Reaction:** Significant pent-up demand (24 👍, 38 comments), yet remains unresolved.

3.  **[Bug] Windows Plugin Failure (v1.3.14)** [#21041](https://github.com/anomalyco/opencode/issues/21041)
    *   **Why:** External plugins failed on Windows due to broken `node-gyp` paths in the embedded Bun runtime. This was a regression introduced in v1.3.14.
    *   **Reaction:** Users reported rolling back to v1.3.13; fixed in today's v1.3.15 release.

4.  **[Feature] WSL Backend for Desktop** [#5635](https://github.com/anomalyco/opencode/issues/5635)
    *   **Why:** Windows users working in WSL cannot effectively use the Desktop app as it currently only spawns a native Windows sidecar.
    *   **Reaction:** Highly requested integration (33 👍) to bridge the Windows/Linux dev environment gap.

5.  **[Perf] Aggressive Timeouts for Local Models** [#17307](https://github.com/anomalyco/opencode/issues/17307)
    *   **Why:** Default timeouts in v1.2.25+ are too short for large local models (e.g., 100k context), causing `SSE read timed out` errors.
    *   **Reaction:** Users are manually adjusting `opencode.json` to 300,000ms+ as a workaround.

6.  **[Bug] Kimi k2.5 Tool Calling** [#20650](https://github.com/anomalyco/opencode/issues/20650)
    *   **Why:** The Kimi model is generating malformed JSON during tool calls (unterminated strings), breaking the `bash` tool execution flow.
    *   **Reaction:** Active troubleshooting in comments to isolate whether this is a model or integration issue.

7.  **[Feature] Tokens Per Second (TPS) Display** [#6096](https://github.com/anomalyco/opencode/issues/6096)
    *   **Why:** Users want experimental calculation and display of TPS per message response to gauge performance.
    *   **Reaction:** The most "liked" feature request in this batch (34 👍).

8.  **[Feature] Quote Transcript Text** [#21025](https://github.com/anomalyco/opencode/issues/21025)
    *   **Why:** Users want the ability to select text from the AI's previous output and insert it into the prompt as a blockquote via a hotkey.
    *   **Reaction:** seen as a quality-of-life improvement for contextual replies.

9.  **[Bug] Shell Execution Hangs** [#5662](https://github.com/anomalyco/opencode/issues/5662)
    *   **Why:** The application hangs indefinitely at "Running commands" with an undefined reference, specifically on Windows/cmder.
    *   **Reaction:** Ongoing issue causing workflow interruptions.

10. **[Bug] OpenAI Response Resumption** [#21020](https://github.com/anomalyco/opencode/issues/21020)
    *   **Why:** Multi-turn GPT-5 sessions occasionally "hallucinate" a jump back to an older task context instead of the latest user message.
    *   **Reaction:** A subtle but dangerous bug affecting reliability for OpenAI API users.

## 4. Key PR Progress

1.  **[Vouched] Fix npm Arborist fails on compiled binary** [#21040](https://github.com/anomalyco/opencode/pull/21040)
    *   Fixes the Windows plugin crash by adding `ignoreScripts` flags and patching the `node-gyp` path resolution logic.

2.  **Fix(cli): notify user when auto-update completes** [#21036](https://github.com/anomalyco/opencode/pull/21036)
    *   Addresses silent CLI auto-updates by adding a TUI subscriber to the `Installation.Event.Updated` event.

3.  **Fix(copilot): Business/Enterprise Support** [#20758](https://github.com/anomalyco/opencode/pull/20758)
    *   Enables bearer exchange and dynamic endpoints, allowing Copilot Business/Enterprise accounts to work with OpenCode.

4.  **Fix(tui): disable sticky scroll on manual scroll** [#19540](https://github.com/anomalyco/opencode/pull/19540)
    *   Prevents the TUI from forcing a scroll-down when the user is reading previous content.

5.  **Fix(compaction): preserve agent identity** [#21046](https://github.com/anomalyco/opencode/pull/21046)
    *   Ensures specialized agents maintain their configuration and identity even after context compaction/summarization.

6.  **Fix(windows): canonicalize FileTime paths** [#20071](https://github.com/anomalyco/opencode/pull/20071)
    *   Prevents false "file modified" rejections on Windows by normalizing path comparisons in the `FileTime` utility.

7.  **Fix(config): load project commands** [#21033](https://github.com/anomalyco/opencode/pull/21033)
    *   Improves command discovery by allowing project commands to be loaded relative to `opencode.json`.

8.  **Feat: auto-compress clipboard images** [#6455](https://github.com/anomalyco/opencode/pull/6455)
    *   Automatically compresses pasted screenshots using `sharp` to avoid 5MB API upload limits.

9.  **Fix(tui): stop streaming markdown after completion** [#13854](https://github.com/anomalyco/opencode/pull/13854)
    *   Ensures completed messages render fully (including the last table row) rather than being stuck in "streaming" mode.

10. **Feat: support disabled flag on provider models** [#21038](https://github.com/anomalyco/opencode/pull/21038)
    *   Allows users to hide specific models from the picker UI without removing the provider configuration.

## 5. Feature Request Trends
*   **Environment Integration:** Strong demand for **Proxy Support** and **WSL integration** to fit OpenCode into diverse corporate and development environments.
*   **Performance Monitoring:** Users are requesting more granular metrics, specifically **Tokens Per Second (TPS)** display to measure latency.
*   **UI/UX Control:** Requests for finer control over the interface, such as **disabling specific tools** (like the question tool) globally and **sticky scroll** behavior.
*   **Local Model Accommodation:** Continued push for **configurable timeouts** and parameters to support slower, large-context local models.

## 6. Developer Pain Points
*   **Plugin Stability on Windows:** The v1.3.14 regression caused significant disruption for Windows plugin users, highlighting fragility in the embedded runtime's path handling.
*   **Memory Leaks:** Memory usage remains a top concern, necessitating a dedicated megathread to coordinate debugging efforts.
*   **Non-Standard Model Quirks:** Developers using non-OpenAI models (Kimi, Gemma 4) are frequently encountering tool-calling failures and JSON parsing errors.
*   **Silent Failures:** Issues like silent auto-updates and silent context switching in OpenAI responses are eroding trust in the tool's reliability during long sessions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest - 2026-04-05

## 1. Today's Highlights

Today's activity focuses heavily on **UI stability and agent orchestration enhancements**. The community saw a surge in PRs addressing VS Code plugin bugs (scrolling, tab sizing) and CLI TUI improvements (color configuration, path autocompletion). On the feature front, experimental **Agent Team parallelization** and **intelligent tool batching** promise significant performance gains, while a failed nightly build (v0.14.1) requires attention from maintainers.

## 2. Releases

No new stable releases in the last 24 hours.
*   **Note**: The nightly release `v0.14.1-nightly.20260404` [failed](https://github.com/QwenLM/qwen-code/actions/runs/23966786452) due to workflow issues (Issue [#2870](https://github.com/QwenLM/qwen-code/issues/2870)).

## 3. Hot Issues

1.  **[UI] VS Code Plugin Tab Sizing Bug** ([#2873](https://github.com/QwenLM/qwen-code/issues/2873)): Critical UX issue where a single conversation tab expands infinitely, filling the entire tab bar and blocking access to other tabs.
2.  **[Bug] Clipboard Image Paste Broken on Linux/Wayland** ([#2885](https://github.com/QwenLM/qwen-code/issues/2885)): Regression in v0.14.0 prevents users from pasting images via Ctrl+V in the CLI on Wayland environments.
3.  **[Feature] Thinking Depth Control** ([#2876](https://github.com/QwenLM/qwen-code/issues/2876)): Users request granular control over the model's "thinking" depth (similar to Codex), noting that the VS Code plugin often "thinks" less deeply than the web interface.
4.  **[Feature] LSP Support Inquiry** ([#1514](https://github.com/QwenLM/qwen-code/issues/1514)): A reopened discussion asking for Language Server Protocol support to improve code navigation and agent accuracy, bringing Qwen Code to parity with competitors like Claude Code.
5.  **[Feature] Configurable TUI Colors** ([#2877](https://github.com/QwenLM/qwen-code/issues/2877)): Request for the ability to customize CLI colors, specifically to fix low-contrast defaults (e.g., dark blue on black) which affect accessibility.
6.  **[Bug] Heap Out of Memory** ([#2868](https://github.com/QwenLM/qwen-code/issues/2868)): Reports of the CLI crashing with "Heap out of memory" errors during garbage collection, indicating potential memory leaks in long sessions.
7.  **[Feature] Image Paste on Windows CMD** ([#2605](https://github.com/QwenLM/qwen-code/issues/2605)): Request to support pasting images/files directly from the clipboard in the legacy Windows Command Prompt.
8.  **[Integration] Rust Token Killer Support** ([#2880](https://github.com/QwenLM/qwen-code/issues/2880)): Proposal to integrate tools like `rtk` (Rust Token Killer) to reduce token count and context pollution.
9.  **[WeChat] Login Interface Error** ([#2882](https://github.com/QwenLM/qwen-code/issues/2882)): Users report receiving an "upgrade interface version" error when scanning QR codes via WeChat.
10. **[Community] Positive Feedback on Code Quality** ([#2887](https://github.com/QwenLM/qwen-code/issues/2887)): A user shared a detailed thank-you note praising Qwen Code's recent improvements in code structure, context understanding, and migration capabilities.

## 4. Key PR Progress

1.  **[Feat] Agent Team & Parallel Coordination** ([#2886](https://github.com/QwenLM/qwen-code/pull/2886)): Introduces an experimental "Agent Team" feature allowing a lead agent to spawn and coordinate sub-agents in parallel.
2.  **[Feat] Intelligent Tool Parallelism** ([#2864](https://github.com/QwenLM/qwen-code/pull/2864)): Implements kind-based batching for tool calls. Read-only tools (Read, Grep, etc.) now run in parallel rather than sequentially, drastically reducing wait times.
3.  **[Feat] Dangerous Actions Guidance** ([#2889](https://github.com/QwenLM/qwen-code/pull/2889)): Enhances system prompts to provide layered guidance on handling destructive operations (e.g., `rm -rf`, `DROP TABLE`), improving safety.
4.  **[Feat] Mid-Turn Queue Drain** ([#2854](https://github.com/QwenLM/qwen-code/pull/2854)): Allows user messages to be processed immediately during tool execution, enabling real-time interaction instead of waiting for a full round to complete.
5.  **[Feat] Directory/File Path Completion** ([#2879](https://github.com/QwenLM/qwen-code/pull/2879)): Adds auto-completion for file paths in the terminal input (triggered by `/`, `./`, etc.), a major quality-of-life improvement.
6.  **[Fix] VS Code Scroll & Tab Issues**: Addressed the chat scrolling problem ([#2883](https://github.com/QwenLM/qwen-code/issues/2883) context) and forced fresh ACP sessions to fix tab reuse bugs ([#2874](https://github.com/QwenLM/qwen-code/pull/2874)).
7.  **[Fix] Permissions for Env-Prefixed Commands** ([#2850](https://github.com/QwenLM/qwen-code/pull/2850)): Fixes a bug where shell commands with environment variables (e.g., `PYTHONPATH=...`) failed to match "Always allow" rules, causing repeated prompts.
8.  **[Feat] Compact/Verbose Mode Toggle** ([#2770](https://github.com/QwenLM/qwen-code/pull/2770)): Adds `Ctrl+O` toggle to switch between clean (compact) output and detailed (verbose) logs during agentic runs.
9.  **[Feat] Bugfix Workflow & Test-Engineer Agent** ([#2881](https://github.com/QwenLM/qwen-code/pull/2881)): Introduces a specialized agent workflow for systematic bug reproduction and verification.
10. **[Refactor] Proxy & WebFetch Cleanup** ([#2888](https://github.com/QwenLM/qwen-code/pull/2888)): Removes duplicate proxy setup logic in `WebFetchTool` to prevent conflicts and clean up architecture.

## 5. Feature Request Trends

*   **Agent Customization & Depth**: Users want control over "thinking" depth and model verbosity (Issue #2876), moving beyond "one-size-fits-all" reasoning.
*   **Multimodal Input Consistency**: Strong demand for reliable image pasting across all platforms (Linux/Wayland #2885, Windows CMD #2605).
*   **UI/UX Accessibility**: Requests for customizable themes/colors (#2877) and fixing layout bugs in VS Code (#2873).
*   **Performance Optimization**: Interest in token reduction tools (#2880) and LSP support (#1514) to enhance speed and accuracy.

## 6. Developer Pain Points

*   **Platform Fragmentation**: The "write once, run anywhere" promise is fraying at the edges, specifically regarding clipboard handling (Wayland vs. X11 vs. Windows) and shell environments.
*   **Memory Management**: The Heap OOM errors (#2868) suggest the tool struggles with long-running sessions or large context windows, requiring better memory cleanup.
*   **UI Polish in VS Code**: The infinite tab width bug (#2873) is a major friction point, breaking the basic workflow of switching between files and the chat agent.
*   **Interrupted Workflows**: The need for "Mid-Turn Queue Drain" (#2854) highlights user frustration at being "locked out" of the agent while it executes long tool chains.

</details>