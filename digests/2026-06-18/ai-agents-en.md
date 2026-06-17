# OpenClaw Ecosystem Digest 2026-06-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-17 22:30 UTC

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

Here is the structured project digest for OpenClaw based on the GitHub data provided for June 18, 2026.

### 1. Today's Overview
OpenClaw is currently experiencing a hyper-active state of development and community engagement, with exactly 500 issues and 500 pull requests updated within the last 24 hours. However, the project is showing signs of an overwhelmed triage pipeline, as only 32 issues were closed compared to 468 remaining active/open, and 432 PRs remain unmerged. The ecosystem is heavily focused on multi-agent orchestration, memory handling, and gateway stability. Despite the massive throughput, no new releases were published today, leaving several critical regressions and memory-loss bugs pending.

### 2. Releases
**None.** 
No new versions were released today. The project is holding at its current state, likely waiting for major stabilization efforts around session management and agent orchestration before cutting a new release tag.

### 3. Project Progress
While no releases were cut, 68 PRs were successfully merged/closed, advancing several key areas:
*   **Diagnostics & Triage Tools:** Significant progress was made in giving operators better visibility, with the introduction of the `openclaw doctor --explain` command ([PR #94253](https://github.com/openclaw/openclaw/pull/94253)) and a read-only `sessions diagnose` command ([PR #94192](https://github.com/openclaw/openclaw/pull/94192)).
*   **Channel Reliability:** Critical fixes were merged for channel recovery, including restoring the Telegram channel after stop timeouts ([PR #94016](https://github.com/openclaw/openclaw/pull/94016)), fixing QQ Bot outbound delivery drops ([PR #89038](https://github.com/openclaw/openclaw/pull/89038)), and fixing Discord gateway socket disconnects ([PR #89041](https://github.com/openclaw/openclaw/pull/89041)).
*   **Security & Visibility:** Work was done to redact sensitive payload data from the `exec` tool results ([PR #81185](https://github.com/openclaw/openclaw/pull/81185)) and preserve archived transcripts after session resets in the UI ([PR #77996](https://github.com/openclaw/openclaw/pull/77996)).

### 4. Community Hot Topics
The community is highly engaged, primarily driven by high-friction pain points in daily operations:
*   **Cross-Platform Demand:** The most active issue overall is [Issue #75 (109 comments, 79 👍)](https://github.com/openclaw/openclaw/issues/75), where users are desperately requesting Linux and Windows Clawdbot apps to match the existing macOS/iOS/Android feature sets.
*   **Cost & Provider Management:** Users are highly sensitive to API costs. [Issue #91016 (8 comments, 6 👍)](https://github.com/openclaw/openclaw/issues/91016) blew up after an upgrade silently disabled DeepSeek Prompt Caching, causing heavy financial impact for users (~$6/hr). Similarly, [Issue #73182 (6 comments, 6 👍)](https://github.com/openclaw/openclaw/issues/73182) caused frustration when Claude reasoning defaults silently flipped to "on," doubling expenses.
*   **Multi-Channel Silently Dropped Messages:** A major [Umbrella Bug #69208 (12 comments)](https://github.com/openclaw/openclaw/issues/69208) addressing duplicate transcripts and context assembly across MSTeams, Webchat, and Telegram is generating significant discussion regarding core message pipeline instability.

### 5. Bugs & Stability
The project is currently facing several high-severity bugs, heavily centered around state management and memory loss:
*   **Critical / Regression:**
    *   [Issue #62505](https://github.com/openclaw/openclaw/issues/62505): A severe regression where the Coding Agent completely stops completing tasks, only outputting vague status updates.
    *   [Issue #40001](https://github.com/openclaw/openclaw/issues/40001): Isolated cron sessions completely overwrite shared workspace files because the `write` tool lacks an append mode, resulting in silent data loss.
    *   [Issue #92043](https://github.com/openclaw/openclaw/issues/92043): A newly introduced 180s compaction timeout acts as a hard wall-clock limit with no partial-progress reuse, breaking setups with long context histories.
*   **Infrastructure/Resource Leaks:** 
    *   [Issue #76171](https://github.com/openclaw/openclaw/issues/76171): Stale worker processes are accumulating on the host, driving load averages to 25-31+ and causing 2-3 minute response times.
    *   [Issue #75621](https://github.com/openclaw/openclaw/issues/75621): Gateway is lazy-spawning duplicate MCP children, resulting in massive CPU and memory leaks.

### 6. Feature Requests & Roadmap Signals
Based on user requests and open RFCs, the next iteration of OpenClaw should strongly focus on:
*   **Advanced Memory Architecture:** [Issue #60572](https://github.com/openclaw/openclaw/issues/60572) proposes a Multi-Slot Memory Architecture to allow different providers to handle distinct layers of memory simultaneously. Additionally, [Issue #64438](https://github.com/openclaw/openclaw/issues/64438) requests Remote Reranker Endpoint support.
*   **Plugin Security & Sandboxing:** [Issue #39604](https://github.com/openclaw/openclaw/issues/39604) requests a configuration toggle (`allowPrivateNetwork`) to bypass localhost network blocks for the web fetch tool, while [PR #93404](https://github.com/openclaw/openclaw/pull/93404) introduces an Agent SDK packaging spec with quarantine restrictions.
*   **Core Usability Tweaks:** Support for YAML config formats ([Issue #45758](https://github.com/openclaw/openclaw/issues/45758)) and auto-update workflows ([Issue #12855](https://github.com/openclaw/openclaw/issues/12855)) are highly requested quality-of-life improvements.

### 7. User Feedback Summary
The overarching sentiment from power users is that while OpenClaw's multi-agent capabilities and plugin ecosystem are unmatched, **operational reliability is currently fragile**. Users running self-hosted containers or multi-agent batches are encountering severe "silent failure" states—where tools time out, subagents appear finished before they actually are ([Issue #50165](https://github.com/openclaw/openclaw/issues/50165)), and messages are dropped ([Issue #72808](https://github.com/openclaw/openclaw/issues/72808)). Furthermore, developers are increasingly frustrated by native dependency breakages (e.g., the `sharp` image package breaking vision pipelines in [Issue #73148](https://github.com/openclaw/openclaw/issues/73148)) and unpredictable billing regressions.

### 8. Backlog Watch
The triage queue is intensely crowded. The following major items require immediate maintainer intervention:
*   **Long-Standing Orchestration Flaws:** [Issue #43367](https://github.com/openclaw/openclaw/issues/43367) (open since March 2026) highlights that concurrent agent additions overwrite configs and fail session locks, rendering parallel batches highly unreliable.
*   **Gateway Deadlocks:** [Issue #74484](https://github.com/openclaw/openclaw/issues/74484) documents a scope deadlock where the CLI cannot approve or reject auto-reissued repair requests, breaking gateway recoverability.
*   **Major Pending Integrations:** Valuable community contributions like the persistent hook session mode ([PR #75918](https://github.com/openclaw/openclaw/pull/75918)) and channel echo/session pinning ([PR #88815](https://github.com/openclaw/openclaw/pull/88815)) have been left waiting for maintainer review despite supplying extensive behavioral proof and screenshots.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 18, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a phase of hyper-active iteration, characterized by a rapid shift from conversational interfaces toward autonomous, multi-agent, and cross-platform execution. Projects are heavily prioritizing deep system integrations—such as native messaging gateway expansions (Slack, WeChat, Telegram) and local OS-level "Computer Use"—while grappling with the complexities of context management and memory retention at scale. Underneath the feature proliferation, there is a pervasive, industry-wide focus on sandboxing, authentication, and plugin security to prevent vulnerabilities like prompt injection and Server-Side Request Forgery (SSRF). Consequently, the ecosystem's immediate bottleneck is not LLM capability, but rather infrastructure reliability, observability, and the stability of cross-platform desktop (Tauri/Electron) environments.

### 2. Activity Comparison
*Health Score is calculated based on PR throughput, bug resolution velocity, and community engagement relative to backlog.*

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | None (Stabilization) | 🟡 Moderate (Triage pipeline overwhelmed) |
| **NanoBot** | 11 | 31 | None (Batching) | 🟢 Excellent (High PR merge velocity) |
| **Hermes Agent** | 50 | 50 | None (Architecting) | 🟡 Moderate (Bugs outpacing merges) |
| **PicoClaw** | ~5 | ~6 | **v0.3.0-nightly** | 🟢 Excellent (Agile, responsive) |
| **NanoClaw** | ~10 | ~5 | **v2.1.17 & v2.1.0** | 🟢 Good (Active releases, some breakage) |
| **NullClaw** | 3 | 1 | None (Stabilization) | 🟡 Fair (Low activity, critical bugs open) |
| **IronClaw** | 50 | 50 | None (QA Phase) | 🟢 Excellent (High velocity, balanced) |
| **LobsterAI** | 0 | 13 | **2026.6.15** | 🟢 Excellent (Flawless stability, 0 open bugs) |
| **Moltis** | 5 | 1 | None (Iterating) | 🟡 Fair (Niche focus, slow velocity) |
| **CoPaw** | 45 | 50 | **v1.1.12 & v2.0.0a1** | 🟡 Moderate (Major migration causing friction) |
| **ZeroClaw** | 50 | 47 | None (Architecting) | 🟡 Moderate (Heavy refactoring bottleneck) |

*(Note: TinyClaw and ZeptoClaw omitted due to zero recent activity).*

### 3. OpenClaw's Position
**Advantages:** OpenClaw operates at a massive scale, processing 500 issues and 500 PRs daily. It possesses unmatched multi-agent orchestration capabilities and a deeply mature plugin ecosystem. Its integration breadth across enterprise and consumer communication channels (MSTeams, Telegram, QQ, Webchat) positions it as a premier choice for heavy-duty deployments.
**Approach Differences:** Unlike projects heavily focused on single-desktop paradigms (like LobsterAI or CoPaw), OpenClaw is fundamentally a distributed orchestration engine. However, it is currently sacrificing stability for scale; while IronClaw and NanoBot rapidly close bugs to maintain stable cores, OpenClaw is allowing technical debt to accumulate, evidenced by severe memory leaks, state overwrites, and unmerged critical fixes.
**Community Size:** OpenClaw's community is the largest and most vocal, driving massive macro-level discussions (e.g., cross-platform demand, API cost management). In contrast, communities like IronClaw and LobsterAI are smaller but exhibit higher code-contribution efficiency and tighter feedback loops.

### 4. Shared Technical Focus Areas
Several technical requirements are emerging as universal standards across the open-source agent landscape:
*   **Context Compaction & Memory Architecture:** As agents handle longer sessions, preventing Out-Of-Memory (OOM) crashes and context loss is critical. *Projects: OpenClaw (Multi-Slot Memory), LobsterAI (Post-compaction continuity), CoPaw (Compaction freezes), NanoBot (Microcompaction).*
*   **Sandbox Security & Network Isolation:** Preventing agents from executing malicious code or accessing unauthorized local networks is a top priority. *Projects: PicoClaw & ZeroClaw (SSRF patching), Hermes Agent (iron-proxy), NanoClaw (Path traversal fixes), NanoBot (Workspace git policies).*
*   **Cross-Platform Desktop Stability:** The transition to local desktop runtimes via Tauri/Electron is universally painful. *Projects: CoPaw & Hermes Agent (macOS/Windows packaging failures, ChromaDB/Tauri crashes).*
*   **Expanding Communication Gateways:** Users demand native integrations beyond Slack/Discord. *Projects: IronClaw (WeChat), PicoClaw (DeltaChat/SimpleX), CoPaw (XiaoYi).*

### 5. Differentiation Analysis
*   **Enterprise Scale & Infrastructure (NanoClaw, OpenClaw, ZeroClaw):** These projects are differentiated by their focus on fleet management, containerization, and multi-tenant architectures. NanoClaw, for instance, is uniquely focused on immutable VM deployments and stale database journal recovery.
*   **Developer & Power-User Tooling (IronClaw, NanoBot, Hermes Agent):** These projects prioritize deep execution visibility, complex routing (fallback models), and coding/CI workflows. IronClaw's focus on dogfooding its own engine for code reviews highlights a developer-first trajectory.
*   **Desktop & Multimodal Assistants (LobsterAI, CoPaw):** These projects are moving aggressively toward local, multimodal interaction. LobsterAI leads in seamless "Computer Use" and realtime voice inputs, treating the agent more as an OS-level companion than a headless backend.
*   **Privacy & Self-Hosted Enthusiasts (NullClaw, PicoClaw, Moltis):** These projects cater to users running local LLMs (via Ollama) with strict privacy requirements. Moltis is carving a niche in continuous live-voice interaction, while PicoClaw focuses on encrypted, decentralized chat integrations.

### 6. Community Momentum & Maturity
*   **Tier 1 - Hyper-Growth & Friction (OpenClaw, CoPaw, Hermes Agent):** These projects have massive momentum but are currently stumbling under the weight of their own ambition. CoPaw and Hermes are battling severe desktop packaging bugs, while OpenClaw's triage pipeline is bottlenecked.
*   **Tier 2 - High Velocity & Stability (IronClaw, NanoBot, LobsterAI):** These teams are executing flawlessly. LobsterAI boasts zero open bug reports, NanoBot is rapidly consuming architectural PRs, and IronClaw maintains a perfect balance of community engagement and rapid security patching.
*   **Tier 3 - Agile & Specialized (PicoClaw, NanoClaw):** Demonstrating highly mature, steady iteration. NanoClaw is rapidly responding to enterprise fleet edge-cases, while PicoClaw is efficiently patching security vectors and rolling out clean nightly builds.
*   **Tier 4 - Stagnant or Niche (NullClaw, Moltis, TinyClaw, ZeptoClaw):** Activity is minimal or highly specialized. These projects are either stabilizing minor feature sets (Moltis live audio) or suffering from stale backlogs (NullClaw).

### 7. Trend Signals
*   **Agentic Computer Use is the New Baseline:** The immediate race is to bypass chat UIs entirely. LobsterAI and ZeroClaw implementing screenshot/mouse/keyboard automation signals that local OS-control (competing with OpenAI Codex) is the next major battleground.
*   **Cost & Resource Awareness:** Developers refuse blind API calls. Projects like OpenClaw and NanoBot are facing community pressure for granular provider routing, cron-based model switching (using cheaper models at night), and tool-call caching to manage enterprise LLM budgets.
*   **Human-in-the-Loop Friction:** As agents gain autonomy (e.g., writing to file systems, executing git commands), the UX of tool approval is breaking down. IronClaw and OpenClaw show that denying agent permissions frequently crashes agent loops. Solving graceful failure states for denied automations will be critical for mainstream adoption.
*   **Headless vs. Web UI Split:** There is a growing bifurcation between users wanting lightning-fast CLI/REPL tools (NullClaw, OpenClaw) and those demanding robust, locally hosted Web UIs for multi-agent dashboarding.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the structured project digest for NanoBot based on the provided GitHub data.

### 1. Today's Overview
The NanoBot project exhibited exceptionally high development velocity over the past 24 hours, processing 11 issues and 31 pull requests. Maintainers and contributors aggressively merged bug fixes and feature enhancements, closing 18 PRs alongside 3 issues, indicating highly active project stewardship. Current development is heavily focused on hardening security boundaries (especially concerning workspace file access and git commands), stabilizing LLM provider behavior, and refining memory/context consolidation. The absence of a new release during this sprint suggests the team is likely batching these substantial architectural fixes for an upcoming major version bump. Overall, project health appears robust, driven by a tight, responsive community loop.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
Significant forward progress was made today, particularly in filesystem security, LLM provider resilience, and channel integrations. Key merged PRs include:
*   **Workspace & Security Policies:** Fixed git command execution in workspace subdirectories ([PR #4380](https://github.com/HKUDS/nanobot/pull/4380)), enforced read-only restrictions for extra allowed file paths ([PR #4053](https://github.com/HKUDS/nanobot/pull/4053)), and comprehensively clarified filesystem write policies ([PR #4202](https://github.com/HKUDS/nanobot/pull/4202)).
*   **LLM Providers:** Improved local model server connections by disabling proxies for localhost while respecting them for cloud endpoints ([PR #4367](https://github.com/HKUDS/nanobot/pull/4367)). Added specific sanitization for Anthropic `tool_use` IDs ([PR #4356](https://github.com/HKUDS/nanobot/pull/4356)), improved Mistral API support ([PR #4351](https://github.com/HKUDS/nanobot/pull/4351)), and added better error logging before model fallbacks ([PR #4385](https://github.com/HKUDS/nanobot/pull/4385)).
*   **Memory & Context:** Fixed replay-window history trimming to prevent cutting off user turns ([PR #4349](https://github.com/HKUDS/nanobot/pull/4349)).
*   **Integrations:** Added read receipts for incoming WhatsApp messages ([PR #4354](https://github.com/HKUDS/nanobot/pull/4354)) and recovered failed Feishu streaming updates ([PR #4381](https://github.com/HKUDS/nanobot/pull/4381)).
*   **Search:** Added Keenable as a built-in web search provider ([PR #4350](https://github.com/HKUDS/nanobot/pull/4350)).

### 4. Community Hot Topics
*   **Onboarding and Usability:** A highly supported feature request asked for a more "user-friendly wizard" ([Issue #4376](https://github.com/HKUDS/nanobot/issues/4376)). The user noted that the current `onboard --wizard` assumes too much technical knowledge, signaling a strong community desire to lower the barrier to entry for non-technical users. 
*   **Multi-Instance & Multi-Tenant Architecture:** There is ongoing discussion around managing multiple agents. Users are actively requesting a multi-tenant gateway to manage multiple agents from a single config ([Issue #936](https://github.com/HKUDS/nanobot/issues/936)) and easier ways to run multiple local instances organized by folder ([Issue #4390](https://github.com/HKUDS/nanobot/issues/4390)).
*   **Feishu QR Bot Creation:** An open PR to add QR scan-to-create bot registration for the Feishu channel ([PR #4391](https://github.com/HKUDS/nanobot/pull/4391)) generated significant interest, showcasing a demand for frictionless messaging platform integrations.

### 5. Bugs & Stability
*   **Workspace Git Execution Block (Critical):** Users reported that git commands (`add`, `commit`, `push`) were blocked by the workspace security guard when executed from subdirectories ([Issue #4375](https://github.com/HKUDS/nanobot/issues/4375)). **Status:** Immediately fixed via [PR #4380](https://github.com/HKUDS/nanobot/pull/4380).
*   **Local Model Proxy Hijacking (High):** When host proxy variables (`HTTP_PROXY`) were set, local LLM servers (Ollama, vLLM) broke because traffic was wrongly routed through the proxy ([Issue #4366](https://github.com/HKUDS/nanobot/issues/4366)). **Status:** Fixed via [PR #4367](https://github.com/HKUDS/nanobot/pull/4367).
*   **iOS Safari WebUI Zooming (Medium):** A UI bug was reported where clicking the input box on iOS 26.5 Safari triggers automatic page zooming and UI deformation ([Issue #4388](https://github.com/HKUDS/nanobot/issues/4388)). **Status:** Open, currently unaddressed.
*   **Installer Syntax Error (Medium):** The NanoBot installer aborted on a fresh Debian 13 Docker container due to a pip syntax error ([Issue #4360](https://github.com/HKUDS/nanobot/issues/4360)). **Status:** Closed.

### 6. Feature Requests & Roadmap Signals
Based on current user demands, the following features are strong candidates for the next roadmap iteration:
*   **Per-Model Context Windows:** Users want `contextWindowTokens` to be definable per-model rather than globally, which is crucial for handling smaller fallback models properly ([Issue #4389](https://github.com/HKUDS/nanobot/issues/4389)).
*   **Cron-Level Model Switching:** The ability to automatically switch models or presets via a cron job (e.g., using a cheaper model at night) was requested ([Issue #4378](https://github.com/HKUDS/nanobot/issues/4378)).
*   **Configurable Tool Microcompaction:** An open PR ([PR #4392](https://github.com/HKUDS/nanobot/pull/4392)) makes tool result compaction configurable, indicating upcoming support for cache-sensitive deployments.
*   **Debug Heartbeats:** An RFC to introduce an on-demand heartbeat trigger for easier debugging of agent background processes ([Issue #3437](https://github.com/HKUDS/nanobot/issues/3437)).

### 7. User Feedback Summary
Overall satisfaction with the project is high, particularly praising the maintainers' rapid response to PRs and complex bug reports. Users are deploying NanoBot in diverse environments, including iOS devices, Docker containers, local offline LLM servers, and enterprise messaging platforms (WhatsApp, Feishu). The main pain points center around the steep learning curve for initial configuration and overly aggressive (sometimes broken) security guards regarding file paths and proxy environments. 

### 8. Backlog Watch
*   **[PR #4205](https://github.com/HKUDS/nanobot/pull/4205) - Mailbox-backed subagent results:** Open since June 5th, this architectural change to how subagents handle task/results records needs a maintainer review, as it deeply impacts agent concurrency and memory handling.
*   **[PR #4021](https://github.com/HKUDS/nanobot/pull/4021) - OpenAI Codex Provider Duplicate Items:** Open since May 27th, this AI-assisted PR addresses a critical `400 Duplicate item` error that breaks multi-turn conversations. It requires maintainer validation and merge to stabilize Codex usage.
*   **[Issue #936](https://github.com/HKUDS/nanobot/issues/936) - Multi-Tenant Gateway:** Open since February, this highly requested feature to manage multiple agents from a single instance remains unaddressed.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for the Hermes Agent repository based on the provided 2026-06-18 data overview.

### 1. Today's Overview
Hermes Agent is currently exhibiting exceptionally high community engagement and development velocity, evidenced by 50 updated issues and 50 updated PRs in the last 24 hours. The project is in an active architectural development phase, with maintainers and contributors heavily focused on refining the gateway routing, sandbox security, and multi-provider support. However, this rapid iteration appears to be outpacing stability assurances, as the majority of active issues and PRs today address critical packaging failures, installation loops, and UI regressions across major operating systems. With 9 merged/closed PRs and 41 still in progress, the development pipeline is robust but heavily burdened by technical debt related to cross-platform desktop packaging.

### 2. Releases
**None.** 
No new releases were published in the last 24 hours. The project remains on prior versions while core architectural PRs (such as gateway relays and security proxies) are finalized.

### 3. Project Progress
Significant architectural and feature-level advancements are being made in the codebase. Recent code merges and progress include:
*   **Task Decomposition & Context Recovery:** PR [#30622](https://github.com/NousResearch/hermes-agent/pull/30622) was closed, introducing guarded context-compression continuity with prompt-boundary escaping and auxiliary-model fallbacks. PR [#32163](https://github.com/NousResearch/hermes-agent/pull/32163) advanced Kanban sandwich decomposition for routing high-risk planning tasks.
*   **Gateway Scaling Infrastructure:** PR [#48078](https://github.com/NousResearch/hermes-agent/pull/48078) opened to introduce a generic `RelayAdapter` and `CapabilityDescriptor`, allowing gateway connectors to scale to zero. 
*   **Advanced Security Egress:** Ongoing hardening of the sandbox environment via PR [#48076](https://github.com/NousResearch/hermes-agent/pull/48076) and [#48073](https://github.com/NousResearch/hermes-agent/pull/48073), which tackle P0/P1/P2 security gaps in the new `iron-proxy` credential-injection firewall.

### 4. Community Hot Topics
The most engaging discussions center around expanding the agent's multi-platform capabilities and structural UI/UX needs:
*   **Rocket Chat Integration (8 👍 / 10 comments):** [Issue #3725](https://github.com/NousResearch/hermes-agent/issues/3725) continues to generate heavy discussion. Users are highly motivated to use Hermes as an automated responder in Rocket Chat, indicating strong enterprise demand for broader gateway messaging channels.
*   **Thin-Client Desktop Architecture (17 👍 / 5 comments):** [Issue #38602](https://github.com/NousResearch/hermes-agent/issues/38602) is overwhelmingly popular. Users want to decouple the Hermes Desktop app from the local runtime, using it purely as a frontend to connect to remote installations, highlighting a shift towards distributed agent deployments.
*   **Tool Output Compression (8 👍 / 5 comments):** [Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) discusses integrating `headroom-ai` to replace the current inefficient conversation-level LLM summarization, pointing to community desire for more granular context management.

### 5. Bugs & Stability
Cross-platform installation and packaging stability has severely degraded, comprising the bulk of critical bugs today:
*   **P1 - Systemd Gateway Bypass:** [Issue #48071](https://github.com/NousResearch/hermes-agent/issues/48071) shows that Nix level-1 gateway installs generate systemd units that bypass Hermes wrappers, breaking CLI workflows entirely.
*   **P2 - Cross-Platform Desktop Build Failures:** A massive cluster of issues ([#40187](https://github.com/NousResearch/hermes-agent/issues/40187), [#47917](https://github.com/NousResearch/hermes-agent/issues/47917), [#48059](https://github.com/NousResearch/hermes-agent/issues/48059), [#48021](https://github.com/NousResearch/hermes-agent/issues/48021), [#48019](https://github.com/NousResearch/hermes-agent/issues/48019)) report that `hermes update` and `hermes desktop` consistently fail on macOS, Windows 10, and Linux due to missing Electron binaries (`electronDist does not exist`) and lockfile hoisting misconfigurations. 
*   **P2 - Empty Model/Provider Configuration:** [Issue #48061](https://github.com/NousResearch/hermes-agent/issues/48061) reports that v0.16.0 Linux pipx installations fail completely, sending empty model and provider fields (`MODEL: '', PROVIDER: None`).
*   **P3 - React UI Minification Crash:** [Issue #36658](https://github.com/NousResearch/hermes-agent/issues/36658) leaves the dashboard chat feature broken after updates due to a React error #301.

### 6. Feature Requests & Roadmap Signals
Clear themes are emerging that will likely define the v0.17.0 or v1.0 roadmap:
*   **Dynamic Subscription Balancing:** Multiple issues ([#41190](https://github.com/NousResearch/hermes-agent/issues/41190), [#46991](https://github.com/NousResearch/hermes-agent/issues/46991)) request a unified plugin route selector (`resolve_route`) to dynamically balance LLM routing across multiple subscriptions (like Claude Max and Codex) based on quota limits. PR [#48075](https://github.com/NousResearch/hermes-agent/pull/48075) already introduces user notifications for fallback models, showing this is actively being built.
*   **MCP & OAuth Provider Expansions:** Users are actively submitting PRs to bypass MCP limits for subagents ([#44279](https://github.com/NousResearch/hermes-agent/pull/44279)) and integrate region-specific OAuth providers like MiniMax China ([#36286](https://github.com/NousResearch/hermes-agent/pull/36286)) and Claude Code local backends ([#47199](https://github.com/NousResearch/hermes-agent/issues/47199)).
*   **Globalization:** The desktop client is receiving heavy localization efforts from the community, including French ([#48070](https://github.com/NousResearch/hermes-agent/pull/48070)) and Arabic ([#45619](https://github.com/NousResearch/hermes-agent/pull/45619)) support.

### 7. User Feedback Summary
The user base is showing signs of frustration regarding the reliability of the desktop client installation process. While the core agent capabilities are praised and heavily utilized, standard update mechanisms (`hermes update`) are breaking existing setups. Users frequently note that installation loops on macOS ([#43913](https://github.com/NousResearch/hermes-agent/issues/43913)) and Windows installer crashes ([#46260](https://github.com/NousResearch/hermes-agent/issues/46260)) force manual interventions. Conversely, satisfaction remains high regarding the plugin architecture; power users are enthusiastically building complex memory providers ([#6715](https://github.com/NousResearch/hermes-agent/issues/6715)) and advanced multi-agent routing hooks, validating Hermes' extensible design.

### 8. Backlog Watch
Several critical foundational issues have remained open for weeks and require immediate maintainer focus:
*   **Silent Vision Failure (Open since May 17):** [Issue #27555](https://github.com/NousResearch/hermes-agent/issues/27555) outlines a critical `P1` bug where a `TypeError` completely breaks the configured vision fallback chain silently. 
*   **Security Vulnerabilities in Encryption (Open since May 10):** [Issue #22931](https://github.com/NousResearch/hermes-agent/issues/22931) addresses a `P3` AES-256-GCM Nonce Reuse Risk in Local Long-Term Memory that violates fundamental cryptographic requirements. 
*   **Stale Memory Sessions (Open since May 19):** [Issue #28296](https://github.com/NousResearch/hermes-agent/issues/28296) highlights that memory providers like OpenViking miss `on_session_switch` overrides, causing memory bleed/staleness between new sessions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the provided GitHub data.

# PicoClaw Project Digest — 2026-06-18

### 1. Today's Overview
PicoClaw is demonstrating highly active and healthy development, characterized by a strong focus on security hardening, bug squashing, and ecosystem expansion. The project merged 6 Pull Requests and closed 2 issues in the last 24 hours, indicating responsive maintainer engagement and rapid iteration. Notable progress includes patching a critical Server-Side Request Forgery (SSRF) vulnerability and swiftly resolving integration failures with Google's newest Gemini 3.5 Flash model. The release of the `v0.3.0-nightly` build suggests that the project is actively preparing for a stable milestone, absorbing community contributions for new gateways and providers.

### 2. Releases
*   **nightly: Nightly Build (v0.3.0-nightly.20260617.a16a1e15)**
    *   *Details:* Automated build cut from the `main` branch. Includes the latest security patches for the OneBot gateway, Gemini 3.5 Flash compatibility fixes, and updated web search parsers.
    *   *Migration/Warnings:* Standard nightly warnings apply—automated builds may be unstable. 
    *   [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

### 3. Project Progress
Several key improvements were merged into the codebase today:
*   **Security Patching (OneBot):** [PR #3140](https://github.com/sipeed/picoclaw/pull/3140) was merged to block private inbound media fetches, successfully closing a severe vulnerability where attacker-controlled URLs could trigger host-side SSRF.
*   **LLM Compatibility (Gemini):** [PR #3136](https://github.com/sipeed/picoclaw/pull/3136) fixed a `400 Bad Request` error by implementing snake_case `thought_signature` handling required by Gemini 3.5 Flash's agentic reasoning loop.
*   **New Integrations:** [PR #2917](https://github.com/sipeed/picoclaw/pull/2917) successfully merged, adding NEAR AI Cloud as a first-class OpenAI-compatible LLM provider, complete with TEE-capable model support.
*   **Web Tooling Fixes:** [PR #3139](https://github.com/sipeed/picoclaw/pull/3139) updated the Sogou search regex to repair broken web scraping, and [PR #2990](https://github.com/sipeed/picoclaw/pull/2990) fixed a Web UI bug that truncated session history.
*   **New Feature:** [PR #3138](https://github.com/sipeed/picoclaw/pull/3138) added a new review functionality.

### 4. Community Hot Topics
*   **Cryptography Overhaul ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)):** This high-priority feature request asking to replace the unmaintained `libolm` with `vodozemac` has gained traction (👍 2). *Analysis:* Users are highly security-conscious and want the project to adopt modern, officially supported encryption libraries, especially as PicoClaw expands its messaging gateways.
*   **Gateway Expansion Requests ([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)):** A user requested support for SimpleX, Wire, or Tox gateways. *Analysis:* This highlights a strong community desire for decentralized, privacy-focused communication channels—a trend that aligns perfectly with today's merge of the NEAR AI (TEE) provider.

### 5. Bugs & Stability
*   🔴 **High Severity: OneBot Inbound Media URL Handling (SSRF)**
    *   *Details:* Attackers could exploit the OneBot channel to force the host to fetch localhost, private networks, or metadata endpoints ([Issue #3070](https://github.com/sipeed/picoclaw/issues/3070)).
    *   *Status:* **Fixed** via [PR #3140](https://github.com/sipeed/picoclaw/pull/3140).
*   🟠 **Medium Severity: Gemini 3.5 Flash Tool Execution Failure**
    *   *Details:* Google's new Gemini 3.5 Flash model returns a `400 Bad Request` during tool execution because the backend missed the snake_case `thought_signature` schema requirement ([Issue #3111](https://github.com/sipeed/picoclaw/issues/3111)).
    *   *Status:* **Fixed** via [PR #3136](https://github.com/sipeed/picoclaw/pull/3136).
*   🟡 **Low Severity: Sub-Agent Duplicate Messages**
    *   *Details:* Async sub-agents trigger duplicate message delivery due to a shared `ForUser`/`ForLLM` payload state.
    *   *Status:* Fix proposed in [PR #3142](https://github.com/sipeed/picoclaw/pull/3142) (Open).

### 6. Feature Requests & Roadmap Signals
*   **DeltaChat Gateway ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)):** Currently open, this addition would significantly broaden PicoClaw's interoperability with encrypted chat platforms. 
*   **Search Diagnostics:** [PR #3141](https://github.com/sipeed/picoclaw/pull/3141) adds diagnostic logging for Brave Search, showing a roadmap focus on making the agent's web-browsing tools more debuggable and resilient to upstream API changes.
*   *Prediction:* Given the recent merges and PRs, the upcoming **v0.3.0 stable release** will likely heavily feature expanded messaging gateway support (DeltaChat), robust LLM provider parity (Gemini 3.5, NEAR AI), and hardened web-search capabilities.

### 7. User Feedback Summary
Users are actively pushing PicoClaw into production environments that require cutting-edge LLM integrations and strict network security. There is mild frustration regarding silent failures—such as the Sogou search parser breaking silently ([PR #3139](https://github.com/sipeed/picoclaw/pull/3139)) and Brave search returning empty results ([PR #3141](https://github.com/sipeed/picoclaw/pull/3141)). However, overall satisfaction appears high, as evidenced by the community proactively submitting complex fixes (like Gemini API schema adjustments) and advocating for advanced privacy features.

### 8. Backlog Watch
*   **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) - Replace libolm:** Marked as `[help wanted]` and `[priority: high]`, but currently lacks an assignee or active PR. This security-critical migration to `vodozemac` needs immediate maintainer attention.
*   **[PR #3092](https://github.com/sipeed/picoclaw/pull/3092) - Skills Install Type Assertions:** Now marked as `[stale]`. This prevents silent UI/UX failures during force-reinstalls but has sat untouched since June 10th.
*   **[PR #3063](https://github.com/sipeed/picoclaw/pull/3063) - DeltaChat Gateway:** Open since June 8th. Requires maintainer review to unblock users waiting for decentralized messaging support.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw based on the GitHub data provided for June 18, 2026.

### 1. Today's Overview
NanoClaw demonstrates high engineering momentum with a heavy focus on system stability, CLI robustness, and security hardening. Over the past 24 hours, the project merged three critical pull requests and shipped two rollup releases, though the launch was slightly rocky due to breaking changes affecting managed fleets. Community engagement is highly structured, with contributors actively reporting edge cases in setup flows and internal skill documentation. Overall project health appears exceptionally strong, underscored by rapid resolution of severe message delivery bugs and proactive patching of container escape vulnerabilities.

### 2. Releases
NanoClaw shipped two rollup versions today, consolidating numerous `package.json` bumps and major architectural shifts:
*   **[v2.1.17](https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.17)**: Rollup release covering changes from v2.1.1 through v2.1.17.
    *   *[BREAKING]* **`@onecli-sh/sdk` 0.5.0 → 2.2.1**: Now requires a OneCLI server with the `/v1` API. Older servers will 404 on every SDK call. Sanctioned gateway and CLI versions are now pinned.
*   **[v2.1.0](https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.0)**: Rollup release covering changes from v2.0.65 through v2.1.0.
    *   *[BREAKING]* **Startup Upgrade Marker**: The host now refuses to boot unless `data/upgrade-state.json` records that the installation reached the current version safely.

### 3. Project Progress
The core development team merged/closed 3 significant PRs today, advancing system resilience and enterprise fleet support:
*   **[PR #2797](https://github.com/nanocoai/nanoclaw/pull/2797) [CLOSED]**: Isolated per-session delivery failures. The delivery poll loop now catches errors per-session, preventing a single bad `outbound.db` read from halting message delivery for the entire host.
*   **[PR #2794](https://github.com/nanocoai/nanoclaw/pull/2794) [CLOSED]**: Fixed a regression in `v2.1.17` that prevented managed-fleet agents from authenticating with LLM gateways via environment variables. 
*   **[PR #2780](https://github.com/nanocoai/nanoclaw/pull/2780) [CLOSED]**: Added a vital enterprise opt-out (`NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1`) for the v2.1.0 startup boot requirement, allowing NanoClaw to run smoothly in immutable VM images.

### 4. Community Hot Topics
Community activity is currently split between enterprise fleet stability and contributor-led skill documentation cleanups.
*   **Enterprise Fleet Stability**: [PR #2780](https://github.com/nanocoai/nanoclaw/pull/2780) and [PR #2794](https://github.com/nanocoai/nanoclaw/pull/2794) generated significant traction, highlighting a core use case: users baking NanoClaw into immutable VM images for large-scale deployments. These users require environment-variable-based configurations and the ability to bypass local upgrade state checks.
*   **Skill Documentation Overhaul**: Contributor `specterslient95-lgtm` filed a rapid-fire batch of issues ([#2785](https://github.com/nanocoai/nanoclaw/issues/2785), [#2787](https://github.com/nanocoai/nanoclaw/issues/2787), [#2789](https://github.com/nanocoai/nanoclaw/issues/2789), [#2791](https://github.com/nanocoai/nanoclaw/issues/2791)) targeting missing context and missing `mkdir` commands in NanoClaw's internal `.claude/skills/` setup files. This signals that while the agent architecture is scaling, the developer/contributor onboarding flow needs stricter error handling and better baseline documentation.

### 5. Bugs & Stability
Today's bug reports were heavily skewed toward CLI crashes, security vectors, and container-level file handling. 

**Critical / High Severity:**
*   **Message Delivery Stall** ([Issue #2796](https://github.com/nanocoai/nanoclaw/issues/2796)): A single corrupted `outbound.db` session aborted the entire delivery tick for all agents. *(Fix merged: PR #2797)*
*   **LLM Auth 401 in Managed Fleets** ([PR #2794](https://github.com/nanocoai/nanoclaw/pull/2794)): Breaking changes in v2.1.17 broke environment-variable gateway auth. *(Fix merged)*

**Security Vulnerabilities (Path Traversal / Escapes):**
*   **CVE-2026-29611** ([PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799)): `send_file` allowed prompt-injected or compromised agents to read any container-visible file. Awaiting merge.
*   **CWE-22 Path Traversal** ([PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800)): CLI groups create command allowed `../` folder persistence. Awaiting merge.

**Medium / Low Severity CLI Bugs:**
*   **CLI Messaging Groups Deadlock** ([PR #2804](https://github.com/nanocoai/nanoclaw/pull/2804)): `ncl messaging-groups create` universally throws a `NOT NULL` SQL constraint error.
*   **CLI Socket Memory Leak** ([PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802)): Host-side `ncl` socket transport has no timeout or response buffer cap, causing infinite hanging on dead hosts.
*   **iMessage Channel Setup** ([Issue #2791](https://github.com/nanocoai/nanoclaw/issues/2791)): Channel setup fails on fresh checkouts due to missing `mkdir`. *(Fix PR #2792 open)*

### 6. Feature Requests & Roadmap Signals
Several open PRs indicate the immediate technical roadmap:
*   **[PR #2793](https://github.com/nanocoai/nanoclaw/pull/2793) feat(agent-to-agent): per-message approval policies**: This introduces a directed, require-approval gate between communicating agents. This is a massive signal toward enterprise readiness, allowing granular security for multi-agent automated workflows.
*   **[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750) Stale Journal Recovery**: Advanced handling of READONLY `outbound.db` handles recovering from container SIGKILLs. Shows a strong push toward making the host database resilient to unexpected infrastructure violence.
*   **[PR #2717](https://github.com/nanocoai/nanoclaw/pull/2717) Atlas Cloud Integration**: Documentation expansion confirming OpenAI-compatible endpoints for Atlas Cloud, showing a commitment to multi-LLM backend support.

### 7. User Feedback Summary
Real user pain points center entirely around **infrastructure resilience**. Users operating NanoClaw at scale (in managed fleets/containers) are highly sensitive to database file-locking, journal states, and boot-time checks that don't translate well to immutable architectures. Additionally, the introduction of agent-to-agent communication policies implies that users are pushing NanoClaw beyond a single-assistant paradigm into multi-agent systems, where trust, sandboxing, and file access (as seen by the CVE fixes) are paramount. 

### 8. Backlog Watch
Maintainers should direct attention to the open security and stability PRs submitted by core contributor `sturdy4days`, which currently address critical blind spots in the CLI:
*   **[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750)**: Stale journal recovery (open since June 12, addressing issues #2516 and #2640) needs final review.
*   **[PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799) & [PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800)**: Both address severe path traversal/security flaws in the CLI and file sending utilities that bypass internal security validators.
*   **[PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802)**: Unbounded memory consumption in the CLI socket client requires urgent merging to prevent host-level denial of service.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data.

# NullClaw Project Digest
**Date:** 2026-06-18

### 1. Today's Overview
NullClaw is currently experiencing steady, bug-fixing focused activity with no new official releases. Over the past 24 hours, the community remained engaged with 3 active issues and 1 newly opened pull request. There were no PRs merged or issues closed today, indicating that the project is in a stabilization phase rather than active feature deployment. The immediate developer focus appears to be refining the user experience, specifically resolving terminal input quirks within the CLI's interactive REPL. 

### 2. Releases
*None.* 
No new versions were published today. 

### 3. Project Progress
While no pull requests were merged today, active development is underway to improve the CLI experience. 
*   **REPL Input Handling:** A notable open PR ([#960](https://github.com/nullclaw/nullclaw/pull/960)) was opened yesterday by `vernonstinebaker`. It introduces a small allocation-free line editor and implements POSIX raw-mode input. This advancement directly tackles terminal display issues by properly capturing arrow keys, cursor movement, and history navigation instead of printing them as raw control characters. Once merged, this will represent a significant quality-of-life improvement for the CLI tool.

### 4. Community Hot Topics
The most actively discussed items revolve around accessibility, usability, and daily operational hurdles:
*   **CLI Usability ([#865](https://github.com/nullclaw/nullclaw/issues/865)):** Reported by `eabase`, this has gathered recent commentary. The user expressed frustration that native keybindings (up/down/left/right) break in the CLI. *Analysis:* Power users heavily rely on command-line history and cursor navigation. Breaking standard terminal behaviors is a major workflow disruption, signaling that core UX needs prioritization.
*   **Headless Deployment ([#861](https://github.com/nullclaw/nullclaw/issues/861)):** Also reported by `eabase`, this issue highlights a knowledge gap in the community. The user struggled to understand the README documentation for setting up the Web UI on a headless VPS, asking for a "non-jargon human" explanation. *Analysis:* This indicates that NullClaw is attracting less-technical users or users new to self-hosting agents, and that current Web UI/tunneling documentation needs to be simplified and made more accessible.

### 5. Bugs & Stability
Reported bugs today are centered around deployment environments and scheduling modules:
1.  **[High] Scheduler Unauthorized Error ([#915](https://github.com/nullclaw/nullclaw/issues/915)):** User `scabros` reported that the agent's scheduler is failing across both Telegram chat and the CLI. *Severity:* High. The user has a solid local setup (Ubuntu, Ollama, RTX 3090) and tool calling works, but scheduling failures prevent autonomous/background task execution—a core feature of AI agents. *Status:* No dedicated fix PR has been submitted for this yet.
2.  **[Medium] CLI Control Character Garbling ([#865](https://github.com/nullclaw/nullclaw/issues/865)):** Arrow keys print raw control characters. *Status:* **Fix pending.** PR [#960](https://github.com/nullclaw/nullclaw/pull/960) directly addresses and resolves this bug.

### 6. Feature Requests & Roadmap Signals
*   **Improved Onboarding/UI Setup:** Derived from Issue [#861](https://github.com/nullclaw/nullclaw/issues/861), there is a clear signal that the project needs better "zero-to-one" documentation or a setup wizard for deploying the Web UI on remote servers. 
*   **Streamlined Local Integrations:** Derived from Issue [#915](https://github.com/nullclaw/nullclaw/issues/915), the scheduler needs better authentication handling for local external LLM hosts (like Ollama). 
*   *Prediction for Next Version:* The next patch/minor release will almost certainly include the merged CLI REPL fixes from PR [#960](https://github.com/nullclaw/nullclaw/pull/960). We can also expect patches addressing the scheduler authentication flow.

### 7. User Feedback Summary
*   **Use Cases:** Users are actively running NullClaw as a local, privacy-focused AI agent using powerful open-source models (e.g., Qwen3.6:27B) via Ollama. Common deployment targets include headless Ubuntu VPS environments and integration with chat platforms like Telegram.
*   **Pain Points:** The primary friction points are terminal input bugs (disrupting the CLI power-user experience) and confusing Web UI setup instructions. 
*   **Satisfaction:** Overall sentiment is cautiously optimistic—users note that core LLM functionalities and general tool calling "work fine"—but their satisfaction is dampened by auxiliary feature breakdowns (like scheduling) and CLI bugs.

### 8. Backlog Watch
*   **Issue [#915](https://github.com/nullclaw/nullclaw/issues/915) (Scheduler Bug):** Created over a month ago (May 15th) and last updated yesterday. The user has provided detailed environment specs. This critical bug currently lacks a clear path to resolution and needs maintainer triage or community contribution.
*   **Issue [#861](https://github.com/nullclaw/nullclaw/issues/861) & [#865](https://github.com/nullclaw/nullclaw/issues/865) (Documentation/CLI UX):** Both opened in April and still open. While the CLI bug has a PR incoming ([#960](https://github.com/nullclaw/nullclaw/pull/960)), the documentation request for headless Web UI setup still requires a maintainer response or documentation update.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the GitHub activity on 2026-06-18.

### 1. Today's Overview
IronClaw is exhibiting a highly active and exceptionally healthy engineering pace, processing a balanced workload of 50 updated issues and 50 updated PRs in the last 24 hours. The team is currently in a heavy stabilization and quality-assurance phase for the "Reborn" WebUI and core agent loop, having successfully merged exactly half of the open pull requests (25 PRs). Development is heavily focused on hardening security boundaries (especially for Slack and Gmail OAuth), refining the user experience for tool-approval workflows, and optimizing agent loop performance to prevent context exhaustion. There are zero new releases today, indicating an ongoing iterative sprint cycle prior to a broader version tag.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Significant forward progress was made today, particularly in UI reliability, agent execution logic, and platform integrations:
*   **Agent Loop Intelligence:** The team successfully landed a 3-PR stack redesigning the "no-progress" detection system ([PR #5000](https://github.com/nearai/ironclaw/pull/5000), [PR #4993](https://github.com/nearai/ironclaw/pull/4993)). The agent loop now honestly reports when it is stuck instead of faking a completed task, and uses new content-digest plumbing to detect actual forward progress.
*   **Tool Execution & UI:** [PR #5035](https://github.com/nearai/ironclaw/pull/5035) delivered live tool argument visibility, allowing users to see what the agent is doing *while* the tool is running. 
*   **Security & Auth Fixes:** Critical OAuth flows were stabilized. [PR #5051](https://github.com/nearai/ironclaw/pull/5051) fixed a major bug where Gmail auth-resume failures were bricking the execution driver. [PR #5052](https://github.com/nearai/ironclaw/pull/5052) brought the live Slack OAuth path to structural DM-parity for better security.
*   **Performance:** [PR #5029](https://github.com/nearai/ironclaw/pull/5029) introduced a byte budget for `read_file` to prevent context exhaustion and timeout failures, while [PR #5024](https://github.com/nearai/ironclaw/pull/5024) massively improved WebUI load times by self-hosting frontend assets and dropping CDN round-trips.

### 4. Community Hot Topics
*   **[Issue #1584](https://github.com/nearai/ironclaw/issues/1584) - WeChat channel for IronClaw (👍 3, 3 comments):** Originally requested in March, the community has generated a third-party plugin (`@tencent-weixin/openclaw-weixin`) and is actively pushing for an official IronClaw port. *Underlying need:* High demand for expanding the assistant's reach into non-Western, massively scaled messaging ecosystems.
*   **[Issue #3026](https://github.com/nearai/ironclaw/issues/3026) & [Issue #2721](https://github.com/nearai/ironclaw/issues/2721) - Engine V2 & Reborn Production Wiring (3 comments each):** Core maintainers (serrrfirat) are actively discussing "Reborn production cutover readiness" and reducing Engine V2's over-reliance on the CodeAct orchestrator path. *Underlying need:* The project is actively balancing architectural scalability with compute/cost efficiency for simple tasks.

### 5. Bugs & Stability
Today's bug reports heavily feature edge cases in the "Reborn" WebUI and automation tool workflows:
1.  **High Severity - Model Config Rejection:** [Issue #5044](https://github.com/nearai/ironclaw/issues/5044) reports that `NEARAI_MODEL=auto` results in an HTTP 400 rejection from the cloud API, completely breaking desktop sidecar initialization. 
2.  **High Severity - Security Vulnerabilities:** [Issue #4824](https://github.com/nearai/ironclaw/issues/4824) notes new RUSTSEC advisories against postgres crates (DoS vulnerabilities) are causing repo-wide `cargo-deny` CI failures.
3.  **Medium Severity - UI/Workflow Freezes:** 
    *   [Issue #5009](https://github.com/nearai/ironclaw/issues/5009): Slack OAuth path lacks structural DM-parity *(Fix merged: [PR #5052](https://github.com/nearai/ironclaw/pull/5052))*.
    *   [Issue #4986](https://github.com/nearai/ironclaw/issues/4986): Recurring automations become permanently blocked if they require tool approval.
    *   [Issue #4764](https://github.com/nearai/ironclaw/issues/4764): Denying shell approval leaves tool invocation permanently pending with no user feedback.
4.  **Low Severity - UI/UX:** [Issue #4961](https://github.com/nearai/ironclaw/issues/4961) (Working indicator stays visible post-response) and [Issue #3729](https://github.com/nearai/ironclaw/issues/3729) (Denied tool calls falsely show as successful after page refresh).

### 6. Feature Requests & Roadmap Signals
*   **Dogfooding for Engineering Productivity:** [Issue #4878](https://github.com/nearai/ironclaw/issues/4878) outlines a major strategic goal: using IronClaw itself to automate code reviews, CI triage, and merge-conflict handling. [Issue #5036](https://github.com/nearai/ironclaw/issues/5036) follows up requesting scalable infrastructure for these agent-driven engineering tasks.
*   **Enhanced IDE/Coding Capabilities:** [PR #5029](https://github.com/nearai/ironclaw/pull/5029) and [PR #5048](https://github.com/nearai/ironclaw/pull/5048) (GitHub authenticated user capability) signal that the next version will lean heavily into agentic coding workflows and deeper GitHub integration.
*   **WeChat Official Port:** [Issue #3582](https://github.com/nearai/ironclaw/issues/3582) confirms the team is actively planning to port WeChat from v1 WASM to the Reborn ProductAdapter.

### 7. User Feedback Summary
*   **Pain Point - Tool Approval Friction:** Users report that denying the agent permission to use a tool (like shell or HTTP) frequently breaks the conversation flow or leaves the UI in a "pending" state. The lack of graceful failure handling for denied automations is a major source of friction.
*   **Pain Point - UI Opacity:** Users are frustrated by the Automations dashboard ([Issue #5004](https://github.com/nearai/ironclaw/issues/5004), [Issue #4988](https://github.com/nearai/ironclaw/issues/4988)), noting that failure summaries lack actionable details and execution histories are difficult to decipher.
*   **Satisfaction - High Velocity:** The community and regular contributors (like `sunglow666` submitting deep QA reports) are highly engaged. The immediate merging of complex performance and security PRs by core maintainers shows a highly responsive and effective development lifecycle.

### 8. Backlog Watch
*   **[PR #3548](https://github.com/nearai/ironclaw/pull/3548) - DISABLE_TOOLS_LIST flag:** A massive scope XL PR opened in May that would enforce security by stripping tools from the LLM registry entirely. It requires core maintainer review for merging.
*   **[PR #4876](https://github.com/nearai/ironclaw/pull/4876) & [PR #4032](https://github.com/nearai/ironclaw/pull/4032):** Large dependency bump PRs generated by Dependabot. Given the cargo-deny CI breaks noted in [Issue #4824](https://github.com/nearai/ironclaw/issues/4824), these dependency updates urgently need to be validated and merged to restore CI health.
*   **[Issue #3729](https://github.com/nearai/ironclaw/issues/3729) - Visual bug on denied installs:** Open since mid-May, this bug misrepresents failed/denied tool installations as successful (green checkmarks) after a page refresh, posing a mild security/usability risk that needs addressing.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the provided GitHub data.

# LobsterAI Project Digest (2026-06-18)

## 1. Today's Overview
LobsterAI is demonstrating exceptionally high development velocity and robust project health, marked by the successful merging of 13 pull requests and zero outstanding active issues. The team recently shipped version `2026.6.15`, introducing major capabilities like computer use and realtime voice input. The development focus over the last 24 hours has heavily emphasized optimizing the "Cowork" feature, specifically targeting UI/UX stability (scrolling, text rendering, navigation), backend memory management, and context retention. With a 100% PR closure rate and no active bug reports in the pipeline, the project is in a highly stable and rapidly iterating state.

## 2. Releases
**LobsterAI 2026.6.15** 
This release introduces significant functional expansions and core system improvements:
*   **Computer Use capability:** Added foundational support for the agent to interact with/operate computer interfaces ([PR #2143](https://github.com/netease-youdao/LobsterAI/pull/2143)).
*   **Realtime ASR Voice Input:** Integrated into the Cowork environment for seamless, hands-free interaction ([PR #2148](https://github.com/netease-youdao/LobsterAI/pull/2148)).
*   **Context Continuity:** Major improvements to post-compaction context, ensuring the AI maintains task reliability after chat history compression ([PR #2145](https://github.com/netease-youdao/LobsterAI/pull/2145)).
*   *Migration/Breaking Notes:* None explicitly noted, but [PR #2144](https://github.com/netease-youdao/LobsterAI/pull/2144) indicates a transition to new LobsterAI portal domains for authentication and upgrades.

## 3. Project Progress
Development over the past 24 hours was primarily concentrated on the `renderer`, `cowork`, and `main` areas, focusing on polishing the newly released features:
*   **Cowork UX Enhancements:** Fixed a scroll-to-bottom positioning bug ([PR #2174](https://github.com/netease-youdao/LobsterAI/pull/2174)), reduced navigation jank in long sessions by memoizing rail items ([PR #2171](https://github.com/netease-youdao/LobsterAI/pull/2171)), and ensured user messages render correctly as plain text with preserved line breaks ([PR #2173](https://github.com/netease-youdao/LobsterAI/pull/2173)).
*   **Gateway & Performance:** Raised the V8 old-space heap limit for the OpenClaw gateway process to prevent Out-Of-Memory (OOM) crashes during heavy workloads ([PR #2149](https://github.com/netease-youdao/LobsterAI/pull/2149)).
*   **Model & Streaming Logic:** Fixed a race condition that allowed stopped startup turns to send chats ([PR #2147](https://github.com/netease-youdao/LobsterAI/pull/2147)), preserved model metadata for manually stopped streams ([PR #2154](https://github.com/netease-youdao/LobsterAI/pull/2154)), and fixed model selection conflicts for same-name packages ([PR #2153](https://github.com/netease-youdao/LobsterAI/pull/2153)).
*   **Artifact Sharing:** Implemented server-side recovery for HTML shares that were closed due to quantity limits ([PR #2172](https://github.com/netease-youdao/LobsterAI/pull/2172)).

## 4. Community Hot Topics
*Due to 0 open or recently updated issues, quantitative community engagement (comments/reactions) is minimal today. However, underlying developer needs can be analyzed from merged technical PRs:*
*   **Demand for Heavy-Duty Workloads:** The need to fix OOM crashes ([PR #2149](https://github.com/netease-youdao/LobsterAI/pull/2149)) and reduce navigation "jank" in long sessions ([PR #2171](https://github.com/netease-youdao/LobsterAI/pull/2171)) signals that power users are running extremely long, multi-channel agent sessions. 
*   **Reliability of AI Outputs:** The focus on post-compaction context continuity ([PR #2145](https://github.com/netease-youdao/LobsterAI/pull/2145)) and preserving metadata in stopped streams ([PR #2154](https://github.com/netease-youdao/LobsterAI/pull/2154)) indicates a strong need for dependable, persistent AI outputs even during gateway interruptions.

## 5. Bugs & Stability
Today's updates resolved several high-impact stability issues:
1.  **Critical - OOM Crashes:** OpenClaw gateway processes were crashing under long-running multi-channel workloads. *Fix: [PR #2149](https://github.com/netease-youdao/LobsterAI/pull/2149) (Sets explicit V8 heap limits).*
2.  **High - Race Conditions during Stop:** Startup turns were executing chats even after a user hit "stop". *Fix: [PR #2147](https://github.com/netease-youdao/LobsterAI/pull/2147).*
3.  **High - Context Loss:** Agent reliability degraded after OpenClaw compressed chat history. *Fix: [PR #2145](https://github.com/netease-youdao/LobsterAI/pull/2145) (Adds a continuity layer).*
4.  **Medium - UI Jank:** Smooth scrolling caused visual lag during long-distance navigation in Cowork. *Fix: [PR #2171](https://github.com/netease-youdao/LobsterAI/pull/2171).*
5.  **Low - Scroll position drift:** Scroll-to-bottom was misaligned with the latest message height. *Fix: [PR #2174](https://github.com/netease-youdao/LobsterAI/pull/2174).*

## 6. Feature Requests & Roadmap Signals
While no explicit feature requests were logged in issues today, the underlying codebase trajectories point to clear roadmap signals:
*   **Agentic Execution:** The introduction of "Computer Use" positions LobsterAI to compete with advanced agentic frameworks that directly interact with OS-level UIs.
*   **Multimodal Interactions:** Realtime ASR voice input signals a push toward ambient, hands-free AI assistants.
*   *Prediction for Next Release:* Further refinement of the "Computer Use" feature, specifically focusing on safe execution boundaries, UI overlay rendering for computer actions, and broader OS compatibility.

## 7. User Feedback Summary
User feedback loops are currently positive, characterized by a complete absence of active bug reports or complaints (0 open issues). The development team is highly responsive to edge-case friction—such as manually stopped streams losing their formatting context ([PR #2154](https://github.com/netease-youdao/LobsterAI/pull/2154)) and Artifact sharing hitting arbitrary limits ([PR #2172](https://github.com/netease-youdao/LobsterAI/pull/2172)). This reflects a user base that is actively pushing the limits of the platform's scaling and memory capabilities, and a maintainer team successfully keeping pace with those demands.

## 8. Backlog Watch
*   **[PR #1463](https://github.com/netease-youdao/LobsterAI/pull/1463) - [codex] fix long modal titles for issue 1435:** Created on April 4th, this PR tackled UI overflow in agent and task modal headers. Though it was finally closed/merged today, it indicates that UI scaling for custom agent names can be an overlooked area. Maintainers should ensure automated UI regression testing is applied to modal components to prevent similar backlog staleness (72+ days old) in the future.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the structured project digest for Moltis based on the GitHub data provided.

### 1. Today's Overview
As of 2026-06-18, the Moltis project exhibits active and steady development, particularly focusing on refining its voice and live interaction capabilities. Over the past 24 hours, the community generated moderate engagement with 5 updated issues and 1 new pull request. While there were no new software releases, code contributions are actively progressing to address user-reported bugs and enhance system configurability. The current activity heavily revolves around optimizing the real-time agent experience, including audio processing and RPC timeouts.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
While no PRs were merged today, active development is underway to improve system flexibility. 
*   **PR [#1130](https://github.com/moltis-org/moltis/pull/1130)** `[feat: make webui rpc timeout configurable]`: Opened by khimaros, this PR directly addresses Issue #1127. It advances the project by allowing users to tweak WebUI RPC timeouts, which is crucial for handling longer AI generation times without premature disconnections.
*   **Issue [#1128](https://github.com/moltis-org/moltis/issues/1128)** `[transcription errors with self-hosted whisper.cpp]`: This bug report was officially closed today, indicating that recent previous patches successfully resolved integration issues with self-hosted speech-to-text models.

### 4. Community Hot Topics
The most actively discussed item is **Issue [#1126](https://github.com/moltis-org/moltis/issues/1126)** `[Feature]: allow to configure the format of tts output` (by khimaros), which garnered 3 comments since its creation. This highlights a strong underlying need within the community for greater control over audio outputs, likely to optimize latency, file sizes, or compatibility with various playback environments. Another notable item is the closure of Issue #1128, which sparked discussion (1 comment) around the nuances of deploying local, self-hosted Whisper models rather than relying on cloud APIs, emphasizing the community's privacy-first and self-hosted ethos.

### 5. Bugs & Stability
*   🔴 **High Severity:** **Issue [#1129](https://github.com/moltis-org/moltis/issues/1129)** `[Bug]: lack of echo cancellation causes agent to retrigger itself in live mode`. Reported by khimaros, this is a critical stability flaw for voice-driven agents. Without proper echo cancellation, the agent's Text-to-Speech (TTS) output is picked up by the microphone, transcribed, and fed back into the LLM, creating an infinite loop of self-triggering. *No fix PR exists yet.*
*   🟢 **Resolved:** **Issue [#1128](https://github.com/moltis-org/moltis/issues/1128)** `[Bug]: transcription errors with self-hosted whisper.cpp`. This issue was closed today, resolving previous friction with local transcription integrations.

### 6. Feature Requests & Roadmap Signals
Recent feature requests signal a clear trajectory toward making Moltis a robust, customizable platform for power users:
*   **Audio/Agent Configurability:** Issue #1126 (configurable TTS formats) shows a need to support varied audio codecs or streaming formats.
*   **UI/UX Enhancements:** **Issue [#1131](https://github.com/moltis-org/moltis/issues/1131)** `[Feature]: Add copy + export as Markdown` (by vvuk) indicates a demand for better data portability, allowing users to easily extract AI responses for external use. 
*   **Network/Timeout Tuning:** Issue #1127 highlights the need for adjustable RPC limits to accommodate complex, slow-running agent tasks.

*Prediction for Next Version:* The immediate next release will likely include PR #1130 (RPC timeout configurations) and the Markdown export feature (#1131), as they are straightforward, high-value QoL improvements. 

### 7. User Feedback Summary
Real user feedback currently centers heavily around the "live mode" and local integrations. Users are highly enthusiastic about self-hosting models (like `whisper.cpp`) and utilizing live voice modes. However, they are experiencing friction with the realities of audio management—specifically, the lack of echo cancellation, which breaks the live voice experience. Furthermore, users desire a more polished, traditional chat UI experience (hence the request to export to Markdown). Overall sentiment seems technologically optimistic but slightly bottlenecked by audio-processing edge cases.

### 8. Backlog Watch
*   **Issue [#1129](https://github.com/moltis-org/moltis/issues/1129)** (Echo cancellation / self-triggering agent): As a high-severity bug that completely breaks live voice mode, this requires immediate attention from core maintainers to either implement software-based acoustic echo cancellation (AEC) or provide architectural guidance for a fix.
*   **Issue [#1126](https://github.com/moltis-org/moltis/issues/1126)** (TTS Format Configuration): With 3 comments already, this feature request is generating community buzz. Maintainers should evaluate the feasibility of expanding the TTS pipeline to support configurable output formats.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw (QwenPaw) project digest for June 18, 2026.

### 1. Today's Overview
CoPaw exhibits exceptionally high development velocity and community engagement, processing 45 issues and 50 PRs in the last 24 hours. The maintainers successfully shipped the stable **v1.1.12** alongside the alpha milestone of **v2.0.0a1**, officially kicking off the highly anticipated migration to AgentScope 2.0. While PR merge rates remain strong (35 closed/merged), the issue tracker reveals critical stability challenges on macOS and Windows desktop clients (Tauri/PyInstaller). Overall, the project is in a hyper-active transitional phase, balancing rapid feature expansion with urgent stability refinements.

### 2. Releases
**v1.1.12 (Stable)**
*   **UI/UX Overhaul**: Introduced a Models Page overhaul with provider aggregation and a unified card UI.
*   **Console Improvements**: Added a "Simple Mode" with flat navigation and a session list sorted by update time. Added session filtering by title.
*   **Performance**: Removed unnecessary deep copy operations in agent configs for faster execution.

**v2.0.0a1 (Alpha)**
*   **Breaking Change / Migration**: Marks the beginning of the backend migration from AgentScope 1.x to AgentScope 2.0 ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)). Introduces new architecture, APIs, and the runtime model for early adopter testing.

### 3. Project Progress
Significant architectural and feature advancements were merged today:
*   **macOS Stability Fix**: Addressed a high-frequency SIGSEGV crash caused by ChromaDB's Rust bindings by adding an async runtime probe with a graceful vector fallback ([PR #5271](https://github.com/agentscope-ai/QwenPaw/pull/5271)).
*   **XiaoYi (Huawei) Channel Refactor**: Completely refactored the XiaoYi connection to a dual-WebSocket architecture, fixing previous protocol and routing issues ([PR #5274](https://github.com/agentscope-ai/QwenPaw/pull/5274)).
*   **Desktop Plugin Handling**: Fixed a Tauri sidecar crash loop where frozen executables were recursively launched during plugin `pip install` ([PR #5260](https://github.com/agentscope-ai/QwenPaw/pull/5260)).
*   **Backup Resilience**: Modified the backup system to skip unreadable files (like browser caches) instead of failing the entire workspace backup ([PR #5041](https://github.com/agentscope-ai/QwenPaw/pull/5041)).

### 4. Community Hot Topics
*   **XiaoYi Channel Integration** (22 comments, [Issue #1911](https://github.com/agentscope-ai/QwenPaw/issues/1911)): Users actively troubleshooting Huawei XiaoYi connectivity. *Underlying need*: Strong demand for seamless integration into native mobile voice assistants.
*   **Context Compaction Freezes** (16 comments, [Issue #5218](https://github.com/agentscope-ai/QwenPaw/issues/5218)): Users reported process freezes when sub-agents compress context. This sparked active community discussion, leading directly to [PR #5242](https://github.com/agentscope-ai/QwenPaw/pull/5242) which adds timeout protection to `agent.reply()`.
*   **Cron/Scheduled Tasks Failing** (12 comments, [Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)): Agents generate tasks visually, but they fail to trigger. *Underlying need*: Reliable, asynchronous background task execution for persistent automation.

### 5. Bugs & Stability
*   **Critical - Cloud RCE via Prompt Injection** ([Issue #5234](https://github.com/agentscope-ai/QwenPaw/issues/5234)): Users demonstrated that prompt injection can force the cloud-deployed agent to install third-party probes, enabling Remote Code Execution (RCE). 
*   **Critical - ChromaDB SIGSEGV Crashes** ([Issue #5243](https://github.com/agentscope-ai/QwenPaw/issues/5243), [Issue #5209](https://github.com/agentscope-ai/QwenPaw/issues/5209)): macOS desktop clients experiencing crash loops (EXC_BAD_ACCESS) due to ChromaDB Rust bindings. *(Fix applied in [PR #5271](https://github.com/agentscope-ai/QwenPaw/pull/5271))*.
*   **High - Agent Death Loops** ([Issue #4967](https://github.com/agentscope-ai/QwenPaw/issues/4967)): Agents entering infinite loops during "thinking" phases, freezing the application.
*   **High - Windows Vector Index Persistence** ([Issue #5259](https://github.com/agentscope-ai/QwenPaw/issues/5259)): Memory search fails on Windows unless "Rebuild memory index on startup" is forcibly kept enabled.

### 6. Feature Requests & Roadmap Signals
Based on recent PRs and community discussions, the short-term roadmap signals are:
*   **Cross-Platform Ecosystem Migration**: The new `qwenpaw migrate openclaw` CLI command ([PR #5276](https://github.com/agentscope-ai/QwenPaw/pull/5276)) indicates a strategic push to onboard users from competing agent frameworks.
*   **Advanced Scheduling Controls**: Users want manual control over agent-created tasks ([Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)). [PR #5210](https://github.com/agentscope-ai/QwenPaw/pull/5210) adding a `cron update` command is likely to ship in the next stable release.
*   **Data Analysis Capabilities**: An ongoing mega-PR to integrate DataPaw with 12 BI skills ([PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)) will transform CoPaw from a conversational assistant into a structured data analyst.

### 7. User Feedback Summary
**Pain Points**: Desktop stability is currently the biggest source of user frustration. Transitioning CoPaw into a Tauri/PyInstaller desktop app has introduced OS-level friction—particularly around native dependencies (ChromaDB) and Python environments (plugin installation errors). Additionally, stateful features like context compaction occasionally wipe persona files ([Issue #5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)), which breaks immersion and halts ongoing tasks.

**Satisfaction**: Users are highly enthusiastic about the modularity and multi-channel capabilities (Feishu, DingTalk, XiaoYi). The rapid turnaround time by maintainers in patching regressions (e.g., fixing file download regressions in the UI) is well-received.

### 8. Backlog Watch
*   **AgentScope 2.0 Migration** ([Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)): The alpha version was just bumped today ([PR #5281](https://github.com/agentscope-ai/QwenPaw/pull/5281)). This massive architectural shift requires heavy maintainer attention to ensure plugin and channel backward compatibility.
*   **Broken Tracing in Langfuse** ([Issue #5127](https://github.com/agentscope-ai/QwenPaw/issues/5127)): Currently closed, but indicates that observability for agent ReAct loops is fragmented. As enterprise adoption grows, unified trace propagation will become critical.
*   **SafeJSONSession Concurrency** ([Issue #4232](https://github.com/agentscope-ai/QwenPaw/issues/4232)): Silent data corruption when concurrent async operations touch the same chat session. This edge case is highly detrimental and needs a robust file-locking mechanism.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-06-18.

### 1. Today's Overview
ZeroClaw is experiencing an intense phase of architectural re-platforming and feature expansion, as evidenced by massive issue and PR queues (50 active issues, 47 open PRs) and zero releases in the last 24 hours. The maintainers are clearly orchestrating several multi-PR "stacked" feature series—particularly around configuration cascades and agent memory—which is causing a temporary bottleneck in PR merges. Community engagement is exceptionally high, with users heavily debating advanced capabilities like WASM plugin lifecycles, desktop computer-use, and native channel integrations. While no new releases shipped today, the sheer volume of structural, security, and tooling PRs indicates that upcoming v0.8.x and v0.9.0 milestones are rapidly taking shape.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Project Progress
While the majority of today's activity revolves around opening new structural PRs and discussion, three pull requests were successfully merged/closed, advancing specific fixes:
*   **Heartbeat Channel Expansion:** [#7718](https://github.com/zeroclaw-labs/zeroclaw/pull/7718) was closed, successfully adding `matrix` to the supported heartbeat target channels.
*   **Telegram Reply Fix:** [#7843](https://github.com/zeroclaw-labs/zeroclaw/pull/7843) was closed, fixing a bug where users replying directly to the bot in a `mention_only=true` Telegram group were silently ignored.
*   **Stacked Config Refactors:** Developer `Nillth` pushed a massive 8-part stacked PR series ([#7842](https://github.com/zeroclaw-labs/zeroclaw/pull/7842), [#7841](https://github.com/zeroclaw-labs/zeroclaw/pull/7841), [#7840](https://github.com/zeroclaw-labs/zeroclaw/pull/7840), [#7839](https://github.com/zeroclaw-labs/zeroclaw/pull/7839)) focusing on typed delete-with-cascade and alias renames for agents, providers, and channels. This is currently in CI draft status awaiting sequential merges.

### 4. Community Hot Topics
The most active discussions center on expanding ZeroClaw's boundaries as an enterprise-grade assistant:
*   **Desktop Control Capabilities:** Issue [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (6 comments) proposes adding computer-use support (screenshots, mouse/keyboard events) to catch up with OpenAI Codex. This signals a strong user desire for ZeroClaw to evolve beyond text/channel interfaces into full local machine automation.
*   **Native GitHub Integration:** Issue [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) (6 comments) requests GitHub as a first-class channel. Users want agents natively observing PRs and issues without writing custom webhook glue, highlighting ZeroClaw's strong use-case as an automated developer assistant.
*   **WASM Plugin Lifecycle Events:** Issue [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) (1 comment, created yesterday) discusses adding `PluginCapability::Hook` to allow sandboxed WASM plugins to listen to agent turns. This shows the community's technical maturity and desire to build safe, observable extensions.

### 5. Bugs & Stability
Today's bug reports highlight critical gaps in session context and race conditions, alongside necessary security hardening:
*   **[S2] Agent Context Loss in Cron:** Issue [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) notes that agents executing scheduled cron jobs lack context for the messages they send. This is tracked as part of a larger root cause where the scheduler bypasses the main orchestrator pipeline (Issue [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)).
*   **[S1] Channel Session Race Condition:** Issue [#7753](https://github.com/zeroclaw-labs/zeroclaw/issues/7753) details a pre-existing per-session ordering race across concurrent same-sender workers, potentially corrupting chat history for simultaneous messages.
*   **Credential Redaction Breakage:** PR [#7826](https://github.com/zeroclaw-labs/zeroclaw/pull/7826) addresses a critical bug where the runtime's credential scrubbing occurred on the execution data path, breaking tool HMAC receipts and loop detectors when a tool legitimately read a secret.
*   **SSRF Vulnerability Patch:** PR [#7902](https://github.com/zeroclaw-labs/zeroclaw/pull/7902) plugs an SSRF gap by pinning `http_request` tools to vetted DNS addresses.

### 6. Feature Requests & Roadmap Signals
ZeroClaw's roadmap is heavily publicly tracked by maintainers today, giving clear signals for the next major releases:
*   **v0.8.1 / v0.8.2 (Integrations & Skills):** Issues [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) and [#7852](https://github.com/zeroclaw-labs/zeroclaw/issues/7852) track the immediate stabilization of the MCP dashboard and a unified skills/plugin platform. Users can expect much better local model routing soon, as seen in the `llama.cpp` model router request ([#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539)).
*   **v0.9.0 (Security & Gateway):** Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) establishes the tracker for massive architectural changes, including WSS boundaries, per-principal authorization, and security hardening. 

### 7. User Feedback Summary
Users are actively pushing ZeroClaw into complex, multi-platform automation workflows, leading to friction with "noisy" or unintended agent behaviors:
*   **Platform Portability:** Developers are frustrated by Unix-centric assumptions. PR [#7906](https://github.com/zeroclaw-labs/zeroclaw/pull/7906) and Issue [#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089) show pain points running ZeroClaw on Windows (shell environments, path portability).
*   **Noisy Channels:** Issue [#2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) reveals that agents literally output "NO_REPLY" sentinel text to Telegram when they have nothing to say. Issue [#6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) asks to stop sending intermediate reasoning text during Cron announcements. Users want cleaner, final-answer-only channel delivery.
*   **False Positives in Auditing:** Issue [#6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) points out that the skill audit's security check for remote markdown links is blocking legitimate knowledge plugins, frustrating developers trying to build marketplace extensions.

### 8. Backlog Watch
*   **CI Build Bottleneck:** PR [#5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) (opened April 2) and Issue [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) highlight severe friction in contribution velocity due to Rust cross-compilation caching taking 15-20 minutes per small PR. This urgently needs maintainer attention to keep the 47 currently open PRs moving.
*   **Channel Precheck Blocking:** Issue [#6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) (opened April 24) points out that the channel reply-intent precheck blocks the full agent turn on the main route model with zero visibility. This architectural bottleneck needs an accepted refactor to utilize smaller, faster models.

</details>