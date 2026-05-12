# OpenClaw Ecosystem Digest 2026-05-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-12 22:22 UTC

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

# OpenClaw Project Digest: 2026-05-13

## 1. Today's Overview
OpenClaw is experiencing an exceptionally high volume of community activity and issue tracking today, with 500 issues and 500 pull requests updated within the last 24 hours. While the project released two new beta patches (v2026.5.12-beta.1 and beta.2) to address critical security scopes and dependency fixes, the maintainers are actively struggling to keep up with the influx of new bugs and PR reviews. A vast majority of PRs and issues remain open (428 open issues, 451 open PRs), indicating a significant bottleneck in triage, review, and merging. The core focus of current development revolves heavily around hardening the newly adopted "Codex" default runtime, addressing multi-agent memory leaks, and squashing messaging channel delivery bugs across Telegram, Slack, and WhatsApp.

## 2. Releases
Two new versions were released today, continuing the rapid beta iteration cycle:
*   **[v2026.5.12-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.2)**
    *   *Fixes:* Resolved an issue in the Codex harness where auth-profile-backed media tools (like `image_generate`) were not accessible unless OpenAI auth was explicitly set via environment variables. Fixed an installation blocker for WhatsApp (`Baileys`) where a pinned libsignal git subdependency failed under pnpm 11.
*   **[v2026.5.12-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.5.12-beta.1)**
    *   *Fixes:* **Security fix:** `memory-wiki` now requires `admin` scope for ingest and `write` scope for Obsidian search (Credit: @pgondhi987). Resolved a build issue where copied metadata for excluded bundled plugins caused update/status failures.

