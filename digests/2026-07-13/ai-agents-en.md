# OpenClaw Ecosystem Digest 2026-07-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-12 22:14 UTC

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

Here is the structured project digest for OpenClaw based on the GitHub data provided for July 13, 2026.

### 1. Today's Overview
OpenClaw is experiencing an exceptionally high velocity of community engagement and engineering activity, processing 500 updated issues and 500 pull requests in the last 24 hours alone. However, the ratio of open to closed items (297 open issues, 353 open PRs) indicates a massive backlog or a rapid influx of new bugs and feature requests. The project is currently in an active stabilization and refactoring phase, with a heavy focus on fixing P0/P1 reliability bugs, plugging memory leaks, and overhauling its internal orchestration architecture. With 0 new releases today, the team appears to be heads-down managing technical debt before cutting a new stable version.

### 2. Releases
*No new releases were recorded today.*

### 3. Project Progress
While no new versions were shipped, significant progress was made in architectural cleanup and quality-of-life improvements through merged/closed PRs:
*   **Internal Refactoring:** The maintainers closed a notable refactor ([Issue #104871](https://github.com/openclaw/openclaw/issues/104871)) to clean up high-churn orchestration internals and establish explicit state and transaction boundaries without breaking public contracts.
*   **UI & CI Stabilization:** Several small but impactful UI fixes were merged, including dead-code export cleanups ([PR #105713](https://github.com/openclaw/openclaw/pull/105713), [PR #105705](https://github.com/openclaw/openclaw/pull/105705)) and fixing flaky terminal lifecycle waits in CI ([PR #105714](https://github.com/openclaw/openclaw/pull/105714)).
*   **Active PR Queue:** Over 30 substantial PRs are currently open and awaiting review, including memory state event draining ([PR #69822](https://github.com/openclaw/openclaw/pull/69822)) and critical sub-agent wake/sleep fixes ([PR #96189](https://github.com/openclaw/openclaw/pull/96189)).

### 4. Community Hot Topics
*   **Multi-Platform Clawdbot Apps:** The most discussed issue ([Issue #75](https://github.com/openclaw/openclaw/issues/75), 110 comments, 81 👍) is a long-standing request for Linux and Windows native desktop apps, closing the gap with the existing macOS ecosystem.
*   **Agent Tool Visibility:** A major friction point is agents losing the ability to read text outputs, seeing only "(see attached image)" instead. This regression is highly disruptive to long-running workflows ([Issue #99241](https://github.com/openclaw/openclaw/issues/99241), 22 comments; [Issue #104721](https://github.com/openclaw/openclaw/issues/104721), 12 comments).
*   **Dynamic Model Discovery:** Users are heavily requesting dynamic API model fetching rather than relying on static catalogs ([Issue #10687](https://github.com/openclaw/openclaw/issues/10687), 9 comments, 3 👍), specifically pointing out OpenRouter integration needs.

### 5. Bugs & Stability
OpenClaw is currently tracking several critical stability issues that likely block the next stable release:
*   **[P0] Gateway Memory Leak:** ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588)) The gateway process suffers a severe memory leak, growing from 350MB to 15.5GB over a few days, causing OOM crashes and restart loops.
*   **[P0] State DB Corruption:** ([Issue #101290](https://github.com/openclaw/openclaw/issues/101290)) CLI startup preflight checks are actively corrupting the live SQLite state DB while the gateway is running.
*   **[P1] Silent Parameter Dropping:** ([Issue #53408](https://github.com/openclaw/openclaw/issues/53408)) During long, multi-turn conversations, `write` and `exec` tools silently drop parameters, breaking complex agentic workflows. 
*   **[P1] ACPX Windows Spawn Failure:** ([Issue #93465](https://github.com/openclaw/openclaw/issues/93465)) The embedded ACPX runtime is entirely unusable on Windows due to a swallowed `spawn EINVAL` error. (Fix proposed in related PRs).

### 6. Feature Requests & Roadmap Signals
Security and fine-tuning agent behavior dominate the roadmap signals:
*   **Granular Security Controls:** Users want safer agent execution boundaries. Requests include masked API keys to prevent prompt injection leaks ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659)) and memory trust tagging to prevent poisoning from web scrapes ([Issue #7707](https://github.com/openclaw/openclaw/issues/7707)).
*   **Smarter Fallbacks & Loop Limits:** Users are requesting explicit tool-calling iteration limits to prevent infinite thinking loops ([Issue #9912](https://github.com/openclaw/openclaw/issues/9912), [PR #97485](https://github.com/openclaw/openclaw/pull/97485)) and contextual model fallbacks when context limits are hit ([Issue #9986](https://github.com/openclaw/openclaw/issues/9986)). Expect these safety mechanics to land in the next release.

### 7. User Feedback Summary
The community is highly engaged but experiencing friction with the project's bleeding-edge releases. Power users running complex, multi-tool agentic workflows over long sessions are frustrated by state-loss regressions (message loss, DB corruption). Developers utilizing OpenClaw on non-macOS platforms (Windows/Linux) feel left behind due to critical runtime bugs and missing native apps. Conversely, satisfaction remains high regarding OpenClaw's core architecture, extensibility, and the maintainers' transparent triage process.

### 8. Backlog Watch
*   **[P1] A2A Duplicate Messaging:** ([Issue #39476](https://github.com/openclaw/openclaw/issues/39476)) Open since March, agent-to-agent `sessions_send` causes infinite loops and duplicate messages. Needs an urgent architectural review.
*   **[P1] Heartbeat Isolated Mode Stalls:** ([Issue #65161](https://github.com/openclaw/openclaw/issues/65161)) Open since April, this complex bug causes background heartbeats to mislabel execution events and retain heavy memory contexts. 
*   **Filesystem Sandboxing:** ([Issue #7722](https://github.com/openclaw/openclaw/issues/7722)) A highly requested security feature (4 👍) to prevent agents from reading sensitive directories. Users provided configuration examples, but a native implementation is still pending.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the open-source AI agent and personal assistant ecosystem based on the July 13, 2026 data.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a hyper-active state of maturation, characterized by massive architectural overhauls and aggressive bug triaging. Projects are shifting away from basic chat implementations toward complex, stateful, multi-platform deployments that prioritize continuous background execution and autonomous task management. The overarching industry focus has transitioned to enterprise-grade reliability, enforcing strict security perimeters (sandboxing, guardrails), and expanding platform connectivity (ubiquitous messaging integration). Consequently, many core projects are currently experiencing friction with technical debt, memory management, and post-release stabilization.

### 2. Activity Comparison
*Note: Health Score is a composite estimate based on bug closure rates, active PRs, community engagement, and current stability blockers.*

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score | Status Summary |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | No release (Debt triage) | 7.5/10 | High engagement, but battling massive backlog & P0 bugs. |
| **Hermes Agent** | 50 | 50 | No release (Active iteration) | 8.5/10 | Highly robust iteration; closing bugs faster than reported. |
| **ZeroClaw** | 46 | 50 | No release (v0.8.3 freeze) | 8.0/10 | Intense architectural velocity; heavily funded/funded-scale. |
| **IronClaw** | N/A | 50 | No release (v0.29 staging) | 8.0/10 | Strong internal CI focus; defensive programming phase. |
| **CoPaw** | 19 | 10 | No release (v2.0.0 fallout) | 6.0/10 | Under heavy fire from v2.0.0 breaking changes/regressions. |
| **NanoBot** | 4 | 5 | No release (Hardening) | 7.5/10 | Active feature integration with minor stability quirks. |
| **PicoClaw** | 5 | 3 | No release (Steady maintenance)| 7.0/10 | Healthy, steady focus on edge hardware and backend robustness. |
| **NanoClaw** | 3 | 11 | No release (Security focus) | 7.5/10 | Major foundational security (guard seams) and governance push. |
| **LobsterAI** | Low | Low | No release (Stagnating) | 4.0/10 | Stalled development; critical bugs ignored; PRs staling. |
| **NullClaw / TinyClaw / ZeptoClaw / Moltis** | 0 | 0 | Dormant | N/A | Inactive. |

### 3. OpenClaw's Position
OpenClaw operates as one of the core reference projects but is currently suffering from the pitfalls of rapid, large-scale adoption. 
* **Advantages:** It possesses the largest and most engaged community in this digest (500 issues/PRs daily), demonstrating massive mindshare and a wide array of use cases. Its transparent triage process and deep extensibility are highly valued.
* **Disadvantages:** The project is currently drowning in technical debt and critical regressions. Unlike Hermes Agent, which efficiently closed 38 issues, OpenClaw is accumulating a backlog. Furthermore, Windows/Linux users feel abandoned due to critical runtime bugs (ACPX spawn failures) while macOS enjoys native app parity.
* **Technical Approach:** OpenClaw is undergoing a heavy, painful internal refactor (orchestration boundaries) to solve severe state and memory issues (P0 Gateway memory leaks, SQLite corruption)—issues that peers like IronClaw are solving via deterministic KV cache detection.

### 4. Shared Technical Focus Areas
Several converging requirements are dictating the roadmaps of these projects:
* **Context Window & Memory Management:** 
  * *Projects:* OpenClaw, ZeroClaw, IronClaw, NanoBot.
  * *Needs:* Managing KV cache collapses (IronClaw), preventing Out-Of-Memory (OOM) crashes via MCP schema leaks (ZeroClaw), and fixing base64 file bloat (NanoBot).
* **Granular Security & Governance:** 
  * *Projects:* NanoClaw, OpenClaw, CoPaw, ZeroClaw.
  * *Needs:* Centralized privileged action gating / "guard seams" (NanoClaw), filesystem sandboxing (OpenClaw), and managing overzealous governance/permissions friction (CoPaw).
* **Cross-Platform Session Continuity:** 
  * *Projects:* CoPaw, Hermes Agent, ZeroClaw.
  * *Needs:* The ability to start an agent task in one environment (CLI/Web) and seamlessly hand it off to a messaging platform (Slack, WhatsApp, Feishu) without losing state.
* **Third-Party LLM & Provider Friction:** 
  * *Projects:* IronClaw, OpenClaw, PicoClaw, Hermes Agent.
  * *Needs:* Users are frequently frustrated by hardcoded limits (e.g., CoPaw/ZeroClaw hitting 32k token caps), dynamic model discovery needs (OpenClaw), and routing bugs with non-standard providers like GLM, Ollama, and Z.AI.

### 5. Differentiation Analysis
* **Ubiquitous Connectivity vs. Local Edge Deployment:** Projects like Hermes Agent and ZeroClaw are heavily focused on becoming universal messaging gateways (Matrix, WhatsApp, Slack, Telegram). Conversely, PicoClaw is differentiating by targeting edge deployments (ARMv7, recycled Android boxes).
* **Autonomous Operations vs. Interactive Coding:** NanoClaw and IronClaw are doubling down on interactive developer experiences (OpenSCAD generation, read-before-edit coding guardrails, per-user MCP integration). Meanwhile, NanoBot and Hermes Agent are focusing on "always-on" background automation, utilizing "Heartbeat" and "Dream" sessions for cron-style autonomous tasks.
* **Architectural Boundaries:** ZeroClaw is taking a highly modular, heavily engineered route (WebAssembly plugins, strict Standard Operating Procedures (SOPs) for approval workflows), whereas OpenClaw is attempting to stabilize a monolithic, high-velocity architecture.

### 6. Community Momentum & Maturity
* **Rapidly Iterating (High Momentum):** Hermes Agent and ZeroClaw show the healthiest high-velocity metrics, successfully managing large PR queues and XL architectural overhauls without catastrophic backlog. 
* **Stabilizing / Fire-fighting:** OpenClaw, CoPaw, and IronClaw are in intensive stabilization phases. CoPaw is actively fighting post-v2.0.0 upgrade regressions; IronClaw is fixing structural CI flaws to regain test reliability; OpenClaw is patching P0 crashes (gateway leaks, DB corruption).
* **Stalling / Low Maturity:** LobsterAI shows signs of severe stagnation, with critical multi-agent data overwrite bugs going unaddressed and community PRs rotting. 

### 7. Trend Signals
* **The "Silent Failure" Epidemic:** Across multiple projects (OpenClaw, NanoClaw, CoPaw), the most disruptive user friction comes from agents dying, dropping messages, or hitting invisible token limits without logging errors. Robust exception handling, message queuing, and operator-facing audit logs are desperately needed.
* **The Rise of Defensive Prompt Engineering:** Developers are demanding systems that actively protect LLM context and cache. IronClaw's focus on detecting cache breaks and advertising skills as "one-line listings" to save tokens proves that token efficiency is becoming a core systems engineering requirement, not just an API afterthought.
* **Friction with "Glass-Box" Sandboxing:** As agent frameworks mature and implement stricter execution boundaries (CoPaw's governance, NanoClaw's guard seams), users are expressing frustration that security measures are breaking automated workflows. The industry needs a refined balance between autonomous execution and safe human-in-the-loop (HITL) gating.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the structured project digest for NanoBot based on the GitHub data provided for July 13, 2026.

### 1. Today's Overview
NanoBot is currently experiencing highly active development with strong community engagement, as evidenced by 4 issue updates and 5 pull request updates in the last 24 hours. The project's momentum is heavily focused on enhancing the WebUI experience and hardening recent architectural changes. Notably, core maintainers are actively pushing critical security patches and major feature integrations, while community contributors are addressing regressions. However, the high volume of new bug reports related to the "Dream" feature and local model integrations indicates that recent releases may have introduced minor stability challenges alongside new capabilities.

### 2. Releases
No new releases were recorded in the last 24 hours. 

### 3. Project Progress
Significant advancements were merged into the project today, particularly regarding security and user onboarding:
*   **Security Patch (Merged):** [PR #4892](https://github.com/HKUDS/nanobot/pull/4892) successfully restricted remote WebUI sessions from modifying workspace settings, limiting access escalations to localhost and native clients.
*   **Onboarding & Setup (Active):** [PR #4855](https://github.com/HKUDS/nanobot/pull/4855) introduced highly productized setup flows, including guided channel setups with QR handoffs, safer secret handling, and the integration of Feishu assistant instances with shared WebSocket runtime management.
*   **Skill Expansion (Active):** [PR #4145](https://github.com/HKUDS/nanobot/pull/4145) is moving forward to resolve issue #3958 by adding a fully tested Weather Skill and updating the skills documentation.

### 4. Community Hot Topics
*   **Local Model Performance Degradation ([Issue #4867](https://github.com/HKUDS/nanobot/issues/4867)):** The most discussed issue (now closed) highlighted a severe performance hit for Ollama users, adding 60+ seconds of latency per turn. This emphasizes the community's strong demand for efficient prompt prefix preservation to enable local caching, showing that a significant portion of the user base runs local models with limited VRAM.
*   **Heartbeat Agent Loop Fix ([PR #4896](https://github.com/HKUDS/nanobot/pull/4896)):** A major community-driven PR addressing a regression where autonomous agents would endlessly report tasks rather than execute them. This highlights user reliance on NanoBot's background automation (cron-style) capabilities.

### 5. Bugs & Stability
Today's bug reports point to recent regressions and integration quirks, ranked by severity:
1.  **[P1] Heartbeat Agent Execution Loop ([PR #4896](https://github.com/HKUDS/nanobot/pull/4896)):** A high-severity regression where a refactor broke the agent's ability to actually execute background tasks. *Status: Fix PR is currently open.*
2.  **[High] Discord Integration Failure ([Issue #4897](https://github.com/HKUDS/nanobot/issues/4897)):** Users report that the Discord bot gateway comes online but fails to send or receive messages. *Status: Unanswered.*
3.  **[Medium] Dream Session Pruning Failure ([Issue #4894](https://github.com/HKUDS/nanobot/issues/4894)):** A recent commit switched Dream session files to base64-encoded filenames, but the `prune_dream_sessions()` function wasn't updated, causing legacy and new files to pile up unpruned. *Status: Unanswered.*
4.  **[Medium] Git History Pollution in Dream Logs ([Issue #4893](https://github.com/HKUDS/nanobot/issues/4893)):** `/dream-log` commands pull non-Dream git commits, confusing the user experience. *Status: Unanswered.*

### 6. Feature Requests & Roadmap Signals
Based on today's issue and PR tracker, NanoBot's immediate roadmap is heavily signaling a push toward **Enterprise/Team Usability** and **Provider Flexibility**.
*   **Transcription Provider Agility ([PR #4895](https://github.com/HKUDS/nanobot/pull/4895)):** Fixing API key environment placeholders suggests the team is refining multi-provider support (like Groq) for voice/audio inputs.
*   **Platform Expansion:** The integration of Feishu in [PR #4855](https://github.com/HKUDS/nanobot/pull/4855) and troubleshooting of Discord bots ([Issue #4897](https://github.com/HKUDS/nanobot/issues/4897)) indicate a strategic push to make NanoBot a cross-platform ubiquitous assistant.
*   *Prediction:* The next minor version release will likely bundle the WebUI guided setup flows, the heartbeat execution fix, and the Dream session file management patches.

### 7. User Feedback Summary
*   **Pain Point - Local LLM Latency:** Users attempting to self-host models via Ollama experienced massive friction due to un-cached prompts, showing a strong use-case demographic for privacy-focused local AI.
*   **Use Case - Ubiquitous Connectivity:** Users are actively trying to deploy NanoBot as an always-on gateway connected to communication platforms like Discord.
*   **Use Case - Long-term Memory & Background Tasks:** The presence of bugs related to "Dream" sessions (memory/experience processing) and "Heartbeat" tasks proves that users are relying on NanoBot for deep, autonomous personal assistance rather than just simple chat.

### 8. Backlog Watch
*   **[Issue #4897](https://github.com/HKUDS/nanobot/issues/4897) (Discord Bot Integration):** Created yesterday with 0 comments. As Discord is a major communication channel, this integration bug requires maintainer triage to prevent user drop-off.
*   **[Issue #4894](https://github.com/HKUDS/nanobot/issues/4894) & [Issue #4893](https://github.com/HKUDS/nanobot/issues/4893) (Dream Feature Bugs):** Both created yesterday with 0 comments. They represent immediate technical debt introduced by recent refactoring (commit `cf2f5896`) that could lead to storage bloat or user confusion.
*   **[PR #4145](https://github.com/HKUDS/nanobot/pull/4145) (Weather Skill):** Open since June 1st. While it includes robust testing, it has yet to be merged. Maintainers should review this to keep the community skill ecosystem growing.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the structured project digest for the Hermes Agent project based on the provided GitHub data.

### 1. Today's Overview
The Hermes Agent project exhibited exceptionally high maintenance and community engagement over the last 24 hours, processing 50 issues and 50 pull requests. The maintainers successfully closed 38 issues and merged 8 pull requests, indicating a strong focus on stability, bug resolution, and gateway reliability. With 42 open PRs currently under review, the project is in a highly active iteration cycle, likely stabilizing the codebase after recent feature drops. There is a heavy emphasis on cross-platform gateway support and third-party provider integrations.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Today's merged PRs and closed issues reflect significant advancements in gateway stability, deployment environments, and API integrations:
*   **macOS & System Support:** Added proper detection for `launchd` services during gateway restarts ([PR #19940](https://github.com/NousResearch/hermes-agent/pull/19940)), bringing macOS deployment to parity with Linux systemd.
*   **Provider Routing & Config:** Fixed routing for auxiliary providers (e.g., Z.AI/GLM) by preserving base URL overrides ([PR #19923](https://github.com/NousResearch/hermes-agent/pull/19923)), and resolved gateway model alias resolution for custom providers ([PR #19904](https://github.com/NousResearch/hermes-agent/pull/19904)).
*   **Messaging Platform Fixes:** Resolved a critical issue where WeCom crashed entirely if `WECOM_CALLBACK_PORT` was non-numeric ([PR #19901](https://github.com/NousResearch/hermes-agent/pull/19901)), and implemented silent-skip behavior for WhatsApp group chats ([Issue #18848](https://github.com/NousResearch/hermes-agent/issues/18848)).
*   **Tool & API Integrations:** The MCP (Model Context Protocol) client now successfully retries HTTP connections if the target server boots *after* Hermes starts ([Issue #19559](https://github.com/NousResearch/hermes-agent/issues/19559)). 

### 4. Community Hot Topics
*   **[Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) - Improved Themes for Dashboard (👍 50, 28 comments):** The most highly requested feature of the day. Users are struggling with the readability of current dashboard themes (Midnight, Ember, Mono, etc.), specifically citing poor font choices, low contrast, and light font weights. *Underlying need:* As Hermes shifts towards a visual TUI/Dashboard experience, UI/UX polish and accessibility are becoming critical for user retention.
*   **[Issue #19046](https://github.com/NousResearch/hermes-agent/issues/19046) - Excessive API Branding (4 comments):** A humorous but valid complaint where users noticed the agent was practically "screaming" its third-party harness status to the Anthropic API. *Underlying need:* Users deploying Hermes in commercial wrappers want white-label capabilities and clean API meta-communications.
*   **[Issue #18457](https://github.com/NousResearch/hermes-agent/issues/18457) - Cross-Surface Session Continuity (4 comments):** Users want the ability to seamlessly start an agent session in the CLI, hand it off to Telegram, and resume it in Discord. *Underlying need:* True multi-device, "always-on" AI assistant workflows.

### 5. Bugs & Stability
Several high-severity bugs (P2) were addressed today, though a few critical new ones remain open:
*   **[CRASH/CONFIG - Issue #56717](https://github.com/NousResearch/hermes-agent/issues/56717):** Non-default profiles retain stale runtime code after an update, causing `ImportError` crashes. **Status:** Open / Needs fix.
*   **[RESILIENCY - Issue #63361](https://github.com/NousResearch/hermes-agent/issues/63361):** Daytona persistent sandboxes resume purely by name without image comparison, and lack a `force_remove` flag. **Status:** Open.
*   **[MEMORY - Issue #19245](https://github.com/NousResearch/hermes-agent/issues/19245):** `session_search` returns completely empty results after a crash because orphaned session JSONs are not recovered. **Status:** Fixed (Closed).
*   **[GATEWAY - Issue #18646](https://github.com/NousResearch/hermes-agent/issues/18646):** WhatsApp `send_message` completely ignored group targets (e.g., `@g.us`), routing everything to the home channel instead. **Status:** Fixed (Closed).
*   **[TOOLS - Issue #17999](https://github.com/NousResearch/hermes-agent/issues/17999):** On Windows native, the `read_file` tool failed to read valid `D:` drive paths. **Status:** Fixed (Closed).

### 6. Feature Requests & Roadmap Signals
Based on community PRs and issues, the following features are likely candidates for the next major version (v0.13.0):
*   **Qualitative Insights ([PR #19909](https://github.com/NousResearch/hermes-agent/pull/19909)):** Adding a `hermes insights --qualitative` command to perform local workflow friction retrospectives on past sessions.
*   **Matrix Cron Targeting ([PR #19900](https://github.com/NousResearch/hermes-agent/pull/19900)):** Upgrading the Matrix gateway to support granular cron-job delivery targeting (specific rooms, aliases, and threads), matching Telegram and Discord capabilities.
*   **Plugin Tool Lifecycle Management ([PR #19889](https://github.com/NousResearch/hermes-agent/pull/19889)):** Better stability for the plugin ecosystem by ensuring disabled plugins properly deregister their tools from the global registry during forced rediscovery.
*   **Smart Session Migration ([Issue #54926](https://github.com/NousResearch/hermes-agent/issues/54926)):** Forcing the `hermes update` command to migrate *all* local profiles rather than just the active one.

### 7. User Feedback Summary
**Pain Points:** Users love Hermes's breadth of integrations (Matrix, WhatsApp, Feishu, custom LLMs) but are experiencing friction with environment-specific bugs. Windows users have had persistent issues with basic file and terminal tools. Furthermore, users utilizing non-standard LLM providers (MiniMax, Kimi, GLM) frequently encounter token-leaking or config-parsing regressions.
**Satisfaction:** The community is highly engaged and actively contributing fixes rather than just reporting bugs. The 28-comment thread on dashboard theming shows users care deeply about the visual presentation of the TUI. The rapid turnaround on P2 bugs (closing 38 issues in 24 hours) indicates strong trust between the user base and maintainers.

### 8. Backlog Watch
*   **[Issue #56717](https://github.com/NousResearch/hermes-agent/issues/56717):** The stale-profile `ImportError` bug is actively disrupting production updates for users with multiple profiles and requires an immediate patch.
*   **[Issue #63361](https://github.com/NousResearch/hermes-agent/issues/63361):** The Daytona sandbox backend needs architectural cleanup regarding its persistence and cleanup logic, which could pose security or stability risks in CI/CD pipelines.
*   **[Issue #18060](https://github.com/NousResearch/hermes-agent/issues/18060):** Hardcoded paths (`Path.home() / ".hermes"`) bypassing environment variables in 23 production files. This was marked as "cannot reproduce" but fundamentally breaks custom Docker volume mappings for stateful data. This needs a code-level audit.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the provided GitHub data.

### 1. Today's Overview
PicoClaw is demonstrating healthy, steady development with active maintenance and strong community engagement as of July 13, 2026. The project saw balanced activity in the last 24 hours, with 5 issues and 3 pull requests updated, resulting in 2 closed issues and 2 merged/closed PRs. Recent engineering efforts appear highly focused on backend robustness, particularly concerning Matrix channel stability, LLM provider token tracking (Anthropic), and agent skill management. Community contributions are also expanding the project's hardware accessibility, indicating a versatile and growing user base deploying PicoClaw to diverse environments. 

### 2. Releases
No new releases were recorded in the last 24 hours. 

### 3. Project Progress
Significant forward progress was made in agent usability and internationalization through recently closed PRs:
*   **Skill Management & Cron Scheduling ([PR #3249](https://github.com/sipeed/picoclaw/pull/3249) - CLOSED):** Integrated a toggle feature to enable/disable skills via the UI. It cleverly utilizes a state file (`workspace/skills/.skills-state.json`) that automatically invalidates the prompt cache without requiring an application restart. It also introduced a "RunNow" feature for pausing cron jobs.
*   **Localization Sync ([PR #3190](https://github.com/sipeed/picoclaw/pull/3190) - CLOSED):** Patched missing i18n keys for Bengali (`bn-in`) and Czech (`cs`) translations, ensuring UI consistency across languages.
*   **Anthropic Token Tracking ([PR #3251](https://github.com/sipeed/picoclaw/pull/3251) - OPEN):** A new open PR aims to capture prompt cache token usage metrics in Anthropic providers, which will allow operators to verify if their prompt caching is actually working.

### 4. Community Hot Topics
*   **Matrix Channel Stability ([Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)):** The most engaged issue (1 👍, 2 comments) highlights a critical flaw where the Matrix `/sync` long-polling loop dies permanently after network disruptions. This indicates a strong user need for self-hosted, resilient communication bridges that can recover gracefully without relying on systemd restarts.
*   **ARMv7 / Edge Deployment Support ([Issue #3250](https://github.com/sipeed/picoclaw/issues/3250)):** A user submitted a detailed feature request (now closed, suggesting a rapid fix or direct merge) to support `armhf` devices via Docker Compose. This shows a clear community desire to run the PicoClaw AI gateway on low-power, ubiquitous edge hardware like Raspberry Pis and recycled Android TV boxes (OneCloud).

### 5. Bugs & Stability
*   **[Critical] Matrix Sync Silent Death ([Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)):** The Matrix sync loop lacks reconnection logic. If the network drops, the channel dies silently while the main process stays alive. *No fix PR is visible in this batch.*
*   **[High] Model Provider Alias Stripping ([Issue #3252](https://github.com/sipeed/picoclaw/issues/3252)):** A bug in the provider factory incorrectly strips provider prefixes if the model ID itself contains a known alias, breaking model routing. *No fix PR is visible.*
*   **[Medium] Android App Pathing ([Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)):** Users are unable to launch the background service or change storage paths in the Android client despite having full permissions.
*   **[Resolved/Obsolete] Encrypted Messages ([Issue #3194](https://github.com/sipeed/picoclaw/issues/3194)):** Previously reported issue where the gateway failed to decrypt Matrix messages because crypto was disabled. (Marked stale/closed).

### 6. Feature Requests & Roadmap Signals
Based on current issue tracking and PR trajectories, we can predict the following focus areas for the next release:
*   **Advanced Telemetry for LLMs:** [PR #3251](https://github.com/sipeed/picoclaw/pull/3251) signals a roadmap push toward better cost-tracking and observability for LLM usage, specifically capturing Anthropic's cache token metrics.
*   **Stateless Skill Management:** The merge of [PR #3249](https://github.com/sipeed/picoclaw/pull/3249) sets a precedent for dynamically managing agent skills via local JSON files, hinting that future tools will be hot-loadable without service restarts.
*   **Expanded Edge Deployment:** The quick response to the ARMv7 Docker request suggests the project is actively prioritizing lightweight, multi-architecture support.

### 7. User Feedback Summary
Users are pushing PicoClaw into production environments, leading to actionable feedback. 
**Pain points:** Deployment on fragmented hardware (Android paths, ARM architectures) and maintaining persistent WebSocket/long-polling connections (Matrix sync drops). 
**Satisfaction:** Users are generally engaged and proactive. Instead of simply complaining, users are submitting pull requests (like the i18n fixes and Anthropic token tracking) and providing comprehensive bug reproduction steps. The demand for "prompt caching observability" shows an advanced user base focused on operational costs.

### 8. Backlog Watch
*   **[Stale] Android Service Launch Bug ([Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)):** Created on June 26, this bug prevents users from changing storage paths and launching services on Android. It is now marked `[stale]` and requires maintainer intervention or an update from the original poster.
*   **[Stale] i18n PR ([PR #3190](https://github.com/sipeed/picoclaw/pull/3190)):** The localization sync PR sat open since June 27 before being closed. Maintainers should ensure translation gaps are caught earlier in the CI/CD pipeline to prevent stale localization PRs.
*   **Network Resiliency Gaps ([Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)):** While updated recently, this critical issue regarding Matrix reconnection logic needs a formal architectural review and an assigned fix PR to prevent silent failures in self-hosted environments.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw on 2026-07-13.

### 1. Today's Overview
NanoClaw is currently experiencing a highly active development phase, characterized by a strong focus on architectural security, agent stability, and CLI enhancements. Over the last 24 hours, the project saw no new formal releases but merged 2 pull requests and opened 11 new ones against a backdrop of 3 newly reported bugs. Core maintainers (moshe-nanoco, gabi-simons) are driving foundational changes, such as implementing a centralized guard seam for privileged actions and adding native template scheduling. Meanwhile, community contributors are actively addressing operational pain points, particularly around container crashes, token limits, and agent messaging loops.

### 2. Releases
**None** - There were no new releases published in the last 24 hours.

### 3. Project Progress
Today's progress is defined by two merged/closed PRs and the advancement of several core-team initiatives:
*   **OpenCode Stack Integration ([PR #2952](https://github.com/nanocoai/nanoclaw/pull/2952) - Closed/Merged):** Added the operational/container skill for the OpenCode stack, expanding the environments NanoClaw agents can operate within.
*   **Token Limit Fix Refactored ([PR #3024](https://github.com/nanocoai/nanoclaw/pull/3024) - Closed):** This initial attempt to fix the 32k output token limit was closed in favor of a guidelines-compliant follow-up ([PR #3025](https://github.com/nanocoai/nanoclaw/pull/3025)), showing strict adherence to contribution standards.
*   **Security & Governance Overhaul:** Core team is actively developing a centralized "guard seam" where all privileged container/channel actions must pass through a single decision function ([PR #2986](https://github.com/nanocoai/nanoclaw/pull/2986)). Additionally, new CLI verbs (`approve`, `reject`, `reject-with-reason`) are being added to allow operators to resolve held actions directly ([PR #3029](https://github.com/nanocoai/nanoclaw/pull/3029)).
*   **Template Scheduling ([PR #3022](https://github.com/nanocoai/nanoclaw/pull/3022)):** Templates can now natively define recurring scheduled tasks via cron syntax, removing the need for manual post-creation setup.

### 4. Community Hot Topics
The community is highly focused on agent execution reliability and output constraints. 
*   **Claude 32k Token Cap ([Issue #3023](https://github.com/nanocoai/nanoclaw/issues/3023)):** Users are frustrated by a silent 32k output token limit inherited from the Agent SDK, which kills long-running tasks (e.g., generating CAD files). This generated immediate attention and a same-day fix PR.
*   **Privileged Action Gating ([PR #2986](https://github.com/nanocoai/nanoclaw/pull/2986)):** A major architectural shift that is drawing heavy review. It solves the problem of "voluntary gating" by forcing all privileged actions through a strict `allow | hold | deny` guard function, greatly enhancing security for deployed agents.
*   **Local Audit Logs ([PR #2987](https://github.com/nanocoai/nanoclaw/pull/2987)):** An opt-in audit log skill for the `ncl` surface is being refined, indicating a growing user need for traceability and compliance in agent actions.

### 5. Bugs & Stability
*   🔴 **High Severity: Intermittent Agent Silence on WhatsApp / Container Poisoning** 
    *   *Bug:* Agents go completely silent because a Certificate Authority (CA) file gets poisoned into a root-owned directory (`/tmp/onecli-proxy-ca.pem`), preventing containers from spawning ([PR #3027](https://github.com/nanocoai/nanoclaw/pull/3027)).
    *   *Fix Status:* Fix PR opened today to relocate `TMPDIR`.
*   🔴 **High Severity: Silent Output Token Cap**
    *   *Bug:* Long agent turns die abruptly due to a hardcoded 32,000 output token limit in the Claude Agent SDK ([Issue #3023](https://github.com/nanocoai/nanoclaw/issues/3023)).
    *   *Fix Status:* Fix PR actively open ([PR #3025](https://github.com/nanocoai/nanoclaw/pull/3025)).
*   🟡 **Medium Severity: Duplicate Replies via Re-wrap Nudge**
    *   *Bug:* If an agent replies normally via `send_message`, the model is unnecessarily re-run by the "unwrapped-output nudge", resulting in duplicate messages ([Issue #3026](https://github.com/nanocoai/nanoclaw/issues/3026), [Issue #2404](https://github.com/nanocoai/nanoclaw/issues/2404)).
    *   *Fix Status:* Two separate fix PRs are currently open to address this logic flaw ([PR #3020](https://github.com/nanocoai/nanoclaw/pull/3020), [PR #3028](https://github.com/nanocoai/nanoclaw/pull/3028)).
*   🟢 **Low Severity: False Rate Limit Logging**
    *   *Bug:* Rate limits are logged as quota errors even on "allowed" statuses, causing unnecessary alarm ([Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016)).

### 6. Feature Requests & Roadmap Signals
Based on recent PRs and Issues, the short-term roadmap points heavily toward **harness stability and operational safety**:
*   **Per-Group Capability Toggles ([PR #2983](https://github.com/nanocoai/nanoclaw/pull/2983)):** NanoClaw is moving toward leaner default agent configurations, turning off redundant harness capabilities (like built-in scheduling) in favor of its native `ncl tasks` system. 
*   **Operator Tooling:** The addition of approval-resolution verbs ([PR #3029](https://github.com/nanocoai/nanoclaw/pull/3029)) and WhatsApp connection warnings ([PR #3021](https://github.com/nanocoai/nanoclaw/pull/3021)) signals a roadmap focused on making agent deployment safer and easier to manage for front-line operators.
*   **Prediction for Next Release:** The next version will likely feature the merged Guard Seam (Phase 2), the raised token ceiling, and native template cron tasks.

### 7. User Feedback Summary
*   **Pain Points:** Users running complex, multi-step tasks (like OpenSCAD generation) are hitting invisible walls (token limits). Connectivity issues, particularly with WhatsApp integrations dropping due to backend container failures, are causing significant operational friction.
*   **Use Cases:** NanoClaw is actively being used for heavy code generation, CAD design, and automated channel moderation (WhatsApp).
*   **Satisfaction:** While users appreciate the deep functionality, there is underlying frustration with "silent failures"—where an agent stops replying or dies without a clear error, forcing users to dig through logs to find SDK defaults or certificate errors.

### 8. Backlog Watch
*   **Outdated Tool Allowlist ([PR #2982](https://github.com/nanocoai/nanoclaw/pull/3028)):** Open since July 8th, this critical PR highlights that the agent runner's `TOOL_ALLOWLIST` references five tools that no longer exist in the pinned Claude CLI (e.g., `Task` was renamed to `Agent` upstream). This also addresses a flaw where the SDK fails to filter unlisted MCP tools. This requires immediate maintainer attention to prevent agent tool execution failures.
*   **Silent Drops on Unwrapped Text ([PR #3020](https://github.com/nanocoai/nanoclaw/pull/3020)):** Addresses long-standing issues ([Issue #2369](https://github.com/nanocoai/nanoclaw/issues/2369), [Issue #2393](https://github.com/nanocoai/nanoclaw/issues/2393)) regarding the model omitting `<message to>` wrappers after long tool chains, which reliably causes silent message drops. Needs review/merge to stabilize long conversational turns.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the GitHub data from 2026-07-13.

### 1. Today's Overview
The IronClaw project is currently experiencing a massive surge in engineering activity, primarily driven by internal core contributors focusing on CI stabilization and deep agent-loop resilience. With 50 pull requests updated in a single day—26 of which were merged or closed—the team is aggressively iterating on the "Reborn" extension runtime. The issue tracker is temporarily dominated by structural CI maintenance and flaky test triage rather than end-user feature requests, indicating a mature consolidation phase. Overall project health is highly active, with maintainers systematically clearing technical debt to prepare for the upcoming v0.29+ release.

### 2. Releases
No new releases were published in the last 24 hours. However, [PR #5598](https://github.com/nearai/ironclaw/pull/5598) indicates that a major release is being staged (`ironclaw` 0.24.0 -> 0.29.1), which includes breaking API changes in `ironclaw_common` and `ironclaw_skills`.

### 3. Project Progress
The development team made massive structural improvements today, focusing heavily on agent reliability and developer experience:
*   **Agent Reliability (The "Edit Guardrails" Stack):** Merged/closed PRs include a 4-part stack aimed at improving agent performance on coding benchmarks. This includes requiring read-before-edit to prevent stale overwrites ([PR #5978](https://github.com/nearai/ironclaw/pull/5978)), surfacing post-edit diagnostics ([PR #5979](https://github.com/nearai/ironclaw/pull/5979)), and advertising Reborn skills as one-line listings to save tokens ([PR #5977](https://github.com/nearai/ironclaw/pull/5977)). 
*   **Loop Resilience:** Advanced the deep availability retry logic and model-visible tool-failure reasons ([PR #5959](https://github.com/nearai/ironclaw/pull/5959)) to prevent provider 5xx storms from aborting runs.
*   **Dependency Management:** Cleared out significant dependency backlogs, merging updates for the `everything-else` Rust group ([PR #5926](https://github.com/nearai/ironclaw/pull/5926)) and upgrading `agent-client-protocol` to v1.2.0.

### 4. Community Hot Topics
The most heavily active discussions today are internal architectural deep-dives led by core contributors analyzing why agent runs fail:
*   **[Issue #6011](https://github.com/nearai/ironclaw/issues/6011) - Daily failure taxonomy:** Maintainers are openly analyzing benchmark provisioning defects and why the agent discards work, showing a transparent, metrics-driven approach to model quality.
*   **[PR #6020](https://github.com/nearai/ironclaw/pull/6020) & [PR #6012](https://github.com/nearai/ironclaw/pull/6012) - Extension Runtime & Slack Journeys:** Large, active PRs discussing how to make outbound messaging (Slack/Telegram) deterministic and observable. 
*   **Underlying Needs:** The community (and maintainers) are demanding predictability. There is a strong pivot away from "happy path" coding towards defensive programming (detecting cache breaks, handling stale files, redacting Slack IDs).

### 5. Bugs & Stability
Stability is the primary focus of today's tracker, with several high-severity issues identified and immediately addressed:
1.  **Critical CI Flakiness (70% failure rate):** [Issue #6014](https://github.com/nearai/ironclaw/issues/6014) reports that non-hermetic tests and structural CI flaws are aborting the coverage matrix on main. 
    *   *Fix PRs:* Addressed rapidly via [PR #6022](https://github.com/nearai/ironclaw/pull/6022) (static pre-push checks) and [PR #6023](https://github.com/nearai/ironclaw/pull/6023) (unifying env test locks).
2.  **High - KV Cache Collapse:** Identified in [PR #5975](https://github.com/nearai/ironclaw/pull/5975), the agent loop was suffering a 3.5x cost multiplier on long turns due to prompt-cache breaks. 
    *   *Fix PR:* Addressed in the same PR by detecting cache breaks and stopping doomed compaction loops.
3.  **Medium - Database Concurrency Flakes:** [Issue #6017](https://github.com/nearai/ironclaw/issues/6017) notes timing-sensitive race conditions in Postgres delete/recreate and libSQL concurrent writers.
4.  **Low - UI Transparency:** [Issue #5704](https://github.com/nearai/ironclaw/issues/5704) (Closed) noted image previews becoming transparent during active chat generation.

### 6. Feature Requests & Roadmap Signals
Based on the upcoming release notes and recently merged code, the v0.29+ roadmap is heavily focused on agentic coding parity with tools like Claude Code:
*   **Interactive Coding Nudges:** [PR #6013](https://github.com/nearai/ironclaw/pull/6013) introduces tools-capable completion nudges for interactive coding, pushing the model to use tools more effectively.
*   **Per-User MCP Integration:** [PR #5970](https://github.com/nearai/ironclaw/pull/5970) introduces a per-user MCP (Model Context Protocol) registration store, signaling a major shift towards deeply personalized, user-scoped tool configurations.
*   **Enhanced CLI Diagnostics:** [PR #6019](https://github.com/nearai/ironclaw/pull/6019) adds dependency readiness checks to the `ironclaw doctor` command, including opt-in live checks for storage and secrets.

### 7. User Feedback Summary
End-user feedback highlights some friction with NEAR AI's specific model integrations:
*   **Model Latency:** A user ([Issue #6010](https://github.com/nearai/ironclaw/issues/6010), Closed) reported severe hanging and minute-long stalls when using the GLM-5.2 model for interactive development via OpenCode, rendering it unusable for real-time tasks despite good token generation speeds.
*   **Missing Defaults:** Another user ([Issue #6009](https://github.com/nearai/ironclaw/issues/6009), Closed) expressed frustration that GLM-5.2 was absent from OpenCode's default model list, requiring a manual fork to utilize.
*   **Takeaway:** While internal agent loops are becoming highly sophisticated, users still face UX friction regarding seamless third-party model API integrations and default configurations.

### 8. Backlog Watch
The following items represent lingering technical debt that requires continued maintainer attention:
*   **[PR #5664](https://github.com/nearai/ironclaw/pull/5664):** A Dependabot PR bumping GitHub Actions (including `actions/checkout` v4 -> v7 and `claude-code-action`) that has been open since July 5th. It is likely blocked by the broader CI flakiness issues being resolved today.
*   **[PR #5114](https://github.com/nearai/ironclaw/pull/5114) & [PR #4032](https://github.com/nearai/ironclaw/pull/4032):** Dependency bumps for the `tokio-ecosystem` and `wasm` groups have been stuck in the backlog since June, highlighting a potential bottleneck in dependency review.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: July 13, 2026

## 1. Today's Overview
LobsterAI is currently experiencing a period of low-level maintenance with no new releases, indicating a stable project phase or a potential development pause. Over the past 24 hours, repository activity has been minimal, limited to administrative updates and automated bot interactions. No new code has been merged, and the open issue and PR pipelines are showing signs of stagnation, with older items being marked as stale. The primary focus for the community remains centered around agent configuration management and data persistence bugs.

## 2. Releases
*No new releases were recorded in the past 24 hours.*

## 3. Project Progress
No new features or bug fixes were merged into the codebase today. The only update to the pull request pipeline was the automated closure or stale-marking of older PRs. 
*   **PR #2065** `[CLOSED]`: A proposed fix to use short UUIDs instead of names for Agent IDs was closed. This PR aimed to solve a "data resurrection" issue where deleting and recreating an agent with the same name would accidentally load old workspace/sessions data. Its closure suggests a shift in how the maintainers plan to handle agent data persistence. ([PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065))

## 4. Community Hot Topics
The most active community discussion revolves around agent configuration management. 
*   **[Issue #2293] `USER.md` Overwrite Bug** (4 comments): This is the most engaging topic, where a user discovered that modifying the "About You" section or the `USER.md` file for one agent causes it to be synchronized across all other agents. The user noted that upon software restart, all specific workspace configurations are forcefully overwritten by the main agent's `USER.md`. This highlights a strong user need for strict isolation between different AI agents. 
([Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293))

## 5. Bugs & Stability
*   🔴 **High Severity: Cross-Agent Configuration Overwrite ([Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293))**
    *   **Description:** Changing "About You" or `USER.md` in one agent overwrites the configurations of all other agents. Restarting the software forces all agents to adopt the main agent's `USER.md`. 
    *   **Status:** No fix PR is currently available, and the bug breaks core multi-agent workflows.

## 6. Feature Requests & Roadmap Signals
While no explicit new feature requests were filed today, recent PR activity points to underlying architectural needs that will likely shape the next version:
*   **Robust Agent Data Lifecycle Management:** The now-closed [PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) highlighted that local files (workspaces, sessions) are not properly cleaned up when an Agent is deleted, leading to orphaned data. A roadmap signal suggests the team needs to introduce a comprehensive cleanup mechanism or unique ID system to prevent data leakage between agents.
*   **UI/UX Clarity:** There is an outstanding need to improve user onboarding and UI intuitiveness, as seen in the stalled [PR #1325](https://github.com/netease-youdao/LobsterAI/pull/1325) which attempts to add hover tooltips for icon-only buttons.

## 7. User Feedback Summary
Real user feedback indicates frustration with the current implementation of multi-agent workspace isolation. Users actively want to configure distinct backgrounds, requirements, and personas for different agents (e.g., separating a coding assistant from a writing assistant). The current bug forces a unified persona across all agents, significantly diminishing the utility of the multi-agent feature. Overall satisfaction is currently negatively impacted by this data persistence flaw.

## 8. Backlog Watch
The repository has several aging items that require maintainer attention and are at risk of being lost to automated stale bots:
*   ⚠️ **[PR #1325](https://github.com/netease-youdao/LobsterAI/pull/1325):** Open since April 2, this UI improvement PR (adding hover tooltips for the "New Chat" button in collapsed sidebars) has received no comments and is now marked as stale. A maintainer review is needed to either merge, request changes, or formally close it.
*   ⚠️ **[Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293):** Active since July 7 with 4 comments, this critical configuration overwrite bug needs an official maintainer response or triage label to assure users a fix is in progress.

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

Here is the structured project digest for CoPaw based on the GitHub data provided for 2026-07-13.

### 1. Today's Overview
The CoPaw (QwenPaw) project is currently experiencing a massive surge in community engagement and issue reporting, driven almost entirely by the recent rollout of **version 2.0.0**. In the last 24 hours, the project saw 19 updated issues (16 open) and 10 active PRs, indicating very high usage but also significant post-upgrade friction. The core maintainers and contributors are actively fighting fires related to the v2.0.0 breaking changes, specifically focusing on context compression, tool pairings, and legacy data migration. Overall project health is highly active, though currently weighted heavily towards critical bug triaging rather than net-new feature development.

### 2. Releases
* **No new releases** have been published in the last 24 hours. 
*(Note: The project is currently dealing with the fallout of the recent v2.0.0 release, with users actively reporting upgrade regressions).*

### 3. Project Progress
Developers and first-time contributors made targeted pushes to resolve v2.0.0 regressions, focusing heavily on context formatting and legacy compatibility. 
* **Tool Pairing & Context Fixes:** A major breakthrough in fixing the 400 BadRequest errors caused by context compression was achieved. [PR #5989](https://github.com/agentscope-ai/QwenPaw/pull/5989) (open) and [PR #5987](https://github.com/agentscope-ai/QwenPaw/pull/5987) (closed/iterated) introduced multi-layer defenses against orphaned `tool_result` messages.
* **Legacy File Compatibility:** Significant progress was made in restoring v1.x to v2.0.0 compatibility. [PR #5993](https://github.com/agentscope-ai/QwenPaw/pull/5993) restores how legacy session media is loaded, while [PR #5991](https://github.com/agentscope-ai/QwenPaw/pull/5991) successfully patches the `_coerce_block` deserializer to handle legacy 'file' block types (superseding closed PRs #5990 and #5988).
* **UI & UX Enhancements:** [PR #5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) is under review to expose system commands in slash autocomplete, and [PR #5791](https://github.com/agentscope-ai/QwenPaw/pull/5791) fixes UI formatting rollovers.

### 4. Community Hot Topics
The most pressing community discussions revolve around broken workflows following the v2.0.0 upgrade:
* **Broken Tool Calls & API Formatting ([#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986), [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996)):** Users are frustrated by constant `400 BadRequestError` crashes during long sessions. The root cause is the context compression middleware orphaning tool messages, which breaks OpenAI formatter rules.
* **Overzealous Security Governance ([#5982](https://github.com/agentscope-ai/QwenPaw/issues/5982), [#5994](https://github.com/agentscope-ai/QwenPaw/issues/5994)):** Docker and desktop users are annoyed that basic shell executions and file searches now demand manual approval *every single time*, even when governance is supposedly disabled.
* **Cross-Platform Session Continuity ([#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999)):** A highly requested feature involves binding and handing off a single agent session across platforms (e.g., starting a task on Web Console and continuing it via Feishu/DingTalk).

### 5. Bugs & Stability
The transition to v2.0.0 has introduced several high-severity regressions. *(Ranked by severity)*
1. **[Critical] Auto-Memory Complete Failure:** Desktop app users cannot use memory summarization due to a missing python module (`agentscope.tool._builtin._scripts`). 
   * *Issue:* [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952), [#5978](https://github.com/agentscope-ai/QwenPaw/issues/5978)
   * *Fix Status:* Patched in [PR #5997](https://github.com/agentscope-ai/QwenPaw/pull/5997) (Pending Review).
2. **[Critical] Skill Pool Discovery Broken:** New custom skills added to the `skills/` directory are completely ignored by the agent.
   * *Issue:* [#6001](https://github.com/agentscope-ai/QwenPaw/issues/6001), [#6000](https://github.com/agentscope-ai/QwenPaw/issues/6000)
   * *Fix Status:* No fix PR yet.
3. **[High] Silent Message Dropping:** When agents are busy executing tools, new incoming messages from users are silently dropped instead of being queued.
   * *Issue:* [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) 
   * *Fix Status:* No fix PR yet.
4. **[High] Database Migration Loss:** Upgrading breaks the mapping between the chat list UI and `history.db`, causing 500 Server Errors.
   * *Issue:* [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)
   * *Fix Status:* No fix PR yet.

### 6. Feature Requests & Roadmap Signals
Based on user feedback, the following features represent the immediate roadmap signals for the next patch release:
* **Cross-Channel Session Portability ([#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999)):** Users want true cross-platform session binding.
* **Message Queuing ([#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995)):** A queue system for messages sent while the agent is busy processing.
* **Per-Session Model Overrides:** [PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) introduces a UI feature to allow specific sessions to use models different from the agent default—a feature users are actively testing.

### 7. User Feedback Summary
User satisfaction is currently strained due to the v2.0.0 upgrade path. 
* **Pain Points:** Users report data loss/fear of data loss (database mapping issues, legacy files breaking), aggressive security prompts that interrupt workflows, and the inability to expand agent functionality (skill pool broken). Linux/ARM users feel neglected by the sandbox implementation ([#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979)), which forces root mappings and breaks Electron apps.
* **Use Cases:** Users are heavily relying on CoPaw for complex, multi-step tasks like travel planning ([#5998](https://github.com/agentscope-ai/QwenPaw/issues/5998)) and cross-platform document generation, proving the demand for robust long-term memory and stable context compression.

### 8. Backlog Watch
The following critical items require immediate maintainer attention and lack linked PRs:
* **[#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) (DB Mapping Loss):** High impact, affects all v2.0.0 upgraders using pip/venv. Causes inaccessible history.
* **[#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) (Silent Message Drop):** A severe UX flaw where users believe the bot is ignoring them if they send messages too quickly.
* **[#5983](https://github.com/agentscope-ai/QwenPaw/issues/5983) (Doctor CLI False Negative):** The `qwenpaw doctor` command hardcodes an invalid health check URL, causing unnecessary panic for users debugging their setups.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-07-13.

### 1. Today's Overview
ZeroClaw is exhibiting exceptionally high development activity with 46 active issues and 50 pull requests updated in the last 24 hours, indicating a heavily funded and intensely collaborative open-source ecosystem. The project is currently navigating the final scope-freeze and implementation phases of the v0.8.3 milestone, while concurrently opening new roadmap trackers for v0.8.4 and broader ZeroCode UX improvements. The vast majority of recent PRs are large-sized (XL) architectural overhauls, particularly around the memory subsystem, Standard Operating Procedures (SOPs), and WebAssembly (WASM) plugin boundaries. While feature velocity is sky-high, maintainers are actively battling critical runtime stability bugs, including daemon crashes (SIGSEGV) and context-budget exhaustion.

### 2. Releases
No new releases were published today. The project is actively tracking the final closeout of the **v0.8.3 milestone** ([Tracker #7320](https://zeroclaw-labs/zeroclaw/issues/7320)), which asserts that no unfinished implementation will enter this release. Additionally, the **v0.8.4 maintenance train** has been scoped with a target date of July 31, 2026 ([Tracker #8357](https://zeroclaw-labs/zeroclaw/issues/8357)).

### 3. Project Progress
Only 2 PRs were merged/closed today out of 50 active, suggesting a heavy review bottleneck typical of large architectural PRs.
* **Memory Subsystem Overhaul:** A massive stack of XL PRs by contributor `Nillth` is advancing the memory architecture. This includes an opt-in retrieval cache decorator ([PR #8897](https://zeroclaw-labs/zeroclaw/pull/8897)), cross-session semantic recall ([PR #8898](https://zeroclaw-labs/zeroclaw/pull/8898)), typed memory classification ([PR #8900](https://zeroclaw-labs/zeroclaw/pull/8900)), memory content scanning at recall/write boundaries ([PR #8984](https://zeroclaw-labs/zeroclaw/pull/8984)), and a gated rerank stage ([PR #8895](https://zeroclaw-labs/zeroclaw/pull/8895)).
* **SOP & Approval Workflows:** The SOP milestone tracker is seeing stacked PR delivery for an approval broker with group membership and quorum ([PR #8880](https://zeroclaw-labs/zeroclaw/pull/8880)), execution slot release on HITL approval ([PR #8848](https://zeroclaw-labs/zeroclaw/pull/8848)), and route-delivery of approval requests to channels ([PR #8903](https://zeroclaw-labs/zeroclaw/pull/8903)).
* **WASM Channel Plugins:** First real caller wired up to actually execute installed WASM channel plugins ([PR #8852](https://zeroclaw-labs/zeroclaw/pull/8852)) alongside host-mediated outbound TCP/TLS for plugins ([PR #8923](https://zeroclaw-labs/zeroclaw/pull/8923)).
* **OpenAI Compatibility:** An OpenAI-compatible Chat Completions HTTP endpoint is being added to the gateway to support IDE extensions and orchestrators like LangChain and Continue.dev ([PR #8486](https://zeroclaw-labs/zeroclaw/pull/8486)).

### 4. Community Hot Topics
* **Goal Mode Architecture Split** ([Issue #8681](https://zeroclaw-labs/zeroclaw/issues/8681) - 9 comments): The community is heavily engaged in coordinating the split of the accepted "goal-mode" implementation into reviewable PRs. This reflects a maturing project prioritizing maintainable code over big-bang merges.
* **Context Budget Exhaustion** ([Issue #5808](https://zeroclaw-labs/zeroclaw/issues/5808) - 8 comments): Users report that the default 32k context budget is exceeded by system prompts and tool definitions on the very first iteration. This highlights friction in ZeroClaw's out-of-the-box default configurations for heavy tool users.
* **Slack Thread Context Hydration** ([Issue #6055](https://zeroclaw-labs/zeroclaw/issues/6055) - 6 comments): There is strong demand for the Slack channel adapter to backfill prior thread history on the first bot mention. Users find re-mentioning the bot in strict mode disruptive to natural conversation flows.
* **Prebuilt Channel Assets** ([Issue #7952](https://zeroclaw-labs/zeroclaw/issues/7952) - 6 comments): Users are confused by the lean default prebuilt bundle and want an optional `channels-full` binary bundle to simplify installation when using less common channels.

### 5. Bugs & Stability
Ranked by severity:
1. **Daemon SIGSEGV on Skill Review Fork** ([Issue #8654](https://zeroclaw-labs/zeroclaw/issues/8654) - S1/P1): The background skill-review fork panics with an out-of-range slice index and takes down the whole agent process (exit code 139) after a tool-heavy turn. No fix PR is linked yet.
2. **Default Context Budget Exceeds Limits** ([Issue #5808](https://zeroclaw-labs/zeroclaw/issues/5808) - S1/P1): Perpetual preemptive trimming on iteration 1 due to default configurations being too large for a 32k context window.
3. **MCP Tool-Schema Memory Leak** ([Issue #8642](https://zeroclaw-labs/zeroclaw/issues/8642) - S1/P1): Unbounded RSS growth in the agent loop caused by MCP/tool-schema cloning, leading to Out-Of-Memory (OOM) crashes.
4. **OpenAI Provider Rejections** ([Issue #9016](https://zeroclaw-labs/zeroclaw/issues/9016), [Issue #9019](https://zeroclaw-labs/zeroclaw/issues/9019) - S1/P1): OpenAI-compatible tool turns fail when the Chat Completions API rejects reasoning effort, and the Responses provider incorrectly rejects vision-capable models before serializing image input.
5. **CLI Config-Dir Ignored** ([Issue #9017](https://zeroclaw-labs/zeroclaw/issues/9017) - S2): `--config-dir` is ignored during CLI locale detection. *Fix submitted in [PR #9018](https://zeroclaw-labs/zeroclaw/pull/9018).*

### 6. Feature Requests & Roadmap Signals
* **ZeroCode Session Forking** ([Issue #9020](https://zeroclaw-labs/zeroclaw/issues/9020)): Request to add session rewind and fork-from-message workflows. This signals a push toward making ZeroCode a more robust environment for debugging failed agent turns.
* **Operator UX & Self-Service** ([Tracker #9009](https://zeroclaw-labs/zeroclaw/issues/9009)): A new epic tracker for onboarding and pairing, indicating a strategic focus on reducing friction for new operators deploying ZeroClaw.
* **Slack Events API for Scale-to-Zero** ([Issue #9022](https://zeroclaw-labs/zeroclaw/issues/9022)): Request for HTTP Request URL mode alongside Web API polling to support serverless scale-to-zero deployments.
* **Prediction for v0.8.3/0.8.4:** The next versions will likely focus heavily on stabilizing the memory subsystem (caching, reranking, typed facts) and completing the SOP approval broker. The WASM plugin boundary will also transition from architectural prep to active execution.

### 7. User Feedback Summary
Users are highly engaged with ZeroClaw's expanding channel ecosystem (Slack, Telegram, Matrix, WeChat, Line), but experience friction with default configurations that assume leaner tool setups. There is notable dissatisfaction with memory management in continuous deployments—specifically OOM crashes and stale session histories consuming tokens. The demand for features like Slack thread hydration and Telegram multi-message mode indicates that users want the agent to feel more natively integrated into their existing chat workflows rather than functioning as a rigid, stateless bolt-on. 

### 8. Backlog Watch
* **Audit of 153 Reverted Commits** ([Issue #6074](https://zeroclaw-labs/zeroclaw/issues/6074)): Created in April, this `help wanted` issue tracks the recovery of 153 commits lost in a bulk revert. It remains in-progress and requires maintainer attention to close out technical debt.
* **v0.8.3 Milestone Closeout** ([Tracker #7320](https://zeroclaw-labs/zeroclaw/issues/7320)): With 15 open items and multiple XL PRs in the queue, maintaining velocity through the review process is a potential bottleneck. 
* **Session TTL Implementation** ([Issue #8134](https://zeroclaw-labs/zeroclaw/issues/8134): Needs `needs-maintainer-review` tag. Users operating ZeroClaw through channels like Slack and Telegram are actively waiting for the `session_ttl_hours` config parameter to be implemented to auto-truncate stale session history and reduce response latency.

</details>