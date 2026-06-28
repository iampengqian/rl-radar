# OpenClaw Ecosystem Digest 2026-06-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-28 22:18 UTC

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

Here is the structured project digest for OpenClaw based on the GitHub data provided.

### 1. Today's Overview
OpenClaw is currently experiencing extremely high development velocity and community engagement, with exactly 500 issues and 500 pull requests updated in the last 24 hours alone. However, the project is facing a significant bottleneck, as 448 of those issues remain open/active and 407 PRs are still pending review or merging. The core engineering focus appears to be a massive architectural shift to SQLite for session and transcript management, alongside ongoing battles with gateway memory leaks and state management regressions. With no new releases cut today, the massive volume of open PRs and unresolved P1 bugs suggests the maintainers are likely navigating a complex integration and stabilization phase.

### 2. Releases
*No new releases were recorded today.*

### 3. Project Progress
While 407 PRs remain open, a few notable efforts show where project momentum is heading:
*   **Core Architecture Migration:** The most critical active progress is the SQLite migration ([Issue #88838](https://github.com/openclaw/openclaw/issues/88838)), actively being implemented via [PR #96625](https://github.com/openclaw/openclaw/pull/96625). This aims to deprecate the problematic `sessions.json` flat-file storage.
*   **Security and Approvals:** Development continues on creating safer MCP tool executions with plain-language approval flows ([PR #81864](https://github.com/openclaw/openclaw/pull/81864)) and new gateway token scopes ([PR #81792](https://github.com/openclaw/openclaw/pull/81792)).
*   **Stability Fixes:** Several important stability PRs are ready for maintainer review, including fixes for terminal group chat session drops ([PR #89045](https://github.com/openclaw/openclaw/pull/89045)) and cron job execution crashes ([PR #85249](https://github.com/openclaw/openclaw/pull/85249)).

### 4. Community Hot Topics
*   **SQLite Migration Tracking ([Issue #88838](https://github.com/openclaw/openclaw/issues/88838)):** With 36 comments, this is the most discussed item. The community and maintainers are heavily focused on refactoring how OpenClaw stores session data to eliminate long-standing I/O bottlenecks.
*   **Live Dev Agent Observation ([Issue #77598](https://github.com/openclaw/openclaw/issues/77598)):** A 24/7 observational thread tracking a live dev agent's behavior and trajectory (22 comments). This highlights the community's deep interest in autonomous agent reliability and long-horizon task execution.
*   **MCP Consent Envelopes ([Issue #78308](https://github.com/openclaw/openclaw/issues/78308)):** A highly discussed feature request (13 comments) to standardize how external tools ask for operator approval, emphasizing the community's need for robust, secure guardrails around agentic actions.

### 5. Bugs & Stability
The project is currently plagued by several high-severity (P1) bugs related to memory management and session states, largely stemming from legacy architecture:
1.  **Gateway OOM & Unbounded Log Growth ([Issue #55334](https://github.com/openclaw/openclaw/issues/55334) / [Issue #45718](https://github.com/openclaw/openclaw/issues/45718)):** Gateway memory grows continuously until crashing because `sessions.json` duplicates `skillsSnapshot` and `systemPromptReport` on every run without pruning. *Status: Being addressed by the broader SQLite migration.*
2.  **Codex App-Server Regression ([Issue #88312](https://github.com/openclaw/openclaw/issues/88312)):** A severe regression causing multi-tool agent turns to stall and fail entirely since version 2026.5.27.
3.  **Stuck Session Recovery Deadlock ([Issue #76038](https://github.com/openclaw/openclaw/issues/76038)):** A dual-failure in the recovery mechanism leaves sessions stuck in a `processing` state, eventually causing the Gateway to freeze and be force-killed by systemd.
4.  **Over-Scoped Repair Deadlock ([Issue #74484](https://github.com/openclaw/openclaw/issues/74484)):** A lockout bug where the CLI cannot approve gateway repair requests because the repair requires permissions the CLI currently lacks.

### 6. Feature Requests & Roadmap Signals
Based on recent PRs and issues, the immediate roadmap points toward **expandability and internationalization**:
*   **Inference & Provider Expansions:** Native support for **Pioneer.ai** with live model discovery ([PR #97566](https://github.com/openclaw/openclaw/pull/97566)) and expanded rich-media outbound support for **Telegram** bots ([PR #97556](https://github.com/openclaw/openclaw/pull/97556)).
*   **Localization (i18n):** Strong signals pointing to upcoming localized UI and commands, specifically for Chinese-speaking users. There are active PRs for config page translations ([PR #81743](https://github.com/openclaw/openclaw/pull/81743)) and feature requests for i18n slash command descriptions ([Issue #79458](https://github.com/openclaw/openclaw/issues/79458)).
*   **Clean Installs:** Improvements to `openclaw doctor` to exit non-zero on invalid configurations ([PR #81829](https://github.com/openclaw/openclaw/pull/81829)), improving CI/CD pipeline reliability.

### 7. User Feedback Summary
Users are expressing heavy frustration with **infrastructure degradation and resource mismanagement**. The transition to agentic workflows has exposed severe limits in OpenClaw's state management, leading to crash loops and slow response times that disrupt daily automations. Furthermore, users report steep drops in reliability during routine tasks—such as WebChat transcripts being overwritten on every turn ([Issue #77012](https://github.com/openclaw/openclaw/issues/77012)) and silent regressions breaking Discord and Telegram integrations. While the plugin ecosystem is praised, users are dissatisfied with how silently invalid plugins can fail, causing hours of opaque debugging ([Issue #78301](https://github.com/openclaw/openclaw/issues/78301)).

### 8. Backlog Watch
The maintainer team has a massive backlog of P1 PRs and Issues that require immediate intervention:
*   **Stale Auto-Fallback Origin ([PR #92819](https://github.com/openclaw/openclaw/pull/92819)):** A P1, Large-sized PR addressing stale model selections that has been waiting for proof/review since mid-June.
*   **Session-Isolated App-Server Clients ([PR #81777](https://github.com/openclaw/openclaw/pull/81777)):** A critical XL PR aimed at fixing Codex thread bindings and runtime isolation, stuck in "waiting on author" since May.
*   **Hardcoded Upload Limits ([Issue #71142](https://github.com/openclaw/openclaw/issues/71142)):** A highly upvoted issue where the Control UI silently blocks files >5MB, breaking media-understanding workflows for power users. Still waiting on a product decision.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 29, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently undergoing a phase of rapid architectural maturation, shifting from standalone chat interfaces to complex, multi-platform, multi-agent systems. Development velocity across the board is exceptionally high, with top-tier projects processing 50+ daily updates, heavily focusing on stabilizing runtime execution and expanding channel integrations (Telegram, Matrix, enterprise messaging). A clear convergence has emerged around the need for deterministic execution, robust context management, and "Human-in-the-Loop" (HITL) safety guardrails, as users deploy these agents in production for long-horizon automation. Consequently, maintainers are battling technical debt—specifically state management bottlenecks and silent security failures—to support increasingly demanding, enterprise-grade use cases.

### 2. Activity Comparison
*Health Score is calculated based on update velocity, PR merge rates, and bug resolution responsiveness.*

| Project | Active Issues (24h) | Active PRs (24h) | Releases (24h) | Health Score | Status Summary |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 0 | **B-** (High churn, review bottleneck) | High activity but massive open PR/Issue backlog; infrastructure buckling. |
| **Hermes Agent** | 50 | 50 | 0 | **A-** (Very active, merging fast) | Aggressive forward momentum; Windows bugs being patched quickly. |
| **ZeroClaw** | 50 | 50 | 0 | **B+** (High velocity, complex scope) | Massive structural updates; preparing for major milestone releases. |
| **IronClaw** | ~20 | 49 | 0 | **A** (Stable, feature-rich) | Strong enterprise focus (RBAC); preparing for a major version bump. |
| **NanoBot** | 7 | 23 | 0 | **A** (Highly responsive) | Excellent PR merge rate; actively hardening security and multi-agent logic. |
| **LobsterAI** | ~5 | 5 | 0 | **B+** (Stabilizing, UI focus) | Clearing backlog; focused on UI/UX and skill state management. |
| **CoPaw** | ~4 | 5 | 0 | **B+** (Stabilizing) | Deep backend refactoring; migrating to Agentscope 2.0. |
| **NanoClaw** | ~3 | 4 | 0 | **B-** (Pending review) | Security focus; currently blocked by review bottlenecks and critical bugs. |
| **Moltis** | 1 | 2 | 0 | **B** (Steady, niche) | Targeted optimizations; addressing edge-case multimodal friction. |
| **PicoClaw** | 1 | 2 | 0 | **B+** (Stable, low churn) | Incremental feature accumulation. |
| **NullClaw** | 1 | 1 | 0 | **B** (Stable, niche) | Focused development on specific HITL and edge deployment. |
| **TinyClaw** | 0 | 0 | 0 | **N/A** | Inactive in the last 24 hours. |
| **ZeptoClaw** | 0 | 0 | 0 | **N/A** | Inactive in the last 24 hours. |

### 3. OpenClaw's Position
OpenClaw possesses one of the largest, most active communities in the ecosystem, operating at a massive scale (500 active issues/PRs daily). Its primary advantage is its vast plugin ecosystem and ambition to be the ultimate reference architecture, drawing heavy community engagement for live agent observation and deep architectural RFCs. However, its technical approach is currently its biggest liability: reliance on legacy flat-file storage (`sessions.json`) has caused severe I/O bottlenecks and gateway out-of-memory (OOM) crashes. While peers like Hermes and ZeroClaw are successfully merging rapid stability updates, OpenClaw is bogged down by a massive backlog of unreviewed P1 PRs and is forced to undertake a complex, emergency migration to SQLite to save its state management architecture.

### 4. Shared Technical Focus Areas
*   **Context Window & Multimodal Optimization:** As LLM context limits are easily exhausted by tool outputs and media, projects are implementing aggressive truncation and compression. *NanoBot, LobsterAI, Moltis, and PicoClaw* are all actively refactoring context retention (block-aligned eviction) and downscaling base64 image payloads to prevent token cannibalization and gateway crashes.
*   **Human-in-the-Loop (HITL) & Security Guardrails:** Trust and safety are paramount. *NullClaw (structured approval flows), OpenClaw (MCP consent envelopes), IronClaw (RBAC), and NanoClaw (Path traversal fixes)* are all building deterministic boundaries to prevent autonomous agents from executing destructive or unauthorized shell commands.
*   **Channel Agnosticism & Rich UI:** Users demand agents live natively on third-party comms. *Hermes, ZeroClaw, OpenClaw, and NanoBot* are actively merging rich-media support (location pinning, formatting) and streaming drafts for platforms like Telegram, WhatsApp, Matrix, and Feishu.
*   **State & Session Persistence:** Moving away from volatile memory. *OpenClaw (migrating to SQLite), CoPaw (Scroll context strategy), and Hermes* are aggressively refactoring how transcripts and session states are stored to prevent cross-session bleeding and database corruption.

### 5. Differentiation Analysis
*   **Enterprise vs. Consumer Focus:** *IronClaw* and *ZeroClaw* are leaning heavily into enterprise deployment, focusing on granular Role-Based Access Control (RBAC), per-agent environment variables, and air-gapped cost tracking. Conversely, *Hermes Agent* and *OpenClaw* target power users and "always-on" personal assistants across desktop and mobile messaging apps.
*   **Multi-Agent vs. Single-Agent Architecture:** *NanoBot* and *ZeroClaw* are differentiating by building Agent-to-Agent (A2A) orchestration, allowing supervisor agents to delegate to sub-agents (with depth guards to prevent infinite loops). *NullClaw* and *LobsterAI* remain focused on highly capable, sophisticated single-agent experiences.
*   **Deployment Targets:** *Moltis* and *NullClaw* show signals of edge/IoT computing (interest in WASM and ESP32 microcontrollers), whereas *CoPaw* and *NanoBot* are heavily invested in local data-science workflows (native Conda/Virtualenv support).

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iteration & Scaling (OpenClaw, Hermes, ZeroClaw):** These projects have massive inbound traffic. *Hermes* is managing this best, rapidly merging performance and bug PRs. *OpenClaw* is struggling under its own weight, facing severe stabilization bottlenecks.
*   **Tier 2: Maturation & Feature Lock (IronClaw, NanoBot):** High responsiveness with clear, targeted roadmaps (e.g., IronClaw's v0.29.1 RBAC push). These communities are highly technical, focused on deep systemic fixes (e.g., NanoBot's context caching and prompt injection defenses).
*   **Tier 3: Stabilization & Niche Focus (LobsterAI, CoPaw, NanoClaw, Moltis, PicoClaw, NullClaw):** Lower raw update volume but highly targeted, stable development. *CoPaw* is navigating a major framework migration smoothly, while others are incrementally patching UI, multimedia, and deployment edge cases.

### 7. Trend Signals
*   **Prompt Caching is Mandatory:** NanoBot and ZeroClaw users are reporting high friction and cost spikes when prompt prefixes are mutated by truncation. Developers must ensure context eviction strategies align with LLM provider prefix-caching mechanisms to keep operational costs viable.
*   **The Rise of Deterministic Agent Execution:** Moving away from purely autonomous loops, projects like ZeroClaw (SOP step routing) and OpenClaw are integrating Standard Operating Procedures (SOPs) directly into the engine boundary to enforce deterministic, step-by-step execution.
*   **Plugin & Tool Overload:** As agent toolboxes grow, token bloat from tool schemas is impacting latency. IronClaw's implementation of "Progressive Tool Disclosure" (holding back ~91 tool schemas to save 25k tokens) signals a major architectural shift required to maintain agent response speeds.
*   **Silent Failures Break Trust:** ZeroClaw and OpenClaw users are highly frustrated by "silent no-ops" (e.g., security scopes failing to apply, SQLite search falling back to keyword matching). Future agent frameworks must prioritize loud, explicit failures over graceful degradation in security and state boundaries.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the structured project digest for NanoBot based on the GitHub data provided for June 29, 2026.

### 1. Today's Overview
NanoBot is currently experiencing a high-velocity development phase, characterized by exceptional community engagement with 23 pull requests updated and 7 issues actively discussed in the last 24 hours. The maintainers are aggressively merging changes (10 PRs closed/merged) focused on hardening security, fixing UI bugs, and optimizing context management. The volume of open PRs (13) addressing advanced features—such as Agent-to-Agent (A2A) delegation and multi-model routing—indicates a rapid architectural maturation. Overall project health appears robust, with active friction points being addressed promptly by contributors.

### 2. Releases
**None.** 
*No new releases were published in the last 24 hours. Development is currently concentrated on merging fixes and features into the main branch.*

### 3. Project Progress
Significant advancements were merged today, pushing the project's stability and capabilities forward:
*   **WebUI Stability Fixed:** [PR #4565](https://github.com/HKUDS/nanobot/pull/4565) resolved an issue where the WebUI got stuck in a "processing" state after a gateway restart, improving the reliability of the stop button.
*   **Context Management Refactored:** [PR #4574](https://github.com/HKUDS/nanobot/pull/4574) safely refactored the session retention logic to return a `RetentionResult` object instead of a bare tuple, preventing potential slicing bugs. 
*   **Legacy Data Recovery:** [PR #4566](https://github.com/HKUDS/nanobot/pull/4566) fixed a bug where corrupt legacy-stem session files were silently dropped during the listing process.
*   **Cron Job Safety:** [PR #4564](https://github.com/HKUDS/nanobot/pull/4564) added necessary guards to public APIs to prevent crashes when the store is unavailable.
*   **Documentation:** General repository guidelines were added ([PR #4575](https://github.com/HKUDS/nanobot/pull/4575)) alongside contributor documentation ([PR #2120](https://github.com/HKUDS/nanobot/pull/2120)).

### 4. Community Hot Topics
*   **Prefix Caching Invalidation** ([Issue #4222](https://github.com/HKUDS/nanobot/issues/4222)): Users found that `max_messages` truncation constantly mutates the prompt prefix, defeating LLM prompt caching and increasing costs. This spawned two highly technical PRs today: [PR #4568](https://github.com/HKUDS/nanobot/pull/4568) (block-aligned eviction) and [PR #4581](https://github.com/HKUDS/nanobot/pull/4581) (overall context reduction).
*   **Sub-agent Model Overrides** ([Issue #4231](https://github.com/HKUDS/nanobot/issues/4231) & [PR #4570](https://github.com/HKUDS/nanobot/pull/4570)): The community strongly desires the ability to route specific sub-agent tasks to cheaper or more capable models, a feature that has now been drafted in a PR.
*   **Group Chat Noise** ([Issue #3938](https://github.com/HKUDS/nanobot/issues/3938)): Shared Telegram and Feishu deployments are suffering from message spam triggers. Users are actively requesting a debounce/buffering mechanism for incoming messages.

### 5. Bugs & Stability
*   **[Critical] Shell Command Injection Bypass:** Reported by a user and immediately addressed in [PR #4562](https://github.com/HKUDS/nanobot/pull/4562). The `exec.allowPatterns` used regex on raw strings, allowing a payload like `echo allowlisted && touch /tmp/evil` to bypass the sandbox and execute as `bash -c`. The fix splits commands and validates each segment.
*   **[High] WebUI Streaming Stuck:** Addressed in [PR #4565](https://github.com/HKUDS/nanobot/pull/4565). The WebUI would infinitely show a "processing" state after background self-restarts, causing users to be unable to halt active tasks. 
*   **[High] Malformed Upstream Relay Responses:** Fixed via [PR #4569](https://github.com/HKUDS/nanobot/pull/4569). Some Anthropic-compatible relays dropped tool-use IDs or names, causing NanoBot to crash or infinitely replay broken tool calls.
*   **[Medium] MCP Image Payloads Flooding Context:** Closed in [PR #4542](https://github.com/HKUDS/nanobot/pull/4542). The MCP tool wrapper was serializing base64 image strings directly into text context rather than passing them as native image artifacts.

### 6. Feature Requests & Roadmap Signals
Based on open Issues and PRs, the immediate technical roadmap points toward **multi-agent orchestration and operational cost-reduction**:
*   **Agent-to-Agent (A2A) Collaboration:** [PR #4571](https://github.com/HKUDS/nanobot/pull/4571) introduces native A2A peer delegation with cross-delegation depth guards. This transitions NanoBot from standalone execution to "team" based architectures (e.g., Supervisor → Researcher → Writer).
*   **Advanced Voice I/O:** [Issue #4010](https://github.com/HKUDS/nanobot/issues/4010) requests closing the conversational loop by allowing the agent to output voice notes natively on supported channels. 
*   **Environment Variable Awareness:** [Issue #4580](https://github.com/HKUDS/nanobot/issues/4580) requests native `conda` environment support for subprocesses, showing a need for better local data-science workflows.

### 7. User Feedback Summary
Users are heavily utilizing NanoBot in cross-platform messaging environments (Telegram, WeChat, Feishu) but are experiencing friction with platform-specific API quirks. For example, [PR #4567](https://github.com/HKUDS/nanobot/pull/4567) highlights a specific workaround required for the WeChat relay dropping streaming tool calls. 
Furthermore, power users running complex evaluations are hitting context limits and budget constraints quickly, leading to strong satisfaction with initiatives like [PR #4534](https://github.com/HKUDS/nanobot/pull/4534) which adds runtime budget convergence and verification layers. Dissatisfaction is primarily centered around context-window bloat and the lack of native multi-environment (conda/virtualenv) support for local code execution.

### 8. Backlog Watch
*   **[Issue #4500](https://github.com/HKUDS/nanobot/issues/4500) - WebUI Streaming Bug:** Though fixed in today's [PR #4565](https://github.com/HKUDS/nanobot/pull/4565), this issue had sat open since June 24th and needs the PR merged and a new version cut to completely resolve the user pain point.
*   **[Issue #4010](https://github.com/HKUDS/nanobot/issues/4010) - Voice Output:** Created in late May with 2 upvotes, this feature request fits NanoBot's minimalist philosophy but has not yet received maintainer approval or implementation drafts.
*   **[Issue #3938](https://github.com/HKUDS/nanobot/issues/3938) - Group Chat Debounce:** Created on May 20th, this critical UX fix for shared group chats remains unanswered by maintainers despite clear user demand and a well-defined problem statement.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-29

## 1. Today's Overview
The Hermes Agent project exhibits exceptionally high active development and community engagement as of June 2026, processing exactly 50 issue updates and 50 PR updates in the last 24 hours. With 26 PRs recently merged, the maintainers are making aggressive forward progress, particularly in optimizing startup performance and expanding API capabilities. The issue tracker is currently dominated by a massive influx of Windows-specific desktop bugs, specifically regarding Electron subprocess handling. However, the high ratio of bug reports reflects a rapidly expanding user base actively stress-testing the Desktop and multi-platform Gateway components.

## 2. Releases
*No new stable versions were cut in the last 24 hours. Updates remain isolated to the `main` branch via merged PRs.*

## 3. Project Progress
Development velocity is extremely high, with maintainers and contributors merging several critical fixes and performance improvements today:
*   **Startup Performance Boost:** [PR #54448](https://github.com/NousResearch/hermes-agent/pull/54448) implemented lazy-loading for gateway platform adapters, cutting CLI cold start time nearly in half (from ~4.4s to ~2.45s).
*   **API & Agent Steering:** [PR #54466](https://github.com/NousResearch/hermes-agent/pull/54466) added the `POST /v1/runs/{run_id}/steer` endpoint, allowing users to dynamically steer active agent runs via the API or browser extension.
*   **Config Reliability:** Resolved persistent provider routing conflicts where local endpoints (like Ollama) or custom base URLs were bypassed by Anthropic defaults ([PR #3997](https://github.com/NousResearch/hermes-agent/pull/3997), [PR #54438](https://github.com/NousResearch/hermes-agent/pull/54438)). Also added fail-safe defaults for unknown approval modes ([PR #54469](https://github.com/NousResearch/hermes-agent/pull/54469)).
*   **Windows CLI Repairs:** [PR #54457](https://github.com/NousResearch/hermes-agent/pull/54457) repaired missing console script launchers for Windows editable installs.

## 4. Community Hot Topics
The community is highly active around Desktop UI behavior and multi-platform workflows:
*   **The Windows "Console Flash" Epidemic:** The most active tracking issue today is [#54220](https://github.com/NousResearch/hermes-agent/issues/54220) (+6 comments, spawned ~10 duplicate/closed issues). Users are universally frustrated by black terminal windows (`cmd.exe`, `git.exe`, `python.exe`) rapidly flashing on screen during Hermes Desktop usage. The root cause spans Electron subprocess spawns missing `windowsHide` or `CREATE_NO_WINDOW` flags.
*   **Session Continuity Demand:** Users are heavily requesting seamless handoffs between the CLI, Telegram, and iMessage. [Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366) highlights the friction of isolated state when moving between desktop and mobile.
*   **DeepSeek Streaming Issues:** A highly technical discussion ([Issue #54049](https://github.com/NousResearch/hermes-agent/issues/54049)) reveals that custom `httpx` socket options for TCP keepalive are causing OpenResty reverse proxies to drop DeepSeek streaming connections.

## 5. Bugs & Stability
Stability challenges are currently concentrated in the Windows Desktop ecosystem and background processing tools:
*   **[Critical] Windows Process Leaks (P2):** [Issue #53555](https://github.com/NousResearch/hermes-agent/issues/53555) reports that Hermes Desktop can spawn 100+ `OpenConsole.exe` / `conhost.exe` processes, leading to severe system resource exhaustion.
*   **[High] Cron & Kanban State Corruption (P3):** [Issue #53819](https://github.com/NousResearch/hermes-agent/issues/53819) reports that unserialized concurrent SQLite writes cause `kanban.db` corruption under high worker load. Additionally, [Issue #36046](https://github.com/NousResearch/hermes-agent/issues/36046) notes Kanban artifacts being reported as created but missing from the database.
*   **[Medium] Cron Restart Loops (P2):** [Issue #51976](https://github.com/NousResearch/hermes-agent/issues/51976) identifies a risk where the Cron tool API can schedule gateway lifecycle scripts, creating infinite backend restart loops.
*   **[Medium] SSH Authentication (P2):** [Issue #51384](https://github.com/NousResearch/hermes-agent/issues/51384) shows the SSH terminal backend can authenticate with the wrong key if `ssh-agent` offers multiple identities (needs `IdentitiesOnly=yes`).
*   *(Note: Most Windows console flashing bugs have corresponding fix PRs currently in the review/merge pipeline).*

## 6. Feature Requests & Roadmap Signals
Several distinct feature signals indicate where the project is heading next:
*   **Vertical Skill Packs:** [PR #54468](https://github.com/NousResearch/hermes-agent/pull/54468) introduces bundled `/product-manager` and `/analyst` skills, signaling a push toward role-specific, pre-configured agent workflows.
*   **Multi-Gateway Management:** [Issue #45779](https://github.com/NousResearch/hermes-agent/issues/45779) requests per-gateway tabs in the Desktop app, allowing users to manage multiple remote/VPS agents from a single UI.
*   **Enterprise / Support Deployments:** [Issue #17062](https://github.com/NousResearch/hermes-agent/issues/17062) proposes an RFC for a "Safe Customer Support Deployment Profile," utilizing existing messaging gateways but sandboxed for public-facing chatbot use cases.

## 7. User Feedback Summary
*   **Pain Points:** Windows Desktop users (especially non-English/GBK environments per [#53065](https://github.com/NousResearch/hermes-agent/issues/53065)) are having a degraded experience due to console window flooding and encoding crashes. Users running complex local stacks (Docker + SSH + Cron) are encountering boundary and state-serialization bugs (e.g., [Issue #54447](https://github.com/NousResearch/hermes-agent/issues/54447)).
*   **Use Cases:** Users are treating Hermes not just as a CLI tool, but as an "always-on" multi-platform assistant, bridging Desktop GUI, Telegram, WeChat, and Matrix. 
*   **Satisfaction:** Despite the bug volume, sentiment remains highly positive. The prompt merging of performance PRs (like the 2x startup speedup) shows a highly responsive maintainer team.

## 8. Backlog Watch
*   **[Issue #8366](https://github.com/NousResearch/hermes-agent/issues/8366) - Cross-Platform Session Handoff:** Open since April 2026, this highly requested feature (+6 thumbs up) has seen no recent maintainer engagement. It represents a massive architectural leap for the agent's memory system.
*   **[PR #44059](https://github.com/NousResearch/hermes-agent/pull/44059) - Untrusted Tool Result Neutralization:** A critical security P1 PR open since June 11th that prevents model output from forging untrusted-content boundaries. It urgently needs maintainer review and merge to prevent prompt injection execution.
*   **[Issue #51976](https://github.com/NousResearch/hermes-agent/issues/51976) - Cron Restart Loops:** Flagged as `sweeper:risk-security-boundary`, this dangerous Cron API capability needs an immediate hotfix to block gateway lifecycle commands.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the provided GitHub data.

# PicoClaw Project Digest (2026-06-29)

### 1. Today's Overview
As of June 29, 2026, PicoClaw exhibits steady but low-intensity maintenance activity, with development primarily focused on expanding communication channel integrations and optimizing multimedia pipelines. The project processed one issue closure and managed two pull requests (one merged, one newly open) without releasing any new versions. This indicates a phase of incremental feature accumulation and backend pipeline refinement rather than major architectural shifts. Overall project health appears stable, with community members actively contributing specialized features (like new channel types) and performance enhancements. 

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Project Progress
Development momentum today centered on visual data handling and expanding communication protocol support:
*   **[MERGED] [PR #2964](https://github.com/sipeed/picoclaw/pull/2964) Feat/image input compression:** Authored by `afjcjsbx`. This PR successfully introduces a configurable multi-level compression policy for inbound images in PicoClaw's vision pipeline. This is a significant backend optimization that prevents oversized media payloads from reaching the AI model, reducing memory overhead and latency.
*   **[OPEN] [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) Added simplex channel type:** Authored by `dim`. Opened late yesterday and currently active, this PR integrates a new "simplex" (one-way) communication channel into the platform, broadening the avenues through which the AI agent can interact or broadcast.

### 4. Community Hot Topics
The most notable community engagement revolves around WebSocket client determinism:
*   **[Issue #2984](https://github.com/sipeed/picoclaw/issues/2984) [Feature][Protocol] Add explicit turn completion signal for Pico WebSocket clients:** (Closed today, 4 comments, 2 upvotes). Authored by `Brook-sys`.
    *   *Underlying Need:* Users building custom UI clients on top of PicoClaw are struggling with state management. Currently, clients receive a stream of events (`message.create`, `typing.start`, etc.), but lack a deterministic "end-of-turn" signal. This indicates a strong developer need for tighter, more predictable state-machine handling in third-party PicoClaw clients. 

### 5. Bugs & Stability
*No critical bugs, crashes, or regressions were reported or updated in the last 24 hours.* The only closed issue today was a feature/enhancement request rather than a bug report. The merged image compression PR ([#2964](https://github.com/sipeed/picoclaw/pull/2964)) passively improves stability by mitigating potential out-of-memory (OOM) errors associated with processing large inbound vision assets.

### 6. Feature Requests & Roadmap Signals
Based on recent issue and PR trajectories, the immediate roadmap signals point toward **multimodal optimization** and **developer experience (DX) for custom clients**:
*   **Vision Pipeline Optimization:** The acceptance of configurable image compression ([PR #2964](https://github.com/sipeed/picoclaw/pull/2964)) suggests the next version will likely feature more robust, enterprise-grade media handling constraints.
*   **Channel Agnosticism:** The open PR for a Simplex channel type ([PR #3193](https://github.com/sipeed/picoclaw/pull/3193)) shows a push to make PicoClaw compatible with one-way communication mediums (like SMS gateways or broadcast APIs).
*   **Protocol Rigidity:** The community's demand for an explicit turn-completion signal ([Issue #2984](https://github.com/sipeed/picoclaw/issues/2984)) strongly predicts that future protocol updates will include strict session lifecycle events (e.g., `message.completed` or `turn.end`).

### 7. User Feedback Summary
Real user feedback highlights a friction point in custom client development: developers enjoy PicoClaw's streaming capabilities (like typing indicators and message updates), but express dissatisfaction with the ambiguity of conversation state transitions. They require explicit boundaries for when an AI agent finishes "speaking." On the positive side, contributors are highly proactive in submitting solutions for system efficiency (such as vision payload limits), showing a healthy, solutions-oriented community culture.

### 8. Backlog Watch
*   **[PR #3193](https://github.com/sipeed/picoclaw/pull/3193) Added simplex channel type:** Currently open. As it was submitted just yesterday, it requires maintainer review to ensure the one-way channel logic seamlessly integrates with PicoClaw's existing routing and state management without breaking half-duplex or full-duplex behaviors.
*   **Stale Tagging:** Issue [#2984](https://github.com/sipeed/picoclaw/issues/2984) and PR [#2964](https://github.com/sipeed/picoclaw/pull/2964) both carried `[stale]` tags before their closure/merge today. Maintainers should monitor the backlog to ensure that high-value, upvoted feature requests do not automatically close due to bot inactivity before they can be fully addressed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the structured project digest for NanoClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-29, the NanoClaw project is experiencing a highly active development cycle characterized by a strong focus on bug fixing, security hardening, and deployment flexibility. Over the past 24 hours, the community has seen four new pull requests submitted with zero merged, indicating a potential review bottleneck or a deliberate feature freeze by maintainers. The project's current trajectory heavily emphasizes multi-platform integrations (such as advanced Telegram support and Coolify deployments) alongside critical security patches for agent-to-agent (A2A) communication. Overall community engagement remains healthy, with contributors actively identifying and patching edge cases in container orchestration and token management.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
While no pull requests were merged or closed today, four significant open PRs dictate the current in-progress development front:
*   **A2A Security Hardening:** Work was done to patch path traversal vulnerabilities in agent file forwarding ([PR #2879](https://github.com/nanocoai/nanoclaw/pull/2879)).
*   **Authentication Stability:** A fix was introduced to handle stale OpenAI credentials gracefully, aiming to reduce mid-conversation agent crashes ([PR #2878](https://github.com/nanocoai/nanoclaw/pull/2878)).
*   **Ecosystem Expansion:** Infrastructure is being laid for native rich messaging via the Telegram Bot API 10.1 ([PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)) and 1-click deployments via Coolify ([PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875)).

### 4. Community Hot Topics
The most notable community interactions revolve around deployment flexibility and integration capabilities. 
*   **Deployment Self-Sufficiency ([PR #2875](https://github.com/nanocoai/nanoclaw/pull/2875)):** The push for Coolify deployment support signals a strong underlying community need for self-hosting NanoClaw on personal or enterprise VPS infrastructure without relying on complex manual Docker setups. 
*   **Rich UI Integrations ([PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877)):** The Telegram Bot API integration highlights user demand for NanoClaw agents to interact on chat platforms with fully formatted, rich text responses, moving beyond standard plain-text outputs.

### 5. Bugs & Stability
Several notable bugs affecting agent stability have been reported or addressed in PRs today, ranked by severity:

1.  **[CRITICAL] Agent Container Crashes with OpenAI Provider ([Issue #2876](https://github.com/nanocoai/nanoclaw/issues/2876)):** 
    *   *Bug:* Running NanoClaw 2.1.1, setting the provider to OpenAI via CLI successfully updates the database, but causes a fresh container crash upon agent message receipt. 
    *   *Status:* No fix PR submitted yet. High priority due to service disruption.
2.  **[HIGH] Path Traversal / Symlink Vulnerability in A2A Forwarding ([PR #2879](https://github.com/nanocoai/nanoclaw/pull/2879)):**
    *   *Bug:* Agent-to-agent attachment forwarding follows symlinked target inboxes, allowing files to be written outside the designated session root.
    *   *Status:* Fix submitted in PR #2879, awaiting review/merge.
3.  **[MEDIUM] Stale OpenAI Token Crashes Codex Agents ([PR #2878](https://github.com/nanocoai/nanoclaw/pull/2878)):**
    *   *Bug:* Codex agents fail mid-conversation if OneCLI holds a stale or revoked OpenAI secret, requiring manual logout/login.
    *   *Status:* Fix submitted in PR #2878, awaiting review/merge.

### 6. Feature Requests & Roadmap Signals
Based on today's PR pipeline, we can predict the following roadmap movements for the next version (likely 2.1.2 or 2.2.0):
*   **Broader Cloud Deployment Support:** Coolify integration will likely become an officially supported deployment method, lowering the barrier to entry for self-hosted users.
*   **Advanced Chat UI:** Native implementation of Telegram's `sendRichMessage` indicates a roadmap signal toward making NanoClaw agents more visually capable and human-like in third-party messaging apps.
*   **Token Management Overhaul:** The stale secret bug fix hints at an upcoming robust authentication flow that actively validates token states before agent execution rather than assuming presence equals validity.

### 7. User Feedback Summary
*   **Pain Point - Container Resilience:** Users (like [@MJDemarcus](https://github.com/nanocoai/nanoclaw/issues/2876)) are expressing frustration with the fragility of container spawning. The fact that a CLI configuration can silently succeed but result in a container spawn crash indicates a need for better pre-flight validation in the CLI.
*   **Pain Point - Auth Session Expiration:** Users running long-running agents are experiencing sudden crashes due to expired tokens, highlighting the need for background token refresh logic.
*   **Satisfaction - High Customizability:** Despite the bugs, the ability to configure complex A2A routing, custom providers, and diverse integrations (Telegram, Coolify) shows that power-users are successfully leveraging NanoClaw's advanced architecture.

### 8. Backlog Watch
*   **[Issue #2876](https://github.com/nanocoai/nanoclaw/issues/2876) (OpenAI Container Crash):** Created yesterday, this is the most critical unresolved item. It completely blocks users attempting to use the OpenAI provider on version 2.1.1 and requires immediate maintainer triage or a temporary CLI workaround.
*   **[PR #2879](https://github.com/nanocoai/nanoclaw/pull/2879) & [PR #2878](https://github.com/nanocoai/nanoclaw/pull/2878):** Both security and stability PRs are pending review. With 0 PRs merged today, the backlog of community-submitted fixes is growing, which could slow down the next patch release if not addressed promptly.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-29, the NullClaw project exhibits steady, focused development activity with minimal operational churn. Over the last 24 hours, the project saw no new releases, but maintains active development through a significant feature Pull Request. The community interaction remains relatively low-volume but highly targeted, as evidenced by the resolution of a long-standing issue regarding hardware compatibility. Overall project health appears stable, with maintainers actively merging architectural enhancements for agent safety and user interaction. 

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
While no Pull Requests were merged today, active progress is being made on the agent's interaction architecture:
*   **[PR #969](https://github.com/nullclaw/nullclaw/pull/969) `feat(agent): structured approval_request / approval_response flow`**: Opened yesterday by `valonmulolli`, this PR introduces a critical two-turn tool approval flow. It implements a mechanism where tools (like a shell tool) that require user authorization can trigger a `PendingApproval` state, emitting an SSE event (`---approval---`) to render a UI approval prompt. This advances the project's roadmap regarding human-in-the-loop (HITL) AI safety and user control over agentic actions.

### 4. Community Hot Topics
The most notable community interaction centers around hardware constraints and edge deployments:
*   **[Issue #50](https://github.com/nullclaw/nullclaw/issues/50) `Can this run on an Esp32?`**: Authored by `ngantrandev` and updated yesterday, this issue garnered 4 comments. 
*   **Underlying Needs**: The inquiry highlights a distinct user desire to deploy NullClaw in lightweight, edge-based, or IoT environments (specifically the Espressif ESP32 microcontroller). This signals an underlying community demand for highly resource-efficient runtimes, portability, and operation outside of standard cloud or desktop server environments.

### 5. Bugs & Stability
*No new bugs, crashes, or regressions were reported in the last 24 hours.*

### 6. Feature Requests & Roadmap Signals
Based on current community and developer activity, the following signals are evident:
*   **Human-in-the-Loop (HITL) Tooling**: The open [PR #969](https://github.com/nullclaw/nullclaw/pull/969) strongly signals that the next major update or release will feature structured, UI-integrated approval workflows for potentially dangerous agent actions (e.g., executing shell commands). 
*   **Edge/IoT Compatibility**: Community interest in [Issue #50](https://github.com/nullclaw/nullclaw/issues/50) suggests a potential future need for a "lite" build or WebAssembly (Wasm) compilation of NullClaw to support microcontrollers and edge devices.

### 7. User Feedback Summary
User feedback is currently highly niche, focusing on deployment flexibility rather than standard enterprise or desktop usage. The primary use case brought up by the community involves pushing AI agents to extreme hardware limits (microcontrollers). Because the project successfully closed the ESP32 inquiry, it implies maintainers provided a satisfactory answer (likely detailing technical limitations or alternative approaches), keeping user satisfaction regarding community support high despite potential hardware boundaries.

### 8. Backlog Watch
*   **[PR #969](https://github.com/nullclaw/nullclaw/pull/969)**: Currently Open. As a structural feature addition to the agent's SSE event handling and tool execution flow, this requires immediate maintainer code review to ensure secure and seamless implementation of the approval UI.
*   **[Issue #50](https://github.com/nullclaw/nullclaw/issues/50)**: Closed as of yesterday. The prompt resolution of a 4-month-old issue (created 2026-02-21) indicates effective backlog triage by the maintainers. No long-unanswered items are currently stalled.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest (2026-06-29)

## 1. Today's Overview
The IronClaw project is experiencing a period of intense development and high velocity, marked by 49 pull requests updated in the last 24 hours and a strong focus on the "Reborn" architectural stack. Core contributors are heavily investing in enterprise-grade features, specifically fine-grained capability policies (RBAC), integration testing frameworks, and context management optimizations. With 27 open PRs—many addressing OAuth fixes, error handling, and Slack integrations—the team is actively iterating on stability and external integrations. The repository currently shows no new formal releases today, but underlying structural improvements indicate preparation for a significant version bump.

## 2. Releases
**No new releases were published in the last 24 hours.** However, PR [#5311](https://github.com/nearai/ironclaw/pull/5311) indicates that a major release is actively being prepared. The upcoming release will include breaking API changes in `ironclaw_common` and `ironclaw_skills`, and will bump the main `ironclaw` crate from `0.24.0` to `0.29.1`.

## 3. Project Progress
Significant technical milestones were achieved today, particularly around testing and authentication:
*   **Integration Test Framework:** Advancement of the in-process testing tier with URL-keyed HTTP matchers and egress assertion APIs ([PR #5387](https://github.com/nearai/ironclaw/pull/5387)). Additionally, unnecessary testing seams were pruned, saving development time ([PR #5386](https://github.com/nearai/ironclaw/pull/5386)).
*   **OAuth & WebUI Fixes:** Resolved a regression with Reborn WebUI Google SSO `id_token` decoding caused by a `jsonwebtoken` 10.x bump, and canonicalized OAuth state URLs for Railway/custom domains ([PR #5388](https://github.com/nearai/ironclaw/pull/5388)).
*   **Error Recoverability:** Merged foundational work on a failure classifier and locked a two-bucket invariant for error recovery ([PR #5390](https://github.com/nearai/ironclaw/pull/5390)).
*   **Dependency Maintenance:** Validation of the `/benchmark` build harness against current main was successfully cleared ([PR #5393](https://github.com/nearai/ironclaw/pull/5393)).

## 4. Community Hot Topics
*   **Capability Policy & RBAC ([Issue #5261](https://github.com/nearai/ironclaw/issues/5261), [Issue #5268](https://github.com/nearai/ironclaw/issues/5268)):**
    *   *Activity:* A cluster of closed issues ([#5266](https://github.com/nearai/ironclaw/issues/5266), [#5267](https://github.com/nearai/ironclaw/issues/5267), [#5272](https://github.com/nearai/ironclaw/issues/5272), [#5273](https://github.com/nearai/ironclaw/issues/5273)) laid the groundwork for admin-shared tools with per-user authentication.
    *   *Underlying Needs:* Enterprise users require strict, four-dimension policy enforcement (configuration, identity, approval, availability) to manage tool availability per user role securely. 
*   **Hackathon Stability Fork ([PR #4787](https://github.com/nearai/ironclaw/pull/4787)):**
    *   *Activity:* An XL PR maintaining a stable fork for the Barcelona Hackathon.
    *   *Underlying Needs:* External contributors need a stable, well-documented onboarding path that doesn't break under upstream churn, highlighting the need for dedicated release stabilization branches.

## 5. Bugs & Stability
*   **High Severity: Nightly E2E Failure ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108))**
    *   *Details:* The scheduled nightly E2E run failed against commit `6a3b10f`.
    *   *Status:* Unresolved/Requires maintainer triage to identify the failing feature step.
*   **Medium Severity: Google OAuth Decode Bug ([PR #5388](https://github.com/nearai/ironclaw/pull/5388))**
    *   *Details:* Real Google `RS256` tokens failed to decode after a dependency bump, and Railway preview domains broke OAuth state creation.
    *   *Status:* Fix merged today.
*   **Low Severity: Vague Error Reporting ([PR #5338](https://github.com/nearai/ironclaw/pull/5338))**
    *   *Details:* Tool errors were presenting generic "invalid_input" or "driver protocol error" messages to users instead of the root cause.
    *   *Status:* PR is open and actively surfacing the real failure details end-to-end.

## 6. Feature Requests & Roadmap Signals
The immediate roadmap is heavily focused on enterprise readiness and latency reduction:
*   **Granular User Roles:** A newly opened feature request ([Issue #5385](https://github.com/nearai/ironclaw/issues/5385)) explicitly defines `Owner`, `Admin`, and `Member` roles. Expect this RBAC logic to be a flagship feature in the `0.29.1` release, tracked by [PR #5394](https://github.com/nearai/ironclaw/pull/5394).
*   **Progressive Tool Disclosure:** To address NEAR AI latency timeouts, [PR #5149](https://github.com/nearai/ironclaw/pull/5149) introduces a flag-gated feature that stops sending all ~91 tool schemas (~25.8k tokens) on every model call. This will vastly improve response times and reliability.
*   **Live QA Canaries:** [PR #5354](https://github.com/nearai/ironclaw/pull/5354) introduces automated Playwright-driven QA against live LLM/tool integrations, showing a strong commitment to preventing UI regressions.

## 7. User Feedback Summary
*   **Pain Point:** Developers and users are experiencing significant friction with generic system errors. The UI hides the actual reason for tool failures, making debugging frustrating ([PR #5338](https://github.com/nearai/ironclaw/pull/5338)).
*   **Pain Point:** External developers participating in hackathons find the `main` branch too volatile, requiring them to maintain custom forks to ensure stability for the duration of their events ([PR #4787](https://github.com/nearai/ironclaw/pull/4787)).
*   **Satisfaction:** There is strong approval for moving away from CDN dependencies for WebUI assets (as seen in the context of bundle artifact management), which implies faster, more reliable local loads.

## 8. Backlog Watch
*   **Stale Dependency Bumps:** A massive array of `dependabot` PRs is sitting open, including [PR #4002](https://github.com/nearai/ironclaw/pull/4002) (GitHub Actions bump across 1 directory) and [PR #5114](https://github.com/nearai/ironclaw/pull/5114) (Tokio ecosystem bump). These need maintainer review to prevent CI/security debt.
*   **Nightly E2E Breakage:** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) has been open since 2026-05-27 and is still failing as of 2026-06-28. This needs immediate allocation to ensure core workflows remain healthy.
*   **UI Asset Artifacts:** [Issue #5236](https://github.com/nearai/ironclaw/issues/5236) regarding the halting of WebUI v2 dist bundle artifacts being committed to the repo needs final cleanup to prevent repo bloat.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-06-29)

## 1. Today's Overview
LobsterAI experienced a highly active maintenance cycle over the last 24 hours, predominantly focused on backlog clearance and UI/UX optimizations. The community and maintainers successfully closed 4 issues and 3 PRs, indicating a strong push towards housekeeping and stabilizing the codebase. Currently, there are 2 open PRs introducing comprehensive UI upgrades for scheduled tasks and architectural fixes for session state management. However, a newly reported critical issue regarding Memory Search configuration highlights underlying stability challenges with local embedding deployments that will require immediate attention.

## 2. Releases
No new releases were published in the last 24 hours. The last known version in active use is 2026.6.1 (referenced in recent bug reports).

## 3. Project Progress
Today's closed PRs reflect significant improvements to the user interface and the underlying skill management system:
*   **UI Refactoring for Skills** ([PR #1440](https://github.com/netease-youdao/LobsterAI/pull/1440)): Moved active skill tags from a cramped bottom toolbar to the top of the input textarea, improving visual hierarchy and space utilization.
*   **Expanded Artifact Support** ([PR #1441](https://github.com/netease-youdao/LobsterAI/pull/1441)): Merged conflict resolutions and bug fixes for an extensible preview pipeline, bringing robust support for HTML, React, and Mermaid rendering in the Cowork (collaborative chat) interface.
*   **Skill Integrity Fixes** ([PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445)): Resolved directory naming anomalies during zip imports and implemented strict duplicate validation across zip, folder, and GitHub import channels. This prevents conflicting skills from polluting the LLM's system prompt routing.

## 4. Community Hot Topics
*   **Memory Search Provider Lock** ([Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)): This newly opened issue is the most active topic today. Users are expressing frustration over the Memory Search feature being hardcoded to OpenAI for embeddings. The underlying need is clear: power users and self-hosters want flexibility to use local or alternative embedding providers to avoid API rate limits (429 errors) and reduce operational costs.
*   **Skill Management & Routing** (Addressed via [PR #1445](https://github.com/netease-youdao/LobsterAI/pull/1445) & [Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)): The community is heavily focused on "Skills" (custom agent capabilities). Discussions revolve around how skills are routed to the LLM, duplicate skill detection, and compatibility with external frameworks (like `openclaw`), showing a high demand for reliable, modular agent extensions.

## 5. Bugs & Stability
*   🔴 **High: Memory Search DB Lock & Provider Lock** ([Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)): On Windows 11, when the OpenAI API quota is exhausted, the system fails back improperly, and attempting to rebuild the memory index causes a database lock (EBUSY). *Status: No fix PR yet.*
*   🟡 **Medium: Cross-Session Skill State Bleed** ([PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)): Selecting a skill in one chat session inadvertently applied it to other sessions. *Status: A fix PR is currently open.*
*   🟡 **Medium: Disabled Skill Invocation** ([Issue #1439](https://github.com/netease-youdao/LobsterAI/issues/1439)): Users reported that disabled skills could still be triggered via keywords in the chat. *Status: Issue closed, likely addressed by recent refactors.*
*   🟠 **Low: Scheduled Task Creation Failure** ([Issue #1437](https://github.com/netease-youdao/LobsterAI/issues/1437)): The "Create Task" button became unresponsive when setting a task to "do not repeat" with a cleared calendar. *Status: Issue closed.*

## 6. Feature Requests & Roadmap Signals
Based on today's PR pipeline and user feedback, the immediate roadmap heavily features UI modernization and state management architecture:
*   **Advanced Scheduling UX**: [PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488) introduces a massive upgrade to the Scheduled Task module, moving from basic tables to a searchable, filterable 2-column card grid with date-grouped history. This signals a push towards making LobsterAI a powerful automation hub.
*   **Pluggable AI Infrastructure**: The feedback in [Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216) strongly signals that future iterations must decouple the Memory/Search embedding provider from OpenAI, paving the way for fully localized, privacy-first deployment options.

## 7. User Feedback Summary
Users are actively utilizing LobsterAI for complex, multi-tool workflows (e.g., using skills, scheduled tasks, and artifacts). There is high satisfaction with the platform's modular capabilities, particularly the Cowork and Skills features. However, friction exists around edge cases in UI responsiveness (e.g., button dead clicks) and state persistence (skills bleeding across chats). Furthermore, self-hosting users are hitting hard limitations when trying to decouple from OpenAI's ecosystem, indicating a pain point for international or privacy-conscious segments.

## 8. Backlog Watch
*   **[PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488) & [PR #1494](https://github.com/netease-youdao/LobsterAI/pull/1494)**: These open PRs contain significant UX upgrades and architectural state fixes. They have been open since early April and require maintainer review to be merged into the main branch.
*   **[Issue #1443](https://github.com/netease-youdao/LobsterAI/issues/1443)**: A request regarding compatibility updates for `openclaw` v2026.3.24 (which introduced breaking changes). This has gone stale and needs official confirmation on whether an adaptation is planned.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the structured project digest for Moltis based on the provided GitHub data.

# Moltis Project Digest — 2026-06-29

### 1. Today's Overview
As of June 29, 2026, the Moltis project exhibits steady, focused development activity with a strong emphasis on system optimization and stability. Over the past 24 hours, the community has seen no new official releases, but maintainers and contributors are actively managing an open backlog of two targeted pull requests and one recently reported bug. The current development thrust appears to be heavily focused on resource management—specifically optimizing how Moltis handles large media inputs and streamlining backend build dependencies. Overall project health appears stable, with contributors actively patching edge-case behaviors before they impact broader user experience.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
While no PRs were merged or closed within the last 24 hours, two significant open pull requests indicate active development progress:
*   **Agent Context Optimization:** Contributor `resumeparseeval` opened [PR #1138](https://github.com/moltis-org/moltis/pull/1138), which introduces logic to downscale oversized images before they are injected into the AI's model context. This prevents single high-resolution photos from cannibalizing the entire token budget.
*   **Build System Refinement:** The same contributor opened [PR #1139](https://github.com/moltis-org/moltis/pull/1139), fixing a dependency tree issue where enabling the `metrics` feature accidentally force-enabled the entire Matrix SDK, optimizing the build process for environments not using the Matrix channel.

### 4. Community Hot Topics
*   [Issue #1137: Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137) (1 comment, created by `holgzn`)
    *   *Analysis:* This is currently the most active community topic. The underlying need here is seamless deployment compatibility. Users attempting to deploy or run Moltis within Apple's containerization ecosystem are hitting naming convention limits. The activity shows that Moltis is being actively tested in modern, containerized macOS environments, and users expect out-of-the-box compatibility without having to manually configure container identifiers.

### 5. Bugs & Stability
*   **High Severity:** Massive context overflow from inline images.
    *   *Details:* Identified and addressed in [PR #1138](https://github.com/moltis-org/moltis/pull/1138). A standard 4032×3024 phone photo embedded as a base64 data-URI consumes ~350K tokens. Because text compaction cannot shrink image data, this causes the preemptive-overflow guard to reject the user's prompt entirely, breaking the chat session. A fix PR is currently open and pending review.
*   **Medium Severity:** Apple Container ID length validation failure.
    *   *Details:* Reported in [Issue #1137](https://github.com/moltis-org/moltis/issues/1137). Moltis is generating container IDs that exceed Apple's specific naming limits, causing deployment/runtime failures in Apple Container environments. No fix PR has been submitted yet.
*   **Low Severity (Build/Dev):** bloated compile times due to feature flags.
    *   *Details:* Reported in [PR #1139](https://github.com/moltis-org/moltis/pull/1139). Missing a weak `?` qualifier in the gateway metrics feature unintentionally pulls in the massive `matrix-sdk`, slowing down compilation and bloating the binary for developers who have disabled Matrix. Fix PR is currently open.

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were logged in this batch of data, the open PRs signal a clear roadmap direction: **Multimodal Efficiency and Edge-Case Resilience**. The prompt context management fix ([PR #1138](https://github.com/moltis-org/moltis/pull/1138)) signals that the next version will likely feature much smarter media handling, allowing users to seamlessly upload native phone photos without crashing the agent's context window. Furthermore, the Apple Container bug signals a need for broader infrastructure compatibility testing, suggesting future updates may include stricter validation for deployment environment constraints.

### 7. User Feedback Summary
Real user pain points currently center around **infrastructure friction and multimodal interactions**. 
*   *Dissatisfaction/Friction:* Users running Moltis on Apple infrastructure (`holgzn`) are experiencing friction due to rigid container ID generation. 
*   *Use Cases:* Users are actively using Moltis for multimodal tasks (e.g., uploading full-resolution photos directly from their phones to an agent). 
*   *Satisfaction:* The fact that preemptive overflow guards exist to prevent the application from simply crashing (even if they reject the prompt) shows a robust underlying architecture, and community contributors are quick to identify and patch systemic inefficiencies (like token bloat and SDK bloating).

### 8. Backlog Watch
*   **[Issue #1137](https://github.com/moltis-org/moltis/issues/1137) ([Bug] Apple Container ID exceeds name limit):** Created on June 27th and updated on June 28th with 1 comment, this issue still lacks a linked Pull Request for a fix. Maintainers should prioritize verifying the container ID generation logic to unblock macOS/Apple Container users.
*   **[PR #1138](https://github.com/moltis-org/moltis/pull/1138) & [PR #1139](https://github.com/moltis-org/moltis/pull/1139):** Both functional and build-optimization PRs are currently open with 0 comments. They require maintainer code review, testing, and merging to advance the codebase.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — June 29, 2026

## 1. Today's Overview
CoPaw (QwenPaw) demonstrated strong and steady development activity over the past 24 hours, driven by significant backend refactoring and community contributions. The project is currently undergoing a major transition to **Agentscope 2.0** (`agentscope==2.0.2`), evidenced by multiple large unit-testing pull requests. While no new releases were deployed, the development focus is clearly on expanding memory capabilities, fixing context compaction edge cases, and improving modular stability. The community remains highly engaged, actively proposing advanced retrieval features and identifying specific runtime edge cases.

## 2. Releases
**None.** 
No new versions were released in the last 24 hours. The project appears to be in a stabilization and testing phase ahead of a potential future release.

## 3. Project Progress
While zero PRs were merged today, 5 highly substantive PRs are currently open and actively progressing. Key advancements include:
* **Agentscope 2.0 Migration:** Developer `hanson-hex` submitted three massive unit test PRs ([#5581](https://github.com/agentscope-ai/CoPaw/pull/5581), [#5422](https://github.com/agentscope-ai/CoPaw/pull/5422), and [#5423](https://github.com/agentscope-ai/CoPaw/pull/5423)) covering chats, crons, and app-infra modules, fully adapting the backend to the upstream Agentscope 2.0 framework. This includes structural refactors like renaming `app.runner` to `app.chats`.
* **Context Management Strategies:** First-time contributor `niceIrene` introduced a major feature in [PR #5321](https://github.com/agentscope-ai/CoPaw/pull/5321)—the "scroll" context-management strategy. This swaps traditional summarization for durable SQLite conversation persistence combined with on-demand recall.
* **Compaction Logic Fix:** [PR #5586](https://github.com/agentscope-ai/CoPaw/pull/5586) fixed a bug where runtime model overrides were ignored during context compaction. 

## 4. Community Hot Topics
* **Advanced Memory Retrieval:** [Issue #5588](https://github.com/agentscope-ai/CoPaw/issues/5588) (by `cjc0045`) requesting a two-stage retrieval system (Embedding + Dedicated Reranker) for `memory_search`. This gained immediate traction and reflects the community's need for higher precision as their local CoPaw memory databases scale up.
* **UI/UX Skill Input:** [Issue #5589](https://github.com/agentscope-ai/CoPaw/issues/5589) (by `NicholaLau`) highlights a friction point in the UI where users must re-type `/` to chain multiple skills, proposing continuous skill addition.

## 5. Bugs & Stability
1. **[HIGH] Qwen-Image Tool Install Failure:** [Issue #5587](https://github.com/agentscope-ai/CoPaw/issues/5587) reports a direct installation error for the Qwen-Image Tool on `v1.1.12.post2`. Tool installation failures degrade core user experience and require immediate triage.
2. **[MEDIUM] Context Compaction Model Mismatch:** [Issue PR #5586](https://github.com/agentscope-ai/CoPaw/pull/5586) addresses a bug where changing the model mid-chat via the UI dropdown doesn't update the `light_context_config` max length threshold, potentially causing premature context truncation or errors. A fix PR is already open.
3. **[RESOLVED] Cross-Agent Infinite Loop:** [Issue #5204](https://github.com/agentscope-ai/CoPaw/issues/5204) (Closed today) detailed a severe feedback loop where two Agents on Matrix continuously woke each other. This critical runtime flaw has been successfully resolved.

## 6. Feature Requests & Roadmap Signals
Analyzing the open PRs and Issues, CoPaw's near-term roadmap signals a heavy pivot toward **durable memory and advanced RAG**:
* **Scroll Context REPL:** The introduction of SQLite-based conversation persistence ([PR #5321](https://github.com/agentscope-ai/CoPaw/pull/5321)) indicates a shift away from lossy context compression towards precise, queryable history.
* **Two-Stage Reranking:** The request for a dedicated Reranker model in memory search ([Issue #5588](https://github.com/agentscope-ai/CoPaw/issues/5588)) suggests the next versions may integrate more sophisticated, local LLM-based retrieval pipelines. 

## 7. User Feedback Summary
Overall user satisfaction is high, particularly regarding the project's active adoption of the Agentscope 2.0 ecosystem. Advanced users are successfully deploying CoPaw in multi-agent environments (e.g., Matrix integration), though they occasionally encounter edge cases like infinite loops. Local memory management remains the primary pain point: as users store more data, they are realizing the limitations of basic embedding similarity and are proactively requesting enterprise-grade retrieval features (like rerankers).

## 8. Backlog Watch
* **PR #5321:** This massive feature PR introducing the "scroll" context manager has been open since June 19. Given its impact on core memory/context handling, it needs a maintainer review to avoid staleness.
* **PRs #5422 & #5423:** The Week 1 and Week 2 sprint unit tests for Agentscope 2.0 adaptation have been open for nearly a week. They likely need final CI/CD sign-offs or maintainer merges to unblock subsequent development sprints.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-06-29.

### 1. Today's Overview
ZeroClaw is experiencing a period of exceptionally high development velocity and community engagement, with 50 active issues and 50 active pull requests updated in the last 24 hours. The project's current focus is heavily bifurcated between expanding communication channel integrations (including a new native Inkbox channel, WhatsApp location support, and Matrix streaming drafts) and implementing deep architectural RFCs (such as WASM plugin deconfliction and SOP step routing). With 40 open issues and 43 open PRs, maintainers are actively managing a massive inbound queue, primarily driving toward the impending v0.8.3 release and laying the groundwork for the v0.9.0 security and gateway boundaries. Project health appears robust, though maintainers should be cautious of CI bottlenecks and the high volume of simultaneous high-risk changes.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Development today was characterized by massive structural enhancements to the agent runtime and tooling ecosystems. Key advancements include:
*   **SOP (Standard Operating Procedure) Engine:** A stacked series of large PRs ([#8430](https://github.com/zeroclaw-labs/zeroclaw/pull/8430), [#8420](https://github.com/zeroclaw-labs/zeroclaw/pull/8420), [#8416](https://github.com/zeroclaw-labs/zeroclaw/pull/8416)) was introduced to enforce step routing, schemas, and contract substrates at the engine boundary, heavily upgrading deterministic agent execution.
*   **CI & Security Hardening:** Several CI quality gates were merged/closed or advanced, adding `cargo-audit` ([#8129](https://github.com/zeroclaw-labs/zeroclaw/pull/8129)), Semgrep, and CodeQL integrations ([#8157](https://github.com/zeroclaw-labs/zeroclaw/pull/8157)) to secure the master branch and PR pipeline.
*   **Channel Integrations:** A massive new native channel for Inkbox (email, SMS, voice, iMessage) was proposed ([#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)), alongside new Matrix single-message streaming drafts ([#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)) and WhatsApp location pin support ([#8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427)).
*   **Cost Tracking:** Offline pricing catalogs and organizational cost reporting views were added ([#8380](https://github.com/zeroclaw-labs/zeroclaw/pull/8380)) to support air-gapped deployments.

### 4. Community Hot Topics
The most actively discussed items center around system architecture and multi-tenancy:
*   **[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) - RFC: Work Lanes & Board Automation (12 comments):** An ongoing, highly active governance RFC initiated by maintainer `Audacity88` to streamline how work is routed across labels and automated boards. Shows a healthy, structured approach to managing the massive PR influx.
*   **[Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) - Per-agent custom environment variables (4 comments):** Users are heavily requesting a way to resolve identity, parameter, and token multi-tenancy across shared MCP instances. This highlights a strong enterprise/multi-user use case trend in the community.
*   **[Issue #6943](https://github.com/zeroclaw-labs/zeroclaw/issues/6943) - Deconflict Plugin System Goals (4 comments):** A deep architectural debate initiated by `bheatwole` regarding replacing Extism with a direct wasmtime component model host (`wasm-wasip2`), resolving mutually exclusive commitments in the foundation docs.

### 5. Bugs & Stability
Several critical regressions and degraded behaviors were reported, though fix PRs are already in motion:
*   **S2 - Hybrid Search Silently Fails ([Issue #8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)):** A severe onboarding bug where SQLite defaults don't prompt for an embedding model, causing hybrid search to silently degrade to keyword-only.
*   **S2 - MCP Security Scoping is a Silent No-op ([Issue #7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)):** A high-risk security bug where `mcp_bundles` is parsed but never enforced at runtime, meaning per-agent tool isolation silently fails.
*   **S2 - Heartbeat Engine Pathing ([Issue #8366](https://github.com/zeroclaw-labs/zeroclaw/issues/8366)):** Closed/fixed today. The engine was reading `HEARTBEAT.md` from the data directory instead of the agent workspace.
*   **S2 - Windows CI Blindspot ([Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)):** 74 test failures on Windows due to Unix-only commands and path semantics. Because CI only runs on Linux, master is currently unstable for Windows contributors.

### 6. Feature Requests & Roadmap Signals
Based on open trackers and RFCs, the **v0.8.3** and **v0.9.0** milestones are taking distinct shapes:
*   **v0.8.3:** Heavily focused on the execution loop, daemon-owned SOP control planes ([Issue #8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)), and the WASM component model plugin program ([Issue #7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)). We predict the new SOP step-routing logic and Matrix streaming updates will land here.
*   **v0.9.0:** This milestone ([Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) will focus heavily on auth, security hardening, A2A (agent-to-agent) boundaries, and tool policies. The `.ignore` file mechanism for workspace protection ([Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)) is a strong candidate for inclusion here.

### 7. User Feedback Summary
Users are actively pushing ZeroClaw into complex, multi-channel enterprise environments, leading to specific pain points:
*   **Channel UX Friction:** Users want richer channel experiences. For example, Telegram users are frustrated by the lack of rich message support ([Issue #8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415)), and Matrix users want better control over streaming drafts to avoid chat spam ([Issue #8442](https://github.com/zeroclaw-labs/zeroclaw/issues/8442)).
*   **Silent Failures:** There is recurring frustration around configuration silent-degradations. Users noted that prompt caching failing over Telegram ([Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)) and SQLite search failing without embedding models ([Issue #8386](https://github.com/zeroclaw-labs/zeroclaw/issues/8386)) cause significant debugging time.
*   **Storage Management:** Operators deploying to low-end devices are requesting better lifecycle management for temporary artifacts ([Issue #7996](https://github.com/zeroclaw-labs/zeroclaw/issues/7996)), though this was marked wontfix in favor of existing OS-level tooling.

### 8. Backlog Watch
*   **[Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) - 153 Commits Lost in Bulk Revert (Created Apr 24):** This critical audit tracking a massive bulk rollback from March is still open and in-progress. It needs continued maintainer attention to ensure previously reviewed bug fixes aren't permanently lost.
*   **[Issue #2128](https://github.com/zeroclaw-labs/zeroclaw/issues/2128) - Cron/Heartbeat sends NO_REPLY sentinel (Created Feb 27):** A 4-month-old bug where automated cron jobs literally text the words "NO_REPLY" to users. It causes significant noise and requires final resolution.
*   **[Issue #7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) - Full-channel prebuilt assets (Created Jun 19):** Needs maintainer review. Users are confused when they configure a channel that isn't compiled into the default prebuilt binary. Splitting release assets would solve this.

</details>