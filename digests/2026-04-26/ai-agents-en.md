# OpenClaw Ecosystem Digest 2026-04-26

> Issues: 500 | PRs: 500 | Projects covered: 14 | Generated: 2026-04-25 22:06 UTC

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

# OpenClaw Project Digest: 2026-04-26

## 1. Today's Overview
OpenClaw is experiencing exceptionally high development velocity and community engagement, processing exactly 500 issues and 500 pull requests within the last 24 hours. The maintainers successfully merged 431 PRs while aggressively closing 454 issues, demonstrating a highly active release and triage cadence. This activity culminated in 6 new releases, led by the stable `v2026.4.24` drop. The project is in a phase of rapid ecosystem expansion, heavily focused on integrating new top-tier LLMs (DeepSeek V4, GPT-5.4) and communication platforms (Google Meet), though this rapid iteration is introducing notable session and gateway stability regressions.

## 2. Releases
The project shipped 6 releases today, iterating from beta to stable:
*   **v2026.4.24 (Stable):** The flagship release introducing Google Meet as a bundled participant plugin (supporting personal Google auth, Chrome/Twilio realtime sessions, and recovery tooling). It also officially integrates **DeepSeek V4 Flash and Pro** models into the core environment.
*   **v2026.4.24-beta.1 through beta.5:** Iterative betas leading up to the stable release, primarily testing the Google Meet and DeepSeek integrations. 
*   **v2026.4.24-beta.2:** Included a specific hotfix for packaged bundled-plugin runtime mirrors on Windows to ensure shared package-root dependencies remain resolvable during npm updates.

