# OpenClaw Ecosystem Digest 2026-06-13

> Issues: 500 | PRs: 479 | Projects covered: 13 | Generated: 2026-06-12 22:27 UTC

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

# OpenClaw Project Digest — 2026-06-13

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high volume of activity, with nearly 1,000 issues and pull requests updated in the last 24 hours. The repository is operating in a highly agile state, maintaining a massive backlog of active discussions (396 open issues, 356 open PRs) while simultaneously delivering rapid merges and closures (104 issues closed, 123 PRs merged/closed). This level of throughput indicates robust community engagement but also suggests potential bottlenecks in maintainer review cycles. The overarching theme of today's development revolves heavily around fortifying security perimeters, optimizing memory/context management, and hardening gateway stability. 

## 2. Releases
The project shipped **2 new releases** today, culminating in the stable launch of **v2026.6.6** (and its preceding beta).

### v2026.6.6 & v2026.6.6-beta.6
- **Highlights:** Security boundaries have been substantially tightened across the entire stack. Key areas of improvement include transcripts, sandbox binds, host environment inheritance, MCP stdio, Codex HTTP access, native search policy, elevated sender checks, deleted-agent ACP bypasses, loopback tools, Discord moderation, and Teams group actions. 
- **Impact:** Users should be aware that security clamps on exec tools and sandbox environments are now much stricter, which may require adjustments to existing permission configurations.

