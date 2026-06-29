# OpenClaw Ecosystem Digest 2026-06-30

> Issues: 387 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-29 22:20 UTC

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

Here is the project digest for OpenClaw based on the provided GitHub data.

# OpenClaw Project Digest - 2026-06-30

## 1. Today's Overview
OpenClaw is experiencing a massive surge in community engagement and development activity, processing an impressive 500 pull requests and 387 issues in the last 24 hours alone. While only 55 PRs were merged/closed, the sheer volume of open PRs (445) indicates a highly active contributor base working on broad platform expansions and deep architectural refactors. The project's focus is heavily split between stabilizing the newly introduced SQLite-backed session/transcript runtime and integrating a multitude of third-party AI providers (DeepSeek, MiniMax, Codex). However, the high ratio of active issues (306) suggests that recent feature drops—particularly the v2026.5.x and v2026.6.x updates—have introduced notable regressions that require ongoing maintenance.

## 2. Releases
**v2026.6.11-beta.2** was announced recently, introducing enhanced channel control capabilities.
* **Highlights:** The release focuses on making channel operations easier to automate and tune.
* **New Features:** Includes a new Slack relay mode, native Mattermost `/oc_queue` support, and per-direct-message model overrides. 
* **Contributors:** Features community patches from @sjf-oa, @amknight, @xydigit-zt, @thomaszta, and @gandalf-at-lerian.

