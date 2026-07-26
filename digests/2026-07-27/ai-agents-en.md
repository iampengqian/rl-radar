# OpenClaw Ecosystem Digest 2026-07-27

> Issues: 342 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-26 22:16 UTC

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

Here is the project digest for OpenClaw based on the GitHub data provided.

# OpenClaw Project Digest (2026-07-27)

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high development velocity and active community engagement, with nearly 500 PRs and over 340 issues updated in the last 24 hours. The maintainers and contributors are clearly pushing hard on stability and architectural refactoring, successfully closing 204 PRs and 95 issues within a single day. However, the massive volume of open updates (296 open PRs, 247 active issues) indicates that the project is navigating significant growing pains. The core focus areas right now are resolving session-state races, fixing event-loop blocking under heavy loads, and untangling monolithic legacy systems into robust, scalable components.

## 2. Releases
No new releases were recorded in this 24-hour window. The project appears to be in a heavy merge/refactor phase rather than a feature-freeze release cycle. 

## 3. Project Progress
Significant structural and stability improvements were merged today:
*   **Architectural Refactoring:** [PR #113552](https://github.com/openclaw/openclaw/pull/113552) successfully split the monolithic 2,501-line Codex app-server configuration into manageable modules. Additionally, [PR #112678](https://github.com/openclaw/openclaw/pull/112678) moved implicit-main fallbacks into load-time roster injection, cleaning up agent initialization across 38 runtime sites.
*   **Reliability & Database Resilience:** [PR #113531](https://github.com/openclaw/openclaw/pull/113531) and [PR #113518](https://github.com/openclaw/openclaw/pull/113518) proved and hardened SQLite recovery interruption and `VACUUM` kill processes, ensuring database integrity.
*   **User Experience:** [PR #113509](https://github.com/openclaw/openclaw/pull/113509) added a local tokenizer to fix misleading empty context-limit rings in the Control UI. [PR #113526](https://github.com/openclaw/openclaw/pull/113526) fixed WCAG AA contrast failures for status labels, and [PR #113047](https://github.com/openclaw/openclaw/pull/113047) fixed webchat media leaks and video aspect ratios.

## 4. Community Hot Topics
The community is heavily focused on expanding platform availability and multi-agent safety:
*   **Cross-Platform Expansion (115 comments, 80 👍):** [Issue #75](https://github.com/openclaw/openclaw/issues/75) remains the most discussed topic. Users are highly eager for Linux and Windows Clawdbot apps to match the existing macOS/iOS feature sets.
*   **Agent Tool Visibility:** [Issue #99241](https://github.com/openclaw/openclaw/issues/99241) (24 comments) highlights a critical UX friction point where ANSI-heavy tool outputs render as unreadable image attachments, causing the agent to hallucinate or lose context.
*   **Security & HITL Integrations:** [Issue #82336](https://github.com/openclaw/openclaw/issues/82336) (5 comments) and [Issue #6615](https://github.com/openclaw/openclaw/issues/6615) (9 comments, 8 👍) show strong demand for external Human-in-the-Loop (HITL) plugin approval APIs and denylist support for command executions.
*   **Composable AI Termination (PR):** [PR #75165](https://github.com/openclaw/openclaw/pull/75165) is generating excitement by introducing a composable termination algebra and GSAR grounding scorer for hallucination detection in A2A agent loops.

## 5. Bugs & Stability
Stability issues currently center around gateway performance, session races, and memory handling. Many of these have active fix PRs pending review:
*   **Gateway Crash Loops & Event Loop Stalls:** 
    *   [Issue #112423](https://github.com/openclaw/openclaw/issues/112423) (P1) reveals that large SQLite transcript cleanups block the gateway event loop. 
    *   [Issue #113474](https://github.com/openclaw/openclaw/issues/113474) (P1) causes persistent crash loops on edge devices (Raspberry Pi 5).
    *   *Fix in progress:* [PR #113171](https://github.com/openclaw/openclaw/pull/113171) bounds session catalog refresh pressure, and [PR #114160](https://github.com/openclaw/openclaw/pull/114160) reduces duplicate dispatch pressure.
*   **Codex Session Resets:** [Issue #113466](https://github.com/openclaw/openclaw/issues/113466) (P1) notes that `/new` and `/reset` commands fail to create fresh sessions. 
    *   *Fix in progress:* [PR #114056](https://github.com/openclaw/openclaw/pull/114056) and [PR #113796](https://github.com/openclaw/openclaw/pull/113796) aim to prevent session-changed errors and recover native controls.
*   **Message Duplication:** [Issue #86519](https://github.com/openclaw/openclaw/issues/86519) documents a regression where agents send 2-10x duplicate identical replies on Telegram.

## 6. Feature Requests & Roadmap Signals
Based on current momentum and merged PRs, the next version will likely focus heavily on gateway performance, multi-agent scaling, and native OS integrations:
*   **Distributed Agent Runtime:** [Issue #42026](https://github.com/openclaw/openclaw/issues/42026) proposes splitting the monolithic gateway into a Control Plane and separate Agent Runtimes. This RFC indicates a strategic pivot toward heavy enterprise/multi-agent scaling.
*   **Per-Agent "Dreaming" & Memory Management:** [Issue #67413](https://github.com/openclaw/openclaw/issues/67413) requests per-agent memory consolidation configuration to prevent OOM kills during simultaneous multi-agent memory spikes.
*   **Enhanced OS Controls:** [PR #113506](https://github.com/openclaw/openclaw/pull/113506) improves macOS screen capture and node routing, paving the way for robust computer-use capabilities on desktop.

## 7. User Feedback Summary
Users are deploying OpenClaw in highly complex, multi-agent environments, heavily utilizing messaging platforms (Telegram, Discord, Matrix) as primary interfaces. While excitement is high, **user satisfaction is currently tempered by session reliability issues**. Operators are frustrated by silent message drops, context compaction timeouts ([Issue #92043](https://github.com/openclaw/openclaw/issues/92043)), and gateway wedging during long-running "thinking" sessions. Windows and Linux users feel left behind due to the lack of native Clawdbot apps. Overall, the community acknowledges the project's rapid pace but is urgently begging for reliability over new features.

## 8. Backlog Watch
Several critical issues are blocked by "needs product decision" or "needs maintainer review" tags and risk becoming stale:
*   **Silent Cron Migration Data Loss:** [Issue #90378](https://github.com/openclaw/openclaw/issues/90378) (P0) involves a botched JSON to SQLite migration causing channel errors. Despite a linked PR, this critical bug needs immediate product alignment.
*   **MCP Loopback Disconnects:** [Issue #98435](https://github.com/openclaw/openclaw/issues/98435) (P1) breaks tool calling after a gateway restart. Marked `clawsweeper-recovery-stuck`, it requires maintainer attention.
*   **Security Boundary Evasion:** [Issue #45049](https://github.com/openclaw/openclaw/issues/45049) (P1) is a critical bug where agents "simulate" tool calls in text to bypass execution policies. It needs immediate security review. 
*   **Prompt Caching Churn:** [Issue #95610](https://github.com/openclaw/openclaw/issues/95610) points out that dynamic prompt injections defeat OpenAI's prefix caching, quietly increasing user API costs.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the open-source AI agent ecosystem as of July 27, 2026.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a high-velocity, transitionary phase, shifting from basic chat interfaces to complex, multi-agent orchestration. Maintenance activity across the board is heavily dominated by bug fixing, security hardening (specifically sandboxing and execution boundaries), and fixing message-routing regressions. There is a strong, ecosystem-wide push toward enterprise readiness, marked by efforts to support heterogenous LLM providers, cross-platform desktop deployments, and deep integration with messaging platforms like Telegram, WhatsApp, Slack, and Feishu. However, this rapid feature expansion is introducing significant stability bottlenecks, with memory management and silent message-loss emerging as critical industry-wide pain points.

### 2. Activity Comparison
*Health Score is graded on a 1-5 scale based on PR/Issue ratios, release cadence, and bug response time.*

| Project | Active Issues (24h) | Active PRs (24h) | Recent Release | Project Health Score | Status Summary |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 247 | 296 | No | 4.0 / 5 | Massive scale; refactoring monolithic architecture. |
| **NanoBot** | Low | 22 | No | 5.0 / 5 | Exceptionally healthy; rapid stabilization sprint. |
| **Hermes Agent** | 46 | 47 | No | 3.5 / 5 | High engagement, but backlogs are growing stale. |
| **ZeroClaw** | 41 | 50 | Imminent (v0.8.4) | 4.5 / 5 | Pre-release bug squash; heavy focus on S1 security. |
| **PicoClaw** | Low | 4 | No | 4.0 / 5 | Mature, steady contributions; tooling expansion. |
| **LobsterAI** | Low | 8 | No | 3.0 / 5 | Functional bottleneck; critical PRs marked stale. |
| **NanoClaw** | 4 (New) | 11 (3 Merged) | No | 3.5 / 5 | Facing severe regressions from breaking changes. |
| **IronClaw** | 3 | 18 | Pending | 4.0 / 5 | Core-team driven; architectural refactoring. |
| **CoPaw (QwenPaw)**| 13 (New) | 5 | No (v2.0.1 active)| 2.5 / 5 | High bug volume post-release; triage phase. |
| **Moltis** | 0 | 8 | No | 4.5 / 5 | Builder phase; zero bugs, feature pipeline full. |
| **NullClaw** | 1 (Critical) | 0 | No (Stalled) | 1.0 / 5 | Stagnant; production-breaking ARM64 bug ignored. |
| **TinyClaw** | 0 | 0 | No | N/A | Dormant. |
| **ZeptoClaw** | 0 | 0 | No | N/A | Dormant. |

### 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw operates at a scale eclipsed only by ZeroClaw. Handling nearly 500 PRs and 340 issues in a single day demonstrates a massive, highly engaged community and a robust maintenance pipeline. Its primary advantage is its depth of architecture—specifically its advanced memory consolidation ("Dreaming") and composable termination algebra for A2A (agent-to-agent) loops, which are years ahead of smaller projects like PicoClaw or Moltis.
**Technical Approach Differences:** Unlike NanoBot or Hermes Agent, which are polishing monolithic local-first apps, OpenClaw is actively fracturing its architecture to prepare for distributed scaling (Control Plane vs. Agent Runtimes). 
**Community Size Comparison:** OpenClaw has the highest absolute engagement. However, its massive backlog of P1 bugs (gateway crash loops, session races) shows that its community is outpacing the core maintainers' ability to stabilize the codebase, contrasting poorly with NanoBot’s highly efficient merge-to-issue ratio.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging across the ecosystem:
*   **Robust Sandboxing & Tool Execution:** Securing local environments against malicious LLM outputs is a top priority. *NanoBot* (bwrapper configs), *ZeroClaw* (Firejail/Seatbelt wrappers), *IronClaw* (Reborn extension host), and *PicoClaw* (remote exec policies) are all actively overhauling security boundaries.
*   **Messaging Channel Reliability & Auth:** Transitioning from simple web UIs to messaging-app deployments (WhatsApp, Telegram, Slack) is universally breaking. *ZeroClaw*, *Hermes Agent*, *NanoClaw*, and *OpenClaw* are all fighting bugs related to sender authorization, cross-channel approval bypasses, and markdown formatting constraints (especially on Asian platforms like Feishu/Lark).
*   **Context & Memory Parity:** Preserving agent state during asynchronous operations. *NanoBot* (mid-turn context loss), *OpenClaw* (session-state races), *Hermes Agent* (profile state leakage), and *NanoClaw* (host-vs-agent memory parity) highlight that managing long-running memory without silent drops is a critical, unsolved industry hurdle.
*   **MCP (Model Context Protocol) Integration:** Standardizing tool integration. *CoPaw*, *ZeroClaw*, and *OpenClaw* are actively patching MCP transport layers, stdio JSON-RPC routing, and schema validations.

### 5. Differentiation Analysis
*   **Enterprise Multi-Agent vs. Local Single-IoT:** *OpenClaw* and *IronClaw* are building complex, distributed control planes for heavy compute. Conversely, *NanoBot* and *PicoClaw* are optimizing for edge deployment (Raspberry Pi, SBCs) and low-overhead execution.
*   **Target Audiences:** *Hermes Agent* and *LobsterAI* are heavily focused on end-user Desktop GUI experiences (i18n support, background wallpapers, Windows installers). *ZeroClaw* and *Moltis* cater heavily to developer/DevOps operators (OpenAI API compatibility, CLI shell modes, Slack/Discord integration).
*   **Architectural Paradigms:** *IronClaw* relies heavily on Rust/WASM for cryptographic safety and formal "Failure Taxonomies." *NanoClaw* and *CoPaw* focus on containerized agent isolation (Docker/cap-drop).

### 6. Community Momentum & Maturity
*   **Tier 1: Hyper-Growth & Refactoring (OpenClaw, ZeroClaw):** Experiencing massive iteration but battling severe architectural growing pains. Velocity is high, but user satisfaction is tempered by stability issues.
*   **Tier 2: Highly Mature/Stabilizing (NanoBot, IronClaw, Moltis):** Moving rapidly but in a controlled, highly professional manner. Bugs are fixed almost as fast as they are opened, and PRs include rigorous testing.
*   **Tier 3: Struggling / Triage Phase (CoPaw, LobsterAI, NanoClaw, Hermes Agent):** Momentum is being choked by stale backlogs, post-release regressions (CoPaw v2.0.1), or architectural migration failures (NanoClaw). 
*   **Tier 4: Stalled / Dormant (NullClaw, TinyClaw, ZeptoClaw):** NullClaw is actively bleeding users due to a 11-day unpatched critical ARM64 crash bug, while others see zero activity.

### 7. Trend Signals
*   **Async "Fire-and-Forget" Workflows:** Users no longer want synchronous chat. The push for `notice_after_complete` tools (CoPaw), long-running background tasks, and goal-oriented autonomous modes (ZeroClaw) proves that agents are transitioning into background daemon services.
*   **Localization to Asian Markets:** High friction surrounding Chinese network installations (Hermes Agent), QQ/Feishu/DingTalk integrations (NanoBot, OpenClaw, Hermes), and Traditional Chinese localizations (CoPaw) signal a massive shift in developer demand toward the Asian enterprise market.
*   **A2A (Agent-to-Agent) Communication:** Multi-agent systems are becoming standard. Projects like OpenClaw (composable termination algebra) and Moltis (ACP agent/client transitions) are paving the way for agents to manage other agents, requiring new standards for routing, failure recovery, and shared memory.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot based on the provided GitHub data.

# NanoBot Project Digest — 2026-07-27

## 1. Today's Overview
The NanoBot project exhibits **exceptionally high development velocity and robust health** as of July 27, 2026. In the last 24 hours, maintainers merged an impressive 22 pull requests while closing 7 issues, indicating highly active project stewardship and rapid bug resolution. The development focus is heavily skewed toward **system stability, security hardening, and strict LLM provider compatibility**, particularly addressing edge cases in memory handling (Dream batches), execution sandboxing, and local configurations. With zero new formal releases today, this burst of activity appears to be a massive stabilization and polishing sprint ahead of an upcoming version bump.

## 2. Releases
No new releases were published in the last 24 hours. *(Omitted detailed changelog as per instructions).*

## 3. Project Progress
A staggering 22 PRs were merged/closed today, representing significant forward progress across multiple core subsystems:
*   **Memory Management Fixes:** Maintainers resolved critical issues with the agent's "Dream" memory processing. [PR #5054](https://github.com/HKUDS/nanobot/pull/5054) ensures that no-op Dream batches advance the cursor properly, preventing history starvation.
*   **Agent Context & Continuity:** [PR #5084](https://github.com/HKUDS/nanobot/pull/5084) fixed a severe bug where pending mid-turn messages lost their runtime context, and [PR #5056](https://github.com/HKUDS/nanobot/pull/5056) fixed AgentRunner length recovery to prevent loss of earlier output segments.
*   **Sandbox Expandability:** [PR #4625](https://github.com/HKUDS/nanobot/pull/4625) successfully introduced configurable extra bind roots for `bwrap` sandboxes, allowing secure access to local tool directories.
*   **Channel & CLI Improvements:** Merged PRs included fixes for DingTalk private chat gating ([PR #4446](https://github.com/HKUDS/nanobot/pull/4446)), heartbeat routing for unified sessions ([PR #4928](https://github.com/HKUDS/nanobot/pull/4928)), and OpenAI Codex OAuth integration in CLI Quick Start ([PR #4939](https://github.com/HKUDS/nanobot/pull/4939)).
*   **Performance Optimization:** [PR #5036](https://github.com/HKUDS/nanobot/pull/5036) made the idle compaction scan interval configurable, drastically reducing CPU usage on edge devices like Raspberry Pi.

## 4. Community Hot Topics
The most engaging topics revolve around edge cases in message queuing and architectural improvements:
*   **Mid-turn message context loss** ([Issue #4064](https://github.com/HKUDS/nanobot/issues/4064)): A highly upvoted and discussed issue pointing out that messages queued during an active run lost vital sender/channel metadata. This was addressed today in PR #5084. **Underlying need:** Users running complex agent loops need absolute guarantee that contextual metadata survives asynchronous message injection.
*   **Specialized Sub-agents** ([Issue #1012](https://github.com/HKUDS/nanobot/issues/1012)): A long-standing request (open since Feb 2026) to allow different sub-agents to have distinct toolsets (e.g., separating web tools from coding tools) rather than a uniform setup. **Underlying need:** Users want to build complex, multi-agent architectures with principle-of-least-privilege per agent.
*   **`bwrap` Sandbox limitations** ([Issue #4107](https://github.com/HKUDS/nanobot/issues/4107): Users requested the ability to mount custom directories into the sandbox. Resolved today via PR #4625. **Underlying need:** Developers utilizing local environment toolchains (like cargo or local bin) need seamless integration with the agent's secure execution environment.

## 5. Bugs & Stability
Today's digest shows a massive cleanup of crash-inducing bugs and stability regressions, ranked by severity:

*   **[Critical] Image URL SSRF Vulnerability:** Risk of Server-Side Request Forgery via generated image URLs.
    *   *Fix:* [PR #5095](https://github.com/HKUDS/nanobot/pull/5095) (Open) hardens downloads using DNS-pinning, validates redirects, and enforces a 32 MiB cap.
*   **[High] Strict LLM Provider Schema Breakage:** A single MCP tool with a non-standard JSON-Pointer `$ref` could cause strict providers like Kimi/Moonshot to reject the entire chat ([Issue #5040](https://github.com/HKUDS/nanobot/issues/5040)).
    *   *Fix:* [PR #5057](https://github.com/HKUDS/nanobot/pull/5057) (Merged) normalizes local schema refs.
*   **[High] Silent Message Loss via `/stop`:** The `/stop` command drained the pending queue without republishing to the bus ([Issue #4792](https://github.com/HKUDS/nanobot/issues/4792)).
    *   *Fix:* Pending (Currently open issue, likely targeted by upcoming PRs).
*   **[Medium] JSON Null Tolerance Crashes:** Multiple crashes occurred due to `null` values in local JSON configs and third-party payloads (Feishu cards, pairing maps, triggers).
    *   *Fixes:* A barrage of merged PRs today harden the parser: [PR #5088](https://github.com/HKUDS/nanobot/pull/5088), [PR #5089](https://github.com/HKUDS/nanobot/pull/5089), [PR #5092](https://github.com/HKUDS/nanobot/pull/5092), and [PR #5093](https://github.com/HKUDS/nanobot/pull/5093).

## 6. Feature Requests & Roadmap Signals
Based on today's codebase movements and user feedback, here are the predicted roadmap signals for the next release:
*   **Advanced Sub-agent Orchestration:** [Issue #1012](https://github.com/HKUDS/nanobot/issues/1012) highlights a strong desire for profile-based sub-agents.
*   **Edge Computing & IoT Compatibility:** [PR #5036](https://github.com/HKUDS/nanobot/pull/5036) signals a clear push to make NanoBot lightweight enough for SBCs (Raspberry Pi), likely expanding NanoBot's market share into home-lab and self-hosted enthusiasts.
*   **Stricter Multi-Provider Validation:** The integration of strict schemas (Kimi/Moonshot) and the fixing of Gemini Flash image aspect ratios ([PR #4656](https://github.com/HKUDS/nanobot/pull/4656)) indicate a roadmap focused on becoming the most robust universal AI client for heterogeneous LLM providers.

## 7. User Feedback Summary
**Pain Points:** Users previously experienced frustration with agent "amnesia" or "hallucinations" during long sessions, specifically caused by the Dream memory starvation bug ([Issue #5041](https://github.com/HKUDS/nanobot/issues/5041)) and AgentRunner length recovery truncation ([Issue #5051](https://github.com/HKUDS/nanobot/issues/5051)). Additionally, integration with Chinese platforms (Feishu, DingTalk) proved brittle when handling null or unexpected API responses.
**Satisfaction/Dissatisfaction:** Overall satisfaction with the project's trajectory should be exceptionally high today. The maintainers responded directly to complex, low-level architecture reports (like `bwrap` sandboxing and SSRF vulnerabilities) with rapid, tested fixes. The high ratio of merged test-included PRs shows a very professional maintenance standard.

## 8. Backlog Watch
*   **[Issue #4792](https://github.com/HKUDS/nanobot/issues/4792) - `/stop` silently discards queue messages:** This high-severity bug report is still open. Because it results in permanent message loss during mid-turn injections, it requires immediate attention and a corresponding fix PR.
*   **[Issue #1012](https://github.com/HKUDS/nanobot/issues/1012) - Add subagent profiles:** Marked as `[stale]`, this feature request has been active since February. As NanoBot grows more complex, the community is clamoring for specialized agent routing. Maintainers should update the community on whether this aligns with the core vision.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent based on the provided GitHub data.

# Hermes Agent Project Digest (2026-07-27)

## 1. Today's Overview
The Hermes Agent project exhibits exceptionally high community engagement and maintenance activity, processing 50 updated issues and 50 pull requests in the last 24 hours. With a massive backlog of 46 open issues and 47 open PRs actively being discussed, the project is clearly in a phase of rapid iteration and scaling. The community is heavily focused on hardening security boundaries, expanding desktop/UI capabilities, and patching provider-specific adapter bugs (specifically for Anthropic, Gemini, and OpenAI). 

## 2. Releases
No new releases were published today.

## 3. Project Progress
While the project merged or closed only 3 PRs and 4 issues in the last 24h, the open PR pipeline is buzzing with active feature development and critical fixes. 
Key advancements include:
*   **UX & Workflow Enhancements:** Introduction of a CLI shell mode to run commands without spending tokens ([PR #72257](https://github.com/NousResearch/hermes-agent/pull/72257)) and a prompt stash system ([PR #72262](https://github.com/NousResearch/hermes-agent/pull/72262)).
*   **Internationalization:** Full Russian locale support for the Desktop App is nearing completion ([PR #71573](https://github.com/NousResearch/hermes-agent/pull/71573)).
*   **Desktop Performance & Stability:** Significant performance fixes to stop transcript re-rendering ([PR #72245](https://github.com/NousResearch/hermes-agent/pull/72245)) and slash-command catalog refreshing ([PR #72195](https://github.com/NousResearch/hermes-agent/pull/72195)).

## 4. Community Hot Topics
The most actively discussed items revolve around desktop reliability, messaging platform integrations, and Chinese user accessibility:
*   **Desktop Dashboard Update Crash:** A highly debated issue ([#52218](https://github.com/NousResearch/hermes-agent/issues/52218)) where triggering an update from the web GUI restarts the gateway and takes the whole system offline. Users are requesting more robust update state management.
*   **Feishu/Lark Formatting:** Users report broken markdown formatting due to over-escaping ([#9816](https://github.com/NousResearch/hermes-agent/issues/9816)), highlighting a strong enterprise use case for the app in Asian markets.
*   **Chinese Network Installations:** A feature request for a one-click installer tailored for Windows users in China ([#37491](https://github.com/NousResearch/hermes-agent/issues/37491)) to bypass slow GitHub/npm access.

## 5. Bugs & Stability
Several critical bugs have been identified, fortunately accompanied by active fix PRs:
*   **Critical Security Bypass (P2):** The auto-approve guard for sensitive paths ignores symlinks, potentially allowing credential theft without user prompting. ([Issue #55367](https://github.com/NousResearch/hermes-agent/issues/55367))
*   **Profile State Leakage (P2):** The Desktop dashboard merges the launched profile with the selected profile, causing MCP tools to fail to load and secrets to resolve incorrectly. ([Issue #67605](https://github.com/NousResearch/hermes-agent/issues/67605))
*   **Provider API Errors (P2):** 
    *   Gemini native adapter fails when history starts with an assistant turn, causing a 400 error ([Issue #55427](https://github.com/NousResearch/hermes-agent/issues/55427), [PR #13774](https://github.com/NousResearch/hermes-agent/pull/13774)).
    *   Anthropic text-only tool results are being unnecessarily JSON-serialized, confusing the model ([PR #72258](https://github.com/NousResearch/hermes-agent/pull/72258)).
*   **Memory Corruption (P2):** The `MemoryStore` tool silently splits and corrupts user content if the exact entry delimiter sequence (`\n§\n`) is used. ([Issue #54403](https://github.com/NousResearch/hermes-agent/issues/54403))

## 6. Feature Requests & Roadmap Signals
Recent PRs and issues signal an upcoming focus on **granular local OS integrations** and **security policy automation**.
*   **Smart Allowlists:** `hermes approvals suggest` will mine user approval history to auto-generate command allowlists ([PR #72259](https://github.com/NousResearch/hermes-agent/pull/72259)).
*   **Niche Integrations:** Introduction of a Korean fire regulations MCP tool ([PR #72261](https://github.com/NousResearch/hermes-agent/pull/72261)) shows an expansion into highly specific, localized compliance tools.
*   **Customization:** Users are requesting deeper desktop personalization, such as custom background wallpapers ([Issue #57848](https://github.com/NousResearch/hermes-agent/issues/57848)).

## 7. User Feedback Summary
Users are heavily utilizing Hermes as a desktop-centric, multi-platform autonomous agent but are experiencing friction with platform abstraction layers. Messaging adapters (Telegram, QQ, Feishu) frequently mangle markdown or send stale heartbeats ([Issue #10990](https://github.com/NousResearch/hermes-agent/issues/10990)). Meanwhile, Desktop UI users are frustrated by session/profile management inconsistencies, where OAuth and worker sessions are hidden or mixed up. There is high satisfaction with the tool's breadth, but users clearly want tighter stability around cross-profile secrets and tool execution payloads.

## 8. Backlog Watch
*   **Stale Multi-Platform Bugs:** Issues like Feishu markdown breaking ([Issue #9816](https://github.com/NousResearch/hermes-agent/issues/9816) - open since April) and QQ markdown support failing ([Issue #26697](https://github.com/NousResearch/hermes-agent/issues/26697)) have lingered for months without core maintainer integration.
*   **Long-standing Windows Defects:** The missing taskbar icon on Windows ([Issue #41305](https://github.com/NousResearch/hermes-agent/issues/41305)) has been open since June 7th and affects basic branding for all Windows users.
*   **Documentation Gaps:** The request to document `transform_tool_result` in plugin hooks ([Issue #63339](https://github.com/NousResearch/hermes-agent/issues/63339)) is still awaiting a docs patch, hindering 3rd-party plugin development.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the GitHub data provided for 2026-07-27.

### 1. Today's Overview
PicoClaw is experiencing a highly active and healthy development phase, characterized by a strong focus on system stability, security hardening, and ecosystem expansion. Over the last 24 hours, the project saw 12 total updates across issues and pull requests, with community members actively contributing code and identifying edge cases. The influx of new PRs introducing native tool integrations and providers signals a maturing feature set aimed at becoming a highly extensible AI gateway. Maintainers are actively merging long-standing tool integrations while the community has mobilized to patch critical message-handling bugs and security boundaries.

### 2. Releases
*Omitted. No new releases were published in the last 24 hours.*

### 3. Project Progress
Progress today was driven largely by community contributions and long-standing feature merges:
*   **Major Feature Merge:** [PR #339 (CLOSED)](https://github.com/sipeod/picoclaw/pull/339) was finally closed after 5 months, successfully integrating Google Calendar support, an enhanced Email channel with better polling, and new GitHub/System Stats developer tools.
*   **Security Hardening:** [PR #3297 (OPEN)](https://github.com/sipeed/picoclaw/pull/3297) introduced critical security boundary updates, migrating configs to schema v4, enforcing remote execution policies, and normalizing remote sender metadata.
*   **Vulnerability Remediation:** [PR #3248 (CLOSED)](https://github.com/sipeed/picoclaw/pull/3248) bumped the Go toolchain to 1.25.12, successfully patching standard library vulnerabilities (`crypto/tls` and `os`).
*   **Bug Fixes Submitted:** A fix for the infinite loop in message splitting was submitted via [PR #3295](https://github.com/sipeed/picoclaw/pull/3295), and routing normalization edge cases were addressed in [PR #3202](https://github.com/sipeed/picoclaw/pull/3202).

### 4. Community Hot Topics
*   **Exa Web Search Integration ([PR #3299](https://github.com/sipeed/picoclaw/pull/3299)):** A community member contributed a native integration for Exa's search API. This highlights a strong community desire to expand PicoClaw's agentic tool capabilities beyond basic LLM routing, allowing agents to autonomously pull structured web data.
*   **AI Router Preset Request ([Issue #3298](https://github.com/sipeed/picoclaw/issues/3298)):** The developer of AI Router explicitly requested a named provider preset. Even though users can currently use the generic OpenAI provider, the push for a native preset shows that third-party services want formal recognition within PicoClaw's UI/UX to drive adoption.

### 5. Bugs & Stability
Several notable bugs were reported or addressed today, impacting core gateway operations:
*   **Critical / High:**
    *   **SplitMessage Infinite Loop ([Issue #3264](https://github.com/sipeed/picoclaw/issues/3264)):** `channels.SplitMessage` hangs indefinitely when processing oversized fenced-code blocks.
        * *Status:* **Fix available** in [PR #3295](https://github.com/sipeed/picoclaw/pull/3295) (falls back to a bounded raw split).
    *   **Remote Execution Vulnerabilities:** Potential prompt injection and unauthorized remote execution risks.
        * *Status:* **Fix available** in [PR #3297](https://github.com/sipeed/picoclaw/pull/3297) (defaults to disabled, requires per-call approval).
*   **Medium:**
    *   **Gateway Startup Failure ([Issue #3265](https://github.com/sipeed/picoclaw/issues/3265)):** The gateway crashes on boot with a "channel deltachat has unknown type" error, even when deltachat isn't configured, indicating a regression in default config loading.
    *   **Antigravity Token Refresh Failure ([PR #3267](https://github.com/sipeed/picoclaw/pull/3267)):** Auth tokens for the Antigravity provider fail to refresh due to an incorrectly passed scope, resulting in `PERMISSION_DENIED` errors. Fix submitted.

### 6. Feature Requests & Roadmap Signals
Based on today's issue tracker and PRs, the immediate roadmap signals point heavily toward **Tooling Expansion** and **Security**:
*   **Agentic Tooling:** The addition of Exa search ([PR #3299](https://github.com/sipeed/picoclaw/pull/3299)) and closure of the Calendar/Email/GitHub tools ([PR #339](https://github.com/sipeed/picoclaw/pull/339)) suggests the next minor/major release will likely lean heavily into "Agents with Tools" rather than just pure chat.
*   **Provider Ecosystem:** Expect more "preset" integrations like the requested AI Router ([Issue #3298](https://github.com/sipeed/picoclaw/issues/3298)) to lower the barrier to entry for non-technical users.
*   **Security Schema Updates:** [PR #3297](https://github.com/sipeed/picoclaw/pull/3297) introduces "schema v4" migration. Users should be prepared for a breaking config change in upcoming releases to accommodate the new remote exec boundaries.

### 7. User Feedback Summary
*   **Pain Points:** Users are occasionally running into harsh edge cases that disrupt service, such as the gateway crashing unexpectedly on missing configs ([Issue #3265](https://github.com/sipeed/picoclaw/issues/3265)) or messages failing to send due to oversized code blocks hanging the channel ([Issue #3264](https://github.com/sipeed/picoclaw/issues/3264)).
*   **Satisfaction:** Overall sentiment appears highly constructive. Users are not just reporting bugs, but actively submitting complex PRs to fix them (e.g., [PR #3295](https://github.com/sipeed/picoclaw/pull/3295), [PR #3202](https://github.com/sipeed/picoclaw/pull/3202)). The community is technically proficient and eager to integrate PicoClaw into broader ecosystems (Exa, AI Router, Antigravity).

### 8. Backlog Watch
Several issues and PRs have gone stale and require maintainer triage to keep the project moving forward smoothly:
*   **[Issue #3252](https://github.com/sipeed/picoclaw/issues/3252) (Provider Prefix Stripping Bug):** Closed/stale, but represents a fundamental flaw in `splitKnownProviderModel` that could affect provider routing.
*   **[PR #3202](https://github.com/sipeed/picoclaw/pull/3202) (Routing ID Normalization):** Open since July 1st. It fixes a regex compliance issue where leading/trailing underscores aren't stripped properly. Needs a maintainer review to be merged.
*   **[PR #3267](https://github.com/sipeed/picoclaw/pull/3267) (Antigravity Scope Fix):** Open since July 19th. It fixes a critical `PERMISSION_DENIED` error for Antigravity provider users. Should be prioritized for review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-07-27

## 1. Today's Overview
NanoClaw is currently experiencing a highly active phase of maintenance and debugging, driven largely by the rollout of its recent "explicit-destinations" breaking change. Over the past 24 hours, the project saw zero closed issues against four new critical bug reports, indicating a sudden influx of migration friction and architectural edge-cases. However, project health remains strong and responsive: maintainers and community contributors opened 11 Pull Requests (3 merged) directly targeting these regressions. The development focus is intensely concentrated on message routing logic, agent memory parity, and container stability.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Developers made solid progress on hardening the agent execution environment and fixing message delivery logic. 
*   **Container Security Merged:** A significant defense-in-depth PR ([#2748](https://github.com/nanocoai/nanoclaw/pull/2748)) was merged, enforcing `cap-drop=ALL`, `no-new-privileges`, and pids-limits on agent containers to prevent host takeovers.
*   **Duplicate Replies Fixed:** PR [#3028](https://github.com/nanocoai/nanoclaw/pull/3028) was merged to prevent duplicate outbound messages by capturing the outbound sequence early and skipping bare final summaries if a reply was already sent.
*   **Timezone Overrides Landed:** PR [#3125](https://github.com/nanocoai/nanoclaw/pull/3125) was merged, adding per-agent-group IANA timezone overrides to ground agent time-context accurately.

## 4. Community Hot Topics
The most pressing discussions revolve around message visibility and routing failures following recent updates.
*   **Agent Context Amnesia ([#3134](https://github.com/nanocoai/nanoclaw/issues/3134)):** Opened by *brianjcohen*, this issue highlights a core architectural flaw where messages sent by the host on an agent's behalf (like approval cards) are missing from the agent's memory. This reveals a strong need for true **memory parity** between the host system and the containerized agent.
*   **Broken Group Chat Silencing ([#3139](https://github.com/nanocoai/nanoclaw/pull/3139)):** A highly relevant PR regarding WhatsApp shared-number mode. The current logic blanket-drops `fromMe` messages, effectively silencing the group owner. This signals heavy user demand for flexible, multi-tenant shared-number deployments.

## 5. Bugs & Stability
Today's bug reports are severe, largely breaking core agent-to-user communication paths. Luckily, the community has been fast to draft fixes.

1.  **Critical: Explicit-Destinations Migration Breaks Chats ([#3140](https://github.com/nanocoai/nanoclaw/issues/3140))**
    *   *Impact:* Pre-existing wirings lack an `own-chat` destination, causing all agent replies in long-standing groups to be silently dropped after the update.
    *   *Status:* No fix PR submitted yet. Requires immediate maintainer attention.
2.  **Critical: Foreign Reply IDs Cause Message Loss ([#3136](https://github.com/nanocoai/nanoclaw/issues/3136))**
    *   *Impact:* `sendToDestination` stamps foreign `in_reply_to` IDs on outbound rows when an inbound history is missing, silently breaking a2a (agent-to-agent) return-path routing.
    *   *Status:* No fix PR submitted yet. 
3.  **High: Host Messages Missing from Context ([#3134](https://github.com/nanocoai/nanoclaw/issues/3134))**
    *   *Impact:* Agents cannot see messages the host sends for them, causing context breaks and user frustration.
    *   *Fix Available:* Fix implemented in PR [#3135](https://github.com/nanocoai/nanoclaw/pull/3135).
4.  **Medium: Follow-up Poll Accumulation Bug ([#3132](https://github.com/nanocoai/nanoclaw/issues/3132))**
    *   *Impact:* Follow-up polling bypasses the `trigger` gate, accumulating `trigger=0` messages into active queries and potentially overflowing context.
    *   *Fix Available:* Fix implemented in PR [#3133](https://github.com/nanocoai/nanoclaw/pull/3133).

## 6. Feature Requests & Roadmap Signals
Several PRs indicate the trajectory of NanoClaw's upcoming feature set:
*   **Self-Serve Wiring & Engagement Controls ([#3137](https://github.com/nanocoai/nanoclaw/pull/3137)):** Core team is working to allow group-scoped agents to inspect their own wirings and request approved engagement-policy updates, pointing toward more autonomous agent configuration.
*   **Native Dial Channel Integration ([#3050](https://github.com/nanocoai/nanoclaw/pull/3050)):** Active work is being done to add "Dial" to the channel picker, showing an expansion of supported telephony/communication gateways.
*   **OpenCode Compatibility ([#3122](https://github.com/nanocoai/nanoclaw/pull/3122)):** Enhancements for custom-endpoint transports and memory parity indicate a push towards broader LLM provider compatibility.

## 7. User Feedback Summary
Users are currently experiencing friction migrating to the new explicit-destinations architecture, specifically noting that silent message dropping is the most painful failure mode because it erodes trust in the AI assistant. There is clear dissatisfaction with how "silent" execution failures are handled—users prefer errors over dropped messages. Use cases demonstrate that NanoClaw is being heavily utilized in persistent, multi-user chat environments (like WhatsApp shared numbers), where nuanced message ownership (`fromMe` vs. host vs. agent) and contextual memory are critical.

## 8. Backlog Watch
*   **Migration Breaking Change ([#3140](https://github.com/nanocoai/nanoclaw/issues/3140)):** This issue has zero comments and no attached PR. Because it breaks existing installs on update, it represents the most critical gap in the current backlog.
*   **Return-Path Routing ([#3136](https://github.com/nanocoai/nanoclaw/issues/3136)):** Also zero comments and lacking a PR. Left unaddressed, this will permanently break agent-to-agent routing in dynamic environments.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest (2026-07-27)

## 1. Today's Overview
The NullClaw project is currently experiencing a period of low development activity, with zero new pull requests, merged code, or releases in the past 24 hours. However, community engagement remains active in troubleshooting a critical production bug affecting deployments. The sole issue updated today highlights a severe architectural limitation on specific hardware setups. Overall project health is currently stagnant from a code contribution standpoint, with immediate attention required from core maintainers to resolve pressing stability blockers.

## 2. Releases
No new releases were published today. The current production version in use remains **v2026.5.29**.

## 3. Project Progress
No project progress was made today. There have been no new commits, no merged pull requests, and no issues closed. The development pipeline is currently stalled with no active PRs awaiting review.

## 4. Community Hot Topics
**[Issue #976: SIGSEGV on every inbound Telegram message](https://github.com/nullclaw/nullclaw/issues/976)**
The most active community discussion centers around a critical crash bug reported by user `wonhotoss` and updated yesterday. The underlying need here is for **reliability in high-availability infrastructure setups**. Users deploying NullClaw as a background service (`systemd`) require robust error handling; when the gateway fails, the current crash-loop behavior causes silent data loss (dropped inbound messages), heavily degrading the end-user assistant experience.

## 5. Bugs & Stability
- **Critical Severity:** **[Issue #976](https://github.com/nullclaw/nullclaw/issues/976)** - A complete service disruption on `aarch64` Linux architectures. The gateway thread spawns with an undersized ~512 KB stack, causing a segmentation fault (`SIGSEGV`) on *every* inbound Telegram message. 
  - **Impact:** Complete service failure for affected users. System configurations attempting to mitigate this via `Restart=always` result in an infinite crash-loop and permanent loss of incoming user messages.
  - **Fix Status:** Currently, there is no open pull request addressing this stack overflow issue. 

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were logged today. However, the critical bug in Issue #976 strongly signals an architectural roadmap requirement: NullClaw's core worker architecture needs an audit regarding thread/memory allocation limits across different architectures. Future versions will need to implement dynamic stack sizing or larger default allocations for worker threads processing inbound payloads.

## 7. User Feedback Summary
Real-world user feedback indicates high dissatisfaction for `aarch64` users running version v2026.5.29. A major pain point is the poor resilience of the Telegram integration—specifically, the inability of the gateway to queue or persist inbound messages during a crash. Users expect that a crash and automatic restart should allow the system to reprocess dropped messages, rather than terminating them silently. 

## 8. Backlog Watch
**[Issue #976](https://github.com/nullclaw/nullclaw/issues/976)** urgently requires maintainer attention. Created on July 16th and updated yesterday after 11 days of being open, this critical bug has accumulated 3 comments but still has zero fix PRs. As it currently completely breaks the Telegram gateway on ARM64 architecture, maintainers need to prioritize investigating the 512 KB stack size limit and push a hotfix patch as soon as possible.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# 🛡️ IronClaw Project Digest — 2026-07-27

## 1. Today's Overview
IronClaw is currently exhibiting a very high velocity of development, driven predominantly by the core engineering team. Activity over the last 24 hours has been intensely focused on architectural refactoring, error recoverability, and dependency management, with 18 active or merged PRs and 3 new issues. A significant portion of today's effort is directed toward the "Reborn" initiative—specifically tightening the agent's sandbox environments and host APIs. The repository is in a state of active consolidation, shedding dead code and unifying internal systems ahead of upcoming major releases.

## 2. Releases
*No new releases were published in the last 24 hours.* However, an automated release PR ([#5598](https://github.com/nearai/ironclaw/pull/5598)) is open and pending, targeting version bumps for core crates (`ironclaw_common` v0.5.0, `ironclaw_safety` v0.2.3, `ironclaw_skills` v0.4.0), which include breaking API changes.

## 3. Project Progress
Significant structural and stability advancements were merged or finalized today:
*   **Architecture Refactoring:** The extension host ownership was successfully moved out of the composition layer into `ironclaw_extension_host::reborn` by core maintainer `ilblackdragon` ([PR #6669](https://github.com/nearai/ironclaw/pull/6669)). This cleans up the internal API facade.
*   **MCP Discovery Cleanup:** A long-standing draft PR for per-user hosted-MCP discovery ([PR #6365](https://github.com/nearai/ironclaw/pull/6365)) was closed in favor of a clean reimplementation directly onto the `main` branch ([PR #6683](https://github.com/nearai/ironclaw/pull/6683)), signaling that worker-agent hire-scoping is nearly ready for production. 
*   **Web UI Fixes:** A quick fix to preserve workspace tree state during navigation was merged ([PR #6680](https://github.com/nearai/ironclaw/pull/6680)).
*   **Log Filtering:** Noise from Cranelift and Wasmtime debug logs was successfully suppressed in Reborn hosted environments ([PR #5369](https://github.com/nearai/ironclaw/pull/5369)).

## 4. Community Hot Topics
*   **[EPIC] Error Recoverability Endgame ([Issue #6284](https://github.com/nearai/ironclaw/issues/6284))**
    *   *Activity:* 8 comments, heavily active.
    *   *Analysis:* This is the current focal point of IronClaw's development. The goal is ensuring the AI agent achieves 100% recovery from mid-run errors without terminal failures. The high engagement indicates the complexity of unifying how the host API communicates failures back to the model so it can self-correct. 
*   **Unifying Failure Vocabularies ([PR #6684](https://github.com/nearai/ironclaw/pull/6684))**
    *   *Activity:* Fresh off the press, directly tied to #6284.
    *   *Analysis:* This PR tackles the technical debt of having five overlapping failure enums, collapsing them into a single 35-variant `FailureKind`. It exposes a strong underlying need for predictable agent behavior and standardized error handling across the stack.

## 5. Bugs & Stability
Today's bug reports and fixes reflect a maturing codebase aggressively hunting down edge cases:
1.  **[High] Systemd misconfiguration on Linux:** The `WorkingDirectory` directive in the `ironclaw-reborn.service` unit was being improperly quoted, causing a `bad-setting` load status immediately after onboarding. Fix provided in ([PR #6652](https://github.com/nearai/ironclaw/pull/6652)).
2.  **[Medium] Dead Sandbox Backend:** The `DockerProcessSandboxBackend` was identified as dead, superseded code that poses potential stability/security bloat. Its deliberate removal is tracked in ([Issue #6686](https://github.com/nearai/ironclaw/issues/6686)).
3.  **[Medium] Mutation Testing Harness Bug:** The mutation audit harness was failing to produce output due to a dispatch bug, blocking safety tests. Identified and fixed in ([PR #6681](https://github.com/nearai/ironclaw/pull/6681)).
4.  **[Low] Ratchet Scanner Gaps:** The production struct ratchet scanner was missing multi-line `cfg_attr` and `impl` headers. Hardened with `syn` parsing in ([PR #6679](https://github.com/nearai/ironclaw/pull/6679)).

## 6. Feature Requests & Roadmap Signals
*   **Signed Intents & Ledger Revival:** ([PR #6672](https://github.com/nearai/ironclaw/pull/6672)) introduces "Phase B" of the Ledger revival plan. This brings cryptographic attestation for agent-crafted transactions and per-agent key lifecycles. This signals a major upcoming feature for verifiable, autonomous financial/crypto operations by the agent.
*   **Tool Resolver Scoping:** The movement of extension host capabilities to a scope-free `ToolResolver` indicates that highly granular, per-hire, per-user tool access is on the immediate roadmap.
*   **Failure Taxonomy Tracking:** The publication of the "Daily ironclaw failure taxonomy" ([Issue #6682](https://github.com/nearai/ironclaw/issues/6682)) shows a commitment to continuous benchmarking (via `clawbench`), prioritizing agents that self-verify partial completions.

## 7. User Feedback Summary
Developer and user feedback currently revolves heavily around Linux deployment stability and log clarity. Users running the Reborn service locally on Linux encountered immediate friction with systemd startup states (`bad-setting`). Furthermore, the community/contributors have expressed that broad debug logging (`IRONCLAW_REBORN_LOG=debug`) was practically unusable due to Wasmtime/Cranelift floods, highlighting a need for better developer ergonomics when debugging agent sandboxes. Overall sentiment is highly technical and focused on robustness.

## 8. Backlog Watch
*   **Dependency Debt:** The project has a massive dependency backlog managed by Dependabot. Today alone, 5 separate PRs are open for dependency bumps across Rust crates (`tokio`, `serde`, `wasmtime`) and GitHub Actions. Notably, ([PR #6640](https://github.com/nearai/ironclaw/pull/6640)) is an **XL-sized PR bumping 31 packages** in a single sweep. Maintainers need to review and batch-merge these to prevent supply chain drift.
*   **Open Release PR:** ([PR #5598](https://github.com/nearai/ironclaw/pull/5598)) has been awaiting merge since July 3rd. Because it includes **API breaking changes** (`ironclaw_common`, `ironclaw_skills`), it risks blocking downstream consumers and should be prioritized for final review or closing.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-27

## 1. Today's Overview
LobsterAI is currently experiencing a moderate but highly structured development phase, heavily focused on stabilizing its "OpenClaw" gateway engine, refining multi-agent task execution, and improving internationalization. While there are no new releases today, the project exhibits a robust bug-fixing and feature-refinement pipeline, with 8 PRs updated and active maintenance on critical system stability. However, a significant portion of recently updated PRs and issues have been marked as `[stale]`, indicating a possible backlog in code review or a recent shift in maintainer focus. Overall project health remains solid, with active iterations targeting enterprise-level reliability and user experience.

## 2. Releases
**None**
*No new versions were released today. The project remains on its latest stable build while the team integrates gateway optimizations, multi-agent model switching, and scheduled task enhancements from the open PR queue.*

## 3. Project Progress
The only code closure today came from UI/UX improvements, specifically PR [#1325](https://github.com/netease-youdao/LobsterAI/pull/1325) which added hover tooltips for the "New Conversation" button across collapsed sidebars and agent views. Active development is concentrated on a batch of functional PRs that are currently open and under review. These include major architectural updates like dynamic model switching for the OpenClaw gateway ([PR #1247](https://github.com/netease-youdao/LobsterAI/pull/1247)), an overhaul to the gateway's dependency bundling ([PR #1259](https://github.com/netease-youdao/LobsterAI/pull/1259)), and several UX enhancements for scheduled tasks, such as natural language parsing for cron jobs ([PR #1256](https://github.com/netease-youdao/LobsterAI/pull/1256)) and unsaved changes detection ([PR #1252](https://github.com/netease-youdao/LobsterAI/pull/1252), [PR #1258](https://github.com/netease-youdao/LobsterAI/pull/1258)). 

## 4. Community Hot Topics
The most actively updated community items focus on multi-model support and plugin stability:
*   **Gateway Stability & Model Configuration ([Issue #1243](https://github.com/netease-youdao/LobsterAI/issues/1243)):** Users report frequent OpenClaw gateway crashes caused by the `qwen-portal-auth` plugin continuously rewriting configs. This underscores the community's demand for a stable multi-LLM routing experience without system interruptions.
*   **Context & Workspace Management ([Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385)):** A highly relevant feature request asking for the ability to add entire folders and @mention files in the chat dialog, reflecting advanced agentic workflows users expect from modern AI assistants.
*   **Cross-Platform Expansion ([Issue #273](https://github.com/netease-youdao/LobsterAI/issues/273)):** A persistent request for a native Ubuntu Linux version, which was closed today. This indicates either a resolution to the platform limitation or a redirection in OS support strategy.

## 5. Bugs & Stability
Ranked by severity, the following bugs and system regressions were highlighted in today's digest:
1.  **[Critical] Gateway Crash Loop ([Issue #1243](https://github.com/netease-youdao/LobsterAI/issues/1243)):** The `qwen-portal-auth` plugin triggers an OpenClaw gateway restart every 5-20 minutes. This severely impacts usability on Windows environments. 
    *   *Mitigation Status:* Directly addressed by open [PR #1247](https://github.com/netease-youdao/LobsterAI/pull/1247) (model switch recovery) and [PR #1259](https://github.com/netease-youdao/LobsterAI/pull/1259) (dependency handling), though an explicit fix for the plugin's write loop is still pending verification.
2.  **[High] DiffView Rendering Failure ([PR #1249](https://github.com/netease-youdao/LobsterAI/pull/1249)):** In Cowork sessions, the visual DiffView fails to render when the AI uses the Edit tool, specifically missing tool names from Claude SDK (`str_replace_editor`) and OpenClaw (`file_editor`). 
    *   *Mitigation Status:* A fix is currently open and waiting for merge in [PR #1249](https://github.com/netease-youdao/LobsterAI/pull/1249).

## 6. Feature Requests & Roadmap Signals
Analysis of the current open PRs reveals strong roadmap signals for the next LobsterAI release, focused on **Proactive Task Management** and **Multi-Agent Orchestration**:
*   **Natural Language Scheduled Tasks:** [PR #1256](https://github.com/netease-youdao/LobsterAI/pull/1256) introduces a `scheduleParser` service powered by an LLM to convert natural language into cron expressions, drastically lowering the barrier for entry to automated agent tasks.
*   **Enhanced Data Loss Prevention:** Duplicate efforts in [PR #1252](https://github.com/netease-youdao/LobsterAI/pull/1252) and [PR #1258](https://github.com/netease-youdao/LobsterAI/pull/1258) to implement "unsaved changes" warnings on the scheduled task form indicate a strong push toward enterprise-grade UX safety.
*   **Folder Context Support:** [Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385) requests folder uploads and file mentions (@). This is a high-probability candidate for the next feature sprint, given its necessity for complex coding agents.

## 7. User Feedback Summary
**Pain Points:** Users are experiencing friction with system stability, particularly when configuring non-default models. The gateway's auto-restart behavior ([Issue #1243](https://github.com/netease-youdao/LobsterAI/issues/1243)) is a primary source of dissatisfaction. Additionally, the lack of a Linux version ([Issue #273](https://github.com/netease-youdao/LobsterAI/issues/273)) remains a barrier for developer-centric adoption. 
**Use Cases:** Users are actively treating LobsterAI as a heavy-duty automation agent rather than a simple chatbot. The demand for scheduled tasks, multi-agent cowork sessions, complex file editing (DiffView), and whole-folder code context indicates that users are running long, complex development workflows.
**Satisfaction:** Despite gateway instability, the community response to specific features (like the UI tooltip fix in [PR #1325](https://github.com/netease-youdao/LobsterAI/pull/1325) and proactive task scheduling) is positive. 

## 8. Backlog Watch
A large cluster of functional PRs and issues updated today have been assigned the `[stale]` label, suggesting a bottleneck in the review and merge process that requires immediate maintainer attention:
*   **[PR #1247](https://github.com/netease-youdao/LobsterAI/pull/1247):** Critical OpenClaw model switching and session migration logic.
*   **[PR #1249](https://github.com/netease-youdao/LobsterAI/pull/1249):** Important UI fix for rendering diffs in multi-agent workflows.
*   **[PR #1257](https://github.com/netease-youdao/LobsterAI/pull/1257):** Straightforward but necessary i18n fix for missing `edit` and `delete` translation keys.
*   **[Issue #1243](https://github.com/netease-youdao/LobsterAI/issues/1243):** Severe gateway crash bug that has been open since April and is still lacking a definitive merged resolution.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the structured project digest for Moltis based on the provided GitHub data.

### 1. Today's Overview
As of 2026-07-27, Moltis is experiencing a highly active development phase with a strong focus on expanding interoperability and enterprise readiness. The project saw no official releases today, but the pipeline is heavily loaded with 8 new or recently updated open pull requests and zero new issue reports. This pull-request-heavy, issue-free ratio indicates that the core maintainers are currently in a "heads-down" feature-building and hardening phase. Activity is overwhelmingly driven by key contributors like `penso` and `shixi-li`, who are pushing forward critical integrations, security patches, and UI enhancements. 

### 2. Releases
*None.* 
There were no new releases or tags published in the last 24 hours.

### 3. Project Progress
While no PRs were merged or closed today, significant architectural and functional advancements are currently sitting in the review pipeline. Key areas of progress include:
*   **Agent Interoperability (ACP):** Transitioning Moltis from strictly an ACP *client* to an ACP *agent* over stdio ([PR #1169](https://github.com/moltis-org/moltis/pull/1169)), allowing external harnesses like Zed to use it.
*   **Messaging Channel Expansions:** Adding NIP-29 group chat support to integrate with Block's open-source Buzz workspace ([PR #1168](https://github.com/moltis-org/moltis/pull/1168)).
*   **Security Hardening:** Patching a major remote code execution (RCE) vector by restricting `/sh` access to authorized operators only ([PR #1170](https://github.com/moltis-org/moltis/pull/1170)).
*   **UI/UX & Reliability:** Fixing silent PWA push notification bugs ([PR #1173](https://github.com/moltis-org/moltis/pull/1173)) and moving ACP selections into the chat model picker for better UI cohesion ([PR #1171](https://github.com/moltis-org/moltis/pull/1171)).

### 4. Community Hot Topics
*Activity is highly concentrated in Pull Requests rather than Issues today, reflecting a builder-centric cycle.*
*   **Cross-Platform Agent Deployment:** [PR #1169](https://github.com/moltis-org/moltis/pull/1169) highlights a strong desire to make Moltis pluggable into various developer environments (Zed, bespoke runners). This signals that the community wants Moltis to serve as a universal backend agent, not just a standalone app.
*   **Self-Hosted Enterprise Collaboration:** [PR #1168](https://github.com/moltis-org/moltis/pull/1168) (Buzz integration via NIP-29) and [PR #1166](https://github.com/moltis-org/moltis/pull/1166) (Slack enhancements) show a heavy underlying need for Moltis to function seamlessly as an equal participant in team chat environments, complete with reliable acknowledgment signaling.

### 5. Bugs & Stability
*Ranked by severity based on today's PR pipeline:*
1.  **Critical Security Flaw (Arbitrary Command Execution):** [PR #1170](https://github.com/moltis-org/moltis/pull/1170) fixes a severe bug where any user in a Discord guild or group chat could execute host commands via `/sh` if they passed the base group policy. A fix is currently awaiting merge.
2.  **High (Silent UI Failure):** [PR #1173](https://github.com/moltis-org/moltis/pull/1173) addresses a PWA bug where a second message in a chat silently replaced the first notification without sound or alert. This severely impacted the reliability of the assistant's web presence. Fix is pending.
3.  **Low (UI Clutter):** [PR #1172](https://github.com/moltis-org/moltis/pull/1172) fixes a minor UI annoyance where archived cron sessions were cluttering the Cron tab by default. Fix includes a Playwright regression test and is pending.

### 6. Feature Requests & Roadmap Signals
*   **Alternative Local Storage Backends:** [PR #1158](https://github.com/moltis-org/moltis/pull/1158) introduces `zvec` and `redb` as an experimental, local vector database memory backend (paired with local `llama-cpp` embeddings). This signals a roadmap shift toward providing better privacy-focused, fully offline memory solutions.
*   **Improved Feedback Mechanisms:** [PR #1166](https://github.com/moltis-org/moltis/pull/1166) brings Block Kit rendering and per-message acknowledgment phases to Slack. Users increasingly rely on visual cues (like emojis) to understand the agent's processing state.
*   *Prediction for Next Version:* The upcoming release will likely heavily market Moltis as a dual-purpose tool (Agent + Client) with a focus on group-chat security and reliability.

### 7. User Feedback Summary
*   **Pain Point - Native Tooling in Group Chats:** Users deploying Moltis in shared spaces (Discord, Slack) expressed friction regarding state communication (e.g., "is the agent thinking?") and operational safety. This is evidenced by heavy reworks of the Slack and `/sh` modules.
*   **Use Case - Local & Private AI:** The submission of the `zvec` backend PR reinforces that a core segment of Moltis users prefers completely local, hardware-isolated agent setups (using local Cargo features and local llama-cpp servers) rather than relying on cloud vector databases.
*   **Satisfaction:** Generally high. The fact that issues remain at zero and contributors are actively polishing edge cases (like notification behaviors and archived UI states) suggests a mature, stable core product.

### 8. Backlog Watch
*   [PR #1158](https://github.com/moltis-org/moltis/pull/1158) (`feat(memory): add zvec vector database memory backend`): Created on 2026-07-17, this PR is the oldest in the current batch (10 days old). As a fundamental architectural change to the memory backend, it requires a thorough review from core maintainers to ensure it aligns with long-term database abstraction goals.
*   [PR #1166](https://github.com/moltis-org/moltis/pull/1166) (`feat(slack)`): Created on the 24th and already building on previously merged code. It carries multiple complex moving parts (queueing, cancellation, delivery failure handling) and is a prime candidate for prioritized review to prevent merge conflicts.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-27

## 1. Today's Overview
The CoPaw (QwenPaw) project is currently experiencing a high-velocity, bug-report-heavy testing phase, likely driven by the recent rollout of v2.0.1. Over the past 24 hours, the community generated 13 new or updated issues and 5 active pull requests, with zero resolutions or merges occurring today. The majority of traffic consists of critical bug reports related to the Model Context Protocol (MCP), desktop rendering performance, and tool execution blocking. While community engagement is exceptionally high, the complete lack of closed issues or merged PRs today suggests maintainers are currently in a triage or backlog-sorting phase rather than active deployment. 

## 2. Releases
*No new releases were recorded today. The project's latest active version across issue reports is **v2.0.1**.*

## 3. Project Progress
No pull requests were merged or closed today. However, there are several major feature PRs currently under active review and development:
*   **Unified Browser Architecture ([PR #6276](https://github.com/agentscope-ai/QwenPaw/pull/6276)):** Advancing a split control-plane/execution-plane architecture for LLM-authored browser automation.
*   **Visual Context Compression ([PR #6456](https://github.com/agentscope-ai/QwenPaw/pull/6456)):** Introduces "PawFocus" to selectively compress long agent histories into visual context, managing token profitability.
*   **QwenPaw Creator App ([PR #6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)):** A new `app`-type plugin introducing a script-to-video creation workflow inside the assistant.

## 4. Community Hot Topics
The community was highly vocal about system integrations and execution behaviors:
*   **[Issue #6470](https://github.com/agentscope-ai/QwenPaw/issues/6470): MCP Driver Transport Bug** (4 comments). A critical misconfiguration preventing MCP servers using `streamable_http` from connecting. This generated duplicate reports ([Issue #6469](https://github.com/agentscope-ai/QwenPaw/issues/6469), [#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468)) indicating widespread impact.
*   **[Issue #6239](https://github.com/agentscope-ai/QwenPaw/issues/6239): Windows PATH Concatenation Bug** (3 comments). Users report that concatenating User and Machine PATH variables drops the semicolon separator, breaking `npm` global dependencies in child processes. 
*   **[Issue #6473](https://github.com/agentscope-ai/QwenPaw/issues/6473): Desktop App Center Plugin Failure** (2 comments). The official "Agent Kanban" plugin fails to install on Desktop v2.0.1, highlighting friction in the plugin ecosystem.

## 5. Bugs & Stability
Today's bug reports reveal significant regressions in v2.0.1, ranked by severity:
1.  **Critical - MCP Transport Hardcoding ([#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)):** Driver bypasses config and hardcodes `sse_client`, breaking all Streamable HTTP MCP servers.
2.  **Critical - Multimodal Payload Drop ([#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474)):** `view_video` returns success, but the video DataBlock is silently dropped before reaching the LLM. The model never processes the video.
3.  **High - Agent Process Blocking ([#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)):** Running `nohup` or detached background processes (`&`) via shell causes the agent to hang indefinitely, breaking automation workflows.
4.  **High - CPU Overhead on Web UI ([#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)):** Single-tab high CPU usage on Edge+Wayland when rendering large ComfyUI result sets via WebSocket.
5.  **Medium - Matrix E2E Encryption Failure ([#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476)):** End-to-end encryption for Matrix messaging fails due to missing `olm` C-dependencies.
6.  **Medium - Cron Misfires ([#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471)):** APScheduler AsyncIOScheduler fails to trigger tasks after the event loop is idle for extended periods.

## 6. Feature Requests & Roadmap Signals
Users are actively requesting features that push CoPaw closer to a fully asynchronous, multi-tasking assistant:
*   **Asynchronous Background Tasking ([Issue #6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)):** A proposal for a `notice_after_complete` tool. This would allow agents to register long-running shell commands, immediately reply to the user ("Task started..."), and ping the user upon completion, enabling concurrent chat.
*   **Localization Expansion ([Issue #6478](https://github.com/agentscope-ai/QwenPaw/issues/6478)):** A user has already completed local frontend/backend translations for Traditional Chinese and is seeking contribution guidelines.

*Prediction:* The asynchronous execution feature ([#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)) directly aligns with the underlying cause of the blocking bug ([#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)). It is highly probable this will be fast-tracked for the next minor version.

## 7. User Feedback Summary
Real-world usage indicates users are attempting to use CoPaw as a heavy-duty automation hub (integrating ComfyUI, Matrix, Jin10 MCP, and background shell scripts). Satisfaction with the breadth of features is high, but stability is currently a major pain point. The v2.0.1 desktop release has introduced frustrating regressions—such as broken line numbers in JSON programming mode ([#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472)) and missing module errors in the App Center ([#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473)). Users are sophisticated, frequently providing root-cause analysis and system-level debugging reports in their issues.

## 8. Backlog Watch
Maintainers need to address the following lingering items urgently:
*   **Long-standing Windows PATH bug ([Issue #6239](https://github.com/agentscope-ai/QwenPaw/issues/6239)):** Open since July 18th, this basic environment variable bug severely degrades the Windows desktop experience by silently breaking tooling dependencies. 
*   **Documentation Misalignment ([PR #6477](https://github.com/agentscope-ai/QwenPaw/pull/6477)):** A first-time contributor has fixed a structural formatting issue where Chinese sub-headings failed to render as actual headings. Ready to be merged to improve documentation health.
*   **Model Baseline Drift ([PR #6479](https://github.com/agentscope-ai/QwenPaw/pull/6479)):** A first-time contributor PR to update hardcoded MiniMax model lists, which have drifted from the official platform API. Needs maintainer review to prevent silent multimodal probing failures.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-07-27.

### 1. Today's Overview
ZeroClaw is currently experiencing a massive surge in community engagement, driven largely by a rigorous security audit of its host and channel implementations. Over the past 24 hours, the project saw 44 issues updated (with 41 currently active) and an impressive 50 pull requests updated, indicating extremely high development velocity. The maintainer team is actively triaging a flurry of S1 (critical) security and stability bugs, particularly around channel isolation, sandbox boundaries, and plugin timeouts. While no new releases were cut today, the team is aggressively laying the groundwork for the upcoming v0.8.4 and v0.9.0 milestones.

### 2. Releases
*No new releases were cut today.* 
However, PR [#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) indicates that the **v0.8.4 release** is imminent, focusing on crates.io publishing readiness, changelog finalization, and repository cleanup.

### 3. Project Progress
Development today was heavily focused on hardening the agent's runtime and plugin architecture. 
*   **Security & Sandboxing:** Significant progress was made in sandbox isolation. PR [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) fixed an issue where Docker sandboxes nested inside Docker runtimes, and PR [#9401](https://github.com/zeroclaw-labs/zeroclaw/pull/9401) preserved shell `cwd` across Seatbelt, Firejail, and Bubblewrap wrappers.
*   **Plugin Architecture:** PR [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) introduced a wall-clock deadline for WASM exports, directly addressing unbounded plugin hangs. 
*   **MCP & Tooling:** PR [#9418](https://github.com/zeroclaw-labs/zeroclaw/pull/9418) fixed a critical bug where stdio JSON-RPC responses were consumed by the wrong concurrent MCP calls, and PR [#9405](https://github.com/zeroclaw-labs/zeroclaw/pull/9405) added custom CA trust support for MCP servers.
*   **Compliance & CI:** Advisory tests for macOS and Windows were added to the CI pipeline (PR [#9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398)) to catch OS-specific regressions earlier.

### 4. Community Hot Topics
*   **WhatsApp Web Security Flaw ([#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) & [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)):** A highly active topic (9+ comments). Users discovered that an empty `allowed_groups` list in business mode defaults to permitting *all* group chats, causing the agent to reply to unauthorized messages. This sparked an accepted RFC to treat empty lists as "permit-none."
*   **Windows CI Blind Spots ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)):** A 14-comment thread highlighted 74 failing tests on Windows due to Unix-only semantics and console encoding (code page 936). This shows strong demand from Windows-based contributors to achieve platform parity.
*   **Plugin & Channel Architecture RFC ([#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)):** A highly discussed RFC (4 comments) proposing a shift from compile-time Cargo features to runtime-installable WASM plugins. Users are eager for this to drastically shrink the default binary size.

### 5. Bugs & Stability
Today was dominated by the uncovering and patching of severe (S1/S2) bugs:
*   **S1 - API Key Leakage ([#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)):** Gemini API keys passed in URLs survive the `sanitize_api_error` function and are leaked into the chat. *Fix Status:* Under active investigation.
*   **S1 - Cross-Channel Approval Bypass ([#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387)):** Interactive approval responses are accepted from *any* chat member on Telegram, Slack, Lark, and Matrix, entirely bypassing sender authorization.
*   **S2 - Runtime Crashes ([#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)):** The background skill-review fork panics with an out-of-range slice index, causing a daemon `SIGSEGV` (exit code 139) after tool-heavy turns.
*   **S2 - Flaky CI Poisoning ([#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357)):** `cargo test` fails 95% of the time on master because a single flaky assertion poisons a global mutex, taking down all subsequent tests. 

### 6. Feature Requests & Roadmap Signals
*   **Goal-Oriented Autonomous Mode ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)):** Users are requesting a first-class "Goal Mode" where the agent pursues a single objective until completion, failure, or budget exhaustion. This signals a shift towards more autonomous, long-running agent tasks.
*   **OpenAI API Compatibility ([#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)):** A massive PR adding an OpenAI Chat Completions endpoint to the gateway. This will allow ZeroClaw to be plugged directly into IDE extensions (Continue.dev, Aider) and orchestrators (LangChain).
*   **v0.9.0 Horizon:** The [v0.9.0 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) shows the roadmap is heavily focused on multi-agent boundaries, gateway splits, and breaking security changes.

### 7. User Feedback Summary
Users are heavily stress-testing ZeroClaw in multi-channel production environments, leading to the discovery of numerous edge cases around localization and security. There is notable frustration regarding localization drift, where web dashboards and command replies remain hard-coded in English despite non-English locales ([#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548), [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)). Furthermore, users deploying the agent to chat platforms (WhatsApp, LINE, Reddit) have found the authorization and allowlist logic dangerously fragile, indicating that the core channel security framework needs maturation before untrusted deployment.

### 8. Backlog Watch
*   **[#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) (Created Today):** The unauthenticated `POST /api/pair` endpoint keys its lockout on an attacker-supplied header, making it trivially bypassable. Marked `help wanted`, this needs immediate maintainer assignment.
*   **[#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) (Created Today):** The documented "Emergency Stop" (`estop`) feature is currently just a CLI state file that the runtime completely ignores, giving users a false sense of safety. 
*   **[#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391):** Command audit logging defaults to "enabled" but silently writes nothing, leaving operators without required observability. (Fix is currently pending in PR [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410)).

</details>