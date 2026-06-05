# OpenClaw Ecosystem Digest 2026-06-06

> Issues: 472 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-05 22:22 UTC

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

# OpenClaw Project Digest — 2026-06-06

## 1. Today's Overview
OpenClaw is experiencing very high community engagement today, with **472 issues updated** (349 open/active, 123 closed) and **500 pull requests updated** (379 open, 121 merged/closed), but **no new official software releases**. The high ratio of active open items relative to closures suggests the project is either in a heavy development/iteration phase or is struggling to keep pace with triage. The bug tracker is currently dominated by critical regressions tied to the recent `v2026.6.1` upgrade, specifically concerning new model transports (GPT-5.4/5.5), database migrations, and channel stability (Matrix, Telegram, Feishu). Overall project health shows robust contributor activity, though maintainers appear bottlenecked on reviewing the massive volume of open PRs.

## 2. Releases
*No new releases were published today.* 

**Note:** The issue tracker strongly indicates that the recently shipped `v2026.6.1` (which introduced a SQLite migration and new OpenAI ChatGPT Responses transport) is causing significant friction. A hotfix or `v2026.6.2` patch release is likely imminent to address critical data-loss and authentication bugs.

## 3. Project Progress
While no code was merged into a formal release today, 121 PRs were closed or merged, advancing several critical subsystems:
*   **Sub-agent Orchestration:** `sessions_spawn` is receiving heavy patches to properly forward tool allowlists (`toolsAllow`) and fix tool injection pipelines for sub-agents ([PR #78441](https://github.com/openclaw/openclaw/pull/78441)).
*   **Session Reliability:** Several "Lobster" (high-impact) PRs were pushed to resolve silent message loss, recover stranded replies ([PR #88992](https://github.com/openclaw/openclaw/pull/88992)), and fix session state write-lock race conditions that cause `EmbeddedAttemptSessionTakeoverError` ([PR #89039](https://github.com/openclaw/openclaw/pull/89039)).
*   **Diagnostics & Performance:** The control plane is undergoing hardening ([PR #85583](https://github.com/openclaw/openclaw/pull/85583)), and a new PR aims to cache the plugin registry to kill a CPU storm triggered by `/models` endpoint polling ([PR #90747](https://github.com/openclaw/openclaw/pull/90747)).
*   **Channel Ecosystems:** Telegram Guest Mode ([PR #83632](https://github.com/openclaw/openclaw/pull/83632)), Discord channel routing fixes, and Android SSH tunneling UI ([PR #90761](https://github.com/openclaw/openclaw/pull/90761)) all saw active updates.

## 4. Community Hot Topics
*   **Tiered Context Loading:** [Issue #22438](https://github.com/openclaw/openclaw/issues/22438) (17 comments). The community is heavily debating a proposal to introduce tiered bootstrap file loading. Because OpenClaw currently loads all context on every session (including sub-agents/crons), heavy users are bleeding LLM tokens.
*   **OpenAI GPT-5.4 / 5.5 Transport Failure:** [Issue #90083](https://github.com/openclaw/openclaw/issues/90083) (12 comments). The new OpenAI Responses API integration is breaking on `gpt-5.4` and `gpt-5.5` models with invalid content types.
*   **Cron State Wipe on Upgrade:** [Issue #90072](https://github.com/openclaw/openclaw/issues/90072) (6 comments, 3 thumbs up). Upgrading to `2026.6.1` silently deleted 44 out of 45 cron jobs during a SQLite migration, severely impacting automated workflows.
*   **Agent Laziness / Non-Completion:** [Issue #62505](https://github.com/openclaw/openclaw/issues/62505) (14 comments). Users report a regression where coding agents suddenly stop completing tasks and output vague status updates.
*   **Per-Agent Memory Isolation:** [Issue #63829](https://github.com/openclaw/openclaw/issues/63829) (9 comments, 9 thumbs up). High demand for allowing multi-agent setups to maintain isolated knowledge wikis rather than sharing a global vault.

## 5. Bugs & Stability
Regressions and data-loss issues currently dominate the bug tracker. 
*   **P1 - State Loss & Crashes:**
    *   **Silent Data Wipe:** Upgrading to 6.1 deletes cron state ([Issue #90072](https://github.com/openclaw/openclaw/issues/90072)).
    *   **Matrix Channel Crash:** 6.1 completely broke Matrix inbound dispatching due to a `TypeError` ([Issue #90325](https://github.com/openclaw/openclaw/issues/90325)).
    *   **OAuth Wedge:** Codex OAuth refresh failures are hanging agents for hours without alerting ([Issue #86215](https://github.com/openclaw/openclaw/issues/86215)).
*   **P1 - Messaging & Transport:**
    *   **OpenAI Responses Error:** Invalid content types breaking gpt-5.x models ([Issue #90083](https://github.com/openclaw/openclaw/issues/90083)). 
    *   **Feishu Streaming:** Typewriter effect bugs and final output truncated to a single character ([Issue #88929](https://github.com/openclaw/openclaw/issues/88929)).
*   **Fixes in Flight:** Maintainers and contributors have already submitted targeted fixes for OAuth probing during cooldown ([PR #90717](https://github.com/openclaw/openclaw/pull/90717)), memory status identity checks ([PR #90748](https://github.com/openclaw/openclaw/pull/90748)), and reasoning tag stripping for clean chat outputs ([PR #90051](https://github.com/openclaw/openclaw/pull/90051)).

## 6. Feature Requests & Roadmap Signals
The community is pushing for better resource management and security boundaries:
*   **MCP Consent Envelopes:** Users want MCP servers to utilize a channel-mediated approval pipeline for sensitive operations (like sending emails or writing to vaults), extending existing shell-exec safeties ([Issue #78308](https://github.com/openclaw/openclaw/issues/78308)).
*   **Token/Organization Caps:** Requests for `session.maxDurationMinutes` and `session.maxTokensPerSession` to hard-cap costs for runaway agents ([Issue #64463](https://github.com/openclaw/openclaw/issues/64463)).
*   **UI Improvements:** A highly requested feature to allow collapsing the Workspace/Files rail in WebChat has already received an AI-assisted PR ([Issue #90246](https://github.com/openclaw/openclaw/issues/90246), [PR #90754](https://github.com/openclaw/openclaw/pull/90754)).
*   **Exec Sandboxing:** Inspired by recent competitor source leaks, the community is lobbying for hardened `exec()` sandbox isolation and granular tool permissions ([Issue #58730](https://github.com/openclaw/openclaw/issues/58730)).

## 7. User Feedback Summary
Users are actively running complex multi-agent setups across diverse channels (Telegram, Feishu, Discord, Matrix) and heavily utilizing self-hosted LLMs. 
*   **Pain Points:** Users are frustrated by **silent data loss** (the SQLite cron wipe was a major blow to trust) and **API fragility in patch updates**. Session state persistence is a recurring headache; users dislike that context is destroyed during daily resets or routine compaction.
*   **Satisfaction/Dissatisfaction:** Users love the multi-channel flexibility and the depth of the tool ecosystem, but express fatigue over the "whack-a-mole" nature of session-state bugs and message swallowing. Android users are pleased with active UI development but note connectivity issues when operators go offline during onboarding.

## 8. Backlog Watch
Several highly-upvoted or critical issues have been sitting open for weeks without concrete maintainer resolution:
*   **Uninitialized Slash Commands:** Mattermost integrations have been returning 503s since April ([Issue #68113](https://github.com/openclaw/openclaw/issues/68113)).
*   **Telegram Multi-Account Config Bug:** A P1 regression blocking Telegram scaling has been open since early April ([Issue #62985](https://github.com/openclaw/openclaw/issues/62985)).
*   **Sub-agent MCP Tool Injection:** Sub-agents spawned via `sessions_spawn` are completely ignoring MCP tool schemas, breaking complex automations ([Issue #85030](https://github.com/openclaw/openclaw/issues/85030)).
*   **Massive PR Review Queue:** There are currently **379 open PRs**, many carrying `👀 ready for maintainer look` or `📣 needs proof` tags. The contributor base is highly active, but core maintainers appear to be facing a severe triage bottleneck, threatening overall velocity.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem based on the June 5-6, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by high-velocity development, rapid architectural iteration, and a strong push toward enterprise readiness. Projects are evolving from simple chatbot wrappers into complex, multi-agent systems requiring robust state management, granular security permissions, and seamless multi-channel communication. While core frameworks are aggressively expanding their plugin and tool-calling capabilities, they are simultaneously navigating significant growing pains, including severe triage bottlenecks, API fragility with next-generation LLMs (e.g., GPT-5.x), and complex data persistence bugs.

### 2. Activity Comparison
*Note: Health scores are estimated based on issue/PR velocity, maintainer responsiveness, and bug severity.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Key Indicator |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 472 | 500 | No Release | 7.5/10 | Massive volume, but PR review bottlenecked |
| **ZeroClaw** | 50 | 50 | No Release | 8.5/10 | Strategic enterprise security focus |
| **CoPaw** | 56 | *active* | No Release | 8.0/10 | High bug turnaround, new channel integrations |
| **IronClaw** | 11 | 50 | Pending v0.29.1 | 8.5/10 | Major architectural "Reborn" refactor |
| **Hermes Agent**| 45 | 48 | No Release | 7.0/10 | Desktop app launch causing bug influx |
| **NanoBot** | 10 | 27 | No Release | 8.0/10 | High velocity on desktop/WebUI features |
| **PicoClaw** | 6 | 24 | Nightly v0.2.9 | 9.0/10 | Excellent stability, active CI/CD |
| **Moltis** | 4 | 4 | No Release | 8.0/10 | Focused on container hardening |
| **LobsterAI** | 13 | 13 | Released 2026.6.5 | 8.5/10 | Strong UX/Monetization focus |
| **NanoClaw** | 0 | 5 | No Release | 9.0/10 | Highly stable, targeted bug fixes |
| **NullClaw** | 0 | 1 | No Release | 8.0/10 | Low activity, stable |
| **TinyClaw / ZeptoClaw** | 0 | 0 | No Release | N/A | Dormant |

### 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw remains the undeniable core reference implementation with the largest community footprint (472 issues, 500 PRs in 24h). Its extensive multi-channel support (Matrix, Telegram, Feishu, Discord) and deep agent orchestration capabilities (`sessions_spawn`) are currently more mature than most competitors. 
**Technical Approach:** OpenClaw is dealing with the complexities of scaling a massive, monolithic-like contributor base. While projects like IronClaw and ZeroClaw are actively refactoring into modular boundaries (e.g., separating mutating/non-mutating workflows), OpenClaw relies on aggressive patching of its existing transport and control-plane layers.
**Community Size Comparison:** OpenClaw's community is an order of magnitude larger than peers like NanoBot or PicoClaw. However, this is currently a liability; with 379 open PRs and critical bugs sitting in the backlog, it is suffering from severe maintainer triage bottlenecks that smaller, more agile teams (like PicoClaw and NanoClaw) are avoiding.

### 4. Shared Technical Focus Areas
*   **Doom Loop & Infinite Loop Prevention:** (Hermes, CoPaw, PicoClaw). As agents gain autonomy, they frequently get stuck repeating tool calls or burning tokens. There is a universal need for circuit breakers to pause agents automatically.
*   **Sub-agent Orchestration & Memory Isolation:** (OpenClaw, NanoBot, CoPaw). Multi-agent setups are failing because sub-agents either inherit incorrect tool schemas or pollute a global memory vault. Granular, per-agent memory isolation is heavily requested.
*   **State Persistence & Data Loss:** (OpenClaw, Hermes, NanoBot, LobsterAI). Silent data dropping during browser refreshes, SQLite migrations, or context window compaction is a primary pain point across the ecosystem.
*   **Multi-Channel Routing & Fixes:** (IronClaw, NanoClaw, CoPaw, PicoClaw). Routing messages reliably across platforms like WeCom, WhatsApp, Signal, and Slack without silent drops or approval-loop failures remains a highly complex engineering hurdle.
*   **Exec Sandboxing & Security Permissions:** (OpenClaw, ZeroClaw, Moltis, CoPaw). Simply executing shell commands is no longer sufficient. Projects require WASM plugins, Podman/Docker isolation, and granular RBAC (Role-Based Access Control) for MCP tools.

### 5. Differentiation Analysis
*   **OpenClaw & CoPaw:** Focus on broad, horizontal platform support. CoPaw is uniquely leaning into UI/Console features (avatars, LaTeX rendering), whereas OpenClaw focuses heavily on raw backend transport and LLM API support.
*   **IronClaw & ZeroClaw:** These projects are targeting *enterprise readiness*. IronClaw is executing a massive "Reborn" refactor for clean API boundaries, while ZeroClaw is heavily focused on enterprise security postures (OIDC, RBAC, Air-gapped execution).
*   **NanoBot & Hermes Agent:** Both are heavily prioritizing the *Desktop user experience*. Hermes is currently facing the typical backlashes of a v1.0 desktop launch (IME bugs, path corruption), while NanoBot is refining WebUI/Desktop stability and multi-agent message buses.
*   **PicoClaw, NanoClaw, LobsterAI, Moltis:** These projects represent a tier of highly focused, stabilizing tools. LobsterAI is unique in its active push toward native monetization and subscription gating, while PicoClaw and Moltis are iterating quietly on local container/sandbox execution.

### 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Momentum, Variable Stability):** OpenClaw, IronClaw, ZeroClaw, and Hermes. These projects are shipping massive architectural changes and facing high bug volumes. Hermes is struggling with desktop stability, while OpenClaw's maintainers are risking velocity loss due to an overloaded PR queue.
*   **Stabilizing & Maturing (Consistent Momentum, High Stability):** NanoBot, CoPaw, LobsterAI. These projects have healthy engagement, merge PRs consistently, and are actively polishing UX and hardening existing features rather than rewriting core architecture.
*   **Quietly Stable / Maintenance Mode:** PicoClaw, NanoClaw, Moltis, NullClaw. These projects exhibit low issue counts but high merge ratios for the PRs they do receive. They are reliable for end-users but lack the explosive community growth of the top-tier projects.

### 7. Trend Signals
1.  **MCP (Model Context Protocol) is the New Standard:** Almost every project is integrating MCP for external tool calling. However, the trend is rapidly shifting toward *securing* MCP (consent envelopes, IPC channels, approval gates) rather than just supporting it.
2.  **Token Cost Anxiety:** Users are highly sensitive to unbounded token consumption. Whether due to "Evolution drafting" (PicoClaw), broken context limits (IronClaw), or daily context reloading (OpenClaw), developers must implement strict cost caps (`maxTokensPerSession`) and transparent token dashboards.
3.  **Demand for Asynchronous User Control:** Users are frustrated by "black box" agent execution. There is a strong trend demanding the ability to interrupt, pause, or inject prompts into an agent mid-task (CoPaw, OpenClaw).
4.  **Shift from Native Tools to Plugins:** Monolithic tool integration is dying. ZeroClaw (moving Shazam to WASM), IronClaw (replacing 11 WASM tools with HTTP declarations), and CoPaw (OpenSandbox) show a trend toward extensible, sandboxed, and decoupled tool ecosystems.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-06

## 1. Today's Overview
NanoBot demonstrates exceptionally high development velocity and robust community engagement today, evidenced by 27 active Pull Requests (11 merged/closed) and 10 Issue updates. The project is currently undergoing a period of rapid feature expansion and stabilization, with a strong focus on refining its desktop/WebUI experience, enhancing multi-agent collaboration, and patching session-management edge cases. The contributor base is highly active, pushing critical bug fixes while simultaneously proposing significant architectural additions like cross-agent messaging and Python version drops. Overall, project health appears strong, balancing new feature velocity with necessary stability and developer experience (DX) improvements.

## 2. Releases
No new official releases were recorded today. The development team and contributors are currently merging incremental features and bug fixes into the main branch, likely staging for a future minor or patch release.

## 3. Project Progress
A total of 11 PRs were merged or closed today, highlighting significant progress across multiple project domains:
*   **WebUI & Desktop Stability:** The team resolved critical user-facing bugs. Notably, PR [#4201](https://github.com/HKUDS/nanobot/pull/4201) fixed a regression where user messages were lost during browser refreshes, and PR [#4210](https://github.com/HKUDS/nanobot/pull/4210) addressed desktop restart token and replay gaps.
*   **Channel Fixes:** PR [#4197](https://github.com/HKUDS/nanobot/pull/4197) fixed Direct Message pairing flows for Weixin and Telegram, ensuring denied senders are handled correctly.
*   **Skill Management:** PR [#3968](https://github.com/HKUDS/nanobot/pull/3968) successfully introduced the `/skill` slash command, resolving a long-standing UX gap where users couldn't easily list enabled skills.
*   **Tooling & DX:** Progress was made on internal architecture, including a PR to drop Python 3.11/3.12 support ([#4207](https://github.com/HKUDS/nanobot/pull/4207)) to align with CI practices, and PR [#4215](https://github.com/HKUDS/nanobot/pull/4215) which addressed a severe session message-dropping bug.

## 4. Community Hot Topics
*   **Long-standing CI Instability:** Issue [#1946](https://github.com/HKUDS/nanobot/issues/1946) (Matrix test errors on `main`) was updated today. Although an older issue, its persistent activity highlights underlying testing flakiness in channel integrations that the community is actively trying to resolve.
*   **Provider Flexibility (OpenAI-compatible APIs):** Issue [#3959](https://github.com/HKUDS/nanobot/issues/3959) (4 comments) regarding the `/skill` command ignoring disabled skills was officially closed following the merge of a fix. Similarly, Issue [#4204](https://github.com/HKUDS/nanobot/issues/4204) proposed adding `extra_query` support for Azure-style gateways, reflecting a strong user need to adapt NanoBot to varied, customized LLM gateways.
*   **Third-Party Integrations:** PR [#4213](https://github.com/HKUDS/nanobot/pull/4213) (Adding Exa as a web search provider) sparked engagement. This indicates that external developers are actively extending NanoBot's tool ecosystem, a strong signal of a healthy open-source ecosystem.

## 5. Bugs & Stability
Several critical bugs were identified and promptly addressed today:
1.  **Critical: Session Message Deletion** - Issue [#4203](https://github.com/HKUDS/nanobot/issues/4203) reported that `find_legal_message_start` dropped *all* messages if an orphan tool result followed a user message. **Fix:** PR [#4215](https://github.com/HKUDS/nanobot/pull/4215) is already open and corrects the prefix-cutting logic.
2.  **High: SDK Shutdown RuntimeError** - Issue [#4211](https://github.com/HKUDS/nanobot/issues/4211) noted that embedding NanoBot via the SDK with a stdio MCP server causes an unhandled `RuntimeError` at interpreter shutdown. (No fix PR yet).
3.  **High: WebUI Message Loss** - Issue [#4200](https://github.com/HKUDS/nanobot/issues/4200) reported user messages disappearing upon browser refresh. **Fix:** Successfully resolved via PR [#4201](https://github.com/HKUDS/nanobot/pull/4201) by persisting WebUI transcripts before dispatching inbound turns.
4.  **Medium: Disabled Skills Listed** - Issue [#3959](https://github.com/HKUDS/nanobot/issues/3959) noted that disabled skills were still appearing. **Fix:** Closed by PR [#3968](https://github.com/HKUDS/nanobot/pull/3968).

## 6. Feature Requests & Roadmap Signals
Today's issues and PRs reveal clear trajectories for upcoming versions:
*   **Advanced Multi-Agent Architectures:** PR [#3992](https://github.com/HKUDS/nanobot/pull/3992) introduces a cross-instance message bus for multi-agent collaboration. PR [#4205](https://github.com/HKUDS/nanobot/pull/4205) adds mailbox-backed subagent results, signaling a massive leap toward robust, decentralized agent swarms.
*   **Desktop Application Focus:** PR [#4195](https://github.com/HKUDS/nanobot/pull/4195) polishes the desktop shell and shared WebUI surfaces, preparing NanoBot for a dedicated desktop release.
*   **Expanded Generation & Provider Support:** Users are requesting broader image generation support (Issue [#4196](https://github.com/HKUDS/nanobot/issues/4196) for Volcengine/Seedream, Issue [#4132](https://github.com/HKUDS/nanobot/issues/4132) for custom providers). PR [#4209](https://github.com/HKUDS/nanobot/pull/4209) already accommodates OpenAI-compatible image APIs.
*   **Sub-agent Configurability:** Issue [#4198](https://github.com/HKUDS/nanobot/issues/4198) requested exposing `fail_on_tool_error` for subagents, allowing agents to self-correct minor tool mistakes rather than hard-failing.

## 7. User Feedback Summary
Users are heavily utilizing NanoBot as an embedded SDK and a complex multi-turn agent platform. 
*   **Pain Points:** The most prominent pain point today was state persistence—specifically, losing context during WebUI refreshes or experiencing message-dropping edge cases in complex tool-call chains. Additionally, developers embedding the SDK are encountering friction with MCP (Model Context Protocol) task scoping during shutdown.
*   **Satisfaction:** The rapid turnaround on the `/skill` command and WebUI refresh bugs shows high maintainer responsiveness, which the community likely appreciates. Developers are enthusiastic about extending the platform, as seen in the influx of provider-specific PRs (Exa search, custom image generators).

## 8. Backlog Watch
*   **CI Matrix Failures on Main:** Issue [#1946](https://github.com/HKUDS/nanobot/issues/1946) (created in March) remains open. Failing tests on `main` for Matrix channels can erode contributor confidence and should be prioritized.
*   **Pending CI/CD Overhauls:** PRs [#1408](https://github.com/HKUDS/nanobot/pull/1408) and [#1284](https://github.com/HKUDS/nanobot/pull/1284) have been sitting in the backlog since late February/early March. Merging a standardized CI pipeline with coverage gates is critical for maintaining code quality as the project scales.
*   **Gateway Commands:** PR [#3538](https://github.com/HKUDS/nanobot/pull/3538) (adding gateway start/stop/restart commands) has been pending since late April. Given the current push toward desktop experiences, this feature would be highly complementary and needs a maintainer review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest: 2026-06-06

## 1. Today's Overview
The Hermes Agent project is currently experiencing a massive surge in community activity, driven largely by the apparent recent launch of its new Desktop client. With 45 open issues and 48 open pull requests updated in the last 24 hours, maintainers are facing a significant volume of incoming triage. The majority of today's traffic consists of bug reports related to desktop GUI crashes, Input Method Editor (IME) bugs for CJK users, and platform-specific quirks on Windows and macOS. Meanwhile, the core engineering team and dedicated contributors continue to focus on critical backend security, gateway stability, and agent loop prevention mechanisms. 

## 2. Releases
No new releases were recorded today. The project remains on version v0.15.1.

## 3. Project Progress
Despite no official version releases, core maintainers and community members merged or closed 2 PRs today, with 48 PRs actively under review. Key advancements include:

*   **Skill Resolution Fix:** PR [#40133](https://github.com/NousResearch/hermes-agent/pull/40133) (CLOSED) fixed a bug where `skill_view` failed to resolve skills by their declared frontmatter `name`, relying instead on the directory name.
*   **Security Dependency Restores:** PR [#34264](https://github.com/NousResearch/hermes-agent/pull/34264) (CLOSED) backported critical security fixes for `aiohttp` and `cryptography` that were accidentally rolled back in the v0.14.0 release.
*   **Active PRs in the Pipe:** Critical infrastructure fixes are currently open, including hardening Telegram status/startup ([#40151](https://github.com/NousResearch/hermes-agent/pull/40151)), preventing conversation history permanent deletion during session rotation ([#40112](https://github.com/NousResearch/hermes-agent/pull/40112)), and adding a `claude-code` provider to route inference through the Claude CLI ([#40074](https://github.com/NousResearch/hermes-agent/pull/40074)).

## 4. Community Hot Topics
The community is heavily focused on Desktop App reliability, remote instance connectivity, and LLM agent looping.

*   **Remote VPS Connectivity & Profile Switching:** Users are highly frustrated that the new Desktop client cannot connect to existing remote VPS instances, instead forcing local setups ([Issue #37663](https://github.com/NousResearch/hermes-agent/issues/37663), 3 comments). A highly requested companion feature is a UI profile switcher for remote connections ([Issue #37713](https://github.com/NousResearch/hermes-agent/issues/37713), 3 comments, 3 upvotes).
*   **Agent Doom Loops:** Users are actively discussing the need for "Doom Loop Detection" to pause the agent when it repeats identical tool calls consecutively ([Issue #512](https://github.com/NousResearch/hermes-agent/issues/512), 1 comment; [Issue #35573](https://github.com/NousResearch/hermes-agent/issues/35573), 1 comment).
*   **Truncated Skill Descriptions:** A known issue where the system prompt truncates skill descriptions to 60 characters is hindering accurate tool routing, sparking conversation on how the LLM parses available tools ([Issue #13944](https://github.com/NousResearch/hermes-agent/issues/13944), 6 comments).

## 5. Bugs & Stability
Today's bug reports paint a picture of a Desktop client that needs stabilization, alongside some core agent routing issues. Ranked by severity:

*   **P1 - Critical Data Loss / Stability:**
    *   [PR #40112](https://github.com/NousResearch/hermes-agent/pull/40112) fixes a critical bug where three code paths (including manual `/compress`) could permanently delete conversation history during session rotation.
*   **P2 - Core Agent & Gateway:**
    *   [Issue #40014](https://github.com/NousResearch/hermes-agent/issues/40014): Claude Code OAuth tokens are hitting pay-per-token endpoints instead of subscription quotas, costing users money.
    *   [Issue #39694](https://github.com/NousResearch/hermes-agent/issues/39694): Telegram clarify prompts show incorrect UI controls, interrupting the user input surface.
    *   [Issue #40103](https://github.com/NousResearch/hermes-agent/issues/40103): ANSI escape bodies leak into session titles as visible garbage. (Fix available at [PR #40150](https://github.com/NousResearch/hermes-agent/pull/40150)).
*   **P2/P3 - Desktop Client Crashes & Input Issues:**
    *   [Issue #39570](https://github.com/NousResearch/hermes-agent/issues/39570): Native Windows app crashes immediately on launch.
    *   [Issue #40077](https://github.com/NousResearch/hermes-agent/issues/40077): Desktop app crashes on Ubuntu 24.04 with NVIDIA 580+ drivers.
    *   [Issue #39538](https://github.com/NousResearch/hermes-agent/issues/39538) & [Issue #40146](https://github.com/NousResearch/hermes-agent/issues/40146): Severe CJK/IME input bugs where the send button fails to appear or text is dropped on Enter. (Fix available at [PR #40148](https://github.com/NousResearch/hermes-agent/pull/40148)).
*   **Security:**
    *   [Issue #35357](https://github.com/NousResearch/hermes-agent/issues/35357): Non-shell tools like `write_file` bypass the human-in-the-loop approval gate. (Actively being patched via [PR #38075](https://github.com/NousResearch/hermes-agent/pull/38075)).

## 6. Feature Requests & Roadmap Signals
*   **Tool Call Storm Breaking:** [Issue #512](https://github.com/NousResearch/hermes-agent/issues/512) and [Issue #35573](https://github.com/NousResearch/hermes-agent/issues/35573) strongly signal that built-in "Doom Loop / Tool Storm" detection will be a core feature in upcoming releases.
*   **Expanded Provider Support:** [PR #40074](https://github.com/NousResearch/hermes-agent/pull/40074) introduces a `claude-code` provider subprocess to bypass strict API rate limits. Expect official support for routing inference through native CLI tools.
*   **Plugin & Delegation Control:** [PR #40143](https://github.com/NousResearch/hermes-agent/pull/40143) adds a `pre_delegate_build` hook, signaling an upcoming expansion of the plugin API to allow granular model routing for sub-agents.
*   **IRC Channel Observation:** [PR #39935](https://github.com/NousResearch/hermes-agent/pull/39935) adds unaddressed channel context logging for IRC, showing a push toward broader multi-platform adapter capabilities.

## 7. User Feedback Summary
The core agent and CLI tool remain highly valued by power users, who are utilizing advanced setups ranging from NixOS modules to remote VPS hosting. However, there is distinct dissatisfaction surrounding the newly launched Desktop client. Windows users are particularly vocal about multiple issues: the app creates an isolated environment instead of integrating with WSL ([Issue #40140](https://github.com/NousResearch/hermes-agent/issues/40140)), secret redaction is breaking actual command execution rather than just masking display output ([Issue #40139](https://github.com/NousResearch/hermes-agent/issues/40139)), and file paths are being corrupted by prepending Windows drive letters to Linux paths ([Issue #40138](https://github.com/NousResearch/hermes-agent/issues/40138)). Meanwhile, international users are severely impacted by the broken IME input handling ([Issue #40145](https://github.com/NousResearch/hermes-agent/issues/40145)).

## 8. Backlog Watch
*   **MCP Approval Gate Bypass:** [Issue #21563](https://github.com/NousResearch/hermes-agent/issues/21563) outlines a critical architectural flaw where MCP bridge approval tools are essentially "no-ops" because the subprocess has no IPC channel to the gateway state. This requires immediate maintainer attention.
*   **Credential Pool Exhaustion:** [PR #32873](https://github.com/NousResearch/hermes-agent/pull/32873) has been open since late May fixing a bug where revoked OAuth tokens rejoin the rotation every 5 minutes. This needs a priority review and merge.
*   **macOS GUI PATH isolation:** [Issue #37589](https://github.com/NousResearch/hermes-agent/issues/37589) reports that Desktop sessions miss configured MCP tools because the GUI app operates under an isolated `PATH` that doesn't recognize `uvx`. This is a high-friction issue for Mac power users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-06-06

## 1. Today's Overview
PicoClaw demonstrated robust maintenance activity on June 5–6, 2026, with 24 pull requests updated (22 merged/closed) and 6 issues processed (4 closed). The project shipped a new nightly build (`v0.2.9-nightly.20260605.5224b9a4`), indicating an active CI/CD pipeline tracking the `main` branch toward a future `v0.2.9` stable release. The majority of merged PRs are targeted bug fixes addressing channel routing, type assertion panics, context display, and documentation corrections. Community engagement is steady, with multiple contributors filing issues around token consumption, workspace safety guards, and provider model configuration. Overall, the project is in a healthy, incrementally stabilizing phase.

## 2. Releases

- **nightly: `v0.2.9-nightly.20260605.5224b9a4`** — Automated nightly build. Marked as potentially unstable. Tracks changes from `v0.2.9` to `main`.
  - No explicit breaking changes or migration notes documented in the release body.
  - [Full Changelog](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress

A high merge throughput of 22 PRs reflects active stabilization. Key merged contributions:

| Area | PR | Summary |
|------|----|---------|
| **OneBot channel** | [#3009](https://github.com/sipeed/picoclaw/pull/3009) | Fixed group reply routing by prefixing `chatID` with `group:`, resolving misrouting to `send_private_msg`. |
| **Channel config** | [#3010](https://github.com/sipeed/picoclaw/pull/3010) | Added safe type-assertion checks in `toChannelHashes` to prevent panics on unexpected JSON values. |
| **Agent events** | [#3011](https://github.com/sipeed/picoclaw/pull/3011) | Added `ok`-checked type assertion in `UnsubscribeEvents` to guard against `sync.Map` panics. |
| **Context display** | [#2985](https://github.com/sipeed/picoclaw/pull/2985) | `/context` now shows both summarize and compress thresholds, fixing confusion reported in #2968. |
| **Skill docs** | [#3013](https://github.com/sipeed/picoclaw/pull/3013) | Removed references to missing `init_skill.py` and `package_skill.py` from skill-creator docs. |
| **Dependencies** | [#2962](https://github.com/sipeed/picoclaw/pull/2962), [#2924](https://github.com/sipeed/picoclaw/pull/2924)–[#2927](https://github.com/sipeed/picoclaw/pull/2927), [#2922](https://github.com/sipeed/picoclaw/pull/2922), [#2919](https://github.com/sipeed/picoclaw/pull/2919) | Bumped Anthropic Go SDK (1.26→1.46), React (19.2.5→19.2.6), shadcn (4.7→4.8), TanStack Router/Query, Tabler Icons, and `go.mau.fi/util`. |
| **Web security** | [#2900](https://github.com/sipeed/picoclaw/pull/2900) | Added CSRF protection, path traversal validation, and security headers to web backend. |
| **Provider fallback** | [#2905](https://github.com/sipeed/picoclaw/pull/2905) | Fixed fallback-chain handling to short-circuit on expired contexts. |
| **Memory/JSONL** | [#2907](https://github.com/sipeed/picoclaw/pull/2907), [#2913](https://github.com/sipeed/picoclaw/pull/2913) | Fixed crash-consistency metadata drift and eliminated hot-path cloning in JSONL session index. |
| **MiMo provider** | [#2915](https://github.com/sipeed/picoclaw/pull/2915) | Added `CommonModels` for MiMo (mimo-v2.5 multimodal, mimo-v2.5-pro text-only) for WebUI model recommendations. |
| **Web UI** | [#2908](https://github.com/sipeed/picoclaw/pull/2908) | Restored provider logo fallbacks on the models configuration page. |

Still open and notable:
- **[#2964](https://github.com/sipeed/picoclaw/pull/2964)**: Configurable inbound image compression for the vision pipeline.
- **[#2551](https://github.com/sipeed/picoclaw/pull/2551)**: Large refactor to decouple channel names from provider types (stale, needs review).

## 4. Community Hot Topics

| Issue/PR | Engagement | Analysis |
|----------|------------|----------|
| [**#1042** — exec tool `guardCommand` over-blocking](https://github.com/sipeed/picoclaw/issues/1042) | 15 comments, 👍 2 | The most-discussed issue. When `restrict_to_workspace` is enabled, the safety regex incorrectly parses URL-like arguments (e.g., `wttr.in/Beijing`) as relative directory traversals (`../../../../Beijing?T`), blocking harmless commands. Users running tool-calling workflows with web-fetch skills are heavily impacted. This signals a need for smarter command sandboxing. |
| [**#2968** — `/context` shows incorrect compress threshold](https://github.com/sipeed/picoclaw/issues/2968) | 5 comments, 👍 1 | Users configuring large-context models (MiniMax 128K) saw a confusing static "Compress at: 76800 tokens." Fixed by PR [#2985](https://github.com/sipeed/picoclaw/pull/2985), revealing strong demand for transparency in context window management. |
| [**#2916** — CPU/Memory/IO optimizations proposal](https://github.com/sipeed/picoclaw/issues/2916) | 4 comments | Community-proposed deep optimization plan for the codebase. Currently stale—indicates appetite for performance improvements but lacks maintainer bandwidth. |

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| 🔴 **High** | [**#3012** — Continuous token consumption every minute with Evolution enabled](https://github.com/sipeed/picoclaw/issues/3012) | Open, 1 comment | No fix PR yet. A cost-impacting bug where Evolution mode in "Draft" with code-path triggers burns tokens in a loop. Needs urgent attention. |
| 🟠 **Medium** | [**#3002** — OneBot group reply uses `send_private_msg` instead of `send_group_msg`](https://github.com/sipeed/picoclaw/issues/3002) | Closed | Fixed by [#3009](https://github.com/sipeed/picoclaw/pull/3009). |
| 🟠 **Medium** | [**#2968** — `/context` shows incorrect compress threshold](https://github.com/sipeed/picoclaw/issues/2968) | Closed | Fixed by [#2985](https://github.com/sipeed/picoclaw/pull/2985). |
| 🟡 **Medium-Low** | [**#1042** — `guardCommand` regex blocks non-path commands](https://github.com/sipeed/picoclaw/issues/1042) | Closed | Acknowledged, but underlying regex logic refinement may still be needed. |
| 🟢 **Low** | Potential panics from unchecked type assertions in channel config and event unsubscription | Resolved | Fixed by [#3010](https://github.com/sipeed/picoclaw/pull/3010) and [#3011](https://github.com/sipeed/picoclaw/pull/3011). |

## 6. Feature Requests & Roadmap Signals

- **Vision pipeline image compression** ([PR #2964](https://github.com/sipeed/picoclaw/pull/2964), open): Configurable multi-level compression for inbound images. Directly addresses cost and latency when using vision-capable models. Likely to land in `v0.2.9` or a follow-up.
- **MiMo model integration** ([PR #2915](https://github.com/sipeed/picoclaw/pull/2915), closed/merged): Adding `CommonModels` for MiMo provider suggests expanding provider coverage is a roadmap priority.
- **Channel multi-instance support** ([PR #2551](https://github.com/sipeed/picoclaw/pull/2551), open/stale): Decoupling channel names from provider types to allow multiple instances of the same provider. A large refactor—likely post-`v0.2.9`.
- **Skill creator documentation overhaul** ([Issue #652](https://github.com/sipeed/picoclaw/issues/652), open): Audit and fix the workspace skill-creator workflow. Partially addressed by [PR #3013](https://github.com/sipeed/picoclaw/pull/3013) (doc references), but full functionality still pending.

**Prediction for next stable release (`v0.2.9`)**: Focus on channel routing hardening, context management transparency, provider expansion (MiMo, Anthropic SDK upgrade), and security hardening. Image compression may be included if it clears review.

## 7. User Feedback Summary

- **Pain point — Token cost anxiety**: Issue #3012 (continuous Evolution token drain) highlights that users deploying autonomous/agentic features are highly sensitive to unbounded token consumption. Clearer budgets, rate limits, or visibility dashboards are needed.
- **Pain point — Safety guard overreach**: Issue #1042 reveals frustration when sandboxing is too aggressive, breaking legitimate tool-use workflows (weather, web fetch). Users want smarter, context-aware command validation.
- **Pain point — Configuration transparency**: Issue #2968 shows users want to understand and control context window behavior, especially with large-context providers like MiniMax.
- **Positive signal — Active community contributions**: Multiple external contributors (chengzhichao-xydt, yangwenjie1231, shenjiecode, cytown, SiYue-ZO, afjcjsbx) are submitting fixes and features, indicating a growing, engaged ecosystem.
- **Use case diversity**: Users are deploying PicoClaw on FreeBSD with MiniMax models, using OneBot for IM group bots, and running Evolution mode for autonomous agents—showcasing broad deployment scenarios.

## 8. Backlog Watch

| Item | Age | Concern |
|------|-----|---------|
| [**#1042** — `guardCommand` regex false positives](https://github.com/sipeed/picoclaw/issues/1042) | ~3 months | Closed but the underlying regex-based sandboxing may still be fragile. A deeper refactor of `exec` safety logic is warranted. |
| [**#652** — Skill creator unable to run without editing](https://github.com/sipeed/picoclaw/issues/652) | ~3.5 months | Open with partial doc fix (PR #3013), but the skill still doesn't work out-of-the-box. Affects new-user onboarding. |
| [**#2551** — Channel identification refactor](https://github.com/sipeed/picoclaw/pull/2551) | ~1.5 months, stale | Large architectural change with no recent maintainer feedback. Risks bit-rot as channel code evolves. |
| [**#2916** — Performance optimization proposal](https://github.com/sipeed/picoclaw/issues/2916) | ~2 weeks, stale | Community-contributed optimization plan lacking maintainer response. Could signal alignment on performance goals. |
| [**#3012** — Continuous Evolution token drain](https://github.com/sipeed/picoclaw/issues/3012) | <1 day | Fresh but high-impact. Needs prioritization to prevent user cost incidents. |

---

*Digest generated from public GitHub data on 2026-06-06. Links reference the sipeed/picoclaw repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-06

## 1. Today's Overview
NanoClaw is demonstrating active, focused development with steady maintainer engagement and no new issues filed in the last 24 hours. Activity is currently centered on PRs, with 5 updated today (3 open, 2 merged/closed), indicating a healthy bug-fix and integration cycle. The complete absence of new issues suggests the project is in a stable state with a mature codebase. The merged PRs address onboarding friction and configuration correctness, while open PRs target messaging platform reliability and API resilience. Overall, project health appears robust, with contributors proactively addressing edge cases across third-party integrations (WhatsApp, Signal, Claude Agent SDK).

## 2. Releases
No new releases were cut today. The latest merged PRs regarding HF token setup and API error handling are likely being staged for an upcoming patch or minor release.

## 3. Project Progress
Two PRs were successfully merged/closed today, advancing the project's usability and configuration management:
*   **[PR #2691](https://github.com/nanocoai/nanoclaw/pull/2691)** (merged): Corrected the OneCLI setup URL logic when an HF token is missing. By utilizing the gateway's proxied error body (`credential_not_found`), the system now dynamically displays the correct setup URL, eliminating hardcoded fallbacks.
*   **[PR #2690](https://github.com/nanocoai/nanoclaw/pull/2690)** (merged): Simplified the Hugging Face token setup and corrected documentation. It removes an unnecessary per-agent secret assignment step since auto-created agents default to secret mode `all`, streamlining the agent vault configuration process.

Three additional PRs are currently open and under review, focusing on platform-specific bug fixes (detailed in Section 5).

## 4. Community Hot Topics
There are no highly commented or heavily reacted issues/PRs today, as the current batch of PRs has `0` comments and `0` reactions. However, the open PRs reflect silent but critical community needs:
*   **Messaging Reliability:** PRs [#2689](https://github.com/nanocoai/nanoclaw/pull/2689) (Signal) and [#2688](https://github.com/nanocoai/nanoclaw/pull/2688) (WhatsApp) highlight an underlying user reliance on diverse messaging platforms. The fact that PRs are being submitted to address silent message drops and ack errors indicates that community members are actively deploying NanoClaw in complex, multi-platform environments.
*   **API Resilience:** PR [#2692](https://github.com/nanocoai/nanoclaw/pull/2692) addresses transient LLM API errors, showing that maintainers are highly focused on ensuring background agent loops do not fail silently.

## 5. Bugs & Stability
Today's activity featured several significant stability and bug fixes, particularly regarding third-party messaging integrations:
1.  **[PR #2692](https://github.com/nanocoai/nanoclaw/pull/2692) [OPEN]: API Error Handling (High Severity).** The Claude Agent SDK occasionally returns terminal `result` messages instead of throwing exceptions on transient `529 Overloaded` errors. This PR implements a retry mechanism for transient 5xx errors and adds user notifications upon final exhaustion, preventing silent loop failures.
2.  **[PR #2688](https://github.com/nanocoai/nanoclaw/pull/2688) [OPEN]: WhatsApp Group Failures (High Severity).** Addresses silent message delivery failures in WhatsApp LID (LinkedID) groups resulting in Baileys `ack error 421`. The root cause was identified as incorrect phone JID translations, and a fix is currently under review.
3.  **[PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689) [OPEN]: Signal DM Drops (Medium Severity).** Fixes a bug where initial Signal Direct Messages were silently dropped because the router wasn't setting the `isMention: true` flag to auto-create `messaging_groups`. Introduces a `signal:` prefix for platform IDs.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests in the current data set. However, the recent fixes provide strong roadmap signals regarding the project's immediate priorities:
*   **Platform Sync Hardening:** The heavy focus on WhatsApp LIDs and Signal DM routing suggests the next version will likely be a stability-focused release ensuring bulletproof cross-platform messaging.
*   **Zero-Touch Onboarding:** The merging of PRs [#2690](https://github.com/nanocoai/nanoclaw/pull/2690) and [#2691](https://github.com/nanocoai/nanoclaw/pull/2691) points to an ongoing effort to completely remove friction from the initial setup and vault configuration process. 

## 7. User Feedback Summary
Direct user sentiment is not explicitly captured in today's data metrics, but the PRs submitted by contributors (ddaniels, gavrielc, klingel, mcaldas) highlight specific operational pain points. Users deploying NanoClaw as an AI assistant are experiencing friction with vault secret configurations (now fixed) and are encountering silent failures in the wild (API overloads dropping tasks, WhatsApp groups silently rejecting bot messages). The current work reflects a highly operational user base utilizing NanoClaw for persistent, platform-integrated agent tasks.

## 8. Backlog Watch
*No long-unanswered items were present in today's truncated data slice. All PRs updated in the last 24 hours were created within the last 48 hours (June 4-5), indicating prompt maintainer turnaround on recently submitted patches. Continue monitoring PRs [#2689](https://github.com/nanocoai/nanoclaw/pull/2689) and [#2688](https://github.com/nanocoai/nanoclaw/pull/2688) to ensure they do not stall, as messaging platform outages quickly degrade the end-user experience.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-06-06

## 1. Today's Overview
The NullClaw project experienced a low-activity day on 2026-06-06, with zero new issues opened or closed, and no new releases published. The only recorded activity within the last 24 hours is a single new open Pull Request focused on expanding the project's LLM provider ecosystem. Despite the current lull in broader community engagement, the project maintainers continue to receive infrastructural contributions. Overall, project health remains stable, showing a typical cyclical development pattern with a current focus on third-party integrations.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
No Pull Requests were merged, and no Issues were closed today. The only progress indicator is the introduction of a new integration proposal. 
* **[PR #947](https://github.com/nullclaw/nullclaw/pull/947)**: Opened by contributor `EvoLinkAI`, this PR proposes adding Evolink as a first-class OpenAI-compatible provider, indicating ongoing ecosystem expansion.

## 4. Community Hot Topics
There are no highly active discussions, issues, or PRs to report today based on comments or reactions. The sole point of community interaction is currently centered around provider compatibility:
* **[PR #947 - feat(providers): add Evolink as an OpenAI-compatible provider](https://github.com/nullclaw/nullclaw/pull/947)**: Authored by `EvoLinkAI`, this PR suggests integrating the Evolink multi-model gateway. The underlying need here reflects a strong community desire for unified API gateways, allowing users to easily route NullClaw requests to models like GPT-5, Gemini, and DeepSeek without writing custom provider logic.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. Project stability appears to be holding steady with zero critical or minor issue reports opened today.

## 6. Feature Requests & Roadmap Signals
While no formal feature requests were submitted today, the open PR provides a clear signal regarding the project's near-term roadmap:
* **Multi-Model Gateway Integration**: The submission of **[PR #947](https://github.com/nullclaw/nullclaw/pull/947)** highlights a continued push toward supporting multi-model routing gateways. If merged, this will give NullClaw users frictionless access to models like Doubao, MiniMax, and GPT-5 under a single authentication roof. We predict this integration will likely be a headline feature in the next minor or patch version release.

## 7. User Feedback Summary
There is no direct user feedback, pain points, or use-case discussions to synthesize from today's issue tracker.

## 8. Backlog Watch
No long-unanswered issues or stale PRs have been flagged for immediate attention today. The primary item requiring maintainer review is the newly submitted **[PR #947](https://github.com/nullclaw/nullclaw/pull/947)**. Maintainers should evaluate the proposed Evolink integration to ensure its documentation, testing, and authentication handling align with NullClaw's core provider standards.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-06

## 1. Today's Overview
IronClaw is experiencing a high-velocity development phase, evidenced by 50 pull requests updated in the last 24 hours, heavily concentrated on expanding channel integrations and core architectural improvements. The open-source AI assistant framework is actively iterating towards its "Reborn" architecture, with significant internal refactoring to separate mutating and non-mutating boundaries. Community engagement remains steady with 11 issues updated, highlighting active testing from users on recent channel integrations like WeCom and Slack. With 14 PRs merged or closed recently and a major version bump in the works, the project is in a state of aggressive feature maturation and stabilization.

## 2. Releases
No new releases were published today. However, the pending release PR ([#3708](https://github.com/nearai/ironclaw/pull/3708)) indicates an upcoming jump to `v0.29.1`. This release includes **breaking API changes** to `ironclaw_common` (0.4.2 -> 0.5.0) and `ironclaw_skills` (0.3.0 -> 0.4.0). 

## 3. Project Progress
Significant architectural and feature milestones were achieved in the last 24 hours:
*   **Reborn Architecture Refactoring:** Core contributor `danielwpz` pushed a massive architectural PR splitting `ProductWorkflow` into explicit `submit/read/subscribe` doors ([#4506](https://github.com/nearai/ironclaw/pull/4506)). This cleanly separates effect boundaries, preparing the system for OpenAI-compatible API wiring.
*   **Slack Channel Upgrades:** `serrrfirat` advanced the Slack integration significantly, merging/wiring host-beta durable stores ([#4463](https://github.com/nearai/ironclaw/pull/4463)), channel subject routing ([#4509](https://github.com/nearai/ironclaw/pull/4509)), and admin wiring ([#4510](https://github.com/nearai/ironclaw/pull/4510)).
*   **Skills System Overhaul:** PR [#2904](https://github.com/nearai/ironclaw/pull/2904) was closed/merged, successfully replacing 11 legacy WASM API-proxy tools with modern, skill-based HTTP declarations, greatly simplifying the tool framework.
*   **Onboarding UX:** The NEAR onboarding setup menu was updated ([#4497](https://github.com/nearai/ironclaw/pull/4497)) to streamline SSO and API-key setup into a single dropdown.

## 4. Community Hot Topics
The most actively discussed items center around architectural boundaries and upcoming integrations:
*   **ProductWorkflow Boundaries ([#4488](https://github.com/nearai/ironclaw/issues/4488) & [#4483](https://github.com/nearai/ironclaw/issues/4483)):** 2 comments each. Contributors are actively mapping out how to harden the submit/projection boundary to safely allow OpenAI-compatible API wiring.
*   **Budget Governance Collapse ([#4311](https://github.com/nearai/ironclaw/issues/4311)):** 2 comments. There is an ongoing technical discussion regarding how the Reborn model gateway mistakenly maps non-context budget failures into context-overflow errors, indicating a need for finer-grained LLM error handling in the agent loop.
*   **WeCom Staging Validation ([#4191](https://github.com/nearai/ironclaw/issues/4191)):** A comprehensive deep-dive by user `sunglow666` testing the v0.29.0 staging release. It highlights that while core messaging is stable, the Web UI and group chat mechanics need refinement.

## 5. Bugs & Stability
Recent testing has uncovered several bugs, primarily related to channel integrations and the Web UI:
1.  **[High] Model Gateway Misrouting:** The agent loop incorrectly collapses budget governance failures into `ContextOverflow` errors ([#4311](https://github.com/nearai/ironclaw/issues/4311)). *Status: Open, no fix PR yet.*
2.  **[High] Channel Onboarding Misdirection:** Onboarding system events for Telegram and WeCom are sometimes written to existing conversations rather than the newly created channel conversation ([#4500](https://github.com/nearai/ironclaw/issues/4500)). *Status: Open.*
3.  **[Medium] WeCom Tool Approvals Broken:** Replying `y` or `yes` to bot tool approval requests in WeCom group chats fails to approve the request, causing an infinite approval loop ([#4502](https://github.com/nearai/ironclaw/issues/4502)). *Status: Open.*
4.  **[Medium] Nightly E2E Failure:** The scheduled E2E test suite failed ([#4108](https://github.com/nearai/ironclaw/issues/4108)). *Status: Open, under investigation.*
5.  **[Low] Web UI Sidebar Confusion:** WeCom group chats are indistinguishable in the sidebar because titles are derived improperly ([#4505](https://github.com/nearai/ironclaw/issues/4505)). *Status: Open.*
*(Note: Web UI merging of group/DM chats was recently fixed and closed in [#4194](https://github.com/nearai/ironclaw/issues/4194)).*

## 6. Feature Requests & Roadmap Signals
*   **Slack AI Streaming Integration:** User `serrrfirat` formally requested moving away from stopgap "thinking..." messages to native Slack AI streaming for Reborn progress updates ([#4491](https://github.com/nearai/ironclaw/issues/4491)). Expect this to be a major focus for the next Slack milestone.
*   **Security & Hooks Rollout:** A massive 4-PR stack (e.g., [#3937](https://github.com/nearai/ironclaw/pull/3937), [#3936](https://github.com/nearai/ironclaw/pull/3936)) by `zmanian` is landing support for durable backends (Postgres, LibSQL) for the hooks framework. This signals an imminent expansion of third-party extension capabilities.
*   **Owner Visibility:** Users are requesting better UI visibility for unpaired users in group chats to determine if it's a privacy feature or a bug ([#4198](https://github.com/nearai/ironclaw/issues/4198)). 

## 7. User Feedback Summary
Users are enthusiastically stress-testing the newly introduced multichannel capabilities (WeCom and Telegram). The overarching satisfaction with core stability is high, but users are experiencing friction with edge cases in multi-tenant environments—specifically differentiating between DMs and group chats in the UI, and handling bot permissions/approvals in enterprise chat environments. The transition from WASM tools to Skill-based HTTP declarations has also been positively received by contributor-end users seeking easier extension development.

## 8. Backlog Watch
*   **Security Audit Implementations ([#3922](https://github.com/nearai/ironclaw/pull/3922)):** This crucial PR wiring the `SecurityAuditSink` into obligation handlers and hook deny paths has been open since May 23 and requires maintainer attention to merge before third-party hooks go live.
*   **Tool Call Preview Fix ([#4460](https://github.com/nearai/ironclaw/pull/4460)):** An important UX fix for tool call preview projections (distinguishing ready vs. pending states) is awaiting review.
*   **Cross-Tenant Leakage Fix ([#3931](https://github.com/nearai/ironclaw/pull/3931)):** A critical security follow-up fixing cross-tenant leakage and provider spoofing in event triggers has been open since May 23 and should be prioritized for the upcoming v0.29.1 release.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-06-05

## 1. Today's Overview
LobsterAI is experiencing a highly active and healthy development cycle, marked by the successful closure of 13 Pull Requests and the rollout of a new official release (`2026.6.5`). The project team is heavily focused on refining the User Experience (UX), enhancing document handling in the Artifacts module, and hardening application security. While recent feature work is progressing rapidly, the issue tracker indicates a slight maintenance backlog, with three older, currently stale bug reports requiring core maintainer triage. Overall, the project's trajectory is positive, with clear signs of preparation for a more stable, production-ready desktop AI assistant.

## 2. Releases
*   **Release:** [LobsterAI 2026.6.5](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.5) 
    *   **Changes:** This version focuses on core interaction improvements, specifically overhauling channel session synchronization/cleanup in the Cowork module and significantly expanding keyboard shortcuts for better UX.
    *   **Migration/Breaking Notes:** No breaking changes or specific migration steps reported.

## 3. Project Progress
Thirteen PRs were closed and merged today, indicating a highly productive development window. Key advancements include:
*   **Artifacts & File Preview ([PR #2114](https://github.com/netease-youdao/LobsterAI/pull/2114)):** Major enhancements to the file preview and expansion panel experience, specifically improving zoom, layout, and auto-fitting for Office documents, PDFs, and Excel files.
*   **Voice Input & Permissions ([PR #2113](https://github.com/netease-youdao/LobsterAI/pull/2113)):** Resolved macOS microphone permission requests, ensuring the Electron app correctly requests media permissions for ASR (Automatic Speech Recognition) voice input.
*   **Subscription & Monetization Flows ([PR #2112](https://github.com/netease-youdao/LobsterAI/pull/2112), [PR #2118](https://github.com/netease-youdao/LobsterAI/pull/2118)):** Implemented better gating for locked/free-tier models. Users are now prompted to log in or subscribe before submitting if no accessible model is available.
*   **Error UX & UI Improvements ([PR #2116](https://github.com/netease-youdao/LobsterAI/pull/2116)):** Improved error message deduplication (preventing spammy stream errors) and added system messages for free quota exhaustion.
*   **Configuration & Security Patches:** Fixed provider model migration bugs so deleted models remain deleted ([PR #2117](https://github.com/netease-youdao/LobsterAI/pull/2117)), and applied stale/closed labels to older security PRs regarding log credential leakage ([PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534)) and KV store IPC whitelisting ([PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535)).

## 4. Community Hot Topics
While no single issue generated massive new engagement today, three community-reported bugs were marked as `[stale]` as of yesterday/early today, highlighting persistent user concerns:
*   **Draft Content Loss ([Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471)):** A highly detailed bug report regarding the `CoworkPromptInput`. A 300ms debounce causes users to lose drafted text if they switch views or sessions too quickly. *Underlying need:* Seamless state persistence; users expect robust text preservation similar to modern webmail clients.
*   **Overwriting Unsent Prompts ([Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472)):** Editing a historical message silently overwrites currently drafted text. *Underlying need:* Better destructive-action guards and UX friction (confirmation dialogs) to prevent accidental data loss.
*   **Local Model Compatibility ([Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487)):** A user reported failures when executing Python scripts via "skills" using a local 30B model, whereas standard Claude CLI works perfectly. *Underlying need:* Better support and debugging tools for local/enterprise AI models, not just first-party cloud APIs.

## 5. Bugs & Stability
*   **High Severity:** 
    *   [Issue #1487](https://github.com/netease-youdao/LobsterAI/issues/1487): Local model script execution fails. *Fix Status:* None linked yet.
    *   [PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534) & [PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535): Existing security fixes for API proxy credential leakage and KV store IPC sanitization remain in a closed/stale state. Maintainers should verify if these were merged into a different branch or need reopening.
*   **Medium Severity:**
    *   [Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471) & [Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472): Prompt state loss during UI navigation.
    *   [PR #2115](https://github.com/netease-youdao/LobsterAI/pull/2115): Resolved a bug where IM replies were incorrectly assembled from historical messages rather than current-turn messages, and fixed a Windows update launcher bug by replacing VBScript with detached PowerShell.

## 6. Feature Requests & Roadmap Signals
Today's merged PRs reveal strong signals about LobsterAI's immediate roadmap:
*   **Freemium Gating & Authentication:** The project is actively building out subscription walls, login prompts, and quota-exhaustion messaging ([PR #2112](https://github.com/netease-youdao/LobsterAI/pull/2112), [PR #2118](https://github.com/netease-youdao/LobsterAI/pull/2118)).
*   **Enterprise/Local Tooling:** Support for importing external `streamable_http` configs into the SQLite MCP store ([PR #367](https://github.com/netease-youdao/LobsterAI/pull/367)) points toward better enterprise MCP server integration.
*   **Local Analytics:** The introduction of a local SQLite usage statistics panel ([PR #1533](https://github.com/netease-youdao/LobsterAI/pull/1533)) allows users to track their usage locally without sending telemetry to the cloud.

## 7. User Feedback Summary
Users appreciate the application's extensibility (specifically the "Skills" and MCP features) but show frustration when desktop-specific bugs interrupt their workflow. The two reports from user `MaoQianTu` are excellent examples of power-user feedback: precise, well-reproduced, and focused on edge cases in state management. Users leveraging local models (Issue #1487) represent a growing segment of the user base that expects the same tool-calling stability offered by cloud APIs.

## 8. Backlog Watch
The following items require immediate maintainer attention to prevent contributor and user churn:
*   **Open Security PRs/Issues:** [PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534) (API log sanitization) and [PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535) (IPC key whitelisting) are marked closed/stale but address critical security vulnerabilities. Their status needs clarification. 
*   **Stale UX Bugs:** [Issue #1471](https://github.com/netease-youdao/LobsterAI/issues/1471) (Input draft loss) and [Issue #1472](https://github.com/netease-youdao/LobsterAI/issues/1472) (Destructive edit overwrite) have been open for two months with minimal maintainer response. These directly affect core daily usage and should be slated for the next patch cycle.
*   **MCP Configs:** [PR #367](https://github.com/netease-youdao/LobsterAI/pull/367) is a community contribution fixing external MCP JSON imports that has been waiting since March.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for Moltis based on the provided GitHub activity data for June 5-6, 2026.

### 1. Today's Overview
Moltis demonstrated steady and focused development activity over the last 24 hours, with a strong emphasis on hardening its sandbox environment and improving UI/UX workflows. The community remains highly engaged in submitting targeted bug reports and feature requests, particularly regarding multi-environment deployment support. One notable pull request was successfully merged, addressing a specific issue with Telegram streaming, while three new proposals aim to expand container and provider compatibility. Overall, the project is in an active maintenance and iterative improvement phase, showcasing healthy open-source engagement.

### 2. Releases
No new releases were recorded in the last 24 hours. 

### 3. Project Progress
Progress today was driven by one merged PR and three newly opened, substantial PRs focusing on infrastructure and model management:
*   **Merged:** [PR #1099](https://github.com/moltis-org/moltis/pull/1099) successfully resolved [Issue #1097](https://github.com/moltis-org/moltis/issues/1097) by separating temporary Telegram progress streams from final replies, preventing visual glitches during AI generation.
*   **Infrastructure & Sandbox Hardening:** [PR #1106](https://github.com/moltis-org/moltis/pull/1106) introduces opt-in Podman sandbox escape hatches and improves rootless Podman diagnostics. Concurrently, [PR #1105](https://github.com/moltis-org/moltis/pull/1105) fixes Docker sandbox filesystem tool fallbacks, ensuring better gateway access to host mounts. 
*   **Provider Management:** [PR #1104](https://github.com/moltis-org/moltis/pull/1104) advances frontend/backend synchronization by allowing users to seamlessly replace or clear preferred AI models.

### 4. Community Hot Topics
While today's issues lack high comment/reaction counts, the underlying needs of the user base are clearly signaled by rapid issue filing from active contributors like `IlyaBizyaev` and `penso`. 
*   **Deployment Flexibility:** The most notable underlying need is broader container runtime support. [PR #1106 (Podman support)](https://github.com/moltis-org/moltis/pull/1106) and [Issue #1109 (Docker update banners)](https://github.com/moltis-org/moltis/issues/1109) highlight that a significant portion of the community self-hosts Moltis via containers and requires better native compatibility with their chosen tools.
*   **Mobile Web UX:** [Issue #1107](https://github.com/moltis-org/moltis/issues/1107) requesting multiline text input indicates that users are actively using Moltis on mobile devices via the web UI and desire a native app-like experience for longer, more complex AI prompts.

### 5. Bugs & Stability
Stability efforts are currently heavily focused on containerized environments and platform integrations. 
1.  **High/Medium Severity - Docker Sandboxing:** Host mount accessibility is currently failing in certain setups, necessitating [PR #1105](https://github.com/moltis-org/moltis/pull/1105) to implement a container copy fallback. (Fix PR is currently open).
2.  **Medium Severity - Web UI Confusion:** [Issue #1108](https://github.com/moltis-org/moltis/issues/1108) reports that past-day sessions only display timestamps without dates, representing a functional regression in user session management. (No fix PR yet).
3.  **Low Severity - UI Update Prompts:** [Issue #1109](https://github.com/moltis-org/moltis/issues/1109) notes that update banners do not account for Docker installs, which could confuse self-hosting users. (No fix PR yet).
4.  **Resolved - Telegram Streaming:** The bug mixing intermediate output into final Telegram replies was officially patched via [PR #1099](https://github.com/moltis-org/moltis/pull/1099).

### 6. Feature Requests & Roadmap Signals
*   **Multiline Mobile Input:** [Issue #1107](https://github.com/moltis-org/moltis/issues/1107) requests multiline text input for the mobile web UI. Given the project's clear focus on UI refinements (e.g., fixing session times), this is a strong candidate for a quick UX win in an upcoming release.
*   **Preferred Model Replacements:** The introduction of [PR #1104](https://github.com/moltis-org/moltis/pull/1104) signals that the project is actively building out sophisticated LLM provider routing, allowing users to dynamically swap preferred models from the UI. 

### 7. User Feedback Summary
Real user pain points revolve heavily around deployment friction and AI delivery mechanisms. Self-hosters using Docker are encountering broken host-mount reads, indicating that recent updates may have inadvertently affected gateway file-access permissions. Additionally, the Telegram integration previously suffered from "streaming noise," which users found disruptive; the prompt resolution of this issue was well-received. Finally, the friction of typing complex prompts on mobile web browsers is a definite dissatisfaction point, as single-line inputs restrict power users.

### 8. Backlog Watch
While none of the current items are severely aging, the newly opened issues require maintainer attention to prevent them from stalling:
*   [Issue #1109](https://github.com/moltis-org/moltis/issues/1109) and [Issue #1108](https://github.com/moltis-org/moltis/issues/1108) are straightforward UI/UX bugs that should ideally be triaged and paired with a fix PR soon to maintain momentum.
*   [PR #1105](https://github.com/moltis-org/moltis/pull/1105) and [PR #1106](https://github.com/moltis-org/moltis/pull/1106) require careful maintainer review, as modifying filesystem fallbacks and adding Podman escape hatches involves critical security and sandboxing implications.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-06-06

## 1. Today's Overview
The CoPaw project is experiencing highly active development and robust community engagement, evidenced by 56 total issue and pull request updates within the last 24 hours. The open-source community is actively addressing critical bugs, implementing UI enhancements, and fortifying security boundaries. Notably, the maintainer team is efficiently triaging and merging long-standing architectural fixes while actively processing first-time contributor PRs. The current project phase appears focused heavily on hardening platform stability (especially for third-party channels and browser tools) and refining the frontend console experience.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
Significant progress was made on merging long-standing architectural improvements and bug fixes. 16 PRs were merged or closed today:
*   **Security & Stability:** Merged PR [#1240](https://github.com/agentscope-ai/CoPaw/pull/1240) replaced the fragile runtime JSON state storage with a robust SQLite backend to prevent corruption crashes. PR [#1347](https://github.com/agentscope-ai/CoPaw/pull/1347) introduced automatic reconnection for crashed MCP clients.
*   **Provider & Model Support:** PR [#3403](https://github.com/agentscope-ai/CoPaw/pull/3403) fixed a major `gunicorn` startup crash by deferring builtin provider instantiation, and PR [#2079](https://github.com/agentscope-ai/CoPaw/pull/2079) fixed Anthropic API failures during historical tool-result media replays.
*   **Tooling & Plugins:** PR [#4944](https://github.com/agentscope-ai/CoPaw/pull/4944) fixed browser profile isolation and CDP timeouts. PR [#4934](https://github.com/agentscope-ai/CoPaw/pull/4934) merged a new OpenSandbox plugin for secure shell execution. PR [#4905](https://github.com/agentscope-ai/CoPaw/pull/4905) added coordinate-based clicking to the browser tool.
*   **UI & Frontend:** PR [#4972](https://github.com/agentscope-ai/CoPaw/pull/4972) resolved a critical LaTeX rendering issue in the web console. 

## 4. Community Hot Topics
*   **Memory System Overhaul:** Issue [#4652](https://github.com/agentscope-ai/CoPaw/issues/4652) (4 comments) triggered deep discussions. Users report that the current memory system merely hoards unstructured text, leading to "stepping in the same traps." The community is proposing a "Summarize-Associate-Remind" mechanism to transform the memory bank into actionable knowledge.
*   **Cron Task Expansions:** Users are pushing for advanced automation capabilities. Issue [#4963](https://github.com/agentscope-ai/CoPaw/issues/4963) (3 comments) requests the ability to execute direct shell scripts bypassing the AI agent, and Issue [#4961](https://github.com/agentscope-ai/CoPaw/issues/4961) (3 comments) strongly advocates for a feature to interrupt/abort ongoing agent execution via new user messages.
*   **Yuanbao Channel Bugs:** Developer `ABAC-123456` submitted a rapid-fire series of highly detailed bug reports regarding the new Yuanbao channel (e.g., [#4980](https://github.com/agentscope-ai/CoPaw/issues/4980), [#4979](https://github.com/agentscope-ai/CoPaw/issues/4979), [#4978](https://github.com/agentscope-ai/CoPaw/issues/4978)) identifying missing proto files, broken streaming, and `connectId` tracking failures.

## 5. Bugs & Stability
*   **Critical - Memory Leak / Resource Exhaustion:** Issue [#4968](https://github.com/agentscope-ai/CoPaw/issues/4968) reports a severe virtual memory leak causing "Cannot allocate memory" errors during subprocess forks on Linux. *(No fix PR yet)*.
*   **Critical - JSON Corruption:** Issue [#4970](https://github.com/agentscope-ai/CoPaw/issues/4970) notes that corrupted `loop_config.json` or `prd.json` files irrecoverably crash the entire Agent session, locking users out. *(Addressed previously by PR #1240)*.
*   **High - UI/UX Flaws:** Issue [#4962](https://github.com/agentscope-ai/CoPaw/issues/4962) notes DeepSeek API responses are incorrectly collapsing into the "thinking process" UI block, confusing users. *(Fix PR #4972 merged for related LaTeX rendering issue)*.
*   **High - Browser Tool Failures:** Issue [#4919](https://github.com/agentscope-ai/CoPaw/issues/4919) documents managed CDP timeouts and Chrome/Edge crashes. *(Fix PR #4944 merged)*.
*   **High - Infinite Loops:** Issue [#4967](https://github.com/agentscope-ai/CoPaw/issues/4967) reports the agent getting trapped in infinite execution loops in version 1.1.10. *(No fix PR yet)*.

## 6. Feature Requests & Roadmap Signals
*   **Enhanced UI & Avatar Support:** Issue [#4974](https://github.com/agentscope-ai/CoPaw/issues/4974) requests custom Agent avatars to improve visual identification in multi-agent setups. PR [#4975](https://github.com/agentscope-ai/CoPaw/pull/4975) already implements customizable column ordering for the sessions page, indicating an active focus on UI refinement.
*   **Direct Script Execution in Cron:** Feature request [#4963](https://github.com/agentscope-ai/CoPaw/issues/4963) highlights a need for deterministic script scheduling outside of the LLM loop.
*   **Predictions for Next Version:** Based on the open PRs, the next release will likely feature major robustness updates to the Yuanbao channel (via PR [#4983](https://github.com/agentscope-ai/CoPaw/pull/4983) and [#4982](https://github.com/agentscope-ai/CoPaw/pull/4982)), significant security upgrades for file preview (via PR [#4981](https://github.com/agentscope-ai/CoPaw/pull/4981)), and skill tag batch downloads (via PR [#4969](https://github.com/agentscope-ai/CoPaw/pull/4969)).

## 7. User Feedback Summary
*   **Deployment & Packaging:** Users remain confused about the differences between the standard desktop client and the Tauri version, particularly regarding Intel Mac support and Windows exe packaging ([#4754](https://github.com/agentscope-ai/CoPaw/issues/4754), [#4744](https://github.com/agentscope-ai/CoPaw/issues/4744)).
*   **Local Network Access:** Users are struggling to expose the desktop version to mobile devices via LAN, frequently encountering connection refusal even with firewall/whitelist adjustments ([#4960](https://github.com/agentscope-ai/CoPaw/issues/4960)).
*   **Agent Interruptibility:** A major pain point is the inability to stop an agent mid-task. Users feel forced to wait for long tool-call chains to finish before they can inject corrections, indicating a strong desire for asynchronous user interruption.

## 8. Backlog Watch
*   **Virtual Memory Leak ([#4968](https://github.com/agentscope-ai/CoPaw/issues/4968)):** High-severity bug causing process crashes on Linux environments. Awaiting maintainer triage and fix PR.
*   **Agent Infinite Loops ([#4967](https://github.com/agentscope-ai/CoPaw/issues/4967)):** Users report the agent continuously iterating in Phase 2 of Mission mode without exiting.
*   **Plugin Loader Initialization ([#4900](https://github.com/agentscope-ai/CoPaw/pull/4900)):** An open PR aiming to decouple plugin loading from agent startup to prevent timeouts in frozen environments. Requires maintainer review to unblock desktop pet stability.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-06-06

## 1. Today's Overview
ZeroClaw is experiencing high development activity with a strong focus on architectural overhauls and enterprise-grade security. The community and maintainers are highly engaged, processing 50 issues and 50 pull requests in the last 24 hours alone. There is a clear, strategic push toward a plugin-driven architecture, advanced security postures (like OIDC and RBAC), and expanding the agent's communication channels. However, with 44 open issues and 29 open PRs currently active, the project is navigating a substantial workload, balancing massive feature RFCs with critical bug fixes in runtime and configuration layers. 

## 2. Releases
No new releases were published today.

## 3. Project Progress
Today saw 21 PRs merged or closed, reflecting steady progress across various subsystems:
*   **Security & Config Recovery:** Maintainer `singlerider` closed critical PRs, including **[#7188](https://github.com/zeroclaw-labs/zeroclaw/pull/7188)** (fixing cron scheduling for relative "after" times) and laid groundwork for process isolation. `Audacity88` advanced **[#7085](https://github.com/zeroclaw-labs/zeroclaw/pull/7085)** to restore 1Password `op://` secret references lost in a previous revert.
*   **Channel Expansion:** `theonlyhennygod` successfully closed out several massive channel integration PRs, including the Lemmy private-message polling MVP **[#6442](https://github.com/zeroclaw-labs/zeroclaw/pull/6442)** and the Twitch IRC adapter **[#6446](https://github.com/zeroclaw-labs/zeroclaw/pull/6446)**.
*   **Tooling & Plugins:** The shift towards external integrations is taking physical shape. `theonlyhennygod` migrated the previously native Shazam tool into a sandboxed WASM plugin via **[#7277](https://github.com/zeroclaw-labs/zeroclaw/pull/7277)**. 

## 4. Community Hot Topics
*   **Governance & Label Cleanup:** The most discussed issue is **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** (9 comments). The community and maintainers are actively debating an RFC to introduce "Work Lanes" and board automation to handle the massive influx of PRs and issues more efficiently.
*   **Unified Output Routing:** **[#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)** (7 comments) highlights a major pain point for users migrating from other platforms (like Letta). Users heavily desire the ability to control *how* and *where* the AI replies (e.g., morning briefings via webhook, code snippets via CLI).
*   **Security Model Overhaul:** Multiple security-focused RFCs gained significant traction today, notably **[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)** (4 comments) for a pluggable security provider interface, and **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** (4 comments) targeting OIDC support for RPC/WSS transports.

## 5. Bugs & Stability
*   **P1 - Config Credential Fallback (In Progress):** Issue **[#7059](https://github.com/zeroclaw-labs/zeroclaw/issues/7059)** reports degraded behavior where the channel orchestrator falls back to ambient "default provider" credentials. A fix is currently in progress.
*   **P1 - Terminal Hijack (Fix PR Open):** **[#7120](https://github.com/zeroclaw-labs/zeroclaw/pull/7120)** addresses a high-risk bug where interactive subprocesses (like git credential prompts) could hijack the controlling terminal during TUI sessions.
*   **Memory Timestamp Parse Error (Fix PR Open):** **[#7192](https://github.com/zeroclaw-labs/zeroclaw/pull/7192)** fixes markdown memory recall failing to filter by `since/until` windows due to parsing file stems instead of RFC3339 timestamps.
*   **Windows Firmware Build (Closed/Fixed):** The full Windows build was broken due to a symlink issue, successfully resolved via merged PR **[#6282](https://github.com/zeroclaw-labs/zeroclaw/pull/6282)**.

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily signaling a shift toward **enterprise readiness and modularity**, likely targeted for the `v0.9.0` milestone:
*   **Air-gapped Execution & Enclaves:** **[#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293)** proposes splitting ZeroClaw into offline agent containers and online companion daemons for strict security environments.
*   **Granular Tool RBAC & Shell Security:** **[#6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914)** and **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** request allow/deny tool enforcement and per-execution confirmation for high-risk shell commands.
*   **A2A Multi-Agent Discovery:** **[#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)** lays the groundwork for Agent-to-Agent protocol discoverability using `.well-known/agent-card.json`.
*   **LSP Support:** **[#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)** requests Language Server Protocol integration to reduce hallucinations during coding tasks, mirroring tools like Claude Code.

## 7. User Feedback Summary
Users are enthusiastically adopting ZeroClaw as a unified AI hub but are encountering friction with configuration complexity and provider migrations. A user on **[#6969](https://github.com/zeroclaw-labs/zeroclaw/issues/6969)** expressed frustration over losing granular routing controls when switching from Letta. Meanwhile, **[#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416)** highlights that users frequently break their runtime by misconfiguring `config.toml` for specific providers (like `llamacpp`), indicating a strong need for a "preflight check" or config validation tool. There is also a strong desire from developers to integrate ZeroClaw directly into IDEs like XCode **[#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065)**, showing that the project is being evaluated as a primary daily driver for coding workflows.

## 8. Backlog Watch
Several high-impact architectural items are currently blocked and urgently need maintainer review to keep the `v0.9.0` roadmap on track:
*   **OAuth for Major Providers:** **[#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601)** (subscription-native OAuth for Ollama Cloud, Zhipu, Kimi, MiniMax) has been blocked for over a month.
*   **Core Modularization RFCs:** The push for a lighter core via external integrations **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** and Composio action-scope filtering **[#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917)** are currently sitting in a `blocked` / `needs-maintainer-review` state.
*   **CI/CD Container Builds:** **[#5908](https://github.com/zeroclaw-labs/zeroclaw/issues/5908)** (automating Debian container image releases to GHCR/Docker Hub) remains blocked, which could slow down adoption for self-hosting users.

</details>