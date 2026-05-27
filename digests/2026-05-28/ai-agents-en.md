# OpenClaw Ecosystem Digest 2026-05-28

> Issues: 361 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-27 22:29 UTC

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

# OpenClaw Project Digest — 2026-05-28

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high-velocity development cycle, driven largely by the recent rollout of the `v2026.5.26` stable and beta releases. The project saw 361 issues updated (153 open, 208 closed) and a massive 500 pull requests updated (295 open, 205 merged/closed) in the last 24 hours, indicating aggressive feature shipping and triage. Activity is heavily focused on hardening the Gateway event loop, stabilizing the OpenAI Codex and Claude-CLI integrations, and addressing platform-specific regressions (Windows, Docker, macOS). Community engagement is robust, with several P1 and P2 bug reports generating extensive discussion, underscoring the project's active enterprise and hobbyist user base.

## 2. Releases
Two new versions were recently released, focusing heavily on Gateway performance and reducing initialization overhead:

*   **[v2026.5.26](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26)** (Stable)
*   **[v2026.5.26-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.26-beta.2)**
    *   **Highlights:** Both releases introduce a "Faster Gateway" experience by optimizing startup. The Gateway now avoids repeated filesystem, plugin, session, and usage-cost scans. 
    *   **Improvements:** Visible replies now cleanly separate user-facing sends from slower background follow-up work, and Gateway caches have been optimized to reduce churn under heavy load.

## 3. Project Progress
Maintainers and community contributors aggressively merged fixes today, particularly targeting channel-specific delivery, Gateway stability, and authentication routing. Key merged/closed PRs include:

