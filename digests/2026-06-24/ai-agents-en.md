# OpenClaw Ecosystem Digest 2026-06-24

> Issues: 190 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-23 22:22 UTC

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

# OpenClaw Project Digest (2026-06-24)

## 1. Today's Overview
OpenClaw is currently experiencing a phase of hyper-active development and community engagement, driven largely by the rollout and stabilization of the 2026.6.x series. The project saw a massive influx of activity in the last 24 hours, with 190 issues updated (139 active) and an impressive 500 PRs updated. However, only 34 PRs were merged/closed compared to 466 left open, suggesting a significant review bottleneck or a deliberate merge freeze as maintainers process the complex migration to new SQLite-based session state and transcript architectures. The overall project health remains strong but is currently strained under the weight of provider compatibility regressions and edge-case session-locking bugs.

## 2. Releases
No new releases were recorded today. The project continues to stabilize from the 2026.6.x rollout.

## 3. Project Progress
While no new versions were cut, active merging and foundational work focused on reliability and architectural refactoring:
*   **Session State Migration:** Progress on [Issue #88838](https://github.com/openclaw/openclaw/issues/88838) continues via [PR #96206](https://github.com/openclaw/openclaw/pull/96206), routing live model fresh reads through the new session accessor seam to prepare for SQLite-backed transcripts.
*   **ACP & Task Reconciliation:** Merged fixes addressed stale subagent tasks when backing CLI child processes terminate ([PR #92454](https://github.com/openclaw/openclaw/pull/92454)) and terminal session recovery for inbound turns ([PR #89045](https://github.com/openclaw/openclaw/pull/89045)).
*   **Memory Promotions:** Fixes landed to prove live manager recovery after CLI reindex ([PR #96094](https://github.com/openclaw/openclaw/pull/96094)) and ensure proper QMD embedding scheduling during lexical searches ([PR #96092](https://github.com/openclaw/openclaw/pull/96092)).

## 4. Community Hot Topics
*   **SQLite Foundation & State Architecture:** [Issue #88838](https://github.com/openclaw/openclaw/issues/88838) remains the focal point of maintainer discussion (50 comments). The community is heavily invested in how the 3.2 SQLite foundation will stabilize transcript lookups.
*   **iMessage Latency:** [Issue #96148](https://github.com/openclaw/openclaw/issues/96148) (14 comments) sparked discussion around source-reply latency instrumentation, indicating a strong user demand for tighter Apple ecosystem performance metrics.
*   **MathJax/LaTeX Support:** [Issue #42840](https://github.com/openclaw/openclaw/issues/42840) (8 comments, 7 👍) shows high community demand for mathematical formula rendering directly within the OpenClaw Control UI.
*   **Cron Global Contamination:** [Issue #90991](https://github.com/openclaw/openclaw/issues/90991) (14 comments) brought users together to discuss transient system-wide overloads caused by cron scheduled triggers contaminating global runtime state.

## 5. Bugs & Stability
*   **🚨 P1 - Compaction Timeout Crashes:** [Issue #92043](https://github.com/openclaw/openclaw/issues/92043) reveals that a new 180s compaction timeout wall-clock creates crash loops for legitimately long compactions, with no partial-progress reuse. 
*   **🚨 P1 - Anthropic Signature Invalidation:** [Issue #92201](https://github.com/openclaw/openclaw/issues/92201) and [Issue #94228](https://github.com/openclaw/openclaw/issues/94228) show that freshly streamed `thinking` blocks are intermittently invalid on replay for Anthropic models, bricking long tool-use threads because generic error text bypasses the recovery wrapper.
*   **🚨 P1 - Subagent Session Locks:** [Issue #95833](https://github.com/openclaw/openclaw/issues/95833) reports that subagent abort-settle fails to release `.jsonl.lock`, permanently breaking the session.
*   **🚨 P2 - DeepSeek Incomplete Turns:** [Issue #88657](https://github.com/openclaw/openclaw/issues/88657) highlights message loss and payload drops with DeepSeek V4 Flash in versions 2026.5.27/28.

## 6. Feature Requests & Roadmap Signals
*   **Workspace Disk Health Probes:** Targeting Kubernetes deployments, [PR #96090](https://github.com/openclaw/openclaw/pull/96090) and [PR #96089](https://github.com/openclaw/openclaw/pull/96089) introduce ENOSPC detection in the `/readyz` health probe.
*   **MCP Apps UI Support:** [PR #69039](https://github.com/openclaw/openclaw/pull/69039) signals a roadmap push to support MCP Apps UI metadata, transforming trusted MCP servers into richer tool providers with purpose-built UIs.
*   **AWS Services Plugin:** [PR #90792](https://github.com/openclaw/openclaw/pull/90792) proposes a unified Amazon plugin bundling Polly (TTS), Transcribe (STT), and Nova Sonic (realtime voice).
*   **Workboard API Upgrades:** [Issue #92314](https://github.com/openclaw/openclaw/issues/92314) requests a delete/remove lifecycle action for Workboard cards, pointing to evolution in internal agent tooling.

## 7. User Feedback Summary
Users are actively pushing OpenClaw into complex, multi-provider production environments, which is exposing sharp edges in state management. There is notable frustration regarding prompt-cache churn ([Issue #95610](https://github.com/openclaw/openclaw/issues/95610)) and broken cache prefixes following the 6.x upgrade for OpenAI and DeepSeek models. Windows users are particularly impacted by hard failures, such as the `spawn EINVAL` bug in the ACPX runtime ([Issue #93465](https://github.com/openclaw/openclaw/issues/93465)) and native `sqlite-vec` loading issues requiring manual suffix renaming ([PR #69059](https://github.com/openclaw/openclaw/pull/69059)). However, satisfaction remains high regarding the project's extensibility, evidenced by rich feature requests for channel-specific handoffs (Telegram, Mattermost) and deep integrations.

## 8. Backlog Watch
*   **Windows Shell Override:** [Issue #49931](https://github.com/openclaw/openclaw/issues/49931) (Open since Mar 2026) - Users are frustrated by the hardcoded PowerShell execution on Windows, requesting `tools.exec.shell` overrides to bypass painful quoting rules.
*   **Cross-Backend Context:** [Issue #79047](https://github.com/openclaw/openclaw/issues/79047) (Open since May 2026) - Highlighting a significant architectural limitation where switching agent models across backends drops conversation context entirely.
*   **Agent Scheduling API:** [Issue #71712](https://github.com/openclaw/openclaw/issues/71712) (Open since Apr 2026) - An RFC proposing non-forgeable provenance for agents to securely create their own recurring cron jobs at runtime. Needs product decisions.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the 2026-06-24 community digests.

# Cross-Project Analysis: Open-Source AI Agent Ecosystem (2026-06-24)

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a phase of aggressive hyper-growth, transitioning from simple conversational interfaces to complex, multi-channel, and multimodal autonomous systems. Projects are rapidly iterating to support enterprise-grade features, including background scheduling (cron), cross-platform messaging integrations (Slack, Telegram, QQ, iMessage), and multi-agent orchestration (ACP/MCP protocols). However, this rapid velocity is exposing significant growing pains across the board: state management architectures are buckling under multi-turn complexity, and provider-agnostic token caching is emerging as a critical bottleneck. The overarching industry trajectory is a shift from reactive chatbots to deeply integrated, continuously running background agents operating across heterogeneous LLM environments.

## 2. Activity Comparison
*Health Score is calculated based on issue triage rate, PR merge velocity, and severity of open critical bugs.*

| Project | Issues (24h) | PRs (24h) | Recent Release Status | Health Score | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 190 | 500 | Stabilizing (2026.6.x) | 🟡 Moderate (Strained) | Massive activity, but PR review bottleneck (34/500 merged) and several P1 bugs. |
| **NanoBot** | 11 | 39 | Released v0.2.2 | 🟢 High | Rapid stabilization following major release; 21 new contributors. |
| **Hermes Agent**| 50 | 50 | None (Staging) | 🟢 High | High merge rate; actively patching gateway race conditions. |
| **PicoClaw** | ~5 | 17 | None | 🟢 High | Highly focused maintenance; strong enterprise/security PRs. |
| **NanoClaw** | ~3 | 10 | None (Imminent) | 🟢 High | Very stable; synchronized SDK updates and low bug volume. |
| **NullClaw** | ~2 | 1 | None (v2026.5.29) | 🟡 Moderate | Low volume; massive architectural PR stuck in the backlog. |
| **IronClaw** | 22 | 41 | None (Imminent) | 🟡 Moderate | High velocity on WebUI v2, but new critical task-hanging regressions. |
| **LobsterAI** | ~3 | 11 | None | 🟡 Moderate | Active backend merges, but severe gateway crash bugs left stale. |
| **Moltis** | 0 | 1 | None | 🟢 Stable | Zero open issues; cleared a 4-month-old backlog PR. |
| **CoPaw** | 38 | 50 | v1.1.12.post2 | 🟡 Moderate | High activity, but facing severe memory leaks and upgrade regressions. |
| **ZeroClaw** | 29 | 50 | v0.8.2 (Imminent)| 🟢 High | Sweeping high-severity bugs; robust release prep for v0.8.2. |
| *Inactive* | \- | \- | \- | \- | TinyClaw, ZeptoClaw (No activity). |

## 3. OpenClaw's Position
**Advantages:** OpenClaw possesses the largest and most active community in the tracked cohort, operating as the densest hub for cutting-edge experimentation. Its push toward MCP Apps UI metadata and deep AWS service integrations (Polly, Transcribe, Nova Sonic) positions it as a highly extensible platform for advanced, multimodal personal assistants. 
**Technical Approach:** OpenClaw is undergoing a heavy architectural migration to a SQLite-based transcript and session state foundation. Unlike peers relying on JSONL or in-memory state, OpenClaw is betting on structured databases to solve compaction timeouts and subagent session locking.
**Community Comparison:** While its mindshare is unmatched (500 PRs updated in 24h), its operational execution is currently lagging behind peers like ZeroClaw and NanoBot. A severe PR review bottleneck (466 PRs left open) and multiple P1 bugs (cache churn, Windows runtime failures) indicate the project is a victim of its own hyper-growth, serving as a proving ground for edge cases that smaller, more agile projects can patch more quickly.

## 4. Shared Technical Focus Areas
*   **Memory & Context Lifecycle Management:** Almost every project is battling context bloat and state drops.
    *   *OpenClaw* and *CoPaw* are building SQLite-backed durable history REPLs. *CoPaw* proposes a "Scroll Context Manager", while *NanoBot* is refactoring lifecycle-aware memory consolidation to replace eager compaction.
*   **Cross-Channel Gateway Reliability:** Maintaining state across synchronous messaging platforms (Telegram, Slack, QQ) is a universal pain point.
    *   *Hermes Agent* and *PicoClaw* are aggressively patching duplicate message dispatches and session deadlocks. *ZeroClaw* and *NanoClaw* are heavily focused on streaming UX latency for Asian messaging apps (WeChat, DingTalk).
*   **Autonomous Scheduling (Cron) & Background Agents:** Moving from reactive to proactive AI.
    *   *NullClaw*, *LobsterAI*, *OpenClaw*, and *CoPaw* are all heavily developing database-backed cron schedulers, job queuing, and subagent run histories.
*   **LLM Provider Interoperability & Token Optimization:** 
    *   *IronClaw* (progressive tool disclosure to save 25k tokens), *OpenClaw* (fixing Anthropic/DeepSeek prompt-cache prefixes), and *LobsterAI* (LiteLLM gateway integration) highlight an industry-wide push for model agnosticism and cost reduction.

## 5. Differentiation Analysis
*   **Target Environments:** *OpenClaw* and *IronClaw* are targeting power-users and self-hosted enterprise deployments (heavy OAuth, Kubernetes health probes). *NanoClaw* and *ZeroClaw* cater strongly to local, NAT-bound, and CLI/TUI power users (Socket Mode, WASM sandboxing). *PicoClaw* bridges the gap with experimental IoT control (Android ADB tools).
*   **UX Paradigms:** *Hermes Agent* is pivoting its desktop app to act as a full agentic IDE (coding rails). Meanwhile, *NanoBot* and *CoPaw* are heavily focused on becoming native-feeling Progressive Web Apps (PWAs) for mobile-first users.
*   **Architecture & Security:** *ZeroClaw* distinguishes itself with a deep focus on WebAssembly (WASM) plugin security, implementing strict SSRF protections and environment variable allow-lists. *PicoClaw* is leading in infrastructure security, patching cross-site setup vulnerabilities and sandbox command execution bypasses.

## 6. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** *NanoBot*, *Hermes Agent*, and *ZeroClaw* exhibit the healthiest combination of high PR merge rates, responsive bug triage, and clear roadmap execution. They are successfully stabilizing their core features.
*   **Strained/Scaling (High Volume, High Friction):** *OpenClaw*, *CoPaw*, and *IronClaw* are moving fast but breaking things. They face architectural growing pains, evidenced by unmerged PR backlogs and high-severity regressions in basic operations (e.g., CoPaw's 1.4GB idle RAM leak, OpenClaw's session locks).
*   **Stabilizing/Niche:** *PicoClaw*, *NanoClaw*, and *NullClaw* show lower overall volume but highly targeted, mature contributions. *Moltis* represents a highly stable, low-volume maintenance tier.

## 7. Trend Signals
1.  **The "Context Window" Crisis:** As agents run longer and execute more tools, prompt sizes are exploding. The future belongs to projects that master deterministic context pruning (IronClaw) or durable offloading to local databases (OpenClaw).
2.  **Security over Convenience in Tool Use:** The era of "YOLO" auto-approvals is ending. Projects (ZeroClaw, PicoClaw, IronClaw) are rapidly implementing strict sandboxing, Human-In-The-Loop (HITL) cross-channel approvals, and defense-in-depth memory sanitization to prevent credential leakage.
3.  **Protocol Standardization (ACP & MCP):** There is a massive community appetite for master orchestrators. Projects are moving away from monolithic agent designs toward architectures where a primary agent (like Hermes or ZeroClaw) can spawn subagents (Codex, Claude) via standardized communication protocols.
4.  **Proactive vs. Reactive Assistants:** The proliferation of robust Cron scheduling (NullClaw, LobsterAI) signals that users expect AI agents to act as background daemons managing automated workflows, rather than just waiting for chat inputs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest (2026-06-24)

## 1. Today's Overview
NanoBot is experiencing a massive surge in development velocity and community engagement following the launch of its durability-focused **v0.2.2** release. In the last 24 hours alone, the project saw 39 pull requests updated (with 32 actively under review) and 11 issues processed, indicating an exceptionally healthy and highly active open-source ecosystem. Much of today's activity revolves around fortifying the newly released WebUI, expanding LLM provider compatibility, and refining agent memory architectures. The influx of new contributors is clearly revitalizing the project's roadmap, particularly in mobile and frontend usability.

## 2. Releases
*   **[v0.2.2](https://github.com/HKUDS/nanobot/releases/tag/v0.2.2)** 
    *   **Focus:** Sturdiness and durability for real-world usage.
    *   **Major Changes:** Integrated 140 merged PRs and welcomed 21 new contributors. The headline update segments WebUI conversation transcripts to prevent data loss, preserving replies reliably during chat forking. Active UI transitions are also smoother.

## 3. Project Progress
Today's merged/closed PRs signify rapid stabilization of the v0.2.2 release and foundational backend improvements:
*   **Memory & Context Management:** PR [#4387](https://github.com/HKUDS/nanobot/pull/4387) fixed context fallback to ensure default memory bootstrapping, while PR [#4393](https://github.com/HKUDS/nanobot/pull/4393) added end-to-end regression tests for workspace subdirectory git operations. 
*   **Tool Reliability:** Closed PR [#4474](https://github.com/HKUDS/nanobot/pull/4474) and issue [#4473](https://github.com/HKUDS/nanobot/issues/4473) successfully fixed a critical duplication bug in parallel `tool_use` IDs within the Anthropic Provider.
*   **WebUI Cleanup:** Closed PR [#4417](https://github.com/HKUDS/nanobot/pull/4417) resolved MCP timeout URL testing issues, and PR [#4458](https://github.com/HKUDS/nanobot/pull/4458) wrapped up initial Progressive Web App (PWA) discussions.

## 4. Community Hot Topics
The community is highly focused on maximizing compatibility with diverse LLM providers and fine-tuning the new WebUI experience:
*   **Provider Expansion:** Developer `zpljd258` drove significant discourse by proposing support for Kimi Coding Plans (Issue [#4463](https://github.com/HKUDS/nanobot/issues/4463)) and OpenCode Zen/Go providers (PR [#4476](https://github.com/HKUDS/nanobot/pull/4476)). This highlights a strong community need for affordable, specialized coding models.
*   **Mobile Experience:** There is a massive push to make NanoBot a native-feeling mobile app. PR [#4480](https://github.com/HKUDS/nanobot/pull/4480) (PWA support and swipe gestures) and PR [#4471](https://github.com/HKUDS/nanobot/pull/4471) (fixing iOS Safari auto-zoom) show contributors actively patching mobile UX gaps.
*   **Agent Memory Refactoring:** Maintainers and contributors are heavily debating memory consolidation. PRs [#4402](https://github.com/HKUDS/nanobot/pull/4402) (eager consolidation) and [#4477](https://github.com/HKUDS/nanobot/pull/4477) (lifecycle wiki memory writer) show a strategic shift towards more deterministic, lifecycle-aware agent memory.

## 5. Bugs & Stability
*   🔴 **High: Anthropic Provider 400 Errors (Tool Use ID Duplication).** Misassembled streams caused duplicated parallel `tool_use` IDs, resulting in failed API calls. **Status:** Fix merged in PR [#4444](https://github.com/HKUDS/nanobot/pull/4444) & [#4474](https://github.com/HKUDS/nanobot/pull/4474).
*   🟠 **Medium: Telegram Streaming & Formatting Glitches.** Users reported broken line formatting and severe UI flickering during message generation (Issue [#4470](https://github.com/HKUDS/nanobot/issues/4470)). **Status:** Fix proposed in PR [#4472](https://github.com/HKUDS/nanobot/pull/4472).
*   🟠 **Medium: WebUI Raw Tag Leakage.** The WebUI renders `<thinking/>` tags as plain text instead of parsed reasoning blocks (Issue [#4465](https://github.com/HKUDS/nanobot/issues/4465)). **Status:** Open, awaiting frontend parsing fix.
*   🟡 **Low: Dream Prompt Bloat.** Disabling the Dream cron job inadvertently leaves the history cursor unadvanced, leading to token bloat (Issue [#4242](https://github.com/HKUDS/nanobot/issues/4242)). **Status:** Fix proposed in PR [#4481](https://github.com/HKUDS/nanobot/pull/4481).

## 6. Feature Requests & Roadmap Signals
Based on today's PR pipeline, we can predict the following features will land in the next release (v0.2.3 or v0.3.0):
*   **Advanced Sub-agent Routing:** Users will soon be able to override models per-spawn (PR [#4415](https://github.com/HKUDS/nanobot/pull/4415)) and aggregate sub-agent results (PR [#4414](https://github.com/HKUDS/nanobot/pull/4414)).
*   **Cron Job Model Presets:** Support for assigning specific model context windows to scheduled tasks without mutating the live agent (PR [#4416](https://github.com/HKUDS/nanobot/pull/4416)).
*   **Custom Provider Reasoning:** Support for non-standard thinking parameters (like VolcEngine/Doubao) for custom providers (PR [#4482](https://github.com/HKUDS/nanobot/pull/4482)).

## 7. User Feedback Summary
**Pain Points:** Users running smaller/local models frequently experience infinite tool-calling loops (Issue [#2298](https://github.com/HKUDS/nanobot/issues/2298)). Additionally, power users are frustrated by the "Dream" feature creating duplicate workspace skills instead of intelligently updating existing ones (Issue [#4467](https://github.com/HKUDS/nanobot/issues/4467)). 
**Satisfaction:** Users appreciate the deep Kimi integration but want clearer boundaries for subscription endpoints. The rapid response from contributors in fixing the iOS WebUI zoom issue has generated highly positive sentiment regarding the project's responsiveness.

## 8. Backlog Watch
*   🚨 **[Issue #2298](https://github.com/HKUDS/nanobot/issues/2298): Breaking endless tool calling loops.** Created in March, this critical UX flaw for local model users is still open and needs architectural attention from maintainers.
*   ⏳ **[Issue #2305](https://github.com/HKUDS/nanobot/issues/2305): Support hiding reasoning step display.** An older feature request that is highly relevant again given today's bugs regarding `<thinking/>` tag rendering.
*   ⏳ **[PR #4373](https://github.com/HKUDS/nanobot/pull/4373): Preserve delivery context during consolidation.** Open for over a week, this memory system enhancement needs a maintainer review to move forward.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the structured project digest for the Hermes Agent project based on the GitHub data provided.

### 1. Today's Overview
Hermes Agent is currently exhibiting exceptionally high open-source project health and community engagement. Over the last 24 hours, the project processed a massive volume of 50 updated issues and 50 pull requests, with a solid 40% PR merge/closure rate indicating active and responsive maintenance. The development focus is heavily split between expanding desktop UX features and aggressively patching race conditions and state-management deadlocks across various messaging gateway adapters (Telegram, Discord, Feishu). The rapid triaging of critical bugs shows a mature development lifecycle operating at full throttle.

### 2. Releases
No new releases were tracked in this 24-hour window. (The project appears to be actively merging fixes into `main`, potentially staging for a future release tag).

### 3. Project Progress
Significant advancements were made today in gateway stability and state management. Maintainers successfully merged multiple PRs addressing complex concurrency issues:
*   **Gateway Session State Fixes:** Fixed permanent session deadlocks across platforms where stale task locks failed to release properly. Duplicate message dispatch bugs were also resolved across multiple adapters ([PR #48347](https://github.com/NousResearch/hermes-agent/pull/48347), [PR #48317](https://github.com/NousResearch/hermes-agent/pull/48317), [PR #48382](https://github.com/NousResearch/hermes-agent/pull/48382), [PR #51553](https://github.com/NousResearch/hermes-agent/pull/51553)).
*   **Discord Adapter:** Resolved an issue where a single user message was double-dispatched, resulting in duplicate agent runs ([PR #51153](https://github.com/NousResearch/hermes-agent/pull/51153), [PR #51129](https://github.com/NousResearch/hermes-agent/pull/51129), [PR #51552](https://github.com/NousResearch/hermes-agent/pull/51552)).
*   **Desktop App & UX:** Advanced new architectural features like "First-class projects" which introduce a coding rail and review pane ([PR #49037](https://github.com/NousResearch/hermes-agent/pull/49037)). Fixed macOS x64 updater bundles ([PR #51382](https://github.com/NousResearch/hermes-agent/pull/51382)) and desktop code signing defaults ([PR #41524](https://github.com/NousResearch/hermes-agent/pull/41524)).
*   **Tool Execution:** Patched a crash during concurrent tool submission when the Python interpreter shuts down mid-batch ([PR #51549](https://github.com/NousResearch/hermes-agent/pull/51549)).

### 4. Community Hot Topics
The most actively discussed items center around expanding Hermes' compatibility as an orchestrator and the stability of external LLM providers:
*   **Generalized ACP Client** ([Issue #5257](https://github.com/NousResearch/hermes-agent/issues/5257)): A highly requested feature (16 👍, 11 comments) to generalize the Agent Client Protocol. Users want Hermes to act as a master orchestrator for external coding agents like Claude and Codex directly from the CLI.
*   **Nous Portal Azure Outage** ([Issue #51045](https://github.com/NousResearch/hermes-agent/issues/51045)): Users report that routing `openai/gpt-5.5` through Nous Portal has been failing since June 20. This highlights the community's heavy reliance on the portal for enterprise model access.
*   **Codex Reasoning-Replay Rejections** ([Issue #51512](https://github.com/NousResearch/hermes-agent/issues/51512) & [PR #51521](https://github.com/NousResearch/hermes-agent/pull/51521)): Users leveraging the ChatGPT-subscription Codex backend are hitting HTTP 400 errors. A targeted fix was quickly submitted by the community.

### 5. Bugs & Stability
Today's bug reports highlight vulnerabilities in network state management, security boundaries, and third-party platform APIs, though patches are rapidly following:
*   **P1 - OpenAI-Codex Credential Drop** ([Issue #19566](https://github.com/NousResearch/hermes-agent/issues/19566)): Race conditions in `auth.json` rotation can permanently drop newly added credentials, causing severe disruptions for multi-account users.
*   **P1 - Gateway Transient Failure Duplication** ([Issue #47237](https://github.com/NousResearch/hermes-agent/issues/47237)): Telegram gateway persists duplicate user turns after temporary provider failures, causing the agent to hallucinate context. 
*   **P1 - Session History Leaks** ([Issue #49106](https://github.com/NousResearch/hermes-agent/issues/49106)): A critical privacy/state bug where Web/WeChat sessions bleed conversation history into unrelated active sessions.
*   **P2 - Telegram Infinite Duplication Loop** ([Issue #48648](https://github.com/NousResearch/hermes-agent/issues/48648)): A UI-breaking bug where streamed messages >4096 characters trigger an endless nested-reply loop.
*   **P2 - Vision Provider Fallback Failures** ([Issue #25822](https://github.com/NousResearch/hermes-agent/issues/25822)): Gemini 503 (Unavailable) errors fail to trigger fallback providers, breaking auxiliary vision pipelines completely.

### 6. Feature Requests & Roadmap Signals
Based on recent issues and open PRs, the project's near-term trajectory includes:
*   **Enterprise Cloud & Auth Support:** Requests for HTTPS Oauth callbacks for MCP ([Issue #29299](https://github.com/NousResearch/hermes-agent/issues/29299)) and the introduction of Google Vertex AI as a native provider ([PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427)) signal an push into enterprise-grade deployments.
*   **Rich Platform Integrations:** Users want native Slack AI App features, such as thinking steps and task card blocks ([Issue #51363](https://github.com/NousResearch/hermes-agent/issues/51363)), indicating a desire for Hermes to power collaborative team environments.
*   **Desktop as an IDE:** The introduction of a coding rail and review pane ([PR #49037](https://github.com/NousResearch/hermes-agent/pull/49037)) strongly suggests Hermes is pivoting its desktop app to compete directly with agentic IDEs. 

### 7. User Feedback Summary
**Positive trends:** Users are highly enthusiastic about Hermes's multi-platform reach and tooling, particularly leveraging it as a central hub for different LLMs and agents. The speed at which community PRs are being merged is fostering a strong, collaborative open-source environment.
**Pain points:** The Telegram gateway remains a source of friction, plagued by character limit loops, typing indicator race conditions, and duplicate message dispatches. Additionally, mobile and desktop UI elements (like low-res content cards and viewport-consumption bugs) are frustrating users who want a polished visual interface alongside the raw CLI/TUI power. 

### 8. Backlog Watch
*   **Auxiliary Vision Fallback Chain** ([Issue #49586](https://github.com/NousResearch/hermes-agent/issues/49586)): Marked as `needs-repro`, this P2 bug is breaking the fallback path entirely due to an `await` on a synchronous OpenAI client. Needs core maintainer validation.
*   **Security Boundary in Conversation History** ([Issue #43083](https://github.com/NousResearch/hermes-agent/issues/43083)): A P2 bug where redacted passwords (`***`) cause subsequent tool calls to fail when the model reads its own history. Tagged `needs-decision`, this requires architectural input from maintainers on how to handle defense-in-depth memory sanitization.
*   **Linux Desktop Installer** ([Issue #49171](https://github.com/NousResearch/hermes-agent/issues/49171)): The Linux desktop build is still missing `.desktop` file creation, breaking native launcher integration—a low-complexity but high-impact UX issue that remains unresolved.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the GitHub data provided.

### 1. Today's Overview
PicoClaw is currently exhibiting a **highly active and healthy development velocity**, with a strong focus on system stability, security hardening, and expanding platform integrations. Over the last 24 hours, the project processed 17 Pull Requests (merging 6) and addressed community issues efficiently. The development focus is heavily split between fortifying the agent's sandbox/execution environments (especially for Windows) and broadening LLM/Channel compatibility, including Bedrock prompt caching and WhatsApp connection stability. 

### 2. Releases
*No new releases were published in the last 24 hours. The project remains on its current version trajectory.*

### 3. Project Progress
Significant advancements were merged today, focusing on reliability, tooling, and platform connectors:
*   **[PR #3162](https://github.com/sipeed/picoclaw/pull/3162) [MERGED] fix(whatsapp): add reconnection and async message processing:** Substantially improves WhatsApp channel reliability by adding async processing, pong handlers for keepalives, and auto-reconnection with exponential backoff.
*   **[PR #3154](https://github.com/sipeed/picoclaw/pull/3154) [MERGED] fix(openai_compat): recover Doubao Seed tool calls:** Fixes a critical parsing issue where Volcengine's Doubao Seed model leaked tool calls as raw XML inside content instead of the standard API field.
*   **[PR #3047](https://github.com/sipeed/picoclaw/pull/3047) [MERGED] fix(web): restore full JSONL history for session detail:** Implements a detail-only JSONL reader to allow the UI to display archived messages without hurting list pagination performance.
*   **[PR #3059](https://github.com/sipeed/picoclaw/pull/3059) & [PR #3054](https://github.com/sipeed/picoclaw/pull/3054) [CLOSED]:** Cleaned up resource handling in shell commands and fixed potential panics in the LINE channel sync maps.
*   **[PR #2888](https://github.com/sipeed/picoclaw/pull/2888) [CLOSED]:** Addressed tool config and image reaction loading.

### 4. Community Hot Topics
*   **Agent Context Memory & Task Execution ([Issue #3159](https://github.com/sipeed/picoclaw/issues/3159)):** A user reported (using DeepSeek-v4 on Debian) that the agent redundantly repeats previous tasks when handling sequential requests (e.g., asking for US news, then French news, triggers the US search again). This highlights underlying user needs for better context management and tool-call efficiency in continuous sessions.
*   **Telegram Group Interactions ([PR #2975](https://github.com/sipeed/picoclaw/pull/2975)):** A heavily engaged feature request (currently open/stale) aims to treat direct replies to the bot as mentions in group chats. This signals a strong community desire for more natural conversational UX in multi-user channels.

### 5. Bugs & Stability
*   **Severity: High - Repeating Agent Tasks:** Issue [#3159](https://github.com/sipeed/picoclaw/issues/3159) shows the agent repeating prior tool calls in a multi-turn conversation. *Status: Open, no fix PR yet.*
*   **Severity: High - Command Execution Bypass:** PR [#3161](https://github.com/sipeed/picoclaw/pull/3161) identified a major security flaw where custom allow rules in `exec` bypassed deny patterns entirely, potentially leaking environment variables. *Status: Fix PR submitted (Open).*
*   **Severity: Medium - Cross-Site Setup Vulnerability:** PR [#3160](https://github.com/sipeed/picoclaw/pull/3160) fixes a bug where cross-site launcher password setup requests could mutate the first-run dashboard password store. *Status: Fix PR submitted (Open).*
*   **Severity: Medium - Data URL Session Corruption:** PR [#3115](https://github.com/sipeed/picoclaw/pull/3115) fixes a bug where base64 strings in plain text tool outputs (like logs or HTML) were wrongly extracted as media attachments, corrupting session history. *Status: Fix PR submitted (Open).*
*   **Severity: Low - Windows QQ Channel:** Issue [#3015](https://github.com/sipeed/picoclaw/issues/3015) (Closed/Stale) dealt with token retrieval timeouts for the QQ channel on Windows.

### 6. Feature Requests & Roadmap Signals
Based on today's PR activity, the immediate roadmap signals a pivot toward **enterprise integrations, remote management, and security**:
*   **Enterprise LLM Cost Optimization:** PR [#3163](https://github.com/sipeed/picoclaw/pull/3163) adds support for AWS Bedrock Converse API prompt caching (reducing input token costs by up to 90%). 
*   **Mobile & IoT Control:** PR [#3157](https://github.com/sipeed/picoclaw/pull/3157) introduces an experimental Android ADB tool, allowing the agent to list, inspect, screenshot, and tap on explicitly configured Android devices. 
*   **Decoupled Architecture:** PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) adds a remote WebSocket mode to the PicoClaw agent, allowing CLI agents to connect to remote gateways. 

*Prediction for Next Version:* The next release will likely be a minor version bump (e.g., v0.3.0) heavily focused on enterprise features (Bedrock caching) and expanded agent capabilities (ADB control).

### 7. User Feedback Summary
Real-world usage indicates a user base actively deploying PicoClaw across varied environments—from Debian servers interacting with DeepSeek models to Windows users utilizing chat channels. Users are generally satisfied with the expanding channel support (WhatsApp, Telegram, QQ), but express frustration with **session state/context management** (repeating tasks) and channel connection drops (WhatsApp disconnects, QQ timeouts). The push from enterprise users or advanced hobbyists is clearly leaning toward **agent actionability** (evidenced by the ADB PR) and **infrastructure security**.

### 8. Backlog Watch
*   **[PR #3104](https://github.com/sipeed/picoclaw/pull/3104), [PR #3103](https://github.com/sipeed/picoclaw/pull/3103), [PR #3100](https://github.com/sipeed/picoclaw/pull/3100):** Several Dependabot dependency bumps (shadcn, typescript-eslint, Vite plugin-react) have been open since June 11th. Maintainers should review these to ensure frontend security and compatibility.
*   **[PR #2975](https://github.com/sipeed/picoclaw/pull/2975):** The Telegram reply-as-mention feature has been open since May 30th and marked stale. It requires a maintainer review as it addresses a highly requested UX improvement.
*   **[PR #3158](https://github.com/sipeed/picoclaw/pull/3158):** Sandbox filesystem Windows path handling tests were submitted yesterday; they need maintainer approval to ensure cross-platform stability.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the structured project digest for NanoClaw based on the provided GitHub data.

### 1. Today's Overview
**2026-06-24** shows a highly active and healthy development cycle for the NanoClaw project, heavily focused on core infrastructure updates and tooling. The maintainers successfully executed a synchronized upgrade of the underlying Chat SDK to version 4.29.0 across multiple branches (`main`, `channels`, and `providers`). Additionally, there is a strong pivot towards improving Slack integration security and developer experience, highlighted by the introduction of Slack Socket Mode. With 8 merged pull requests and only 1 active bug report, the project is demonstrating rapid, stable iteration with strong community contributions in feature extension and container performance.

### 2. Releases
*No new official releases were published in the last 24 hours.*

### 3. Project Progress
Today's development was primarily execution-heavy, bringing several key improvements into the main codebase:
*   **Chat SDK 4.29.0 Upgrade:** A massive coordinated effort led by `gabi-simons` to migrate `main` ([#2834](https://github.com/nanocoai/nanoclaw/pull/2834)), `channels` ([#2835](https://github.com/nanocoai/nanoclaw/pull/2835)), and `providers` ([#2836](https://github.com/nanocoai/nanoclaw/pull/2836)) to the 4.29.0 SDK generation. This ensures type-check compatibility between the core bridge and channel adapters.
*   **Slack Socket Mode Integration:** Merged PR [#2837](https://github.com/nanocoai/nanoclaw/pull/2837) brings Slack Socket Mode end-to-end, allowing the bot to connect via an outbound WebSocket rather than an inbound HTTPS webhook.
*   **Update Flow Hardening:** PR [#2826](https://github.com/nanocoai/nanoclaw/pull/2826) merged to fix `/update-nanoclaw`, ensuring users are nudged to update their installed skills and rebuild containers, preventing them from silently missing upstream security or skill fixes. 
*   **Branch Cleanup:** PR [#2839](https://github.com/nanocoai/nanoclaw/pull/2839) successfully reconciled misrouted commits from the Slack Socket Mode update into their proper place.

### 4. Community Hot Topics
The most active areas of discussion today center around platform extensibility, security, and agent autonomy:
*   **Extension & Customization:** PR [#2842](https://github.com/nanocoai/nanoclaw/pull/2842) (Open) proposes "inert extension-point seams" (`registerX()/applyX()`), allowing downstream forks to easily attach custom logic to the host and container runtimes without altering upstream behavior. A previous iteration of this was already closed ([#2841](https://github.com/nanocoai/nanoclaw/pull/2841)), indicating rapid, active iteration by contributor `foxsky`.
*   **Agent Feedback Loops:** PR [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) (Open) introduces a "Reject with reason" feature for module approval cards. This highlights a community need for richer, context-driven human-in-the-loop interactions, allowing agents to understand *why* a command was rejected and adapt accordingly.

### 5. Bugs & Stability
Only one bug was reported in the last 24 hours, though it touches on a potentially critical security configuration flaw:
*   **[High Severity] Slack Port Binding Exposure:** Issue [#2840](https://github.com/nanocoai/nanoclaw/issues/2840) reports that NanoClaw v2 binds port 3000 to an external host IP during Slack setup. This bypasses the intended security of using a local tunnel. *Note: This bug is directly addressed by today's merged Slack Socket Mode ([#2837](https://github.com/nanocoai/nanoclaw/pull/2837)), which removes the need for public endpoints or port exposure entirely.*

### 6. Feature Requests & Roadmap Signals
Based on the open PRs and recent contributions, we can project several key areas for the next version:
*   **Alternative Model Routers:** PR [#2838](https://github.com/nanocoai/nanoclaw/pull/2838) seeks to add the "Manifest" model router provider. This signals a roadmap push towards broader LLM compatibility and provider-agnostic routing.
*   **Container Stability & Performance:** PR [#2771](https://github.com/nanocoai/nanoclaw/pull/2771) (Open) suggests adding `--shm-size=1g` and `--init` flags to the agent container `docker run` arguments. Given that agents ship with headless Chromium (`agent-browser`), this addresses inherent Docker memory limitations (default 64MB `/dev/shm`) that cause browser crashes, as well as zombie process cleanup.
*   **Expect the next release to heavily feature the Socket Mode setup and the Chat SDK 4.29.0 baseline.**

### 7. User Feedback Summary
Users are pushing the boundaries of where and how NanoClaw operates. There is clear enthusiasm for running the agent in local and NAT-bound environments, evidenced by the demand for Slack Socket Mode. However, users running webhooks are encountering friction with default networking setups (exposed IPs). Operationally, advanced users utilizing the agent's browser capabilities are hitting standard Docker container limitations (shared memory), indicating that the default Docker configurations need to be more robust for heavy browsing tasks.

### 8. Backlog Watch
Maintainers should prioritize reviewing the following stale/open items requiring attention:
*   **PR [#2771](https://github.com/nanocoai/nanoclaw/pull/2771) (perf/container):** Open since June 15th. This is a critical performance fix for headless Chromium inside Docker containers.
*   **PR [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) (UX/Approvals):** Open since June 22nd. Adds valuable functionality to the agent self-correction workflow.
*   **PR [#2842](https://github.com/nanocoai/nanoclaw/pull/2842) (Architecture):** Requires maintainer architectural review to ensure the proposed extension hooks align with the long-term forkability vision of the project.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data.

# NullClaw Project Digest — 2026-06-24

## 1. Today's Overview
NullClaw exhibits moderate but highly focused maintenance activity as of June 24, 2026. The project did not publish any new software releases today, but maintainers remain engaged in triaging community issues and reviewing complex code contributions. Specifically, the past 24 hours saw the resolution of a frequent API error affecting Windows users and continued momentum on a substantial backend architecture pull request. While overall issue/PR volume is low, the active management of critical bugs and long-term feature branches indicates stable project health.

## 2. Releases
*No new releases were published in the last 24 hours. The latest publicly referenced version remains **v2026.5.29**.*

## 3. Project Progress
While no pull requests were merged today, there is active development progress focused on backend infrastructure:
*   **Cron Infrastructure Advancement:** PR [#783](https://github.com/nullclaw/nullclaw/pull/783) `feat(cron): cron subagent...` received updates. This represents a major architectural upgrade that will bring a database-backed scheduler, job queuing, and enhanced CLI outputs to the NullClaw ecosystem.
*   **Bug Resolution:** The development team successfully diagnosed and closed a highly disruptive API error (Issue [#967](https://github.com/nullclaw/nullclaw/issues/967)), which was affecting over 50% of conversations for certain model configurations. 

## 4. Community Hot Topics
*   **[CLOSED] Issue [#967](https://github.com/nullclaw/nullclaw/issues/967): `[bug] error: NoResponseContent`**
    *   **Activity:** 2 comments, created on June 20, closed June 23.
    *   **Analysis:** This was a critical point of friction for users. The author detailed a >50% failure rate when interacting with the `Agnes-2.0-Flash` model on Windows 11, drawing direct comparisons to a similar tool ("picocla...") where the same API key and model worked flawlessly. The swift closure of this issue suggests that either a fix was identified in the codebase or users were provided with a working workaround.

## 5. Bugs & Stability
*   **Severity: High** — `NoResponseContent` Error (Resolved)
    *   **Details:** Reported in Issue [#967](https://github.com/nullclaw/nullclaw/issues/967). Users on Windows (x86_64) running NullClaw v2026.5.29 encountered `error: NoResponseContent` in over 50% of their interactions when using specific models like `Agnes-2.0-Flash`. The high failure rate severely degraded the assistant's usability. 
    *   **Status:** The issue is marked as closed, improving stability for affected users. However, no specific fix PR was listed in today's data digest.

## 6. Feature Requests & Roadmap Signals
Based on open pull requests, the immediate technical roadmap is heavily focused on **autonomous operations and enterprise-readiness**.
*   **Automated Task Execution (Cron/Subagents):** PR [#783](https://github.com/nullclaw/nullclaw/pull/783) introduces a DB-backed scheduler (`cron_runs`), atomic worker queues, and per-job time zone offsets. This signals a shift from NullClaw being just a reactive CLI assistant to a proactive, background-running AI agent.
*   **Security & Observability:** The same PR emphasizes "security hardening" and structured data outputs (`cron list --json`).
*   *Prediction:* The next version release will likely heavily feature native scheduling capabilities and enhanced JSON-based CLI integration, targeting developers who want to build automated workflows on top of NullClaw.

## 7. User Feedback Summary
*   **Pain Points:** Reliability of third-party API responses is a top concern. Users are experiencing intermittent empty responses from models, leading to broken agent loops.
*   **Use Cases:** Users are utilizing NullClaw via CLI (`nullclaw agent -m`) on desktop operating systems (specifically Windows 11) for conversational tasks. There is also clear demand for interoperability and performance parity with competing open-source tools (e.g., PicoCla).
*   **Satisfaction:** While affected users were frustrated by the high frequency of the `NoResponseContent` bug, the responsive triage by maintainers likely mitigated widespread dissatisfaction.

## 8. Backlog Watch
*   **PR [#783](https://github.com/nullclaw/nullclaw/pull/783): `feat(cron): cron subagent, run history...`**
    *   **Status:** Needs Maintainer Attention.
    *   **Reason:** This is a massive, feature-rich pull request (adding database tables, worker queues, CLI JSON outputs, and security updates) that has been open since **April 7, 2026**. It was updated yesterday (likely via conflict resolution or force-push), indicating the author is still actively maintaining the branch. This PR is currently blocking a major feature roadmap and should be prioritized for final review and merging by the core team.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the provided GitHub data.

# IronClaw Project Digest
**Date:** 2026-06-24
**Repository:** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

### 1. Today's Overview
IronClaw is currently exhibiting exceptionally high development velocity, driven largely by the rapid evolution of its "Reborn" WebUI v2 and core agent runtime. Over the past 24 hours, the project processed 41 Pull Requests (merging/closing 20) and updated 22 issues, indicating a tightly coordinated, highly active engineering pipeline. Much of today's focus has been on refining user experience touchpoints—specifically Slack integration, Google Workspace authentication, and dynamic tool permission gates. While no new versioned releases were cut, the sheer volume of merged core improvements strongly suggests an impending major milestone or release candidate.

### 2. Releases
**No new releases** were published today.

### 3. Project Progress
Significant architectural and functional milestones were achieved today, primarily merging into the Reborn (next-gen) stack:
*   **Memory & Architecture Refactoring:** PR [#5163](https://github.com/nearai/ironclaw/pull/5163) opened a major structural shift, lifting the memory layer into a provider-neutral contract. 
*   **Slack Integration Overhaul:** The team hard-cut legacy Slack config, moving the entire setup directly into the WebUI v2 interface ([PR #5152](https://github.com/nearai/ironclaw/pull/5152), [PR #5164](https://github.com/nearai/ironclaw/pull/5164)).
*   **Automations:** Added full lifecycle support for Reborn automations, including deletion ([PR #5133](https://github.com/nearai/ironclaw/pull/5133)) and pause/resume capabilities ([PR #5121](https://github.com/nearai/ironclaw/pull/5121)).
*   **Google Workspace Fixes:** Resolved critical WASM `auth_required` failures for Google Drive, Docs, and Sheets ([PR #4969](https://github.com/nearai/ironclaw/pull/4969)) and added binary document extraction for Drive ([PR #4997](https://github.com/nearai/ironclaw/pull/4997)).
*   **Performance Optimization:** Opened a progressive tool disclosure feature ([PR #5149](https://github.com/nearai/ironclaw/pull/5149)) that cuts the model prompt payload by stripping unused tool schemas, saving roughly 25.8k tokens per turn.

### 4. Community Hot Topics
*   **Tool Permission & Approval Flows:** The community is deeply engaged with IronClaw's new dynamic permissioning. PR [#5068](https://github.com/nearai/ironclaw/pull/5068) (Global auto-approve settings) and Issue [#5129](https://github.com/nearai/ironclaw/issues/5129) (`Always approve` not working on outbound delivery targets) show users want reliable, persistent automation workflows that don't require manual nags. 
*   **Skill Learning & Safety:** PR [#5156](https://github.com/nearai/ironclaw/pull/5156) introduces distillation and approval gates for learned skills, reacting directly to the need for safety guardrails as the agent becomes capable of absorbing custom user instructions.
*   **WebUI Activity Streaming:** A highly discussed UX improvement ([PR #5160](https://github.com/nearai/ironclaw/pull/5160)) fixes a bug where the WebChat UI only surfaced the first tool's live SSE activity, leaving the interface appearing "stuck" during complex workflows.

### 5. Bugs & Stability
*   **Critical Regression - Task Hanging (Severity: High):** Issue [#5139](https://github.com/nearai/ironclaw/issues/5139) reports web/research tasks wedging at initialization (0 LLM calls) on `main HEAD`, breaking 21 out of 147 tasks on the daily PinchBench run. 
*   **Scheduler Deadlock (Severity: High):** Issue [#5148](https://github.com/nearai/ironclaw/issues/5148) reveals a severe self-deadlock in the turn scheduler heartbeat when holding transition state, causing extensions to hang indefinitely during installation.
*   **Prompt Safety False Positives (Severity: Medium):** Issue [#5169](https://github.com/nearai/ironclaw/issues/5169) notes a clean-setup failure where ordinary API vocabulary in bundled skills trips the model-safety vocabulary denylist, terminating benign requests.
*   **Flaky CI Tests (Severity: Low/Medium):** Issue [#5147](https://github.com/nearai/ironclaw/issues/5147) warns that a flaky trigger poller test is randomly failing (~1 in 3 runs) and actively blocking PRs from merging.

### 6. Feature Requests & Roadmap Signals
*   **Progressive Tool Disclosure:** Addressing latency and timeouts, the request to stop passing all 90+ tool schemas to the LLM by default ([PR #5149](https://github.com/nearai/ironclaw/pull/5149)) signals a roadmap priority on token efficiency and agent speed.
*   **Operator UX Maturation:** Requests like deprecating committed `dist` folders ([Issue #5167](https://github.com/nearai/ironclaw/issues/5167)), fixing missing WebUI settings on Railway ([Issue #5157](https://github.com/nearai/ironclaw/issues/5157)), and visualizing default Base URLs ([Issue #5144](https://github.com/nearai/ironclaw/issues/5144)) indicate a strong push toward making IronClaw a polished, plug-and-play solution for self-hosters.

### 7. User Feedback Summary
Users are excited about the new Reborn features but are hitting friction during onboarding and complex authentications. The failure of the Google OAuth refresh token cycle (Issue [#4991](https://github.com/nearai/ironclaw/issues/4991)) and misleading Gmail auth UI states (Issue [#3733](https://github.com/nearai/ironclaw/issues/3733), Issue [#3732](https://github.com/nearai/ironclaw/issues/3732)) highlight that connecting personal data sources remains a primary pain point. Furthermore, AI model unreliability when invoking custom automations (Issue [#5151](https://github.com/nearai/ironclaw/issues/5151) - Claude failing to call `trigger_create`) suggests users want stricter deterministic guardrails around agent planning.

### 8. Backlog Watch
*   **Issue #4640** (Created: 2026-05-09): The Google Calendar `list_events` extension returns the *oldest* events instead of upcoming ones due to missing `timeMin` and `orderBy` API parameters. Despite being a core personal assistant feature, it remains unaddressed.
*   **Issue #5139** (Critical Task Hang): As this impacts the main `HEAD` branch and directly degrades daily PinchBench benchmarking, it requires immediate maintainer attention over the legacy v1 monolith tests ([PR #5159](https://github.com/nearai/ironclaw/pull/5159)).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the provided GitHub data.

### 1. Today's Overview
LobsterAI exhibits highly active development momentum today, driven by a significant volume of recent pull requests targeting core gateway and scheduling functionalities. Over the last 24 hours, the project processed 11 PRs—successfully merging 5—indicating a focused effort by maintainers to stabilize the OpenClaw gateway, enhance task scheduling, and refine the cowork UI. While active iteration is robust, the project currently has a bottleneck regarding community-reported bugs, as evidenced by critical unresolved and stale issues dating back to early April. Overall, backend and infrastructure health is rapidly improving, though user-facing issue triage needs attention.

### 2. Releases
**None.** 
No new versions were released today. However, based on the high volume of merged PRs regarding OpenClaw and cron scheduling, an incremental stable release appears imminent.

### 3. Project Progress
Today's development was heavily focused on the "OpenClaw" gateway, cron job execution, and user experience interfaces. Key merged/closed PRs include:
*   **OpenClaw Gateway & Cron Synchronization:** 
    *   [PR #2189](https://github.com/netease-youdao/LobsterAI/pull/2189): Added automatic migration for legacy OpenClaw cron JSON/run-log storage before gateway startup.
    *   [PR #2190](https://github.com/netease-youdao/LobsterAI/pull/2190): Normalized OpenClaw run-scoped cron session keys (`agent:{agentId}:cron:{jobId}:run:{runId}`) to ensure repeated runs reuse a single local Cowork session.
*   **Task Scheduling UX:** 
    *   [PR #2191](https://github.com/netease-youdao/LobsterAI/pull/2191): Clarified scheduled task states (startup, loading, ready, error) and optimized cron data polling to refresh immediately after the OpenClaw handshake.
*   **Cowork & Plan Mode:** 
    *   [PR #2192](https://github.com/netease-youdao/LobsterAI/pull/2192): Introduced a persistent plan confirmation flow, allowing users to explicitly "Confirm execution" or "Adjust plan" before the agent proceeds.
*   **Logging:** 
    *   [PR #2188](https://github.com/netease-youdao/LobsterAI/pull/2188): Merged general logging updates (`Liuzhq/rlog`).

### 4. Community Hot Topics
The most notable active community item is:
*   **[Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400):** *[stale] 4.1版本严重bug，网关反复启动失败，反复重启，无限循环！*
    *   **Analysis:** This is a highly disruptive issue where upgrading to v4.1 causes an infinite restart loop with the gateway. The user also reports conflicts with custom LLM configurations (qwen3.5-plus) failing due to `web-extractor` dependencies. Despite 6 comments, it remains unresolved and marked as stale. This highlights a severe friction point in version migration and gateway stability for end-users.

### 5. Bugs & Stability
*   🔴 **[Critical] Gateway Infinite Restart Loop:** [Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400) details a complete system paralysis (gateway fail loop) upon upgrading to v4.1. *No active fix PR detected in today's batch.*
*   🟠 **[High] SSE Security Vulnerability:** [PR #1401](https://github.com/netease-youdao/LobsterAI/pull/1401) addresses a critical security flaw where `Math.random()` was used for SSE stream request IDs. This allows attackers to predict IDs and subscribe to other users' data streams. The PR proposes using `crypto.randomUUID()`, but it remains unmerged.
*   🟡 **[Medium] Scheduled Task IM Notifications:** [PR #1406](https://github.com/netease-youdao/LobsterAI/pull/1406) fixes a bug where scheduled tasks showed no IM notification options if specific platform toggles were off.

### 6. Feature Requests & Roadmap Signals
*   **LLM Interoperability (LiteLLM):** [PR #2193](https://github.com/netease-youdao/LobsterAI/pull/2193) proposes adding LiteLLM as an AI gateway provider, allowing users to access 100+ LLMs via a single OpenAI-compatible endpoint without adding new dependencies. This signals a strong roadmap direction toward ultimate model agnosticism.
*   **UI/UX Component Upgrades:** [PR #1404](https://github.com/netease-youdao/LobsterAI/pull/1404) requests an overhaul of the scheduled task UI, moving away from rigid native `<input type="time">` and `<select>` tags to custom thematic components that match the app's design language. 

### 7. User Feedback Summary
Real user pain points are currently centered around version upgrades and custom model configurations. Users attempting to use customized LLM endpoints (like qwen3.5-plus) are running into hardcoded dependency blocks (e.g., `web-search` being forced). The frustration is palpable in Issue #1400, where a user explicitly states their system is "completely paralyzed" after an upgrade. On the positive side, internal contributors are actively smoothing out the task scheduling (cron) experience, which indicates that automated background agents are a heavily used feature that requires meticulous session state handling.

### 8. Backlog Watch
The maintainers urgently need to address several long-standing (stale since April 2026) PRs and Issues that affect security and core usability:
*   **[PR #1401](https://github.com/netease-youdao/LobsterAI/pull/1401) (Security Fix):** Replacing pseudo-random request IDs with cryptographically secure UUIDs. This should be prioritized for immediate review and merging.
*   **[Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400) (Crash Bug):** The v4.1 gateway startup failure needs reproducibility confirmation from the core team.
*   **[PR #1402](https://github.com/netease-youdao/LobsterAI/pull/1402) & [PR #1403](https://github.com/netease-youdao/LobsterAI/pull/1403):** Quality-of-life fixes for the cowork attachment picker (multi-select bug) and i18n missing keys (delete button translation). These are low-hanging fruit that should be merged to improve baseline stability.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-06-24

## 1. Today's Overview
The Moltis project experienced a low-volume but structurally significant day of development, marked by the closure of a key feature pull request without any newly reported issues or releases. Activity over the last 24 hours was solely focused on merging/closing PRs, indicating a maintenance or integration phase rather than active feature development. Notably, the project currently has zero open or active issues, suggesting either a highly stable codebase, a very efficient bug-triage process, or potentially that user feedback is being tracked through external channels. Overall project health appears stable, with maintainers successfully clearing legacy backlog items.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
The primary advancement today was the formal closure of a long-standing feature PR, indicating progress in the agent's multimedia and tooling capabilities:
*   **[PR #215](https://github.com/moltis-org/moltis/pull/215) `[CLOSED]`**: Authored by `maximilize` (originally created on 2026-02-23, updated 2026-06-23). This PR introduces the `send_image` tool, enabling AI skills to dispatch local image files (PNG, JPEG, GIF, WebP) directly to channel targets like Telegram. This is a crucial enhancement for personal AI assistants, as it bridges the gap between text-based reasoning and rich media delivery by smartly reusing the existing screenshot pipeline (returning a `data:` URI in the `screenshot` key). 

## 4. Community Hot Topics
*There were no highly active issues or PRs with community comments or reactions in the last 24 hours.* 
The only notable update was the closure of [PR #215](https://github.com/moltis-org/moltis/pull/215). The underlying need here points toward **Rich Media Interaction**—users and developers want Moltis to act as a multimodal assistant capable of generating and pushing images (like charts, screenshots, or generated visuals) alongside text responses in chat runners.

## 5. Bugs & Stability
*No bugs, crashes, or regressions were reported in the last 24 hours.* 
The issue tracker shows 0 open/active issues, currently indicating a high degree of baseline stability or a lack of newly surfaced edge cases from the community.

## 6. Feature Requests & Roadmap Signals
Based on the integration of the `send_image` tool, current roadmap signals strongly point toward **Multimodality and Enhanced Channel Integration**. 
*   **Channel Rich-Media Support:** As personal AI assistants are increasingly used as bots on platforms like Telegram, future versions will likely expand this architecture. 
*   **Predictions for Next Version:** We can anticipate future PRs introducing `send_file`, `send_audio`, or `send_location` tools that similarly leverage existing backend pipelines to return standardized URIs for the chat runner to process.

## 7. User Feedback Summary
Direct user feedback via GitHub issues has been non-existent today. However, developer-side feedback (via PRs) highlights a strong satisfaction with Moltis's internal architecture. The decision to reuse the "screenshot pipeline" for general image delivery shows that developers find the existing URI-based media handling reliable and extensible. The primary use case currently being actively supported is deploying Moltis as a highly interactive Telegram assistant.

## 8. Backlog Watch
*   **[PR #215](https://github.com/moltis-org/moltis/pull/215)**: While this PR was finally closed today, it spent approximately 4 months in the pipeline (Created Feb 23, Updated/Closed Jun 23). Maintainers should review their PR triage workflow to ensure feature contributions aren't facing excessive bottlenecks, as prolonged PR lifecycles can discourage community contributions.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw) based on the GitHub data from 2026-06-24.

### 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing highly active development and community engagement, processing 38 issues and 50 PRs in the last 24 hours. The release of version `v1.1.12.post2` and heavy activity around the `2.0.0b1` migration (AgentScope 2.0) indicate the project is in a rapid transitional and scaling phase. A massive push for mobile UI responsiveness and frontend unit testing dominates the current pull request landscape. However, the community has reported several critical regressions and persistent architectural growing pains (e.g., memory leaks, cron failures) that require immediate maintainer attention to ensure core stability.

### 2. Releases
- **[v1.1.12.post2](https://github.com/agentscope-ai/QwenPaw/releases)**
  - **What's Changed:** This patch release focuses on UI/UX improvements and session management. Key updates include a fix to automatically navigate to a new chat after deleting the current session (preventing dead-end UI states). Additionally, the file preview feature in the console was enhanced to support relative paths, streamlining how users interact with generated files.

### 3. Project Progress
Development velocity is exceptionally high, with 21 PRs merged/closed and a clear, organized roadmap being executed:
- **Mobile Responsiveness Overhaul:** At least 6 PRs were merged/updated today to address mobile web UI truncation and overflow issues across the Settings, Models, Agent Config, Plugin Manager, and Chat header pages ([PR #5397](https://github.com/agentscope-ai/QwenPaw/pull/5397), [PR #5366](https://github.com/agentscope-ai/QwenPaw/pull/5366), [PR #5350](https://github.com/agentscope-ai/QwenPaw/pull/5350)).
- **Frontend Test Coverage:** Massive strides in QA with the merging of backend/frontend unit test suites, specifically targeting Agent hooks, Settings modules, and API integrations ([Issue #5437](https://github.com/agentscope-ai/QwenPaw/issues/5437), [Issue #5433](https://github.com/agentscope-ai/QwenPaw/issues/5433)).
- **AgentScope 2.0 Migration Cleanup:** Actively squashing post-merge migration bugs, such as restoring TUI ACP commands and fixing asyncio `CancelledError` handling ([PR #5443](https://github.com/agentscope-ai/QwenPaw/pull/5443), [PR #5440](https://github.com/agentscope-ai/QwenPaw/pull/5440)).
- **Sub-agent Sandbox Enhancements:** Added session-level page isolation for the browser use tool, preventing multi-session browser conflicts ([PR #5413](https://github.com/agentscope-ai/QwenPaw/pull/5413)).

### 4. Community Hot Topics
The most active discussions center around memory handling, scheduled tasks, and update friction:
- **Built-in skills resetting on update:** Users are highly frustrated that disabled skills (like docx/xlsx) re-enable automatically after every upgrade ([Issue #5262](https://github.com/agentscope-ai/QwenPaw/issues/5262)). *Underlying need: State persistence and non-destructive upgrades.*
- **Cron/Scheduled Task Reliability:** Multiple high-comment threads highlight that agent-created scheduled tasks silently fail to dispatch ([Issue #5398](https://github.com/agentscope-ai/QwenPaw/issues/5398), [Issue #5064](https://github.com/agentscope-ai/QwenPaw/issues/5064)). *Underlying need: Reliable, observable background processing for long-term agent autonomy.*
- **Memory System Optimization:** A highly supported thread requests lifecycle management and auto-archiving for daily memory files, which currently grow indefinitely and bloat the context ([Issue #3995](https://github.com/agentscope-ai/QwenPaw/issues/3995)). *Underlying need: Scalable memory architecture for long-running assistants.*

### 5. Bugs & Stability
Several critical bugs have been reported, many tied to recent version bumps:
1. **High Severity - Frontend Crashes on Large Tool History:** Sessions with extensive tool-use logs cause the Console UI to crash/white-screen due to unhandled `DataContent` types ([Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)).
2. **High Severity - Agent Context/Thinking Truncation:** Models placing responses in `thinking` or `reasoning_content` fields return empty outputs to the user, causing the agent to freeze ([Issue #5416](https://github.com/agentscope-ai/QwenPaw/issues/5416)).
3. **Medium Severity - High Idle Memory Usage:** Users report the desktop client consumes ~1.4GB of RAM immediately upon startup before any operations ([Issue #5441](https://github.com/agentscope-ai/QwenPaw/issues/5441)).
4. **Medium Severity - Python 3.13 Incompatibility:** Plugin installation fails on newer Python environments due to the removal of the `imghdr` module ([Issue #5166](https://github.com/agentscope-ai/QwenPaw/issues/5166)).
5. **Low/Medium Severity - Agent Identity Mismatch:** In CoPaw `2.0.0b1`, `AgentRequest` fails to pass `agent_id`, causing runtime to fall back to default agents regardless of the active workspace ([Issue #5456](https://github.com/agentscope-ai/QwenPaw/issues/5456)). *(Fix Status: Addressed in [PR #5440](https://github.com/agentscope-ai/QwenPaw/pull/5440))*

### 6. Feature Requests & Roadmap Signals
Based on today's issue tracker, the immediate roadmap will likely include:
- **Advanced Memory Management:** Features like recency-aware ranking for daily notes ([Issue #5316](https://github.com/agentscope-ai/QwenPaw/issues/5316)) and the durable "scroll" context manager proposed in [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) are highly requested to solve current memory bloat.
- **LaTeX/KaTeX Rendering:** Desktop users are explicitly requesting native rendering for mathematical formulas ([Issue #5453](https://github.com/agentscope-ai/QwenPaw/issues/5453)).
- **Third-Party Provider Expansion:** Users want better support for emerging models/providers, such as Kimi Coding models using Anthropic-compatible endpoints ([Issue #5427](https://github.com/agentscope-ai/QwenPaw/issues/5427)) and OMLX OpenAI-compatible providers ([Issue #5345](https://github.com/agentscope-ai/QwenPaw/issues/5345)).

### 7. User Feedback Summary
**Positive:** Users are deeply engaged with CoPaw as an autonomous daily driver, specifically praising the console UI and multi-channel capabilities (Discord, QQ, DingTalk).
**Pain Points:** 
- **State persistence:** Users hate having to reconfigure settings (like disabled skills) after updates.
- **Channel Silos:** When subagents require safety approvals (e.g., file deletion), the prompt isn't pushed to external channels (like QQ), breaking the automation flow ([Issue #5295](https://github.com/agentscope-ai/QwenPaw/issues/5295)).
- **Heavy footprint:** The application is becoming resource-heavy, with significant lag when switching chat windows and high idle RAM usage.

### 8. Backlog Watch
- **[Issue #4635](https://github.com/agentscope-ai/QwenPaw/issues/4635):** Request for a mobile-friendly client. *Note: While web UI fixes are actively being merged, this broader feature request has been open for a month and needs an official architectural stance (Native app vs. PWA vs. Web).*
- **[PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321):** The "Scroll Context Manager" PR by a first-time contributor introduces a massive architectural change (SQLite-based durable history REPL). This is a complex PR that has been under review for several days and requires maintainer feedback to avoid blocking the contributor.
- **[Issue #5360](https://github.com/agentscope-ai/QwenPaw/issues/5360):** A community plea to "Stabilize the core app before adding new features." This serves as a vital signal for maintainers to allocate sprint time specifically for bug squashing (memory, mobile UI, agent interactions) rather than net-new capabilities.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-06-24.

### 1. Today's Overview
ZeroClaw is experiencing a period of extremely high development velocity and community engagement, processing 29 issues and 50 pull requests in the last 24 hours. The project is actively sweeping its backlog of high-severity bugs while simultaneously pushing forward on major architectural boundaries ahead of the upcoming v0.8.2 release. Maintainers are heavily focused on hardening the runtime and gateway layers, specifically addressing critical security vulnerabilities in the WASM plugin system and resolving system prompt inconsistencies across multi-model agent loops. 

### 2. Releases
No new releases were published today. However, PR [#8234](https://github.com/zeroclaw-labs/zeroclaw/pull/8234) opened by *singlerider* bumps the workspace version to **v0.8.2**, signaling an imminent release.

### 3. Project Progress
The development team and community merged/closed 18 PRs and 13 issues, advancing core functionality:
*   **Release Preparation:** The v0.8.2 version bump and changelog were finalized in [PR #8234](https://github.com/zeroclaw-labs/zeroclaw/pull/8234). 
*   **Translation Separation:** Completed in [PR #8143](https://github.com/zeroclaw-labs/zeroclaw/pull/8143), `.po` translation files were successfully moved to a dedicated git submodule to clean up the main tree.
*   **Context & History Trimming:** Merged [PR #8048](https://github.com/zeroclaw-labs/zeroclaw/pull/8048), fixing an issue where the turn engine hardcoded history pruning rules, allowing it to properly honor user config.
*   **Vision Routing Fix:** Closed [PR #7345](https://github.com/zeroclaw-labs/zeroclaw/pull/7345), gating path-listing tool results from vision routing to prevent false image triggers.
*   **Daemon Recovery:** Closed [Issue #6037](https://github.com/zeroclaw-labs/zeroclaw/issues/6037), fixing a bug where long-running cron jobs would spam-launch repeatedly.

### 4. Community Hot Topics
*   **WASM Plugin Security (Issues [#5919](https://github.com/zeroclaw-labs/zeroclaw/issues/5919), [#5918](https://github.com/zeroclaw-labs/zeroclaw/issues/5918)):** Both of these P1 issues were closed, indicating that high-risk SSRF protections for `zc_http_request` and environment variable allowlists for `zc_env_read` have been addressed. This underscores a community demand for airtight sandboxing for third-party tools.
*   **Gateway Mismatches (Issue [#8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193)):** A S1 workflow bug triggered discussion when users noticed MCP servers connected and exposed tools successfully on the gateway, but Zerocode TUI sessions completely failed to receive them.
*   **Plugin Architecture RFC (Issue [#6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943)):** An accepted RFC proposing to replace Extism with a direct wasmtime component model host (targeting `wasm-wasip2`). This highlights a strategic shift by power users to deconflict plugin system goals for better stability.

### 5. Bugs & Stability
Several high-severity bugs were reported, with fixes actively in progress:
*   **[S1 - Workflow Blocked] Groq Multi-turn Tool Loops (Issue [#8219](https://github.com/zeroclaw-labs/zeroclaw/issues/8219)):** `gpt-oss-120b` running on Groq fails native multi-turn tool loops due to strict API checks. **Fix Status:** [PR #8232](https://github.com/zeroclaw-labs/zeroclaw/pull/8232) was immediately opened to disable assistant reasoning replay and fix tool serialization.
*   **[S1 - Workflow Blocked] Matrix Deferred Images (Issue [#8151](https://github.com/zeroclaw-labs/zeroclaw/issues/8151)):** Deferred image attachments lose their re-loadable reference in cached history, causing the bot to falsely deny seeing screenshots sent in prior turns.
*   **[S1 - Workflow Blocked] Skill Loading in New Sessions (Issue [#8202](https://github.com/zeroclaw-labs/zeroclaw/issues/8202)):** Starting a new session with `/new` excludes workspace skill bundles from the system prompt.
*   **[S2 - Degraded] Build Break on Voice Wake (Issue [#8236](https://github.com/zeroclaw-labs/zeroclaw/issues/8236)):** A missing `subject` field literal in `voice_wake.rs` breaks `--all-features` builds.

### 6. Feature Requests & Roadmap Signals
Looking at the open trackers and PRs, v0.8.2 and v0.8.3 will focus heavily on cost visibility, enterprise controls, and ACP/MCP integrations:
*   **Cost & Context UI ([PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946)):** Adding a context window usage bar to the TUI and Gateway chat, establishing `config.toml` as the single source of truth for model context limits.
*   **HITL Cross-Channel Approvals ([PR #8231](https://github.com/zeroclaw-labs/zeroclaw/pull/8231)):** Routing tool approvals to a distinct approver channel (e.g., a Slack agent run waiting for a human approval on a mobile app).
*   **ACP MCP Support ([PR #8237](https://github.com/zeroclaw-labs/zeroclaw/pull/8237)):** Giving standalone ACP (Agent Communication Protocol) sessions access to granted MCP tools.
*   **Independent Agent Delegation ([Issue #8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238)):** Allowing specialist agents to run under their own policy and toolset during handoffs.

### 7. User Feedback Summary
Users are deeply engaged in pushing ZeroClaw into multi-agent and multi-channel enterprise environments. 
*   **Pain Point - Latency:** There is strong dissatisfaction with waiting for long-running completions on Asian messaging platforms, resulting in requests for streaming card message support for QQ, DingTalk, and WeChat ([Issue #7531](https://github.com/zeroclaw-labs/zeroclaw/issues/7531), [Issue #8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)).
*   **Pain Point - TUI Keybinds:** Mac users are frustrated by OS-level conflicts with default terminal keybinds, particularly `ctrl+up` ([Issue #8075](https://github.com/zeroclaw-labs/zeroclaw/issues/8075)).
*   **Use Case - Quickstart Risk:** Users adopting ZeroClaw via quickstart are unintentionally hobbling themselves with restrictive risk profiles, requesting the quickstart default to mirror `unbounded` or `yolo` presets ([Issue #8125](https://github.com/zeroclaw-labs/zeroclaw/issues/8125)).

### 8. Backlog Watch
*   **Bulk Revert Recovery ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)):** Opened two months ago, this tracks the manual recovery of 153 commits lost in a bulk rollback (`c3ff635`). It remains an ongoing, high-risk effort that needs continuous maintainer attention to safely restore lost features. 
*   **System Prompt Tool-Availability ([Issue #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)):** Marked as `status:blocked`, this P1 bug tracks a wider architectural issue where system prompts tell reasoning models "No tools are available" across various entry points (WebSocket, multimodal, etc.). It requires a broad refactor of how effective tools are matched per-turn.
*   **In-App Dashboard Upgrades ([Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)):** A high-risk RFC awaiting maintainer review that proposes allowing users to trigger supervised runtime restarts directly from the web dashboard, rather than leaving the UI to apply command-line updates.

</details>