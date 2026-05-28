# OpenClaw Ecosystem Digest 2026-05-29

> Issues: 402 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-28 22:29 UTC

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

# OpenClaw Project Digest — 2026-05-29

## 1. Today's Overview
OpenClaw is experiencing extremely high development velocity and community engagement, evidenced by **402 issues** and **500 pull requests** updated in the last 24 hours. The maintainers recently shipped two releases (`v2026.5.27` and its beta), focusing heavily on hardening security and content boundaries. While the release pipeline is active, the volume of open issues and P1 regressions suggests the project is navigating significant growing pains typical of a rapidly scaling AI agent gateway. Underlying stability—particularly around event-loop saturation, session state management, and native tool relays—remains the primary operational challenge.

## 2. Releases
**v2026.5.27** & **v2026.5.27-beta.1** were released recently.
*   **Highlights:** Stronger security and content boundaries.
    *   Group prompt text is kept out of the system prompt to prevent accidental context leakage.
    *   Repeated-dot hostnames are now normalized to prevent parsing vulnerabilities.
    *   Side-effecting command wrappers and unsafe Node runtime environment overrides are explicitly blocked.
    *   No-auth Tailscale exposure is rejected.
    *   Node/device-role approvals have been tightened.
*   *Note:* No explicit breaking changes or migration steps were detailed in the release notes, but users should be aware that tightened security boundaries may require updating custom tool wrappers or network configurations.

