# OpenClaw Ecosystem Digest 2026-05-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-06 22:13 UTC

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

# OpenClaw Project Digest — 2026-05-07

## 1. Today's Overview
OpenClaw is experiencing extremely high development velocity and community engagement, evidenced by 500 issues and 500 pull requests updated in the last 24 hours. The project maintains an active open issue count of 274, with 226 issues closed, indicating a healthy triage and resolution rate. However, the high ratio of open PRs (370 open vs. 130 merged/closed) suggests potential review bottlenecks or an influx of experimental contributions. The release of two rapid-fire patches (v2026.5.5 and v2026.5.6) immediately following a major update cycle shows a highly reactive, iterative maintenance posture focused on regression containment.

## 2. Releases

Two back-to-back patch releases were deployed to address critical regressions:

*   **v2026.5.6**: A critical hotfix that reverts a destructive `doctor --fix` repair introduced in v2026.5.5. The previous repair aggressively rewrote valid `openai-codex/*` ChatGPT/Codex OAuth routes to `openai/*`, which inadvertently broke OAuth-only GPT-5.5 setups or forcefully migrated users to OpenAI API-key authentication.
*   **v2026.5.5**: A patch addressing channel-specific fixes:
    *   **Feishu:** Hydrated missing native topic starter thread IDs before session routing to ensure first turns and follow-ups remain in the same topic session (Fixes [#78262](https://github.com/openclaw/openclaw/issue/78262)).
    *   **LINE:** Added validation to reject `dmPolicy: "open"` configs without wildcard `allowFrom` to prevent webhook DM validation failures.

## 3. Project Progress

While the majority of today's PR activity remains open (370 items, many involving experimental structural refactors), maintainers merged several targeted fixes to improve gateway stability and security:

*   **Session Migration Architecture:** Maintainer `steipete` opened/merged the massive PR [#78595](https://github.com/openclaw/openclaw/pull/78595) to refactor legacy session state migration entirely into the `doctor` fix flows, establishing SQLite as the single runtime source of truth and stripping legacy JSONL fallbacks.
*   **Gateway DoS Resilience:** Several PRs hardened the pre-auth WebSocket gateway paths against CPU and Mutex Denial of Service attacks (e.g., PR [#77492](https://github.com/openclaw/openclaw/pull/77492), PR [#76322](https://github.com/openclaw/openclaw/pull/76322), PR [#77527](https://github.com/openclaw/openclaw/pull/77527)).
*   **Security Remediation:** PR [#78392](https://github.com/openclaw/openclaw/pull/78392) addressed critical input validation flaws and workflow template injection vulnerabilities (citing [#68428](https://github.com/openclaw/openclaw/issue/68428)).
*   **Runtime Performance:** PR [#78645](https://github.com/openclaw/openclaw/pull/78645) bounded live exec output events to prevent agent commands from starving Gateway RPCs.

## 4. Community Hot Topics

*   **Cross-Platform Desktop Demand:** The highest-engagement item remains Issue [#75](https://github.com/openclaw/openclaw/issue/75) (104 comments, 74 👍), a longstanding request for Linux and Windows Clawdbot apps to achieve parity with the macOS ecosystem. 
*   **Rust Rewrite / Sandboxing:** Issue [#6731](https://github.com/openclaw/openclaw/issue/6731) (12 comments) proposes a Rust rewrite to introduce "Safe/Unsafe" modes for local memory leak prevention and root access sandboxing, indicating a community desire for stronger local runtime isolation.
*   **AI-Submitted Issues & Automation:** Issue [#9443](https://github.com/openclaw/openclaw/issue/9443) was explicitly submitted by an AI assistant ("QING") on behalf of a user requesting prebuilt Android APKs. This highlights an emerging meta-use case where users rely on AI agents to interact with and navigate open-source project ecosystems.
*   **MCP Tool Approval Workflows:** Issue [#78308](https://github.com/openclaw/openclaw/issue/78308) (8 comments) proposes a channel-mediated approval pipeline (consent envelope) for Model Context Protocol (MCP) tool calls, showing the community's focus on safe execution architectures for autonomous agents.

## 5. Bugs & Stability

The 2026.5.x release cycle introduced several critical regressions that are currently destabilizing the system for various user groups:

1.  **Broken ChatGPT OAuth (Stable Fix Merged):** Issue [#78407](https://github.com/openclaw/openclaw/issue/78407) (15 comments). The v2026.5.5 auto-upgrade executed a `doctor --fix` that irrevocably altered `openclaw.json`, locking out ChatGPT-OAuth users. *Status: Reverted/Patched in v2026.5.6.*
2.  **Weixin/WeChat Channel Regressions (Needs Patch):** Issue [#78232](https://github.com/openclaw/openclaw/issue/78232) and Issue [#77837](https://github.com/openclaw/openclaw/issue/77837) (9 and 5 comments). Upgrading to v2026.5.4 broke the `openclaw-weixin` plugin due to `channelRuntime` API changes and `fetch` failures, completely halting inbound message processing. 
3.  **Gateway CPU Pinning and WS Starvation (Open):** Issue [#73655](https://github.com/openclaw/openclaw/issue/73655) (16 comments) and Issue [#78402](https://github.com/openclaw/openclaw/issue/78402) (7 comments). A compounding leak triad (Manifest EADDRINUSE loops + sync I/O) and unbounded exec outputs are starving WebSocket upgrade handlers, causing persistent 1000/1005/1006 connection drops. *Mitigation PR [#78645](https://github.com/openclaw/openclaw/pull/78645) is open.*
4.  **Gateway Idle CPU 100%:** Issue [#75707](https://github.com/openclaw/openclaw/issue/75707) (12 comments) documents severe idle CPU usage (100-130%) and high latency. 

## 6. Feature Requests & Roadmap Signals

Several feature requests indicate the trajectory of the project's next major iteration:

*   **Agent Termination & Hallucination Detection:** PR [#75165](https://github.com/openclaw/openclaw/pull/75165) introduces a composable termination algebra and GSAR grounding scorer, paving the way for more reliable agent-to-agent (A2A) loops.
*   **Context-Aware Window Management:** Users are heavily requesting visibility into context usage to prevent unexpected compaction and state loss (Issue [#2597](https://github.com/openclaw/openclaw/issue/2597) - 8 comments). Closely related is Issue [#9986](https://github.com/openclaw/openclaw/issue/9986), requesting automatic model fallback when context limits are exceeded, rather than hard failing.
*   **Security Profiles & Exec Policies:** There is a strong push for "secure-by-default" data-centric models (Issue [#8719](https://github.com/openclaw/openclaw/issue/8719)) and granular `denylist` support for exec-approvals (Issue [#6615](https://github.com/openclaw/openclaw/issue/6615), 7 👍).
*   **Context Loss on Compaction:** Issue [#2597](https://github.com/openclaw/openclaw/issue/2597) highlights that agents still lack visibility into their own token usage, leading to sudden, state-destroying compactions.

## 7. User Feedback Summary

Users are actively deploying OpenClaw across diverse messaging platforms (Discord, WeChat, Feishu, Telegram) but are facing friction with rapid API changes. 
**Key Pain Points:**
*   **Aggressive Auto-Updates:** The `doctor --fix` running silently on launchd handoffs is causing severe configuration corruption (as seen in the v2026.5.5 OAuth rewrite).
*   **Plugin Compatibility Friction:** External plugins (like WeChat and Discord extensions) are frequently breaking upon minor version bumps due to internal `channelRuntime` and dependency shifts.
*   **Performance Overhead:** Users running continuous cron jobs or concurrent agent sessions are reporting long latencies (10+ seconds for `sessions.list`) and thread starvation.

## 8. Backlog Watch

*   **Safe Sandbox Isolation:** Issue [#37634](https://github.com/openclaw/openclaw/issue/37634) (8 comments, 4 👍). When set to `workspaceAccess: "none"`, OpenClaw correctly creates isolated sandboxes but inexplicably mounts them as read-only, breaking tool execution.
*   **Steer Mode Broken:** Issue [#48003](https://github.com/openclaw/openclaw/issue/48003) (7 comments) and Issue [#50880](https://github.com/openclaw/openclaw/issue/50880) (Closed but unresolved). `messages.queue.mode: "steer"` has been silently degrading to "followup" mode for weeks, failing to inject messages mid-turn at tool boundaries.
*   **Base64 Context Bloat:** Issue [#1210](https://github.com/openclaw/openclaw/issue/1210) (6 comments). Images from Discord are stored directly as base64 in session transcripts, causing massive context bloat (200K token limits hit after ~7 images). This long-standing architectural issue severely limits multi-modal use cases.
*   **Reaction Context Ignored:** Issue [#64752](https://github.com/openclaw/openclaw/issue/64752) (7 comments). Telegram reaction events are received by the gateway but fail to trigger an agent turn, breaking expected interaction loops.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal assistant open-source ecosystem based on the May 7, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a period of high-velocity iteration, characterized by aggressive architectural refactoring and rapid patch cycles. Projects are heavily pivoting toward multi-platform interoperability—specifically bridging DM/messaging platforms (Slack, WeChat, Discord, Telegram) with autonomous agent loops. A clear maturation trend is visible, with leading projects moving beyond simple LLM wrappers to tackle deep systems-level challenges: multi-tenant isolation, database-backed memory, strict security boundaries, and resilient execution pipelines. Meanwhile, the broader user base is actively deploying these tools for complex, long-running workflows, forcing maintainers to address edge cases in provider routing, context window exhaustion, and operating system parity.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health / Velocity Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (274 open) | 500 (370 open) | **v2026.5.5 & v2026.5.6** (Patches) | 🟢 Extremely High (Overheating) |
| **IronClaw** | 38 | 47 | No Release | 🟢 High (Heavy Refactoring) |
| **CoPaw** | 41 (17 closed) | 26 (14 merged) | **v1.1.5.post2** | 🟢 High & Stable |
| **Hermes Agent**| 50 | 50 | No Release | 🟢 High (Scaling) |
| **ZeroClaw** | 50 (41 open) | 50 (36 open) | No Release | 🟡 High (Expansion / Chaos) |
| **NanoClaw** | 5 | 26 (4 merged) | No Release | 🟢 Medium-High |
| **LobsterAI** | 1 | 29 (29 merged) | No Release | 🟢 High (Internal Velocity) |
| **NanoBot** | 15 | 34 (14 merged) | No Release | 🟢 Stable / Maturing |
| **Moltis** | 4 | ~10 (9 merged) | No Release | 🟢 Stable |
| **NullClaw** | 0 | 1 | No Release | 🟡 Low (Holding Pattern) |
| **PicoClaw / TinyClaw / ZeptoClaw** | 0 | 0 | No Release | 🔵 Dormant / Failed Fetch |

*\*Health Score is based on the ratio of community engagement, merge rates, and release stability.*

### 3. OpenClaw's Position
*   **Advantages:** OpenClaw remains the undeniable core reference implementation with massive community mindshare (500+ issues/PRs daily). Its gateway stability, multi-platform channel support, and rapid response to critical regressions (e.g., same-day hotfixes for OAuth lockouts) demonstrate a highly responsive maintenance posture.
*   **Technical Approach:** Unlike peers that are just beginning to isolate user workspaces, OpenClaw is already tackling deep runtime performance issues (WebSocket starvation, Mutex DoS resilience) and advanced agent safety (MCP tool consent envelopes, termination algebra). 
*   **Community Size Comparison:** OpenClaw operates at an order of magnitude higher volume than its nearest competitors (Hermes, IronClaw, ZeroClaw). However, its massive PR backlog (370 open) indicates severe review bottlenecks compared to highly streamlined projects like LobsterAI or Moltis.

### 4. Shared Technical Focus Areas
Several macro-requirements are rippling simultaneously across the ecosystem:
*   **DeepSeek "Reasoning" Context Handling:** **NanoBot, Hermes, CoPaw, ZeroClaw**, and **Moltis** all reported high-severity bugs where multi-turn conversations using advanced reasoning models (like DeepSeek) crash because API clients fail to pass `reasoning_content` back on subsequent turns.
*   **Windows & Cross-Platform Parity:** **Hermes** (Exit code 126 on Windows 11), **LobsterAI** (File deletion EPERM, DingTalk URL formatting), and **ZeroClaw** (Rust `.cmd` resolution failures) highlight an industry-wide struggle to support local desktop environments outside of Unix/macOS.
*   **Context Exhaustion & Compaction:** Users of **OpenClaw**, **Hermes**, and **CoPaw** are hitting severe context limits. Agents are silently losing state during long sessions or failing abruptly instead of falling back to context-window management techniques.
*   **Multi-Tenant Isolation:** **IronClaw**, **LobsterAI**, and **OpenClaw** are actively refactoring memory and session substrates (e.g., moving to SQLite/Postgres) to prevent state collisions in multi-user deployments.

### 5. Differentiation Analysis
*   **Local-First & Edge Focus (NanoBot, Moltis):** Focused on ultra-lightweight local execution, hardware acceleration, and local-first voice pipelines. Moltis is differentiating by supporting remote serverless sandboxes (Vercel, Firecracker) for local agents.
*   **Enterprise / Internal IM Focus (LobsterAI, CoPaw):** heavily optimized for enterprise workflows. LobsterAI is deeply integrated with Asian enterprise IM platforms (NetEase POPO, WeChat, DingTalk), while CoPaw focuses on enterprise guardrails (rule-level auto-deny for tools).
*   **Agentic Infrastructure (IronClaw, Hermes Agent):** Building dense, resilient execution environments. IronClaw is executing a massive "Reborn" architectural rewrite focusing on strict API boundaries and multi-tenant relay channels, whereas Hermes focuses heavily on coding workflows, TUI interfaces, and developer tools.
*   **Life-OS & Smart Home (ZeroClaw):** Distinguishing itself from coding-assistant clones by targeting lifestyle APIs (Spotify, Philips Hue, Eight Sleep, Home Assistant) aiming to be a centralized "Life-OS."

### 6. Community Momentum & Maturity
*   **Tier 1: The Juggernauts (OpenClaw):** Operating at massive scale but risking collapse under its own weight due to PR review bottlenecks. Needs tooling and process automation to sustain velocity.
*   **Tier 2: The Rapid Maturers (IronClaw, Hermes, CoPaw, ZeroClaw):** Highly active communities merging foundational architectural PRs daily. They are transitioning from hobbyist tools to production-grade software.
*   **Tier 3: Stable Iterators (NanoBot, NanoClaw, Moltis, LobsterAI):** High merge rates and good stability. LobsterAI shows remarkably disciplined internal velocity (29 PRs merged, 0 left open). 
*   **Tier 4: Dormant / Niche (NullClaw):** Minimal community activity, relying on massive, long-running PRs by isolated contributors.

### 7. Trend Signals
1.  **The Rise of the "Personal API":** ZeroClaw's integration with IoT/smart home devices and OpenClaw's users running automated X/Twitter workflows signal a shift. AI agents are evolving from conversational chatbots into centralized orchestration layers for users' digital and physical lives.
2.  **Decentralized Agent Identity:** Proposals in **NanoBot** and **Moltis** for Ed25519-based identity layers indicate an impending shift toward peer-to-peer, cross-device agent networks where agents must cryptographically verify each other.
3.  **Erosion of Human Gatekeeping:** Projects like **OpenClaw** are seeing issues filed by AI agents on behalf of users. Furthermore, the demand for autonomous model routing (seen in **Hermes**) suggests future agents will dynamically switch their own underlying LLM infrastructure based on task complexity without human intervention. 
4.  **Dependency on Silent Auto-Updates is Backfiring:** Across OpenClaw, Hermes, and NanoClaw, aggressive auto-updates and v1-to-v2 migration scripts are breaking local gateways and destroying config files. The ecosystem needs to adopt more resilient, non-destructive migration patterns.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-07

## 1. Today's Overview
NanoBot demonstrated exceptionally high community and development activity over the past 24 hours, with 34 Pull Requests updated and 15 Issues processed. The ecosystem is clearly in a rapid maturation phase, heavily focused on hardening multi-provider LLM support (specifically DeepSeek's reasoning mode) and patching communication channel bugs across WhatsApp, WeChat, and the WebUI. A significant portion of today's 20 open PRs consists of community-contributed quality-of-life enhancements and critical stability fixes. Overall project health appears robust, with a strong maintainer-community feedback loop actively addressing edge-case bugs and security vulnerabilities.

## 2. Releases
No new official releases were recorded today. The project remains on recent iteration builds, with maintainers seemingly focused on merging targeted bug fixes and UI enhancements into the main and nightly branches ahead of a future stable tag.

## 3. Project Progress
Today saw **14 merged/closed PRs**, indicating aggressive merging of community contributions. Key advancements include:
*   **WebUI Enhancements:** The WebUI received significant polish, including refined chat layouts, sidebar grouping, and asynchronous session title generation ([PR #3661](https://github.com/HKUDS/nanobot/pull/3661), [PR #3653](https://github.com/HKUDS/nanobot/pull/3653)).
*   **Dream System Controls:** Merged [PR #3660](https://github.com/HKUDS/nanobot/pull/3660) fixed an issue where `.dream_cursor` wasn't rolled back during memory restores.
*   **Reliability & Resilience:** Transient failures from Whisper endpoints now retry with exponential backoff ([PR #3646](https://github.com/HKUDS/nanobot/pull/3646)), and the WeChat channel was fixed to prevent silently dropping messages ([PR #3659](https://github.com/HKUDS/nanobot/pull/3659)).
*   **Security Patch:** A LAN bootstrap vulnerability in the WebUI was closed by enforcing `token_issue_secret` when the host is exposed ([PR #3658](https://github.com/HKUDS/nanobot/pull/3658)).

## 4. Community Hot Topics
*   **DeepSeek API "Reasoning" Errors ([Issue #3618](https://github.com/HKUDS/nanobot/issues/3618) & [Issue #3665](https://github.com/HKUDS/nanobot/issues/3665)):** The most actively discussed issue involves DeepSeek's strict API validation requiring `reasoning_content` to be passed back in multi-turn queries. Users are experiencing 403s and 400s, highlighting a strong community need for reliable, stateful handling of advanced reasoning models.
*   **Agent Identity Protocol Proposal ([Issue #3639](https://github.com/HKUDS/nanobot/issues/3639)):** User *vystartasv* proposed an Ed25519-based identity layer for cross-device NanoBot trust. This suggests the user base is increasingly deploying NanoBot in multi-agent, edge-computing scenarios requiring secure inter-agent communication.
*   **Runtime Context Data Leak ([Issue #2132](https://github.com/HKUDS/nanobot/issues/2132) / [PR #3666](https://github.com/HKUDS/nanobot/pull/3666)):** A long-standing bug where runtime metadata was merged into user message histories was finally addressed. This shows the community's commitment to keeping the LLM context window clean and secure.

## 5. Bugs & Stability
Bugs reported today heavily center on provider API validation and channel reliability:
1.  **[Critical] CPU Leak via MCP:** [Issue #3638](https://github.com/HKUDS/nanobot/issues/3638) reports a 100% CPU leak caused by orphaned async tasks when closing `streamable_http_client` connections. (Tagged as good first issue).
2.  **[High] DeepSeek Reasoning State Errors:** [Issue #3665](https://github.com/HKUDS/nanobot/issues/3665) / [Issue #3584](https://github.com/HKUDS/nanobot/issues/3584) cause crashes after a few queries due to unhandled `reasoning_content`. 
3.  **[High] Silent Message Drops:** [Issue #3605](https://github.com/HKUDS/nanobot/issues/3605) notes that blocked `exec` commands fail silently without notifying the user.
4.  **[Medium] Network Dependency in Tokenizer:** [Issue #3647](https://github.com/HKUDS/nanobot/issues/3647) reports offline hangs. Fix is pending in [PR #3662](https://github.com/HKUDS/nanobot/pull/3662).
5.  **[Medium] WhatsApp Token Spam:** [Issue #3625](https://github.com/HKUDS/nanobot/issues/3625) causes every LLM token to be sent as a separate message.

## 6. Feature Requests & Roadmap Signals
Several feature requests and open PRs signal the roadmap trajectory:
*   **User Experience Customization:** Requests to configure the bot's name and icon ([Issue #3650](https://github.com/HKUDS/nanobot/issues/3650)) and display model reasoning content in the CLI ([PR #3655](https://github.com/HKUDS/nanobot/pull/3655)).
*   **Local-First / Edge Improvements:** Avoiding network calls for token counting ([PR #3662](https://github.com/HKUDS/nanobot/pull/3662)) aligns with NanoBot's ultra-lightweight, mobile-friendly ethos.
*   **Model Presets:** [PR #3358](https://github.com/HKUDS/nanobot/pull/3358) introduces model presets for quick switching, which, alongside Dream system disabling ([Issue #3652](https://github.com/HKUDS/nanobot/issues/3652) / [PR #3591](https://github.com/HKUDS/nanobot/pull/3591)), indicates a push toward giving users tighter operational control over varied LLM behaviors.

## 7. User Feedback Summary
User feedback reveals NanoBot is being actively deployed as a persistent personal assistant (e.g., automated X/Twitter draft writers, Telegram bots). Users express frustration with silent failures—where the bot stops responding without an error trace. However, the sentiment toward the project's modularity is highly positive, with developers successfully building secondary applications (like `nanobot-soulboard`) on top of its core loop. The high volume of bug reports with attached fixes and logs indicates a technically proficient and engaged user base.

## 8. Backlog Watch
*   **Stale Open PRs:** [PR #2526](https://github.com/HKUDS/nanobot/pull/2526) (fixing lost user messages on `/stop`) and [PR #1443](https://github.com/HKUDS/nanobot/pull/1443) (decoupling heartbeat reasoning) have been open for over a month and need maintainer review to prevent merge conflicts as the main branch evolves.
*   **Pending Security Review:** [PR #3649](https://github.com/HKUDS/nanobot/pull/3649) fixes a high-severity unsafe `exec()` vulnerability in the API server and should be fast-tracked for review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-07

## 1. Today's Overview
Hermes Agent is currently experiencing very high community engagement, with 50 active issues and 50 active pull requests updated in the last 24 hours. The contributor base remains highly active, submitting numerous bug fixes and new platform features, though the core maintainer team has not yet published a new software release. Today's activity primarily revolves around hardening the multi-platform gateway systems (Telegram, Matrix, Slack), expanding custom provider support, and refining the Terminal User Interface (TUI). Overall project health is robust, characterized by rapid community-driven patching and active architectural discussions, although the high volume of open P2 bugs suggests the project is navigating typical scaling and integration challenges.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Eight pull requests were closed or merged in the last 24 hours, advancing several key features and stability improvements. 
* **TUI Refinements:** [@OutThisLife](https://github.com/OutThisLife) successfully merged [PR #20917](https://github.com/NousResearch/hermes-agent/pull/20917) to stabilize the virtual transcript scrollbar in the TUI.
* **Agent Stability:** Architectural progress was made on session persistence with updates to the structured content replay system ([PR #16519](https://github.com/NousResearch/hermes-agent/pull/16519)).
* **Security & Dependencies:** Automated dependency updates were integrated, notably bumping GitPython to 3.1.48 to address underlying security vulnerabilities ([PR #20910](https://github.com/NousResearch/hermes-agent/pull/20910)).
* **Provider Support:** Fixes were submitted for message ordering constraints in Qwen/vLLM templates ([PR #20913](https://github.com/NousResearch/hermes-agent/pull/20913)) and overlong message ID handling in OpenAI Codex ([PR #20912](https://github.com/NousResearch/hermes-agent/pull/20912)).

## 4. Community Hot Topics
The most actively discussed items reveal deep user reliance on Hermes for continuous coding workflows and stable provider routing:
* **Provider Rate Limiting & Fallbacks:** With 30 comments, [Issue #6475](https://github.com/NousResearch/hermes-agent/issues/6475) highlights ongoing user frustration with Anthropic subscription auth falsely reporting usage limits. Similarly, [Issue #20465](https://github.com/NousResearch/hermes-agent/issues/20465) (3 comments) exposes a critical gap where CLI sessions ignore fallback routing upon hitting Codex 429 errors, something cron jobs handle correctly.
* **Output Truncation:** [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) (14 comments) remains a highly debated topic regarding severe context loss and truncation-overwrites during complex, multi-day coding workflows.
* **Self-Improvement Autonomy:** [Issue #19324](https://github.com/NousResearch/hermes-agent/issues/19324) (3 comments) sparks an important debate on agent autonomy, where users request explicit policy guards to prevent the agent from autonomously executing git pushes during self-improvement cycles.

## 5. Bugs & Stability
Several high-severity bugs impacting agent reliability and platform integrations were reported today:
* **P1 - Codex 429 Handling:** Interactive CLI sessions crash/fail instead of auto-falling back when OpenAI Codex returns `usage_limit_reached` ([Issue #20465](https://github.com/NousResearch/hermes-agent/issues/20465)).
* **P2 - Kanban Migration Failure:** The embedded Kanban dispatcher broke completely after an auto-update due to a missing SQLite column (`spawn_failures`), blocking task management ([Issue #20842](https://github.com/NousResearch/hermes-agent/issues/20842)).
* **P2 - Windows Compatibility:** Terminal and file writing tools consistently fail with exit code 126 on Windows 11 (ATLAS OS), severely limiting cross-platform utility ([Issue #20782](https://github.com/NousResearch/hermes-agent/issues/20782)). 
* **P2 - ACP Child Agent Hallucinations:** Delegated tasks via ACP child agents sometimes report unverified, false completions ([Issue #20807](https://github.com/NousResearch/hermes-agent/issues/20807)). 
* **P2 - Context Loss:** Severe architectural edge cases causing catastrophic code loss and regressions during long coding sessions were documented in [Issue #20849](https://github.com/NousResearch/hermes-agent/issues/20849).

## 6. Feature Requests & Roadmap Signals
Today's feature requests indicate a strong user desire for broader provider support, autonomous model routing, and better webhook integrations. These will likely shape the upcoming release:
* **Autonomous Model Routing:** Users want `model_switch` exposed as an agent-callable tool, allowing the AI to autonomously route tasks to complex/lower models based on real-time needs ([Issue #16525](https://github.com/NousResearch/hermes-agent/issues/16525)).
* **Mistral Integration:** Native LLM provider support for Mistral is heavily requested ([Issue #20859](https://github.com/NousResearch/hermes-agent/issues/20859)).
* **Web Embedding (HTTP+SSE):** [PR #20911](https://github.com/NousResearch/hermes-agent/pull/20911) introduces a generic web-chat platform adapter, allowing developers to embed Hermes directly into web applications without relying on third-party messengers.
* **Kanban Enhancements:** Requests for an assignee dropdown in the dashboard ([Issue #20875](https://github.com/NousResearch/hermes-agent/issues/20875)) signal that users are actively trying to use Hermes for multi-agent team task routing.

## 7. User Feedback Summary
Users are leveraging Hermes for complex, deep-work tasks (like Google Apps Script development) but are frequently encountering friction with context window management and long-term memory limitations. There is notable dissatisfaction with custom provider configurations—users report frustration when the `/model` picker fails to display their custom models ([Issue #20582](https://github.com/NousResearch/hermes-agent/issues/20582)). Conversely, there is high enthusiasm for the plugin ecosystem, specifically the Kanban board and memory tools. The community is actively submitting cross-referenced PRs to fix gateway nuances, showing a healthy, invested developer base.

## 8. Backlog Watch
* **Custom Provider Visibility:** The bug where the `/model` command fails to display models for custom providers ([Issue #20582](https://github.com/NousResearch/hermes-agent/issues/20582)) currently has a corresponding open pull request ([PR #20919](https://github.com/NousResearch/hermes-agent/pull/20919)) awaiting maintainer review and merge.
* **Discord Attachment Reliability:** Users report intermittent failures when passing Discord attachments into the agent context ([Issue #11860](https://github.com/NousResearch/hermes-agent/issues/11860)), which remains unresolved and heavily impacts gateway users.
* **Telegram/Media Handoffs:** Media handling inconsistencies—such as Telegram images being visible for vision but inaccessible to file tools ([Issue #20899](https://github.com/NousResearch/hermes-agent/issues/20899)) and Slack uploading bare local paths unintentionally ([Issue #20834](https://github.com/NousResearch/hermes-agent/issues/20834))—require architectural attention from maintainers.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-07

## 1. Today's Overview
NanoClaw is experiencing a highly active development phase, characterized by a massive influx of 26 updated pull requests (predominantly open) and 5 active issues in the last 24 hours. The contributor base is intensely focused on polishing the v2 migration path, improving channel adapters (specifically Slack, WhatsApp, and GitHub), and expanding the project's skill and MCP tool ecosystem. The high ratio of open PRs to merges suggests an ongoing community sprint or a period where maintainers are currently triaging a large backlog of community contributions.

## 2. Releases
No new releases were recorded today. The project remains on a continuous development track without a formal versioned release in the last 24 hours.

## 3. Project Progress
Four pull requests were merged or closed today, advancing project stability and fixing critical bugs:
*   **WhatsApp Self-Chat Fix:** [PR #2302](https://github.com/qwibitai/nanoclaw/pull/2302) (Closed) resolved an issue where the `fromMe` echo filter inadvertently dropped user messages in WhatsApp self-chats, using a cache to distinguish bot echoes from user messages.
*   **Prompt & Audit Fixes:** [PR #2308](https://github.com/qwibitai/nanoclaw/pull/2308) (Closed) tightened the approval-card flow and removed references to non-existent tools (audited as P0#2, P1#3, P1#4, P2#7).
*   **SQLite3 Dependency Removal:** [PR #2309](https://github.com/qwibitai/nanoclaw/pull/2309) (Closed) fixed a fragile v1 dependency by replacing the external `sqlite3` CLI requirement with an in-tree `better-sqlite3` wrapper. 
*   **Platform ID Fix:** [PR #2187](https://github.com/qwibitai/nanoclaw/pull/2187) advanced a fix preventing the CLI from incorrectly namespacing bare platform IDs.

## 4. Community Hot Topics
The most visible community effort today revolves around channel setup user experience and expanding local AI capabilities:
*   **Slack Setup Overhaul:** Contributor `alipgoldberg` submitted a massive cluster of PRs aimed at making NanoClaw accessible to non-technical users. This includes [PR #2304](https://github.com/qwibitai/nanoclaw/pull/2304) (plain-language setup instructions), [PR #2299](https://github.com/qwibitai/nanoclaw/pull/2299) (correcting token paste order), [PR #2305](https://github.com/qwibitai/nanoclaw/pull/2305) (gating post-install cards), and [PR #2295](https://github.com/qwibitai/nanoclaw/pull/2295) (clarifying the public URL requirement).
*   **New Local Skills:** Significant interest is being shown in local tooling, with active PRs for a local Whisper voice transcription skill ([PR #2009](https://github.com/qwibitai/nanoclaw/pull/2009)) and an in-tree yt-dlp MCP server ([PR #2306](https://github.com/qwibitai/nanoclaw/pull/2306)).

## 5. Bugs & Stability
Several critical bugs were identified today, with many already receiving immediate attention via PRs:
*   **[Medium Severity] V2 Migration Missing Credentials:** [Issue #2294](https://github.com/qwibitai/nanoclaw/issues/2294) reports that `migrate-v2.sh` fails to surface renamed environment keys for Matrix and Discord, causing adapters to fail silently. (No linked fix PR yet).
*   **[Medium Severity] Startup Dirty Tree:** [Issue #2312](https://github.com/qwibitai/nanoclaw/issues/2312) notes that `groups/global/CLAUDE.md` is unconditionally deleted upon startup, creating a permanent dirty git state. (No linked fix PR yet).
*   **[Low Severity] Misleading Migration Errors:** [Issue #2191](https://github.com/qwibitai/nanoclaw/issues/2191) was closed today after it was revealed that the "missing registered_groups" error was actually caused by the host missing the `sqlite3` CLI. This directly inspired the merged [PR #2309](https://github.com/qwibitai/nanoclaw/pull/2309).
*   **[Low Severity] Skill Schema Mismatch:** [Issue #2289](https://github.com/qwibitai/nanoclaw/issues/2289) was closed; it highlighted that the `manage-channels` skill queried a non-existent `assistant_name` column instead of `name`.

## 6. Feature Requests & Roadmap Signals
Based on today's PRs and Issues, the near-term roadmap is heavily focused on resilient integrations and MCP (Model Context Protocol) expansion:
*   **Deprecating Legacy Architecture:** [Issue #2311](https://github.com/qwibitai/nanoclaw/issues/2311) formally requests the deprecation of the `/claw` skill due to v2 incompatibility. This signals a strict pivot toward the OneCLI transport layer, likely to be removed in the next version.
*   **GitHub Polling Mode:** [PR #2301](https://github.com/qwibitai/nanoclaw/pull/2301) introduces a REST API polling mode for GitHub, bypassing the need for inbound ports/webhooks. This feature is highly anticipated for users operating behind strict NAT/firewalls.
*   **MCP Tier 1 Tools:** [PR #2298](https://github.com/qwibitai/nanoclaw/pull/2298) adds 6 new MCP tool definitions (run, retry, edit task, etc.), expanding the agent's autonomous execution capabilities.
*   **Container Optimization:** [PR #2307](https://github.com/qwibitai/nanoclaw/pull/2307) proposes switching the base image to Trixie to shrink the Docker footprint.

## 7. User Feedback Summary
Users are actively deploying the v2 migration but are hitting friction points typical of infrastructure changes. A major pain point is the transition of environment variables and database schemas, leaving some channel adapters dead post-migration. Furthermore, feedback indicates that while NanoClaw's core is powerful, the initial setup for communication channels (like Slack's webhook and token configuration) is overwhelming for less technical users. The community response is highly collaborative, with contributors actively patching UX gaps and external dependencies (like replacing `sqlite3` CLI requirements with in-tree code).

## 8. Backlog Watch
*   **Security Trust Boundary:** [PR #2004](https://github.com/qwibitai/nanoclaw/pull/2004) (open since 2026-04-25) needs maintainer review. It hardens the channel installer against untrusted git remotes—a crucial security posture update that has sat idle for over a week.
*   **V2 Skill Incompatibility:** [Issue #2311](https://github.com/qwibitai/nanoclaw/issues/2311) requires a formal decision from maintainers regarding the deprecation of the `/claw` skill. Leaving it in the repo blocks users from cleanly migrating to v2.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-07

## 1. Today's Overview
The NullClaw project is currently experiencing a period of low activity, with zero new issues opened, zero releases published, and no PRs merged in the last 24 hours. The repository's pulse is sustained by a single, long-running open pull request that received a minor update yesterday. This quiet operational period suggests that maintainers may currently be focused on internal development, reviewing the existing substantial contributions, or are temporarily occupied outside the project. Overall, the project remains stable, though community engagement and throughput appear to be in a holding pattern.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
No PRs were merged and no issues were closed today. The only movement observed is an update to a significant open pull request:
*   **PR [#783](https://github.com/nullclaw/nullclaw/pull/783) `[OPEN]`**: Authored by `yanggf8`, this PR was updated on 2026-05-06. It introduces a comprehensive `cron` subagent engine along with run history, JSON CLI output, and security hardening. While it hasn't been merged yet, its ongoing updates indicate active development and iteration toward adding advanced scheduling capabilities to NullClaw.

## 4. Community Hot Topics
There are no active community discussions, highly reacted issues, or commented PRs to report from the last 24 hours. The only notable item on the radar is PR [#783](https://github.com/nullclaw/nullclaw/pull/783), which serves as the current focal point of development. The lack of comments or reactions on this PR suggests it may still be in the initial building phase by the contributor before formal community review is requested.

## 5. Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. System stability appears to be holding steady.

## 6. Feature Requests & Roadmap Signals
While no formal feature requests were submitted by users today, the open PR [#783](https://github.com/nullclaw/nullclaw/pull/783) provides a strong signal for the project's near-term roadmap. 
*   **Advanced Task Scheduling:** The introduction of a DB-backed scheduler (`cron_runs` history, worker queues) indicates a move toward robust, autonomous background operations.
*   **Enterprise Readiness:** The inclusion of per-job timezone offsets, operator alerts, delivery routing, and security hardening suggests NullClaw is gearing up for more complex, production-grade deployment environments. 
*   **Developer Experience (DX):** The addition of `--json` flags to the CLI points to an upcoming focus on scriptability and easier integration with external tools.

## 7. User Feedback Summary
There is no direct user feedback, pain points, or use-case discussions to analyze today due to the complete absence of new issue filings or PR comments. 

## 8. Backlog Watch
Maintainers should keep an eye on the following long-running item:
*   **PR [#783](https://github.com/nullclaw/nullclaw/pull/783)**: Created on 2026-04-07, this massive feature addition has now been open for exactly one month. Given its scope (touching on database schema, worker queues, security, and CLI output), it requires a thorough review. Maintainers should ensure the author is unblocked and that a merge plan or formal review cycle is scheduled soon to prevent staleness.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-05-07

## 1. Today's Overview
The IronClaw project is experiencing exceptionally high architectural momentum, driven almost entirely by the monumental "Reborn" substrate refactoring initiative. With 47 pull requests updated and 38 issues touched in the last 24 hours, development velocity is heavily skewed toward core maintainers designing and implementing a robust, multi-tenant host layer. Activity is characterized by large-scale system design, concurrent crate boundary definitions, and expanding E2E test coverage. While the engineering effort is dense and highly collaborative, non-contributor user activity remains secondary, though important operational bugs are being reported and addressed.

## 2. Releases
No new releases were cut today. The project is operating in a heavy feature/refactoring development phase, accumulating merge commits intended for a future major Reborn rollout. 

## 3. Project Progress
Significant foundational and quality-assurance progress was made today, with 25 PRs merged or closed:
*   **Reborn Memory & Policy Substrate:** PR [#3180](https://github.com/nearai/ironclaw/pull/3180) successfully landed a massive native-isolated memory substrate, collapsing a 7-PR stack into a single merge. Additionally, E2E coverage for runtime policies was added in [#3306](https://github.com/nearai/ironclaw/pull/3306).
*   **Turn Coordination & Loop Exits:** Merged [#3305](https://github.com/nearai/ironclaw/pull/3305) to apply validated loop exits securely, and [#3311](https://github.com/nearai/ironclaw/pull/3311) to add a turn run wake notifier seam.
*   **Multi-tenant Channel Relay:** Closed [#3253](https://github.com/nearai/ironclaw/pull/3253), introducing multi-tenant relay channel support with per-user identity resolution (specifically for Slack integrations).
*   **Bug Fixes & CI:** Addressed a critical parameter coercion bug in `mission_create` ([#3197](https://github.com/nearai/ironclaw/pull/3197)), fixed a Postgres migration race condition ([#3307](https://github.com/nearai/ironclaw/pull/3307)), and decoupled nightly E2E alerts from reusable workflows ([#3312](https://github.com/nearai/ironclaw/pull/3312)).

## 4. Community Hot Topics
The community and core contributors are highly focused on the architecture of the Reborn initiative, specifically how host-layer thread and turn coordination will operate.
*   **TurnCoordinator Architecture ([#3013](https://github.com/nearai/ironclaw/issues/3013)):** This open blocker has garnered 7 comments discussing the transition to a kernel-enforced one-active-run admission system.
*   **Product Surface Migration ([#3031](https://github.com/nearai/ironclaw/issues/3031)):** With 6 comments, this EPIC issue is tracking the massive effort to preserve current user/operator behavior while migrating underlying systems.
*   **Turn Persistence & API Shape:** Heavily discussed issues ([#3198](https://github.com/nearai/ironclaw/issues/3198), [#3202](https://github.com/nearai/ironclaw/issues/3202)) define how turns are persisted, locked, and exposed publicly.
*   **Multi-Tenant Slack Relay ([#3300](https://github.com/nearai/ironclaw/issues/3300)):** A recently opened issue tracking security and UX follow-ups from the newly merged Slack relay PR, indicating active development in external channel integrations.

## 5. Bugs & Stability
*   **Critical - LLM Provider Config Wipe ([#3229](https://github.com/nearai/ironclaw/issues/3229)):** A severe bug reported by `thomasmaerz` where LLM provider fallback logic persists to the DB on startup, permanently destroying a user's custom model/provider config. No linked fix PR is currently indicated.
*   **Medium - Mission Cooldown Parameter Coercion ([#3132](https://github.com/nearai/ironclaw/issues/3132)):** Users experienced failed mission creation when the LLM passed integer parameters as JSON strings. **Status:** Fixed and merged in PR [#3197](https://github.com/nearai/ironclaw/pull/3197).

## 6. Feature Requests & Roadmap Signals
The immediate roadmap is dominated by "Reborn" product-surface migration. Key signals include:
*   **WebChat v2 & API Migration:** Issues [#3282](https://github.com/nearai/ironclaw/issues/3282) and [#3283](https://github.com/nearai/ironclaw/issues/3283) signal an upcoming migration of browser chat routes and OpenAI-compatible endpoints onto the new Reborn ProductAdapter/EventStreamManager workflow.
*   **Externally Provided Tools:** PR [#3122](https://github.com/nearai/ironclaw/pull/3122) introduces native support for externally provided tools in the `/v1/responses` API, moving away from prompt-level fencing to engine v2 native tool calls.
*   **Feature Parity Tracking:** PR [#3310](https://github.com/nearai/ironclaw/pull/3310) updated the OpenClaw feature parity documentation, highlighting upcoming infrastructure gaps (e.g., outbound proxy routing, diagnostics bundles) that the team is preparing to address.

## 7. User Feedback Summary
Operator feedback highlights a critical pain point regarding configuration persistence. Issue [#3229](https://github.com/nearai/ironclaw/issues/3229) reveals frustration from users running fresh installs (v0.27.0 on LXC/libSQL) where fallback mechanisms inadvertently overwrite explicit settings, breaking existing automations. Conversely, the successful implementation of multi-tenant Slack relays (Issue [#3300](https://github.com/nearai/ironclaw/issues/3300)) reflects strong satisfaction from users looking for centralized, workspace-scoped AI identity management.

## 8. Backlog Watch
*   **Stale CI Dependency Bumps ([#2593](https://github.com/nearai/ironclaw/pull/2593)):** A `dependabot[bot]` PR bumping GitHub Actions across the repository has been open since April 17th and is currently undergoing a rebase. Maintainer attention is needed to merge this to prevent CI dependency drift.
*   **Reborn Transport & Event PRs:** Massive structural PRs, such as the Transport Adapter contract ([#3099](https://github.com/nearai/ironclaw/pull/3099)) and Event Projection Service ([#3212](https://github.com/nearai/ironclaw/pull/3212)), have been open for roughly a week. These are critical blockers for the Reborn EPIC and require continued review momentum.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the repository data from 2026-05-07.

### 1. Today's Overview
LobsterAI experienced a remarkably high-velocity development day on May 7, 2026, merging a total of 29 pull requests with zero left open. The development team is heavily focused on platform stability, architecture refactoring, and multi-platform IM (Instant Messaging) optimizations. A single new security vulnerability was reported regarding the email skill, which has not yet been addressed. Overall, the project's engineering velocity is excellent, showing active maintenance and rapid feature maturation ahead of any potential new release.

### 2. Releases
No new releases were published today. The most recent release activity involved merging the `release/2026.04.27` branch into `main` via [PR #1876](https://github.com/netease-youdao/LobsterAI/pull/1876), which included ChatGPT OAuth support, new provider models (Xiaomi mimo, Baidu Qianfan), and various gateway bug fixes.

### 3. Project Progress
Today's 29 merged PRs represent significant architectural and functional advancements:
*   **Architecture & Workspace:** [PR #1890](https://github.com/netease-youdao/LobsterAI/pull/1890) successfully decoupled the main agent workspace from the user-configurable working directory, preventing state loss. [PR #1884](https://github.com/netease-youdao/LobsterAI/pull/1884) removed the deprecated `yd_cowork` engine branching, consolidating the codebase into a single `openclaw` engine path (net -65 lines of code).
*   **IM & Multi-Platform Enhancements:** [PR #1883](https://github.com/netease-youdao/LobsterAI/pull/1883) introduced multi-robot instance support for NetEase POPO. [PR #1893](https://github.com/netease-youdao/LobsterAI/pull/1893) patched the WeChat plugin to read DM Policy directly from config, and [PR #1896](https://github.com/netease-youdao/LobsterAI/pull/1896) fixed a bug where modifying models in IM tasks failed to take effect.
*   **Security & Logging:** [PR #1844](https://github.com/netease-youdao/LobsterAI/pull/1844) extracted a `sanitizeForLog` utility to redact sensitive API keys and authorization headers from logs. [PR #1892](https://github.com/netease-youdao/LobsterAI/pull/1892) introduced daily rotation for gateway logs with a 3-day retention policy.
*   **UI/UX Fixes:** Addressed markdown table rendering failures ([PR #1895](https://github.com/netease-youdao/LobsterAI/pull/1895)), fixed model replies failing to stop ([PR #1897](https://github.com/netease-youdao/LobsterAI/pull/1897)), and optimized task title display logic ([PR #1898](https://github.com/netease-youdao/LobsterAI/pull/1898)).
*   **Windows Compatibility:** Resolved a Windows EPERM error when deleting skill directories ([PR #1891](https://github.com/netease-youdao/LobsterAI/pull/1891)) and fixed `file://` URL formatting issues for Windows inbound images on DingTalk ([PR #1848](https://github.com/netease-youdao/LobsterAI/pull/1848)).

### 4. Community Hot Topics
Community engagement metrics today were incredibly low regarding comments and reactions, indicating that today's activity was primarily driven by internal contributors (`fisherdaddy`, `btc69m979y-dotcom`, `liuzhq1986`) rather than community discourse. 
*   The most notable community interaction is a newly opened security issue, [Issue #1885](https://github.com/netease-youdao/LobsterAI/issues/1885), which had 0 comments but represents a critical underlying need for better file-handling security within user-facing integrations.

### 5. Bugs & Stability
*   **High Severity - Path Traversal Vulnerability:** [Issue #1885](https://github.com/netease-youdao/LobsterAI/issues/1885) reports a path traversal flaw in the IMAP/SMTP email skill. The `downloadAttachments` function in `imap.js` fails to sanitize attachment filenames, allowing directory traversal. *No fix PR has been submitted yet.*
*   **Medium Severity - Workspace Migration Data Loss:** [PR #1894](https://github.com/netease-youdao/LobsterAI/pull/1894) fixed a bug introduced by a previous PR where the `memory/` directory was skipped during workspace migration due to a race condition with empty directory generation.
*   **Low Severity - UI/Rendering:** Bugs fixed today include intermittent markdown table rendering failures ([PR #1895](https://github.com/netease-youdao/LobsterAI/pull/1895)) and an incomplete display of `/models` command results triggered by ChatGPT OAuth ([PR #1886](https://github.com/netease-youdao/LobsterAI/pull/1886)).

### 6. Feature Requests & Roadmap Signals
Today's closed PRs serve as strong roadmap signals for the next release:
*   **Enhanced Multi-Platform Bot Management:** The addition of POPO multi-bot instances ([PR #1883](https://github.com/netease-youdao/LobsterAI/pull/1883)) and advanced WeChat routing configs ([PR #1893](https://github.com/netease-youdao/LobsterAI/pull/1893)) indicate a strategic push towards making LobsterAI a robust, multi-tenant gateway for enterprise messaging platforms.
*   **Resilient Agent Workspaces:** The architectural shift to isolate the main agent workspace from user directories ([PR #1890](https://github.com/netease-youdao/LobsterAI/pull/1890)) suggests upcoming features will allow users to change working directories freely without breaking active AI agents or losing context.

### 7. User Feedback Summary
Direct user feedback is sparse in today's data batch, but real user pain points can be inferred from the resolved issues. Users were experiencing frustrating friction with desktop file permissions on Windows ([PR #1891](https://github.com/netease-youdao/LobsterAI/pull/1891)), broken image attachments in DingTalk on Windows ([PR #1848](https://github.com/netease-youdao/LobsterAI/pull/1848)), and ugly/messy message displays in IM environments due to unstripped media metadata ([PR #1856](https://github.com/netease-youdao/LobsterAI/pull/1856)). The resolution of these issues will significantly improve the experience for cross-platform enterprise users.

### 8. Backlog Watch
*   **Urgent Attention Needed:** [Issue #1885](https://github.com/netease-youdao/LobsterAI/issues/1885) (Path Traversal in Email Skill) requires immediate maintainer attention and a patch.
*   **Technical Debt:** [PR #1887](https://github.com/netease-youdao/LobsterAI/pull/1887) disabled the `@typescript-eslint/no-explicit-any` rule to clear out lint warnings. While this allows development velocity to continue, the codebase should be monitored to ensure type safety standards are re-imposed before the next major release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-05-07

## 1. Today's Overview
Moltis demonstrates a highly active and healthy development pace, focusing heavily on hardening existing features and resolving edge cases. Over the past 24 hours, the maintainers closed 4 issues and merged an impressive 9 pull requests, indicating a strong, iterative development cycle. Key areas of focus include sandbox stability (especially for parallel execution and Docker environments), authentication routing, and provider compatibility (such as DeepSeek's thinking mode). Although there were no new version releases today, the sheer volume of bug fixes and architectural improvements suggests the project is actively preparing for a stable release. Community engagement remains steady, with users contributing detailed bug reports and ambitious architectural proposals.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
Significant forward progress was made today, with 9 PRs merged/closed, primarily driven by core maintainer `penso`. Key advancements include:
*   **Sandbox Reliability:** Resolved a critical race condition where parallel tool executions caused Docker/Podman name collisions ([PR #971](https://github.com/moltis-org/moltis/pull/971)). 
*   **Cloud & Remote Deployments:** `penso` continued iterating on the open [PR #942](https://github.com/moltis-org/moltis/pull/942), which introduces multi-backend remote sandbox support (Vercel, Daytona, Firecracker) for environments where Docker-in-Docker isn't available.
*   **Security & Vault:** Merged auto-unseal vault capabilities from recovery keys at startup ([PR #974](https://github.com/moltis-org/moltis/pull/974)), streamlining unattended deployments.
*   **Authentication & Proxies:** Fixed login failures behind non-TLS proxies by properly respecting the `X-Forwarded-Proto` header ([PR #970](https://github.com/moltis-org/moltis/pull/970)).
*   **Dependency Health:** Automated dependency bots successfully merged updates for `openssl` and `gix` ([PR #975](https://github.com/moltis-org/moltis/pull/975), [PR #967](https://github.com/moltis-org/moltis/pull/967)).

## 4. Community Hot Topics
*   **Interoperable Agent Protocols ([Issue #973](https://github.com/moltis-org/moltis/issues/973) & [PR #976](https://github.com/moltis-org/moltis/pull/976)):** User `vystartasv` opened a proposal and submitted a linked documentation PR introducing "Onboarding + Identity protocols." This suggests a strong community desire to evolve Moltis from a standalone personal agent into a federated, interoperable network of agents using decentralized Ed25519 keypairs.
*   **DeepSeek Reasoning Errors ([Issue #959](https://github.com/moltis-org/moltis/issues/959)):** A highly upvoted (👍 1) bug report regarding broken API calls when using DeepSeek's thinking mode. It highlights the community's active adoption of cutting-edge reasoning models and the need for Moltis to natively handle complex provider-specific API schemas. This was quickly addressed in [PR #961](https://github.com/moltis-org/moltis/pull/961).

## 5. Bugs & Stability
*   **HIGH: Browser Sandbox Fails in Docker ([Issue #977](https://github.com/moltis-org/moltis/issues/977)):** Users running Moltis inside LXC/Docker are experiencing consistent failures with the browser sandbox tool. *Status: Open, no fix PR yet.*
*   **MEDIUM: Parallel Tool Execution Collisions ([Issue #964](https://github.com/moltis-org/moltis/issues/964)):** Concurrent tool calls resulted in Docker sandbox race conditions. *Status: Closed, fixed by [PR #971](https://github.com/moltis-org/moltis/pull/971).*
*   **MEDIUM: DeepSeek API Integration ([Issue #959](https://github.com/moltis-org/moltis/issues/959)):** `reasoning_content` wasn't being passed back during follow-up requests. *Status: Closed, fixed by [PR #961](https://github.com/moltis-org/moltis/pull/961).*
*   **LOW: Login Failures behind Proxies ([Issue #968](https://github.com/moltis-org/moltis/issues/968)):** Unconditional secure cookies broke local LAN port-forwarding. *Status: Closed, fixed by [PR #970](https://github.com/moltis-org/moltis/pull/970).*

## 6. Feature Requests & Roadmap Signals
*   **Remote Sandbox Backends:** The active development of [PR #942](https://github.com/moltis-org/moltis/pull/942) signals that the next major version will likely natively support serverless/remote execution environments (Fly.io, Render), moving away from strictly local Docker setups.
*   **Agent-to-Agent Identity:** The community proposal ([Issue #973](https://github.com/moltis-org/moltis/issues/973)) outlines a decentralized identity layer. While currently just a proposal/docs PR, it aligns with broader industry trends toward interoperable AI agents and could shape the project's long-term roadmap.
*   **Improved Local Voice Setup:** [PR #962](https://github.com/moltis-org/moltis/pull/962) updated documentation for local TTS providers (Piper, Coqui), indicating a commitment to maintaining robust, local-first voice capabilities.

## 7. User Feedback Summary
Users are deploying Moltis in diverse, self-hosted environments, notably Proxmox, LXC containers, and standard Docker setups. The main pain points revolve around deployment edge cases—specifically, navigating proxy headers for auth and managing sandbox permissions in containerized environments. There is clear enthusiasm for using advanced reasoning models like DeepSeek, but users expect seamless, plug-and-play provider support. Overall, the user base appears technically proficient and highly engaged in detailing their environment setups in bug reports.

## 8. Backlog Watch
*   **[PR #358](https://github.com/moltis-org/moltis/pull/358):** `lijunle`'s fix for routing GitHub Copilot enterprise tokens via proxy endpoints has been open since March 2026. It was updated today but remains closed/unmerged. Maintainer review is needed to push this enterprise-focused fix live.
*   **[PR #942](https://github.com/moltis-org/moltis/pull/942):** The massive architectural shift to support remote sandboxes has been open for a week. It requires continued maintainer focus to ensure it doesn't stall out.
*   **[Issue #977](https://github.com/moltis-org/moltis/issues/977):** The newly opened Docker browser sandbox bug needs triage, as browser tooling is a critical feature for autonomous agents.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest (2026-05-07)

## 1. Today's Overview
The CoPaw project demonstrated exceptionally high activity over the past 24 hours, indicating a very healthy and highly interactive open-source community. The maintainers and contributors processed 41 issues (17 closed) and 26 pull requests (14 merged/closed), coinciding with the release of a new patch version, `v1.1.5.post2`. Community engagement is highly focused on platform stability, multi-channel integrations (like DingTalk, Telegram, and Feishu), and optimizing the local desktop experience. Overall, the rapid turnaround on bug fixes and feature merges shows an actively maintained project responding well to enterprise and developer use cases.

## 2. Releases
**v1.1.5.post2** was released today.
*   **What's Changed:** 
    *   Documentation updated to reflect v1.1.5.
    *   Asynchronous session title generation via LLM (PR [#3829](https://github.com/agentscope-ai/QwenPaw/pull/3829)).
    *   Fixes applied to message processing returns (PR [#4013](https://github.com/agentscope-ai/QwenPaw/pull/4013)).
*   **Migration Notes:** No breaking changes; this is a direct patch update from v1.1.5.post1. Users experiencing message processing bugs or DingTalk event loop race conditions should upgrade immediately.

## 3. Project Progress
The team and community successfully merged 14 PRs today, advancing key stability and feature initiatives:
*   **Skill Management:** A highly anticipated feature was merged—CLI commands for skill installation and uninstallation via URLs (PR [#4053](https://github.com/agentscope-ai/QwenPaw/pull/4053)), addressing Issue [#2384](https://github.com/agentscope-ai/QwenPaw/issues/2384).
*   **Security Enhancements:** Merged "rule level auto deny" for Tool Guard (PR [#4046](https://github.com/agentscope-ai/QwenPaw/pull/4046)), allowing admins to auto-reject specific tool calls without manual approval.
*   **Channel Stability:** Fixes were merged for Telegram network polling/retry logic (PR [#4039](https://github.com/agentscope-ai/QwenPaw/pull/4039)) and a graceful task draining fix for channel reloading (PR [#4064](https://github.com/agentscope-ai/QwenPaw/pull/4064)).
*   **Bug Fixes & Code Quality:** Resolved a bug where the `/approve` command silently ignored `request_id` (PR [#4014](https://github.com/agentscope-ai/QwenPaw/pull/4014)), fixed Docker volume mount restore secrets (PR [#3916](https://github.com/agentscope-ai/QwenPaw/pull/3916)), and removed redundant utility codes (PR [#4048](https://github.com/agentscope-ai/QwenPaw/pull/4048)).

## 4. Community Hot Topics
The most active discussions revolve around performance bottlenecks and configuration complexities:
*   **Windows Server Arbitrary File Traversal Vulnerability (Issue [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955)):** This was the most commented issue (17 comments). Users reported a critical path traversal bug on Windows servers. The team actively engaged, and it has since been closed, indicating a likely fix or mitigation path provided.
*   **Input Box Stuttering (Issue [#4023](https://github.com/agentscope-ai/QwenPaw/issues/4023)):** With 6 comments, users are reporting severe UI lag in the console input box. This highlights a growing pain point regarding frontend performance under heavy loads.
*   **Simplifying Model Configuration (Issue [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036)):** Users are frustrated with the number of clicks required to add a new model (navigating between API keys and model settings). This sparked a constructive discussion on UI/UX improvements.

## 5. Bugs & Stability
Several significant stability bugs were reported today, though the maintainers are already addressing some:
*   **Long Context Failures (Issue [#4059](https://github.com/agentscope-ai/QwenPaw/issues/4059)):** AI responses cut off halfway during long tasks, even when executing `/compact`. *Severity: High.* (No fix PR yet).
*   **Heartbeat Network Disconnection (Issue [#4017](https://github.com/agentscope-ai/QwenPaw/issues/4017)):** When `HEARTBEAT.md` is enabled, network interruptions require a manual restart to restore connections. *Severity: Medium.* 
*   **DingTalk Event Loop Race Condition (Issue [#4042](https://github.com/agentscope-ai/QwenPaw/issues/4042)):** DingTalk channel notifications fail due to lifecycle race conditions. *Severity: Medium.* (Note: Related fixes for channel task draining were merged today in PR [#4064](https://github.com/agentscope-ai/QwenPaw/pull/4064)).
*   **DeepSeek HTTP 500 Error (Issue [#3985](https://github.com/agentscope-ai/QwenPaw/issues/3985)):** Multi-turn tool calls with DeepSeek reasoning models fail because `reasoning_content` is not passed back correctly. *Severity: High.*
*   **Anthropic Provider Hardcoded Limits (Issue [#4040](https://github.com/agentscope-ai/QwenPaw/issues/4040)):** Custom Anthropic-compatible providers are strictly limited to `max_tokens=2048`, causing truncation. *Severity: Medium.*
*   **Tool Call Parser False-Positive (Issue [#4066](https://github.com/agentscope-ai/QwenPaw/issues/4066)):** Internal parser erroneously intercepts code block text if it resembles function names (e.g., `[Read]`, `[Edit]`). *Severity: Low.*

## 6. Feature Requests & Roadmap Signals
User submissions strongly signal a desire for better local model support, UI/UX refinement, and execution flexibility:
*   **Semantic Skill Routing (Issue [#3091](https://github.com/agentscope-ai/QwenPaw/issues/3091)):** A proposed solution for context overflow when users install 50+ skills. The system should use semantic routing rather than injecting all skill metadata into the prompt.
*   **Adaptive Shell Execution (Issue [#4045](https://github.com/agentscope-ai/QwenPaw/issues/4045)):** Requesting `execute_shell_command` to intelligently differentiate between instant commands (`ls`) and long-running processes, switching to async execution for the latter.
*   **One-Shot Cron Jobs (Issue [#4029](https://github.com/agentscope-ai/QwenPaw/issues/4029)):** Expanding the `qwenpaw cron` CLI to support `--at <iso-datetime>` for one-time scheduled tasks.
*   *Prediction for next version:* Based on open PRs, future releases will likely include **Whisper voice transcription integration** (PR [#3574](https://github.com/agentscope-ai/QwenPaw/pull/3574)), **Windows system tray support** (PR [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041)), and **Brazilian Portuguese localization** (PR [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009)).

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing frustration with the desktop client's resource management, specifically log files growing indefinitely on Windows/Linux (addressed in PR [#4076](https://github.com/agentscope-ai/QwenPaw/pull/4076)) and UI stuttering. 
*   **Local Model Friction:** There is a clear desire to use local models (Ollama, LMStudio, QwenPaw-Flash-9B), but users frequently encounter architecture mismatches (e.g., M5 Macs running subprocesses under Rosetta, Issue [#4003](https://github.com/agentscope-ai/QwenPaw/issues/4003)) or llama.cpp startup errors (Issue [#4049](https://github.com/agentscope-ai/QwenPaw/issues/4049)). 
*   **Cost Optimization:** Advanced users are highly attentive to LLM API costs, specifically noting DeepSeek prefix cache hit rates (Issue [#3891](https://github.com/agentscope-ai/QwenPaw/issues/3891)) and demanding optimizations to reduce cache misses.

## 8. Backlog Watch
*   **Cross-platform Log Rotation (PR [#4076](https://github.com/agentscope-ai/QwenPaw/pull/4076)):** This first-time contributor PR fixes a significant oversight where logs grow indefinitely on non-macOS systems. It needs a maintainer review and merge to prevent disk space exhaustion for long-running agents.
*   **Custom Workspace Storage Path (Issue [#4067](https://github.com/agentscope-ai/QwenPaw/issues/4067)):** Users are requesting the ability to move data out of the hardcoded `C:\Users\$USER\.copaw` directory. This is a common enterprise requirement and should be prioritized.
*   **Feishu User Display Names (PR [#4055](https://github.com/agentscope-ai/QwenPaw/pull/4055)):** Currently a WIP, but crucial for enterprise environments using Feishu, as agents only see raw `open_id` rather than actual user names.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-07

## 1. Today's Overview
ZeroClaw is experiencing a massive surge in open-source community activity, demonstrating a highly active and engaged contributor base. In the last 24 hours, the project saw 50 issues updated (with 41 remaining open) and 50 pull requests updated (36 open), alongside 14 merged or closed PRs. Activity is heavily dominated by channel integrations, provider configurations, and agent autonomy bugs. The volume of new feature PRs—specifically spanning SMS, IoT, and social media platforms—indicates that the project is in a rapid expansion phase, building out its interoperability ecosystem ahead of a potential milestone release. 

## 2. Releases
No new releases were cut today. However, activity gravitates around the `v0.7.5` milestone and early integration work for `v0.8.0`.

## 3. Project Progress
14 PRs were merged or closed today, showing steady progress in patching channel bugs and expanding the tool/framework ecosystem:
*   **WhatsApp Security Fix:** [PR #6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414) was merged to address a critical leak where agents reacted to outbound messages from the operator's account.
*   **Channel Integrations:** Merged PRs included new adapters for [Mastodon](https://github.com/zeroclaw-labs/zeroclaw/pull/6426) and [Twilio](https://github.com/zeroclaw-labs/zeroclaw/pull/6429), establishing a baseline for webhook-based and federated protocols.
*   **Core Refactoring:** [PR #6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403) opened against `integration/v0.8.0`, introducing a typed-family split for model and TTS providers to clean up the provider registry. 
*   **Desktop App Enhancements:** Work advanced on [PR #6370](https://github.com/zeroclaw-labs/zeroclaw/pull/6370) (dashboard self-update flow) and [PR #6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) (nodes dashboard and device identification).
*   **New Tools:** The project saw an influx of open PRs for smart home and lifestyle tools, including [Philips Hue](https://github.com/zeroclaw-labs/zeroclaw/pull/6470), [Home Assistant](https://github.com/zeroclaw-labs/zeroclaw/pull/6464), [Eight Sleep](https://github.com/zeroclaw-labs/zeroclaw/pull/6471), and [Spotify](https://github.com/zeroclaw-labs/zeroclaw/pull/6478).

## 4. Community Hot Topics
The most actively discussed issues highlight scaling pains and architectural needs as users deploy ZeroClaw in multi-device and multi-model setups.
*   **Release Pipeline ([Issue #5878](https://github.com/zeroclaw-labs/zeroclaw/issues/5878) - 8 comments):** The community is heavily tracking the `v0.7.5` milestone, which focuses on retiring manual version bumps in favor of automated release pipelines.
*   **Database-First Memory ([Issue #4028](https://github.com/zeroclaw-labs/zeroclaw/issues/4028) - 5 comments):** Users are advocating for a migration to a `pgvector` and graph-capability memory architecture, indicating a strong need for persistent, relational memory in AI agents.
*   **Provider Config Standardization ([Issue #6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) - 1 comment):** Discussion around typed-family splits for models shows the community's desire for stricter, less ambiguous configuration files.
*   **Desktop App Lifecycle ([Issue #6466](https://github.com/zeroclaw-labs/zeroclaw/issues/6466)):** High interest in embedding the local gateway directly into the Tauri desktop app, lowering the barrier to entry for non-technical users.

## 5. Bugs & Stability
Several high-severity bugs have surfaced regarding core agent loops and channel reliability. 
*   **S1 - Workflow Blocked: Shell Tool Autonomy Bypass ([Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)):** At `level = "full"` autonomy, shell tool calls are silently refused. *No fix PR is open yet.*
*   **S1 - Workflow Blocked: WhatsApp Protocol Bump ([Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246)):** Messages stopped flowing following an April 2026 server-side protocol update. *Fix PR is open/merged ([PR #6414](https://github.com/zeroclaw-labs/zeroclaw/pull/6414)).*
*   **S1 - Workflow Blocked: Windows Google Workspace Tool ([Issue #6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410)):** The `gws` tool fails on Windows because Rust's `Command` doesn't resolve `.cmd` extensions. *No fix PR is open yet.*
*   **S2 - Degraded Behavior: DeepSeek Context Compression ([Issue #6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269)):** Context compression drops `reasoning_content`, breaking agents using DeepSeek and similar providers.
*   **S2 - Degraded Behavior: Postgres Memory Panic ([Issue #6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)):** Gateway crashes with `Cannot start a runtime from within a runtime` when attempting to use Postgres.
*   **S2 - Degraded Behavior: Double LLM Invocation ([Issue #6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474)):** A single user request via Slack/local LLMs triggers the LLM twice, unnecessarily doubling cost and latency.

## 6. Feature Requests & Roadmap Signals
Channel and provider expansion dominate the feature requests, heavily driven by contributor `theonlyhennygod` who single-handedly proposed adapters for [Zulip](https://github.com/zeroclaw-labs/zeroclaw/issues/6437), [Rocket.Chat](https://github.com/zeroclaw-labs/zeroclaw/issues/6435), [Twilio SMS](https://github.com/zeroclaw-labs/zeroclaw/issues/6427), and [Lemmy](https://github.com/zeroclaw-labs/zeroclaw/issues/6442).
*   **Upcoming in v0.8.0:** The typed-provider split ([Issue #6273](https://github.com/zeroclaw-labs/zeroclaw/issues/6273) / [PR #6403](https://github.com/zeroclaw-labs/zeroclaw/pull/6403)) and [Morph fast-apply provider](https://github.com/zeroclaw-labs/zeroclaw/issues/6439) are highly likely to land in the next version.
*   **Config Validation:** [Issue #6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416) proposes a `zeroclaw onboard` config validator, reflecting a maturing focus on developer experience (DX) and first-time user setup.

## 7. User Feedback Summary
Users are pushing ZeroClaw into complex, multi-platform personal assistant roles but are experiencing friction with configuration and platform-specific quirks. 
*   **Pain Points:** Users are frustrated by silent failures, such as TTS voice replies breaking when Telegram's `stream_mode` is set to "partial" ([Issue #6415](https://github.com/zeroclaw-labs/zeroclaw/issues/6415)). Additionally, Windows users are encountering standard cross-compatibility issues (e.g., [Issue #6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410)). 
*   **Use Cases:** The integration of smart home APIs (Home Assistant, Hue, Eight Sleep) highlights a strong use case for ZeroClaw as a centralized, personal life-management agent rather than just a coding assistant.

## 8. Backlog Watch
*   **Observability Gaps:** [Issue #6001](https://github.com/zeroclaw-labs/zeroclaw/issues/6001) and [Issue #5118](https://github.com/zeroclaw-labs/zeroclaw/issues/5118) highlight that cost tracking and token usage in the WebSocket gateway are currently broken or missing. This is critical for production deployments and requires maintainer attention.
*   **Desktop App Bootstrapping:** [Issue #6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465) (Bundling chat-ui as static assets) and [Issue #6466](https://github.com/zeroclaw-labs/zeroclaw/issues/6466) (Embedded gateway lifecycle) are essential for the Tauri desktop app to reach general availability without requiring CLI configuration.
*   **Missing Documentation:** [Issue #5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) remains open as a good first issue; new contributors need better documentation on how to write and format custom "skills" for the agent.

</details>