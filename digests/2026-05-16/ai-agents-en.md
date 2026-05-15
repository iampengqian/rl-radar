# OpenClaw Ecosystem Digest 2026-05-16

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-15 22:16 UTC

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

# OpenClaw Project Digest — 2026-05-16

## 1. Today's Overview
OpenClaw is experiencing exceptionally high community engagement, with 500 issues and 500 pull requests updated in the last 24 hours (90%+ remain open/active). The project recently shipped beta release `v2026.5.14-beta.2`, introducing enhanced channel/agent configuration features. However, the ecosystem is currently navigating significant growing pains surrounding the `v2026.4.29` to `v2026.5.x` upgrade cycles, with widespread reports of gateway instability, high CPU utilization, and channel regressions. While maintainer and bot-submitted PRs are actively targeting systemic reliability flaws, the sheer volume of open bugs suggests the project is in a critical stabilization phase.

## 2. Releases
- **v2026.5.14-beta.2**
  - **Changes:** 
    - **Channels/SDK:** Added normalized command turn facts to channel turn construction and exposed command-turn helpers for plugin inbound contexts. 
    - **Agents/config:** Implemented support for per-agent bootstrap profile overrides for `contextInjection`, `bootstrapMaxChars`, and `bootstrapTotalMaxChars`.
  - **Migration Notes:** Administrators utilizing custom agent configurations should review their bootstrap profiles, as overrides are now deeply inherited per-agent rather than relying strictly on global defaults. Plugin developers should leverage the newly exposed inbound context helpers for better tool-routing logic.

