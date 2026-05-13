# OpenClaw Ecosystem Digest 2026-05-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-13 22:23 UTC

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

# OpenClaw Project Digest: 2026-05-14

## 1. Today's Overview
OpenClaw is experiencing an extreme spike in issue activity, with **500 issues updated in the last 24 hours**, predominantly remaining open (443 open vs. 57 closed). Pull request activity is similarly surging but heavily backlogged, with **479 open PRs** competing for maintainer attention against only 21 merged or closed. While four new beta releases (v2026.5.12-beta.3 through beta.6) were shipped today to address urgent bugs, the ratio of incoming bug reports to closed issues indicates a short-term stability deficit. A significant portion of the activity consists of bug reports and regression complaints from users upgrading through the April/May release branches. Overall project health shows high community engagement but a bottleneck in review and triage capacity.

## 2. Releases
**4 New Beta Releases shipped:** `v2026.5.12-beta.3`, `beta.4`, `beta.5`, and `beta.6`

*   **v2026.5.12-beta.6**
    *   **Fixes:** iMessage no longer sends visible `<media:image>` placeholder text for media-only native image sends while preserving the internal echo key that prevents self-echo duplicate replies (#81209). Fixed an issue where configured agent main sessions were not created before the first session initialization.
*   **v2026.5.12-beta.5**
    *   **Fixes:** Gateway now correctly passes the Talk session scope to the resolver [AI] (#81379). Gateway protocol now requires v4 clients and streams explicit chat `deltaText`/`replace` frames, allowing SDK clients to consume assistant updates without local diffing (#80725).
*   **v2026.5.12-beta.4**
    *   **Fixes:** Codex runtime now allows the installed `@openclaw/codex` package to use its private task-runtime SDK helper, fixing `MODULE_NOT_FOUND` during migrated OpenAI/Codex beta runs. Codex migration now correctly maps the `Enter` key to activate highlighted checkbox rows before continuing.
*   **v2026.5.12-beta.3**
    *   **Fixes:** Codex harness now keeps auth-profile-backed media tools (like `image_generate`) available when OpenAI auth resides in the agent's auth-profile store. WhatsApp install now allows Baileys' pinned libsignal git subdependency under pnpm 11.

## 3. Project Progress
Although the merge rate today was low, several critical patches and architectural PRs saw heavy activity and maintainer engagement:
*   **Codex Integration Focus:** Following the recent Codex migration, multiple PRs aim to stabilize the harness, including restoring Codex cron automation compatibility ([PR #81510](https://github.com/openclaw/openclaw/pull/81510)), fixing runtime context prompt leaks ([PR #81554](https://github.com/openclaw/openclaw/pull/81554)), and enabling configured MCP servers in the app-server harness ([PR #81551](https://github.com/openclaw/openclaw/pull/81551)).
*   **Gateway & Session Reliability:** Work proceeds on resilient session eviction/drain via WebSockets ([PR #69822](https://github.com/openclaw/openclaw/pull/69822)), idempotent chat injection for user/assistant roles ([PR #81513](https://github.com/openclaw/openclaw/pull/81513)), and fixing config data loss during version upgrades ([PR #80257](https://github.com/openclaw/openclaw/pull/80257)).
*   **Multi-Agent & Provider Headers:** A large PR introduces per-agent and per-cron-job provider request headers ([PR #79990](https://github.com/openclaw/openclaw/pull/79990)), improving multi-tenant routing.

## 4. Community Hot Topics
The community is currently highly active, focusing heavily on gateway degradation, context management, and memory systems.
*   **Chronic Windows 11 Gateway Degradation:** A heavily commented issue ([Issue #73323](https://github.com/openclaw/openclaw/issues/73323)) reports multi-subsystem network and timer degradation across v4.23-4.26, causing 60s timeouts and stalling Telegram polling.
*   **Context Bloat & Memory Management:** Users are highly vocal about token waste. Bootstrap files being re-injected every turn and wasting 20-30% of tokens is a major pain point ([Issue #67419](https://github.com/openclaw/openclaw/issues/67419)), alongside the dreaming plugin promoting raw verbatim logs to `MEMORY.md` without distillation ([Issue #67363](https://github.com/openclaw/openclaw/issues/67363)).
*   **Streaming & Timeout Behavior:** Users require a configurable streaming watchdog timeout threshold because extended-thinking models (like DeepSeek-R1) falsely trigger the current 30s reset mechanism ([Issue #68596](https://github.com/openclaw/openclaw/issues/68596)).
*   **Configuration Usability:** A highly upvoted Chinese-language issue ([Issue #67626](https://github.com/openclaw/openclaw/issues/67626)) expresses deep frustration with the increasingly complex JSON/TUI configuration process, comparing it negatively to the older "Clawbot" era.

## 5. Bugs & Stability
The project is tracking several high-severity bugs and regressions, with new fix PRs attempting to address them:
*   **Stuck & Zombie Processes:** High severity. Gateway sessions are getting stuck and detected but never aborted, requiring external restarts ([Issue #71127](https://github.com/openclaw/openclaw/issues/71127)). Additionally, sandbox zombie processes are accumulating under PID 1 until hitting system limits ([Issue #68691](https://github.com/openclaw/openclaw/issues/68691)).
*   **Update Data Loss:** High severity. Running `openclaw update` mid-turn causes total message loss on Telegram ([Issue #71178](https://github.com/openclaw/openclaw/issues/71178)), and version upgrades via `doctor --fix` can destroy user-authored config fields ([PR #80257](https://github.com/openclaw/openclaw/pull/80257)).
*   **Mattermost & MS Teams Regressions:** Mattermost slash commands are returning 503 "not yet initialized" errors in v2026.4.15 ([Issue #68113](https://github.com/openclaw/openclaw/issues/68113)).
*   **Subagent & Tool Drops:** Anthropic provider receiving an empty tools array despite 17 tools being computed ([Issue #74377](https://github.com/openclaw/openclaw/issues/74377)); subagent completions being lost on direct-announce timeouts ([Issue #67777](https://github.com/openclaw/openclaw/issues/67777), [PR #80223](https://github.com/openclaw/openclaw/pull/80223)).
*   **UI/UX Bugs:** Control UI webchat duplicates every assistant reply exactly twice on v2026.4.21 ([Issue #71992](https://github.com/openclaw/openclaw/issues/71992)).

## 6. Feature Requests & Roadmap Signals
Key feature requests and RFCs signal the community's desire for better multi-agent architectures and UI integrations.
*   **OpenAI Realtime API for Talk Mode:** A requested feature to achieve sub-second speech-to-speech latency in macOS Talk Mode, matching the existing Twilio voice-call plugin experience ([Issue #71195](https://github.com/openclaw/openclaw/issues/71195)).
*   **Multi-tenant Teams Bots:** Request for a single OpenClaw Gateway to support multiple Azure/Teams bot identities simultaneously ([Issue #71058](https://github.com/openclaw/openclaw/issues/71058)).
*   **Control UI Plugin Contributions:** An RFC to add data-driven UI contribution slots for plugin chat modes, approval cards, and status surfaces ([Issue #71736](https://github.com/openclaw/openclaw/issues/71736)).
*   **Service Identity Separation:** An RFC to decouple internal service identity from user authentication in the gateway, improving local loopback and internal RPC security ([Issue #69066](https://github.com/openclaw/openclaw/issues/69066)).

## 7. User Feedback Summary
User feedback highlights a clear tension between the rapid addition of powerful new features (Codex migration, Dreaming memory) and core system stability/usability.
*   **Pain Points:** The transition from simple TUI setups to complex JSON configurations is alienating legacy users. Token consumption is a major anxiety point, particularly regarding non-configurable context bloat and unoptimized memory promotion. Message reliability across Slack, Telegram, and Discord during agent turns is a recurring theme of dissatisfaction.
*   **Satisfaction & Use Cases:** Users are actively pushing the boundaries of multi-agent orchestration and extended thinking models. The demand for features like Realtime API voice integration, configurable upload limits, and wiki-lint fixes shows a dedicated power-user base relying on OpenClaw for heavy, continuous automation workflows.

## 8. Backlog Watch
*   **Message Lifecycle & Hook Reliability:** Outbound hooks (`message_sent` / `before_message_write`) have been broken for webchat and TUI paths for nearly a month without resolution ([Issue #70928](https://github.com/openclaw/openclaw/issues/70928)).
*   **Plugin Discovery & Compaction Debt:** The Amazon Bedrock Mantle plugin has lacked a `config.discovery.enabled` gate for weeks, causing unnecessary IAM discovery runs on every request ([Issue #67288](https://github.com/openclaw/openclaw/issues/67288)). Deferred compaction debt left stranded by bootstrap/reconcile policies is also lingering ([Issue #67716](https://github.com/openclaw/openclaw/issues/67716)).
*   **Large Architectural PRs Needing Review:** Massive contributions like the MS Teams SDK rebase ([PR #76262](https://github.com/openclaw/openclaw/pull/76262)) and the Policy Runtime Audit Metadata enforcement ([PR #81104](https://github.com/openclaw/openclaw/pull/81104)) require urgent maintainer attention to prevent downstream merge conflicts.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report analyzing the open-source personal AI assistant and agent ecosystem based on the community digests from May 14, 2026.

### 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently characterized by explosive development velocity and architectural maturation. Core reference frameworks and major players (OpenClaw, IronClaw, CoPaw) are undergoing massive overhauls to support complex multi-agent orchestration, WASM runtimes, and multi-tenant capabilities. Meanwhile, lightweight or specialized alternatives (NanoBot, PicoClaw, NanoClaw) are rapidly capturing niche power-user bases by focusing on edge-device compatibility, specific OSINT/Marketing integrations, and lightweight local LLM failovers. Across the board, projects are transitioning from simple chat-interfaces into robust, enterprise-grade automation platforms.

### 2. Activity Comparison
*Note: Health Score is rated 1-5 (5 = highly active/healthy merge rates and triage; 1 = stagnant).*

| Project | Issues Updated | PRs Updated | Release Status (May 14) | Health Score (1-5) |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (443 open) | 500 (479 open) | 4 Beta Releases | 3 (High engagement, extreme triage bottleneck) |
| **Hermes Agent** | 50 | 50 | No Release (v0.13.0) | 4 (Stable contributor/reviewer ratio) |
| **IronClaw** | 23 | 50 | No Release (Lagging crates.io) | 4 (Massive architectural momentum) |
| **CoPaw** | 31 | 50 | v1.1.7-beta.2 | 5 (High velocity, rapid feature integration) |
| **ZeroClaw** | 33 | 50 | No Release (v0.7.6/0.8.0 pending) | 4 (Heavy development, major migrations ahead) |
| **LobsterAI** | Low | 22+ | 2026.5.12 | 5 (Excellent backlog reconciliation) |
| **NanoBot** | 19 | 15 | No Release | 4 (Healthy, focused iteration) |
| **NanoClaw** | Low | 27 | No Release | 4 (Rapid feature expansion) |
| **PicoClaw** | 10 | 42 | Nightly Build | 4 (Approaching stable release) |
| **NullClaw** | 1 | 1 | No Release | 2 (Slow, community-driven) |
| **ZeptoClaw** | 4 (All closed) | 0 | No Release | 2 (Internal audit focus) |
| **Moltis** | 1 | 0 | No Release | 1 (Dormant) |
| **TinyClaw** | 0 | 0 | No Release | 1 (Inactive) |

### 3. OpenClaw's Position
*   **Advantages:** As the core reference implementation, OpenClaw boasts the largest raw user base and community engagement, serving as the bleeding edge for new AI behaviors (e.g., Codex migration, "Dreaming" memory systems). Its multi-channel gateway support remains the most extensive in the ecosystem.
*   **Disadvantages vs. Peers:** OpenClaw is currently suffering from severe growing pains. Its issue/PR triage bottleneck (479 open PRs) is drastically worse than peers like Hermes or CoPaw, leading to deployment instability and regression complaints. Furthermore, legacy users are actively pushing back against its increasing configuration complexity.
*   **Technical Approach:** OpenClaw is heavily reliant on JSON/TUI configurations and monolithic gateway deployments, whereas projects like IronClaw are moving toward WASM componentization, and Hermes/ZeroClaw are utilizing decoupled plugin/skill architectures to maintain modularity. 

### 4. Shared Technical Focus Areas
Several unified requirements are emerging simultaneously across independent projects, highlighting a maturing market:
*   **Model Fallback & Resilience:** Users operating at scale are abandoning single-model setups. **NanoBot** introduced `fallback_models`, **Hermes** is patching 429/billing error fallbacks, and **OpenClaw** is implementing per-agent provider headers to handle provider rate-limits and outages gracefully.
*   **MCP (Model Context Protocol) Stability:** The transition to MCP is universally bumpy. **OpenClaw, CoPaw, NanoBot**, and **PicoClaw** all reported high-severity bugs ranging from silent failures and zombie processes to unresponsive event loops when connecting to HTTP/SSE MCP servers.
*   **Context Compaction & Memory Management:** Token waste is a universal pain point. **OpenClaw**, **NanoBot**, **LobsterAI**, and **CoPaw** are all actively trying to solve context bloat, implementing visual context indicators, graceful session message preservation during auto-compact, and efficient SQLite memory stores.
*   **Containerization & Edge Deployment:** **Hermes**, **PicoClaw**, and **ZeroClaw** are facing an influx of users deploying agents via Docker on NAS hardware, Raspberry Pi, and macOS containers, requiring urgent fixes for permissions, IPv4/IPv6 binding, and Apple Container runtimes.

### 5. Differentiation Analysis
*   **Target Users & Features:** **NanoClaw** is aggressively targeting enterprise marketing, growth-hacking, and OSINT workflows (integrating Reddit, LinkedIn, and Lighthouse directly). In contrast, **OpenClaw** and **CoPaw** focus heavily on technical, omnichannel personal assistants (WeChat, Slack, Telegram integrations). **ZeptoClaw** differentiates entirely by prioritizing strict CVE tracking and security postures for high-compliance use cases.
*   **Technical Architecture:** **IronClaw** and **ZeroClaw** stand out technically by leaning heavily into Rust and WebAssembly (WASM) to create highly secure, sandboxed plugin environments. Conversely, the rest of the ecosystem (OpenClaw, Hermes, NanoBot) relies primarily on Python/TypeScript monorepos with traditional containerization for isolation.

### 6. Community Momentum & Maturity
*   **Tier 1 (Rapid Iteration / High Velocity):** **CoPaw, LobsterAI, ZeroClaw,** and **NanoClaw** are moving incredibly fast. They are aggressively merging community PRs and closing issues, showing responsive maintainers capitalizing on market demand.
*   **Tier 2 (Architectural Overhaul):** **OpenClaw, IronClaw,** and **Hermes** are iterating rapidly but are bogged down by massive architectural migrations (e.g., IronClaw's "Reborn" diamond merge, OpenClaw's Codex integration). They are building long-term foundations but experiencing short-term stability debt.
*   **Tier 3 (Stabilizing / Dormant):** **NullClaw, Moltis, ZeptoClaw,** and **TinyClaw** represent the lower end of the activity spectrum. Development is either completely paused, limited to internal security audits, or relying on sporadic, unmerged community contributions.

### 7. Trend Signals
*   **The Rise of the "Agentic UI":** Communities across **Hermes**, **CoPaw**, and **OpenClaw** are expressing deep frustration with text-only or clunky TUI dashboards. There is a massive market push toward rich, app-like interactions within messaging platforms (inline keyboards, structured approval cards) and native desktop apps (Tauri wrappers).
*   **Security & Guardrails are Non-Negotiable:** As agents execute destructive shell commands autonomously, the community is demanding strict safety defaults. **Hermes**, **CoPaw**, and **ZeroClaw** users are actively flagging sandbox escapes, rogue executions, and the need for secure pairing mechanisms, signaling a trend where "trust-by-default" is no longer acceptable.
*   **Observability as a Requirement:** "Silent failures" are destroying user trust. Projects like **NanoClaw** (adding LangFuse) and **ZeroClaw** (OpenTelemetry integration) indicate that token-usage tracing, latency observability, and visual context-window indicators are becoming baseline expectations for developers building serious agent workflows.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-14

## 1. Today's Overview
NanoBot is demonstrating **highly active and healthy development momentum** today, driven by a strong collaborative effort between maintainers and community contributors. The project saw a robust daily throughput of 19 issues updated (14 closed) and 15 pull requests updated (8 merged/closed). Key focus areas for the day include hardening system stability through model failover mechanisms, refining context and memory management, and expanding channel capabilities (specifically for WhatsApp and Windows environments). While users continue to push the limits of multi-agent setups and local models, the core team is actively merging community patches and structural test improvements, indicating a mature, iteration-heavy phase of development.

## 2. Releases
*No new official releases were published today.*

## 3. Project Progress
A total of 8 PRs were merged/closed today, advancing several critical features and stability improvements:
*   **Model Failover Capability:** PR [#3756](https://github.com/HKUDS/nanobot/pull/3756) introduced `fallback_models` in `ModelPresetConfig`, allowing the runner to automatically try backup models/providers if the primary one fails without content streamed.
*   **Agent Loop Stability (MCP & Concurrency):** PR [#3740](https://github.com/HKUDS/nanobot/pull/3740) merged a crucial fix that adds a TCP probe before connecting to HTTP/SSE MCP servers, preventing event-loop crashes on unresponsive servers. 
*   **Streaming UX:** PR [#3655](https://github.com/HKUDS/nanobot/pull/3655) added a `show_reasoning` config option to display model thinking/reasoning content during streams.
*   **Exec Output Control:** PRs [#1923](https://github.com/HKUDS/nanobot/pull/1923) and [#1896](https://github.com/HKUDS/nanobot/pull/1896) added configuration and environment variables to let users choose how long command outputs are truncated (head vs. tail).
*   **Testing & Refactoring:** PR [#3766](https://github.com/HKUDS/nanobot/pull/3766) significantly expanded coverage by adding 121 new tests and splitting the monolithic `test_runner.py` into 9 focused files.
*   *Documentation:* Readme capitalization ([#1135](https://github.com/HKUDS/nanobot/pull/1135)) and ContextMemory guides ([#915](https://github.com/HKUDS/nanobot/pull/915)) were also merged.

## 4. Community Hot Topics
The most actively discussed issues revolve around multi-provider resilience and context management:
*   **Model Failover:** Issue [#3376](https://github.com/HKUDS/nanobot/issues/3376) (13 comments, closed) requested auto-switching between providers during outages. This generated heavy discussion and was directly addressed by today's merged PR [#3756](https://github.com/HKUDS/nanobot/pull/3756).
*   **Context Loss on Interruption:** Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689) (5 comments, open) highlights user frustration where interrupting a looping agent causes it to lose current chat history. Maintainers are currently discussing how to preserve context gracefully.
*   **"No Response" Bug:** Issue [#235](https://github.com/HKUDS/nanobot/issues/235) (15 comments, closed) details a persistent bug via Telegram/Deepseek where the bot returns *"I've completed processing but have no response to give."* 

## 5. Bugs & Stability
Several user-reported bugs were addressed or closed today, while new ones were flagged:
*   **Event Loop Crash (Fixed):** Issue [#3739](https://github.com/HKUDS/nanobot/issues/3739) reported crashes when MCP services are offline. Fixed by merged PR [#3740](https://github.com/HKUDS/nanobot/pull/3740). *(Severity: High)*
*   **Context Compression Crash (Fixed):** Issue [#3726](https://github.com/HKUDS/nanobot/issues/3726) reported total system failure during context compression. Closed today, likely addressed by structural PR [#3766](https://github.com/HKUDS/nanobot/pull/3766) and pending PR [#3765](https://github.com/HKUDS/nanobot/pull/3765). *(Severity: High)*
*   **Reasoning Content 400 Error (Open):** Issue [#3760](https://github.com/HKUDS/nanobot/issues/3760) reports a `invalid_request_error` when using DeepSeek-v4-flash due to how `reasoning_content` is passed. *(Severity: Medium)*
*   **WebUI Bloat (Open):** Issue [#3746](https://github.com/HKUDS/nanobot/issues/3746) flags a >1 MB code-highlighting chunk being eagerly preloaded in the WebUI regardless of need. *(Severity: Low)*

## 6. Feature Requests & Roadmap Signals
Community feature requests are heavily leaning toward operational control, UX, and security:
*   **Slash Commands for Models:** Issue [#3742](https://github.com/HKUDS/nanobot/issues/3742) requests a `/model` slash command to dynamically switch providers/agents during chat.
*   **Health Diagnostics:** Issue [#3769](https://github.com/HKUDS/nanobot/issues/3769) proposes a `nanobot doctor` CLI command to validate installations and channel connectivity.
*   **DM Security:** Issue [#3768](https://github.com/HKUDS/nanobot/issues/3768) highlights a critical security gap: currently, anyone can message the bot. It proposes an allowlist/unknown sender pairing for DMs.
*   **Expanded Channel UX:** PR [#3761](https://github.com/HKUDS/nanobot/pull/3761) introduces typing indicators and emoji reactions for WhatsApp, bringing it to parity with Telegram.

## 7. User Feedback Summary
Users are actively deploying NanoBot in complex, multi-model environments but face friction with single-point-of-failures and aggressive context compaction. DeepSeek and local LLMs (via Ollama/vLLM) remain highly popular, though users frequently encounter token transmission and reasoning errors. There is strong appreciation for the platform's expanding channel support (WhatsApp, WebUI, Telegram), but developers operating at scale express a need for better out-of-the-box resiliency (failover) and observability (`nanobot doctor`). 

## 8. Backlog Watch
The following open items require maintainer attention:
*   **LLM Concurrency Gate:** PR [#3693](https://github.com/HKUDS/nanobot/pull/3693) aims to centralize LLM concurrency throttling to stop local LLM timeouts, but remains open and needs review.
*   **Memory Preservation:** PR [#3765](https://github.com/HKUDS/nanobot/pull/3765) seeks to preserve session messages during auto-compact, directly addressing feedback from Issue [#3689](https://github.com/HKUDS/nanobot/issues/3689).
*   **Long-term Memory Architecture:** Issue [#1774](https://github.com/HKUDS/nanobot/issues/1774) raises underlying architectural concerns that pure-text memory leads to confusion, questioning if a SQLite-based approach would be better for the project's long-term scalability.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-14

## 1. Today's Overview
The Hermes Agent project is experiencing high day-to-day developer and community engagement, evidenced by 50 issues updated (48 open) and 50 pull requests updated (39 open, 11 merged/closed) in the past 24 hours. The repository currently has no new releases, indicating that the recent v0.13.0 is being actively patched rather than superseded. Much of today's activity centers on fixing platform gateway bugs (Mattermost, Feishu, WeChat, Slack), enhancing container deployment stability, and addressing authentication edge cases. Overall project health is strong, with external contributors actively proposing features (e.g., video generation, PostgreSQL session storage) and core maintainers reviewing a steady stream of bug fixes.

## 2. Releases
No new releases were published today. The latest available version remains v0.13.0 (released 2026-05-07).

## 3. Project Progress
Eleven PRs were merged or closed today, reflecting steady progress on stability and tooling:

- **Gateway / Restart in Docker** — Three separate PRs ([#25264](https://github.com/NousResearch/hermes-agent/pull/25264), [#25263](https://github.com/NousResearch/hermes-agent/pull/25263)) address the `/restart` command killing containers instead of restarting them. Fixes detect Docker/Podman environments and route through service restarts.
- **Queued Follow-up Transcript Preservation** — [#25248](https://github.com/NousResearch/hermes-agent/pull/25248) (merged, salvage of [#25183](https://github.com/NousResearch/hermes-agent/pull/25183)) ensures all queued follow-up turns are persisted correctly instead of only the last one.
- **Copilot Auth False Positive** — Multiple PRs ([#25250](https://github.com/NousResearch/hermes-agent/pull/25250), [#25252](https://github.com/NousResearch/hermes-agent/pull/25252) [closed/duplicate], [#25254](https://github.com/NousResearch/hermes-agent/pull/25254)) remove the `gh auth token` fallback so non-subscribers don't see Copilot models.
- **Operational Hardening** — [#25244](https://github.com/NousResearch/hermes-agent/pull/25244) adds cron validation, `hermes doctor` health signals, and delegate result disposition metadata.
- **Feishu Streaming Edit Limit** — [#25241](https://github.com/NousResearch/hermes-agent/pull/25241) rolls over to a new message before Feishu's edit cap is hit.
- **Slack Duplicate Replies** — [#25258](https://github.com/NousResearch/hermes-agent/pull/25258) suppresses duplicate final messages on stream finalize failures.
- **Capabilities Discovery** — [#25247](https://github.com/NousResearch/hermes-agent/pull/25247) adds a `capabilities_list` tool for orchestrator-to-specialist routing.
- **Native Codex Compaction** — [#25253](https://github.com/NousResearch/hermes-agent/pull/25253) adds OpenAI Codex `/responses/compact` support with encrypted persistence.

Notable open feature PRs advancing today include [#25126](https://github.com/NousResearch/hermes-agent/pull/25126) (unified `video_generate` tool with pluggable backends, by @teknium1).

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Theme |
|---|---|---|---|
| [#18080 — Improved Themes for Dashboard](https://github.com/NousResearch/hermes-agent/issues/18080) | 6 | 15 | UI readability: fonts, contrast, non-standard color schemes |
| [#15290 — Persistent Permission Denied on NAS Docker](https://github.com/NousResearch/hermes-agent/issues/15290) | 5 | 5 | Docker config.yaml permissions on UGOS Pro |
| [#503 — Platform-Native Rich Interactions](https://github.com/NousResearch/hermes-agent/issues/503) | 4 | 0 | Inline keyboards, execution plans, structured UI on messaging platforms |
| [#9077 — vision_analyze Cannot Read Images](https://github.com/NousResearch/hermes-agent/issues/9077) | 4 | 2 | Vision tool broken for all image sources |

**Analysis:**
- **Dashboard UX (#18080)** is the most upvoted issue. Users find the TUI themes aesthetically driven but functionally hard to read—serif fonts, low contrast, and small font weights are recurring complaints. This signals that the growing user base is deploying Hermes on headless servers and accessing dashboards remotely, making readability paramount.
- **NAS/Self-hosting friction (#15290)** highlights that a meaningful segment runs Hermes on consumer NAS hardware. Persistent permission issues in Docker suggest the default image doesn't account for non-standard UID/GID mappings.
- **Rich Interactions (#503)** reflects a desire to move Hermes beyond plain-text chat toward a more app-like experience on Telegram, Discord, Slack, and WhatsApp. This aligns with the broader "agentic UI" trend.
- **Vision tool broken (#9077)** is a functional regression affecting a core multimodal capability. Multiple commenters confirm the issue across URL and local file sources.

## 5. Bugs & Stability

Ranked by severity:

### P1 — Critical
1. **Stale Credential Reuse** ([#25205](https://github.com/NousResearch/hermes-agent/issues/25205)) — `_restore_primary_runtime` bypasses the credential pool and reuses revoked API keys after rotation. *No fix PR yet.*
2. **ZWJ Emoji Blocks SOUL.md** ([#18581](https://github.com/NousResearch/hermes-agent/issues/18581)) — A zero-width joiner in the cartwheel emoji silently blocks the entire SOUL.md from loading. Affects personality/customization. *No fix PR yet.*
3. **Matrix 2-Person Group Room Misclassification** ([#24118](https://github.com/NousResearch/hermes-agent/pull/24118)) — DM fallback logic treats 2-member group rooms as DMs, breaking mention and threading behavior. *Fix PR open.*

### P2 — High
4. **Provider Nous 32K Context Fallback** ([#24000](https://github.com/NousResearch/hermes-agent/issues/24000)) — Hardcoded fallback blocks boot for models requiring ≥64K context. *No fix PR yet.*
5. **Docker `/restart` Kills Container** ([#25218](https://github.com/NousResearch/hermes-agent/issues/25218)) — *Fix PRs open: [#25264](https://github.com/NousResearch/hermes-agent/pull/25264), [#25263](https://github.com/NousResearch/hermes-agent/pull/25263).*
6. **Agent Executes Destructive Commands Without Confirmation** ([#10199](https://github.com/NousResearch/hermes-agent/issues/10199)) — Safety guardrail bypass; agent ran `npm uninstall -g` autonomously.
7. **429/Billing Errors Don't Trigger Fallback** ([#25261](https://github.com/NousResearch/hermes-agent/pull/25261)) — *Fix PR open.*
8. **Streaming Timeouts Ignored** ([#25260](https://github.com/NousResearch/hermes-agent/pull/25260)) — `stale_timeout_seconds` and `request_timeout_seconds` silently ignored in streaming. *Fix PR open.*
9. **Shell Hooks Unreliable in Kanban Worker** ([#25204](https://github.com/NousResearch/hermes-agent/issues/25204)) — `pre_tool_call` and `on_session_finalize` don't fire in `chat -q` context.
10. **Mattermost Threading Breaks After First Reply** ([#25181](https://github.com/NousResearch/hermes-agent/issues/25181)) — Invalid RootId in subsequent messages.
11. **BlueBubbles IPv6 Localhost Failure** ([#8512](https://github.com/NousResearch/hermes-agent/issues/8512)) — macOS webhook delivery fails due to IPv4/IPv6 mismatch.

### P3 — Medium
12. **CLI Resize Clears Banner** ([#22999](https://github.com/NousResearch/hermes-agent/issues/22999), closed)
13. **`hermes -z` Flag Inconsistency** ([#25121](https://github.com/NousResearch/hermes-agent/issues/25121))
14. **LCM Deferred Maintenance Dead Code** ([#20316](https://github.com/NousResearch/hermes-agent/issues/20316))

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Signals |
|---|---|---|
| **Unified Video Generation** | [#25126](https://github.com/NousResearch/hermes-agent/pull/25126) | Pluggable provider backends (Grok-Imagine, FAL.ai). Consolidates 8 scattered PRs. Likely next-version. |
| **Pluggable SessionDB (PostgreSQL/MySQL)** | [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | Solves SQLite "hot-update death spiral" during `git pull`. Strong signal for production deployments. |
| **ContextEngine Per-Turn Observation Hook** | [#23837](https://github.com/NousResearch/hermes-agent/issues/23837) | Plugin authors currently abuse `compress()` as a backdoor. Formal hook expected. |
| **Platform-Native Rich Interactions** | [#503](https://github.com/NousResearch/hermes-agent/issues/503) | Inline keyboards, structured UI. Author is @teknium1 (core maintainer), indicating roadmap priority. |
| **Service-Account Auth for Google Workspace** | [#17272](https://github.com/NousResearch/hermes-agent/issues/17272) | Autonomous/headless deployment enabler. |
| **Capabilities Discovery Tool** | [#25247](https://github.com/NousResearch/hermes-agent/pull/25247) | Enables orchestrator→specialist routing. |

**Prediction for next version (likely v0.13.1 or v0.14.0):** Docker restart fixes, Copilot auth cleanup, streaming timeout/hardening patches, and possibly the unified `video_generate` tool and `capabilities_list` tool.

## 7. User Feedback Summary

**Pain Points:**
- **Docker deployment friction** is the single most common complaint—permission errors (#15290), restart failures (#25218), and environment detection gaps. Self-hosters on NAS hardware are a growing but underserved segment.
- **Dashboard readability** (#18080) — the TUI is beautiful but impractical for extended use. Users want functional themes, not just color swaps.
- **Safety guardrails too loose** (#10199) — users are alarmed that the agent can execute destructive commands autonomously. This is a trust issue.
- **Multimodal tool reliability** (#9077) — vision being completely broken suggests insufficient integration testing for tool pipelines.
- **Provider configuration fragility** — context length fallbacks (#24000), credential rotation (#25205), and timeout misconfiguration (#25260) collectively paint a picture of provider abstraction that hasn't kept pace with the number of supported backends.

**Positive Signals:**
- Plugin ecosystem is active and sophisticated (hermes-mneme #23837, L Butler customization workflow #25164–#25170).
- Users are deploying Hermes across diverse platforms: WeChat, Feishu, Mattermost, Matrix, BlueBubbles/iMessage, Slack—indicating strong multi-platform demand.
- The community is producing high-quality bug reports with root cause analysis and even proposed fixes (e.g., #20316 dead code identification).

## 8. Backlog Watch

Issues and PRs needing maintainer attention:

| Item | Age | Concern |
|---|---|---|
| [#503 — Rich Interactions](https://github.com/NousResearch/hermes-agent/issues/503) | ~10 weeks | Core maintainer feature request with 4 comments but no linked PR yet. High strategic value. |
| [#9077 — Vision Tool Broken](https://github.com/NousResearch/hermes-agent/issues/9077) | ~4 weeks | Core multimodal capability non-functional. No fix PR. |
| [#10199 — Destructive Commands Without Confirmation](https://github.com/NousResearch/hermes-agent/issues/10199) | ~4 weeks | Safety-critical; no fix PR linked. |
| [#7789 — Pass Session/User Context to Memory Providers](https://github.com/NousResearch/hermes-agent/pull/7789) | ~5 weeks | Open PR with no resolution. Blocks advanced memory plugin use cases. |
| [#8512 — BlueBubbles IPv6 Failure](https://github.com/NousResearch/hermes-agent/issues/8512) | ~5 weeks | macOS+iMessage integration broken; 1 comment, no fix PR. |
| [#20316 — LCM Deferred Maintenance Dead Code](https://github.com/NousResearch/hermes-agent/issues/20316) | ~9 days | Identified dead code in context engine; marked duplicate but no resolution. |
| [#18080 — Dashboard Theme Readability](https://github.com/NousResearch/hermes-agent/issues/18080) | ~2 weeks | Highest 👍 count (15); UX-critical for daily users. |

**Recommendation:** The P1 credential rotation bug (#25205) and the vision tool regression (#9077) should be triaged immediately. The `/restart` Docker fix PRs (#25264, #25263) appear ready for merge and would resolve a high-friction deployment issue.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the repository data from 2026-05-14.

### 1. Today's Overview
PicoClaw demonstrates a highly active and healthy development rhythm, with a strong focus on iterating towards the `v0.2.8` stable release. Over the past 24 hours, the project saw a significant merge rate, closing 28 pull requests while opening 14 new ones, indicating active code review and integration by the maintainers. Issue triage is also steady, with half of the 10 updated issues being resolved. The release of the `v0.2.8-nightly.20260513` build suggests that the team is actively testing recent integrations, likely preparing for a stable release soon.

### 2. Releases
*   **Nightly Build:** `v0.2.8-nightly.20260513.223ebdf0`
    *   *Notes:* This is an automated build comparing changes from `v0.2.8` to the `main` branch. Users are advised to use it with caution as it includes the latest merged PRs which may be unstable.

### 3. Project Progress
A total of **28 PRs were merged/closed**, highlighting significant forward momentum. Key advancements include:
*   **Session & Context Handling:** Merged [PR #2311](https://github.com/sipeed/picoclaw/pull/2311) to preserve archived chat history during summarize truncation, and [PR #2309](https://github.com/sipeed/picoclaw/pull/2309) to normalize tool-call history, which fixes context errors with strict LLM providers.
*   **Provider & Model Support:** Merged [PR #2306](https://github.com/sipeed/picoclaw/pull/2306) fixing `thinking_level` resolution, [PR #2170](https://github.com/sipeed/picoclaw/pull/2170) adding support for per-model custom HTTP headers for OpenAI-compatible providers, and [PR #2183](https://github.com/sipeed/picoclaw/pull/2183) fixing subagent model ID normalization.
*   **UI & Channel Integrations:** Resolved local model polling issues ([PR #2175](https://github.com/sipeed/picoclaw/pull/2175)) and added a Telegram `/models` shortcut for easy model switching via chat ([PR #2153](https://github.com/sipeed/picoclaw/pull/2153)).

### 4. Community Hot Topics
*   **Streaming Output Requests:** The most discussed open issue is [Issue #1950](https://github.com/sipeed/picoclaw/issues/1950) (8 comments), requesting Web Chat streaming output. This aligns closely with [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) (6 comments, 1 👍), which proposes a config-based solution for streaming HTTP requests to LLM backends. The underlying need is clear: users find zero-shot waiting frustrating and desperately need real-time token streaming.
*   **DingTalk Channel Crash:** [Issue #2704](https://github.com/sipeed/picoclaw/issues/2704) (closed, 2 comments) highlighted a critical panic causing the gateway to crash due to a race condition in the DingTalk SDK. 

### 5. Bugs & Stability
*   **P0 - Gateway/MCP Fatalities:** [PR #2725](https://github.com/sipeed/picoclaw/pull/2725) (open) addresses a severe bug where MCP initialization failures cause the gateway to enter a zombie state. 
*   **P0 - Authentication Failures:** [Issue #2769](https://github.com/sipeed/picoclaw/issues/2769) (open) reports persistent `401 Invalid API Key` errors across valid Groq, OpenRouter, and Nvidia keys.
*   **P1 - Sandboxing Escape:** [PR #2693](https://github.com/sipeed/picoclaw/pull/2693) (open) fixes a security vulnerability where commands like `find /` could bypass the workspace sandbox.
*   **P1 - Provider Context Errors:** [Issue #2859](https://github.com/sipeed/picoclaw/issues/2859) reports 400 errors during multi-turn conversations with the Xiaomi MIMO model, indicating a flaw in how message context is constructed or maintained. 
*   **P2 - Android Configuration Bug:** [Issue #2368](https://github.com/sipeed/picoclaw/issues/2368) (closed) noted that Android local models incorrectly displayed "not configured" even when valid keys were entered.

### 6. Feature Requests & Roadmap Signals
*   **Built-in Image Generation:** [PR #2760](https://github.com/sipeed/picoclaw/pull/2760) introduces a disabled-by-default core tool for provider-backed image generation. 
*   **Advanced Reasoning Support:** Open PR [PR #2757](https://github.com/sipeed/picoclaw/pull/2757) adds support for OpenAI OAuth, and discussions in [Issue #2706](https://github.com/sipeed/picoclaw/issues/2706) emphasize the need for PicoClaw to dynamically handle and return `reasoning_content` for models like Deepseek v4.
*   **Roadmap Prediction:** Based on the current open PRs and the nightly changelog, the `v0.2.8` stable release will likely feature robust multi-user chat support ([PR #2715](https://github.com/sipeed/picoclaw/pull/2715)), native image generation, and standardized channel/provider decoupling.

### 7. User Feedback Summary
Users are heavily utilizing PicoClaw on edge devices (like Raspberry Pi Zero 2) and expect lightweight but fully-featured builds ([Issue #2625](https://github.com/sipeed/picoclaw/issues/2625) - requesting default WhatsApp support in ARM builds). Additionally, power users are pushing the limits of the agent's capabilities, requesting multi-step planning tools ([PR #2765](https://github.com/sipeed/picoclaw/pull/2765)) and transparent file-editing diffs ([Issue #2848](https://github.com/sipeed/picoclaw/issues/2848)) so they can review AI actions before they are applied. The overarching sentiment is positive, though users are experiencing friction with provider authentication and API configuration stability.

### 8. Backlog Watch
*   **V3 Config Migration:** [PR #2766](https://github.com/sipeed/picoclaw/pull/2766) updates 26 files to align with the new V3 config schema. This is a massive structural change that requires urgent maintainer review to prevent blocking other PRs.
*   **Transient HTTP Error Handling:** [PR #2768](https://github.com/sipeed/picoclaw/pull/2768) is a crucial fix for preventing immediate agent failure when encountering 500 errors from OpenRouter/OpenAI. 
*   **ChatGPT OAuth Support:** [PR #2679](https://github.com/sipeed/picoclaw/pull/2679) fixing ChatGPT Plus/Codex integration is a highly requested feature that has been sitting in the backlog since late April and needs final approval.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-14

## 1. Today's Overview
NanoClaw is experiencing a **high-velocity burst of development**, driven largely by a surge of merged feature PRs (22 merged out of 27 active). The project shows strong momentum in expanding its integration footprint, particularly in marketing/OSINT tooling and channel observability. However, the high merge volume coincides with a batch of newly reported platform-specific setup bugs and CLI edge cases, indicating growing pains as the user base diversifies across operating systems and deployment configurations. Activity is heavily concentrated in the contributor community, with frequent merge activity by core contributors like `fresholdidea` and `mtichikawa`.

## 2. Releases
**No new releases** were cut today. The high volume of merged features and fixes suggests a potential version bump or release candidate may be imminent once the newly introduced bugs (e.g., CLI destination wiring) are validated.

## 3. Project Progress
Today was marked by massive progress in **skills, third-party integrations, and core platform reliability**.

**Marketing & OSINT Integrations (Contributor: `fresholdidea`):**
A comprehensive suite of marketing and social listening tools was merged:
*   **#2445** and **#2446**: Added Serper and Firecrawl MCP integrations for web scraping and search.
*   **#2447**: Introduced a read-only Reddit MCP and `/reddit-research` skill.
*   **#2448**: Added a `/social-listening` composite skill.
*   **#2449** & **#2450**: Added `/linkedin-community` and `/linkedin-ads` playbook skills.
*   **#2451**, **#2452**, **#2453**: Localized upstream skills (audit-website, copy-grader) and baked Lighthouse directly into the container.

**Channel Enhancements & Observability:**
*   **#2458**: Implemented an opt-in voice transcription hook in the Chat SDK bridge via local whisper.cpp.
*   **#974**: (Finally) merged Discord image vision and voice transcription capabilities.
*   **#2456**: Added LangFuse observability to the Claude provider for tracing latency and token usage.
*   **#2443**: Fixed Slack AI-to-AI peer mentions.
*   **#2442**: Fixed silent message drops for single-destination agents.

## 4. Community Hot Topics
*   **Per-group Credential Management ([#869](https://github.com/qwibitai/nanoclaw/issues/869)):** This is the longest-running active discussion (open since March). Users heavily need the ability to assign different API credentials/quota limits to different agent groups. This is a critical architectural blocker for multi-tenant or multi-team deployments.
*   **Voice Transcription ([#2459](https://github.com/qwibitai/nanoclaw/pull/2459)):** Following the merge of the core Whisper hook (#2458), the open PR for the `/add-discord-voice-transcription` skill is actively being discussed as users look to deploy on-device AI voice processing.

## 5. Bugs & Stability
Several Medium-to-High severity bugs regarding platform setup and CLI behavior were reported today:

1.  **[HIGH] CLI Destination Session Bug ([#2465](https://github.com/qwibitai/nanoclaw/issues/2465)):** `ncl destinations add` fails to populate the receiver's session-local `inbound.db`, breaking new destinations until fully resolved. *No fix PR yet.*
2.  **[HIGH] Slack Setup missing `files:read` ([#2457](https://github.com/qwibitai/nanoclaw/issues/2457)):** Official walkthrough omits a crucial Slack scope, causing silent failure on file downloads. *Fix merged in [#2460](https://github.com/qwibitai/nanoclaw/pull/2460).*
3.  **[MEDIUM] Non-Debian Node Setup Failure ([#2462](https://github.com/qwibitai/nanoclaw/issues/2462)):** `setup/install-node.sh` crashes on Fedora/RHEL. *No fix PR yet.*
4.  **[MEDIUM] Teams File Support ([#2461](https://github.com/qwibitai/nanoclaw/issues/2461)):** Teams manifest hardcodes `supportsFiles: false`, mirroring the Slack issue. *No fix PR yet.*
5.  **[MEDIUM] CLI Group Scope Override ([#2464](https://github.com/qwibitai/nanoclaw/issues/2464)):** CLI silently overrides user-passed `--agent-group-id` without warning. *No fix PR yet.*

## 6. Feature Requests & Roadmap Signals
*   **Multi-tenant Architecture:** Issue [#869] signals strong demand for isolated group credentials. This architectural shift is likely a prerequisite for enterprise adoption.
*   **Cross-platform CLI/Setup Fixes:** Today's bug reports (#2462, #1787) show users are actively trying to deploy on Fedora/RHEL and macOS containers. Improved cross-platform installation is a guaranteed near-term focus.
*   **Rich Media Handling:** Today's focus on vision (#974), voice (#2458, #2459), and file attachment fixes (#2460, #2461) clearly signals a roadmap pivot toward **multimodal and multi-media agent capabilities**.

## 7. User Feedback Summary
Users are frustrated by **"silent failures"** in setup and routing. Specifically, setup walkthroughs missing API scopes (Slack, Teams) and CLI commands overriding flags without stderr output (#2464) are eroding trust in first-time setup flows. Conversely, the rapid deployment of high-value marketing/SEO tools (Reddit, LinkedIn, Lighthouse) shows strong satisfaction with the project's expanding utility for growth-hacking and automation use cases.

## 8. Backlog Watch
*   **Apple Container Merge Conflicts ([#1787](https://github.com/qwibitai/nanoclaw/issues/1787)):** Open since April 15th, users on macOS are still hitting merge conflicts during `/setup` when selecting the Apple Container runtime. Needs maintainer prioritization.
*   **Scheduled Tasks Silent Skip ([#2411](https://github.com/qwibitai/nanoclaw/pull/2411)):** Open since May 11th, this fix prevents recurring tasks from silently no-oping. This affects core reliability and needs review.
*   **CLI Bare Platform IDs ([#2187](https://github.com/qwibitai/nanoclaw/pull/2187)):** Open since May 2nd, addressing an issue where CLI channel adapters inappropriately namespace IDs.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-14

## 1. Today's Overview
The NullClaw project is currently experiencing a period of low-level, steady activity, characterized primarily by ongoing community contributions rather than core maintainer releases. Over the past 24 hours, project momentum has been sustained by a single active issue and one long-running pull request seeing continued updates. While there are no new software releases or newly merged code today, the active development of a sophisticated cron scheduling engine and new feature requests indicate a healthy interest in expanding the platform's automation and integration capabilities. Overall project health remains stable, operating as an open-source ecosystem navigating iterative, community-driven growth. 

## 2. Releases
No new releases were recorded today (2026-05-14). There are no immediate breaking changes, migration notes, or version upgrades to report.

## 3. Project Progress
Although no PRs were merged today, development is actively progressing in the background. 
*   **PR [#783](https://github.com/nullclaw/nullclaw/pull/783)** (`feat(cron): cron subagent, run history, JSON output, security hardening`) received a recent update. This is a substantial contribution by community member `yanggf8` that introduces a DB-backed scheduler, run history tracking, and operator alerts. Its continued presence in the open state suggests it is undergoing iterative reviews or final testing before being integrated into the main branch.

## 4. Community Hot Topics
Community engagement today was minimal, with zero comments and zero reactions across both the active issue and PR. 
*   The most notable new discussion is **Issue [#914](https://github.com/nullclaw/nullclaw/issues/914)**, which proposes the creation of a JIRA access tool. Although it lacks comments, the underlying need is clear: users and developers are looking to integrate NullClaw deeply into corporate project management workflows. The ability to securely authenticate, read, create, and update JIRA tickets directly from NullClaw agents is a strong signal that the platform is being evaluated for enterprise-grade automation tasks.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported by users in the last 24 hours. Furthermore, no stability-related fix PRs were opened or merged today, suggesting that the current stable release remains reliable for end-users.

## 6. Feature Requests & Roadmap Signals
*   **Enterprise Tooling Integrations:** The newly opened **Issue [#914](https://github.com/nullclaw/nullclaw/issues/914)** highlights a distinct demand for third-party API integrations, specifically targeting Atlassian's JIRA. Securely bridging NullClaw agents with ticketing systems is a logical next step for an AI assistant framework. 
*   **Advanced Scheduling & Automation:** The ongoing development in **PR [#783](https://github.com/nullclaw/nullclaw/pull/783)** points to a near-future roadmap where NullClaw agents can operate on time-based triggers (cron), execute shell commands, and output structured JSON reliably. 
*   *Prediction:* If PR #783 is merged in the coming days, the next minor version release will likely focus heavily on autonomous scheduling, followed closely by out-of-the-box integrations for popular SaaS tools like JIRA.

## 7. User Feedback Summary
Direct user feedback (via comments and reactions) is currently absent for today's tracked items. However, implicit feedback derived from the open issue suggests that users are successfully deploying NullClaw but require better bridges to their existing external workflows (e.g., project management software). The author of the JIRA issue (`sayjeyhi`) represents a use case where an AI agent acts as an active participant in agile development sprints, indicating a desire to use NullClaw for team collaboration rather than just isolated personal assistance.

## 8. Backlog Watch
*   **PR [#783](https://github.com/nullclaw/nullclaw/pull/783)** requires maintainer attention. Originally opened on 2026-04-07, this PR has been open for over a month. Given its wide scope—touching on database schemas, security hardening, and CLI output—it may be experiencing feature creep or require a final architectural review from the core team to push it toward merging.
*   **Issue [#914](https://github.com/nullclaw/nullclaw/issues/914)** was created yesterday and currently sits at 0 comments. While it is too early to consider it neglected, it represents a strategic enhancement that the maintainers should address soon to establish whether a JIRA integration aligns with their official roadmap and to guide the contributor on how to proceed.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-14

## 1. Today's Overview
IronClaw is experiencing a massive surge in architectural and feature development activity, primarily driven by the sweeping "Reborn" initiative aimed at overhauling the agent loop, WASM runtime, and channel integrations. The project saw 50 pull requests updated in the last 24 hours (33 open, 17 merged/closed) and 23 issues updated, indicating an exceptionally high development velocity. A coordinated "diamond merge" strategy is currently underway to integrate several Reborn agent-loop workstreams. Despite this high trajectory, there are notable outstanding concerns regarding release publishing delays and a persistent nightly E2E testing failure. 

## 2. Releases
No new releases were published today. 
*Note:* The community has noted that while version `0.27.0` was tagged on GitHub in late April, the latest version available on `crates.io` is pinned at `0.24.0` due to downstream CVEs in Wasmtime. 

## 3. Project Progress
A significant amount of foundational and architectural code advanced today, heavily focused on the Reborn epic. 17 PRs were merged or closed, clearing the way for major integrations.
*   **Reborn Agent Loop Foundation:** A coordinated 6-workstream "diamond merge" effort is actively integrating the core agent loop mechanics. This includes state/checkpoints ([PR #3550](https://github.com/nearai/ironclaw/pull/3550)), three strategy trait axes ([PR #3551](https://github.com/nearai/ironclaw/pull/3551), [PR #3552](https://github.com/nearai/ironclaw/pull/3552), [PR #3553](https://github.com/nearai/ironclaw/pull/3553)), a planner facade ([PR #3555](https://github.com/nearai/ironclaw/pull/3555)), and default strategies ([PR #3556](https://github.com/nearai/ironclaw/pull/3556)).
*   **Hooks & Security:** The first loop hooks framework foundation has been introduced ([PR #3573](https://github.com/nearai/ironclaw/pull/3573)), alongside security-focused refactors like refactoring `HostHttpEgressService` ([PR #3568](https://github.com/nearai/ironclaw/pull/3568)).
*   **Channel & Extension Enhancements:** Work progressed on a Telegram v2 tracer for live webhook replies ([PR #3590](https://github.com/nearai/ironclaw/pull/3590)), WASM ProductAdapter component runtime ([PR #3583](https://github.com/nearai/ironclaw/pull/3583)), and Extension Manifest v2 types ([PR #3591](https://github.com/nearai/ironclaw/pull/3591)).
*   **Bug Fixes:** Fixed an issue where chat-driven tool installations caused double-invokes and auto-approve footguns ([PR #3559](https://github.com/nearai/ironclaw/pull/3559)), and cleared two stale E2E test xfails ([PR #3589](https://github.com/nearai/ironclaw/pull/3589)).

## 4. Community Hot Topics
Activity is currently dominated by core maintainers and contributors executing on the Reborn roadmap rather than broad community discussion, but several deep-dive architectural issues are drawing attention:
*   **Crates.io Publishing Blockage ([Issue #3259](https://github.com/nearai/ironclaw/issues/3259)):** With 3 comments, this remains a highly relevant topic. Downstream consumers are pinned to `v0.24.0` due to Wasmtime 28.x CVEs, creating friction for users relying on standard Rust package management. 
*   **Hosting File System Bug ([Issue #2905](https://github.com/nearai/ironclaw/issues/2905)):** A closed bug regarding agents saving files in inaccessible `/home/agent` directories in hosted setups, indicating recent active fixing of environment constraints.
*   **Reborn Channel Porting Tracking ([Issue #3577](https://github.com/nearai/ironclaw/issues/3577)):** A central tracker for moving v1 channels (Telegram, Slack, WeChat, WebUI) to Reborn, spawning a network of P0 child issues ([Issue #3579](https://github.com/nearai/ironclaw/issues/3579), [Issue #3580](https://github.com/nearai/ironclaw/issues/3580), [Issue #3581](https://github.com/nearai/ironclaw/issues/3581), [Issue #3582](https://github.com/nearai/ironclaw/issues/3582)).

## 5. Bugs & Stability
Stability efforts are currently bifurcated between fixing immediate user-facing bugs and hardening the Reborn architecture.
1.  **[High] Nightly E2E Failure ([Issue #3447](https://github.com/nearai/ironclaw/issues/3447)):** Automated nightly tests failed. This is currently unaddressed in today's PR stack and requires investigation to prevent regressions.
2.  **[High] Wallet Signing Architecture Flaw ([Issue #3564](https://github.com/nearai/ironclaw/issues/3564)):** A security issue noting that wallet signing uses host-resident keys rather than an unforgeable user-authorization channel. 
3.  **[Medium] Web UI File Uploads Missing ([Issue #2283](https://github.com/nearai/ironclaw/issues/2283)):** Users currently cannot send files to bots via the Web UI, heavily restricting bot utility in web environments.
4.  **[Medium] Tool Installation Double-Invoke ([PR #3559](https://github.com/nearai/ironclaw/pull/3559)):** Fixed today, but previously caused agent loops to trigger tools twice and auto-approve unsafely.

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily defined by the Reborn initiative, focusing on modularity, security, and WASM componentization:
*   **User-Selectable Model Routes ([Issue #3459](https://github.com/nearai/ironclaw/issues/3459)):** Closed recently, indicating that the ability for users to bypass internal model profiles and choose concrete provider+model routes is actively being integrated.
*   **First-Class Loop Hooks ([Issue #3523](https://github.com/nearai/ironclaw/issues/3523), [Issue #3524](https://github.com/nearai/ironclaw/issues/3524)):** Requested and implemented almost simultaneously, allowing safe gating and pausing of agent loop behaviors. 
*   **Model Memory as Userland Extension ([Issue #3537](https://github.com/nearai/ironclaw/issues/3537)):** A push to refactor `ironclaw_memory` from a kernel-level runtime component into a pluggable userland extension (supporting native, Honcho, mem0, etc.).
*   **Log Download Tool ([Issue #3534](https://github.com/nearai/ironclaw/issues/3534)):** A straightforward feature request to improve debuggability for users.

## 7. User Feedback Summary
User feedback highlights a demand for better environment parity and package management:
*   **Deployment Friction:** Users are frustrated by the `crates.io` publishing lag ([Issue #3259](https://github.com/nearai/ironclaw/issues/3259)). Being pinned to `v0.24.0` due to underlying CVEs forces users into complex dependency workarounds.
*   **Hosted Environment Limitations:** The discovery that the agent writes to inaccessible paths (`/home/agent`) in hosted setups ([Issue #2905](https://github.com/nearai/ironclaw/issues/2905)) shows a pain point in the managed/SaaS user experience, as file outputs are effectively "lost" to the user.
*   **Web UI Immaturity:** The lack of basic file upload capabilities in the web UI ([Issue #2283](https://github.com/nearai/ironclaw/issues/2283)) is a glaring gap for users expecting modern chat-bot interfaces.

## 8. Backlog Watch
*   **Crates.io Release Bottleneck ([Issue #3259](https://github.com/nearai/ironclaw/issues/3559)):** Now approaching 9 days without a resolution. Since this blocks external consumers from safely adopting the latest features, it needs immediate release-engineering attention.
*   **Nightly E2E Test Failure ([Issue #3447](https://github.com/nearai/ironclaw/issues/3447)):** Reported by CI nearly 3 days ago. The failure in "Full E2E / E2E (features)" needs maintainer eyes to ensure the massive PR volume today doesn't compound the regression. 
*   **Web UI File Uploads ([Issue #2283](https://github.com/nearai/ironclaw/issues/2283)):** Open since April 10th, this P3 bug bash issue provides a poor UX for web users and has seen no recent activity.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the repository's activity on 2026-05-14.

### 1. Today's Overview
LobsterAI is demonstrating exceptionally high development velocity and robust project health, currently characterized by a massive backlog reconciliation effort. In the past 24 hours, the team merged an impressive 22 pull requests while keeping the active issue count low. The release of version 2026.5.12 introduces significant UX upgrades, including a memory settings refactor and UI updates. Alongside active feature development, there is a clear, concerted effort to resolve long-standing stale PRs—particularly focusing on sweeping security hardening, database stability, and core feature enhancements that have been pending since March. 

### 2. Releases
*   **Version 2026.5.12** (Released 2026-05-12)
    *   **Changes:** Introduced a major refactor of the memory settings tab, added "Dreaming" content display for AI agent background processing, and pushed general UI updates.
    *   **Migration/Breaking Notes:** While not explicitly tagged as breaking, the memory refactor suggests that users upgrading to this version may experience a migration of their local AI memory/settings configuration upon launch.

### 3. Project Progress
The project saw 22 PRs merged/closed, split between rapid new feature iterations and the bulk-closure of valuable community contributions that had been stuck in the backlog. 
*   **Agent Context & Artifacts:** Upgraded OpenClaw context compaction handling ([PR #1969](https://github.com/netease-youdao/LobsterAI/pull/1969)), added "Open with App" functionality for file-type artifacts ([PR #1968](https://github.com/netease-youdao/LobsterAI/pull/1968)), and cleaned up temporary context window overrides ([PR #1970](https://github.com/netease-youdao/LobsterAI/pull/1970)).
*   **Plugins & Integrations:** Rolled out a new plugin management system with advanced configuration UI ([PR #1963](https://github.com/netease-youdao/LobsterAI/pull/1963)). 
*   **IM Channels:** Fixed POPO channel session title display logic to use smart parsing instead of hard truncation ([PR #1966](https://github.com/netease-youdao/LobsterAI/pull/1966)).
*   **Stale PRs Revived:** The team merged 10+ high-quality PRs from March, fixing critical SQLite cascading deletions ([PR #881](https://github.com/netease-youdao/LobsterAI/pull/881)), implementing standalone speech input ([PR #901](https://github.com/netease-youdao/LobsterAI/pull/901)), and adding message-level selection/sharing features ([PR #880](https://github.com/netease-youdao/LobsterAI/pull/880)).

### 4. Community Hot Topics
*   **[Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849) (👍 0 | 2 Comments):** Users are experiencing infinite `NO_REPLY` or truncated outputs during continuous follow-up prompts. Logs indicate a race condition where the task is marked as `complete` backend-side while the model is still actively generating tokens, leaving the frontend hanging.
*   **[PR #903](https://github.com/netease-youdao/LobsterAI/pull/903) (Merged):** A highly requested community feature introducing a complete "Favorites" system for the Cowork module, allowing single/batch bookmarking of messages and conversation navigation enhancements. 
*   **Underlying Needs:** The community is pushing for more robust session management and UI responsiveness. Users want reliable, unbroken streaming outputs and better ways to navigate long, complex AI conversations (like the favorites feature or the new scroll fixes).

### 5. Bugs & Stability
Several bugs were reported or patched in the last 24 hours, with a heavy focus on UI stability and backend race conditions:
1.  **Critical - Task Stream Race Condition:** [Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849). Tasks complete prematurely during follow-up questions, breaking the chat response flow. (No fix PR linked yet).
2.  **High - UI Virtual Scroll Breakage:** [Issue #1971](https://github.com/netease-youdao/LobsterAI/issues/1971). Chat scroll locks up when scrolling up/down through oversized elements (like Mermaid charts) due to virtual scrolling triggering infinite re-renders. (No fix PR linked yet).
3.  **Medium - Database Bloat (Fixed):** [PR #881](https://github.com/netease-youdao/LobsterAI/pull/881) finally enabled SQLite foreign key constraints, fixing a bug where deleting sessions didn't cascade delete messages, silently bloating the user's local database.

### 6. Feature Requests & Roadmap Signals
Based on the closed PRs and recent updates, the immediate roadmap is heavily focused on **Agent Context Management** and **Enterprise Integration**:
*   **Context Compaction:** The merging of [PR #1969](https://github.com/netease-youdao/LobsterAI/pull/1969) indicates an imminent rollout of visual context usage indicators and manual memory compaction, allowing users to manually compress long chat histories to save token limits.
*   **Plugin Ecosystem:** The new plugin management UI ([PR #1963](https://github.com/netease-youdao/LobsterAI/pull/1963)) signals that LobsterAI is preparing to support third-party or custom tool integrations in its next major release.
*   **Security Hardening:** Bulk merging of security PRs (e.g., [PR #877](https://github.com/netease-youdao/LobsterAI/pull/877) and [PR #890](https://github.com/netease-youdao/LobsterAI/pull/890) restricting IPC channels and malicious URL schemes) shows that a secure, enterprise-ready desktop client is a primary goal.

### 7. User Feedback Summary
Users are actively utilizing the assistant for complex, long-running tasks, which is exposing specific pain points. The primary dissatisfaction lies in **streaming reliability** (Issue #1849) and **UI limitations when handling rich content** (Issue #1971). Conversely, satisfaction is high regarding the app's expanding integrations (like POPO messaging) and the new memory/dreaming features, which power users appreciate for persistent AI assistants.

### 8. Backlog Watch
The maintainers successfully cleared a massive chunk of the backlog today, but [Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849) (opened April 28) requires immediate attention, as it directly impacts the core chat generation reliability. 
Additionally, maintainers should monitor the newly integrated security PRs. Merging stale security PRs (like [PR #877](https://github.com/netease-youdao/LobsterAI/pull/877) and [PR #890](https://github.com/netease-youdao/LobsterAI/pull/890)) can sometimes introduce IPC conflicts with newer features; ensuring the new plugin system ([PR #1963](https://github.com/netease-youdao/LobsterAI/pull/1963)) plays nicely with the newly restricted IPC allowlists will be crucial for the next release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the Moltis project digest for 2026-05-14, based on the provided repository data.

### 1. Today's Overview
Project activity for Moltis over the last 24 hours has been minimal, with the development pipeline showing a complete standstill in code contributions and releases. No pull requests were opened, merged, or closed, indicating either a pause in development or a focus on internal planning. On the community side, a single new bug report was created, showing that users are still actively testing and utilizing the application. Overall project health remains steady, though maintainer responsiveness will be required to address the newly reported regression and prevent backlog stagnation. 

### 2. Releases
No new releases were published today (Total: 0).

### 3. Project Progress
There has been no forward progress in the codebase over the last 24 hours. 
* **Merged/Closed PRs:** 0 
* **Active Development:** No PRs were updated or submitted, meaning no new features, refactors, or fixes advanced to the main branch today.

### 4. Community Hot Topics
Community engagement was extremely low today, consisting entirely of a single bug report. 
* **[Issue #994](https://github.com/moltis-org/moltis/issues/994) [[Bug]: chat has horizontal scrolling again](https://github.com/moltis-org/moltis/issues/994):** Authored by `vvuk`. This is the only active issue from the last 24 hours, receiving 0 comments and 0 reactions. 
* **Underlying Needs:** The phrasing "again" indicates a regression in the user interface. This highlights a community need for better UI regression testing, specifically regarding responsive design and viewport overflow within the chat functionality.

### 5. Bugs & Stability
One bug was reported today, ranking as the most severe issue of the day due to its direct impact on user experience:
* **UI Regression (Medium Severity): [Issue #994](https://github.com/moltis-org/moltis/issues/994)** - The primary chat interface is exhibiting unintended horizontal scrolling. 
    * **Context:** The author confirmed this is a previously resolved issue that has reappeared in the latest version of Moltis.
    * **Status:** Currently OPEN with no comments or linked fix PRs. Maintainer attention is required to assess the root cause.

### 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap signals were identified in the last 24 hours. Because there are no new pull requests in progress, predicting features for the next version is currently not possible. Maintainers appear to be in a dormant or planning phase.

### 7. User Feedback Summary
User feedback today paints a picture of slight dissatisfaction regarding a specific UI quirk:
* **Pain Points:** The chat interface is breaking standard container boundaries, forcing users to scroll horizontally. This disrupts the reading flow, which is a critical friction point for an AI assistant application where conversational text is the primary medium.
* **User Use Cases:** The report implicitly confirms that users are actively using the application for chat sessions on a daily basis.

### 8. Backlog Watch
While long-term historical data is not provided, today's data points to an immediate backlog item requiring attention:
* **[Issue #994](https://github.com/moltis-org/moltis/issues/994):** As an open, unassigned bug with zero maintainer interaction since its creation yesterday, it is at risk of being ignored if development activity remains at zero. Because it affects the core chat UI, it should be prioritized for triage to ensure baseline user satisfaction.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-05-14

## 1. Today's Overview
CoPaw is currently experiencing a massive surge in development and community engagement, processing 50 pull requests (22 open, 28 merged/closed) and 31 issues (13 open, 18 closed) in the last 24 hours. The release of version `v1.1.7-beta.2` signals an imminent stable release, heavily focusing on plugin extensibility, console UI enhancements, and MCP (Model Context Protocol) reliability. The high volume of both contributor submissions and user bug reports indicates a project in a phase of rapid feature expansion, actively stress-testing its multi-agent runtime, channel integrations, and tooling infrastructure.

## 2. Releases
**Latest Release: [v1.1.7-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.7-beta.2)**
*   **What's Changed:**
    *   **feat(plugins):** Enabled the registration of FastAPI APIRouter instances through the plugin system (PR [#4255](https://github.com/agentscope-ai/QwenPaw/pull/4255)), allowing developers to extend the web API more natively.
    *   **feat(security):** Added a timeout mechanism for keyring operations (PR [#4263](https://github.com/agentscope-ai/QwenPaw/pull/4263)) to prevent UI/backend hangs during credential retrieval.
    *   **fix(console):** Corrected token usage display issues in the UI (PR partially noted).

## 3. Project Progress
Significant architectural and feature milestones were achieved in today's merged/closed PRs:
*   **Skill System Advancement:** Merged PR [#4282](https://github.com/agentscope-ai/QwenPaw/pull/4282) introduced the `/make-skill` command, allowing users to dynamically convert current chat sessions into reusable workspace skills.
*   **Cron & Scheduling:** PR [#4210](https://github.com/agentscope-ai/QwenPaw/pull/4210) landed, bringing robust "Inbox" functionality and highly requested "one-shot" cron jobs (e.g., `--at <datetime>`) addressing issue [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029).
*   **Browser Tooling:** Merged PR [#4261](https://github.com/agentscope-ai/QwenPaw/pull/4261) added explicit file download support (`action="file_download"`) to the browser automation agent.
*   **Desktop Packaging:** Fixes for the QA agent's documentation lookup in pip/Docker/Desktop environments were implemented via PR [#4280](https://github.com/agentscope-ai/QwenPaw/pull/4280), resolving packaging path issues.

## 4. Community Hot Topics
The community is highly focused on multi-agent orchestration, channel integrations, and MCP reliability:
*   **Multi-Agent Echo Loops:** [Issue #4251](https://github.com/agentscope-ai/QwenPaw/issues/4251) (3 comments) highlights a critical architectural flaw where Team Leaders and specialist workers in Matrix Team Rooms enter infinite acknowledgment loops due to missing lifecycle guards.
*   **Channel Integration Instability:** [Issue #2642](https://github.com/agentscope-ai/QwenPaw/issues/2642) (15 comments) details a severe regression where asking bots on platforms like DingTalk, QQ, or WeChat to generate files (like PPTs) causes a persistent `AGENT_UNKNOWN_ERROR` that permanently bricks the channel session.
*   **MCP Compatibility:** [Issue #4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) (5 comments) sparked discussion regarding streamable HTTP errors in MCP clients, where non-404 error codes (like 401) cause the entire MCP call to hang until timeout.

## 5. Bugs & Stability
Several high-severity bugs regarding system resources and execution environments were reported today:
1.  **Memory Exhaustion / Infinite Loops (Critical):** [Issue #4265](https://github.com/agentscope-ai/QwenPaw/issues/4265) (5 comments) reports that asking the AI to read conversation logs triggers an uncontrollable loop of compression and reading, completely locking up the system (even blocking SSH). Additionally, [Issue #3932](https://github.com/agentscope-ai/QwenPaw/issues/3932) (6 comments) shows that `read_file_safe` passing a 1GB ceiling causes `MemoryError` on constrained systems.
2.  **Shell Command Chaos (High):** [Issue #4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) (5 comments) notes that default security settings silently block multiline commands, breaking the agent's thought chain. *Fix available in [PR #4278](https://github.com/agentscope-ai/QwenPaw/pull/4278).*
3.  **MCP Stream Blocking (High):** [Issue #4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) blocks execution threads on HTTP errors. *Fix available in [PR #4281](https://github.com/agentscope-ai/QwenPaw/pull/4281).*
4.  **Concurrent State Corruption (Medium):** [Issue #4232](https://github.com/agentscope-ai/QwenPaw/issues/4232) points out that `SafeJSONSession` drops concurrent writes, leading to clobbered session states.

## 6. Feature Requests & Roadmap Signals
User feedback today strongly signals a desire for better UI observability, lower barriers to entry, and desktop robustness:
*   **Real-time Context Observability:** [Issue #4284](https://github.com/agentscope-ai/QwenPaw/issues/4284) requests a visual indicator for context window usage to avoid premature auto-compression. *This is already being actively developed in [PR #4290](https://github.com/agentscope-ai/QwenPaw/pull/4290) and will likely land in v1.1.7 stable.*
*   **Preset Agent Templates:** [Issue #4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) requests built-in agent templates for non-technical users to lower the barrier to entry.
*   **Tauri Desktop Application:** [PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) (Under Review) introduces a Tauri 2.x desktop wrapper, moving the project toward a standalone desktop app paradigm.

## 7. User Feedback Summary
Users are heavily utilizing CoPaw as an omnichannel personal assistant but are experiencing friction with system stability during complex tasks. There is notable dissatisfaction with how file generation tasks crash messaging channel integrations (WeChat, DingTalk) ([Issue #4056](https://github.com/agentscope-ai/QwenPaw/issues/4056)). Furthermore, users express frustration over UI quirks, such as multiline inputs being stripped ([Issue #4062](https://github.com/agentscope-ai/QwenPaw/issues/4062)), missing file titles in the web UI ([Issue #4260](https://github.com/agentscope-ai/QwenPaw/issues/4260)), and asynchronous browser actions not syncing visually with chat platforms. On the positive side, the community is highly engaged, with many first-time contributors submitting solutions for these exact pain points.

## 8. Backlog Watch
Maintainers should prioritize reviewing the following critical or long-standing items:
*   **[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813):** The Tauri desktop app implementation has been open since April 24 and requires final maintainer review to proceed.
*   **[Issue #2258](https://github.com/agentscope-ai/QwenPaw/issues/2258):** A persistent bug where the agent silently stops responding after internal thought, open since March 25. It continues to garner comments and lacks a definitive fix.
*   **[PR #4198](https://github.com/agentscope-ai/QwenPaw/pull/4198):** A crucial security/execution PR preventing the agent from bypassing plan-mode gates (executing shell commands before user confirmation). Needs an urgent maintainer merge to prevent agent rogue actions.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-05-14

## 1. Today's Overview
Project ZeptoClaw experienced a highly focused but closed-loop day of activity on May 13-14, 2026, logging 4 updated issues with zero corresponding pull requests. All tracked items were immediately closed, indicating the completion of specific, highly targeted auditing and documentation tasks. The project saw no new feature development, open community discussions, or code merges in the last 24 hours. The dominant theme of the day was a concerted security and compliance focus, specifically surrounding CVE/GHSA advisory collections and AI-vulnerability verification. Overall project activity appears to be driven primarily by internal maintainers rather than community contributions at this time.

## 2. Releases
No new releases were recorded today. There are no breaking changes, migration notes, or version updates to report.

## 3. Project Progress
No pull requests were merged or closed today, meaning no tangible code shifts occurred in the repository within the last 24 hours. However, the rapid closure of two chore/security tickets suggests that a definitive verification phase for web and control-plane security audits has been conceptually completed or signed off. The closure of the CVE documentation issues implies that the project's external-facing advisory records for the `llm-enhance/official-cve` tracking are now up to date.

## 4. Community Hot Topics
There are no highly active, openly debated community topics today, as all opened issues were immediately closed by the same contributors who authored them, with exactly one comment each (likely an automated or manual closure log). 
* The most notable batches of work center on security auditing and vulnerability tracking:
  * **[Issue #587](https://github.com/qhkm/zeptoclaw/issues/587)** and **[Issue #588](https://github.com/qhkm/zeptoclaw/issues/588)**: Focused on "deep ai-vulns audit/verification" for web/control-plane surfaces.
  * **[Issue #589](https://github.com/qhkm/zeptoclaw/issues/589)** and **[Issue #590](https://github.com/qhkm/zeptoclaw/issues/590)**: Focused on collecting and extracting GitHub Security Advisories and CVE metadata.
* *Analysis*: The "underlying need" here is strict security posture management. As an AI agent/assistant, ZeptoClaw is actively ensuring that prompt-based vectors (like unauthenticated HTTP MCP to shell executions) are documented and patched, reflecting the high-security standards required for autonomous AI frameworks.

## 5. Bugs & Stability
No explicit user-facing bug reports, crashes, or regressions were submitted by the community today. 
* **Proactive Security Fixes:** The closed issues ([#587](https://github.com/qhkm/zeptoclaw/issues/587), [#588](https://github.com/qhkm/zeptoclaw/issues/588)) highlight proactive threat modeling. The maintainers specifically targeted "unauthenticated HTTP MCP -> shell exec" as a known candidate vulnerability. While this indicates a potentially severe underlying risk (Remote Code Execution via AI agent prompts), the closure of these audit issues suggests the surface has been reviewed and secured, though no specific fix PR was logged today.

## 6. Feature Requests & Roadmap Signals
There were no new feature requests from the user community today. 
* **Roadmap Signal:** The issues surrounding `llm-enhance/official-cve` ([#589](https://github.com/qhkm/zeptoclaw/issues/589), [#590](https://github.com/qhkm/zeptoclaw/issues/590)) signal that the project is formalizing its security advisory pipeline. Future roadmap iterations will likely feature stricter sandboxing around MCP (Model Context Protocol) server executions and automated CVE tracking integrated directly into the agent's operational lifecycle.

## 7. User Feedback Summary
No organic user feedback, pain points, or use cases were shared in today's data. The interaction was strictly limited to repository maintainers (YLChen-007, liey1) finalizing security documentation and audit workflows. Consequently, there is no measurable user satisfaction or dissatisfaction to report for this 24-hour period.

## 8. Backlog Watch
Based on today's data, the repository shows a healthy clearance rate for security and documentation tracking, leaving no obvious stale items from today's batch. 
* *Maintainer Note:* The exact resolution of the "unauthenticated HTTP MCP -> shell exec" candidate mentioned in [Issue #588](https://github.com/qhkm/zeptoclaw/issues/588) lacks a corresponding Pull Request in this 24-hour window. Maintainers should ensure that the underlying code fix for this attack vector is actively merged, rather than just closing the tracking issue, to prevent regressions in future releases.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-05-14

## 1. Today's Overview
ZeroClaw is currently experiencing a high-velocity development phase with no new official releases today, indicating that efforts are heavily concentrated on stabilization and feature integration for the upcoming versions (v0.7.6 and v0.8.0). The project saw robust community and maintainer engagement, processing 33 issues (18 open, 15 closed) and 50 pull requests (34 open, 16 merged/closed). Maintainers and contributors are highly focused on patching provider-level bugs, refining channel integrations (Matrix, WhatsApp, Signal), and strengthening core security and observability. The high volume of open PRs—especially the draft v0.8.0 integration branch—signals that a major milestone is actively being assembled.

## 2. Releases
*No new releases were published today.* The project remains on the latest stable release while contributors finalize bug fixes and features for the anticipated `v0.7.6` skills update and the larger `v0.8.0` schema migration.

## 3. Project Progress
Merged and closed PRs today focused heavily on fixing provider logic, security configurations, and runtime stability:
*   **Provider Fixes:** A critical fix was merged to trust system CA roots for provider HTTPS requests ([PR #6600](https://github.com/zeroclaw-labs/zeroclaw/pull/6600)), solving self-signed certificate issues.
*   **Vision Router:** Closed PRs like [PR #6597](https://github.com/zeroclaw-labs/zeroclaw/pull/6597) addressed silent bypasses in `supports_vision()` for mixed-provider setups.
*   **Upstreaming:** Active work is happening on the v0.8.0 integration branch ([PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)), preparing for a massive schema v3 migration.
*   **Channel & Cron Stability:** Fixes were submitted to stop stale tool-result images from replaying ([PR #6629](https://github.com/zeroclaw-labs/zeroclaw/pull/6629)) and to ensure `thread_id` persists through cron webhook callbacks ([PR #6635](https://github.com/zeroclaw-labs/zeroclaw/pull/6635)).

## 4. Community Hot Topics
The community is highly active in discussing architectural improvements and security:
*   **Multi-Agent Orchestration:** A feature request for native multi-agent role-based collaboration ([Issue #6604](https://github.com/zeroclaw-labs/zeroclaw/issues/6604)) was quickly flagged as a duplicate, showing strong user demand for agentic swarms.
*   **Security - Pairing Codes:** Users and maintainers are actively discussing the inadequacy of 6-digit pairing codes. [Issue #6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) requests 32-character alphanumeric defaults, touching on a core security improvement.
*   **Hybrid Skills & WASM:** The community is excited about the proposed hybrid plugins combining `SKILL.md` with `.wasm` binaries ([Issue #6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140)).
*   **OpenTelemetry Integration:** Maintainers are actively routing community contributions to upstream OTel span tracing ([Issue #6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642), [Issue #6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)).

## 5. Bugs & Stability
Several high-severity bugs were identified today, though maintainers and the community have rapidly opened PRs to address them:
*   **Workspace Profile Loading (P1):** Runtime daemon fails to invoke `load_profiles()` during startup ([Issue #6419](https://github.com/zeroclaw-labs/zeroclaw/issues/6419)). *Fix available in [PR #6605](https://github.com/zeroclaw-labs/zeroclaw/pull/6605).*
*   **Nextcloud Talk Timeout (P2):** Requests to slow local LLMs are canceled after 5 seconds ([Issue #6156](https://github.com/zeroclaw-labs/zeroclaw/issues/6156)).
*   **Gateway WebSocket Spins (P1):** WebSocket turns spin indefinitely after client disconnect, making the health endpoint unresponsive ([Issue #6514](https://github.com/zeroclaw-labs/zeroclaw/issues/6514)).
*   **Cron Delivery Failures (S2):** Manual `cron_run` incorrectly persists best-effort delivery failures as `ok` ([Issue #6632](https://github.com/zeroclaw-labs/zeroclaw/issues/6632)).
*   **Google Workspace Tool on Windows (P1):** Rust's `Command` fails to resolve `.cmd` extensions for `gws` on Windows ([Issue #6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410)). 

## 6. Feature Requests & Roadmap Signals
Looking at the current activity, we can project several strong signals for the next versions:
*   **v0.7.6 Focus (Skills & UX):** [Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) is explicitly tracking v0.7.6 as a release dedicated to improving `zeroclaw skills` support, authoring tools, and UX.
*   **Multimodal Media Generation:** A strong push to integrate ComfyUI/Comfy Cloud as a first-class media provider was proposed ([Issue #6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)), laying the groundwork for a future `gen_video` tool.
*   **Configurable Vision Fallbacks:** Users want smarter handling of image-bearing messages when no vision path is present ([Issue #6574](https://github.com/zeroclaw-labs/zeroclaw/issues/6574)).
*   **v0.8.0 Integration:** [PR #6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) indicates a massive structural overhaul spanning schema v3 migration, dependencies, and core agent routing.

## 7. User Feedback Summary
*   **Pain Points:** Users deploying on non-standard environments are hitting friction. Onboarding incorrectly prompts for OpenAI API keys when using Codex ([Issue #6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)), and Windows users face broken tool paths ([Issue #6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410)).
*   **UX Dissatisfaction:** Matrix users report missing file sizes in attachments ([Issue #6609](https://github.com/zeroclaw-labs/zeroclaw/issues/6609)), and Telegram users note confusing tool-approval messages that don't clear buttons after being clicked ([Issue #6565](https://github.com/zeroclaw-labs/zeroclaw/issues/6565)).
*   **Use Cases:** The community is heavily utilizing ZeroClaw with mixed-provider setups (e.g., Together AI default + Anthropic vision), highlighting the need for robust routing logic. 

## 8. Backlog Watch
Several critical issues are tagged `needs-maintainer-review` and require immediate core-team attention:
*   **Security:** The Docker image `zeroclawlabs/tool-runner` documented in the sandboxing guide does not exist ([Issue #6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500)).
*   **Pairing Configuration:** Fixes for gateway pairing codes on alternate ports ([Issue #6561](https://github.com/zeroclaw-labs/zeroclaw/issues/6561)) need review.
*   **Open Provider Bug:** Non-leading system messages are being sent to OpenAI-compatible endpoints, causing rejections from strict APIs ([Issue #6551](https://github.com/zeroclaw-labs/zeroclaw/issues/6551)).
*   **Author Action Required:** Several PRs addressing crucial provider bugs are stalled awaiting author updates, including [PR #6228](https://github.com/zeroclaw-labs/zeroclaw/pull/6228) (Slack session loss), [PR #6580](https://github.com/zeroclaw-labs/zeroclaw/pull/6580) (LM Studio options), and [PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) (OTel tool spans).

</details>