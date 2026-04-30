# OpenClaw Ecosystem Digest 2026-05-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-04-30 22:15 UTC

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

# OpenClaw Project Digest — 2026-05-01

## 1. Today's Overview
OpenClaw is currently experiencing an exceptionally high volume of community activity, operating at a heavy scale with **500 issues and 500 pull requests updated in the last 24 hours**. While the project maintains rapid iteration, shipping 5 new releases (including a stable release and 4 betas), it is clear the project is in a critical stability phase. The vast majority of community activity revolves around severe performance regressions and gateway stability issues introduced in recent updates. Maintainers and contributors are highly active, submitting numerous targeted fixes, though the backlog remains overwhelmingly large (486 open issues, 477 open PRs).

## 2. Releases
**Latest Stable: `v2026.4.29` (plus betas 1 through 4)**
*   **Highlights:** The release focuses heavily on messaging and automation improvements. Key additions include default "active-run steering," "visible-reply enforcement," routing metadata for spawned subagents, and opt-in follow-up commitments for heartbeat-delivered reminders. 
*   **Known Issues / Migration:** Based on the issue tracker, users upgrading to the 2026.4.29+ branch from 2026.4.22 should be aware of significant plugin loader and CPU utilization changes. It is highly recommended to monitor gateway CPU usage post-upgrade, especially for Docker/Homebrew setups.

