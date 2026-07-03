# OpenClaw Ecosystem Digest 2026-07-04

> Issues: 206 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-03 22:18 UTC

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

Here is the structured project digest for OpenClaw based on the July 4, 2026 data snapshot.

### 1. Today's Overview
OpenClaw is currently experiencing a massive surge in community engagement and ongoing development, evidenced by nearly 500 PR updates and 206 issue updates in the last 24 hours alone. The project is in a heavy stabilization and hardening phase, with a particular focus on improving the reliability of multi-agent setups, session state management, and messaging channel integrations. However, the ratio of open PRs (470) to merged PRs (30) indicates a potential bottleneck in maintainer review or a deliberate gatekeeping strategy before a major milestone. The lack of new releases today contrasts with the high volume of regression reports tied to the recent `v2026.6.11` and `v2026.5.x` deployments.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
While only 30 PRs were merged/closed today, the 470 active open PRs show active development in several key architectural areas. Notable advancements include:
*   **Storage Architecture Overhaul:** A major refactor ([PR #98236](https://github.com/openclaw/openclaw/pull/98236)) is in progress to migrate sessions and transcripts from flat JSONL files to a SQLite storage backend, which promises to resolve various state-related race conditions.
*   **Agent Reliability & Fallbacks:** Work on hardening subagent completion and fallback delivery ([PR #79405](https://github.com/openclaw/openclaw/pull/79405)) and emitting structured runtime incidents ([PR #79401](https://github.com/openclaw/openclaw/pull/79401)) is advancing.
*   **Channel Integrations:** Fixes for Slack session init conflicts ([PR #99647](https://github.com/openclaw/openclaw/pull/99647)), Nextcloud Talk mention parsing ([PR #79397](https://github.com/openclaw/openclaw/pull/79397)), and Voice Call webhook auto-responding ([PR #79336](https://github.com/openclaw/openclaw/pull/79336)) are ready for maintainer review.
*   **QA & Certification:** Internal hardening of certification gates and anti-sycophancy eval suites ([PR #79342](https://github.com/openclaw/openclaw/pull/79342)) shows a maturing approach to AI behavior testing.

### 4. Community Hot Topics
The most actively discussed issues highlight critical UX and platform reliability demands:
*   **Agent Internal Monologue Leaking ([Issue #25592](https://github.com/openclaw/openclaw/issues/25592)):** With 33 comments, this is the hottest topic. Users report that agent processing text (error handling, narration) between tool calls is being routed directly into user-facing channels like Slack and iMessage. *Underlying need:* A clean separation between agent "scratchpad" thoughts and user-facing delivery.
*   **Codex Worker Runaway Hardening ([Issue #99551](https://github.com/openclaw/openclaw/issues/99551)):** A 12-comment thread acting as a tracker for incident hardening. *Underlying need:* Better guardrails around OpenAI Codex worker failure modes to prevent silent crashes and transcript loss.
*   **Multi-Agent Token & Memory Governance ([Issue #35203](https://github.com/openclaw/openclaw/issues/35203)):** An RFC proposing capability profiling, shared blackboards, and token cost governance for multi-agent setups. *Underlying need:* Enterprise-grade controls for orchestrating multiple agents without blowing through token limits or creating data silos.

### 5. Bugs & Stability
Stability is currently the biggest concern, with several high-severity regressions reported in recent versions:
*   **🚨 Critical: Gateway Crashes on Node 26 ([Issue #99263](https://github.com/openclaw/openclaw/issues/99263)):** Uncaught `ERR_INVALID_STATE` exception when handling inbound images due to garbage collection closing `FileHandle` prematurely.
*   **📉 Regression: v2026.6.11 Tool Output Poisoning ([Issue #98673](https://github.com/openclaw/openclaw/issues/98673) & [Issue #99168](https://github.com/openclaw/openclaw/issues/99168)):** `sanitizeContentBlocksImages` is incorrectly converting text tool results into image blocks (or rendering them as `(no output)` / `(see attached image)`). This effectively blinds the agent to stdout/stderr text.
*   **📉 Regression: Missing Reentrancy Guard ([Issue #98416](https://github.com/openclaw/openclaw/issues/98416)):** The published `v2026.6.11` dist is missing a commit for `reentrant: true`, causing reply session initialization conflicts. 
*   **🔄 Crash Loop: Gateway Stale Module Paths ([Issue #92241](https://github.com/openclaw/openclaw/issues/92241)):** After a version rollback, the gateway holds stale import paths, silently dropping inbound messages with `ERR_MODULE_NOT_FOUND`.

### 6. Feature Requests & Roadmap Signals
Based on recent proposals, the next major versions will likely focus on:
*   **Intelligent Session Titling ([Issue #99583](https://github.com/openclaw/openclaw/issues/99583)):** Using cheap LLM models to lazily generate topic-aware session titles automatically.
*   **Provider Quarantine & Fallback by Failure Class ([Issue #47910](https://github.com/openclaw/openclaw/issues/47910)):** Reworking failover logic so that auth-broken providers are quarantined rather than blindly retried alongside rate-limited providers.
*   **Per-Agent Plugin Configs ([Issue #55401](https://github.com/openclaw/openclaw/issues/55401)):** Allowing different agents on the same instance to have isolated plugin configurations.
*   **ClawRouter Integration ([PR #99658](https://github.com/openclaw/openclaw/pull/99658)):** A new provider integration to support credential-scoped model catalogs and managed quotas.

### 7. User Feedback Summary
Users are heavily utilizing OpenClaw in multi-platform, real-time environments (Telegram, iOS, Slack), but are frequently frustrated by **message delivery and session state fragility**. A recurring pain point is that gateway touch operations—like config patches or deep SSH guest exec chains—cause tool surfaces to return blank bodies ([Issue #99586](https://github.com/openclaw/openclaw/issues/99586)). Furthermore, users running self-hosted local models (`Ollama`, `LM Studio`) report the agent hanging indefinitely despite capability tests succeeding ([Issue #97871](https://github.com/openclaw/openclaw/issues/97871)). UI navigation is also criticized for being overly dense and resembling raw config files ([Issue #75947](https://github.com/openclaw/openclaw/issues/75947)).

### 8. Backlog Watch
*   **Telegram Timeout & Message Loss:** [Issue #87744](https://github.com/openclaw/openclaw/issues/87744) (P1) describes Codex-backed Telegram turns repeatedly timing out waiting for terminal `turn/completed`, resulting in total message loss. Requires immediate product/maintainer decision.
*   **180s Compaction Timeout:** [Issue #92043](https://github.com/openclaw/openclaw/issues/92043) highlights that the default 180s embedded compaction timeout acts as a wall clock with no partial-progress reuse, causing long-history sessions to fail repeatedly. 
*   **Hardcoded Media Limits:** [Issue #40880](https://github.com/openclaw/openclaw/issues/40880) remains a lingering grievance where the `tools/sandbox` hardcodes the media max bytes limit to 5MB, preventing users from processing large PDFs or PowerPoints. Fix PRs are requested but pending.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the July 4, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a massive surge in development velocity, transitioning from single-user chat interfaces to complex, multi-agent architectures. Projects are aggressively tackling the "hard problems" of agent orchestration, specifically focusing on context window management, memory persistence, and secure tool execution (MCP). There is a strong, ecosystem-wide push toward enterprise readiness, marked by the introduction of role-based access controls (RBAC), multi-user session isolation, and robust cross-platform messaging channel integrations. While cloud-based LLM providers remain dominant, a clear and growing sub-trend emphasizes local model support, self-hosted containerization, and cost governance.

### 2. Activity Comparison
*Health Score is calculated based on PR merge ratios, bug triage responsiveness, and release cadence.*

| Project | Issues (Updated/Active) | PRs (Updated) | Release Status | Health Score | Assessment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 206 | 500 (30 merged) | No release | 🟡 6.5/10 | Massive activity, but PR review bottleneck and severe regressions. |
| **NanoBot** | ~15+ | 38 (6 merged) | No release | 🟢 8.5/10 | Highly active, healthy iteration, rapidly addressing provider bugs. |
| **Hermes Agent**| 50 | 50 (9 merged) | No release | 🟢 8.0/10 | High engagement, aggressively fixing auth friction and security. |
| **PicoClaw** | ~5+ | 15+ (5 merged) | **v0.3.1** | 🟢 9.0/10 | Excellent velocity, shipping releases, but needs to triage stale bugs. |
| **NanoClaw** | ~5+ | 20 (2 merged) | No release | 🟡 7.0/10 | Strong community PRs, but maintainers face a review backlog. |
| **IronClaw** | 34 | 50 (multiple merged)| No release (v0.29 imminent)| 🟢 8.0/10 | High velocity architectural consolidation (Reborn runtime). |
| **LobsterAI** | ~5+ | 20+ (14 merged) | **2026.7.3** | 🟢 9.5/10 | Exceptional cadence, shipping features, and stabilizing rapidly. |
| **CoPaw (QwenPaw)**| 40 (26 closed) | 32 (13 merged) | No release (v2.0 beta) | 🟢 9.0/10 | Outstanding issue resolution and active v2.0 modernization. |
| **ZeroClaw** | 34 (4 closed) | 50 (7 merged) | No release (v0.8.3 imminent)| 🟡 7.5/10 | High feature velocity, but struggling with memory leaks and CI parity. |
| **NullClaw** | 1 | 0 | No release | 🔴 3.0/10 | Stagnant; core integrations failing without maintainer response. |

*(Note: TinyClaw, Moltis, ZeptoClaw excluded due to zero activity).*

### 3. OpenClaw's Position
**Advantages:** OpenClaw remains a **core reference and heavy-hitter** in the ecosystem. Its sheer volume of activity (nearly 500 PR updates, 206 issue updates) indicates massive adoption and a highly invested, technically proficient community. It is heavily utilized in real-time, multi-platform environments (Slack, iOS, Telegram, iMessage). 
**Disadvantages & Bottlenecks:** OpenClaw is currently suffering from its own scale. The ratio of 470 open PRs to only 30 merged PRs suggests a severe maintainer review bottleneck. Furthermore, the ecosystem is reporting high-severity regressions (e.g., tool output poisoning, gateway crashes) that are actively degrading the UX.
**Differentiating Approach:** Unlike competitors that are rapidly releasing minor patches (e.g., LobsterAI, PicoClaw) to fix bugs, OpenClaw is undergoing deep architectural surgery—such as migrating from flat JSONL files to a SQLite backend ([PR #98236](https://github.com/openclaw/openclaw/pull/98236))—to fundamentally solve state-related race conditions at scale.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging simultaneously across the ecosystem:
*   **Memory & Context Amnesia:** A major pain point across the board. *NanoBot* users report aggressive memory consolidation wiping context ([Issue #4044](https://github.com/HKUDS/nanobot/issues/4044)); *CoPaw* users face data loss during context compression ([Issue #5710](https://github.com/agentscope-ai/CoPaw/issues/5710)); *IronClaw* has dead memory code ([Issue #5605](https://github.com/nearai/ironclaw/issue/5605)); and *OpenClaw* is overhauling its entire storage architecture to fix transcript/state races.
*   **MCP (Model Context Protocol) Reliability:** Tool execution via MCP is highly fragile. *NanoBot* and *Hermes Agent* both report P1 gateway crashes when MCP servers return malformed data or drop connections.
*   **Cross-Platform & Windows Stability:** There is a massive demand for Windows parity. *Hermes Agent*, *ZeroClaw*, and *CoPaw* all cite severe bugs related to Windows GBK encoding and sandboxing, while *ZeroClaw* struggles with Unix-only test assumptions breaking Windows CI ([Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)).
*   **Multi-Agent Token & Cost Governance:** As projects roll out multi-agent "Cowork" features (*LobsterAI*, *OpenClaw*, *NanoBot*), token bloat is becoming critical. *NanoClaw* users report a 27k token overhead for local models ([Issue #2917](https://github.com/nanocoai/nanoclaw/issues/2917)), while *OpenClaw* and *ZeroClaw* communities are drafting RFCs for budget caps and per-agent token tracking.

### 5. Differentiation Analysis
*   **Architecture & Tooling:** *IronClaw* and *ZeroClaw* are leaning heavily into advanced runtime substrates (Rust, WASM plugins) to achieve strict capability isolation and SOPs (Standard Operating Procedures). Meanwhile, *LobsterAI* and *CoPaw* are differentiating on UX, moving to Tauri desktop architectures and polished multi-agent UI panels.
*   **Target Audience:** *OpenClaw* and *Hermes Agent* target power users and developers requiring deep system access and multi-channel deployment (Telegram, Slack, Discord). Conversely, *PicoClaw* and *NanoClaw* cater heavily to the self-hosted, local-model community (Ollama, local LLMs, lightweight footprints).
*   **Security Posture:** *IronClaw* and *ZeroClaw* are aggressively implementing enterprise-grade security controls (OIDC, Windows native sandboxing, strict WASM jails), whereas other projects are still treating security as UI-level gating.

### 6. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** *LobsterAI* and *CoPaw* show exceptional health, rapidly merging PRs, closing stale issues, and successfully pushing version releases (v2026.7.3 and v2.0 beta, respectively). *PicoClaw* also demonstrates excellent continuous integration.
*   **Stabilizers (Scaling Pains):** *OpenClaw*, *ZeroClaw*, and *IronClaw* have massive inbound contributions but are currently bogged down by architectural growing pains, CI breakages, and maintainer bottlenecks. They are transitioning their codebases but temporarily sacrificing short-term stability.
*   **Stagnating:** *NullClaw* is experiencing a flat trajectory with a severe lack of maintainer engagement, posing a risk to its user base.
*   **Healthy/Niche:** *NanoBot* and *Hermes Agent* maintain strong, highly technical communities that actively submit complex architectural fixes for provider auth and routing.

### 7. Trend Signals (Value for AI Agent Developers)
1.  **The Rise of Deterministic Workflows over Chat:** The market is shifting away from purely conversational agents toward "Goal Mode" and bounded autonomous tasks. *LobsterAI* (Cowork Goal Mode) and *ZeroClaw* (SOP visual authoring) highlight a trend where users want durable, long-running background agents rather than just chat replies.
2.  **Provider Auth is a Universal Weak Point:** The ecosystem is entirely dependent on fragile provider authentications. *Hermes Agent* highlights Cloudflare blocks and OAuth refresh failures across major providers (Claude, Qwen). Developers must build resilient "provider quarantine" and fallback systems, a feature *OpenClaw* is actively pursuing ([Issue #47910](https://github.com/openclaw/openclaw/issues/47910)).
3.  **Local Models are Breaking the Context Bank:** As users swap premium models for local ones (e.g., Gemma, Llama via MLX), the assumption that "context is cheap" is failing. Agents are forcefully injecting massive tool schemas, resulting in 20k+ token overheads. Developers need to implement dynamic schema loading and tool filtering for local model workflows.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-07-04, based on the provided GitHub data.

### 1. Today's Overview
NanoBot is demonstrating highly active and healthy development with a strong focus on iterative refinement. The community is heavily engaged in stress-testing the agent's long-term memory consolidation ("Dream" system) and multi-agent orchestration. Maintainers and contributors are actively resolving critical provider compatibility bugs (such as Anthropic temperature parameters and default models) and merging usability enhancements for the WebUI and CLI.

### 2. Releases
No new releases were published today. The project remains on its current active development branch, with changes being merged directly into the main branch via PRs.

### 3. Project Progress
Today's development closed **6 Pull Requests**, addressing immediate stability and configuration issues. Key advancements include:
*   **Provider Compatibility Fixed:** Merged [PR #4685](https://github.com/HKUDS/nanobot/pull/4685) to omit the `temperature` parameter for Anthropic's Claude Sonnet 5, and [PR #4687](https://github.com/HKUDS/nanobot/pull/4687) to update the stale default Anthropic model to `claude-sonnet-4-6`.
*   **Plugin & WebUI Architecture:** Closed [PR #4688](https://github.com/HKUDS/nanobot/pull/4688) (WebUI first-run launcher) and polished the new optional plugin controls via [PR #4691](https://github.com/HKUDS/nanobot/pull/4691) and [PR #4396](https://github.com/HKUDS/nanobot/pull/4396).
*   **OAuth & Providers:** Merged initial support for Anthropic OAuth ([PR #4632](https://github.com/HKUDS/nanobot/pull/4632)) and OpenCode Zen provider support ([PR #4686](https://github.com/HKUDS/nanobot/pull/4686)).
*   **Active PR Pipeline:** 32 PRs remain open, focusing on expanding core capabilities like the new Mattermost channel integration ([PR #4459](https://github.com/HKUDS/nanobot/pull/4459)), cron job model presets ([PR #4622](https://github.com/HKUDS/nanobot/pull/4622)), and memory context continuity ([PR #4280](https://github.com/HKUDS/nanobot/pull/4280)).

### 4. Community Hot Topics
The most active discussions center around agent context, memory, and multi-provider support:
1.  **Tool Call Parsing & Provider Flexibility** ([Issue #4061](https://github.com/HKUDS/nanobot/issues/4061)): Users are frustrated that some OpenAI-compatible providers emit tool calls as plain text instead of structured JSON, causing tool dispatch failures.
2.  **Short-Term Memory Loss** ([Issue #4044](https://github.com/HKUDS/nanobot/issues/4044)): Highly discussed issue where the agent snaps out of its conversational thread due to context window pressure and aggressive prompt loading.
3.  **MCP Crash Resilience** ([Issue #4652](https://github.com/HKUDS/nanobot/issues/4652) & [PR #4666](https://github.com/HKUDS/nanobot/pull/4666)): The community is actively discussing how NanoBot crashes hard when MCP tools return malformed data or empty results.

### 5. Bugs & Stability
Several high-severity bugs affecting agent stability were reported today:
*   **[P1] Gateway & Process Crashes on MCP Reconnect** ([Issue #4302](https://github.com/HKUDS/nanobot/issues/4302) & [Issue #4652](https://github.com/HKUDS/nanobot/issues/4652)): The entire NanoBot process crashes if an MCP tool throws an exception. *Fix Status:* Actively being addressed in [PR #4666](https://github.com/HKUDS/nanobot/pull/4666), which wraps MCP errors into structured tool errors.
*   **[P1] Memory Reference Wipe during Consolidation** ([Issue #4307](https://github.com/HKUDS/nanobot/issues/4307)): Post-turn consolidation wipes the agent's own delivery messages, causing it to lose references in immediate user follow-ups.
*   **[P2] Windows Gateway Stop Failure** ([Issue #4511](https://github.com/HKUDS/nanobot/issues/4511)): Using `/restart` or stopping the gateway with the `--background` flag on Windows causes process info desync and tracebacks. *Fix Status:* Addressed in [PR #4690](https://github.com/HKUDS/nanobot/pull/4690).
*   **[P2] Telegram Silent Hangs** ([Issue #3626](https://github.com/HKUDS/nanobot/issues/3626)): Long polling stops receiving updates silently; the bot appears alive but is deaf to user input.

### 6. Feature Requests & Roadmap Signals
User proposals indicate a strong desire for enterprise-ready orchestration and safer agent execution:
*   **Native Agent-to-Agent (A2A) Orchestration** ([Issue #4179](https://github.com/HKUDS/nanobot/issues/4179)): A proposal to allow supervisor/researcher/writer agent teams to collaborate within a shared workspace, moving NanoBot from a personal assistant to a multi-agent framework.
*   **Granular Control Over Subagents** ([Issue #4166](https://github.com/HKUDS/nanobot/issues/4166)): Users want subagents to access MCP servers.
*   **Human-in-the-Loop for Dangerous Commands** ([Issue #3887](https://github.com/HKUDS/nanobot/issues/3887)): Users are requesting an authorization mechanism for commands blocked by the hardcoded safety guard (like `rm -rf`).
*   **Heartbeat Debugging Overrides** ([Issue #4431](https://github.com/HKUDS/nanobot/issues/4431) & [Issue #3437](https://github.com/HKUDS/nanobot/issues/3437)): Requests for model overrides for background heartbeats to save costs, and on-demand heartbeat triggers for debugging. *Implementation already in progress via [PR #4620](https://github.com/HKUDS/nanobot/pull/4620).*

### 7. User Feedback Summary
*   **Pain Points:** Users love NanoBot's lightweight footprint but are currently struggling with context window management. Memory consolidation is proving too aggressive, leading to "amnesia" during long, multi-iteration turns. Additionally, cross-platform stability (specifically Windows and Telegram network drops) needs hardening.
*   **Satisfaction:** There is high enthusiasm for the "Dream" self-improvement system, though users want it to be smarter (e.g., updating existing skills rather than duplicating them, as noted in [Issue #4467](https://github.com/HKUDS/nanobot/issues/4467)). The rapid addition of providers (OpenCode, Anthropic OAuth) is highly appreciated by the community.

### 8. Backlog Watch (Needs Maintainer Attention)
The following important issues remain unanswered or lack assigned PRs:
*   **Dream System Hallucinations & Duplication** ([Issue #4467](https://github.com/HKUDS/nanobot/issues/4467) & [Issue #3973](https://github.com/HKUDS/nanobot/issues/3973)): The Dream system lacks real-time learning inputs and creates duplicate skills. (Note: [PR #4554](https://github.com/HKUDS/nanobot/pull/4554) has been open since June 26 to fix this and needs review).
*   **Multi-User Session Isolation** ([Issue #3744](https://github.com/HKUDS/nanobot/issues/3744): An important architectural question regarding how `USER.md` and `MEMORY.md` are handled when multiple IM users interact with the same agent instance.
*   **Subagent Workflow Interruptions** ([Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)): Cron jobs end prematurely when subagents are spawned, breaking automated workflows.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for the Hermes Agent repository based on the provided GitHub data.

### 1. Today's Overview
The Hermes Agent project is experiencing an exceptionally high level of community engagement and development activity as of July 4, 2026, with 50 issues and 50 pull requests updated in the last 24 hours. The vast majority of these items (47 issues, 41 PRs) remain open, indicating a rapid inbound flow of bug reports, feature ideas, and code contributions. No new official releases were published today; however, the massive volume of open draft PRs—many addressing critical security, stability, and authentication bugs—suggests the team is in a heavy merge/triage phase preparing for a future drop.

### 2. Releases
No new releases were published today.

### 3. Project Progress
While 41 PRs remain open and under review, 9 PRs were merged or closed, advancing several key areas of the project:
*   **Massive Upstream Synchronization:** The largest closed PR was [#57962](https://github.com/NousResearch/hermes-agent/pull/57962), which synced a massive fork with 5,960 upstream commits, resolving 198 conflict hunks across 67 files. 
*   **Security Hardening:** Progress was made on locking down system boundaries. Merged/closed PRs include efforts to block TTS outputs to protected paths ([#57950](https://github.com/NousResearch/hermes-agent/pull/57950)), apply write guards to the desktop filesystem editor ([#57953](https://github.com/NousResearch/hermes-agent/pull/57953)), and require script re-approval for changed shell-hooks ([#57952](https://github.com/NousResearch/hermes-agent/pull/57952)).
*   **Workflow Enhancements:** Progress was made on the Hermes Kanban system, specifically hardening task completion flows to require durable, non-empty evidence references ([#57960](https://github.com/NousResearch/hermes-agent/pull/57960)).

### 4. Community Hot Topics
The most actively discussed items revolve around deployment friction, memory management, and agent onboarding:
*   **Deployment & Config Friction:** Issue [#12188](https://github.com/NousResearch/hermes-agent/issues/12188) (5 comments) highlights a major pain point for Docker users trying to configure models via environment variables without diving into the container console.
*   **Memory Routing Capabilities:** Issue [#31776](https://github.com/NousResearch/hermes-agent/issues/31776) (4 comments) requests exposing multi-bank routing for the Hindsight memory provider. This shows power users are pushing for more complex, context-aware memory isolation per workspace or platform.
*   **Seamless Onboarding:** Issue [#524](https://github.com/NousResearch/hermes-agent/issues/524) (4 comments) proposes an auto-detection and import system for settings from rival tools (Claude Code, Codex, Cursor, etc.). This feature request signals a strong desire to lower the barrier to entry for users migrating from competing AI coding agents.

### 5. Bugs & Stability
Several critical bugs were reported today, highlighting ongoing stability challenges with provider authentication and desktop UI performance:
*   **[P0] Silent Cost Spikes:** Issue [#57845](https://github.com/NousResearch/hermes-agent/issues/57845) reveals a critical bug where envelope-layout cache breakpoints are skipped during tool loops, effectively doubling input costs on OpenRouter and Claude.
*   **[P1] Authentication Breakages:** A cluster of severe auth bugs were reported. Anthropic Max OAuth is failing because Anthropic now blocks the `claude-cli/` User-Agent ([#48534](https://github.com/NousResearch/hermes-agent/issues/48534)). Additionally, users report Qwen OAuth refresh failures ([#7746](https://github.com/NousResearch/hermes-agent/issues/7746)) and Cloudflare 403s blocking Anthropic PKCE refreshes ([#6347](https://github.com/NousResearch/hermes-agent/issues/6347)). *Fixes are actively being drafted, such as PR [#57935](https://github.com/NousResearch/hermes-agent/pull/57935) for Anthropic CLI fallback.*
*   **[P2] Desktop Performance Degradation:** Issue [#57903](https://github.com/NousResearch/hermes-agent/issues/57903) identifies that async LLM calls are blocking the desktop WebSocket loop via busy-polling. A mitigating fix is currently open in PR [#57933](https://github.com/NousResearch/hermes-agent/pull/57933), which shortens the poll window from 300ms to 50ms.
*   **[P2] Gateway Crashes:** A recent `hermes update` broke Telegram/WhatsApp adapters, causing gateway startup warnings ([#57909](https://github.com/NousResearch/hermes-agent/issues/57909)). Furthermore, headless MCP OAuth is blocking gateway startups with stale tokens ([#57836](https://github.com/NousResearch/hermes-agent/issues/57836)).

### 6. Feature Requests & Roadmap Signals
Key roadmap signals from today's feature requests point toward better event-driven architecture and localized Windows compatibility:
*   **Event Substrate System:** Issue [#49190](https://github.com/NousResearch/hermes-agent/issues/49190) requests generalizing Kanban notifications into a broader event substrate with an any-surface subscriber registry. This architectural change could heavily decouple Hermes' internal messaging routing in future versions.
*   **Windows OS Compatibility:** Multiple issues, such as Chinese Windows GBK encoding crashes during subprocess execution ([#53428](https://github.com/NousResearch/hermes-agent/issues/53428)) and `computer_use` ignoring Windows driver outputs ([#57905](https://github.com/NousResearch/hermes-agent/issues/57905)), indicate a strong community push to stabilize Hermes as a fully cross-platform desktop application. *A fix for the latter is already up as PR [#57961](https://github.com/NousResearch/hermes-agent/pull/57961).*

### 7. User Feedback Summary
Users are heavily utilizing Hermes in complex, multi-tool environments, but they are encountering friction with authentication and platform integrations. There is clear dissatisfaction with how credential caching and provider updates are handled, as seen in issue [#57569](https://github.com/NousResearch/hermes-agent/issues/57569) where old `auth.json` credentials cause double requests. Users report frustration when switching between remote gateways and desktop apps, noting issues like sessions landing in wrong project directories ([#57911](https://github.com/NousResearch/hermes-agent/issues/57911)) and media attachments being silently dropped on Telegram ([#57928](https://github.com/NousResearch/hermes-agent/issues/57928)). However, the rapid community response—users actively submitting detailed PRs to fix Gemini streaming bugs ([#57941](https://github.com/NousResearch/hermes-agent/pull/57941)) and plugin crashes ([#57959](https://github.com/NousResearch/hermes-agent/pull/57959))—demonstrates a highly invested, technically proficient user base.

### 8. Backlog Watch
Maintainers should direct attention to several long-standing items that have lingered without resolution:
*   **Provider Auth Reliability:** The Cloudflare 403 block on Anthropic OAuth refresh ([#6347](https://github.com/NousResearch/hermes-agent/issues/6347)) and Qwen OAuth JSON parsing failure ([#7746](https://github.com/NousResearch/hermes-agent/issues/7746)) have been open since early April and represent significant blockers for long-term unattended deployments.
*   **Memory Tool Reliability:** Issue [#47119](https://github.com/NousResearch/hermes-agent/issues/47119) reports that memory provider tools (Mnemosyne) sometimes fail to inject into new sessions. Given memory is a core feature of AI agents, this intermittent failure needs prioritization.
*   **Systemd Diagnostic False Positives:** Issue [#36755](https://github.com/NousResearch/hermes-agent/issues/36755) has been generating permanent startup warnings for system-level systemd deployments since June 1st and requires a triage on diagnostic strictness.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the provided GitHub data.

# PicoClaw Project Digest
**Date:** 2026-07-04
**Data Source:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

### 1. Today's Overview
PicoClaw exhibits highly active and healthy development, driven largely by its community of contributors. In the last 24 hours, the project merged 5 Pull Requests and merged a new version release, indicating rapid continuous integration. Development is heavily focused on expanding messaging channel integrations (SimpleX, DeltaChat, Discord) and hardening network reliability across existing platforms like WhatsApp and Matrix. While code iterations are moving swiftly, issue resolution for end-users has slightly lagged, with two stale bug reports remaining open. 

### 2. Releases
*   **[v0.3.1](https://github.com/sipeed/picoclaw/releases/tag/v0.3.1)**
    *   **Overview:** A minor patch release that rolls up several merged features and provider integrations.
    *   **Key Additions:** Includes integration for the NearAI provider ([PR #2917](https://github.com/sipeed/picoclaw/pull/2917)), store lock type assertions for Codex ([PR #3053](https://github.com/sipeed/picoclaw/pull/3053)), and other foundational updates.

### 3. Project Progress
Significant architectural and integration milestones were achieved in today's merged PRs:
*   **Agent Collaboration:** Merged foundational architecture for internal agent collaboration via a first-class bus, adding durable inter-agent communication and isolated sessions ([PR #2937](https://github.com/sipeed/picoclaw/pull/2937)).
*   **Token Tracking:** Implemented per-turn LLM token usage emission on the Pico channel, allowing downstream consumers to track input/output costs accurately ([PR #3156](https://github.com/sipeed/picoclaw/pull/3156)).
*   **Message Integrity:** Fixed duplicate message deliveries on async sub-agent completion by clearing the `ForUser` field in sub-turn tool results ([PR #3142](https://github.com/sipeed/picoclaw/pull/3142)).
*   **Code Cleanups:** Merged the initial DeltaChat gateway ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)) and explicitly ignored non-meaningful response body close errors in web search tools ([PR #3128](https://github.com/sipeed/picoclaw/pull/3128)).

### 4. Community Hot Topics
*   **[PR #3224: fix(agent): clear routed agent session](https://github.com/sipeed/picoclaw/pull/3224)** (Superseded [#3223](https://github.com/sipeed/picoclaw/pull/3223))
    *   *Analysis:* An active contribution addressing state management in multi-agent routing. When messages are routed to non-default agents, the `/clear` command was wiping the wrong session. This highlights the community's demand for robust, isolated agent memory management.
*   **[PR #3222: refactor(deltachat): cleanup implementation](https://github.com/sipeed/picoclaw/pull/3222)**
    *   *Analysis:* A massive cleanup dropping 320 lines of legacy code. The move to enforce secrets in `jsonrpc` and drop password-based configs shows a maturing approach to security and dependency management.

### 5. Bugs & Stability
Today's open issues and PRs reveal a strong thematic focus on network connection drops and configuration migrations. 
1.  **[BUG] Config Migration Blocking Upgrades ([PR #3218](https://github.com/sipeed/picoclaw/pull/3218))**
    *   *Severity:* High
    *   *Details:* A false 'unknown field(s): build_info' error is blocking v2 to v3 configuration migrations for users on v0.2.5+. Fix PR is currently open.
2.  **[BUG] WhatsApp Websocket Timeout ([Issue #3178](https://github.com/sipeed/picoclaw/issues/3178) & [PR #3179](https://github.com/sipeed/picoclaw/pull/3179) / [PR #3220](https://github.com/sipeed/picoclaw/pull/3220))**
    *   *Severity:* High
    *   *Details:* Silent websocket disconnects after 2-3 days causing the bot to go offline. Multiple fix PRs are open proposing asynchronous dispatching and exponential backoff reconnect logic.
3.  **[BUG] Matrix Sync Loop Mortality ([PR #3219](https://github.com/sipeed/picoclaw/pull/3219))**
    *   *Severity:* Medium
    *   *Details:* Network disruptions permanently kill the Matrix sync goroutine without triggering system restarts. A fix PR adding an exponential backoff retry loop is open.
4.  **[BUG] Android Service Launch Failure ([Issue #3182](https://github.com/sipeed/picoclaw/issues/3182))**
    *   *Severity:* Medium
    *   *Details:* End-users are unable to launch the service or change paths in the Android build. Remains open and stale.

### 6. Feature Requests & Roadmap Signals
Based on the active PRs, the next version of PicoClaw will likely double down on **cross-platform resilience and enterprise access controls**.
*   **Granular Access Control:** [PR #3217](https://github.com/sipeed/picoclaw/pull/3217) introduces role-based access control (RBAC) for Discord via `allow_roles` without requiring privileged intents.
*   **Expanded Channel Support:** [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) adds SimpleX as a channel type, and DeltaChat refactors are well underway.
*   **LLM Resilience:** [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) introduces a configurable default fallback chain for models in the Web UI, ensuring agent continuity if a provider (like DeepSeek or OpenAI) goes down.
*   **Tool Calling Recovery:** [PR #3165](https://github.com/sipeed/picoclaw/pull/3165) adds parsing recovery for Volcengine Doubao Seed XML tool calls, preventing broken outputs for specific regional models.

### 7. User Feedback Summary
*   **Pain Points:** Users deploying PicoClaw in Docker or on mobile (Android) are experiencing silent failures, particularly around WebSockets (WhatsApp) and local file system permissions. There is clear frustration with long-running containers silently losing connection to messaging bridges without auto-recovery.
*   **Use Cases:** PicoClaw is heavily being used as a multi-channel, multi-model personal assistant. Users want to route queries to different models (DeepSeek, OpenAI) and different agent personas, requiring reliable fallback mechanisms and accurate session clearing (`/clear`).
*   **Satisfaction:** While contributors are enthusiastically patching bugs and submitting features (indicating high engagement), end-users on older mobile/config setups are hitting blocking friction points.

### 8. Backlog Watch
*   **[Issue #3182](https://github.com/sipeed/picoclaw/issues/3182) & [Issue #3178](https://github.com/sipeed/picoclaw/issues/3178):** Both major user-facing bugs were created on June 26th and are marked `[stale]`. They need maintainer triage to validate the corresponding open fix PRs (like [#3220](https://github.com/sipeed/picoclaw/pull/3220)).
*   **[PR #3221](https://github.com/sipeed/picoclaw/pull/3221):** Reverting a Windows path sandbox test due to an import error. Needs maintainer attention to ensure CI/CD pipelines are unblocked for Windows environments.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw based on the provided GitHub data.

# NanoClaw Project Digest
**Date:** 2026-07-04

### 1. Today's Overview
NanoClaw is currently experiencing highly active development cycles, heavily driven by community contributions. Over the past 24 hours, the project saw a massive influx of 20 updated PRs, though only 2 were merged/closed, indicating a potential review bottleneck for the maintainers. The community is heavily focused on expanding messaging channel integrations, refining MCP (Model Context Protocol) interactions, and improving container stability. However, a critical issue regarding token bloat when utilizing local models as the primary orchestrator has emerged, highlighting growing pains as users push the boundaries of self-hosted AI assistants. Overall project health appears robust, but requires aggressive triage to manage the large backlog of open PRs.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Two pull requests were successfully merged/closed today, advancing specific integration and proxy capabilities:
*   **[PR #2330](https://github.com/nanocoai/nanoclaw/pull/2330) [CLOSED]**: Fixed an issue where Axios MCP servers failed to work through OneCLI's proxy. This resolves auth injection silent failures for axios-based integrations.
*   **[PR #2765](https://github.com/nanocoai/nanoclaw/pull/2765) [CLOSED]**: Added a `.format-lint-off` configuration, likely streamlining the developer contribution experience.

### 4. Community Hot Topics
The primary driver of community discussion today is **[Issue #2917](https://github.com/nanocoai/nanoclaw/issues/2917)**. 
*   **Topic:** *Local model as primary agents pay full MCP tool-schema token cost regardless of backend*.
*   **Analysis:** A user reported a massive ~27k token overhead when swapping Claude out for a local model (Gemma4:31B via oMLX) as the primary agent. This occurs because the system still sends the full MCP tool schema set on every request. This indicates a strong user need to use NanoClaw as a fully localized, cost-efficient AI assistant, but current architectural constraints treat local models with the same heavy context requirements as premium cloud models.

### 5. Bugs & Stability
Several bug fix PRs were updated today, addressing stability across container execution, message routing, and memory management. Ranked by severity:

1.  **High: DB Connection Leak on Container Restart** 
    *   **[PR #2920](https://github.com/nanocoai/nanoclaw/pull/2920):** `openInboundDb()` in `container-restart.ts` was never closed, leaking a file descriptor on every restart check. Wrapped in a `try/finally` block. This also includes stale docs cleanup.
2.  **Medium: Inbound Signal DMs Silently Dropped** 
    *   **[PR #2694](https://github.com/nanocoai/nanoclaw/pull/2694):** Missing `isMention`/`isGroup` hints caused the router to fail auto-creating a `messaging_group`, silently dropping inbound Signal direct messages.
3.  **Medium: Signal Inbound Image Attachments Unreadable** 
    *   **[PR #2695](https://github.com/nanocoai/nanoclaw/pull/2695):** Signal adapter surfaced host attachment paths instead of base64, meaning the containerized agent couldn't actually read images sent by users.
4.  **Medium: Global Memory & Workspace Deletion Loop** 
    *   **[PR #2823](https://github.com/nanocoai/nanoclaw/pull/2823) & [PR #2822](https://github.com/nanocoai/nanoclaw/pull/2822):** The host system continuously deletes `groups/global/CLAUDE.md` on startup, causing instability. Maintainer `CutSnake01` submitted PRs to drop the stale global memory instruction and remove the dead `/workspace/global` mount.

### 6. Feature Requests & Roadmap Signals
Recent PRs signal a strong roadmap trajectory toward wider messaging platform compatibility and diverse utility tools:
*   **New Channel Integrations:** **[PR #2918](https://github.com/nanocoai/nanoclaw/pull/2918)** introduces a native LINE Official Account adapter and `/add-line` skill, showing an expansion into enterprise/Asian messaging markets.
*   **MCP Transports:** **[PR #2208](https://github.com/nanocoai/nanoclaw/pull/2208)** adds support for HTTP and SSE MCP server transports, moving beyond standard stdio.
*   **Productivity Skills:** Users are actively building PIM tools, seen in **[PR #2530](https://github.com/nanocoai/nanoclaw/pull/2530)** (CalDAV integration) and **[PR #2693](https://github.com/nanocoai/nanoclaw/pull/2693)** (Google Contacts integration). 
*   *Prediction:* Based on current momentum, the next minor version will likely focus heavily on expanded messaging channel support and MCP transport flexibility.

### 7. User Feedback Summary
Users are deeply engaged in self-hosting NanoClaw using containerized environments (Podman/Docker) and local models. A major pain point is the friction between container isolation and host resources—evidenced by users having to manually fix rootless Podman user mapping (**[PR #2230](https://github.com/nanocoai/nanoclaw/pull/2230)**) and fix unreadable attachment paths. Furthermore, users desire granular control over agent skills, with **[PR #2921](https://github.com/nanocoai/nanoclaw/pull/2921)** highlighting frustration that *all* skills were being forcefully inlined into the system prompt rather than gated by the specific group container configuration. 

### 8. Backlog Watch
The maintainer team needs to address a significant queue of long-open PRs (some dating back to early May 2026) to prevent contributor fatigue. Key items requiring maintainer attention:
*   **[PR #2184](https://github.com/nanocoai/nanoclaw/pull/2184) (Opened May 2):** Important fix preventing raw errors from being delivered to users on stale Claude Code sessions.
*   **[PR #2348](https://github.com/nanocoai/nanoclaw/pull/2348) (Opened May 8):** WhatsApp single-timer reconnect and clean teardown.
*   **[PR #2531](https://github.com/nanocoai/nanoclaw/pull/2531) (Opened May 18):** Fix suppressing duplicate text when `send_message` fires mid-turn.
*   **[Issue #2917](https://github.com/nanocoai/nanoclaw/issues/2917):** The critical local model token overhead issue requires architectural discussion, as it severely hampers local-only AI assistant use cases.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-07-04, the NullClaw project is experiencing a period of low development and maintenance activity. Over the past 24 hours, there were zero pull requests merged, no new releases, and no newly closed issues. The repository shows a flat development trajectory today, though community members remain actively engaged in troubleshooting existing deployment edge cases. Project health appears stable but stagnant, with focus potentially needed on resolving lingering bugs to maintain user confidence. 

### 2. Releases
*No new releases or versions were published in the last 24 hours.*

### 3. Project Progress
*No new progress was made today in terms of code merging or issue resolution. There were 0 open, merged, or closed Pull Requests.*

### 4. Community Hot Topics
The most active community discussion revolves around backend integration stability:
*   **[Issue #972](https://github.com/nullclaw/nullclaw/issues/972) - [bug] telegram channel stop respond after some idle time** (Created: 2026-06-30 | Updated: 2026-07-03 | Comments: 1)
    *   **Analysis:** The user community is heavily utilizing NullClaw for long-running messaging integrations (specifically via Telegram). The underlying need is for "deploy and forget" reliability. Users expect the AI agent to maintain persistent connections without requiring manual restarts or babysitting, which is critical for production environments hosted on cloud instances like AWS EC2.

### 5. Bugs & Stability
Based on recent activity, there is one notable stability issue affecting users:
1.  **[High Severity] Long-running connection drops:** [Issue #972](https://github.com/nullclaw/nullclaw/issues/972) reports that the Telegram channel stops responding after remaining idle overnight. 
    *   *Details:* The user notes a critical discrepancy where the frontend (Telegram) becomes unresponsive, but the NullClaw backend continues to process direct inputs flawlessly (verified by running `nullclaw agent -m "ping"` directly on the EC2 instance). 
    *   *Status:* No fix PRs have been submitted yet. This points to a likely timeout, websocket drop, or session-expiry issue between the Telegram API bridge and the core NullClaw runtime, rather than a core AI logic failure.

### 6. Feature Requests & Roadmap Signals
*No explicit feature requests were extracted from today's data stream. However, implicit roadmap signals suggest that the next version or upcoming patches should focus on **connection robustness** (auto-reconnect capabilities for messaging platforms) and **advanced memory management** (as seen by the backend logs highlighting "memory plan resolved: backend=hybrid retrieval=keyword...").*

### 7. User Feedback Summary
*   **Pain Points:** A primary pain point is integration fragility. Users running NullClaw on cloud VMs (like AWS EC2) are experiencing dropped integrations with third-party messaging platforms during periods of inactivity.
*   **Use Cases:** Users are deploying NullClaw as persistent, personal AI assistants accessible via Telegram, hosted on Linux cloud environments.
*   **Satisfaction/Dissatisfaction:** While users are impressed with the core backend logic and memory resolution (which remains stable during frontend disconnects), there is mounting frustration regarding the reliability of the messaging gateway interfaces for 24/7 uptime. 

### 8. Backlog Watch
*   **[Issue #972](https://github.com/nullclaw/nullclaw/issues/972)** requires maintainer attention. Open since 2026-06-30 and last updated yesterday, the issue currently has no linked PRs or official maintainer responses. Because this bug effectively breaks the primary user interface (Telegram) for daily users, it should be prioritized to prevent ecosystem stagnation.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project digest for IronClaw on 2026-07-04.

### 1. Today's Overview
IronClaw is exhibiting extremely high development velocity with a strong focus on its "Reborn" agent runtime stack, as evidenced by 50 updated pull requests and 34 active issues in the last 24 hours. The project is currently in a major architectural consolidation phase, having just successfully removed the legacy "engine v2" to fully commit to the Reborn substrate. However, this aggressive cutover has introduced temporary CI instability and surfaced several edge-case bugs, which core developers are actively triaging. The overall project health is robust, showing a highly engaged core team systematically addressing technical debt, capability safety, and integration stability. 

### 2. Releases
*Omitted due to no new official releases in the last 24 hours. However, [PR #5598](https://github.com/nearai/ironclaw/pull/5598) indicates a major version bump is imminent, proposing a release that includes breaking API changes for `ironclaw_common` and `ironclaw_skills`, alongside the flagship `ironclaw 0.29.1` update.*

### 3. Project Progress
Significant architectural milestones were achieved today, transitioning the codebase fully into its next-generation architecture:
*   **Legacy Removal:** [PR #5545](https://github.com/nearai/ironclaw/pull/5545) successfully merged, entirely deleting the old `ironclaw_engine` (engine v2) and its associated dead call sites.
*   **Identity & Security Hardening:** A massive refactoring effort landed for the identity layer ([PR #5619](https://github.com/nearai/ironclaw/pull/5619)), cleaning up dead types and hardening error paths.
*   **Testing & QA Infrastructure:** Core contributors merged multiple waves of integration tests to back the new runtime, notably [PR #5584](https://github.com/nearai/ironclaw/pull/5584) (multi-user isolation and budget seams) and [PR #5607](https://github.com/nearai/ironclaw/pull/5607) (stabilizing live canary assertions for automated QA).

### 4. Community Hot Topics
*   **Reborn Integration Test Suite ([Issue #3067](https://github.com/nearai/ironclaw/issue/3067))**: With 33 comments, this is the most actively discussed item. The high engagement underscores the critical need to prove the Reborn substrate works reliably through public entrypoints rather than just localized unit tests.
*   **Host Runtime Composition ([Issue #3087](https://github.com/nearai/ironclaw/issue/3087))**: A highly discussed (7 comments) and recently closed issue focusing on how `CapabilityHost` and trust-aware dispatchers are wired together. This highlights the community's focus on building a safe, permission-driven AI agent environment.
*   **Agent Failure Taxonomy ([Issue #5595](https://github.com/nearai/ironclaw/issue/5595))**: The daily automated benchmark failure report shows active, data-driven development tracking 66 non-pass scenarios, primarily focused on model-quality shortfalls rather than infrastructure crashes.

### 5. Bugs & Stability
Today's bug reports heavily feature CI instability and unhandled edge cases in the Reborn agent loop, ranked by severity:
*   **[HIGH] Identity Principal Splitting ([Issue #5614](https://github.com/nearai/ironclaw/issue/5614))**: A critical defect where cross-process divergent-email logins can split a user's identity due to a process-local lock. 
*   **[HIGH] CI Breakage on Main ([Issue #5603](https://github.com/nearai/ironclaw/issue/5603) & [Issue #5590](https://github.com/nearai/ironclaw/issue/5590))**: Following the engine v2 removal, the Docker build is failing due to missing prompt `COPY` commands, and Clippy is failing on Windows. (Fixes are being actively pursued in [PR #5591](https://github.com/nearai/ironclaw/pull/5591) and [PR #5601](https://github.com/nearai/ironclaw/pull/5601)).
*   **[MEDIUM] Slack Integration Failures ([Issue #5602](https://github.com/nearai/ironclaw/issue/5602) & [Issue #5522](https://github.com/nearai/ironclaw/issue/5522))**: Users report the Slack connection loop is stalling, and the agent fails entirely when routines attempt to read Slack DMs due to missing capability mappings.
*   **[MEDIUM] Dead Memory Code ([Issue #5605](https://github.com/nearai/ironclaw/issue/5605))**: The `ProductionMemoryPromptContextService` is fully implemented but unwired in production, meaning memory prompt-context injection is currently inactive.

### 6. Feature Requests & Roadmap Signals
The roadmap is currently dominated by refining the Reborn runtime's operational semantics:
*   **Resilient Agent Loop**: [PR #4841](https://github.com/nearai/ironclaw/pull/4841) (open) introduces mechanisms to eliminate terminal "run-borking" failures by providing recovery paths and visible explanations for agent errors.
*   **Advanced Cancellation Policies**: [Issue #3238](https://github.com/nearai/ironclaw/issue/3238) requests full end-to-end cancellation semantics, defining exactly what gets canceled when a user aborts an agent run.
*   **Seamless Slack OAuth**: [PR #5604](https://github.com/nearai/ironclaw/pull/5604) is actively removing the clunky Slack pairing-code flow in favor of a modern, per-user OAuth-backed tool identity setup.

### 7. User Feedback Summary
Real-world users testing the QA environments are experiencing friction with agent capabilities and routine stability. Dissatisfaction is concentrated around brittle integrations—such as web searches failing due to upstream IP throttling ([Issue #5571](https://github.com/nearai/ironclaw/issue/5571)) and the agent hallucinating disabled capabilities, which causes the entire run to crash instead of gracefully informing the model ([Issue #5583](https://github.com/nearai/ironclaw/issue/5583)). Furthermore, users are frustrated by the inability to manage or delete old routines ([Issue #5510](https://github.com/nearai/ironclaw/issue/5510)), expressing a clear need for better lifecycle management tools as they test long-running agent deployments.

### 8. Backlog Watch
*   **Vertical-Slice Integration Tests ([Issue #3067](https://github.com/nearai/ironclaw/issue/3067))**: Open since April 29, this high-priority (P0) test suite is still being actively iterated on and requires continued maintainer attention to land.
*   **Credential Injection Preservation ([Issue #3068](https://github.com/nearai/ironclaw/issue/3068))**: Though closed, this was flagged as a hard blocker for the Reborn cutover. Its status should be monitored to ensure feature-parity with V1's HTTP credential brokering was actually achieved without regressions.
*   **Dead WASM Credential Logic ([Issue #5512](https://github.com/nearai/ironclaw/issue/5512))**: A recently opened, unanswered issue showing that the WASM host credential provider re-derives injection eligibility via a manifest instead of the authorizer. This bypasses security obligations and needs architectural review.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the recent GitHub activity.

### 1. Today's Overview
LobsterAI is currently experiencing a high-velocity development phase, specifically demonstrating intense focus on refining the newly introduced **"Cowork"** multi-agent feature. The project is highly active, merging 14 pull requests in the last 24 hours in preparation for the `2026.7.3` release. Engineers are heavily focused on UI/UX polish, performance optimizations for large sessions, and fixing race conditions within the OpenClaw integration. The closing of old, stale community issues indicates a routine repository maintenance cycle.

### 2. Releases
*   **LobsterAI 2026.7.3** ([Release Notes](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.3))
    *   **Highlights:** Introduced service deployment options, added a new "Goal Mode" for multi-agent cowork sessions, and implemented a subagent artifact panel.
    *   **Impact:** Pushed via release branch merges ([PR #2270](https://github.com/netease-youdao/LobsterAI/pull/2270)). No immediate breaking changes noted, though underlying OpenClaw RPC integrations required significant prompt architecture changes.

### 3. Project Progress
Significant architectural and UI advancements were merged today, notably around the "Cowork" feature and OpenClaw gateway integration:
*   **Cowork & OpenClaw Integration:** Advanced the system prompt architecture to separate task `cwd` from the agent workspace ([PR #2260](https://github.com/netease-youdao/LobsterAI/pull/2260)). Synchronized channel session model overrides directly from the OpenClaw gateway ([PR #2267](https://github.com/netease-youdao/LobsterAI/pull/2267)).
*   **UI/UX Refinements:** Added tooltips to the create agent button and improved provider authorization flows ([PR #2269](https://github.com/netease-youdao/LobsterAI/pull/2269)). Optimized global font sizes and settings UI ([PR #2263](https://github.com/netease-youdao/LobsterAI/pull/2263)).
*   **Deployment Features:** Refined the service deployment share modal, fixing layout compressions during scrolling ([PR #2265](https://github.com/netease-youdao/LobsterAI/pull/2265)).

### 4. Community Hot Topics
*   **[Issue #1422](https://github.com/netease-youdao/LobsterAI/issues/1422) - UI truncation for long MCP service names (Closed/Stale)**
    *   *Analysis:* An older UI bug where custom MCP service names overflow the delete modal dialog. While closed today as part of a stale-issue sweep, it highlights that users are actively utilizing custom MCP (Model Context Protocol) integrations with complex naming conventions, indicating a need for better UI responsive handling in the MCP settings page.

### 5. Bugs & Stability
The core engineering team aggressively targeted stability and performance bugs today:
1.  **High Severity - Session State Hangs:** Fixed an issue where OpenClaw chat errors left the UI stuck in a "context整理/压缩" (compaction) state ([PR #2266](https://github.com/netease-youdao/LobsterAI/pull/2266)).
2.  **High Severity - Session File Lock Collisions:** Fixed race conditions by delaying plan recovery until an aborted OpenClaw run lifecycle fully settles ([PR #2247](https://github.com/netease-youdao/LobsterAI/pull/2247)).
3.  **Medium Severity - macOS Black Screen:** Resolved a crash where closing the app in native fullscreen on macOS caused a black screen ([PR #2246](https://github.com/netease-youdao/LobsterAI/pull/2246)).
4.  **Medium Severity - Large Session Performance:** Reduced collapsed tool-result formatting limits from 64K to 16K and memoized displays to lower render work in massive, tool-heavy sessions ([PR #2264](https://github.com/netease-youdao/LobsterAI/pull/2264)).
5.  **Low Severity - UI Glitches:** Fixed subagent panel timestamp formatting ([PR #2261](https://github.com/netease-youdao/LobsterAI/pull/2261)) and restored compact prompt menu widths ([PR #2268](https://github.com/netease-youdao/LobsterAI/pull/2268)).

### 6. Feature Requests & Roadmap Signals
Based on recent commits, the clear product trajectory is deepening **Agentic Workflows (Cowork)** and **Enterprise IM integrations**.
*   **Goal Mode for Cowork:** The addition of Goal Mode signifies a shift from conversational AI to autonomous task-execution agents.
*   **Diagnostics & Traceability:** The addition of a raw session diagnostics ZIP export ([PR #2264](https://github.com/netease-youdao/LobsterAI/pull/2264)) signals better support for enterprise debugging and power-user troubleshooting.
*   **Prediction:** The next versions will likely focus on expanding the "Goal Mode" capabilities, adding more autonomous multi-agent routing, and refining the recently deployed IM bot multi-instance features.

### 7. User Feedback Summary
*   **Pain Points:** Users are running highly complex, tool-heavy sessions, leading to UI lag. Additionally, enterprise users utilizing multiple IM instances (DingTalk, Feishu, QQ) are experiencing bot conflicts and duplication.
*   **Use Cases:** Users are relying heavily on LobsterAI for persistent agent workspaces, custom MCP servers, and deploying agents directly to IM channels.
*   **Satisfaction:** While the pace of feature delivery is high, the volume of bug fixes immediately following the Cowork release suggests users are stress-testing these multi-agent features and hitting edge cases quickly.

### 8. Backlog Watch
Two valuable, community-submitted PRs have gone stale (open since early April) and require maintainer review or migration assistance:
*   **[PR #1353](https://github.com/netease-youdao/LobsterAI/pull/1353): Agent Skill Selector "Select All" & "Clear"** - A great UX improvement for agent configuration that would prevent tedious manual deselection. *Needs merge or conflict resolution.*
*   **[PR #1464](https://github.com/netease-youdao/LobsterAI/pull/1464): IM Instance Duplicate Validation** - A critical data-integrity fix for DingTalk, Feishu, and QQ that prevents users from accidentally creating duplicate bot instances (which causes message processing conflicts). *Highly recommended for prioritization.*

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

# CoPaw (QwenPaw) Project Digest
**Date:** 2026-07-04

## 1. Today's Overview
The CoPaw project is exhibiting exceptionally high development velocity and robust community engagement over the last 24 hours, processing 40 issues (26 closed) and 32 PRs (13 merged/closed). The primary engineering focus is clearly on stabilizing the upcoming **v2.0 beta** (Runtime 2.0), with aggressive patching of context management, tool execution, and API routing. The project also saw significant architectural contributions from the community, including native Windows sandboxing and the integration of the Azure Bot Framework. Overall project health is strong, transitioning successfully from legacy desktop packaging to a modern Tauri-based architecture while maintaining a rapid bug-fix cadence.

## 2. Releases
*No new official releases were published in the last 24 hours. The development focus remains on iterating the v2.0.0 beta branch.*

## 3. Project Progress
Significant architectural and stability advancements were merged or closed today:
*   **Desktop Architecture Shift:** [PR #5734](https://github.com/agentscope-ai/QwenPaw/pull/5734) officially switches the desktop release pipeline to build **Tauri** packages exclusively, deprecating the legacy conda-pack approach.
*   **Security & Sandboxing:** [PR #5525](https://github.com/agentscope-ai/QwenPaw/pull/5525) implemented the Windows native sandbox, a critical feature for local agent safety.
*   **New Channel Support:** [PR #5762](https://github.com/agentscope-ai/QwenPaw/pull/5762) added the `azure_bot` channel, enabling unified webhook support for Teams, Slack, Web Chat, Telegram, and more.
*   **Automated CI:** [PR #5736](https://github.com/agentscope-ai/QwenPaw/pull/5736) introduced an AI code review bot (QwenPaw review bot) to automate GitHub PR quality checks.
*   **API Integrations:** [PR #5735](https://github.com/agentscope-ai/QwenPaw/pull/5735) migrated GitHub Models to the new `models.github.ai/inference` endpoint and added fine-grained PAT support. [PR #1780](https://github.com/agentscope-ai/QwenPaw/pull/1780) fixed compatibility for BGE-M3 embeddings.

## 4. Community Hot Topics
The most active discussions center around context preservation, security, and architectural bottlenecks:
*   **Context Amnesia in v2.0 Beta:** [Issue #5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) (4 comments) reports a severe bug where `scroll` context compression drops the current active task, causing the agent to reply with old messages. 
*   **Security & Secret Masking:** [Issue #5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) (6 comments) contains a deep-dive analysis by `wjt0321` into QwenPaw's secret handling, requesting better environment variable fallbacks and log desensitization to prevent API key leakage.
*   **Architecture Limitations:** [Issue #5767](https://github.com/agentscope-ai/QwenPaw/issues/5767) (2 comments) highlights that the Console session layer is bottlenecked by the Chat SDK's "single session pull" model, which blocks multi-agent/multi-workspace evolution.
*   **Agent Capabilities vs. Competitors:** [Issue #5711](https://github.com/agentscope-ai/QwenPaw/issues/5711) (3 comments) provides a comprehensive competitive analysis, pointing out QwenPaw's weaknesses in tool-calling efficiency, memory mechanisms, and rule execution compared to industry rivals.

## 5. Bugs & Stability
Stability issues for the v2.0 beta and existing v1.1.12 releases were heavily reported:
*   **[Critical] Endless Tool Execution Loop:** [Issue #5717](https://github.com/agentscope-ai/QwenPaw/issues/5717) / [PR #5761](https://github.com/agentscope-ai/QwenPaw/pull/5761) - Truncated `tool_call.input` in Runtime 2.0 causes the agent to endlessly repeat the same tool execution. *Fix PR is currently open.*
*   **[Critical] Double API Prefix Routing:** [Issue #5769](https://github.com/agentscope-ai/QwenPaw/issues/5769) - v2.0.0b2 console frontend continuously throws 404 errors due to a double `/api/api/` path concatenation.
*   **[High] Context Compression Data Loss:** [Issue #5710](https://github.com/agentscope-ai/QwenPaw/issues/5710) - The `LightContextManager` lacks protection anchors, deleting crucial group chat/system messages during compression. *Addressed partially by [PR #5765](https://github.com/agentscope-ai/QwenPaw/pull/5765).*
*   **[High] Unprompted Task Termination:** [Issue #5763](https://github.com/agentscope-ai/QwenPaw/issues/5763) & [Issue #5616](https://github.com/agentscope-ai/QwenPaw/issues/5616) - Users report heavy automated tasks frequently freezing or terminating without manual intervention.
*   **[Medium] Malformed Config Breaks Agent API:** [Issue #5755](https://github.com/agentscope-ai/QwenPaw/pull/5755) - A single misconfigured MCP client causes the entire Agent Profile Pydantic validation to fail, bringing down the API endpoint. *Fix merged.*

## 6. Feature Requests & Roadmap Signals
Based on recent issues and PRs, the immediate roadmap signals point heavily toward enterprise readiness and v2 plugin ecosystem overhauls:
*   **Non-Intrusive Plugin Architecture:** Users desperately want non-intrusive extensions for Memory, Hooks, and Channels without modifying core source code ([Issue #4642](https://github.com/agentscope-ai/QwenPaw/issues/4642)). [PR #5752](https://github.com/agentscope-ai/QwenPaw/pull/5752) updating the v1-to-v2 plugin migration guide signals this massive architectural shift is happening soon.
*   **Custom Model Protocol Support:** [Issue #5609](https://github.com/agentscope-ai/QwenPaw/issues/5609) requests the ability to define custom model API endpoints (e.g., `/v1/images/generations` instead of standard chat completions) to leverage free image models.
*   **Session Management:** [PR #5754](https://github.com/agentscope-ai/QwenPaw/pull/5754) unifies the Session Item component, hinting at a UI/UX overhaul for managing multiple agent workspaces in the console.

## 7. User Feedback Summary
*   **Pain Point - Unreliable Heavy Task Execution:** Users utilizing QwenPaw for heavy automation are frustrated by unexpected task crashes ([Issue #5763](https://github.com/agentscope-ai/QwenPaw/issues/5763)), indicating potential memory leak or timeout issues in the core runtime.
*   **Pain Point - Windows Environment:** Encoding issues (GBK vs UTF-8) remain a persistent thorn for Windows users, breaking subprocesses and shell commands globally ([Issue #4481](https://github.com/agentscope-ai/QwenPaw/issues/4481)).
*   **Use Case - Enterprise Permission Control:** Developers are using QwenPaw as a backend service and need to pass `sessionId` and `user_id` context through to MCP tools to handle per-user permission controls ([Issue #5547](https://github.com/agentscope-ai/QwenPaw/issues/5547)).
*   **Satisfaction:** The community is highly engaged, providing enterprise-grade bug reports (e.g., context compression logic, ACP session lifecycle) and actively contributing complex architectural fixes, showing strong advanced-user adoption.

## 8. Backlog Watch
*   **[Issue #4559](https://github.com/agentscope-ai/QwenPaw/issues/4559)**: Significant UI performance degradation when managing over 40+ agents. Closed recently, but highlights a need for continuous frontend optimization as enterprise usage scales.
*   **[Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)**: MiniMax-M2.5 model returning XML format in thought processes breaks skill execution. Needs robust normalization in the provider layer.
*   **[Issue #4613](https://github.com/agentscope-ai/QwenPaw/issues/4613)**: Request for `register_agent_hook` to allow plugins to hook into memory and context seamlessly. This has been open since May and aligns perfectly with the upcoming v2.0 plugin overhaul—maintainers should prioritize addressing this in the new architecture.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-07-04.

### 1. Today's Overview
ZeroClaw is currently experiencing a period of exceptionally high development velocity, driven primarily by the impending **v0.8.3 release** and active architectural overhauls. In the last 24 hours, the project saw 34 issues updated (closing 4) and a massive 50 pull requests updated, with 43 currently open and 7 merged. The core engineering focus remains heavily fixated on hardening the agent runtime—specifically addressing memory leaks, stabilizing the new WASM plugin architecture, and fortifying security perimeters around authentication and skill execution. 

### 2. Releases
*No new releases were published in the last 24 hours.* The project is actively maintaining the `0.8.x` branch while forward-looking RFCs target the `0.9.0` milestone.

### 3. Project Progress
Significant forward momentum was made on foundational infrastructure and developer tooling today. Key advancements include:
*   **Plugin Ecosystem Hardening ([PR #8641](https://github.com/zeroclaw-labs/zeroclaw/pull/8641), [PR #8662](https://github.com/zeroclaw-labs/zeroclaw/pull/8662)):** Maintainers fixed critical feature-graph dependencies for WASM plugins and improved configuration seeding during installation, ensuring plugins don't silently fail to load.
*   **Protocol Stability ([PR #8663](https://github.com/zeroclaw-labs/zeroclaw/pull/8663)):** Fixed a major provider bug where SSE parsers treated socket drops (EOF) as successful stream completions, preventing silent output truncation from OpenAI and Anthropic.
*   **Developer Operations & Skills ([PR #8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335), [PR #6716](https://github.com/zeroclaw-labs/zeroclaw/pull/6716)):** Merged updates making the `skills install` commands bundle-aware and introduced a new advisory `pr-architecture-check` skill to automate PR review validation.

### 4. Community Hot Topics
The most actively discussed items highlight the community's transition toward enterprise-scale deployments and complex autonomous workflows:
*   **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) - RFC: Work Lanes & Board Automation (13 comments):** A heavily debated governance RFC focused on routing work automatically. It shows the maintainer team is actively scaling its internal processes to manage the massive influx of contributions.
*   **[Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) - RFC: OIDC authentication provider support (7 comments):** High engagement here signals strong enterprise demand for pluggable, centralized SSO authentication for multi-agent deployments.
*   **[Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/pull/8393) - RFC: Goal mode for bounded autonomous session work (3 comments, active PR):** Users are expressing a strong need for durable, long-running autonomous task execution that respects budgets and approval gates, moving beyond simple interactive chat turns.

### 5. Bugs & Stability
Several critical stability and security bugs were reported or tracked today, highlighting the growing pains of complex agent behaviors:
*   **S1/S0 - Runtime Memory Leaks & Crashes:**
    *   **[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642):** Unbounded RSS memory growth in the agent loop caused by MCP/tool-schema cloning. Split from the critical WSL2 Out-Of-Memory ([Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)) tracker.
    *   **[Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654):** A panic in the `skill-review` fork process results in a SIGSEGV (exit code 139), crashing the entire daemon after tool-heavy turns. 
*   **S1 - Provider & Tool Failures:**
    *   **[Issue #8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675):** Malformed tool-call arguments are being sent unvalidated to OpenRouter/OpenAI, causing provider 400 errors and empty agent replies.
    *   **[Issue #8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627):** Native WhatsApp Web channel linking is completely broken due to WhatsApp's new passkey companion-linking gate. *Status: currently blocked.*
*   **S2 - Audit & Logic Gaps:**
    *   **[Issue #8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631):** Headless deterministic SOPs are recording steps as "Completed" without actually executing them, creating a false-green audit trail.

### 6. Feature Requests & Roadmap Signals
Based on the active RFCs and trackers, the **v0.8.3** and **v0.9.0** roadmaps are heavily focused on durability, security, and standard operating procedures (SOPs):
*   **Standard Operating Procedures (SOPs):** [PR #8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) introduces visual SOP authoring surfaces. This is a massive strategic shift toward providing deterministic, step-by-step auditable workflows instead of relying entirely on LLM improvisation.
*   **WASM Out-of-Process Execution:** [PR #8661](https://github.com/zeroclaw-labs/zeroclaw/pull/8661) proposes running WASM plugins via a sidecar host process, adding a vital isolation layer (jail) for untrusted code execution.
*   **Declarative Cron Memory:** [Issue #8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) requests exposing a `uses_memory` flag for cron jobs, signaling that users want highly granular control over when background agents recall context.

### 7. User Feedback Summary
Users are enthusiastically adopting advanced features—like headless triggers, MCP tools, and skill plugins—but are encountering friction with operational stability. A major pain point is **silent failures and hallucinated success states**. For example, users reported ZeroCode turns completing with no visible output ([Issue #8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644)) and SOPs marking steps complete without running them. Furthermore, Windows users remain deeply frustrated by a lack of cross-platform CI parity, with 74 tests failing due to Unix-only assumptions ([Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)). Security-conscious users have rightly identified high-risk gaps, such as the lack of per-sender authorization for global agent model overrides ([Issue #8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044)).

### 8. Backlog Watch
*   **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) - 74 test failures on Windows (S2):** Created on June 10th, this high-priority CI bug is degrading the experience for Windows contributors and users. It is heavily discussed but still lacks a merged resolution.
*   **[Issue #8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) - Harden `/model --agent` scope with per-sender auth:** Created on June 20th, this accepted, high-risk security vulnerability allows any user to change the model for an entire agent. It urgently needs a linked fix PR.
*   **[Issue #8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) - Reconcile cargo-audit ignores / wasmtime CVEs:** Marked as priority 1 and in-progress, this drift between `audit.toml` and `deny.toml` is masking RustSec advisories on the master branch and needs immediate maintainer resolution before the next release tag.

</details>