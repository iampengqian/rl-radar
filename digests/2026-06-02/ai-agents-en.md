# OpenClaw Ecosystem Digest 2026-06-02

> Issues: 474 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-01 22:41 UTC

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

# OpenClaw Project Digest — 2026-06-02

## 1. Today's Overview
OpenClaw is experiencing exceptionally high development velocity, with 974 total issues and pull requests (PRs) updated in the last 24 hours. The maintainer team is aggressively iterating on the `v2026.6.1` release line, issuing three new beta versions to stabilize the newly integrated OpenAI Codex runtime and messaging channels. The majority of activity centers around hardening session state management, fixing channel delivery regressions (Telegram, Discord, Feishu), and optimizing token consumption. With 285 active issues and 399 open PRs, the project is healthy but under heavy strain from rapid architectural shifts.

## 2. Releases
Three new beta versions were released today, rapidly superseding one another to address runtime and channel stability:
*   **[v2026.6.1-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.2)**, **[v2026.6.1-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.6.1-beta.2)**, and **v2026.5.31-beta.4**:
    *   **Changes:** Agents and CLI-backed runtimes now recover much more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries (Refs #88129, #88136, #88141, #88162, #88182).
    *   **Channel Stability:** Significant steady improvements across mobile deliveries, specifically for Telegram, WhatsApp, iMessage, Slack, and iMe.
    *   **Migration Notes:** No explicit breaking changes listed, but heavy modifications to session binding and compaction suggest that users upgrading from pre-2026.5.x should clear stale JSONL lock files if experiencing session startup hangs.

## 3. Project Progress
Merges and closed PRs today focused heavily on architectural resilience, zombie process management, and edge-case recovery in the reply pipeline:
*   **Gateway Resilience:** Merged efforts around gateway shutdown reliability, ensuring zombie processes don't hold ports (e.g., PR [#88908](https://github.com/openclaw/openclaw/pull/88908) introduces forced exits and 503 health checks during shutdown).
*   **Session State & Memory:** PR [#89211](https://github.com/openclaw/openclaw/pull/89211) fixed a critical bug where resumed sessions without prior assistant context would duplicate session headers on disk. PR [#89246](https://github.com/openclaw/openclaw/pull/89246) reverted a risky memory watcher file-descriptor change to maintain stability.
*   **Reply & Channel Logic:** Fixes landed to silently skip empty-text sends on Telegram ([PR #88810](https://github.com/openclaw/openclaw/pull/88810)), recover stranded replies when agents forget to use the message tool ([PR #88992](https://github.com/openclaw/openclaw/pull/88992)), and prevent memory flush failures from aborting visible user replies ([PR #88968](https://github.com/openclaw/openclaw/pull/88968)).
*   **UI & Tooling:** PR [#89135](https://github.com/openclaw/openclaw/pull/89135) successfully merged, bringing the Skill Workshop tab to the Control UI app shell.

## 4. Community Hot Topics
The community is highly active, with discussions dominated by the transition to the Codex runtime and channel reliability:
*   **Codex vs. Pi Runtime Parity:** Issue [#80171](https://github.com/openclaw/openclaw/issues/80171) (15 comments) is a central RFC tracking the QA harness as OpenClaw moves from the Pi-built tool surface to Codex as the default runtime.
*   **Model Upgrades:** Issue [#80380](https://github.com/openclaw/openclaw/issues/80380) (14 comments, 4 👍) features a strong user request to update the default Gemini 3.1 Flash Lite model from the deprecated preview version to the generally available (GA) release for better speed and cost efficiency.
*   **Data Loss and Token Inflation:** Issue [#84038](https://github.com/openclaw/openclaw/issues/84038) (12 comments) details a severe regression where a `doctor --fix` migration silently breaks the OAuth runtime, causing a 3-4x token inflation when using GPT-5.x.
*   **Telegram Bot Capabilities:** Issue [#79077](https://github.com/openclaw/openclaw/issues/79077) (7 comments, 7 👍) requests support for Telegram's newly released "Guest Bots" and "Bot-to-Bot Communication" features, indicating a strong desire for multi-agent cross-platform interoperability.

## 5. Bugs & Stability
Several critical regressions (P1/P2) have been reported, primarily revolving around session states, token inflation, and channel delivery failures:
*   **P1: Session Write Lock Race:** Issue [#57019](https://github.com/openclaw/openclaw/issues/57019) highlights a dangerous race condition where async lock releases delete newly acquired locks, potentially causing data loss. (Fix PR is open).
*   **P1: Codex Turn-Completion Stalls:** Users report that starting in v2026.5.27, Codex-backed Telegram turns repeatedly time out waiting for `turn/completed` ([Issue #87744](https://github.com/openclaw/openclaw/issues/87744), 7 comments) and ChatGPT Plus subs face "Codex stopped before confirming the turn was complete" errors ([Issue #88312](https://github.com/openclaw/openclaw/issues/88312), 7 comments). 
*   **P1: Node.js Crash Loop:** Issue [#84820](https://github.com/openclaw/openclaw/issues/84820) notes that unclosed FileHandles on session JSONL lock files cause fatal crashes on Node.js ≥ 24 under heavy load.
*   **P1: Prompt Cache Degradation:** Issue [#89139](https://github.com/openclaw/openclaw/issues/89139) reveals that webchat creates a new agent run per message, destroying prompt cache hit rates (plummeting from 93% to 29%). 

## 6. Feature Requests & Roadmap Signals
User feedback is heavily pointing toward multi-agent scaling and stricter security controls:
*   **Advanced Multi-Agent Architectures:** Issue [#35203](https://github.com/openclaw/openclaw/issues/35203) proposes a comprehensive enhancement including capability profiling, a shared blackboard, layered memory boundaries, and token cost governance to prevent "rogue" multi-agent token consumption. 
*   **MCP Security Consent Envelopes:** Issue [#78308](https://github.com/openclaw/openclaw/issues/78308) requests channel-mediated approval pipelines for MCP tool calls (e.g., holding state-mutating actions like sending emails until approved via chat).
*   **Model Fallback Logic Fixes:** Users are actively requesting fixes to how fallback lists are managed ([Issue #88039](https://github.com/openclaw/openclaw/issues/88039)) and better handling of strict role alternation for Mistral models ([Issue #77336](https://github.com/openclaw/openclaw/issues/77336)).
*   *Prediction:* Given the heavy current PR activity, the upcoming stable release will almost certainly feature forced session state compaction, specialized Mac/Node 24 crash resilience, and complete migration to the latest Gemini GA models.

## 7. User Feedback Summary
Operators are expressing frustration with silent failures and the complexity of the Codex migration, but praise the rapid release cycle:
*   **Pain Points:** The Codex OAuth compaction fallback failures ([Issue #86820](https://github.com/openclaw/openclaw/issues/86820)) are causing friction, as users without explicit `OPENAI_API_KEY`s experience silent API rejections. Plugin developers ([Issue #78301](https://github.com/openclaw/openclaw/issues/78301)) are also frustrated by silent plugin loader failures that cost hours of debugging. Feishu users continue to report intermittent `replies=0` silent failures ([Issue #85692](https://github.com/openclaw/openclaw/issues/85692)).
*   **Use Cases:** Operators are heavily utilizing OpenClaw on edge hardware (Raspberry Pi 5) and leveraging it as a unified gateway across disparate platforms (Discord, QQBot, Matrix, Feishu). Power users are actively utilizing the `embedded_run` multi-agent setup but hitting latency walls ([Issue #80607](https://github.com/openclaw/openclaw/issues/80607)).

## 8. Backlog Watch
Several highly critical issues with significant impact tags are lingering without recent maintainer resolution:
*   **Session Migration Strategy:** Issue [#88838](https://github.com/openclaw/openclaw/issues/88838) asks for a branch-by-abstraction seam to safely migrate session/transcript state to SQLite, avoiding a massive high-risk rewrite. It currently needs product approval.
*   **Feishu Persistent Disconnections:** Issue [#77717](https://github.com/openclaw/openclaw/issues/77717) (P1) documents a race condition during bot identity recovery that causes permanent Feishu disconnections. Despite having a fix PR open, it is awaiting review.
*   **Subagent State Leakage:** Issue [#78055](https://github.com/openclaw/openclaw/issues/78055) (P1) notes that subagents can deliver stale output and inherit unrelated session history, posing a risk to multi-agent reliability and data boundary isolation.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by massive development velocity and an aggressive shift toward complex, multi-agent workflows. Projects are rapidly evolving from simple single-prompt chatbots into highly orchestrated, event-driven systems with durable memory, multi-channel integrations, and stateless cloud-native architectures. A universal focal point across the ecosystem is "hardening"—maintainers are prioritizing session state resilience, token cost optimization, and strict security policies (like MCP tool consent and sandboxing) to support enterprise readiness. Meanwhile, developers are strongly gravitating toward versatile, vendor-agnostic frameworks that support both local edge deployments (like Raspberry Pi) and multi-tenant cloud environments.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score & Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 974 Total | 399 Open | v2026.6.1-beta line | **High / Under Heavy Strain** |
| **NanoBot** | 28 | 28 | v0.2.1 (Released) | **High / Positive Momentum** |
| **Hermes Agent** | 50 | 50 | 0 (Accumulation phase) | **High / Scaling Pain** |
| **PicoClaw** | 7 | 11 | v0.2.9-nightly | **Healthy / Stabilizing** |
| **NanoClaw** | 3 | 5 | 0 (Bug-squashing) | **Robust / Stabilization** |
| **NullClaw** | 0 | 1 | 0 (Maintenance) | **Stable / Low Activity** |
| **IronClaw** | N/A | 46 | 0 (Reborn dev branch) | **Surging / Coordinated Sprint** |
| **LobsterAI** | 1 | 11 | 2026.6.1 (Released) | **Active / Mixed Signals** |
| **TinyClaw** | 0 | 0 | 0 (Dormant) | **Dormant** |
| **Moltis** | 0 | 4 | 0 (Heads-down dev) | **Robust / Focused Dev** |
| **CoPaw** | 50 | 34 | v1.1.10 (Released) | **Highly Active / Growing** |
| **ZeptoClaw** | 1 | 18 | 0 (Dependency sweeps) | **Robust / Defensive Eng** |
| **ZeroClaw** | 29 | 35 | 0 (Stabilization) | **Intensive Hardening** |

### 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw is the clear core reference implementation with unparalleled scale, handling nearly 1,000 issue/PR updates in a single day. It boasts the most comprehensive multi-channel support (Telegram, Discord, WhatsApp, Feishu, iMessage) and is pioneering the integration of advanced runtimes like OpenAI Codex.
*   **Technical Approach:** Unlike lightweight or specialized agents, OpenClaw is building a monolithic, highly resilient gateway architecture. It is heavily focused on deep architectural edge-case recovery (e.g., zombie process management, session write-lock races) compared to peers that are still building out basic channel adapters.
*   **Community Size:** OpenClaw’s community dwarfs others in pure volume, though this brings significant operational strain. Issues like token inflation and prompt cache degradation arise from massive enterprise/edge deployment loads that smaller projects (like NullClaw or Moltis) have yet to encounter.

### 4. Shared Technical Focus Areas
*   **Provider Compatibility & Cost Management:** Projects are scrambling to patch API changes (e.g., Anthropic dropping the `temperature` param in PicoClaw). Concurrently, minimizing token inflation is a universal priority, seen in ZeroClaw's skill compilation proposals, NanoBot's heartbeat caching, and PicoClaw's catalog optimizations.
*   **Session State & Memory Resilience:** Crashing loops from poisoned transcripts or corrupt JSONL files are a shared P1 headache. NanoBot, NanoClaw, and CoPaw are all actively refactoring how they compact, archive, and rehydrate session history.
*   **Multi-Agent Routing & Orchestration:** Moving past single-agent execution, projects like NanoClaw (A2A routing), PicoClaw (inter-agent mailboxes), CoPaw (sub-agents), and Hermes (deterministic workflows) are establishing protocols for multi-agent collaboration and delegation.
*   **MCP Security & Sandboxing:** As agents execute more autonomously, restricting tool execution has become critical. OpenClaw (MCP consent envelopes), PicoClaw (overzealous command guards), and ZeroClaw (channel tool allow-lists) highlight the shift toward strict capability sandboxing.

### 5. Differentiation Analysis
*   **UI & Ecosystem vs. Infrastructure:** LobsterAI and CoPaw are heavily focused on user-facing ecosystems (Expert Kit stores, desktop Tauri apps, Windows auto-updaters). In contrast, IronClaw and ZeroClaw differentiate by targeting backend infrastructure—focusing on stateless cloud-native orchestration, multi-tenant scaling, and WASI component models.
*   **Target Audience:** Projects like Hermes and ZeroClaw lean heavily toward enterprise deployments (AAD support, OpenTelemetry tracing, strict security). Conversely, NanoBot and NanoClaw appeal to self-hosters and hobbyists, prioritizing lightweight local deployments and personalized daily companion use cases.
*   **Architectural Edge:** ZeptoClaw stands out with a strict defensive engineering posture, enforcing CI binary size limits (7.5MB) for performance, whereas IronClaw is tackling massive architectural rewrites ("Reborn") to decouple databases from orchestration.

### 6. Community Momentum & Maturity
*   **Rapid Iterators (Momentum):** OpenClaw, CoPaw, and IronClaw are moving at breakneck speeds, shipping major architectural refactors and releases constantly. They have massive open PR backlogs driven by large contributor bases.
*   **Stabilizers (Maturing):** NanoBot, PicoClaw, ZeroClaw, and NanoClaw are in highly active but focused "hardening" phases. They are closing out major milestone releases (e.g., NanoBot's v0.2.1) by aggressively squashing bugs and refining UI/UX rather than shipping net-new features.
*   **Niche / Slower Moving (Mature or Dormant):** ZeptoClaw, Moltis, and NullClaw represent highly focused or mature projects. ZeptoClaw is undergoing rigorous CI/CD hardening, while NullClaw and TinyClaw show either minimal necessary maintenance or complete inactivity.

### 7. Trend Signals
*   **The Shift to Stateless/Cloud-Native:** Legacy local-first agents are aggressively pivoting to stateless, multi-tenant architectures. IronClaw's "Reborn" branch and ZeroClaw's fleet management indicate that the industry expects these assistants to be hosted centrally for multiple users/devices securely.
*   **Elastic, Multi-Provider Fallbacks:** Due to the instability of LLM APIs, developers can no longer rely on a single provider. Feature requests for model fallback chains (CoPaw) and dynamic capability routing (Moltis) prove that resilient agents must dynamically route to alternative LLMs during rate limits or outages.
*   **SaaSification and Monetization Friction:** As open-source tools mature into products, friction around monetization is emerging. LobsterAI's user backlash over aggressive credit wipes highlights that developers must carefully balance SaaS billing mechanisms with community trust.
*   **Observability is No Longer Optional:** The demand for deterministic agent evaluation (ZeroClaw), strict tracing (OpenTelemetry requests), and granular token tracking shows that agents are moving out of the "toy" phase. Enterprise users require SLAs and clear debugging traces to trust autonomous AI workflows.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-02

## 1. Today's Overview
NanoBot is experiencing a **highly active and healthy phase**, marked by the release of a major feature update (`v0.2.1`) and robust community engagement. In the last 24 hours, the project saw 28 issues updated (with 25 closed) and 28 pull requests updated (17 merged), indicating aggressive iteration and responsive maintainer oversight. The core focus of recent development is transforming the WebUI into a dynamic "workbench," while the community actively pushes for expanded channel support (QQ, Discord, Signal) and improved token efficiency. Overall, the project momentum is strongly positive, blending core architectural refactoring with rapid community-driven feature integrations.

## 2. Releases
- **v0.2.1**: The highlight of this release is the evolution of the WebUI into a functional "workbench." 
  - **Changes:** 84 PRs were merged, incorporating 17 new contributors. The chat interface now supports live file edits rendered as activities, and tool traces are displayed more smoothly to build user trust.
  - **Migration Notes:** Users upgrading should note the significant architectural shift towards an event-driven WebUI runtime state, which may require hard-refreshes of the browser cache to clear outdated WebSocket states.

## 3. Project Progress
Today's merged/closed PRs reflect significant advancements in architecture, cost reduction, and bug fixing:
*   **Architectural Refactoring:** PR [#4135](https://github.com/HKUDS/nanobot/pull/4135) successfully merged a refactor of the WebUI runtime state onto a new internal event bus, decoupling UI state from the core agent loop. PR [#4143](https://github.com/HKUDS/nanobot/pull/4143) introduced a typed `RetentionResult` for cleaner session archive semantics.
*   **Cost & Performance Optimization:** Long-standing efforts to optimize heartbeat token usage were finally merged (PRs [#2482](https://github.com/HKUDS/nanobot/pull/2482), [#2435](https://github.com/HKUDS/nanobot/pull/2435), [#3485](https://github.com/HKUDS/nanobot/pull/3485)), allowing the system to skip LLM calls when `HEARTBEAT.md` is empty. PR [#1376](https://github.com/HKUDS/nanobot/pull/1376) resolved backend event spam by respecting `send_progress` configs in gateway modes.
*   **Quality of Life:** Noise reduction in scheduled tasks was achieved in PR [#3126](https://github.com/HKUDS/nanobot/pull/3126), ensuring cron runs are silent until final output. 

## 4. Community Hot Topics
Community attention is currently focused on multi-platform expansion, interoperability, and API costs:
*   **Expanding Chat Platforms (QQ & Discord):** There is a massive push for broader messaging platform support. PR [#4146](https://github.com/HKUDS/nanobot/pull/4146) and previously [#3509](https://github.com/HKUDS/nanobot/pull/3509) introduce Napcat (QQ) channel support via OneBot v11. Meanwhile, Issue [#3217](https://github.com/HKUDS/nanobot/issues/3217) requests the ability for Discord bots to respond to other bots, highlighting a growing use case for multi-agent interaction.
*   **Token & API Cost Management:** Issue [#4142](https://github.com/HKUDS/nanobot/issues/4142) sparked discussion on optimizing cache-miss input tokens, specifically for the newly released DeepSeek V4 Flash/Pro models, showing the community's sharp focus on operational costs.
*   **Secure Communications:** Issue [#49](https://github.com/HKUDS/nanobot/issues/49) (👍6) remains highly active, advocating for Signal channel integration via `signal-cli`.

## 5. Bugs & Stability
Several critical bugs impacting context management and message delivery were identified and patched:
1.  **Critical - Context Duplication:** Issue [#4128](https://github.com/HKUDS/nanobot/issues/4128) reported that a logical flaw in `retain_recent_legal_suffix` caused user messages to be duplicated in both archive and active context, leading to LLM confusion. *(Fix: Addressed by PR [#4143](https://github.com/HKUDS/nanobot/pull/4143))*.
2.  **High - Silent Failures:** Issue [#4133](https://github.com/HKUDS/nanobot/issues/4133) noted that agents using Claude or DeepSeek V4 occasionally fail to deliver the final text response to Telegram after a successful tool call.
3.  **High - Tool Call XML Leakage:** Issue [#4124](https://github.com/HKUDS/nanobot/pull/4124) identified that OpenAI-compatible models (like mimo-v2.5, glm-5.1) emit tool calls as raw XML text, which then leaks directly into user chat interfaces. *(Fix: Merged in PR [#4124](https://github.com/HKUDS/nanobot/pull/4124))*.
4.  **Medium - Dream Cron Unconditional Registration:** Issue [#4069](https://github.com/HKUDS/nanobot/issues/4069) pointed out that the Dream system registers cron jobs without an explicit `enabled` flag, causing unnecessary background tasks. 

## 6. Feature Requests & Roadmap Signals
Recent PRs and Issues suggest the next iteration of NanoBot will heavily focus on **voice/video modality, cloud deployments, and enterprise security**:
*   **Voice & Local ASR:** PR [#3723](https://github.com/HKUDS/nanobot/pull/3723) (Local Whisper) and PR [#4122](https://github.com/HKUDS/nanobot/pull/4122) (WebUI recording + FunASR) indicate a major roadmap signal towards native voice interaction. 
*   **Cloud-Native Deployments:** PR [#4139](https://github.com/HKUDS/nanobot/pull/4139) proposes a dedicated deployment layer for HuggingFace Spaces and ModelScope, lowering the barrier for cloud hosting.
*   **Enterprise Authentication:** PR [#4126](https://github.com/HKUDS/nanobot/pull/4126) adds Azure Active Directory (AAD) support for the Azure OpenAI provider, signaling a push for enterprise-grade security.
*   **Modular Tooling:** PR [#4138](https://github.com/HKUDS/nanobot/pull/4138) aims to allow toggling of built-in filesystem tools, showing a trend toward strict sandboxing and MCP-first architectures.

## 7. User Feedback Summary
**Pain Points:** 
*   Users are frustrated by **noise in IM channels** (specifically Telegram), particularly heartbeat status updates and cron "thinking" messages (Issues [#2126](https://github.com/HKUDS/nanobot/issues/2126), [#3064](https://github.com/HKUDS/nanobot/issues/3064)). 
*   **MCP Server stability** is a recurring theme; users want automatic reconnection logic rather than manual restarts (Issue [#1536](https://github.com/HKUDS/nanobot/issues/1536), 👍3).
*   **Agent state visibility** is lacking; users cannot easily tell if the bot is busy or stuck without access to the terminal (Issue [#2131](https://github.com/HKUDS/nanobot/issues/2131)).

**Satisfaction & Use Cases:** 
*   The release of the WebUI workbench in `v0.2.1` has been well-received, addressing previous complaints about UI responsiveness.
*   The community is highly engaged in extending NanoBot as a **personalized daily companion**, evidenced by detailed configurations for heartbeats (Issue [#3028](https://github.com/HKUDS/nanobot/issues/3028)) and requests for skills to be toggleable rather than strictly deleted (Issue [#1932](https://github.com/HKUDS/nanobot/issues/1932)).

## 8. Backlog Watch
*   **Dynamic Tool Loading:** Issue [#118](https://github.com/HKUDS/nanobot/issues/118) remains open and is crucial for allowing the agent to dynamically register tools based on context, a necessity for scalable context-window management.
*   **Multi-channel Chat IDs:** Issue [#115](https://github.com/HKUDS/nanobot/issues/115) highlights persistent documentation errors regarding WhatsApp chat IDs, which creates friction for new users setting up IM channels.
*   **Provider Config Standardization:** PR [#3994](https://github.com/HKUDS/nanobot/pull/3994) (open since May 25) aims to add registry-driven provider config fields for the WebUI. This is a vital refactor for handling the explosion of new LLM providers and needs maintainer review to move forward.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-02

## 1. Today's Overview
Hermes Agent is experiencing a highly active and vibrant development cycle, demonstrated by 50 issues and 50 pull requests updated in the last 24 hours. The open-source community is aggressively expanding the agent's platform adapters, tool integrations, and enterprise readiness. While the high volume of open PRs (44) indicates strong contributor momentum, the presence of several high-severity gateway and stability bugs highlights growing pains as the project scales. Overall, project health is robust, characterized by rapid feature iteration and tight community feedback loops.

## 2. Releases
There have been **0 new releases** today. The project appears to be in an active accumulation phase, potentially building up for a minor or patch version bump to address critical bugs discovered in the current `v0.15.1` build.

## 3. Project Progress
Although only 6 PRs were merged/closed today, the open PR pipeline is packed with substantial architectural advancements and crucial bug fixes currently undergoing review:
*   **Platform & Admin Expansion:** The WebUI dashboard is getting a massive upgrade with a complete admin panel for MCP catalog management, webhooks, and system stats ([PR #36736](https://github.com/NousResearch/hermes-agent/pull/36736)). 
*   **Security & Safety:** API key exposure is being patched to ensure `hermes status --all` strictly redacts provider keys ([PR #37050](https://github.com/NousResearch/hermes-agent/pull/37050)).
*   **Infrastructure Enhancements:** The Daytona terminal backend configuration is vastly expanded to support GPU, network, and resource controls ([PR #34049](https://github.com/NousResearch/hermes-agent/pull/34049)). 

## 4. Community Hot Topics
The community is highly engaged in shaping the future of Hermes's search, memory, and orchestration capabilities, as reflected in the most active discussions:
*   **Self-Hosted Search Alternatives:** There is a massive push for accessible, cost-effective search backends. [Issue #5941](https://github.com/NousResearch/hermes-agent/issues/5941) (SearXNG integration, 30 👍) and [Issue #10644](https://github.com/NousResearch/hermes-agent/issues/10644) (Brave Search, 23 👍) dominate the conversation. Users want to avoid premium API costs while maintaining robust web tooling.
*   **Multi-Agent Orchestration:** [Issue #5143](https://github.com/NousResearch/hermes-agent/issues/5143) (Multi-Role Auto-Routing, 14 👍) and [Issue #5354](https://github.com/NousResearch/hermes-agent/issues/5354) (Deterministic Workflows, 8 👍) show that power users are pushing Hermes toward complex, multi-agent enterprise setups.
*   **Configuration Anxiety:** [Issue #10149](https://github.com/NousResearch/hermes-agent/issues/10149) ("No auxiliary LLM provider configured", 16 👍) indicates users are struggling with `.env` setups and provider initialization, pointing to a need for smoother onboarding.

## 5. Bugs & Stability
Several high-severity bugs affecting long-running gateway instances have been reported today, primarily related to resource exhaustion and platform edge cases:
*   **P1 - Cron Subsystem Crash:** A malformed `jobs.json` causes an unhandled `AttributeError`, completely disabling all cron tasks ([Issue #36867](https://github.com/NousResearch/hermes-agent/issues/36867)).
*   **High Severity - Gateway Resource Leaks:** File descriptors are leaking in platform reconnect loops ([Issue #37011](https://github.com/NousResearch/hermes-agent/issues/37011)), and `s6-log` lock collisions are causing infinite crash loops in Docker setups ([Issue #34457](https://github.com/NousResearch/hermes-agent/issues/34457)). 
*   **P2 - macOS Open Files Limit:** The generated `plist` for macOS launchd lacks `NumberOfFiles` limits, causing gateway crashes ([Issue #36899](https://github.com/NousResearch/hermes-agent/issues/36899)).
*   **Platform Bugs:** Discord non-image attachments break the input pipeline ([Issue #29711](https://github.com/NousResearch/hermes-agent/issues/29711)), and the API server fails to expose model reasoning blocks to connected UIs ([Issue #37044](https://github.com/NousResearch/hermes-agent/issues/37044)). 
*   *Note:* Fix PRs are already active for many of these, such as [PR #21847](https://github.com/NousResearch/hermes-agent/pull/21847) addressing reasoning quirks and [PR #32230](https://github.com/NousResearch/hermes-agent/pull/32230) fixing DNS resolution in sandbox environments.

## 6. Feature Requests & Roadmap Signals
Today's feature requests point heavily toward enterprise readiness, governance, and multi-modal capabilities:
*   **Infrastructure & Governance:** Users are requesting per-channel slash-command allowlists for restricted access ([Issue #37004](https://github.com/NousResearch/hermes-agent/issues/37004)), deterministic workflow engines ([Issue #5354](https://github.com/NousResearch/hermes-agent/issues/5354)), and better Kanban multi-agent orchestration reliability ([Issue #35986](https://github.com/NousResearch/hermes-agent/issues/35986)).
*   **Hardware & Cloud Integrations:** Native Google Cloud Vertex AI support is highly requested ([Issue #13484](https://github.com/NousResearch/hermes-agent/issues/13484)), alongside an RFC for a multi-profile shared memory store ([Issue #31388](https://github.com/NousResearch/hermes-agent/issues/31388)).
*   *Roadmap Prediction:* Given the immediate community needs and pending PRs, the next minor release will likely focus on **search provider diversification** (SearXNG/Brave) and **gateway stability/resource leak patching**.

## 7. User Feedback Summary
Users are enthusiastic about the depth of Hermes's capabilities but express frustration with operational stability during long uptimes. Real user pain points center around the friction of integrating external API keys, containerized deployment reliability (specifically shared volumes and sidecars), and safely interrupting the agent during complex tool-call chains. Conversely, community satisfaction is high regarding the project's transparency and responsiveness; maintainers are actively merging community PRs for new platforms like Nostr and SimpleX, indicating a healthy, collaborative ecosystem.

## 8. Backlog Watch
Several high-impact issues and PRs require urgent core-maintainer attention to prevent them from stalling:
*   **Stale Integrations:** The MongoDB Memory Provider ([Issue #5495](https://github.com/NousResearch/hermes-agent/issues/5495)) and Multilingual Memory Extraction RFC ([Issue #9135](https://github.com/NousResearch/hermes-agent/issues/9135)) have been open since April 2026 with no definitive maintainer stance.
*   **In-Flight Critical PRs:** The Human-in-the-Loop (HITL) autonomous improvement harness ([PR #37042](https://github.com/NousResearch/hermes-agent/pull/37042)) is a massive architectural addition that needs thorough review. 
*   **Persistent Platform Bugs:** The WhatsApp `/sethome` persistence bug ([Issue #9220](https://github.com/NousResearch/hermes-agent/issues/9220)) remains unresolved, impacting basic user experience on the platform.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-06-02

## 1. Today's Overview
PicoClaw is demonstrating highly active development as it gears up for the `v0.2.9` stable release, evidenced by a fresh nightly build and robust community engagement. The project recorded 7 active issues and 11 pull requests updated within the last 24 hours. Maintainers and contributors are heavily focused on patching provider compatibility bugs—specifically adapting to rapidly evolving model APIs from Anthropic and AWS Bedrock. The merge of performance enhancements and critical bug fixes today indicates a healthy, iterative stabilization phase.

## 2. Releases
*   **nightly: v0.2.9-nightly.20260601.ba806592**
    *   **Summary:** An automated nightly build incorporating the latest main branch commits.
    *   **Notes:** Marked as potentially unstable. This build serves as the release candidate pipeline for the upcoming `v0.2.9` stable release.
    *   **Full Changelog**: [`v0.2.9...main`](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress
Today saw 5 pull requests merged/closed, signaling steady progress in feature enrichment and platform stability:
*   **Provider Compatibility Fixes:** PR [#2982](https://github.com/sipeed/picoclaw/pull/2982) resolved a critical failure with AWS Bedrock by dropping the deprecated `temperature` parameter for Claude Opus 4.8.
*   **Agent Capabilities:** PR [#2977](https://github.com/sipeed/picoclaw/pull/2977) expanded the internal `cron` tool by adding `get` and `update` actions, preventing destructive rescheduling flows for agents.
*   **Performance Optimization:** PR [#2781](https://github.com/sipeed/picoclaw/pull/2781) was merged to reduce skill catalog token usage on intermediate tool-call round-trips, significantly saving token costs for providers without prompt caching.
*   **Platform-specific Fixes:** PR [#2890](https://github.com/sipeed/picoclaw/pull/2890) resolved macOS path validation failures caused by `/var` to `/private/var` symlink inconsistencies.

## 4. Community Hot Topics
*   **Overzealous Command Safety Guard:** Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042) (👍 2, 15 comments) continues to be a highly debated topic. Users are frustrated that the `exec` tool's `guardCommand` incorrectly interprets URL parameters (like `curl -s "wttr.in/Beijing?T"`) as malicious relative paths. This highlights a strong user need for a more intelligent, regex-aware sandboxing mechanism that doesn't block routine API fetching.
*   **RISC-V Architecture Support:** Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887) (8 comments) reports that the `.deb` build for RISC-V boards fails when using OpenAI models, pointing to underlying cross-compilation or dependency issues in the build chain.

## 5. Bugs & Stability
Reported bugs currently center heavily around the integration of newer LLM models and core system loops:
1.  **[High] Anthropic API Rejections (Default Config):** Issue [#2941](https://github.com/sipeed/picoclaw/issues/2941) notes fresh installs seed `claude-sonnet-4.6` with dots instead of hyphens, resulting in instant 404 errors. *Fix available in open PR [#2942](https://github.com/sipeed/picoclaw/pull/2942).*
2.  **[High] Anthropic API Rejections (Temperature):** Issue [#2939](https://github.com/sipeed/picoclaw/issues/2939) reveals `claude-opus-4-7` fails with HTTP 400 because PicoClaw sends the deprecated `temperature` parameter. *Fix available in open PR [#2940](https://github.com/sipeed/picoclaw/pull/2940).*
3.  **[High] Singleton PID Crash Loop:** Issue [#2720](https://github.com/sipeed/picoclaw/issues/2720) reports that the gateway crashes if a previous PID file is reused by an unrelated system process (e.g., `systemd-resolved`). *Fix available in open PR [#2813](https://github.com/sipeed/picoclaw/pull/2813).*
4.  **[Medium] Empty LLM Responses:** Open PR [#2983](https://github.com/sipeed/picoclaw/pull/2983) was submitted today to address a gap where HTTP 200 responses with empty content crashed the agent loop.

## 6. Feature Requests & Roadmap Signals
*   **Agent Collaboration Bus:** Open PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) introduces a major architectural shift: internal durable inter-agent communication with per-agent mailboxes and isolated session histories. This strongly signals PicoClaw is moving towards complex, multi-agent autonomous workflows.
*   **New Provider Support:** PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) introduces **NEAR AI Cloud** as a native provider, indicating an expansion into TEE (Trusted Execution Environment) capable models.
*   **Documentation Update:** Issue [#2981](https://github.com/sipeed/picoclaw/issues/2981) requests an overhaul of the instruction manual, further confirming that the feature freeze for `v0.2.9` is imminent.

## 7. User Feedback Summary
Users operating on the bleeding edge of AI models are experiencing friction. As providers like Anthropic and OpenAI update their APIs (deprecating parameters like `temperature` or changing model ID naming conventions), PicoClaw users are bearing the brunt of HTTP 400/404 errors. Additionally, the UI/UX for historical message compression (Issue [#2796](https://github.com/sipeed/picoclaw/issues/2796)) is causing user dissatisfaction, as the system hides prior user messages in multi-turn chats to save tokens, confusing end-users. 

## 8. Backlog Watch
*   **Issue #1042** ([`sipeed/picoclaw Issue #1042`](https://github.com/sipeed/picoclaw/issues/1042)): Open since March 2026, the `exec` tool's false positive on path validation remains a significant pain point for users utilizing shell commands. It requires prioritization and architectural tweaking of the safety guard.
*   **PRs #2940 & #2942**: Both PRs submitted by the community to fix the Anthropic model ID and `temperature` issues are currently marked as `[stale]`. Given that these cause immediate breakages for new users on the default configuration, maintainer review and merge are highly recommended.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the NanoClaw project digest for 2026-06-02, based on the provided repository data:

### 1. Today's Overview
NanoClaw is currently experiencing highly active development, particularly focused on hardening its agent execution environment and container infrastructure. In the last 24 hours, the repository saw a significant spike in activity with 5 updated pull requests (4 open, 1 closed) and 3 active issues (2 open, 1 closed). The community and maintainers are heavily prioritizing agent resilience, specifically addressing crash loops, tool timeout bottlenecks, and container permission compatibility. Overall project health appears robust but is currently in a necessary "bug-squashing and stabilization" phase to ensure reliable long-running agent sessions. 

### 2. Releases
No new releases were recorded in the last 24 hours. The current development cycle remains focused on merging foundational bug fixes and infrastructure updates. 

### 3. Project Progress
Progress today was defined by closing one PR and opening several critical architectural fixes:
*   **Closed:** PR [#2664](https://github.com/nanocoai/nanoclaw/pull/2664) (run browser scraping sidecar in v2 container) was merged/closed, advancing the project's web scraping and browser automation capabilities within the updated container environment.
*   **Open/In Progress:** PR [#2670](https://github.com/nanocoai/nanoclaw/pull/2670) introduces self-healing mechanisms for poisoned transcript resumes. 
*   **Open/In Progress:** PR [#2667](https://github.com/nanocoai/nanoclaw/pull/2667) adds crucial support for rootless Podman and root container users, expanding deployment flexibility. 
*   **Open/In Progress:** PR [#2666](https://github.com/nanocoai/nanoclaw/pull/2666) is pending (dependent on #2667) to bring better provider failure recovery, replay, and fallback mechanisms.

### 4. Community Hot Topics
The most actively tracked item is an older but critical bug regarding multi-agent routing:
*   **Issue [#2331](https://github.com/nanocoai/nanoclaw/issues/2331)** (A2A routing bug): Updated yesterday, this high-priority bug reveals an underlying architectural need for better session state management. Because the system relies on a simple recency sort (`ORDER BY created_at DESC`) to route Agent-to-Agent replies, it misroutes messages in active multi-channel groups. This indicates that users are heavily utilizing NanoClaw for complex, multi-agent collaborative workflows, and the current database querying logic for session management needs refactoring to account for channel contexts.

### 5. Bugs & Stability
Today's bug reports highlight fragility in long-running agent loops and tool execution, ranked by severity:
1.  **High: Hung MCP Tool Blocking (Issue [#2668](https://github.com/nanocoai/nanoclaw/issues/2668)):** A synchronous tool call emits no stream events, preventing heartbeat updates and blocking the session for up to 30 minutes before a cold kill. *No fix PR is currently listed for this.*
2.  **High: Infinite Crash Loops on Resume (Issue [#2669](https://github.com/nanocoai/nanoclaw/issues/2669)):** Corrupt resumed transcripts cause infinite crash loops because the SDK surfaces 400 errors as result events rather than throws, bypassing existing error handling. *Fix PR exists: [#2670](https://github.com/nanocoai/nanoclaw/pull/2670).*
3.  **Medium: Silent Command Drops (Issue addressed by PR [#2346](https://github.com/nanocoai/nanoclaw/pull/2346)):** Unknown slash commands were categorized as `passthrough`, causing the Agent SDK to silently drop responses. *Fix PR exists: [#2346](https://github.com/nanocoai/nanoclaw/pull/2346).*

### 6. Feature Requests & Roadmap Signals
While there are no explicit "feature requests" filed today, the ongoing PRs strongly signal the project's near-term roadmap:
*   **Enhanced Infrastructure Resilience:** The pending merge of [#2666](https://github.com/nanocoai/nanoclaw/pull/2666) (rollback, replay, friendly fallback) indicates the next version will feature much more graceful degradation and recovery when LLM providers experience API failures.
*   **Broader Container Orchestration Support:** PR [#2667](https://github.com/nanocoai/nanoclaw/pull/2667) shows a commitment to supporting rootless Podman and LXC environments, moving beyond standard Docker setups. 
*   **Per-Tool Timeouts:** The team will likely need to implement an asynchronous execution model or timeout wrapper for MCP tools to resolve Issue [#2668](https://github.com/nanocoai/nanoclaw/issues/2668).

### 7. User Feedback Summary
User pain points are heavily concentrated on **runtime reliability and background execution**. 
*   **Pain Point 1: Unrecoverable States:** Users (e.g., ddaniels) are frustrated when agents get permanently stuck in crash loops due to unhandled edge cases in the Claude Agent SDK. 
*   **Pain Point 2: Lack of Execution Control:** The inability to timeout a hanging tool (Issue #2668) means users lose 30 minutes of compute time per agent session, indicating a strong need for granular, per-tool execution controls.
*   **Use Cases:** The issues confirm that users are deploying NanoClaw in persistent, automated loops using containerized environments (Docker/Podman) rather than just interactive, synchronous chats.

### 8. Backlog Watch
Maintainers should direct their attention to the following critical items requiring review and merge:
*   **PR [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) (Open since May 8):** This slash-command fix has been sitting in the backlog for nearly a month. It requires maintainer review, as the silent dropping of inputs degrades the user chat experience.
*   **Issue [#2331](https://github.com/nanocoai/nanoclaw/issues/2331) (High Priority, Open since May 7):** The A2A (Agent-to-Agent) session routing bug is causing incorrect message delivery in multi-channel setups. This requires an urgent schema or logic update to `src/db/sessions.ts` to route replies based on channel ID rather than just agent group recency.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-06-02

## 1. Today's Overview
NullClaw experienced a low-activity day with zero new releases, no newly opened issues, and zero merged pull requests. The only observed activity is a single open pull request addressing a Telegram bot user experience issue. While the overall commit and integration velocity is currently paused, the open PR indicates active development is ongoing in the background, specifically focused on refining real-time user interactions on messaging platforms. The project remains in a stable maintenance and development phase.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
Although no PRs were merged today, project progress is evident through an active open pull request:
*   **[PR #943](https://github.com/nullclaw/nullclaw/pull/943) `fix(telegram): show typing indicator during callback-query processing`**: Opened by `raskevichai`, this PR directly addresses an issue where the bot would appear unresponsive (no typing indicator) while processing inline button clicks (`nc_choices` / `callback_query`). Implementing this fix is a crucial step forward in improving the perceived responsiveness and UX of the Telegram integration.

## 4. Community Hot Topics
Activity in the community discussion boards is quiet today. The most notable item is the aforementioned PR #943, which highlights a shared understanding among contributors regarding message broker latency. The author notes that agent model calls can take between 5–30 seconds, indicating that the community is highly focused on mitigating AI latency to ensure smooth conversational experiences. There are no highly commented or highly reacted issues today.

## 5. Bugs & Stability
*   **Severity: Medium (UX/Perceived Lag)**
    *   **Bug:** Telegram bot fails to display a "typing..." indicator when processing inline keyboard callback queries.
    *   **Impact:** Users experience complete radio silence for up to 30 seconds after making a choice, leading to potential confusion or duplicate inputs.
    *   **Status:** A fix is currently open and awaiting review/marking readiness in [PR #943](https://github.com/nullclaw/nullclaw/pull/943), which closes linked issue `#942`.

## 6. Feature Requests & Roadmap Signals
No explicit new feature requests were logged by users today. However, the active development on Telegram callback processing strongly signals that the current roadmap is heavily weighted toward **Frontend/Messaging UX polish**. Future versions will likely continue to refine platform-specific integrations, specifically focusing on bridging the gap between slow LLM inference times and the expectation of immediate, snappy UI responses on platforms like Telegram.

## 7. User Feedback Summary
There is no direct user feedback, bug reporting, or commentary from the broader community today (0 issues, 0 comments on the open PR). Extrapolating from the open PR, the primary underlying user pain point remains the wait times associated with AI model processing. When personal AI assistants fail to acknowledge user input visually during these wait times, it severely degrades the user experience. Fixing this is clearly a priority to improve end-user satisfaction.

## 8. Backlog Watch
There are no visible long-unanswered issues or PRs updated in the last 24 hours. 
*   **Action Item:** Maintainers should review and test [PR #943](https://github.com/nullclaw/nullclaw/pull/943) to ensure it successfully resolves the typing indicator delay without causing rate-limiting or state-management issues in the Telegram bot pipeline.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-02

## 1. Today's Overview
Project IronClaw is experiencing a period of exceptionally high development velocity, primarily driven by the core team's ongoing efforts to mature the "Reborn" architecture. The project saw a massive throughput of **46 pull requests updated in the last 24 hours**, with an impressive 33 of those being merged or closed. This indicates a highly coordinated sprint focused on fleshing out cloud-native capabilities, stateless agent models, and multi-platform integrations. While feature development is surging, there are emerging signals from the community regarding scalability limits in the new V2 engine and a desire for clearer roadmaps regarding the Reborn transition.

## 2. Releases
**No new official releases** were published today. However, it is worth noting that the merged pull requests include highly significant milestones—such as DB migrations ([PR #4293](https://github.com/nearai/ironclaw/pull/4293)) and core trigger/orchestration loops—suggesting that these changes are actively being staged for an upcoming major version bump or release candidate.

## 3. Project Progress
Today's merged PRs reveal a focused push to complete the "Reborn" infrastructure and expand third-party integrations:
*   **Scheduled Triggers & Orchestration:** The core trigger poller loop was implemented ([PR #4301](https://github.com/nearai/ironclaw/pull/4301)), alongside trigger materialization turn-state seams ([PR #4292](https://github.com/nearai/ironclaw/pull/4292)) and outbound product orchestration ([PR #4277](https://github.com/nearai/ironclaw/pull/4277)).
*   **Identity & OAuth Integrations:** Core progress was made on surfacing activated GSuite capabilities ([PR #4293](https://github.com/nearai/ironclaw/pull/4293)) and wiring a shared host-mediated OAuth provider for Notion and Google ([PR #4300](https://github.com/nearai/ironclaw/pull/4300)). 
*   **Platform & Channel Integrations:** Major ports for GitHub capabilities were finalized ([PR #4280](https://github.com/nearai/ironclaw/pull/4280)), and the built-in `minimax` provider saw an upgrade to the M3 model ([PR #4298](https://github.com/nearai/ironclaw/pull/4298), open).
*   **Reborn Cost Management:** A comprehensive follow-up regarding Reborn cost-based budgets and provider token tracking was merged ([PR #3899](https://github.com/nearai/ironclaw/pull/3899)).
*   **Bug Fixes:** Fixed an issue where the WebUI incorrectly returned to a processing state after a gate resolution was cancelled/denied ([PR #4295](https://github.com/nearai/ironclaw/pull/4295)), and resolved a frontend transition bug for manual token submission ([PR #4291](https://github.com/nearai/ironclaw/pull/4291)).

## 4. Community Hot Topics
The most actively discussed item today was the closed issue **[EventStreamManager for durable projection fanout](https://github.com/nearai/ironclaw/issues/3281)** (6 comments), highlighting that durable, replayable event streams are a critical dependency for users building robust, stateless applications on IronClaw.

In the open-source ecosystem, community contributors are actively driving the expansion of chat platform support:
*   **Slack Integration:** Regular contributor `danielwpz` opened a major PR adding Reborn Events API host ingress ([PR #4272](https://github.com/nearai/ironclaw/pull/4272)), addressing a long-standing request for native Slack interoperability.
*   **Feishu/Lark Integration:** Core contributor `hanakannzashi` introduced host-managed Feishu websocket event intake ([PR #4178](https://github.com/nearai/ironclaw/pull/4178)), signaling strong demand for enterprise IM channel diversity.

## 5. Bugs & Stability
*   **Nightly E2E Failure:** Automated CI reported a **Nightly E2E scheduled run failure** ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)). This represents a high-priority stability signal that the maintainers will need to triage to ensure the `reborn-integration` branch remains stable for downstream users.
*   **Performance Regression (Unbounded Context):** A user flagged a potential architectural bug where `ENGINE_V2` stores conversation history as a single unbounded JSON object, risking context window exhaustion and degraded performance in long-running sessions ([Issue #4278](https://github.com/nearai/ironclaw/issues/4278)). 
*   **Startup Hard-Failure Fix:** A low-severity but impactful bug was fixed today where updating the binary with changed first-party extension manifests caused a hard failure on startup; the system now gracefully migrates manifest hashes on startup ([PR #4299](https://github.com/nearai/ironclaw/pull/4299)).

## 6. Feature Requests & Roadmap Signals
The community is highly engaged with the architectural shift in the Reborn branch:
*   **Roadmap Clarity:** A user explicitly requested a published roadmap for the `reborn` branch, specifically regarding cloud-native, multi-tenant scaling ([Issue #4279](https://github.com/nearai/ironclaw/issues/4279)). This indicates that enterprise users are actively planning their migration to the new stateless agent model.
*   **Web UI Authentication:** A formal request was made to integrate Google/GitHub OAuth login into the WebUI ([Issue #4287](https://github.com/nearai/ironclaw/issues/4287)). *Note: The core team appears to have already anticipated this, as [PR #4294](https://github.com/nearai/ironclaw/pull/4294) is actively addressing it.*
*   **Code Maintainability:** Internal/external developers are calling for modularization, specifically splitting the `TriggerPollerWorker` out of a massive 2500-line monolithic file into focused modules ([Issue #4303](https://github.com/nearai/ironclaw/issues/4303)).

## 7. User Feedback Summary
Overall, the sentiment from advanced users and contributors is one of cautious optimism. Users like `liaoqianchuan` (authors of Issues #4279 and #4278) praise the shift toward a "stateless agent model and cloud-native deployment" but are encountering friction with documentation gaps and lack of visibility into scaling limits. The engagement from external contributors (e.g., `octo-patch` with MiniMax models, `danielwpz` with Slack) shows a healthy, active open-source ecosystem extending the assistant's channel and model capabilities.

## 8. Backlog Watch
*   **Nightly E2E Failure ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)):** Reported by `github-actions[bot]` a week ago and updated yesterday. This failed CI run needs maintainer attention to prevent regressions in the `v2-engine`.
*   **ENGINE_V2 Context Exhaustion ([Issue #4278](https://github.com/nearai/ironclaw/issues/4278)):** A deeply technical scalability issue that could affect power users. It requires architectural input from the core team regarding memory document storage.
*   **Crate Documentation Reconciliation ([PR #4302](https://github.com/nearai/ironclaw/pull/4302)):** Opened by contributor `thisisjoshford`, this docs-only PR attempts to align `AGENTS.md` maps with the current codebase. As an XS/low-risk change, it is an excellent candidate for rapid core-team review to lower the barrier to entry for new contributors.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the daily project digest for LobsterAI.

# LobsterAI Project Digest: 2026-06-02

## 1. Today's Overview
LobsterAI is currently experiencing a massive spike in development momentum, characterized by the release of version 2026.6.1 and the merging of 11 pull requests in the last 24 hours. The core development team is heavily focused on expanding the platform's "Expert Kit" ecosystem, improving conversation management capabilities, and refining the user interface for installed skills. Meanwhile, community engagement is showing mixed signals: while the codebase is highly active, the community flagged a significant billing/token issue that could impact user trust if not addressed promptly.

## 2. Releases
- **LobsterAI 2026.6.1** (Released: 2026-06-01)
  - **Changes**: This version transitions the recent `2026.5.28` release branch into a formal release tag. It features the new **Expert Kit Store** and conversation integration, allowing users to seamlessly discover, install, and interact with specialized AI skill sets. It also introduces plugin update checks for NPM/Clawhub sources and includes various stability fixes for MCP (Model Context Protocol) components.
  - **Migration Notes**: No critical breaking changes noted, but developers and enterprise users should be aware of the UI shifts regarding how Kits and skills are localized and managed in the Redux state.

## 3. Project Progress
The engineering team merged a staggering 11 PRs today, showcasing rapid iteration:
- **Expert Kits & Skill Localization**: Significant UI/UX improvements were merged for the Kit market ([PR #2088](https://github.com/netease-youdao/LobsterAI/pull/2088), [PR #2087](https://github.com/netease-youdao/LobsterAI/pull/2087)). Furthermore, [PR #2083](https://github.com/netease-youdao/LobsterAI/pull/2083) introduced localized descriptions for installed skills, and [PR #2084](https://github.com/netease-youdao/LobsterAI/pull/2084) added a necessary confirmation modal before kit uninstallation to prevent accidental data loss.
- **Cowork & Conversation Management**: [PR #2085](https://github.com/netease-youdao/LobsterAI/pull/2085) introduced local conversation forking, allowing users to branch their chats from specific assistant messages while preserving compacted context.
- **Model & System Updates**: [PR #2089](https://github.com/netease-youdao/LobsterAI/pull/2089) updated default context windows for MiniMax m3 and BYOK (Bring Your Own Key) models.
- **Bug Fixes**: Addressed an annoying WeChat bug during updates/reinstalls ([PR #2086](https://github.com/netease-youdao/LobsterAI/pull/2086)) and improved error handling for missing local files in Artifacts ([PR #2073](https://github.com/netease-youdao/LobsterAI/pull/2073)).

## 4. Community Hot Topics
- **Token Expiration Frustration**: The only newly opened issue today was [Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081). A user expressed extreme dissatisfaction ("来搞笑的吧???") regarding their unused 5,500 credits being wiped clean at the end of the month without prior consumption. 
  - *Underlying Needs*: This highlights a major pain point regarding billing transparency, credit rollover policies, and notification systems for tiered SaaS subscriptions. Users expect a grace period or warning before hard resets of paid allocations.

## 5. Bugs & Stability
- **High Priority - Credit System/Clearing Logic**: As seen in [Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081), the automated credit clearing mechanism is causing user churn. No fix PR has been submitted yet.
- **Medium Priority - File Handling**: Addressed today in [PR #2073](https://github.com/netease-youdao/LobsterAI/pull/2073), missing local files linked to Artifacts were causing unhandled crashes. The fix now gracefully reports a clear toast message when a file is moved or deleted, hardening the Windows and macOS file-path handling.
- **Low Priority - Installer Edge Case**: A WeChat integration bug triggering during app updates/reinstalls was successfully patched in [PR #2086](https://github.com/netease-youdao/LobsterAI/pull/2086).

## 6. Feature Requests & Roadmap Signals
Based on today's merged code, the short-term roadmap is clearly prioritizing:
- **Modular Agent Ecosystems**: The rollout of the "Expert Kit Store" points to a future where users can buy, share, or download highly specialized prompt/tool sets (similar to custom GPTs).
- **Plugin Ecosystem Modernization**: [PR #2069](https://github.com/netease-youdao/LobsterAI/pull/2069) (part of the release) introduces update checks for NPM/Clawhub, indicating a push towards keeping third-party community plugins securely auto-updated.
- *Prediction*: The next versions will likely focus on backend support for *syncing* these Kits across devices and introducing premium/verified Kits in the marketplace.

## 7. User Feedback Summary
User feedback today reflects a highly functional product overshadowed by strict monetization mechanics:
- **Pain Points**: Rigid billing policies (instant deletion of unused credits). Users feel penalized for their purchasing behavior.
- **Satisfaction**: From a purely technical standpoint, the developers are actively polishing the software. The addition of conversation forking ([PR #2085](https://github.com/netease-youdao/LobsterAI/pull/2085)) shows that the team listens to power users who need better ways to manage complex, branching AI dialogues.

## 8. Backlog Watch
- **Long-unanswered PR**: [PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464) (Originally opened on 2026-04-04). This PR aims to add duplicate validation for instance names and credential IDs across IM integrations (DingTalk, Feishu, QQ). 
  - *Action Needed*: It has been marked as `[stale]` and bumped today, but remains open. Maintainers should review and merge this, as multiple IM instances without duplicate checking could easily lead to severe message duplication or routing conflicts for enterprise users.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-06-02

## 1. Today's Overview
Moltis demonstrates steady, active development momentum today, driven entirely by pull request activity rather than issue tracking. Over the past 24 hours, contributors merged three significant pull requests and opened one new one, indicating a focused engineering effort on provider architecture, AI model compatibility, and memory management. The absence of new issues or releases suggests the project is currently in a heads-down development phase, likely building toward a future milestone. Overall, project health remains robust with active, iterative code improvements being merged daily.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
Significant forward progress was made today, specifically regarding provider flexibility, AI model integration, and system stability:
*   **Provider Architecture Refactor:** [PR #1090](https://github.com/moltis-org/moltis/pull/1090) (Closed/Merged) overhauled how Moltis handles OpenAI-compatible providers. It replaced unreliable URL/name checks with explicit capability policies and added regression tests, making custom provider integrations more stable and predictable.
*   **New Cloud Integration:** [PR #1031](https://github.com/moltis-org/moltis/pull/1031) (Closed/Merged), authored by community contributor `PierreLeGuen`, successfully introduced the NEAR AI Cloud as a native, OpenAI-compatible provider. This included full integration with TEE (Trusted Execution Environment) recommendations and public model catalog discovery.
*   **Codex Streaming Fix:** [PR #1088](https://github.com/moltis-org/moltis/pull/1088) (Closed/Merged) resolved an issue with OpenAI Codex integrations by properly handling final tool-call arguments and synthesizing streaming argument deltas.
*   **Session History Management:** [PR #1089](https://github.com/moltis-org/moltis/pull/1089) (Open) was opened by `s-salamatov` to cap persisted `tool` and `tool_result` content during session rehydration, which applies broadly across chat, streaming, and compaction flows.

## 4. Community Hot Topics
There are no highly active discussions (measured by comments or upvotes) within today's tracked items, as all updated PRs currently show `undefined` comments and `0` reactions. However, the underlying needs of the community are clearly reflected in the code contributions. 
*   **Analysis of Needs:** The community (including external contributor `PierreLeGuen`) is heavily focused on expanding Moltis's compatibility with diverse AI clouds (like NEAR AI) and ensuring strict, reliable capability routing (as seen in [PR #1090](https://github.com/moltis-org/moltis/pull/1090)). Users and developers are pushing for a more standardized, agnostic provider ecosystem.

## 5. Bugs & Stability
*   **Severity: Medium** - **OpenAI Codex Tool Calling:** A subtle bug regarding missing tool-call arguments in the OpenAI Codex provider was identified and fixed. Without this fix, missing argument deltas could cause decoding errors during streaming. Fixed by [PR #1088](https://github.com/moltis-org/moltis/pull/1088).
*   **Severity: Medium** - **Memory/Session Rehydration Bloat:** A potential system stability issue regarding excessively large persisted tool results was addressed today. [PR #1089](https://github.com/moltis-org/moltis/pull/1089) is currently open and actively implementing caps on this data to prevent memory bloat during session rehydration and prompt compaction. 

## 6. Feature Requests & Roadmap Signals
While no formal feature requests were posted in the Issues tracker today, the merged code provides clear roadmap signals:
*   **Broader Cloud/TEE Support:** The merging of the NEAR AI Cloud provider ([PR #1031](https://github.com/moltis-org/moltis/pull/1031)) signals that the project is actively expanding its horizon into Web3/TEE-aware AI infrastructures.
*   **Strict Capability Policies:** The refactor in [PR #1090](https://github.com/moltis-org/moltis/pull/1090) indicates a maturation of the provider system. We can predict that future releases will require explicit capability registration for *all* new providers, making the assistant more resilient to API changes.

## 7. User Feedback Summary
Direct user feedback via issues is currently absent for this 24-hour period. However, judging by the developer feedback inferred from the PRs, there is a strong demand for seamless integration of alternative LLM backends (like NEAR AI and OpenAI Codex). Developers and advanced users require robust tool-use capabilities, and recent patches show that edge cases in streaming tool calls are being actively hunted down and resolved to improve the power-user experience.

## 8. Backlog Watch
*   **Session History Capping:** [PR #1089](https://github.com/moltis-org/moltis/pull/1089) is currently open and requires maintainer attention. Because it touches critical infrastructure (normal chat, streaming, compaction, and memory turns), it should be prioritized for review to ensure system memory constraints are managed properly.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-06-02

## 1. Today's Overview
CoPaw is experiencing exceptionally high community engagement, with 50 issues and 34 pull requests updated in the last 24 hours. The project maintains a healthy open-source rhythm, recently shipping two new releases (v1.1.10-beta.2 and the stable v1.1.10) within the tracking period. The issue tracker currently leans heavily towards active bug reports (32 open/active) regarding core systems like cron jobs and context management, while the PR pool (25 open) is robust with community-contributed channel integrations and architectural refactors. Overall, the project is in a highly active phase, aggressively iterating on stability and multi-platform integrations while addressing the growing pains of its expanding user base.

## 2. Releases
Two new versions were released today, highlighting a rapid iteration cycle focused on new agent capabilities and stability:

*   **v1.1.10** ([Release Notes](https://github.com/agentscope-ai/QwenPaw/pull/4867))
    *   **Added:** `spawn_subagent` tool for ephemeral, in-workspace sub-agent execution.
    *   **Added:** "Open Directory" tab in Coding Mode for referencing local paths.
*   **v1.1.10-beta.2**
    *   **Fixes:** Resolved website header styling and auto-continue video bugs ([PR #4812](https://github.com/agentscope-ai/QwenPaw/pull/4812)).
    *   **Fixes:** Addressed tag preservation, enable/disable states, and channel configuration bugs in the skill system ([PR #4861](https://github.com/agentscope-ai/QwenPaw/pull/4861)).

## 3. Project Progress
Development is advancing across infrastructure, channel integrations, and core bug fixes. The most notable progress includes:

*   **AgentScope 2.0 Migration:** A major architectural overhaul is underway with the opening of PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) (currently WIP/Breaking Change) to migrate the underlying framework from 1.x to 2.0.0.
*   **MCP Resource Management:** PR [#4849](https://github.com/agentscope-ai/QwenPaw/pull/4849) (merged/closed) introduced a `SharedMCPPool` to prevent MCP server instances from exhausting system resources when running 300+ agents.
*   **Windows Desktop Experience:** Significant progress on the Tauri desktop app, including an auto-updater ([PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)), dynamic icon generation ([PR #4866](https://github.com/agentscope-ai/QwenPaw/pull/4866)), and lazy-loading optimizations to improve Windows startup times to ~40ms ([PR #4772](https://github.com/agentscope-ai/QwenPaw/pull/4772)).
*   **New Channel Integrations:** PRs were submitted for Tencent Yuanbao Bot ([PR #4856](https://github.com/agentscope-ai/QwenPaw/pull/4856)) and MiniMax M3 model support ([PR #4881](https://github.com/agentscope-ai/QwenPaw/pull/4881)).

## 4. Community Hot Topics
The community is highly active in discussing session management and UI/UX improvements.

*   **Session Handling in Cron Tasks:** The most discussed topic revolves around how cron tasks share sessions with users. Users are frustrated that sending a manual message interrupts an ongoing cron task ([Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653), 9 comments), and that cron agents with `share_session=true` produce empty execution traces ([Issue #4818](https://github.com/agentscope-ai/QwenPaw/issues/4818)). This signals a strong user need for robust asynchronous background task execution independent of the main chat flow.
*   **Conversation Rewind & Rollback:** Users are vocally requesting Trae-like granular conversation management, including the ability to rollback to specific historical messages and revert associated file changes ([Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789), 9 comments, 1 👍). This highlights a need for more sophisticated stateful sandboxing.
*   **Custom Skill Configuration:** Developers are struggling with skill implementations, particularly how skills are recognized and mapped to the system, as seen in the heavily commented Question issue regarding missing agents ([Issue #4808](https://github.com/agentscope-ai/QwenPaw/issues/4808), 7 comments).

## 5. Bugs & Stability
Several high-severity bugs were reported today affecting core scheduling, context management, and Windows stability. However, the maintainers and community are quick to submit patches.

*   **Critical - Cron Job State & Execution:**
    *   Ghost cron jobs not being cleaned up when `jobs.json` is updated, causing infinite execution ([Issue #4649](https://github.com/agentscope-ai/QwenPaw/issues/4649)). *Fix PR [#4822](https://github.com/agentscope-ai/QwenPaw/pull/4822) is open.*
    *   A single invalid job in `jobs.json` causes the entire workspace to crash on startup ([Issue #4835](https://github.com/agentscope-ai/QwenPaw/issues/4835)).
*   **High - Context Inflation:** New sessions loading raw, uncompressed historical context, leading to immediate token limit exhaustion ([Issue #4872](https://github.com/agentscope-ai/QwenPaw/issues/4872)).
*   **High - Windows Desktop & Process Locks:** Browser invocation leaves residual locked directories and processes on Windows, breaking backups and causing cascading failures ([Issue #4844](https://github.com/agentscope-ai/QwenPaw/issues/4844)). *Fix PR [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853) is open.*
*   **Medium - Configuration Bypass:** `max_input_length` settings in `llama_cpp.json` are ignored if `active_model` isn't explicitly defined, breaking context compression thresholds ([Issue #4871](https://github.com/agentscope-ai/QwenPaw/issues/4871)). *Fix PR [#4827](https://github.com/agentscope-ai/QwenPaw/pull/4827) is open.*

## 6. Feature Requests & Roadmap Signals
The community is pushing the platform towards enterprise-readiness and more robust AI routing.

*   **Model Fallback Chains:** Users want automatic failover to secondary LLM providers if the primary is rate-limited or down, moving beyond simple retries ([Issue #4882](https://github.com/agentscope-ai/QwenPaw/issues/4882)). *Likely to be a target for the v1.1.11 or v1.2.0 milestone.*
*   **Agent-Scoped Web Login:** A request to move away from global admin credentials towards granular, agent-specific web authentication for secure multi-tenant deployments ([Issue #4859](https://github.com/agentscope-ai/QwenPaw/issues/4859)).
*   **Desktop UX Toggles:** Repeated requests for silent shell execution on Windows without CMD pop-ups ([Issue #4777](https://github.com/agentscope-ai/QwenPaw/issues/4777)) and UI font size scaling ([Issue #4154](https://github.com/agentscope-ai/QwenPaw/issues/4154)).

## 7. User Feedback Summary
Real-world users are enthusiastic but suffering from friction during upgrades and complex configurations.

*   **Pain Points - Upgrades:** Users are frustrated that upgrading via Pip on Windows leaves stale `~` prefixed skill directories ([Issue #4839](https://github.com/agentscope-ai/QwenPaw/issues/4839)), and disabled builtin skills forcefully re-enable themselves post-update ([Issue #4807](https://github.com/agentscope-ai/QwenPaw/issues/4807)). 
*   **Pain Points - Model Routing:** Advanced users utilizing OpenAI-compatible endpoints (like GPT-5.5 xhigh) are confused by how to pass provider-specific parameters like `reasoning_effort` ([Issue #4814](https://github.com/agentscope-ai/QwenPaw/issues/4814)).
*   **Use Cases:** CoPaw is actively being used as a daily personal assistant via WeChat/WeCom (as seen by cron-to-WeChat bugs), self-hosted local LLM routing (LlamaCPP configurations), and complex automated browser agents.

## 8. Backlog Watch
Maintainers should review the following active PRs and Issues that require final approvals or architectural discussion:

*   **PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846) (AgentScope 2.0 Migration):** This massive WIP PR needs clear milestone tracking to ensure community plugins don't break.
*   **PR [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) (Token Usage Output):** Under review since mid-May. Highly requested by power monitors, needs final merging.
*   **PR [#4821](https://github.com/agentscope-ai/QwenPaw/pull/4821) (Feishu Group Session Sharing):** Under review, requires attention before channel parity falls behind.
*   **Issue [#4824](https://github.com/agentscope-ai/QwenPaw/issues/4824):** ACP protocol version mismatch when connecting CoPaw to Claude Code. This cross-agent protocol integration needs maintainer validation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-06-02

## 1. Today's Overview
ZeptoClaw experienced a high-volume maintenance day on June 1–2, 2026, processing 18 pull requests (17 merged/closed, 1 open) and opening 1 new issue. The primary focus was on tightening CI gates and performing a comprehensive sweep of dependency updates across Rust, JavaScript, Docker, and GitHub Actions ecosystems. The project remains in a robust state, with the repository maintainer proactively addressing binary size drift and CI security advisories. No new software releases were cut during this period. Overall, the activity indicates healthy, defensive engineering practices aimed at long-term project stability.

## 2. Releases
No new releases were published today. The project's latest developmental changes are currently being merged into the main branch for a future release.

## 3. Project Progress
Significant technical advancements were made today, primarily focusing on CI/CD hardening, security, and core bug fixes:
*   **CI Hardening:** PR [#611](https://github.com/qhkm/zeptoclaw/pull/611) (Open) proposes promoting the `binary-size` job to a mandatory PR gate (temporarily set to a 7.5MB ceiling) to prevent future binary bloat.
*   **Security & Advisories:** PR [#594](https://github.com/qhkm/zeptoclaw/pull/594) (Merged) successfully cleared a repo-wide CI blockage caused by new RUSTSEC advisories, bumping `lettre` and `diesel` to secure versions. Dependabot also merged bumps for `cargo-deny-action` ([#597](https://github.com/qhkm/zeptoclaw/pull/597)) and `taiki-e/install-action` ([#604](https://github.com/qhkm/zeptoclaw/pull/604)).
*   **Provider Bug Fix:** PR [#610](https://github.com/qhkm/zeptoclaw/pull/610) (Merged) cherry-picked a critical fix from [#592](https://github.com/qhkm/zeptoclaw/pull/592) to ensure that keyword fallbacks in `infer_provider_name_for_model` no longer erroneously route to unconfigured providers.
*   **Dependency Sweeps:** The maintainer merged 12 Dependabot PRs, upgrading core components including Rust (1.93 to 1.95 via [#596](https://github.com/qhkm/zeptoclaw/pull/596)), `clap` ([#605](https://github.com/qhkm/zeptoclaw/pull/605)), `tower-http` ([#606](https://github.com/qhkm/zeptoclaw/pull/606)), `uuid` ([#601](https://github.com/qhkm/zeptoclaw/pull/601)), Astro/Starlight documentation frameworks ([#607](https://github.com/qhkm/zeptoclaw/pull/607), [#602](https://github.com/qhkm/zeptoclaw/pull/602)), and ESLint ([#608](https://github.com/qhkm/zeptoclaw/pull/608)).

## 4. Community Hot Topics
While today's activity was largely mechanical (Dependabot merges), there is notable strategic context:
*   **Binary Size Discipline (Issue [#612](https://github.com/qhkm/zeptoclaw/issues/612) & PR [#611](https://github.com/qhkm/zeptoclaw/pull/611)):** The maintainer highlighted an ~800KB drift in the stripped release binary since the 6.2MB low water mark. This signals a strict architectural stance on keeping ZeptoClaw lightweight.
*   **Third-Party Contribution Friction (PR [#592](https://github.com/qhkm/zeptoclaw/pull/592) & PR [#610](https://github.com/qhkm/zeptoclaw/pull/610)):** A community fix for a 100% error rate regarding NIM-served Photon instances was merged, but required a cherry-pick by the maintainer due to OAuth and CI workflow issues on the contributor's fork. *Underlying need:* The project may need to streamline its contribution guidelines or pre-merge CI checks to lower the barrier for external contributors.

## 5. Bugs & Stability
*   **P2-High: Provider Inference Fallback Error (Fixed):** The `infer_provider_name_for_model` function contained a bug where keyword-based fallbacks ignored `available_providers`, causing a 100% error rate for users utilizing NIM-served Photon instances with model IDs like `openai/gpt-oss-120b`. This was resolved and merged via PR [#610](https://github.com/qhkm/zeptoclaw/pull/610).
*   **P2-High: Binary Size Drift (Open):** The darwin-arm64 binary has crept up to 6.98MB (Linux x86_64 is larger), jeopardizing the 7MB strategic target. Issue [#612](https://github.com/qhkm/zeptoclaw/issues/612) tracks this, and a preventive PR gate is currently being reviewed in PR [#611](https://github.com/qhkm/zeptoclaw/pull/611).

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were opened today. However, the roadmap signals a strong focus on **performance and footprint management**. The enforcement of a binary-size gate ([#611](https://github.com/qhkm/zeptoclaw/pull/611)) suggests that upcoming versions will prioritize optimizations or refactoring to bring the binary size back down to the 6.2MB–7.0MB range before new heavy features are introduced. 

## 7. User Feedback Summary
Direct user feedback was minimal today, but pain points can be inferred from the resolved bugs. Users deploying custom or self-hosted LLM infrastructures (specifically using NVIDIA Inference Microservices/NIM) experienced hard routing failures. The resolution of Issue [#592](https://github.com/qhkm/zeptoclaw/pull/592) via [#610](https://github.com/qhkm/zeptoclaw/pull/610) indicates that users are actively utilizing ZeptoClaw in advanced, diverse AI provider environments that heavily rely on strict provider mapping configurations.

## 8. Backlog Watch
*   **PR Gate Approval Needed:** PR [#611](https://github.com/qhkm/zeptoclaw/pull/611) is currently open and waiting to be merged to act as a guard against further binary bloat. 
*   **Performance Audit Needed:** Issue [#612](https://github.com/qhkm/zeptoclaw/issues/612) requires an audit to identify *why* the binary size has drifted by ~800KB. This task is currently unassigned and lacks linked PRs for the actual size reduction.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-02

## 1. Today's Overview
ZeroClaw experienced an exceptionally high volume of community and maintainer activity in the last 24 hours, with 29 issues updated and 35 pull requests actively touched. The project is currently in an intensive stabilization and architectural hardening phase, with a clear focus on excising technical debt (such as deprecated provider fallbacks), tightening multi-channel security policies, and introducing enterprise-grade observability features. Although no new software releases were cut today, the sheer volume of high-quality issue triage and targeted bug fixes indicates a likely precursor to an impending minor or patch version release. 

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
While 4 PRs were merged or closed, maintainers and contributors actively pushed 31 open PRs. Key advancements include:
* **Security and Architecture:** Maintainer `singlerider` opened two critical PRs to excise the deprecated "default model provider" credential fallback from the channel orchestrator ([PR #7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066)), matching the issue raised in [#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059).
* **Agent Evaluation:** `mn13` introduced a new deterministic replay and live-mode evaluation harness via `zeroclaw eval` ([PR #7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067)), establishing a much-needed baseline for agent quality testing.
* **Channel & Infrastructure Scaling:** `theonlyhennygod` pushed multi-tenant Linq channel routing ([PR #7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041)), and `bheatwole` laid the groundwork for the WASI Component Model by defining the WIT Interface ([PR #7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060)).
* **Robustness Fixes:** Retries for empty LLM completions were introduced ([PR #7061](https://github.com/zeroclaw-labs/zeroclaw/pull/7061)), alongside targeted fixes for channel security, DNS host allowlists ([PR #6974](https://github.com/zeroclaw-labs/zeroclaw/pull/6974)), and email credential handling ([PR #6979](https://github.com/zeroclaw-labs/zeroclaw/pull/6979)).

## 4. Community Hot Topics
The most actively discussed items revolve around LLM efficiency, strict provider integrations, and observability:
* **Token Efficiency via Skill Compilation:** [Issue #5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) (8 comments, 👍 1) proposes compiling verbose skill definitions into compact functions to drastically reduce token consumption per query. This highlights a maturing user base seeking cost and latency optimizations.
* **Ollama Tool-Calling Bug:** [Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962) (6 comments) details a severe S1 blockage when using Ollama with tools, underlining heavy community reliance on local/open-source model providers.
* **Discord & WhatsApp Channel Constraints:** Requests for strict channel allow-listing in Discord ([Issue #6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378), 6 comments) and fixes for silent message drops in WhatsApp ([Issue #6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)) indicate widespread enterprise/commercial deployment of ZeroClaw on messaging platforms.
* **Observer Events RFC:** The push for OpenTelemetry alignment and better event attribution ([Issue #7051](https://github.com/zeroclaw-labs/zeroclaw/issues/7051) & [Issue #7052](https://github.com/zeroclaw-labs/zeroclaw/issues/7052)) emphasizes the community's need for production-grade LLM tracing.

## 5. Bugs & Stability
Several high-severity bugs were reported or addressed today, with immediate fix PRs typically following shortly after:
* **S1 - Chat View UI Crash:** Browser auto-translation features cause a fatal React `removeChild` DOM error, completely breaking the chat view ([Issue #7057](https://github.com/zeroclaw-labs/zeroclaw/issues/7057)). *No fix PR yet.*
* **S1 - Telegram Codex Scratchpad Leak:** Internal tool transcripts are mistakenly sent as final responses to users when using Codex as a backend ([Issue #7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068)). *No fix PR yet.*
* **S1 - Channel Tool Allowlist Bypass:** Agents served via channels currently bypass security policies, potentially exposing `shell` access ([Issue #7063](https://github.com/zeroclaw-labs/zeroclaw/issues/7063)). **Fix:** [PR #7064](https://github.com/zeroclaw-labs/zeroclaw/pull/7064) is open.
* **S1 - Ollama Provider Failure:** Sessions completely block when tools are needed ([Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)). 
* **S2 - Blank LLM Completions:** Models returning empty 2xx responses are treated as final answers. **Fix:** [PR #7061](https://github.com/zeroclaw-labs/zeroclaw/pull/7061) adds retry logic.
* **S2 - Default Provider Credential Fallback:** An outdated remnant allows cross-provider credential usage. **Fix:** [PR #7066](https://github.com/zeroclaw-labs/zeroclaw/pull/7066) excises this behavior.

## 6. Feature Requests & Roadmap Signals
Based on today's activity, the roadmap is heavily leaning toward **multi-agent evaluation**, **multi-tenant scaling**, and **WASI plugin architecture**:
* **Agent Evaluation Harness:** [Issue #7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) & [PR #7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) introduce `zeroclaw eval`. Deterministic testing of agent loops is a massive signal that ZeroClaw is preparing for enterprise SLAs.
* **Multi-Tenant Fleet Management:** [Issue #6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) (CLI daemon registration) and [PR #7041](https://github.com/zeroclaw-labs/zeroclaw/pull/7041) (Multi-tenant Linq routing) suggest the next versions will natively support hosting multiple distinct user-groups/agents on a single gateway.
* **WASI Component Model:** [PR #7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060) begins standardizing plugin interfaces, indicating a shift toward a safer, more extensible plugin ecosystem.

## 7. User Feedback Summary
Users are deploying ZeroClaw in highly diverse environments, leading to specific, friction-point feedback:
* **Local Model Pain Points:** The S1 bug with Ollama ([Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)) shows users are actively trying to use ZeroClaw as an offline, privacy-first assistant. 
* **Cost Sensitivity:** High interest in skill compilation ([Issue #5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146)) reveals that operational LLM costs are a primary concern for active users.
* **Internationalization (i18n) Friction:** The discovery that hard-coded English strings bypass Fluent localization ([Issue #6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548)) and the severe browser translation crash ([Issue #7057](https://github.com/zeroclaw-labs/zeroclaw/issues/7057)) indicate that the non-English-speaking user base is growing rapidly and hitting UX walls.
* **CI/Testing Flakiness:** Contributors are noting that tests writing to `~/.zeroclaw/data` cause race conditions ([Issue #7054](https://github.com/zeroclaw-labs/zeroclaw/issues/7054)), signaling frustration with the local development setup.

## 8. Backlog Watch
Several critical or high-impact issues remain blocked or are awaiting maintainer action:
* **Database/Fleet Stabilization:** [Issue #6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472) (Gateway panic when using Postgres) and [Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391) / [Issue #6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390) (Daemon node heartbeats and registration) are blocked/high-priority. Fleet management cannot progress smoothly without these.
* **Gemini Provider Invariant Violation:** [Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) is an S1 bug (P1 priority) where Gemini 400 rejects ZeroClaw's tool calls due to history serialization. This needs urgent attention for users utilizing Google's models.
* **Skill Improver Cooldowns:** [Issue #6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) (unbounded patches) and [Issue #6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645) (`SKILL.toml` vs `manifest.toml` mismatch) show that the autonomous skill improvement pipeline still lacks necessary guardrails.

</details>