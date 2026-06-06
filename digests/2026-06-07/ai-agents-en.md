# OpenClaw Ecosystem Digest 2026-06-07

> Issues: 300 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-06 22:19 UTC

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

# OpenClaw Project Digest — 2026-06-07

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high volume of community activity today, with **300 issues** and **500 pull requests** updated in the last 24 hours. The project is in an active beta stabilization phase following the recent rollout of `v2026.6.5-beta.1`. While the release addresses several crucial message-rendering bugs, the core gateway and transport layers are currently facing significant scaling and regression challenges. The massive ratio of open PRs (412 open vs. 88 merged/closed) indicates heavy third-party contributor involvement, but also potential bottlenecks in maintainer review and merging processes.

## 2. Releases
**Latest Release:** [`v2026.6.5-beta.1`](https://github.com/openclaw/openclaw/releases/tag/v2026.6.5-beta.1)
*   **Channel & Rendering Fixes:** QQBot now successfully strips model reasoning/thinking scaffolding (e.g., `<thinking>` tags) before native delivery, preventing raw system logic from leaking to end-users.
*   **MCP Tooling:** Model Context Protocol (MCP) tool results now correctly coerce `resource_link`, `resource`, `audio`, and malformed image payloads, improving multi-modal stability.

## 3. Project Progress
Although only 88 PRs were merged/closed today, several critical architectural improvements advanced in the review pipeline:
*   **Session State & Message Delivery:** [PR #91000](https://github.com/openclaw/openclaw/pull/91000) fixes a race condition preserving abort states after dispatch rejection, and [PR #91013](https://github.com/openclaw/openclaw/pull/91013) prevents stale abort markers from suppressing fresh chat events.
*   **Infrastructure Resilience:** [PR #91015](https://github.com/openclaw/openclaw/pull/91015) introduces a deadline for Docker exec commands to prevent an unresponsive Docker daemon from hanging the entire gateway.
*   **Channel Improvements:** [PR #89659](https://github.com/openclaw/openclaw/pull/89659) adds vital retry logic for Feishu rate-limit errors (230020/230006), and [PR #90997](https://github.com/openclaw/openclaw/pull/90997) fixes a Telegram bug where tool-progress lines were dropped during commentary streaming.
*   **Security & Config:** [PR #90571](https://github.com/openclaw/openclaw/pull/90571) resolves a security concern by masking gateway password inputs during CLI wizard configuration.

## 4. Community Hot Topics
The community is highly focused on transport compatibility and UI stability:
*   **OpenAI GPT-5 Transport Failures:** [Issue #90083](https://github.com/openclaw/openclaw/issues/90083) (14 comments, 3 👍) reports that the OpenAI ChatGPT Responses transport fails with `invalid_provider_content_type` for GPT-5.4/5.5 models. Users are actively troubleshooting config/plugin migrations.
*   **Windows Chat UI Regression:** [Issue #67035](https://github.com/openclaw/openclaw/issues/67035) (14 comments) details a severe regression on Windows where typed input is swallowed and streamed replies are invisible until refreshed.
*   **Codex App-Server Stalls:** [Issue #88312](https://github.com/openclaw/openclaw/issues/88312) (13 comments, 3 👍) highlights a regression causing Codex to fail multi-tool agent turns with "stopped before confirming the turn was complete."
*   **Feishu Streaming Artifacts:** [Issue #88929](https://github.com/openclaw/openclaw/issues/88929) (11 comments, 2 👍) maps out an annoying "typewriter effect" on Feishu cards resulting in truncated messages.

## 5. Bugs & Stability
Stability is currently the primary concern for the project, with several high-severity bugs affecting core gateway operations:
*   **P1 - Cron Global Contamination:** [Issue #90991](https://github.com/openclaw/openclaw/issues/90991) warns that scheduled Cron triggers are contaminating global runtime states, causing transient system-wide overloads.
*   **P1 - Gateway Crash on Start:** [Issue #90886](https://github.com/openclaw/openclaw/issues/90886) notes that the gateway hangs at `starting...` if a declared provider lacks credentials. Fix pipeline: [PR #90989](https://github.com/openclaw/openclaw/pull/90989) attempts to recover stale ingress queue claims at startup.
*   **P1 - Subagent Compaction Routing Error:** [Issue #90925](https://github.com/openclaw/openclaw/issues/90925) reveals that subagent announce compaction fails by falling into the incorrect `openai-responses` API-key route.
*   **P1 - Native Replay Encryption Bug:** [Issue #90093](https://github.com/openclaw/openclaw/issues/90093) shows that native `openai-chatgpt-responses` sessions break on the second turn with `invalid_encrypted_content`.
*   **P1 - WSL2 Gateway Restarts:** [Issue #90428](https://github.com/openclaw/openclaw/issues/90428) reports the `exec` tool triggers a SIGTERM gateway restart on WSL2 using Node 24.

## 6. Feature Requests & Roadmap Signals
Users are pushing OpenClaw toward more sophisticated multi-agent and local-first architectures:
*   **Topic-Session Families:** [Issue #90916](https://github.com/openclaw/openclaw/issues/90916) proposes multiple named context lanes for a single assistant to share durable memory but keep recent transcripts isolated. Highly requested for complex workspace management.
*   **Local Provider First-Class Support:** [Issue #89265](https://github.com/openclaw/openclaw/issues/89265) requests better integration for local inference software and open-weight models, reflecting a community shift away from rising proprietary API costs.
*   **Context Survival:** [Issue #58818](https://github.com/openclaw/openclaw/issues/58818) requests a guarantee that the last *N* raw messages survive context compaction and session resets.
*   **Microsoft Webwright Integration:** [PR #91024](https://github.com/openclaw/openclaw/pull/91024) introduces a bundled skill to delegate browser automation to Microsoft's Webwright CLI, signaling expanded web-agent capabilities.

## 7. User Feedback Summary
Users are expressing frustration with the reliability of chat UI rendering and session persistence across channels. The Windows UI regression ([#67035](https://github.com/openclaw/openclaw/issues/67035)) and Feishu truncation bugs ([#88929](https://github.com/openclaw/openclaw/issues/88929)) are degrading the core chat experience. Additionally, the continuous exposure of raw agent "thinking" and scaffolding (despite the recent fix in QQBot) remains a black eye for production deployments ([Issue #64267](https://github.com/openclaw/openclaw/issues/64267)). Conversely, developers are enthusiastic about the extension ecosystem, specifically the new Google Antigravity CLI backend ([PR #90975](https://github.com/openclaw/openclaw/pull/90975)) and model picker enhancements ([PR #90328](https://github.com/openclaw/openclaw/pull/90328)).

## 8. Backlog Watch
Several critical, high-impact issues are accumulating dust and require immediate maintainer intervention:
*   **Silent Message Loss:** [PR #89039](https://github.com/openclaw/openclaw/pull/89039) (Size: XL) aims to fix silent message loss from `EmbeddedAttemptSessionTakeoverError`. It is currently awaiting a look despite providing sufficient proof.
*   **Session Resets timing:** [PR #84009](https://github.com/openclaw/openclaw/pull/84009) fixes daily session resets to run on schedule rather than waiting for inbound use. It has been waiting on the author/maintainer since May.
*   **Exec Sandbox Isolation:** [Issue #58730](https://github.com/openclaw/openclaw/issues/58730) (Open since April 2026) asks for robust sandbox permission models inspired by the Claude Code source leak. Given the recent WSL2 exec bugs, this needs prioritization.
*   **Circuit Breakers:** [Issue #62615](https://github.com/openclaw/openclaw/issues/62615) requests a gateway-side circuit breaker to stop retrying inherently unhealthy, oversized sessions.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the 2026-06-07 community digest summaries.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by rapid iteration toward production-grade reliability, complex multi-agent orchestration, and enterprise readiness. Projects are heavily focused on bridging the gap between raw LLM capabilities and stable, cross-platform user experiences, evidenced by a universal push for robust desktop applications, unified WebUIs, and resilient messaging channel integrations. Community demand is shifting away from simple chat interfaces toward sophisticated, autonomous workflows requiring persistent memory, advanced context window management, and secure sandboxing. Meanwhile, a clear architectural bifurcation is emerging between highly extensible, plugin-heavy frameworks and ultra-lightweight, edge-optimized runtimes.

## 2. Activity Comparison
*Health Score Metric: A = High velocity + active merging; B = Active + stable; C = High activity but unstable/bottlenecked; D = Low activity/Stale.*

| Project | Issues (24h) | PRs (24h) | Release Status (24h) | Health Score | Primary Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 300 | 500 | `v2026.6.5-beta.1` | **C+** | Transport scaling, core gateway bug triage |
| **Hermes Agent** | 50 | 50 | `v0.16.0` (Surface) | **A-** | Post-regression triage, desktop/UI fixes |
| **IronClaw** | 5 | 41 | Pre-release (`0.29.1`) | **A** | "Reborn" core architecture, OpenAI API parity |
| **ZeroClaw** | 36 | 50 | Pre-release (`v0.8.x`) | **A-** | WASM plugin ecosystem, security hardening |
| **PicoClaw** | 12 | 15+ | `v0.2.9-nightly` | **A** | Concurrency hardening, channel expansion |
| **NanoBot** | 6 | 23 | `v0.1.4.post6` | **B+** | Desktop prep, multi-user memory isolation |
| **CoPaw** | 10 | 0 | `v1.1.10` | **C-** | v1.1.x regression triage, UX friction |
| **NanoClaw** | 1 | 14 | None | **B** | Channel adapter overhauls (Slack, Signal) |
| **Moltis** | 3 | 0 | None | **B-** | Cron/background task UX, context rehydration |
| **LobsterAI** | 6 | 2 | None | **C-** | Backlog triage, UX data loss prevention |
| **ZeptoClaw** | 2 | 1 | None | **B** | Binary-size governance, aarch64 optimization |
| **NullClaw / TinyClaw**| 0 | 0 | None | **N/A** | Dormant |

## 3. OpenClaw's Position
**Advantages:** OpenClaw remains the core reference implementation with by far the largest raw volume of community activity (800+ interactions daily). Its extension ecosystem is highly active, and it benefits from massive third-party contributor involvement.
**Vulnerabilities vs. Peers:** OpenClaw is currently experiencing severe growing pains compared to its peers. It suffers from a massive PR bottleneck (412 open PRs) and critical P1 system-wide regressions (e.g., Cron contamination, Gateway crashes). While Hermes and IronClaw successfully shipped massive architectural updates recently, OpenClaw is mired in basic transport and UI stability issues (e.g., Windows UI swallowing inputs).
**Technical Approach:** Unlike IronClaw (which is building a drop-in OpenAI-compatible API layer) or ZeroClaw (standardizing on a WASM runtime), OpenClaw relies heavily on native gateway routing and direct channel adapters, which is currently causing scaling bottlenecks under high concurrency.

## 4. Shared Technical Focus Areas
*   **Context Window & Compaction Management (OpenClaw, Hermes, NanoBot, CoPaw, Moltis):** As agents tackle longer, complex tasks, managing context limits is a universal pain point. Projects are actively grappling with "microcompaction," preserving cache prefixes to save API costs, preventing infinite compaction loops, and ensuring tool payloads don't overwhelm the context window.
*   **Multi-User Isolation & Enterprise Security (NanoBot, ZeroClaw, IronClaw, Hermes):** The transition from single-user tools to enterprise deployments is driving demand for strict `per_user_memory` isolation, scoped tool permissions (SSRF guards), and robust OIDC/OAuth authentication layers.
*   **Advanced Multi-Agent Orchestration (OpenClaw, Hermes, PicoClaw, IronClaw):** Communities are moving past simple single-agent loops. There is a unified push for persistent "session families," peer-to-peer agent communication (PicoClaw), and sub-agent routing with specialized profiles (Hermes, IronClaw).
*   **Frictionless Deployment (ZeptoClaw, PicoClaw, NanoClaw, CoPaw):** Users want seamless local deployments. Heavy friction exists around cross-compiling for edge devices (ARM/Raspberry Pi), integrating local models (vLLM/Ollama), and eliminating the need for public webhook tunneling (NanoClaw's shift to Slack Socket Mode).

## 5. Differentiation Analysis
*   **Architectural Philosophy:** 
    *   **Extensible Runtimes (ZeroClaw, IronClaw):** Focusing heavily on standardized extension models (WASM plugins) and API-compatibility layers (OpenAI drop-in replacement) to become universal platforms.
    *   **Lightweight & Edge-First (ZeptoClaw, PicoClaw):** Targeting physical-world AI hubs and embedded systems (e.g., sub-7.5MB binaries, algorithmic trading connectors, native ARM support).
    *   **UI/UX & Desktop-First (Hermes, NanoBot, CoPaw):** Prioritizing standalone desktop shells and polished WebUIs to transition users away from CLI-only workflows.
*   **Target Audience:** IronClaw and ZeroClaw are explicitly targeting self-hosted enterprise infrastructure. Conversely, PicoClaw and ZeptoClaw are targeting hobbyists, robotics engineers, and fintech developers. NanoBot, CoPaw, and Hermes are targeting power-users and developers wanting cross-platform personal assistants.

## 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iteration & Architecture Shifts (IronClaw, Hermes, ZeroClaw, OpenClaw):** These projects are pushing hundreds of PRs/issue daily. Hermes and IronClaw are absorbing massive "Reborn/Surface" architectural merges. OpenClaw has the volume but is struggling with maintainer bottlenecks.
*   **Tier 2: Stabilization & Feature Maturation (PicoClaw, NanoBot, NanoClaw):** These projects are healthy, merging PRs steadily (10-25/day), and focusing on defensive programming, concurrency fixes, and finalizing UI/channel overhauls prior to major releases.
*   **Tier 3: Stalled or Niche Maintenance (CoPaw, LobsterAI, Moltis, ZeptoClaw):** These projects are experiencing either zero code merges (CoPaw, Moltis) or highly centralized, narrow focuses (ZeptoClaw's binary optimization). They rely heavily on community bug reports to identify edge cases but lack the maintainer velocity seen in higher tiers.

## 7. Trend Signals
1.  **The "Local-First" Rebellion:** Across OpenClaw, CoPaw, and ZeroClaw, users are aggressively rejecting proprietary API costs and rate limits. Demand for first-class vLLM, Ollama, and open-weight model support is ubiquitous, forcing projects to fix local inference provider fragility.
2.  **Security & Trust in Agentic Loops:** As agents execute code autonomously, security models are maturing beyond basic API keys. WASM sandboxing (ZeroClaw), Hook dispatchers with approval gates (IronClaw), and symlink/SSRF protections (PicoClaw, NanoBot) signal that the ecosystem is preparing for production-grade autonomous execution.
3.  **The Rise of the Autonomous Background Daemon:** Users no longer view AI assistants merely as chat interfaces. Feature requests for advanced Cron scheduling (Moltis, NanoBot), "silent" background tasks, and long-running task queuing (LobsterAI) indicate that users want AI agents to act as persistent, ambient system daemons that only alert humans when necessary.
4.  **MCP (Model Context Protocol) as a Standard:** MCP tool integration is rapidly becoming a baseline requirement for agent frameworks (OpenClaw, NanoClaw, ZeroClaw). The focus is shifting from *whether* to support tools to how to *securely* scope and execute them across multiple users and plugin environments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-07

## 1. Today's Overview
NanoBot experienced a highly active development day, with 23 pull requests updated and 6 issues processed, indicating a vigorous and engaged maintainer and contributor base. The project is in a phase of intense feature maturation and platform hardening, as evidenced by the introduction of a desktop shell interface and significant improvements to messaging bridges. A substantial portion of today's activity focuses on enterprise readiness, multi-user deployment safety, and refining integrations with various LLM providers. The high ratio of open PRs (13 open vs. 10 merged/closed) suggests a current influx of community contributions undergoing active review. Overall, the project demonstrates strong health, rapid iteration, and a clear trajectory toward becoming a robust, multi-platform personal AI assistant.

## 2. Releases
No new releases were recorded today. The latest referenced version in the issues remains `v0.1.4.post6`.

## 3. Project Progress
Several significant pull requests were merged or closed today, pushing the project's capabilities forward:
*   **Desktop Application Prep ([PR #4195](https://github.com/HKUDS/nanobot/pull/4195)):** Merged a polished desktop shell and shared WebUI surface, signaling an imminent transition from a purely web/CLI tool to a standalone desktop application.
*   **Multi-User Memory Isolation ([PR #2968](https://github.com/HKUDS/nanobot/pull/2968)):** Merged a critical feature allowing `per_user_memory` isolation, solving a major pain point for multi-tenant deployments where context previously bled between users.
*   **MCP Access Control ([PR #2533](https://github.com/HKUDS/nanobot/pull/2533)):** Merged per-MCP-server `allowFrom` access control, providing essential security boundaries for agents operating in shared environments.
*   **WhatsApp Bridge Stabilization:** Resolved multiple bridge issues, including preventing duplicate messages on reconnect ([PR #2555](https://github.com/HKUDS/nanobot/pull/2555)), fixing voice message transcription ([PR #2529](https://github.com/HKUDS/nanobot/pull/2529)), and dropping stale history messages on startup ([PR #2528](https://github.com/HKUDS/nanobot/pull/2528)).
*   **Provider Compatibility:** Fixed OpenAI-compatible image generation APIs failing on unsupported parameters ([PR #4209](https://github.com/HKUDS/nanobot/pull/4209)). Added Serper.dev as a search provider ([PR #2532](https://github.com/HKUDS/nanobot/pull/2532)).

## 4. Community Hot Topics
*   **GitHub Copilot Authentication Failure ([Issue #2573](https://github.com/HKUDS/nanobot/issues/2573)):** This closed issue gathered 9 upvotes and 3 comments. Users experienced OAuth login failures with GitHub Copilot following an engine replacement (switching to OpenAI from LiteLLM). The high engagement highlights the community's strong reliance on Copilot as a free/accessible backend provider.
*   **Context Caching Invalidation ([Issue #4222](https://github.com/HKUDS/nanobot/issues/4222)):** A highly technical discussion regarding `max_messages` truncation and `microcompact` shifting LLM message prefixes. This demonstrates the community's advanced usage of NanoBot and their focus on cost optimization and latency (prompt caching).
*   **WebUI Feature Parity ([Issue #4218](https://github.com/HKUDS/nanobot/issues/4218)):** Users are requesting a UI for managing Cron jobs, pointing to a broader desire to move away from CLI configurations and manage the agent entirely via the built-in WebUI.

## 5. Bugs & Stability
Today's issues and PRs highlighted several notable bugs, with active fixes already proposed:
*   **High: Prompt Caching Defeat ([Issue #4222](https://github.com/HKUDS/nanobot/issues/4222)):** Context governance mutates message prefixes, drastically reducing LLM cache hit rates. (No fix PR listed yet).
*   **High: WeChat Permanent Deadlock ([PR #4223](https://github.com/HKUDS/nanobot/pull/4223) & related):** WeChat channel permanently silences itself after a session token expires, failing to reload state after a pause. Fix PR is currently open.
*   **Medium: Workspace Symlink Escape ([PR #4221](https://github.com/HKUDS/nanobot/pull/4221)):** The `ExecTool` allows symlinks to escape the workspace directory, posing a security risk. Fix PR is currently open.
*   **Medium: Streaming `reasoning_content` Loss ([PR #4228](https://github.com/HKUDS/nanobot/pull/4228) & [PR #4227](https://github.com/HKUDS/nanobot/pull/4227)):** Custom providers returning empty strings for `reasoning_content` cause crashes with DeepSeek and similar APIs. Fix PRs are open.
*   **Medium: SDK Shutdown Error ([Issue #4211](https://github.com/HKUDS/nanobot/issues/4211)):** SDK leaves stdio MCP open during shutdown, causing an unhandled RuntimeError. (Closed, fix presumably merged).

## 6. Feature Requests & Roadmap Signals
*   **Enterprise GitHub Support ([Issue #4220](https://github.com/HKUDS/nanobot/issues/4220)):** Request for GitHub Copilot for Business / GitHub Enterprise API endpoints. This signals growing adoption of NanoBot within corporate environments.
*   **Cron Job WebUI Management ([Issue #4218](https://github.com/HKUDS/nanobot/issues/4218)):** Request to manage scheduled tasks visually.
*   **Advanced Cron Capabilities ([PR #4225](https://github.com/HKUDS/nanobot/pull/4225)):** An open PR introducing `silent` mode (for background monitoring) and `lock_recipient` for cron jobs. This is likely to be a key feature in the next release.
*   **AssemblyAI Transcription ([PR #4224](https://github.com/HKUDS/nanobot/pull/4224)):** Expanding transcription provider options beyond Groq and OpenAI.
*   *Roadmap Prediction:* The upcoming release will likely focus heavily on **Desktop App readiness**, **Multi-User isolation/security**, and refined **Provider compatibility** (especially regarding reasoning models and enterprise endpoints).

## 7. User Feedback Summary
Users are pushing NanoBot into heavy, multi-channel production environments, exposing friction points around session management and provider compatibility. A major pain point is LLM provider fragility (e.g., strictly formatted APIs breaking on null values, as seen in reasoning/image generation issues). Users deeply appreciate the flexibility of the CLI but are now demanding equivalent UI capabilities, particularly for automation (Cron) and channel management. The emergence of issues regarding WeChat deadlocks and WhatsApp message replay highlights that users are deploying NanoBot as a continuous, unattended personal assistant across diverse messaging platforms.

## 8. Backlog Watch
*   **Channel Dispatch Durability ([PR #4094](https://github.com/HKUDS/nanobot/pull/4094)):** Open since May 29, addressing WebSocket persistence and stream-delta coalescing. Given the heavy bridge fixes merged today, this PR requires maintainer review to prevent channel sync conflicts.
*   **Chat Sender Identity ([PR #4033](https://github.com/HKUDS/nanobot/pull/4033)):** Open since May 28, aiming to distinguish multiple users in shared Discord/guild channels. This is a critical prerequisite for the newly merged multi-user memory isolation features and needs prioritization.
*   **MCP SSRF Guard ([PR #4123](https://github.com/HKUDS/nanobot/pull/4123)):** Open since May 31, implementing request validation to prevent Server-Side Request Forgery. With the introduction of unrestricted desktop/web surfaces, this security hardening PR should not remain stale.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-07

## 1. Today's Overview
Hermes Agent is experiencing a massive surge in community engagement and issue triaging immediately following a landmark release. With 50 active issues and 50 pull requests updated in the last 24 hours, the repository is highly active. The bulk of today's activity consists of the community testing the new **v0.16.0 "Surface Release"**, which introduced almost 200,000 lines of changes across 1,962 files. Consequently, the tracker is currently flooded with post-release bug reports, platform-specific regressions, and UX feature requests, particularly surrounding the new Desktop app, gateway stability, and context/memory management. Maintainers and contributors are actively pushing fixes and triaging these incoming reports.

## 2. Releases
**v2026.6.5: Hermes Agent v0.16.0 — "The Surface Release"**
*   **Date:** June 5, 2026
*   **Scope:** A massive milestone bridging 874 commits, 542 merged PRs, and 170 community contributors.
*   **Changes:** 205,216 insertions and 46,217 deletions across 1,962 files.
*   **Resolved:** 399 issues closed, including 2 P0 (critical) and 62 P1 (high priority) bugs, alongside 16 security patches.
*   **Migration Note:** The scale of this release (touching nearly 2,000 files) suggests significant architectural overhauls. Administrators should thoroughly test custom providers, sandbox environments, and desktop installations before upgrading production environments, as numerous edge-case regressions have already been reported.

## 3. Project Progress
Today saw 5 merged/closed PRs addressing stability, gateway routing, and documentation, alongside several active PRs advancing the project's extensibility:
*   **Gateway & Client Stability:** PR [#40112](https://github.com/NousResearch/hermes-agent/pull/40112) implemented critical guards to prevent permanent conversation history deletion during session rotation and context compression.
*   **Platform Connectivity:** Maintainers merged fixes for Feishu HTTP/2 stream resets ([#32305](https://github.com/NousResearch/hermes-agent/pull/32305)) and Slack NO_REPLY sentinels ([#30936](https://github.com/NousResearch/hermes-agent/pull/30936)), while also pushing new proactive messaging support for DingTalk ([#40817](https://github.com/NousResearch/hermes-agent/pull/40817)).
*   **Extensibility:** PR [#38645](https://github.com/NousResearch/hermes-agent/pull/38645) is actively introducing API server route extensions for plugins, allowing plugins to contribute authenticated `/v1/plugins/...` routes.
*   **Architecture Enhancements:** PR [#40822](https://github.com/NousResearch/hermes-agent/pull/40822) is adding live session transport fanout to fix issues where multiple clients (Web/Desktop) connecting to the same session overwrite each other's transport streams.

## 4. Community Hot Topics
The core underlying need driving community discussion today is **control over context and sub-agent orchestration**. Users want Hermes to be less ephemeral and more capable of complex, persistent workflows.
*   **Persistent Knowledge & RAG:** Issue [#531](https://github.com/NousResearch/hermes-agent/issues/531) (2 👍) remains highly active. Users are heavily requesting persistent document storage and RAG integration, noting that current file uploads auto-clean after 24 hours.
*   **Advanced Orchestration:** Issue [#9459](https://github.com/NousResearch/hermes-agent/issues/9459) (14 👍) proposes allowing `delegate_task` to spawn sub-agents from named profiles defined in `config.yaml`. This indicates strong community demand for building custom, multi-agent orchestration harnesses.
*   **Memory Consolidation:** Issue [#25309](https://github.com/NousResearch/hermes-agent/issues/25309) discusses a "Dreaming" system to automatically consolidate short-term memory into long-term memory during idle periods.

## 5. Bugs & Stability
The v0.16.0 release has exposed several P1/P2 regressions, primarily affecting the new Desktop app, context management, and platform gateways.
*   **P1 - Infinite Context Compaction:** Issue [#40803](https://github.com/NousResearch/hermes-agent/issues/40803) reports agents getting stuck in an infinite loop of context compaction (`messages=N->N`) on low context length configurations. *Fix PR: [#40112](https://github.com/NousResearch/hermes-agent/pull/40112) (guard rewrite_transcript).*
*   **P1 - Gateway Crash on Startup:** Issue [#8090](https://github.com/NousResearch/hermes-agent/issues/8090) (4 👍) highlights a `NameError: name 'RedactingFormatter' is not defined` crash introduced by recent logging changes.
*   **P1 - Context Compression Leaking Summaries:** Issue [#38389](https://github.com/NousResearch/hermes-agent/issues/38389) (1 👍) reports that context compression summaries are being injected directly into the visible user chat instead of being hidden.
*   **P2 - Upgrading Drops Configurations:** Issue [#40821](https://github.com/NousResearch/hermes-agent/issues/40821) warns that the first config write after upgrading to 0.16.0 rewrites `config.yaml` to expanded defaults, dropping `custom_providers`.
*   **Desktop (UI/UX) Bugs:** Wayland flickering ([#38015](https://github.com/NousResearch/hermes-agent/issues/38015)), failing macOS installs if the home path has spaces ([#40820](https://github.com/NousResearch/hermes-agent/issues/40820)), and drag-and-drop vision analysis failing to trigger ([#40819](https://github.com/NousResearch/hermes-agent/issues/40819)).

## 6. Feature Requests & Roadmap Signals
Today's feature requests highlight a maturing user base requiring better multi-platform and multi-user support.
*   **Session Presence & Multi-client:** PRs like [#40814](https://github.com/NousResearch/hermes-agent/pull/40814) and [#40822](https://github.com/NousResearch/hermes-agent/pull/40822) suggest the roadmap is moving toward supporting concurrent multi-client connections seamlessly.
*   **Desktop Quality of Life:** PR [#40792](https://github.com/NousResearch/hermes-agent/pull/40792) requests a setting to keep tool-call accordions permanently expanded, pointing toward future desktop UI customization features.
*   **Sub-agent Attribution:** Issue [#40816](https://github.com/NousResearch/hermes-agent/issues/40816) requests a `delegated_role` field for session attribution, a necessary feature for complex agentic pipelines. We can expect this to be folded into the next minor release as orchestration matures.

## 7. User Feedback Summary
Users are excited about the feature density of v0.16.0 but are actively experiencing friction with the Desktop application and provider configurations.
*   **Pain Points:** The most prominent complaints involve context compaction causing terrible UX on messaging platforms like Telegram ([#40416](https://github.com/NousResearch/hermes-agent/issues/40416)), where compaction visually deletes user messages. Additionally, users running custom providers (like Ollama via LiteLLM) are experiencing silent hangs ([#26489](https://github.com/NousResearch/hermes-agent/issues/26489)).
*   **Satisfaction:** The ecosystem around plugins is thriving, with community members already building extensions like temporal memory hygiene for Qdrant ([#37661](https://github.com/NousResearch/hermes-agent/issues/37661)) and specialized GameFi research skills ([#40136](https://github.com/NousResearch/hermes-agent/pull/40136)).

## 8. Backlog Watch
*   **Long-standing Provider bug:** Issue [#26489](https://github.com/NousResearch/hermes-agent/issues/26489) (Ollama + LiteLLM proxy hanging) has been open since mid-May. Given the high volume of custom provider users, this requires maintainer triage.
*   **DingTalk Proactive Messaging:** Issue [#40818](https://github.com/NousResearch/hermes-agent/issues/40818) notes that proactive messaging and cron notifications for DingTalk are completely broken. Maintainers should review and merge the proposed fix in PR [#40817](https://github.com/NousResearch/hermes-agent/pull/40817).
*   **Clipboard Polling:** Issue [#23984](https://github.com/NousResearch/hermes-agent/issues/23984) (2 👍) regarding constant "No Image found in Clipboard" messages in the TUI has been open since May 11 and still lacks a definitive fix or workaround, causing annoyance for users of modern terminal emulators like Ghostty.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-07

## 1. Today's Overview
PicoClaw demonstrates highly active and healthy project momentum today, driven largely by a massive sweep of defensive bug fixes and a clear progression towards its next release milestone. The project saw the publication of a new `v0.2.9` nightly build, accompanied by a strong closure rate of 15 merged PRs against only 12 active issues. Maintainer and contributor focus appears heavily divided between fortifying existing channel integrations (specifically addressing edge-case crashes) and onboarding specialized new domain capabilities. Overall, codebase stability and concurrent execution handling are visibly improving.

## 2. Releases
- **[nightly: v0.2.9-nightly.20260606.89ee8f1b](https://github.com/sipeed/picoclaw/releases/tag/nightly)**: An automated nightly build. While inherently marked as potentially unstable, this build encapsulates today’s numerous defensive fixes and channel routing improvements. 

## 3. Project Progress
Today was a banner day for system stability and code hardening, with a single contributor (`chengzhichao-xydt`) merging a prolific series of defensive fixes. Simultaneously, community contributors pushed key feature improvements over the finish line.
*   **Concurrency & Core Fixes:** Addressed critical goroutine leaks during config reloads and fixed unchecked type assertions across `sync.Map` operations that could lead to agent panics ([PR #3014](https://github.com/sipeed/picoclaw/pull/3014), [PR #3016](https://github.com/sipeed/picoclaw/pull/3016), [PR #3018](https://github.com/sipeed/picoclaw/pull/3018), [PR #3019](https://github.com/sipeed/picoclaw/pull/3019), [PR #3021](https://github.com/sipeed/picoclaw/pull/3021), [PR #3022](https://github.com/sipeed/picoclaw/pull/3022)).
*   **Self-Update & Media Handling:** Fixed an edge case where base64 encoders weren't properly closed on error, and file extraction errors during self-updates were silently ignored ([PR #3017](https://github.com/sipeed/picoclaw/pull/3017), [PR #3023](https://github.com/sipeed/picoclaw/pull/3023)).
*   **Channel Integrations:** Merged improvements to Slack formatting and routing ([PR #3020](https://github.com/sipeed/picoclaw/pull/3020)), and finally added native Google Chat channel support ([PR #830](https://github.com/sipeed/picoclaw/pull/830)).
*   **Workspace Security:** Fixed a workspace guard bug that misread scheme-less URLs (like `wttr.in`) as restricted local paths ([PR #2965](https://github.com/sipeed/picoclaw/pull/2965)).
*   **Tool Policy Filters:** Merged support for `AGENT.md` frontmatter tool policy filters, allowing granular `allow`/`deny` rules for MCP servers and tools ([PR #2838](https://github.com/sipeed/picoclaw/pull/2838)).

## 4. Community Hot Topics
*   **[Feature] Compiled builds with WhatsApp support ([Issue #2625](https://github.com/sipeed/picoclaw/issues/2625)) - 👍: 1, Comments: 8:** Users running PicoClaw on lightweight edge devices (like the Raspberry Pi Zero 2) are finding it difficult to compile builds with WhatsApp support enabled. This highlights a strong user base deploying PicoClaw on ARM architectures for physical-world AI hub applications.
*   **[Task] First-class agent-to-agent communication ([Issue #2929](https://github.com/sipeed/picoclaw/issues/2929)) - 👍: 2, Comments: 3:** As PicoClaw expands its multi-agent capabilities, users are requesting a peer-to-peer communication layer rather than relying purely on hierarchical `spawn` or `delegate` commands. 
*   **Binance / HFT Ecosystem Epic (Multiple Issues by `jcafeitosa`):** An influx of highly structured issues opened today (e.g., [Issue #3024](https://github.com/sipeed/picoclaw/issues/3024), [Issue #3025](https://github.com/sipeed/picoclaw/issues/3025), [Issue #3027](https://github.com/sipeed/picoclaw/issues/3027)) outlines a roadmap for lock-free exchange connectors and CLI trading tools, indicating active development to adapt PicoClaw for high-frequency algorithmic trading workflows.

## 5. Bugs & Stability
*   **[HIGH] Goroutine leak on config reload ([PR #3014](https://github.com/sipeed/picoclaw/pull/3014), [PR #3016](https://github.com/sipeed/picoclaw/pull/3016)):** Reloading channel configurations caused outbound dispatch goroutines to leak indefinitely. Fix merged today.
*   **[HIGH] QQ Channel token retrieval failure on Windows ([Issue #3015](https://github.com/sipeed/picoclaw/issues/3015)):** A newly reported bug where running the `picoclaw gateway` on Windows results in a timeout error when fetching app access tokens from `bots.qq.com`. *No fix PR is available yet.*
*   **[MEDIUM] Silent corrupted self-updates ([PR #3023](https://github.com/sipeed/picoclaw/pull/3023)):** Disk I/O errors during self-update extractions were failing silently, potentially leaving the agent bricked. Fix merged today.
*   **[MEDIUM] Nil panics during agent startup ([PR #3019](https://github.com/sipeed/picoclaw/pull/3019), [PR #3021](https://github.com/sipeed/picoclaw/pull/3021)):** Unchecked type assertions on empty startup maps and values were causing agents to panic on boot. Fix merged today.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Autonomy:** The interest in agent-to-agent communication ([Issue #2929](https://github.com/sipeed/picoclaw/issues/2929)) suggests the project is moving from single-agent orchestration towards decentralized agent swarms.
*   **Fintech / Trading utility:** The surge in Binance connector and exchange interface issues (e.g., [Issue #3024](https://github.com/sipeed/picoclaw/issues/3024) to [Issue #3032](https://github.com/sipeed/picoclaw/issues/3032)) signals an upcoming dedicated `clawtrade` CLI module for financial workflows.
*   **Model Provider Flexibility:** Continued integration of specific provider protocols, such as ModelScope for DeepSeek ([PR #1112](https://github.com/sipeed/picoclaw/pull/1112)), suggests the next stable release will feature a highly diversified LLM backend catalogue.
*   *Prediction:* The upcoming `v0.2.9` stable release will likely be designated as a "Stability & Channel Expansion" release, paving the way for v0.3.0 to introduce the peer-to-peer multi-agent framework.

## 7. User Feedback Summary
Users are highly enthusiastic about deploying PicoClaw on low-power edge devices (Raspberry Pi) to act as always-on personal assistants bridged to messengers like WhatsApp and QQ. However, they experience friction with cross-compilation and platform-specific bugs (e.g., Windows QQ channel timeouts). Front-end UX still has minor rough edges, such as copy-to-clipboard failures on non-HTTPS setups, which the maintainers swiftly resolved today. There is also a distinct, technically sophisticated subset of the community attempting to utilize PicoClaw as an execution layer for automated trading systems.

## 8. Backlog Watch
*   **[PR #423](https://github.com/sipeed/picoclaw/pull/423) Base multi-agent collaboration framework:** This vital architectural PR has been in an open "WIP" state since February 2026. It needs a maintainer review to unblock the cooperative agent features users are requesting.
*   **[PR #1112](https://github.com/sipeed/picoclaw/pull/1112) DeepSeek Modelscope Support:** Despite being opened in March, this provider fix remains closed/lingering and should be prioritized to expand domestic (Chinese) model support.
*   **[PR #2935](https://github.com/sipeed/picoclaw/pull/2935) Traditional Chinese locale:** Documentation and i18n PRs often get de-prioritized; this open PR needs final review to help onboard APAC users.
*   **[Issue #2625](https://github.com/sipeed/picoclaw/issues/2625) ARM Build Support:** Needs maintainer engagement to adjust CI/CD compiler flags for easier edge-device deployment.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-06-07

## 1. Today's Overview
NanoClaw is currently experiencing highly active development, characterized by a strong focus on bug fixes, architectural improvements, and channel integration stability. The community and core contributors pushed 14 active pull requests (11 open, 3 recently closed) alongside a new bug report. Today's activity heavily targets enhancing messaging channel adapters (Slack, Signal) and establishing a robust, upgrade-maintainable framework for agent skills. Overall project health appears strong and iterative, with multiple contributors actively collaborating to squash edge-case bugs before an anticipated release.

## 2. Releases
No new releases were recorded today. The repository currently has no newly published versions.

## 3. Project Progress
Significant headway was made today on system stability and architectural maintenance:
*   **Skills Conformance Model:** Two PRs by `gavrielc` ([#2698](https://github.com/nanocoai/nanoclaw/pull/2698), [#2696](https://github.com/nanocoai/nanoclaw/pull/2696)) were closed/merged. This establishes a new "upgrade-maintainable" standard for agent skills, ensuring they have functional integration tests and don't break when core modules are reorganized.
*   **Duplicate Message Prevention:** PR [#2697](https://github.com/nanocoai/nanoclaw/pull/2697) (merged/closed) introduces a single-instance lock on the host, solving an issue where running parallel processes would cause the agent to spam duplicate messages.

## 4. Community Hot Topics
The most active themes driving community contributions revolve around messaging reliability and system maintainability:
*   **Slack Adapter Overhaul:** Contributor `mperraillon` opened two PRs ([#2702](https://github.com/nanocoai/nanoclaw/pull/2702), [#2700](https://github.com/nanocoai/nanoclaw/pull/2700)) to transition the Slack integration away from HTTP webhook mode to Socket Mode, eliminating the need for complex public tunneling.
*   **Signal Adapter Fixes:** Contributor `cfis` pushed several updates to fix how the agent handles Signal, notably fixing silently dropped DMs ([#2694](https://github.com/nanocoai/nanoclaw/pull/2694)) and attaching inbound images correctly ([#2695](https://github.com/nanocoai/nanoclaw/pull/2695)). 

## 5. Bugs & Stability
*   **Severity: Medium** — [Issue #2701](https://github.com/nanocoai/nanoclaw/issues/2701): The command `ncl groups restart --rebuild` crashes if no APT or NPM packages are specified. *Status: Open, no fix PR yet.*
*   **Severity: Medium** — CLI ID Generation ([PR #2699](https://github.com/nanocoai/nanoclaw/pull/2699)): Using `crypto.randomUUID()` for `ncl groups create` generates IDs that start with numbers, which breaks OneCLI agent identifiers. *Status: Fix PR opened.*
*   **Severity: Low** — Poll-loop Text Duplication ([PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531)): The container outputs duplicate text if `send_message` triggers mid-turn. *Status: Fix PR opened.*
*   **Severity: Low** — Stale Sessions ([PR #2184](https://github.com/nanocoai/nanoclaw/pull/2184)): Expired Claude Code sessions temporarily display raw errors to the user instead of gracefully retrying. *Status: Fix PR opened.*

## 6. Feature Requests & Roadmap Signals
*   **MCP Transport Expansion:** [PR #2208](https://github.com/nanocoai/nanoclaw/pull/2208) introduces support for HTTP and SSE MCP server transports, indicating a push toward more versatile networking capabilities.
*   **Tool Ecosystem Growth:** [PR #2693](https://github.com/nanocoai/nanoclaw/pull/2693) adds a new Google Contacts tool, completing the Google Workspace suite alongside existing Gmail and GCal tools. 
*   **Container Host Compatibility:** [PR #2230](https://github.com/nanocoai/nanoclaw/pull/2230) improves rootless Podman support, signaling an intent to broaden developer environments beyond standard Docker setups.

## 7. User Feedback Summary
Users are actively testing the agent in containerized environments with varying messaging front-ends. The primary pain points currently revolve around configuration edge cases (e.g., the `--rebuild` package error in [#2701](https://github.com/nanocoai/nanoclaw/issues/2701)) and strict identifier rules during setup ([#2699](https://github.com/nanocoai/nanoclaw/pull/2699)). The rapid shift to Slack Socket Mode and the continuous patching of the Signal adapter show that users are heavily utilizing NanoClaw for cross-platform personal messaging and are frustrated by the friction of public webhook requirements.

## 8. Backlog Watch
Several crucial bug fixes have been sitting in the backlog for over a month without being merged. Maintainers should review the following to unblock users:
*   [PR #2184](https://github.com/nanocoai/nanoclaw/pull/2184) (Open since May 2): Stale session error delivery.
*   [PR #2208](https://github.com/nanocoai/nanoclaw/pull/2208) (Open since May 3): MCP HTTP/SSE transport support.
*   [PR #2349](https://github.com/nanocoai/nanoclaw/pull/2349) (Open since May 8): Mount security allowlist crashes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-07

## 1. Today's Overview
IronClaw experienced a **high volume of development activity** over the past 24 hours, dominated by core contributor pushes toward the "Reborn" architecture and OpenAI API compatibility layers. With 41 pull requests updated (22 open, 19 closed/merged) and 5 issues touched, the project is in a phase of rapid feature development and infrastructure hardening. No new releases shipped today, but the open release PR (`0.24.0 → 0.29.1`) continues to accumulate changes. The breadth of PRs—spanning WebChat v2 APIs, Slack routing, extension lifecycle, and CI optimization—signals an active sprint toward a major milestone.

---

## 2. Releases
No new releases were published today. The ongoing release PR ([#3708](https://github.com/nearai/ironclaw/pull/3708)) remains open, targeting version **0.29.1** with breaking changes in `ironclaw_common` and `ironclaw_skills`. This PR has been active since mid-May and continues to be a catch-all for the current development cycle.

---

## 3. Project Progress
Nineteen PRs were merged or closed, reflecting significant forward momentum:

**Architecture & Core Runtime:**
- **Subagent + compaction unified design** ([#4485](https://github.com/nearai/ironclaw/pull/4485), [#4486](https://github.com/nearai/ironclaw/pull/4486)) — landed design docs introducing `PostCapabilityStage` as the owner of the post-capability/pre-prompt seam, covering background subagents, proactive context compaction, and WebUI run nesting. This is a foundational piece for Reborn's orchestration model.

**Loop Control & Safety:**
- **Repeated-call warning gates** ([#4508](https://github.com/nearai/ironclaw/pull/4508)) — converted repeated capability-call signatures from an immediate stop to a two-stage warning, persisting warning state before allowing a stop. This improves agent reliability by giving the LLM a chance to recover from loops.

**Channel Routing:**
- **Slack channel subject routing** ([#4509](https://github.com/nearai/ironclaw/pull/4509)) — added product workflow conversation route keys for channel-specific subject users, with Slack host-beta route config. DMs remain personal; shared channels use installation-level fallback.

**CI Improvements:**
- **Reborn CI scope separation** ([#4520](https://github.com/nearai/ironclaw/pull/4520)) — classified Reborn tests separately from legacy tests, keeping Reborn-only PRs out of legacy test runs and dynamically discovering `reborn_*.rs` targets across 4 partitions.

---

## 4. Community Hot Topics
Community engagement was low today, with **no items receiving notable comment counts or reactions**. The open issues and PRs are almost entirely authored by core contributors and automation bots. Two items warrant attention:

- **[#4502](https://github.com/nearai/ironclaw/issues/4502)** — The only user-filed bug, with 1 comment. A WeCom group chat approval-reply failure that directly impacts a production integration workflow.
- **[#4002](https://github.com/nearai/ironclaw/pull/4002)** — Dependabot dependency bump (16 GitHub Actions updates) sitting open since May 24, potentially blocked on review capacity.

The lack of community discussion volume suggests the project is in a heads-down development phase with limited external contributor participation.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Notes |
|----------|-------|--------|-------|
| 🔴 High | [#4512](https://github.com/nearai/ironclaw/issues/4512) — `job_semaphore` never acquired | Open | Core contributor-reported; concurrent sandbox jobs may run without rate limiting, posing a resource exhaustion risk. No fix PR yet. |
| 🟡 Medium | [#4502](https://github.com/nearai/ironclaw/issues/4502) — WeCom approval reply broken | Open | User-reported; replying `y`/`yes`/`always` in WeCom group chat doesn't approve tool requests. Affects v0.29.1 on staging. No fix PR yet. |
| 🟡 Medium | [#4523](https://github.com/nearai/ironclaw/pull/4523) — System sentinel deserialization failure | Open (fix PR) | `TenantId`/`UserId` rejected the `SYSTEM` sentinel due to asymmetric validation, causing `/api/webchat/v2/llm/*` to return `service_unavailable`. Fix PR is open. |
| 🔵 Low | [#4108](https://github.com/nearai/ironclaw/issues/4108) — Nightly E2E failed | Open | Automated report; E2E extensions tests failing. Ongoing infra flakiness. |

---

## 6. Feature Requests & Roadmap Signals

**Actively in development (likely next version):**
- **OpenAI-compatible API layer** ([#4489](https://github.com/nearai/ironclaw/pull/4489), [#4495](https://github.com/nearai/ironclaw/pull/4495)) — Typed `chatcmpl-*` / `resp_*` refs, actor-scoped projection mappings, idempotency handling, and routing of `/v1/chat/completions` through ProductWorkflow. This positions IronClaw as a drop-in OpenAI replacement for self-hosted deployments.
- **WebChat v2 session API** ([#4519](https://github.com/nearai/ironclaw/pull/4519)) — `GET /api/webchat/v2/session` returning tenant/user info plus WebUI capabilities, with admin derivation from server-issued capabilities.
- **WebChat v2 thread deletion** ([#4516](https://github.com/nearai/ironclaw/pull/4516)) — Authenticated DELETE thread route with proper scoping to prevent cross-user data access.
- **Extension lifecycle E2E** ([#4518](https://github.com/nearai/ironclaw/pull/4518)) — Smoke tests for extension search, install, activate, and remove through the Reborn binary.
- **Auto-seed Reborn config** ([#4517](https://github.com/nearai/ironclaw/pull/4517)) — First-run `config.toml` seeding for smoother onboarding.

**Roadmap items progressing:**
- **Hook framework production activation** ([#3934](https://github.com/nearai/ironclaw/issues/3934)) — Closed; HookDispatcher composed into live runtime with WASM execution, event triggers, persistent predicates, and durable backends.
- **Notion MCP capability path** ([#3805](https://github.com/nearai/ironclaw/issues/3805)) — Closed; Notion as the first concrete MCP tool package in the capability catalog.
- **Local-dev approval gates** ([#4186](https://github.com/nearai/ironclaw/pull/4186)) — Approval-aware authorizer for capability dispatch, still open and iterating.

---

## 7. User Feedback Summary
Direct user feedback was minimal today, limited to one filed bug:

- **WeCom integration broken** ([#4502](https://github.com/nearai/ironclaw/issues/4502)) — A user relying on WeCom group chat for bot-mediated tool approvals reports the feature completely non-functional. This suggests IronClaw is being tested in enterprise messaging environments where approval workflows are critical. The lack of reaction/engagement on this issue may indicate a small but growing enterprise user base.

The predominance of core contributor activity and absence of external feature requests implies the project is still in an early-adopter phase where the core team is driving the roadmap.

---

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| [#4002](https://github.com/nearai/ironclaw/pull/4002) — Dependabot actions bump (16 updates) | ~14 days | Large dependency update sitting without review; security-relevant actions like `actions/checkout` and `claude-code-action` are outdated. |
| [#4186](https://github.com/nearai/ironclaw/pull/4186) — Local-dev approval gates | ~10 days | XL-sized PR with medium risk; approval gate logic is safety-critical and needs thorough review before merge. |
| [#3981](https://github.com/nearai/ironclaw/pull/3981) — HTTP redaction marker tests | ~14 days | Security test coverage from a new contributor; hasn't received review attention. |
| [#4512](https://github.com/nearai/ironclaw/issues/4512) — Concurrent sandbox semaphore never acquired | New | Identified by a core contributor but no fix PR yet; could enable resource exhaustion under concurrent load. |

---

*Digest generated from GitHub activity data on 2026-06-07. Project health: **active development, strong core team velocity, low external community engagement**.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the provided data.

### 1. Today's Overview
LobsterAI is currently experiencing a period of maintenance and backlog triage, characterized by developer activity focusing on reviewing older contributions rather than shipping new immediate features. Today, there were no new releases, but the project saw 6 issues and 2 pull requests updated, primarily through automated stale-bot actions and community bumps. No issues were closed, and 2 PRs were explicitly closed without merging, indicating a cleanup of pending contributions. The current project health relies on managing existing bug reports and UI/UX improvements, while awaiting a potential next feature drop. 

### 2. Releases
No new releases were recorded today. 

### 3. Project Progress
Two pull requests were updated and subsequently closed today, highlighting a focus on cleaning up the contribution pipeline:
*   **[PR #1529](https://github.com/netease-youdao/LobsterAI/pull/1529) [CLOSED]:** A proposed feature to add batch JSON export for cowork sessions. The closure of this stale PR suggests it may need re-evaluation or a rebase if the maintainers decide to revisit it.
*   **[PR #1530](https://github.com/netease-youdao/LobsterAI/pull/1530) [CLOSED]:** An enhancement to allow users to select a specific Agent when creating scheduled tasks in a multi-Agent environment. This was likely closed in favor of a different architectural approach or needs a refreshed implementation.

### 4. Community Hot Topics
The most actively discussed issues today revolve around process stability and UI/UX enhancements:
*   **Process Interruptions:** Users are actively discussing unexpected process terminations and tasks failing to return results upon completion. 
    *   [Issue #1496](https://github.com/netease-youdao/LobsterAI/issues/1496): Task shows as completed but yields no return.
    *   [Issue #1495](https://github.com/netease-youdao/LobsterAI/issues/1495): Unexplained process interruptions (👍 1 reaction).
*   **UX Optimization:** [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) provided several practical suggestions, such as introducing queued task inputs (similar to Workbuddy) to improve workflow continuity, extending task runtimes, and adjusting UI grids for high-resolution displays.

### 5. Bugs & Stability
Several significant bugs regarding data loss and execution reliability have surfaced in the backlog and are currently open:
*   **Critical - Silent Data Loss:** Several issues reported by the same user highlight a severe lack of "unsaved changes" warnings across the application:
    *   [Issue #1468](https://github.com/netease-youdao/LobsterAI/issues/1468): Creating an Agent.
    *   [Issue #1469](https://github.com/netease-youdao/LobsterAI/issues/1469): Agent settings panel.
    *   [Issue #1470](https://github.com/netease-youdao/LobsterAI/issues/1470): MCP Server configuration.
    *   *Analysis:* Users losing complex configurations or prompts due to accidentally clicking outside a modal severely degrades user trust.
*   **High - Task Execution Reliability:** [Issue #1495](https://github.com/netease-youdao/LobsterAI/issues/1495) and [Issue #1496](https://github.com/netease-youdao/LobsterAI/issues/1496) indicate underlying issues with client-to-model connections or built-in timeout limits causing scripts/agents to crash or hang silently. No fix PRs are currently attached to these.

### 6. Feature Requests & Roadmap Signals
Recent community signals suggest a strong user demand for professional, continuous-use features:
*   **Advanced Task Management:** Users want better control over long-running tasks (queuing, extended timeouts) as seen in [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120).
*   **Data Portability & Multi-Agent Visibility:** The closed [PR #1529](https://github.com/netease-youdao/LobsterAI/pull/1529) (batch export) and [PR #1530](https://github.com/netease-youdao/LobsterAI/pull/1530) (multi-agent task assignment) signal an ongoing internal effort to make LobsterAI more robust for enterprise and multi-agent workflows. Expect these concepts to likely be included in the next major release or nightly build.

### 7. User Feedback Summary
Users are actively using LobsterAI for complex data scraping and multi-agent orchestration but are encountering friction in workflow reliability and interface design. The primary pain points are:
1.  **Workflow Disruption:** Agents terminating unexpectedly during long-running tasks.
2.  **UI Friction:** Poor layout scaling on high-res displays and a lack of basic frontend safeguards (e.g., "Are you sure you want to close?" prompts).
3.  **General Satisfaction:** Despite the bugs, users remain engaged and are providing highly constructive, detailed feedback (e.g., providing screenshots, specific UI grid column suggestions, and referencing competitor features like Workbuddy).

### 8. Backlog Watch
The following important issues and PRs have been marked as `[stale]` and urgently require maintainer attention to prevent community churn:
*   **Unsaved Form Data Trilogy:** [Issue #1468](https://github.com/netease-youdao/LobsterAI/issues/1468), [Issue #1469](https://github.com/netease-youdao/LobsterAI/issues/1469), and [Issue #1470](https://github.com/netease-youdao/LobsterAI/issues/1470) (Open since April 2026) need to be addressed to prevent ongoing user frustration.
*   **Execution Crashes:** [Issue #1495](https://github.com/netease-youdao/LobsterAI/issues/1495) and [Issue #1496](https://github.com/netease-youdao/LobsterAI/issues/1496) need official maintainer confirmation on whether these are client-side bugs or dependent on specific third-party LLM API limits.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for Moltis based on the provided GitHub data for 2026-06-07.

### 1. Today's Overview
Moltis is currently in an active development and bug-squashing phase, showing steady community engagement with three new issues opened in the last 24 hours. No new releases were deployed today, indicating that the development team is likely gathering feedback and stabilizing recent changes before cutting a new version. Activity is heavily focused on refining background processes and session management, specifically regarding cron job handling and authentication configurations. Overall project health appears stable, though currently heavily reliant on community bug reports to identify edge cases in existing features.

### 2. Releases
No new releases were recorded today. 

### 3. Project Progress
No pull requests were merged or closed today. However, an active, multi-day effort is underway to address context window management. PR [#1089](https://github.com/moltis-org/moltis/pull/1089) ("Cap persisted tool results before rehydration") was updated recently. This systemic change aims to optimize how historical `tool` and `tool_result` contents are injected back into LLM prompts, ensuring that massive tool outputs do not overwhelm the model's context limit across normal chats, streaming, and compaction events. 

### 4. Community Hot Topics
The most actively discussed item today is Issue [#1112](https://github.com/moltis-org/moltis/issues/1112) (Auth disabling bug), which has garnered 1 comment. The underlying need here revolves around **deployment flexibility**. Users deploying Moltis via Docker in secure, internal networks (or local development environments) rely on the ability to bypass authentication. When this setting fails, it creates immediate friction for self-hosters, highlighting that edge-case configurations in containerized environments require stricter testing.

### 5. Bugs & Stability
Two distinct bugs were reported today, contributing to the open issue backlog:
1. **Authentication Failure (Medium Severity):** Issue [#1112](https://github.com/moltis-org/moltis/issues/1112) reports that disabling authentication via environment variables/configs does not successfully bypass the login wall in Docker deployments. *No fix PR is currently attached.*
2. **UI/State Desync (Low-Medium Severity):** Issue [#1111](https://github.com/moltis-org/moltis/issues/1111) notes that archiving a "cron session" yields no visible change in the user interface. This suggests a breakdown between state actions and frontend rendering. *No fix PR is currently attached.*

### 6. Feature Requests & Roadmap Signals
A strong signal was sent today regarding the management of automated AI tasks. 
* **Notification Management:** Issue [#1110](https://github.com/moltis-org/moltis/issues/1110) requests a `NO_REPLY` equivalent keyword to suppress cron job notifications. 
* **Roadmap Prediction:** As Moltis is increasingly being used for autonomous/scheduled tasks (evidenced by "cron sessions"), users are experiencing notification fatigue. It is highly probable that the maintainers will prioritize notification routing and suppression rules in an upcoming minor version to improve the UX of background agents. 

### 7. User Feedback Summary
Real-world usage data from today's issues paints a picture of a user base actively pushing Moltis into **autonomous, background-task territory**. Users are leveraging Moltis for scheduled agent operations (cron). However, friction exists in the self-hosting setup (specifically Docker environments) where users expect seamless configuration toggling. Furthermore, the desire for "silent" cron executions indicates that users view Moltis less as a chatty assistant and more as a background daemon, expecting clean, UI-integrated logs without unnecessary alert noise.

### 8. Backlog Watch
Maintainers should direct attention to PR [#1089](https://github.com/moltis-org/moltis/pull/1089), which has been open since 2026-06-01. While it addresses a highly technical and necessary aspect of memory management (capping tool results), it requires final review and merging, as uncapped tool outputs likely contribute to the instability users feel during complex or compaction-heavy sessions. Additionally, the newly opened bugs ([#1112](https://github.com/moltis-org/moltis/issues/1112) and [#1111](https://github.com/moltis-org/moltis/issues/1111)) currently have zero maintainer comments and require triage.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (agentscope-ai/CoPaw) for June 7, 2026.

### 1. Today's Overview
The CoPaw (QwenPaw) project is currently experiencing a high volume of daily issue activity (10 issues updated) but shows a complete stall in code merges, with zero pull requests updated or merged in the last 24 hours. The community is actively stress-testing the recent v1.1.10 release, revealing several significant regressions and user interface friction points. While the core maintainers are actively responding to user problems, the absence of active PRs suggests that code contributions may be delayed or pending internal review. Overall project health is stable but currently bottlenecked by bugs in the latest release.

### 2. Releases
No new releases were recorded today. The community remains focused on the current `v1.1.10` release.

### 3. Project Progress
No PRs were merged or closed today, indicating no forward progress on the codebase in the last 24 hours. However, maintainers successfully resolved 2 community support tickets: one regarding the location of the `/approval` command ([#4984](https://github.com/agentscope-ai/QwenPaw/issues/4984)), and another regarding context length configuration in a previous version ([#4661](https://github.com/agentscope-ai/QwenPaw/issues/4661)).

### 4. Community Hot Topics
The most actively discussed topics revolve around context limitations and UI interactions:
*   **Context Compression Thresholds:** Users are actively discussing how custom `max_input_length` (e.g., 512K) is being ignored by the `/compact` command, which defaults to 128K/131K. This is highlighted in Issue [#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937) (5 comments) and Issue [#4661](https://github.com/agentscope-ai/QwenPaw/issues/4661) (6 comments). This indicates a strong user need for reliably utilizing large context windows in newer LLMs.
*   **Session Management & UI:** A highly endorsed feature request in Issue [#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971) (2 comments) points out that current session switching requires too many clicks, prompting calls for a dedicated session sidebar.

### 5. Bugs & Stability
The transition to v1.1.9 and v1.1.10 has introduced several regressions and bugs, ranked by severity below:
*   **High - Local Model Connectivity Regressions:** Users report that v1.1.9 and v1.1.10 break connectivity with local vLLM deployments (e.g., Qwen 3.6-27B). The UI shows "test connection successful," but the chat remains indefinitely loading. Downgrading to v1.1.5 resolves it. ([#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989))
*   **High - Windows File Path Overflow:** A structural bug where Session JSON files have their session ID duplicated in the filename, causing a `PathTooLongException` crash on Windows environments. ([#4988](https://github.com/agentscope-ai/QwenPaw/issues/4988))
*   **Medium - Coding Mode Session Switching:** A regression in v1.1.10 where attempting to switch sessions while in Coding Mode silently fails, locking the user into the old session. ([#4987](https://github.com/agentscope-ai/QwenPaw/issues/4987))
*   **Low - IM Channel Error Handling:** Enterprise WeChat returns a vague error message ("Sorry, I cannot answer...") when tool calling information is disabled, instead of a proper fallback. ([#4990](https://github.com/agentscope-ai/QwenPaw/issues/4990))
*   **Low - UI Formatting:** A minor UX bug where delete-file requests do not wrap text, forcing horizontal scrolling. ([#4985](https://github.com/agentscope-ai/QwenPaw/issues/4985))

*(Note: No fix PRs are currently open for these bugs).*

### 6. Feature Requests & Roadmap Signals
Two distinct feature requests signal where users want the UI/UX to head next:
*   **Real-time Execution Feedback:** Users want real-time, streaming visual feedback when the agent executes shell commands or writes to a file, citing competitors like Cursor and Workbuddy as benchmarks. ([#4986](https://github.com/agentscope-ai/QwenPaw/issues/4986))
*   **Streamlined Session Management:** A request for a persistent session panel/bar to allow one-click switching between conversations. ([#4971](https://github.com/agentscope-ai/QwenPaw/issues/4971))

*Prediction:* The real-time execution feedback and session UI overhaul are strong candidates for v1.1.11 or v1.2.0, likely alongside fixes for the Windows path limits.

### 7. User Feedback Summary
Users are actively pushing CoPaw to operate as a heavy-duty local coding assistant, but friction exists in the execution loop. Pain points include the lack of visibility when the agent is "thinking" or running tools, leading users to assume the system has frozen. Connectivity bugs with local OpenAI-compatible endpoints (vLLM) are causing significant friction for power self-hosters. Conversely, users appreciate the deep integration with IM channels like Enterprise WeChat, though they desire better error-handling transparency. 

### 8. Backlog Watch
*   **[CRITICAL] Local vLLM connection failure ([#4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)):** This is a severe regression blocking local model users. It requires immediate maintainer investigation to identify what changed between v1.1.5 and v1.1.9.
*   **[IMPORTANT] Context length defaults ([#4937](https://github.com/agentscope-ai/QwenPaw/issues/4937)):** The `/compact` command's failure to respect model-specific context limits severely hinders users trying to leverage large-window models. Maintainer input on a potential fix timeline is highly anticipated.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

Here is the project digest for ZeptoClaw for 2026-06-07.

### 1. Today's Overview
ZeptoClaw currently demonstrates steady, focused maintenance activity, specifically zeroing in on performance optimization and CI/CD reliability. Over the last 24 hours, project activity consisted of two active issues and one open pull request, indicating a period of infrastructural refinement rather than new feature development. Maintainer `qhkm` is heavily focused on binary-size governance, working to enforce strict constraints on compiled outputs. This emphasis suggests a strong commitment to keeping the AI agent lightweight and deployable in resource-constrained environments. Overall, the project's health appears stable, with a proactive stance toward preventing software bloat.

### 2. Releases
No new releases were recorded in the last 24 hours. 

### 3. Project Progress
No PRs were merged and no issues were resolved today. However, incremental progress is being made on establishing a robust CI binary-size gate:
*   **Open PR:** [PR #611 chore(ci): promote binary-size to PR gate at 7.5MB](https://github.com/qhkm/zeptoclaw/pull/611) is currently under review. This represents a significant infrastructural shift, transitioning the binary-size checks from a passive, post-merge diagnostic on the main branch to an active, blocking PR gate.

### 4. Community Hot Topics
Activity is highly centralized around the maintainer's push to optimize build outputs for edge devices. 
*   **[Issue #612](https://github.com/qhkm/zeptoclaw/issues/612) (1 comment):** Discusses a nearly 800KB binary-size drift since the 6.2MB low water mark. The underlying need here is maintaining strict historical constraints to ensure the binary remains lightweight and efficient for distribution.
*   **[Issue #629](https://github.com/qhkm/zeptoclaw/issues/629) (0 comments):** Addresses the reality of cross-platform build sizes. It highlights that while the x86_64 binary realistically sits around 10.5MB, the ARM/aarch64 builds are the true strategic "moat" for the project.

### 5. Bugs & Stability
*   **Binary Bloat / Regressions (P2-high):** The primary stability concern currently tracked is binary "drift" rather than runtime crashes. [Issue #612](https://github.com/qhkm/zeptoclaw/issues/612) explicitly audits an 800KB size increase. If left unchecked, this poses a risk to users operating the assistant on embedded systems. The proposed fix/alignment is actively being handled via the open [PR #611](https://github.com/qhkm/zeptoclaw/pull/611).

### 6. Feature Requests & Roadmap Signals
There are no explicit user-facing feature requests in today's digest. However, there is a clear roadmap signal regarding the project's target architecture. The distinction made in [Issue #629](https://github.com/qhkm/zeptoclaw/issues/629)—labeling the aarch64 target as the "actual robot moat"—strongly indicates that future development and optimization will prioritize ARM-based edge devices (like Raspberry Pi, Nvidia Jetson, and Apple Silicon) over standard x86_64 cloud/desktop environments.

### 7. User Feedback Summary
Direct community feedback (comments, reactions) is currently minimal for today's tracked items. However, the maintainer's focus serves as proxy feedback for the project's target audience. The strict refusal to accept the 10.5MB x86_64 build as a baseline and the push to retain a sub-7MB aarch64 target implies that users rely heavily on ZeptoClaw being highly optimized. The core use case is clearly shifting toward edge deployments, robotics, and local personal AI assistants where storage and memory constraints are critical pain points.

### 8. Backlog Watch
*   **[PR #611](https://github.com/qhkm/zeptoclaw/pull/611) & [Issue #629](https://github.com/qhkm/zeptoclaw/issues/629):** These items require final alignment and maintainer action. PR #611 proposes a 7.5MB gate, but Issue #629 strongly advocates for tightening this to a strict 7MB specifically for aarch64 to protect the "robot moat." Finalizing this standard and merging the PR is crucial for getting the CI pipeline to a stable state.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-07

## 1. Today's Overview
ZeroClaw is experiencing a massive spike in open-source activity, driven primarily by an explosive expansion of its WASM/Extism plugin ecosystem and aggressive preparations for its upcoming `v0.8.x` release line. With 50 pull requests updated in the last 24 hours (46 open) and 36 issues processed, the repository is buzzing with community and maintainer contributions. The core maintainers are heavily focused on hardening runtime security, fixing critical session management bugs, and finalizing the WebAssembly plugin architecture. However, the high volume of open PRs indicates that maintainers might soon face a significant review bottleneck.

## 2. Releases
There were **0 new releases** published today. The project is currently operating on recent beta/canary builds as it gears up for the stable `v0.8.0` milestone.

## 3. Project Progress
Significant forward momentum occurred today across security, runtime stability, and integrations:
*   **Security & Runtime Fixes:** The critical bug where `session/kill` could rehydrate deleted ACP sessions from durable history ([PR #7258](https://github.com/zeroclaw-labs/zeroclaw/pull/7258)) was closed after implementing a `killed_at` tombstone.
*   **Plugin Ecosystem Boom:** Maintainer/contributor `theonlyhennygod` opened over a dozen new, self-contained WASM tool plugins in a single day, including integrations for [Suno music generation](https://github.com/zeroclaw-labs/zeroclaw/pull/7313), [Wolfram Alpha](https://github.com/zeroclaw-labs/zeroclaw/pull/7308), [DeepL translation](https://github.com/zeroclaw-labs/zeroclaw/pull/7309), [CoinGecko](https://github.com/zeroclaw-labs/zeroclaw/pull/7311), [n8n workflow triggering](https://github.com/zeroclaw-labs/zeroclaw/pull/7328), and [SearXNG private search](https://github.com/zeroclaw-labs/zeroclaw/pull/7322).
*   **Plugin Registry Infrastructure:** To support the flood of new plugins, [PR #7333](https://github.com/zeroclaw-labs/zeroclaw/pull/7333) introduced a remote plugin registry allowing users to use `zeroclaw plugin search` and install by name.
*   **Web & Channels:** A fix for the web console failing to load config sections ([PR #7302](https://github.com/zeroclaw-labs/zeroclaw/pull/7302)) was submitted, alongside a patch to prevent Telegram from flooding edits when streaming intervals are set to zero ([PR #7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334)).

## 4. Community Hot Topics
*   **[Issue #5601](https://github.com/zeroclaw-labs/zeroclaw/pull/5601) [7 comments]:** A long-standing feature request to add subscription-native OAuth/login for providers like Ollama Cloud and Kimi. This highlights a strong user desire to move away from managing static, easily leaked API keys.
*   **[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) [4 comments]:** A highly debated RFC targeting `v0.9.0` to implement an OIDC (OpenID Connect) Authentication Provider. This aligns with the broader community push for ZeroClaw to be a secure, multi-user enterprise tool.
*   **[Issue #7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) [4 comments]:** An architectural RFC proposing moving translation (`.ftl` and `.po`) files into a git submodule to reduce main-repo commit churn and ease localization efforts.
*   **[Issue #6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) & [Issue #6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914) [3 comments each]:** Heated discussions around runtime security, specifically how to enforce `allowed_tools` and handle temporary elevation for Composio/MCP tools during skill execution.

## 5. Bugs & Stability
Several high-severity bugs were identified today, though many have immediate fix PRs pending:
*   **S0 - Data Loss / Security:**
    *   *Nested Secrets Exposure:* `Vec<T>` config fields were rendering unredacted nested `#[secret]` fields in object-array properties ([Issue #6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978)). Status: Closed (Fixed).
*   **S1 - Workflow Blocked:**
    *   *Bedrock Qwen Fails on Second Prompt:* Users running `qwen.qwen3-coder-next` via AWS Bedrock experience a crash on the second consecutive prompt ([Issue #7312](https://github.com/zeroclaw-labs/zeroclaw/issues/7312)). Status: Open, no fix PR yet.
    *   *Quickstart Alias Collision:* The TUI hardcodes the provider alias to `default`, breaking setups that already use that name ([Issue #7227](https://github.com/zeroclaw-labs/zeroclaw/issues/7227)). Status: Closed.
*   **S2 - Degraded Behavior:**
    *   *Telegram Flood:* Setting `draft_update_interval_ms = 0` causes the Telegram channel to spam message edits ([Issue #7332](https://github.com/zeroclaw-labs/zeroclaw/issues/7332)). Status: Open, fix available in [PR #7334](https://github.com/zeroclaw-labs/zeroclaw/pull/7334).
    *   *Web UI Memory Leak:* Clicking "Clear all" in the web dashboard only wipes the frontend UI, leaving backend session history intact ([Issue #7126](https://github.com/zeroclaw-labs/zeroclaw/issues/7126)). Status: Closed.
    *   *Windows Popup Spam:* The web toolbar spawns visible `cmd` windows when loading on Windows ([Issue #7197](https://github.com/zeroclaw-labs/zeroclaw/issues/7197)). Status: Closed.

## 6. Feature Requests & Roadmap Signals
The roadmap is clearly delineated into targeted point releases based on today's tracker updates:
*   **v0.8.0 ([Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112)):** Currently in a blocking phase. Focus is strictly on config schema cleanup, tool-call-parser stabilization, and provider correctness.
*   **v0.8.1 ([Issue #6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)):** Queuing up additive channel support, new providers, and MCP tool integrations.
*   **v0.8.2 ([Issue #7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)):** Will introduce the agnostic WASM plugin program via the Extism component model, paving the way for a massive plugin ecosystem.
*   **v0.8.3 ([Issue #7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320)):** Slated to deliver the MCP dashboard and web-based plugin management UI.

## 7. User Feedback Summary
Users are excited about ZeroClaw's growing capabilities but are encountering friction with early-stage configuration. For example, users running local hardware setups still struggle with the Nix flake, noting it outputs a toolchain rather than a runnable package ([Issue #6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906)). Additionally, users leveraging advanced open-weights models via providers like Groq are running into silent parsing failures—specifically, Llama 4 Scout's use of plural `<tool_calls>` XML tags breaks the agent loop ([Issue #6875](https://github.com/zeroclaw-labs/zeroclaw/issues/6875)). There is a clear appetite for the new WASM plugin architecture, particularly tools that allow users to self-host their AI stack (e.g., SearXNG for search, LibreTranslate for text) without relying on paid cloud APIs.

## 8. Backlog Watch
*   **High-Risk Security Features:** Critical security enhancements like scoped tool activation ([Issue #6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)) and enforcing allow/deny tool lists ([Issue #6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914)) have been accepted but remain `status:blocked`. These need maintainer bandwidth to unblock, as they are fundamental to safe agent execution.
*   **Per-Skill Permissions:** The request to granularize `allow_scripts` per skill rather than globally ([Issue #5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)) remains blocked. Given the rapid influx of community-built WASM plugins, resolving this is becoming critical for user trust.
*   **Repository Hygiene:** A proposal to delete over 200 stale, merged branches ([Issue #6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715)) has been accepted but not yet executed, which could be cluttering the repository's contributor view.

</details>