## 3. Project Progress
Development momentum is currently centered on architectural overhauls and eliminating event-loop blocking to improve latency.
* **Database-First Runtime:** Active work continues on migrating core sessions and transcripts to SQLite (PR [#88838](https://github.com/openclaw/openclaw/issues/88838)), which promises companion-friendly seams and cursored transcript reads.
* **Latency & Event Loop Fixes:** Several high-impact PRs are ready for maintainer review to tackle severe cold-start and initialization delays. Notably, PR [#89040](https://github.com/openclaw/openclaw/pull/89040) addresses 14-22s event-loop stalls during `embedded_run` by removing synchronous file I/O.
* **Message Delivery Reliability:** Progress is being made on preventing silent message drops and stranded replies, particularly across Discord, Telegram, and Feishu channels (e.g., PR [#88992](https://github.com/openclaw/openclaw/pull/88992) and PR [#89039](https://github.com/openclaw/openclaw/pull/89039)).

## 4. Community Hot Topics
* **Cross-Platform App Demand:** Issue [#75](https://github.com/openclaw/openclaw/issues/75) (110 comments, 81 👍) remains the most active item. Users are highly requesting Linux and Windows equivalents of the macOS Clawdbot app.
* **Database Runtime Migration:** Issue [#88838](https://github.com/openclaw/openclaw/issues/88838) (36 comments) shows heavy collaborator alignment on the SQLite storage flip, consolidating historical paths into a single active implementation lane.
* **DeepSeek Caching Regression:** Issue [#94518](https://github.com/openclaw/openclaw/issues/94518) (6 comments, 8 👍) highlights a major pain point for cost-conscious users: the 2026.6.x upgrade broke boundary-aware caching for DeepSeek models, causing cache hit rates to plummet below 10%.

## 5. Bugs & Stability
Recent updates have introduced several P1 stability and performance issues. Maintainers are actively triaging these via incoming PRs.
* **P1 - Severe CLI/Init Latency:** Issue [#82070](https://github.com/openclaw/openclaw/issues/82070) and Issue [#75782](https://github.com/openclaw/openclaw/issues/75782) report 10-15s synchronous blocking during `embedded_run` auth and CLI cold-starts. Addressed by open PR [#89040](https://github.com/openclaw/openclaw/pull/89040).
* **P1 - Silent Message Loss & Write Locks:** Issue [#86538](https://github.com/openclaw/openclaw/issues/86538) reports that session write-lock timeouts are silently blocking subagent delivery. Similarly, Issue [#81490](https://github.com/openclaw/openclaw/issues/81490) notes subagent completions spawn fresh runs instead of resuming, overwriting session pointers.
* **P1 - Tool Execution Loop Broken:** Issue [#81567](https://github.com/openclaw/openclaw/issues/81567) shows GPT-4o agents exiting after a single text response instead of continuing the tool-use loop.
* **P1 - macOS Privacy Loop (Security):** Issue [#94147](https://github.com/openclaw/openclaw/issues/94147) reports a critical bug where the macOS app rebuilds `CLLocationManager` every second, triggering endless TCC permission prompts.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and highly-rated issues, the next major updates will likely focus on:
* **Plugin SDK Expansion:** Exposing stable, typed surfaces for third-party plugins and installed skill workflows (Issue [#81913](https://github.com/openclaw/openclaw/issues/81913)).
* **Advanced Gateway & Channel Integration:** Support for Telegram's new Guest Bot and Bot-to-Bot communication protocols (Issue [#79077](https://github.com/openclaw/openclaw/issues/79077)), alongside better proxy routing for enterprise tools like Feishu (PR [#86386](https://github.com/openclaw/openclaw/pull/86386)).
* **Deterministic Deployments:** A proposed "Gateway-lite" mode (Issue [#86881](https://github.com/openclaw/openclaw/issues/86881)) that bypasses the AI harness entirely for deterministic webhook/cron routing.

## 7. User Feedback Summary
Users are expressing frustration with the operational complexity and silent failure states introduced in the 2026.5.x/6.x updates. A recurring pain point is **silent message loss**—where agents fail to reply or drop tool results without surfacing errors (Issues [#80520](https://github.com/openclaw/openclaw/issues/80520), [#80040](https://github.com/openclaw/openclaw/issues/80040)). Furthermore, users integrating alternative models (MiniMax, DeepSeek) are hitting breaking changes in provider API semantics and caching logic. Despite these frustrations, the community remains deeply engaged, with advanced users actively discussing complex implementations like JSONL session-replay harnesses and multi-provider OAuth profiles.

## 8. Backlog Watch
* **Native Windows/Linux Apps (Issue [#75](https://github.com/openclaw/openclaw/issues/75)):** Created on Jan 1st, this highly-upvoted request (81 👍) still lacks a definitive product decision or assigned maintainer.
* **Cascading Auth/Cache Failures (Issue [#80040](https://github.com/openclaw/openclaw/issues/80040)):** A complex, multi-layered bug report from May involving OAuth invalidation and duplicate tool execution that desperately needs a live reproduction and maintainer deep-dive.
* **Dashboard Security & Hangs (Issue [#81917](https://github.com/openclaw/openclaw/issues/81917)):** The dashboard is logging bare, tokenized URLs despite auto-auth, causing hang loops on Linux/KDE. This has been open since mid-May awaiting a security review.

---

## Cross-Ecosystem Comparison

# Cross-Project Analysis: Open-Source AI Agent & Personal Assistant Ecosystem
**Report Date:** June 30, 2026

## 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently in a hyper-active state of architectural maturation, shifting from basic LLM wrappers to robust, multi-channel, and multi-agent orchestration platforms. Development velocity across the board is exceptionally high, driven by the need to support diverse open-weight models (e.g., DeepSeek, Qwen) and complex communication gateways (Slack, Discord, DingTalk). However, this rapid expansion is introducing severe operational friction, with many flagship projects (like OpenClaw, CoPaw, and IronClaw) experiencing "growing pain" regressions related to context management, message delivery reliability, and execution sandboxing. Overall, the ecosystem is pivoting towards enterprise-grade stability, cost optimization, and local-first execution.

## 2. Activity Comparison
*Health Score is graded A-F based on PR/Issue volume, merge rates, and active bug triaging.*

| Project | Issues (24h) | PRs (24h) | Latest Release Status | Health Score | Phase |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 387 | 500 | **v2026.6.11-beta.2** (Active) | **B+** | Scaling / Stabilizing |
| **NanoBot** | 5 | 31 | No Release (Prep phase) | **A** | High Velocity / Hardening |
| **Hermes Agent** | 50 | 50 | No Release (Prep phase) | **A-** | Active Stabilization |
| **IronClaw** | 50 | 50 | Engine v0.29.1 (Prep) | **A-** | Alpha/Beta (Reborn) |
| **CoPaw (QwenPaw)**| 30 | 50 | v2.0.0-beta.1 (Verify) | **B** | Major Migration (v2.0) |
| **LobsterAI** | N/A | 40 | **2026.6.29** (Active) | **A** | Active Iteration |
| **ZeroClaw** | 50 | 50 | No Release (v0.8.x prep) | **B+** | Deep Stabilization |
| **NanoClaw** | 0 | 10 | No Release | **A** | Merge & Build |
| **PicoClaw** | 3 | 3 | Stable | **C+** | Stale Backlog / Low Triage |
| **NullClaw** | 0 | 4 | No Release | **B** | Maintenance / Heads-down |

## 3. OpenClaw's Position
OpenClaw commands one of the largest and most vocal user bases in the ecosystem, functioning as the core reference implementation for many other tools (explicitly noted by LobsterAI). 
* **Advantages:** Unmatched gateway integration breadth and high community engagement. It boasts native support for emerging Asian enterprise tools (Feishu, Mattermost) alongside Western standards (Slack, Discord).
* **Technical Approach:** Currently executing a heavy architectural overhaul—migrating sessions to SQLite to solve concurrent state limitations and heavily targeting event-loop blocking (cold-start latency).
* **Challenges vs. Peers:** OpenClaw is currently suffering from severe "scale pains." Unlike NanoBot or NanoClaw, which are swiftly patching bugs with zero open issues, OpenClaw has 306 active issues. P1 bugs like silent message drops, security loops (macOS TCC permissions), and broken tool loops indicate that recent v2026.5.x/6.x feature drops have outpaced QA. 

## 4. Shared Technical Focus Areas
Several universal requirements are simultaneously emerging across the open-source agent landscape:
* **Context Window & Cost Optimization:** **(OpenClaw, NanoBot, CoPaw, PicoClaw)**. LLM context limits are a universal pain point. Projects are rushing to implement token compaction (NanoBot), per-turn cost tracking (PicoClaw), and fixing broken prefix caching for models like DeepSeek (CoPaw, OpenClaw).
* **Multi-Agent Orchestration (A2A):** **(NanoBot, NanoClaw, CoPaw)**. There is a massive push to allow agents to spawn sub-agents or delegate tasks. NanoBot is building native A2A delegation with loop-protection, while CoPaw users are demanding programmatic `@mention` routing between agents in IM channels.
* **Execution Sandboxing & Security:** **(NanoBot, NanoClaw, CoPaw, Hermes Agent)**. As agents write files and execute code, preventing host compromise is critical. NanoBot and NanoClaw are urgently patching directory traversal and symlink escape vulnerabilities, while CoPaw is heavily documenting Bubblewrap/Seatbelt kernel isolation.
* **Gateway Reliability & Payload Bounding:** **(Hermes Agent, OpenClaw)**. Handling unbounded API responses or strict provider schema rules is causing memory exhaustion and silent message drops, leading to a focus on payload size caps (Hermes) and write-lock fixes (OpenClaw).

## 5. Differentiation Analysis
* **Developer/CLI-First (NullClaw, NanoBot):** Focused strictly on terminal-first UX, native SSE streaming without prompt-injection, and lightweight deployment (fighting Docker bloat).
* **Enterprise/Team Focus (IronClaw, CoPaw):** Deep diving into Role-Based Access Control (RBAC), team permissions (IronClaw), and deep integration into specific enterprise suites (CoPaw's focus on DingTalk/Feishu ecosystems).
* **Ambient/Channel-Agnostic Assistants (ZeroClaw, NanoClaw):** Focusing heavily on how the agent interacts with the user. ZeroClaw is pioneering a WASM-first plugin architecture and passive context (e.g., reading WhatsApp silently), while NanoClaw is refining intent-based Voice UX.
* **Advanced Memory & Determinism (Hermes Agent):** Pushing the boundaries of local memory (preventing zero-match silent hangs) and visualizing agent-learned skills (EVE-style star maps).

## 6. Community Momentum & Maturity
* **Tier 1 - Hyper-Growth / Scaling:** OpenClaw, CoPaw, IronClaw. These projects have massive PR/Issue volume (30-50+ daily) but are currently battling regressions caused by major architectural rewrites (e.g., OpenClaw's DB migration, CoPaw's Runtime v2). 
* **Tier 2 - High-Velocity Stabilizers:** NanoBot, Hermes Agent, ZeroClaw. These projects have high activity but are actively closing bugs faster than they appear. They are in a "hardening" phase, rapidly merging community PRs to fortify security and A2A capabilities.
* **Tier 3 - Focused Builders:** NanoClaw, LobsterAI, NullClaw. Highly active but with lower issue noise. They are heads-down on specific feature drops (LobsterAI's IM integrations, NullClaw's CLI REPL).
* **Tier 4 - Stalled / Low Triage:** PicoClaw, TinyClaw, Moltis, ZeptoClaw. PicoClaw shows signs of lifecycle fatigue with multiple critical PRs marked `[stale]`.

## 7. Trend Signals
* **The "Prompt Cache" Economy:** Developer focus has shifted from raw model capability to *operational LLM costs*. Fixing DeepSeek prefix caching and implementing AWS Bedrock cache points is a top priority. Agent developers must prioritize preserving cache prefixes during context truncation.
* **Standardized A2A Protocols:** The push for agents to discover and communicate with each other is materializing into concrete standards, such as ZeroClaw's `/.well-known/agent-card.json` RFC. 
* **Resilience to Strict Open-Weight Schemas:** As users flee OpenAI/Anthropic for cheaper open-weight models (Qwen, Doubao, Kimi), agents are routinely breaking. Standardizing tool-call schemas (e.g., handling absolute paths, null types in tool definitions) is critical for the next generation of multi-model agents.
* **Push towards WASM & OCI:** ZeroClaw's migration to WebAssembly (WASM) plugins using OCI-compliant registries signals a maturation from ad-hoc Python/Node scripts to secure, containerized agent ecosystems.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot based on the provided GitHub data.

# NanoBot Project Digest (2026-06-30)
**Repository:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

## 1. Today's Overview
NanoBot is exhibiting **exceptionally high development velocity and robust community health**. In the last 24 hours, the project processed 5 issues and a massive 31 pull requests, merging or closing 10 of them. The active development is heavily focused on optimizing context management, enhancing multi-agent orchestration (A2A), and hardening execution security. This level of active PR throughput indicates a dedicated maintainer team rapidly iterating on community contributions to push the project's capabilities forward.

## 2. Releases
**None.** 
*No new releases were published in the last 24 hours. The high volume of open and recently merged PRs suggests a substantial consolidated release is likely being prepared for the near future.*

## 3. Project Progress
The project saw significant architectural and feature advancements through recently closed/merged PRs. Key progress areas include:
*   **Trigger & Automation Pipeline:** [PR #4502](https://github.com/HKUDS/nanobot/pull/4502) was successfully merged, introducing top-level gateway webhook triggers and robust HTTP ingress.
*   **Context Memory Optimization:** [PR #4581](https://github.com/HKUDS/nanobot/pull/4581) and [PR #4588](https://github.com/HKUDS/nanobot/pull/4588) implemented crucial compaction logic for oversized persisted subagent announcements and tool outputs, effectively reducing token usage and operational costs.
*   **Developer Experience:** The CLI provider setup was streamlined in [PR #4573](https://github.com/HKUDS/nanobot/pull/4573), allowing OAuth providers to be cleanly set as the main provider during initial setup. 
*   **Subagent Debugging:** A crucial fix for cron jobs was addressed in [PR #4293](https://github.com/HKUDS/nanobot/pull/4293), ensuring `process_direct` correctly waits for and injects subagent results instead of hanging.

## 4. Community Hot Topics
The community is heavily engaged in optimizing context limits, refining multi-agent workflows, and resolving deployment hurdles.
*   **Context Governance & Caching ([Issue #4222](https://github.com/HKUDS/nanobot/issues/4222), [PR #4588](https://github.com/HKUDS/nanobot/pull/4588)):** A major topic revolves around `max_messages` truncation breaking prompt caching. Users and contributors are actively building compactors to clean up noisy tool/exec outputs before they hit the context window.
*   **Environment & Deployment ([Issue #4580](https://github.com/HKUDS/nanobot/issues/4580), [Issue #660](https://github.com/HKUDS/nanobot/issues/660)):** Users are requesting better native support for local virtual environments (Conda) and expressing frustration over Docker image bloat (Node.js + Python), emphasizing NanoBot's "ultra-lightweight" core identity.
*   **Multi-Agent Routing ([PR #4291](https://github.com/HKUDS/nanobot/pull/4291), [PR #4570](https://github.com/HKUDS/nanobot/pull/4570)):** There is strong momentum around allowing subagents to spawn with entirely different model presets, enabling complex supervisor-researcher-writer pipelines.

## 5. Bugs & Stability
Today's issues and fixes highlight a focus on execution sandboxing and security vulnerabilities:
1.  **Critical Security Bypass:** [Issue #4592](https://github.com/HKUDS/nanobot/issues/4592) reported that absolute paths after equals signs (e.g., `curl --output=/etc/passwd`) bypassed the `restrictToWorkspace` guard. 
    *   *Status:* **Fixed** immediately via [PR #4594](https://github.com/HKUDS/nanobot/pull/4594).
2.  **Configuration Null Crashes:** [PR #4583](https://github.com/HKUDS/nanobot/pull/4583) addressed crashes during schema migration when tool configurations contained null sections.
3.  **Credential Leaks:** [PR #4584](https://github.com/HKUDS/nanobot/pull/4584) fixed a vulnerability where MCP server URLs containing sensitive tokens were being logged in plain text.
4.  **Channel Disconnects:** [PR #4567](https://github.com/HKUDS/nanobot/pull/4567) resolved a bug causing WeChat message delivery to fail when non-streaming relays dropped `tool_use` IDs.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and issues, the upcoming roadmap will likely feature heavy investments in **Agentic Intelligence** and **Tooling Enhancements**:
*   **Native Agent-to-Agent (A2A) Delegation:** [PR #4571](https://github.com/HKUDS/nanobot/pull/4571) introduces a native A2A mechanism allowing a team of agents to collaborate and delegate tasks directly, complete with cross-delegation depth guards to prevent infinite loops.
*   **Dynamic Compute Escalation:** [Issue #4419](https://github.com/HKUDS/nanobot/issues/4419) requests automatic reasoning effort escalation, allowing the agent to dynamically increase its "thinking time" based on task complexity.
*   **Advanced WebUI & Session Management:** [PR #4587](https://github.com/HKUDS/nanobot/pull/4587) introduces WebUI Markdown exports, and [PR #4591](https://github.com/HKUDS/nanobot/pull/4591) adds session-bound local triggers via a `/trigger` command.
*   **Autonomous Memory Hygiene:** [PR #4589](https://github.com/HKUDS/nanobot/pull/4589) and [PR #4554](https://github.com/HKUDS/nanobot/pull/4554) optimize the "Dream" memory-consolidation prompt to prevent `MEMORY.md` bloat and block duplicate skill creation.

## 7. User Feedback Summary
Users are generally highly satisfied with NanoBot's expanding capabilities, particularly praising its flexibility as a multi-provider personal AI. However, **cost and context management** remain the primary pain points. Users deploying NanoBot in continuous, automated environments (like cron jobs) report token wastage due to inefficient tool outputs mutating their prompt cache. Additionally, data scientists and developers want smoother transitions between NanoBot's execution environment and their local Conda setups, signaling a need for the project to better bridge the gap between AI assistant and local developer environment.

## 8. Backlog Watch
*   **Long-standing Technical Debt:** [Issue #660](https://github.com/HKUDS/nanobot/issues/660) (Created Feb 2026, 15 comments). The contradiction between NanoBot's "ultra-lightweight" marketing and its dual Python/Node.js Docker dependency remains a heavily discussed pain point for self-hosters. Maintainers should address this architecturally or clarify the project's deployment scope. 
*   **Complex Asynchronous Fixes:** [PR #4293](https://github.com/HKUDS/nanobot/pull/4293) (Created June 11). A vital fix for cron jobs hanging when spawning subagents has sat open for nearly 3 weeks. Given how heavily users rely on cron for autonomous NanoBot tasks, this requires a maintainer review and merge.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for the Hermes Agent open-source project for 2026-06-30.

### 1. Today's Overview
The Hermes Agent project is experiencing a massive surge in community engagement and issue triaging, processing 50 active issues and 50 pull requests in the last 24 hours. The repository is currently in an active stabilization and hardening phase, with contributors heavily focused on patching gateway message delivery pipelines, bounding API response payloads to prevent memory exhaustion, and refining the desktop experience. While no new releases were cut today, the high volume of targeted bug fixes and quality-of-life feature PRs indicates that maintainers are aggressively preparing the codebase for a future stable release. Project health appears robust, driven by a highly active contributor base rapidly responding to edge-case regressions.

### 2. Releases
No new releases were published today.

### 3. Project Progress
Development today was characterized by a heavy focus on system robustness, memory management, and user experience. Progress includes:
*   **Memory & State Management:** PR [#55229](https://github.com/NousResearch/hermes-agent/pull/55229) fixed an agent silent-hang by providing corrective feedback during memory replacement zero-matches. PR [#55232](https://github.com/NousResearch/hermes-agent/pull/55232) patched a state deletion bug that routed messages to closed sessions, and PR [#55225](https://github.com/NousResearch/hermes-agent/pull/55225) preserved context-compaction summaries during API auto-truncation.
*   **Security & Payload Bounding:** Multiple PRs successfully introduced hard size caps (e.g., 1 MiB chunks, 16 MiB limits) to unbounded API responses to prevent hostile or misconfigured endpoints from crashing the agent. See PRs [#55002](https://github.com/NousResearch/hermes-agent/pull/55002) (xAI OAuth), [#55216](https://github.com/NousResearch/hermes-agent/pull/55216) (Google Chat attachments), and [#54969](https://github.com/NousResearch/hermes-agent/pull/54969) (Discord UTF-16 limits).
*   **Desktop & Dashboard UI:** PRs [#55219](https://github.com/NousResearch/hermes-agent/pull/55219), [#55220](https://github.com/NousResearch/hermes-agent/pull/55220), and [#55221](https://github.com/NousResearch/hermes-agent/pull/55221) resolved a persistent dashboard bug where deleted credentials would reappear and environment variables couldn't be revealed in gated auth modes. 
*   **Swarms & Architecture:** PR [#55228](https://github.com/NousResearch/hermes-agent/pull/55228) introduced per-worker model overrides for Kanban swarms, allowing granular control over distributed tasks.

### 4. Community Hot Topics
The most active discussions center around provider compatibility and expanding Hermes' utility as a structured data assistant:
*   **Provider API Strictness ([#20866](https://github.com/NousResearch/hermes-agent/issues/20866)):** The most discussed issue (6 comments) involves `Qwen3.6-27B` throwing 400 errors because system messages aren't kept at the beginning during auxiliary tasks. This highlights the community's struggle to use diverse open-weight models with strict prompt formatting requirements.
*   **Rich Spreadsheet Manipulation ([#4438](https://github.com/NousResearch/hermes-agent/issues/4438)):** A highly requested feature (5 comments) asking for a dedicated Excel/CSV skill rather than relying on the agent to write ad-hoc `pandas`/`openpyxl` scripts. This underscores a user need for deterministic, structured file handling.
*   **Desktop Internationalization ([#37897](https://github.com/NousResearch/hermes-agent/issues/37897)):** Users are eager for the Electron app to support locale switching (4 comments), proving that Hermes is seeing adoption among non-English speaking demographics.

### 5. Bugs & Stability
Today's bug reports were dominated by gateway communication failures and silent agent hangs, though fix PRs were rapidly submitted for most critical issues:
*   **[P1] Memory Zero-Match Silent Hang ([#42405](https://github.com/NousResearch/hermes-agent/issues/42405)):** When memory is at capacity, a failed substring match sends the agent into a retry loop that exhausts the turn, yielding no user response. *(Fix offered in PR [#55229](https://github.com/NousResearch/hermes-agent/pull/55229))*.
*   **[P1] Matrix Gateway Outage ([#46142](https://github.com/NousResearch/hermes-agent/issues/46142)):** A recent migration to the `mautrix` library completely broke inbound message dispatch for Tuwunel homeserver users. 
*   **[P2] Gateway API Leaks & Crashes:** 
    *   Auth envelope leakage: Raw 401 errors are being sent directly to chat platforms ([#55071](https://github.com/NousResearch/hermes-agent/issues/55071)).
    *   Signal UTF-16 crashes: Lone surrogates cause `UnicodeEncodeError`, killing message delivery ([#55143](https://github.com/NousResearch/hermes-agent/issues/55143)). *(Fix offered in PR [#55223](https://github.com/NousResearch/hermes-agent/pull/55223))*.
*   **[P3] macOS Desktop Compaction Crash ([#55191](https://github.com/NousResearch/hermes-agent/issues/55191)):** The Electron renderer enters a crash-loop when a conversation hits the 128K-token compaction threshold.

### 6. Feature Requests & Roadmap Signals
Based on recent issues and PRs, the short-term roadmap points towards native UI visualizations, deeper CRM integration, and robust provider abstraction:
*   **Heuristic Session Titles ([#55201](https://github.com/NousResearch/hermes-agent/issues/55201)):** Moving away from LLM-based title generation to instant heuristic titles to improve UI snappiness.
*   **Visual Learning Maps ([#55226](https://github.com/NousResearch/hermes-agent/pull/55226)):** A proposed EVE-style "star map" for the desktop app to visually track agent-learned skills and memories over time.
*   **CRM & Enterprise Tooling ([#55227](https://github.com/NousResearch/hermes-agent/pull/55227)):** Introduction of a StoreCRM QA control plane plugin indicates a push towards automated QA and enterprise e-commerce workflows.
*   **Advanced Speech-to-Text ([#19777](https://github.com/NousResearch/hermes-agent/pull/19777)):** Adding ElevenLabs Scribe to improve STT accuracy on short, noisy voice notes received via messaging gateways.

### 7. User Feedback Summary
Users are pushing Hermes Agent to its limits in multi-platform, always-on deployments, resulting in friction around gateway stability and model routing. Telegram users expressed frustration that setting a `TELEGRAM_BOT_TOKEN` environment variable forcefully overrides config files ([#55113](https://github.com/NousResearch/hermes-agent/issues/55113)). Another user documented severe friction when concurrently running Telegram and WhatsApp gateways with OpenRouter/Ollama fallbacks ([#27933](https://github.com/NousResearch/hermes-agent/issues/27933)). Furthermore, power users leveraging advanced features like Mixture-of-Agents (MoA) reported unexpected model auto-switching during regular chat ([#55187](https://github.com/NousResearch/hermes-agent/issues/55187)). Overall, users love the deep configuration but are occasionally tripped up by rigid provider assumptions and aggressive routing behaviors.

### 8. Backlog Watch
*   **Desktop Compaction Stability ([#55191](https://github.com/NousResearch/hermes-agent/issues/55191)):** The macOS Electron renderer crashing at the 128K threshold is a critical UX blocker for power users and needs immediate maintainer allocation.
*   **Non-Git Project UI Bug ([#53329](https://github.com/NousResearch/hermes-agent/issues/53329)):** A recent overhaul caused non-git folders to display duplicate "lanes" in the UI, requiring a visual fix.
*   **Inaccurate Cron Docs ([#55038](https://github.com/NousResearch/hermes-agent/issues/55038)):** The bundled skill claims cron has a 3-minute hard interrupt, but the actual timeout is 10 minutes of inactivity. This documentation mismatch can cause users to badly misconfigure scheduled automation tasks.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-30, PicoClaw is exhibiting steady, continuous development with a strong focus on expanding LLM provider support, communication gateways, and enterprise observability. The project saw balanced community activity in the last 24 hours, with 3 active issues and 3 active pull requests, though no new releases were published. Maintainers and contributors are currently focusing on optimizing token usage, integrating new messaging platforms, and addressing model-specific tool-calling quirks. However, a significant portion of current open items are flagged as `[stale]`, indicating a potential backlog in merging community contributions or finalizing triage.

### 2. Releases
*No new releases were published in the last 24 hours. The project remains on its latest stable version.*

### 3. Project Progress
*No PRs were merged or closed today.* 
However, active development is progressing on several open fronts:
*   **AWS Bedrock Optimization:** PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) is under review to implement prompt caching via cache points for the Bedrock Converse API, which will drastically reduce latency and billing costs for enterprise users.
*   **LLM Token Tracking:** PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) introduces granular, per-turn LLM token usage emissions on finalized messages, enabling downstream consumers to accurately track input/output costs.
*   **Messaging Gateways:** PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) continues to add a DeltaChat gateway, pushing the project toward broader cross-platform communication capabilities.

### 4. Community Hot Topics
The community is actively discussing platform compatibility and model integrations.
*   **Gateway Expansions (Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093)):** A highly supported feature request (1 👍, 4 comments) asking for SimpleX, Wire, or Tox gateways. This signals a strong user desire for decentralized, privacy-focused communication channels interfacing with PicoClaw.
*   **DeltaChat Integration (PR [#3063](https://github.com/sipeed/picoclaw/pull/3063)):** While the feature request above was happening, the community has already stepped up via this open PR to bridge PicoClaw with DeltaChat, showing a highly proactive contributor base.

### 5. Bugs & Stability
Two notable bugs were tracked in today's digest:
1.  **[HIGH] Volcengine Doubao Tool Call Leakage (Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153)):** When using `doubao-seed-2.0-pro`, tool calls occasionally fail to execute and leak to the user as raw XML text (`<seed:tool_call>`) on PicoClaw v0.2.8. *No fix PR is available yet, and it impacts core agent execution functionality.*
2.  **[LOW] Safari iOS Panel Rendering (Issue [#3090](https://github.com/sipeed/picoclaw/issues/3090)):** [CLOSED/STALE] The PicoClaw web panel fails to load properly on Safari (iOS versions < 16.4). *This has been marked as closed, likely resolved or identified as an upstream browser limitation.*

### 6. Feature Requests & Roadmap Signals
Based on current issues and open PRs, the near-term roadmap heavily features **Cost Management** and **Communication Expansions**. 
*   **Predictions for Next Version:** 
    *   Built-in prompt caching for AWS Bedrock users.
    *   Native token usage observability metrics.
    *   A new wave of messaging platform integrations (DeltaChat being the first out of the gate, with SimpleX/Wire potentially following if community momentum holds).
*   **Model Compatibility Fixes:** Under-the-hood patches to handle non-standard tool-calling schemas from emerging models like Volcengine's Doubao series.

### 7. User Feedback Summary
Real user feedback highlights a robust adoption of PicoClaw in edge hardware (Raspberry Pi OS) and diverse cloud environments (Volcengine, AWS). Users are generally satisfied with the wide array of supported platforms but express pain points regarding UI backward compatibility (older iOS Safari versions). Furthermore, power users are highly focused on cost-efficiency and observability, expressing a strong need for per-turn token tracking to manage LLM operational expenses effectively. 

### 8. Backlog Watch
Several critical items have been marked `[stale]` and urgently require maintainer attention:
*   **PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) (DeltaChat Gateway):** Open since June 8th without a merge. 
*   **PR [#3156](https://github.com/sipeed/picoclaw/pull/3156) (Token Usage Tracking):** A highly valuable enterprise feature that has gone stale.
*   **Issue [#3153](https://github.com/sipeed/picoclaw/issues/3153) (Doubao Seed Bug):** A breaking bug regarding tool execution leaking raw text needs immediate triage.
*   **Issue [#3093](https://github.com/sipeed/picoclaw/issues/3093) (SimpleX/Wire/Tox Request):** Needs maintainer engagement to guide contributors or outline official roadmap intentions for secure messaging gateways.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the structured project digest for NanoClaw based on the GitHub data provided for 2026-06-30.

### 1. Today's Overview
NanoClaw is experiencing highly active development, characterized by a heavy focus on expanding communication channel adapters and fortifying system security. Over the past 24 hours, the project processed 10 pull requests (merging/closing 3) while reporting zero new issues, indicating that maintainers are currently in a "merge and build" phase rather than active bug triage. The contributor base is robust and highly collaborative, with multiple community members submitting code to integrate Discord and Slack, alongside critical security patches. Overall project health appears excellent, with active iterations on core agent infrastructure, messaging bridges, and deployment versatility.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Significant advancements were made today, particularly in multi-channel support and agent communication infrastructure. The team successfully merged [PR #2883](https://github.com/nanocoai/nanoclaw/pull/2883) (authored by tier2tech-tian), introducing a sophisticated Voice-Notify v3 system that categorizes voice summaries into 5 distinct intent types to prevent reading out code blocks/long tables. Infrastructure was further stabilized with the merging of [PR #2882](https://github.com/nanocoai/nanoclaw/pull/2882), which fixed a `NOT NULL` constraint violation in the `ncl messaging-groups create` CLI command, and [PR #2879](https://github.com/nanocoai/nanoclaw/pull/2879), which patched a containment-check vulnerability in agent-to-agent (A2A) attachment forwarding.

### 4. Community Hot Topics
While today's PRs recorded undefined/zero raw comment counts in the data feed, the high volume of complex, code-heavy pull requests points to intense backend development activity. 
* **Channel Expansion Focus:** [PR #2884 (Discord Adapter)](https://github.com/nanocoai/nanoclaw/pull/2884) and [PR #2885 (Slack Socket Mode)](https://github.com/nanocoai/nanoclaw/pull/2885) highlight a massive underlying community need: users are demanding seamless, native integrations with popular enterprise and gamer chat platforms (Discord, Slack).
* **Deployment Flexibility:** [PR #2871 (Dashboard Pusher)](https://github.com/nanocoai/nanoclaw/pull/2871) and [PR #2875 (Coolify Deployment)](https://github.com/nanocoai/nanoclaw/pull/2875) show that contributors are actively working on ways to monitor agent state and deploy NanoClaw on self-hosted PaaS solutions, reflecting a developer base that prioritizes data ownership.

### 5. Bugs & Stability
Today's open and closed PRs reveal that the team is actively patching high-severity bugs and architectural flaws:
1. **[Critical/Security] Symlink Escape Vulnerability:** [PR #2880](https://github.com/nanocoai/nanoclaw/pull/2880) addresses CWE-59, fixing a flaw where a compromised agent could pre-place a symlink in its session dir to achieve arbitrary host file writes. 
2. **[High/Stability] Provider Authentication 401s:** [PR #2886](https://github.com/nanocoai/nanoclaw/pull/2886) fixes a bug where connecting a new agent to a chat channel defaulted to Claude instead of the install's actual provider, breaking single-provider setups.
3. **[Medium/UX] Discord Button Actions:** [PR #2881](https://github.com/nanocoai/nanoclaw/pull/2881) fixes a parsing bug where an encoded delimiter (`\n`) caused Discord approval-card buttons to fail silently.
4. **[Low/CLI] Database Migrations:** [PR #2882](https://github.com/nanocoai/nanoclaw/pull/2882) (Closed/Merged) fixed a `NOT NULL` constraint crash when creating messaging groups via the CLI.

### 6. Feature Requests & Roadmap Signals
Based on the current momentum in the PR queue, the next version of NanoClaw is heavily shaped around external channel routing. We predict the next minor release will officially launch the **Discord Gateway Adapter** ([PR #2884](https://github.com/nanocoai/nanoclaw/pull/2884)) and the complete **Slack Socket Mode** ([PR #2885](https://github.com/nanocoai/nanoclaw/pull/2885)). Additionally, there is a clear roadmap signal towards customizable Voice UX; the merged intent-based voice routing ([PR #2883](https://github.com/nanocoai/nanoclaw/pull/2883)) suggests the team is refining NanoClaw for ambient, hands-free AI assistant use cases. 

### 7. User Feedback Summary
Real user pain points extracted from today's developer activity center around **flexible deployment** and **multi-platform communication**. 
* **Pain Point:** Users running self-hosted instances are hitting provider-specific auth limits and database schema bugs when scaling across multiple channels, as evidenced by the fixes for provider inheritance and database migrations.
* **Use Cases:** The community is actively using NanoClaw for Discord-facing approval workflows and rich media handling (attachments). The need for a dedicated dashboard pusher shows users want real-time visibility into agent operations without manually reading logs. 
* **Satisfaction:** Satisfaction appears high; users are deeply engaged enough to write full channel adapters and security patches themselves, indicating strong technical proficiency and buy-in from the community.

### 8. Backlog Watch
Because there are 0 open issues in the tracker, the project's "backlog" is currently managed entirely through open Pull Requests awaiting review. 
* **Attention Needed:** [PR #2880 (Security Symlink containment)](https://github.com/nanocoai/nanoclaw/pull/2880) is a critical security fix that needs to be fast-tracked for merging to prevent host-system compromises via agent containers.
* **Attention Needed:** [PR #2875 (Coolify Deployment Skill)](https://github.com/nanocoai/nanoclaw/pull/2875) has been open since June 27th and needs a maintainer's review for guideline compliance to unblock self-hosters looking for one-click deployment solutions.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data.

### 1. Today's Overview
**Date:** 2026-06-30
NullClaw is currently in an active development and stabilization phase, with repository momentum driven entirely by upstream contributions and internal enhancements rather than community bug triage. Over the past 24 hours, the project recorded no new releases and zero issue activity, but saw four pull requests updated. The open contributions heavily focus on improving the local developer and user experience, specifically targeting the command-line interface (CLI) and native streaming capabilities. The project's health appears stable, with automated dependency management functioning as expected and core contributors addressing usability friction points. 

### 2. Releases
*No new releases were published in this reporting period.*

### 3. Project Progress
Progress today is characterized by iterative improvements to the interactive agent environment and core LLM communication pathways:
*   **CLI REPL Fix Finalized:** PR [nullclaw/nullclaw #960](https://github.com/nullclaw/nullclaw/pull/960) (`fix(cli): handle arrow keys in agent REPL`) was closed today. This concludes an effort started on June 17 to fix raw-mode input in the terminal.
*   **CLI REPL Continuation:** A new, functionally identical PR, [nullclaw/nullclaw #970](https://github.com/nullclaw/nullclaw/pull/970), was immediately opened by the same author to continue this work. This PR introduces a custom, allocation-free line editor to handle arrow keys, history navigation, and cursor movement seamlessly in TTY sessions.
*   **Native Streaming Decoupled:** PR [nullclaw/nullclaw #971](https://github.com/nullclaw/nullclaw/pull/971) (`feat(streaming): native tool calls during SSE streaming`) was opened. This is a significant architectural update that decouples tool-call support from the streaming path, allowing providers to emit native tools during Server-Sent Events (SSE) rather than falling back to inefficient prompt-injection formats.

### 4. Community Hot Topics
*No active community hot topics or discussions were recorded today.* 
There were 0 open or active issues, and all recent PRs show 0 comments and 0 reactions. Current activity is highly technical and operational, driven primarily by core contributors (like `vernonstinebaker`) and automated bots (`dependabot`), suggesting the project is in a deep maintenance or heads-down building phase rather than active community discourse.

### 5. Bugs & Stability
*   **Medium Severity - Terminal Input Handling:** The interactive `nullclaw agent` REPL was mishandling POSIX raw-mode input, resulting in control characters being printed to the screen when users pressed arrow or delete keys. 
    *   *Status:* A previous fix was closed ([PR #960](https://github.com/nullclaw/nullclaw/pull/960)), and a new, actively worked fix is currently open ([PR #970](https://github.com/nullclaw/nullclaw/pull/970)).
*   **Medium Severity - Streaming Tool Degradation:** The agent loop previously disabled native tools whenever a stream callback was attached, forcing tools into a prompt-injection format that severely limited functionality during streaming.
    *   *Status:* Fix introduced in [PR #971](https://github.com/nullclaw/nullclaw/pull/971).
*   *No critical crashes or regressions were reported in the last 24 hours.*

### 6. Feature Requests & Roadmap Signals
While there are no formal user feature requests (issues) logged today, the merged/closed code provides clear signals regarding the immediate roadmap:
*   **Terminal-First UX:** The allocation of development resources into a bespoke, allocation-free line editor signals a strong commitment to making NullClaw a top-tier CLI-first agent tool. 
*   **Advanced Provider Compatibility:** The work in [PR #971](https://github.com/nullclaw/nullclaw/pull/971) indicates the team is preparing the architecture to better support modern LLM providers that allow simultaneous streaming (SSE) and native tool calling. This will likely be a headline feature in the next minor version release.

### 7. User Feedback Summary
Direct user feedback is unavailable for this 24-hour window due to the absence of issue comments and reactions. However, inferring from the open pull requests, the primary pain points being addressed by contributors are **terminal usability** (control characters ruining the interactive REPL experience) and **developer friction** (workarounds for tool-calling during streaming being too restrictive). The resolution of these issues will likely result in high satisfaction for power users running local agents.

### 8. Backlog Watch
*   **Stale Core PR:** [nullclaw/nullclaw #956](https://github.com/nullclaw/nullclaw/pull/956) (`ci(deps): bump alpine from 3.23 to 3.24`) has been open since June 15. While Dependabot PRs are often batched, this 15-day window suggests it may need a maintainer's review or a rebase to clear any merge conflicts.
*   **Replacement PR Needs Review:** [PR #970](https://github.com/nullclaw/nullclaw/pull/970) was created to supersede the closed PR #960. Maintainers should review and merge this soon to unblock smooth CLI usage for developers relying on the REPL.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the provided GitHub data.

# IronClaw Project Digest — 2026-06-30

## 1. Today's Overview
IronClaw is experiencing a massive surge in engineering and QA activity, driven largely by the stabilization of its next-generation engine and interface, "IronClaw Reborn." With 50 pull requests updated and a high ratio of merges (22 closed/merged), the core team is aggressively porting legacy browser coverage, expanding end-to-end (E2E) testing frameworks, and addressing a long backlog of bugs. Simultaneously, a coordinated QA "bug bash" has uncovered several critical UI and multi-step workflow issues, particularly around Google integrations and routine deliveries. Overall project health appears highly active, with maintainers rapidly triaging feedback and merging fixes.

## 2. Releases
*(No new official releases were published today. However, PR [#5311](https://github.com/nearai/ironclaw/pull/5311) indicates a significant release is being prepped, upgrading the core engine to v0.29.1 with breaking changes in `ironclaw_common` and `ironclaw_skills`.)*

## 3. Project Progress
Significant architectural and testing milestones were achieved today to harden IronClaw Reborn:
*   **Testing & QA Infrastructure:** The in-process Reborn integration-test framework was massively expanded in PR [#5392](https://github.com/nearai/ironclaw/pull/5392), adding matrix testing for LibSql, HTTP matchers, and MCP/OAuth refreshes. Additionally, shared-persistence group tests were added via PR [#5402](https://github.com/nearai/ironclaw/pull/5402).
*   **UI Porting:** Core contributor `ilblackdragon` merged three major PRs porting legacy E2E browser coverage to Reborn: chat history ([#5371](https://github.com/nearai/ironclaw/pull/5371)), WebUI auth/approval UX ([#5372](https://github.com/nearai/ironclaw/pull/5372)), and channel pairing flows ([#5373](https://github.com/nearai/ironclaw/pull/5373)).
*   **Error Handling:** PR [#5403](https://github.com/nearai/ironclaw/pull/5403) advanced the framework to send real failure details to the AI model (withholding only secrets), preventing over-eager summary validators from hiding crucial debugging context.

## 4. Community Hot Topics
*   **Google Multi-Tool Workflows (High Impact):** Issue [#5415](https://github.com/nearai/ironclaw/issues/5415) reported a critical "protocol violation" failure when stringing together Gmail reading and Google Sheets population (18-25 tool calls). This highlights a strong user need for reliable, multi-step external API workflows.
*   **Authentication & Permissions:** Users are actively discussing friction in the Reborn permission and auth flows. Issue [#5196](https://github.com/nearai/ironclaw/issues/5196) (a duplicate approval flow bug) and Issue [#5416](https://github.com/nearai/ironclaw/issues/5416) (contradictory messaging regarding Google connection states) show that users want a seamless, set-it-and-forget-it OAuth and tool execution experience.
*   **Zero-Config Expectations:** Issue [#5421](https://github.com/nearai/ironclaw/issues/5421) sparked discussion over bundled capabilities, with users expressing frustration that "zero-config" web search still prompts for NEAR AI API keys.

## 5. Bugs & Stability
*   🔴 **P1: Multi-tool Google Sheets workflow fails with protocol violation** — Issue [#5415](https://github.com/nearai/ironclaw/issues/5415). Causes consistent failure on complex automations. *(No fix PR yet)*.
*   🔴 **High: Nightly E2E failure** — Issue [#4108](https://github.com/nearai/ironclaw/issues/4108). Ongoing scheduled run failures indicating underlying regressions in automated testing.
*   🟠 **P2: Routine delivery target is globally scoped** — Issue [#5420](https://github.com/nearai/ironclaw/issues/5420). Setting one routine to Slack reroutes *all* routines to Slack, creating significant notification spam/disruption. *(No fix PR yet)*.
*   🟠 **P2: Wrong skill activation** — Issue [#5417](https://github.com/nearai/ironclaw/issues/5417). Agent activates "tech-debt-tracker" instead of web search for certain queries. *(No fix PR yet)*.
*   🟢 **Fixed: Silent OAuth Refresh Failures** — Issue [#5413](https://github.com/nearai/ironclaw/issues/5413). Closed successfully to make OAuth refreshes fail loudly.
*   🟢 **Fixed: Unselectable Log Text** — Issue [#5412](https://github.com/nearai/ironclaw/issues/5412). WebUI v2 log entries were uncopyable; fixed immediately by PR [#5414](https://github.com/nearai/ironclaw/pull/5414).

## 6. Feature Requests & Roadmap Signals
*   **Granular Automation Controls:** Issue [#5419](https://github.com/nearai/ironclaw/issues/5419) requests the ability to rename existing automations. Combined with the global-routing bug ([#5420](https://github.com/nearai/ironclaw/issues/5420)), this signals a necessary roadmap push toward maturing the "Routines/Automations" module for per-routine customization.
*   **Refined Global Permissions:** Issue [#4776](https://github.com/nearai/ironclaw/issues/4776) (Closed) and PR [#5247](https://github.com/nearai/ironclaw/pull/5247) show a concerted effort to implement an "Always Allow" global setting for eligible tools, moving away from repetitive per-use approvals.
*   **Multi-User RBAC:** A design proposal for Multi-User RBAC convergence was submitted via PR [#5425](https://github.com/nearai/ironclaw/pull/5425), indicating that enterprise/team-based access control is a major upcoming architectural focus.

## 7. User Feedback Summary
Users are heavily testing the Reborn WebUI v2 and appreciate the expanding capabilities, but they are experiencing friction at the edges of complex, multi-tool workflows. There is clear dissatisfaction with the AI's inability to maintain state during long Google Workspace tasks ([#5415](https://github.com/nearai/ironclaw/issues/5415)), as well as frustration with contradictory auth states ([#5416](https://github.com/nearai/ironclaw/issues/5416)). However, the rapid turnaround on UI/UX bugs—like the unselectable logs ([#5414](https://github.com/nearai/ironclaw/pull/5414))—demonstrates high responsiveness, keeping overall community sentiment optimistic despite the rough edges of the alpha/beta Reborn engine.

## 8. Backlog Watch
*   **Agent Looping / Timeouts (Issue [#5353](https://github.com/nearai/ironclaw/pull/5353) & Issue [#5411](https://github.com/nearai/ironclaw/issues/5411)):** Benchmarks (PinchBench) show that `http.save` body limits are causing agents to loop until they time out, scoring 0.0 on tasks. PR [#5353](https://github.com/nearai/ironclaw/pull/5353) and [#5304](https://github.com/nearai/ironclaw/pull/5304) have been open for days and need priority review, as they directly impact benchmark success rates and core agent reliability.
*   **Slack Pairing Hardening (PR [#5362](https://github.com/nearai/ironclaw/pull/5362)):** A large, low-risk PR open since June 26 that significantly improves Slack account pairing UX. Awaiting merge to stabilize channel integrations.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the GitHub data provided.

### 1. Today's Overview
LobsterAI demonstrated exceptionally high development velocity and active maintenance as of 2026-06-30, driven heavily by the integration and stabilization of the "OpenClaw" and "Cowork" modules. The project successfully pushed a new release (`2026.6.29`), absorbing a massive 40 updated Pull Requests (39 merged/closed) within the last 24 hours. While the maintainer team is rapidly closing bugs and expanding Instant Messaging (IM) plugin ecosystems, the community remains highly engaged, reporting specific UI/UX friction points and edge-case stability issues. Overall project health appears robust, with a highly responsive core development team.

### 2. Releases
**LobsterAI 2026.6.29** ([Release Notes](https://github.com/netease-youdao/LobsterAI/releases))
*   **Core Changes**: This release heavily focused on refining the OpenClaw integration. It introduces stricter permission routing for plugin approvals and patches a critical regression where agent bootstrap workspaces were improperly overlapping with task current working directories (cwd). 
*   **UI/UX Updates**: Cleaned up the Cowork navigation rail previews and tooltips.
*   **Migration Notes**: Includes automatic legacy OpenClaw cron storage detection and migration on startup. Users will benefit from upgraded preinstalled IM plugins (DingTalk, Lark/Feishu, WeCom, QQ, Discord).

### 3. Project Progress
The development team made massive strides in feature integration and architectural stability, primarily focusing on the OpenClaw gateway. Key advancements include:
*   **Workspace Isolation**: PR [#2227](https://github.com/netease-youdao/LobsterAI/pull/2227) fixed a critical bug where agent identity and long-term memory files were loading from the user's project directory instead of the agent workspace.
*   **Scheduled Tasks (Cron) Overhaul**: Multiple PRs ([#2220](https://github.com/netease-youdao/LobsterAI/pull/2220), [#2189](https://github.com/netease-youdao/LobsterAI/pull/2189), [#2190](https://github.com/netease-youdao/LobsterAI/pull/2190)) improved cron run history preservation, migrated legacy storage, and synchronized run sessions.
*   **IM Plugin Expansion**: Added and preconfigured official QQ and Discord plugins, alongside upgrading existing IM plugins like DingTalk and Lark ([#2198](https://github.com/netease-youdao/LobsterAI/pull/2198), [#2182](https://github.com/netease-youdao/LobsterAI/pull/2182)).
*   **UI Restorations**: Fixed an accidental merge that broke conversation rail tooltips and hover styling ([#2226](https://github.com/netease-youdao/LobsterAI/pull/2226)).

### 4. Community Hot Topics
The most actively discussed items revolve around UI scaling, token consumption, and specialized agent support:
*   **Token Consumption Anomaly** ([#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)): A user reported that the system seems to be repeating output text, raising concerns about severe token waste. This highlights the community's sensitivity to operational costs and LLM efficiency.
*   **Agent Extensibility** ([#2131](https://github.com/netease-youdao/LobsterAI/issues/2131)): A request for native support for the "Hermes" agent, indicating that power users are looking to integrate diverse, specialized AI models into the LobsterAI ecosystem.
*   **UI Scaling on High-Res Monitors** ([#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)): A user pointed out that the skills interface UI uses a 2-column layout on a 2560x1600 display, requesting a 3-column layout. 

### 5. Bugs & Stability
Recent bug reports indicate that while core features are advancing, UI stability and execution limits need attention. Ranked by severity:
1.  **[High] Agent Identity & Memory Loss** (Fixed in PR [#2227](https://github.com/netease-youdao/LobsterAI/pull/2227)): A previous runtime patch caused OpenClaw to load bootstrap and memory files incorrectly, completely breaking agent personas.
2.  **[Medium] Execution Window Hang** ([#2079](https://github.com/netease-youdao/LobsterAI/issues/2079)): Scrolling to the top of the execution results window causes the application to freeze/hang. This is a reproducible bug affecting core usability.
3.  **[Medium] Scheduled Task Update Failure** ([#1390](https://github.com/netease-youdao/LobsterAI/issues/1390)): Editing and updating a scheduled task results in no response. *Note: Recent PRs addressing cron synchronization may indirectly fix this.*
4.  **[Low] Email Connectivity Stuck** ([#1388](https://github.com/netease-youdao/LobsterAI/issues/1388)): Testing email connectivity leaves the application in a permanent "connecting" state, even after restarts.

### 6. Feature Requests & Roadmap Signals
Based on community input, the following features are highly requested and likely candidates for future roadmaps:
*   **Continuous Task Queueing**: Requested in [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120), users want the ability to "pre-type" or queue up the next task while an agent is currently running, mimicking workflows seen in tools like Workbuddy.
*   **Extended Execution Time Limits**: Also in [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120), users running long data-scraping scripts note that monitoring tasks get `terminated` prematurely. Adjustable or extended timeouts for long-running tasks are expected.
*   **UI Responsive Design**: Better multi-column scaling for high-resolution and ultrawide monitors (Issue [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)).

### 7. User Feedback Summary
Real-world usage reveals a mix of high expectations for automation and minor frustrations with platform constraints:
*   **Pain Points**: Users running heavy background tasks (like script monitoring) are frustrated by hard execution limits that terminate their workflows ([#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)). 
*   **Use Cases**: The tool is actively being used for scheduled automated monitoring, IM bot integrations (via QQ/Discord/DingTalk), and complex multi-step agent workflows.
*   **Satisfaction**: Generally positive, as users are treating LobsterAI as a serious productivity platform. However, friction arises around commercial boundaries, such as the clearing of monthly subscription credits before full utilization ([#2081](https://github.com/netease-youdao/LobsterAI/issues/2081)).

### 8. Backlog Watch
Several issues tagged as `[stale]` from April 2026 were updated recently but remain unresolved, requiring maintainer attention:
*   **Localization Gaps**: Issue [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) highlights that selecting English as the primary language still displays some Chinese options in English.
*   **Share Functionality Bug**: Issue [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) reports that sharing long chat histories as long images results in truncated/incomplete content.
*   **Dependency Management**: PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) from Dependabot to bump Electron from 40.2.1 to 42.5.0 has been open for nearly three months and needs to be reviewed and merged to ensure frontend security and performance.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest
**Date:** 2026-06-30

## 1. Today's Overview
The CoPaw (QwenPaw) project is exhibiting **very high active development**, processing 50 PRs and 30 issues in the last 24 hours alone. The repository is currently navigating the growing pains of a major architectural transition, specifically the migration to "Runtime v2" and AgentScope 2.0. While maintainers and contributors are merging feature-rich updates for context management and multi-channel support, the community is actively stress-testing the boundaries of the new system. The high volume of bug reports related to UI counts, model provider compatibility, and state persistence indicates a rapidly iterating codebase where new features occasionally outpace stability.

## 2. Releases
**None.** 
*Note: Although there is no formal stable release today, the automated tracker issue [#5571](https://github.com/agentscope-ai/QwenPaw/issues/5571) confirms that version `v2.0.0-beta.1` is currently undergoing installation verification.*

## 3. Project Progress
Significant architectural and feature advancements were merged or closed today, primarily focusing on AgentScope 2.0 integration, documentation, and observability:
*   **Context Management Rework:** PR [#5614](https://github.com/agentscope-ai/QwenPaw/pull/5614) merged crucial documentation for the new "scroll" context implementation, officially deprecating the old "light context manager."
*   **Channel & IM Integrations:** PR [#5601](https://github.com/agentscope-ai/QwenPaw/pull/5601) restored vital tool-guard approval notifications for third-party IM channels (Feishu, WeCom, Telegram) that were broken during runtime refactoring.
*   **Observability Restored:** PR [#5511](https://github.com/agentscope-ai/QwenPaw/pull/5511) successfully re-integrated Langfuse trace grouping into the 2.0 hook and middleware system.
*   **Security Documentation:** PR [#5621](https://github.com/agentscope-ai/QwenPaw/pull/5621) added comprehensive docs for OS kernel-level execution isolation (Sandbox, Seatbelt, Bubblewrap).

## 4. Community Hot Topics
*   **Optimizing LLM Costs:** [Issue #3891](https://github.com/agentscope-ai/QwenPaw/issues/3891) (DeepSeek prefix cache hit rate). With 5 comments, users are highly focused on operational costs, specifically optimizing the 95% cache hit rate for DeepSeek models to leverage cheaper token pricing.
*   **Multi-Agent Collaboration via IM:** [Issue #5564](https://github.com/agentscope-ai/QwenPaw/issues/5564) (DingTalk `@mention` support). Users are building complex, multi-agent workflows on DingTalk and urgently need agents to programmatically `@mention` each other.
*   **Context Window Protection:** [Issue #5342](https://github.com/agentscope-ai/QwenPaw/issues/5342) (Hard cap on tool result size). Users are actively discussing defense-in-depth strategies to prevent context window explosions when LLM calls fail.

## 5. Bugs & Stability
*   **[High] Subagent Infinite Polling:** [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873). Launching two background subagents causes the main agent to infinitely rapid-poll, which cannot be interrupted from Feishu. *Status: Open, severely impacts host stability.*
*   **[High] State Persistence & Crash Recovery:** [Issue #5579](https://github.com/agentscope-ai/QwenPaw/issues/5579). Conversation records are completely lost if the agent triggers a system reboot or if the process crashes unexpectedly. 
*   **[Medium] Governance Mode Bypass:** [Issue #5623](https://github.com/agentscope-ai/QwenPaw/pull/5623) / PR #5623. Setting "Tool Execution Security" to OFF mode in the UI still triggers approval prompts. *Status: Fix PR submitted.*
*   **[Medium] UI Tool Card Count Bug:** [Issue #5624](https://github.com/agentscope-ai/QwenPaw/issues/5624). The frontend UI always displays "1" for tool results (e.g., `glob_search` returning 241 files). *Status: Fix PR [#5628](https://github.com/agentscope-ai/QwenPaw/pull/5628) submitted.*

## 6. Feature Requests & Roadmap Signals
*   **Automated Model Fallback:** [Issue #5572](https://github.com/agentscope-ai/QwenPaw/issues/5572) requests automatic switching to backup models upon quota exhaustion or timeout. *Prediction: Given the v2.0 architecture refactoring, dynamic model routing is highly likely to be introduced in v2.0.0 stable.*
*   **Vision Fallback for Text Models:** [Issue #5615](https://github.com/agentscope-ai/QwenPaw/issues/5615) suggests automatically using a vision model to generate text descriptions when users upload images to a text-only model (like `qwen-max`).
*   **Two-Stage Memory Retrieval:** [Issue #5588](https://github.com/agentscope-ai/QwenPaw/issues/5588) requests a dedicated Reranker model for memory search to improve recall precision as memory databases scale.

## 7. User Feedback Summary
Users are pushing QwenPaw into heavy, enterprise-level daily operations, particularly integrating it deeply into Chinese enterprise IM ecosystems (DingTalk, Feishu). Pain points heavily revolve around **robustness during long-running tasks** (e.g., complaining about tasks ending mysteriously without intervention in [#5616](https://github.com/agentscope-ai/QwenPaw/issues/5616)) and **IM channel streaming inefficiencies** (e.g., DingTalk card streaming being too slow in [#5603](https://github.com/agentscope-ai/QwenPaw/issues/5603)). While the UI and core capabilities are appreciated, the instability of connections to custom local models (like Ascend-vLLM in [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584)) is a growing source of frustration.

## 8. Backlog Watch
*   **DeepSeek API Compatibility ([Issue #5573](https://github.com/agentscope-ai/QwenPaw/issues/5573)):** The 400 Bad Request errors caused by un-cleaned `null` types in tool schemas for DeepSeek V4 thinking mode still need an official code review and merge.
*   **Feishu Long Message Truncation ([Issue #5561](https://github.com/agentscope-ai/QwenPaw/issues/5561)):** Feishu bots silently fail on long messages, degrading to file uploads. This core communication bug needs maintainer prioritization.
*   **Mission Mode Integration ([PR #5442](https://github.com/agentscope-ai/QwenPaw/pull/5442)):** A massive PR disconnecting Mission Mode from the new Runtime v2 architecture has been open for nearly a week and requires final review/merge to complete the v2.0 transition.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw for June 30, 2026.

### 1. Today's Overview
ZeroClaw is exhibiting exceptionally high development velocity with a strong focus on architecture hardening, security, and expanding interoperability. Over the last 24 hours, the project processed 50 issue updates and 50 PR updates, maintaining an impressive 20% merge/close rate for pull requests without releasing a new version. The core team is heavily investing in the v0.8.3 WASM plugin program, SOP (Standard Operating Procedure) ingestion, and fixing systemic bugs in provider/tool routing. This indicates that the project is currently in a deep stabilization and capability-expansion phase, prioritizing foundational integrity over frequent formal releases.

### 2. Releases
**No new releases were published today.** The project continues to iterate towards the v0.8.0 (config/provider semantics) and v0.8.3 (WASM/plugin and runtime execution) milestones, as evidenced by active tracker issues.

### 3. Project Progress
Significant architectural and functional advancements were merged or closed today, particularly around the new SOP (Standard Operating Procedure) engine and media routing:
*   **SOP Engine Hardening:** Multiple SOP foundational PRs were merged/closed, including payload safety ingress ([PR #8502](https://github.com/zeroclaw-labs/zeroclaw/pull/8502)), step tool scope enforcement ([PR #8493](https://github.com/zeroclaw-labs/zeroclaw/pull/8493)), and documentation for history management ([PR #8436](https://github.com/zeroclaw-labs/zeroclaw/pull/8436)).
*   **Multimodal/Vision Routing Fix:** Resolved a bug where specifying a dedicated `vision_model_provider` caused the media pipeline to strip image bytes. The pipeline now correctly preserves image bytes for configured vision providers ([PR #8468](https://github.com/zeroclaw-labs/zeroclaw/pull/8468)).
*   **Provider Compatibility:** Closed a fix that adds the `name` field to native tool-result messages, resolving HTTP 400 errors specifically affecting Groq native tool calling ([PR #8441](https://github.com/zeroclaw-labs/zeroclaw/pull/8441)).

### 4. Community Hot Topics
*   **System Prompt and Tool Mismatch ([Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) / 9 comments):** Users report that system prompts are misleading reasoning models about tool availability across various entry points (channels, WebSocket, /think). This highlights a strong community need for seamless, predictable native/MCP tool execution regardless of the model or interface used.
*   **Computer-Use Capabilities ([Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) / 6 comments):** A highly requested RFC to add desktop screen interaction (mouse/keyboard control) to match capabilities seen in OpenAI Codex. This signals strong user demand for agentic GUI automation.
*   **Kimi-Code Provider Streaming Error ([Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) / 11 comments):** An S1 workflow blocker where the Kimi-code provider fails during streaming chat tool calls. The active discussion indicates a high reliance on diverse, OpenAI-compatible LLM providers functioning flawlessly out-of-the-box.

### 5. Bugs & Stability
*   **[S1 - Workflow Blocked] Telegram Channel Configuration Failure ([Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)):** A newly reported bug where `zeroclaw channels doctor` fails to recognize Telegram setups. *Status: Open, no fix PR yet.*
*   **[S1 - Workflow Blocked] Vision Provider Ignored ([Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841)):** Inbound images were silently routed to fallback providers instead of the configured vision provider. *Status: Fixed via [PR #8468](https://github.com/zeroclaw-labs/zeroclaw/pull/8468).*
*   **[S2 - Degraded] Native Tool Calling Image Inflation ([Issue #8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)):** OpenAI-compatible providers (like llama.cpp) receive base64 image markers as plain text, massively inflating token counts. *Status: Closed.*
*   **[S2 - Degraded] Cron & Heartbeat "NO_REPLY" Leak ([Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128)):** Automated tasks send literal "NO_REPLY" strings to users instead of staying silent. *Status: In progress.* (Also see newer tracking issue [Issue #8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)).

### 6. Feature Requests & Roadmap Signals
Several ambitious RFCs and feature PRs indicate the trajectory of the next major versions:
*   **Advanced Channel Integrations:** Native integration for Inkbox (Email/SMS/Voice/iMessage) is incoming ([PR #8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)), alongside a new GitHub App channel for issue/PR lifecycle events ([PR #8504](https://github.com/zeroclaw-labs/zeroclaw/pull/8504)).
*   **WASM-First Plugin Architecture:** Major strides in the v0.8.3 plugin program include making Wasm the default runtime with capability enforcement ([Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)) and utilizing OCI-compliant container registries for plugin storage/discovery ([Issue #7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)).
*   **In-Dashboard Upgrades:** Proposed RFC to allow supervised restarts and updates directly from the web dashboard ([Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)).

### 7. User Feedback Summary
Users are leveraging ZeroClaw for complex, multi-channel personal assistance but are experiencing friction with configuration inconsistencies across macOS (TUI keybindings, [Issue #7800](https://github.com/zeroclaw-labs/zeroclaw/issues/7800)) and multi-agent environments (skills installation targeting the wrong data directory, [Issue #8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)). There is notable excitement around passive context capabilities, such as the new WhatsApp opt-in group context ([Issue #8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379)), showing that users want the agent to be a silent, ambient observer until specifically triggered. 

### 8. Backlog Watch
*   **Critical Recovery Audit ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)):** Needs maintainer attention. A bulk revert from March 2026 accidentally wiped 153 approved commits. The tracking issue to recover these lost bug fixes and features is still open and labeled `help wanted`.
*   **A2A Agent Discovery ([Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)):** A high-risk, accepted RFC for `/.well-known/agent-card.json` multi-agent discovery that has been pending since early June and requires finalization before v0.8.0 hardens.
*   **OTel Observability Policy ([Issue #8462](https://github.com/zeroclaw-labs/zeroclaw/issues/8462)):** Needs maintainer review to define runtime policies for OpenTelemetry LLM and Tool content, crucial for production deployments.

</details>