*   **Authentication & Runtime Fixes:**
    *   **[PR #86281](https://github.com/openclaw/openclaw/pull/86281)**: Moved provider auth pre-warming off the main thread to prevent Gateway startup event loop blocking.
    *   **[PR #87416](https://github.com/openclaw/openclaw/pull/87416)** & **[PR #86373](https://github.com/openclaw/openclaw/issues/86373)**: Resolved OpenAI Codex OAuth routing issues for embedded compaction fallbacks and runtime model resolution.
    *   **[PR #87432](https://github.com/openclaw/openclaw/pull/87432)**: Fixed runtime-only provider configs for Brave and Gemini web search.
*   **Channel & Delivery Enhancements:**
    *   **[PR #87361](https://github.com/openclaw/openclaw/pull/87361)**: Made `openclaw doctor` restart follow-ups actionable.
    *   **[PR #87393](https://github.com/openclaw/openclaw/pull/87393)**: Suppressed noisy local Whisper progress transcripts during media transcription.
    *   **[PR #87425](https://github.com/openclaw/openclaw/pull/87425)**: Fixed the `/usage` footer disappearing in Telegram tool-only replies.

## 4. Community Hot Topics
The community is actively discussing critical architectural bottlenecks, specifically around Gateway isolation and memory management.

*   **Windows Event Loop Starvation:** **[Issue #86599](https://github.com/openclaw/openclaw/issues/86599)** (13 comments) reports that local model provider calls on Windows completely block the Gateway event loop, making trivial infer requests take up to 4 minutes. Users are actively requesting architectural changes to isolate agent threads.
*   **Model Upgrades:** **[Issue #80380](https://github.com/openclaw/openclaw/issues/80380)** (13 comments) users are eagerly requesting the swap from `gemini-3.1-flash-lite-preview` to the generally available `gemini-3.1-flash-lite` for better speed and cost efficiency.
*   **Gateway Crash Isolation:** **[Issue #84903](https://github.com/openclaw/openclaw/issues/84903)** (8 comments) highlights a severe issue where a single stalled agent session can block the *entire* Gateway event loop, causing a global denial of service for all other active sessions.
*   **Memory/State Race Conditions:** **[Issue #86702](https://github.com/openclaw/openclaw/issues/86702)** (13 comments) details a diamond-lobster rated race condition where `MemoryIndexManager.close()` closes resources before in-flight syncs settle.

## 5. Bugs & Stability
Several high-severity (P0/P1) regressions were reported today following the `v2026.5.26` update, though maintainers have rapidly issued fixes for many:

*   **P0 Security Exposure:** **[Issue #50630](https://github.com/openclaw/openclaw/issues/50630)** warns that using Tailscale serve with `auth.mode=none` exposes the Gateway to the full Tailnet without authentication (CVSS 9.3). *(Awaiting dedicated fix PR in backlog)*.
*   **P1 5.26 Regression - Relay Unavailability:** **[Issue #87331](https://github.com/openclaw/openclaw/issues/87331)** (8 👍) Codex tool calls intermittently fail with "Native hook relay unavailable" after the 5.26 upgrade due to UUID staleness. 
*   **P1 Windows/Local Inference Blocking:** **[Issue #86599](https://github.com/openclaw/openclaw/issues/86599)** Local inference blocks the Node.js event loop. *(Maintainers are reviewing)*.
*   **P1 Docker Crash:** **[Issue #87302](https://github.com/openclaw/openclaw/issues/87302)** Docker containers broke post-`v2026.5.26` upgrade, failing to respond to messages. *(Fix PR #87428 backported)*.
*   **P1 Auth/Compaction Fallback Failure:** **[Issue #86820](https://github.com/openclaw/openclaw/issues/86820)** (6 👍) Codex OAuth compaction falls back to direct OpenAI API and crashes if `OPENAI_API_KEY` is missing. *(Fixed by PR #86373)*.

## 6. Feature Requests & Roadmap Signals
User feedback points toward a need for more scalable, deterministic, and flexible deployments:

*   **"Gateway-Lite" Mode:** **[Issue #86881](https://github.com/openclaw/openclaw/issues/86881)** requests a lightweight deployment mode for deterministic plugins and webhooks without booting the heavy AI harness.
*   **Context Window Scaling:** **[Issue #87136](https://github.com/openclaw/openclaw/issues/87136)** points out that absolute token compaction thresholds fail when switching between models with drastically different context windows (e.g., 1M vs 200K), signaling a need for percentage-based compaction logic.
*   **Graceful Restarts:** **[Issue #57425](https://github.com/openclaw/openclaw/issues/57425)** requests session recovery and subagent continuity across Gateway restarts to prevent silent message loss.
*   **Plugin Observability:** **[Issue #87362](https://github.com/openclaw/openclaw/issues/87362)** proposes emitting task flow lifecycle hook events to allow plugins to react to state transitions.

## 7. User Feedback Summary
Overall, users love the multi-channel flexibility (Telegram, Discord, Feishu) and AI integrations, but are currently experiencing friction with architectural limitations surrounding the Node.js event loop. 

*   **Pain Points:** Telegram users are highly frustrated by silent message loss and duplicate messages caused by plugin state caps and streaming overwrites (**[Issue #87326](https://github.com/openclaw/openclaw/issues/87326)**, **[Issue #87357](https://github.com/openclaw/openclaw/issues/87357)**). Windows users report an unusable UX due to thread blocking. 
*   **Migration Friction:** Upgrading between major versions (4.x to 5.x) or even minor patches often leaves stale session states, requiring manual `openclaw doctor` intervention to restore functionality (**[Issue #83935](https://github.com/openclaw/openclaw/issues/83935)**).

## 8. Backlog Watch
Several highly-rated, critical issues remain open and await maintainer decisions or live reproduction proofs:

*   **Security Boundaries:** **[Issue #50630](https://github.com/openclaw/openclaw/issues/50630)** (P0, CVSS 9.3 Tailscale auth bypass) needs an urgent security review.
*   **Telegram State Caps:** **[Issue #87332](https://github.com/openclaw/openclaw/issues/87332)** and **[Issue #87357](https://github.com/openclaw/openclaw/issues/87357)** detail how the Telegram plugin hits a 1000-row hard cap because rows are written without expiration dates, locking out new messages. *(Addressed today by PR #87434)*.
*   **Node.js Event Loop Saturation:** **[Issue #84771](https://github.com/openclaw/openclaw/issues/84771)** shows that synchronous startup tasks block the event loop for up to 64 seconds, severely destabilizing deployments.
*   **Subagent State Loss:** **[Issue #85953](https://github.com/openclaw/openclaw/issues/85953)** highlights that yielding parent sessions can lock transcripts, causing subagents to timeout silently.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from May 28, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a phase of rapid, aggressive maturation, characterized by massive code churn and architectural overhauls. Projects are evolving from simple chatbot frameworks into complex, multi-modal, and multi-channel orchestrators capable of persistent memory, subagent delegation, and sandboxed code execution. The dominant technical challenge has shifted from basic LLM integration to solving infrastructure bottlenecks: specifically, managing resource isolation, preventing event-loop starvation, and ensuring robust cross-platform deployments (Desktop, Docker, and mobile). Enterprise readiness is becoming a priority, with a clear, ecosystem-wide demand for granular security, multi-tenant isolation, and deterministic tool routing.

## 2. Activity Comparison
*Health Score Metric: A subjective 1-10 rating based on issue resolution velocity, maintainer responsiveness, and ratio of merged PRs to stale backlog.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 361 | 500 | **v2026.5.26** (Stable) | **9.0** (Massive velocity & triage) |
| **CoPaw** | 40 | 27 | **v1.1.9** (Stable) | **9.0** (Highly responsive, major feature drop) |
| **IronClaw** | 21 | 50 | Pre-release (Reborn) | **8.5** (Deep refactoring, high velocity) |
| **ZeroClaw** | 30 | 50 | v0.8-beta | **7.5** (High activity, some blocking security bugs) |
| **NanoBot** | 5 | 21 | No Release | **7.0** (Solid iteration, external contributions) |
| **Hermes Agent** | 54 (100 total) | 15 | No Release | **6.5** (Community outpacing maintainers) |
| **LobsterAI** | 23 | 6 | **2026.5.27** (Stable) | **6.0** (High velocity, but accumulating stale PRs) |
| **PicoClaw** | 4 | 5 | Nightly Build | **6.5** (Anticipation building, edge-case fixes) |
| **Moltis** | 2 | 2 | No Release | **7.5** (Stable, slow, deliberate Rust cadence) |
| **NullClaw** | 3 | 4 | No Release | **7.0** (Core platform stability focus) |
| **NanoClaw** | 0 | 3 | No Release | **6.5** (Iterative maintenance phase) |
| **TinyClaw / ZeptoClaw**| 0 | 0 | No Release | **N/A** (Dormant) |

## 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw remains the undisputed core reference implementation with the highest community engagement and shipping velocity (861 combined issues/PR updates in 24 hours). Unlike peers that are struggling with basic multi-platform compatibility or waiting for minor version releases, OpenClaw is already tackling advanced enterprise requirements like OpenAI Codex/CLI integrations, complex compaction fallbacks, and plugin observability. 

**Technical Approach:** The project relies heavily on a Node.js event-loop architecture. While this allows for massive plugin and channel flexibility, it is currently its biggest liability compared to Rust-based peers (Moltis, NullClaw, ZeroClaw). OpenClaw is actively battling thread starvation and event-loop blocking (especially on Windows), whereas Rust projects inherently avoid these specific concurrency bottlenecks.

**Community Size:** OpenClaw’s community is an order of magnitude larger than others. While Hermes and IronClaw have active vocal user bases requesting architectural overhauls, OpenClaw’s community operates at the scale of immediate, high-severity P0 bug squashing and rapidly iterating on stable releases.

## 4. Shared Technical Focus Areas
Several technological requirements are emerging simultaneously across independent projects:

*   **Advanced Memory & Compaction:** 
    *   *NanoBot* (PR #3990), *IronClaw* (PR #4110), and *ZeroClaw* are all refactoring how they compress and consolidate long-term context. OpenClaw is dealing with absolute vs. percentage-based token compaction thresholds.
*   **Provider Timeout & Stream Handling:**
    *   The integration of complex reasoning models (DeepSeek-V4, Codex) is breaking standard HTTP timeouts. *NanoBot* (Issue #4013), *Hermes*, and *PicoClaw* are all implementing configurable, per-provider stream timeouts to prevent silent stalling or gateway crashes.
*   **Multi-Tenant Isolation & RBAC:**
    *   As agents move from single-user to enterprise deployments, routing is critical. *Hermes* (Issue #9514), *CoPaw* (Issue #4702), and *NanoBot* (PR #4016) are actively implementing user/group isolation boundaries within single daemon instances.
*   **Security & Tool Access Policies:**
    *   Sandboxing and restricting tool use is a major theme. *ZeroClaw* (Issue #6959), *IronClaw*, and *NanoClaw* (PR #2624) are building systems to disable tools dynamically or enforce strict permission boundaries per agent/skill.

## 5. Differentiation Analysis

*   **Target Audience & UI:**
    *   *CoPaw* is pivoting hard toward being an IDE/Desktop environment for agent creation (Tauri 2.x app).
    *   *LobsterAI* functions as an Electron-based multimedia desktop portal for enterprise users.
    *   *Moltis* and *NullClaw* are explicitly targeted at backend/CLI developers requiring high-security, single-binary deployments.
*   **Technical Architecture:**
    *   *Moltis*, *NullClaw*, and *ZeroClaw* leverage Rust/Zig for memory safety and strict concurrency, appealing to infrastructural use cases.
    *   *OpenClaw*, *IronClaw*, and *NanoBot* utilize Node.js/TypeScript/Python, prioritizing rapid plugin development and web-hook integrations.
*   **Feature Focus:**
    *   *OpenClaw* and *NanoBot* focus heavily on universal messaging channel bridging (Telegram, Discord, WeChat, QQ).
    *   *IronClaw* is deeply invested in the "Reborn" subagent loop and secure sandboxed code execution.
    *   *Hermes Agent* differentiates with its "Soul/Skill" evolutions, acting as a highly customizable personal assistant rather than a rigid tool.

## 6. Community Momentum & Maturity
**Tier 1: Rapid Iterators (OpenClaw, CoPaw, IronClaw, ZeroClaw)**
These projects are shipping massive diffs daily. OpenClaw and CoPaw are pushing stable releases while absorbing hundreds of issues. IronClaw and ZeroClaw are in heavy development sprints (v0.8-beta / "Reborn" phase) with high PR merging rates but are currently exposing users to bleeding-edge instability.

**Tier 2: Stabilizing Builders (NanoBot, Hermes Agent, LobsterAI, PicoClaw)**
These projects have robust communities but are currently managing growing pains. NanoBot and PicoClaw are successfully integrating community patches to stabilize core loops. Hermes and LobsterAI have enthusiastic users, but are experiencing friction (backlog neglect, VIP auth bugs) where maintainers are struggling to keep pace with community demands.

**Tier 3: Niche & Steady (Moltis, NullClaw, NanoClaw)**
These projects show lower volume but highly targeted, mature contributions. Moltis is receiving external partnership inquiries, validating its architectural stability. NullClaw focuses on core OS-level compatibility (Zig/POSIX).

## 7. Trend Signals
For AI agent developers and technical decision-makers, today's digests highlight three clear industry trends:

1.  **"Reasoning" Models are Breaking Legacy Gateways:** The rise of DeepSeek-V4, Claude-CLI, and Codex reasoning modes forces agents to hold connections open significantly longer than standard LLMs. Gateways not utilizing worker threads or asynchronous isolates (like Node.js OpenClaw) will face global thread starvation. Agent architectures must decouple frontend streaming from backend provider polling immediately.
2.  **Cost-Routed Multi-Model Architectures:** Projects like *ZeroClaw* (classifier providers) and *Hermes* (dynamic model routing) are signaling a shift away from single-model agents. Future agents will use cheap, fast local models for routine tasks, intent classification, and memory consolidation, calling upon expensive, high-tier models only for complex reasoning.
3.  **Hosted Agents vs. Local CLI:** There is a distinct push towards autonomous, long-running daemons (LobsterAI's 24-hour tasks, Hermes's memory persistence) over local interactive CLI tools. Consequently, secure sandboxing (IronClaw, Moltis) and strict tool execution policies (ZeroClaw) are becoming mandatory features to prevent autonomous agents from performing destructive filesystem or network actions.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-28

## 1. Today's Overview
NanoBot demonstrated exceptionally high community and contributor activity over the past 24 hours, processing 21 Pull Requests (6 merged/closed) and 5 active Issues. The project is currently in a rapid iteration phase focused on architectural robustness, specifically addressing critical edge cases in MCP (Model Context Protocol) server connectivity, provider stream timeouts, and memory management. A significant amount of activity is driven by external contributors submitting patches, proposing provider integrations, and enhancing channel capabilities. With no new official releases cut today, the project is accumulating substantial structural improvements that will likely culminate in a future minor or patch version release.

## 2. Releases
*No new releases were published today (2026-05-28).*

## 3. Project Progress
The repository saw 6 Pull Requests merged or closed, indicating active maintainer reviews and steady progress. Key advancements include:

*   **MCP Infrastructure Improvements:** Closed PR [#4014](https://github.com/HKUDS/nanobot/pull/4014) and fix PR [#4012](https://github.com/HKUDS/nanobot/pull/4012) laid the groundwork for better MCP server reliability. This is being followed up by open PR [#4028](https://github.com/HKUDS/nanobot/pull/4028) (tool list change notifications) and [#4027](https://github.com/HKUDS/nanobot/pull/4027) (fixing critical MCP reconnection bugs where sessions would drop without reconnecting).
*   **Stream Timeout Configurability:** Merged PR [#4018](https://github.com/HKUDS/nanobot/pull/4018) fixed an issue where the Codex provider hardcoded a 60s timeout, aligning it with the `NANOBOT_STREAM_IDLE_TIMEOUT_S` environment variable used by other providers.
*   **Docker/CLI Expansions:** Closed PR [#4026](https://github.com/HKUDS/nanobot/pull/4026) added official GitHub CLI and `gogcli` (Google Workspace CLI) to the project's Docker image.
*   **Memory & Session Architecture:** Open PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) proposes a major refactor of the Dream memory system, migrating from a two-phase to a single-phase consolidation model via AgentLoop. Additionally, PR [#4025](https://github.com/HKUDS/nanobot/pull/4025) submitted a fix to protect unprocessed history entries from memory compaction.

## 4. Community Hot Topics
*   **Third-Party Web UI Release (Issue [#1922](https://github.com/HKUDS/nanobot/issues/1922)):** A highly popular issue (10 thumbs up, 10 comments) where a community member introduced `nanobot-webui`, a self-hosted management panel. This highlights a strong user demand for an official or community-driven graphical interface for real-time chat, provider configuration, and multi-user management.
*   **Dream System Configurability (Issue [#3885](https://github.com/HKUDS/nanobot/issues/3885)):** With 4 comments, users are actively discussing the need for granular control over the "Dream" memory processing system, specifically requesting global kill switches to prevent background memory cron jobs from running when not needed.
*   **GitAgent Protocol Proposals:** Multiple external contributors (e.g., PRs [#4019](https://github.com/HKUDS/nanobot/pull/4019), [#4024](https://github.com/HKUDS/nanobot/pull/4024)) are attempting to integrate the "GitAgent Protocol" (GAP) into NanoBot, indicating active interest in making NanoBot compatible with emerging AI agent interoperability standards.

## 5. Bugs & Stability
*   **[Critical] Stream Stalling on Heavy Prompts (Issue [#4013](https://github.com/HKUDS/nanobot/issues/4013)):** Users are hitting a "stream stalled for more than 90 seconds" error, particularly when using local LLMs via LM Studio/Ollama, rendering the bot unusable for complex tasks. *Fix available:* PR [#4020](https://github.com/HKUDS/nanobot/pull/4020) introduces per-provider configurable timeouts, and PR [#4018](https://github.com/HKUDS/nanobot/pull/4018) was already merged to address env var parsing.
*   **[Medium] Codex Provider Duplicate Item Errors (PR [#4021](https://github.com/HKUDS/nanobot/pull/4021)):** The OpenAI Codex provider occasionally crashes multi-turn conversations with `400 Duplicate item found`. A fix has been submitted to deduplicate reasoning items before sending.
*   **[Medium] OpenAI-Compatible Providers Tool Parsing (PR [#4017](https://github.com/HKUDS/nanobot/pull/4017)):** Some providers (like Xiaomi MiMo) emit tool calls as plain text rather than structured JSON. A fix is pending to parse these text formats correctly.
*   **[Medium] Orphan Tool Results (PR [#4011](https://github.com/HKUDS/nanobot/pull/4011)):** Sessions were crashing when trying to restore orphaned `tool` messages. A fix was submitted to drop these during session hydration.

## 6. Feature Requests & Roadmap Signals
Based on today's PRs and Issues, the next version will likely see heavy upgrades to context management and channel isolation:
*   **Advanced Model Overrides:** Users want specific models for specific tasks. Issue [#4029](https://github.com/HKUDS/nanobot/issues/4029) requests provider override support specifically for the Dream model, allowing cheaper local models to handle background memory tasks.
*   **Project Workspaces (WebUI):** PR [#4007](https://github.com/HKUDS/nanobot/pull/4007) introduces workspace binding for chats, moving NanoBot toward being an IDE-like assistant rather than just a conversational bot.
*   **DingTalk User Isolation:** PR [#4016](https://github.com/HKUDS/nanobot/pull/4016) adds `group_user_isolation` for DingTalk channels, reflecting a broader need for enterprise-grade multi-tenant session management.
*   **Modular System Prompts:** PR [#4022](https://github.com/HKUDS/nanobot/pull/4022) suggests allowing users to toggle specific system prompt components (skills, soul, user context) to save tokens and optimize performance.

## 7. User Feedback Summary
Users are generally enthusiastic about NanoBot's lightweight core and multi-provider/channel capabilities, but real-world deployments are revealing friction points:
*   **Local LLM Usage:** The hardcoded 90-second stream timeout is a major source of dissatisfaction for self-hosters using slower, local models. Users require more lenient, configurable timeout windows.
*   **Channel Limitations:** WeChat users (Issue [#2772](https://github.com/HKUDS/nanobot/issues/2772)) are expressing frustration over strict token/message limits (max 10 messages per context), indicating heavy usage in mobile messaging scenarios that requires memory optimization.
*   **Memory Control:** Advanced users feel the Dream memory system is too opinionated and desire simpler "off switches" rather than workarounds.

## 8. Backlog Watch
*   **Memory Compaction & Dream Refactor:** Maintainers should prioritize reviewing PR [#3990](https://github.com/HKUDS/nanobot/pull/3990) and PR [#4025](https://github.com/HKUDS/nanobot/pull/4025), as memory management is becoming a frequent topic in bugs and feature requests.
*   **Core Provider Robustness:** PRs fixing MCP connection dropping ([#4027](https://github.com/HKUDS/nanobot/pull/4027)) and Codex duplicate errors ([#4021](https://github.com/HKUDS/nanobot/pull/4021)) need timely reviews to ensure core agent loops remain stable during long-running sessions.
*   **WeChat Token Limits:** Issue [#2772](https://github.com/HKUDS/nanobot/issues/2772) remains open with low interaction from core maintainers. Addressing context window limits for official API-based channels would greatly improve end-user satisfaction.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-28

## 1. Today's Overview
Hermes Agent is experiencing extremely high open-source community engagement, with 100 total issue and pull request updates in the past 24 hours. The repository is currently in an active development and stabilization phase, with no new releases published today. A significant portion of today's activity consists of external security audits and bug fixes, specifically targeting the TUI gateway and plugin infrastructure. Meanwhile, architectural discussions surrounding memory management, multi-agent routing, and skill curation continue to dominate the issue tracker. The high ratio of open issues (46) to closed issues (4) suggests the community is rapidly outpacing the core maintainers' current capacity to merge and resolve tickets.

## 2. Releases
**No new releases were published today.** The project is likely in a feature-freeze or heavy development sprint, accumulating fixes for a future milestone.

## 3. Project Progress
Fifteen pull requests were merged or closed today, indicating steady progress on bug fixing and platform hardening:
*   **Security & Auth Hardening:** A major theme today was resolving severe TUI and WebSocket vulnerabilities. PR [#33503](https://github.com/NousResearch/hermes-agent/pull/33503) and [#33495](https://github.com/NousResearch/hermes-agent/pull/33495) fixed shell injection vulnerabilities in the `/exec` slash command and `quick_commands`. Additionally, PR [#33504](https://github.com/NousResearch/hermes-agent/pull/33504) added missing authentication to the TUI Gateway `dispatch()` RPC handler, and PR [#33505](https://github.com/NousResearch/hermes-agent/pull/33505) added Origin header validation to WebSockets.
*   **Stability & CLI Fixes:** PR [#33498](https://github.com/NousResearch/hermes-agent/pull/33498) made the update banner branch-aware, and PR [#33494](https://github.com/NousResearch/hermes-agent/pull/33494) fixed a crash caused by corrupt install method stamps. 
*   **Platform Integrations:** Progress was made on cross-platform support, including fixing Slack thread context for bot messages ([#33493](https://github.com/NousResearch/hermes-agent/pull/33493)) and ignoring irrelevant Discord user mentions ([#33501](https://github.com/NousResearch/hermes-agent/pull/33501)).

## 4. Community Hot Topics
The most actively discussed issues reveal a strong user demand for **advanced multi-tenant architectures** and **intelligent resource management**:
*   **Lazy Tool Schema Loading** ([#6839](https://github.com/NousResearch/hermes-agent/issues/6839), 16 comments, 13 👍): Users are highly concerned about token waste. Injecting 50+ tool schemas costs ~5,000 tokens per call. The community is rallying behind a two-pass injection mechanism to reduce overhead for local models.
*   **Single-Daemon Multi-Agent Isolation** ([#9514](https://github.com/NousResearch/hermes-agent/issues/9514), 11 comments): Running separate gateways for different personas (e.g., coding vs. personal assistant) consumes too much memory. Users are requesting a single-daemon multi-topic isolation approach.
*   **Telegram Topic Routing** ([#10143](https://github.com/NousResearch/hermes-agent/issues/10143), 10 comments): Closely related to multi-agent isolation, users want a single Telegram bot to route different forum topics to distinct Hermes profiles dynamically.
*   **Persistent & Indexed Memory** ([#8457](https://github.com/NousResearch/hermes-agent/issues/8457) & [#22612](https://github.com/NousResearch/hermes-agent/issues/22612)): The transient nature of the current `MemoryManager` is a major pain point. Users are proposing indexed memory architectures to survive gateway restarts.

## 5. Bugs & Stability
Several high-severity bugs were reported today, with some posing critical risks to user data:
*   **P1 - Critical Data Loss:** Issue [#30151](https://github.com/NousResearch/hermes-agent/issues/30151) reports that the Kanban "Scratch Workspace" cleanup silently deleted a user's entire projects directory. *Fix status: Actively being addressed by PR [#33491](https://github.com/NousResearch/hermes-agent/pull/33491), which introduces DB write safety and JSON error handling.*
*   **P1 - Configuration Wipe:** Issue [#25272](https://github.com/NousResearch/hermes-agent/issues/25272) notes that the v0.13.0 update wiped out custom model configurations. 
*   **P2 - Silent Tool Failures:** Issue [#26530](https://github.com/NousResearch/hermes-agent/issues/26530) highlights that Codex app-server tool calls fail silently during gateway operations without surfacing an approval prompt. Issue [#33367](https://github.com/NousResearch/hermes-agent/issues/33367) reports recurring `FileNotFoundError` in the terminal tool cleanup thread.
*   **P3 - Auth Regressions:** Issue [#24186](https://github.com/NousResearch/hermes-agent/issues/24186) reports a 401 Unauthorized error on Kanban board loads following a recent update. 

## 6. Feature Requests & Roadmap Signals
Based on community traction and PR activity, the following features are likely being positioned for the next major version:
*   **Tiered/Durable Memory Architecture:** With multiple issues ([#32064](https://github.com/NousResearch/hermes-agent/issues/32064), [#32726](https://github.com/NousResearch/hermes-agent/issues/32726)) and active PRs targeting memory character limits and session segmentation, an overhaul of the memory subsystem is clearly on the roadmap.
*   **Dynamic Model Routing:** Issue [#30652](https://github.com/NousResearch/hermes-agent/issues/30652) requests dynamic model routing based on task complexity to optimize cost and latency.
*   **Skill Lifecycle Management:** Users are requesting better versioning, diffing, and status checks for agent skills ([#28213](https://github.com/NousResearch/hermes-agent/issues/28213), [#33314](https://github.com/NousResearch/hermes-agent/issues/33314)), addressing the current "black box" nature of agent self-editing.
*   **Self-Evolving Persona:** Issue [#11919](https://github.com/NousResearch/hermes-agent/issues/11919) suggests allowing `SOUL.md` to evolve dynamically based on usage rather than remaining static after initialization.

## 7. User Feedback Summary
Users are thrilled with Hermes's flexibility and deep integration capabilities but are experiencing growing pains typical of a rapidly expanding agent framework:
*   **Multi-User Trust Issues:** A user reported ([#21574](https://github.com/NousResearch/hermes-agent/issues/21574)) their girlfriend easily bypassed agent identity via prompt injection, highlighting an urgent need for per-user identity/permission isolation.
*   **Skill Curation Frustrations:** Users are annoyed by the agent's LLM consolidation pass, which permanently deletes skills instead of archiving them ([#26655](https://github.com/NousResearch/hermes-agent/issues/26655)). The unversioned nature of markdown skills also leads to silent corruptions ([#20352](https://github.com/NousResearch/hermes-agent/issues/20352)).
*   **Platform Nuances:** Users running Hermes via SMS/Email are frustrated by unavoidable protocol limitations (like typing indicators), though documentation is actively being added to mitigate confusion ([#33500](https://github.com/NousResearch/hermes-agent/pull/33500)).

## 8. Backlog Watch
The following high-impact items require immediate maintainer attention:
*   **Unpatched Security Vulnerabilities:** PRs addressing shell injection and missing auth ([#33504](https://github.com/NousResearch/hermes-agent/pull/33504), [#33505](https://github.com/NousResearch/hermes-agent/pull/33505)) should be prioritized for immediate review and merging.
*   **Kanban Data Integrity:** The bug causing directory deletion ([#30151](https://github.com/NousResearch/hermes-agent/issues/30151)) is highly destructive and requires an urgent patch.
*   **Stale Config Wipe:** The v0.13.0 config wipe ([#25272](https://github.com/NousResearch/hermes-agent/issues/25272)) needs an official maintainer response or mitigation guide, as it currently sits with 0 comments from the core team.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-05-28

## 1. Today's Overview
PicoClaw demonstrates highly active development and community engagement, currently iterating aggressively towards its next stable milestone, as evidenced by the daily `nightly` builds and the community's explicit anticipation for a new release. The project saw 4 open bugs/feature requests and 5 new or updated pull requests in the last 24 hours, focusing heavily on messaging pipeline stability and channel configuration robustness. While no PRs were merged today, the volume of open fix PRs submitted by contributors indicates a healthy, responsive open-source ecosystem actively addressing edge cases. 

## 2. Releases
*   **Nightly Build:** `v0.2.9-nightly.20260527.28ec5793`
    *   **Details:** Automated build incorporating the latest `main` branch commits. 
    *   **Notes:** As an automated nightly build, it may be unstable. Users can track the exact changes against the previous stable release via the [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main).

## 3. Project Progress
Although no PRs were merged into the main branch today, significant architectural progress was made in the pull request pipeline, specifically regarding real-time streaming and system stability:
*   **Real-Time Streaming Stalled:** PR [#2853](https://github.com/sipeed/picoclaw/pull/2853) (feat(pico): add ChatStream support) was closed today after 16 days of inactivity, likely superseded by ongoing architectural work.
*   **Pipeline & Transport Fixes:** Contributors submitted PR [#2956](https://github.com/sipeed/picoclaw/pull/2956) to preserve channel states during security config merges, and PR [#2955](https://github.com/sipeed/picoclaw/pull/2955) to fix a startup crash related to PID file identity checks.
*   **MCP Headers Support:** PR [#2696](https://github.com/sipeed/picoclaw/pull/2696) remains active, advancing the feature to support per-request dynamic headers from channel contexts to MCP servers.

## 4. Community Hot Topics
The most discussed topics highlight a growing user base bumping into edge cases across diverse deployment environments:
*   **Anticipation for v0.2.9 Stable:** Issue [#2952](https://github.com/sipeed/picoclaw/issues/2952) points out the long gap since the last stable release. The user lists multiple real-world usage friction points, including `actions:run` execution bugs and context loop issues during QQ channel restarts.
*   **Android Compatibility:** Issue [#2954](https://github.com/sipeed/picoclaw/issues/2954) requesting 32-bit Android (Termux) support gained immediate attention, indicating a strong demand for lightweight edge deployments on older mobile hardware.
*   **Codex Backend Integration:** Issue [#2953](https://github.com/sipeed/picoclaw/issues/2953) reveals that OpenAI/Codex OAuth authenticates successfully, but fails to stream responses correctly, highlighting a friction point for users trying to use OpenAI's Codex backend.

## 5. Bugs & Stability
Several critical bugs regarding streaming and message delivery were reported today, with maintainers and contributors providing immediate fixes via Pull Requests:
1.  **[Critical] Dropped `tool_calls` during streaming:** Reported in [#2958](https://github.com/sipeed/picoclaw/issues/2958), consecutive requests via the pico WebSocket channel dropped subsequent tool messages. **Fix Status:** Actively addressed in PR [#2957](https://github.com/sipeed/picoclaw/pull/2957).
2.  **[High] OpenAI/Codex empty responses:** OAuth returns empty responses because `response.output_text.delta` stream events are ignored. (Issue [#2953](https://github.com/sipeed/picoclaw/issues/2953)).
3.  **[Medium] Singleton startup failure:** System startup crashes if a PID file is hijacked by an unrelated system process like `systemd-resolved`. **Fix Status:** PR [#2955](https://github.com/sipeed/picoclaw/pull/2955) submitted to verify process identity.
4.  **[Low] Security config override:** Channels are disabled when `.security.yml` is loaded without explicit `enabled: true` flags. **Fix Status:** PR [#2956](https://github.com/sipeed/picoclaw/pull/2956) submitted to preserve initial states.

## 6. Feature Requests & Roadmap Signals
*   **32-bit Android Support:** Issue [#2954](https://github.com/sipeed/picoclaw/issues/2954) explicitly requests support for 32-bit Android environments. Given the project's apparent focus on lightweight edge AI agents, accommodating older Android architectures is a highly logical roadmap addition.
*   **UI & UX Overhaul:** Users in Issue [#2952](https://github.com/sipeed/picoclaw/issues/2952) are requesting better provider key management, API connection testing, and one-click model list fetching in the UI.
*   **MQTT Security Hardening:** PR [#2899](https://github.com/sipeed/picoclaw/pull/2899) introduces configurable TLS verification for MQTT channels, moving away from hardcoded `InsecureSkipVerify`. This is a strong signal that the project is maturing towards enterprise-ready security standards.

## 7. User Feedback Summary
Users are actively deploying PicoClaw in complex multi-channel setups (e.g., QQ, Pico WebSocket) but are experiencing friction with context management and default command executions. There is clear dissatisfaction with the current release cadence, as users are relying on potentially unstable commits for basic functionality. Furthermore, the demand for better UI key management indicates that a significant portion of the user base operates PicoClaw as a standalone personal AI assistant rather than a purely headless backend. 

## 8. Backlog Watch
*   **PR [#2899](https://github.com/sipeed/picoclaw/pull/2899) (MQTT TLS fix):** Flagged as `[stale]`, this crucial security update is waiting for maintainer review. Merging this should be prioritized to prevent default MITM vulnerabilities on MQTT channels.
*   **PR [#2696](https://github.com/sipeed/picoclaw/pull/2696) (MCP dynamic headers):** Open for a month. This enhancement is essential for robust API integrations and requires a final review to unblock users utilizing complex MCP routing.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-05-28

## 1. Today's Overview
NanoClaw experienced moderate project activity over the past 24 hours, characterized entirely by Pull Request submissions and maintenance rather than new issue reports or version releases. The developer community remains highly engaged in cross-platform compatibility, specifically submitting patches for NixOS hosts and Microsoft Teams integrations. The complete absence of newly opened issues suggests a highly stable codebase or a community currently focused on proactive code contributions. Overall, the project is in a healthy, iterative maintenance phase with active community-driven bug fixing and feature refinement.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
The project saw 3 Pull Requests closed or merged within the last 24 hours, indicating steady maintenance:
*   **NixOS Networking Fix:** PR [#2629](https://github.com/nanocoai/nanoclaw/pull/2629) was closed. It aimed to resolve Docker bridge networking issues on NixOS by utilizing `--network=host` and `127.0.0.1` instead of the failing `host-gateway` magic string.
*   **Housekeeping:** Two administrative PRs, [#2577](https://github.com/nanocoai/nanoclaw/pull/2577) and [#2623](https://github.com/nanocoai/nanoclaw/pull/2623), were closed after being submitted as "miss pr" (likely syncing forks or fixing branch mistakes).
*   **CI Deprecation Warnings:** PR [#2608](https://github.com/nanocoai/nanoclaw/pull/2608) remains open and active, addressing upcoming June 2026 deprecations by bumping GitHub Actions (`checkout`, `setup-node`, `pnpm/action-setup`) to `v5`.

## 4. Community Hot Topics
While today's PRs do not have high comment volumes yet, the open PRs address highly specific, long-standing community pain points:
*   **MCP Reactions & Cross-Platform Emojis:** PR [#2627](https://github.com/nanocoai/nanoclaw/pull/2627) (Closing #2569) highlights underlying friction in multi-channel communication. The community needs reliable emoji/reaction translation, as current MCP `add_reaction` shortcodes silently fail on WhatsApp, Discord, Telegram, and Teams (which expect Unicode).
*   **Tool Customization:** PR [#2624](https://github.com/nanocoai/nanoclaw/pull/2624) introduces `disabledTools` in `McpServerConfig`. This indicates a strong community need for granular control over AI agent capabilities on a per-server basis, allowing administrators to tailor the AI's environment securely.

## 5. Bugs & Stability
Several bugs affecting multi-platform stability were identified and patched via PRs today. Ranked by severity:
1.  **Critical / Silent Data Loss:** PR [#2625](https://github.com/nanocoai/nanoclaw/pull/2625) (Closing #2461). Teams manifest hardcoded `supportsFiles: false`, silently dropping bot-side `send_file` deliveries and hiding the upload UI. A fix is currently open.
2.  **High / Silent Failures:** PR [#2627](https://github.com/nanocoai/nanoclaw/pull/2627). Reactions silently fail to render across major messaging networks due to Unicode vs. shortcode mismatches. A fix is currently open.
3.  **Medium / Service Restart Failure:** PR [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) (Closing #2583). macOS `launchctl` silently ignores restart commands if the plist is unloaded, causing the Signal setup wizard to falsely report success. A fix is currently open.
4.  **Low / CLI UX:** PR [#2628](https://github.com/nanocoai/nanoclaw/pull/2628) (Closing #2390). The `--id` flag in `ncl groups create` silently discards user input and generates a UUID instead. A fix is currently open.

## 6. Feature Requests & Roadmap Signals
Based on the current PR pipeline, roadmap signals point heavily toward **cross-platform parity and MCP flexibility**:
*   **Per-Server Tool Restrictions:** The introduction of `disabledTools` ([#2624](https://github.com/nanocoai/nanoclaw/pull/2624)) signals a shift toward enterprise-ready MCP configurations, where admins might want to disable specific agent capabilities (e.g., web browsing or file execution) depending on the connected channel or user group.
*   **Enhanced File Sharing:** Fixing bidirectional file support in Teams ([#2625](https://github.com/nanocoai/nanoclaw/pull/2625)) suggests upcoming versions will feature seamless, universal file-sharing capabilities across all integrated messaging platforms.

## 7. User Feedback Summary
*   **Pain Points:** Users operating within non-Docker or alternative OS environments (like NixOS) experience frustrating network configurations. Additionally, silent failures (like file drops in Teams or un-applied IDs in the CLI) are a major source of dissatisfaction, eroding trust in the CLI feedback loop. 
*   **Use Cases:** NanoClaw is heavily utilized as a centralized, multi-channel AI bridge (connecting Slack, Teams, Discord, WhatsApp, Signal, and Telegram). Maintaining protocol parity across these distinct APIs is the primary use case driving community contributions.

## 8. Backlog Watch
*   **Needs Maintainer Attention:** The CI pipeline is at risk of breaking. PR [#2608](https://github.com/nanocoai/nanoclaw/pull/2608) bumps Node 20 GitHub Actions to v5 ahead of the June 2026 deprecation. Maintainers should prioritize reviewing and merging this to ensure continuous integration stability.
*   **Long-standing platform bugs:** Issue #2461 (Teams file uploads silently dropping) has been unresolved long enough to require immediate merging of the pending fix ([#2625](https://github.com/nanocoai/nanoclaw/pull/2625)).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-28

## 1. Today's Overview
Project activity for NullClaw on 2026-05-28 shows moderate, focused momentum with three issues and four pull requests seeing updates. The development focus is heavily oriented toward platform compatibility (specifically Windows networking and POSIX threading) and provider routing accuracy. Two PRs were merged/closed and one bug was resolved, indicating steady maintenance throughput, though no new version was tagged today.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Two PRs were closed/merged, contributing to core stability and robustness:
- **[#892](https://github.com/nullclaw/nullclaw/pull/892) `test(compat/net): add Windows getAddressList regression tests` (CLOSED/MERGED):** Added regression tests for the Windows `getAddressList` resolver fix. This directly references the Windows DNS stub issue (#890) and validates the new `getAddressListWindows` resolver path.
- **[#891](https://github.com/nullclaw/nullclaw/pull/891) `fix(providers): preserve curl probe transport failures` (CLOSED/MERGED):** Improves error surfacing in the OpenAI-compatible provider health probes by preserving specific curl error types (DNS, Connect, Timeout, TLS, etc.) rather than masking them as generic failures.

## 4. Community Hot Topics
The most active items by community engagement involve core provider connectivity and configuration reliability:
- **[#890](https://github.com/nullclaw/nullclaw/issues/890) [1 👍, 1 comment]:** The Windows `HostResolutionFailed` error drew community validation (thumbs up). Underlying need: Users on Windows require reliable networking out-of-the-box without falling back to manual curl workarounds.
- **[#936](https://github.com/nullclaw/nullclaw/issues/937) & [#937](https://github.com/nullclaw/nullclaw/issues/937):** Two issues from the same user (`weissfl`) flagging a dead config flag and incorrect model fallback for custom providers. These suggest users are actively testing custom OpenAI-compatible endpoints and want full parity with built-in providers.

## 5. Bugs & Stability
Three bugs were active today, ranked by severity:

**High — Windows Networking Crash:**
- **[#890](https://github.com/nullclaw/nullclaw/issues/890) [CLOSED]:** Windows agent provider HTTP fails with `HostResolutionFailed`. **Status:** Root-caused and fixed in `main` (resolver rewritten). Regression tests added in merged PR [#892](https://github.com/nullclaw/nullclaw/pull/892).

**Medium — Incorrect Provider Fallback:**
- **[#936](https://github.com/nullclaw/nullclaw/issues/936) [OPEN]:** Custom OpenAI-compatible provider ignores provider's `/v1/models` and falls back to hardcoded Claude models. No fix PR yet; impacts anyone using third-party LLM gateways or self-hosted providers.

**Low — Dead Config Flag:**
- **[#937](https://github.com/nullclaw/nullclaw/issues/937) [OPEN]:** `compact_context` is parsed but never wired to logic. No runtime impact, but causes user confusion. No fix PR yet.

## 6. Feature Requests & Roadmap Signals
- **Dynamic model discovery for custom providers** ([#936](https://github.com/nullclaw/nullclaw/issues/936)): User expects NullClaw to query the OpenAI-compatible `/v1/models` endpoint when selecting models interactively. This would bring feature parity between custom and built-in providers. Likely a near-term candidate given it blocks custom provider usability.
- **Context compaction** ([#937](https://github.com/nullclaw/nullclaw/issues/937)): The `compact_context` flag exists in config but is dormant. This hints at a planned but unshipped feature for managing long conversation contexts. Likely roadmap material for an upcoming release.
- **Zig v0.16 build support** ([#887](https://github.com/nullclaw/nullclaw/pull/887)): Open PR tracking compatibility with the latest Zig compiler — a prerequisite for any next release.

## 7. User Feedback Summary
- **Windows users** experienced critical connectivity failures (#890), expressing frustration that only curl worked while the native agent stack failed. The fix and test coverage appear to address this.
- **Custom provider users** are hitting a hard blocker: NullClaw's interactive model menu doesn't actually query their provider, silently falling back to Anthropic defaults (#936). This breaks the core use case of plugging in self-hosted or third-party LLMs.
- **Configuration hygiene** matters to the community — users read config schemas and expect declared flags to work (#937).

## 8. Backlog Watch
- **[#887](https://github.com/nullclaw/nullclaw/pull/887) `Fix build with zig v0.16 for win/linux`** — Open since 2026-05-04 (24 days). Critical for downstream packagers and CI. Needs maintainer review to unblock the next release.
- **[#878](https://github.com/nullclaw/nullclaw/pull/878) `fix(compat): use nanosleep on POSIX in thread.sleep`** — Open since 2026-04-30 (28 days). Addresses a real bug where `thread.sleep` doesn't actually suspend OS threads under `std.Io.Threaded`. Impacts latency and resource usage on POSIX systems. Awaiting merge decision.
- **[#936](https://github.com/nullclaw/nullclaw/issues/936)** and **[#937](https://github.com/nullclaw/nullclaw/issues/937)** — Freshly opened, no maintainer response yet. Worth tracking as they directly affect custom provider adoption.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest — 2026-05-28

## 1. Today's Overview
IronClaw is experiencing highly active and heavily concerted development, currently dominated by the sweeping "Reborn" architectural upgrade—a deep refactor of the agent loop, WebUI, and capability stack. The project saw an impressive 50 pull requests updated in the last 24 hours (with 27 merged/closed), alongside 21 active issues, indicating a rapid, core-team-driven cadence. Activity is almost exclusively focused on implementing the Reborn modular stack (M1-M5), wiring up new authentication boundaries, and hardening the agent's subagent and sandbox capabilities. 

## 2. Releases
No new official releases were published today. Development remains firmly focused on merging foundational "Reborn" architectural upgrades and feature PRs into the main branch.

## 3. Project Progress
Significant architectural and functional milestones were achieved today, primarily merging core Reborn infrastructure:
*   **Subagent & Loop Fixes:** [PR #4148](https://github.com/nearai/ironclaw/pull/4148) officially disabled background subagent mode to prevent stranded results, while [PR #4089](https://github.com/nearai/ironclaw/pull/4089) fixed a silent completion bug where parents weren't notified of background subagent completion. [PR #4087](https://github.com/nearai/ironclaw/pull/4087) added `coder` and `explorer` subagent flavors.
*   **Context & Prompts:** [PR #4110](https://github.com/nearai/ironclaw/pull/4110) merged Phase 1 of Reborn context compaction (reducing full-history loading). [PR #4141](https://github.com/nearai/ironclaw/pull/4141) and [PR #4140](https://github.com/nearai/ironclaw/pull/4140) split model content from safe summaries to prevent prompt injection and validate skill instructions safely.
*   **Auth & Sandbox:** [PR #4070](https://github.com/nearai/ironclaw/pull/4070) added token refresh cleanup lifecycles. [PR #4136](https://github.com/nearai/ironclaw/pull/4136) ensured missing runtime credentials trigger an auth-required gate rather than a terminal failure. [PR #4094](https://github.com/nearai/ironclaw/pull/4094) successfully wired process sandbox spawn approvals.
*   **Tooling & UI:** [PR #4105](https://github.com/nearai/ironclaw/pull/4105) fixed Reborn HTTP `save_to` filesystem authority, and [PR #4142](https://github.com/nearai/ironclaw/pull/4142) implemented automatic thread titles from the first user message in WebUI v2.

## 4. Community Hot Topics
*   **DeepSeek Reasoning Error ([Issue #3436](https://github.com/nearai/ironclaw/issues/3436)):** A highly upvoted issue (👍 1) regarding the DeepSeek API returning 400 errors when `reasoning_content` is not passed back correctly in thinking mode. This highlights a growing user need for robust, native integration with advanced reasoning models.
*   **Reborn WebChat SSO ([Issue #4116](https://github.com/nearai/ironclaw/issues/4116)):** An active discussion on carrying v1 Google/GitHub/NEAR SSO into the WebChat v2 surface, reflecting the critical need to restore seamless user onboarding in the new architecture.
*   **GSuite Integration Harness ([Issue #3968](https://github.com/nearai/ironclaw/issues/3968)):** Discussion on establishing caller-level integration coverage and live harnesses for GSuite (Calendar/Gmail), pointing to a strong roadmap push for deep productivity tool integrations.

## 5. Bugs & Stability
*   **HIGH: Nightly E2E Failure ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)):** The nightly E2E scheduled run failed. Maintainers should investigate the v2-engine failure immediately to prevent regressions. 
*   **MEDIUM: DeepSeek API 400 Error ([Issue #3436](https://github.com/nearai/ironclaw/issues/3436)):** Provider API fails during thinking mode. (No linked fix PR yet).
*   **MEDIUM: Setup Wizard Sandbox Bypass ([Issue #4106](https://github.com/nearai/ironclaw/issues/4106)):** The setup wizard bypasses the `SANDBOX_IMAGE` env variable, always probing the hardcoded default. (No linked fix PR yet).
*   **LOW: UI/UX Channel Removal ([Issue #4115](https://github.com/nearai/ironclaw/issues/4115)):** Remove button in the WeChat channel removal modal is invisible until hover.
*   **Fixes in flight:** Many of today's merged PRs addressed critical stability, such as [PR #4139](https://github.com/nearai/ironclaw/pull/4139) fixing the reply completion stop strategy, and [PR #4133](https://github.com/nearai/ironclaw/pull/4133) treating literal `"null"` strings from weaker local models as absent optional args.

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily signaling a transition to a highly durable, modular, and secure agent system:
*   **Declarative Capability Policies:** [Issue #4120](https://github.com/nearai/ironclaw/issues/4120) and [PR #4127](https://github.com/nearai/ironclaw/pull/4127) request moving local-dev capability grants from hardcoded Rust to bundled TOML policy files.
*   **Ambient Runtime Context:** [Issue #4149](https://github.com/nearai/ironclaw/issues/4149) requests injecting live context (date, cwd, git status) into Reborn prompt bundles, bringing the framework to parity with modern AI coding assistants. 
*   **Regex Skill Activation:** [PR #4144](https://github.com/nearai/ironclaw/pull/4144) introduces a config switch for regex-based skill activation, allowing more deterministic tool triggering.
*   **Model-Selected Skills:** [PR #4146](https://github.com/nearai/ironclaw/pull/4146) introduces Codex-style model-facing skill activation capabilities.

## 7. User Feedback Summary
Users are actively stress-testing the integration of IronClaw with third-party providers (like DeepSeek) and local/quantized models. The `"null"` parameter bug ([PR #4133](https://github.com/nearai/ironclaw/pull/4133)) explicitly highlights that the community is using IronClaw with weaker, local LLMs that struggle with strict JSON tool-calling schemas. Meanwhile, enterprise and power-users are eagerly awaiting the GSuite OAuth and SSO integrations. Overall satisfaction seems tied directly to how quickly the new "Reborn" stack stabilizes its E2E flows.

## 8. Backlog Watch
*   **High Priority Reborn Facades:** [Issue #3280](https://github.com/nearai/ironclaw/issues/3280) (ProductWorkflow) and [Issue #3281](https://github.com/nearai/ironclaw/issues/3281) (EventStreamManager) are core to the Reborn reborn architecture. Both have been open since early May and need maintainer review to unblock dependent modules.
*   **Missing Durable Background Subagents:** [Issue #4147](https://github.com/nearai/ironclaw/issues/4147) highlights that background subagent completion delivery is currently disabled/unsafe. Until this is resolved, advanced agentic workflows will be limited to blocking operations.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-05-28

## 1. Today's Overview
LobsterAI is currently experiencing a highly active development phase, marked by the release of version 2026.5.27 and a substantial pipeline of 23 pull requests updated in the last 24 hours. The core maintainers are heavily focused on expanding the agent's multimedia capabilities and refining the OpenClaw plugin ecosystem. While community contributions remain steady, several persistent bugs related to user authentication, long-running tasks, and UI state management require maintainer attention to ensure overall project stability. 

## 2. Releases
**[LobsterAI 2026.5.27](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.27)** (Released 2026-05-27)
*   **Media Generation Integration:** Introduced quota-based entitlement for media (video) generation, integrating external models like Kling V3 and Doubao.
*   **UX Enhancements:** Added click-to-preview functionality for image attachments in the prompt input area.
*   **OpenClaw & Stability:** Implemented OpenClaw plugin/skill bidirectional sync, alongside an HTML share service and a batch of gateway stability fixes (specifically addressing gateway restarts).

## 3. Project Progress
Recent merged/closed PRs indicate forward momentum in UX and deployment pipeline improvements:
*   **[PR #2064](https://github.com/netease-youdao/LobsterAI/pull/2064) (CLOSED):** Successfully rolled up the 2026.5.25/27 release, finalizing the new media generation pipeline.
*   **[PR #2061](https://github.com/netease-youdao/LobsterAI/pull/2061) (MERGED):** Improved the cowork interface by reusing the `ImagePreviewModal` for quick full-size viewing of image thumbnails in prompts.
*   **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (OPEN):** Scheduled dependency bump for Electron (`40.2.1` to `42.2.0`) and `electron-builder`, preparing the desktop client for the next stability phase.

## 4. Community Hot Topics
*   **Authentication Issues with Paid Models ([Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903)):** This issue has 2 comments and ongoing traction. Users are frequently failing to log into VIP accounts, directly blocking them from utilizing NetEase's proprietary paid AI models.
*   **Agent Task Timeout Constraints ([Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062)):** A newly opened issue regarding the `Task timed out` error when attempting to build 24-hour continuous background tasks. The underlying community need is clear: users are trying to use LobsterAI as an autonomous, long-running daemon rather than just an interactive chat interface.

## 5. Bugs & Stability
*   **High Severity - Task Execution & State:** **[Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062)** highlights a critical limitation for enterprise use—tasks exceeding the maximum allowed duration crash silently. No active fix PR is currently attached.
*   **Medium Severity - IM Integration:** **[PR #2063](https://github.com/netease-youdao/LobsterAI/pull/2063)** is actively addressing a bug where Instant Messaging (IM) reply assemblies were pulling in previous turn contexts and failing to strip thinking blocks, leading to corrupted outputs.
*   **Low Severity - Skill State Sync:** Multiple stale PRs (e.g., **[PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)**, **[PR #1501](https://github.com/netease-youdao/LobsterAI/pull/1501)**, **[PR #1505](https://github.com/netease-youdao/LobsterAI/pull/1505)**) point to a persistent UI state bug where disabling a skill or saving agent settings doesn't update the current session without an agent switch. 

## 6. Feature Requests & Roadmap Signals
Recent open PRs suggest a strong roadmap push toward "Expert Systems" and enhanced task automation:
*   **Expert Kits (套件):** **[PR #2060](https://github.com/netease-youdao/LobsterAI/pull/2060)** introduces "Kit" stores—bundled groups of skills that can be installed simultaneously to handle complex, specialized workflows. 
*   **Advanced Scheduled Tasks UX:** **[PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488)** proposes a major UI overhaul for scheduled tasks, shifting from tables to a 2-column card grid with history search and date grouping. 
*   **Session Pruning:** **[PR #1499](https://github.com/netease-youdao/LobsterAI/pull/1499)** signals a move to prevent context window crashes by introducing automatic session pruning mechanisms for long-running conversations.
*   *Prediction:* The next minor version will likely finalize the "Kit" store integration and introduce desktop notification channels for scheduled tasks (as seen in **[PR #1489](https://github.com/netease-youdao/LobsterAI/pull/1489)**).

## 7. User Feedback Summary
Users are adopting LobsterAI for heavy, persistent automation but are brushing up against hard system limits. The feedback loop reveals:
*   **Pain Point 1:** The app struggles with "always-on" background processes, strictly enforcing timeouts that interrupt long-duration autonomous workflows.
*   **Pain Point 2:** Account authentication gating (VIP login failures) is causing severe friction, blocking access to premium capabilities.
*   **Satisfaction:** Users appreciate the expanding UI and preview functionalities (e.g., image click-to-preview) and are actively building complex prompt chains utilizing the skills system.

## 8. Backlog Watch
Several valuable community contributions have gone stale and urgently require maintainer code review:
*   **[PR #1486](https://github.com/netease-youdao/LobsterAI/pull/1486)** & **[PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488):** Scheduled task test buttons and UX upgrades have been sitting idle since early April.
*   **[PR #1503](https://github.com/netease-youdao/LobsterAI/pull/1503):** Introduces a WYSIWYG Markdown editor for agent configuration files—a highly requested UX improvement that has not been reviewed.
*   **CI/CD Dependency Bots:** A series of Dependabot PRs (**[PR #1491](https://github.com/netease-youdao/LobsterAI/pull/1491)**, **[PR #1492](https://github.com/netease-youdao/LobsterAI/pull/1492)**, **[PR #1493](https://github.com/netease-youdao/LobsterAI/pull/1493)**) for GitHub Actions are stale, leaving deployment pipelines running on outdated actions.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-28

## 1. Today's Overview
Moltis, the secure persistent personal agent server built in Rust, is demonstrating steady and healthy open-source development. Activity over the last 24 hours shows a balanced mix of core maintenance, external contributor engagement, and community interest, highlighted by two successfully closed Pull Requests and two newly opened Issues. The project continues to attract third-party integrations and partnership inquiries, underscoring its growing market relevance as a single-binary, sandboxed AI assistant solution. While there are no new official software releases today, the merged code contributions indicate active behind-the-scenes enhancements to memory management and model provider flexibility. Overall, the project's trajectory and community engagement remain highly positive.

## 2. Releases
No new releases were recorded today (2026-05-28). The project maintains its current stable version.

## 3. Project Progress
Two Pull Requests were updated and successfully closed today, signaling progress in system extensibility and memory configuration:
*   **[PR #1074](https://github.com/moltis-org/moltis/pull/1074) [CLOSED] `(memory): Configurable embedding dimensions with safe auto-reindex`:** This is a significant internal enhancement. It allows users to optionally configure embedding dimensions for OpenAI-compatible providers. Critically, it introduces an automatic reindexing safety mechanism when dimensions change, which prevents memory corruption or silent retrieval failures when switching embedding models.
*   **[PR #451](https://github.com/moltis-org/moltis/pull/451) [CLOSED] `feat(providers): add Novita AI as OpenAI-compatible provider`:** Originally opened in mid-March, this long-running community contribution finally closed. It adds Novita AI as an available LLM provider, seamlessly integrating models like `moonshotai/kimi-k2.5`, `deepseek/deepseek-v3.2`, and `zai-org/glm-5` via the standard OpenAI-compatible schema. 

## 4. Community Hot Topics
The community focus over the past 24 hours centers on third-party ecosystem growth and identity management:
*   **[Issue #1076](https://github.com/moltis-org/moltis/issues/1076) [OPEN] `Partnership inquiry — MyClaw.ai × Moltis`:** A managed cloud hosting provider for OpenClaw (MyClaw.ai) has reached out requesting a formal partnership. This highlights Moltis's growing reputation as a robust "serious technical project" and indicates a rising demand for managed cloud deployments of local/sandboxed AI agents.
*   **Continued Provider Expansion:** The closing of the Novita AI provider PR ([PR #451](https://github.com/moltis-org/moltis/pull/451)) reflects strong community desire to run diverse, specialized LLMs (like DeepSeek and Kimi) within Moltis's secure Rust environment.

## 5. Bugs & Stability
One new bug was reported today regarding user identity constraints:
*   **[Issue #1077](https://github.com/moltis-org/moltis/issues/1077) [OPEN] `[Bug]: Error: invalid params, user name must be consistent (2013)`:** Reported by `realalexandergeorgiev`, this issue triggers an error code `2013` when there is an inconsistency in the user name parameters. Given Moltis's focus on being a secure, sandboxed, and persistent server, identity consistency is critical for memory and permission isolation. **Status:** No fix PRs are currently linked to this issue. *Severity: Medium* (does not appear to crash the binary, but likely breaks session initialization or memory persistence for affected users).

## 6. Feature Requests & Roadmap Signals
*   **Embedding Flexibility:** The closure of PR #1074 introduces safe auto-reindexing for embeddings. This strongly signals that the next minor or patch release will likely focus on making memory and context handling highly modular and resilient to changes in underlying vector models.
*   **Cloud & Hosting Expansion:** Issue #1076 indicates external businesses are viewing Moltis as a viable backend. Maintainers may need to establish a formal partnership program or official documentation for cloud deployment.
*   **Next Version Prediction:** The upcoming release will almost certainly include the Novita AI provider out-of-the-box and the new configurable embedding dimensions, making it a highly anticipated update for power users managing local vector databases.

## 7. User Feedback Summary
*   **Pain Points:** Users expect seamless session continuity. The username consistency error (Issue #1077) suggests that multi-session or multi-device syncing might currently be too rigid in how it identifies users. 
*   **Use Cases:** The integration of Novita AI confirms that users are actively utilizing Moltis for routing to specific regional or high-performance models (e.g., Kimi-2.5, DeepSeek-v3.2). 
*   **General Satisfaction:** The project is highly regarded externally. The unsolicited partnership inquiry explicitly praises Moltis's architecture ("secure persistent personal agent server in Rust, one binary, sandboxed"), validating that the project's core value proposition is hitting the mark with developers and enterprise users alike.

## 8. Backlog Watch
*   **[PR #451](https://github.com/moltis-org/moltis/pull/451) (Novita AI Integration):** While successfully closed today, this PR sat in the backlog for over two months (since March 19). Maintainers should review if there are bottlenecks in testing third-party API providers to ensure future integrations can land faster.
*   **[Issue #1076](https://github.com/moltis-org/moltis/issues/1076) (MyClaw.ai Partnership):** Requires prompt attention from core maintainers to acknowledge the inquiry and establish a channel for business development, as leaving strategic partnership requests unanswered could sour potential ecosystem growth.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-28

## 1. Today's Overview
CoPaw is experiencing a massive surge in community engagement and development velocity, driven primarily by the highly anticipated **v1.1.9 release**. With 40 issues updated and 27 pull requests processed in the last 24 hours, the repository is buzzing with activity, highlighting a highly responsive maintainer team and an active open-source community. The core focus of this cycle is significantly maturing the platform's Desktop and Web IDE capabilities, transitioning CoPaw from a simple agent framework into a comprehensive, native-like development and interaction environment. 

## 2. Releases
Two new versions were released today, culminating in the official stable release:
*   **v1.1.9-beta.2**: Focused on UX refinements for the new features, including automatic redirection to coding mode upon activation, OAuth support for desktop environments via `openExternalLink`, and provider enhancements.
*   **v1.1.9 (Official Stable)**: A landmark release introducing major structural features:
    *   **Tauri 2.x Desktop App**: Introduced a native desktop application for macOS and Windows, replacing older wrappers for better performance and system integration ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)).
    *   **Coding Mode (Web IDE)**: A completely new Web IDE featuring a three-panel layout (file tree, tabbed editor with inline diff, and chat interface) allowing users to build and modify agents seamlessly.

## 3. Project Progress
Today saw 15 PRs merged/closed, demonstrating rapid iteration on the newly released v1.1.9 features, specifically optimizing the Desktop and Coding experiences:
*   **Desktop Enhancements:** Fixed external link and download regressions in the Tauri desktop app ([PR #4683](https://github.com/agentscope-ai/QwenPaw/pull/4683)) and resolved a critical issue where hidden Windows subprocess flags triggered false-positive Windows Defender alerts ([PR #4724](https://github.com/agentscope-ai/QwenPaw/pull/4724)).
*   **Coding Mode Iteration:** Implemented per-hunk Keep/Undo buttons in the diff editor and smart copy-to-chat functionality ([PR #4716](https://github.com/agentscope-ai/QwenPaw/pull/4716)), while also hiding annoying Git console windows on Windows ([PR #4696](https://github.com/agentscope-ai/QwenPaw/pull/4696)).
*   **UX & Core Fixes:** Added message timestamps to the chat UI ([PR #4720](https://github.com/agentscope-ai/QwenPaw/pull/4720)), fixed SVG MIME type issues on Windows ([PR #4718](https://github.com/agentscope-ai/QwenPaw/pull/4718)), and resolved a bug where boolean schemas were corrupted for strict OpenAI-compatible providers ([PR #4690](https://github.com/agentscope-ai/QwenPaw/pull/4690)).

## 4. Community Hot Topics
The community is highly engaged, with users heavily testing the v1.1.9 beta and pushing its boundaries:
*   **Open Contribution Tasks ([Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) - 63 comments):** The maintainer-posted "Help Wanted" board is highly active, showing a healthy influx of contributors claiming P0-P2 tasks.
*   **System Architecture Suggestions ([Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652) - 3 comments):** A deep-dive discussion on how CoPaw's memory system needs to evolve from "information dumping" to actual "knowledge accumulation" with summarization and smart retrieval. 
*   **Enterprise Use Cases ([Issue #4702](https://github.com/agentscope-ai/QwenPaw/issues/4702) - 2 comments):** Users actively expressing a desire to adopt CoPaw in corporate environments, discussing the necessity of RBAC and multi-tenant admin capabilities.

## 5. Bugs & Stability
The v1.1.9 beta has surfaced several priority bugs related to system integration and state management:
*   **Critical - macOS Tahoe Crash ([Issue #4704](https://github.com/agentscope-ai/QwenPaw/issues/4704)):** The desktop app segfaults on macOS Tahoe 26.5 when receiving Feishu channel messages. No fix PR is linked yet.
*   **High - CLI Tool Isolation in Desktop ([Issue #4712](https://github.com/agentscope-ai/QwenPaw/issues/4712)):** Local CLI tools (like Feishu CLI) fail to run in v1.1.9-beta.1 due to WebSocket/network restrictions inside the Tauri sub-process environment.
*   **High - Mission Phase 2 Infinite Loop ([Issue #4705](https://github.com/agentscope-ai/QwenPaw/issues/4705)):** Agent enters an iteration loop in Mission Mode even when waiting for user input, consuming tokens unnecessarily.
*   **Medium - Cron Job Interference ([Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653)):** Scheduled cron tasks are interrupted if a user sends a manual message during execution because they share the same session. 
*   **Fixed - Virus False Positives ([PR #4724](https://github.com/agentscope-ai/QwenPaw/pull/4724)):** Windows Defender false positives caused by the `CREATE_NO_WINDOW` flag have been quickly patched.

## 6. Feature Requests & Roadmap Signals
Based on community issues, expect the following areas to be prioritized in upcoming patches or v1.2.0:
*   **Token Tracking & Cost Management:** Request for cache hit/miss metrics in token usage stats ([Issue #4721](https://github.com/agentscope-ai/QwenPaw/issues/4721)) to help users estimate actual API costs.
*   **Enterprise RBAC:** Strong demand for an admin panel to manage multiple users ([Issue #4702](https://github.com/agentscope-ai/QwenPaw/issues/4702)).
*   **New Provider Integrations:** Xiaomi MiMo Token Plan has been proposed as a built-in provider, with a PR already open ([Issue #4715](https://github.com/agentscope-ai/QwenPaw/issues/4715), [PR #4722](https://github.com/agentscope-ai/QwenPaw/pull/4722)).
*   **Advanced Memory:** Upgrades to the memory system to include state tags (resolved/unresolved) and smart cross-referencing ([Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)).

## 7. User Feedback Summary
Users are thrilled with the new Web IDE and Desktop apps but are experiencing friction during the transition:
*   **Pain Points:** The Tauri app struggles with session persistence; users report that switching pages clears chat history, and restarting the app loses the last active agent session ([Issue #4713](https://github.com/agentscope-ai/QwenPaw/issues/4713)). The chat UI also needs better queue management, as users cannot input new prompts while the agent is processing ([Issue #4714](https://github.com/agentscope-ai/QwenPaw/issues/4714)).
*   **Satisfaction:** The rapid resolution of Windows-specific bugs and the introduction of the "Approve All" tool confirmation button ([PR #4701](https://github.com/agentscope-ai/QwenPaw/pull/4701)) show that the maintainers are highly in tune with daily user friction points.

## 8. Backlog Watch
Maintainers should direct their attention to the following complex, unresolved items:
*   **Console Freezing Bug ([Issue #3468](https://github.com/agentscope-ai/QwenPaw/issues/3468)):** An older, highly disruptive bug where the console UI freezes until manually refreshed. This is hurting UX retention.
*   **Desktop Session Persistence ([Issue #4733](https://github.com/agentscope-ai/QwenPaw/issues/4733)):** The newly reported issue regarding the Tauri desktop app's failure to remember the last active session/agent on restart.
*   **Robust Unit Test Coverage ([Issue #4339](https://github.com/agentscope-ai/QwenPaw/issues/4339)):** A large-scale ongoing effort to fix existing test errors and establish shared conftest infrastructure, critical for maintaining stability as the project scales.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-05-28

## 1. Today's Overview
ZeroClaw is experiencing a highly active development phase, marked by heavy routing through its Issue and PR queues, with **30 issues updated** (20 open) and **50 PRs updated** (38 open) in the last 24 hours. The high volume of open pull requests indicates aggressive feature development, particularly ahead of the `v0.8.1` and `v0.8-beta` milestones. However, the lack of a new official release today means users are currently relying on pre-release or edge builds. The maintainers and community are heavily focused on architectural security, plugin systems, and channel integration stability, as evidenced by numerous newly opened RFCs and P1 bug fixes. 

## 2. Releases
**No new releases** were published today.

## 3. Project Progress
The team merged 12 PRs today, focusing heavily on security hardening, CI stability, and quality-of-life improvements for the CLI and Web UI:
*   **Security & Config:** Closed [PR #6918](https://github.com/zeroclaw-labs/zeroclaw/pull/6918), which generalized `#[secret]` handling via a new `SecretField` trait, preventing future secret-leak bugs in complex configuration arrays. 
*   **Channel Stability:** Merged [PR #6934](https://github.com/zeroclaw-labs/zeroclaw/pull/6934) to fix Discord gateway startup crashes during HTTP 429 rate-limiting, and [PR #6962](https://github.com/zeroclaw-labs/zeroclaw/pull/6962) removed brittle wall-clock timing asserts from channel parallel-dispatch tests.
*   **UX Improvements:** Merged [PR #6947](https://github.com/zeroclaw-labs/zeroclaw/pull/6947) to suppress noisy `[system]` INFO logs in interactive TTY mode, and [PR #6936](https://github.com/zeroclaw-labs/zeroclaw/pull/6936) introduced minimum browser requirements for the Web UI.

## 4. Community Hot Topics
The community and maintainers are actively discussing foundational architectural shifts:
*   **DeepSeek-V4 API Incompatibility:** [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) (14 comments, 4 👍) is seeing heavy traction as users struggle with broken thinking-mode API formats for DeepSeek-V4-Pro and Flash models.
*   **Security & Isolation RFCs:** Two major security discussions started today. [Issue #6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) proposes establishing runtime credential boundaries and isolation defaults. Concurrently, [Issue #6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) was opened as an urgent S0 security risk regarding nested secrets leaking in `ObjectArray` config displays.
*   **Unified Output Routing:** Closed [Issue #6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969) sparked discussion among users migrating from Letta who want per-peer modality preferences (controlling *how* and *where* the AI replies, e.g., morning briefings via email vs. chat).

## 5. Bugs & Stability
Several high-severity bugs were reported today, mostly affecting the new `v0.8-beta-1` runtime:
*   **S0 / S1 Security & Crashes:** 
    *   [Issue #6978](https://github.com/zeroclaw-labs/zeroclaw/issues/6978) (S0): Nested secrets in `Vec<T>` config fields render in plaintext (Fix likely aided by the newly merged [PR #6918](https://github.com/zeroclaw-labs/zeroclaw/pull/6918)).
    *   [Issue #6888](https://github.com/zeroclaw-labs/zeroclaw/issues/6888) (S1): Daemon component 'channels' exits unexpectedly in rootless Podman containers on v0.8-beta-1 (Closed today).
    *   [Issue #6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975) (S1): `zeroclaw onboard` marks sections complete without writing the actual config, blocking user setup.
*   **Tool Access & Web UI Bugs:**
    *   [Issue #6959](https://github.com/zeroclaw-labs/zeroclaw/issues/6959) (P1): `ToolAccessPolicy` is bypassed by eager built-in tools, posing a security risk. Fix actively in progress via [PR #6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924).
    *   [Issue #6964](https://github.com/zeroclaw-labs/zeroclaw/issues/6964) (P1): Windows desktop build fails with duplicate MANIFEST resource errors.
    *   [Issue #6965](https://github.com/zeroclaw-labs/zeroclaw/issues/6965) (P1): Canvas page fails to receive WebSocket frames from the Web UI chat agent.
    *   [Issue #6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976): Web UI chat fails with WebSocket 1006 due to missing `?agent=` parameter.

## 6. Feature Requests & Roadmap Signals
Today's RFCs and feature PRs strongly signal the roadmap for ZeroClaw's next incremental versions:
*   **Plugin System Overhaul:** [Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) (Integrations → unified plugin catalog) and [Issue #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) (RFC to replace Extism with `wasm-wasip2`) point to a massive restructuring of how ZeroClaw handles extensions, likely landing in v0.9.0.
*   **v0.8.1 Integration Queue:** [Issue #6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) was opened today as an operational tracker for channel, provider, and tool PRs targeting v0.8.1.
*   **Cost Optimization:** [PR #6945](https://github.com/zeroclaw-labs/zeroclaw/pull/6945) introduces per-agent `classifier_provider`, allowing users to route reply-intent prechecks to a cheaper model (e.g., using a lightweight model to filter messages before sending them to an expensive one like `qwen3.6-plus`).
*   **Cron Pipeline Fix:** [Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) proposes routing scheduled tasks through the orchestrator pipeline to fix a cluster of cron-related context amnesia bugs.

## 7. User Feedback Summary
Users are enthusiastic about the expanding channel support and features but are clearly feeling the friction of operating on the bleeding edge (`v0.8-beta-1`):
*   **Pain Points:** Users deploying ZeroClaw in containers (Podman) or compact environments (Windows Tauri app) are hitting blocking infrastructure issues. The Web UI is also a source of friction, with users reporting silent configuration failures during onboarding ([Issue #6975](https://github.com/zeroclaw-labs/zeroclaw/issues/6975)) and WebSocket connectivity bugs ([Issue #6976](https://github.com/zeroclaw-labs/zeroclaw/issues/6976)).
*   **Use Cases:** The need for cross-platform multi-modal routing is highly requested. Users want ZeroClaw to act as a persistent, channel-agnostic brain (e.g., scheduling a morning briefing via Telegram while chatting interactively via the Web UI). 

## 8. Backlog Watch
Several high-stakes issues require immediate maintainer review:
*   **Bulk Revert Audit:** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) is tracking 153 commits lost in a bulk revert from March. Active recovery PRs like [PR #6972](https://github.com/zeroclaw-labs/zeroclaw/pull/6972) are currently being submitted against this tracker.
*   **Stalled High-Risk PRs:** [PR #5164](https://github.com/zeroclaw-labs/zeroclaw/pull/5164) (fixing private DNS host allowlists for `web_fetch`) has been open since early April and is blocking related security work in [PR #6974](https://github.com/zeroclaw-labs/zeroclaw/pull/6974).
*   **Skills Tooling:** [Issue #6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915) (Skill-scoped tool activation) is marked as `status:blocked` and `needs-maintainer-review`. Its corresponding implementation, [PR #6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924), is massive and awaiting architectural approval.

</details>