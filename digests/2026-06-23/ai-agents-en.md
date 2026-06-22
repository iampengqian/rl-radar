# OpenClaw Ecosystem Digest 2026-06-23

> Issues: 272 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-22 22:30 UTC

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

Here is the project digest for OpenClaw on June 23, 2026.

### 1. Today's Overview
OpenClaw is experiencing exceptionally high development velocity and community engagement, as evidenced by nearly 800 issues and PRs updated in the last 24 hours. The team recently rolled out version `2026.6.10-beta.2`, introducing dynamic "fast mode" for conversations and improved model routing. However, the project is currently facing significant stability challenges, with numerous P0 and P1 regressions related to session state management, memory store migrations, and database write-locks dominating maintainer attention. The high volume of open PRs (412) suggests a thriving contributor base but also points to a potential review bottleneck.

### 2. Releases
**v2026.6.10-beta.2**
*   **New Features:** Introduced an automatic fast mode for short conversational turns, which dynamically returns to normal mode for longer runs with bounded fallback behavior.
*   **Improvements:** Implemented more reliable model routing for Zai.
*   **Migration Note:** Users should be aware of ongoing architectural changes regarding memory stores and SQLite (see Bugs & Stability section), though no explicit breaking changes were listed in the release notes themselves.

### 3. Project Progress
Significant architectural and quality-assurance progress was made today, particularly in hardening the gateway and testing pipelines:
*   **QA & CI Overhaul:** Merged [PR #91502](https://github.com/openclaw/openclaw/pull/91502) and [PR #95872](https://github.com/openclaw/openclaw/pull/95872) to restructure CI, including moving TUI PTY tests into core node shards and making QA profile channel drivers executable. 
*   **Agent State & Recovery:** Advanced [PR #89045](https://github.com/openclaw/openclaw/pull/89045) and [PR #89800](https://github.com/openclaw/openclaw/pull/89800) to fix silent message drops and resolve WebChat session statuses.
*   **Memory & Storage Fixes:** Closed [Issue #92302](https://github.com/openclaw/openclaw/issues/92302), resolving path mangling for the QMD memory backend on Windows. Closed [Issue #95248](https://github.com/openclaw/openclaw/issues/95248), addressing a bug where `release_lane` was a no-op for live workers.

### 4. Community Hot Topics
*   **Critical Gateway Memory Leak ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588)):** A P0 bug causing the gateway's RSS to grow to 15.5GB and trigger OOM crashes has sparked significant discussion (13 comments). Users are experiencing repeated `launchd-handoff` restart cycles, blocking long-running deployments.
*   **Forced Re-embedding/Memory Relocation ([Issue #95495](https://github.com/openclaw/openclaw/issues/95495)):** The silent relocation of the memory vector store in `2026.6.9` without migration forced users to completely re-embed massive workloads. This regression has frustrated users who rely heavily on persistent context.
*   **SQLite vs. PostgreSQL Architecture ([Issue #90370](https://github.com/openclaw/openclaw/issues/90370)):** A highly supported feature request asking the team to decouple OpenClaw from its hardcoded SQLite foundation in favor of PostgreSQL to allow for `pgvector` and better high-concurrency scaling.

### 5. Bugs & Stability
*   🔴 **P0: Gateway Memory Leak ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588))** — Gateway memory usage inexplicably grows over 2-3 days until killed by the OS. *Status: Needs live repro.*
*   🔴 **P1: Session/Lane Lock Contention ([Issue #86538](https://github.com/openclaw/openclaw/issues/86538) & [Issue #95833](https://github.com/openclaw/openclaw/issues/95833))** — Write-lock timeouts on session JSONL files are blocking subagent delivery lanes. Similarly, abort-settles are failing to release `.jsonl.lock` files, permanently breaking sessions.
*   🔴 **P1: DeepSeek & NVIDIA Provider Streaming Drops ([Issue #88657](https://github.com/openclaw/openclaw/issues/88657), [Issue #95760](https://github.com/openclaw/openclaw/issues/95760))** — LLM turns are silently cutting out mid-tool-call, returning `stopReason=stop` but leaving sessions in a zombie state. 
*   🟠 **P1: Auth Rotation Burn ([PR #95676](https://github.com/openclaw/openclaw/pull/95676))** — Fix PR submitted to prevent ordinary model timeouts from instantly burning an auth-profile rotation retry.

### 6. Feature Requests & Roadmap Signals
*   **PostgreSQL Support ([Issue #90370](https://github.com/openclaw/openclaw/issues/90370)):** Enterprise and power users are pushing hard for a configurable database backend to replace SQLite. 
*   **ACP Session Skill Context Injection ([Issue #43564](https://github.com/openclaw/openclaw/issues/43564)):** Users want to natively pass `~/clawd/skills/` into spawned ACP (Codex/Pi/OpenCode) sessions. 
*   **Telegram Inline Query Support ([Issue #54794](https://github.com/openclaw/openclaw/issues/54794)):** Highly requested feature to invoke the bot in any chat via `@botname`, signaling continued investment in rich Telegram integration.
*   *Prediction:* The next versions will likely focus heavily on fixing the current regression wave of session-state bugs before introducing PG support or deep ACP skill injections.

### 7. User Feedback Summary
**Pain Points:** Users running self-hosted Docker containers and remote droplets are expressing high frustration with system stability. A notable complaint ([Issue #88087](https://github.com/openclaw/openclaw/issues/88087)) details an operator abandoning their DigitalOcean droplet due to poor UX with background tasks and silent cron wake failures. Additionally, recent updates have introduced friction for Windows and local-Lan users, specifically regarding proxy bypassing ([Issue #93807](https://github.com/openclaw/openclaw/issues/93807)) and exec access ([Issue #94032](https://github.com/openclaw/openclaw/issues/94032)).
**Positive Feedback:** Despite infrastructure growing pains, users remain highly engaged with the core agent orchestration, multi-model routing capabilities, and the new memory-wiki architectures.

### 8. Backlog Watch
*   **Plugin Trust & Security Boundary ([Issue #92516](https://github.com/openclaw/openclaw/issues/92516)):** Open for 10+ days, this P1 issue highlights that self-hosted container deployments cannot use externalized channel plugins due to strict trust-gating. Needs urgent maintainer product decisions.
*   **Inbound Message Decoration Contract ([Issue #95279](https://github.com/openclaw/openclaw/issues/95279)):** Users are requesting a trusted inbound-decoration contract to avoid using hacky, forgeable text heuristics to strip metadata. Needs security review.
*   **Core SQLite Migration ([Issue #88838](https://github.com/openclaw/openclaw/issues/88838)):** A 34-comment mega-thread tracking a massive architectural shift to migrate core transcript/plugin states via an accessor seam. Still requires extensive maintainer mapping for the 3.2 SQLite foundation.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem as of June 23, 2026.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a hyper-active state of maturation, characterized by aggressive architectural refactoring and a race to support complex, multi-agent workflows. Projects are rapidly moving beyond basic chat interfaces, heavily adopting the Model Context Protocol (MCP) and focusing on persistent memory, omnichannel messaging integrations, and autonomous "self-improving" loops. However, this rapid development velocity is introducing significant stability challenges across the board, with many core projects grappling with infrastructure-level bottlenecks such as database write-lock contentions, memory leaks, and context compaction failures. The overarching industry trajectory is a shift from localized dev tools toward highly available, multi-platform enterprise and personal deployments.

### 2. Activity Comparison
*Health Score is graded A-F based on issue resolution velocity, PR merge rates, and architectural stability.*

| Project | Issues Updated (24h) | PRs Updated (24h) | Recent Release Status | Health Score | Key Bottleneck / Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~800 | ~412 open | `2026.6.10-beta.2` | **B** | P0/P1 stability bugs (memory leaks, locks). |
| **NanoBot** | High activity | 27 (12 merged) | `v0.2.2` released | **A+** | Fastest resolution velocity; highly stable. |
| **Hermes Agent**| 50 | 50 (14 merged) | No new releases | **A** | Aggressively closing P2/P3 bugs; scaling well. |
| **PicoClaw** | High activity | 44 (34 merged) | Nightly build | **A** | Massive code churn; immediate patching. |
| **IronClaw** | 18 | 25 (18 open) | No new releases | **B-** | "Reborn" overhaul causing P0 deadlocks. |
| **CoPaw** | 22 | 50 | None (`v1.1.12.post1`) | **C+** | UI freezes; core context compaction broken. |
| **ZeroClaw** | 50 | 50 (8 merged) | No new releases | **B** | S1 workflow blockers (context limits, tool routing). |
| **LobsterAI** | Low (marking stale) | 6 merged | No new releases | **C** | High technical debt; stalled PRs. |
| **NanoClaw** | 0 | 6 (5 open) | None | **B+** | Stable but slow; large PRs waiting in backlog. |
| **NullClaw** | 0 | 2 updated | No new releases | **B** | Routine maintenance; highly stable. |

### 3. OpenClaw's Position
OpenClaw serves as the **core reference implementation** and volume leader in the ecosystem, processing nearly 800 issue/PR updates daily—dwarfing most peers. Its primary advantage is its massive contributor base and early adoption of advanced memory-wiki architectures and multi-model routing. 
*   **Technical Approach:** Unlike NanoBot (which optimizes Python `asyncio` gateways) or ZeroClaw (which is undergoing a Rust-native/Wasm rewrite), OpenClaw is currently constrained by its hardcoded SQLite foundation. This has led to severe write-lock contentions and OOM crashes, forcing the community to push aggressively for a PostgreSQL decoupling to match the enterprise database strategies of IronClaw and ZeroClaw.
*   **Community vs Peers:** While OpenClaw has the raw numbers, its signal-to-noise ratio is under strain (412 open PRs). In contrast, projects like NanoBot and Hermes Agent boast higher merge velocities and cleaner stability profiles, making them currently more reliable for production deployments despite having smaller communities.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging across the open-source agent landscape:
*   **Omnichannel Enterprise & Privacy Messaging:** Every major project is rapidly integrating messaging gateways. While Slack, Discord, and Telegram are standard (Hermes, OpenClaw), there is a massive push into Asian enterprise platforms like DingTalk, Feishu/Lark, and WeCom (LobsterAI, NanoBot). Furthermore, privacy-centric gateways like SimpleX, Wire, and Matrix are highly requested (PicoClaw, NullClaw).
*   **Standardized Tool Routing (MCP):** The Model Context Protocol is the clear winner for tool integration, but implementation is fragmented. NanoBot, CoPaw, and ZeroClaw are actively patching MCP unreliability, gateway crashes, and allowlist bypasses.
*   **Database & State Persistence:** Projects are hitting the limits of local file-based state. OpenClaw, LobsterAI, and IronClaw are all urgently refactoring synchronous SQLite/I/O operations that freeze UIs during streaming, pushing toward PostgreSQL-backed state profiles.
*   **Human-in-the-Loop & Plan Modes:** To safely deploy autonomous workflows, projects are building "Plan Modes" and granular permission models (LobsterAI, NanoClaw, IronClaw) where agents propose code or skills, requiring user approval before execution.

### 5. Differentiation Analysis
*   **Infrastructure vs. Feature Velocity:** ZeroClaw and IronClaw are differentiating through deep architectural overhauls—ZeroClaw by pursuing a hermetically built, Rust-native/Wasm plugin ecosystem to eliminate npm supply-chain risks, and IronClaw via its concurrent "Reborn" runtime.
*   **Target Audience:** LobsterAI and CoPaw are heavily focused on end-user UI/UX, pushing features like multi-agent "Cowork" plan modes and mobile-responsive web consoles. Conversely, NanoBot and Hermes Agent cater to power users with TUIs, local vLLM integrations, and smart-home (Home Assistant) automations.
*   **Hardware & OS Integration:** PicoClaw stands out by bridging the gap between software agents and physical hardware, actively integrating multimodal edge models (MiMo) and direct Android ADB device manipulation.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapidly Iterating & Maturing (NanoBot, Hermes Agent, PicoClaw):** These projects exhibit the healthest balance of high PR merge rates and immediate patching of complex bugs (e.g., NanoBot fixing streaming session poisoning). They are successfully transitioning from dev-tools to production-ready gateways.
*   **Tier 2: High Growth, High Friction (OpenClaw, IronClaw, CoPaw):** These projects have massive momentum but are being weighed down by their own scale. OpenClaw and CoPaw are facing user backlashes regarding core stability (OOM crashes and context freezes, respectively). IronClaw is actively sacrificing temporary stability to ship its massive Reborn architecture.
*   **Tier 3: Stabilizing & Niche (LobsterAI, ZeroClaw, NanoClaw, NullClaw):** These projects show moderate momentum. ZeroClaw relies on RFCs to steer complex architectural shifts, while LobsterAI struggles with a stale backlog and technical debt. NullClaw and NanoClaw represent stable, slower-moving targets focused on niche integrations.

### 7. Trend Signals
*   **The "Context Compaction" Crisis:** As agents execute deeper, multi-step workflows, managing the 200k token window is the next major frontier. Both OpenClaw and CoPaw report catastrophic failures when sub-agents trigger context summarization/compression. Future competitive advantage will lie in robust, non-blocking memory management (e.g., CoPaw's proposed SQLite-backed "scroll" context strategy).
*   **Agent Self-Evolution:** The community is showing strong interest in agents that patch themselves. IronClaw's "Hermes-style skill extraction" (autonomously writing `SKILL.md` files) and Hermes Agent's "Friday identity self-improvement loops" signal a move toward dynamically adaptive, rather than strictly pre-programmed, agent capabilities.
*   **Enterprise Observability & Cost Analytics:** As agents scale, so does cost. ZeroClaw's implementation of end-to-end `trace_id` correlation and per-call `cost_usd` tracking, alongside PicoClaw's granular LLM token tracking, indicates that observability and cost-metrics are becoming native requirements rather than afterthoughts.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for HKUDS/NanoBot for June 23, 2026.

### 1. Today's Overview
The NanoBot project is currently experiencing a hyper-active state of development, driven by an intense focus on stability, WebUI improvements, and MCP (Model Context Protocol) reliability. With 27 pull requests updated and 12 successfully merged in the last 24 hours, the maintainer team is clearly in a "squash and merge" sprint, likely finalizing the newly shipped `v0.2.2`. The community is highly engaged, contributing both bug reports for complex API streaming edge cases and substantial feature PRs for new communication channels. Overall project health appears exceptionally strong, with rapid turnaround times between issue reporting and resolution.

### 2. Releases
*   **v0.2.2 Prepared/Released:** PR [#4445](https://github.com/HKUDS/nanobot/pull/4445) bumps the package version to `0.2.2`, updates the README news section, and resolves linting issues. 
    *   *Notable Changes:* The most significant shift in this version is increasing the default context window from 65,536 tokens to 200,000 tokens (via [#4448](https://github.com/HKUDS/nanobot/pull/4448)), reflecting the modern standard for frontier LLM models.

### 3. Project Progress
The project saw massive progress in gateway stability and user experience. Key merged PRs include:
*   **Gateway Stabilization:** PR [#4454](https://github.com/HKUDS/nanobot/pull/4454) fixes foreground gateway shutdowns by properly intercepting `SIGINT`/`SIGTERM`. PR [#4456](https://github.com/HKUDS/nanobot/pull/4456) further cleans up WebSocket channel task cancellations.
*   **WebUI UX Enhancements:** PR [#4453](https://github.com/HKUDS/nanobot/pull/4453) fixed streaming output scrolling to follow active turns after a user sends a prompt. PR [#4455](https://github.com/HKUDS/nanobot/pull/4455) resolved a race condition where forked thread replies disappeared during history refreshes. PR [#4451](https://github.com/HKUDS/nanobot/pull/4451) stabilized the sent turn layout.
*   **MCP & Tooling Fixes:** PR [#4450](https://github.com/HKUDS/nanobot/pull/4450) resolved tricky AnyIO cancel-scope shutdown errors by closing MCP stdio transports directly from the agent task.
*   **WebUI Settings Optimization:** PR [#4398](https://github.com/HKUDS/nanobot/pull/4398) significantly sped up `/api/settings` route refreshes by moving OAuth token refreshes to the background.

### 4. Community Hot Topics
*   **Agent Interruptibility & Mid-Turn Messaging:** PR [#4397](https://github.com/HKUDS/nanobot/pull/4397) generated community interest by addressing how LLMs handle user interruptions during tool execution. The author implemented a "hint message" to force the LLM to pause tool chains and address the user's new input. This highlights a strong community need for more conversational, interruptible agent loops.
*   **Onboarding Complexity:** Issue [#4376](https://github.com/HKUDS/nanobot/issues/4376) (Closed) tackled the steep learning curve of the `nanobot onboard --wizard`. This signals that the project is maturing and recognizing the need to cater to non-technical users.
*   **Mattermost Integration:** PR [#4459](https://github.com/HKUDS/nanobot/pull/4459) brings a highly requested enterprise-ready channel integration, allowing real-time messaging via Mattermost WebSockets.

### 5. Bugs & Stability
*   **[Critical] Streamed Tool_Use Session Poisoning:** Issue [#4442](https://github.com/HKUDS/nanobot/issues/4442) reported that duplicate `tool_use` IDs in Anthropic-family streamed responses permanently brick user sessions (HTTP 400 errors). 
    *   *Status:* **Fixed in transit.** PR [#4443](https://github.com/HKUDS/nanobot/pull/4443) was submitted immediately to guard against duplicate IDs.
*   **[High] MCP Allowlist Bypass:** A security/functional bug was identified where `enabledTools` on MCP servers only applied to tools, silently leaking restricted resources and prompts.
    *   *Status:* **Fixed in transit.** Addressed by PRs [#4436](https://github.com/HKUDS/nanobot/pull/4436) and [#4452](https://github.com/HKUDS/nanobot/pull/4452).
*   **[High] MCP Reconnect Crashes:** Gateway crashes occurred due to AnyIO task group cancel-scope errors during MCP HTTP stream reconnects.
    *   *Status:* **Fixed in transit.** Patched in PR [#4441](https://github.com/HKUDS/nanobot/pull/4441).
*   **[Medium] Pairing Store Type Bug:** PR [#4433](https://github.com/HKUDS/nanobot/pull/4433) fixes a type-coercion bug in the pairing store that silently denied valid sender IDs.

### 6. Feature Requests & Roadmap Signals
*   **PWA Support for WebUI:** Issue/PR [#4457](https://github.com/HKUDS/nanobot/issues/4457) / [#4458](https://github.com/HKUDS/nanobot/pull/4458) requests Progressive Web App support for native-like mobile installation. *Prediction: Highly likely to be merged in v0.2.3 given its self-contained nature.*
*   **Telegram API 10.1 Rich Formatting:** Issue [#4413](https://github.com/HKUDS/nanobot/issues/4413) asks for markdown-to-Telegram rich message formatting.
*   **Advanced DingTalk Controls:** PR [#4446](https://github.com/HKUDS/nanobot/pull/4446) introduces a flag to disable 1:1 private chats on DingTalk, pointing to enterprise deployment demands.
*   **Asynchronous Subagent Models:** PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) suggests allowing subagents to spawn with configurable model presets, a strong signal toward complex, multi-agent routing architectures.

### 7. User Feedback Summary
*   **Pain Point - Context Limits:** The merging of the 200K default context window proves users were actively frustrated by losing context or hitting limits with the previous 65K default.
*   **Pain Point - Streaming Reliability:** The session-bricking bug (#4442) indicates a segment of power users heavily utilizing Anthropic models with complex, multi-tool agentic loops.
*   **Satisfaction:** The rapid response from maintainers to intricate Python `asyncio` and `AnyIO` bugs shows a highly competent maintenance team, which builds strong trust with developers deploying NanoBot in production gateway environments.

### 8. Backlog Watch
*   **Configurable Subagent Models (PR [#4291](https://github.com/HKUDS/nanobot/pull/4291)):** Open since June 11th, this substantial architectural enhancement needs a maintainer review to assess compatibility with the core agent loop.
*   **Daemon Gateway Semantic Layer (Issue [#1461](https://github.com/HKUDS/nanobot/issues/1461)):** Created in March, this feature requests a unified background daemon mode. It recently received a comment update, suggesting users are still actively looking for an OS-managed hosting experience rather than running foreground processes.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent based on the provided GitHub data.

# Hermes Agent Project Digest — 2026-06-23

## 1. Today's Overview
The Hermes Agent project is experiencing a massive surge in community engagement and active development, processing 50 issue updates and 50 pull requests in the last 24 hours alone. With a highly active 14% PR merge/close rate and 10% issue close rate daily, maintainers are aggressively triaging bugs and integrating community contributions. Activity is heavily focused on expanding platform integrations (Telegram, Discord, Facebook Messenger), hardening security boundaries, and stabilizing gateway/multiprofile architectures. The volume of "P2" and "P3" bugs being reported and fixed indicates a project in a rapid maturation phase, scaling up to handle complex, enterprise-grade multi-platform deployments. 

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Maintainers and contributors merged/closed 14 PRs today, making significant strides in system stability, cron job reliability, and security. 
Key merged/closed PRs include:
*   **[PR #51056](https://github.com/NousResearch/hermes-agent/pull/51056)**: Fixed a critical bug where `/memory approve` failed in Desktop/TUI contexts with no live agent.
*   **[PR #51060](https://github.com/NousResearch/hermes-agent/pull/51060)**: Resolved an issue where file tools incorrectly resolved `~` paths using the gateway HOME instead of the profile HOME, breaking cron jobs.
*   **[PR #50953](https://github.com/NousResearch/hermes-agent/pull/50953)**: Patched a security issue (following up on #48456) to redact credentials from TUI approval prompts.
*   **[PR #50993](https://github.com/NousResearch/hermes-agent/pull/50993)**: Fixed cron jobs to ensure they execute under their owning profile rather than the profile that picks up the tick.

## 4. Community Hot Topics
The most highly engaged issues and PRs highlight the community's desire for broader LLM provider support and improved self-improvement mechanisms.
*   **Native Google Vertex AI Support ([Issue #12639](https://github.com/NousResearch/hermes-agent/issues/12639))**: With 10 comments and 10 upvotes, this is the most actively discussed issue. Users are frustrated by OpenRouter rate limits and HTTP 402 errors and are strongly requesting direct native integration with Google/Vertex AI providers.
*   **Self-Improvement & Reasoning Loops ([PR #51054](https://github.com/NousResearch/hermes-agent/pull/51054) & [PR #49252](https://github.com/NousResearch/hermes-agent/pull/49252))**: There is heavy maintainer-level interest in "Friday identity self-improvement loops" and adaptive background reviews, pushing the agent toward autonomous skill patching and dynamic reasoning (ESCALATE_THINKING).

## 5. Bugs & Stability
Several high-priority security, platform, and infrastructure bugs were reported today, alongside crucial fix PRs:
*   **[P1 Security] Shell-escape bypasses ([PR #47936](https://github.com/NousResearch/hermes-agent/pull/47936))**: A critical PR hardening the dangerous-command denylist against all shell-escape bypass classes (bash quote removal, variable expansion, etc.).
*   **[P1 Security] Telegram Prompt Injection ([PR #41188](https://github.com/NousResearch/hermes-agent/pull/41188))**: Fixed a flaw where removed users could still inject prompts into the agent's context before auth checks fully rejected them.
*   **[P2 Bug] Telegram Token Leakage ([Issue #51029](https://github.com/NousResearch/hermes-agent/issues/51029) & [Issue #51030](https://github.com/NousResearch/hermes-agent/issues/51030))**: The multiplexer is leaking default profile bot tokens to secondary profiles, causing perpetual `getUpdates` 409 conflicts. *(Fix proposed in [PR #51064](https://github.com/NousResearch/hermes-agent/pull/51064))*
*   **[P2 Bug] Native Windows Path Breaks Terminal ([Issue #50594](https://github.com/NousResearch/hermes-agent/issues/50594))**: Starting Hermes from PowerShell/cmd stores native Windows paths in the session cwd, breaking bash execution in tools.
*   **[P2 Bug] Slack Thread Eviction ([Issue #51019](https://github.com/NousResearch/hermes-agent/issues/51019))**: Slack gateway uses Python sets with `list(set)[:N]` to evict old threads, which arbitrarily removes active threads and causes the bot to stop responding.

## 6. Feature Requests & Roadmap Signals
Users are pushing Hermes Agent into new modalities and platforms. Expect upcoming releases to focus heavily on platform plugins and architecture decoupling:
*   **New Platform Integrations**: A major push for messaging platform support, including a Facebook Messenger plugin ([PR #50997](https://github.com/NousResearch/hermes-agent/pull/50997)) and fixes for Feishu interactive cards ([PR #43048](https://github.com/NousResearch/hermes-agent/pull/43048)).
*   **Image Generation Pipeline**: Requests to route image generation through OpenRouter for models like Nano Banana and FLUX.2 ([PR #51063](https://github.com/NousResearch/hermes-agent/pull/51063)).
*   **Desktop Architecture Overhaul**: A proposal to separate WebSockets (chat) from HTTP API (admin) in the Desktop app to bring feature parity with the Web Dashboard ([Issue #51065](https://github.com/NousResearch/hermes-agent/issues/51065)).

## 7. User Feedback Summary
**Pain Points**: Windows users are experiencing friction with self-updates (`hermes.exe` locking itself, OS Error 32 — [Issue #51015](https://github.com/NousResearch/hermes-agent/issues/51015)) and native path directory limits ([Issue #38935](https://github.com/NousResearch/hermes-agent/issues/38935)). Chat context mixing and lost session text after context compression is causing confusion for heavy TUI/Desktop users ([Issue #51058](https://github.com/NousResearch/hermes-agent/issues/51058), [Issue #50713](https://github.com/NousResearch/hermes-agent/issues/50713)).

**Satisfaction & Use Cases**: Users are highly enthusiastic about running local infrastructure. Developers are successfully chaining local vLLM models (Qwen3.6) for auxiliary tasks ([Issue #20866](https://github.com/NousResearch/hermes-agent/issues/20866)) and building complex local automation hubs, such as integrating Hermes with Home Assistant and Apple AirPlay for smart home control ([Issue #50955](https://github.com/NousResearch/hermes-agent/issues/50955)).

## 8. Backlog Watch
*   **[Issue #12639](https://github.com/NousResearch/hermes-agent/issues/12639)** (Created: 2026-04-19): The request for Native Google/Vertex AI support has been open for over two months with strong community backing (10 upvotes). Maintainers should address this to alleviate OpenRouter dependency friction.
*   **[Issue #20866](https://github.com/NousResearch/hermes-agent/issues/20866)** (Created: 2026-05-06): The Jinja2 template error ("System message must be at the beginning") when using vLLM/Qwen for auxiliary tasks is over a month old and breaks local vision/compression workflows.
*   **[Issue #38488](https://github.com/NousResearch/hermes-agent/issues/38488)** & **[Issue #38053](https://github.com/NousResearch/hermes-agent/issues/38053)** (Created: Early June): Both the MCP server permanent death on transient outages and the macOS launchd update bug remain unresolved, impacting high-availability users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the GitHub data provided.

### 1. Today's Overview
PicoClaw exhibits exceptionally high development velocity and active maintenance as of June 23, 2026. In the last 24 hours alone, the project processed an impressive 44 Pull Requests (merging 34 of them) alongside the release of a new nightly build. The team is actively expanding hardware/device integrations and refining LLM provider compatibility, particularly for international and regional AI models. Despite the massive code churn, the project maintains a healthy issue-resolution cycle, evidenced by immediate patches submitted for newly reported bugs.

### 2. Releases
*   **[ nightly ] Nightly Build** (`v0.3.0-nightly.20260622.287853ab`)
    *   **Details:** This automated build represents the cutting-edge `main` branch. As typical with nightly builds, it may be unstable and is recommended for testing rather than production environments. It incorporates the massive influx of dependencies, tooling, and framework updates processed over the last 24 hours.
    *   [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.3.0...main)

### 3. Project Progress
The project saw massive structural and feature progress today, highlighted by 34 merged/closed PRs. Key advancements include:
*   **Ecosystem & Dependency Upgrades:** Bulk merges of frontend and build dependencies via Dependabot, including major updates to React/Vite plugins, ESLint, and shadcn UI.
*   **Tooling & UX:** Added installation instructions directly to the CLI skill search outputs ([PR #3152](https://github.com/sipeed/picoclaw/pull/3152)).
*   **Asynchronous Workflows:** Fixed message duplication in spawn callbacks via a new `direct_reply` parameter and `SkipInboundTurn` logic ([PR #3155](https://github.com/sipeed/picoclaw/pull/3155)).
*   **Performance & Stability:** Major backend improvements were merged, including bounded waiting for message bus backpressure ([PR #2906](https://github.com/sipeed/picoclaw/pull/2906)) and fixing crash-consistency gaps and hot-path cloning inefficiencies in the JSONL memory store ([PR #2913](https://github.com/sipeed/picoclaw/pull/2913), [PR #2907](https://github.com/sipeed/picoclaw/pull/2907)).
*   **Hardware Support:** Merged definitions for new MiMo multimodal models ([PR #2915](https://github.com/sipeed/picoclaw/pull/2915)).

### 4. Community Hot Topics
*   **[Feature] Gateway Support for SimpleX, Wire, or Tox** ([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093))
    *   *Activity:* Created June 10, updated yesterday with 3 comments and 1 upvote.
    *   *Analysis:* Users are expressing a strong need for decentralized, privacy-focused communication gateways. Integrating SimpleX, Wire, or Tox would position PicoClaw as a highly secure, self-hosted personal AI assistant for users wary of mainstream, centralized messaging platforms.
*   **Android ADB Remote Operations Tool** ([PR #3157](https://github.com/sipeed/picoclaw/pull/3157))
    *   *Activity:* Opened today by `danmobot`.
    *   *Analysis:* Expands PicoClaw's capabilities from desktop/IoT into direct Android device manipulation. This signals community demand for PicoClaw as a cross-platform automation agent, allowing direct screen tapping, UI hierarchy inspection, and text input via ADB.

### 5. Bugs & Stability
*   **Severity: High | Volcengine Doubao Seed Tool Call Leakage** ([Issue #3153](https://github.com/sipeed/picoclaw/issues/3153))
    *   *Details:* When utilizing the `doubao-seed-2.0-pro` model, tool calls occasionally fail to execute, returning raw `<seed:tool_call>` XML text directly to the user interface instead.
    *   *Status:* **Fix Available.** Developer `hanZeng-08` submitted [PR #3154](https://github.com/sipeod/picoclaw/pull/3154) on the same day to recover these leaked tool calls.
*   **Severity: Medium | Code Hardening & Crashes** 
    *   Several potential panic conditions and silent failures were addressed. The team merged fixes for unchecked type assertions in `lockStoreFile` ([PR #3053](https://github.com/sipeed/picoclaw/pull/3053)) and native search options ([PR #3091](https://github.com/sipeed/picoclaw/pull/3091)), improving overall runtime stability.

### 6. Feature Requests & Roadmap Signals
*   **Decentralized Messaging Gateways** ([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)): SimpleX/Wire integration is highly requested and aligns with the open-source community's privacy ethos.
*   **Granular LLM Token Tracking** ([PR #3156](https://github.com/sipeed/picoclaw/pull/3156)): A new feature proposing to emit real per-turn LLM token usage on finalized assistant messages. This signals a roadmap push towards better cost-visibility and analytics for users operating heavy local agent workflows.
*   **Pico WebSocket Mode** ([PR #3118](https://github.com/sipeed/picoclaw/pull/3118)): Introduces a remote mode to the `picoclaw agent` command via WebSockets, hinting at future architectures where PicoClaw acts as a headless, server-based agent controlled remotely.

### 7. User Feedback Summary
Real user feedback highlights friction when working with non-OpenAI standard LLM providers. The Volcengine Doubao bug ([Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)) reveals that users are actively testing PicoClaw with diverse regional models and expect seamless, standardized tool-calling functionality regardless of the underlying LLM. Additionally, the request for decentralized gateways underscores a user base that values extreme privacy, self-hosting, and manual hardware control (evidenced by the Android ADB PR).

### 8. Backlog Watch
*   **Stale Dependency Bumps:** Several Dependabot PRs, including the Vite bump ([PR #3101](https://github.com/sipeed/picoclaw/pull/3101)) and typescript-eslint bump ([PR #3103](https://github.com/sipeed/picoclaw/pull/3103)), are marked as `[stale]` and need maintainer review or closure.
*   **Stale Code Hygiene PRs:** Developer `chengzhichao-xydt` has open, stale PRs for tool schema type assertions ([PR #3131](https://github.com/sipeed/picoclaw/pull/3131)) and web integration error handling ([PR #3128](https://github.com/sipeed/picoclaw/pull/3128)) that require review to prevent the backlog of technical debt from growing.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the structured project digest for the NanoClaw project based on the provided GitHub data.

### 1. Today's Overview
NanoClaw exhibits moderate-to-high development activity with a clear focus on expanding communication integrations and refining agent operability. Over the last 24 hours, the project saw no new releases, issue filings, or bug reports, but maintainers and community contributors actively pushed **6 Pull Requests** (5 currently open, 1 closed). The development vector is heavily skewed toward adding new messaging channels (Telegram, IMAP/SMTP), enhancing human-in-the-loop approval workflows, and fixing system-level hygiene issues. Overall project health appears stable, with active iteration on edge-case bugs and system robustness.

### 2. Releases
*None.* 
No new versions were published in the last 24 hours. The project remains on its current stable version.

### 3. Project Progress
Developers made steady progress on utility enhancements, agent feedback loops, and integration testing today:
*   **Telegram Integration Closed:** PR [#2831](https://github.com/nanocoai/nanoclaw/pull/2831) by `aarchh` was closed. Tagged as a verified working feature skill for v2.1.1, this closure indicates the integration was either merged into a development branch or successfully tested and queued for a future release.
*   **Enhanced Agent Approvals:** PR [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) by `moshe-nanoco` introduces a "Reject with reason…" feature for module approval cards, allowing human approvers to send contextual feedback back to the AI agent.
*   **System Maintenance Update:** PR [#2830](https://github.com/nanocoai/nanoclaw/pull/2830) by `amit-shafnir` advances a critical fix for the OS service registry, targeting abandoned launchd/systemd plists left behind by deleted checkouts.

### 4. Community Hot Topics
Community activity today was entirely PR-focused, highlighting strong external contributor interest in expanding NanoClaw's integration ecosystem:
*   **PR [#1235](https://github.com/nanocoai/nanoclaw/pull/1235) (feat: add IMAP/SMTP email integration):** Authored by `aronjanosch`. This is a massive community contribution that exposes 6 MCP tools via an `imap-mcp-stdio` subprocess. *Underlying need:* Users want to transform NanoClaw into a fully autonomous personal assistant capable of polling, reading, and managing native email inboxes without manual intervention.
*   **PR [#2795](https://github.com/nanocoai/nanoclaw/pull/2795) (feat: add /add-clidash):** Authored by `leetwito`. This utility skill introduces a read-only CLI-derived dashboard. *Underlying need:* Users require better, localized visibility into agent state and telemetry during active sessions.

### 5. Bugs & Stability
While no new bug issues were filed today, two significant open PRs address system-level stability and user experience regressions:
1.  **[High Severity] Dead Peer Service Accumulation (Fix exists):** PR [#2830](https://github.com/nanocoai/nanoclaw/pull/2830) fixes a problem where uninstalling NanoClaw without its uninstaller causes OS services to infinitely attempt launching a missing `dist/index.js` binary. This causes system resource bloat over time.
2.  **[Medium Severity] Duplicate Text Emission (Fix exists):** PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) addresses an edge-case bug in the poll-loop where firing `send_message` mid-turn results in duplicated text outputs. 

### 6. Feature Requests & Roadmap Signals
Based on recent PR activity, the short-term roadmap is heavily focused on **Multi-Channel Integration** and **Agent-Human Interaction loops**:
*   **Omnichannel Capabilities:** The progression of IMAP/SMTP ([#1235](https://github.com/nanocoai/nanoclaw/pull/1235)) and Telegram ([#2831](https://github.com/nanocoai/nanoclaw/pull/2831)) signals that the next major version will likely position NanoClaw as a cross-platform assistant, not just a localized agent. 
*   **Agent Course-Correction:** The "Reject with reason" feature ([#2832](https://github.com/nanocoai/nanoclaw/pull/2832)) suggests a roadmap pivot toward more sophisticated, multi-turn human-in-the-loop workflows, where agents learn and adapt from approver feedback dynamically.

### 7. User Feedback Summary
Real-world user feedback extracted from today's code changes points to a few clear use cases and pain points:
*   **Use Cases:** Users are actively trying to deploy NanoClaw for autonomous email triage and as a lightweight messaging bot (Telegram). Furthermore, the CLI dashboard PR shows power users are running NanoClaw heavily via terminal interfaces and need real-time visual feedback.
*   **Pain Points:** A major friction point is "clean uninstalls." The dead peer service bug ([#2830](https://github.com/nanocoai/nanoclaw/pull/2830)) highlights that power users are frequently spinning up, testing, and deleting multiple checkouts of NanoClaw, indicating a highly technical user base that pushes local environments to their limits.

### 8. Backlog Watch
*   **PR [#1235](https://github.com/nanocoai/nanoclaw/pull/1235) (IMAP/SMTP Email Integration):** Created on March 18, 2026, this PR is approaching 3 months in the backlog. Given its massive scope (6 MCP tools, account management, subprocess architecture), it urgently requires maintainer review or updated feedback to prevent contributor abandonment.
*   **PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) (Duplicate Text Fix):** Created on May 18, 2026, this community bug fix has been sitting open for a month. Since it fixes a visible UX regression (duplicate text mid-turn), it should be prioritized for code review and merging to stabilize the user experience.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-23

### 1. Today's Overview
NullClaw shows a moderate but steady maintenance trajectory as of June 23, 2026. Project activity in the last 24 hours was strictly focused on engineering and dependency updates, with two pull requests updated but no new issues, releases, or merged code. The lack of new issues suggests the project is currently stable, though the open PRs indicate ongoing under-the-hood improvements, specifically regarding messaging channel reliability and environment infrastructure. Overall project health appears stable, with maintenance actively fending off technical debt.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
*No pull requests or issues were merged or closed today.*
However, two active pull requests saw updates:
*   **Matrix Integration Resilience:** Substantial progress was made on PR [#968](https://github.com/nullclaw/nullclaw/pull/968), which addresses state persistence. The addition of test environment isolation indicates a push toward hardening the messaging subsystem against data loss during routine restarts.
*   **Container Security & Base Updates:** Dependabot PR [#956](https://github.com/nullclaw/nullclaw/pull/956) was bumped/updated, proposing a transition from Alpine 3.23 to 3.24. This ensures the project's Docker base images remain secure and up-to-date.

### 4. Community Hot Topics
Community engagement (measured by issues and PR comments/reactions) was minimal in the last 24 hours. 
*   The most notable item is PR [#968](https://github.com/nullclaw/nullclaw/pull/968) by `addadi`. While lacking in emojis or comments, the technical summary points to a significant underlying need: **reliable state persistence for Matrix communications**. AI assistants risk processing duplicate user prompts or missing context if sync cursors (`next_batch`) are lost during container restarts, making this a critical area of focus for the maintainer team.

### 5. Bugs & Stability
Based on the last 24 hours of data, one major stability concern was identified via a PR description:
*   **[Medium/High Severity] Matrix Sync State Loss on Restart:** Detailed in [PR #968](https://github.com/nullclaw/nullclaw/pull/968), the Matrix channel previously stored its `/sync` cursor (`next_batch`) exclusively in RAM. Upon any restart, this triggered an initial sync, resulting in duplicated processing or state disruption. **Status:** A fix PR is currently open and awaiting review/merge. No runtime crashes were reported.

### 6. Feature Requests & Roadmap Signals
*No new feature requests were logged in the past 24 hours.* 
However, the active development signals a roadmap heavily weighted toward **infrastructure reliability and CI/CD hygiene**. By implementing test environment isolation (PR #968) and keeping Docker dependencies strictly updated (PR #956), the team is building the groundwork necessary for deploying highly available personal AI assistants. 

### 7. User Feedback Summary
Direct user feedback is currently quiet, with zero new issues created in the last 24 hours. Based on the codebase activity, the primary "user" (or deployer) pain point currently being addressed is the annoyance of duplicated message syncing or lost AI context after server/restart events. The current trajectory shows developers are proactively patching these operational annoyances before they become widespread user complaints.

### 8. Backlog Watch
The following items require maintainer attention to keep the project moving forward:
*   **[PR #968](https://github.com/nullclaw/nullclaw/pull/968) - fix(matrix): persist next_batch across restart:** Needs code review and merging. It has been open since June 22 and resolves a significant state-persistence flaw.
*   **[PR #956](https://github.com/nullclaw/nullclaw/pull/956) - ci(deps): bump alpine from 3.23 to 3.24:** A routine but necessary dependency bump from Dependabot that has been awaiting merge since June 15. Clearing this will help prevent CI pipeline blooming.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the provided GitHub data.

# IronClaw Project Digest — 2026-06-23

## 1. Today's Overview
The IronClaw project is currently experiencing highly active development, driven by the "IronClaw Reborn" initiative (a major overhaul of the agent runtime and WebUI). The repository saw significant momentum over the last 24 hours with 18 issues updated (14 open) and 25 PRs updated (18 open). Core contributors like `serrrfirat`, `italic-jinxin`, and `henrypark133` are merging substantial architectural refactors, while the team heavily emphasizes internal "dogfooding" to stabilize the Reborn engine. The project is in a rapid iteration phase, actively balancing massive feature drops (like self-evolving skills and concurrent executions) with aggressive performance tuning and bug fixing.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Several major features and architectural improvements advanced through merged and closed PRs today:
*   **Concurrent Execution ([PR #5085](https://github.com/nearai/ironclaw/pull/5085)):** Reborn's runtime can now execute turn runs concurrently via `TurnRunScheduler` with per-user/per-type caps, eliminating a massive bottleneck where LLM inferences ran strictly serially.
*   **Granular Approval Permissions ([PR #5062](https://github.com/nearai/ironclaw/pull/5062) & [PR #5063](https://github.com/nearai/ironclaw/pull/5063)):** Implemented a DB-backed global auto-approve setting and a per-tool permission model (`always_allow`, `ask_each_time`, `disabled`) that works without requiring runtime restarts. 
*   **Architecture Refactoring ([PR #5137](https://github.com/nearai/ironclaw/pull/5137)):** Core contributor `serrrfirat` initiated the decomposition of the massive `ironclaw_reborn_composition` god-crate (~132k lines) into smaller, focused crates.
*   **Trigger & Error Handling ([PR #5140](https://github.com/nearai/ironclaw/pull/5140)):** Fixed opaque `builtin.trigger_create` failures, allowing structured error repair details to surface to the runtime.
*   **Admin Usage Tracking ([Issue #4985](https://github.com/nearai/ironclaw/issues/4985)):** Fixed an issue where `ENGINE_V2=true` deployments returned empty LLM usage data for admins.

## 4. Community Hot Topics
*   **Reborn Performance & Latency ([Issue #5125](https://github.com/nearai/ironclaw/issues/5125)):** A major parent tracker was opened to tackle local Reborn slowness. It branches into specific sub-tasks for latency logging ([#5126](https://github.com/nearai/ironclaw/issues/5126)), inference tuning ([#5127](https://github.com/nearai/ironclaw/issues/5127)), and reducing unnecessary agent steps ([#5128](https://github.com/nearai/ironclaw/issues/5128)). This indicates the team is heavily focused on UX speed.
*   **Agent Self-Evolution ([PR #5061](https://github.com/nearai/ironclaw/pull/5061)):** A highly engaging PR from contributor `krishna-505` introduces "Hermes-style skill extraction," allowing the agent to autonomously write, install, and store `SKILL.md` files after successful tasks. 
*   **Weekly Local Dogfooding Aggregation ([Issue #5119](https://github.com/nearai/ironclaw/issues/5119)):** Maintainer `think-in-universe` continues the weekly tradition of compiling local usability bugs, showing a strong quality-assurance feedback loop.

## 5. Bugs & Stability
*   🔴 **Critical Regression - Agent Hanging ([Issue #5139](https://github.com/nearai/ironclaw/issues/5139)):** A recent merge to `main` wedges web/research tasks at initialization (making 0 LLM calls). This resulted in a 14% task failure rate on the PinchBench daily benchmark. Requires immediate attention.
*   🔴 **Nightly E2E Test Failure ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)):** Automated CI run for Full E2E failed against the `v2-engine`.
*   🟡 **UI Credential Loop ([Issue #4925](https://github.com/nearai/ironclaw/issues/4925) - Closed):** The NEAR AI MCP indicated "SETUP NEEDED" and prompted for credentials despite already being configured and ready.
*   🟡 **Auto-Approve Bypass ([Issue #5129](https://github.com/nearai/ironclaw/issues/5129)):** The global "Always approve" setting is failing for the `outbound_delivery_target_set` capability. *(Note: Root cause and resolution pathways were likely addressed today via the merging of permission override PRs #5062 and #5063).*

## 6. Feature Requests & Roadmap Signals
Several forward-looking features and architectural shifts are signaling the immediate roadmap:
*   **External Model & Tool Integration ([PR #5094](https://github.com/nearai/ironclaw/pull/5094)):** Lays the foundation for OpenAI-compatible external tools and a `/v1/models` surface. This signals IronClaw is preparing to act as an open, protocol-compliant host for third-party agents.
*   **Expanded Channel Support ([Issue #5124](https://github.com/nearai/ironclaw/issues/5124)):** Telegram is being migrated from the legacy v1 channel path to the Reborn `ProductAdapter` path.
*   **Hosted Single-Tenant DB ([PR #5081](https://github.com/nearai/ironclaw/pull/5081)):** The introduction of a PostgreSQL-backed durable state profile indicates an imminent transition from local/dev previews to narrow hosted cloud deployments.
*   **Workflow Automations:** New support for deleting ([Issue #5122](https://github.com/nearai/ironclaw/issues/5122)) and pausing/resuming ([Issue #5121](https://github.com/nearai/ironclaw/issues/5121)) background automations natively in WebUI v2.

## 7. User Feedback Summary
Real-world friction centers heavily on first-run setup and complex system permissions. Users report friction with credential and setup prompts appearing redundantly in the WebUI (as seen in #4925). There is also clear feedback that the agent's new concurrent and complex Reborn runtime is introducing performance latency and occasional deadlocks (#5139), prompting users to call for better latency attribution logging. Overall, users are highly engaged with the cutting-edge Reborn engine but are encountering traditional "rapid-growth" bugs related to UI state, permissions, and startup configurations.

## 8. Backlog Watch
*   **[PR #4787](https://github.com/nearai/ironclaw/pull/4787) - Barcelona Hackathon Fork:** Open since mid-June, this massive PR is maintained by a community member stabilizing the project for a hackathon. It needs final maintainer review or alignment to prevent long-term ecosystem fragmentation.
*   **[PR #4712](https://github.com/nearai/ironclaw/pull/4712) - Move Slack setup into WebUI:** A highly requested architectural UX change (removing TOML config for Slack in favor of in-app UI) that has sat open since early June. It risks blocking users who want easy Slack channel integration.
*   **[PR #4969](https://github.com/nearai/ironclaw/pull/4969) - Google WASM Auth Errors:** A fix for `auth_required` errors in bundled Google tools (Drive, Docs, Sheets) that has been waiting for an extended period.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the provided GitHub data.

# 🦞 LobsterAI Project Digest (2026-06-23)

## 1. Today's Overview
LobsterAI is currently experiencing a high-velocity development phase, evidenced by a batch of 6 merged pull requests today focused on expanding agentic workflows and core architecture. Conversely, the issue tracker and several older pull requests are showing signs of stagnation, with active issues being marked as stale. The project's immediate focus is clearly on the "Cowork" feature and "OpenClaw" plugin architecture, pushing the boundaries of multi-agent collaboration and IM integrations. However, technical debt related to UI/UX and database performance optimizations seems to be piling up in the backlog.

## 2. Releases
**No new releases were published today.**

## 3. Project Progress
The development team merged 6 PRs today, making significant strides in the application's collaborative and plugin architectures:
*   **Plan Mode Workflow:** [PR #2183](https://github.com/netease-youdao/LobsterAI/pull/2183) successfully introduced a "Plan Mode" to the Cowork composer. This allows proposed plans to be rendered as interactive blocks that users can copy, download, approve, or collapse, preventing premature tool execution.
*   **IM Plugin Upgrades:** [PR #2182](https://github.com/netease-youdao/LobsterAI/pull/2182) upgraded preinstalled OpenClaw IM plugins (DingTalk, Lark/Feishu, WeCom, POPO) to support the new 2026.6.1 install layouts.
*   **OpenClaw Core Fixes:** Multiple quick merges addressed metadata expectations ([PR #2187](https://github.com/netease-youdao/LobsterAI/pull/2187)), NIM plugin runtime entries ([PR #2186](https://github.com/netease-youdao/LobsterAI/pull/2186)), and reply option patches ([PR #2185](https://github.com/netease-youdao/LobsterAI/pull/2185)).
*   **Documentation:** [PR #2184](https://github.com/netease-youdao/LobsterAI/pull/2184) updated repository guidelines to reflect the new Cowork/OpenClaw architecture and quality gates.

## 4. Community Hot Topics
While the latest issues were marked stale, underlying themes from the community point towards localized friction with the desktop app's presentation layer:
*   **Dashboard Inaccuracy:** Users are highly focused on the "Profile/Overview" page. [Issue #1414](https://github.com/netease-youdao/LobsterAI/issue/1414) highlights that the "Total Sessions" metric is stuck at 0 despite clear API usage, indicating a disconnect between backend tracking and frontend display.
*   **i18n and Responsive UI:** [Issue #1416](https://github.com/netease-youdao/LobsterAI/issue/1416) shows frustration with UI breaking when switching to English. The frontend containers lack flexbox/responsive sizing to accommodate longer English strings, leading to overlapping text in the "Current Plan" card.
*   **Skill Overcrowding:** [Issue #1413](https://github.com/netease-youdao/LobsterAI/issue/1413) notes that the chat input area becomes visually unfriendly and cluttered when users attach a high number of "skills".

## 5. Bugs & Stability
Several critical bugs have been identified (many with open fix PRs), impacting both stability and performance:
1.  **[High] Cron Job Event Storms & Ghost Events:** [Issue #1420](https://github.com/netease-youdao/LobsterAI/pull/1420) details concurrency flaws in `CronJobService.pollOnce()` that cause event duplication if the gateway response takes longer than 15 seconds. *(Fix exists in open PR #1420)*.
2.  **[High] Database I/O Blocking:** The `SqliteStore.set()` function writes synchronously to disk on every update. During streaming responses (like Cowork sessions), this blocks the Node.js event loop, causing severe UI freezes. *(Fix exists in open PR #1410 via debounced batch writing)*.
3.  **[High] OOM Vulnerability:** The OpenClaw Token Proxy lacks request body size limits, allowing any local process to trigger Out-Of-Memory crashes via massive payloads. *(Fix exists in open PR #1407)*.
4.  **[Medium] Missed Cron History:** [Issue #1409](https://github.com/netease-youdao/LobsterAI/issue/1409) reports scheduled tasks triggered overnight failing to generate history records.
5.  **[Low] Overview Filter Dead UI:** The "Past 30 days" time selector on the profile page is non-responsive to clicks ([Issue #1411](https://github.com/netease-youdao/LobsterAI/issue/1411)).

## 6. Feature Requests & Roadmap Signals
*   **Robust Multi-Agent Planning:** The merge of "Plan Mode" ([PR #2183](https://github.com/netease-youdao/LobsterAI/pull/2183)) signals a strong push towards making LobsterAI a safe, interactive agentic assistant where users can review and approve multi-step actions before execution.
*   **Deeper Enterprise IM Integration:** The continuous stream of fixes for NIM (NetEase Yunxin) and upgrades to DingTalk/Lark/WeCom plugins suggest a roadmap heavily leaning towards making LobsterAI a deployable, cross-platform enterprise bot. 
*   **Advanced Memory Management:** [PR #1415](https://github.com/netease-youdao/LobsterAI/pull/1415) and [PR #1421](https://github.com/netease-youdao/LobsterAI/pull/1421) indicate ongoing work to transition legacy memory systems into structured databases with caching and safe migration paths—paving the way for persistent, long-term AI personalization.

## 7. User Feedback Summary
Real user feedback highlights a dichotomy in the project's maturity. On one hand, power users are deeply engaged with complex agentic features like streaming Cowork sessions, scheduled tasks, and custom skills. On the other hand, there is visible dissatisfaction with basic frontend QA—users feel that core metrics (like usage statistics) are broken, and that the UI is heavily optimized for Chinese text while neglecting English adaptations. Performance jitters during streaming responses also remain a tangible pain point.

## 8. Backlog Watch
Several high-value, technically sound community PRs and issues are aging out into "stale" status and urgently require maintainer review:
*   **[PR #1419](https://github.com/netease-youdao/LobsterAI/pull/1419):** Fixes a critical NIM group type enum mapping error, breaking normal vs. super group name queries. (Stale since April)
*   **[PR #1408](https://github.com/netease-youdao/LobsterAI/pull/1408):** Addresses unhandled Promise rejections in the MCP Bridge Server that can crash the application. (Stale since April)
*   **[Issue #1414](https://github.com/netease-youdao/LobsterAI/issue/1414) & [Issue #1411](https://github.com/netease-youdao/LobsterAI/issue/1411):** Core profile/dashboard UI bugs that directly impact the user's ability to track their own usage and billing. 
*   **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277):** Dependabot PR bumping Electron from 40.2.1 to 42.4.0 has been sitting open, potentially blocking vital security and performance updates for the desktop wrapper.

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

Here is the structured project digest for CoPaw (QwenPaw) based on the provided GitHub data.

# CoPaw (QwenPaw) Project Digest
**Date:** 2026-06-23

### 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing a highly active period, driven heavily by a massive frontend responsiveness overhaul and critical backend bug fixes. In the last 24 hours, the community generated 22 active issues and a staggering 50 pull requests, indicating a very engaged open-source community and fast iteration cycle. A significant portion of recent PRs comes from first-time contributors focusing on mobile UI adaptations, addressing widespread user complaints about console usability. However, the project is currently facing stability challenges in its latest release (`v1.1.12.post1`), with critical regressions identified in agent communication, UI rendering, and context compaction requiring immediate maintainer attention.

### 2. Releases
No new releases were published in the last 24 hours. The project currently remains on version `v1.1.12.post1`. Given the volume of bug fixes and UI PRs currently in the pipeline, a patch release is likely imminent.

### 3. Project Progress
The development focus today was sharply divided between **Mobile/Console UI Responsiveness** and **Backend Stability/Runtime fixes**. 
*   **UI Overhaul Pushed:** Contributor `yaozy2020` single-handedly submitted 9 PRs (#5362, #5364, #5369, #5381, #5382, #5383, #5384, #5385, #5355) adapting nearly every console page (Sessions, Channels, Environments, Workspace, ACP, MCP) for mobile devices (≤768px viewports). 
*   **Security & Runtime Merged:** Maintainer `ekzhu` merged two important closed PRs: PR [#5028](https://github.com/agentscope-ai/CoPaw/pull/5028) isolating keychain master keys per installation (preventing dev/prod key collisions), and PR [#5027](https://github.com/agentscope-ai/CoPaw/pull/5027) stopping backend-warmup sessions from polluting the user's chat history.
*   **Advanced Features in Review:** A major new feature is under review in PR [#5321](https://github.com/agentscope-ai/CoPaw/pull/5321) by `niceIrene`, introducing a "scroll" context-management strategy that uses SQLite to persist full conversation history and allow on-demand recall, replacing native summarization.

### 4. Community Hot Topics
*   **Context Compaction Freezes (17 comments):** Issue [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218) blew up today. Users are deeply frustrated by the QwenPaw process completely freezing when sub-agents trigger context compaction, requiring manual restarts. This is a severe blocker for long-running agentic workflows.
*   **Configuration Persistence (9 comments):** Issue [#5262](https://github.com/agentscope-ai/CoPaw/issues/5262) highlights a persistent annoyance: disabled built-in skills (like `docx`, `xlsx`) automatically re-enable upon every version upgrade. This undermines user trust in the system's configuration management.
*   **Message Queue Mixing (4 comments):** Issue [#5354](https://github.com/agentscope-ai/CoPaw/issues/5354) points out a UX flaw where message queues cross-contaminate; if a user sends a queued message to Agent A and switches to Agent B, the message erroneously executes on Agent B.

### 5. Bugs & Stability
Ranked by severity for the current `v1.1.12.post1` version:
1.  **Critical - Context Compaction Freeze:** Issue [#5218](https://github.com/agentscope-ai/CoPaw/issues/5218). Sub-agent context compaction breaks the entire application. No merged fix yet.
2.  **Critical - API Silently Drops Messages:** Issue [#5344](https://github.com/agentscope-ai/CoPaw/issues/5344). When an agent is busy, `POST /api/console/chat` returns HTTP 200 but silently discards the message. Severe implications for multi-agent interactions.
3.  **High - Console File/Image Rendering 404s:** Issues [#5370](https://github.com/agentscope-ai/CoPaw/issues/5370) (HTTP 404 on file preview) and [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320) (Images sent via `send_file_to_user` not displaying post-upgrade). 
4.  **High - Cron Scheduler Stops:** Issue [#5398](https://github.com/agentscope-ai/CoPaw/issues/5398). Scheduled cron jobs stop executing while the app remains alive, breaking automated agent tasks.
5.  **Medium - Zhipu API Routing Failure:** Issue [#5330](https://github.com/agentscope-ai/CoPaw/issues/5330). Provider-level API tests succeed, but model-level tests fail for all Zhipu models due to suspected model name routing issues.
6.  **Medium - UI Vendor TypeError:** Issue [#5358](https://github.com/agentscope-ai/CoPaw/issues/5358). Session switching occasionally throws `TypeError: Cannot read properties of null` in the frontend vendor bundle.

### 6. Feature Requests & Roadmap Signals
Several distinct roadmap signals emerged from user requests today:
*   **Workspace-Agent Decoupling:** Issue [#5392](https://github.com/agentscope-ai/CoPaw/issues/5392) requests decoupling agents from specific workspaces, allowing a single agent to operate across or be switched between different environments. 
*   **Advanced Memory Consolidation:** Issue [#5387](https://github.com/agentscope-ai/CoPaw/issues/5387) requests "recall-aware" memory consolidation, suggesting that the system shouldn't just save memories based on frequency, but on meaningful human recall patterns.
*   **Native Knowledge Base:** Issue [#2969](https://github.com/agentscope-ai/CoPaw/issues/2969) strongly pushes for an integrated personal knowledge base (RAG) directly accessible from the CoPaw console.

*Prediction:* The next version will likely heavily feature the mobile UI fixes currently flooding the PR queue. Following that, backend focus will probably shift to fixing the API message dropping (#5344) and refining the memory/context handling mechanisms.

### 7. User Feedback Summary
**Pain Points:**
*   **App Stability:** Users are experiencing frequent UI freezing, missing media rendering, and UI state bugs (e.g., text boxes showing ready states when the agent is stuck).
*   **Version Upgrades:** The upgrade process is friction-heavy. Users are frustrated that system configurations (like disabled skills) reset upon updating. 
*   **Python Dependency Hell:** Issue [#5317](https://github.com/agentscope-ai/CoPaw/issues/5317) notes that Tauri desktop users are losing access to their Python environments, breaking custom skills execution.

**Satisfaction/Dissatisfaction:** 
Users generally love the addition of the message queue and the core agent capabilities (noting they "greatly improve efficiency"), but feel the project is moving too fast without stabilizing core features. A meta-issue, [#5360](https://github.com/agentscope-ai/CoPaw/issues/5360) ("Stabilize the core app before adding new features"), captures the community's desire for a dedicated polish and stabilization cycle.

### 8. Backlog Watch
*   **Config Migration from Competitors:** Issue [#5254](https://github.com/agentscope-ai/CoPaw/issues/5254) asks for a migration tool from OpenClaw / Hermes setups. This is a highly strategic feature for user acquisition but remains unanswered by maintainers.
*   **Agent Interaction State:** Issue [#5333](https://github.com/agentscope-ai/CoPaw/issues/5333) highlights a state desync where the UI allows new inputs while the agent is stuck processing. Needs core dev attention.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-06-23.

# ZeroClaw Project Digest: 2026-06-23

## 1. Today's Overview
ZeroClaw is currently exhibiting exceptionally high development velocity, driven by intense structural refactoring and security hardening in preparation for the v0.9.0 milestone. Over the past 24 hours, the project managed a massive active workload of 50 updated issues and 50 updated pull requests, with 8 PRs successfully merging. The contributor base is heavily focused on tightening supply-chain security, overhauling the plugin architecture toward WebAssembly (Wasm), and expanding multi-channel observability. However, this rapid iteration is introducing notable regressions in core agent workflows, particularly regarding context management, MCP tool routing, and provider integrations.

## 2. Releases
No new releases were recorded today. The project remains on its current active development cycle, with Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) indicating heavy coordination toward the v0.9.0 milestone (auth, security, gateway boundaries, and breaking changes). 

## 3. Project Progress
A total of 8 PRs were closed/merged today, advancing several critical infrastructure and feature tracks:
*   **Model Catalog Resolution Fixed:** PR [#8165](https://github.com/zeroclaw-labs/zeroclaw/pull/8165) (and duplicate [#8097](https://github.com/zeroclaw-labs/zeroclaw/pull/8097)) resolved an issue where the `model_switch` tool relied on a hardcoded, stale model list. It now fetches live data from models.dev with a secure offline fallback.
*   **Plugin Sandboxing Advanced:** PR [#8137](https://github.com/zeroclaw-labs/zeroclaw/pull/8137) removed raw environment variable access (`zc_env_read`) from plugins, closing cross-plugin secret exfiltration paths. Config is now scoped strictly per-alias.
*   **Observability Enhancements:** PR [#8065](https://github.com/zeroclaw-labs/zeroclaw/pull/8065) introduced end-to-end `trace_id` correlation and per-call cost tracking (`cost_usd`), while PR [#8066](https://github.com/zeroclaw-labs/zeroclaw/pull/8066) added opt-in LLM request payload capture for auditing.
*   **Channel & UI Polish:** PR [#8145](https://github.com/zeroclaw-labs/zeroclaw/pull/8145) systematically addressed typing-indicator stubs across 16+ messaging channels. PR [#8000](https://github.com/zeroclaw-labs/zeroclaw/pull/8000) improved the Zerocode TUI with a "Browse mode" badge.
*   **Auth Spine Landed:** PR [#8063](https://github.com/zeroclaw-labs/zeroclaw/pull/8063) merged the foundational `Principal` type and pluggable `AuthProvider` seam, setting the stage for native OIDC and local logins.

## 4. Community Hot Topics
The most actively discussed items revolve around ZeroClaw's architectural direction, specifically shedding legacy dependencies in favor of safer, more portable alternatives:
*   **The Node.js Elimination Debate:** ConYel's RFC [#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) (*Eliminate Node.js from build and runtime*) generated significant discussion. This has spawned two high-attention offshoots today: Issue [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) (RFC: Replace React/Vite with Rust→Wasm) and Issue [#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) (Wasm-first plugin runtime with signed distribution). Underlying need: The community wants a fully Rust-native, hermetically built ecosystem to eliminate npm supply chain risks.
*   **Plugin Architecture Overhaul:** Vitaly567’s Issue [#7420](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) (Native Dynamic-Library Plugin System) remains a highly discussed topic. Alongside the Wasm debates, contributors are actively hashing out whether dynamic libraries or Wasm should be the primary extension mechanism. 

## 5. Bugs & Stability
Several high-severity workflow blockers and regressions were reported today:
*   **S1 (Workflow Blocked):** Issue [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) reveals that ZeroClaw's default 32k context budget is instantly exceeded by system prompts and tool definitions, causing a perpetual preemptive trim on the very first iteration. 
*   **S1 (Regression):** Issue [#8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154) reports that Kimi Code (Moonshot endpoint) targets a dead API URL (`https://api.moonshot.cn/coder/v1`), returning a 404 and blocking agents using this provider.
*   **S1 (Agent Tooling):** Issue [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) highlights that MCP tools are successfully discovered by the gateway but go completely missing in Zerocode TUI sessions. *Note: A fix for this may be addressed by PR [#8009](https://github.com/zeroclaw-labs/zeroclaw/pull/8009), which wires HMAC tool receipts through all agent paths.*
*   **S0 (Data/Security Risk):** Issue [#8013](https://github.com/zeroclaw-labs/zeroclaw/issues/8013) notes that disabling an agent in v0.8.1 does not reliably shut down its bound Discord channel, allowing the bot to answer users when it should be offline.

## 6. Feature Requests & Roadmap Signals
Feature requests today strongly signal what will define the upcoming v0.9.0 release:
*   **Hardened Supply Chain & CI:** Issue [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) proposes hardware-backed PGP signing, multi-party quorums, and SLSA provenance for release binaries. Coupled with PRs [#8056](https://github.com/zeroclaw-labs/zeroclaw/pull/8056) and [#8057](https://github.com/zeroclaw-labs/zeroclaw/pull/8057), ZeroClaw is building an industry-leading CI security gate.
*   **Local Developer Experience (Zerocode):** Issue [#8078](https://github.com/zeroclaw-labs/zeroclaw/issues/8078) proposes a strict local pre-submission gate that replicates CI constraints locally before a contributor can even push a branch.
*   **Enterprise Persistence:** PR [#6893](https://github.com/zeroclaw-labs/zeroclaw/pull/6893) (open since May) continues advancing multi-database session backends (Postgres, Oracle, MySQL, Db2), pointing toward heavy enterprise/fleet adoption.

## 7. User Feedback Summary
**Pain Points:** Operators are expressing frustration over quiet agent failures and configuration friction. The 32k context limit bug (#5808) is a severe pain point as it breaks baseline usability for users with complex tool setups. Channel operators report architectural blind spots, such as the Discord channel staying alive when disabled (#8013) and prompt caching failing over Telegram (#6360). Additionally, new users are hitting friction with default security profiles, prompting requests to automatically force the "yolo" risk preset during quickstart (#8125) to prevent silent agent failures.
**Satisfaction/Dissatisfaction:** Users are highly enthusiastic about the breadth of channel integrations and the move toward Rust-native stability. However, there is clear dissatisfaction with the fragmentation of tool routing (MCP tools failing between gateway and TUI).

## 8. Backlog Watch
*   **Windows CI Degradation:** Issue [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) highlights 74 failing tests on Windows (code page 936) due to Unix-only test commands. This has been open since June 10th and, despite being labeled S2 and priority:p1, indicates a significant gap in cross-platform CI validation that needs immediate maintainer attention.
*   **Auth Provider RFC (Native Login):** Issue [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) introduces a local username/password `AuthProvider` for IdP-less browser logins. While the foundational PR [#8063](https://github.com/zeroclaw-labs/zeroclaw/pull/8063) merged today, this specific use-case implementation is currently marked `needs-maintainer-review` and awaits scheduling.
*   **Telegram Webhook Ingress:** Feature request [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) for Telegram webhook mode (to move beyond getUpdates long-polling) is awaiting further progress and has broad implications for cloud deployments behind NAT.

</details>