## 3. Project Progress
Significant forward progress was made across platform stability, agent capabilities, and channel integrations:
*   **Agent Capabilities & Core Infrastructure:** 
    *   Introduced a `sessions_sleep` wake-timer tool for lightweight agent-owned session management ([PR #71780](https://github.com/openclaw/openclaw/pull/71780)).
    *   Added DeepSeek V4 onboarding as a first-class provider ([PR #71778](https://github.com/openclaw/openclaw/pull/71778)).
    *   Implemented the "EV-002" fast learning loop via a gated `skills_manage` tool, pushing OpenClaw toward autonomous capability evolution ([PR #71768](https://github.com/openclaw/openclaw/pull/71768)).
*   **Channel & UI Fixes:** Stabilized heartbeat routing and avatar overrides ([PR #71686](https://github.com/openclaw/openclaw/pull/71686)), added Feishu Schema 2.0 card callback support ([PR #71787](https://github.com/openclaw/openclaw/pull/71787)), and fixed Google TTS Ogg/Opus emissions so WhatsApp correctly displays voice notes ([PR #71742](https://github.com/openclaw/openclaw/pull/71742)).
*   **System Stability & Tooling:** Fixed dynamic model provider lookups in the image tool ([PR #71500](https://github.com/openclaw/openclaw/pull/71500)), addressed memory-core dreaming cron failures by adding a runtime cron service fallback ([PR #71694](https://github.com/openclaw/openclaw/pull/71694)), and cleaned up an edge case where `update` failed due to staging directories ([PR #71772](https://github.com/openclaw/openclaw/pull/71772)).

## 4. Community Hot Topics
The most heavily discussed items revolve around ACP (Agent Communication Protocol) session reliability and session/context assembly bugs:
*   **ACP Session Drops:** Users report ACP sessions failing to deliver completion events or timing out entirely with no output. ([Issue #54690](https://github.com/openclaw/openclaw/issues/54690) - 6 comments, [Issue #70699](https://github.com/openclaw/openclaw/issues/70699) - 6 comments).
*   **Context & Transcript Duplication:** A broader community pain point is being tracked in the maintainer umbrella issue for duplicate transcripts, replay, and context assembly bugs across MS Teams, Telegram, and Webchat ([Issue #69208](https://github.com/openclaw/openclaw/issues/69208) - 4 comments).
*   **Setup and Local Model Regressions:** Fresh setups using OpenRouter are failing to respond due to auto-generated `baseUrl` misconfigurations ([Issue #69104](https://github.com/openclaw/openclaw/issues/69104) - 6 comments, 2 👍). Additionally, Heartbeat checks are causing repeated model loads in LM Studio ([Issue #68363](https://github.com/openclaw/openclaw/issues/68363) - 6 comments).

## 5. Bugs & Stability
Several critical bugs and regressions were reported, with many seeing immediate fix PRs:
1.  **Gateway Deadlock via ACP Quota Exhaustion (Critical):** If an ACP subagent exhausts its provider quota, the gateway deadlocks all sessions across all channels. ([Issue #68823](https://github.com/openclaw/openclaw/issues/68823)). 
2.  **Session Lock File Persistence (High):** Agent session locks (`*.jsonl.lock`) are not released after a SIGKILL, completely blocking subsequent runs. ([Issue #70004](https://github.com/openclaw/openclaw/issues/70004), Fix proposed in [PR #49660](https://github.com/openclaw/openclaw/pull/49660)).
3.  **Cloud/VPS Gateway Crash (High):** OpenClaw Gateway crashes on cloud servers with "CIAO PROBING CANCELLED" due to unsupported mDNS multicast, causing infinite restart loops under systemd. ([Issue #70232](https://github.com/openclaw/openclaw/issues/70232), [Issue #71751](https://github.com/openclaw/openclaw/issues/71751)).
4.  **GPT-5.4 Encrypted Content Mismatch (Medium):** Switching mid-session to GPT-5.4 from Claude results in a 400 error due to `encrypted_content` `item_id` mismatches. ([Issue #70654](https://github.com/openclaw/openclaw/issues/70654)).
5.  **Bundled Runtime Deps Restaging (Medium):** Isolated/Kubernetes deployments are experiencing first-user-turn failures due to runtime dependency restaging issues. ([Issue #71599](https://github.com/openclaw/openclaw/issues/71599)).

## 6. Feature Requests & Roadmap Signals
Based on user submissions and maintainer PRs, the short-term roadmap is heavily focused on memory continuity and multi-modal integrations:
*   **Advanced Memory & Knowledge Management:** Users are actively requesting structured, persistent memory systems. Requests include "Memory flush on /new and /reset" ([Issue #8185](https://github.com/openclaw/openclaw/issues/8185) - 7 👍) and a broader Advanced Persistent Memory system ([Issue #70513](https://github.com/openclaw/openclaw/issues/70513)). 
*   **Agent Identity Hot-Reload:** A highly logical feature request for allowing `SOUL.md` and `IDENTITY.md` changes without gateway restarts ([Issue #68604](https://github.com/openclaw/openclaw/issues/68604)). Given the current velocity, this will likely be merged in an upcoming release.
*   **Lightning-Paid MCP:** Integration of the `invinoveritas` Lightning-paid reasoning server highlights the community's desire for modular, external reasoning capabilities via MCP ([Issue #60440](https://github.com/openclaw/openclaw/issues/60440)).

## 7. User Feedback Summary
Users are generally excited about the rapid addition of new integrations (Google Meet, DeepSeek V4, Inworld TTS), but frustration is mounting around **session state management and regressions**. Specifically:
*   **Pain Point 1 (UI/State Sync):** Users are frustrated by the webchat history disappearing during re-renders ([Issue #69406](https://github.com/openclaw/openclaw/issues/69406)) and misleading UI cues like non-ACP sessions claiming "ACP session reset in place" ([Issue #69290](https://github.com/openclaw/openclaw/issues/69290)).
*   **Pain Point 2 (Windows Stability):** Windows native users continue to face ESM URL scheme crashes with the Telegram provider ([Issue #71749](https://github.com/openclaw/openclaw/issues/71749)).
*   **Satisfaction:** Self-hosters and CLI users appreciate the continuous expansion of providers (Kilo, OpenRouter, local LM Studio/others) and the swift patching of configuration validators.

## 8. Backlog Watch
The following high-impact items require immediate maintainer attention to prevent ecosystem friction:
*   **Orphaned ACP/Claude Processes:** ACP sessions leave orphaned `claude` CLI processes that exhaust system swap space. This is a resource leak affecting long-running instances ([Issue #44790](https://github.com/openclaw/openclaw/issues/44790)).
*   **Sandbox Zombie Processes:** Sandbox sessions accumulate zombie processes under PID 1, eventually hitting `pids.max` and crashing the sandbox environment ([Issue #68691](https://github.com/openclaw/openclaw/issues/68691)).
*   **Unactionable Control UI Approvals:** The Control UI approval dialog succeeds visually, but the execution engine never consumes the approval, requiring manual intervention ([Issue #58479](https://github.com/openclaw/openclaw/issues/58479)).
*   **Large Matrix E2EE PR:** A significant test PR covering Matrix E2EE destructive backup recovery flows has been closed/needs final review before merge ([PR #71311](https://github.com/openclaw/openclaw/pull/71311)).

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report analyzing the AI agent and personal assistant open-source ecosystem as of April 26, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a massive growth phase, driven primarily by the rapid iteration of frontier LLMs (such as DeepSeek V4) and the standardization of external tool use via the Model Context Protocol (MCP). Projects are shifting from simple chat wrappers to complex, multi-modal, multi-channel orchestrators capable of autonomous task execution. However, this rapid expansion is introducing significant technical debt and growing pains. The primary bottlenecks across the ecosystem are no longer core AI capabilities, but rather infrastructure reliability—specifically surrounding state/context management, secure sandboxing, provider-specific API fragmentation, and seamless channel integrations.

## 2. Activity Comparison
*Health Score (1-5)* is based on issue triage velocity, PR throughput, and presence of critical unfixed bugs.

| Project | Issues (24h Activity) | PRs (24h Activity) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (454 closed) | 500 (431 merged) | **v2026.4.24** (Stable) | 🟢 5/5 (High Velocity) |
| **NanoBot** | 8 opened (0 closed) | 28 (11 merged) | No release | 🟡 3/5 (Triage Lag) |
| **Hermes Agent** | 50 (4 closed) | 50 (4 merged) | No release | 🔴 1/5 (Severe Backlog) |
| **PicoClaw** | 7 (5 closed) | 21 (12 merged) | **v0.2.7** (Nightly) | 🟢 4/5 (Healthy Momentum) |
| **NanoClaw** | 4 | 29 (11 merged) | No release | 🟢 4/5 (Strong Contribution) |
| **NullClaw** | 3 updated | 1 merged | No release | 🟡 3/5 (Maintenance) |
| **IronClaw** | 6 active | 27 (3 merged) | Post v0.25.0 stabilization | 🟢 4/5 (Active Iteration) |
| **LobsterAI** | 4 stale | 10 merged | RC Imminent | 🟡 3/5 (Maintainer/User Disconnect)|
| **Moltis** | 2 opened | 6 (2 merged) | No release | 🟢 4/5 (Targeted Hardening) |
| **CoPaw** | 14 active | 11 (3 merged) | **v1.1.4.post2** | 🟠 2/5 (Regressions) |
| **ZeptoClaw** | 0 | 4 (3 merged) | No release | 🟢 5/5 (Stable/Infrastructure) |
| **ZeroClaw** | 50 (13 closed) | 41 (12 merged) | Pre-**v0.7.4** | 🟡 3/5 (High Volume, High Friction) |
| *TinyClaw / EasyClaw* | 0 | 0 | Dormant | ⚪ N/A |

## 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw operates in a class of its own regarding sheer velocity and scale. Processing 500 issues and 500 PRs a day while successfully cutting a stable release (v2026.4.24) demonstrates a highly mature CI/CD pipeline and robust maintainer triage system that completely eclipses struggling peers like Hermes Agent and ZeroClaw. 
**Technical Approach:** It acts as a comprehensive "batteries-included" ecosystem. While projects like ZeptoClaw focus on Rust-based minimalism, and Moltis focuses on deep Linux-level sandboxing, OpenClaw prioritizes universal integration (bundling Google Meet, Webchat, Teams, Telegram) and first-class support for top-tier LLMs out-of-the-box.
**Community Size:** OpenClaw's community is orders of magnitude larger and more active. The primary risk for OpenClaw is not a lack of contributions, but regression management, as evidenced by Gateway deadlocks and ACP session drops reported on highly-upvoted issues.

## 4. Shared Technical Focus Areas
Several unified requirements are emerging simultaneously across entirely different codebases:
*   **DeepSeek V4 API Compatibility:** The release of DeepSeek V4 has broken tool-calling and reasoning contexts across the board. Urgent fixes were required in OpenClaw, PicoClaw, LobsterAI, and ZeroClaw due to how the model's `reasoning_content` is handled during agentic loops.
*   **MCP (Model Context Protocol) Stability:** As agents transition to using MCP for tool execution, edge cases are causing crashes. Null-argument handling was patched in PicoClaw; stdio/OAuth pre-flight failures are plaguing IronClaw; and ZeroClaw/CoPaw are experiencing infinite hanging during MCP client sessions.
*   **Context Assembly & Memory Management:** Ecosystem-wide frustration with "amnesiac" agents. Users are demanding structured memory flushes (OpenClaw), session-level focus tools (NanoBot), and reliable history rendering in Web UIs (PicoClaw, ZeroClaw).
*   **Multi-Channel UI/Config Persistence:** A recurrent P1 bug across CoPaw, ZeroClaw, and OpenClaw where web UI state, language settings, and model configurations reset upon refresh or container restart.

## 5. Differentiation Analysis
*   **Enterprise Security vs. Hobbyist Flexibility:** IronClaw and Moltis are explicitly targeting enterprise-grade security, focusing heavily on Landlock sandboxing, WASM isolation, and RBAC. Conversely, projects like NanoClaw and NullClaw cater to "homelabbers" and power users focusing on sovereign local deployment, lightweight footprints, and custom local LLM routing.
*   **Architecture Paradigms:** 
    *   *Monolithic Release:* OpenClaw and CoPaw ship massive, bundled releases.
    *   *Pluggable/Modular:* NanoBot and IronClaw focus heavily on sidecars, provider failover routing, and multi-agent delegation frameworks.
    *   *Rust/Native Performance:* ZeptoClaw and ZeroClaw are differentiating via native performance, utilizing Tauri for desktop builds and strictly managing system resources.
*   **Target Audience:** LobsterAI and CoPaw show strong traction in the APAC market with dedicated Feishu, WeCom, and CJK language support, whereas OpenClaw and Hermes Agent target a broader Western/global multi-platform matrix.

## 6. Community Momentum & Maturity
*   **Tier 1 (Hyper-growth / Mature Velocity):** OpenClaw leads the pack in mature hyper-scaling, seamlessly merging hundreds of PRs. NanoClaw and PicoClaw represent highly healthy, rapidly iterating communities with high PR merge ratios and enthusiastic user bases.
*   **Tier 2 (Scaling Friction):** ZeroClaw, NanoBot, and IronClaw are experiencing high community demand but are struggling to triage issues fast enough. They are actively balancing heavy feature pipelines with disruptive bug backlogs.
*   **Tier 3 (Distressed / Stalled):** Hermes Agent is currently the most notable project facing a crisis of maintainer bandwidth, accumulating 46 open issues and PRs in 24 hours while resolving only 4, leaving multiple P1 security vulnerabilities unaddressed. LobsterAI and CoPaw are experiencing severe regression issues (UI blanking, broken state persistence) that are actively alienating users and forcing downgrades.

## 7. Trend Signals
1.  **The Rise of Local/Custom Endpoints:** Users are pushing back against API dependencies. There is a massive surge in demand for seamless OpenAI-compatible endpoint routing (vLLM, LM Studio, Ollama) across NanoClaw, Hermes, and IronClaw. Provider abstraction layers are currently too thin, leaking provider-specific API errors to users.
2.  **Multi-Agent Delegation over Monolithic Agents:** The "Next Big Feature" across the space is agent-to-agent delegation. OpenClaw (EV-002 learning loops), PicoClaw (delegate tools), and Hermes (async delegation jobs) indicate that the market is moving away from single-agent prompt-chaining toward orchestrated agent swarms.
3.  **Security as a Core Differentiator:** With agents executing terminal commands and accessing local filesystems via MCP, security is a top priority. The ecosystem is moving away from basic Docker isolation toward strict permission systems (Moltis Landlock, IronClaw WASM bindings) and human-in-the-loop approval UIs for tool executions.
4.  **Sovereign Voice & Multimodal Pipelines:** The integration of local Whisper models (NanoClaw) and direct Vision passthrough (Hermes) indicate that developers are actively seeking to build fully localized, sovereign multimodal workflows that bypass cloud processing entirely.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-26

## 1. Today's Overview
NanoBot is experiencing a high-velocity development phase with significant community engagement, as evidenced by 28 pull requests updated and 8 new issues opened in the past 24 hours. The project is heavily focused on hardening its multi-channel integrations (Feishu, MS Teams, Telegram) and expanding provider support (OpenRouter, DeepSeek, local LLMs). While no official releases were cut today, the maintainers are actively merging quality-of-life improvements, security patches, and significant architectural features like cross-session memory governance. The zero closed issues against 8 open issues suggests a rapid influx of new bug reports and feature requests that are currently outpacing the triage and resolution process.

## 2. Releases
**No new releases were recorded today.** Development remains focused on merging upstream features and fixes, likely building towards the next stable release.

## 3. Project Progress
Today saw 11 PRs merged/closed, indicating steady progress in project maturation and capability expansion:
*   **Enhanced Interactivity:** A major feature PR, [feat(agent): add ask user tool #2791](https://github.com/HKUDS/nanobot/pull/2791), was merged, enabling the agent to pause and request interactive confirmations or information from the CLI user.
*   **Document Parsing:** Support for office documents was added via [feat(read_file): add DOCX, XLSX, PPTX office document support #3336](https://github.com/HKUDS/nanobot/pull/3336).
*   **Channel Improvements:** Several channel-specific PRs were closed/merged, including a fix for MS Teams threaded replies ([fix(msteams): send threaded replies via replyToId #3447](https://github.com/HKUDS/nanobot/pull/3447)) and updated Feishu thread-scoped sessions ([feat(feishu): thread-scoped sessions #3176](https://github.com/HKUDS/nanobot/pull/3176)).
*   **Documentation:** The repository expanded its global reach by merging the [Chinese translation for README #2345](https://github.com/HKUDS/nanobot/pull/2345).

## 4. Community Hot Topics
The community is highly active in discussing architectural improvements and channel reliability:
*   **Provider Failover (8 comments, 1 👍):** [Issue #3376](https://github.com/HKUDS/nanobot/issues/3376) is gaining traction, discussing the need for automatic switching between configured AI providers/models during rate limits (429s) or downtime. This highlights a critical enterprise need for high availability.
*   **Telegram Reliability (3 comments):** Users continue to discuss markdown rendering inconsistencies in Telegram channels ([Issue #2568](https://github.com/HKUDS/nanobot/issues/2568)), pointing to underlying complexities in bridging AI outputs to strict chat platforms.
*   **Cross-Session Memory (2 comments):** [Issue #3292](https://github.com/HKUDS/nanobot/issues/3292) proposes a "Session-Level Focus Tool" to help agents maintain primary task awareness after interruptions. This aligns directly with the recently opened [MGP sidecar PR #3408](https://github.com/HKUDS/nanobot/pull/3408).

## 5. Bugs & Stability
Several production-affecting bugs were reported today, with the community swiftly proposing fixes:
*   **Critical - Privacy Leak:** [Issue #3443](https://github.com/HKUDS/nanobot/issues/3443) reports that internal chain-of-thought (`reasoning` field) leaks into user-facing text in non-streaming responses. *Fix available:* [PR #3445](https://github.com/HKUDS/nanobot/pull/3445) and [PR #3446](https://github.com/HKUDS/nanobot/pull/3446).
*   **High - Local Provider Instability:** [PR #3444](https://github.com/HKUDS/nanobot/pull/3444) highlights that local model servers (Ollama, vLLM) experience connection drops during sequential heartbeat/direct calls due to HTTP keepalive pooling.
*   **Medium - Media Uploads:** [Issue #3435](https://github.com/HKUDS/nanobot/issues/3435) notes that the WeCom channel fails to return media file attachments, resulting in `[file upload failed]` errors.
*   **High - Security Vulnerabilities:** Multiple open PRs aim to patch command execution vulnerabilities, including SSRF bypass via non-HTTP protocols ([PR #3252](https://github.com/HKUDS/nanobot/pull/3252)) and shell injection via path appending ([PR #3366](https://github.com/HKUDS/nanobot/pull/3366)).

## 6. Feature Requests & Roadmap Signals
Today's issues and PRs signal strong momentum toward tooling extensibility and external integrations:
*   **External Agent Delegation:** [Issue #3436](https://github.com/HKUDS/nanobot/issues/3436) requests the ability to delegate tasks to external agent frameworks (like OpenCode/Codex) instead of relying solely on NanoBot's internal agent.
*   **Advanced Provider Configurations:** [PR #3416](https://github.com/HKUDS/nanobot/pull/3416) introduces a `prefer_free` option specifically for OpenRouter routing.
*   **Per-Group Channel Policies:** [Issue #3309](https://github.com/HKUDS/nanobot/issues/3309) requests workspace-specific policy overrides for Telegram, indicating NanoBot is being deployed in complex multi-group/community environments.
*   **Project Management Context:** [PR #3403](https://github.com/HKUDS/nanobot/pull/3403) introduces a `project-manager` skill for state management, pointing toward NanoBot expanding its utility as a long-term development assistant.

## 7. User Feedback Summary
Users are leveraging NanoBot in sophisticated, multi-model setups but are encountering friction with single-point-of-failure provider setups and cross-platform formatting. The community shows high technical engagement, evidenced by users not just reporting bugs but providing deep architectural RFCs (e.g., debugging heartbeats in [Issue #3437](https://github.com/HKUDS/nanobot/issues/3437)). There is a strong desire to use NanoBot as an orchestrator that interfaces with external APIs, local networks, and even other agent frameworks, moving beyond simple single-turn chat interfaces.

## 8. Backlog Watch
*   **Provider Failover ([Issue #3376](https://github.com/HKUDS/nanobot/issues/3376)):** Highly requested and discussed, but currently lacks an open PR. This is a critical bottleneck for enterprise/users relying on high uptime.
*   **Security Patches:** [PR #3252](https://github.com/HKUDS/nanobot/pull/3252) (SSRF) and [PR #3255](https://github.com/HKUDS/nanobot/pull/3255) (Filesystem protection) have been open since April 17th and urgently require maintainer review and merging to prevent command execution vulnerabilities.
*   **Audio Transcription Resilience ([PR #3253](https://github.com/HKUDS/nanobot/pull/3253)):** Open since April 17th, addresses silent failures in Whisper endpoints, resulting in lost voice message context.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-26

## 1. Today's Overview
Hermes Agent is experiencing **very high issue volume with exceptionally low PR throughput**, indicating a heavily backlogged project under significant community usage stress. In the last 24 hours, the project saw 50 issues updated (46 open, 4 closed) and 50 pull requests updated (46 open, 4 merged/closed). Zero new releases were cut. The ratio of activity shows a project where user demand and bug reports are vastly outpacing maintainer capacity to merge fixes, creating a growing deficit of unresolved P1 bugs and security vulnerabilities.

## 2. Releases
**No new releases** were published today. The project appears to be in an extended development cycle without recent stable snapshots, meaning users are forced to run older release versions with known bugs (e.g., #8993 referencing v0.8.0 instability) or compile from `main`.

## 3. Project Progress
Only **4 PRs were closed/merged** and **4 issues were closed** out of 100 total updated items. Progress was minimal and targeted:

- **[#10842](https://github.com/NousResearch/hermes-agent/pull/10842) [MERGED]** — Fixed CLI import side effects in gateway tool config loaders (`delegate_tool`, `code_execution_tool`), preventing `TERMINAL_CWD` pollution.
- **[#10846](https://github.com/NousResearch/hermes-agent/issues/10846) [CLOSED]** — CLI skin initialization crash when `display: null` was present in config; likely resolved by the above or a related patch.
- **[#6475](https://github.com/NousResearch/hermes-agent/issues/6475) [CLOSED]** — Long-running Anthropic subscription auth "out of extra usage" error (25 comments, 15 👍) was finally closed after persisting since April 9.
- **[#15741](https://github.com/NousResearch/hermes-agent/issues/15741) [CLOSED]** — Recurring DeepSeek cron path `reasoning_content` 400 error (re-emerged after prior #15213 closure).

**Open PRs advancing features/fixes** (not yet merged):
- **[#15785](https://github.com/NousResearch/hermes-agent/pull/15785)** — Async profile-aware delegation jobs (file-backed, non-blocking child agents).
- **[#14076](https://github.com/NousResearch/hermes-agent/pull/14076)** — Web UI model picker provider-switching fix.
- **[#10691](https://github.com/NousResearch/hermes-agent/pull/10691)** — WeCom group chat support.

## 4. Community Hot Topics

The most actively discussed items reveal deep pain points around **provider compatibility, security, and multi-model architecture**:

| Issue/PR | Comments | Reactions | Core Theme |
|----------|----------|-----------|------------|
| [#6475](https://github.com/NousResearch/hermes-agent/issues/6475) | 25 | 15 👍 | Anthropic subscription auth failures |
| [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) | 6 | 0 | Native vision support for capable models |
| [#15717](https://github.com/NousResearch/hermes-agent/issues/15717) | 4 | 1 👍 | DeepSeek reasoning_content API error |
| [#10695](https://github.com/NousResearch/hermes-agent/issues/10695) | 4 | 0 | Python dependency CVEs |
| [#3752](https://github.com/NousResearch/hermes-agent/issues/3752) | 4 | 0 | Cron scheduler blocking |
| [#15459](https://github.com/NousResearch/hermes-agent/issues/15459) | 3 | 0 | Terminal tool env var leak |
| [#15551](https://github.com/NousResearch/hermes-agent/issues/15551) | 3 | 0 | Custom endpoints lack tool execution |
| [#12511](https://github.com/NousResearch/hermes-agent/issues/12511) | 3 | 0 | Discord attachment handling |

**Underlying needs analysis:**
- **Provider compatibility (#6475, #15717, #15551):** Users are running Hermes with diverse providers (Anthropic, DeepSeek, Mistral, custom OpenAI-compatible endpoints) and hitting provider-specific API contract failures. The abstraction layer is leaking provider quirks into user-facing errors.
- **Security urgency (#10695, #10692, #10693):** Three separate security issues (CVE dependencies, shell injection bypass, OAuth PKCE misuse) suggest the codebase has accumulated technical debt in its auth and execution pathways.
- **Multi-modal capability (#13065):** The community wants native vision passthrough instead of routing through an auxiliary model, indicating Hermes is being used for complex multimodal workflows.

## 5. Bugs & Stability

Ranked by severity (P1 bugs first):

### Critical (P1)

1. **[#15768](https://github.com/NousResearch/hermes-agent/issues/15768)** — **Setup wizard completely broken on Ubuntu**: cannot enter/paste API key. Blocks all new user onboarding. **No fix PR visible.**

2. **[#15763](https://github.com/NousResearch/hermes-agent/issues/15763)** — **Matrix "Hall of Mirrors" recursive pairing loop**: system/bridge events trigger infinite recursive agent spawning. Potential denial-of-service vector. **No fix PR visible.**

3. **[#10719](https://github.com/NousResearch/hermes-agent/issues/10719)** — **Context compression silently drops ALL conversation turns** when summary generation fails. Data loss with no recovery mechanism. **No fix PR visible.**

4. **[#10756](https://github.com/NousResearch/hermes-agent/issues/10756)** — **TUI hangs forever** when interrupting agent during MCP tool blocking I/O. Requires force-kill. **No fix PR visible.**

5. **[#10693](https://github.com/NousResearch/hermes-agent/issues/10793)** — **OAuth PKCE code_verifier leaked via authorization URL** (reused as state parameter). Security vulnerability. **No fix PR visible.**

6. **[#10692](https://github.com/NousResearch/hermes-agent/issues/10692)** — **`shell=True` in config-driven paths bypasses terminal safety controls**. Security vulnerability. **No fix PR visible.**

7. **[#10695](https://github.com/NousResearch/hermes-agent/issues/10695)** — **Python CVEs in aiohttp, cryptography, curl-cffi**. Dependency security. **No fix PR visible.**

8. **[#15459](https://github.com/NousResearch/hermes-agent/issues/15459)** — **Terminal tool leaks `declare -x` env var dump** into LLM context window on macOS persistent shells, consuming tokens. **No fix PR visible.**

### High (P2)

- **[#15717](https://github.com/NousResearch/hermes-agent/issues/15717)** — DeepSeek `reasoning_content` 400 error. **Fix PR: [#15749](https://github.com/NousResearch/hermes-agent/pull/15749)** (open, by Zjianru).
- **[#15748](https://github.com/NousResearch/hermes-agent/issues/15748)** — Cross-provider reasoning content leak to DeepSeek/Kimi. Related to above. **Fix PR: [#15749](https://github.com/NousResearch/hermes-agent/pull/15749)**.
- **[#3752](https://github.com/NousResearch/hermes-agent/issues/3752)** — Cron scheduler tick loop blocked by long-running jobs. Nearly a month old. **No fix PR visible.**
- **[#15551](https://github.com/NousResearch/hermes-agent/issues/15551)** — Custom endpoints act as chat-only, no tool execution. **No fix PR visible.**
- **[#8993](https://github.com/NousResearch/hermes-agent/issues/8993)** — Tool calling instability/hallucination in v0.8.0 with web_search/FireCrawl. 13 days old. **No fix PR visible.**
- **[#15290](https://github.com/NousResearch/hermes-agent/issues/15290)** — Docker permission denied on NAS deployments. **No fix PR visible.**
- **[#10755](https://github.com/NousResearch/hermes-agent/issues/10755)** — WSL2 PTY disconnect crash. **No fix PR visible.**

**Stability assessment:** There are **at least 7 unfixed P1 bugs**, several over a week old. The project has significant stability gaps across CLI setup, Matrix integration, context management, MCP tool handling, and security infrastructure.

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Signals |
|---------|-------|---------|
| **Native vision passthrough** | [#13065](https://github.com/NousResearch/hermes-agent/issues/13065) | High-engagement (6 comments), detailed reference implementation proposal. Likely next-version candidate. |
| **Per-task model/provider overrides in delegation** | [#15789](https://github.com/NousResearch/hermes-agent/issues/15789) | Complements async delegation PR [#15785](https://github.com/NousResearch/hermes-agent/pull/15785). Active development. |
| **Web dashboard multi-profile switching** | [#10674](https://github.com/NousResearch/hermes-agent/issues/10674) | Design proposal with root cause analysis. Needed for multi-tenant use. |
| **WeCom group chat** | [#10691](https://github.com/NousResearch/hermes-agent/pull/10691) | Open PR, nearly complete. |
| **Activity-aware terminal timeouts** | [#10677](https://github.com/NousResearch/hermes-agent/pull/10677) | Open PR with tests. |
| **Delegation include_tool_trace config** | [#10679](https://github.com/NousResearch/hermes-agent/pull/10679) | Token optimization for delegation. |

**Prediction for next version:** The convergence of async delegation jobs (#15785), per-task model overrides (#15789), and tool trace configuration (#10679) suggests the next release will focus heavily on **multi-agent delegation architecture** as a headline feature.

## 7. User Feedback Summary

**Pain points (recurrent themes across issues):**
- **Provider fragmentation:** Users combining DeepSeek, Anthropic, OpenAI, Mistral, Qwen, and custom endpoints hit provider-specific failures constantly. The abstraction isn't thick enough (#6475, #15717, #15748, #15551, #12952, #8785, #15779).
- **Docker/NAS deployment friction:** Permission errors and missing config handling make self-hosting painful (#15290).
- **Context management fragility:** Compression dropping conversations (#10719) and context_length overrides being ignored (#8785, #15779) undermine trust in long-running sessions.
- **Tool execution reliability:** Terminal env leaks (#15459), MCP image content silently dropped (#10759), MCP blocking hangs (#10756), and FireCrawl instability (#8993) make tool-dependent workflows unreliable.
- **Onboarding blockers:** Setup wizard broken on Ubuntu (#15768) and OAuth auth issues (#6475) prevent new users from even starting.

**Positive signals:**
- Community contributors are actively submitting targeted fixes (konsisumer, Zjianru, Bartok9, konsisumer with multiple PRs).
- Users are deploying Hermes in sophisticated environments: Matrix bridges, WeCom, Docker on NAS, Hetzner VPS, WSL2 — indicating real production adoption.
- Feature requests show users building complex multi-agent, multi-provider, multi-platform workflows.

**Satisfaction assessment:** Moderate-low. Users are invested (detailed bug reports, feature proposals with code references) but frustrated by slow merge velocity and unfixed P1 bugs.

## 8. Backlog Watch

Items needing **immediate maintainer attention**:

| Item | Age | Why Critical |
|------|-----|--------------|
| **[#3752](https://github.com/NousResearch/hermes-agent/issues/3752)** — Cron scheduler blocking | **28 days** | P2 perf issue affecting all cron users; no activity despite 4 comments |
| **[#8993](https://github.com/NousResearch/hermes-agent/issues/8993)** — Tool calling instability | **13 days** | P2 bug affecting core agent functionality; 1 👍, no fix PR |
| **[#10695](https://github.com/NousResearch/hermes-agent/issues/10695)** — Python CVEs | **10 days** | P1 security; straightforward dependency bumps, unactioned |
| **[#10692](https://github.com/NousResearch/hermes-agent/issues/10692)** — Shell injection bypass | **10 days** | P1 security; no fix PR |
| **[#10693](https://github.com/NousResearch/hermes-agent/issues/10693)** — OAuth PKCE vulnerability | **10 days** | P1 security; no fix PR |
| **[#10719](https://github.com/NousResearch/hermes-agent/issues/10719)** — Compression drops turns | **10 days** | P1 data loss; no fix PR |
| **[#10756](https://github.com/NousResearch/hermes-agent/issues/10756)** — TUI hang on MCP interrupt | **10 days** | P1 usability; no fix PR |
| **[#10759](https://github.com/NousResearch/hermes-agent/issues/10759)** — MCP ImageContent silently dropped | **10 days** | P2 feature gap; no fix PR |

**Open PRs awaiting review (long-lived):**
- **[#7741](https://github.com/NousResearch/hermes-agent/pull/7741)** — Hindsight plugin fail-loudly fix (**15 days open**)
- **[#7782](https://github.com/NousResearch/hermes-agent/pull/7782)** — Qwen OAuth User-Agent fix (**15 days open**)
- **[#10677](https://github.com/NousResearch/hermes-agent/pull/10677)** through **[#10693](https://github.com/NousResearch/hermes-agent/pull/10693)** cluster — Multiple PRs from April 16 (**10 days open**, unreviewed)

**Key concern:** The project has **46 open PRs and 46 open issues from the last 24 hours alone**, with only 4 of each being closed. The maintainer team appears critically understaffed relative to community activity. Security issues (3 P1s) sitting for 10+ days without response is the most urgent risk.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-04-26

## 1. Today's Overview
PicoClaw maintains a highly active development tempo this period, with 21 pull requests updated (12 closed/merged) and 7 issues processed (5 closed). The project is currently iterating rapidly toward the **v0.2.7** milestone, as evidenced by today's nightly build. The bulk of engineering effort is focused on hardening the **MCP (Model Context Protocol) tool integration layer**, fixing **provider-specific reasoning quirks** (especially DeepSeek), and polishing the **Web Chat frontend UX**. The high PR merge ratio and diverse contributor base indicate strong project momentum and a healthy open-source community.

## 2. Releases
*   **nightly: v0.2.7-nightly.20260425.8d51d306**
    *   **Summary:** Automated nightly build cutting edge features for v0.2.7. 
    *   **Highlights:** Incorporates recent merges including DeepSeek reasoning fixes, MCP null-argument patches, and Web Chat history consistency updates.
    *   **Full Changelog:** [`v0.2.7...main`](https://github.com/sipeed/picoclaw/compare/v0.2.7...main)
    *   *Note: Automated builds may be unstable. Use with caution in production environments.*

## 3. Project Progress
Significant progress was made across provider compatibility, tool execution, and frontend stability:
*   **Provider & Agent History:** Canonical history persistence for DeepSeek's reasoning mode was merged ([PR #2657](https://github.com/sipeed/picoclaw/pull/2657)), resolving critical conversation crash states.
*   **MCP Tools Stability:** Two crucial fixes merged: resolving MCP HTTP session drops via automatic reconnects ([PR #2664](https://github.com/sipeed/picoclaw/pull/2664)) and ensuring null arguments are sent as empty objects `{}` ([PR #2666](https://github.com/sipeed/picoclaw/pull/2666)).
*   **Web Chat UX:** Merged structural fixes to isolate thought bubble states ([PR #2659](https://github.com/sipeed/picoclaw/pull/2659)) and format tool feedback clearly as JSON blocks ([PR #2660](https://github.com/sipeed/picoclaw/pull/2660)).
*   **Windows UX:** Eliminated annoying console flash spasms when running the launcher on Windows ([PR #2654](https://github.com/sipeed/picoclaw/pull/2654)).

## 4. Community Hot Topics
*   **Web Chat Tool Summaries:** The most structurally significant active PR is [PR #2672](https://github.com/sipeed/picoclaw/pull/2672), which introduces structured tool calls to the web frontend. This aims to permanently solve the vanishing tool details issue, a frequent community complaint.
*   **OpenRouter Free Tier Outage ([Issue #1790](https://github.com/sipeed/picoclaw/issues/1790)):** A long-standing bug involving the `minimax-m2.5:free` model returning 400 errors was closed after significant discussion (6 comments). This highlights the community's heavy reliance on free-tier models for testing and the strict provider-side validation rules.
*   **Google Gemini Complex Schemas ([Issue #2668](https://github.com/sipeed/picoclaw/issues/2668)):** A newly opened issue revealing that Gemini's strict API rejects MCP tools (like Notion) using complex JSON schemas (`$ref`, `anyOf`). This is a rising pain point as users push MCP integrations deeper into enterprise tools.

## 5. Bugs & Stability
*   **[Critical] DeepSeek Reasoning Context Crash:** When using DeepSeek-V4-Flash with reasoning enabled, history contexts became malformed after tool calls, breaking subsequent conversations. 
    *   *Status:* ✅ Fixed and merged in [PR #2657](https://github.com/sipeed/picoclaw/pull/2657) and [PR #2648](https://github.com/sipeed/picoclaw/issues/2648).
*   **[High] MCP Null Arguments causing Tool failures:** When MCP tools had optional parameters, PicoClaw sent `null` instead of `{}`, violating the spec and causing provider rejections.
    *   *Status:* ✅ Fixed in [PR #2666](https://github.com/sipeed/picoclaw/pull/2666).
*   **[Medium] Web Chat Refresh Inconsistencies:** Chat history lost tool call summaries upon page refresh, degrading user experience.
    *   *Status:* ✅ Fixed structurally in [PR #2657](https://github.com/sipeed/picoclaw/pull/2657), with ongoing UI improvements in [PR #2672](https://github.com/sipeed/picoclaw/pull/2672).
*   **[Medium] Gemini MCP 400 Errors:** No fix PR yet for the Gemini complex schema issue ([Issue #2668](https://github.com/sipeed/picoclaw/issues/2668)). Requires a schema-flattening middleware before sending to the Google API.

## 6. Feature Requests & Roadmap Signals
Active PRs and issues indicate the project is expanding its multi-agent capabilities and provider flexibility:
*   **Multi-Agent Task Handoff:** [PR #2531](https://github.com/sipeed/picoclaw/pull/2531) is implementing a `delegate` tool, allowing an agent to hand off tasks to other named agents synchronously. This is a major step toward **agentic workflows** in Phase 2.
*   **LLM Network Resiliency:** [PR #2669](https://github.com/sipeed/picoclaw/pull/2669) introduces configurable retries and backoff for network errors, a vital feature for long-running autonomous tasks.
*   **Provider Expansion:** 
    *   Request for `opencode` Zen/Go subscription support ([Issue #2671](https://github.com/sipeed/picoclaw/issues/2671)).
    *   Active development to add `xAI` compatibility ([PR #2260](https://github.com/sipeed/picoclaw/pull/2260)).

## 7. User Feedback Summary
*   **Pain Points:** Users are increasingly utilizing models with built-in reasoning (DeepSeek) and MCP integrations simultaneously. The collision of long reasoning chains with tool-call lifecycles has been a major source of friction (history context bugs). Additionally, strict provider API specifications (like Gemini and OpenRouter) are clashing with PicoClaw's dynamic JSON mapping.
*   **Use Cases:** The community is actively using PicoClaw to interface with complex external APIs (like Notion via MCP) and heavily utilizing web chat for daily interfacing. The demand for "pretty printing" and "HTML escaping" fixes in tool feedback shows users rely on visually parsing tool inputs directly in the chat UI.

## 8. Backlog Watch
*   **[PR #326](https://github.com/sipeed/picoclaw/pull/326) - CI Concurrency (Open since Feb 2026):** A highly useful DevOps PR to cancel redundant GitHub Actions runs on new pushes. Despite being a "non-code" change, it remains unmerged. Maintainers should review this to save CI minutes.
*   **[PR #2163](https://github.com/sipeed/picoclaw/pull/2163) - Google Antigravity OAuth Fix (Open since Mar 2026):** Fixes `PERMISSION_DENIED` errors when access tokens expire. A critical fix for users running Google Cloud Code Assist, seemingly stalled. Needs a maintainer review.
*   **[PR #1780](https://github.com/sipeed/picoclaw/pull/1780) - QQ Connection Stability (Open since Mar 2026):** Introduces configurable reconnect intervals for the QQ channel. Users relying on the QQ integration would benefit greatly from this merging.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-26

## 1. Today's Overview
NanoClaw experienced a **highly active day** with 29 pull requests updated alongside 4 issues, indicating a project in a phase of rapid feature expansion and active community contribution. The open-source contributor base is deeply engaged in extending NanoClaw's channel support, skill ecosystem, and security posture, with a notable cluster of security-focused fixes submitted today. No new official releases were cut today, but the volume of merged PRs (11) suggests that maintainers are actively reviewing and integrating community contributions. Overall, the project demonstrates strong momentum and a healthy, fast-moving contributor pipeline.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Today saw **11 PRs merged/closed**, advancing several key areas of the project:

*   **New Web Portal:** A major feature, the browser-based chat UI ([PR #1863](https://github.com/qwibitai/nanoclaw/pull/1863)), was merged. It provides a native web channel served directly by NanoClaw without external dependencies like Redis.
*   **Skill Ecosystem Enhancements:** Documentation and skill logic for Signal were consolidated ([PR #2010](https://github.com/qwibitai/nanoclaw/pull/2010)), merging v2 lessons into the mainline. The groundwork was also laid for automated PR reviews via the `jbaruch/coding-policy` workflows ([PR #2015](https://github.com/qwibitai/nanoclaw/pull/2015)). 
*   **Long-standing Contributions Integrated:** A massive Proton skill suite expanding support to 36 tools for Mail, Pass, Drive, Calendar, and VPN ([PR #1117](https://github.com/qwibitai/nanoclaw/pull/1117)) was finally closed/merged after over a month of work. The async container-to-host task handoff skill ([PR #1362](https://github.com/qwibitai/nanoclaw/pull/1362)) was also integrated.

## 4. Community Hot Topics
The most actively discussed issue today revolves around **interoperability and self-hosting**:

*   **Custom/Local Endpoints (Most Active):** [Issue #1984](https://github.com/qwibitai/nanoclaw/issues/1984) generated 3 comments. Users are attempting to route NanoClaw through local or custom OpenAI-compatible endpoints (such as Codex and OpenCode). While documentation hints at this capability, users are hitting friction in practice, highlighting a strong community need for easier BYO-endpoint/self-hosted LLM support.

Several other high-impact PRs are generating significant structural discussion:
*   **Per-Agent Provider Config:** [PR #1968](https://github.com/qwibitai/nanoclaw/pull/1968) introduces fully chat-driven per-agent provider and model selection—a highly requested feature for multi-agent setups.
*   **Voice Transcription:** The team and community are iterating on the best architectural approach for voice skills. [PR #1879](https://github.com/qwibitai/nanoclaw/pull/1879) was closed in favor of a new "container-side" approach submitted via [PR #2003](https://github.com/qwibitai/nanoclaw/pull/2003), emphasizing the project's commitment to keeping host overhead minimal.

## 5. Bugs & Stability
Several stability bugs and security vulnerabilities were reported and addressed today:

*   **High Severity - Host/Container File System Security:** A path traversal/overwrite vulnerability was identified where the container could control outbox paths. [PR #2001](https://github.com/qwibitai/nanoclaw/pull/2001) was submitted to prevent host file read/delete operations. Additionally, [PR #2000](https://github.com/qwibitai/nanoclaw/pull/2000) fixes a webhook vulnerability by capping request bodies before adapter dispatch.
*   **Medium Severity - Routing & Logic Flaws:** 
    *   [PR #2002](https://github.com/qwibitai/nanoclaw/pull/2002) fixes a bug where agent-to-agent replies could land in the wrong active session.
    *   [PR #2011](https://github.com/qwibitai/nanoclaw/pull/2011) fixes a critical logic error where an invalid `engage_pattern` regex caused the system to "fail open" (responding to everything) instead of "fail closed."
*   **Low Severity - Setup/Install Environments:**
    *   [Issue #2006](https://github.com/qwibitai/nanoclaw/issues/2006): Docker socket permission denied on fresh Debian 12 LXC installs. (No fix PR yet).
    *   [Issue #2014](https://github.com/qwibitai/nanoclaw/issues/2014): `install-node.sh` hangs on Ubuntu when `needrestart` prompts for a kernel upgrade. (No fix PR yet).
    *   [PR #2013](https://github.com/qwibitai/nanoclaw/pull/2013): Fixes a poll-loop test teardown crash caused by abort signals propagating incorrectly.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and issues, the immediate roadmap is heavily focused on **skills expansion, channel refinement, and deployment flexibility**:

*   **Local LLM Support:** The activity in [Issue #1984](https://github.com/qwibitai/nanoclaw/issues/1984) strongly signals that official, streamlined support for local/Custom OpenAI endpoints will likely be prioritized in an upcoming release.
*   **Voice Processing Sovereignty:** The active PRs ([PR #2003](https://github.com/qwibitai/nanoclaw/pull/2003), [PR #2009](https://github.com/qwibitai/nanoclaw/pull/2009)) indicate that a robust, containerized, local Whisper-based voice transcription skill is imminent.
*   **Rich Channel APIs:** [PR #2008](https://github.com/qwibitai/nanoclaw/pull/2008) aims to upgrade Telegram routing to support inline media (images, video, audio) rather than treating everything as a file download.
*   **New Skills:** A YNAB (You Need A Budget) integration was proposed in [PR #2016](https://github.com/qwibitai/nanoclaw/pull/2016) to allow agents to curl budget APIs without an MCP server.

## 7. User Feedback Summary
User feedback today reflects a mix of high enthusiasm and standard deployment friction:
*   **Satisfaction:** High user satisfaction is evident, exemplified by [Issue #2017](https://github.com/qwibitai/nanoclaw/issues/2017) ("awesome work! keep it going sir").
*   **Deployment Friction:** Users deploying NanoClaw in containerized or LXC environments (Proxmox) are running into permission and setup script issues ([Issue #2006](https://github.com/qwibitai/nanoclaw/issues/2006), [Issue #2014](https://github.com/qwibitai/nanoclaw/issues/2014)). The install scripts need more robust handling of non-interactive environments.
*   **Use Cases:** Users are actively using NanoClaw for complex multi-channel setups (Telegram, Signal) and are pushing for local, sovereign AI tooling (local LLM routing, local Whisper). 

## 8. Backlog Watch
*   **Long-running, massive feature PRs needing final eyes:** [PR #1117](https://github.com/qwibitai/nanoclaw/pull/1117) (Proton suite) and [PR #1362](https://github.com/qwibitai/nanoclaw/pull/1362) (Quad inbox) were closed/merged today after lingering for over a month.
*   **Configuration overhauls:** [PR #1968](https://github.com/qwibitai/nanoclaw/pull/1968) (End-to-end per-agent provider and model configuration) was updated today. It has profound implications for how multi-agent groups are managed and warrants prioritized maintainer review.
*   **Unaddressed Setup Bugs:** [Issue #2006](https://github.com/qwibitai/nanoclaw/issues/2006) (LXC Docker socket permissions) currently has zero comments. As more users deploy NanoClaw via Proxmox/LXC for homelab setups, addressing this will unblock a growing segment of the user base.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-04-26

## 1. Today's Overview
NullClaw is experiencing moderate community engagement today, driven entirely by user-reported bug reports rather than new feature development or releases. Activity over the last 24 hours saw one pull request merged and three issues updated, indicating that maintainers are actively triaging community feedback. The focus of today's activity centers heavily on the `web_search` capabilities, specifically highlighting a friction point for NullClaw's core demographic: users running the assistant on low-resource devices. While the project remains stable overall, the lack of recent releases combined with emerging performance regressions suggests the project may be entering a necessary maintenance and stabilization phase.

## 2. Releases
*No new releases were recorded today.* 

*(There are currently no pending indicators of an imminent release, suggesting the team is focused on resolving existing bug backlogs.)*

## 3. Project Progress
Progress today was limited but highly targeted, focusing on improving the developer and user experience for search configurations:
*   **[PR #815](https://github.com/nullclaw/nullclaw/pull/815) [MERGED]**: Authored by `manelsen`, this PR enhances the `web_search` failure reporting. Instead of silently failing or outputting generic errors when a search provider is missing, the updated code now outputs actionable setup guidance. It directs users to configure `http_request.search_base_url` for self-hosted options (like SearXNG) or correctly set API key environment variables for hosted providers. This is a direct quality-of-life improvement for onboarding.

## 4. Community Hot Topics
The primary hot topic in the community is the difficulty of configuring and utilizing internet search capabilities.
*   **[Issue #812](https://github.com/nullclaw/nullclaw/issues/812)**: Submitted by user `uMendex`, this issue has generated the most traction today (7 comments, 1 upvote). The user details continuous failures in getting internet search to work. **Underlying need:** Users migrating from alternative projects (like Picoclaw or ZeroClaw) expect search to be an out-of-the-box or easily configurable feature, but are hitting a wall with NullClaw's current setup requirements.

## 5. Bugs & Stability
Three notable bugs have been identified or discussed today, highlighting some environmental and architectural limitations:

1.  **[Critical] [Issue #871](https://github.com/nullclaw/nullclaw/issues/871)**: `web_search` is impractical on low-resource devices without direct DuckDuckGo support. Because DuckDuckGo requires complex parsing/bypassing or external APIs (like Brave) that add overhead, users on "weak, cheap" devices—a core use case for NullClaw—are left without a functional search solution. *(No fix PR currently available).*
2.  **[High] [Issue #870](https://github.com/nullclaw/nullclaw/issues/870)**: Gateway `accept4` busy loop causing 100% CPU usage. Reported by `weissfl` on WSL2, the gateway thread maxes out CPU even when idle. While the bot remains functional, this is a severe performance regression/host-specific bug that will drain battery life and resources on low-end devices. *(No fix PR currently available).*
3.  **[Low] [Issue #812](https://github.com/nullclaw/nullclaw/issues/812) [CLOSED]**: General inability to enable internet search capabilities. This was largely addressed via documentation/error-message improvements merged in PR #815.

## 6. Feature Requests & Roadmap Signals
Based on today's community interactions, the following signals are apparent:
*   **Direct DuckDuckGo / Lightweight Search Integration:** The prominent underlying request in Issue #871 is the integration of a native, lightweight, API-key-free search provider (specifically DuckDuckGo). Because the project markets itself towards low-resource devices, implementing a native lightweight search scraper or API wrapper is highly likely a necessary roadmap item for the next major version. 
*   **WSL2 Environment Support:** As AI development heavily relies on WSL2 environments (as seen in Issue #870), stabilizing the `nullclaw gateway` socket handling (`accept4`) for WSL2 is an unspoken prerequisite for future developer adoption.

## 7. User Feedback Summary
*   **User Pain Points:** Users are frustrated by the hidden complexity of setting up search features. The requirement for external API keys (Brave) or self-hosted infrastructure (SearXNG) directly conflicts with the desire for a lightweight, plug-and-play assistant.
*   **Use Cases:** There is a distinct, vocal demographic using NullClaw specifically to repurpose older, low-resource hardware (e.g., cheap SBCs or old laptops). 
*   **Satisfaction/Dissatisfaction:** Users migrating to NullClaw praise its organization, but express frustration when specific highly-anticipated features (like web search) fail silently. The swift closure of Issue #812 and PR #815 shows that maintainers are responsive, which positively impacts community satisfaction despite the bugs.

## 8. Backlog Watch
The following newly opened or updated items require immediate maintainer attention to prevent bottlenecks:
*   **[Issue #870](https://github.com/nullclaw/nullclaw/issues/870) (100% CPU Usage on WSL2):** Needs triaging from a core developer to determine if this is a WSL-specific kernel issue with `accept4` or a broader asynchronous loop bug in the gateway.
*   **[Issue #871](https://github.com/nullclaw/nullclaw/issues/871) (Search on Low-Resource Devices):** Requires architectural discussion. Maintainers need to decide if they will support a native DuckDuckGo scraper (which frequently breaks due to DDG changing their HTML) or officially document a specific lightweight SearXNG hardware profile for users.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-26

## 1. Today's Overview
IronClaw is experiencing high development throughput, with 27 pull requests updated and 6 active issues tracked in the past 24 hours. The project is currently in an active iteration and stabilization phase following a significant v0.25.0 release, with no new releases cut today. The open PR ratio (24 open vs. 3 closed) suggests that the team is aggressively pushing new feature branches—particularly around MCP (Model Context Protocol) transport fixes, channel integrations, and security—while CI promotion pipelines are actively running. Two automated live canary failures indicate minor instability in the latest commit batch that will likely need triage before the next release.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Three PRs were merged/closed today, representing tangible forward momentum:

- **[#2951](https://github.com/nearai/ironclaw/pull/2951)** (CLOSED) — Fixed LLM tool schema shaping for the NEAR AI provider, extracting shared logic into `tool_schema.rs` and applying a `FlattenOnly` policy. This resolves tool-call compatibility issues without affecting OpenAI/Codex behavior.
- **[#2868](https://github.com/nearai/ironclaw/pull/2868)** (CLOSED) — Engine-v2 cleanup making `available_actions` callable-only for blocked providers, consolidating follow-up work from three prior PRs (#2869, #2876, #2889) under the engine-v2 epic ([#2767](https://github.com/nearai/ironclaw/issues/2767)).

Additional high-impact PRs actively advancing:
- **[#2954](https://github.com/nearai/ironclaw/pull/2954)** — Automated staging promotion batch, indicating the pipeline is vetting commit `7404e7d6` for the next release candidate.
- **[#2754](https://github.com/nearai/ironclaw/pull/2754)** (core contributor) — Self-service user secrets and durable binding approvals, a major security/UX feature touching the web UI, WASM, sandbox, and extensions.
- **[#2959](https://github.com/nearai/ironclaw/pull/2959)** (core contributor) — Dedicated `web_fetch` built-in tool with secondary-model summarization, centralizing URL fetching with SSRF protections.

## 4. Community Hot Topics
The most commented/reacted items reveal strong community focus on MCP transport reliability and channel expansion:

- **[#2923](https://github.com/nearai/ironclaw/issues/2923)** (👍 1, 2 comments) — stdio MCP activation failure. The author re-filed a previously mis-closed bug, explicitly clarifying that stdio *is* supported in v0.25.0 and the bug is isolated to the OAuth pre-flight. This sparked two competing fix PRs ([#2960](https://github.com/nearai/ironclaw/pull/2960), [#2957](https://github.com/nearai/ironclaw/pull/2957)), indicating strong community and maintainer interest in resolving this quickly.
- **[#78](https://github.com/nearai/ironclaw/issues/78)** (2 comments) — P3 messaging channels tracking issue, updated today, showing ongoing interest in iMessage, Matrix, LINE, Feishu, and Teams integrations.
- **[#2946](https://github.com/nearai/ironclaw/issues/2946)** (1 comment) — `llm_backend` overwritten on every startup, a config priority regression affecting self-hosted users.

**Underlying needs:** Users are heavily invested in (1) running local/self-hosted MCP servers via stdio without OAuth friction, and (2) multi-platform messaging channel parity—both are key to IronClaw's positioning as a universal AI agent hub.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix Available? |
|----------|-------|--------|----------------|
| 🔴 High | [**#2923**](https://github.com/nearai/ironclaw/issues/2923) — stdio MCP activation fails with OAuth discovery error | Open | ✅ Yes: [#2960](https://github.com/nearai/ironclaw/pull/2960), [#2957](https://github.com/nearai/ironclaw/pull/2957) |
| 🟠 Medium | [**#2946**](https://github.com/nearai/ironclaw/issues/2946) — `llm_backend` reset to NearAI on every restart, ignoring env vars/config | Open | ✅ Yes: [#2961](https://github.com/nearai/ironclaw/pull/2961) |
| 🟠 Medium | [**#2956**](https://github.com/nearai/ironclaw/issues/2956) — Live canary failed: `provider-matrix openai-compatible` | Open | ❌ No fix PR yet |
| 🟠 Medium | [**#2955**](https://github.com/nearai/ironclaw/issues/2955) — Live canary failed: `private-oauth` lane | Open | ❌ No fix PR yet |
| 🟡 Low | [**#2919**](https://github.com/nearai/ironclaw/pull/2919) — Log target column truncation in web UI (minor UX) | Open (PR) | ✅ PR ready |

Both canary failures ([#2955](https://github.com/nearai/ironclaw/issues/2955), [#2956](https://github.com/nearai/ironclaw/issues/2956)) trace to the same commit (`7404e7d6`) currently in staging promotion ([#2954](https://github.com/nearai/ironclaw/pull/2954)), suggesting they should be investigated before promotion completes.

## 6. Feature Requests & Roadmap Signals
- **[ACP permission surfacing](https://github.com/nearai/ironclaw/issues/2962)** — Request to expose sandboxed ACP agent `request_permission` calls as gate cards in the web UI. This aligns with the security/auditability theme seen in [#2754](https://github.com/nearai/ironclaw/pull/2754) (user secrets) and [#2684](https://github.com/nearai/ironclaw/pull/2684) (cryptographic audit log). Likely to be addressed in a near-future release given the pattern of core-team investment in this area.
- **[MCP prompts support](https://github.com/nearai/ironclaw/pull/2958)** — Full end-to-end MCP prompts integration (`/prompts` command, HTTP API, server-prompt mentions). PR is open and feature-complete; strong candidate for next version.
- **[Native Matrix channel](https://github.com/nearai/ironclaw/pull/2019)** — XL PR adding native Matrix with E2EE support, persisted threads, and full event loop. Active review suggests potential inclusion soon.
- **[Prismer Cloud IM WASM channel](https://github.com/nearai/ironclaw/pull/1120)** — Additional messaging channel with webhook+polling dual mode.
- **[Engine V2 migration CLI](https://github.com/nearai/ironclaw/pull/2728)** — `ironclaw migrate` CLI for OpenClaw and Hermes imports, signaling the team is actively preparing for user migration from competing platforms.

**Prediction for next release:** MCP fixes (#2960/#2957), LLM backend fix (#2961), MCP prompts (#2958), web_fetch tool (#2959), and potentially user secrets (#2754) are the most likely candidates for the next release.

## 7. User Feedback Summary
- **Pain point — Config reliability:** Users self-hosting with `openai_compatible` backends (vLLM, LiteLLM) are frustrated that their provider choice is silently overwritten on restart ([#2946](https://github.com/nearai/ironclaw/issues/2946)). This undermines trust in the configuration hierarchy.
- **Pain point — stdio MCP friction:** Local MCP server users expect stdio to "just work" without OAuth, and were frustrated by a previous maintainer dismissing the bug as "unsupported" ([#2923](https://github.com/nearai/ironclaw/issues/2923)). The re-file with detailed technical justification shows engaged, knowledgeable users.
- **Use case — Multi-agent security:** The request for ACP permission surfacing ([#2962](https://github.com/nearai/ironclaw/issues/2962)) reveals users are running sandboxed coding agents (Goose, Codex, Gemini CLI) through IronClaw and need human-in-the-loop approval workflows.
- **Overall sentiment:** Users are technically sophisticated (building from source, running vLLM, configuring MCP servers). Dissatisfaction is narrowly scoped to config/MCP regressions rather than architectural concerns, suggesting healthy overall satisfaction with the project's direction.

## 8. Backlog Watch
| Item | Age | Concern |
|------|-----|---------|
| [**#78** — P3 Messaging Channels](https://github.com/nearai/ironclaw/issues/78) | ~2.5 months | Tracking issue for iMessage, Matrix, LINE, Feishu, Teams. While a native Matrix PR exists ([#2019](https://github.com/nearai/ironclaw/pull/2019)), the other channels lack PRs. Maintainers should clarify prioritization. |
| [**#1446** — Aliyun Coding Plan](https://github.com/nearai/ironclaw/pull/1446) | ~1 month | XL PR from a new contributor adding a major cloud provider. Touches 20+ scopes. Needs dedicated maintainer review to avoid contributor churn. |
| [**#1470** — Routine notification normalization](https://github.com/nearai/ironclaw/pull/1470) | ~1 month | Core contributor PR touching agent, CLI, web, WASM, DB, LLM, workspace, config, and docs. Stalled—may need rebase after gateway refactor. |
| [**#1120** — Prismer Cloud IM](https://github.com/nearai/ironclaw/pull/1120) | ~1.5 months | WASM channel PR from a regular contributor with no recent maintainer feedback. |
| [**#1941** — MCP server name allowlist](https://github.com/nearai/ironclaw/pull/1941) | ~3 weeks | Security fix (XS size, low risk) preventing injection via MCP server names. Should be fast-tracked for review given the security implications. |

**Recommendation:** The backlog contains several security-relevant and contributor-at-risk PRs that would benefit from explicit maintainer triage signals to maintain project health and community engagement.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-04-26

## 1. Today's Overview
LobsterAI experienced a massive surge in backend development activity over the past 24 hours, characterized by a flurry of code commits and rapid merges. Maintainers merged 10 pull requests—largely focused on fixing critical session lifecycles, external model integrations, and proxy compatibility—indicating an active push to stabilize recent builds. Meanwhile, community activity on the issue tracker remains entirely driven by older, unresolved integration and configuration bugs, with four long-standing issues being marked as stale. Overall, the project's core development is highly active, though there is a growing disconnect between maintainer momentum and unresolved user-facing setup issues.

## 2. Releases
No new official releases were published today. However, the heavy merging activity (particularly PR [#1826](https://github.com/netease-youdao/LobsterAI/pull/1826)) culminated in a release candidate tagged `Release/2026.04.24`, suggesting an official version bump is imminent.

## 3. Project Progress
Development today was hyper-focused on the `cowork` and OpenAI-compatible API integration layers. 
*   **Cowork Session Lifecycle:** Maintainers addressed a race condition where fallback timers were prematurely completing new user runs. This was fixed via a double-revert and merged in [#1824](https://github.com/netease-youdao/LobsterAI/pull/1824) and [#1820](https://github.com/netease-youdao/LobsterAI/pull/1820).
*   **Model State Sync:** Fixed an issue where switching models mid-session resulted in the agent reporting the stale, original model ([#1825](https://github.com/netease-youdao/LobsterAI/pull/1825), [#1817](https://github.com/netease-youdao/LobsterAI/pull/1817)).
*   **DeepSeek V4 Integration:** Fixed an issue where tool calls failed if reasoning content wasn't explicitly passed, improving DeepSeek V4 thinking mode compatibility ([#1819](https://github.com/netease-youdao/LobsterAI/pull/1819)).
*   **Network & Memory:** Fixed proxy-related access issues for native OpenAI models ([#1818](https://github.com/netease-youdao/LobsterAI/pull/1818)) and improved CJK language memory search on Windows ([#1826](https://github.com/netease-youdao/LobsterAI/pull/1826)).

## 4. Community Hot Topics
There are no new community topics today; all updated issues were opened in February and have received no recent engagement. The top issues based on historical comments are:
*   **[#39](https://github.com/netease-youdao/LobsterAI/issues/39):** Feishu integration connects successfully but receives no message replies (4 comments). 
*   **[#44](https://github.com/netease-youdao/LobsterAI/issues/44):** Telegram bot cannot connect to LobsterAI despite correct token setup and global proxy (3 comments).
*   *Analysis:* The underlying need here is robust, plug-and-play third-party messaging integration. Users are struggling with network/proxy configurations required to bridge external messaging apps to the AI backend.

## 5. Bugs & Stability
Today's bugs can be split into two categories: resolved backend bugs (from PRs) and unresolved user-facing bugs (from Issues).

**Resolved (Backend/Stability):**
*   **[High Severity] Cowork Race Condition:** Timer fallbacks blindly terminating newer user sessions. Fixed in PR [#1820](https://github.com/netease-youdao/LobsterAI/pull/1820).
*   **[Medium Severity] DeepSeek V4 Tool Calling:** Forcing `reasoning_content` broke tool calls. Fixed in PR [#1819](https://github.com/netease-youdao/LobsterAI/pull/1819).

**Unresolved (User-facing):**
*   **[Medium Severity] Sandbox Environment ([#54](https://github.com/netease-youdao/LobsterAI/issues/54)):** Users cannot inject local environment variables safely into sandboxed skills, forcing them to hardcode API keys.
*   **[High Severity] Core Integrations Failing ([#39](https://github.com/netease-youdao/LobsterAI/issues/39), [#44](https://github.com/netease-youdao/LobsterAI/issues/44)):** Feishu and Telegram integrations are unresponsive for specific users, potentially due to undocumented proxy requirements. 

## 6. Feature Requests & Roadmap Signals
*   **Auto-discovery of Models ([#72](https://github.com/netease-youdao/LobsterAI/issues/72)):** Users request the UI to auto-fetch available models via Base URL and API key, rather than requiring manual input.
*   **Dynamic Sandbox Configurations ([#54](https://github.com/netease-youdao/LobsterAI/issues/54)):** A need for secure, injected `.env` support for sandboxed skills.
*   **Network/Proxy configurations:** Several proxy-related PRs were merged today ([#1818](https://github.com/netease-youdao/LobsterAI/pull/1818)), and users are actively asking for better proxy handling for local models ([#72](https://github.com/netease-youdao/LobsterAI/issues/72)). *Prediction:* The upcoming release will feature an improved proxy settings UI and deeper third-party model support.

## 7. User Feedback Summary
Users appreciate the wide array of integrations (Feishu, Telegram) and the flexibility of the sandbox, but they are encountering significant friction during initial setup. Network routing and proxy configurations are a major pain point, especially for international users trying to connect Telegram, or users trying to reach local models. The lack of automated configuration (like model fetching) makes the system feel slightly unpolished compared to competitors, though power users appreciate the control.

## 8. Backlog Watch
Maintainer attention is urgently needed on the stale integration issues. Because today's PRs included fixes for proxy support ([#1818](https://github.com/netease-youdao/LobsterAI/pull/1818)), maintainers should revisit these stalled tickets to see if the new build resolves the users' connection issues:
*   **Issue [#39](https://github.com/netease-youdao/LobsterAI/issues/39) (Feishu connectivity)** - Open since Feb 2026.
*   **Issue [#44](https://github.com/netease-youdao/LobsterAI/issues/44) (Telegram connectivity)** - Open since Feb 2026.
*   **Issue [#72](https://github.com/netease-youdao/LobsterAI/issues/72) (Model auto-fetch)** - A simple UX improvement with community upvotes (👍 1) that hasn't received maintainer feedback.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the project digest for Moltis based on the provided data for 2026-04-26.

# Moltis Project Digest: 2026-04-26

## 1. Today's Overview
The Moltis project is currently demonstrating a healthy and active development cycle, heavily focused on system hardening, sandbox security, and tooling extensibility. Over the past 24 hours, the repository saw significant maintainer activity, with 2 issues opened and 6 pull requests updated. The majority of today's engineering effort is being driven by core contributors (`Cstewart-HC` and `penso`), who are actively merging quality-of-life features and iterating on major architectural additions. While no new stable versions were cut today, the open pipeline indicates steady progress toward a future release that emphasizes user control over bundled tools and robust execution environments.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
Two pull requests were merged/closed today, advancing the project's capabilities in scheduled tasks and skill management:
*   **Skill Filtering Merged** - [PR #870](https://github.com/moltis-org/moltis/pull/870) (closed/merged) introduces configurable whitelist/blacklist pattern matching for bundled skills, giving users granular control over which default skills are active.
*   **Cron Execution Loop Fixed** - [PR #871](https://github.com/moltis-org/moltis/pull/871) (closed/merged) resolves a tight loop issue where agent `exec` calls during heartbeat turns would re-wake the cron service. A cooldown check was successfully implemented.

Additionally, several high-value features remain open and under active review, including Landlock filesystem isolation ([PR #866](https://github.com/moltis-org/moltis/pull/866)), the Obscura browser sidecar backend ([PR #869](https://github.com/moltis-org/moltis/pull/869)), and a fix prioritizing native MCP tools over mcporter ([PR #874](https://github.com/moltis-org/moltis/pull/874)).

## 4. Community Hot Topics
While today's issues and PRs did not generate massive comment threads, two distinct areas of community interest are apparent:
*   **MCP Compatibility & Routing:** [PR #874](https://github.com/moltis-org/moltis/pull/874) and [Issue #873](https://github.com/moltis-org/moltis/issues/873) highlight a current friction point regarding Model Context Protocol (MCP) servers, specifically involving the `mcporter` compatibility layer. The community and maintainers are actively trying to simplify how Moltis interfaces with native MCP tools.
*   **Sandboxing and Security:** [PR #866](https://github.com/moltis-org/moltis/pull/866) (Landlock FS isolation) represents a significant architectural upgrade for secure agent execution, addressing underlying user needs for safe, restricted host environments.

## 5. Bugs & Stability
Two bugs were reported today, both currently open:
*   **Medium - Web UI Configuration Bug:** [Issue #875](https://github.com/moltis-org/moltis/issues/875) reports that users cannot disable bundled skills via the Web interface. Given that [PR #870](https://github.com/moltis-org/moltis/pull/870) just added the underlying whitelist/blacklist filtering logic for skills, a fix to properly connect the Web UI to these new config options should be straightforward.
*   **Medium - Model/MCP Integration Bug:** [Issue #873](https://github.com/moltis-org/moltis/issues/873) reports failures when attempting to use `mcp-servers` with the `Qwen3.6-35B-A3B` model. This seems related to model behavior and tool-calling formatting, and may tie into the routing fixes proposed in [PR #874](https://github.com/moltis-org/moltis/pull/874).

## 6. Feature Requests & Roadmap Signals
By analyzing the current open PRs, we can predict the following key themes for the next Moltis release:
*   **Alternative Browser Backends:** [PR #869](https://github.com/moltis-org/moltis/pull/869) adds "Obscura" as a lightweight sidecar browser, signaling a move toward pluggable, dependency-light browser automation.
*   **Advanced Memory/Context Management:** [PR #826](https://github.com/moltis-org/moltis/pull/826) wires a `summary_model` config to the auxiliary provider for context compaction, indicating that optimizing long-term memory and reducing token usage is a major roadmap priority.
*   **Kernel-Level Security:** [PR #866](https://github.com/moltis-org/moltis/pull/866) shows a strong commitment to enterprise-grade security by utilizing Linux's Landlock LSM for file system sandboxing.

## 7. User Feedback Summary
Real user pain points currently center around **control** and **model compatibility**. The inability to toggle skills via the Web UI ([Issue #875](https://github.com/moltis-org/moltis/issues/875)) shows frustration with UI limitations, while MCP connection issues with specific models like Qwen ([Issue #873](https://github.com/moltis-org/moltis/issues/873)) highlight the growing pains of integrating diverse AI models with external tool servers. Overall, users appear to be pushing Moltis into complex, multi-tool automation scenarios, necessitating these robust configuration and filtering tools.

## 8. Backlog Watch
*   **Auxiliary Provider Compaction:** [PR #826](https://github.com/moltis-org/moltis/pull/826) has been open since 2026-04-22. It addresses a specific fork issue and requires maintainer review to merge this crucial context-window compaction feature.
*   **Unaddressed Bug Reports:** Both [Issue #875](https://github.com/moltis-org/moltis/issues/875) and [Issue #873](https://github.com/moltis-org/moltis/issues/873) currently have 0 maintainer comments. As they directly impact usability (UI configuration and model tool-calling), they require triage to prevent user frustration.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest - 2026-04-26

## 1. Today's Overview
The CoPaw (QwenPaw) project experienced high user engagement over the past 24 hours, driven primarily by the release of version `v1.1.4.post2`. Activity metrics indicate a heavily utilized project with 14 active issues and 11 pull requests updated within the window. While the maintainers are actively merging bug fixes, the community has reported multiple critical regressions in the `v1.1.4` release line, specifically concerning configuration persistence and UI rendering. The project's open-source contributors are also highly active, submitting significant architectural PRs ranging from semantic skill routing to a transition to Tauri 2.x for desktop applications.

## 2. Releases
- **v1.1.4.post2**
  - **Changes:** This patch release includes a targeted fix for the channel approval mechanism that was not functioning correctly ([PR #3832](https://github.com/agentscope-ai/QwenPaw/pull/3832)), followed by a version bump ([PR #3833](https://github.com/agentscope-ai/QwenPaw/pull/3833)).
  - **Full Changelog:** https://github.com/agentscope-ai/Qwe

## 3. Project Progress
Three pull requests were successfully merged/closed today, advancing the project's stability and UI/UX capabilities:
- **Fixes:** The primary focus was resolving the broken approval workflow in channels ([PR #3832](https://github.com/agentscope-ai/QwenPaw/pull/3832)).
- **UI/UX Enhancements:** The feature to persist UI language settings server-side rather than in browser local storage ([PR #2338](https://github.com/agentscope-ai/QwenPaw/pull/2338)) was merged, which will greatly improve multi-device user experiences.
- **Under Development:** Notable open PRs making progress include an interactive remote model list to replace "Auto Discover" ([PR #3819](https://github.com/agentscope-ai/QwenPaw/pull/3819)), asynchronous LLM-generated chat session titles ([PR #3829](https://github.com/agentscope-ai/QwenPaw/pull/3829)), and adding vector model connection testing ([PR #3831](https://github.com/agentscope-ai/QwenPaw/pull/3831)).

## 4. Community Hot Topics
The most discussed issues revolve around recent updates breaking core workflows:
- **Configuration Loss on Refresh/Restart:** Issue [#3824](https://github.com/agentscope-ai/QwenPaw/issues/3824) (4 comments) highlights a severe bug where agent language, plan mode, and memory configurations vanish upon toggling or refreshing. Similarly, Issue [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) (3 comments) notes that long-term memory vector model settings reset to empty strings after a Docker container restart due to initialization overrides.
- **Windows UI Rendering Failure:** Issue [#3826](https://github.com/agentscope-ai/QwenPaw/issues/3826) (3 comments) reports that version 1.1.4 fails to render content on Windows 10/2012, showing only outer frames. Users are forced to downgrade to 1.1.2.
- **Backup Mechanism Failures:** Users are highly frustrated by non-functional backups. Issue [#3821](https://github.com/agentscope-ai/QwenPaw/issues/3821) (3 comments) states that backups get stuck and never complete successfully.

## 5. Bugs & Stability
Stability has taken a hit in the `v1.1.4` release line, with several high-severity bugs reported:
1. **Critical - State Persistence Failure:** Configurations for agents and embeddings are dropping due to sync issues between `config.json` and `agent.json` ([Issue #3828](https://github.com/agentscope-ai/QwenPaw/issues/3828)). *No fix PR is currently linked to this core issue.*
2. **Critical - Windows Console/UI Blank:** The desktop app/Windows version is failing to render ([Issue #3826](https://github.com/agentscope-ai/QwenPaw/issues/3826)). 
3. **High - MCP Client Hanging:** MCP integration is causing infinite hanging during chats, completely blocking agent responses ([Issue #3822](https://github.com/agentscope-ai/QwenPaw/issues/3822)).
4. **High - Execution Errors:** Complex agent actions trigger `422 MODEL_EXECUTION_FAILED` errors ([Issue #3795](https://github.com/agentscope-ai/QwenPaw/issues/3795)).
5. **Medium - Missing Network Connectivity in Browser Use:** The `browser_use` tool is throwing `net::ERR_INTERNET_DISCONNECTED` errors ([Issue #3836](https://github.com/agentscope-ai/QwenPaw/issues/3836)).
6. **Medium - UI Limitations:** Users cannot rename or delete custom ACP agents in the WebUI ([Issue #3835](https://github.com/agentscope-ai/QwenPaw/issues/3835)).

## 6. Feature Requests & Roadmap Signals
Community requests provide clear signals for the next development cycle:
- **Automation & APIs:** Users are requesting APIs or CLI tools for automated, scheduled backups ([Issue #3823](https://github.com/agentscope-ai/QwenPaw/issues/3823)).
- **Robustness in Background Tasks:** A proposal to add a retry mechanism to the `_dream_callback` cron job for memory optimization ([Issue #3820](https://github.com/agentscope-ai/QwenPaw/issues/3820)).
- **Context Passing:** A feature request to inject per-message context into shell tool subprocess environments to allow scripts to utilize Matrix/room context ([Issue #3825](https://github.com/agentscope-ai/QwenPaw/issues/3825)).
- **Predicted Next Version Focus:** Given the influx of bugs, the `v1.1.4.post3` or `v1.1.5` release will likely focus heavily on config persistence patches, fixing the Windows blank UI, and addressing the MCP lifecycle timeout issues.

## 7. User Feedback Summary
Users operating Docker environments and Windows desktops are expressing significant frustration regarding configuration persistence and UI regressions. The forced downgrade to `v1.1.2` indicates that `v1.1.4` introduced systemic regressions in state management. Furthermore, users deploying advanced features (like custom MCP servers, ACP agents, or complex browser automation) are hitting blocking walls. However, the user base is highly engaged, providing detailed root cause analyses (e.g., the initialization overwrite in [#3817](https://github.com/agentscope-ai/QwenPaw/issues/3817) and config desync in [#3828](https://github.com/agentscope-ai/QwenPaw/issues/3828)), which reflects a technically proficient and invested community.

## 8. Backlog Watch
Several major pull requests requiring maintainer attention have been active for an extended period:
- **[PR #3117](https://github.com/agentscope-ai/QwenPaw/pull/3117) (Open since April 8):** Introduces semantic skill routing using embedding retrieval to reduce token consumption. This is a massive architectural enhancement that needs a final review.
- **[PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) (Open since April 24):** Proposes migrating the desktop application to Tauri 2.x. Given the severe Windows rendering bugs in the current version, this PR should be prioritized for review.
- **[PR #3559](https://github.com/agentscope-ai/QwenPaw/pull/3559) (Open since April 18):** Establishes Vitest for frontend unit/component tests. Merging this is crucial to prevent the UI regressions currently plaguing the project.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-04-26

## 1. Today's Overview
ZeptoClaw experienced low-to-moderate activity today, with zero new issues opened but four pull requests seeing updates (one newly opened, three closed/merged). The focus remains squarely on CI/CD hardening and dependency maintenance rather than feature development. No new releases were cut, suggesting the project is in a stabilization and tooling-improvement phase. Overall project health appears steady: dependency bumps are being handled proactively, and CI coverage is being expanded to prevent silent build drift across optional integration features.

## 2. Releases
No new releases were published today.

## 3. Project Progress

Three pull requests were closed/merged today, all focused on infrastructure and dependency hygiene:

- **PR #547** — `chore(deps): bump sha2 0.10 → 0.11` ([qhkm/zeptoclaw #547](https://github.com/qhkm/zeptoclaw/pull/547)): Maintainer `qhkm` manually upgraded the `sha2` crate. The upstream `digest` v0.11 migration changed `finalize()` output from `GenericArray` (which implemented `LowerHex`) to `hybrid-array::Array` (which does not). Three call sites using `format!("{:x}", hasher.finalize())` broke and were fixed with an alternative approach. This superseded the automated Dependabot PR #517.

- **PR #544** — `[codex] expand CI coverage for optional integration features` ([qhkm/zeptoclaw #544](https://github.com/qhkm/zeptoclaw/pull/544)): Contributor `manelsen` expanded the CI feature-matrix to compile-check `channel-email`, `google`, `provider-vertex`, and `whatsapp-web` optional paths, along with small compatibility fixes. This was closed in favor of PR #548.

- **PR #517** — `chore(deps): bump sha2 from 0.10.9 to 0.11.0` ([qhkm/zeptoclaw #517](https://github.com/qhkm/zeptoclaw/pull/517)): Dependabot's automated bump was closed, having been superseded by the manual PR #547 which included the necessary code fixes.

One PR remains open:
- **PR #548** — `chore(ci): expand CI matrix for optional integration features` ([qhkm/zeptoclaw #548](https://github.com/qhkm/zeptoclaw/pull/548)): A cherry-pick of #544 under a maintainer-owned branch (resolving an OAuth `workflow` scope issue via SSH push). Expands CI to cover `memory-embedding`, `screensho...` (truncated), ensuring optional integration paths don't silently drift behind the default build.

**Progress signal**: CI is being hardened to cover more optional feature combinations, and dependency upgrades are being handled with care (manual fixes alongside automated bumps).

## 4. Community Hot Topics
No issues or PRs received comments or reactions today. All four updated PRs have zero comments and zero 👍 reactions. 

The most notable community activity is contributor `manelsen`'s CI expansion work (PR #544 → #548), which reveals an underlying need: **optional integration features have been drifting out of compatibility with the default build silently**. The project clearly supports multiple integration paths (email, Google, Vertex AI, WhatsApp, memory embeddings) and ensuring these remain compilable is a priority.

## 5. Bugs & Stability

| Severity | Issue | Status | Details |
|----------|-------|--------|---------|
| **Medium** | `sha2` 0.11 breaking change — 3 call sites broken | **Fixed** in [PR #547](https://github.com/qhkm/zeptoclaw/pull/547) | `finalize()` output type changed; `LowerHex` format strings broke. Proactively caught and fixed during dependency bump. |
| **Medium** | Optional feature compilation drift | **In progress** via [PR #548](https://github.com/qhkm/zeptoclaw/pull/548) | Features like `channel-email`, `google`, `provider-vertex`, `whatsapp-web` were not being compile-checked in CI. Small compatibility fixes bundled. |

No user-reported bugs, crashes, or regressions were filed today. No new issues were opened at all.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, roadmap signals can be inferred from CI expansion work:

- **Expanded integration surface**: The CI matrix expansion covering `channel-email`, `google`, `provider-vertex`, `whatsapp-web`, and `memory-embedding` signals these are actively maintained (or soon-to-be-promoted) integration paths. Expect potential feature work or announcements around these capabilities.
- **Dependency modernization**: The `sha2` → `digest` v0.11 migration suggests the project is keeping its Rust dependency tree current, which is a prerequisite for any future feature releases.

No prediction for a next version can be made from today's data alone.

## 7. User Feedback Summary
No user feedback, pain points, or use-case discussions were recorded today. Zero issues were opened, and no PRs received comments. The day was entirely maintainer and contributor-driven infrastructure work.

## 8. Backlog Watch

| Item | Status | Concern |
|------|--------|---------|
| [PR #548](https://github.com/qhkm/zeptoclaw/pull/548) — CI matrix expansion | **Open** (1 day) | Only open PR. Should be reviewed and merged promptly to prevent further optional-feature drift. Relatively low risk since it's CI-only with small compat fixes. |

No long-unanswered issues or stale PRs were surfaced in today's data. The backlog appears healthy with no items requiring urgent maintainer attention beyond the open PR #548.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-26

## 1. Today's Overview
ZeroClaw experienced a high-activity day with 50 issues and 41 pull requests updated, indicating a highly engaged open-source community and active development cycle. Although no new releases were shipped today, the team is aggressively pushing toward the **v0.7.4 milestone** while managing a significant volume of provider-specific bugs (particularly with DeepSeek-V4 and Ollama). The open issues significantly outweigh closed ones (37 open vs. 13 closed), and with 29 open PRs, the maintainers are currently in a heavy review and integration phase. The overall project health remains strong, driven by rapid community bug reporting and swift submission of fixes.

## 2. Releases
No new releases were published today. The project is currently preparing for the **v0.7.4 release**, which is being actively tracked via [Issue #5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877).

## 3. Project Progress
While only 12 PRs were merged/closed today, several critical architectural and bug-fix PRs were submitted and advanced, setting the stage for the next release:
*   **Core Agent & Loop Fixes:** [PR #6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107) fixed an agent loop crash when handling DeepSeek-V4's reasoning content during tool calls. [PR #6093](https://github.com/zeroclaw-labs/zeroclaw/pull/6093) resolved an issue where models produced redundant narration text before tool calls.
*   **Infrastructure Improvements:** [PR #5900](https://github.com/zeroclaw-labs/zeroclaw/pull/5900) optimized session resets from O(n²) to O(1). [PR #6106](https://github.com/zeroclaw-labs/zeroclaw/pull/6106) added an essential SQLite FTS UPDATE trigger to prevent search index staleness. 
*   **Technical Debt Removal:** [PR #6098](https://github.com/zeroclaw-labs/zeroclaw/pull/6098) deleted a 566-line dead duplicate file in the runtime crate.
*   **UI & Docs:** [PR #6083](https://github.com/zeroclaw-labs/zeroclaw/pull/6083) introduced chat deletion and "Clear All" functionalities to the Web UI. [PR #6110](https://github.com/zeroclaw-labs/zeroclaw/pull/6110) fixed broken CI and version badges in the README.

## 4. Community Hot Topics
*   **Web Dashboard / Tauri Availability:** The most commented issue of the day is [Issue #4866 (24 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/4866), where users are frustrated by persistent "Web dashboard not available" errors across both Web UI and Tauri desktop apps. This highlights a recurring friction point in the basic setup and installation process.
*   **Multi-tenant Security (RBAC):** A highly engaging discussion is taking place in [Issue #5982 (7 comments)](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) regarding the introduction of per-sender Role-Based Access Control. This signals strong enterprise/advanced user demand for multi-user workspace isolation.
*   **Config & Documentation Pain Points:** [Issue #5847 (7 comments, 👍 1)](https://github.com/zeroclaw-labs/zeroclaw/issues/5847) questions the lack of documentation for web dashboard environment variables, reinforcing that ZeroClaw's configuration curve remains steep for new users.

## 5. Bugs & Stability
Provider integration and tooling proved to be the weakest points today, though fix PRs are already mounting:
*   **S1 - DeepSeek-V4 API Incompatibility:** [Issue #6059 (👍 1)](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) reports broken workflows due to DeepSeek-V4's thinking mode API changes. *Fix:* Addressed by [PR #6107](https://github.com/zeroclaw-labs/zeroclaw/pull/6107).
*   **S1 - Ollama Tool Calling:** Two major issues, [Issue #5459 (👍 4)](https://github.com/zeroclaw-labs/zeroclaw/issues/5459) and [Issue #5962](https://github.com/zeroclaw-labs/zeroclaw/issues/5962), report that Ollama hard-codes `tool_count=0` and breaks sessions when tools are invoked. 
*   **S1 - ACP Server Schema Error:** [Issue #6100](https://github.com/zeroclaw-labs/zeroclaw/issues/6100) notes a blocked workflow for external clients connecting to ZeroClaw. *Fix:* Addressed by [PR #6035](https://github.com/zeroclaw-labs/zeroclaw/pull/6035).
*   **S1 - Telegram/Channel Tool Denial:** [Issue #2324](https://github.com/zeroclaw-labs/zeroclaw/issues/2324) highlights that tools set to `always_ask` are silently denied in Telegram instead of prompting the user.
*   **S2 - Broken Install Script & Local Images:** [Issue #6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096) notes that `install.sh` fails to extract web assets, and [Issue #6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097) reports the API cannot read local images generated by skills.

## 6. Feature Requests & Roadmap Signals
*   **Schema v3 Migration:** [Issue #5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) indicates a coordinated, breaking batch migration is currently in progress. 
*   **Multi-Agent Architecture:** The RFC for Multi-agent UX flow ([Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) and [Issue #5891](https://github.com/zeroclaw-labs/zeroclaw/issues/5891)) is in the active discussion period. This, alongside the RBAC requests, strongly signals ZeroClaw's trajectory toward enterprise-grade, multi-agent environments.
*   **Config Usability:** Users requested an improved free/paid model selection UI ([Issue #6070](https://github.com/zeroclaw-labs/zeroclaw/issues/6070)), Discord channel restrictions ([Issue #6075](https://github.com/zeroclaw-labs/zeroclaw/issues/6075)), and better XCode integration ([Issue #6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065)). Given the active docs/config PRs (like [PR #5788](https://github.com/zeroclaw-labs/zeroclaw/pull/5788) and [PR #5960](https://github.com/zeroclaw-labs/zeroclaw/pull/5960)), v0.7.4 will likely feature a massive QoL (Quality of Life) upgrade for configuration.

## 7. User Feedback Summary
Users are enthusiastic about the project's expanding capabilities but express distinct frustration regarding onboarding and provider fragmentation. The steep learning curve is evident in repeated pleas for better documentation of config variables and self-test checks for paths ([Issue #6079](https://github.com/zeroclaw-labs/zeroclaw/issues/6079)). Furthermore, users operating local hardware (like Raspberry Pis) are adopting ZeroClaw for specific chat integrations but are hitting walls with channel configurations and local model providers (Ollama). User satisfaction is high when the system works, but initial setup and LLM provider routing remain major pain points.

## 8. Backlog Watch
Maintainers should prioritize reviewing the following critical items to unblock users:
*   **Web UI Stability:** The longstanding setup issues with the Web Dashboard ([Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)) and the install script ([Issue #6096](https://github.com/zeroclaw-labs/zeroclaw/issues/6096)) urgently need resolution.
*   **Feature: `rag-pdf` misconfiguration:** [Issue #6066](https://github.com/zeroclaw-labs/zeroclaw/issues/6066) reveals that a workspace-level feature flag silently disables PDF extraction in the main runtime.
*   **Ollama Provider Fixes:** The Ollama provider requires immediate attention due to hard-coded `tool_count=0` effectively breaking local tool-use agentic flows ([Issue #5459](https://github.com/zeroclaw-labs/zeroclaw/issues/5459)).
*   **WhatsApp Web Channel:** [Issue #4846 (👍 1)](https://github.com/zeroclaw-labs/zeroclaw/issues/4846) remains open and status "in-progress", but users are still experiencing broken backend feature flags.

</details>