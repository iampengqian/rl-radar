# OpenClaw Ecosystem Digest 2026-06-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-11 22:31 UTC

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

# OpenClaw Project Digest — June 12, 2026

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high volume of community engagement, with nearly 1,000 issues and pull requests updated in the last 24 hours. While maintainers successfully merged or closed 135 items, a massive backlog of 865 active items remains open, indicating potential bottlenecks in triage and review capacity. The project's development velocity is staggering, heavily driven by community PRs targeting new model integrations, security sandboxes, and enterprise communication channels. However, the high ratio of open work suggests that the maintainers (and their automated "clawsweeper" bots) are struggling to keep pace with bug repro, security reviews, and architectural decisions.

## 2. Releases
*No new releases were published in the last 24 hours. The project remains on its latest active cycle, though numerous PRs are currently queueing up for the next milestone.*

## 3. Project Progress
Significant strides were made in hardening the OpenClaw gateway and expanding its plugin ecosystem, though most major PRs are still awaiting final merge.
* **Communication & UI Enhancements:** Advanced the Workboard operations view with UI polish ([PR #90057](https://github.com/openclaw/openclaw/pull/90057)) and introduced channel echo/session pinning natively for Telegram ([PR #88815](https://github.com/openclaw/openclaw/pull/88815)). A massive PR for MS Teams Voice (CVI), chat, and governance integration ([PR #92081](https://github.com/openclaw/openclaw/pull/92081)) was also introduced.
* **Security & Auth:** Improvements were made to terminal tool fallbacks ([PR #90872](https://github.com/openclaw/openclaw/pull/90872)) and bridging OAuth profiles into the Gemini CLI runtime ([PR #88748](https://github.com/openclaw/openclaw/pull/88748)). 
* **New Integrations:** A massive new SerpApi plugin bringing 25+ specialized web search tools was proposed ([PR #86440](https://github.com/openclaw/openclaw/pull/86440)), alongside quick additions to the Fireworks catalog for DeepSeek V4 Pro and GPT-OSS 120B ([PR #92217](https://github.com/openclaw/openclaw/pull/92217)).
* **Performance:** Added SQLite state benchmark harnesses to systematically test database query performance ([PR #91617](https://github.com/openclaw/openclaw/pull/91617)).

## 4. Community Hot Topics
The community is highly focused on cross-platform availability, robust multi-agent orchestration, and sandbox security.
* **Desktop Client Demand:** The most discussed issue overall remains the request for Linux/Windows Clawdbot Apps ([Issue #75](https://github.com/openclaw/openclaw/issues/75) – 109 comments, 79 👍). Users are eager to step away from web UIs in favor of native OS integrations.
* **Android Distribution:** Following the desktop request, there is heavy demand for prebuilt Android APKs in GitHub releases ([Issue #9443](https://github.com/openclaw/openclaw/issues/9443)), submitted via an AI agent on behalf of a user.
* **Multi-Agent Architecture:** A highly detailed RFC proposes sweeping changes to multi-agent collaboration, suggesting Capability Profiling, Shared Blackboards, and Token Cost Governance ([Issue #35203](https://github.com/openclaw/openclaw/issues/35203)). Users want better orchestration, noting current parallel coding batches suffer from config overwrites and session-lock failures ([Issue #43367](https://github.com/openclaw/openclaw/issues/43367)).

## 5. Bugs & Stability
Several critical stability and security bugs are currently impacting users, particularly those using complex docker setups or multi-agent cron jobs.

* **P1 - Sandbox & Access Failures:** Docker installations using Docker-outside-of-Docker for sandboxing completely fail to bind `/workspace` ([Issue #31331](https://github.com/openclaw/openclaw/issues/31331)). Additionally, workspaces set to `workspaceAccess: "none"` are incorrectly mounted as read-only, breaking tools ([Issue #37634](https://github.com/openclaw/openclaw/issues/37634)).
* **P1 - Cron & Session State Issues:** Isolated cron jobs are consistently failing with "LLM request failed" timeouts ([Issue #91363](https://github.com/openclaw/openclaw/issues/91363)). A severe regression also notes that isolated cron sessions completely overwrite shared files because the `write` tool lacks an append mode ([Issue #40001](https://github.com/openclaw/openclaw/issues/40001)).
* **P1 - Communication Deadlocks & Loops:** The Signal daemon suffers from an orphaned process race condition during restarts, causing total send failures ([Issue #22676](https://github.com/openclaw/openclaw/issues/22676)). A recent heartbeat drift fix also aggressively blocks Telegram message handling during active conversations ([Issue #40611](https://github.com/openclaw/openclaw/issues/40611)).
* **P1 - Auth & Security Bypasses:** CLI-backed helper paths are still bypassing CLI dispatch, exposing un-intended provider paths ([Issue #57326](https://github.com/openclaw/openclaw/issues/57326)). 

## 6. Feature Requests & Roadmap Signals
Based on recent community pressure, the next version of OpenClaw will likely focus heavily on **Data Integrity & Security**:
* **Secrets Masking:** Users are requesting a system where agents can *use* API keys without being able to *read* them, mitigating prompt injection risks ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659)). 
* **Advanced File System Controls:** There is a strong push for Unix-like DAC permissions, replacing binary exec allowlists with path-scoped Read/Write/Execute (RWX) maps ([Issue #39979](https://github.com/openclaw/openclaw/issues/39979)).
* **Token Optimization:** Users are actively frustrated by the ~3,500 token overhead required just to load tool schemas per session ([Issue #14785](https://github.com/openclaw/openclaw/issues/14785)). Tiered bootstrap loading ([Issue #22438](https://github.com/openclaw/openclaw/issues/22438)) is being requested to save context window space.
* **Native Cloud Backups:** An RFC for `.gitignore`-style exclusions in the backup CLI ([Issue #40786](https://github.com/openclaw/openclaw/issues/40786)) shows the community's maturity and need for enterprise-grade disaster recovery.

## 7. User Feedback Summary
Users are enthusiastic about OpenClaw's expanding capabilities—particularly its ability to act as a persistent, multi-channel personal assistant (Telegram, iMessage, Web). However, **dissatisfaction is rising around silent data loss**. Multiple users reported cases where the AI quietly overwrites files, ignores configuration directories, or drops media data in Telegram histories ([Issue #40440](https://github.com/openclaw/openclaw/issues/40440)). Furthermore, users running OpenClaw in headless server environments via Docker feel alienated by features that implicitly expect desktop or local runtime contexts, leading to mounting friction in deployment.

## 8. Backlog Watch
*Many items are getting stuck in an automated triage loop. The following critical issues have pending PRs or need urgent maintainer attention:*
* **Blocked Security Fixes:** A highly upvoted request for an `exec-approvals` denylist ([Issue #6615](https://github.com/openclaw/openclaw/issues/6615)) and a regression preventing `exec` tools from passing environment variables ([Issue #31583](https://github.com/openclaw/openclaw/issues/31583)) both have linked PRs but are stalled awaiting product decisions.
* **Long-Term Session Confusion:** A bug where agents reply to *previous* messages instead of current ones ([Issue #32296](https://github.com/openclaw/openclaw/issues/32296)) has been open since early March, severely breaking the user experience in chat applications.
* **Dashboard Bugs:** A UI issue where editing the WebSocket URL instantly clears the Gateway Token ([Issue #41545](https://github.com/openclaw/openclaw/issues/41545)) remains open, posing a frustrating barrier for remote server deployments.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 12, 2026 community digests.

# Cross-Project Analysis: Open-Source AI Agent Ecosystem
**Date:** June 12, 2026

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a massive surge in developmental velocity, transitioning from simple conversational interfaces to robust, multi-channel execution frameworks. Key architectural shifts are underway, heavily driven by the adoption of the Model Context Protocol (MCP), multi-agent orchestration, and WebAssembly (Wasm) sandboxing. Projects are aggressively competing to offer enterprise-grade features—such as omnichannel delivery (Slack, Discord, Telegram) and scalable memory—while simultaneously battling the growing pains of local deployment friction, context window limits, and security vulnerabilities. As frameworks mature, the community's focus is pivoting from basic feature accumulation to operational stability, secure tool execution, and transparent observability.

## 2. Activity Comparison
*Health Score is calculated based on PR merge ratio, release stability, and bug triage responsiveness.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Ecosystem Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~1,000 | ~1,000 | No release | ⚠️ **Moderate** | High velocity, severe triage bottleneck (865 open items). |
| **NanoBot** | ~29 | 25 | No release | 🟢 **High** | Fast iteration, bug fixes rapidly proposed. |
| **Hermes Agent** | 50 | 50 | No release | ⚠️ **Moderate** | High engagement, but PRs/Issues piling up faster than triage. |
| **PicoClaw** | 6 | 32 | Nightly | 🟢 **High** | Robust automation, high PR merge ratio (19/32). |
| **NanoClaw** | 3 | 17 | No release | 🟢 **High** | Zero bottleneck friction, 9/17 PRs merged. |
| **IronClaw** | 31 | 50 | Staging v0.29.1| 🟢 **High** | Intensive sprint, highly coordinated merges. |
| **LobsterAI** | 2 | 20+ | No release | 🟢 **High** | Exceptional velocity (18 PRs merged). |
| **CoPaw (QwenPaw)**| 29 | 40 | v1.1.11.post2 | 🟡 **Transitional**| Aggressive patching; desktop client migration causing friction. |
| **ZeroClaw** | 48 | 50 | Beta (v0.8.0) | 🟢 **High** | Aggressively closing bugs ahead of stable release. |
| **NullClaw** | 1 | 0 | None | 🔴 **Low** | Dormant. |
| **Moltis** | 1 | 0 | None | 🔴 **Low** | Dormant. |
| *TinyClaw / ZeptoClaw*| 0 | 0 | None | ⚪ **Inactive** | No activity. |

## 3. OpenClaw's Position
*   **Advantages:** OpenClaw possesses the largest and most active community in the ecosystem today (approaching 1,000 daily updates). It acts as a central hub for cutting-edge integrations, evidenced by its expansive plugin ecosystem and push for omnipresent personal assistance (Telegram, MS Teams, iMessage).
*   **Community Size Comparison:** OpenClaw dwarfs peers like NanoBot and PicoClaw in raw volume, operating at a scale of magnitude higher than dormat projects like NullClaw and Moltis. However, it is paying a tax on this success via severe operational bottlenecks.
*   **Technical Approach Differences:** Unlike ZeroClaw or PicoClaw, which are heavily focused on Wasm and Go SDK architectural refinements, OpenClaw relies on massive, sweeping PRs for feature expansion. While this results in rapid capability accumulation, it has led to a fragile architecture where silent data loss, multi-agent session collisions, and Docker sandboxing failures are undermining user trust.

## 4. Shared Technical Focus Areas
Several universal requirements are emerging across the open-source agent landscape:
*   **Multi-Agent Orchestration:** *OpenClaw, NanoBot, PicoClaw, LobsterAI.* Communities are demanding robust Manager/Worker topologies, capability profiling, and shared blackboards to allow sub-agents to execute parallel tasks without overwriting shared state.
*   **Context Window Optimization:** *OpenClaw, Hermes Agent, CoPaw.* Token bloat from system prompts and MCP tool schemas is severely degrading performance. Projects require tiered bootstrap loading, dynamic tool loading, and compaction without context hijacking.
*   **Local LLM & MCP Integration:** *NanoBot, IronClaw, CoPaw, Moltis.* There is an ecosystem-wide push to support open-weights models (via Ollama, vLLM) alongside Model Context Protocol (MCP). Frameworks must gracefully handle slower local streaming and complex third-party MCP authentications.
*   **Desktop & Headless Reliability:** *OpenClaw, Hermes Agent, CoPaw, ZeroClaw.* Transitioning from local desktop apps (Tauri/Electron) to headless Docker deployments is universally causing friction related to file pathing, permissions, and host-network access.

## 5. Differentiation Analysis
*   **Architecture & Security:** ZeroClaw and IronClaw are heavily leaning into low-level architectural safety, utilizing WebAssembly (Wasm) and deep sandboxing. OpenClaw and NanoBot remain more focused on high-level API extensibility and callback registries.
*   **Target Audience:** OpenClaw and LobsterAI cater heavily to power users wanting persistent, omnichannel personal assistants (integrating Telegram, WeChat, Windows Computer Use). Conversely, PicoClaw and NanoClaw are actively building infrastructures aimed at enterprise multi-tenancy and self-hosted deployments.
*   **Tech Stack Shifts:** CoPaw (QwenPaw) is undergoing a painful but necessary transition from Python/PyInstaller to Rust/Tauri to achieve cross-platform desktop parity. PicoClaw relies on a robust Go backend, naturally handling concurrent enterprise workflows better than Node/Python-based peers.

## 6. Community Momentum & Maturity
*   **Tier 1: High Momentum / Iterating Rapidly (NanoBot, NanoClaw, PicoClaw, LobsterAI, ZeroClaw):** These projects show excellent PR merge ratios and are highly responsive to bugs. They are successfully balancing feature additions with necessary stability hardening.
*   **Tier 2: Scaling Pains / Stabilizing (IronClaw, CoPaw):** These projects have high engagement but are managing complex architectural migrations (e.g., IronClaw's "Reborn" binary, CoPaw's Tauri migration). They are actively patching critical post-release issues.
*   **Tier 3: Scaling Bottlenecks (OpenClaw, Hermes Agent):** Both projects have massive community engagement but are failing to triage and merge work at a sustainable pace. OpenClaw's massive open backlog indicates its maintainers are overwhelmed by the project's own success.
*   **Tier 4: Stalled / Dormant (NullClaw, Moltis, TinyClaw, ZeptoClaw):** Ecosystem abandoned or operating at negligible capacity.

## 7. Trend Signals
*   **The "Headless-First" Imperative:** Developers are increasingly running agents in background Docker containers or via CLI. Projects that implicitly expect desktop runtime contexts (OpenClaw, CoPaw, Hermes) are facing severe user backlash. Future agents must be cloud/headless-native by default.
*   **Security Provenance is Becoming Critical:** As agents gain the ability to execute code and manage emails (Fastmail/Gmail), untrusted plugin shadowing, prompt injection via memory, and guard bypasses (CoPaw's python-script-vulnerability) are emerging as existential threats. Implementing strict RWX (Read/Write/Execute) path scoping and secrets masking is now a baseline requirement.
*   **The Shift to Self-Improving Agents:** Ecosystem demand is moving toward continuous-learning architectures. Whether it's ZeroClaw's proposed "Dream Mode" for memory consolidation or CoPaw's "Historian Agent" for automated dev pipelines, there is a clear trend away from stateless execution toward proactive, self-reflective agent topologies.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot based on the provided GitHub data.

# NanoBot Project Digest
**Date:** 2026-06-12
**Repository:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. Today's Overview
NanoBot is exhibiting extremely high development velocity and robust community engagement, with 19 pull requests updated and 6 merged in the last 24 hours alone. The project is currently undergoing significant architectural enhancements, particularly focusing on agent orchestration (subagents and cron jobs), SDK upgrades, and ecosystem modularity (such as moving the desktop app out of the core repo). While feature development is rapid, the community is actively surfacing stability bugs related to asynchronous tasks and MCP (Model Context Protocol) connections, which maintainers and contributors are addressing with equal urgency.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Development today was heavily focused on refining asynchronous agent workflows and expanding integration capabilities. Key merged/closed PRs include:
*   **Message Formatting Fixed:** [PR #4257](https://github.com/HKUDS/nanobot/pull/4257) resolved a bug where `split_message` would break fenced code blocks across multiple chunks, ensuring clean HTML rendering in WebUI and channels.
*   **Provider Flexibility:** [PR #4020](https://github.com/HKUDS/nanobot/pull/4020) successfully made the stream-idle timeout configurable per-provider, greatly improving compatibility with slower local LLMs like Ollama and LM Studio.
*   **Channel Controls:** [PR #4289](https://github.com/HKUDS/nanobot/pull/4289) added a `groupRequireMention` option for Slack, allowing much finer granularity in bot deployment scopes.
*   **Transcription Expansion:** [PR #4281](https://github.com/HKUDS/nanobot/pull/4281) integrated SiliconFlow as a whisper-compatible transcription provider.
*   **Repo Cleanup:** [PR #4298](https://github.com/HKUDS/nanobot/pull/4298) and [PR #4297](https://github.com/HKUDS/nanobot/pull/4297) merged Worktree features and research docs. 

### 4. Community Hot Topics
The most dynamic discussions revolve around multi-provider support and environment compatibility:
*   **Multiple Custom Providers:** There is a strong push from the community to support multiple OpenAI-compatible endpoints simultaneously. [Issue #4305](https://github.com/HKUDS/nanobot/issues/4305) proposes a "template" parameter, which aligns perfectly with the highly active [PR #3239](https://github.com/HKUDS/nanobot/pull/3239). This indicates a major upcoming shift in how users configure diverse LLM backends.
*   **Linux Sandbox Compatibility:** [Issue #4236](https://github.com/HKUDS/nanobot/issues/4236) (Closed) highlighted a critical compatibility issue with Ubuntu 24.04's restricted user namespaces breaking the `bwrap` sandbox. The quick resolution shows the project's responsiveness to OS-level security changes.

### 5. Bugs & Stability
Several high-severity crashes and workflow disruptions were reported today, though fix PRs are already in the pipeline:
1.  **Gateway Crash on MCP Reconnect (Critical):** [Issue #4302](https://github.com/HKUDS/nanobot/issues/4302) reports that the gateway crashes when an MCP session terminates and attempts to reconnect due to an Asyncio task cancellation scope error. 
    *   *Status:* **Fix available** via [PR #4303](https://github.com/HKUDS/nanobot/pull/4303).
2.  **Subagents Breaking Cron Workflows (High):** [Issue #4290](https://github.com/HKUDS/nanobot/issues/4290) reveals that cronjobs complete prematurely when subagents are spawned, causing the main agent to drop the subagent's result.
    *   *Status:* **Fixes proposed** in [PR #4304](https://github.com/HKUDS/nanobot/pull/4304) and [PR #4293](https://github.com/HKUDS/nanobot/pull/4293), which introduce `pending_queue` to handle injection.
3.  **Codex API 400 Errors (Medium):** The OpenAI Codex provider occasionally sends duplicate reasoning items, breaking multi-turn conversations.
    *   *Status:* **Fix available** via [PR #4021](https://github.com/HKUDS/nanobot/pull/4021).

### 6. Feature Requests & Roadmap Signals
Based on today's issue tracker and PRs, the following features are likely to land in the next major release:
*   **Python SDK Overhaul:** [PR #4296](https://github.com/HKUDS/nanobot/pull/4296) is upgrading the SDK to support stable sessions, memory control, and richer run metadata.
*   **Advanced Subagent Configuration:** [PR #4291](https://github.com/HKUDS/nanobot/pull/4291) introduces configurable model presets for subagents, allowing a parent agent to spawn cheaper/faster models for specific tasks.
*   **Session-Aware Automations:** [PR #4299](https://github.com/HKUDS/nanobot/pull/4299) seeks to bind scheduled cron automations to specific user sessions, pausing if the session is active.
*   **Skill Loader Caching:** [PR #4301](https://github.com/HKUDS/nanobot/pull/4301) aims to cache skill discovery metadata, which will drastically reduce agent initialization latency.
*   **UI Versioning:** [Issue #4233](https://github.com/HKUDS/nanobot/issues/4233) requested version visibility in the WebUI, a quality-of-life feature likely to be merged soon.

### 7. User Feedback Summary
**Pain Points:** Users running local or heavy open-source models are experiencing timeouts, leading to frustration (resolved today via PR #4020). Additionally, users relying heavily on the subagent architecture for complex, scheduled tasks are hitting hard crashes and broken state loops.
**Satisfaction:** Despite the bugs, users are highly engaged and impressed with the subagent and multi-provider capabilities. The fact that users are building complex "fund management" skills ([PR #4300](https://github.com/HKUDS/nanobot/pull/4300)) and utilizing multiple custom providers indicates an advanced, power-user demographic that is pushing the framework to its limits.

### 8. Backlog Watch
*   **[PR #3239](https://github.com/HKUDS/nanobot/pull/3239): Support Multiple Custom OpenAI-Compatible Providers.** Open since April 17th, this is a massive architectural feature that is highly requested (as seen in Issue #4305) and needs maintainer review to be merged.
*   **[PR #3538](https://github.com/HKUDS/nanobot/pull/3538): Gateway CLI Commands.** Open since April 29th, this PR adds crucial `start/stop/restart/status` commands for the NanoBot gateway. 
*   **[PR #4294](https://github.com/HKUDS/nanobot/pull/4294): Desktop App Removal.** Needs careful maintainer oversight to ensure CI/CD pipelines and WebUI references are not broken by stripping the Electron app from the core repository.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent based on the GitHub data provided for June 12, 2026.

### 1. Today's Overview
Hermes Agent is exhibiting exceptionally high development velocity and community engagement, with 50 issues and 50 pull requests updated in the last 24 hours alone. The maintainers are actively pushing boundaries on desktop stability, agent memory, and multi-platform integration. However, the issue tracker is currently heavily skewed towards open items (43 open vs. 7 closed issues; 42 open vs. 8 merged PRs), indicating that bug reports and feature requests are piling up faster than they can be triaged. A significant portion of today's activity revolves around hardening the agent's context compaction logic, fixing Docker deployment paths, and expanding platform adapters like Discord and Slack.

### 2. Releases
*No new releases were published in this reporting period.*

### 3. Project Progress
Significant architectural and stability improvements were merged today, alongside advancements in feature PRs:
*   **TUI & Gateway Fixes:** Merged [PR #44503](https://github.com/NousResearch/hermes-agent/pull/44503) fixing Kanban database disk I/O errors by switching to DELETE journal mode. Merged [PR #44464](https://github.com/NousResearch/hermes-agent/pull/44464) which successfully routed the `/compress` command through the TUI gateway.
*   **CLI & Configurations:** Merged [PR #44092](https://github.com/NousResearch/hermes-agent/pull/44092) adding validation for the `--skill` flag at task creation. Closed [PR #38745](https://github.com/NousResearch/hermes-agent/pull/38745) fixed an issue where `.env` variables were overriding explicit `enabled: false` platform configurations.
*   **Open Progress:** Notable open PRs include a complete Rust-backed install manager ([PR #44067](https://github.com/NousResearch/hermes-agent/pull/44067)) and a critical security hardening patch restricting dashboard APIs to bundled plugins ([PR #44472](https://github.com/NousResearch/hermes-agent/pull/44472)).

### 4. Community Hot Topics
*   **Dependency and Tooling Friction:** [Issue #44121](https://github.com/NousResearch/hermes-agent/issues/44121) (6 comments) highlights a painful developer experience where `npm ci` fails under npm 11 due to lock file desync. 
*   **Local Model Context Limitations:** [Issue #43900](https://github.com/NousResearch/hermes-agent/issues/43900) (4 comments) sparked discussion regarding Ollama local models being silently capped at a 4096-token context, causing garbled outputs. Users heavily utilizing local hardware are running into invisible guardrails.
*   **Agent Multi-tasking Environments:** [Issue #27649](https://github.com/NousResearch/hermes-agent/issues/27649) (4 comments, ongoing since May) shows a strong desire from the community to run multiple Hermes processes robustly without log files corrupting or overlapping.

### 5. Bugs & Stability
*   **P1 - Critical Security & Pathing:** 
    *   [PR #44472](https://github.com/NousResearch/hermes-agent/pull/44472) addresses a major vulnerability where untrusted, user-installed plugins could shadow trusted backend dashboard routes. 
    *   [Issue #33913](https://github.com/NousResearch/hermes-agent/issues/33913) reports a severe Docker double-`.hermes` path mismatch that breaks authentication and persistence.
*   **P2 - Compaction Hijacking & Memory Leaks:** 
    *   Closed issue [#42812](https://github.com/NousResearch/hermes-agent/issues/42812) and [#41607](https://github.com/NousResearch/hermes-agent/issues/41607) highlight a severe bug where stale "Active Task" instructions from context compaction hijack new, unrelated user sessions.
    *   [Issue #44327](https://github.com/NousResearch/hermes-agent/issues/44327) reveals that cached gateway agents can leak DB flush cursors across turns, resulting in skipped assistant transcript rows.
*   **P3 - Multimodal Failures:** [Issue #44242](https://github.com/NousResearch/hermes-agent/issues/44242) reports that ACP (Agent Communication Protocol) image blocks are dropped before reaching the API, completely breaking vision capabilities.

### 6. Feature Requests & Roadmap Signals
*   **Simultaneous Backends:** [Issue #37876](https://github.com/NousResearch/hermes-agent/issues/37876) requests the ability for the Desktop app to connect to local and remote Hermes backends simultaneously, signaling a need for power-user multi-environment management.
*   **Platform Expandability:** [PR #44504](https://github.com/NousResearch/hermes-agent/pull/44504) introduces telephony tools (Vapi and TextBee), while [PR #44508](https://github.com/NousResearch/hermes-agent/pull/44508) adds handling for Slack `reaction_added` events. This points toward a roadmap heavily focused on omnichannel communication.
*   **Core Agent Safety:** [PR #44437](https://github.com/NousResearch/hermes-agent/pull/44437) is hardening memory-context provenance to prevent injected prompt attacks via memory blocks.

### 7. User Feedback Summary
Users are heavily utilizing Hermes Agent in diverse, complex environments (Docker, CLI, WeChat, Discord, Slack), but they are experiencing friction with platform adapters (e.g., Discord rate-limit drops in [Issue #44468](https://github.com/NousResearch/hermes-agent/issues/44468), duplicate WeChat responses in [Issue #44497](https://github.com/NousResearch/hermes-agent/issues/44497)). Local model users are frustrated by hardcoded assumptions (like the 4096 context limit) that degrade performance. Satisfaction remains high regarding the agent's core extensibility and rapid addition of new tools, but UI/UX friction in the Desktop app (scrollable model selectors, profile switching errors) is a growing pain point.

### 8. Backlog Watch
*   **Automated Skills Watchdog:** [Issue #38240](https://github.com/NousResearch/hermes-agent/issues/38240) (Open since June 3) shows the automated freshness probe for the Skills Hub is still in a degraded state and needs core attention.
*   **Windows Updater:** [Issue #26670](https://github.com/NousResearch/hermes-agent/issues/26670) (Open since May 16) reveals that updating Hermes on Windows while running fails due to file quarantining. This critical OS-level bug has been lingering for nearly a month.
*   **Rotating Logs:** [Issue #27649](https://github.com/NousResearch/hermes-agent/issues/27649) remains unresolved, leaving users who run multiple background agents with fragmented and rotated log files.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the provided GitHub data.

# PicoClaw Project Digest
**Date:** 2026-06-12

## 1. Today's Overview
PicoClaw is experiencing a phase of highly active development and maintenance, processing 32 pull requests and 6 issues in the last 24 hours. The repository shows strong automated hygiene, with Dependabot actively pushing updates for both Go backend libraries and frontend React/Vite toolchains. The engineering focus currently revolves around fixing channel-specific bugs, resolving state persistence issues in the UI, and introducing sophisticated multi-agent capabilities. Overall project health appears robust, with a high ratio of merged to closed PRs (19 merged/closed out of 32).

## 2. Releases
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/v0.2.9-nightly.20260611.d955d5bb)** (Published June 11)
  - **Build:** `v0.2.9-nightly.20260611.d955d5bb`
  - **Notes:** Automated build. Users are warned that it may be unstable and to use it with caution. 

## 3. Project Progress
Significant code merges occurred today, advancing both system stability and configuration management:
- **Session Configuration Fixed:** [PR #3067](https://github.com/sipeed/picoclaw/pull/3067) resolved a UI state persistence bug where the "Session Scope" setting reverted to defaults upon reload by introducing a `DmScope` field to `SessionConfig`.
- **Go SDK & Dependency Upgrades:** The project successfully merged an update to the official Model Context Protocol SDK ([PR #3098](https://github.com/sipeed/picoclaw/pull/3098) - bumped to `go-sdk` 1.6.1), alongside several AWS SDK bumps (e.g., [PR #3102](https://github.com/sipeed/picoclaw/pull/3102)).
- **Go Error Handling Improvements:** [PR #3060](https://github.com/sipeed/picoclaw/pull/3060) improved backend stability by replacing `%v` with `%w` for proper error wrapping chains and fixing silent `json.MarshalIndent` failures.
- **Channel & Singleton Fixes:** Closed stale PRs included a fix for WhatsApp native mode configuration detection ([PR #2934](https://github.com/sipeed/picoclaw/pull/2934)) and a fix to verify process identity during singleton PID checks ([PR #2955](https://github.com/sipeed/picoclaw/pull/2955)).

## 4. Community Hot Topics
- **Multi-Agent Communication:** The open [PR #2937 (Feat/agent collaboration)](https://github.com/sipeed/picoclaw/pull/2937) is a highly strategic pull request introducing an internal Agent Collaboration Bus (mailboxes, collaboration threads, isolated sessions). This indicates PicoClaw is targeting complex, enterprise-level agentic workflows.
- **MCP Header Forwarding:** [PR #2696](https://github.com/sipeed/picoclaw/pull/2696) (closed/stale) discussed allowing channels to forward HTTP headers to MCP servers per-request (e.g., passing `Authorization` tokens via context). This signals a strong community need for secure, dynamic multi-tenant MCP integrations.

## 5. Bugs & Stability
Bugs reported today highlight edge cases in multi-agent workflows, cross-platform compatibility, and model fallbacks. Ranked by severity:
1. **[Critical] Security Bypass in Launcher:** [Issue #3080](https://github.com/sipeed/picoclaw/issues/3080) reported that `allowed_cidrs` in the PicoClaw launcher can be bypassed via same-host loopback proxying during the first-run setup. (Status: Closed, implies a silent patch was applied).
2. **[High] Asynchronous Sub-Agent Message Duplication:** [Issue #3094](https://github.com/sipeed/picoclaw/issues/3094) detailed a bug where `spawn` tool tasks send duplicate messages (raw data vs. processed summary) to Telegram/Feishu channels due to the `ForUser` field being used for both direct push and agent aggregation.
3. **[Medium] Model Hallucinations on Non-Vision Models:** [Issue #3108](https://github.com/sipeed/picoclaw/issues/3108) showed that asking text-only models (like DeepSeek-v4-flash) to describe images causes hallucinations instead of gracefully failing or using an intermediary captioning tool.
4. **[Low] Windows Path Tool Bug:** [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) is an older, active bug where the `list_dir` tool fails on Windows because backslashes are not converted to the forward slashes required by Go's `fs.FS`.

## 6. Feature Requests & Roadmap Signals
- **Agent Collaboration Bus ([PR #2937](https://github.com/sipeed/picoclaw/pull/2937)):** The introduction of durable inter-agent communication suggests the next major iteration of PicoClaw will allow users to orchestrate multiple specialized sub-agents.
- **Copilot SDK Integration:** An open Dependabot PR ([PR #3107](https://github.com/sipeed/picoclaw/pull/3107)) seeks to bump `github.com/github/copilot-sdk/go` to version `1.0.1`. This heavily implies PicoClaw is preparing to officially support GitHub Copilot as a first-class model provider or integration channel.
- **Frontend Ecosystem Upgrades:** Open PRs for `vite` ([PR #3101](https://github.com/sipeed/picoclaw/pull/3101)), `shadcn` ([PR #3104](https://github.com/sipeed/picoclaw/pull/3104)), and `typescript-eslint` indicate an ongoing, significant refresh of the web UI frontend.

## 7. User Feedback Summary
- **Pain Point - UI Config Persistence:** Users expressed frustration that UI configuration changes (like Session Scope) were silently failing to save to the backend ([PR #3067](https://github.com/sipeed/picoclaw/pull/3067)).
- **Pain Point - Message Formatting:** The duplication bug in sub-agents ([Issue #3094](https://github.com/sipeed/picoclaw/issues/3094)) reveals that users leveraging PicoClaw for automated output in external chat apps (Feishu/Telegram) care deeply about clean, non-redundant message formatting.
- **Use Case - Mobile/Termux:** A closed issue ([Issue #2954](https://github.com/sipeed/picoclaw/issues/2954)) requested 32-bit Android system support via Termux, showing a user base interested in running PicoClaw directly on older mobile hardware.

## 8. Backlog Watch
Maintainers should direct their attention to the following aging or unresolved items:
- **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) (Created April 10):** The Windows path separator mismatch in the `list_dir` tool has been open for over two months with 5 comments. This actively blocks Windows users from using default file system tools.
- **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937) (Created May 24):** The "Agent Collaboration Bus" feature PR has been open for over two weeks. Given its architectural impact, it requires a maintainer review or status update.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-12

## 1. Today's Overview
NanoClaw is experiencing a massive surge in development velocity and community engagement, processing 17 pull requests and 3 issues in the last 24 hours. The repository shows zero bottleneck friction, with 9 PRs already merged/closed, indicating highly responsive continuous integration and maintainer review processes. Today's development heavily targets foundational architecture, specifically expanding the framework's "additive" extension capabilities via new action/callback registries and a multi-bot substrate. Simultaneously, the community is actively hardening the platform's container lifecycle, security protocols, and CLI reliability under production workloads. 

## 2. Releases
No new official releases were published today. However, the high volume of merged foundational PRs suggests a significant version tag is likely being staged.

## 3. Project Progress
Exceptional structural progress was made today, with 9 PRs merged. A significant portion of this work was contributed by developer `gavrielc`, focusing on modular, append-only system architectures:
*   **Multi-Instance Support:** Native channel-instance dimension was added, establishing a multi-bot substrate ([PR #2733](https://github.com/nanocoai/nanoclaw/pull/2733)).
*   **Extensibility Infrastructure:** Added a raw-route registry for webhooks ([PR #2739](https://github.com/nanocoai/nanoclaw/pull/2739)), an approval-resolved callback registry ([PR #2737](https://github.com/nanocoai/nanoclaw/pull/2737)), and a read-side registry for delivery actions ([PR #2734](https://github.com/nanocoai/nanoclaw/pull/2734)).
*   **Session Management:** Implemented a per-group idle timeout for clean exits in ephemeral sessions ([PR #2740](https://github.com/nanocoai/nanoclaw/pull/2740)) and ensured the acting user is recorded on resolved approval cards ([PR #2735](https://github.com/nanocoai/nanoclaw/pull/2735)).
*   **Setup Experience:** Fixed an interaction bug where handoff context was being passed to Claude via system prompts instead of being auto-submitted as a first user message ([PR #2741](https://github.com/nanocoai/nanoclaw/pull/2741)).

## 4. Community Hot Topics
*   **[Issue #1356](https://github.com/nanocoai/nanoclaw/issues/1356): Agent memory system redesign** (6 👍 | 2 comments)
    *   *Analysis:* The highest-voted issue today highlights scaling bottlenecks with NanoClaw's current file-based memory system (`MEMORY.md` + markdown files). As agents scale to handle dozens of files/kilobytes, users are demanding a more robust, comprehensive database-driven memory architecture. 
*   **[PR #2742](https://github.com/nanocoai/nanoclaw/pull/2742): The PR Factory (Recipes)** 
    *   *Analysis:* This open PR introduces a published recipe of five component skills, signaling strong community interest in composable, shareable agent skill-sets that go beyond single utility functions.

## 5. Bugs & Stability
Several critical operational bugs were identified today (with corresponding fixes already submitted):
1.  **[Issue #2495](https://github.com/nanocoai/nanoclaw/issues/2495): Read-only DB drop (High Severity)** 
    *   *Bug:* `writeOutboundDirect` opens the outbound database in read-only mode, causing command-gate denials to be silently dropped.
    *   *Fix Status:* Solved via [PR #2738](https://github.com/nanocoai/nanoclaw/pull/2738).
2.  **[PR #2732](https://github.com/nanocoai/nanoclaw/pull/2732): Container Lifecycle Crashes (High Severity)**
    *   *Bug:* Multi-agent health audit revealed Docker Desktop `drvfs` staging crash-loops (exit 127) and missing concurrent container limits.
    *   *Fix Status:* PR is open, adding bind-mount sourcing and crash-on-spawn circuit breakers.
3.  **[Issue #2731](https://github.com/nanocoai/nanoclaw/issues/2731): Egress Lockdown Hijacks localhost (Medium Severity)**
    *   *Bug:* Network lockdown traps `host.docker.internal`, stripping agents of access to host-local services (like Ollama endpoints). 
    *   *Fix Status:* Related to [PR #2730](https://github.com/nanocoai/nanoclaw/pull/2730), which fixes `.env` loading under `launchd`/`systemd`.

## 6. Feature Requests & Roadmap Signals
Based on today's additive PRs and issue tracking, the short-term roadmap clearly points toward **Enterprise Readiness & Multi-Tenancy**:
*   *Action/Callback Registries:* The shift toward "additive" module observations (e.g., [PR #2737](https://github.com/nanocoai/nanoclaw/pull/2737)) signals an upcoming API freeze around plugin architectures, allowing developers to hook into core events without forking the source.
*   *Enhanced Routing & CLI side-effects:* [PR #2743](https://github.com/nanocoai/nanoclaw/pull/2743) highlights a push to ensure the CLI correctly handles background side-effects (like destination row creation). 
*   *Prediction:* The next minor/major version will likely formally deprecate the flat markdown memory system in favor of a scalable memory store, fully unlocking multi-tenant deployments.

## 7. User Feedback Summary
Real-world deployment is highlighting growing pains around Docker host networking and CLI abstractions. Users running local LLM bridges (like Ollama) are hitting firewall/egress snags ([Issue #2731](https://github.com/nanocoai/nanoclaw/issues/2731)). Furthermore, users integrating Telegram are discovering that the CLI pairing flow is decoupled from internal database wirings, causing silent message drops in newly paired chats ([PR #2728](https://github.com/nanocoai/nanoclaw/pull/2728), [PR #2743](https://github.com/nanocoai/nanoclaw/pull/2743)). While satisfaction with the framework's extensibility remains high, the underlying message delivery pipeline is proving brittle when managed via generic CRUD/CLI tooling.

## 8. Backlog Watch
*   **[Issue #1356](https://github.com/nanocoai/nanoclaw/issues/1356): Agent memory system redesign** - Created in March, updated yesterday. It urgently needs a maintainer decision/RFC to prevent the open-source community from fragmenting memory implementations.
*   **[PR #2611](https://github.com/nanocoai/nanoclaw/pull/2611): [security] fix(cli): preserve caller context after approval** - Open since late May, this security-focused PR needs review to ensure CLI approvals securely maintain user context. 
*   **[PR #2685](https://github.com/nanocoai/nanoclaw/pull/2685): docs(signal)** - Open for a week, resolves documentation drift regarding Signal group typing indicators and outbound reactions. A quick merge would reduce duplicate support tickets.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-12, the NullClaw project is experiencing a period of low observable development and community activity, with no new releases, pull requests, or closed issues in the past 24 hours. The repository currently shows one newly opened bug report, indicating that users are actively experimenting with local integrations, specifically environment setups involving Ollama. The lack of PR updates and releases suggests that the core maintainers may be operating behind the scenes, focusing on unmerged work, or experiencing a temporary lull in the development cycle. Overall project health appears stable but static, requiring monitoring to ensure community reports are addressed to maintain user engagement.

### 2. Releases
*Omitted due to no new releases in the reporting period.*

### 3. Project Progress
*No project progress was recorded today. There were no merged or closed pull requests, and no issues were resolved in the last 24 hours.*

### 4. Community Hot Topics
The most active topic in the community is centered around local model execution reliability. 
*   **Topic:** [Issue #952 [bug] Local model using ollama returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952)
*   **Analysis:** While the issue currently has zero comments and reactions, it is the sole driver of today's community interaction. The underlying need here is for seamless, "plug-and-play" compatibility with popular local LLM runners like Ollama. Users expect open-source agents like NullClaw to interface flawlessly with local models without requiring complex configuration tweaks (such as adjusting token limits or stop tokens), indicating a demand for robust out-of-the-box local AI experiences.

### 5. Bugs & Stability
*   **High Priority:** [Issue #952](https://github.com/nullclaw/nullclaw/issues/952) - Local model using ollama returns incomplete answers.
      *   **Details:** Reported by `bloodgroup-cplusplus`, this bug involves the NullClaw agent failing to generate complete sentences when interfacing with a locally hosted instance of `gemma` via Ollama. 
      *   **Status:** Currently OPEN with no linked fix PRs. This issue likely stems from default generation parameters (e.g., max tokens, context window size, or EOS token misinterpretation) within NullClaw's Ollama integration module.

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were filed today, Issue #952 sends a strong implicit roadmap signal. To improve stability, the next version of NullClaw should prioritize:
*   **Advanced Local Integration Settings:** Introducing configurable parameters for local models (max tokens, temperature, context length) directly within NullClaw.
*   **Ollama Profile Presets:** Adding default configuration profiles for popular Ollama models (like Gemma, Llama 3, Mistral) to prevent output truncation without manual user intervention.

### 7. User Feedback Summary
*   **Pain Points:** Users are experiencing friction when attempting to self-host and run models locally. The output truncation highlights a disconnect between NullClaw's default prompt/generation handling and Ollama's backend requirements.
*   **Use Cases:** The primary use case observed today is privacy-focused, offline AI assistance utilizing open-weights models (Gemma) via local runtime environments (Ollama).
*   **Satisfaction:** Currently dissatisfied due to the functional blocker preventing basic conversational completion, though the user's willingness to submit a detailed report with screenshots shows a strong desire to see the project succeed.

### 8. Backlog Watch
*   **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952)**: Requires immediate maintainer attention. As a newly created, unassigned bug with visual evidence provided by the user, it represents an accessible entry point for triage. Maintainers should attempt to reproduce the `gemma` truncation locally to determine if the issue lies in NullClaw's API parsing or Ollama's response streaming.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-12

## 1. Today's Overview
IronClaw is currently experiencing a period of rapid, intensive development, heavily focused on refining its "Reborn" architecture and local WebUI v2. The project saw exceptionally high activity in the last 24 hours, with 50 updated pull requests and 31 issues touched, indicating a coordinated sprint towards production readiness and enhanced user experience. The majority of work is centered on stabilizing the local developer experience, fixing tool-handling and credential bugs, and expanding delivery capabilities (like Slack integration). Despite the high velocity, no new official release was cut today, though a significant version bump (0.24.0 -> 0.29.1) is actively being staged in an open PR.

## 2. Releases
No new releases were published today. However, a substantial release is being prepared in PR [#3708](https://github.com/nearai/ironclaw/pull/3708), which bumps the core `ironclaw` crate from `0.24.0` to `0.29.1`. This upcoming release includes breaking API changes in `ironclaw_common` and `ironclaw_skills`, suggesting major architectural shifts are imminent once the Reborn features are fully validated.

## 3. Project Progress
Significant feature advancement occurred today, with 24 PRs merged/closed. Key progress areas include:
*   **Automation & Delivery:** Notable progress in outbound messaging and automation. PR [#4753](https://github.com/nearai/ironclaw/pull/4753) merged Phase B of Slack approval routing, fixing "bare approve" bugs. Open PRs like [#4779](https://github.com/nearai/ironclaw/pull/4779) and [#4780](https://github.com/nearai/ironclaw/pull/4780) are actively exposing delivery targets (like Slack) to the Reborn model for better autonomous routing.
*   **Document Processing:** Merged foundational work on document handling, specifically extracting text from inbound attachments (PR [#4672](https://github.com/nearai/ironclaw/pull/4672), PR [#4676](https://github.com/nearai/ironclaw/pull/4676)), empowering the agent to natively "read" uploaded files in WebChat v2.
*   **Subagent Scaling:** PR [#4765](https://github.com/nearai/ironclaw/pull/4765) fixed subagent prompt body budgets, replacing a restrictive 512-byte limit with a dedicated type to allow more complex multi-agent workflows.
*   **Testing & QA:** PR [#4769](https://github.com/nearai/ironclaw/pull/4769) introduced 22 new fully-mocked end-to-end test suites for the Reborn binary, massively increasing automated coverage.

## 4. Community Hot Topics
The most actively discussed issues revolve around declarative configuration and local deployment stability:
*   **[EPIC] Configuration-as-Code (Issue [#3036](https://github.com/nearai/ironclaw/issues/3036)):** With 7 comments and ongoing attention, this epic remains a focal point. The community and maintainers are actively trying to replace the messy mix of `.env` files, JSON settings, and workspace docs with a unified, auditable schema for tenant blueprints.
*   **Local Setup & Credential Persistence (Issue [#4766](https://github.com/nearai/ironclaw/issues/4766)):** A major pain point for users (like author `sunglow666`) is that UI-saved NEAR AI credentials are not used by the chat runtime after a restart, forcing environment variable reliance. This highlights a strong user need for seamless local state persistence.
*   **Model Picker Bug (Issue [#4703](https://github.com/nearai/ironclaw/issues/4703)):** Users are frustrated that the NEAR AI model picker saves the display name (e.g., "DeepSeek V4 Flash") instead of the actual model ID, breaking downstream inference. A fix is already inbound via the large UI fix PR [#4772](https://github.com/nearai/ironclaw/pull/4772).

## 5. Bugs & Stability
Several high-priority bugs regarding agent resilience and local-dev stability were reported today:
*   **Agent Halting on Tool Failure (Issue [#4761](https://github.com/nearai/ironclaw/issues/4761)):** The agent stops entirely after repeated tool failures instead of recovering. This severely impacts autonomous reliability. Fix PR: [#4784](https://github.com/nearai/ironclaw/pull/4784) (Handles capability unavailability gracefully).
*   **WASM Extension Dispatch Error (Issue [#4783](https://github.com/nearai/ironclaw/issues/4783)):** Pure-compute WASM capabilities fail in local-dev with a spurious "network" obligation error before execution.
*   **Workspace Path Duplication (Issue [#4759](https://github.com/nearai/ironclaw/issues/4759)):** Using workspace-relative paths causes the agent to duplicate paths (e.g., `workspace/workspace/demo/a.txt`).
*   **Payload Size Limit (Issue [#4751](https://github.com/nearai/ironclaw/issues/4751)):** Large generation requests fail if internal tool arguments exceed 16384 bytes.
*   **UI/UX Instabilities:** Reported issues include SSE reconnect failures dropping tool activity ([#4770](https://github.com/nearai/ironclaw/issues/4770)), non-functional code block wrap toggles ([#4748](https://github.com/nearai/ironclaw/issues/4748)), and dead-ended tool denial states ([#4764](https://github.com/nearai/ironclaw/issues/4764)). 

## 6. Feature Requests & Roadmap Signals
Clear roadmap signals are emerging around enterprise readiness and automated operations:
*   **Global "Always Allow" Tools (Issue [#4776](https://github.com/nearai/ironclaw/issues/4776)):** Users want a global setting to bypass tool approval prompts for eligible tools, speeding up local workflows.
*   **Automated QA Epic (Issue [#4775](https://github.com/nearai/ironclaw/issues/4775)):** Maintainers are planning a zero-human-involvement CI pipeline for the Reborn binary, targeting enterprise-grade reliability.
*   **Tenant Sandboxes & Persistent Environments (PR [#4785](https://github.com/nearai/ironclaw/pull/4785)):** Design docs were merged to wire up `ProcessBackendKind::TenantSandbox` and allow agents to build and promote their own software extensions securely. This signals a massive leap toward hosted, autonomous multi-tenant architectures.

## 7. User Feedback Summary
Local developers and testers are vocal about "first-run" friction. The dominant pain points are inconsistent state management (credentials resetting on restart, workspace paths duplicating) and opaque error handling (generic "driver unavailable" errors masking bad configs, as seen in Issue [#4683](https://github.com/nearai/ironclaw/issues/4683)). Conversely, the core community is highly engaged with the Reborn WebUI, providing deep technical bug reports that show advanced usage (e.g., WASM capabilities, subagent prompt limits). Overall satisfaction seems tied directly to how smoothly the local WebUI handles tool approvals and workspace file discovery (Issue [#4750](https://github.com/nearai/ironclaw/issues/4750)).

## 8. Backlog Watch
*   **Nightly E2E Failures (Issue [#4108](https://github.com/nearai/ironclaw/issues/4108)):** Open since late May, the automated Nightly E2E workflow is still reporting failures (last updated today). This requires immediate CI/CD attention to prevent regressions from slipping into the pending `0.29.1` release.
*   **Production PostgreSQL Wiring (Issue [#4551](https://github.com/nearai/ironclaw/issues/4551)):** Closed but heavily foundational, this area still requires careful monitoring as the team enforces the final production cutover gates (Issue [#4619](https://github.com/nearai/ironclaw/issues/4619)).
*   **Observability PR (PR [#4588](https://github.com/nearai/ironclaw/pull/4588)):** This large, low-risk PR introducing trajectory observer hooks for benchmarking has been open since June 9th and needs a final review merge to unblock external host observability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the GitHub data provided:

### 1. Today's Overview
LobsterAI is experiencing a period of exceptionally high development velocity, with maintainers merging an impressive 18 pull requests in the last 24 hours. The development focus has been heavily directed toward the "Cowork" feature, OpenClaw gateway stability, and expanding self-service sharing capabilities. While engineering output is peak, community issue tracking shows quieter activity, with two open issues currently gathering user feedback. Overall, project health appears robust, actively shipping feature-rich updates and hardening existing infrastructure to prevent memory leaks and crashes.

### 2. Releases
No new releases were published today.

### 3. Project Progress
A massive 18 PRs were closed/merged, showcasing rapid iteration primarily by core contributors (`fisherdaddy`, `liugang519`, `btc69m979y-dotcom`, `liuzhq1986`). Key advancements include:
*   **Computer Use MVP:** Introduced a Windows x64 built-in Computer Use kit with lifecycle management and an MCP server bridge for app/window listing and launching ([PR #2143](https://github.com/netease-youdao/LobsterAI/pull/2143)).
*   **Cowork Enhancements:** Added a real-time ASR voice input mode ([PR #2148](https://github.com/netease-youdao/LobsterAI/pull/2148)), improved post-compaction context continuity so agents can reliably continue tasks after chat history is compressed ([PR #2145](https://github.com/netease-youdao/LobsterAI/pull/2145)), and prevented stopped startup turns from sending chats ([PR #2147](https://github.com/netease-youdao/LobsterAI/pull/2147)).
*   **File & HTML Sharing:** Implemented the ability to share files ([PR #2151](https://github.com/netease-youdao/LobsterAI/pull/2151)) and added access mode selection (share code vs. public access) for HTML shares ([PR #2146](https://github.com/netease-youdao/LobsterAI/pull/2146)).
*   **Windows Installer:** Fixed NSIS destructive init and redesigned the engine loading page ([PR #2142](https://github.com/netease-youdao/LobsterAI/pull/2142)).

### 4. Community Hot Topics
The most active community discussions revolve around multi-agent orchestration and token efficiency:
*   **[Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462):** A highly detailed feature request asking for individual model bindings per agent and a formal multi-agent collaboration mode (agent groups/rooms with a manager). The user noted that LobsterAI's current interaction experience already outperforms competing products like Alibaba's HiClaw.
*   **[Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121):** A user reported a potential bug causing text to be output repeatedly, raising concerns about severe token waste and asking the community if it's a gateway issue. 

### 5. Bugs & Stability
Several stability issues were identified and definitively resolved by today's merged PRs:
1.  **High - Gateway OOM Crashes:** Under long-running multi-channel workloads, the OpenClaw gateway experienced Out-Of-Memory crashes. This was fixed by setting an explicit V8 old-space heap limit ([PR #2149](https://github.com/netease-youdao/LobsterAI/pull/2149)).
2.  **Medium - Pre-send Sync Drops:** Cold-starts or process stalls (35-107s observed) caused messages to drop due to a strict 30s timeout. This timeout has been safely raised to 90s ([PR #2152](https://github.com/netease-youdao/LobsterAI/pull/2152)).
3.  **Low - Memory Leaks & UI Bugs:** Addressed a memory leak where the `CopyButton` component failed to clean up timers on unmount ([PR #1478](https://github.com/netease-youdao/LobsterAI/pull/1478)), and fixed scheduled tasks losing their description/enabled state upon editing ([PR #1482](https://github.com/netease-youdao/LobsterAI/pull/1482)).

### 6. Feature Requests & Roadmap Signals
Based on recent merges and active issues, the immediate roadmap is heavily focused on **autonomous desktop interaction** and **enterprise communication**:
*   *Just Landed:* The Computer Use MVP and Gmail trigger integration ([PR #2143](https://github.com/netease-youdao/LobsterAI/pull/2143), [PR #1484](https://github.com/netease-youdao/LobsterAI/pull/1484)) signal a strong push toward local task automation. 
*   *Predicted Next Steps:* The community is loudly requesting decentralized agent architecture. We predict the next few versions will introduce a "Manager/Worker" agent topology (as requested in Issue #1462) and model failover capabilities (already addressed in [PR #1483](https://github.com/netease-youdao/LobsterAI/pull/1483)).

### 7. User Feedback Summary
Users are highly engaged with the tool's multi-instance capabilities (introduced in version 4.3), praising the platform's smooth UX compared to market alternatives. However, friction remains around operational costs. The anxiety expressed in [Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121) regarding duplicated outputs "eating tokens" highlights that users are running complex, heavy workflows and are sensitive to API cost efficiency and gateway predictability.

### 8. Backlog Watch
*   **[PR #1459](https://github.com/netease-youdao/LobsterAI/pull/1459) [OPEN]:** A well-structured PR from April adding hover Tooltips for skills. It includes smart directional positioning and i18n support but has sat unanswered and is now marked stale. Needs maintainer review.
*   **[Issue #1462](https://github.com/netease-youdao/LobsterAI/issues/1462) [OPEN]:** Marked stale, but contains valuable architectural feedback regarding multi-agent orchestration. Maintainer acknowledgment would validate the community's direction expectations.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-06-12

## 1. Today's Overview
Project Moltis is currently experiencing a period of low development activity, with no new pull requests, merged code, or releases published today. The community's focus is directed entirely toward a newly reported integration bug. Specifically, activity over the last 24 hours consists of a single open issue regarding an authorization failure with a third-party service. Overall project momentum appears temporarily stalled on the code contribution front, though active user engagement remains steady through issue reporting.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
There has been no quantifiable project progress in terms of merged pull requests or closed issues over the last 24 hours. With zero open or merged PRs, it appears maintainers have not pushed new code commits or reviewed external contributions today. 

## 4. Community Hot Topics
The only active item driving community discussion today is:
*   **[#1115 [Bug]: Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115)**: Created and updated on 2026-06-11, this issue already has 1 comment, indicating prompt community engagement. 
    *   *Underlying needs*: This highlights a specific and immediate user need for seamless integration between Moltis, the Model Context Protocol (MCP), and Fastmail. It signals that users are actively trying to use Moltis as a personal AI assistant for email management, and authentication pipelines for third-party APIs are a critical touchpoint for the user base.

## 5. Bugs & Stability
One new bug was reported today, ranked by immediate impact:
*   **High/Medium Severity**: **[#1115 Fastmail MCP Authorisation](https://github.com/moltis-org/moltis/issues/1115)** - Users are experiencing authorization failures when attempting to connect Fastmail via MCP. The author has confirmed this is occurring on the latest version of Moltis. While not a core system crash, integration failures directly impair the AI assistant's usability. 
    *   *Status*: Currently Open. **Note:** There are no linked fix PRs at this time.

## 6. Feature Requests & Roadmap Signals
There are no explicitly labeled feature requests in the last 24 hours. However, the bug report regarding Fastmail MCP integration ([#1115](https://github.com/moltis-org/moltis/issues/1115)) acts as a strong roadmap signal. It indicates that users are heavily relying on Moltis for MCP-driven communications. Future versions should prioritize stabilizing third-party OAuth/API authentication frameworks to ensure smooth personal assistant workflows.

## 7. User Feedback Summary
Based on today's data, user sentiment leans toward functional frustration regarding a specific use case:
*   **Pain Point**: Users are encountering friction when trying to authorize external email services (Fastmail). 
*   **Use Case**: Moltis is being utilized as a centralized, MCP-enabled personal AI assistant to manage and interact with external inboxes.
*   **Satisfaction**: While the user followed proper preflight checklists (searching for existing issues, verifying the latest version), the lack of a prompt workaround highlights a temporary dissatisfaction with the platform's third-party integration reliability.

## 8. Backlog Watch
While there are no long-unanswered historical issues in today's data slice, the newly created **[#1115](https://github.com/moltis-org/moltis/issues/1115)** requires maintainer attention to prevent it from becoming a lingering backlog item. Because the issue author noted that they could not provide full session context (with the preflight checkbox left unchecked), maintainers may need to prompt the user for logs to successfully diagnose and resolve the MCP authorization block.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw) for 2026-06-12.

### 1. Today's Overview
The CoPaw (now actively transitioning to the QwenPaw nomenclature) project is experiencing a massive surge in community engagement and development velocity, evidenced by 40 updated PRs and 29 issues in the last 24 hours. The team is aggressively iterating on stability and security, having pushed two post-release patches (`v1.1.11.post1` and `v1.1.11.post2`) to address critical desktop launch and SSL bugs. Meanwhile, the contributor community is driving major architectural proposals, including a "Runtime 2.0" modular overhaul and advanced security sandboxing. The overall project health is highly active, though the rapid release cadence has introduced transitional friction for desktop users.

### 2. Releases
**v1.1.11.post1 & v1.1.11.post2**
These are rapid hotfix releases aimed at stabilizing the desktop client experience.
*   **v1.1.11.post2** focused on UI polish, specifically truncating tool card titles to a single line with an ellipsis to prevent layout breaks. 
*   **v1.1.11.post1** reverted a problematic pack compile check for Discord after conda-unpack, addressing critical desktop launch failures.

### 3. Project Progress
Recent merged/closed PRs highlight a strong focus on release engineering, CI/CD, and UI hygiene:
*   **CI/CD & Desktop Stability:** Maintainers closed several infrastructure loops, including hardening Tauri Windows CI against `crates.io` fetch failures ([PR #5125](https://github.com/agentscope-ai/QwenPaw/pull/5125)) and adding a release verification gate ([PR #5121](https://github.com/agentscope-ai/QwenPaw/pull/5121)) to catch broken builds before publication.
*   **Security Enhancements:** Advanced security fixes were merged to isolate keychain master keys per install ([PR #5028](https://github.com/agentscope-ai/QwenPaw/pull/5028)) and block agents from executing code in auto-loaded or secret directories ([PR #5117](https://github.com/agentscope-ai/QwenPaw/pull/5117)).
*   **Telemetry & UI:** Implemented per-turn token and context usage popovers ([PR #5130](https://github.com/agentscope-ai/QwenPaw/pull/5130)) and improved Langfuse observability trace grouping ([PR #5128](https://github.com/agentscope-ai/QwenPaw/pull/5128)).

### 4. Community Hot Topics
*   **Desktop Client Instability ([Issue #5106](https://github.com/agentscope-ai/QwenPaw/issues/5106) & [Issue #5086](https://github.com/agentscope-ai/QwenPaw/issues/5086)):** The most severe community pain points revolve around the Tauri desktop client failing to launch on Windows due to an OpenSSL 3.5 regression and infinite process spawning that crashes systems.
*   **Context & Memory Optimization ([Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) & [Issue #5122](https://github.com/agentscope-ai/QwenPaw/issues/5122)):** Users are actively discussing token bloat. One user suggested integrating Headroom to reversibly compress context by up to 95%, while another detailed that invisible MCP and skill metadata are secretly consuming massive amounts of context window space.
*   **Agent Loop Interaction ([Issue #5103](https://github.com/agentscope-ai/QwenPaw/issues/5103) & [Issue #5116](https://github.com/agentscope-ai/QwenPaw/issues/5116)):** There is a strong demand for asynchronous chat controls, such as conversation queueing, steering, and auto-interruptions, rather than relying on manual `/stop` commands.

### 5. Bugs & Stability
*   🔴 **Critical: Tauri Desktop Black Screen / Memory Exhaustion ([Issue #5106](https://github.com/agentscope-ai/QwenPaw/issues/5106)):** The new Tauri desktop client throws SSL errors and spawns infinite background processes, leading to total system crashes on Windows 11. *(Status: Addressed via recent hotfixes)*
*   🔴 **Critical: Agent Tool Guard Bypass ([Issue #5090](https://github.com/agentscope-ai/QwenPaw/issues/5090)):** A security bug where the Agent bypasses `rm` command interception by writing and executing a malicious Python script to delete files instead. 
*   🟠 **High: v1.1.10+ Local Model Hangs ([Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)):** When configured with local vLLM deployments (e.g., Qwen3.6-27B), the chat UI hangs indefinitely on submission. Downgrading to v1.1.5 is the current workaround.
*   🟡 **Medium: Memory Search UI Rendering ([Issue #5098](https://github.com/agentscope-ai/QwenPaw/issues/5098)):** The `auto_memory_search` tool successfully injects context to the model, but the Console UI fails to render the table, showing `unknown` for file paths.
*   🟡 **Medium: `copaw` to `qwenpaw` Migration Mess ([Issue #5104](https://github.com/agentscope-ai/QwenPaw/issues/5104)):** The project rebrand has left orphaned directories (`~/.copaw/` vs `~/.qwenpaw/`), causing plugin installation failures and path confusion on macOS.

### 6. Feature Requests & Roadmap Signals
Based on user proposals and active PRs, the near-term roadmap will likely focus on **Agent Control & UI**:
*   **Advanced Chat UX:** Users are begging for features inspired by competitors like OpenClaw and Perplexity, specifically conversation queueing ([Issue #5103](https://github.com/agentscope-ai/QwenPaw/issues/5103)) and "Quote to follow-up" context referencing ([Issue #5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)).
*   **Better Telemetry:** With the token bloat concerns, the newly introduced per-turn token stats ([PR #5130](https://github.com/agentscope-ai/QwenPaw/pull/5130)) will be vital.
*   **Dev Team Automation:** A fascinating first-time contributor PR ([PR #5134](https://github.com/agentscope-ai/QwenPaw/pull/5134)) proposes adding a "Historian Agent" to the dev pipeline to automatically document changelogs and development gotchas into the project's memory.

### 7. User Feedback Summary
The transition from a Python/PyInstaller frontend to a Rust/Tauri-based desktop client has been notably rocky, generating significant user frustration. However, users remain highly invested in the platform because of its robust support for local LLMs, MCP integrations, and cross-platform channel support (DingTalk, Discord). Power users are pushing the system to its limits with long-running automated workflows and are quickly hitting the ceiling of the agent execution loop's stability. There is clear dissatisfaction with how invisible system prompts (skills, MCP metadata) eat up context windows without transparent reporting.

### 8. Backlog Watch
*   **Runtime 2.0 Overhaul ([PR #5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)):** A massive, potentially breaking architectural change introducing a modular runtime and `ToolCoordinator`. This needs urgent maintainer review as it affects the core execution path.
*   **Agent OS Driver ([PR #5067](https://github.com/agentscope-ai/QwenPaw/pull/5067)):** A unified abstraction layer for MCP/A2A/ACP protocols. This is a critical architectural addition that has been lingering.
*   **DataPaw BI Plugin ([PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)):** A highly-anticipated plugin adding 12 Business Intelligence skills, which has been awaiting review since late May.
*   **Agent Timed Task Failure ([Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)):** Scheduled tasks generated by agents are silently failing to execute. This critical workflow bug remains open and requires core investigation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on June 12, 2026.

### 1. Today's Overview
ZeroClaw is experiencing an exceptionally high level of development activity, with 50 pull requests and 48 issues updated in the last 24 hours. The maintainers are aggressively closing out bugs and finalizing features, as evidenced by a strong merge-to-close ratio (18 closed PRs, 23 closed issues). The project's current focus is clearly centered on hardening the agent runtime, stabilizing the MCP (Model Context Protocol) tooling layer, and polishing the user experience across the TUI and Web dashboards ahead of the upcoming v0.8.0 stable release.

### 2. Releases
No new releases were recorded today. The project remains in its beta cycle (as indicated by references to `v0.8.0-beta-1` in recent bug reports).

### 3. Project Progress
Significant architectural and UX improvements were merged today, pushing the project closer to a stable v0.8.0 release:
*   **MCP Configuration Overhaul:** [PR #7267](https://github.com/zeroclaw-labs/zeroclaw/pull/7267) landed per-field editing for `[[mcp.servers]]`, completely replacing the clunky JSON-array blob editor in the web dashboard and adding missing MCP UI to the TUI.
*   **TUI and CLI Fixes:** [PR #7510](https://github.com/zeroclaw-labs/zeroclaw/pull/7510) fixed a snake_case/kebab-case mapping issue with API keys during quickstart, and [PR #7206](https://github.com/zeroclaw-labs/zeroclaw/pull/7206) patched the calculator tool to safely reject factorial inputs that exceed `u128` limits.
*   **Skills Routing:** [PR #7463](https://github.com/zeroclaw-labs/zeroclaw/pull/7463) fixed a pathing bug where `load_skills_for_agent` was looking in the wrong directory, successfully restoring custom skill loading from agent workspaces.
*   **Office Document Parsing:** [PR #7454](https://github.com/zeroclaw-labs/zeroclaw/pull/7454) introduced the `office-tools` WASM plugin, enabling agents to extract text and Markdown from `.docx`, `.xlsx`, and `.pptx` files. 

### 4. Community Hot Topics
*   **UI/Dashboard Availability Crisis:** The most discussed issue today was [Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866) (30 comments), where users report persistent inability to access the Web UI and Tauri desktop app. This highlights a deep pain point for non-technical users trying to deploy the assistant.
*   **"Dream Mode" Memory Consolidation:** [Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849) (17 comments) proposed a fascinating feature for idle-period memory consolidation and reflective learning. This indicates the community's desire to move ZeroClaw from a stateless execution model into a proactive, self-improving personal assistant.
*   **Cross-Platform CI Coverage:** [Issue #7486](https://github.com/zeroclaw-labs/zeroclaw/issues/7486) sparked discussion about adding cross-platform Clippy lint coverage, revealing underlying friction regarding macOS and Windows Rust compilation regressions.

### 5. Bugs & Stability
*   **[S1 - Workflow Blocked] Subagent Delegation & Security Gating:** [Issue #7470](https://github.com/zeroclaw-labs/zeroclaw/issues/7470) revealed a critical blocker for multi-agent setups where empty `risk_profile.allowed_tools` cause delegation to fail. *Status: Accepted, fix pending.*
*   **[S1 - Workflow Blocked] Non-TTY Quickstart Crash:** Running `zeroclaw quickstart` in CI/scripts without a TTY triggers an infinite redraw loop, generating gigabytes of output ([PR #7513](https://github.com/zeroclaw-labs/zeroclaw/pull/7513), [PR #7516](https://github.com/zeroclaw-labs/zeroclaw/pull/7516)). *Status: Fix PRs opened and actively being prioritized.*
*   **[S1 - Workflow Blocked] MCP Deferred Loading Hangs:** [Issue #6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) showed that `tool_search` hangs for 120 seconds then auto-denies in webhook mode because it lacks default auto-approval. *Status: Closed/Addressed.*

### 6. Feature Requests & Roadmap Signals
Several high-impact RFCs and feature requests signal the immediate trajectory of the project:
*   **Native Dynamic-Library Plugin System:** [Issue #7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) proposes moving away from a monolithic architecture to allow dynamically loaded plugins.
*   **OCI Registries for Plugin Storage:** [Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) suggests using standard container registries (via `wasm-pkg-client` and cosign) for Wasm plugin discovery and supply chain security.
*   **Pre-Turn Routing Intent Extraction:** [Issue #7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) aims to introduce a lightweight intent extraction step so agents can naturally route messages across channels (e.g., Slack vs. Telegram) without manual tool calls.
*   *Prediction:* Expect these plugin/RFC concepts to be formally adopted in v0.8.0 or v0.9.0, heavily leaning into Wasm and OCI standards.

### 7. User Feedback Summary
Users are enthusiastically adopting the multi-channel capabilities and custom skills, but are hitting significant friction with configuration ergonomics. A recurring theme is "silent failures"—such as MCP being disabled by default despite being configured ([Issue #6873](https://github.com/zeroclaw-labs/zeroclaw/issues/6873)), memory generating entries when explicitly disabled ([Issue #6871](https://github.com/zeroclaw-labs/zeroclaw/issues/6871)), and dead config code that gives a false impression of functionality ([Issue #6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720)). Enterprise users are also requesting a "full" Docker image ([Issue #3642](https://github.com/zeroclaw-labs/zeroclaw/issues/3642)) to avoid manual feature-flag compilation. Overall, satisfaction with the agent's core capability is high, but operational stability needs improvement.

### 8. Backlog Watch
*   **Agent Infinite Loop on Android:** [Issue #6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) is severely blocking Termux/Android users with an infinite tool-call loop. It is currently marked as `status:blocked` and `needs-author-action`, requiring maintainer intervention to unblock mobile use cases.
*   **Xiaomi Reasoning Content Loss:** [Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) (OpenAI-compatible provider models like `mimo-v2.5`) drops `reasoning_content` during agentic loops. This breaks advanced reasoning flows and is currently stuck waiting for author action.
*   **Custom TLS Certificate Support:** [PR #5797](https://github.com/zeroclaw-labs/zeroclaw/pull/5797) adds crucial `tls_ca_cert_path` support for corporate/self-hosted deployments behind private PKIs. It has been open since April and is at high risk of going stale.

</details>