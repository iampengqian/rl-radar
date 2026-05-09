# OpenClaw Ecosystem Digest 2026-05-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-09 22:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-10

## 1. Today's Overview
OpenClaw is experiencing exceptionally high project activity, with 500 issues and 500 pull requests updated in the last 24 hours. The maintainers successfully shipped one new release (`v2026.5.9-beta.1`) focusing on dependency refreshing and UX improvements, while actively pushing a massive architectural refactor to transition the runtime state to SQLite (`PR #78595`). The overwhelming ratio of open issues (437 open vs. 63 closed) and PRs (306 open vs. 194 merged/closed) indicates that community demand and feature submissions are currently outpacing the maintainers' capacity to review and merge. 

## 2. Releases
**Latest Release:** `v2026.5.9-beta.1` (openclaw 2026.5.9-beta.1)
*   **Changes:** Introduced `/think default` and `/fast default` chat commands to allow users to clear session overrides and revert to configured/provider defaults. Refreshed workspace dependency pins and lockfiles, notably pulling in `@openai/codex 0.130.0`, `acpx 0.7.0`, and `AWS SDK 3.1044.0`.
*   **Migration Notes:** No explicit breaking changes noted, though the underlying update to the OpenAI Codex package hints at ongoing shifts in LLM provider integrations. 

## 3. Project Progress
The engineering focus is currently split between expanding agent autonomy and executing a massive architectural backend refactor.
*   **Database-First Runtime (The "SQLite Refactor"):** The cornerstone of today's progress is `PR #78595`, a massive effort moving OpenClaw away from scattered JSON/JSONL toward a typed SQLite storage model. Follow-up fixes were immediately opened today (`PR #79971`) to tighten truth behaviors in this refactor.
*   **Agent Autonomy:** `PR #79925` introduces context-pressure-aware continuation (`continue_work` / `continue_delegate`), allowing agents to self-elect turn continuations.
*   **Quality of Life & Fixes:** Merged PRs include cleaning up stale whole-agent Codex runtime pins (`PR #79651`) and fixing Control UI chat bubble overlap (`PR #79988`). 