## 3. Project Progress
Only **23 PRs were merged/closed** today out of 500 active, with a heavy focus on triage, targeted performance fixes, and tightening security/auth. 
*   **Agent Stability & Performance:** Merged and active PRs are addressing core event loop starvation. Notably, PR [#74919](https://github.com/openclaw/openclaw/pull/74919) introduced a fast-path to release session locks synchronously on abort, and PR [#73560](https://github.com/openclaw/openclaw/pull/73560) added an auto-recovery threshold for stuck sessions.
*   **Security & Media Delivery:** PR [#75076](https://github.com/openclaw/openclaw/pull/75076) hardened Control UI auth and CSP headers, while PR [#69310](https://github.com/openclaw/openclaw/pull/69310) ensured that dropped media directives now surface as user-visible warnings rather than failing silently.
*   **Architecture & Platforms:** PR [#74716](https://github.com/openclaw/openclaw/pull/74716) successfully routed Codex Computer Use through the Mac app node host, and PR [#73168](https://github.com/openclaw/openclaw/pull/73168) added reverse proxy auth support for the Android app.

## 4. Community Hot Topics
The community is largely focused on a cluster of severe performance regressions introduced between versions 2026.4.22 and 2026.4.26.
*   **Gateway CPU Spinning & Event Loop Starvation:** The most active bug is [#72338](https://github.com/openclaw/openclaw/issues/72338) (18 comments, 3 👍), detailing how the gateway enters a high-CPU state, stalling Telegram replies. This is closely related to the "plugin loader hot loop" described in [#73532](https://github.com/openclaw/openclaw/issues/73532) (12 comments) and the meta-issue tracking this regression cluster, [#74630](https://github.com/openclaw/openclaw/issues/74630).
*   **Severe Latency Regressions:** Issue [#73501](https://github.com/openclaw/openclaw/issues/73501) (11 comments, 5 👍) is tagged as a blocker, noting a severe slow-down in bot reactions/replies since 4.22. Similarly, [#74953](https://github.com/openclaw/openclaw/issues/74953) (5 comments) highlights general lag across web and CLI.
*   **Venting Frustrations:** A highly discussed (9 comments, 6 👍) and unusually candid issue, [#65302](https://github.com/openclaw/openclaw/issues/65302), posted by an autonomous AI agent ("Scarlet"), criticizes the recent destabilizing updates, reflecting a tangible portion of the community's fatigue regarding stability.

## 5. Bugs & Stability
The project's current stability is under significant strain, with multiple reports of CPU pinning, deadlocks, and broken core functionalities.
*   **Critical / Blocker:** 
    *   **CPU & Event Loop Starvation:** `fs.stat` storms and JSON5 manifest parsing are pinning the gateway's main thread at 100% CPU, causing WebSocket and Telegram polling timeouts ([#73501](https://github.com/openclaw/openclaw/issues/73501), [#74328](https://github.com/openclaw/openclaw/issues/74328)). *Fix PRs: [#74950](https://github.com/openclaw/openclaw/pull/74950) (stale locks in Docker), [#75089](https://github.com/openclaw/openclaw/pull/75089) (stale stream buffers).*
    *   **Gateway Deadlocks & Crashes:** HTTPS/WebSocket dispatch deadlocks on Windows/Docker ([#73874](https://github.com/openclaw/openclaw/issues/73874)), session write locks leaking ([#49157](https://github.com/openclaw/openclaw/issues/49157)), and Discord READY events failing silently due to race conditions ([#74617](https://github.com/openclaw/openclaw/issues/74617)).
*   **High Severity (Regressions):** 
    *   Silent data loss: `openclaw update` run mid-turn causes total message loss on Telegram ([#71178](https://github.com/openclaw/openclaw/issues/71178)).
    *   Control UI completely disables "Raw mode" due to bad config round-trip checks ([#59330](https://github.com/openclaw/openclaw/issues/59330), 12 👍).
*   **Tooling / UI Bugs:** Image optimization fails in the preprocessing pipeline even when the VLM is properly configured ([#73424](https://github.com/openclaw/openclaw/issues/73424)), and WebChat duplicates every assistant reply ([#71992](https://github.com/openclaw/openclaw/issues/71992)). *Fix PR: [#75284](https://github.com/openclaw/openclaw/pull/75284) (trailing assistant turns repair).*

## 6. Feature Requests & Roadmap Signals
While stability dominates the conversation, several architectural and UI enhancements signal where the project is heading:
*   **Plugin UI Extensions:** Users want plugins to declare native tabs inside the Control UI using Lit Web Components ([#66944](https://github.com/openclaw/openclaw/issues/66944)).
*   **Cross-Platform Sync & Voice:** Requests for unified cross-channel message sync across TUI, Telegram, and iMessage ([#41548](https://github.com/openclaw/openclaw/issues/41548)), and adding OpenAI Realtime speech-to-speech to Mac Talk Mode ([#71195](https://github.com/openclaw/openclaw/issues/71195)) indicate a push toward seamless, real-time multi-modal communication.
*   **Configuration Limits & Defaults:** Users are requesting configurable upload size limits for the Control UI ([#71142](https://github.com/openclaw/openclaw/issues/71142)) and a change in default for `nativeSkills` from "auto" to "none" to stop exhausting Discord/Telegram command quotas ([#49273](https://github.com/openclaw/openclaw/issues/49273)).

## 7. User Feedback Summary
Users are experiencing deep frustration with the upgrade cycle. The consensus is that versions 4.22 to 4.26 introduced fundamental performance bottlenecks, severely degrading the UX. Users running Docker containers or VPS setups feel the brunt of the impact, with chat latency reaching 30–90 seconds ([#73428](https://github.com/openclaw/openclaw/issues/73428)), a stark contrast to direct API calls which resolve in under a second. 
Furthermore, users highlight poor native platform integration—such as WhatsApp proactive sends resulting in "ghost chats" where messages appear sent but are never delivered ([#74925](https://github.com/openclaw/openclaw/pull/74925)), and bundled plugins blocking startup ([#74209](https://github.com/openclaw/openclaw/issues/74209)). Despite these pains, the massive PR throughput shows a dedicated core group of contributors working rapidly to patch these regressions.

## 8. Backlog Watch
Several core issues affecting developer and user experience remain in need of focused maintainer attention:
*   **Shared WebSocket Client SDK:** PR [#49178](https://github.com/openclaw/openclaw/issues/49178) proposes extracting `@openclaw/gateway-client` to eliminate duplicated gateway WebSocket logic between the CLI and Control UI. This would address the root cause of CLI WebSocket hangs ([#68944](https://github.com/openclaw/openclaw/issues/68944)).
*   **Slow Startup with Multiple Providers:** Issue [#62364](https://github.com/openclaw/openclaw/issues/62364) (7 comments, 4 👍) details gateway startup times jumping from 12s to 85s due to provider validation in `models.list`.
*   **Orphaned Session Pruning:** Issue [#49259](https://github.com/openclaw/openclaw/issues/49259) requests a native way to clean up orphaned sessions from the Dashboard, a vital tool for long-running production instances.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from May 1, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by rapid feature expansion coupled with significant architectural growing pains. Projects are aggressively moving beyond simple chat interfaces toward complex, multi-channel, and multi-agent orchestration. The dominant technical theme across the space is "enterprise readiness," with maintainers heavily focused on implementing strict security policies, robust memory management, and observability (e.g., OpenTelemetry). However, this rapid iteration has introduced severe stability regressions—particularly concerning CPU utilization, event loop management, and gateway routing—leaving many core projects in critical triage phases.

## 2. Activity Comparison
*Health Score is rated 1-5 based on issue/PR velocity, bug triage responsiveness, and release stability (5 = Highly active and stable, 1 = Stagnant or critically unstable).*

| Project | Issues Updated | PRs Updated | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.4.29` (Stable) | 3/5 (Heavy triage) |
| **Hermes Agent** | 50 | 50 | `v0.12.0` (Major) | 3/5 (Buggy major release) |
| **ZeroClaw** | 50 | 50 | None (Dev phase) | 4/5 (High momentum) |
| **Moltis** | Low | High | `20260430.01` (Minor) | 5/5 (Rapid, stable iteration) |
| **CoPaw** | 50 | 16 | `v1.1.5.post1` (Patch) | 5/5 (Responsive, healthy) |
| **NanoClaw** | Low | 50 | None (Dev phase) | 4/5 (High velocity, some fires) |
| **PicoClaw** | 37 | 38 | `v0.2.8` (Minor) | 4/5 (Active, scaling pain) |
| **NanoBot** | 15 | 27 | None (`v0.1.5.post3`) | 4/5 (Active development) |
| **IronClaw** | 23 | 36 | None (Reborn branch) | 3/5 (Architectural flux) |
| **NullClaw** | 0 | 5 | None | 3/5 (Reactive patching) |
| **LobsterAI** | Low | 12 | None (Stale PRs) | 2/5 (Review bottleneck) |
| **TinyAGI / ZeptoClaw**| 0 | 0 | N/A | 1/5 (Dormant) |

## 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw remains the undisputed core reference implementation with by far the largest scale of community engagement (500+ issues/PRs daily). Its plugin and channel ecosystem is the most mature, and its maintainers are highly responsive, merging targeted security and performance fixes daily.
*   **Technical Approach Differences:** Unlike leaner alternatives (like NullClaw or NanoBot) that prioritize minimal footprints, OpenClaw relies on a heavy gateway architecture. However, this monolithic approach is currently its Achilles' heel; recent updates have introduced severe event loop starvation and CPU spinning that are currently dominating its issue tracker.
*   **Community Size Comparison:** OpenClaw operates at an order of magnitude higher volume than its nearest competitors (Hermes, ZeroClaw, CoPaw). While this provides massive crowdsourced testing, it also creates an overwhelming backlog, whereas smaller projects like Moltis and CoPaw are achieving faster bug-resolution times.

## 4. Shared Technical Focus Areas
*   **MCP (Model Context Protocol) Infrastructure:** Standardizing local and remote tool orchestration is a massive priority. PicoClaw released dedicated CLI tools for MCP, ZeroClaw is implementing OAuth 2.1 for MCP servers, and LobsterAI is adding batch JSON creation for MCP endpoints.
*   **Multi-Channel Routing & Sync:** Projects are racing to unify enterprise messaging. CoPaw, NanoBot, and PicoClaw are heavily patching Feishu, Slack, WeChat, and Discord integrations to resolve cross-talk, lost context, and silent message drops.
*   **Security Sandboxing & Command Execution:** As agents become more autonomous, hardening their environments is critical. NullClaw introduced a 3-tier risk classification for command execution; IronClaw is implementing shared HTTP Egress for WASM; and CoPaw patched a critical Windows file traversal vulnerability.
*   **Local LLM and Provider Routing:** Users want cheaper, local compute. NanoBot, NanoClaw, and Moltis are actively fixing connection timeouts and routing bugs for self-hosted models like Ollama, DeepSeek, and custom OpenAI-compatible endpoints.

## 5. Differentiation Analysis
*   **Architectural Languages:** The ecosystem is split between Python/Node.js hybrids (NanoBot, PicoClaw, CoPaw) and systems-level languages. NullClaw stands out by utilizing Zig for extreme performance, while IronClaw is heavily investing in a WASM-based host runtime for isolated execution.
*   **Target Users:** CoPaw and LobsterAI are explicitly targeting enterprise corporate users, focusing heavily on platforms like DingTalk, WeCom, and Feishu. Conversely, NanoBot and NanoClaw target individual hackers and tinkerers, prioritizing lightweight edge deployments (e.g., Android/Termux, Raspberry Pi).
*   **Autonomous vs. Reactive:** Hermes Agent is pushing the boundary of "self-healing" AI with its v0.12.0 Curator update, attempting to allow the agent to maintain itself in the background. Most other projects (Moltis, ZeroClaw) remain in a "reactive" phase, focusing on user-prompted workflows and better dashboard observability.

## 6. Community Momentum & Maturity
Projects naturally fall into distinct tiers of momentum:
*   **Hyper-Growth / High Velocity:** **Moltis**, **CoPaw**, **ZeroClaw**, and **NanoClaw** are merging double-digit PRs daily, rapidly shipping features, and responding to bugs within 24 hours.
*   **Stabilizing / High Triage:** **OpenClaw**, **Hermes Agent**, and **PicoClaw** have large, active communities but are currently bogged down by high-severity performance regressions and API stability issues.
*   **Architectural Reworks:** **IronClaw** is undergoing a massive "Reborn" infrastructure migration, while **NullClaw** is navigating a complex language migration (Zig 0.16).
*   **Stagnant / Bottlenecked:** **LobsterAI** is struggling with a maintainer review bottleneck, leaving critical security patches unmerged. **TinyAGI** and **ZeptoClaw** appear to be dormant or abandoned.

## 7. Trend Signals
*   **Local Model Integration is the Primary Friction Point:** Across the board, standardizing connections to local models (Ollama, vLLM) is generating the most user friction. Developers must build better auto-discovery, longer timeouts for large models, and seamless failover routing.
*   **Multi-Agent Identity and Memory Management:** As agents interact in groups (A2A), "identity confusion" and memory loss are rampant (e.g., CoPaw's DingTalk issue). Developers need to build robust session isolation and persistent memory subsystems (IronClaw's Reborn memory initiative directly addresses this).
*   **The Rise of Agent-Initiated Workflows:** Users are no longer satisfied with chat-on-demand. There is a massive push for agents to initiate actions autonomously via cron jobs, webhooks, and background processes. However, executing these without leaking memory or freezing main threads is the next major engineering hurdle for the industry.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-01

## 1. Today's Overview
NanoBot demonstrated robust and highly active community engagement over the past 24 hours, processing 15 issues and 27 pull requests. While there is currently a backlog of open PRs (18 open vs. 9 merged/closed), the incoming contributions are predominantly high-quality, feature-rich proposals and targeted bug fixes from a diverse pool of contributors. The project's immediate focus appears to be heavily centered on refining channel integrations (specifically Matrix, Feishu, and the OpenAI-compatible API gateway) and enhancing multi-agent/multi-tenant capabilities. Overall, the project's ecosystem is growing rapidly, though maintainers should ensure this rapid iteration doesn't outpace code review and architectural stability.

## 2. Releases
No new releases were published today. The project is currently sitting on version `v0.1.5.post3`.

## 3. Project Progress
Merged and closed PRs over the last 24 hours indicate steady progress in project hardening and cross-platform compatibility:
*   **Matrix Streaming Fix:** Two related PRs ([#3562](https://github.com/HKUDS/nanobot/pull/3562), [#3565](https://github.com/HKUDS/nanobot/pull/3565)) were closed/merged to resolve an issue where empty `reasoning_content` chunks (typically from DeepSeek) caused "empty message" spam in Matrix rooms.
*   **Cross-Platform Stability:** PR [#3550](https://github.com/HKUDS/nanobot/pull/3550) was merged to replace POSIX-only `/tmp/...` paths in documentation with portable equivalents, improving the Windows developer experience. 
*   **Line Ending Standardization:** PR [#3556](https://github.com/HKUDS/nanobot/pull/3556) was merged to introduce a `.gitattributes` policy, pinning text files to LF to prevent cross-platform CRLF churn.

## 4. Community Hot Topics
The most actively discussed items revolve around architectural constraints and local model compatibility:
*   **"Ultra-lightweight" Claims & Node.js Bloat:** [Issue #660](https://github.com/HKUDS/nanobot/issues/660) (11 comments, 5 👍) remains a hot topic. Users are disputing the project's "ultra-lightweight" tag due to its requirement for both Python and Node.js environments. *Underlying need:* The community desires a leaner, purely Python-based core footprint for simpler deployment on resource-constrained devices.
*   **Ollama / Local Model Integration:** [Issue #603](https://github.com/HKUDS/nanobot/issues/603) (7 comments) highlights persistent user friction when configuring local LLMs (like Ollama via vLLM). *Underlying need:* Seamless, out-of-the-box local AI execution without complex API routing setups.
*   **Memory Loss in Group Chats:** [Issue #3546](https://github.com/HKUDS/nanobot/issues/3546) (6 comments) sparked significant discussion regarding Feishu channel limitations. Users are frustrated by forced `reply_in_thread` behavior and the agent losing conversational context when threads are disabled. 

## 5. Bugs & Stability
Several bugs were reported today, with immediate fix PRs already proposed by the community:
*   **High Severity - API Streaming Premature Termination:** The OpenAI-compatible `/v1/chat/completions` endpoint drops the SSE stream prematurely during tool-backed requests. (Issue [#3551](https://github.com/HKUDS/nanobot/issues/3551), Fix PR: [#3555](https://github.com/HKUDS/nanobot/pull/3555)).
*   **Medium Severity - DeepSeek Reasoning Mode Error:** On Windows `v0.1.5.post3`, using the `exec` tool with DeepSeek-V4 triggers a `reasoning_content must be passed back` error. (Issue [#3554](https://github.com/HKUDS/nanobot/issues/3554), Fix PR: [#3560](https://github.com/HKUDS/nanobot/pull/3560)).
*   **Medium Severity - Matrix Channel Replay Bug:** The Matrix channel re-reads and processes old messages upon startup or restart, causing infinite loops. (Issue [#3553](https://github.com/HKUDS/nanobot/issues/3553)).
*   **Low Severity - MSTeams and Windows Paths:** A Windows-specific `OSError [WinError 123]` was fixed for Matrix file paths (Issue [#3506](https://github.com/HKUDS/nanobot/issues/3506)), and stale MSTeams conversation refs were addressed (Issue [#3433](https://github.com/HKUDS/nanobot/issues/3433)).

## 6. Feature Requests & Roadmap Signals
Today's open PRs and issues signal strong community demand for the following enhancements, likely shaping the next version's roadmap:
*   **Multi-Agent & Plugin Ecosystem:** PR [#3564](https://github.com/HKUDS/nanobot/pull/3564) introduces a typed-event `HookCenter` system allowing external developers to distribute hooks via standard Python entry points. Additionally, PR [#3461](https://github.com/HKUDS/nanobot/pull/3461) proposes a file-system-based "mailbox" channel for inter-agent communication.
*   **Improved Observability:** PR [#3173](https://github.com/HKUDS/nanobot/pull/3173) aims to integrate OpenTelemetry tracing for LLM calls and tool executions, supporting Langfuse and LangSmith.
*   **User-Aware Context:** To solve the multi-user group chat amnesia, PR [#3552](https://github.com/HKUDS/nanobot/pull/3552) and PR [#3549](https://github.com/HKUDS/nanobot/pull/3549) propose injecting sender identities directly into the LLM runtime context.
*   **LLM Router Support:** PR [#3568](https://github.com/HKUDS/nanobot/pull/3568) adds Manifest as a built-in provider gateway.

## 7. User Feedback Summary
Real-world user feedback highlights both the excitement and the growing pains of the platform:
*   **Pain Points:** Users deploying NanoBot in multi-tenant environments (like Discord or corporate Feishu groups) express frustration over the lack of session context awareness and proactive messaging capabilities. Cron jobs and automations frequently "forget" their session history (Issue [#3484](https://github.com/HKUDS/nanobot/issues/3484)). Furthermore, WebSockets are currently failing to replace webhooks for proactive agent-initiated messages (Issue [#3559](https://github.com/HKUDS/nanobot/issues/3559)).
*   **Agent Behavior:** Users noted that local/smaller models easily get trapped in endless tool-calling loops (Issue [#2298](https://github.com/HKUDS/nanobot/issues/2298)), and that standard safety blocks (like preventing `rm -rf`) can be bypassed by the AI (Issue [#979](https://github.com/HKUDS/nanobot/issues/979)). 
*   **Satisfaction:** Despite bugs, the community is highly engaged. The willingness of users to submit complex architectural PRs (like HookCenter and OTel tracing) indicates a sophisticated, invested user base that values the project's extensibility.

## 8. Backlog Watch
The following critical items require maintainer attention to prevent community friction:
*   **[Issue #660](https://github.com/HKUDS/nanobot/issues/660):** The Node.js bloat issue has been open since February. Maintainers should formally address the "ultra-lightweight" branding or outline a roadmap to decouple the Node.js dependency.
*   **[PR #1385](https://github.com/HKUDs/nanobot/pull/1385) & [PR #3358](https://github.com/HKUDS/nanobot/pull/3358):** Crucial provider and configuration PRs (preserving reasoning tokens for OpenRouter, and adding model presets) have been open for over a month without merge signals.
*   **[Issue #970](https://github.com/HKUDS/nanobot/issues/970):** The hardcoded `max_iterations = 15` in the subagent loop silently breaks long-running tasks. This architectural limitation needs an official configurable parameter.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-01

## 1. Today's Overview
Hermes Agent is experiencing a massive surge in development and community engagement, marked by the release of the milestone **v0.12.0 ("The Curator")**. The project saw 50 issues and 50 pull requests updated in the last 24 hours alone, indicating highly active iteration from both core maintainers and the broader community. The new release introduces autonomous background maintenance capabilities, representing a major leap toward self-healing and self-managing AI agents. However, the high volume of open P1/P2 bugs—particularly concerning provider crashes, gateway routing errors, and CLI freezing—suggests that users should approach the newest features with caution and ensure they monitor background processes closely.

## 2. Releases

### v0.12.0 ("The Curator") — April 30, 2026
- **Summary:** Dubbed "The Curator," this release enables Hermes Agent to maintain itself autonomously via a long-lived background process. It is a massive update, encompassing 1,096 commits, 550 merged PRs, and contributions from 217 community members.
- **Scale:** 1,270 files changed, 217,776 insertions.
- **Migration Notes:** The inclusion of autonomous background evolution and self-maintenance implies significant changes to core process management, background tooling, and potentially cron/gateway lifecycles. Users upgrading should thoroughly test their platform adapters and background daemons.

## 3. Project Progress
Eight pull requests were merged or closed today, showcasing active development in security, stability, and tooling enhancements:

- **Security & Hardening:** Enterprise security policy posture enforcement was added, constraining file write/patch operations via `write_safe_root` ([PR #18082](https://github.com/NousResearch/hermes-agent/pull/18082)). Additionally, internal background events were hardened to prevent instruction injection ([PR #18099](https://github.com/NousResearch/hermes-agent/pull/18099)).
- **Stability & Bug Fixes:** Fixes were merged for faster-whisper local STT language handling ([PR #5675](https://github.com/NousResearch/hermes-agent/pull/5675)) and a critical JSON serialization crash when persisting MCP OAuth state ([PR #5677](https://github.com/NousResearch/hermes-agent/pull/5677)).
- **Cron Recovery:** A fix to recover recurring jobs with a null `next_run_at` was implemented, preventing cron schedules from silently dying ([PR #5680](https://github.com/NousResearch/hermes-agent/pull/5680)).
- **Refactoring:** The built-in toolset registry was refactored to derive from a single source of truth, cleaning up technical debt ([PR #5666](https://github.com/NousResearch/hermes-agent/pull/5666)).

## 4. Community Hot Topics
The most heavily discussed issues and PRs reveal strong community demand for deeper integrations, multi-agent collaboration, and better memory recall:

- **Multi-Profile Collaboration Board ([Issue #16102](https://github.com/NousResearch/hermes-agent/issues/16102)):** With 13 comments, this RFC tracks a Kanban-style board for multi-profile collaboration. It shows a growing need for Hermes to manage complex, multi-agent workflows natively.
- **Slow Memory Initialization ([Issue #5726](https://github.com/NousResearch/hermes-agent/issues/5726)):** 5 comments. The Honcho memory provider blocks startup for 60s+ per step. Users are highly frustrated by the 2+ minute boot times.
- **Linear Platform Adapter ([Issue #5826](https://github.com/NousResearch/hermes-agent/issues/5826)):** 3 👍 reactions. Strong demand for Hermes to integrate directly into Linear for bug tracking and project management.
- **Autonomous Evolution Engine ([PR #18096](https://github.com/NousResearch/hermes-agent/pull/18096) / [Issue #18092](https://github.com/NousResearch/hermes-agent/issues/18092)):** A community-driven attempt to introduce a production-grade "GASP loop" for recursive model self-improvement.

## 5. Bugs & Stability
Several high-severity bugs were reported today, impacting core functionality across providers and platforms:

1. **P1: CLI Input Completely Freezes ([Issue #17959](https://github.com/NousResearch/hermes-agent/issues/17959)):** Hermes CLI becomes entirely unresponsive, requiring a forced terminal kill. No known fix PR yet.
2. **P1: DeepSeek V4 Pro Gateway Crash Loop ([Issue #16677](https://github.com/NousResearch/hermes-agent/issues/16677)):** Using DeepSeek V4 Pro via OpenRouter causes the entire gateway (and Telegram bot) to crash loop.
3. **P1: Transient 401 Blacklists Credentials ([Issue #5668](https://github.com/NousResearch/hermes-agent/issues/5668)):** A brief API outage causes Hermes to blacklist API keys for 24 hours, breaking single-key setups.
4. **P1: Matrix Integration ImportError ([Issue #17648](https://github.com/NousResearch/hermes-agent/issues/17648)):** Matrix messages fail with `ImportError: cannot import name 'cfg_get'`.
5. **P2: Background Process Slack Leaks ([Issue #18101](https://github.com/NousResearch/hermes-agent/issues/18101)):** Background task updates are leaking into the wrong Slack threads.
6. **P2: `delegate_task` Ignores Subagent Model ([Issue #11999](https://github.com/NousResearch/hermes-agent/issues/11999)):** Closed today, noting that subagents always inherit the parent model, ignoring config.

## 6. Feature Requests & Roadmap Signals
Key user-driven feature requests indicate where the project is heading next:

- **Autonomous Evolution & GASP Loop ([Issue #18092](https://github.com/NousResearch/hermes-agent/issues/18092)):** Building upon "The Curator" release, the community wants deeper autonomous self-improvement loops.
- **File Uploads in Browser Tool ([Issue #18056](https://github.com/NousResearch/hermes-agent/issues/18056)):** Exposing the `upload` command for `input[type=file]` elements. This is a highly anticipated feature for agents interacting with modern web apps.
- **Webhook Event Filtering ([Issue #18041](https://github.com/NousResearch/hermes-agent/issues/18041)):** Per-route sender/event-type denylists for webhooks. Crucial for enterprise deployments filtering out CI noise.
- **Synchronous Memory Recall ([Issue #5820](https://github.com/NousResearch/hermes-agent/issues/5820)):** Allowing optional synchronous recall for current turn context to prevent irrelevant memory fetching.
- **Cursor CLI Skill ([PR #18091](https://github.com/NousResearch/hermes-agent/pull/18091)):** Adding Cursor's headless agent CLI as an optional skill for coding delegation.

## 7. User Feedback Summary
Users are genuinely excited about the direction of autonomous agents and the broad platform support (Telegram, Slack, Matrix, Discord). However, there is notable dissatisfaction regarding performance bottlenecks and platform stability:
- **Performance:** Users report extreme frustration with long startup times caused by the Honcho memory provider ([Issue #5726](https://github.com/NousResearch/hermes-agent/issues/5726)) and slow `session_search` on long contexts ([Issue #16671](https://github.com/NousResearch/hermes-agent/issues/16671)).
- **Migration Friction:** The OpenClaw migration tool is currently dropping WhatsApp configs and appending duplicate providers, frustrating users trying to switch tooling ([Issue #18097](https://github.com/NousResearch/hermes-agent/issues/18097)).
- **Reliability:** The CLI completely freezing ([Issue #17959](https://github.com/NousResearch/hermes-agent/issues/17959)) is a severe usability blocker that breaks trust for daily users.

## 8. Backlog Watch
Several important issues and PRs remain open and require immediate maintainer attention:

- **Honcho Memory Blocking Startup ([Issue #5726](https://github.com/NousResearch/hermes-agent/issues/5726)):** Open since April 7. The 60s+ blocking initialization severely degrades the user experience.
- **Transient 401 API Blacklisting ([Issue #5668](https://github.com/NousResearch/hermes-agent/issues/5668)):** Open since April 6. A 24-hour lockout for a transient glitch is critical for production reliability.
- **Telegram Silent Failures on Cold Boot ([Issue #5729](https://github.com/NousResearch/hermes-agent/issues/5729)):** Open since April 7. Affects systemd/launchd users.
- **Expanding OpenViking Memory Tools ([PR #5643](https://github.com/NousResearch/hermes-agent/pull/5643)):** Open since April 6. A large feature PR with no recent maintainer feedback.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-05-01

## 1. Today's Overview
PicoClaw demonstrated exceptionally high community engagement and development velocity over the past 24 hours, logging 37 active issues and 38 pull requests. The project remains in a highly active phase, with a strong focus on expanding multi-channel integrations (like Slack and WhatsApp) and hardening the Model Context Protocol (MCP) tooling infrastructure. The release of version v0.2.8 introduces significant command-line interface improvements for MCP management, indicating a strategic push toward better local tool orchestration. However, the high volume of open bug reports related to channel routing, provider configurations, and platform-specific errors suggests the core architecture is experiencing growing pains as it scales to support diverse user environments.

## 2. Releases
**v0.2.8** 
*   **Changes:** This release heavily iterates on the MCP toolchain, introducing dedicated CLI commands (`show`, `add`, `list`, `remove`, `test`, `edit`) for managing MCP servers directly from the terminal. It also includes a critical fix for MCP tool calls where an empty object is now sent instead of null, resolving compatibility issues with Zod-based validation servers.
*   **Migration Notes:** Developers utilizing MCP tools should update to v0.2.8 immediately to benefit from the new management commands and prevent null-argument execution failures. 

**Nightly: v0.2.8-nightly.20260430**
*   Automated build based on the main branch; use with caution in production environments.

## 3. Project Progress
Out of the 38 pull requests updated today, 6 were merged or closed, showing active gatekeeping by the maintainers. 
*   **MCP Infrastructure:** Merged PRs directly contributed to the v0.2.8 release ([PR #2460](https://github.com/sipeed/picoclaw/pull/2460)), ensuring the `fix(mcp): send empty object instead of nil` patch landed successfully.
*   **Security & Configuration:** Progress was made on configuration security ([PR #2270](https://github.com/sipeed/picoclaw/pull/2270)) to fix panics when handling `SecureString` values.
*   **Dependencies:** Maintainers merged two Dependabot PRs updating AWS SDK and Larksuite (Feishu) SDK dependencies, ensuring the codebase stays current and secure. 

## 4. Community Hot Topics
The most actively discussed items revolve around multi-model support, API limits, and enterprise channel integrations:
*   **API Key Rotation:** [Issue #2408](https://github.com/sipeed/picoclaw/issues/2408) (10 comments) proposes a "Cartridge-Belt" feature for stacking LLM API keys to auto-rotate on rate limits. This highlights a strong user need for high-availability setups without manual intervention.
*   **Ollama Cloud & Custom Auth:** [Issue #2225](https://github.com/sipeed/picoclaw/issues/2225) (9 comments) and [Issue #2169](https://github.com/sipeed/picoclaw/issues/2169) (4 comments) show users struggling to connect self-hosted or cloud Ollama instances due to missing credential fields and lack of support for dual-HEAD authentication (two authorization headers).
*   **OpenAI Responses API:** [Issue #2171](https://github.com/sipeed/picoclaw/issues/2171) (9 comments) discusses refactoring OpenAI endpoints from Chat Completions to the Responses API, indicating the community's desire to keep pace with upstream OpenAI standards.
*   **Channel Routing & Streaming:** [PR #2587](https://github.com/sipeed/picoclaw/pull/2587) and [PR #2719](https://github.com/sipeed/picoclaw/pull/2719) are driving heavy interest regarding web chat streaming and adding Slack webhook outputs, underscoring the demand for robust multi-channel communication.

## 5. Bugs & Stability
Several critical stability and platform-specific bugs were reported or actively discussed today:
*   **High Severity - Multi-Channel Cross-Talk:** [Issue #2446](https://github.com/sipeed/picoclaw/issues/2446) reports that in multi-channel setups, a pending task in one channel can cause a new message in another channel to echo the user's message instead of processing it. *(No linked fix PR yet)*.
*   **High Severity - Windows Compatibility:** [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) reveals that `list_dir` fails on Windows due to backslash path separators being passed to Go's strict `fs.FS`. *(No linked fix PR yet)*.
*   **High Severity - Cron Execution:** [Issue #2468](https://github.com/sipeed/picoclaw/issues/2468) details scheduled tasks failing due to "internal channels" restrictions.
*   **Medium Severity - Security/Environment:** [Issue #2377](https://github.com/sipeed/picoclaw/issues/2377) warns of unsafe terminal control characters in `exec` and logs. [Issue #2438](https://github.com/sipeed/picoclaw/issues/2438) points out a misleading `PICOCLAW_GATEWAY_TOKEN` env var that doesn't actually secure the WebSocket channel.
*   **Fix PRs Available:** Fortunately, the community is actively addressing issues. [PR #2270](https://github.com/sipeed/picoclaw/pull/2270) fixes SecureString panics, and [PR #2504](https://github.com/sipeed/picoclaw/pull/2504) fixes corrupted Opus frame data in the OGG decoder for Discord.

## 6. Feature Requests & Roadmap Signals
Based on current trends, the next iteration of PicoClaw will likely focus on enhanced context management and channel extensibility:
*   **Context Memory Systems:** [Issue #2515](https://github.com/sipeed/picoclaw/issues/2515) requests integration with providers like mem0 and Supermemory to give the agent persistent, tunable memory.
*   **Seahorse Configurability:** [Issue #2527](https://github.com/sipeed/picoclaw/issues/2527) asks to make the context tail size configurable rather than hardcoded, pointing to users needing fine-grained control over token usage.
*   **Email/Scheduled Outputs:** [Issue #2465](https://github.com/sipeed/picoclaw/issues/2465) requests SMTP channel support for sending scheduled task results (e.g., weekly reports).
*   **OAuth 2.1 for MCP:** [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546) proposes a dashboard UI to easily add OAuth 2.1 + PKCE protected MCP servers, mirroring the UX of proprietary clients like Claude.ai.

## 7. User Feedback Summary
Users are enthusiastic about PicoClaw's lightweight nature and versatility, particularly deploying it on edge devices like Raspberry Pis and Android TV boxes. However, there is notable friction regarding workspace safety constraints—users frequently report "Command blocked by safe directory" errors ([Issue #2519](https://github.com/sipeed/picoclaw/issues/2519)) when the AI attempts to read from `/tmp` or other standard OS directories. Furthermore, Chinese users are requesting better localized support for Feishu ([Issue #2580](https://github.com/sipeed/picoclaw/issues/2580)), asking for features like streaming output and embedded cards similar to the official Feishu bot experience. 

## 8. Backlog Watch
Maintainers should direct their attention to several critical, long-stale PRs and issues that are piling up:
*   **Stale Core PRs:** [PR #2313](https://github.com/sipeed/picoclaw/pull/2313) (Multi-User Support & Security Hardening) and [PR #2587](https://github.com/sipeed/picoclaw/pull/2587) (Streaming Web Chat) are massive in scope and have been active for weeks. They need final reviews to progress the platform's core capabilities.
*   **WhatsApp Native Defects:** [Issue #2540](https://github.com/sipeed/picoclaw/issues/2540) and [Issue #2541](https://github.com/sipeed/picoclaw/issues/2541) detail compounded defects in the `whatsapp_native` channel (silently dropping messages and breaking group triggers). Given WhatsApp's popularity, this needs urgent maintainer triage.
*   **Provider Auth Refactoring:** [Issue #2280](https://github.com/sipeed/picoclaw/issues/2280) highlights a fundamental startup crash when utilizing SiliconFlow via QQ channels. This requires architectural clarification on how API keys are validated during initialization.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-01

## 1. Today's Overview
NanoClaw is experiencing a period of exceptionally high development velocity, evidenced by 50 pull requests updated in the last 24 hours, 38 of which were merged or closed. The maintainers and contributors are heavily focused on refining the setup experience, expanding channel adapter capabilities, and hardening the OpenCode provider integration. However, this rapid iteration has introduced a series of high-severity bugs in the newer `providers` branch, alongside the closure of critical security vulnerabilities. Overall, project health is robust and highly active, though it requires careful bug triage to ensure the new provider architecture stabilizes.

## 2. Releases
**No new releases** were published today. The high volume of merged PRs appears to be building toward a future release candidate.

## 3. Project Progress
Significant forward progress was made today across the codebase, with 38 PRs merged/closed. Key advancements include:
*   **Setup Flow Overhaul:** A massive stack of PRs (e.g., [#2145](https://github.com/qwibitai/nanoclaw/pull/2145), [#2146](https://github.com/qwibitai/nanoclaw/pull/2146), [#2154](https://github.com/qwibitai/nanoclaw/pull/2154), [#2157](https://github.com/qwibitai/nanoclaw/pull/2157)) significantly improved the first-time setup experience, introducing headless browser detection, per-step environment variable configuration, and a new splash screen ([#2158](https://github.com/qwibitai/nanoclaw/pull/2158)). Additionally, a safety gate was added to prevent running setup as the root user ([#2155](https://github.com/qwibitai/nanoclaw/pull/2155)).
*   **Channel Adapters:** The Telegram adapter was updated to wire up message splitting ([#2112](https://github.com/qwibitai/nanoclaw/pull/2112)), and the channel-approval flow was enriched with agent selection and naming capabilities ([#2105](https://github.com/qwibitai/nanoclaw/pull/2105), [#2107](https://github.com/qwibitai/nanoclaw/pull/2107)). Support for Signal outbound file attachments was also merged ([#2040](https://github.com/qwibitai/nanoclaw/pull/2040)).
*   **Core Scheduling & Routing:** Fixes were applied to the poll loop to correctly handle task message deferrals ([#2033](https://github.com/qwibitai/nanoclaw/pull/2033)), apply pre-task scripts to follow-up injections ([#2114](https://github.com/qwibitai/nanoclaw/pull/2114)), and preserve routing information in scheduled tasks ([#2142](https://github.com/qwibitai/nanoclaw/pull/2142)).

## 4. Community Hot Topics
*   **Security Vulnerabilities:** The most notable community engagement today was the closure of two critical security issues. Issue [#457](https://github.com/qwibitai/nanoclaw/issues/457) addressed a severe container command injection vulnerability in `stopContainer()`, and Issue [#458](https://github.com/qwibitai/nanoclaw/issues/458) tackled unrestricted network access in agent containers that allowed potential data exfiltration.
*   **OpenCode Provider Reliability:** Contributor `glifocat` has been highly active, submitting multiple deeply analyzed bug reports regarding the new OpenCode provider (Issues [#2150](https://github.com/qwibitai/nanoclaw/issues/2150), [#2149](https://github.com/qwibitai/nanoclaw/issues/2149), [#2148](https://github.com/qwibitai/nanoclaw/issues/2148)). This signals strong community interest in local/self-hosted model support, which currently appears to be blocked by hardcoded timeouts and context-passing bugs.

## 5. Bugs & Stability
Several high-severity bugs were reported today, largely concentrated in the `providers` branch and scheduled task handling:
1.  **[Critical] Host Sweep Lockout** ([#2147](https://github.com/qwibitai/nanoclaw/issues/2147)): Orphaned `processing_ack` rows survive the kill-ceiling, causing an instant SIGKILL loop that locks users out of message processing until manual DB intervention. *No fix PR is noted yet.*
2.  **[High] OpenCode Context Loss** ([#2150](https://github.com/qwibitai/nanoclaw/issues/2150)): The OpenCode provider sends literal `@./...md` lines instead of the actual file contents, causing the agent to operate silently without instructions.
3.  **[High] Process Leak** ([#2148](https://github.com/qwibitai/nanoclaw/issues/2148)): `proc.kill('SIGKILL')` leaks the underlying OpenCode binary, holding port 4096 hostage and compounding timeout failures.
4.  **[High] OneCLI Validation Failure** ([#2159](https://github.com/qwibitai/nanoclaw/issues/2159)): Agent group IDs with underscores (e.g., `ag_f249...`) are rejected by OneCLI's API, breaking container setups. *An open PR [#2160](https://github.com/qwibitai/nanoclaw/pull/2160) attempts a related fix to how `inbound.db` is read, but may not fully resolve the regex validation issue.*

## 6. Feature Requests & Roadmap Signals
*   **Local Model Support:** The flurry of fixes around the OpenCode provider signals a strong push to support local, self-hosted LLMs. Making the idle timeout configurable ([#2149](https://github.com/qwibitai/nanoclaw/issues/2149)) is a prerequisite for slower inference setups.
*   **Setup UX:** The sheer volume of setup improvements (headless detection, non-root enforcement, per-step `.env` loading) indicates that broadening self-hosted adoption is a current strategic priority. 
*   **IPC & Automation:** The merging of the "dota-feishu decision bridge via IPC" ([#2141](https://github.com/qwibitai/nanoclaw/pull/2141)) points to sophisticated enterprise use cases requiring inter-process and cross-platform decision automation.

## 7. User Feedback Summary
Users are actively testing the boundaries of NanoClaw in real-world scenarios, ranging from home accounting to multi-platform enterprise routing. A highly relevant user pain point was documented in Issue [#2139](https://github.com/qwibitai/nanoclaw/issues/2139): users processing multiple images (e.g., uploading receipts from a phone) are hitting unhandled `400 - invalid_request_error` API errors, resulting in hard bot failures. The community is generally engaged and submitting high-quality, deeply technical bug reports, showing a sophisticated user base invested in the project's stability.

## 8. Backlog Watch
*   **API Image Handling** ([#2139](https://github.com/qwibitai/nanoclaw/issues/2139)): Needs maintainer triage. Unhandled image API errors are causing complete agent breakdowns for end-users.
*   **Setup PATH injection** ([PR #2055](https://github.com/qwibitai/nanoclaw/pull/2055)): This open PR has been pending since April 27. It fixes a basic issue where `onecli` cannot be reached post-install, which is a blocker for fresh local setups.
*   **Local Admin Bootstrap** ([PR #2052](https://github.com/qwibitai/nanoclaw/pull/2052)): Similarly open since April 27, aiming to fix the local-vault first install experience. Both PRs require maintainer review to unblock the self-hosted community.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the project digest for NullClaw for 2026-05-01.

### 1. Today's Overview
NullClaw experienced highly focused development activity over the past 24 hours, primarily driven by a single core contributor addressing critical infrastructure bugs. While there were no new issues opened by the community and no new software releases, the maintainers actively managed 5 pull requests. The merged PRs indicate a concentrated effort to resolve high-severity regressions related to the recent Zig 0.16 migration. Overall project health appears stable but in a reactive patching phase, ensuring the AI agent gateway and networking layers remain robust. 

### 2. Releases
No new releases were published today.

### 3. Project Progress
Development today successfully advanced the platform's stability and security posture. Two significant pull requests were closed/merged:
*   **[CLOSED] PR #876: fix(compat): replace readSliceShort with readVec in Stream.read to unblock HTTP/1.1 keep-alive clients** - Resolved a critical networking bug where HTTP/1.1 keep-alive clients were being blocked due to how `readSliceShort()` handled stream buffers. 
*   **[CLOSED] PR #873: fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin** - A highly critical patch addressing two major regressions from the Zig 0.16 migration: a 100% CPU utilization busy-spin on the gateway thread and silent messaging failures for Mattermost-connected agents in production.

### 4. Community Hot Topics
There were no newly opened community issues today, and existing PRs currently hold undefined/zero comment metrics. However, based on the context provided in the recent PRs, the underlying need of the user base is clear: **reliable Mattermost integration and efficient resource management**. The patches indicate that production users rely heavily on Mattermost-connected agents and require HTTP/1.1 keep-alive support for efficient API polling. 

### 5. Bugs & Stability
Today's activity was heavily centered on triaging and resolving high-severity bugs affecting production instances. 
*   **Critical - 100% CPU Utilization & Silent Messaging Failure:** Affecting all Mattermost-connected agents since the Zig 0.16 migration. The gateway thread entered a busy-spin on EAGAIN, and POST requests silently failed due to a buffer allocation error. 
    *   *Status:* Fixed via [PR #873](https://github.com/nullclaw/nullclaw/pull/873).
*   **High - HTTP/1.1 Keep-Alive Blocking:** `Stream.read()` in the compatibility layer blocked clients like `curl` because it waited for a full buffer or `EndOfStream` before breaking.
    *   *Status:* Fixed via [PR #876](https://github.com/nullclaw/nullclaw/pull/876).
*   **High - Accept Loop CPU Spin (POSIX):** `std_compat.thread.sleep()` was issuing cooperative yields at the IO-scheduler level rather than actually suspending the OS thread, causing CPU spin on POSIX targets.
    *   *Status:* Fix proposed in [PR #878](https://github.com/nullclaw/nullclaw/pull/878).
*   **Medium - Empty Body POSTs:** Related to the CPU spin above, `std.Io.Writer.Allocating` in Zig 0.16 did not flush buffers before the POST request was made.
    *   *Status:* Fix proposed in [PR #877](https://github.com/nullclaw/nullclaw/pull/877).

### 6. Feature Requests & Roadmap Signals
While not traditional feature requests, today's open PRs signal a strong roadmap focus on refining agent security and command execution policies.
*   **Granular Security Tiers:** [PR #875](https://github.com/nullclaw/nullclaw/pull/875) introduces a 3-tier risk classification for agent-executed commands. By moving network-accessible tools like `curl` and `wget` from a high-risk tier to a new medium-risk tier, the project is actively working to allow supervised agents to perform web requests safely. 
*   **Predicted Next Version Features:** The next release will likely feature an overhaul of the command-execution security matrix, alongside mandatory stability patches for HTTP keep-alive and Mattermost integrations.

### 7. User Feedback Summary
Implicit user feedback derived from the bug reports highlights significant pain points regarding the Zig 0.16 migration. Production users experienced "silent Mattermost messaging failures" and daemon resource hogging (100% CPU). On the security side, users have expressed friction with the previous binary risk classification, specifically noting that blocking `curl` entirely—even in supervised mode—hindered agent utility. The new 3-tier system directly addresses this dissatisfaction, allowing for more flexible, real-world AI agent workflows.

### 8. Backlog Watch
The following open PRs require final maintainer review and merging to restore full production stability for users:
*   [PR #878](https://github.com/nullclaw/nullclaw/pull/878) (Open): Needs review to ensure POSIX OS threads are properly suspended during sleep.
*   [PR #877](https://github.com/nullclaw/nullclaw/pull/877) (Open): Awaiting merge to permanently fix the Mattermost empty-body POST bug.
*   [PR #875](https://github.com/nullclaw/nullclaw/pull/875) (Open): Awaiting approval for the medium-risk command execution tier, which will close backlog [Issue #167](https://github.com/nullclaw/nullclaw/issues/167) related to exec-prefix stripping.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-05-01

## 1. Today's Overview
The IronClaw project is currently experiencing an exceptionally high velocity of architectural development, driven almost entirely by the massive "Reborn" initiative. Over the past 24 hours, the repository saw 23 active issues and 36 pull requests updated, with an impressive 20 PRs merged or closed. This heavy merge rate indicates that the core team is rapidly landing foundational substrate code. Activity is heavily dominated by core contributors (specifically `serrrfirat`), systematically landing interdependent stacked PRs to overhaul the agent's runtime, memory, and host environments without disrupting the mainline via a grouped integration strategy.

## 2. Releases
No new official releases were published today. The team is currently operating against the `reborn-integration` branch to land major architectural updates before merging them into the main production line.

## 3. Project Progress
The core team made massive strides in finalizing the lower substrate layers of the "Reborn" architecture, successfully merging several foundational "XL" and "L" sized PRs:
* **Reborn Memory & Storage:** Successfully landed the memory boundary and search seams ([PR #3078](https://github.com/nearai/ironclaw/pull/3078) and [PR #3079](https://github.com/nearai/ironclaw/pull/3079)), establishing the new `ironclaw_memory` crate.
* **Reborn Host Runtime:** Merged the initial contract facade for the host runtime ([PR #3095](https://github.com/nearai/ironclaw/pull/3095)), allowing upper layers to build against a stable API. 
* **Shared HTTP Egress:** [PR #3098](https://github.com/nearai/ironclaw/pull/3098) was merged, establishing a shared `RuntimeHttpEgress` for WASM and Script capabilities to handle DNS, SSRF, and policy checks centrally.
* **CI/Infra:** A staging-to-main promotion batch ([PR #3121](https://github.com/nearai/ironclaw/pull/3121)) was initiated, and canary issue creation was temporarily disabled via [PR #3119](https://github.com/nearai/ironclaw/pull/3119) to likely reduce noise during this heavy integration phase.
* **Testing:** Several vertical integration tests were merged, covering WASM runtime failure edges ([PR #3117](https://github.com/nearai/ironclaw/pull/3117)) and the CapabilityHost ([PR #3110](https://github.com/nearai/ironclaw/pull/3110)).

## 4. Community Hot Topics
* **Reborn Architecture Tracking ([Issue #2987](https://github.com/nearai/ironclaw/issues/2987)):** With 43 comments, this is the central hub of the project right now. It tracks the "Reborn" cutover strategy, demonstrating active, heavy collaboration on how to safely land a massive architectural overhaul without breaking existing users.
* **TUI Regression ([Issue #3103](https://github.com/nearai/ironclaw/issues/3103)):** A highly active QA issue (7 comments) reported by `fmotta`. Users are expressing immediate pain regarding High ASCII display breakages in the TUI across different TTYs, requesting an argument/flag to revert to previous rendering behavior. 
* **Integration Test Suite Debates ([Issue #3067](https://github.com/nearai/ironclaw/issues/3067)):** With 10 comments, the team is actively defining the scope of vertical-slice integration testing for the Reborn stack, ensuring that public entrypoints are validated without relying solely on crate-local unit tests.

## 5. Bugs & Stability
* **Live Canary Failures (High Severity):** Three automated canary issues were opened simultaneously against the `anthropic` provider ([Issue #3113](https://github.com/nearai/ironclaw/issues/3113), [Issue #3115](https://github.com/nearai/ironclaw/issues/3115), [Issue #3116](https://github.com/nearai/ironclaw/issues/3116)). This points to a current integration or API instability with Anthropic endpoints. *Note: Maintainers likely recognized this as an infra-noise issue and merged [PR #3119](https://github.com/nearai/ironclaw/pull/3119) to disable automated canary issue creation.*
* **Web IDE Auth Regression (Medium Severity):** [Issue #3108](https://github.com/nearai/ironclaw/issues/3108) reports that Web IDE-issued NEAR AI API keys are returning `401 "Session not found"` from the gateway. Standard instance-provisioned keys work fine, indicating a specific auth routing bug for the web IDE.
* **TUI Display Bug (Medium Severity):** [Issue #3103](https://github.com/nearai/ironclaw/issues/3103) notes that High ASCII breaks during scrolling on the new build. No fix PR is currently listed.

## 6. Feature Requests & Roadmap Signals
The roadmap is explicitly focused on the "Reborn" architecture, with several new features and epics opened today:
* **Native Reborn Memory Service ([Issue #3118](https://github.com/nearai/ironclaw/issues/3118)):** Supersedes older adapter patterns, aiming for a cleanly isolated memory subsystem.
* **Reborn Binary Split ([Issue #3069](https://github.com/nearai/ironclaw/issues/3069)):** The team plans to ship `ironclaw-reborn` as a standalone executable alongside the existing `ironclaw` binary to establish a safe product boundary.
* **Configuration-as-Code ([Issue #3036](https://github.com/nearai/ironclaw/issues/3036)):** An epic to replace the current messy mix of `.env` and JSON configurations with declarative tenant blueprints, providing a proper schema and audit trail.
* **Agent Loop Profiles ([Issue #3107](https://github.com/nearai/ironclaw/issues/3107)):** Introducing `AgentLoopDriver` to support multiple execution models (e.g., interactive chat vs. background routines) without bloating the kernel.
* **External Tools Support ([PR #3122](https://github.com/nearai/ironclaw/pull/3122)):** A highly anticipated feature allowing externally provided `function` typed tools on the Responses API, matching OpenAI’s wire shape for better SDK compatibility.

## 7. User Feedback Summary
Operators and users are actively struggling with configuration complexity and deployment environments:
* **Configuration Pain:** The explicit motivation behind [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) highlights that operators are frustrated by the current requirement to hand-edit `.env`, workspace docs, and settings JSON with no schema validation.
* **Headless/Home Lab Deployments:** [PR #3105](https://github.com/nearai/ironclaw/pull/3105) (submitted by a community member) highlights that users are running IronClaw on headless Ubuntu servers with local models (like Ollama Gemma4) and need better fallback logic for WASM channel setups, as Telegram polling fails during standard onboard behaviors. 
* **Cloud vs. Local Key inconsistencies:** The auth issue reported in [Issue #3108](https://github.com/nearai/ironclaw/issues/3108) shows users attempting to configure agents via the Web IDE and hitting friction when gateway routing rejects their keys.

## 8. Backlog Watch
* **The "Abound Demo" Mega-PR ([PR #1764](https://github.com/nearai/ironclaw/pull/1764)):** Open since late March, this massive PR adds the Responses API, credential injection, and a full Abound integration. It overlaps significantly with current Reborn architecture changes. Maintainers should clarify if this will be rebased onto the Reborn substrate or rendered obsolete.
* **Aliyun Provider & Near-Intents ([PR #1446](https://github.com/nearai/ironclaw/pull/1446), [PR #1479](https://github.com/nearai/ironclaw/pull/1479)):** Both are large, community-contributed PRs (open for over a month) that add new LLM providers and WASM tools. They appear stalled, likely waiting on core team bandwidth as the Reborn cutover takes priority.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-05-01

## 1. Today's Overview
LobsterAI is currently experiencing a high volume of background maintenance and feature development, evidenced by 12 active pull requests updated in the last 24 hours. However, the project is exhibiting signs of a review bottleneck, as none of these PRs have been merged or closed today, and all have been marked as `[stale]` after being open since late March. Activity on the issue tracker remains quiet, with only a single new integration bug reported by the community. Overall, the project's health appears stable but requires maintainer intervention to merge the substantial backlog of security, performance, and feature improvements into a release.

## 2. Releases
No new releases were recorded today. The repository has not issued a new version recently, meaning the significant bug fixes, performance optimizations, and security enhancements currently sitting in the open PR backlog remain unavailable to end-users.

## 3. Project Progress
There were no merged or closed PRs today. However, 12 open PRs saw activity, indicating ongoing contributor engagement or automated `stale` label updates. The pending PRs represent significant horizontal improvements to the application:
*   **Security Enhancements:** URL protocol validation ([PR #826](https://github.com/netease-youdao/LobsterAI/pull/826)), local file protocol path traversal fixes ([PR #828](https://github.com/netease-youdao/LobsterAI/pull/828)), and a comprehensive security environment scanning engine ([PR #842](https://github.com/netease-youdao/LobsterAI/pull/842)).
*   **Performance & Stability:** SQLite database parameter optimization ([PR #830](https://github.com/netease-youdao/LobsterAI/pull/830)), non-overlapping polling cycles ([PR #841](https://github.com/netease-youdao/LobsterAI/pull/841)), batch config writes ([PR #848](https://github.com/netease-youdao/LobsterAI/pull/848)), and a critical fix for main process crashes following window destruction ([PR #852](https://github.com/netease-youdao/LobsterAI/pull/852)).
*   **Feature Improvements:** Batch MCP server creation via JSON ([PR #835](https://github.com/netease-youdao/LobsterAI/pull/835)), per-channel model overrides for IM bots ([PR #838](https://github.com/netease-youdao/LobsterAI/pull/838)), and duplicate skill import prevention ([PR #827](https://github.com/netease-youdao/LobsterAI/pull/827), [PR #836](https://github.com/netease-youdao/LobsterAI/pull/836)).

## 4. Community Hot Topics
The only active issue today was [Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878), which addresses a UI/UX breakdown in the WeChat IM bot configuration. 
*   **Underlying Need:** The user reports that WeChat's latest authentication flow now requires inputting a 6-digit verification code after scanning a QR code. However, the LobsterAI client fails to prompt an input interface for this code, breaking the integration setup entirely. This highlights a need for the project to rapidly adapt to upstream API/UI changes in third-party IM platforms.

## 5. Bugs & Stability
*   **Severity: High** - [Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) & [PR #852](https://github.com/netease-youdao/LobsterAI/pull/852). The WeChat integration is currently broken for new setups due to the missing verification code UI. Additionally, unresolved main process crashes occur when asynchronous operations attempt to use destroyed window `event.sender` objects, severely impacting application stability.
*   **Severity: Medium** - [PR #828](https://github.com/netease-youdao/LobsterAI/pull/828) and [PR #826](https://github.com/netease-youdao/LobsterAI/pull/826). Unpatched path traversal and malicious URL protocol vulnerabilities exist in the current release, though they require user interaction to exploit.
*   **Severity: Low** - [PR #847](https://github.com/netease-youdao/LobsterAI/pull/847). A minor rendering bug where single tildes (e.g., temperature ranges like 11~21°C) are incorrectly rendered as strikethrough text.

## 6. Feature Requests & Roadmap Signals
The open PRs strongly signal the project's strategic direction, focusing heavily on enterprise readiness and multi-modal deployment:
*   **Advanced IM Integrations:** [PR #838](https://github.com/netease-youdao/LobsterAI/pull/838) introduces granular control for IM bots, allowing per-channel model assignment. This is crucial for cost management and deploying specialized models across platforms like Discord, Telegram, and DingTalk.
*   **Frictionless Onboarding:** [PR #835](https://github.com/netease-youdao/LobsterAI/pull/835) allows users to paste JSON configurations to batch-create MCP servers, drastically reducing setup time for power users migrating from tools like Claude Desktop.
*   **Enterprise Security Controls:** [PR #842](https://github.com/netease-youdao/LobsterAI/pull/842) introduces a system-wide security scanner and granular permission management for installed Skills, indicating an upcoming focus on safe extensibility.

## 7. User Feedback Summary
User feedback today points directly to friction during production deployment. The WeChat configuration bug ([Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878)) reveals dissatisfaction with third-party integration reliability—a common pain point for users relying on AI agents as cross-platform communicators. While no positive feedback was explicitly recorded today, the continuous community submissions addressing Markdown rendering, skill duplication, and database optimizations reflect an active, developer-heavy user base that utilizes the tool daily in diverse technical environments.

## 8. Backlog Watch
The most critical item requiring immediate maintainer attention is the backlog of `[stale]` security and stability PRs.
*   **Main Process Crash Fix:** [PR #852](https://github.com/netease-youdao/LobsterAI/pull/852) has been open since March 25 and addresses a severe reliability issue. 
*   **Security Vulnerabilities:** [PR #828](https://github.com/netease-youdao/LobsterAI/pull/828) (Path Traversal) and [PR #826](https://github.com/netease-youdao/LobsterAI/pull/826) (URL Protocol) are critical security patches currently languishing in the stale queue.
*   **Duplicate Efforts:** Maintainers should review [PR #827](https://github.com/netease-youdao/LobsterAI/pull/827) and [PR #836](https://github.com/netease-youdao/LobsterAI/pull/836), as both attempt to solve the exact same skill duplication problem but utilize different approaches (name comparison vs. content fingerprinting). A decision should be made to merge one and close the other to streamline the backlog.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-05-01

## 1. Today's Overview
The Moltis project is experiencing a remarkably high-velocity development phase, characterized by a massive merging spree of **18 pull requests** in the last 24 hours, alongside the release of version `20260430.01`. The maintainers are clearly executing a significant push to expand the AI assistant's capabilities, officially merging foundational support for new LLM providers (DeepInfra, Google Gemini), native SDKs, and new interaction channels. With only one newly opened issue remaining unresolved and an exceptionally high issue-closure rate, the project is demonstrating robust health, rapid responsiveness to community bug reports, and strong forward momentum.

## 2. Releases
- **[20260430.01](https://github.com/moltis-org/moltis/releases/tag/20260430.01)**: Released on April 30, 2026. 
  *Note: Specific official release notes were not attached to the tag, but this version presumably bundles the massive influx of features, bug fixes, and dependency updates merged today.*

## 3. Project Progress
Today saw the closure/merging of 18 PRs, signaling the finalization of major feature branches:
- **New Providers & SDKs:** Native [Google Gemini support (#33)](https://github.com/moltis-org/moltis/pull/33) and [DeepInfra support with GPU passthrough (#934)](https://github.com/moltis-org/moltis/pull/934) were finally merged. Additionally, [first-party TypeScript, Python, and Go SDKs (#288)](https://github.com/moltis-org/moltis/pull/288) were introduced.
- **UX Enhancements:** The Web UI received [message action bars (#932)](https://github.com/moltis-org/moltis/pull/932) (Copy, Retry, Fork), and a [full terminal UI onboarding flow (#201)](https://github.com/moltis-org/moltis/pull/201) was merged.
- **Agent Intelligence:** [Automatic session title generation (#933)](https://github.com/moltis-org/moltis/pull/933) and [per-skill usage telemetry (#935)](https://github.com/moltis-org/moltis/pull/935) were implemented.
- **New Commands:** A suite of slash commands (`/btw`, `/fast`, `/insights`, `/steer`, `/queue`) was added via [PR #926](https://github.com/moltis-org/moltis/pull/926).

## 4. Community Hot Topics
- **Chat Scrolling Regression:** [Issue #922](https://github.com/moltis-org/moltis/issues/922) (3 comments) highlighted a frustrating UX regression where users couldn't scroll up during streaming. This was actively resolved via [PR #925](https://github.com/moltis-org/moltis/pull/925), which removed an aggressive `ResizeObserver`.
- **Universal AI Router Request:** [Issue #266](https://github.com/moltis-org/moltis/issues/266) (2 comments) remains a point of discussion. User `M2noa` requested native support for 9router, an AI proxy translating requests between providers, indicating a strong user need for highly portable, multi-provider workflows.
- **Infrastructure Migration:** [PR #259](https://github.com/moltis-org/moltis/pull/259) shows the project transitioning its GitHub Actions to Blacksmith runners, indicating a focus on improving CI/CD speed and developer productivity.

## 5. Bugs & Stability
The team exhibited excellent triage response times today, fixing several bugs within 24 hours of their reporting:
1. **[CRITICAL] Model Discovery Timeout:** Local LLM users with large models (100B+) experienced failed discovery due to a 30-second timeout. *Fixed by [PR #931](https://github.com/moltis-org/moltis/pull/931) replacing completion-based probes with a lightweight catalog check.*
2. **[HIGH] Graceless Docker Shutdowns:** Unhandled SIGTERM signals caused issues in containerized environments. *Fixed by [PR #940](https://github.com/moltis-org/moltis/pull/940), ensuring proper draining of browser pools and mDNS unregistration.*
3. **[MEDIUM] Insecure Context Clipboard Failure:** Self-hosted HTTP users couldn't use copy buttons. *Fixed by [PR #936](https://github.com/moltis-org/moltis/pull/936) adding a secure fallback utility.*
4. **[MEDIUM] MCP OAuth Token Re-authentication:** Expired tokens caused invisible auth failures. *Fixed by [PR #930](https://github.com/moltis-org/moltis/pull/930) preserving the error state.*
5. **[LOW] UI Overflow:** Text spilling out of the system-notice container. *Fixed by [PR #941](https://github.com/moltis-org/moltis/pull/941).*

*Open Bug:* [Issue #937](https://github.com/moltis-org/moltis/issues/937) reports a `tmux` error in the settings/terminal interface and currently awaits a response.

## 6. Feature Requests & Roadmap Signals
The volume of merged features points toward a highly ambitious roadmap:
- **AI-Driven QoL:** Auto-labeling sessions ([PR #197](https://github.com/moltis-org/moltis/pull/197)) and auto-titling ([PR #933](https://github.com/moltis-org/moltis/pull/933)) show a push towards autonomous session management.
- **Telephony Integration:** The open [PR #920](https://github.com/moltis-org/moltis/pull/920) (Twilio phone call support) indicates Moltis is expanding beyond text-based web/UI interfaces into real-time voice.
- **Code Indexing:** [PR #921](https://github.com/moltis-org/moltis/pull/921) introduces auto-triggering code indexing upon project changes, setting the stage for Moltis to act as a deeply integrated coding agent.

## 7. User Feedback Summary
**Pain Points:** Self-hosters running local LLMs (llama.cpp, vllm) or deploying via plain HTTP LAN connections frequently encounter infrastructure friction, as seen in [#919](https://github.com/moltis-org/moltis/issues/919) and [#936](https://github.com/moltis-org/moltis/pull/936). Additionally, users operating Moltis within Docker containers experienced state corruption due to improper container stop sequences.
**Satisfaction:** Despite these bugs, user satisfaction remains high. The rapid resolution of bugs (often within 24 hours) and the active implementation of highly-requested features (like the action bar and provider support) reflect a development team closely aligned with its power-user base.

## 8. Backlog Watch
- **[PR #920 - feat(telephony): add phone call support via Twilio](https://github.com/moltis-org/moltis/pull/920)**: This is a massive architectural addition that remains open. Given its complexity and the fact it hasn't been updated today (unlike 18 other PRs), it requires maintainer review to assess security and integration impacts.
- **[Issue #937 - settings/terminal tmux error](https://github.com/moltis-org/moltis/issues/937)**: The only open bug updated today. As it affects terminal UI configuration, it should be prioritized to ensure a smooth onboarding experience for CLI users.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-05-01

## 1. Today's Overview
The CoPaw (QwenPaw) project demonstrates exceptionally high development velocity and robust community engagement today. With 50 issues updated (66% closed) and 16 pull requests updated (87.5% merged), the maintainers are actively resolving user pain points and merging community contributions. The release of `v1.1.5.post1` underscores a strong focus on patching security vulnerabilities and stabilizing multi-channel integrations, particularly for enterprise workflows. Overall, the project is in a highly active and healthy state, successfully balancing rapid feature iteration with critical stability fixes.

## 2. Releases
**[v1.1.5.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5.post1)**
This patch release focuses on security hardening and channel UX improvements:
*   **Security Fix:** Introduced a restriction to reject absolute static file paths, mitigating an arbitrary file traversal vulnerability on Windows servers ([PR #3973](https://github.com/agentscope-ai/QwenPaw/pull/3973), Fixes [Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)).
*   **Feishu Channel Upgrade:** Introduced `FeishuCardHandler` and upgraded `tool_guard` approvals from text-command flows to one-click interactive buttons ([PR #3941](https://github.com/agentscope-ai/QwenPaw/pull/3941)).

## 3. Project Progress
Development today was heavily focused on stabilizing enterprise channels (WeCom/WeChat, Feishu) and improving the Web Console UX. 14 PRs were merged/closed:
*   **WeCom/WeChat Stability:** Resolved critical asyncio cross-loop runtime errors that caused file uploads and streams to fail ([PR #3300](https://github.com/agentscope-ai/QwenPaw/pull/3300), [PR #3978](https://github.com/agentscope-ai/QwenPaw/pull/3978)). Fixed a bug where long agent responses resulted in a permanently stuck "Thinking..." state ([PR #3950](https://github.com/agentscope-ai/QwenPaw/pull/3950)), and fixed double-reconnect race conditions ([PR #3963](https://github.com/agentscope-ai/QwenPaw/pull/3963)). Added a `share_session_in_group` toggle ([PR #3948](https://github.com/agentscope-ai/QwenPaw/pull/3948)). An effort to unify WeChat/Weixin identifiers is currently under review ([PR #3605](https://github.com/agentscope-ai/QwenPaw/pull/3605)).
*   **Console UI Fixes:** Resolved an issue where navigating away from the chat page dropped active agent tasks and sessions ([PR #3958](https://github.com/agentscope-ai/QwenPaw/pull/3958), [PR #3959](https://github.com/agentscope-ai/QwenPaw/pull/3959)). Fixed UI line wrapping in tool call blocks ([PR #3960](https://github.com/agentscope-ai/QwenPaw/pull/3960)) and eliminated deprecated Ant Design v5 API warnings ([PR #3981](https://github.com/agentscope-ai/QwenPaw/pull/3981)). 

## 4. Community Hot Topics
The community is highly active in discussing multi-agent architecture and frontend performance:
*   **Agent Identity Confusion via Channels ([Issue #3957](https://github.com/agentscope-ai/QwenPaw/issues/3957), 5 comments):** Users report that when Agent A receives a message from Agent B via the DingTalk channel, Agent A switches its workspace and suffers an identity crisis (believing it is Agent B). This highlights a critical architectural need for strict workspace isolation in A2A (Agent-to-Agent) communication.
*   **Severe UI Performance in Extended Dialogues ([Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350), 6 comments):** Users performing complex, multi-step code iterations (>200 rounds) experience extreme UI lag. The underlying need is for long-term context retention without compromising DOM rendering performance.
*   **Windows EXE White Screen ([Issue #3971](https://github.com/agentscope-ai/QwenPaw/issues/3971), 3 comments):** Users report a 100% reproduction rate of white screens on first launch of the v1.1.4 Windows desktop client, demanding immediate attention for desktop packaging.

## 5. Bugs & Stability
Today's bug reports highlight critical areas regarding long-running tasks, event loops, and desktop deployments:
1.  **Critical - WeCom Event Loop Conflicts:** WeCom file uploads trigger `RuntimeError: Future attached to a different loop` ([Issue #3296](https://github.com/agentscope-ai/QwenPaw/issues/3296)). *Status: Fix merged in [PR #3300](https://github.com/agentscope-ai/QwenPaw/pull/3300).*
2.  **Critical - Idle Clean-up Kills Active Tasks:** The `UnifiedQueueManager` marks long-running agent tasks as "idle" after 600 seconds and cancels them, resulting in lost AI responses ([Issue #3976](https://github.com/agentscope-ai/QwenPaw/issues/3976)). *Status: Open, needs urgent maintainer review.*
3.  **High - Windows File Traversal:** Windows servers were vulnerable to arbitrary file traversal ([Issue #3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)). *Status: Patched in v1.1.5.post1.*
4.  **Medium - Memory Search Attribute Error:** Conversations lacking specific memory management configurations throw `AttributeError: 'list' object has no attribute 'get'` when executing `memory_search` ([Issue #3977](https://github.com/agentscope-ai/QwenPaw/issues/3977)). *Status: Open.*
5.  **Low - Running Config 404:** Clicking "Running Config" in the Web UI returns a `Not Found` API error ([Issue #3980](https://github.com/agentscope-ai/QwenPaw/issues/3980)). *Status: Open.*

## 6. Feature Requests & Roadmap Signals
Users are pushing CoPaw toward more autonomous behaviors, better desktop integration, and broader LLM support:
*   **Self-Referential Task Loops:** A request to introduce `/ralph-loop` to allow continuous task execution without manual prompts ([Issue #3972](https://github.com/agentscope-ai/QwenPaw/issues/3972)). 
*   **Agent Auto-Evolution:** Users desire the integration of "Hermes" concepts to allow agents to autonomously evolve ([Issue #3516](https://github.com/agentscope-ai/QwenPaw/issues/3516)).
*   **Desktop Background Running:** Request for the Windows EXE client to minimize to the system tray rather than shutting down entirely when closed ([Issue #3979](https://github.com/agentscope-ai/QwenPaw/issues/3979)).
*   *Prediction:* The next versions will likely focus heavily on frontend performance optimization (virtual lists for long chats) and expanding model providers, as evidenced by the open PR for GitHub Copilot models ([PR #3846](https://github.com/agentscope-ai/QwenPaw/pull/3846)).

## 7. User Feedback Summary
**Pain Points:** The primary dissatisfaction stems from the WebUI's inability to handle massive chat histories smoothly, leading to browser crashes. Furthermore, users find the current workspace structure too messy; there is a strong desire to separate core agent configuration files from daily document read/write operations to prevent accidental deletions ([Issue #3967](https://github.com/agentscope-ai/QwenPaw/issues/3967)).
**Satisfaction & Use Cases:** Users are successfully utilizing CoPaw for complex, project-level code iterations (V1 to V2 development) utilizing A2A tools. The rapid adoption of enterprise channels (DingTalk, WeCom, Feishu) shows that the project is highly valued as a corporate AI assistant. The active merging of first-time contributor PRs also indicates a healthy, welcoming open-source community.

## 8. Backlog Watch
*   **[Issue #3861](https://github.com/agentscope-ai/QwenPaw/issues/3861):** The WebUI chat page suffers from frequent mid-conversation interruptions. Despite having 3 comments, a definitive fix is still pending, impacting core conversational stability.
*   **[Issue #3957](https://github.com/agentscope-ai/QwenPaw/issues/3957):** The agent identity/workspace switching bug in DingTalk requires architectural validation from the core team.
*   **[PR #3605](https://github.com/agentscope-ai/QwenPaw/pull/3605):** The PR to unify WeChat/Weixin identifiers has been open since April 20th and remains under review. This is a blocker for channel stability and needs final approval.
*   **[Issue #3971](https://github.com/agentscope-ai/QwenPaw/issues/3971):** The Windows desktop white screen issue needs an urgent packaging fix to ensure a smooth out-of-the-box experience for non-technical users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-01

## 1. Today's Overview
ZeroClaw is currently experiencing a high-velocity development phase characterized by a massive influx of community contributions and active issue triage. Over the last 24 hours, the project saw 100 total GitHub events (50 issues updated and 50 pull requests updated), indicating extremely high engagement from both users and developers. The absence of a new release today comes amidst heavy foundational work, including large-scale architectural refactors, security enhancements, and the introduction of new channels. With 35 open PRs currently competing for maintainer review, the project is healthy but potentially facing a integration bottleneck as it prepares for its next stable milestone.

## 2. Releases
There were **0 new releases** published today. The project is actively accumulating features and bug fixes in the default branch, suggesting an impending major or minor version bump once the current batch of high-risk "XL" pull requests are stabilized and merged.

## 3. Project Progress
Fifteen pull requests were merged or closed today, pushing forward several key initiatives:
*   **Localization & Accessibility:** Significant progress was made on internationalization, with PR [#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170) syncing French, Japanese, and Spanish translations, and PR [#6242](https://github.com/zeroclaw-labs/zeroclaw/pull/6242) introducing Simplified Chinese (`zh-CN`) WeChat CLI strings.
*   **Hardware Support:** PR [#6203](https://github.com/zeroclaw-labs/zeroclaw/pull/6203) merged, adding official documentation and setup guides for running ZeroClaw on Raspberry Pi.
*   **Security & Configuration:** Foundational work advanced on gateway CRUD endpoints for web onboarding parity (PR [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179)) and activating HMAC tool receipts (PR [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214)).
*   **WeChat Channel:** PR [#6166](https://github.com/zeroclaw-labs/zeroclaw/pull/6166) (WeChat via iLink Bot) was closed today, likely superseded or refined by the ongoing open efforts in the i18n WeChat PRs.

## 4. Community Hot Topics
The most actively discussed items revolve around core usability blockers and daily operational friction:
*   **Fresh Install Provider Issues:** The most discussed bug today was [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) (15 comments), where fresh installations fail to configure default models correctly during onboarding. 
*   **Agent Tool Awareness:** Users are frustrated that ZeroClaw fails to leverage its own built-in tools, as highlighted in [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) (6 comments), where the agent doesn't know it can schedule cron jobs.
*   **Matrix Transcription Failures:** Voice transcription in the Matrix channel is failing due to an audio format parsing error, generating 6 comments in [Issue #6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153).
*   **Skill System Silent Failures:** Maintainers and contributors are deep in discussion over [Issue #6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) (3 comments) regarding the SkillForge auto-integrator emitting non-schema fields, a crucial fix being addressed in PR [#6195](https://github.com/zeroclaw-labs/zeroclaw/pull/6195).

## 5. Bugs & Stability
Several high-severity (S1) bugs are affecting user workflows, though many now have corresponding fix PRs in progress:
*   **Infinite Tool Loops on Android:** [Issue #6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) reports that the agent enters an infinite loop on Termux/Android.
*   **WhatsApp Web Disconnects:** Cron jobs and `web_fetch` are fundamentally broken for the WhatsApp channel ([Issue #6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224), [Issue #6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223)).
*   **Security/Silent Cascading Failures:** [Issue #6205](https://github.com/zeroclaw-labs/zeroclaw/issues/6205) highlights a silent decryption failure in `enc2` that leads to vague "All providers/models failed" errors. This is being actively countered by maintainer `singlerider` via PR [#6215](https://github.com/zeroclaw-labs/zeroclaw/pull/6215), which introduces fail-loud model resolution.
*   **Slack Secret Management:** [Issue #6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) notes that Slack bot tokens cannot be loaded via environment variables, crashing the daemon.

## 6. Feature Requests & Roadmap Signals
Feature requests point heavily toward channel expansion, observability, and UX customization:
*   **Expanded Browser Config:** Users are requesting headed/headless toggle support for the `agent_browser` backend ([Issue #6241](https://github.com/zeroclaw-labs/zeroclaw/issues/6241)).
*   **Smart Markdown Truncation:** To improve the visual layout of LLM responses, [Issue #6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) proposes smart truncation for Telegram.
*   **Advanced Observability:** PR [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) is actively instrumenting runtime memory operations with OpenTelemetry GenAI spans, signaling a strong roadmap push for enterprise-grade production monitoring.
*   **ACP Protocol v1:** PR [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) is implementing a massive update to the ACP protocol with back-channel support, laying the groundwork for advanced multi-agent tool-call permissions.

## 7. User Feedback Summary
Users are highly enthusiastic about ZeroClaw's growing multi-channel capabilities (WeChat, WhatsApp, Matrix), but are experiencing friction during initial setup. The onboarding flow is currently a significant pain point: users struggle with custom OpenAI-compatible endpoints ([Issue #6206](https://github.com/zeroclaw-labs/zeroclaw/issues/6206)) and OpenAI Codex subscription prompts ([Issue #6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)). Furthermore, documentation is lagging behind the codebase; users report broken links ([Issue #6222](https://github.com/zeroclaw-labs/zeroclaw/issues/6222)) and a lack of comprehensive guides for features like "Skills" ([Issue #5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863)). Deploying on non-standard architectures (like Android/Termux) remains an unstable use case.

## 8. Backlog Watch
Several architecturally significant issues and PRs require immediate maintainer attention to prevent downstream bottlenecks:
*   **Daemon Registry Refactor:** [Issue #5618](https://github.com/zeroclaw-labs/zeroclaw/issues/5618) (Phase 2 D1) needs continued momentum to replace DaemonSubsystems callbacks with a typed Registry API, crucial for the web dashboard's evolution.
*   **Web Dashboard Security:** [Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) is a critical S1 bug where supervised tool approvals bypass the WebSocket gateway. This needs to be aligned with the ongoing gateway CRUD work in PR [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179).
*   **Multi-Provider Reasoning:** [Issue #5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) requests model-wise reasoning configuration. This requires maintainer architectural guidance before contributors can implement it effectively.

</details>