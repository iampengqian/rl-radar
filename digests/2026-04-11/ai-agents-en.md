# OpenClaw Ecosystem Digest 2026-04-11

> Issues: 500 | PRs: 500 | Projects covered: 11 | Generated: 2026-04-10 22:07 UTC

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

# OpenClaw Project Digest — 2026-04-11

## 1. Today's Overview
OpenClaw experienced an exceptionally high volume of activity today, with 500 issues and 500 pull requests updated within the last 24 hours. The project remains in a highly active development and debugging phase, marked by a massive ongoing "GPT-5.4 / Codex Agentic Runtime Parity Program" aimed at bringing OpenAI's latest models to full functional parity. While the open issue backlog remains large (395 active), maintainers and contributors are aggressively closing bugs and merging architectural improvements, as evidenced by the 105 closed issues and 189 merged/closed PRs. No new stable releases were cut today, suggesting the team is currently stabilizing the codebase for a major milestone release.

## 2. Releases
No new releases were published today. The project appears to be in a pre-release stabilization and feature integration phase.

## 3. Project Progress
A staggering 189 pull requests were merged or closed today, indicating aggressive integration. Key advancements include:

*   **GPT-5.4 / Codex Parity Program (Core Focus):** Maintainers opened a massive cluster of interconnected PRs ([#64504](https://github.com/openclaw/openclaw/pull/64504), [#64439](https://github.com/openclaw/openclaw/pull/64439), [#64300](https://github.com/openclaw/openclaw/pull/64300), [#64264](https://github.com/openclaw/openclaw/pull/64264), [#64263](https://github.com/openclaw/openclaw/pull/64263)) to implement model-aware agent bootstrapping, strict-agentic execution contracts, and better tool compatibility for OpenAI models.
*   **UI & Memory Upgrades:** Significant work landed on the Control UI, including normalized assistant directive rendering ([#64104](https://github.com/openclaw/openclaw/pull/64104)) and enhanced memory-wiki "Dreaming" observability surfaces ([#64505](https://github.com/openclaw/openclaw/pull/64505)).
*   **Channel Expansion:** MS Teams saw major progression with new group management actions ([#57530](https://github.com/openclaw/openclaw/pull/57530)), and a new Matrix live transport QA lane was added ([#64489](https://github.com/openclaw/openclaw/pull/64489)). 
*   **Infrastructure & Tooling:** Fix PRs for subagent spawn model persistence ([#64508](https://github.com/openclaw/openclaw/pull/64508)) and CLI false restarts ([#64511](https://github.com/openclaw/openclaw/pull/64511)) were successfully closed.

## 4. Community Hot Topics
The most actively discussed items revolve around cutting-edge model support and fundamental messaging reliability:

*   **Agent Identity & Trust:** RFC issue [#49971](https://github.com/openclaw/openclaw/issues/49971) (79 comments) proposes native Agent Identity & Trust Verification using W3C DID/VC standards, indicating strong community demand for secure multi-agent ecosystems.
*   **WhatsApp Linking & Media Bugs:** Users are highly frustrated by silent media failures and linking bugs. Issue [#4686](https://github.com/openclaw/openclaw/issues/4686) (21 comments, 20 👍) highlights a severe "logging in" deadlock, while newly reported regressions like [#61726](https://github.com/openclaw/openclaw/issues/61726) show outbound media silently dropping.
*   **Real-time Voice Support:** Feature request [#7200](https://github.com/openclaw/openclaw/issues/7200) (17 comments, 18 👍) is heavily active, with users pushing for native bidirectional streaming audio via Twilio/WebRTC for phone-like interactions.
*   **Codex Tool Execution:** Regression [#53959](https://github.com/openclaw/openclaw/issues/53959) (16 comments) reports that `gpt-5.3-codex` silently refuses to execute tools after recent updates, a critical blocker for users relying on the newest OpenAI models.

## 5. Bugs & Stability
Stability issues today heavily feature regressions from recent updates and silent failure states in messaging channels.

*   **Critical / System Crashes:**
    *   **Completion Cache Crash ([#63510](https://github.com/openclaw/openclaw/issues/63510), 9 👍):** Updating to `2026.4.9` breaks `openclaw completion --write-state` due to a missing QA scenario pack file. 
    *   **LosslessClaw Compaction Failure ([#60390](https://github.com/openclaw/openclaw/issues/60390)):** Shared plugin auth handling breaks summarizer requests across multiple providers.
*   **High / Channel Deadlocks & Silent Failures:**
    *   **Telegram Silent Deadlock ([#27984](https://github.com/openclaw/openclaw/issues/27984)):** Files between 5-20MB lock the entire Telegram chat permanently with no timeout.
    *   **Matrix Sync failure ([#61773](https://github.com/openclaw/openclaw/issues/61773)):** Matrix channel syncs successfully (HTTP 200) but processes no incoming messages.
*   **Medium / Provider & Config Regressions:**
    *   **Missing Model Runtime ([#37623](https://github.com/openclaw/openclaw/issues/37623)):** `gpt-5.4` can be configured but fails at runtime with `Unknown model`. (Addressed by today's PR [#64439](https://github.com/openclaw/openclaw/pull/64439)).
    *   **Fallback chain failures ([#35119](https://github.com/openclaw/openclaw/issues/35119)):** HTTP 500 errors from Codex do not trigger the model fallback chain.

## 6. Feature Requests & Roadmap Signals
Recent community requests strongly signal a desire for **multimodal interaction, hardware flexibility, and data security**:

*   **Data Masking/Security ([#64046](https://github.com/openclaw/openclaw/issues/64046)):** A highly requested feature to mask sensitive data (API keys, tokens) in logs, config files, and the Web UI.
*   **Agentic Orchestration ([#64392](https://github.com/openclaw/openclaw/pull/64392)):** A massive new feature-flagged PR aiming to coordinate multiple AI coding tools as a unified team.
*   **Mainframe/Enterprise Support ([#64477](https://github.com/openclaw/openclaw/pull/64477)):** Community PR adds an installation guide for IBM Z / s390x (LinuxONE), highlighting non-standard enterprise adoption.
*   **Prediction:** The immediate next versions will almost certainly finalize the GPT-5.4 parity program, patch the Telegram 5-20MB upload deadlock, and release the new UI rendering updates.

## 7. User Feedback Summary
Users are excited about the rapid addition of bleeding-edge models and multi-agent capabilities, but frustration is mounting regarding **silent failures** in core I/O operations. Specifically, users are expressing dissatisfaction with how often the system claims an action (like sending a WhatsApp image or executing a tool) succeeded, only for the action to have been silently dropped. macOS users continue to struggle with foundational issues like Full Disk Access (FDA) propagation ([#5116](https://github.com/openclaw/openclaw/issues/5116)) and Gatekeeper blocks ([#19641](https://github.com/openclaw/openclaw/issues/19641)). Additionally, international users (particularly Chinese speakers) are highly active, requesting better support for local models like MiniMax and Ollama cloud instances.

## 8. Backlog Watch
Several impactful issues are aging without definitive fixes, requiring maintainer attention:

*   **[#12590](https://github.com/openclaw/openclaw/issues/12590) `memoryFlush` unreliability:** Open since Feb 2026, the auto-compaction cycle is fundamentally broken, skipping flushes every other run.
*   **[#33086](https://github.com/openclaw/openclaw/issues/33086) SSRF vs. Proxies:** Open since early March, users behind popular VPNs/Proxies (like Clash Verge TUN) are blocked from fetching Discord media. Fix PR [#55176](https://github.com/openclaw/openclaw/pull/55176) is open but awaiting review.
*   **[#25007](https://github.com/openclaw/openclaw/issues/25007) Single Point of Failure:** Open since Feb, the community is concerned that a single malformed key in `openclaw.json` can crash the entire gateway and all attached channels.
*   **[#60994](https://github.com/openclaw/openclaw/issues/60994) Remote Ollama/LM Studio LAN failure:** Users cannot reliably connect OpenClaw to local AI servers via LAN IP, despite standard networking tools working perfectly.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from April 11, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is in a phase of aggressive, hyper-active iteration, transitioning from basic chat interfaces to complex, multi-modal, and multi-agent orchestration platforms. Projects are heavily focused on expanding channel integrations (like enterprise IMs and WhatsApp), supporting bleeding-edge LLMs (e.g., GPT-5.4, Qwen3), and solving deep infrastructure challenges around containerized deployments and context window management. While reference implementations like OpenClaw push the boundaries of tool execution parity and scale, newer competitors are capturing niche markets by prioritizing local hardware support (Windows/NAS), lightweight architectures, and frictionless self-hosting. 

## 2. Activity Comparison
*Health Score Logic: High (Aggressive iteration, rapid response to bugs), Medium (Stable/Active, routine maintenance), Low (Dormant/Stale).*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 active | 500 updated (189 merged) | Pre-release stabilization | 🟢 High |
| **CoPaw** | 35 active | 50 updated (36 merged) | Iterating on v1.0.2 | 🟢 High |
| **IronClaw** | 39 active | 50 updated | No release (QA/Bug Bash) | 🟢 High |
| **Moltis** | 8 active | 20 updated (13 merged) | Released `20260410.01` | 🟢 High |
| **LobsterAI** | 8 active | 20 updated (11 merged) | No release (Imminent RC) | 🟢 High |
| **NanoClaw** | 6 active | 18 updated (7 merged) | No release (Consolidating) | 🟢 High |
| **PicoClaw** | 14 active | 29 updated (17 merged) | Nightly `v0.2.6` | 🟢 High |
| **NanoBot** | 29 active | 52 updated (18 merged) | Stabilizing v0.1.5 | 🟡 Medium |
| **TinyClaw** | 0 active | 0 updated | Stable/Quiet | 🟡 Medium |
| **ZeptoClaw** | 0 active | 0 updated | Dormant | 🔴 Low |
| **EasyClaw** | 0 active | 0 updated | Dormant | 🔴 Low |

## 3. OpenClaw's Position
**Advantages:** OpenClaw remains the undisputed core reference implementation with massive scale (10x the issue/PR volume of its nearest competitors). Its "GPT-5.4 / Codex Agentic Runtime Parity Program" demonstrates a unique focus on strict execution contracts and enterprise-grade multi-agent identity/trust frameworks (W3C DID/VC). 
**Disadvantages/Technical Approach:** Its massive scale has led to systemic fragility. While other projects prioritize OS-level stability, OpenClaw is battling severe "silent failure" states in core I/O (e.g., WhatsApp media dropping, Telegram deadlocks) and gateway crashes from single malformed config keys. 
**Community Size Comparison:** OpenClaw commands the largest and most international user base, driving massive feature requests. However, users are explicitly comparing it to NanoBot and PicoClaw, citing that these smaller projects offer better native Windows support, faster response speeds, and fewer critical crashes.

## 4. Shared Technical Focus Areas
Several core requirements are independently emerging across the ecosystem:
*   **Docker Isolation & Local Deployment:** Users are hitting walls with sandboxed filesystems. **NanoClaw** is building native host-mode runners to bypass Docker, while **OpenClaw** users struggle to connect to local Ollama/LM Studio instances via LAN due to network isolation.
*   **IM Channel Stability (WeChat/Feishu/Telegram):** Enterprise messaging integrations are notoriously brittle. **CoPaw**, **PicoClaw**, **NanoBot**, and **OpenClaw** all reported high-severity bugs today involving deadlocks, silent media drops, or module failures in Feishu/WeChat/Telegram integrations.
*   **Context & Memory Management:** As context windows grow, managing them is critical. **Moltis** (auto-compact budget discipline), **NanoBot** (embedding-based context compression), and **OpenClaw** (LosslessClaw compaction) are all actively trying to prevent history overflows and token waste.
*   **Security & Credential Injection:** Safely passing API keys into containers is a universal pain point. **NanoClaw** merged multiple PRs for OAuth token refreshing and Tailscale passthrough, while **NanoBot** fixed an `exec` tool vulnerability leaking parent process env vars.

## 5. Differentiation Analysis
*   **Target Environments (Cloud vs. Homelab):** **OpenClaw**, **IronClaw**, and **CoPaw** are heavily focused on enterprise web-scale deployments (multiple channels, container orchestration, web UIs). Conversely, **NanoClaw**, **PicoClaw**, and **NanoBot** cater heavily to the "homelab" and local self-hosting crowd (focusing on Unraid, Home Assistant, Windows native, and consumer NAS devices).
*   **Architecture (Monolithic Gateway vs. Modular UI):** **LobsterAI** differentiates by bundling OpenClaw's engine into a user-friendly, cross-platform Electron desktop app, prioritizing UI (onboarding tours, model selectors) over raw gateway features. 
*   **Execution Engines:** While **OpenClaw** relies on monolithic gateway updates, **IronClaw** is pushing an aggressive "Engine v2" featuring per-project Docker sandboxing, moving toward isolated micro-agent environments.

## 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iteration & Scaling (OpenClaw, CoPaw, IronClaw, Moltis, LobsterAI):** These projects are merging PRs at breakneck speed. They are pushing complex features (multi-agent teams, Engine v2) but are actively fighting regressions and scale-induced bugs.
*   **Tier 2: Niche Growth & Stabilization (NanoClaw, PicoClaw, NanoBot):** High community engagement but focused on refining core architecture. They are establishing strong footholds by solving specific pain points (e.g., Windows support, homelab integration) that larger projects overlook.
*   **Tier 3: Dormant/Stale (TinyClaw, ZeptoClaw, EasyClaw):** Low to zero activity, representing either abandoned projects or highly stable utilities requiring no further iteration.

## 7. Trend Signals
*   **Silent Failures are the New Enemy:** Across the board, projects are dealing with LLMs and tools that falsely report success (e.g., IronClaw's tool hallucinations, OpenClaw's dropped media). The industry needs better execution observability and strict tool-verification loops.
*   **Homelab / Edge AI is Booming:** The rise of integrations around Ollama, LM Studio, Tailscale, and NAS devices indicates a strong market demand for private, locally hosted AI agents that can securely interact with smart homes and personal networks without relying on cloud gateways.
*   **Multi-Agent Orchestration is Moving to Production:** Discussions are shifting from single-agent prompt engineering to "Agent Teams" (CoPaw) and inter-agent communication protocols (IronClaw). Developers should anticipate a near-term need for frameworks capable of delegating tasks across specialized, autonomous child agents.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-11

## 1. Today's Overview
NanoBot is experiencing high community engagement, with 29 issues and 52 pull requests (PRs) updated in the past 24 hours. The project is currently in an active development and stabilization phase following a recent `0.1.5` release. Activity is heavily focused on expanding channel integrations (like NapCat QQ and WebSocket), fixing bugs introduced in the latest version, and proposing architectural improvements for context handling and tool execution. The high ratio of open PRs (34 open vs. 18 closed) indicates a rapid iteration cycle where community contributions are actively being submitted and reviewed.

## 2. Releases
No new releases were published today. The project is currently stabilizing on version `0.1.5`.

## 3. Project Progress
Today saw 18 merged or closed PRs, bringing significant security enhancements, feature additions, and bug fixes to the codebase:
*   **Security Fix:** PR [#2831](https://github.com/HKUDS/nanobot/pull/2831) was merged to prevent the `exec` tool from leaking parent process environment variables (API keys, tokens) to the LLM.
*   **Channel Expansions:** WebSocket server channel and tests were added via [PR #2946](https://github.com/HKUDS/nanobot/pull/2946) (supporting the WebUI initiative), and the initial setup for the WebUI was merged in [PR #2911](https://github.com/HKUDS/nanobot/pull/2911).
*   **Mid-turn Message Injection:** [PR #2985](https://github.com/HKUDS/nanobot/pull/2985) was merged, allowing users to send messages during an active agent turn, interrupting the LLM context for responsive follow-ups.
*   **Custom Provider Support:** [PR #3022](https://github.com/HKUDS/nanobot/pull/3022) was closed (superseded by [PR #3023](https://github.com/HKUDS/nanobot/pull/3023)), advancing the ability to use arbitrary provider names in the config.

## 4. Community Hot Topics
*   **WebUI Discussion ([Issue #2949](https://github.com/HKUDS/nanobot/issues/2949), 9 comments, 6 👍):** The most engaging topic is whether NanoBot should have its own full-featured WebUI, moving beyond its CLI and chat-channel roots. This aligns with the merged WebSocket PRs today.
*   **Automatic Skill Generation ([Issue #2927](https://github.com/HKUDS/nanobot/issues/2927), 6 comments):** Users are discussing moving the agent from a passive skill system to one where it proactively recognizes recurring patterns in user behavior and automatically generates new skills. 
*   **NanoBot vs. OpenClaw Comparisons ([Issue #2774](https://github.com/HKUDS/nanobot/issues/2774) & [Issue #1265](https://github.com/HKUDs/nanobot/issues/1265), 11 comments combined):** Users actively praise NanoBot for its stability, speed, and native Windows support compared to "OpenClaw" (an implied competitor), highlighting that NanoBot doesn't require WSL and suffers from fewer crashes.

## 5. Bugs & Stability
The transition to version `0.1.5` has introduced a few notable bugs, though the community is actively submitting fixes:
*   **Critical / Data Loss - GitStore Overwrites:** The `Dream` phase initializes a nested repo in `workspace/` and overwrites the user's `.gitignore`. This is actively being addressed by three competing/complementary PRs: [#3009](https://github.com/HKUDS/nanobot/pull/3009), [#2988](https://github.com/HKUDs/nanobot/pull/2988), and a proposed SQLite backend replacement [#3015](https://github.com/HKUDs/nanobot/pull/3015).
*   **High Severity - Think Tag Truncation:** [Issue #3004](https://github.com/HKUDS/nanobot/issues/3004) reports a false-positive regex bug in `strip_think()` that truncates messages mid-sentence if they mention the tag. Fix proposed in [PR #3020](https://github.com/HKUDS/nanobot/pull/3020).
*   **Medium Severity - History Corruption:** [Issue #2989](https://github.com/HKUDs/nanobot/issues/2989) notes that the agent can bypass `append_history()` using the `exec` tool, corrupting `history.jsonl`.
*   **Medium Severity - Feishu Module Error:** [Issue #2970](https://github.com/HKUDS/nanobot/issues/2970) reports a breaking startup failure for the Feishu channel on `0.1.5` due to a missing `lark_oapi.api.bot` module.
*   **Low Severity - MCP Cancel Conflicts:** [Issue #3018](https://github.com/HKUDs/nanobot/issues/3018) notes that configuring multiple MCP server types (StreamableHttp + Stdio) causes `cancel scope` crashes. Fix submitted in [PR #3019](https://github.com/HKUDs/nanobot/pull/3019).

## 6. Feature Requests & Roadmap Signals
*   **Context Compression & Cost Reduction:** [Issue #2937](https://github.com/HKUDS/nanobot/issues/2937) suggests an embedding-based context compression pipeline. This is mirrored by [PR #3007](https://github.com/HKUDs/nanobot/pull/3007) which introduces "auto compact" for proactive session compression during idle periods.
*   **Enhanced Concurrency Control:** [Issue #3008](https://github.com/HKUDs/nanobot/issues/3008) requests intelligent concurrent request control, moving away from the hardcoded limit of 3.
*   **Local/Custom Provider Improvements:** Users are heavily requesting better support for custom OpenAI-compatible endpoints ([Issue #2958](https://github.com/HKUDs/nanobot/issues/2958)) and Aliyun MaaS ([Issue #2998](https://github.com/HKUDs/nanobot/issues/2998)).
*   **Predictions for Next Version:** The next release will likely focus on SQLite/fixes for the Dream version control system, better context memory management (auto-compact), and native WebUI enhancements.

## 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by API errors providing no feedback when their keys run out of credits ([Issue #3006](https://github.com/HKUDs/nanobot/issues/3006), addressed by [PR #3013](https://github.com/HKUDs/nanobot/pull/3013)). Additionally, losing context when using the `/stop` command frustrates users who just want to redirect the AI ([Issue #2966](https://github.com/HKUDs/nanobot/issues/2966)).
*   **Satisfaction:** Users are highly satisfied with NanoBot's core stability, especially on Windows environments. Multiple comments highlight that it "completely beats OpenClaw" in terms of response speed, lack of crashes, and ease of skill installation.
*   **Use Cases:** The project is seeing diverse global use, from users deploying WhatsApp bots requiring data isolation ([Issue #2836](https://github.com/HKUDs/nanobot/issues/2836)) to enterprise WeChat (Wecom) image handling ([Issue #2999](https://github.com/HKUDs/nanobot/issues/2999)). 

## 8. Backlog Watch
*   **Exec Allow/Deny Patterns ([PR #2475](https://github.com/HKUDs/nanobot/pull/2475)):** Open since March 25th, this crucial security PR aims to add configurable allow/deny regex patterns for the exec tool. It needs maintainer review to proceed.
*   **NapCat QQ Channel ([PR #2379](https://github.com/HKUDs/nanobot/pull/2379)):** Open since March 23rd, this PR adds a highly requested QQ channel integration. Despite being tested, it awaits merging.
*   **Email Handling ([Issue #2954](https://github.com/HKUDs/nanobot/issues/2954)):** Users report that email checking via IMAP is inconsistent and needs troubleshooting from core maintainers.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-04-11

## 1. Today's Overview
PicoClaw demonstrates exceptionally high development velocity and robust community engagement as it iterates on its `v0.2.6` nightly cycle. With 29 Pull Requests updated and 17 merged or closed in the last 24 hours, the core team and community contributors are aggressively addressing stability, expanding channel integrations, and refining agent execution flows. The high ratio of open issues (14 active) reflects a rapidly growing user base that is actively stress-testing the platform across diverse environments (Docker, Windows, Synology NAS) and LLM providers. Overall, the project is in a hyper-active stabilization phase, successfully balancing new feature integration with critical bug squashing.

## 2. Releases
- **nightly: Nightly Build (v0.2.6-nightly.20260410.d9977715)**
  - **Details:** Automated build tracking the `main` branch.
  - **Notes:** As a nightly release, it is subject to instability. Users should monitor for the WebUI and WebSocket fixes currently being merged before deploying to production environments.
  - **Full Changelog**: [v0.2.6...main](https://github.com/sipeed/picoclaw/compare/v0.2.6...main)

## 3. Project Progress
Today's merged PRs heavily focused on **agent reliability, UI consistency, and dependency management**:
- **WebUI Agent Output Fixed:** [PR #2449](https://github.com/sipeed/picoclaw/pull/2449) resolved an issue where tool calls and text outputs weren't syncing properly in the UI, ensuring both are visible during live chats and after page refreshes.
- **Agent Communication Fixes:** [PR #2180](https://github.com/sipeed/picoclaw/pull/2180) fixed a critical bug where using the message tool to cross-post to another chat caused the originating chat to hang indefinitely.
- **MCP Tool Compatibility:** [PR #2460](https://github.com/sipeed/picoclaw/pull/2460) (open but actively updated) addresses a parameter passing issue with MCP servers, and [PR #2455](https://github.com/sipeed/picoclaw/pull/2455) bumped the Go MCP SDK to v1.5.0.
- **Frontend Stabilization:** Launcher fixes include aligning React versions ([PR #2467](https://github.com/sipeed/picoclaw/pull/2467)) to prevent crashes, and adding fallback authentication for unsupported platforms ([PR #2466](https://github.com/sipeed/picoclaw/pull/2466)).

## 4. Community Hot Topics
The most actively discussed items revolve around scaling, multi-platform support, and project governance:
- **LLM Account Stacking ([Issue #2408](https://github.com/sipeed/picoclaw/issues/2408), 8 comments):** A highly requested feature for automatic API key rotation upon hitting rate limits. This indicates a maturing user base running PicoClaw at high volumes.
- **WebSocket Connection Failures ([Issue #2319](https://github.com/sipeed/picoclaw/issues/2319), 7 comments):** A significant regression affecting users on v0.2.5+. Users are actively sharing logs and workarounds.
- **Signal Channel Integration ([Issue #41](https://github.com/sipeed/picoclaw/issues/41), 6 comments, 👍 7):** A highly upvoted request highlighting the privacy-conscious demographic of PicoClaw's user base, requesting E2E encryption support.
- **Official Discord Governance ([Issue #2433](https://github.com/sipeed/picoclaw/issues/2433), 3 comments, 👍 2):** Users are expressing frustration over the lack of official maintainer presence on Discord and poor synchronization of major update documentation, signaling a need for better community scaling by Sipeed.

## 5. Bugs & Stability
Several critical bugs have been reported, with many seeing immediate fix PRs:
1. **WebSocket Auth Regressions (High):** Users report complete WebSocket connection failures in v0.2.5+ ([Issue #2463](https://github.com/sipeed/picoclaw/issues/2463), [Issue #2319](https://github.com/sipeed/picoclaw/issues/2319)). A related misconfiguration issue exists where the `PICOCLAW_GATEWAY_TOKEN` env var doesn't secure the WebSocket endpoint as users expect ([Issue #2438](https://github.com/sipeed/picoclaw/issues/2438)).
2. **Windows Pathing Error (Medium):** `list_dir` fails on Windows due to path separator mismatches ([Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)).
3. **Cron Job State Bleed (Medium):** Scheduled tasks reuse the same session key, accumulating history across runs. *Fix exists in [PR #2474](https://github.com/sipeed/picoclaw/pull/2474).*
4. **Unsafe Terminal Output (Medium):** The `exec` tool emits raw ANSI control characters, risking terminal UI corruption ([Issue #2377](https://github.com/sipeed/picoclaw/issues/2377)).
5. **Feishu (Lark) Channel Drops (Low):** The Lark channel only responds to the last message if multiple are sent in succession ([Issue #2464](https://github.com/sipeed/picoclaw/issues/2464)).

## 6. Feature Requests & Roadmap Signals
User requests today point heavily toward multi-tenancy, expanded context windows, and LLM provider flexibility:
- **Provider / Auth Flexibility:** Support for Dual-HEAD authentication ([Issue #2169](https://github.com/sipeed/picoclaw/issues/2169)) for custom models, and the aforementioned API key rotation ([Issue #2408](https://github.com/sipeed/picoclaw/issues/2408)). 
- **Native Provider Support:** [PR #2475](https://github.com/sipeed/picoclaw/pull/2475) introduces native Google Gemini provider support, strongly signaling this will be a flagship feature in the stable v0.2.6 release.
- **Notifications:** Requests for SMTP email integration for cron tasks ([Issue #2465](https://github.com/sipeed/picoclaw/issues/2465)), showing users are running automated reporting tasks via PicoClaw.
- **Security & Multi-User:** Ongoing work in [PR #2313](https://github.com/sipeed/picoclaw/pull/2313) introduces multi-user support and an "Agent Shield" security suite, laying the groundwork for enterprise/team deployments.

## 7. User Feedback Summary
The user base is highly technical, utilizing PicoClaw in diverse setups (Synology NAS Docker, Windows, custom-hosted LLMs). There is a strong undercurrent of satisfaction with the tool's potential compared to competitors ("picoclaw 相对 zeroclaw 和 nanobot 真的潜力十足"), but frustration exists regarding operational stability (specifically WebSocket connections) and documentation lags. The community strongly desires self-hosted, privacy-preserving communication channels like Signal, and relies heavily on PicoClaw for automated workflows.

## 8. Backlog Watch
The following items require immediate attention from maintainers:
- **Documentation & Config Semantics:** The `PICOCLAW_GATEWAY_TOKEN` confusion ([Issue #2438](https://github.com/sipeed/picoclaw/issues/2438)) indicates docs or variable naming need updating to prevent security misconfigurations.
- **Tool Execution Errors:** [Issue #2046](https://github.com/sipeed/picoclaw/issues/2046) (LongCat API tool-calling failure) remains open and needs triage to ensure broad LLM provider compatibility.
- **Complex Integrations:** The iMessage integration ([PR #2224](https://github.com/sipeed/picoclaw/pull/2224)) and Multi-User Security hardening ([PR #2313](https://github.com/sipeed/picoclaw/pull/2313)) are massive architectural changes that have sat open for over a week and require dedicated maintainer review cycles to merge successfully.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-11

## 1. Today's Overview

NanoClaw is experiencing a **very high-activity day**, with 18 pull requests updated (11 open, 7 closed/merged) and 6 issues processed in the last 24 hours. The project is clearly in a phase of aggressive ecosystem expansion, with the community heavily focused on integrations, container credential management, and breaking out of Docker isolation constraints. Multiple contributors—particularly `bitcryptic-gw`, `Saxin`, and `dengfuping`—are driving significant architectural changes simultaneously. No new releases were cut today, but the volume of maturing PRs suggests a release may be consolidating soon.

---

## 2. Releases

No new releases were published today.

---

## 3. Project Progress

Seven PRs were merged or closed today, representing meaningful advances:

| PR | Author | What Advanced |
|---|---|---|
| [#1724](https://github.com/qwibitai/nanoclaw/pull/1724) | Saxin | **OAuth token refresh fix** — added required `client_id`, `scope`, and rotating refresh token fields to the `platform.claude.com/v1/oauth/token` POST body, resolving `400 Invalid request format` errors that caused silent credential expiry in agent containers. |
| [#1729](https://github.com/qwibitai/nanoclaw/pull/1729) | damonrand | **Supermemory integration + session soft-delete** — persistent agent memory across conversations via Supermemory Pro REST client, plus session soft-delete with `deleted_at` timestamp. This is a significant capability addition. |
| [#1607](https://github.com/qwibitai/nanoclaw/pull/1607) | bitcryptic-gw | **LiteLLM MCP skill** — three-layer model discovery (NanoClaw direct credentials, LiteLLM providers, local Ollama models) with automatic Ollama model sync. Substantially improves multi-provider visibility. |
| [#1258](https://github.com/qwibitai/nanoclaw/pull/1258) | bitcryptic-gw | **Tailscale env var passthrough** — forwards `TAILSCALE_*` variables into agent containers for VPN-connected agent deployments. |
| [#721](https://github.com/qwibitai/nanoclaw/pull/721) | cmraible-bot | **Mount-security tests** — 35 tests for the security-critical `mount-security.ts` module (path traversal prevention, symlink resolution, read-only enforcement). Zero → comprehensive coverage. |
| [#719](https://github.com/qwibitai/nanoclaw/pull/719) | cmraible-bot | **Streaming output error handling** — added `.catch()` to `outputChain` promise chains in `container-runner.ts`, preventing group hangs when `channel.sendMessage` fails. |
| [#1733](https://github.com/qwibitai/nanoclaw/pull/1733) | danizion | **Closed without merge** — direct Ollama credential injection (likely superseded by other credential proxy approaches). |

**Key takeaway:** The day saw both hardening (test coverage, error handling, OAuth fixes) and feature expansion (Supermemory, LiteLLM). The project is maturing on two fronts simultaneously.

---

## 4. Community Hot Topics

### Multi-provider / LLM flexibility ([#1163](https://github.com/qwibitai/nanoclaw/issues/1163))
- **3 👍, 2 comments** — The most-reacted issue today
- `pedrorocha-net` advocates for OpenCode support alongside Claude Code, noting many enterprises use multiple AI providers
- **Underlying need:** Enterprise users want vendor-neutral orchestration; Claude lock-in is a deployment blocker for some organizations

### Headroom context compression research ([#1493](https://github.com/qwibitai/nanoclaw/issues/1493))
- **2 comments** — Research into an API-level proxy that compresses context before reaching the model
- **Underlying need:** Token costs and context window limits are real production concerns; transparent compression without agent-side changes is an elegant approach

### Claude Code local settings in gitignore ([#1665](https://github.com/qwibitai/nanoclaw/issues/1665))
- Already has a corresponding fix PR [#1734](https://github.com/qwibitai/nanoclaw/pull/1734) by `mvanhorn` — fast community response

---

## 5. Bugs & Stability

### 🔴 High Severity — MCP IPC tools fail in host-mode sessions ([#1730](https://github.com/qwibitai/nanoclaw/issues/1730)) — **CLOSED**
- **Author:** `vrknetha`
- All MCP IPC tools (`send_message`, `scheduler_upsert_job`, etc.) fail with `ENOENT: no such file or directory, mkdir '/workspace/ipc/tasks'` when running on the host instead of in a container
- Hardcoded `/workspace/ipc` path assumes container environment
- **Status:** Closed same day — likely fixed by one of the host-mode PRs

### 🟡 Medium Severity — Streaming output chain hangs ([#719](https://github.com/qwibitai/nanoclaw/pull/719)) — **MERGED**
- Promise chain in `outputChain` had no `.catch()`, causing silent group hangs when `channel.sendMessage` throws
- Fix: proper error handling in the chain

### 🟡 Medium Severity — OAuth token refresh broken ([#1724](https://github.com/qwibitai/nanoclaw/pull/1724)) — **MERGED**
- Missing `client_id` and `scope` in refresh POST body caused `400` errors, stale tokens, and `401` failures in agent containers
- Fix: complete OAuth parameter set with rotating refresh tokens

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Signal Strength | Notes |
|---|---|---|---|
| **Native host-mode runner** (bypass Docker) | [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) | 🔴 High | Enables tmux, headed browsers, macOS APIs. Directly requested, no workaround exists. Multiple related PRs today suggest this is actively being shaped. |
| **Pluggable database adapter** | [#1722](https://github.com/qwibitai/nanoclaw/issues/1722) + [PR #1723](https://github.com/qwibitai/nanoclaw/pull/1723) | 🔴 High | Issue + PR same day by `dengfuping`. Abstracts `IDatabaseAdapter` behind SQLite default. Enables PostgreSQL, MySQL, Turso. |
| **Multi-provider support** (OpenCode / beyond Claude) | [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) | 🟡 Medium | Strong community demand (3 👍). Not yet addressed by maintainers. |
| **Context compression** (Headroom proxy) | [#1493](https://github.com/qwibitai/nanoclaw/issues/1493) | 🟡 Medium | Research phase. Transparent proxy approach is architecturally clean. |
| **OAuth auto-refresh** | [PR #1725](https://github.com/qwibitai/nanoclaw/pull/1725) | 🟢 Near-term | `Saxin` already has a PR adding `ensureFreshOAuthToken()` to container startup. |
| **Extra volume mounts** (`NANOCLAW_EXTRA_MOUNTS`) | [PR #1726](https://github.com/qwibitai/nanoclaw/pull/1726) | 🟢 Near-term | Simple env var approach for host directory access. |
| **Credential proxy** (OneCLI alternative) | [PR #1727](https://github.com/qwibitai/nanoclaw/pull/1727) | 🟢 Near-term | Native proxy on port 3001 for Unraid template injection. |

**Prediction for next release:** Host-mode runner support, pluggable database adapters, and OAuth hardening are the most likely candidates. The number of container/credential PRs converging suggests a "deployment flexibility" theme.

---

## 7. User Feedback Summary

### Pain Points
- **Docker isolation is a double-edged sword:** Users love the security but hit walls when needing host access (tmux, headed browsers, macOS APIs). The frustration is palpable in [#1732](https://github.com/qwibitai/nanoclaw/issues/1732) — "no workaround short of mounting the host's entire filesystem."
- **Credential injection fragility:** Multiple PRs today (#1724, #1725, #1727, #1728, #1733) all address different angles of the same problem — getting LLM credentials and integration tokens reliably into agent containers. This is clearly an ongoing pain point.
- **MCP integrations silently failing** when env vars aren't forwarded into containers ([PR #1728](https://github.com/qwibitai/nanoclaw/pull/1728)) — Ollama, Home Assistant, Tailscale, and others were "silently failing to get credentials."

### Use Cases Emerging
- **Home server / homelab deployments:** Unraid, Home Assistant, Tailscale, and Ollama integrations suggest a strong self-hosting user base
- **Multi-LLM orchestration:** LiteLLM + Ollama + Claude combinations indicate users running hybrid local/cloud AI stacks
- **Enterprise multi-provider:** Organizations with existing AI provider contracts want to use NanoClaw without being locked to Anthropic

### Satisfaction Signal
The rapid community response to issues (same-day fix PR for [#1665](https://github.com/qwibitai/nanoclaw/issues/1665) → [#1734](https://github.com/qwibitai/nanoclaw/pull/1734)) suggests a healthy, engaged contributor base.

---

## 8. Backlog Watch

| Item | Age | Concern |
|---|---|---|
| **[#1163](https://github.com/qwibitai/nanoclaw/issues/1163)** — OpenCode/multi-provider support | 26 days | 3 👍, strong demand, no maintainer response yet. This is becoming the top-voted unanswered issue. |
| **[#1493](https://github.com/qwibitai/nanoclaw/issues/1493)** — Headroom context compression research | 15 days | Still in research phase. The 2-comment discussion suggests interest but no decision. |
| **[PR #1188](https://github.com/qwibitai/nanoclaw/pull/1188)** — UnraidClaw MCP integration | 25 days | Long-lived open PR. Blocks a segment of the self-hosting community. |
| **[PR #1327](https://github.com/qwibitai/nanoclaw/pull/1327)** — Home Assistant MCP integration | 20 days | Similarly long-lived. Aligns with the homelab user base trend. |
| **[PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624)** — Matrix channel with E2EE | 7 days | Newer but complex (E2EE via Rust crypto store). Needs careful security review. |
| **[PR #1562](https://github.com/qwibitai/nanoclaw/pull/1562)** — Lossless Context Management | 11 days | Ambitious feature. No maintainer comments visible. |

**Most urgent:** Maintainers should respond to [#1163](https://github.com/qwibitai/nanoclaw/issues/1163) (multi-provider support) — it's the most upvoted open issue and represents a strategic direction question that affects multiple active PRs. The long-open integration PRs (#1188, #1327) also need review to maintain contributor momentum in the self-hosting community.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-11

## 1. Today's Overview
IronClaw experienced exceptionally high activity over the past 24 hours, driven primarily by a massive "bug bash" QA event on the hosted-staging environment and rapid-fire CI staging promotions. The project saw 39 issues updated (36 open) and 50 pull requests updated, though the majority of PRs were automated staging promotion batches. No new official releases were cut today. The core maintainers (including `ilblackdragon` and `serrrfirat`) are actively pushing the **Engine v2** architecture forward, focusing on simplifying core abstractions and introducing per-project sandboxing. Overall, the project is in a highly experimental, rapid-iteration phase with clear growing pains around tool execution reliability and cross-channel consistency.

## 2. Releases
No new releases were published today.

## 3. Project Progress
The primary functional progress today centered on advancing the **Engine v2** architecture and **staging promotion CI**:
*   **Per-Project Sandbox (Phases 1–7):** PR [#2211](https://github.com/nearai/ironclaw/pull/2211) remains open and active. It implements the complete per-project Docker-based sandbox for engine v2, ensuring filesystem/shell tools are properly isolated.
*   **Abound Fixes & Terminal Tools:** PR [#2241](https://github.com/nearai/ironclaw/pull/2241) introduces `terminal_tools` (tools returning raw JSON without LLM prose conversion) and refactors the `send_wire` tool to use a two-step intent analysis graph.
*   **LLM Request Metadata:** PR [#2294](https://github.com/nearai/ironclaw/pull/2294) adds a stable `conversation_id` to LLM request metadata, allowing stateful backends to route effectively.
*   **Aliyun Provider:** PR [#1446](https://github.com/nearai/ironclaw/pull/1446) adds dedicated Aliyun BaiLian Coding Plan support.
*   **CI Promotions:** 16+ staging promotion PRs were created and merged by the `ironclaw-ci[bot]` (e.g., PR [#2293](https://github.com/nearai/ironclaw/pull/2293)), demonstrating an aggressive continuous deployment pipeline.

## 4. Community Hot Topics
The most actively discussed items revolve around **architectural overhauls for Engine v2** and **tool execution reliability**:
*   **Architecture Simplification:** Issue [#2192](https://github.com/nearai/ironclaw/issues/2192) (3 comments) proposes collapsing 7 core concepts into 3 to reduce cognitive load for contributors.
*   **Extension Model Unification:** Issue [#2246](https://github.com/nearai/ironclaw/issues/2246) discusses treating MCP tools as single-tool extensions and deduplicating providers. This highlights a need to clean up how external tools are surfaced to the LLM.
*   **Tool-Aware Skills:** Issue [#2250](https://github.com/nearai/ironclaw/issues/2250) proposes a lifecycle for skills (adaptation, retirement, re-evaluation) based on the actual tools available.
*   **Dangerous Tool Retry Loop:** Issue [#2240](https://github.com/nearai/ironclaw/issues/2240) details how the agent retries a failing tool call up to 50 times without detecting duplicates, causing a terrible user experience.

## 5. Bugs & Stability
The QA bug bash revealed several **High Severity** stability and behavioral issues, primarily in the staging environment:
1.  **Orchestrator Crash (HTTP 413):** Issue [#2276](https://github.com/nearai/ironclaw/issues/2276) - Orchestrator crashes with "Payload Too Large" during multi-step tasks.
2.  **Chat Concurrency Failure:** Issue [#2231](https://github.com/nearai/ironclaw/issues/2231) - Multiple chats cannot run in parallel; responses get stuck in a queue.
3.  **Instance Persistence:** Issue [#2284](https://github.com/nearai/ironclaw/issues/2284) - Agent instances die after 1 hour of inactivity.
4.  **Tool/Action Execution Hallucinations:**
    *   Bot calls wrong API: [#2287](https://github.com/nearai/ironclaw/issues/2287)
    *   Bot falsely claims success on errors: [#2279](https://github.com/nearai/ironclaw/issues/2279)
    *   Bot schedules cron instead of immediate execution: [#2286](https://github.com/nearai/ironclaw/issues/2286)
    *   Bot ignores temporal conditions: [#2281](https://github.com/nearai/ironclaw/issues/2281)
5.  **Channel Isolation Bugs:**
    *   Cross-channel isolation: [#2239](https://github.com/nearai/ironclaw/issues/2239)
    *   Unsolicited Telegram messages: [#2280](https://github.com/nearai/ironclaw/issues/2280)
    *   Telegram memory/tools access failure: [#2259](https://github.com/nearai/ironclaw/issues/2259)
6.  **Security / UX Issues:**
    *   Unbounded memory/OOM risk from file history snapshots (PR review finding): [#2252](https://github.com/nearai/ironclaw/issues/2252)
    *   Answering "yes" mistakenly triggers approval flow: [#2248](https://github.com/nearai/ironclaw/issues/2248) (Closed/Fixed)
    *   Missing WASM artifact for Telegram install: [#2233](https://github.com/nearai/ironclaw/issues/2233)

*Note: No specific open fix PRs were identified for the highest-severity QA bugs reported today.*

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily leaning toward **modularity, context awareness, and multi-agent collaboration**:
*   **External Agent Delegation:** Issue [#2277](https://github.com/nearai/ironclaw/issues/2277) requests ACP-backed child threads to delegate tasks to Codex/OpenCode, signaling a push toward multi-agent orchestration.
*   **Tool Streaming:** Issue [#2274](https://github.com/nearai/ironclaw/issues/2274) requests streaming tool calls via the Responses API for better UX observability.
*   **CLI Enhancements:** Issue [#2271](https://github.com/nearai/ironclaw/issues/2271) requests `ironclaw profile list`.
*   **Context Notes for Routines:** Issue [#2255](https://github.com/nearai/ironclaw/issues/2255) proposes system-level context notes so the LLM remembers past scheduled notifications.
*   **First-Class Routines UX:** Issue [#1325](https://github.com/nearai/ironclaw/issues/1325) requests native create/edit flows for routines in the Web UI.

## 7. User Feedback Summary
Real user pain points center around **predictability and context management**. Users (`gagdiez`, `henrypark133`, `joe-rlo`) are frustrated when the agent doesn't follow precise temporal constraints, ignores conditional instructions, or hallucinates success when tools actually fail. The false-positive "approval" trigger (saying "yes" casually) breaks conversational flow. Furthermore, users interacting via Telegram experience a degraded service compared to CLI/Web, specifically regarding the inability to access memory or configured tools (#2259).

## 8. Backlog Watch
*   **PR [#1446](https://github.com/nearai/ironclaw/pull/1446) (Aliyun Provider):** Open since 2026-03-20, this large feature PR from a new contributor is still pending. It needs maintainer attention to prevent contributor churn.
*   **Issue [#1503](https://github.com/nearai/ironclaw/issues/1503) (Google Slides failure):** Open since 2026-03-20 with a screenshot, but seemingly unresolved.
*   **Issue [#1944](https://github.com/nearai/ironclaw/issues/1944) (Cron scheduling):** Closed, but worth monitoring. The fix is merged, but ensuring it passes the aggressive staging QA bash is critical for routines reliability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-11

## 1. Today's Overview
Project activity for LobsterAI on April 11, 2026, shows a high-velocity development cycle with **20 pull requests** updated and **8 open issues** filed in the last 24 hours. Maintainers merged 11 PRs while keeping 9 open, indicating an aggressive feature-stabilization and bug-fixing sprint. The focus is heavily skewed toward the OpenClaw AI engine integration, Cowork module refactoring, and Windows build reliability. No new releases were cut today, but the merge volume suggests an imminent release candidate.

## 2. Releases
No new releases were published today.

## 3. Project Progress
A total of **11 PRs were merged/closed**, advancing multiple key areas:

| Area | PR | Summary |
|------|----|---------|
| OpenClaw Gateway | [PR #1619](https://github.com/netease-youdao/LobsterAI/pull/1619) | Fixed v2026.4.8 packaging bug where channel extension deps were missing from top-level dist chunks |
| OpenClaw Gateway | [PR #1618](https://github.com/netease-youdao/LobsterAI/pull/1618) | Denied 64 unused plugins + disabled Bonjour to optimize gateway startup time |
| OpenClaw Config | [PR #1610](https://github.com/netease-youdao/LobsterAI/pull/1610) | Added session keep-alive duration configuration (default 30 days), fixed timezone drift in scheduled tasks |
| Cowork Engine | [PR #1611](https://github.com/netease-youdao/LobsterAI/pull/1611) | Removed legacy `yd-cowork` engine, eliminated Claude SDK dependency, consolidated to OpenClaw-only routing |
| Windows Build | [PR #1623](https://github.com/netease-youdao/LobsterAI/pull/1623) | Fixed Windows packaging failures from npm v11 incompatibility (replaced `rm -f` with cross-platform script) |
| Windows Build | [PR #1624](https://github.com/netease-youdao/LobsterAI/pull/1624) | Fixed `spawnSync npm.cmd EINVAL` on Node 24 + Windows, pruned ~226 MB duplicate OpenClaw SDK |
| Package Size | [PR #1625](https://github.com/netease-youdao/LobsterAI/pull/1625) | Skipped peerDep auto-install to avoid ~738 MB redundant copies of OpenClaw SDK in channel plugins |
| IM Integration | [PR #1612](https://github.com/netease-youdao/LobsterAI/pull/1612) | Added POPO QR code scan login flow with IPC handlers and scan UI |
| Scheduled Tasks | [PR #1613](https://github.com/netease-youdao/LobsterAI/pull/1613) | Fixed dirty-state reset bug after saving scheduled tasks |
| Model Support | [PR #929](https://github.com/netease-youdao/LobsterAI/pull/929) | Added Baidu Qianfan (千帆) LLM provider support |
| Dependencies | [PR #1616](https://github.com/netease-youdao/LobsterAI/pull/1616) | Upgraded NIM plugin to v1.0.3 |

**9 PRs remain open**, including major UI refactors ([PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628) – model selector redesign), system notification feature ([PR #1621](https://github.com/netease-youdao/LobsterAI/pull/1621)), onboarding tours ([PR #1577](https://github.com/netease-youdao/LobsterAI/pull/1577)), and session export improvements ([PR #1615](https://github.com/netease-youdao/LobsterAI/pull/1615)).

## 4. Community Hot Topics
The most actively discussed items reveal core user concerns:

- **[Issue #284](https://github.com/netease-youdao/LobsterAI/issues/284)** (2 comments, open since March): Electron app fails to start on Arch Linux with Awesome WM (no desktop environment). This highlights a compatibility gap for Linux power users running non-standard window managers.

- **[Issue #1627](https://github.com/netease-youdao/LobsterAI/issues/1627)** (1 comment): Client crashes during complex tasks. Logs show OpenClaw gateway WebSocket activity preceding the crash — suggests resource management or timeout issues under heavy agent workloads.

- **[Issue #1622](https://github.com/netease-youdao/LobsterAI/issues/1622)** (1 comment): Custom model addition fails testing. This directly impacts users trying to integrate self-hosted or third-party LLMs.

- **[Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614)** (1 comment): Community request to add `hermes-agent` as an alternative AI engine alongside OpenClaw, signaling demand for multi-engine flexibility.

## 5. Bugs & Stability
Ranked by severity:

| Severity | Issue / PR | Description | Fix Status |
|----------|-----------|-------------|------------|
| **P0 Blocker** | [PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1626) (OPEN) | OpenClaw gateway fails to start for ALL users after upgrade — `skipMissedJobs` field removed from new OpenClaw version but still written by config sync. Exit code 1 crash. Dialog flickers during retry loop. | **Fix PR open, not yet merged** |
| **P0 Blocker** | [PR #1619](https://github.com/netease-youdao/LobsterAI/pull/1619) (MERGED) | OpenClaw v2026.4.5–v2026.4.8 packaging bug: bare specifiers for channel deps missing at runtime | **Fixed** |
| **High** | [Issue #1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | Client crashes on complex tasks (OpenClaw stdout suggests gateway-level issue) | No fix PR yet |
| **High** | [Issue #1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | v2026.4.3 returns identical content regardless of input — a regression in the latest version | No fix PR yet |
| **Medium** | [Issue #1617](https://github.com/netease-youdao/LobsterAI/issues/1617) | Deleted skills persist in UI list; backend deletes successfully but frontend state never syncs. Survives restart — likely stale cache or storage issue | No fix PR yet |
| **Medium** | [Issue #1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | Uploaded files not recognized by model — regression from path handling changes in new version | No fix PR yet |
| **Medium** | [Issue #1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | Custom model configuration test fails | No fix PR yet |
| **Low** | [Issue #284](https://github.com/netease-youdao/LobsterAI/issues/284) | Electron won't start on Arch Linux + Awesome WM | Open since March, unresolved |

**Key concern:** Two P0-level issues (gateway startup failure) are being addressed in parallel PRs ([#1626](https://github.com/netease-youdao/LobsterAI/pull/1626) still open, [#1619](https://github.com/netease-youdao/LobsterAI/pull/1619) merged). The v2026.4.3 regression ([#1566](https://github.com/netease-youdao/LobsterAI/issues/1566)) with identical responses needs urgent attention.

## 6. Feature Requests & Roadmap Signals
Based on today's issues and open PRs, the following features are in flight or requested:

| Feature | Source | Status | Likelihood for Next Release |
|---------|--------|--------|------------------------------|
| System notifications for scheduled tasks | [Issue #1620](https://github.com/netease-youdao/LobsterAI/issues/1620) + [PR #1621](https://github.com/netease-youdao/LobsterAI/pull/1621) | PR open, feature-complete | **High** |
| Onboarding tours for new users | [PR #1577](https://github.com/netease-youdao/LobsterAI/pull/1577) | PR open | **Medium** |
| Model selector UI redesign with vendor icons | [PR #1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | PR open | **Medium** |
| Session export quality improvements | [PR #1615](https://github.com/netease-youdao/LobsterAI/pull/1615) | PR open | **Medium** |
| Hermes-agent as alternative AI engine | [Issue #1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | Feature request only | **Low** |
| Baidu Qianfan model support | [PR #929](https://github.com/netease-youdao/LobsterAI/pull/929) | Merged | **Ships next release** |
| Session keep-alive duration settings | [PR #1575](https://github.com/netease-youdao/LobsterAI/pull/1575) | PR open | **High** |
| MCP JSON streamable HTTP import | [PR #367](https://github.com/netease-youdao/LobsterAI/pull/367) | PR open (stale) | **Low** |

**Predicted next release focus:** Gateway stability fixes, Baidu Qianfan support, session policy configuration, system notifications, and continued Windows build hardening.

## 7. User Feedback Summary
Real user pain points surfacing today reveal these patterns:

- **Stability regressions erode trust:** Multiple issues ([#1566](https://github.com/netease-youdao/LobsterAI/issues/1566), [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561), [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627)) reference "the new version" introducing bugs that didn't exist before — file uploads broken, identical responses, and crashes. Users expect backwards compatibility.

- **Custom model integration is a key use case:** Issue [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) confirms users actively try to connect self-hosted or alternative LLMs. This aligns with the Qianfan integration ([PR #929](https://github.com/netease-youdao/LobsterAI/pull/929)) and hermes-agent request ([#1614](https://github.com/netease-youdao/LobsterAI/issues/1614)).

- **Agent complexity limits are tested:** The crash on "slightly complex tasks" ([#1627](https://github.com/netease-youdao/LobsterAI/issues/1627)) suggests users are pushing LobsterAI beyond simple chatbot use cases into multi-step agent workflows, exposing resource management issues.

- **UX polish gaps frustrate users:** Skills deletion not syncing ([#1617](https://github.com/netease-youdao/LobsterAI/issues/1617)), hard-coded English in exports ([PR #1615](https://github.com/netease-youdao/LobsterAI/pull/1615)), and missing notifications ([#1620](https://github.com/netease-youdao/LobsterAI/issues/1620)) indicate the UI layer needs hardening.

- **Linux support remains second-class:** Issue [#284](https://github.com/netease-youdao/LobsterAI/issues/284) has been open for over a month with no resolution, affecting users on non-mainstream desktop environments.

## 8. Backlog Watch
The following items need maintainer attention due to age or impact:

| Item | Age | Why It Matters |
|------|-----|---------------|
| [Issue #284](https://github.com/netease-youdao/LobsterAI/issues/284) — Electron fails on Arch Linux + Awesome WM | ~37 days | Complete app unusability on a Linux configuration; 2 comments but no movement |
| [PR #5](https://github.com/netease-youdao/LobsterAI/pull/5) — ESLint config with 269 violations fixed | ~50 days (stale) | Code quality infrastructure; large diff may need breaking into smaller PRs |
| [PR #367](https://github.com/netease-youdao/LobsterAI/pull/367) — MCP JSON streamable HTTP import | ~32 days (stale) | Directly addresses [Issue #351](https://github.com/netease-youdao/LobsterAI/issues/351) for MCP configuration; blocking MCP power users |
| [PR #374](https://github.com/netease-youdao/LobsterAI/pull/374) — Async message handler for IM timeout | ~31 days (stale) | Prevents IM platform timeouts; critical for production IM deployments |
| [PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1626) — Gateway startup P0 fix | Open | **Immediate merge needed** — currently blocking all users who upgraded OpenClaw |
| [Issue #1566](https://github.com/netease-youdao/LobsterAI/issues/1566) — Identical response regression in v2026.4.3 | 2 days | High-severity regression with no fix PR; affects core chat functionality |

**Recommendation:** Prioritize merging [PR #1626](https://github.com/netease-youdao/LobsterAI/pull/1626) (P0 gateway fix), triage [Issue #1566](https://github.com/netease-youdao/LobsterAI/issues/1566) (response regression), and revive stale PRs [#367](https://github.com/netease-youdao/LobsterAI/pull/367) and [#374](https://github.com/netease-youdao/LobsterAI/pull/374) which address real production concerns for MCP and IM users respectively.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyclaw">TinyAGI/tinyclaw</a></summary>

# TinyClaw Project Digest: 2026-04-11

## 1. Today's Overview
TinyClaw (hosted at github.com/TinyAGI/tinyagi) experienced a low-activity day on April 11, 2026, with zero new issues opened or closed and no new software releases. However, project momentum is maintained through ongoing code contributions, evidenced by an active pull request addressing system behavior. The repository is currently in a stable but quiet state, with maintainers likely reviewing pending architectural fixes. Overall project health remains steady, though community engagement and issue creation have temporarily paused.

## 2. Releases
There were no new releases recorded in the last 24 hours. 

## 3. Project Progress
No pull requests were merged or closed today. 
*   **Active Work:** The focus is currently on improving system configuration and initialization logic. An open PR, [PR #276](https://github.com/TinyAGI/tinyagi/pull/276), is actively being reviewed. This contribution addresses a bug where a top-level `heartbeat.enabled` flag in `settings.json` was being silently ignored. While not yet merged, this represents a step forward in refining the agent initialization lifecycle and ensuring configuration files behave as expected.

## 4. Community Hot Topics
Community discussion channels were quiet today, with zero new comments or reactions across issues and pull requests. 
*   **Key Focus Area:** The sole focus of recent technical activity is [PR #276: fix(heartbeat): honor top-level heartbeat.enabled=false setting](https://github.com/TinyAGI/tinyagi/pull/276). The underlying need driving this PR is user demand for global configuration control. Users expect to be able to toggle global features (like the heartbeat mechanism) at the top level of their settings without having to configure it individually for every single agent.

## 5. Bugs & Stability
One notable bug was reported in the last 24 hours via the active pull request:
*   **[Medium Severity] Global Heartbeat Configuration Ignored:** Identified in [PR #276](https://github.com/TinyAGI/tinyagi/pull/276), the application was found to have a discrepancy between type definitions (`Settings`) and runtime behavior. Specifically, `startHeartbeat()` was being called unconditionally in `packages/main/src/index.ts:272`, overriding the user's `false` setting. 
    *   *Fix Status:* A fix PR ([PR #276](https://github.com/TinyAGI/tinyagi/pull/276)) has already been submitted by contributor `ZVNC28` and is currently awaiting maintainer review and merge.

## 6. Feature Requests & Roadmap Signals
There were no explicit new feature requests submitted today. However, the ongoing work on [PR #276](https://github.com/TinyAGI/tinyagi/pull/276) signals a roadmap focus on **configuration hardening and lifecycle management**. As AI agent projects scale, robust global versus per-agent configuration is critical. We can predict that the next version or upcoming patches will heavily emphasize configuration validation, ensuring no settings are "silently ignored."

## 7. User Feedback Summary
Direct user feedback via GitHub issues was unavailable today due to zero new issue submissions. Implicitly, the bug addressed in [PR #276](https://github.com/TinyAGI/tinyagi/pull/276) highlights a common user pain point: unexpected background processes. Users attempting to disable the heartbeat feature (likely to reduce network noise, save compute, or run local-only tests) were likely frustrated by the system's failure to respect the `false` flag. Addressing this bug will directly improve the user experience for those managing multi-agent environments.

## 8. Backlog Watch
*   **[PR #276](https://github.com/TinyAGI/tinyagi/pull/276)** requires prompt maintainer attention. Since the repository is currently experiencing a lull in activity, this would be an optimal time for maintainers to review and merge this configuration bug fix to keep the `main` branch up to date for future contributions.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-11

## 1. Today's Overview
The Moltis project is currently experiencing a highly active and healthy development phase, characterized by rapid issue resolution and robust feature iteration. In the last 24 hours, the community and core team pushed 1 new release, merged 13 pull requests, and closed 6 issues, demonstrating a strong, sustainable development cadence. Activity heavily focused on stabilizing the platform's foundational systems—specifically the hook dispatch engine, voice processing pipelines, and multi-channel integrations. Contributors are rapidly addressing complex edge cases, such as agent context window overflows and silent tool parsing failures, ensuring the AI agent infrastructure remains reliable for advanced users.

## 2. Releases
*   **Version `20260410.01`**
    *   *Note: Specific release notes were not attached to the tag, but this version likely bundles the 13 merged PRs from the past 24 hours, including critical fixes for the hook engine, Whisper STT, and MCP OAuth integrations.*

## 3. Project Progress
Significant advancements were merged across core agent runtime, web UI, and provider support:
*   **Core Hook Engine Fixes:** Fixed a major oversight where the `MessageReceived` hook was incorrectly classified as read-only, and the `ToolResultPersist` hook was entirely undispatched. ([PR #651](https://github.com/moltis-org/moltis/pull/651), [PR #647](https://github.com/moltis-org/moltis/pull/647))
*   **Voice & Channel Processing:** Fixed Telegram voice fallbacks so empty transcriptions no longer send useless placeholder text to the LLM. ([PR #648](https://github.com/moltis-org/moltis/pull/648))
*   **Agent Context & Tooling:** Resolved an auto-continue bug that wiped previous long messages and shipped a native `read_skill` tool so the LLM doesn't have to rely on external filesystem access. ([PR #634](https://github.com/moltis-org/moltis/pull/634), [PR #630](https://github.com/moltis-org/moltis/pull/630))
*   **Infrastructure & UI:** Added an Alibaba Cloud Coding Plan provider, fixed cron job UI state bugs, and updated the installation script to use `curl`. ([PR #621](https://github.com/moltis-org/moltis/pull/621), [PR #625](https://github.com/moltis-org/moltis/pull/625), [PR #627](https://github.com/moltis-org/moltis/pull/627))
*   **Security / MCP:** Fixed MCP OAuth dynamic client registration by correctly forcing `http://` for loopback redirects per RFC 8252. ([PR #636](https://github.com/moltis-org/moltis/pull/636))

## 4. Community Hot Topics
While today's issues lacked high comment counts, several zero-comment bugs highlighted critical silent failures that deeply impact user experience, sparking behind-the-scenes activity:
*   **Silent Hook Failures:** ([Issue #639](https://github.com/moltis-org/moltis/issues/639)) The realization that `MessageReceived` was dropping `Block`/`Modify` actions pointed to a major hidden flaw in user-defined AI workflows, immediately addressed by maintainers.
*   **Discord Media Blackhole:** ([Issue #633](https://github.com/moltis-org/moltis/issues/633)) Users discovered inbound Discord voice and image attachments were being completely ignored, unlike Telegram/Teams. This spurred the opening of [PR #649](https://github.com/moltis-org/moltis/pull/649) to bring Discord to feature parity.
*   **LLM Context Mismanagement:** ([Issue #628](https://github.com/moltis-org/moltis/issues/628)) Auto-continue logic unexpectedly deleting previous messages frustrated users relying on long-context sessions. 

## 5. Bugs & Stability
Today's bug reports were primarily logic flaws and integration edge cases, many of which already have merged fix PRs:
1.  **High - Auto-Continue Overwrites History:** The agent loop's auto-continue feature overwrote substantive, long final answers with brief summaries. *(Fix merged: [PR #634](https://github.com/moltis-org/moltis/pull/634))*
2.  **High - MCP OAuth Loopback Failure:** Strict OAuth providers rejected Moltis's `https://localhost` redirect URI during dynamic client registration. *(Fix merged: [PR #636](https://github.com/moltis-org/moltis/pull/636))*
3.  **High - Un dispatched ToolResultPersist:** Users subscribing to the `ToolResultPersist` hook received no events due to a missing runner implementation. *(Fix merged: [PR #647](https://github.com/moltis-org/moltis/pull/647))*
4.  **Medium - DCG-Guard Bypass:** Sandbox `exec` tools silently bypassed the `dcg-guard` hook if the binary depended on PATH resolution under systemd. *(Fix merged: [PR #635](https://github.com/moltis-org/moltis/pull/635))*
5.  **Medium - Whisper STT Ignores Config:** The `model` and `language` fields for Whisper were validated in the schema but silently ignored in the code. *(Fix merged: [PR #643](https://github.com/moltis-org/moltis/pull/643))*
6.  **Low - Empty Voice Transcription:** Empty STT results sent literal placeholder strings (e.g., "[Voice message - could not transcribe]") to the LLM, resulting in confusing TTS responses. *(Fix open: [PR #648](https://github.com/moltis-org/moltis/pull/648))*
7.  **Unresolved - Remote Login Failure:** Users are currently unable to log in to remote deployments ([Issue #646](https://github.com/moltis-org/moltis/issues/646)), awaiting investigation.

## 6. Feature Requests & Roadmap Signals
New feature requests indicate a push toward richer multi-modal interactions and better developer/hook tooling:
*   **Channel Provenance in Hooks:** ([Issue #640](https://github.com/moltis-org/moltis/issues/640)) Requesting that hook payloads include channel/sender metadata. This is actively being developed in [PR #645](https://github.com/moltis-org/moltis/pull/645) and will likely be in the next release.
*   **Discord Multi-Modal Support:** ([Issue #633](https://github.com/moltis-org/moltis/issues/633)) Requesting inbound voice/image support for Discord to match other channels. Currently being implemented in [PR #649](https://github.com/moltis-org/moltis/pull/649).
*   **Compaction Budget Discipline:** ([PR #652](https://github.com/moltis-org/moltis/pull/652)) A newly proposed feature to enforce hard context-window budgets on auto-compact summaries so they don't overflow the LLM context on the next turn.

## 7. User Feedback Summary
Users operating Moltis in complex, multi-channel environments are actively stress-testing the boundaries of the agent's tool-calling, context management, and voice transcription features. There is a clear pain point around "silent failures"—such as configuration fields being ignored, hooks dropping actions without logging, and Discord attachments going nowhere. However, satisfaction with the project's responsiveness appears high; core contributors (like `penso` and `Cstewart-HC`) are incredibly reactive, often identifying root causes and shipping regression tests for complex bugs on the exact same day they are reported.

## 8. Backlog Watch
There are no long-dormant issues blocking the project currently, but maintainers should keep an eye on the following open items from today:
*   **Remote Deployment Login Issue:** ([Issue #646](https://github.com/moltis-org/moltis/issues/646)) As an unresolved authentication bug, this could block new users from deploying Moltis to servers.
*   **Z.AI Enhanced Tooling Bug:** ([Issue #637](https://github.com/moltis-org/moltis/issues/637)) Reported issues with Z.AI models and tool parsing. (Note: a fix for Z.AI text tool parsing was addressed in [PR #650](https://github.com/moltis-org/moltis/pull/650), but it should be verified if it completely closes the user's specific complaint).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-04-11

## 1. Today's Overview
CoPaw experienced an exceptionally high volume of activity over the past 24 hours, with **50 pull requests** and **35 issues** updated, indicating aggressive development and highly active community engagement following the recent v1.0.2 release. The day was characterized by a strong focus on channel integrations (DingTalk, QQ, Feishu), experimental multi-agent collaboration features, and iterative fixes for regressions introduced in the latest version. The ratio of merged PRs (36) to opened issues (23) demonstrates a healthy, fast-moving project capable of addressing community feedback rapidly. 

## 2. Releases
No new official releases were published today. The project is currently iterating on the **v1.0.2** baseline.

## 3. Project Progress
Significant forward momentum occurred across bug fixes, refactoring, and new feature integrations. 36 PRs were merged/closed today:
*   **Core Stability & Performance:** Merged [#3243](https://github.com/agentscope-ai/CoPaw/pull/3243) (refactored redundant static file route handlers) and [#1257](https://github.com/agentscope-ai/CoPaw/pull/1257) (preserved custom cron expressions in the UI, fixing a long-standing UI bug).
*   **Task Planning (Experimental):** Opened [#3238](https://github.com/agentscope-ai/CoPaw/pull/3238), adding `PlanNotebook` support for the ReAct Agent to automatically decompose complex tasks.
*   **Multi-Agent Collaboration:** Opened [#3215](https://github.com/agentscope-ai/CoPaw/pull/3215) to refactor multi-agent collaboration frameworks, setting the stage for advanced team-based workflows.
*   **Desktop & User Experience:** Advanced [#3119](https://github.com/agentscope-ai/CoPaw/pull/3119) and [#3120](https://github.com/agentscope-ai/CoPaw/pull/3120), introducing a fail-fast mechanism and auto-installation for WebView2 Runtime on Windows, eliminating silent white-screen crashes.
*   **Channel Integrations:** Addressed QQ channel media handling bugs ([#3242](https://github.com/agentscope-ai/CoPaw/pull/3242)), added QQ typing indicator equivalents ([#3246](https://github.com/agentscope-ai/CoPaw/pull/3246)), and migrated DingTalk API calls to the official SDK ([#3236](https://github.com/agentscope-ai/CoPaw/pull/3236)).

## 4. Community Hot Topics
*   **Built-in Skills & MCP Discussion ([#280](https://github.com/agentscope-ai/CoPaw/issues/280) - 25 comments):** The community is actively discussing which popular skills and Model Context Protocol (MCP) servers should be pre-installed to improve the "out-of-the-box" experience. This highlights a strong user desire for frictionless setup and immediate productivity.
*   **Agent Teams Feature Request ([#3224](https://github.com/agentscope-ai/CoPaw/issues/3224) - 3 comments):** A highly detailed proposal for "CoPaw Agent Teams"—a natural-language-driven, self-evolving multi-agent collaboration system. Users feel the current multi-agent setup is too manual ("manual transmission") and want autonomous team orchestration.
*   **Feishu CardKit Streaming ([#3001](https://github.com/agentscope-ai/CoPaw/issues/3001) - 3 comments):** Users are requesting "typewriter effect" streaming outputs for the Feishu (Lark) channel, matching the existing DingTalk AI Card functionality, to reduce perceived latency during AI generation.

## 5. Bugs & Stability
Recent updates seem to have introduced several stability and integration regressions, which the team is actively tracking:
*   **Critical - MCP Process Leak ([#3226](https://github.com/agentscope-ai/CoPaw/issues/3226)):** `chrome-devtools-mcp` and `tavily-mcp` cause severe memory leaks, spawning 40+ node.exe processes and consuming gigabytes of RAM.
*   **High - Agent Execution Silence ([#3011](https://github.com/agentscope-ai/CoPaw/issues/3011)):** During long coding tasks using the `qwen3 coder plus` model, the agent silently stops executing without errors and requires manual user prompt to resume. A fix for oversized tool results causing session persistence hangs is currently proposed in PR [#3252](https://github.com/agentscope-ai/CoPaw/pull/3252).
*   **High - Upgrade Data Loss ([#3190](https://github.com/agentscope-ai/CoPaw/issues/3190)):** Users report losing all custom agents when upgrading from v1.0.1 to v1.0.2 via Docker.
*   **Medium - WeChat Channel Bug ([#2868](https://github.com/agentscope-ai/CoPaw/issues/2868)):** Summarized AI messages fail to send completely to WeChat after tool calls (closed today, likely fixed).
*   **Medium - Startup Regression ([#3256](https://github.com/agentscope-ai/CoPaw/issues/3256)):** Windows desktop startup time has drastically increased to ~2m40s in v1.0.2.

## 6. Feature Requests & Roadmap Signals
Several feature requests provide clear signals for the project's near-term roadmap:
*   **Enhanced Task Execution:** Users want forced execution of workflow rules ([#3233](https://github.com/agentscope-ai/CoPaw/issues/3233)) and "hashline" file editing to improve the success rate of model-driven code modifications ([#3234](https://github.com/agentscope-ai/CoPaw/issues/3234)).
*   **Granular Analytics:** Request for agent-level and session-level token usage tracking ([#3093](https://github.com/agentscope-ai/CoPaw/issues/3093)). PR [#3214](https://github.com/agentscope-ai/CoPaw/pull/3214) is already open addressing this.
*   **UX & Data Management:** Requests for conversation archiving ([#3187](https://github.com/agentscope-ai/CoPaw/issues/3187)), skill downloading ([#3241](https://github.com/agentscope-ai/CoPaw/issues/3241)), and the ability to manually assign Agent IDs ([#3248](https://github.com/agentscope-ai/CoPaw/issues/3248)).
*   *Prediction:* The next minor release will likely focus heavily on MCP stability, multi-agent orchestration (#3215, #3224), and token analytics.

## 7. User Feedback Summary
Users are heavily utilizing CoPaw across diverse messaging platforms (WeChat, QQ, Feishu, DingTalk) and leaning on it for complex coding and task automation. 
*   **Pain Points:** The transition from local/Pip environments to Docker, and upgrades from v1.0.1 to v1.0.2, have been bumpy due to data loss and network configuration bugs (e.g., LM Studio LAN issues [#3222](https://github.com/agentscope-ai/CoPaw/issues/3222)). Also, unsupported thinking blocks (`<thought>` tags) polluting chat outputs ([#3206](https://github.com/agentscope-ai/CoPaw/issues/3206)) is a nuisance.
*   **Satisfaction/Excitement:** Despite the bugs, the community is highly engaged. The excitement around multi-agent setups and the active submission of first-time contributor PRs show a healthy, invested open-source ecosystem.

## 8. Backlog Watch
*   **Long-running Skills Discussion:** Issue [#280](https://github.com/agentscope-ai/CoPaw/issues/280) (opened in early March) remains highly active. Maintainers should formalize an RFC or official roadmap based on this discussion to set community expectations.
*   **Async Event Loop Blocking:** Issue [#3136](https://github.com/agentscope-ai/CoPaw/issues/3136) (QQ/WeChat `stop()` blocking asyncio for up to 10 seconds) is causing significant UI/API hangs. This architectural bottleneck needs prioritization from core maintainers.
*   **Local Model Compatibility:** Issues with Llama.cpp in Docker ([#3211](https://github.com/agentscope-ai/CoPaw/issues/3211)) and Ollama multimodal detection ([#3218](https://github.com/agentscope-ai/CoPaw/issues/3218)) lack clear movement. Given the rising popularity of local LLMs, these integrations require maintainer input.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>