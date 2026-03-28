# OpenClaw Ecosystem Digest 2026-03-29

> Issues: 500 | PRs: 500 | Projects covered: 12 | Generated: 2026-03-28 22:03 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest: 2026-03-29

## 1. Today's Overview
OpenClaw is experiencing **extremely high activity**, with 500 issues and 500 pull requests updated in the last 24 hours. While the volume of open issues (448) and PRs (351) suggests rapid iteration, it also indicates potential quality control challenges with recent releases. The project is aggressively expanding platform support (Linux/Windows apps) and model provider integrations (xAI/Grok, OpenAI Codex), but is currently plagued by authentication regressions and channel connectivity instability. There is a strong focus on "Agent Identity" and orchestration capabilities, signaling an evolution toward multi-agent systems.

## 2. Releases
**No new releases** were recorded today.
*   **Note:** The high volume of regression bugs (auth failures, crashes) suggests the team may be holding the next release (`2026.3.29`?) to stabilize the gateway.

## 3. Project Progress
Significant development effort is visible in merged and active PRs:

*   **xAI & Grok Integration (Merged):** PR #56048 successfully transitioned the bundled xAI provider to the new Responses API and added `x_search` tool support, addressing user complaints about limited Grok functionality.
*   **Linux Companion App (Advanced):** PR #56005 implements a native gateway client for Linux, pushing the project toward platform parity (Issue #75).
*   **Agent Orchestration (New Feature):** PR #56607 introduced an opt-in `sessions_await` tool, allowing orchestrator agents to manage parallel sub-agents reliably without polling.
*   **Matrix E2EE & Streaming (Active):** Fixes for E2EE thumbnail encryption (#54711) and a new draft streaming feature (#56387) are in active review, aiming to fix "broken encryption" complaints.
*   **Guardrails & Security (Active):** PR #55053 proposes a pluggable `GuardrailProvider` interface to authorize tool calls (shell, file, browser), addressing security concerns about unconstrained agent autonomy.

## 4. Community Hot Topics
1.  **Cross-Platform Desktop Apps ([Issue #75](https://github.com/openclaw/openclaw/issues/75))**
    *   **Activity:** 58 comments, 66 👍
    *   **Analysis:** This is the top-voted issue. Users are clamoring for Linux and Windows desktop apps matching the macOS feature set. The recent activity suggests progress in PR #56005 (Linux) is reigniting hope for full platform parity.
2.  **Native Agent Identity ([Issue #49971](https://github.com/openclaw/openclaw/issues/49971))**
    *   **Activity:** 16 comments
    *   **Analysis:** A high-level RFC proposing integration with W3C DID/VC standards for agent trust verification. This signals the community's shift toward "professional" agent use cases requiring auditability and distinct identities.
3.  **Memory Optimization ([Issue #28930](https://github.com/openclaw/openclaw/issues/28930))**
    *   **Activity:** 12 comments
    *   **Analysis:** "Brian," an AI agent running continuously for 11 days, highlights the critical need for better memory management (associative traversal, forgetting). This is a key blocker for long-running autonomous agents.
4.  **Discord Stability ([Issue #13688](https://github.com/openclaw/openclaw/issues/13688))**
    *   **Activity:** 19 comments
    *   **Analysis:** Persistent WebSocket disconnects are causing downtime and message loss. Users rely heavily on Discord for bot interaction, making transport stability a top priority.

## 5. Bugs & Stability
The project is currently facing a wave of **regression bugs**, primarily related to authentication and connectivity in the `2026.3.x` builds.

| Severity | Issue | Description | Status/Fix |
| :--- | :--- | :--- | :--- |
| **CRITICAL** | **Auth Regressions** ([#23538](https://github.com/openclaw/openclaw/issues/23538), [#34830](https://github.com/openclaw/openclaw/issues/34830), [#56364](https://github.com/openclaw/openclaw/issues/56364)) | Anthropic, OpenRouter, and OpenAI Codex auth failing with 401/403 errors despite valid tokens. Affects core functionality. | **Active Dev** (PR #56340 for Codex) |
| **CRITICAL** | **Gateway Crash Loop** ([#54931](https://github.com/openclaw/openclaw/issues/54931)) | Discord health monitor triggers uncaught exception, killing the entire gateway (including other channels). | Open |
| **HIGH** | **Matrix E2EE Broken** ([#53353](https://github.com/openclaw/openclaw/issues/53353)) | Missing WASM file in npm package breaks encryption. | **Fix Merged** (PR #54566) |
| **HIGH** | **Tool Execution Silent Failure** ([#40069](https://github.com/openclaw/openclaw/issues/40069)) | Agent claims to execute tools but nothing happens (no logs, no errors). | Open |
| **MEDIUM** | **Mistral API 422** ([#47079](https://github.com/openclaw/openclaw/issues/47079)) | Adapter sends `max_completion_tokens` which Mistral rejects. | Open |

## 6. Feature Requests & Roadmap Signals
*   **Search Provider Expansion:** Request for Baidu as a web search provider ([Issue #56304](https://github.com/openclaw/openclaw/issues/56304)) to improve Chinese language retrieval.
*   **Enhanced Guardrails:** PR #55053 suggests a move toward safer, policy-controlled agent execution, likely a response to enterprise adoption needs.
*   **Improved UX:** Request for better session management in Control UI ([Issue #29563](https://github.com/openclaw/openclaw/issues/29563)) to avoid "chat clutter."
*   **Prediction:** The next minor version will likely focus heavily on **stabilizing auth flows** and **completing the Linux app** rollout.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **fragile authentication** (repeated 401 errors) and **channel instability** (Discord/Matrix disconnects). The "silent failure" of tools is eroding trust in agent reliability.
*   **Use Cases:** Long-running autonomous agents (e.g., on Raspberry Pi) are stressing the memory systems. Multi-channel users (Telegram/Discord/Matrix) need high availability.
*   **Sentiment:** The high engagement (500+ issues) shows intense interest, but the sentiment is currently "cautiously frustrated" due to regressions in recent builds. Users appreciate the rapid feature additions (Grok support) but need stability.

## 8. Backlog Watch
*   **[Stale/Important] Linux/Windows Apps ([Issue #75](https://github.com/openclaw/openclaw/issues/75)):** The top-voted issue. While Linux progress is visible in PRs, Windows remains unaddressed. Maintainers should clarify the roadmap for Windows support.
*   **[Stale] Session History Backup ([Issue #7598](https://github.com/openclaw/openclaw/issues/7598)):** Users are losing data due to context compaction. A backup layer is requested but remains stale.
*   **[Stale] Docker Skill Install ([Issue #14593](https://github.com/openclaw/openclaw/issues/14593)):** `brew` dependency in Docker containers blocks skill installation. Affects containerized deployments significantly.

---

## Cross-Ecosystem Comparison

# Open Source AI Agent Ecosystem Report
**Date:** 2026-03-29

## 1. Ecosystem Overview
The open-source personal AI assistant landscape is experiencing a rapid transition from experimental frameworks to production-grade platforms. Projects are aggressively competing on **channel ubiquity** (supporting Discord, Telegram, Matrix, WhatsApp) and **model agnosticism** (decoupling from single LLM providers like Anthropic/OpenAI). A clear architectural convergence is emerging around **MCP (Model Context Protocol)** for tool integration and **multi-agent orchestration** capabilities. However, the ecosystem is currently facing a collective "growing pains" phase, where high-velocity feature development has introduced stability regressions, particularly in authentication, encryption (Matrix E2EE), and local LLM support.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | No Release (Stabilizing) | 🟡 High Velocity / High Risk |
| **Zeroclaw** | 44 | 49 Merged | No Release (Imminent) | 🟢 Excellent Merge Rate |
| **PicoClaw** | 37 | 90 (54 Merged) | Nightly Build | 🟢 High Velocity / Stable |
| **Moltis** | ~15 | 19 (13 Merged) | 4 Releases | 🟢 Excellent (CI/CD Active) |
| **IronClaw** | 9 | 50 | No Release (Staging) | 🟢 Good (Security Focus) |
| **NanoBot** | 20 | 39 (13 Merged) | Stable (`post6`) | 🟡 Good (Bug Fixing) |
| **CoPaw** | 41 | 25 (13 Merged) | No Release | 🟡 Unstable (High Bug Count) |
| **NanoClaw** | 7 | 34 (14 Merged) | No Release | 🟢 Good (Feature Rich) |
| **LobsterAI** | 6 | 12 | Released `2026.3.29` | 🟢 Healthy / Enterprise |
| **TinyClaw** | ~10 | 15 Merged | No Release | 🟢 Healthy (Hardening) |
| **ZeptoClaw** | 1 | 0 | No Release | 🔴 Low Activity |
| **EasyClaw** | 2 | 0 | Released `v1.7.8` | 🔴 Critical Bugs Open |

## 3. OpenClaw's Position

**Advantages vs. Peers:**
*   **Mindshare & Scale:** With 500+ issues and PRs updated daily, OpenClaw is the clear focal point of the community. It is the "reference implementation" that other projects (like IronClaw) are compared against.
*   **Orchestration Leadership:** The introduction of `sessions_await` (PR #56607) and focus on "Agent Identity" (W3C DID/VC) places it ahead of peers in solving complex multi-agent collaboration problems.

**Technical Approach Differences:**
*   **Gateway Architecture:** Unlike monolithic approaches (LobsterAI), OpenClaw relies heavily on a separate "Gateway" service for channel connectivity. This offers flexibility but currently suffers from stability issues (Crash loops) that integrated UIs (like PicoClaw's) avoid.
*   **Security Model:** OpenClaw is moving toward "Guardrails" (PR #55053) and explicit authorization policies, contrasting with the "runtime hardening" approach seen in IronClaw.

**Community Size:**
*   OpenClaw's community is significantly larger but currently more frustrated ("cautiously frustrated") due to auth regressions, whereas smaller communities (Moltis, TinyClaw) exhibit higher satisfaction with rapid, stable merges.

## 4. Shared Technical Focus Areas

1.  **Matrix Protocol & E2EE Stability**
    *   **Projects:** OpenClaw, Zeroclaw, NanoBot, Moltis.
    *   **Need:** End-to-End Encryption (E2EE) is consistently broken or "friction-heavy" across the ecosystem. Missing WASM files, key recovery failures, and thread context loss are universal pain points.
2.  **Local LLM / Ollama Integration**
    *   **Projects:** PicoClaw, CoPaw, NanoBot, Moltis.
    *   **Need:** "Silent failures" and configuration complexity for local models are top complaints. Users demand "zero-config" or auto-discovery for Ollama endpoints.
3.  **Authentication & Provider Resilience**
    *   **Projects:** OpenClaw, EasyClaw, NanoBot.
    *   **Need:** Frequent API changes (e.g., deprecation of `max_tokens`) and brittle auth flows are causing "silent" 401/400 errors. The ecosystem needs standardized "provider adapter" layers.
4.  **Long-Running Memory**
    *   **Projects:** OpenClaw ("Brian" agent), NanoBot, Moltis.
    *   **Need:** Memory optimization and "context compaction" strategies are critical as users run agents continuously for days/weeks.

## 5. Differentiation Analysis

| Segment | Projects | Strategy |
| :--- | :--- | :--- |
| **Platform Agnosticism** | **OpenClaw, Zeroclaw** | Support *every* channel (Discord, Slack, WhatsApp, WeCom, Email) and *every* model. High complexity, high flexibility. |
| **Edge/Lightweight** | **PicoClaw, TinyClaw** | Focus on OpenWrt, Routers, Termux, and low-resource environments. Web-based management UIs. |
| **Enterprise/Secure** | **IronClaw, LobsterAI** | Focus on WASM execution, database security, internal "Cowork" plugins, and strict error handling. |
| **Consumer/Desktop** | **EasyClaw, LobsterAI** | Packaged desktop apps (macOS/Windows) with a focus on end-user UI rather than headless daemon operation. |
| **Research/Experimental** | **NanoBot, CoPaw** | Focus on multi-agent collaboration frameworks, "Pluggable Memory," and advanced evaluation metrics. |

## 6. Community Momentum & Maturity

*   **Tier 1: Rapid Iteration (High Risk/Reward)**
    *   **OpenClaw:** Massive scale but currently battling regressions. If stability is restored, it will solidify dominance.
    *   **Zeroclaw & PicoClaw:** Exceptional velocity with high merge rates. These are the "rising stars" delivering features faster than the coreOpenClaw project.
*   **Tier 2: Stabilization & Refinement**
    *   **Moltis & TinyClaw:** High merge counts relative to team size. Focus on "hardening" (fixing Docker, install scripts) suggests they are maturing toward production-ready releases.
    *   **IronClaw:** Slower, methodical development focused on architectural "v2" cleanup and security.
*   **Tier 3: Early Stage / Niche**
    *   **ZeptoClaw & EasyClaw:** Currently stalled or facing critical blocking bugs with low maintainer engagement visible in the last 24 hours.

## 7. Trend Signals

1.  **The Rise of "Headless" Daemon Managers:**
    *   Users are moving away from keeping a browser tab open. Projects like **TinyClaw** (TinyOffice) and **PicoClaw** (LuCI/OpenWrt) are prioritizing daemon management and TUI/Web dashboards.
2.  **Vendor Lock-in Anxiety:**
    *   The demand for "OpenAI-Compatible" layers and "Model Fallback" (Issue #4872 in Zeroclaw, #80 in NanoClaw) signals that users are desperate to avoid reliance on a single provider (Anthropic/OpenAI).
3.  **Agent-to-Agent Communication:**
    *   Beyond just "tools," we are seeing the emergence of **Peer-to-Peer agent channels** (NanoClaw PR #1516) and **DAG-based orchestration** (Zeroclaw PR #3592). The future is agents managing other agents.
4.  **Security as a Feature:**
    *   With the rise of autonomous agents executing shell commands, "Guardrails" and "Sandboxing" (OpenClaw PR #55053, IronClaw PR #1719) are becoming standard requirements, not add-ons.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-03-29

## 1. Today's Overview
NanoBot is demonstrating **high velocity development** with 39 pull requests updated and 20 issues active in the last 24 hours. The project is in an active refinement phase following the `v0.1.4.post6` release, with heavy community focus on channel integrations (Telegram, Matrix, WhatsApp) and LLM provider compatibility. A significant portion of today's activity involves bug fixes for the latest version and architectural discussions regarding agent loop reliability and memory frameworks. The maintainer team is actively merging fixes, indicating responsive stewardship despite the lack of a new tagged release today.

## 2. Releases
**No new releases** were recorded today. The project appears to be stabilizing the `v0.1.4.post6` branch, with numerous PRs merged today likely targeting a future patch or minor release.

## 3. Project Progress
Today saw significant progress in extensibility and stability, with **13 PRs merged/closed**:

*   **Agent Loop Reliability:** PR [#2580](https://github.com/HKUDS/nanobot/pull/2580) (merged) introduces a "repair retry" mechanism to prevent the agent from returning empty responses after tool usage, directly addressing user-facing failures.
*   **Configuration Security:** Merged PRs [#2212](https://github.com/HKUDS/nanobot/pull/2212) and [#2265](https://github.com/HKUDS/nanobot/pull/2265) implement runtime secret referencing and harden environment variable handling, significantly improving security and docker-compose workflows.
*   **Heartbeat Optimization:** PR [#2420](https://github.com/HKUDS/nanobot/pull/2420) (merged) resolves state bloat by making heartbeat runs ephemeral, preventing database growth from periodic tasks.
*   **Telegram Enhancements:** Merged [#2577](https://github.com/HKUDS/nanobot/pull/2577) to improve tool hint rendering.
*   **New Channels Incoming:** PRs for **Mattermost** [#2592](https://github.com/HKUDS/nanobot/pull/2592) and **Matrix Streaming** [#2447](https://github.com/HKUDS/nanobot/pull/2447) are under active review, signaling rapid platform expansion.

## 4. Community Hot Topics
*   **Search Provider Criteria ([#2572](https://github.com/HKUDS/nanobot/issues/2572)):** Users and maintainers are discussing establishing strict criteria for accepting new search provider PRs. With support already existing for Brave, Tavily, DuckDuckGo, SearXNG, and Jina, the community aims to prevent fragmentation.
*   **Memory Framework Overhaul ([PR #2515](https://github.com/HKUDS/nanobot/pull/2515)):** A major PR proposing a "Pluggable Memory Framework" (integrating Mem0, Graphiti, Memobase) is generating attention as users seek persistent, long-term memory capabilities beyond the current implementation.
*   **Telegram Streaming Issues ([#2568](https://github.com/HKUDS/nanobot/issues/2568) & [#2559](https://github.com/HKUDS/nanobot/issues/2559)):** Users report regression in `v0.1.4.post6` where long streaming responses fail or render markdown inconsistently.
*   **Local Model Support ([#2570](https://github.com/HKUDS/nanobot/issues/2570)):** Difficulties configuring local Ollama models (404 errors) remain a pain point for self-hosting users.

## 5. Bugs & Stability
Recent updates have introduced several regressions, largely centered on provider compatibility and specific channels:

1.  **Critical: OpenAI Compatibility Deprecation ([#2462](https://github.com/HKUDS/nanobot/issues/2462)):** *Closed via PR.* The usage of deprecated `max_tokens` (vs `max_completion_tokens`) broke OpenAI model usage. Fix identified by user.
2.  **High: Kimi K2.5 Thinking Mode Failure ([#2579](https://github.com/HKUDS/nanobot/issues/2579)):** The "thinking" mode throws errors due to missing `reasoning_content` in tool calls. **Fix:** PR [#2598](https://github.com/HKUDS/nanobot/pull/2598) is open.
3.  **High: GitHub Copilot Login Failure ([#2573](https://github.com/HKUDS/nanobot/issues/2573)):** OAuth login broken in `v0.1.4.post6` (bad header format).
4.  **High: Telegram Streaming Length Limit ([#2559](https://github.com/HKUDS/nanobot/issues/2559)):** Streaming responses crash with `Message_too_long` instead of paginating.
5.  **Medium: Off-by-One Error in Session Manager ([#2583](https://github.com/HKUDS/nanobot/issues/2583)):** Indexing error in `_find_legal_start`. **Fix:** PR [#2597](https://github.com/HKUDS/nanobot/pull/2597) is open.
6.  **Medium: Matrix E2EE Auth ([#1681](https://github.com/HKUDS/nanobot/issues/1681)):** Ongoing issues with Matrix encryption sessions. **Fix:** PR [#2596](https://github.com/HKUDS/nanobot/pull/2596) proposes a login flow fix.

## 6. Feature Requests & Roadmap Signals
*   **Voice & Audio:** Strong demand for native WhatsApp voice support (STT/TTS) ([#2152](https://github.com/HKUDS/nanobot/issues/2152)) and "Xiaozhi" voice gateway integration ([PR #2584](https://github.com/HKUDS/nanobot/pull/2584)).
*   **Agent Architecture:** Proposal to improve Agent loop termination logic ([#2576](https://github.com/HKUDS/nanobot/issues/2576)) to better summarize tool results rather than falling back to generic error strings.
*   **CLI Observability:** PR [#2589](https://github.com/HKUDS/nanobot/pull/2589) proposes new `status`, `agents`, and `health` CLI commands, which aligns with the need for better debugging tools.

**Roadmap Prediction:** The next version will likely focus heavily on **channel stability** (Telegram/Matrix fixes) and **provider compatibility** (Kimi, OpenAI, Copilot).

## 7. User Feedback Summary
Users are enthusiastic about the rapid feature additions (Mattermost, advanced memory) but are currently experiencing friction with **stability in the `post6` release**.
*   **Pain Points:** "It just stopped working after the upgrade" is a common theme, specifically regarding Telegram rendering and specific LLM providers (Minimax, OpenAI, Copilot).
*   **Use Cases:** Users are pushing NanoBot into production environments, specifically for home automation (Home Assistant integration [#2588](https://github.com/HKUDS/nanobot/issues/2588)) and as a backend for consumer-facing Telegram bots.
*   **Sentiment:** Positive regarding maintainers' responsiveness to PRs, but user frustration is rising regarding QA for point releases.

## 8. Backlog Watch
*   **[#1121 Fallback Model on Timeout](https://github.com/HKUDS/nanobot/issues/1121):** A critical reliability issue (created Feb 24) where fallback models aren't triggered on 503/Timeout errors. It has 2 upvotes and needs maintainer attention to prevent data loss in production.
*   **[#2599 Subagent Configuration](https://github.com/HKUDS/nanobot/issues/2599):** Users lack official documentation/examples for defining subagents in `config.json`. This is a high-value documentation task.
*   **[PR #1443 Heartbeat Refactor](https://github.com/HKUDS/nanobot/pull/1443):** Open since March 2nd, this PR decouples heartbeat reasoning from notifications. It seems stalled and needs review to finalize the heartbeat improvements.

</details>

<details>
<summary><strong>Zeroclaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-03-29

## 1. Today's Overview
ZeroClaw is demonstrating **extremely high development velocity**, with a massive 49 PRs merged in the last 24 hours against only 1 remaining open. This indicates a mature, active codebase aggressively integrating community contributions and stabilizing recent features. The issue volume (44 updated) suggests growing adoption and user engagement, particularly around the newly expanded channel ecosystem (Matrix, WhatsApp, Email) and provider integrations. No new official releases were tagged today, but the merge volume suggests a significant version bump may be imminent.

## 2. Releases
**No new releases** were published today. The project appears to be in a heavy integration/stabilization phase following recent feature additions.

## 3. Project Progress
A total of **49 PRs were merged**, covering a wide spectrum of the platform:

*   **Channel Integrations:**
    *   **WhatsApp Web:** Added `mention_only` support for group filtering ([PR #3689](https://github.com/zeroclaw-labs/zeroclaw/pull/3689), [PR #4915](https://github.com/zeroclaw-labs/zeroclaw/pull/4915)).
    *   **Email:** Implemented attachment download and multipart MIME sending ([PR #4913](https://github.com/zeroclaw-labs/zeroclaw/pull/4913)).
    *   **Gmail:** Added real-time push notifications via Google Pub/Sub ([PR #4164](https://github.com/zeroclaw-labs/zeroclaw/pull/4164)).
    *   **WeCom:** Added long-connection AI bot channel ([PR #3305](https://github.com/zeroclaw-labs/zeroclaw/pull/3305)).
    *   **Bridge:** Merged websocket channel for third-party integrations ([PR #3401](https://github.com/zeroclaw-labs/zeroclaw/pull/3401)).
*   **Provider Support:**
    *   Added **ZhipuJwt** authentication for Z.AI and GLM providers ([PR #4911](https://github.com/zeroclaw-labs/zeroclaw/pull/4911)).
    *   Normalized **OpenAI Codex** response payloads ([PR #3829](https://github.com/zeroclaw-labs/zeroclaw/pull/3829)).
*   **Core Agent & Tools:**
    *   **Multimodal Handling:** Fixed graceful degradation by trimming old images instead of hard-failing ([PR #4912](https://github.com/zeroclaw-labs/zeroclaw/pull/4912)).
    *   **SOP Engine:** Added DAG engine for fan-out/conditional execution ([PR #3592](https://github.com/zeroclaw-labs/zeroclaw/pull/3592)).
    *   **Git Tool:** Enhanced with clone, fetch, and remote branch listing ([PR #4085](https://github.com/zeroclaw-labs/zeroclaw/pull/4085)).
    *   **Media Pipeline:** Added automatic transcription and video annotation ([PR #4158](https://github.com/zeroclaw-labs/zeroclaw/pull/4158)).
*   **UX & Ops:**
    *   **Hot Reload:** Added `zeroclaw config reload` to preserve history during config changes ([PR #3571](https://github.com/zeroclaw-labs/zeroclaw/pull/3571)).
    *   **TUI:** Introduced an interactive Terminal UI ([PR #3823](https://github.com/zeroclaw-labs/zeroclaw/pull/3823)).
    *   **Multi-Node:** Added control plane for gateway clustering ([PR #3824](https://github.com/zeroclaw-labs/zeroclaw/pull/3824)).

## 4. Community Hot Topics
The most discussed issues revolve around **integration friction** and **platform support**:

*   **[Issue #3882](https://github.com/zeroclaw-labs/zeroclaw/issues/3882) (11 comments):** Request for **Alibaba Cloud Bailian Coding Plan** support. Users are encountering 401/405 errors trying to use this regional LLM service, highlighting demand for broader Asian market provider support.
*   **[Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) (9 comments):** A meta-issue tracking **Matrix channel friction**. It highlights that E2EE (End-to-End Encryption) is currently a major pain point, causing broken rooms and user frustration.
*   **[Issue #4804](https://github.com/zeroclaw-labs/zeroclaw/issues/4804) (5 comments):** Reports that **Matrix thread replies lose conversation context** after the second message, severely degrading the multi-turn chat experience.
*   **[Issue #3513](https://github.com/zeroclaw-labs/zeroclaw/issues/3513) (4 comments):** The agent sends multiple fragmented messages instead of one consolidated response, impacting perceived intelligence.

## 5. Bugs & Stability
Several high-severity bugs were identified, with some seeing immediate fix attempts:

*   **S1 - Workflow Blocked:**
    *   **[Issue #4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878):** **E2EE Recovery Failure.** Encrypted DMs are non-functional because the recovery process fails to download room keys from backup.
    *   **[Issue #4893](https://github.com/zeroclaw-labs/zeroclaw/issues/4893):** **MCP Tools via Webhook.** MCP tools are not executed when requests come through the `/webhook` endpoint.
    *   **[Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842):** **ARM64 Update Broken.** The auto-updater downloads x86 binaries on Raspberry Pi (aarch64), causing "Exec format error."
*   **S2 - Degraded Behavior:**
    *   **[Issue #4810](https://github.com/zeroclaw-labs/zeroclaw/issues/4810) [FIXED]:** History pruner severed `tool_use`/`tool_result` pairs, causing Anthropic 400 errors. (Fixed in recent merges).
    *   **[Issue #4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880):** **Context Compression** is not triggered in daemon mode, potentially leading to faster context overflow in long-running channels.

## 6. Feature Requests & Roadmap Signals
Key signals from user requests point toward **usability** and **flexibility**:

*   **GitHub Copilot Provider ([Issue #4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851)):** Users want to utilize existing Copilot subscriptions as a backend.
*   **Multi-Model Fallback ([Issue #4872](https://github.com/zeroclaw-labs/zeroclaw/issues/4872)):** Clear demand for automated failover between providers to ensure uptime.
*   **Memory Namespace Isolation ([Issue #4870](https://github.com/zeroclaw-labs/zeroclaw/issues/4870)):** Advanced users want to isolate memory for delegate agents, suggesting sophisticated multi-agent use cases are emerging.
*   **Anthropic-Compatible Onboarding ([Issue #4896](https://github.com/zeroclaw-labs/zeroclaw/issues/4896)):** Users want to configure custom Anthropic-compatible endpoints (like local proxies or Zhipu AI) during the initial setup flow, not just via manual config edits.

## 7. User Feedback Summary
*   **Pain Points:**
    *   **Matrix Stability:** Users report that encrypted Matrix rooms are "completely broken" or suffering from severe friction (key recovery, thread context).
    *   **Documentation Gaps:** Several users ([Issue #4863](https://github.com/zeroclaw-labs/zeroclaw/issues/4863), [Issue #4851](https://github.com/zeroclaw-labs/zeroclaw/issues/4851)) cite missing documentation for providers (Open-Codex, Copilot) and onboarding flows.
    *   **Channel "Amnesia":** Web chat and Matrix channels are losing context too easily, frustrating users who expect persistent memory.
*   **Satisfaction:**
    *   High engagement with the **hot-reload config** feature indicates strong appreciation for DevOps-friendly improvements.
    *   Rapid adoption of new channels (WhatsApp, Email) shows these were highly anticipated additions.

## 8. Backlog Watch
*   **[Issue #4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) (E2EE Recovery):** Critical for privacy-focused users. Currently blocks reliable use of encrypted Matrix DMs.
*   **[Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842) (ARM64 Update):** Needs a fix in the update command logic to detect `aarch64` correctly. Currently breaks self-updating on edge devices.
*   **[Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) (Matrix Friction):** An umbrella issue tracking Matrix stability. Maintainers should prioritize resolving the E2EE and thread-context sub-issues to restore channel reliability.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-03-29)

## 1. Today's Overview
PicoClaw demonstrates **very high active development velocity** with 90 PRs updated and 37 Issues processed in the last 24 hours. The project is currently stabilizing the `v0.2.4` release cycle, evidenced by the nightly build `v0.2.4-nightly.20260328`. The community is highly engaged in refining the "Agent Refactor" (Phase 2) and enhancing platform compatibility (OpenWrt, Windows, Termux). A significant portion of today's activity focuses on hardening security (tool execution, web UI auth) and fixing provider-specific integration bugs (Ollama, Feishu, Discord).

## 2. Releases
- **Nightly Build**: `v0.2.4-nightly.20260328`
  - **Status**: Automated build from `main` branch.
  - **Notes**: Intended for testing upcoming features and fixes. Users reported high CPU usage in the stable `v0.2.4` release, which upcoming nightlies/patches are likely addressing.
  - **Changelog**: [Compare v0.2.4...main](https://github.com/sipeed/picoclaw/compare/v0.2.4...main)

## 3. Project Progress
The development team and community merged/closed **54 PRs**, indicating rapid integration of fixes and features.

- **Platform Expansion**:
  - **OpenWrt Support**: Added a LuCI web management interface ([PR #2130](https://github.com/sipeed/picoclaw/pull/2130)), allowing PicoClaw to run on routers.
  - **Windows Compatibility**: Fixed build detection for Windows shells (MINGW/MSYS) ([PR #2051](https://github.com/sipeed/picoclaw/pull/2051)).
- **Security Enhancements**:
  - **Gateway Auth**: Introduction of PID file management and token-based authentication for the gateway and reload endpoints ([PR #2134](https://github.com/sipeed/picoclaw/pull/2134)).
  - **Web UI Protection**: Implementation of token-based login for the Launcher Dashboard ([PR #1953](https://github.com/sipeed/picoclaw/pull/1953)).
- **Agent Capabilities**:
  - **Vision**: Added `load_image` tool to enable the agent to "see" local image files ([PR #2116](https://github.com/sipeed/picoclaw/pull/2116)).
  - **Multi-Agent**: Progress on "Team tool" integration with SubTurn for multi-agent collaboration ([PR #1940](https://github.com/sipeed/picoclaw/pull/1940)).
- **Provider Fixes**:
  - **AWS Bedrock**: Better handling of SSO token expiration ([PR #1988](https://github.com/sipeed/picoclaw/pull/1988)).
  - **WeChat/Weixin**: Fixed context token persistence to survive restarts ([PR #2124](https://github.com/sipeed/picoclaw/pull/2124)).

## 4. Community Hot Topics
- **Local LLM Configuration Struggles** ([Issue #1161](https://github.com/sipeed/picoclaw/issues/1161)): The most discussed issue (18 comments). Users find it difficult to configure local Ollama models correctly. The agent runs but often produces no response. *Underlying need: Better "zero-config" or guided setup for local model providers.*
- **Safety Guard Over-blocking** ([Issue #2107](https://github.com/sipeed/picoclaw/issues/2107)): A highly active bug report (14 comments) where the safety guard blocks legitimate Python script executions. *Underlying need: More granular or "smart" security policies that understand code context vs. shell injection.*
- **Config Wiping & Web UI Bugs** ([Issue #1941](https://github.com/sipeed/picoclaw/issues/1941) & [PR #2118](https://github.com/sipeed/picoclaw/pull/2118)): Users reported configuration loss. Fixes were merged to handle secret field merging better in the Web UI. *Underlying need: Reliable persistence for user settings.*

## 5. Bugs & Stability
- **High CPU Usage** ([Issue #2001](https://github.com/sipeed/picoclaw/issues/2001)): Users report v0.2.4 consumes excessive CPU when idle (FreeBSD/Linux). Status: Open, investigating.
- **Tool Call Extraction Flaw** ([Issue #2136](https://github.com/sipeed/picoclaw/issues/2136)): A regression in extracting tool calls from text responses, potentially breaking agent loops. Fix pending in related PRs.
- **Feishu & QQ Channel Issues**:
  - Feishu configuration fails in Termux/Android ([Issue #2052](https://github.com/sipeed/picoclaw/issues/2052)).
  - QQ channel unusable on Windows ([Issue #2080](https://github.com/sipeed/picoclaw/issues/2080)).
- **Config Restart Indicators** ([Issue #1973](https://github.com/sipeed/picoclaw/issues/1973)): Web UI fails to warn users that a restart is required after changing tool/config settings.

## 6. Feature Requests & Roadmap Signals
- **Native Telegram Reactions** ([Issue #1328](https://github.com/sipeed/picoclaw/issues/1328)): Request for the agent to use emoji reactions (e.g., "thumbs up") instead of text for low-noise feedback. *Likely to be implemented soon given community interest.*
- **Live Task List** ([Issue #2137](https://github.com/sipeed/picoclaw/issues/2137)): Proposal for agents to update a "checklist" message in the chat while working on long tasks, improving perceived responsiveness.
- **SiliconFlow Provider** ([Issue #2045](https://github.com/sipeed/picoclaw/issues/2045)): Request to support the SiliconFlow platform (prefix `pro`).
- **Roadmap**: The "Meta: Agent Refactor Phase 2" ([Issue #1934](https://github.com/sipeed/picoclaw/issues/1934)) is active, focusing on multi-agent collaboration and memory.

## 7. User Feedback Summary
- **Pain Points**: Users are frustrated by "silent failures" (agent running but not responding) and "false positives" in security blocking. The gap between the Config UI and the actual `config.go` struct (undocumented parameters) causes confusion.
- **Positive Signals**: Enthusiasm for running PicoClaw on edge devices (OpenWrt routers, Android Termux). The fast turnaround on Web UI secret persistence bugs was well-received.
- **Use Cases**: Users are attempting to deploy PicoClaw as a persistent personal assistant on low-power devices (RPi, Routers) using local LLMs (Ollama) to avoid API costs.

## 8. Backlog Watch
- **Security Defaults** ([Issue #1525](https://github.com/sipeed/picoclaw/issues/1525)): Request to change `exec.allow_remote` to `false` by default. This critical security suggestion has been open since mid-March and needs a decision to harden default installations.
- **Provider Strict Compliance** ([PR #1460](https://github.com/sipeed/picoclaw/pull/1460)): A fix for OpenAI-compatible providers (handling empty content with tool calls) has been open for 2 weeks. It is crucial for users using LM Studio or other strict local servers.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-03-29

## 1. Today's Overview
NanoClaw is experiencing a **very high** level of activity, indicative of a rapidly evolving project in the integration and stabilization phase of its development cycle. The community is highly engaged, with 34 Pull Requests updated (14 merged/closed) and 7 Issues updated in the last 24 hours. The focus is heavily shifting toward **extensibility** (new channels like Discord, WhatsApp media, Peer-to-Peer) and **architectural hardening** (OneCLI migration, security proxies). However, the project is currently navigating a minor operational hiccup regarding an SSL certificate and a significant strategic decision regarding upstream dependency decoupling.

## 2. Releases
No new releases were recorded today. The development activity suggests the project is building toward a significant minor or major version bump, likely addressing the architectural changes seen in recent PRs (OneCLI integration, dashboard, new channels).

## 3. Project Progress
Significant advancements were merged today, focusing on fixing container networking issues and expanding integration capabilities.

*   **Apple Container Networking Fix ([PR #1523](https://github.com/qwibitai/nanoclaw/pull/1523)):** A critical fix for macOS/Apple Container VM users was merged, replacing hardcoded `host.docker.internal` references with dynamic bridge interface detection (`bridge100`/`bridge0`) and binding the proxy to `0.0.0.0`.
*   **Local Chat PWA ([PR #1521](https://github.com/qwibitai/nanoclaw/pull/1521)):** Merged a new self-hosted Progressive Web App frontend, allowing browser-based interaction with NanoClaw agents without third-party messaging services.
*   **LazyLibrarian Integration ([PR #1513](https://github.com/qwibitai/nanoclaw/pull/1513)):** A new skill was merged, enabling agents to search and manage books via LazyLibrarian.
*   **Stale Session Self-Healing ([PR #1115](https://github.com/qwibitai/nanoclaw/pull/1115)):** Fixed a silent failure occurring when host/container users mismatched, adding logic to self-heal missing session transcripts.

## 4. Community Hot Topics
*   **Provider Independence ([Issue #80](https://github.com/qwibitai/nanoclaw/issues/80)):**
    *   **Activity:** 54 👍 | 27 Comments
    *   **Analysis:** The most active issue highlights user anxiety regarding "vendor lock-in" and the risk of Anthropic subscription bans. With 54 upvotes, the community is strongly demanding support for alternative runtimes like OpenCode, Codex, or Gemini to ensure the tool's longevity and flexibility.
*   **SSL Certificate Failure ([Issue #1503](https://github.com/qwibitai/nanoclaw/issues/1503)):**
    *   **Activity:** 2 Comments
    *   **Analysis:** While small in comments, this is a high-urgency operational issue affecting the main `nanoclaw.dev` domain, blocking new user onboarding or dashboard access.

## 5. Bugs & Stability
*   **[High Severity] Security: OAuth Token Exposure ([Issue #1500](https://github.com/qwibitai/nanoclaw/issues/1500)):**
    *   **Problem:** Gmail and Calendar OAuth tokens are currently mounted directly into containers, making them vulnerable to exfiltration via prompt injection attacks.
    *   **Fix Status:** A fix is actively being reviewed in [PR #1520](https://github.com/qwibitai/nanoclaw/pull/1520), which migrates credentials to the OneCLI vault.
*   **[Medium Severity] WhatsApp Media Inaccessibility ([Issue #1522](https://github.com/qwibitai/nanoclaw/issues/1522)):**
    *   **Problem:** Agents cannot process WhatsApp photos or voice notes, receiving only a `media_id` rather than the binary content.
    *   **Fix Status:** A parallel fix for Telegram media ([PR #1507](https://github.com/qwibitai/nanoclaw/pull/1507)) has been submitted, suggesting a pattern for a potential WhatsApp fix soon.
*   **[Medium Severity] Task Scheduler Race Conditions ([PR #1519](https://github.com/qwibitai/nanoclaw/pull/1519)):**
    *   **Problem:** Slow-running tasks (>60s) trigger duplicate runs.
    *   **Fix Status:** Open PR seeks to pre-advance `next_run` timestamps and clean up orphaned tasks.

## 6. Feature Requests & Roadmap Signals
The roadmap is clearly trending toward **multi-modality** and **platform agnosticism**.
*   **Web Dashboard:** Two separate PRs ([#1524](https://github.com/qwibitai/nanoclaw/pull/1524), [#1514](https://github.com/qwibitai/nanoclaw/pull/1514)) introduce a monitoring dashboard, signaling a push for better observability.
*   **Agent-to-Agent Communication:** [PR #1516](https://github.com/qwibitai/nanoclaw/pull/1516) introduces a "peer channel," suggesting a future where NanoClaw instances can collaborate directly.
*   **Multimodal Discord:** [PR #1517](https://github.com/qwibitai/nanoclaw/pull/1517) adds Discord support with image resizing, indicating a focus on rich media handling.
*   **Predicted Next Version:** Likely includes the Web Dashboard, Apple Container fixes, and the OneCLI security migration.

## 7. User Feedback Summary
*   **Pain Points:** Users are concerned about the fragility of relying solely on Claude/Anthropic (fear of bans). There is also frustration regarding media handling in WhatsApp, where the agent "silently" fails to see images.
*   **Use Cases:** Users are deploying NanoClaw on diverse hardware, including Apple Containers and WSL (crash recovery issues). There is significant interest in home automation/local services (LazyLibrarian, Home Assistant via MCP).
*   **Sentiment:** Generally positive and collaborative, with a high volume of external contributions (PRs) fixing edge cases and adding channels.

## 8. Backlog Watch
*   **[Critical] Upstream Security Patches ([Issue #1512](https://github.com/qwibitai/nanoclaw/issues/1512)):** The project is flagged as being **254 commits behind** upstream. A maintainer needs to cherry-pick critical security fixes (specifically for command injection in `stopContainer`) immediately.
*   **[Strategic] OneCLI Migration ([Issue #1511](https://github.com/qwibitai/nanoclaw/issues/1511)):** A major architectural shift replacing the internal credential proxy with `@onecli-sh/sdk` is pending evaluation. This is a blocking factor for the OAuth security fixes.
*   **[Stale] QQ Channel Support ([PR #836](https://github.com/qwibitai/nanoclaw/pull/836)):** Open since March 8th, this PR adds QQ bot support but remains unmerged. Maintainer attention is requested to unblock this feature for the Chinese user base.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-03-29

## 1. Today's Overview
IronClaw demonstrates high development velocity with a focus on architectural evolution and security hardening. The project saw significant activity with 50 updated Pull Requests (37 open) and 9 Issues (5 open), indicating an intense consolidation phase rather than feature freezes. Key themes include the extraction of the frontend into a dedicated crate, the introduction of a "v2" unified execution engine, and multiple security fixes targeting API leakage and thread hijacking. While stability remains a concern with new bug reports regarding Telegram and Feishu integrations, the volume of "staging-promotion" PRs suggests a robust CI/CD pipeline actively pushing fixes.

## 2. Releases
**No new releases** were recorded in the last 24 hours. Development activity is currently clustered in the `staging` and `staging-promote` branches (e.g., PRs [#1732](https://github.com/nearai/ironclaw/pull/1732), [#1730](https://github.com/nearai/ironclaw/pull/1730)), suggesting that a significant batch release is imminent once the current v2 architecture and security patches pass validation.

## 3. Project Progress
Significant architectural refactoring and stability improvements defined the day's progress:

*   **Architecture (Frontend & Engine):**
    *   **PR #1725** (Core): Extracted the gateway frontend into a dedicated `ironclaw_frontend` crate with a widget system for UI customization.
    *   **PR #1557** (Core): Continued development on the unified "Thread-Capability-CodeAct" execution engine (v2 architecture), aiming to replace fragmented abstractions.
*   **Security Hardening:**
    *   **PR #1650** (Merged): Overhauled `full_job` execution reliability, fixing self-dialogue loops and silent output loss.
    *   **PR #1719**: Implemented sanitization of internal error details to prevent database exceptions from leaking to API clients (addressing Issue #1702).
    *   **PR #1590**: Fixed cross-channel approval thread hijacking by adding `source_channel` tracking.
*   **Channel & Integrations:**
    *   **PR #944**: Advanced Discord Gateway support in WASM.
    *   **PR #1549**: Implemented Slack Socket Mode for NAT-friendly connectivity.
*   **LLM Providers:**
    *   **PR #1613** (Merged): Added a generic OpenAI Responses provider for custom gateways.

## 4. Community Hot Topics
*   **Telegram Bot Instability ([Issue #1676](https://github.com/nearai/ironclaw/issues/1676)):**
    The most active discussion involves a persistent bug where the Telegram bot fails to auto-poll for new messages. Users report frustration as a competing fork ("openclaw") handles this correctly, highlighting a gap in IronClaw's HTTP tool routines.
*   **Feishu/Lark Integration Blocking ([Issue #1673](https://github.com/nearai/ironclaw/issues/1673)):**
    Users are reporting that the Feishu channel gets stuck in an "Awaiting Pairing" state indefinitely, preventing the use of this specific communication channel.
*   **Evaluation Metrics Reform ([Issue #1731](https://github.com/nearai/ironclaw/issues/1731)):**
    A proposal to replace the current `pass_rate` metric (binary pass/fail) with `pass@k` and `pass^k` metrics. The community argues that the current "perfect score or fail" approach is misleading for LLM-judged tasks where a 0.92 score is functionally a success.

## 5. Bugs & Stability
*   **[HIGH] Database Error Leakage ([Issue #1702](https://github.com/nearai/ironclaw/issues/1702) - Closed):**
    *   **Summary:** Staging CI detected that raw database exceptions were being formatted directly into API responses.
    *   **Status:** Fixed via **PR #1719** (Open/Staging), which introduces generic 500 error responses for clients while logging detailed errors server-side.
*   **[MEDIUM] Telegram HTTP Tool Failure ([Issue #1676](https://github.com/nearai/ironclaw/issues/1676) - Open):**
    *   **Summary:** The `http` tool fails during polling routines, rendering the Telegram bot half-functional.
    *   **Status:** Active discussion (9 comments), awaiting root cause fix.
*   **[MEDIUM] WASM Schema Permissiveness ([Issue #1303](https://github.com/nearai/ironclaw/issues/1303) - Closed):**
    *   **Summary:** WASM tools were exposing `{}` (any) schemas to the LLM instead of strict typed schemas.
    *   **Status:** Closed; likely addressed in recent WASM/tooling PRs.
*   **[MEDIUM] Feishu Pairing Loop ([Issue #1673](https://github.com/nearai/ironclaw/issues/1673) - Open):**
    *   **Summary:** Channel configuration gets stuck without generating a pairing code.

## 6. Feature Requests & Roadmap Signals
*   **Hot-Reload & Config Unification ([Issue #1119](https://github.com/nearai/ironclaw/issues/1119)):**
    A "P2" prerequisite feature request to unify 5 different configuration sources (env, TOML, DB, etc.) before enabling hot-reload. This signals a major architectural shift toward a more dynamic, restart-free agent system.
*   **LLM Provider Hot-Swap ([Issue #1350](https://github.com/nearai/ironclaw/issues/1350)):**
    Request to allow changing LLM providers via the UI without restarting the process.
    *   **Prediction:** This is likely to be prioritized soon, given the concurrent work on config unification (#1119) and the v2 execution engine (#1557).
*   **ClawHub Isolation ([PR #1594](https://github.com/nearai/ironclaw/pull/1594)):**
    Adding a `CLAWHUB_ENABLED` flag to disable the public skill registry, signaling a focus on enterprise/air-gapped deployments.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing friction with channel integrations, specifically Telegram and Feishu, where basic functionality (polling, pairing) is broken. Comparisons to "openclaw" suggest users are actively benchmarking this project and will switch if stability issues persist.
*   **Positive Signals:** The community is engaged in advanced topics like evaluation metrics (Issue #1731), indicating a sophisticated user base. The rapid closure of security issues (e.g., #1702) by CI bots is a strong positive signal regarding project maintenance quality.

## 8. Backlog Watch
*   **[PR #1243](https://github.com/nearai/ironclaw/pull/1243) (Size: XL):** "Per-job MCP server filtering." This large feature PR has been open since March 16 and updates frequently. It is critical for scaling MCP (Model Context Protocol) usage but appears complex.
*   **[Issue #1119](https://github.com/nearai/ironclaw/issues/1119):** "Unify configuration sources." Flagged as a prerequisite for hot-reload, this issue represents a significant technical debt item that needs resolution to unlock smoother UX.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-03-29)

## 1. Today's Overview
LobsterAI demonstrates **high development velocity** today, characterized by a new tagged release (`2026.3.29`) and significant activity in both merging features and closing bugs. The team successfully integrated 12 PRs while actively discussing 6 new proposals, indicating a healthy balance between feature delivery and code quality control. The release focuses heavily on refining the **Cowork (Agent collaboration)** experience and stabilizing the **OpenClaw Gateway**. While the merge rate is high (66%), the issue tracker shows emerging concerns regarding configuration persistence and third-party integrations (MCP), suggesting the next development cycle will likely focus on system robustness and extensibility.

## 2. Releases
### **Version 2026.3.29**
*   **Highlights:** This release introduces a structured user interaction plugin (`AskUserQuestion`) and refines the UI for message navigation (Mini Track). It also addresses critical logging issues.
*   **Key Changes:**
    *   **Cowork Plugin:** Added `AskUserQuestion` plugin to remove confirmation popups and enable structured user interaction ([PR #942](https://github.com/netease-youdao/LobsterAI/pull/942)).
    *   **UI Refactor:** Message navigation redesigned to a "Mini Track" style ([PR #988](https://github.com/netease-youdao/LobsterAI/pull/988)).
    *   **Bug Fix:** Resolved log export hangs and "reply was never sent" errors.

## 3. Project Progress
Significant progress was made in stabilizing the core architecture and enhancing the Agent experience:
*   **OpenClaw Stabilization:** Critical fixes were merged to resolve an infinite restart loop caused by invalid configurations and model name data loss ([PR #894](https://github.com/netease-youdao/LobsterAI/pull/894)).
*   **MCP (Model Context Protocol) Fixes:** Removed secret authentication for local `McpBridgeServer` to prevent 401 errors on app restart ([PR #1002](https://github.com/netease-youdao/LobsterAI/pull/1002)).
*   **Architecture Migration:** The "Xiaomifeng" (Bee) platform was successfully migrated to an OpenClaw plugin, reducing core code complexity ([PR #984](https://github.com/netease-youdao/LobsterAI/pull/984)).
*   **UX Enhancements:** Merged improved error classification for AI timeouts and a fix for attachments disappearing during task switches ([PR #851](https://github.com/netease-youdao/LobsterAI/pull/851)).

## 4. Community Hot Topics
*   **[Issue #1006] Configuration Persistence Failure:** Users are frustrated that `openclaw.json` and workspace files (like `AGENTS.md`) are reset to defaults upon every restart. This blocks persistent customization of channels (e.g., Feishu streaming).
    *   *Analysis:* This points to a fundamental flaw in the current configuration lifecycle management, where the "protection mechanism" is overly aggressive.
*   **[Issue #1003] Notion MCP Integration Failure:** The MCP Bridge fails to pass environment variables (Token) to the `notion-mcp-server`, resulting in 401 errors.
    *   *Analysis:* Highlights a gap in how external MCP servers are spawned, specifically regarding environment context inheritance.
*   **[PR #999] Command Palette Proposal:** A proposal to introduce `Cmd+K` for global actions to improve keyboard accessibility and workflow efficiency.
*   **[PR #998] Floating Text Toolbar:** A proposal to add context-aware actions (Copy, Quote, Explain) when selecting text in chat, reducing manual prompt construction.

## 5. Bugs & Stability
*   **🔴 Critical: Gateway Infinite Restart Loop ([Issue #859](https://github.com/netease-youdao/LobsterAI/issues/859))**
    *   *Severity:* High. Caused the app to become unusable.
    *   *Status:* **FIXED** in [PR #894](https://github.com/netease-youdao/LobsterAI/pull/894). The gateway now handles schema validation failures gracefully instead of retrying indefinitely.
*   **🟠 Medium: Model Name Data Loss ([Issue #858](https://github.com/netease-youdao/LobsterAI/issues/858))**
    *   *Severity:* Medium. Custom model names were overwritten by IDs.
    *   *Status:* **FIXED** in [PR #894](https://github.com/netease-youdao/LobsterAI/pull/894).
*   **🟠 Medium: Cron Task Crash ([PR #993](https://github.com/netease-youdao/LobsterAI/pull/993))**
    *   *Status:* **FIXED**. Prevented gateway crashes during scheduled tasks by fixing channel requirements.

## 6. Feature Requests & Roadmap Signals
*   **Cmd+K Command Palette ([PR #999](https://github.com/netease-youdao/LobsterAI/pull/999)):** Highly likely to be prioritized given the focus on UX efficiency in recent updates.
*   **SSE/HTTP Streaming for MCP ([PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001)):** An open PR aiming to expand MCP support beyond `stdio`. This is crucial for cloud-based MCP servers.
*   **Floating Text Toolbar ([PR #998](https://github.com/netease-youdao/LobsterAI/pull/998)):** Aligns with the "Chat-centric" workflow improvements seen in the release.

## 7. User Feedback Summary
Users are enthusiastic about the extensibility (Plugins/MCP) but are currently blocked by **environmental stability issues**.
*   **Pain Point:** "My settings disappear every time I restart the app" is the dominant complaint today. Users currently rely on cron jobs to hack config files back into place, indicating a severe trust issue with the configuration system.
*   **Use Case:** Developers are trying to integrate specific tools like Notion and Feishu via MCP, but are hitting walls with authentication (env vars) and streaming configurations.
*   **Satisfaction:** Positive sentiment regarding the move to modularize platforms (Xiaomifeng migration) and fixing the gateway crash, which previously caused major downtime.

## 8. Backlog Watch
*   **[Issue #1006](https://github.com/netease-youdao/LobsterAI/issues/1006):** Needs immediate architectural review. The current "template regeneration" strategy is fundamentally incompatible with user customization needs.
*   **[PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001):** Awaiting maintainer review. This is vital for users trying to use non-stdio MCP servers.
*   **[PR #991](https://github.com/netease-youdao/LobsterAI/pull/991):** Internationalization support for preset agents. Low urgency but high polish value.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-03-29

## 1. Today's Overview
TinyClaw demonstrates **exceptionally high maintenance velocity** today, resolving **7 issues and merging 15 PRs** within a 24-hour window. The development focus is heavily weighted toward **installation experience, Docker stability, and UI consolidation** for the TinyOffice dashboard. While there were no new version releases, the sheer volume of fixes suggests the team is likely stabilizing the codebase for a significant release candidate soon. The project appears to be in a "hardening" phase, transitioning from feature development to robustness and user onboarding.

## 2. Releases
No new releases were published today.

## 3. Project Progress
The team focused on closing the gap between development and production readiness.
*   **Installation & Migration:** Significant work went into making `curl | bash` the default install method ([PR #237](https://github.com/TinyAGI/tinyagi/pull/237), [PR #235](https://github.com/TinyAGI/tinyagi/pull/235)) and fixing migration paths for early adopters ([PR #239](https://github.com/TinyAGI/tinyagi/pull/239)).
*   **Docker & Infrastructure:** Critical fixes were merged for Docker deployments, specifically resolving persistent data storage paths ([PR #265](https://github.com/TinyAGI/tinyagi/pull/265)) and fixing permission issues with Codex auth files ([PR #266](https://github.com/TinyAGI/tinyagi/pull/266)).
*   **System Stability:** A key fix to prevent agent zombie processes was merged ([PR #218](https://github.com/TinyAGI/tinyagi/pull/218)), and plugin hardening measures were finalized ([PR #149](https://github.com/TinyAGI/tinyagi/pull/149)).
*   **TinyOffice UI:** The control plane was refactored to merge Providers into Services and remove standalone logs ([PR #268](https://github.com/TinyAGI/tinyagi/pull/268)).

## 4. Community Hot Topics
The most discussed item was **[Issue #193](https://github.com/TinyAGI/tinyagi/issues/193) ([Feature]: TinyOffice: add first-run web onboarding)** (10 comments).
*   **Analysis:** Users and maintainers recognize that the current CLI-based setup is a barrier to entry. The closure of this issue (combined with the new install script work) indicates a strategic pivot toward a "download and run" GUI-first setup experience.
*   **[Issue #126](https://github.com/TinyAGI/tinyagi/issues/126) (Telegram Bot Auto-Reconnect)** (7 comments) highlights persistent reliability concerns in long-running bot instances, which remain a priority for the community.

## 5. Bugs & Stability
*   **Critical - Docker/Auth Failure:** Fixed in [PR #266](https://github.com/TinyAGI/tinyagi/pull/266). Codex failed to read `auth.json` in Docker due to permission dropping. The fix runs the container as root, a pragmatic but notable change for security considerations.
*   **High - Agent Zombie Processes:** Fixed in [PR #218](https://github.com/TinyAGI/tinyagi/pull/218). Stuck agent processes were holding messages in "processing" limbo indefinitely. A 5-minute timeout kill-switch was introduced.
*   **Medium - Telegram Reconnect:** [Issue #126](https://github.com/TinyAGI/tinyagi/issues/126) was closed, suggesting the auto-reconnect logic may have been addressed or verified in the recent hardening updates.
*   **Low - TypeScript Build Errors:** Strict mode type errors were resolved in [PR #264](https://github.com/TinyAGI/tinyagi/pull/264).

## 6. Feature Requests & Roadmap Signals
*   **Web-Based Onboarding:** The closure of [Issue #193](https://github.com/TinyAGI/tinyagi/issues/193) signals that the **next major version will likely feature a browser-based initial configuration wizard** rather than CLI editing.
*   **Runtime Control Panel:** [Issue #194](https://github.com/TinyAGI/tinyagi/issues/194) (Runtime control panel for daemon/queue) was also closed, implying these controls are either now implemented or planned for immediate integration into the TinyOffice "Services" tab.
*   **Provider Expansion:** [Issue #124](https://github.com/TinyAGI/tinyagi/issues/124) (requesting z.ai, Kimi, OpenRouter) was closed following the merge of [PR #168](https://github.com/TinyAGI/tinyagi/pull/168), confirming **expanded LLM support is now in the codebase**.

## 7. User Feedback Summary
Users are demanding **simpler setup flows** and **multi-agent/multi-provider support**.
*   **Pain Points:** Editing raw config files for initial setup is frustrating ([Issue #193](https://github.com/TinyAGI/tinyagi/issues/193)); Docker volumes were not persisting AI CLI state correctly ([PR #265](https://github.com/TinyAGI/tinyagi/pull/265)).
*   **Satisfaction:** The rapid closure of the "Provider Support" issue ([#124](https://github.com/TinyAGI/tinyagi/issues/124)) and the implementation of real-time Telegram tool streaming ([PR #113](https://github.com/TinyAGI/tinyagi/pull/113)) show the team is highly responsive to user requests for visibility and flexibility.

## 8. Backlog Watch
The backlog appears extremely healthy. All updated issues and PRs from the last 24 hours have been closed or merged, indicating a "zero inbox" policy by the maintainers today.
*   **Watch:** There are no lingering "stale" issues in this update cycle. However, the move to run Docker as **root** ([PR #266](https://github.com/TinyAGI/tinyagi/pull/266)) is a technical debt item that may require future security scrutiny or a more refined permission model.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-03-29

## 1. Today's Overview
The Moltis project is experiencing a period of exceptionally high velocity, focusing on hardening existing features and expanding integration capabilities. In the last 24 hours, the team merged 13 Pull Requests against 6 open ones, indicating a massive push to stabilize the codebase. This effort was supported by 4 rapid-release iterations, suggesting an agile CI/CD posture. Activity centers on fixing critical regressions in LLM provider handling and merging significant new channel integrations like Matrix.

## 2. Releases
**Total Releases: 4** (20260327.03 through 20260328.02)

*   **Release Strategy:** The project is utilizing date-based snapshot releases. The rapid succession (4 releases in 2 days) implies frequent updates to `main`, likely containing cumulative fixes for provider stability and chat logic.
*   **Changes implied by PRs:**
    *   **Provider Stability:** Fixes for Fireworks.ai, Anthropic/OpenRouter prompt caching, and MiniMax system prompts are likely included in the latest snapshots.
    *   **Chat Logic:** Fixes for context compaction and manual breakage are rolled into these versions.
    *   **Migration Note:** Users upgrading to 20260328.xx should re-validate custom OpenAI-compatible provider settings due to changes in the model discovery/probing logic (see PR #507).

## 3. Project Progress
**Merged/Closed PRs (13):**
The team closed a significant backlog of features and fixes:
*   **New Integrations:**
    *   **Matrix Channel ([PR #500](https://github.com/moltis-org/moltis/pull/500)):** Merged support for Matrix (DMs/Rooms) via `matrix-sdk`.
    *   **Fireworks.ai ([PR #497](https://github.com/moltis-org/moltis/pull/497)):** Added as a primary provider with fallback models.
    *   **Telegram Enhancements ([PR #276](https://github.com/moltis-org/moltis/pull/276), [PR #498](https://github.com/moltis-org/moltis/pull/498)):** Implemented forum topic isolation and plaintext document extraction.
*   **Critical Fixes:**
    *   **Provider Logic:** Fixed timeouts and discovery loops for custom OpenAI providers ([PR #507](https://github.com/moltis-org/moltis/pull/507), [PR #506](https://github.com/moltis-org/moltis/pull/506)).
    *   **Chat Compaction:** Fixed manual compaction breaking chat sessions ([PR #505](https://github.com/moltis-org/moltis/pull/505)).
    *   **MiniMax:** Restored specific system prompt handling ([PR #510](https://github.com/moltis-org/moltis/pull/510)).
*   **Performance:**
    *   **Prompt Caching ([PR #495](https://github.com/moltis-org/moltis/pull/495)):** Added caching for Anthropic/OpenRouter to reduce latency/costs.

**Open PRs (6):**
*   **Search:** [PR #513](https://github.com/moltis-org/moltis/pull/513) proposes adding Jina.ai as a web search provider.
*   **Local LLM Support:** [PR #515](https://github.com/moltis-org/moltis/pull/515) aims to increase timeouts for slow local LLM servers.
*   **Architecture:** [PR #511](https://github.com/moltis-org/moltis/pull/511) addresses runtime binding for GraphQL chat services.

## 4. Community Hot Topics
*   **Matrix Integration ([PR #500](https://github.com/moltis-org/moltis/pull/500)):** This was a highly anticipated feature (cherry-picked from a larger feature branch), signaling strong community interest in decentralized communication channels.
*   **Local LLM Usability ([PR #515](https://github.com/moltis-org/moltis/pull/515)):** A proposed fix to increase model probe timeouts highlights a user base heavily utilizing self-hosted models (e.g., via `llama.cpp` or `ollama`) which require longer cold-start times than cloud APIs.
*   **Search Provider Expansion ([PR #513](https://github.com/moltis-org/moltis/pull/513)):** Community members are actively contributing alternative search backends (Jina), indicating a need for diverse data retrieval options beyond the current Brave/Perplexity setup.

## 5. Bugs & Stability
*   **High Severity - Custom Provider Loop (Fixed):** [Issue #502](https://github.com/moltis-org/moltis/issues/502) & [Issue #504](https://github.com/moltis-org/moltis/issues/504) reported that adding OpenAI-compatible providers caused timeouts or queried *all* models unnecessarily. **Fixed** by [PR #507](https://github.com/moltis-org/moltis/pull/507) and [PR #506](https://github.com/moltis-org/moltis/pull/506).
*   **High Severity - Chat Breakage (Fixed):** [Issue #501](https://github.com/moltis-org/moltis/issues/501) reported that manual context compaction broke the chat. **Fixed** by [PR #505](https://github.com/moltis-org/moltis/pull/505) (switching summary role to System).
*   **Medium Severity - MiniMax Invalid Setting (Fixed):** [Issue #508](https://github.com/moltis-org/moltis/issues/508) reported "invalid chat setting" errors after upgrading. **Fixed** by [PR #510](https://github.com/moltis-org/moltis/pull/510).
*   **Open Bug - Model Selection:** [Issue #514](https://github.com/moltis-org/moltis/issues/514) is currently open, reporting that most models cannot be selected. This may be related to UI state or provider discovery logic and needs investigation.
*   **Installation - ARM64:** [Issue #496](https://github.com/moltis-org/moltis/issues/496) reported `install.sh` failing on aarch64 Linux (404). This appears to be closed, implying a fix or inability to reproduce, but users on ARM architectures should verify the latest release.

## 6. Feature Requests & Roadmap Signals
*   **Session Recall & Portability:** [PR #503](https://github.com/moltis-org/moltis/pull/503) introduces "cross-session recall," "automatic checkpoints," and "portable skill bundles." This suggests a roadmap shift towards **persistent, long-term memory** and **agent state portability**.
*   **Local AI Voice:** [PR #499](https://github.com/moltis-org/moltis/pull/499) adds `base_url` config for OpenAI TTS/STT. This signals an imminent official support for **local voice stacks** (like Chatterbox/faster-whisper), moving away from strict cloud dependency.
*   **Jina Search:** The active [PR #513](https://github.com/moltis-org/moltis/pull/513) suggests the next minor version will likely include **Jina.ai** as a built-in search option.

## 7. User Feedback Summary
Users are actively testing the "Custom Provider" feature (connecting local or non-standard OpenAI-compatible APIs) and encountering edge cases regarding timeouts and model discovery.
*   **Pain Point:** Users with large local models are experiencing timeouts (default 10s is too short), leading to frustration when adding models.
*   **Pain Point:** The transition to strict system prompts (likely for compaction) caused regressions for providers like MiniMax that handle system messages differently.
*   **Positive Signal:** The quick turnaround on Telegram document extraction ([PR #276](https://github.com/moltis-org/moltis/pull/276)) was driven by user need to process text files directly in chat, a feature now highly valued.

## 8. Backlog Watch
*   **GraphQL Chat Binding:** [Issue #494](https://github.com/moltis-org/moltis/issues/494) highlights a latent bug where GraphQL bypasses the late-bound live chat service. While [PR #511](https://github.com/moltis-org/moltis/pull/511) is open to fix this, it requires careful review to ensure service consistency across RPC and GraphQL interfaces.
*   **Model Selection Bug:** [Issue #514](https://github.com/moltis-org/moltis/issues/514) (Model selection failure) is currently unanswered (0 comments). As a "blocking" bug for usability, this requires immediate triage to determine if it's a frontend state issue or a backend provider discovery regression.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-03-29

## 1. Today's Overview
CoPaw is experiencing a phase of **intense iterative development and community engagement**, evidenced by high activity in both Issues (41 updated) and Pull Requests (25 updated). The project is actively expanding its ecosystem with new integrations (OpenCode, GitHub Copilot, DingTalk AI) while simultaneously grappling with stability challenges. A significant portion of the community focus is on version 0.2.0, which appears to have introduced configuration regressions (specifically regarding model selection and Ollama support). The ratio of merged to open PRs suggests maintainers are aggressively merging fixes and features, likely preparing for a stabilization release.

## 2. Releases
**No new releases** were recorded in the last 24 hours.
*   **Note:** The last tagged version appears to be `0.2.0` (or `0.2.0.post1`). The high volume of merged PRs today suggests a `0.2.1` or `0.3.0` release is imminent.

## 3. Project Progress
Maintainers merged **13 PRs** today, focusing heavily on bug fixes, provider integration, and documentation:
*   **Core Stability & Memory:** Merged PRs [#2449](https://github.com/agentscope-ai/CoPaw/pull/2449) and [#2410](https://github.com/agentscope-ai/CoPaw/pull/2410) to improve file truncation logic and memory skill tool results, addressing context management issues.
*   **Skill & Channel Fixes:** PR [#2440](https://github.com/agentscope-ai/CoPaw/pull/2440) fixed config passing for workspace skills, and [#2436](https://github.com/agentscope-ai/CoPaw/pull/2436) resolved UI-backend channel config desynchronization.
*   **UI/UX:** PR [#2352](https://github.com/agentscope-ai/CoPaw/pull/2352) landed style and theme adjustments for the Console frontend.
*   **Documentation:** Several doc updates were merged ([#2461](https://github.com/agentscope-ai/CoPaw/pull/2461), [#2444](https://github.com/agentscope-ai/CoPaw/pull/2444)) to reflect new MCP and configuration changes.

## 4. Community Hot Topics
The community is highly active, with **38 open issues** and several high-comment threads:
*   **Contributor Drive:** The most active thread is **[Issue #2291](https://github.com/agentscope-ai/CoPaw/issues/2291)** (32 comments), a "Help Wanted" dashboard. This signals the project is actively recruiting community developers for specific tasks.
*   **Critical Performance Bug:** **[Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218)** (10 comments) regarding 100% CPU usage at idle is a major concern for users running CoPaw locally.
*   **Model Configuration Crisis:** **[Issue #2298](https://github.com/agentscope-ai/CoPaw/issues/2298)** (6 comments) and **[Issue #2425](https://github.com/agentscope-ai/CoPaw/issues/2425)** highlight a critical UX gap where the model selection box disappeared after updating to v0.x/0.2.0, making local model (Ollama) configuration difficult.
*   **QA Agent Failure:** **[Issue #2293](https://github.com/agentscope-ai/CoPaw/issues/2293)** (9 comments) reports a broken UI caused by an internal QA agent interaction, raising concerns about agent safety boundaries.

## 5. Bugs & Stability
Several high-severity bugs have been reported, though fix PRs are emerging:
1.  **High CPU / Busy-Polling:** **[Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218)** reports the main process pegs at 100% CPU even when idle. *Status: No fix PR identified yet.*
2.  **Network & Execution Freezes:** **[Issue #2435](https://github.com/agentscope-ai/CoPaw/issues/2435)** and **[Issue #2445](https://github.com/agentscope-ai/CoPaw/issues/2445)** report agents entering infinite loops or permanent deadlock states during network fluctuations or gateway restarts.
3.  **Infinite Tool Loops:** **[Issue #2378](https://github.com/agentscope-ai/CoPaw/issues/2378)** describes agents getting stuck in 40+ iteration loops during tool-intensive skills (like "deep-research").
4.  **Channel Duplication:** **[Issue #2421](https://github.com/agentscope-ai/CoPaw/issues/2421)** reports duplicate replies in Feishu, and **[Issue #2464](https://github.com/agentscope-ai/CoPaw/issues/2464)** reports message spam in Telegram.
5.  **CLI Crash:** **[Issue #2462](https://github.com/agentscope-ai/CoPaw/issues/2462)** notes the CLI fails completely due to a null check error in `MCPConfigWatcher`.

## 6. Feature Requests & Roadmap Signals
Key signals from open PRs and feature requests indicate the next version will focus on **Extensibility and Local Deployment**:
*   **Local Model Focus:** PR **[#2419](https://github.com/agentscope-ai/CoPaw/pull/2419)** introduces a dedicated "CoPaw Local Model" configuration, aiming to solve the Ollama/setup friction reported in issues.
*   **New Providers:** PR **[#2428](https://github.com/agentscope-ai/CoPaw/pull/2428)** (OpenCode) and **[#2366](https://github.com/agentscope-ai/CoPaw/pull/2366)** (GitHub Copilot) are ready for review, expanding free/cheap model options.
*   **Backup & Migration:** Feature **[Issue #2443](https://github.com/agentscope-ai/CoPaw/issues/2443)** and PR **[#2457](https://github.com/agentscope-ai/CoPaw/pull/2457)** are implementing a system for exporting/importing user assets (Memories, Skills), a critical feature for moving between devices.
*   **Console UX:** Request **[Issue #2434](https://github.com/agentscope-ai/CoPaw/issues/2434)** for paste-to-upload images in the Web Console is gaining traction.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by **complex configuration for local models** (specifically Ollama) and **breaking UI changes** in recent updates where buttons/options disappeared. The **Chinese localization** is also flagged as imperfect (Issue #2431), with settings not persisting.
*   **Use Cases:** Users are attempting complex integrations, including **MCP service calls** (Issue #2417), **Multi-Agent collaboration** (Issue #2459), and **scheduled tasks** (Issue #2221).
*   **Sentiment:** While users value the project's potential, the current version (0.2.0) is perceived as **unstable for production use**, particularly regarding resource consumption and network resilience.

## 8. Backlog Watch
*   **Attention Needed:** **[Issue #2218](https://github.com/agentscope-ai/CoPaw/issues/2218)** (100% CPU usage) needs verification and a fix, as it affects basic usability.
*   **Attention Needed:** **[Issue #2298](https://github.com/agentscope-ai/CoPaw/issues/2298)** (Missing LM selection/Ollama) is blocking many local users; the pending PR **[#2419](https://github.com/agentscope-ai/CoPaw/pull/2419)** seems to be the targeted solution.
*   **Stale Discussion:** **[Issue #836](https://github.com/agentscope-ai/CoPaw/issues/836)** regarding browser login handling remains a complex open question for automation tasks.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-03-29

### 1. Today's Overview
ZeptoClaw exhibits **low activity** for March 29, 2026, with no code merges or new releases recorded in the last 24 hours. The project's current focus is purely operational, centered on diagnosing a critical communication failure in the Telegram integration as highlighted in a detailed issue posted late yesterday. The absence of PRs suggests that while community users are actively identifying edge cases—specifically regarding browser-based research tasks—the maintainers have not yet pushed code updates to address them. Consequently, project health remains stable but requires patch attention to maintain reliability for mobile users.

### 2. Releases
**No new releases** were recorded today. The repository remains on its previous stable version.

### 3. Project Progress
There was **no forward progress** in terms of merged code or closed tickets today. With 0 open PRs and 0 merged PRs, the development cycle appears to be in a planning or investigation phase regarding the recently reported integration bugs.

### 4. Community Hot Topics
The sole but significant activity driving current discussion is **Issue #461**.
*   **Topic:** [Bug: Research tasks via Telegram silently fail with no response](https://github.com/qhkm/zeptoclaw/issues/461)
*   **Analysis:** Although created yesterday, this is the active anchor for the community right now. The issue details a complex failure where the agent successfully completes a "research task" (likely involving a headless browser or web scraping tool) but fails to report the result back to the user via Telegram.
*   **Underlying Need:** Users are pushing ZeptoClaw towards heavier "agentic" workloads (long-running research tasks) via mobile interfaces (Telegram). The underlying need here is **reliable asynchronous communication**; users need assurance that if an agent works for 5 minutes on a task, the results won't be lost due to a formatting error in the chat interface.

### 5. Bugs & Stability
One high-priority bug was identified, ranking high in severity due to the "silent" nature of the failure.
*   **🔴 Critical: Silent Failure in Telegram Research Tasks** ([#461](https://github.com/qhkm/zeptoclaw/issues/461))
    *   **Description:** When users initiate open-ended research tasks via Telegram, the agent processes the request but returns nothing to the user.
    *   **Technical Context:** The issue author suggests the root cause is `render_telegram_html()` producing malformed tags without a fallback mechanism. This implies the agent crashes *during* the response rendering phase, after the work is done.
    *   **Impact:** High. This results in a waste of compute resources (agent thinks it succeeded) and user frustration (user thinks the agent ignored them).
    *   **Fix Status:** No fix PRs are currently open.

### 6. Feature Requests & Roadmap Signals
While no explicit "Feature Requests" were opened today, the bug report signals a roadmap requirement for **Output Sanitization & Fallback Layers**.
*   **Predicted Roadmap Item:** A patch that implements a "plain text fallback" for the Telegram integration. If HTML rendering fails, the system should automatically strip formatting and send raw text to ensure delivery.
*   **Future Consideration:** Better handling of long-form content from browser agents, possibly paginating results to avoid Telegram API limits or rendering issues.

### 7. User Feedback Summary
User sentiment is currently mixed due to reliability issues in the Telegram interface:
*   **Pain Point:** "Silent failures" are a significant trust-breaker. Users report feeling "ghosted" by the AI when it performs work but doesn't reply.
*   **Use Case:** Users are actively using ZeptoClaw as a mobile research assistant, offloading complex browsing tasks to the agent while interacting via chat.
*   **Dissatisfaction:** The lack of error feedback makes the tool difficult to debug for end-users, as they cannot tell if the agent "didn't understand" or if it "crashed on output."

### 8. Backlog Watch
*   **[Issue #461](https://github.com/qhkm/zeptoclaw/issues/461):** Needs maintainer validation. The Root Cause Analysis (RCA) provided by the user is thorough, suggesting this is a reproducible error in the `render_telegram_html` function. This should be the top priority for the next patch.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest
**Date:** 2026-03-29
**Project:** EasyClaw (RivonClaw)
**Repository:** [github.com/gaoyangz77/easyclaw](https://github.com/gaoyangz77/easyclaw)

---

### 1. Today's Overview
The EasyClaw project is currently in a **high-activity deployment phase**, marked by the release of version v1.7.8 while simultaneously facing immediate stability challenges regarding model interoperability. Activity over the last 24 hours was driven entirely by issue reports and the new release, with no pull request activity observed. Two critical bugs regarding API parameter handling were reported, suggesting a potential regression or misconfiguration in the latest build's multi-model support. Overall, the project is actively maintained but currently requires attention to cross-model compatibility stability.

### 2. Releases
*   **Version:** **v1.7.8 (RivonClaw)**
    *   **Release Notes:** This update primarily focuses on distribution for macOS users. The documentation highlights a specific workaround for macOS Gatekeeper, addressing the "'RivonClaw' is damaged and can't be opened" error. This indicates the app remains unsigned or uses a certificate not natively trusted by macOS, requiring users to manually bypass security settings via Terminal.
    *   **Migration Notes:** Users on macOS should anticipate the "unverified developer" prompt and refer to the release notes for the `xattr` or Terminal bypass command if the application fails to launch.

### 3. Project Progress
*   **Codebase:** No PRs were merged or closed in the last 24 hours.
*   **Advancement:** Progress is evidenced by the version bump to v1.7.8. However, the lack of PR activity suggests this release may have been pushed directly or via automated pipelines without corresponding public merge records for this specific window.

### 4. Community Hot Topics
*   **Issue [#28](https://github.com/gaoyangz77/rivonclaw/issues/28) & [#29](https://github.com/gaoyangz77/rivonclaw/issues/29): Model Switching Instability**
    *   **Activity:** These two identical reports are the most active items today.
    *   **Analysis:** Users are attempting to utilize the "Bailian Package" (likely a localized AI service bundle) with third-party models like **Kimi 2.5** and **GLM 5**. The underlying need is for a **unified aggregation layer** where users can switch between backend models (Qwen, GLM, Kimi) seamlessly without reconfiguring API parameters manually. The community is signaling that the current abstraction layer for these models is broken.

### 5. Bugs & Stability
*   **Severity: High**
    *   **[OPEN] [Bug] HTTP 400 InvalidParameter on Model Switch** ([Issue #29](https://github.com/gaoyangz77/rivonclaw/issues/29))
        *   **Description:** Switching from the default **Qwen3.5** model to **GLM** or **Kimi** via the "Bailian" plan triggers an `InternalError.Algo.InvalidParameter: Range of input length should be [1, 202752]`.
        *   **Root Cause Analysis:** The error suggests that the request payload sent to the alternative models (GLM/Kimi) retains parameters or input formats specific to Qwen3.5, which the other models reject. This points to a failure in the request translation layer when switching providers.
    *   **[OPEN] [Bug] Duplicate Report** ([Issue #28](https://github.com/gaoyangz77/rivonclaw/issues/28))
        *   **Description:** Confirms the issue exists in v1.7.7 and persists for users trying to leverage multi-model support.
    *   **Fix Status:** No fix PRs are currently open.

### 6. Feature Requests & Roadmap Signals
*   **Implicit Request:** Robust Multi-Model Router. The bugs indicate a strong user demand for the "Bailian" feature to be a true multi-model router.
*   **Prediction:** The next patch (likely v1.7.9) will almost certainly focus on fixing the parameter mapping for GLM and Kimi APIs to stabilize the user base utilizing the package switching feature.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by broken model switching capabilities, specifically when trying to move away from the default Qwen model. The error handling is opaque (HTTP 400), leaving users unable to diagnose whether it is an API key issue or a client-side formatting issue.
*   **Environment:** Issues reported on Windows 11 using v1.7.7, though the v1.7.8 release implies the project is moving fast.

### 8. Backlog Watch
*   **Issues [#28](https://github.com/gaoyangz77/rivonclaw/issues/28) & [#29](https://github.com/gaoyangz77/rivonclaw/issues/29):** Immediate attention required. Both issues have 0-1 comments and no assignee response yet. Since this breaks core functionality (model switching) for the "Bailian" user group, it represents a critical service disruption that needs maintainer triage.

</details>