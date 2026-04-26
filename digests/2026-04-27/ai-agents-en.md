# OpenClaw Ecosystem Digest 2026-04-27

> Issues: 500 | PRs: 500 | Projects covered: 14 | Generated: 2026-04-26 22:07 UTC

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
- [EasyClaw](https://github.com/gaoyangz77/easyclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-04-27

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high volume of community activity, with 500 issues and 500 pull requests updated in the last 24 hours alone. However, the low closure rate (54 issues closed, 109 PRs merged/closed) against 446 open issues and 391 open PRs indicates a significant backlog and potential maintainer bottleneck. The project's immediate focus is clearly on voice capabilities, highlighted by the rapid iteration of the TTS system across four beta releases. Overall, the project is in a state of rapid, community-driven expansion, balancing major new feature rollouts with the growing pains of platform stability and complex multi-platform integrations.

## 2. Releases
Four new versions were released yesterday, all iterating on the `2026.4.25` beta:
*   **[v2026.4.25-beta.4](https://github.com/openclaw/openclaw/releases/tag/v2026.4.25-beta.4)** (and beta.1 through beta.3)
    *   **Changes:** A massive upgrade to voice replies and Text-to-Speech (TTS) capabilities.
    *   **Features Added:** Introduction of `/tts latest`, chat-scoped auto-TTS controls, persona-specific voice settings, and per-agent/per-account overrides.
    *   **New Provider Coverage:** Added support for Azure Speech, Xiaomi, Local CLI, Inworld, Volcengine, and ElevenLabs v3.

## 3. Project Progress
Development momentum is heavily focused on voice infrastructure, security, and fixing UX dead-ends. 
*   **Voice & Personas:** A massive four-part PR series (`#72266`, `#72239`, `#72229`, `#69051`) is actively landing the ElevenLabs v3 integration, introducing emotion tags, `voice.md` personality filters, and gateway status surfaces.
*   **Platform Reliability:** PR `#72367` fixed orphaned LSP process trees on shutdown, and PR `#71612` fixed loop detection false positives in cron jobs by resetting tool history on idle gaps.
*   **Security & State:** PR `#72377` resolved a regression where `OPENCLAW_HOME` symlinks were rejected by exec approvals, and PR `#67509` introduced a root-guard to prevent state corruption when running the CLI as root.
*   **UX/UI:** PR `#72378` successfully merged, bringing localized command palette labels to the web UI.

## 4. Community Hot Topics
The community is actively discussing platform boundaries, memory handling, and system prompt efficiency. 
*   **Text Leakage in Tool Calls ([Issue #25592](https://github.com/openclaw/openclaw/issues/25592), 22 comments):** Users are frustrated by internal processing text accidentally routing to Slack/iMessage. This highlights a need for stricter internal/external output boundaries in the agent loop.
*   **Memory Compaction Bugs ([Issue #12590](https://github.com/openclaw/openclaw/issues/12590), 18 comments):** Unreliable `memoryFlush` behavior is causing context loss, a critical pain point for users running long-running agents.
*   **Context Window Management ([Issue #22438](https://github.com/openclaw/openclaw/issues/22438), 13 comments):** A highly discussed proposal to introduce tiered bootstrap file loading to save LLM tokens, indicating that power users are butting up against context window limits and costs.
*   **Slack Block Kit Support ([Issue #12602](https://github.com/openclaw/openclaw/issues/12602), 12 comments):** Strong demand for structured rich messages in Slack, showing that enterprise users want OpenClaw to act less like a plain chatbot and more like an integrated app.

## 5. Bugs & Stability
Several regressions and stability issues have been reported, primarily around execution environments and UI:
1.  **UI Secure Context Regression ([Issue #32473](https://github.com/openclaw/openclaw/issues/32473), 👍 4):** Control UI requires a secure context (HTTPS), breaking standard VPS/Docker setups. 
2.  **Exec Tool Environment Variables ([Issue #31583](https://github.com/openclaw/openclaw/issues/31583), 👍 1):** A regression where `skills.entries.*.env` variables are not inherited by the `exec` tool, breaking local tool authentication.
3.  **macOS System Execution ([Issue #37591](https://github.com/openclaw/openclaw/issues/37591), 👍 5):** A missing `system.run.prepare` command is entirely blocking system run execution for macOS nodes.
4.  **Gateway Authentication Block ([Issue #17761](https://github.com/openclaw/openclaw/issues/17761)):** `trusted-proxy` mode blocks internal services due to a lack of shared-secret fallback, crippling setups relying on reverse proxies.
5.  **Gateway Startup Stalls ([PR #72027](https://github.com/openclaw/openclaw/pull/72027)):** 60-second timeouts on pricing fetches were stalling the Node event loop. A fix reducing this to 10 seconds is currently open.

## 6. Feature Requests & Roadmap Signals
Based on developer PRs and highly supported issues, the immediate roadmap is heavily leaning into security, advanced LLM routing, and multi-agent orchestration:
*   **Advanced Secrets Management:** Native integration for AWS Secrets Manager, Vault, and masked secrets ([Issue #10659](https://github.com/openclaw/openclaw/issues/10659), 👍 4; [Issue #13610](https://github.com/openclaw/openclaw/issues/13610)) to prevent agents from leaking API keys.
*   **Sub-Agent Orchestration:** Demand for post-subagent completion hooks ([Issue #22358](https://github.com/openclaw/openclaw/issues/22358)) and better `announceTarget` routing ([Issue #27445](https://github.com/openclaw/openclaw/issues/27445), 👍 4) signals that users are building complex, multi-agent swarms.
*   **Native Plugin Workflows:** [PR #72383](https://github.com/openclaw/openclaw/pull/72383) introduces workflow actions, scheduling, and retry limits for plugins, hinting at a future where OpenClaw acts as a fully-fledged automation engine.

## 7. User Feedback Summary
Users are highly enthusiastic about the extensibility of the platform but are experiencing friction with configuration and deployment environments. Pain points center around state isolation (Docker sandbox mounts failing in [Issue #31331](https://github.com/openclaw/openclaw/issues/31331)) and token waste ([Issue #40256](https://github.com/openclaw/openclaw/issues/40256)). Meanwhile, the push for features like Telegram Business Bot support ([Issue #20786](https://github.com/openclaw/openclaw/issues/20786)) and Grok 4.2 integration ([Issue #38204](https://github.com/openclaw/openclaw/issues/38204)) illustrates a diverse user base deploying OpenClaw across every major messaging and LLM frontier.

## 8. Backlog Watch
Maintainers need to address several critical patches that appear to be lingering or suffering from review bottlenecks:
*   **Fallback Model Persistence ([PR #47994](https://github.com/openclaw/openclaw/pull/47994)):** An open fix preventing temporary fallback models from permanently overwriting agent configs. This is crucial for reliability but has been open since mid-March.
*   **Gateway Context Routing ([PR #40247](https://github.com/openclaw/openclaw/pull/40247)):** A fix to bind loopback alongside custom IPs to fix subagent RPC failures, stuck since early March.
*   **Agent Directory Bootstrap Ignored ([Issue #29387](https://github.com/openclaw/openclaw/issues/29387), 👍 4):** Per-agent configurations are being ignored in favor of shared workspaces, crippling multi-tenant setups, yet it remains unresolved since late February.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report analyzing the open-source AI agent and personal assistant ecosystem based on the April 27, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a phase of rapid, application-driven expansion. Projects are evolving from simple chatbot wrappers into highly complex, multi-platform orchestrators capable of executing long-running tasks, managing hardware, and interfacing with diverse SaaS environments. However, this explosive feature growth is creating significant friction around operational stability, context window management, and deployment reliability. As frameworks scale to support enterprise workflows and multi-agent architectures, maintainers are facing mounting backlogs of technical debt, particularly concerning cross-platform gateway performance, container deployments, and provider failover mechanisms.

### 2. Activity Comparison
Activity metrics are based on the number of issues and pull requests updated within the last 24 hours. 
*Health Score indicates: 🟢 High (Active merging/resolving), 🟡 Medium (High open volume/bottlenecked), 🟠 Low (Stale/Awaiting triage), 🔴 Inactive.*

| Project | Updated Issues | Updated PRs | Releases (Last 24h) | Health Score | Primary Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 4 Beta Releases | 🟡 Medium | Voice/TTS capabilities, Scaling bottlenecks |
| **NanoBot** | 6 | 122 | 0 | 🟢 High | Multi-agent systems, WebUI, Provider stability |
| **Hermes Agent**| 50 | 50 | 0 | 🟡 Medium | Gateway overhaul, Platform integrations |
| **ZeroClaw** | 50 | 46 | 0 | 🟢 High | Windows setup, Provider schema fixes, CI |
| **PicoClaw** | 5 | 9 | 1 Nightly | 🟢 High | Hardware/IoT integration, LLM routing |
| **NanoClaw** | 6 | 25 | 0 | 🟢 High | v2 Rebrand/Setup rewrite, Container runtimes |
| **IronClaw** | 7 | 13 | 0 | 🟢 High | Security hardening, Cryptographic auditing |
| **Moltis** | 5 | 11 | 1 | 🟢 High | Security patches, Local LLM optimization |
| **CoPaw** | 11 | 6 | 0 | 🟡 Medium | Desktop app (Tauri), UI/Backend sync fixes |
| **NullClaw** | 1 | 0 | 0 | 🟠 Low | WSL2 resource bug triaging |
| **LobsterAI** | 4 (Stale) | 0 | 0 | 🟠 Low | Maintenance stall |
| **TinyAGI / ZeptoClaw / EasyClaw** | 0 | 0 | 0 | 🔴 Inactive | No activity |

### 3. OpenClaw's Position
*   **Advantages vs Peers:** OpenClaw operates at a significantly higher scale of community engagement (10x the raw issue/PR volume of most peers). It is the only project aggressively shipping voice-first features (massive TTS upgrades including emotion tags, persona-specific voices, and 7 new speech providers), positioning it strongly as a conversational rather than purely text-based interface.
*   **Technical Approach Differences:** While projects like IronClaw and ZeroClaw are modularizing via micro-kernels and webhooks, and NanoBot is focusing on multi-agent "mailboxes," OpenClaw is leaning heavily into an all-in-one automation engine approach (e.g., native plugin workflows with scheduling/retries).
*   **Community Size & Risks:** OpenClaw’s community is massive, but it is showing dangerous signs of a maintainer bottleneck. With 446 open issues and 391 open PRs, and crucial patches lingering in the backlog for months, its community health score is dragged down by review capacity, contrasting with highly responsive but smaller projects like Moltis.

### 4. Shared Technical Focus Areas
Several pervasive requirements are bubbling up simultaneously across entirely different projects, defining the current state-of-the-art requirements for AI agents:
*   **Intelligent Model Routing & Failover:** Users are refusing to rely on a single LLM API. NanoBot (Issue #3376), PicoClaw (Issue #295), and ZeroClaw (Issue #2998) all show urgent demands for automatic cross-provider failover and routing simple tasks to cheaper models.
*   **Hardware and OS Support:** Edge computing is a major trend. PicoClaw is adding serial tooling for Raspberry Pi, while NullClaw, Hermes, and ZeroClaw users are aggressively reporting bugs around Windows native and WSL2 deployments.
*   **Platform Threading & Context Management:** As agents are deployed into enterprise Slack/Discord/Matrix environments, routing replies to the correct thread is a universal pain point (Hermes #9736, NanoBot #3464, NanoClaw #2002). Furthermore, memory compaction and context window limits are actively degrading user experience across OpenClaw, LobsterAI, and CoPaw.
*   **Security & Auditability:** Agent permissions are tightening. IronClaw is introducing Ed25519 signed tool calls, while Moltis and OpenClaw are rushing to patch plaintext API key leaks and tighten execution sandbox guards.

### 5. Differentiation Analysis
*   **Target Users:** 
    *   *Enterprise & Compliance:* IronClaw (cryptographic auditing), Hermes (enterprise Slack orchestration).
    *   *Makers & Edge Users:* PicoClaw (serial/IoT hardware focus).
    *   *Self-Hosters:* NanoClaw (containerized set-and-forget), ZeroClaw.
    *   *Power Users / Consumers:* OpenClaw (rich voice/personas), Moltis (local LLM management).
*   **Architectural Paradigms:**
    *   *Container-First:* NanoClaw treats the agent as an isolated, sandboxed container managing host interactions via specific bridges.
    *   *Microkernel / Plugin:* ZeroClaw is explicitly moving to a microkernel layout, whereas OpenClaw relies on a heavier, integrated gateway architecture.
    *   *Desktop-First:* CoPaw is betting heavily on Tauri 2.0 for lightweight local desktop apps, diverging from the standard web/terminal UIs of its peers.

### 6. Community Momentum & Maturity
*   **Rapidly Iterating (Momentum):** NanoBot, Moltis, and NanoClaw demonstrate the healthiest velocity, showing a tight feedback loop where critical bugs are reported and merged within the same 24-hour cycle.
*   **Scaling & Bottlenecked:** OpenClaw and Hermes have high momentum but are tripping over their own scale. Their engineering velocity is high, but PR review bottlenecks mean critical fixes sit in purgatory, causing user frustration.
*   **Stabilizing / Stalled:** LobsterAI and NullClaw represent the lower end of the maintenance spectrum. LobsterAI is relying entirely on automated GitHub stale bots, and NullClaw has a total standstill in code commits, leaving a P1 WSL2 CPU-busy-loop unaddressed.

### 7. Trend Signals
1.  **The "Bring Your Own Subscription" (BYOS) Movement:** Users are frustrated by pay-per-token API costs. The surge in workarounds to use ChatGPT Plus OAuth tokens directly in agents (PicoClaw #2674) or complaining about Anthropic subscription limits (Hermes #6475) signals that users want agents that can authenticate as standard users to bypass API costs.
2.  **Agents as Physical Controllers:** The line between digital chatbots and physical IoT controllers is blurring. Projects like PicoClaw integrating cross-platform serial connections indicate a future where local AI agents routinely interact with microcontrollers and smart home devices.
3.  **End-to-End Encryption (E2EE) is a Hard Requirement:** The massive, heavy-lift PRs across multiple repositories to support Matrix E2EE (IronClaw #2019, ZeroClaw #6112, NanoClaw #1624) prove that privacy-conscious self-hosters are demanding cryptographically secure messaging channels for their agents.
4.  **Onboarding Fragility Threatens Adoption:** Across NanoClaw, ZeroClaw, and CoPaw, users are hitting immediate walls during first-run setups (missing Docker images, broken Windows `.bat` scripts, sudo hangs). For developers building agent frameworks, streamlining the local deployment pipeline is now more critical for user acquisition than launching new agentic features.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-27

## 1. Today's Overview
NanoBot is experiencing a **very high-activity day**, driven primarily by a massive volume of community contributions and ongoing development. With 122 pull requests updated in the last 24 hours (102 open, 20 closed/merged) and 6 issues actively discussed, the project is in a state of rapid iteration. The developer focus today is heavily split between hardening core stability—specifically session management and provider resilience—and expanding multi-agent capabilities. The strong ratio of active PRs to issues indicates a healthy, code-heavy contributor base actively building out the ecosystem. 

## 2. Releases
No new releases were recorded today. The project is currently maintaining a fast-paced merge cadence on the main/development branches, likely building toward a future release incorporating the recent wave of multi-agent and WebUI features.

## 3. Project Progress
Significant progress was made across core infrastructure, the WebUI, and channel integrations. 20 PRs were merged or closed today, advancing the following key areas:

*   **Session & Context Management:** Critical fixes were merged to enforce token-aware history replay and cap session file growth ([PR #3427](https://github.com/HKUDS/nanobot/pull/3427)), preventing unbounded disk usage. Additionally, session timestamps are now exposed to the model context ([PR #3463](https://github.com/HKUDS/nanobot/pull/3463)), improving the agent's temporal awareness.
*   **WebUI Enhancements:** Merged support for rendering video media attachments using signed URLs ([PR #3430](https://github.com/HKUDS/nanobot/pull/3430)), and added a first-class settings page for model switching alongside interactive `ask_user` choice cards ([PR #3454](https://github.com/HKUDS/nanobot/pull/3454)).
*   **Channel & Provider Hardening:** Fixed Slack thread context preservation for proactive replies ([PR #3462](https://github.com/HKUDS/nanobot/pull/3462)). Older, but critical, PRs were also merged, including a fix to preserve `reasoning_content` for models like DeepSeek-R1/Kimi ([PR #410](https://github.com/HKUDS/nanobot/pull/410)) and improved user-confirmation handling in agent prompts ([PR #1148](https://github.com/HKUDS/nanobot/pull/1148)).

## 4. Community Hot Topics
The most actively discussed issue today highlights a strong community need for **enterprise-grade reliability**:
*   **Provider/Model Failover ([Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) - 8 comments, 1 👍):** Users are frustrated that NanoBot relies on a single provider/model at runtime. If that provider hits a 429 rate limit, 5xx error, or timeout, the agent loop crashes instead of failing over to a configured backup provider. The community is heavily backing a proposal for automated cross-provider failover to ensure task continuity.
*   **Granular Channel Configuration ([Issue #3452](https://github.com/HKUDS/nanobot/issues/3452)):** Users are requesting that global UI settings (like `sendProgress` or `sendToolHints`) be configurable on a per-channel basis, reflecting a growing trend of users deploying a single NanoBot instance across multiple disjoint platforms (e.g., Slack for dev, WeChat for personal).

## 5. Bugs & Stability
Today's bug reports emphasize thread routing confusion and timeouts during heavy tasks. 
*   **High Severity - Thread Session Routing:** Subagent announcements from threaded chats (e.g., Slack) are incorrectly routing back to the main channel session instead of the originating thread ([Issue #3464](https://github.com/HKUDS/nanobot/issues/3464)). *Note: A fix is already actively being reviewed in [PR #3465](https://github.com/HKUDS/nanobot/pull/3465).*
*   **High Severity - Async Client Timeouts:** The default `AsyncOpenAI` client lacks explicit timeouts, causing the agent loop to hang for up to 600 seconds (10 minutes) on large context requests ([Issue #3455](https://github.com/HKUDS/nanobot/issues/3455)).
*   **Medium Severity - Chain-of-Thought Leaks:** A bug in the non-streaming `_parse()` path causes the model's internal `reasoning` field (Chain of Thought) to leak into user-visible content ([Issue #3443](https://github.com/HKUDS/nanobot/issues/3443)). *Status: Closed, presumably fixed.*
*   **Medium Severity - WeCom Media Uploads:** Media file uploads in the WeCom channel are failing with `[file upload failed: xxxxxx]` ([Issue #3435](https://github.com/HKUDS/nanobot/issues/3435)).

## 6. Feature Requests & Roadmap Signals
The open PR pool reveals heavy architectural expansion, particularly regarding **Multi-Agent systems** and **Long Task Execution**, which signals these will be core features in the next major release:
*   **Inter-Agent Communication:** A zero-modification file-system-based "mailbox" channel plugin was submitted to allow multiple NanoBot instances to message each other ([PR #3461](https://github.com/HKUDS/nanobot/pull/3461)).
*   **Long-Running Tasks:** A new `LongTaskTool` was introduced to break extensive tasks into sequential subagent steps, mitigating context window blowouts ([PR #3460](https://github.com/HKUDS/nanobot/pull/3460)).
*   **Dynamic Instance Creation:** A proposed built-in skill allows a user to say "help me create a Telegram bot," prompting the agent to dynamically spawn a brand-new bot instance ([PR #3457](https://github.com/HKUDS/nanobot/pull/3457), [PR #3456](https://github.com/HKUDS/nanobot/pull/3456)).
*   **Infrastructure Tooling:** A `/ping` slash command was proposed for quick liveness checks ([PR #3451](https://github.com/HKUDS/nanobot/pull/3451)).

## 7. User Feedback Summary
The feedback indicates that NanoBot is successfully transitioning from a simple chatbot framework into a complex, multi-platform orchestrator. **User satisfaction** appears high regarding the extensibility of the system, as evidenced by seamless community additions like WebSSE chat channels ([PR #2871](https://github.com/HKUDS/nanobot/pull/2871)) and dynamic OAuth integrations. 
However, **user pain points** are emerging around scaling and production readiness. Users running heavy workloads are encountering context window limits and unbounded session file sizes. Furthermore, the reliance on single LLM providers without automated failover is causing task interruptions, proving that users are trying to run NanoBot as an autonomous, long-running daemon rather than just an interactive chat utility.

## 8. Backlog Watch
The core maintainer team should address the following aging or high-priority items:
*   **WeCom Stability:** The WeCom WebSocket initialization bug ([PR #3331](https://github.com/HKUDS/nanobot/pull/3331)) has been open for a week. Given that WeCom media uploads are also failing ([Issue #3435](https://github.com/HKUDS/nanobot/issues/3435)), this channel needs dedicated maintainer attention.
*   **Provider Logout/Auth:** The CLI command for provider logout ([PR #2727](https://github.com/HKUDS/nanobot/pull/2727)) and Qwen OAuth clean architecture ([PR #2710](https://github.com/HKUDS/nanobot/pull/2710)) have been open since early April and risk encountering merge conflicts due to the rapid changes in the codebase.
*   **Pending Context Fixes:** The separate open PRs normalizing DeepSeek payloads ([PR #3458](https://github.com/HKUDS/nanobot/pull/3458)) and enforcing replay invariants ([PR #3459](https://github.com/HKUDS/nanobot/pull/3459)) should be fast-tracked to resolve the ongoing context-drift issues users are experiencing.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-27

## 1. Today's Overview
Hermes Agent experienced a highly active day, with 50 issues and 50 pull requests updated within the last 24 hours. The open-source AI assistant project is currently navigating a high-growth phase, characterized by a massive influx of new architectural proposals (48 open PRs) alongside active community troubleshooting. However, with only 2 PRs merged/closed and no new releases, there is a noticeable integration bottleneck. The community is highly engaged in identifying bugs across diverse platforms (Slack, Discord, Telegram, WhatsApp) and proposing significant architectural overhauls for the Gateway module, indicating the project is actively scaling its enterprise and multi-platform capabilities.

## 2. Releases
There have been **no new releases** recorded in the last 24 hours. Given the current volume of open PRs and unmerged bug fixes, the project appears to be in the middle of an active development cycle, likely building toward a future minor or patch version update.

## 3. Project Progress
Despite only 2 PRs being merged or closed today, active development is aggressively pushing forward across several key domains:
*   **Gateway Architecture Overhaul:** Developer `yepyhun` opened a massive cluster of 7 interconnected PRs (#16236 to #16242) aimed at fundamentally redesigning the Gateway's context, tool profiling, idempotency, and memory rendering. 
*   **Delegation & Interoperability:** PR [#16226](https://github.com/NousResearch/hermes-agent/pull/16226) introduces native Claude/Cursor bridge transport and personas, signaling a major step toward multi-agent interoperability.
*   **Security Patching:** Progress was made on tightening security, with new PRs addressing WhatsApp path traversal ([#16243](https://github.com/NousResearch/hermes-agent/pull/16243)) and strict boolean parsing for shell hooks to prevent auto-acceptance bypasses ([#16244](https://github.com/NousResearch/hermes-agent/pull/16244)).
*   **Background Skill Maintenance:** PR #16049 (discussed in Issue [#16077](https://github.com/NousResearch/hermes-agent/issues/16077)) proposes a "Curator" task for background skill maintenance, showing progress in autonomous memory and skill management.

## 4. Community Hot Topics
The most actively discussed items revolve around user authentication limitations and Slack integration quirks:
*   **Anthropic Subscription Auth Limits:** The most-discussed issue today is [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) (27 comments, 15 👍). Users are frustrated by persistent "You're out of extra usage" errors when using Anthropic/Claude subscription auth. This highlights a growing pain point for power users hitting SaaS limits and expecting the local agent to handle token routing more gracefully.
*   **Slack Integration Behavior:** There is a concentrated cluster of active discussions around Slack adapters. Users are heavily discussing thread context fetching ([#1953](https://github.com/NousResearch/hermes-agent/issues/1953)), missing parent messages ([#2950](https://github.com/NousResearch/hermes-agent/issues/2950)), and multi-agent mention bypasses ([#8019](https://github.com/NousResearch/hermes-agent/issues/8019), 4 👍). The underlying need is clear: users are deploying Hermes in complex enterprise Slack environments and require robust, highly configurable threading and mention logic.
*   **Background Task Management:** RFC Issue [#16077](https://github.com/NousResearch/hermes-agent/issues/16077) (3 👍) shows strong community interest in automated skill maintenance via the "Curator" concept, indicating a desire for agents that can self-manage their growing toolsets.

## 5. Bugs & Stability
Stability issues reported today span from CLI quirks to platform-breaking routing errors, ranked by severity below:

*   **[P1 / Critical] Background Process Misrouting:** Issue [#9736](https://github.com/NousResearch/hermes-agent/issues/9736) reports that background completion notifications are routing to the wrong sessions (e.g., DM to group). *Fix Status: Under investigation, severe privacy/UX implications.*
*   **[P1 / Critical] v0.9.0 Config & Session Bugs:** Issue [#11096](https://github.com/NousResearch/hermes-agent/issues/11096) details three blocking bugs in v0.9.0, including Anthropic thinking-block session breaks and config/env precedence failures.
*   **[P2 / High] Custom Provider Client Bug:** Issue [#9711](https://github.com/NousResearch/hermes-agent/issues/9711) notes that named custom providers ignore `api_mode`, defaulting to OpenAI clients. *Fix Status: Open.*
*   **[P2 / High] TUI Freeze & Performance:** Issue [#12442](https://github.com/NousResearch/hermes-agent/pull/12442) and Issue [#9740](https://github.com/NousResearch/hermes-agent/issues/9740) highlight UI blocking and CLI completion lag in WSL2. *Fix Status: PRs open.*
*   **[P3 / Medium] Windows Compatibility:** Issue [#16201](https://github.com/NousResearch/hermes-agent/issues/16201) reports ongoing struggles running Hermes natively on Windows outside of WSL. 
*   **[P3 / Medium] MiniMax API Check:** Issue [#16120](https://github.com/NousResearch/hermes-agent/issues/16120) notes that `hermes doctor` returns a false HTTP 404 for MiniMax China. *Fix Status: PR #16246 is currently open and addresses this.*

## 6. Feature Requests & Roadmap Signals
The project's roadmap is being heavily shaped by new feature proposals introduced today:
*   **Gateway "TurnContract" Profiles:** Feature [#16103](https://github.com/NousResearch/hermes-agent/issues/16103) and its related PRs propose right-sized context/tool profiles for messaging platforms. This suggests the next version will feature massive optimizations for reducing prompt bloat during simple Gateway interactions.
*   **Deterministic Memory Rendering:** Feature [#16107](https://github.com/NousResearch/hermes-agent/issues/16107) requests bypassing LLM provider calls for simple, authoritative memory recalls, reducing latency and hallucination surface.
*   **Custom HTTP Headers:** Feature [#9721](https://github.com/NousResearch/hermes-agent/issues/9721) requests the ability to set custom headers to bypass Cloudflare WAF.
*   **Prediction:** The sheer volume of Gateway-related PRs opened today strongly indicates that the upcoming v0.9.1 (or v0.10.0) release will focus almost exclusively on Gateway stability, tool/context profiling, and idempotency.

## 7. User Feedback Summary
Real-world user feedback points to a few distinct operational pain points:
*   **Multi-Platform UX Friction:** Users deploying Hermes via the Gateway on Slack, Telegram, and Discord are encountering strict platform limitations. Specifically, Slack Connect file payloads ([#11095](https://github.com/NousResearch/hermes-agent/issues/11095)) and Telegram session misrouting are causing operational friction.
*   **Host Environment Limitations:** Docker sandbox crashes on restricted hosts ([#9730](https://github.com/NousResearch/hermes-agent/issues/9730)) and native Windows file-system issues ([#16201](https://github.com/NousResearch/hermes-agent/issues/16201)) show that users are struggling with edge-case deployments outside of standard Linux/macOS environments.
*   **General Satisfaction:** Despite bugs, the community remains highly engaged. The detailed bug reports (complete with root-cause analysis and PRs) show a sophisticated, developer-heavy user base that is actively invested in the project's success.

## 8. Backlog Watch
Several high-priority issues and PRs require immediate maintainer attention:
*   **Unresolved P1 Anthropic Bug:** Issue [#11096](https://github.com/NousResearch/hermes-agent/issues/11096) (v0.9.0 context/thinking-block bugs) is actively breaking production environments for Anthropic API users and needs a fast-tracked patch.
*   **Stale PID File PR:** PR [#9703](https://github.com/NousResearch/hermes-agent/pull/9703) (fixing gateway PID file issues after hard kills) has been open since April 14th and needs review to improve daemon stability.
*   **Slack Threading PRs:** PR [#9702](https://github.com/NousResearch/hermes-agent/pull/9702) (custom provider model resolution) and PR [#12442](https://github.com/NousResearch/hermes-agent/pull/12442) (TUI freeze fix) are vital for core UX but are currently sitting in the review phase.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-27

## 1. Today's Overview
PicoClaw is experiencing a highly active development phase, characterized by a substantial pipeline of 9 open pull requests and 5 active issues updated within the last 24 hours. The project recently shipped its `v0.2.7` milestone, and the main branch is already receiving significant contributions for the next iteration. Current engineering efforts are heavily focused on enhancing the agent's internal observability, hardening provider compatibility (specifically OpenAI's ChatGPT OAuth backend and Google Gemini), and expanding hardware integration capabilities. This volume of community and core contributor activity indicates a healthy, rapidly iterating open-source ecosystem.

## 2. Releases
- **nightly: Nightly Build** (`v0.2.7-nightly.20260426.77be169d`): Automated build targeting the `main` branch. 
  - *Note:* Users should exercise caution as nightly builds may be unstable. This build includes recent unreleased features such as the new event infrastructure and provider streaming fixes.

## 3. Project Progress
While the majority of today's PRs remain open for review, several significant structural and functional advancements are being actively pushed:
- **Core Protocol Refactoring:** PR [#2680](https://github.com/sipeed/picoclaw/pull/2680) is unifying message kind handling by transitioning to `"kind": "thought"` instead of `"thought": true`, aligning it with `tool_calls` logic. Note that this introduces an internal breaking change.
- **OpenAI Codex/OAuth Support:** PR [#2679](https://github.com/sipeed/picoclaw/pull/2679) implements specific handling for `response.output_text.delta` and routes ChatGPT Plus OAuth tokens correctly, fixing empty response issues.
- **Hardware & IoT Expansion:** PR [#2673](https://github.com/sipeed/picoclaw/pull/2673) introduces a built-in cross-platform `serial` hardware tool (Linux, macOS, Windows) integrated directly into the runtime and dashboard.
- **UX & Observability Improvements:** PR [#2670](https://github.com/sipeed/picoclaw/pull/2670) improves tool feedback UX by adding `PrettyPrint` and `DisableEscapeHTML` options, while PR [#2677](https://github.com/sipeed/picoclaw/pull/2677) introduces a robust, unified runtime event infrastructure (`pkg/events`) with backpressure policies.

## 4. Community Hot Topics
- **OpenAI ChatGPT OAuth Backend (Issue [#2674](https://github.com/sipeed/picoclaw/issues/2674) | PR [#2679](https://github.com/sipeed/picoclaw/pull/2679)):** Users are eager to utilize ChatGPT Plus subscriptions directly via OAuth. The issue generated significant discussion (1 👍) because users hit empty response walls when trying to use the `chatgpt.com/backend-api/codex` endpoint. 
- **Exa Search Provider Integration (Issue [#2676](https://github.com/sipeed/picoclaw/issues/2676)):** The community is requesting the addition of the Exa search provider. Interestingly, the author noted that a previous attempt (PR #997) was closed, sparking conversation about the maintainers' requirements for merging new search providers.
- **Cost Optimization Roadmap (Issue [#295](https://github.com/sipeed/picoclaw/issues/295)):** An older but highly active issue (10 comments) discussing the implementation of a Model Routing system. The underlying need is clear: users want PicoClaw to automatically route simple tasks to cheaper/faster models to save tokens and decrease latency.

## 5. Bugs & Stability
- **Severity: High** - **Empty ChatGPT OAuth Responses:** Users on ChatGPT subscriptions get fallback errors when the Codex backend streams items via `response.output_item.done` ([#2674](https://github.com/sipeed/picoclaw/issues/2674)). *Status: Fix actively proposed in PR [#2679](https://github.com/sipeed/picoclaw/pull/2679).*
- **Severity: High** - **Gemini + MCP Tool Crashes:** PicoClaw crashes with HTTP 400 when using Gemini models alongside MCP tools with complex JSON schemas. *Status: Fix proposed in PR [#2681](https://github.com/sipeed/picoclaw/pull/2681).*
- **Severity: Medium** - **Overzealous `exec` Safety Guard:** When `restrict_to_workspace` is true, the safety guard falsely flags benign commands (like `curl` fetching weather) due to poor relative path parsing ([#1042](https://github.com/sipeed/picoclaw/issues/1042)).
- **Severity: Low** - **UX Clutter from v0.2.7:** Users are annoyed by the new "Thinking" and "Tools" messages ([#2628](https://github.com/sipeed/picoclaw/issues/2628)). *Status: Closed, presumably addressed by recent UX/config updates.*

## 6. Feature Requests & Roadmap Signals
- **Intelligent Model Routing:** requested in [#295](https://github.com/sipeed/picoclaw/issues/295). Given the ongoing internal refactoring of message kinds and tool calls, this feature is a strong candidate for a future `v0.3.0` milestone.
- **Raspberry Pi / Pi Zero 2W Support:** Requested in [#2675](https://github.com/sipeed/picoclaw/issues/2675). With the introduction of cross-platform serial support in PR [#2673](https://github.com/sipeed/picoclaw/pull/2673), lightweight edge/hardware deployments (like Raspberry Pi) are clearly on the project's radar.
- **Built-in Network Resiliency:** PR [#2669](https://github.com/sipeed/picoclaw/pull/2669) adds configurable retries and backoff for LLM network errors, signaling a maturation of the agent's core infrastructure.

## 7. User Feedback Summary
Users are actively pushing PicoClaw into hardware and personal assistant domains. The demand for Raspberry Pi support ([#2675](https://github.com/sipeed/picoclaw/issues/2675)) and serial tooling implies a use case where PicoClaw acts as a physical AI controller. Additionally, users are frustrated by rigid safety guards ([#1042](https://github.com/sipeed/picoclaw/issues/1042)) that break common shell workflows, indicating that power users leverage the `exec` tool heavily for general-purpose web queries and scripting. Finally, the demand for ChatGPT OAuth support shows a strong desire among users to leverage existing paid subscriptions rather than paying for standard API access.

## 8. Backlog Watch
- **Issue [#1042](https://github.com/sipeed/picoclaw/issues/1042) (`exec` tool guard bug):** Created in early March, this bug significantly impacts the agent's ability to use existing CLI tools securely without false positives. It requires maintainer attention for a regex/logic patch.
- **Issue [#295](https://github.com/sipeed/picoclaw/issues/295) (Model Routing):** Open since February with 10 comments. Maintainers should provide an official roadmap or architectural guidance to direct community contributions on this highly requested feature.
- **PR [#2239](https://github.com/sipeed/picoclaw/pull/2239) (Docker privileged mode):** Open since early April, pending maintainer review regarding security implications.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-27

## 1. Today's Overview
NanoClaw (a self-hostable, containerized personal AI assistant framework) experienced a **very high-activity day**, with 25 pull requests updated and 6 issues touched—dominated by the v2 setup rewrite and container‑runtime hardening. Nine PRs were merged or closed, signalling active maintainer engagement, while 16 remain open for review. No new release was cut, but the volume of targeted fixes (session routing, MCP allowlists, heartbeat stalls, credential passthrough) suggests the project is consolidating for a v2 stable milestone. Community contributors submitted multiple security and UX patches around the setup flow, indicating healthy external participation.

---

## 2. Releases
No new releases were published today.

---

## 3. Project Progress
The following **merged/closed PRs** advanced the project today:

| PR | Area | Summary |
|---|---|---|
| [#1738](https://github.com/qwibitai/nanoclaw/pull/1738) | Branding | Full NanoClaw → **Argus** rename (942 substitutions, 100 files). Not yet in a release, but merged to main—expect a rebrand in the next version. |
| [#2031](https://github.com/qwibitai/nanoclaw/pull/2031) | Stability | Fixes **container freeze on MCP tool call**: keeps heartbeat alive across long tool calls and widens the ceiling timer. Critical production fix. |
| [#2028](https://github.com/qwibitai/nanoclaw/pull/2028) | Agent runner | Dynamically builds `allowedTools` from configured MCP servers, fixing silent tool drop under Claude Code 2.1.116+. |
| [#2035](https://github.com/qwibitai/nanoclaw/pull/2035) | Setup | Advanced settings registry + **remote OneCLI gateway** wiring (builds on #2030). |
| [#2030](https://github.com/qwibitai/nanoclaw/pull/2030) | Setup | Adds a third setup-wizard option: connect to a **remote OneCLI** instance instead of local install. |
| [#2023](https://github.com/qwibitai/nanoclaw/pull/2023) | Providers | Passes `ANTHROPIC_BASE_URL` and `ANTHROPIC_AUTH_TOKEN` into agent containers, fixing 401 errors for custom Anthropic-compatible endpoints. |
| [#2024](https://github.com/qwibitai/nanoclaw/pull/2024) | Discord | Adds `DISCORD_ALLOWED_BOT_IDS` to selectively bypass the bot filter (e.g., RSS bots). |
| [#16](https://github.com/qwibitai/nanoclaw/pull/16) | Core | Escapes regex metacharacters in `ASSISTANT_NAME` trigger pattern—prevents silent match failures. |
| [#12](https://github.com/qwibitai/nanoclaw/pull/12) | Core | Only advances `lastAgentTimestamp` on successful agent runs, fixing message-skip on retry. |

**Key themes:** v2 setup robustness, multi-session routing correctness, MCP tool reliability, and provider flexibility.

---

## 4. Community Hot Topics
Despite high activity, most items have **0–1 comments**, suggesting rapid parallel development more than deep debate. The most notable discussions:

- **[#1973](https://github.com/qwibitai/nanoclaw/issues/1973)** — *"onecli not found" on fresh Linux installs* (1 comment). The PATH-not-propagated-to-bash-subprocess bug affects every new user onboarding. PRs [#2030](https://github.com/qwibitai/nanoclaw/pull/2030) and [#2035](https://github.com/qwibitai/nanoclaw/pull/2035) (remote OneCLI option) and [#2021](https://github.com/qwibitai/nanoclaw/pull/2021) (apt-get hang prevention) directly address this onboarding friction.
- **[#2002](https://github.com/qwibitai/nanoclaw/pull/2002)** + **[#2034](https://github.com/qwibitai/nanoclaw/pull/2034)** — Agent-to-agent reply threading lands in the wrong session when multiple sessions exist. Maintainer `jorgenclaw` authored both; the refined fix (#2034) changes session selection to "most recently active" ordering, indicating active design iteration on a correctness-critical path.
- **[#1624](https://github.com/qwibitai/nanoclaw/pull/1624)** — Matrix E2EE channel + per-group model config. A long-running community mega-PR (open since April 4) receiving continued updates. Signals strong demand for privacy-preserving messaging and multi-model flexibility.

---

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue / PR | Description | Fix status |
|---|---|---|---|
| 🔴 **Critical** | [#2031](https://github.com/qwibitai/nanoclaw/pull/2031) | Container freezes on MCP tool call, then killed by ceiling timer. **Merged today.** | ✅ Fixed |
| 🔴 **Critical** | [#2028](https://github.com/qwibitai/nanoclaw/pull/2028) | MCP servers silently dropped in Claude Code 2.1.116+ due to static allowlist. **Merged today.** | ✅ Fixed |
| 🟠 **High** | [#2032](https://github.com/qwibitai/nanoclaw/issues/2032) | Scheduled tasks with `wakeAgent: false` pre-check scripts still invoke LLM when picked up as follow-ups. | 🔧 Fix PR [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) open |
| 🟠 **High** | [#2002](https://github.com/qwibitai/nanoclaw/pull/2002) / [#2034](https://github.com/qwibitai/nanoclaw/pull/2034) | Agent-to-agent replies routed to wrong session under multi-session groups. | 🔧 Fix PR #2034 open |
| 🟡 **Medium** | [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) | `onecli not found` on fresh Linux due to PATH not propagated to bash subprocess. | 🔧 Partially addressed by remote OneCLI option (#2030, #2035) |
| 🟡 **Medium** | [#2026](https://github.com/qwibitai/nanoclaw/issues/2026) | `onecli.dev` returning HTTP 521 — upstream/infrastructure issue, outside NanoClaw's direct control. | ⏳ Unresolved |
| 🟡 **Medium** | [#2025](https://github.com/qwibitai/nanoclaw/issues/2025) | Setup hangs at "Installing the basics…" when `sudo` needs a password (no prompt shown). | 🔧 Fix PR [#2021](https://github.com/qwibitai/nanoclaw/pull/2021) open |
| 🟢 **Low** | [#12](https://github.com/qwibitai/nanoclaw/pull/12) | Messages skipped on agent retry due to premature timestamp advance. **Merged.** | ✅ Fixed |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Signal strength | Notes |
|---|---|---|---|
| **Configurable container resource limits** (`--memory`, `--cpus`, `--pids-limit`) | [#2029](https://github.com/qwibitai/nanoclaw/issues/2029) | 🟢 New request | Prevents runaway agents from causing host OOM. Natural companion to the container-runner work already happening. Likely to be picked up soon given recent stability focus. |
| **Host-actions container skill** (teaching agents to request host-side ops) | [#2027](https://github.com/qwibitai/nanoclaw/pull/2027) | 🟡 Open PR | Bridges the gap between sandboxed containers and host management. |
| **Per-group environment variables** in ContainerConfig | [#2036](https://github.com/qwibitai/nanoclaw/pull/2036) | 🟡 Open PR | Enables group-specific config injection into containers. |
| **Matrix E2EE channel** | [#1624](https://github.com/qwibitai/nanoclaw/pull/1624) | 🟠 Long-running PR | Large scope; may land in the next major release. |
| **Automated PR review workflow** (Dune integration) | [#2020](https://github.com/qwibitai/nanoclaw/pull/2020) | 🟢 Open PR | CI/CD quality improvement; suggests growing project complexity. |
| **Argus rebrand** | [#1738](https://github.com/qwibitai/nanoclaw/pull/1738) | 🔴 Merged | Next release will ship under the **Argus** name. |

**Prediction for next release:** The v2 stable release (potentially branded as Argus) will focus on setup reliability, multi-session routing correctness, MCP tool stability, and container resource controls.

---

## 7. User Feedback Summary

**Pain points reported today:**
1. **First-run experience is fragile.** Three separate issues (#1973, #2025, #2026) describe clean-install failures—missing PATH, sudo hanging, and upstream 521 errors. New users are hitting blockers before the agent ever runs.
2. **Silent failures in production.** Issues #2032 and #2028 describe cases where the system silently does the wrong thing (invokes LLM when it shouldn't; drops MCP tools) rather than failing loudly. Users may not notice until costs accrue or functionality is missing.
3. **Custom Anthropic endpoint users were locked out** (#2023) due to proxy overrides—indicating users are self-hosting LLM backends more than the maintainers may have anticipated.

**Positive signal:** Issue [#2017](https://github.com/qwibitai/nanoclaw/issues/2017) (now retracted) was a pure enthusiasm post (*"keep it going sir this is awesome!"*), and the high volume of external contributor PRs (#2020–#2036 range) shows an engaged developer community.

---

## 8. Backlog Watch

| Item | Open since | Why it matters | Status |
|---|---|---|---|
| [**#1624 — Matrix E2EE + per-group model config**](https://github.com/qwibitai/nanoclaw/pull/1624) | 2026-04-04 (23 days) | Largest community mega-PR; blocks users needing E2EE messaging. Still receiving updates but no merge signal. | ⚠️ Needs maintainer review plan |
| [**#1290 — Pre-flight credential validation**](https://github.com/qwibitai/nanoclaw/pull/1290) | 2026-03-20 (38 days) | Prevents partial state on misconfigured startup. Directly relates to the setup UX issues seen today. | ⚠️ Should be prioritized given v2 focus |
| [**#1931 — v1 → v2 migration flow**](https://github.com/qwibitai/nanoclaw/pull/1931) | 2026-04-23 (4 days) | Experimental but critical for existing users upgrading. No comments yet. | 👀 Early, but watch closely |
| [**#2029 — Container resource limits**](https://github.com/qwibitai/nanoclaw/issues/2029) | 2026-04-26 (1 day) | No response yet; high impact for multi-agent production deployments. | 🆕 Needs triage |

---

*Digest generated on 2026-04-27 from public GitHub activity data. Links point to `github.com/qwibitai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-27

## 1. Today's Overview
Project activity within the NullClaw repository over the past 24 hours can be characterized as low-volume but focused on a critical system-level bug. There were no new releases, no merged pull requests, and only a single updated issue. Despite the lack of direct code commits or PR activity today, the active discussion surrounding a high-severity bug indicates that the user base is actively stress-testing the AI assistant's infrastructure, particularly in varied deployment environments. Overall project momentum appears to be in a holding or bug-triaging phase.

## 2. Releases
*No new releases were recorded today. (Current evaluated version in the community is 2026.4.17).*

## 3. Project Progress
*There were no merged or closed pull requests today, and no new PRs were opened. Consequently, no new features or fixes advanced to the main branch in the last 24 hours.*

## 4. Community Hot Topics
The only active item in the last 24 hours is the following issue:
*   **[#870 Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870)**
    *   **Analysis:** Authored by `weissfl` and updated yesterday, this issue has accumulated 1 comment. The underlying need revolves around **resource efficiency and operational stability**. Because AI agents and personal assistants often run as persistent background services, users require them to be idle-friendly. A 100% CPU load when idle makes the software impractical for continuous local deployment, highlighting a strong community need for seamless cross-platform (including WSL2) infrastructure support.

## 5. Bugs & Stability
*   **Severity: HIGH**
    *   **Issue:** [#870 Gateway accept4 busy loop (100% CPU) on WSL2](https://github.com/nullclaw/nullclaw/issues/870)
    *   **Details:** Running `nullclaw gateway` causes one thread to pin at 100% CPU utilization even when the gateway is completely idle. This occurs specifically on WSL2 (Windows 11, Linux x86_64) running version 2026.4.17. The `accept4` system call appears to be entering a busy loop. 
    *   **Status:** The gateway remains functionally stable (e.g., the Telegram bot still responds), but the resource exhaustion is a critical defect for 24/7 local deployments. *Note: There are currently no open pull requests addressing this bug, meaning a fix is not yet imminent.*

## 6. Feature Requests & Roadmap Signals
*There were no explicit feature requests raised in the last 24 hours.* 
However, resolving the WSL2 `accept4` busy-loop bug may require developers to refactor how the gateway handles network sockets or epollEdge triggers on Linux subsystems for Windows. Any upcoming release will likely need to prioritize cross-platform compatibility and resource idling over new AI features.

## 7. User Feedback Summary
Real-world user feedback today centers around **operational friction in local deployments**. 
*   **Use Cases:** Users are actively utilizing NullClaw via Telegram bot integrations, running the server locally on Windows machines via WSL2.
*   **Pain Points:** Severe system resource mismanagement under specific OS configurations. 
*   **Satisfaction:** While users are pleased that the core AI agent functionality remains operational (the Telegram integration works despite the bug), there is underlying dissatisfaction with the background resource consumption, which heavily impacts the feasibility of running NullClaw as a lightweight personal assistant.

## 8. Backlog Watch
*   **Maintainer Attention Required:** [#870](https://github.com/nullclaw/nullclaw/issues/870) requires core maintainer triage. Given that it only has 1 comment so far and no linked PRs, it risks sitting unanswered. Since WSL2 is a highly popular environment for developers running local AI models and tooling, a prompt response or request for profiling data (e.g., `strace` or `perf` output of the busy loop) is recommended to move toward a patch.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-27

## 1. Today's Overview
The IronClaw project is currently experiencing a high volume of background maintenance and security hardening, alongside significant community-driven feature development. Activity over the last 24 hours shows a strong focus on dependency upgrades and CI pipeline stabilization, with 13 active pull requests updated. However, three automated canary tests failed simultaneously, indicating a potential environment regression or API instability with major LLM providers. While no new releases were cut today, the open PR pipeline suggests substantial architectural additions—such as native Matrix support and cryptographic tool auditing—are nearing integration. 

## 2. Releases
There were **0 new releases** published today. The project continues to iterate on its upcoming feature branch without deploying a stable or canary build to the public.

## 3. Project Progress
Two PRs were closed today, and several long-term, high-impact contributions saw updates:

*   **Closed/Rejected:** 
    *   PR [#2969](https://github.com/nearai/ironclaw/pull/2969): A proposal to clean up runtime authority boundaries and process resource reservations was closed without merging. 
    *   PR [#2964](https://github.com/nearai/ironclaw/pull/2964): An attempt to merge upstream changes from version 0.26.0 (which included a DB migration) was closed. Maintainers likely identified conflicts or required rework before introducing these sweeping changes.
*   **Active Feature Advancements (Updated):**
    *   **Cryptographic Auditing:** PR [#2684](https://github.com/nearai/ironclaw/pull/2684) introduces Ed25519 signed tool calls and a tamper-evident hash-chained audit log, moving closer to enterprise-grade security compliance.
    *   **MCP Security & Fixes:** PR [#1941](https://github.com/nearai/ironclaw/pull/1941) hardened MCP server names using an allowlist to prevent injection attacks, while PR [#2960](https://github.com/nearai/ironclaw/pull/2960) fixed a bug where OAuth discovery incorrectly blocked stdio/unix MCP transports.
    *   **LLM Provider Fix:** PR [#2961](https://github.com/nearai/ironclaw/pull/2961) corrected a frustrating behavior where self-hosted `openai_compatible` providers were silently overwritten upon restart.
    *   **New Channels:** Long-running PRs for a native Matrix channel ([#2019](https://github.com/nearai/ironclaw/pull/2019)) and a Prismer Cloud IM WASM channel ([#1120](https://github.com/nearai/ironclaw/pull/1120)) saw continued activity.
*   **Infrastructure:** PR [#2970](https://github.com/nearai/ironclaw/pull/2970) successfully transitions the Railway deployment to build directly from the source Dockerfile, removing a dependency on GHCR visibility.

## 4. Community Hot Topics
While today's issues lacked heavy comment discussions, several highlighted deep underlying needs and deployment friction:

*   **Cost Optimization via Serverless DBs:** Issue [#2965](https://github.com/nearai/ironclaw/issues/2965) requested a decoupling of core logic from the vector database to enable support for AWS Aurora DSQL. The user highlights a strong need for a "scale to zero, true pay per usage model" to reduce the monthly costs of running standalone agents.
*   **Deployment Friction:** Issue [#2963](https://github.com/nearai/ironclaw/issues/2963) points out that the documented Docker image (`nearai/ironclaw:latest`) does not exist on Docker Hub. This is a critical roadblock for self-hosting users attempting quick deployments.
*   **Massive Dependency Bumps:** A staggering number of Dependabot PRs were generated today, most notably PR [#2973](https://github.com/nearai/ironclaw/pull/2973) (39 updates) and PR [#2972](https://github.com/nearai/ironclaw/pull/2972) (Wasmtime updates). This shows underlying infrastructure health is actively being maintained, though it requires significant CI runner resources.

## 5. Bugs & Stability
System stability showed minor regressions today, primarily caught by automated systems and self-hosters:

1.  **Critical: Provider API Canaries Failing** 
    *   Issues [#2968](https://github.com/nearai/ironclaw/issues/2968) (OpenAI-compatible) and [#2967](https://github.com/nearai/ironclaw/issues/2967) (Anthropic) indicate that live canary tests failed on the `provider-matrix`. Both stem from commit `7404e7d6`, suggesting a possible regression in the agent's provider communication layer or broader API outages.
2.  **Medium: Authentication Infrastructure Failure**
    *   Issue [#2966](https://github.com/nearai/ironclaw/issues/2966) shows a failure in the `private-oauth` canary lane on the dedicated runner.
3.  **Low/Medium: Missing Docker Image (Fix Likely Underway)**
    *   Issue [#2963](https://github.com/nearai/ironclaw/issues/2963) reports missing Docker Hub images. PR [#2970](https://github.com/nearai/ironclaw/pull/2970) actively modifies the Railway deployment flow, suggesting maintainers are reworking container distribution.
4.  **Low: MCP Local Transport Bug (Fix Exists)**
    *   Users running local MCP servers via stdio/unix transports hit OAuth errors. This is explicitly addressed and fixed in open PR [#2960](https://github.com/nearai/ironclaw/pull/2960).

## 6. Feature Requests & Roadmap Signals
Based on today's data, the project is expanding its footprint in multi-channel communication, security, and flexible deployments:

*   **Serverless/Decoupled Database Support:** Issue [#2965](https://github.com/nearai/ironclaw/issues/2965) signals clear demand for decoupling the database layer to support serverless Postgres (Aurora DSQL) without forcing `pgvector` dependencies. If merged, expect a "lite" or "core" deployment profile in the next major version.
*   **Multi-Channel Expansion:** Continued investments in PR [#2019](https://github.com/nearai/ironclaw/pull/2019) (Matrix with E2EE) and PR [#1120](https://github.com/nearai/ironclaw/pull/1120) (Prismer Cloud IM) show a strong roadmap push to make IronClaw a ubiquitous agent across diverse messaging platforms.
*   **Audit & Compliance:** The integration of `signet-core` (PR [#2684](https://github.com/nearai/ironclaw/pull/2684)) proves that enterprise auditability is a priority, preparing the framework for high-stakes autonomous workflows.

## 7. User Feedback Summary
IronClaw's community is deeply engaged in self-hosting and edge-case deployments, though they are currently experiencing onboarding friction. 
*   **Pain Points:** Users are frustrated by missing container images on Docker Hub and silent provider overwrites on restart (self-hosted `openai_compatible` models falling back to NearAI). 
*   **Use Cases:** Developers are aggressively trying to deploy IronClaw on serverless infrastructure (Railway, Aurora DSQL) to manage costs. Furthermore, users connecting the agent via local MCP extensions or third-party IM platforms (Matrix, Prismer) form the bulk of active feature contributors.

## 8. Backlog Watch
*   **PR #1120 ([Prismer Cloud IM WASM channel](https://github.com/nearai/ironclaw/pull/1120)):** Open since mid-March and sized XL. Requires maintainer review to prevent it from becoming severely out-of-date with the main branch.
*   **PR #2019 ([Native Matrix Channel](https://github.com/nearai/ironclaw/pull/2019)):** Open since early April, involves high-risk/high-scope changes across the channel, db, and llm layers. Awaiting core team alignment.
*   **PR #2593 ([GitHub Actions Dependencies](https://github.com/nearai/ironclaw/pull/2593)):** Needs approval and merging. Delaying this blocks CI runner efficiency and leaves potential security gaps in the CI pipeline.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the provided data for April 27, 2026.

### 1. Today's Overview
LobsterAI is currently experiencing a period of low development activity, characterized by a complete standstill in repository merges and zero new releases. The community's focus has shifted entirely to user-reported issues, with four historical tickets updated today—likely due to automated GitHub stale bots pinging inactive threads rather than active problem resolution. There are no open or merged Pull Requests, suggesting that maintainers are currently not actively merging community or internal contributions. Overall, the project’s immediate health appears static, with user friction points remaining unaddressed by recent code changes.

### 2. Releases
*No new releases were recorded today. There are no breaking changes, migration notes, or version updates to report.*

### 3. Project Progress
*No project progress was made today. There are no closed issues, open PRs, or merged PRs to report. The codebase remains unchanged.*

### 4. Community Hot Topics
The most engaging community issue today is a feature request regarding observability and debugging capabilities.
*   **[Issue #88](https://github.com/netease-youdao/LobsterAI/issues/88) [OPEN]: Suggest adding token usage statistics and log output** (Author: Geidorf | 3 👍 | 1 comment)
    *   **Analysis:** This is the highest-rated issue in the current batch. Users leveraging custom APIs are encountering silent failures and find it extremely difficult to debug without console logs. Furthermore, the request for a token usage dashboard highlights a user need to monitor operational costs and agent consumption metrics, which is critical for AI power users. 

### 5. Bugs & Stability
Several bugs have been flagged by the community. All reported issues today are historical (opened in February 2026) and have received no recent PR fixes, indicating a growing stability and technical debt backlog. Ranked by severity:

1.  **Critical - Context Length Crash:** **[Issue #60](https://github.com/netease-youdao/LobsterAI/issues/60)**. Users utilizing DeepSeek models are experiencing API-breaking errors when conversations exceed the 131,072 token limit. The agent fails to truncate context dynamically, resulting in a hard crash.
2.  **High - External Access Limitations:** **[Issue #52](https://github.com/netease-youdao/LobsterAI/issues/52)**. The agent is entirely unable to access or scrape WeChat public account articles. This points to a flaw in the tool's web-fetching or scraping capabilities for specific regional web architectures.
3.  **Medium - Pathing & Configuration Errors:** **[Issue #40](https://github.com/netease-youdao/LobsterAI/issues/40)**. On Windows, the application ignores user-specified installation directories (e.g., D: drive) and forces the creation of working files on the C: drive, leading to missing "SKILLs" dependencies and path-related runtime errors.

### 6. Feature Requests & Roadmap Signals
Based on the open issues, there is a clear demand for better user control and system observability. 
*   **Observability:** As noted in **[Issue #88](https://github.com/netease-youdao/LobsterAI/issues/88)**, logging and token tracking are highly requested. 
*   **Configuration Management:** Users want the ability to define strict working directories to prevent unwanted directory creation on Windows **[Issue #40](https://github.com/netease-youdao/LobsterAI/issues/40)**.
*   **Roadmap Prediction:** If development resumes, the next version will likely need to focus heavily on foundational stability—specifically dynamic context window management and an integrated logging system—before adding new agent capabilities.

### 7. User Feedback Summary
Users are expressing notable frustration regarding reliability and deployment flexibility. Pain points center around silent crashes when using third-party LLM providers (especially regarding context limits), poor default handling of Windows file pathing, and a lack of visibility into what the agent is doing behind the scenes. The lack of maintainer engagement on these active bugs is likely contributing to growing user dissatisfaction, as evidenced by the tickets transitioning into a "stale" state.

### 8. Backlog Watch
All four updated issues are currently marked as `[stale]`, meaning they are at risk of being automatically closed by GitHub bots if not interacted with soon. Maintainers should prioritize the following:
*   **[Issue #60](https://github.com/netease-youdao/LobsterAI/issues/60) & [Issue #88](https://github.com/netease-youdao/LobsterAI/issues/88):** These issues severely impact core agent functionality (memory management and debugging). Allowing these to auto-close would alienate users utilizing custom models.
*   **[Issue #40](https://github.com/netease-youdao/LobsterAI/issues/40):** A straightforward pathing bug that significantly hampers the Windows user experience.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-27

## 1. Today's Overview
The Moltis project demonstrated exceptionally high activity and robust health over the past 24 hours, driven primarily by a burst of security enhancements, bug fixes, and UI improvements. The maintainers successfully processed 9 pull requests and closed 5 issues, reflecting a highly responsive development cycle. Activity was heavily focused on hardening the system's security boundaries—particularly around skill imports and API key storage—while also refining the local LLM management and web UI experience. Overall, the project is in a state of rapid, stable iteration with strong community and core maintainer alignment.

## 2. Releases
*   **Version:** `20260426.05` (Released: 2026-04-26)
    *   *Note: Specific changelogs were not detailed in the provided data, but this release encapsulates today's major security patches and UI updates.*

## 3. Project Progress
Significant headway was made across security, UI/UX, and local model management. Out of 11 updated PRs, 9 were successfully merged/closed:
*   **Security & Credential Management:** Closed [PR #885](https://github.com/moltis-org/moltis/pull/885), which securely migrates voice API keys from plain-text `moltis.toml` to an encrypted credential store (`provider_keys.json`). Additionally, closed [PR #882](https://github.com/moltis-org/moltis/pull/882), fixing a vulnerability where imported skill repositories auto-enabled all skills without user review.
*   **Skill Handling & Configuration:** Resolved broken repository imports via [PR #883](https://github.com/moltis-org/moltis/pull/883) and fixed bundled skill states via [PR #877](https://github.com/moltis-org/moltis/pull/877) and [PR #878](https://github.com/moltis-org/moltis/pull/878). 
*   **Local LLM Optimization:** Closed [PR #884](https://github.com/moltis-org/moltis/pull/884), introducing on-demand model loading/unloading with idle timeouts to save system RAM.
*   **Web UI Enhancements:** [PR #886](https://github.com/moltis-org/moltis/pull/886) cleaned up the chat toolbar by moving status badges to a visible row. [PR #879](https://github.com/moltis-org/moltis/pull/879) fixed a frustrating visual bug where code snippets flashed a white background upon stream completion. 

## 4. Community Hot Topics
The community was highly engaged in refining UI workflows and expanding platform accessibility:
*   **UI File Uploads:** [PR #876](https://github.com/moltis-org/moltis/pull/876) (Open) proposes adding a file upload button directly to the web chat input. This aligns Moltis with standard UX patterns seen in major LLM web UIs and is a highly requested usability feature.
*   **Internationalization:** [PR #339](https://github.com/moltis-org/moltis/pull/339) (Open) continues to be actively updated, aiming to add full `zh-TW` (Traditional Chinese) locale support across macOS and web apps, showing a commitment to globalizing the platform.

## 5. Bugs & Stability
Several bugs were reported, prioritized, and resolved within the same 24-hour cycle:
*   **Critical Security - Plaintext API Keys:** [Issue #867](https://github.com/moltis-org/moltis/issues/867) reported that voice provider keys were stored in plaintext. *Fix: Resolved by merged [PR #885](https://github.com/moltis-org/moltis/pull/885).*
*   **Critical Security - Malicious Skill Import:** [Issue #881](https://github.com/moltis-org/moltis/issues/881) highlighted that importing a repo automatically enabled all skills, posing a massive security risk. *Fix: Resolved by merged [PR #882](https://github.com/moltis-org/moltis/pull/882).*
*   **High Severity - Broken Skill Import:** [Issue #880](https://github.com/moltis-org/moltis/issues/880) noted that non-standard marketplace repositories failed to import correctly. *Fix: Resolved by merged [PR #883](https://github.com/moltis-org/moltis/pull/883).*
*   **Low Severity - UI Regression:** [Issue #888](https://github.com/moltis-org/moltis/issues/888) (Open) reports that recent UI changes in [PR #886](https://github.com/moltis-org/moltis/pull/886) accidentally removed the session name and rename functionality. 
*   **Low Severity - UI Bug:** [Issue #875](https://github.com/moltis-org/moltis/issues/875) reported bundled skills couldn't be disabled via the Web UI. *Fix: Resolved by merged [PR #877](https://github.com/moltis-org/moltis/pull/877) and [PR #878](https://github.com/moltis-org/moltis/pull/878).*
*   **Low Severity - Model Behavior:** [Issue #873](https://github.com/moltis-org/moltis/issues/873) reported issues using MCP-servers with the `Qwen3.6-35B-A3B` model.

## 6. Feature Requests & Roadmap Signals
Based on today's open issues and PRs, the immediate roadmap is focusing on deep system customization and chat UX parity:
*   **System Prompt Customization:** [Issue #887](https://github.com/moltis-org/moltis/issues/887) requests support for a `PREAMBLE.md` workspace file to act as a template variable for prompt profiles. This signals a push toward highly granular, per-agent persona tuning.
*   **Local LLM Resource Management:** The introduction of on-demand model loading/unloading ([PR #884](https://github.com/moltis-org/moltis/pull/884)) indicates an upcoming focus on making Moltis more efficient for users running local models on resource-constrained hardware (like MacBooks).

## 7. User Feedback Summary
Users are actively pushing Moltis into enterprise-grade and power-user territories. The rapid reporting of plaintext key storage and auto-enabling repository skills shows a security-conscious user base. Meanwhile, minor friction points—such as not being able to easily disable bundled skills or missing file upload buttons—highlight that users want *control* and *UX parity* with proprietary tools like ChatGPT. The prompt resolution of these issues by maintainers indicates high overall user satisfaction and trust in the project's trajectory.

## 8. Backlog Watch
*   **UI Regression ([Issue #888](https://github.com/moltis-org/moltis/issues/888)):** Needs immediate maintainer attention as the session name/rename button was accidentally removed in the latest merged UI update. 
*   **Long-running PRs:** [PR #339](https://github.com/moltis-org/moltis/pull/339) (zh-TW i18n) and [PR #876](https://github.com/moltis-org/moltis/pull/876) (File Upload UI) are both currently open and represent substantial feature additions. They should be prioritized for review to keep community momentum going.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-27

## 1. Today's Overview
CoPaw (internally referenced via the QwenPaw repository) is experiencing a highly active day driven predominantly by bug reports and community feature requests, indicating a growing and highly engaged user base. The project saw 11 issues updated (10 open, 1 closed) and 6 new pull requests, with zero merged PRs or new releases. The high volume of bug reports related to UI state, backend execution, and channel-specific integrations suggests that the recent 1.1.4 release branch is undergoing heavy mass-scale testing by users. Overall, project health is strong with active first-time contributor involvement, though the maintainers face a growing backlog of stability and architectural issues.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
While zero PRs were merged today, there are 6 active open PRs introducing significant feature expansions and hardening:
*   **Desktop App Overhaul:** PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) introduces Tauri 2.x desktop app support, replacing legacy Electron-based architectures.
*   **Context Management Hardening:** First-time contributor PR [#3848](https://github.com/agentscope-ai/QwenPaw/pull/3848) enhances context compaction fallbacks, preventing active history deletion during LLM summarization failures.
*   **Channel & Provider Integrations:** PR [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) adds GitHub Copilot as a model provider. PR [#3845](https://github.com/agentscope-ai/QwenPaw/pull/3845) fixes QQ channel audio types and introduces automated speech-to-text. PR [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839) completely refactors the XiaoYi channel's A2A protocol to use dual WebSockets.
*   **Observability:** PR [#3733](https://github.com/agentscope-ai/QwenPaw/pull/3733) adds operational logging for successful WeChat text delivery.

## 4. Community Hot Topics
The most actively discussed topics revolve around session continuity, external channel limitations, and LLM provider compatibility:
*   **Long-term Memory Configuration Loss:** Issue [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) (4 comments) highlights a persistent pain point where Docker deployments lose vector model configurations upon container restart due to initialization logic overriding `agent.json`.
*   **WeChat Message Truncation:** Issue [#3837](https://github.com/agentscope-ai/QwenPaw/issues/3837) sparked interest regarding WeChat's strict message limits. Users are actively requesting built-in message batching and delay configurations to prevent automated replies from being silently dropped.
*   **DeepSeek Model Compatibility:** Issue [#3851](https://github.com/agentscope-ai/QwenPaw/issues/3851) reveals underlying friction with OpenAI-compatible endpoints, specifically DeepSeek's strict requirement to echo `reasoning_content` in subsequent multi-turn queries, which currently causes CoPaw to crash with `MODEL_EXECUTION_FAILED`.

## 5. Bugs & Stability
Stability is currently the primary concern for the 1.1.4.x user base. Several critical bugs were reported:
*   **CRITICAL: UI Disconnection from Backend:** Issue [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) reveals that the Web UI "Pause" button is purely cosmetic—it stops frontend SSE rendering while the backend Agent continues executing tool calls unabated.
*   **HIGH: Session & State Management:** Users reported severe session continuity failures. Issue [#3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) notes chat histories disappearing mid-conversation. Issue [#3852](https://github.com/agentscope-ai/QwenPaw/issues/3852) highlights a tab-sharing conflict where multi-tab browser usage routes messages to the wrong agent session. Issue [#3849](https://github.com/agentscope-ai/QwenPaw/issues/3849) reports agent replies vanishing mid-sentence without errors.
*   **MEDIUM: Channel Reliability:** Issue [#3840](https://github.com/agentscope-ai/QwenPaw/issues/3840) notes the XiaoYi channel fails to send replies due to WebSocket routing issues *(Fix exists: PR [#3839])*.
*   **LOW: CLI Error:** Issue [#3847](https://github.com/agentscope-ai/QwenPaw/issues/3847) points out a quick-fix CLI bug where mission subcommands append duplicate `/api` routes, resulting in 405 errors.

## 6. Feature Requests & Roadmap Signals
*   **Dynamic Model Listing:** Issue [#3844](https://github.com/agentscope-ai/QwenPaw/issues/3844) requests the automatic fetching and listing of available models upon provider registration, bypassing the need for manual model registration. This aligns with standard enterprise multi-tenant LLM routing tools and is highly likely to be adopted soon.
*   **WeChat Payload Control:** Issue [#3837](https://github.com/agentscope-ai/QwenPaw/issues/3837) strongly signals a need for granular control over channel payload limits (message merging/delays). 
*   **Desktop Pivots:** The introduction of Tauri 2.x in PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) signals an upcoming strategic shift toward lighter, natively performant desktop clients.

## 7. User Feedback Summary
Users are deploying CoPaw in complex, multi-channel environments (WeChat, QQ, Huawei XiaoYi, Matrix) and pushing the limits of its agentic capabilities. However, the core architecture is showing signs of strain:
*   **Pain Point 1 - Multi-tenant/Tab Isolation:** Users expect robust isolation for concurrent tasks (e.g., handling multiple agents in separate browser tabs), but current global state management causes cross-talk.
*   **Pain Point 2 - Frontend Illusions:** The realization that the UI pause button does not stop backend compute is eroding user trust in the UI's reliability.
*   **Satisfaction:** Despite the bugs, community enthusiasm remains high, evidenced by a surge of sophisticated, code-ready PRs from first-time contributors aiming to improve context safety, desktop performance, and provider integrations.

## 8. Backlog Watch
*   **Config Persistence in Docker:** Issue [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) requires maintainer attention as it fundamentally breaks long-term memory setups for self-hosted users on every restart.
*   **Backend Pause Mechanism:** Issue [#3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) requires a fundamental architectural implementation of backend task cancellation or suspension queues. 
*   **Stale Channel PRs:** Several PRs introducing new channel protocols (like Tauri [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) and XiaoYi [#3839](https://github.com/agentscope-ai/QwenPaw/pull/3839)) are awaiting review; merging these is crucial for resolving the mounting channel-specific bug reports.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-27

## 1. Today's Overview
The ZeroClaw project is experiencing highly active, community-driven development, with 50 issues updated and 46 pull requests seeing activity in the past 24 hours. The issue tracker is currently dominated by bug reports related to provider configurations and channel integrations, signaling that recent architectural changes (like config schema version 2) may have introduced regressions. Maintenance and refactoring are clearly in focus today, evidenced by multiple open PRs addressing CI technical debt, improving documentation, and introducing factory automation bots to streamline repository management. While there are no new releases today, the volume of bug fixes and targeted enhancements currently in the PR pipeline suggests active preparation for an upcoming patch or minor release.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
Progress today is heavily focused on fixing regressions, developer experience, and CI automation:
*   **Windows Support & Tooling:** Windows setup issues are being actively resolved. A major documentation rewrite for Windows setup ([PR #6102](https://github.com/zeroclaw-labs/zeroclaw/pull/6102)) was updated, and severe bugs in `setup.bat` (such as integer overflows) were fixed in [PR #6137](https://github.com/zeroclaw-labs/zeroclaw/pull/6137), directly closing [Issue #6118](https://github.com/zeroclaw-labs/zeroclaw/issues/6118).
*   **Configuration & Providers:** A critical fix to ensure user-supplied provider fallbacks survive config load/save round-trips was implemented in [PR #6099](https://github.com/zeroclaw-labs/zeroclaw/pull/6099). Furthermore, [PR #6138](https://github.com/zeroclaw-labs/zeroclaw/pull/6138) was opened to fix a severe bug where fallback providers ignored `[providers.X]` configurations.
*   **Channel Architecture:** A clean-room rewrite of the Matrix channel using `matrix-rust-sdk 0.16` was submitted ([PR #6112](https://github.com/zeroclaw-labs/zeroclaw/pull/6112)) to address long-standing E2EE and streaming friction points. Additionally, a reverted WeChat iLink Bot channel was recovered and ported to the new microkernel layout in [PR #6130](https://github.com/zeroclaw-labs/zeroclaw/pull/6130).
*   **CI & Automation:** [PR #6129](https://github.com/zeroclaw-labs/zeroclaw/pull/6129) introduces factory automation roles (`factory-clerk`, etc.) to automatically close fixed/duplicate issues, alongside [PR #6133](https://github.com/zeroclaw-labs/zeroclaw/pull/6133) which cleans up stale CI lint scripts.

## 4. Community Hot Topics
*   **Matrix Channel Friction:** The most discussed item is the closed umbrella tracker [Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657) (12 comments), which highlights persistent user pain points with Matrix E2EE and sync issues. This has culminated in the massive rewrite proposed in [PR #6112](https://github.com/zeroclaw-labs/zeroclaw/pull/6112).
*   **LLM Provider Compatibility:** Users are heavily reporting breaking changes with local and 3rd-party LLM APIs. [Issue #5815](https://github.com/zeroclaw-labs/zeroclaw/issues/5815) (9 comments) notes `llamacpp` configurations are ignored since Schema v2. Meanwhile, the new DeepSeek-V4 API format is causing errors due to reasoning content handling ([Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059), 7 comments).
*   **Channel Reply Intent Classification:** Users are frustrated by the assistant ignoring them in 1:1 DMs. [Issue #5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) (3 comments, 3 👍) and [Issue #6067](https://github.com/zeroclaw-labs/zeroclaw/issues/6067) (3 comments) debate making the `classify_channel_reply_intent` gate configurable or using a faster model for it.

## 5. Bugs & Stability
Several critical (S1 - workflow blocked) bugs have been reported or updated today, though many now have corresponding fix PRs:
*   **Ollama Provider Tool Calling:** Users report that `tool_count=0` is hard-coded, completely breaking Ollama tool calling ([Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459), 4 👍) and causing streaming failures ([Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962)). 
*   **Fallback Provider Configuration:** A severe regression where the fallback provider chain completely ignores config files and only resolves credentials via env vars has been detailed in [Issue #5803](https://github.com/zeroclaw-labs/zeroclaw/issues/5803). **(Fix available: [PR #6138](https://github.com/zeroclaw-labs/zeroclaw/pull/6138))**.
*   **Context Compression:** Daemon mode completely fails to trigger `context_compression`, leading to degraded performance over long sessions ([Issue #4880](https://github.com/zeroclaw-labs/zeroclaw/issues/4880)).
*   **Memory Context Tagging:** An uncovered bug where unclosed memory context tags cause the LLM to hallucinate the boundaries of its instructions. **(Fix available: [PR #6082](https://github.com/zeroclaw-labs/zeroclaw/pull/6082))**.

## 6. Feature Requests & Roadmap Signals
*   **i18n Overhaul:** [Issue #5787](https://github.com/zeroclaw-labs/zeroclaw/issues/5787) proposes replacing the custom TOML i18n system with Mozilla Fluent (`.ftl` files) and moving translated docs out-of-repo, indicating a maturation of the project's localization strategy.
*   **Agent Mode for Webhooks:** [Issue #3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) requests support for full agent workflows and tool execution via webhooks, highlighting user demand to use ZeroClaw as a backend automation engine rather than just a chat interface.
*   **Multi-Model Providers:** [Issue #2998](https://github.com/zeroclaw-labs/zeroclaw/issues/2998) shows continued demand for configuring multiple model providers simultaneously. 
*   **Next Release Prediction:** The merging of configuration fixes, the `setup.bat` rewrite, and CI cleanup strongly suggest an imminent **v0.6.9 or v0.7.0 release** aimed at stabilizing the provider configuration layer and Windows onboarding.

## 7. User Feedback Summary
Users are excited about the expanding channel support and plugin ecosystem but are currently experiencing friction with basic LLM provider connections. The transition to config schema version 2 has left users of local LLMs (like `llamacpp` and `Ollama`) struggling with default value overrides and broken tool calls. Raspberry Pi and ARM users are currently dead in the water due to architecture detection failures in the update command ([Issue #4842](https://github.com/zeroclaw-labs/zeroclaw/issues/4842)). However, satisfaction with the project's modularity is evident in the community's willingness to submit highly specific, code-level PRs to fix tool validation, session cancellation, and memory context issues.

## 8. Backlog Watch
*   **E2EE Room Key Recovery:** [Issue #4878](https://github.com/zeroclaw-labs/zeroclaw/issues/4878) reveals that encrypted DMs are completely non-functional after a store reset because room keys are never downloaded from the server backup. This high-severity bug requires immediate maintainer attention.
*   **Unresponsive Competing PRs:** As noted in [Issue #4657](https://github.com/zeroclaw-labs/zeroclaw/issues/4657), several "preferred PRs" have been marked by maintainers because competing PRs from contributors are ignoring review feedback. Maintainers need to address this logjam.
*   **Tool Execution Cancellation:** [Issue #5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) and [Issue #5835](https://github.com/zeroclaw-labs/zeroclaw/issues/5835) highlight high-risk architectural issues where long-running tools cannot be cancelled, and server crashes leave orphaned cancel tokens in the gateway. This is a systemic architectural gap needing prioritization.

</details>