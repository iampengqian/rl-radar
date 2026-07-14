# OpenClaw Ecosystem Digest 2026-07-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-14 22:17 UTC

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

# OpenClaw Project Digest (2026-07-15)

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high-velocity phase of development alongside some significant operational growing pains, processing exactly 500 issue updates and 500 PR updates in the last 24 hours. The recent launch of v2026.7.1 introduces critical architectural overhauls—including a new Control UI, iOS/macOS app updates, and next-gen model support (GPT-5.6). However, the aggressive release cadence has triggered several P0 gateway crash-loops and data-loss regressions, demanding immediate maintainer attention. The community remains highly engaged, actively testing edge cases across diverse channel adapters and local LLM setups.

## 2. Releases
**[v2026.7.1: openclaw 2026.7.1](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1)**
* **Major Additions:** Control UI and onboarding overhaul, major updates to official iOS, Android, and macOS apps. Expanded provider support including GPT-5.6, Tencent Hy3, and Meta Muse Spark 1.1. Strengthened Codex and connected coding-agent workflows.
* **Migration & Breaking Risks:** This version introduces stricter database and migration gates. Legacy memory sidecar conflicts (specifically `embedding_cache` and `meta`/`chunks` indexes) now cause fatal startup crashes rather than auto-resolving. Administrators of long-lived instances are strongly advised to backup databases and utilize the updated `openclaw doctor` utility *before* upgrading.

