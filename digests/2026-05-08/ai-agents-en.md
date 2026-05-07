# OpenClaw Ecosystem Digest 2026-05-08

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-07 22:18 UTC

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

# OpenClaw Project Digest — 2026-05-08

## 1. Today's Overview
OpenClaw is experiencing a very high-velocity development cycle, evidenced by 500 issues and 500 pull requests updated within the last 24 hours. However, the project is showing signs of growing pains typical of rapidly expanding open-source ecosystems, as a disproportionate ratio of PRs remain open (354 open vs. 146 merged/closed). This indicates that the core maintainers might be facing a review bottleneck, despite actively pushing releases. The majority of current engineering focus appears to be routed toward architectural refactoring (specifically state management), hardening the multi-channel gateway, and quelling a wave of regression bugs introduced in the recent `2026.5.4` to `2026.5.6` updates.

## 2. Releases
- **v2026.5.7:** Released to address tooling and publishing pipeline friction. 
  - **Changes:** Introduces retry logic for transient ClawHub CLI dependency installation failures. It also alters the plugin publishing flow to keep preview-passing plugins publishable even if one preview cell flakes, and adds verification for expected ClawHub package versions post-publish.
  - **Impact:** This is purely a developer/maintainer tooling release designed to make maintenance releases faster and more resilient to CI flakiness, with no direct end-user breaking changes.