## 3. Project Progress
Today saw **141 PRs merged/closed** out of 500 active, showing heavy merging activity. Key advancements include:
*   **Infrastructure & CI:** Hardening of CI pipelines to guard dependency graph changes (PR [#87791](https://github.com/openclaw/openclaw/pull/87791)) and auto-scrubbing accidental lockfile changes (PR [#87796](https://github.com/openclaw/openclaw/pull/87796)).
*   **Architecture:** Major refactoring to extract the gateway protocol into a standalone `packages/gateway-protocol` and `packages/gateway-client` (PR [#87797](https://github.com/openclaw/openclaw/pull/87797)), which will improve modularity.
*   **Voice & TTS:** Introduction of unified voice model cataloging across providers like MiniMax, Google, ElevenLabs, and local CLI (PR [#87794](https://github.com/openclaw/openclaw/pull/87794)), plus a new Telegram Speakeasy voice button (PR [#87777](https://github.com/openclaw/openclaw/pull/87777)).
*   **Memory System:** PR [#87654](https://github.com/openclaw/openclaw/pull/87654) bounded short-term memory promotion snippets to prevent uncontrolled bootstrap memory bloat.
*   **New Runtimes:** Initial support for a GitHub Copilot agent runtime was introduced in PR [#86155](https://github.com/openclaw/openclaw/pull/86155).

## 4. Community Hot Topics
The most active community discussions revolve around critical stability failures in the `2026.5.26` / `2026.5.27` releases and fundamental scaling limits.
*   **"Native hook relay unavailable" (Issues [#87331](https://github.com/openclaw/openclaw/issues/87331), [#87395](https://github.com/openclaw/openclaw/issues/87395), [#87536](https://github.com/openclaw/openclaw/issues/87536)):** A massive regression where memory and filesystem tools intermittently fail after gateway restarts due to generation UUID staleness. Together, these issues have garnered 37 comments and 20 likes. Users are currently blocked from executing local tools.
*   **Windows Event Loop Blocking (Issue [#86599](https://github.com/openclaw/openclaw/issues/86599)):** Windows users report local model provider calls completely freezing the gateway event loop, causing trivial prompts to take up to 4 minutes.
*   **Memory Leaks (Issue [#54155](https://github.com/openclaw/openclaw/issues/54155)):** A persistent, highly tracked issue where gateway memory usage scales from 389MB to 14.7GB over 4 days of continuous operation due to session accumulation.
*   *Underlying Needs:* The community is urgently demanding better session-state lifecycle management and native architecture stability, as current bugs make long-running production deployments fragile.

## 5. Bugs & Stability
Stability is currently the project's weakest link, with several critical regressions introduced in recent releases. Fixes are in progress, but the maintainers are struggling to keep up.
*   **P1 - Session/State Deadlocks & Restarts:** Preflight compaction deadlocks are bouncing messages (Issue [#87016](https://github.com/openclaw/openclaw/issues/87016)), and completed sessions are being incorrectly re-attached after restarts (Issue [#86593](https://github.com/openclaw/openclaw/issues/86593)). *Fix PR [#87767](https://github.com/openclaw/openclaw/pull/87767) attempts to clear completed session active runs.*
*   **P1 - Codex App-Server Stalls:** Codex completion stalls are causing agent hangs and routing failures (Issue [#86047](https://github.com/openclaw/openclaw/issues/86047)). *Fix PRs [#87781](https://github.com/openclaw/openclaw/pull/87781) and [#87793](https://github.com/openclaw/openclaw/pull/87793) are pending review.*
*   **P1 - Telegram/WhatsApp Reply Loops:** A regression in v5.20 causes agents to repeat identical replies up to 10x on Telegram (Issue [#86519](https://github.com/openclaw/openclaw/issues/86519)) and duplicated tool call IDs in WhatsApp groups (Issue [#51593](https://github.com/openclaw/openclaw/issues/51593)). 
*   **P1 - Startup Latency:** The `warmCurrentProviderAuthState` step blocks the event loop for ~60s on startup, breaking channel handshakes (Issue [#85999](https://github.com/openclaw/openclaw/issues/85999)).

## 6. Feature Requests & Roadmap Signals
Based on open PRs and issues, the upcoming roadmap is heavily focused on multi-agent orchestration, provider expansion, and operational tooling.
*   **Per-Agent Compaction (PR [#83637](https://github.com/openclaw/openclaw/pull/83637)):** Introduces overrides for context compaction and pruning per individual agent, a highly anticipated feature for multi-agent setups.
*   **TTS Behind TUN Proxy (PR [#87526](https://github.com/openclaw/openclaw/pull/87526)):** Adding `allowPrivateNetwork` options for Volcengine TTS, signaling a push toward more enterprise-friendly network routing.
*   **Experimental CLI Flags (PR [#76298](https://github.com/openclaw/openclaw/pull/76298)):** Toggles for experimental config flags, showing an upcoming shift toward beta-testing features without forking.
*   **Multi-Provider API Key Support (PR [#87762](https://github.com/openclaw/openclaw/pull/87762)):** Supporting separate API keys for Opencode Zen and Go, indicating deeper integration with diverse model providers.

## 7. User Feedback Summary
Users are enthusiastic about OpenClaw's multi-channel capabilities (supporting Telegram, Discord, Mattermost, Feishu, WhatsApp) and its advanced features like local memory embeddings, but frustration is mounting regarding operational reliability.
*   **Pain Points:** Cost dashboards severely undercounting daily spend (Issue [#46252](https://github.com/openclaw/openclaw/issues/46252)), opaque errors when optional native dependencies like `sharp` are missing (Issue [#73148](https://github.com/openclaw/openclaw/issues/73148)), and aggressive security defaults silently breaking existing workflows (e.g., `codex-app-server` auth markers flagged as plaintext, Issue [#84376](https://github.com/openclaw/openclaw/issues/84376)).
*   **Satisfaction:** Users appreciate the rapid response to security vulnerabilities (as seen in the v2026.5.27 release) and the rich ecosystem of provider integrations.

## 8. Backlog Watch
Several critical, long-running issues and PRs require immediate maintainer attention to restore baseline stability for the community.
*   **Issue [#69208](https://github.com/openclaw/openclaw/issues/69208) (Umbrella: duplicate transcripts and context assembly):** A meta-issue tracking a broader class of state duplication bugs across multiple channels, currently lacking a unifying fix.
*   **Issue [#48183](https://github.com/openclaw/openclaw/issues/48183) (Feishu memory leak):** Open since March, detailing a resource leak in `monitor.state.ts` that leaves HTTP server connections dangling.
*   **PR [#87141](https://github.com/openclaw/openclaw/pull/87141) (Harden schema and metadata fuzz boundaries):** A large, high-priority PR marked with multiple compatibility and availability merge risks, currently waiting on the author before it can be safely merged.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from May 29, 2026.

### 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently characterized by extreme development velocity and rapid architectural maturation. Projects are aggressively competing to become the definitive gateway for personal and enterprise AI, resulting in massive merges (e.g., 1,302 commits in a single release for Hermes). However, this breakneck speed is introducing significant operational friction, with nearly all major projects grappling with session memory leaks, context window degradation, and platform-specific regressions. The overarching technical trend is a shift from simple chat wrappers toward autonomous, multi-modal "Reborn" runtimes capable of multi-agent orchestration, self-modification, and secure multi-platform deployment. 

### 2. Activity Comparison
Projects are assessed based on the volume of GitHub issues and pull requests (PRs) updated in the last 24 hours, release activity, and overall project health.

| Project | Issues (24h) | PRs (24h) | Recent Release Status | Health Score / Status |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 402 | 500 (141 merged) | **v2026.5.27** shipped | **High** (Fastest velocity, but high P1 regression volume) |
| **Hermes Agent** | 50 (37 open) | 50 (44 open) | **v0.15.0** shipped yesterday | **High Risk** (Massive release, multiple P0/P1 breakages) |
| **IronClaw** | 50 | 45 (32 merged) | No release | **High** (Deep in "Reborn" architectural integration) |
| **CoPaw** | 43 (32 open) | 39 (17 open) | Testing **v1.1.9** Desktop | **Moderate** (Heavy Tauri/Desktop bugs) |
| **ZeroClaw** | 21 | 50 (5 merged) | Targeting **v0.8.x** | **Moderate** (High open PR volume, security/stability patching) |
| **PicoClaw** | 6 | 29 (8 merged) | Nightly shipped | **Good** (Focusing on edge/RISC-V & memory stability) |
| **NanoBot** | 11 (6 closed) | 19 (7 merged) | No release | **Good** (Stabilizing, strong concurrency bug hunting) |
| **LobsterAI** | 1 | 29 (9 merged) | No release | **Good** (Iterating on UI/UX and plugin ecosystem) |
| **Moltis** | 8 (7 closed) | 5 (4 merged) | No release | **Excellent** (Highly responsive, focused on bug extermination) |
| **NanoClaw** | 4 | 7 (4 merged) | No release | **Good** (Innovating in self-modification/autonomy) |
| **NullClaw** | 2 | 5 (5 merged) | No release | **Excellent** (Stable, focused on core POSIX/provider fixes) |
| *TinyAGI / ZeptoClaw*| 0 | 0 | N/A | **Dormant** |

### 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw remains the undisputed core reference implementation with the highest raw volume of community engagement and PR throughput (500 active PRs). It differentiates itself with an incredibly rich multi-channel integration suite (Feishu, WhatsApp, Mattermost, Telegram, Discord) and advanced Voice/TTS unification.
**Technical Approach:** Unlike peers building monolithic agent loops, OpenClaw is heavily focused on gateway modularity (extracting `packages/gateway-protocol`). 
**Community Size Comparison:** OpenClaw's community is an order of magnitude larger than smaller projects like NullClaw or NanoClaw, but it is currently paying a "scale tax"—experiencing severe growing pains (memory leaks up to 14.7GB, native hook relays dropping) that smaller, nimbler projects like Moltis or NullClaw are managing to avoid or fix rapidly.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging across the ecosystem, driven by real-world multi-agent deployments:
*   **Context & Memory Lifecycle Management:** Nearly all projects are hitting limits with naive context windows. Users report "short-term memory loss" under token pressure in **NanoBot** and **CoPaw**; **OpenClaw** and **ZeroClaw** are fighting memory bloat and expensive O(n) vector scans in SQLite. 
*   **Per-Agent Configuration & Isolation:** Because agents are increasingly used in group chats, session isolation is critical. **NanoBot**, **NanoClaw**, and **LobsterAI** are actively addressing cross-talk, data resurrection, and per-agent tool compaction.
*   **Advanced Security Boundaries:** The "move fast" era is ending. Projects are urgently merging security hardening PRs. **OpenClaw** is blocking unsafe Node overrides, **NullClaw** is removing credential-bearing HTTP requests, **Hermes** is grappling with code-corrupting redaction layers, and **NanoClaw** is patching directory traversals in MCP sinks.
*   **Cost & Provider Fallback:** As LLM API costs rise, users demand model-agnostic setups. **NanoClaw**, **PicoClaw**, and **NullClaw** are seeing massive community demand for OpenAI-compatible endpoints and multi-provider fallback chains to avoid vendor lock-in.

### 5. Differentiation Analysis
*   **Architecture & Runtime:** **Hermes** and **IronClaw** are pushing the boundaries of local autonomy ("Reborn" architecture, complex tool patches), whereas **OpenClaw** acts more as a high-throughput, multi-channel protocol gateway. **NullClaw** uniquely leverages Zig for strict, low-level POSIX thread management.
*   **Target Users:** **CoPaw** is aggressively targeting the non-developer desktop market with its Tauri-based Windows/Mac UI. In contrast, **PicoClaw** caters strictly to the edge-computing/developer niche (RISC-V, Android/Termux). **Moltis** and **ZeroClaw** target DevOps/SysOps operators who need terminal access, cron scheduling, and daemon modes.
*   **Autonomy vs. Orchestration:** **NanoClaw** is pushing the envelope on AI self-modification (merging `patch_bridge` to let agents rewrite their own MCP code), while **Hermes** is focusing heavily on inter-agent delegation (Google's A2A protocol).

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators (OpenClaw, Hermes, IronClaw):** Extremely high commit velocity, large contributor bases. However, they are currently in a "brittle" phase where massive feature drops are causing P0/P1 breakages (e.g., Hermes' plugin discovery failure, OpenClaw's event-loop saturation).
*   **Tier 2: Stabilizers & Maturers (NanoBot, ZeroClaw, CoPaw):** Highly active, but focused on heavy bug-triaging. They are transitioning from early-stage features to reliable production runtimes (e.g., NanoBot overhauling concurrency, ZeroClaw patching S1 security gaps).
*   **Tier 3: Highly Focused Maintainers (Moltis, NullClaw, LobsterAI, NanoClaw):** Lower raw issue counts, but exceptional health and response rates. They process community feedback rapidly, merge targeted fixes, and maintain high user trust.

### 7. Trend Signals
For AI agent developers and technical decision-makers, this digest reveals clear industry trajectories:
1.  **The Shift to Agentic "Self-Repair":** Tools are no longer just executing commands. Ecosystems are moving toward self-healing loops (e.g., Hermes' `ToolCallRepair`, NanoClaw's `patch_bridge`). Agents must be able to recover from truncated JSON and patch their own environments autonomously.
2.  **Desktop & Edge Wrapping is Hard:** The rush to wrap agents in desktop executables (CoPaw with Tauri) and mobile environments (PicoClaw on Termux) is revealing severe OS-level friction (memory leaks, missing SSL certs, CMD popup spam). Agent developers need to invest heavily in OS-specific QA if targeting local execution.
3.  **Orchestration over Isolation:** The community is demanding standardization for multi-agent topologies. Whether it's Hermes adopting A2A, Moltis integrating PTY-based terminal control, or IronClaw's sub-agent spawning, the future is interconnected agent swarms, not singular monolithic bots.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-29

## 1. Today's Overview
NanoBot demonstrated a high level of development activity over the past 24 hours, processing 19 Pull Requests (7 merged/closed) and 11 Issues (6 closed). The project is currently in an active phase of architectural refactoring and reliability hardening, with significant community contributions focusing on concurrency bugs and performance improvements. No new official releases were cut today, suggesting the maintainers are likely stabilizing recent features for an upcoming milestone. The high volume of bug-focused reports indicates a maturing user base heavily testing the agent in complex, real-world multi-user and multi-channel scenarios.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
Significant forward progress was made today through merged PRs, focusing on core agent stability, security, and internal architecture:
*   **Concurrency & Stability Overhaul:** PR [#4041](https://github.com/HKUDS/nanobot/pull/4041) (merged) was a critical contribution that fixed five distinct bugs related to session management, goal context, streaming deltas, and context-budget calculations.
*   **Agent Self-Reflection:** Merged PR [#4015](https://github.com/HKUDS/nanobot/pull/4015) introduced an observation-reflection prompt loop (`Think→Verify→Update User→Act`), advancing the agent's core reasoning capabilities.
*   **Dangerous Command Guardrails:** Merged PR [#3937](https://github.com/HKUDS/nanobot/pull/3937) implemented a user confirmation mechanism for executing high-risk commands, significantly improving operational security.
*   **Architectural Refactoring:** The internal infrastructure was streamlined in merged PR [#4023](https://github.com/HKUDS/nanobot/pull/4023), which successfully migrated the standalone heartbeat service to a more efficient, cron-based auto-registration system.
*   **Platform Integrations:** Merged PR [#4031](https://github.com/HKUDS/nanobot/pull/4031) added a native `/model` slash command for Discord, improving runtime model switching.

## 4. Community Hot Topics
*   **Third-Party WebUI Ecosystem:** Issue [#1922](https://github.com/HKUDS/nanobot/issues/1922) (10 upvotes, 12 comments) continues to generate buzz around `[nanobot-webui]`. This highlights a strong community need for robust, self-hosted visual dashboards and multi-user management panels.
*   **Messaging Platform Quotas:** Issue [#2772](https://github.com/HKUDS/nanobot/issues/2772) remains active as users seek workarounds for strict messaging API limits (e.g., WeChat's 10-message context return limit), reflecting the friction of deploying continuous AI agents in restrictive channel ecosystems.
*   **Agent Interoperability Standards:** PR [#4034](https://github.com/HKUDS/nanobot/pull/4034) proposes adopting the "GitAgent Protocol," sparking conversations about making NanoBot agents portable and standardizing agent definition files.

## 5. Bugs & Stability
Today's bug reports were heavily concentrated on context management and multi-session concurrency. Most severe bugs already have corresponding merged PRs.
1.  **Context Window Memory Loss & Orphans:** Users reported severe conversational degradation. Issue [#4044](https://github.com/HKUDS/nanobot/issues/4044) noted "short term memory loss" under context pressure, while Issue [#4006](https://github.com/HKUDS/nanobot/issues/4006) flagged orphaned tool results breaking strict API validations.
2.  **Streaming & Concurrency Race Conditions:** A batch of reports (Issues [#4036](https://github.com/HKUDS/nanobot/issues/4036), [#4037](https://github.com/HKUDS/nanobot/issues/4037), [#4038](https://github.com/HKUDS/nanobot/issues/4038), [#4039](https://github.com/HKUDS/nanobot/issues/4039), [#4040](https://github.com/HKUDS/nanobot/issues/4040)) highlighted queuing overwrites, shared mutable state across concurrent sessions, and duplicated streaming deltas. *Fix Status: Resolved in merged PR [#4041](https://github.com/HKUDS/nanobot/pull/4041).*
3.  **Matrix Channel Encryption:** Issue [#4042](https://github.com/HKUDS/nanobot/issues/4042) reported that missing `m.key.verification.*` handling blocks the bot from clearing "unverified device" warnings in Element X clients. *Fix Status: Open, no PR yet.*

## 6. Feature Requests & Roadmap Signals
*   **Controllability & Modularity:** Users requested the ability to toggle automatic document extraction to allow custom OCR workflows (Issue [#4043](https://github.com/HKUDS/nanobot/issues/4043)).
*   **Identity & Access Control:** Open PRs indicate upcoming features for multi-user isolation in group chats, specifically for DingTalk (PR [#4016](https://github.com/HKUDS/nanobot/pull/4016)) and shared Discord channels (PR [#4033](https://github.com/HKUDS/nanobot/pull/4033)).
*   **Core Agent Personas:** PR [#4032](https://github.com/HKUDS/nanobot/pull/4032) proposes an `AUTHORITY.md` file to establish high-priority behavioral constraints, suggesting the roadmap includes more granular system-prompt controls.
*   **Performance Optimizations:** PR [#3997](https://github.com/HKUDS/nanobot/pull/3997) introduces pre-warmed shared tokenizers to reduce latency, which is highly likely to be merged in the next release.

## 7. User Feedback Summary
Users are pushing NanoBot into production across diverse messaging platforms (Discord, WeChat, DingTalk, Matrix), which is exposing friction points. The primary user pain points currently revolve around **context window fragility**—users report the agent "forgets" recent turns when system prompts (like SOUL.md) consume too much of the token budget. Furthermore, users deploying the bot in group settings express a strong need for **per-user session isolation** to prevent conversational bleeding between different participants interacting with the bot in the same channel. 

## 8. Backlog Watch
*   **Cross-Instance Agent Messaging:** PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) introduces a message bus for multi-agent collaboration. This is a complex architectural change that has been open for several days and requires maintainer review regarding security and resource overhead.
*   **Dream-cycle Refactoring:** PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) aims to replace the heavyweight `Dream` class with a lightweight cron loop. Maintainer feedback is needed to greenlight this internal scheduling overhaul.
*   **MCP Reconnection Bug:** PR [#4027](https://github.com/HKUDS/nanobot/pull/4027) addresses a critical dead-session issue where MCP connections fail to reconnect. Given its impact on long-running agents, this PR should be prioritized for review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-29

## 1. Today's Overview
Hermes Agent is currently experiencing a massive surge in community activity and issue tracking following the rollout of a major release. With 50 issues updated (37 open) and 50 pull requests updated (44 open) in the last 24 hours, the repository is operating at peak capacity as contributors and users react to the latest changes. The dominant theme today is release regression, with multiple critical bugs (P0/P1) emerging in the newly shipped `v0.15.0`. Despite these stability challenges, the project's pace of development remains extraordinarily high, with active feature development spanning new integrations, agent protocols, and core tooling improvements.

## 2. Releases
### **v0.15.0 (The Velocity Release)**
*   **Release Date:** May 28, 2026
*   **Stats (since v0.14.0):** 1,302 commits · 747 merged PRs · 1,746 files changed · 282,712 insertions · 36,699 deletions · 321 community contributors. 
*   **Scope:** Included 560+ closed issues (15 P0, 65 P1, 19 security-tagged).
*   **Migration/Health Notes:** The massive scope of this release has introduced immediate deployment friction. Multiple users are experiencing platform-breaking regressions (especially around Docker, PyPI packaging, and dashboarding) requiring same-day hotfixes or workarounds.

## 3. Project Progress
Although 44 PRs remain open, maintainers merged/closed 6 PRs today, focusing heavily on cross-platform parity, provider fixes, and documentation:
*   **Custom Provider & Copilot Fixes:** Restored functionality for custom providers in cron/bg tasks ([PR #33765](https://github.com/NousResearch/hermes-agent/pull/33765)) and corrected context window limits for Copilot models ([PR #29745](https://github.com/NousResearch/hermes-agent/pull/29745)).
*   **Windows Parity:** Fixed gateway restart behavior on Windows to match Unix systems ([PR #33823](https://github.com/NousResearch/hermes-agent/pull/33823)).
*   **Documentation:** Patched broken links left over from the removal of the Atropos RL training integration ([PR #33398](https://github.com/NousResearch/hermes-agent/pull/33398)).

## 4. Community Hot Topics
*   **A2A Protocol Integration:** The most discussed feature is Google's Agent-to-Agent protocol. [Issue #514](https://github.com/NousResearch/hermes-agent/issues/514) (17 comments, 12 👍) highlights strong community demand for inter-agent operability, moving beyond isolated tool-calling to agent-to-agent delegation.
*   **Kanban Database Corruption:** A critical pain point for power users running large tasks. [Issue #33334](https://github.com/NousResearch/hermes-agent/issues/33334) (12 comments) details severe system crashes linked to the Kanban board's SQLite handling. This is pushing demand for a more robust concurrency adapter as proposed in [Issue #33267](https://github.com/NousResearch/hermes-agent/issues/33267).
*   **Remote/VPN Dashboard Access:** [Issue #10567](https://github.com/NousResearch/hermes-agent/issues/10567) (8 👍) highlights a major friction point for self-hosters: the dashboard's hardcoded `localhost` binding prevents secure Tailscale/VPN access.

## 5. Bugs & Stability
The `v0.15.0` release triggered several high-priority bugs (P1/P2) that are currently destabilizing the system for various deployment types:
1.  **[P1] PyPI Packaging Missing Plugins:** [Issue #34034](https://github.com/NousResearch/hermes-agent/issues/34034) reports the `v0.15.0` PyPI package omits `plugin.yaml` manifests, disabling all platform adapters on clean installs. *No fix PR linked yet.*
2.  **[P2] Security Redaction Corrupting Code:** [Issue #33801](https://github.com/NousResearch/hermes-agent/issues/33801) reveals the API key redaction layer replaces text *before* execution, breaking Python/Shell syntax. *Fix PR [#34131](https://github.com/NousResearch/hermes-agent/pull/34131) submitted.*
3.  **[P2] v0.15.0 Dashboard Disconnects TUI:** [Issue #34091](https://github.com/NousResearch/hermes-agent/issues/34091) notes the Docker TUI fails to connect to the events feed post-upgrade.
4.  **[P2] Docker Non-Root User Breaking Skills:** [Issue #34026](https://github.com/NousResearch/hermes-agent/issues/34026) reports `docker_run_as_host_user: true` breaks skill discovery due to a `/root/.hermes` vs `/home/pn/.hermes` mismatch.
5.  **[P1] Anthropic 15-Minute Stream Hangs:** [Issue #28161](https://github.com/NousResearch/hermes-agent/issues/28161) highlights that OpenAI client rebuilds on stale Anthropic streams cause the agent to freeze.
6.  **[P2] CLI Freezes:** [Issue #33961](https://github.com/NousResearch/hermes-agent/issues/33961) reports that `/new`, `/clear`, and `/reset` commands hard-freeze the terminal interface.

## 6. Feature Requests & Roadmap Signals
*   **Operator Tooling & Recovery:** A clear trend is emerging toward self-healing and operational resilience. [PR #34132](https://github.com/NousResearch/hermes-agent/pull/34132) introduces "ToolCallRepair" to recover truncated JSON and suppress looping tool calls.
*   **Messaging Integrations:** Work is actively moving forward on new chat platforms. The community is driving integrations for Zulip ([PR #3335](https://github.com/NousResearch/hermes-agent/pull/3335)), Svix webhooks ([PR #30115](https://github.com/NousResearch/hermes-agent/pull/30115)), and Telegram emoji reaction learning ([Issue #18408](https://github.com/NousResearch/hermes-agent/issues/18408)).
*   **Vision Enhancements:** [PR #25442](https://github.com/NousResearch/hermes-agent/pull/25442) and [Issue #34087](https://github.com/NousResearch/hermes-agent/issues/34087) signal that expanding and stabilizing multi-modal vision tool support (GIF conversion, token limit adjustments) will likely be included in upcoming patches.

## 7. User Feedback Summary
Users are highly enthusiastic about the sheer velocity of the `v0.15.0` release, particularly its massive scale of improvements. However, satisfaction is currently tempered by deployment friction. Self-hosters and Docker users feel especially impacted by breaking changes in basic configurations (TUI event feeds, home directory mapping, and hardcoded localhost bindings). The rapid iteration is highly praised, but users express a need for better test coverage around platform upgrades, plugin discovery, and state/context management before major version bumps.

## 8. Backlog Watch
Several crucial patches and feature requests have been lingering and urgently require maintainer review to restore stability:
*   **Test Suite Stabilization:** [PR #27440](https://github.com/NousResearch/hermes-agent/pull/27440) is essential for fixing flaky, order-dependent tests on macOS/full-suite runs. Merging this would prevent regressions like the ones seen in v0.15.0.
*   **Auth Overhaul:** [PR #33759](https://github.com/NousResearch/hermes-agent/pull/33759) (disabling legacy session keys for JWT-only inference) needs a decision to prevent auth routing confusion (as seen in [Issue #33192](https://github.com/NousResearch/hermes-agent/issues/33192)).
*   **Discord History Bug:** [PR #26301](https://github.com/NousResearch/hermes-agent/pull/26301) has been open since mid-May, blocking e2e tests for Discord channels lacking `.history` attributes.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-29

## 1. Today's Overview
PicoClaw is currently experiencing a high-velocity development phase, characterized by a substantial automated dependency management workload alongside focused core improvements. The project saw **29 pull requests** and **6 issues** updated in the last 24 hours, indicating very active maintenance. The merging of 8 PRs, coupled with a fresh nightly release, shows that the team is actively pushing the codebase toward the v0.2.9 milestone. Much of the PR volume is driven by Dependabot keeping frontend and backend libraries up to date, while core contributors are focusing heavily on memory management stability and provider expansion.

## 2. Releases
*   **nightly: v0.2.9-nightly.20260528.28ec5793**
    *   **Details:** Automated nightly build targeting the `v0.2.9` release.
    *   **Changelog:** Users can track the delta between the last stable release and `main` via the [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main).
    *   **Migration/Breaking Changes:** None explicitly stated for the nightly build itself, but users should exercise caution as this is an automated, potentially unstable build.

## 3. Project Progress
Out of the 29 updated PRs, 8 were closed/merged today, representing tangible progress in several key areas:
*   **Memory & Core Stability:** Merged fixes for the JSONL memory store, specifically addressing crash-consistency gaps and hot-path cloning inefficiencies (e.g., PR [#2913](https://github.com/sipeed/picoclaw/pull/2913), PR [#2907](https://github.com/sipeed/picoclaw/pull/2907)).
*   **Execution & Security:** Closed PRs include important safety guard improvements for quoted heredoc Markdown bodies in the `exec` tool ([#2858](https://github.com/sipeed/picoclaw/pull/2858)), and enhancements for provider fallback chain handling for expired contexts ([#2905](https://github.com/sipeed/picoclaw/pull/2905)).
*   **Dependency Upgrades:** A large sweep of dependency updates was processed today, notably major bumps to the Anthropic Go SDK (to v1.46.0, PR [#2962](https://github.com/sipeed/picoclaw/pull/2962)) and Lark Suite SDK (to v3.9.3, PR [#2963](https://github.com/sipeed/picoclaw/pull/2963)), alongside various React frontend package bumps.

## 4. Community Hot Topics
The most actively discussed issues highlight integration and platform-specific pain points:
*   **Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887) (Open, 7 comments):** RISC-V `.deb` build is non-functional with OpenAI models. The deep engagement here signals a strong community need for reliable edge-device/RISC-V support, which aligns well with PicoClaw's lightweight ethos.
*   **Issue [#1738](https://github.com/sipeed/picoclaw/issues/1738) (Closed, 3 comments, 1 thumb up):** A request for OpenAI API format channel support. This represents a significant architectural need—users want PicoClaw to act as a backend node in larger agentic frameworks, seamlessly exposing its capabilities via standard OpenAI-compatible endpoints.
*   **Issue [#2916](https://github.com/sipeed/picoclaw/issues/2916) (Open, 3 comments):** CPU, Memory, and IO optimizations. Community members are actively analyzing the codebase to propose performance improvements, indicating that power-users are pushing PicoClaw to its limits in production or resource-constrained environments.

## 5. Bugs & Stability
*   **High Severity - RISC-V Compatibility ([#2887](https://github.com/sipeed/picoclaw/issues/2887)):** The `.deb` version on RISC-V failing to connect with OpenAI models. This is a platform regression that effectively bricks the app for RISC-V users. A fix is likely prioritized given the comment activity.
*   **Medium Severity - Fallback Context Handling ([#2905](https://github.com/sipeed/picoclaw/pull/2905)):** Expired request contexts previously caused unnecessary processing delays in the provider fallback chain. Fixed in a recent merged PR.
*   **Low Severity - Termux SSL Handling ([#2944](https://github.com/sipeed/picoclaw/issues/2944)):** X509 certificate errors in Termux environments. While a fix was merged/acknowledged (requiring explicit `SSL_CERT_FILE` setting), this highlights a friction point for users trying to run PicoClaw locally on Android/Termux.

## 6. Feature Requests & Roadmap Signals
Several open PRs and issues signal the near-term direction of the project:
*   **Agentic Integrations:** PR [#2917](https://github.com/sipeed/picoclaw/pull/2917) adds the **NEAR AI Cloud provider**, indicating a push towards decentralized/TEE-capable AI environments. Similarly, PR [#2915](https://github.com/sipeed/picoclaw/pull/2915) introduces better multimodal defaults for the MiMo provider.
*   **Rich Media Outbound:** Issue [#2855](https://github.com/sipeed/picoclaw/issues/2855) requests extending the message tool to support media attachments rather than just text, reflecting a need for multi-modal agent-to-user communication.
*   **Prediction:** Given the focus on standardizing provider catalogs and current open PRs, the upcoming v0.2.9 stable release will likely focus heavily on **broadening LLM provider compatibility** (decentralized, multimodal) and **hardening the memory/state management layer**.

## 7. User Feedback Summary
Real-world usage reveals distinct user workflows and pain points:
*   **Embedding over Standalone:** Users like `j4ckzh0u` ([#1738](https://github.com/sipeed/picoclaw/issues/1738)) are trying to embed PicoClaw into larger existing systems rather than using it as a standalone chatbot, requiring standardized API exposures.
*   **Mobile & Edge Environments:** A noticeable subset of users runs PicoClaw on Android/Termux ([#2944](https://github.com/sipeed/picoclaw/issues/2944)) and RISC-V hardware ([#2887](https://github.com/sipeed/picoclaw/issues/2887)). These users occasionally struggle with standard Go binary behaviors (like SSL cert discovery) in non-standard file system hierarchies.
*   **Security-conscious:** Users are actively highlighting the need for security hardening, as seen in PR [#2900](https://github.com/sipeed/picoclaw/pull/2900) (CSRF protection, path traversal), showing that PicoClaw is being evaluated for exposed, internet-facing deployments.

## 8. Backlog Watch
The following items require immediate maintainer attention to prevent stagnation:
*   **Stale Dependency PRs:** A massive backlog of `dependabot[bot]` PRs is accumulating and going stale (e.g., React bumps in [#2927](https://github.com/sipeed/picoclaw/pull/2927), Router bumps in [#2925](https://github.com/sipeed/picoclaw/pull/2925)). While tedious, merging or closing these is necessary to keep the codebase secure and maintainable.
*   **Security PRs:** PR [#2900](https://github.com/sipeed/picoclaw/pull/2900) adds crucial web security fixes (CSRF, path traversal). Despite being open for over a week, it hasn't been merged. Given that it addresses web-backend vulnerabilities, it should be fast-tracked for review.
*   **Project Funding:** Issue [#2912](https://github.com/sipeed/picoclaw/issues/2912) is a quick win suggested by the community to add a `FUNDING.yml` to support the project's maintenance burden. Maintainers should address this to support ongoing high-velocity development.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-29

## 1. Today's Overview
NanoClaw experienced a high-activity day with seven pull requests updated and four issues actioned, indicating a highly engaged developer community and responsive maintainers. The project's focus is currently split between hardening existing messaging channel integrations—most notably WhatsApp and Telegram—and expanding the agent's self-modification and tooling capabilities. Four pull requests were merged or closed today, demonstrating a healthy throughput of code review and deployment. While there were no new version releases, the concurrent bumping of core SDK dependencies and patching of critical security surfaces suggest that maintainers are actively preparing the codebase for a stable release. Overall, project health appears robust, characterized by active feature iteration and prompt attention to structural bugs.

## 2. Releases
No new releases were published today. However, the merging of dependency upgrades (PR #2637) and critical structural fixes implies that a new version may be imminent once the currently open PRs are stabilized and reviewed.

## 3. Project Progress
Several significant contributions advanced today, covering infrastructure, security, and agent capabilities:
*   **Dependency Upgrades:** PR [#2637](https://github.com/nanocoai/nanoclaw/pull/2637) was closed, successfully bumping `claude-code` to 2.1.154 and `claude-agent-sdk` to 0.3.154, which includes a necessary migration of peer dependencies.
*   **Self-Modification Evolution:** PR [#2635](https://github.com/nanocoai/nanoclaw/pull/2635) was closed, introducing `patch_bridge`. This allows AI agents to propose and apply source code patches to their own host-side MCP bridges, a major leap in autonomous agent capabilities.
*   **Integration Skills:** PR [#102](https://github.com/nanocoai/nanoclaw/pull/102) (Notion integration) and PR [#5](https://github.com/nanocoai/nanoclaw/pull/5) (cross-group scheduled task fix) were finally closed, clearing out long-standing community contributions.
*   **Security & Infrastructure (Open):** PR [#2630](https://github.com/nanocoai/nanoclaw/pull/2630) was introduced to harden the session manager against symlink-based directory traversal in inbound attachment sinks.

## 4. Community Hot Topics
*   **Provider Flexibility:** The most engaged issue today is Issue [#80](https://github.com/nanocoai/nanoclaw/issues/80) (60 👍, 34 comments). The community is highly invested in breaking NanoClaw's tight coupling with the Anthropic/Claude ecosystem to support alternatives like OpenAI, Gemini, and Opencode, driven by recent reports of Anthropic cracking down on indirect API usage.
*   **Telegram Swarm Migration:** Issue [#2632](https://github.com/nanocoai/nanoclaw/issues/2632) highlights underlying anxiety among users maintaining forks. The transition from v1 to v2 has left the status of the multi-bot "Telegram swarm" ambiguous, showing that users are heavily relying on NanoClaw for complex, multi-identity deployments and need clearer migration paths.

## 5. Bugs & Stability
*   **High Severity - WhatsApp Session Self-Destruct:** Issue [#2638](https://github.com/nanocoai/nanoclaw/issues/2638) reports a critical logic flaw where 1-on-1 WhatsApp chats trigger the bot in `mention` mode, causing spam. Concurrently, PR [#2633](https://github.com/nanocoai/nanoclaw/pull/2633) addresses a related structural bug where WhatsApp adapters inadvertently wipe authentication credentials during shutdown on Baileys 7.x. *Status: Fix PR is currently open and pending review.*
*   **Medium Severity - Credential Injection for MCP:** Issue [#2636](https://github.com/nanocoai/nanoclaw/issues/2636) reveals that the OneCLI credential vault does not inject secrets directly into MCP server environment variables, breaking external API integrations for MCP tools.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Provider Support:** The demand for an agnostic backend (Issue [#80](https://github.com/nanocoai/nanoclaw/issues/80)) is massive (60 👍). This is likely a prime candidate for the next major roadmap phase.
*   **Cloud Provider Integrations:** PR [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) introduces a skill for integrating an AWS credential proxy daemon (`paws4claws`), signaling a trend toward giving NanoClaw agents secure, sandboxed access to cloud infrastructure.
*   **Autonomous Patching:** With the merging of `patch_bridge` (PR [#2635](https://github.com/nanocoai/nanoclaw/pull/2635)), the roadmap clearly points toward fully autonomous, self-healing AI agents that can modify their own runtime environments.

## 7. User Feedback Summary
Users are pushing NanoClaw into production environments that require complex, multi-platform messaging and secure cloud management. There is notable friction regarding WhatsApp reliability, specifically around session management and group-vs-DM distinction. Furthermore, the community expresses a strong desire for "provider independence"—users do not want their applications held hostage to a single LLM provider's terms of service. Overall, satisfaction with the project's architecture remains high, as evidenced by sophisticated community contributions aimed at extending rather than patching the core system.

## 8. Backlog Watch
*   **Long-standing PRs needing final review:** PR [#102](https://github.com/nanocoai/nanoclaw/pull/102) (Notion integration) has been open since February 2026 and was just updated/closed today. Maintainers should ensure the newly introduced PRs ([#2630](https://github.com/nanocoai/nanoclaw/pull/2630), [#2633](https://github.com/nanocoai/nanoclaw/pull/2633), [#2634](https://github.com/nanocoai/nanoclaw/pull/2634)) do not languish in the review cycle for months.
*   **Architectural Clarity Needed:** Issue [#2632](https://github.com/nanocoai/nanoclaw/issues/2632) requires maintainer input regarding the official status of the Telegram swarm feature in v2. Ignoring this could lead to fragmented community forks.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw Project Digest (2026-05-29)

### 1. Today's Overview
NullClaw is experiencing a highly active maintenance phase, closing out two long-standing bugs and merging five pull requests in the last 24 hours, alongside progressing work on a major new subagent feature. Although no new software releases were cut today, the volume of closed PRs indicates heavy merging activity preparing the codebase for a future release. The focus remains heavily on platform stability, security hardening, and expanding LLM provider compatibility. Overall, project health appears robust, with active contributions addressing both core engine reliability and user-facing configuration issues.

### 2. Releases
No new releases were recorded today.

### 3. Project Progress
The development team merged or closed five PRs, highlighting a push toward better provider support, security, and core engine stability:
*   **Provider Expansion:** [PR #922](https://github.com/nullclaw/nullclaw/pull/922) was merged, adding native support for **NEAR AI Cloud** and **Atlas Cloud** as OpenAI-compatible providers.
*   **Bug Fixes:** [PR #924](https://github.com/nullclaw/nullclaw/pull/924) was merged, resolving a silent failure where Telegram accounts with numeric user IDs were ignored during channel initialization. 
*   **Core Engine Fix:** [PR #878](https://github.com/nullclaw/nullclaw/pull/878) fixed a critical threading issue on POSIX systems by implementing a true `nanosleep` path, ensuring NullClaw's managed threads suspend correctly at the OS level.
*   **Security Hardening:** [PR #907](https://github.com/nullclaw/nullclaw/pull/907) was closed/merged, removing vulnerable credential usage in HTTP helpers and enforcing strict `allow_from` validations for Telegram, Discord, and LINE webhooks.
*   **Build Tooling:** [PR #887](https://github.com/nullclaw/nullclaw/pull/887) was merged to ensure the project builds seamlessly on the upcoming `zig v0.16` for Windows and Linux.
*   **Ongoing Feature Work:** [PR #783](https://github.com/nullclaw/nullclaw/pull/783) (open) continues active development on a massive overhaul introducing a DB-backed cron subagent engine and JSON CLI outputs.

### 4. Community Hot Topics
While today's updates lacked high comment counts, the recently closed issues highlight a significant friction point for the community:
*   **Telegram Configuration Bug:** [Issue #901](https://github.com/nullclaw/nullclaw/issues/901) and [Issue #869](https://github.com/nullclaw/nullclaw/issues/869) represent a recurring frustration where valid `config.json` files were rejected. The underlying need here is robust type handling—users naturally input Telegram user IDs as numbers, but the parser silently dropped them.

### 5. Bugs & Stability
Bugs addressed today ranked by severity:
1.  **High - Thread Blocking on POSIX:** Fixed by [PR #878](https://github.com/nullclaw/nullclaw/pull/878). The `std_compat.thread.sleep()` function was merely yielding instead of suspending OS threads, which could lead to severe CPU overhead and thread starvation in concurrent agent tasks.
2.  **Medium - Silent Config Failure (Telegram/Discord):** Reported in [Issue #901](https://github.com/nullclaw/nullclaw/issues/901) and [Issue #869](https://github.com/nullclaw/nullclaw/issues/869). Numeric IDs in `allow_from` lists caused messaging channels to drop accounts silently. **Status:** Resolved via [PR #924](https://github.com/nullclaw/nullclaw/pull/924).
3.  **Low - Build Failure on Zig v0.16:** Fixed by [PR #887](https://github.com/nullclaw/nullclaw/pull/887), ensuring build compatibility for developers tracking the latest Zig compiler.

### 6. Feature Requests & Roadmap Signals
Recent merged PRs and active development strongly signal the project's near-term roadmap:
*   **Advanced Autonomous Tasking:** [PR #783](https://github.com/nullclaw/nullclaw/pull/783) (feat: cron subagent) is actively being iterated on. This indicates the next major version of NullClaw will likely feature deeply integrated, DB-backed job scheduling directly within the agent framework.
*   **Multi-Cloud Provider Agnosticism:** The merging of [PR #922](https://github.com/nullclaw/nullclaw/pull/922) (NEAR AI and Atlas Cloud) signals a push to make NullClaw a truly model-agnostic ecosystem right out of the box.

### 7. User Feedback Summary
*   **Pain Points:** Users setting up messaging channels (like Telegram) experienced confusing configurations where commands like `nullclaw config show` displayed correct setups, but `nullclaw channel list` contradicted this. This was a friction point that likely blocked non-technical users from deploying channel integrations.
*   **Satisfaction/Use Cases:** The explicit focus on removing credential-bearing curl requests ([PR #907](https://github.com/nullclaw/nullclaw/pull/907)) shows that the user base heavily utilizes NullClaw for webhook-based messaging bots, requiring strict security standards for endpoint exposure.

### 8. Backlog Watch
*   **[PR #783](https://github.com/nullclaw/nullclaw/pull/783) (feat: cron subagent):** This is a massive, high-impact PR open since April 2026. It touches security, DB scheduling, and CLI output. It requires continued, focused maintainer attention to finalize testing and merge safely.
*   **Zero-Comment Closed Issues:** It is notable that [Issue #901](https://github.com/nullclaw/nullclaw/issues/901) and [Issue #869](https://github.com/nullclaw/nullclaw/issues/869) were closed with 0 comments. Maintainers should ensure that users are being properly guided to the fix (likely updating to the version that includes PR #924) to maintain a healthy community sentiment.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-29

## 1. Today's Overview
The IronClaw project experienced a **very high level of activity** over the last 24 hours, with 50 issues updated and 45 pull requests touched (32 of which were merged/closed). This indicates a highly active, rapidly iterating development cycle, likely sprint-driven, focusing heavily on the "Reborn" architecture and new channel integrations. The maintainers and core contributors are aggressively merging significant foundational PRs spanning auth, agent loops, and tooling. There were **no new releases** cut today, suggesting the team is in the middle of a heavy integration phase rather than a stabilization phase.

## 2. Releases
None. No new official releases were published today. The project is actively merging database migrations and breaking architectural PRs, indicating that these changes are being staged for a future minor or major version bump.

## 3. Project Progress
Development today was completely dominated by the **Reborn** initiative (a major architectural evolution of the agent runtime) and **Channel integrations**. 
*   **Auth & SSO:** Major progress in migrating to a new typed auth-flow. PR [#4182](https://github.com/nearai/ironclaw/pull/4182) introduced a complete WebChat v2 Google SSO surface with PKCE and CSRF protections. PR [#4174](https://github.com/nearai/ironclaw/pull/4174) implemented the Google OAuth refresh lifecycle and durable token cleanup.
*   **Agent Loop & Tooling:** The core coding tools received significant overhauls. PR [#4199](https://github.com/nearai/ironclaw/pull/4199) simplified `apply_patch` match semantics to act like direct search/replace, and PR [#4189](https://github.com/nearai/ironclaw/pull/4189) fixed a state issue where `apply_patch` failed immediately after `write_file`. PR [#4207](https://github.com/nearai/ironclaw/pull/4207) improved how the agent loop determines when to admit final replies deterministically.
*   **New Channels & MVPs:** PR [#4178](https://github.com/nearai/ironclaw/pull/4178) introduced host-managed Feishu/Lark websocket intake. PR [#4190](https://github.com/nearai/ironclaw/pull/4190) wired up local-dev skill management mounts.
*   **Architecture:** PR [#4196](https://github.com/nearai/ironclaw/pull/4196) exposed work summary projections for live driver progress, and PR [#4200](https://github.com/nearai/ironclaw/pull/4200) added comprehensive Reborn agent architecture documentation to help orient new contributors.

## 4. Community Hot Topics
The most actively discussed issues center around security, auth architecture, and agent scalability:
*   **Security of Path Credentials:** Issue [#3917](https://github.com/nearai/ironclaw/issues/3917) (4 comments) raises a crucial security concern regarding `RuntimeCredentialTarget::PathPlaceholder`. The author points out that injecting secrets into URL path segments has a worse leakage surface than Header/Query injection, sparking a debate on whether to harden or kill this feature before it ships.
*   **Production Auth Boundaries:** Issue [#4176](https://github.com/nearai/ironclaw/issues/4176) (3 comments) and Issue [#4175](https://github.com/nearai/ironclaw/issues/4175) (2 comments) track the complex wiring of WASM, MCP, and first-party auth consumers through the new "Reborn" staged credentials. The underlying need is a crash-safe, unified auth boundary across diverse runtime targets.
*   **Sub-agent Architecture:** Issue [#3798](https://github.com/nearai/ironclaw/issues/3798) (3 comments) proposes a design for sub-agent spawning in the Reborn agent loop, highlighting the community's need for complex, multi-agent orchestration.
*   **Web UI Deletion:** A long-standing user request, Issue [#1907](https://github.com/nearai/ironclaw/issues/1907) (2 comments, 1 reaction), asks for the ability to delete conversations/threads in the Web UI.

## 5. Bugs & Stability
Several high-impact bugs were reported regarding the newly introduced WeCom channel integration in staging:
*   **[High Severity] Vision Analysis Stale Images:** Issue [#4197](https://github.com/nearai/ironclaw/issues/4197) reports that the bot analyzes previous/stale images instead of the currently uploaded one. No fix PR is mentioned yet.
*   **[Medium Severity] State Tooling Bug:** The bug where `apply_patch` failed after `write_file` was immediately addressed and fixed via PR [#4189](https://github.com/nearai/ironclaw/pull/4189).
*   **[Medium Severity] WeCom UX/Integration Issues:** sunglow666 filed a suite of issues from a staging validation pass. These include group chats and private DMs being erroneously merged in the Web UI ([#4194](https://github.com/nearai/ironclaw/issues/4194)), highly unstable image attachments ([#4195](https://github.com/nearai/ironclaw/issues/4195)), and missing owner visibility for unpaired users ([#4198](https://github.com/nearai/ironclaw/issues/4198)).

## 6. Feature Requests & Roadmap Signals
*   **Conversation Deletion:** ([#1907](https://github.com/nearai/ironclaw/issues/1907)) Users have been requesting basic thread deletion for almost two months. As the WebChat v2 interface matures, this QoL feature is highly likely to be picked up soon.
*   **IronHub Runtime Installs:** PR [#3737](https://github.com/nearai/ironclaw/pull/3737) is an ambitious open PR allowing agents to install tools/skills dynamically at runtime from IronHub. If merged, this will be a flagship feature for the next version.
*   **Typed Diff Previews:** PR [#4184](https://github.com/nearai/ironclaw/pull/4184) introduces unified diff display previews for `write_file` and `apply_patch`, heavily requested by users wanting better visibility into agent actions.
*   **Async HTTP Egress:** Issue [#4206](https://github.com/nearai/ironclaw/issues/4206) proposes making runtime HTTP egress fully async end-to-end. This is a roadmap signal for significant performance scaling.

## 7. User Feedback Summary
User feedback is currently split between enterprise integration pains and agent observability.
*   **Enterprise Onboarding Friction:** Users setting up channels (specifically WeCom) are frustrated by the lack of prerequisite guidance ([#4193](https://github.com/nearai/ironclaw/issues/4193)). The UI currently lacks setup URLs and explanations of enterprise admin requirements.
*   **Agent Observability:** Users want to see exactly what the agent is changing. The community reacts positively to PRs like [#4184](https://github.com/nearai/ironclaw/pull/4184) (diff previews) and [#4196](https://github.com/nearai/ironclaw/pull/4196) (work summary projections), indicating that trusting the agent's actions is a primary user need.
*   **Overall Satisfaction:** Despite integration friction, the rapid closure of bugs like `apply_patch` state mismatch ([#4189](https://github.com/nearai/ironclaw/pull/4189)) shows a highly responsive maintainer team, contributing to strong community trust.

## 8. Backlog Watch
*   **WebChat v2 SSO Completion:** Issue [#4204](https://github.com/nearai/ironclaw/issues/4204) is sitting open waiting to wire up GitHub and NEAR providers following the completed Google SSO work.
*   **Massive File Refactoring:** Issue [#4209](https://github.com/nearai/ironclaw/issues/4209) notes that `ironclaw_host_runtime/src/lib.rs` has ballooned to 1828 lines (exceeding the project's 1500-line architecture limit). This needs maintainer attention to decompose the egress modules before further auth work is layered on.
*   **Auth Lifecycle in WASM/MCP:** Issue [#4176](https://github.com/nearai/ironclaw/issues/4176) is an open epic tracking the wiring of first-party, WASM, and MCP auth consumers. With the core PRs merged, this issue needs an owner to validate the integration and close it out.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-29

## 1. Today's Overview
LobsterAI experienced a highly active development day, with 29 pull requests updated (20 open, 9 merged/closed) and 1 new issue reported in the last 24 hours. The core maintainers are heavily focused on refining the newly introduced "Kit" (expert suite) ecosystem, enhancing the plugin management lifecycle, and hardening core system processes like Agent IDs and MCP server management. While the volume of open PRs suggests a rapid iteration cycle, a significant portion of today's activity involves pushing forward long-standing `stale` PRs, alongside several crucial architectural merges. 

## 2. Releases
No new official releases were recorded today. The merged architectural changes and feature additions are currently targeting the main development branch for an upcoming release.

## 3. Project Progress
The engineering team merged 9 PRs today, signaling solid advancements in UI/UX, plugin management, and system stability:
*   **Kit & Plugin Ecosystem:** The major feature for [Kit (Expert Suite) marketplace and conversation integration](https://github.com/netease-youdao/LobsterAI/pull/2060) was merged, allowing users to bundle and install multiple skills at once. Additionally, the system now supports [automated plugin update checks for npm and ClawHub sources](https://github.com/netease-youdao/LobsterAI/pull/2069).
*   **Plugin Architecture:** Performance and stability improved by [deferring plugin settings saves with a batch write and dirty guard](https://github.com/netease-youdao/LobsterAI/pull/2068), preventing redundant gateway restarts.
*   **Bug Fixes:** A critical flaw where [tool results were incorrectly parsed](https://github.com/netease-youdao/LobsterAI/pull/2070) (causing false artifact triggers from standard command outputs) was fixed. UI improvements were also merged for [image attachment click-to-preview](https://github.com/netease-youdao/LobsterAI/pull/2061) and fixing [Kits not syncing to Redux on "try-asking"](https://github.com/netease-youdao/LobsterAI/pull/2067).
*   **Process Management:** Merged a vital backend fix to [kill stdio process trees on Windows](https://github.com/netease-youdao/LobsterAI/pull/2066), resolving orphaned node processes during MCP server management.

## 4. Community Hot Topics
Community and contributor activity is currently focused on Agent lifecycle management and UI polishing:
*   **Agent ID Architecture:** [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) (originally [PR #1584](https://github.com/netease-youdao/LobsterAI/pull/1584)) introduces short UUIDs for Agent IDs. This has garnered attention as it solves a critical "data resurrection" bug where deleted agents left local file remnants that incorrectly attached to new agents of the same name.
*   **Scheduled Tasks Overhaul:** [PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488) proposes a comprehensive visual upgrade to the scheduled tasks module, moving it to a 2-column card grid with history grouping and search. This represents a strong community push for UX modernization.

## 5. Bugs & Stability
*   **[Medium] Scheduled Task Creation Error:** The only new issue opened today, [Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071), reports a critical failure when users attempt to create a scheduled task on version `2026.5.27`. No fix PR is attached yet.
*   **[Low] State Management Leaks:** Several long-standing UI bugs are awaiting review, including [PR #1707](https://github.com/netease-youdao/LobsterAI/pull/1707) which fixes an issue where switching Agents fails to clear the input box draft, and [PR #1482](https://github.com/netease-youdao/LobsterAI/pull/1482) which fixes scheduled tasks losing their descriptions or enabled states after being edited.
*   **[Low] Memory Leaks:** [PR #1478](https://github.com/netease-youdao/LobsterAI/pull/1478) addresses a React memory leak in the `CopyButton` component where timers fail to clear upon unmount.

## 6. Feature Requests & Roadmap Signals
Several open PRs indicate robust roadmap directions for future versions:
*   **Agent Automation & Triggers:** [PR #1484](https://github.com/netease-youdao/LobsterAI/pull/1484) proposes a Gmail Watcher module to automatically trigger agent sessions upon receiving emails, expanding LobsterAI into proactive automation.
*   **Model Failover Resilience:** [PR #1483](https://github.com/netease-youdao/LobsterAI/pull/1483) introduces automatic fallback to secondary LLM providers if the primary model suffers from rate limits or downtime.
*   **Accessibility & UX:** [PR #1682](https://github.com/netease-youdao/LobsterAI/pull/1682) implements Text-to-Speech (TTS) for AI replies using native Web Speech APIs, requiring zero external dependencies.

## 7. User Feedback Summary
Users are actively using the tool for automated scheduling and multi-agent workflows, as evidenced by today's bug reports. The main pain points revolve around data persistence and state management. Specifically, users are frustrated by "ghost data"—where local files and workspace settings persist even after an Agent is deleted—and minor UI annoyances like drafts carrying over between different Agent contexts. The demand for better local tool integration is highlighted by ongoing fixes for MCP process management on Windows.

## 8. Backlog Watch
Several valuable contributions appear stalled and require maintainer triage:
*   **Agent State Isolation:** [PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494) (open since April 6) attempting to isolate skill selections per conversation session, and [PR #1479](https://github.com/netease-youdao/LobsterAI/pull/1479) preventing duplicate skill folder installs, urgently need reviews as the new Kit marketplace rolls out.
*   **UX Revisions:** [PR #1481](https://github.com/netease-youdao/LobsterAI/pull/1481) fixing horizontal scroll issues with active skill chips in the prompt bar needs final approval to improve the main chat interface experience.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-29

## 1. Today's Overview
Moltis is demonstrating strong project health and highly active maintenance, evidenced by a productive day that saw **7 issues closed and 4 PRs merged** against only 1 newly active issue and 1 open PR. The core maintainer team (led by developer `penso`) appears highly responsive, systematically knocking out community-reported bugs with targeted, regression-tested fixes. Activity is heavily focused on platform stability, squashings bugs related to Discord integration, cron job execution, provider compatibility, and UI session management. With zero new releases cut today, the project is likely staging these accumulated fixes for a forthcoming patch release.

## 2. Releases
No new releases were published today (2026-05-29).

## 3. Project Progress
Development momentum today was highly execution-oriented, focusing exclusively on stability and bug extermination. Four pull requests were merged/closed, advancing the following areas:
*   **Discord Integration:** Fixed a silent failure where voice messages were dropped without logs ([PR #1081](https://github.com/moltis-org/moltis/pull/1081)).
*   **LLM Provider Compatibility:** Resolved a breaking `2013` error with MiniMax providers by stripping incompatible user name fields from API payloads ([PR #1078](https://github.com/moltis-org/moltis/pull/1078)).
*   **Web UI / Session Management:** Fixed an annoying UX bug where forking a message at a specific prompt accidentally included subsequent responses instead of the exact response clicked ([PR #1080](https://github.com/moltis-org/moltis/pull/1080)).
*   **Cron & Scheduling:** Resolved a critical misfire where cron jobs explicitly configured for "Host" execution were incorrectly falling back to sandbox execution due to agent preset overrides ([PR #1079](https://github.com/moltis-org/moltis/pull/1079)).

Additionally, a new feature PR is currently under review: an opt-in `/tmux` channel command intended to bridge external terminal control directly into Moltis ([PR #1082](https://github.com/moltis-org/moltis/pull/1082)).

## 4. Community Hot Topics
*   **Most Active Issue:** The open issue [Issue #235: PTY-based interactive Claude Code CLI control](https://github.com/moltis-org/moltis/issues/235) remains a focal point of community interest (5 comments, 1 thumbs up). The underlying need here is advanced multi-agent orchestration; users want Moltis to act as an orchestrator for external CLI agents (like Claude Code), which currently break or downgrade functionality when spawned as non-interactive subprocesses.
*   **Webapp Connectivity:** [Issue #385: Webapp Won't Connect](https://github.com/moltis-org/moltis/issues/385) saw renewed activity and was subsequently closed (3 comments), indicating a persistent pain point for newer users setting up the local UI that the maintainers have now resolved.
*   **WebUI Sub-Agents:** [Issue #906: Make sub-agents configurable in WebUI](https://github.com/moltis-org/moltis/issues/906) was recently closed. This signals strong community demand for visual, dashboard-based management of complex multi-agent topologies rather than relying solely on YAML/JSON configurations.

## 5. Bugs & Stability
Today was highly successful in resolving user-facing stability issues. Reported bugs and their statuses include:
1.  **[Medium-High] Cron Execution Misrouting:** Cron jobs intended for the host were forced into sandboxes ([Issue #1072](https://github.com/moltis-org/moltis/issues/1072)). **Fix Merged:** [PR #1079](https://github.com/moltis-org/moltis/pull/1079).
2.  **[Medium] Provider API Rejection:** Group chats using the MiniMax provider crashed with a `2013` invalid params error due to username consistency checks ([Issue #1077](https://github.com/moltis-org/moltis/issues/1077)). **Fix Merged:** [PR #1078](https://github.com/moltis-org/moltis/pull/1078).
3.  **[Medium] WebUI State Management:** Message "forks" were capturing the wrong context bounds ([Issue #1075](https://github.com/moltis-org/moltis/issues/1075)). **Fix Merged:** [PR #1080](https://github.com/moltis-org/moltis/pull/1080).
4.  **[Low-Medium] Silent Discord Failures:** Voice messages on Discord silently disappeared without logging ([Issue #817](https://github.com/moltis-org/moltis/issues/817)). **Fix Merged:** [PR #1081](https://github.com/moltis-org/moltis/pull/1081).
5.  **[Low] Cron Model Resolution:** Isolated cron jobs failed if the payload model was omitted ([Issue #333](https://github.com/moltis-org/moltis/issues/333)). **Status:** Closed.

## 6. Feature Requests & Roadmap Signals
*   **Host-Level Terminal Access:** The open [PR #1082 (Gated tmux control command)](https://github.com/moltis-org/moltis/pull/1082) is a strong roadmap signal. It suggests Moltis is moving toward tighter integration with system-level terminals, possibly as a stepping stone to solving the interactive CLI agent requests (like Issue #235).
*   **Visual Agent Topology:** The closing of [Issue #906](https://github.com/moltis-org/moltis/issues/906) suggests that the next minor/patch release will likely include UI updates allowing users to configure multi-agent setups (sub-agents) directly from the WebUI.

## 7. User Feedback Summary
Users are pushing Moltis into advanced, multi-agent production environments, which is exposing edge cases in how Moltis handles external processes (PTY/spawn limitations) and scheduled tasks. There is a clear dichotomy in user needs: enterprise/advanced users require complex orchestration (tmux access, sub-agent configurability, isolated cron executions), while regular users still experience basic friction (Webapp connectivity setup, message forking UX). The rapid closure of these friction points today reflects high user satisfaction regarding the maintainer's turnaround time.

## 8. Backlog Watch
*   **[Needs Maintainer Attention] [Issue #235: PTY-based interactive CLI control](https://github.com/moltis-org/moltis/issues/235):** Open since February 2026, this issue is highly upvoted and touches on complex architectural changes (pseudo-terminal allocation for spawned agents). While PR #1082 introduces tmux primitives, this specific issue requires deeper orchestration framework work and needs a maintainer roadmap comment to set community expectations.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-05-29

## 1. Today's Overview
CoPaw is currently experiencing a high-velocity development phase with no signs of slowing down. In the last 24 hours, the project saw a massive flurry of activity, including 43 updated issues (32 open) and 39 pull requests (17 open). The community is highly engaged, actively testing the v1.1.9 desktop release and proposing architectural enhancements. While core maintainers and external contributors are merging UI/UX and stability fixes at a rapid pace, the influx of new bug reports related to the Windows Tauri desktop client suggests that the recent packaging efforts require further stabilization.

## 2. Releases
No new releases were recorded today. The community is primarily testing against the recently published v1.1.9 / v1.19 desktop builds.

## 3. Project Progress
Today saw 22 merged or closed PRs, heavily focusing on frontend UI/UX refinement and backend stability:
*   **Desktop & CLI packaging:** PR [#4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) introduced a bundled CLI executable for the Tauri sidecar to fix cron job execution issues, and PR [#4683](https://github.com/agentscope-ai/QwenPaw/pull/4683) fixed external link and download regressions in the desktop client.
*   **Session & UI Fixes:** PR [#4755](https://github.com/agentscope-ai/QwenPaw/pull/4755) fixed an annoying bug where chat input drafts reappeared after navigating back to the chat window. PR [#4725](https://github.com/agentscope-ai/QwenPaw/pull/4725) added loading states for workspace downloads, and PR [#4750](https://github.com/agentscope-ai/QwenPaw/pull/4750) resolved cron timezone display issues.
*   **Core Stability:** PR [#4706](https://github.com/agentscope-ai/QwenPaw/pull/4706) implemented atomic session writes to prevent JSON truncation during crashes, and PR [#4707](https://github.com/agentscope-ai/QwenPaw/pull/4707) patched a runtime crash with ToolResponse content blocks.

## 4. Community Hot Topics
The community is actively discussing desktop packaging and memory systems:
*   **Packaging Confusion (7 comments):** In Issue [#4754](https://github.com/agentscope-ai/QwenPaw/issues/4754), users are asking about the official packaging strategy for Windows executables, specifically the difference between the standard desktop client and the Tauri version.
*   **Memory System Overhaul (4 comments):** Issue [#4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) resonated with users, pointing out that CoPaw's memory currently acts as "information piling" rather than "knowledge accumulation" and urgently needs summarization and state management.
*   **History Sorting (4 comments):** Users are highly vocal about the chat history layout, repeatedly requesting (e.g., Issue [#4746](https://github.com/agentscope-ai/QwenPaw/issues/4746)) that conversations be sorted by latest interaction time, adhering to standard industry practices.

## 5. Bugs & Stability
Several critical bugs have surfaced, heavily concentrated on the Windows desktop client and tool execution:
*   **Tool Call Hangs (High):** Issue [#4739](https://github.com/agentscope-ai/QwenPaw/issues/4739) reports that agents silently wait for user input after a tool timeout/success instead of continuing autonomously.
*   **Desktop Navigation Loop (High):** Issue [#4764](https://github.com/agentscope-ai/QwenPaw/issues/4764) reports that v1.1.9 users cannot navigate back after opening a web URL in the desktop app. 
*   **Cron Job Execution Error (Medium):** Issue [#4773](https://github.com/agentscope-ai/QwenPaw/issues/4773) highlights that Windows desktop scheduled tasks incorrectly attempt to `pip install qwenpaw` because the command isn't added to the system PATH. (Addressed by PR [#4779](https://github.com/agentscope-ai/QwenPaw/pull/4779)).
*   **macOS Tahoe Crash (Medium):** Issue [#4704](https://github.com/agentscope-ai/QwenPaw/issues/4704) reports a SIGSEGV crash on macOS Tahoe 26.5 when using the Feishu channel.

## 6. Feature Requests & Roadmap Signals
Architectural and Agent-level enhancements dominate the current roadmap signals:
*   **AgentScope 2.0 Migration (Breaking Change):** Issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) outlines an upcoming migration to AgentScope 2.0, which will overhaul the backend runtime model.
*   **Automatic Provider Degradation:** Issue [#4757](https://github.com/agentscope-ai/QwenPaw/issues/4757) proposes a fallback mechanism for LLM providers to prevent agent failure during token quota exhaustion.
*   **Coding Mode Upgrades:** PR [#4762](https://github.com/agentscope-ai/QwenPaw/pull/4762) adds an "Open Directory" tab to reference local projects without creating unnecessary copies.
*   **Windows Startup Optimization:** PR [#4772](https://github.com/agentscope-ai/QwenPaw/pull/4772) proposes lazy loading to reduce Windows desktop startup time to ~40ms.

## 7. User Feedback Summary
User feedback today strongly highlights friction in the desktop experience and session management:
*   **UI/UX Friction:** A single user created multiple issues pointing out poor UX in v1.1.19, including annoying CMD popup windows during shell execution ([#4777](https://github.com/agentscope-ai/QwenPaw/issues/4777)), intrusive cron job notifications ([#4776](https://github.com/agentscope-ai/QwenPaw/issues/4776)), and poor UI layouts for session management ([#4770](https://github.com/agentscope-ai/QwenPaw/issues/4770), [#4778](https://github.com/agentscope-ai/QwenPaw/issues/4778)). 
*   **Context Management:** Users explicitly want visibility into token/context usage limits directly in the chat UI ([#4782](https://github.com/agentscope-ai/QwenPaw/issues/4782)) and are reporting that large shell outputs bloat the context unexpectedly ([#4781](https://github.com/agentscope-ai/QwenPaw/issues/4781)).
*   **Asset Management:** Users are frustrated by the lack of a quick "open file" button for generated Word/PPT documents ([#4786](https://github.com/agentscope-ai/QwenPaw/issues/4786)).

## 8. Backlog Watch
Maintainers should review the following highly active items requiring strategic decisions:
*   **Configuration Refactoring:** Issue [#4758](https://github.com/agentscope-ai/QwenPaw/issues/4758) proposes a massive configuration overhaul (separating global/agent scopes, versioning). This needs architectural planning before PRs are submitted.
*   **Multimodal Support:** Issue [#3942](https://github.com/agentscope-ai/QwenPaw/issues/3942) remains a highly requested feature (audio/video support in the frontend) that has been open for a month without core dev assignment.
*   **Token Context PR:** PR [#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433), which adds token usage visibility to the chat UI, has been open since May 15 and needs final review as it directly solves the pain points mentioned in recent issues.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-29

## 1. Today's Overview
ZeroClaw is experiencing a period of highly active development and community engagement as it iterates heavily towards its `v0.8.x` milestone. The project saw a massive volume of code updates over the last 24 hours, with 50 pull requests receiving updates (45 open, 5 closed/merged) and 21 issues actively discussed. A significant portion of current work is focused on expanding provider support (such as native extended thinking for Anthropic and OpenAI Codex auth), hardening the new `zerocode` TUI, and patching critical security and runtime gaps. While feature velocity is high, the high ratio of open PRs and several newly opened S1/S2 bugs suggest that maintainers are balancing major architectural integrations with essential stability fixes. 

## 2. Releases
**No new releases** were cut in the last 24 hours. The repository remains on recent pre-release or nightly builds as contributors work toward the `v0.8.0-beta-2` and `v0.8.1` milestones.

## 3. Project Progress
Merged and closed PRs in the last 24 hours highlight active patching and foundational feature integrations:
*   **Slack Integration Fixes:** [PR #6994](https://github.com/zeroclaw-labs/zeroclaw/pull/6994) was merged, setting `strict_mention_in_thread` to default to `true` to prevent agents from replying outside of explicit mentions in threads.
*   **Anthropic Extended Thinking:** [PR #5650](https://github.com/zeroclaw-labs/zeroclaw/pull/5650) (Closed) laid the groundwork for native extended thinking/reasoning chains for the Anthropic provider, a key prerequisite for supporting newer Opus models.
*   **Massive TUI Integration:** [PR #6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) (Open, updated) continues its review phase, bringing the new `zerocode` TUI, RPC socket transport, and beta-2 integration into the project. 

## 4. Community Hot Topics
The most actively discussed issues reveal strong community demand for better reasoning model support and lower operating costs:
*   **[Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059)** (14 comments, 4 👍): *DeepSeek-V4 API format incompatibility.* Users are actively discussing breaking changes in DeepSeek's new API formats, specifically regarding "thinking mode" parameters. ZeroClaw currently flags this as S2 - degraded behavior, but it is a high priority for users relying on cost-effective models.
*   **[Issue #5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674)** (4 comments, 3 👍): *Make `classify_channel_reply_intent` configurable.* Users are frustrated that the AI evaluates whether to reply in 1:1 private chats. The community consensus is that this "should I reply" gate should be bypassed in direct messages to ensure the assistant doesn't ignore the user.
*   **[PR #6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6948)**: *Per-agent classifier provider.* Directly answering the above cost/routing friction, this active PR proposes routing the "reply intent" precheck to a cheaper model (e.g., instead of using an expensive GPT-5.4 or Claude Opus call just to decide if the bot should reply).

## 5. Bugs & Stability
Several high-severity bugs were reported today affecting core runtime, security, and channel integrations:
*   **S1 - Security / Gateway:** [Issue #6984](https://github.com/zeroclaw-labs/zeroclaw/issues/6984) reports that token rotation does not revoke existing bearer tokens. However, a fix is already actively being reviewed in [PR #6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988).
*   **S1 - Runtime / Providers:** [Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361) notes that `context_compression` drops `assistant(tool_calls)` and `tool(result)` for OpenAI-compatible providers like MiniMax, causing multi-turn tool loops. 
*   **S1 - Slack Integration:** [Issue #6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992) reports a critical misconfiguration where Slack Socket Mode rejects all incoming messages as "unauthorized user".
*   **S2 - Runtime / Tool Security:** [Issue #6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) exposes a disconnect in `v0.8.0-beta-1` where native tool serialization (`tools_to_openai_format`) ignores the agent's Risk Profile and Tool Filter restrictions.
*   **S2 - CLI/Encoding:** [Issue #6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995) highlights a frustrating encoding bug where backspacing CJK (Chinese/Japanese/Korean) characters in the CLI operates byte-by-byte rather than character-by-character.

## 6. Feature Requests & Roadmap Signals
Recent issues and trackers provide clear signals of what the `v0.8.x` roadmap holds:
*   **v0.8.1 Integration Queue:** [Issue #6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) was opened to track the v0.8.1 PR queue, signaling an upcoming focus on additive channel support, providers, and tool integrations.
*   **v0.7.6 Skills UX:** [Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) is tracking overall improvements to `zeroclaw skills`, focusing on CLI loading, sandboxing, and authoring tools.
*   **Daemon UX Improvements:** [Issue #6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6817) requests an `--ephemeral` daemon mode (auto-shutdown when clients disconnect) and [Issue #6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817) requests session-scoped runtime overrides without daemon reloads. Both indicate a push toward more dynamic, cloud-friendly runtime management.
*   **Localization (i18n):** [Issue #6990](https://github.com/zeroclaw-labs/zeroclaw/issues/6990) and [Issue #6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) show a concerted effort to bring all tool descriptions and runtime replies under a strict Fluent localization contract, strongly suggesting upcoming native multi-language support in the UI/CLI.

## 7. User Feedback Summary
Real-world user feedback highlights friction in onboarding, memory performance, and file management:
*   **Onboarding Pitfalls:** Users are experiencing a confusing setup where the CLI tool marks sections as "complete" without actually writing the config files ([Issue #6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975)). Similarly, OpenAI onboarding currently forces API keys unnecessarily for users utilizing ChatGPT Plus/Pro OAuth ([PR #6908](https://github.com/zeroclaw-labs/zeroclaw/pull/6908)).
*   **Memory Bottlenecks:** Users running heavy conversation workloads note that the SQLite memory backend relies on an O(n) brute-force vector scan, causing slowdowns. [Issue #5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570) requests an in-process Approximate Nearest Neighbor (ANN) index to resolve this.
*   **Cron Spam:** Operators utilizing ZeroClaw for scheduled tasks report that `delivery.mode = "announce"` outputs intermediate reasoning steps, cluttering the channel. [Issue #6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510) requests a toggle to send only the final synthesized message.

## 8. Backlog Watch
The following high-impact items have stalled and require maintainer attention:
*   **[Issue #5470](https://github.com/zeroclaw-labs/zeroclaw/issues/5470):** A high-risk bug reporting multiple issues when running safely (memory duplication, tool glitches). Tagged as `r:needs-repro` and `status:stale` since April 7. 
*   **[PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187):** A community request to add native `arm64` Docker targets. Open since early April, it needs author action but is highly requested for self-hosters running on ARM-based servers (e.g., Apple Silicon, AWS Graviton).
*   **[Issue #5570](https://github.com/zeroclaw-labs/zeroclaw/issues/5570):** The SQLite O(n) vector search issue remains `status:stale` and `status:blocked`. As AI context sizes grow, resolving this memory bottleneck will be critical for users running long-lived, highly personalized agents.

</details>