# OpenClaw Ecosystem Digest 2026-04-21

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-20 22:12 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
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

# OpenClaw Project Digest — 2026-04-21

## 1. Today's Overview
OpenClaw is experiencing **extremely high community activity**, with 500 issues and 500 pull requests updated in the past 24 hours alone. The ratio of open to closed items (301 open issues, 199 closed; 332 open PRs, 168 merged/closed) indicates a massive influx of new bug reports and feature requests that are outpacing the maintainers' current capacity to resolve them. The high volume of open PRs—many submitted just today—shows strong contributor engagement. However, the large number of stale and regression-labeled issues hints at underlying growing pains, likely driven by rapid iteration and a sprawling plugin/channel ecosystem. No new stable or beta releases were cut today, though maintainers are actively merging targeted fixes.

---

## 2. Releases
**No new releases were published today.** The project appears to be in an active development/cleanup phase between releases (last referenced versions include `2026.4.11` and `2026.3.x`).

---

## 3. Project Progress
Maintainers and contributors merged/closed **168 PRs** and **199 issues** today. Key advancements include:

### Merged/Closed PR Highlights
*   **Telegram Transport Overhaul**: The most significant merged change is **PR [#69476](https://github.com/openclaw/openclaw/pull/69476)** by maintainer `steipete`, which lands a comprehensive hardening of the Telegram polling transport. It consolidates lifecycle/socket cleanup from [#68128](https://github.com/openclaw/openclaw/pull/68128), HTTP/1-only dispatchers from [#69243](https://github.com/openclaw/openclaw/pull/69243), and liveness bookkeeping from [#64333](https://github.com/openclaw/openclaw/pull/64333). This replaces the conflicted status plumbing from [#51931](https://github.com/openclaw/openclaw/pull/51931) and should resolve chronic Telegram socket leaks and false stall restarts.
*   **Compaction Settings Fix**: Merged **PR [#67146](https://github.com/openclaw/openclaw/pull/67146)** fixes a bug where resource loader reloads dropped in-memory compaction overrides.
*   **Telegram `humanDelay` Wiring**: Closed **PR [#69194](https://github.com/openclaw/openclaw/pull/69194)** to wire the `humanDelay` setting into the block-streaming dispatcher for Telegram (alongside competing open PR [#69022](https://github.com/openclaw/openclaw/pull/69022)).
*   **Telegram Health Monitoring**: Closed **PR [#37850](https://github.com/openclaw/openclaw/pull/37850)**, which ensures Telegram accurately reports `lastEventAt` to prevent false "stale-socket" restarts.

### Active Advancing PRs
*   **Security & Infrastructure**: **PR [#67509](https://github.com/openclaw/openclaw/pull/67509)** adds a root guard to the CLI to prevent state corruption on Linux DPs.
*   **New Provider Support**: **PR [#65275](https://github.com/openclaw/openclaw/pull/65275)** adds the PLaMo provider, and **PR [#69477](https://github.com/openclaw/openclaw/pull/69477)** defaults Moonshot to Kimi 2.6.
*   **Media Handling**: **PR [#69312](https://github.com/openclaw/openclaw/pull/69312)** and **PR [#69310](https://github.com/openclaw/openclaw/pull/69310)** fix silent media extraction failures and user feedback. **PR [#67634](https://github.com/openclaw/openclaw/pull/67634)** fixes crashes when sending images to text-only models via channel interfaces.

---

## 4. Community Hot Topics
The most actively discussed issues reveal strong community demand for cross-platform support, stable OAuth integrations, and better multi-platform routing.

*   **Cross-Platform Demand (Linux/Windows)**: The highest-commented issue remains **[#75](https://github.com/openclaw/openclaw/issues/75)** (87 comments, 👍 71), requesting native Linux and Windows ClawdBot apps equivalent to the macOS version. This remains a massive user demand.
*   **OAuth Token Instability**: **Issue [#26322](https://github.com/openclaw/openclaw/issues/26322)** (21 comments, 👍 15) highlights a race condition causing spurious failovers when multiple agents share a single OpenAI Codex OAuth profile. Relatedly, **Issue [#52037](https://github.com/openclaw/openclaw/issues/52037)** (11 comments) notes OAuth tokens aren't persisting to disk.
*   **Gateway Restarts & Crashes**: **Issue [#48205](https://github.com/openclaw/openclaw/issues/48205)** (21 comments) details severe gateway instability with automatic restarts every ~50 minutes.
*   **Sub-agent/Plugin Routing Errors**: **Issue [#64454](https://github.com/openclaw/openclaw/issues/64454)** (10 comments) highlights frustration with the Slack extension routing sub-agent replies to the main channel instead of threads.
*   **MCP Integration Request**: **Issue [#34097](https://github.com/openclaw/openclaw/issues/34097)** (6 comments, 👍 3) asks for native Model Context Protocol (MCP) server integration, reflecting a standard shift in how power users connect external tools to AI agents.

---

## 5. Bugs & Stability
A worrying number of severe **regressions** and **authentication** bugs have been reported or remain unresolved. Here are the most critical ranked by severity:

1.  **Gateway Crashes (Critical)**: **Issue [#48205](https://github.com/openclaw/openclaw/issues/48205)**: Unexplained periodic gateway restarts every ~50 minutes. *Status: Closed, likely addressed by recent Telegram transport PRs or daemon updates, but lack of clear resolution note is concerning.*
2.  **Auth/API Regressions (High)**:
    *   **Issue [#65603](https://github.com/openclaw/openclaw/issues/65603)**: Regression in v2026.4.11 breaks Azure Foundry GPT models (reasoning/tool calling rejected).
    *   **Issue [#34830](https://github.com/openclaw/openclaw/issues/34830)**: v2026.3.2 broke OpenRouter authentication with a generic 401 error.
    *   **Issue [#34656](https://github.com/openclaw/openclaw/issues/34656)**: Gateway restarts invalidate API keys, causing persistent 401 errors across all interfaces.
3.  **Looping & Lockups (High)**:
    *   **Issue [#37834](https://github.com/openclaw/openclaw/issues/37834)**: Session context corruption via orphaned `tool_use` ID causes a permanent 400 error loop, requiring manual session wipe.
    *   **Issue [#34574](https://github.com/openclaw/openclaw/issues/34574)**: `loopDetection` fails to catch repeated `exec` tool calls, potentially leading to infinite loops and token drain.
4.  **Data Loss & Indexing (Medium)**: **Issue [#44028](https://github.com/openclaw/openclaw/issues/44028)**: Session transcript data is silently dropped during a full reindex triggered by a `session-start`.

---

## 6. Feature Requests & Roadmap Signals
Based on highly upvoted issues and active PRs, the likely near-term roadmap focuses on:

*   **Expanded Provider Support**: PRs for **PLaMo** ([#65275](https://github.com/openclaw/openclaw/pull/65275)), **Kimi 2.6** ([#69477](https://github.com/openclaw/openclaw/pull/69477)), and **xAI TTS/Image** ([#68694](https://github.com/openclaw/openclaw/pull/68694)) indicate aggressive expansion of LLM provider options. Upcoming support for **GPT-5.4** is also highly anticipated but currently blocked ([#37623](https://github.com/openclaw/openclaw/issues/37623)).
*   **Advanced TTS & Voice**: **PR [#69321](https://github.com/openclaw/openclaw/pull/69321)** (Gemini TTS audio profiles) and **PR [#10356](https://github.com/openclaw/openclaw/pull/10356)** (Typecast emotion presets) show a strong push toward customizable voice agents.
*   **Observability**: **PR [#69463](https://github.com/openclaw/openclaw/pull/69463)** introduces configurable session tracing headers, showing focus on enterprise-grade debugging.
*   **Security**: **PR [#67509](https://github.com/openclaw/openclaw/pull/67509)** (Root guard) addresses critical state corruption.

---

## 7. User Feedback Summary
Real user comments reveal specific pain points and operational use cases:

*   **Deployment & Install Friction**: Several users report installation failures due to missing Git SSH keys for transitive dependencies (**Issue [#43419](https://github.com/openclaw/openclaw/issues/43419)**) and Docker workspace binding issues (**Issue [#31331](https://github.com/openclaw/openclaw/issues/31331)**). Users deploying on Digital Ocean or via Docker are hitting permissions/state corruption issues.
*   **Channel-Specific Quirks**:
    *   **Telegram**: Users are highly frustrated by socket leaks and duplicate messages. While fixes have been merged, users on older versions suffer.
    *   **Discord**: Timeout issues with basic commands (`/new`) degrade user experience (**Issue [#58602](https://github.com/openclaw/openclaw/issues/58602)**).
    *   **Feishu & Slack**: Sub-agent message routing is broken, revealing enterprise users are attempting complex multi-agent workflows.
*   **Windows/Native App Desire**: The massive following for **Issue [#75](https://github.com/openclaw/openclaw/issues/75)** proves a significant portion of the user base wants to move away from CLI/TUI deployments on Linux/Windows in favor of native desktop apps.

---

## 8. Backlog Watch
The following highly impactful items are aging and urgently require maintainer attention:

*   **Issue [#75](https://github.com/openclaw/openclaw/issues/75)** (Linux/Windows Apps): Open since Jan 2026 with 87 comments and 71 upvotes. Needs an official roadmap commitment.
*   **Issue [#37623](https://github.com/openclaw/openclaw/issues/37623)** (GPT-5.4 support): Users are trying to use GPT-5.4 via OpenAI but hitting runtime failures. Requires wiring up the new model capabilities.
*   **Issue [#52037](https://github.com/openclaw/openclaw/issues/52037)** (Codex OAuth persistence): Tokens failing to save to disk forces users to re-authenticate every few hours.
*   **Issue [#37834](https://github.com/openclaw/openclaw/issues/37834)** (Permanent 400 loop): Orphaned tool calls locking up sessions is a critical usability flaw that seems unresolved.
*   **PR [#68936](https://github.com/openclaw/openclaw/pull/68936)** (Autofix Pipeline) & **PR [#68808](https://github.com/openclaw/openclaw/pull/68808)** (Custom Web UI): Large community submissions that need maintainer architectural review before they grow stale.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from April 21, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is characterized by extreme velocity and rapid maturation. Projects are aggressively iterating to support an ever-expanding matrix of LLM providers, messaging platforms (Telegram, Slack, Discord), and complex tooling protocols like the Model Context Protocol (MCP). Development focus has clearly shifted from basic chatbot functionality to sophisticated multi-agent orchestration, autonomous task execution, and local-first self-hosted sovereignty. Meanwhile, the rapid integration of cutting-edge APIs (like OpenAI's `/responses` and GPT-5.4 capabilities) is driving a common set of growing pains, specifically concerning authentication failures, gateway instability, and context window management. 

## 2. Activity Comparison
*Health Score is calculated based on issue/PR velocity, maintainer responsiveness, and overall system stability (Grade A-E).*

| Project | Issues (24h) | Pull Requests (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (301 open) | 500 (332 open) | No Release | **B** (High burn rate, regressions piling up) |
| **CoPaw** | 42 (27 open) | 50 (34 merged) | `v1.1.3-beta.1` | **A** (High velocity, active QA) |
| **Moltis** | 9 (0 open) | 12 (12 merged) | `20260420.02` | **A+** (100% issue clearance, fast iteration) |
| **NanoBot** | 12 (4 open) | 53 (24 merged) | No Release | **A-** (High velocity, resolving core bugs) |
| **PicoClaw** | 13 (13 open) | 114 (8 merged) | `v0.2.6-nightly` | **C+** (Unstable nightlies, PR bottleneck) |
| **IronClaw** | 50 (N/A) | 50 (N/A) | Staging `v0.25.0` | **B+** (Active bug bashes, staging stabilization) |
| **LobsterAI** | 0 (0 open) | 28 (6 merged) | No Release | **A** (Targeted, high-quality merges) |
| **NanoClaw** | 0 (0 open) | 26 (8 merged) | No Release | **B** (Massive PR backlog, needs triage) |
| **EasyClaw** | 0 (0 open) | 0 (0 merged) | `v1.8.0` | **C** (Dormant public activity, closed dev) |
| **TinyClaw** | 0 (0 open) | 1 (1 merged) | No Release | **C-** (Resting phase, minimal activity) |
| **ZeptoClaw** | 0 (0 open) | 0 (0 merged) | No Release | **N/A** (Inactive) |

## 3. OpenClaw's Position
*   **Advantages:** OpenClaw remains the undeniable core reference implementation with the largest community footprint (500+ daily updates). Its breadth of channel integrations, advanced TTS/Voice capabilities, and cutting-edge provider support (GPT-5.4 readiness, Kimi 2.6) outpace the ecosystem.
*   **Technical Approach:** It operates as a highly extensible, sprawling monolith with a massive plugin/channel ecosystem. However, compared to peers like IronClaw (which is modularizing into bounded feature slices) or LobsterAI (focusing on bespoke enterprise desktop UI), OpenClaw relies heavily on community-contributed transports that introduce chronic lifecycle bugs (e.g., Telegram socket leaks).
*   **Community Size Comparison:** OpenClaw's community is orders of magnitude larger than peers, generating massive engagement (e.g., Issue #75 with 87 comments and 71 upvotes for native desktop apps). However, its size is currently a liability, as bug reports and PRs are vastly outpacing maintainer capacity, leading to dangerous regressions in authentication and session management.

## 4. Shared Technical Focus Areas
Several common requirements and friction points are emerging simultaneously across the ecosystem:
*   **MCP & Tooling Orchestration:** Standardizing external tool usage is a top priority. OpenClaw, NanoBot, IronClaw, and NanoClaw are all heavily implementing Model Context Protocol (MCP) routing, scoping, and SSE connectivity. 
*   **Context & Memory Lifecycle Management:** Preventing agents from crashing or looping due to context overflow is critical. NanoBot fixed context loss on `/stop`, IronClaw is struggling with 200k token overflow crashes, and CoPaw is rebuilding its long-term memory module.
*   **Multi-Channel Routing:** Projects are rapidly moving beyond basic web UIs. NanoBot, IronClaw, and CoPaw are actively fixing fragmented threading and routing bugs across Slack, Feishu, DingTalk, and Telegram.
*   **Security & Execution Sandboxing:** Preventing LLMs from leaking system secrets is a shared focus. PicoClaw is adding `exec` sanitization, Moltis is hardening Podman/BuildKit sandboxes, and CoPaw merged a shell evasion guardian.

## 5. Differentiation Analysis
*   **Target Audience & Deployment:** 
    *   **Enterprise/Commercial:** LobsterAI is tightly focused on enterprise integrations (DingTalk, Popo Cloud), Windows/macOS desktop apps, and strict UI polish. EasyClaw relies on isolated, private development cycles.
    *   **Local-First/Homelab Prosumers:** NanoClaw and PicoClaw are heavily optimized for edge hardware, self-hosted home lab setups (Home Assistant, Tailscale), and local LLMs (Ollama). 
    *   **Developer/Research:** NanoBot and IronClaw focus heavily on multi-agent orchestration, offering deep routing and sub-agent lifecycle management.
*   **Architectural Differences:** 
    *   **State Management:** NanoClaw and PicoClaw are leaning into agentic micro-services (HTTP ingress, async containers). 
    *   **Backend:** Moltis is defining itself with a "batteries-included" approach (bundling 101 default skills), whereas IronClaw and OpenClaw rely heavily on dynamic community plugins and complex skill stores.

## 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators (Moltis, CoPaw, NanoBot, IronClaw):** These projects are pushing high PR merge rates and actively triaging bugs. They are maturing quickly, currently stabilizing beta/staging branches ahead of major stable releases.
*   **Tier 2: The Scale Champion (OpenClaw):** Has immense momentum but is showing architectural growing pains. The community is highly engaged, but the lack of immediate maintainer bandwidth to clear the backlog is a strategic risk.
*   **Tier 3: Feature Accumulators (NanoClaw, PicoClaw):** Community PR velocity is outpacing maintainers. Both have massive open PR backlogs. PicoClaw is experiencing severe stability issues due to merging untested nightly features.
*   **Tier 4: Quiet/Dormant (TinyClaw, EasyClaw, ZeptoClaw):** Either resting, developing privately, or abandoned.

## 7. Trend Signals
*   **LLM Provider Fragmentation is a Major Pain Point:** AI agent developers are struggling to keep up with proprietary API schema changes. OpenAI's `/responses` API and strict tool-calling schemas are breaking HTTP clients across PicoClaw, OpenClaw, and CoPaw. *Value for devs: Invest heavily in resilient provider abstraction layers and retry mechanisms.*
*   **Desktop GUIs vs. Web UIs:** There is massive community demand for native desktop applications that escape the command line. OpenClaw (massive demand for Linux/Windows apps) and CoPaw (active MacOS/Windows builds) prove users want local, always-on assistants wrapped in native GUIs. 
*   **The Rise of the "Agentic Micro-Service":** AI agents are increasingly treated as backend services rather than simple chat bots. The integration of HTTP ingress endpoints (PicoClaw), CRON job management, and automated fallback models (NanoBot) indicate that developers expect highly available, autonomous background task execution.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-21

## 1. Today's Overview
NanoBot (HKUDS/nanobot) experienced a highly active day, with 53 pull requests and 12 issues updated within the last 24 hours. The project is currently in a phase of aggressive stability enhancements and architectural hardening, as evidenced by the closure of 24 PRs and resolution of 8 issues. Notably, there is a strong focus on fixing agent context management (especially during task cancellation), improving Model Context Protocol (MCP) integrations, and preventing unbounded memory growth. This sustained, high-volume community contribution indicates a healthy and rapidly maturing open-source ecosystem.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
Significant headway was made today in merging features and bug fixes, primarily focusing on agent loop stability, API provider compatibility, and MCP orchestration:
*   **Context Preservation on `/stop`:** A critical fix was merged ([PR #3299](https://github.com/HKUDS/nanobot/pull/3299)) to ensure that partial tool calls and context are no longer lost when a user cancels a task with `/stop`.
*   **Anthropic API Compatibility:** [PR #3297](https://github.com/HKUDS/nanobot/pull/3297) was merged to strip trailing assistant messages, resolving 400 errors with Anthropic's API.
*   **MCP Scoping & Media:** The team merged [PR #2424](https://github.com/HKUDS/nanobot/pull/2424), introducing `allowedChats` for granular, per-chat MCP server routing. Additionally, [PR #2416](https://github.com/HKUDS/nanobot/pull/2416) was merged to correctly handle base64 `ImageContent` from MCP tools.
*   **Sub-agent Orchestration:** [PR #2523](https://github.com/HKUDS/nanobot/pull/2523) was closed/merged, preventing the silent failure of MCP-dependent tasks delegated to subagents.

## 4. Community Hot Topics
The most actively discussed issues revolve around LLM provider errors and channel integration capabilities:
*   **Frequent LLM API Errors ([Issue #3143](https://github.com/HKUDS/nanobot/issues/3143)):** With 9 comments, users are experiencing high-frequency "illegal messages parameter" errors, particularly related to Feishu token consolidation. This highlights a need for better context-trimming logic before API calls.
*   **OpenWebUI Integration Request ([Issue #2389](https://github.com/HKUDS/nanobot/issues/2389)):** Users are actively discussing the possibility of adding OpenWebUI as an official channel, indicating a strong desire for self-hosted web UI alternatives alongside existing chat platforms.
*   **Agent Loop Profiling ([PR #3158](https://github.com/HKUDS/nanobot/pull/3158)) & Memory Bounding ([PR #3202](https://github.com/HKUDS/nanobot/pull/3202)):** Broad community discussions are ongoing regarding agent performance and out-of-memory risks, leading to detailed technical proposals.

## 5. Bugs & Stability
Several bugs were reported today, ranging from integration crashes to infinite loops:
1.  **Infinite `read_file` Loop ([Issue #3073](https://github.com/HKUDS/nanobot/issues/3073)):** *High Severity.* The agent enters an infinite loop when querying recent events, repetitively reading `history.jsonl`. No PR is linked yet, but it mirrors memory/cursor issues actively being addressed.
2.  **Windows MCP Integration Failure ([Issue #3324](https://github.com/HKUDS/nanobot/issues/3324)):** *Medium Severity.* A `WinError 193` occurs when starting the gateway with `chrome-devtools-mcp` on Windows. Labeled as a `good first issue`.
3.  **Cron Job Context Leakage ([Issue #3319](https://github.com/HKUDS/nanobot/issues/3319)):** *Medium Severity.* Cron jobs leak intermediate tool hints to user channels.
4.  **DeepSeek Deserialization Error ([Issue #3328](https://github.com/HKUDS/nanobot/issues/3328)):** *High Severity.* Users report a `failed to deserialize` error on Telegram after upgrading to `0.1.5.post1`.
5.  **Telegram Message Length Error ([Issue #3315](https://github.com/HKUDS/nanobot/issues/3315)):** *Low Severity.* Bot crashes when streaming excessively long messages instead of chunking them.

## 6. Feature Requests & Roadmap Signals
Today's issues and open PRs signal clear directions for upcoming versions:
*   **Human Takeover Mode ([Issue #3322](https://github.com/HKUDS/nanobot/issues/3322)):** A highly requested feature for customer-service use cases, allowing users to pause the bot via `/bot on` or `/bot off` to speak directly to a human.
*   **MCP Root-Level Notifications ([Issue #3326](https://github.com/HKUDS/nanobot/issues/3326)):** Request for supporting proactive scheduled reminders via MCP.
*   **Sub-agent Management Tools:** Two open PRs ([PR #3303](https://github.com/HKUDS/nanobot/pull/3303) and [PR #3223](https://github.com/HKUDS/nanobot/pull/3223)) introduce `spawn_status` and `spawn_cancel` tools, which will drastically improve real-time multi-agent orchestration.
*   **Fallback Models ([PR #2417](https://github.com/HKUDS/nanobot/pull/2417)):** Closed today, this introduces automatic failover to secondary LLMs during rate limits (429/500 errors).

## 7. User Feedback Summary
Users are heavily utilizing NanoBot for multi-platform deployments (Telegram, WhatsApp, Feishu, QQ) paired with diverse LLMs (Gemini, Anthropic, DeepSeek). The main pain points stem from provider-specific payload rejections (e.g., Gemini API key handling in [Issue #3206](https://github.com/HKUDS/nanobot/issues/3206)) and the bot's inability to gracefully handle long-running tasks or large text outputs. There is notable satisfaction with the MCP integration roadmap, but users require better edge-case handling (e.g., Windows compatibility and non-integer cursor corruption as seen in [PR #3340](https://github.com/HKUDS/nanobot/pull/3340)).

## 8. Backlog Watch
*   **Open PR Overload:** There are 29 open PRs, with several complex architectural improvements awaiting maintainer review, such as the memory bounding fix ([PR #3202](https://github.com/HKUDS/nanobot/pull/3202)) and WebSocket lifecycle enhancements ([PR #3286](https://github.com/HKUDS/nanobot/pull/3286)).
*   **Duplicate `/stop` PRs:** There are currently multiple PRs attempting to solve the context-loss issue on `/stop` ([PR #3299](https://github.com/HKUDS/nanobot/pull/3299) merged, but [PR #2526](https://github.com/HKUDS/nanobot/pull/2526) remains open). Maintainers should close the latter to avoid confusion.
*   **QQ Streaming Limitations ([Issue #3333](https://github.com/HKUDS/nanobot/issues/3333)):** A user inquiry regarding non-streaming support for QQ bots and the risk of account bans requires official maintainer clarification.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-21

## 1. Today's Overview
The PicoClaw project is experiencing very high development velocity, characterized by a massive pipeline of **106 open Pull Requests** being actively iterated on, alongside **13 updated Issues**. The maintainers continue to push boundary changes, as evidenced by the release of the `v0.2.6-nightly.20260420` build. However, the transition to v0.2.6 appears to have introduced significant regressions, particularly surrounding authentication flows, provider configurations, and gateway stability. While the contributor base is highly active in building out next-generation features, users should exercise caution with the current nightly builds due to breaking bugs in core API integrations.

## 2. Releases
*   **nightly: v0.2.6-nightly.20260420.6126ede9**
    *   **Details:** Automated nightly build.
    *   **Warning:** Marked as potentially unstable. The diff from `v0.2.6` to `main` includes heavy modifications to providers and configuration handling. Users upgrading from stable versions (e.g., v0.2.4) to this nightly are experiencing broken WebUIs and gateway launch failures.

## 3. Project Progress
Out of 114 PRs updated in the last 24 hours, **8 were merged/closed**, indicating active code review and merging by maintainers. Key advancements include:
*   **Provider Enhancements:** Significant work is being poured into the `openai_compat` provider to support the new OpenAI `/responses` API (PR [#1229](https://github.com/sipeed/picoclaw/pull/1229)) while adding much-needed resilience via retryable HTTP clients (PR [#1342](https://github.com/sipeed/picoclaw/pull/1342)).
*   **Channel Expansions:** Channel maturity is advancing, notably with the refactoring of the LINE integration to use the official SDK v8 (PR [#2413](https://github.com/sipeed/picoclaw/pull/2413), closing out older PR [#500](https://github.com/sipeed/picoclaw/pull/500)), and the introduction of MQTT health checks (PR [#1706](https://github.com/sipeed/picoclaw/pull/1706)).
*   **Security & Agent Stability:** A major structural PR (PR [#2313](https://github.com/sipeed/picoclaw/pull/2313)) introduces multi-user support and "Agent Shield" hardening. Additionally, environment sanitization for the `exec` tool (PR [#1261](https://github.com/sipeed/picoclaw/pull/1261)) is advancing to prevent LLMs from leaking system secrets.

## 4. Community Hot Topics
*   **Critical Auth Breakage (Issue [#2578](https://github.com/sipeed/picoclaw/issues/2578)):** With 11 comments, this is the most actively discussed issue. Users are discovering that the `openai_compat` provider silently drops the API key, failing to send the `Authorization` header. This explains why multiple users are suddenly facing 401 errors across various providers (like DeepSeek in Issue [#2584](https://github.com/sipeed/picoclaw/issues/2584)).
*   **Model Configuration UI Bug (Issue [#2368](https://github.com/sipeed/picoclaw/issues/2368)):** Android users report that models configured via the web interface permanently show as "not configured" in the app. This highlights underlying state-management or API synchronization issues between the frontend and backend.

## 5. Bugs & Stability
The current nightly build suffers from several high-severity bugs that break core functionality:
*   **P0 - Complete Auth Failure:** Issue [#2578](https://github.com/sipeed/picoclaw/issues/2578) (API keys dropped globally). *No dedicated fix PR submitted yet.*
*   **P0 - Gateway Crash on Startup:** Issue [#2597](https://github.com/sipeed/picoclaw/issues/2597) & [#2513](https://github.com/sipeed/picoclaw/issues/2513). Gateway refuses to start if model identifiers contain uppercase letters or specific configurations are met. Issue [#2597](https://github.com/sipeed/picoclaw/issues/2597) was quickly closed, presumably fixed in a subsequent commit.
*   **P1 - MCP Tool Calls Failing:** Issue [#2600](https://github.com/sipeed/picoclaw/issues/2600) reports MCP arguments being sent as `null` instead of being omitted, breaking external tool integrations.
*   **P1 - WebUI Regression:** Issue [#2598](https://github.com/sipeed/picoclaw/issues/2598) reports that upgrading from v0.2.4 to v0.2.6 completely breaks the Web UI.

## 6. Feature Requests & Roadmap Signals
*   **Native Email Channel (Issue [#2421](https://github.com/sipeed/picoclaw/issues/2421)):** A strong request to add email as a native channel for enterprise/corporate users.
*   **Affine Workspace Integration (PR [#1124](https://github.com/sipeed/picoclaw/pull/1124)):** Upcoming capability for PicoClaw to perform semantic and keyword searches on Affine documents.
*   **Async HTTP Ingress (PR [#1657](https://github.com/sipeed/picoclaw/pull/1657)):** The addition of `POST /pico/message` will allow external systems to trigger the agent via simple HTTP requests, moving PicoClaw toward an agentic micro-service architecture.
*   *Prediction:* The next version will likely focus heavily on stabilizing the OpenAI Responses API migration and tightening agent security.

## 7. User Feedback Summary
Users are actively testing PicoClaw on diverse hardware, including Raspberry Pi Zero W (Issue [#1757](https://github.com/sipeed/picoclaw/issues/1757)) and ARM64 servers. The feedback reveals widespread frustration with **configuration management** in the v0.2.6 upgrade—users report that valid configurations for third-party providers (Neometron, Gemini) are suddenly failing or overriding user defaults (PR [#957](https://github.com/sipeed/picoclaw/pull/957)). Furthermore, internationalization remains a pain point, with users noting stubborn Chinese text in the English UI (Issue [#2367](https://github.com/sipeed/picoclaw/issues/2367)).

## 8. Backlog Watch
*   **Stale Security Fix (PR [#957](https://github.com/sipeed/picoclaw/pull/957)):** Open since early March, this PR fixes a critical issue where user configurations are overridden by default models. It needs maintainer review to prevent recurring 401 errors.
*   **Cron/Scheduled Tasks (Issue [#1757](https://github.com/sipeed/picoclaw/issues/1757)):** Open since mid-March, users relying on PicoClaw for scheduled tasks (e.g., hourly monitoring) are hitting persistent channel errors.
*   **Built-in Skills Install (PR [#1365](https://github.com/sipeed/picoclaw/pull/1365)):** Open since March 11, this fixes global installations failing due to CWD path assumptions. Given the push toward tool-calling and MCP, fixing the foundational skill installation layer should be a priority.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-21

A daily analyst briefing on the NanoClaw (github.com/qwibitai/nanoclaw) open-source AI agent/personal assistant project.

## 1. Today's Overview
NanoClaw is currently experiencing a high-velocity development phase, characterized by a massive 26 pull requests seeing activity today. The contributor base remains highly engaged in expanding the platform's channel support and third-party integrations, with a heavy focus on local-first and self-hosted AI tooling. Currently, project velocity is heavily outpacing maintainer review capacity, as evidenced by 18 open PRs (many introducing major new integrations) compared to only 8 merged or closed. With no new software releases issued today and several critical bugs being identified in configuration and channel routing, the project appears to be in an active feature-accumulation phase ahead of a future stabilization milestone.

## 2. Releases
*No new releases were cut today.*

## 3. Project Progress
Maintainers and contributors closed 8 PRs today, making solid progress on architectural refactoring, v2 migration, and developer experience:
*   **V1 to V2 Migration Progress:** [PR #1869](https://github.com/qwibitai/nanoclaw/pull/1869) landed 5 implementation items from the v1-vs-v2 action-items doc, including dead config deletion and timezone recreation.
*   **Channel Routing Refactor:** [PR #1877](https://github.com/qwibitai/nanoclaw/pull/1877) was merged, moving the engagement policy to the router and introducing an owner-approval flow for unknown channels.
*   **New Provider Support:** Support for the Codex provider via app-server JSON-RPC was closed/landed in [PR #1843](https://github.com/qwibitai/nanoclaw/pull/1843), expanding NanoClaw's agent backend capabilities. 
*   **Self-hosted Infrastructure:** Work advanced on native credential proxying for Unraid template variable injection ([PR #1727](https://github.com/qwibitai/nanoclaw/pull/1727)) and local Ollama provider integration ([PR #1859](https://github.com/qwibitai/nanoclaw/pull/1859)).
*   **Developer Experience:** Maintainers merged fixes to ignore `.env*` variants ([PR #1873](https://github.com/qwibitai/nanoclaw/pull/1873)) and pinned OpenCode SDK/CLI to version 1.4.17 ([PR #1864](https://github.com/qwibitai/nanoclaw/pull/1864)) to prevent breaking session API changes.

## 4. Community Hot Topics
The community is highly focused on sovereignty, local processing, and expanding messaging channels. 
*   **Local-First AI Processing:** [PR #1876](https://github.com/qwibitai/nanoclaw/pull/1876) (add-voice-transcription-free-whisper) and [PR #1875](https://github.com/qwibitai/nanoclaw/pull/1875) (add Signal channel v2) highlight a strong community drive for self-hosted, zero-cost, and end-to-end encrypted (E2EE) integrations.
*   **Self-Hosted Home Lab Integrations:** Several complex, high-effort PRs are seeing sustained activity, specifically the Home Assistant MCP integration ([PR #1327](https://github.com/qwibitai/nanoclaw/pull/1327)) and the Tailscale API integration ([PR #1260](https://github.com/qwibitai/nanoclaw/pull/1260)). This indicates NanoClaw is finding strong product-market fit among homelab enthusiasts and prosumers.

## 5. Bugs & Stability
Today's reports highlight configuration and onboarding friction as the primary stability risks:
*   **Medium Severity - Branding/Config Failure:** [Issue #1870](https://github.com/qwibitai/nanoclaw/issues/1870) reports that `ASSISTANT_NAME` does not propagate correctly to channel skill groups, leaving the bot stuck with the default name "Andy." *No fix PR is currently attached.*
*   **Low Severity - Onboarding Error Messages:** [PR #1817](https://github.com/qwibitai/nanoclaw/pull/1817) addresses a frustrating issue where incorrect mount paths during `/setup` give vague error messages. A fix is currently open and awaiting review.
*   **Low Severity - State Corruption:** [PR #1290](https://github.com/qwibitai/nanoclaw/pull/1290) highlights that starting NanoClaw without credentials creates stale, partially-constructed state in the data volume. A pre-flight validation check is currently open.

## 6. Feature Requests & Roadmap Signals
The open issue and PR tab provides clear signals on what the next version of NanoClaw will look like:
*   **Advanced Container Env Vars:** [Issue #1867](https://github.com/qwibitai/nanoclaw/issues/1867) requests an `env` field in `ContainerConfig` so external services (like self-hosted task managers) can easily receive API keys. Expect this to be prioritized given the recent focus on credential injection.
*   **Expanding the Tool Ecosystem:** [PR #1872](https://github.com/qwibitai/nanoclaw/pull/1872) introduces a YouTube history tool bypassing API limitations via local browser cookie authentication. 
*   **Code Quality Gate:** [PR #1874](https://github.com/qwibitai/nanoclaw/pull/1874) proposes adding pre-commit hooks (Prettier, ESLint, TypeCheck, Vitest). *Prediction: Merging this PR will likely be a prerequisite before the maintainers attempt to merge the massive backlog of open integration PRs.*

## 7. User Feedback Summary
**Pain Points:** Users are experiencing friction during initial setup, particularly around mount path validation and environment variables not propagating correctly into containers or group configurations. The lack of fast-fail mechanisms for missing credentials leads to confusing initial states.
**Use Cases:** NanoClaw is overwhelmingly being used as a centralized, self-hosted AI brain for smart homes (Home Assistant, Unraid) and private networking (Tailscale, Matrix, Signal). Users strongly prefer local models (Ollama) and local transcription (Whisper) over paid cloud APIs.
**Sentiment:** Extremely positive and highly technical. The community is actively building complex integrations rather than just requesting them, showing a high level of investment and satisfaction with the core architecture.

## 8. Backlog Watch
The project currently has a massive backlog of high-value PRs needing maintainer attention:
*   **Stale Integration PRs:** Core homelab features like the Matrix E2EE channel ([PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624)) and the Vikunja task management skill ([PR #1742](https://github.com/qwibitai/nanoclaw/pull/1742)) have been open for weeks without decision.
*   **Database Fixes Needing Eyes:** The ISO 8601 timestamp normalization fix ([PR #1845](https://github.com/qwibitai/nanoclaw/pull/1845)) and the read-only `.claude.json` EROFS crash fix ([PR #1090](https://github.com/qwibitai/nanoclaw/pull/1090)) are vital for long-term stability but remain unmerged. *Recommendation: Maintainers should prioritize a stabilization sprint to clear the 18 open PRs before accepting new feature requests.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-21

## 1. Today's Overview
The IronClaw project is experiencing **high activity**, driven largely by an intense, coordinated QA bug bash over the weekend (April 20). With 50 issues and 50 pull requests updated in the last 24 hours, maintainers and contributors are deeply engaged in stabilizing the platform's v0.25.0 staging branch. The focus is heavily skewed toward hardening Engine V2, refining multi-channel integrations (Telegram, Slack), and fortifying the web gateway. No new version was released today, but significant foundational PRs—ranging from user secrets management to mission failure handling—indicate that a stabilization release is actively being prepared.

## 2. Releases
No new releases were published today. The environment remains on version **v0.25.0 (staging)**.

## 3. Project Progress
Merged and closed pull requests today reflect a strong push toward UI polish, error handling, and test stability. Key advancements include:
*   **Error Sanitization:** [PR #2747](https://github.com/nearai/ironclaw/pull/2747) (merged) introduced a classifier to map raw orchestrator errors into user-safe messages, fixing a major pain point where internal Python tracebacks were shown to users.
*   **Chat UX Improvements:** [PR #2632](https://github.com/nearai/ironclaw/pull/2632) (merged) fixed an annoying behavior where external (Telegram/Slack) threads would accidentally hijack the browser's active chat view.
*   **Stabilization:** [PR #2744](https://github.com/nearai/ironclaw/pull/2744) cleared a massive testing backlog, bringing 12 failing Rust tests and 14 failing Playwright E2E tests to a 100% pass rate.
*   **Upcoming Features in Review:** Several massive structural PRs were opened and are actively under review, notably [PR #2754](https://github.com/nearai/ironclaw/pull/2754) for self-service user secrets management, and [PR #2728](https://github.com/nearai/ironclaw/pull/2728) which adds a migration CLI for OpenClaw and Hermes users.

## 4. Community Hot Topics
The most active discussions center around **OAuth integrations, multi-channel context, and Engine V2 architecture**:
*   **Google Sheets OAuth Block ([Issue #2229](https://github.com/nearai/ironclaw/issues/2229) - 10 comments):** Users and QA are actively debugging a persistent `Error 400 invalid_request` during Google Sheets authorization. This highlights the fragility of current extension OAuth flows.
*   **WASM Credential Injection Failure ([Issue #1537](https://github.com/nearai/ironclaw/issues/1537) - 4 comments):** A critical architectural discussion about secrets being stored securely in TEE but failing to inject into WASM tools at runtime.
*   **Engine V2 Roadmap ([Issue #2721](https://github.com/nearai/ironclaw/issues/2721) - 2 comments, 1 👍):** Core contributors are discussing the shift from a single CodeAct path to a multi-route execution model. This signals a massive upcoming performance improvement for simple tasks.
*   **Gateway Architecture ([Issue #2599](https://github.com/nearai/ironclaw/issues/2599) - 2 comments, 1 👍):** A proposed epic to refactor the web gateway into bounded feature slices with CI guardrails, showing the team is prioritizing long-term maintainability.

## 5. Bugs & Stability
The weekend QA bug bash uncovered several P1/P2 bugs in the staging environment:
1.  **[P1] Telegram Threading Fragmentation ([Issue #2731](https://github.com/nearai/ironclaw/issues/2731)):** Telegram messages render as separate Engine conversations instead of a unified thread. *Fix status: Under investigation.*
2.  **[P1] Internal Chain-of-Thought Leaks ([Issue #2581](https://github.com/nearai/ironclaw/issues/2581)):** The agent exposes its internal reasoning/traces instead of the final formatted response. *Fix status: Likely resolved by merged [PR #2747](https://github.com/nearai/ironclaw/pull/2747) and open [PR #2757](https://github.com/nearai/ironclaw/pull/2757) (stripping `[Called tool...]` markers).*
3.  **[P1] Runaway Mission Threads ([Issue #2736](https://github.com/nearai/ironclaw/issues/2736)):** Failed missions continuously spawn new threads, inflating the dashboard count. *Fix status: Addressed in open [PR #2760](https://github.com/nearai/ironclaw/pull/2760).*
4.  **[P1] Broken Image Uploads ([Issue #2737](https://github.com/nearai/ironclaw/issues/2737)):** UI file selection fails to trigger an action. *Fix status: Fixed in open [PR #2759](https://github.com/nearai/ironclaw/pull/2759) via delegated event handlers.*
5.  **[High] Database Setup Errors ([Issue #2752](https://github.com/nearai/ironclaw/issues/2752)):** `ironclaw onboard` throws a DB error at the provider step. *Fix status: Unaddressed, likely needs immediate attention.*

## 6. Feature Requests & Roadmap Signals
*   **Multi-Channel Tool Routing:** [PR #1378](https://github.com/nearai/ironclaw/pull/1378) introduces JSON-configurable filtering for MCP servers/tools based on the incoming channel (e.g., restricting research tools to the web UI, basic tools to Slack).
*   **User-Facing Secrets Management:** [PR #2754](https://github.com/nearai/ironclaw/pull/2754) adds a self-service UI and `/api/secrets` endpoint for users to manage their own API keys securely.
*   **Third-Party Provider Expansion:** [PR #1446](https://github.com/nearai/ironclaw/pull/1446) introduces an `AliyunProvider` for users targeting Aliyun BaiLian Coding Plan, signaling an intent to capture a broader international cloud market.
*   *Prediction for Next Release:* The next version will likely focus heavily on Engine V2 routing improvements, closed-system fixes for WASM secrets, and a much-needed unification of the OAuth experience.

## 7. User Feedback Summary
Users are excited about the multi-channel capabilities (Telegram, Slack) but are currently experiencing friction in day-to-day usability. 
*   **Pain Points:** Users are frustrated by having to re-authenticate or reconnect tools frequently (e.g., [Issue #1595](https://github.com/nearai/ironclaw/issues/1595) - LLM forgets Telegram is active). The visibility of raw JSON, UUIDs ([Issue #2700](https://github.com/nearai/ironclaw/pull/2700)), and internal system files ([Issue #2584](https://github.com/nearai/ironclaw/issues/2584)) makes the UI feel unpolished.
*   **Satisfaction:** There is strong approval (thumbs up) for structural initiatives like Gateway feature slicing ([Issue #2599](https://github.com/nearai/ironclaw/issues/2599)). Community contributors are actively submitting substantial features, indicating a healthy, engaged open-source ecosystem.

## 8. Backlog Watch
*   **Slack App Marketplace Presence ([Issue #1997](https://github.com/nearai/ironclaw/issues/1997)):** Users currently have to create their own Slack app to use IronClaw. This has been open since early April and remains a barrier to entry for enterprise/slack-heavy teams.
*   **Context Length Overflow ([Issue #2408](https://github.com/nearai/ironclaw/issues/2408)):** Long conversations crash the agent when they exceed the 200K token limit. This is a fundamental LLM limitation that needs an automated context management solution.
*   **LLM Provider Instability ([Issue #1994](https://github.com/nearai/ironclaw/issues/1994)):** Repeated 502 Bad Gateway errors from the default `nearai_chat` provider. This deeply hurts user trust and requires a fallback or retry mechanism.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the provided GitHub data for 2026-04-21.

## 1. Today's Overview
LobsterAI experienced a highly active development day with a strong focus on stability, UI enhancements, and core bug fixes. The project merged 28 pull requests, significantly outweighing the 22 currently open, indicating rapid iteration and active maintainer engagement. Key areas of focus included improving the auto-update mechanism, hardening SQLite database integrity, and refining the OpenClaw runtime integration. While community engagement measured by comments is currently low, the maintainers are clearly executing on a targeted roadmap to improve user experience and platform reliability. 

## 2. Releases
No new official releases were published today.

## 3. Project Progress
A substantial amount of code was merged today, advancing several key features and resolving critical integration issues:
*   **Data Integrity & Reliability:** Added automatic backup and recovery for SQLite ([PR #1752](https://github.com/netease-youdao/LobsterAI/pull/1752)) to prevent data loss from corruption.
*   **Update Mechanism Fix:** Separated the manual update flow from background auto-predownloads, allowing users to review update info before explicitly starting a download ([PR #1754](https://github.com/netease-youdao/LobsterAI/pull/1754)).
*   **Agent Avatars:** Implemented support for image avatars alongside traditional emojis, allowing for better agent personalization ([PR #1760](https://github.com/netease-youdao/LobsterAI/pull/1760)).
*   **Windows Installer:** Fixed an issue where user-created skills were being wiped during Windows overlay upgrades ([PR #1759](https://github.com/netease-youdao/LobsterAI/pull/1759)).
*   **OpenClaw & DingTalk Integration:** Fixed `OPENCLAW_HOME` path misalignment ([PR #1758](https://github.com/netease-youdao/LobsterAI/pull/1758)), resolved DingTalk agent binding configurations ([PR #1757](https://github.com/netease-youdao/LobsterAI/pull/1757)), and disabled the confusing built-in `mcporter` skill ([PR #1755](https://github.com/netease-youdao/LobsterAI/pull/1755)).

## 4. Community Hot Topics
While today's issues and PRs did not generate a high volume of comments, active development is heavily influenced by community needs, particularly regarding messaging integrations and UI improvements.
*   **UI Enhancements:** Active open PRs aim to improve the user waiting experience by adding skeleton loaders for cowork initialization ([PR #1769](https://github.com/netease-youdao/LobsterAI/pull/1769)) and enhancing empty states for skills and task history ([PR #1770](https://github.com/netease-youdao/LobsterAI/pull/1770)).
*   **Agent Personalization:** A long-standing feature request to add agent persona presets (e.g., technical expert, virtual companion) is seeing renewed activity ([PR #544](https://github.com/netease-youdao/LobsterAI/pull/544)), highlighting the community's desire for customizable AI behaviors.

## 5. Bugs & Stability
Several impactful bugs were identified and immediately resolved today:
*   **[Critical] Crawler Task Runaway:** A bug where stopping a crawler session (e.g., movie/music search) didn't actually halt the process was identified. A root cause in the `openclawRuntimeAdapter` was found, and a fix is currently under review ([PR #1756](https://github.com/netease-youdao/LobsterAI/pull/1756)).
*   **[High] Scheduled Task Copywriting Error:** Users reported incorrect notification text when triggering scheduled tasks ([Issue #1751](https://github.com/netease-youdao/LobsterAI/issues/1751)). *No fix PR is linked yet.*
*   **[High] Exec-Approvals Path Mismatch:** OpenClaw was resolving paths to a nonexistent vendor directory. This was fixed by correctly aligning `OPENCLAW_HOME` ([PR #1758](https://github.com/netease-youdao/LobsterAI/pull/1758)).
*   **[Medium] Windows Upgrade Data Loss:** The Windows installer was deleting user-created skills during upgrades. This has been fixed by deferring directory deletion ([PR #1759](https://github.com/netease-youdao/LobsterAI/pull/1759)).

## 6. Feature Requests & Roadmap Signals
Today's merged PRs and active branches provide clear signals about the project's near-term roadmap:
*   **QR Code Integrations:** Support for DingTalk QR code scanning for one-step bot configuration ([PR #1761](https://github.com/netease-youdao/LobsterAI/pull/1761)) indicates a push toward frictionless mobile-to-desktop enterprise integrations.
*   **Enterprise Document Context:** Work is actively progressing on supporting Popo cloud documents and group chat history ingestion ([PR #1762](https://github.com/netease-youdao/LobsterAI/pull/1762)), signaling a strong focus on enterprise knowledge management.
*   **Major Dependency Bumps:** LobsterAI is preparing for the future, with open PRs to bump core frontend dependencies, including React 18 to React 19.2.5 ([PR #1764](https://github.com/netease-youdao/LobsterAI/pull/1764)) and Vite 5 to Vite 8 ([PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766)).

## 7. User Feedback Summary
User feedback today highlights friction in localized messaging integrations and task management. The core pain point expressed by users revolved around inaccurate UI text in notifications ([Issue #1751](https://github.com/netease-youdao/LobsterAI/issues/1751)), showing that users are actively utilizing the app for localized, scheduled reminders. Additionally, the bug report regarding runaway crawler tasks ([PR #1756](https://github.com/netease-youdao/LobsterAI/pull/1756)) indicates that users are heavily relying on the platform's automated data retrieval tools, and expect robust cancellation/lifecycle management for background processes.

## 8. Backlog Watch
Maintainers should review the following long-standing or newly submitted items requiring attention:
*   **[Stale PR] Agent Persona Feature:** PR #544 has been active since March 20. Given today's merged avatar customization feature, this PR should be prioritized for review as it aligns with the current theme of agent personalization.
*   **[Dependency Upgrade Blockers]** Maintainers need to review and resolve the major dependency upgrades currently sitting as open PRs. Specifically, migrating to React 19 ([PR #1764](https://github.com/netese-youdao/LobsterAI/pull/1764)) and Vite 8 ([PR #1766](https://github.com/netese-youdao/LobsterAI/pull/1766)) are critical for security and performance but carry high regression risks.
*   **[New Issue] Notification Text Bug:** Issue #1751 regarding scheduled task texts needs triage and assignment.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

Here is the structured project digest for TinyClaw based on the provided data for 2026-04-21.

### 1. Today's Overview
The TinyClaw project experienced a very low-activity day on April 21, 2026, with zero new issues opened and zero new releases published. However, maintainers did close one pull request related to a configuration bug, indicating ongoing background maintenance. The overall project momentum appears to be in a resting or planning phase, with a primary focus on minor bug fixes rather than the introduction of new features. Project health remains stable but quiet.

### 2. Releases
No new releases were recorded today.

### 3. Project Progress
Progress today was limited to the closure of a single configuration-related pull request:
*   **[CLOSED] [fix(heartbeat): honor top-level heartbeat.enabled=false setting (#276)](https://github.com/TinyAGI/tinyagi/pull/276)**: Authored by `ZVNC28`, this PR addresses a bug where the application ignored the top-level `heartbeat.enabled` flag in `settings.json`. Previously, the system only respected this setting at the per-agent level, forcing the `startHeartbeat()` function to run unconditionally. Closing this PR marks a step forward in refining configuration hierarchy and system resource management.

### 4. Community Hot Topics
There are no hot topics or active community discussions to report today. The tracked issue and PR boards contained zero active items with comments or reactions within the last 24 hours. 

### 5. Bugs & Stability
*   **Severity: Low (Misconfiguration/Unwanted Process Execution)**
    *   **Details:** PR [#276](https://github.com/TinyAGI/tinyagi/pull/276) highlighted a bug where background heartbeat processes were running unconditionally, even if a user explicitly disabled them in the main `settings.json` file. While not a crash-causing bug, it represents an unnecessary consumption of system resources and a breach of user configuration expectations. 
    *   **Status:** A fix has been reviewed and the PR has been closed.

### 6. Feature Requests & Roadmap Signals
Based on today's data, there are no new feature requests or clear roadmap signals. The only signal from the closed PR suggests that the immediate roadmap is focused on configuration consolidation and ensuring global settings properly cascade down to agent-level processes.

### 7. User Feedback Summary
Direct user feedback is minimal today. However, the existence of PR [#276](https://github.com/TinyAGI/tinyagi/pull/276) implies an underlying user pain point: users attempting to globally disable the heartbeat feature to save resources or reduce network noise were frustrated to find the setting had no effect at the top level. The closure of this PR addresses this specific dissatisfaction.

### 8. Backlog Watch
With zero new issues created today and no open issues currently being updated, the active backlog is empty. Maintainers should continue to monitor for any regressions related to the recently closed heartbeat configuration fix to ensure the new logic properly disables the background tasks without throwing unhandled errors.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-21

## 1. Today's Overview
Project activity for Moltis on April 21, 2026, indicates a highly active and exceptionally healthy project state, likely in the immediate aftermath of a significant feature release. In the last 24 hours, maintainers merged a remarkable 12 pull requests while completely clearing the 9 active issue tickets. Development heavily focused on expanding LLM provider support (specifically Moonshot and Google models), hardening sandbox environments (Podman/BuildKit), and patching channel integrations (Slack, MCP). With documentation also receiving massive automated updates, the project demonstrates strong momentum and responsive, high-output maintainer engagement.

## 2. Releases
- **20260420.02**: Released on April 20, 2026. This build consolidates the massive influx of merged PRs from the last 24 hours. While detailed release notes are succinct, the underlying changes represent major functional expansions, including new model integrations, overhauled markdown rendering, and critical stability patches for containerized environments.

## 3. Project Progress
A staggering **12 PRs were merged**, signaling rapid feature development and active bug stomping:
*   **LLM Providers:** Added support for the new **Kimi K2.6 model** ([PR #809](https://github.com/moltis-org/moltis/pull/809)), disabled strict tool schemas for Fireworks Kimi router to fix 400 errors ([PR #812](https://github.com/moltis-org/moltis/pull/812)), and implemented Gemini `thought_signature` round-tripping to fix persistent Google model function call errors ([PR #795](https://github.com/moltis-org/moltis/pull/795)).
*   **Sandbox & Tooling:** Addressed critical Podman issues by verifying images in the store after BuildKit builds ([PR #811](https://github.com/moltis-org/moltis/pull/811)) and upgrading sandbox environments to Node.js 22 LTS ([PR #807](https://github.com/moltis-org/moltis/pull/807)).
*   **Channel Integrations:** Fixed Slack slash commands failing with "unknown command" ([PR #804](https://github.com/moltis-org/moltis/pull/804)) and implemented legacy SSE transport for MCP server discovery ([PR #805](https://github.com/moltis-org/moltis/pull/805)). 
*   **UI & Core Logic:** Replaced the regex markdown renderer with the `marked` library for proper HTML rendering in the web UI ([PR #808](https://github.com/moltis-org/moltis/pull/808)), centralized the command registry across all channels ([PR #794](https://github.com/moltis-org/moltis/pull/794)), and merged a massive self-improving agent loop for skills and memory lifecycle ([PR #803](https://github.com/moltis-org/moltis/pull/803)).
*   **Skills:** Bundled 101 default skills directly into the binary with UI formatting fallbacks ([PR #797](https://github.com/moltis-org/moltis/pull/797)).

## 4. Community Hot Topics
*   **Multi-agent Architecture & Memory ([Issue #769](https://github.com/moltis-org/moltis/issues/769)):** With 5 comments, this documentation request highlights user confusion regarding how the heartbeat/cron system interacts with session history across multiple agent contexts (`agents/<id>/`). This shows a growing user base deploying complex, multi-agent setups and needing clearer best practices for context sharing.
*   **Google AI Function Calling Stability ([Issue #375](https://github.com/moltis-org/moltis/issues/375)):** With 3 thumbs-up, this older bug regarding Google models missing `thought_signature` in function calls resonated heavily with users. It was officially closed today following the merge of [PR #795](https://github.com/moltis-org/moltis/pull/795).

## 5. Bugs & Stability
Several user-reported bugs were swiftly closed today, indicating maintainers are actively triaging regressions:
1.  **Sandbox/Container Breakage (High):** Users on rootless Podman reported sandbox images failing to export to the Podman store after a BuildKit build ([Issue #796](https://github.com/moltis-org/moltis/issues/796)). *Fixed by [PR #811](https://github.com/moltis-org/moltis/pull/811).*
2.  **LLM Provider HTTP 400 Errors (Medium):** Multiple users hitting 400 errors: using Fireworks Fire Pass / Kimi K2.5 Turbo ([Issue #810](https://github.com/moltis-org/moltis/issues/810)) and OpenRouter + Google AI Studio ([Issue #793](https://github.com/moltis-org/moltis/issues/793)). *Fixed by [PR #812](https://github.com/moltis-org/moltis/pull/812) and [PR #795](https://github.com/moltis-org/moltis/pull/795).*
3.  **Integration Command Parsing (Medium):** Slack integration failing to parse slash commands correctly, returning "unknown command" ([Issue #798](https://github.com/moltis-org/moltis/issues/798)). *Fixed by [PR #804](https://github.com/moltis-org/moltis/pull/804).*
4.  **Legacy MCP Connectivity (Medium):** Users unable to add SSE MCP endpoints ([Issue #278](https://github.com/moltis-org/moltis/issues/278)). *Fixed by [PR #805](https://github.com/moltis-org/moltis/pull/805).*

## 6. Feature Requests & Roadmap Signals
*   **Operation Aborts & Fallbacks:** A feature request was closed asking for the ability to "abort" current AI generations from Telegram, alongside fallback model support ([Issue #788](https://github.com/moltis-org/moltis/issues/788)). The closure likely indicates this is addressed by recent core loop or channel updates.
*   **Nix Flake Support:** An open PR ([PR #745](https://github.com/moltis-org/moltis/pull/745)) introduces a Nix flake for reproducible builds and NixOS system integration. Given the high demand for declarative deployments, this is a strong candidate for the next release.
*   **Out-of-the-box Skills:** With the merge of [PR #797](https://github.com/moltis-org/moltis/pull/797), Moltis agents now ship with 101 bundled skills, signaling a strategic shift toward "batteries-included" functionality out of the box.

## 7. User Feedback Summary
Users are heavily utilizing Moltis across diverse container environments and heterogeneous LLM providers. The primary pain points today revolved around environment fragmentation—specifically, the differences between BuildKit and Buildah in rootless Podman environments, and strict schema rejections by third-party LLM routers (Fireworks/Moonshot). The push for bundled skills ([PR #797](https://github.com/moltis-org/moltis/pull/797)) and improved Web UI markdown ([PR #808](https://github.com/moltis-org/moltis/pull/808)) reflects a user base shifting from core deployment toward daily productivity and UI polish.

## 8. Backlog Watch
*   **Documentation Bottleneck:** There are currently 4 open AutoDoc PRs ([PR #799](https://github.com/moltis-org/moltis/pull/799), [PR #800](https://github.com/moltis-org/moltis/pull/800), [PR #801](https://github.com/moltis-org/moltis/pull/801), [PR #802](https://github.com/moltis-org/moltis/pull/802)) covering everything from core config to session branching. Maintainers should review and merge these soon to prevent the documentation from falling behind the rapid feature additions.
*   **Nix Integration:** [PR #745](https://github.com/moltis-org/moltis/pull/745) (Nix Flake) has been open since April 16 and needs a final maintainer review to merge a highly requested deployment workflow.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-21

## 1. Today's Overview
CoPaw (also marketed/user-facing as QwenPaw) demonstrates exceptionally high development velocity and strong community engagement today, driven largely by its recent rebranding and feature expansion. With 42 issues updated (27 open) and 50 pull requests updated (34 merged/closed) in the past 24 hours, the project is in a state of rapid, active iteration. The core team and community contributors are heavily focused on fixing migration bugs from the CoPaw-to-QwenPaw transition, enhancing channel integrations, and pushing forward a major memory system overhaul. The release of `v1.1.3-beta.1` signals an imminent stable release aimed at stabilizing these new features.

## 2. Releases
*   **v1.1.3-beta.1**
    *   **What's Changed:** This beta release prepares the project for its next stable iteration. Key merges include bumping the version to `1.1.3b1`, significant enhancements to the Console plugin system, and the addition of corresponding documentation.
    *   **Migration/Breaking Changes:** Users upgrading from older CoPaw versions should note that directory paths and environment variables are actively being migrated from `.copaw` to `.qwenpaw` (though some bugs regarding this remain, see Section 5).

## 3. Project Progress
34 PRs were merged or closed today, indicating rapid integration of community and internal contributions. Major advancements include:
*   **Platform & UI:** Fixed a UI bug in the skill search page ([PR #3616](https://github.com/agentscope-ai/QwenPaw/pull/3616)) and added a "View" button for session chat histories ([PR #3615](https://github.com/agentscope-ai/QwenPaw/pull/3615)).
*   **Channel Integrations:** Fixed paragraph formatting for Feishu posts ([PR #2924](https://github.com/agentscope-ai/QwenPaw/pull/2924)) and resolved an issue with DingTalk bot prefixes ([PR #3614](https://github.com/agentscope-ai/QwenPaw/pull/3614)).
*   **Security:** Merged a shell evasion guardian to prevent obfuscation attacks during `execute_shell_command` execution ([PR #3400](https://github.com/agentscope-ai/QwenPaw/pull/3400)).
*   **Desktop Client:** Fixed a critical bug preventing macOS desktop builds from completing ([PR #3622](https://github.com/agentscope-ai/QwenPaw/pull/3622)) and suppressed disruptive CMD popup windows on Windows during shell execution ([PR #2950](https://github.com/agentscope-ai/QwenPaw/pull/2950)).
*   **System Backup:** Closed a highly anticipated PR for full system backup and restoration capabilities ([PR #3534](https://github.com/agentscope-ai/QwenPaw/pull/3534)), suggesting this feature is now finalized.

## 4. Community Hot Topics
The most active discussions revolve around multi-agent workflows, model support, and the CoPaw/QwenPaw transition:
*   **Open Tasks Board:** The help-wanted board ([Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291), 58 comments) remains the hub for contributor coordination.
*   **Brand Migration Confusion:** Users are highly confused about the `.copaw` vs `.qwenpaw` working directories. A prominent bug where `WORKING_DIR` points to the old directory while data writes to the new one generated 20 comments ([Issue #3356](https://github.com/agentscope-ai/QwenPaw/issues/3356)). Similarly, users are noticing duplicate system folders ([Issue #3598](https://github.com/agentscope-ai/QwenPaw/issues/3598)).
*   **Model Compatibility & Cost:** A highly liked question ([Issue #2405](https://github.com/agentscope-ai/QwenPaw/issues/2405)) discussed errors when trying to utilize free models on OpenRouter, highlighting user demand for seamless third-party model provider integration.

## 5. Bugs & Stability
Several high-priority bugs have been reported, primarily concerning APIs and the Windows environment:
1.  **Localhost Auth Bypass Failure (High):** Users are experiencing 401 errors on `127.0.0.1` despite documentation stating localhost should bypass authentication ([Issue #3582](https://github.com/agentscope-ai/QwenPaw/issues/3582)). *No known fix PR yet.*
2.  **Windows Memory System Crash (High):** The "dream-based" memory optimization system fails with `OSError(22)` on Windows ([Issue #3597](https://github.com/agentscope-ai/QwenPaw/issues/3597)).
3.  **Invalid YAML Crashes (High):** Loading a skill with malformed YAML causes the entire QwenPaw instance to crash completely ([Issue #3568](https://github.com/agentscope-ai/QwenPaw/issues/3568)).
4.  **Non-ASCII File URL Fix (Medium):** A fix was submitted today for `send_file_to_user` crashing on Windows when file paths contain non-ASCII characters ([PR #3625](https://github.com/agentscope-ai/QwenPaw/pull/3625)).
5.  **Cron KeyError (Medium):** Cron tasks targeting the WeChat channel fail with a `KeyError` ([Issue #3573](https://github.com/agentscope-ai/QwenPaw/issues/3573)).

## 6. Feature Requests & Roadmap Signals
User requests today heavily lean into advanced AI agent autonomy and UI/UX improvements:
*   **Configurable Tool Timeouts:** Request to expose `execute_shell_command` timeout settings in `agent.json` ([Issue #3593](https://github.com/agentscope-ai/QwenPaw/issues/3593)).
*   **Agent Evolution:** Users are asking for the integration of "Hermes" concepts to allow agents to auto-evolve ([Issue #3516](https://github.com/agentscope-ai/QwenPaw/issues/3516)).
*   **Automated Cron Approvals:** Users want the ability to disable the `/approve` requirement for scheduled cron tasks ([Issue #3586](https://github.com/agentscope-ai/QwenPaw/issues/3586)).
*   **Likely Next Version Features:** Based on the open PRs currently under review, upcoming releases will likely feature a new "Plan Mode" ([PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904)), a rebuilt long-term memory module ([PR #3548](https://github.com/agentscope-ai/QwenPaw/pull/3548)), and semantic skill routing to reduce token usage ([PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)).

## 7. User Feedback Summary
Users are enthusiastically adopting the platform's multi-channel capabilities (WeChat, DingTalk, Feishu) but are encountering friction with model integration and specific desktop quirks. 
*   **Pain Points:** The transition from CoPaw to QwenPaw has left lingering path/directory issues that confuse self-hosters. Users also express frustration with the OpenAI Responses API formatting, causing errors when routing through Azure or custom gateways ([Issue #3002](https://github.com/agentscope-ai/QwenPaw/issues/3002)). 
*   **Dissatisfaction:** The desktop client's front-end UI is seen as somewhat unpolished, with users specifically requesting an aesthetic overhaul to look more like modern tools such as Claude Code ([Issue #3627](https://github.com/agentscope-ai/QwenPaw/issues/3627)).

## 8. Backlog Watch
*   **Long-Term ACP Integration ([PR #3589](https://github.com/agentscope-ai/QwenPaw/pull/3589)):** A significant PR aiming to adopt the official ACP Python SDK for delegated external agents has been open and under review. Maintainer attention is needed to merge this substantial architectural update.
*   **Plan Mode Integration ([PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904)):** Open since April 3rd, this PR adds an end-to-end "Plan mode" using `PlanNotebook`. It requires a final review as it represents a major functional expansion.
*   **UI/UX Gaps:** Maintainers should address the MacOS blank screen bug ([Issue #3578](https://github.com/agentscope-ai/QwenPaw/issues/3578)) which directly hinders desktop adoption for Apple users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-04-21

## 1. Today's Overview
The EasyClaw project (gaoyangz77/easyclaw) experienced a highly asymmetric day of development on April 21, 2026, characterized by a total lack of community/code activity but marked by a significant new release. With zero issues opened or closed and zero pull requests submitted or merged, the daily community engagement and code iteration metrics are flat. However, the maintainers shipped version `v1.8.0` (RivonClaw), indicating that development is happening in a private or isolated environment before being pushed to the public repository. Overall, the project's public-facing activity is currently dormant, though the project itself remains under active maintenance.

## 2. Releases
A new stable version was officially released today:
*   **Release:** [v1.8.0: RivonClaw v1.8.0](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.0)
*   **Details & Changes:** The primary focus of this release's published notes revolves around a critical installation blocker for macOS users. It addresses the macOS Gatekeeper issue where the OS flags the app as "damaged" because it lacks an Apple Developer certificate. 
*   **Migration Notes:** Users on macOS updating to or installing v1.8.0 will need to bypass Gatekeeper manually via Terminal. While specific feature additions are not detailed in the release excerpt, the update guarantees a smoother onboarding experience for the Apple ecosystem by proactively documenting this workaround.

## 3. Project Progress
*   **Merged/Closed PRs:** 0
*   **Active Advancements:** No public code changes were merged today. The release of `v1.8.0` suggests that the underlying codebase updates for this version were either completed in previous days or developed in an upstream/private CI environment before being tagged directly to the repository today.

## 4. Community Hot Topics
*   **Most Active Items:** None.
*   **Analysis:** There are no active discussions, issues, or PRs generating community buzz today. The project's public discussion board is currently silent.

## 5. Bugs & Stability
*   **Reported Bugs (Last 24h):** 0
*   **Known Stability Notes:** While not reported as an issue *today*, the `v1.8.0` release notes implicitly highlight an ongoing UX/friction bug regarding macOS code signing. The application is currently unsigned, which triggers system-level security blocks. No dedicated fix PR exists for this in the public repo; instead, the maintainers have provided a documentation workaround.

## 6. Feature Requests & Roadmap Signals
*   **User-Requested Features:** None submitted today.
*   **Roadmap Signals:** The fact that the release is explicitly named "RivonClaw v1.8.0" suggests ongoing branding or architectural updates to the core AI agent. For future versions (e.g., v1.8.1 or v1.9.0), it is highly likely the maintainers will need to address the macOS code-signing issue permanently, as well as introduce the actual feature payloads that accompany this version bump. 

## 7. User Feedback Summary
*   **Pain Points:** There are no new user comments or issues to draw from today. Historically, based on the release notes, the primary pain point for new users is the macOS installation friction caused by missing code signatures.
*   **Satisfaction:** Cannot be accurately assessed today due to a complete lack of community comments, reactions, or reviews on the repository. 

## 8. Backlog Watch
*   **Unanswered Items:** With zero open issues and zero open PRs currently tracked in the daily data pull, the public backlog appears to be completely clear (or heavily managed via an external tracker). Maintainers should remain vigilant as the rollout of `v1.8.0` will likely trigger an influx of new issues related to installation or newly introduced features in the coming days.

</details>