# OpenClaw Ecosystem Digest 2026-04-17

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-16 22:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyclaw)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-04-17

## 1. Today's Overview
OpenClaw is experiencing exceptionally high activity, with 500 issues and 500 pull requests updated in the last 24 hours alone. While the ratio of open issues (413 open vs. 87 closed) and PRs (324 open vs. 176 merged/closed) indicates a rapidly growing and highly engaged user base, it also suggests the project is accumulating technical debt and regressions faster than the core team can currently triage. A fresh stable release (`v2026.4.15`) and a corresponding beta were rolled out recently, introducing highly anticipated features like Anthropic Opus 4.7 support and Google Gemini TTS. However, the community is heavily focused on a pervasive onboarding crash, provider routing regressions, and the stability of the newly proposed "Plan Mode" system.

## 2. Releases

### v2026.4.15 & v2026.4.15-beta.2
The latest stable release focuses on integrating next-generation models and expanding multi-modal capabilities.
*   **Anthropic Integration:** Added default selections, CLI defaults, and image understanding bundling for the new **Claude Opus 4.7**. 
*   **Google TTS Support:** Added Gemini text-to-speech capabilities to the bundled `google` plugin, including provider registration, voice selection, and WAV reply output.

## 3. Project Progress
Development velocity remains massive. 176 PRs were merged or closed today, showing active merging of community and core contributions.
*   **Agent Planning & Orchestration:** A massive set of PRs by `100yenadmin` ([PR #67538](https://github.com/openclaw/openclaw/pull/67538), [PR #67542](https://github.com/openclaw/openclaw/pull/67542), [PR #67514](https://github.com/openclaw/openclaw/pull/67514)) introduces a new "Plan Mode" runtime, escalating retries, cross-session plan stores, and task system parity (cancelled status, merge mode).
*   **Model Support Enhancements:** Adaptive thinking support for Claude Opus 4.7 and Sonnet 4.7 was added via [PR #67814](https://github.com/openclaw/openclaw/pull/67814), and GPT-5.4 prompt discipline/personality bridging was introduced in [PR #67512](https://github.com/openclaw/openclaw/pull/67512).
*   **Memory Architecture:** [PR #67836](https://github.com/openclaw/openclaw/pull/67836) lays the foundation for "Memory v2" using a SQLite-backed sidecar with ingest and rerank pipelines (defaulted to off).
*   **UX/UI Overhaul:** [PR #67819](https://github.com/openclaw/openclaw/pull/67819) introduces Quick Settings, a guided automation wizard, and progressive disclosure for slash commands.

## 4. Community Hot Topics
1.  **Onboarding Crash ([Issue #67291](https://github.com/openclaw/openclaw/issues/67291) & [Issue #67353](https://github.com/openclaw/openclaw/issues/67353)):** A critical regression causing `onboard` to crash with `Cannot read properties of undefined (reading 'trim')` has garnered significant attention. A targeted fix is proposed in [PR #67826](https://github.com/openclaw/openclaw/pull/67826), and a broader fix preserving auth tokens during re-onboarding is in [PR #67821](https://github.com/openclaw/openclaw/pull/67821).
2.  **Native Desktop Apps ([Issue #75](https://github.com/openclaw/openclaw/issues/75)):** With 68 👍 and 82 comments, the demand for Linux and Windows native apps (currently only macOS and mobile are supported) remains a massive community priority.
3.  **Internationalization ([Issue #3460](https://github.com/openclaw/openclaw/issues/3460)):** This highly requested feature (7 👍, 120 comments) was officially declined by maintainers due to a lack of bandwidth, sparking ongoing discussion about community-led translation efforts.
4.  **Context Engine Usability ([Issue #66601](https://github.com/openclaw/openclaw/issues/66601)):** v2026.4.14 introduced a breaking change causing `lossless-claw` context engine errors, making the system unusable for some and requiring immediate attention.

## 5. Bugs & Stability
The transition to newer models has introduced notable regressions across provider routing and UI stability:
*   **Critical - OpenRouter/Auth Failures:** Upgrading breaks OpenRouter and custom providers with 401/403 errors due to missing auth headers or Cloudflare bot mitigation challenges. ([Issue #66633](https://github.com/openclaw/openclaw/issues/66633), [Issue #51056](https://github.com/openclaw/openclaw/issues/51056), [Issue #55816](https://github.com/openclaw/openclaw/issues/55816)).
*   **High - Windows UI Regression:** The chat UI on Windows is severely broken, swallowing typed text and hiding streamed replies ([Issue #67035](https://github.com/openclaw/openclaw/issues/67035)).
*   **High - Tool Execution Failure:** GPT-5.3/5.4 Codex models frequently acknowledge requests but fail to execute tools. [PR #66594](https://github.com/openclaw/openclaw/pull/66594) addresses the gateway chat run registration to fix the "pondering" state.
*   **Medium - Context Caching & Memory:** Context caching is failing in Telegram DMs ([Issue #51873](https://github.com/openclaw/openclaw/issues/51873)), and QMD memory search returns empty after updates ([Issue #53955](https://github.com/openclaw/openclaw/issues/53955)).

## 6. Feature Requests & Roadmap Signals
*   **Cognitive Memory Layer ([Issue #52532](https://github.com/openclaw/openclaw/issues/52532)):** Users want persistent, semantic memory with Ebbinghaus decay (forgetting curves). This aligns closely with the "Memory v2" foundation being merged today ([PR #67836](https://github.com/openclaw/openclaw/pull/67836)).
*   **Agent-to-Agent Message Bus ([Issue #52290](https://github.com/openclaw/openclaw/issues/52290)):** A proposal for an internal message bus plugin to allow OpenClaw's 7 internal AI agents to communicate more effectively.
*   **UI / Plan Visualization ([PR #67721](https://github.com/openclaw/openclaw/pull/67721)):** With the new Plan Mode runtime incoming, the addition of a permission switcher and clickable plan cards signals a move toward giving users more granular control over autonomous agentic workflows.
*   **Gateway Restart Notifications ([Issue #51130](https://github.com/openclaw/openclaw/issues/51130)):** Users want notifications for completed work that finished right before a gateway restart. This aligns with today's [PR #67830](https://github.com/openclaw/openclaw/pull/67830), which implements compaction start/completion notices.

## 7. User Feedback Summary
Users are highly enthusiastic about the pace of AI model integrations (Opus 4.7, Gemini TTS) but express significant frustration with regression stability. The transition to GPT-5.4/Codex has been bumpy, with users reporting that the agent "can't get anything correct without making critical errors or overwriting itself" ([Issue #67237](https://github.com/openclaw/openclaw/issues/67237)). There is a clear demand for the core team to pause feature development temporarily to harden existing channels (Telegram, Discord, UI) and fix the onboarding flow, which currently blocks new user adoption.

## 8. Backlog Watch
*   **Dynamic Model Discovery ([Issue #10687](https://github.com/openclaw/openclaw/issues/10687)):** Maintainers need to address this. OpenRouter's fast-moving catalog breaks OpenClaw's static model selection, causing several of the 401/404 bugs seen today.
*   **Missing Native Windows/Linux Apps ([Issue #75](https://github.com/openclaw/openclaw/issues/75)):** A 3-month-old issue with huge community demand (68 👍). While [PR #66898](https://github.com/openclaw/openclaw/pull/66898) attempts a Windows wrapper, core team alignment is needed.
*   **Permissions-Policy blocking STT ([Issue #51085](https://github.com/openclaw/openclaw/issues/51085)):** The mic button silently fails due to default security headers. Needs a quick configuration tweak from the maintainers to resolve a month-old frustration.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem based on the 2026-04-17 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a massive surge in development velocity, driven primarily by the need to integrate next-generation models (e.g., Claude Opus 4.7, GPT-5.x) and complex orchestration capabilities. Projects are rapidly shifting from simple chat interfaces to autonomous, multi-tenant systems featuring localized memory, multi-channel integrations, and complex task planning. However, this breakneck speed is introducing significant technical debt, with pervasive regressions in UI stability, tool execution, and LLM provider routing challenging core teams across the board.

### 2. Activity Comparison
*Health Score Context: 5 = High velocity + High stability/Responsiveness; 3 = Active but accumulating debt; 1 = Stale/Blocked.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Summary |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.4.15` (Stable) | 3/5 | Massive scale, but accumulating regressions faster than triage. |
| **NanoBot** | 13 | 58 | No Release | 5/5 | High merge rate, rapid bug resolution, highly responsive maintainers. |
| **NanoClaw** | 7 | 19 | No Release | 4/5 | Healthy iteration with a strong focus on architectural overhauls. |
| **IronClaw** | 50 | 50 | No Release | 3/5 | Deep in v2 engine bug bashes; active but currently unstable. |
| **CoPaw (QwenPaw)** | 50 | 50 | `v1.1.2-beta.2` | 3/5 | Rapid feature expansion causing UI/memory regressions and user friction. |
| **Moltis** | 7 closed | 19 (12 merged) | `20260416.02` | 5/5 | Excellent PR merge ratio; aggressively fixing provider/tool bugs. |
| **EasyClaw** | 1 | 1 | `v1.7.12` & `v1.7.13` | 4/5 | Stable, low-volume iteration focused on UX and monetization. |
| *PicoClaw, LobsterAI, TinyClaw, ZeptoClaw* | 0 | 0 | N/A | N/A | No activity in the last 24 hours. |

### 3. OpenClaw's Position
**Advantages:** OpenClaw remains the undeniable core reference implementation with the largest community footprint (500+ daily issues/PRs). It sets the pace for bleeding-edge model integrations (e.g., native Claude Opus 4.7 adaptive thinking) and is pioneering advanced UX concepts like "Plan Mode" and "Memory v2" with SQLite sidecars.
**Vulnerabilities vs. Peers:** Unlike Moltis or NanoBot, which are actively squashing provider and tool-loop bugs before release, OpenClaw is shipping features faster than it can stabilize them. Critical onboarding crashes, OpenRouter auth failures, and broken Windows UIs indicate a "move fast and break things" approach that is currently frustrating its user base.
**Technical Approach:** OpenClaw relies on a monolithic core with heavy plugin extensions, whereas projects like NanoClaw and Moltis are experimenting with highly modularized "skill" architectures and deep local code-indexing environments.

### 4. Shared Technical Focus Areas
Several requirements are universally emerging as necessary pillars for modern AI agents:
*   **Advanced Memory & Context Management:** 
    *   *Projects:* OpenClaw, NanoBot, CoPaw, Moltis.
    *   *Needs:* Ebbinghaus decay/staleness detection (NanoBot, OpenClaw), fixing tool-result compaction destroying context windows (Moltis, CoPaw), and semantic memory retrieval.
*   **Multi-Channel & Comms Integration:**
    *   *Projects:* NanoBot, NanoClaw, IronClaw, CoPaw.
    *   *Needs:* Unified APIs for Discord, MS Teams, WhatsApp, and notably, native Matrix support with E2EE (NanoClaw, IronClaw).
*   **LLM Provider & Schema Fragility:**
    *   *Projects:* Moltis, OpenClaw, CoPaw.
    *   *Needs:* Standardizing JSON schema drafts to stop strict providers (Gemini, OpenAI) from breaking tool calls; handling local models outputting XML instead of JSON.
*   **Agent Observability & Auditing:**
    *   *Projects:* NanoBot, IronClaw.
    *   *Needs:* Users are frustrated by "black box" tool loops. There is a shared demand for append-only JSONL transcripts, status indicators, and state self-recovery mechanisms.

### 5. Differentiation Analysis
*   **Enterprise & Compliance (Moltis, IronClaw):** Focusing heavily on enterprise readiness. Moltis is building local code indexing and OIDC for Matrix, while IronClaw is implementing database-backed multi-tenancy and strict secret-leak scanning.
*   **Channel-First & Orchestration (NanoBot, CoPaw):** Expanding platform ubiquity. CoPaw is rapidly adding WhatsApp, Signal, and SIP support alongside natural-language "Agent Teams." NanoBot focuses heavily on Teams, Cron playbooks, and cross-session persistence.
*   **Local/Privacy Compute (NanoClaw, Moltis):** Emphasizing local compute containment. NanoClaw is introducing "Atomic Chat" for local models and Docker sandbox hardening, while Moltis adds Nix flake support and Docker-in-Docker workspace isolation.
*   **Desktop / Consumer Focus (EasyClaw, OpenClaw):** Focused on end-user desktop friction. EasyClaw is addressing macOS Gatekeeper warnings and introducing credit/payment systems, whereas OpenClaw is trying to solve native OS wrapper demands for Windows/Linux.

### 6. Community Momentum & Maturity
*   **Hyper-Growth / High Debt (OpenClaw, CoPaw):** Scaling rapidly but showing cracks in foundation stability. CoPaw is dealing with fragmented directory structures after rebranding, while OpenClaw has accumulated months-old regressions.
*   **Rapid Iterators / Highly Responsive (NanoBot, Moltis):** Demonstrating the healthiest maturity curves. Both projects show a high PR merge rate and, crucially, same-day turnarounds for critical tool-loop and provider bugs.
*   **Architectural Evolvers (IronClaw, NanoClaw):** Deep in the weeds of major "v2" engine rewrites. Activity is high, but dominated by internal bug bashes and fundamental structural PRs rather than public-facing releases.
*   **Stabilizers (EasyClaw):** Low-volume, mature maintenance focused on patching consumer UX and onboarding rather than chasing LLM frontier models.

### 7. Trend Signals
1.  **The "Autonomous Context" Crisis:** As agents are given longer leashes (cron jobs, Plan Mode, background routines), they are failing to maintain context. The biggest blocker to autonomous agents right now is not logic, but context window destruction during tool calls (Moltis, CoPaw) and memory consolidation overflows (NanoBot).
2.  **Multi-Tenant and Fleet Management:** The architecture of "single assistants" is maturing into "fleet management." Projects like IronClaw (workspace entities) and NanoClaw (Mission Control) signal a shift toward centralized management of multiple agents collaborating across different workspaces.
3.  **MCP (Model Context Protocol) Growing Pains:** The ecosystem is aggressively adopting MCP, but it is causing massive friction due to mismatched JSON schema validations across different LLM providers. Tool standardization is outpacing provider API consistency. 
4.  **Monetization Infrastructure:** The introduction of a "credits system" in EasyClaw signals that open-source projects are beginning to build the backend infrastructure necessary to gate premium API usage or host SaaS-style gateways.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-17

## 1. Today's Overview
NanoBot demonstrates exceptionally high development velocity and active community engagement today, with 58 pull requests updated (33 merged/closed) and 13 issues processed within the last 24 hours. The project is in a phase of aggressive feature expansion, particularly around multi-platform channel support (Microsoft Teams, Discord, WebSocket) and architectural improvements for AI agent orchest (subagent lifecycle, streaming API, and memory management). The developer community is highly active in both contributing code and reporting edge-case bugs, indicating a healthy, growing open-source ecosystem. Notably, no new official releases were published today, suggesting current work is likely building toward a significant future milestone.

## 2. Releases
No new releases were published today (April 16-17, 2026). The most recent discussion pertains to the `v0.1.5.post1` patch, indicating the project is currently iterating on its `0.1.5` release line.

## 3. Project Progress
Today saw 33 PRs merged or closed, representing major advancements in platform capabilities, performance, and developer tooling:
*   **New Channel Support:** The Microsoft Teams channel ([PR #3197](https://github.com/HKUDS/nanobot/pull/3197)) has been officially reintroduced to main, featuring full messaging capabilities and adaptive card support. Discord filtering was also added ([PR #3171](https://github.com/HKUDS/nanobot/pull/3171)).
*   **API & Streaming:** SSE streaming for `/v1/chat/completions` was rapidly implemented and merged ([PR #3222](https://github.com/HKUDS/nanobot/pull/3222)), resolving a major user request.
*   **Agent Orchestration:** Significant merges for agent control, including runtime self-inspection via "MyTool" ([PR #3177](https://github.com/HKUDS/nanobot/pull/3177)), dynamic LLM providers ([PR #3175](https://github.com/HKUDS/nanobot/pull/3175)), and session persistence for cron jobs ([PR #3219](https://github.com/HKUDS/nanobot/pull/3219)).
*   **Performance:** Tool definition caching was merged ([PR #3210](https://github.com/HKUDS/nanobot/pull/3210)) to improve prompt cache hit rates and reduce redundant computation during LLM iterations.

## 4. Community Hot Topics
The most actively discussed issues and PRs center around configuration flexibility, tool orchestration, and observability:
*   **Observability Black Box ([Issue #3107](https://github.com/HKUDS/nanobot/issues/3107)):** A highly requested thread where users are asking for better status indicators, LLM request timeouts, fallback configurations, and the ability to view session history to avoid losing conversation details. This highlights a core need for better agent state transparency.
*   **Cron Orchestration ([PR #2397](https://github.com/HKUDS/nanobot/pull/2397)):** A major structural proposal to enhance the `cron` tool with name parameters and playbook support. This reflects the community's growing demand to use NanoBot for complex, multi-step automated workflows.
*   **Memory Upgrade Bug ([Issue #3190](https://github.com/HKUDS/nanobot/issues/3190)):** Active discussion on a breaking error when upgrading versions, pointing to underlying friction in memory consolidation logic.

## 5. Bugs & Stability
Several stability issues were reported today, particularly around third-party LLM provider compatibility, but the maintainers and community are responding rapidly with fixes:
*   **Severe - Infinite Email Loop ([Issue #3215](https://github.com/HKUDS/nanobot/issues/3215)):** Configuring the SMTP channel to email oneself causes an infinite loop, generating thousands of emails. (No fix PR yet, requires immediate attention).
*   **Severe - Infinite Tool-Call Loop ([Issue #3220](https://github.com/HKUDS/nanobot/issues/3220)):** Non-compliant API gateways injecting empty tool calls can lock the agent in an infinite execution loop. *Fix already submitted in [PR #3225](https://github.com/HKUDS/nanobot/pull/3225).*
*   **Moderate - Memory Consolidation Crash ([Issue #3190](https://github.com/HKUDS/nanobot/issues/3190)):** Users upgrading to `v0.1.5.post1` are experiencing `tiktoken`-related memory overflow crashes (71k/65k tokens).
*   **Low - Custom Endpoint Configuration:** Two bugs where `apiBase` was ignored in transcription providers. *Fixes rapidly submitted and merged ([PR #3214](https://github.com/HKUDS/nanobot/pull/3214), [PR #3226](https://github.com/HKUDS/nanobot/pull/3226)).*

## 6. Feature Requests & Roadmap Signals
Recent open PRs and issues strongly signal the project's near-term trajectory:
*   **Advanced Subagent Management:** With new PRs for `spawn_status` and `spawn_cancel` ([PR #3223](https://github.com/HKUDS/nanobot/pull/3223)), the project is moving towards robust multi-agent orchestration and lifecycle control.
*   **Memory Staleness Detection:** [PR #3212](https://github.com/HKUDS/nanobot/pull/3212) introduces git-based age annotations for memory sections, enabling the LLM to identify and overwrite "stale" memories—a massive leap for long-term autonomous agents.
*   **Transcript Logging:** [PR #3224](https://github.com/HKUDS/nanobot/pull/3224) proposes append-only JSONL session transcripts, fulfilling a vital enterprise need for agent auditing and compliance.
*   **Official CLI Auth:** [PR #3221](https://github.com/HKUDS/nanobot/pull/3221) introduces an OAuth Device Flow, preparing the project for a more streamlined, potentially hosted SaaS gateway experience.

## 7. User Feedback Summary
Users are actively deploying NanoBot across diverse environments (Discord, MS Teams, Email, local LLMs) and pushing the limits of its memory and tool-calling capabilities. 
*   **Pain Points:** Users express frustration with the "black box" nature of the agent during tool execution and LLM requests (timeouts/retries). Furthermore, passing custom LLM providers (like LM Studio or Groq proxies) requires workarounds, though recent PRs show this is being actively resolved. 
*   **Satisfaction:** The rapid turnaround time from issue to PR (often same-day) indicates strong maintainer responsiveness, which the community likely appreciates. The expanding channel support (Teams, Discord) aligns perfectly with enterprise and community use cases.

## 8. Backlog Watch
The following important items require maintainer attention:
*   **Async-Safety Architecture ([Issue #2220](https://github.com/HKUDS/nanobot/issues/2220)):** A proposal from late March to use `ContextVar` for task-local tool routing. This is a structural improvement necessary for robust async operations and should be prioritized before the next major release.
*   **MS Teams Restart Notification ([Issue #2921](https://github.com/HKUDS/nanobot/issues/2921)):** Exposed configuration settings that do not actually function. Now that the MS Teams channel has been merged ([PR #3197](https://github.com/HKUDS/nanobot/pull/3197)), this ghost-config needs to be patched to prevent user confusion.
*   **Prompt Consolidation Limits ([Issue #3143](https://github.com/HKUDS/nanobot/issues/3143)):** Frequent errors from token consolidation exceeding limits. This requires an architectural look at how the agent truncates or compacts memory context safely.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-17

## 1. Today's Overview
NanoClaw is experiencing a highly active development phase, characterized by a substantial volume of community contributions and internal overhauls. In the last 24 hours, the project saw 19 updated Pull Requests—7 of which were merged or closed—alongside 7 newly opened or active Issues. The development focus is currently split between massive architectural expansions (such as a 7-layer capability system and agentic UX redesigns) and critical hardening of existing infrastructure (like IPC authorization and scheduler hot-loop fixes). While no new official releases were cut today, the high merge rate and targeted bug fixes indicate aggressive preparation for a forthcoming version bump.

## 2. Releases
No new official releases were published today. 

## 3. Project Progress
Several key PRs were merged or closed today, significantly advancing the project's stability and expanding its integration capabilities:
*   **Scope Expansion & Architecture:** PRs [#1786](https://github.com/qwibitai/nanoclaw/pull/1786) and [#1794](https://github.com/qwibitai/nanoclaw/pull/1794) (complete 7-layer scope expansion roadmap) were closed, with related work currently consolidating into the open PR [#1795](https://github.com/qwibitai/nanoclaw/pull/1795).
*   **Security & Bug Fixes:** PR [#1793](https://github.com/qwibitai/nanoclaw/pull/1793) was merged, adding a necessary 1MB body size limit to the `readBody()` function in the trust gateway to prevent DoS attacks. Additionally, PR [#1281](https://github.com/qwibitai/nanoclaw/pull/1281) was finally merged, fixing a silent failure for headless Linux browser setups.
*   **API Integrations:** Three iterations of the OpenAI-compatible API server skill PRs ([#1797](https://github.com/qwibitai/nanoclaw/pull/1797), [#1798](https://github.com/qwibitai/nanoclaw/pull/1798), [#1799](https://github.com/qwibitai/nanoclaw/pull/1799)) were closed in favor of the refined, currently open PR [#1800](https://github.com/qwibitai/nanoclaw/pull/1800).

## 4. Community Hot Topics
The most actively discussed items revolve around multi-channel integrations, local compute paradigms, and package management:
*   **Matrix & Telegram Overhaul:** PR [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) (adding a Matrix channel with full E2EE support) and PR [#1801](https://github.com/qwibitai/nanoclaw/pull/1801) (agentic UX redesign for Telegram) represent a strong community push to elevate NanoClaw's multi-platform communication capabilities.
*   **Local Compute / Privacy:** PR [#1802](https://github.com/qwibitai/nanoclaw/pull/1802) introduces an "Atomic Chat" MCP tool skill, allowing users to easily map local models via OpenAI-compatible APIs to their agents. 
*   **Infrastructure Migration:** PR [#1771](https://github.com/qwibitai/nanoclaw/pull/1771) proposes migrating the v2 ecosystem from `npm` to `pnpm`, a heavily requested shift that will require broad testing but promises better dependency management.

## 5. Bugs & Stability
Several important bugs and security vulnerabilities were highlighted today:
*   **High Severity - Security Gaps:** Issue [#1803](https://github.com/qwibitai/nanoclaw/pull/1803) reports zero test coverage for the critical IPC authorization boundary (preventing cross-group message injection). Issue [#1791](https://github.com/qwibitai/nanoclaw/issues/1791) highlights a directory-granularity flaw in the mount allowlist that makes isolating peer files across groups impossible.
*   **High Severity - Silent Hot Loops:** PR [#1788](https://github.com/qwibitai/nanoclaw/pull/1788) addresses a silent scheduler crash resulting from non-text scripts and unhandled `runTask` throws, introducing write-time coercion and startup repair.
*   **Low/Medium Severity - UX & Setup:** Users reported multiple setup friction points, including non-ASCII display names defaulting to "dm-with-unnamed" ([#1789](https://github.com/qwibitai/nanoclaw/issues/1789)), unclear absolute vs. relative path semantics for mounts ([#1790](https://github.com/qwibitai/nanoclaw/issues/1790), [#1792](https://github.com/qwibitai/nanoclaw/issues/1792)), and 6 merge conflicts when selecting the Apple Container runtime during `/setup` on macOS ([#1787](https://github.com/qwibitai/nanoclaw/issues/1787)).

## 6. Feature Requests & Roadmap Signals
The open issues and PRs signal a clear roadmap trend toward enterprise readiness and multi-tenant capabilities:
*   **Multi-Workspace Support:** Issue [#1804](https://github.com/qwibitai/nanoclaw/issues/1804) requests support for multiple concurrent Slack workspaces in a single instance. This highlights a growing need for multi-tenancy, which will require refactoring the `channel-registry.ts`.
*   **New Agent Providers:** PR [#1776](https://github.com/qwibitai/nanoclaw/pull/1776) adds "OpenCode" as a first-class `AgentProvider`. 
*   **Next-Gen Orchestration:** PR [#1796](https://github.com/qwibitai/nanoclaw/pull/1796) proposes a massive "Mission Control" redesign for a three-repo architecture, showing that power users want robust, centralized fleet management.

## 7. User Feedback Summary
Operators are deploying NanoClaw in complex environments (VPS, macOS, multi-group Docker setups) but are hitting friction in the `/setup` flow. Specifically, users express frustration with undocumented container behaviors—such as mount paths silently prefixing to `/workspace/extra/` ([#1792](https://github.com/qwibitai/nanoclaw/issues/1792)) and the inability to selectively mask files in shared directories ([#1791](https://github.com/qwibitai/nanoclaw/issues/1791)). The swift iteration of the `add-api-server` skill also shows that users highly value exposing their agents via standard API protocols for broader integration.

## 8. Backlog Watch
*   **Older Feature PRs needing attention:** PR [#886](https://github.com/qwibitai/nanoclaw/pull/886) (news-briefing skill) and PR [#1311](https://github.com/qwibitai/nanoclaw/pull/1311) (create new session feature) have been open for roughly a month and remain in "Needs Review". Maintainers should verify if these are blocked by the v2 migration or require refactoring.
*   **macOS Setup Blocker:** Issue [#1787](https://github.com/qwibitai/nanoclaw/issues/1787) makes the `/setup` flow completely unusable for new macOS users attempting to leverage the Apple Container runtime. This requires an urgent patch to resolve the branch merge conflicts.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-17

## 1. Today's Overview
The IronClaw project is experiencing a period of extremely high activity, characterized primarily by a massive internal bug bash and active development on the "v2 architecture" engine. With 50 issues and 50 pull requests updated in the last 24 hours, contributor engagement is exceptionally high. The focus is heavily skewed toward fixing stability regressions in the web gateway, refining LLM tool schema discovery, and adding missing user interface flows for routines/missions. No new stable version was released today, indicating that the current work is part of a larger, unreleased stabilization and feature expansion phase.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Significant structural progress was made today through 10 closed/merged PRs, with core developers focusing heavily on the v2 engine and gateway reliability:

*   **Gateway & Auth Fixes:** [PR #2512](https://github.com/nearai/ironclaw/pull/2512) resolved a high-risk Slack relay OAuth callback state lookup issue. [PR #2551](https://github.com/nearai/ironclaw/pull/2551) fixed the routine setup resume state in the web gateway UI, preventing broken onboarding flows.
*   **Routines & Missions:** [PR #2547](https://github.com/nearai/ironclaw/pull/2547) made cadence mandatory for routines and exposed guardrails, fixing an issue where reactive missions silently failed. [PR #2549](https://github.com/nearai/ironclaw/pull/2549) introduced the `mission_get` action so the LLM can properly retrieve mission results.
*   **Safety & UI:** [PR #2552](https://github.com/nearai/ironclaw/pull/2552) improved notification and analysis tools with error codes and base rates. [PR #2332](https://github.com/nearai/ironclaw/pull/2332) generalized web chat to support document uploads (like PDFs) instead of just images.

## 4. Community Hot Topics
The community and QA team are heavily focused on channel integrations and tool usability based on recent active discussions:

*   **Google Sheets OAuth Failure ([Issue #2229](https://github.com/nearai/ironclaw/issues/2229), 9 comments):** The most discussed issue today. Users and QA are blocked by an `Error 400 invalid_request` during the Google Sheets authorization flow in the hosted staging environment. This highlights ongoing friction in extending the agent's third-party capabilities.
*   **Self-Recovery for Routines ([Issue #1320](https://github.com/nearai/ironclaw/issues/1320), 2 comments):** A closed issue detailing how transient LLM errors currently cause immediate routine failures. The discussion reflects a strong need for the agent to have bounded self-recovery mechanisms rather than failing loudly and requiring user intervention.
*   **Slack App Distribution ([Issue #1997](https://github.com/nearai/ironclaw/issues/1997), 1 comment) & Broken Slack Flow ([Issue #1998](https://github.com/nearai/ironclaw/issues/1998), 1 comment):** Users are frustrated that IronClaw expects a custom Slack app to be manually created by the user instead of providing a public marketplace listing. Even when manually set up, the token integration is currently broken.

## 5. Bugs & Stability
Today's QA bug bash uncovered several critical bugs, with core developers immediately opening PRs to address them:

*   **High/P1 - Dashboard Refresh Loop ([Issue #2410](https://github.com/nearai/ironclaw/issues/2410)):** The web dashboard is constantly wiping contents in a loop. *Fix in progress:* [PR #2415](https://github.com/nearai/ironclaw/pull/2415) adds a time-gate to SSE reconnect history reloads.
*   **High/P1 - Tool Invocation Failure ([Issue #2541](https://github.com/nearai/ironclaw/issues/2541)):** The agent fails to invoke tools for summarization tasks, processing for up to 5 minutes and returning text-only refusals. *Fix in progress:* [PR #2539](https://github.com/nearai/ironclaw/pull/2539) adds an "execution obligation" to force the v2 engine to attempt tool use before giving up.
*   **Medium/P2 - Agent Hallucinations on Reload ([Issue #1993](https://github.com/nearai/ironclaw/issues/1993)):** After network errors, if the chat is reloaded, the agent falsely claims it successfully completed prior tasks.
*   **Medium/P2 - Secret Leak Log Spam ([Issue #2412](https://github.com/nearai/ironclaw/issues/2412)) & Engine v2 Safety Gap ([PR #2494](https://github.com/nearai/ironclaw/pull/2494)):** The server logs are flooding with 'Potential secret leak detected' warnings. Furthermore, it was discovered that the Engine v2 path was forwarding user messages without safety scans. *Fix in progress:* [PR #2494](https://github.com/nearai/ironclaw/pull/2494) adds inbound secret scanning to v2.
*   **Medium/P2 - Chat Persistence ([Issue #2285](https://github.com/nearai/ironclaw/issues/2285)):** Chat messages disappear upon page refresh while the bot is still processing in the background.

## 6. Feature Requests & Roadmap Signals
Analysis of today's open PRs and issues reveals strong directional signals for the next major version:

*   **Workspace Multi-Tenancy:** [PR #2548](https://github.com/nearai/ironclaw/pull/2548) introduces database-backed workspace entities, membership, and cross-workspace sharing. This signals an upcoming shift toward team/collaborative environments rather than single-user deployments.
*   **Advanced Credential Scoping:** [PR #2168](https://github.com/nearai/ironclaw/pull/2168) introduces path-based credential matching. This will allow users to scope read-only tokens to specific API endpoints, vastly improving security for complex integrations.
*   **Native Matrix Channel Support:** [PR #2019](https://github.com/nearai/ironclaw/pull/2019) is adding a native Matrix channel with optional E2EE, diversifying the agent beyond Slack and Telegram.
*   **Skill Extensibility:** [PR #2550](https://github.com/nearai/ironclaw/pull/2550) formalizes the "Adding Skills" documentation and introduces a behavior testing template for custom skills, indicating a push for community-driven agent capabilities.

## 7. User Feedback Summary
User feedback is currently dominated by friction with third-party integrations and UI reliability. Users are specifically frustrated by the lack of a standard Slack marketplace app, finding the manual creation process confusing, especially when combined with broken OAuth flows ([Issue #1998](https://github.com/nearai/ironclaw/issues/1998)). There is also notable dissatisfaction with the agent's memory and state management; users report that the agent forgets activated channels like Telegram and asks for setup again ([Issue #1595](https://github.com/nearai/ironclaw/issues/1595)), or completely ignores temporal instructions, such as firing off meeting prep summaries immediately instead of at the scheduled time ([Issue #2281](https://github.com/nearai/ironclaw/issues/2281)).

## 8. Backlog Watch
*   **Routine UI Authoring ([Issue #1325](https://github.com/nearai/ironclaw/issues/1325)):** Open since mid-March, this enhancement requests a first-class UI for creating and editing routines in the web tab. Currently, the web UI is read-only, forcing users to rely on the CLI. Maintainer attention is needed to finalize the web authoring experience.
*   **Tool Schema Discovery Meta-Issues ([Issues #1331-#1338](https://github.com/nearai/ironclaw/issues/1331)):** A cluster of "on hold" issues related to improving how the LLM discovers and understands complex tool schemas (MCP, WASM, HTTP policies). These represent a massive architectural improvement for tool-reliability but have stalled since March.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-17

## 1. Today's Overview
The Moltis project is experiencing a highly active and healthy development cycle, marked by a high merge ratio of 12 merged PRs out of 19 updated, alongside 7 closed issues. The contributor base is highly engaged, iterating rapidly on a major new "code indexing" feature while simultaneously shipping critical bug fixes for provider schemas and agent memory compaction. The ratio of bugs being reported and immediately fixed within the same 24-hour window indicates strong project responsiveness and robust CI/CD pipelines. Overall, the project is moving swiftly from foundational architecture to advanced agent capabilities and expanded platform support.

## 2. Releases
- **Release [20260416.02](https://github.com/moltis-org/moltis/releases/tag/20260416.02)**
  - **Summary:** This release consolidates major stability fixes for LLM provider interactions, context handling, and platform support (Windows/Nix).
  - **Key Changes:** Includes schema sanitization fixes for strict providers (Gemini/Fireworks), Windows crypto provider initialization for node hosting, Nostr channel panic resolutions, and reasoning model detection for Grok 3/4.
  - **Migration Notes:** Users running Moltis inside Docker-in-Docker environments should verify sandbox workspace paths, as backend path-resolution logic for mounts has been corrected. Windows users utilizing node hosting via `wss://` will no longer experience panics.

## 3. Project Progress
Development today was split between massive feature expansions and targeted stability fixes.
*   **Code Indexing Stack (In Progress):** Contributor [Cstewart-HC](https://github.com/Cstewart-HC) opened a massive 4-PR stack (superseding an earlier PR) to introduce local code indexing. This includes scaffolding ([PR #753](https://github.com/moltis-org/moltis/pull/753)), an orchestrator ([PR #754](https://github.com/moltis-org/moltis/pull/754)), gateway wiring ([PR #755](https://github.com/moltis-org/moltis/pull/755)), and a builtin SQLite+FTS5 backend ([PR #756](https://github.com/moltis-org/moltis/pull/756)).
*   **Agent Context & Memory:** [PR #737](https://github.com/moltis-org/moltis/pull/737) was merged, combining efforts to allow per-model context window overrides via `moltis.toml` and fixing a critical bug where oldest-first tool result compaction was destroying agent context.
*   **Provider & Schema Sanitization:** Several fixes were merged to strip orphaned required entries ([PR #751](https://github.com/moltis-org/moltis/pull/751)), restore stripped type annotations for strict APIs ([PR #740](https://github.com/moltis-org/moltis/pull/740)), and sanitize draft-07 schemas ([PR #746](https://github.com/moltis-org/moltis/pull/746)).
*   **UI & UX:** [PR #750](https://github.com/moltis-org/moltis/pull/750) was merged, adding a reasoning effort toggle to the web chat toolbar.
*   **Platform & Integrations:** Nix flake build support was formally added via [PR #745](https://github.com/moltis-org/moltis/pull/745). Matrix OIDC authentication support was introduced in [PR #730](https://github.com/moltis-org/moltis/pull/730).

## 4. Community Hot Topics
*   **Docker-in-Docker Sandbox Paths ([Issue #102](https://github.com/moltis-org/moltis/issues/102)):** With 5 thumbs-up and ongoing discussion, this is a highly requested fix. The issue highlights enterprise/user pain points when running Moltis itself as a containerized service and attempting to pass host paths securely to agent sandboxes.
*   **Prompt Error Retries ([Issue #748](https://github.com/moltis-org/moltis/issues/748)):** Opened by vvuk, this feature request asks for an easy way to retry a prompt upon failure. This aligns with common AI assistant UX needs where LLM API timeouts or refusals interrupt workflows.
*   **Message Attachments UI ([Issue #533](https://github.com/moltis-org/moltis/issues/533)):** A highly requested UX enhancement to add a "+" button for message attachments, showing community demand for better multimodal/file-interaction capabilities.

## 5. Bugs & Stability
The team resolved a significant pile of bugs today, particularly around LLM provider compatibility. 
*   **[High Severity] Schema Validation Rejections:** [Issue #747](https://github.com/moltis-org/moltis/issues/747) and [Issue #743](https://github.com/moltis-org/moltis/issues/743) reported that strict providers (Gemini via OpenRouter, OpenAI) were rejecting MCP tool schemas. *Status: Fixed and closed via [PR #751](https://github.com/moltis-org/moltis/pull/751) and [PR #746](https://github.com/moltis-org/moltis/pull/746).*
*   **[High Severity] Agent Context Window Destruction:** Moltis agents were losing context during long tool loops. *Status: Fixed via oldest-first compaction merge ([PR #726](https://github.com/moltis-org/moltis/pull/726), [PR #737](https://github.com/moltis-org/moltis/pull/737)).*
*   **[Medium Severity] Nostr Plugin Panic ([Issue #736](https://github.com/moltis-org/moltis/issues/736)):** Sync locking issue causing crashes. *Status: Fixed via [PR #742](https://github.com/moltis-org/moltis/pull/742).*
*   **[Medium Severity] Windows Node Host Crash ([Issue #744](https://github.com/moltis-org/moltis/issues/744)):** Missing `CryptoProvider` initialization. *Status: Fixed via [PR #749](https://github.com/moltis-org/moltis/pull/749).*
*   **[Low Severity] Grok 4.20 Reasoning ([Issue #738](https://github.com/moltis-org/moltis/issues/738)):** Grok models not utilizing reasoning capabilities via OpenRouter. *Status: Fixed via [PR #741](https://github.com/moltis-org/moltis/pull/741).*

## 6. Feature Requests & Roadmap Signals
Today's issues and PRs signal a strong roadmap trajectory toward making Moltis a deeply integrated, autonomous coding assistant.
*   **Code Indexing/Search:** The 4-PR stack ([PR #753](https://github.com/moltis-org/moltis/pull/753), [#754](https://github.com/moltis-org/moltis/pull/754), [#755](https://github.com/moltis-org/moltis/pull/755), [#756](https://github.com/moltis-org/moltis/pull/756)) indicates the next major version will feature native, local codebase search without relying purely on external vector DBs.
*   **OpenRouter Reasoning Control:** Users are actively requesting more granular control over reasoning effort for models like Gemini and Grok ([Issue #739](https://github.com/moltis-org/moltis/issues/739), [PR #750](https://github.com/moltis-org/moltis/pull/750)). Expect the UI to roll this out fully in the next release.
*   **Modern Chat UX:** [Issue #748](https://github.com/moltis-org/moltis/issues/748) (retry on error) and [Issue #533](https://github.com/moltis-org/moltis/issues/533) (attachments button) will likely be prioritized to bring the web UI to feature parity with mainstream commercial assistants.

## 7. User Feedback Summary
Users are heavily utilizing Moltis in complex, containerized environments (Docker-in-Docker) and routing through multi-model gateways like OpenRouter. While satisfaction is implied by the high level of sophisticated feature requests (e.g., native OIDC for Matrix, context window overrides), there are distinct pain points:
*   **MCP Fragmentation:** Users are experiencing friction connecting MCP tools (like Attio) to strict LLM providers due to differing JSON Schema draft implementations.
*   **Tool Loop Reliability:** Users running long autonomous tasks reported context loss, which the team has aggressively addressed.
*   **NixOS Adoption:** The community clearly values reproducible builds, evidenced by independent contributions of Nix Flakes.

## 8. Backlog Watch
*   **Docker-in-Docker Host Mounts ([Issue #102](https://github.com/moltis-org/moltis/issues/102)):** Originally created in February 2026, this issue was updated today but remains a complex architectural challenge. Maintainers should prioritize this as it blocks enterprise Docker deployments.
*   **Matrix OIDC Auth ([PR #730](https://github.com/moltis-org/moltis/pull/730)):** Opened yesterday, this is a massive architectural addition that removes a hard blocker for connecting to modern matrix.org homeservers. Needs thorough security review before merging.
*   **Code Indexing Stack ([PR #753](https://github.com/moltis-org/moltis/pull/753) - [PR #756](https://github.com/moltis-org/moltis/pull/756)):** Four open PRs waiting for review. Maintainer bandwidth will be required to evaluate the SQLite+FTS5 architecture choices before this can land.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-17

## 1. Today's Overview
CoPaw (and its underlying engine QwenPaw) is experiencing **highly active** development and community engagement, with 50 issues and 50 pull requests updated in the last 24 hours. The maintainers released **v1.1.2-beta.2**, focusing on critical background task stability. Community contributions are surging, particularly in expanding messaging channels (WhatsApp, Signal, SIP) and core architectural features (ACP protocol, Plan mode, extensible memory). However, the rapid iteration from v1.0.1 to v1.1.x has introduced several UI and configuration regressions that are currently frustrating users.

## 2. Releases
*   **v1.1.2-beta.2** ([PR #3454](https://github.com/agentscope-ai/QwenPaw/pull/3454))
    *   **Changes:** Bumped version and included a critical fix to register AgentApp dispatched requests with TaskTracker.
    *   **Fix:** Prevents background task cancellation ([PR #3305](https://github.com/agentscope-ai/QwenPaw/pull/3305)).
    *   **Migration Note:** Users upgrading from older versions to the 1.1.x branch are experiencing environment fragmentation (splitting `.copaw` and `.qwenpaw` directories). Manual PATH updates are currently required on Windows.

## 3. Project Progress
Merged and closed PRs indicate active stabilization and feature completion:
*   **Channel Integration:** WhatsApp channel support ([PR #2962](https://github.com/agentscope-ai/QwenPaw/pull/2962)) and reply-to-trigger features ([PR #2995](https://github.com/agentscope-ai/QwenPaw/pull/2995)) were closed/integrated, alongside fixes for preserving channels during hot-reloads ([PR #2994](https://github.com/agentscope-ai/QwenPaw/pull/2994)).
*   **Model Provider Support:** vLLM compatibility was fixed to properly handle `tool_choice="auto"` errors ([PR #3438](https://github.com/agentscope-ai/QwenPaw/pull/3438)).
*   **Release Prep:** The release notes for the upcoming stable v1.1.2 were updated ([PR #3495](https://github.com/agentscope-ai/QwenPaw/pull/3495)).

## 4. Community Hot Topics
*   **Transition from CoPaw to QwenPaw Confusion:** The most commented issue today ([Issue #3309](https://github.com/agentscope-ai/QwenPaw/issues/3309), 11 comments) details user frustration regarding broken Windows PATH variables after updating, duplicate apps, and split directories (`.copaw` vs `.qwenpaw`). 
*   **Multi-Agent Self-Evolution:** A highly discussed feature request ([Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224), 4 comments) proposing "Agent Teams"—a natural-language-driven, self-evolving multi-agent collaboration framework. This indicates strong enterprise/user demand for autonomous team swarms.
*   **ACP Protocol Support:** Community members are actively requesting Agent Communication Protocol support ([Issue #1059](https://github.com/agentscope-ai/QwenPaw/issues/1059), 4 comments) to integrate with IDEs like Codex and Claude Code.

## 5. Bugs & Stability
Several bugs relate to UI responsiveness and memory formatting in the recent v1.1.1 release:
*   **Severe - API/Internal Errors:**
    *   `/api/console/chat` crashes due to missing `AgentRequest` attribute ([Issue #3506](https://github.com/agentscope-ai/QwenPaw/issues/3506)). *Fix PR: [PR #3497](https://github.com/agentscope-ai/QwenPaw/pull/3497) and related API fixes are open.*
    *   Anthropic-compatible API `400 BadRequestError` caused by passing `None` values in tool schemas ([Issue #3489](https://github.com/agentscope-ai/QwenPaw/issues/3489)).
*   **High - Tool & Execution Failures:**
    *   Long tasks silently failing/stopping without error logs ([Issue #3011](https://github.com/agentscope-ai/QwenPaw/issues/3011)). *Mitigated by the new TaskTracker in v1.1.2-beta.2.*
    *   File downloads failing due to duplicated API paths in the URL ([Issue #3435](https://github.com/agentscope-ai/QwenPaw/issues/3435)).
*   **Moderate - UI/UX:**
    *   Console chat UI frequently freezes, requiring a manual page refresh to see agent responses ([Issue #3468](https://github.com/agentscope-ai/QwenPaw/issues/3468)).
    *   Tool page crashing due to `icon=null` string mismatch. *Fix open: [PR #3497](https://github.com/agentscope-ai/QwenPaw/pull/3497).*

## 6. Feature Requests & Roadmap Signals
*   **Memory & Evolution:** Users are asking for self-evolution capabilities akin to Hermes Agent ([Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470)). This is being addressed in the PR pipeline by an extensible memory backend system (mem0, Zep) ([PR #3500](https://github.com/agentscope-ai/QwenPaw/pull/3500)).
*   **IDE Integration:** The ACP server feature ([PR #3487](https://github.com/agentscope-ai/QwenPaw/pull/3487)) is under review, which will allow external editors to interact with QwenPaw via JSON-RPC.
*   **New Channels:** First-time contributors are actively expanding the ecosystem with SIP voice channel support ([PR #3449](https://github.com/agentscope-ai/QwenPaw/pull/3449)), Signal ([PR #3508](https://github.com/agentscope-ai/QwenPaw/pull/3508)), and WhatsApp ([PR #3498](https://github.com/agentscope-ai/QwenPaw/pull/3498)).
*   **Advanced Orchestration:** Plan Mode ([PR #2904](https://github.com/agentscope-ai/QwenPaw/pull/2904)) is under review, allowing agents to generate structured, multi-step execution plans.

## 7. User Feedback Summary
Users are generally excited about the rapid addition of features (especially multi-agent capabilities and local model support). However, **frustration is mounting regarding memory retention bugs and UI stability**. Users report that the agent frequently forgets MCP configurations and coding preferences during new sessions, forcing them to repeat instructions despite ReMe memory being active ([Issue #3453](https://github.com/agentscope-ai/QwenPaw/issues/3453)). Additionally, local model users are experiencing formatting errors, specifically local Qwen models outputting XML while QwenPaw expects JSON, causing tool-call failures ([Issue #3477](https://github.com/agentscope-ai/QwenPaw/issues/3477)).

## 8. Backlog Watch
*   **Large File Truncation:** A significant bug where the `write_file` tool truncates files larger than ~6KB has been open since mid-March without a definitive fix ([Issue #1563](https://github.com/agentscope-ai/QwenPaw/issues/1563)). This is a major blocker for coding tasks.
*   **MCP GUI Config Disconnect:** The disconnect between GUI MCP configurations and the ReMe module remains an open, highly-discussed pain point ([Issue #3445](https://github.com/agentscope-ai/QwenPaw/issues/3445)).
*   **Kimi API Support:** Users are requesting native API support for Kimi Code but manual additions are currently failing ([Issue #3437](https://github.com/agentscope-ai/QwenPaw/issues/3437)). Maintainer attention is needed for provider integration.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

Here is the structured project digest for EasyClaw (gaoyangz77/easyclaw) for 2026-04-17.

### 1. Today's Overview
The EasyClaw (RivonClaw) project demonstrates healthy, continuous momentum with a strong focus on iterative improvements and feature expansion. Activity over the last 24 hours shows steady developer engagement, marked by the merging of a significant new feature PR and the rapid release of two subsequent patches. While community engagement is somewhat minimal in terms of volume, the ongoing issue tracker indicates an active user base keen on adopting the latest builds.

### 2. Releases
Two new patch versions were released today, both focusing on macOS deployment stability. Neither release appears to contain breaking changes or require specific migration steps.
*   **[v1.7.13](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.13):** RivonClaw v1.7.13. Includes an updated installation guide specifically addressing macOS Gatekeeper false positives.
*   **[v1.7.12](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.7.12):** RivonClaw v1.7.12. Added detailed workarounds for the "App is damaged and can't be opened" error on macOS, educating users on how to bypass Apple's unsigned app warnings via Terminal.

### 3. Project Progress
Development advanced noticeably today with the integration of a new backend mechanism, followed by quality-of-life updates.
*   **[PR #32 [MERGED] Feature/credits system](https://github.com/gaoyangz77/rivonclaw/pull/32):** Authored by *dlxai*, this PR introduces a new "credits system" into the project. This suggests a shift toward monetization, API usage tracking, or an in-app token economy. The subsequent releases (v1.7.12 and v1.7.13) likely packaged and refined this addition.

### 4. Community Hot Topics
The most notable community interaction revolves around user friction during routine operations.
*   **[Issue #33 [OPEN] 1.7.11更新失败 (v1.7.11 Update Failure)](https://github.com/gaoyangz77/rivonclaw/issues/33):** Opened by *slowayear*. This issue includes a screenshot demonstrating an update failure. 
    *   *Underlying needs:* Users expect seamless, one-click in-app updates. The failure to transition smoothly from v1.7.11 to newer versions highlights a friction point in the auto-updater or patch delivery mechanism. 

### 5. Bugs & Stability
Based on today's tracker, there is one primary bug affecting user experience.
*   **[Issue #33] Auto-update mechanism failure:** Users are unable to update directly from v1.7.11. 
    *   *Severity:* **Medium.** While it does not crash the application itself, a broken auto-updater prevents users from receiving security patches and new features, eventually fracturing the user base across outdated versions. 
    *   *Fix Status:* No dedicated fix PR has been opened for this specific issue yet. The rapid release of v1.7.12 and v1.7.13 may represent an attempt to bypass the broken updater by forcing users to manually download the latest dmg/distributables (which now include macOS Gatekeeper instructions).

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were opened today, strong roadmap signals are evident in the merged PRs.
*   **Credits / Token System:** The merging of the "Feature/credits system" PR indicates the maintainers are actively building infrastructure likely tied to AI usage limits, premium features, or API cost tracking. 
*   *Prediction:* The next minor or major version release will likely introduce UI elements for users to view and manage their credits, alongside backend endpoints to handle credit deduction or purchasing.

### 7. User Feedback Summary
User feedback today highlights friction with the OS-level security warnings and update processes.
*   **Pain Points:** macOS users are frequently blocked by Gatekeeper warnings ("RivonClaw is damaged"), which creates immediate distrust and confusion unless they are comfortable using Terminal workarounds. Furthermore, the broken updater from v1.7.11 adds unnecessary manual overhead for the user.
*   **Satisfaction:** The maintainer's rapid release of documentation fixes for the macOS Gatekeeper issue shows high responsiveness to user confusion, which is a positive signal for project support.

### 8. Backlog Watch
Based on the current data snapshot:
*   **[Issue #33](https://github.com/gaoyangz77/rivonclaw/issues/33)** requires maintainer attention to investigate why v1.7.11 is failing to pull or apply the update. As the user provided a screenshot, the maintainers should be able to diagnose the network or application-level error relatively quickly.

</details>