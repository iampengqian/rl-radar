# OpenClaw Ecosystem Digest 2026-06-10

> Issues: 450 | PRs: 488 | Projects covered: 13 | Generated: 2026-06-09 22:27 UTC

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

# OpenClaw Project Digest — 2026-06-10

## 1. Today's Overview
OpenClaw is experiencing exceptionally high community activity, with 450 issues and 488 pull requests updated in the last 24 hours. The project merged 139 PRs and closed 133 issues, demonstrating strong and responsive maintainer throughput. The team shipped three new releases, culminating in stable version `v2026.6.5`, which focuses on polishing channel integrations and the Model Context Protocol (MCP) tooling pipeline. Overall, project health is robust, though a cluster of high-severity session-state and message-loss bugs in the active backlog require careful attention.

## 2. Releases
**Latest Stable Release: [v2026.6.5](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5)**
*(Also includes pre-releases `v2026.6.5-beta.5` and `v2026.6.5-beta.6`)*

*   **Channel Security/UX:** QQBot now reliably strips model reasoning and thinking scaffolding (e.g., raw `<thinking>` tags) before delivery, preventing internal LLM logic from leaking into user-facing channel replies. (Thanks @openperf)
*   **MCP Integration:** MCP tool results now intelligently coerce complex types (`resource_link`, `resource`, `audio`, and malformed images) into standard formats, smoothing out multi-modal agent workflows.

## 3. Project Progress
Maintainers merged or closed 139 pull requests today, highlighting rapid development across security, agent runtime stability, and UI improvements.

