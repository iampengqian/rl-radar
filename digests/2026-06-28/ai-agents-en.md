# OpenClaw Ecosystem Digest 2026-06-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-27 22:19 UTC

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

Here is the project digest for OpenClaw based on the GitHub data provided for June 28, 2026.

### 1. Today's Overview
OpenClaw is currently experiencing a massive surge in community engagement and active development, evidenced by nearly 1,000 issues and pull requests updated in the last 24 hours. The project is in a heavy iteration and debugging phase, with 446 active PRs and 483 open issues actively under triage. Maintainers and contributors are heavily focused on stabilizing the gateway, preventing silent message loss across channel adapters, and refining multi-agent orchestration. While the volume of activity indicates a highly engaged ecosystem, the low immediate closure rate (17 issues / 54 PRs closed or merged today) suggests the team is carefully reviewing a large backlog of complex, high-impact contributions.

### 2. Releases
No new releases were recorded today. The project remains on its latest stable versions (evidenced by user environment reports of `2026.3.23-2`). 

### 3. Project Progress
Significant forward progress was made today across channel integrations, agent core stability, and UI features, though most changes remain in the review or proof-gathering phases:
*   **Channel & Messaging Fixes:** PR [#97307](https://github.com/openclaw/openclaw/pull/97307) fixed a formatting issue where Feishu collapsed single newlines, and PR [#97316](https://github.com/openclaw/openclaw/pull/97316) ensured Mattermost agents wake up on edited mentions. PR [#97286](https://github.com/openclaw/openclaw/pull/97286) fixed literal reasoning tags rendering incorrectly in Telegram.
*   **Agent & Tooling Stability:** PR [#97293](https://github.com/openclaw/openclaw/pull/97293) prevented empty Anthropic error tool results from crashing agent runs, while PR [#89039](https://github.com/openclaw/openclaw/pull/89039) addressed silent message drops caused by session takeover errors.
*   **UI & Experience:** PR [#97101](https://github.com/openclaw/openclaw/pull/97101) added pagination for long child sessions in the UI, and PR [#97305](https://github.com/openclaw/openclaw/pull/97305) improved the edit tool's error messaging by suggesting closest matching lines upon failure.

### 4. Community Hot Topics
*   **Skill Ecosystem & ClawHub ([#50090](https://github.com/openclaw/openclaw/issues/50090)):** With 15 comments, the community is actively discussing the gap between the promise of ClawHub and current practice. Users are requesting better architecture for community-maintained skills and clearer priority rules (as seen in [#50199](https://github.com/openclaw/openclaw/issues/50199)).
*   **Filename Encoding Across Adapters ([#48788](https://github.com/openclaw/openclaw/issues/48788)):** A highly discussed proposal (18 comments) to create a centralized utility for multi-encoding Content-Disposition handling, specifically addressing broken Chinese filenames in Feishu and other platforms.
*   **Prompt Injection Vulnerabilities ([#45740](https://github.com/openclaw/openclaw/issues/45740)):** A major security concern (14 comments) where untrusted GitHub issue bodies are being injected directly into sub-agent prompts without sanitization.
*   **MathJax/LaTeX Support ([#42840](https://github.com/openclaw/openclaw/issues/42840)):** The highest-rated feature request (7 upvotes) highlights a strong user need to render mathematical and scientific formulas natively in the OpenClaw Control UI.

### 5. Bugs & Stability
*   **Gateway Memory Leaks & Crashes:** Two severe stability issues are impacting long-running instances. Issue [#55334](https://github.com/openclaw/openclaw/issues/55334) and Issue [#54155](https://github.com/openclaw/openclaw/issues/54155) report unbounded memory growth (OOM crashes) due to `sessions.json` accumulating un-pruned data and full skills snapshots over 4-day uptimes.
*   **Persistent Session Locks (Data Loss):** Issue [#95833](https://github.com/openclaw/openclaw/issues/95833) reveals that subagent timeouts fail to release `.jsonl.lock` files, permanently breaking user sessions. 
*   **Message Routing & Hallucinations:** Issue [#49876](https://github.com/openclaw/openclaw/issues/49876) shows cron agents delivering hallucinated outputs instead of failing cleanly on tool errors. Additionally, Issue [#54531](https://github.com/openclaw/openclaw/issues/54531) is causing data loss where agents fail to send replies back to originating channels (Telegram/Discord/WhatsApp). 
*   **Hardcoded Paths Bug:** Issue [#51429](https://github.com/openclaw/openclaw/issues/51429) reports an alarming bug where a developer's local working path (`/Users/wangtao`) was accidentally hardcoded, merged, and published.

### 6. Feature Requests & Roadmap Signals
Based on current issue traction, the following areas are likely to define the next major version:
*   **Advanced Multi-Agent Orchestration:** RFC [#35203](https://github.com/openclaw/openclaw/issues/35203) proposes capability profiling, shared blackboards, and token cost governance for multi-agent collaboration. Furthermore, Issue [#52249](https://github.com/openclaw/openclaw/issues/52249) highlights a critical need to fix parent/child session communication handoffs.
*   **Pre-Send Validation Hooks:** Feature request [#56349](https://github.com/openclaw/openclaw/issues/56349) asks for an unbypassable outbound policy enforcement boundary to secure agent replies across varying delivery paths.
*   **Context Provenance:** RFC [#54373](https://github.com/openclaw/openclaw/issues/54373) requests metadata tagging for injected context, allowing the agent to distinguish between volatile context (e.g., API calls) and static context (e.g., `SOUL.md`).

### 7. User Feedback Summary
The community is highly active but currently frustrated by operational fragility in production environments. Users deploying OpenClaw in Docker and WSL2 environments are experiencing friction with environment variables (`OPENCLAW_HOME`, `XDG_CONFIG_HOME`), as seen in issues [#53628](https://github.com/openclaw/openclaw/issues/53628) and [#45765](https://github.com/openclaw/openclaw/issues/45765). Trust is being impacted by "silent failures"—such as messages getting lost during network dropouts ([#50093](https://github.com/openclaw/openclaw/issues/50093)) and inaccurate cost dashboards hiding true spend ([#46252](https://github.com/openclaw/openclaw/issues/46252)). However, users remain deeply invested in the plugin architecture and are enthusiastically contributing fixes for local channels like Feishu, Telegram, and Mattermost.

### 8. Backlog Watch
*   **P1 Regression in Browser Relay:** Issue [#53599](https://github.com/openclaw/openclaw/issues/53599) details a severe regression where the Chrome extension browser relay was removed with no cross-machine replacement, entirely breaking managed hosting providers. It requires immediate maintainer attention.
*   **Gateway Lifecycle Warning Noise:** Issue [#45565](https://github.com/openclaw/openclaw/issues/45565) needs a product decision to route system lifecycle warnings to dedicated channels to stop spamming active conversational threads.
*   **Embedded Runner API Timeouts:** Issue [#92201](https://github.com/openclaw/openclaw/issues/92201) (and related [#53540](https://github.com/openclaw/openclaw/issues/53540)) details complex failures where Anthropic thinking signatures are invalidated on replay, and large parameter generations cause underlying request timeouts. These architectural issues are lingering and need core team intervention.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 28, 2026 community digest data.

### 1. Ecosystem Overview
As of mid-2026, the open-source personal AI assistant and agent ecosystem is experiencing massive parallel growth, characterized by rapid architectural iteration and a strong shift towards autonomous, multi-agent execution. Projects are moving beyond simple conversational interfaces, prioritizing integration with diverse communication platforms (Telegram, Matrix, Discord), local tool execution, and multi-tenant deployments. However, this explosive feature velocity is consistently outpacing operational stability, with nearly all major frameworks currently battling context management bottlenecks, local environment fragility (especially on Windows/ARM), and data persistence issues. The landscape is effectively segmented into highly active enterprise-ready orchestrators, lightweight local-first assistants, and highly specialized/embedded agents.

### 2. Activity Comparison
*Health Score is graded A-E based on PR/Issue throughput, bug resolution velocity, and release maturity.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~483 active | ~446 active | Stable (Pre-release iteration) | **B+** (High engagement, but PR review bottleneck) |
| **NanoBot** | 8 updates | 46 updates (29 merged) | No release (Imminent) | **A** (Rapid merging, fast bug resolution) |
| **Hermes Agent** | 50 updates | 50 updates | CI Track (Merged to main) | **A-** (High velocity, active bug squashing) |
| **PicoClaw** | Moderate | 7 updates | No release | **B** (Steady maintenance, i18n focus) |
| **NanoClaw** | Low | 7 updates (0 merged) | No release | **C+** (Strong community PRs, lacking maintainer review) |
| **NullClaw** | Low (1 active) | 0 updates | Inactive | **D** (Stagnant, niche mobile focus) |
| **IronClaw** | 5 updates | 50 updates | No release (Pending major API break)| **A** (Exceptional velocity, rapid critical patching) |
| **LobsterAI** | Moderate | 7 stale closed | No release (Cleanup phase)| **B-** (Transitional, rejecting legacy PRs) |
| **TinyClaw** | 0 | 0 | Inactive | **F** (Dormant) |
| **Moltis** | 1 new | 3 updates | No release | **B** (Stable, niche maintenance) |
| **CoPaw** | 5 updates | 16 updates | No release (Post-2.0 migration)| **A-** (Massive test coverage sprint, healthy) |
| **ZeptoClaw** | 0 | 0 | Inactive | **F** (Dormant) |
| **ZeroClaw** | 45 updates | 50 updates | Dev cycle (v0.8.3/0.9.0) | **A** (Massive structural overhauls, highly active) |

### 3. OpenClaw's Position
**OpenClaw** operates as a core reference implementation and a massive hub for enterprise and power-user deployments. Its primary advantage is its sheer scale and plugin/skill ecosystem via ClawHub. 
*   **Advantages vs Peers:** OpenClaw is tackling highly complex, large-scale orchestration problems that smaller bots (like PicoClaw or NullClaw) ignore, such as advanced multi-agent token cost governance, context provenance, and pre-send validation hooks. 
*   **Technical Approach Differences:** Unlike NanoBot or IronClaw which are rapidly merging isolated bug fixes, OpenClaw is dealing with massive architectural RFCs (e.g., multi-agent shared blackboards). 
*   **Community Size:** It possesses one of the largest and most vocal communities (indicated by high issue comment volume), but currently suffers from review bottlenecks (446 active PRs, only 54 closed). It needs to streamline its contribution pipeline to match the velocity of NanoBot or IronClaw.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging across the open-source agent landscape:
*   **Autonomous Background Execution:** Moving away from strict 1-to-1 chat. *OpenClaw* (cron agents), *NanoBot* (silent mode cron jobs), *ZeroClaw* (Goal Mode), and *IronClaw* (Auto-Approve Tools) are all building frameworks for agents to execute long-term, background tasks without constant user approval.
*   **Context Management & Memory:** LLM context windows remain a bottleneck. *ZeroClaw*, *CoPaw*, and *Hermes Agent* are actively developing durable SQLite history layers, hybrid BM25/Vector search, and scrolling context to prevent prompt bloat.
*   **Platform & Environment Friction:** Agents struggle with cross-OS compatibility. *Hermes Agent*, *PicoClaw*, and *LobsterAI* report massive pain points on Windows (CMD flashing, pathing errors, installer freezes). Meanwhile, *NullClaw* is fighting fundamental build constraints on Android/Termux.
*   **Multi-Channel Routing & UX:** Delivering streams and preserving history across third-party platforms is a shared struggle. *OpenClaw*, *Hermes Agent*, *PicoClaw*, and *CoPaw* are all actively patching Telegram, Discord, Matrix, and LINE integrations to handle context compaction and message formatting gracefully.

### 5. Differentiation Analysis
*   **Enterprise & Cloud Orchestration (OpenClaw, ZeroClaw, IronClaw):** Focused on deep integrations (Google Workspace, Notion), multi-agent swarms, supply-chain security (SLSA, Wasm plugins), and complex governance policies. 
*   **Local-First & Developer Tools (NanoBot, Hermes Agent):** Focused on giving developers powerful local CLI/Desktop tools. NanoBot focuses on being lightweight (despite dependency bloat debates) and leveraging local models. Hermes focuses on native UX and multi-model execution loops (GLM/Qwen/DeepSeek).
*   **Edge & Mobile Assistants (PicoClaw, NullClaw, Moltis):** Smaller footprint projects. PicoClaw focuses on privacy-first routing (Simplex) and acting as a chat-based sysadmin. NullClaw is explicitly targeting ARM/mobile architectures, while Moltis focuses strictly on browser automation with fault tolerance for smaller local models.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators (NanoBot, IronClaw, ZeroClaw, CoPaw):** These projects exhibit "A-grade" health. They have extremely high PR throughput and fast issue resolution. They are actively migrating to new architectures (CoPaw to Agentscope 2.0, ZeroClaw to Wasm plugins) and aggressively managing technical debt.
*   **Tier 2: Scaling Stabilizers (OpenClaw, Hermes Agent, PicoClaw, LobsterAI):** These projects have large user bases but are currently fighting operational fragility induced by their own scale. LobsterAI and PicoClaw are in bug-fixing/cleanup phases, while OpenClaw and Hermes are processing huge volumes of user feedback but struggling slightly with review bottlenecks and UI/UX polish.
*   **Tier 3: Stagnant / Niche (NanoClaw, NullClaw, Moltis):** Lower overall activity. NanoClaw relies on community PRs that are bottlenecked by maintainers. NullClaw and Moltis serve highly specific niches (Termux and Browser Automation, respectively) with very slow iteration cycles.

### 7. Trend Signals
For AI agent developers and technical decision-makers, the June 28th digests highlight three major industry trends:
1.  **Security & Guardrails over "Capabilities":** The hype is shifting from "what can an agent do" to "how do we safely let it do that." The massive discussions around OpenClaw's pre-send validation hooks, ZeroClaw's secure supply chain RFCs, PicoClaw's context-aware permission scopes (limiting agent capabilities in group chats), and IronClaw's tool execution audits prove the industry is prioritizing AI safety and enterprise-grade policy enforcement.
2.  **The "Silent Failure" Epidemic:** A recurring frustration across OpenClaw, CoPaw, and Hermes is agents failing silently (dropping messages, losing session state on crash, consuming token budgets invisibly). There is a massive market demand for robust observability—developers need dashboards (like NanoClaw is proposing), state snapshots, and auto-screenshot tooling (like Moltis) to debug agent "blindness."
3.  **Small Model / Open Source Routing:** Projects like CoPaw (DeepSeek V4), Hermes, and Moltis show a strong community push to move away from premium hosted APIs. Developers are actively building fault-tolerant routing and schema validation to allow smaller, local, or open-source models to handle daily agent tasks effectively, reserving heavy models for complex reasoning.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest (2026-06-28)

## 1. Today's Overview
NanoBot exhibited exceptional development momentum over the last 24 hours, processing a staggering 46 Pull Requests alongside 8 issue updates. This high-volume activity—featuring 29 merged/closed PRs against only 17 remaining open—signals an incredibly healthy and active maintenance cycle, likely indicative of an ongoing community hackathon, scheduled sprint, or rapid stabilization push. The day's focus was heavily divided between fortifying system security (patching execution bypasses) and enriching the agent's cognitive architecture (adding clarification tools, parallel execution, and memory safeguards). No new official releases were cut today, but the sheer density of merged core improvements suggests a version bump is imminent.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Development today was marked by major structural and performance improvements merged into the core codebase:
*   **Plugin System Introduced:** PR [#4558](https://github.com/HKUDS/nanobot/pull/4558) merged a minimal plugin system with manifest loading, allowing community extensions for tools, skills, and MCP servers.
*   **Execution Performance:** PR [#4557](https://github.com/HKUDS/nanobot/pull/4557) optimized the runner to trust and execute LLM parallel tool calls concurrently, significantly reducing agent turn latency.
*   **Streaming & Provider Stability:** Maintainers merged a series of targeted fixes for LLM providers, including Anthropic content block typing ([#4532](https://github.com/HKUDS/nanobot/pull/4532)), stream delta coalescing ([#4531](https://github.com/HKUDS/nanobot/pull/4531)), and deduplication of OpenAI-compatible non-stream tool calls ([#4530](https://github.com/HKUDS/nanobot/pull/4530)).
*   **Storage Fixes:** A critical fix for session key collisions on disk ([#4533](https://github.com/HKUDS/nanobot/pull/4533)) was merged, alongside a patch for corrupted session files ([#3712](https://github.com/HKUDS/nanobot/pull/3712)).

## 4. Community Hot Topics
*   **Dependency Bloat Concerns:** Issue [#660](https://github.com/HKUDS/nanobot/issues/660) (👍 5, 14 comments) sparked significant debate regarding NanoBot's claim of being "ultra-lightweight." Users pointed out the contradiction of requiring both Python and Node.js environments. *Underlying need:* The community strongly desires a streamlined, single-runtime deployment footprint, particularly for embedded or edge deployments.
*   **Scheduling & Background Tasks:** PRs [#4225](https://github.com/HKUDS/nanobot/pull/4225) and [#4357](https://github.com/HKUDS/nanobot/pull/4357) generated heavy interest regarding the addition of "silent mode" for cron jobs. *Underlying need:* Users are operating NanoBot as a passive background monitor (e.g., scraping, system checks) and require jobs to execute without triggering unsolicited UI message delivery unless specific conditions are met.

## 5. Bugs & Stability
Today saw the discovery and rapid patching of several high-severity issues:
1.  **[Critical - Security] Command Execution Bypass:** Issue [#4521](https://github.com/HKUDS/nanobot/issues/4521) revealed that `exec.allowPatterns` could be bypassed via shell-chaining (e.g., `echo allowed && rm -rf /`). 
    *   *Status:* Actively being patched in PR [#4562](https://github.com/HKUDS/HKUDS/nanobot/pull/4562).
2.  **[Critical - Security] Secrets Leakage:** Issue [#4518](https://github.com/HKUDS/nanobot/issues/4518) (👍 1) noted that the default login-shell execution in the `exec` tool could unintentionally expose secrets from shell startup files (`.bashrc`).
3.  **[High - UI/UX] WebUI Streaming Stuck:** Issue [#4500](https://github.com/HKUDS/nanobot/issues/4500) is an open, active bug where a NanoBot self-restart leaves the WebUI stuck in a "processing" state, rendering the stop button useless. 
    *   *Status:* Open, no linked PR yet.
4.  **[Low] Flaky Tests:** PR [#4523](https://github.com/HKUDS/nanobot/pull/4523) resolved a flaky memory-pruning test caused by identical sub-millisecond file modification times.

## 6. Feature Requests & Roadmap Signals
Based on newly opened and merged PRs, the immediate roadmap heavily favors **agent autonomy and context management**:
*   **Clarification Tool:** PR [#4527](https://github.com/HKUDS/nanobot/pull/4527) proposes an `ask_clarification` tool to let the agent short-circuit turns and ask focused questions, reducing hallucinations.
*   **Dynamic Model Switching:** PR [#4555](https://github.com/HKUDS/nanobot/pull/4555) introduces per-session model presets, allowing users to dynamically switch between lightweight and heavy models mid-conversation.
*   **Dream Memory Upgrades:** PRs [#4554](https://github.com/HKUDS/nanobot/pull/4554) (preventing duplicate skill creation) and [#4556](https://github.com/HKUDS/nanobot/pull/4556) (model overrides for memory consolidation) show active iteration on NanoBot's long-term memory capabilities.
*   *Prediction:* The next version release will likely focus on "Agent Reliability," officially introducing the plugin system, parallel tool execution, and the new memory consolidation overrides.

## 7. User Feedback Summary
Real-world usage data highlights a few distinct pain points and satisfactions:
*   **Pain Point - Voice Transcription:** Users of the WhatsApp channel are experiencing failed transcriptions because providers (like AssemblyAI) struggle with raw `.ogg` formats. PR [#4353](https://github.com/HKUDS/nanobot/pull/4353) addresses this by piping audio through `ffmpeg` to standardize it to WAV 16k mono.
*   **Pain Point - API Context Costs:** Users operating heavy models noted unnecessary token consumption due to an ever-growing `# Recent History` block breaking cache prefixes. PR [#4371](https://github.com/HKUDS/nanobot/pull/4371) introduces a cache breakpoint to isolate stable system prompts from dynamic history.
*   **Satisfaction - Extensibility:** The introduction of new Web Search providers like Serper.dev ([#4406](https://github.com/HKUDS/nanobot/pull/4406)) and silent cron jobs indicates high satisfaction among users using NanoBot for automated, background personal assistant tasks.

## 8. Backlog Watch
*   **WebUI Restart Handling (Issue [#4500](https://github.com/HKUDS/nanobot/issues/4500)):** Opened 4 days ago and recently updated, this UI-breaking bug currently lacks an assignee or linked PR. It fundamentally breaks the user experience on mobile and desktop browsers when the agent triggers a background restart.
*   **Audio Transcription Pipeline (PR [#4353](https://github.com/HKUDS/nanobot/pull/4353)):** Open since mid-June. This critical fix for WhatsApp voice notes is causing immediate failures for standard user workflows and needs maintainer review and merge.
*   **Provider Reliability Layer (PR [#4534](https://github.com/HKUDS/nanobot/pull/4534)):** A massive architectural PR aiming to add verification gates and Codex provider recovery. This large PR has been open for two days and requires significant maintainer bandwidth to review for the v0.3 milestone.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest (2026-06-28)

## 1. Today's Overview
The Hermes Agent project exhibits exceptionally high development velocity and active community engagement, with 50 issue updates and 50 PR updates logged in the last 24 hours. The maintainers and community are merging bug fixes at a rapid pace, particularly targeting platform-specific stability (notably Windows) and chat gateway integrations. While the core agent loop is expanding to support a wider array of models and local mobile shells, the volume of open P2/P3 bugs suggests the project is in an intensive iteration and polishing phase rather than a feature-freeze. 

## 2. Releases
No new releases were recorded today. The project remains on its continuous integration development track, with fixes being merged directly into the main branch ahead of a formal versioned cut.

## 3. Project Progress
Today's development was heavily focused on fixing platform inconsistencies and refining gateway integrations. 
*   **Windows UX Improvements:** A massive effort to eliminate annoying CMD console window flashes on Windows saw multiple fixes merged/closed, including [PR #53844](https://github.com/NousResearch/hermes-agent/pull/53844) and [PR #53123](https://github.com/NousResearch/hermes-agent/pull/53123), which properly apply `CREATE_NO_WINDOW` to background Git and GitHub CLI probes.
*   **Tooling Refinements:** [PR #53816](https://github.com/NousResearch/hermes-agent/pull/53816) fixed a severe race condition in the `read_file` tool by adding content-hash verification alongside mtime tracking.
*   **CLI & UI Polish:** [PR #53668](https://github.com/NousResearch/hermes-agent/pull/53668) fixed a state-lag race condition affecting the `Ctrl+Enter` steering mechanism in the Desktop app, and [PR #53840](https://github.com/NousResearch/hermes-agent/pull/53840) introduced active Git worktree visibility in the CLI status bar.
*   **Broad Model Support:** [PR #53847](https://github.com/NousResearch/hermes-agent/pull/53847) advanced agent compatibility by injecting explicit execution guidance for GLM/Qwen/DeepSeek models to fix broken tool-call loops.

## 4. Community Hot Topics
The community is highly engaged on UI/UX design and messaging platform integrations:
*   **Dashboard Readability ([Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080)):** With 25 comments and 44 upvotes, this is the most active issue. Users are frustrated with the current theme's non-standard fonts and poor contrast, requesting a fundamental redesign of the dashboard's visual hierarchy.
*   **Kanban Board Integration ([Issue #41222](https://github.com/NousResearch/hermes-agent/issues/41222)):** Users heavily desire (7 upvotes, 5 comments) native integration of the multi-agent Kanban board into the Desktop app, citing friction in switching between CLI and GUI workflows.
*   **Mobile App Shell ([PR #52673](https://github.com/NousResearch/hermes-agent/pull/52673)):** A community member contributed a native Expo/React Native mobile wrapper for the Hermes Desktop app, generating excitement for on-the-go agent management.

## 5. Bugs & Stability
Several critical bugs were reported today, with varying levels of severity:
*   **P1 Bug - Playwright Installation Freeze ([Issue #35166](https://github.com/NousResearch/hermes-agent/issues/35166)):** The Hermes installer completely freezes on Linux during the Playwright Chromium dependency installation. *Fix status: No PR yet.*
*   **P2 Bug - Cloudflare 502 Gateway Errors ([Issue #53771](https://github.com/NousResearch/hermes-agent/issues/53771)):** Large chat-gateway sessions fail with `502 origin_bad_gateway` without triggering Hermes' context compression, resulting in crashes. *Fix status: No PR yet.*
*   **P2 Bug - Telegram Context Compaction ([Issue #40416](https://github.com/NousResearch/hermes-agent/issues/40416)):** When context compaction triggers, Telegram users visually lose their chat history, causing severe UX disruption. *Fix status: No PR yet.*
*   **P2 Bug - Windows CMD Flashing ([Issue #53273](https://github.com/NousResearch/hermes-agent/issues/53273)):** Highly disruptive CMD window flashing on every local terminal tool execution. *Fix status: Addressed in today's [PR #53123](https://github.com/NousResearch/hermes-agent/pull/53123).*

## 6. Feature Requests & Roadmap Signals
Analyzing user requests reveals clear trajectory signals for the project's near-term roadmap:
*   **Enhanced Memory & Search Architecture:** Users are actively requesting more robust memory tools. [Issue #44075](https://github.com/NousResearch/hermes-agent/issues/44075) asks for Hybrid BM25 + Vector semantic search for session history, while [Issue #12568](https://github.com/NousResearch/hermes-agent/issues/12568) requests read-actions and pressure warnings for the memory tool.
*   **Agent Verification Mechanisms:** There is a strong community push for AI safety and accuracy. [Issue #26742](https://github.com/NousResearch/hermes-agent/issues/26742) requests a first-class claim verification & audit mechanism, and [Issue #28289](https://github.com/NousResearch/hermes-agent/issues/28289) asks for integrated fact-checking and evidence display.
*   **Customizable Security Boundaries:** [Issue #5528](https://github.com/NousResearch/hermes-agent/issues/5528) highlights the need for configurable, approval-locked command patterns for dangerous local terminal actions.

## 7. User Feedback Summary
The overall sentiment reflects awe at Hermes Agent's capability, tempered by frustration with its operational stability. Users love the local-first nature, multi-agent capabilities, and expanding gateway options (LINE, Discord, Telegram). However, environment configuration remains a massive pain point—bluntly summarized by a user in [Issue #32817](https://github.com/NousResearch/hermes-agent/issues/32817), who called the setup process "chaotic, poorly-documented, and constantly-breaking." Windows users, in particular, are enduring a degraded UX due to focus-stealing background processes, though today's merged PRs should alleviate this. 

## 8. Backlog Watch
The following important items require immediate attention from maintainers:
*   **Configurable Command Prefixes ([Issue #12688](https://github.com/NousResearch/hermes-agent/issues/12688)):** Open since April 2026, this requests custom prefixes to bypass native slash-command interception on Matrix/Mattermost. Given the related bug in [Issue #25184](https://github.com/NousResearch/hermes-agent/issues/25184), this architectural change needs prioritization.
*   **Self-Created Skill Guarantees ([Issue #25833](https://github.com/NousResearch/hermes-agent/issues/25833)):** Open since May, users are concerned that the auto-skill creation loop lacks mechanism-level guarantees for correctness, risking the propagation of flawed agent behaviors.
*   **Legacy File Compatibility ([Issue #53833](https://github.com/NousResearch/hermes-agent/issues/53833)):** The memory tool crashes hard (`UnicodeDecodeError`) when encountering non-UTF-8 bytes in legacy `USER.md`/`MEMORY.md` files. This needs a robust default `errors='replace'` handler merged soon.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-06-28)

## 1. Today's Overview
PicoClaw exhibits healthy and active development momentum as of late June 2026, characterized by a strong focus on community contributions, multi-channel expansion, and routine maintenance. The project saw no new releases today, but the development pipeline remains highly active with 7 pull requests updated in the last 24 hours. Activity is heavily skewed toward internationalization (i18n), core channel integrations (Simplex, LINE), and infrastructure updates. However, the emergence of new critical bugs in channel encryption and cross-platform filesystems indicates growing pains as the project scales its user base and deployment environments. 

## 2. Releases
*No new releases were recorded in this reporting period.*

## 3. Project Progress
Development today was driven largely by project maintenance and expanding communication channel support through several open and closed PRs:
* **Multi-Channel Expansion:** The team is actively broadening PicoClaw's interoperability. A new [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) introduces a **Simplex** channel type, while [PR #3048](https://github.com/sipeed/picoclaw/pull/3048) (now closed) fixed argument parsing leaks in the MCP `add` command.
* **Agent Architecture Advancement:** [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) for a first-class internal **Agent Collaboration Bus** was updated/closed. This represents a major architectural step, bringing durable inter-agent communication, isolated session histories, and permission-aware routing to PicoClaw.
* **Codebase Maintenance:** Several quality-of-life PRs were opened by contributor `@chengzhichao-xydt`, including [PR #3189](https://github.com/sipeed/picocaw/pull/3189) (LINE channel error handling cleanup), [PR #3192](https://github.com/sipeed/picoclaw/pull/3192) (bumping goreleaser base images to Alpine 3.23), [PR #3191](https://github.com/sipeed/picoclaw/pull/3191) (.gitignore cleanup), and [PR #3190](https://github.com/sipeed/picoclaw/pull/3190) (syncing missing i18n keys for Bengali and Czech locales).

## 4. Community Hot Topics
* **[Issue #3114](https://github.com/sipeed/picoclaw/issues/3114) [Future Request] Telegram 渠道按对话类型的权限分级控制:** This feature request highlights a critical underlying need for granular, context-aware security boundaries. Users operating PicoClaw via Telegram want to restrict high-risk agent capabilities (like `exec` or `write_file`) when the bot is deployed in group or channel settings, while keeping them fully open for 1-on-1 private chats. 
* **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) [BUG] list_dir returns "invalid argument" on Windows:** Generating significant engagement (7 comments), this issue underscores the friction Windows users face due to Go's strict forward-slash requirements in `fs.FS`/`os.Root`. The active discussion reveals a strong need for seamless cross-platform file tooling without OS-specific edge cases.

## 5. Bugs & Stability
* 🔴 **High Severity:** [Issue #3194](https://github.com/sipeed/picoclaw/issues/3194) - *Matrix Channel Encryption Failure.* Users report that the Matrix channel fails to decrypt incoming messages ("Received encrypted message but crypto is not enabled"). This completely blocks agent usability in E2E-encrypted Matrix rooms. *(Status: Open, no fix PR yet).*
* 🟡 **Medium Severity:** [Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) - *Windows Path Mismatch.* `list_dir` crashes on Windows due to backslash handling. This breaks fundamental file-reading capabilities for a significant portion of desktop users. *(Status: Closed, presumably addressed internally or via earlier merged fixes).*
* 🟢 **Low Severity:** [PR #3189](https://github.com/sipeed/picoclaw/pull/3189) - *LINE SDK Response Leak.* Minor bug where `resp.Body.Close()` errors weren't explicitly ignored in the LINE channel, causing potential log noise.

## 6. Feature Requests & Roadmap Signals
Analyzing current community signals, the next version of PicoClaw is likely to lean heavily into **enterprise-grade security and multi-agent orchestration**:
* **Context-Aware Permission Scopes:** Prompted by [Issue #3114](https://github.com/sipeed/picoclaw/issues/3114), we predict the introduction of deployment "safe boundaries" allowing users to define distinct tool execution profiles based on the chat environment (Private vs. Group).
* **P2P & Privacy-First Channels:** The addition of the Simplex channel ([PR #3193](https://github.com/sipeed/picoclaw/pull/3193)) signals a roadmap intent to cater to privacy-conscious user bases.
* **Multi-Agent Workflows:** The progression of the Agent Collaboration Bus ([PR #2937](https://github.com/sipeed/picoclaw/pull/2937)) indicates that native, multi-agent swarming and task delegation will soon be a core feature of the framework.

## 7. User Feedback Summary
User sentiment is currently mixed but leans positive regarding feature velocity. 
* **Pain Points:** Users deploying PicoClaw on heterogeneous setups (Windows, Matrix, Telegram Groups) are experiencing integration friction. The Matrix encryption bug is a significant blocker for adoption in the open-source/privacy community.
* **Use Cases:** PicoClaw is heavily being used as an interactive, chat-based system administrator and file manager (evidenced by bugs in `list_dir` and `write_file`), as well as a multi-channel AI gateway.
* **Satisfaction:** Dissatisfaction is primarily directed at platform-specific edge cases (Windows pathing). However, the active response from contributors in submitting i18n PRs and channel expansions shows a healthy, engaged, and proactive community.

## 8. Backlog Watch
* ⚠️ **[Issue #3194](https://github.com/sipeed/picoclaw/issues/3194):** The Matrix encryption bug is brand new and requires immediate maintainer attention, as it entirely breaks the channel for encrypted server communications.
* ⚠️ **[Issue #3114](https://github.com/sipeed/picoclaw/issues/3114):** The Telegram granular permissions request. Given the safety implications of an AI agent running shell commands in a public group, this architectural decision needs to be addressed by the maintainers to prevent potential user security incidents.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-06-28

### 1. Today's Overview
NanoClaw is currently experiencing a highly active development phase driven by the open-source community, with 7 new pull requests updated in the last 24 hours and zero PRs merged or closed. The project's focus is heavily geared toward architectural refactoring, container stability, and expanding integration capabilities, particularly concerning OpenCode. With no new releases cut today and an accumulation of open pull requests, project health appears strong in terms of community contribution, but may face a review bottleneck from maintainers. The current development velocity suggests an imminent major update once the substantial PR backlog is addressed.

### 2. Releases
*No new releases were published today.*

### 3. Project Progress
While no pull requests were merged today, substantial feature development and bug fixes were proposed and are actively under review. Key areas of progress include:
*   **OpenCode Enhancements:** Advanced capabilities for agent configuration were introduced, allowing granular control over container environments.
*   **Core Architecture Cleanup:** A significant trio of refactors and fixes by contributor `CutSnake01` aims to clean up container mounts, remove automatically deleted files, and strip stale instructions from the main seed prompt.
*   **Tooling & Observability:** Progress was made on adding state snapshot telemetry.

### 4. Community Hot Topics
The most prominent community discussions center around system stability and developer experience:
*   **[Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868) - `/update-skills` silent failure:** Authored by `glifocat`, this is the primary active issue. It highlights a critical flaw where the update mechanism bypasses code/dependency refreshes, completely nullifying migration steps. This signals a strong community need for reliable, friction-free upgrade paths for skills/channels.
*   **[PR #2872](https://github.com/nanocoai/nanoclaw/pull/2872) & [PR #2871](https://github.com/nanocoai/nanoclaw/pull/2871) by `grantland`:** These feature PRs indicate active enterprise/power-user usage of NanoClaw, specifically needing per-group model routing (cost/performance optimization) and centralized dashboard telemetry.

### 5. Bugs & Stability
*   🔴 **High Severity: Skill Update Mechanism Broken ([Issue #2868](https://github.com/nanocoai/nanoclaw/issues/2868))**
    *   *Status:* Open
    *   *Details:* Running `/update-skills` silently fails to refresh adapter code and pinned dependencies for installed channels.
    *   *Fix Status:* Fix PR exists ([PR #2873](https://github.com/nanocoai/nanoclaw/pull/2873) by `glifocat`). Awaiting maintainer review.
*   🟠 **Medium Severity: Signal-cli Boot Crash-loops ([PR #2874](https://github.com/nanocoai/nanoclaw/pull/2874))**
    *   *Status:* Open (Fix proposed by `bogdano2`)
    *   *Details:* The Signal channel adapter enters a crash-loop if `signal-cli` experiences boot flaps. PR proposes logic to survive transient connection drops.
*   🟡 **Low/Medium Severity: Container File & Prompt Clutter ([PRs #2822, #2823, #2824](https://github.com/nanocoai/nanoclaw/pull/2822))**
    *   *Status:* Open (Refactoring proposed by `CutSnake01`)
    *   *Details:* Issues with dead workspace mounts, host environments deleting global CLAUDE.md files, and outdated "Global Memory" instructions bloating the seed prompt.

### 6. Feature Requests & Roadmap Signals
Based on today's PR pipeline, the next version of NanoClaw will likely lean heavily into multi-tenant flexibility and observability:
*   **Per-Group LLM Routing:** [PR #2872](https://github.com/nanocoai/nanoclaw/pull/2872) introduces per-group model overrides via `container_configs.model`. This signals a roadmap shift toward allowing users to balance cost and performance by routing different agent groups to different underlying models dynamically.
*   **Telemetry and Dashboards:** [PR #2871](https://github.com/nanocoai/nanoclaw/pull/2871) adds a dashboard pusher. This indicates an upcoming focus on centralized observability for NanoClaw instances, highly requested by users running complex agent swarms.

### 7. User Feedback Summary
User feedback today highlights operational friction in environment management. The pain point expressed in Issue #2868 shows user frustration when official migration guidelines (re-running a command to pick up changes) silently fail, leaving them on outdated versions without warning. Conversely, the high volume of "Fix" and "Refactor" PRs submitted by the community indicates a mature, highly engaged user base that is actively deploying NanoClaw in production environments (encountering boot flaps, stale mounts, and requiring telemetry). 

### 8. Backlog Watch
The repository currently has a 7-item open PR backlog with zero merges/closures in the last 24 hours. Maintainer attention is urgently required on the following to prevent stalling community momentum:
1.  **[PR #2822](https://github.com/nanocoai/nanoclaw/pull/2822), [PR #2823](https://github.com/nanocoai/nanoclaw/pull/2823), [PR #2824](https://github.com/nanocoai/nanoclaw/pull/2824):** These have been open since June 20th (8 days). They address core container/prompt hygiene and should be prioritized to prevent conflicting merges as new PRs come in.
2.  **[PR #2873](https://github.com/nanocoai/nanoclaw/pull/2873):** Directly resolves a critical, user-facing bug (#2868). Needs a fast-track review and merge to unblock users attempting to update their channels.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-06-28

### 1. Today's Overview
NullClaw is currently experiencing a period of low development and community activity, with zero pull requests updated and no new releases in the past 24 hours. The sole recorded activity is an ongoing comment thread on an existing bug report (#868), which was updated on June 27th. This indicates that while core development appears paused or operating at low capacity, a subset of users remains active in troubleshooting edge-case environments. Overall project momentum has stagnated over the last day, requiring maintainer intervention to resolve lingering platform-specific issues.

### 2. Releases
*No new releases or versions were published in the reporting period.*

### 3. Project Progress
*No pull requests were merged, closed, or updated in the last 24 hours. Consequently, no new features, refactors, or internal advancements were made to the project today.*

### 4. Community Hot Topics
The most active community discussion revolves around Issue [#868](https://github.com/nullclaw/nullclaw/issues/868), which has accumulated 4 comments since its creation. The underlying need here is for broader platform compatibility—specifically, users are attempting to deploy or test NullClaw in unconventional, highly constrained environments (Android/Termux). The continued engagement on this issue highlights a niche but dedicated group of mobile developers and tinkerers who want the NullClaw AI agent framework to be fully portable to ARM-based mobile architectures without requiring a traditional desktop Linux environment.

### 5. Bugs & Stability
1. **[High Severity] Android/Termux Build Failure:** Issue [#868](https://github.com/nullclaw/nullclaw/issues/868) documents a critical build failure for users on Android (aarch64). Running the build command results in an `AccessDenied` error during the `linkat` operation on `options.zig`.
   * *Status:* Open. No fix PRs exist or have been submitted today.
   * *Impact:* Completely blocks installation and usage of NullClaw on mobile/Termux environments.

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were posted today, the active discussion in Issue [#868](https://github.com/nullclaw/nullclaw/issues/868) signals a clear roadmap direction: **Cross-Platform Mobile Support**. If maintainers address this bug, it implies a future version of NullClaw will need to properly handle file-linking permissions for Termux/aarch64 architectures. Predicted next-step features based on this signal include patched build scripts and officially supported Docker/cross-compilation targets for mobile AI agent execution.

### 7. User Feedback Summary
Real user feedback currently centers entirely around deployment friction. The primary pain point is environment compatibility—specifically, NullClaw's underlying Zig compiler throwing permission errors (`AccessDenied`) when interacting with the Termux file system hierarchy. While the framework appears to function well enough on standard platforms (given the lack of general bug reports), the inability to easily "build and run" on mobile hardware represents a point of dissatisfaction for mobile-first users looking for lightweight, portable AI assistants. 

### 8. Backlog Watch
* **[Attention Required] Issue [#868](https://github.com/nullclaw/nullclaw/issues/868):** This bug report was created on April 23, 2026, making it over two months old. It has garnered 4 comments from users actively trying to work around the issue, yet it lacks a recent maintainer response or an assigned fixing PR. This long-unanswered issue is currently the primary blocker for the Termux/Android community and requires triage.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project digest for IronClaw on 2026-06-28.

### 1. Today's Overview
Project IronClaw is currently experiencing a period of extremely high development velocity and active maintenance, processing 50 pull requests and 5 issues in the past 24 hours. The core team is heavily focused on stabilizing the "Reborn" WebUI v2 and expanding the project's integration testing and QA matrix. Significant architectural progress was made today in landing typed workspace collections and OpenAI-compatible external tool routing. The bug-squashing throughput is exceptionally strong, with critical deployment regressions and OAuth failures being reported and resolved within hours.

### 2. Releases
*No new official releases were published in the last 24 hours.*

### 3. Project Progress
Significant structural and functional milestones were achieved today through recently closed/merged PRs:
*   **Agent Memory & Storage:** Merged [PR #1937](https://github.com/nearai/ironclaw/pull/1937), delivering typed structured collections (CRUD tools) for agent workspaces. This solves a massive pain point where agents would fragment data or corrupt markdown files when trying to update lists.
*   **External Tool Routing:** Closed [PR #5099](https://github.com/nearai/ironclaw/pull/5099), completing Phase 4b-4f of the OpenAI-compatible Responses external-tool flow. Agents can now declare client tools, surface parked tool calls, and resume runs from submitted outputs.
*   **LLM Statefulness:** Merged [PR #2294](https://github.com/nearai/ironclaw/pull/2294) to add a stable `conversation_id` to LLM request metadata, and [PR #2196](https://github.com/nearai/ironclaw/pull/2196) to introduce `CleaningProvider` for stripping `<think>` tags from outputs.
*   **Reborn WebUI v2:** Fixed upcoming event discovery for Google Calendar ([PR #5363](https://github.com/nearai/ironclaw/pull/5363)), pinned Node tooling to Node 22 ([PR #5370](https://github.com/nearai/ironclaw/pull/5370)), and ported legacy chat history coverage ([PR #5371](https://github.com/nearai/ironclaw/pull/5371)).
*   **Test Infrastructure:** Closed [PR #5382](https://github.com/nearai/ironclaw/pull/5382) to fix a hosted volume runtime startup regression, while opening new draft PRs ([#5381](https://github.com/nearai/ironclaw/pull/5381), [#5380](https://github.com/nearai/ironclaw/pull/5380)) for a robust hermetic/live QA canary matrix.

### 4. Community Hot Topics
*   **The "Auto-Approve Tools" UX Debate:** [Issue #5364](https://github.com/nearai/ironclaw/issues/5364) requested flipping the default of "Always allow eligible tools" to ON. This highlights a strong community desire for frictionless, background-capable personal assistants without constant per-call approval prompts.
*   **Oauth & Cloud Deployments:** A major discussion point revolved around cloud-hosted deployments (Railway). [Issue #4928](https://github.com/nearai/ironclaw/issues/4928) detailed routing failures with Notion MCP callbacks defaulting to localhost.
*   **Non-Slack Channel Integrations:** [Issue #5368](https://github.com/nearai/ironclaw/issues/5368) highlights the community's push beyond Slack, requesting end-to-end wiring for generic/non-Slack channel personal pairing in the new Reborn WebUI.

### 5. Bugs & Stability
Ranked by severity:
1.  **Critical: Hosted Volume Runtime Startup Regression.** A recent change ([PR #5346](https://github.com/nearai/ironclaw/pull/5346)) broke the path for `HostedSingleTenantVolume` in local runtime. **Status:** Fixed same-day in [PR #5382](https://github.com/nearai/ironclaw/pull/5382).
2.  **High: Google OAuth Forced Re-Authentication.** [Issue #5378](https://github.com/nearai/ironclaw/issues/5378) reported that local-dev and hosted-single-tenant profiles forced users to re-authenticate Google capabilities (Gmail, Calendar, Drive) every ~1 hour due to a token refresh failure (`BackendUnavailable`). **Status:** Fixed via [PR #5379](https://github.com/nearai/ironclaw/pull/5379).
3.  **Medium: Nightly E2E Test Failure.** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) indicates the nightly E2E run failed during extension testing. Currently unaddressed.
4.  **Low: WebUI Chat Retry No-op.** The chat "Retry" button in Reborn WebUI v2 failed to actually re-send messages. **Status:** Addressed in [PR #5365](https://github.com/nearai/ironclaw/pull/5365).

### 6. Feature Requests & Roadmap Signals
*   **Frictionless Autonomy:** The request to default "Always allow eligible tools" to ON ([Issue #5364](https://github.com/nearai/ironclaw/issues/5364)) signals a roadmap shift toward making IronClaw a truly autonomous background agent rather than an interactive chat-only bot.
*   **Robust Error Recoverability:** [PR #5383](https://github.com/nearai/ironclaw/pull/5383) (Docs: Error Recoverability Audit) and [PR #4841](https://github.com/nearai/ironclaw/pull/4841) (No run-borking failures) map out a future state where agents can self-heal or clearly explain failures instead of crashing.
*   **Prediction for Next Release:** The next version (pending via [PR #5311](https://github.com/nearai/ironclaw/pull/5311)) will likely include major breaking API changes to `ironclaw_common` and `ironclaw_skills` to support the new structured collections and external tool routing.

### 7. User Feedback Summary
Users are heavily utilizing IronClaw for personal assistant tasks (calendars, email, Notion) but are increasingly frustrated by deployment and integration friction. The pain points primarily center on hosted vs. local environment mismatches (OAuth callbacks defaulting to localhost) and repetitive authentication prompts. However, the speed at which the core team acknowledges and patches these high-impact OAuth/deployment bugs demonstrates a highly responsive maintainer-user feedback loop. Users clearly want the agent to manage background tasks seamlessly without corrupting data.

### 8. Backlog Watch
*   **Monolithic Dependency Updates:** [PR #5271](https://github.com/nearai/ironclaw/pull/5271) (opened June 25) and [PR #5114](https://github.com/nearai/ironclaw/pull/5114) are massive Dependabot bumps affecting up to 47 packages, including core libraries like `rustls`. These require careful maintainer review due to broad scope and high-risk labels.
*   **Pending Release Coordination:** [PR #5311](https://github.com/nearai/ironclaw/pull/5311) (Chore: release) has been open since June 26, carrying critical API breaking changes for `ironclaw_common` and `ironclaw_skills`. This needs to be merged and formalized to unblock downstream development.
*   **Nightly E2E Failures:** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) has been failing for a month (created May 27) without comments, suggesting CI monitoring for nightly extension tests needs immediate attention.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-06-28)

## 1. Today's Overview
LobsterAI experienced moderate maintenance activity over the past 24 hours, with a strong focus on issue triage and pull request cleanup. The community remains active in identifying critical edge cases, particularly regarding Windows installation processes and database stability. Notably, the engineering team closed 7 stale pull requests, signaling an effort to streamline the development backlog and re-evaluate outdated proposed fixes. However, the lack of new releases indicates the project is currently in a bug-fixing or transitional phase rather than active feature rollout. Overall project health appears stable, though maintainers need to address emerging critical user bugs.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
The primary progress today centered around repository hygiene and backlog cleanup. The team reviewed and closed 7 older, stale pull requests (created in March and April). While no code was merged into the main branch today, the closure of these PRs reflects an active rejection or rework of older solutions:
*   **Architecture Reworks Rejected/Closed:** Closed PRs targeted critical components like gateway infinite restart loops ([PR #1446](https://github.com/netease-youdao/LobsterAI/pull/1446)), MCP SSE/HTTP support ([PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001)), and Agent ID generation logic ([PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065)). This implies the engineering team may be pursuing alternative architectural approaches for these systems in the background.

## 4. Community Hot Topics
The most significant community activity revolves around Windows desktop app stability and installation failures, heavily highlighted by user `woxinsj`:
*   **[Issue #2215](https://github.com/netease-youdao/LobsterAI/issues/2215) - Installation Extractor Failure:** Users are providing highly detailed reverse-engineering and debugging logs regarding "Resource extraction failed" errors during installation. *Underlying need:* Users require a more robust installer that correctly resolves real installation paths instead of getting confused by dummy directories (e.g., `C:\` vs `G:\` drives).
*   **[Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) - Database Backup Process Crash:** A highly severe, 100% reproducible bug where WAL-mode SQLite backups cause the main process to freeze. *Underlying need:* Heavy-data users need asynchronous, non-blocking database backup mechanisms to ensure continuous workflow.

## 5. Bugs & Stability
Based on the latest issues and PR history, stability challenges are concentrated in desktop environments, particularly around concurrency and data synchronization:
1.  **[Critical] Main Process Crash on Data Backup:** Clicking "Backup Data" causes the app to freeze entirely (Issue #2214). The UI goes unresponsive due to heavy synchronous I/O operations on a 70MB+ SQLite WAL database.
2.  **[High] NSIS Installer Extraction Failure:** Deep system-level conflicts causing extractor processes to fail during installation (Issue #2215).
3.  **[High] Disabled Skills Injection:** Closed PR ([PR #1453](https://github.com/netease-youdao/LobsterAI/pull/1453)) highlights that disabled skills' prompts were still being injected into active conversations, causing unexpected AI behavior.
4.  **[Medium] UI/UX Silent Failures:** Closed PRs reveal several UX bugs where the app failed silently, such as creating scheduled tasks with empty dates ([PR #1454](https://github.com/netease-youdao/LobsterAI/pull/1454)) and saving conflicting keyboard shortcuts ([PR #1456](https://github.com/netease-youdao/LobsterAI/pull/1456)).

## 6. Feature Requests & Roadmap Signals
While direct feature requests are sparse today, analysis of closed PRs and open issues provides clear signals for the project's roadmap:
*   **Asynchronous Task Execution (Predicted Next Feature):** The severe database backup bug ([Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214)) strongly signals an urgent need to refactor SQLite operations into background worker threads to prevent main-thread blocking.
*   **Session Aggregation (Predicted Next Feature):** The proposed folding/grouping of scheduled task records ([PR #1449](https://github.com/netease-youdao/LobsterAI/pull/1449)) indicates an upcoming UI overhaul for the sidebar to help power-users manage session clutter caused by automated Cowork tasks.
*   **Robust Agent Deletion:** The investigation into replacing Agent IDs ([PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065)) points to a roadmap focus on local data lifecycle management—specifically, ensuring that deleting an Agent fully purges orphaned workspace files.

## 7. User Feedback Summary
Real user feedback highlights a friction point between advanced features and desktop architectural limitations:
*   **Pain Points:** Users are frustrated by desktop performance bottlenecks. The app is being used heavily (hundreds of daily messages leading to large SQLite databases), but local infrastructure (like backups) cannot handle the scale, leading to "white screens of death."
*   **Use Cases:** Power users are deeply utilizing the "Agent Engine" and "Scheduled Tasks" (Cowork) features, pushing the boundaries of local data management and MCP (Model Context Protocol) integrations via SSE/streaming HTTP.
*   **Satisfaction:** While engagement is high (evidenced by incredibly detailed bug reports), satisfaction is currently threatened by basic usability blockers like installation failures and app crashes during routine maintenance (backups).

## 8. Backlog Watch
*   **[PR #2065](https://github.com/netease-youdao/LobsterAI/pull/2065) - Open (Stale):** The proposal to use short UUIDs for Agent IDs instead of names to fix the "data resurrection" bug has been open since late May. This critical data isolation fix requires maintainer review or a status update.
*   **MCP Support Gap:** The closure of [PR #1001](https://github.com/netease-youdao/LobsterAI/pull/1001) leaves a known gap in MCP support for SSE and streaming HTTP protocols. Maintainers need to clarify if a new architecture for `mcpServerManager.ts` is coming, as users currently cannot reliably save these configurations.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-06-28

## 1. Today's Overview
Moltis is currently exhibiting steady, focused development activity with no new official releases in the last 24 hours. The project's pipeline shows 3 active pull requests and 1 newly opened bug report, indicating an ongoing emphasis on refining tool-calling capabilities and browser automation. Notably, contributors are actively working to improve compatibility with smaller, localized AI models. This targeted maintenance suggests the team is prioritizing ecosystem stability and broader model support over shipping rapid feature increments at the moment. 

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
While no PRs were merged today, there are 3 open PRs actively being updated, showing forward momentum in two key areas: AI model compatibility and browser automation.
*   **Tool Argument Validation:** [PR #1136](https://github.com/moltis-org/moltis/pull/1136) was updated to fix validation failures when smaller models output scalar tool arguments as JSON strings (e.g., `"true"` instead of `true`). 
*   **Browser Tool Stability:** [PR #1098](https://github.com/moltis-org/moltis/pull/1098) was updated to gracefully tolerate explicit `null` values in optional browser parameters, preventing parsing crashes.
*   **Enhanced Automation Workflows:** [PR #1135](https://github.com/moltis-org/moltis/pull/1135) proposes an auto-screenshot feature following state-changing browser actions, which would significantly improve agent observability.

## 4. Community Hot Topics
The most notable community activity centers around maximizing agent visibility and debugging. [PR #1135](https://github.com/moltis-org/moltis/pull/1135) (browser auto-screenshot) directly addresses the underlying need for developers to visually trace what their autonomous agents are doing in real-time. Additionally, the bug fixes addressing smaller models ([PR #1098](https://github.com/moltis-org/moltis/pull/1098), [PR #1136](https://github.com/moltis-org/moltis/pull/1136)) highlight a strong community trend of users wanting to run Moltis locally using accessible, lightweight models rather than relying exclusively on premium hosted APIs.

## 5. Bugs & Stability
*   **Medium Severity:** [Issue #1137](https://github.com/moltis-org/moltis/issues/1137) "[Bug]: Apple Container ID exceeds name limit" 
    *   *Details:* Reported by user `holgzn`, this bug causes failures when generating or handling Apple Container IDs that surpass system naming limits. 
    *   *Status:* Currently open with no immediate fix PR linked in today's data.
*   **Low/Medium Severity (Fixes in Progress):** Smaller local models (like Gemma 4 and oMLX) generating malformed JSON tool calls (stringified scalars, explicit nulls) are causing validation and dispatch errors in the browser tools. Fixes are currently under active review in [PR #1136](https://github.com/moltis-org/moltis/pull/1136) and [PR #1098](https://github.com/moltis-org/moltis/pull/1098).

## 6. Feature Requests & Roadmap Signals
Based on recent PR updates, the short-term roadmap heavily signals a push toward **UX traceability** and **local model resilience**. 
*   *Predicted for next version:* The "per-step screenshot timeline" ([PR #1135](https://github.com/moltis-org/moltis/pull/1135)) is a strong candidate for the next minor release, as it vastly improves debugging for complex browser agents.
*   *Predicted for next version:* A consolidated patch addressing small-model schema adherence ([PR #1098](https://github.com/moltis-org/moltis/pull/1098), [PR #1136](https://github.com/moltis-org/moltis/pull/1136)) will likely drop to prevent silent crashes during tool dispatch.

## 7. User Feedback Summary
Real user pain points currently revolve around two friction points: 
1.  **Inference Flexibility:** Users are pushing Moltis to its limits with smaller, localized models. They are frustrated by strict schema validations that reject slightly malformed (but logically usable) tool arguments.
2.  **Agent "Blindness":** Users executing long browser automation chains are seeking better ways to verify agent actions visually, indicating that text logs alone are insufficient for complex UI navigation tasks.
Overall satisfaction remains stable, but users are eagerly awaiting broader model fault-tolerance.

## 8. Backlog Watch
*   **[PR #1098](https://github.com/moltis-org/moltis/pull/1098):** This pull request was originally opened on June 3rd and has been open for several weeks. While it was updated today, it requires maintainer attention to be reviewed and merged, as it fixes a critical parsing crash for local model users.
*   **[Issue #1137](https://github.com/moltis-org/moltis/issues/1137):** The newly reported Apple Container ID bug needs triage from maintainers to prevent systemic failures for macOS containerized workflows.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw based on the provided GitHub data.

# CoPaw Project Digest — 2026-06-28

## 1. Today's Overview
The CoPaw project is experiencing a highly active and structurally healthy phase, heavily focused on expanding its agent ecosystem and hardening its codebase. Over the past 24 hours, the community generated 5 issue updates and a massive 16 pull request updates, indicating strong momentum from both maintainers and contributors. Notably, there is a coordinated, multi-PR sprint to drastically increase frontend and backend unit test coverage following the recent Agentscope 2.0 migration. Meanwhile, contributors are actively submitting vital compatibility patches for LLM providers and official plugins, alongside substantial new feature additions like durable context management.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
The project is currently absorbing the technical debt and breaking changes associated with its recent migration to Agentscope 2.0. Key advancements today include:
*   **Test Coverage Sprints:** A massive effort by contributor `hanson-hex` to lock down 2.0 contracts. Closed issue [#5580](https://github.com/agentscope-ai/QwenPaw/issues/5580) and closed PR [#5213](https://github.com/agentscope-ai/QwenPaw/pull/5213) (MCP access policy layout) paved the way for multiple new test PRs: Backend W3 sprint ([PR #5581](https://github.com/agentscope-ai/QwenPaw/pull/5581)), Runner module W2 sprint ([PR #5422](https://github.com/agentscope-ai/QwenPaw/pull/5422)), Crons module W1 sprint ([PR #5423](https://github.com/agentscope-ai/QwenPaw/pull/5423)), and several frontend console test PRs ([PR #5409](https://github.com/agentscope-ai/QwenPaw/pull/5409), [PR #5434](https://github.com/agentscope-ai/QwenPaw/pull/5434), [PR #5438](https://github.com/agentscope-ai/QwenPaw/pull/5438)).
*   **Agentscope 2.0 Compatibility:** Addressed breakages in the plugin ecosystem and internal tools with [PR #5568](https://github.com/agentscope-ai/QwenPaw/pull/5568) (fixing 5 official plugins) and [PR #5524](https://github.com/agentscope-ai/QwenPaw/pull/5524) (registering `spawn_subagent` with the new Runtime).
*   **Desktop App Fixes:** Fixed the Tauri packaged desktop initialization flow on Windows and macOS via [PR #5578](https://github.com/agentscope-ai/QwenPaw/pull/5578).
*   **Governance & Policy:** Generalized governance policy patterns in [PR #5546](https://github.com/agentscope-ai/QwenPaw/pull/5546) to support more complex agent workflows.

## 4. Community Hot Topics
*   **DeepSeek V4 Integration Issues:** Issue [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) sparked engagement regarding two distinct 400 errors when routing the DeepSeek V4 "thinking" model through OpenAI-compatible proxy endpoints. The community is actively validating fixes, highlighting a strong demand for robust third-party API proxy support. A corresponding fix has already been submitted via [PR #5582](https://github.com/agentscope-ai/QwenPaw/pull/5582).
*   **Advanced Context Management:** [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) by `niceIrene` is generating interest for introducing the "scroll" context-management strategy—a durable SQLite history store allowing agents to actively recall past turns via a Python REPL, offering a powerful alternative to native summarization.
*   **Matrix Streaming:** [PR #5585](https://github.com/agentscope-ai/QwenPaw/pull/5585) introduces Discord-like streaming modes for the Matrix channel, showing the community's commitment to bringing real-time UX to all communication platforms.

## 5. Bugs & Stability
*   🔴 **High Severity - Conversation Data Loss:** Issue [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) reports that conversation records are completely wiped during abnormal interruptions (e.g., if the agent triggers a system `reboot`, or if the process crashes). The system currently lacks checkpoint persistence, resulting in a fragile UX where users lose all progress. *(No fix PR submitted yet)*.
*   🟠 **Medium Severity - Ascend-vLLM Connection Failure:** Issue [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) notes a regression where custom ascend-vLLM models fail to connect via the OpenAI SDK during active chat, despite passing connection tests in the UI. This appears to be a regression introduced after version 1.1.7. *(No fix PR submitted yet)*.
*   🟡 **Low Severity - LLM Provider Compatibility:** Issue [#5573](https://github.com/agentscope-ai/QwenPaw/issues/5573) outlines failures when handling streaming `reasoning_content` and null tool schemas. **Fix Status:** Actively being addressed in [PR #5582](https://github.com/agentscope-ai/QwenPaw/pull/5582).
*   🟢 **Low Severity - UI/UX:** Issue [#5583](https://github.com/agentscope-ai/QwenPaw/issues/5583) reports poor contrast/visibility for the default selected background in the right-side chat conversation popup layer.

## 6. Feature Requests & Roadmap Signals
Based on today's data, the roadmap is leaning heavily into enterprise-readiness and data analysis:
*   **Agent Data Analysis:** First-time contributor `EliasMei` submitted a massive PR, [#4622](https://github.com/agentscope-ai/QwenPaw/pull/4622), adding "DataPaw"—a robust data-analysis plugin bringing 12 BI skills to the host.
*   **Message Aggregation:** [PR #5577](https://github.com/agentscope-ai/QwenPaw/pull/5577) proposes an opt-in setting to batch assistant reply messages in shared channels, reducing chat spam during complex agent runs.
*   *Prediction for Next Release:* The next version will likely be a稳定性 (stability) and compatibility patch focused on locking in test coverages and fixing Agentscope 2.0 plugin breakages, potentially shipping the DataPaw plugin and Scroll context manager as flagship features.

## 7. User Feedback Summary
Real-world usage reveals a tension between powerful agent autonomy and system stability. Users are enthusiastic about local model routing (DeepSeek, Ascend-vLLM) but frustrated by brittle integrations—specifically, poor error handling when third-party endpoints don't perfectly match official OpenAI schemas. Furthermore, users executing infrastructure-level commands (like reboots) are experiencing severe pain from the lack of durable state persistence. Satisfaction is high regarding the platform's expanding plugin ecosystem, but users are demanding better guardrails and auto-save mechanisms for active sessions.

## 8. Backlog Watch
*   **[PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) [DataPaw Plugin]:** A highly requested, feature-rich data analysis plugin that has been under review since May 22. It requires maintainer attention to merge or provide feedback.
*   **[PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) [Scroll Context Manager]:** A complex architectural change to context handling (durable SQLite history + REPL) submitted on June 19. It needs a final review to prevent blocking users who need better long-term memory management.
*   **[Issue #5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) [State Persistence]:** High-severity bug report regarding conversation loss on crash/reboot that needs immediate triaging and assignment by the core team.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the structured project digest for ZeroClaw based on the GitHub data from 2026-06-28.

### 1. Today's Overview
ZeroClaw is experiencing a period of intense architectural evolution and high community engagement, with a massive volume of 45 issues and 50 pull requests updated in the last 24 hours. Activity is heavily dominated by ambitious roadmap trackers for versions 0.8.3 and 0.9.0, which aim to introduce a Wasm-first plugin architecture, robust supply-chain security, and bounded autonomous "goal modes." While maintainers and contributors are merging foundational code for these massive features, users are actively reporting critical regressions in core agent loops, specifically regarding context budget management and memory injection. Overall, the project is moving incredibly fast, though some operational stability is taking a temporary backseat to major structural overhauls. 

### 2. Releases
No new releases were recorded today. The project is currently in an active development cycle, likely building towards the `v0.8.3` and `v0.9.0` milestones.

### 3. Project Progress
While exact merged PR counts are low today (3 closed/merged out of 50 active), maintainers are advancing major structural milestones:
*   **SOP Control Plane:** `@Nillth` advanced the SOP (Standard Operating Procedure) milestone with [PR #8391](https://github.com/zeroclaw-labs/zeroclaw/pull/8391) (daemon maintenance tick) and [PR #8399](https://github.com/zeroclaw-labs/zeroclaw/pull/8399) (live SOP step execution).
*   **CI & Release Hardening:** `@ConYel` submitted [PR #8277](https://github.com/zeroclaw-labs/zeroclaw/pull/8277) to add SLSA Build L3 provenance attestation to the release pipeline, directly implementing Phase A of the supply-chain security RFC.
*   **Documentation for Agents:** `@hellocodelinux-alt` submitted a massive documentation update ([PR #8306](https://github.com/zeroclaw-labs/zeroclaw/pull/8306)) explicitly designed to serve as a comprehensive reference for LLM agents and AI integration.
*   **Skill Fixes:** `@JordanTheJet` fixed a critical pathing issue in [PR #8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335), making the `skills install/list/remove` commands aware of multi-agent bundles instead of pointing to dead directories.

### 4. Community Hot Topics
*   **Supply Chain Security RFC ([Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)):** With 10 comments, this is the most debated topic. The community and maintainers are hashing out the implementation of hardware-backed PGP keys, multi-party quorums, and hermetic builds to secure release binaries and Docker images.
*   **Goal Mode for Autonomous Work ([Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)):** An accepted RFC (3 comments, 1 reaction) proposing a durable "goal mode" that allows an agent to independently pursue an objective until completion, pause, or budget exhaustion. 
*   **Memory Priority & Context ([Issue #5844](https://github.com/zeroclaw-labs/zeroclaw/issues/5844)):** A highly active bug report (7 comments) discussing how system prompts give *too much* emphasis to stored memories, disrupting active prompts (especially in cron jobs).

### 5. Bugs & Stability
Several critical bugs (S1/S2 degraded behavior) are currently impacting agent runtime stability:
*   **S1 - Context Budget Preemptive Trim ([Issue #5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)):** The default 32k context limit is exceeded purely by the system prompt and tool definitions on the *first* iteration of a conversation, causing the agent to perpetually trim context. 
*   **S2 - Prompt Caching Fails on Telegram ([Issue #6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)):** Prompt caching works fine over CLI, but forces full prompt re-processing over Telegram, leading to massive inefficiency and latency. 
*   **S2 - Skill Tool Pathing ([Issue #8047](https://github.com/zeroclaw-labs/zeroclaw/issues/8047)):** `ReadSkillTool` looks in the `data_dir` but the runtime actually loads skills from the agent workspace. *(Fix in progress via [PR #8335](https://github.com/zeroclaw-labs/zeroclaw/pull/8335))*
*   **S1 - Gemini CLI OAuth Failure ([Issue #4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)):** Users report hitting immediate rate limits and authentication failures with the Gemini CLI provider. 

### 6. Feature Requests & Roadmap Signals
The clear trajectory for ZeroClaw's next versions revolves around **boundaries, autonomy, and security**:
*   **Next Version (v0.8.3):** Will likely feature the **Wasm-first plugin runtime** ([Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)) and the daemon-owned **SOP control plane** ([Issue #8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)). We also expect to see native support for **OpenRouter model fallback arrays** ([Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)) to improve reliability.
*   **Future Version (v0.9.0):** Tracked heavily today via [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432), this release is entirely focused on security hardening, gateway boundaries, A2A (agent-to-agent) interop, and enforcing strict tool policies. 

### 7. User Feedback Summary
**Pain Points:** Users operating ZeroClaw in persistent, automated environments (like cron jobs) are frustrated by memory bloat overriding immediate tasks, and context-window limits being consumed by the system prompt itself. Channel users (Telegram) are experiencing degraded performance due to prompt caching failures.
**Satisfaction / Use Cases:** The community is highly engaged in advanced, enterprise-ready use cases. The demand for a "Goal Mode" (autonomous bounded tasks) and passive WhatsApp group context ([Issue #8379](https://github.com/zeroclaw-labs/zeroclaw/issues/8379)) shows that users are deploying ZeroClaw as a persistent, ambient personal assistant across multiple communication channels, rather than just a simple CLI chatbot.

### 8. Backlog Watch
*   **Full LLM Observability ([PR #6966](https://github.com/zeroclaw-labs/zeroclaw/pull/6966) & [Issue #6642](https://github.com/zeroclaw-labs/zeroclaw/issues/6642)):** Open since late May, this feature (capturing prompt/completion content on `llm.call` spans for Langfuse/Tempo) is heavily requested but currently marked as `needs-author-action` and `stale-candidate`. 
*   **Plugin Permission Model RFC ([Issue #8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)):** A newly opened RFC highlighting that the current `master` branch ships with a coarse-grained, all-or-nothing permission enum for plugins. This needs immediate maintainer architectural feedback, as it directly conflicts with the secure Wasm-first model being actively pushed.
*   **Arm64 Docker Targets ([PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187)):** Open since April, this PR to cross-compile Arm64 Docker images is stuck in `needs-author-action`. Given the push for CI hardening, resolving this would be a highly welcomed infrastructure addition for ARM-based self-hosters.

</details>