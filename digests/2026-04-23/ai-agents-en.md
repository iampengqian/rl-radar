# OpenClaw Ecosystem Digest 2026-04-23

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-22 22:12 UTC

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

# OpenClaw Project Digest — 2026-04-23

## 1. Today's Overview
OpenClaw is experiencing a massive surge in community engagement, with 500 issues and 500 pull requests updated in the last 24 hours. However, the project's stability is currently under strain following the recent `v2026.4.21` release, which has introduced widespread regression bugs related to bundled runtime dependency resolution. While the contributor base is highly active in developing advanced agentic hooks and expanding platform capabilities, the maintainers are facing significant friction regarding packaging and global npm install flows. The high ratio of open issues (340) to closed (160) today indicates that the community is reporting bugs faster than the team can currently resolve them.

## 2. Releases
**v2026.4.21** was recently released and includes the following changes:
*   **Changes:** Defaulted the bundled image-generation provider and live media smoke tests to OpenAI's `gpt-image-2`, and added newer 2K/4K OpenAI size hints to image-generation documentation and tool metadata.
*   **Fixes:** Repaired bundled plugin runtime dependencies in the `doctor` plugin.
*   *Note:* Despite the fix intended for the doctor plugin, this version appears to have inadvertently caused missing dependency issues for various channel extensions (Feishu, WhatsApp, Nostr).

