# OpenClaw Ecosystem Digest 2026-06-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-15 22:37 UTC

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

# OpenClaw Project Digest (2026-06-16)

## 1. Today's Overview
OpenClaw is exhibiting hyper-active development with an immense volume of community engagement, processing 500 issue updates and 500 PR updates in the last 24 hours. While the project successfully shipped the `v2026.6.8-beta.1` release, the ratio of open to closed issues (434 open vs. 66 closed) and PRs (465 open vs. 35 merged/closed) indicates a massive backlog. The current development cycle is heavily focused on hardening messaging channel integrations (specifically Telegram and WhatsApp) and fixing critical runtime bottlenecks, though the core team is clearly struggling to keep pace with the sheer volume of inbound bug reports and highly complex feature requests.

## 2. Releases
### v2026.6.8-beta.1
- **Highlight:** Massive improvements to Telegram and WhatsApp message delivery. Telegram now supports structured rich text with tables, lists, and expandable blockquotes, alongside prompt-preserving CLI backend delivery and safer rich-media boundaries. 
- **Migration Notes:** Retired native draft migration for messaging platforms. Users on older beta channels should update immediately to benefit from the less brittle delivery pipelines.

## 3. Project Progress
Merged and closed PRs over the last 24 hours focused on stabilizing edge cases in UI localization, session persistence, and plugin metadata:
- **[PR #92575](https://github.com/openclaw/openclaw/pull/92575)**: Fixed a bug where session-level behavior overrides (`/think`, `/verbose`, `/reasoning`) were lost after automatic daily or idle session resets.
- **[PR #93334](https://github.com/openclaw/openclaw/pull/93334)**: Improved WhatsApp reliability by notifying users when trailing media sends fail, rather than dropping them silently.
- **[PR #90246](https://github.com/openclaw/openclaw/issues/90246)**: Closed a feature request allowing users to hide or collapse the `Workspace / Files` rail in the WebChat UI, optimizing screen real estate.
- **[PR #79049](https://github.com/openclaw/openclaw/pull/79049)**: Localized hard-coded English chat metadata labels in the Control UI, improving the experience for non-English users.
- **[PR #68936](https://github.com/openclaw/openclaw/pull/68936)**: Added an automated PR review pipeline (using Claude Agent SDK) and a Windows background daemon to supervise the gateway.

## 4. Community Hot Topics
The community is highly engaged, with discussions heavily focused on cross-platform availability and enterprise security:
- **Desktop Client Demand ([Issue #75](https://github.com/openclaw/openclaw/issues/75))**: With 109 comments and 79 upvotes, the demand for native Linux and Windows Clawdbot apps remains the most active discussion. Users want feature parity with the macOS app.
- **Secrets Security ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659))**: With 13 comments, there is a strong push for a "masked secrets" system to prevent the agent from reading raw API keys via prompt injection.
- **Hard Policy Execution ([Issue #13583](https://github.com/openclaw/openclaw/issues/13583))**: Enterprise users (quant/finance) are requesting pre-response enforcement hooks (hard gates) to mechanically prevent agents from answering before calling mandatory compliance tools.
- **Android Distribution ([Issue #9443](https://github.com/openclaw/openclaw/issues/9443))**: Users are requesting prebuilt APK downloads in GitHub releases to bypass compiling the Android companion app from source manually.

## 5. Bugs & Stability
OpenClaw is currently facing several severe stability issues, including P0/P1 regressions tied to recent updates:
1. **P0 - Gateway Memory Leak ([Issue #91588](https://github.com/openclaw/openclaw/issues/91588))**: The gateway RSS grows from 350MB to 15.5GB over 2-3 days, causing severe OOM crashes and launchd restart loops. *Fix status: No active fix PR yet.*
2. **P1 - Telegram Client Rejection ([Issue #93263](https://github.com/openclaw/openclaw/issues/93263))**: The `v2026.6.8-beta.1` release causes every outbound Telegram message to be rejected by clients with "this message is not supported". *Fix status: Addressed via [PR #93372](https://github.com/openclaw/openclaw/pull/93372) (reverting to legacy `sendMessage`).*
3. **P1 - Context Compaction Wedges ([Issue #90639](https://github.com/openclaw/openclaw/issues/90639))**: Slack sessions are growing to 200K+ tokens and failing with "Something went wrong" because compaction triggers fire too late.
4. **P1 - Stale Timestamps ([Issue #44993](https://github.com/openclaw/openclaw/issues/44993))**: Cron jobs are injecting stale timestamps, causing agents to lose track of the current time. 
5. **P1 - Native Codex Model Drift ([Issue #90036](https://github.com/openclaw/openclaw/issues/90036))**: Telegram sessions silently drift from `openai/gpt-5.5` to `openai-codex/gpt-5.5` mid-conversation. *(Closed)*

## 6. Feature Requests & Roadmap Signals
Analysis of open PRs and issues reveals strong momentum toward dynamic provider integrations and context management:
- **Dynamic Model Discovery ([Issue #10687](https://github.com/openclaw/openclaw/issues/10687) & [PR #86655](https://github.com/openclaw/openclaw/pull/86655))**: Users want seamless, dynamic integration with fast-moving catalogs like OpenRouter, and a native harness ("claude-bridge") for Anthropic models.
- **Context Optimization ([Issue #14785](https://github.com/openclaw/openclaw/issues/14785) & [PR #22439](https://github.com/openclaw/openclaw/pull/22439))**: Users are frustrated by the ~3,500 token overhead from tool JSON schemas. Tiered bootstrap loading and leaner tool resolution are highly requested to save context windows.
- **Workspace Management ([PR #62417](https://github.com/openclaw/openclaw/pull/62417))**: A large PR is underway to allow agents to browse, edit, and manage workspace files directly via the Control UI without requiring CLI access.

## 7. User Feedback Summary
**Pain Points:** Users love OpenClaw's flexibility but are increasingly frustrated by silent failures (e.g., WhatsApp media silently dropping, sub-agent completions disappearing due to inactive requester sessions, as seen in [Issue #92076](https://github.com/openclaw/openclaw/issues/92076)). Additionally, memory and context management on long-running channels like Slack is a recurring source of friction. 
**Use Cases:** Heavy adoption is visible in continuous deployment environments (VPS, Docker) and persistent messaging channels (Telegram, Slack, WhatsApp). Power users are heavily utilizing background sub-agent spawning for asynchronous tasks.

## 8. Backlog Watch
The project has a massive triage bottleneck, with critical issues flagged `clawsweeper:needs-maintainer-review` sitting for months:
- **[Issue #25592](https://github.com/openclaw/openclaw/issues/25592)**: Internal agent processing text (between tool calls) is leaking into external messaging channels (Slack, iMessage). Created in Feb 2026, tagged as a security risk, it still awaits a product decision.
- **[Issue #29387](https://github.com/openclaw/openclaw/issues/29387)**: Per-agent configurations are silently ignoring custom `.md` bootstrap files, breaking isolated agent personas.
- **[Issue #31331](https://github.com/openclaw/openclaw/issues/31331)**: Docker-in-Docker sandboxing completely breaks `/workspace` mounting, severely limiting self-hosted container deployments.
- **[PR #89858](https://github.com/openclaw/openclaw/pull/89858)**: A critical fix for systemd gateway scope conflicts causing infinite restart loops on Ubuntu has been open since early June and desperately needs review.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from June 16, 2026.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a phase of hyper-active iteration, driven by the transition from simple conversational bots to autonomous, multi-platform task execution. Projects are heavily prioritizing cross-platform messaging channel integrations (Telegram, WhatsApp, Slack) and robust execution environments (Docker, Desktop UIs). However, this rapid expansion is creating systemic growing pains, with nearly all major projects struggling to manage massive backlogs and stabilize complex agent loops. The overarching industry focus has shifted toward solving context window limitations, securing tool execution against prompt injection, and enabling reliable 24/7 autonomous "headless" deployments.

### 2. Activity Comparison
*Health Score is calculated based on PR merge/close ratios, bug triage responsiveness, and release stability.*

| Project | Issues (24h Activity) | PRs (24h Activity) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 updates (434 open) | 500 updates (35 merged) | `v2026.6.8-beta.1` | **C+** (Massive scale, but severe backlog & P0 bugs) |
| **CoPaw (QwenPaw)**| 50 updates (31 open) | 50 updates (35 merged) | `v1.1.11.post2` (Pre-release) | **A** (High velocity, excellent 70% merge rate) |
| **NanoBot** | Low volume | 35 updates (16 merged) | No new release | **A** (Stable, highly targeted architectural refactoring) |
| **Hermes Agent** | 50 updates | 50 updates (44% merged) | `v0.16.0` (Implied) | **B+** (Strong momentum, but critical Desktop GUI bugs) |
| **ZeroClaw** | 50 updates | 50 updates (Low merge) | `v0.8.1` / `v0.9.0` (Active dev) | **B** (Sophisticated RFCs, but accumulating open work) |
| **IronClaw** | High volume | 24 merged | Major version pending | **B+** (Smooth UI transition, but broken OAuth flows) |
| **PicoClaw** | Low volume | 12 updates (2 merged) | Nightly `v0.2.9` | **A-** (Stable, focus on core hardening/defensive prog.) |
| **NanoClaw** | 0 open | 11 updates (4 merged) | Imminent (Pre-release) | **A** (Tight, responsive maintainer loop) |
| **LobsterAI**| Low volume | 11 updates (5 merged) | Upcoming `2026.6.11` | **A** (Stable, focused UX refinements) |
| **NullClaw** | 3 updates | 1 update | No new release | **B-** (Stagnant, routine maintenance phase) |
| **Moltis** | 0 updates | 2 updates (0 merged) | None | **B-** (Niche/Headless focus, low community traction) |
| **TinyClaw / ZeptoClaw**| 0 | 0 | N/A | **N/A** (Dormant) |

### 3. OpenClaw's Position
**Advantages:** OpenClaw operates at a massive scale, evidenced by 500 PR and 500 issue updates daily. It possesses the most extensive feature breadth, particularly regarding messaging integrations (Telegram, WhatsApp, iMessage, Slack) and asynchronous background sub-agent spawning. Its enterprise footprint is visible, with users demanding advanced compliance hooks and secret masking.
**Technical Approach Differences:** OpenClaw appears to favor rapid feature deployment and continuous beta releases, whereas peers like NanoBot and PicoClaw are heavily focused on architectural refactoring and defensive programming before rolling out new features. 
**Community Size Comparison:** OpenClaw’s community dwarfs the others in sheer volume, generating triple the activity of ZeroClaw or Hermes Agent. However, it suffers from a severe maintainer bottleneck; its 10% issue closure rate and 7% PR merge rate are the worst in the ecosystem, lagging far behind the highly responsive loops seen in CoPaw and NanoBot.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging across the ecosystem:
*   **Context Window Optimization:** Multiple projects are fighting context degradation. OpenClaw, NanoBot, Hermes Agent, and CoPaw all reported major bugs or feature requests regarding context compaction, auto-summarization, and token overhead (e.g., tool JSON schema bloat).
*   **Cross-Platform Messaging Stability:** Telegram, WhatsApp, and Slack integrations remain the primary deployment targets, but all projects are facing edge-case crashes, formatting rejections, and silent dropped media/messages in these environments (OpenClaw, NanoBot, PicoClaw, NanoClaw).
*   **Enterprise Security & Authorization:** There is a collective push toward granular security. OpenClaw wants hard policy execution gates; Hermes is building secret egress blocking; ZeroClaw is developing per-principal authorization; and IronClaw is focused on persistent OAuth approvals.
*   **Silent Failure Observability:** Across OpenClaw, NanoClaw, PicoClaw, and IronClaw, developers are expressing intense frustration over agents failing *quietly* (e.g., dropped tool calls, un-upgraded dependencies, missing browser launches).

### 5. Differentiation Analysis
*   **Architecture & Deployment Targets:**
    *   *Web/Messaging Native* (OpenClaw, NanoBot): Focus on running indefinitely as gateways for WhatsApp/Telegram.
    *   *Desktop/Local First* (Hermes, LobsterAI, CoPaw): Heavily focused on Electron/Tauri desktop applications, native OS integrations, and local Ollama support.
    *   *Headless / Meta-Orchestration* (Moltis, ZeroClaw): Focusing on scriptable, zero-UI deployments acting as routers or multi-agent dispatchers (Kanban boards, A2A communication).
    *   *Edge/Hardware* (PicoClaw): Distinctly optimizing for RISC-V architecture and single-board computers.
*   **Target Audiences:** NullClaw and ZeroClaw are explicitly targeting enterprise/DevOps users needing managed identities and multi-tenant routing. CoPaw and LobsterAI are leaning into consumer/power-users with rich UI document artifacts and voice input (ASR).

### 6. Community Momentum & Maturity
*   **Rapidly Iterating (The Bleeding Edge):** OpenClaw, CoPaw, and ZeroClaw are pushing massive volumes of code and community interaction. They are shipping features fast but carrying severe technical debt, major bugs, and process bottlenecks.
*   **Stabilizing & Maturing:** NanoBot, PicoClaw, NanoClaw, and IronClaw represent a healthier middle ground. They have active pipelines but are intentionally pausing to refactor architecture, fix silent failures, harden security (PicoClaw), and clean up technical debt before releasing major versions.
*   **Stagnant / Niche:** NullClaw, Moltis, TinyClaw, and ZeptoClaw show minimal to zero meaningful community momentum, functioning either as highly specific internal tools or stalled open-source initiatives.

### 7. Trend Signals
*   **The Shift to 24/7 Autonomous Agents:** Users no longer want chatbots; they want autonomous background workers. There is a massive demand for "silent" cron jobs, scheduled automations, and system notifications for long-running asynchronous tasks (NanoBot, Hermes, LobsterAI, CoPaw).
*   **Advanced Multi-Agent Workflows:** The single-agent paradigm is fading. Communities are demanding dual-model configurations (e.g., GPT-4o for code, Claude for research) and agent-to-agent (A2A) communication protocols within a single gateway (Hermes, ZeroClaw).
*   **Containerization as a Default Expectation:** Agents must run in the cloud. Developers are hitting infrastructure limits, demanding baked-in Docker optimizations (`--shm-size` for headless browsers) and hardened CI pipelines as baseline requirements rather than afterthoughts (NanoClaw, ZeroClaw, OpenClaw).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot based on the GitHub data from 2026-06-16.

### 1. Today's Overview
NanoBot is experiencing a phase of highly active, rapid iteration, driven primarily by a massive volume of community-driven pull requests (35 PRs updated in the last 24h). Development is heavily focused on expanding ecosystem integrations (WhatsApp bridge, new search providers) and refining agent execution observability. While maintainers are successfully merging a steady stream of bug fixes and architectural refactors, several new edge-case bugs related to multimodal fallbacks and provider integrations have surfaced. Overall, project health appears exceptionally strong, characterized by a robust open-source pipeline and highly engaged technical contributors. 

### 2. Releases
*No new releases were recorded in the last 24 hours.*

### 3. Project Progress
Today’s progress was defined by significant architectural refactoring, tighter API integrations, and a focus on agent observability. 16 PRs were closed/merged, advancing the following areas:
*   **API & Metering Fixes:** PR [#4310](https://github.com/HKUDS/nanobot/pull/4310) resolved a critical issue where the `/v1/chat/completions` endpoint returned hardcoded zero token usage, ensuring downstream billing and metering integrations function correctly. 
*   **Memory & Context Stability:** Merged PR [#4315](https://github.com/HKUDS/nanobot/pull/4315) (ignoring malformed memory history) and PR [#4337](https://github.com/HKUDS/nanobot/pull/4337) (ignoring empty injected payloads), greatly hardening the agent's resilience against corrupted memory states.
*   **Architecture Boundaries:** PR [#4344](https://github.com/HKUDS/nanobot/pull/4344) refactored the boundaries between the config schema and the agent loop, cleanly separating tool configurations and preventing import-time circular dependencies.
*   **Web UI Parity:** PR [#4313](https://github.com/HKUDS/nanobot/pull/4313) closed the gap between `config.json` and the WebUI, allowing users to manage temperature, tool limits, and memory fields directly from the interface.

### 4. Community Hot Topics
The most active items today revolve around fine-tuning the agent's memory management and expanding its autonomous capabilities.
*   **Session Replay & Auto-Compact:** PR [#4349](https://github.com/HKUDS/nanobot/pull/4349) and closed PR [#4348](https://github.com/HKUDS/nanobot/pull/4348) tackled the replay-window history. The community is highly focused on ensuring that token consolidation and auto-compacting don't truncate long user turns or leave the agent starting mid-tool execution.
*   **Agent Auditing & Observability:** PR [#4320](https://github.com/HKUDS/nanobot/pull/4320) introduces a new `AuditTool`. This signals a strong underlying need from enterprise power-users to monitor agent actions with zero overhead when disabled.
*   **Silent Cron Jobs:** PR [#4357](https://github.com/HKUDS/nanobot/pull/4357) introduces "silent" scheduled jobs. This highlights a popular use case: running continuous background monitoring (like uptime checks) where the agent only speaks up when an anomaly is detected.

### 5. Bugs & Stability
Several notable bugs were reported today, primarily around provider compatibility and fallback mechanisms. 
1.  **[HIGH] Image-Strip Fallback Hallucination & Path Leak:** Issue [#4345](https://github.com/HKUDS/nanobot/issues/4345) reports that when image inputs fail and the agent falls back to text, the model hallucinates seeing an image and leaks local file paths. *(Fix Status: PR [#4346](https://github.com/HKUDS/nanobot/pull/4346) is already open).*
2.  **[HIGH] Context Window Token Overflow:** Issue/PR [#4352](https://github.com/HKUDS/nanobot/pull/4352) highlights that the recent-history digest was capped by character count (32,000). This caused context overflows and system prompt failures for CJK text or code, which require more tokens per character. 
3.  **[MEDIUM] DeepSeek Empty Responses:** Issue [#4287](https://github.com/HKUDS/nanobot/issues/4287) notes that empty API responses from DeepSeek during peak hours are misclassified as "non-fallbackable", breaking the Telegram bot runtime.
4.  **[MEDIUM] MCP Generator Crash:** Issue/PR [#4303](https://github.com/HKUDS/nanobot/pull/4303) details an `asyncio` crash (`RuntimeError: Attempted to exit cancel scope in a different task`) when `streamableHttp` MCP server sessions reconnect. 

### 6. Feature Requests & Roadmap Signals
Recent PRs indicate the next version will heavily feature **multichannel expansion** and **multimodal enhancements**:
*   **WhatsApp Integration Maturation:** PR [#4354](https://github.com/HKUDS/nanobot/pull/4354) (read receipts/blue ticks) and PR [#4353](https://github.com/HKUDS/nanobot/pull/4353) (auto-converting `.ogg` WhatsApp voice notes to WAV for STT) show a massive push to make NanoBot a fully functional WhatsApp assistant.
*   **Expanded Provider Support:** PR [#4351](https://github.com/HKUDS/nanobot/pull/4351) adds native, strict support for Mistral APIs, and PR [#4356](https://github.com/HKUDS/nanobot/pull/4356) fixes tool-use ID sanitization for Anthropic. Furthermore, PR [#4350](https://github.com/HKUDS/nanobot/pull/4350) adds Keenable as a built-in search provider.
*   **Automation Management:** PR [#4330](https://github.com/HKUDS/nanobot/pull/4330) brings a dedicated WebUI surface for users to visually manage, pause, and run scheduled automations.

### 7. User Feedback Summary
Users are actively deploying NanoBot in real-time messaging environments (Telegram, WhatsApp) as autonomous personal assistants, utilizing voice and scheduled tasks. 
*   **Dissatisfaction/Pain Points:** Users operating on the bleeding edge (pulling directly from `main`) are experiencing friction with context and memory management, leading to mid-turn crashes (Issue [#4322](https://github.com/HKUDS/nanobot/issues/4322)). Additionally, API integration quirks—such as hardcoded token usage returns and strict provider tool-ID patterns—have temporarily broken downstream workflows.
*   **Satisfaction:** The rapid community response to these issues shows high user satisfaction and loyalty. Contributors are proactively building deep architectural fixes (like token-based context capping) and robust multimodal fallbacks rather than asking maintainers to do the heavy lifting.

### 8. Backlog Watch
*   **Issue [#4287](https://github.com/HKUDS/nanobot/issues/4287) (DeepSeek Empty Responses):** Open since June 10th, this critical bug affects bot availability during peak LLM usage. It needs maintainer attention to adjust the fallback classification logic.
*   **Issue [#4322](https://github.com/HKUDS/nanobot/issues/4322) (NameError on merge):** Marked as `stale`, this startup crash bug related to prompt caching needs to be validated against recent memory/context refactors to see if it has been incidentally resolved.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent based on the provided GitHub data.

# Hermes Agent Project Digest
**Date:** 2026-06-16

## 1. Today's Overview
The Hermes Agent project is exhibiting exceptionally high active development and community engagement, processing 50 issues and 50 pull requests in the last 24 hours alone. The maintainers are currently pushing heavily on security, dependency upgrades, and gateway stability, evidenced by a flurry of merged bug fixes and new security-focused PRs. The open-source community is deeply engaged in stress-testing the Desktop TUI app and the Kanban multi-agent dispatcher, surfacing critical edge cases. Overall project health appears robust, with a strong 44% PR merge/close rate over the last day indicating active and responsive maintenance.

## 2. Releases
No new releases were published in this tracking period. The latest stable version remains implied as **v0.16.0** (based on user environment reports). Development activity is currently aggregated in the `main` branch.

## 3. Project Progress
Development velocity is highly focused on security hardening, gateway stability, and enterprise readiness. Key advancements include:
*   **Critical Gateway Bug Fixes:** Merged fixes include preventing infinite context compression loops on small context windows ([PR #40976](https://github.com/NousResearch/hermes-agent/pull/40976)), fixing MSYS path ghost writes on Windows ([PR #46887](https://github.com/NousResearch/hermes-agent/pull/46887)), and fixing Telegram Markdown rendering issues.
*   **New Security Measures:** New PRs were opened to gate sensitive browser CDP methods ([PR #46899](https://github.com/NousResearch/hermes-agent/pull/46899)), block potential secret egress via code execution ([PR #46900](https://github.com/NousResearch/hermes-agent/pull/46900)), and introduce an enterprise approval delegation mechanism ([PR #37771](https://github.com/NousResearch/hermes-agent/pull/37771)).
*   **Kanban & Tooling:** Added a new `skill_validate` tool allowing the agent to self-check generated skills before trusting them ([PR #46893](https://github.com/NousResearch/hermes-agent/pull/46893)) and prevented false "stuck" alerts in the Kanban dispatcher ([PR #46892](https://github.com/NousResearch/hermes-agent/pull/46892)).
*   **Monetization/Integrations:** Closed PR introducing optional Stripe payment skills (Phase 1) allowing the agent to interact with HTTP 402 APIs and SaaS provisioning ([PR #31343](https://github.com/NousResearch/hermes-agent/pull/31343)).

## 4. Community Hot Topics
*   **[Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) [Bug]: Error: Response truncated due to output length limit** (48 comments, 6 thumbs up). 
    *   *Analysis:* The most engaged issue in the tracker. Users are highly frustrated by output truncation during long-form generation across CLI and messaging gateways. This highlights a core friction point in managing streaming responses and context limits.
*   **[Issue #24140](https://github.com/NousResearch/hermes-agent/issues/24140) [Bug]: Context window below minimum breaks Telegram Bot** (12 comments).
    *   *Analysis:* A P1 incident where providers with smaller context windows (like MiniMax) crashed the entire Telegram gateway. It shows the community's reliance on Hermes as an always-on messaging bot and the severity of provider-agnostic fallback failures.
*   **[Issue #41222](https://github.com/NousResearch/hermes-agent/issues/41222) [Feature]: Integrate Kanban Board into Desktop App** (3 comments, 2 thumbs up).
    *   *Analysis:* Users are using Hermes for complex, multi-agent task execution and feel that switching to a CLI to manage the Kanban state breaks their workflow. They want native TUI integration.

## 5. Bugs & Stability
Today's bug reports reveal systemic issues in local/desktop execution and context management, ranked by severity:
*   **[P1 / SysOps] Persona/Process Lifecycle Kill Switch:** [Issue #46906](https://github.com/NousResearch/hermes-agent/issues/46906). A critical operational bug where Persona 12 disabled all 23 required lifecycle scheduler jobs, causing silent state drift since May.
*   **[P2 / Critical UX] Desktop App Segfaults:** [Issue #46789](https://github.com/NousResearch/hermes-agent/issues/46789). The macOS Desktop app crashes immediately (exit code -11) on *all* process execution tools (terminal, read_file), rendering the GUI app useless, though the CLI works perfectly. 
*   **[P2 / Data Loss Risk] Desktop Update Wipes Binary:** [Issue #46883](https://github.com/NousResearch/hermes-agent/issues/46883). A failed in-app update deletes the running application binary, leaving the app unlaunchable until manual rebuild.
*   **[P3 / Local Providers] Ollama Context Blowups:** [Issues #43900 & #46833](https://github.com/NousResearch/hermes-agent/issues/43900). Hermes silently caps Ollama local models at 4096 tokens or requests the full GGUF context window, causing VRAM blowups and garbled retries. 

## 6. Feature Requests & Roadmap Signals
*   **Enterprise & Remote Deployments:** Users are requesting features tailored for unattended execution. [Issue #46903](https://github.com/NousResearch/hermes-agent/issues/46903) requests documentation/enforcement of `hard_stop_enabled` for autonomous gateways.
*   **Advanced Delegation:** [Issue #46880](https://github.com/NousResearch/hermes-agent/issues/46880) requests Dual Sub-Agent Model Configurations (e.g., using GPT-4o for coding sub-agents, Claude for research), and [Issue #46884](https://github.com/NousResearch/hermes-agent/issues/46884) requests a sub-agent response quality gate.
*   **Gateway Watchdog:** Multiple issues ([#32574](https://github.com/NousResearch/hermes-agent/issues/32574), [#40199](https://github.com/NousResearch/hermes-agent/issues/40199)) are begging for a liveness watchdog to detect and auto-restart "zombie" platform connections (Discord, QQBot).
*   *Roadmap Prediction:* The next version will likely include enhanced Guardian/Security policies for tool execution, an overhaul of the Desktop App's process execution wrapper, and the new enterprise approval delegation stack.

## 7. User Feedback Summary
**Satisfaction:** Users love the architecture, multi-agent capabilities, and local model support, but are experiencing growing pains with the Desktop GUI. 
**Pain Points:** 
1. **Local Provider Integration:** Bridging Hermes with local Ollama instances is currently too brittle, with aggressive context defaults breaking local inference.
2. **Desktop App Maturity:** The TUI/Desktop build is blocking users (segfaults, truncating approval prompts in [Issue #44888](https://github.com/NousResearch/hermes-agent/issues/44888), update cycles destroying installs).
3. **Autonomous Resilience:** Users deploying Hermes as a 24/7 bot via Gateways feel the platform lacks robust fallbacks when API rate limits hit or WebSocket connections silently drop. 

## 8. Backlog Watch
*   **[PR #42334](https://github.com/NousResearch/hermes-agent/pull/42334) [P1] Dependency Drift Guard:** This critical security PR updating `aiohttp` and `anthropic` has been open since June 8th. It fixes an issue where patched values are inconsistent depending on the user's install path. Needs a maintainer review/merge.
*   **[PR #32771](https://github.com/NousResearch/hermes-agent/pull/32771) [P1] Untrusted Content Wrapping:** Open since May 26th, this addresses a prompt injection vector where multimodal tool outputs aren't safely wrapped. Critical for agents utilizing web/browser tools. 
*   **[Issue #32574](https://github.com/NousResearch/hermes-agent/issues/32574) Gateway Zombie Watchdog:** A highly requested P1 feature from May 26th that directly impacts 24/7 gateway stability. It is currently gathering dust.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the GitHub data provided for June 16, 2026.

### 1. Today's Overview
PicoClaw demonstrates highly active development and continuous integration cadence, evidenced by the release of a new nightly build and substantial community engagement. Over the past 24 hours, the project saw a high volume of pull request activity (12 updated PRs), heavily focused on system stability, defensive programming, and UX refinements. The maintainers are actively processing community contributions to harden goroutines and resolve edge-case crashes, though a few critical bugs regarding security and tool integrations are currently drawing community attention. Overall, project health appears robust, with a clear trajectory toward maturing the agent's core infrastructure.

### 2. Releases
*   **nightly: Nightly Build (v0.2.9-nightly.20260615.13a38bd1)**
    *   Automated continuous integration release. Marks the transition toward the `v0.2.9` stable milestone. As per standard nightly advisories, it may be unstable.

### 3. Project Progress
Developers merged/closed 2 PRs today, advancing the project's UI/UX and diagnostic capabilities:
*   **UX Improvement:** [PR #3097](https://github.com/sipeed/picoclaw/pull/3097) (closed) successfully introduced a visible "Shift + Enter" hint below the Web chat composer, improving onboarding for new users without cluttering the input field.
*   **Security Diagnostics:** [PR #3126](https://github.com/sipeed/picoclaw/pull/3126) (closed) improved launcher allowlist bypass tracking and logging, providing clearer warnings when public or non-loopback bindings bypass CIDR restrictions via same-host proxies.
*   **Active Development Focus:** There are currently 10 open PRs in the pipeline. The active work is heavily skewed towards Go defensive programming—specifically adding `panic recovery` to core goroutines, safely handling unchecked `sync.Map` type assertions, and explicit error handling for `Close()` and `json.Marshal` functions across various modules (web, registry, tts, seahorse).

### 4. Community Hot Topics
*   **[Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) (10 comments, CLOSED):** *RISC-V `.deb` version fails with OpenAI models.* This was a major talking point throughout May, highlighting a strong demand for PicoClaw within the RISC-V hardware community. The resolution of this issue indicates active maintainer support for alternative hardware architectures.
*   **[Issue #3015](https://github.com/sipeed/picoclaw/issues/3015) (3 comments, OPEN):** *Windows build QQ Channel connection failure.* Users relying on Windows environments for message gateway deployments are experiencing token retrieval timeouts with Tencent's QQ bot API. This reveals a need for better network/resilience handling for Windows-specific gateway builds.

### 5. Bugs & Stability
Ranked by severity:
1.  **[HIGH] Security Bypass via Reverse Proxy:** [Issue #3069](https://github.com/sipeed/picoclaw/issues/3069) reveals that the launcher's `allowed_cidrs` network allowlist can be bypassed if deployed behind a same-host reverse proxy because it trusts `RemoteAddr`. *Note: Diagnostics for this were addressed in PR #3126 today, though the core patch may still require attention.*
2.  **[HIGH] Silent Tool Failures:** [Issue #3125](https://github.com/sipeed/picoclaw/issues/3125) reports that the `web_search` tool fails silently when using the Brave API. The LLM formats the call correctly, but the backend returns no results due to migration issues with `.security.yml`.
3.  **[MEDIUM] Core Process Crashes:** Unprotected goroutines causing process crashes. *Fix exists: [PR #3132](https://github.com/sipeed/picoclaw/pull/3132) adds panic recovery.*
4.  **[MEDIUM] Gateway Timeouts:** [Issue #3015](https://github.com/sipeed/picoclaw/issues/3015) regarding QQ channel token retrieval timeout on Windows.

### 6. Feature Requests & Roadmap Signals
*   **Robustness & Error Handling:** Contributor `chengzhichao-xydt` opened a barrage of PRs ([#3059](https://github.com/sipeed/picoclaw/pull/3059), [#3128](https://github.com/sipeed/picoclaw/pull/3128), [#3130](https://github.com/sipeed/picoclaw/pull/3130), etc.) strictly dedicated to linter warnings and silent error discards. This signals that the upcoming `v0.2.9` release will be a significantly hardened, production-ready build.
*   **Improved Chat Context:** [PR #3047](https://github.com/sipeed/picoclaw/pull/3047) restores full JSONL history reading for archived sessions, predicting that future versions will have more robust session management without losing historical context due to pagination limits.
*   **Platform Integrations:** [PR #2975](https://github.com/sipeed/picoclaw/pull/2975) aims to make Telegram group chats more conversational (replying to a bot acts as a mention), pointing to continuous refinement of multi-platform channel behaviors.

### 7. User Feedback Summary
*   **Pain Points:** Users are expressing frustration over silent failures, particularly regarding API key integrations (like Brave Search) after architectural updates. The transition to `.security.yml` has created friction. Additionally, Windows users deploying chat gateways face network instability.
*   **Use Cases:** Active use cases include running PicoClaw natively on RISC-V single-board computers, utilizing it as a gateway for QQ and Telegram bots, and performing complex web-aided LLM queries.
*   **Satisfaction:** Community engagement is highly positive. Users are providing detailed bug reports (even including security advisories), and contributors are proactively patching minor architectural smells (unchecked errors), showing a mature and invested open-source community.

### 8. Backlog Watch
*   **[PR #2975](https://github.com/sipeed/picoclaw/pull/2975):** A highly requested quality-of-life feature for Telegram group chats (treating replies as mentions) has been open since May 30 and is at risk of going stale. Needs maintainer review/merge.
*   **[Issue #3015](https://github.com/sipeed/picoclaw/issues/3015):** The QQ channel timeout issue on Windows has been open since June 6. As Windows is a primary deployment OS for casual users, this network bug requires prioritized investigation.
*   **[PR #3047](https://github.com/sipeed/picoclaw/pull/3047):** Web UI session history restoration PR has been waiting since June 7. Needs code review to unblock web UI improvements.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the structured project digest for NanoClaw based on the provided GitHub data.

### 1. Today's Overview
NanoClaw shows a highly active and focused development trajectory as of mid-June 2026, with 11 pull requests updated in the last 24 hours. The project is currently in a heavy stabilization and integration phase, specifically centering around incorporating the "OneCLI" gateway and the "Codex" image generation harness. Activity is entirely dominated by code contributions and bug fixes rather than new feature requests, with 4 PRs successfully merged/closed and 0 active issues currently open. This points to a tight, responsive maintainer loop—likely preparing the codebase for an imminent release or major integration milestone.

### 2. Releases
No new releases were published in the last 24 hours. However, PRs like [#2775](https://github.com/nanocoai/nanoclaw/pull/2775) (clarifying the OneCLI gateway upgrade) strongly suggest the team is preparing documentation and smoothing out breaking changes for an upcoming version bump.

### 3. Project Progress
The team made solid progress today in fixing integration failures and improving the agent container environment. Key merged/closed PRs include:
*   **Codex Integrations:** 
    *   [PR #2774](https://github.com/nanocoai/nanoclaw/pull/2774): Added a crucial upgrade path for the OneCLI gateway when its pinned version moves, preventing silent failures where new NanoClaw code runs against an old gateway.
    *   [PR #2772](https://github.com/nanocoai/nanoclaw/pull/2772): Fixed a server-side history fragmentation issue (CDX-004) where Codex exchanges were scattered across dozens of files instead of being archived per-thread.
    *   [PR #2769](https://github.com/nanocoai/nanoclaw/pull/2769) & [PR #2773](https://github.com/nanocoai/nanoclaw/pull/2773): Cleaned up documentation for the `add-codex` skill, explicitly flagging interactive authentication steps to prevent agent TTY stalling.
*   **Container Stability:** 
    *   [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) (Open but vital): Proposed adding `--shm-size=1g` and `--init` to Docker agent containers to stop headless Chromium (`agent-browser`) from crashing due to default Docker memory limits.

### 4. Community Hot Topics
The highest friction points discussed today revolve around **seamless execution environments for AI agents**.
*   **Docker Memory Limits for Agents:** [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) addresses a critical operational pain point: Docker's default 64MB shared memory is insufficient for AI agents running headless browsers. The community/proponents are recognizing that for agents to reliably perform web interactions, container infrastructure must be heavily optimized.
*   **OneCLI Upgrade Friction:** [PR #2775](https://github.com/nanocoai/nanoclaw/pull/2775) highlights that users were getting a false sense of security regarding dependency upgrades. There is a strong underlying need for NanoClaw to either auto-manage gateway dependencies transparently or communicate upgrade requirements much more loudly.

### 5. Bugs & Stability
Today's PRs reveal several high-severity stability issues affecting agents, along with existing fixes:
1.  **Silent Agent Container Freezes (High):** [PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626). The Signal channel setup silently fails to restart the service on macOS (`launchctl` ignores errors), leaving users disconnected without warning. Fix exists in PR.
2.  **Agent Browser Crashes (High):** [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771). Headless Chromium crashes during rendering due to Docker's low default `/dev/shm`. Fix exists in PR.
3.  **Dropped LLM Turns due to Budget Exhaustion (High):** [PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759). Budget/token-exhausted turns (e.g., Anthropic limits) were silently dropped instead of being delivered to the user, breaking user trust in long-running tasks. Fix exists in PR.
4.  **Broken Emoji Reactions (Medium):** [PR #2627](https://github.com/nanocoai/nanoclaw/pull/2627). The MCP `add_reaction` handler fails silently across almost all platforms (WhatsApp, Discord, Teams) because it passes shortcodes instead of unicode. Fix exists in PR.

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were opened today, strong roadmap signals are embedded within the codebase changes:
*   **Advanced Image Generation Harness:** [PR #2770](https://github.com/nanocoai/nanoclaw/pull/2770) shows ongoing work to support Codex's built-in image generation, ensuring file events successfully route back to the chat interface.
*   **Deterministic Infrastructure:** [PR #2628](https://github.com/nanocoai/nanoclaw/pull/2628) signals a need for deterministic, user-defined entity management (honoring `--id` flags in the CLI), which is critical for users scripting automated agent deployments via CI/CD.

### 7. User Feedback Summary
*   **Pain Points:** Users operating NanoClaw in production are experiencing "silent failures"—ranging from lost LLM turns due to budget limits, broken Slack/emoji reactions, and un-upgraded OneCLI gateways. The underlying complaint is that when the system fails, it fails *quietly*, making debugging extremely difficult. 
*   **Use Cases:** NanoClaw is clearly being used as a multi-channel, multi-model autonomous agent (accessing WhatsApp, Discord, Signal, Teams) that heavily relies on web scraping (Chromium) and external gateways (OneCLI).
*   **Satisfaction:** While feature-rich, users require higher robustness. The rapid closing of these "silent failure" PRs indicates an active, responsive development team addressing these exact operational reliability concerns.

### 8. Backlog Watch
Several bug fix PRs have been sitting open since late May and require maintainer attention to be merged into the main trunk:
*   [PR #2628](https://github.com/nanocoai/nanoclaw/pull/2628) (Opened May 27): Fix for ignored `--id` flags in `ncl groups create`.
*   [PR #2627](https://github.com/nanocoai/nanoclaw/pull/2627) (Opened May 27): Fix for broken emoji reactions across non-Slack channels.
*   [PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626) (Opened May 27): Fix for silent Signal service restart failures.
*   [PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759) (Opened June 14): Fix for dropping budget/billing error turns.

*Note: Reviewing and merging these pending reliability PRs should be a top priority before cutting the next stable release.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the GitHub data provided for June 16, 2026.

### 1. Today's Overview
The NullClaw project is currently experiencing steady but routine community engagement, with 3 open issues and 1 automated pull request updated in the last 24 hours. There were no releases, merged pull requests, or closed issues, indicating a period of bug triaging and backlog accumulation rather than active feature deployment. The lack of merged code suggests maintainers might be focusing on stability or are currently tied up with internal development tasks. Overall project health remains stable, supported by ongoing dependency maintenance and active user discussions regarding local model integrations and enterprise cloud security. 

### 2. Releases
*No new releases or version updates were recorded in this reporting period.*

### 3. Project Progress
No new features were advanced, and no bug fixes were merged into the codebase today. The only forward progress in the repository is automated maintenance, specifically [PR #956](https://github.com/nullclaw/nullclaw/issues/956), which proposes bumping the Docker base image (Alpine) from version 3.23 to 3.24. Once merged, this will ensure the project's containerized environments remain secure and up-to-date. 

### 4. Community Hot Topics
The most actively discussed items today focus on model execution and cloud security integration:
*   **[Issue #957: Rate limit issue](https://github.com/nullclaw/nullclaw/issues/957)**: A user utilizing NullClaw as a memoryless agent runtime running JSON output is consistently hitting a "config reader" rate limit. This highlights a growing need for better documentation around internal rate-limiting thresholds and configurability for high-frequency agent operations.
*   **[Issue #955: Identity based authentication support for Azure OpenAI LLM Provider](https://github.com/nullclaw/nullclaw/issues/955)**: A request to support Azure `DefaultTokenCredential` (e.g., az CLI login) for the Azure OpenAI provider. This signals strong enterprise adoption needs, where strict subscription-level security policies prohibit traditional API key usage.
*   **[Issue #952: Local model using ollama returns incomplete answers](https://github.com/nullclaw/nullclaw/issues/952)**: Receiving engagement after being opened a few days ago, users running local models (like Gemma via Ollama) are actively discussing incomplete text generation, pointing to friction in local, air-gapped deployments.

### 5. Bugs & Stability
Based on recent activity, two notable bugs are affecting user stability:
1.  **[Critical/High] Truncated Local Model Outputs ([Issue #952](https://github.com/nullclaw/nullclaw/issues/952))**: When configured to use Ollama (specifically with the Gemma model), the agent fails to output complete sentences. This severely impacts the usability of the assistant for local deployments. *Status: Open, no fix PR available yet.*
2.  **[Medium] Rate Limiting Misconfiguration/Confusion ([Issue #957](https://github.com/nullclaw/nullclaw/issues/957))**: Users setting up JSON-formatted outputs without memory are hitting undocumented or default rate limits ("The config reader hit a rate limit"). *Status: Open, no fix PR available yet.*

### 6. Feature Requests & Roadmap Signals
*   **Enterprise-Grade Authentication**: [Issue #955](https://github.com/nullclaw/nullclaw/issues/955) strongly signals that NullClaw is being evaluated for enterprise environments. Implementing Identity-Based Authentication (Managed Identities/Entra ID) for Azure OpenAI is highly likely to be picked up in an upcoming milestone to capture enterprise market share.
*   **Granular Control Configurations**: [Issue #957](https://github.com/nullclaw/nullclaw/issues/957) implies that future updates should expose more granular control over internal rate limiting and config reading processes, allowing power users to optimize agent loops without hitting artificial ceilings.

### 7. User Feedback Summary
The current user base demonstrates a diverse set of deployment scenarios for NullClaw. Power users are attempting to build highly customized, memoryless agent loops with strict JSON outputs, while others are heavily invested in running localized, private models via Ollama. Furthermore, enterprise users are attempting to deploy NullClaw within secure Azure cloud environments. However, satisfaction is currently slightly hindered by deployment friction—specifically, undocumented rate limits blocking agent workflows and incomplete streaming/generation issues on local models. 

### 8. Backlog Watch
Maintainers should direct their attention to resolving the following open items to unblock users:
*   **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952)**: Open since June 11, this Ollama integration bug is blocking local model adoption and requires investigation into whether it's a prompt formatting issue with Gemma or a parsing bug in NullClaw's response handler.
*   **[PR #956](https://github.com/nullclaw/nullclaw/issues/956)**: The automated Dependabot PR bumping Alpine to 3.24 needs to be reviewed and merged to maintain CI/CD security standards.
*   **[Issue #955](https://github.com/nullclaw/nullclaw/issues/955)** & **[Issue #957](https://github.com/nullclaw/nullclaw/issues/957)**: Both newly created issues lack maintainer responses. Addressing the Azure authentication request and clarifying the rate limit documentation will quickly improve the developer experience.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the GitHub data provided.

# IronClaw Project Digest: 2026-06-16

## 1. Today's Overview
IronClaw is currently exhibiting exceptionally high development momentum, driven largely by the rollout of the new "Reborn" runtime and WebUI v2. Over the last 24 hours, the project saw 96 total updates across issues and pull requests, with a strong PR merge throughput (24 closed/merged). Activity is heavily bifurcated between core architectural improvements (observability, learning systems, credential scoping) and rapid triaging of UX friction points in the Reborn UI. The volume of newly opened issues related to OAuth, MCP servers, and extension setups indicates active user onboarding and testing of the extension ecosystem.

## 2. Releases
No new official releases were deployed in the last 24 hours. 
*Note:* An automated release PR ([ironclaw/ironclaw#3708](https://github.com/nearai/ironclaw/pull/3708)) has been open since May 16, targeting major version bumps across core crates (e.g., `ironclaw` 0.24.0 -> 0.29.1, `ironclaw_common` 0.4.2 -> 0.5.0). This indicates a significant consolidated release is pending and will include API breaking changes.

## 3. Project Progress
Significant architectural and UX milestones were achieved today:
*   **Trace Commons Onboarding:** [PR #4559](https://github.com/nearai/ironclaw/pull/4559) merged, introducing agent-driven Trace Commons onboarding via invite links, replacing a complex 15-step CLI flow.
*   **Agent Loop Stability:** [PR #4841](https://github.com/nearai/ironclaw/pull/4841) merged, tackling "run-borking" failures by adding failure explanations and retryable failed runs. Additionally, [PR #4837](https://github.com/nearai/ironclaw/pull/4837) introduced a gated final-answer nudge to fix empty or canned agent turn endings.
*   **HTTP Tool Fixes:** [PR #4827](https://github.com/nearai/ironclaw/pull/4827) fixed a regression where `builtin.http` rejected empty bodies/body_base64 fields, preventing standard GET requests.
*   **CI Test Sharding:** The team successfully implemented test sharding for legacy tests ([PR #4820](https://github.com/nearai/ironclaw/pull/4820)) and Reborn WebUI v2 tests ([PR #4821](https://github.com/nearai/ironclaw/pull/4821)) to speed up CI pipelines. 

## 4. Community Hot Topics
*   **Persistent Approvals & Cross-Thread Scopes:** The most active discussion today centers around [Issue #4825](https://github.com/nearai/ironclaw/issues/4825) and [PR #4939](https://github.com/nearai/ironclaw/pull/4939). Users are highly annoyed that "always allow" capability approvals don't persist across different chat threads. Core contributors are actively pushing a fix to make credentials owner-scoped rather than thread-scoped.
*   **Reborn UX & Onboarding Polish:** [Issue #4908](https://github.com/nearai/ironclaw/issues/4908) and [Issue #4764](https://github.com/nearai/ironclaw/issues/4764) (auth states and denied shell approvals) highlight user friction with the new WebUI v2 feedback loops, generating significant commentary. 
*   **Automated Code Review:** [Issue #4880](https://github.com/nearai/ironclaw/issues/4880) discusses bringing AI-powered PR review to IronClaw's own development cycle, showing strong community interest in self-hosting AI capabilities for dev operations.

## 5. Bugs & Stability
*   **[Critical] Reborn Automations Never Run:** [Issue #4917](https://github.com/nearai/ironclaw/issues/4917) reports that scheduled automations (e.g., "Echo 123 every minute") stay in a SCHEDULED state forever and never fire. The panel's status numbers are also misleading.
*   **[High] OAuth Flow & Execution Resume Breaks:** Multiple issues report that successful OAuth completions fail to resume agent execution, leaving it hanging or dead. See [Issue #4907](https://github.com/nearai/ironclaw/issues/4907) (Google Calendar), [Issue #4921](https://github.com/nearai/ironclaw/issues/4921) (Gmail), and Railway deployment localhost callback failures ([Issue #4928](https://github.com/nearai/ironclaw/issues/4928)).
*   **[Medium] Duplicate Extension Dispatches:** [Issue #4904](https://github.com/nearai/ironclaw/issues/4904) notes that the Google Calendar installation flow may accidentally dispatch duplicate `extension_install` actions. 
*   **[Medium] Provider-backed MCP tool resume failure:** [Issue #4887](https://github.com/nearai/ironclaw/issues/4887) reports stale capability input refs breaking MCP tool invocations after approval.

## 6. Feature Requests & Roadmap Signals
*   **Agent Memory & Learning System:** [PR #4937](https://github.com/nearai/ironclaw/pull/4937) and [PR #4938](https://github.com/nearai/ironclaw/pull/4938) introduce the "Reborn learning-system stack" (WS-1 & WS-2). This feature aims for "learn from mistakes, never repeat" parity via memory documents and a learning persona.
*   **Downloadable Files in WebChat:** [PR #4933](https://github.com/nearai/ironclaw/pull/4933) adds the ability for the Reborn WebChat agent to produce files (CSV, reports) on its filesystem and allows the user to download them.
*   **Universal Attachments:** [Issue #4644](https://github.com/nearai/ironclaw/issues/4644) requests wiring the v1 attachment pipeline into Reborn, as attachments are currently silently dropped in the new text-only transcript contract.
*   **AI Code Review Automation:** As noted in [Issue #4880](https://github.com/nearai/ironclaw/issues/4880), AI-assisted PR review is being scoped for implementation.

## 7. User Feedback Summary
User feedback is heavily focused on the extension ecosystem. While users are thrilled to connect external services (Google Workspace, Notion, GitHub), the execution flow is currently causing friction. Specifically, users report that denied approvals leave tools hanging indefinitely without UI feedback ([Issue #4764](https://github.com/nearai/ironclaw/issues/4764)). Additionally, the status UI for extensions is highly misleading—showing "SETUP NEEDED" for configured tools ([Issue #4925](https://github.com/nearai/ironclaw/issues/4925)) or prompting for Access Tokens instead of launching standard OAuth flows ([Issue #4884](https://github.com/nearai/ironclaw/issues/4884)). The overall sentiment is excitement for the Reborn runtime, coupled with frustration over fragile authentication and permission flows.

## 8. Backlog Watch
*   **Pending Major Release PR:** [PR #3708](https://github.com/nearai/ironclaw/pull/3708) has been open for a month, blocking a major version bump with breaking changes.
*   **Pending Dependency Updates:** [PR #4876](https://github.com/nearai/ironclaw/pull/4876) is waiting to merge 43 dependency updates, including major bumps to `agent-client-protocol` and `rustls-native-certs`.
*   **Agent Recovery Loop:** [Issue #4761](https://github.com/nearai/ironclaw/issues/4761) (opened June 11) reports that the agent stops dead after repeated tool failures instead of self-correcting. While PRs like #4841 address general run-borking, this specific loop failure needs verification. 
*   **Stale GitHub Extension Bug:** [Issue #4807](https://github.com/nearai/ironclaw/issues/4807) (opened June 12) notes that the `github.list_issues` tool incorrectly returns pull requests alongside issues, which is still open and lacks clear resolution.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-06-16

## 1. Today's Overview
LobsterAI demonstrated highly active maintenance and development momentum over the past 24 hours, processing 11 Pull Requests alongside 2 Issue updates. The core focus of today's engineering effort was heavily concentrated on refining the voice input (ASR) architecture, optimizing document Artifacts, and executing significant CI/CD dependency upgrades. While active feature development is robust, the repository currently has no open bug reports from today, though it is carrying some older, unresolved community-reported issues. Overall project health appears stable, with a strong pipeline of feature refinements indicating preparation for an upcoming release.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Today's development was driven by core maintainers and contributors, resulting in 5 closed PRs focusing on UX and architectural streamlining:
*   **Voice Input (ASR) Refactoring:** The team is aggressively streamlining the voice input experience. [PR #2160](https://github.com/netease-youdao/LobsterAI/pull/2160) removed legacy short ASR upload flows and config switches, making voice input rely exclusively on realtime ASR. [PR #2162](https://github.com/netease-youdao/LobsterAI/pull/2162) fixed merge conflicts to preserve cancellation guards and diagnostic logging, while [PR #2163](https://github.com/netease-youdao/LobsterAI/pull/2163) refined the dictation recording UI and ASR quota handling.
*   **Artifacts & Document Sharing:** [PR #2159](https://github.com/netease-youdao/LobsterAI/pull/2159) introduced substantial improvements to the Artifacts system, enabling seamless sharing and preview optimization for DOCX, PPTX, XLSX, PDF, and CSV files. This also included native PDF fallback preview and automatic table column width rendering. 
*   **Housekeeping:** [PR #2161](https://github.com/netease-youdao/LobsterAI/pull/2161) updated the "About" section in the renderer.

## 4. Community Hot Topics
The most notable community contribution today is [PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428), which proposes implementing system notifications for background sessions. 
*   **Underlying Need:** The contributor highlighted a UX gap compared to tools like Claude Code and Cursor. Users currently have to manually switch back to the LobsterAI window to check if a background task completed or threw an error. Implementing Electron's native `Notification` API for unfocused windows directly addresses the need for asynchronous workflow management.
*   **Dependency Upgrades:** A massive cluster of `dependabot` PRs ([#2167](https://github.com/netease-youdao/LobsterAI/pull/2167), [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166), [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165), [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164)) shows heavy community/automated activity in keeping CI pipelines (actions/stale, dorny/paths-filter, actions/checkout, trufflehog) fully patched and up-to-date.

## 5. Bugs & Stability
No critical bugs, crashes, or regressions were reported in the last 24 hours. 
However, two older stability/UX bugs were marked as active/stale today:
*   **Medium - Skill Upload UX:** [Issue #1426](https://github.com/netease-youdao/LobsterAI/issues/1426) reports missing success toasts and list auto-refresh when uploading local skills. 
*   **Medium - Data Duplication:** [Issue #1427](https://github.com/netease-youdao/LobsterAI/issues/1427) notes that users can repeatedly add the same local skill, resulting in duplicate entries.

## 6. Feature Requests & Roadmap Signals
Based on today's merged code and active development branches, we can predict the following for the imminent `2026.6.11` release branch:
*   **Realtime-Only Voice:** The stripping of legacy ASR modes signals that realtime voice recognition will be the sole, highly-optimized default moving forward.
*   **Advanced Document Preview:** The Artifacts pipeline is being prepped to act as a robust document viewer, handling complex formatting (pagination, native PDF rendering) directly inside the app.
*   **Likely Next Feature:** System notifications for background tasks (from [PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428)) is a highly requested UX parity feature that aligns with the current high-velocity development phase.

## 7. User Feedback Summary
Real user feedback highlights a clear pain point regarding customizability and the "Skill" management lifecycle. Users attempting to localize or personalize their AI assistant via local skill uploads are encountering friction—specifically, poor state management (no UI feedback) and lack of data validation (duplicate entries). On the positive side, maintainer focus on Artifacts and Voice Input indicates that core multimedia and document-handling capabilities are rapidly maturing to meet enterprise/power-user demands.

## 8. Backlog Watch
*   **[Issue #1426](https://github.com/netease-youdao/LobsterAI/issues/1426) & [Issue #1427](https://github.com/netease-youdao/LobsterAI/issues/1427):** Both opened in early April, these easily reproducible UI bugs (missing skill refresh, duplicate skills) are still open and require maintainer attention or a community PR to resolve the local upload data flow.
*   **[PR #1428](https://github.com/netease-youdao/LobsterAI/pull/1428):** Open since April 3rd, this background notification feature has received zero comments from core maintainers. Given the project's current push towards UX parity with competitors, this PR needs a review.
*   **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277):** A major dependency bump for `electron` (v40 to v42) has been sitting in the backlog since April. Major framework updates often require careful migration and should not linger much longer to avoid technical debt.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the structured project digest for Moltis based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-16, the Moltis project exhibits steady but low-volume development activity, with no new releases, issues, or merged code in the past 24 hours. The project's current health is best characterized as "active maintenance/development," entirely driven by core maintainer(s). Specifically, two new pull requests were opened yesterday by developer `gptme-thomas`, focusing on expanding agent interoperability and dynamic context injection. The absence of community-generated issues and PRs suggests that the project is either in a highly stable state, caters to a niche enterprise/deployment audience, or has not yet experienced a recent surge in mainstream open-source adoption. 

### 2. Releases
*Omitted. No new versions or releases were published in the last 24 hours.*

### 3. Project Progress
*Omitted. While two new PRs were opened yesterday, there were 0 merged or closed PRs today. Therefore, no code officially advanced to the main branch in this reporting window.*

### 4. Community Hot Topics
While there is no widespread community discussion (zero comments/reactions across the board), the repository's active focus is concentrated entirely on two architectural enhancements:
*   **[PR #1125: Support model and effort selection for external agents](https://github.com/moltis-org/moltis/pull/1125)**: Focuses on standardizing how external agent providers interact with the `/model` interface, specifically adding metadata persistence for compute effort and model selection.
*   **[PR #1124: Add context command support for chat turns](https://github.com/moltis-org/moltis/pull/1124)**: Introduces a mechanism to automatically inject generated runtime context into prompts via a `chat.context_command` configuration.

**Analysis of Underlying Needs:** Both PRs signal a strong push toward **headless and automated deployments**. By enabling dynamic context injection and standardizing external agent configuration, the project is moving away from manual, interactive chat interfaces toward robust, programmatic integrations where Moltis acts as an orchestrator for other AI agents and dynamic environments.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported by the community today (0 issues created or updated). This could indicate high stability for the current build, though it is heavily skewed by the current lack of inbound community issue traffic. No fix PRs are currently flagged in the last 24h data.

### 6. Feature Requests & Roadmap Signals
No explicit user feature requests were logged today. However, the two open PRs provide strong roadmap signals for the upcoming iteration:
*   **Headless Context Orchestration:** The `chat.context_command` ([PR #1124](https://github.com/moltis-org/moltis/pull/1124)) shows that the roadmap prioritizes automated, deployment-ready contexts, allowing users to script environment variables or system states directly into the prompt flow without manual intervention.
*   **Agentic Interoperability:** The push to support model and effort selection for *external* agents ([PR #1125](https://github.com/moltis-org/moltis/pull/1125)) predicts that the next version will likely position Moltis as a meta-agent or router, capable of delegating tasks to specialized sub-agents (e.g., fast models for simple tasks, high-effort models for coding) via standardized config schemas.

### 7. User Feedback Summary
Due to zero inbound issue activity, there is no measurable end-user feedback (satisfaction or dissatisfaction) to report today. The only "user" in this cycle is the core developer (`gptme-thomas`), whose code commits indicate a pain point centered around the friction of pasting manual context and managing disparate external agent models. The project appears highly functional for its current maintainer but lacks a visible feedback loop with the broader open-source community at this moment.

### 8. Backlog Watch
There are no long-unanswered community issues to report, as the total issue count for the project currently stands at 0. 

However, the two active PRs ([#1125](https://github.com/moltis-org/moltis/pull/1125) and [#1124](https://github.com/moltis-org/moltis/pull/1124)) are newly created and in an `[OPEN]` state. They currently require maintainer review, testing, and eventual merging to prevent them from stalling and becoming localized backlog items.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured project digest for CoPaw (QwenPaw) based on the GitHub data from 2026-06-15 to 2026-06-16.

### 1. Today's Overview
The CoPaw (now transitioning to QwenPaw) project is experiencing very high development velocity and community engagement. Over the past 24 hours, the project processed 50 issues (31 currently open) and 50 PRs, merging a highly impressive 35 PRs. This 70% PR merge rate indicates an active push towards refining the v1.1.11.post2 release, likely fixing regressions and polishing UI/UX features like token tracking and desktop client stability. The community is heavily engaged in stress-testing long-context scenarios, desktop client performance, and newly introduced plugin architectures.

### 2. Releases
No new official releases were published in the last 24 hours. The project is currently operating on the `v1.1.11.post2` iteration, with maintainers actively merging continuous integration and bug-fix PRs to stabilize the codebase for the next tagged release.

### 3. Project Progress
Significant advancements were merged today, spanning UI enhancements, core stability, and system integrations:
*   **UI & Chat Experience:** Merged [PR #4310](https://github.com/agentscope-ai/QwenPaw/pull/4310) and [PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433), finally bringing long-awaited context usage and chat-level token tracking indicators to the Console UI.
*   **Task Scheduling:** Advanced cron job capabilities with merged [PR #4602](https://github.com/agentscope-ai/QwenPaw/pull/4602) for isolated cron job sessions, and [PR #4495](https://github.com/agentscope-ai/QwenPaw/pull/4495) to fix cron validation errors.
*   **Desktop Client Stability:** Merged [PR #5192](https://github.com/agentscope-ai/QwenPaw/pull/5192), adding critical guards against Windows console crashes and self-kill commands.
*   **Plugin & Skill System:** Merged [PR #5146](https://github.com/agentscope-ai/QwenPaw/pull/5146) to clean up skill-slash-inject displays, and [PR #5123](https://github.com/agentscope-ai/QwenPaw/pull/5123) to overhaul the skill market UI. 

### 4. Community Hot Topics
*   **Channel Integration Debugging:** [Issue #1911](https://github.com/agentscope-ai/QwenPaw/issues/1911) (22 comments) shows a user struggling to connect the Huawei Xiaoyi channel. It highlights the friction developers face when debugging third-party platform integrations where error surfacing is opaque.
*   **File Attachment Failures:** [Issue #5140](https://github.com/agentscope-ai/QwenPaw/issues/5140) (6 comments) and [Issue #5199](https://github.com/agentscope-ai/QwenPaw/issues/5199) point out persistent 404 errors when downloading binary files (docx/pdf). Users are frustrated that pure text works, but rich documents fail.
*   **Feishu Streaming Latency:** [Issue #5167](https://github.com/agentscope-ai/QwenPaw/issues/5167) (4 comments) provides a detailed, high-quality report on the Feishu CardKit streaming experience, noting that long replies "drip out" character by character, degrading UX.

### 5. Bugs & Stability
Ranked by severity based on today's issue tracker:
1.  **Critical: Windows Process Leak & CMD Spam** ([Issue #5181](https://github.com/agentscope-ai/QwenPaw/issues/5181)): Plugin dependency auto-installs trigger infinite CMD popup loops if PyPI is unreachable, causing desktop paralysis. 
2.  **Critical: Windows Client Memory Bloat** ([Issue #5138](https://github.com/agentscope-ai/QwenPaw/issues/5138)): Desktop client processes continuously spawn, pushing memory usage past 90%. *(Mitigated by [PR #5192](https://github.com/agentscope-ai/QwenPaw/pull/5192) merged today).*
3.  **High: Context Loss during Compaction** ([Issue #5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)): Aggressive context compression wipes out agent system prompts/personas if they exceed token thresholds, breaking the agent's logic mid-task.
4.  **Medium: Endless Reasoning Loop** ([Issue #5162](https://github.com/agentscope-ai/QwenPaw/issues/5162)): Agents occasionally get trapped in a thought/logic loop, completely ceasing to respond.

### 6. Feature Requests & Roadmap Signals
*   **Context Compression Abstractions:** [Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) suggests integrating "Headroom" to reversibly compress context by up to 95%, signaling a strong community desire for local, token-saving proxies.
*   **Desktop OS Integrations:** [Issue #5164](https://github.com/agentscope-ai/QwenPaw/issues/5164) requests native system tray support, boot-startup, and background daemon capabilities for the desktop client. 
*   **Developer Observability:** [Issue #5009](https://github.com/agentscope-ai/QwenPaw/issues/5009) requests deep integration with OpenTelemetry or Langfuse for multi-turn agent tracing and cost attribution.
*   *Prediction for Next Release:* The next version will likely finalize the "copaw" -> "qwenpaw" package renaming, ship the new UI token trackers, and include aggressive fixes for the desktop client's memory and plugin initialization bugs.

### 7. User Feedback Summary
The overall sentiment is highly anticipative but currently plagued by transition friction. Users love the deep integrations (DingTalk, Feishu, Desktop), but are experiencing "growing pain" bugs typical of a rapidly scaling codebase. Key dissatisfactions revolve around the desktop client's resource heaviness on Windows and erratic file-handling behaviors. Conversely, satisfaction is high regarding the maintainers' receptiveness to UI feedback (specifically the rapid implementation of token tracking and conversation queues). 

### 8. Backlog Watch
*   **Uncaught Rename Side-Effects:** [Issue #5104](https://github.com/agentscope-ai/QwenPaw/issues/5104) highlights a messy situation where residual `.copaw` and `.qwenpaw` directories cause plugin installations to fail. This architectural debt needs official cleanup tooling.
*   **Long-Term Channel Bugs:** [Issue #1911](https://github.com/agentscope-ai/QwenPaw/issues/1911) has been open since March 2026. It needs maintainer triage to determine if it is a CoPaw bug or an upstream API limitation.
*   **Silent Plugin Failures:** [PR #4900](https://github.com/agentscope-ai/QwenPaw/pull/4900) (open since June 2nd) aims to decouple the plugin loader from agent startup to fix frozen PyInstaller/Tauri environments. This is highly critical for desktop users and requires immediate maintainer review and merge.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the structured project digest for ZeroClaw based on the provided GitHub data.

### 1. Today's Overview
ZeroClaw is experiencing a period of extremely high development velocity and community engagement, processing 50 issue updates and 50 PR updates in the last 24 hours. The project is actively marching towards its `v0.8.1` and `v0.9.0` milestones, with a heavy focus on architectural hardening, multi-agent routing, and security enhancements. Maintainers and contributors are successfully merging bug fixes and architectural refactors, though the ratio of closed/merged items (4 and 3 respectively) to open items indicates a massive influx of new work and proposals. Overall project health appears robust, with sophisticated RFCs being discussed and rapid responses to critical workflow bugs.

### 2. Releases
No new releases were published today. The project is currently in an active development and stabilization phase for the upcoming `v0.8.1` integration queue and the `v0.9.0` milestone. 

### 3. Project Progress
Development today was characterized by significant architectural refactoring, developer experience (DX) improvements, and test coverage expansion:
*   **Performance Optimization:** [PR #7667](https://github.com/zeroclaw-labs/zeroclaw/pull/7667) optimized the API hooks by changing `before_llm_call` to take mutable borrows, successfully eliminating the cloning of the entire provider transcript on every LLM request.
*   **Cost Tracking:** [PR #7492](https://github.com/zeroclaw-labs/zeroclaw/pull/7492) introduced support for cached input token pricing for OpenAI-compatible and DeepSeek providers, allowing for accurate cost tracking.
*   **Memory Hygiene:** [PR #7081](https://github.com/zeroclaw-labs/zeroclaw/pull/7081) extended the memory pruning system to cover daily and core DB rows, preventing unbounded database growth in long-running deployments.
*   **Channel Enhancements:** [PR #7661](https://github.com/zeroclaw-labs/zeroclaw/pull/7661) recovered Matrix room management capabilities, and [PR #7098](https://github.com/zeroclaw-labs/zeroclaw/pull/7098) moved closer to merging a WebSocket listener mode for Mattermost to replace REST polling.
*   **Repository Hygiene:** [PR #7676](https://github.com/zeroclaw-labs/zeroclaw/pull/7676) made `gh-pages` ephemeral to reduce the default repository clone size from ~163 MiB by removing 2.9 GiB of accumulated mdBook artifacts.

### 4. Community Hot Topics
The most engaging discussions center around enterprise readiness, complex multi-agent setups, and robust security boundaries:
*   **Multi-Agent Routing:** [Issue #2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) (9 👍) remains a highly requested feature. Users want the ability to route inbound messages to multiple isolated agents with separate workspaces and channel accounts within a single running Gateway.
*   **Custom Inference Endpoints:** Issues [#1458](https://github.com/zeroclaw-labs/zeroclaw/issues/1458) (8 comments) and [#551](https://github.com/zeroclaw-labs/zeroclaw/issues/551) (4 comments) highlight a massive pain point for self-hosters: the inability to use local CAs or bypass SSL cert checks for custom OpenAI-compatible endpoints.
*   **Agent-to-Agent (A2A) Communication:** [Issue #7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) discusses implementing `.well-known/agent-card.json` for interoperability with external agent systems.
*   **Hardened CI & WASM Future:** Two ambitious RFCs by the community propose a complete hardening of the CI supply chain ([Issue #7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675)) and eliminating Node.js entirely from the build and runtime in favor of WebAssembly ([Issue #7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674)).

### 5. Bugs & Stability
Several high-severity bugs impacting agent workflows and security were reported today, though maintainers have already triaged and proposed fixes for many:
*   **[S1 - Workflow Blocked]** Gateway WebSocket `ask_user` failure ([Issue #7542](https://github.com/zeroclaw-labs/zeroclaw/issues/7542)): Agent calls to `ask_user` fail immediately in the web dashboard. 
    * *Fix Status:* Addressed via [PR #7678](https://github.com/zeroclaw-labs/zeroclaw/pull/7678) which threads the shared CanvasStore into WS chat sessions.
*   **[S2 - Security Degraded]** MCP Scoping Silent No-op ([Issue #7733](https://github.com/zeroclaw-labs/zeroclaw/issues/7733)): Per-agent MCP bundle scoping is parsed in the config but never enforced at runtime, creating an isolation vulnerability. 
    * *Fix Status:* Partially addressed by [PR #7547](https://github.com/zeroclaw-labs/zeroclaw/pull/7547) which fixes MCP tool discovery in risk profiles.
*   **[S2 - Degraded Behavior]** Stale System Prompts ([Issue #7742](https://github.com/zeroclaw-labs/zeroclaw/issues/7742)): Mid-session dispatcher swaps leave stale tool instructions in agent history.
*   **[S2 - Degraded Behavior]** Multimodal Cache Collisions ([Issue #7741](https://github.com/zeroclaw-labs/zeroclaw/issues/7741)): Response cache incorrectly processes `[IMAGE:...]` markers, potentially returning incorrect cached responses.

### 6. Feature Requests & Roadmap Signals
The roadmap is heavily signaling a transition towards advanced multi-agent orchestration and granular security controls:
*   **Next Version (v0.8.1 & v0.8.0):** Expect native context compression via a provider pipeline decorator ([Issue #7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673)), more flexible channel reply-intent prechecks ([Issue #6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067)), and reconciled runtime model switching ([Issue #6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557)).
*   **Future Horizon (v0.9.0+):** [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) outlines v0.9.0's focus on per-principal authorization, gateway/RPC WSS boundaries, and multi-agent features like explicit target-profile delegation ([Issue #7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743)) and per-agent prompt injection overrides ([Issue #7749](https://github.com/zeroclaw-labs/zeroclaw/issues/7749)).

### 7. User Feedback Summary
Users are deploying ZeroClaw in complex, multi-platform environments and are feeling growing pains around configuration flexibility. There is strong satisfaction with the expanding channel integrations (Slack, Matrix, Mattermost, Email), but distinct frustration regarding string editing and terminal navigation in the TUI configuration ([Issue #7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467), [Issue #7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468)). Enterprise users are demanding more sophisticated delegation and authorization boundaries, indicating that ZeroClaw is outgrowing simple single-agent use cases.

### 8. Backlog Watch
*   **Bulk Revert Recovery:** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) is tracking the recovery of 153 commits lost during a bulk rollback in March. This massive technical debt still requires maintainer attention to re-merge approved features safely.
*   **Auth Profile Bug:** [Issue #7038](https://github.com/zeroclaw-labs/zeroclaw/issues/7038) (WebSocket 401s despite valid auth) is currently blocked and awaiting action from the original author to provide a reliable reproduction.
*   **Stale PRs:** [PR #5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) (Nix flake support) and [PR #7245](https://github.com/zeroclaw-labs/zeroclaw/pull/7245) (Plugin skills fix) are marked as stale-candidates and require author action to proceed.

</details>