## 3. Project Progress
Development is currently heavily focused on hardening channel adapters, UI/UX consistency, and tool lifecycle management. 
* **App & UI Improvements:** Maintainer `steipete` submitted crucial fixes for the macOS app, distinguishing between app and Gateway updates ([PR #107793](https://github.com/openclaw/openclaw/pull/107793)) and fixing dashboard navigation links ([PR #107798](https://github.com/openclaw/openclaw/pull/107798)).
* **Channel Adapters:** Refined message delivery for MS Teams ([PR #103692](https://github.com/openclaw/openclaw/pull/103692)), LINE ([PR #101708](https://github.com/openclaw/openclaw/pull/101708)), and Mattermost backfill capabilities ([PR #93865](https://github.com/openclaw/openclaw/pull/93865)).
* **Tool Lifecycle & Security:** Advanced security boundaries by routing MCP coordination messages through a dedicated Gateway primitive instead of raw session exposure ([PR #107805](https://github.com/openclaw/openclaw/pull/107805)). Fixed critical preflight and timeout behaviors for agent tool loops ([PR #101667](https://github.com/openclaw/openclaw/pull/101667), [PR #107802](https://github.com/openclaw/openclaw/pull/107802)).

## 4. Community Hot Topics
* **Cross-Platform Desktop Support:** There is a massive demand for native Linux and Windows Clawdbot apps to match the macOS feature set, showing that users want OpenClaw as a local desktop daemon, not just a mobile/web app ([Issue #75](https://github.com/openclaw/openclaw/issues/75) – 113 comments, 81 👍).
* **Prompt Token Efficiency & Bloat:** Developers using smaller or local models are reporting that v2026.6.x added too many default system tools, severely degrading instruction following ([Issue #92451](https://github.com/openclaw/openclaw/issues/92451)). Furthermore, boundary-aware caching introduced a regression that tanked DeepSeek cache hit rates to <10%, a major concern for cost-conscious users ([Issue #94518](https://github.com/openclaw/openclaw/issues/94518)).
* **Local LLM (llama.cpp) Integration:** Users are hitting immediate roadblocks trying to use local models with v2026.7.1 due to tool schema parsing incompatibilities, highlighting friction in OpenClaw's path to being a fully local AI hub ([Issue #106779](https://github.com/openclaw/openclaw/issues/106779), [Issue #107449](https://github.com/openclaw/openclaw/issues/107449)).

## 5. Bugs & Stability
**P0 - Critical / Crash-Loops & Data Loss**
* **Gateway Migration Fatalities:** The v2026.7.1 update is crashing on startup for users with legacy memory sidecars or corrupted plugin metadata ([Issue #107133](https://github.com/openclaw/openclaw/issues/107133), [Issue #107227](https://github.com/openclaw/openclaw/issues/107227), [Issue #107727](https://github.com/openclaw/openclaw/issues/107727)). `openclaw doctor` currently fails to fix this gracefully.
* **State DB Corruption:** Running health checks via CLI while the gateway is active is leading to malformed SQLite database images ("database disk image is malformed") on macOS ([Issue #101290](https://github.com/openclaw/openclaw/issues/101290)).

**P1 - High Severity Regressions**
* **Message Delivery Drops:** WebChat transcripts are being overwritten on every turn ([Issue #77012](https://github.com/openclaw/openclaw/issues/77012)), and iOS/WebChat messages intermittently fail to trigger assistant replies ([Issue #97983](https://github.com/openclaw/openclaw/issues/97983)). *Fix in progress: [PR #107799](https://github.com/openclaw/openclaw/pull/107799).*
* **Channel Daemon Instabilities:** Signal daemon race conditions resulting in orphaned processes ([Issue #22676](https://github.com/openclaw/openclaw/issues/22676)), and Telegram/Codex paths repeatedly timing out ([Issue #87744](https://github.com/openclaw/openclaw/issues/87744)).

## 6. Feature Requests & Roadmap Signals
Based on community activity, the following areas are ripe for inclusion in the next roadmap phase:
* **Agent Memory & Safety Architecture:** Users want more sophisticated memory lifecycles, such as AI-curated `MEMORY.md` that protects durable anchors from automatic deletion ([Issue #87660](https://github.com/openclaw/openclaw/issues/87660)). A highly requested RFC proposes an isolated multi-session architecture sharing a single LLM inference instance ([Issue #48874](https://github.com/openclaw/openclaw/issues/48874)).
* **Advanced Security Boundaries:** Strong demand for "Masked Secrets" to prevent prompt injection from leaking raw `.env` keys ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659)) and the addition of execution denylists for dangerous bash commands ([Issue #6615](https://github.com/openclaw/openclaw/issues/6615)).
* **Per-Agent Voice Configuration:** As voice adoption grows, users need TTS/STT provider overrides on a per-agent basis rather than a global config ([Issue #66252](https://github.com/openclaw/openclaw/issues/66252)).

## 7. User Feedback Summary
Users are generally thrilled with OpenClaw's rapid expansion into a unified cross-platform AI gateway, praising the sheer breadth of supported channels and providers. However, satisfaction is currently being tested by "update anxiety." The transition from v2026.6.x to v2026.7.1 has proven unstable for power users running complex, multi-agent local setups. The core pain points revolve around unannounced breaking changes in how the Gateway handles SQLite state, memory embeddings, and session concurrency during restarts.

## 8. Backlog Watch
* **Filename Encoding Utility for Multi-Channel Adapters:** Users interacting with CJK languages are experiencing data handling issues across channel boundaries (Shift-JIS, GB18030). This architecture proposal needs a core maintainer decision ([Issue #48788](https://github.com/openclaw/openclaw/issues/48788), open since March 2026).
* **Sub-Agent UX & Spawning:** The default "announce" behavior of sub-agents is causing user-facing friction, with agents frequently echoing raw internal summaries instead of synthesized replies. UX feedback requests to suppress or configure this behavior remain unresolved ([Issue #8299](https://github.com/openclaw/openclaw/issues/8299), [Issue #90944](https://github.com/openclaw/openclaw/issues/90944)).
* **Budget-Triggered Compaction Timeouts:** Preflight compaction remains hard-capped at ~60s, ignoring config overrides, leading to lost agent context. Needs live reproduction from maintainers to resolve the hard-limit deadlock ([Issue #95553](https://github.com/openclaw/openclaw/issues/95553)).

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from 2026-07-15.

# Cross-Project Analysis: Open-Source AI Agent Ecosystem (2026-07-15)

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a massive surge in feature velocity, transitioning rapidly from simple conversational interfaces to complex, multi-channel autonomous workflows. Key ecosystem drivers include the adoption of Model Context Protocol (MCP) for tool integration, the development of Standard Operating Procedure (SOP) engines for agent reliability, and aggressive pushes into cross-platform desktop/mobile environments. However, this breakneck pace is inducing severe growing pains across the board: projects are uniformly battling context compression deadlocks, memory bloat, and overly aggressive sandboxing that frustrate power users. The landscape is bifurcating into enterprise-ready aggregators (optimizing for cost and scale) and local-first privacy hubs (optimizing for diverse, smaller local models).

## 2. Activity Comparison
*Health Score is graded A-E based on PR merge rates, bug resolution velocity, and release stability.*

| Project | Issues Processed (24h) | PRs Processed (24h) | Release Status | Health Score | Key Indicator |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | **v2026.7.1** (Active) | **C+** | High velocity, but P0 crashes & update anxiety. |
| **CoPaw** | 50 | 50 | **v2.0.0.post2** (Active) | **B-** | Aggressive regression fixing post-major release. |
| **ZeroClaw** | 43 | 50 | Pre-release (v0.8.3) | **B+** | Strong milestone closeout; critical SOP engine merged. |
| **IronClaw** | 48 | 50 | Pre-release (v0.5/0.29)| **B** | Massive architectural overhaul; high bug triage rate. |
| **Hermes Agent**| 50 | 50 | None (Main branch) | **B** | Excellent issue closure (80%); large PR backlog. |
| **NanoBot** | 13 | 65 | None | **A** | High PR merge rate; strong UI and cron hardening. |
| **NanoClaw** | 0 | 28 | None | **A** | High stabilization phase; meticulous technical debt reduction.|
| **Moltis** | 3 | 7 | None | **A** | Highly stable; focused on edge-cases and local models. |
| **PicoClaw** | 3 | 9 | None | **A-** | Steady enterprise feature accumulation. |
| **LobsterAI** | 4 | 3 | None | **B+** | Low activity; backlog cleanup and core runtime fixes. |
| *Others* | *N/A* | *N/A* | *N/A* | *N/A* | NullClaw, TinyClaw, ZeptoClaw (Dormant). |

## 3. OpenClaw's Position
*   **Advantages vs Peers:** OpenClaw operates at a scale an order of magnitude higher than its peers (500 daily updates). It is the definitive reference implementation for a unified, cross-platform AI gateway, boasting native iOS/macOS apps, unmatched global channel adapters (Teams, LINE, Mattermost), and early support for frontier models (GPT-5.6).
*   **Technical Approach Differences:** While projects like IronClaw are refactoring core runtimes (unified extension architecture) and Moltis focuses on local model compatibility, OpenClaw is vertically scaling its Control UI and Gateway primitives. However, its monolithic approach has introduced brittle database migration paths, whereas micro-projects like NanoClaw are successfully executing zero-downtime stability sweeps.
*   **Community Size Comparison:** OpenClaw possesses the largest and most demanding user base. While Hermes Agent and NanoBot have highly technical, contributor-driven communities, OpenClaw's community is heavily populated by power users running complex local setups, resulting in high-friction feedback loops regarding default system prompt bloat and token efficiency.

## 4. Shared Technical Focus Areas
Several universal requirements are emerging simultaneously across the ecosystem:
*   **Context Compression & Memory Limits:** Unbounded memory growth is causing system crashes. NanoBot and OpenClaw are facing severe resource leaks/context truncation issues, while CoPaw is seeing API-breaking errors (400s) when compression drops tool calls.
*   **Sandboxing & Security Friction:** As agents gain system-level execution, security boundaries are breaking user workflows. CoPaw (Windows ACL pollution), ZeroClaw (Landlock breaking shell access), and IronClaw (extension false positives) are all struggling to balance safety with usability.
*   **Cron, Scheduling, & Background Reliability:** There is a major shift toward autonomous background tasks. NanoBot, Hermes Agent, and ZeroClaw are heavily focused on making cron execution reliable, routing workflows to cheaper LLMs, and exposing cron context to agents.
*   **MCP (Model Context Protocol) Integration:** MCP is the emerging standard for tools. Moltis fixed critical MCP OAuth flows for enterprise apps, while IronClaw and OpenClaw are fighting bugs where MCP tools fail to surface in active sessions.

## 5. Differentiation Analysis
*   **Enterprise Multi-Channel Hubs (PicoClaw, Moltis, OpenClaw):** Focused on being the bridge between AI and legacy enterprise software (Feishu, DingTalk, Slack). Differentiated by rich media channel support, end-to-end encryption (PicoClaw's vodozemac migration), and cost optimizations via API prompt caching.
*   **Local-First & Open Model Champions (Moltis, ZeroClaw):** Tailored for users running smaller/local models (Gemma 4, Ollama). They focus heavily on JSON schema forgiveness, local Speech-to-Text (FunASR), and strict privacy boundaries (ZeroClaw's multi-tenant RBAC).
*   **Developer Frameworks & Methodologies (Hermes Agent, LobsterAI, IronClaw):** Geared toward technical orchestration. Hermes is integrating software development methodologies (sub-agent driven dev), IronClaw is rebuilding a unified extension runtime, and LobsterAI focuses on deep workspace integrations.
*   **Polished User Deployments (NanoBot, NanoClaw):** Focusing on lowering the barrier to entry with one-click deployments (Render), WebUI management, and meticulous edge-case resolution (message delivery assurance) for consumer-facing deployments.

## 6. Community Momentum & Maturity
*   **Tier 1: High-Velocity / High-Friction (OpenClaw, CoPaw):** Moving incredibly fast but breaking core user trust with "update anxiety" and major post-release regressions. They are in volatile growth phases.
*   **Tier 2: Architectural Maturation (IronClaw, ZeroClaw, Hermes Agent):** Rapidly iterating but focused on structural overhauls (SOPs, unified runtimes). They are processing massive amounts of bug feedback to prepare for stable v1/v0.8+ releases. Hermes Agent needs to address a growing 42 PR backlog to maintain contributor morale.
*   **Tier 3: High-Stability / Refinement (NanoBot, NanoClaw, Moltis, PicoClaw):** These projects show the healthiest merge-to-issue ratios. They are not chasing massive architectural rewrites; instead, they are methodically polishing UX, UI, and cross-channel reliability.

## 7. Trend Signals
*   **Agentic Interruptibility:** CoPaw's community is championing the ability to inject real-time messages to pivot an agent mid-task. This indicates users are tiring of waiting for "doom loops" to finish and demand dynamic steering.
*   **Cost-Aware Routing:** NanoBot and PicoClaw are introducing per-agent model overrides and explicit cache points. The era of routing all tasks to frontier models is ending; the new standard is routing background/cron checks to cheap models.
*   **Error Fidelity & Observability:** A massive pain point across IronClaw, ZeroClaw, and OpenClaw is "silent failures" and generic API error masking. Communities are demanding strict error transparency (RFCs for outlawing generic fallbacks) to debug complex tool chains.
*   **Hyper-Local Execution:** The push for local desktop daemons (OpenClaw) and local GUI automation (CoPaw's Tauri integration) signals that users want AI agents acting directly on their OS environments, rather than being siloed in web browsers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the structured project digest for NanoBot based on the GitHub data provided.

# NanoBot Project Digest (2026-07-15)

## 1. Today's Overview
NanoBot exhibits exceptionally high and healthy development activity, driven largely by rapid iterations to its WebUI, channel integrations, and automation systems. In the last 24 hours, the project processed 13 issues (closing 10) and handled an impressive 65 pull requests (merging/closing 47). The maintainer team is actively merging community contributions, optimizing CI/CD pipelines, and resolving complex state-management bugs. The current trajectory indicates a strong push toward hardening edge cases in session handling and improving the out-of-the-box user interface experience.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Development momentum today was heavily focused on test suite reliability, WebUI UX, and automation refinement. Key merged PRs include:
*   **CI & Infrastructure Hardening:** PR [#4936](https://github.com/HKUDS/nanobot/pull/4936) significantly sped up the test suite by reducing OS/Python cross-product jobs and making protocol tests deterministic.
*   **WebUI Enhancements:** Several UI improvements were merged, including adding a copy action to user messages ([#4930](https://github.com/HKUDS/nanobot/pull/4930)), highlighting slash commands/app mentions ([#4933](https://github.com/HKUDS/nanobot/pull/4933)), validating inferred file paths before preview ([#4935](https://github.com/HKUDS/nanobot/pull/4935)), and fixing a Docker build dependency issue ([#4927](https://github.com/HKUDS/nanobot/pull/4927)).
*   **Automation & Scheduling:** Merged [#4915](https://github.com/HKUDS/nanobot/pull/4915) to make heartbeat evaluation more configurable, addressing regressions caused by migrating heartbeat features to the cron system.
*   **Reliable Restarts:** PR [#4931](https://github.com/HKUDS/nanobot/pull/4931) improved system stability by ensuring completion notices are delivered only after a target channel successfully reconnects during a restart.

## 4. Community Hot Topics
*   **Unified Session Routing ([Issue #4924](https://github.com/HKUDS/nanobot/issues/4924)):** A highly discussed bug reported by `wzrayyy` reveals that the heartbeat target selection fails when `unifiedSession: true` is enabled. This highlights the community's heavy reliance on NanoBot for cross-platform, unified messaging, and the complexity of routing background automated tasks.
*   **WebUI Cron Management ([Issue #4218](https://github.com/HKUDS/nanobot/issues/4218)):** Closed today but with active interest. The community expressed strong demand for managing scheduled jobs directly via the WebUI rather than editing config files, which signals a transition of NanoBot from a developer-centric CLI tool to a fully-fledged product.

## 5. Bugs & Stability
Ranked by severity:
1.  **High: Resource Leak in Unified Sessions ([Issue #4787](https://github.com/HKUDS/nanobot/issues/4787)):** `Session.messages` grows without bound, which will eventually crash long-running sessions due to memory exhaustion. Maintainers need to address this systemic architectural issue.
2.  **Medium: LLM Streaming Timeout Bypass ([Issue #4795](https://github.com/HKUDS/nanobot/issues/4795)):** Closed today. Streaming calls were bypassing wall-clock timeouts completely, potentially causing zombie processes and resource hogging.
3.  **Medium: Windows ExecTool Encoding Corruption ([Issue #4881](https://github.com/HKUDS/nanobot/issues/4881)):** Closed today. PowerShell UTF-16 output was being forced into UTF-8 decoding, resulting in corrupted shell execution for Windows users. 
4.  **Low: Qwen Model Reasoning Leakage ([Issue #4934](https://github.com/HKUDS/nanobot/issues/4934)):** Currently open. The model's internal "thinking/reasoning" traces are being exposed to the end-user chat interface when using DashScope providers.
5.  **Low: Telegram Markdown Rendering ([Issue #2568](https://github.com/HKUDS/nanobot/issues/2568)):** Closed. Intermittent failures with Telegram markdown rendering on long messages were addressed.

## 6. Feature Requests & Roadmap Signals
Based on active PRs and community requests, the immediate roadmap points toward deeper automation, memory management, and easier deployment:
*   **Smart Memory Consolidation:** PR [#4621](https://github.com/HKUDS/nanobot/pull/4621) introduces gating archive facts with provenance context, moving NanoBot toward more human-like, reliable long-term memory.
*   **Cost Optimization:** PR [#4549](https://github.com/HKUDS/nanobot/pull/4549) adds a `model_override` for heartbeat checks, allowing users to route automated background checks to cheaper LLMs, saving API costs.
*   **Zero-Config Deployments:** PR [#4937](https://github.com/HKUDS/nanobot/pull/4937) introduces one-click deployment to Render, strongly signaling a push to make the assistant accessible to non-technical users.
*   **Hardware Integration:** Issue [#1411](https://github.com/HKUDS/nanobot/issues/1411) showed user interest in integrating NanoBot with IoT devices like Xiaomi smart speakers.

## 7. User Feedback Summary
Users are highly engaged with NanoBot's multi-channel capabilities, specifically praising the Telegram and WhatsApp integrations. However, pain points emerge around platform-specific quirks—such as Telegram's strict markdown splitting rules and Docker networking limitations with WhatsApp WebSockets ([Issue #1086](https://github.com/HKUDS/nanobot/issues/1086)). Cron jobs and automations are heavily used, but users frequently request more programmatic control to suppress "no-op" messages (e.g., [Issue #1445](https://github.com/HKUDS/nanobot/issues/1445)). Overall satisfaction is high, but users increasingly expect a polished WebUI on par with commercial offerings.

## 8. Backlog Watch
*   **Critical Fix Needed for Open PR [#4928](https://github.com/HKUDS/nanobot/pull/4928):** This open PR addresses the high-impact unified session routing bug. It is marked as having conflicts and requires maintainer attention to merge.
*   **Unbounded Memory Growth ([Issue #4787](https://github.com/HKUDS/nanobot/issues/4787)):** Open for over a week with minimal comments. As unified sessions are a core feature, this resource leak needs prioritization to prevent long-term performance degradation.
*   **Stale WebUI Providers Feature ([PR #4689](https://github.com/HKUDS/nanobot/pull/4689)):** Open since early July with conflicts. It adds crucial OAuth status visibility and token expiry warnings. Needs conflict resolution to progress.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent based on the provided GitHub data.

# Hermes Agent Project Digest
**Date:** 2026-07-15
**Project:** NousResearch/hermes-agent

### 1. Today's Overview
Hermes Agent is experiencing a period of massive maintenance and high community engagement, evidenced by 50 issues and 50 PRs updated in the last 24 hours. The project's triage and bug-fixing velocity is exceptionally high, with nearly 80% of the updated issues (39 out of 50) being closed. However, the pull request queue shows a bottleneck, with 42 PRs remaining open compared to 8 merged/closed. The core focus of the development team and community is clearly on hardening platform gateways (WhatsApp, Telegram, iMessage), fixing context compression deadlocks, and stabilizing the desktop application. 

### 2. Releases
*No new releases were recorded in this 24-hour window. Development remains focused on merging fixes into the main branch, likely building toward the next minor or patch release.*

### 3. Project Progress
Significant strides were made in resolving critical backend bugs and improving container stability, as reflected in the merged PRs:
*   **Gateway & Adapters:** Fixed a severe silent death spiral in the Photon/iMessage sidecar, promoting unexpected crashes to fatal adapter errors to prevent silent loops ([PR #49876](https://github.com/NousResearch/hermes-agent/pull/49876)).
*   **Docker Environments:** Resolved an issue where TTS (Text-to-Speech) edge installations failed in Docker environments by pre-installing dependencies ([PR #49904](https://github.com/NousResearch/hermes-agent/pull/49904)).
*   **Context Management:** Merged fixes for compression lock contention, preventing concurrent turns from bypassing active context compression ([PR #49874](https://github.com/NousResearch/hermes-agent/pull/49874)).
*   **Desktop UI:** Fixed a layout bug where desktop update action buttons were pushed off-screen when the UI was zoomed ([PR #49895](https://github.com/NousResearch/hermes-agent/pull/49895)).
*   **Python 3.14 Support:** Patched the daemon thread pool to prevent crashes caused by the removal of private `_initializer` attributes in Python 3.14 ([PR #59157](https://github.com/NousResearch/hermes-agent/pull/59157)).

### 4. Community Hot Topics
The community is highly active in reporting edge cases across third-party integrations and platform gateways. 
*   **MCP Tool Integration:** A major frustration was the failure of Model Context Protocol (MCP) server tools to surface in active sessions despite being configured, fundamentally breaking custom agent workflows ([Issue #51587](https://github.com/NousResearch/hermes-agent/issues/51587)).
*   **Platform Bridge Stability:** The iMessage sidecar "death spiral" was heavily discussed, highlighting the need for self-healing mechanisms in platform adapters ([Issue #49858](https://github.com/NousResearch/hermes-agent/issues/49858)).
*   **Sandboxed Cron Context:** Developers using sandboxed agents are heavily requesting the ability to expose full cron prompts, rather than just 100-character previews, to allow autonomous agents better context of their scheduled tasks ([Issue #18374](https://github.com/NousResearch/hermes-agent/issues/18374)).

### 5. Bugs & Stability
Recent bug reports point to some architectural growing pains, particularly around context management and tool routing. The highest-severity issues currently tracked include:
*   **P1 - Core Tool Injection:** MCP tools are enabled in config but fail to load into the callable session toolset, rendering MCP integrations entirely non-functional for some users ([Issue #51587](https://github.com/NousResearch/hermes-agent/issues/51587)).
*   **P1 - Environment Context Leakage:** A regression where the context-file discovery falls back to `os.getcwd()` and loads Hermes' internal `AGENTS.md`, causing contributor instructions to bleed into production agent sessions ([Issue #64590](https://github.com/NousResearch/hermes-agent/issues/64590)).
*   **P2 - Provider Routing:** ACP session model routing silently reroutes explicit Anthropic models to OpenRouter, causing friction for multi-provider architectures ([Issue #59089](https://github.com/NousResearch/hermes-agent/issues/59089)).
*   **P2 - Async Delegation Loss:** Cron jobs using `delegate_task` in async mode are losing subagent completion events, causing scheduled tasks to exit prematurely ([Issue #53027](https://github.com/NousResearch/hermes-agent/issues/53027)).
*   *Fixes for several related P2 bugs (like TTS docker failures and provider fallbacks) have already been merged into main.*

### 6. Feature Requests & Roadmap Signals
Several open PRs indicate a strong community push toward expanding the agent's methodological frameworks and multi-platform reach:
*   **Developer Methodology Skills:** A notable push to integrate structured software development methodologies into the agent, adding skills for "writing-plans" and "subagent-driven-development" adapted from external frameworks like `obra/superpowers` ([PR #49873](https://github.com/NousResearch/hermes-agent/pull/49873)).
*   **Platform Access Expansion:** Addition of 4 new platform scraping/reading skills (V2EX, Bilibili, Reddit, Xueqiu) signals heavy adoption by users wanting autonomous web-data aggregation ([PR #49869](https://github.com/NousResearch/hermes-agent/pull/49869)).
*   **Voice Integration:** Continued requests for native STT/TTS support in the desktop application to enable hands-free conversational agent interactions ([Issue #49848](https://github.com/NousResearch/hermes-agent/issues/49848)).

### 7. User Feedback Summary
**Pain Points:** Users are experiencing friction with multi-platform messaging gateways (Telegram, WhatsApp, iMessage) breaking upon updates or failing silently during operation. Additionally, managing heavy context outputs in long-running gateway sessions leads to severe performance degradation and UI timeouts. 
**Satisfaction:** Despite the volume of bugs, user sentiment remains highly positive. Users praise the tool's flexibility, with one contributor noting, *"I really love Hermes Agent and use it everywhere"*, while others actively contribute complex architectural fixes (e.g., Python 3.14 compatibility, compression locking), showcasing a technically proficient and dedicated user base.

### 8. Backlog Watch
*   **42 Open Pull Requests:** The project currently has a massive backlog of 42 open PRs awaiting review or merge. Maintainer attention is needed here to prevent contributor drop-off. Key PRs include UI stream fixes ([PR #49910](https://github.com/NousResearch/hermes-agent/pull/49910)) and detached session preservation ([PR #49900](https://github.com/NousResearch/hermes-agent/pull/49900)).
*   **Long-standing Feature Requests:** Issue [#18374](https://github.com/NousResearch/hermes-agent/issues/18374) (Cron prompt exposure) has been open since May 1st and remains unaddressed despite being highly relevant to users running autonomous agent loops.
*   **Custom Provider Tooling:** The inability to disable tool calling for specific custom providers like Perplexity Sonar ([Issue #49761](https://github.com/NousResearch/hermes-agent/issues/49761)) was previously marked "not-planned" despite being a functional blocker for those integrations.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the provided GitHub data.

# PicoClaw Project Digest
**Date:** 2026-07-15
**Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

### 1. Today's Overview
PicoClaw is demonstrating highly active development and maintenance, focusing heavily on enterprise communication integrations and LLM provider optimizations. In the last 24 hours, the project processed 9 pull requests (merging/closing 5) and tended to 3 active issues. The contributor base is highly engaged in refining messaging channel behaviors (Feishu, DingTalk) and optimizing cloud LLM interactions (AWS Bedrock, Anthropic). There were no new version releases today, indicating the team is currently in a phase of feature accumulation and bug fixing.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
The project merged or closed 5 PRs, showing solid forward momentum in messaging features, observability, and core stability:
*   **Messaging Channel Enhancements:** Merged fixes ensuring tool calls aren't dropped during streaming ([PR #2957](https://github.com/sipeed/picoclaw/pull/2957)) and adding real per-turn LLM token usage tracking for downstream consumers ([PR #3156](https://github.com/sipeed/picoclaw/pull/3156)).
*   **Core Stability & Config:** Closed PRs addressing a Go panic when handling non-addressable `SecureString` values in maps ([PR #2270](https://github.com/sipeed/picoclaw/pull/2270)) and fixing tool schema validation errors for strict OpenAI-compatible APIs ([PR #2128](https://github.com/sipeed/picoclaw/pull/2128)).
*   **Provider Compatibility:** Closed a fix for AWS Bedrock to drop temperature parameters for models like Opus 4.8 that deprecate it ([PR #2982](https://github.com/sipeed/picoclaw/pull/2982)).

### 4. Community Hot Topics
The most engaging community discussions center around cryptography and prompt cost-reduction:
*   **Cryptographic Overhaul ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)):** With 8 comments and a high-priority tag, the community is actively discussing the migration from the unmaintained `libolm` to the official `vodozemac` library. This signals a critical need for robust, secure E2EE (End-to-End Encryption) compliance, likely for Matrix or similar protocol integrations.
*   **Prompt Caching Optimizations:** Two open PRs aim to reduce LLM costs. [PR #3163](https://github.com/sipeed/picoclaw/pull/3163) looks to leverage explicit cache points in AWS Bedrock, while [PR #3228](https://github.com/sipeed/picoclaw/pull/3228) fixes Anthropic system block caching. This shows developers are optimizing PicoClaw for high-volume, enterprise-level deployments where token costs accumulate rapidly.

### 5. Bugs & Stability
Reported bugs today were primarily related to integrations and edge-case configurations, with no core system crashes reported:
1.  **High Severity - Rate Limiting Failure:** Users report rate limiting (RPM config) silently fails if fallback models are not explicitly configured ([Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)). *No fix PR is currently noted.*
2.  **Medium Severity - DingTalk UI/UX Bug:** Chat list previews on DingTalk show a fixed "PicoClaw" string instead of the message content ([Issue #3255](https://github.com/sipeed/picoclaw/issues/3255)). This creates a poor native app experience for end-users. *No fix PR is currently noted.*
3.  **Low Severity - Feishu Media Delivery:** Audio and video sent to Feishu were delivered as downloadable files instead of native playable messages. A fix has been actively submitted today via [PR #3256](https://github.com/sipeed/picoclaw/pull/3256).

### 6. Feature Requests & Roadmap Signals
Based on today's development pipeline, upcoming versions will likely focus on:
*   **Advanced Cost Control:** Official native support for Anthropic and Bedrock prompt caching (via `cache_control`) is in the final stages of review. This will drastically reduce operating costs for AI assistants with large system prompts.
*   **Rich Media Channel Support:** [PR #3256](https://github.com/sipeed/picoclaw/pull/3256) indicates a roadmap push toward making PicoClaw a fully-fledged multi-modal assistant, moving beyond text to native audio/video delivery on enterprise platforms like Feishu.
*   **Security Upgrades:** The high-priority request to support `vodozemac` ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)) suggests a near-term breaking change to phase out `libolm`.

### 7. User Feedback Summary
Real-world user feedback highlights both the flexibility and the friction of using PicoClaw in production:
*   **Enterprise Chat Integration is Key:** Users are heavily utilizing PicoClaw with Chinese enterprise software (DingTalk, Feishu). However, they expect native, polished UX (e.g., proper chat previews and inline media playback), showing dissatisfaction with generic "fallback" behaviors.
*   **Strict API Compatibility Issues:** Users deploying local or strict OpenAI-compatible models (like LM Studio via MCP servers) are running into schema validation errors, revealing a need for more forgiving default tool configurations.
*   **Assumed Defaults:** Users tend to configure only their primary model without setting up fallbacks, leading to broken rate-limiting expectations.

### 8. Backlog Watch
*   **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) (vodozemac migration):** Open since June 9th, tagged as high priority. Requires maintainer assignment and final architectural decisions on making `libolm` optional at compile time.
*   **[PR #3233](https://github.com/sipeed/picoclaw/pull/3233) (Fix backward compat):** Currently marked as stale. The description is empty, but it addresses backward compatibility for PR 3222. It should either be formally reviewed or closed by the maintainers to keep the contribution pipeline clean.
*   **[Issue #3232](https://github.com/sipeed/picoclaw/issues/3232) (Rate Limiting without fallbacks):** A functional bug affecting core API routing that has been open for a week without a PR.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw based on the provided GitHub data.

### 1. Today's Overview
NanoClaw is currently experiencing a phase of high codebase stabilization and developer friction reduction, marked by a substantial volume of 28 pull request updates with zero new issue filings. The maintainers and community are highly focused on hardening system reliability, particularly concerning container lifecycles, messaging adapters, and deployment configurations. The 9 closed/merged PRs indicate an active and responsive review process, while the heavy emphasis on "fixes" over new features suggests the project is aggressively paying down technical debt before introducing major new capabilities. Overall, project health appears robust, driven by a meticulous community dedicated to edge-case resolution.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Development today was strictly focused on bug fixes, adapter reliability, and documentation alignments. 9 PRs were successfully merged/closed, representing a solid clean-up sweep:
*   **Channel/Adapter Fixes:** Fixed a critical Discord interaction bug where DM approval card button taps always routed to "reject" ([#2899](https://github.com/nanocoai/nanoclaw/pull/2899)). Corrected Telegram deep-links to use `telegram.me` ([#3043](https://github.com/nanocoai/nanoclaw/pull/3043)), and fixed Telegram wiring row creation during pairing ([#2728](https://github.com/nanocoai/nanoclaw/pull/2728)). 
*   **Environment/Config Fixes:** Resolved an issue where `NANOCLAW_*` flags set in `.env` weren't reaching `process.env` under `launchd`/`systemd` ([#2730](https://github.com/nanocoai/nanoclaw/pull/2730)), and fixed pre-commit hooks failing silently when `pnpm` was missing from PATH ([#2753](https://github.com/nanocoai/nanoclaw/pull/2753)).
*   **Documentation:** Aligned the `add-telegram` skill docs to match actual setup status block emissions ([#2729](https://github.com/nanocoai/nanoclaw/pull/2729)).

### 4. Community Hot Topics
While no new issues were opened, active PRs reveal highly specific, production-level troubleshooting by power users and core contributors:
*   **Supply Chain & Security:** User `sturdy4days` has driven significant hardening, notably attempting to activate a `minimumReleaseAge` gate to protect the project from malicious or prematurely pulled npm packages ([#2973](https://github.com/nanocoai/nanoclaw/pull/2973)), alongside broader router input validation ([#2801](https://github.com/nanocoai/nanoclaw/pull/2801)).
*   **Message Reliability:** Multiple contributors (`joevandyk`, `blueye25`) are tackling edge cases in message delivery, such as ensuring `<message>` blocks aren't truncated by quoted text ([#3048](https://github.com/nanocoai/nanoclaw/pull/3048)) and are successfully drained from `outbound.db` before a container exits ([#3045](https://github.com/nanocoai/nanoclaw/pull/3045)). This highlights a community need for 100% delivery assurance.

### 5. Bugs & Stability
Today's bug reports (filed via PRs) reveal vulnerabilities in message parsing and attachment handling, ranked by severity:
1.  **High: Inbound Attachment Drops ([#3044](https://github.com/nanocoai/nanoclaw/pull/3044)).** Attachments lacking a live `fetchData()` (like Telegram voice notes) are silently dropped. *Fix PR exists.*
2.  **High: Untrusted Router Input Flaws ([#2801](https://github.com/nanocoai/nanoclaw/pull/2801)).** `safeParseContent` fails on primitive payloads, returning `undefined` instead of text. *Fix PR exists.*
3.  **Medium: Discord Button Misrouting ([#2899](https://github.com/nanocoai/nanoclaw/pull/2899)).** A newline suffix in `custom_id` caused all Discord approval button taps to trigger "reject". *Fix PR merged.*
4.  **Medium: Delayed Outbound Messages ([#3045](https://github.com/nanocoai/nanoclaw/pull/3045)).** Messages written right before container exit are delayed by up to 60 seconds. *Fix PR exists.*
5.  **Medium: Slack Credential Ordering ([#3047](https://github.com/nanocoai/nanoclaw/pull/3047)).** Setup puts environment configuration after webhook verification, breaking the install flow. *Fix PR exists.*

### 6. Feature Requests & Roadmap Signals
The primary feature signal is the expansion of communication channel integrations. Developer `OmriBenShoham` opened two iterations of a PR to add **Dial** to the channel picker, wizard, and skills setup ([#3050](https://github.com/nanocoai/nanoclaw/pull/3050), [#3042](https://github.com/nanocoai/nanoclaw/pull/3042)). This indicates an upcoming push to support voice/telephony or alternative messaging protocols in the next release. 
Additionally, core team member `moshe-nanoco` is working on unifying approval holds behind a single lifecycle contract ([#3040](https://github.com/nanocoai/nanoclaw/pull/3040)), signaling an internal architectural refactor to standardize how AI agents request human-in-the-loop approvals across all channels.

### 7. User Feedback Summary
Real user pain points heavily revolve around local deployments and system-level integration quirks. Users running NanoClaw as a background service (`launchd`/`systemd`) expressed frustration over environment variables not loading properly ([#2730](https://github.com/nanocoai/nanoclaw/pull/2730)). There is also clear friction in the initial setup experience for channels—Slack and Telegram setup walkthroughs required fixes because documentation didn't match actual emitter logs. However, the fact that users are successfully navigating these complex setups and submitting detailed PRs shows a highly technical, invested user base.

### 8. Backlog Watch
*   **Database Journal Corruption ([#2750](https://github.com/nanocoai/nanoclaw/pull/2750)):** Open since June 12th, this addresses `outbound.db` READONLY handle corruption after container SIGKILLs. It fixes critical failure modes (#2516, #2640) and requires maintainer attention for merging.
*   **Implicit Docker Image Pulls ([#2800](https://github.com/nanocoai/nanoclaw/pull/2800)):** Open since June 17th, this prevents Docker from implicitly pulling configured images and validates group folders. Given the current focus on supply chain security, this security-hardening PR should be prioritized for review.
*   **Compose Group Leaks ([#2921](https://github.com/nanocoai/nanoclaw/pull/2921)):** Open since July 3rd, it fixes a bug where *every* skill's instructions were inlined into a group's `CLAUDE.md`. This has implications for context window bloat and agent confusion, and needs swift merging.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the provided GitHub data.

### 1. Today's Overview
IronClaw is currently experiencing an intense period of active development and rigorous quality assurance, as evidenced by 50 PR updates and 48 issue updates in the last 24 hours. The core development team is aggressively executing a major architectural overhaul—specifically the "unified extension runtime" (NEA-25 Train A & B)—while simultaneously running extensive QA "bug bash" initiatives to stabilize the platform. The ratio of recently closed PRs (29) to open ones (21) demonstrates a healthy and rapid merge cadence. However, the sheer volume of newly opened enhancement and stabilization issues (led by user `ilblackdragon`) highlights underlying friction with CI reliability, error handling, and state management that needs to be overcome before the next major release.

### 2. Releases
*No new releases were published today.* 
However, PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (open since July 3) indicates that a significant version bump is actively being staged. The upcoming release will introduce breaking API changes in `ironclaw_common` and `ironclaw_skills` (moving to 0.5.0 and 0.4.0 respectively), alongside a major jump for the core `ironclaw` package (0.24.0 -> 0.29.1).

### 3. Project Progress
Today's progress is defined by two massive parallel workstreams: architectural overhaul and rapid bug fixing.
*   **Extension Runtime Overhaul:** The team successfully merged a massive 9-phase architectural upgrade ("Train B") replacing the fragmented tool system with a unified extension runtime. Key merged PRs include the generic ingress router ([#6007](https://github.com/nearai/ironclaw/pull/6007)), auth engine ([#6008](https://github.com/nearai/ironclaw/pull/6008)), and Slack/Telegram outbound delivery ([#6012](https://github.com/nearai/ironclaw/pull/6012)). 
*   **Database Stability:** Major reliability improvements landed in [#6089](https://github.com/nearai/ironclaw/pull/6089), which introduces graceful retry logic for SQLite/libSQL and PostgreSQL lock contentions, preventing hard terminal failures.
*   **Security and Memory Isolation:** Closed [#5896](https://github.com/nearai/ironclaw/pull/5896), fixing a critical privacy leak where WebUI workspace memories were visible to all users.
*   **Interactive Coding:** Merged [#6013](https://github.com/nearai/ironclaw/pull/6013), adding a tools-capable completion nudge to improve agent performance during interactive coding sessions.

### 4. Community Hot Topics
The most actively discussed issues stem from users trying to integrate IronClaw with external tools via extensions.
*   **GitHub Extension False Positives:** Issue [#5948](https://github.com/nearai/ironclaw/issues/5948) generated significant discussion (5 comments). Users are frustrated that the assistant falsely claims the GitHub extension is fully activated when it is only installed, causing workflow breakdowns.
*   **Model Provider Generic Errors:** Issue [#5945](https://github.com/nearai/ironclaw/issues/5945) highlights a severe UX pain point during heavy tool usage. After executing ~34 tool calls, the system fails with a generic "model provider was unavailable" error instead of pinpointing the actual context or network limitation. 
*   *Underlying Needs:* Users are pushing the limits of IronClaw's autonomous tool execution. They desperately need accurate state reporting and transparent error messaging rather than generic fallbacks.

### 5. Bugs & Stability
Today's QA "bug bashes" uncovered several P2/P3 severity bugs. The core team has already opened targeted fixes for many of them.
*   **[High Severity] Slack State Machine Hangs:** Following a disconnect/reconnect, Slack conversations hang indefinitely in a "thinking" state ([#6092](https://github.com/nearai/ironclaw/issues/6092)) or report conflicting connection states ([#6091](https://github.com/nearai/ironclaw/issues/6091)). 
*   **[High Severity] Chat Ordering Race Conditions:** Users reported messages processing out of chronological order during concurrent tasks ([#6047](https://github.com/nearai/ironclaw/issues/6047)). *Status: Fix submitted in PR [#6096](https://github.com/nearai/ironclaw/pull/6096).*
*   **[High Severity] Windows OS Incompatibility:** PR [#6098](https://github.com/nearai/ironclaw/pull/6098) reveals that `ironclaw-reborn` currently fails to boot entirely on Windows due to a directory fsync issue. *Status: Fix submitted.*
*   **[Medium Severity] Token Revocation Handling:** Routines fail silently or output generic errors when external tokens (like GitHub PATs) are revoked ([#5884](https://github.com/nearai/ironclaw/issues/5884)). *Status: Error messaging addressed in PR [#6095](https://github.com/nearai/ironclaw/pull/6095).*
*   **[Medium Severity] LLM Connection False Positives:** The `/llm/test-connection` endpoint returns `ok: true` even for unreachable endpoints with invalid keys ([#6099](https://github.com/nearai/ironclaw/issues/6099)).

### 6. Feature Requests & Roadmap Signals
A flurry of structural enhancement issues opened today by `ilblackdragon` and `henrypark133` signal a strong pivot toward **CI rigor and error transparency** in the upcoming v0.29.1 release:
*   **Error Fidelity Enforcement ([#6108](https://github.com/nearai/ironclaw/issues/6108)):** A project-wide initiative to outlaw generic failures and "status lies" (e.g., reporting success when an integration silently fails).
*   **Release Gate Canaries ([#6106](https://github.com/nearai/ironclaw/issues/6106)):** Proposing mandatory boot smoke tests and upgrade-path checks before publishing releases, prompted by recent crash-loops caused by stale persistent volumes.
*   **CI Signal Recovery ([#6103](https://github.com/nearai/ironclaw/issues/6103)):** Action is being taken to fix the broken main-branch CI, which currently has a ~70% failure rate due to flaky tests.
*   **Agent Self-Verification ([#6093](https://github.com/nearai/ironclaw/pull/6093)):** Adding a gated self-verification pass to the reborn agent loop to catch context-window and tool-execution mistakes before returning final answers to the user.

### 7. User Feedback Summary
*   **Pain Point - Silent Failures:** Users are highly dissatisfied with "silent fails" (e.g., Issue [#6087](https://github.com/nearai/ironclaw/issues/6087) where extension catalog load failures display an empty state instead of an error). They prioritize trust and observability over silent degradation.
*   **Pain Point - State Desync:** Reconnecting external integrations (like Slack) is highly buggy, causing infinite thinking states and confusing UI indicators.
*   **Satisfaction - Rapid Core Fixes:** While bugs are prevalent in the extension layer, core contributors are responding remarkably fast. Complex concurrency issues (like the message ordering race condition) were reproduced, tested, and patched within 24 hours.

### 8. Backlog Watch
*   **`ironclaw-reborn` Release Packaging ([#3483](https://github.com/nearai/ironclaw/issues/3483)):** Open since May 11. While the standalone binary is documented and functional, release packaging remains intentionally disabled. Maintainers need to update the `cargo-dist` release strategy to formalize this rollout.
*   **WebUI UX Defects ([#6037](https://github.com/nearai/ironclaw/issues/6037), [#6039](https://github.com/nearai/ironclaw/issues/6039), [#6083](https://github.com/nearai/ironclaw/issues/6083)):** A backlog of frontend issues is piling up. Connection statuses are hidden from the UI during disconnects, light themes are completely unreadable due to hardcoded dark-mode colors, and destructive actions rely on jarring native browser `confirm()` dialogs rather than Reborn modals.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the provided GitHub data.

### 1. Today's Overview
Over the past 24 hours, LobsterAI exhibited moderate maintenance activity, successfully processing 3 pull requests and clearing out 4 outdated issues without releasing a new version. The development team appears to be in a bug-fixing and stabilization phase, focusing heavily on refining the OpenClaw agent runtime to prevent critical infinite tool loops. Frontend user experience improvements, particularly regarding chat interfaces and scrolling behaviors, were also prioritized. Overall project health remains steady and well-maintained, though the closure of older issues suggests an active effort to clean up the project backlog.

### 2. Releases
*Omitted. No new releases were published in the last 24 hours.*

### 3. Project Progress
Development today heavily targeted agent core stability and user interface polish. Three significant PRs were merged/closed:
*   **Agent Stability (OpenClaw Runtime):** Addressed critical issues where agent runs could get stuck in loops. 
    *   [PR #2331](https://github.com/netease-youdao/LobsterAI/pull/2331): Backported a dual-layer OpenClaw fix to ensure that critical `tool-loop` vetoes properly terminate the current Agent run, while allowing mixed parallel batches to finish gracefully. 
    *   [PR #2330](https://github.com/netease-youdao/LobsterAI/pull/2330): Backported an upstream agent-core fix to immediately stop the agent loop at abort boundaries following tool execution and async hooks.
*   **UI/UX Enhancements (Workspace):** 
    *   [PR #2329](https://github.com/netease-youdao/LobsterAI/pull/2329): Fixed conversation scroll jumps in the cowork module, ensuring the system respects manual scrolling during streaming and cancels pending auto-scrolls.

### 4. Community Hot Topics
The most active community items today were legacy bug reports being formally closed after lingering in the tracker since April 2026. 
*   **Localization:** [Issue #1389](https://github.com/netease-youdao/LobsterAI/issues/1389) highlighted that Chinese options were incorrectly displaying in English when the UI language was set to English. This underscores a community need for strict and accurate UI string translations.
*   **Content Sharing:** [Issue #1386](https://github.com/netease-youdao/LobsterAI/issues/1386) reported that generating long-image screenshots of extensive chat histories resulted in cropped or incomplete content. This shows high user demand for reliable export/share features for lengthy agent tasks.

### 5. Bugs & Stability
Today's newly processed issues represent historical bugs (all created in April 2026), which have now been closed:
1.  **High Severity - Agent/System Hangs:** 
    *   [Issue #1388](https://github.com/netease-youdao/LobsterAI/issues/1388): The email configuration testing tool would hang indefinitely upon clicking "test connectivity", locking the UI in a "connecting" state even after restarts.
2.  **Medium Severity - Scheduled Task Failure:** 
    *   [Issue #1390](https://github.com/netease-youdao/LobsterAI/issues/1390): Updating scheduled tasks occasionally failed with a completely unresponsive UI.
3.  **Low Severity - UI/UX Glitches:**
    *   [Issue #1386](https://github.com/netease-youdao/LobsterAI/issues/1386) (Incomplete chat sharing image cropping) and [Issue #1389](https://github.com/netease-youdao/LobsterAI/issues/1389) (Language toggle visual bug).
*Note: While these specific issues were closed today, today's merged PRs (specifically #2330 and #2331) indicate that broader agent-loop stability has been a recent, critical focus for the project.*

### 6. Feature Requests & Roadmap Signals
While no explicit new feature requests were opened today, the merged PRs provide strong signals regarding the current roadmap:
*   **Agent Control & Safety:** The backporting of complex loop-termination logic from OpenClaw (PRs #2330, #2331) indicates that the team is heavily investing in making AI agents safer and more predictable, specifically handling abort signals during parallel tool execution.
*   **Workspace Refinement:** The fix for scroll jumping during streaming (PR #2329) suggests an upcoming focus on polishing the real-time "Cowork" collaborative experience. 

### 7. User Feedback Summary
Based on the closed issues, users have historically experienced intermittent friction with background tasks (like scheduled updates and email connection testing) which degrade the app's responsiveness. Users are actively pushing LobsterAI to its limits with lengthy conversations, demanding robust exporting tools (long screenshots). Overall, users are utilizing the suite for deep, scheduled workflows, but require rock-solid UI responsiveness and accurate localization.

### 8. Backlog Watch
The project maintainers are actively managing the backlog. All four issues updated today ([#1389](https://github.com/netease-youdao/LobsterAI/issues/1389), [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386), [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388), [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390)) were tagged as `[stale]` and closed, successfully clearing out a batch of April 2026 bugs. Moving forward, maintainers should ensure that newly reported UI hangs (especially surrounding configurations and scheduled tasks) are reproduced and patched more rapidly to prevent them from sitting in the stale pipeline for months.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the structured project digest for Moltis based on the GitHub data provided.

### 1. Today's Overview
As of 2026-07-15, the Moltis project exhibits a highly active and healthy development cycle, characterized by a strong focus on system stability and broadening model compatibility. The community and maintainers successfully processed a high volume of pull requests (7 closed/merged) against a small batch of active issues (3 updated). Key development trends indicate heavy optimization for local and smaller models (such as Gemma 4 and oMLX) and rigorous hardening of integration channels like MCP, CalDAV, and browser automation. There were no new version releases today, suggesting the team is currently consolidating fixes and features for an upcoming iterative drop.

### 2. Releases
*None.* 
No new releases were published in the last 24 hours.

### 3. Project Progress
Significant advancements were merged today, heavily focusing on architectural refinements, dependency management, and parsing resilience:
*   **Tool & Agent Robustness for Local Models:** 
    *   PR [#1136](https://github.com/moltis-org/moltis/pull/1136) significantly improved agent reliability by adding coercion for stringified scalar tool arguments (e.g., converting `"true"` to `true`), fixing a major pain point when using smaller local models like Gemma 4.
    *   PR [#1098](https://github.com/moltis-org/moltis/pull/1098) made browser tool calls tolerant of explicit `null` optional parameters emitted by local models.
*   **MCP & Integrations:**
    *   PR [#1120](https://github.com/moltis-org/moltis/pull/1120) fixed a critical MCP OAuth flow failure (#1119) for servers utilizing `resource_metadata` (like Notion and Linear) by switching to a direct fetch mechanism.
    *   PR [#1145](https://github.com/moltis-org/moltis/pull/1145) patched a panic in the CalDAV integration where non-ASCII datetime formats caused slicing failures.
*   **Memory & Build Optimization:**
    *   PR [#1089](https://github.com/moltis-org/moltis/pull/1089) implemented caps on persisted tool results during session rehydration, preventing token-limit overflows during compaction and silent memory turns.
    *   PR [#1139](https://github.com/moltis-org/moltis/pull/1139) fixed a build regression where enabling the gateway `metrics` feature unintentionally force-enabled the entire `matrix-sdk` dependency.
    *   PR [#1146](https://github.com/moltis-org/moltis/pull/1146) closed a push to register the new **GPT-5.6** (Sol, Terra, Luna) models into the OpenAI fallback catalogs with defined context window limits (1.05M API / 372K backend).

### 4. Community Hot Topics
*   **Model Compatibility & Local Deployment:** The volume of fixes addressing local models (Gemma 4, oMLX) indicates a rapidly growing demographic of users self-hosting smaller LLMs with Moltis. Users are struggling with strict JSON schema adherence, which Moltis is actively patching (PR [#1136](https://github.com/moltis-org/moltis/pull/1136), PR [#1098](https://github.com/moltis-org/moltis/pull/1098)).
*   **Enterprise MCP Adoption:** Issue [#1119](https://github.com/moltis-org/moltis/issues/1119) (closed) highlights strong user demand to seamlessly connect Moltis agents to enterprise SaaS tools like Notion and Linear via standard OAuth, validating Moltis as a serious orchestration layer.
*   **Local Speech-to-Text (STT):** Issue [#1102](https://github.com/moltis-org/moltis/issues/1102) shows active community interest in integrating local, open-source audio models (FunASR/SenseVoice) for privacy-preserving voice interactions.

### 5. Bugs & Stability
*   **[Critical] CalDAV Panic on Non-ASCII Datetimes:** Remote CalDAV servers returning non-ASCII characters in dates caused a system panic due to fixed byte-index slicing. *(Fixed in PR [#1145](https://github.com/moltis-org/moltis/pull/1145))*
*   **[High] MCP OAuth `invalid_target` Error:** Authorizing remote MCP servers (Notion, Linear) failed during the OAuth flow due to improper handling of `WWW-Authenticate` headers. *(Fixed in PR [#1120](https://github.com/moltis-org/moltis/pull/1120))*
*   **[High] Local Model Tool Call Failures:** Smaller models outputting strings instead of scalars, or explicit `nulls`, caused pre-dispatch validation errors, breaking browser automation. *(Fixed in PR [#1136](https://github.com/moltis-org/moltis/pull/1136) and PR [#1098](https://github.com/moltis-org/moltis/pull/1098))*
*   **[Low] "main" Session Cannot Be Deleted:** Users are unable to delete or archive the default "main" session (Issue [#1132](https://github.com/moltis-org/moltis/issues/1132)). *No fix PR is currently listed.*

### 6. Feature Requests & Roadmap Signals
*   **FunASR/SenseVoice Local STT (Issue [#1102](https://github.com/moltis-org/moltis/issues/1102)):** A clarifying note was added recently regarding licensing, indicating active maintainer evaluation. This is a strong candidate for a native local-audio integration in an upcoming release.
*   **Dynamic Chat Context Commands (PR [#1124](https://github.com/moltis-org/moltis/pull/1124) - Open):** Proposes running a `chat.context_command` before each turn to dynamically inject runtime variables. This represents a major architectural upgrade for automated agent deployments.
*   **Browser Action Screenshots (PR [#1135](https://github.com/moltis-org/moltis/pull/1135) - Open):** Introduces auto-screenshots after state-changing browser actions to create a visual timeline. This points toward a roadmap focus on highly transparent, verifiable agentic UI interactions.
*   **Granular Activity Logging (PR [#1093](https://github.com/moltis-org/moltis/pull/1093) - Open):** Per-user/channel log visibility settings (`all`, `errors_only`, `off`), signaling an upcoming focus on multi-tenant and enterprise deployment compliance.

### 7. User Feedback Summary
*   **Pain Points:** Users running local, lightweight models frequently experience broken tool calls because these models struggle with strict JSON typing. Additionally, integrating modern OAuth-based MCP servers proved friction-heavy.
*   **Use Cases:** Users are utilizing Moltis heavily for browser automation, calendar/event syncing via CalDAV, and orchestrating connections to enterprise APIs.
*   **Satisfaction:** Overall satisfaction appears high. The maintainers are demonstrating exceptional responsiveness to complex edge cases (like header parsing and serde nullability), which builds strong trust within the power-user and self-hosting communities.

### 8. Backlog Watch
*   **Issue [#1132](https://github.com/moltis-org/moltis/issues/1132) (Open since 2026-06-18):** The bug preventing the deletion/archival of the "main" session remains unaddressed. While functionally low-severity, it creates UI clutter and frustrates power users who want clean workspace management.
*   **PR [#1124](https://github.com/moltis-org/moltis/pull/1124) (Open since 2026-06-15):** The "Dynamic Context Command" PR has been awaiting merge for a month. It needs a final review or status update from maintainers, as it is a highly requested QoL feature for programmatic agents.
*   **PR [#1093](https://github.com/moltis-org/moltis/pull/1093) (Open since 2026-06-03):** The activity log visibility settings PR has been pending for over 40 days. This is critical for enterprise adoption and should be prioritized for review.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw) based on the GitHub data from 2026-07-15.

### 1. Today's Overview
CoPaw (QwenPaw) is experiencing a massive surge in community engagement following its recent v2.0.0 release, processing 50 issues and 50 PRs in the last 24 hours alone. The maintainers are aggressively addressing v2.0 regressions, closing 35 issues and merging 26 PRs within a single day. However, the rapid iteration has introduced significant friction, particularly surrounding the new sandbox architecture, context compression, and auto-memory loops. Despite these growing pains, the project's high PR throughput and active community discussion indicate a very healthy, albeit currently unstable, transitional phase.

### 2. Releases
**v2.0.0.post2** was released, serving as a critical hotfix patch for the v2.0.0 major release.
- **Changes**: Enhanced security for sensitive files with global read allowances ([PR #6067](https://github.com/agentscope-ai/QwenPaw/pull/6067)), version bump ([PR #6070](https://github.com/agentscope-ai/QwenPaw/pull/6070)), and added regression tests for runtime, security, and installation.
- **Migration Notes**: Users upgrading from v1.x to v2.0.x should be aware of aggressive new sandboxing and tool-guard systems. Users experiencing blocked workflows or sandbox crashes are advised to evaluate the new `approval_level` and `sandbox_enabled` configurations.

### 3. Project Progress
Significant advancements were made in resolving v2.0 regressions, hardening CI, and expanding channel support:
- **Sandbox & Governance Fixes**: Closed [PR #6109](https://github.com/agentscope-ai/QwenPaw/pull/6109) to ensure the `sandbox_enabled` switch is honored in OFF-mode paths, preventing forced sandboxing when disabled.
- **Memory & Embedding Safety**: Closed [PR #6098](https://github.com/agentscope-ai/QwenPaw/pull/6098), improving ReMe reliability, observability, and fixing CJK embedding length truncation that caused 400 errors.
- **Channel Expansions**: Merged support for the **Zalo Bot** channel as a 2.0 plugin architecture ([PR #6112](https://github.com/agentscope-ai/QwenPaw/pull/6112)), and closed [PR #6106](https://github.com/agentscope-ai/QwenPaw/pull/6106) to handle gzip-encoded JSON responses in catalog downloads.
- **CI Hardening**: Opened [PR #6103](https://github.com/agentscope-ai/QwenPaw/pull/6103) to ratchet coverage floors and [PR #6110](https://github.com/agentscope-ai/QwenPaw/pull/6110) to harden desktop workflows, drop legacy dead code, and optimize runners.

### 4. Community Hot Topics
- **Sandbox & Tool Guard Friction**: [Issue #6023](https://github.com/agentscope-ai/QwenPaw/issues/6023) (Tracking) and [Issue #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) (9 comments) highlight severe user friction with the new v2.0 sandbox. Windows users reported NTFS ACL pollution and recursive `pwsh` explosions eating 20GB of RAM. The community is actively collaborating with maintainers to find a balance between safety and usability.
- **Auto-Memory Feedback Loops**: [Issue #6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) (5 comments) reports the agent getting stuck in infinite memory retrieval loops. Users feel the v2.0 memory search is "crazy" and degrades the experience compared to v1.0.
- **Agent Interruptibility**: [Issue #6087](https://github.com/agentscope-ai/QwenPaw/issues/6087) (4 comments) features a strong proposal for real-time message injection into the agent iteration loop, allowing users to correct the agent mid-task rather than waiting for it to finish a flawed execution.

### 5. Bugs & Stability
- **🔴 Critical: Context Compression Breaking APIs**: [Issue #6077](https://github.com/agentscope-ai/QwenPaw/issues/6077) and [Issue #6121](https://github.com/agentscope-ai/QwenPaw/issues/6121) report that QwenPaw's context compression drops `tool_calls` from assistant messages while keeping the `tool` response, causing hard 400 errors from DeepSeek and other strict APIs. 
  - *Fix Status*: Addressed by open [PR #6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) and [PR #6123](https://github.com/agentscope-ai/QwenPaw/pull/6123).
- **🟠 High: Agent Doom Loops**: [Issue #6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) reports the agent repeatedly triggering the same tool call in a single turn, wasting API tokens before the system eventually detects it. 
  - *Fix Status*: Addressed by open [PR #6120](https://github.com/agentscope-ai/QwenPaw/pull/6120).
- **🟠 High: Session Blocking post-/goal**: [Issue #6082](https://github.com/agentscope-ai/QwenPaw/issues/6082) notes that after a `/goal` completes, a stale session state triggers `TERMINATE` on every subsequent message, blocking all chat.
- **🟡 Medium: Desktop Build Missing Scripts**: [Issue #6097](https://github.com/agentscope-ai/QwenPaw/issues/6097) and [Issue #5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) report that frozen macOS/Windows desktop builds drop `agentscope.tool._builtin._scripts`, crashing the `Glob` tool and auto-memory on initialization.

### 6. Feature Requests & Roadmap Signals
- **Real-time Agent Steering** ([Issue #6087](https://github.com/agentscope-ai/QwenPaw/issues/6087)): Request to inject user messages into the active agent loop to pivot direction dynamically. *Prediction: Likely targeted for v2.1 as it fundamentally improves agent UX.*
- **Channel Message Truncation** ([Issue #5976](https://github.com/agentscope-ai/QwenPaw/issues/5976)): Request to truncate tool call results sent to channels (like Feishu/DingTalk) to only show previews, preventing chat spam.
- **CIDR Whitelisting for Sandbox** ([Issue #6048](https://github.com/agentscope-ai/QwenPaw/issues/6048)): Feature request to support CIDR blocks in the unauthenticated host whitelist for sandbox configurations.
- **Windows GUI Automation** ([PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)): A massive open PR adding a `computer_use` builtin tool for Windows desktop GUI automation using UIA + Tauri control mode.

### 7. User Feedback Summary
**Pain Points**: The transition to v2.0 has been highly disruptive. Users are frustrated by the overly aggressive sandbox that cannot be easily disabled, breaking standard workflows on Linux (Electron CLI tools refusing root) and Windows (ACL pollution crashing other apps). The new auto-memory system is perceived as buggy, triggering unnecessary API calls and getting stuck in retrieval loops. Upgrading via `pip` has also caused configuration overwrites ([Issue #6100](https://github.com/agentscope-ai/QwenPaw/issues/6100)).
**Satisfaction**: Despite the regressions, the community remains highly engaged and constructive. Users appreciate the multi-agent orchestration and Chinese desktop capabilities. The maintainer team (especially `cuiyuebing`, `niceIrene`, `jinliyl`) is responding rapidly, with users actively providing deep root-cause analyses and stack traces to assist in fixes.

### 8. Backlog Watch
- **[PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)**: Windows GUI automation (`computer_use`). A highly complex, first-party feature PR opened in June that needs maintainer review/merge.
- **[PR #5731](https://github.com/agentscope-ai/QwenPaw/pull/5731)**: Per-request model override. Open since early July, this first-time contributor PR needs review as it directly addresses model routing flexibility.
- **[PR #5922](https://github.com/agentscope-ai/QwenPaw/pull/5922)**: Langfuse observability tracking. Open for 5 days, this adds valuable telemetry (user/session/version tracing) that would aid in debugging the exact context/memory loops currently plaguing users.
- **[Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)**: The central "Help Wanted" task tracker. While closed, it tracks P0-P2 open tasks for the community and needs to be updated to reflect the current v2.0 stabilization priorities.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the structured project digest for ZeroClaw based on the provided GitHub data.

### 1. Today's Overview
ZeroClaw experienced highly active development on July 15, 2026, driven by heavy consolidation work around the v0.8.3 milestone and the Standard Operating Procedure (SOP) engine. The community engagement is exceptionally high, with 43 issues and 50 pull requests updated in the last 24 hours. Maintainers successfully merged 29 PRs, focusing heavily on architecture, execution stability, and closing out milestone trackers. However, the project is currently facing notable stability and security headwinds, with multiple S0/S1 bugs reported regarding sandboxing, tool gating, and deployment networking. 

### 2. Releases
No new releases were recorded today. The project remains in a release-closeout phase for the **v0.8.3 milestone** ([Tracker #7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)). All planned implementation work for v0.8.3 has either merged or been pushed out, leaving only final release validation and publication pending.

### 3. Project Progress
A massive 29 PRs were closed/merged today, highlighting rapid iteration across several subsystems:
*   **SOP (Standard Operating Procedures) Engine:** The team successfully merged the "daemon-owned SOP control plane," bringing the SOP capability to 5/5 parity. Key merges include out-of-band approval planes with fail-closed timeouts ([PR #8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304)), cron trigger wiring ([PR #8400](https://github.com/zeroclaw-labs/zeroclaw/pull/8400)), and filesystem event sourcing ([PR #8461](https://github.com/zeroclaw-labs/zeroclaw/pull/8461)). 
*   **Memory Architecture:** Hindsight was officially added as a first-class external HTTP memory backend alongside fixes for the dashboard's memory count ([PR #8992](https://github.com/zeroclaw-labs/zeroclaw/pull/8992), [PR #8993](https://github.com/zeroclaw-labs/zeroclaw/pull/8993)).
*   **Ecosystem & Tooling:** Closed trackers for CI, dependencies, provider serialization, and channel adapter behaviors, successfully clearing the deck for the v0.8.3 release ([Tracker #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073), [Tracker #8362](https://github.com/zeroclaw-labs/zeroclaw/issues/8362)).

### 4. Community Hot Topics
*   **Multi-tenant Security ([Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)):** Generating 10 comments, the top discussion centers around adding per-sender Role-Based Access Control (RBAC). Users running enterprise deployments need isolated workspaces and toolsets for different user classes (customers vs. operators).
*   **Channel Context & Localization:** Users are actively discussing how ZeroClaw interacts with chat platforms. [Issue #6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) (7 comments) requests better Slack thread hydration so users don't have to re-mention the bot, while [Issue #6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) highlights missing Fluent localizations for runtime commands.
*   **Local-First AI:** [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (5 comments, 2 👍) shows strong community desire for a compact local-model mode (via Ollama) that prevents prompt leakage and disables permissive fallback parsing. 

### 5. Bugs & Stability
Several high-severity bugs have surfaced, mostly clustered around security boundaries and containerization:
*   **S0 - Security Bypass:** [Issue #7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) reveals that `execute_pipeline` bypasses per-agent tool gating (a confused deputy vulnerability), allowing global policies to override local agent restrictions. 
*   **S1 - Workflow Blocked / Networking:** [Issue #9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) reports that the Docker Compose gateway binds to loopback behind published ports, causing connection refusals. 
*   **S1 - Workflow Blocked / Web UI:** [Issue #8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) notes that SOPs are completely unavailable to agents via the web dashboard chat session.
*   **S1 - Sandboxing:** [Issue #8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) highlights that Landlock sandboxing completely breaks shell tool access on Fedora hosts.
*   *Note on SOP Fixes:* Several S2 bugs regarding the SOP engine logging false completions ([Issue #8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)) and missing run-status guards ([Issue #8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)) were successfully closed today.

### 6. Feature Requests & Roadmap Signals
*   **Persistent Memory Overhaul:** [RFC #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) proposes strictly separating conversation history from agent-curated long-term memory. Coupled with the recent Hindsight PR, memory architecture is a clear post-v0.8.3 priority.
*   **Observability Enhancements:** [RFC #8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) suggests carrying an opaque conversation ID through turn-lifecycle events for cross-turn correlation in OpenTelemetry exports.
*   **Home Assistant Integration:** [PR #8994](https://github.com/zeroclaw-labs/zeroclaw/pull/8994) adds a native Home Assistant REST tool, signaling an aggressive push into local smart-home automation use cases.

### 7. User Feedback Summary
Users are heavily testing ZeroClaw in self-hosted, local-first, and enterprise environments. The excitement around the new SOP engine is palpable, though users report friction in writing SOPs and need better documentation and syntax examples ([Issue #8587](https://github.com/zeroclaw-labs/zeroclaw/issues/8587)). Provider reliability remains a pain point; users are frustrated when provider 400 errors (like malformed tool calls in [Issue #8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675)) bury actionable diagnostics under generic retry envelopes ([Issue #9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001)). 

### 8. Backlog Watch
*   **Persistent Memory Tracker ([Issue #8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)):** Marked as `needs-maintainer-review`. This large-scale tracker to bring the persistent memory subsystem to parity with mature peers requires final approval to proceed.
*   **Cron Skip Gates ([Issue #5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)):** Open since April 10th with high architectural risk, this feature request for pre-hook skip gates for cron jobs is currently marked as `status:blocked` and needs maintainer unblocking.
*   **Line Channel Omission ([Issue #9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052)):** A newly reported but critical CI gap showing that the supported `channel-line` feature was completely omitted from `channels-full` and CI coverage.

</details>