## 3. Project Progress
Today saw 306 merged/closed PRs, indicating rapid iteration. Key features and fixes that advanced include:
*   **UI & Diagnostics:** Creation of a support-ready gateway diagnostics export for easier bug reporting ([PR #70324](https://github.com/openclaw/openclaw/pull/70324)), and fixes to the Control UI context profile save flow to clarify pending states ([PR #70358](https://github.com/openclaw/openclaw/pull/70358)).
*   **Agent Hooks System:** Significant progress on plugin hooks, including PRs for `before_llm_call`/`after_llm_call` interception ([PR #39206](https://github.com/openclaw/openclaw/pull/39206)) and observability hooks for agent loop iterations ([PR #33915](https://github.com/openclaw/openclaw/pull/33915)).
*   **Security & Approvals:** Merged `exec.denylist` config to block dangerous command patterns ([PR #60684](https://github.com/openclaw/openclaw/pull/60684)) and fixes to the Codex approval scopes ([PR #64688](https://github.com/openclaw/openclaw/pull/64688)).
*   **Channel Resilience:** Fixes for Slack thread participation cache persistence across restarts ([PR #33845](https://github.com/openclaw/openclaw/pull/33845)) and Feishu reasoning text rendering ([PR #68107](https://github.com/openclaw/openclaw/pull/68107)).

## 4. Community Hot Topics
*   **Linux/Windows Native Clients:** The most upvoted and discussed ongoing issue is the request for Linux and Windows Clawdbot Apps ([Issue #75](https://github.com/openclaw/openclaw/issues/75), 91 comments, 71 👍). The community is highly eager to step outside the macOS/iOS ecosystem.
*   **Real-time Voice Support:** A highly requested feature with 23 upvotes is native real-time voice conversation support via Twilio/WebRTC integration ([Issue #7200](https://github.com/openclaw/openclaw/issues/7200), 21 comments).
*   **Hermes Agent Parity:** A discussion regarding agentic performance parity between OpenClaw and Hermes Agent for GPT-5.4 gained traction, resulting in a 9-PR master tracker plan to enforce prompt-level tool execution ([Issue #66345](https://github.com/openclaw/openclaw/issues/66345) & [Issue #70101](https://github.com/openclaw/openclaw/issues/70101)).

## 5. Bugs & Stability
Stability is currently the project's weakest point, primarily due to installation and dependency resolution regressions in the latest releases.
*   **Critical (Dependency/Missing Modules):** Installation and global updates are breaking due to missing bundled runtime dependencies, particularly affecting Feishu (`@larksuiteoapi/node-sdk`) and WhatsApp (`@whiskeysockets/baileys`). Users are experiencing cascading `MODULE_NOT_FOUND` errors ([Issue #70292](https://github.com/openclaw/openclaw/issues/70292), [Issue #70099](https://github.com/openclaw/openclaw/issues/70099), [Issue #70198](https://github.com/openclaw/openclaw/issues/70198)). 
    *   *Fix status:* PRs to skip bundled plugin load failures in status flows ([PR #70326](https://github.com/openclaw/openclaw/pull/70326)) and repair missing dependencies are actively being merged.
*   **High (v2026.4.15 Regressions):** The Matrix channel fails to start ([Issue #67936](https://github.com/openclaw/openclaw/issues/67936)), and WhatsApp is sending duplicate media replies ([Issue #68056](https://github.com/openclaw/openclaw/issues/68056)).
*   **High (LLM Provider Errors):** Users using GitHub Copilot models are experiencing provider request schema rejections ([Issue #68735](https://github.com/openclaw/openclaw/issues/68735)). Compaction is also corrupting thinking block signatures for Anthropic models ([Issue #36229](https://github.com/openclaw/openclaw/issues/36229)).

## 6. Feature Requests & Roadmap Signals
*   **Sensitive Data Masking:** Strong demand for out-of-the-box desensitization of API keys/tokens in UI, logs, and config files ([Issue #64046](https://github.com/openclaw/openclaw/issues/64046)).
*   **Workspace Directories for Multi-Agent Setups:** Requests to ease file sharing between isolated agents ([Issue #40245](https://github.com/openclaw/openclaw/issues/40245)).
*   **Global Admin Rule Sync:** A system-level hook to instantly inject admin rule updates across all active sessions ([Issue #70036](https://github.com/openclaw/openclaw/issues/70036)).
*   *Prediction:* Given the immediate merge activity around diagnostics ([PR #70324](https://github.com/openclaw/openclaw/pull/70324)) and dependency skips ([PR #70326](https://github.com/openclaw/openclaw/pull/70326)), the next minor release will likely be an urgent stability patch targeting npm global install flows and extension loading.

## 7. User Feedback Summary
Users are expressing significant frustration regarding package management, specifically that upgrading OpenClaw via npm frequently breaks the gateway due to missing module errors. The dependence on exact module installations makes self-hosting and upgrading feel "fragile" to operators. 
On the positive side, users are deeply engaged with the advanced configurations—diving into multi-agent setups, memory-wiki vaults, and sandboxing. The high engagement in PRs like the observability hooks and session memory handling shows that the power-user base appreciates the project's expanding customizability for enterprise and complex agentic workflows.

## 8. Backlog Watch
The following high-impact items require maintainer attention:
*   **Session Lock Blocking:** Agent session locks are not released after a crash/SIGKILL, completely blocking subsequent agent runs ([Issue #70004](https://github.com/openclaw/openclaw/issues/70004)).
*   **Docker/Sandbox Workspace Binding:** Running the Gateway inside Docker with Docker-outside-of-Docker sandboxing fails to bind `/workspace` correctly ([Issue #31331](https://github.com/openclaw/openclaw/issues/31331)).
*   **Context Compaction Corruption:** Long-running sessions with extended thinking modes fail unrecoverably when auto-compaction modifies thinking block signatures ([Issue #36229](https://github.com/openclaw/openclaw/issues/36229)). 
*   **Stale Cron Jobs:** Cron jobs do not reliably recompute `nextRunAtMs` after editing the expression/timezone ([Issue #27996](https://github.com/openclaw/openclaw/issues/27996)).

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem based on the April 23, 2026 community digests.

### 1. Ecosystem Overview
The open-source AI personal assistant and agent ecosystem is currently characterized by rapid architectural evolution and intense development velocity. Projects are aggressively shifting from simple chat interfaces to complex, multi-agent orchestrators capable of operating across diverse platforms (Discord, WeChat, Telegram, Slack). A clear divide is emerging between lightweight, edge-deployable clients and enterprise-grade systems focusing on advanced tool execution, budgeting, and security. Across the board, maintainers are actively battling context compaction regressions, LLM provider schema fragility, and the complexities of cross-platform desktop packaging.

### 2. Activity Comparison
Projects are ranked by an aggregate health score based on development velocity, issue resolution ratio, and community engagement.

| Project | Issues Updated | PRs Updated | Releases (Last 24h) | Project Phase | Health/Velocity Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.4.21` | Hyper-growth / Stress | **B+** (Massive scale, but regression heavy) |
| **CoPaw** | 41 | 48 | `v1.1.3` (Recent) | Hyper-growth / Scaling | **A-** (High iteration, rapid feature drops) |
| **IronClaw** | 27 | 50 | None | Architectural Overhaul | **A** (Disciplined core refactoring) |
| **NanoBot** | 26 | 37 | None | Hardening / Stabilization | **A** (High merge rate, fixing systemic bugs) |
| **Moltis** | 6 | 15 | None | Active Feature Expansion | **A-** (Responsive, broadening integrations) |
| **LobsterAI** | 19 | 28 | None | Pre-Release Hardening | **A-** (Stable, focused on enterprise polish) |
| **NanoClaw** | 3 | 28 | None (v2 Imminent) | Major Architectural Rewrite| **B+** (Massive v2 merge, pending validation) |
| **PicoClaw** | 9 | 19 | `v0.2.7` | Active Scaling | **A-** (Balanced feature/fix ratio) |
| **ZeptoClaw** | 0 | 6 | None | Security/QA Sprint | **B** (Internal, single-contributor focus) |
| **EasyClaw** | 0 | 0 | `v1.8.3 - v1.8.6` | Distribution / Maintenance | **C+** (No community interaction) |
| **TinyClaw** | 0 | 0 | None | Dormant | **N/A** |

### 3. OpenClaw's Position
As the core reference implementation, OpenClaw boasts the largest community footprint by a massive margin (500 daily issues/PRs). However, it is currently enduring severe growing pains.
*   **Advantages vs. Peers:** Unmatched multi-channel breadth, an advanced hooks system for enterprise observability (`before_llm_call`/`after_llm_call`), and highly sophisticated memory/sandboxing configurations desired by power users.
*   **Technical Approach Differences:** Unlike monolithic alternatives, OpenClaw relies heavily on a bundled npm/plugin architecture. This currently serves as its Achilles' heel compared to more statically compiled or containerized peers (like PicoClaw or NanoClaw), as dependency resolution regressions are frequently breaking the gateway.
*   **Community Size Comparison:** OpenClaw's community is an order of magnitude larger than the next tier (IronClaw, CoPaw, NanoBot). While this generates massive feature demand, the maintainer-to-user ratio is strained, resulting in critical regressions outpacing fixes (340 open vs. 160 closed today).

### 4. Shared Technical Focus Areas
Analysis of the projects reveals several universal requirements emerging simultaneously across the ecosystem:
*   **Tool Execution & Security:** As agents become more autonomous, runtime safety is paramount. *OpenClaw* (`exec.denylist`), *ZeptoClaw* (SHA256 hash-chain auditing, SSRF validation), and *CoPaw* (ShellEvasionGuardian) are all heavily prioritizing command guardrails and verifiable audit trails.
*   **Multi-Agent Concurrency:** Moving beyond single-user chat, platforms are struggling with parallel agent stability. *NanoBot* recently patched duplicate replies caused by concurrent sub-agents, while *Moltis* is introducing default `spawn_agent` presets for multi-agent orchestration.
*   **LLM Provider Fragility:** The rapid iteration of LLM APIs (OpenAI, Anthropic, Google, Fireworks) is breaking underlying routing layers. *OpenClaw* (Anthropic thinking blocks, Copilot schemas), *NanoBot* (GPT-5.x routing errors, DeepSeek deserialization), and *Moltis* (Kimi/OpenRouter schema unions) all dedicated significant developer time today to normalizing non-standard API tool schemas.
*   **Context Compaction Reliability:** Long-running agent memory compaction is losing critical state. *NanoBot* users are demanding engineered compaction ratios, while *OpenClaw* suffers from unrecoverable corruption of extended thinking block signatures during auto-compaction.
*   **Desktop Packaging Friction:** Projects building desktop apps (*EasyClaw*, *LobsterAI*, *CoPaw*) are uniformly battling OS-level security blocks (macOS Gatekeeper, Windows Defender/SmartScreen) and bulky Electron/Tauri setups.

### 5. Differentiation Analysis
*   **Architectural Paradigms:** 
    *   *Engine v2 separation:* *IronClaw* is distinctly focusing on separating internal tool schemas from user-facing capabilities to reduce prompt bloat.
    *   *Complete v2 Rewrite:* *NanoClaw* is rebuilding its entire entity model (Users, roles, groups) ground-up to support multi-tenant messaging.
*   **Target Users:**
    *   *Enterprise & Local-First:* *LobsterAI* and *Moltis* are targeting corporate/air-gapped environments (supporting local LM Studios, WeCom integrations, Home Assistant IoT).
    *   *Edge & Hardware:* *PicoClaw* is uniquely optimized for edge hardware (Raspberry Pi, ARM64) and features highly refined conversational UX elements like `/btw` commands.
    *   *Privacy/Security:* *ZeptoClaw* is differentiating through strict, out-of-the-box security postures (hash chains, strict endpoint validation).

### 6. Community Momentum & Maturity
*   **Tier 1: Hyper-Growth / Scaling** (`OpenClaw`, `CoPaw`): Experiencing massive user influxes. They are shipping features rapidly but paying a "stability tax" in the form of packaging bugs and confused users dealing with major version transitions.
*   **Tier 2: Rapid Iteration / Architectural Shifts** (`IronClaw`, `NanoBot`, `NanoClaw`): Highly active. *IronClaw* and *NanoClaw* are landing massive foundational PRs (Engine v2, Architecture v2) that will dictate their next 12 months of development. *NanoBot* is in a healthy feature-freeze/hardening phase.
*   **Tier 3: Feature Expansion & Polish** (`PicoClaw`, `Moltis`, `LobsterAI`): Mature and steady. They are merging PRs that expand provider support, refine UI/UX, and patch edge cases, indicating preparation for stable releases.
*   **Tier 4: Internal Sprints / Maintenance** (`ZeptoClaw`, `EasyClaw`): *ZeptoClaw* is deep in an internal security sprint. *EasyClaw* is relying on past development, focusing solely on distribution patching without active public development.

### 7. Trend Signals
1.  **Demand for OpenTelemetry & Cost Controls:** As agents run longer and more autonomously, observability is critical. *IronClaw* is pioneering cascading USD-based budgeting for threads, while *NanoBot* is implementing OpenTelemetry tracing. AI developers must treat agent loops as observable distributed systems.
2.  **The Rise of Semantic Routing:** Token consumption is becoming a bottleneck for heavy tool-use agents. *CoPaw* is actively implementing Semantic Skill Routing (using embeddings to filter tools before passing them to the LLM), a trend that will become standard to manage prompt window limits.
3.  **Multi-Tenant Messaging as the Standard:** The ecosystem is moving away from single-user desktop wrappers toward multi-robot, multi-platform messaging backends. Native integrations for WeChat, Telegram, Discord, and Slack are happening simultaneously across *PicoClaw*, *NanoClaw*, *LobsterAI*, and *OpenClaw*, indicating that the market views AI agents primarily as shared, collaborative entities within existing communication meshes.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-23

## 1. Today's Overview
NanoBot is demonstrating **highly active and healthy development velocity** today, with 37 pull requests updated and 26 issues processed in the last 24 hours. The project is currently in an active feature-freeze/hardening phase, evidenced by the complete absence of new releases but a massive volume of bug fixes and architectural improvements being merged. Community engagement is exceptionally strong, particularly from Chinese-speaking users, with heavy discussions around provider failover, multi-agent concurrency, and chat platform integrations. The contributor base is actively addressing systemic reliability issues, notably duplicate messaging bugs and provider routing regressions. 

## 2. Releases
**No new releases** were published today. The team appears to be consolidating a large number of recent patches (such as sub-agent concurrency fixes and WebUI upgrades) before cutting the next stable version.

## 3. Project Progress
A remarkable **22 PRs were merged/closed**, indicating rapid integration of community and core team contributions. Key advancements include:

*   **WebUI Upgrades:** Merged [PR #3393](https://github.com/HKUDS/nanobot/pull/3393), introducing image attachments (file picker, paste, drag-and-drop) to the WebUI composer with a secure signed media pipeline.
*   **Multi-Agent Concurrency Fixes:** Merged [PR #3385](https://github.com/HKUDS/nanobot/pull/3385) (and duplicate [PR #3384](https://github.com/HKUDS/nanobot/pull/3384)) to resolve a critical issue where concurrent sub-agents caused duplicate replies by extending the block-wait drain mechanism.
*   **Provider Compatibility:** Merged [PR #3387](https://github.com/HKUDS/nanobot/pull/3387) fixing Anthropic API image incompatibility in tool results, and [PR #3388](https://github.com/HKUDS/nanobot/pull/3388) adding OpenRouter fallback support.
*   **Configuration Safety:** Merged [PR #3383](https://github.com/HKUDS/nanobot/pull/3383) to prevent the silent dropping of excluded fields (like `DreamConfig.cron`) during environment variable resolution.
*   **Workspace Permissions:** Merged [PR #2037](https://github.com/HKUDS/nanobot/pull/2037) to unblock builtin skills when workspace restrictions are enabled.

## 4. Community Hot Topics
The most actively discussed issues revolve around **agent reliability** and **configuration flexibility**:
*   **Cron Mechanism Flaw:** [Issue #2892](https://github.com/HKUDS/nanobot/issues/2892) (10 comments) details a frustrating UX where scheduled tasks require a gateway restart to take effect. Users are pushing for hot-reloading capabilities.
*   **Skill Creation Regression:** [Issue #2049](https://github.com/HKUDS/nanobot/issues/2049) (8 comments) highlights a missing ability to create skills in the latest update, pointing to an unintended regression in tool availability.
*   **LangSmith/LangChain Breakage:** [Issue #2493](https://github.com/HKUDS/nanobot/issues/2493) (6 comments, 👍 1) discusses the breaking of LangSmith integration following the removal of `litellm_provider.py`, indicating a need for clearer migration paths for enterprise observability tools.
*   **Telegram Duplicate Responses:** [Issue #2235](https://github.com/HKUDS/nanobot/issues/2235) (6 comments, 👍 6) features a heavily upvoted bug regarding faux streaming causing double messages.

## 5. Bugs & Stability
System stability is currently the primary focus, with several high-severity bugs identified and addressed today:

*   **Sub-Agent Repetition (Fixed):** [Issue #3377](https://github.com/HKUDS/nanobot/issues/3377) reported multi-agent tasks triggering repeated summaries. This was swiftly resolved via [PR #3385](https://github.com/HKUDS/nanobot/pull/3385).
*   **Routing Provider Breaking OAuth (Active):** [Issue #2465](https://github.com/HKUDS/nanobot/issues/2465) notes that `RoutingProvider` breaks OpenAI Codex by forcing it through LiteLLM.
*   **GPT-5.x Routing Error (Active):** [Issue #3360](https://github.com/HKUDS/nanobot/issues/3360) reports GitHub Copilot models failing because they are incorrectly routed to `/chat/completions` instead of `/responses`.
*   **Heartbeat Noise (Active):** [Issue #2582](https://github.com/HKUDS/nanobot/issues/2582) reports the heartbeat sending non-actionable messages under certain silent scenarios. Fix attempts are currently open in [PR #3389](https://github.com/HKUDS/nanobot/pull/3389) and [PR #3391](https://github.com/HKUDS/nanobot/pull/3391).
*   **DeepSeek Deserialization (Active):** [Issue #3328](https://github.com/HKUDS/nanobot/issues/3328) reports a crash specifically on Telegram integration after a minor version update.

## 6. Feature Requests & Roadmap Signals
User demands are heavily leaning toward **resilience, observability, and context management**. Features likely to hit the next version based on active PRs and discussions include:
*   **Model Presets:** Quick-switch model profiles via [PR #3358](https://github.com/HKUDS/nanobot/pull/3358).
*   **Advanced Observability:** Full OpenTelemetry tracing for LLM calls and tools via [PR #3173](https://github.com/HKUDS/nanobot/pull/3173).
*   **Cloudflare Bypass:** Web tool improvements to bypass JS captchas via [PR #3382](https://github.com/HKUDS/nanobot/pull/3382).
*   **Provider Failover:** Users are clamoring for cross-provider failover during rate limits/outages ([Issue #3376](https://github.com/HKUDS/nanobot/issues/3376)), a key signal for the roadmap.
*   **Session Focus Tool:** A highly requested mechanism to maintain persistent task awareness despite context compaction ([Issue #3292](https://github.com/HKUDS/nanobot/issues/3292)).

## 7. User Feedback Summary
**Pain Points:** Users are frustrated by the lack of dynamic configuration updates (e.g., having to restart the gateway for cron jobs [Issue #2892](https://github.com/HKUDS/nanobot/issues/2892)). There is also notable friction around provider routing, where LiteLLM abstractions are breaking provider-specific APIs like OpenAI Codex and GitHub Copilot.
**Satisfaction & Use Cases:** The community is highly engaged in extending NanoBot to diverse platforms (DingTalk, Discord, Telegram, MS Teams, Feishu). Community members are even building complementary tools, such as the third-party admin dashboard highlighted in [Issue #2213](https://github.com/HKUDS/nanobot/issues/2213). The creation of WeChat community groups ([Issue #3396](https://github.com/HKUDS/nanobot/issues/3396)) further underscores a thriving, self-organizing user base.

## 8. Backlog Watch
*   **Stale API Key Caching:** [Issue #173](https://github.com/HKUDS/nanobot/issues/173) remains unresolved and stale. Users report NanoBot stubbornly reusing old API keys even after `nanobot onboard` and process restarts, which is a critical blocker for credential rotation.
*   **Configurable Compaction Ratio:** [Issue #3270](https://github.com/HKUDS/nanobot/issues/3270) needs core maintainer input. The user makes a strong architectural argument that context compaction trigger points should be engineered for reliability rather than manually configured, challenging recent repository changes.
*   **Dynamic Provider Switching:** [Issue #1954](https://github.com/HKUDS/nanobot/issues/1954) requests runtime provider switching in chat, highlighting an area where the agent's capabilities are limited by hardcoded defaults.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-23

## 1. Today's Overview
PicoClaw demonstrates robust and highly active development, merging 11 out of 19 updated Pull Requests and cutting two new releases (v0.2.7 and nightly) within a 24-hour period. The project's momentum is heavily focused on unifying multi-channel experiences (Discord, Telegram, Feishu, Matrix, Web) and refining provider configurations. The community remains highly engaged, submitting 9 active issues that highlight a strong demand for flexible configurations, better multimodal support, and external integrations. Overall, the project is in an active scaling phase, maintaining a healthy balance of bug bounties, core refactoring, and feature expansions.

## 2. Releases
**v0.2.7** was released today, bringing notable feature enhancements and provider expansions:
- **Sogou Web Search Integration:** Added a configurable Sogou-backed web search engine, expanding global and regional search capabilities alongside existing options.
- **Channel Tool Feedback Animation:** Implemented a unified tool feedback animation system across channels, making execution progress cleaner and less spammy for users.
- **Linter & Misc Fixes:** Addressed minor formatting issues, such as the Sogou user agent linter error.

A standard **nightly** build (`v0.2.6-nightly.20260422.279c496b`) was also automatically generated for testing bleeding-edge changes.

## 3. Project Progress
Significant advancements were merged into the main branch today, streamlining both the frontend UI and backend configuration logic:
- **Provider Configuration Refactor:** Merged [PR #2609](https://github.com/sipeed/picoclaw/pull/2609) to introduce a first-class `provider` field in model list entries. This resolves long-standing vendor parsing friction while maintaining backward compatibility.
- **Agent "Side Questions":** Merged [PR #2502](https://github.com/sipeed/picoclaw/pull/2502) and [PR #2532](https://github.com/sipeed/picoclaw/pull/2532), introducing a `/btw <question>` command that allows users to ask immediate, one-off questions without interrupting the primary session history or agent tool-execution flow.
- **Web UI Enhancements:** [PR #2563](https://github.com/sipeed/picoclaw/pull/2563) enabled direct file downloads for tool-generated attachments in the Pico web channel. [PR #2618](https://github.com/sipeed/picoclaw/pull/2618) fixed Pico attachment fetching by correctly passing raw bearer tokens through the media proxy.
- **CI/CD Improvements:** Maintainers overhauled the release pipeline ([PR #2614](https://github.com/sipeed/picoclaw/pull/2614)), splitting tag creation and release workflows for safer deployments.
- **Documentation Reorganization:** [PR #2567](https://github.com/sipeed/picoclaw/pull/2567) established a cleaner layout structure for contributor guidelines and translations.

## 4. Community Hot Topics
- **Resolving Vendor Ambiguity (Issue [#1883](https://github.com/sipeed/picoclaw/issues/1883) & PR [#2609](https://github.com/sipeed/picoclaw/pull/2609)):** An older but highly discussed proposal to fix vendor parsing issues (e.g., the confusing `openai/openai/model-name` syntax for local servers). The underlying need for *explicit provider fields* was officially addressed and merged today.
- **Securing Third-Party WebSockets (Issue [#2499](https://github.com/sipeed/picoclaw/issues/2499)):** An active discussion with maintainers regarding secure integration paths for browser extensions and external desktop clients. This highlights a strong community desire to use PicoClaw as a centralized backend for various custom front-ends.
- **Web Chat Inconsistencies (Issue [#2615](https://github.com/sipeed/picoclaw/issues/2615)):** Users report that tool call summaries disappear upon page refresh. This regression of a previously fixed bug indicates a persistent need for better state synchronization between the frontend UI and backend.

## 5. Bugs & Stability
- **Critical - Gateway Start Failure ([#2513](https://github.com/sipeed/picoclaw/issues/2513)):** Users on Debian 13 running binary v0.2.6 are experiencing an abnormal gateway exit (`picoclaw gateway -E`). *No fix PR is currently indicated.*
- **High - Session Context Lost on Timeout ([#2621](https://github.com/sipeed/picoclaw/issues/2621)):** If an API provider times out, PicoClaw loses the current session context and creates a duplicate default session, breaking agent continuity. *No fix PR is currently indicated.*
- **Medium - Web Search Not Recognized ([#2616](https://github.com/sipeed/picoclaw/issues/2616)):** If DuckDuckGo is disabled, the `web_search` tool is unregistered globally, breaking international user workflows. *No fix PR is currently indicated.*
- **Medium - Anthropic Prompt Caching ([PR #2192](https://github.com/sipeed/picoclaw/pull/2192)):** An open PR notes that the `anthropic_messages` provider was sending system prompts as flat strings, defeating Anthropic's prompt caching. A fix is currently pending review.
- **Low - Multiple Auth Credentials Error ([#2548](https://github.com/sipeed/picoclaw/issues/2548)):** Users encounter authentication errors when configuring specific Gemini models via the `config.json` file.

## 6. Feature Requests & Roadmap Signals
Several enhancement requests were raised today, signaling user demands for broader modality and integration support:
- **Native Multimodal Audio ([PR #2626](https://github.com/sipeed/picoclaw/pull/2626)):** A PR introducing native audio input support for models like Gemini 1.5. This is a strong signal that the next version will heavily lean into multimodal agent capabilities.
- **Local Embeddings Support ([PR #2624](https://github.com/sipeed/picoclaw/pull/2624)):** An open PR adding OpenAI-compatible embedding support for vLLM-style endpoints, pointing toward on-premise RAG capabilities.
- **Environment Variable Support for Skills ([#2623](https://github.com/sipeed/picoclaw/issues/2623)):** A request for `.env` file support to pass variables to custom skills, indicating a growing developer ecosystem building custom tools.
- **WhatsApp on ARM64 ([#2625](https://github.com/sipeed/picoclaw/issues/2625)):** Requests for WhatsApp support in compiled ARM64 builds highlight PicoClaw's adoption on edge devices like Raspberry Pi.

## 7. User Feedback Summary
Users are leveraging PicoClaw across diverse platforms (WhatsApp, digntalk, Discord, Web), with a clear trend toward deploying the agent on edge hardware (Raspberry Pi) and local servers. 
- **Satisfaction:** The newly merged `/btw` command and unified tool feedback animations indicate a mature focus on end-user conversational UX.
- **Dissatisfaction / Pain Points:** Configuration friction is the primary pain point, particularly for non-technical users setting up local providers (e.g., Gemini configuration throwing credential errors). Furthermore, API timeout handling remains subpar, as users are frustrated by losing context and encountering duplicated sessions.

## 8. Backlog Watch
- **WebSocket Security ([PR #2256](https://github.com/sipeed/picoclaw/pull/2256)):** Open since April 1st, this PR aims to harden the WebSocket `CheckOrigin` to prevent Cross-Site WebSocket Hijacking (CSWSH). Given the rising interest in third-party integrations, this security-focused PR needs maintainer review.
- **Provider Codebase Bloat ([PR #2586](https://github.com/sipeed/picoclaw/pull/2586)):** Open since April 19th, this refactor deduplicates utility functions across provider packages. It requires maintainer attention to keep the Go codebase maintainable as more providers are added.
- **AGENTS.md Update ([PR #1182](https://github.com/sipeed/picoclaw/pull/1182)):** Open since early March, proposing a shift to a "principle-first" guide for AI agents and contributors. This has lingered for over a month and should be prioritized to aid new contributors.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-04-23

## 1. Today's Overview
NanoClaw is experiencing a massive spike in development activity, marked predominantly by the finalization and landing of "v2"—a ground-up architectural rewrite of the project. The repository saw 28 updated Pull Requests in the last 24 hours (with 20 merged/closed), alongside 3 active issues. While no official tagged release was published today, the merging of the core v2 codebase signals that a major version release is imminent. The current focus is heavily skewed toward stabilizing this new architecture, refining the setup flow for new users, and expanding channel integrations. 

## 2. Releases
**No new releases were published today.** 
However, the merging of PR #1919 (v2 architectural rewrite) and several related preparation PRs indicates that a `v2.0.0` official release tag is likely pending.

## 3. Project Progress
Today's progress represents a major milestone for the project, transitioning from v1 to a modernized v2 architecture, alongside significant quality-of-life improvements:
*   **v2 Architectural Rewrite Landed:** The massive v2 update ([PR #1919](https://github.com/qwibitai/nanoclaw/pull/1919)) was closed/merged, bringing 319 commits and a +38k/-17k LOC change. It introduces a new entity model (Users, roles, messaging groups).
*   **v1 to v2 Cleanup:** Several prerequisite and cleanup PRs were merged to finalize the transition, including action-items ([PR #1869](https://github.com/qwibitai/nanoclaw/pull/1869)) and router refactoring for channel engagement ([PR #1877](https://github.com/qwibitai/nanoclaw/pull/1877)).
*   **Setup & Onboarding Improvements:** A new branded scripted setup flow (`nanoclaw.sh`) was merged ([PR #1908](https://github.com/qwibitai/nanoclaw/pull/1908)). Additionally, WSL-specific setup bugs were fixed to prevent confusing Docker/systemd errors ([PR #1904](https://github.com/qwibitai/nanoclaw/pull/1904), [PR #1903](https://github.com/qwibitai/nanoclaw/pull/1903)).
*   **Container Permissions Rollback:** A recent fix for container home permissions was reverted ([PR #1924](https://github.com/qwibitai/nanoclaw/pull/1924)), undoing the work from [PR #1885](https://github.com/qwibitai/nanoclaw/pull/1885) likely due to conflicts or regressions in the new v2 architecture.
*   **CI Maintenance:** A broken GitHub Actions workflow (`fork-sync-skills.yml`) was removed ([PR #1911](https://github.com/qwibitai/nanoclaw/pull/1911)).

## 4. Community Hot Topics
The community and contributor focus is currently split between the core architectural overhaul and expanding platform outreach:
*   **WeChat Community Building:** A user/community member posted two active issues ([Issue #1922](https://github.com/qwibitai/nanoclaw/issues/1922), [Issue #1920](https://github.com/qwibitai/nanoclaw/issues/1920)) aiming to funnel developers into a WeChat group. This signals a growing international user base desiring real-time, localized support.
*   **WeChat Integration:** In tandem with the community posts, a new open PR aims to add a native WeChat channel via the Tencent iLink bot protocol ([PR #1921](https://github.com/qwibitai/nanoclaw/pull/1921)), indicating strong external interest in utilizing NanoClaw within WeChat's ecosystem.
*   **Remote Storage:** A long-running community contribution for adding remote storage skills via rclone + systemd ([PR #1598](https://github.com/qwibitai/nanoclaw/pull/1598)) received updates, showing continued interest in expanding the agent's file system capabilities.

## 5. Bugs & Stability
Several stability patches and edge-case bugs were addressed today:
*   **Network/Timeout Stability:** [PR #1923](https://github.com/qwibitai/nanoclaw/pull/1923) (Merged) fixed an issue where Telegram image delivery would silently hang forever due to an unhandled OpenAI fetch timeout. *Severity: High (Directly breaks user-facing feature).*
*   **Empty Container Output Crash:** [PR #1912](https://github.com/qwibitai/nanoclaw/pull/1912) (Open) addresses an edge case where silent container failures result in `NaN` outputs, surfaced as a clear error. *Severity: Medium.*
*   **Configuration Parsing:** [PR #1916](https://github.com/qwibitai/nanoclaw/pull/1916) (Open) guards core environment variables (`CONTAINER_TIMEOUT`, etc.) against `NaN` and non-positive values. *Severity: Medium (System stability).*
*   **Assistant Name Trigger Bug:** [PR #1917](https://github.com/qwibitai/nanoclaw/pull/1917) (Open) fixes a bug where changing the assistant's name from the default `@Andy` breaks runtime group triggers. *Severity: Low/Medium.*
*   **Database Timestamps:** [PR #1845](https://github.com/qwibitai/nanoclaw/pull/1845) (Open) normalizes auto-generated SQLite timestamps to ISO 8601 to prevent session database mismatches. *Severity: Low.*

## 6. Feature Requests & Roadmap Signals
Today's activity provides clear signals about the immediate roadmap:
*   **Next Version Release:** The rollout of the v2 architectural update strongly suggests the immediate roadmap involves stabilizing this branch and issuing the first official v2 tagged release.
*   **Message Queuing:** [PR #1592](https://github.com/qwibitai/nanoclaw/pull/1592) (Merged) introduces "working ack" for piped messages, showing a roadmap focus on asynchronous user experience and feedback when the agent is busy.
*   **Third-Party Platform Integrations:** The active development of WeChat channels and Remote Storage skills hints that the next feature cycle will lean heavily into multi-platform messaging channels and external memory/mount capabilities.

## 7. User Feedback Summary
*   **Pain Points:** Environment setup (particularly Docker/systemd interactions on Windows WSL) is a noted friction point for new users, requiring multiple dedicated fixes today. Additionally, agents hanging silently during network issues or container crashes has been a primary source of instability.
*   **Use Cases:** The addition of `rclone` skills ([PR #1598](https://github.com/qwibitai/nanoclaw/pull/1598)) indicates users are attempting to deploy NanoClaw in environments requiring extensive, persistent cloud file management. 

## 8. Backlog Watch
*   **[PR #1921](https://github.com/qwibitai/nanoclaw/pull/1921) (WeChat Channel):** High-impact integration PR currently open; requires maintainer review to verify implementation against v2 standards.
*   **[PR #1845](https://github.com/qwibitai/nanoclaw/pull/1845) (DB Timestamps):** Open since April 18, overlapping with the v2 refactor. Needs attention to ensure the timestamp normalization aligns with the new v2 database entity schemas.
*   **[PR #1912](https://github.com/qwibitai/nanoclaw/pull/1912) & [PR #1913](https://github.com/qwibitai/nanoclaw/pull/1913) (Container/Config Fixes):** Recently submitted open PRs that should be prioritized for merge prior to cutting the official `v2.0.0` release tag to ensure a stable baseline.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-23

## 1. Today's Overview
IronClaw is experiencing a period of exceptionally high development velocity, focusing heavily on its next-generation Engine v2 architecture. Over the past 24 hours, the project saw 50 pull requests updated (with 11 merged/closed) and 27 issues updated, indicating a rapid iteration cadence led by the core team. The primary focus is decoupling the agent's internal tool schemas from user-facing capabilities, alongside a major push to improve testing infrastructure and fix web UI state synchronization. Several high-value community contributions also landed today, expanding IronClaw's provider and integration ecosystems.

## 2. Releases
No new releases were published today. The most recent tagged release remains `v0.26.0`. 

## 3. Project Progress
Significant architectural and functional advancements were merged or closed today:
*   **Engine v2 Architecture Maturation:** Core contributors completed the foundational layer for the Engine v2 two-surface model. Merged PRs include centralizing the action vs. capability surface policy ([PR #2827](https://github.com/nearai/ironclaw/pull/2827)) and adding capability projection to prevent internal tools from leaking to the LLM prompt ([PR #2826](https://github.com/nearai/ironclaw/pull/2826)). 
*   **Tool Registry Unification:** Fixed a major discrepancy where Engine v2 capabilities weren't visible to the `tool_info` command, merging the V1 and V2 tool registries ([PR #2794](https://github.com/nearai/ironclaw/pull/2794)).
*   **Web UX & Gateway Fixes:** Merged a fix to display human-readable conversation titles instead of hex hashes in the web sidebar ([PR #2700](https://github.com/nearai/ironclaw/pull/2700)).
*   **Extension & Fork Support:** Introduced an `ExternalToolRegistrar` plugin seam ([PR #2871](https://github.com/nearai/ironclaw/pull/2871)), allowing downstream enterprise forks to inject custom tools without maintaining a hard fork of the core codebase.

## 4. Community Hot Topics
The most actively discussed items revolve around architectural overhauls and state management:
*   **Engine v2 Separation of Concerns ([Issue #2767](https://github.com/nearai/ironclaw/issues/2767) - 6 comments):** The core team and contributors are actively mapping out how to separate callable tool schemas from background capabilities. This highlights a strong push to make the LLM's prompt surface leaner and more deterministic.
*   **Text Flattening in Tool-Use ([Issue #2813](https://github.com/nearai/ironclaw/issues/2813) - 5 comments):** Proposed by contributor `serrrfirat`, this issue discusses moving from a single optional content string to a typed content model (final vs. internal text). This signals a community need for clearer distinctions between what the agent "thinks" vs. what the user sees.
*   **Notion Integration Halting Agent ([Issue #2087](https://github.com/nearai/ironclaw/issues/2087) - 5 comments):** A highly requested bug where attempting to set up the Notion integration causes the agent to freeze completely.

## 5. Bugs & Stability
Today's QA bug bash and automated canaries revealed several high-priority stability issues:
*   **P1 - Routine Creation Failures ([Issue #2583](https://github.com/nearai/ironclaw/issues/2583)):** Routine creation fails with "5 consecutive code errors" during routine coding tasks.
*   **P1 - Cross-Conversation Contamination ([Issue #2833](https://github.com/nearai/ironclaw/issues/2833)):** A critical data-leakage bug where switching from an active reasoning task in Conversation A causes intermediate steps to display in Conversation B.
*   **P1 - Installer Failure on x86 Linux ([Issue #2818](https://github.com/nearai/ironclaw/issues/2818)):** The `v0.26.0` cargo-dist generated installer script is broken for `x86_64-unknown-linux-gnu`. No fix PR is listed yet.
*   **P2 - UI State Desyncs:** The web gateway suffers from state drift, causing the chat sidebar to disappear ([Issue #2857](https://github.com/nearai/ironclaw/issues/2857)). A targeted fix PR has been opened ([PR #2867](https://github.com/nearai/ironclaw/pull/2867)).
*   **Automated Canary Failures:** Live canaries are failing for `anthropic` and `openai-compatible` provider matrices ([Issue #2823](https://github.com/nearai/ironclaw/issues/2823), [Issue #2829](https://github.com/nearai/ironclaw/issues/2829)), suggesting potential LLM provider protocol or auth regressions in the latest commits.

## 6. Feature Requests & Roadmap Signals
*   **Cost-Based Budgeting ([Issue #2843](https://github.com/nearai/ironclaw/issues/2843)):** A high-risk architectural proposal to replace iteration/time limits with a cascading USD-based budget system (User → Project → Mission → Thread). This signals a shift toward enterprise-grade cost controls.
*   **Unified Testing Harness ([Issue #2828](https://github.com/nearai/ironclaw/issues/2828)):** A tracker epic to consolidate fragmented E2E, replay, and live-canary testing into a single harness, acknowledging current QA bottlenecks.
*   **Compact Action Cards for Prompts ([Issue #2834](https://github.com/nearai/ironclaw/issues/2834)):** Enhancing how tools are described to the LLM using curated summaries and compact cards. The first phase is already in progress ([PR #2866](https://github.com/nearai/ironclaw/pull/2866)).
*   *Prediction:* The next version will likely focus almost entirely on Engine v2 stability, featuring the new cost-based budgeting system, an expanded LLM provider list, and the unified tool registry.

## 7. User Feedback Summary
User pain points are currently clustered around **integration reliability** and **web UI predictability**. Users are frustrated that setting up third-party tools like Notion can crash the agent or require excessive manual guidance ([Issue #2856](https://github.com/nearai/ironclaw/issues/2856), [Issue #2858](https://github.com/nearai/ironclaw/issues/2858)). On the self-hosting side, the broken Linux installer for `v0.26.0` is a significant friction point. However, sentiment around the project's expanding capabilities (like the newly added Aliyun Coding Plan support in [PR #1446](https://github.com/nearai/ironclaw/pull/1446)) is highly positive, indicating strong demand for a multi-provider, multi-channel AI assistant.

## 8. Backlog Watch
*   **Ambitious Long-Running PRs:** Several massive "XL-sized" PRs have been open for weeks and require maintainer attention for review/merge, including native Matrix channel support ([PR #2019](https://github.com/nearai/ironclaw/pull/2019)), Aliyun provider integration ([PR #1446](https://github.com/nearai/ironclaw/pull/1446)), and the CLAWHUB_ENABLED feature flag ([PR #1594](https://github.com/nearai/ironclaw/pull/1594)).
*   **Gateway State Convergence ([Issue #2792](https://github.com/nearai/ironclaw/issues/2792)):** This epic addressing UI/backend state drift is flagged as an enhancement but is actively causing bug bash P1/P2s. It needs prioritized assignment.
*   **Spam/Community Management:** Several spam issues attempting to promote unofficial WeChat groups were opened and closed today ([Issue #2859](https://github.com/nearai/ironclaw/issues/2859)), with variants still open ([Issue #2861](https://github.com/nearai/ironclaw/issues/2861), [Issue #2862](https://github.com/nearai/ironclaw/issues/2862)). Maintainers should batch-close these to keep issue trackers clean.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-04-23)

## 1. Today's Overview
LobsterAI is experiencing a high-velocity development phase, demonstrating robust project health with 28 pull requests updated in the last 24 hours, 19 of which were successfully merged or closed. The core maintainers are heavily focused on cross-platform stability, multi-robot IM integrations, and enterprise configuration sync. Activity is predominantly driven by internal contributors finalizing features and patching bugs, likely preparing the codebase for an upcoming stable release. Overall, the project shows strong momentum and active, responsive maintenance. 

## 2. Releases
No new official releases were published today. 

## 3. Project Progress
Today saw 19 merged/closed PRs, indicating rapid integration of new features and stability patches. Key advancements include:
*   **Multi-Platform Integrations:** Added support for multi-robot configurations on Discord ([PR #1794](https://github.com/netease-youdao/LobsterAI/pull/1794)) and Telegram ([PR #1792](https://github.com/netease-youdao/LobsterAI/pull/1792)). The WeCom plugin was also upgraded ([PR #1790](https://github.com/netease-youdao/LobsterAI/pull/1790)).
*   **Model Flexibility:** Introduced LM Studio model configuration support ([PR #1787](https://github.com/netease-youdao/LobsterAI/pull/1787)), allowing users to better leverage local AI models.
*   **Windows Stability:** Significant improvements were made to the Windows NSIS installer observability and upgrade behavior ([PR #1791](https://github.com/netease-youdao/LobsterAI/pull/1791)). Additionally, Defender exclusions were narrowed to prevent false positives from Tencent PC Manager ([PR #1786](https://github.com/netease-youdao/LobsterAI/pull/1786)).
*   **UX & Core Fixes:** Fixed an issue where the update modal auto-popped up instead of using badge-only notifications ([PR #1793](https://github.com/netease-youdao/LobsterAI/pull/1793)), resolved enterprise config sync merge conflicts ([PR #1789](https://github.com/netease-youdao/LobsterAI/pull/1789)), and resolved a CORS issue blocking the skill marketplace fetch ([PR #1788](https://github.com/netease-youdao/LobsterAI/pull/1788)).

## 4. Community Hot Topics
While today's newly opened issues are sparse, the newly opened issue regarding tool execution failures has immediately struck a nerve. The bulk of today's community activity revolves around previously opened PRs that are now being revisited.
*   **[Issue #1796](https://github.com/netease-youdao/LobsterAI/issues/1796) [OPEN]:** Users report that Write/Edit tools are consistently failing. This highlights a critical reliance on file-modification tools for daily workflows.
*   **[PR #696](https://github.com/netease-youdao/LobsterAI/pull/696) & [PR #656](https://github.com/netease-youdao/LobsterAI/pull/656) [OPEN]:** Stale PRs addressing silent process exits on Windows startup and macOS freezing during in-app updates. These are being watched closely by the community as platform stability remains a core concern for desktop AI assistants.

## 5. Bugs & Stability
*   🔴 **Critical:** [Issue #1796](https://github.com/netease-youdao/LobsterAI/issues/1796) - "Write tool execution always fail". A regression or backend change causing tool execution failures across the app. No fix PR has been submitted yet.
*   🟡 **Medium:** [PR #1795](https://github.com/netease-youdao/LobsterAI/pull/1795) (Closed) - Fixed a timing gap causing images to be silently dropped by OpenClaw during startup. 
*   🟡 **Medium:** [PR #647](https://github.com/netease-youdao/LobsterAI/pull/647) (Open) - Duplicate system error messages in `continueSession` leading to user confusion.

## 6. Feature Requests & Roadmap Signals
Based on the recently merged code and open PRs, the near-term roadmap is heavily focused on:
1.  **Multi-Agent IM Deployments:** Supporting multiple bots on Discord, Telegram, and WeCom points to a strategy where LobsterAI acts as a multi-tenant backend for team collaboration.
2.  **Local Model Support:** The integration of LM Studio ([PR #1787](https://github.com/netease-youdao/LobsterAI/pull/1787)) signals a push towards supporting air-gapped, local-first enterprise use cases.
3.  **Power User Features:** Open PRs suggest upcoming support for shell command execution via `!` prefixes ([PR #658](https://github.com/netease-youdao/LobsterAI/pull/658)) and advanced message rollback/editing capabilities ([PR #697](https://github.com/netease-youdao/LobsterAI/pull/697)).

## 7. User Feedback Summary
Users are utilizing LobsterAI as a heavily integrated desktop assistant but are experiencing friction with standard desktop-software paradigms (e.g., update loops, startup crashes). The frustration expressed in Issue #1796 regarding failing Write/Edit tools underscores that users rely heavily on the agent's ability to interact with the local file system. The demand for macOS-native keyboard shortcuts ([PR #679](https://github.com/netease-youdao/LobsterAI/pull/679)) indicates a growing adoption among developer and power-user demographics on non-Windows platforms.

## 8. Backlog Watch
Several high-value PRs have been marked `[stale]` and require maintainer attention to prevent contributor churn:
*   **[PR #697](https://github.com/netease-youdao/LobsterAI/pull/697):** Message rollback and edit-regenerate support. This is a highly requested feature for AI chat interfaces and seems complete.
*   **[PR #679](https://github.com/netease-youdao/LobsterAI/pull/679):** Cross-platform shortcut settings. Essential for UX parity across macOS, Windows, and Linux.
*   **[PR #696](https://github.com/netease-youdao/LobsterAI/pull/696):** Fix for Windows auto-start silent exit. Critical for user retention on enterprise Windows machines.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-04-23

## 1. Today's Overview
Moltis experienced a highly active development cycle over the past 24 hours, characterized by a substantial volume of bug fixes and ambitious feature expansions. Maintainers merged 10 pull requests while managing 15 active ones, indicating a rapid iteration velocity. The community remained engaged, submitting 6 issues (with 5 promptly resolved), reflecting a highly responsive maintainership. Activity largely centered around broadening Moltis's integration capabilities (adding Signal and Home Assistant), refining sub-agent capabilities, and patching provider-specific API regressions.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
A total of 10 PRs were merged/closed today, driving significant stability and feature advancements:
*   **Provider & Tooling Fixes:** Fixed a Kimi K2.5 Turbo integration issue with Fireworks via router overrides ([PR #832](https://github.com/moltis-org/moltis/pull/832)), normalized tool schema unions for OpenRouter/Google AI Studio ([PR #833](https://github.com/moltis-org/moltis/pull/833)), preserved Gemini tool call metadata ([PR #836](https://github.com/moltis-org/moltis/pull/836)), and resolved WSL2 Docker sandbox failures ([PR #835](https://github.com/moltis-org/moltis/pull/835)).
*   **Configuration & UI:** Implemented a two-pass config load to correctly resolve `[env]` variables ([PR #834](https://github.com/moltis-org/moltis/pull/834)), integrated bundled skill management into the UI and onboarding ([PR #829](https://github.com/moltis-org/moltis/pull/829)), and added a vault-sealed banner to the main app ([PR #839](https://github.com/moltis-org/moltis/pull/839)).
*   **Documentation:** Streamlined comparative documentation to focus on major competitors like OpenClaw and Hermes ([PR #843](https://github.com/moltis-org/moltis/pull/843)).

## 4. Community Hot Topics
The most impactful community activities revolved around extending Moltis into new communication and smart home platforms, alongside essential bug reports:
*   **Signal Integration ([PR #841](https://github.com/moltis-org/moltis/pull/841)):** A new PR introducing a `signal-cli` channel plugin garnered attention. This highlights a strong community need for privacy-focused, decentralized messaging channels.
*   **Home Assistant Integration ([PR #827](https://github.com/moltis-org/moltis/pull/827)):** Efforts to make Moltis a native smart home hub via a new `moltis-home-assistant` crate show the project's trajectory toward local, agent-driven IoT automation.
*   **Kimi K2.5 Turbo Error ([Issue #810](https://github.com/moltis-org/moltis/issues/810)):** Users pushing Moltis to work with newer, aggressive LLM providers (like Fireworks/Kimi) reported 400 errors, driving necessary fixes to how Moltis handles non-standard provider schemas.

## 5. Bugs & Stability
The team addressed several critical stability and compatibility bugs today, with corresponding fixes merged rapidly:
1.  **[High] WSL2 Docker Sandbox Crash ([Issue #828](https://github.com/moltis-org/moltis/issues/828)):** Docker sandboxes failed on Windows WSL2 due to missing `/sys/class/dmi`. *Fixed in [PR #835](https://github.com/moltis-org/moltis/pull/835).*
2.  **[High] OpenRouter / AI Studio Schema Regression ([Issue #793 reference](https://github.com/moltis-org/moltis/pull/833)):** Non-strict tool schema unions caused API failures. *Fixed in [PR #833](https://github.com/moltis-org/moltis/pull/833).*
3.  **[Medium] Environment Variable Resolution ([Issue #770](https://github.com/moltis-org/moltis/issues/770)):** Certain `${VAR}` placeholders were failing during initialization. *Fixed in [PR #834](https://github.com/moltis-org/moltis/pull/834).*
4.  **[Medium] Disk Exhaustion in Debug Mode ([Issue #823](https://github.com/moltis-org/moltis/issues/823)):** `RUST_LOG=debug` flooded logs with "broadcasting event" messages, risking disk fills for developers. 
5.  **[Medium] Gemini Tool Call Metadata Loss ([Issue #375 reference](https://github.com/moltis-org/moltis/pull/836)):** Metadata was lost during multi-turn tool calls with Gemini. *Fixed in [PR #836](https://github.com/moltis-org/moltis/pull/836).*

## 6. Feature Requests & Roadmap Signals
Several open PRs and issues signal the near-term roadmap for the project:
*   **Auto-Scroll UX Control ([Issue #824](https://github.com/moltis-org/moltis/issues/824)):** A feature request to prevent the UI from auto-scrolling when a user scrolls up in a chat session. This is a common UX requirement for power users reading long outputs.
*   **Sub-Agent Presets ([PR #844](https://github.com/moltis-org/moltis/pull/844)):** Introduction of default `spawn_agent` presets (research, coder, reviewer, QA, UX, docs, coordinator). This strongly signals Moltis is positioning itself as a multi-agent orchestration platform out-of-the-box.
*   **Per-Project Code Indexing ([PR #837](https://github.com/moltis-org/moltis/pull/837)):** Adding a toggle to enable/disable code indexing per project, giving users better control over resource usage and semantic search scopes.
*   **MCP Server Management Skill ([PR #840](https://github.com/moltis-org/moltis/pull/840)):** Bundling an MCP server management skill indicates Moltis is leaning heavily into the Model Context Protocol ecosystem for future tool-use capabilities.

## 7. User Feedback Summary
Users are actively stress-testing Moltis in complex, multi-tool environments and heterogeneous OS setups. Feedback indicates users appreciate the breadth of provider support but occasionally hit edge cases with non-OpenAI standard tool schemas (e.g., Google AI Studio, Kimi, OpenRouter). Additionally, PWA users are encountering dead-ends, such as the 404 error on push message CTAs ([Issue #773](https://github.com/moltis-org/moltis/issues/773)). Overall, the user base appears highly technical, frequently utilizing advanced configurations (WSL2, Fireworks API, custom env vars) and expecting robust, silent background operation.

## 8. Backlog Watch
*   **macOS Code Signing & Notarization ([PR #422](https://github.com/moltis-org/moltis/pull/422), [PR #842](https://github.com/moltis-org/moltis/pull/842)):** An older PR (#422) has been marked as stale and superseded by #842. This is a critical blocker for native macOS adoption and requires maintainer review and merge.
*   **Automated Documentation PRs ([PR #783](https://github.com/moltis-org/moltis/pull/783), [PR #800](https://github.com/moltis-org/moltis/pull/800), [PR #801](https://github.com/moltis-org/moltis/pull/801)):** Multiple "Doc Rotisserie" PRs updating dozens of documentation files are currently open. Maintainers need to batch-review these to keep documentation strictly aligned with the rapid code changes.
*   **Tool Execution Witness Recording ([PR #470](https://github.com/moltis-org/moltis/pull/470)):** A month-old PR adding performance monitoring and audit trails for tool execution. Given today's focus on sub-agents and MCP tools, this infrastructure PR deserves prioritized attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-04-23

## 1. Today's Overview
CoPaw (recently rebranded/evolving into QwenPaw) is experiencing **highly active development and community engagement**, as evidenced by 41 updated issues and 48 updated pull requests in the last 24 hours. The project recently shipped **v1.1.3**, which introduces a major "Backup & Restore" system for agents and memory, signaling a focus on data portability. However, the rapid version progression (from v1.0.2 on PyPI to v1.1.3 locally) and name changes have caused significant user confusion regarding upgrades, packaging, and data migration. Overall, the project is in a hyper-growth phase, balancing the rollout of advanced AI agent features (like semantic routing and dream-memory logging) with the growing pains of desktop deployment stability and cross-platform bugs.

## 2. Releases
*   **v1.1.3** (Released recently, dominating current discussions)
    *   **Added:** Introduced a comprehensive **Backup & Restore** system. Users can now create scoped snapshots of agents, skills, memory, and sessions with per-agent selection, alongside import/export capabilities via `.zip` files ([#3534](https://github.com/agentscope-ai/QwenPaw/pull/3534), [#3655](https://github.com/agentscope-ai/QwenPaw/pull/3655)).
    *   **Migration Notes:** Users upgrading from older versions (especially v1.0.2) or the legacy "CoPaw" name are experiencing confusion. See the *User Feedback* section for migration paths regarding the `.copaw` to `.qwenpaw` directory transition.

## 3. Project Progress
Today saw 27 PRs merged or closed, showing strong momentum in bug fixing and architectural improvements:
*   **Offline/LAN Support:** Closed a highly useful PR to bundle icons locally ([PR #3388](https://github.com/agentscope-ai/QwenPaw/pull/3388)), completely removing dependencies on external Alibaba CDNs for UI assets. This fixes deployment in air-gapped environments.
*   **Channel Integrations:** Merged fixes for the WeChat (iLink) channel, including accepting empty success responses ([PR #3685](https://github.com/agentscope-ai/QwenPaw/pull/3685)) and custom channel/provider icons ([PR #3683](https://github.com/agentscope-ai/QwenPaw/pull/3683)).
*   **Security & Guardrails:** Merged a refactoring of the Tool Guard Approval System ([PR #3656](https://github.com/agentscope-ai/QwenPaw/pull/3656)) and added per-check toggles for the `ShellEvasionGuardian` ([PR #3694](https://github.com/agentscope-ai/QwenPaw/pull/3694)).
*   **Plugin Architecture:** Refactored the plugin system to use dynamic module registration, eliminating the need for generated files ([PR #3696](https://github.com/agentscope-ai/QwenPaw/pull/3696)).

## 4. Community Hot Topics
The community is highly vocal about versioning, model compatibility, and advanced memory features:
*   **Versioning & Upgrade Confusion ([#3637](https://github.com/agentscope-ai/QwenPaw/issues/3637), [#3675](https://github.com/agentscope-ai/QwenPaw/issues/3675)):** The most active discussions revolve around the disconnect between PyPI (v1.0.2) and local releases (v1.1.2/1.1.3). Users are frustrated by unclear upgrade paths and broken UI update mechanisms.
*   **Anthropic Protocol Error ([#3693](https://github.com/agentscope-ai/QwenPaw/issues/3693)):** 13 comments on a bug where using Volcano Codingplan via the Anthropic protocol crashes the agent due to attempting `async for` on a non-streaming object.
*   **Dream Log Output ([#3663](https://github.com/agentscope-ai/QwenPaw/issues/3663)):** A popular feature request (tied to the v1.1.2 dream-memory optimization) asking for "dream logs" so users can see what the agent processed during memory consolidation.

## 5. Bugs & Stability
Several critical bugs have surfaced following the v1.1.3 release, particularly affecting desktop users and specific model protocols:
*   **High Severity: Docker Build Failure in v1.1.3 ([#3695](https://github.com/agentscope-ai/QwenPaw/issues/3695)):** Users are getting a `git: not found` error when building the new Docker image. *(Fix incoming via [PR #3697](https://github.com/agentscope-ai/QwenPaw/pull/3697) which adds Git initialization to the Dockerfile).*
*   **High Severity: MCP Client Freezing Agent ([#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640), [#3642](https://github.com/agentscope-ai/QwenPaw/issues/3642)):** An internal `TaskGroup` exception in the MCP client causes the agent to silently freeze without throwing errors. *(Fix proposed in [PR #3704](https://github.com/agentscope-ai/QwenPaw/pull/3704) addressing empty env values).*
*   **Medium Severity: Desktop Antivirus/SmartScreen Flags ([#3701](https://github.com/agentscope-ai/QwenPaw/issues/3701), [#3314](https://github.com/agentscope-ai/QwenPaw/issues/3314)):** Windows Defender and SmartScreen are flagging the unsigned v1.1.3 desktop installer.
*   **Medium Severity: `write_file` Truncation ([#3687](https://github.com/agentscope-ai/QwenPaw/issues/3687)):** The `write_file` tool silently truncates large HTML files at ~6000 bytes.

## 6. Feature Requests & Roadmap Signals
The community and contributors are pushing the project toward enterprise readiness and deeper customization:
*   **Extensible Memory Backends ([PR #3500](https://github.com/agentscope-ai/QwenPaw/pull/3500)):** Currently under review, this architectural shift will decouple memory from the hardcoded ReMeLight backend, allowing plugins for mem0, Zep, and LangMem. Highly likely to be a cornerstone of the next major release.
*   **Semantic Skill Routing ([PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117)):** Still under active discussion, this PR aims to use embeddings to filter skills dynamically, drastically reducing token consumption for agents with many installed skills.
*   **OpenAI Responses API Support ([#3531](https://github.com/agentscope-ai/QwenPaw/issues/3531)):** Requested for custom providers to align with OpenAI's latest API structures.
*   **Plan Mode ([PR #3686](https://github.com/agentscope-ai/QwenPaw/pull/3686)):** A new PR introducing a planning step for the agent before tool execution.

## 7. User Feedback Summary
Real-world users are highlighting specific pain points regarding deployment and configuration:
*   **Rebranding Friction:** Users are highly confused about the CoPaw to QwenPaw transition, specifically how to migrate environments and memory from `.copaw` to `.qwenpaw` folders ([#3659](https://github.com/agentscope-ai/QwenPaw/issues/3659), [#3598](https://github.com/agentscope-ai/QwenPaw/issues/3598)).
*   **Desktop Packaging:** The desktop app is bulky (506.9MB) and takes too long to build. Users are requesting a lighter-weight executable ([#3682](https://github.com/agentscope-ai/QwenPaw/issues/3682)).
*   **Channel Nuances:** DingTalk users noting that `@` mentions don't trigger the bot properly compared to other platforms ([#3690](https://github.com/agentscope-ai/QwenPaw/issues/3690)).

## 8. Backlog Watch
*   **Max Round Limit Error Handling ([#3338](https://github.com/agentscope-ai/QwenPaw/issues/3338)):** An issue opened 9 days ago pointing out a raw `Error occurred during execution of model` when round limits are hit. It lacks an apparent fix PR or recent maintainer comment, leaving a rough edge on agent lifecycle management.
*   **WebView2 Crashes on Windows ([#3601](https://github.com/agentscope-ai/QwenPaw/issues/3601)):** Users experiencing white screens on Windows desktop clients due to WebView2 casting exceptions. This needs targeted attention for the desktop deployment track.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

Here is the project digest for ZeptoClaw based on the provided data for April 23, 2026.

### 1. Today's Overview
Project activity for ZeptoClaw over the last 24 hours shows a strong, focused internal development cycle, evidenced by **6 new pull requests** opened by a single core contributor. The project did not merge any PRs, close any issues, or publish new releases today, indicating that current work is part of a larger, ongoing development sprint. The daily activity is heavily focused on hardening the agent's security posture (audit trails, SSRF protections) and improving evaluation benchmarks. Overall project health appears stable but highly iterative at the moment. 

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Project Progress
While no PRs were merged or closed today, a significant volume of new code was proposed. The progression of these open PRs indicates that the team is prioritizing security, architecture scalability, and QA tooling:
*   **Agent Security & Integrity:** Three substantial PRs were opened to lock down agent operations. This includes adding an in-memory hash-chain audit trail for tool execution ([PR #528](https://github.com/qhkm/zeptoclaw/pull/528)), enforcing SHA256 verification paths for downloaded skills ([PR #526](https://github.com/qhkm/zeptoclaw/pull/526)), and adding config-time SSRF endpoint validation ([PR #527](https://github.com/qhkm/zeptoclaw/pull/527)).
*   **Architecture & Testing:** Foundations are being laid for better contributor workflows and agent evaluation via a new coding benchmark fixture ([PR #524](https://github.com/qhkm/zeptoclaw/pull/524)). Additionally, an architectural evaluation regarding the adoption of a utility/lib crate was submitted with a final decision to *not* adopt one to avoid migration risks and maintain parity ([PR #525](https://github.com/qhkm/zeptoclaw/pull/525)).
*   **Bug Fixes:** A compatibility fix for legacy Telegram configuration keys was submitted ([PR #523](https://github.com/qhkm/zeptoclaw/pull/523)). 

### 4. Community Hot Topics
Community engagement appears dormant today, with **0 comments** and **0 reactions** across all issues and pull requests. All current activity is driven by a single core developer (`manelsen`). While there are no community "hot topics" to analyze from today's data, the volume of code pushed by the maintainer suggests deep focus work rather than community-facing feature development.

### 5. Bugs & Stability
*   **Telegram Configuration Regression:** [PR #523](https://github.com/qhkm/zeptoclaw/pull/523) addresses a bug where legacy Telegram config keys broke compatibility. The fix introduces smart inference (inferring `enabled = true` when a token is present). *Severity: Low* (does not affect core agent execution, limited to a specific channel integration).

### 6. Feature Requests & Roadmap Signals
Based on the open PRs, the short-term roadmap heavily favors **agent safety, verifiability, and benchmarking**. 
*   **Tool Execution Auditing:** The introduction of a SHA-256 hash chain in [PR #528](https://github.com/qhkm/zeptoclaw/pull/528) signals that ZeptoClaw is moving toward enterprise-grade tool execution logging, which is a critical requirement for autonomous AI agents in production environments. 
*   **Network & Skill Security:** The SSRF validation ([PR #527](https://github.com/qhkm/zeptoclaw/pull/527)) and skill download verification ([PR #526](https://github.com/qhkm/zeptoclaw/pull/526)) show a proactive approach to securing how the agent reaches out to the web and third-party skill repositories.
*   **Performance Tracking:** [PR #524](https://github.com/qhkm/zeptoclaw/pull/524) signals an upcoming focus on comparing agent performance, suggesting ZeptoClaw may be tuning its core models or prompting strategies.

### 7. User Feedback Summary
Due to zero user comments, reactions, or new issues opened in the last 24 hours, there is no direct user feedback to summarize for this reporting period.

### 8. Backlog Watch
*   **Maintainer Bottleneck:** With 6 detailed PRs opened in a single day by one developer (`manelsen`) and zero PRs merged, the project risks a review bottleneck. Maintainers should prioritize reviewing these PRs to prevent the open PR count from growing unmanageably.
*   **Architectural Decision Pending Merge:** [PR #525](https://github.com/qhkm/zeptoclaw/pull/525) contains a crucial architectural decision to avoid adopting a utility/lib crate. Finalizing and merging this documentation is important to set boundaries for future contributors.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

# EasyClaw Project Digest: 2026-04-23

## 1. Today's Overview
The EasyClaw project is currently experiencing a **release-heavy but community-quiet phase**. Over the last 24 hours, the repository saw zero new issues opened and zero pull requests updated, indicating a temporary lull in community-driven code contributions and bug reporting. However, this low interaction volume is offset by significant release activity, with the maintainers shipping three rapid-fire updates (versions 1.8.3, 1.8.5, and 1.8.6) directly to users. Overall, the project's core engine appears to be under active, focused development by internal contributors, while the broader open-source community remains in a passive, consumption-oriented state today.

## 2. Releases
Maintainers have shipped three minor/patch versions within a short window, signaling active stabilization efforts. The most recent versions focus heavily on onboarding and OS-specific deployments:

*   **[v1.8.6: RivonClaw v1.8.6](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.6)**
*   **[v1.8.5: RivonClaw v1.8.5](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.5)**
*   **[v1.8.3: RivonClaw v1.8.3](https://github.com/gaoyangz77/easyclaw/releases/tag/v1.8.3)**

**Key Changes & Focus:**
The release notes across all three versions prominently feature updated installation instructions, specifically addressing **macOS Gatekeeper friction**. The documentation now includes detailed, bilingual (English/Chinese) workarounds for the common "'RivonClaw' is damaged and can't be opened" error, instructing users on how to bypass Apple's unsigned app quarantine via Terminal. *No explicit breaking changes or complex migration notes were included in these patches, suggesting they are iterative stability or UI/UX updates building on a core v1.8 architecture.*

## 3. Project Progress
**No active development progress was observed via Pull Requests today.** With 0 PRs opened, merged, or closed, it can be deduced that the recent v1.8.x updates were either pushed directly to the release branch by core maintainers or resulted from PRs merged in previous days. The lack of public PR activity makes it difficult to assess specifically which features or underlying bug fixes advanced in the codebase over the last 24 hours.

## 4. Community Hot Topics
**No active hot topics today.** Because there were 0 updated or newly opened Issues and PRs, community engagement on the repository's discussion boards is currently stagnant. The most recent "hot topic" is effectively being driven by the release notes themselves, specifically how to successfully install the application on macOS. 

## 5. Bugs & Stability
*   **macOS Gatekeeper False Positives:** While not reported via GitHub Issues today, the release notes for v1.8.3 through v1.8.6 confirm that macOS users are consistently triggering a "damaged and can't be opened" error. This is an OS-level security block against unsigned binaries. 
    *   *Status:* Addressed via documentation/workarounds in the release notes, rather than a code-level fix (which would require Apple Developer Code Signing).
*   **No Regressions Reported:** Zero bug reports were filed in the Issues tracker in the last 24 hours, which is a positive sign for the stability of the v1.8.5 and v1.8.6 patches.

## 6. Feature Requests & Roadmap Signals
Because user interaction via Issues was at 0% today, there are no explicit feature requests to report. However, the rapid iteration from v1.8.3 to v1.8.6 serves as a **roadmap signal from the maintainers**. It indicates that the current development phase is highly focused on **distribution polish, user onboarding, and platform compatibility**. The next logical step for the project will likely involve securing an Apple Developer Certificate to eliminate the macOS Gatekeeper friction entirely.

## 7. User Feedback Summary
Current user friction can be inferred entirely from the release notes:
*   **Pain Point:** The primary user pain point right now is the installation barrier on macOS. Users downloading the RivonClaw binary are likely panicking when macOS labels the app as "damaged."
*   **Maintainer Response:** The maintainers are actively addressing this by providing clear, bilingual Terminal commands to bypass Gatekeeper, showing a responsive attitude to user confusion.

## 8. Backlog Watch
With no active Issues or PRs moving today, the backlog status remains unchanged. However, maintainers should be cautious of the **"Zero Community Feedback" effect**. Releasing three versions in rapid succession without corresponding GitHub Issues could mean users are reporting bugs on alternative platforms (like Discord, WeChat, or email) rather than the GitHub repository. The maintainers should ensure that the GitHub Issue templates are easily accessible to funnel external feedback back into the open-source tracker.

</details>