## 3. Project Progress
Out of 500 updated pull requests, only 49 were merged or closed today. This low merge rate highlights a massive review backlog, likely exacerbated by the complexity of the ongoing Codex runtime migration. 
Key advancements include active development on the **Codex migration tooling** ([PR #81192](https://github.com/openclaw/openclaw/pull/81192)) which introduces an onboarding prompt to import personal Codex CLI state. There is also notable progress in the **Context Engine** architecture ([PR #81164](https://github.com/openclaw/openclaw/pull/81164)), adding an `interceptCompaction` contract allowing plugins to override default summarization behaviors. Furthermore, contributors are actively submitting fixes to clean up unbounded session backups ([PR #80969](https://github.com/openclaw/openclaw/pull/80969)) and strip leaked reasoning preambles from final outputs ([PR #60551](https://github.com/openclaw/openclaw/pull/60551)).

## 4. Community Hot Topics
The community is highly active, with several issues generating double-digit comment threads, primarily driven by the complexities of multi-agent setups and the new Codex runtime:
*   **Silent Slack Connection Drops ([Issue #72808](https://github.com/openclaw/openclaw/issues/72808)):** 16 comments. Users are frustrated by silent connection drops to Slack, particularly highlighting failures during live demos.
*   **Codex QA Harness Confusion ([Issue #80319](https://github.com/openclaw/openclaw/issues/80319)):** 14 comments. A deep technical discussion regarding how the QA harness conflates Codex-native tools with OpenClaw's dynamic tool parity, falsely reporting tool dropouts.
*   **Streaming Watchdog Thresholds ([Issue #68596](https://github.com/openclaw/openclaw/issues/68596)):** 12 comments (+7 👍). Users running extended reasoning models (DeepSeek-R1, Kimi) are frequently hitting hardcoded 30-second streaming watchdog timeouts and are requesting configurable thresholds.
*   **Codex-vs-Pi Runtime Parity ([Issue #80171](https://github.com/openclaw/openclaw/issues/80171)):** 11 comments. A broader RFC tracking the transition of OpenAI agent turns from the Pi runtime to the Codex runtime.

## 5. Bugs & Stability
Stability remains a concern, particularly around memory handling, gateway hangs, and channel reliability. 
*   **Critical / Gateway Hanging:** The `active-memory` plugin can block replies and overload multi-agent gateways ([Issue #72015](https://github.com/openclaw/openclaw/issues/72015)). Similarly, stuck processing sessions are detected but never aborted, requiring manual gateway restarts ([Issue #71127](https://github.com/openclaw/openclaw/issues/71127)).
*   **Channel Reliability (Slack, WhatsApp, Telegram):** Several high-activity bugs report silent message loss or delivery failures. Slack thread sessions generate responses but fail to deliver them to the API ([Issue #78061](https://github.com/openclaw/openclaw/issues/78061)). WhatsApp group replies are being silently suppressed due to a missing default ([Issue #80669](https://github.com/openclaw/openclaw/issues/80669)).
*   **Configuration Regressions:** A fresh-session `[object Object]` hallucination regression persists ([Issue #70734](https://github.com/openclaw/openclaw/issues/70734)), and safeguard compaction ignores custom model configs ([Issue #57901](https://github.com/openclaw/openclaw/issues/57901)).
*   *Fix Status:* While bugs are actively being reported, fix PRs (like [PR #60830](https://github.com/openclaw/openclaw/pull/60830) for Telegram routing) are largely sitting in the "needs-real-behavior-proof" triage state, awaiting maintainer validation.

## 6. Feature Requests & Roadmap Signals
User requests today heavily lean into multi-agent orchestration and UI improvements:
*   **Voice Parity for Mac App ([Issue #71195](https://github.com/openclaw/openclaw/issues/71195)):** Requesting OpenAI Realtime (speech-to-speech) for Mac Talk Mode to match the sub-second latency of the Twilio voice-call plugin. 
*   **Skill Setup Hooks ([Issue #80213](https://github.com/openclaw/openclaw/issues/80213)):** +4 👍. A highly requested feature to allow skill authors to define custom post-install scripts, moving beyond current predefined install types.
*   **Isolated Browser Instances ([Issue #37487](https://github.com/openclaw/openclaw/issues/37487)):** Users want per-agent isolated browser instances with individual proxy support for concurrent web-browsing tasks.
*   *Prediction:* The next version will likely focus heavily on solidifying the Codex runtime migration, expanding the Context Engine plugin API (`interceptCompaction`), and addressing the vocal demand for custom skill setup scripts.

## 7. User Feedback Summary
The overarching sentiment from power users is a mix of excitement for the project's rapid feature expansion and frustration with day-to-day operational stability. Multi-agent setups—a core selling point of OpenClaw—are currently a major source of pain, suffering from cross-contamination in the "dreaming" memory pipeline ([Issue #65374](https://github.com/openclaw/openclaw/issues/65374)) and quadratic token cost scaling ([Issue #72629](https://github.com/openclaw/openclaw/issues/72629)). Additionally, users performing self-hosting or cross-machine management are upset by the removal of the Chrome extension browser relay without a viable cross-network replacement ([Issue #53599](https://github.com/openclaw/openclaw/issues/53599)). 

## 8. Backlog Watch
The OpenClaw maintainer team is facing a severe review bottleneck. There are hundreds of open PRs, many dating back to early March 2026, that are stuck in triage:
*   **Long-standing PRs needing attention:** Foundational fixes like backend provider failover for UNAVAILABLE errors ([PR #69542](https://github.com/openclaw/openclaw/pull/69542), open since April 21) and ACP session task persistence ([PR #43573](https://github.com/openclaw/openclaw/pull/43573), open since March 12) remain unmerged.
*   **Stale Bugs:** The session lane starvation bug—where followup drains block inbound dispatch for up to 30 minutes ([Issue #54488](https://github.com/openclaw/openclaw/issues/54488))—has been open since March 25 without a known fix, representing a critical reliability risk for heavy users.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report analyzing the open-source AI agent and personal assistant ecosystem based on the May 13, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by rapid iteration, aggressive architectural refactoring, and a strong push toward multi-modal, multi-channel autonomy. Projects are moving beyond simple chat interfaces, focusing heavily on standardized multi-agent communication protocols, persistent memory architectures, and deep integrations with enterprise and everyday messaging platforms (Discord, Telegram, WeChat, Slack). However, this high velocity is introducing significant operational friction, with many core frameworks currently struggling to balance massive feature expansions with backend stability, provider parity, and maintainer review bandwidth. 

### 2. Activity Comparison

| Project | Issues (24h) | Pull Requests (24h) | Merged/Closed PRs | Release Status | Health Score & Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | 49 | **v2026.5.12-beta.2** | ⚠️ **Under Strain** / 5/10<br>Severe review bottleneck; high bug volume. |
| **ZeroClaw** | 13 | 50 | 18 | None (Accumulating) | ✅ **Healthy** / 8.5/10<br>Active refactoring; fast community turnaround. |
| **IronClaw** | ~25 | 50 | 25 | v0.28.1 (May 11) | ✅ **Healthy** / 8/10<br>1:1 merge ratio; rapid architectural overhaul. |
| **LobsterAI** | 0 | 25 | 25 | Imminent (Staging) | ✅ **Healthy** / 8/10<br>Zero community noise; focused internal sprint. |
| **CoPaw** | 31 | 39 | 26 | **v1.1.7-beta.1** | ✅ **Active/Stable** / 7.5/10<br>High velocity, actively triaging regressions. |
| **NanoBot** | 8 | 19 | 11 | None | ✅ **Healthy** / 8/10<br>Highly responsive maintainers; efficient merging. |
| **NanoClaw** | 5 | 19 | 3 | None | 🟡 **Moderate** / 7/10<br>High engagement, but heavy reliance on OneCLI. |
| **PicoClaw** | 17 | 17 | 4 | Nightly | 🟡 **Moderate** / 7/10<br>Strong edge/hardware focus; minor stability bugs. |
| **Hermes Agent**| ~42 | ~32 | 18 | v0.13.0 (Pre-May 7)| 🟡 **Moderate** / 7/10<br>Aggressive fixes, but severe provider validation bugs.|
| **NullClaw** | 1 | 2 | 0 | None | 🟡 **Dormant/Stable** / 6.5/10<br>Quiet; awaiting maintainer review on core PRs. |
| **Moltis** | 1 | 0 | 0 | None | 🔻 **Dormant** / 5/10<br>Minimal activity; installation blockers ignored. |
| **ZeptoClaw** | 0 | 3 | 1 | None | 🔻 **Dormant** / 5/10<br>Maintained purely via automated dependency bots. |
| **TinyClaw** | 0 | 0 | 0 | None | 🔻 **Inactive** / 0/10<br>Zero activity. |

### 3. OpenClaw's Position
*   **Advantages:** OpenClaw remains the undisputed core reference implementation with the largest absolute volume of community activity (500 issues/PRs daily). Its multi-agent "dreaming" memory pipeline and Context Engine (`interceptCompaction`) represent the most advanced agentic capabilities in the space today.
*   **Technical Approach:** Unlike leaner alternatives, OpenClaw is deeply complex, attempting to provide a monolithic, all-in-one orchestration layer (the "Codex" runtime) across every major messaging channel.
*   **Community Size & Risks:** While its community is massive, OpenClaw is currently a victim of its own success. With 428 open issues and 451 open PRs, it is experiencing a severe triage bottleneck. Peers like IronClaw and ZeroClaw are executing much faster (1:1 merge ratios), leaving OpenClaw at risk of stalling due to unresolved merge conflicts and unreviewed critical backend failovers.

### 4. Shared Technical Focus Areas
Several key requirements are emerging simultaneously across independent projects, highlighting broader industry shifts:
*   **Streaming Observability:** Users are frustrated with synchronous, blocking agents. *NanoBot (SSE streaming), CoPaw (Messenger streaming), and PicoClaw (HTTP API streaming)* are all actively demanding/requesting real-time token streaming and tool-execution progress so users don't assume the bot has crashed.
*   **Multi-Channel Media Delivery:** Text-only chat is no longer acceptable. *ZeroClaw, NanoClaw, and PicoClaw* all face high-priority bugs or active PRs trying to reliably handle image generation, processing, and delivery across Discord, WhatsApp, and Telegram without leaking raw `[IMAGE: file.png]` markers to end-users.
*   **Privacy & Local Search Autonomy:** To bypass paywalls and CAPTCHAs, there is a strong push away from third-party APIs. Both *Hermes Agent and ZeroClaw* have highly active community requests demanding SearXNG integration for self-hosted, privacy-focused web searching.
*   **Model Provider Resiliency:** As LLM providers fragment, frameworks must handle provider-specific quirks. *Hermes Agent, NanoBot, and CoPaw* are all actively dealing with high-severity bugs related to provider context limits, failover logic, and integrating new "thinking" models (e.g., DeepSeek V4, Volcengine, Kimi).

### 5. Differentiation Analysis
*   **Target Hardware & Environment:** **PicoClaw** uniquely differentiates itself by optimizing for edge computing and embedded hardware (Raspberry Pi, NXP i.MX93, Android), offering native ARM64 builds. In contrast, **LobsterAI** and **IronClaw** are heavily focused on desktop-grade isolation (Tauri/Electron UIs, dedicated agent working directories).
*   **Architectural Philosophy:** **IronClaw** ("Reborn" initiative) and **ZeroClaw** are aggressively modularizing their core loops, treating capabilities like memory as userland packages. Conversely, **NanoClaw** is leaning into deep integration via the OneCLI dependency, which is currently causing friction for users wanting a standalone tool.
*   **Agentic Protocol Focus:** While most projects are focused on human-to-agent interaction, **NullClaw** stands out for its focus on the Agent-to-Agent (a2a) protocol, specifically optimizing for native-speed multi-agent interoperability.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators & Architectural Movers (ZeroClaw, IronClaw, LobsterAI, NanoBot, CoPaw):** These projects show high merge-to-open ratios and clear roadmaps. They are swiftly refactoring tooling, rate-limiting, and memory systems. LobsterAI and IronClaw are preparing for major v2/v0.28+ desktop releases.
*   **Tier 2: High Volume / High Friction (OpenClaw, Hermes Agent):** These projects have massive traction but are bogged down by operational bugs, provider API changes, and overburdened maintainers. They are stabilizing, but struggling against the tide of their own complexity.
*   **Tier 3: Edge/Container Niche (PicoClaw, NanoClaw):** Healthy momentum, but currently focused on specific operational issues (Docker setups, sandbox escapes, ARM compilation) rather than broad architectural shifts.
*   **Tier 4: Maintenance Mode (NullClaw, Moltis, ZeptoClaw, TinyClaw):** Low to zero human momentum. Surviving primarily on automated dependency updates or stagnant PRs awaiting review.

### 7. Trend Signals
*   **The Rise of Autonomous "Dreaming" & Background Tasks:** Developers are moving away from pure stateless request/response loops. Projects like **LobsterAI** (Dreaming memory consolidation) and **CoPaw** (LongTaskTool) signal a trend toward agents that perform background cron-based memory organization and long-running autonomous loops.
*   **Security & Sandbox Hardening:** As agents are granted more control over local file systems and browsers, security is becoming a priority. **OpenClaw** is hardening admin scopes, **PicoClaw** is patching local sandbox escapes, and **CoPaw/ZeroClaw** are implementing strict guard rails and rate limiting for tool execution.
*   **Onboarding & First-Mile Friction:** A recurring theme across **IronClaw**, **NanoClaw**, and **Moltis** is user drop-off during initial setup. Complex Docker configurations, missing UI directories, and broken OAuth flows (especially Google Sheets/Gmail) indicate that projects must simplify local deployment or risk losing users to managed/SaaS alternatives.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-13

## 1. Today's Overview
NanoBot demonstrated exceptionally high development velocity today, with 19 pull requests updated—11 of which were successfully merged—and 8 issues processed. The project is currently in an active architectural refinement and expansion phase. Maintainers and community contributors are heavily focused on improving system stability (e.g., provider failover, dead code removal) and expanding integration capabilities. The high merge rate indicates a healthy, responsive maintainer team efficiently reviewing and shipping community and internal contributions.

## 2. Releases
No new official releases were published today. The project appears to be consolidating recent features and fixes for an upcoming release.

## 3. Project Progress
Significant structural and functional advancements were merged today:
*   **Architectural Refactoring:** The codebase received major cleanups. PR [#3757](https://github.com/HKUDS/nanobot/pull/3757) removed the `ask_user` tool in favor of natural conversation flow, and PR [#3729](https://github.com/HKUDS/nanobot/pull/3729) overhauled the tool system into a self-describing plugin architecture, dramatically improving extensibility. Dead code was purged via [#3755](https://github.com/HKUDS/nanobot/pull/3755).
*   **Model & Provider Stability:** A major contribution merged was the Model Failover system ([#3756](https://github.com/HKUDS/nanobot/pull/3756) - *Note: fast turnaround*), allowing automatic fallback models on failure. Support for VolcEngine providers was fixed ([#3738](https://github.com/HKUDS/nanobot/pull/3738)), and AWS Bedrock tool history handling was corrected ([#3758](https://github.com/HKUDS/nanobot/pull/3758)).
*   **Multi-Tenancy:** The WebUI was upgraded to support multi-tenant accounts with per-user state isolation ([#3749](https://github.com/HKUDS/nanobot/pull/3749)).
*   **Channel Fixes:** WeChat Work (WeCom) file naming was fixed ([#3751](https://github.com/HKUDS/nanobot/pull/3751)), SSRF guard recovery was softened to prevent turn abortions ([#3635](https://github.com/HKUDS/nanobot/pull/3635)), and Feishu topic isolation was made configurable ([#3747](https://github.com/HKUDS/nanobot/pull/3747)).

## 4. Community Hot Topics
*   **DeepSeek V4 Compatibility (High Activity):** Multiple issues ([#3753](https://github.com/HKUDS/nanobot/issues/3753), [#3754](https://github.com/HKUDS/nanobot/issues/3754), [#3760](https://github.com/HKUDS/nanobot/issues/3760)) were opened regarding the `deepseek-v4-flash` model. Users are experiencing critical integration friction regarding how the framework handles `reasoning_content` and thinking mode. 
*   **Team Collaboration Memory:** Issue [#3744](https://github.com/HKUDS/nanobot/issues/3744) asks a vital architectural question: *How does NanoBot handle USER.md and MEMORY.md when multiple IM users share the same agent?* This highlights a growing need for clear documentation or features around multi-user session isolation.
*   **Dynamic Model Switching:** Issue [#3742](https://github.com/HKUDS/nanobot/issues/3742) requests a `/model` slash command to dynamically switch models during a session (e.g., if a provider experiences network issues).

## 5. Bugs & Stability
*   **Severity: High:** DeepSeek V4 reasoning_content injection ([#3760](https://github.com/HKUDS/nanobot/issues/3760), [#3753](https://github.com/HKUDS/nanobot/issues/3753)) causes immediate 400 Bad Request errors upon conversing. *Fix status: Unresolved, but the merged Model Failover feature (#3756) may provide temporary relief.*
*   **Severity: Medium:** Context loss on task interruption ([#3689](https://github.com/HKUDS/nanobot/issues/3689)) where the agent loses track of the ongoing test when interrupted by the user.
*   **Severity: Medium:** WhatsApp voice transcription bug ([#3752](https://github.com/HKUDS/nanobot/pull/3752)) where the LLM sees a residual file tag and falsely claims it cannot process audio. *Fix status: PR Open (#3752).*
*   **Severity: Low:** VolcEngine API parameter conflict. *Fix status: Merged ([#3738](https://github.com/HKUDS/nanobot/pull/3738)).*

## 6. Feature Requests & Roadmap Signals
*   **Multi-Step Agentic Tasks:** The open PR for `LongTaskTool` ([#3460](https://github.com/HKUDS/nanobot/pull/3460)) signals an upcoming capability for complex, autonomous agent loops.
*   **Real-time Feedback:** Requests for streaming tool progress via SSE ([#3745](https://github.com/HKUDS/nanobot/pull/3745)) and displaying model reasoning/thought processes in the CLI ([#3655](https://github.com/HKUDS/nanobot/pull/3655)) are actively being developed.
*   **Provider Expansions:** PRs like adding Atomic Chat as a local provider ([#3750](https://github.com/HKUDS/nanobot/pull/3750)) and dynamic model failover indicate the project is moving toward a highly resilient, provider-agnostic future.

## 7. User Feedback Summary
Users are deploying NanoBot in complex, multi-platform environments (WhatsApp, Feishu, WeChat Work, Codex) but are encountering friction with provider-specific quirks, specifically with newer "thinking" models like DeepSeek V4. The community is highly technical, often providing deep-level API error logs and even submitting targeted fixes (e.g., WeCom filename fix). There is notable excitement around agent autonomy, but users need better interrupt/resume mechanisms as agents occasionally get stuck in loops.

## 8. Backlog Watch
*   **PR #3460 (LongTaskTool):** Open since late April. Given the recent merge of the self-describing tool architecture ([#3729](https://github.com/HKUDS/nanobot/pull/3729)), this PR will likely require a rebase but remains a highly anticipated feature.
*   **Issue #3744 (Multi-user Memory):** Requires maintainer input. As multi-tenant WebUI accounts were just merged, defining how memory isolation works across shared chat channels is becoming an urgent architectural bottleneck.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-13

## 1. Today's Overview
Hermes Agent experienced a highly active day with 100 total issue and pull request updates, indicating strong community engagement and rigorous ongoing development. A significant portion of today's activity (32 open PRs and 42 open issues) highlights that maintainers and contributors are aggressively tackling platform stability—especially concerning third-party provider integrations, containerized deployments, and streaming protocols. While there are several high-severity bugs affecting core functionality today, the maintainer team (led heavily by `teknium1`) is actively merging fixes and documentation updates. Overall, the project's velocity is excellent, though users should be aware of intermittent instabilities in the newest gateway adapters.

## 2. Releases
No new releases were published today. The project remains on version `0.13.0` (released prior to 2026-05-07). 

## 3. Project Progress
The team merged 18 pull requests today, showcasing rapid iteration, mostly focused on fixing deployment blockers and improving documentation:
*   **Streaming Stability:** A critical fix for SSE streaming race conditions was merged ([PR #24578](https://github.com/NousResearch/hermes-agent/pull/24578)).
*   **Windows Installation Fixes:** A major blocker for Windows users was resolved by fixing `pip install` extras and bypassing the Microsoft Store Python stub ([PR #24515](https://github.com/NousResearch/hermes-agent/pull/24515), [PR #24543](https://github.com/NousResearch/hermes-agent/pull/24543)).
*   **Tooling Enhancements:** Support for externally managed Camofox browser sessions was merged, allowing seamless integration with existing browser profiles ([PR #24499](https://github.com/NousResearch/hermes-agent/pull/24499)).
*   **MCP & Tool Schemas:** Fixes for Missing Array Items in MCP schemas were merged, preventing 400 errors from OpenAI/Codex when using tools like Scrapling ([PR #24208](https://github.com/NousResearch/hermes-agent/pull/24208)).
*   **Documentation:** Several broken links were fixed and salvaged from stale branches into the main trunk ([PR #24577](https://github.com/NousResearch/hermes-agent/pull/24577), [PR #24576](https://github.com/NousResearch/hermes-agent/pull/24576)).

## 4. Community Hot Topics
*   **Truncation Limits ([Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237)):** With 24 comments, this is the most discussed issue. Users are frustrated by aggressive output length limits that truncate long-form responses mid-stream across CLI and web gateways. 
*   **Context Window Provider Blocks ([Issue #24140](https://github.com/NousResearch/hermes-agent/issues/24140)):** A very active discussion (10 comments) regarding a critical outage where models like MiniMax-M2.7 were completely down because Hermes incorrectly enforced a strict 64,000 token minimum context window, breaking provider fallbacks.
*   **Privacy-Focused Web Search ([Issue #5941](https://github.com/NousResearch/hermes-agent/issues/5941)):** Gaining massive traction with 28 👍 reactions, the community is strongly requesting SearXNG as a default web search provider to break the reliance on third-party APIs like Tavily and Firecrawl.
*   **Multi-Agent Collaboration ([Issue #14853](https://github.com/NousResearch/hermes-agent/issues/14853)):** Discord power users are discussing methods (6 comments) to allow multiple specialized Hermes instances to read each other's message histories in shared channels.

## 5. Bugs & Stability
Today's bug reports heavily center around provider validation logic and gateway deployment edge cases:
*   **[P1] Provider Context Validation Breaking Telegram / Kimi:** The hard 64K context limit is falsely rejecting models that use smaller context windows via OpenRouter ([Issue #24140](https://github.com/NousResearch/hermes-agent/issues/24140)). Furthermore, OpenRouter is returning incorrect 32K limits for `kimi-k2.6` (which actually supports 256K), overriding correct hardcoded defaults and crashing the agent ([Issue #24268](https://github.com/NousResearch/hermes-agent/issues/24268), [Issue #24427](https://github.com/NousResearch/hermes-agent/issues/24427)).
*   **[P2] Docker Volume Chown Loop:** The Chat tab in Docker images is currently unusable due to compounding permission bugs between the TUI, `/opt/data`, and `HOME` inheritance ([Issue #20739](https://github.com/NousResearch/hermes-agent/issues/20739)). *Note: A fix is currently open in [PR #24099](https://github.com/NousResearch/hermes-agent/pull/24099).*
*   **[P2] Google Chat Placeholders:** The Google Chat adapter is outputting raw internal placeholders (e.g., `GC0`, `GC1`) into user-facing messages ([Issue #24567](https://github.com/NousResearch/hermes-agent/issues/24567)). *Note: A fix is proposed in [PR #24582](https://github.com/NousResearch/hermes-agent/pull/24582).*
*   **[P2] OpenAI Credential Rotation:** Soft failures (HTTP 200 with `status=failed`) from GPT-5/Codex aren't triggering the standard credential pool rotation, causing prolonged outages for multi-key setups ([Issue #24159](https://github.com/NousResearch/hermes-agent/issues/24159)).

## 6. Feature Requests & Roadmap Signals
*   **Persistent Sub-agents & Delegation:** Users want a more robust architecture for delegating tasks to persistent, specialized sub-agents rather than relying on the main agent's general context ([Issue #21303](https://github.com/NousResearch/hermes-agent/issues/21303)).
*   **Plugin Registry:** Infrastructure for a distributed plugin system was proposed in [PR #24580](https://github.com/NousResearch/hermes-agent/pull/24580), signaling a shift toward an open ecosystem similar to OpenAI's GPT store.
*   **Groq Provider Integration:** A highly requested (though informal) feature request to add Groq as a native provider for high-speed, low-cost API usage ([Issue #24512](https://github.com/NousResearch/hermes-agent/issues/24512)).
*   **Prediction:** Based on the current volume of fixes, the next minor release (v0.13.1) will almost certainly focus on hardening the provider context-validation logic (specifically OpenRouter/Kimi integrations) and fixing Docker permission bugs.

## 7. User Feedback Summary
The community is actively pushing Hermes Agent into multi-agent and self-hosted territories. Users love the multi-platform gateway support (Telegram, Discord, QQ Bot) but are expressing sharp dissatisfaction with the "one-size-fits-all" 64K token context minimum, which breaks cheaper/smaller models. There is also clear frustration regarding packaged installers (Homebrew, Windows installer), where missing UI directories (`ui-tui`) or bad Python environment paths cause immediate crashes for new users. Data-loss fears were also highlighted when a user reported the `hermes update` command triggering a `git reset --hard` that wiped their custom bot configurations ([Issue #24541](https://github.com/NousResearch/hermes-agent/issues/24541)).

## 8. Backlog Watch
*   **[Open WebUI Tool Progress](https://github.com/NousResearch/hermes-agent/issues/5352):** Open since early April with 3 👍, users still cannot see real-time tool execution progress when using Hermes via Open WebUI. This needs maintainer triage.
*   **[Custom LLM Gateway Streaming Failures](https://github.com/NousResearch/hermes-agent/issues/24523):** Tool-heavy turns fail when using custom streaming chat-completions gateways. No PR is attached yet.
*   **[macOS Intel CUA Driver](https://github.com/NousResearch/hermes-agent/issues/24530):** The computer-use install command is broken for Intel Mac users due to a missing asset resolution step. Requires a patch to the download logic.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-13

## 1. Today's Overview
PicoClaw shows robust development momentum as an open-source AI agent framework, maintaining active daily iterations on its `v0.2.8` development cycle. Activity remains high with 17 issues and 17 pull requests updated in the past 24 hours, resulting in a new nightly build. The community is highly engaged in expanding multi-modal capabilities, deepening integrations with messaging channels (like WhatsApp and Telegram), and hardening the agent's local execution sandbox. While contributors are successfully driving new features—such as Gemini web search and multi-provider streaming—core stability remains a clear focus, with multiple high-priority bug fixes currently under review. Overall, the project displays a healthy balance between aggressive feature expansion and necessary architectural stability maintenance.

## 2. Releases
- **[nightly: Nightly Build](https://github.com/sipeed/picoclaw/releases/tag/nightly)**: Automated build for `v0.2.8-nightly.20260512.777269b4`. This tracks the `main` branch and incorporates the latest merged PRs (including documentation updates and CLI fixes), though it may be unstable.

## 3. Project Progress
Four pull requests were successfully merged/closed today, advancing the project's documentation and CLI reliability:
- **[PR #2505](https://github.com/sipeed/picoclaw/pull/2505) [CLOSED]**: Improved the embedding process of workspace files for the CLI onboard process, fixing a bug where vestigial files persisted in the `picoclaw` binary.
- **[PR #2490](https://github.com/sipeed/picoclaw/pull/2490) [CLOSED]**: Fixed the CLI onboard advisory to correctly reflect the v0.2.5+ configuration and security file setup.
- **[PR #2854](https://github.com/sipeed/picoclaw/pull/2854) [CLOSED]**: Added news documentation for the LicheeRV-Claw AliExpress hardware launch, signaling ongoing commercial hardware synergy.
- **[PR #2852](https://github.com/sipeed/picoclaw/pull/2852) [CLOSED]**: Documented the new `evolution` config block and exposed agent self-evolution settings in the Web UI.

Active development is heavily focused on the Web API/Config layers ([PR #2831](https://github.com/sipeed/picoclaw/pull/2831), [PR #2832](https://github.com/sipeed/picoclaw/pull/2832), [PR #2833](https://github.com/sipeed/picoclaw/pull/2833)) and rich media tooling.

## 4. Community Hot Topics
The most actively discussed items reveal a strong community appetite for **streaming outputs**, **hardware flexibility**, and **secure credential management**:
- **[Issue #2513](https://github.com/sipeed/picoclaw/issues/2513) (9 comments)**: Gateway startup abnormalities. Users are actively troubleshooting daemon startup sequences.
- **[Issue #1950](https://github.com/sipeed/picoclaw/issues/1950) & [Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) (8 & 6 comments)**: Heavy demand for Web Chat and HTTP API streaming output support, indicating that synchronous requests are a bottleneck for user-facing applications.
- **[Issue #2444](https://github.com/sipeed/picoclaw/issues/2444) (5 comments, 👍 2)**: Requesting a secure, centralized way to store MCP server environment secrets in `.security.yml` rather than exposing them in standard configs.
- **[Issue #2625](https://github.com/sipeed/picoclaw/issues/2625) (4 comments, 👍 1)**: Embedded/Edge computing users are requesting pre-compiled ARM64 builds with WhatsApp support natively included, highlighting PicoClaw's popularity on devices like the Raspberry Pi Zero.

## 5. Bugs & Stability
Several critical bugs have been identified, though the community has swiftly responded with open fix PRs:
- **High Severity: Gateway Crash Loop ([Issue #2720](https://github.com/sipeed/picoclaw/issues/2720))**: The singleton PID check doesn't verify process identity. If the OS reuses a stale PID, PicoClaw enters a crash loop. *Fix available in [PR #2813](https://github.com/sipeed/picoclaw/pull/2813).*
- **High Severity: Sandbox Escape ([Issue #2688](https://github.com/sipeed/picoclaw/issues/2688))**: The `find /` command can enumerate paths outside the workspace sandbox, posing a local security risk. *Fix available in [PR #2693](https://github.com/sipeed/picoclaw/pull/2693).*
- **Medium Severity: v0.2.8 Channel Initialization ([Issue #2742](https://github.com/sipeed/picoclaw/issues/2742))**: Gateway starts with no channels active in the latest v0.2.8 release.
- **Medium Severity: Android Certificate Verification ([Issue #2694](https://github.com/sipeed/picoclaw/issues/2694))**: `x509` certificate verification fails when running PicoClaw via ADB shell on Android.
- **Low Severity: Exec Safety Guard ([PR #2858](https://github.com/sipeed/picoclaw/pull/2858))**: Literal Markdown backticks inside quoted heredoc bodies incorrectly trigger the shell `exec` safety guard.

## 6. Feature Requests & Roadmap Signals
Recent feature requests and open PRs point toward a roadmap focused on **multi-modal rich delivery** and **broadening LLM ecosystem support**:
- **Rich Media Delivery**: [Issue #2855](https://github.com/sipeed/picoclaw/issues/2855) and [PR #2856](https://github.com/sipeed/picoclaw/pull/2856) aim to upgrade the `message` tool from text-only to support media attachments (specifically targeting Telegram). Expect this to be a flagship feature in the next stable release.
- **Extended AI Provider Support**: PicoClaw is rapidly expanding its local and cloud LLM capabilities. Open PRs look to add Intel OpenVINO for local hardware acceleration ([PR #2703](https://github.com/sipeed/picoclaw/pull/2703)), Gemini Web Search grounding ([PR #2763](https://github.com/sipeed/picoclaw/pull/2763)), and Xiaomi Mimo multi-modal reasoning ([PR #2755](https://github.com/sipeed/picoclaw/pull/2755)).
- **Advanced Context Management**: Users are asking for cache-aware infinite context and cross-session memory inspired by plugins like `magic-context` ([Issue #2774](https://github.com/sipeed/picoclaw/issues/2774)). Meanwhile, [PR #2781](https://github.com/sipeed/picoclaw/pull/2781) optimizes token usage by not re-sending the skill catalog on every tool iteration.

## 7. User Feedback Summary
Users are deploying PicoClaw heavily on edge hardware (Raspberry Pi, NXP i.MX93 EVK) and Android environments, emphasizing the need for highly portable, resource-efficient builds. Configuration management is a notable friction point; users cite issues with outdated example configs ([Issue #2771](https://github.com/sipeed/picoclaw/issues/2771)) and confusion during the transition from source builds to the launcher system ([Issue #2753](https://github.com/sipeed/picoclaw/issues/2753)). However, the tight integration with everyday messaging platforms (WhatsApp, Telegram) is highly praised, with the main user desire being the unification of text and media workflows in agent tasks.

## 8. Backlog Watch
Several important issues and PRs are marked as `stale` or are awaiting maintainer review despite significant community impact:
- **[PR #2491](https://github.com/sipeed/picoclaw/pull/2491)**: Adds highly requested session management commands (`/status`, `/compact`, `/new`). Open since mid-April and vital for long-running agent context management.
- **[Issue #1757](https://github.com/sipeed/picoclaw/issues/1757)**: Channel errors when executing scheduled (cron) hourly tasks on edge devices (Raspberry Pi Zero). 
- **[Issue #2698](https://github.com/sipeed/picoclaw/issues/2698) [CLOSED]**: Request to integrate "Mission Control" (currently OpenClaw exclusive) into PicoClaw, indicating users want a centralized UI for agent oversight.
- **[Issue #2695](https://github.com/sipeed/picoclaw/issues/2695)**: Requesting clear documentation for the `libpicolaw.so` Android library, crucial for mobile ecosystem adoption.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest: 2026-05-13

## 1. Today's Overview
NanoClaw experienced a highly active development day on May 13, 2026, driven by a substantial influx of 19 updated pull requests and 5 new issues, indicating robust community engagement. The project is currently in an active phase of stabilization and integration, with contributors focusing heavily on squashing bugs across channel adapters (Discord, WhatsApp, Slack) and refining the tool's core dependency on OneCLI. Although no new software versions were released today, the sheer volume of open, high-quality PRs suggests that maintainers are actively reviewing a major batch of improvements that will likely culminate in a significant upcoming release. Overall, project health appears strong, characterized by detailed issue reporting and structured community contributions.

## 2. Releases
No new releases were recorded today. The project's latest stable version remains unchanged as maintainers process the current backlog of open pull requests.

## 3. Project Progress
Three pull requests were closed/merged today, advancing the project's stability and operational hygiene:
*   **[PR #2425](https://nanocoai/nanoclaw/pull/2425) [CLOSED]:** Container CLI and package versions were bumped to their latest stable releases, ensuring dependencies remain secure and up-to-date.
*   **[PR #2422](https://nanocoai/nanoclaw/pull/2422) [CLOSED]:** A new Google authentication foundation skill (`/add-google-auth`) was merged, introducing shared OneCLI Google-OAuth prerequisites along with diagnostic MCP tools to pave the way for future Google Workspace integrations.
*   **[PR #1912](https://nanocoai/nanoclaw/pull/1912) [CLOSED]:** The fallback container output parser in `runContainerAgent` was patched to handle empty `stdout` scenarios, preventing silent crashes and ensuring clear error surfacing.

## 4. Community Hot Topics
*   **OneCLI Architecture Debate:** A significant discussion was sparked by [Issue #2437](https://nanocoai/nanoclaw/issues/2437), where a user questioned NanoClaw's reliance on the OneCLI dependency. Given that NanoClaw is marketed as a lightweight alternative to OpenClaw, the community is debating whether OneCLI introduces unnecessary friction to the simple `pnpm run dev` deployment experience. 
*   **Google Workspace Expansion:** The closing of the Google Auth foundation skill ([PR #2422](https://nanocoai/nanoclaw/pull/2422)) and the simultaneous opening of a Google Drive integration skill ([PR #2430](https://nanocoai/nanoclaw/pull/2430)) highlight a strong community push toward transforming NanoClaw into a deeply integrated personal assistant.

## 5. Bugs & Stability
Several high-severity bugs regarding core infrastructure and channel integrations were reported today. Fortunately, the community response was immediate, with fix PRs submitted almost concurrently for the most critical issues:

1.  **High Severity: OneCLI Exposed Admin API & Postgres** 
    *   **Issue:** [Issue #2433](https://nanocoai/nanoclaw/issues/2433) reported that OneCLI auto-detects the `docker0` bridge IP and dangerously exposes the admin API and Postgres database to the network, not just the proxy gateway.
    *   **Status:** Fix actively under review in [PR #2434](https://nanocoai/nanoclaw/pull/2434), which restricts bindings to the loopback interface.
2.  **High Severity: Silent Message Delivery Failures** 
    *   **Issue:** [Issue #2423](https://nanocoai/nanoclaw/issues/2423) revealed that failed outbound messages (due to API errors, rate limits, or filters) are marked as `failed` in the database but are never communicated back to the agent, causing silent message loss.
    *   **Status:** No fix PR submitted yet.
3.  **Medium Severity: Discord & WhatsApp Attachment Handling** 
    *   **Issue:** [Issue #2426](https://nanocoai/nanoclaw/issues/2426) noted that the LLM cannot view Discord images, only seeing `[image: file.png]`. Similarly, WhatsApp media routing is broken.
    *   **Status:** Fixes proposed in [PR #2438](https://nanocoai/nanoclaw/pull/2438) (Discord) and [PR #2429](https://nanocoai/nanoclaw/pull/2429) (WhatsApp).
4.  **Medium Severity: Container Mounts & Webhook Port Conflicts** 
    *   **Issues:** Containers surviving daemon restarts with missing `/workspace/agent` binds ([Issue #2424](https://nanocoai/nanoclaw/issues/2424)) and fatal webhook crashes due to hardcoded port 3000.
    *   **Status:** Fixes proposed in [PR #2432](https://nanocoai/nanoclaw/pull/2432) and [PR #2435](https://nanocoai/nanoclaw/pull/2435), respectively.

## 6. Feature Requests & Roadmap Signals
Today's issues and PRs outline a clear trajectory toward enhancing multi-platform versatility and deployment flexibility:
*   **CLI Mount Management:** [PR #2432](https://nanocoai/nanoclaw/pull/2432) introduces `add-mount` and `remove-mount` verbs to the CLI, improving the agent container configuration workflow.
*   **Smarter Channel Routing:** [PR #2431](https://nanocoai/nanoclaw/pull/2431) introduces conditional threading for Slack, enabling top-level messaging for DMs while preserving threads in shared channels.
*   **Alternative Container Runtimes:** [PR #2421](https://nanocoai/nanoclaw/pull/2421) adds support for Fedora Podman, signaling an upcoming expansion beyond standard Docker environments.
*   **Database/Cloud Skill Triggers:** [PR #2428](https://nanocoai/nanoclaw/pull/2428) broadens gateway skill descriptions to trigger on databases and cloud platforms, laying the groundwork for DevOps-centric agent capabilities.

## 7. User Feedback Summary
Users are heavily utilizing NanoClaw as a multi-channel autonomous agent but are experiencing friction with infrastructure and deployment edge cases. 
*   **Use Cases:** The user base is actively deploying NanoClaw across Discord, Slack, WhatsApp, and Telegram, heavily utilizing containerized agent groups. 
*   **Pain Points:** A primary frustration is the Docker/OneCLI setup experience; users want a self-contained, lightweight tool and feel that external database/API dependencies bloat the installation ([Issue #2437](https://nanocoai/nanoclaw/issues/2437)). Additionally, silent failures (like dropped Telegram messages in [Issue #2423](https://nanocoai/nanoclaw/issues/2423)) erode trust in agent autonomy, indicating a strong need for observable error routing.

## 8. Backlog Watch
Maintainers should allocate time to address the aging PRs that received updates today but have been stalled for weeks:
*   **[PR #1845](https://nanocoai/nanoclaw/pull/1845):** An important database fix to normalize SQLite timestamps to ISO 8601. Open since April 18, merging this is critical for cross-channel data consistency.
*   **[PR #1545](https://nanocoai/nanoclaw/pull/1545):** A community-suggested `/add-model-config` skill allowing per-invocation model and effort configuration. Open since March 30, this PR remains highly relevant to users wanting fine-grained control over LLM costs and performance.
*   **[PR #1913](https://nanocoai/nanoclaw/pull/1913) & [PR #1917](https://nanocoai/nanoclaw/pull/1917):** Two overlapping PRs open since April 22 addressing the renaming of `@Andy` trigger references. Maintainers should evaluate and merge the superior implementation to close out this lingering issue.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the project digest for NullClaw for May 13, 2026.

### 1. Today's Overview
NullClaw is currently demonstrating active, maintenance-focused development with no new official releases in the last 24 hours. The project is drawing contributor attention toward core infrastructure reliability and gateway integrations, as evidenced by two substantial open Pull Requests. The community is actively probing the performance boundaries of the project's protocol implementations. Overall project health appears stable, with contributors working on hardening existing features rather than rushing new versions. 

### 2. Releases
No new releases were recorded in the last 24 hours.

### 3. Project Progress
No Pull Requests were merged or closed today. However, there is active development in the pipeline:
*   **Integration Gateway Expansion:** PR [#912](https://github.com/nullclaw/nullclaw/pull/912) by *Kures* introduces a synchronous `/webhook` endpoint for paired-token workers. This directly addresses a high-priority gap for "Worker Endpoint for nullboiler Dispatch," signaling significant progress in NullClaw's integration and dispatch capabilities.
*   **Connection Stability:** PR [#910](https://github.com/nullclaw/nullclaw/pull/910) by *vernonstinebaker* is advancing a major stability overhaul for Discord and WebSocket gateways. The PR includes watchdog, backoff, interrupt-safe stop, and TLS leak fixes, and claims to have passed rigorous 12-hour soak tests across four distinct architectures (macOS arm64, Linux aarch64, Linux riscv64, and Android aarch64).

### 4. Community Hot Topics
*   **A2A Protocol Performance:** The most notable community interaction today comes from Issue [#913](https://github.com/nullclaw/nullclaw/issues/913), opened by *jacktang*. The user notes that raw NullClaw messaging is faster than the Agent-to-Agent (a2a) protocol implementation. This highlights an underlying community need for native-speed interoperability and suggests that users are heavily utilizing NullClaw in multi-agent architectures. Maintainers have yet to respond with benchmark data.

### 5. Bugs & Stability
No explicit bug reports were opened today, but critical stability enhancements are currently underway:
*   **Gateway/Websocket Flakiness (Fix in Progress):** PR [#910](https://github.com/nullclaw/nullclaw/pull/910) indicates that previous iterations of the Discord/WebSocket gateways suffered from connection instability and TLS leaks. The open PR provides a comprehensive fix, which is currently awaiting merge. 

### 6. Feature Requests & Roadmap Signals
*   **A2A Performance Optimization:** Implicitly requested in Issue [#913](https://github.com/nullclaw/nullclaw/issues/913). If the maintainers validate the latency claims, performance profiling of the a2a protocol will likely become a near-term roadmap priority.
*   **Synchronous Webhooks:** Addressed by PR [#912](https://github.com/nullclaw/nullclaw/pull/912), which points to "HIGH PRIORITY" integration analysis documentation. This suggests the next minor or patch version will heavily feature enhanced external worker dispatch capabilities. 

### 7. User Feedback Summary
User feedback today revolves around performance tuning in agentic frameworks. The specific feedback in Issue [#913](https://github.com/nullclaw/nullclaw/issues/913) reveals a sophisticated user base that is comparing native performance against standardized protocols (a2a). The observation that native messaging is faster than a2a indicates a minor pain point regarding interoperability overhead, though it comes with an implied satisfaction with NullClaw's core messaging speeds.

### 8. Backlog Watch
*   **Maintainer Review Needed:** PRs [#910](https://github.com/nullclaw/nullclaw/pull/910) and [#912](https://github.com/nullclaw/nullclaw/pull/912) both represent massive structural updates (extensive multi-architecture soak tests and high-priority integration gaps, respectively). They currently have zero official comments and require maintainer review to keep development momentum going.
*   **Performance Benchmarking Request:** Issue [#913](https://github.com/nullclaw/nullclaw/issues/913) requires maintainer engagement. Providing official benchmark data regarding the a2a protocol versus raw messaging will help enterprise users make informed architectural decisions.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-13

## 1. Today's Overview
IronClaw is currently experiencing a very high cadence of architectural development, primarily driven by the "Reborn" initiative aimed at modularizing the agent loop and capability frameworks. The project saw exceptional activity in the last 24 hours, with a 1:1 merge ratio (25 open, 25 closed) across 50 active Pull Requests, indicating rapid integration of core infrastructure changes. While the engineering team is heavily focused on backend refactoring and the v2 engine, QA testing of the recently released v0.28.1 has surfaced several critical bugs in channel integrations (Telegram, Gmail) and the UI. Overall, the project is in a state of aggressive architectural iteration, creating some temporary friction in daily user experience. 

## 2. Releases
**Latest Release:** `ironclaw-v0.28.1` (Published 2026-05-11)
* **Added:** 
  * *(channels)* `pairing_approve` tool for Slack binding via chat ([PR #3396](https://github.com/nearai/ironclaw/pull/3396)).
  * *(channels)* WeChat registry artifact metadata ([PR #3386](https://github.com/nearai/ironclaw/pull/3386)).
* **Analysis:** This release acts as a bridge, introducing new channel integrations (WeChat/Slack updates) right as the project begins shifting fundamental architecture toward the "Reborn" framework.

## 3. Project Progress
The closed/merged PRs today heavily feature the **"Reborn" architectural overhaul**, focusing on security, capability isolation, and the new agent loop framework:
* **First-Party Capabilities & Security:** Merged [PR #3538](https://github.com/nearai/ironclaw/pull/3538) to add host-assigned built-in first-party capabilities (echo, time, json). [PR #3505](https://github.com/nearai/ironclaw/pull/3505) and [PR #3506](https://github.com/nearai/ironclaw/pull/3506) landed to envelope untrusted installed-skill prompt contexts and enforce read-only tool ceilings for skills at dispatch.
* **Telegram v2 Stack:** Continued integration of the Reborn Telegram adapter with the closure of payload normalization ([PR #3354](https://github.com/nearai/ironclaw/pull/3354)) and active progress on product adapters ([PR #3355](https://github.com/nearai/ironclaw/pull/3355), [PR #3356](https://github.com/nearai/ironclaw/pull/3356)).
* **Optimizations & Testing:** Closed redundant skill snapshot validation work ([PR #3508](https://github.com/nearai/ironclaw/pull/3508)) and added active skill metadata ordering tests ([PR #3509](https://github.com/nearai/ironclaw/pull/3509)).

## 4. Community Hot Topics
* **Google Suite Auth Failures:** A major frustration for users is broken Google Sheets/Gmail integration via Telegram. [Issue #2229](https://github.com/nearai/ironclaw/issues/2229) (Google Sheets OAuth blocked) has accumulated 11 comments, and [Issue #3319](https://github.com/nearai/ironclaw/issues/3319) (Gmail 400/502 errors) shows users completely blocked from onboarding Gmail via Telegram.
* **Reborn Modularization:** The architectural push led by contributor `serrrfirat` dominates repository discussion. Tasks like shipping the standalone binary ([Issue #3069](https://github.com/nearai/ironclaw/issues/3069), 4 comments) and adding `AgentLoop` implementations ([Issue #3092](https://github.com/nearai/ironclaw/issues/3092), 2 comments) are actively defining the project's future boundaries.
* **Local Setup Discoverability:** [Issue #3500](https://github.com/nearai/ironclaw/issues/3500) highlights a critical UX gap where local users are dropped into a TUI with no indication that a Web UI is available, sparking active discussion and an immediate fix PR ([PR #3510](https://github.com/nearai/ironclaw/pull/3510)).

## 5. Bugs & Stability
* **P1: Telegram & Gmail Conversation Loop Crashes:** The most severe user-facing bug is reported in [Issue #3320](https://github.com/nearai/ironclaw/issues/3320). If Gmail auth fails (which it currently does, per [Issue #3319](https://github.com/nearai/ironclaw/issues/3319)), the IronClaw Telegram bot gets stuck and cannot continue the conversation, even after using the `/clear` command. *(No linked fix PRs yet)*.
* **P1: Broken Telegram Auto-Setup:** QA testing of v0.28.1 found that Telegram no longer sets up automatically from the UI ([Issue #3533](https://github.com/nearai/ironclaw/issues/3533)) and is failing entirely for some instances ([Issue #2902](https://github.com/nearai/ironclaw/issues/2902)).
* **P2: V2 Engine UX Regressions:** The V2 engine has introduced UX friction, including a broken approval flow with unclear prompts ([Issue #2991](https://github.com/nearai/ironclaw/issues/2991)) and HTTP tools being disabled by default without onboarding guidance ([Issue #3034](https://github.com/nearai/ironclaw/issues/3034)).
* **P2: UI Timestamps Bug:** [Issue #3535](https://github.com/nearai/ironclaw/issues/3535) reports that UI chat timestamps are incorrect. *(No linked fix PRs yet)*.
* **Infrastructure:** Nightly E2E tests failed ([Issue #3447](https://github.com/nearai/ironclaw/issues/3447)).

## 6. Feature Requests & Roadmap Signals
* **Userland Memory Capabilities:** A strong architectural signal is the request to model memory as a "userland capability package" ([Issue #3537](https://github.com/nearai/ironclaw/issues/3537)). This aligns with Reborn's goal to allow native memory, mem0, and Honcho to act as pluggable packages.
* **Loop Hooks Framework:** A new issue ([Issue #3523](https://github.com/nearai/ironclaw/issues/3523)) and roadmap ([Issue #3524](https://github.com/nearai/ironclaw/issues/3524)) propose adding first-class inline and async hooks to IronClaw Reborn, suggesting heavy future investment in event-driven extension capabilities.
* **WeChat Documentation:** Now that WeChat is working in v0.28.1, [Issue #3515](https://github.com/nearai/ironclaw/issues/3515) requests official channel documentation.
* **Tooling:** A request was made for a dedicated tool to download logs for easier debugging ([Issue #3534](https://github.com/nearai/ironclaw/issues/3534)).
* *Predictions:* The next version will likely finalize the `ironclaw-reborn` standalone binary, ship the localized script/MCP runtime adapters ([PR #3543](https://github.com/nearai/ironclaw/pull/3543)), and address the current Gmail OAuth channel blocks.

## 7. User Feedback Summary
User sentiment is currently a mix of excitement for new channels (WeChat support) and frustration with core workflow instability. The QA team and early adopters are actively flagging regression bugs in authentication and channel bindings. Users trying to self-host locally are confused by the hidden Web UI ([Issue #3500](https://github.com/nearai/ironclaw/issues/3500)), showing that despite robust backend capabilities, the "first-mile" onboarding experience needs refinement. Extension reliability—specifically Google Sheets and Gmail via Telegram—remains the primary source of user dissatisfaction.

## 8. Backlog Watch
* [Issue #2752](https://github.com/nearai/ironclaw/issues/2752): Database errors during the `onboard` provider step. Flagged as `bug_bash_P1`, this issue has been open since April 20 without a linked fix PR, potentially blocking clean local deployments.
* [Issue #2902](https://github.com/nearai/ironclaw/issues/2902): Telegram consistently not working for the NEAR Foundation instance. Open since April 23, this persists despite the ongoing Telegram V2 PRs.
* [Issue #2991](https://github.com/nearai/ironclaw/issues/2991): The V2 approval flow remains "broken" with unclear prompts since April 27. As the V2 engine becomes the default, fixing this UX logic is critical.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the repository data from 2026-05-13.

### 1. Today's Overview
LobsterAI experienced a high-velocity development day on May 12-13, 2026, characterized by the merging of a massive batch of 25 pull requests into the main branch, indicating a likely release freeze and stabilization sprint. The project saw zero new issue filings and zero active community discussions, suggesting that QA and internal development are currently entirely driving the repository traffic. The focus of today's updates was heavily skewed toward User Interface (UI) polish, cross-platform bug fixes (specifically for macOS and Windows), and AI agent memory consolidation. With no new official releases cut today, the sheer volume of merged code points to an imminent major version bump. Overall, the project demonstrates high maintainer activity and a healthy, rapid iteration cycle.

### 2. Releases
No new official releases were published today. However, PR [#1961](https://github.com/netease-youdao/LobsterAI/pull/1961) (Release/2026.5.11) was closed/merged, indicating that the formal release tagged `2026.5.11` is being staged and should be published to users imminently. 

### 3. Project Progress
A staggering 25 PRs were merged today, advancing several key areas of the application:
*   **Major Version Staging:** The `Release/2026.5.11` branch ([#1961](https://github.com/netease-youdao/LobsterAI/pull/1961)) was merged, bringing "Dreaming memory consolidation" (background memory processing with cron scheduling) and an upgraded Youdao Note Skill.
*   **Multi-Agent Architecture:** Significant foundational work was merged for independent agent environments. Notably, PR [#1904](https://github.com/netease-youdao/LobsterAI/pull/1904) introduced independent working directories for each Agent, and [#1960](https://github.com/netease-youdao/LobsterAI/pull/1960) fixed IM functionality when switching between multiple agents.
*   **UI/UX Overhaul:** Maintainer `fisherdaddy` merged a massive series of UI optimizations ([#1959](https://github.com/netease-youdao/LobsterAI/pull/1959), [#1954](https://github.com/netease-youdao/LobsterAI/pull/1954), [#1937](https://github.com/netease-youdao/LobsterAI/pull/1937), [#1924](https://github.com/netease-youdao/LobsterAI/pull/1924)) affecting the renderer, model select, input fields, and agent layouts.
*   **Artifacts System:** PR [#1958](https://github.com/netease-youdao/LobsterAI/pull/1958) improved the artifacts system to support copying PNG/JPEG images via native APIs and fixed Mermaid chart zoom/scroll anchoring.

### 4. Community Hot Topics
There are no community hot topics to report today. The 26 updated PRs generated zero user comments and zero reactions (👍). All activity was driven by core contributors (`fisherdaddy`, `liuzhq1986`, `liugang519`, `btc69m979y-dotcom`) and automated dependency bots. 

### 5. Bugs & Stability
Several critical cross-platform stability and usability bugs were addressed in today's merge batch:
1.  **High: macOS Voice Input Permission Failure** - macOS users were experiencing silent failures when attempting to use voice input after rejecting the initial accessibility prompt. Addressed in PR [#1952](https://github.com/netease-youdao/LobsterAI/pull/1952) (added toast error feedback) and PR [#1956](https://github.com/netease-youdao/LobsterAI/pull/1956) (implemented 3-tier fallback for triggering dictation via the system menu).
2.  **High: Windows Artifact Rendering in Non-ASCII Paths** - Users with Chinese characters in their Windows file paths (e.g., `C:/Users/.../向日葵.svg`) could not open artifacts in the browser due to a `file://` URL encoding issue. Solved in PR [#1955](https://github.com/netease-youdao/LobsterAI/pull/1955) by utilizing native file system APIs.
3.  **Medium: IM Channel Chat History Timestamps** - Incorrect time display in IM channel chat history was fixed in PR [#1936](https://github.com/netease-youdao/LobsterAI/pull/1936).
4.  **Low: Model Select State Loss** - A bug where the application forgot the last selected default model upon restart was fixed in PR [#1905](https://github.com/netease-youdao/LobsterAI/pull/1905).

### 6. Feature Requests & Roadmap Signals
Due to zero new issues being opened by the community today, there are no explicit user feature requests. However, the merged codebase provides strong roadmap signals:
*   **Advanced AI Memory:** The introduction of "Dreaming memory consolidation" in PR [#1961](https://github.com/netease-youdao/LobsterAI/pull/1961) signals a push toward giving the AI agents persistent, evolving memory states, moving beyond simple context windows.
*   **Desktop-Grade Agent Isolation:** Allowing each agent its own distinct working directory ([#1904](https://github.com/netease-youdao/LobsterAI/pull/1904)) indicates that LobsterAI is transitioning into a multi-tasking environment where agents run as isolated workers.

### 7. User Feedback Summary
No direct user feedback was captured in today's data flow (issues and comments were at 0). However, because the bug fixes specifically targeted non-ASCII path handling on Windows and accessibility permissions on macOS, it is highly likely that the maintainers were responding to user complaints lodged outside of GitHub (e.g., in a Discord community, internal QA trackers, or Chinese social media/forums).

### 8. Backlog Watch
*   **Stale Dependency PRs:** PR [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), an automated `dependabot[bot]` PR to bump Electron from v40.2.1 to v42.0.1, has been left open since April 2, 2026. Upgrading major Electron versions can introduce breaking changes, and the maintainers should prioritize testing and merging this to prevent security debt and frontend stagnation.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-05-13

## 1. Today's Overview
Project activity for Moltis over the last 24 hours remains at a minimal, dormant level. The project recorded zero new or merged pull requests, no new releases, and no closed issues, indicating a temporary pause in active development or maintainer review. The only recorded activity consists of a single open bug report regarding a Proxmox installation script. Overall, the project's current momentum is slow, with community submissions awaiting official engagement. 

## 2. Releases
No new releases were recorded today. There are no breaking changes, feature additions, or migration notes to report.

## 3. Project Progress
There is no tangible project progress to report for May 13, 2026. Zero pull requests were updated, merged, or closed within the last 24 hours. The codebase remains unchanged from the previous day.

## 4. Community Hot Topics
There are no highly active discussions today. The only community interaction is a solitary bug report. 
*   **[Bug]: Proxmox script - LXC Creation fails on 91** ([Issue #993](https://github.com/moltis-org/moltis/issues/993)): Authored by `Thndr`, this is the sole active issue but currently has 0 comments and 0 reactions. It appears the community has not yet rallied around this specific problem, and it awaits maintainer triage.

## 5. Bugs & Stability
One new bug was reported recently and remains active:
*   **[Medium Severity] Proxmox LXC Creation Failure:** Users attempting to deploy Moltis via the Proxmox script are experiencing failures at 91% completion during the LXC creation phase ([Issue #993](https://github.com/moltis-org/moltis/issues/993)). 
    *   *Analysis:* Failures at the very end of an automated container setup usually point to environment-specific variables (like network IP assignments), post-installation script hooks failing to execute, or metadata download timeouts. 
    *   *Status:* Currently open with **no attached fix PRs**.

## 6. Feature Requests & Roadmap Signals
There are no new feature requests or roadmap signals to analyze based on today's data. 

## 7. User Feedback Summary
The only insight into user pain points today comes from the Proxmox deployment issue. This highlights that a segment of the Moltis user base actively self-hosts the AI assistant using Proxmox VE. The specific failure at 91% indicates that users prefer automated, turn-key deployment scripts, but are currently hitting friction points likely caused by recent changes in either the Moltis setup flow or Proxmox's underlying environment.

## 8. Backlog Watch
*   **[Needs Attention] Proxmox Setup Failure:** [Issue #993](https://github.com/moltis-org/moltis/issues/993) requires maintainer triage. Although created on May 11th and updated on May 11th, it has received zero maintainer comments. Given that installation scripts are a user's first interaction with the project, resolving deployment blockers should be prioritized to maintain project health and user retention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-13

## 1. Today's Overview
CoPaw (internally mirrored as QwenPaw in repository URLs) is experiencing a highly active development phase, evidenced by 39 pull requests and 31 issues updated in the past 24 hours. The maintainers are actively merging community and internal contributions (26 PRs closed/merged), while simultaneously managing a steady influx of new bug reports and feature requests. The release of **v1.1.7-beta.1** signals that the project is currently in a stabilization and testing phase. Overall, project health is strong, but the volume of new bug reports related to memory, MCP networking, and multi-agent collaboration suggests the recent feature drops (v1.1.5/1.1.6) introduced regressions that the team is now actively triaging.

## 2. Releases
**v1.1.7-beta.1** was released today.
* **Changes:**
  * **Fix(provider):** Fixed models in the VOLCENGINE Provider (Resolves issues like [#4199](https://github.com/agentscope-ai/QwenPaw/issues/4199) regarding Volcengine parameter handling).
  * **fix(console):** Improved text contrast in the Plan Path UI.
  * **chore(version):** Bumped version to 1.1.7b1.
* **Migration Notes:** Users utilizing the Volcengine provider should upgrade to this beta to resolve model invocation and deep-thinking configuration errors. No breaking core architecture changes were introduced.

## 3. Project Progress
Development today focused heavily on **plugin infrastructure, agent memory, and external tool integrations**. Key merged/closed PRs include:
* **Memory Fix:** PR [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) (merged) explicitly notifies ReMe's file watcher to refresh the vector index after auto memory summary, resolving a critical sync issue.
* **New Plugins:** PR [#4248](https://github.com/agentscope-ai/QwenPaw/pull/4248) added new DashScope-based tool plugins (Qwen-Image, Wan 2.7) and refactored the GPT-Image2 plugin.
* **ACP (Agent Communication Protocol):** Continued rapid iteration with PR [#4197](https://github.com/agentscope-ai/QwenPaw/pull/4197) adding async execution support for `delegate_external_agent`, and PRs [#3589](https://github.com/agentscope-ai/QwenPaw/pull/3589) & [#3340](https://github.com/agentscope-ai/QwenPaw/pull/3340) adopting the official ACP Python SDK.
* **Desktop Client:** Progress on the Tauri 2.x desktop app (PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)) and Windows system tray functionality (PR [#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041)).

## 4. Community Hot Topics
* **MCP Authentication & Timeout Blocking:** Issue [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) generated significant discussion regarding `stream_http` mode MCP calls entirely blocking the agent when receiving a 401 error. PR [#4256](https://github.com/agentscope-ai/QwenPaw/pull/4256) was immediately opened to add OAuth 2.1 PKCE support to address this.
* **Matrix Multi-Agent Loop:** Issue [#4251](https://github.com/agentscope-ai/QwenPaw/issues/4251) highlights a severe architectural gap in the Matrix Team Room where agents enter an ACK mirror loop due to missing lifecycle primitives.
* **Desktop Packaging Issues:** Users are actively struggling with building the packaged desktop client (Issue [#4230](https://github.com/agentscope-ai/QwenPaw/issues/4230)), indicating a need for better official release binaries or documentation for Tauri packaging.

## 5. Bugs & Stability
Ranked by severity:
1. **Severe: MCP Deadlock on 401/404 ([#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227)):** Network errors cause the entire tool execution to hang until timeout. *Fix PR: [#4256](https://github.com/agentscope-ai/QwenPaw/pull/4256).*
2. **Severe: Tool Gate Bypass in Plan Mode:** Agents executing unapproved shell commands before plan confirmation. *Fix PR: [#4198](https://github.com/agentscope-ai/QwenPaw/pull/4198).*
3. **High: Memory Search Failure ([#4220](https://github.com/agentscope-ai/QwenPaw/issues/4220)):** Auto-memory writes to disk but fails to sync to vector index. *Fix PR: [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224).*
4. **High: DashScope Provider 401 Error ([#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159)):** QwenPaw ignores valid `dashscope.json` configs. Currently under investigation.
5. **Medium: Console UI Freezing ([#4213](https://github.com/agentscope-ai/QwenPaw/issues/4213)):** Transmitting large million-token chat histories back to the UI on load causes browser tab crashes.
6. **Medium: Security blocking valid commands ([#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244)):** `shell_evasion_checks.newlines=True` silently blocks multiline commands, breaking agent thought chains.

## 6. Feature Requests & Roadmap Signals
* **Better Command Observability:** Request for an in-chat running-commands panel to kill/extend timeouts ([#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237)). Highly requested for autonomous agent workflows.
* **Chat Streaming for Messengers:** Strong demand to add streaming output to Telegram/Feishu/DingTalk channels ([#4247](https://github.com/agentscope-ai/QwenPaw/issues/4247), [#4228](https://github.com/agentscope-ai/QwenPaw/issues/4228)) to prevent users from thinking the bot is dead.
* **Custom Shell Environments:** Persistent requests ([#712](https://github.com/agentscope-ai/QwenPaw/issues/712), [#3767](https://github.com/agentscope-ai/QwenPaw/issues/3767), [#4103](https://github.com/agentscope-ai/QwenPaw/issues/4103)) to allow choosing login shells (e.g., bash/zsh instead of dash/PowerShell 5) to fix encoding issues and respect user PATHs.
* **Predictions for v1.1.7 Stable:** The stable release will likely integrate OAuth PKCE for MCP, Tauri desktop refinements, and updated Volcengine/DashScope provider logic.

## 7. User Feedback Summary
**Pain Points:** Users are frustrated by silent failures—particularly shell commands being blocked by security checks without notification ([#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244)) and desktop file links not responding ([#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816)). Frontend performance on long conversations is another major bottleneck. 
**Satisfaction & Use Cases:** Users are pushing CoPaw into advanced, long-running autonomous tasks (e.g., cron jobs, multi-agent Matrix rooms, browser automation). The fact that users are utilizing multi-million token contexts shows high trust and dependency on the agent, but also exposes scaling limits in the current frontend/web-socket implementation. 

## 8. Backlog Watch
* **Issue [#4159](https://github.com/agentscope-ai/QwenPaw/issues/4159) (DashScope 401):** 6 comments, active, but no PR attached yet. Given the severity of provider configs being wiped, this needs immediate maintainer resolution.
* **PR [#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813) (Tauri Desktop):** Open since late April. With multiple desktop-specific bugs being reported daily ([#3816](https://github.com/agentscope-ai/QwenPaw/issues/3816), [#4239](https://github.com/agentscope-ai/QwenPaw/issues/4239)), this PR needs a final review and merge to align the desktop ecosystem.
* **Issue [#3499](https://github.com/agentscope-ai/QwenPaw/issues/3499) (Slow API Calls):** An older bug with 6 comments that is still active. Needs performance profiling from the core team.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest**
**Date:** 2026-05-13

### 1. Today's Overview
ZeptoClaw is currently in a state of low user-facing activity but maintains a steady background rhythm of automated maintenance. Over the last 24 hours, the project saw zero new issues and zero new releases, but processed three automated dependency pull requests. The absence of user-created issues or feature requests suggests the current version is highly stable or experiencing a temporary lull in active development. Overall project health appears stable, sustained entirely by automated tooling ensuring dependencies remain up-to-date and secure.

### 2. Releases
No new releases were recorded today. 

### 3. Project Progress
Progress today was strictly limited to automated repository maintenance. One dependency pull request was closed, while two others remain open for review:
*   **Closed:** PR [#574](https://github.com/qhkm/zeptoclaw/pull/574) - Bumped the `taiki-e/install-action` GitHub Actions dependency from 2.75.17 to 2.75.22. 
*   **Open:** PR [#586](https://github.com/qhkm/zeptoclaw/pull/586) - A follow-up PR bumping `taiki-e/install-action` further to version 2.75.29. 
*   **Open:** PR [#585](https://github.com/qhkm/zeptoclaw/pull/585) - Bumped the base Docker image (`debian`) from `cedb1ef` to `109e2c6` (tracking `trixie-slim`).

*Analysis:* The closed PR (#574) was superseded by the newly opened PR (#586), which is standard Dependabot behavior when multiple minor version updates occur in a short timeframe. Updating the Debian base image indicates ongoing housekeeping to ensure the project's containerized environment remains secure and lightweight.

### 4. Community Hot Topics
There are no community hot topics to report for today. Zero user or maintainer comments were posted on today's pull requests, and no user-generated issues were created. The project is currently experiencing a quiet period regarding community engagement.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The automated dependency upgrades currently in the pipeline serve as a preventative measure to maintain baseline stability and security.

### 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap signals were identified in today's data. There are no indications of what the next version might contain from a user-feature perspective.

### 7. User Feedback Summary
User feedback cannot be assessed for this 24-hour period due to a complete lack of new user interactions, issue submissions, or feature requests.

### 8. Backlog Watch
While no "long-unanswered" items were updated today, the current open PRs represent an immediate, minor backlog requiring maintainer attention:
*   **PR [#586](https://github.com/qhkm/zeptoclaw/pull/586)** and **PR [#585](https://github.com/qhkm/zeptoclaw/pull/585)** require manual review and merging by a maintainer to keep the automated dependency pipeline flowing smoothly.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-13

## 1. Today's Overview
ZeroClaw demonstrates highly active and healthy development momentum today, driven by a robust 50 PR updates and 13 issue updates within the last 24 hours. The maintainers and community are heavily focused on hardening the platform's multi-channel capabilities (Discord, Telegram, Wecom, Matrix) and fixing provider-specific quirks. A significant portion of today's activity centers around refactoring core tooling infrastructure to standardize rate-limiting and path guarding. With 18 merged/closed PRs and 9 closed issues, the project is moving fast, though the high volume of open PRs (32) suggests maintainers should ensure review bandwidth keeps pace with community contributions.

## 2. Releases
No new releases were published today. The project is currently iterating on bug fixes and feature additions, likely accumulating changes for a future stable tag. 

## 3. Project Progress
A massive architectural refactoring of the tooling system was successfully closed today. Additionally, several targeted bug fixes and feature integrations have landed:

*   **Tool Rate-Limiting Refactoring:** A sweeping initiative by contributor `yijunyu` to delegate rate-limiting and path-guarding to generic wrappers was closed. This cleaned up inline code across [GlobSearch/ContentSearch tools (#5772)](https://github.com/zeroclaw-labs/zeroclaw/pull/5772), [File tools (#4947)](https://github.com/zeroclaw-labs/zeroclaw/pull/4947), [Network/Skill tools (#4954)](https://github.com/zeroclaw-labs/zeroclaw/pull/4954), [Cron tools (#4949)](https://github.com/zeroclaw-labs/zeroclaw/pull/4949), [ClaudeCodeRunner (#4953)](https://github.com/zeroclaw-labs/zeroclaw/pull/4953), and [other AI CLI tools (#4952)](https://github.com/zeroclaw-labs/zeroclaw/pull/4952).
*   **Observability:** Closed PR [#5986](https://github.com/zeroclaw-labs/zeroclaw/pull/5986) (feat: runtime tracing and SSE broadcast for agent turn lifecycle), which has now been superseded by the more comprehensive open PR [#6553](https://github.com/zeroclaw-labs/zeroclaw/pull/6553).

## 4. Community Hot Topics
The most actively discussed items revolve around platform channels, onboarding, and search autonomy:
*   **Wecom Channel Support ([Issue #3090](https://github.com/zeroclaw-labs/zeroclaw/issues/3090)):** With 4 comments, users are actively discussing the addition of Wecom (WxWork) WebSocket/webhook modes. Underlying need: Strong demand for ZeroClaw adoption within enterprise Chinese markets.
*   **Onboarding Workflow Blocker ([Issue #6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)):** 2 comments on a P1 bug where the new onboarding tool prompts for OpenAI API keys instead of Codex subscription credentials. Underlying need: Frictionless setup for diverse provider subscriptions is critical for new user retention.
*   **Privacy-Focused Web Search ([Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)):** 3 comments on a proposal to add SearXNG support and DuckDuckGo CAPTCHA detection. Underlying need: Autonomous agents currently struggle with CAPTCHAs and IP blocks; reliable, privacy-respecting search is vital for agent autonomy.
*   **Recovering Lost Commits ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)):** 2 comments auditing 153 commits lost in a bulk revert from March. Underlying need: Transparent governance and ensuring hard work from contributors isn't accidentally dropped.

## 5. Bugs & Stability
Several high-severity bugs were reported or resolved today, particularly concerning media handling and provider integrations:

*   **P1: Discord Media Pipeline Broken ([Issue #6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556)):** Inbound images fail to process, non-image types are dropped, and outbound markers leak to end-users. No fix PR is linked yet. (Risk: High)
*   **P1: OpenAI Onboarding Misrouting ([Issue #6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120)):** Blocks users from connecting ZeroClaw to Codex subscriptions. (Risk: High)
*   **P2: WebSocket Multimodal Failures ([Issue #5453](https://github.com/zeroclaw-labs/zeroclaw/issues/5453)):** `[IMAGE:]` markers sent via `/ws/chat` are passed as plain text rather than processed. Fix status: Closed, likely addressed by recent open provider PRs.
*   **P2: Local Image Reading Failed ([Issue #6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097)):** Skills generate local paths that LLMs cannot read. Closed.

*Active Fix PRs Submitted Today:*
*   [PR #6597](https://github.com/zeroclaw-labs/zeroclaw/pull/6597): Fixes a high-risk bug where vision capabilities were falsely reported if *any* provider supported it, fixing image guard logic.
*   [PR #6600](https://github.com/zeroclaw-labs/zeroclaw/pull/6600): Fixes HTTPS certificate validation failures for provider requests in custom OS environments by trusting system CA roots.
*   [PR #6601](https://github.com/zeroclaw-labs/zeroclaw/pull/6601): Resolves an issue where Windows `.cmd` shims failed for the Google Workspace tool.

## 6. Feature Requests & Roadmap Signals
Recent issues and open PRs provide clear signals about ZeroClaw's near-term trajectory:
*   **Home Assistant Integration ([PR #6464](https://github.com/zeroclaw-labs/zeroclaw/pull/6464)):** An open, large PR adding a `home_assistant` tool via REST API. This signals a strong push into the local smart-home/privacy-first automation space.
*   **RunPod / ComfyUI Image Generation ([PR #6555](https://github.com/zeroclaw-labs/zeroclaw/pull/6555)):** Adding RunPod Comfy UI 5.8.5 as an alternate provider indicates the project is diversifying its media generation capabilities beyond standard DALL-E/Midjourne APIs.
*   **Localization/i18n ([PR #6550](https://github.com/zeroclaw-labs/zeroclaw/pull/6550)):** Moving runtime command replies to Fluent-backed strings suggests preparation for broader multi-language support.
*   **Anthropic Opus 4.7 Support ([PR #6598](https://github.com/zeroclaw-labs/zeroclaw/pull/6598)):** Defensive temperature handling for the newest Opus model shows ZeroClaw aims for day-one support for cutting-edge LLMs.

## 7. User Feedback Summary
Users are actively using ZeroClaw as an autonomous agent connected to community platforms (Discord, Telegram, Matrix) and enterprise tools. 
*   **Pain Points:** Users are frustrated by media handling inconsistencies across channels (especially Discord and Telegram TTS). Docker users are experiencing friction due to outdated or incorrect documentation ([Issue #6393](https://github.com/zeroclaw-labs/zeroclaw/issues/6393)), and developers using VSCode/Rust encountered analyzer breakages ([Issue #5687](https://github.com/zeroclaw-labs/zeroclaw/issues/5687)).
*   **Satisfaction/Use Cases:** High engagement on tool refactoring and provider PRs indicates a sophisticated developer user base. The push for Home Assistant and RunPod integration shows that users are deploying ZeroClaw for complex, self-hosted automation workflows rather than just simple chatbots.

## 8. Backlog Watch
*   **Bulk Revert Recovery ([Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)):** Needs maintainer attention. 153 previously approved commits need auditing and re-integration, which is delaying features and bug fixes.
*   **CI Labeler Misconfiguration ([Issue #6359](https://github.com/zeroclaw-labs/zeroclaw/issues/6359)):** PRs touching `crates/**` aren't being auto-labeled since the v0.7.x workspace split. This is silently hurting PR visibility and review routing.
*   **Discord Media Handling ([Issue #6556](https://github.com/zeroclaw-labs/zeroclaw/issues/6556)):** Needs an urgent fix PR. Discord is a primary channel for AI agents, and broken media severely degrades core functionality.
*   **SearXNG Support ([Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)):** Flagged as `needs-maintainer-review`. High-value feature for autonomous web searching that requires architectural approval.

</details>