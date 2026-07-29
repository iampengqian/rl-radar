# OpenClaw Ecosystem Digest 2026-07-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-29 22:16 UTC

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

Here is the project digest for OpenClaw based on the provided GitHub data.

# OpenClaw Project Digest (2026-07-30)

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high-velocity development cycle with 500 issues and 500 pull requests updated in the last 24 hours alone. The ratio of active work is striking: 414 open PRs to 414 active issues, indicating a massive backlog of community contributions and active troubleshooting currently under review. While no new releases were shipped today, maintainers are deeply engaged in resolving complex infrastructure regressions and advancing architectural overhauls. The high volume of crash-loop and memory-loss bugs suggests the project is navigating the turbulent complexities of scaling its gateway and context-engine to support advanced multi-agent workflows.

## 2. Releases
*No new releases were published today. The project remains on recent iterations (up to `2026.7.1`), with maintainers actively triaging blocking bugs before cutting a new stable release.*

## 3. Project Progress
Today's development focused heavily on fixing systemic message delivery failures, gateway stability, and UI reliability. 
* **Subagent & Hook Management:** Advanced fixes were made to properly route deferred subagent completions to the correct external requester ([PR #116091](https://github.com/openclaw/openclaw/pull/116091)) and preserve multi-account agent delivery in hooks ([PR #116095](https://github.com/openclaw/openclaw/pull/116095)).
* **Control UI Stability:** Maintainers closed PRs that fixed WebChat session overwriting on every turn ([Issue #77012](https://github.com/openclaw/openclaw/issues/77012)) and ensured long-running sessions maintain correct date reasoning ([PR #116090](https://github.com/openclaw/openclaw/pull/116090)).
* **Gateway & App Support:** Work progressed on moving Wear OS capability keep rules to prevent resource stripping on Android ([PR #116068](https://github.com/openclaw/openclaw/pull/116068)), and adding idle session eviction under pool pressure ([PR #116101](https://github.com/openclaw/openclaw/pull/116101)).

## 4. Community Hot Topics
The community is highly vocal about session persistence and the reliability of third-party tool integrations.
* **Codex Integration Overhead:** A heavily discussed issue ([Issue #91009](https://github.com/openclaw/openclaw/issues/91009)) points out that Codex `PreToolUse` hooks spawn CPU-bound processes that stall the gateway RPC. Users are actively seeking architectural improvements to isolate tool execution overhead.
* **Memory Poisoning & Trust:** A popular feature request ([Issue #7707](https://github.com/openclaw/openclaw/issues/7707)) asks for "Memory Trust Tagging by Source." Users are increasingly aware of prompt-injection vectors via web scrapes and want memory backends to treat external and internal contexts with different trust boundaries.
* **Agent Tool Output Visibility:** Users are frustrated that complex ANSI-heavy tool outputs collapse into unreadable image attachments ([Issue #99241](https://github.com/openclaw/openclaw/issues/99241)). 

## 5. Bugs & Stability
Several critical bugs affecting system availability and data integrity have been reported, many related to recent updates.
* **P0 - Data Wipe on Schema Downgrade:** A severe bug ([Issue #115421](https://github.com/openclaw/openclaw/issues/115421)) where opening a v6 state DB on a v1 install silently wipes the DB and loses all cron jobs during recovery.
* **P0 - Silent Memory Deletion:** The memory-core "Dreaming" pipeline step is deleting daily memory files without warning ([Issue #84882](https://github.com/openclaw/openclaw/issues/84882)).
* **P1 - Gateway Crash Loops:** A newly reported heap OOM during agent turns triggers a restart-recovery loop that dumps 7 core files repeatedly ([Issue #115424](https://github.com/openclaw/openclaw/issues/115424)). Additionally, the crash-loop breaker is permanently suppressing Discord/WhatsApp channels ([Issue #115326](https://github.com/openclaw/openclaw/issues/115326)).
* **P1 - Process & Event Loop Stalls:** OpenClaw is currently leaking unreaped zombie processes from hooks/tools ([Issue #97616](https://github.com/openclaw/openclaw/issues/97616)), and heavy `embedded_run` bootstraps are blocking the event loop for up to 22 seconds. Fix PRs for event-loop stalls are currently waiting on the author ([PR #89040](https://github.com/openclaw/openclaw/pull/89040)).

## 6. Feature Requests & Roadmap Signals
Key roadmap signals point toward robust enterprise scaling, multi-agent orchestration, and better cost controls.
* **Dynamic Provider Discovery:** Users are demanding fully dynamic model discovery, especially for OpenRouter, to break away from static model catalogs ([Issue #10687](https://github.com/openclaw/openclaw/issues/10687)).
* **Per-Model Usage Logging:** Granular cost tracking is needed for enterprise viability, moving away from parsing session JSONLs manually ([Issue #13219](https://github.com/openclaw/openclaw/issues/13219)).
* **Lifecycle Hooks & Routing:** Strong requests for pre-routing message interception ([Issue #81061](https://github.com/openclaw/openclaw/issues/81061)) and gateway lifecycle hooks (`onSubagentComplete`, `onToolCallThreshold`) to enable event-driven workspace automations ([Issue #43454](https://github.com/openclaw/openclaw/issues/43454)).
* **Explicit Ownership Architecture:** A massive structural shift is in progress via [PR #114388](https://github.com/openclaw/openclaw/pull/114388), which aims to entirely remove the "default agent" in favor of explicit ownership to prevent cross-channel work misattribution.

## 7. User Feedback Summary
While users praise OpenClaw's flexibility for family/business automations and Telegram integration, dissatisfaction is growing around UI state volatility. DeepSeek and Kimi models are notably failing to stream reasoning content in the WebChat UI, while MiniMax works flawlessly ([Issue #88079](https://github.com/openclaw/openclaw/issues/88079)). A major pain point across multi-agent setups is message duplication and silent truncation—specifically, Codex-backed replies are silently cutting off at ~1000 characters without throwing abort errors ([Issue #84516](https://github.com/openclaw/openclaw/issues/84516)). Users operating long-running sessions frequently note that cascading OAuth invalidations and cold-cache rollovers result in lost recent context ([Issue #80040](https://github.com/openclaw/openclaw/issues/80040)).

## 8. Backlog Watch
Several high-impact issues remain unresolved or stuck despite community engagement.
* **MCP Transport Failure (Since July 1):** The Model Context Protocol (MCP) loopback transport fails to auto-reconnect on the CLI side after a gateway restart, leaving tools in a broken state despite a false `recovered=1` signal ([Issue #98435](https://github.com/openclaw/openclaw/issues/98435)).
* **Botched Fallback Chains (Since July 2):** When LLM providers trigger safety refusals, OpenClaw fails to properly fall back to secondary models, resulting in a generic "LLM request failed" error instead of graceful degradation ([Issue #98976](https://github.com/openclaw/openclaw/issues/98976)).
* **Windows Zombie Processes (Since April):** CLI commands on Windows remain alive as `node.exe` background processes after execution, heavily degrading host performance over time ([Issue #74378](https://github.com/openclaw/openclaw/issues/74378)). 
* **Subagent Announce Spam (Since Feb):** The inability to cleanly suppress sub-agent announce messages without relying on the model perfectly outputting `ANNOUNCE_SKIP` is still open, causing chat spam in multi-agent routing ([Issue #8299](https://github.com/openclaw/openclaw/issues/8299)).

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the provided community digests.

# Cross-Project Analysis: Open-Source AI Agent Ecosystem (2026-07-30)

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently undergoing a massive phase of architectural maturation, shifting from simple conversational interfaces to highly complex, multi-agent orchestrators. Development velocity across the board is exceptionally high, driven by the need to support advanced features like multi-platform gateway messaging, background automations, and complex tool execution. However, this rapid iteration is introducing severe stability challenges, with many projects wrestling with P0/P1 bugs related to memory management, context preservation, and process lifecycle handling (e.g., zombie processes). The ecosystem is also fragmenting into specialized tiers—ranging from enterprise-grade multi-tenant gateways to lightweight, edge-deployed local assistants.

## 2. Activity Comparison
*Note: Health scores are derived from update volume, PR merge rates, and bug triage responsiveness.*

| Project | Issues (Updated/Open) | PRs (Updated/Closed) | Release Status | Project Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 / 414 | 500 / N/A | No new releases (`2026.7.1`) | ⚠️ Moderate (High tech debt, P0 bugs) |
| **Hermes Agent** | 50 / 45 | 50 / Multiple | No new releases | ✅ Good (High responsiveness, clearing debt) |
| **NanoBot** | 5 / N/A | 33 / 18 | No new releases | ✅ Excellent (High merge rate, stable) |
| **ZeroClaw** | 50 / N/A | 50 / N/A | No new releases | ⚠️ Moderate (Aggressive refactor, `risk:high`) |
| **CoPaw (QwenPaw)**| 25 / 21 | 50 / 15 | Stabilizing (`v2.0.1`) | ✅ Good (Active bug bashing post-release) |
| **IronClaw** | 31 / N/A | 15 / 15 | No new releases (Pending v0.5.0)| ✅ Excellent (Smooth "Reborn" migration) |
| **NanoClaw** | 2 / N/A | 7 / 4 | No new releases | ✅ Stable (Focus on infra reliability) |
| **LobsterAI** | 0 / 0 | 13 / 13 | Imminent (`2026.7.24` internal) | ⚠️ Isolated (Zero community engagement) |
| **Moltis** | Low | 6 / 2 | No new releases | ✅ Stable (Enterprise feature focus) |
| **PicoClaw** | Low | 2 / 0 | No new releases | ⚠️ Stagnant (Low activity, stale PRs) |
| **NullClaw** | Low | 3 / 0 | No new releases | ⚠️ Stagnant (Critical auth bugs open) |
| **TinyClaw / ZeptoClaw**| 0 / 0 | 0 / 0 | N/A | 💤 Dormant |

## 3. OpenClaw's Position
OpenClaw operates as the **high-scale, enterprise-focused behemoth** of this ecosystem. 
* **Advantages:** It boasts by far the largest community and highest raw activity (500+ issues/PRs daily). It is aggressively tackling complex enterprise needs such as multi-agent ownership, per-model usage logging, and dynamic provider discovery.
* **Technical Approach Differences:** Unlike simpler frameworks, OpenClaw relies on a heavy gateway-architecture to bridge multiple platforms (Wear OS, Discord, WhatsApp). However, this complexity currently acts as a disadvantage, leading to severe crash-loops, OOM errors, and "memory poisoning" vulnerabilities that are stalling its stable release.
* **Community Comparison:** While projects like NanoBot and Hermes Agent have highly responsive maintainers achieving high PR-merge ratios, OpenClaw is buckling under a massive 414 PR/Issue backlog. It is currently in a defensive triage phase compared to the offensive feature development of its peers.

## 4. Shared Technical Focus Areas
Several core requirements are universally emerging as the primary engineering challenges for AI agents:
* **Context & Memory Preservation:** As sessions grow longer, preserving context without token bloat is critical. **NanoBot** (Durable State-Graph Planning), **NullClaw** (configurable recall limits), **ZeroClaw** (Memory Lifecycle Separation), and **OpenClaw** (Memory Trust Tagging) are all actively re-architecting how agents compress, recall, and redact conversation history.
* **MCP & Zombie Process Management:** The Model Context Protocol (MCP) is widely adopted but introduces systemic I/O issues. **OpenClaw**, **ZeroClaw**, and **NanoClaw** are all fighting "zombie processes" and event-loop blocking caused by un-reaped tool execution calls and standard I/O MCP transport failures.
* **Multi-Engine Fallback & Cost Control:** To mitigate API rate limits and costs, projects are building dynamic routing. **NanoClaw** (Claude→Codex fallback), **OpenClaw** (Dynamic provider discovery), and **Moltis** (ACP interoperability) are decoupling agents from single LLM providers.
* **Security & Sandboxing:** With agents executing code locally, strict boundaries are required. **IronClaw** (TOCTOU escapes, channel isolation), **Hermes Agent** (MCP tool security approvals), and **CoPaw** (Windows unelevated sandboxing) reflect a strong industry push for secure local execution.

## 5. Differentiation Analysis
* **Target Audience:** **LobsterAI** and **CoPaw** are doubling down on rich Desktop GUIs, local hardware optimization, and interactive editor-assistants ("Cowork"). Conversely, **OpenClaw**, **NanoClaw**, and **ZeroClaw** focus on headless, multi-platform gateway deployments (WhatsApp, Telegram, Slack). **PicoClaw** differentiates by targeting lightweight Edge/IoT environments (Raspberry Pi).
* **Architecture:** **IronClaw** and **ZeroClaw** are undergoing deep structural refactors (WASM-based runtime plugins, libSQL optimizations) to achieve strict deterministic isolation. Meanwhile, Python-based projects like **NanoBot** and **CoPaw** are prioritizing rapid feature integration (App Centers, Skill Marketplaces).
* **Community Dynamics:** **OpenClaw** and **CoPaw** rely on massive open-source contribution streams, resulting in vibrant but chaotic iteration. **LobsterAI** represents a closed, corporate-driven approach (zero community issues), ensuring polish but lacking organic ecosystem feedback.

## 6. Community Momentum & Maturity
* **Tier 1: Rapid Iterators (High Momentum):** **CoPaw** and **NanoBot** are aggressively pushing features (v2.0+ releases, skill marketplaces) backed by highly active contributor bases.
* **Tier 2: Architectural Maturers (Stabilizing):** **IronClaw**, **Hermes Agent**, and **ZeroClaw** have massive momentum, but it is directed inward—cleaning up technical debt, optimizing test suites, and refactoring core boundaries (WASM, Rust/Electron updates) to prepare for enterprise scale.
* **Tier 3: The Struggling Giants:** **OpenClaw** has immense community momentum but is currently losing the stability battle against severe P0 regressions (silent data wipes, OOM crashes). 
* **Tier 4: Stagnating:** **PicoClaw** and **NullClaw** show warning signs. Critical bugs (session state failures, scheduler auth drops) are sitting open for months, risking community attrition.

## 7. Trend Signals
* **Asynchronous Tool Execution is Mandatory:** The era of synchronous, blocking tool calls is ending. The severe friction caused by event-loop blocking (seen in **OpenClaw** and **CoPaw**) signals massive industry demand for "fire-and-forget" agent tasks with `notice_after_complete` hooks.
* **Identity & Trust Boundaries in Memory:** As agents scrape the web and execute tools, the risk of prompt injection and "memory poisoning" is realized. Tagging memory by "Trust Source" (proposed in **OpenClaw**) and decoupling raw chat logs from curated agent memory (**ZeroClaw**) will be critical future standard practices.
* **LLM Provider Abstraction:** High API costs and strict quota limits are forcing frameworks to build resilient routing. The emergence of "Dual-Engine Quota Fallbacks" (**NanoClaw**) and native multi-SDK support is a clear signal that future agents must be model-agnostic to survive production environments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the structured project digest for NanoBot based on the GitHub data provided for July 30, 2026.

### 1. Today's Overview
NanoBot is currently exhibiting exceptionally high development activity and healthy project velocity. In the last 24 hours, the project processed 33 Pull Requests (merging or closing 18) alongside 5 issues. The maintainer team is heavily focused on hardening platform stability, evidenced by a wave of merged regression fixes targeting memory handling, UTF-8 shell encoding, and WebUI performance. Simultaneously, significant architectural advancements are in the review pipeline, including strict type checking enforcement and major feature additions like skill marketplaces. The issue tracker shows active engagement with no unresolved critical bugs, indicating robust maintenance.

### 2. Releases
No new releases were published today. *(Section omitted per guidelines)*

### 3. Project Progress
The development team made substantial progress today by merging/closing **18 PRs**, focusing heavily on infrastructure quality and WebUI reliability:
*   **Strict Type Checking Merged:** [PR #5158](https://github.com/HKUDS/nanobot/pull/5158) successfully integrates BasedPyright in `strict` mode across 273 Python modules, significantly improving codebase reliability and developer experience.
*   **Memory & Session Consolidation Stabilized:** [PR #5157](https://github.com/HKUDS/nanobot/pull/5157) fixed a critical bug where media paths were silently dropped during session consolidation, making files unrecoverable.
*   **Cross-Platform Shell Support:** [PR #5160](https://github.com/HKUDS/nanobot/pull/5160) resolved native pipeline input corruption for non-ASCII characters on Windows PowerShell 5.1.
*   **WebUI Enhancements:** [PR #5116](https://github.com/HKUDS/nanobot/pull/5116) introduced a new Discover view featuring skill marketplace search and trending lists. Additionally, [PR #5162](https://github.com/HKUDS/nanobot/pull/5162) added optimistic message delivery tracking (`sending` -> `accepted` -> `failed`) for a smoother chat experience.

### 4. Community Hot Topics
*   **Evolving Towards True Multi-Agent Collaboration:** [Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) (6 comments) sparked deep discussion regarding the limitations of the current subagent system. Users and maintainers identified that existing subagents act more like isolated background tasks rather than collaborative entities, highlighting a strong community desire for persistent identities and shared task states.
*   **OpenRouter Traffic Attribution:** [PR #5094](https://github.com/HKUDS/nanobot/pull/5094) initiated a technical discussion on properly setting HTTP-Referer headers to ensure NanoBot traffic is accurately attributed to its canonical product site on OpenRouter.

### 5. Bugs & Stability
Today's development cycle aggressively targeted and resolved several high-severity bugs and regressions. Ranked by severity:
1.  **[CRITICAL/RESOLVED] Media Path Loss During Archiving:** Uploaded files became unrecoverable after session consolidation because paths stored in `media[]` were ignored. 
    *   *Fix:* Resolved via [PR #5157](https://github.com/HKUDS/nanobot/pull/5157).
2.  **[HIGH/OPEN] Session Lock Memory Leak:** `AgentLoop` retained session keys for its entire lifetime, causing idle locks to leak memory. 
    *   *Fix Proposed:* [PR #5151](https://github.com/HKUDS/nanobot/pull/5151) (Using `WeakValueDictionary`).
3.  **[HIGH/OPEN] Unbounded Exec Output Buffering:** Exec sessions retained too much stdout/stderr data in memory.
    *   *Fix Proposed:* [PR #5150](https://github.com/HKUDS/nanobot/pull/5150) implements a fixed head/tail budget for output draining.
4.  **[MEDIUM/OPEN] Cron Service Race Condition:** [Issue #5163](https://github.com/HKUDS/nanobot/issues/5163) reported that manual cron runs lose their success state if the WebUI polls the store concurrently.
5.  **[MEDIUM/RESOLVED] PowerShell 5.1 Encoding Corruption:** [Issue #5159](https://github.com/HKUDS/nanobot/issues/5159) detailed how non-ASCII pipeline inputs were corrupted on Windows. 
    *   *Fix:* Resolved via [PR #5160](https://github.com/HKUDS/nanobot/pull/5160).

### 6. Feature Requests & Roadmap Signals
Based on today's active issues and PRs, the next version of NanoBot will likely focus on **Durable Execution and Advanced Agent Orchestration**:
*   **Durable State-Graph Planning ([PR #5034](https://github.com/HKUDS/nanobot/pull/5034)):** A massive architectural enhancement to the `/goal` flow. This will allow NanoBot to preserve structured execution plans, track dependencies, and recover gracefully from mid-task failures—preventing the AI from losing context after history compaction.
*   **Advanced Multi-Agent Framework ([Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)):** Upgrading subagents from simple task delegators to a true collaborative network with shared state.
*   **Self-Hosted Telegram Gateways ([PR #4919](https://github.com/HKUDS/nanobot/pull/4919)):** Adding support for custom Bot API base URLs to bypass standard Telegram rate limits and support enterprise infrastructure.

### 7. User Feedback Summary
Users are heavily utilizing NanoBot across diverse environments, particularly pushing the limits of its automation and cross-platform capabilities. A clear pain point for Windows users has been terminal encoding issues (specifically PowerShell fallbacks), which was swiftly addressed today. Additionally, power users running long-running automation tasks report friction with state management—specifically regarding how memory compaction handles media files and how the UI tracks background job statuses. Overall satisfaction remains high, evidenced by rapid, high-quality contributor submissions for bugs (e.g., defensive `.get()` fixes for malformed memory messages in [PR #4812](https://github.com/HKUDS/nanobot/pull/4812)).

### 8. Backlog Watch
Several important, high-priority PRs currently remain open due to merge conflicts or pending reviews. Maintainers should prioritize reviewing the following to keep development momentum unblocked:
*   **[PR #5154](https://github.com/HKUDS/nanobot/pull/5154) (Priority P1, Conflict):** Fixes a regression where primitive items in Responses API SSE streams crash the parser. Currently marked as having conflicts.
*   **[PR #5139](https://github.com/HKUDS/nanobot/pull/5139) (Priority P1, Conflict):** An alternative/parallel approach to preserving media paths during session consolidation.
*   **[PR #5153](https://github.com/HKUDS/nanobot/pull/5153) (Priority P1, Conflict):** Fixes `MemoryStore` crashes when raw-archiving messages with missing roles or non-string timestamps.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the structured project digest for Hermes Agent based on the GitHub data provided.

### 1. Today's Overview
The Hermes Agent project is exhibiting massive developmental momentum alongside significant growing pains as it scales its user base. Over the last 24 hours, the project saw intense activity with 50 updated issues (45 currently open) and 50 active PRs, indicating a highly reactive and engaged development community. Much of the current focus is triaging critical regressions related to Windows desktop updates and multi-platform authentication routing, while core contributors actively push forward architectural overhauls, such as a massive test suite optimization and remote tool execution capabilities. Overall project health is highly active, though the volume of P1 bugs in the desktop and CLI updaters suggests recent releases may have shipped with destabilizing edge cases.

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Project Progress
Development velocity remains incredibly high, with maintainers merging several important structural, stability, and feature improvements today:
*   **Massive Test Suite Optimization:** Closed a critical baseline flakiness PR ([#74330](https://github.com/NousResearch/hermes-agent/pull/74330)) that fixed all broken tests at the root cause. This paves the way for an open PR ([#74383](https://github.com/NousResearch/hermes-agent/pull/74383)) that prunes the test suite by 58% (down to 19,757 tests) and halves wall-clock time while maintaining test contracts.
*   **MCP & Gateway Stability:** Merged a fix for the event loop crash on `/exit` ([PR #74139](https://github.com/NousResearch/hermes-agent/pull/74139)), alongside closing the original tracking issue ([#60197](https://github.com/NousResearch/hermes-agent/issues/60197)). Significant progress was also made in Slack DM-root streaming parity ([PR #72103](https://github.com/NousResearch/hermes-agent/pull/72103)).
*   **Desktop & Session Resumption:** Opened an incremental cold-resume optimization for the Desktop app ([PR #62799](https://github.com/NousResearch/hermes-agent/pull/62799)), making cold resume bounded and observable without breaking TUI contracts.
*   **Agent Delegation:** Introduced same-turn background result injection for delegated tasks ([PR #74378](https://github.com/NousResearch/hermes-agent/pull/74378)), moving away from history rewrites and polling.

### 4. Community Hot Topics
The most engaged community discussions revolve around agent autonomy, security boundaries, and tool execution:
*   **MCP Tool Security (12 comments):** [Issue #16462](https://github.com/NousResearch/hermes-agent/issues/16462). Users are highly concerned that dynamically registered MCP tools can be called by the LLM without human approval. The community is requesting a first-invoke approval step to prevent unauthorized actions, reflecting a strong need for safety rails as agent capabilities expand.
*   **Cronjob Remote Execution (10 comments):** [Issue #29849](https://github.com/NousResearch/hermes-agent/issues/29849). Users utilizing Docker/SSH backends are frustrated that `no_agent=True` cronjobs ignore the remote `terminal.backend` and execute scripts locally on the scheduler host, breaking infrastructure-as-code expectations.
*   **Synchronous Memory Recall (8 comments):** [Issue #5820](https://github.com/NousResearch/hermes-agent/issues/5820). A highly requested architectural change where users want the agent to synchronously recall memory for the *current* query rather than queuing it for the next turn, noting that current background prefetching often results in irrelevant context retrieval.

### 5. Bugs & Stability
Several high-severity (P1/P2) bugs have been reported or highlighted today, primarily affecting Windows installations, authentication, and desktop rendering:
*   **[P1] Windows Desktop Update Blockers:** Two critical issues ([#74326](https://github.com/NousResearch/hermes-agent/issues/74326), [#74386](https://github.com/NousResearch/hermes-agent/issues/74386)) report that the desktop Update button is permanently broken on Windows for gateway-enabled installs. The three-layer update chain (Electron → Rust → Python) fails to coordinate the gateway pause, making updates impossible.
*   **[P1] Credential Pool Regression:** [Issue #74339](https://github.com/NousResearch/hermes-agent/issues/74339). OpenAI credential-pool write-through to global root self-disables after the first refresh per profile, causing authentication breakages on subsequent refreshes.
*   **[P1] Auth Priority Bug:** [Issue #58546](https://github.com/NousResearch/hermes-agent/issues/58546). The Anthropic token resolver incorrectly prioritizes auto-discovered Claude Code OAuth credentials over explicitly defined API keys, posing a billing and security risk.
*   **[P1] Desktop OOM Crash:** [Issue #69180](https://github.com/NousResearch/hermes-agent/issues/69180). The Electron renderer enters a busy-loop causing native memory explosion and OOM crash loops on empty chats.
*   **[P2] TCC Grant Reset on macOS:** [Issue #74331](https://github.com/NousResearch/hermes-agent/issues/74331). Due to ad-hoc signing, macOS revokes Full Disk Access and Accessibility permissions upon every Hermes.app reinstall.

### 6. Feature Requests & Roadmap Signals
Key feature requests signal the community's desire for deeper platform integration, better non-English localization, and secure data management:
*   **Enterprise/Security Storage:** A pluggable database backend instead of hardcoded SQLite to secure years of accumulated health and personal data ([Issue #66238](https://github.com/NousResearch/hermes-agent/issues/66238)).
*   **Rich TTS Providers:** Request to add Xiaomi MiMo V2 as a native TTS provider for high-quality, emotion-controllable Chinese voice synthesis ([Issue #8830](https://github.com/NousResearch/hermes-agent/issues/8830)). Turkish locale support for the Desktop app is also currently in PR ([PR #57218](https://github.com/NousResearch/hermes-agent/pull/57218)).
*   **Gateway & Session Routing:** Adding trusted sender UID envelopes for shared gateway sessions (Discord/Telegram/Slack) to properly isolate platform-authenticated user identities ([Issue #69961](https://github.com/NousResearch/hermes-agent/issues/69961)).
*   *Prediction:* Given the heavy sweep tagging on gateway threading and message delivery, the next version will likely focus heavily on multi-user gateway stability and remote execution parity (e.g., [PR #63966](https://github.com/NousResearch/hermes-agent/pull/63966) splitting runtime to allow client-side tool execution).

### 7. User Feedback Summary
Users are actively pushing Hermes Agent into complex, multi-platform daily driver territories, particularly utilizing it for voice conversations, desktop automation, and gateway messaging. However, dissatisfaction is rising regarding Windows platform stability—specifically pathing issues with spaces ([Issue #60808](https://github.com/NousResearch/hermes-agent/issues/60808)) and WSL/Windows CUA-driver translations ([Issue #63938](https://github.com/NousResearch/hermes-agent/issues/63938)). Desktop voice conversation users are also experiencing frustrating UX loops where the microphone fails to re-arm after playback ([Issue #73649](https://github.com/NousResearch/hermes-agent/issues/73649)). Despite these friction points, the rapid response from maintainers in submitting highly specific routing and hook fixes shows a very healthy, responsive lifecycle.

### 8. Backlog Watch
*   **Critical Test Suite Bug:** [Issue #74358](https://github.com/NousResearch/hermes-agent/issues/74358) needs immediate maintainer attention. The gateway test currently calls `os._exit(0)`, killing the pytest process silently and marking 6,943 tests as "passed" without ever running them.
*   **macOS Accessibility Regression:** [Issue #44763](https://github.com/NousResearch/hermes-agent/issues/44763). The `computer_use` tool's spatial grounding is broken on macOS (element bounds always returning `[0,0,0,0]`), leaving UI automation unreliable on Apple Silicon. This has been awaiting reproduction/decision since June.
*   **TUI/CLI History Bug:** [Issue #74315](https://github.com/NousResearch/hermes-agent/issues/74315) (Addressed via [PR #74350](https://github.com/NousResearch/hermes-agent/pull/74350)) where switching personalities swallows the next user prompt entirely. Maintainers should prioritize merging this PR as it disrupts core conversational flow.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the GitHub data from 2026-07-30.

### 1. Today's Overview
PicoClaw is currently experiencing a period of maintenance and incremental updates, with no major version releases in the immediate cycle. Project activity over the past 24 hours has been low, characterized by one new bug report and progress on two existing pull requests. Notably, the community is actively working on expanding channel integrations, specifically with DingTalk image support. However, a newly reported critical bug regarding session management in dispatched agents indicates there are underlying stability issues to address in the multi-agent architecture.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
No pull requests were merged or closed today. However, two open PRs saw updates:
*   **DingTalk Media Advancement:** [PR #3283](https://github.com/sipeed/picoclaw/pull/3283) continues to be refined, bringing support for inbound picture/image messages on the DingTalk channel, complete with OpenAPI token caching and graceful degradation for unsupported formats. 
*   **Infrastructure Consolidation:** [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) is active, focusing on developer experience and user onboarding by migrating installation scripts directly into the main repository from the docs repo.

### 4. Community Hot Topics
The most notable community activity centers around extending PicoClaw's communication channel capabilities:
*   **[PR #3283](https://github.com/sipeed/picoclaw/pull/3283) - DingTalk Image Support:** This PR by `MrTreasure` is a significant feature enhancement for enterprise users. By introducing token caching (`tokenMu`, `accessToken`) and image downloading methods, it highlights the community's need for rich media processing in Asian enterprise messengers.
*   **[Issue #3301](https://github.com/sipeed/picoclaw/issues/3301) - Multi-Agent Routing Bug:** A fresh report from user `j-v` regarding the DeepSeek model. This sparks an important technical conversation about the robustness of state management when users switch between different AI agents within the same deployment.

### 5. Bugs & Stability
*   **[HIGH] [Issue #3301](https://github.com/sipeed/picoclaw/issues/3301): Session state failure in non-default agents.** 
    *   **Details:** The `/clear` command and automatic session compression fail to execute when chats are routed to non-default agents via dispatch rules. 
    *   **Context:** Reported on PicoClaw Version 0.3.1 running on a Raspberry Pi, using DeepSeek via OpenCode Go across Discord and Telegram.
    *   **Status:** No fix PR is currently available. This is a high-severity bug because session compression and history clearing are essential for context-window management, cost control, and user privacy. 

### 6. Feature Requests & Roadmap Signals
Based on the current PRs and issues, the project's near-term trajectory appears focused on:
*   **Rich Media Handling:** The work in [PR #3283](https://github.com/sipeed/picoclaw/pull/3283) signals a push toward multimodal capabilities across all integrated chat platforms (moving beyond text-only).
*   **IoT and Edge AI:** The bug report utilizing Raspberry Pi ([Issue #3301](https://github.com/sipeed/picoclaw/issues/3301)) indicates a strong use case for PicoClaw as a lightweight, local AI assistant.
*   **Streamlined Onboarding:** Moving installation scripts ([PR #1951](https://github.com/sipeed/picoclaw/pull/1951)) points to an upcoming effort to reduce friction for new deployments.

### 7. User Feedback Summary
User feedback today highlights a few specific pain points and use cases:
*   **Pain Point:** Context management is currently fragile. Users relying on complex, multi-agent setups are hitting walls with basic utility commands (`/clear`) and automated memory management.
*   **Use Cases:** Users are building decentralized, edge-deployed assistants (Raspberry Pi) that bridge multiple platforms (Discord, Telegram) using open-weight or accessible models (DeepSeek). 
*   **Satisfaction:** While the platform clearly supports advanced, customized routing, users are experiencing friction with fundamental session mechanics when deviating from the default agent path.

### 8. Backlog Watch
Maintainers should direct their attention to the following stale or pending items:
*   **[PR #3283](https://github.com/sipeed/picoclaw/pull/3283) [stale]:** Created on July 22nd, this DingTalk image support PR has gone stale. Given that it introduces valuable enterprise features, it requires a code review or maintainer feedback to progress toward merging.
*   **[PR #1951](https://github.com/sipeed/picoclaw/pull/1951) [stale]:** Open since March 2026, this infrastructure migration has been lingering for over four months. It needs to be either prioritized for merge or closed if the installation methodology has fundamentally changed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-30

## 1. Today's Overview
NanoClaw exhibits a highly active and healthy development pace, characterized by a strong focus on system stability, infrastructure hardening, and expanded integration support. Over the past 24 hours, the project processed 7 pull requests—merging or closing 4 of them—while engaging with 2 active community issues. Maintainers and contributors are clearly prioritizing backend reliability, evidenced by fixes targeting container orchestration, database migrations, and messaging platform synchronization. The current trajectory shows a maturing AI agent framework actively adapting to third-party API changes and optimizing its resource management. 

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Development momentum today was driven by critical infrastructure improvements and complex bug resolutions. Four PRs were successfully closed, advancing the project's stability:
*   **Container Stability ([PR #3060](https://github.com/nanocoai/nanoclaw/pull/3060)):** Merged a crucial infrastructure fix that adds the `--init` flag to agent container spawn args, ensuring PID 1 correctly reaps zombie processes.
*   **Slack Integration Overhaul ([PR #2904](https://github.com/nanocoai/nanoclaw/pull/2904)):** Closed a significant bug fix that ensures Slack thread history is properly reloaded on `@mention`, keeping the agent contextually aware of ongoing conversations.
*   **Session Routing ([PR #2440](https://github.com/nanocoai/nanoclaw/pull/2440)):** Closed a PR resolving a poll-loop edge case where container restarts with pending inbound messages caused routing failures. 
*   **Hardened Images ([PR #3150](https://github.com/nanocoai/nanoclaw/pull/3150)):** Closed a setup enhancement allowing users to fetch a prebuilt, hardened agent container image from the NanoClaw registry (built by Echo) instead of building it locally.

## 4. Community Hot Topics
*   **Model Provider Expansion ([Issue #1350](https://github.com/nanocoai/nanoclaw/issues/1350)):** With 8 upvotes and ongoing discussion since March, this is a highly requested feature. Users want native integration for the GitHub Copilot SDK (GPT-4.1) to break the sole dependency on Anthropic's Claude models. This highlights a strong community desire for model-agnostic flexibility and cost control.
*   **Dual-Engine Quota Fallback ([PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057)):** A massive feature branch currently in open review, battle-tested on live WhatsApp deployments. It introduces automatic Claude→Codex quota overflow, handoff recaps, and proactive quota warnings. The high complexity and production testing of this PR indicate a pressing need for high-availability agent deployments that can bypass API rate limits seamlessly.

## 5. Bugs & Stability
*   **🔴 [High] Telegram `rich_message` Content Dropped ([Issue #3151](https://github.com/nanocoai/nanoclaw/issues/3151)):** A critical integration failure following Telegram's Bot API 10.1 update. Formatted text pastes from websites arrive completely empty, silently dropping message content without throwing errors. *Status: Opened today, no fix PR yet.*
*   **🟡 [Medium] Database Destination Backfill ([PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)):** Identified a bug where existing messaging-group wirings were missing channel destinations. *Status: Open PR provides migration 021 to safely backfill the missing data without overwriting custom local names.*
*   **🟢 [Low] CLI Mount Configuration ([PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149)):** Minor UX bug where the `groups config add-mount` CLI command lacked a `--rw` (read-write) flag. *Status: Open PR provides the fix.*

## 6. Feature Requests & Roadmap Signals
Based on current issue tracking and active PRs, the short-term roadmap is heavily leaning toward **multi-engine support and high availability**.
*   **Quota Fallback Systems:** The progression of [PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057) (Claude→Codex fallback) proves the project is moving toward resilient, multi-provider architectures. 
*   **Alternative AI Backends:** High community demand in [Issue #1350](https://github.com/nanocoai/nanoclaw/issues/1350) for the GitHub Copilot SDK suggests that decoupling the agent runner from a single LLM provider is a highly anticipated future milestone.
*   **Prediction for Next Version:** The next release will likely formalize multi-engine handoffs (Codex/Copilot support) and include robust database migrations for messaging groups.

## 7. User Feedback Summary
NanoClaw users are actively deploying the framework in complex, multi-platform environments (WhatsApp, Slack, Telegram), leading to highly pragmatic feedback. Users are generally satisfied with the containerized agent approach but express frustration when platform-specific nuances break the agent's context (e.g., Slack thread visibility, Telegram API changes). Another major pain point is API quota management; users running heavy deployments are feeling the friction of single-provider limits, driving strong demand for dual-engine fallback mechanisms and alternative SDKs.

## 8. Backlog Watch
*   **[Issue #1350](https://github.com/nanocoai/nanoclaw/issues/1350) - GitHub Copilot SDK Integration:** Created on March 22, this issue has accumulated 8 upvotes and spans over 4 months. It requires maintainer triage to either officially claim it, tag it for the roadmap, or open it up to community contribution.
*   **[PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057) - Dual-engine quota fallback:** Open since mid-July, this large, production-tested PR needs code review and merging to unblock users struggling with Claude API quotas.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the GitHub data provided.

# NullClaw Project Digest (2026-07-30)

## 1. Today's Overview
NullClaw is currently experiencing active development iteration, specifically focusing on enhancing its memory recall mechanisms and fixing critical integration bugs. Over the past 24 hours, the project saw steady activity with 3 updated pull requests and active discussions around a significant scheduling bug. While no new releases were cut today, maintainers are actively merging feature drops and community members are contributing highly targeted fixes for gateway integrations. The project's health appears stable, with development squarely focused on refining tool execution and memory context windows.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress
Development today centered around optimizing the assistant's memory architecture and closing out lingering feature requests. 
*   **Memory Enhancements Merged:** The older [PR #961](https://github.com/nullclaw/nullclaw/pull/961) (`feat(memory): add configurable auto-recall, recall_limit, max_context_bytes`) was finally closed, likely superseded or finalized by the updated [PR #979](https://github.com/nullclaw/nullclaw/pull/979). This introduces vital JSON configuration keys (`auto_recall`, `recall_limit`, `max_context_bytes`) that will allow users to fine-tune how memory is injected into LLM contexts—preventing token bloat.
*   **Gateway Auth Fixes:** [PR #980](https://github.com/nullclaw/nullclaw/pull/980) (`fix(scheduler): persist paired token to disk`) was opened to address a missing link in the `/pair` endpoint workflow, ensuring the scheduler can properly authenticate against gateway admin routes.

## 4. Community Hot Topics
The most notable active discussion is around [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) (**[bug] Problem with scheduler unauthorized**). 
*   **Underlying Needs:** Users deploying NullClaw in self-hosted, decentralized environments (e.g., Ubuntu running external Ollama instances) rely heavily on background tasks (cron/scheduler) for automated agent behaviors. The fact that this issue has generated 3 comments and remains open indicates a critical need for reliable, persistent authentication between the core assistant and its gateway/scheduler modules in production environments.

## 5. Bugs & Stability
*   🔴 **High Severity: Scheduler Authorization Failure** ([Issue #915](https://github.com/nullclaw/nullclaw/issues/915)). Users report that the scheduler is completely non-functional in chat environments like Telegram. 
    *   *Status:* A direct fix is currently being reviewed in [PR #980](https://github.com/nullclaw/nullclaw/pull/980). The root cause has been identified: the `/pair` endpoint generates a token in memory but fails to write it to disk, causing the scheduler's `readPairedToken()` function to return null and reject gateway admin routes. 

## 6. Feature Requests & Roadmap Signals
Recent PR activity points to a clear roadmap signal: **Context Window Optimization**. 
With the introduction of configurable memory keys in [PR #979](https://github.com/nullclaw/nullclaw/pull/979), the project is signaling a shift towards giving users stricter control over token economics. Features like `max_context_bytes` and `recall_limit` predict that the next major release will likely focus on "Smart Memory & Resource Management," allowing NullClaw to run more efficiently on local, consumer-grade hardware (like the RTX 3090 mentioned in user setups) without exceeding model context limits.

## 7. User Feedback Summary
Real-world usage data from today's issues highlights a specific developer/power-user persona:
*   **Use Cases:** Users are running local LLMs (e.g., `qwen3.6:27b`) via Ollama, integrated directly into messaging platforms like Telegram. 
*   **Pain Points:** While base LLM generation and basic tool calling work well, users are frustrated by state-management drops—specifically, the assistant losing its authentication state when moving from active chat to background scheduled tasks. 
*   **Satisfaction:** General sentiment is positive regarding core capabilities, but background/daemon integrations are currently a source of friction.

## 8. Backlog Watch
*   👀 **[Issue #915](https://github.com/nullclaw/nullclaw/issues/915):** Created on May 15th, this critical bug has been active for over two months. It requires maintainer attention to ensure [PR #980](https://github.com/nullclaw/nullclaw/pull/980) is reviewed and merged promptly to restore scheduler functionality for gateway users.
*   👀 **[PR #961](https://github.com/nullclaw/nullclaw/pull/961) & [PR #979](https://github.com/nullclaw/nullclaw/pull/979):** The memory feature PRs have been in discussion since June 18th. Maintainers should finalize the merge of #979 to deliver the highly anticipated memory configuration controls to the community.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the GitHub data from 2026-07-30.

### 1. Today's Overview
IronClaw is currently experiencing an intense and highly productive phase of development, driven largely by its "Reborn" architecture migration. The project exhibits outstanding health and velocity, having processed 100 total updates across issues and PRs in the last 24 hours, with a strong merge ratio (31 closed issues, 15 merged/closed PRs). Engineering efforts are heavily focused on hardening security boundaries, refactoring the WebUI, and migrating core infrastructure to a new process journal model. While several high-priority bugs regarding automation execution and database stability were reported, they are being met with immediate, structural fixes by the core team.

### 2. Releases
*No new releases were published today.* 
However, it is worth noting that PR [#5598](https://github.com/nearai/ironclaw/pull/5598) has been open since July 3rd, queueing breaking API changes for `ironclaw_common` (0.4.2 -> 0.5.0) and `ironclaw_skills` (0.3.0 -> 0.4.0). The next official release will require migration notes for these API changes.

### 3. Project Progress
Significant architectural and stability milestones were achieved today through several major PR merges:
*   **Database Stability ([PR #6863](https://github.com/nearai/ironclaw/pull/6863)):** Fixed severe libSQL writer contention by introducing a shared `LibSqlRuntime` with exactly one write-admission lane. 
*   **Testing & QA Infrastructure ([PR #6825](https://github.com/nearai/ironclaw/pull/6825)):** Closed the final workstream for the Hermetic capability testing platform, successfully bridging fault profiles with end-to-end failure fate assertions.
*   **Error Recovery ([PR #6841](https://github.com/nearai/ironclaw/pull/6841)):** Fixed checkpointless pre-model recovery to automatically re-drive transient failures before the first `BeforeModel` checkpoint.
*   **WebUI Architecture ([PR #6830](https://github.com/nearai/ironclaw/pull/6830)):** Merged the foundational redesign of the agent workspace, cleanly integrating the new design system package.

### 4. Community Hot Topics
*   **Reborn Product Surface Migration ([Issue #3031](https://github.com/nearai/ironclaw/issues/3031)):** This Epic continues to be a massive coordination point (7 comments). It tracks the overarching migration to preserve user behavior during the transition, highlighting the community's deep investment in backward compatibility.
*   **Hermetic Testing Platform ([Issue #6524](https://github.com/nearai/ironclaw/issues/6524)):** A highly active discussion (4 comments) emphasizing the community's need for deterministic, meaningful coverage of every supported capability and critical user journey.
*   **Gmail Auto-Authorization Bug ([Issue #6348](https://github.com/nearai/ironclaw/issues/6348)):** A recent bug bash revealed that reinstalling the Gmail extension bypasses OAuth consent. This generated significant engagement, underscoring the community's strict expectations around authorization security.

### 5. Bugs & Stability
Today's bug reports highlight edge cases in automation and provider integrations, ranked by severity:
1.  **P1 - Automations Execute as Interactive Chat ([Issue #6879](https://github.com/nearai/ironclaw/issues/6879)):** Unattended background runs are structurally failing because the system treats them as interactive chat turns, causing erratic behavior on smaller models. 
2.  **P1 - Gemini Provider 400 Errors ([Issue #6786](https://github.com/nearai/ironclaw/issues/6786), [Issue #6880](https://github.com/nearai/ironclaw/issues/6880)):** Native Gemini and Gemini OAuth integrations are failing on every tool call due to empty type schemas and bypassed shape tools.
3.  **P2 - WebUI Blocked by Pending Auth ([Issue #6790](https://github.com/nearai/ironclaw/issues/6790)):** Restarting Reborn during a pending OpenAI Codex device authorization completely blocks the WebUI from loading.
4.  **P2 - libSQL Turn-State Latch Failure ([Issue #6815](https://github.com/nearai/ironclaw/issues/6815)):** The instance serves 503 errors indefinitely after a single write-behind flush failure. *(Fix merged today in [PR #6863](https://github.com/nearai/ironclaw/pull/6863) and [PR #6862](https://github.com/nearai/ironclaw/pull/6862))*.

### 6. Feature Requests & Roadmap Signals
*   **Advanced Channel Isolation ([PR #6364](https://github.com/nearai/ironclaw/pull/6364) & [PR #6831](https://github.com/nearai/ironclaw/pull/6831)):** Upcoming features focus heavily on restricted, host-mediated egress for messaging channels (Telegram/Slack) and a standardized messaging framework with a closed vocabulary of host-owned operations.
*   **Security & TOCTOU Defenses ([PR #6817](https://github.com/nearai/ironclaw/pull/6817)):** A major feature/fix pushing local filesystem traversal to be fd-rooted to permanently close Time-of-Check to Time-of-Use (TOCTOU) escapes.
*   **Model Context Management ([PR #6855](https://github.com/nearai/ironclaw/pull/6855) & [PR #6845](https://github.com/nearai/ironclaw/pull/6845)):** Upcoming releases will likely feature vastly improved context overflow handling, specifically host-managed compaction that deterministically redacts secrets rather than failing outright.

### 7. User Feedback Summary
Users testing the Reborn WebUI beta via Railway and local instances are actively pushing the system to its limits. The primary pain points center around **automated task reliability** (runs hanging indefinitely or failing to trigger properly in the UI) and **third-party LLM provider compatibility** (specifically Gemini's tool-calling schemas). Despite these friction points, user satisfaction regarding the project's architectural direction remains high. Contributors and users alike are heavily praising the shift towards WASM-based channel adapters and stricter sandbox boundaries.

### 8. Backlog Watch
*   **Long-running Release PR ([PR #5598](https://github.com/nearai/ironclaw/pull/5598)):** Open for nearly a month, this dependency PR contains major breaking changes for core libraries. It requires final maintainer attention to cut a new release.
*   **Legacy Channel Porting Tracker ([Issue #3577](https://github.com/nearai/ironclaw/issues/3577)):** This tracker for porting v1 channels to the new Reborn ProductAdapter architecture has been open since May and still needs resolution to complete the migration surface.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the provided GitHub data.

### 1. Today's Overview
LobsterAI is currently experiencing a high-velocity development phase, marked by the successful merge of a major release batch ([Release/2026.7.24](https://github.com/netease-youdao/LobsterAI/pull/2407)) and 13 total PR closures in the last 24 hours. Activity is entirely driven by the core development team, predominantly focusing on refining the "Cowork" (collaborative AI) features, authentication stability, and model compatibility. The project demonstrates strong operational health and rapid feature iteration, though there is a noticeable lack of new organic community engagement, with 0 new issues or community PRs in the same timeframe.

### 2. Releases
*No new official GitHub releases were published today.* However, [PR #2407](https://github.com/netease-youdao/LobsterAI/pull/2407) (Release/2026.7.24) was merged, serving as the internal release cutoff tag. It encompasses broad updates across the renderer, main process, skills, artifacts, and openclaw modules, indicating an official versioned release is likely imminent.

### 3. Project Progress
The team made substantial progress in UI/UX polish, memory management, and backend LLM orchestration. Key advancements include:
*   **Release Integration:** Merged the comprehensive [Release/2026.7.24](https://github.com/netease-youdao/LobsterAI/pull/2407) batch.
*   **Cowork Feature Enhancements:** Improved side chat context handling. Users can now accumulate selected text excerpts as context ([PR #2405](https://github.com/netease-youdao/LobsterAI/pull/2405)) and send them without artificial length limits ([PR #2406](https://github.com/netease-youdao/LobsterAI/pull/2406)).
*   **Model Compatibility:** Added compatibility refactoring for Kimi K3 auto-only modes ([PR #2404](https://github.com/netease-youdao/LobsterAI/pull/2404)).
*   **UI Polish & UX:** Fixed export modal layering conflicts via body portals ([PR #2376](https://github.com/netease-youdao/LobsterAI/pull/2376)), prevented scroll jumps during session refreshes ([PR #2364](https://github.com/netease-youdao/LobsterAI/pull/2364)), and aligned Windows caption button hover colors for visual consistency ([PR #2355](https://github.com/netease-youdao/LobsterAI/pull/2355)).
*   **Update Cadence:** Increased the automatic update check frequency from 12 hours to 2 hours ([PR #2347](https://github.com/netease-youdao/LobsterAI/pull/2347)), ensuring users get patch updates faster.

### 4. Community Hot Topics
*No active community topics were registered today.*
With 0 new issues and 0 comments/reactions across recent pull requests, the community pulse is currently dormant in the tracker. The project's momentum is completely sustained by internal corporate development (authors `liuzhq1986` and `fisherdaddy`) rather than community-driven PRs or issues.

### 5. Bugs & Stability
Several stability fixes were merged today, addressing both frontend flickers and backend regressions. Notably, a critical backend regression was caught and reverted before release.
1.  **[High] Run-Safety Contract Token Burn:** [PR #2403](https://github.com/netease-youdao/LobsterAI/pull/2403) reverted the client-side Run Safety design introduced in PR #2400 due to release-blocking bugs (receipt identity keying, false-success followups, compaction runId handling, byte-accounting mismatches). *Fix status: Reverted and safely disabled.*
2.  **[Medium] Authentication Callback Leaks:** [PR #2360](https://github.com/netease-youdao/LobsterAI/pull/2360) fixed an issue where login retries could spawn multiple local callback servers. *Fix status: Merged.*
3.  **[Medium] IM Message Flicker:** [PR #2363](https://github.com/netease-youdao/LobsterAI/pull/2363) fixed periodic flickering in the Instant Messaging interface by properly reconciling mismatched gateway tails. *Fix status: Merged.*
4.  **[Low] Export Modal Overlap:** [PR #2376](https://github.com/netease-youdao/LobsterAI/pull/2376) fixed an issue where the export modal hid behind the sidebar due to CSS stacking conflicts. *Fix status: Merged.*

### 6. Feature Requests & Roadmap Signals
Based on the closed release and PR trajectories, the roadmap is heavily leaning into **"Cowork" (Collaborative Multi-Agent/AI)** and **memory/context management**. 
*   **Signals:** The inclusion of "selected text as removable side-chat context" ([PR #2405](https://github.com/netease-youdao/LobsterAI/pull/2405)) indicates LobsterAI is evolving into a more interactive editor-assistant rather than just a standalone chatbot. The rapid updates to LLM orchestration (reverting the run-safety gate, Kimi K3 compat) suggest they are heavily optimizing token usage and multi-model routing. 
*   **Prediction for Next Version:** The next version will likely feature a heavily stabilized Cowork UI, complete with robust LRU memory eviction ([PR #1322](https://github.com/netease-youdao/LobsterAI/pull/1322)) and seamless multi-LLM provider switching.

### 7. User Feedback Summary
*Insufficient data for direct sentiment analysis.*
There are no new user issues to gauge satisfaction. However, indirectly, the fast patching of visual bugs (like scroll jumps and hover colors) and the reduction of the update check interval to 2 hours ([PR #2347](https://github.com/netease-youdao/LobsterAI/pull/2347)) strongly suggest that the team is highly responsive to internal QA and beta-channel feedback regarding UI/UX polish.

### 8. Backlog Watch
Two significant pull requests have been left open (or marked stale) for nearly 4 months and require maintainer attention:
*   **[Stale] [PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232):** Fixes a bug where scheduled tasks fail to push real-time UI updates on their *first* execution. This directly impacts user experience for automation features and needs review/merge.
*   **[Stale] [PR #1322](https://github.com/netease-youdao/LobsterAI/pull/1322):** Implements true LRU (Least Recently Used) eviction for the LLM memory judge cache. This is a crucial performance optimization for long conversations, preventing hot memory keys from being dropped. 
*   **[Dependency] [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277):** Dependabot pull request to bump Electron from 40.2.1 to 43.2.0. Given it's an Electron app, major framework bumps should be validated and merged soon to prevent security debt.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the structured project digest for Moltis based on the GitHub data provided.

### 1. Today's Overview
As of 2026-07-30, the Moltis project exhibits highly active and focused development, particularly in expanding integration capabilities and hardening system security. The repository saw significant attention to Pull Requests, with four substantial new feature/infrastructure PRs currently open and under review, primarily driven by core contributor `penso`. While no new releases were cut today, the closing of UI bugs and the introduction of Agent Communication Protocol (ACP) support indicate steady maturation toward a forthcoming release. Overall project health appears robust, with active iteration on enterprise-grade features like observability, messaging integrations, and access controls.

### 2. Releases
*No new releases were published today.*

### 3. Project Progress
Development today focused on fixing UI bugs and advancing major infrastructure and integration PRs.
*   **UI Bug Resolution:** PR [#1172](https://github.com/moltis-org/moltis/pull/1172) `fix(web): hide archived cron sessions by default` was closed/merged. This successfully applies shared archived-session preferences to the Cron tab and includes Playwright regression tests.
*   **Notification Improvements:** PR [#1173](https://github.com/moltis-org/moltis/pull/1173) `feat(pwa): make push notifications reliable and non-disruptive` was closed/merged. This ensures cross-device reliability, privacy-safe titles, and unread badge management for Progressive Web App (PWA) users.
*   **Currently Under Review (Open PRs):**
    *   PR [#1174](https://github.com/moltis-org/moltis/pull/1174): Adding deep instrumentation, Langfuse v4 export, and operational OTLP backends.
    *   PR [#1170](https://github.com/moltis-org/moltis/pull/1170): Gating privileged tools and `/sh` commands behind an explicit per-account `operators` list to separate access from privilege.
    *   PR [#1166](https://github.com/moltis-org/moltis/pull/1166): Upgrading Slack integration with acknowledgment reactions, lifecycle phases, and Block Kit support.
    *   PR [#1169](https://github.com/moltis-org/moltis/pull/1169): Exposing Moltis as an Agent Communication Protocol (ACP) agent over stdio.

### 4. Community Hot Topics
*Today's data lacked explicit comment counts, but activity volume highlights these as the focal points of current development:*
*   **Observability & Instrumentation ([PR #1174](https://github.com/moltis-org/moltis/pull/1174)):** The push to add backend-neutral agent instrumentation and Langfuse integration signals a strong underlying need from users (likely enterprise or power users) to trace AI completion turns, reasoning, and token usage.
*   **Slack Integration Reliability ([PR #1166](https://github.com/moltis-org/moltis/pull/1166)):** Enhancing Slack bots with progress signals (reactions) and handling queueing/callback bursts shows a high demand for using Moltis seamlessly within chat-driven work environments.

### 5. Bugs & Stability
*   **[Low/Medium Severity - Fixed]** **Cron Session UI Bug:** Issue [#1111](https://github.com/moltis-org/moltis/issues/1111) reported that archiving a cron session had no visible effect. 
    *   *Status:* Resolved. Fix was implemented and verified today via PR [#1172](https://github.com/moltis-org/moltis/pull/1172), which hides archived runs by default and includes regression testing.

### 6. Feature Requests & Roadmap Signals
Based on the current open PRs, the immediate roadmap for Moltis is heavily focused on **Agentic interoperability, security, and observability**.
*   **Agent Interoperability:** PR [#1169](https://github.com/moltis-org/moltis/pull/1169) introducing ACP (Agent Communication Protocol) support over stdio indicates Moltis is positioning itself to communicate seamlessly with other AI agents and orchestrators.
*   **Granular Security:** PR [#1170](https://github.com/moltis-org/moltis/pull/1170) separating access from privilege (per-account operators list) hints that Moltis is preparing for wider deployment in multi-user or multi-tenant environments where host-tool execution needs strict gating.
*   *Prediction for Next Version:* The next release will likely be a minor version bump heavily focused on enterprise readiness, packaging the ACP exposure, Langfuse observability, and the newly hardened Slack/PWA features.

### 7. User Feedback Summary
*   **Pain Point:** Users rely heavily on the Cron and scheduled session features but were experiencing UI clutter because archived sessions weren't hiding properly (Issue [#1111](https://github.com/moltis-org/moltis/issues/1111)).
*   **Use Cases:** Users are interacting with Moltis via Slack as a primary interface, requiring non-disruptive acknowledgment of background tasks. Additionally, users are utilizing Moltis as a PWA, necessitating reliable, synchronized push notifications across multiple tabs and devices without compromising privacy.
*   **Satisfaction:** Bug resolution times appear healthy (Issue #1111 created in June, actively fixed in late July with corresponding tests), showing maintainers are addressing technical debt and community-reported bugs alongside building new features.

### 8. Backlog Watch
*   **Long-Standing Bug Turnaround:** Issue [#1111](https://github.com/moltis-org/moltis/issues/1111) (created 2026-06-06) sat open for nearly two months before being addressed yesterday/today. 
*   **Maintainer Bottleneck Risk:** Developer `penso` is responsible for all four currently open, highly complex PRs (spanning ACP, security gating, instrumentation, and Slack integration). These massive architectural contributions will require thorough code review to prevent merge bottlenecks and ensure architectural integrity.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw) based on the provided GitHub data.

# CoPaw (QwenPaw) Project Digest
**Date:** 2026-07-30

## 1. Today's Overview
The CoPaw project is exhibiting exceptionally high community engagement and development velocity. With 25 issues updated (21 open) and 50 PRs updated (35 open) in the last 24 hours, the ecosystem is buzzing with activity following the recent `v2.0.1` rollout. Maintainers and contributors are actively addressing post-2.0 release friction, focusing heavily on UI/UX bugs, context compression regressions, and architectural improvements like background task execution. The influx of `[first-time-contributor]` PRs indicates healthy project growth and an approachable contribution pipeline.

## 2. Releases
No new releases were published in the last 24 hours. The project is currently stabilizing on version `2.0.1` (Desktop and Console).

## 3. Project Progress
Significant architectural and feature advancements are currently under review in pull requests:
*   **Desktop Automation & Sandboxing:** PR [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) introduces native desktop GUI automation for Windows and macOS via accessibility-first and Tauri control modes. Parallelly, PR [#6383](https://github.com/agentscope-ai/QwenPaw/pull/6383) adds an unelevated sandbox specifically for Windows, boosting local execution security.
*   **Agent Lifecycle & Task Management:** PR [#6272](https://github.com/agentscope-ai/QwenPaw/pull/6527) implements cancellation-safe lifecycle hooks, ensuring partial responses and cron histories are saved during task interruption.
*   **Provider & Memory Enhancements:** PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) unifies provider discovery and model metadata routing. Additionally, PR [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) brings reranker support to ReMe memory search, enhancing long-term recall accuracy.

## 4. Community Hot Topics
The most pressing discussions revolve around UI data integrity and background task execution:
*   **UI State Management Chaos:** A series of rapid-fire issues by user `aEgoist` (Issues [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560), [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558), [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559)) highlights severe data loss, chaotic session forking, and missing UX features (copy/undo) in the Console UI. *Underlying need:* The frontend state management desperately needs refactoring to handle multi-agent session switching and real-time rendering without data loss.
*   **Background Execution & Blocking:** Users frequently run heavy local tasks via the Agent. Issue [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) (closed) and Issue [#6056](https://github.com/agentscope-ai/QwenPaw/issues/6056) (closed) highlight long-standing regressions where subprocesses block sessions or ignore timeouts. *Underlying need:* Robust asynchronous tool execution so agents can manage long-running shell commands without freezing user sessions.

## 5. Bugs & Stability
The transition to v2.0.x has introduced several high-severity regressions, though many already have fix PRs incoming:
1.  **Critical: Context Compression Role Error** - Issue [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541): Scroll context compression injects messages as `role="user"` instead of `role="system"`, triggering continuous `MODEL_EXECUTION_ERROR` on strict OpenAI-compatible APIs (like DeepSeek). *(No direct fix PR seen yet, highly critical).*
2.  **High: Windows Installer Infinite Loop** - Issue [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534): The NSIS installer loops infinitely on Windows because it detects its own process as "still running", blocking installation entirely.
3.  **High: Memory Data Loss on Crash** - Issue [#6542](https://github.com/agentscope-ai/QwenPaw/issues/6542): JSONL dialog logs are not flushed in real-time, causing total loss of conversation history if the console unexpectedly crashes.
4.  **Medium: MCP Tool Name Sanitization** - Issue [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557): MCP tool names starting with hyphens (`-`) cause 400 Bad Request errors on strict LLM APIs like Kimi. *(Fix available: PR [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561)).*
5.  **Medium: CloudPaw `/mission` Command Crash** - Issue [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533): CloudPaw's master prompt monkey-patch is missing kwargs, throwing a `TypeError` on any `/mission` call. *(Fix available: PR [#6535](https://github.com/agentscope-ai/QwenPaw/pull/6535)).*

## 6. Feature Requests & Roadmap Signals
Based on user issues and active PRs, the next iteration will likely focus on:
*   **Asynchronous Task Notifications:** Users want non-blocking interactions. Issue [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475) requests a `notice_after_complete` tool, allowing agents to say "I'll let you know when this is done" and continue chatting.
*   **Automatic Session Checkpoints:** To combat data loss, users requested a built-in auto-archive mechanism (Issue [#6542](https://github.com/agentscope-ai/QwenPaw/issues/6542)). This aligns perfectly with PR [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269), which introduces workspace-scoped shadow Git stores for recoverable conversation history.
*   **Advanced Channel Streaming:** Issue [#6421](https://github.com/agentscope-ai/QwenPaw/issues/6421) requests typewriter-style streaming output for the QQ Bot channel, signaling a push to bring all integrated chat platforms to feature parity.

## 7. User Feedback Summary
*   **Pain Points:** Internationalization and path-encoding remain frustrating. Issue [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510) shows Chinese file paths being improperly URL-encoded, breaking file access in Feishu channels. Desktop users on high-resolution displays (Issue [#6549](https://github.com/agentscope-ai/QwenPaw/issues/6549)) are frustrated by the input box being pushed off-screen.
*   **Satisfaction:** Power users are deeply leveraging v2.0 features like ComfyUI integration and the App Center. The rapid community contributions to diverse areas—from Matrix E2EE encryption on Python 3.12 (PR [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486)) to OneBot QQ media cleaning (PR [#6543](https://github.com/agentscope-ai/QwenPaw/pull/6543))—shows high developer satisfaction and deep embedding into varied local workflows.

## 8. Backlog Watch
*   **CI/CD Pipeline Blocker:** Issue [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) reports that the `real-behavior-proof.yml` workflow is broken for ALL forked PRs, returning a `Resource not accessible by integration` error. This is critically blocking community contributions and needs immediate maintainer attention to update GitHub Actions tokens/permissions. 
*   **ACP Model Discovery:** Issue [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) points out a protocol gap where the ACP `new_session` response lacks the `models` field, breaking third-party client integrations. (Currently being addressed by PR [#6531](https://github.com/agentscope-ai/QwenPaw/pull/6531)).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-07-30.

### 1. Today's Overview
ZeroClaw is experiencing a period of intense architectural maturation and high community engagement, with 50 issues and 50 pull requests updated in the last 24 hours. The maintainers and contributors are currently focused on a major refactoring cycle, heavily prioritizing the shift from compile-time features to runtime WASM plugins, restructuring memory lifecycles, and improving system stability. Nearly all top RFCs and high-priority PRs carry a `risk:high` tag, indicating aggressive but necessary under-the-hood changes. Despite the lack of a recent release, the project's health is highly active, driven by a mix of dedicated principal contributors and AI-assisted community submissions refining the framework's core boundaries.

### 2. Releases
No new releases were recorded today.

### 3. Project Progress
Progress today was defined by structural CI improvements and critical reliability fixes for AI tool execution. 
*   **MCP & Tool Execution:** A major fix advanced to prevent zombie processes from stdio MCP servers ([PR #8948](https://github.com/zeroclaw-labs/zeroclaw/pull/8948)). Additionally, concurrent MCP stdio calls are being fixed to prevent reply mismatching ([PR #9418](https://github.com/zeroclaw-labs/zeroclaw/pull/9418)).
*   **Config & CI Hardening:** CI processes are being optimized for speed via Blacksmith runners ([PR #9115](https://github.com/zeroclaw-labs/zeroclaw/pull/9115)). A crucial CI fix ensures that `zeroclaw-plugins` WASM tests will now actually execute in the pipeline ([Issue #9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462)). 
*   **Inert Surface Cleanup:** The default for `context_compression` was changed to `false` to warn users about its inert state after previous refactors ([PR #9299](https://github.com/zeroclaw-labs/zeroclaw/pull/9299)).

### 4. Community Hot Topics
The most active discussions center around system boundaries, extensibility, and memory architecture:
*   **Memory Lifecycle Separation:** [Issue #9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) (11 comments) proposes decoupling session history from agent-curated long-term memory. This highlights a growing user need for agents that can distinctly remember facts without cluttering their context windows with raw conversation logs.
*   **Unified Attachment Architecture:** [Issue #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) (4 comments) and [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) (4 comments) advocate for making `zeroclaw-runtime` the single owner of conversation execution, treating web and channels merely as transport adapters.
*   **AI-Assisted Development Norms:** The community is actively establishing doctrines for AI usage in the repo, such as hardening AI PR-review bots against prompt injection ([Issue #9508](https://github.com/zeroclaw-labs/zeroclaw/issues/9508)).

### 5. Bugs & Stability
Several critical bugs were identified, with several currently awaiting fix merges:
*   **Crashloop / Supervisor Failure (S2/S3):** Enabling channels (Signal, Voice Call) without credentials causes the supervisor to crashloop every 2 seconds ([Issue #6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)).
*   **Broken Delivery & Silent Failures (S3):** Cron jobs created via the CLI are silently discarding their output because the delivery mode is hardcoded to `None`, recording successful runs despite no output ([Issue #9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)).
*   **Over-Aggressive Redaction (S3):** The high-entropy security detector is mistakenly redacting Solana wallet addresses in outbound Telegram messages, breaking crypto-related use cases ([Issue #9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)).
*   **Windows Compilation (S3):** `zeroclaw-config` unit tests completely fail to compile on Windows due to an ungated Unix environment guard ([Issue #9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422) - *Now closed*).

### 6. Feature Requests & Roadmap Signals
ZeroClaw is signaling a massive shift toward a dynamic, runtime-first architecture for the next version. Key roadmap indicators include:
*   **WASM Runtime Plugins:** Moving away from compile-time Cargo features toward dynamic WASM plugins for tools and channels ([Issue #8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)).
*   **Expanded Provider Support:** Realtime speech-to-speech capabilities for Gemini Live ([Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)) and a Mixture-of-Agents (MoA) virtual model provider for complex task routing ([Issue #8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)).
*   **OpenAI Compatibility:** An RFC to implement an OpenAI Chat Completions adapter, allowing ZeroClaw to connect easily to UI frontends like LobeChat and Open WebUI ([Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)).

### 7. User Feedback Summary
Users are heavily utilizing ZeroClaw across diverse messaging platforms (Telegram, Nextcloud, Slack, Email) but express frustration with channel-specific edge cases. For instance, the email channel cannot preserve CC recipients for "Reply All" chains ([Issue #9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506)), and Nextcloud Talk is failing due to an incorrect Bot API implementation ([Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)). On the security front, developers appreciate ZeroClaw's robust secret encryption but require more refined control, such as the requested `KeySource` trait to classify master keys by deployment form ([Issue #9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)). 

### 8. Backlog Watch
*   **HMAC Tool Receipts:** [Issue #4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) (Open since March 2026) proposes adding cryptographic receipts to tool executions for hallucination detection. While highly upvoted and discussed, it awaits final implementation.
*   **Lark Security Vulnerability:** [PR #9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) addresses a timing attack vulnerability on the Lark channel by switching to a constant-time string comparison. It is currently marked as a `stale-candidate` and needs author action.
*   **Slack & WeChat Stability:** Fixes for Slack polling mode ([PR #8975](https://github.com/zeroclaw-labs/zeroclaw/pull/8975)) and silent message drops in WeChat/iLink ([PR #8968](https://github.com/zeroclaw-labs/zeroclaw/pull/8968)) have been open for weeks and risk going stale without maintainer intervention.

</details>