## 4. Community Hot Topics
Community discussions are heavily centered around multi-agent orchestration, memory management, and channel-specific bugs.
*   **Docker Onboarding Issues:** [Issue #14593](https://github.com/openclaw/openclaw/issues/14593) (29 comments, 17 thumbs up) highlights persistent user frustration with `brew` dependencies failing during Docker skill installs on Linux containers.
*   **Multi-Agent Messaging Clashes:** [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (26 comments) reveals a significant UX problem where internal agent processing outputs are incorrectly routed to active messaging channels (Slack, iMessage) as visible text. Further, [Issue #39476](https://github.com/openclaw/openclaw/issues/39476) (8 comments) discusses duplicate messages occurring during A2A (Agent-to-Agent) `sessions_send` loops.
*   **Context Control & Memory:** [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) (16 comments) proposes tiered bootstrap file loading to preserve context window budgets—a critical need for users running complex workspaces.

## 5. Bugs & Stability
Several high-severity regressions and platform-specific crashes were reported today, particularly affecting non-CLI interfaces:
*   **Windows 11 Crash (Critical):** [Issue #39038](https://github.com/openclaw/openclaw/issues/39038) reports that the OpenClaw node process hangs at PATH info on Windows 11 24H2, completely failing to connect to the Gateway.
*   **Web UI Secure Context Regression:** [Issue #32473](https://github.com/openclaw/openclaw/issues/32473) (15 comments) notes a regression where the Control UI requires HTTPS for device identity, breaking standard VPS Docker setups. 
*   **Agent Passivity:** [Issue #79809](https://github.com/openclaw/openclaw/issues/79809) (7 comments) notes agents lose autonomy and stall after completing multi-step tasks, requiring manual re-activation. This is actively being addressed by `PR #79925`.
*   **Sandbox Isolation Bugs:** [Issue #31331](https://github.com/openclaw/openclaw/issues/31331) and [Issue #37634](https://github.com/openclaw/openclaw/issues/37634) highlight that Docker sandboxing mounts workspaces incorrectly, leaving them read-only.

## 6. Feature Requests & Roadmap Signals
User requests heavily emphasize security, multi-agent orchestration, and platform parity:
*   **Companion SQLite APIs:** [Issue #79902](https://github.com/openclaw/openclaw/issues/79902) and [Issue #79904](https://github.com/openclaw/openclaw/issues/79904), opened today, request companion-friendly cursored SQLite transcript seams. This aligns perfectly with the active `PR #78595` and is highly likely to be integrated in the next release.
*   **Security & Access Controls:** "Masked Secrets" to prevent prompt injection from leaking API keys ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659)) and pre-response enforcement hooks for hard-gating tool calls ([Issue #13583](https://github.com/openclaw/openclaw/issues/13583)) are highly requested enterprise features.
*   **Mobile Support:** [Issue #9443](https://github.com/openclaw/openclaw/issues/9443) asks for prebuilt Android APK releases, indicating a user base eager to deploy OpenClaw on mobile. 

## 7. User Feedback Summary
Users are power-users who deploy OpenClaw in complex, multi-platform environments but are struggling with Docker deployment fragility. Pain points heavily revolve around file path mapping, lack of `brew` in Linux containers, and secure context requirements blocking VPS deployments. There is strong enthusiasm for multi-agent setups, though users report that orchestration often results in duplicate messages or "orphaned" process loops. Ultimately, the community views OpenClaw as a powerful runtime but indicates that the operational overhead of managing LLM context limits, sandbox environments, and tool approvals needs streamlining.

## 8. Backlog Watch
The following high-impact items require immediate maintainer attention:
*   **Docker Runtime Baseline:** `PR #77549` aims to improve the hosted Docker runtime baseline, and `PR #61203` targets Mac Docker improvements. Given the sheer volume of Docker-related bugs in issues, these PRs represent critical merging opportunities.
*   **Docker Out-of-Docker Workspace Bug:** [Issue #31331](https://github.com/openclaw/openclaw/issues/31331) remains open and severely hampers Dockerized enterprise deployments.
*   **Context Token Overhead:** [Issue #14785](https://github.com/openclaw/openclaw/issues/14785) notes that tool schemas are consuming ~3,500 tokens per session. As context windows become more constrained by complex agent loops, optimizing this tax will be crucial for project scalability.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem as of May 10, 2026.

### 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently characterized by rapid iteration, with foundational shifts occurring in memory management, multi-agent orchestration, and modular tool integration. Projects are aggressively moving away from flat-file state management toward robust database-driven runtimes to support complex, long-running autonomous workflows. A clear "stack" is emerging, ranging from lightweight, highly extensible node-based agents to monolithic enterprise platforms. Across the board, maintainers are struggling to balance high-velocity architectural refactoring with the immediate need for stable multi-modal channel support and standardized LLM provider integration.

### 2. Activity Comparison
*Health Score (1-5) is based on PR throughput, issue resolution ratios, release cadence, and active community engagement.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.5.9-beta.1` shipped | 4.5 / 5 |
| **NanoBot** | 13 | 135 | No release (Nightly/Main) | 4.0 / 5 |
| **Hermes Agent** | 50 | 50 | Stable (Post-v0.13.0) | 3.5 / 5 |
| **PicoClaw** | 10 | 22 | `v0.2.8-nightly` shipped | 4.0 / 5 |
| **NanoClaw** | 7 | 22 | No release (Imminent) | 4.0 / 5 |
| **IronClaw** | 19 | 40 | `v0.28.0` processing | 3.5 / 5 |
| **LobsterAI** | 0 | 9 | `v2026.5.9` shipped | 4.5 / 5 |
| **NullClaw** | 3 | 2 | `nightly-20260509` shipped | 3.0 / 5 |
| **Moltis** | 0 | 4 | No release | 3.5 / 5 |
| **CoPaw** | 42 | 30 | `v1.1.6` shipped | 4.5 / 5 |
| **ZeroClaw** | 50 | 45 | No release (v0.7.6 imminent) | 3.5 / 5 |
| **TinyClaw** | 0 | 0 | Dormant | 0.0 / 5 |
| **ZeptoClaw** | 0 | 0 | Dormant | 0.0 / 5 |

### 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw remains the core reference implementation with unmatched scale and raw activity (500+ daily PR/issue updates). Its community is highly engaged in advanced edge cases (e.g., A2A sessions, context token overhead). 
**Technical Approach:** OpenClaw is staking its future on a **database-first runtime** (the massive "SQLite Refactor"), moving away from JSON/JSONL. This contrasts with peers like NanoBot (state machine refactoring) and IronClaw (Rust-based "Reborn" epic).
**Community Size:** OpenClaw possesses the largest and most demanding power-user base. However, its open-to-closed issue ratio (437 open vs. 63 closed) indicates that its community demand is currently outpacing maintainer capacity, contrasting with highly controlled projects like LobsterAI or CoPaw.

### 4. Shared Technical Focus Areas
*   **DeepSeek Reasoning Model Support:** Across the ecosystem, non-standard provider APIs—specifically DeepSeek's V4 reasoning tokens (`reasoning_content`)—are breaking multi-turn conversations. (**IronClaw**, **Hermes Agent**, **CoPaw**, **ZeroClaw**).
*   **State/Context Persistence:** Flat files and ephemeral memory are failing power users. Projects are actively overhauling storage via SQLite (**OpenClaw**), databases (**NanoClaw**), and durable Rust crates (**IronClaw**). **NanoBot** users specifically cite context loss on interruption as a major pain point.
*   **Multi-Agent Isolation & Routing:** "Spawning" and inter-agent communication is moving from a novelty to a requirement, bringing routing bugs (cross-session data leakage, dropped tool calls) to the forefront. (**OpenClaw**, **PicoClaw**, **ZeroClaw**, **LobsterAI**).
*   **Security & Tool Approvals:** Unrestricted autonomous execution is giving way to human-in-the-loop security policies and "Varlock" masked secrets to prevent prompt injection. (**Hermes Agent**, **NullClaw**, **ZeroClaw**).
*   **Context Window Optimization:** LLM context limits are being hit heavily due to tool schemas and system prompts. (**OpenClaw** facing a 3,500-token tool schema tax; **CoPaw** facing UI freezes after 200+ turns).

### 5. Differentiation Analysis
*   **Architecture Stack:** **IronClaw** differentiates via a high-performance Rust backend undergoing a massive V2 refactor. **NanoBot** and **OpenClaw** leverage TypeScript/Node architectures. **NanoClaw** uniquely focuses on containerized, sandboxed agent environments.
*   **Target Audience & UX:** **CoPaw** and **LobsterAI** are pushing heavily into enterprise "desktop app" experiences (Tauri/Electron) with rich web UI artifacts. Conversely, **Hermes Agent** and **NullClaw** focus heavily on headless/Gateway deployments (CLI, Docker, Systemd) for server hosting.
*   **Extensibility:** **Moltis** is positioning itself as a hub for external CLI agents (Codex, Claude Code), whereas **PicoClaw** and **ZeroClaw** are focusing on native, low-code Model Context Protocol (MCP) integrations.

### 6. Community Momentum & Maturity
*   **Tier 1: Hyper-Growth / Refactoring (OpenClaw, NanoBot, IronClaw):** Extremely high PR velocity. These projects are currently tearing up their own internals to prepare for next-generation agentic capabilities, resulting in high community friction and bug reports.
*   **Tier 2: Stabilization & Polish (CoPaw, LobsterAI, PicoClaw, ZeroClaw):** Shipping stable or nightly releases consistently. Focus is on UX polish, resolving upgrade path friction, and expanding provider support.
*   **Tier 3: Niche / Slower Iteration (Hermes, NanoClaw, NullClaw, Moltis):** Solidifying specific strengths. NanoClaw is perfecting containerization; Hermes is patching its gateway; Moltis is modernizing its UI.
*   **Dormant:** TinyClaw and ZeptoClaw show zero current momentum.

### 7. Trend Signals
1.  **The Rise of "Agentic UIs" (Human-in-the-Loop):** As agents gain autonomy, users need visual dashboards to monitor behavior and approve tool usage. The massive demand for official WebUIs (**NanoBot**) and secure approval routing (**NullClaw**) proves that purely CLI-driven agents are insufficient for enterprise trust.
2.  **Strict Provider Validation is an Anti-Pattern:** Developers are diversifying away from standard OpenAI APIs to local models, DeepSeek, and custom endpoints. Projects that hardcode strict OpenAI array schemas are experiencing massive blowback (**CoPaw**, **ZeroClaw**). Flexible provider validation is now a core requirement.
3.  **Memory is the Ultimate Bottleneck:** The industry is moving past simple chat completions. Ephemeral session states are failing complex workflows. The widespread adoption of SQLite, durable encrypted stores, and semantic memory retrieval indicates that robust long-term memory is the primary battleground for AI agent frameworks in 2026.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-10

## 1. Today's Overview
NanoBot is experiencing exceptionally high development activity, with **135 pull requests updated in the last 24 hours** (105 open, 30 merged/closed) alongside 13 issues processed (9 closed, 4 open). The volume of open PRs indicates heavy concurrent development, likely with contributors pushing toward a significant milestone. No new releases were cut today, but the sheer density of refactoring, bug fixes, and feature PRs suggests the team is actively preparing for a substantial next version. Overall project health appears robust, with maintainers responsive to both community bug reports and ambitious architectural contributions.

## 2. Releases
No new releases were published today. Development remains on the main/nightly branches with no tagged version.

## 3. Project Progress
Significant architectural and feature work landed today through merged/closed PRs:

- **AgentLoop refactoring** ([PR #3708](https://github.com/HKUDS/nanobot/pull/3708)): Introduced `AgentLoop.from_config()` to centralize loop assembly — extracted duplicated initialization from CLI commands into a single classmethod. This is foundational for the upcoming model-preset feature.
- **State machine refactor** ([PR #3715](https://github.com/HKUDS/nanobot/pull/3715)): Converted the 300-line `_process_message` method into an explicit functional state machine (`RESTORE → COMPACT → COMMAND → BUILD → RUN → SAVE → RESPOND`), improving readability and maintainability.
- **Dead code fix** ([PR #3719](https://github.com/HKUDS/nanobot/pull/3719)): Removed unreachable dead code in `find_legal_message_start` (fixes [Issue #3716](https://github.com/HKUDS/nanobot/issues/3716)).
- **CLI retry handling** ([PR #3705](https://github.com/HKUDS/nanobot/pull/3705)): Fixed terminal corruption when LLM errors trigger retries in interactive mode.
- **WebSocket media fix** ([PR #3673](https://github.com/HKUDS/nanobot/pull/3673)): Fixed silent dropping of media attachments in WebSocket channel (fixes [Issue #3674](https://github.com/HKUDS/nanobot/issues/3674)).
- **Summary persistence revert** ([PR #3710](https://github.com/HKUDS/nanobot/pull/3710)): Reverted the `_last_summary` persistence change from [PR #3685](https://github.com/HKUDS/nanobot/pull/3685), indicating the approach had issues.
- **Corrupted session fix** ([PR #3680](https://github.com/HKUDS/nanobot/pull/3680)): Added sanity check for session files where `last_consolidated` exceeds message count.
- **WebUI BYOK search** ([PR #3709](https://github.com/HKUDS/nanobot/pull/3709)): Extended WebUI settings to support Bring-Your-Own-Key web search credentials.
- **AI contributor docs** ([PR #3534](https://github.com/HKUDS/nanobot/pull/3534)): Added `CLAUDE.md` and `.agent/` guides for AI coding assistants working in the repo.
- **Runtime context ephemeral fix** ([PR #3671](https://github.com/HKUDS/nanobot/pull/3671)): Fixed a nightly regression where runtime context scaffolding escaped ephemeral prompt paths.
- **Claude Code provider** ([PR #1333](https://github.com/HKUDS/nanobot/pull/1333)): Added Claude Code subscription provider via OAuth.

Notable open PRs advancing features:
- **Hook system overhaul** ([PR #3564](https://github.com/HKUDS/nanobot/pull/3564)): Typed-event hook system with plugin support via `entry_points`, replacing method-override pattern. Externally significant for extensibility.
- **Model presets** ([PR #3714](https://github.com/HKUDS/nanobot/pull/3714)): Named model presets with atomic runtime switching.
- **Cron stream fix** ([PR #3720](https://github.com/HKUDS/nanobot/pull/3720)): Adds `stream_id` and `turn_end` to cron-triggered agent responses.

## 4. Community Hot Topics
The most actively discussed issues revolve around **WebUI and interface needs**:

- **[Issue #2949](https://github.com/HKUDS/nanobot/issues/2949)** — *Should NanoBot have its own WebUI?* (13 👍, 10 comments). This is the highest-traction discussion, reflecting strong community demand for a first-party web interface beyond CLI and chat channels.
- **[Issue #1922](https://github.com/HKUDS/nanobot/issues/1922)** — *Community-built [nanobot-webui]* (10 👍, 9 comments). A self-hosted web management panel created by @Good0007 with dashboard, real-time chat, multi-user support. Significant as a community-driven solution to the official WebUI gap.
- **[Issue #2389](https://github.com/HKUDS/nanobot/issues/2389)** — *OpenWebUI as official channel?* (4 comments). Users want OpenWebUI integration, further underscoring the web interface demand.

**Underlying need**: Users consistently want visual management and interaction interfaces. The convergence of [PR #3709](https://github.com/HKUDS/nanobot/pull/3709) (WebUI BYOK settings) and [PR #3059](https://github.com/HKUDS/nanobot/issues/3059) (built-in Web UI for `nanobot serve`) suggests the project is actively moving toward an official WebUI.

## 5. Bugs & Stability
Bugs reported/relevant today, ranked by severity:

| Severity | Issue | Status | Fix |
|----------|-------|--------|-----|
| **High** | [Issue #3689](https://github.com/HKUDS/nanobot/issues/3689) — Session context lost when interrupting agent mid-task. Bot forgets the entire previous conversation after interruption. | Open | No fix PR yet |
| **High** | [Issue #2709](https://github.com/HKUDS/nanobot/issues/2709) — WeCom error: "Streaming is required for operations >10 min". Agent calls fail for long-running tasks. | Closed | Workaround identified |
| **Medium** | [Issue #3718](https://github.com/HKUDS/nanobot/issues/3718) — Cron reminder messages missing `stream_id` in WebSocket stream output | Open | [PR #3720](https://github.com/HKUDS/nanobot/pull/3720) submitted |
| **Medium** | [Issue #3716](https://github.com/HKUDS/nanobot/issues/3716) — Unreachable dead code in `helpers.py` due to invalid list slice | Closed | Fixed by [PR #3719](https://github.com/HKUDS/nanobot/pull/3719) |
| **Medium** | [Issue #3674](https://github.com/HKUDS/nanobot/issues/3674) — WebSocket channel silently drops media from inbound messages | Closed | Fixed by [PR #3673](https://github.com/HKUDS/nanobot/pull/3673) |
| **Low** | [Issue #510](https://github.com/HKUDS/nanobot/issues/510) — Gateway not binding to port 18790 in Docker | Closed | Resolved |

The `_last_summary` revert ([PR #3710](https://github.com/HKUDS/nanobot/pull/3710)) is notable — a fix that was merged and then reverted, suggesting context persistence across restarts remains an unsolved challenge.

## 6. Feature Requests & Roadmap Signals
Active feature requests and likely next-version candidates:

- **Official WebUI** — Strong demand from [Issue #2949](https://github.com/HKUDS/nanobot/issues/2949) (13 👍) with active development ([PR #3709](https://github.com/HKUDS/nanobot/pull/3709), [Issue #3059](https://github.com/HKUDS/nanobot/issues/3059)). **High probability of inclusion in next release.**
- **Model presets & runtime switching** — [PR #3714](https://github.com/HKUDS/nanobot/pull/3714) introduces `ModelPresetConfig` with atomic runtime switching. This is part of a 4-PR decomposition, suggesting intentional roadmap planning.
- **`nanobot update` command** — [Issue #3421](https://github.com/HKUDS/nanobot/issues/3421) proposes a one-step self-update CLI command. Straightforward to implement; likely next version.
- **Subagent profiles** — [Issue #1012](https://github.com/HKUDS/nanobot/issues/1012) requests configurable specialized subagents (research agent, coding agent, etc.). Still open with no PR.
- **Hook plugin system** — [PR #3564](https://github.com/HKUDS/nanobot/pull/3564) enables external developers to distribute hook plugins via `entry_points`. If merged, this significantly opens the extensibility architecture.
- **Feishu topic isolation toggle** — [Issue #3692](https://github.com/HKUDS/nanobot/issues/3692) requests configurable control over Feishu group topic isolation behavior.

## 7. User Feedback Summary
Key pain points emerging from today's issues:

- **Context/memory fragility**: Users report losing conversation history when interrupting the agent ([Issue #3689](https://github.com/HKUDS/nanobot/issues/3689)) or after process restarts (the reverted [PR #3685](https://github.com/HKUDS/nanobot/pull/3685)). Memory persistence is a top concern.
- **Web interface gap**: The strongest signal today — users want a visual management layer. The community has already built third-party solutions ([nanobot-webui](https://github.com/HKUDS/nanobot/issues/1922)), and users are requesting OpenWebUI integration ([Issue #2389](https://github.com/HKUDS/nanobot/issues/2389)).
- **Channel-specific bugs**: WeCom streaming timeout ([Issue #2709](https://github.com/HKUDS/nanobot/issues/2709)), Feishu topic isolation inflexibility ([Issue #3692](https://github.com/HKUDS/nanobot/issues/3692)), and WebSocket media dropping ([Issue #3674](https://github.com/HKUDS/nanobot/issues/3674)) show growing pains as multi-channel adoption increases.
- **Corrupted session files**: Multiple PRs addressing session file corruption ([PR #3680](https://github.com/HKUDS/nanobot/pull/3680), [PR #3712](https://github.com/HKUDS/nanobot/pull/3712)) suggest data durability issues under edge conditions.

Positive signals: Users praise the project ("CONGRATS for this awesome project!" — [Issue #510](https://github.com/HKUDS/nanobot/issues/510)) and are actively building extensions, indicating strong community engagement.

## 8. Backlog Watch
Items needing maintainer attention:

- **[Issue #2949](https://github.com/HKUDS/nanobot/issues/2949)** — WebUI feature discussion with 13 👍 but no clear acceptance decision. The community needs a definitive roadmap signal.
- **[Issue #1922](https://github.com/HKUDS/nanobot/issues/1922)** — Community WebUI project with 10 👍, unanswered question of whether to integrate officially.
- **[Issue #1012](https://github.com/HKUDS/nanobot/issues/1012)** — Subagent profiles request (open since 2026-02-22, 80+ days). No maintainer response or linked PR.
- **[Issue #3689](https://github.com/HKUDS/nanobot/issues/3689)** — Context loss on interruption. High user impact, no fix in progress.
- **[PR #3564](https://github.com/HKUDS/nanobot/pull/3564)** — Hook system overhaul. Open since 2026-04-30 (11 days). Architecturally significant; needs maintainer review decision.
- **[PR #3714](https://github.com/HKUDS/nanobot/pull/3714)** — Model presets feature. Part of a planned 4-PR series; awaiting maintainer feedback on the overall approach.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-10

## 1. Today's Overview
The Hermes Agent project experienced a very high level of activity over the last 24 hours, with 100 total events across issues and pull requests (50 issues updated, 50 PRs updated). The community remains highly engaged in testing the v0.13.0 release, leading to a flurry of bug reports centered around the gateway, TUI dashboard, and newly introduced provider integrations. While no new software releases were cut today, the maintainer team (heavily featuring contributor `teknium1`) was extremely active in triaging bugs and submitting targeted "salvage" PRs to address backlogged community contributions. Overall, the project is in a phase of rapid stabilization and bug-squashing following a recent major update.

## 2. Releases
No new releases were published today. The project remains on its latest version as the focus shifts to resolving regressions and stabilizing the current codebase.

## 3. Project Progress
Today saw 13 PRs merged or closed, focused almost entirely on hardening the agent, fixing provider logic, and streamlining the gateway. Key advancements include:
*   **Agent Core Fixes:** Reasoning context is now correctly preserved during transcript replays ([PR #22839](https://github.com/NousResearch/hermes-agent/pull/22839)), and provider/model aliases are correctly resolved in cost estimation ([PR #18340](https://github.com/NousResearch/hermes-agent/pull/18340)).
*   **OpenRouter Integrations:** A new Pareto Code router was wired in ([PR #22838](https://github.com/NousResearch/hermes-agent/pull/22838)) and subsequently documented ([PR #22844](https://github.com/NousResearch/hermes-agent/pull/22844)).
*   **Security & Stability:** The gateway now gracefully degrades when platform adapters are missing ([PR #22853](https://github.com/NousResearch/hermes-agent/pull/22853)), and a critical SSRF fetch path vulnerability in the skills hub was patched ([PR #22843](https://github.com/NousResearch/hermes-agent/pull/22843)). 

## 4. Community Hot Topics
The most actively discussed issues highlight underlying user needs for reliable system lifecycles and uninterrupted multi-turn reasoning contexts:
*   **CLI Installation Blocker ([Issue #6147](https://github.com/NousResearch/hermes-agent/issues/6147), 6 comments):** The Hermes installer gets stuck at the ripgrep/ffmpeg prompt, completely failing to accept keyboard input. This represents a critical friction point for new user onboarding.
*   **Silent Message Dropping ([Issue #17666](https://github.com/NousResearch/hermes-agent/issues/17666), 5 comments):** Users are reporting that pasting long, multi-line text blocks into the CLI results in the agent completely ignoring the input, pointing to fundamental issues with the CLI's input buffer handling.
*   **DeepSeek V4 Pro Thinking Mode ([Issue #22313](https://github.com/NousResearch/hermes-agent/issues/22313), 4 comments):** Multi-turn conversations with DeepSeek's reasoning APIs are failing with HTTP 400 errors because the agent strips `thinking` blocks from history. Users are actively looking for seamless integration with reasoning models.
*   **Gateway Lifecycle Fragility ([Issue #21801](https://github.com/NousResearch/hermes-agent/issues/21801) & [Issue #21915](https://github.com/NousResearch/hermes-agent/issues/21915), 3 comments each):** Dashboard TUI sessions are crashing immediately after the v0.13.0 update, and systemd-managed deployments are entering infinite restart loops due to incomplete PID cleanups.

## 5. Bugs & Stability
Stability issues reported today ranked by severity (Note: Fix PRs are already open or pending for almost all of these):

**P1 - Critical / High Impact:**
*   **CLI Message Dropping:** Messages sent while the agent is executing tools are silently lost ([Issue #22818](https://github.com/NousResearch/hermes-agent/issues/22818)).
*   **DeepSeek Provider Breakage:** As noted above, thinking content is not persisted, breaking multi-turn ([Issue #21946](https://github.com/NousResearch/hermes-agent/issues/21946)). 
*   **Tool Delegation Bias:** The `delegate_task` tool hard-codes a bias toward Claude platforms, causing errors for users on other providers ([Issue #22013](https://github.com/NousResearch/hermes-agent/issues/22013)).

**P2 - Moderate Impact:**
*   **Process Orphans & Restarts:** Incomplete subprocess cleanup is causing zombie workers ([Issue #22855](https://github.com/NousResearch/hermes-agent/issues/22855)). *Fix proposed in [PR #22863](https://github.com/NousResearch/hermes-agent/pull/22863).* 
*   **Systemd Restart Loop:** The gateway reads status from the wrong `HERMES_HOME` directory, leading to false restart failures ([Issue #22035](https://github.com/NousResearch/hermes-agent/issues/22035)).
*   **Ollama Nudge Bug:** An empty-content nudge fires when reasoning content is populated ([Issue #21811](https://github.com/NousResearch/hermes-agent/issues/21811)).

## 6. Feature Requests & Roadmap Signals
User feature requests today strongly signal a desire for better automation scaling, cross-platform support, and security:
*   **Task Concurrency Limits:** Users running local LLMs are requesting a limit on "in progress" Kanban system tasks to prevent the orchestrator from overwhelming local compute resources ([Issue #22829](https://github.com/NousResearch/hermes-agent/issues/22829)).
*   **Security Enhancements:** A strong push to adopt "Varlock" for secrets management, moving away from vulnerable plaintext `.env` files to prevent prompt-injection-based exfiltration ([Issue #1583](https://github.com/NousResearch/hermes-agent/issues/1583)).
*   **Notification Suppression:** Telegram users want granular control to suppress intermediate tool/thinking notifications to reduce mobile noise ([Issue #22771](https://github.com/NousResearch/hermes-agent/issues/22771)).
*   **Robust Cron Routing:** A request for cron jobs to intelligently fall back to a "home channel" if the originating CLI/TUI session is dead ([Issue #22795](https://github.com/NousResearch/hermes-agent/issues/22795)).
*   *Prediction:* Features addressing local LLM task queuing (Kanban limits) and secrets management (Varlock) are highly likely to be targeted for the next minor release.

## 7. User Feedback Summary
The overall sentiment is a mix of excitement for v0.13.0's features and frustration with integration edge-cases. Users are deploying Hermes in diverse, complex environments (Dockerized Hetzner VPS, systemd daemons, Matrix/Telegram gateways, and varied LLM providers like xAI, DeepSeek, and local Ollama). 
*   **Pain Points:** The most prominent pain points are silent failures (dropped messages, invisible Langfuse plugin errors [Issue #22834](https://github.com/NousResearch/hermes-agent/issues/22834)) and aggressive breaking changes in provider API handling.
*   **Satisfaction:** Users appreciate the modular gateway architecture but note that the dashboard/web GUI still feels fragile compared to the core CLI. Developers are actively using it for complex CI/CD tasks but are hindered by false-positive security scanner flags ([Issue #22722](https://github.com/NousResearch/hermes-agent/issues/22722)).

## 8. Backlog Watch
Maintainers should direct their attention to the following long-languishing or high-impact items:
*   **[Issue #6147](https://github.com/NousResearch/hermes-agent/issues/6147):** The CLI installer keyboard input bug has been open for a month. As a total blocker for new user acquisition, this needs immediate prioritization.
*   **[Issue #1583](https://github.com/NousResearch/hermes-agent/issues/1583):** The plaintext `.env` exfiltration risk is a severe security vulnerability that has been open since mid-March.
*   **Unhealthy Dependency on Salvage PRs:** A significant portion of today's open PRs are "salvages" of older, stalled community PRs (e.g., [PR #22841](https://github.com/NousResearch/hermes-agent/pull/22841), [PR #22845](https://github.com/NousResearch/hermes-agent/pull/22845)). The core team should review their internal PR triage process to prevent contributor burnout and avoid accumulating technical debt.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-05-10

## 1. Today's Overview
PicoClaw demonstrates robust development momentum as a versatile open-source AI agent and personal assistant framework. Today's activity is exceptionally high, with 22 active Pull Requests (13 open, 9 merged/closed) and 10 updated Issues, indicating a highly engaged contributor base. The recent release of the v0.2.8 nightly build confirms that active development is rapidly being integrated into the main branch. The project's current focus is heavily concentrated on multi-agent orchestration (spawning), expanding Model Context Protocol (MCP) capabilities, and fortifying system security and provider stability. 

## 2. Releases
- **nightly: v0.2.8-nightly.20260509.8508f806**
  - **Details:** Automated nightly build. As an automated build, it may be unstable and is recommended for testing environments rather than production.
  - **Full Changelog:** [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. Project Progress
Today saw 9 merged/closed PRs, representing significant feature advancements and critical bug fixes:
- **Multi-Agent Orchestration:** Merged several foundational PRs by contributor `bogdanovich` that drastically improve sub-agent/spawning reliability. Notably, [#2790](https://github.com/sipeed/picoclaw/pull/2790) ensures the `spawn` tool routes correctly to the target agent, and [#2793](https://github.com/sipeed/picoclaw/pull/2793) fixes tool discovery cloning to prevent subagents from erroneously promoting hidden tools to the parent registry.
- **Agent Communication Flow:** Fixed an issue where interim messages suppressed final replies ([#2823](https://github.com/sipeed/picoclaw/pull/2823)), and resolved a bug where queued voice follow-ups failed to transcribe correctly ([#2828](https://github.com/sipeed/picoclaw/pull/2828)).
- **Provider Expansions & Fixes:** Merged support for the xAI provider via OpenAI-compatible routing ([#2260](https://github.com/sipeed/picoclaw/pull/2260)), added multi-agent discovery system prompts ([#2158](https://github.com/sipeed/picoclaw/pull/2158)), and patched OAuth token refresh scopes for Google Antigravity ([#2163](https://github.com/sipeed/picoclaw/pull/2163)).
- **UI Enhancements:** Merged a fix for the Web UI to show full reply datetimes in chat history ([#2630](https://github.com/sipeed/picoclaw/pull/2630)).

## 4. Community Hot Topics
- **[#2674 [OPEN] Codex OAuth Empty Response](https://github.com/sipeed/picoclaw/issues/2674) (👍 3, Comments: 2):** A high-interest bug where the OpenAI Codex backend streams responses that PicoClaw misinterprets as empty. This highlights the ongoing friction in supporting proprietary LLM provider streaming protocols.
- **[#2421 [OPEN] Native Email Channel](https://github.com/sipeed/picoclaw/issues/2421) (Comments: 5, 👍 1):** A highly requested enhancement to implement email as a built-in communication channel. This reflects a strong enterprise/corporate use case where users deploy AI assistants in environments relying on traditional communication.
- **[#2546 [OPEN] MCP OAuth 2.1 Support](https://github.com/sipeed/picoclaw/issues/2546) (Comments: 4):** Requesting a low-code/no-code way to add MCP servers via URL on the dashboard. The community is pushing for PicoClaw to make MCP integration as frictionless as proprietary platforms like Claude.ai.

## 5. Bugs & Stability
Recent bug reports highlight stability challenges with provider APIs and specific tool interactions:
1. **Critical / Provider Streaming:** [Issue #2674](https://github.com/sipeed/picoclaw/issues/2674) - Empty assistant responses when using ChatGPT backend via Codex OAuth. (No fix PR submitted yet).
2. **High / Security Bypass:** [PR #2836](https://github.com/sipeed/picoclaw/pull/2836) - Addressed a PowerShell encoding bypass via `iex` injection. (Fix PR is open).
3. **Medium / Agent Looping:** [Issue #2829](https://github.com/sipeed/picoclaw/issues/2829) - Async tool results re-inject into parent agents, causing unnecessary turns/re-interpretations. (Fix PR [#2830](https://github.com/sipeed/picoclaw/pull/2830) is open).
4. **Low / UI Bug:** [Issue #2665](https://github.com/sipeed/picoclaw/issues/2665) (CLOSED) - Anthropic dropdown using invalid model IDs (dots instead of dashes).

## 6. Feature Requests & Roadmap Signals
Recent open PRs and issues signal that the next major update will heavily feature advanced agent configuration and MCP protocol upgrades:
- **Advanced Tool Policies:** [PR #2838](https://github.com/sipeed/picoclaw/pull/2838) proposes allowing `allow/deny` glob patterns in `AGENT.md` frontmatter. Paired with [Issue #2837](https://github.com/sipeed/picoclaw/issues/2837), this shows a clear roadmap toward granular, per-agent capability filtering.
- **MCP Streamable HTTP:** [Issue #2782](https://github.com/sipeed/picoclaw/issues/2782) requests support for the new MCP "Streamable HTTP" transport, as the protocol shifts away from legacy SSE.
- **Web Search Integrations:** [PR #2763](https://github.com/sipeed/picoclaw/pull/2763) introduces Gemini Google Search grounding as a native `web_search` provider.
- **UI Configuration Overhaul:** [PR #2770](https://github.com/sipeed/picoclaw/pull/2770) introduces a dedicated MCP section to the Web UI, moving away from raw configuration editing.

## 7. User Feedback Summary
Users are actively pushing PicoClaw into complex, multi-agent environments but are encountering friction with asynchronous agent handoffs and session boundaries. For example, users noted that `seahorse` retrieval tools (like grep) accidentally pull data from concurrent sessions, which is being actively fixed in [PR #2759](https://github.com/sipeed/picoclaw/pull/2759). Furthermore, users operating specialized models via OpenRouter are experiencing "reasoning leaks" where internal thoughts are exposed ([Issue #2745](https://github.com/sipeed/picoclaw/issues/2745)). Overall, satisfaction with the tool's extensibility is high, but there is a strong demand for better dashboard UX for non-technical operators.

## 8. Backlog Watch
- **[Issue #2421: Native Email Channel](https://github.com/sipeed/picoclaw/issues/2421):** Open since April 2026 with 5 comments, this requires maintainer triage as it represents a significant architectural addition for enterprise adoption.
- **[PR #2758: Telegram Media Group Album Handling](https://github.com/sipeed/picoclaw/pull/2758):** Open since May 4th, lacking reviewer assignment. This is a crucial fix for users using PicoClaw via Telegram, as it correctly buffers media albums into a single inbound context.
- **[Issue #2834: Update from Source](https://github.com/sipeed/picoclaw/issues/2834):** A user request for documentation on upgrading instances. This highlights a gap in current documentation for self-hosters and should be addressed quickly to improve the newcomer experience.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-10

## 1. Today's Overview
NanoClaw is demonstrating exceptionally high development velocity today, driven primarily by core maintainers pushing a massive batch of infrastructure enhancements and bug fixes. With 22 Pull Requests updated (13 closed/merged) and 7 Issues updated, the project is in an active phase of fortifying its container architecture, credential proxy, and agent self-modification capabilities. The high ratio of merged PRs to closed issues indicates a team heavily focused on building out the next tier of platform features—specifically plugin marketplaces and persistent skill storage—rather than just reactive maintenance. Overall, the project's health appears robust, characterized by deep, technical contributions and rapid iteration.

## 2. Releases
No new releases were published today. However, the volume of merged PRs (especially bumping `claude-code` dependencies and fundamental container config changes) strongly suggests a minor or patch version release is imminent once the currently open plugin PRs are finalized.

## 3. Project Progress
Today saw 13 PRs merged/closed, representing significant leaps in the agent container management and provider spaces:
*   **Architectural Refactoring:** PR [#2351](https://github.com/qwibitai/nanoclaw/pull/2351) successfully migrated container configuration from the filesystem to a central database, paving the way for dynamic scaling. 
*   **Provider Updates:** The Claude Code dependency was bumped significantly (2.1.116 → 2.1.128) via PR [#2364](https://github.com/qwibitai/nanoclaw/pull/2364), and the Claude provider was updated to use reliable 1M context tags via PR [#2280](https://github.com/qwibitai/nanoclaw/pull/2280).
*   **Skill Ecosystem:** Several foundational skills were merged, including persistent semantic memory (`/add-mnemon`, PR [#2318](https://github.com/qwibitai/nanoclaw/pull/2318)) and AWS CLI access (PR [#2319](https://github.com/qwibitai/nanoclaw/pull/2319)).
*   **Graceful Shutdowns:** Two sibling PRs ([#2358](https://github.com/qwibitai/nanoclaw/pull/2358) and [#2359](https://github.com/qwibitai/nanoclaw/pull/2359)) fixed race conditions where SIGTERM signals would drop in-flight messages during restarts.

## 4. Community Hot Topics
*   **Anthropic Account Bans ([#1669](https://github.com/qwibitai/nanoclaw/issues/1669)):** An open discussion regarding whether the Credential Proxy implementation risks triggering Anthropic's anti-fraud system due to OAuth reverse-proxy prohibitions. This highlights underlying user anxiety about compliance and account stability when using proxy architectures.
*   **Tool Compliance Degradation ([#2369](https://github.com/qwibitai/nanoclaw/issues/2369)):** A highly technical issue noting that agents with ~32+ MCP tools begin to hallucinate or "narrate" delegation instead of emitting the correct `<message to=>` blocks. This signals a context-window or instruction-following limitation as NanoClaw deployments become more complex.

## 5. Bugs & Stability
Today's bug reports reveal a few critical edge cases in state management and container orchestration:
1.  **Severe - Database Lock/Crash:** Issue [#2196](https://github.com/qwibitai/nanoclaw/issues/2196) reported that `host-sweep` crashes with a "readonly database" error when attempting to delete orphan processing claims, leaving stalled sessions unresolvable.
2.  **High - Attachment Routing:** Issue [#2370](https://github.com/qwibitai/nanoclaw/issues/2370) notes that WhatsApp attachments downloaded by the host adapter are not mounted into agent containers, silently breaking multimodal capabilities.
3.  **Medium - Config Wipeout:** Issue [#2360](https://github.com/qwibitai/nanoclaw/issues/2360) flags that running the setup script silently deletes custom agent group configurations without warning or backup.
4.  **Medium - PATH Issues:** Issue [#2355](https://github.com/qwibitai/nanoclaw/issues/2355) mentions that upgrades past version 2.0.45 fail to add the `ncl` CLI to the system PATH.

## 6. Feature Requests & Roadmap Signals
Based on the open PRs created today, the immediate roadmap is heavily focused on **agent self-modification** and **plugin marketplaces**:
*   **Agent-Initiated Plugin Control:** PR [#2368](https://github.com/qwibitai/nanoclaw/pull/2368) introduces self-mod actions (`install_plugin`, `uninstall_plugin`) gated by admin approval and a denial cache.
*   **Marketplace Infrastructure:** PRs [#2367](https://github.com/qwibitai/nanoclaw/pull/2367) and [#2365](https://github.com/qwibitai/nanoclaw/pull/2365) are laying the groundwork for operators to declare marketplaces and wire `enabledPlugins` directly into the container configuration. 
*   **Persistent State:** PR [#2366](https://github.com/qwibitai/nanoclaw/pull/2366) adds a `SKILL_DATA_DIR` mount, fulfilling the developer need for skills to maintain state across container restarts. Expect these to define the next major version's feature set.

## 7. User Feedback Summary
Users are operating NanoClaw in complex, multi-channel environments (WhatsApp, Claude API) and are running into friction with **state persistence** and **upgrades**. A major pain point is that essential runtime elements—like WhatsApp LID/phone mappings ([#2194](https://github.com/qwibitai/nanoclaw/issues/2194)) and attachments ([#2370](https://github.com/qwibitai/nanoclaw/issues/2370))—are still stored in-memory or locally without being properly passed into the containerized agent environment. Additionally, users express frustration with the CLI upgrade path ([#2355](https://github.com/qwibitai/nanoclaw/issues/2355)) which currently requires manual workarounds to access new CLI features. 

## 8. Backlog Watch
*   **WhatsApp LID Mapping ([#2194](https://github.com/qwibitai/nanoclaw/issues/2194)):** Open for over a week, this issue causes routing failures upon restarts. Given the recent database migration work (PR [#2351](https://github.com/qwibitai/nanoclaw/pull/2351)), this issue is now a prime candidate for persistent storage implementation and needs maintainer attention.
*   **Credential Proxy Bans ([#1669](https://github.com/qwibitai/nanoclaw/issues/1669)):** Open since early April, this compliance question remains a lingering concern for enterprise users. A definitive maintainer response or documentation update is needed to clarify the risks regarding Anthropic's terms of service.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for 2026-05-10.

### 1. Today's Overview
The NullClaw project is currently experiencing a highly active period, marked by a daily automated release cycle and vigorous community contributions. Three new bug reports were opened in the last 24 hours, highlighting some growing pains in recent iterations, particularly concerning network resolution and messaging channel configurations. Simultaneously, the merge queue has processed two structural/community pull requests, while a significant hackathon contribution continues to receive updates. Overall, project health appears robust, with active CI maintenance and prompt user issue logging.

### 2. Releases
- **nightly-20260509-5d533da**: The latest nightly automated build was published on May 9, 2026. 
  - *Note:* Based on today's bug reports, this and recent 2026.5.x builds include a major HTTP/DNS client refactoring that may introduce breaking changes for users upgrading from the 2026.4.x stable branches. 

### 3. Project Progress
Merged and closed activity today focused primarily on expanding infrastructure and CI capabilities:
- **[PR #903](https://github.com/nullclaw/nullclaw/pull/903) [CLOSED/MERGED]**: Added an `http_request.allowed_insecure_domains` configuration to allow agents to connect to whitelisted HTTP endpoints. This is a structural enhancement aimed heavily at improving local developer experience (e.g., inter-container communication within a `docker-compose` stack).
- **[PR #796](https://github.com/nullclaw/nullclaw/pull/796) [CLOSED/MERGED]**: Added a Nix flake build workflow (`.github/workflows/nix.yml`) to test and smoke-test the NullClaw Nix build on every PR, ensuring better platform stability for NixOS users.
- **[PR #885](https://github.com/nullclaw/nullclaw/pull/885) [OPEN]**: A substantial hackathon contribution by team «Безопасность бэкофиса (DS)» introducing the "NullClaw Data Governance Layer." This PR received updates today, indicating ongoing active development.

### 4. Community Hot Topics
While today's issues lack high comment counts or reactions, the underlying needs represented by the volume of reports are significant:
- **[Issue #902](https://github.com/nullclaw/nullclaw/issues/902) & [Issue #900](https://github.com/nullclaw/nullclaw/issues/900)**: These reports indicate a strong community reliance on NullClaw for multi-modal AI integrations and supervised autonomy. Users are actively trying to use specialized providers (SiliconFlow) and complex execution flows (UI approval gating for risky commands).
- **[PR #885](https://github.com/nullclaw/nullclaw/pull/885)**: Continues to be a focal point for external corporate/open-source hackathon collaboration, pointing to healthy institutional interest in NullClaw's memory and data governance extensibility.

### 5. Bugs & Stability
Three distinct bugs were reported today, two of which are directly related to core agent configurations and system regressions:
1. **Host Resolution Regression** - **[Issue #902](https://github.com/nullclaw/nullclaw/issues/902)**: *High Severity*. Upgrading to 2026.5.x breaks the `siliconflow` provider with a `HostResolutionFailed` error. The issue details a direct regression caused by the HTTP/DNS client refactoring introduced in the 2026.5.x branch. *No fix PR is currently noted.*
2. **Broken Supervised Mode / Security Flow** - **[Issue #900](https://github.com/nullclaw/nullclaw/issues/900)**: *Medium-High Severity*. The `webchannel_v1` spec's `approval_request` round-trip is never emitted. Consequently, instead of prompting the user via the UI, the security policy layer forcefully fails risky commands. This severely impacts the usefulness of supervised mode. *No fix PR is currently noted.*
3. **Telegram Channel Misconfiguration** - **[Issue #901](https://github.com/nullclaw/nullclaw/issues/901)**: *Medium Severity*. A persistent UI/CLI bug where the `channel list` command fails to read the correct `config.json`, claiming Telegram is not configured, despite `nullclaw config show` displaying it correctly. 

### 6. Feature Requests & Roadmap Signals
- **Secure Local Networking**: [PR #903](https://github.com/nullclaw/nullclaw/pull/903) merging indicates that the next version will likely feature smoother Docker-based deployments, allowing agents to communicate locally without requiring TLS certificates for every local endpoint.
- **Data Governance**: The progression of [PR #885](https://github.com/nullclaw/nullclaw/pull/885) signals that memory management and policy-driven data retention are upcoming major themes for the project.

### 7. User Feedback Summary
- **Pain Points**: Users upgrading to recent builds are experiencing frustrating regressions (DNS issues breaking providers, CLI commands misreading config files). The transition from a working 2026.4.9 build to 2026.5.x is causing immediate deployment blockers.
- **Use Cases**: Users are heavily utilizing NullClaw in containerized environments (Docker Compose), connecting to diverse AI providers (SiliconFlow), and deploying Telegram messaging channels. There is also active usage of supervised execution modes, indicating that users are deploying NullClaw in security-sensitive environments requiring human-in-the-loop workflows.

### 8. Backlog Watch
- All three issues ([#902](https://github.com/nullclaw/nullclaw/issues/902), [#901](https://github.com/nullclaw/nullclaw/issues/901), [#900](https://github.com/nullclaw/nullclaw/issues/900)) were created within the last 24 hours and currently have 0 maintainer comments. Because Issue #902 directly breaks standard usage of the `siliconflow` provider in the `2026.5.x` nightly builds, it requires immediate maintainer triage to pinpoint the faulty DNS/HTTP refactor commit.
- [PR #885](https://github.com/nullclaw/nullclaw/pull/885) has been open since May 4th and is still actively receiving updates. Maintainers should schedule a formal review of this substantial architectural addition soon to ensure it aligns with the core roadmap before it grows too large to easily merge.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-10

## 1. Today's Overview
IronClaw experienced a massive surge of architectural activity today, driven almost entirely by the ongoing "Reborn" initiative aimed at refactoring the agent loop and persistence layers. The project saw 40 pull requests updated in the last 24 hours (with 18 merged or closed), alongside 19 active issues. While core contributors are heavily focused on foundational infrastructure and capability boundaries, external users are reporting emerging bugs in production related to LLM provider integrations and background task routing. Overall, the project is in a state of intense, high-velocity internal refactoring, preparing the codebase for a major architectural shift.

## 2. Releases
Although no official GitHub releases were published today, a release PR is actively being processed: **[PR #3388](https://github.com/nearai/ironclaw/pull/3388)**. 
*   **Upcoming Version:** `ironclaw` v0.24.0 → v0.28.0 and `ironclaw_common` v0.4.1 → v0.4.2.
*   **Expected Changes:** The changelog indicates API-compatible changes for the common crate, and a minor version bump for the main binary, likely rolling up the recent LLM facade and transport adapter refactors.

## 3. Project Progress
The core team made exceptional progress on the "Reborn" architectural epic, closing several foundational XL-sized PRs:
*   **Secrets & Resource Governance:** Merged **[PR #3414](https://github.com/nearai/ironclaw/pull/3414)** (Durable encrypted secret store) and **[PR #3427](https://github.com/nearai/ironclaw/pull/3427)** (Durable resource governor), ensuring stateful persistence for agents.
*   **Host Ports & Capabilities:** Merged **[PR #3398](https://github.com/nearai/ironclaw/pull/3398)** (Text-only loop host ports) and **[PR #3426](https://github.com/nearai/ironclaw/pull/3426)** (Visible capability catalog), completing the host/agent trust boundary interfaces.
*   **Transport & Workflow Facades:** Merged **[PR #3099](https://github.com/nearai/ironclaw/pull/3099)** (Transport adapter contract) and opened **[PR #3428](https://github.com/nearai/ironclaw/pull/3428)** (ProductWorkflow facade), defining clear edges for the v2 engine.
*   **LLM Boundary Cleanup:** Opened **[PR #3416](https://github.com/nearai/ironclaw/pull/3416)** to hide provider-specific configs behind facades, cleaning up technical debt in `ironclaw_llm`.

## 4. Community Hot Topics
*   **The "Reborn" Epic ([Issue #2987](https://github.com/nearai/ironclaw/issues/2987)):** With 44 comments, this is the central hub of activity. Maintainer `serrrfirat` is using it to coordinate a massive, grouped PR landing strategy to avoid overwhelming reviewers with a single monolithic commit.
*   **Platform Installation Blocker ([Issue #2949](https://github.com/nearai/ironclaw/issues/2949)):** A 4-comment thread where a user flagged that the official `curl` installer fails for `x86_64-unknown-linux-gnu`. This highlights a lingering gap in the release pipeline's static binary targets.

## 5. Bugs & Stability
*   **[CRITICAL] DeepSeek Reasoning Mode Failure ([Issue #3436](https://github.com/nearai/ironclaw/issues/3436)):** Users are hitting a 400 Bad Request when using DeepSeek's thinking/reasoning mode because IronClaw isn't passing `reasoning_content` back to the API. *(No fix PR yet)*.
*   **[HIGH] Cross-tenant SSE/WS Data Leak ([Issue #3390](https://github.com/nearai/ironclaw/pull/3390)):** Addressed in a PR merged today, this bug caused tool outputs and job lifecycles to fan out to *every* connected WebSocket user if `metadata.user_id` was dropped.
*   **[HIGH] Mission Results Misrouting ([Issue #3415](https://github.com/nearai/ironclaw/issues/3415)):** Background missions (e.g., daily weather) are posting results to a new conversation rather than the conversation where the mission was originally created. *(No fix PR yet)*.
*   **[MEDIUM] i18n UI Regression ([Issue #3425](https://github.com/nearai/ironclaw/issues/3425)):** Production is intermittently rendering raw translation keys (e.g., `auth.title`) instead of localized text. *(No fix PR yet)*.

## 6. Feature Requests & Roadmap Signals
Today's issue creation was almost exclusively focused on mapping the immediate roadmap for the Reborn engine. Key feature signals include:
*   **Production Turn Run Scheduling:** Requested in **[Issue #3435](https://github.com/nearai/ironclaw/issues/3435)**, with the massive **[PR #3438](https://github.com/nearai/ironclaw/pull/3438)** already submitted to address it.
*   **Shared Storage Substrate:** **[Issue #3419](https://github.com/nearai/ironclaw/issues/3419)** and **[PR #3421](https://github.com/nearai/ironclaw/pull/3421)** signal a shift toward a unified `ironclaw_storage` crate to replace fragmented `db.rs` and `libsql.rs` adapters across crates.
*   **V2 Engine Driver Model:** **[Issue #3410](https://github.com/nearai/ironclaw/issues/3410)** outlines the next steps for mapping v2 engine model calls to Reborn's host boundaries.

## 7. User Feedback Summary
Users operating IronClaw in production are currently friction points around asynchronous agent operations and multi-tenant reliability. The mission misrouting bug (**[Issue #3415](https://github.com/nearai/ironclaw/issues/3415)**) indicates user reliance on "set and forget" background tasks, which are currently failing statefully. Additionally, the DeepSeek API error (**[Issue #3436](https://github.com/nearai/ironclaw/issues/3436)**) shows that power users are actively utilizing advanced LLM reasoning modes and expect seamless, out-of-the-box provider compatibility without manual API shim configurations.

## 8. Backlog Watch
*   **Installer Script Gap:** **[Issue #2949](https://github.com/nearai/ironclaw/issues/2949)** is 15 days old and lacks a confirmed fix for Linux static binary downloads, which remains a blocker for new user adoption on standard Linux servers.
*   **Nightly E2E Failures:** **[Issue #3323](https://github.com/nearai/ironclaw/issues/3323)** indicates that the scheduled Nightly E2E run failed. While E2E fixes were merged today in **[PR #3437](https://github.com/nearai/ironclaw/pull/3437)** and **[PR #3430](https://github.com/nearai/ironclaw/pull/3430)**, the issue remains open and requires verification in the next nightly run to ensure test suite stability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-05-10

## 1. Today's Overview
LobsterAI is demonstrating highly active and focused development, currently characterized by a high volume of merged pull requests with zero new issue reports. In the last 24 hours, the team merged 9 PRs, predominantly concentrating on UI enhancements, artifact previews, and collaboration features, culminating in a new production release. The lack of new user issues suggests high stability for the newly deployed features, while the active merging of dependency updates signals proactive project maintenance. Overall, the project's short-term health is robust, driven by internal team milestones rather than external community bug reports. 

## 2. Releases
**Version: [LobsterAI 2026.5.9](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.9)** (Released: 2026-05-09)
*   **Key Changes:**
    *   **Independent Agent Workspaces:** Agents now support independent working directories ([PR #1904](https://github.com/netease-youdao/LobsterAI/pull/1904)), a significant architectural update enabling better agent isolation and multi-tenant capabilities.
    *   **Artifacts Support:** Introduction of the "artifact" feature ([PR #1906](https://github.com/netease-youdao/LobsterAI/pull/1906)), likely enabling the generation and rendering of code/documents directly within the chat interface.
    *   **Pagination:** Implemented paginated loading for session lists and message history (from #924), improving performance for users with extensive chat logs.
*   *No breaking changes or specific migration notes were highlighted in the release manifest.*

## 3. Project Progress
The project saw an intensive integration phase today, with 9 PRs merged in preparation for and inclusion in the latest release. 
*   **Release Integration:** The core activity was the merging of the release branch (`release/2026.05.08`) into `main` via [PR #1938](https://github.com/netease-youdao/LobsterAI/pull/1938). This release expanded the artifacts preview (adding PDF/Office support), cowork pagination, and cron-based scheduled tasks.
*   **UI/UX Polish:** The team addressed several visual elements, updating the agent avatar ([PR #1934](https://github.com/netease-youdao/LobsterAI/pull/1934)), optimizing the main UI ([PR #1937](https://github.com/netease-youdao/LobsterAI/pull/1937)), and refining default empty history title styles ([PR #1935](https://github.com/netease-youdao/LobsterAI/pull/1935)).
*   **Artifact Module Enhancements:** Rich improvements were merged for file handling, including refreshed file list icons ([PR #1931](https://github.com/netease-youdao/LobsterAI/pull/1931)) and enhanced markdown/code search alongside HTML preview bug fixes ([PR #1933](https://github.com/netease-youdao/LobsterAI/pull/1933)).
*   **Backend/IM Updates:** [PR #1930](https://github.com/netease-youdao/LobsterAI/pull/1930) upgraded the `penclaw-weixin` dependency to 2.4.3, while [PR #1936](https://github.com/netease-youdao/LobsterAI/pull/1936) resolved incorrect timestamp displays in IM channel chat histories.

## 4. Community Hot Topics
*External community engagement via Issues was entirely dormant today, with zero new or updated Issues.* 
However, looking at open PRs, automated dependency updates represent the most active "participants." Notable dependency bumps currently awaiting maintainer review include:
*   **React 19 Migration:** [PR #1764](https://github.com/netease-youdao/LobsterAI/pull/1764) bumping `react-dom` from 18.3.1 to 19.2.6.
*   **Vite 8 Migration:** [PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766) bumping `vite` from 5.4.21 to 8.0.11.
*   **Headless UI Update:** [PR #1765](https://github.com/netease-youdao/LobsterAI/pull/1765) bumping `@headlessui/react` from 1.7.19 to 2.2.10.
*Underlying needs:* The project is sitting on major framework version jumps. The community (via Dependabot) is signaling a need to modernize the frontend stack, which will require dedicated internal engineering hours to validate and merge.

## 5. Bugs & Stability
No new bugs or crashes were reported by the community today. However, active bug-fixing efforts were captured in today's merged PRs:
*   **Medium Severity - Batch Task Deletion:** A bug preventing bulk task deletion from working correctly was identified and addressed in [PR #1939](https://github.com/netease-youdao/LobsterAI/pull/1939) (Currently Open, likely merged soon or acting as a hotfix).
*   **Low Severity - UI/Display:** Fixed an incorrect time display in IM channel chat histories ([PR #1936](https://github.com/netease-youdao/LobsterAI/pull/1936)).
*   **Low Severity - Artifacts:** HTML preview bugs and file duplication issues within the preview module were patched via [PR #1933](https://github.com/netease-youdao/LobsterAI/pull/1933).

## 6. Feature Requests & Roadmap Signals
There are no explicit user feature requests to report today due to the lack of new Issues. However, recent merged PRs provide strong signals regarding the immediate product roadmap:
*   **Focus on "Cowork" (Multi-Agent):** Several PRs today touched the `area: cowork` alongside metadata adjustments (e.g., [PR #1932](https://github.com/netease-youdao/LobsterAI/pull/1932) hiding agent names in specific views). This signals a major strategic push toward refining multi-agent collaboration interfaces.
*   **Artifacts & Scheduled Tasks:** The completion of cron-based scheduled tasks and file previews suggests the next minor versions will focus heavily on Agent autonomy and rich media generation.

## 7. User Feedback Summary
Direct user feedback is unavailable for today's snapshot. The absence of user-reported issues following a significant release (2026.5.9) suggests that the newly introduced features (independent agent directories, pagination) are functioning smoothly without immediate regressions. 

## 8. Backlog Watch
The following items require immediate maintainer attention as they represent significant technical debt and dependency upgrades that have been open for roughly 20 days:
*   **[PR #1764](https://github.com/netease-youdao/LobsterAI/pull/1764):** `react-dom` v18.x to v19.2.6 upgrade.
*   **[PR #1765](https://github.com/netease-youdao/LobsterAI/pull/1765):** `@headlessui/react` v1.x to v2.2.10 upgrade.
*   **[PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766):** `vite` v5.x to v8.0.11 upgrade.

*Maintainers should prioritize reviewing these structural upgrades to prevent the codebase from falling behind modern ECMAScript/build tool standards and incurring future technical debt.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for Moltis based on the provided GitHub data for 2026-05-10.

### 1. Today's Overview
Moltis is demonstrating steady, focused development activity as an open-source AI assistant project, currently characterized by user interface and infrastructure improvements. Over the last 24 hours, the project recorded no new issues but saw updates on 4 pull requests, indicating that maintainers are actively reviewing and merging existing work rather than fielding new bug reports. Two PRs were merged/closed, highlighting advancements in UI chat design and localization, while two substantial feature PRs remain open. The absence of new issues or releases suggests the project is in a stable development phase, likely building towards a significant future milestone.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Project Progress
Project progression today was driven by the closure of two pull requests and continued work on ongoing features:
*   **UI Modernization Closed:** [PR #985 (Closed)](https://github.com/moltis-org/moltis/pull/985) refreshes the web chat composer. It introduces a centered rounded UI, better handling of token/context status, and an explicit attachment picker, signaling a strong focus on improving the core conversational UX.
*   **Localization Enhancements Closed:** [PR #986 (Closed)](https://github.com/moltis-org/moltis/pull/986) updated the Traditional Chinese (zh-TW) locale. This merge reflects an active, global community contributing to standardizing terminology (e.g., consistently translating "AI Assistant").
*   **Infrastructure Advancement (Open):** [PR #987 (Open)](https://github.com/moltis-org/moltis/pull/987) proposes a major shift by replacing the current mdBook deployment with an Astro-generated documentation site featuring modern UI additions (dark mode, responsive navigation).
*   **Agentic Capabilities (Open):** [PR #566 (Open)](https://github.com/moltis-org/moltis/pull/566) continues to be updated. This is a substantial architectural feature adding persistent external-agent sessions (ACP, Codex CLI, Claude Code), which will significantly bolster Moltis's capabilities as a robust AI agent hub.

### 4. Community Hot Topics
While today's activity lacked high-volume comment threads, the open PRs represent critical areas of interest for the community:
*   **Docs Migration ([PR #987](https://github.com/moltis-org/moltis/pull/987)):** Transitioning to Astro indicates a need for a more dynamic, customizable, and user-friendly documentation experience. Modern features like theme toggling and responsive sidebars are highly requested in modern open-source tools.
*   **Localization ([PR #986](https://github.com/moltis-org/moltis/pull/986)):** The community's willingness to submit deep translation overhauls shows a growing international user base that cares deeply about localized accuracy.

### 5. Bugs & Stability
*No bugs, crashes, or regressions were reported in the issues updated over the last 24 hours.* The closure of the chat composer PR ([#985](https://github.com/moltis-org/moltis/pull/985)) without associated bug reports suggests a healthy, non-disruptive development cycle for the frontend.

### 6. Feature Requests & Roadmap Signals
Based on current pull request trajectories, the project is clearly signaling its upcoming roadmap:
*   **Deep Agent Integrations:** [PR #566](https://github.com/moltis-org/moltis/pull/985) indicates that Moltis is positioning itself to be a central orchestrator for external CLI agents and persistent AI sessions. This is likely to be the flagship feature of the next major version.
*   **Revamped Documentation:** Expect a significant upgrade to the project's official documentation site once [PR #987](https://github.com/moltis-org/moltis/pull/987) is merged.
*   **Refined Web UI:** The continuous tweaking of the web chat composer points to a roadmap heavily focused on delivering a sleek, state-of-the-art web interface.

### 7. User Feedback Summary
Implicit feedback from the merged PRs highlights a demand for a polished user experience. The specific updates to the chat composer (adding explicit attachment buttons, fixing token truncation by allowing it to wrap) reveal that users are utilizing Moltis heavily for complex, multi-modal tasks requiring file attachments and context-aware reasoning. Furthermore, the localization PRs underscore that the user base is expanding beyond native English speakers and requires precise regional adaptations.

### 8. Backlog Watch
*   **[PR #566: feat(external-agents): add persistent agent sessions](https://github.com/moltis-org/moltis/pull/566)**: Originally opened on 2026-04-06, this PR is over a month old and represents a massive architectural change. While it received an update on 2026-05-08, it requires close monitoring. Maintainers should ensure this does not become a bottleneck for future PRs or block community contributions in the agent/gateway API layers.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-10

## 1. Today's Overview
CoPaw (QwenPaw) experienced a **very high-activity day** with 42 issues updated and 30 pull requests processed. The maintainers are actively stabilizing the `v1.1.6` release line, having shipped two versions (`v1.1.6-beta.2` and `v1.1.6` stable) within the past 24 hours. The PR throughput is strong (22 merged/closed out of 30), indicating a focused effort on bug fixing and release hardening. While new feature PRs continue to be submitted, the core team is clearly prioritizing stability, configuration persistence, and MCP (Model Context Protocol) lifecycle management.

## 2. Releases

**v1.1.6 (Stable) & v1.1.6-beta.2**
The two new releases focus heavily on **environment diagnostics, configuration persistence, and core performance**:
*   **Windows Diagnostics (`qwenpaw doctor`):** New checks for long path support, PowerShell language mode, and working directory length to prevent silent failures on Windows hosts.
*   **Agent Status API:** Introduced new endpoints/systems for monitoring agent states.
*   **Performance (`perf`):** Optimized console chat history lookup to skip non-arrow keys, reducing UI overhead during long sessions.
*   **Bug Fixes:** Fixed command dispatch errors (renaming channel variables) to ensure correct routing.

## 3. Project Progress
A total of 22 PRs were merged/closed, highlighting rapid iteration on core infrastructure and desktop support:
*   **MCP Stability:** [PR #4152](https://github.com/agentscope-ai/QwenPaw/pull/4152) resolved a critical lifecycle-task leak in stateful MCP clients that caused orphaned processes to leak gigabytes of RAM.
*   **Configuration Persistence:** [PR #4157](https://github.com/agentscope-ai/QwenPaw/pull/4157) fixed a bug where nested agent configurations were lost during saves, directly addressing widespread user complaints.
*   **UI & Memory Leak Fixes:** [PR #4153](https://github.com/agentscope-ai/QwenPaw/pull/4153) and [PR #4148](https://github.com/agentscope-ai/QwenPaw/pull/4148) plugged frontend polling leaks that occurred when closing Channel configuration drawers.
*   **Platform Support:** [PR #4144](https://github.com/agentscope-ai/QwenPaw/pull/4144) fixed desktop loopback readiness checks for Windows `0.0.0.0` bindings.
*   **Tool Security:** [PR #4112](https://github.com/agentscope-ai/QwenPaw/pull/4112) added interactive approval cards for tool-guard in the WeCom channel.

## 4. Community Hot Topics
The most actively discussed issues reflect growing pains among power users utilizing CoPaw for complex, multi-agent, and localized environments:
*   **UI Performance Degradation:** [Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) (11 comments) and [Issue #4108](https://github.com/agentscope-ai/QwenPaw/issues/4108) (5 comments). Users performing massive multi-turn code iterations (200+ turns) experience severe page scrolling lag and computer freezing. *Underlying need: Better context window management and optimized frontend rendering.*
*   **Provider Compatibility Issues:** [Issue #4133](https://github.com/agentscope-ai/QwenPaw/issues/4133) (10 comments). Upgrading to v1.1.5.post2 broke the `opencode` provider. *Underlying need: Stricter API schema validation to prevent regressions in non-standard OpenAI-compatible endpoints.*
*   **Localized Chinese Prompting:** [Issue #4164](https://github.com/agentscope-ai/QwenPaw/issues/4164) (7 comments). Users are requesting native Chinese prompt integration for domestic models like DeepSeek and GLM to avoid translation token loss and improve chain-of-thought accuracy.
*   **Configuration Loss:** [Issue #4145](https://github.com/agentscope-ai/QwenPaw/issues/4145) (8 comments). Multi-agent configurations resetting during updates (Now fixed via PR #4157).

## 5. Bugs & Stability
Several high-severity bugs were reported, though the maintainers have already patched the most critical ones:
1.  **Critical - RAM Leak (Fixed):** [Issue #4105](https://github.com/agentscope-ai/QwenPaw/issues/4105). Orphaned MCP server processes accumulated ~18 GB of RAM over 1.5 days under the `qwenpaw app` daemon. (Fix merged in [PR #4152](https://github.com/agentscope-ai/QwenPaw/pull/4152)).
2.  **High - API Key Loading:** [Issue #4159](https://github.com/agentscope-ai/QwenPaw/issues/4159). DashScope provider ignores valid API keys at runtime, resulting in 401 errors. (No fix PR seen yet).
3.  **High - Network Resiliency:** [Issue #4017](https://github.com/agentscope-ai/QwenPaw/issues/4017). Agents fail to auto-reconnect to message channels after a network interruption when `HEARTBEAT.md` is enabled.
4.  **Medium - Windows Annoyances:** [Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123). `execute_shell_command` flashes a console window on every execution.

## 6. Feature Requests & Roadmap Signals
The community is pushing CoPaw toward more advanced agentic capabilities and enterprise integration:
*   **Advanced Browser Automation:** [Issue #4138](https://github.com/agentscope-ai/QwenPaw/issues/4138) requests batch action support, and [Issue #4155](https://github.com/agentscope-ai/QwenPaw/issues/4155) requests connecting to an active Chrome instance via CDP to bypass repetitive logins. (PR #4139 is open).
*   **Multi-Agent Routing:** [Issue #4160](https://github.com/agentscope-ai/QwenPaw/issues/4160) requests routing messages to different agents from a single channel endpoint.
*   **Time Awareness:** [Issue #4166](https://github.com/agentscope-ai/QwenPaw/issues/4166) suggests injecting real-time timestamps into `pre_reply` contexts to fix LLM temporal disorientation in async tasks.
*   **Prediction:** The influx of PRs related to Tauri ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)), System Tray ([PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041)), and startup refactoring suggests that a major focus of the upcoming `v1.2.0` release will be upgrading the Desktop client experience.

## 7. User Feedback Summary
**Pain Points:** Real-world users deploying multi-agent setups for code iteration report severe frontend memory leaks. Users connecting to local/private LLMs (LM Studio, local Qwen2.5, Volcano Engine) are frequently encountering 422/401 HTTP errors due to CoPaw assuming OpenAI-style array payloads or failing to read config files correctly.
**Satisfaction:** Despite stability complaints, users are heavily invested in CoPaw's architecture (referencing A2A, long-term memory, and tool-guard), indicating strong product-market fit for developers building complex, long-running autonomous workflows.

## 8. Backlog Watch
*   **Long-term UI Performance:** [Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) (Open since April 14). Massive context scrolling lag remains unaddressed and is severely impacting power users.
*   **DeepSeek Parsing:** [Issue #4051](https://github.com/agentscope-ai/QwenPaw/issues/4051). The `<think}` tag parsing issue for DeepSeek V4 needs a definitive fix from the core team.
*   **Pending Review:** Several high-impact architectural PRs have been waiting for review for weeks, including Semantic Skill Routing ([PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)) and AnalyticDB Long-term Memory ([PR #2308](https://github.com/agentscope-ai/QwenPaw/pull/2308)).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-10

## 1. Today's Overview
ZeroClaw is experiencing very high development activity, with 50 active issues and 45 pull requests updated in the last 24 hours. The project is currently in an intense iteration phase, heavily focused on hardening the v0.7.x runtime and paving the way for the next major milestone (v0.8.0). The open PR-to-issue ratio indicates a rapid response from contributors, though the vast majority of fixes and features are still in open review. With zero new releases published today, the focus remains squarely on resolving high-severity bugs and merging foundational architecture improvements.

## 2. Releases
**No new releases were published today.** The project is actively working towards what appears to be the `v0.7.6` skills/UX milestone and the larger `v0.8.0` multi-agent runtime release. 

## 3. Project Progress
Significant foundational work landed today via merged and newly opened PRs, highlighting an effort to recover from past technical debt and improve system stability:
*   **Multi-Agent Runtime ([PR #6545](https://github.com/zeroclaw-labs/zeroclaw/pull/6545)):** The largest PR of the day introduces the full multi-agent runtime (targeting the `integration/v0.8.0` branch), bringing per-backend agent migrations and isolated schemas.
*   **Critical SOP Engine Bug Fixed ([PR #6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534)):** A high-risk bug was patched where `SopEngine` was never actually loading SOPs at runtime because `reload()` wasn't being called at initialization.
*   **Security and Session Scoping ([PR #6539](https://github.com/zeroclaw-labs/zeroclaw/pull/6539), [PR #6541](https://github.com/zeroclaw-labs/zeroclaw/pull/6541)):** Direct sessions are now forced to require shell approval, preventing silent executions. Session keys were also scoped correctly to channel orchestrators.
*   **Observability and Config Fixes:** The broken SSE `/logs` stream was restored ([PR #6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553)), and configuration directory environment variables are now properly respected ([PR #6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533)).
*   **Lost Commits Audit ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)):** Work continues to track and recover 153 commits lost in a previous bulk revert.

## 4. Community Hot Topics
The community is highly engaged around provider compatibility, multi-agent features, and channel UX:
*   **Discord Channel Restriction ([Issue #6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) - 5 comments):** Users are actively discussing the need to restrict the Discord bot to specific channels, aligning its feature set with Matrix and Nextcloud implementations.
*   **OpenAI-Compatible Provider Breakages ([Issue #6298](https://github.com/zeroclaw-labs/zeroclaw/issues/6298) - 3 comments, [Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) - 2 comments):** There is a major ongoing discussion regarding strict API validators (DeepSeek, NVIDIA NIM, MiniMax). The context compression and empty `tool_calls` arrays are causing hard crashes and tool loops, highlighting a massive pain point for users relying on custom providers.
*   **Multi-Agent Isolation ([Issue #6272](https://github.com/zeroclaw-labs/zeroclaw/issues/6272) - 2 comments):** High anticipation for the multi-agent runtime where each alias gets its own isolated workspace, memory, and identity.

## 5. Bugs & Stability
Several high-severity bugs were reported today, many centered around provider APIs and system crashes:
1.  **S1 - Non-leading System Messages ([Issue #6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551)):** Strict OpenAI-compatible endpoints reject ZeroClaw's chat histories because system messages occasionally appear mid-conversation. *Fix exists via [PR #6552](https://github.com/zeroclaw-labs/zeroclaw/pull/6552).*
2.  **S1 - Context Compression Drops Tool Calls ([Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)):** Context compression drops `assistant(tool_calls)` and `tool(result)` for custom providers, causing infinite tool loops. 
3.  **S2 - Matrix Build Failure ([Issue #6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530)):** Compilation fails with Matrix support enabled due to a recursion limit overflow in the `matrix-sdk` v0.16.0 update.
4.  **S2 - Gemini CLI Crash ([Issue #6520](https://github.com/zeroclaw-labs/zeroclaw/issues/6520)):** The Gemini provider crashes upon generating a thought due to an outdated argument syntax (`--print` vs `--prompt`).
5.  **S2 - System CA Trust Failure ([Issue #6528](https://github.com/zeroclaw-labs/zeroclaw/issues/6528)):** ZeroClaw fails to connect to custom providers using self-signed certificates trusted by the host OS.

## 6. Feature Requests & Roadmap Signals
Based on user requests and contributor submissions, clear roadmap signals are emerging for the next two release cycles:
*   **v0.7.6 (Skills & UX Release):** Efforts are highly focused on overhauling the `zeroclaw skills` experience ([Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)), alongside a new user-facing Skills documentation guide ([PR #6542](https://github.com/zeroclaw-labs/zeroclaw/pull/6542)).
*   **Desktop App Enhancements:** Multiple accepted feature requests are signaling a push for macOS/Desktop parity, including universal binary builds for Apple Silicon/Intel ([Issue #6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339)) and richer menu-bar tray options ([Issue #6329](https://github.com/zeroclaw-labs/zeroclaw/issues/6329)).
*   **ACP Session Restore:** A request to implement ACP v1 `session/load` ([Issue #6543](https://github.com/zeroclaw-labs/zeroclaw/issues/6543)) indicates growing use of ZeroClaw in persistent agent architectures.
*   **Provider UX:** Users are asking for first-class support for OpenAI-compatible providers (like Kimi K2.5) without complex workarounds ([Issue #6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518)).

## 7. User Feedback Summary
Users are expressing frustration with the friction of using non-OpenAI/core providers. Strict API validations are breaking workflows for users leveraging DeepSeek, MiniMax, and custom endpoints. Furthermore, localization gaps are evident; users running non-English locales (e.g., `zh-CN`) are noticing hard-coded English strings in channel commands ([Issue #6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548), addressed in [PR #6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550)). On a positive note, the community is highly engaged in the v0.8.0 multi-agent features, suggesting strong enterprise/power-user adoption on the horizon.

## 8. Backlog Watch
Several high-priority and high-risk items are stalled and require maintainer attention:
*   **Security Scoping for Tools ([Issue #5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833)):** A critical security issue where agents can reset/delete sessions belonging to other agents. It has been open since April 17 and is currently blocked/waiting for review.
*   **Outdated GitHub Actions ([PR #6447](https://github.com/zeroclaw-labs/zeroclaw/pull/6447)):** A high-risk CI update to prevent Node 20 deprecation issues. Needs merging to secure the project's deployment pipeline.
*   **Homebrew Tap Outdated ([Issue #6547](https://github.com/zeroclaw-labs/zeroclaw/issues/6547)):** The Homebrew core merge is failing due to the absence of version 0.7.5, blocking easy macOS adoption.
*   **Windows Full Build Failure ([Issue #6280](https://github.com/zeroclaw-labs/zeroclaw/issues/6280)):** The Windows `zeroclaw-hardware` build has been broken for over a week, severely hindering Windows user adoption.

</details>