*   **Agent Runtime & Tool Policy:** PR [#91750](https://github.com/openclaw/openclaw/pull/91750) and [#91499](https://github.com/openclaw/openclaw/pull/91499) advanced tool policy enforcement for native web searches and cron job tool boundaries.
*   **Security & Sandbox Hardening:** PR [#91752](https://github.com/openclaw/openclaw/pull/91752) secured the Codex sandbox HTTP bridge against SSRF attacks, while [#91747](https://github.com/openclaw/openclaw/pull/91747) added validation for discovered CDP websocket URLs to prevent browser control hijacking.
*   **Stability Fixes:** PR [#89045](https://github.com/openclaw/openclaw/pull/89045) resolved a critical issue where group chat sessions stuck in `failed` statuses silently dropped all subsequent messages. 
*   **Infrastructure:** PR [#91081](https://github.com/openclaw/openclaw/pull/91081) introduced caching for session-directory scans, drastically reducing READDIR load for users running OpenClaw on networked filesystems (NFS).

## 4. Community Hot Topics
Community discussions today are heavily centered on channel message delivery reliability and agent context management.

*   **Internal LLM Logic Leaking to Channels:** The most active issue is [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (29 comments, P1 Security). Users report that text generated *between* tool calls (e.g., error handling, narration) routes directly to messaging channels (Slack, iMessage). This relates closely to [Issue #44905](https://github.com/openclaw/openclaw/issues/44905) (10 comments), where Discord channels surfaced raw `NO_REPLY` and `to=functions` JSON artifacts.
*   **Codex Turn-Completion Stalls:** [Issue #88312](https://github.com/openclaw/openclaw/issues/88312) (15 comments) details a severe regression where multi-tool agent turns fail on the Codex app-server with "stopped before confirming the turn was complete."
*   **Memory Search Timeouts:** [Issue #74586](https://github.com/openclaw/openclaw/issues/74586) (9 comments) highlights frustration with the `active-memory` plugin, where embedded runs incorrectly classify completed memory searches as timeouts.
*   **MathJax/LaTeX Support:** [Issue #42840](https://github.com/openclaw/openclaw/issues/42840) (7 comments, 6 thumbs-up) is a highly requested feature asking for MathJax rendering in the Control UI to better display scientific and mathematical outputs.

## 5. Bugs & Stability
Several high-impact bugs affecting session state and message delivery were actively updated today. 

*   **P1 - Gateway Memory Leak:** [Issue #89315](https://github.com/openclaw/openclaw/issues/89315) reports the gateway heap growing unbounded on long-running Linux systemd deployments, eventually triggering cgroup OOM kills.
*   **P1 - Heartbeat Blocks Telegram:** [Issue #40611](https://github.com/openclaw/openclaw/issues/40611) notes that an aggressive heartbeat retry loop completely blocks Telegram message handling during active conversations. *Fix PR [#88992](https://github.com/openclaw/openclaw/pull/88992) is ready for maintainer look.*
*   **P1 - Windows Event Loop Starvation:** [Issue #86599](https://github.com/openclaw/openclaw/issues/86599) reports that local model provider calls block the gateway event loop on Windows, causing trivial prompts to take ~4 minutes.
*   **P1 - WhatsApp Long-Call Stalls:** [Issue #84569](https://github.com/openclaw/openclaw/issues/84569) reveals that WhatsApp sessions transition to a `stalled_agent_run` if a model call takes longer than 2-4 minutes, resulting in lost replies.
*   **P1 - Cron Delete After Manual Run:** [Issue #83538](https://github.com/openclaw/openclaw/issues/83538) (via [PR #83933](https://github.com/openclaw/openclaw/pull/83933)) revealed that manual `cron run` was accidentally consuming one-shot scheduled tasks. *Fix PR is pending merge.*

## 6. Feature Requests & Roadmap Signals
Based on today's issue velocity, the following user requests are strong candidates for upcoming releases:

*   **Per-Channel Model Overrides:** [Issue #53638](https://github.com/openclaw/openclaw/issues/53638) requests the ability to set model routing at the channel/group/DM level. This is highly requested by power users running complex routing proxies.
*   **Context Provenance Metadata:** [Issue #54373](https://github.com/openclaw/openclaw/issues/54373) suggests injecting source/volatility metadata into the system prompt so the agent can distinguish between permanent state and freshly read context. 
*   **Session Labels/Nicknames:** [Issue #55249](https://github.com/openclaw/openclaw/issues/55249) highlights the need for human-readable session names, as current auto-generated keys (e.g., `agent:main:msteams:channel:19:...`) are opaque.

## 7. User Feedback Summary
**Pain Points:** The dominant user frustration is unreliable message delivery across channels. Users frequently report "message loss" and "ghost replies" where the agent successfully processes a request but fails to route the response back to Telegram, WhatsApp, or Discord. Secondary pain points revolve around infrastructure stability—specifically Windows event loop blocking, Docker-outside-of-Docker workspace access ([Issue #31331](https://github.com/openclaw/openclaw/issues/31331)), and OpenClaw's aggressive hardcoded `chmod` permissions breaking multi-user setups ([Issue #56263](https://github.com/openclaw/openclaw/issues/56263)).

**Satisfaction & Use Cases:** Users are actively pushing OpenClaw into complex, multi-modal territory. There is strong adoption of the `active-memory` plugin combined with sophisticated models (GPT-5.4, Claude Sonnet 4) for persistent personal assistants. Community members are successfully deploying OpenClaw on diverse architectures, including RISC-V64 ([Issue #54253](https://github.com/openclaw/openclaw/issues/54253)). The overall sentiment indicates high enthusiasm for the project's extensibility, tempered by the need for more robust asynchronous turn-completion logic.

## 8. Backlog Watch
Several critical, high-severity issues remain stuck in triage with `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` tags, requiring urgent attention:

*   **[Issue #31331](https://github.com/openclaw/openclaw/issues/31331) (P1):** Docker+Sandbox workspace binding failures make production deployments using Docker-outside-of-Docker impossible.
*   **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592) (P1):** The inter-tool-call text leaking issue is highly active, lacks an open fix PR, and represents a major UX/security boundary breach.
*   **[Issue #53599](https://github.com/openclaw/openclaw/issues/53599) (P1):** The removal of the Chrome extension browser relay broke cross-machine browser control for managed hosting providers, with no adequate replacement yet provided.
*   **[Issue #56263](https://github.com/openclaw/openclaw/issues/56263) (P1):** Hardcoded file permissions continue to break group-shared deployments.

---

## Cross-Ecosystem Comparison

# Open-Source AI Agent & Personal Assistant Ecosystem Report
**Date:** June 10, 2026

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a period of hyper-growth, characterized by rapid iteration in multi-modal integrations and aggressive bug-fixing cycles. Projects are maturing beyond simple chat wrappers into complex, asynchronous runtime environments capable of cross-platform messaging, tool-use, and memory management. A universal challenge across the landscape is balancing high-velocity feature expansion—such as Model Context Protocol (MCP) integration and background task execution—with the critical need for security hardening and state reliability. Consequently, the focus is shifting from basic LLM routing to enterprise-grade stability, context window management, and multi-agent orchestration.

## 2. Activity Comparison
*Note: Metrics reflect 24-hour velocity as of 2026-06-10. Health Score is based on maintainer responsiveness, bug triage speed, and PR merge ratios.*

| Project | Active Issues (24h) | Active PRs (24h) | Latest Release Status | Health Score / Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 450 | 488 | `v2026.6.5` (Stable) | **Robust** (High throughput, 139 PRs merged) |
| **CoPaw** | 34 | 34 | `1.1.11-beta.2` | **High Growth** (Active triage, desktop focus) |
| **Hermes Agent** | 50 | 50 | `v0.15.2` (Stable pending) | **Iterative** (Heavy bug-fixing phase) |
| **IronClaw** | 45 | 50 | `0.29.1` (Staging) | **Maturing** (Major infra/backend focus) |
| **ZeroClaw** | 50 | 50 | `v0.8.0-beta-1` | **Bottlenecked** (49 open vs 1 closed PR) |
| **PicoClaw** | High (spike) | High (spike) | `v0.2.9-nightly` | **Hardening** (Massive security audit response) |
| **NanoBot** | 6 | 23 | None | **Stabilizing** (Provider compatibility focus) |
| **NanoClaw** | Low | 43 (bulk closures) | None | **Triaging** (Massive backlog cleanup) |
| **LobsterAI** | 2 | 5 | None | **Steady** (UI & Multi-agent focus) |
| **NullClaw** | 1 | 1 | None | **Stable** (Focused, targeted merges) |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | None | **Dormant** (No activity) |

## 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw operates as the undisputed core reference implementation with massive scale (450+ daily issues/PRs). Its primary advantage lies in its `active-memory` plugin ecosystem and mature multi-channel routing (Telegram, WhatsApp, Discord, iMessage), outpacing peers like NullClaw and ZeroClaw in message delivery reliability. 
**Technical Approach:** Unlike LobsterAI (which relies on local desktop rendering for multi-agent meshes) or IronClaw (which requires complex Postgres/libSQL production runtimes), OpenClaw balances a lightweight gateway architecture with advanced containerization tools (Codex sandbox). 
**Community Size:** OpenClaw’s community is an order of magnitude larger than closest competitors, functioning as a bellwether for the broader ecosystem.

## 4. Shared Technical Focus Areas
*   **Context Compaction & Memory Reliability:** Memory loss during context compression is a universal pain point. Users are frustrated by forgotten instructions and cross-session context bleeding.
    *   *Projects:* NanoBot, Hermes Agent, NullClaw, ZeroClaw.
*   **Next-Gen Provider Compatibility (GPT-5.x & Strict APIs):** Ecosystem-wide friction exists regarding hardcoded parameters (e.g., using `max_tokens` instead of `max_completion_tokens` for GPT-5.x) and model ID deprecations. 
    *   *Projects:* OpenClaw, NanoBot, CoPaw.
*   **Advanced Security Surfaces (SSRF & Sandboxing):** With agents executing web fetches and local code, preventing network pivots and directory escapes is paramount. 
    *   *Projects:* PicoClaw (SSRF bypasses), NanoBot (Symlink escapes), OpenClaw (SSRF on HTTP bridges).
*   **Dynamic Model Routing:** Power-users want to abandon global model defaults in favor of granular, multi-model routing (e.g., cheap models for routing, heavy models for reasoning).
    *   *Projects:* OpenClaw, Hermes Agent, NanoBot.

## 5. Differentiation Analysis
*   **Enterprise Infrastructure vs. Local Desktop:** **IronClaw** is differentiating via enterprise-ready scalability (durable Postgres backends, multi-tenant tools, OpenAI API strict-mode compliance). Conversely, **CoPaw** and **LobsterAI** are focusing heavily on local desktop experiences (Tauri/Electron wrappers), prioritizing OS-level notifications and UI fluidity for single users.
*   **Architectural Extensibility:** **PicoClaw** and **NanoClaw** are pushing the boundaries of modular multi-agent capabilities, utilizing internal "Collaboration Buses" and skill marketplaces, whereas **Hermes Agent** differentiates with cognitive features like "self-evolving" learning loops.
*   **Channel vs. Agent Focus:** **ZeroClaw** is aggressively expanding its communication surface (batch-adding SMS and social channels), while **NullClaw** remains hyper-focused on deterministic memory event streams for cross-agent synchronization.

## 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators (OpenClaw, CoPaw, Hermes):** These projects have massive contributor inflows and rapid release cycles. They are moving fast but accumulating technical debt related to event loops and UI performance (e.g., Windows event loop starvation in OpenClaw, Desktop CPU spikes in CoPaw).
*   **Tier 2: Architecture & Security Builders (PicoClaw, IronClaw, NanoBot):** These communities are shifting from feature-chasing to structural hardening. PicoClaw's response to a massive security audit and IronClaw's "Reborn" production runtime migration show ecosystems maturing for enterprise deployment.
*   **Tier 3: Triaging & Cleanup (NanoClaw, ZeroClaw):** NanoClaw is focusing on backlog cleanup (bulk-closing 39 PRs), while ZeroClaw is showing signs of maintainer bottleneck, struggling to merge community contributions fast enough.

## 7. Trend Signals
1.  **Tool-Call UX is the New Bottleneck:** As models become more capable, the agent's ability to safely execute tools without interrupting user flow is critical. Projects are realizing that exposing raw tool-call JSON, internal reasoning tags, or experiencing "turn-completion stalls" significantly degrades user trust. 
2.  **Multi-Agent Runtime Abstraction:** The emergence of "Agent Collaboration Buses" (PicoClaw) and "Cross-Agent Memory Streams" (NullClaw) indicates a trend away from monolithic chatbots toward decentralized agent swarms where specialized models handle distinct tasks.
3.  **The Scheduling & Cron Gap:** Users want autonomous agents that act as proactive digital assistants. However, asynchronous execution (Cron jobs) is currently fraught with bugs across the board (OpenClaw, NullClaw, ZeroClaw), representing a massive immediate opportunity for developers to solve reliable background tasking.
4.  **On-Premise & Self-Hosted Flexibility:** The consistent demand for model agnosticism and "direct runner" modes (NanoClaw) signals that users want local, privacy-first deployments without being locked into vendor-specific API structures.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-10

## 1. Today's Overview
NanoBot is experiencing a highly active development cycle with significant community engagement. In the last 24 hours, the project saw 23 updated Pull Requests (12 open, 11 closed/merged) and 6 active Issues, indicating a strong merge rate and healthy project velocity. While there were no new official version releases, maintainers and contributors are heavily focused on enhancing system stability, refining provider compatibility (especially for newer models like GPT-5.x and reasoning models), and improving the user onboarding experience. The high volume of bug fixes and test additions suggests the project is currently in a stabilization and hardening phase.

## 2. Releases
No new releases were recorded today. The project continues to develop towards its next milestone on the main branch.

## 3. Project Progress
Significant forward progress was made today, with 11 PRs merged or closed. Key advancements include:
*   **User Interface & Experience:** The WebUI saw the addition of an assistant reply "Fork from here" feature ([PR #4208](https://github.com/HKUDS/nanobot/pull/4208)), allowing users to branch conversations seamlessly. Additionally, TeX math delimiter rendering issues in the WebUI were resolved ([PR #4252](https://github.com/HKUDS/nanobot/pull/4252)).
*   **Documentation & Usability:** Major improvements were merged to make the onboarding experience friendlier for beginners ([PR #4177](https://github.com/HKUDS/nanobot/pull/4177)). 
*   **Core Architecture & Safety:** Tool call validation strictness was significantly improved to prevent silent failures on malformed arguments ([PR #4190](https://github.com/HKUDS/nanobot/pull/4190)). Work also continues on securing workspace execution by blocking relative symlink escapes ([PR #4119](https://github.com/HKUDS/nanobot/pull/4119)).
*   **Community Extensions:** Support for rendering LaTeX in the Feishu (Lark) channel was added ([PR #3434](https://github.com/HKUDS/nanobot/pull/3434)).

## 4. Community Hot Topics
The most actively discussed topics revolve around context management, memory architecture, and provider compatibility:
*   **Context Pollution in Memory ([Issue #4259](https://github.com/HKUDS/nanobot/issues/4259)):** With 2 comments and high technical depth, this issue highlights a critical architectural need. Users identified that `history.jsonl` lacks session isolation, mixing summaries from different sessions into the current system prompt. This signals a strong community demand for more robust, sandboxed memory management.
*   **Per-Conversation Model Switching ([Issue #4253](https://github.com/HKUDS/nanobot/issues/4253)):** With 3 comments, users are heavily discussing the need for granular model control. The underlying need is to balance cost/speed against privacy/skill within single workflows (e.g., routing private data to local models, but using cloud models for complex reasoning).
*   **On-Demand Version Checking ([PR #4255](https://github.com/HKUDS/nanobot/pull/4255)):** An architectural debate on removing real-time background polling in favor of a click-to-check version button, reflecting the community's focus on reducing unnecessary background resource consumption.

## 5. Bugs & Stability
Several high-impact bugs were reported today, with contributors quick to propose fixes:
1.  **WebUI Dropping Assistant Replies ([Bug] - [PR #4267](https://github.com/HKUDS/nanobot/pull/4267)):** A race condition where fast token generation caused the WebUI to silently drop entire assistant replies. *Fix PR is currently open.*
2.  **GPT-5.x / Reasoning Model Compatibility ([Bug] - [Issue #4261](https://github.com/HKUDS/nanobot/issues/4261)):** OpenAI-compatible providers fail when using GPT-5.x because NanoBot sends `max_tokens` instead of the required `max_completion_tokens`. *Fix PR is currently open ([PR #4263](https://github.com/HKUDS/nanobot/pull/4263)).*
3.  **Memory Compaction Truncation ([Bug] - [Issue #4264](https://github.com/HKUDS/nanobot/issues/4264)):** The `idleCompact` mechanism ignores the last 8 messages during summarization, which can result in saving incorrect user corrections to `history.jsonl`.
4.  **Message Splitting Code Block Corruption ([Bug] - [PR #4257](https://github.com/HKUDS/nanobot/pull/4257)):** Long messages split across fenced code blocks break HTML rendering. *Fix PR is currently open.*
5.  **Stale Memory Cursor ([Bug] - [PR #4256](https://github.com/HKUDS/nanobot/pull/4256)):** The `MemoryStore` cursor allocation can become stale/negative, risking memory sync issues. *Fix PR is currently open.*

## 6. Feature Requests & Roadmap Signals
*   **StepFun ASR Transcription Support ([PR #4260](https://github.com/HKUDS/nanobot/pull/4260)):** A new PR adds a StepFun SSE transcription provider, indicating an upcoming expansion of speech-to-text capabilities.
*   **Model-Override at the Conversation Level ([Issue #4253](https://github.com/HKUDS/nanobot/issues/4253)):** Users want to abandon global model defaults in favor of routing models directly from the chat interface based on task requirements. 
*   **Agent Identity Customization ([Issue #4262](https://github.com/HKUDS/nanobot/issues/4262)):** A request to respect the `botIcon` configuration immediately upon startup in agent mode, showing a desire for deeper UI/UX personalization.
*   *Prediction:* The next version will likely focus heavily on memory reliability (capped by fixes to cursors and compaction) and expanded LLM provider compatibility.

## 7. User Feedback Summary
NanoBot users are power-users who frequently push the boundaries of multi-model setups and complex context histories. A clear pain point is **context reliability**: users are frustrated when the AI "forgets" late-stage chat corrections due to compaction limits ([Issue #4264](https://github.com/HKUDS/nanobot/issues/4264)) or when it hallucinates due to cross-session context bleeding ([Issue #4259](https://github.com/HKUDS/nanobot/issues/4259)). Furthermore, the rapid adoption of newer models (like GPT-5.4 and reasoning models) shows a highly progressive user base, though they experience friction when the core system lags behind provider API updates ([Issue #4261](https://github.com/HKUDS/nanobot/issues/4261)). Overall satisfaction remains high, evidenced by active contributions, but memory and context handling remain the primary bottlenecks for advanced deployments.

## 8. Backlog Watch
Several complex, structural PRs have been lingering in the review queue and require maintainer attention to keep the project's momentum:
*   **Security & Execution:** [PR #4119](https://github.com/HKUDS/nanobot/pull/4119) (blocking relative symlink escapes) and [PR #4053](https://github.com/HKUDS/nanobot/pull/4053) (enforcing read-only roots) have been open for over 10 days. These are critical for safe agentic deployment.
*   **Testing Harnesses:** [PR #3982](https://github.com/HKUDS/nanobot/pull/3982) (scripted agent runner harness) and [PR #3983](https://github.com/HKUDS/nanobot/pull/3983) (covering blocked tool-call finish reasons) have been open since late May. Merging these is essential for long-term stability.
*   **Unanswered Bug:** The bug report regarding OpenAI-compatible providers failing to parse text-format tool calls ([Issue #4061](https://github.com/HKUDS/nanobot/issues/4061)) lacks a linked fix PR and needs triage, as it completely breaks tool usage for certain custom gateways.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-10

## 1. Today's Overview
The Hermes Agent project is experiencing a very high volume of community activity, with 50 active issues and 50 active pull requests updated in the last 24 hours. The open-source contributor base is highly engaged, with 40 new or updated PRs submitted in a single day, indicating healthy project momentum. No new official releases were cut today, but the repository is clearly ramping up for a potential `v0.16.x` or `v0.17.0` release given the influx of stability fixes, desktop enhancements, and gateway features. Overall project status: highly active and in a heavy iteration/bug-fixing phase.

## 2. Releases
No new releases were recorded today. The repository remains on the `v0.15.2` / `v0.16.0` baseline. The community is actively filing compatibility bugs for `v0.16.0`, indicating a broader stable release may be pending soon.

## 3. Project Progress
Ten pull requests were merged or closed today, advancing several key areas of the project:
- **Platform Expansion:** Initial support for Alpine Linux via OpenRC service files was introduced in [PR #43119](https://github.com/NousResearch/hermes-agent/pull/43119) (after an earlier duplicate attempt in [PR #43098](https://github.com/NousResearch/hermes-agent/pull/43098)).
- **TUI / CLI Fixes:** A configuration bug where the TUI ignored the `terminal.cwd` setting was fixed via [PR #38757](https://github.com/NousResearch/hermes-agent/pull/38757). 
- **Windows Compatibility:** [PR #42775](https://github.com/NousResearch/hermes-agent/pull/42775) tackled multiple path resolution, encoding, and compatibility bugs for Windows hosts.

## 4. Community Hot Topics
The most actively discussed items revolve around provider support, attribution, and context limitations:
- **OpenRouter Authentication (P1/P2):** Users are reporting persistent issues where Hermes fails to pass the Authorization header to OpenRouter ([Issue #42130](https://github.com/NousResearch/hermes-agent/pull/42130) - 5 comments, [Issue #42835](https://github.com/NousResearch/hermes-agent/pull/42835) - 3 comments). This suggests a broader issue in how the CLI manages credential pools for custom providers.
- **Attribution Dispute:** A community discussion regarding the originality of the "self-evolution" feature (allegedly copied from EvoMap) is generating notable reactions ([Issue #27266](https://github.com/NousResearch/hermes-agent/issues/27266) - 4 comments, 2 👍).
- **Context Compaction:** Message loss following context compression is heavily discussed ([Issue #43062](https://github.com/NousResearch/hermes-agent/issues/43062) & [Issue #43066](https://github.com/NousResearch/hermes-agent/issues/43066)).
- **Dynamic Routing:** Strong interest in dynamic model routing based on task complexity ([Issue #30652](https://github.com/NousResearch/hermes-agent/issues/30652) - 5 comments, 1 👍).

## 5. Bugs & Stability
Several high-severity bugs were reported today, though the community is already stepping up to fix them:
- **Context Compaction Data Loss (P1):** Assistant messages are dropped and user messages are merged post-compaction. Filed as [Issue #43066](https://github.com/NousResearch/hermes-agent/issues/43066) (Duplicate root cause: [Issue #43062](https://github.com/NousResearch/hermes-agent/issues/43062)).
- **Broken Tool Calls via Redaction (P1):** Passwords masked as `***` break subsequent tool calls when the model reads its own history. *Fix available in [PR #43092](https://github.com/NousResearch/hermes-agent/pull/43092).* ([Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083))
- **Model Refusal Infinite Retry (P1):** Hermes incorrectly retries deterministic model safety refusals, wasting tokens. *Fix available in [PR #43108](https://github.com/NousResearch/hermes-agent/pull/43108).*
- **Desktop Boot Loop (P1):** The Electron desktop app triggers a port-squatting boot loop due to teardown leaks. *Fix available in [PR #43114](https://github.com/NousResearch/hermes-agent/pull/43114).*
- **Gateway Queue Bug (P2):** `busy_input_mode: queue` only triggers during gateway drain, ignoring normal tasks ([Issue #14905](https://github.com/NousResearch/hermes-agent/issues/14905)).

## 6. Feature Requests & Roadmap Signals
User requests today signal a strong desire for more granular agent control, better multi-model routing, and desktop parity.
- **Per-Model Tool Policies:** Requested by users and immediately addressed via [PR #43123](https://github.com/NousResearch/hermes-agent/pull/43123), allowing tools to be enabled/disabled per model rather than globally.
- **Dynamic Model Routing:** Routing tasks to different models based on complexity/cost ([Issue #30652](https://github.com/NousResearch/hermes-agent/issues/30652)).
- **Desktop Workspace Integration:** Users want official support for community tools like `outsourc-e/hermes-workspace` inside the Desktop app ([Issue #41553](https://github.com/NousResearch/hermes-agent/issues/41553)).
- **Dangerous Command Context:** Users want to know *why* a terminal command is flagged as dangerous before approving it, especially on Telegram ([Issue #42478](https://github.com/NousResearch/hermes-agent/issues/42478)).

## 7. User Feedback Summary
Real-world users are actively pushing Hermes across diverse platforms (Desktop, Telegram, Docker, Alpine, Windows). 
- **Pain Points:** Windows and Docker users continue to face updater and reverse-proxy bugs (e.g., OIDC callback failures, [Issue #42780](https://github.com/NousResearch/hermes-agent/issues/42780)). Additionally, UI regressions in the Desktop app—such as the scrollbar not following new messages ([Issue #42777](https://github.com/NousResearch/hermes-agent/issues/42777), 3 👍)—are frustrating daily users. 
- **Satisfaction:** The rapid community response to bugs (e.g., immediate PRs for PDF binary handling [PR #43124](https://github.com/NousResearch/hermes-agent/pull/43124) and credential redaction [PR #43092](https://github.com/NousResearch/hermes-agent/pull/43092)) shows a healthy, highly responsive contributor ecosystem.

## 8. Backlog Watch
- **Gateway Queue Blocking ([Issue #14905](https://github.com/NousResearch/hermes-agent/issues/14905)):** A P2 bug from late April that causes messages to be dropped during normal execution. Despite being active today, it still lacks an assigned fix PR.
- **MCP Tool Reliability ([Issue #38945](https://github.com/NousResearch/hermes-agent/issues/38945)):** Desktop/TUI sessions fail to reliably expose MCP tools like Todoist, degrading the experience compared to rival tools like Claude Code.
- **Expensive Model Warnings ([PR #26016](https://github.com/NousResearch/hermes-agent/pull/26016)):** A PR from mid-May adding cost warnings for expensive models (like `gpt-5.5-pro`) is still open and pending maintainer review.
- **Kanban Dashboard Corruption ([Issue #24188](https://github.com/NousResearch/hermes-agent/issues/24188)):** The Kanban board feature has been broken since mid-May due to a JS rendering error, with active hardening PRs ([PR #41795](https://github.com/NousResearch/hermes-agent/pull/41795)) still awaiting merge.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-06-10)

## 1. Today's Overview
PicoClaw experienced a massive spike in community and maintainer activity today, dominated by a comprehensive security audit of its networking, gateway, and channel interfaces. A single security researcher filed over a dozen vulnerability reports, immediately triggering corresponding hardening PRs from the community. Alongside the security focus, the project pushed a new `v0.2.9` nightly build, signaling active preparation for the next stable release. Overall, project health is highly robust, demonstrating fast issue triage and responsive patch development.

## 2. Releases
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)**: Automated build for `v0.2.9-nightly.20260609.46b29a0a`.
  - *Notes*: Intended for testing purposes; may be unstable.
  - *Full Changelog*: Compares `v0.2.9` to `main`.

## 3. Project Progress
Today saw 5 PRs merged/closed, focusing on core bug fixes and documentation:
- **Provider Compatibility**: PR [#2940](https://github.com/sipeed/picoclaw/pull/2940) (omitting deprecated `temperature` for `claude-opus-4-7`) and PR [#2942](https://github.com/sipeed/picoclaw/pull/2942) (fixing canonical model ID for `claude-sonnet`) were closed, resolving critical API 400 errors with Anthropic models.
- **Agent Architecture**: PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) (introducing an internal Agent Collaboration Bus with durable mailboxes and permission-aware routing) was closed, marking a major milestone for multi-agent capabilities.
- **Config Parsing**: PR [#3064](https://github.com/sipeed/picoclaw/pull/3064) added type assertion checks to prevent panics during config migration.
- **Maintenance**: PR [#3086](https://github.com/sipeed/picoclaw/pull/3086) updated documentation/assets (WeChat QR code).

## 4. Community Hot Topics
- **Streaming HTTP Requests**: Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404) (11 comments, 👍 1) remains highly active. Users are heavily requesting native streaming HTTP support for LLM backends via the config file, highlighting a demand for more responsive, real-time token generation outputs.
- **Context Compression Configuration**: PR [#2988](https://github.com/sipeed/picoclaw/pull/2988) is generating discussion as it addresses context compression settings. Users want more granular control over how the agent manages and summarizes context windows (`summarize_token_percent`) before it hits token limits.

## 5. Bugs & Stability
Security vulnerabilities dominated today's bug tracker, but standard stability fixes were also present:
- **Critical - SSRF Bypass Vectors**: 
  - Issue [#3077](https://github.com/sipeed/picoclaw/issues/3077) / Issue [#3074](https://github.com/sipeed/picoclaw/issues/3074): `web_fetch` tool allowed access to private networks via bypass literals (e.g., `198.18.0.0/15` and ISATAP IPv6). *Fix PR*: [#3085](https://github.com/sipeed/picoclaw/pull/3085).
- **High - Gateway & Control Plane Takeover**: 
  - Issue [#3072](https://github.com/sipeed/picoclaw/issues/3072): CSRF in first-run setup. *Fix PR*: [#3083](https://github.com/sipeed/picoclaw/pull/3083) (adds trusted proxy CIDRs).
  - Issue [#3069](https://github.com/sipeed/picoclaw/issues/3069): `allowed_cidrs` bypass via reverse proxy.
- **High - Exec Tool Vulnerabilities**:
  - Issue [#3079](https://github.com/sipeed/picoclaw/issues/3079): Whitelist bypass using `jq` environment disclosure.
  - Issue [#3081](https://github.com/sipeed/picoclaw/issues/3081): Symlink race condition in `cwd`. *Fix PR*: [#3087](https://github.com/sipeed/picoclaw/pull/3087) (hardens workspace relative exec paths).
- **Medium - UI & Memory Bugs**:
  - Issue [#2796](https://github.com/sipeed/picoclaw/issues/2796): Web UI history drops prior user messages. *Fix PR*: [#2990](https://github.com/sipeed/picoclaw/pull/2990).
  - Issue [#3067](https://github.com/sipeed/picoclaw/issues/3067): `dm_scope` setting fails to persist in UI.

## 6. Feature Requests & Roadmap Signals
- **Advanced Inter-agent Communication**: The closure of the Agent Collaboration Bus PR ([#2937](https://github.com/sipeed/picoclaw/pull/2937)) strongly signals that `v0.2.9` will introduce isolated multi-agent routing.
- **Enhanced Protocol Signaling**: Issue [#2984](https://github.com/sipeed/picoclaw/issues/2984) requests an explicit "turn completion" signal for WebSocket clients. This indicates enterprise users are building complex, deterministic external integrations and need clearer state machine signals from the agent.
- **EOL Dependency Replacement**: Issue [#3088](https://github.com/sipeed/picoclaw/issues/3088) requests migrating from unmaintained `libolm` to `vodozemac` for Matrix encryption, likely to be picked up soon given the project's current focus on security hardening.

## 7. User Feedback Summary
Users are heavily utilizing PicoClaw across diverse messaging platforms (Feishu, WeCom, LINE, OneBot, DeltaChat), but this broad integration surface has exposed edge cases in message routing, media fetching, and authentication (e.g., [#3073](https://github.com/sipeed/picoclaw/issues/3073) LINE webhook replays, [#3075](https://github.com/sipeed/picoclaw/issues/3075) auto-loading untrusted `skills/`). 
Pain points primarily revolve around deployment security (e.g., configuring CIDRs safely behind reverse proxies) and model provider updates silently breaking existing configurations (e.g., Anthropic's sudden deprecation of `temperature`). The community is highly engaged in resolving these issues, as seen by rapid PRs addressing the security audit.

## 8. Backlog Watch
- **Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404)** (Created Apr 7): The config-based streaming request feature has been active for months. Maintainer input is needed to approve or scope the proposed solution.
- **PR [#2983](https://github.com/sipeed/picoclaw/pull/2983)** (Created Jun 1): Retry logic for empty LLM HTTP 200 responses. This is a critical edge-case fix that needs review to prevent silent agent failures.
- **PR [#2987](https://github.com/sipeed/picoclaw/pull/2987)** (Created Jun 2): Fix for dropped `tool_calls` during active streaming sessions. This directly impacts agent reliability and should be prioritized for the `v0.2.9` release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-10

## 1. Today's Overview
NanoClaw experienced a massive wave of repository maintenance today, characterized by the bulk closure of 39 pull requests against only 4 remaining open. While no new releases were shipped, this activity suggests a major triage effort by the maintainers to clear a substantial backlog of community contributions and stalled features. The high volume of closed PRs—many dating back to February and March—indicates the team is actively refocusing the project's scope, likely in preparation for a future milestone. Overall, the project's current state is highly active from an administrative perspective, prioritizing stabilization and issue resolution over shipping incremental features.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
The primary progress for June 9, 2026, revolves around extensive backlog triage, with 39 pull requests being closed or merged, alongside two significant new security and documentation PRs opening:

**New & Open Contributions:**
*   **Security Fix ([PR #2722](https://github.com/nanocoai/nanoclaw/pull/2722)):** A critical patch replacing `Math.random()` with `crypto.randomInt` (CSPRNG) for Telegram pairing code generation to prevent predictable code exploits.
*   **Documentation ([PR #2721](https://github.com/nanocoai/nanoclaw/pull/2721)):** Introduction of a tiered documentation system for skill customization, aiming to prevent merge conflicts during updates.

**Closed/Merged Activity:**
The closed PRs span a wide array of features that are now being integrated, declined, or deferred. Notable advancements include:
*   **Agent Observability:** Agent trace logging ([PR #337](https://github.com/nanocoai/nanoclaw/pull/337)) and an observability web UI ([PR #1202](https://github.com/nanocoai/nanoclaw/pull/1202)).
*   **Security & Access Control:** Implementation of a deterministic security policy engine ([PR #1605](https://github.com/nanocoai/nanoclaw/pull/1605)) and approval-gated capabilities ([PR #1245](https://github.com/nanocoai/nanoclaw/pull/1245)).
*   **Architecture & Extensibility:** A plugin system for channels ([PR #1387](https://github.com/nanocoai/nanoclaw/pull/1387)), a skill marketplace/registry ([PR #1309](https://github.com/nanocoai/nanoclaw/pull/1309)), and direct runner mode bypassing Docker ([PR #1285](https://github.com/nanocoai/nanoclaw/pull/1285)).
*   **Web UI & Integrations:** A full WebUI control panel ([PR #212](https://github.com/nanocoai/nanoclaw/pull/212)) and Room API proxy for music-gen/facebook services ([PR #1527](https://github.com/nanocoai/nanoclaw/pull/1527)).

## 4. Community Hot Topics
The most actively discussed item is:
*   **[Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690) - Multi-runtime agent SDK abstraction (👍 3, 4 Comments):** A community proposal to build an abstraction layer allowing different agent SDKs (Claude, Codex, local models) to be installed as modular skills. This highlights a strong underlying community need for **model agnosticism** and flexibility. Users want to avoid vendor lock-in and easily swap out the underlying AI models depending on their specific deployment, cost, or privacy requirements.

## 5. Bugs & Stability
*   **High Severity - Cryptographic Pairing Vulnerability:** Identified in [PR #2722](https://github.com/nanocoai/nanoclaw/pull/2722), NanoClaw's Telegram integration used `Math.random` for pairing codes. Because the first pairer can be promoted to channel owner, this exposed a critical account takeover vector. A fix PR is currently open and awaiting merge.
*   **Low Severity - Model Configurability:** Users reported friction in identifying which specific AI model the agent runner was executing, requiring deep dives into JSONL session files. This was resolved/patched in [PR #1192](https://github.com/nanocoai/nanoclaw/pull/1192), which forces the Claude model to be explicitly defined in the code.

## 6. Feature Requests & Roadmap Signals
Based on the sudden closure of dozens of feature PRs and open issues, the maintainers appear to be aligning the codebase for a significant release (e.g., a v1.0 or v0.9). Key roadmap signals include:
*   **First-Class Extensibility:** The merging/closure of the Skill Marketplace ([PR #1309](https://github.com/nanocoai/nanoclaw/pull/1309)), Plugin System ([PR #1387](https://github.com/nanocoai/nanoclaw/pull/1387)), and updated Customization Docs ([PR #2721](https://github.com/nanocoai/nanoclaw/pull/2721)) suggest the next version will heavily market its modularity.
*   **Developer Experience (DX):** Patches like `/setup-dev` ([PR #1161](https://github.com/nanocoai/nanoclaw/pull/1161)) and build-time version metadata ([PR #1333](https://github.com/nanocoai/nanoclaw/pull/1333)) indicate a maturing project aiming to make local development and debugging easier for open-source contributors.

## 7. User Feedback Summary
*   **Pain Points:** Users operating NanoClaw in environments where Docker is unavailable or too resource-heavy faced significant friction. This is directly addressed by the newly approved Direct Runner mode (`NANOCLAW_DIRECT_RUNNER=1`) from [PR #1285](https://github.com/nanocoai/nanoclaw/pull/1285). Another pain point was the difficulty in debugging agent thoughts/actions, leading to community contributions on prompt tracing and observability web UIs.
*   **Use Cases:** The project is clearly being utilized for complex, multi-platform community management (WhatsApp, Telegram, Slack) with specific needs for custom external integrations (music generation, social media posting) and persistent memory management (loading external markdown seeds).

## 8. Backlog Watch
*   **[PR #212](https://github.com/nanocoai/nanoclaw/pull/212):** A massive community contribution adding a full WebUI control panel. Initially opened in February 2026 and marked as "Blocked/Pending Closure" today. Maintainers should clarify if this is being rejected due to architectural conflicts or if it will be reimplemented natively.
*   **[PR #1084](https://github.com/nanocoai/nanoclaw/pull/1084):** A comprehensive security audit and sandbox system design document. Marked "Needs Review" for months, it requires explicit maintainer feedback to guide the project's container security strategy.
*   **[Issue #1690](https://github.com/nanocoai/nanoclaw/issues/1690):** The multi-runtime SDK abstraction proposal remains open. Given the project's current trajectory toward model integration, maintainer input on the feasibility of this architecture would provide clear direction to the community.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-10

## 1. Today's Overview
The NullClaw project experienced a highly productive day on June 10, 2026, characterized by a strong focus on bug squashing and platform integrations. The community and maintainers successfully closed 4 issues and merged 6 pull requests, indicating a healthy, active development cycle and responsive maintainers. Activity heavily centered on refining agent reliability, fixing Telegram UI interactions, and expanding custom LLM provider support. With 1 issue and 1 PR remaining open, the team is effectively balancing ongoing feature development with critical maintenance. Overall, project momentum is currently very strong and stable.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
Significant forward progress was made today, with 6 PRs merged/closed, tackling core functionality and external provider support:

*   **Cross-Agent Memory ([PR #711](https://github.com/nullclaw/nullclaw/pull/711)):** A massive feature PR adding a deterministic memory event stream. This allows memory synchronization across multiple distinct agent instances, enabling persistent user preferences across different workflows.
*   **Custom Provider Support ([PR #940](https://github.com/nullclaw/nullclaw/pull/940)):** Fixed the `/models` menu to properly query `base_url` endpoints for custom OpenAI-compatible providers, rather than falling back to hardcoded Claude models.
*   **Agent Context Management ([PR #939](https://github.com/nullclaw/nullclaw/pull/939)):** Fixed the `compact_context` flag so agents no longer auto-compact history on every turn, respecting the user's configuration.
*   **Telegram UI ([PR #943](https://github.com/nullclaw/nullclaw/pull/943)):** Resolved a silent chat issue by re-enabling the "typing…" indicator during inline button (callback query) processing.
*   **Redaction Tuning ([PR #945](https://github.com/nullclaw/nullclaw/pull/945)):** Improved the PII redactor by adding an `isDateLike()` guard to prevent system timestamps from being falsely matched and masked as phone numbers.
*   **Provider Ecosystem Expansion ([PR #947](https://github.com/nullclaw/nullclaw/pull/947)):** Added [Evolink](https://evolink.ai) as a first-class OpenAI-compatible provider, giving users access to a multi-model gateway (GPT-5, Gemini, DeepSeek, etc.).

## 4. Community Hot Topics
The most actively discussed topics revolved around multi-model flexibility and scheduling reliability.

*   **OpenAI-Compatible Provider Failures ([Issue #936](https://github.com/nullclaw/nullclaw/issues/936)):** Users are increasingly trying to route NullClaw through custom gateways. The hardcoded fallback bug caused significant friction, highlighting a strong community need for flexible, multi-model routing.
*   **Agent Cron Delivery Reliability ([Issue #941](https://github.com/nullclaw/nullclaw/issues/941)):** The open issue regarding scheduled agent jobs failing to trigger Telegram delivery underscores a high demand for reliable, asynchronous task execution. 

## 5. Bugs & Stability
Several bugs were identified and largely resolved in this cycle, ranked by severity:

1.  **High - Agent Cron Subprocess Failure ([Issue #941](https://github.com/nullclaw/nullclaw/issues/941) - OPEN):** Scheduled `agent` jobs mark themselves as completed but fail to spawn a subprocess, resulting in completely lost Telegram deliveries. *No fix PR is currently available, making this the top stability risk.*
2.  **Medium - Dead Config Flags ([Issue #937](https://github.com/nullclaw/nullclaw/issues/937) - CLOSED):** The `compact_context` flag was parsed but unused, forcing agents to compact history on every turn. *Fixed by [PR #939](https://github.com/nullclaw/nullclaw/pull/939).*
3.  **Medium - PII Over-Redaction ([Issue #944](https://github.com/nullclaw/nullclaw/issues/944) - CLOSED):** The PII redactor falsely flagging standard date/time outputs (e.g., `2026-06-02 20:17`) as phone numbers severely disrupted agent tool outputs. *Fixed by [PR #945](https://github.com/nullclaw/nullclaw/pull/945).*
4.  **Low - Telegram Missing UX Cues ([Issue #942](https://github.com/nullclaw/nullclaw/issues/942) - CLOSED):** Missing typing indicators on inline buttons caused UI confusion. *Fixed by [PR #943](https://github.com/nullclaw/nullclaw/pull/943).*

## 6. Feature Requests & Roadmap Signals
*   **Advanced Tool Filtering:** [PR #946](https://github.com/nullclaw/nullclaw/pull/946) (OPEN) introduces `tool_filter_groups` to separate text-based system prompt tools from native API tool-calling. This signals a shift toward more sophisticated, dynamic context management.
*   **Gateway Integrations:** The merging of [PR #947](https://github.com/nullclaw/nullclaw/pull/947) (Evolink) combined with fixes for custom providers strongly indicate that the upcoming release will focus heavily on multi-model gateway compatibility.
*   *Roadmap Prediction:* The next version will likely feature a refined tool-calling architecture and robust cross-provider support, setting the stage for more complex agentic workflows.

## 7. User Feedback Summary
Users are utilizing NullClaw for heavy, automated Telegram bot integrations and are pushing the limits of multi-model setups. There is notable friction when UI expectations (like typing indicators) or configurations (like `compact_context`) are ignored by the backend. However, users expressed high satisfaction with the rapid turnaround on bugs, particularly regarding the PII redaction edge cases. The core user base clearly values NullClaw as an autonomous scheduler and is reliant on its Telegram delivery pipeline.

## 8. Backlog Watch
The following items require immediate maintainer attention:

*   **[Issue #941](https://github.com/nullclaw/nullclaw/issues/941):** The open cron/agent subprocess bug is critical because it causes silent data loss (missed messages). A fix is urgently needed.
*   **[PR #946](https://github.com/nullclaw/nullclaw/pull/946):** The open `tool_filter_groups` PR is a substantial architectural change. It requires maintainer review to proceed.
*   **[PR #711](https://github.com/nullclaw/nullclaw/pull/711):** Though recently closed, the "cross memory" feature is a massive addition that will likely require immediate follow-up issues for testing, edge cases, and documentation before a stable release.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-10

## 1. Today's Overview
IronClaw experienced a massive spike in development activity over the past 24 hours, indicating a highly healthy and collaborative project ecosystem. A total of 50 pull requests were updated alongside 45 issues, heavily centered around the "Reborn" runtime migration, production cutover readiness, and WebUI v2 parity. Significant progress was made on infrastructure stability, with core contributors merging multiple large PRs to support production deployments, including durable Postgres/libSQL backends and robust OpenAI-compatible API boundaries. 

## 2. Releases
No new releases were published today. However, PR [#3708](https://github.com/nearai/ironclaw/pull/3708) indicates that a substantial release (version `0.29.1` for the main CLI, with breaking changes for `ironclaw_common` and `ironclaw_skills`) is actively being staged and prepared.

## 3. Project Progress
Developers closed or merged 26 PRs, making significant strides in backend infrastructure and tooling:
*   **Production Runtime & Cutover:** PR [#4645](https://github.com/nearai/ironclaw/pull/4645) made the Reborn production runtime launchable, wiring libSQL/Postgres substrates and enforcing explicit production runtime policies.
*   **Subagent Durability:** PR [#4656](https://github.com/nearai/ironclaw/pull/4656) introduced the WU-C2 durable gate resolution store and capacity counter, allowing parent agent runs to survive host restarts.
*   **OpenAI API Compatibility:** PR [#4643](https://github.com/nearai/ironclaw/pull/4643) resolved a major issue where strict-mode LLM providers were rejecting tool calls, fixing compatibility with OpenAI/Codex and Anthropic.
*   **Operator Tooling:** Foundation work for operator command-plane APIs was merged (PR [#4608](https://github.com/nearai/ironclaw/pull/4608)), enabling future setup, diagnostics, and lifecycle APIs.
*   **Attachments & Media:** PR [#4654](https://github.com/nearai/ironclaw/pull/4654) created an extensible attachment format registry, ending the era of silently dropped attachments in Reborn.
*   **Developer Experience:** PR [#4652](https://github.com/nearai/ironclaw/pull/4652) added a `run-reborn-webui.sh` script, vastly simplifying local full-stack testing.

## 4. Community Hot Topics
The most discussed items revolve around enterprise deployment readiness and multi-tenant workflows:
*   **Epic: Reborn Production Wiring ([#3026](https://github.com/nearai/ironclaw/issues/3026)):** With 3 comments, this central epic highlights the community's focus on how the configured production graph is validated and prevented from serving traffic if missing services.
*   **Strict-Mode Provider Breakage ([#4642](https://github.com/nearai/ironclaw/issues/4642)):** Users and devs actively discussed null-for-unset-optionals errors from strict-mode LLMs, indicating a strong need for diverse LLM backend compatibility.
*   **Slack Channel-Routed Agents ([#4625](https://github.com/nearai/ironclaw/issues/4625)):** A highly active feature request for personal and team Slack bots routed through a single IronClaw app, underscoring the enterprise need for centralized multi-tenant messaging agent deployments.
*   **Admin-Shared Tools ([#4628](https://github.com/nearai/ironclaw/issues/4628)):** High demand for admins to provision shared tools/skills across an organization, revealing that multi-user enterprise deployment is currently a major pain point.

## 5. Bugs & Stability
Several critical bugs were identified today, mostly tied to provider integrations and the Reborn migration, though maintainers have rapidly opened fix PRs:
*   **P0: Strict-Mode Provider Validation Failure ([#4642](https://github.com/nearai/ironclaw/issues/4642)):** Reborn's validator rejected `null` parameters from strict-mode LLMs. **Fix:** Already addressed in PR [#4643](https://github.com/nearai/ironclaw/pull/4643).
*   **P1: DeepSeek API Duplicate Model Field ([#4548](https://github.com/nearai/ironclaw/issues/4548)):** Chat completions sent with tools result in a duplicate JSON `model` field, causing HTTP 400 errors from DeepSeek.
*   **P1: Minimax Provider Configuration Failure ([#4587](https://github.com/nearai/ironclaw/issues/4587)):** Secret reading fails upon initialization, making the Minimax provider entirely unusable.
*   **P2: Embeddings Configuration Precedence ([#4649](https://github.com/nearai/ironclaw/pull/4649)):** Fixed five bugs where Bedrock dropped configured DB/TOML models in favor of defaults, and enforced missing batch limits.
*   **P2: Google Calendar Returns Oldest Events ([#4640](https://github.com/nearai/ironclaw/issues/4640)):** The `list_events` tool lacked a `timeMin` bound, returning ancient events. **Fix:** Patched in PR [#4641](https://github.com/nearai/ironclaw/pull/4641).

## 6. Feature Requests & Roadmap Signals
The issue logs signal clear trajectory markers for the upcoming `0.29.1` release:
*   **Omni-Search ([#4647](https://github.com/nearai/ironclaw/issues/4647)):** A requested unified search across threads, skills, extensions, and memory, replacing fragmented frontend-only palettes.
*   **Universal Attachments ([#4644](https://github.com/nearai/ironclaw/issues/4644)):** Wiring the attachment pipeline securely into Reborn across all channels.
*   **CLI Non-Interactive Setup ([#4653](https://github.com/nearai/ironclaw/pull/4653)):** Adding `--secret` flags to allow automated CI/CD provisioning.
*   **Trace Commons Onboarding ([#4559](https://github.com/nearai/ironclaw/pull/4559)):** Allowing users to onboard via an invite link pasted directly into the chat, streamlining telemetry setup.
*   **WebUI v2 E2E Smoke Tests ([#4632](https://github.com/nearai/ironclaw/issues/4632)):** A massive epic to implement browser-driven full-stack testing, showing the team's commitment to stabilizing the WebChat v2 release.

## 7. User Feedback Summary
Users are enthusiastically adopting the Reborn stack but encountering friction with specialized LLM providers and enterprise workflows. The inability to easily provision tools for teams (requiring per-user setups) and the lack of a unified search feature are notable sources of dissatisfaction. Conversely, the rapid patching of provider compatibility issues (like the strict-mode tool calls) and the introduction of non-interactive CLI flags have been well-received, indicating the project is highly responsive to its power-user base.

## 8. Backlog Watch
*   **Security Hardening Parity ([#88](https://github.com/nearai/ironclaw/issues/88)):** Open since February 2026, this issue tracks device pairing, elevated mode, safe bins, and media URL validation. It needs maintainer prioritization as WebUI v2 approaches beta.
*   **Production Cutover Closeout ([#4621](https://github.com/nearai/ironclaw/issues/4621)):** Needs immediate owner focus to finalize rollback capabilities and default-off proofs before the next release candidate is cut.
*   **Reborn/Crabshack Legacy Deletion ([#4629](https://github.com/nearai/ironclaw/issues/4629)):** Engineers are currently reasoning about two overlapping runtime paths; this high-risk refactoring task needs to be unblocked to prevent long-term tech debt.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the GitHub data provided.

# LobsterAI Project Digest (2026-06-10)

## 1. Today's Overview
LobsterAI is demonstrating highly active and steady development, focusing on refining its multi-agent "Cowork" capabilities and overall user experience. In the last 24 hours, the project processed 5 Pull Requests (merging/closing 4) and attended to 2 new community-submitted issues. The core development focus is currently split between enhancing desktop application notifications for background task execution and implementing data backup/migration features. Overall project health appears robust, with maintainers actively merging code and resolving UI/UX bugs on a daily basis.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Today's development momentum was strong, with maintainers successfully merging or closing 4 PRs, advancing several key features:
*   **Task Completion Notifications (Merged/Closed):** PR [#2130](https://github.com/netease-youdao/LobsterAI/pull/2130) and PR [#2134](https://github.com/netease-youdao/LobsterAI/pull/2134) successfully introduced privacy-safe task completion reminders for Cowork sessions. This includes system notifications that withhold sensitive prompt data, macOS Dock badge counts, and Windows taskbar overlays. It also ensures the app window restores correctly when a notification is clicked.
*   **Data Backup & Migration (Closed):** PR [#2136](https://github.com/netease-youdao/LobsterAI/pull/2136) and PR [#2135](https://github.com/netease-youdao/LobsterAI/pull/2135) addressed data backup and migration capabilities, though it appears data backup was temporarily closed or rolled back via a chore commit, suggesting a staged rollout or pending fixes.
*   **UI Fixes (Open):** PR [#2133](https://github.com/netease-youdao/LobsterAI/pull/2133) is currently open to fix bugs related to exporting data and code copying within the renderer. 

## 4. Community Hot Topics
The most actively discussed topics revolve around expanding agent interoperability and complex task execution:
*   **Cross-model sub-task collaboration ([Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132)):** A user detailed a sophisticated use case where a primary model (M3) handles planning and supervision, while delegating execution to a faster sub-model (DeepSeek). The user provided an in-depth root cause analysis of current communication bottlenecks between cross-model agents and proposed an optimization plan where sub-agents proactively notify the main agent upon completion or roadblocks. 
*   **Third-party Agent Support ([Issue #2131](https://github.com/netease-youdao/LobsterAI/issues/2131)):** A user explicitly requested support for the "Hermes" agent framework, indicating community desire for broader compatibility with external agent ecosystems.

## 5. Bugs & Stability
*   **Medium Severity - Cross-model Agent State Loss:** As detailed in [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132), users are experiencing dropped states during complex multi-agent workflows. Specifically, gateway-level function calls (e.g., `call_function_gblu0nmqpcej_1`) are getting lost between sessions and sub-agent registries when different models are chained together. *No fix PR is available yet.*
*   **Low Severity - UI/UX Glitches:** Code copying and data exporting mechanisms are currently suffering from bugs. A fix is already underway in the open PR [#2133](https://github.com/netease-youdao/LobsterAI/pull/2133).

## 6. Feature Requests & Roadmap Signals
Based on today's community input, the following features are strong signals for the project's near-term roadmap:
*   **Asynchronous Cross-Model Communication:** Implementing a standardized notification protocol allowing different AI models to actively report task completion or bottlenecks back to the main orchestrating agent (as requested in Issue #2132).
*   **Expanded Agent Framework Integrations:** Adding native support for frameworks like Hermes (Issue #2131).
*   *Prediction:* Given the recent heavy focus on background execution (PR #2130, #2134), the next version will likely be labeled as a "Productivity & Multi-Model Orchestration" update, bridging the gap between UI background tasks and complex backend agent meshes.

## 7. User Feedback Summary
The user base is highly technical and is actively pushing LobsterAI into advanced, heavy-duty multi-agent workflows. Satisfaction with the UI and core features is high, but friction exists around state management when chaining different models together. Users want modularity (mixing a strong planner model with a fast executor model) and expect the client-side application (Renderer/Main window) to seamlessly handle asynchronous background tasks without losing session context.

## 8. Backlog Watch
*   [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132) requires maintainer attention. It contains a highly detailed, diagnostic root-cause analysis of the cross-model session bug, complete with proposed architectural solutions that warrant a response from the core engineering team.
*   [Issue #2131](https://github.com/netease-youdao/LobsterAI/issues/2131) remains unaddressed regarding the future integration timeline for the Hermes agent.

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

# CoPaw Project Digest: 2026-06-10

## 1. Today's Overview
CoPaw is exhibiting exceptionally high project velocity and strong community health as of June 10, 2026. The repository saw a robust 34 Issues updated (16 open, 18 closed) and 34 Pull Requests updated (18 open, 16 merged), indicating a highly active development cycle. The maintainers successfully shipped version `1.1.11-beta.2`, demonstrating rapid iteration on browser automation features and bug fixes. A significant portion of the community dialogue revolves around UI/UX friction (especially on the Windows Desktop version), integrations with third-party LLM APIs, and strategic architectural shifts toward AgentScope 2.0. Overall, the project is in a state of hyper-active growth, balancing feature expansion with aggressive bug triaging.

## 2. Releases
**Version `1.1.11-beta.2`** was released today.
*   **New Features:** 
    *   Added page coordinate click support to `browser_control` ([PR #4905](https://github.com/agentscope-ai/QwenPaw/pull/4905)).
*   **Bug Fixes:** 
    *   Introduced CDP timeout parameter and browser profile isolation to fix cross-browser switching issues ([PR #x](https://github.com/agentscope-ai/QwenPaw/pull/4905)).
*   **Migration Notes:** No explicit breaking changes in this patch, though users utilizing Docker or Windows Desktop environments are encouraged to test the browser isolation updates.

## 3. Project Progress
Today's merged/closed PRs reveal a strong focus on platform stability, security, and developer experience:
*   **Context & Compaction:** Fixed `/compact` and auto-compaction ignoring `max_input_length` when `active_model` is unset ([PR #5021](https://github.com/agentscope-ai/QwenPaw/pull/5021)).
*   **Security:** Merged a critical fix restricting file previews to `WORKING_DIR` to prevent path traversal ([PR #4981](https://github.com/agentscope-ai/QwenPaw/pull/4981)).
*   **Provider Enhancements:** Shipped zero-config free models and one-click OAuth authentication ([PR #5049](https://github.com/agentscope-ai/QwenPaw/pull/5049)).
*   **Desktop Environment:** Fixed an unawaited coroutine bug in agent broadcasting ([PR #5048](https://github.com/agentscope-ai/QwenPaw/pull/5048)). 
*   **E2E Testing:** Completed a fully functional E2E Playwright CI pipeline with backend coverage ([PR #5054](https://github.com/agentscope-ai/QwenPaw/pull/5054)).

## 4. Community Hot Topics
The most engaging community discussions highlight a desire for advanced cognitive architectures and frustration with API-specific bugs:
*   **[Issue #5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) (👍 3, 💬 10):** A highly upvoted proposal suggesting CoPaw adopt a "Learning Loop" similar to the trending Hermes Agent, allowing the AI to autonomously create and iterate on skills.
*   **[Issue #5003](https://github.com/agentscope-ai/QwenPaw/issues/5003) (💬 8):** Users are experiencing persistent freezing when using Alibaba's coding plan `qwen3.7-plus`, highlighting friction in the provider's integration.
*   **[Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) (👍 2, 💬 7):** A breaking change announcement to migrate the backend from AgentScope 1.x to 2.0. This is generating significant discussion as it shapes the platform's future runtime model.

## 5. Bugs & Stability
Several critical stability issues were reported, particularly concerning Windows Desktop/Tauri users and strict API providers:
*   **Windows Desktop CPU Spike:** [Issue #5015](https://github.com/agentscope-ai/QwenPaw/issues/5015) reports severe frontend lag and CPU spikes during task execution. Users noted the Pet feature is highly unstable ([Issue #5029](https://github.com/agentscope-ai/QwenPaw/issues/5029)).
*   **MCP/API Compatibility:** Tool names containing dots (e.g., `pat.batch_plan`) fail strict regex validation on OpenAI and DeepSeek APIs ([Issue #5045](https://github.com/agentscope-ai/QwenPaw/issues/5045), [Issue #5034](https://github.com/agentscope-ai/QwenPaw/issues/5034)).
*   **Desktop Path Lengths:** A regression where session filenames duplicate IDs, causing Windows `MAX_PATH` overflow errors ([Issue #4988](https://github.com/agentscope-ai/QwenPaw/issues/4988)). *A fix is currently pending in [PR #5036](https://github.com/agentscope-ai/QwenPaw/pull/5036).*
*   **Streaming UI Crash:** Severe client-side system freezes when receiving long streaming outputs via remote browser access ([Issue #4792](https://github.com/agentscope-ai/QwenPaw/issues/4792)).

## 6. Feature Requests & Roadmap Signals
User requests today signal a strong demand for expanded memory, vision, and observability capabilities:
*   **Self-Evolving Memory:** [Issue #4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) (👍 1) requests a hierarchical, self-evolving memory system. This aligns directly with the recently merged [PR #4857](https://github.com/agentscope-ai/QwenPaw/pull/4857), meaning this feature will likely appear in `v1.1.12` or `v1.2.0`.
*   **Vision Model Fallback:** [Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) proposes routing images to a dedicated visual model when the primary LLM lacks vision capabilities.
*   **Observability Integration:** Users are asking for native Langfuse or OpenTelemetry support for token usage, latency breakdown, and tracing ([Issue #5009](https://github.com/agentscope-ai/QwenPaw/issues/5009)).
*   **Sandboxing:** Requests for OpenSandbox integration to safely execute untrusted code ([Issue #4951](https://github.com/agentscope-ai/QwenPaw/issues/4951)) were quickly addressed via [PR #5043](https://github.com/agentscope-ai/QwenPaw/pull/5043).

## 7. User Feedback Summary
The general consensus is that CoPaw provides a superior localized, out-of-the-box experience for the Chinese market compared to alternatives. However, user satisfaction is currently being tested by frontend performance bottlenecks. Desktop users are expressing deep frustration with UI stuttering and application hangs. Additionally, users utilizing local deployments (like `vLLM` with Qwen-3.6) feel that recent updates (v1.1.9+) have introduced regressions in API connectivity. Finally, the hardcoded limitations and rigid tool-calling structures are causing friction for power models like GPT-5.x and DeepSeek.

## 8. Backlog Watch
Maintainers should prioritize reviewing the following open items to prevent degradation of user trust:
*   **[PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669):** The Tauri auto-updater PR has been open since May 25. Given the severe Windows Desktop bugs reported today, merging and stabilizing this update mechanism is critical.
*   **[PR #5033](https://github.com/agentscope-ai/QwenPaw/pull/5033):** Awaiting review for the CloudPaw/AgentHub A2A capabilities plugin.
*   **[Issue #2777](https://github.com/agentscope-ai/QwenPaw/issues/2777):** Open since April, GPT-5.x models are still failing due to hardcoded model lists and `max_tokens` parameter errors. This needs immediate backend attention.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-10

## 1. Today's Overview
ZeroClaw is currently experiencing very high community engagement, operating in an active development and issue-reporting phase, likely preceding a stable release for the recent `v0.8.0-beta-1`. Activity over the past 24 hours is remarkably high, with 50 active issues and 50 active pull requests updated. The project's current focus is clearly centered around hardening the runtime, refining the new gateway/web UI (referred to as `zerocode`), and expanding multi-channel capabilities. However, the high ratio of open items to closed/merged items (49 open vs 1 closed in both categories) suggests that maintainers are currently facing a significant triage and review bottleneck. 

## 2. Releases
There were no new releases recorded today. The project is iterating heavily on features and bug fixes, likely building toward the stabilization of the `v0.8.0` release candidate.

## 3. Project Progress
Only one PR was closed/merged today, and no issues were resolved. Active development is heavily focused on channel integrations, gateway security, and tool management:
* **Channel Ecosystem Expansion:** Huge batches of new channels are being submitted by contributor `theonlyhennygod`, including 5 SMS channels ([PR #7265](https://github.com/zeroclaw-labs/zeroclaw/pull/7265)), 4 chat/social channels ([PR #7270](https://github.com/zeroclaw-labs/zeroclaw/pull/7270)), and documentation for these features ([PR #7272](https://github.com/zeroclaw-labs/zeroclaw/pull/7272), [PR #7273](https://github.com/zeroclaw-labs/zeroclaw/pull/7273)).
* **Web Gateway & UI:** Work continues on the dashboard with management tabs for MCP, Skills, and Providers ([PR #7229](https://github.com/zeroclaw-labs/zeroclaw/pull/7229)), cron task management updates ([PR #7417](https://github.com/zeroclaw-labs/zeroclaw/pull/7417)), and remote admin reload capabilities ([PR #7344](https://github.com/zeroclaw-labs/zeroclaw/pull/7344)).
* **Security & Runtime Fixes:** A partial fix for gateway token revocation on device deletion was submitted ([PR #7243](https://github.com/zeroclaw-labs/zeroclaw/pull/7243)), alongside fixes for runtime cost tracking ([PR #7425](https://github.com/zeroclaw-labs/zeroclaw/pull/7425)) and vision routing loops ([PR #7345](https://github.com/zeroclaw-labs/zeroclaw/pull/7345)).

## 4. Community Hot Topics
The most actively discussed items revolve around system architecture, provider handling, and memory prioritization:
* **Unifying Agent Turn Engines ([Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)):** A new RFC discussing the unification of the three different agent turn loop implementations. This indicates the community and maintainers are pushing for a major architectural refactor to ensure safer and more consistent tool execution.
* **Provider Architecture Fragmentation ([Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937)):** With 10 comments, users and contributors are heavily discussing the need to unify how `reqwest` clients and model configurations are handled across different providers to reduce code duplication.
* **Memory Overriding Current Prompts ([Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)):** Users note that the agent places too much emphasis on historical memory (especially during cron jobs), ignoring current system prompts. This highlights a core LLM orchestration challenge.
* **Agent Awareness of Cron Capabilities ([Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)):** The most commented issue (12 comments) is a bug where ZeroClaw fails to recognize its own `zeroclaw cron` tooling when asked by the user to schedule a task.

## 5. Bugs & Stability
Stability is currently a major concern for users running the beta, especially concerning custom providers and the new web dashboard:
* **S1 - Gateway SPA Fallback Breaking Dashboard ([Issue #6862](https://github.com/zeroclaw-labs/zeroclaw/issues/6862)):** Unimplemented `/api/*` routes serve `index.html` instead of 404 JSON, crashing the dashboard. *Status: Accepted.*
* **S1 - Loss of User Messages with Custom Providers ([Issue #6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)):** Severe bug where single/multi-turn conversations drop user messages when using OpenAI-compatible providers. *Status: Accepted.*
* **S1 - Telegram Tools Not Firing ([Issue #6646](https://github.com/zeroclaw-labs/zeroclaw/issues/6646)):** Web search and fetch tools fail to trigger via Telegram. A fix is currently proposed in [PR #7438](https://github.com/zeroclaw-labs/zeroclaw/pull/7438), which corrects the delivery prompt that inadvertently discouraged tool use.
* **S1 - Duplicate Cron Execution ([Issue #6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037)):** Cron jobs trigger repeatedly if their execution time exceeds the scheduler poll interval. *Status: In Progress.*
* **UI Bugs in TUI (`zerocode`):** Multiple S2/S3 bugs reported by `Audacity88` regarding dark themes inheriting unreadable text ([Issue #7377](https://github.com/zeroclaw-labs/zeroclaw/issues/7377)) and error states being hidden ([Issue #7376](https://github.com/zeroclaw-labs/zeroclaw/issues/7376)).

## 6. Feature Requests & Roadmap Signals
Several significant feature requests and RFCs signal the roadmap for ZeroClaw's evolution into an enterprise-ready agent:
* **Advanced Observability ([Issue #7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)):** An RFC to introduce OpenTelemetry trace correlation and rich events. This is crucial for production debugging of agent loops.
* **Process-Memory Limits for Subprocesses ([Issue #6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)):** Limiting memory on shell/skill tool subprocesses to prevent container OOM kills. Expect this to be prioritized for `v0.8.0` stable.
* **Webhook Routing by Alias ([Issue #7410](https://github.com/zeroclaw-labs/zeroclaw/issues/7410) & [PR #7367](https://github.com/zeroclaw-labs/zeroclaw/pull/7367)):** Transitioning webhook signing secrets to be read dynamically rather than cached at startup, enabling better multi-instance support.

## 7. User Feedback Summary
Users are stress-testing ZeroClaw in multi-provider and multi-channel setups. A clear pain point is the friction in setting up custom/self-hosted models (OpenAI-compatible) and getting them to reliably use tools, as seen in the Telegram/web-search bug. Furthermore, users heavily rely on ZeroClaw for scheduled automation (cron), but current memory-weighting bugs make the agent hallucinate or ignore instructions during these automated runs. On the positive side, the rapid rollout of diverse channels (WhatsApp, Lark/Feishu, Mastodon, SMS) is highly appreciated, though the community expresses a desire for more uniform configuration UX across these interfaces.

## 8. Backlog Watch
* **High-Priority Security Reviews Needed:** Several security-related PRs and issues need maintainer eyes, notably the token revocation fix ([PR #7243](https://github.com/zeroclaw-labs/zeroclaw/pull/7243)) and the MCP tools restriction gap ([Issue #6876](https://github.com/zeroclaw-labs/zeroclaw/issues/6876)).
* **Architectural Bottlenecks:** The RFC to unify the three agent turn loops ([Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)) needs maintainer feedback, as it blocks deeper runtime bug fixes.
* **Stale `needs-author-action`:** Many of the large feature PRs (e.g., integrations batch [PR #7278](https://github.com/zeroclaw-labs/zeroclaw/pull/7278) and channel expansions) are currently sitting with `needs-author-action` labels. Breaking this logjam will be necessary to clear the 50 open PRs.

</details>