## 3. Project Progress
The project is undergoing a massive architectural overhaul alongside standard bug fixing.
*   **Architectural Refactoring (SQLite Migration):** The most significant ongoing effort is PR [#78595](https://github.com/openclaw/openclaw/pull/78595), which migrates OpenClaw's runtime state from scattered JSON, JSONL, and sidecar SQLite files into a typed SQLite storage model. This aims to resolve long-standing state and truncation-repair issues.
*   **Centralizing Channel Ingress:** PR [#79092](https://github.com/openclaw/openclaw/pull/79092) centralizes channel ingress access across 16+ platforms (Discord, Telegram, WhatsApp, etc.) to standardize allowlists, routing, and redacted diagnostics.
*   **Failover and Circuit Breakers:** PR [#78086](https://github.com/openclaw/openclaw/pull/78086) introduced state-aware failover and lane suspension to prevent infinite retry loops that waste API credits.
*   **Channel Fixes:** Merged fixes for Telegram delivery projections ([PR #78261](https://github.com/openclaw/openclaw/pull/78261)), WhatsApp reconnect loops ([PR #75773](https://github.com/openclaw/openclaw/pull/75773)), and macOS LaunchAgent KeepAlive recovery ([PR #78412](https://github.com/openclaw/openclaw/pull/78412)).
*   **Localization:** Initial CLI Wizard i18n support for Chinese users was added ([PR #79016](https://github.com/openclaw/openclaw/pull/79016)).

## 4. Community Hot Topics
*   **Android Companion App Demand:** Issue [#9443](https://github.com/openclaw/openclaw/issues/9443) (24 comments) remains a highly active feature request. Users are asking for prebuilt Android APKs, highlighting a strong desire for a seamless mobile onboarding experience without requiring users to compile from source.
*   **WeChat & Feishu Integration Stability:** Upgrades in recent versions have severely broken Chinese messaging platforms. Issue [#78232](https://github.com/openclaw/openclaw/issues/78232) (11 comments) details how API changes broke WeChat inbound processing, while Issue [#78262](https://github.com/openclaw/openclaw/issues/78262) (6 comments) highlights session key mismatches in Feishu. This points to underlying instability in the domestic Asian channel integrations.
*   **Security and Access Control:** Issue [#10659](https://github.com/openclaw/openclaw/issues/10659) (12 comments, 4 👍) requests "Masked Secrets" to prevent the AI agent from reading raw API keys, protecting against prompt injection credential theft. Similarly, Issue [#6615](https://github.com/openclaw/openclaw/issues/6615) (7 comments, 7 👍) requests an exec-approval denylist.

## 5. Bugs & Stability
Recent releases have introduced several severe regressions, though community fix PRs are actively countering them:
*   **Critical - `openclaw doctor` OAuth Lockout:** Issue [#78407](https://github.com/openclaw/openclaw/issues/78407). Updating to `2026.5.5` causes the auto-fix doctor to rewrite `openai-codex/*` model refs to `openai/*`, locking out ChatGPT-OAuth users. 
*   **Critical - Gateway Event-Loop Starvation:** Issue [#78402](https://github.com/openclaw/openclaw/issues/78402). Upgrading to `2026.5.5` causes the local gateway to become unresponsive due to event-loop starvation from stuck tool calls, closing WebSocket connections rapidly. PR [#78086](https://github.com/openclaw/openclaw/pull/78086) (Failover/Lane suspension) aims to mitigate this class of issue.
*   **High - High CPU / RPC Latency:** Issue [#76562](https://github.com/openclaw/openclaw/issues/76562). Upgrading to `2026.4.29`/`2026.5.2` causes CPU to pin at 100% and control-plane RPC instability. 
*   **Medium - Overly Aggressive Compaction:** Issue [#78604](https://github.com/openclaw/openclaw/issues/78604). A bug in `5.5/5.6` forces context compaction every ~5 minutes instead of 30 minutes, causing severe context loss for users.
*   **Medium - Bedrock Auth Regression:** Issue [#77551](https://github.com/openclaw/openclaw/issues/77551). AWS credential file refreshes are no longer picked up by the gateway without manual restarts.

## 6. Feature Requests & Roadmap Signals
Based on the highest-traction open issues, upcoming versions will likely focus on:
*   **Advanced Security Scoping:** Implementing consent envelopes for MCP tool calls ([Issue #78308](https://github.com/openclaw/openclaw/issues/78308)) and robust exec-allow/deny lists. 
*   **Cost Controls:** Adding per-hour spending ceilings to prevent runaway failover costs ([Issue #38248](https://github.com/openclaw/openclaw/issues/38248)).
*   **Sub-Agent Orchestration:** Enhancing multi-agent workflows by allowing `announceTarget` routing ([Issue #27445](https://github.com/openclaw/openclaw/issues/27445)) and suppressing sub-agent "noise" ([Issue #8299](https://github.com/openclaw/openclaw/issues/8299)).
*   **Native Mobile Offerings:** Providing pre-compiled APKs for Android users.

## 7. User Feedback Summary
**User Pain Points:**
*   **State & Context Loss:** Users are incredibly frustrated by unexpected context compaction and session resets, often losing agent state mid-task (Issue [#2597](https://github.com/openclaw/openclaw/issues/2597)).
*   **Runaway Costs:** Users are expressing anxiety over the lack of a "kill switch" when primary models fail and the system autonomously falls back to extremely expensive models without warning (Issue [#38248](https://github.com/openclaw/openclaw/issues/38248)).
*   **Media Handling:** Base64 image storage in transcripts is polluting the context window, and silently dropping failed media uploads creates a confusing user experience (Issue [#1210](https://github.com/openclaw/openclaw/issues/1210)).

**Satisfaction:**
The community is highly engaged and submitting sophisticated PRs (like SQLite refactoring and lane suspension mechanisms). The project's broad multi-channel support is highly valued, but the rapid release cadence is introducing friction via regression bugs that disrupt daily users.

## 8. Backlog Watch
*   **Long-Standing Multi-Channel Regressions:** The ongoing Gemini reasoning leak ([Issue #41494](https://github.com/openclaw/openclaw/issues/41494)) and Telegram reaction context failures ([Issue #64752](https://github.com/openclaw/openclaw/issues/64752)) have been open for weeks without a definitive fix.
*   **Review Bottleneck:** There is an overwhelming volume of PRs labeled `triage: needs-real-behavior-proof` (e.g., PR [#69312](https://github.com/openclaw/openclaw/pull/69312), PR [#74051](https://github.com/openclaw/openclaw/pull/74051)). Maintainers need to address this verification bottleneck to get community fixes merged faster.
*   **Security Architecture:** Issue [#8719](https://github.com/openclaw/openclaw/issues/8719) proposes a comprehensive "Data-centric, secure-by-default" security model for OpenClaw. Despite high community interest (6 comments, 3 👍), it requires formal maintainer feedback to establish a roadmap for plugin permissions and data exfiltration protections.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report analyzing the open-source AI agent and personal assistant ecosystem based on the May 8, 2026 community digests.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing rapid maturation, characterized by aggressive architectural overhauls and a race toward ubiquitous multi-channel integration. Projects are evolving from simple chat wrappers into complex, stateful automation platforms, driving heavy investments in robust memory management (specifically migrating to SQLite) and secure execution sandboxes. A clear bifurcation is emerging between enterprise-focused platforms prioritizing multi-tenant scaling (IronClaw, Moltis) and community-driven frameworks focused on local-first execution and diverse messaging platform integrations (OpenClaw, NanoBot). Across the board, maintainers are grappling with the growing pains of rapid iteration, balancing high-velocity feature releases with urgent triage for provider API regressions and context-compaction bugs.

## 2. Activity Comparison

*Health Score is rated 1-5 (5 = Excellent/High Velocity, 1 = Stalled/Critical Bottlenecks) based on PR/Issue ratios, release cadence, and maintainer responsiveness.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 updated | 500 updated (146 merged) | **v2026.5.7** Released | 3.5 (Review bottleneck) |
| **Hermes Agent** | 50 updated (45 open) | 50 updated (44 open) | **v0.13.0** Released | 4.5 (Massive release day) |
| **LobsterAI** | 2 new open | 36 merged, 9 open | **2026.5.7** Released | 4.8 (Highly coordinated) |
| **CoPaw** | 50 updated (20 closed) | 33 updated (22 merged) | No Release | 4.0 (Active stabilization) |
| **IronClaw** | 23 active | 50 updated | **v0.28.0** Released | 4.0 (Major infra overhaul) |
| **PicoClaw** | 36 processed (22 closed) | 50 updated (18 merged) | **Nightly** Build | 4.5 (Excellent momentum) |
| **NanoClaw** | 5 processed | 31 processed (23 merged) | No Release | 4.5 (Rapid core fixing) |
| **NanoBot** | 10 processed | 30 active | No Release | 4.0 (Solid contributor base) |
| **Moltis** | 4 closed | 10 processed (9 merged) | **2 Releases** (Sequential) | 5.0 (Exceptional CI/CD) |
| **NullClaw** | 6 updated | 7 updated | No Release | 3.5 (Low volume, moderate) |
| **ZeroClaw** | 50 updated (0 closed) | 50 updated (0 merged) | No Release | 1.5 (Maintainer bottleneck) |
| **TinyClaw / ZeptoClaw**| 0 | 0 | Inactive | N/A |

## 3. OpenClaw's Position

**Advantages vs Peers:**
OpenClaw remains the core reference implementation with the largest raw volume of community interaction (500+ issues/PRs daily). Its primary advantage is its vast multi-channel gateway, supporting 16+ platforms, outpacing competitors like Hermes (which is still building Teams/Telegram integrations) and LobsterAI (which struggles with WeChat UI flows). 

**Technical Approach Differences:**
Unlike Hermes or IronClaw, which are executing ground-up architectural rewrites (WASM boundaries, Rust utility migrations), OpenClaw is tackling its technical debt via massive in-place refactoring—specifically, centralizing channel ingress and migrating state management from JSON to a typed SQLite model. 

**Community Size Comparison:**
While OpenClaw's community generates massive ticket volume, its operational efficiency is currently lagging. With 354 open PRs versus 146 merged/closed, it is experiencing a severe triage bottleneck similar to ZeroClaw. In contrast, similarly sized communities like LobsterAI and PicoClaw demonstrate vastly superior maintainer responsiveness, cleanly merging dozens of PRs daily.

## 4. Shared Technical Focus Areas

*   **State & Context Persistence (All Projects):** The transition from volatile JSON to robust SQLite/DB backends is ubiquitous. Projects are actively fighting context-loss bugs (NanoBot, CoPaw, NanoClaw, OpenClaw) and solving agent-amnesia following compaction events. 
*   **MCP Reliability & Security (OpenClaw, PicoClaw, Moltis, CoPaw):** Standardizing Model Context Protocol (MCP) implementations is a major focus. Projects are rushing to fix null-object schema rejections (PicoClaw), implement schema sanitization to prevent prompt injection (Hermes), and build dedicated secrets management stores (PicoClaw).
*   **Local-First, Sandbox, and agentic Runtimes (Moltis, Hermes, IronClaw):** Securing the execution environment is paramount. Moltis introduced multi-backend remote sandboxing (Daytona, Firecracker), IronClaw implemented WASM boundaries, and PicoClaw is refining its `bwrap` mounts.
*   **API Provider Fragility (OpenClaw, PicoClaw, ZeroClaw, LobsterAI):** The ecosystem is heavily burdened by third-party API changes. OpenClaw, PicoClaw, and LobsterAI are fighting fires caused by Anthropic/OpenAI updates, while ZeroClaw and Hermes report critical breakages with local providers like `llama.cpp` and vLLM.

## 5. Differentiation Analysis

*   **Enterprise vs. Consumer:** IronClaw and Moltis are leaning heavily into enterprise-grade features (multi-tenant workspace isolation, A2A identity verification). Meanwhile, CoPaw, NanoBot, and LobsterAI are focused on consumer/prosumer UIs, chat history rendering, and seamless WeChat/WhatsApp integrations.
*   **The "Local-First" Niche:** NullClaw and ZeroClaw specifically target users running agents on low-resource or strictly local hardware. NullClaw is optimizing for lightweight web search (DuckDuckGo over Brave), whereas ZeroClaw is heavily investing in native macOS Tauri desktop integrations.
*   **Agentic Routers vs. Monolithic Assistants:** NanoClaw and Hermes are highly focused on Agent-to-Agent (A2A) routing and multi-agent orchestration (e.g., skills routing, autonomous model switching). In contrast, OpenClaw and PicoClaw operate more as monolithic, highly capable personal assistants connecting a single agent logic to multiple chat channels.

## 6. Community Momentum & Maturity

*   **Tier 1: Rapid Iterators & Expanding (Moltis, LobsterAI, PicoClaw, NanoClaw, Hermes):** These projects show high merge rates, rapid responses to bugs, and highly coordinated sprint cycles. Hermes' v0.13.0 release is a massive community effort, while Moltis and LobsterAI demonstrate sophisticated, automated CI/CD pipelines.
*   **Tier 2: Scaling & Stabilizing (OpenClaw, IronClaw, CoPaw, NanoBot):** These projects have large user bases but are hitting scaling frictions. OpenClaw is weighed down by PR triage. IronClaw is navigating a massive architectural migration that is temporarily impacting production stability. CoPaw is actively patching UI/memory leaks ahead of an anticipated release.
*   **Tier 3: Stalled or Niche (ZeroClaw, NullClaw):** ZeroClaw is currently facing a crisis of momentum, with 50 PRs and 50 Issues updated over 24 hours yielding *zero* merges or closures. NullClaw maintains a slower pace focused on specific lightweight architectures.

## 7. Trend Signals

1.  **The Cost of Context Windows is a Primary User Annoyance:** Across OpenClaw, Hermes, PicoClaw, and CoPaw, users are expressing severe frustration with runaway API costs, a lack of "kill switches," and degraded AI performance due to aggressive context compaction. For developers, building smarter, cost-aware proactive compaction (rather than reactive truncation) is a critical unmet need.
2.  **The Rise of the "Agentic Desktop":** The shift away from terminal UIs (TUI) and web browsers toward native OS integration is accelerating. ZeroClaw’s heavy Tauri menu-bar push and OpenClaw’s demand for prebuilt Android APKs indicate that users want persistent, OS-level background agents rather than browser tabs.
3.  **Web Search is Becoming a Local Right, Not a Privilege:** High demand for privacy-focused web search is driving projects away from API-dependent tools. The community is loudly requesting native SearXNG (Hermes), DuckDuckGo (NullClaw), and Brave Search integrations to reduce reliance on Bing/Google endpoints. 
4.  **Critical Friction in Cross-Platform Routing:** As agents become active on Telegram, Slack, Email, and SMS simultaneously, session routing is breaking. NanoClaw and OpenClaw are actively fighting "split-brain" session bugs. AI developers need to treat "Channel" as a first-class routing object in session state management.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-08

## 1. Today's Overview
NanoBot demonstrates robust and sustained developer momentum with 30 active or recently updated Pull Requests and 10 Issues processed in the past 24 hours. The development focus is currently bifurcated between hardening core stability—specifically memory management, WebSocket reliability, and error logging—and expanding channel integrations. Community contributions are highly active, driving both complex architectural refactors (like context window handling) and vital bug fixes. Overall, project health appears strong, characterized by rapid bug resolution and a collaborative, iterative approach to enhancing the AI agent framework.

## 2. Releases
No new official releases were published today. The project continues to iterate actively on its `main` and `nightly` branches ahead of a potential next stable release.

## 3. Project Progress
Several key Pull Requests were merged or closed today, advancing the project's stability and code quality:
*   **SSE Streaming Fixed:** [PR #3677](https://github.com/HKUDS/nanobot/pull/3677) resolved a critical issue where HTTP compression buffering in aiohttp was batching Server-Sent Events (SSE), restoring real-time incremental streaming to WebUI users.
*   **Dream State Restoration:** [PR #3660](https://github.com/HKUDS/nanobot/pull/3660) improved the Dream memory module by tracking the `.dream_cursor` in the GitStore, ensuring that memory restores correctly roll back the cursor alongside memory files.
*   **LLM Backend Flexibility:** [PR #1835](https://github.com/HKUDS/nanobot/pull/1835) was finally merged, introducing support for sending arbitrary additional arguments (like `"stream": false`) to backend LLMs such as Ollama.
*   **Codebase Hardening:** [PR #3672](https://github.com/HKUDS/nanobot/pull/3672) upgraded CI pipelines to enforce full Ruff `F` rule checks, eliminating dead code and improving static analysis. Additionally, [PR #3678](https://github.com/HKUDS/nanobot/pull/3678) normalized error logging by replacing generic `logger.error` with `logger.exception` to ensure stack traces are preserved during failures.

## 4. Community Hot Topics
The most engaging discussions center on UI customization, channel integration gaps, and context window management:
*   **Agent Branding:** [Issue #3650](https://github.com/HKUDS/nanobot/issues/3650) requests configurable bot names and icons (replacing the default "nanobot is thinking..." and cat icon). This highlights a strong community need for white-labeling capabilities.
*   **Dream Module Control:** [Issue #3652](https://github.com/HKUDS/nanobot/issues/3652) sparked discussion on adding an `enabled` flag to completely disable the Dream module, indicating users desire more granular control over background agent processes.
*   **WhatsApp Integration:** [Issue #3688](https://github.com/HKUDS/nanobot/issues/3688) discusses adding a `/sync-meta` command to push conversational components to Meta, addressing a specific friction point where users don't see slash command suggestions in the WhatsApp UI.
*   **Prompt Scaffolding Leak:** [Issue #3670](https://github.com/HKUDS/nanobot/issues/3670) details an issue on the `nightly` branch where internal runtime-context prompts escape into the persisted chat history, creating a polluted user experience.

## 5. Bugs & Stability
Today's bug reports highlight vulnerabilities in external communications and memory persistence, though maintainers and contributors are actively addressing them:
*   **High Severity - WebSocket Instability:** [Issue #3682](https://github.com/HKUDS/nanobot/issues/3682) and [Issue #3683](https://github.com/HKUDS/nanobot/issues/3683) report frequent WebSocket handshake failures and cross-platform browser access issues. *Mitigation: Currently under active investigation.*
*   **High Severity - Context History Loss:** [Issue #3670](https://github.com/HKUDS/nanobot/issues/3670) (Prompt scaffolding leak) and [PR #3680](https://github.com/HKUDS/nanobot/pull/3680) (Corrupted session files dropping history) severely impact conversation coherence. *Mitigation: PR #3680, [PR #3687](https://github.com/HKUDS/nanobot/pull/3687) (Fix consolidation history window), and [PR #3686](https://github.com/HKUDS/nanobot/pull/3686) (Unify archiving paths) are actively seeking merge to resolve these memory engine bugs.*
*   **Medium Severity - LLM Timeouts & API Bugs:** [Issue #3681](https://github.com/HKUDS/nanobot/issues/3681) notes persistent `300s` timeouts, and [Issue #3665](https://github.com/HKUDS/nanobot/issues/3665) notes errors with `deepseek-v4-flash` requiring `reasoning_content` to be passed back.
*   **Medium Severity - Silent Channel Drops:** WebSocket media files being silently dropped ([Issue #3674](https://github.com/HKSDS/nanobot/issues/3674)) and WeChat/Matrix silently swallowing exceptions. *Mitigation: Actively addressed in [PR #3684](https://github.com/HKUDS/nanobot/pull/3684) and [PR #3664](https://github.com/HKUDS/nanobot/pull/3664).*

## 6. Feature Requests & Roadmap Signals
Based on active open PRs and Issues, the near-term roadmap is heavily focused on multi-channel expansion and refined agent context handling:
*   **Local-First Voice Processing:** [PR #3513](https://github.com/HKUDS/nanobot/pull/3513) aims to unify transcription providers and introduce local Whisper server support. This is a response to [Issue #3604](https://github.com/HKUDS/nanobot/issues/3604) (WhatsApp voice failures) and signals a shift toward self-hosted audio capabilities.
*   **New Messaging Channels:** The pending merge of [PR #3486](https://github.com/HKUDS/nanobot/pull/3486) (SimpleX) alongside active fixes for WeChat and WhatsApp indicates a massive push toward ubiquitous cross-platform messaging support.
*   **Advanced Sandbox Customization:** [PR #3642](https://github.com/HKUDS/nanobot/pull/3642) introduces custom `bwrap` bind mounts for the execution sandbox, signaling an upcoming focus on highly customizable, secure execution environments for enterprise or advanced local users.

## 7. User Feedback Summary
Users are deploying NanoBot in diverse, multi-platform environments, heavily utilizing WebUI, WhatsApp, and WeChat. The primary user pain points currently revolve around **reliability in edge cases**: specifically, browser-specific WebSocket connection failures, custom model timeouts, and context amnesia after restarting the bot. However, the rapid turnaround on issues—such as the immediate acknowledgment of DeepSeek API handling and SSE streaming batching—reflects a high degree of user satisfaction with the project's responsiveness. 

## 8. Backlog Watch
The following substantial contributions have been pending for an extended period and require maintainer attention to prevent contributor churn:
*   **[PR #1443](https://github.com/HKUDS/nanobot/pull/3643) feat: decouple heartbeat reasoning from notification:** Open since March 2026. A highly requested architectural change that saves user tokens by silencing heartbeat reasoning unless explicitly configured.
*   **[PR #3513](https://github.com/HKUDS/nanobot/pull/3513) feat(audio): unify transcription providers:** Open since late April. A massive structural improvement to audio handling that needs a final review push.
*   **[PR #1219](https://github.com/HKUDS/nanobot/pull/1219) Add stock market analysis skills:** Open since late February 2026. This large PR brings new workspace documentation, test coverage, and analytical skills. It has stalled and requires maintainer feedback regarding its fit for the core project.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-08

## 1. Today's Overview
The Hermes Agent project is experiencing exceptionally high activity, coinciding with the rollout of the major **v0.13.0** release. In the last 24 hours, the repository saw 50 updated issues (45 open) and 50 updated pull requests (44 open), indicating a massive community testing surge following the new release. The volume of new bug reports suggests a rigorous community stress-testing the new boundaries of the tool. Overall project health is highly robust, backed by a staggering 295 community contributors in the latest release cycle alone.

## 2. Releases
*   **v2026.5.7: Hermes Agent v0.13.0 (The Tenacity Release)**
    *   **Scope:** A massive milestone encompassing 864 commits, 588 merged PRs, 128,366 lines of code changes across 829 files.
    *   **Highlights:** Branded "The Tenacity Release," implying major improvements in agent execution, tool finishing rates, and underlying gateway reliability.
    *   **Bugs Squashed:** Closed 282 issues, including 13 critical (P0) and 36 high-priority (P1) bugs.
    *   **Migration Notes:** Users and server admins should be aware of recurring database migration bugs with this release (specifically regarding SQLite in the embedded Kanban dispatcher). It is highly recommended to back up local databases before auto-updating.

## 3. Project Progress
While the vast majority of today's 50 PRs are newly opened against v0.13.0, several key PRs were merged or advanced, focusing heavily on **platform gateway stability** and **tool integration**:
*   **Microsoft Teams Pipeline:** A massive 5-part PR stack ([#21409](https://github.com/NousResearch/hermes-agent/pull/21409), [#21410](https://github.com/NousResearch/hermes-agent/pull/21410), [#21411](https://github.com/NousResearch/hermes-agent/pull/21411), [#21412](https://github.com/NousResearch/hermes-agent/pull/21412)) was introduced to add webhook listeners, pipeline runtimes, and outbound delivery for Teams.
*   **Security & Sanitization:** Advanced PR [#21533](https://github.com/NousResearch/hermes-agent/pull/21533) to recursively sanitize untrusted MCP tool descriptions, preventing potential prompt injection via tool schemas.
*   **Local Model Support:** Introduced a first-class `llama.cpp` provider in PR [#21531](https://github.com/NousResearch/hermes-agent/pull/21531), allowing zero-config dashboard surfacing for local LLM users.

## 4. Community Hot Topics
The community is actively discussing agent autonomy, model routing, and privacy-focused tooling:
*   **Brave Search Integration:** Issue [#10644](https://github.com/NousResearch/hermes-agent/issues/10644) (👍 22) and corresponding PR [#20989](https://github.com/NousResearch/hermes-agent/pull/20989) are trending, driven by user demand for a cost-effective, privacy-focused native web search backend.
*   **Autonomous Model Routing:** Issue [#16525](https://github.com/NousResearch/hermes-agent/issues/16525) proposes exposing `model_switch` as an agent-callable tool. This would allow the AI to autonomously upgrade its own model (e.g., from Haiku to Opus) based on the complexity of the user's prompt.
*   **Multi-Telegram Bot Routing:** Issue [#10452](https://github.com/NousResearch/hermes-agent/issues/10452) requests support for routing multiple Telegram bots through a single gateway, highlighting a common enterprise/power-user need.

## 5. Bugs & Stability
The rollout of v0.13.0 has brought several critical (P1/P2) bugs to light, primarily around platform gateways, installation, and database migrations:
*   **P1 - TUI Subprocess Leaks:** Issue [#21467](https://github.com/NousResearch/hermes-agent/issues/21467) reports that the `tui_gateway.slash_worker` leaks subprocesses under dashboard usage, consuming up to 7.8GB of RAM.
*   **P1 - CLI Infinite Install Loop:** Issue [#21454](https://github.com/NousResearch/hermes-agent/issues/21454) notes that re-running `install.sh` on older setups creates an infinite-loop bash shim, breaking the CLI entirely. 
*   **P1 - Telegram Permanent Silences:** Issues [#17063](https://github.com/NousResearch/hermes-agent/issues/17063) and [#18086](https://github.com/NousResearch/hermes-agent/issues/18086) report that transient network blips cause the Telegram gateway to permanently stop reconnecting.
*   **P2 - Kanban Migration Crashes:** Issues [#20842](https://github.com/NousResearch/hermes-agent/issues/20842) and [#21503](https://github.com/NousResearch/hermes-agent/issues/21503) report SQLite migration errors (`no such column`, non-idempotent `ALTER TABLE`). *Fix available in PR [#21529](https://github.com/NousResearch/hermes-agent/pull/21529).*
*   **P2 - Custom Provider Token Limits:** Issue [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) notes that `max_output_tokens` is silently dropped for custom providers, defaulting to 2048 tokens.

## 6. Feature Requests & Roadmap Signals
Based on current issue velocity, the following areas are likely to see major development in upcoming patches/minor versions:
*   **Web Search Expansion:** Alongside the impending merge of Brave Search, users are actively requesting SearXNG (Issue [#5941](https://github.com/NousResearch/hermes-agent/issues/5941), 👍 28) and Ollama web search (Issue [#21508](https://github.com/NousResearch/hermes-agent/issues/21508)) as native backends.
*   **Proactive Agent Capabilities:** Issue [#9645](https://github.com/NousResearch/hermes-agent/issues/9645) proposes "budget-aware" proactive check-ins, signaling a shift from reactive chat interfaces to persistent, background AI assistants.
*   **Plugin & Runtime Hooks:** A strong demand for deeper plugin architectures is visible in Issue [#18148](https://github.com/NousResearch/hermes-agent/issues/18148) (runtime extension hooks) and Issue [#18988](https://github.com/NousResearch/hermes-agent/issues/18988) (`pre_tool_call` argument rewriting).

## 7. User Feedback Summary
Users are heavily utilizing Hermes in multi-platform, automated environments but are encountering friction with configuration and edge-case network handling:
*   **Local LLM Frustrations:** Users running 100% locally via Ollama and WSL2 (Issue [#21524](https://github.com/NousResearch/hermes-agent/issues/21524), Issue [#14420](https://github.com/NousResearch/hermes-agent/issues/14420)) report context/memory retention issues and provider resolution bugs, indicating the local-setup UX still needs refinement.
*   **Terminal UX:** Developers using modern terminals like Warp report that multi-line inputs (Shift+Enter) fail in the Hermes TUI (Issue [#21512](https://github.com/NousResearch/hermes-agent/issues/21512)).
*   **Enterprise Deployments:** There is a clear trend of users deploying Hermes via Docker sandboxes with CLI tools (Issue [#12534](https://github.com/NousResearch/hermes-agent/issues/12534)) and requiring enterprise communication integrations (DingTalk image support in Issue [#21462](https://github.com/NousResearch/hermes-agent/issues/21462)).

## 8. Backlog Watch
*   **Telegram Cold Boot Failures (Since April):** Issue [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) remains open. It highlights that Hermes fails to connect to Telegram on OS boot before the network stack is fully prepared. Combined with today's P1 reconnection bugs, the Telegram platform adapter urgently needs a revamp of its retry/state-machine logic.
*   **Missing `/skills` Command:** Issue [#10221](https://github.com/NousResearch/hermes-agent/issues/10221) notes that the documented `/skills` command is unknown to the CLI. This documentation-to-reality gap needs maintainer clarification or a quick patch.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-05-08

## 1. Today's Overview
PicoClaw demonstrates robust and highly active development as a versatile, multi-channel AI agent framework. The project recorded significant community engagement over the past 24 hours, processing 36 issues (22 closed) and 50 pull requests (18 merged/closed), alongside the generation of a new automated nightly build. The daily activities heavily focused on hardening the agent loop, refining the Telegram and Feishu channel integrations, and shoring up security vulnerabilities in the Go toolchain. Overall, the project's health is excellent, showing a strong maintainer and contributor response rate to community-reported bugs and a clear trajectory toward stabilizing the v0.2.8 release.

## 2. Releases
*   **nightly: v0.2.8-nightly.20260507.788cda5c**
    *   **Overview:** This automated nightly build captures the latest merged changes from the `main` branch, serving as a precursor to the stable v0.2.8 release.
    *   **Migration/Usage Notes:** As an automated nightly build, it may be unstable. Administrators and developers testing this build should use it with caution in non-production environments.
    *   **Full Changelog:** [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

## 3. Project Progress
Today saw 18 pull requests merged or closed, indicating rapid forward momentum. Key advancements include:
*   **Agent Architecture & Session Management:** PR [#2819](https://github.com/sipeed/picoclaw/pull/2819) introduced a non-destructive `/reset` command (preserving database history while clearing the context window). PR [#2793](https://github.com/sipeed/picoclaw/pull/2793) fixed a bug where hidden tools were incorrectly promoted in cloned registries, and PR [#2790](https://github.com/sipeed/picoclaw/pull/2790) fixed sub-agent routing for the `spawn` tool.
*   **MCP & Tooling Reliability:** PR [#2814](https://github.com/sipeed/picoclaw/pull/2814) fixed the exec sandbox misclassifying relative script paths, while PR [#2460](https://github.com/sipeed/picoclaw/pull/2460) (merged) fixed MCP tool calls failing on strict Zod-validating servers by sending empty JSON objects instead of `null`. 
*   **Channel & UI Enhancements:** PR [#2789](https://github.com/sipeed/picoclaw/pull/2789) made the tool feedback animation throttle configurable, and merged PR [#2090](https://github.com/sipeed/picoclaw/pull/2090) resolved lingering Telegram UI draft glitches.
*   **Security & Infrastructure:** PR [#2818](https://github.com/sipeed/picoclaw/pull/2818) bumped the Go toolchain to 1.25.10 to patch standard library HTTP vulnerabilities. PR [#2813](https://github.com/sipeed/picoclaw/pull/2813) fixed a startup crash where the gateway falsely detected PID conflicts with unrelated system processes.

## 4. Community Hot Topics
*   **LLM API Resiliency ([#629](https://github.com/sipeed/picoclaw/issues/629) - 13 comments):** A long-standing discussion about the agent hanging indefinitely upon encountering HTTP 500 errors without retrying. This reflects a strong user need for robust circuit-breaker and retry-queue mechanisms for LLM providers.
*   **API Key Rotation & "Cartridge-Belt" Stacking ([#2408](https://github.com/sipeed/picoclaw/issues/2408) - 11 comments):** Users managing high-volume deployments are requesting native support for stacking multiple API keys to automatically bypass rate-limit errors.
*   **OpenAI Responses API Migration ([#2171](https://github.com/sipeed/picoclaw/issues/2171) - 10 comments):** An architectural discussion regarding refactoring the provider layer from the legacy Chat Completions endpoint to OpenAI's newer Responses API.
*   **Exec Tool "Safety Guard" False Positives ([#1042](https://github.com/sipeed/picoclaw/issues/1042) - 8 comments, 👍 2):** The workspace restriction regex is incorrectly parsing URLs and query parameters (e.g., `wttr.in/Beijing?T`) as illegal directory traversals (`../../../../`), blocking safe network commands.

## 5. Bugs & Stability
*   **Critical - Anthropic API Race Condition ([#2721](https://github.com/sipeed/picoclaw/issues/2721)):** Users report a persistent session history race condition resulting in 400 errors from the Anthropic Messages API regarding invalid `tool_use_id`. This affects single-peer Telegram deployments.
*   **High - Seahorse History Rendering ([#2796](https://github.com/sipeed/picoclaw/issues/2796)):** When viewing past conversations, users can only see the *last* user message in a multi-turn chat. Earlier user messages are lost in the UI, making historical review difficult.
*   **High - Multi-Group Attribution Missing ([#2702](https://github.com/sipeed/picoclaw/issues/2702)):** In Discord group chats sharing a single session scope, historical messages lose sender attribution, confusing the LLM when multiple humans interact simultaneously.
*   **Medium - Proactive Compact Failure ([#2480](https://github.com/sipeed/picoclaw/issues/2480)):** The agent's proactive context compaction fails if the LLM configuration's `model_name` differs from its actual `model` ID.
*   **Medium - Cron/Scheduled Task Restrictions ([#2468](https://github.com/sipeed/picoclaw/issues/2468)):** Scheduled tasks fail to execute because cron commands are erroneously restricted to "internal channels." 
*   **Low - Windows Path Separator ([#2472](https://github.com/sipeed/picoclaw/issues/2472)):** The `list_dir` tool returns "invalid argument" on Windows due to Go's strict forward-slash requirements.

## 6. Feature Requests & Roadmap Signals
*   **SMTP Channel for Scheduled Reports ([#2465](https://github.com/sipeed/picoclaw/issues/2465)):** High demand for a native SMTP integration to allow the agent to email periodic task results (e.g., project updates, system health checks).
*   **General Attachment Support ([#348](https://github.com/sipeed/picoclaw/issues/348)):** Processing documents, code, and media files seamlessly across all messengers (Telegram, Discord, etc.) remains a priority high on the roadmap. *(Note: PR [#2758](https://github.com/sipeed/picoclaw/pull/2758) handling Telegram media groups indicates active foundational work toward this).*
*   **Secrets Management for MCP ([#2444](https://github.com/sipeed/picoclaw/issues/2444)):** A highly requested feature (👍 2) to securely store MCP server environment tokens in `.security.yml` rather than exposing them in `config.json` or parent process variables.

## 7. User Feedback Summary
Users are actively deploying PicoClaw across diverse environments (Discord, Telegram, Feishu, and QQ), praising its ability to orchestrate complex multi-tool agent loops. However, self-hosters deploying open-weights models via local backends (like `mlx-lm`) report friction ([#2482](https://github.com/sipeed/picoclaw/issues/2482)) with tool call formatting. A notable pain point is enterprise readiness and configuration transparency: administrators are frustrated by undocumented gateway token overrides ([#2439](https://github.com/sipeed/picoclaw/issues/2439)) and read-only Docker root filesystem incompatibilities ([#2440](https://github.com/sipeed/picoclaw/issues/2440)). Addressing documentation gaps and hardening reverse-proxy/Docker deployments would significantly improve the self-hosted user experience.

## 8. Backlog Watch
*   **Issue [#629](https://github.com/sipeed/picoclaw/issues/629) (LLM Call Retry Logic):** Open since February 2026, this fundamental reliability issue has 13 comments and needs a core maintainer's decision on the retry architecture to prevent agent hangs on provider errors.
*   **Issue [#2171](https://github.com/sipeed/picoclaw/issues/2171) (OpenAI Responses API):** Open since March 2026 with a completed checklist. A maintainer update is needed to finalize the merge strategy to keep the provider layer up-to-date.
*   **PR [#2240](https://github.com/sipeed/picoclaw/pull/2240) (GitHub Copilot Provider):** This significant enhancement adding stdio transport has been open since early April. It requires a final maintainer review to unblock users leveraging Copilot models.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-08

## 1. Today's Overview
NanoClaw experienced exceptionally high development velocity today, processing 31 pull requests (23 merged/closed) and 5 issues. The project is in a heavy stabilization phase, with maintainers and contributors intensely focused on fixing critical agent-to-agent (A2A) routing bugs and multi-destination session threading. Simultaneously, the ecosystem is expanding rapidly via community-contributed "skills," and onboarding friction is actively being reduced through UI/UX setup improvements. This indicates a project maturing its core architecture while preparing for a broader, less technical user base.

## 2. Releases
No new releases were cut today. The high volume of merged core fixes suggests preparation for an upcoming stability-focused release.

## 3. Project Progress
Project advancement today was characterized by major core architectural fixes and a surge in new integrations:
*   **A2A Routing & Session Resolution:** The most critical work centered on fixing how agents route replies in multi-channel setups. PRs [#2329](https://github.com/qwibitai/nanoclaw/pull/2329), [#2267](https://github.com/qwibitai/nanoclaw/pull/2267), and [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) successfully merged, introducing explicit destination addressing and fixing split-brain session issues. 
*   **Context Compaction Fixes:** Merged PR [#2327](https://github.com/qwibitai/nanoclaw/pull/2327) ensures agents remember routing and tool-use patterns after the Claude Code SDK auto-compacts conversation context.
*   **Container Infrastructure:** Fixed a critical build issue caused by pnpm v11 silently breaking native binary installations, pinned to v10.33.0 via PR [#2335](https://github.com/qwibitai/nanoclaw/pull/2335). PR [#2333](https://github.com/qwibitai/nanoclaw/pull/2333) added exponential backoff to gateway listener restarts to prevent API spam.
*   **Skills Ecosystem:** Significant expansion of agent capabilities with merged skills for AWS CLI access ([#2319](https://github.com/qwibitai/nanoclaw/pull/2319)), persistent semantic memory (`mnemon`, [#2318](https://github.com/qwibitai/nanoclaw/pull/2318)), and OneCLI gateway updates ([#2321](https://github.com/qwibitai/nanoclaw/pull/2321)).
*   **Setup UX:** Non-technical user onboarding was vastly improved by adding a "Skip — I'll connect later" option to auth ([#2324](https://github.com/qwibitai/nanoclaw/pull/2324)), navigation escapes ([#2316](https://github.com/qwibitai/nanoclaw/pull/2316)), and removing confusing technical jargon ([#2315](https://github.com/qwibitai/nanoclaw/pull/2315)).

## 4. Community Hot Topics
*   **Per-Group Credential Management ([Issue #869](https://github.com/qwibitai/nanoclaw/issues/869)):** Originally opened in March, this issue saw renewed activity today (3 comments). The community is actively discussing the need to move away from a single global `.env` credential pool so that different agent groups can consume separate API quotas. This signals a strong operational need for multi-tenant or team-based deployments.
*   **Web UI File Attachments ([Issue #2334](https://github.com/qwibitai/nanoclaw/issues/2334)):** A highly requested feature proposing a complete upload flow (via file picker and clipboard paste) directly into the Web UI, allowing agents to process files. 

## 5. Bugs & Stability
*   **[CRITICAL] A2A Reply Misrouting ([Issue #2331](https://github.com/qwibitai/nanoclaw/issues/2331), [Issue #2332](https://github.com/qwibitai/nanoclaw/issues/2332)):** A deep audit revealed that `findSessionByAgentGroup` routed replies to the newest session rather than the originating one, causing dropped messages in multi-channel environments. **Status:** *Mitigated.* Fix PRs [#2329](https://github.com/qwibitai/nanoclaw/pull/2329) and [#2267](https://github.com/qwibitai/nanoclaw/pull/2267) have been merged.
*   **[HIGH] Container Build / pnpm v11 Incompatibility ([PR #2336](https://github.com/qwibitai/nanoclaw/pull/2336)):** Newly built agent images resulted in a 500-byte stub binary, crashing agents on the first message. **Status:** *Fixed* by merging [#2335](https://github.com/qwibitai/nanoclaw/pull/2335) to pin pnpm to v10.33.0.
*   **[MEDIUM] Telegram URL Corruption ([PR #2338](https://github.com/qwibitai/nanoclaw/pull/2338)):** The legacy Markdown sanitizer strips underscores from URLs, silently corrupting links. **Status:** *Open*, awaiting merge.
*   **[MEDIUM] Axios MCP Proxy Conflicts ([PR #2330](https://github.com/qwibitai/nanoclaw/pull/2330)):** Axios-based MCP servers fail through the OneCLI proxy due to HTTP request formatting. **Status:** *Open*, awaiting merge.

## 6. Feature Requests & Roadmap Signals
*   **File Handling in Web UI:** The detailed proposal in [Issue #2334](https://github.com/qwibitai/nanoclaw/issues/2334) outlines a clear roadmap for multimodal/file capabilities in the web channel.
*   **Multi-Provider Skill Support:** [PR #2337](https://github.com/qwibitai/nanoclaw/pull/2337) (open) introduces a skill catalog for non-Claude providers, signaling an upcoming shift toward a model-agnostic architecture.
*   **Credential Partitioning:** The ongoing discussion in [Issue #869](https://github.com/qwibitai/nanoclaw/issues/869) suggests future versions will likely feature per-group authentication vaulting.

## 7. User Feedback Summary
User pain points today heavily revolved around deployment friction and multi-channel complexity:
*   **Setup Abandonment:** Users without immediate Claude API credentials were getting trapped and force-closing the setup (addressed today by [PR #2324](https://github.com/qwibitai/nanoclaw/pull/2324)). 
*   **Silent Failures:** Users reported frustration with the `pnpm` v11 issue where the setup appeared successful but agents immediately crashed with "code 1" on the first message ([PR #2336](https://github.com/qwibitai/nanoclaw/pull/2336)). 
*   **Architecture Complexity:** As users begin wiring agents to multiple platforms (e.g., Signal + Email), the complexity of context routing is causing confusion when messages are silently dropped, highlighting a need for better debugging tools or simplified multi-channel defaults.

## 8. Backlog Watch
*   **Per-group credentials ([Issue #869](https://github.com/qwibitai/nanoclaw/issues/869)):** Open since March 2026, this High Priority enhancement is actively being discussed but lacks a linked PR. It requires maintainer architectural guidance to proceed.
*   **Open Infrastructure PRs:** Several high-value PRs are currently open and need final review before the next release, including OneCLI proxy fixes for Axios ([#2330](https://github.com/qwibitai/nanoclaw/pull/2330)), non-Claude provider skill cataloging ([#2337](https://github.com/qwibitai/nanoclaw/pull/2337)), and Telegram markdown fixes ([#2338](https://github.com/qwibitai/nanoclaw/pull/2338)).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-08

## 1. Today's Overview
The NullClaw project is currently experiencing a highly active development phase, characterized by a strong focus on expanding integrations, tooling, and platform stability. Over the last 24 hours, the repository saw 6 issue updates and 7 pull request updates, indicating a healthy and engaged open-source community. While no new official releases were cut today, the open PR pipeline is robust, featuring significant architectural additions like a native Agent Client Protocol (ACP) adapter and a data governance layer. Community contributions are diverse, spanning from critical bug fixes in the OpenAI Responses API to documentation improvements for Zig environments, underscoring the project's maturing ecosystem.

## 2. Releases
No new releases were recorded today. The project maintains its current version while critical features and fixes accumulate in the PR pipeline.

## 3. Project Progress
Development advanced significantly across two primary areas: provider API compliance and external tooling integrations.
*   **Merged/Closed PRs:**
    *   [PR #790](https://github.com/nullclaw/nullclaw/pull/790) (Closed/Merged): Fixed critical bugs in the OpenAI-compatible provider's Responses API, specifically addressing nested tool schema formats and null error handling in the `buildResponsesRequestBody` function. 
    *   [PR #893](https://github.com/nullclaw/nullclaw/pull/893) (Closed): Attempted integration of `zig-qm-toolkit` but was closed without merging, suggesting a pivot or rejection of that specific approach.
*   **Active Advancements:**
    *   [PR #896](https://github.com/nullclaw/nullclaw/pull/896): Introduced a native Agent Client Protocol (ACP) stdio JSON-RPC adapter directly into the NullClaw binary, marking a major step toward standardized agent communication.
    *   [PR #885](https://github.com/nullclaw/nullclaw/pull/896): Proposed a comprehensive "NullClaw Data Governance Layer," showcasing an enterprise-focused push toward secure memory and data handling.
    *   [PR #783](https://github.com/nullclaw/nullclaw/pull/783): Continues active development of a robust cron subagent engine with DB-backed scheduling and security hardening.

## 4. Community Hot Topics
The most heavily discussed issues revolve around platform constraints and documentation gaps, highlighting the friction of deploying NullClaw in varied environments.
*   **[Issue #167](https://github.com/nullclaw/nullclaw/issues/167) (10 comments, 1 👍):** Users are actively discussing limitations regarding the use of shell commands like `curl` and `wget`. This persistent friction point suggests users are trying to integrate NullClaw into environments where direct HTTP tooling is restricted or hard-coded.
*   **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871) (7 comments):** A critical discussion regarding `web_search` impracticality on low-resource devices. Users are pushing back against mandatory external API dependencies (like Brave Search), revealing a strong underlying need for native, lightweight DuckDuckGo support that aligns with the project's "cheap, weak device" use case.

## 5. Bugs & Stability
*   **High Severity - Provider API Malfunction:** [PR #790](https://github.com/nullclaw/nullclaw/pull/790) resolved a significant bug where the Responses API (`api_mode=responses`) was sending incorrectly nested tool schemas and failing to handle null errors gracefully. This fix is crucial for users relying on the latest OpenAI API functionalities.
*   **High Severity - Resource/Compatibility Bug:** [Issue #871](https://github.com/nullclaw/nullclaw/issues/871) reports that `web_search` is fundamentally broken/impractical for low-resource devices without native DuckDuckGo support. Currently, no fix PR has been submitted for this specific architectural limitation.
*   **Build/CI Stability:** [PR #887](https://github.com/nullclaw/nullclaw/pull/887) addresses build failures and compatibility updates for Zig v0.16 across Windows and Linux, which is vital for maintaining the project's core compile targets.

## 6. Feature Requests & Roadmap Signals
Recent feature requests indicate a trend toward better messaging platform integration and enhanced automation:
*   **Messaging Channel Enhancements:** [Issue #895](https://github.com/nullclaw/nullclaw/issues/895) and [Issue #894](https://github.com/nullclaw/nullclaw/issues/894) request configuration options for the Lark channel—specifically, the ability to disable typing placeholder retraction and the ability to respond to all group messages without requiring an `@mention`.
*   **Roadmap Prediction:** Given the active PRs, the next version will likely feature the native ACP stdio adapter ([PR #896](https://github.com/nullclaw/nullclaw/pull/896)) and the DB-backed cron scheduling system ([PR #783](https://github.com/nullclaw/nullclaw/pull/783)), paving the way for more autonomous, scheduled agent behaviors.

## 7. User Feedback Summary
Users highly value NullClaw for its potential to run on cheap, low-resource hardware, but are currently experiencing friction with setup and memory constraints. 
*   **Pain Point 1 (Setup Complexity):** Users are struggling with the Zig setup process on standard Linux environments (like Debian), leading to questions about whether Docker is mandatory ([Issue #820](https://github.com/nullclaw/nullclaw/issues/820)). 
*   **Pain Point 2 (Accuracy):** Contributors note that the project's README is outdated—specifically, the binary and memory benchmarks are no longer accurate, which could mislead new users evaluating the project's footprint ([Issue #473](https://github.com/nullclaw/nullclaw/issues/473)).
*   **Satisfaction:** The community remains highly engaged in solving these problems, as evidenced by rapid documentation contributions like [PR #897](https://github.com/nullclaw/nullclaw/pull/897).

## 8. Backlog Watch
*   **Long-Term Documentation Update:** [Issue #473](https://github.com/nullclaw/nullclaw/issues/473) (opened in March 2026) points out invalid benchmark metrics in the README. Despite being open for nearly two months, maintainers have not merged updates. Correcting this is vital for setting accurate expectations.
*   **Shell Command Limitations:** [Issue #167](https://github.com/nullclaw/nullclaw/issues/167) (opened in late February 2026) continues to attract attention. The restricted use of `curl` and `wget` is a persistent thorn for users, and a formal architectural solution or transparent explanation from maintainers is overdue.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-08

## 1. Today's Overview
IronClaw is currently experiencing exceptionally high development velocity, driven primarily by the massive "Reborn" architectural overhaul. With 50 pull requests updated and 23 issues actively discussed in the last 24 hours, the project's momentum is heavily tilted toward core contributors building out the new substrate. The release of **v0.28.0** officially lands the Reborn integration foundation on the main branch. While the backend architecture is rapidly advancing with new WASM boundaries and capability hosts, users and QA are actively reporting significant stability and usability bugs in the current production version (v0.27.0), indicating a period of growing pains.

## 2. Releases
- **[ironclaw-v0.28.0](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v0.28.0)** (Published 2026-05-07)
  - **Changes:** Introduced the `reborn-integration` substrate to the `main` branch. This includes host foundation crates, capability hosts, runtime dispatchers, process lifecycle management, filesystem, secrets, network boundaries, and an extension manifest registry. It also adds a new WIT-compatible WASM tooling Rust utility.
  - **Migration/Breaking Note:** This is a major architectural release. Downstream consumers should note that Reborn introduces entirely new crate boundaries (e.g., `ironclaw_turns`, `ironclaw_run_state`) and shifts how capability hosts manage agent loops.

## 3. Project Progress
Today's progress is characterized by a massive merge wave of foundational Reborn infrastructure PRs, alongside critical fixes for existing user-facing bugs. 
- **Reborn Infrastructure:** Core contributor @serrrfirat landed a huge volume of foundational PRs, merging durable database backends for run-states, conversations, capability leases, and session threads ([PR #3349](https://github.com/nearai/ironclaw/pull/3349), [PR #3368](https://github.com/nearai/ironclaw/pull/3368), [PR #3369](https://github.com/nearai/ironclaw/pull/3369), [PR #3379](https://github.com/nearai/ironclaw/pull/3379)). The `AgentLoopHost` facade contract was also merged ([PR #3377](https://github.com/nearai/ironclaw/pull/3377)).
- **Bug Fixes:** @ilblackdragon merged [PR #3364](https://github.com/nearai/ironclaw/pull/3364) to fix UI hanging on the "Restarting IronClaw" modal and approval flow clarity.
- **Multi-tenancy & Auth:** @serrrfirat opened [PR #3374](https://github.com/nearai/ironclaw/pull/3374) to fix multi-tenant workspace memory isolation, a critical privacy fix. @ilblackdragon opened [PR #3381](https://github.com/nearai/ironclaw/pull/3381) to overhaul Telegram pairing and OAuth-failure recovery.

## 4. Community Hot Topics
The community and core team are highly focused on the transition to the Reborn architecture and ongoing QA bug bashes.
- **[Issue #3067](https://github.com/nearai/ironclaw/issues/3067) (28 comments):** Driving the integration test suite for the Reborn stack. High activity reflects the complexity of proving the new substrate works through public entrypoints.
- **[Issue #3022](https://github.com/nearai/ironclaw/issues/3022) (9 comments):** Event substrate integration tests. Underlying need: ensuring the new V1 event producers properly handle redaction and scope before user-visible cutover.
- **[Issue #3016](https://github.com/nearai/ironclaw/issues/3016) (7 comments):** Reference `AgentLoopHost` facade tracker. This highlights the community/developer need for clear, typed boundaries for agent turn execution and lifecycle management.

## 5. Bugs & Stability
Several high-severity bugs were reported by QA and users, primarily affecting LLM providers and the Telegram integration.
- 🔴 **Critical - LLM Provider Override:** [Issue #3229](https://github.com/nearai/ironclaw/issues/3229). LLM fallback persists to the DB on startup, permanently destroying user model/provider config. (👍 1)
- 🔴 **Critical - Telegram/Auth Hardblock:** [Issue #3319](https://github.com/nearai/ironclaw/issues/3319) & [Issue #3320](https://github.com/nearai/ironclaw/issues/3320). Gmail auth fails with a 400 error when started from Telegram, and IronClaw gets stuck and cannot continue the conversation even after `/clear`. *(Fix exists in [PR #3381](https://github.com/nearai/ironclaw/pull/3381))*.
- 🟠 **High - Gemini API failure:** [Issue #3225](https://github.com/nearai/ironclaw/issues/3225). The Gemini backend fails tool-calling deterministically on the second LLM turn due to a missing `thought_signature`.
- 🟠 **High - UI/State inconsistency:** [Issue #3274](https://github.com/nearai/ironclaw/issues/3274). Data goes missing after upgrading to v0.27.0 until a manual refresh is triggered.
- 🟡 **Medium - Restart Hang:** [Issue #3082](https://github.com/nearai/ironclaw/issues/3082). App hangs on "Restarting IronClaw" modal. *(Fixed in [PR #3364](https://github.com/nearai/ironclaw/pull/3364))*.

## 6. Feature Requests & Roadmap Signals
A clear signal is being sent to expand LLM reasoning visibility and third-party integrations.
- **LLM Reasoning Visibility:** [Issue #3327](https://github.com/nearai/ironclaw/issues/3327) requests end-to-end UI display and DB persistence of LLM "thinking" artifacts (`reasoning_content`, `thought_signature`). With [PR #3326](https://github.com/nearai/ironclaw/pull/3326) already open, this will likely land in **v0.29.0**.
- **Slack Multi-Workspace Support:** [Issue #3334](https://github.com/nearai/ironclaw/issues/3334) requests support for connecting a single IronClaw instance to multiple Slack workspaces via `channel-relay`. Given the active Reborn migration of channel adapters ([Issue #3288](https://github.com/nearai/ironclaw/issues/3288)), this is being evaluated for the Reborn channel lifecycle.
- **Reborn Product Surfaces:** A flurry of migration requests (Missions [Issue #3290](https://github.com/nearai/ironclaw/issues/3290), Memory [Issue #3287](https://github.com/nearai/ironclaw/issues/3287), Extensions [Issue #3288](https://github.com/nearai/ironclaw/issues/3288)) outlines the definitive roadmap for the next 3-6 months.

## 7. User Feedback Summary
Users are actively testing the limits of multi-channel integrations and LLM providers. 
- **Pain Points:** Users are frustrated by fragile cross-channel flows (e.g., starting in Telegram, failing on Gmail OAuth, and bricking the conversation). Developers deploying local instances are running into missing packages ([Issue #3259](https://github.com/nearai/ironclaw/issues/3259)) because the latest versions haven't been published to `crates.io` due to underlying CVEs in `wasmtime`.
- **Use Cases:** The multi-tenant workspace isolation fix ([PR #3374](https://github.com/nearai/ironclaw/pull/3374)) confirms users are deploying IronClaw in shared hosting environments where strict scoping of private workspace memory is a hard requirement.

## 8. Backlog Watch
- **Publishing Blocker:** [Issue #3259](https://github.com/nearai/ironclaw/issues/3259) notes that `crates.io` is stuck at v0.24.0 due to `wasmtime` 28.x CVEs. Downstream Rust consumers are effectively blocked from updating. Maintainers need to address this dependency conflict.
- **Production Wiring Gaps:** [Issue #3333](https://github.com/nearai/ironclaw/issues/3333) points out that the newly merged Reborn stack still has fake/in-memory/no-op seams missing real implementations. This needs dedicated tracking to ensure v0.28.0 doesn't ship with unbootable production environments.
- **E2E Test Failures:** [Issue #3323](https://github.com/nearai/ironclaw/issues/3323) indicates the Nightly E2E scheduled run failed. Given the massive architectural changes merged today, CI stability must be closely monitored.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-05-08

## 1. Today's Overview
LobsterAI is experiencing a period of **highly vigorous development activity**, marked by the release of version `2026.5.7` and a substantial volume of code merges. In the last 24 hours, the team merged an impressive 36 pull requests while actively managing 9 open PRs, indicating a tightly coordinated sprint likely preparing the codebase for a stable rollout. The focus of recent development heavily targets Windows OS reliability, multi-model compatibility (DeepSeek v4, ChatGPT OAuth, Xiaomi Mimo), and performance optimizations (cowork pagination). However, with 2 newly active issues remaining unresolved, there are emerging concerns regarding authentication stability and IM platform integrations that require attention. Overall, project health is robust, characterized by rapid feature iteration and proactive bug squashing.

## 2. Releases
**Latest Release:** [LobsterAI 2026.5.7](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.7) (Published May 7, 2026)
*   **Changes:** This patch release focuses on environment stability and skill enhancements. It includes a refactoring of core systems, an upgrade of the `youdaonote` skill to version 1.0.8, and crucial backend fixes to improve the reliability of skill deletion on Windows OS, alongside better user feedback during skill imports.
*   **Migration Notes:** No breaking changes or immediate migration steps required, though Windows users are highly encouraged to update to resolve local file management bugs.

## 3. Project Progress
A massive 36 pull requests were merged today, highlighting significant advancements across the platform:
*   **Performance Enhancements:** A major structural change landed with [PR #1907](https://github.com/netease-youdao/LobsterAI/pull/1907) (originating from [#924](https://github.com/netease-youdao/LobsterAI/pull/924)), introducing pagination for session lists and message histories in the "cowork" module. This effectively resolves memory bloat and UI stuttering during long conversations.
*   **Windows Reliability:** The team aggressively resolved Windows-specific bugs, including duplicate file preview cards ([PR #1909](https://github.com/netease-youdao/LobsterAI/pull/1909)), EPERM errors when deleting skill directories ([PR #1891](https://github.com/netease-youdao/LobsterAI/pull/1891)), and startup false-failures ([PR #1910](https://github.com/netease-youdao/LobsterAI/pull/1910)).
*   **Model Compatibility & Routing:** Merged support for ChatGPT OAuth login ([PR #1830](https://github.com/netease-youdao/LobsterAI/pull/1830)), Xiaomi Mimo model coding plans ([PR #1862](https://github.com/netease-youdao/LobsterAI/pull/1862)), and critical fixes for DeepSeek v4 tool-calling logic ([PR #1819](https://github.com/netease-youdao/LobsterAI/pull/1819)).
*   **Streaming Accuracy:** Fixed a pesky rendering bug where streaming text merging accidentally swallowed repeated characters (e.g., rendering `.pptx` as `.ptx`) ([PR #1908](https://github.com/netease-youdao/LobsterAI/pull/1908)).
*   **Code Quality:** [PR #1498](https://github.com/netease-youdao/LobsterAI/pull/1498) successfully cleared all 165 active ESLint errors, bringing the codebase up to zero-lint-error standard.

## 4. Community Hot Topics
While today's PRs were bustling, community feedback highlighted specific integration and authentication pain points:
*   **[Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) (Active - 2 comments):** Users are unable to configure the WeChat IM bot interface. After scanning a QR code, the OpenClaw endpoint requires a 6-digit verification code, but the LobsterAI client fails to render the input field for this code.
    *   *Analysis:* This indicates a missing UI bridge between the third-party OpenClaw protocol and the LobsterAI client, currently blocking WeChat bot deployments.
*   **[Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903) (Active - 1 comment):** Frequent failures with VIP member logins.
    *   *Analysis:* Users are frustrated by login instability, which blocks access to premium NetEase models. This is a critical retention risk if paying users cannot reliably access their purchased services.

## 5. Bugs & Stability
Reported bugs today center heavily on platform integrations and Windows environments:
1.  **Severity: High** - **VIP Login Failures** ([Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903)). Auth failures directly impact user retention and monetization. (No fix PR submitted yet).
2.  **Severity: Medium** - **WeChat Verification UI Missing** ([Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878)). IM bot configurations are currently broken. (No fix PR submitted yet).
3.  **Severity: Low (Fixed)** - **Streaming Text Truncation** ([PR #1908](https://github.com/netease-youdao/LobsterAI/pull/1908)). Overzealous suffix/prefix overlap computation caused characters to disappear during streaming. Merged and resolved.
4.  **Severity: Low (Fixed)** - **Markdown Table Degradation** ([PR #1900](https://github.com/netease-youdao/LobsterAI/pull/1900)). Intermittent truncation of markdown tables during concurrent cowork sessions. Merged and resolved.

## 6. Feature Requests & Roadmap Signals
Based on the current issue tracker and merged code, the near-term roadmap points toward:
*   **Agent-specific Workspaces:** [PR #1904](https://github.com/netease-youdao/LobsterAI/pull/1904) introduced support for independent working directories for each Agent. This strongly signals a push toward better multi-agent isolation and file management.
*   **Improved Agent UI/UX:** Several merged PRs focused on refining the Agent user interface ([PR #1911](https://github.com/netease-youdao/LobsterAI/pull/1911)) and fixing model selection memory ([PR #1905](https://github.com/netease-youdao/LobsterAI/pull/1905)).
*   *Prediction:* The next minor version will likely focus on UI refinements for AI agents and necessitate a hotfix for the reported VIP authentication issues.

## 7. User Feedback Summary
The real-world deployment of LobsterAI reveals specific friction points:
*   **Pain Point - Proxy & Network Configuration:** Users struggle to connect to OpenAI native models when using proxies, a bug that the maintainers recently addressed in [PR #1818](https://github.com/netease-youdao/LobsterAI/pull/1818).
*   **Pain Point - Authentication Reliability:** The WeChat QR-code scanning flow and VIP login mechanisms feel brittle to external users, preventing them from accessing core functionalities.
*   **Satisfaction:** Positively, users are leveraging the tool for complex tasks involving multi-agent setups, custom supplier models (like DeepSeek v4), and artifact generation, showing strong enterprise adoption.

## 8. Backlog Watch
*   **[Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878):** Created on April 30th, this WeChat IM interface bug has been active for a week without a definitive fix PR. Maintainer attention is required to unblock users utilizing the OpenClaw WeChat integration.
*   **[Issue #1903](https://github.com/netease-youdao/LobsterAI/issues/1903):** Newly reported VIP login failure needs immediate triage, as it directly impacts the commercial viability of the platform.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-08

## 1. Today's Overview
Moltis demonstrates exceptional project health and highly active development, processing 10 pull requests (9 merged) and closing 4 issues within a single day. The project is aggressively expanding its architecture beyond a standalone personal AI assistant into a framework for interoperable, multi-modal agent servers. Recent development is heavily concentrated on enterprise-grade sandboxing, multi-channel communication (voice and telephony), and decentralized agent-to-agent identity verification. The rapid, sequential release cadence (two releases in two days) indicates a highly automated CI/CD pipeline and a mature, fast-moving contributor base.

## 2. Releases
*   **[20260507.05](https://github.com/moltis-org/moltis/releases/tag/20260507.05)**
*   **[20260507.04](https://github.com/moltis-org/moltis/releases/tag/20260507.04)**

*Note: The exact granular changelogs for these two automated releases were not attached to the data payload, but based on the timestamp and merge activity, they encapsulate the bug fixes (tool diagnostics, browser sandbox) and core features (Ed25519 identity, image generation, multi-backend sandboxes) merged on 2026-05-07.*

## 3. Project Progress
Today's merged PRs represent significant architectural leaps in security, connectivity, and media capabilities:
*   **Advanced Sandboxing:** Merged [PR #942](https://github.com/moltis-org/moltis/pull/942), introducing remote and multi-backend sandbox support (Vercel, Daytona, Firecracker). This is a critical milestone for deploying Moltis on cloud hosts where Docker-in-Docker (DinD) is restricted.
*   **Decentralized Identity:** [PR #979](https://github.com/moltis-org/moltis/pull/979) replaced standard token authentication with Ed25519 challenge-response (Trust On First Use / TOFU model), laying the groundwork for secure agent-to-agent communication.
*   **Multi-Channel Communication:** Voice capabilities were heavily refined with [PR #981](https://github.com/moltis-org/moltis/pull/981) (adding a privacy-focused `whisper-local` STT provider), while telephony support officially landed via [PR #920](https://github.com/moltis-org/moltis/pull/920) (Twilio integration).
*   **Media Generation:** [PR #982](https://github.com/moltis-org/moltis/pull/982) added a built-in `generate_image` tool backed by OpenAI's `gpt-image-2` via Codex OAuth.
*   **Crucial Bug Fixes:** [PR #983](https://github.com/moltis-org/moltis/pull/983) fixed a silent failure where malformed tool arguments collapsed, and [PR #980](https://github.com/moltis-org/moltis/pull/980) resolved Docker host mount profiling for the browser sandbox.
*   **Documentation:** [PR #976](https://github.com/moltis-org/moltis/pull/976) added comprehensive integration guides for the newly proposed Identity and Onboarding protocols.

## 4. Community Hot Topics
While recent issues lack high comment counts, the strategic implications of the proposals show a community focused on **decentralized AI networking**:
*   **Interoperable Agents ([Issue #973](https://github.com/moltis-org/moltis/issues/973)):** Proposed by `vystartasv`, this issue highlights a fundamental architectural need: standard protocols for Moltis instances to discover, verify, and interact with one another without a central authority. The swift merge of the Ed25519 PRs shows maintainers are heavily aligned with this vision.
*   **Local-First Privacy Voice Processing ([PR #981](https://github.com/moltis-org/moltis/pull/981)):** The addition of `whisper-local` support proves that the self-hosting community is actively requesting ways to keep sensitive audio data on-premise.
*   **Cloud Deployment Constraints ([Issue #977](https://github.com/moltis-org/moltis/issues/977) & [PR #942](https://github.com/moltis-org/moltis/pull/942)):** Users running Moltis in LXC/Docker environments (like Proxmox) are pushing for better sandbox stability, directly driving the multi-backend sandbox initiative.

## 5. Bugs & Stability
*   **Severity: Medium** | **Tool Call Schema Validation Failure** ([Issue #963](https://github.com/moltis-org/moltis/issues/963)): Intermittent failures where `exec` calls were rejected during pre-dispatch schema validation because malformed arguments collapsed into `{}`. **Status:** Resolved via [PR #983](https://github.com/moltis-org/moltis/pull/983), which preserves argument decode provenance.
*   **Severity: Medium** | **Browser Sandbox Mount Failure in Docker/LXC** ([Issue #977](https://github.com/moltis-org/moltis/issues/977)): The browser tool consistently failed to create profiles when Moltis was run inside a Proxmox LXC container with Docker socket mounts. **Status:** Resolved via [PR #980](https://github.com/moltis-org/moltis/pull/980), which routes persistent profile bind mounts through a host-visible data directory.

## 6. Feature Requests & Roadmap Signals
*   **Image Generation via Codex OAuth** ([Issue #956](https://github.com/moltis-org/moltis/issues/956)): Users requested seamless `gpt-image-2` integration. This was rapidly fulfilled in [PR #982](https://github.com/moltis-org/moltis/pull/982).
*   **Realtime Voice Model Guidance** ([PR #984](https://github.com/moltis-org/moltis/pull/984)): Currently *open*, this PR seeks to surface OpenAI Realtime voice model IDs to prevent users from mistakenly configuring them for standard clip transcription.
*   **Roadmap Prediction:** The immediate next versions will likely focus on hardening the newly introduced remote sandboxes (Daytona/Firecracker) and fleshing out the L1/L2 identity protocols for agent mesh networking.

## 7. User Feedback Summary
Users operating self-hosted homelabs and enterprise-like virtualized environments (specifically Proxmox and LXC) are expressing friction regarding Docker-in-Docker boundaries for isolated browsing. However, their satisfaction with the project's modular architecture is high, as evidenced by the seamless integration of local AI tools (like faster-whisper-server) and the rapid adoption of OpenAI's newest models. There is a clear, shared consensus between the users and the core maintainers that Moltis must remain local-first, privacy-capable, and highly sandboxed.

## 8. Backlog Watch
*   **[PR #984](https://github.com/moltis-org/moltis/pull/984) (feat(voice): surface OpenAI realtime model guidance):** Currently the only open PR. It needs a final review and merge to prevent user confusion regarding STT vs. Realtime voice models.
*   **Dependency Automations:** [PR #978](https://github.com/moltis-org/moltis/pull/978) shows ongoing, routine dependency bumps (Wasmtime 36.0.8). Maintainers should ensure that the new remote sandbox architectures added in PR #942 remain stable during these runtime updates.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest: 2026-05-08

## 1. Today's Overview
CoPaw experienced a highly active day on May 8, 2026, with 50 issues updated (20 closed) and 33 pull requests updated (22 merged/closed). The high PR merge ratio indicates strong and responsive maintainer engagement. Community focus is currently split between enhancing platform integrations (such as Feishu and WeChat channels) and resolving performance bottlenecks associated with long conversations and workspace management. The heavy activity in both frontend UI optimizations and backend infrastructure (packaging, CLI, logging) suggests the project is in a rapid maturation phase, actively stabilizing the platform for enterprise and power-user deployments.

## 2. Releases
No new releases were recorded today. The community is actively discussing issues on recent builds (v1.1.5.post1 and v1.1.5.post2), indicating that a patch or minor version update may be imminent to address the currently reported bugs.

## 3. Project Progress
Maintainers and contributors merged 22 PRs, showing significant progress across the stack:
*   **Frontend & UI:** Several UI enhancements were merged, including batch enable/disable operations for skills ([PR #4091](https://github.com/agentscope-ai/QwenPaw/pull/4091)), optimizations to language switching ([PR #4085](https://github.com/agentscope-ai/QwenPaw/pull/4085)), and token usage chart refactoring ([PR #4094](https://github.com/agentscope-ai/QwenPaw/pull/4094)). Fix for duplicate rendering caused by polling ([PR #4052](https://github.com/agentscope-ai/QwenPaw/pull/4052)) was also merged.
*   **Backend & Infrastructure:** A fix for Windows desktop packaging failures related to `conda-pack` was submitted and closed ([PR #4093](https://github.com/agentscope-ai/QwenPaw/pull/4093)). 
*   **Integrations:** The Feishu channel saw ongoing work to surface sender nicknames to the agent context ([PR #4098](https://github.com/agentscope-ai/QwenPaw/pull/4098), [PR #4055](https://github.com/agentscope-ai/QwenPaw/pull/4055)). Additionally, a highly valuable PR adding local backup CLI commands was introduced ([PR #4095](https://github.com/agentscope-ai/QwenPaw/pull/4095)).

## 4. Community Hot Topics
*   **Built-in Skills & MCPs ([Issue #280](https://github.com/agentscope-ai/QwenPaw/issues/280) - 27 comments):** The community is heavily invested in discussing which third-party Model Context Protocols (MCPs) and custom skills should be pre-installed to improve the "out-of-the-box" experience.
*   **Long Context Failures ([Issue #4059](https://github.com/agentscope-ai/QwenPaw/issues/4059) - 8 comments):** Users are frustrated by the AI halting mid-task during lengthy conversations. Even the `/compact` command fails to resolve the issue, forcing users to open new sessions and lose context.
*   **UI Lag in Multi-Turn Dialogues ([Issue #3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) - 7 comments):** A heavily discussed topic regarding severe UI scrolling lag when a single chat window exceeds 200+ rounds of conversation, highlighting a frontend memory/rendering bottleneck for power users running complex, continuous project iterations.

## 5. Bugs & Stability
*   **High Severity - Session Memory Loss in Docker:** Upgrading to v1.1.5.post2 has introduced a critical bug where the agent forgets the latest session context and loses running configurations ([Issue #4101](https://github.com/agentscope-ai/QwenPaw/issues/4101)). 
*   **Medium Severity - Streaming Model ReAct Loops:** Using streaming models like DeepSeek-V4 causes the ReAct loop to infinitely repeat tool calls and duplicate responses ([Issue #4034](https://github.com/agentscope-ai/QwenPaw/issues/4034)). 
*   **Medium Severity - Channel Instabilities:** WeChat channel users report silent message loss under normal network conditions ([Issue #4056](https://github.com/agentscope-ai/QwenPaw/issues/4056)), and Feishu lacks user recognition capabilities ([Issue #4050](https://github.com/agentscope-ai/QwenPaw/issues/4050)). A fix for Feishu is currently under review in [PR #4098](https://github.com/agentscope-ai/QwenPaw/pull/4098).
*   **Low Severity - File Expiration:** Chat history file/image attachments expire after one day, leading to unhelpful UI errors ([Issue #4047](https://github.com/agentscope-ai/QwenPaw/issues/4047)). Addressed partially by [PR #4089](https://github.com/agentscope-ai/QwenPaw/pull/4089).

## 6. Feature Requests & Roadmap Signals
*   **Workspace Isolation:** Users are requesting the separation of core agent configuration files from everyday user documents to prevent accidental deletion of vital system files ([Issue #3967](https://github.com/agentscope-ai/QwenPaw/issues/3967)).
*   **Web Console Upgrades:** Strong demand exists for upgrading CoPaw directly via the web console, enabling easier remote management of headless deployments ([Issue #2235](https://github.com/agentscope-ai/QwenPaw/issues/2235)).
*   **Advanced Planning & LLM Support:** Requests to integrate experimental `PlanNotebook` for complex task decomposition ([PR #3238](https://github.com/agentscope-ai/QwenPaw/pull/3238)) and support for Vertex AI Gemini endpoints ([Issue #4030](https://github.com/agentscope-ai/QwenPaw/issues/4030)) suggest the roadmap is leaning heavily into complex Agentic workflows and enterprise LLM compatibility.

## 7. User Feedback Summary
Users are successfully utilizing CoPaw for complex, enterprise-grade workflows (e.g., project-level code iteration using A2A). However, user satisfaction is currently hampered by context limitations—the platform struggles to maintain stability over long, continuous tasks without UI lag or sudden task halts. Furthermore, initial setup UX (like adding models and managing API keys) is viewed as overly complex and click-heavy ([Issue #4036](https://github.com/agentscope-ai/QwenPaw/issues/4036)). On the positive side, users are highly appreciative of the expanding channel integrations (WeChat, Feishu) and the active community support in closing routine bugs.

## 8. Backlog Watch
*   **Configurable MCP Timeouts ([Issue #3997](https://github.com/agentscope-ai/QwenPaw/issues/3997)):** Currently, the `MCPClientConfig` Pydantic model silently drops user-defined `timeout` fields, leaving the default at 30s. This makes utilizing long-running MCP tools impossible and requires maintainer attention.
*   **Log Rotation on Windows/Linux ([PR #4076](https://github.com/agentscope-ai/QwenPaw/pull/4076)):** A first-time contributor submitted a fix for indefinite log file growth on Windows and Linux (where log rotation was accidentally only active on macOS). This PR needs a maintainer review and merge to prevent disk space exhaustion over time.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-08

## 1. Today's Overview
ZeroClaw is experiencing a period of high community engagement but significant operational friction, characterized by 50 open issues and 50 open pull requests updated in the last 24 hours, with zero closures or merges. The project is currently bottlenecked, likely awaiting maintainer review, as no PRs were merged and no new releases were cut today. A substantial portion of the activity is driven by ambitious Desktop/Tauri enhancements and critical bugs affecting core channels (WhatsApp, Telegram) and the runtime environment. This influx of unresolved "S1 - workflow blocked" issues suggests that the current open-source version may be facing stability challenges, heavily relying on community contributions to patch emerging incompatibilities with external providers like WhatsApp and vLLM.

## 2. Releases
There were **0 new releases** and **0 merged/closed PRs** today. The project remains on its latest existing version, with no migration notes or breaking changes introduced via release artifacts for this 24-hour period.

## 3. Project Progress
Because no PRs were merged today, project progress is currently stalled in terms of mainline code integration. However, several critical community contributions are actively seeking maintainer approval to advance the project:
*   **Desktop App Expansion:** The ongoing effort to pivot the Tauri desktop app into a menu-bar chat agent ([PR #5265](https://github.com/zeroclaw-labs/zeroclaw/pull/5265)) saw updates.
*   **Runtime & Provider Fixes:** A major PR addressing three production blockers related to `tool_choice`, orphaned tool uses, and vision capabilities ([PR #5892](https://github.com/zeroclaw-labs/zeroclaw/pull/5892)) is pending. 
*   **Security Enhancements:** Work on gated shell commands via TOTP ([PR #5779](https://github.com/zeroclaw-labs/zeroclaw/pull/5779)) is awaiting review.

## 4. Community Hot Topics
The most actively discussed items highlight deep integration pain points with third-party networks and the urgent need for providers to stop breaking changes:
*   **WhatsApp Web Protocol Breakage** ([Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246) - 6 comments): The most discussed issue today. A server-side protocol bump by WhatsApp in late April completely broke message flow. Users are actively discussing workarounds in the thread. A related PR attempting to clarify WhatsApp Web reinstall guidance ([PR #5075](https://github.com/zeroclaw-labs/zeroclaw/pull/5075)) is pending.
*   **Shell Autonomy Bug** ([Issue #6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) - 2 comments): Users reported high frustration that setting `[autonomy] level = "full"` still refuses to execute shell commands. This indicates a critical flaw in the tool dispatch routing logic that effectively breaks power-users' automated workflows.
*   **ACP "cwd" Sandbox Lockout** ([Issue #6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516) - 2 comments): Users running ZeroClaw in Agentic Coding Protocol (ACP) sessions are being locked out of reading their own skill files when changing their working directory, highlighting overly aggressive security sandboxing.

## 5. Bugs & Stability
ZeroClaw is currently tracking multiple high-severity bugs affecting core functionalities. 
*   **S1 - Workflow Blocked:**
    *   **Custom Provider Multimodal Failure** ([Issue #6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399)): Custom remote providers fail to process images because ZeroClaw sends local file paths instead of Base64/data URLs. (Note: A potential fix is pending in [PR #5892](https://github.com/zeroclaw-labs/zeroclaw/pull/5892)).
    *   **Google Workspace Tool on Windows** ([Issue #6410](https://github.com/zeroclaw-labs/zeroclaw/issues/6410)): Rust's `Command` library fails to resolve `.cmd` extensions (like `gws.cmd`), breaking Google Workspace tool usage for Windows users and causing unsafe JSON mangling via the shell fallback.
    *   **Llama.cpp Onboarding 500s** ([Issue #6377](https://github.com/zeroclaw-labs/zeroclaw/issues/6377)): Llama.cpp defaults to the wrong API mode during onboarding, causing hard crashes on tool usage. (Fix attempted in [PR #5088](https://github.com/zeroclaw-labs/zeroclaw/pull/5088)).
*   **S2 - Degraded Behavior:**
    *   **Docker Bind Mount Shadowing** ([Issue #6400](https://github.com/zeroclaw-labs/zeroclaw/issues/6400)): The pre-built web dashboard is wiped out by standard Docker bind mount instructions.
    *   **Postgres Memory Panics** ([Issue #6472](https://github.com/zeroclaw-labs/zeroclaw/issues/6472)): Attempting to use Postgres for memory causes a Tokio runtime panic due to nested runtime initialization.
    *   **Bash Completion Crash** ([Issue #6402](https://github.com/zeroclaw-labs/zeroclaw/issues/6402)): Tab completion causes infinite recursion, crashing user SSH sessions. (Currently marked `status:in-progress`).

## 6. Feature Requests & Roadmap Signals
A clear trend is emerging toward local-first compute, expanded desktop capabilities, and better UX for edge cases.
*   **macOS Desktop Dominance:** User/Contributor `theonlyhennygod` is championing a massive push for the Tauri desktop app. Key upcoming features include Universal macOS binaries ([Issue #6339](https://github.com/zeroclaw-labs/zeroclaw/issues/6339)), native Apple UI controls for agents ([Issue #6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499)), and lazy permission prompts ([Issue #6485](https://github.com/zeroclaw-labs/zeroclaw/issues/6485)).
*   **New Providers:** There is a strong signal to expand local/custom LLM support. A PR was opened today to add "Atomic Chat" as a local provider ([PR #6513](https://github.com/zeroclaw-labs/zeroclaw/pull/6513)), and a highly detailed issue was filed for first-class support of OpenAI-compatible endpoints like Kimi K2.5 ([Issue #6518](https://github.com/zeroclaw-labs/zeroclaw/issues/6518)).
*   **Cron "Announce" Mode:** Users want the ability to configure cron tasks to output only the final message rather than intermediate reasoning steps ([Issue #6510](https://github.com/zeroclaw-labs/zeroclaw/issues/6510)).

## 7. User Feedback Summary
User feedback currently reflects a **polarized experience**. On one hand, power users are highly enthusiastic about advanced features like ACP sessions, local LLM integrations, and the new desktop app. On the other hand, basic operational stability is heavily criticized. Users deploying ZeroClaw via Docker or connecting to custom endpoints (vLLM, Llama.cpp, remote Gemma models) are hitting immediate roadblocks regarding documentation errors ([Issue #6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393)) and missing Docker images ([Issue #6500](https://github.com/zeroclaw-labs/zeroclaw/issues/6500)). Furthermore, context window management is causing noticeable AI hallucination/topic drift ([Issue #6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517)), which degrades the perceived reliability of the assistant.

## 8. Backlog Watch
The project has a massive review bottleneck, with highly critical PRs sitting unanswered for weeks:
*   **[PR #5359](https://github.com/zeroclaw-labs/zeroclaw/pull/5359):** GitHub Copilot integration (Open since April 5). A huge feature request that is currently stalled.
*   **[PR #5652](https://github.com/zeroclaw-labs/zeroclaw/pull/5652):** Native extended thinking for Anthropic and Bedrock (Open since April 11). Crucial for agentic reasoning but awaiting review.
*   **[PR #5892](https://github.com/zeroclaw-labs/zeroclaw/pull/5892):** Production blockers for vLLM, vision, and tool choices (Open since April 19). Delaying this merge directly impacts users attempting to use ZeroClaw with modern open-source local models.
*   **[Issue #6246](https://github.com/zeroclaw-labs/zeroclaw/issues/6246):** The WhatsApp Web channel has been broken since April 30, and with the issue still open, channel-reliant users are completely dead in the water.

</details>