## 3. Project Progress
Significant architectural and security advancements were merged or closed today:
- **Security & DoS Protections:** Merged a critical pre-auth CPU DoS defense for WebSocket handshakes ([PR #77492](https://github.com/openclaw/openclaw/pull/77492)), protecting gateways from unauthenticated remote CPU exhaustion.
- **Sandbox & Exec Isolation:** Closed fixes ensuring that sandboxed sessions use materialized skill paths rather than falling back to global host/npm paths ([PR #92508](https://github.com/openclaw/openclaw/pull/92508), [PR #91791](https://github.com/openclaw/openclaw/pull/91791)).
- **Memory & Recall Systems:** Closed fixes ensuring memory index metadata survives safe/atomic re-indexing ([PR #92507](https://github.com/openclaw/openclaw/pull/92507)).
- **Provider Compatibility:** Opened new core integrations for **CoreWeave Serverless Inference** ([PR #92243](https://github.com/openclaw/openclaw/pull/92243)) and fixed native Anthropic API-key static catalog mapping for Claude Haiku 4.5 ([PR #90110](https://github.com/openclaw/openclaw/pull/90110)).

## 4. Community Hot Topics
The community is highly active in debating UX routing, context management, and multi-agent orchestration:
- **Processing Output Leaks ([Issue #25592](https://github.com/openclaw/openclaw/issues/25592)):** A highly commented P1 bug where the agent's internal processing text (e.g., error handling, narrations) is being routed directly into user-facing messaging channels (Slack, iMessage). This highlights the community's need for stricter boundaries between "thinking" and "speaking."
- **Tiered Context Loading ([Issue #22438](https://github.com/openclaw/openclaw/issues/22438)):** A popular proposal to introduce tiered bootstrap file loading. Users are experiencing context window exhaustion, wasting tokens on files that sub-agents or cron jobs never reference.
- **Slack UI Enhancements ([Issue #12602](https://github.com/openclaw/openclaw/issues/12602) & [Issue #33413](https://github.com/openclaw/openclaw/issues/33413)):** Strong demand for native Slack Block Kit support and dynamic tool-level progress statuses in Slack threads, moving beyond the static "is typing..." indicator.

## 5. Bugs & Stability
Several critical stability and performance issues have been identified, with some actively being addressed:
1. **[P0] Gateway Memory Leak ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588)):** A severe memory leak causing Gateway RSS to grow from ~350MB to 15.5GB over 2-3 days, resulting in OS OOM crashes and `launchd-handoff` restart cycles.
2. **[P0] `memory_search` Broken ([Issue #91778](https://github.com/openclaw/openclaw/issues/91778)):** Vector memory search has been completely broken since v2026.6.1 due to missing index metadata. *(Fix proposed in [PR #92538](https://github.com/openclaw/openclaw/pull/92538) & [PR #92507](https://github.com/openclaw/openclaw/pull/92507))*.
3. **[P1] Compaction Timeout Wall ([Issue #92043](https://github.com/openclaw/openclaw/issues/92043)):** A recent change lowered the embedded compaction timeout from 900s to 180s. For long legitimate histories, this turns a recoverable slow-down into a hard failure every turn.
4. **[P1] Message Duplication ([Issue #88951](https://github.com/openclaw/openclaw/issues/88951)):** Since v2026.5.27, responses are duplicated 2-4 times per message. 
5. **[P1] Race Condition in Signal Daemon ([Issue #22676](https://github.com/openclaw/openclaw/issues/22676)):** SIGUSR1 restarts cause orphaned processes and message send failures due to port and config locks.

## 6. Feature Requests & Roadmap Signals
Based on recent PRs and highly-rated feature requests, the roadmap is clearly leaning toward **Advanced Memory Architectures** and **Fine-Grained Tool Governance**:
- **Multi-Layered Memory & Governance:** A new RFC ([Issue #35203](https://github.com/openclaw/openclaw/issues/35203)) proposes capability profiling and shared blackboards for multi-agents. Furthermore, a new "shadow-logger" plugin is in development to capture episodic memory ([PR #92531](https://github.com/openclaw/openclaw/pull/92531)).
- **Hard Policy Gates:** Users are requesting mechanical prevention of final answers before certain tools/policies are executed ([Issue #13583](https://github.com/openclaw/openclaw/issues/13583)).
- **Prediction:** The next versions will likely feature the integration of multi-layer memory systems (QMD temporal decay), directory-based tool searching to save context ([PR #91632](https://github.com/openclaw/openclaw/pull/91632)), and enhanced exec-denylists for strict operational compliance.

## 7. User Feedback Summary
Users are generally thrilled with OpenClaw's expanding multi-platform capabilities (Telegram, Discord, Slack), but are expressing frustration with deployment stability and silent failures. A major pain point is **Docker and sandbox configurations** — users frequently encounter permission denied errors or `workspaceAccess` mounting issues when running the gateway in containerized environments ([Issue #31331](https://github.com/openclaw/openclaw/issues/31331), [Issue #37634](https://github.com/openclaw/openclaw/issues/37634)). Additionally, users desire better transparency during fallbacks, specifically asking for fallback approval modes and model attribution so they know when a primary model fails and a backup takes over ([Issue #33975](https://github.com/openclaw/openclaw/issues/33975)).

## 8. Backlog Watch
The maintainer team has a large triage queue. The following critical items require immediate attention:
- **Android APK Releases ([Issue #9443](https://github.com/openclaw/openclaw/issues/9443)):** Highly requested by mobile users; source code exists in repo, but no precompiled binaries are provided in GitHub releases.
- **Dynamic Model Discovery ([Issue #10687](https://github.com/openclaw/openclaw/issues/10687)):** Users want OpenClaw to move away from static model catalogs (relying on `models.json`) to dynamic discovery for providers like OpenRouter, which update their model lists frequently.
- **Native Secrets Management ([Issue #13610](https://github.com/openclaw/openclaw/issues/13610)):** A crucial security backlog item requesting native integration with AWS Secrets Manager or HashiCorp Vault, moving away from storing plaintext API keys in `openclaw.json`.
- **Webhook Session Reuse ([Issue #11665](https://github.com/openclaw/openclaw/issues/11665)):** Despite documentation promising multi-turn conversations via consistent `sessionKey`, the core logic always generates a new session, breaking stateful webhook integrations.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 13, 2026 community digests.

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem
**Date:** 2026-06-13

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a hyper-active, transitional phase characterized by rapid iterations in multi-agent orchestration, memory management, and security hardening. Projects are evolving from simple conversational interfaces into highly autonomous entities capable of OS-level interactions ("Computer Use"), multi-channel gateway deployments (WhatsApp, Slack, Discord), and complex tool execution. However, this rapid expansion in capabilities is creating systemic growing pains, particularly around context window optimization, deployment stability (especially in containerized environments), and the prevention of silent failures. The overarching industry trajectory clearly points toward multi-agent swarms, enterprise-grade observability, and strict, granular security perimeters.

## 2. Activity Comparison
*Health Score is graded A-E based on PR/Issue throughput, release cadence, and bug triage efficiency.*

| Project | Issues (24h Activity) | PRs (24h Activity) | Recent Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (104 closed) | ~480 (123 merged/closed) | **v2026.6.6** (Stable) | **A** (High throughput, large scale) |
| **IronClaw** | 50 (17 closed) | 46 (21 merged/closed) | No release (Upcoming breaking change) | **A** (Highly active, responsive) |
| **ZeroClaw** | 50 (47 open) | 50 (45 open) | **v0.8.0** (Major multi-agent update) | **B+** (Major migration, heavy bug triage) |
| **NanoBot** | N/A (Active) | 29 active (multiple closed)| No release | **B+** (Steady iteration, decoupling architecture)|
| **Hermes Agent**| 50 updates | 50 updates (42 open) | No release (Pre-release prep) | **B** (High velocity, but bottlenecked reviews) |
| **CoPaw** | 23 active (7 closed) | 27 active (11 merged) | **v1.1.12b1** (Imminent beta) | **B** (Active, but fighting v1.1.11 regressions) |
| **PicoClaw** | 6 active | 14 active | **v0.2.9-nightly** | **B-** (Good momentum, slow bug triage) |
| **LobsterAI** | Active | 17 active (11 merged) | **2026.6.12** (Imminent) | **B-** (Strong internal sprint, stale community PRs)|
| **NanoClaw** | Active | 11 active (0 merged) | No release | **C+** (High pipeline, stalled merges) |
| **NullClaw** | Low volume | 3 active (0 merged) | No release | **C** (Pipeline stalled, needs maintainer review) |
| **Moltis** | 2 open | 1 open | No release | **C** (Stable but low activity) |
| **TinyClaw / ZeptoClaw**| 0 | 0 | N/A | **N/A** (Dormant) |

## 3. OpenClaw's Position
OpenClaw operates as the undisputed anchor of this ecosystem, boasting the highest absolute volume of issues and PRs processed daily. 
*   **Advantages vs Peers:** OpenClaw's massive scale allows it to tackle enterprise-grade concerns that smaller projects overlook, such as pre-auth CPU DoS defenses, deep OS-level sandboxing, and native integrations with cloud providers like CoreWeave. Its throughput (123 PRs merged/closed in 24h) ensures rapid remediation of critical bugs.
*   **Technical Approach Differences:** While other projects are just beginning to decouple desktop apps from core runtimes (NanoBot) or struggling with basic RBAC (PicoClaw), OpenClaw is already refining complex multi-layer memory governance and tiered context loading to optimize token usage at an enterprise scale.
*   **Community Size Comparison:** OpenClaw’s community is an order of magnitude larger than mid-tier projects like IronClaw or Hermes Agent, resulting in massive backlog numbers (396 open issues) that require triage automation and strict governance, contrasting sharply with the highly personal, low-volume environments of NullClaw or Moltis.

## 4. Shared Technical Focus Areas
Several universal requirements have emerged across the ecosystem:
1.  **Context Preservation & Memory Management:** Context window exhaustion and amnesia during long sessions are the top cross-ecosystem pain points.
    *   *Projects:* OpenClaw (tiered context loading), NanoBot (post-turn consolidation data loss), Hermes Agent (context compaction leaks), IronClaw (deferred message draining).
2.  **Channel Resilience & Anti-Silent Failures:** Dropping messages silently in IM platforms (WhatsApp, Slack, Discord) breaks enterprise trust.
    *   *Projects:* PicoClaw, ZeroClaw, and Moltis are fighting to correctly route WhatsApp LID privacy addresses; NanoClaw and NullClaw are fixing dropped socket reconnects.
3.  **Sandbox Security & Permission Scoping:** As agents gain OS-level execution, strict RBAC is desperately needed.
    *   *Projects:* OpenClaw (exec denylists), PicoClaw (channel-specific permissions for Telegram), NanoClaw (Linux capability restrictions), Hermes Agent (RCE patches).
4.  **Agent Observability & Telemetry:** Developers need to know exactly what tools agents invoke and how tokens are spent.
    *   *Projects:* NanoBot (Audit module), IronClaw (Admin telemetry endpoints), NanoClaw (Agent observability seams).

## 5. Differentiation Analysis
*   **Enterprise & Infrastructure-First (OpenClaw, NanoClaw, IronClaw):** Focus heavily on deployment environments, CI/CD integration, container escape prevention, and complex multi-agent orchestration. Target users are large-scale developers and DevOps teams.
*   **Desktop & OS-Level Autonomy (LobsterAI, Hermes Agent):** Differentiating through UX and local execution. LobsterAI is pushing "Computer Use" (UI automation) and local ASR voice inputs, targeting power users wanting local desktop automation. Hermes focuses heavily on CLI/TUI cross-platform compatibility.
*   **Multi-Channel & Lightweight Edge (PicoClaw, Moltis, ZeroClaw):** Focused on highly portable, multi-channel messaging integrations (Matrix, Telegram, DeltaChat) and lightweight local AI integrations (Ollama, local STT). 
*   **Developer SDK / Platform Play (NanoBot, CoPaw):** Concentrating on providing robust Python SDKs and WebUIs for developers to build their own agents, heavily emphasizing plugin ecosystems (CoPaw) and runtime decoupling (NanoBot).

## 6. Community Momentum & Maturity
*   **Tier 1: Rapid Scaling & Architecture Overhauls (ZeroClaw, IronClaw, CoPaw):** These projects are experiencing massive engagement spikes driven by major architectural updates (e.g., ZeroClaw's v0.8.0 multi-agent daemon, CoPaw's migration to AgentScope 2.0). They are actively fixing S1/S2 regressions.
*   **Tier 2: Agile Iteration & Stabilization (OpenClaw, NanoBot, PicoClaw, LobsterAI):** These communities have found a sustainable rhythm. They release frequently (nightly or bi-weekly) and actively merge community PRs. However, LobsterAI and PicoClaw both show signs of community PR backlog stagnation that needs unblocking.
*   **Tier 3: Stalled Pipelines & Niche Focus (Hermes Agent, NanoClaw, NullClaw, Moltis):** While activity exists, PR merges are bottlenecked by maintainer availability. NullClaw, for instance, has high-quality PRs waiting for review, while Moltis operates at a very slow, deliberate pace focused on highly specific edge-case fixes.

## 7. Trend Signals
1.  **The Shift to Multi-Agent Swarms:** Single-agent execution is no longer the ceiling. Projects like ZeroClaw, OpenClaw, and CoPaw are seeing huge demand for "Director/Worker" agent models, requiring new paradigms in shared memory, inter-agent communication (A2A), and localized security policies.
2.  **"Computer Use" and UI Automation:** LobsterAI’s upcoming Computer Use MVP highlights a broader industry trend of agents moving from API-only tool calling to actually navigating Operating System UIs, significantly broadening their utility for non-technical users.
3.  **Local & Edge Processing Push:** There is a strong user-driven demand to decouple from cloud APIs. Requests for local Speech-to-Text (Moltis), seamless Ollama integration (NullClaw), and local file execution (Hermes Agent) signal a robust market for privacy-first, on-device AI assistants.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot (HKUDS/nanobot) for June 13, 2026.

### 1. Today's Overview
NanoBot is currently experiencing an exceptionally high-velocity development cycle, marked by 29 updated Pull Requests and the closure of several critical bugs in the last 24 hours. The maintainer team is heavily focused on enhancing agent observability, stabilizing memory management, and hardening security boundaries. Major architectural refactors are also underway to decouple configuration schemas and separate the desktop application from the core open-source repository. Overall project health appears robust, with rapid community engagement and systematic resolution of structural bugs.

### 2. Releases
No new releases were published today.

### 3. Project Progress
Significant advancements were merged or closed today, pushing the project's capabilities forward:
*   **Agent Observability ([PR #4319](https://github.com/HKUDS/nanobot/pull/4319), [PR #4318](https://github.com/HKUDS/nanobot/pull/4318)):** Closed iterations of the audit module. This introduces `AuditTool` and `AuditEvent` with scope filtering and multiple transport mechanisms (loguru, HTTP webhook, JSONL), tightly integrated into the `AgentLoop`.
*   **Repository Decoupling ([PR #4294](https://github.com/HKUDS/nanobot/pull/4294)):** The desktop application has been officially removed from the core repository to live in a separate private host, sharpening the open-source focus on the core runtime, WebUI, and APIs.
*   **Cron Job Stability ([PR #4304](https://github.com/HKUDS/nanobot/pull/4304)):** Fixed a critical race condition where cron jobs were marked complete before spawned subagents finished executing.
*   **Orphaned Tool Results Fixed ([Issue #4203](https://github.com/HKUDS/nanobot/issues/4203), [Issue #4006](https://github.com/HKUDS/nanobot/issues/4006)):** Closed severe bugs where isolated tool results without corresponding assistant tool calls caused API rejections and trajectory rendering crashes. 

### 4. Community Hot Topics
The most active discussions center around context preservation and system observability:
*   **Short-term Memory Loss ([Issue #4044](https://github.com/HKUDS/nanobot/issues/4044)):** With 5 comments, users are actively discussing a bug where the conversational thread snaps due to context window pressure and system prompt bloat (SOUL.md, MEMORY.md). This highlights a strong user need for highly efficient context window token management.
*   **Action Observability ([PR #4320](https://github.com/HKUDS/nanobot/pull/4320)):** High engagement around the new audit configuration proposal, showing strong community demand for enterprise-grade telemetry to track exactly what tools the agent is invoking and why.
*   **Multiple Custom Providers ([Issue #4305](https://github.com/HKUDS/nanobot/issues/4305)):** Users are requesting the ability to define more than one "custom" or "openai" provider, pointing to a roadmap need for a templated provider architecture.

### 5. Bugs & Stability
Today's bug reports reveal underlying tensions between advanced features (like context consolidation) and runtime stability, ranked by severity:
1.  **CRITICAL: Post-turn Consolidation Data Loss ([Issue #4307](https://github.com/HKUDS/nanobot/issues/4307)):** When `context_window_tokens` is set to 40k, multi-iteration turns accumulate 100k+ tokens before consolidation fires post-turn. This wipes the agent's own delivery messages, losing user references. *No fix PR yet.*
2.  **HIGH: API Token Usage Reporting ([Issue #4309](https://github.com/HKUDS/nanobot/issues/4309)):** The `/v1/chat/completions` endpoint is returning hardcoded zero token usage, breaking cost-tracking and observability tools, even though the agent loop tracks actual usage internally. *No fix PR yet.*
3.  **MEDIUM: MCP Generator Crash ([PR #4303](https://github.com/HKUDS/nanobot/pull/4303) - Open):** A crash (`RuntimeError`) occurs in `streamableHttp` MCP servers during reconnection because `_close_server` exits a cancel scope in the wrong task. Fix exists but is pending merge.

*Note: Defense-in-depth PRs by contributor `yu-xin-c` ([PR #4312](https://github.com/HKUDS/nanobot/pull/4312), [PR #4311](https://github.com/HKUDS/nanobot/pull/4311)) are actively addressing malformed inputs and non-positive pagination limits, showing strong proactive stability maintenance.*

### 6. Feature Requests & Roadmap Signals
Based on today's PRs and issues, the upcoming versions of NanoBot will likely feature:
*   **Advanced Telemetry:** First-class auditing capabilities for agent tool invocations via webhooks and JSONL logs.
*   **Multi-Provider TTS:** Full integration of Text-to-Speech capabilities supporting OpenAI, Groq (Orpheus), and ElevenLabs, fully exposed via the WebUI ([PR #4316](https://github.com/HKUDS/nanobot/pull/4316)).
*   **Expanded Python SDK Runtime Controls ([PR #4296](https://github.com/HKUDS/nanobot/pull/4296)):** Moving beyond simple `bot.run()` to offer stable session, memory, and runtime metadata controls for developers building on top of NanoBot.
*   **WebUI / Config.json Parity ([PR #4313](https://github.com/HKUDS/nanobot/pull/4313)):** Allowing users to configure temperature, tool limits, and memory entirely via the WebUI without touching JSON files.

### 7. User Feedback Summary
Users are heavily utilizing NanoBot for complex, multi-step tasks but are feeling friction in memory continuity and context management. The "Dream" state and long-term memory features are highly valued but sometimes conflict with the system prompt size, causing unexpected amnesia in active threads. Developers embedding NanoBot via the Python SDK and OpenAI-compatible endpoints are hitting scaling/monitoring walls (like the zero-token usage bug), indicating that the enterprise and developer user base is growing. The move to separate the desktop app is positively received by core runtime users who want a lighter dependency footprint.

### 8. Backlog Watch
*   **Context Window / Memory Logic Refactor:** [Issue #4044](https://github.com/HKUDS/nanobot/issues/4044) has been open since May 28. The core issue of memory loss due to context window pressure needs a systemic architectural fix rather than piecemeal PR patches.
*   **Security & Workspace Escapes:** [PR #4119](https://github.com/HKUDS/nanobot/pull/4119) (blocking relative symlink workspace escapes) and [PR #4053](https://github.com/HKUDS/nanobot/pull/4053) (keeping read-only roots out of write paths) are crucial security hardening PRs that have been stuck in an open state for weeks and require maintainer review and merging.
*   **Memory Lifecycle Testing Harness:** [PR #4193](https://github.com/HKUDS/nanobot/pull/4193) is a massive testing improvement that needs to be merged soon to prevent the exact memory/context bugs being reported in the issues.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-13
**Repository:** [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

### 1. Today's Overview
The Hermes Agent project is currently exhibiting extremely high open-source community engagement and rapid development velocity, acting as a highly active hub for AI agent and personal assistant development. In the last 24 hours, the project processed 50 issue updates and 50 pull requests, with overwhelming community contribution driving new features and stability improvements. The vast majority of PR activity (42 open vs. 8 closed) indicates heavy work-in-progress as developers tackle complex gateway integrations, provider quirks, and desktop UI enhancements. While no new releases were shipped today, the sheer volume of bug fixes and security patches being merged suggests the team is aggressively preparing for a near-term version bump.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Significant forward progress was made today through merged and closed PRs, primarily focusing on desktop UX, installer stability, and conversation context management:
*   **Context Compaction & UI:** [PR #45249](https://github.com/NousResearch/hermes-agent/pull/45249) ensured that the last visible assistant reply remains readable after context compaction, preventing it from being rolled into background reference blocks. 
*   **Desktop Stability:** Several rapid merge/close cycles by developer `nittatomonori-star` fixed critical desktop bugs, including showing hidden main windows on reopen ([PR #45229](https://github.com/NousResearch/hermes-agent/pull/45229)), blocking message sends to archived sessions ([PR #45228](https://github.com/NousResearch/hermes-agent/pull/45228)), and reporting stale builds after update mismatches ([PR #45227](https://github.com/NousResearch/hermes-agent/pull/45227)).
*   **Installer Diagnostics:** [PR #45233](https://github.com/NousResearch/hermes-agent/pull/45233) improved the Windows installer by adding clearer diagnostics for Windows Application Control (WDAC) blocks.
*   **Gateway Reliability:** [Issue #45230](https://github.com/NousResearch/hermes-agent/issues/45230) (linked to [PR #45234](https://github.com/NousResearch/hermes-agent/pull/45234)) was resolved to stop the gateway from replaying interrupted tool-call tails, preventing infinite re-execution loops during long-running terminal tasks.

### 4. Community Hot Topics
The most active discussions today highlight user struggles with session scale, output limits, and context boundaries:
*   **Output Truncation Limits ([Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) - 40 comments, 5 reactions):** A heavily discussed bug regarding the agent abruptly truncating long-form responses across CLI and gateway platforms (Telegram/Discord). This highlights the community's need for reliable, long-form content generation without arbitrary structural breaks.
*   **Accessibility Demands ([Issue #26689](https://github.com/NousResearch/hermes-agent/issues/26689) - 10 comments):** A feature request from a totally blind VoiceOver user emphasizing that while Hermes has a powerful backend, the macOS Desktop/TUI UX is failing screen-reader users. This signals a strong need for UI/UX overhauls to meet accessibility standards.
*   **Context Compression Leaks ([Issue #33256](https://github.com/NousResearch/hermes-agent/issues/33256) - 2 comments):** Users reported that internal context compression summaries are leaking into user-visible chat outputs on providers like Gemini and OpenAI Codex, breaking immersion and causing confusion.

### 5. Bugs & Stability
Today's bug reports were varied, with several high-severity security and functional issues flagged by the community:
*   🔴 **CRITICAL - Potential RCE ([Issue #45160](https://github.com/NousResearch/hermes-agent/issues/45160)):** A severe vulnerability was reported in `tui_gateway/server.py` where two subprocess calls utilize `shell=True`. This could allow Remote Code Execution (RCE). *Status: Open, needs immediate maintainer action.*
*   🟠 **HIGH - Cron Environment Pollution ([Issue #37968](https://github.com/NousResearch/hermes-agent/issues/37968)):** A security bug where gateway approvals via cron are not properly isolated from environment variables, leading to potential privilege escalation. 
*   🟠 **HIGH - Session Resume Failures ([Issue #44022](https://github.com/NousResearch/hermes-agent/issues/44022)):** A P2 bug where resuming older desktop/TUI chats fails with a "No LLM provider configured" error if the session only stored a bare `billing_provider`.
*   🟡 **MEDIUM - SELinux Docker Breakage ([Issue #45106](https://github.com/NousResearch/hermes-agent/issues/45106)):** Docker backend fails on SELinux-enforced OSs (like OpenSUSE) due to improper volume bind contexts. *Status: Fix proposed in [PR #45252](https://github.com/NousResearch/hermes-agent/pull/45252).*
*   🟡 **MEDIUM - Desktop Renderer Crashes ([Issue #41693](https://github.com/NousResearch/hermes-agent/issues/41693)):** The Hermes Desktop renderer crashes intermittently due to an `Index out of bounds` error in `@assistant-ui/store`, forcing a window reload.

### 6. Feature Requests & Roadmap Signals
Based on today's issue tracker, future updates will likely focus on multi-agent orchestration and advanced memory management:
*   **Trusted Internal Session Triggers ([Issue #17415](https://github.com/NousResearch/hermes-agent/issues/17415)):** A request for first-class role-handoff mechanisms allowing a "Director" agent session to dispatch bounded tasks to other predefined Hermes gateway sessions. 
*   **AI-Generated Session Summaries ([Issue #45103](https://github.com/NousResearch/hermes-agent/issues/45103)):** A proposed feature to add a hover card in the Desktop sidebar that uses the LLM to generate on-the-fly summaries of past sessions. *A draft PR is already incoming from the community.*
*   **Security Dependency Gates ([Issue #45041](https://github.com/NousResearch/hermes-agent/issues/45041)):** A request to implement a GitHub Dependency Review gate to automatically block PRs that introduce vulnerable dependencies.

### 7. User Feedback Summary
Overall, users are highly enthusiastic about Hermes's flexibility, praising its wide array of gateway adapters (Telegram, Discord, WeChat) and local LLM support. However, **user satisfaction is currently bottlenecked by provider compatibility and UI friction**. Specifically:
*   **Provider Quirks:** There is significant frustration around native provider integrations, particularly MiniMax-M3. Users report unstripped thinking tokens ([Issue #45211](https://github.com/NousResearch/hermes-agent/issues/45211)) and broken MCP tool arrays ([Issue #44976](https://github.com/NousResearch/hermes-agent/issues/44976)). 
*   **OAuth & API Changes:** Users are frustrated by stale API endpoints, such as the Anthropic OAuth login returning a 404 ([Issue #45250](https://github.com/NousResearch/hermes-agent/issues/45250)) and Copilot Business/Enterprise token exchanges failing ([Issue #45146](https://github.com/NousResearch/hermes-agent/issues/45146)).
*   **Usability Pain Points:** Developers are annoyed by local build blockers, such as the macOS codesign "ambiguous" identity errors that force ad-hoc signing workarounds ([Issue #41499](https://github.com/NousResearch/hermes-agent/issues/41499)).

### 8. Backlog Watch
*   **[Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) (Bug - Output Truncation):** Created back in April and updated yesterday, this 40-comment issue has severe impact on gateway users but remains stuck in discussion without a finalized fix.
*   **[Issue #35443](https://github.com/NousResearch/hermes-agent/issues/35443) (Bug - Model Picker Limit):** Open since late May, users still cannot view models past the first 50 in the CLI interactive picker. A simple pagination bug like this erodes trust in the CLI toolset.
*   **[Issue #11842](https://github.com/NousResearch/hermes-agent/issues/11842) (Bug - SMTP Email Gateway):** A straightforward but highly disruptive bug where the email adapter forces STARTTLS instead of SMTP_SSL on port 465. It was recently bumped but remains unresolved.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the provided GitHub data.

# PicoClaw Project Digest
**Date:** 2026-06-13
**Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

### 1. Today's Overview
PicoClaw is exhibiting highly active and healthy development momentum, processing 14 PRs and 6 Issues in the last 24 hours alone. The project recently pushed a new automated [v0.2.9-nightly build](https://github.com/sipeed/picoclaw/releases), indicating continuous integration and rapid iteration. The community is highly engaged in expanding platform integrations (Telegram, Matrix, DeltaChat) and hardening the agent's lifecycle management. Meanwhile, maintainers are actively addressing low-level stability issues, particularly around unchecked type assertions and JSON serialization errors in Go.

### 2. Releases
*   **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases)** 
    *   **Version:** `v0.2.9-nightly.20260612.413d3749`
    *   **Notes:** Automated build tagged against `main`. Marked as potentially unstable. Developers and enterprise users are advised to use with caution. 

### 3. Project Progress
Today's closed/merged PRs focused heavily on architectural refactoring and silent bug fixes:
*   **[PR #2551](https://github.com/sipeed/picoclaw/pull/2551) [CLOSED]**: A massive architectural refactor that decouples channel names from provider types. This is a critical infrastructure improvement that allows multiple instances of the same provider (e.g., two different Telegram bots) to run simultaneously without routing conflicts.
*   **[PR #3112](https://github.com/sipeed/picoclaw/pull/3112) [CLOSED]**: Fixed a bug in tool loops where `json.Marshal` errors were silently discarded, which previously caused complete loss of tool call arguments in conversation history.
*   **[PR #3113](https://github.com/sipeed/picoclaw/pull/3113) [CLOSED]**: Added error checking for JSON marshal/unmarshal operations in channel config hashing, preventing silent misconfigurations.
*   **[PR #3109](https://github.com/sipeed/picoclaw/issues/3109) [CLOSED]**: Resolved the architectural problem of channel-level permission scoping, setting the groundwork for safer group chats.

### 4. Community Hot Topics
*   **Channel-Specific Permission Scoping:** [Issue #3109](https://github.com/sipeed/picoclaw/issues/3109) (Closed) and its follow-up [Issue #3114](https://github.com/sipeed/picoclaw/issues/3114) (Open) are driving significant discussion. Users are demanding a "safe boundary" where agents have full permissions in 1-on-1 DMs but are heavily restricted from executing dangerous commands (`exec`, `write_file`) in multi-user Telegram groups/channels.
*   **WebSocket Lifecycle Completeness:** [Issue #2984](https://github.com/sipeed/picoclaw/issues/2984) (👍 2) highlights a strong community need for deterministic agent processing signals. External clients are currently struggling to know exactly when the agent has finished processing a turn, which is actively being addressed by open PRs like [#3116](https://github.com/sipeed/picoclaw/pull/3116).

### 5. Bugs & Stability
*   **[CRITICAL] Continuous Token Consumption:** [Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) reports that leaving "Evolution Mode" enabled drains tokens every minute. This is a severe issue for users paying for API usage. Currently marked as stale, requires immediate maintainer attention.
*   **[HIGH] Session History Corruption:** [PR #3115](https://github.com/sipeed/picoclaw/pull/3115) addresses a bug where base64 image strings inside tool outputs (like `read_file` or `exec`) are mistaken for real media attachments, corrupting the session history. Fix is currently open.
*   **[HIGH] Gemini 3.5 Flash Incompatibility:** [Issue #3111](https://github.com/sipeed/picoclaw/issues/3111) reports a `400 Bad Request` when executing tools with the new `gemini-3.5-flash` model due to a missing `thought_signature` in the backend response schema.
*   **[MEDIUM] Telegram Forum Topic Routing:** [Issue #3110](https://github.com/sipeed/picoclaw/issues/3110) notes that the Telegram adapter sends messages to the general topic instead of the specific forum thread the user interacted with.
*   **[LOW] Go Panics & Silent Failures:** A cluster of PRs ([#3091](https://github.com/sipeed/picoclaw/pull/3091), [#3045](https://github.com/sipeed/picoclaw/pull/3045), [#3053](https://github.com/sipeed/picoclaw/pull/3053)) fixed silent failures and potential panics related to unchecked type assertions and Matrix ID parsing errors.

### 6. Feature Requests & Roadmap Signals
Based on current issues and active PRs, the short-term roadmap points toward **expanded chat platform support** and **multimodal capabilities**:
*   **New Gateway Integrations:** [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) introduces a DeltaChat gateway, while [PR #3118](https://github.com/sipeed/picoclaw/pull/3118) adds a remote Pico WebSocket mode.
*   **Advanced Multimodal Routing:** [PR #3117](https://github.com/sipeed/picoclaw/pull/3117) implements smart routing to automatically send media turns to image models, while [PR #2964](https://github.com/sipeed/picoclaw/pull/2964) brings configurable image compression to prevent payload overloads.
*   **Enterprise Cloud Providers:** [PR #2917](https://github.com/sipeed/picoclaw/pull/2917) adds NEAR AI Cloud as a first-class provider, signaling a push toward TEE (Trusted Execution Environment) capable enterprise model usage.

### 7. User Feedback Summary
*   **Pain Point 1 - Safe Public Deployment:** Users love deploying PicoClaw to group chats, but they are terrified of the bot executing destructive shell commands triggered by unauthorized users. They are actively requesting granular, chat-type-based RBAC (Role-Based Access Control).
*   **Pain Point 2 - Bleeding Edge Model Compatibility:** Users adopting the newest LLMs (like Gemini 3.5 Flash) are hitting immediate walls with tool execution due to strict backend schemas.
*   **Satisfaction:** The UI/UX is receiving positive incremental feedback, evidenced by community contributions like adding a "Shift + Enter" chat composer hint ([PR #3097](https://github.com/sipeed/picoclaw/pull/3097)).

### 8. Backlog Watch
*   **[Issue #3012](https://github.com/sipeed/picoclaw/issues/3012) [stale]:** The continuous token consumption bug in Evolution Mode is highly destructive to the user's wallet but has been left stale since June 5th. This needs immediate triage.
*   **[PR #2964](https://github.com/sipeed/picoclaw/pull/2964) [stale]:** The inbound image compression PR has been waiting since May 28th. As vision pipelines become more heavily used, merging this is crucial to prevent API payload rejections.
*   **[PR #2551](https://github.com/sipeed/picoclaw/pull/2551) [stale]:** The massive channel standardization refactor has been open since April 16th. While complex, merging this is essential for the project to scale across multiple community-hosted instances effectively.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-13

## 1. Today's Overview
The NanoClaw project is experiencing a period of exceptionally high community and contributor activity, characterized today by 11 new or updated pull requests and no merged code. The focus of current development is heavily bifurcated between hardening the agent's security posture and stabilizing foundational infrastructure, such as data persistence and session management. A lack of recent official releases suggests the maintainers are likely staging a substantial minor or major version bump. Overall project health appears robust, with external contributors actively resolving complex edge cases and driving the roadmap forward.

## 2. Releases
**No new releases** were recorded today. The project's latest available code remains on recent pre-release or mainline commits.

## 3. Project Progress
No PRs were merged or closed today. However, the open pipeline is dense with significant architectural improvements and bug fixes currently under review:
*   **Security Hardening:** Contributor `boazdori` submitted two critical security PRs. [PR #2748](https://github.com/nanocoai/nanoclaw/pull/2748) restricts Linux capabilities for agent containers (`cap-drop`, `no-new-privileges`, `pids-limit`), and [PR #2749](https://github.com/nanocoai/nanoclaw/pull/2749) gates agent-requested npm installs by package age to prevent supply-chain attacks.
*   **Platform/Infrastructure:** Maintainer `omri-maya` opened three major feature PRs to enhance the provider system: [PR #2745](https://github.com/nanocoai/nanoclaw/pull/2745) (opt-in persistent memory scaffold), [PR #2746](https://github.com/nanocoai/nanoclaw/pull/2746) (agent-surfaces capability seam), and [PR #2747](https://github.com/nanocoai/nanoclaw/pull/2747) (SDK 2.2.1 credential-stub mounts).
*   **Bug Fixes:** Key infrastructure fixes include [PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750) recovering stale `outbound.db` journals after hard container kills, [PR #2670](https://github.com/nanocoai/nanoclaw/pull/2670) fixing a poisoned-resume crash loop, and [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) resolving an issue where inbound Discord attachments were dropped.

## 4. Community Hot Topics
*   **The "PR Factory" Recipe:** [PR #2742](https://github.com/nanocoai/nanoclaw/pull/2742) introduces a published recipe for automated PR review, triage, and testing via Slack threads. This highlights the community's strong desire to use NanoClaw for meta-software engineering (using AI agents to build AI agents).
*   **Agent Communication Reliability:** Underlying much of the discussion is frustration with silent message dropping. [Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506) (3 comments) digs into how responses are silently dropped when turns complete within 60 seconds of each other, a fundamental hurdle for production uptime.

## 5. Bugs & Stability
Several high-severity bugs impacting reliability and security were reported today:
1.  **Critical / Security:** Ungated Agent Creation — [Issue #2711](https://github.com/nanocoai/nanoclaw/issues/2711) reports that the `create_agent` MCP tool lacks role checks, allowing any container to spawn agent groups. (No fix PR submitted yet).
2.  **High / Availability:** Hung Tool Sessions — [Issue #2668](https://github.com/nanocoai/nanoclaw/issues/2668) reveals that a single hung MCP tool blocks the entire agent session for up to 30 minutes due to a lack of per-tool timeouts. (No fix PR submitted yet).
3.  **Medium / UX:** Budget Exhaustion — [Issue #2751](https://github.com/nanocoai/nanoclaw/issues/2751) notes that when an org hits its LLM spend cap, the gateway returns an HTTP 200, causing the agent to silently drop the reply instead of alerting the user. (Closed upon reporting, likely handled upstream or patched immediately).

## 6. Feature Requests & Roadmap Signals
*   **Persistent Memory:** [PR #2745](https://github.com/nanocoai/nanoclaw/pull/2745) signals an imminent official architecture for provider-scaffolded persistent memory, allowing agents to maintain state across sessions natively.
*   **Telegram Swarm v2:** [Issue #2632](https://github.com/nanocoai/nanoclaw/issues/2632) is a direct request from a user attempting to migrate their fork. They are asking for clarification on the v2 status of the multi-bot identity feature, indicating that official multi-agent/bot-swarm capabilities are actively demanded by the enterprise/user base.

## 7. User Feedback Summary
Users operating NanoClaw in production are encountering severe edge cases around asynchronous event loops and container lifecycles. There is clear frustration regarding **silent failures** (e.g., dropped responses, missing attachments, and ignored reactions on Signal via [PR #2744](https://github.com/nanocoai/nanoclaw/pull/2744)). The community consists of advanced users deploying complex multi-channel setups (Discord, Telegram, Signal, Slack) who expect enterprise-grade reliability and clear error propagation from the SDK.

## 8. Backlog Watch
*   **Session Deduplication Bug:** [Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506) has been open since mid-May and updated recently. It represents a core architectural flaw in the event loop that needs maintainer guidance.
*   **Agent Lifecycle Timeout:** [Issue #2668](https://github.com/nanocoai/nanoclaw/issues/2668) (the 30-minute hang) and [PR #2670](https://github.com/nanocoai/nanoclaw/pull/2670) (poisoned transcript crash loop) are tightly related to session resilience. The PR for the crash loop has been open since June 1st and requires a maintainer review to unblock critical stability improvements.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data.

# NullClaw Project Digest (2026-06-13)

### 1. Today's Overview
NullClaw is currently demonstrating steady, active development with a strong focus on architectural refinement and platform stability, despite a slight bottleneck in PR merges. Over the past 24 hours, the project saw three open pull requests updated, primarily driven by core contributor `vernonstinebaker`, addressing agent execution configuration, logging hygiene, and Discord gateway resilience. However, the lack of any merged PRs or new releases indicates a temporary bottleneck in the maintainer review process. Overall project health appears stable, with developers actively hardening the agent runner and expanding configuration flexibility while the community begins testing local model integrations.

### 2. Releases
*No new releases published in the last 24 hours.*

### 3. Project Progress
While no PRs were merged today, three significant open pull requests were updated, showing active progression toward NullClaw's next stability update:
*   **Configuration Expansion:** [PR #949](https://github.com/nullclaw/nullclaw/pull/949) advances the agent's customization capabilities by introducing `agent.default_queue_mode` to `config.json`, establishing a single source of truth for queue configurations.
*   **Agent Logging Hygiene:** [PR #951](https://github.com/nullclaw/nullclaw/pull/951) fixes a critical output behavior where agent initialization logs (memory plans, MCP registrations) were incorrectly being pushed to user channels as bot responses during a child process failure.
*   **Discord Integration Resilience:** [PR #953](https://github.com/nullclaw/nullclaw/pull/953) significantly hardens the Discord integration by properly closing active gateway sockets before reconnects and treating stalled pre-HELLO reconnects as unhealthy, preventing channel disconnects.

### 4. Community Hot Topics
Activity in the issue tracker is currently low-volume but highlights a critical use-case emerging in the community:
*   **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952)** (Created by `bloodgroup-cplusplus`): This is currently the most active discussion point. A user attempting to run a local Ollama model (Gemma) with NullClaw reported that the agent outputs incomplete sentences. 
*   *Underlying Needs:* This signals a growing demand for robust, out-of-the-box compatibility with local, open-weight LLMs. It highlights that users are successfully hooking up local inference engines, but may be running into context window, token-limit, or parsing friction between NullClaw and Ollama.

### 5. Bugs & Stability
Ranked by severity based on today's data:
1.  **High: Discord Gateway Stalling/Disconnects** (Addressed by [PR #953](https://github.com/nullclaw/nullclaw/pull/953)) - Stalled pre-HELLO gateway reconnects were causing integration instability. A fix with regression coverage is currently pending review.
2.  **High: Agent Initialization Log Leakage** (Addressed by [PR #951](https://github.com/nullclaw/nullclaw/pull/951)) - System/MCP initialization logs were leaking into user-facing channels as responses upon agent failure. This is a severe UX/Security break that is currently awaiting a merge.
3.  **Medium: Incomplete Local Model Responses** (Reported in [Issue #952](https://github.com/nullclaw/nullclaw/issues/952)) - Ollama (Gemma) integration is returning truncated text. Currently open with no fix PR submitted yet.

### 6. Feature Requests & Roadmap Signals
*   **Local Model Optimization:** Based on [Issue #952](https://github.com/nullclaw/nullclaw/issues/952), NullClaw is highly likely to introduce better default token limits, stop-word parsing, or explicit Ollama integration documentation in an upcoming release.
*   **Advanced Configuration via `config.json`:** [PR #949](https://github.com/nullclaw/nullclaw/pull/949) signals a roadmap shift toward making internal agent states (like `QueueMode`) highly configurable for end-users without requiring code changes.

### 7. User Feedback Summary
Real-world usage shows a split between developers building NullClaw's core and end-users deploying it. 
*   **Pain Points:** End-users deploying NullClaw with local, smaller models (like Gemma via Ollama) are experiencing poor generation quality/output truncation. 
*   **Satisfaction:** Developers appreciate the deep configurability being added to the system. The active suppression of system logs during failures ([PR #951](https://github.com/nullclaw/nullclaw/pull/951)) shows that the development team is highly responsive to operational UX, ensuring that users don't see raw backend errors.

### 8. Backlog Watch
The project currently requires **maintainer attention to unblock the pipeline**. There is an unusually high ratio of substantial, ready-to-review PRs to actual merges:
*   [PR #953](https://github.com/nullclaw/nullclaw/pull/953), [PR #951](https://github.com/nullclaw/nullclaw/pull/951), and [PR #949](https://github.com/nullclaw/nullclaw/pull/949) have all been active but remain unmerged. 
*   [Issue #952](https://github.com/nullclaw/nullclaw/issues/952) remains completely unanswered by maintainers. A triage comment confirming whether this is a NullClaw parsing bug or an Ollama configuration issue would greatly help community morale.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project digest for IronClaw on 2026-06-13.

### 1. Today's Overview
The IronClaw project is experiencing a period of exceptionally high development velocity and community engagement, driven primarily by the rollout of the "Reborn" runtime and WebUI v2. In the last 24 hours, the project processed 50 issues (17 closed) and 46 PRs (21 merged/closed), indicating a rapid, iterative feedback loop between core contributors and users. Development is heavily focused on stabilizing the Reborn architecture, fixing WebUI bugs, and introducing robust CI/E2E testing infrastructure. However, several critical infrastructure and architectural challenges—such as DeferredBusy thread locking and CI pipeline bottlenecks—are actively being debated and refactored by the core team.

### 2. Releases
No new releases were published today. However, PR [#3708](https://github.com/nearai/ironclaw/pull/3708) (open since May 16) indicates that a significant version bump is queued, with API breaking changes expected in `ironclaw_common` and `ironclaw_skills`.

### 3. Project Progress
The core team and contributors made substantial progress in merging key fixes and infrastructure improvements today:
*   **Security & Dependencies:** Critical security fixes for rust-postgres RUSTSEC advisories were quickly addressed and merged via PR [#4826](https://github.com/nearai/ironclaw/pull/4826) to unblock the CI merge queue.
*   **UX & UI Fixes:** Multiple WebUI v2 bugs were resolved, including descriptive chat titles replacing UUIDs (PR [#2700](https://github.com/nearai/ironclaw/pull/2700)) and fixes for MCP server names and UTF-8 truncation (PR [#2699](https://github.com/nearai/ironclaw/pull/2699)). The Slack dead-air UX was fixed by posting feedback when a message is deferred behind a pending gate (PR [#4811](https://github.com/nearai/ironclaw/pull/4811)).
*   **Testing Infrastructure:** 22 new deterministic, fully-mocked E2E test suites for Reborn QA use-cases were merged (PR [#4769](https://github.com/nearai/ironclaw/pull/4769)), alongside machinery to record and replay Anthropic-model traces in CI (PR [#4773](https://github.com/nearai/ironclaw/pull/4773)).

### 4. Community Hot Topics
*   **WebUI v2 Onboarding & Inference Friction:** The most heavily discussed issues today were closed regarding the NEAR AI provider setup. Issue [#4703](https://github.com/nearai/ironclaw/issues/4703) (Model picker saving display names instead of IDs) and Issue [#4705](https://github.com/nearai/ironclaw/issues/4705) (SSO setup failures) highlight a difficult onboarding experience for new local users. 
*   **Approval State Persistence:** Issue [#4825](https://github.com/nearai/ironclaw/issues/4825) gained traction, addressing user frustration that "always allow" capability approval gates do not persist across new Reborn threads, forcing users to repeatedly approve tools like Gsuite.
*   **Agent Context & Delivery:** Testers reported that the AI model lacks ambient awareness of connected channels (like Slack), resulting in failed message routing. This sparked active discussion in Issue [#4828](https://github.com/nearai/ironclaw/issues/4828) regarding exposing connected channels to the runtime context.

### 5. Bugs & Stability
*   **Critical / CI Blocking:** Issue [#4824](https://github.com/nearai/ironclaw/issues/4824) reported failing `cargo-deny` checks across the repo due to new RUSTSEC advisories (DoS vulnerabilities in Postgres crates). *Status: Fixed via PR [#4826](https://github.com/nearai/ironclaw/pull/4826).*
*   **Major / Workflow Breaking:** Issue [#4762](https://github.com/nearai/ironclaw/issues/4762) reported that a failed tool workflow (like a bad URL fetch) permanently breaks follow-up message ordering and activity consistency in Reborn.
*   **Major / Agent Logic:** Issue [#4759](https://github.com/nearai/ironclaw/issues/4759) showed that workspace-relative paths are being incorrectly duplicated, causing file creation workflows to fail.
*   **Minor / UI:** A collection of UI bugs remain open, including missing draft persistence when leaving "New Conversation" ([#4724](https://github.com/nearai/ironclaw/issues/4724)), low contrast on attachment warnings in Light theme ([#4819](https://github.com/nearai/ironclaw/issues/4819)), and missing user/assistant avatars in the chat UI ([#4722](https://github.com/nearai/ironclaw/issues/4722)).

### 6. Feature Requests & Roadmap Signals
*   **DeferredBusy Drain Optimization:** Following a recent fix, the team is signaling a deep architectural pivot toward optimizing how parked messages are handled. Feature requests include batching drained messages into a single run ([#4832](https://github.com/nearai/ironclaw/issues/4832)) and adding per-thread indexing to avoid full transcript scans ([#4833](https://github.com/nearai/ironclaw/issues/4833)).
*   **Agent Self-Awareness:** Users are highly requesting that the LLM natively understands its runtime context. Issue [#4796](https://github.com/nearai/ironclaw/issues/4796) requests the agent natively know the current date/time for scheduling, and Issue [#4828](https://github.com/nearai/ironclaw/issues/4828) requests native awareness of outbound delivery channels. PR [#4779](https://github.com/nearai/ironclaw/pull/4779) currently addresses the Slack delivery target exposure.
*   **Admin Telemetry:** Issue [#4822](https://github.com/nearai/ironclaw/issues/4822) requests exposing Engine V2 LLM usage data in the `/api/admin/usage` endpoint.

### 7. User Feedback Summary
Real user testing of Reborn v2 reveals deep dissatisfaction with state persistence and workflow resilience. Users are frustrated when the agent "forgets" draft messages ([#4724](https://github.com/nearai/ironclaw/issues/4724)) or tool approvals ([#4825](https://github.com/nearai/ironclaw/issues/4825)) upon switching contexts. Furthermore, when tool executions fail, the UI leaves users in an inconsistent state without clear error feedback ([#4762](https://github.com/nearai/ironclaw/issues/4762)). On the positive side, the rapid closure of early onboarding and UI bugs (by contributor `sunglow666`) shows that the community is actively stress-testing the UI and the core team is highly responsive to fixing the user experience.

### 8. Backlog Watch
*   **Issue [#4818](https://github.com/nearai/ironclaw/issues/4818):** The `slack_delivery.rs` file has grown to ~4,000 lines, far exceeding the 3,000-line architectural budget. It urgently needs a core maintainer to approve its decomposition into focused modules.
*   **Issue [#4813](https://github.com/nearai/ironclaw/issues/4813):** The CI test jobs are severely bottlenecking PR feedback loops due to large, unsharded test suites. This is actively slowing down contributor velocity and requires CI/CD attention.
*   **PR [#4588](https://github.com/nearai/ironclaw/pull/4588) & PR [#4559](https://github.com/nearai/ironclaw/pull/4559):** Two XL-sized feature PRs (Agent observability seams and Trace Commons onboarding) have been open for 4-5 days. They are critical for Reborn observability and require maintainer review to proceed.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI Project Digest (2026-06-13)

### 1. Today's Overview
LobsterAI (by NetEase Youdao) shows robust development activity today, driven primarily by internal core maintainers preparing and stabilizing a major release cycle. The project processed 17 pull requests in the last 24 hours, with 11 successfully merged or closed, indicating a highly active and efficient review pipeline. The engineering focus is heavily concentrated on polishing the newly introduced "Computer Use" capabilities, refining the cowork/scheduled tasks modules, and fixing media handling bugs. While core development is sprinting forward, several community-submitted PRs from early April have resurfaced as stale, highlighting a slight disconnect between internal sprint priorities and external community backlog triaging.

### 2. Releases
**Release Status:** The project did not publish a formal, tagged new release today.
**Upcoming Release Signals:** PR [#2158](https://github.com/netease-youdao/LobsterAI/pull/2158) officially merges `release/2026.6.11` into `main` for the **2026.6.12 release**. 
*   **Expected Highlights:** The upcoming release will introduce a **Computer Use MVP** with a built-in kit, **realtime ASR voice input** for cowork prompts, and expanded sharing capabilities for HTML/image/SVG artifacts.

### 3. Project Progress
The merged PRs over the last 24 hours reflect a hardening and stabilization phase for the upcoming release:
*   **Release Integration:** PR [#2158](https://github.com/netease-youdao/LobsterAI/pull/2158) merged the latest release branch into main.
*   **Computer Use Tooling:** Upgraded the managed Computer Use runtime to `1.0.7` via PR [#2156](https://github.com/netease-youdao/LobsterAI/pull/2156), which includes UIA breadcrumbs to diagnose unexpected helper exits.
*   **Cowork & Streaming Fixes:** PR [#2154](https://github.com/netease-youdao/LobsterAI/pull/2154) fixed an issue where model metadata was lost when users manually stopped AI streams. PR [#2153](https://github.com/netease-youdao/LobsterAI/pull/2153) resolved a model selection conflict for same-name packages. PR [#2155](https://github.com/netease-youdao/LobsterAI/pull/2155) fixed a race condition causing duplicate realtime ASR voice input starts.
*   **Media Handling:** PR [#2157](https://github.com/netease-youdao/LobsterAI/pull/2157) corrected text-to-image file saving logic, ensuring file extensions accurately match the actual byte format (e.g., stopping PNG content from being saved as .jpg).
*   **UX Data Loss Prevention:** A series of PRs by community contributor `MaoQianTu` were merged to prevent silent data loss in the UI—adding "unsaved changes" warnings to the Agent creation modal ([#1473](https://github.com/netease-youdao/LobsterAI/pull/1473)), Agent settings ([#1474](https://github.com/netease-youdao/LobsterAI/pull/1474)), MCP server config ([#1475](https://github.com/netease-youdao/LobsterAI/pull/1475)), and persisting input box drafts upon navigation ([#1476](https://github.com/netease-youdao/LobsterAI/pull/1476)) and re-editing history ([#1477](https://github.com/netease-youdao/LobsterAI/pull/1477)).

### 4. Community Hot Topics
The most historically active issue is **[#1](https://github.com/netease-youdao/LobsterAI/issues/1)** (Hit API error with OpenAI API Type). Originally opened in February 2026, it was finally closed yesterday with 7 comments. The underlying need here revolved around users attempting to configure third-party LLM providers (MiniMax via OpenAI message type) and hitting 400 API errors due to invalid parameter routing. 
Additionally, there is a high concentration of stale but impactful community PRs that were bumped today, indicating contributors are eager for maintainer reviews on critical UI/UX improvements (e.g., preventing gateway restart loops, fixing i18n, and refining scheduled tasks UI).

### 5. Bugs & Stability
*(Ranked by Severity)*
1.  **High - Gateway Crash Loop:** PR [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446) addresses a critical bug where the OpenClaw gateway gets stuck in an infinite restart loop following a crash, completely paralyzing the application due to a race condition between exit events and process scheduling. *(Open/Stale - Awaiting merge)*
2.  **Medium - Disabled Skill Execution:** PR [#1453](https://github.com/netease-youdao/LobsterAI/pull/1453) highlights that skills disabled by users continue to be injected into the system prompt and executed, due to a state synchronization gap between `skill.enabled` and `activeSkillIds`. *(Open/Stale - Awaiting merge)*
3.  **Medium - Media File Mismatch:** Issue where T2I images are saved with incorrect MIME/extensions. *(Fixed and Merged in PR [#2157](https://github.com/netease-youdao/LobsterAI/pull/2157))*
4.  **Low - i18n Fallbacks:** PR [#1448](https://github.com/netease-youdao/LobsterAI/pull/1448) points out missing translation keys resulting in hardcoded English fallbacks for critical UI elements like the "Delete" button. *(Open/Stale - Awaiting merge)*

### 6. Feature Requests & Roadmap Signals
The current development signals a massive push toward making LobsterAI a fully autonomous desktop agent. 
*   **Computer Use MVP:** This is clearly the flagship feature of the upcoming release, transforming the assistant from a conversational bot into an agent capable of interacting with OS UIs.
*   **Advanced Cowork Task Management:** PR [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) suggests a strong community need for **grouped/collapsed views for recurring scheduled tasks**, which will likely be a necessary inclusion in a near-future release as users scale up their automated workflows.

### 7. User Feedback Summary
User feedback currently highlights friction in **data loss upon navigation** and **third-party API integrations**. Users were frustrated by app states where closing a modal unexpectedly wiped complex configurations (like Agent system prompts or MCP variables). The merging of PRs [#1473](https://github.com/netease-youdao/LobsterAI/pull/1473) through [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477) directly addresses these pain points, showing high responsiveness to UX friction. Furthermore, Issue [#1](https://github.com/netease-youdao/LobsterAI/issues/1) proves that power users are actively trying to plug custom/non-standard LLM endpoints into the application and desire smoother compatibility layers for OpenAI-compatible APIs.

### 8. Backlog Watch
There are several highly valuable, community-submitted PRs from early April that are currently marked as `[stale]` and desperately need maintainer attention:
*   **Gateway Stability:** PR [#1446](https://github.com/netease-youdao/LobsterAI/pull/1446) (Infinite restart loop fix) is critical for application reliability.
*   **Task Scheduler UI:** PR [#1449](https://github.com/netease-youdao/LobsterAI/pull/1449) (Folding scheduled task records) and PR [#1454](https://github.com/netease-youdao/LobsterAI/pull/1454) (Silent failure on empty date creation) are essential for the usability of the Cowork module.
*   **Shortcuts Reliability:** PR [#1456](https://github.com/netease-youdao/LobsterAI/pull/1456) (Adding duplicate shortcut detection) fixes a silent failure in the settings menu.
*   **Maintainer Action Recommended:** Triaging and merging these stale PRs should be prioritized immediately after the `2026.6.12` release is officially shipped to keep the community contributors engaged.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-13

## 1. Today's Overview
Moltis is currently maintaining a steady, development-focused trajectory with no disruptive events or emergency patches. Over the past 24 hours, the project saw continuous community engagement, tracking 2 open issues and 1 open pull request, with no items merged or closed. The current activity is heavily centered around expanding communication channel reliability and integrating highly performant local AI models. While there are no new releases to report today, the active pipeline suggests maintainers are likely reviewing architectural changes for WhatsApp routing and evaluating engine expansions for voice capabilities. Overall project health appears stable, with contributors actively identifying edge-case bugs and proposing high-value features.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
No pull requests were merged, and no issues were closed today. However, active development is visible in the pipeline:
*   **WhatsApp Gateway Reliability:** A new open PR ([#1116](https://github.com/moltis-org/moltis/pull/1116)) addresses a silent message dropping bug, indicating that work is actively being done to stabilize third-party messaging integrations.
*   **Voice Engine Expansion:** Ongoing discussion in Issue [#1102](https://github.com/moltis-org/moltis/issues/1102) regarding local Speech-to-Text (STT) engines signals that the project's roadmap is trending toward offering more versatile, on-device AI processing.

## 4. Community Hot Topics
The community is currently focused on messaging privacy protocols and local processing performance.
*   **Fastmail MCP Integration:** [Issue #1115](https://github.com/moltis-org/moltis/issues/1115) generated 2 comments since its creation, highlighting the community's active use of Moltis as a multi-channel assistant. The underlying need is for seamless, secure integration with privacy-focused email providers.
*   **Local STT Performance:** [Issue #1102](https://github.com/moltis-org/moltis/issues/1102) (1 comment) shows strong user interest in integrating FunASR/SenseVoice. This indicates a growing demand among users for ultra-low latency, on-premise voice processing, likely driven by advanced local AI enthusiasts who want to avoid cloud STT latency and fees.

## 5. Bugs & Stability
One notable bug affecting communication stability was identified today:
*   **Medium/High Severity: Silent Message Dropping on WhatsApp** ([Issue #1115](https://github.com/moltis-org/moltis/issues/1115) / [PR #1116](https://github.com/moltis-org/moltis/pull/1116)): Agents are currently dropping replies in WhatsApp chats where the sender has privacy features enabled (specifically `@lid` addresses). While the agent executes correctly and shows the reply in the web UI, the outbound gateway fails to rewrite the JID correctly, resulting in silent failures with no delivery receipts. 
    *   *Fix Status:* A fix is already under review in PR [#1116](https://github.com/moltis-org/moltis/pull/1116), which is currently open.

## 6. Feature Requests & Roadmap Signals
*   **Add FunASR/SenseVoice as local STT engine** ([Issue #1102](https://github.com/moltis-org/moltis/issues/1102)): User `LauraGPT` proposed integrating SenseVoice to achieve ~70ms processing for 10s audio with native streaming capabilities. If accepted, this would represent a massive latency improvement for local voice assistants.
*   **Future Release Prediction:** With the current open PR fixing a critical messaging pathway, it is highly likely the next minor release will focus entirely on communication gateway stability. However, a future release will almost certainly include a major version bump to the voice/audio processing module to support FunASR, given the AI industry's strong shift toward local, edge-computing models.

## 7. User Feedback Summary
Real-world usage of Moltis highlights both the complexity of modern messaging protocols and the high technical expectations of the user base:
*   **Pain Point:** Users deploying Moltis as an omnichannel assistant are experiencing friction with advanced WhatsApp privacy features (`@lid` routing), leading to "phantom" replies that appear to send but are silently blocked.
*   **Use Cases:** Moltis is actively being utilized as a unified hub for both voice assistants and text/email interfaces (via Fastmail MCP and WhatsApp). 
*   **Satisfaction:** The user base is highly technical and constructive. For instance, the author of the STT feature request provided detailed architectural reasoning and benchmarks, indicating a healthy, developer-oriented community that is invested in the project's success.

## 8. Backlog Watch
*   **Fastmail MCP Authorisation Bug ([#1115](https://github.com/moltis-org/moltis/issues/1115)):** Although it only has 2 comments and was created recently, this requires maintainer attention as it blocks users from successfully deploying email-bound agents.
*   **FunASR/SenseVoice STT Integration ([#1102](https://github.com/moltis-org/moltis/issues/1102)):** Open since 2026-06-04, this feature request is a high-value addition that requires architectural evaluation from the core maintainers to determine if the local voice pipeline is ready for ultra-fast streaming models.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured project digest for CoPaw (QwenPaw) based on the GitHub data provided for 2026-06-13.

### 1. Today's Overview
The CoPaw (QwenPaw) project is exhibiting **exceptionally high activity and rapid iteration**, maintaining a very healthy and responsive development cycle. In the last 24 hours, the community generated 23 active Issues and 27 Pull Requests, with maintainers successfully merging/closing 11 PRs and resolving 7 Issues. The project is currently in a transitional phase, actively preparing for a beta release (`v1.1.12b1`) while simultaneously tackling critical regressions introduced in the recent `v1.1.11.post2` update. Meanwhile, architectural overhauls—specifically the migration to AgentScope 2.0—are driving massive structural discussions behind the scenes.

### 2. Releases
*No official new releases were published in the last 24 hours.* 
However, maintainers are actively preparing the next incremental version. PR [#5159](https://github.com/agentscope-ai/QwenPaw/pull/5159) updated the version string to `1.1.12b1`, indicating that a public beta release is imminent.

### 3. Project Progress
Maintainers and contributors made substantial progress in merging fixes and new features today:
*   **Memory & UX Fixes:** Merged [PR #5144](https://github.com/agentscope-ai/QwenPaw/pull/5144) to fix a bug where vector model configurations were silently lost if their UI cards weren't expanded. [PR #5154](https://github.com/agentscope-ai/QwenPaw/pull/5154) fixed the broken UI rendering for memory search results.
*   **Session Management:** Merged [PR #5147](https://github.com/agentscope-ai/QwenPaw/pull/5147), fixing an annoying bug where Coding Mode sessions would redirect to the first session upon page refresh.
*   **Deployment & Security:** Closed [PR #5022](https://github.com/agentscope-ai/QwenPaw/pull/5022) to guard agent workspace restore targets, preventing custom workspaces from overwriting critical directories. 
*   **Release Engineering:** Merged [PR #5121](https://github.com/agentscope-ai/QwenPaw/pull/5121), introducing a new CI "Release Verification Gate" to ensure build artifacts pass end-to-end health checks before publishing.

### 4. Community Hot Topics
*   **Scheduled Tasks Failure ([Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)):** The most discussed issue today (11 comments). Users reported that agent-created scheduled tasks execute without errors but completely fail to trigger at the set time. This highlights a strong user reliance on QwenPaw for proactive, asynchronous task automation.
*   **AgentScope 2.0 Migration ([Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)):** With 10 comments, this breaking change proposal shows heavy community interest in modernizing the backend runtime to adopt AgentScope 2.0's new architecture and APIs.
*   **Multi-Agent Collaboration Request ([Issue #5139](https://github.com/agentscope-ai/QwenPaw/issues/5139)):** Users are requesting native agent "swarm/team" capabilities similar to WorkBuddy, signaling that single-agent execution is no longer sufficient for complex enterprise workflows.

### 5. Bugs & Stability
Several critical bugs and regressions tied to the `v1.1.11` update were reported today:
1.  **[Critical] Windows Client Process/Memory Leak ([Issue #5138](https://github.com/agentscope-ai/QwenPaw/issues/5138)):** Opening the desktop client causes processes to continuously spawn, pushing memory usage over 90%.
2.  **[Critical] Docker Auto-Crash/Restart ([Issue #5155](https://github.com/agentscope-ai/QwenPaw/issues/5155)):** The `v1.1.11` Docker deployment experiences random crashes and automatic restarts.
3.  **[High] Long Conversation Deadlock ([Issue #5161](https://github.com/agentscope-ai/QwenPaw/issues/5161)):** The agent stops responding entirely when a conversation context becomes too long. Another user also reported an infinite thinking loop in [Issue #5162](https://github.com/agentscope-ai/QwenPaw/issues/5162).
4.  **[High] Attachment Download 404 Errors ([Issue #5140](https://github.com/agentscope-ai/QwenPaw/issues/5140)):** In `v1.1.11.post2`, downloading binary files (docx/pdf) fails with a 404 error, though text files download normally.
5.  **[High] Gemini Tool Calling Regression ([Issue #5163](https://github.com/agentscope-ai/QwenPaw/issues/5163)):** Users confirmed Gemini tool calling broke between `v1.1.10` and `v1.1.11.post2`.
6.  **[Medium] Python 3.13 Plugin Incompatibility ([Issue #5166](https://github.com/agentscope-ai/QwenPaw/issues/5166)):** Installing the TeamChat plugin fails on Python 3.13 because the deprecated `imghdr` module is still referenced.

### 6. Feature Requests & Roadmap Signals
Based on today's community input, the short-term roadmap likely includes:
*   **Advanced Desktop Deployment:** [Issue #5164](https://github.com/agentscope-ai/QwenPaw/issues/5164) requests system tray support, boot-startup, and background service management for the desktop client. Active development is already happening to speed up desktop startup via [PR #5153](https://github.com/agentscope-ai/QwenPaw/pull/5153).
*   **Cost-Effective Model Integrations:** [Issue #5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) requests adding `kimi-for-coding` to the `uv` allowlist, proving users want to utilize existing paid coding subscriptions locally.
*   **Swarm/Team Architecture:** [Issue #5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) strongly signals that multi-agent collaboration frameworks are the next frontier for user expectations.
*   **Expanded IM Channels:** [Issue #5152](https://github.com/agentscope-ai/QwenPaw/issues/5152) requests native Slack integration.

### 7. User Feedback Summary
Overall user satisfaction with QwenPaw's capability is high, particularly regarding its local deployment flexibility and rich plugin ecosystem. However, the `v1.1.11` update has caused friction. Users are expressing frustration with deployment instability, specifically memory management on Windows and crashes in Docker environments. Additionally, developers utilizing the UI Console are experiencing "paper cuts"—such as broken Math formula rendering ([Issue #5143](https://github.com/agentscope-ai/QwenPaw/issues/5143)) and form validation loss—which detracts from the overall premium experience.

### 8. Backlog Watch
The following highly impactful contributions have been under review for multiple days and require maintainer attention to prevent development bottlenecks:
*   **[PR #5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) - Runtime 2.0 Modular Architecture:** A massive breaking change that introduces a `ToolCoordinator` layer. This has been under review since June 10th.
*   **[PR #5067](https://github.com/agentscope-ai/QwenPaw/pull/5067) - Agent OS Driver:** A first-time contributor's massive security/architectural enhancement aiming to unify external capabilities (MCP, A2A, ACP). Under review since June 10th.
*   **[PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) - DataPaw Plugin:** A first-time contributor has built a robust 12-skill BI data analysis plugin that has been waiting for merge approval since May 22nd.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw based on the provided GitHub data.

### 1. Today's Overview
ZeroClaw is experiencing a massive surge in community engagement and maintenance activity, driven by the landmark release of **v0.8.0**. In the last 24 hours, the project saw an exceptionally high volume of activity with 50 updated issues (47 open) and 50 active pull requests (45 open), indicating aggressive iteration on post-release bug fixing and feature finalization. Maintainers and contributors are heavily focused on stabilizing the new multi-agent configuration schema, patching deployment frictions (like Windows updates and Docker builds), and refining complex tool-calling loops. The project's current health is robust, transitioning rapidly from a major architectural release into a stabilization phase.

### 2. Releases
*   **[v0.8.0](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0)**
    *   **Core Change:** Major architectural overhaul allowing a single daemon to run multiple named agents simultaneously.
    *   **Features:** Each agent now operates in isolation with its own workspace, memory, model provider, security policy, channels, and personality.
    *   **Migration:** Features a completely rewritten configuration schema that includes automatic migration for existing user setups.

### 3. Project Progress
The codebase is undergoing rapid refinement to smooth out the v0.8.0 release edges.
*   **Architecture Consolidation:** Work continues on unifying the agent turn engines. [PR #7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540) implements [Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415), consolidating three separate turn engines (`run_tool_call_loop`, `turn_streamed`, `Agent::turn`) into a single execution path to reduce technical debt.
*   **Installation & Deployment Fixes:** Contributors addressed several OS-specific deployment blockers, including fixing `.zip` release asset detection for Windows self-updating ([PR #7530](https://github.com/zeroclaw-labs/zeroclaw/pull/7530)), adding `g++` to the web build Docker layer ([PR #7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534)), and preventing infinite loops in non-TTY quickstart environments ([PR #7516](https://github.com/zeroclaw-labs/zeroclaw/pull/7516)).
*   **Channel Enhancements:** WhatsApp Web functionality was significantly improved, adding support for media attachments ([PR #7536](https://github.com/zeroclaw-labs/zeroclaw/pull/7536)) and message reactions ([PR #7535](https://github.com/zeroclaw-labs/zeroclaw/pull/7535)).
*   **Configuration Correctness:** [PR #7532](https://github.com/zeroclaw-labs/zeroclaw/pull/7532) fixed a serde default mismatch that silently dropped configuration sections during save round-trips.

### 4. Community Hot Topics
*   **Unifying the Turn Engines ([Issue #7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415)):** With 3 comments and active maintainer involvement, this RFC highlights the community's desire for architectural consistency. The execution path is being heavily debated to ensure channels, gateways, and embedded agents share identical tool-calling behaviors.
*   **Multi-Agent Webhook Routing ([Issue #6312](https://github.com/zeroclaw-labs/zeroclaw/issues/6312)):** A highly discussed enhancement request (4 comments) addressing the new multi-agent paradigm. Users are requesting per-alias webhook routing to manage multiple agents on a single gateway, showing an immediate demand for scalable, fleet-style deployments.

### 5. Bugs & Stability
Several high-severity bugs (S1/S2) are currently affecting the v0.8.0 release line, though many now have open fix PRs:
*   **[S0/S1] OOM in WSL2 ([Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)):** The daemon experiences consecutive Out Of Memory crashes when running in WSL2, posing a data/security risk.
*   **[S1] Dashboard Unavailable ([Issue #7523](https://github.com/zeroclaw-labs/zeroclaw/issues/7523)):** Mac OS users installing via Brew are finding the web dashboard completely missing. *Fix Status:* Addressed by [PR #7529](https://github.com/zeroclaw-labs/zeroclaw/pull/7529) (fixing misleading URL printing) and [PR #7534](https://github.com/zeroclaw-labs/zeroclaw/pull/7534) (fixing the web build layer).
*   **[S1] Default Context Budget Exceeded ([Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)):** System prompts and tool definitions cause the agent to exceed the default 32k context budget on iteration 1, causing a perpetual trim loop.
*   **[S1] Context Compression Drops Tool Calls ([Issue #6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)):** OpenAI-compatible providers (like MiniMax) enter broken tool loops because the context compressor drops `assistant(tool_calls)` and `tool(result)` messages entirely.
*   **[S1] Autonomy Level Blocks Shell Tools ([Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)):** Even with `level = "full"`, safe shell tool dispatches are refused. 

### 6. Feature Requests & Roadmap Signals
Based on current in-progress issues and PRs, the next minor versions will likely focus on:
*   **Advanced Daemon Fleet Management:** Features like real heartbeat tracking for nodes ([Issue #6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391)), remote daemon registration via CLI ([Issue #6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390)), and an in-dashboard "Update" button ([Issue #6365](https://github.com/zeroclaw-labs/zeroclaw/issues/6365)) indicate a push toward multi-machine orchestration.
*   **Wasmtime Plugin Support:** [PR #7429](https://github.com/zeroclaw-labs/zeroclaw/pull/7429) adds the `wasmtime` dependency, signaling an upcoming shift away from Extism for safer, more performant sandboxed plugins.
*   **Enhanced Tool Security & Context:** Upcoming patches will likely finalize MCP `allowed_tools` enforcement ([PR #7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547)) and full prompt/completion capture in OpenTelemetry ([Issue #6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642)).

### 7. User Feedback Summary
The transition to v0.8.0 has been met with enthusiasm regarding multi-agent capabilities, but it has also exposed friction in the user experience. **Deployment friction** is a major pain point, especially for Docker and Mac/Brew users who are struggling to build or locate the web dashboard. **Provider compatibility** remains a sensitive area; users leveraging non-standard OpenAI-compatible APIs (like Gemini via LiteLLM or MiniMax) are running into strict message ordering and serialization invariant violations ([Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)). Finally, the reliance on hardcoded values for things like Discord intents ([PR #7524](https://github.com/zeroclaw-labs/zeroclaw/pull/7524)) shows that users want deeper, granular configuration control over their agent instances.

### 8. Backlog Watch
*   **MCP Orphan Accumulation ([Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)):** Open since April, this high-risk bug leaks one stdio child process per heartbeat tick. While `interval_minutes = 30` mitigates it slightly, it still results in massive orphan counts over long daemon lifetimes and needs urgent resolution.
*   **Skill Manifest Confusion ([Issue #6645](https://github.com/zeroclaw-labs/zeroclaw/issues/6645)):** The `SkillImprover` logic only checks for `SKILL.toml`, while bundled skills ship with `manifest.toml`. Combined with an unbounded skill patch cooldown bug ([Issue #6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683)), the skill ecosystem is currently fragile.
*   **WhatsApp LID Bypass ([Issue #6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)):** A high-risk security issue where LID-based contacts bypass the allowed-numbers list, resulting in silent message drops. This needs maintainer review to ensure personal/business channel boundaries are respected.

</details>