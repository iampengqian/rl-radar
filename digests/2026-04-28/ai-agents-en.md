# OpenClaw Ecosystem Digest 2026-04-28

> Issues: 500 | PRs: 500 | Projects covered: 14 | Generated: 2026-04-27 22:14 UTC

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
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-04-28

## 1. Today's Overview
OpenClaw is experiencing exceptionally high community engagement today, with 500 issues and 500 pull requests updated in the last 24 hours. The active ratio leans heavily toward open items (343 open issues, 355 open PRs), indicating a rapid development cadence that is currently outpacing the project's capacity to review and merge. A significant portion of today's activity stems from the recent `v2026.4.25` release, which introduced massive TTS upgrades but also triggered several high-severity regressions. Overall, the project is highly active but currently facing stability challenges associated with its aggressive release cycle.

## 2. Releases
**[v2026.4.25](https://github.com/openclaw/openclaw/releases/tag/v2026.4.25)**
*   **Highlights:** Major upgrade to Voice replies and Text-to-Speech (TTS) capabilities. 
*   **New Additions:** Introduced chat-scoped auto-TTS controls, personas, and per-agent/per-account overrides. 
*   **New Providers:** Added extensive provider coverage including Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, and ElevenLabs v3.

## 3. Project Progress
Today saw 145 merged/closed PRs and 157 closed issues, reflecting active triage and merging. Key advancements include:
*   **Auth & Security:** Multiple fixes were merged to allow password fallback for local clients operating under `trusted-proxy` gateway auth modes ([PR #73034](https://github.com/openclaw/openclaw/pull/73034), [PR #72999](https://github.com/openclaw/openclaw/pull/72999)). Additionally, scopes for bootstrap handoffs were bounded to prevent privilege escalation ([PR #72919](https://github.com/openclaw/openclaw/pull/72919)).
*   **Gateway & Agent Configuration:** Fixes were submitted to preserve default-agent session routing ([PR #72414](https://github.com/openclaw/openclaw/pull/72414)) and ensure subagent runtime models default correctly instead of inheriting parent models unnecessarily ([PR #72984](https://github.com/openclaw/openclaw/pull/72984)).
*   **Infrastructure:** A new bundled DeepInfra provider plugin was introduced ([PR #73038](https://github.com/openclaw/openclaw/pull/73038)), and memory-core SQLite databases are set to default to WAL journal mode to improve read/write contention ([PR #72376](https://github.com/openclaw/openclaw/pull/72376)).

## 4. Community Hot Topics
*   **Tool Schema Failures with Modern LLMs:** The most active bug is [Issue #68735](https://github.com/openclaw/openclaw/issues/68735) (25 comments). After upgrading, providers (like GitHub Copilot/GPT-5-mini) reject tool payloads. This ties into [Issue #43015](https://github.com/openclaw/openclaw/issues/43015), where GPT-family models auto-populate overexposed tool schemas (like `poll/components`), causing strict runtime validations to fail.
*   **Broken Updates & Update Path Issues:** Users are highly frustrated by failing updates. [Issue #71986](https://github.com/openclaw/openclaw/issues/71986) (10 comments) details how the 4.24 update breaks WhatsApp/Telegram integrations and crashes the gateway. Similarly, [Issue #72848](https://github.com/openclaw/openclaw/issues/72848) (8 comments) reports complete gateway timeouts on Intel Macs updating from 4.23.
*   **Context Leaks & Echo Contamination:** [Issue #41355](https://github.com/openclaw/openclaw/issues/41355) highlights a persistent issue where Discord thread starters are re-injected into the LLM context on every turn. This aligns with broader context assembly bugs tracked in [Issue #69208](https://github.com/openclaw/openclaw/issues/69208).

## 5. Bugs & Stability
Recent releases have introduced several severe regressions (RC/blocker level):
*   **Severe - Gateway Startup OOM/Hangs:** [Issue #72208](https://github.com/openclaw/openclaw/issues/72208) reports that v4.24 hangs indefinitely during startup due to LiteLLM/OpenRouter pricing fetch timeouts, locking users out of the dashboard.
*   **Severe - 100% CPU Usage:** [Issue #61701](https://github.com/openclaw/openclaw/issues/61701) notes a regression causing the gateway process to consume 100% CPU immediately after upgrading to v4.5+.
*   **High - Duplicate Context Injection:** [Issue #71761](https://github.com/openclaw/openclaw/issues/71761) reveals that v4.24 injects every inbound message twice into the agent transcript, doubling token costs. *Fix exists via [PR #72290](https://github.com/openclaw/openclaw/pull/72290).*
*   **High - Sidecar Startup Delays:** [Issue #72846](https://github.com/openclaw/openclaw/issues/72846) is a recurrence of a previously patched bug where the channel sidecar startup blocks for ~3 minutes after signaling `ready`.
*   **Moderate - Windows Chat UI Regression:** [Issue #67035](https://github.com/openclaw/openclaw/issues/67035) reports swallowed inputs and invisible streamed replies on Windows.

## 6. Feature Requests & Roadmap Signals
Several feature requests gaining traction indicate the community's desire for enterprise-readiness and deeper multi-agent routing:
*   **Model Routing Granularity:** Users are heavily requesting per-skill model routing via `SKILL.md` frontmatter ([Issue #43260](https://github.com/openclaw/openclaw/issues/43260)) to avoid wasting expensive model tokens on simple agent skills.
*   **Network & Proxy Configurations:** Enterprise users are pushing for standard global HTTP proxy support ([Issue #43821](https://github.com/openclaw/openclaw/issues/43821)) and the ability to bypass private network blocks selectively ([Issue #39604](https://github.com/openclaw/openclaw/issues/39604)).
*   **Plugin SDK Enhancements:** The emergence of massive PRs like [PR #72287](https://github.com/openclaw/openclaw/pull/72287) and [PR #72383](https://github.com/openclaw/openclaw/pull/72383) signals an upcoming shift toward a robust workflow action/scheduler plugin architecture, likely landing in the next major version.

## 7. User Feedback Summary
Users are enthusiastic about the fast pace of new integrations (especially the wide variety of TTS voice providers), but deployment friction is causing notable dissatisfaction. Specifically, users operating in restricted environments (Docker, Kubernetes, Intel Macs, ARM boards) feel that the automatic update paths and hardcoded timeouts are breaking their setups. The reliance on modern reasoning models (like GPT-5, Gemini, Opus) is exposing fragility in OpenClaw's tool schemas and context assembly, leading to visible hallucinations and reasoning leaks in standard chat channels like Telegram and Discord.

## 8. Backlog Watch
The following high-impact issues and PRs require immediate maintainer attention:
*   **[PR #46303](https://github.com/openclaw/openclaw/pull/46303):** An XL-sized PR addressing silent message loss during SIGUSR1 reloads. It affects all major channels (Slack, Discord, Telegram, WhatsApp) but remains open.
*   **[Issue #29387](https://github.com/openclaw/openclaw/issues/29387):** Per-agent bootstrap files (`SOUL.md`, `AGENTS.md`) in `agentDir` are silently ignored, breaking core agent personalization workflows.
*   **[Issue #55334](https://github.com/openclaw/openclaw/issues/55334):** Unbounded growth in `sessions.json` due to duplicated `skillsSnapshot` causes gateway OOMs over time.
*   **[Issue #12678](https://github.com/openclaw/openclaw/issues/12678):** A fundamental feature request for capability-based, default-deny permissions for tools to prevent malicious/untrusted inputs from hijacking the agent.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from April 28, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a phase of hyper-active, aggressive iteration, driven primarily by the rapid advancement of LLM providers (e.g., DeepSeek V4, GPT-5). Projects are racing to transition from simple single-prompt chatbots into robust, multi-modal orchestrators capable of operating across synchronous messaging channels (Discord, Telegram, WeChat) and enterprise environments. The dominant themes across the landscape are a shift toward multi-agent routing, aggressive memory/context management, and the standardization of tool-calling protocols (MCP). However, this rapid development velocity is introducing severe stability challenges, with "context explosion," broken update paths, and provider API fragility emerging as universal growing pains.

## 2. Activity Comparison

*(Note: Issue/PR counts represent 24-hour update volume. Health Score is assessed based on PR merge rates, bug triage speed, and architectural clarity).*

| Project | Issues (24h) | PRs (24h) | Release Status (Apr 28) | Ecosystem Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.4.25` (TTS Upgrades) | 🟡 **Moderate** (High velocity, but severe regressions & review bottlenecks) |
| **NanoBot** | 17 | 37 | Pre-release | 🟢 **Strong** (High merge rate, focused architectural discourse) |
| **Hermes Agent**| 50 | 50 | Pre-release (v0.11.0) | 🟡 **Moderate** (P1 data-loss bugs, stale security patches) |
| **PicoClaw** | 109 | 120 | Nightly (`v0.2.7`) | 🟢 **Strong** (High closure rate, structured roadmap) |
| **NanoClaw** | 16 | 25 | Pre-release (Post-v2) | 🟢 **Strong** (Rapid stabilization of v2 architecture) |
| **IronClaw** | 10 | 31 | Imminent ("Reborn" merge) | 🟢 **Strong** (Disciplined core, heavy refactoring) |
| **LobsterAI** | 7 | 38 | `2026.4.25` | 🟢 **Strong** (Excellent security/stability focus, fast fixes) |
| **Moltis** | Low | 14 | Pre-release | 🟢 **Strong** (Lean, high-quality architectural merges) |
| **CoPaw** | 50 | 43 | `1.1.4.post3` (Hotfix) | 🟡 **Moderate** (High velocity, but UI bleeding and state-loss bugs) |
| **ZeroClaw** | 48 | 50 | Pre-release | 🟡 **Moderate** (Recovering from bulk revert, high S1 bug count) |

## 3. OpenClaw's Position

**Advantages vs. Peers:**
OpenClaw remains the undeniable core reference implementation with the largest raw community engagement (500+ daily updates). Its recently shipped TTS capabilities (v2026.4.25) featuring broad provider support (Azure, Xiaomi, ElevenLabs) give it a distinct multi-modal edge over competitors that are still struggling with basic text context management (like IronClaw and Hermes). 

**Technical Approach Differences:**
Unlike projects pivoting to compile-time modularization (Moltis) or dual-layer ReAct loops (NanoBot), OpenClaw relies on a massive, pluggable gateway architecture. However, this monolithic approach is currently its biggest liability compared to peers; automatic updates and hardcoded timeouts are causing severe deployment friction (gateway OOMs, 100% CPU usage) that lighter-weight agents like NanoClaw and Moltis are actively avoiding.

**Community Size Comparison:**
OpenClaw's community is an order of magnitude larger than almost the entire ecosystem combined (excluding ZeroClaw/CoPaw). Yet, its community health is struggling. The ratio of open issues/PRs is outpacing maintainer capacity, leading to critical backlog stalls (e.g., silent message loss during reloads), whereas smaller communities (LobsterAI, Moltis) are demonstrating much faster, cleaner triage cycles.

## 4. Shared Technical Focus Areas

*   **Strict Context & Memory Management:** 
    *   *Projects:* OpenClaw, Hermes, NanoClaw, NanoBot, LobsterAI.
    *   *Requirements:* Unbounded session histories are crashing gateways (OpenClaw, NanoClaw). Projects are urgently requiring robust "context compaction" (CoPaw) and biologically-inspired memory consolidation (PicoClaw's "Seahorse") to prevent token-cost explosions and agent hallucinations.
*   **MCP (Model Context Protocol) Integration:**
    *   *Projects:* Hermes, PicoClaw, ZeroClaw, CoPaw.
    *   *Requirements:* Standardizing tool schemas. Agents are crashing because they fail to sanitize MCP tool names (NanoBot) or struggle with strict Python SDK validations (Hermes).
*   **Provider Fallback & LLM Agnosticism:**
    *   *Projects:* NanoBot, ZeroClaw, CoPaw, LobsterAI.
    *   *Requirements:* The rollout of DeepSeek V4 and GPT-5 variants is breaking payload schemas across the board. There is a massive demand for cross-provider failover (NanoBot) to prevent agent loops from hanging on 5xx or 429 errors.
*   **Multi-Platform Adapter Parity:**
    *   *Projects:* NanoClaw, ZeroClaw, CoPaw.
    *   *Requirements:* Users are demanding feature parity across Telegram, Discord, Feishu, and WeChat, complaining that non-WebUI channels feel like "second-class citizens."

## 5. Differentiation Analysis

*   **Enterprise Deployments & Security:** **LobsterAI** and **IronClaw** differentiate by targeting enterprise/commercial wrappers. LobsterAI is heavily focused on IPC access controls, Cowork features, and electron-based security patches. IronClaw is undergoing a massive "Reborn" architectural rewrite specifically for durable events, auditing, and strict subsystem separation.
*   **Modularity & Lightweighting:** **Moltis** is uniquely moving toward compile-time customization, stripping away unnecessary channels (Teams, Discord) to create a tailored, lightweight binary—contrasting sharply with OpenClaw's heavy, monolithic Docker images.
*   **Routing Architecture:** **NanoClaw** and **NanoBot** are heavily focused on complex agent-to-agent routing and sub-agent delegation, explicitly building logic to prevent infinite routing loops ("politeness loops") and allowing mid-loop human interruption.
*   **Hardware & Edge:** **PicoClaw** explicitly caters to edge, ARM, and local setups (LM Studio, vLLM), pushing for self-upgrade support on embedded devices, whereas peers generally assume cloud or standard server deployments.

## 6. Community Momentum & Maturity

*   **Tier 1: Rapidly Iterating & Scaling (OpenClaw, CoPaw, ZeroClaw):** 
    These projects have massive community momentum but are currently paying a "stability tax." They are processing 50-500 issues/PRs daily but face severe regressions (OOMs, UI state losses, silent dead-loops) due to outpacing maintainer review capacity.
*   **Tier 2: Stabilizing & Maturing (NanoClaw, PicoClaw, NanoBot, LobsterAI, Moltis):**
    These ecosystems are in a healthier phase. They are aggressively merging targeted bug fixes, recovering from legacy technical debt, and establishing clear roadmaps (e.g., PicoClaw's structured v0.2.7 rollout, LobsterAI's security hardening). Maintainer bandwidth is adequate for community velocity.
*   **Tier 3: Core Restructuring (IronClaw):**
    IronClaw is in a class of its own, essentially rebuilding its core engine ("Reborn") while fighting V2 bugs. Momentum is high but inwardly focused on foundational architecture rather than broad feature requests.
*   **Tier 4: Dormant (NullClaw, TinyClaw, ZeptoClaw, EasyClaw):** 
    Zero community or development activity in the last 24 hours.

## 7. Trend Signals

1.  **The "Reasoning Model" Fragility Crisis:** The introduction of advanced models (GPT-5, DeepSeek V4) is breaking agent runtimes. Projects like OpenClaw and ZeroClaw are suffering from tool payload rejections and dropped `reasoning_content`. *Takeaway for devs:* Agent frameworks must implement aggressive payload normalization and schema sanitization layers rather than blindly passing JSON between LLMs and tools.
2.  **From Monoliths to Modular/Edge Deployments:** A strong signal (led by Moltis and PicoClaw) shows user demand shifting away from heavy Docker deployments toward lightweight, modular binaries capable of running on ARM/edge devices with local LLMs (LM Studio, vLLM). 
3.  **Autonomy requires Intervention Mechanics:** As agents are trusted with complex tasks, users are frustrated by "black box" execution. Features allowing mid-loop intervention (NanoBot), real-time progress polling (CoPaw), and strict task guardrails (IronClaw) are becoming baseline requirements for autonomous frameworks.
4.  **Multi-Channel UX Deficit:** There is a broad industry realization that Web UIs are outpacing messaging integrations. Users are loudly demanding that Slack, Telegram, and WeChat integrations support advanced features (inline approvals, canvas syncing) exactly as they function in the browser.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-28

## 1. Today's Overview
NanoBot experienced a highly active day with robust community engagement, processing 17 issues and 37 pull requests in the last 24 hours. The contributor base showed strong momentum, successfully merging 21 PRs while actively discussing 16 new ones. Activity primarily focused on extending channel integrations (adding SimpleX and fixing Discord/Telegram), refining LLM provider compatibility (DeepSeek, HuggingFace, OpenAI Codex), and enhancing core session/history management. The high volume of community-driven bug fixes and feature PRs indicates a healthy, collaborative open-source ecosystem that is aggressively stabilizing the agent runtime. 

## 2. Releases
No new official releases were published today.

## 3. Project Progress
Significant progress was made in fixing regressions, improving provider robustness, and expanding channel capabilities. Notable merged/closed PRs include:
*   **Codex Streaming Restored:** [PR #3480](https://github.com/HKUDS/nanobot/pull/3480) and [PR #3479](https://github.com/HKUDS/nanobot/pull/3479) fixed a regression where OpenAI Codex provider stopped streaming intermediate progress to channels.
*   **Provider Stability:** [PR #3478](https://github.com/HKUDS/nanobot/pull/3478) merged, bounding OpenAI-compatible request timeouts to prevent 10-minute agent loop hangs. [PR #3458](https://github.com/HKUDS/nanobot/pull/3458) normalized non-string message payloads to prevent crashes with DeepSeek APIs.
*   **Session & History Hardening:** [PR #3459](https://github.com/HKUDS/nanobot/pull/3459) enforced session replay and file-cap invariants to prevent unbounded disk growth and context drift.
*   **Discord Thread Fix:** [PR #3397](https://github.com/HKUDS/nanobot/pull/3397) resolved a frustrating bug where Discord thread replies were blocked unless the specific thread ID was allowlisted.
*   **Heartbeat Reliability:** [PR #3389](https://github.com/HKUDS/nanobot/pull/3389) prevented the Heartbeat module from leaking internal system instructions to end-users.

## 4. Community Hot Topics
*   **Agent Loop Message Queuing** ([Issue #2133](https://github.com/HKUDS/nanobot/issues/2133), 19 comments): Users are deeply discussing the friction of interacting with the agent while it is executing a complex task. Currently, users must use `/stop` to inject instructions. The community is debating architectural changes to allow seamless, mid-loop user interruptions. 
*   **Model Failover** ([Issue #3376](https://github.com/HKUDS/nanobot/issues/3376), 11 comments): There is a strong consensus around the need for cross-provider failover. Users want the agent to automatically switch to a backup Provider/Model if the primary one experiences a 429 rate limit or 5xx error, rather than just retrying the same provider.
*   **Architectural Autonomy** ([Issue #1181](https://github.com/HKUDS/nanobot/issues/1181), 9 👍): This highly-upvoted issue continues to drive discussion on evolving NanoBot from a single-layer ReAct loop to a dual-layer architecture (Steering Loop + AgentMessage) to handle asynchronous messaging better.

## 5. Bugs & Stability
*   **DeepSeek API Blank Replies & Crashes:** Users reported blank replies and missing `reasoning_content` errors when using the newer `deepseek-v4-pro` and `deepseek-v4-flash` models ([Issue #3474](https://github.com/HKUDS/nanobot/issues/3474), [Issue #3469](https://github.com/HKUDS/nanobot/issues/3469)). *Fix status: Partially addressed by merged payload normalization in [PR #3458](https://github.com/HKUDS/nanobot/pull/3458), but v4 specific edge cases may still be tested.*
*   **WebSocket Failure on Remote WebUI:** Binding the WebUI to `0.0.0.0` breaks WebSocket connections ([Issue #3473](https://github.com/HKUDS/nanobot/issues/3473)). *Fix status: Open, pending investigation.*
*   **Subagent Thread Routing:** Subagent completion messages are incorrectly routing to the channel-level session instead of the originating Slack thread ([Issue #3464](https://github.com/HKUDS/nanobot/issues/3464)). *Fix status: Open.*
*   **MCP Capability Name Sanitization:** NanoBot is crashing/failing when registering remote MCP server capabilities because it doesn't sanitize tool names ([Issue #3468](https://github.com/HKUDS/nanobot/issues/3468)). *Fix status: Open.*

## 6. Feature Requests & Roadmap Signals
*   **Persistent Task Awareness:** A feature request for a "Session-Level Focus Tool" to help the agent maintain a mental task board and return to the main task after side-interruptions ([Issue #3292](https://github.com/HKUDS/nanobot/issues/3292)). 
*   **Configurable Compaction Ratio:** Users want to configure context compaction ratios rather than just trigger points to maximize token utilization ([Issue #3270](https://github.com/HKUDS/nanobot/issues/3270)).
*   **New Integrations (PRs Open):** The community is actively building integrations for **SimpleX Chat** ([PR #3486](https://github.com/HKUDS/nanobot/pull/3486)), **HuggingFace Inference Providers** ([PR #3490](https://github.com/HKUDS/nanobot/pull/3490)), and **Olostep Web Search** ([PR #3405](https://github.com/HKUDS/nanobot/pull/3405)). 
*   *Prediction:* Given the high activity, the next minor release will likely focus heavily on provider resilience (timeouts, failovers) and expanded channel support.

## 7. User Feedback Summary
Users are highly satisfied with NanoBot's growing multi-channel presence but express frustration with real-time intervention. A core pain point is the inability to easily steer, correct, or halt the agent without breaking the session flow. Users operating local models or self-hosted APIs (via vLLM, LM Studio, Ollama) are frequently hitting edge cases, indicating that enterprise/local deployments are a rapidly growing use case requiring more granular configuration (e.g., [PR #3491](https://github.com/HKUDS/nanobot/pull/3491) requesting `extra_body` config for custom parameters).

## 8. Backlog Watch
*   **Long-Running Task Architecture:** [PR #3460](https://github.com/HKUDS/nanobot/pull/3460) proposes a `LongTaskTool` (a meta-ReAct loop). This is a massive architectural change that requires careful maintainer review before merging.
*   **Session-Scoped History:** [PR #3481](https://github.com/HKUDS/nanobot/pull/3481) attempts to fix cross-channel history bleed by isolating history files per session. This is a critical data-integrity update currently awaiting review.
*   **Automation Context Gap:** [Issue #3484](https://github.com/HKUDS/nanobot/issues/3484) highlights that automated cron-jobs lack the ability to maintain active session context, an issue with zero maintainer comments that needs addressing for advanced autonomy workflows.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-28

## 1. Today's Overview
Hermes Agent is experiencing a high-velocity development cycle with an immense volume of community interaction. In the past 24 hours, the project saw 50 issues updated (44 open) and 50 pull requests updated (44 open), indicating an extremely active open-source community that is rapidly filing bugs and submitting patches. The majority of today's activity centers heavily around the **gateway infrastructure**, **context compression stability**, and **platform-specific adapters** (Telegram, Discord, Feishu). Without any new official releases cut today, the repository is currently in an active, pre-release triage and feature-merging phase.

## 2. Releases
There were **no new releases** recorded for today. The most recent tagged release remains v0.11.0 (2026.4.23). The massive influx of open PRs today suggests that maintainers are likely staging a substantial patch or minor version bump in the near future.

## 3. Project Progress
While 44 PRs remain open, the community closed 6 PRs today. Key fixes and advancements include:
*   **Session Search CJK Fix ([PR #14842](https://github.com/NousResearch/hermes-agent/pull/14842))**: Merged a fix to supplement FTS5 with a LIKE fallback for CJK partial matching, directly resolving issues with non-English context retrieval.
*   **Honcho Config Precedence ([Issue #14984](https://github.com/NousResearch/hermes-agent/issues/14984))**: Closed a bug where platform user IDs overrode custom `peerName` in single-user setups, ensuring proper profile resolution.
*   **Auth Bug Resolution ([PR #16716](https://github.com/NousResearch/hermes-agent/pull/16716))**: Closed a pull request addressing a flaw in the `auth remove` CLI command.

## 4. Community Hot Topics
The most actively discussed items reveal a strong need for robust multi-modal support and core stability:
*   **Vision Tool Complete Failure ([Issue #9077](https://github.com/NousResearch/hermes-agent/issues/9077) - 👍 2, Comments 3):** Users are heavily upvoting an issue where the `vision_analyze` tool completely fails to read local or URL images. This indicates vision capabilities are highly sought after but currently unreliable.
*   **MiniMax Vision Support ([Issue #9127](https://github.com/NousResearch/hermes-agent/issues/9127) - 👍 4, Comments 2):** A highly requested feature asking for `minimax-cn` provider support for the vision tool, highlighting the community's desire for flexible, multi-provider AI routing.
*   **MCP Output Schema Validation ([Issue #9075](https://github.com/NousResearch/hermes-agent/issues/9075) - Comments 3):** A critical discussion about Hermes failing tool calls before results are returned due to strict MCP Python SDK validation. This points to growing pains in MCP (Model Context Protocol) integration.

## 5. Bugs & Stability
Several high-priority bugs were reported today, many causing unrecoverable context loss or bad user experiences on messaging platforms:
1.  **[P1] Context Compression Data Loss ([Issue #16650](https://github.com/NousResearch/hermes-agent/issues/16650)):** When compression fails (e.g., API 404), history is dropped and replaced with a static fallback marker without notifying the user. **Status: Open, no fix PR yet.**
2.  **[P1] Context Duplication during Compression ([Issue #9096](https://github.com/NousResearch/hermes-agent/issues/9096)):** Long conversations trigger compression, which erroneously inserts historical conversations into the current context.
3.  **[P2] Compression Fallback Markers ([Issue #16670](https://github.com/NousResearch/hermes-agent/issues/16670)):** Incomplete chunked reads cause context loss. **Status: Open.**
4.  **[P2] Gateway MEDIA Tag Leak ([Issue #16720](https://github.com/NousResearch/hermes-agent/issues/16720)):** Gateway incorrectly treats literal `MEDIA:` strings in tool output/logs as real media attachments. **Status: Fix proposed in [PR #16721](https://github.com/NousResearch/hermes-agent/pull/16721).**
5.  **[P1] Telegram Streaming Flood Control ([Issue #16668](https://github.com/NousResearch/hermes-agent/issues/16668)):** Telegram streaming leaves partial messages visible and sends duplicate final responses. **Status: Open.**

## 6. Feature Requests & Roadmap Signals
Based on today's activity, the roadmap is heavily leaning toward **resilience, persistence, and provider expandability**:
*   **Plugin Ecosystem / Auto-injection:** Requests for a `context-resume` plugin ([Issue #16661](https://github.com/NousResearch/hermes-agent/issues/16661)) and declarative NixOS plugin installations ([Issue #14453](https://github.com/NousResearch/hermes-agent/issues/14453)) show a demand for more modular, stateful deployments.
*   **Gateway Resilience:** Auto-starting the dashboard with systemd upon WSL reboots ([Issue #16702](https://github.com/NousResearch/hermes-agent/issues/16702)) highlights the enterprise/self-hosted user base's need for zero-downtime.
*   **Tool Upgrades:** Upgrading the `web_search` tool to expose limit parameters and advanced query operators ([Issue #16696](https://github.com/NousResearch/hermes-agent/issues/16696)) is actively being pushed by power users.
*   **Next Version Prediction:** The next version will likely focus heavily on fixing context-compression edge cases, patching Telegram/Discord adapter bugs, and merging the DeepSeek temperature fixes ([PR #16715](https://github.com/NousResearch/hermes-agent/pull/16715)).

## 7. User Feedback Summary
Real-world users are expressing distinct pain points:
*   **Docker-Out-of-Docker (DooD) Complexity:** Users running Hermes via Docker with mounted Docker sockets are hitting `docker version` runtime errors ([Issue #16703](https://github.com/NousResearch/hermes-agent/issues/16703)), indicating the official Docker images need better out-of-the-box DooD support.
*   **Model Personality Bleed:** Users of the MiniMax provider are frustrated by the model overriding agentic instructions to ask "want me to proceed?" instead of executing tasks autonomously ([Issue #16685](https://github.com/NousResearch/hermes-agent/issues/16685)).
*   **TUI/CLI Polish:** Developers are annoyed by minor CLI friction, such as Ctrl+W deleting entire URLs instead of path segments ([Issue #9025](https://github.com/NousResearch/hermes-agent/issues/9025)).
*   **Community Support Friction:** A user noted bounced emails when trying to contact MiniMax support for Hermes integration ([Issue #16680](https://github.com/NousResearch/hermes-agent/issues/16680)), showing a need for clearer third-party provider support channels.

## 8. Backlog Watch
The following critical/stale items require immediate maintainer attention:
*   **[Security] TOCTOU in Google OAuth ([PR #16718](https://github.com/NousResearch/hermes-agent/pull/16718)):** A valid security patch fixing a Time-of-Check to Time-of-Use (TOCTOU) window that leaves credentials publicly readable temporarily. *Needs expedited review and merge.*
*   **[Security] Injection Scanner Hardening ([PR #9028](https://github.com/NousResearch/hermes-agent/pull/9028)):** A P1 PR addressing synonym bypasses and Unicode homograph bypasses in the tool injection scanner. *Open since mid-April, urgently needs maintainer eyes.*
*   **[Stability] Feishu Zombie Sessions ([Issue #9090](https://github.com/NousResearch/hermes-agent/issues/9090)):** Gateway restarts cause WebSocket sessions to accumulate indefinitely in the database for Feishu users. *Open since April 13, requires a patch to properly close DB sessions on shutdown.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-28

## 1. Today's Overview
PicoClaw is experiencing a highly active and healthy development cycle, maintaining strong momentum as a multi-channel, open-source AI agent framework. With 109 issues updated (66.9% closure rate) and 120 pull requests updated (47.5% merge rate) in the last 24 hours, both maintainers and community contributors are aggressively resolving bugs and iterating on new features. The release of the `v0.2.7` nightly build indicates that the project is actively preparing for its next stable milestone, incorporating recent architectural improvements and community patches.

## 2. Releases
*   **nightly: Nightly Build (v0.2.7-nightly.20260427.39dec354)**
    *   *Details:* Automated build tracking the `main` branch.
    *   *Notes:* As a nightly release, it may be unstable. It serves as a testing ground for the upcoming `v0.2.7` stable release, packing recent merges like provider compatibility fixes, cron bug fixes, and memory enhancements. 

## 3. Project Progress
A significant amount of code was merged or closed today, pushing forward key architectural and robustness improvements:
*   **Agent Memory & Context Management:** Closed issue [#1919](https://github.com/sipeed/picoclaw/issues/1919) ("Seahorse - Biologically-inspired Memory System"), laying the groundwork for short/long-term memory consolidation. 
*   **System Architecture:** Merged/closed issue [#2233](https://github.com/sipeed/picoclaw/issues/2233) to standardize inbound context and decouple routing from session allocation, which is crucial for scaling across multiple channels.
*   **Docker Usability:** Resolved [#1228](https://github.com/sipeed/picoclaw/issues/1228) and [#2236](https://github.com/sipeed/picoclaw/issues/2236), pre-installing essential dev tools (python, curl, jq) in the Docker image and fixing web UI port mapping bugs.
*   **Channel Integrations:** Closed [#1372](https://github.com/sipeed/picoclaw/issues/1372) for OpenIM channel integration.

## 4. Community Hot Topics
*   **Adding TTS and ASR Support ([#1648](https://github.com/sipeed/picoclaw/issues/1648), 23 comments, Open):** The community is highly engaged in adding voice interaction capabilities (Text-to-Speech and Speech-to-Text) to PicoClaw. This highlights a strong user need to transition PicoClaw from a text-based agent to a multi-modal voice assistant.
*   **LM Studio Easy Connect ([#28](https://github.com/sipeed/picoclaw/issues/28), 16 comments, Open):** Non-developer users are struggling to connect PicoClaw to local models via LM Studio. This indicates a clear demand for better local, privacy-first LLM integration.
*   **Seahorse Memory System ([#1919](https://github.com/sipeed/picoclaw/issues/1919), 10 comments, Closed):** Exciting community discourse around the "Seahorse" biologically-inspired memory system, showing user appetite for agents that can remember context over long periods.
*   **PicoClaw Logo Design ([#297](https://github.com/sipeed/picoclaw/issues/297), 10 comments, Closed):** The project is establishing its visual identity with a "Mantis Shrimp" logo, reflecting the project's "small, fast, and powerful" ethos.

## 5. Bugs & Stability
Several critical bugs have been identified, though patches are actively under review:
*   **API Key Silently Dropped ([#2578](https://github.com/sipeed/picoclaw/issues/2578), 12 comments, Open):** In `v0.2.6`, the `openai_compat` provider drops Authorization headers. *Fix PR:* [#2372](https://github.com/sipeed/picoclaw/pull/2372) resolves legacy `api_key` unmarshalling bugs causing 401s.
*   **MCP Tool Crash with Gemini ([#2668](https://github.com/sipeed/picoclaw/issues/2668) / Fix PR [#2681](https://github.com/sipeed/picoclaw/pull/2681)):** PicoClaw crashes with HTTP 400 when using Gemini models with MCP tools due to complex JSON schemas. A sanitizer fix is already submitted.
*   **Agent Loop Crash ([#2371](https://github.com/sipeed/picoclaw/issues/2371), 6 comments, Closed):** Runtime panic in `pkg/agent/loop.go` when using certain providers. 
*   **Cron Tasks Silent Failure ([#1058](https://github.com/sipeed/picoclaw/issues/1058), 6 comments, Closed):** Cron jobs with `deliver=false` silently discard LLM responses. *Fix PR:* [#2520](https://github.com/sipeed/picoclaw/pull/2520) is currently open and addressing cron creation and execution failures.

## 6. Feature Requests & Roadmap Signals
Based on today's open issues and active PRs, the `v0.2.7` / `v0.3.0` roadmaps are heavily focused on UX, observability, and multi-modal capabilities:
*   **Streaming Web Chat ([#1950](https://github.com/sipeed/picoclaw/issues/1950) / PR [#2587](https://github.com/sipeed/picoclaw/pull/2587)):** Highly requested streaming output for the web interface is actively being implemented.
*   **Self-Upgrade Support ([#618](https://github.com/sipeed/picoclaw/issues/618), 2 👍, Open):** Native self-updating capabilities for Debian, Windows, and embedded devices. 
*   **OpenAI Responses API Migration ([#2171](https://github.com/sipeed/picoclaw/issues/2171), 8 comments, Open):** A proposed refactor to move away from the legacy Chat Completions API to OpenAI's newer Responses API.
*   **Observability:** Strong signals for enterprise readiness with requests for [OTel GenAI support](https://github.com/sipeed/picoclaw/issues/1731) and LangSmith tracing ([#2173](https://github.com/sipeed/picoclaw/issues/2173)).

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing frustration with provider configuration (e.g., API keys not taking effect in the Android/Web UI as seen in [#2368](https://github.com/sipeed/picoclaw/issues/2368)). Additionally, long-running tasks lack UI feedback, making the agent appear "stuck" ([#571](https://github.com/sipeed/picoclaw/issues/571), [#2009](https://github.com/sipeed/picoclaw/issues/2009)).
*   **Deployment:** Docker users report configuration friction, particularly around port mapping and gateway availability ([#2236](https://github.com/sipeed/picoclaw/issues/2236), [#1708](https://github.com/sipeed/picoclaw/issues/1708)).
*   **Satisfaction:** The community is highly enthusiastic about the project's expandability. The volume of PRs introducing new skills (PR [#2332](https://github.com/sipeed/picoclaw/pull/2332)), session management (PR [#2491](https://github.com/sipeed/picoclaw/pull/2491)), and WhatsApp proxy support (PR [#2284](https://github.com/sipeed/picoclaw/pull/2284)) shows a thriving and dedicated contributor base.

## 8. Backlog Watch
The following high-impact items have gone stale and urgently require core maintainer triage:
*   **[Security] Auth Integration ([#1067](https://github.com/sipeed/picoclaw/issues/1067)):** The lack of native authentication means anyone with CLI access can execute commands. This is a critical blocker for enterprise or public-facing deployments.
*   **[Stability] LLM Call Retry Mechanism ([#629](https://github.com/sipeed/picoclaw/issues/629)):** Agent hangs permanently on HTTP 500 errors. An automatic retry mechanism is essential for reliability.
*   **[UX] Progress Feedback During Execution ([#571](https://github.com/sipeed/picoclaw/issues/571)):** The "blank screen" during tool execution severely degrades the end-user experience. 
*   **Stale PRs:** Numerous community bug fixes and features (e.g., PR [#2327](https://github.com/sipeed/picoclaw/pull/2327) - Security Shield, PR [#2336](https://github.com/sipeed/picoclaw/pull/2336) - Stale session fixes) have been open for nearly a month without reviews. Maintainer bandwidth for PR reviews appears to be the primary bottleneck currently limiting project velocity.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-28

## 1. Today's Overview
NanoClaw is currently experiencing a **high-velocity development phase**, primarily driven by a substantial architectural shift to v2 and the rapid expansion of its multi-channel messaging capabilities. Activity over the last 24 hours is exceptionally brisk, with 25 updated Pull Requests (13 merged/closed) and 16 active Issues. The contributor base is highly engaged in hardening the system's infrastructure, fixing platform-specific adapter bugs (especially Telegram and Discord), and improving the initial setup experience. Overall project health appears robust, characterized by active community bug reporting and swift maintainer responses to edge cases.

## 2. Releases
There have been **no new releases** published in the last 24 hours. The project continues to iterate heavily on the v2 architecture merged late last week, and the current volume of merged PRs suggests an impending patch or minor release to stabilize the v2 rollout.

## 3. Project Progress
A significant amount of foundational and architectural work was merged today, indicating rapid stabilization of the v2 upgrade:
* **Channel Adapters & Integrations:** The new Telegram channel adapter ([PR #2049](https://github.com/qwibitai/nanoclaw/pull/2049)) was successfully merged, introducing pairing flows and specific markdown sanitization. Additionally, the RooSync inbox bridge was fixed to handle `@-mention` wakes correctly ([PR #2050](https://github.com/qwibitai/nanoclaw/pull/2050)).
* **Session & Memory Management:** Long-standing issues with massive session transcripts causing silent context loss were addressed by merging session size rotation and pre-death memory flushing ([PR #987](https://github.com/qwibitai/nanoclaw/pull/987)). 
* **Voice/Audio Capabilities:** A channel-agnostic voice transcription skill using local whisper.cpp or OpenAI's API was merged ([PR #1326](https://github.com/qwibitai/nanoclaw/pull/1326)).
* **Output Parsing & Configuration:** Fixes for empty container stdout ([PR #1912](https://github.com/qwibitai/nanoclaw/pull/1912)) and dynamic assistant name trigger references ([PR #1913](https://github.com/qwibitai/nanoclaw/pull/1913)) were closed and merged. 

## 4. Community Hot Topics
The community is highly focused on the reliability of message routing and multi-platform adapter behaviors in the new v2 architecture.
* **Agent Self-Routing Loops:** [PR #2063](https://github.com/qwibitai/nanoclaw/pull/2063) addresses a critical production issue where unbounded agent-to-agent routing caused infinite self-loops and "politeness loops" (agents thanking each other endlessly). 
* **Package Install Blocking Telegram:** [Issue #2048](https://github.com/qwibitai/nanoclaw/pull/2048) (👍 1) highlights a severe bug where the `install_packages` approval mechanism triggers an infinite self-routing loop, completely blocking Telegram message delivery. This indicates a strong community need for reliable, atomic tool-approval workflows.
* **Broad LLM API Support:** [Issue #1930](https://github.com/qwibitai/nanoclaw/issues/1930) requests support for third-party API channels and alternative models, highlighting user demand to break away from single-provider lock-in.

## 5. Bugs & Stability
Several high-severity bugs regarding container execution, message routing, and platform adapters were reported today:

1. **Critical - Infinite Routing Loops:** The `install_packages` tool triggers an infinite agent-to-agent routing loop, blocking Telegram delivery completely. ([Issue #2048](https://github.com/qwibitai/nanoclaw/issues/2048)). A targeted fix is currently open in [PR #2063](https://github.com/qwibitai/nanoclaw/pull/2063).
2. **High - MCP Config Corruption:** The `add_mcp_server` self-modification tool writes the `args` array as a stringified JSON object, crashing subsequent agent starts with exit code 1. ([Issue #2051](https://github.com/qwibitai/nanoclaw/issues/2051)).
3. **High - Runaway Container Resources:** `container-runner.ts` spawns Docker containers without resource limits (`--memory`, `--cpus`), leaving the host system vulnerable to OOM kills via tool call recursion. ([Issue #2029](https://github.com/qwibitai/nanoclaw/issues/2029)).
4. **Medium - Platform Regressions:** Multiple adapter-specific bugs were identified, including Telegram `&apos;` over-escaping ([Issue #2043](https://github.com/qwibitai/nanoclaw/issues/2043)), broken Telegram `setMessageReaction` due to 3-part platform IDs ([Issue #2042](https://github.com/qwibitai/nanoclaw/issues/2042)), and Discord breaking URL preview suppression (`<URL>`) ([Issue #2044](https://github.com/qwibitai/nanoclaw/issues/2044)).
5. **Low - Scheduler Garbage Collection:** One-shot scheduled tasks stay in the task list forever after completion, creating unbounded bloat ([Issue #2061](https://github.com/qwibitai/nanoclaw/issues/2061)).

## 6. Feature Requests & Roadmap Signals
Recent feature requests and open PRs suggest the roadmap is trending toward broader platform compatibility, enterprise sandboxing, and deeper multimodal support:
* **Alternative LLM Support:** Users are asking for an open architecture to plug in third-party LLM APIs ([Issue #1930](https://github.com/qwibitai/nanoclaw/issues/1930)).
* **Outbound Signal Attachments:** [PR #2040](https://github.com/qwibitai/nanoclaw/pull/2040) adds support for sending files via the Signal adapter, moving towards feature parity across all chat platforms.
* **Enterprise Sandbox Readiness:** [PR #2060](https://github.com/qwibitai/nanoclaw/pull/2060) introduces MITM proxy support and CA cert handling, a strong signal that NanoClaw is being prepped for strict corporate network environments.
* **Google Chat Integration:** Requests to add Google Chat to the automated setup picker ([Issue #2058](https://github.com/qwibitai/nanoclaw/issues/2058)) indicate user base expansion into Workspace ecosystems.

*Prediction:* The next release will likely focus almost entirely on v2 stabilization, merging the open PR for capping routing loops ([PR #2063](https://github.com/qwibitai/nanoclaw/pull/2063)), container resource limits, and comprehensive fixes for the Telegram/Discord adapter regressions.

## 7. User Feedback Summary
Users are enthusiastically adopting the v2 architecture but are currently bearing friction during the migration process. A distinct pain point is **installation and setup hangs**, particularly around `sudo` prompts and local CLI bootstrapping on fresh installs—actively being patched by contributors in a series of PRs ([PR #2052](https://github.com/qwibitai/nanoclaw/pull/2052), [PR #2054](https://github.com/qwibitai/nanoclaw/pull/2054), [PR #2055](https://github.com/qwibitai/nanoclaw/pull/2055)). Furthermore, users operating multi-platform deployments are encountering fragmented behaviors, such as missing Google Chat support in setup, and OneCLI rejecting underscores in agent identifiers ([Issue #2046](https://github.com/qwibitai/nanoclaw/issues/2046)). Despite these migration growing pains, user satisfaction remains high, evidenced by detailed bug reports and direct code contributions aimed at refining the self-hosting experience.

## 8. Backlog Watch
* **Timestamp Normalization:** [PR #1845](https://github.com/qwibitai/nanoclaw/pull/1845) has been open since April 18th. It fixes SQLite datetime formats to ISO 8601, which causes issues with channel adapters. This requires maintainer attention to prevent time-sync edge cases on long-running instances.
* **IPv6 Routing Failures:** [PR #2045](https://github.com/qwibitai/nanoclaw/pull/2045) addresses Node 22 `autoSelectFamily` breaking containers on IPv4-only LANs. Given the high likelihood of users running self-hosted agents on standard IPv4 home networks, this is a critical fix that shouldn't linger.
* **Task Deferment in Main Loop:** [PR #2033](https://github.com/qwibitai/nanoclaw/pull/2033) offers a one-line fix for task messages preempting pre-task scripts. A straightforward PR that needs a timely review to ensure agent task reliability.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-28

## 1. Today's Overview
IronClaw is experiencing a **high-activity phase** dominated by a major architectural overhaul codenamed "Reborn." The project saw 31 pull requests updated (6 merged/closed) and 10 issues updated (1 closed) in the last 24 hours. The core engineering team is aggressively landing foundational crates for the new architecture while simultaneously battling critical bugs in the existing V2 engine and CI canary tests. No new version was released today, but multiple staging-to-main promotion PRs indicate an imminent release. 

## 2. Releases
No new releases were published today. However, high-risk staging promotion PRs (such as [#2995](https://github.com/nearai/ironclaw/pull/2995) and [#2990](https://github.com/nearai/ironclaw/pull/2990), which include DB migrations) suggest a significant version bump is actively being deployed to main.

## 3. Project Progress
The primary focus today was landing the **"Reborn" architecture** without overwhelming reviewers, strictly following an integration plan mapped out in Issue #2987. 

**Merged/Closed PRs:**
*   **Reborn Foundation Landed:** [#2988](https://github.com/nearai/ironclaw/pull/2988) successfully merged the foundation crates (`ironclaw_host_api`, `ironclaw_resources`, `ironclaw_architecture`) onto the new `reborn-integration` branch.
*   **V2 Engine Bug Fix:** [#2989](https://github.com/nearai/ironclaw/pull/2989) fixed a critical mission daily budget bug where non-UTC timezones caused cron missions to stay permanently exhausted.
*   **Reborn Documentation:** [#2983](https://github.com/nearai/ironclaw/pull/2983) merged the contract-freeze review packet to help reviewers track the architectural shift.
*   **V2 Tool Inventory Fix:** [#2994](https://github.com/nearai/ironclaw/pull/2994) resolved an issue where engine-native actions like `mission_create` failed to return schema details.

**Open/In-Progress PRs:**
*   Core contributors are actively reviewing the next layers of Reborn: the durable event/audit substrate ([#2993](https://github.com/nearai/ironclaw/pull/2993)), auth control substrate ([#2999](https://github.com/nearai/ironclaw/pull/2999)), and filesystem substrate ([#2996](https://github.com/nearai/ironclaw/pull/2996)).

## 4. Community Hot Topics
*   **Reborn Architecture Rollout Plan:** The most active issue today was [#2987](https://github.com/nearai/ironclaw/issues/2987) (7 comments). Maintainers and contributors are actively discussing how to safely land the "Reborn" work via grouped, sliceable PRs rather than a massive monolithic commit. This highlights a project with healthy review practices and careful release management.
*   **Model Configuration Confusion:** [#1697](https://github.com/nearai/ironclaw/issues/1697) shows users struggling to configure third-party models (like Codex/GPT-5.4 mini) via the CLI. The underlying need is for better documentation or an updated CLI wizard that clearly lists compatible model identifiers.

## 5. Bugs & Stability
Several high-severity bugs were reported today, primarily affecting the V2 Engine and CI infrastructure:

*   **P1 - Data Integrity / State Corruption:** 
    *   **Routine/Mission Migration Bug:** After upgrading from v0.24.0 to v0.26.0, existing V1 Routines are misclassified as V2 Missions ([#2982](https://github.com/nearai/ironclaw/issues/2982)). *Fix Status:* PR [#2992](https://github.com/nearai/ironclaw/pull/2992) is currently open and addressing this.
    *   **Cross-Conversation Contamination:** Switching chats during a reasoning task causes responses from Conversation A to bleed into Conversation B ([#2833](https://github.com/nearai/ironclaw/issues/2833)). *Fix Status:* Pending.
*   **P2 - UX/Workflow Blockers:** 
    *   V2 Approval Flow is broken, forcing sequential execution and routing prompts incorrectly ([#2991](https://github.com/nearai/ironclaw/issues/2991)).
*   **P3 - CI / Canary Failures:**
    *   Multiple automated canary tests failed on commit `7404e7d`, including `public-smoke` ([#2976](https://github.com/nearai/ironclaw/issues/2976)), `private-oauth` ([#2975](https://github.com/nearai/ironclaw/issues/2975)), and `openai-compatible` ([#2977](https://github.com/nearai/ironclaw/issues/2977)). Google's bot detection is also blocking CI runner auth tests ([#2887](https://github.com/nearai/ironclaw/issues/2887)).

## 6. Feature Requests & Roadmap Signals
*   **Extensibility for Downstream Forks:** Contributor `pranavraja99` opened two significant PRs ([#2925](https://github.com/nearai/ironclaw/pull/2925) and [#2871](https://github.com/nearai/ironclaw/pull/2871)) introducing downstream deploy infra and an `ExternalToolRegistrar`. This signals that IronClaw is being seriously adopted as an underlying framework for domain-specific commercial AI products, requiring robust plugin architectures. 
*   **New Provider Support:** PR [#1446](https://github.com/nearai/ironclaw/pull/1446) aims to add Aliyun BaiLian Coding Plan support, indicating expanding LLM provider coverage in the next release.
*   **Better Documentation:** PR [#2948](https://github.com/nearai/ironclaw/pull/2948) attempts to document the complex dual-backend database system (PostgreSQL + libSQL), which is currently entirely undocumented.

## 7. User Feedback Summary
Users are actively stress-testing the V2 engine rollout. Upgrades from v0.24.0 to v0.26.0 are causing immediate pain points, specifically regarding UI tab visibility for older "Routines" and data misclassification. Users utilizing IronClaw for automated tasks are frustrated by broken daily-budget resets (timezone issues) and illogical approval routing in the V2 engine. On the positive side, community contributors are highly engaged with the "Reborn" architecture, showing strong buy-in for the project's technical direction.

## 8. Backlog Watch
*   **Cross-Conversation Contamination ([#2833](https://github.com/nearai/ironclaw/issues/2833)):** A critical data-leak bug reported 5 days ago with zero maintainer comments. Needs immediate triage.
*   **Codex Base Model Usage ([#1697](https://github.com/nearai/ironclaw/issues/1697)):** Created almost a month ago with only 1 comment. UX friction here prevents easy onboarding of new models.
*   **Canary Report Feature ([#2874](https://github.com/nearai/ironclaw/pull/2833)):** A large PR (size XL) opened 4 days ago to address CI reporting, but the summary is blank. Reviewers should verify if this is ready for eyes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-28

## 1. Today's Overview
LobsterAI (NetEase Youdao) is experiencing a **high-activity development phase**, with 38 pull requests updated in the past 24 hours—24 of which were merged or closed—and a new stable release shipped on April 25. The project's focus is heavily skewed toward **stability, security hardening, and bug fixes**, with multiple contributors addressing startup reliability, model resolution edge cases, and sensitive-data leaks. Community engagement remains moderate (7 issues updated), but the volume of merged PRs signals a well-coordinated sprint, likely preparing for a broader rollout or enterprise deployment milestone.

---

## 2. Releases

### **LobsterAI 2026.4.25** (released 2026-04-25)
**Key changes:**
- **`fix(cowork)`:** Restored `DiffView` support for the edit tool's `edits-array` input format ([PR #1814](https://github.com/netease-youdao/LobsterAI/pull/1814))
- **`feat(settings)`:** Added embedding configuration for memory search ([PR #1812](https://github.com/netease-youdao/LobsterAI/pull/1812))

**Assessment:** A targeted patch release. No breaking changes or migration notes documented. The memory-search embedding feature signals ongoing investment in RAG-based personal assistant capabilities.

---

## 3. Project Progress

**24 PRs merged/closed today**, dominated by fixes across cowork, model resolution, security, and platform reliability:

| Area | Key Merged PRs | Impact |
|------|---------------|--------|
| **Cowork / Model Resolution** | [#1845](https://github.com/netease-youdao/LobsterAI/pull/1845), [#1843](https://github.com/netease-youdao/LobsterAI/pull/1843), [#1842](https://github.com/netease-youdao/LobsterAI/pull/1842) | Fixed model override persistence, prevented session model rewriting, added stale-model fallback logic |
| **Security** | [#1844](https://github.com/netease-youdao/LobsterAI/pull/1844), [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831), [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833), [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) | Redacted sensitive keys in logs, proposed IPC access control, restricted `shell.openExternal` schemes |
| **Startup / Windows** | [#1846](https://github.com/netease-youdao/LobsterAI/pull/1846), [#1841](https://github.com/netease-youdao/LobsterAI/pull/1841) | Increased startup timeouts, added renderer diagnostics, fixed NSIS exit code handling |
| **Config / Provider** | [#1840](https://github.com/netease-youdao/LobsterAI/pull/1840), [#1847](https://github.com/netease-youdao/LobsterAI/pull/1847), [#1838](https://github.com/netease-youdao/LobsterAI/pull/1838) | Fixed config overwrite race, DeepSeek V4 provider fix, prevented clobbered OpenClaw snapshots |
| **Enterprise / IM** | [#1839](https://github.com/netease-youdao/LobsterAI/pull/1839), [#1834](https://github.com/netease-youdao/LobsterAI/pull/1834) | Multi-account OpenClaw sync, WeChat SDK upgrade with deadloop patches |
| **UX** | [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835) | Eliminated duplicate error messages in cowork session failures |

**Feature PRs advancing (open but active):**
- [PR #1527](https://github.com/netease-youdao/LobsterAI/pull/1527): AI-powered email connection diagnostics
- [PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519): Custom Cron scheduling for timed tasks with visual builder
- [PR #1511](https://github.com/netease-youdao/LobsterAI/pull/1511): Required-field indicators across 21 form pages

---

## 4. Community Hot Topics

The most actively discussed issues reveal **model compatibility and packaging** as persistent pain points:

1. **[#73](https://github.com/netease-youdao/LobsterAI/issues/73) — "根本用不了" (10 comments, stale)**
   Users encountering `404 not_found_error` from the Claude Agent SDK at startup. Multiple users reporting the same blocker. No maintainer resolution yet after 2 months.

2. **[#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) — DeepSeek V4 rejected requests (3 comments)**
   Third-party model integration failing with schema/payload rejection. Fix PR [#1847](https://github.com/netease-youdao/LobsterAI/pull/1847) was submitted and closed today, suggesting the fix may ship in the next release.

3. **[#100](https://github.com/netease-youdao/LobsterAI/issues/100) — macOS DMG packaging failure (3 comments, stale)**
   `electron-builder` can't find `dist-electron/main.js` in the asar archive. Affects developers building from source on macOS.

**Underlying need:** Users want reliable out-of-the-box support for third-party LLM providers (DeepSeek, Claude, Qwen) and smoother build/deploy tooling.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Status | Fix Available? |
|----------|-------|--------|----------------|
| 🔴 **Critical** | [#17](https://github.com/netease-youdao/LobsterAI/issues/17) — Start dead loop on launch | Open (stale, 65+ days) | No |
| 🔴 **Critical** | [#73](https://github.com/netease-youdao/LobsterAI/issues/73) — 404 error, app unusable | Open (stale, 62+ days) | No |
| 🟠 **High** | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) — DeepSeek V4 request rejection | Open | ✅ Yes: [PR #1847](https://github.com/netease-youdao/LobsterAI/pull/1847) (closed/merged) |
| 🟠 **High** | [#106](https://github.com/netease-youdao/LobsterAI/issues/106) — Custom model invocation failure | Open (stale) | Partially addressed by model resolution PRs today |
| 🟡 **Medium** | [#955](https://github.com/netease-youdao/LobsterAI/issues/955) — Private deployed model skill failure | Closed | Assumed resolved |
| 🟡 **Medium** | [#100](https://github.com/netease-youdao/LobsterAI/issues/100) — macOS DMG build error | Open (stale) | No |

**Security-relevant bugs (no public issues, but fix PRs merged today):**
- Sensitive key exposure in log files ([PR #1844](https://github.com/netease-youdao/LobsterAI/pull/1844))
- Potential local file access via `shell.openExternal` ([PR #1833](https://github.com/netease-youdao/LobsterAI/pull/1833))
- Unauthenticated IPC store access ([PR #1832](https://github.com/netease-youdao/LobsterAI/pull/1832))

---

## 6. Feature Requests & Roadmap Signals

| Feature Signal | Source | Likelihood |
|---------------|--------|-----------|
| **UI redesign / visual polish** | [Issue #1836](https://github.com/netease-youdao/LobsterAI/issues/1836): User complaints about outdated UI compared to competitors | Medium — acknowledged but no PR yet |
| **Custom Cron scheduling** | [PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519) (open, active) | High — likely next release |
| **AI-assisted error diagnostics for email** | [PR #1527](https://github.com/netease-youdao/LobsterAI/pull/1527) (open, active) | High — likely next release |
| **Memory/embedding-based search** | Release 2026.4.25 included embedding config | Already shipped |
| **Enhanced multi-provider LLM support** | Multiple model resolution fixes today + DeepSeek V4 fix | Ongoing focus |
| **Enterprise multi-account sync** | [PR #1839](https://github.com/netease-youdao/LobsterAI/pull/1839) merged | Already shipped |

**Prediction for next release (2026.4.28+):** Cron scheduling, AI email diagnostics, DeepSeek V4 support, and security hardening patches will be the headline features.

---

## 7. User Feedback Summary

**Pain Points:**
- **Model compatibility is the #1 frustration.** Users trying to use DeepSeek V4, Claude, or privately deployed Qwen models face failures (issues #73, #106, #1813, #955). The app works well with default models but breaks when users customize.
- **Startup reliability on Windows** is a recurring theme, with dead loops (#17) and timeout failures motivating today's diagnostic improvements ([PR #1846](https://github.com/netease-youdao/LobsterAI/pull/1846)).
- **Build process friction** — developers building from source on macOS encounter packaging errors (#100).
- **UI quality** — at least one user finds the interface "ugly compared to competitors" and uncomfortable to use ([#1836](https://github.com/netease-youdao/LobsterAI/issues/1836)).

**Positive Signals:**
- The skill system and cowork mode are recognized as valuable — users are actively trying to use them with private models.
- Rapid maintainer response to DeepSeek V4 issues (issue opened 4/24, fix merged 4/27).

---

## 8. Backlog Watch

These items require maintainer attention due to age, severity, or strategic importance:

| Item | Age | Risk | Recommendation |
|------|-----|------|---------------|
| [Issue #17](https://github.com/netease-youdao/LobsterAI/issues/17) — Start dead loop | 67 days | 🔴 Users can't launch the app | Needs reproduction triage; may be Windows-specific |
| [Issue #73](https://github.com/netease-youdao/LobsterAI/issues/73) — 404 unusable app | 62 days | 🔴 Complete blocker for affected users | Likely related to Claude SDK version mismatch; needs investigation |
| [Issue #100](https://github.com/netease-youdao/LobsterAI/issues/100) — macOS DMG build failure | 62 days | 🟠 Blocks community contributors on macOS | May need `electron-builder` config fix |
| [Issue #106](https://github.com/netease-youdao/LobsterAI/issues/106) — Custom model invocation failure | 62 days | 🟠 Core feature broken | Today's model resolution PRs may help; needs verification |
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Electron 41 upgrade (Dependabot) | 26 days | 🟡 Dependency freshness | Should be reviewed to keep up with Electron security patches |
| [PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519) — Cron scheduling | 21 days | — | Ready for final review and merge |
| [PR #1527](https://github.com/netease-youdao/LobsterAI/pull/1527) — AI email diagnostics | 21 days | — | Ready for final review and merge |

**Overall project health: 🟢 Active and improving.** The team is shipping at a strong cadence with a clear focus on stability and security. The main concern is a growing backlog of stale, unresolved blocker issues that could erode community trust if left unaddressed.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-28

## 1. Today's Overview
The Moltis project experienced a highly active day, characterized by a substantial amount of merging and closing activity. Maintainers and contributors resolved multiple UI and architectural bugs, bringing the closed/merged pull request count to 12 out of 14 updated. The development focus is heavily centered on architectural refactoring, reducing build bloat, and improving the web UI. 

## 2. Releases
**No new releases** were published today. However, given the high volume of significant merged PRs (architecture simplification, build optimizations, bug fixes), it appears the project is aggressively merging features in preparation for an upcoming release candidate or stable version.

## 3. Project Progress
Significant advancements were merged today, pushing the project's stability and modularity forward:
*   **Agent Architecture Simplification ([PR #898](https://github.com/moltis-org/moltis/pull/898)):** Merged to address [Issue #774](https://github.com/moltis-org/moltis/issues/774). It removes the "primary identity" concept, making the "main" agent a standard DB row and allowing agent routing everywhere.
*   **Frontend Build Cleanup ([PR #895](https://github.com/moltis-org/moltis/pull/895)):** Removed ~92K lines of committed generated JS/CSS assets. Moving forward, a `build.rs` script checks for required assets at compile time, keeping the repository clean.
*   **Optional Messaging Channels ([PR #891](https://github.com/moltis-org/moltis/pull/891), [PR #899](https://github.com/moltis-org/moltis/pull/899)):** Telegram, Discord, and MS Teams integrations are now optional at compile-time, significantly reducing binary size and build times for users who don't need them.
*   **UI Fixes:** Restored the missing session name and inline rename functionality in the chat toolbar ([PR #892](https://github.com/moltis-org/moltis/pull/892), fixing [Issue #888](https://github.com/moltis-org/moltis/issues/888)).
*   **Security Fix:** Added a regression test ensuring that security hooks returning `Block` (exit 1) cannot intentionally trip the circuit breaker ([PR #894](https://github.com/moltis-org/moltis/pull/894), closing [Issue #547](https://github.com/moltis-org/moltis/issues/547)).
*   **Matrix OIDC Fix:** Resolved an `invalid_redirect_uri` error for Matrix logins operating behind reverse proxies ([PR #893](https://github.com/moltis-org/moltis/pull/893)).
*   **Skills UX:** Fixed an issue where the skills UI showed "[object Object]" instead of actual RPC error messages, and enabled auto-trusting of skills upon installation ([PR #897](https://github.com/moltis-org/moltis/pull/897)).

## 4. Community Hot Topics
*   **Auto-Indexing Implementation ([PR #903](https://github.com/moltis-org/moltis/pull/903)):** Contributor *Cstewart-HC* opened four successive iterations (PRs [#900](https://github.com/moltis-org/moltis/pull/900), [#901](https://github.com/moltis-org/moltis/pull/901), [#902](https://github.com/moltis-org/moltis/pull/902), [#903](https://github.com/moltis-org/moltis/pull/903)) today to implement auto-triggered code indexing with file watchers and deduplication. This high iteration rate signals active, rapid development to eliminate manual indexing operations for agents.
*   **Agent "Clunkiness" ([Issue #774](https://github.com/moltis-org/moltis/issues/774)):** A highly addressed enhancement request by user *vvuk* regarding simplifying primary agents. This culminated in the merging of a massive architectural overhaul today ([PR #898](https://github.com/moltis-org/moltis/pull/898)). 

## 5. Bugs & Stability
*   **[High] Docker Build Failure ([Issue #896](https://github.com/moltis-org/moltis/issues/896)):** A newly opened bug reports that Docker builds are failing with `"Temporary failure resolving 'ports.ubuntu.com'"` during `apt-get update`. *No fix PR is currently linked.*
*   **[Medium] Jinja Exception ([Issue #317](https://github.com/moltis-org/moltis/issues/317)):** An older, disruptive bug causing a "System message must be at the beginning" error during chat sessions was finally updated and closed today.
*   **[Medium] Matrix OIDC Failure ([PR #893](https://github.com/moltis-org/moltis/pull/893)):** Reverse proxy users were unable to log in via Matrix. Resolved by correctly applying RFC 8252 standards for web redirect URIs.
*   **[Low] UI Regression - Session Rename ([Issue #888](https://github.com/moltis-org/moltis/issues/888)):** A recent PR accidentally removed the "More" modal, breaking session renaming. Fast-tracked and fixed the same day via [PR #892](https://github.com/moltis-org/moltis/pull/892).
*   **[Low] Hook Circuit Breaker Exploit ([Issue #547](https://github.com/moltis-org/moltis/issues/547)):** A theoretical vulnerability where intentional `exit 1` blocks could disable security hooks was patched and tested in [PR #894](https://github.com/moltis-org/moltis/pull/894).

## 6. Feature Requests & Roadmap Signals
Today's merged PRs reveal a clear roadmap trajectory focused on **modularity and core engine refinement**. 
*   **Compile-time Customization:** The shift to make Discord, MS Teams, and Telegram optional suggests the next version will heavily market itself as a lightweight, customizable binary that can be tailored to specific deployment needs.
*   **Smarter Context Retrieval:** The ongoing work on auto-triggered code indexing ([PR #903](https://github.com/moltis-org/moltis/pull/903)) indicates that the next major feature push will likely give Moltis agents proactive, automated file watching capabilities rather than relying on manual context uploads.

## 7. User Feedback Summary
Users are actively pushing the software into production environments, particularly utilizing Docker and reverse proxies. The main pain points currently revolve around deployment stability (e.g., DNS resolution failures in Docker builds, OIDC issues behind proxies). However, user satisfaction regarding the project's direction is high, as seen in the swift implementation of community requests to clean up agent architecture and streamline the UI.

## 8. Backlog Watch
*   **Docker Build Failure ([Issue #896](https://github.com/moltis-org/moltis/issues/896)):** As the only open bug from today's list, this needs immediate maintainer attention as it potentially blocks new users from deploying the application.
*   **Auto-Indexing PR ([PR #903](https://github.com/moltis-org/moltis/pull/903)):** While actively being worked on, this PR requires thorough code review due to the complexity of implementing file watchers and deduplication without impacting system performance.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-04-28)

## 1. Today's Overview
CoPaw (alongside its core engine QwenPaw) is currently exhibiting very high development velocity and community engagement. The project saw robust activity in the last 24 hours, with 50 issues updated (a 50/50 split between open and closed) and 43 pull requests updated (18 open, 25 merged/closed). Although there are no major semantic version releases today, maintainers are actively merging targeted fixes, refining channel integrations, and iterating heavily on context management and agent orchestration. The high volume of first-time contributor PRs also indicates a healthy, growing open-source ecosystem around the AI agent framework.

## 2. Releases
**No new major or minor releases were cut today.** 
However, a version bump to `1.1.4.post3` was merged ([PR #3879](https://github.com/agentscope-ai/QwenPaw/pull/3879)), which aggregates recent hotfixes. The 1.1.4.x release line appears heavily focused on patching UI state persistence, channel stability (QQ, Feishu, WeChat), and context compaction fallbacks.

## 3. Project Progress
Maintainers and community contributors made significant progress in stabilizing the platform and refining UI/UX:
*   **Configuration & ACP Orchestration:** Fixed an issue where the fallback agent profile was missing the `acp` field, preventing proper external agent orchestration (e.g., with OpenCode). ([PR #3834](https://github.com/agentscope-ai/QwenPaw/pull/3834))
*   **UI/UX Enhancements:** Merged a refactor of the chat model selector into a searchable flat list grouped by provider, inspired by tools like Cherry Studio. ([PR #3876](https://github.com/agentscope-ai/QwenPaw/pull/3876))
*   **Channel Reliability (QQ & Feishu):** Merged fixes to handle QQ WebSocket reconnects on recoverable aborts ([PR #3872](https://github.com/agentscope-ai/QwenPaw/pull/3872)) and added no-op handlers for Feishu reaction events to stop log spam. ([PR #3890](https://github.com/agentscope-ai/QwenPaw/pull/3890))
*   **Prompt & System Logic:** Fixed a silent indentation bug in `rebuild_sys_prompt` that caused premature loop exits, preventing system message updates. ([PR #3793](https://github.com/agentscope-ai/QwenPaw/pull/3793))
*   **Infrastructure:** Cleaned up the build directory post-pip install in the Dockerfile, reducing image bloat. ([PR #3638](https://github.com/agentscope-ai/QwenPaw/pull/3638))

## 4. Community Hot Topics
The most active discussions revolve around context management, external integrations, and core architecture:
*   **Safeguard Rules vs. Automation (9 Comments):** Users are frustrated that disabled safety rules (like `TOOL_CMD_IFS_INJECTION`) still block automated cron jobs using shell expansions. ([Issue #3709](https://github.com/agentscope-ai/QwenPaw/issues/3709))
*   **ACP & External Agents (6 Comments):** Users are actively trying to use QwenPaw as an orchestrator for tools like OpenCode, but facing random operation cancellations and connection hurdles. ([Issue #3705](https://github.com/agentscope-ai/QwenPaw/issues/3705), [Issue #3716](https://github.com/agentscope-ai/QwenPaw/issues/3716))
*   **Channel Approvals (6 Comments):** A highly requested feature is the ability to approve high-risk Tool Guard commands directly via messaging channels (like Feishu/WeChat) using "magic commands," rather than requiring the Web UI. ([Issue #3869](https://github.com/agentscope-ai/QwenPaw/issues/3869))
*   **Architecture Clarity (7 Comments):** Users are seeking official clarification on the relationship and future maintenance path between CoPaw and QwenPaw. ([Issue #3430](https://github.com/agentscope-ai/QwenPaw/issues/3430))

## 5. Bugs & Stability
Several high-severity bugs impacting UX and platform stability were reported today:
*   **Critical: SSE Stream Infinite Thinking:** Agents occasionally complete their response but leave a "Thinking" bubble hanging indefinitely due to the SSE stream not closing properly. ([Issue #3871](https://github.com/agentscope-ai/QwenPaw/issues/3871))
*   **High: UI State Loss:** Users report that model settings, plan modes, and long-term memory configurations are completely wiped upon toggling views or refreshing the page. ([Issue #3824](https://github.com/agentscope-ai/QwenPaw/issues/3824))
*   **High: Chromadb Segfault:** On newer Linux kernels/Python versions, `chromadb` Rust bindings cause hard process crashes (SIGSEGV) without Python-level error handling. ([Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854))
*   **High: MCP Clients Hanging:** Incorrect MCP lifecycles are causing the chat interface to hang indefinitely when certain MCP tools are invoked. ([Issue #3822](https://github.com/agentscope-ai/QwenPaw/issues/3822))
*   **Medium: Fake "Pause" Button:** The Web UI pause button only stops frontend rendering; the backend agent continues executing tool calls and burning tokens. ([Issue #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850))

## 6. Feature Requests & Roadmap Signals
Based on active PRs and Issues, the short-term roadmap is heavily focused on:
*   **Real-time Task Tracking:** Introduction of `ProgressObservingHook` to allow live inter-agent task progress polling. ([PR #3889](https://github.com/agentscope-ai/QwenPaw/pull/3889))
*   **Asynchronous UI Generation:** Auto-generating session titles via LLM asynchronously rather than relying on the first 10 characters. ([PR #3829](https://github.com/agentscope-ai/QwenPaw/pull/3829))
*   **Context Management Resilience:** Ongoing work to implement light context managers and ensure graceful fallbacks if context compaction fails. ([PR #3882](https://github.com/agentscope-ai/QwenPaw/pull/3882), [PR #3848](https://github.com/agentscope-ai/QwenPaw/pull/3848))
*   **Enhanced Channel Integrations:** Users want WeChat channels to support message merging/batching, and proactive messages to support custom channels (Feishu, DingTalk). ([Issue #3837](https://github.com/agentscope-ai/QwenPaw/issues/3837), [Issue #3804](https://github.com/agentscope-ai/QwenPaw/issues/3804))

## 7. User Feedback Summary
Users are excited about CoPaw's rapid evolution toward becoming a fully-fledged multi-agent orchestrator, especially regarding ACP (Agent Communication Protocol) integrations. However, there is clear frustration regarding UI performance and persistence. Desktop console users note significant lag when switching between long chat sessions ([Issue #3830](https://github.com/agentscope-ai/QwenPaw/issues/3830)). Furthermore, Docker users continue to struggle with configuration persistence (vector models resetting on restart) ([Issue #3817](https://github.com/agentscope-ai/QwenPaw/issues/3817)). The community strongly desires feature parity across all channels, specifically requesting that channel-based messaging not be treated as a "second-class citizen" compared to the Web UI.

## 8. Backlog Watch
The following high-impact items require maintainer attention:
*   **Web UI Performance:** Users are reporting severe latency when accessing the UI and calling APIs locally. This has been open since mid-April without a definitive fix. ([Issue #3499](https://github.com/agentscope-ai/QwenPaw/issues/3499))
*   **Session Histories Disappearing:** A critical bug where session history vanishes mid-conversation and new messages are routed to a ghost session. ([Issue #3843](https://github.com/agentscope-ai/QwenPaw/issues/3843))
*   **Apple Silicon Default Support:** The `browser_use` tool still defaults to x86_64 emulation on macOS ARM architectures, causing significant performance degradation. ([Issue #2655](https://github.com/agentscope-ai/QwenPaw/issues/2655))
*   **Third-Party Model Provider Support:** A highly requested feature to support GitHub Copilot models natively remains open since early March. ([Issue #406](https://github.com/agentscope-ai/QwenPaw/issues/406))

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-28

## 1. Today's Overview
ZeroClaw is experiencing a period of high activity and active community contribution, with **48 issues updated** (38 open) and **50 pull requests updated** (37 open) in the past 24 hours. Despite the lack of a new official software release today, the development pace remains vigorous as contributors focus on recovering from a past bulk revert, addressing stability issues, and iterating on the platform's provider and channel ecosystems. A substantial portion of the current workload consists of bug fixes targeting the web dashboard, installation scripts, and LLM provider integrations. Overall, the high PR volume indicates a healthy, collaborative open-source environment actively stabilizing the codebase for an impending release.

## 2. Releases
There were **0 new releases** published today. The project is currently iterating on the bleeding edge of the codebase, with maintainers and community members focused on merging targeted bug fixes and recovering lost features before tagging a new stable release. 

## 3. Project Progress
Today saw **13 PRs merged or closed**, showcasing steady progress in fixing critical bugs, enhancing web UI capabilities, and improving infrastructure. Key advancements include:
*   **Provider Stability:** The critical issue of dropping `reasoning_content` for thinking models (e.g., DeepSeek-R1, Kimi) was successfully merged in [PR #1347](https://github.com/zeroclaw-labs/zeroclaw/pull/1347). Additionally, [PR #6069](https://github.com/zeroclaw-labs/zeroclaw/pull/6069) fixed the missing `/api/channels` route that caused the dashboard to crash.
*   **Web UI Enhancements:** [PR #6083](https://github.com/zeroclaw-labs/zeroclaw/pull/6083) merged, introducing per-message deletion, "Clear All", and compact mode to the web chat interface.
*   **Revert Recovery & Docs:** [PR #6169](https://github.com/zeroclaw-labs/zeroclaw/pull/6169) was opened to recover 4 small fixes lost in a previous bulk revert. [PR #6102](https://github.com/zeroclaw-labs/zeroclaw/pull/6102) advanced the much-needed rewrite of the Windows setup documentation.
*   **Security & Infrastructure:** [PR #6152](https://github.com/zeroclaw-labs/zeroclaw/pull/6152) performed a routine security maintenance pass, bumping 78 packages (including `hyper-rustls`, `axum`, and `aws-lc-rs`).

## 4. Community Hot Topics
The community is highly focused on provider configuration errors, installation workflows, and dashboard stability.
*   **Fresh Install & Provider Configs:** [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) (14 comments) highlights a blocking S1 bug on fresh installs involving default models. This aligns with [Issue #6149](https://github.com/zeroclaw-labs/zeroclaw/issues/6149) (4 comments), where users point out that documented `config.toml` examples do not match the current binary keys.
*   **Kimi Provider Streaming Errors:** [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (6 comments) remains an active S1 pain point where the Kimi-code provider fails during streaming tool calls due to missing reasoning content.
*   **Dashboard Reliability:** Users continue to report frontend friction. [Issue #5244](https://github.com/zeroclaw-labs/zeroclaw/issues/5244) (4 comments, 1 👍) details crashes on the Channels tab and Overview page.
*   **Architectural Debates:** [Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) (1 comment) sparked an interesting discussion on replacing heavy, ad-hoc integrations (Jira, GitHub) with lighter MCP-based skills, signaling community appetite for a more modular agent framework.

## 5. Bugs & Stability
Several high-severity bugs were reported or updated today, though maintainers and contributors have been rapid in proposing fixes:
*   **S0 - Data Loss / Security:** [Issue #5125](https://github.com/zeroclaw-labs/zeroclaw/issues/5125) reports severe CPU spikes across multiple cores simply when typing into the agent chat window on Ubuntu/Firefox. 
*   **S1 - Workflow Blocked:** 
    *   [Issue #6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096): `install.sh` fails to extract the web dashboard. *Fix available in [PR #6154](https://github.com/zeroclaw-labs/zeroclaw/pull/6154).*
    *   [Issue #4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878): E2EE recovery for Matrix completely fails to download room keys from backup after a store reset.
*   **S2 - Degraded Behavior:** 
    *   [Issue #6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001): Gateway chat succeeds but `/api/cost` stays zero. *Fix proposed in [PR #6159](https://github.com/zeroclaw-labs/zeroclaw/pull/6159).*
    *   [Issue #6136](https://github.com/zeroclaw-labs/zeroclaw/issues/6136): Deferred MCP tools are not inherited by delegate sub-sessions.
*   **Web UI / UX Bugs:** [Issue #6073](https://github.com/zeroclaw-labs/zeroclaw/issues/6073) details a misaligned text cursor in the advanced settings editor. *Fix bundled in [PR #6161](https://github.com/zeroclaw-labs/zeroclaw/pull/6161).*

## 6. Feature Requests & Roadmap Signals
The latest open PRs and issues suggest a strong trajectory toward **modularity, observability, and channel expansion** for the next release:
*   **Expanded Channel Support:** [PR #6166](https://github.com/zeroclaw-labs/zeroclaw/pull/6166) adds WeChat personal account support via the iLink Bot API, while [PR #6130](https://github.com/zeroclaw-labs/zeroclaw/pull/6130) recovers a previously reverted WeChat channel.
*   **Hybrid Skills & WASM:** [Issue #6140](https://github.com/zeroclaw-labs/zeroclaw/issues/6140) proposes a major architectural shift toward hybrid plugins utilizing both markdown skills and WASM binaries.
*   **Credential & Model Flexibility:** [PR #6168](https://github.com/zeroclaw-labs/zeroclaw/pull/6168) introduces `credential_process` support for AWS Bedrock auth, and [PR #6056](https://github.com/zeroclaw-labs/zeroclaw/pull/6056) adds a generic OpenAI-compat `/v1/models` fallback for unknown providers.
*   **Better Observability:** [PR #6164](https://github.com/zeroclaw-labs/zeroclaw/pull/6164) introduces the ability to manually trigger cron jobs from the Web UI, and [Issue #6145](https://github.com/zeroclaw-labs/zeroclaw/issues/6145) requests the ability to recover past chats by clicking on "Memories" in the UI.

## 7. User Feedback Summary
Users are enthusiastically adopting ZeroClaw across diverse environments (LXC containers, local Docker, Windows, various cloud providers) but are encountering friction with **configuration drift** and **installation workflows**. 
*   **Pain Points:** Windows users are particularly struggling, as noted in [Issue #6118](https://github.com/zeroclaw-labs/zeroclaw/issues/6118) (integer overflows and escaping bugs in `setup.bat`). Users employing ZeroClaw via external channels (Nextcloud Talk, Telegram) feel like second-class citizens compared to the primary web UI, citing broken features like Canvas tool syncing ([Issue #5356](https://github.com/zeroclaw-labs/zeroclaw/issues/5356)) and lack of basic commands like `/clear` ([Issue #6150](https://github.com/zeroclaw-labs/zeroclaw/issues/6150)).
*   **Satisfaction:** The project clearly fills a strong need for a self-hosted, multi-channel AI assistant. Users are deeply engaged, providing high-quality bug reports with detailed repro steps and logs, indicating a technically proficient and invested user base.

## 8. Backlog Watch
The following high-priority items require immediate maintainer attention to unblock workflows:
*   **Schema V3 Migration:** [Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) is a massive merge blocker coordinating breaking config field changes. It needs final review to proceed.
*   **Gateway Memory Leak:** [Issue #5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) highlights a high-risk issue where `AppState.cancel_tokens` entries are not evicted for abandoned sessions, leading to potential memory exhaustion.
*   **Lost Commits Audit:** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) tracks 153 commits lost in a bulk revert from March. Maintainers need to triage this list to ensure critical bug fixes aren't permanently lost.
*   **Security Audit Expansion:** [Issue #6132](https://github.com/zeroclaw-labs/zeroclaw/issues/6132) is currently blocked but represents an important security follow-up to scan new prompt-injection surfaces in the skills system.

</details>