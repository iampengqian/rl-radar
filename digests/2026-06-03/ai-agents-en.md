# OpenClaw Ecosystem Digest 2026-06-03

> Issues: 464 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-02 22:38 UTC

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

# OpenClaw Project Digest — 2026-06-03

## 1. Today's Overview
OpenClaw is currently experiencing a period of high community engagement and intensive debugging, characterized by massive issue and pull request turnover (464 issues and 500 PRs updated in the last 24 hours). Despite the high velocity of PR submissions, the ratio of open to merged/closed items (389 open vs. 111 closed PRs) indicates that maintainers are aggressively reviewing and testing community contributions before merging. With 0 new releases published today, the project is in a heavy stabilization phase, actively addressing recent regressions from the `v2026.5.x` updates. The maintainers and contributors are highly focused on core infrastructure, specifically session management, message delivery reliability, and multi-model provider support.

## 2. Releases
No new releases were published today. The project's release cadence appears paused while critical infrastructure PRs and bug fixes undergo rigorous testing and proof-of-concept verification. The focus remains on stabilizing the `v2026.5.x` line.

## 3. Project Progress
Development activity today was heavily tilted toward fixing message delivery failures, refactoring authentication, and hardening gateway performance. Notable closed/merged PRs and active advancements include:
*   **Gateway Hot-Mode Restart Fix:** PR [#89517](https://github.com/openclaw/openclaw/pull/89517) addressed a critical configuration hole where hot-reloads incorrectly bypassed restarts, which was blocking automated config deployments.
*   **Channel Reliability:** Several PRs targeted invisible/dropped messages, notably PR [#88070](https://github.com/openclaw/openclaw/pull/88070) which reset progress draft gates on start rejections, and PR [#89536](https://github.com/openclaw/openclaw/pull/89536) which handled Google Chat media upload 403s gracefully. 
*   **Cron Execution Cleanup:** PR [#83933](https://github.com/openclaw/openclaw/pull/83933) fixed manual cron runs that were accidentally deleting one-shot scheduled jobs.
*   **Security Tightening:** PR [#89307](https://github.com/openclaw/openclaw/pull/89307) successfully removed the dangerous `dangerouslyForceUnsafeInstall` gateway override, and PR [#89255](https://github.com/openclaw/openclaw/pull/89255) began integrating HashiCorp Vault for robust secret referencing.
*   **Tool Schema Normalization:** PR [#89624](https://github.com/openclaw/openclaw/pull/89624) and [#89622](https://github.com/openclaw/openclaw/pull/89622) fixed crashes related to malformed Anthropic/Ollama tool schemas.

## 4. Community Hot Topics
The community is highly active, with most discussions revolving around multi-agent session management and the stability of various AI model providers.
*   **SQLite Migration Architecture:** Issue [#88838](https://github.com/openclaw/openclaw/issues/88838) (17 comments) sparked a deep architectural discussion on migrating core session/transcript runtimes to SQLite via a "branch-by-abstraction seam" to avoid risky monolithic rewrites.
*   **Codex Regression Instability:** A massive cluster of issues (e.g., Issue [#87650](https://github.com/openclaw/openclaw/issues/87650) with 5 comments and 4 👍, and Issue [#88312](https://github.com/openclaw/openclaw/issues/88312) with 10 comments) details how recent upgrades broke OpenAI Codex integrations, resulting in turn-completion stalls, broken OAuth, and mismatched fallback routing.
*   **Private Network Fetching:** Issue [#39604](https://github.com/openclaw/openclaw/issues/39604) (13 comments, 9 👍) requested an opt-in configuration to allow `web_fetch` to access private networks (localhost/internal IPs), revealing strong enterprise/self-hosting user demand for internal tooling capabilities.
*   **Android Node Data Loss:** Issue [#79552](https://github.com/openclaw/openclaw/issues/79552) (5 comments) highlighted a WebSocket race condition on Android causing dropped notification events, reflecting growing mobile usage.

## 5. Bugs & Stability
Stability is the primary concern today, with severe regressions reported across Windows UI, Telegram, and multi-model providers.
*   **P1 - Windows UI Rendering Regression:** Issue [#67035](https://github.com/openclaw/openclaw/issues/67035) reports that the 2026.4.14 update severely broke the web dashboard on Windows—swallowing input text and hiding streamed replies until a manual refresh.
*   **P1 - Telegram Duplicate Messages:** Issue [#86519](https://github.com/openclaw/openclaw/issues/86519) details a regression where Telegram agents send identical replies 2-10x per user message. A fix is currently being validated in PR [#89039](https://github.com/openclaw/openclaw/pull/89039) which addresses session write-lock race conditions.
*   **P1 - Gateway OOM:** Issue [#55334](https://github.com/openclaw/openclaw/issues/55334) flags a critical memory leak where `sessions.json` grows unboundedly (~50-100 MB/min) duplicating `skillsSnapshot` until the gateway is OOM-killed. 
*   **P1 - Agent-to-Agent Communication Failure:** Issue [#52875](https://github.com/openclaw/openclaw/issues/52875) (21 comments) notes that upgrading to March's release broke `session_send` across agents, causing state losses. 
*   **P1 - Memory Core Silent Deletion:** Issue [#84882](https://github.com/openclaw/openclaw/issues/84882) reveals a terrifying bug where the "Dreaming" pipeline silently deletes daily memory files (`memory/YYYY-MM-DD.md`). 

## 6. Feature Requests & Roadmap Signals
Several highly-upvoted feature requests provide clear signals for the project's next roadmap items:
*   **Private Network Access:** Issue [#39604](https://github.com/openclaw/openclaw/issues/39604)'s request for `tools.web.fetch.allowPrivateNetwork` is highly requested (9 👍) and likely to be merged soon given the enterprise self-hosting trend.
*   **WebChat UI Optimization:** Issue [#84216](https://github.com/openclaw/openclaw/issues/84216) requests a dropdown to minimize the "Recent sessions" pane in the left-hand UI menu to save vertical screen space.
*   **Atomic Chat Local Provider:** PR [#89618](https://github.com/openclaw/openclaw/pull/89618) proposes adding Atomic Chat as a bundled local provider for OpenAI-compatible local LLMs, showing a strategic push toward seamless local/edge AI execution.
*   **Pre-Auth Access for Blocked DMs:** PR [#89569](https://github.com/openclaw/openclaw/pull/89569) introduces a silent access-request workflow for Telegram/WhatsApp, improving the UX for unauthorized users attempting to interact with the agent.

## 7. User Feedback Summary
User sentiment is a mix of excitement for the platform's advanced capabilities (like Realtime Talk and ACP dispatching) and deep frustration with recent deployment stability. A major pain point is **provider complexity**, specifically around OpenAI's Codex/Copilot routing and OAuth token refreshing (e.g., Issue [#84252](https://github.com/openclaw/openclaw/issues/84252) where CLI tools falsely report healthy states while runtime calls fail). Users deploying multi-agent setups via Telegram and Feishu (Issues [#86519](https://github.com/openclaw/openclaw/issues/86519), [#88234](https://github.com/openclaw/openclaw/issues/88234)) report intermittent message duplication and dispatch crashes, making production deployment difficult. However, the community response is highly collaborative, with many users providing detailed network logs, stack traces, and even filing issues on behalf of their AI agents (e.g., Issue [#86047](https://github.com/openclaw/openclaw/issues/86047)).

## 8. Backlog Watch
Several critical issues remain open and urgently need maintainer attention, particularly those tagged with high-impact metrics and security flags:
*   **ACP Parent Session Stalls:** Issue [#52249](https://github.com/openclaw/openclaw/issues/52249) (opened March 22) still causes parent agents to freeze until UI refresh when waiting on child completion.
*   **`apply_patch` Policy Stripping:** Issue [#45269](https://github.com/openclaw/openclaw/issues/45269) blocks coding workflows because the internal tool-policy pipeline incorrectly flags the built-in `apply_patch` tool as a plugin, stripping its permissions.
*   **Ollama/Local Agents Ignoring Context:** Issue [#85773](https://github.com/openclaw/openclaw/issues/85773) notes that after recent reinstalls, agents default to generic behavior and completely ignore their workspace/skill files, breaking core functionality for local AI users.
*   **Anthropic Cache Invalidation:** Issue [#86063](https://github.com/openclaw/openclaw/issues/86063) points out that OpenClaw accidentally invalidates Anthropic's prompt cache on every turn, significantly increasing latency and token costs for Claude users.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from 2026-06-03.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by intense development velocity, with projects racing to support frontier multi-modal models while stabilizing core infrastructures. A pronounced shift is occurring from single-agent executions toward complex multi-agent orchestration, fleet management, and enterprise-grade security. Projects are heavily focused on extending platform integrations (desktop, IM platforms, and IoT) while navigating frequent breaking changes from upstream LLM providers. Overall, the landscape is maturing rapidly, prioritizing production readiness, observability, and strict safety guardrails.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Health Score | Assessment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 464 updated | 500 updated (111 closed) | None | **High** | Aggressive stabilization; scaling pains. |
| **NanoBot** | High (Fast resolution) | 27 updated (18 closed) | None | **Very High** | Healthy iteration; fast bug resolution. |
| **Hermes Agent**| 50 updated | 50 updated (3 closed) | None | **Moderate** | Rapid backlog accumulation; needs triage. |
| **PicoClaw** | 3 active | 14 updated (5 merged) | `v0.2.9-nightly` | **High** | Focused bug-squashing; high velocity. |
| **NanoClaw** | 1 active | 4 merged | None | **Stable** | Quiet, focused security hardening. |
| **NullClaw** | 1 active | 1 active | None | **Stable/Maint** | Low activity; targeted safety fixes. |
| **IronClaw** | 34 updated | 50 updated (31 merged) | None | **Very High** | Massive architectural overhaul ("Reborn"). |
| **LobsterAI** | 0 active | 47 merged | None | **High** | Feature freeze; staging for major release. |
| **CoPaw** | 48 active | 32 active | `v1.1.11b1` pre | **High** | Major architectural migration & security audit. |
| **ZeroClaw** | 50 active | 50 active (17 merged) | `v0.8.0-beta-2` | **Moderate** | High momentum; navigating early-beta scaling pains. |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | None | **Dormant** | No activity. |

## 3. OpenClaw's Position
*   **Advantages:** As the core reference implementation, OpenClaw serves as the bleeding-edge standard for complex agentic capabilities, evidenced by its massive daily volume of issues and PRs. It is pioneering advanced features like session management, multi-agent ACP dispatching, and local/edge AI execution.
*   **Technical Approach:** OpenClaw is currently bearing the brunt of complex integration bugs (e.g., SQLite migration seams, OIDC/OAuth routing). Unlike lightweight wrappers, it attempts deep orchestration, which currently places it in a necessary stabilization phase to resolve critical OOM and memory pipeline bugs.
*   **Community Size:** OpenClaw possesses the largest and most active community by sheer volume (approaching 1,000 daily updates). However, its ratio of open to merged PRs indicates maintainers are a bottleneck compared to highly efficient smaller cores like NanoBot or PicoClaw.

## 4. Shared Technical Focus Areas
*   **Security & Sandboxing (NanoClaw, CoPaw, ZeroClaw, IronClaw):** A consensus is forming around strict capability safety. ZeroClaw is implementing air-gapped enclaves; NanoClaw patched OS command injection; IronClaw is building fail-closed injection scans for sub-agents; and CoPaw recently underwent a comprehensive community security audit. 
*   **Provider Compatibility & Streaming (All Active Projects):** Rapid API changes from providers (especially Anthropic, OpenAI, DeepSeek, and Qwen) are causing severe friction. Projects are actively issuing patches for dropped `reasoning_content`, deprecated `temperature` parameters (IronClaw, PicoClaw), and strict tool-call pairing compliance (NanoBot, OpenClaw).
*   **Multi-Agent Orchestration (OpenClaw, Hermes Agent, CoPaw, IronClaw):** Single-agent execution is no longer sufficient. Communities are requesting multi-model routing, `spawn_subagent` capabilities with isolated context, and "council" deliberation features. 
*   **Context & Memory Management (OpenClaw, NanoBot, CoPaw, Hermes Agent):** Managing 1M+ context windows is a universal pain point. Projects are prioritizing context compaction, DAG-based compression, and temporal memory hygiene (e.g., Mem0 integration) to optimize token costs and prevent hallucinations.

## 5. Differentiation Analysis
*   **Channel & Social Integration:** LobsterAI, ZeroClaw, and CoPaw differentiate by focusing heavily on enterprise and social IM bots (DingTalk, Feishu, WeChat, QQ), treating the AI as a backend service rather than just a standalone app.
*   **Desktop vs. Hosted UI:** Hermes Agent and CoPaw are deeply invested in Desktop clients (Tauri/Electron), whereas IronClaw, OpenClaw, and LobsterAI are prioritizing advanced WebUIs and headless/VPS deployments. 
*   **Extensibility & Plugin Systems:** CoPaw, NanoClaw, and IronClaw are building robust plugin architectures. CoPaw and IronClaw are specifically pushing WASM and host-side hook systems (`onStartup`/`onShutdown`) for third-party developers.
*   **Architecture & Hardware:** ZeroClaw is uniquely targeting IoT/homelab enthusiasts with smartroom device tools and TUI interfaces, while NanoBot focuses heavily on seamless WebUI and local RAG integrations.

## 6. Community Momentum & Maturity
*   **Rapid Iteration (Beta Phase):** IronClaw (merging 31 PRs for its "Reborn" engine) and ZeroClaw (pushing v0.8.0-beta-2) show massive momentum but are currently accruing high-severity bugs typical of fast-moving beta cycles.
*   **Stabilizing & Maturing:** LobsterAI and OpenClaw are in heavy stabilization phases. LobsterAI is silently staging a major release via massive merges, while OpenClaw is actively preventing regressions ahead of its next version.
*   **Highly Responsive / Healthy:** NanoBot and PicoClaw demonstrate ideal open-source health—fast response times to critical bugs, focused architectural improvements, and immediate merging of community fixes. 

## 7. Trend Signals
1.  **Response Sanitization is Critical:** As agents utilize deep reasoning, raw cognitive outputs (XML tags, `<thinking>` blocks, tool transcripts) are leaking into user-facing channels. Robust response sanitization layers (ZeroClaw, Hermes Agent) will become a mandatory feature for production agents.
2.  **Token Cost Optimization:** With the rise of massive context models, communities are demanding "on-demand loading" for system prompts and aggressive cache-miss optimization (CoPaw, NanoBot). Agentic frameworks must become highly efficient token managers.
3.  **Fleet and Remote Management:** Users are pushing back against siloed local deployments. Strong demand exists for decoupled UIs that connect to remote headless instances (Hermes Agent) and centralized fleet daemons (ZeroClaw), signaling an shift toward professional, scalable IT deployments.
4.  **Context-Aware Privacy Filters:** Overly broad PII redaction is breaking agent functionality (NullClaw). Agent ecosystems will need heuristic-based redaction capable of distinguishing between user PII and standard system outputs (like IP addresses or datetimes).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-03

## 1. Today's Overview
NanoBot is exhibiting **highly active and healthy** development dynamics today, maintaining a strong merge rate with 18 out of 27 recent pull requests closed or merged. The project continues to evolve rapidly across its multi-channel architecture, WebUI, and AI agent capabilities. Current development is heavily focused on polishing the user interface (specifically the WebUI), expanding messaging channel support, and hardening core agent behaviors like memory management and tool offloading. High engagement from both maintainers and community contributors indicates a collaborative and responsive open-source ecosystem.

## 2. Releases
There have been **no new releases** recorded in the last 24 hours.

## 3. Project Progress
Today's progress is marked by significant architectural improvements and feature expansions, heavily driven by core contributor `chengyongru`. Key merged/closed PRs include:
*   **Channel Expansions:** Added file attachment support to the email channel ([PR #4162](https://github.com/HKUDS/nanobot/pull/4162)), and merged the highly-anticipated Napcat (QQ) channel for OneBot v11 protocol support ([PR #4146](https://github.com/HKUDS/nanobot/pull/4146)).
*   **Core Agent Hardening:** Fixed a critical `read_file` offload loop that caused recovery failures ([PR #4155](https://github.com/HKUDS/nanobot/pull/4155)), and integrated lightweight RAG for memory retrieval using local embeddings ([PR #4109](https://github.com/HKUDS/nanobot/pull/4109)).
*   **WebUI Overhaul:** Resolved startup wait bounds ([PR #4157](https://github.com/HKUDS/nanobot/pull/4157)), fixed sidebar chat sorting ([PR #4151](https://github.com/HKUDS/nanobot/pull/4151)), fixed location routing on refresh ([PR #4150](https://github.com/HKUDS/nanobot/pull/4150)), added clipboard fallback support ([PR #4149](https://github.com/HKUDS/nanobot/pull/4149)), and added a visual prompt rail for long conversations ([PR #4156](https://github.com/HKUDS/nanobot/pull/4156)).
*   **Architecture:** Extracted WebUI gateway dependencies from the WebSocket channel ([PR #4115](https://github.com/HKUDS/nanobot/pull/4115)).

## 4. Community Hot Topics
The most actively discussed items revolve around API compatibility, platform deployment, and tool reliability:
*   **Custom Provider Compatibility:** [Issue #4167](https://github.com/HKUDS/nanobot/issues/4167) (Image generation failing with OpenAI-compatible APIs) and [Issue #4132](https://github.com/HKUDS/nanobot/issues/4132) highlight a strong user need to easily plug in third-party/custom AI providers (like Agnes AI) without hitting rigid parameter validation errors.
*   **Cloud Deployment Abstraction:** [PR #4139](https://github.com/HKUDS/nanobot/pull/4139) proposes a dedicated deployment layer for HuggingFace Spaces and ModelScope. This signals that users are increasingly deploying NanoBot in hosted cloud environments and need native, zero-configuration port/OAuth management. 
*   **Cost Optimization:** [Issue #4142](https://github.com/HKUDS/nanobot/issues/4142) discusses optimizing API costs specifically for cache-miss input tokens with models like DeepSeek v4, showing that the community is highly focused on production scaling costs.

## 5. Bugs & Stability
Several notable stability issues and edge-case bugs were reported, though the maintainers have been incredibly fast at addressing them:
1.  **Severe - MemoryStore Concurrency:** [Issue #4081](https://github.com/HKUDS/nanobot/issues/4081) reports duplicate cursors under concurrent writes due to missing async/file locks. (Crucial for high-concurrency deployments).
2.  **High - Tool Result Orphans:** [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006) notes orphaned tool results without corresponding `tool_calls`, causing strict APIs (like Anthropic/OpenAI) to crash the agent loop.
3.  **High - `read_file` Offload Loop:** [Issue #4153](https://github.com/HKUDS/nanobot/issues/4153) detailed a loop when recovering persisted tool results. **Fixed the same day** via [PR #4155](https://github.com/HKUDS/nanobot/pull/4155).
4.  **Medium - MCP Session Drops:** [Issue #4168](https://github.com/HKUDS/nanobot/issues/4168) reports random MCP server disconnects (`McpError: Session terminated`) requiring a full NanoBot restart.
5.  **Low - WebUI pip installs under `uv`:** [Issue #4158](https://github.com/HKUDS/nanobot/issues/4158) pip-based CLI installs fail if NanoBot is launched via `uv tool`. **Fix already submitted** via [PR #4164](https://github.com/HKUDS/nanobot/pull/4164).

## 6. Feature Requests & Roadmap Signals
Recent issues and open PRs suggest the immediate roadmap will focus on:
*   **Sub-agent MCP Access:** [Issue #4166](https://github.com/HKUDS/nanobot/issues/4166) requests that sub-agents spawned via `spawn()` can access the parent's MCP tools. This points toward more complex, multi-agent orchestration.
*   **Custom Image Providers:** Native support for custom image generation endpoints ([Issue #4132](https://github.com/HKUDS/nanobot/issues/4132)).
*   **Conversation Forking:** [PR #4163](https://github.com/HKUDS/nanobot/pull/4163) introduces "Fork from here" for WebUI chats, allowing users to branch conversations from historical points.
*   **Dream/Background Refactoring:** [PR #3990](https://github.com/HKUDS/nanobot/pull/3990) is replacing the complex two-phase `Dream` class with a simpler cron-based agent loop, indicating a push for more stable background processing.

## 7. User Feedback Summary
Real-world users are pushing NanoBot into production but are encountering friction with memory state management and third-party API compatibility. Users deploying the agent locally via modern Python tools like `uv` are experiencing friction with legacy `pip` assumptions. Chinese users are actively utilizing deep integrations (like QQ/Napcat and Notion MCP), though MCP connection stability remains a pain point ([Issue #1168](https://github.com/HKUDS/nanobot/issues/1168)). Overall, users appreciate the rapid feature velocity but need tighter stability on tool-call/messaging state consistency.

## 8. Backlog Watch
Maintainers should allocate time to review the following stalled or complex items requiring architectural decisions:
*   **Notion MCP Connection Failures:** [Issue #1168](https://github.com/HKUDS/nanobot/issues/1168) has been open since February 2026 with users reporting persistent connection issues with the Notion MCP server.
*   **Orphaned Tool Results:** [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006) requires a deep look into the message history serialization to ensure OpenAI/Anthropic strict pairing compliance.
*   **Open Security & Runner PRs:** Several significant architectural PRs are currently open and need final reviews, including the SSRF HTTP URL guard for MCP ([PR #4123](https://github.com/HKUDS/nanobot/pull/4123)), runner-level coverage for blocked tool calls ([PR #3983](https://github.com/HKUDS/nanobot/pull/3983)), and the WebSocket error emission fix ([PR #4134](https://github.com/HKUDS/nanobot/pull/4134)).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-03

## 1. Today's Overview
Hermes Agent experienced exceptionally high community activity over the past 24 hours, with 50 issues and 50 pull requests updated. The open-source project is currently in a heavy iteration and stabilization phase following a recent desktop release. The vast majority of today's activity consists of new community bug reports centered around the newly launched Desktop client and gateway stability, alongside a steady stream of contributor bug fixes and feature PRs. With only 3 issues closed and 3 PRs merged/closed out of 100 total items, the project is accumulating backlog at a rapid pace, signaling that maintainers will need to scale their review and triage capacity to maintain project health.

## 2. Releases
No new releases were published today. The project remains on version `v0.15.1`, which was recently released and is the subject of much of today's bug and stability feedback.

## 3. Project Progress
Although 47 PRs remain open, 3 PRs were closed/merged, showing active maintenance primarily focused on platform adapters and gateway stability:
*   **Gateway Event Protocol:** PR [#37250](https://github.com/NousResearch/hermes-agent/pull/37250) (closed/merged) implements a structured stream-event protocol and fixes Telegram draft formatting parity, shifting formatting responsibility from the agent to the gateway.
*   **Discord Formatting:** PR [#37676](https://github.com/NousResearch/hermes-agent/pull/37676) (closed/merged) introduces readable plaintext rendering for markdown tables in Discord responses.
*   *Note: A swarm of older, foundational PRs (e.g., PR [#30692](https://github.com/NousResearch/hermes-agent/pull/30692), [#30693](https://github.com/NousResearch/hermes-agent/pull/30693), [#30697](https://github.com/NousResearch/hermes-agent/pull/30697)) by contributors are seeing renewed activity today, suggesting a possible maintainer effort to clear the backlog of Ollama, Copilot, and Gemini schema fixes.*

## 4. Community Hot Topics
The community is highly focused on desktop client onboarding and multi-model management. 
*   **Desktop Remote Connections:** Users are heavily requesting the ability to connect the Desktop app to existing headless/VPS instances rather than being forced to bootstrap a new local install (Issue [#36970](https://github.com/NousResearch/hermes-agent/issues/36970), Issue [#37663](https://github.com/NousResearch/hermes-agent/issues/37663)). This indicates a strong enterprise/power-user need for decoupled UI and backend architectures.
*   **Context Window & Routing:** With the rise of 1M+ context models, users are actively discussing the need for per-model compression thresholds (Issue [#18733](https://github.com/NousResearch/hermes-agent/issues/18733)) and dynamic model delegation (Issue [#35437](https://github.com/NousResearch/hermes-agent/issues/35437)). 
*   **Multi-Agent Systems:** A highly engaging feature request for a `/council` command (Issue [#37569](https://github.com/NousResearch/hermes-agent/issues/37569)) proposes a multi-model deliberation planner, showing strong user interest in collaborative AI pipelines rather than single-agent execution.

## 5. Bugs & Stability
Today's reports include several high-severity bugs affecting long-running instances and conversation threads:
*   **P1 - Gateway FD Leak / Zombie Process:** Issue [#37011](https://github.com/NousResearch/hermes-agent/issues/37011) reports a file descriptor leak in the platform reconnect loop that kills the gateway after ~12 hours. *Fix available in PR [#37679](https://github.com/NousResearch/hermes-agent/pull/37679).*
*   **P1 - Bricked Conversations via Oversized Images:** Issue [#37677](https://github.com/NousResearch/hermes-agent/issues/37677) shows that images >8000px bypass byte checks and permanently break conversation threads by exceeding Anthropic's dimension limits on every history replay.
*   **P1 - Search Hanging:** Issue [#7725](https://github.com/NousResearch/hermes-agent/issues/7725) indicates `session_search` can hang for 5+ minutes, bypassing timeout expectations.
*   **P2 - Windows OAuth Routing:** Issue [#37515](https://github.com/NousResearch/hermes-agent/issues/37515) highlights that the Windows Desktop runtime fails to resolve providers even after successful OAuth logins.
*   **P2 - IPv6 Hangs:** Issue [#37662](https://github.com/NousResearch/hermes-agent/issues/37662) causes the OpenAI SDK to hang indefinitely on IPv6-first connections to certain provider endpoints.

## 6. Feature Requests & Roadmap Signals
Several distinct feature requests signal what the next version's roadmap might include if maintainers align with community needs:
*   **xAI Grok OAuth Integration:** PR [#37697](https://github.com/NousResearch/hermes-agent/pull/37697) proposes making xAI Grok a first-class one-click OAuth provider in the Desktop launcher, similar to existing OpenAI/Anthropic flows.
*   **Memory Management Hygiene:** Issue [#37661](https://github.com/NousResearch/hermes-agent/issues/37661) requests a plugin for automated temporal context and deduplication for Mem0 OSS, pointing toward a need for smarter, time-aware memory architectures.
*   **Mattermost Thread Seeding:** Issue [#37695](https://github.com/NousResearch/hermes-agent/issues/37695) requests fetching prior thread context when the agent is mentioned, a critical feature for enterprise chat platform adoption.
*   **First-Class Remote Onboarding:** Given the duplicate requests (Issues [#36970](https://github.com/NousResearch/hermes-agent/issues/36970), [#37663](https://github.com/NousResearch/hermes-agent/issues/37663), [#37674](https://github.com/NousResearch/hermes-agent/issues/37674)), adopting existing remote instances will likely be a core focus for the next Desktop release.

## 7. User Feedback Summary
The user base is actively testing the new Desktop app and pushing the boundaries of multi-model configurations. Users are generally enthusiastic but frustrated by silent failures—such as UI toggles that falsely report success ([#37609](https://github.com/NousResearch/hermes-agent/issues/37609)) and MCP configs that silently drop variables ([#37501](https://github.com/NousResearch/hermes-agent/issues/37501)). There is clear dissatisfaction with how the Desktop installer forces a fresh local install rather than connecting to a remote backend. Furthermore, TUI users on modern terminals (like Ghostty) are experiencing frustrating low-level input bugs ([#37680](https://github.com/NousResearch/hermes-agent/issues/37680)), indicating that the core CLI/TUI needs polish to keep up with the rapidly evolving terminal emulator landscape.

## 8. Backlog Watch
*   **Per-Model Compression Thresholds (Issue [#18733](https://github.com/NousResearch/hermes-agent/issues/18733)):** Created over a month ago with 5 comments and thumbs-ups. Needs maintainer triage to address context management for 1M+ token models.
*   **Smart Routing API Mode Bug (Issue [#8515](https://github.com/NousResearch/hermes-agent/issues/8515)):** Open since mid-April. Smart routing silently drops `api_mode` when using cheap models, breaking local inference setups. 
*   **Cluster of Stale PRs (PRs [#30692](https://github.com/NousResearch/hermes-agent/pull/30692) - [#30702](https://github.com/NousResearch/hermes-agent/pull/30702)):** A batch of high-quality bug fixes (Kanban, Copilot, MCP, STT) submitted ~10 days ago are still open and require final maintainer review to unblock corresponding downstream issues.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-06-03

## 1. Today's Overview
PicoClaw demonstrates a highly active and healthy development cycle today, driven predominantly by core maintainers `yuxuan-7814` and `chengzhichao-xydt`. The project saw the release of a `v0.2.9` nightly build, accompanied by a substantial influx of 14 updated pull requests (5 merged) and 3 active issues. The merged PRs focus heavily on hardening the system—addressing critical LLM provider error handling, fixing session history bugs, and resolving goroutine leaks. This indicates that the project is currently in a stabilization and bug-squashing phase as it progresses toward a stable `v0.2.9` release.

## 2. Releases
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)**: Automated build for `v0.2.9-nightly.20260602.426046fc`.
  - *Migration/Usage Note:* As an automated nightly build, it includes the latest merged PRs (such as the new error classifier and session fixes) but may be unstable. Administrators running instance tests should use caution before deploying to production environments.

## 3. Project Progress
Significant progress was made in fixing integration bugs, improving agent observability, and refining provider compatibility. Key merged/closed PRs include:
- **Agent Resilience:** [PR #2991](https://github.com/sipeed/picoclaw/pull/2991) introduced a provider error classifier to retry transient LLM HTTP errors, preventing immediate agent turn failures during OpenAI/OpenRouter 500-status outages.
- **Resource Management:** [PR #2986](https://github.com/sipeed/picoclaw/pull/2986) fixed a critical goroutine leak in the `SessionManager` by implementing a proper `Stop()` mechanism for background cleanup tickers.
- **Vision API Integration:** [PR #2989](https://github.com/sipeed/picoclaw/pull/2989) resolved a Zhipu GLM-5 API compatibility issue (Error 1210) by adding the error code to the format error patterns, successfully restoring the fallback mechanism for WeChat image channels.
- **Documentation & Configuration:** Closed [PR #2239](https://github.com/sipeed/picoclaw/pull/2239) (Docker privileged mode modification) and [PR #2993](https://github.com/sipeed/picoclaw/pull/2993) (Agent skill docs), streamlining the repository.

## 4. Community Hot Topics
- **[Issue #2404 [OPEN]](https://github.com/sipeed/picoclaw/issues/2404)** - *Add in config to send streaming HTTP request*. With 10 comments and ongoing discussion since April, this is a highly requested enhancement. Users are demanding native streaming support for LLM backends, signaling that non-streaming configurations create noticeable latency bottlenecks in real-world user experiences.
- **[Issue #2984 [OPEN]](https://github.com/sipeed/picoclaw/issues/2984)** - *Add explicit turn completion signal*. A recently opened feature request addressing the Pico WebSocket protocol. Clients currently lack a deterministic way to know when an agent finishes processing, relying on `typing.stop` events, which highlights a growing need for better external client integrations.

## 5. Bugs & Stability
Several bugs impacting UI, agent context, and provider integrations were reported today, though maintainers have shown an impressive response time by immediately opening fix PRs:
1. **Session History Pollution (Critical):** [Issue #2972] / [PR #2992](https://github.com/sipeed/picoclaw/pull/2992) - New Web UI sessions were erroneously inheriting old messages post-v0.2.9 upgrade. Fix opened today.
2. **Goroutine Leak (High):** [PR #2986](https://github.com/sipeed/picoclaw/pull/2986) - Indefinite background goroutines causing memory leaks in testing/long-running instances. Fixed and merged.
3. **Tool Calls Dropped (High):** [PR #2987](https://github.com/sipeed/picoclaw/pull/2987) - `tool_calls` messages were dropped during active streaming sessions due to overly aggressive auxiliary message filtering.
4. **Vision API Error (Medium):** [Issue #2943](https://github.com/sipeed/picoclaw/issues/2943) - Zhipu GLM-5 API error 1210 when sending images via WeChat. Fixed via [PR #2989](https://github.com/sipeed/picoclaw/pull/2989).
5. **Web UI Truncation (Medium):** [PR #2990](https://github.com/sipeed/picoclaw/pull/2990) - Web UI only displayed the last user message in multi-message conversations. Fix opened today.

## 6. Feature Requests & Roadmap Signals
Based on current open PRs and Issues, the short-term roadmap heavily favors **API compatibility, observability, and context management**:
- **Advanced LLM Compatibility:** The open PRs [#2951](https://github.com/sipeed/picoclaw/pull/2951) (fixing native web search tool types) and [#2948](https://github.com/sipeed/picoclaw/pull/2948) (skipping deprecated `temperature` params for Claude Opus) indicate imminent support for the latest frontier model APIs.
- **Observability Tools:** [PR #2945](https://github.com/sipeed/picoclaw/pull/2945) proposes `picoclaw-tracer`, a standalone web UI for reading JSON-Lines logs and rendering LLM traces in real-time. This signals a major upcoming boost to debugging capabilities for agent developers.
- **Context UI Refinements:** [PR #2985](https://github.com/sipeed/picoclaw/pull/2985) and [#2988](https://github.com/sipeed/picoclaw/pull/2988) aim to expose soft/hard context compression thresholds to users via the `/context` command.

*Prediction:* The next stable release will likely focus on smoothing out the Web UI and WebSocket user experience, cementing Claude Opus / OpenAI web-search compatibility, and officially introducing the Tracer debug UI.

## 7. User Feedback Summary
Pain points from users currently center around **multi-modal channel reliability** and **configuration transparency**. 
- Users utilizing PicoClaw as a WeChat bot (connecting to Zhipu/GLM models) experienced silent failures in image processing, highlighting friction in channel-to-provider API translation.
- Confusion over context limits (e.g., the `/context` command showing hardcoded values rather than dynamic `summarize_token_percent` configurations) reveals that users are actively managing token budgets and desire more visibility into how the agent truncates or compresses long conversations. 
- Overall, the rapid turnaround on these specific bugs shows high user-developer alignment.

## 8. Backlog Watch
The following important items are going stale and require maintainer triage:
- **[PR #2945](https://github.com/sipeed/picoclaw/pull/2945) `picoclaw-tracer`**: A massive feature contribution adding a debug trace viewer. It hasn't received recent comments and needs architectural review to prevent bit-rot.
- **[PR #2948](https://github.com/sipeed/picoclaw/pull/2948) & [PR #2951](https://github.com/sipeed/picoclaw/pull/2951)**: Both are crucial fixes for OpenAI/Claude API HTTP 400 compatibility errors but have gone stale. Given the fast-moving nature of LLM APIs, these should be prioritized for merge.
- **[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) (Streaming HTTP Request)**: Open since April with 10 comments. Maintainers should provide a definitive roadmap answer (e.g., planned for v0.3.0 or needs a specific champion) to close the loop with the community.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-06-03

## 1. Today's Overview
NanoClaw experienced a moderate-to-high level of development activity over the past 24 hours, characterized by a strong focus on platform stability, security, and integration capabilities. The maintainer and contributor team efficiently merged four pull requests, balancing new feature integration with critical bug fixes. While community engagement (issues and comments) remains relatively quiet, the codebase is actively being refined for containerized environments and external provider compatibility. Overall, the project is in a healthy, iterative state with clear momentum toward robust agent isolation and plugin extensibility.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
Four pull requests were merged/closed today, signaling solid advancements in runtime stability, extensibility, and security:
*   **[PR #2674](https://github.com/nanocoai/nanoclaw/pull/2674) (Closed):** Standardized long-running runtime status messages as mechanical labels and added internal-channel guards to prevent self-loops, improving agent execution predictability.
*   **[PR #1193](https://github.com/nanocoai/nanoclaw/pull/1193) (Closed):** Introduced a highly anticipated host-side plugin hook system (`onStartup`/`onShutdown`), allowing developers to run long-running services (like HTTP servers) before the main message loop begins.
*   **[PR #2069](https://github.com/nanocoai/nanoclaw/pull/2069) (Closed):** Added the new "Skill/webchat v1" feature, expanding NanoClaw's channel integration capabilities.
*   **[PR #2538](https://github.com/nanocoai/nanoclaw/pull/2538) (Closed):** Fixed a significant security vulnerability (OS command injection, CWE-78) in the container runner by validating package names before Dockerfile interpolation. 

## 4. Community Hot Topics
Community activity was minimal over the last 24 hours, with no high-discussion threads. The only new issue was a likely automated prompt submission rather than a technical discussion:
*   **[Issue #2673](https://github.com/nanocoai/nanoclaw/issues/2673):** Opened by a user generating an AI video prompt for an automated student grading system in Papua New Guinea. While not a technical bug report, it highlights a vertical use case where users are combining NanoClaw with AI generation tools for educational and mobile-first environments.

## 5. Bugs & Stability
Several important bug fixes and reliability improvements were addressed today, ranked by severity:

*   **High Severity - Security Fix:** 
    *   **[PR #2538](https://github.com/nanocoai/nanoclaw/pull/2538):** Patched an OS command injection vulnerability in `container-runner.ts`. (Status: Merged/Closed).
*   **Medium Severity - Container/File Handling:**
    *   **[PR #2671](https://github.com/nanocoai/nanoclaw/pull/2671):** Fix inbound attachments directory not being mounted into agent containers. Channel adapters currently fail to access attachments because the mount target is missing. (Status: Open).
*   **Medium Severity - MCP/Transport Layer:**
    *   **[PR #2672](https://github.com/nanocoai/nanoclaw/pull/2672):** Fix Codex provider MCP config breaking due to `McpServerConfig` union evolution, and issues with HTTP-only transport behind proxies. (Status: Open).
*   **Low Severity - CLI Formatting:**
    *   **[PR #2187](https://github.com/nanocoai/nanoclaw/pull/2187):** Prevents the CLI bare platform IDs from being incorrectly namespaced. (Status: Open).

## 6. Feature Requests & Roadmap Signals
*   **Plugin Extensibility:** The merging of the host-side plugin hook system ([PR #1193](https://github.com/nanocoai/nanoclaw/pull/1193)) indicates the project is pivoting toward greater third-party extensibility. This allows developers to bootstrap custom background services natively.
*   **Channel Expansion:** The closure of "Skill/webchat v1" ([PR #2069](https://github.com/nanocoai/nanoclaw/pull/2069)) suggests an upcoming push for web-based real-time chat integrations.
*   **Cloud/Proxy Networking:** The open MCP transport PR ([PR #2672](https://github.com/nanocoai/nanoclaw/pull/2672)) hints that the next roadmap items will heavily focus on making NanoClaw agents run seamlessly behind corporate proxies and complex cloud environments.

## 7. User Feedback Summary
Direct user feedback via GitHub issues was sparse today. The open pull requests suggest that contributors actively using the platform are encountering friction with mounting local files into isolated containers ([PR #2671](https://github.com/nanocoai/nanoclaw/pull/2671)) and managing provider configurations over network proxies ([PR #2672](https://github.com/nanocoai/nanoclaw/pull/2672)). Satisfaction appears stable, with contributors proactively writing fixes and adhering to the project's strict `follows-guidelines` PR templates.

## 8. Backlog Watch
*   **[PR #2187](https://github.com/nanocoai/nanoclaw/pull/2187):** This CLI platform ID namespace carve-out has been open since early May 2026. It appears to be stalled and requires a maintainer review to unblock CLI-specific development.
*   **[PR #1193](https://github.com/nanocoai/nanoclaw/pull/1193):** Though officially closed as of today, this PR was open for nearly two and a half months (since March 17, 2026). Maintainers should ensure the documentation for the new plugin lifecycle (`onStartup`/`onShutdown`) is published, so the community can actually utilize this long-awaited feature.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-06-03

## 1. Today's Overview
Project NullClaw exhibited low but highly focused maintenance activity over the past 24 hours, with one new open issue and one corresponding open pull request. No new releases were published today. The current development focus is heavily directed toward refining the platform's Personally Identifiable Information (PII) redaction module. This indicates that while the core platform may be in a stable state, the team is actively iterating on the nuances and safety mechanisms of the AI agent's execution environment.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. However, progress was made on the redaction front. Maintainer/Contributor `vernonstinebaker` opened PR [#945](https://github.com/nullclaw/nullclaw/pull/945) to address a newly discovered edge case in the PII redactor. The PR introduces an `isDateLike()` guard within `src/redaction.zig` to prevent the system from falsely redacting ISO date/time patterns generated by system prompts (like the `appendDateTimeSection` output) as phone numbers. 

## 4. Community Hot Topics
There are no highly active community discussions today, as both the issue and the PR currently have zero comments and zero reactions. 
*   **[#944 PII redactor falsely matches date/time output as phone numbers](https://github.com/nullclaw/nullclaw/issues/944)**: This is the sole topic of the day. It highlights an underlying need for the agent's safety filters to possess deeper contextual awareness of system-generated strings. As agents interact with underlying OS commands (like `date`), the redaction algorithms must be able to distinguish between actual user PII and standard system outputs.

## 5. Bugs & Stability
*   **[Low/High Impact] False Positive PII Redaction**: Issue [#944](https://github.com/nullclaw/nullclaw/issues/944) reports that the default PII redaction feature (introduced recently in commit `41cdb493`) is aggressively flagging standard date/time digits (e.g., `2026-06-02 20:17`) as phone numbers and replacing them with `[PHONE_X]`. 
    *   *Severity*: Medium-High. While not a crash, it severely degrades the agent's ability to process time-sensitive tasks and read terminal outputs accurately.
    *   *Fix Status*: A fix is actively underway in PR [#945](https://github.com/nullclaw/nullclaw/pull/945), which specifically targets the rejection of `YYYY-MM-DD` and `DD-MM-YYYY` patterns in the phone-matching logic.

## 6. Feature Requests & Roadmap Signals
No new feature requests were raised by the community today. The signals from the current issue suggest that the immediate roadmap involves hardening the AI's safety and privacy guardrails. Future iterations will likely require expanded Regular Expression guards or contextual checks to prevent further false positives (e.g., IP addresses, MAC addresses, or credit card numbers being matched incorrectly).

## 7. User Feedback Summary
The primary user pain point highlighted today involves **overly aggressive safety filters**. While the introduction of `enable_pii_redaction` as a default-on feature is a strong privacy-positive move, the lack of granular exceptions for standard system data is causing user friction. Users expect the AI to seamlessly execute basic shell commands and interpret their outputs without interference from misfiring redaction heuristics.

## 8. Backlog Watch
Given the low volume of activity, there are no long-unanswered historical issues to flag today. However, maintainer attention is required to review and merge the pending PR [#945](https://github.com/nullclaw/nullclaw/pull/945), as the current false-positive redaction behavior blocks agents from reliably executing time-based operations or reading logs.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-03

## 1. Today's Overview
IronClaw experienced a very high volume of activity over the past 24 hours, highlighted by a massive batch of architectural "Reborn" planning issues and a rapid succession of merged pull requests. With 50 pull requests updated (31 merged/closed) and 34 issues updated, the core development team is aggressively iterating on the "Reborn" engine architecture while simultaneously stabilizing WebUI v2 and OAuth integrations. The absence of a new release suggests the project is in a heavy development and integration phase, accumulating a substantial body of work for a future milestone. Overall, project health appears highly active, with core contributors systematically addressing technical debt, capability safety, and user-facing bugs.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Developers merged 31 pull requests, indicating a highly productive day focused on backend capabilities, UI stability, and authentication:
*   **Authentication & OAuth Integrations:** Core contributors made huge strides in unifying OAuth for WebUI v2. Merged PRs include wiring Notion DCR OAuth ([#4345](https://github.com/nearai/ironclaw/pull/4345)), fixing Google OAuth prompts for runtime auth gates ([#4337](https://github.com/nearai/ironclaw/pull/4337)), fixing Reborn Gmail OAuth scopes ([#4347](https://github.com/nearai/ironclaw/pull/4347)), and enabling WebUI v2 DCR extension setup ([#4332](https://github.com/nearai/ironclaw/pull/4332)).
*   **WebUI & Chat Fixes:** Fixed WebUI v2 pending message echoes where optimistic user bubbles lost metadata ([#4336](https://github.com/nearai/ironclaw/pull/4336)), and ensured assistant replies stay visually last when trailing reasoning arrives ([#4356](https://github.com/nearai/ironclaw/pull/4356)).
*   **Agent Runtime & Capabilities:** Added first-party trigger capabilities (create/list/remove) ([#4318](https://github.com/nearai/ironclaw/pull/4318)), fixed Codex ChatGPT empty responses by hardening SSE parsing ([#4371](https://github.com/nearai/ironclaw/pull/4371)), and resolved local-dev Reborn memory mount issues ([#4357](https://github.com/nearai/ironclaw/pull/4357)).
*   **Security & Tests:** Zeroized HTTP credential carriers to prevent memory leaks of sensitive data ([#4372](https://github.com/nearai/ironclaw/pull/4372)).

## 4. Community Hot Topics
The most actively discussed items revolve around major architectural changes and long-term capability planning:
*   **Engine v2 Correlation IDs ([Issue #4355](https://github.com/nearai/ironclaw/issues/4355)):** This closed issue discusses adding `client_thread_id` and `client_response_id` to `ThreadExecutionContext` as a follow-up to PR [#3669](https://github.com/nearai/ironclaw/pull/3669). This highlights a core architectural need for stable tool-to-turn correlation.
*   **GitHub WASM Capability ([Issue #3806](https://github.com/nearai/ironclaw/issues/3806)):** A reopened issue detailing the implementation of GitHub as the first concrete WASM tool package, signaling that WASM tool discovery is a highly anticipated feature.
*   **Feishu Integration ([PR #4178](https://github.com/nearai/ironclaw/pull/4178)):** A significant open PR adding host-managed Feishu/Lark websocket intake, expanding the assistant's communication channels.

## 5. Bugs & Stability
A "Bug Bash" against recent models (Qwen3.6-35B-A3B-FP8 and MiniMax-M2.7) revealed several critical P2 UI and runtime bugs, alongside ongoing nightly E2E failures:
*   **Critical/Blocking:**
    *   **Claude Opus 4.7/4.8 Unusable ([Issue #4334](https://github.com/nearai/ironclaw/issues/4334)):** IronClaw incorrectly sends the deprecated `temperature` parameter, causing all requests to these new Anthropic models to fail with a 400 error. *(No fix PR linked yet)*.
    *   **Nightly E2E Failure ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)):** The scheduled E2E run for the v2-engine failed again, indicating persistent integration instability.
*   **High (Qwen3.6-35B Specific):**
    *   Agent mirroring user messages during load ([Issue #4344](https://github.com/nearai/ironclaw/issues/4344)).
    *   Agent stuck in "THINKING" state, exposing raw chain-of-thought to users ([Issue #4341](https://github.com/nearai/ironclaw/issues/4341)).
    *   MCP integrations acknowledged but unusable due to driver failure ([Issue #4343](https://github.com/nearai/ironclaw/issues/4343)).
    *   Authentication modal permanently blocking chat after page refresh ([Issue #4342](https://github.com/nearai/ironclaw/issues/4342)).
*   **High (MiniMax-M2.7 Specific):**
    *   Provider tool calls rejected as `InvalidInvocation` despite valid schemas ([Issue #4339](https://github.com/nearai/ironclaw/issues/4339)).
    *   Misleading execution driver errors when disconnected ([Issue #4338](https://github.com/nearai/ironclaw/issues/4338)).

## 6. Feature Requests & Roadmap Signals
User [henrypark133] opened 15 detailed, specification-heavy issues labeled `reborn-loop` and `reborn-subagent` outlining the strict production-readiness requirements for the "Reborn" engine. These "L" (Loop) and "C" (Subagent) lane issues clearly signal the project's roadmap:
*   **Advanced Loop Strategies ([Issue #4367](https://github.com/nearai/ironclaw/issues/4367)):** Implementing drain caps and identity bin-packing to prevent infinite runs.
*   **Robust Budgeting ([Issue #4364](https://github.com/nearai/ironclaw/issues/4364)):** Enforcing wall-clock limits and accurate token/CJK token counting.
*   **Subagent Safety & Gating ([Issue #4351](https://github.com/nearai/ironclaw/issues/4351)):** Ensuring fail-closed injection scans for subagent goals. *(A fix PR is already open in [#4373](https://github.com/nearai/ironclaw/pull/4373))*.
*   **Predicted Next Version Features:** Based on this activity, the next release will almost certainly finalize the Slack/Feishu adapters, introduce WASM tool packages, and lock in the subagent compensation/safety gates.

## 7. User Feedback Summary
Users testing the platform on newer open-weight models (Qwen and MiniMax) are experiencing friction with chat rendering, tool invocation validation, and disconnect handling. There is clear dissatisfaction regarding the lack of support for standard Anthropic parameters on Claude Opus 4.7/4.8 ([Issue #4334](https://github.com/nearai/ironclaw/issues/4334)), as it completely blocks access to frontier models. Conversely, the sheer volume of architectural feedback provided by the community (specifically the comprehensive audits on the Reborn engine) shows a highly engaged, technically sophisticated user base deeply invested in the project's reliability and safety architecture.

## 8. Backlog Watch
*   **Engine v2 Tool ID exposure ([PR #3669](https://github.com/nearai/ironclaw/pull/3669)):** Open since mid-May, this XL-sized PR restoring tool-call correlation IDs is a dependency for other features and needs final review.
*   **Security Flag implementation ([PR #3548](https://github.com/nearai/ironclaw/pull/3548)):** Open since May 12, this PR adds a `DISABLE_TOOLS_LIST` flag. Given the recent focus on capability safety, this should be prioritized for merging.
*   **WebUI v2 OAuth Integration ([PR #4294](https://github.com/nearai/ironclaw/pull/4294)):** A large PR wiring Google/Github OAuth into WebUI v2 that has been open for a couple of days amidst rapid changes to the auth stack.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI for 2026-06-03.

# LobsterAI Project Digest: 2026-06-03

## 1. Today's Overview
LobsterAI is currently experiencing a period of high development velocity, characterized by a massive batch of code merges with **47 pull requests closed in the last 24 hours**. Despite the high commit volume, the project saw **zero new releases, zero new issues, and zero newly opened PRs** today. This pattern strongly indicates that the core maintainers are in a feature-freeze and stabilization phase, systematically merging a backlog of pending improvements and bug fixes to prepare for an imminent major release. The project's overall health is highly active, with focused efforts on refining the user experience, enhancing the OpenClaw runtime, and expanding LLM capabilities.

## 2. Releases
No new releases were published today. However, given the sheer volume of merged PRs (47), it is highly probable that a new stable version is being staged for release in the very near future.

## 3. Project Progress
The merged PRs over the last 24 hours represent significant feature advancements and targeted stability improvements across multiple core domains:

*   **Model & LLM Advancements:**
    *   **[PR #2093](https://github.com/netease-youdao/LobsterAI/pull/2093)**: Fixed hardcoded limitations to successfully enable image input support for the new MiniMax-M3 model.
*   **OpenClaw & Gateway Stability:**
    *   **[PR #2023](https://github.com/netease-youdao/LobsterAI/pull/2023)**: Improved the stability and success rate of built-in browser and web fetching tools.
    *   **[PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018)**: Fixed a critical Gateway issue where the OpenClaw runtime unnecessarily restarted during token refreshes.
    *   **[PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015)**: Enhanced context compaction retries and tool result gap handling to prevent agent crashes or hallucinations.
*   **UX / UI & Artifacts:**
    *   **[PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985)**: Implemented a full end-to-end "Thinking Level" selector for chat sessions, allowing users to control agent reasoning depth (Off/Minimal/Low/Medium/High/Adaptive).
    *   **[PR #2022](https://github.com/netease-youdao/LobsterAI/pull/2022)**: Optimized HTML preview and source code views, implementing lazy loading for large files and fixing dark/light theme adaptation.
    *   **[PR #2094](https://github.com/netease-youdao/LobsterAI/pull/2094)**: Refined the information hierarchy and visual styling of the share success modal.
*   **Platform Integrations:**
    *   **[PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091)**: Optimized MCP (Model Context Protocol) launches by pre-resolving `npx` packages, significantly reducing cold-start times for stdio MCP integrations.
    *   **[PR #2095](https://github.com/netease-youdao/LobsterAI/pull/2095)**: Added batch deletion support for sub-agents within the cowork/sidebar view.
    *   **[PR #2025](https://github.com/netease-youdao/LobsterAI/pull/2025)**: Completely redesigned the IM (DingTalk, Feishu, QQ) bot management UI.

## 4. Community Hot Topics
Interestingly, today's data reveals **zero active community issues or user-generated PR discussions** in the last 24 hours. The merged PRs were predominantly authored by core team members (`btc69m979y-dotcom`, `fisherdaddy`, `liugang519`). 

The only "active" community-adjacent PRs currently open are automated dependency bump requests:
*   **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)**: `dependabot[bot]` requesting an Electron bump (v40.2.1 to v42.3.1).
*   **[PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)**: A long-standing community PR (`octo-patch`) attempting to upgrade the MiniMax default model to M3. *Analysis: The maintainers effectively bypassed this PR by directly implementing the M3 upgrade and image support in PRs [#2093] and merging other model configurations today.*

## 5. Bugs & Stability
Today's merged PRs addressed several notable bugs and stability pain points:
*   **High Severity - Runtime Stability:** **[PR #2018](https://github.com/netease-youdao/LobsterAI/pull/2018)** and **[PR #2024](https://github.com/netease-youdao/LobsterAI/pull/2024)** resolved Gateway restart loops and optimized gateway configuration syncing, preventing dropped connections during agent execution.
*   **Medium Severity - UX Frustration:** **[PR #1952](https://github.com/netease-youdao/LobsterAI/pull/1952)** fixed an issue on macOS where users denying the accessibility permission for voice input would experience silent failures. The fix introduces a clear toast notification guiding the user to system settings.
*   **Medium Severity - AI Context:** **[PR #2015](https://github.com/netease-youdao/LobsterAI/pull/2015)** fixed OpenClaw error states caused by tool result gaps, increasing agent execution reliability.
*   **Low Severity - UI Polish:** **[PR #2031](https://github.com/netease-youdao/LobsterAI/pull/2031)** fixed invalid browser configurations, and **[PR #2096](https://github.com/netease-youdao/LobsterAI/pull/2096)** cleaned up the plugin management menu by hiding internal OpenClaw runtime-bundled plugins.

## 6. Feature Requests & Roadmap Signals
While there are no formal feature requests from the community today, the code merged provides clear roadmap signals for the upcoming release:
1.  **Advanced Agent Configurability:** The introduction of "Thinking Level Control" ([PR #1985](https://github.com/netease-youdao/LobsterAI/pull/1985)) signals a move toward giving users granular control over token usage and model reasoning limits.
2.  **Security Enhancements:** The merging of a hot-toggle for `nsp-clawguard` security monitoring ([PR #1962](https://github.com/netease-youdao/LobsterAI/pull/1962)) indicates an upcoming focus on enterprise-grade local agent security monitoring.
3.  **Multi-Platform Chatbot Deployment:** The redesign of the IM Bot Management UI ([PR #2025](https://github.com/netease-youdao/LobsterAI/pull/2025)) and duplicate instance validations ([PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464)) suggest that using LobsterAI as a backend for DingTalk/Feishu/QQ bots is a rapidly maturing, highly prioritized feature.

## 7. User Feedback Summary
Direct user feedback is not visible in today's data feed (0 new issues opened). However, looking at the fixes applied, we can infer user pain points:
*   **Inference Speed:** Users likely complained about slow MCP server start times, directly addressed by the npx pre-resolution optimization in **[PR #2091](https://github.com/netease-youdao/LobsterAI/pull/2091)**.
*   **Asset Management:** Users working with generated code or HTML artifacts likely experienced lag or "file not found" errors, remedied by the lazy-loading and file-existence checks in **[PR #2022](https://github.com/netease-youdao/LobsterAI/pull/2022)**.

## 8. Backlog Watch
*   **[PR #388](https://github.com/netease-youdao/LobsterAI/pull/388)**: *Status: Open since March 2026.* This PR aimed to upgrade the MiniMax model to M3. Despite being open for months with recent updates, the maintainers chose to implement the M3 image support and configuration internally. This PR should be closed to avoid confusion.
*   **[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464)**: *Status: Open since April 2026.* Adds necessary duplicate validation for IM instance names. Although it was updated today, it remains unmerged. It requires maintainer review before the upcoming release to ensure bot management stability.
*   **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)**: *Status: Open since April 2026.* A major Dependabot bump for Electron (v40 to v42). This involves significant architectural changes and requires dedicated QA testing before merging, though it is crucial for keeping the desktop app secure.

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

# CoPaw Project Digest — 2026-06-03

## 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing highly active development and robust community engagement, processing 48 issues and 32 pull requests in the last 24 hours. The maintainers are actively addressing a wide array of bugs, security vulnerabilities, and feature requests, particularly focusing on the plugin ecosystem and desktop experience. Although no official stable release was published today, preparation for a minor version bump (`v1.1.11b1`) is underway, accompanied by a major architectural push to migrate the backend to AgentScope 2.0. The high volume of first-time contributor PRs and detailed security reports indicates a healthy, security-conscious, and growing open-source community.

## 2. Releases
*   **Stable Releases:** None released today. The latest stable remains `v1.1.10`.
*   **Pre-release:** A beta version, `v1.1.11b1`, was tagged and closed in PR [#4907](https://github.com/agentscope-ai/QwenPaw/pull/4907), suggesting an imminent patch release focused on bug fixes.

## 3. Project Progress
Development is heavily focused on extending the plugin architecture, fixing channel integrations, and improving the desktop (Tauri) experience. 
*   **Plugin Architecture Expansion:** The plugin system is becoming highly extensible. PR [#4794](https://github.com/agentscope-ai/QwenPaw/pull/4794) added uninstall hooks and validator imports, while PR [#4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) introduced a Prompt Section Registry allowing plugins to safely inject system prompts. PR [#4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) replaced the legacy custom channels directory with schema-driven plugin registration.
*   **Channel Bug Fixes:** A critical issue where cron tasks failed to deliver messages to WeChat/WeCom was fixed and merged in PR [#4883](https://github.com/agentscope-ai/QwenPaw/pull/4883). The missing protobuf files causing authentication failures in the Yuanbao channel were fixed in PR [#4899](https://github.com/agentscope-ai/QwenPaw/pull/4899).
*   **Desktop & Windows Improvements:** Support for browsing all drives on Windows was added via PR [#4906](https://github.com/agentscope-ai/QwenPaw/pull/4906). A fix for persistent browser process locks on Windows was merged in PR [#4853](https://github.com/agentscope-ai/QwenPaw/pull/4853).
*   **Provider Support:** Support for non-standard provider parameters (like DashScope's `enable_search`) was added in PR [#4689](https://github.com/agentscope-ai/QwenPaw/pull/4689).

## 4. Community Hot Topics
*   **AgentScope 2.0 Migration:** The most significant architectural discussion is happening around Issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) and PR [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846). The community is actively debating the migration from AgentScope 1.x to 2.0, which represents a major breaking change and architectural shift for the project.
*   **Optimizing Token Overhead:** A highly discussed topic is context window management. Issue [#4836](https://github.com/agentscope-ai/QwenPaw/issues/4836) proposes "on-demand loading" for tool definitions to reduce the initial system prompt by 55-65%. Similarly, Issue [#4551](https://github.com/agentscope-ai/QwenPaw/issues/4551) requests lossless DAG-based context compression to prevent the agent from forgetting long-term task details.
*   **Security Audit:** User `YLChen-007` submitted a massive, highly detailed security audit of the API surface, identifying vulnerabilities ranging from unauthenticated language settings to path traversal and workspace secret leakage.

## 5. Bugs & Stability
*   **Critical Regression (Models Configuration):** Users report that creating a new chat session causes the Models configuration page to crash and fail to load, requiring a full restart ([#4666](https://github.com/agentscope-ai/QwenPaw/issues/4666)). 
*   **Critical Regression (System Fallbacks):** Users on `v1.1.9` and `v1.1.10` are experiencing an increase in system-level fallbacks where the agent erroneously replies, "I cannot process your question" ([#4837](https://github.com/agentscope-ai/QwenPaw/issues/4837)). This severely disrupts user experience.
*   **DeepSeek API HTTP 500:** A bug where the `reasoning_content` from DeepSeek models is not correctly passed back during multi-turn tool calls causes crashes after ~5 turns ([#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985)). 
*   **Desktop Plugin Loader Broken:** In Tauri Desktop `v1.1.10`, the plugin loader fails to initialize, throwing a 503 error. A root-cause fix has been submitted in PR [#4900](https://github.com/agentscope-ai/QwenPaw/pull/4900).
*   **Infinite Image Compression Loop:** Uploading images triggers an endless compression cycle that exhausts resources and causes agent hallucinations ([#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895)).

## 6. Feature Requests & Roadmap Signals
*   **Multi-Model Sub-Agents:** Users are requesting `spawn_subagent` to support per-task model selection (e.g., using cheaper models for simple grep tasks, and powerful models for complex reasoning), mimicking the Opus/Haiku dispatch pattern ([#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901)).
*   **Windows UX Upgrades:** Strong demand to uncap file upload sizes on local Windows deployments ([#4893](https://github.com/agentscope-ai/QwenPaw/issues/4893)) and add drag-and-drop multi-file support ([#4894](https://github.com/agentscope-ai/QwenPaw/issues/4894)). 
*   **UI Simplification:** Users feel the sidebar menu is overly complex and hides frequently used chat sessions. A redesign aligning with minimalist UIs (like Claude Desktop or Codex) has been proposed ([#4904](https://github.com/agentscope-ai/QwenPaw/issues/4904)).
*   **Predictions for `v1.1.11`/`v1.2.0`:** The imminent release will likely focus on stabilizing the Tauri desktop plugin loader, fixing the Yuanbao/WeChat channel bugs, and applying the security patches submitted today.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by desktop-specific limitations (file sizes, locked drives, UI font sizes) and system-level regressions (fallback messages, models page unloading). 
*   **Deployment Environment:** A significant portion of the user base deploys QwenPaw locally on Windows for personal assistant tasks, relying heavily on integrations with domestic platforms like WeChat, WeCom, and Yuanbao.
*   **Advanced Use Cases:** The community is pushing QwenPaw into complex, long-term automation tasks (e.g., cross-day code development, PRD management, and scheduled cron tasks). These power users require robust context memory management and agent-scoped web login isolations ([#4859](https://github.com/agentscope-ai/QwenPaw/issues/4859)).

## 8. Backlog Watch
*   **Security Patches:** Maintainers urgently need to triage and merge fixes for the multiple high-severity API vulnerabilities reported today, including Path Traversal ([#4913](https://github.com/agentscope-ai/QwenPaw/issues/4913)), ToolGuard bypass ([#4909](https://github.com/agentscope-ai/QwenPaw/issues/4909)), and secret leakage ([#4914](https://github.com/agentscope-ai/QwenPaw/issues/4914)).
*   **Custom Channel Logic:** Issue [#4877](https://github.com/agentscope-ai/QwenPaw/issues/4877) highlights a flawed `replace_channel` logic that causes port conflicts and stops channel listeners every time settings are saved. This needs architectural review by the core team.
*   **Desktop Updater:** PR [#4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) (Tauri auto-updater) and the DataPaw BI plugin PR [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) have been open for over a week and require final maintainers' review to proceed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-03

## 1. Today's Overview
ZeroClaw is exhibiting high project velocity and active development, marked by the recent release of the major **v0.8.0-beta-2**. Activity remains robust with 50 issues and 50 pull requests updated in the last 24 hours, demonstrating strong momentum from both maintainers and the community. Current engineering efforts are heavily concentrated on the new "zerocode" TUI, expanding multi-agent runtime capabilities, and hardening channel security. However, the high volume of P1 bugs and security vulnerabilities currently open suggests that the project is navigating typical early-beta scaling pains, particularly around provider compatibility and response sanitization. 

## 2. Releases
*   **v0.8.0-beta-2** ([Release URL](https://github.com/zeroclaw-labs/zeroclaw/releases))
    *   **Changes:** This is the second beta for the v0.8.0 line and the largest release since v0.7.5. The headline feature is **zerocode**—a brand-new, full-featured terminal UI (TUI) for running and operating agents without leaving the terminal. It also introduces the highly anticipated multi-agent runtime.

## 3. Project Progress
Significant headway was made today in merging fixes and advancing the v0.8.0 stable release queue. 17 PRs were merged/closed, focusing heavily on security patching and multi-agent/channel fixes:
*   **Security Fix:** ([PR #7064](https://github.com/zeroclaw-labs/zeroclaw/pull/7064)) Resolved a critical vulnerability where channel-served agents bypassed the per-agent tool allowlist. 
*   **Multi-agent TTS Fix:** ([PR #7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002)) Fixed a bug in Telegram/WhatsApp where TTS voice replies resolved the wrong agent's `tts_provider` in multi-agent configurations.
*   **Channel Reliability:** ([PR #7008](https://github.com/zeroclaw-labs/zeroclaw/pull/7008)) Fixed WhatsApp Web LID JIDs resolving to ensure reliable outbound message delivery.
*   **Hardware/IoT Integration:** ([PR #7045](https://github.com/zeroclaw-labs/zeroclaw/pull/7045)) Introduced smartroom named-device tools and peripheral wiring support.
*   **Diagnostics:** ([PR #6961](https://github.com/zeroclaw-labs/zeroclaw/pull/6961)) Added a self-test warning for `web_dist_dir` paths using non-resolving tildes (`~`) or variables (`$HOME`).

## 4. Community Hot Topics
The community is actively discussing provider compatibility, security, and expanding ZeroClaw's operational footprint:
*   **DeepSeek-V4 API Incompatibility** ([Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059), 15 comments, 4 👍): The most active issue today. Users are frustrated by breaking changes related to the thinking mode/reasoning content in DeepSeek-V4-Pro/Flash APIs.
*   **Kimi-Code Streaming Errors** ([Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600), 9 comments, 1 👍): Another provider compatibility issue where Kimi-code fails during streaming tool calls due to missing `reasoning_content`. 
*   **Stronger Pairing Codes** ([Issue #6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613), 2 comments): Users are requesting moving away from easily brute-forced 6-digit numeric pairing codes to a 32-character alphanumeric default, signaling a strong community desire for enterprise-ready security.

## 5. Bugs & Stability
Several high-severity bugs were reported or closed today, mainly involving channel response sanitization and provider schema changes:
*   **P1 / High Risk - Telegram Scratchpad Leakage** ([Issue #7068](https://github.com/zeroclaw-labs/zeroclaw/issues/7068)): When using Codex as a delegated backend, internal scratchpad/tool-transcript text is sent directly to the user instead of a clean response. *No fix PR is linked yet.*
*   **P1 / High Risk - Webhook Reasoning Leakage** ([Issue #6040](https://github.com/zeroclaw-labs/zeroclaw/issues/6040), Closed): Similar to the Telegram bug, raw `<thinking>` blocks were being POSTed to webhook URLs. 
*   **P1 / High Risk - XML tool_result Leakage** ([Issue #5795](https://github.com/zeroclaw-labs/zeroclaw/issues/5795)): Models returning tool results in XML format (like Gemini-3) leak raw `<tool_result>` tags into channel messages. *Fix currently active in [PR #5796](https://github.com/zeroclaw-labs/zeroclaw/pull/5796).*
*   **P2 / Medium Risk - WebSocket 401s** ([Issue #7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038)): `zeroclaw check` fails with 11/11 websocket 401 errors despite valid auth profiles being configured.

## 6. Feature Requests & Roadmap Signals
Looking toward v0.8.0 stable and v0.8.1, the roadmap is solidifying around air-gapped environments, fleet management, and expanded channel support:
*   **Release Coordination:** ([Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)) Maintainers have opened the v0.8.0 stable release queue tracker, defining the final blockers for config and tool-call parsing.
*   **Air-Gapped Execution / Enclaves:** ([Issue #6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)) An RFC proposing splitting ZeroClaw into two isolated processes (offline agent container + online companion daemon) over a Unix socket. This signals a major upcoming push into high-security/TEE environments.
*   **Fleet Daemon CLI:** ([Issue #6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390)) Implementing `zeroclaw node add <url>` to register remote daemons, building out the multi-machine fleet architecture.
*   **Windows Shell Support:** ([Issue #7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089)) Users are requesting the ability to configure PowerShell or Git Bash as the default Windows shell host instead of `cmd.exe`.

## 7. User Feedback Summary
Real-world user feedback indicates that while the new multi-agent and TUI features are highly anticipated, day-to-day operational stability is currently hampered by edge cases in provider APIs and channel integrations. Users running self-hosted or advanced models (DeepSeek-V4, Gemini-3, Kimi) are experiencing friction with unstripped XML/reasoning tokens. Additionally, users deploying via Docker/Podman are actively improving documentation ([PR #7114](https://github.com/zeroclaw-labs/zeroclaw/pull/7114)) and requesting better native arm64 build support ([PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)), pointing to a userbase heavily interested in containerized, homelab-friendly deployments.

## 8. Backlog Watch
*   **CI Performance & Lost Commits:** Maintainers should review the bulk revert audit ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)) and the CI critical path improvements ([Issue #7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)). PR CI is taking 15-20 minutes, which slows community contributions. 
*   **Broken Discord Link:** A minor but critical community blocker— the Discord invite link in the README is invalid/expired ([Issue #7037](https://github.com/zeroclaw-labs/zeroclaw/issues/7037)). Needs immediate maintainer action.
*   **Real Daemon Heartbeats:** ([Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391)) Currently marked as `blocked`, this feature requests real liveness signals (Online/Stale/Offline) for daemon nodes, which is crucial for the upcoming fleet management features.

</details>