## 3. Project Progress
Developers and the automated ClawSweeper bot merged/closed 45 PRs recently, focusing heavily on systemic reliability and configuration edge cases. Key advancements include:
*   **Session & Memory Management:** Addressed stale memory catch-ups on startup ([PR #82341](https://github.com/openclaw/openclaw/pull/82341)) and fixed short-term memory promotion pollution from Dreaming session-corpuses ([PR #78130](https://github.com/openclaw/openclaw/pull/78130)).
*   **Streaming & Parsing Fixes:** Corrected phantom tool calls created by parallel delta parsing in OpenAI-completions streams ([PR #82263](https://github.com/openclaw/openclaw/pull/82263)) and prevented memory leaks by aborting active text-stop runs ([PR #82342](https://github.com/openclaw/openclaw/pull/82342)). 
*   **Configuration & Compatibility:** Fixed Mac/Linux CLI tool plan executions, improved llama.cpp compatibility for local deployments ([PR #78085](https://github.com/openclaw/openclaw/pull/78085)), and resolved WSL/NFS performance lags by coalescing plugin registry snapshot filesystem walks ([PR #78101](https://github.com/openclaw/openclaw/pull/78101)).
*   **Documentation & Localization:** Improved zh-CN UI localization and enhanced new-user onboarding documentation regarding empty plugin allowlists ([PR #78105](https://github.com/openclaw/openclaw/pull/78105)).

## 4. Community Hot Topics
The most active discussions center around severe performance degradation and multi-channel routing failures following recent upgrades:
*   **Severe CPU & Event Loop Blocking:** A highly upvoted thread (👍 4) details how upgrades from `v2026.4.24` to `v2026.5.2` cause the Node process to pin at 100% CPU, inducing extreme control-plane latency and broken polling ([Issue #76562](https://github.com/openclaw/openclaw/issues/76562)).
*   **WebSocket Protocol Regressions:** The Mac desktop app and web UI are failing to connect to gateways following the `v2026.5.12` update, showing "wrong protocol" errors and locking users out ([Issue #82037](https://github.com/openclaw/openclaw/issues/82037)).
*   **Telegram Session Threading & HOL Blocking:** Users are actively discussing complex issues where Telegram ingress stalls occur alongside Codex app-server timeouts mid-turn ([Issue #82274](https://github.com/openclaw/openclaw/issues/82274)).
*   **Underlying Needs:** The community is urgently requesting better resource management within the Node.js gateway process and more robust regression testing before releases are shipped.

## 5. Bugs & Stability
The bug backlog is substantial, highlighting critical architectural bottlenecks in handling high-load agent operations:
1.  **Critical - Gateway Hangs & Resource Leaks:** Stuck processing sessions are detected but never automatically aborted, requiring manual gateway restarts ([Issue #71127](https://github.com/openclaw/openclaw/issues/71127)). Furthermore, duplicate stdio MCP children are being spawned, causing memory/CPU leaks ([Issue #75621](https://github.com/openclaw/openclaw/issues/75621)).
2.  **High - Channel Deliverability Regressions:** 
    *   **Discord:** The `READY` event never fires on `v2026.5.7`, rendering guild messages unreadable ([Issue #79794](https://github.com/openclaw/openclaw/issues/79794)).
    *   **Telegram:** Group session responses are incorrectly routing to the WebChat UI instead of the Telegram group ([Issue #77576](https://github.com/openclaw/openclaw/issues/77576), 👍 4).
    *   **Slack:** Verbose mode and streaming previews remain broken for specific tool configurations ([Issue #74358](https://github.com/openclaw/openclaw/issues/74358)).
3.  **Medium - Model Provider Logic:** Anthropic API calls fail because tool arrays are emptying during normalization ([Issue #74377](https://github.com/openclaw/openclaw/issues/74377)), and Xiaomi MiMo/DeepSeek V4 models fail on multi-turn tool calls due to missing `reasoning_content` passthrough ([Issue #81419](https://github.com/openclaw/openclaw/issues/81419), [Issue #82150](https://github.com/openclaw/openclaw/issues/82150)).
*Note: Fix PRs for several underlying session logic issues are currently in the review pipeline, such as idle no-active-work stuck session fixes ([PR #78032](https://github.com/openclaw/openclaw/pull/78032)).*

## 6. Feature Requests & Roadmap Signals
User feature requests heavily favor expanded channel support and better multi-agent orchestration tools:
*   **Signal Channel Support:** Users want live tool-call progress visibility on Signal, matching Telegram's capabilities ([Issue #77202](https://github.com/openclaw/openclaw/issues/77202)).
*   **Multi-tenant Bot Support:** A strong request to support multiple Azure/Teams bots on a single OpenClaw gateway ([Issue #71058](https://github.com/openclaw/openclaw/issues/71058)).
*   **API Tooling Visibility:** Requests for an opt-in flag on the `/v1/responses` endpoint to prevent dropping built-in tool calls, allowing for better offline eval scoring ([Issue #75074](https://github.com/openclaw/openclaw/issues/75074)).
*   **Roadmap Prediction:** The next version will likely focus heavily on async task orchestration. This is signaled by recent merged PRs adding CLI tool plan execution ([PR #82232](https://github.com/openclaw/openclaw/pull/82232)) and pending fixes for sub-agent announcement context injections ([Issue #74286](https://github.com/openclaw/openclaw/issues/74286)).

## 7. User Feedback Summary
**Pain Points:** The user base is currently frustrated by fragile upgrade paths. Installation and onboarding times have regressed significantly, with reports of setups taking over 2 hours to initialize on `v2026.4.29` ([Issue #76042](https://github.com/openclaw/openclaw/issues/76042)). Downgrading is also critically broken due to stale plugin state files ([Issue #75502](https://github.com/openclaw/openclaw/issues/75502)). Users operating via WSL2 or low-power Linux hosts are disproportionately affected by load spikes.
**Satisfaction:** Despite the severe regressions, users remain highly enthusiastic about the core product. Positive feedback surrounds the new Realtime Talk feature, which users praise for its low latency, though they request better mobile bridging and documentation ([Issue #76952](https://github.com/openclaw/openclaw/issues/76952)).

## 8. Backlog Watch
Several critical issues require immediate maintainer intervention and have been lingering for weeks:
*   **Persistent Session Locks:** The gateway's failure to self-heal stuck processing sessions ([Issue #71127](https://github.com/openclaw/openclaw/issues/71127)) has been open since April 24th and is causing widespread uptime issues.
*   **Codex Harness Routing Flaws:** The `agentRuntime.fallback="none"` bug is preventing proper migrations to the canonical Codex setup ([Issue #75739](https://github.com/openclaw/openclaw/issues/75739), 👍 3).
*   **Inconsistent Plugin Hook Execution:** Core lifecycle hooks (`message_sent`) are failing to fire for webchat and TUI outbound paths, breaking plugin architectures for a large subset of the user base ([Issue #70928](https://github.com/openclaw/openclaw/issues/70928)).

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison and ecosystem analysis based on the community digests from May 16, 2026.

### 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently characterized by rapid iteration, massive community engagement, and a clear transition from simple chatbots to complex, multi-modal "agentic" frameworks. Projects are heavily focused on omnichannel connectivity (Telegram, Discord, enterprise IMs), local LLM integration, and advanced tool execution. However, this high development velocity is introducing systemic growing pains, particularly concerning memory management in long-lived sessions, provider compatibility (e.g., DeepSeek V4, Xiaomi MiMo), and secure sandbox execution.

### 2. Activity Comparison
Projects are assessed based on today's digest data. **Health Score** evaluates the balance of active development, community engagement, and bug/stability management (Scale: Excellent, Good, Stable, Active/High-Churn).

| Project | Issues (Updated/Closed) | PRs (Updated/Closed) | Release Status (May 16) | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (90% open) | 500 (45 merged) | `v2026.5.14-beta.2` | Active/High-Churn |
| **NanoBot** | 53 closed | 17 merged | Nightly (`0.1.5.post3`) | Good |
| **Hermes Agent** | 50 updated | 50 processed (23 merged) | Staged for patch | Good |
| **PicoClaw** | High momentum | 22 merged | Nightly (`v0.2.8`) | Good |
| **NanoClaw** | 44 closed | 44 merged | **v2.0.63** (Released) | Excellent |
| **NullClaw** | 2 new (0 closed) | 0 merged | None | Stable/Passive |
| **IronClaw** | 17 active | 50 updated (26 merged) | `v0.28.2` (Recent) | Active/High-Churn |
| **LobsterAI** | 1 new | 36 updated (33 merged) | None | Good |
| **Moltis** | 4 closed | 6 merged | None | Excellent |
| **CoPaw** | 24 updated (11 closed) | 50 updated (34 merged) | Iterating (`v1.1.7`) | Good |
| **ZeroClaw** | 11 new | 50 updated (8 merged) | Targeting `v0.8.0` | Active/High-Churn |
| **TinyClaw / ZeptoClaw**| 0 | 0 | None | Dormant |

### 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw serves as the "core reference" implementation and boasts the largest raw volume of community engagement (500+ issues/PRs daily). It acts as a proving ground for advanced features like Realtime Talk and multi-agent bootstrapping.
*   **Technical Approach Differences:** Unlike lightweight alternatives (e.g., NanoClaw, NullClaw) that prioritize minimal attack surfaces or local-first execution, OpenClaw is aggressively pursuing a monolithic, highly extensible gateway architecture. However, this contrasts with IronClaw's Rust-based, WASM-oriented approach to security.
*   **Community Size Comparison:** While OpenClaw's community is massive, it is currently heavily burdened by its own scale. Projects like NanoClaw, CoPaw, and Hermes Agent have smaller but highly efficient communities that are closing bugs and merging PRs at a much healthier ratio than OpenClaw, which is accumulating a severe bug backlog.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging simultaneously across the ecosystem:
*   **DeepSeek V4 & Reasoning Content Passthrough:** Supporting advanced reasoning models without dropping `reasoning_content` during multi-turn tool calls is a universal struggle. (OpenClaw, PicoClaw, IronClaw, CoPaw).
*   **Agentic Memory & Session Persistence:** Preventing context drift, OOM crashes, and state leaks during long-lived autonomous sessions. (Hermes Agent, NanoClaw, OpenClaw, NanoBot).
*   **Sandbox Security & Command Execution:** Securing `exec` tools against path traversal and injection, with several projects implementing guardrails, TOTP gates, or WASM policies. (ZeroClaw, PicoClaw, IronClaw, CoPaw).
*   **Enterprise IM Integration:** Deep integration with complex enterprise platforms (DingTalk, Feishu/Lark, WeCom, Matrix E2EE) requiring nuanced channel-specific overrides. (NanoBot, CoPaw, LobsterAI, PicoClaw).
*   **Docker/Deployment Friction:** Container networking, OAuth token refreshing, and TLS SAN generation remain primary pain points for self-hosters across the board. (Hermes Agent, Moltis, NanoClaw).

### 5. Differentiation Analysis
*   **Architecture & Security:** **IronClaw** separates itself by using Rust, WASM (Wasmtime), and strict production readiness validators, targeting enterprise-grade isolation. **NanoClaw** and **NullClaw** offer minimal, highly auditable Node/Python cores for sovereign local execution.
*   **Target Users & Features:** **LobsterAI** and **CoPaw** are heavily focused on enterprise UI/UX, featuring advanced artifact previews (PPT/thumbnails) and deep integration with Asian enterprise chat platforms (DingTalk, POPO). **Moltis** is uniquely focused on the self-hoster experience, prioritizing easy remote access (Cloudflare tunnels, Proxmox scripts).
*   **Autonomous vs. Request/Response:** **ZeroClaw** and **NanoBot** are pushing heavily toward autonomous runtimes (Skill Improvers, background review forks), whereas projects like **PicoClaw** are focused on bridging straightforward, highly compatible multi-modal request/response interactions across diverse messaging apps.

### 6. Community Momentum & Maturity
*   **Rapid Iteration (High Velocity):** **OpenClaw**, **IronClaw**, and **ZeroClaw** are experiencing massive developmental surges. They are shipping features rapidly but carrying high technical debt and facing complex review backlogs.
*   **Stabilization & Maturation (High Health):** **NanoClaw**, **NanoBot**, **Hermes Agent**, and **CoPaw** represent the most mature tier right now. They are actively paying down technical debt (e.g., NanoClaw's architectural refactoring, Hermes' Windows CLI fixes) and maintaining tight feedback loops with their communities.
*   **Niche/Passive Momentum:** **Moltis** and **LobsterAI** show highly focused, efficient momentum (closing bugs with extreme prejudice), while **NullClaw** represents early-stage, user-driven feature requests without active core development.

### 7. Trend Signals
*   **The Shift to Multi-Agent Topologies:** The ecosystem is moving beyond single-agent execution. Signals include NanoClaw's "Agent Network," ZeroClaw's v0.8.0 Multi-Agent Runtime, and CoPaw's multi-agent identity routing. Developers must begin architecting for inter-agent communication and privilege isolation.
*   **"Decision Fatigue" and Dynamic Tool Loading:** As agents gain access to hundreds of MCP tools, performance degrades. Hermes Agent's community is highlighting "LLM decision fatigue," signaling a need for dynamic, per-turn tool whitelisting rather than bloated static system prompts.
*   **Value of Sovereign/Local Deployment:** Users are highly sensitive to provider lock-in (e.g., NanoClaw's community reacting to Anthropic subscription clauses). There is a clear trend toward providing first-class support for local models (Ollama, LM Studio) and privacy-preserving infrastructure (SearXNG integration in ZeroClaw).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-16

## 1. Today's Overview
NanoBot demonstrates exceptionally high activity and strong project health today, driven primarily by a massive, coordinated community contribution effort to improve documentation and code注释 (comments). With 53 issues closed and 17 PRs merged in the last 24 hours, the maintainers are actively reviewing and merging community submissions at a rapid pace. The open issues and PRs indicate that development is heavily focused on expanding provider gateways, hardening security (especially regarding media handling and secret management), and enhancing agentic capabilities like long-term planning and memory retention. 

## 2. Releases
No new official releases were recorded today. The project continues to iterate on its nightly/development branch (latest referenced version `0.1.5.post3.2026.05.13`).

## 3. Project Progress
Today saw 17 PRs merged/closed, advancing several key areas of the project:
*   **Agentic Capabilities:** Significant work on goal management and task decomposition. PR [#3788](https://github.com/HKUDS/nanobot/pull/3788) delivered end-to-end sustained goal state and WebUI alignment, while PR [#3791](https://github.com/HKUDS/nanobot/pull/3791) (open) introduces a new `plan` tool for multi-step task tracking.
*   **Performance & Caching:** PR [#3844](https://github.com/HKUDS/nanobot/pull/3844) optimized KV cache hit rates by appending runtime context after user content, and PR [#3793](https://github.com/HKUDS/nanobot/pull/3793) fixed prompt cache instability in the Codex provider.
*   **Security Hardening:** PR [#3842](https://github.com/HKUDS/nanobot/pull/3842) fixed a path-traversal vulnerability in local media attachments, and PR [#3789](https://github.com/HKUDS/nanobot/pull/3789) confined downloaded media filenames in Feishu to prevent filesystem writes.
*   **Infrastructure & Refactoring:** Gateway lifecycle hooks (`on_start/on_stop`) were completed for Feishu in PR [#3792](https://github.com/HKUDS/nanobot/pull/3792). PR [#3841](https://github.com/HKUDS/nanobot/pull/3841) removed the redundant `GlobTool` in favor of `GrepTool`.
*   **Massive Documentation & Comment Drive:** Contributor `xianqiangfu` successfully closed over 20 issues (e.g., [Issue #3822](https://github.com/HKUDS/nanobot/issues/3822) to [Issue #3839](https://github.com/HKUDS/nanobot/issues/3839)) dedicated to adding comprehensive Chinese code comments across core modules and generating Mermaid architecture diagrams, greatly improving the project's accessibility.

## 4. Community Hot Topics
*   **Configuration Format Debate ([Issue #3402](https://github.com/HKUDS/nanobot/issues/3402)):** An older, highly active issue proposing a migration from `JSON` to `TOML` for configuration files. With 9 comments and recent activity, it highlights user pain points with JSON's lack of comments and strict syntax, though it remains open, indicating maintainers are weighing the migration effort.
*   **WebUI Markdown Rendering Glitch ([Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)):** A recently opened bug with 9 comments reporting display corruption during WebUI sessions following the `5.13` update. This has clearly struck a nerve with users, though fixes for Markdown preloading were merged in PR [#3782](https://github.com/HKUDS/nanobot/pull/3782).
*   **Security & Secrets Management ([Issue #2172](https://github.com/HKUDS/nanobot/issues/2172)):** A heavily requested feature (good first issue) asking for vault/1Password integrations instead of plaintext secrets in `config.json`.

## 5. Bugs & Stability
*   **Critical: WebUI Rendering Error** ([Issue #3790](https://github.com/HKUDS/nanobot/issues/3790)) - Users experience garbled UI until refresh. Related fix PR: [#3782](https://github.com/HKUDS/nanobot/pull/3782) (merged).
*   **High: Codex Cache Missing** ([Issue #2440](https://github.com/HKUDS/nanobot/issues/2440)) - Per-turn prompt hashes were breaking conversational caching. Fixed in PR [#3793](https://github.com/HKUDS/nanobot/pull/3793) (merged).
*   **Medium: MiMo Provider Thinking Control** ([Issue #3845](https://github.com/HKUDS/nanobot/issues/3845)) - Routing MiMo via gateways disabled reasoning controls. Fix proposed in PR [#3851](https://github.com/HKUDS/nanobot/pull/3851) (open).
*   **Medium: Brave Search Rate Limits** ([Issue #2560](https://github.com/HKUDS/nanobot/issues/2560)) - Serial tool calls hit 429 errors. Fixed with retry logic in PR [#3840](https://github.com/HKUDS/nanobot/pull/3840) (merged).
*   **Medium: Feishu/Lark Event Handler Crash** ([Issue #3787](https://github.com/HKUDS/nanobot/issues/3787)) - Unregistered bot add/remove events cause errors on Feishu WebSocket connections.

## 6. Feature Requests & Roadmap Signals
*   **Gateway Lifecycle Notifications:** The completion of PR [#3373](https://github.com/HKUDS/nanobot/pull/3373) and PR [#3792](https://github.com/HKUDS/nanobot/pull/3792) shows a commitment to enterprise readiness, allowing sysadmins to monitor bot uptime.
*   **Agentic Planning:** The open PR [#3791](https://github.com/HKUDS/nanobot/pull/3791) for a `plan` tool signals a roadmap shift towards more autonomous, long-running agent architectures rather than simple request/response chatting.
*   **New Provider Gateways:** Open PR [#3785](https://github.com/HKUDS/nanobot/pull/3785) adds "OpenCode Go" gateway support, indicating an ongoing effort to aggregate access to diverse LLMs (GLM, Kimi, DeepSeek, etc.) under unified APIs.
*   **Skill Loading Persistence:** Open PR [#3847](https://github.com/HKUDS/nanobot/pull/3847) addresses context loss in multi-turn conversations by introducing a dedicated `skill_load` tool, highlighting an focus on long-term memory stability.

## 7. User Feedback Summary
Users are actively utilizing NanoBot in complex, multi-platform deployments (WebUI, Feishu/Lark, WhatsApp), leading to practical feedback around edge cases like Windows UNC paths (fixed today in PR [#3764](https://github.com/HKUDS/nanobot/pull/3764)) and WhatsApp voice transcription media clearing (fixed in PR [#3752](https://github.com/HKUDS/nanobot/pull/3752)). There is strong enthusiasm for community contributions, evidenced by the massive documentation and annotation drive. However, security-conscious users remain unsatisfied with plaintext credential storage, and the shift towards complex agentic workflows (long tasks, goal persistence) is exposing new UI rendering bugs.

## 8. Backlog Watch
*   **[Issue #2172](https://github.com/HKUDS/nanobot/issues/2172) [OPEN]:** *Secret reference support.* This security enhancement is highly requested but lacks a linked PR. It needs maintainer architectural guidance on how to integrate external secret managers.
*   **[PR #3785](https://github.com/HKUDS/nanobot/pull/3785) [OPEN]:** *OpenCode Go gateway.* Open for a couple of days; awaiting maintainer review for merging a new major API compatibility layer.
*   **[PR #3847](https://github.com/HKUDS/nanobot/pull/3847) [OPEN]:** *Skill Load tool.* Addresses critical multi-turn context loss but needs careful review to ensure it doesn't bloat the system prompt size.
*   **[Issue #3787](https://github.com/HKUDS/nanobot/issues/3787) [OPEN]:** *Feishu unregistered event handler.* Needs a straightforward fix to handle `im.chat.member.bot.deleted_v1` events gracefully without crashing the WebSocket connection.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-16

## 1. Today's Overview
Hermes Agent experienced a highly active development day, with 50 issues updated and 50 pull requests processed within the last 24 hours. The project is currently in a heavy bug-fixing and refinement phase, as evidenced by the closure of 23 PRs and a high volume of newly reported edge cases. Maintainers and community contributors are highly engaged, rapidly addressing stability issues across gateways (Telegram, Matrix), providers (OpenAI, xAI, Ollama), and deployments (Docker, Windows). While no new official version was released today, the rapid merging of fixes suggests a patch release is likely imminent. Overall, project health appears robust, characterized by a tight feedback loop between heavy production users and active developers.

## 2. Releases
*No new releases were published today.* However, given the closure of 23 PRs—many addressing critical CLI, delegate tool, and provider routing bugs—these changes are actively being staged for the next patch release.

## 3. Project Progress
Today saw significant progress in squashing bugs and merging community contributions. 
* **Delegate & Memory Tool Fixes:** A critical orphaned thread bug in the `delegate_task` tool was resolved by merging and salvaging PRs [#26621](https://github.com/NousResearch/hermes-agent/pull/26621) and [#26435](https://github.com/NousResearch/hermes-agent/pull/26435). Additionally, state mutation crashes in the memory tool were fixed via [PR #26613](https://github.com/NousResearch/hermes-agent/pull/26613).
* **Windows & CLI Stability:** Significant progress was made on Windows compatibility. Runtime warnings were fixed ([PR #26617](https://github.com/NousResearch/hermes-agent/pull/26617)), CWD-spam was eliminated ([PR #26618](https://github.com/NousResearch/hermes-agent/pull/26618)), and a new PowerShell bootstrap script was introduced ([PR #26620](https://github.com/NousResearch/hermes-agent/pull/26620)).
* **Provider & Routing:** A bug breaking vendor-prefixed model slugs (e.g., `google/gemini-3.1-flash-lite`) for custom aggregators was fixed in [PR #26594](https://github.com/NousResearch/hermes-agent/pull/26594).
* **Documentation & CI:** Strict CI checks were added to prevent branch-history corruption ([PR #26611](https://github.com/NousResearch/hermes-agent/pull/26611)), and MCP tool scope documentation was aligned with actual code capabilities ([PR #26603](https://github.com/NousResearch/hermes-agent/pull/26603)).

## 4. Community Hot Topics
The most actively discussed issues revolve around UI, gateway stability, and agentic memory:
* **Dashboard UI Readability ([Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080), 11 comments, 👍 17):** Users are heavily upvoting requests to overhaul TUI themes. The current serif fonts and low contrast are causing eye strain, signaling a strong demand for a visual refresh.
* **Docker Gateway Crash ([Issue #25495](https://github.com/NousResearch/hermes-agent/issues/25495), 7 comments):** The official Docker image is completely broken for Matrix/Synapse setups, hanging indefinitely at "fixing ownership". This is a deployment blocker for self-hosters.
* **Permanent Gateway Dropouts ([Issue #17063](https://github.com/NousResearch/hermes-agent/issues/17063), 3 comments):** Telegram users are frustrated by a reconnect watcher that permanently kills the bot after 20 retries, forcing manual restarts during transient network outages.
* **Production Memory/UX Issues ([Issue #5563](https://github.com/NousResearch/hermes-agent/issues/5563), 3 comments, 👍 1):** A heavily detailed field report from a production user highlighting token waste, `state.db` corruption, and context hallucinations in long-lived sessions is driving architectural discussions.

## 5. Bugs & Stability
Several high-severity bugs were reported today, with maintainers quickly addressing some via PRs:
* **P1 - Codex Backend HTTP 400 ([Issue #26599](https://github.com/NousResearch/hermes-agent/issues/26599)):** OpenAI's Codex backend suddenly started rejecting Hermes' `extra_headers` payload, breaking `gpt-5.5` routing. *(No fix PR yet, actively breaking primary workflows).*
* **P1 - Agentic Security/Skill Modification ([Issue #25839](https://github.com/NousResearch/hermes-agent/issues/25839)):** Parallel agent instances are tricking each other into modifying skills because background tasks inject prompts disguised as `role: "user"`.
* **P1 - Telegram Session Compression Loop ([Issue #20470](https://github.com/NousResearch/hermes-agent/issues/20470)):** Session splitting during context compression causes the Telegram gateway to lose DM topic bindings, triggering an infinite preflight loop.
* **P1 - Gateway Identity Bug ([Issue #26596](https://github.com/NousResearch/hermes-agent/issues/26596)):** Gateway mode currently ignores `SOUL.md` and custom personalities, always falling back to the hardcoded default identity. 
* **P2 - Custom Provider/Vision Misroute ([Issue #12638](https://github.com/NousResearch/hermes-agent/issues/12638)):** Vision tasks drop named custom providers and route to the default endpoint. *(Addressed partially by today's [PR #26594](https://github.com/NousResearch/hermes-agent/pull/26594)).*

## 6. Feature Requests & Roadmap Signals
* **Tool Whitelisting to Reduce Fatigue ([Issue #26524](https://github.com/NousResearch/hermes-agent/issues/26524)):** An RFC proposing per-turn tool filtering via `pre_llm_call` hooks. This indicates users are running into LLM "decision fatigue" when Hermes is loaded with too many skills, suggesting a shift toward more dynamic tool loading in future versions.
* **Headless xAI OAuth Support ([Issue #26563](https://github.com/NousResearch/hermes-agent/issues/26563), [Issue #26588](https://github.com/NousResearch/hermes-agent/issues/26588)):** With the release of SuperGrok, users need a way to complete OAuth flows on headless servers. 
* **Immutable/Protected Skills ([Issue #25083](https://github.com/NousResearch/hermes-agent/issues/25083)):** Users want a way to lock critical governance/safety skills to prevent the AI from modifying them autonomously.
* **Per-Job Timezone Support ([Issue #26549](https://github.com/NousResearch/hermes-agent/issues/26549), [PR #26614](https://github.com/NousResearch/hermes-agent/pull/26614)):** Heavy demand for localized cron scheduling is being actively addressed in the dashboard UI.

## 7. User Feedback Summary
Real-world users love the agent's core architecture but are feeling growing pains typical of a rapidly scaling CLI tool. Production users praise the delegate/subagent system but express deep frustration with **context drift** and **memory state leaks** over multi-day sessions (especially over Telegram/Discord). **Docker deployments** are a major pain point; users feel the documentation is lackluster ([Issue #12188](https://github.com/NousResearch/hermes-agent/issues/12188)) and permission handling in unraid/container environments is fragile ([Issue #23402](https://github.com/NousResearch/hermes-agent/issues/23402)). Furthermore, Windows users have been enduring silent failures and log spam, making the OS-specific fixes merged today highly anticipated.

## 8. Backlog Watch
* **Platform Compatibility:** [Issue #12188](https://github.com/NousResearch/hermes-agent/issues/12188) (Docker Compose env variable support) remains open and lacks a definitive maintainer response, despite being a major hurdle for self-hosters.
* **Long-term Session Stability:** [Issue #9628](https://github.com/NousResearch/hermes-agent/issues/9628) (Temporal drift in long-lived sessions) has been open since mid-April. As agents run continuously over weeks, the system prompt date desync is becoming a critical barrier to reliable autonomous scheduling.
* **Network Resiliency:** [Issue #17063](https://github.com/NousResearch/hermes-agent/issues/17063) (Telegram reconnect watcher permanently stopping) needs an architectural patch to introduce exponential backoffs instead of hard limits.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw for 2026-05-16.

# PicoClaw Project Digest (2026-05-16)

## 1. Today's Overview
PicoClaw shows **very high development momentum** today, driven largely by prolific contributor `bogdanovich` and core maintainer merges. The project is actively polishing its **v0.2.8 release** via nightly builds, with a clear focus on hardening multi-modal capabilities (voice/images) and fixing channel-specific edge cases (Telegram topics, Matrix routing, Feishu notifications). A significant theme today is **security and agentic safety**, with multiple PRs addressing `exec` tool sandbox escapes and command injection. Overall project health appears robust, with community bugs being rapidly paired with corresponding fix PRs.

## 2. Releases
*   **nightly: v0.2.8-nightly.20260515.794eb04f**
    *   *Note:* This is an automated nightly build leading up to the stable v0.2.8 release. Users should expect rapid iteration. No explicit breaking changes were tagged in today's automated log, but transition guides are being actively updated (see PR #2766).

## 3. Project Progress
A massive **22 PRs were merged/closed** in the last 24 hours, indicating active merging by maintainers. Key advancements include:
*   **MCP & Provider Support:** Merged PR [#2811](https://github.com/sipeed/picoclaw/pull/2811) introduced major improvements to MCP transport configuration and a generalized Docker-backed integration test framework. PR [#2741](https://github.com/sipeed/picoclaw/pull/2741) and [#2862](https://github.com/sipeed/picoclaw/pull/2862) fixed OpenAI-compatible streaming for reasoning models (DeepSeek v4 and Xiaomi MiMo).
*   **Multi-modal & Web:** PR [#2874](https://github.com/sipeed/picoclaw/pull/2874) fixed a critical drop in image media forwarding across pico attachments.
*   **Configuration Sync:** PR [#2766](https://github.com/sipeed/picoclaw/pull/2766) successfully merged a massive 26-file update to align all documentation to the new V3 config format (`api_keys` array, `channel_list`, etc.).
*   **Core Stability:** PR [#2270](https://github.com/sipeed/picoclaw/pull/2270) fixed a Go reflection panic when iterating over `SecureString` map values.

## 4. Community Hot Topics
*   **DeepSeek v4 Thinking Mode ([#2706](https://github.com/sipeed/picoclaw/issues/2706)):** Closed today after generating significant buzz. The community highly desires native support for DeepSeek's `reasoning_content` (which required API history replay). This sparked the merged fixes in PRs [#2741](https://github.com/sipeed/picoclaw/pull/2741) and [#2862](https://github.com/sipeed/picoclaw/pull/2862).
*   **LM Studio Easy Connect ([#28](https://github.com/sipeed/picoclaw/issues/28)):** A long-running, highly upvoted request for a UI/UX-friendly way to connect PicoClaw to local LM Studio instances, specifically for Android/Termux setups.
*   **`exec` Tool Sandbox Regex Breaking Commands ([#1042](https://github.com/sipeed/picoclaw/issues/1042)):** Users are frustrated by the overly aggressive regex in the `exec` tool's `guardCommand` which blocks safe commands like `curl` assuming they are malicious relative paths.

## 5. Bugs & Stability
Ranked by severity:
1.  **Voice Transcription Failure ([#2817](https://github.com/sipeed/picoclaw/issues/2817)):** *High.* Voice transcription (e.g., Groq Whisper) succeeds, but the text isn't passed to the LLM. The model receives `[voice]` instead, breaking voice-first use cases.
2.  **Matrix Channel Completely Broken Routing ([#2815](https://github.com/sipeed/picoclaw/issues/2815)):** *High.* The `allow_from` filter blocks all messages unless set to `[]`. Sender identity is also missing ([#2816](https://github.com/sipeed/picoclaw/issues/2816)). *Fix exists:* PR [#2827](https://github.com/sipeed/picoclaw/pull/2827).
3.  **Exec Tool Path Misclassification ([#1042](https://github.com/sipeed/picoclaw/issues/1042)):** *Medium.* Safe `curl` commands blocked by the safety guard. *Fix exists:* PR [#2814](https://github.com/sipeed/picoclaw/pull/2814).
4.  **Android Data Access ([#2744](https://github.com/sipeed/picoclaw/issues/2744)):** *Medium.* Android v0.2.8 cannot access data from tabs. Currently active, pending definitive fix.
5.  **Feishu Notification Animation ([#2785](https://github.com/sipeed/picoclaw/issues/2785)):** *Low.* `ToolFeedbackAnimator` only shows the first tool call message. *Fix exists:* PR [#2822](https://github.com/sipeed/picoclaw/pull/2822).

## 6. Feature Requests & Roadmap Signals
*   **Non-destructive Session Resets ([#2820](https://github.com/sipeed/picoclaw/issues/2820)):** A request to stop `/clear` from deleting SQLite-backed conversation history. Maintainer `bogdanovich` is already highly active here, signaling this may enter the next release.
*   **Advanced Security Scanning:** PR [#2877](https://github.com/sipeed/picoclaw/pull/2877) proposes integrating [Tirith](https://github.com/sheeki03/tirith) for pre-execution command scanning. This aligns with the project's current heavy focus on agentic guardrails.
*   **Real Connectivity Verification:** PR [#2833](https://github.com/sipeed/picoclaw/pull/2833) is part of an ongoing effort to introduce "Test Connection" features for providers in the Web UI.

## 7. User Feedback Summary
**Pain Points:** Users deploying PicoClaw on mobile (Android/Termux) feel left behind due to bugs ([#2744](https://github.com/sipeed/picoclaw/issues/2744)) and complex local network setups for tools like LM Studio ([#28](https://github.com/sipeed/picoclaw/issues/28)). There is also friction with the V2 to V3 config migration, though documentation is actively catching up.
**Satisfaction:** The community is highly engaged and submitting deep, technical bug reports. The project is clearly valued for its ability to bridge messaging platforms (Telegram, Matrix, WeChat, Feishu) with complex, tool-using LLMs, especially local or open-source reasoning models like DeepSeek.

## 8. Backlog Watch
The following strategic issues have the `stale` label but require core maintainer code-review, as they represent fundamental flaws in channel routing and tool execution:
*   **Matrix Routing Fixes:** PRs [#2827](https://github.com/sipeed/picoclaw/pull/2827) and issues [#2815](https://github.com/sipeed/picoclaw/issues/2815) / [#2816](https://github.com/sipeed/picoclaw/issues/2816) are completely blocking Matrix users who need secure channel routing.
*   **Telegram Context Preservation:** A massive cluster of high-quality PRs by `bogdanovich` ([#2756](https://github.com/sipeed/picoclaw/pull/2756), [#2791](https://github.com/sipeed/picoclaw/pull/2791), [#2794](https://github.com/sipeed/picoclaw/pull/2794), [#2789](https://github.com/sipeed/picoclaw/pull/2789)) related to Telegram topics and async follow-ups are stalled and need final maintainer merge approval to stabilize Telegram integrations.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-16

## 1. Today's Overview
NanoClaw experienced an exceptionally high-velocity day of development, closing 44 issues and merging 44 pull requests out of 50 total processing events across both categories. This massive batch closure coincides directly with the project's first properly published release, **v2.0.63**, which establishes a new formal release cadence. The project is currently in a maturation phase, transitioning from rapid feature iteration to stabilizing its core architecture, paying down technical debt, and formalizing operational processes. Six open PRs and issues remain active, indicating ongoing work in observability, multi-agent networking, and provider flexibility. Overall, project health is highly active, with strong maintainer engagement to clear the backlog and establish a stable baseline.

## 2. Releases
**[v2.0.63](https://github.com/qwibitai/nanoclaw/releases/tag/v2.0.63)**
*   **Changes:** This is the first officially published release with corresponding GitHub Release artifacts. It encompasses all package.json version bumps and features that have landed on the `main` branch up to this point.
*   **Release Strategy Shift:** Releases are now cut manually by maintainers for every version bump landing on `main`. Historically, version bumps were sporadic and lacked tags.
*   **Migration Notes:** No breaking code changes were explicitly called out in the release body itself, but the version bump implies inclusion of numerous under-the-hood fixes and architectural refactors (such as per-install service slugs) detailed in the accompanying [PR #2502](https://github.com/nanocoai/nanoclaw/pull/2502).

## 3. Project Progress
Today's progress represents a massive consolidation effort, evidenced by 44 merged PRs. 
*   **Architecture & Refactoring:** Maintainers merged significant refactorings to break down monolithic core files. Key PRs include extracting `output-parser` ([PR #523](https://github.com/nanocoai/nanoclaw/pull/523)), `snapshot-writer` ([PR #524](https://github.com/nanocoai/nanoclaw/pull/524)), and splitting the 670-line `db.ts` into domain modules ([PR #525](https://github.com/nanocoai/nanoclaw/pull/525)).
*   **Stability Fixes:** Critical session and messaging reliability fixes landed, such as preventing duplicate messages ([PR #530](https://github.com/nanocoai/nanoclaw/pull/530)) and fixing silent message loss/drops ([PR #532](https://github.com/nanocoai/nanoclaw/pull/532), [PR #967](https://github.com/nanocoai/nanoclaw/pull/967)).
*   **Operational Tooling:** Fixed per-install service naming to prevent daemon conflicts ([PR #2493](https://github.com/nanocoai/nanoclaw/pull/2493)) and added LiteLLM provider support ([PR #2490](https://github.com/nanocoai/nanoclaw/pull/2490)).
*   **Documentation:** Added CHANGELOG and formal RELEASE.md guidelines ([PR #2502](https://github.com/nanocoai/nanoclaw/pull/2502)).

## 4. Community Hot Topics
The community remains highly engaged in architectural philosophy, provider flexibility, and security.
*   **Provider Agnosticism vs. Claude Dependency:** The most discussed item is [Issue #80 (👍 60)](https://github.com/nanocoai/nanoclaw/issues/80). With Anthropic reportedly shutting down subscriptions for users utilizing competing tools, the community is heavily debating the need to support OpenCode, Gemini, and OpenAI models natively.
*   **Skill Architecture Security:** [Issue #384 (👍 16)](https://github.com/nanocoai/nanoclaw/issues/384) discusses building a "Skill Marketplace." This ties directly into the community's appreciation for NanoClaw's tiny, auditable core (in contrast to OpenClaw's massive attack surface).
*   **Ease of Installation:** Users are expressing a desire for simpler onboarding. [Issue #439 (👍 9)](https://github.com/nanocoai/nanoclaw/issues/439) highlights frustration with Claude-driven setup, suggesting traditional shell scripts would be faster and cheaper.

## 5. Bugs & Stability
Several critical stability and security bugs were addressed in today's batch, though a few active ones remain open.
*   **Critical (Fixed):** An OOM crash caused by ghost sockets accumulating on reconnect ([Issue #595](https://github.com/nanocoai/nanoclaw/issues/595))—which silently killed the bot after ~40 hours—was closed.
*   **High (Fixed):** Insecure file permissions for WhatsApp auth tokens ([Issue #635](https://github.com/nanocoai/nanoclaw/issues/635)) and a bug where ExitPlanMode trapped the agent ([Issue #356](https://github.com/nanocoai/nanoclaw/issues/356)).
*   **High (Open):** OAuth tokens expiring overnight in background containers ([Issue #730](https://github.com/nanocoai/nanoclaw/issues/730)) remains a pain point, though an active PR aims to mitigate this via host-side silent-fail detection ([PR #2498](https://github.com/nanocoai/nanoclaw/pull/2498)).
*   **Medium (Open):** [PR #2496](https://github.com/nanocoai/nanoclaw/pull/2496) identifies that command-gate deny responses are currently failing silently due to a read-only DB lock in `writeOutboundDirect`.

## 6. Feature Requests & Roadmap Signals
Based on recent issue velocity and maintainer involvement, the next iteration will likely focus on multi-agent orchestration and observability.
*   **Multi-Agent Networking:** [PR #2497](https://github.com/nanocoai/nanoclaw/pull/2497) introduces an "Agent Network" feature, signaling a shift toward interconnected agent topologies rather than isolated single agents.
*   **Proactive Context Management:** [PR #2500](https://github.com/nanocoai/nanoclaw/pull/2500) introduces an "early compact nudge" to inject system reminders when context limits approach ceilings, showing a focus on long-term session stability.
*   **Voice & Sovereignty:** [Issue #2396](https://github.com/nanocoai/nanoclaw/issues/2396) requests Groq Whisper as an opt-in cloud backend, reinforcing the project's "sovereign by default, cloud as fallback" design philosophy.

## 7. User Feedback Summary
Users love the minimal, secure architecture but feel the friction of early-stage operational quirks. 
*   **Pain Points:** Docker/container networking on Linux is still a major hurdle for self-hosters, specifically around systemd user sessions ([Issue #413](https://github.com/nanocoai/nanoclaw/issues/413)) and stale Docker group detection ([Issue #414](https://github.com/nanocoai/nanoclaw/issues/414)). Users are also confused about how NanoClaw fundamentally differs from native Claude Code ([Issue #664](https://github.com/nanocoai/nanoclaw/issues/664)).
*   **Use Cases:** Community members are heavily utilizing NanoClaw for always-on WhatsApp and Discord integrations, relying on it for scheduled tasks and continuous conversational state, which highlights the importance of the recent IPC and memory leak fixes.

## 8. Backlog Watch
*   **OAuth Token Refresh ([Issue #730](https://github.com/nanocoai/nanoclaw/issues/730)):** Needs a core architectural solution for background daemons to refresh tokens without manual intervention. The proposed health monitor ([PR #2498](https://github.com/nanocoai/nanoclaw/pull/2498)) is a band-aid; a true token refresh flow is needed.
*   **Web Tool Attenuation ([Issue #398](https://github.com/nanocoai/nanoclaw/issues/398)):** The request to allow/deny `WebFetch` and `WebSearch` per agent is crucial for the project's stated security goals but hasn't seen recent activity.
*   **Agent Source Syncing ([Issue #611](https://github.com/nanocoai/nanoclaw/issues/611)):** The bug where container runner source copies are never updated after initial creation will cause drift issues for long-running installations and needs maintainer prioritization.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-16

## 1. Today's Overview
NullClaw experienced a low-activity day on 2026-05-16, with zero pull requests merged and zero issues closed. However, the community generated two new open issues in the preceding 24-hour period, indicating continued end-user engagement and adoption. No new software releases were published today. Overall, the project’s health appears stable but passive, relying on maintainers to triage the newly submitted bug report and feature request to resume development momentum.

## 2. Releases
No new releases were recorded today. There are no breaking changes, new features, or migration notes to report.

## 3. Project Progress
There was no quantifiable project progress today, as zero pull requests were proposed, merged, or closed. The repository's codebase remains unchanged over the last 24 hours. Maintainer focus in the near term will likely shift to reviewing the newly submitted issues to determine if code-level fixes or enhancements are required.

## 4. Community Hot Topics
While neither issue has garnered comments or reactions yet, both represent highly relevant use cases for localized AI assistants:
*   **Telegram Contextual Awareness ([Issue #916](https://github.com/nullclaw/nullclaw/issues/916)):** A request to improve the Telegram bot's conversational memory by utilizing the Telegram Bot API's `reply_to_message` field. Currently, the bot uses this field strictly for interaction logic (checking `isReplyToBotMessage()`), but users need it to actually ingest the quoted text so the LLM understands the context of the reply.
*   **External Tooling Integration ([Issue #915](https://github.com/nullclaw/nullclaw/issues/915)):** A discussion surrounding the pairing of NullClaw with local AI hardware (Ollama / RTX 3090). Users are actively trying to run powerful local models (like Qwen 3.6:27b) and rely heavily on NullClaw's tool-calling capabilities to augment them.

## 5. Bugs & Stability
One distinct bug was reported today affecting core functionality for self-hosted users:
*   **[High Severity] Scheduler Authorization Failure ([Issue #915](https://github.com/nullclaw/nullclaw/issues/915)):** A user running NullClaw on Ubuntu reported that the internal task scheduler fails with an unauthorized error. This prevents automated tool execution across both Telegram and CLI interfaces. The user notes that standard LLM generation and general tool calling work perfectly, suggesting the bug is isolated to the scheduler's authentication/authorization middleware. No fix PRs are currently available.

## 6. Feature Requests & Roadmap Signals
*   **Inbound Context Enrichment ([Issue #916](https://github.com/nullclaw/nullclaw/issues/916)):** Requested by user `weissfl`, this feature asks the Telegram integration to extract and pass the text of a replied-to message to the LLM. Implementing this would drastically reduce hallucinations in fast-paced group chats. This represents a strong, low-effort, high-impact candidate for an upcoming patch or minor version release.

## 7. User Feedback Summary
User feedback today highlights a friction point for self-hosters integrating NullClaw into local networks. While users are successfully leveraging NullClaw as a frontend for heavy-duty local models via Ollama (specifically noting that standard tool calling "works mostly fine"), they are encountering roadblocks with automated/scheduled tasks. Furthermore, the feature request highlights a user desire for the assistant to function more like a native chat participant, specifically requiring deeper contextual awareness of message threads in messaging apps like Telegram.

## 8. Backlog Watch
Because both issues ([#915](https://github.com/nullclaw/nullclaw/issues/915) and [#916](https://github.com/nullclaw/nullclaw/issues/916)) were created recently, they currently require maintainer triage. 
*   Maintainers should address **#915** as a priority since it completely breaks the scheduling feature for the affected user's deployment environment. 
*   Clarification may be required on **#916** to see if the broader community has workaround implementations or if this needs direct integration into the Telegram adapter.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-16

## 1. Today's Overview
IronClaw is currently exhibiting exceptionally high development velocity, heavily focused on a massive architectural shift known as "Reborn" to enable a new WebUI product surface. With 50 pull requests updated and 26 successfully merged in the last 24 hours, the core team is aggressively wiring new production-ready agent loops, storage backends, and policy gates. The issue tracker shows 17 active items, dominated by planned feature scoping for the WebUI Beta and critical wiring for production readiness. Project health is robust but in a high-churn, transitional state as developers race to connect complex planned-runtime components.

## 2. Releases
A new patch version was released recently:
*   **[ironclaw-v0.28.2](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.2)** (Released 2026-05-14)
    *   **Fixed:** Restored chat-driven `tool_install`, resolved a double-invoke bug, and fixed an auto-approve security footgun in extensions ([PR #3559](https://github.com/nearai/ironclaw/pull/3559)).
    *   **Changed:** Abstracted provider-specific auth, model fetching, and embeddings configuration behind new facades in the LLM crate ([PR #3416](https://github.com/nearai/ironclaw/pull/3416)).

## 3. Project Progress
Merged PRs over the last 24 hours highlight deep foundational work for the "Reborn" runtime and UX improvements:
*   **Reborn Architecture Integration:** The core team successfully merged the parent integration branch for workstreams 9-15 ([PR #3650](https://github.com/nearai/ironclaw/pull/3650)), merging crucial checkpoint, input, progress, and identity-context support. Additionally, the default planned driver registration was merged ([PR #3651](https://github.com/nearai/ironclaw/pull/3651)).
*   **Host Cancellation:** Advanced loop cancellation mechanics were merged, allowing hosts to verify cancellation from turn state safely ([PR #3648](https://github.com/nearai/ironclaw/pull/3648), [PR #3684](https://github.com/nearai/ironclaw/pull/3684), [PR #3686](https://github.com/nearai/ironclaw/pull/3686)).
*   **Unified Storage Fabric:** A major architectural refactor introducing a unified `RootFilesystem` trait and SQL backends was merged ([PR #3659](https://github.com/nearai/ironclaw/pull/3659)), significantly cleaning up previous repository sprawl.
*   **Engine & UX Features:** Merged a feature flag (`IRONCLAW_DISABLE_CODEACT`) to allow disabling v2 CodeAct for structured-tools-only mode ([PR #3665](https://github.com/nearai/ironclaw/pull/3665)), and added Ctrl-S log downloading capabilities for the TUI ([PR #3658](https://github.com/nearai/ironclaw/pull/3658)).

## 4. Community Hot Topics
The community and core contributors are deeply engaged in mapping out the WebUI Reborn ports and security boundaries.
*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259) (4 Comments):** The most active user-driven issue. Downstream consumers are pinned to version `0.24.0` on `crates.io` due to Wasmtime 28.x CVEs, despite newer GitHub releases. Users are urgently awaiting the publication of versions 0.25.0–0.27.0.
*   **[Issue #3616](https://github.com/nearai/ironclaw/issues/3616) (2 Comments):** High-level discussion on wiring the production app/gateway ingress to the Reborn live workflow, moving it out of a test-only state.
*   **[PR #3651](https://github.com/nearai/ironclaw/pull/3651) & [PR #3652](https://github.com/nearai/ironclaw/pull/3652):** High activity among core contributors finalizing the planned driver registration and live runtime composition.

## 5. Bugs & Stability
Several bugs and security risks were reported, with the most critical already seeing active PR fixes:
*   **[HIGH] [Issue #3602](https://github.com/nearai/ironclaw/issues/3602):** Production deploys currently run regardless of whether a production readiness validator passes, risking non-durable/unverified states. (Maintainer note: Production readiness cutover is intentionally deferred, but gating is tracked here).
*   **[MEDIUM] [Issue #3673](https://github.com/nearai/ironclaw/issues/3673):** The `openai_compatible` provider is dropping `reasoning_content` on outgoing requests, breaking DeepSeek v4-pro multi-turn tool calls. 
*   **[MEDIUM] [Issue #3689](https://github.com/nearai/ironclaw/issues/3689) & [Issue #3690](https://github.com/nearai/ironclaw/issues/3690):** Extension hooks are exposing too much internal runtime data and risk causing a mutual-recursion crash/fan-out if a misbehaving hook repeatedly triggers `HookFailed` events. Fix has been proposed in [PR #3640](https://github.com/nearai/ironclaw/pull/3640).
*   **[LOW] [Issue #3675](https://github.com/nearai/ironclaw/issues/3675):** TUI fails to render Markdown tables correctly (outputs plain text).
*   **[AUTOMATION] [Issue #3447](https://github.com/nearai/ironclaw/issues/3447):** Nightly E2E tests failed on commit `faf2ed4`.

## 6. Feature Requests & Roadmap Signals
The immediate roadmap is heavily signaling the launch of the **Reborn WebUI Beta**, with massive preparation happening today:
*   **WebUI Native Routes & Idempotency:** Strong focus on implementing native WebChat v2 routes ([Issue #3611](https://github.com/nearai/ironclaw/issues/3611)) and ensuring idempotency to prevent duplicate browser submissions ([Issue #3625](https://github.com/nearai/ironclaw/issues/3625), [PR #3694](https://github.com/nearai/ironclaw/pull/3694)).
*   **Personal Identity Context:** Upcoming support for policy-gated personal identity and heartbeat prompt context within the agent loop ([Issue #3692](https://github.com/nearai/ironclaw/issues/3692)).
*   **First-Party HTTP Tool:** Introduction of a built-in HTTP egress tool (`builtin.http`) allowing tools to make external web requests safely ([PR #3681](https://github.com/nearai/ironclaw/pull/3681)).
*   **Per-Channel Tool Routing:** An ongoing, massive effort ([PR #1378](https://github.com/nearai/ironclaw/pull/1378)) to allow MCP servers and built-in tools to be filtered based on the incoming channel (e.g., Slack vs. Web).

## 7. User Feedback Summary
Users are actively testing the project against complex, multi-turn setups and third-party models. The immediate pain point for downstream Rust consumers is the lag in `crates.io` publishing, which forces them into outdated or vulnerable dependency trees. From a usability standpoint, users utilizing the TUI are experiencing friction with unrendered Markdown tables, and those pushing the boundaries of third-party LLM integration (like DeepSeek v4-pro via OpenAI-compatible endpoints) are hitting protocol limitations where extended reasoning states are dropped.

## 8. Backlog Watch
*   **[Issue #3259](https://github.com/nearai/ironclaw/issues/3259):** Needs immediate maintainer attention to publish updated versions to `crates.io`. The lack of an updated package is actively blocking downstream consumers due to underlying CVEs.
*   **[PR #1378](https://github.com/nearai/ironclaw/pull/1378):** This XL-sized PR introducing per-channel MCP routing was opened in March and remains open. Given the rapid merging of other XL Reborn PRs, this needs a final review push to prevent it from falling behind the new `RootFilesystem` architecture.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-16

## 1. Today's Overview
LobsterAI demonstrated a massive surge in development activity over the past 24 hours, with an influx of 36 updated Pull Requests—33 of which were merged or closed—indicating a highly active and focused engineering effort. In contrast, community issue engagement was minimal, with only one new bug report opened. The majority of the merged PRs were historically stale community contributions that were finally reviewed and integrated, alongside recent internal feature developments focusing heavily on UI/UX refinements (specifically multi-tab previews) and IM platform integrations. The project is currently in a state of robust feature consolidation and housekeeping, prioritizing stability, performance, and security.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
The project saw a highly productive day with 33 PRs merged/closed. Key advancements include:

*   **UI & Artifacts Overhaul (PR [#1990](https://github.com/netease-youdao/LobsterAI/pull/1990), [#1989](https://github.com/netease-youdao/LobsterAI/pull/1989)):** Major improvements to the right-side preview panel, introducing multi-tab support and a thumbnail sidebar for widescreen PPT previews. 
*   **IM Bot Integrations (PR [#1987](https://github.com/netease-youdao/LobsterAI/pull/1987), [#838](https://github.com/netease-youdao/LobsterAI/pull/838)):** Added missing pairing code input fields for Telegram/Discord/QQ/POPO, and introduced per-channel model overrides, allowing specific IM platforms to use dedicated AI models.
*   **Session Synchronization & Performance (PR [#1986](https://github.com/netease-youdao/LobsterAI/pull/1986), [#806](https://github.com/netease-youdao/LobsterAI/pull/806), [#830](https://github.com/netease-youdao/LobsterAI/pull/830), [#1186](https://github.com/netease-youdao/LobsterAI/pull/1186)):** Fixed a managed session text duplication bug, added SQLite indexes to fix long对话 (long conversation) load times, optimized SQLite database parameters, and eliminated full-list re-rendering during streaming AI responses.
*   **Security & Core Stability (PR [#826](https://github.com/netease-youdao/LobsterAI/pull/826), [#828](https://github.com/netease-youdao/LobsterAI/pull/828), [#822](https://github.com/netease-youdao/LobsterAI/pull/822), [#1962](https://github.com/netease-youdao/LobsterAI/pull/1962)):** Fixed critical path traversal vulnerabilities in `localfile://`, unified token refresh locks to eliminate race conditions, and added URL protocol validation. The `nsp-clawguard` security monitor was also integrated.
*   **Skills Management (PR [#827](https://github.com/netease-youdao/LobsterAI/pull/827), [#836](https://github.com/netease-youdao/LobsterAI/pull/836), [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185)):** Prevented duplicate skill installations via content fingerprinting and added an "Open Folder" button for custom skills.
*   **Installer Fix (PR [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190)):** Ensured the Windows uninstaller properly terminates the app before removing files.

## 4. Community Hot Topics
The community activity was relatively quiet today, with only one new issue:
*   **Model Routing Error (Issue [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988)):** A user reported that after updating, attempting to use `qwen3.6-plus` via the Alibaba Cloud Bailian coding plan forcefully routes the request to a built-in NetEase model and throws a quota error. The user noted that manual configuration overrides are forcibly overwritten by the system. This suggests a critical hardcoded regression in the LLM gateway or proxy routing logic.

## 5. Bugs & Stability
*   **Severity: HIGH - Configuration Override / Model Routing (Issue [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988)):** System forces model routing to NetEase defaults, overriding explicit third-party model configurations and breaking user workflows. (No fix PR identified yet).
*   **Severity: MEDIUM - Cowork Session Text Corruption (PR [#1986](https://github.com/netease-youdao/LobsterAI/pull/1986)):** Suffix-prefix overlap detection in gateways swallowed repeated characters (e.g., `file:///` became `file://`). *Status: Fixed/Merged.*
*   **Severity: MEDIUM - Execution Mode Ignored (PR [#807](https://github.com/netease-youdao/LobsterAI/pull/807)):** `executionMode` settings (auto/sandbox) hardcoded to 'local' in `coworkStore`. *Status: PR open/pending.*
*   **Severity: LOW - Windows Uninstaller Ghosting (PR [#1190](https://github.com/netease-youdao/LobsterAI/pull/1190)):** App remained active post-uninstall on Windows. *Status: Fixed/Merged.*

## 6. Feature Requests & Roadmap Signals
Based on recently active and merged PRs, clear signals are emerging for the next release's roadmap:
*   **Thinking Budget/Level Control:** Open PR [#1985](https://github.com/netease-youdao/LobsterAI/pull/1985) introduces a `ThinkingLevelSelector`, indicating upcoming support for controlling AI reasoning depth (Off to Adaptive) on a per-session basis.
*   **Advanced MCP Configuration:** Merged PR [#835](https://github.com/netease-youdao/LobsterAI/pull/835) allows batch creation of MCP servers via JSON pasting, highlighting a push toward easier extensibility for power users.
*   **Security Posture Enhancements:** The introduction of the `nsp-clawguard` toggle (PR [#1962](https://github.com/netease-youdao/LobsterAI/pull/1962)) signals a growing emphasis on enterprise-grade runtime security monitoring.

## 7. User Feedback Summary
User pain points are currently centered around **plugin/model routing transparency and autonomy**. The core complaint in Issue [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) is the system overriding user configurations autonomously. Conversely, the merging of PRs like per-channel IM model overrides (PR [#838](https://github.com/netease-youdao/LobsterAI/pull/838)) and skill folder access (PR [#1185](https://github.com/netease-youdao/LobsterAI/pull/1185)) shows that users are actively requesting—and receiving—more granular control over the UI, file system, and model behaviors.

## 8. Backlog Watch
A large volume of community contributions dating back to March and April was addressed today. However, two highly impactful PRs remain in an "Open" state and urgently require maintainer review:
*   **PR [#806](https://github.com/netease-youdao/LobsterAI/pull/806) & PR [#807](https://github.com/netease-youdao/LobsterAI/pull/807):** Both opened on March 25. [#806] addresses critical SQLite performance bottlenecks for users with large session histories, and [#807] fixes a fundamentally broken configuration setting for sandbox execution modes. Given the scale of today's backlog cleanup, these should be prioritized for final review and merging.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for Moltis based on the provided data for May 16, 2026.

### 1. Today's Overview
Moltis experienced a highly active and productive day, characterized entirely by issue resolution and feature integration rather than new bug reports. The development team successfully closed 4 issues and merged 6 pull requests, demonstrating strong momentum and responsive maintenance. Activity heavily focused on expanding remote access capabilities, improving deployment stability (specifically for Proxmox and TLS setups), and refining the project's documentation infrastructure. With only 1 new PR opened and remaining in an active review state, the project is currently in a feature-consolidation and stabilization phase.

### 2. Releases
No new official releases were recorded in the last 24 hours. 

### 3. Project Progress
Significant headway was made across deployment, user interface, and security configurations. Key merged PRs include:
*   **Documentation Overhaul ([PR #987](https://github.com/moltis-org/moltis/pull/987)):** Successfully replaced the older mdBook deployment with a custom Astro-generated documentation site, featuring modern UX additions like sidebar navigation, title search, and theme toggles.
*   **UI Fix ([PR #998](https://github.com/moltis-org/moltis/pull/998)):** Resolved a regression where the chat interface had unintended horizontal scrolling. The fix includes updated flex sizing constraints and Playwright regression tests.
*   **Deployment & Security Fixes ([PR #997](https://github.com/moltis-org/moltis/pull/997), [PR #1000](https://github.com/moltis-org/moltis/pull/1000)):** Improved the Proxmox LXC installation flow by preventing fatal errors when CA certificates are unreadable. Additionally, TLS generation was upgraded to support public IP Subject Alternative Names (SANs).
*   **MCP Authentication ([PR #1001](https://github.com/moltis-org/moltis/pull/1001)):** Added support for optional `client_secret` in OAuth override configurations for MCP (Model Context Protocol) authentication.
*   **Dependencies ([PR #999](https://github.com/moltis-org/moltis/pull/999)):** Bumped the Astro dependency for the docs from version 5.18.1 to 6.3.3.

### 4. Community Hot Topics
While the most recently opened items are driving current development, the most interactive community topic is a forward-looking feature request:
*   **Trustless Relay Channel ([Issue #995](https://github.com/moltis-org/moltis/issues/995)):** Proposed by `gg582`, this enhancement requests the integration of `portal-tunnel` as a trustless relay channel. With 1 comment, it indicates active early-stage discussion.
*   **Remote Access Expansion ([PR #1002](https://github.com/moltis-org/moltis/pull/1002)):** Currently open and garnering maintainer attention, this PR introduces NetBird mesh and Cloudflare Tunnel support. The underlying need here is clear: users require diverse, secure, and NAT-traversing methods to expose their local Moltis instances to the internet.

### 5. Bugs & Stability
Three distinct bugs were reported and immediately resolved today, showing high responsiveness to stability concerns. Ranked by severity:
1.  **Proxmox LXC Installation Failure ([Issue #993](https://github.com/moltis-org/moltis/issues/993)):** The Proxmox helper script was failing during LXC creation on version 91. **Status:** Fixed by [PR #997](https://github.com/moltis-org/moltis/pull/997), which applied runtime patches to tolerate missing CA certs without deleting the container. *(High Severity - Deployment Blocker)*
2.  **TLS Certificate Localhost Limitation ([Issue #996](https://github.com/moltis-org/moltis/issues/996)):** Auto-generated TLS certificates were only working for `localhost`, contrary to documentation, breaking remote deployments. **Status:** Fixed by [PR #1000](https://github.com/moltis-org/moltis/pull/1000), which added public IP SAN support. *(Medium Severity - Connectivity/Security Blocker)*
3.  **Chat UI Horizontal Scrolling ([Issue #994](https://github.com/moltis-org/moltis/issues/994)):** A UI regression allowed long prompts to widen the chat interface. **Status:** Fixed by [PR #998](https://github.com/moltis-org/moltis/pull/998). *(Low Severity - UI/UX Nuisance)*

### 6. Feature Requests & Roadmap Signals
The community is heavily signaling a need for **simplified remote access and self-hosting infrastructure**. 
*   The closure of [Issue #996](https://github.com/moltis-org/moltis/issues/996) via public IP SAN support shows a focus on making VPS/Docker deployments easier.
*   The open [PR #1002](https://github.com/moltis-org/moltis/pull/1002) (NetBird & Cloudflare Tunnel) and [Issue #995](https://github.com/moltis-org/moltis/issues/995) (`portal-tunnel`) strongly indicate that the next major version or upcoming release will likely feature a dedicated "Remote Access" integration suite, allowing users to securely expose their AI agents without manual port-forwarding or reverse proxy configuration.
*   Furthermore, the merging of MCP OAuth client secrets ([PR #1001](https://github.com/moltis-org/moltis/pull/1001)) signals an upcoming expansion of secure integrations with third-party AI tool servers.

### 7. User Feedback Summary
Real user pain points center strictly around **deployment friction and edge-case hosting environments**. Users deploying Moltix via Proxmox or attempting to access it via domain names/IPs on VPSs encountered immediate roadblocks (fatal script errors, invalid TLS). However, because the turnaround on these fixes was less than 48 hours, user satisfaction regarding support and issue resolution appears to be exceptionally high. The rapid adoption of complex tunneling solutions also suggests a highly technical, self-hosting user base.

### 8. Backlog Watch
Based on today's data, the only item requiring immediate maintainer attention is the currently open PR:
*   **[PR #1002](https://github.com/moltis-org/moltis/pull/1002) (NetBird and Cloudflare Tunnel support):** This is a massive feature addition that introduces new dependencies (e.g., `cloudflared` runtime controller, NetBird TCP forwarder). It will require strict security and networking reviews before merging. Maintainers should watch for potential network routing regressions.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-05-16

## 1. Today's Overview
The CoPaw (QwenPaw) project is experiencing a highly active and healthy development phase, characterized by a robust merge rate and strong community engagement. In the last 24 hours, the project saw 34 pull requests merged or closed against 16 open, indicating rapid iteration and responsive code review by maintainers. Activity around issues is equally dynamic, with 24 issues updated (13 open, 11 closed). The development focus is heavily concentrated on enterprise channel integrations (DingTalk, WeCom, Telegram), multi-agent security hardening, and overall system stability.

## 2. Releases
No new official releases were published today. The community and developers appear to be actively iterating on the `v1.1.7` baseline, pushing bug fixes and feature enhancements in preparation for a stable release or a subsequent patch.

## 3. Project Progress
A significant number of PRs were merged today, pushing forward several key areas of the project:
*   **Security & Stability:** Critical security hardening was merged, including local HMAC signing for backup archives ([PR #4409](https://github.com/agentscope-ai/QwenPaw/pull/4409)), YARA/consistency analyzers for the skill scanner ([PR #1580](https://github.com/agentscope-ai/QwenPaw/pull/1580), [PR #1581](https://github.com/agentscope-ai/QwenPaw/pull/1581)), and a fix for a plan-mode bypass vulnerability ([PR #4198](https://github.com/agentscope-ai/QwenPaw/pull/4198)).
*   **Multi-Channel Enhancements:** The WeCom channel received a fix to suppress duplicate "Thinking…" placeholders ([PR #4427](https://github.com/agentscope-ai/QwenPaw/pull/4427)), and Matrix E2EE support was significantly enhanced ([PR #4120](https://github.com/agentscope-ai/QwenPaw/pull/4120)).
*   **Plugin & Skill System:** Fixes for the CloudPaw plugin were merged to resolve module import errors ([PR #4423](https://github.com/agentscope-ai/QwenPaw/pull/4423)), and a custom Anthropic base URL feature was implemented ([PR #4387](https://github.com/agentscope-ai/QwenPaw/pull/4387)).
*   **UI / UX:** The frontend plan panel sync issue was resolved ([PR #3787](https://github.com/agentscope-ai/QwenPaw/pull/3787)), and pinned state local storage was implemented ([PR #4416](https://github.com/agentscope-ai/QwenPaw/pull/4416)).

## 4. Community Hot Topics
*   **Identity Confusion in Multi-Agent Channels** ([Issue #3957](https://github.com/agentscope-ai/QwenPaw/issues/3957)): A severe bug where a primary agent's workspace switches incorrectly when receiving messages from other agents. This generated 8 comments, reflecting the community's heavy use of CoPaw for complex, multi-agent orchestration.
*   **DeepSeek V4 Think Tag Parsing** ([Issue #4051](https://github.com/agentscope-ai/QwenPaw/issues/4051)): Users are reporting issues with parsing the "thinking" content from DeepSeek models, causing silent failures.
*   **Cron Task Context Sticking** ([Issue #4162](https://github.com/agentscope-ai/QwenPaw/issues/4162) & [PR #4303](https://github.com/agentscope-ai/QwenPaw/pull/4303)): A highly requested discussion on ensuring scheduled tasks respect session deletions. This is being actively addressed via open PRs aiming to isolate non-shared cron runs.
*   **Configuration Persistence on Upgrade** ([Issue #4430](https://github.com/agentscope-ai/QwenPaw/issues/4430)): Users upgrading to v1.1.7 are anxious about losing API keys and chat histories due to the required uninstall/reinstall process for the Desktop app.

## 5. Bugs & Stability
1.  **[Critical] Channel Credentials Exposed in Plaintext** ([Issue #4421](https://github.com/agentscope-ai/QwenPaw/issues/4421)): A severe vulnerability where Channel configurations are written in plaintext to agent-readable directories. Addressed via a backup trust hardening fix in [PR #4409](https://github.com/agentscope-ai/QwenPaw/pull/4409).
2.  **[High] `write_file()` Infinite Loop** ([Issue #4299](https://github.com/agentscope-ai/QwenPaw/issues/4299)): When outputting long content, the system triggers a missing positional arguments error, causing an infinite loop.
3.  **[High] CDP Connection Timeout Bricking Agent** ([Issue #4309](https://github.com/agentscope-ai/QwenPaw/issues/4309)): If Chrome CDP ports are unavailable, the `browser_use` tool hangs for 5 minutes, rendering the agent completely unresponsive.
4.  **[Medium] MiMo Tool Call 400 Errors** ([Issue #4314](https://github.com/agentscope-ai/QwenPaw/issues/4314)): When using Xiaomi's MiMo with thinking mode enabled, multi-turn conversations with tool calls result in HTTP 400 errors.
5.  **[Low] macOS Icon Anomaly** ([Issue #4412](https://github.com/agentscope-ai/QwenPaw/issues/4412)): UI scaling issues for the app icon in macOS 15.7.7.

## 6. Feature Requests & Roadmap Signals
*   **Plugin Discoverability** ([Issue #4406](https://github.com/agentscope-ai/QwenPaw/issues/4406)): Users want first-party plugins packaged within the distribution for easy installation. This aligns with recent merges to the CloudPaw plugin.
*   **Token Usage Tracking** ([PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433)): A highly desired feature to display per-turn and per-session token consumption in the UI.
*   **MCP Tool Name Collision Resolution** ([PR #4428](https://github.com/agentscope-ai/QwenPaw/pull/4428)): A proposed fix to prefix MCP tool names with client keys when multiple MCP servers of the same type are used.
*   **DingTalk Parallel Processing** ([Issue #4431](https://github.com/agentscope-ai/QwenPaw/issues/4431)): Request to handle messages from different users in group chats concurrently rather than serially to prevent bot blocking.
*   *Prediction:* The next version will likely focus heavily on MCP flexibility, token usage dashboards, and enterprise chat parallel processing.

## 7. User Feedback Summary
Users are heavily leveraging CoPaw for enterprise integrations (DingTalk, WeCom, QQ) and are pleased with the breadth of LLM support (DeepSeek, Anthropic, MiMo). However, there is notable friction regarding state management—users report context "sticking" to deleted sessions during cron jobs, and complex multi-agent setups sometimes suffer from identity confusion. Desktop users are experiencing friction with the upgrade process, expressing anxiety over potential data loss during reinstalls. Finally, users working with advanced agentic tools (like `browser_use` and `execute_shell_command`) are running into timeout and file system edge cases that interrupt automations.

## 8. Backlog Watch
*   **[Long-Running] Telegram Audio Support** ([Issue #1516](https://github.com/agentscope-ai/QwenPaw/issues/1516)): Open since March 2026, the inability to process voice messages in Telegram remains a significant blocker for voice-assistant use cases.
*   **[Long-Running] Anthropic File Type Error** ([Issue #2751](https://github.com/agentscope-ai/QwenPaw/issues/2751)): Open since April, causing 400 errors when sending files to Anthropic models.
*   **Agent Workspace Defaults** ([Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408)): A structural request to tidy up the working directory by hiding default files (similar to `.qwenpaw`). This architectural change requires maintainer discussion before PRs can be accepted.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-16

## 1. Today's Overview
ZeroClaw is currently experiencing a massive surge in open development activity, characterized by a high volume of open issues (11) and an even higher ratio of active pull requests (42 open vs. 8 closed/merged). The project's core maintainers and community contributors are heavily focused on iterating on the upcoming **v0.8.0 milestone** (Multi-Agent Runtime and Schema V3) while simultaneously expanding channel integrations and fortifying the "Skills" infrastructure. However, the low merge rate suggests that the project is in a heavy review and integration phase, with several critical bugs and architectural PRs currently vying for maintainer attention. Overall project health is highly active but slightly bottlenecked at the review/approval stage.

## 2. Releases
**No new releases were published today.** 
The repository is actively targeting the major **v0.8.0 release** (tracked via PR #6398), which is currently undergoing an incremental review process.

## 3. Project Progress
While only 8 PRs were merged/closed today, active development is pushing forward on several major fronts:
*   **Skills & Autonomous Tooling:** Work is advancing on self-improving agent skills. PR [#6667](https://github.com/zeroclaw-labs/zeroclaw/pull/6667) introduced a background review fork and skill management tool, while subsequent PRs are already iterating on it.
*   **Provider & Model Enhancements:** PR [#5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652) is bringing native extended thinking to Anthropic and Bedrock providers, and PR [#6549](https://github.com/zeroclaw-labs/zeroclaw/pull/6549) is adding vision support for the Claude-Code provider.
*   **Omnichannel Expansion:** Progress is being made on comms channels, including Twilio SMS ([#6429](https://github.com/zeroclaw-labs/zeroclaw/pull/6429)), Twitch IRC ([#6446](https://github.com/zeroclaw-labs/zeroclaw/pull/6446)), and separating IMAP/SMTP credentials for the Email channel ([#6666](https://github.com/zeroclaw-labs/zeroclaw/pull/6666)).
*   **Security & Gateway:** PR [#5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779) is implementing a TOTP gate for destructive shell commands, and PR [#6392](https://github.com/zeroclaw-labs/zeroclaw/pull/6392) is building a fleet-wide `/nodes` dashboard.

## 4. Community Hot Topics
The most actively discussed items revolve around autonomous agentic behaviors, multi-agent security, and deployment reliability:
*   **Skill Improver Cooldown Bypass ([#6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) / [#6684](https://github.com/zeroclaw-labs/zeroclaw/pull/6684)):** Contributors are actively discussing the `SkillImprover` logic. The system was found to have a dormant cooldown check, allowing an agent to infinitely rewrite its own skills. The community quickly identified the gap and paired the issue with a fix PR.
*   **Session Ownership in Multi-Agent Environments ([#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833)):** A 4-comment thread discussing how to prevent agents from deleting or resetting sessions belonging to other agents or users. This is a critical architectural discussion as ZeroClaw scales to multi-agent runtimes.
*   **Cron Job Output Routing ([#6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)):** Users are reporting (and discussing workarounds for) agent cron job results getting stuck in the web dashboard and failing to route to external channels like Telegram.
*   **v0.8.0 Rollout & Bulk Revert Recovery ([#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) & [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398)):** Maintainers and contributors are heavily tracking the 153 commits lost in a previous bulk revert, auditing them for re-integration into the upcoming v0.8.0 release.

## 5. Bugs & Stability
Several high-severity bugs were reported today, impacting agent workflows, API compatibility, and security policies:
*   **P0 / Crash - ClawHub Tokio Panic ([#6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681)):** Running `zeroclaw skills install clawhub:*` causes an immediate panic because a blocking `reqwest` client is dropped inside the `#[tokio::main]` runtime. *(Fix exists: PR [#6682](https://github.com/zeroclaw-labs/zeroclaw/pull/6682))*
*   **P0 / Security - Path Policy bypass ([#5533](https://github.com/zeroclaw-labs/zeroclaw/issues/5533)):** The `allowed_path` configuration does not correctly respect parent directory logic (e.g., allowing `~/` does not grant access to `~/dev`).
*   **P1 / Integration - Anthropic API Tool Name Rejection ([#6678](https://github.com/zeroclaw-labs/zeroclaw/issues/6678)):** Custom skills generate tool names with dots (`.`) via `format!("{}.{}", ...)`, violating Anthropic's regex policy `^[a-zA-Z0-9_-]{1,128}$` and causing 400 Bad Request errors.
*   **P1 / Security - Dependency Vulnerability ([#6657](https://github.com/zeroclaw-labs/zeroclaw/issues/6657)):** An automated advisory scan failed due to TLS hostname verification being disabled when using the Boring TLS backend in `lettre`.
*   **P1 / UX - Bash Completion Infinite Recursion ([#6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402)):** Tab-completing any subcommand in bash triggers a stack overflow, crashing the user's SSH session. *(Note: PR status indicates this has a fix in progress/closed).*

## 6. Feature Requests & Roadmap Signals
*   **SearXNG for Privacy-Focused Search ([#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)):** A highly requested feature to add SearXNG as a provider to bypass DuckDuckGo CAPTCHAs for autonomous web-research agents.
*   **ACP Session Persistence ([#6649](https://github.com/zeroclaw-labs/zeroclaw/pull/6649)):** SQLite-backed persistence for Agent Communication Protocol sessions, indicating a strong roadmap push towards robust, stateful multi-agent editor integrations.
*   **Web Chat Tool Approval UI ([#6522](https://github.com/zeroclaw-labs/zeroclaw/issues/6522)):** A request to complete the frontend implementation for supervised-mode tool executions, allowing users to approve/reject tool calls via the web UI.
*   **Prediction:** With the heavy focus on skills, `SKILL.toml` vs `manifest.toml` unification, and SQLite session persistence, the immediate next minor release (likely v0.7.6 or the imminent v0.8.0) will be heavily themed around **Skill UX stabilization and Multi-Agent state management**.

## 7. User Feedback Summary
Users are increasingly deploying ZeroClaw in complex, multi-agent setups, which is exposing friction in privilege boundaries and session management. A major pain point is containerization ergonomics; for example, Docker bind mounts shadowing the pre-built web dashboard ([#6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400)) causes immediate frustration for self-hosters. On the positive side, the community is highly engaged in solving these problems, quickly identifying root causes (like the missing cooldown predicates in the skill patcher) and submitting targeted PRs. The demand for localized CLI output ([#6670](https://github.com/zeroclaw-labs/zeroclaw/issues/6670)) also shows a maturing, globally diverse user base.

## 8. Backlog Watch
*   **PR [#6398](https://github.com/zeroclaw-labs/zeroclaw/pull/6398) (v0.8.0: Multi-Agent Runtime and Schema V3):** This massive PR is marked "DO NOT APPROVE/MERGE" while incremental reviews are happening. It requires focused maintainer bandwidth to land safely.
*   **Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (Bulk Revert Audit):** 153 previously approved commits were lost in March. This needs continuous maintainer oversight to ensure no critical security patches were permanently dropped.
*   **Issue [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) (SearXNG Support):** Flagged as `help wanted` and `needs-maintainer-review`. This is a high-impact enhancement for autonomous agents that has been open for over a month awaiting a champion.

</details>