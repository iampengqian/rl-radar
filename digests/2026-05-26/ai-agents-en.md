# OpenClaw Ecosystem Digest 2026-05-26

> Issues: 461 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-25 22:19 UTC

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

# OpenClaw Project Digest — 2026-05-26

## 1. Today's Overview
OpenClaw is experiencing highly active development, with 461 issues and 500 pull requests updated in the last 24 hours alone. The project shows strong community engagement and a healthy ratio of closed to open issues (282 closed vs. 179 open), indicating responsive maintainer and contributor triage. The release of `v2026.5.24-beta.2` brings significant usability enhancements for the iMessage channel. Under the hood, the team is making major architectural strides, notably the "internalize OpenClaw agent runtime" refactor (PR #85341) which removes the legacy Pi-shaped architecture. However, the high volume of `P1` bugs related to session management, gateway stability, and message delivery suggests that the rapid iteration is introducing regressions that need stabilization.

## 2. Releases
- **v2026.5.24-beta.2**
  - **Changes:** Introduces thumb-approval reactions for the iMessage channel. A 👍 (Like tapback) now resolves as `allow-once` and a 👎 resolves as `deny`. The explicit-approver allowlist is read from `channels.imessage.allowFrom`.
  - **Migration Notes:** The `allow-always` action remains a manual fallback via the `/approve <id> allow-always` text command. Users utilizing iMessage for agent approvals should familiarize themselves with the new reaction-based workflow.

## 3. Project Progress
Development velocity is exceptionally high, with 220 PRs merged/closed today. Key advancements include:
- **Architecture Refactoring:** The massive XL-sized PR [#85341](https://github.com/openclaw/openclaw/pull/85341) is actively progressing, aiming to internalize the agent runtime and remove the Pi-based embedded dependency.
- **Channel Broker Capabilities:** PR [#86165](https://github.com/openclaw/openclaw/pull/86165) advances Channel Broker Phase 4, consolidating maintenance across native channel plugins (Telegram, Discord, Slack, WhatsApp, iMessage, etc.).
- **Gateway & Performance Fixes:** Several PRs targeting gateway reliability were merged/closed, including caps on compaction checkpoint bytes ([PR #84824](https://github.com/openclaw/openclaw/pull/84824)), fixing silent Discord reply skips ([PR #85911](https://github.com/openclaw/openclaw/pull/85911)), and fixing usage cost display for unpriced models ([PR #85882](https://github.com/openclaw/openclaw/pull/85882)).
- **Security Boundaries:** Secure handling of Codex "yolo" app-server approval policies ([PR #85909](https://github.com/openclaw/openclaw/pull/85909)) and sandboxed workspace media staging ([PR #86531](https://github.com/openclaw/openclaw/pull/86531)) are actively being reviewed.

## 4. Community Hot Topics
The community and maintainers are deeply engaged in resolving session state and multi-agent orchestration edge cases:
- **Subagent Completion Loss:** Issue [#44925](https://github.com/openclaw/openclaw/issues/44925) (17 comments) highlights a critical pain point where sub-agent task results are silently lost without retry or notification.
- **Session Takeover Errors:** The newly reported Issue [#85913](https://github.com/openclaw/openclaw/issues/85913) (9 comments) discusses `EmbeddedAttemptSessionTakeoverError` races between the heartbeat lane and direct lane on the same session file, revealing deep concurrency complexities in the current architecture.
- **Cron Job Exec Mode:** Issue [#18160](https://github.com/openclaw/openclaw/issues/18160) (12 comments, 9 👍) is a highly requested feature asking for direct execution mode for cron jobs to bypass the LLM `agentTurn` timeout overhead for simple commands.
- **Codex Runtime Parity:** Issue [#80319](https://github.com/openclaw/openclaw/issues/80319) (17 comments) features an ongoing QA discussion regarding the conflation of Codex-native tools with OpenClaw's dynamic tools, pointing to maturing testing standards for the project.

## 5. Bugs & Stability
The current beta cycle is exhibiting notable stability challenges, particularly around event-loop blocking and gateway resource management:
- **[P1] Event Loop Blocking on Windows (Beta Blocker):** Issue [#86599](https://github.com/openclaw/openclaw/issues/86599) reports local model provider calls blocking the gateway event loop on Windows, causing trivial infer runs to take ~4 minutes.
- **[P1] Event Loop Blocking on Startup (Fixed):** Issue [#85999](https://github.com/openclaw/openclaw/issues/85999) reported that `warmCurrentProviderAuthState` blocked the Node event loop for ~60s on startup. This regression from `v2026.5.22` has been closed, likely addressed by recent PRs.
- **[P1] File Descriptor Exhaustion:** Issue [#86613](https://github.com/openclaw/openclaw/issues/86613) reports the gateway accumulating >12K read-only file descriptors on workspace memory files, correlated with `memory_search` activity.
- **[P1] Silent Telegram Drops:** Issue [#80520](https://github.com/openclaw/openclaw/issues/80520) notes that Telegram messages are silently dropped without any `sendMessage` log.
- **[P0 Security] Memory Privacy Leakage:** Issue [#85240](https://github.com/openclaw/openclaw/issues/85240) (Closed) identified a critical cross-user privacy leak in `relevant-memories` where semantic recall lacked `sender_id` isolation.

## 6. Feature Requests & Roadmap Signals
Several feature requests signal clear roadmap directions for improved context management and channel flexibility:
- **Streaming Watchdog Thresholds:** Request for configurable streaming watchdog timeouts ([#68596](https://github.com/openclaw/openclaw/issues/68596)) to better support long-reasoning models like DeepSeek-R1 and Kimi-K2.5. *Prediction: Highly likely to be addressed in an upcoming beta to improve advanced model compatibility.*
- **Direct Exec Mode for Cron:** ([#18160](https://github.com/openclaw/openclaw/issues/18160)) *Prediction: Will likely be fast-tracked as it directly improves gateway reliability and reduces API token spend.*
- **Session Lineage Discovery:** ([#79903](https://github.com/openclaw/openclaw/issues/79903)) calls for durable session lineage across rotations. This aligns directly with the active internalization PR #85341 and the new SQLite transcript API efforts.
- **Xiaomi MiMo Token Plan Support:** ([#86169](https://github.com/openclaw/openclaw/issues/86169)) signals growing demand for broader, non-Western LLM provider coverage.

## 7. User Feedback Summary
Users are expressing a mix of excitement for new features (like iMessage tapbacks) and frustration with silent failures in production environments:
- **Pain Points:** A recurring theme in user feedback is "silent message dropping" and "session state bloat" (e.g., [#80520](https://github.com/openclaw/openclaw/issues/80520), [#85669](https://github.com/openclaw/openclaw/issues/85669)). Users operating agents via Telegram, Discord, and Matrix report that tool-heavy turns frequently result in generic fallback errors without explanation.
- **Local Model Friction:** Users trying to run local models (via `node-llama-cpp` on macOS/Windows) are hitting severe OS-specific bugs (e.g., crash loops on Apple Silicon [#44202](https://github.com/openclaw/openclaw/issues/44202), CPU blocking on Windows).
- **Satisfaction:** The active response from maintainers to security issues (like the memory leak fix) and the introduction of highly requested quality-of-life features (iMessage markdown stripping [#24943](https://github.com/openclaw/openclaw/issues/24943) and auto-acks [#10737](https://github.com/openclaw/openclaw/issues/10737)) show a healthy, responsive project management style.

## 8. Backlog Watch
Several high-priority items remain stuck in "needs-maintainer-review" or "needs-product-decision" states, indicating a bottleneck in strategic decision-making:
- **[#44925](https://github.com/openclaw/openclaw/issues/44925):** Subagent completion silently lost. Tagged with multiple `clawsweeper` flags and needing a product decision, this fundamental orchestration bug has been open since March 2026.
- **[#18160](https://github.com/openclaw/openclaw/issues/18160):** Direct Exec Mode for Cron Jobs. A highly upvoted feature stuck waiting for a security review and product decision.
- **[#60858](https://github.com/openclaw/openclaw/issues/60858):** Compaction silently blocked by `hasRealConversationContent` guards. A severe data-loss bug open since April 2026 that still needs a maintainer look.
- **PR [#85341](https://github.com/openclaw/openclaw/pull/85341):** The massive runtime internalization refactor is currently marked "📣 needs proof." This architectural shift requires immense reviewer bandwidth and is currently bottlenecking dependent PRs.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digest summaries for May 26, 2026.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a massive phase of architectural maturation and feature expansion. Projects are rapidly shifting from simple single-turn chat interfaces to complex, autonomous multi-agent orchestrators capable of utilizing multi-modal inputs, managing persistent memory, and executing complex tool-call workflows across diverse messaging channels. A clear divide is emerging between massive, all-encompassing frameworks (like OpenClaw and IronClaw) and lightweight, highly modular runners (like NanoBot and NullClaw). Across the board, maintainers are facing similar growing pains: stabilizing gateway event loops, securing local execution sandboxes, and navigating the rapid, breaking changes introduced by frontier LLM providers (e.g., Anthropic and OpenAI).

### 2. Activity Comparison
*Health Score is estimated based on issue triage ratio, PR merge velocity, and backlog management.*

| Project | Issues (24h) | Pull Requests (24h) | Release Status (May 26) | Health Score & Notes |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 461 | 500 | `v2026.5.24-beta.2` | **High:** Massive velocity, but high P1 bug count threatens stability. |
| **IronClaw** | 22 | 50 | None (Latest: v0.27.0) | **High:** Structured development, but blocked by `crates.io` packaging issues. |
| **LobsterAI** | 1 | 29 | None | **High:** Excellent PR merge ratio; focused on UI and subagent architecture. |
| **ZeroClaw** | 30 | 50 | Pending (v0.7.6/v0.80) | **Medium-High:** High velocity, but still recovering from a massive bulk revert. |
| **CoPaw** | 28 resolved | 32 merged | `v1.1.9-beta.1` | **High:** Very active community; recently migrated desktop app to Tauri. |
| **NanoBot** | 5 | 119 (108 open) | None | **Medium:** High community contribution, but severe maintainer review bottleneck. |
| **Hermes Agent**| 50 | 50 | Pending | **High:** Excellent triage ratio (27 open/23 closed); focus on security hardening. |
| **NanoClaw** | 3 | 18 | None | **Medium:** Stabilizing post-v2 rewrite; restoring missing features. |
| **Moltis** | Low | 4 merged | `20260525.01` | **High:** Focused, high-quality merges advancing multi-agent orchestration. |
| **PicoClaw** | 8 | 8 (None merged)| Nightly (`v0.2.9`) | **Medium:** High number of stale PRs indicates maintainer resource constraints. |
| **NullClaw** | 1 | 2 | None | **Healthy:** Quiet, focused development on expanding gateway capabilities. |
| **TinyClaw / ZeptoClaw**| 0 | 0 | N/A | **Dormant:** No activity in the last 24 hours. |

### 3. OpenClaw's Position
**Advantages vs Peers:**
OpenClaw remains the undeniable nexus of the ecosystem in terms of sheer volume and enterprise feature breadth. With nearly 1,000 issues and PRs processed in a single day, its community and core team are executing at a scale unmatched by any other project. Its integration breadth (iMessage, Telegram, Discord, Slack) and advanced feature set (e.g., tapback approvals, memory semantic recall, session lineage) position it as the most complete "out-of-the-box" personal AI framework. 

**Technical Approach Differences:**
While IronClaw uses a highly structured, phased approach (Rust/WASM-based "Reborn" architecture with attested signing), OpenClaw relies on a Node.js event-loop architecture. However, OpenClaw is currently paying a tax on this architecture: the project is battling severe event-loop blocking issues on Windows and file descriptor exhaustion that do not plague Rust-based alternatives like NullClaw or IronClaw. 

**Community Size Comparison:**
OpenClaw's community dwarfs specialized projects like NullClaw or Moltis, resembling a mid-sized enterprise SaaS rather than a typical open-source repo. While this allows rapid iteration (220 PRs merged daily), it also introduces complex prioritization bottlenecks, as seen in critical roadmap decisions (e.g., Subagent completion loss, Cron direct exec mode) stalling in the backlog.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging simultaneously across independent projects:

*   **Sub-agent Orchestration & Concurrency:** Moving beyond simple bots to multi-agent systems. 
    * *OpenClaw, NanoBot, Hermes Agent, IronClaw, LobsterAI, Moltis,* and *NanoClaw* are all actively implementing sub-agent spawning, background execution, and inter-agent communication buses (e.g., Moltis's non-blocking spawn agents, OpenClaw's session lineage).
*   **Execution Sandboxing and Tool Security:** Locking down autonomous actions.
    * *Hermes, Moltis, ZeroClaw,* and *IronClaw* are heavily focused on preventing tool execution bypasses, expanding file system denylists, and sandboxing subprocess memory.
*   **Provider Compatibility / Breaking API Changes:** Keeping up with frontier models.
    * *PicoClaw, NanoBot, ZeroClaw,* and *CoPaw* are all issuing emergency patches to handle strict parameter rejections from Claude Opus/Sonnet and Gemini invariant violations.
*   **Tool Loop / Hallucination Guardrails:** Preventing autonomous cost spirals.
    * *NanoBot, OpenClaw,* and *LobsterAI* users are reporting critical issues where agents get stuck in infinite tool-call loops or burn tokens while idling, driving a demand for dynamic `tool_choice` routing and cycle detection.

### 5. Differentiation Analysis
*   **Enterprise vs. Local-First:** Projects like **CoPaw**, **OpenClaw**, and **LobsterAI** are heavily focused on multi-channel enterprise communications (QQ, WeChat, Slack, iMessage) and rich Web/TUI dashboards. Conversely, **NanoBot** and **NanoClaw** are distinctly local-first, lightweight, and optimized for CLI/TUI users running local models.
*   **Language & Architecture Stack:** **IronClaw** and **NullClaw** differentiate via Rust/Zig-based compiled efficiency, targeting strict performance, memory safety, and WASM integration. **OpenClaw**, **CoPaw**, and **NanoBot** leverage higher-level runtimes (Node.js, Python) to achieve faster feature iteration but suffer from event-loop blocking or slow desktop startup times.
*   **Target Audience:** **Moltis** is heavily leaning into autonomous orchestration and task-delegation. **LobsterAI** bridges the gap between a chat UI and an ecosystem directory (syncing with OpenClaw plugins). **ZeroClaw** focuses on highly granular security permissions and "computer-use" GUI interactions.

### 6. Community Momentum & Maturity
*   **Tier 1: High-Velocity Titans (OpenClaw, IronClaw, ZeroClaw, CoPaw, Hermes):** These projects are iterating relentlessly. They manage massive PR volumes and are actively shaping industry standards. However, they face scaling pains (review bottlenecks, package distribution lags, and architectural debt).
*   **Tier 2: Rapid Maturation (LobsterAI, NanoBot, NanoClaw, Moltis):** These projects are pushing major foundational overhauls (e.g., NanoClaw's v2 parity, Moltis's non-blocking agents). NanoBot is struggling slightly with maintainer bandwidth, while LobsterAI and Moltis show highly disciplined merge patterns.
*   **Tier 3: Niche & Emerging (PicoClaw, NullClaw):** Demonstrating steady, focused progress. NullClaw is quietly building foundational A2A (agent-to-agent) protocols, while PicoClaw is capturing the edge-device/RISC-V market, though it needs to clear its stale PR backlog.

### 7. Trend Signals
For AI agent developers and technical decision-makers, today's digests highlight three critical industry trends:

1.  **"Vibe-Coded" UIs are Causing Silent State Deaths:** As agents scale from simple chat to multi-turn, multi-tool orchestrators, state management is breaking. A massive trend across *NanoClaw, OpenClaw, CoPaw,* and *ZeroClaw* is the loss of chat history, silent dropping of messages in deduplication logic, and freezing UIs. **Actionable insight:** Robust, database-backed state management (e.g., SQLite) and strict CLI-to-frontend synchronization must be prioritized over new feature development.
2.  **Model Agnosticism is a Fragile Illusion:** The ecosystem relies heavily on OpenAI-compatible APIs, but providers (Anthropic, Gemini, Zhipu) are aggressively enforcing unique parameter sets. *PicoClaw* broke instantly on Claude Opus 4.7's release; *ZeroClaw* failed on Gemini's turn order. **Actionable insight:** Agent frameworks must decouple provider routing from core tool-loop logic and implement dynamic model-parameter detection rather than hardcoding API expectations.
3.  **Security is Shifting from "System Prompts" to "OS-Level Sandboxing":** Simply asking an LLM not to run `rm -rf` is no longer sufficient. Projects (*Hermes, Moltis, ZeroClaw*) are actively integrating OS-level sandboxing (Landlock, Bubblewrap, containerization), credential write-denylists, and token hashing. **Actionable insight:** Any agent framework aiming for enterprise production in 2026 must include robust, user-space sandboxing to prevent automated tool exploitation.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-26

## 1. Today's Overview
NanoBot is experiencing an exceptionally high volume of community activity today, driven largely by a massive influx of 119 pull requests (108 currently open). While this open PR count indicates a potential bottleneck in maintainer review cycles, the project's merge velocity remains steady with 11 PRs merged or closed within the last 24 hours. Issue activity is moderate (5 total), showing a healthy balance between feature requests and bug reports. Overall, the project is in a state of rapid, community-driven expansion, focusing heavily on multi-agent capabilities, new provider integrations, and UI/UX improvements.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
Significant architectural and feature-level advancements were merged or closed today:
*   **Unified App Experience ([PR #3991](https://github.com/HKUDS/nanobot/pull/3991)):** Merged a major overhaul that unifies CLI Apps and MCP (Model Context Protocol) presets into a single cohesive interface with a shared `agent-app.v1` manifest protocol.
*   **New Provider Support ([PR #3988](https://github.com/HKUDS/nanobot/pull/3988)):** Added a dedicated `step_plan` provider for StepFun's Step Plan subscription API, following existing gateway patterns.
*   **Sub-agent Configuration Fix ([PR #3978](https://github.com/HKUDS/nanobot/pull/3978)):** Fixed a valid bug where `maxConcurrentSubagents` was not being correctly propagated from the config down to the `SubagentManager`.
*   **Provider Reasoning Controls ([PR #3867](https://github.com/HKUDS/nanobot/pull/3867), [PR #3851](https://github.com/HKUDS/nanobot/pull/3851)):** Fixed issues routing models like MiMo through OpenRouter, ensuring the gateway correctly disables thinking/reasoning tokens when requested.
*   **Documentation & Contributing ([PR #3850](https://github.com/HKUDS/nanobot/pull/3850), [PR #3866](https://github.com/HKUDS/nanobot/pull/3866)):** Improved the contributor onboarding experience by fixing the `ruff format` documentation and expanding the secrets configuration examples.

## 4. Community Hot Topics
*   **Tool Looping & Guardrails:** The community is actively discussing how to prevent LLMs from getting stuck in infinite tool-calling loops. [Issue #3986](https://github.com/HKUDS/nanobot/issues/3986) (requesting universal loop detection and rate limiting) and [PR #3985](https://github.com/HKUDS/nanobot/pull/3985) (an attempt to fix it) highlight that users frequently encounter agents repeatedly calling tools like `grep` or `list_dir` with identical parameters.
*   **Terminal UI Experience:** [PR #2155](https://github.com/HKUDS/nanobot/pull/2155) has seen renewed activity. The user-contributed TUI (Terminal User Interface) aims to replace basic CLI interaction with a richer terminal experience, highlighting a strong desire for better local interaction paradigms.

## 5. Bugs & Stability
1.  **Critical (Agent Exit on Long Tasks):** [PR #3999](https://github.com/HKUDS/nanobot/pull/3999) / [Issue #3995 (Related)](https://github.com/HKUDS/nanobot/issues/3995) - *Status: Fix merged.* The `AgentRunner` previously exited with `stop_reason="completed"` during sustained goals if the LLM produced a final text response without explicitly calling `complete_goal`. This broke long-running autonomous tasks.
2.  **High (Empty Response Fallbacks):** [PR #4002](https://github.com/HKUDS/nanobot/pull/4002) points out that models like Kimi 2.6 occasionally return only reasoning tokens without usable content or tool calls. Orchestration bugs currently prevent the fallback chain from working correctly.
3.  **Medium (PowerShell Rendering):** [Issue #3995](https://github.com/HKUDS/nanobot/issues/3995) reports severe screen flickering in PowerShell during streaming responses due to forced newlines on every chunk.
4.  **Low (Anthropic Content Blocks):** [Issue #3993](https://github.com/HKUDS/nanobot/issues/3993) notes that Anthropic requires explicit "type" declarations in content blocks, which causes errors when a tool returns a bare dict.

## 6. Feature Requests & Roadmap Signals
Based on open issues and PRs, the next version will likely focus on **Agent Autonomy and Multi-Agent Systems**:
*   **Agent-to-Agent Communication:** [PR #3992](https://github.com/HKUDS/nanobot/pull/3992) introduces a cross-instance message bus for multi-agent collaboration.
*   **Advanced Memory Management:** [PR #3990](https://github.com/HKUDS/nanobot/pull/3990) proposes a single-phase memory consolidation system driven by `AgentLoop`, replacing the older two-phase Dream system. [PR #4003](https://github.com/HKUDS/nanobot/pull/4003) adds ownership guards to Dream-managed skills.
*   **Native Transcription / New APIs:** [Issue #4000](https://github.com/HKUDS/nanobot/issues/4000) and [PR #4004](https://github.com/HKUDS/nanobot/pull/4004) signal an expansion of native integrations, specifically requesting StepFun ASR and Kagi Search API support.
*   **Webhook Support for Telegram:** [PR #3996](https://github.com/HKUDS/nanobot/pull/3996) adds webhook mode for Telegram, moving beyond long-polling.

## 7. User Feedback Summary
*   **Pain Point - Infinite Loops:** Users are frustrated by agents burning tokens and getting stuck in repetitive tool-calling loops. The existing web-search-only guardrail is insufficient.
*   **Pain Point - Streaming Glitches:** Terminal users (especially on Windows PowerShell) experience noticeable visual bugs during response streaming.
*   **Satisfaction - Lightweight Design:** Users praise NanoBot for being lightweight and resource-efficient compared to alternatives (like OpenClaw), making it highly favored for local deployment and TUI integration (as noted in [PR #2155](https://github.com/HKUDS/nanobot/pull/2155)).

## 8. Backlog Watch
*   **High PR Backlog (108 Open):** Maintainers need to address the growing queue of open PRs. Many recent submissions are stuck at "0 comments," indicating a need for more reviewer bandwidth.
*   **Long-running TUI PR ([PR #2155](https://github.com/HKUDS/nanobot/pull/2155)):** Open since March 2026, this highly requested feature adds a TUI mode. It needs maintainer attention for final review and merging.
*   **Long-running Loop Detection ([PR #2271](https://github.com/HKUDS/nanobot/pull/2271)):** Open since March, this PR adds a `CycleDetector`. Given the recent surge in user complaints regarding tool looping (Issue #3986), this PR should be prioritized for review or superseded by a combined effort.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-26

## 1. Today's Overview
Hermes Agent experienced a highly active day with 50 issues and 50 pull requests updated, demonstrating robust development momentum and strong community engagement. Activity was heavily tilted toward core stability, security hardening, and architectural performance improvements. A significant theme of the day was the rapid "self-pentesting" of the dashboard, which uncovered and immediately patched several local attack vectors. The ratio of open to closed items (27 open / 23 closed issues; 26 open / 24 merged/closed PRs) indicates a healthy, well-triaged repository actively moving towards its next release. 

## 2. Releases
No new releases were cut today. The heavy volume of merged bug fixes and security patches suggests maintainers are likely finalizing a minor or patch version release in the near future.

## 3. Project Progress
Development today focused on hardening the agent's operational boundaries, patching gateway bugs, and enhancing tooling accuracy. Key merged PRs include:
*   **Dashboard Security & Secret Hardening:** PR [#32277](https://github.com/NousResearch/hermes-agent/pull/32277) merged to allowlist plugin assets and denylist subprocess-influencing env vars. This closed issue [#32267](https://github.com/NousResearch/hermes-agent/issues/32267) and was driven by the newly merged `web-pentest` skill ([#32265](https://github.com/NousResearch/hermes-agent/pull/32265)).
*   **Secrets Management Optimization:** PR [#32271](https://github.com/NousResearch/hermes-agent/pull/32271) was merged to ensure external secrets are applied only once per `HERMES_HOME` per process, eliminating redundant network calls to vaults like Bitwarden on module imports.
*   **Improved Patching & Logging:** Merged PR [#32273](https://github.com/NousResearch/hermes-agent/pull/32273) added indent and CRLF preservation to the file patch tool. PR [#32264](https://github.com/NousResearch/hermes-agent/pull/32264) ensured outer-loop exceptions now log at `ERROR` level with full tracebacks instead of `DEBUG`.
*   **Housekeeping:** Merged PR [#32260](https://github.com/NousResearch/hermes-agent/pull/32260) dropped the retired `grok-4-1-fast` model from metadata, and PR [#32266](https://github.com/NousResearch/hermes-agent/pull/32266) fixed a cron file descriptor leak.

## 4. Community Hot Topics
The community is heavily focused on UI/UX improvements and pushing the boundaries of Hermes as a multi-modal, autonomous platform.
*   **Dashboard Readability ([#18080](https://github.com/NousResearch/hermes-agent/issues/18080)):** With 19 comments and 27 👍, this is the most active issue. Users are frustrated by the non-standard fonts, light font weights, and poor contrast in the Midnight, Ember, and Cyberpunk TUI themes. Underlying need: Users spend long hours in the dashboard and require ergonomic, accessible UI defaults.
*   **Platform-Native Rich Interactions ([#503](https://github.com/NousResearch/hermes-agent/issues/503)):** With 8 comments, users are eagerly requesting inline keyboards and structured UI components for Telegram, Slack, and Discord, moving beyond plain-text responses.
*   **Secure Secrets Management ([#410](https://github.com/NousResearch/hermes-agent/issues/410)):** Heavily discussed (7 comments), the community wants to move away from plaintext `.env` files towards a first-class secrets manager with scoped access and redaction.
*   **Docker Permissions & Unraid Compatibility ([#23402](https://github.com/NousResearch/hermes-agent/issues/23402)):** 7 comments highlight user friction in deploying Hermes via Docker on Unraid servers, specifically surrounding `HERMES_UID` and permission mapping for the chat feature.

## 5. Bugs & Stability
Several high-severity bugs regarding core infrastructure, gateway stability, and CLI usability were reported today:
*   **P1: Cron FD Leaks:** Issue [#31736](https://github.com/NousResearch/hermes-agent/issues/31736) reported that the Kanban dispatcher opens SQLite WAL connections every tick, causing File Descriptor pressure. *Fix available in PR [#32276](https://github.com/NousResearch/hermes-agent/pull/32276).*
*   **P2: Terminal Freeze on `/clear`:** Issue [#32207](https://github.com/NousResearch/hermes-agent/issues/32207) reports that executing `/clear` completely freezes the terminal for Windows 11 / WSL users. *No fix PR yet.*
*   **P2: Synchronous Blocking in Agent Init:** Issue [#32221](https://github.com/NousResearch/hermes-agent/issues/32221) highlights severe latency in `AIAgent.init` due to synchronous, blocking `httpx.post` calls during construction. *No fix PR yet.*
*   **P2: Gateway Scalar Config Crash:** The `/model X --global` command silently crashed if `config.yaml` had a flat string instead of a nested dict. *Fix available in PR [#32272](https://github.com/NousResearch/hermes-agent/pull/32272).*
*   **P2: Tool Result Format Rejection:** Strict API upstreams rejected dict payloads from tool handlers. *Fix available in PR [#31770](https://github.com/NousResearch/hermes-agent/pull/31770).*

## 6. Feature Requests & Roadmap Signals
Feature development is trending toward autonomous lifecycle management, security auditing, and better context compression. Signals for upcoming versions include:
*   **Heartbeat Notifications ([#14425](https://github.com/NousResearch/hermes-agent/issues/14425)):** Users strongly need progress indicators for long-running tool executions to avoid the appearance of a frozen agent.
*   **Advanced Context Compression ([#24695](https://github.com/NousResearch/hermes-agent/issues/24695)):** A request to support fixed token thresholds in `config.yaml` to standardize compression behavior across models with different context windows.
*   **Credential Write Denylist Expansion ([#32262](https://github.com/NousResearch/hermes-agent/pull/32262)):** Expanding the file safety net to protect Kubernetes, Heroku, Netlify, and Vercel local tokens.
*   **Prediction:** The next release will heavily feature the newly introduced `web-pentest` skill, tighter secrets management, and merged PRs fixing gateway memory/FD leaks.

## 7. User Feedback Summary
Users are power-users who frequently deploy Hermes in complex, headless environments (Unraid, WSL, headless gateways). They express dissatisfaction with the "silent" nature of the agent during long tasks and the fragility of its dashboard UI themes. However, satisfaction is high regarding the agent's expanding skill system and the maintainers' rapid response to security and architectural issues (such as the immediate patching of the dashboard plugin endpoint). There is clear excitement around multi-agent delegation, as seen in requests for Cursor SDK integration ([#30640](https://github.com/NousResearch/hermes-agent/issues/30640)) and Blackbox CLI skills.

## 8. Backlog Watch
The following highly-upvoted or critical items are languishing and need maintainer triage:
*   **UI Theme Overhaul ([#18080](https://github.com/NousResearch/hermes-agent/issues/18080)):** 27 👍. This is a major UX pain point that remains open.
*   **Long-Running Tool Heartbeats ([#14425](https://github.com/NousResearch/hermes-agent/issues/14425)):** Open since April 2026, causing consistent user frustration across CLI and messengers.
*   **Gateway Startup Sweep Leak ([#22064](https://github.com/NousResearch/hermes-agent/pull/22064)):** An open PR since early May that prevents orphaned background tasks on startup failures; needs a final review and merge.
*   **Anthropic Rate Limit Handling ([#31668](https://github.com/NousResearch/hermes-agent/issues/31668)):** Reports of persistent 401s/failures with Anthropic's "Extra Usage" tiers that need an official architectural workaround.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-26

## 1. Today's Overview
PicoClaw shows **moderate-to-high activity** with 8 issues and 8 pull requests updated in the last 24 hours, though no PRs were merged today, suggesting a review bottleneck or weekend cadence. A new **nightly build (v0.2.9-nightly.20260525)** was published, indicating active development toward the next minor release. The majority of today's activity centers on **model provider compatibility**—specifically Anthropic's latest Claude models rejecting legacy parameters and model IDs. Community engagement is steady, with several new bug reports filed today, though stale PRs are accumulating. Overall project health appears stable, but the growing stale backlog warrants maintainer attention.

---

## 2. Releases

### **nightly: v0.2.9-nightly.20260525.ab6d3946**
- **Type:** Automated nightly build
- **Changelog:** [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)
- **Stability note:** May be unstable; not recommended for production.

No stable release was cut today. The nightly tracks the `main` branch as the project iterates toward a potential v0.2.9 stable.

---

## 3. Project Progress

**No PRs were merged today.** All 8 open PRs remain in review, several marked stale. Key PRs advancing (but not yet landed):

| PR | Area | Status | Significance |
|---|---|---|---|
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) | Real-time streaming | Open, stale | Adds `ChatStream` support via WebSocket — core infra for streaming UX |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) | MCP dynamic headers | Open, stale | Enables per-request auth header forwarding to MCP servers |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) | Performance | Open, stale | Reduces skill catalog token waste on tool iterations — significant cost savings |
| [#2893](https://github.com/sipeed/picoclaw/pull/2893) | New channel (Server酱³) | Open, stale | Community contribution expanding channel ecosystem |
| [#2942](https://github.com/sipeed/picoclaw/pull/2942) | Config fix | Open, fresh | Fixes default Claude model ID (dots → hyphens) |
| [#2940](https://github.com/sipeed/picoclaw/pull/2940) | Provider fix | Open, fresh | Omits deprecated `temperature` param for claude-opus-4-7 |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) | PID file fix | Open, stale | Verifies gateway identity to prevent crash loops from stale PIDs |
| [#2890](https://github.com/sipeed/picoclaw/pull/2890) | macOS path fix | Open, stale | Resolves symlinks in cwdPath for macOS compatibility |

**Assessment:** The contributor pipeline is healthy, but merge velocity is low. The stale markers on multiple PRs suggest the core team may be resource-constrained on review cycles.

---

## 4. Community Hot Topics

**Most active issue by engagement:**
- **[#1042](https://github.com/sipeed/picoclaw/issues/1042)** — `guardCommand` false-positive in exec tool (14 comments, 👍 2). Open since March, this bug where the workspace safety regex incorrectly flags URLs like `wttr.in/Beijing` as path traversal remains unresolved. Users working with HTTP-based tool/skill commands are particularly affected.

**Most discussed feature request:**
- **[#1950](https://github.com/sipeed/picoclaw/issues/1950)** — Streaming output for Web Chat (10 comments). Closed today, though marked as "Nice-to-Have" aligned with roadmap. The closure suggests it may have been addressed by PR [#2853](https://github.com/sipeed/picoclaw/pull/2853) or deprioritized.

**Fresh high-interest issues today:**
- **[#2943](https://github.com/sipeed/picoclaw/issues/2943)** — WeChat channel + GLM-5 vision API incompatibility. Highlights growing pains in multi-model, multi-channel integration.
- **[#2941](https://github.com/sipeed/picoclaw/issues/2941)** & **[#2939](https://github.com/sipeed/picoclaw/issues/2939)** — Two Anthropic model configuration issues filed by the same user on the same day, indicating rapid adoption of new Claude models.

**Underlying need:** The community is pushing PicoClaw into **diverse deployment scenarios**—WeChat bots, vision models, RISC-V boards, and bleeding-edge model SKUs. The project's configuration and safety guardrails need to keep pace.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Fix PR? | Details |
|---|---|---|---|
| 🔴 **High** | [#2720](https://github.com/sipeed/picoclaw/issues/2720) — Stale PID crash loop | ✅ [#2813](https://github.com/sipeed/picoclaw/pull/2813) | Gateway fails to start when OS reuses PID. Widespread in containerized/restart-heavy environments. |
| 🟠 **Medium** | [#1042](https://github.com/sipeed/picoclaw/issues/1042) — exec guardCommand regex false-positive | ❌ None | Blocks legitimate HTTP commands when `restrict_to_workspace=true`. Long-standing (since March). |
| 🟠 **Medium** | [#2941](https://github.com/sipeed/picoclaw/issues/2941) — Invalid default model ID for claude-sonnet-4.6 | ✅ [#2942](https://github.com/sipeed/picoclaw/pull/2942) | Fresh install → first message fails with 404. Bad first-user experience. |
| 🟠 **Medium** | [#2939](https://github.com/sipeed/picoclaw/issues/2939) — claude-opus-4-7 rejects `temperature` param | ✅ [#2940](https://github.com/sipeed/picoclaw/pull/2940) | Unconditional `temperature` write causes HTTP 400 on Anthropic's latest model. |
| 🟡 **Low** | [#2796](https://github.com/sipeed/picoclaw/issues/2796) — History only shows last user message | ❌ None | UX issue in multi-turn conversation history display. |
| 🟡 **Low** | [#2943](https://github.com/sipeed/picoclaw/issues/2943) — WeChat + GLM-5 vision API error 1210 | ❌ None | Image message forwarding to Zhipu GLM-5 fails with parameter error. |
| 🟡 **Low** | [#2887](https://github.com/sipeed/picoclaw/issues/2887) — RISC-V .deb incompatible with OpenAI model | ❌ None | Platform-specific binary issue on Debian RISC-V. |

**Stability assessment:** The Anthropic provider layer is the most fragile area today, with two independent breakages on newly released Claude models. Both have same-day fix PRs from the community ([#2942](https://github.com/sipeed/picoclaw/pull/2942), [#2940](https://github.com/sipeed/picoclaw/pull/2940)), which should be prioritized for merge.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood |
|---|---|---|
| **Real-time streaming output** | [#1950](https://github.com/sipeed/picoclaw/issues/1950) (closed), [#2853](https://github.com/sipeed/picoclaw/pull/2853) (open) | **High** — PR exists with implementation; closure of the issue may signal imminent merge |
| **MCP per-request auth headers** | [#2696](https://github.com/sipeed/picoclaw/pull/2696) | **Medium** — Important for enterprise MCP server integrations; stale but technically sound |
| **Server酱³ notification channel** | [#2893](https://github.com/sipeed/picoclaw/pull/2893) | **Medium** — Community-contributed; expands Chinese market reach |
| **Token/cost optimization** | [#2781](https://github.com/sipeed/picoclaw/pull/2781) | **Medium-High** — Skill catalog dedup across turns is a clear cost win; aligns with efficiency goals |

**Prediction for v0.2.9 stable:** Anthropic config fixes ([#2942](https://github.com/sipeed/picoclaw/pull/2942), [#2940](https://github.com/sipeed/picoclaw/pull/2940)) and PID fix ([#2813](https://github.com/sipeed/picoclaw/pull/2813)) are the most likely candidates. Streaming ([#2853](https://github.com/sipeed/picoclaw/pull/2853)) could land if review unblocks.

---

## 7. User Feedback Summary

**Pain points expressed by users:**

1. **Bleeding-edge model support lag:** Users adopt new Claude models (claude-sonnet-4.6, claude-opus-4-7) on day one, and PicoClaw's hardcoded parameters break immediately. Community contributor *LegendAlessandro-Liguori* filed two bugs and two fix PRs in a single day — a strong signal that the provider abstraction layer needs more resilient defaults or auto-configuration.

2. **Safety guardrails overreach:** The `guardCommand` regex ([#1042](https://github.com/sipeed/picoclaw/issues/1042)) is too aggressive, blocking legitimate URL-based commands. Users running weather/HTTP skills in workspace-restricted mode are hit hard.

3. **Multi-channel fragility:** WeChat channel ([#2943](https://github.com/sipeed/picoclaw/issues/2943)) + GLM-5 vision API failures show that multi-model, multi-channel combinations receive insufficient integration testing.

4. **History UX regression:** Users with multi-turn conversations ([#2796](https://github.com/sipeed/picoclaw/issues/2796)) can't review full message history, suggesting the compression/summarization layer leaks into the display layer.

5. **Platform support gaps:** RISC-V users ([#2887](https://github.com/sipeed/picoclaw/issues/2887)) report non-functional .deb packages, indicating CI/build matrix coverage issues.

**Positive signals:** Active community contributions (same-day fix PRs), engagement on roadmap-aligned features (streaming), and growing adoption across diverse platforms and providers suggest healthy organic growth.

---

## 8. Backlog Watch

Items needing urgent maintainer attention:

| Item | Age | Risk | Recommendation |
|---|---|---|---|
| [#1042](https://github.com/sipeed/picoclaw/issues/1042) — guardCommand regex | ~3 months | 🔴 Blocking users of HTTP-based skills | Prioritize a fix; the regex-based approach needs redesign |
| [#2853](https://github.com/sipeed/picoclaw/pull/2853) — ChatStream streaming | ~15 days, stale | 🟠 Feature-complete PR going stale | Review and merge; streaming is a top community ask |
| [#2781](https://github.com/sipeed/picoclaw/pull/2781) — Token optimization | ~20 days, stale | 🟠 Cost reduction for all users | Low-risk perf improvement; fast merge candidate |
| [#2813](https://github.com/sipeed/picoclaw/pull/2813) — PID identity check | ~19 days, stale | 🟠 Prevents crash loops in production | Directly addresses high-severity [#2720](https://github.com/sipeed/picoclaw/issues/2720) |
| [#2696](https://github.com/sipeed/picoclaw/pull/2696) — MCP dynamic headers | ~28 days, stale | 🟡 Enterprise feature request | Important for MCP ecosystem maturity |
| [#2942](https://github.com/sipeed/picoclaw/pull/2942) & [#2940](https://github.com/sipeed/picoclaw/pull/2940) — Anthropic fixes | <1 day | 🟠 Fresh PRs, high visibility | Fast-track review recommended |

**Systemic concern:** Five of eight open PRs are marked stale. The maintainers should consider a dedicated review sprint to clear the backlog, especially for high-impact fixes ([#2813](https://github.com/sipeed/picoclaw/pull/2813), [#2781](https://github.com/sipeed/picoclaw/pull/2781), [#2853](https://github.com/sipeed/picoclaw/pull/2853)) and the fresh Anthropic compatibility PRs.

---

*Digest generated on 2026-05-26. Data source: [sipeed/picoclaw](https://github.com/sipeed/picoclaw) GitHub activity.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-26

## 1. Today's Overview
NanoClaw is currently experiencing a **high-velocity active development phase**, likely a post-v2 rewrite stabilization and feature-restoration period. With 18 active pull requests updated in the last 24 hours (14 open, 4 merged/closed) and 3 open issues, the community and maintainers are aggressively patching regressions and porting legacy features. The high ratio of open PRs indicates either a recent flood of community contributions or a bottleneck in maintainer review time. No new software releases were cut today, suggesting the team is accumulating changes for a stabilized tag in the near future.

## 2. Releases
No new releases were recorded today. The project remains on its latest pre-existing version while core architecture and channel adapters are being actively refactored.

## 3. Project Progress
Significant forward momentum occurred today across stability, platform support, and core features. Four PRs were merged/closed, and several foundational PRs were opened:

*   **Merged/Closed PRs:**
    *   [`#2526`](https://github.com/qwibitai/nanoclaw/pull/2526): **CLI Group Deletion Fixed.** Resolved a critical `FOREIGN KEY constraint failed` error by implementing cascade deletion for dependent rows.
    *   [`#2344`](https://github.com/qwibitai/nanoclaw/pull/2344): **Build Unblocked.** Resolved five `tsc` compilation errors currently breaking `main`, fixing tightened types for `RoutableAgentMessage` and `Session`.
    *   [`#1968`](https://github.com/qwibitai/nanoclaw/pull/1968): **Per-Agent Model Config.** (Closed) A 5-commit chain establishing first-class, chat-driven per-agent provider and model selection.
    *   [`#2612`](https://github.com/qwibitai/nanoclaw/pull/2612): **Triage Skill.** (Closed) Added an end-to-end incident investigation skill powered by Skyler.

*   **Major PRs Opened/Advanced:**
    *   [`#2618`](https://github.com/qwibitai/nanoclaw/pull/2618): Restoring missing v1 multimodal capabilities (Image, Voice, PDF) and `chat.onReaction`.
    *   [`#2619`](https://github.com/qwibitai/nanoclaw/pull/2619): Re-implementing the missing `/health` HTTP probe for production uptime monitoring.
    *   [`#2613`](https://github.com/qwibitai/nanoclaw/pull/2613), [`#2614`](https://github.com/qwibitai/nanoclaw/pull/2614), & [`#2615`](https://github.com/qwibitai/nanoclaw/pull/2615): A coordinated effort to add Slack Socket Mode and thread-context seeding.

## 4. Community Hot Topics
The community is highly focused on messaging reliability, specifically how the agent utilizes the Model Context Protocol (MCP). 
*   **The Deduplication / Silent Drop Bug ([`#2506`](https://github.com/qwibitai/nanoclaw/issues/2506) & [`#2404`](https://github.com/qwibitai/nanoclaw/issues/2404)):** The most actively discussed issues revolve around agent messaging via MCP. If an agent uses `send_message` and `<message>` blocks simultaneously, it double-delivers. Conversely, the subsequent deduplication logic causes the agent to silently drop responses if turns complete within 60 seconds of each other. *Underlying need:* Users require absolutely reliable, non-blocking message delivery for synchronous and semi-synchronous chat use cases.
*   **Multi-Workspace Slack Support ([`#1804`](https://github.com/qwibitai/nanoclaw/issues/1804)):** With 2 comments and ongoing relevance, this feature request highlights a core architectural limitation in v2 where the channel registry overwrites subsequent adapters of the same type, preventing multiple Slack workspace integrations on a single instance.

## 5. Bugs & Stability
The v2 architecture has exposed several critical stability and data integrity bugs, ranked by severity below:

1.  **Critical: Message routing silently drops responses** ([`#2506`](https://github.com/qwibitai/nanoclaw/issues/2506)): Client timeouts and lost agent turns. No dedicated fix PR is currently tracking this specific race condition.
2.  **High: SQLite Foreign Key Constraints** ([`#2525`](https://github.com/qwibitai/nanoclaw/issues/2525)): Breaking `ncl groups delete`. **Fixed in PR [`#2526`](https://github.com/qwibitai/nanoclaw/pull/2526).**
3.  **High: Missing Group Filesystem Initialization** ([`#2610`](https://github.com/qwibitai/nanoclaw/pull/2610)): `ncl groups create` fails to spawn containers later because it skips creating `container_configs`. **Fix PR opened.**
4.  **Medium: Broken Base Compilation** ([`#2344`](https://github.com/qwibitai/nanoclaw/pull/2344)): `main` was failing to compile due to type mismatches. **Fixed/Merged.**
5.  **Low: Context Loss in CLI Approvals** ([`#2611`](https://github.com/qwibitai/nanoclaw/pull/2611)): CLI context is lost when admin-approved commands are replayed. **Fix PR opened.**

## 6. Feature Requests & Roadmap Signals
Based on today's issue tracker and PR pipeline, the immediate roadmap is clearly focused on **v2 feature parity** and **multi-tenant/multi-platform readiness**:
*   **Slack Enhancements:** Auto-detecting Socket Mode ([`#2613`](https://github.com/qwibitai/nanoclaw/pull/2613)) and supporting multiple workspaces ([`#1804`](https://github.com/qwibitai/nanoclaw/issues/1804)) signal a push toward enterprise-grade Slack support.
*   **Multimodal & Observability:** Restoring `/health` ([`#2619`](https://github.com/qwibitai/nanoclaw/pull/2619)) and multimodal/voice attachments ([`#2618`](https://github.com/qwibitai/nanoclaw/pull/2618)) are prerequisites for moving out of beta. 
*   **Apple Container Support:** ([`#2609`](https://github.com/qwibitai/nanoclaw/pull/2609)) indicates the project is expanding its deployment matrix to include Apple's native containerization.

## 7. User Feedback Summary
Users are enthusiastic but experiencing friction typical of a major architectural rewrite (v1 to v2). 
*   **Pain points:** The transition to v2 has seemingly broken or omitted core functionalities like multimodal inputs, reliable message delivery, and proper slash-command parsing ([`#2346`](https://github.com/qwibitai/nanoclaw/pull/2346)). Database schema migrations (like the group deletion bug) feel incomplete.
*   **Satisfaction:** Despite the bugs, community engagement is exceptionally healthy. Contributors like `IamAdamJowett`, `apparentsoft`, and `johnmathews` are actively building advanced features (per-agent configs, socket modes, health checks) and fixing tight type-safety issues, showing a strong developer-centric satisfaction with the project's core architecture.

## 8. Backlog Watch
Maintainers should address the following aging or high-impact items requiring review:
*   **PR Review Bottleneck:** There are 14 open PRs. Complex architectural additions like End-to-End per-agent model configuration ([`#1968`](https://github.com/qwibitai/nanoclaw/pull/1968) - closed) and Chat SDK Bridge routing ([`#2617`](https://github.com/qwibitai/nanoclaw/pull/2617)) need maintainer eyes to keep momentum.
*   **Aging Core Bug:** The "double delivery" MCP tool issue ([`#2404`](https://github.com/qwibitai/nanoclaw/issues/2404)) has been open since May 10th and fundamentally breaks chat reliability. 
*   **Multi-Workspace Architecture ([`#1804`](https://github.com/qwibitai/nanoclaw/issues/1804)):** Open since mid-April. Before more Slack features are merged, the core channel registry bottleneck (`activeAdapters` overwriting) needs a structural decision from the lead architects.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the project digest for NullClaw based on the provided data for May 26, 2026.

### 1. Today's Overview
Project NullClaw experienced moderate, focused activity over the past 24 hours, with 1 open issue and 2 pull requests being updated. Currently, there is a 1-to-1 ratio of community bug reporting to active feature development, alongside standard automated repository maintenance. The open pull request indicates ongoing work to expand the project's gateway capabilities and configuration handling, while the issue highlights a friction point in the developer onboarding experience. Overall, the project remains active, though no new official software releases were cut today.

### 2. Releases
No new releases were recorded for NullClaw on 2026-05-26.

### 3. Project Progress
Progress today consisted of standard automated dependency maintenance, clearing the path for manual feature development:
*   **Closed PR:** [#931 (ci(deps): bump busybox from 1.37 to 1.38)](https://github.com/nullclaw/nullclaw/pull/931) authored by `dependabot[bot]`. This routine update bumps the `busybox` base image version in the Docker configuration from 1.37 to 1.38, ensuring containerized environments remain secure and up-to-date.
*   **Open PR:** [#933 (Add additional gateway methods)](https://github.com/nullclaw/nullclaw/pull/933) authored by `DonPrus`. This active PR represents a significant feature expansion, introducing authenticated media transcription endpoints for gateway clients, expanding the shared config parser, and improving security by hashing paired gateway tokens and adding timeout protections.

### 4. Community Hot Topics
*Due to low overall comment and reaction volume in the last 24 hours, the focus shifts to the most structurally impactful ongoing conversations.*
*   **Gateway Expansion ([PR #933](https://github.com/nullclaw/nullclaw/pull/933)):** Although currently lacking comments, this is the most active open PR. The underlying need here is clear: users require robust, authenticated A2A (agent-to-agent) and media-handling capabilities within the AI assistant's gateway.
*   **Documentation Friction ([Issue #932](https://github.com/nullclaw/nullclaw/issues/932)):** Opened recently, this issue points to a roadblock in the setup process. With no comments or reactions yet, it signals a need for maintainers to align the documentation with the current runtime requirements of the build environment.

### 5. Bugs & Stability
Only one bug was reported in the last 24 hours, and it pertains to build stability rather than runtime crashes:
*   **[Low/Build-time] Missing symbol `std.Io.Dir` ([Issue #932](https://github.com/nullclaw/nullclaw/issues/932)):** Reported by `nulldoubt`. Users attempting to build NullClaw using the Zig 0.15.2 prerequisite listed in the "Getting Started" docs will experience build failures. The underlying code actually requires Zig 0.16.0. **Status:** No fix PRs were submitted today. This is a low-severity issue that can be temporarily bypassed by advanced users, but it will likely cause frustration for new contributors.

### 6. Feature Requests & Roadmap Signals
There are no explicitly labeled feature requests from users in the last 24 hours. However, active development signals clear roadmap direction. Based on the open [PR #933](https://github.com/nullclaw/nullclaw/pull/933), the next version of NullClaw will likely introduce enhanced A2A (agent-to-agent) communication standards, native audio-to-text transcription routing via gateway clients, and stricter security configurations for token handling. 

### 7. User Feedback Summary
*   **Developer Pain Points:** The primary pain point identified today is documentation drift. Users relying on the official documentation are hitting compilation walls because the specified toolchain version (Zig) is outdated compared to the actual codebase requirements.
*   **Satisfaction/Dissatisfaction:** While explicit satisfaction metrics are absent today, the prompt identification of a build error (Issue #932) indicates an engaged and technical user base that is actively trying to build and contribute to the project locally.

### 8. Backlog Watch
The following items require immediate maintainer attention to prevent minor bottlenecks:
*   **[Issue #932](https://github.com/nullclaw/nullclaw/issues/932):** Awaits maintainer confirmation. A simple documentation patch or a quick comment from a maintainer confirming the correct Zig version would resolve this user blockage.
*   **[PR #933](https://github.com/nullclaw/nullclaw/pull/933):** As a large feature PR adding gateway methods, configuration handling, and security updates, it will require thorough code review from core maintainers to ensure the new A2A and STT integrations align with the project's broader architecture.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-26

## 1. Today's Overview
Project IronClaw is experiencing a period of exceptionally high development velocity, with 50 pull requests updated in the last 24 hours (21 merged/closed) and 22 active issues. The core development team is heavily focused on the **"Reborn" architecture upgrade**, executing a massive multi-phase infrastructure overhaul encompassing subagent spawning, tenant sandboxing, and secure attested signing. Despite the intense internal feature development, the project faces a critical packaging bottleneck (`crates.io`) and a few emerging stability concerns in production channels. Overall project health remains strong, driven by structured, methodical core contributions, though community contributors are beginning to surface vital real-world deployment bugs.

## 2. Releases
No new official releases were recorded today. The project's latest tagged version is `v0.27.0` (from April 29, 2026).

## 3. Project Progress
Today's merged and closed PRs reflect massive forward momentum on the Reborn infrastructure, GSuite integrations, and security enhancements:
*   **Subagent Spawning Foundation:** The prerequisite PR [Draft] Subagent spawn phase 0 ([#3867](https://github.com/nearai/ironclaw/pull/3867)) was merged, unblocking the subsequent phases ([#3868](https://github.com/nearai/ironclaw/pull/3868), [#3869](https://github.com/nearai/ironclaw/pull/3869), [#3870](https://github.com/nearai/ironclaw/pull/3870), [#3872](https://github.com/nearai/ironclaw/pull/3872)) which are currently active.
*   **Reborn WebUI & Runtime:** Closed [codex] Enable Reborn local yolo host access ([#4007](https://github.com/nearai/ironclaw/pull/4007)), capability lifecycle events ([#4050](https://github.com/nearai/ironclaw/pull/4050)), and runtime failure classification ([#4056](https://github.com/nearai/ironclaw/pull/4056)). 
*   **GSuite Integration:** Merged Phase 2 Google OAuth protocol helpers ([#3971](https://github.com/nearai/ironclaw/pull/3971)) and Phase 3 GSuite core handlers ([#3973](https://github.com/nearai/ironclaw/pull/3973)).
*   **Security & Attested Signing:** Advanced the 10-PR attested-signing stack with the merging of the `SigningProvider` trait crate ([#3960](https://github.com/nearai/ironclaw/pull/3960)).

## 4. Community Hot Topics
The most actively discussed items highlight critical dependency bottlenecks and architectural security debates:
*   **Crates.io Publishing Bottleneck:** Issue [Publish 0.25.0–0.27.0 to crates.io — downstream pinned to 0.24.0 by wasmtime 28.x CVEs #3259](https://github.com/nearai/ironclaw/issues/3259) (9 comments). Downstream users are unable to update because the latest versions are not published to crates.io, complicated by WASMTIME CVEs. This is currently the most pressing consumer-facing friction point.
*   **Security: Tool Dispatch Bypass:** Issue [Interactive chat tool calls bypass ToolDispatcher::dispatch #4017](https://github.com/nearai/ironclaw/issues/4017) (3 comments). Users and maintainers are actively discussing a critical architectural flaw where interactive chats bypass audit trails. 
*   **Testing Infrastructure:** Issue [Reborn: revise and implement binary-E2E test framework plan #3702](https://github.com/nearai/ironclaw/issues/3702) (4 comments) highlights ongoing discussions on standardizing Rust integration testing for the new architecture.

## 5. Bugs & Stability
*   **Critical - Discord Worker Deadlock:** [Discord channel stops replying while ironclaw stays active with tokio workers pinned at 100% CPU #4030](https://github.com/nearai/ironclaw/issues/4030). A QA report indicates the Discord WASM channel completely halts under load, pinning Tokio workers. No fix PR is attached yet.
*   **High - Broken CI Pipeline:** [Nightly E2E failed #3447](https://github.com/nearai/ironclaw/issues/3447). The automated nightly E2E test suite is failing consistently.
*   **Medium - Credit/Rate Limit Opaqueness:** [Improve Credit / Rate Limit Transparency and Prevent Token Consumption on Failed Requests #4043](https://github.com/nearai/ironclaw/issues/4043). Users report being charged for failed API requests.
*   **Fix in Progress - Security Bypass:** The aforementioned tool dispatch bypass (#4017) is being tracked and addressed via related open security architecture PRs like [feat(routing): per-channel MCP and built-in tool filtering #1378](https://github.com/nearai/ironclaw/pull/1378).

## 6. Feature Requests & Roadmap Signals
User-submitted feature requests today heavily lean toward deployment flexibility:
*   **Custom Telegram API Host:** Request [Feature Request: Custom Telegram API Host #4034](https://github.com/nearai/ironclaw/issues/4034) asks for support for self-hosted Telegram Bot API servers. Given the active Reborn channel porting currently happening (e.g., [Telegram v2 inbound tracer #3590](https://github.com/nearai/ironclaw/pull/3590)), this feature has a high likelihood of being incorporated into the v2 Telegram architecture.
*   **Subagents & Web UI v2:** Open PRs indicate the immediate roadmap includes merging the 4-phase subagent spawning mechanism and completing the static WebUI v2 port ([#4061](https://github.com/nearai/ironclaw/pull/4061)).

## 7. User Feedback Summary
Real-world deployers of IronClaw are expressing friction regarding deployment dependencies and observability. The frustration over `crates.io` version lag (#3259) shows that downstream Rust developers need predictable, secure access to the latest builds without resorting to direct Git dependencies. Furthermore, the reports of 100% CPU deadlocks on Discord (#4030) and missing credit transparency (#4043) indicate that while the core team is rapidly building next-gen "Reborn" features, operational stability and user/admin observability for existing channels require immediate attention.

## 8. Backlog Watch
*   **Crates.io Lag:** [Publish 0.25.0–0.27.0 to crates.io #3259](https://github.com/nearai/ironclaw/issues/3259) has been open since May 5th and requires immediate maintainer action to prevent downstream dependency churn.
*   **Per-channel MCP filtering:** [feat(routing): per-channel MCP and built-in tool filtering #1378](https://github.com/nearai/ironclaw/pull/1378) is an XL-sized PR from March 18th that is still open. It is heavily linked to today's active security discussions around the `ToolDispatcher`. Maintainers should prioritize a final review of this PR to unblock the security audit fixes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-05-26

## 1. Today's Overview
LobsterAI is demonstrating exceptionally high development velocity today, characterized by a massive pull request throughput of 29 updated PRs (14 open, 15 closed/merged) within the last 24 hours. The engineering focus is currently highly concentrated on deepening OpenClaw integration, resolving subagent architectures, and fixing UI/UX friction points in the renderer and main processes. While the issue tracker remains relatively quiet with only one new feature proposal, the merging of substantial community and core team PRs indicates a project in a mature, active optimization phase. No new software releases were cut today.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Significant architectural and feature advancements were merged today, pushing the platform's capabilities forward:
*   **Subagent Architecture:** Merged [PR #2011](https://github.com/netease-youdao/LobsterAI/pull/2011), introducing a detailed tree-view and independent detail pages for subagent sessions, a major leap for complex agent workflows.
*   **OpenClaw Ecosystem Sync:** Merged [PR #2042](https://github.com/netease-youdao/LobsterAI/pull/2042), enabling automatic discovery and synchronization of plugins installed via the OpenClaw directory, bridging the gap between the two platforms.
*   **Agent Lifecycle Management:** Merged [PR #1584](https://github.com/netease-youdao/LobsterAI/pull/1584), replacing name-based Agent IDs with short UUIDs to prevent legacy data "resurrection" bugs when agents are deleted and recreated.
*   **UX Enhancements:** Merged [PR #2013](https://github.com/netease-youdao/LobsterAI/pull/2013), refining the context window slider in the renderer to support K/M shorthand and snap-to-preset scales.

## 4. Community Hot Topics
The most active and impactful community discussion today revolves around memory management and OpenClaw interoperability:
*   **Agent Memory Architecture:** [Issue #2046](https://github.com/netease-youdao/LobsterAI/issues/2046) sparked conversation regarding the limitations of session-based memory. The user highlights that because titles and metadata are trapped in the browser's IndexedDB, cross-session memory is broken. This points to a strong underlying need for a persistent, agent-accessible file-system memory layer.
*   **OpenClaw Token Burning:** [PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049) addresses a critical operational pain point where aborted tool loops result in continuous idle token burning, indicating that foundational resource management in tool-execution loops is a hot topic for contributors.

## 5. Bugs & Stability
Several stability issues and bug fixes were identified or addressed today:
*   **Critical - Gateway Instability:** [PR #2043](https://github.com/netease-youdao/LobsterAI/pull/2043) (Merged) fixed a gateway crashLoop caused by GitHub Copilot token refreshes. 
*   **Critical - Token Leak:** [PR #2049](https://github.com/netease-youdao/LobsterAI/pull/2049) (Open) fixes an issue where missing upstream aborted-loop breakers caused unrestrained token burning during idle states.
*   **High - Session Freezing:** [PR #2047](https://github.com/netease-youdao/LobsterAI/pull/2047) (Open) targets a fix for session freezing, currently blocking user interactions.
*   **High - Gateway Timeouts:** [PR #2050](https://github.com/netease-youdao/LobsterAI/pull/2050) (Open) addresses gateway session patch timeouts that block chat sends.
*   **High - Silent Notification Failures:** [PR #1510](https://github.com/netease-youdao/LobsterAI/pull/1510) (Open) highlights a bug where scheduled tasks allow form submission without target conversations, causing IM notifications to fail silently.

## 6. Feature Requests & Roadmap Signals
*   **Persistent Agent Memory:** Requested in [Issue #2046](https://github.com/netease-youdao/LobsterAI/issues/2046). Users want session titles and metadata persisted to the file system automatically so agents can natively search past context. 
*   **OpenClaw Skill Sync:** Requested via [PR #2045](https://github.com/netease-youdao/LobsterAI/pull/2045) (Open). This feature allows automatic syncing of installed skills from OpenClaw while protecting core plugin skills from accidental deletion. Given today's merge of the plugin sync, this skill sync PR is highly likely to be merged in the next release.
*   **Dynamic Model Fetching:** Proposed in [PR #1522](https://github.com/netease-youdao/LobsterAI/pull/1522) (Open). Adding a "fetch model list" button to dynamically pull available models from provider APIs (e.g., GLM-5.1 support) rather than relying on hardcoded lists.

## 7. User Feedback Summary
Real-world user feedback suggests friction in daily operational workflows:
*   **State/Memory Fragmentation:** Users are frustrated by independent, disconnected sessions. The inability of the AI to autonomously recall previous work without manual copy-pasting diminishes the "personal assistant" illusion.
*   **UI Limitations in Configuration:** Users report missing UI elements for core settings, such as the inability to configure QQ Bot group allowlists ([PR #1514](https://github.com/netease-youdao/LobsterAI/pull/1514)) or a lack of detailed error messages when model connection tests fail ([PR #1524](https://github.com/netease-youdao/LobsterAI/pull/1524)).
*   **Visual Organization Needed:** The demand for color-coding sessions ([PR #1526](https://github.com/netease-youdao/LobsterAI/pull/1526)) indicates that users are managing a high volume of concurrent chats and need better visual triage tools.

## 8. Backlog Watch
The project has a significant backlog of high-quality, stale PRs requiring core maintainer review and CI validation:
*   **OAuth State Leakage:** [PR #1517](https://github.com/netease-youdao/LobsterAI/pull/1517) needs attention; it fixes a bug where closing the Settings UI drops GitHub Copilot auth tokens, forcing repeated re-authentications.
*   **Log Export Fatal Timeouts:** [PR #1515](https://github.com/netease-youdao/LobsterAI/pull/1515) addresses severe timeouts when exporting logs on low-config machines due to aggressive DEFLATE compression, which severely impacts support/debugging efforts.
*   **Dependency Security:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) is an ongoing Dependabot update bumping Electron from v40 to v42. Major framework bumps like this usually require maintainer intervention to test for renderer regressions.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-05-26

## 1. Today's Overview
The Moltis project experienced a highly active and productive day, marked by the merging of four significant Pull Requests and a new release. The development team is heavily focused on advancing the platform's multi-agent orchestration capabilities, specifically targeting non-blocking sub-agent execution and refined tool-choice routing. Activity wasn't limited to the core team; community members actively contributed to security, UI, and build-system enhancements. Overall, the project is in a state of rapid, healthy iteration, balancing major architectural feature additions with necessary security and stability hardening.

## 2. Releases
*   **Version:** `20260525.01`
*   **Summary:** This latest release rolls up the major merged PRs from the past 24 hours. It represents a significant leap in agent orchestration capabilities. 

## 3. Project Progress
The Moltis core team and contributors merged 4 PRs, significantly advancing the platform's feature set:
*   **feat(tools): support nonblocking spawn agents** ([PR #1067](https://github.com/moltis-org/moltis/pull/1067)): Authored by `penso`, this major architectural change allows parent agents to remain responsive while sub-agents work in the background, returning a task handle.
*   **feat(agents): support per-turn tool controls** ([PR #1069](https://github.com/moltis-org/moltis/pull/1069)): Also by `penso`, this introduces `active_tools` and `tool_choice` filtering, allowing developers to force tool usage and prevent cheap/small LLMs from hallucinating tool calls.
*   **Make sub-agent presets editable** ([PR #1070](https://github.com/moltis-org/moltis/pull/1070)): Enables create, edit, and delete flows for sub-agent presets via the Web UI, persisting them as markdown files.
*   **Expose Moltis version to prompts** ([PR #1068](https://github.com/moltis-org/moltis/pull/1068)): Contributed by `IlyaBizyaev`, this quality-of-life update allows workflows to dynamically track updates and apply version-specific logic.

## 4. Community Hot Topics
*   **Landlock Observability** ([Issue #868](https://github.com/moltis-org/moltis/issues/868)): Opened by `Cstewart-HC` last month, this issue received an update and has accumulated 1 thumbs-up. The underlying need is clearer: developers utilizing Moltis's sandbox features are hitting silent access denials and desperately need debug logging to troubleshoot permission issues.
*   **WebSocket Disconnections** ([Issue #1022](https://github.com/moltis-org/moltis/issues/1022)): Reported by `bsarkisov`, users are experiencing disruptive disconnects when updating LLM modes, indicating potential state-sync or network-keepalive issues in the web UI.

## 5. Bugs & Stability
*   **Docker Build Failures (Severity: High)**
    *   **Bug:** The project's build pipeline is currently broken due to a macro panic during compilation ([PR #1073](https://github.com/moltis-org/moltis/pull/1073)).
    *   **Status:** Fix PR submitted by `sayotte`.
*   **Cron Job Sandbox Misrouting (Severity: Medium)**
    *   **Bug:** Cron jobs explicitly marked for "Host" execution are erroneously running inside the sandbox ([Issue #1072](https://github.com/moltis-org/moltis/issues/1072)).
    *   **Status:** Open, reported recently by `thedanhoffman`. Could impact automated workflows requiring host-level permissions.
*   **Code Scanning Vulnerabilities (Severity: Medium)**
    *   **Bug:** CodeQL flagged issues including cleartext secret transmission and path traversal vulnerabilities.
    *   **Status:** Fix PR submitted by `penso` ([PR #1071](https://github.com/moltis-org/moltis/pull/1071)).

## 6. Feature Requests & Roadmap Signals
Two major feature requests from the community were officially closed today because their corresponding PRs were merged, signaling a strong roadmap commitment to **modular, multi-agent orchestration**:
*   **Non-blocking parent sessions** ([Issue #1004](https://github.com/moltis-org/moltis/issues/1004)): Users want to trigger long-running sub-agents without freezing the parent UI/agent. Expect to see heavy adoption of the new `nonblocking: true` parameter.
*   **Drift-resistant agent routing** ([Issue #1011](https://github.com/moltis-org/moltis/issues/1011)): To combat smaller LLMs (like Claude Haiku) failing to follow routing rules, the community requested forced tool-choice validation. With [PR #1069](https://github.com/moltis-org/moltis/pull/1069) merged, this is now a reality.

## 7. User Feedback Summary
Users are pushing Moltis into complex, automated environments, acting less as a simple chat interface and more as an autonomous orchestrator. There is a clear appreciation for the tool's sandboxing capabilities, though users desire better observability (e.g., Landlock logging). Frustration points revolve around infrastructure stability, specifically Docker build issues and UI-related WebSocket drops during session configurations.

## 8. Backlog Watch
*   **Landlock Logging ([Issue #868](https://github.com/moltis-org/moltis/issues/868)):** Created in April, this feature request remains open. Given that security hardening is actively being worked on (PR #1071), maintaining visibility into sandbox denials should be a priority.
*   **Open Security PR ([PR #1071](https://github.com/moltis-org/moltis/pull/1071)):** This code scanning fix PR is currently open and requires a prompt merge to ensure secrets and file paths are safely handled.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest: 2026-05-26

## 1. Today's Overview
CoPaw is experiencing a highly active and healthy development phase, maintaining strong momentum following the recent `v1.1.8` stable release. The community and core team closed a substantial amount of work today, with 28 issues resolved and 32 pull requests merged. The release of `v1.1.9-beta.1` indicates the project is actively iterating on console UI enhancements and underlying test architectures. Community engagement remains high, with users heavily testing advanced features like the new Coding Mode, third-party provider integrations, and scheduling, though this brings to light several edge-case bugs.

## 2. Releases
- **v1.1.9-beta.1**
  - **What's Changed:** Kicks off the `1.1.9` development cycle. Initial changes include an automatic page reload mechanism for the console when plugins are installed or uninstalled, and significant structural updates to the integration testing framework.
  - **Migration Notes:** None yet, as this is a beta pre-release.

## 3. Project Progress
Today saw the merging of several high-impact PRs, signaling rapid progress in UI, security, and core functionality:
*   **Coding Mode & UI:** Closed the foundational PR for **Coding Mode** ([PR #4578](https://github.com/agentscope-ai/QwenPaw/pull/4578)), embedding a VS Code-like IDE into the browser console. Dark mode support for this mode was also merged.
*   **Desktop App Tauri Migration:** The base Tauri 2.x desktop app support ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)) was merged, along with a Tauri auto-updater ([PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)) and a fix for the native Windows taskbar icon via Win32 API ([PR #3729](https://github.com/agentscope-ai/QwenPaw/pull/3729)). This marks a major architectural shift for the desktop client.
*   **Channel Improvements:** Added an interactive tool-guard approval card for QQ ([PR #4667](https://github.com/agentscope-ai/QwenPaw/pull/4667)) and fixed a DingTalk webhook collision bug ([PR #4665](https://github.com/agentscope-ai/QwenPaw/pull/4665)). A unified access control system was also merged ([PR #4565](https://github.com/agentscope-ai/QwenPaw/pull/4565)).
*   **Plugin Infrastructure:** Merged schema validation for `plugin.json` via Pydantic ([PR #4668](https://github.com/agentscope-ai/QwenPaw/pull/4668)).

## 4. Community Hot Topics
*   **Chat History Disappearing** ([Issue #4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)): 12 comments. This is a highly disruptive bug where users report losing session context. Underlying need: Users require 100% reliability in session persistence.
*   **Console UI Tool Calls Not Displaying** ([Issue #4644](https://github.com/agentscope-ai/QwenPaw/issues/4644)): 9 comments. The frontend frequently fails to render real-time tool calls without a manual page refresh. Underlying need: Transparent, real-time visibility into what the Agent is doing behind the scenes.
*   **MCP TaskGroup Agent Freezing** ([Issue #3640](https://github.com/agentscope-ai/QwenPaw/issues/3640)): 8 comments. Users executing long tasks via MCP experience silent agent "deaths" (unresponsive without throwing errors). 

## 5. Bugs & Stability
*   **P0 - Session State & Interruptions:**
    *   Chat histories vanishing ([Issue #4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)).
    *   Scheduled (cron) tasks being silently interrupted if the user sends a new message in the same session ([Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653)). 
*   **P1 - API & Provider Logic Bugs:**
    *   `reasoning_content` fails to inject properly when an assistant message contains a `file` block, breaking OpenAI-compatible reasoning models ([Issue #4675](https://github.com/agentscope-ai/QwenPaw/issues/4675)).
    *   Thought chains (reasoning content) completely fail to display in the console for `GLM-5.1`, though they work for DeepSeek/Kimi ([Issue #4650](https://github.com/agentscope-ai/QwenPaw/issues/4650)).
    *   Voice transcription ignores configured Whisper API and defaults to browser native Web Speech API ([Issue #4556](https://github.com/agentscope-ai/QwenPaw/issues/4556)).
*   **P2 - Desktop Performance:**
    *   Windows users consistently report agonizingly slow start times (~40 seconds) and lingering orphaned Python processes upon shutdown ([Issue #4664](https://github.com/agentscope-ai/QwenPaw/issues/4664), [Issue #4587](https://github.com/agentscope-ai/QwenPaw/issues/4587)). *(Note: The migration to Tauri in Progress section may eventually mitigate this).*

## 6. Feature Requests & Roadmap Signals
*   **Advanced Memory Architectures:** Users are actively requesting a "Summarize-Associate-Remind" mechanism ([Issue #4652](https://github.com/agentscope-ai/QwenPaw/issues/4652)) to stop the AI from repeating mistakes and to evolve the system from "information piling" to "knowledge accumulation". Expect memory/context RAG improvements in upcoming versions.
*   **Better Token/Time Context:** High demand to display exact send timestamps for chat messages ([Issue #4662](https://github.com/agentscope-ai/QwenPaw/issues/4662)) and per-turn token usage ([PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433)).
*   **Data Analysis Plugins:** A new "DataPaw" BI suite was proposed ([PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)), signaling a community desire to use CoPaw for local data analytics.

## 7. User Feedback Summary
**Satisfaction:** Users are highly enthusiastic about the breadth of features (coding mode, multi-channel support, local model support). 
**Pain Points:** 
1. **Client Performance:** The Python-packaged desktop app is heavily criticized for being slow and resource-heavy.
2. **Frontend Polish:** Numerous UI glitches, such as broken Markdown `<br>` tags in tables ([Issue #4497](https://github.com/agentscope-ai/QwenPaw/issues/4497)) and missing live updates for tool calls, frustrate daily power users.
3. **Multi-Model Inconsistencies:** As users map different providers (Anthropic, Ollama, custom OpenAI endpoints) into CoPaw, edge cases involving file types, reasoning tokens, and API routing are causing friction.

## 8. Backlog Watch
*   **File Operation Rollback ([PR #3346](https://github.com/agentscope-ai/QwenPaw/pull/3346)):** Open since April 13, this PR introduces crucial file-operation rollback capabilities. Needs a final maintainer review to push through.
*   **Security Module Unit Tests & File Whitelists ([PR #4467](https://github.com/agentscope-ai/QwenPaw/pull/4467), [PR #4267](https://github.com/agentscope-ai/QwenPaw/pull/4267)):** Both are massive, high-quality community contributions that have been under review for 1-2 weeks. Merging these is vital for the platform's enterprise readiness.
*   **MCP Internal Configuration Bug ([Issue #3445](https://github.com/agentscope-ai/QwenPaw/issues/3445)):** Open since mid-April. Users detail how GUI MCP configurations aren't passing to the ReMe module. Flagged as `invalid` previously but remains a user stumbling block.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-26

## 1. Today's Overview
ZeroClaw is experiencing a highly active development phase with no signs of slowdown, demonstrating robust open-source community health. The project saw 50 pull requests updated and 30 issues touched in the last 24 hours, driven heavily by architectural improvements and hardening of the agent runtime. A significant portion of today's activity centers around enhancing tool execution security, expanding channel integrations, and addressing provider compatibility bugs. With 33 open PRs currently in the review pipeline, the engineering velocity remains exceptionally high as contributors push toward the next release milestone.

## 2. Releases
No new releases were cut today. The project is actively accumulating merges toward a future release, with contributors actively tagging issues for version milestones like `v0.7.6` and `v0.80-beta1`.

## 3. Project Progress
Several key PRs were merged or closed today, advancing core stability and fixing irritating bugs:
*   **Better provider diagnostics:** [PR #6901](https://github.com/zeroclaw-labs/zeroclaw/pull/6901) was merged, fixing an issue where `reqwest` errors were swallowing root causes. It now preserves the full error chain, vastly improving debugging for OpenRouter, Anthropic, and OpenAI-compatible providers.
*   **Onboarding fixes:** [PR #6896](https://github.com/zeroclaw-labs/zeroclaw/pull/6896) was closed after successfully restoring Homebrew config directory detection, ensuring `zeroclaw onboard` and `brew services` play nicely together on macOS.
*   **History context pruning:** [PR #6515](https://github.com/zeroclaw-labs/zeroclaw/pull/6515) was closed, fixing a critical bug where preemptive context trimming caused consecutive assistant messages, breaking the Z.AI provider.
*   **Channel stability:** [PR #6512](https://github.com/zeroclaw-labs/zeroclaw/pull/6512) landed, fixing zero-byte attachments, bad default subjects, and raw markdown rendering in the Email channel.
*   **Codebase audits:** Commit recovery from the bulk revert ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)) continues, evidenced by merged PRs restoring lost system prompt streaming capabilities ([PR #6935](https://github.com/zeroclaw-labs/zeroclaw/pull/6935)).

## 4. Community Hot Topics
Community engagement today is focused on governance, UX, and agent security boundaries:
*   **Governance RFC ([Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)):** A highly commented RFC proposing "Work Lanes" and automated label cleanup. The community is actively debating how to scale PR triage without burdening maintainers.
*   **Branding & UX ([Issue #4710](https://github.com/zeroclaw-labs/zeroclaw/issues/4710)):** A surprisingly active thread (10 comments) where the community is crowdsourcing and debating a better logo for ZeroClaw, showing strong user attachment to the project's identity.
*   **Plugin Architecture ([Issue #6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)):** Significant interest in the "Everything is a plugin" RFC, which aims to collapse channels, providers, and tools into a unified catalog. This signals a desire for a highly extensible, modular future.

## 5. Bugs & Stability
ZeroClaw faces several high-severity runtime and security bugs, though contributors have been quick to draft fixes:
*   **S1 - Shell Sandbox blocking Python skills ([Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722)):** The default shell sandbox configuration is entirely blocking real-world Python skill patterns. 
*   **S1 - Cron outputs failing to route to Telegram ([Issue #6647](https://github.com/zeroclaw-labs/zeroclaw/issues/6647)):** Cron job results are currently stuck in the web dashboard and not pushing to configured channels. Fix is actively being routed through the new `channel_send` tool feature ([PR #6665](https://github.com/zeroclaw-labs/zeroclaw/pull/6665)).
*   **S2 - Gemini 400 Invariant Violation ([Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)):** ZeroClaw is sending tool calls before the first user turn, causing Gemini to reject requests with 400 errors.
*   **S2 - OpenAI Codex OAuth Fallback ([Issue #6923](https://github.com/zeroclaw-labs/zeroclaw/issues/6923)):** Typed config paths for OpenAI ignore successful OAuth tokens and incorrectly fall back to `OPENAI_API_KEY`. 
*   **S3 - Bubblewrap on Fedora 43 ([Issue #6878](https://github.com/zeroclaw-labs/zeroclaw/issues/6878)):** The Bubblewrap sandbox fails to start due to missing `/lib64` parameters.

## 6. Feature Requests & Roadmap Signals
Three major architectural themes emerged in today's feature requests, likely shaping the next major version:
*   **"Computer-Use" GUI Interaction ([Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)):** A request to add screen capture and mouse/keyboard event injection, catching up to capabilities seen in OpenAI Codex. 
*   **Defense-in-Depth Tool Security:** A flurry of interconnected PRs ([PR #6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924), [PR #6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920)) and issues requesting process memory limits on subprocesses ([Issue #6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)) and skill-scoped temporary tool elevation ([Issue #6915](https://github.com/zeroclaw-labs/zeroclaw/issues/6915)). This signals an imminent, major hardening of the agent's execution sandbox.
*   **Skills UX Track ([Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253)):** Accepted and tracked for v0.7.6, focusing on improving the CLI, testing, and authoring tools for ZeroClaw skills.

## 7. User Feedback Summary
User feedback highlights friction in onboarding, platform-specific edge cases, and configuration complexity:
*   **Platform friction:** Windows users are noting that minimal builds are bloated ([Issue #6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836)) and grandchild processes hang pipes ([PR #6910](https://github.com/zeroclaw-labs/zeroclaw/pull/6910)). 
*   **NixOS community:** Users are frustrated that the provided `flake.nix` outputs a toolchain rather than the actual ZeroClaw package ([Issue #6906](https://github.com/zeroclaw-labs/zeroclaw/issues/6906)).
*   **Channel confusion:** Setting up WhatsApp and Signal without enterprise Meta accounts is a pain point, leading to requests for better channel setup documentation ([Issue #6315](https://github.com/zeroclaw-labs/zeroclaw/issues/6315)).
*   **Diagnostics satisfaction:** The community responded positively to merged PRs improving error verbosity, indicating that silent failures have been a major source of user dissatisfaction.

## 8. Backlog Watch
*   **Commit Recovery from Bulk Revert ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)):** 153 commits were lost in a bulk rollback in March. This is still slowly being audited and recovered. Maintainers should ensure this doesn't drop off the radar, as features and bug fixes are still being accidentally missed.
*   **Security Policy bypasses ([Issue #6914](https://github.com/zeroclaw-labs/zeroclaw/issues/6914), [Issue #6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917)):** Issues related to `allowed_tools` and Composio scope filtering are currently flagged as `status:blocked` and `needs-maintainer-review`. Because these are high-risk security items, they require urgent core team triage.
*   **Silent CI Failures ([Issue #6751](https://github.com/zeroclaw-labs/zeroclaw/issues/6751)):** The PR title validation workflow has been silently failing with `startup_failure` since May 18. This needs admin intervention to unblock CI hygiene.

</details>