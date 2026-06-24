# OpenClaw Ecosystem Digest 2026-06-25

> Issues: 233 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-24 22:25 UTC

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

# OpenClaw Project Digest
**Date:** 2026-06-25

## 1. Today's Overview
OpenClaw is currently experiencing a period of hyper-active development and community engagement, processing over 230 issues and 500 pull requests in the last 24 hours. The project's recent push towards complex agentic workflows—specifically around multi-agent sessions, background cron tasks, and deep memory integrations—has introduced notable stability challenges. The issue tracker is heavily focused on state management, race conditions, and memory handling under pressure. However, maintainer responsiveness remains strong, with a high ratio of open PRs actively moving toward resolution for these advanced features.

## 2. Releases
### **v2026.6.10**
- **Highlights:** 
  - **Automatic fast mode for talks:** Dynamically enables fast mode for short conversational turns, reverting to normal mode for longer runs with bounded fallback and delivery behavior. (Thanks `@alexph-dev` and `@vincentkoc`).
  - **More reliable model routing:** Upgrades to Zai model synthesis routing for better stability.
- **Impact:** This release appears targeted at reducing latency and improving conversational flow, directly addressing recent UX feedback regarding agent "typing" delays.

## 3. Project Progress
Significant engineering effort is being funneled into standardizing background operations and message delivery.
- **Delivery Lifecycle Fixes:** PR [#88992](https://github.com/openclaw/openclaw/pull/88992) and PR [#88968](https://github.com/openclaw/openclaw/pull/88968) are advancing fixes to prevent silent message drops in `message_tool_only` mode and to ensure memory flush failures don't abort user replies.
- **Cron & Subagent Robustness:** PR [#83933](https://github.com/openclaw/openclaw/pull/83933) fixes manual cron runs accidentally deleting one-shot jobs, while PR [#85847](https://github.com/openclaw/openclaw/pull/95847) fixes lifecycle accounting for background subagent trees.
- **UX & UI Enhancements:** PR [#95604](https://github.com/openclaw/openclaw/pull/95604) introduces visible subagent progress indicators for Discord, and PR [#83988](https://github.com/openclaw/openclaw/pull/83988) eliminates UI "churn" when Telegram switches text to voice notes.
- **Provider Enhancements:** PR [#68079](https://github.com/openclaw/openclaw/pull/68079) drastically improves ZhipuAI (Zai) performance by injecting `X-Session-Id`, boosting prompt-cache hits from ~52% to ~96%.

## 4. Community Hot Topics
The community is heavily focused on the reliability of core agent sessions and memory infrastructure.
- **Memory Store Migration Saga:** The closed issue [#95495](https://github.com/openclaw/openclaw/issues/95495) generated heavy traffic regarding the `v2026.6.9` update silently relocating the memory vector store, forcing a massive 1499-file re-embed without warning. 
- **Session Continuity & Compaction:** Issue [#86684](https://github.com/openclaw/openclaw/issues/86684) highlights regressions where `sessions_yield` incorrectly compacts parent branches at low context usage, disrupting deep-context workflows (e.g., 1M token windows).
- **Subagent Visibility:** Users are frustrated by invisible background tasks. Issue [#87666](https://github.com/openclaw/openclaw/issues/87666) notes that Codex multi-agent mirror tasks are completely silent to operators.
*Underlying needs:* The user base has matured. They are running long-lived, multi-step agentic workflows on massive context windows and desperately need robust state preservation, non-destructive error handling, and transparent progress indicators.

## 5. Bugs & Stability
Several critical bugs have been reported regarding system stability under load or during complex operations:
1. **🔴 P1: Silent Fallback to OpenAI/Codex (Regression):** Issue [#87407](https://github.com/openclaw/openclaw/issues/87407) shows that `UND_ERR_SOCKET` keep-alive failures on Anthropic cause silent mid-turn fallbacks to OpenAI, breaking model continuity. 
2. **🔴 P1: Gateway Heap Starvation:** Issues [#87109](https://github.com/openclaw/openclaw/issues/87109) and [#86718](https://github.com/openclaw/openclaw/issues/86718) report gateway heaps growing uncontrollably to 1GB+ at idle, causing event-loop starvation, silent cron failures, and HTTP outages.
3. **🔴 P1: Stale Locks & Aborts:** Issue [#95833](https://github.com/openclaw/openclaw/issues/95833) and [#95915](https://github.com/openclaw/openclaw/issues/95915) show that aborting embedded subagent runs leaves `.jsonl.lock` files orphaned and fails to release heap memory, permanently bricking sessions. *(Fix tracked in PR [#96100](https://github.com/openclaw/openclaw/pull/96100))*.
4. **🔴 P1: Anthropic Signature Replays:** Issues [#94228](https://github.com/openclaw/openclaw/issues/94228) and [#92201](https://github.com/openclaw/openclaw/issues/92201) report that streaming "thinking" signatures intermittently brick long tool-use threads on Anthropic, compounded by genericized error texts preventing recovery wrappers from firing.
5. **🟠 P2: Telegram Formatting Broken:** Issue [#95554](https://github.com/openclaw/openclaw/issues/95554) notes `v2026.6.9` broke paragraph spacing and tables in Telegram richMessages. *(Closed/Fixed)*.

## 6. Feature Requests & Roadmap Signals
Key roadmap signals point toward sandboxed security and deterministic deployments:
- **Security & Sandboxing:** Feature request [#7722](https://github.com/openclaw/openclaw/issues/7722) for Filesystem Sandboxing (`tools.fileAccess` allow/deny lists) and [#74580](https://github.com/openclaw/openclaw/issues/74580) for fine-grained hook permissions for agent state.
- **Lite Deployments:** Request [#86881](https://github.com/openclaw/openclaw/issues/86881) asks for a "Gateway-lite" mode for deterministic deployments (webhooks/cron) that skips loading the AI harness entirely.
- **Memory & Audit Logging:** Request [#20935](https://github.com/openclaw/openclaw/issues/20935) wants an append-only audit log for all changes to `MEMORY.md` to trace agent reasoning and detect tampering.
*Prediction:* Given the heavy merge risk tags on current PRs, the next minor versions will likely focus heavily on wrapping up provider fallback logic (e.g., external rerankers in PR [#92725](https://github.com/openclaw/openclaw/pull/92725)) and finalizing filesystem sandboxing to prevent unauthorized access during automated tasks.

## 7. User Feedback Summary
- **Pain Points:** Users are increasingly frustrated by "silent failures"—especially in messaging channels like iMessage, Telegram, and Discord—where background tasks hang on typing indicators indefinitely (e.g., [#87665](https://github.com/openclaw/openclaw/issues/87665)). Additionally, macOS users continue to face native extension challenges, such as the `sqlite-vec` loading bug ([#66977](https://github.com/openclaw/openclaw/issues/66977)).
- **Use Cases:** The community is successfully pushing OpenClaw into permanent, always-on assistant roles via Telegram/Discord, integrating it deeply with external memory frameworks (like Lancedb-pro), and connecting it to mobile nodes (Android/iOS) for proactive alerting.
- **Satisfaction:** Enthusiasm for the project's capability is extremely high, but trust is currently fragile due to upgrade regressions (like the v2026.6.9 memory relocation) and data-loss edge cases in write tools ([#40001](https://github.com/openclaw/openclaw/issues/40001)).

## 8. Backlog Watch
Several critical items require immediate maintainer decisions to unblock complex deployments:
- **Long-Standing P1s:** 
  - [#48003](https://github.com/openclaw/openclaw/issues/48003): Steer mode failing to inject messages mid-turn since March 2026 (Regression from `KeyedAsyncQueue`).
  - [#40001](https://github.com/openclaw/openclaw/issues/40001): Write tool lacking append mode, causing isolated cron sessions to destroy shared memory files.
- **Stale Security Reviews:** Many security-impacting features are waiting on review, such as [#39847](https://github.com/openclaw/openclaw/issues/39847) (Internal metadata echo contamination in Discord) and [#85030](https://github.com/openclaw/openclaw/issues/85030) (MCP tools bypassing subagent allowlists).
- **Destructive Upgrades:** Issue [#78493](https://github.com/openclaw/openclaw/issues/78493) where `sudo openclaw update` creates mixed file ownership, causing subsequent doctor runs to catastrophically overwrite configs due to read failures.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from June 25, 2026.

# Open-Source AI Agent Ecosystem Comparison Report (2026-06-25)

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a hyper-active state of maturation, characterized by aggressive feature iteration and rapid community growth. Projects are uniformly pivoting from basic conversational interfaces toward complex, multi-platform orchestration, deep system integrations, and extended autonomous workflows. However, this rapid expansion has introduced shared growing pains, particularly concerning context management, token efficiency, and security boundaries for tool execution. The overarching industry trajectory clearly favors highly modular, gateway-based architectures capable of securely connecting diverse messaging platforms with heterogeneous LLM providers.

## 2. Activity Comparison
*Health Score is graded A-E based on PR/Issue volume, release cadence, and bug triage responsiveness.*

| Project | Issues (24h) | PRs (24h) | Recent Release Status | Health Score | Primary Focus Area |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~230 | ~500 | **v2026.6.10** (Active) | **A+** | Complex agentic workflows, state mgmt |
| **NanoBot** | 18 | 45 | No recent release | **A** | Ecosystem expansion, UI/Mobile, MCP |
| **Hermes Agent**| 50 | 50 | No recent release (v0.17.0) | **A** | Test coverage, token/context compression |
| **IronClaw** | 19 | 43 | No recent release | **A** | Architectural refactoring, automation |
| **LobsterAI** | Steady | 41 (merged) | No recent release | **A-** | OpenClaw gateway stabilization, Windows |
| **CoPaw** | 23 | 50 | No recent release (2.0 migration)| **A** | AgentScope 2.0 compatibility, frontend |
| **ZeroClaw** | 50 | 50 | No recent release | **B+** | Regression testing, RBAC, WASM plugins |
| **NanoClaw** | 1 | 17 | No recent release | **B+** | Security hardening, MCP, Matrix E2EE |
| **PicoClaw** | ~22 total | 8 | No recent release | **B** | Provider compatibility, DOM/MVVM agents|
| **TinyClaw** | 0 | 1 | No recent release | **C** | Bug fixes (Windows CLI support) |
| **Moltis / ZeptoClaw / NullClaw**| 0 | 0 | Inactive | **N/A** | Dormant |

## 3. OpenClaw's Position
**OpenClaw** operates as the clear anchor and reference implementation within this tracked ecosystem, processing an unparalleled volume of daily issues (~230) and PRs (~500). 
* **Advantages:** It is the only project successfully executing high-complexity, multi-agent workflows at scale, specifically handling massive context windows (e.g., 1M tokens) and background cron tasks. Its release cadence is highly responsive, pushing fixes and routing improvements daily.
* **Technical Approach:** Unlike peers slowly migrating to modular designs (like IronClaw), OpenClaw is already deep into optimizing the minutiae of agentic loops—specifically Zai model synthesis routing, subagent lifecycle accounting, and memory store migrations.
* **Community:** Its community is massive but currently under heavy strain due to the project's ambition. While other projects attract feature requests, OpenClaw’s user base is highly sophisticated, stress-testing the absolute limits of state preservation and context compaction.

## 4. Shared Technical Focus Areas
Several technical requirements have emerged as universal hurdles across the open-source agent landscape:
* **Context Bloat & Token Optimization:** Projects are realizing that bloated tool schemas consume too much context. *Hermes Agent* (73% fixed overhead) and *IronClaw* (~25.8k tokens per call) are actively developing progressive/lazy tool loading. *OpenClaw* and *LobsterAI* are tackling idle token burn from aborted tool loops.
* **MCP (Model Context Protocol) Security & Isolation:** Standardizing tool execution via MCP is ubiquitous, but default security is failing. *NanoBot*, *NanoClaw*, and *ZeroClaw* all reported critical vulnerabilities recently or currently surrounding MCP tool allowlist bypasses, highlighting a desperate need for robust multi-tenant and subagent tool isolation.
* **Multi-Platform Gateway Reliability:** The shift from local CLIs to always-on cross-platform messaging agents (Telegram, Discord, DingTalk, Matrix) is universal. *PicoClaw*, *NanoBot*, *Hermes Agent*, and *OpenClaw* are all fighting stream-handling bugs, rich message formatting regressions, and silent session disconnects across these diverse chat APIs.
* **Memory Architecture Overhaul:** Projects are moving away from simple flat files toward durable vector stores, though not without pain. *OpenClaw* faced a massive re-embedding saga, while *CoPaw* and *IronClaw* are actively refactoring memory into provider-neutral, SQLite-backed durable contracts.

## 5. Differentiation Analysis
While all projects aim to build better AI assistants, their architectural targets and user bases differ significantly:
* **Enterprise vs. Consumer:** *ZeroClaw* and *IronClaw* are heavily focused on enterprise readiness (RBAC, OIDC, multi-tenancy, GitHub bug-fix workflows). Conversely, *LobsterAI* and *NanoBot* are leaning heavily into consumer/social integration (WeChat, iOS PWA support, DingTalk).
* **Web/DOM vs. CLI/Messaging:** *PicoClaw* stands out with a unique focus on GUI agents for Enterprise MVVM architectures (Vue 2/Element UI), attempting to solve DOM state-binding issues. In contrast, *TinyClaw* remains a lightweight, purely CLI-focused tool.
* **Autonomy vs. Control:** *OpenClaw* and *Hermes Agent* are pushing deep into autonomous, multi-step "subagent trees" and goal-oriented loops. Meanwhile, *NanoClaw* and *ZeroClaw* are heavily prioritizing safety mechanisms, building out-of-band approval systems, Docker-in-Docker secure sockets, and filesystem sandboxing.

## 6. Community Momentum & Maturity
* **Hyper-Growth / Turbulent (OpenClaw, Hermes Agent, CoPaw):** These projects have massive community engagement but are currently fighting architectural growing pains, context deadlocks, and regression bugs caused by rapid feature drops.
* **Rapidly Iterating / Stabilizing (NanoBot, IronClaw, LobsterAI, ZeroClaw):** These communities are highly active and mature, focusing heavily on architectural refactoring, security patching, and smoothing out UX friction across platforms. 
* **Niche / Maintenance (NanoClaw, PicoClaw, TinyClaw):** Lower volume but highly targeted PRs. These communities are focused on specific deployment environments (e.g., Windows CLI for TinyClaw, Android/Termux for PicoClaw) rather than broad ecosystem expansion.
* **Dormant:** *NullClaw, Moltis,* and *ZeptoClaw* show zero recent activity.

## 7. Trend Signals
Based on the aggregated community feedback, the following industry trends are highly relevant for AI agent developers:
1. **The Death of "YOLO" Mode:** As agents gain the ability to write files, execute scripts, and modify host systems via MCP, the community is forcefully rejecting unbounded auto-approvals. The future standard will be granular, per-platform permissions (e.g., *IronClaw's* per-gateway YOLO defaults) and containerized tool sandboxes.
2. **Distributed Agent Persistence:** Moving away from monolithic prompts, the industry is adopting "scroll" or "durable" context management (*CoPaw*). Append-only audit logs for agent reasoning (*OpenClaw*) will become standard to trace autonomous decision-making.
3. **Standardized Tooling Protocols:** The universal adoption of MCP is driving a need for decoupled, human-readable UI representations of tools while securely passing sanitized schemas to the LLM.
4. **"Fail Loudly, Not Silently":** Across nearly all projects, user satisfaction drops sharpest during silent failures (*OpenClaw* hangs, *IronClaw* masked errors). The next frontier in agent UX is transparent progress indicators and fast-fail mechanisms for degraded LLM providers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot based on the provided GitHub data.

# NanoBot Project Digest (2026-06-25)

## 1. Today's Overview
NanoBot is exhibiting exceptionally high development velocity and robust community engagement, processing 18 issues and 45 pull requests in the last 24 hours alone. The project is currently in an intense iteration phase focused on ecosystem expansion (adding new channels and providers) and user experience refinements, particularly for mobile and WebUI interfaces. However, this rapid pace has introduced notable regressions, specifically surrounding the recent Telegram Bot API 10.1 rich messages update. The high volume of community-submitted PRs (26 currently open) indicates a thriving contributor base eager to patch bugs and build integrations.

## 2. Releases
*No new releases were published in the last 24 hours. The project remains on the latest main branch, with active PRs currently queued for the next iteration.*

## 3. Project Progress
Development today was heavily skewed towards integrations, security enforcement, and UI fixes. Key advancements include:
*   **Messaging Integrations:** Mattermost channel support ([PR #4459](https://github.com/HKUDS/nanobot/pull/4459)) and cross-channel relay from the CLI agent to the gateway ([PR #4496](https://github.com/HKUDS/nanobot/pull/4496)) were introduced.
*   **WebUI/Mobile Enhancements:** Work progressed on PWA support and mobile sidebar swipe gestures ([PR #4494](https://github.com/HKUDS/nanobot/pull/4494)). A bug breaking multi-file `apply_patch` edits in the UI was fixed ([PR #4487](https://github.com/HKUDS/nanobot/pull/4487)).
*   **Security Hardening:** Maintainers and contributors addressed MCP (Model Context Protocol) vulnerabilities by properly enforcing `enabledTools` allowlists across resources and prompts ([PR #4436](https://github.com/HKUDS/nanobot/pull/4436), [PR #4452](https://github.com/HKUDS/nanobot/pull/4452)).
*   **Provider Support:** Added OpenCode Zen/Go ([Issue #4475](https://github.com/HKUDS/nanobot/issues/4475)) and Kimi Coding Plan ([PR #4464](https://github.com/HKUDS/nanobot/pull/4464)).

## 4. Community Hot Topics
*   **The "Lightweight" Architecture Debate:** The most highly-reacted issue of the day is an older but heavily updated one: [Issue #660](https://github.com/HKUDS/nanobot/issues/660) (+5 👍, 11 comments). The author challenges the project's core "ultra-lightweight" claim due to its reliance on both Python and Node.js, highlighting an ongoing architectural tension as the project scales.
*   **MCP Security Bypasses:** Security researcher YLChen-007 filed two critical advisories ([Issue #4434](https://github.com/HKUDS/nanobot/issues/4434), [Issue #4435](https://github.com/HKUDS/nanobot/issues/4435)) regarding the MCP `enabledTools` deny-all policy being bypassable. This immediately sparked active PRs to lock down MCP resource exposure.
*   **Voice Transcription Failures:** The implementation of Xiaomi MiMo ASR sparked discussion due to browser audio format incompatibilities, quickly leading to a community-submitted WebM-to-WAV conversion fix ([Issue #4492](https://github.com/HKUDS/nanobot/issues/4492)).

## 5. Bugs & Stability
Today's bug reports highlight that recent feature drops (specifically rich messaging and gateway updates) have introduced stability regressions. Ranked by severity:
1.  **[Security] MCP Policy Bypass** ([Issue #4434](https://github.com/HKUDS/nanobot/issues/4434)): `enabledTools: []` fails to prevent the model from accessing MCP resources and prompts. *Status: Fix actively being merged via [PR #4436](https://github.com/HKUDS/nanobot/pull/4436).*
2.  **[High] API Auth Guardrail Missing** ([Issue #4490](https://github.com/HKUDS/nanobot/issues/4490)): The OpenAI-compatible API server can be exposed to local networks without authentication, unlike the WS gateway.
3.  **[High] Session Poisoning via Duplicate IDs** ([Issue #4442](https://github.com/HKUDS/nanobot/issues/4442)): Streaming Anthropic responses can generate duplicate `tool_use` IDs, causing a 400 error that permanently breaks the agent session. *Status: Closed/Resolved.*
4.  **[Medium] Telegram Rich Message Regressions:** The new Bot API 10.1 update caused a wave of UI bugs. Messages appear empty ([Issue #4499](https://github.com/HKUDS/nanobot/issues/4499)), break line formatting ([Issue #4470](https://github.com/HKUDS/nanobot/issues/4470)), and are unsupported on Telegram Web/X ([Issue #4488](https://github.com/HKUDS/nanobot/issues/4488)). *Status: Multiple fix PRs submitted (e.g., [PR #4505](https://github.com/HKUDS/nanobot/pull/4505), [PR #4495](https://github.com/HKUDS/nanobot/pull/4495)).*
5.  **[Medium] Dream Cursor Bloat** ([Issue #4242](https://github.com/HKUDS/nanobot/issues/4242) via [PR #4481](https://github.com/HKUDS/nanobot/pull/4481)): Leaving the "Dream" feature disabled caused prompt bloat by failing to advance the history cursor.

## 6. Feature Requests & Roadmap Signals
Based on today's PRs and issues, the immediate roadmap signals point toward deeper external integration and local workflow organization:
*   **Granular Channel Feature Toggles:** Users want the ability to easily turn off problematic features (like Telegram rich messages) without downgrading versions ([PR #4495](https://github.com/HKUDS/nanobot/pull/4495)).
*   **Skill Organization:** A highly useful structural change allows users to organize skills into subdirectories ([PR #4504](https://github.com/HKUDS/nanobot/pull/4504)).
*   **Webhook Integrations:** Gateway-served inbound webhook triggers are being added, paving the way for external automation ([PR #4502](https://github.com/HKUDS/nanobot/pull/4502)).
*   **Workspace Memory Expansion:** Added support for localized "Dream" prompt overrides ([PR #4491](https://github.com/HKUDS/nanobot/pull/4491)) and a read-only search history tool ([PR #4439](https://github.com/HKUDS/nanobot/pull/4439)).

## 7. User Feedback Summary
Real-world user feedback shows a community that is heavily utilizing NanoBot across diverse platforms (iOS, Telegram, DingTalk, CLI). 
*   **Pain Points:** DingTalk enterprise users experienced timeouts and lost rich text formatting ([Issue #4497](https://github.com/HKUDS/nanobot/issues/4497)). iOS WebUI users reported frustrating automatic page zooming when tapping the chat input ([Issue #4388](https://github.com/HKUDS/nanobot/issues/4388)).
*   **Use Cases:** Users are actively building voice-enabled PWAs for mobile home screens, using NanoBot as a programmatic CLI bridge to channel messages, and relying on it for heavy multi-model routing (Kimi, Anthropic, VolcEngine).
*   **Satisfaction:** While there is minor frustration regarding recent Telegram regressions, user satisfaction is fundamentally high. The community is highly technical, often bypassing bug reports and immediately submitting high-quality, production-ready Pull Requests to fix the issues they encounter.

## 8. Backlog Watch
*   **Supply Chain Trust:** [Issue #4503](https://github.com/HKUDS/nanobot/issues/4503) requests adding an HVTracker trust badge to the README to signal open-source security health. Maintainers have not yet responded.
*   **DingTalk HTTP Timeouts:** [Issue #4497](https://github.com/HKUDS/nanobot/issues/4497) highlights `httpx.ConnectTimeout` errors on file sends. While a PR exists ([PR #4501](https://github.com/HKUDS/nanobot/pull/4501)), it needs maintainer review and merging as it impacts production reliability.
*   **Core Architecture Review:** The maintainers still need to formally address [Issue #660](https://github.com/HKUDS/nanobot/issues/660) regarding the Node.js/Python "bloat," as this directly contradicts the project's primary marketing tagline.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the structured project digest for Hermes Agent based on the GitHub data from 2026-06-25.

# Hermes Agent Project Digest — June 25, 2026

## 1. Today's Overview
The Hermes Agent project is experiencing a period of extremely high community engagement and active development, processing 50 issue updates and 50 PR updates in the last 24 hours alone. Maintainers and contributors are aggressively tackling technical debt, with a heavy focus today on expanding test coverage and resolving state isolation bugs across multi-platform gateways. While the open-source ecosystem around the agent continues to rapidly expand (adding new gateways, clients, and protocols), the project is showing signs of architectural growing pains, particularly regarding token overhead, context compression, and state management. 

## 2. Releases
No new releases were published today. The project remains on its latest version (v0.17.0).

## 3. Project Progress
Today’s merged/closed PRs and active contributions indicate a strong push toward system stability and code quality:
*   **Test Coverage Expansion:** A massive effort was made to harden the tooling ecosystem, with contributors (especially `Christopher-Schulze`) pushing PRs to achieve 75-100% test coverage on core modules like the FAL vision common module ([PR #52166](https://github.com/NousResearch/hermes-agent/pull/52166)), Managed Tool Gateway ([PR #52162](https://github.com/NousResearch/hermes-agent/pull/52162)), MCP OAuth Manager ([PR #52157](https://github.com/NousResearch/hermes-agent/pull/52157)), and File Sync ([PR #52154](https://github.com/NousResearch/hermes-agent/pull/52154)).
*   **Gateway & State Fixes:** Resolved profile isolation issues in the dashboard/gateway channel directories ([PR #52169](https://github.com/NousResearch/hermes-agent/pull/52169)) and fixed CLI command dispatching for `/whoami` and `/indicator` ([PR #52170](https://github.com/NousResearch/hermes-agent/pull/52170)). 

## 4. Community Hot Topics
The community is highly focused on optimizing agent efficiency and expanding integration capabilities:
*   **Token Overhead & Compression:** The most discussed issue by far is the massive fixed token overhead. Users report that 73% of API calls are fixed overhead due to bloated tool schemas ([Issue #4379](https://github.com/NousResearch/hermes-agent/issues/4379)), prompting a popular proposal for Lazy Tool Schema Loading ([Issue #6839](https://github.com/NousResearch/hermes-agent/issues/6839)). Another highly requested feature is granular tool output compression via Headroom-AI ([Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691)).
*   **Multi-Agent Orchestration:** There is strong demand (16+ 👍) to generalize the ACP (Agent Client Protocol) client, allowing Hermes to orchestrate external coding agents like Claude and Codex ([Issue #5257](https://github.com/NousResearch/hermes-agent/issues/5257)).

## 5. Bugs & Stability
Several critical (P1/P2) bugs impacting security, context, and stability were reported today. Fortunately, fix PRs are already emerging for several of them:

**Severity P1 (Critical)**
*   **Context Deadlock:** Hardcoded `MINIMUM_CONTEXT_LENGTH = 64_000` deadlocks auto-compression and causes infinite tool loops on high-context models like Gemini 3.5 Flash ([Issue #31600](https://github.com/NousResearch/hermes-agent/issues/31600)). 
*   **Credential Loss (Security Boundary):** The OpenAI-Codex credential pool can drop newly added credentials during `auth.json` rewrites ([Issue #19566](https://github.com/NousResearch/hermes-agent/issues/19566)). 
*   **Anthropic Compression Fail:** Context compression assigned the wrong role (`assistant` instead of `user`), causing HTTP 400 errors from Anthropic APIs. *Fix exists in [PR #52167](https://github.com/NousResearch/hermes-agent/pull/52167).*
*   **Memory Write Rejection:** A drift guard over-reach prevents the memory tool from appending new legitimate entries. *Fix proposed in [PR #42874](https://github.com/NousResearch/hermes-agent/pull/42874)).*

**Severity P2 (High)**
*   **Silent Data Corruption:** Secret redaction corrupts Python/Shell syntax in the terminal and `write_file` tools ([Issue #33801](https://github.com/NousResearch/hermes-agent/issues/33801)).
*   **Search Hanging:** The DuckDuckGo (`ddgs`) web search provider hangs indefinitely, blocking the entire agent loop. *Fix addressed in [Issue #36776](https://github.com/NousResearch/hermes-agent/issues/36776).*
*   **Telegram Flood Control Drops:** Telegram `sendRichMessage` ignores server retry headers and drops final responses ([Issue #46762](https://github.com/NousResearch/hermes-agent/issues/46762)).

## 6. Feature Requests & Roadmap Signals
*   **Per-Platform YOLO Defaults ([PR #52171](https://github.com/NousResearch/hermes-agent/pull/52171)):** Currently, auto-approvals (YOLO mode) are blunt. This PR introduces config-driven trust per gateway (e.g., trusting Discord but requiring manual approval on Telegram), which is highly anticipated for multi-gateway deployments.
*   **Vertex AI Provider Support ([PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427)):** Adding Google Vertex AI as a first-class provider for Gemini models via GCP service accounts, unlocking enterprise-grade model access.
*   **CLI Session Browser ([PR #52163](https://github.com/NousResearch/hermes-agent/pull/52163)):** Upgrading the classic CLI `/resume` command to use a navigable curses-based UI instead of a static table.

## 7. User Feedback Summary
**Satisfaction:** Users love the modular tooling, multi-platform gateway support, and local model hosting capabilities. 
**Pain Points:** The user experience is currently suffering from severe UI/state friction on mobile devices and desktop. Specifically, the xterm.js implementation prevents text selection and breaks mobile autocorrect ([Issue #50075](https://github.com/NousResearch/hermes-agent/issues/50075), [Issue #52110](https://github.com/NousResearch/hermes-agent/issues/52110)). Furthermore, desktop users are frustrated by broken core commands like `/learn` failing to trigger the LLM ([Issue #51829](https://github.com/NousResearch/hermes-agent/issues/51829)). Provider configuration is another sore spot, with users frustrated by failing Codex authorizations ([Issue #13834](https://github.com/NousResearch/hermes-agent/issues/13834)) and z.ai rate limits ([Issue #50663](https://github.com/NousResearch/hermes-agent/issues/50663)).

## 8. Backlog Watch
Maintainers need to address the following aging, high-impact issues that are bottlenecking the project:
*   **Tool Array Missing for Ollama ([Issue #32660](https://github.com/NousResearch/hermes-agent/issues/32660)):** Open since late May, this prevents local users from utilizing tools via custom Ollama endpoints. It is blocking local open-source model adoption.
*   **Telegram Channel Attachments Dropped ([Issue #52126](https://github.com/NousResearch/hermes-agent/issues/52126)):** A duplicate issue that still needs merging/resolution, preventing Hermes from ingesting documents sent to Telegram channels.
*   **Kanban DB Corruption ([Issue #34385](https://github.com/NousResearch/hermes-agent/issues/34385)):** Index corruption under concurrent WAL mode access. Long-running background agents heavily rely on the Kanban system, making this a critical stability threat.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the provided GitHub data.

# PicoClaw Project Digest — 2026-06-25

## 1. Today's Overview
PicoClaw is currently experiencing a highly active maintenance phase, heavily focused on hardening security and improving provider compatibility. In the last 24 hours, the project saw 22 total updates across issues and pull requests, indicating a strong, responsive development cadence. The team successfully triaged and closed a significant batch of 13 security and advisory issues, while simultaneously reviewing 8 open pull requests aimed at bug fixing and expanding gateway integrations. However, the repository has not seen a new formal software release recently, suggesting the project is accumulating changes for a future version bump.

## 2. Releases
*No new releases have been published in this reporting cycle.*

## 3. Project Progress
While no PRs were officially merged today, 8 open PRs saw active updates and reviews. Progress is centered around three main areas:
*   **Gateway & Connectivity Expansion:** Work is advancing on adding a DeltaChat gateway ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)) and implementing a remote Pico WebSocket mode ([PR #3118](https://github.com/sipeed/picoclaw/pull/3118)), which will significantly broaden the agent's deployment flexibility. 
*   **Lifecycle & State Management:** Core fixes to lifecycle signaling are underway to preserve `request_id` for queued messages ([PR #3116](https://github.com/sipeed/picoclaw/pull/3116)), and heartbeat turns are being optimized to prevent wasted token usage in draft-mode evolution ([PR #3169](https://github.com/sipeed/picoclaw/pull/3169)).
*   **Provider Compatibility:** Multiple fixes target the OpenAI-compatible provider layer, including recovering Volcengine Doubao Seed XML tool calls ([PR #3165](https://github.com/sipeed/picoclaw/pull/3165)), fixing build failures in structured logging ([PR #3166](https://github.com/sipeed/picoclaw/pull/3166)), and handling HTTP error response read failures ([PR #3168](https://github.com/sipeed/picoclaw/pull/3168)).

## 4. Community Hot Topics
*   **Streaming HTTP Requests ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)):** This remains the most engaged issue historically (13 comments, 1 upvote). The community strongly desires native support for sending streaming HTTP requests to LLM backends via config (`"streaming": true`), aligning PicoClaw's capabilities with standard Python OpenAI client behaviors.
*   **GUI Agents for Enterprise MVVM Architectures ([Issue #3167](https://github.com/sipeed/picoclaw/issues/3167)):** A developer testing PicoClaw's `PageAgent` in a Vue 2 + Element UI enterprise backend system raised questions about compatibility. This highlights a core user need: extending DOM-manipulation agents to correctly handle stateful, data-bound frontend frameworks where standard DOM interaction isn't enough to trigger underlying logic.

## 5. Bugs & Stability
*   **Severity High: Session History Corruption** — PicoClaw is misinterpreting base64 `data:` URLs inside plain text tool outputs (like logs or code from `exec`) as actual media attachments. Fix is pending in [PR #3115](https://github.com/sipeed/picoclaw/pull/3115).
*   **Severity High: Android/Termux Gateway Crash ([Issue #3164](https://github.com/sipeed/picoclaw/issues/3164)):** A critical bug in v0.2.9 where process hooks (JSON-RPC over stdio) crash the gateway within 2 seconds of startup on Android/Termux environments. *No fix PR is currently noted.*
*   **Severity Medium: Volcengine Doubao Seed Tool Leaks ([PR #3165](https://github.com/sipeed/picoclaw/pull/3165)):** Raw `<seed:tool_call>` XML blocks are leaking into user-visible content and streaming chunks when using certain OpenAI-compatible endpoints.
*   **Severity Medium: Unauthenticated Heartbeat Token Drain ([PR #3169](https://github.com/sipeed/picoclaw/pull/3169)):** Draft-mode evolution is unnecessarily spending tokens on periodic heartbeat checks. 

## 6. Feature Requests & Roadmap Signals
Based on recent issue tracker activity, the following features and architectural shifts are likely shaping the immediate roadmap:
*   **Advanced DOM/MVVM Framework Support:** Addressing the Vue 2 use case ([Issue #3167](https://github.com/sipeed/picoclaw/issues/3167)) signals a need for `PageAgent` to evolve beyond simple DOM scraping to interact with modern component internal states (`v-model`, watchers).
*   **Expanded Chat Platform Gateways:** The active development of DeltaChat ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063)) and fixes to LINE, WeCom, and Feishu webhooks show a clear trajectory toward making PicoClaw a universally connectable cross-platform assistant.
*   **Refined Tool Security Guardrails:** The sheer volume of closed security issues related to `exec`, `web_fetch`, and chat permissions suggests the next version will feature heavily fortified tool execution sandboxes.

## 7. User Feedback Summary
Real-world usage indicates a split between high enthusiasm for PicoClaw's flexibility and frustration with edge-case stability. On the positive side, users are successfully deploying the agent in complex enterprise environments (Vue 2 admin panels) and pushing it to run on mobile environments (Android/Termux). However, pain points heavily revolve around provider compatibility—specifically, handling non-standard OpenAI-compatible API responses (like Volcengine)—and infrastructure stability, such as gateway crashes when hooks fail to initialize on non-standard OS environments. 

## 8. Backlog Watch
*   **Native Streaming Support ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)):** Created in April, this highly requested feature remains a pain point for users wanting standard streaming behavior.
*   **Android/Termux Hook Crashes ([Issue #3164](https://github.com/sipeed/picoclaw/issues/3164)):** Currently open with no apparent fix PR. As edge-deployment (mobile/ARM) is a growing use case, this requires maintainer attention.
*   **WebSocket Configuration Reload Abuse ([Issue #3071](https://github.com/sipeed/picoclaw/issues/3071)):** While closed, it is part of a cluster of recent security advisories. Maintainers should ensure that the actual patch for preventing unauthorized `/reload` via WebSocket is thoroughly integrated into the main branch before the next release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw based on the provided GitHub data.

# NanoClaw Project Digest
**Date:** 2026-06-25

## 1. Today's Overview
NanoClaw is currently exhibiting a very high velocity of development, characterized by a massive volume of pull requests (17 updated) and minimal new bug reports (1 new issue). The contributor base is highly engaged in expanding platform integrations, notably advancing messaging channel capabilities (Telegram, Matrix) and Model Context Protocol (MCP) support. Furthermore, there is a strong, simultaneous focus on system hardening, with several substantial security patches and architectural refactors moving through the review pipeline. This ratio of enhancements to bug reports indicates a healthy, maturing project in an active feature expansion phase.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
While only 2 PRs were officially closed/merged today, 15 open PRs saw active updates, pushing several major features closer to completion:
*   **Security Patching:** [PR #2799](https://github.com/nanocoai/nanoclaw/pull/2799) was closed. This was a critical fix (CVE-2026-29611) that confined `send_file` reads to `/workspace` to prevent prompt-injected agents from reading sensitive host files. Other hardening PRs like [PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800) and [PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802) advanced in the pipeline.
*   **Messaging Adapters:** Significant progress on Matrix end-to-end encryption via [PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844) and expanded Telegram support via [PR #2853](https://github.com/nanocoai/nanoclaw/pull/2853).
*   **Tooling & Infrastructure:** Core architectural improvements are being reviewed, such as inert extension-point seams ([PR #2842](https://github.com/nanocoai/nanoclaw/pull/2842)) and support for remote HTTP/SSE MCP servers ([PR #2847](https://github.com/nanocoai/nanoclaw/pull/2847)).

## 4. Community Hot Topics
*   **Multi-Instance Telegram Bots:** The most notable community-driven feature today is the demand for running multiple Telegram bots from a single NanoClaw instance. 
    *   *Issue:* [nanocoai/nanoclaw Issue #2852](https://github.com/nanocoai/nanoclaw/issues/2852)
    *   *PR:* [nanocoai/nanoclaw PR #2853](https://github.com/nanocoai/nanoclaw/pull/2853)
    *   *Analysis:* User feedback indicates a previous version had this capability but it was removed in favor of "instance support," which users found unworkable. Contributor `grantland` immediately answered this by submitting a PR to allow discovery of suffixed tokens in `.env`, proving the community is highly responsive to integration gaps.

## 5. Bugs & Stability
No critical runtime crashes were reported as new issues today, but maintainers are actively addressing stability, race conditions, and architectural vulnerabilities:
1.  **HIGH: Container/Host Socket DoS & Directory Traversal:** 
    *   [PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802) fixes unbounded response buffers and infinite request timeouts in the `ncl` socket transport.
    *   [PR #2800](https://github.com/nanocoai/nanoclaw/pull/2800) fixes a directory traversal flaw in `ncl groups create` that bypassed earlier security validators.
2.  **MEDIUM: Database Journal Corruption:** 
    *   [PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750) fixes `outbound.db` READONLY handle failures where container SIGKILLs left stale journals, causing stuck ceilings.
3.  **LOW: Testing Flakiness:** 
    *   [PR #2851](https://github.com/nanocoai/nanoclaw/pull/2851) fixes abandoned poll loops in integration tests that were asynchronously "stealing" messages from subsequent test runs.

## 6. Feature Requests & Roadmap Signals
Based on the PR pipeline, the short-term roadmap is heavily focused on **interoperability, extensibility, and agent autonomy**:
*   **Advanced MCP Deployments:** Support for remote URL-based MCP servers ([PR #2847](https://github.com/nanocoai/nanoclaw/pull/2847)) and built-in MCP server name reservations ([PR #2842](https://github.com/nanocoai/nanoclaw/pull/2842)) signal a push toward more complex, distributed agent tool networks.
*   **Dynamic Skill Generation:** [PR #2843](https://github.com/nanocoai/nanoclaw/pull/2843) introduces a `/learn` skill, allowing the AI to autonomously distill reusable skills from URLs, directories, or past interactions.
*   **Docker-in-Docker for Agents:** [PR #2846](https://github.com/nanocoai/nanoclaw/pull/2846) enables containerized agents to utilize the host's Docker socket securely, pointing toward self-deploying or infrastructure-managing AI agents.

## 7. User Feedback Summary
*   **Pain Point - Integration Regression:** Users ([Issue #2852](https://github.com/nanocoai/nanoclaw/issues/2852)) are expressing frustration when features are abstracted or removed (like single-instance multi-bot support), finding the new architectural paradigms ("instance support") too complex to configure via LLMs like Claude.
*   **Pain Point - Message Routing:** The existence of [PR #2850](https://github.com/nanocoai/nanoclaw/pull/2850) (fixing missing `isMention` and `isGroup` on Signal inbound messages) reveals that users attempting to deploy agents in group chats are experiencing issues with ambient traffic interference.
*   **General Sentiment:** While there is minor friction with configuration paradigms, the user base demonstrates sophisticated, production-level usage (e.g., utilizing Docker-in-Docker, managing E2EE Matrix rooms, parameterized SQLite queries), indicating high satisfaction with NanoClaw's enterprise capabilities.

## 8. Backlog Watch
*   **[PR #2750](https://github.com/nanocoai/nanoclaw/pull/2750):** Open since June 12, this DB journal recovery PR addresses highly disruptive container kill scenarios. It touches core database file handling and requires urgent maintainer review to merge.
*   **[PR #2815](https://github.com/nanocoai/nanoclaw/pull/2815) / [PR #2801](https://github.com/nanocoai/nanoclaw/pull/2801):** Both address router parsing issues with primitive JSON payloads. They have been open for about a week. The maintainers should prioritize merging the regression-tested replacement ([PR #2815](https://github.com/nanocoai/nanoclaw/pull/2815)) to close this loop and harden untrusted router input.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the provided GitHub data.

### 1. Today's Overview
**2026-06-25** exhibits exceptionally high development velocity for the IronClaw project, with 43 pull requests updated and 19 issues touched in the last 24 hours. The team is deeply entrenched in a massive architectural overhaul, moving core systems like memory, HTTP kits, and capability lifecycles out of a monolithic structure into modular, provider-neutral crates. While feature development is rapid, the project is currently experiencing acute growing pains, specifically regarding tool approval workflows, WebUI stability, and third-party LLM provider resilience. High engagement from both core developers and the open-source community indicates a healthy, albeit currently turbulent, maturation phase.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Today's progress is defined by aggressive refactoring and immediate hotfixes for production-breaking bugs. 
*   **Architecture & Refactoring:** Major strides were made in breaking down the `ironclaw_reborn_composition` god-crate. PR [#5137](https://github.com/nearai/ironclaw/pull/5137) extracted the HTTP middleware kit, and PR [#5145](https://github.com/nearai/ironclaw/pull/5145) cleaned up the capability activity lifecycle.
*   **Memory Systems:** PR [#5163](https://github.com/nearai/ironclaw/pull/5163) successfully lifted the Reborn memory layer into a provider-neutral contract, advancing milestones tracked in Issue [#5201](https://github.com/nearai/ironclaw/issues/5201).
*   **Merged Fixes:** PR [#5193](https://github.com/nearai/ironclaw/pull/5193) restored green main by fixing duplicate CI workflow keys. PR [#5194](https://github.com/nearai/ironclaw/pull/5194) fixed a severe bug where cross-channel messaging (Slack to WebUI) caused session disconnects.
*   **Automations & UI:** Closed Issue [#5187](https://github.com/nearai/ironclaw/issues/5187) and merged PR [#5186](https://github.com/nearai/ironclaw/pull/5186), bringing localized settings labels and improved automation filters to the Reborn WebUI v2.

### 4. Community Hot Topics
*   **Context Management & Latency ([#5149](https://github.com/nearai/ironclaw/pull/5149)):** This XL PR addresses a massive pain point—sending ~25.8k tokens per tool call, which causes NEAR AI 120s timeouts. By introducing progressive tool disclosure, the community actively discusses how to drastically cut prompt bloat.
*   **Automations & Tool Permissions:** Users are highly focused on the newly introduced tool approval surface. Multiple active issues like [#5196](https://github.com/nearai/ironclaw/issues/5196) ("Ask each time" duplicate approvals) and [#5192](https://github.com/nearai/ironclaw/issues/5192) (Denying a tool still leads to requests) show that users are eagerly trying to use Reborn for recurring automated tasks but are hitting UX friction.
*   **Multi-tenancy ([#5179](https://github.com/nearai/ironclaw/issues/5179)):** Hosted users are frustrated that multi-tenancy breaks access to Web UI logs, which is actively being addressed by maintainers in PR [#5199](https://github.com/nearai/ironclaw/pull/5199).

### 5. Bugs & Stability
Ranked by severity:
1.  **Critical: Agent Hangs from Degraded LLM Providers:** When NEAR AI or cloud providers degrade, the agent wedges for 30+ minutes retrying. This ground the hosted instance to a halt. **Fix:** PR [#5203](https://github.com/nearai/ironclaw/pull/5203) introduces a fast-fail mechanism.
2.  **Critical: Prompt-Safety False Positives ([#5169](https://github.com/nearai/ironclaw/issues/5169)):** The model-safety vocabulary denylist trips over standard API vocabulary (e.g., "Bearer", "API key") inside bundled skills, causing benign requests to fail under misleading "temporary system issue" errors.
3.  **High: Automations Wedged by Approvals ([#4986](https://github.com/nearai/ironclaw/issues/4986)):** Recurring automations can become permanently blocked if they silently wait for tool approval. **Fix:** PR [#5202](https://github.com/nearai/ironclaw/pull/5202) fixes the trigger poller hang.
4.  **High: Token Save Failures in WebUI ([#5180](https://github.com/nearai/ironclaw/pull/5180)):** Pasting fresh credentials into the Reborn runtime auth gate fails silently without sending a network request.
5.  **Medium: Subagent Spawn Failures ([#5170](https://github.com/nearai/ironclaw/pull/5170)):** Subagent tasks/handoffs fail validation. **Fix:** Actively being addressed in an open XL PR.

### 6. Feature Requests & Roadmap Signals
Based on today's issue tracker, the immediate roadmap is heavily focused on **Enterprise Readiness and Observability**.
*   **Hosted Observability ([#5182](https://github.com/nearai/ironclaw/issues/5182)):** A strong request to extract meaningful failure diagnostics directly from the CLI/binary, rather than forcing operators to scrape process logs manually.
*   **GitHub Bug-Fix Workflows ([#5134](https://github.com/nearai/ironclaw/pull/5134)):** Design docs were added today for an MVP that will allow IronClaw Reborn to autonomously process and fix GitHub bugs.
*   **WebUI Lifecycles & UI Polish:** Features like local service lifecycle backends ([#4860](https://github.com/nearai/ironclaw/pull/4860)), global auto-approve settings surfaces ([#5068](https://github.com/nearai/ironclaw/pull/5068)), and fully responsive sidebars ([#5188](https://github.com/nearai/ironclaw/issues/5188)) signal an upcoming major release focused heavily on self-service, local-first UI maturity.

### 7. User Feedback Summary
Real-world users are excited about Reborn's capabilities—specifically using the Web UI for monitoring, automations, and multi-channel handoffs (Slack/Web UI). However, **dissatisfaction is currently centered on error opacity and loop trapping**. Users report that when the agent fails (e.g., invalid UI bearer tokens [#5190](https://github.com/nearai/ironclaw/issues/5190), or disabled tools [#5197](https://github.com/nearai/ironclaw/issues/5197)), the UI hangs silently or the agent attempts illogical workarounds instead of reporting the error. There is a clear, urgent demand from the community for the agent to "fail gracefully and loudly" rather than masking errors as temporary system issues.

### 8. Backlog Watch
*   **[Issue #4108](https://github.com/nearai/ironclaw/issues/4108) - Nightly E2E failed:** Created on May 27th and updated today. This signals a nearly month-long struggle with End-to-End test stability that needs overarching attention.
*   **[PR #4002](https://github.com/nearai/ironclaw/pull/4002) - Dependabot bump:** A massive dependencies update (16 actions updated) sitting in the backlog since May 24th. Large dependency bumps can introduce subtle breaking changes and need to be validated and merged to prevent security debt.
*   **[Issue #4986](https://github.com/nearai/ironclaw/issues/4986) - Automation blocked by tool approval:** Open since June 16th, this critical user-flow bug is only just receiving a fix in [#5202](https://github.com/nearai/ironclaw/pull/5202), highlighting a need for faster triage on automation-blocking issues.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the provided GitHub data.

# LobsterAI Project Digest - 2026-06-25

## 1. Today's Overview
LobsterAI is currently demonstrating extremely high development velocity and robust project health, characterized by the merging of a massive backlog of 41 Pull Requests in the last 24 hours. The engineering team is heavily focused on enhancing the stability of the "OpenClaw" gateway, optimizing token usage, and improving multi-platform integration (specifically Windows and macOS). While the development side is highly active, community issue reporting remains steady, with maintainers successfully triaging and resolving long-standing bugs.

## 2. Releases
**None.** 
No new official releases were published in the last 24 hours. However, the massive influx of merged PRs indicates that a substantial consolidated release is likely being staged for the near future.

## 3. Project Progress
Development has heavily advanced across core architecture, agent loops, and integrations. A massive batch of 41 PRs was closed/merged, primarily driven by maintainers `fisherdaddy` and `liuzhq1986`. Key areas of progress include:
*   **Gateway & Architecture Stabilization (OpenClaw):** Unified the gateway launch path across macOS, Linux, and Windows to prevent Electron node spawn issues ([PR #2195](https://github.com/netease-youdao/LobsterAI/pull/2195), [PR #2196](https://github.com/netease-youdao/LobsterAI/pull/2196)). Addressed gateway restarts triggered by GitHub Copilot token refreshes ([PR #2043](https://github.com/netease-youdao/LobsterAI/pull/2043)).
*   **Cost & Loop Management:** Fixed critical issues where aborted tool loops burned idle tokens ([PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049)) and refined the tool loop breaker ([PR #2051](https://github.com/netease-youdao/LobsterAI/pull/2051)).
*   **Collaboration & Chat UX:** Resolved session freezing issues ([PR #2047](https://github.com/netease-youdao/LobsterAI/pull/2047)), prevented subagent cleanup from blocking on hook failures ([PR #2044](https://github.com/netease-youdao/LobsterAI/pull/2044)), and improved streaming output filtering ([PR #2048](https://github.com/netease-youdao/LobsterAI/pull/2048)).
*   **Model Support & UI:** Added MiniMax m3 and mimo v2.5 models, updated BYOK (Bring Your Own Key) context windows ([PR #2089](https://github.com/netease-youdao/LobsterAI/pull/2089), [PR #2102](https://github.com/netease-youdao/LobsterAI/pull/2102)), and updated the model selection UI ([PR #2053](https://github.com/netease-youdao/LobsterAI/pull/2053)).
*   **Platform & Integrations:** Replaced deprecated VBScript launchers with hidden PowerShell for Windows app updates ([PR #2057](https://github.com/netease-youdao/LobsterAI/pull/2057)) and patched WeChat bugs during updates/reinstalls ([PR #2086](https://github.com/netease-youdao/LobsterAI/pull/2086)).

## 4. Community Hot Topics
*   **[Issue #1394](https://github.com/netease-youdao/LobsterAI/issues/1394) - Scheduled Task Deletion Bug:** This is the most notable community issue updated today. A user reported that scheduled tasks set to "run only once" are automatically and permanently deleted post-execution. 
    *   *Analysis:* Users expect one-off tasks to remain in their history so they can be edited and reused later. This reveals a core design philosophy mismatch: users treat scheduled tasks as reusable templates rather than disposable scripts.

## 5. Bugs & Stability
Ranked by severity based on today's PR activity:
1.  **[Critical] Idle Token Burn:** Aborted tool loops were continuously burning tokens without terminating. Resolved in [PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049).
2.  **[High] Gateway Node Spawn Errors:** Nested Electron child invocations were interpreting Node arguments as app paths, causing startup failures on Windows/macOS. Fixed in [PR #2195](https://github.com/netease-youdao/LobsterAI/pull/2195).
3.  **[High] Session Freezing:** Collaboration/chat sessions were freezing due to large tool results blocking the thread. Mitigated in [PR #2047](https://github.com/netease-youdao/LobsterAI/pull/2047) and [PR #2058](https://github.com/netease-youdao/LobsterAI/pull/2058).
4.  **[Medium] Copilot Token Refresh Crash:** Gateway crashes occurring during GitHub Copilot token refreshes. Fixed in [PR #2043](https://github.com/netease-youdao/LobsterAI/pull/2043).
5.  **[Medium] Scheduled Task Deletion:** (See Issue #1394 above) - Unintended data loss of task configurations.

## 6. Feature Requests & Roadmap Signals
While no explicit feature requests were logged in the latest issues, the merged PR codebase provides strong roadmap signals:
*   **Deeper IM Ecosystem Integration:** The patching of WeChat bugs ([PR #2086](https://github.com/netease-youdao/LobsterAI/pull/2086)) and refinement of IM reply assemblies ([PR #2063](https://github.com/netease-youdao/LobsterAI/pull/2063)) indicate that LobsterAI is positioning itself strongly as an autonomous agent for social/messaging platforms.
*   **Expandable BYOK (Bring Your Own Key) Architecture:** Rapid additions of diverse models like MiniMax m3 and mimo v2.5, alongside user-configurable context windows, suggest the next version will offer highly flexible, user-defined LLM backend configurations.

## 7. User Feedback Summary
Real user feedback today highlights a desire for **persistence and reusability**. Users are leveraging LobsterAI for complex automation (like scheduled tasks) and are frustrated when the system treats components as ephemeral. Overall, users are pushing the limits of the OpenClaw gateway and multi-agent collaboration features, validating the maintainers' intense recent focus on hardening these specific subsystems.

## 8. Backlog Watch
*   **[Issue #1394](https://github.com/netease-youdao/LobsterAI/issues/1394):** This issue has been marked `[stale]`. It was created in April and updated yesterday. Because it represents a UX pain point that results in the loss of user configurations, maintainers should address it directly rather than letting it auto-close. It requires either a UI change (e.g., a "Save Task as Template" button) or a backend adjustment to disable auto-deletion.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

Here is the structured project digest for TinyClaw (TinyAGI) based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-25, the TinyClaw (TinyAGI) project exhibits low-volume but highly targeted maintenance activity. With zero issues opened and zero new releases in the past 24 hours, the project is currently in a stable monitoring phase rather than active feature development. The repository saw one successful code merge, indicating that maintainers are actively reviewing and accepting community contributions to improve platform compatibility. Overall project health appears steady, with current efforts squarely focused on environment stability and bug resolution rather than expanding the feature set.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
The primary advancement for the project is the successful closure and merging of a key cross-platform compatibility update. 
*   **Windows CLI Support Fixed:** [PR #281](https://github.com/TinyAGI/tinyagi/pull/281) (`fix: Windows cross-platform support in CLI`) was closed and merged. Authored by `mperkins0155`, this PR resolves three critical bugs that previously prevented the `tinyagi` CLI tool from executing on native Windows environments. This update advances the project's platform accessibility, ensuring Node.js path resolutions and module loading work correctly outside of Unix-like systems.

### 4. Community Hot Topics
*With 0 open or active issues reported in the last 24 hours, there are no active discussion threads or hot topics in the issue tracker.* 
However, the recent merging of [PR #281](https://github.com/TinyAGI/tinyagi/pull/281) highlights a underlying community need for robust native Windows support. Contributors are actively ensuring the framework functions seamlessly without requiring Windows users to rely on WSL (Windows Subsystem for Linux).

### 5. Bugs & Stability
*No new bugs or regressions were reported today.* 
However, a previously patched high-severity bug is worth noting for stability tracking:
*   **[Resolved] `MODULE_NOT_FOUND` Crash on Windows:** (Severity: High). Native Windows users were experiencing complete CLI failure due to a Node.js path resolution bug (`/C:/Users/...` doubled drive letters). A successful fix for this was merged today via [PR #281](https://github.com/TinyAGI/tinyagi/pull/281).

### 6. Feature Requests & Roadmap Signals
*There are no new feature requests or explicit roadmap signals to report from the issue tracker today.* 
Given the current trajectory of recent maintenance PRs, it is highly likely that the next versioned release will be a patch update (e.g., v[x.y.z]) heavily focused on cross-platform stabilization and developer experience (DX) improvements.

### 7. User Feedback Summary
Current user feedback, inferred from recent pull request activity, points to a pain point regarding out-of-the-box usability for Windows developers. The fact that a community member (`mperkins0155`) took the initiative to patch three separate Windows-only bugs indicates a segment of users actively trying to deploy TinyAGI in native Windows environments. The swift acceptance of this PR suggests that maintainers are responsive to these pain points and prioritize universal compatibility.

### 8. Backlog Watch
*There are no long-unanswered issues or stalled pull requests requiring immediate maintainer attention.* The issue tracker is currently clear of pending items.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest
**Date:** 2026-06-25
**Repository:** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

### 1. Today's Overview
CoPaw (QwenPaw) is exhibiting **extremely high active development velocity**, driven primarily by the ongoing migration to AgentScope 2.0. In the last 24 hours, the project processed 50 PRs (44 currently open) and 23 issues. A significant portion of today's PRs are surgical fixes aimed at restoring frontend rendering, CLI commands, and context handling that regressed during the 2.0 migration. Community engagement is very healthy, with users actively stress-testing custom model providers, plugins, and the new Terminal UI (TUI) integrations.

### 2. Releases
**None.** No new stable or beta versions were cut in the last 24 hours. The project is highly focused on merging patchwaves for the 2.0 migration.

### 3. Project Progress
The primary technical theme today is **AgentScope 2.0 compatibility and frontend stabilization**. Key advancements include:
*   **Streaming & Event Translation:** [PR #5495](https://github.com/agentscope-ai/QwenPaw/pull/5495) aligns the SSE envelope event translation with the v1 streaming protocol to fix broken tool call rendering in the frontend.
*   **Token & Context Restoration:** [PR #5493](https://github.com/agentscope-ai/QwenPaw/pull/5493) restores the per-turn token/context usage ring & popover that broke during the 2.0 migration.
*   **TUI & Desktop Enhancements:** [PR #5443](https://github.com/agentscope-ai/QwenPaw/pull/5443) restores ACP-backed TUI commands (`/clear`, `/compact`), while [PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669) introduces a Tauri auto-updater for the desktop app.
*   **Context Management Strategy:** [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) proposes a "scroll" context-management strategy using a durable SQLite store to replace native compression.

### 4. Community Hot Topics
*   **Custom Provider Function Calling** ([Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)): 8 comments. Users are eager to use OpenAI-compatible local providers (like OMLX) but are hitting walls where tool calling defaults to text generation. *Underlying need: Seamless integration of local, custom, and open-source models without losing agentic capabilities.*
*   **Dynamic Context Timestamping** ([Issue #5455](https://github.com/agentscope-ai/QwenPaw/issues/5455) & [PR #5499](https://github.com/agentscope-ai/QwenPaw/pull/5499)): 3 comments. A discussion on optimizing prompt caching by moving the current date/time from the static environment context to a per-user-message dynamic prefix.
*   **Memory Optimization** ([Issue #5441](https://github.com/agentscope-ai/QwenPaw/issues/5441)): 3 comments. Users report baseline memory usage sits at 1.4GB immediately upon startup. *Underlying need: CoPaw needs to be lightweight enough to run continuously in the background on standard desktop machines.*

### 5. Bugs & Stability
Today's bug reports highlight critical frontend crashes and provider incompatibilities. *Note: Active fix PRs are already pending for the top issues.*
*   **[Critical] Frontend Crashes on Large Sessions** ([Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479)): Web Console completely fails to render and throws an "unexpected error" for session files >500KB.
*   **[Critical] Console Data Block Parsing** ([Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)): Console crashes when opening large tool-use histories because the backend converts `tool_use` to generic `type: "data"`, which the frontend ignores. *(Fix in progress via [PR #5495](https://github.com/agentscope-ai/QwenPaw/pull/5495))*
*   **[High] Kimi/GLM Provider Schema Failures** ([Issue #5472](https://github.com/agentscope-ai/QwenPaw/issues/5472)): Using GLM-5.x via OpenCode Go fails due to `json_schema_converter.cc` failing on `$defs`. *(Fix in progress via [PR #5496](https://github.com/agentscope-ai/QwenPaw/pull/5496))*
*   **[High] Shell Execution Parsing** ([Issue #5373](https://github.com/agentscope-ai/QwenPaw/issues/5373)): The `execute_shell_command` tool fails to parse standard shell syntax (pipes, redirection, logical operators).

### 6. Feature Requests & Roadmap Signals
*   **Plugin Ecosystem Expansion:** [PR #5492](https://github.com/agentscope-ai/QwenPaw/pull/5492) / [Issue #5484](https://github.com/agentscope-ai/QwenPaw/issues/5484) requests standardizing plugin installs by allowing users to `pip install` plugins directly from PyPI using Python entry points.
*   **Advanced Model Support:** [Issue #5427](https://github.com/agentscope-ai/QwenPaw/issues/5427) requests native configuration support for Kimi K2 Code (using the Anthropic-compatible endpoint format).
*   **MCP UI Refinements:** [Issue #5231](https://github.com/agentscope-ai/QwenPaw/issues/5231) requests decoupling MCP tool names (showing human-readable names in the UI while passing sanitized names to the model). *(Actively being addressed in [PR #5485](https://github.com/agentscope-ai/QwenPaw/pull/5485))*

### 7. User Feedback Summary
**Pain Points:** Desktop and power-users are experiencing friction with memory leaks (1.4GB idle), frontend CSS/layout errors requiring tab-switching to fix ([Issue #5480](https://github.com/agentscope-ai/QwenPaw/issues/5480)), and mobile app feature disparities (inability to switch agents on mobile, [Issue #5476](https://github.com/agentscope-ai/QwenPaw/issues/5476)). Enterprise users also noted cross-channel routing bugs, such as Feishu (Lark) group replies accidentally routing to private chats ([Issue #5264](https://github.com/agentscope-ai/QwenPaw/issues/5264)).
**Satisfaction:** Despite migration bugs, the community is highly engaged. First-time contributors are actively submitting major features (e.g., context managers, pip plugin support), indicating strong developer buy-in and satisfaction with the project's architecture.

### 8. Backlog Watch
*   **[PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321)**: A first-time contributor's massive PR adding a "scroll" durable SQLite context manager. It has been open since June 19th and needs architectural review from core maintainers to avoid being blocked.
*   **[PR #5210](https://github.com/agentscope-ai/QwenPaw/pull/5210)**: Open since June 15th, adds `cron update` capabilities to the CLI. Functional but awaiting merge.
*   **[Issue #5015](https://github.com/agentscope-ai/QwenPaw/issues/5015)**: Users report long-running frontend performance issues on Windows (high CPU during task execution). Closed but reflects ongoing perf concerns also seen in today's memory reports.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the structured project digest for ZeroClaw based on the provided GitHub data.

# ZeroClaw Project Digest — 2026-06-25

## 1. Today's Overview
ZeroClaw is experiencing highly active development, evidenced by 50 updated issues and 50 updated PRs in the last 24 hours, alongside a massive cluster of new regression tests. The project's current focus is heavily bifurcated between fortifying supply chain/security boundaries and expanding agentic capabilities (like WASM plugins and skill creation). Activity is currently heavily biased towards open work, with a high 44 active issues and 46 open PRs, indicating rapid feature iteration but a potential review bottleneck. 

## 2. Releases
*No new releases were recorded in this reporting period.*

## 3. Project Progress
Development today was characterized by a surge in regression testing and infrastructure enhancements:
*   **Test Coverage Surge:** Contributor `llagy009` opened ~10 new PRs focused purely on locking down pure-logic boundaries. These include tests for config path normalization ([#8292](https://github.com/zeroclaw-labs/zeroclaw/pull/8292)), memory timestamp decay clamps ([#8297](https://github.com/zeroclaw-labs/zeroclaw/pull/8297)), VAD empty input handling ([#8296](https://github.com/zeroclaw-labs/zeroclaw/pull/8296)), and domain normalization ([#8293](https://github.com/zeroclaw-labs/zeroclaw/pull/8293)).
*   **Agentic Capabilities:** Progress on autonomous skill creation via reflection ([PR #8261](https://github.com/zeroclaw-labs/zeroclaw/pull/8261)) and the initial WASM component-model plugin host code ([PR #7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928)).
*   **UI & Observability:** Keybinding and action dispatch unification in the TUI ([PR #8282](https://github.com/zeroclaw-labs/zeroclaw/pull/8282)) and critical fixes for telemetry data loss during one-shot CLI executions ([PR #8146](https://github.com/zeroclaw-labs/zeroclaw/pull/8146)).
*   **Closed Work:** PR [#7747](https://github.com/zeroclaw-labs/zeroclaw/pull/7747) was closed, aiming to enforce per-agent MCP server scoping.

## 4. Community Hot Topics
*   **Multi-Tenant Security & RBAC:** The most discussed issue is [Issue #5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (9 comments), requesting per-sender Role-Based Access Control (RBAC). This highlights a strong enterprise/community need to run a single ZeroClaw instance for multiple user classes without cross-contamination of tools and system prompts.
*   **Pluggable Authentication:** [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (6 comments) tracks OIDC Authentication Provider support. This is a foundational architecture shift that will enable more robust, enterprise-grade deployments.
*   **Skill Discovery:** [Issue #6289](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) (5 comments) discusses prompt-triggered install suggestions. Users want the agent to autonomously recognize when a capability is missing and suggest the relevant plugin, reducing manual configuration friction.

## 5. Bugs & Stability
*   **[S1 - Workflow Blocked]** Deferred image attachments in cached history ([Issue #8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151)): In channels like Matrix, if an image isn't processed immediately, the bot later denies seeing it, breaking multimodal workflows.
*   **[S0/S2 - High Risk]** Per-sender authorization bypass for models ([Issue #8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044)): The `/model --agent` command currently allows any sender to change the effective model for *all* users, representing a significant security and cost-control vulnerability.
*   **[S2 - Degraded]** Silent failure of `mcp_bundles` scoping ([Issue #7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733) & [PR #8305](https://github.com/zeroclaw-labs/zeroclaw/pull/8305)): MCP server tool isolation is currently a silent no-op. Agents have access to all tools regardless of configuration. 
*   **[High Risk]** Orphaned processes ([Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)): Enabling `heartbeat.enabled` causes stdio MCP child processes to leak heavily (one per tick), which will eventually exhaust host OS resources.

## 6. Feature Requests & Roadmap Signals
*   **Goal Mode for Autonomous Work:** [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) proposes a "durable mode" allowing an agent to pursue a single objective continuously until completion or budget exhaustion.
*   **Advanced Channel Features:** Requests for Telegram webhooks ([Issue #8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)) to move away from long-polling, and DingTalk streaming message support ([Issue #8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)) to reduce latency.
*   **Out-of-Band Approvals:** [PR #8304](https://github.com/zeroclaw-labs/zeroclaw/pull/8304) introduces an SOP (Standard Operating Procedure) approval plane with fail-closed timeouts, signaling a push towards safer, production-ready autonomous workflows.

**Roadmap Prediction:** The next version (v0.8.3/v0.9.0) will heavily feature the **OIDC/pluggable Auth Provider architecture**, **WASM tooling/hybrid skills**, and fixes for the **multi-tenant MCP/Agent isolation** bugs.

## 7. User Feedback Summary
Users are pushing ZeroClaw into multi-user, production environments, which is exposing the limits of its single-tenant roots. Pain points primarily revolve around **cost tracking** (with models silently falling back to $0.0 cost in [PR #8233](https://github.com/zeroclaw-labs/zeroclaw/pull/8233)) and **security isolation** (users wanting strict boundaries between agents and MCP tools). There is also slight friction with the "YOLO/unbounded" default quickstart profile ([Issue #8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125)), which some users find too permissive or surprising. Overall satisfaction is high, driven by the rapid expansion of the skills/plugins ecosystem.

## 8. Backlog Watch
*   **Supply Chain RFCs Needing Review:** [Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) (Hardware PGP, SLSA provenance) and [Issue #8058](https://github.com/zeroclaw-labs/zeroclaw/issues/8058) (Cosign signing) are critical for enterprise trust but are sitting in `needs-maintainer-review`.
*   **Cron Pre-Hook Gating:** [Issue #5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607), opened in April, remains `status:blocked`. It requests a lightweight pre-hook to cleanly skip cron jobs based on external conditions, a crucial feature for efficient autonomous scheduling.
*   **Delegate Tool API Bleed:** [Issue #7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) highlights that delegating to an OAuth-based sub-agent still fails because the coordinator forwards its own API key instead of using the resolved auth context.

</details>