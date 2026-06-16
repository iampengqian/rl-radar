# OpenClaw Ecosystem Digest 2026-06-17

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-16 22:35 UTC

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

Here is the structured project digest for OpenClaw based on the provided GitHub data.

# OpenClaw Project Digest — 2026-06-17

## 1. Today's Overview
OpenClaw is exhibiting explosive activity, maintaining a massive throughput of 1,000 total updates (500 issues, 500 PRs) in the last 24 hours. With 357 active PRs and two fresh releases (`v2026.6.8` and its beta), the project is in a hyper-active development phase, heavily focused on stabilizing messaging channel integrations (like Telegram and WhatsApp) and refining multi-agent orchestration. However, the high ratio of open issues (456 open vs 44 closed) and the presence of critical P0/P1 memory and state bugs suggest the project is scaling faster than its stability engineering can comfortably manage.

## 2. Releases
**v2026.6.8** (and `v2026.6.8-beta.2`)
*   **Highlights:** Major overhaul of Telegram and WhatsApp channel delivery, making rich text much less brittle. Features include support for structured tables, lists, expandable blockquotes, and preserved line breaks.
*   **Architecture:** Retired native draft migration and introduced safer rich-media bo handling. Prompt-preserving CLI backend delivery is now standard.

## 3. Project Progress
The project is seeing significant forward motion in UI, memory handling, and tooling safeguards:
*   **Memory Architecture:** PR [#88504](https://github.com/openclaw/openclaw/pull/88504) introduces a multi-slot memory role architecture, allowing memory plugins to compose elegantly rather than overwriting each other.
*   **Native Apps & UI:** Advancements in native nodes include a Wear OS MVP ([#47604](https://github.com/openclaw/openclaw/pull/47604)), iOS 26 light-mode glass surface fixes ([#91977](https://github.com/openclaw/openclaw/pull/91977)), and Android node approval wait states ([#93792](https://github.com/openclaw/openclaw/pull/93792)).
*   **Tooling Safety:** Enhancements to prevent LLM hallucination failures, such as auto-correcting fabricated file extensions in tool calls ([#93599](https://github.com/openclaw/openclaw/pull/93599)) and requiring resolved approval before skill mutating actions ([#84860](https://github.com/openclaw/openclaw/pull/84860)).

## 4. Community Hot Topics
*   **Cross-Platform Desktop Support:** Issue [#75](https://github.com/openclaw/openclaw/issues/75) (109 comments, 79 👍) is an enduring mega-thread where users are highly requesting Linux and Windows equivalents of the macOS Clawdbot app.
*   **Core Architecture Refactoring:** Issue [#88838](https://github.com/openclaw/openclaw/issues/88838) (P0, 30 comments) discusses tracking the core session/transcript runtime-state migration to SQLite via branch-by-abstraction to prevent high-risk monolithic rewrites.
*   **Network Security Flexibility:** Feature request [#39604](https://github.com/openclaw/openclaw/issues/39604) (13 comments, 9 👍) asks for an opt-in `tools.web.fetch.allowPrivateNetwork`, highlighting a strong community need for self-hosted/internal-network agentic capabilities.

## 5. Bugs & Stability
OpenClaw is currently facing significant stability challenges related to memory management, cron jobs, and multi-agent state isolation:
*   **🚨 P0 - SQLite Migration Tracking:** [#88838](https://github.com/openclaw/openclaw/issues/88838) highlights risks in session-state transitions that could cause large-scale message loss if not handled iteratively.
*   **🚨 P1 - Gateway Memory Leaks:** Issues [#55334](https://github.com/openclaw/openclaw/issues/55334) and [#54155](https://github.com/openclaw/openclaw/issues/54155) report unbounded growth in `sessions.json` causing catastrophic OOM crashes (growing to 14.7GB over 4 days). 
*   **🚨 P1 - Cron Job Data Loss:** [#40001](https://github.com/openclaw/openclaw/issues/40001) notes that isolated cron sessions completely overwrite shared files because the `write` tool lacks an append mode.
*   **🚨 P1 - Agent Reliability:** Issue [#62505](https://github.com/openclaw/openclaw/issues/62505) (Regression) and [#58450](https://github.com/openclaw/openclaw/issues/58450) report agents looping in vague status updates, promising follow-ups without executing tools, or silently hallucinating outputs instead of failing cleanly.

## 6. Feature Requests & Roadmap Signals
Based on recent highly-supported issues and PRs, the next versions will likely focus on:
*   **Advanced Sandboxing & Consent:** Implementing channel-mediated approval pipelines for MCP tool calls ([#78308](https://github.com/openclaw/openclaw/issues/78308)) and better filesystem sandboxing configs ([#7722](https://github.com/openclaw/openclaw/issues/7722)).
*   **Context & Memory Control:** Introducing tiered bootstrap file loading to save LLM token budgets ([#22438](https://github.com/openclaw/openclaw/issues/22438)) and enforcing per-agent memory-wiki vault isolation ([#63829](https://github.com/openclaw/openclaw/issues/63829)).
*   **Auto-Remediation:** The addition of a CI auto-fix pipeline driven by Codex/ClawSweeper ([#84479](https://github.com/openclaw/openclaw/pull/84479), [#68936](https://github.com/openclaw/openclaw/pull/68936)) signals a move toward self-healing repository management.

## 7. User Feedback Summary
Users are highly enthusiastic about OpenClaw's multi-channel capabilities and autonomous features, but express deep frustration with data loss and session misalignment. A major pain point is **silent failure**—agents that time out, message queues that vanish on reconnect, or files that are overwritten without warning. Furthermore, users running OpenClaw in non-standard environments (RISC-V64, Docker instances with multiple gateways, or users with specific XDG_CONFIG_HOME paths) frequently hit hard-coded path limits or collision bugs (e.g., [#51429](https://github.com/openclaw/openclaw/issues/51429), [#51363](https://github.com/openclaw/openclaw/issues/51363)). 

## 8. Backlog Watch
*   **Long-Term Needs:** Issue [#75](https://github.com/openclaw/openclaw/issues/75) (Linux/Windows apps) has been open since January 2026 and remains highly active but unaddressed.
*   **Stale Reliability Fixes:** PR [#46303](https://github.com/openclaw/openclaw/pull/46303) (fixing message loss during SIGUSR1 reloads) was submitted in March and is marked as a dirty-candidate; this critical fix desperately needs maintainer review to stop gateway reload data loss.
*   **Ignored Environments:** Bug [#54253](https://github.com/openclaw/openclaw/issues/54253) regarding RISC-V64 installations has been waiting for product decisions since March 2026.
*   **Native Draft Migration:** Several issues are blocked by the need to refactor native draft migrations, an architectural debt promised in the v2026.6.8 release that needs thorough validation across all channel adapters.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 17, 2026 community digests.

# Personal AI Agent Open-Source Ecosystem Report — June 17, 2026

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a massive surge in development velocity, transitioning from experimental frameworks to production-grade, platform-integrated systems. Projects are rapidly shifting toward native desktop/mobile applications and deep integrations with enterprise communication channels (Slack, MS Teams, WhatsApp, Feishu). However, this explosive feature growth is outpacing stability engineering across the board, with nearly all major projects battling memory leaks, context window bloat, and silent background task failures. The overarching architectural trend is moving away from monolithic designs toward agentic workflows featuring isolated sandboxes, scheduled autonomous tasks (cron), and standardized tool interfaces like the Model Context Protocol (MCP).

## 2. Activity Comparison
*Health Score is derived from update volume, merge cadence, and bug management.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Key Bottleneck |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (456 open) | 500 (357 open) | `v2026.6.8` Released | 🟡 Moderate | Scaling faster than stability mgmt; P0/P1 memory bugs. |
| **NanoBot** | 8 | 23 (14 merged) | No Release | 🟢 Excellent | Edge-case hardening; minor Docker install friction. |
| **Hermes Agent** | 50 (46 open) | 50 (44 open) | No Release | 🟡 Moderate | Review bottleneck (low merge velocity); provider API regressions. |
| **PicoClaw** | N/A | 16 (13 merged) | Nightly Build | 🟢 Good | Massive untriaged security advisory backlog (SSRF). |
| **NanoClaw** | 6 | 8 (4 merged) | No Release | 🟢 Excellent | Minor container storage boundary bugs. |
| **NullClaw** | Low | High (0 merged) | No Release | 🟡 Moderate | PR review bottleneck blocking major cron/scheduler updates. |
| **IronClaw** | 50 (31 open) | 50 (33 open) | No Release | 🟢 Excellent | WebUI OAuth confusion and automation pipeline dead-ends. |
| **LobsterAI** | Low | 4 (3 merged) | No Release | 🟢 Good | Stale bug-fix PRs degrading UI reliability. |
| **TinyClaw** | 0 | 1 (0 merged) | No Release | 🟢 Stable | Native Windows CLI resolution crashes. |
| **Moltis** | 0 | 2 (0 merged) | No Release | 🟢 Stable | Quiet development phase; PR review needed. |
| **CoPaw** | 41 (22 closed) | 40 (20 merged) | `v1.1.12-beta.1` | 🟢 Excellent | macOS ARM64 stability (ChromaDB crashes). |
| **ZeptoClaw** | 0 | 1 (0 merged) | No Release | 🟡 Dormant | Zero community/human activity. |
| **ZeroClaw** | 33 | 50 (23 merged) | No Release | 🟢 Excellent | Regressions in v0.8.0 (Slack/Discord drops); poor documentation. |

## 3. OpenClaw's Position
**OpenClaw** operates as the undeniable heavyweight of this ecosystem, processing an astronomical 1,000 updates (500 issues, 500 PRs) in a single day. Its primary advantages are massive community momentum, deep multi-channel messaging integrations (WhatsApp, Telegram), and cutting-edge UI penetration (Wear OS, iOS 26). 
*   **Vs. Peers:** While projects like CoPaw and IronClaw have healthy iteration cycles, OpenClaw is moving at hyperscale. However, it contrasts sharply with stable projects like NanoBot by exhibiting severe growing pains—specifically critical memory leaks (OOM crashes) and high ratios of unresolved bugs.
*   **Technical Approach:** OpenClaw is pushing boundaries with multi-agent orchestration and multi-slot memory architectures, but its infrastructure is creaking under the weight of its feature set (e.g., the risky P0 migration of runtime states to SQLite).

## 4. Shared Technical Focus Areas
Several unified technical requirements are emerging across the ecosystem:
*   **Advanced Context & Memory Management:** Moving beyond simple chat logs to tiered memory systems. *NanoBot* (token-capped idle auto-compact), *OpenClaw* (multi-slot memory roles), *CoPaw* (reversible context compression), and *ZeroClaw* (per-agent "Dream" mode) are all actively solving token bloat and context preservation.
*   **Autonomous Background Processing (Cron/Schedulers):** Transitioning from reactive chatbots to proactive agents. *NullClaw*, *OpenClaw*, *CoPaw*, and *LobsterAI* are heavily focused on cron infrastructures. A shared pain point is silent failures and state overwrites when cron jobs run in the background.
*   **Multi-Provider & Local Model Compatibility:** Standardizing non-OpenAI formats. *PicoClaw* (Gemini 3.5), *NanoBot* (Kimi K2.7, Ollama), *Hermes Agent* (Anthropic/OpenRouter fixes), and *NullClaw* (local model payload handling) show a massive demand for vendor-agnostic routing.
*   **Enterprise Chat & Tool Integration:** Deep hooks into corporate ecosystems. *IronClaw* (Google Calendar/OAuth), *NullClaw* (MS Teams), *CoPaw* (Feishu/DingTalk), and *NanoClaw* (Strava MCP).

## 5. Differentiation Analysis
*   **Architecture & Deployment:** *OpenClaw* and *ZeroClaw* are targeting massive, distributed multi-agent deployments (focusing on SQLite backends, WASM plugins, and fleet management). Meanwhile, *NanoClaw* and *PicoClaw* are leaning into lightweight containerization and out-of-tree extensibility via remote MCP servers.
*   **Target Users:** *CoPaw* and *IronClaw* are heavily focused on the end-user desktop experience (Tauri, macOS ARM64 fixes, WebUI "Cowork" features). Conversely, *Hermes Agent* and *OpenClaw* cater to "always-on" headless deployments bridging LLMs to messaging gateways (WhatsApp, Telegram).
*   **Security Postures:** *PicoClaw* is undergoing rigorous security hardening (battling SSRF, spoofing, and symlink races), whereas *NanoClaw* is dealing with enterprise sandboxing (credential decoupling to bypass internal gateways).

## 6. Community Momentum & Maturity
*   **Tier 1 - Hyper-Active / Scaling:** *OpenClaw*, *IronClaw*, *ZeroClaw*, and *CoPaw*. These projects have massive engagement but are experiencing growing pains, regressions, and review bottlenecks.
*   **Tier 2 - Rapidly Iterating / Stabilizing:** *NanoBot*, *PicoClaw*, *Hermes Agent*, and *NanoClaw*. These projects show highly healthy merge cadences, systematically closing bugs and refining edge cases without collapsing under issue volume.
*   **Tier 3 - Low Volume / Focused:** *NullClaw*, *LobsterAI*, *TinyClaw*, and *Moltis*. These projects are pushing specific features (like Windows CLI support or enterprise integrations) but have lower community throughput.
*   **Tier 4 - Dormant:** *ZeptoClaw* relies entirely on automated dependency updates with zero human interaction.

## 7. Trend Signals
*   **The End of Silent Failures:** The #1 friction point across *OpenClaw, NanoClaw, IronClaw, and LobsterAI* is the UI lying about success states or dropping messages due to budget limits/tool panics. There is a massive industry push for transparent error surfacing and "self-healing" agent loops that gracefully fail rather than infinitely loop or silently drop data.
*   **Granular Sandbox & Permission Control:** As agents execute more local code, developers demand strict boundaries. Signals from *NanoClaw* (external credential injection), *ZeroClaw* (per-agent overrides), and *OpenClaw* (channel-mediated approvals) indicate the industry is moving away from global trust models.
*   **The Rise of "Agentic UIs":** Pure chat interfaces are insufficient. *IronClaw*, *ZeroClaw*, and *LobsterAI* highlight a trend toward persistent visual planning (Canvas modes), unified web/terminal UI parity, and real-time tool approval panes.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot (HKUDS/nanobot) for 2026-06-17.

### 1. Today's Overview
NanoBot is demonstrating exceptionally high development velocity and robust community engagement. In the last 24 hours, the project processed 23 Pull Requests (merging 14) and updated 8 issues, indicating a highly active maintainer team and contributor base. The development focus is currently heavily skewed toward hardening context management, refining local model integration, and fixing installation hurdles. Several long-standing architectural issues regarding memory consolidation and token estimation have been successfully addressed. Overall, the project's health appears excellent, showing systematic resolution of edge cases and active prevention of context bloat.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
The project saw significant advancements today, particularly in API stability, UI features, and memory management:
*   **Memory & Context Optimization:** Merged [PR #4352](https://github.com/HKUDS/nanobot/pull/4352) which transitioned the recent-history digest to be capped by tokens instead of characters (preventing CJK text bloat). Additionally, [PR #4370](https://github.com/HKUDS/nanobot/pull/4370) enabled idle auto-compact by default (15 minutes), and [PR #4369](https://github.com/HKUDS/nanobot/pull/4369) improved UX by explaining empty Dream runs to users.
*   **WebUI & Desktop:** [PR #4330](https://github.com/HKUDS/nanobot/pull/4330) introduced a first-class WebUI Automations management view, allowing users to manage queue/details for cron jobs. [PR #4247](https://github.com/HKUDS/nanobot/pull/4247) fixed a bug where WebUI chat history disappeared if the transcript exceeded 8MB.
*   **Provider & API Stability:** [PR #4358](https://github.com/HKUDS/nanobot/pull/4358) fixed a critical bug where empty-response retries duplicated user turns. [PR #4361](https://github.com/HKUDS/nanobot/pull/4361) added support for Kimi K2.7 models, and [PR #3401](https://github.com/HKUDS/nanobot/pull/3401) added first-class embedding support for OpenAI-compatible providers.
*   **Installation & Tooling:** Merged [PR #4365](https://github.com/HKUDS/nanobot/pull/4365) fixing curl installer commands in scripts, and [PR #4368](https://github.com/HKUDS/nanobot/pull/4368) fixed the macOS installer for externally managed Python environments.

### 4. Community Hot Topics
*   **Installation Failures in Docker:** [Issue #4360](https://github.com/HKUDS/nanobot/issues/4360) (6 comments) highlights a significant pain point where the installer aborts in fresh Debian 13 Docker containers due to shell syntax errors. This is currently the most discussed issue.
*   **Dream Feature Confusion:** [Issue #4242](https://github.com/HKUDS/nanobot/issues/4242) (updated today) reveals underlying user needs regarding the "Dream" memory feature. Users are confused because disabling the cron job unexpectedly causes the "Recent History" to bloat the system prompt, showing a strong demand for predictable context window management.
*   **MCP / A2A Discoverability:** [Issue #4362](https://github.com/HKUDS/nanobot/issues/4362) shows third-party developers actively wanting to integrate their tools (MetaVision AI) with NanoBot, confirming strong ecosystem growth.

### 5. Bugs & Stability
*   **High Severity:** An invalid environment variable `NANOBOT_STREAM_IDLE_TIMEOUT_S` caused provider streaming paths to crash completely with a `ValueError` ([Issue #4065](https://github.com/HKUDS/nanobot/issues/4065)). **Status:** Fixed and validated in [PR #4363](https://github.com/HKUDS/nanobot/pull/4363).
*   **High Severity:** The OpenAI-compatible API retry path duplicated user turns when an empty response was received ([Issue #4079](https://github.com/HKUDS/nanobot/issues/4079)). **Status:** Fixed in [PR #4358](https://github.com/HKUDS/nanobot/pull/4358).
*   **Medium Severity:** WhatsApp voice notes (`.ogg`/`.opus`) intermittently failed transcription via AssemblyAI. **Status:** Fix provided in [PR #4353](https://github.com/HKUDS/nanobot/pull/4353) (Open), which converts audio to WAV 16k mono via ffmpeg first.
*   **Medium Severity:** System-wide proxies silently break local model server connections (Ollama, vLLM). **Status:** Fix provided in [PR #4367](https://github.com/HKUDS/nanobot/pull/4367) (Open), disabling proxy for local endpoints.

### 6. Feature Requests & Roadmap Signals
*   **Workspace Asymmetry Fixes:** [Issue #4374](https://github.com/HKUDS/nanobot/issues/4374) requests fixing read/write asymmetry for `SOUL.md`/`USER.md` in project workspaces, signaling a push toward more robust multi-project isolation.
*   **Performance Caching:** [PR #4371](https://github.com/HKUDS/nanobot/pull/4371) (Open) suggests adding a cache breakpoint before the "Recent History" section so the stable system prefix can be cached by LLM providers, saving compute costs.
*   **Offline Capabilities:** [PR #3662](https://github.com/HKUDS/nanobot/pull/3662) (Open) aims to avoid network loads during token estimation, indicating a roadmap signal toward better offline/air-gapped enterprise usability.

### 7. User Feedback Summary
Users are actively deploying NanoBot in containerized environments and utilizing it for long-running tasks (like generating articles), which is putting stress on the agent's memory and context handling. There is clear frustration around installation scripts breaking in Docker setups. However, users are generally highly satisfied with the project's expanding provider compatibility (local models, Kimi K2.7) and the new WebUI features. The feedback shows a maturing user base that expects production-ready stability, offline capabilities, and graceful handling of large context windows.

### 8. Backlog Watch
*   **Unanswered Workspace Bug:** [Issue #4374](https://github.com/HKUDS/nanobot/issues/4374) (Read/write asymmetry for project workspaces) was created today and currently has 0 comments. It highlights a flaw in a recently added feature (#4007) and needs maintainer triage.
*   **Long-standing Tooling PRs:** [PR #3662](https://github.com/HKUDS/nanobot/pull/3662) (Offline token estimation, open since May 6) and [PR #4053](https://github.com/HKUDS/nanobot/pull/4053) (Read-only filesystem roots, open since May 29) are still awaiting review/merge despite solving important architectural edge cases for security and offline use.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for the Hermes Agent open-source project for June 17, 2026.

### 1. Today's Overview
The Hermes Agent project is experiencing exceptionally high community engagement, with 50 updated issues and 50 updated pull requests in the last 24 hours alone. However, with 46 open issues and 44 open PRs compared to only 4 closed issues and 6 merged/closed PRs, the project appears to be in a bottleneck or rapid expansion phase. The maintainers are clearly fielding a massive volume of community contributions, particularly regarding gateway stability, provider integrations, and Desktop UI enhancements. While the enthusiasm is a strong indicator of the project's health and relevance, the low merge velocity suggests the core team might be stretched thin in reviewing and merging community submissions.

### 2. Releases
No new releases were recorded today. The project remains on its current version cycle, with active development seemingly focused on patching regressions and finalizing features for the next drop.

### 3. Project Progress
Today's progress was primarily driven by community-submitted Pull Requests aiming to fix critical bottlenecks, though the actual number of merged PRs was low (6). 
*   **Gateway & State Stability:** Significant progress was made in addressing gateway crashes and data loss. Notable PRs target silent cron job delivery failures ([PR #47484](https://github.com/NousResearch/hermes-agent/pull/47484)), malformed session crashes on startup ([PR #47483](https://github.com/NousResearch/hermes-agent/pull/47483)), and duplicate user turns after transient network failures ([PR #47346](https://github.com/NousResearch/hermes-agent/pull/47346)).
*   **Security Hardening:** A vital security PR was submitted to stop exposing raw internal exception details to end-users on chat platforms and to validate webhook arguments ([PR #6660](https://github.com/NousResearch/hermes-agent/pull/6660)). 
*   **Performance Fixes:** A crucial fix to restore cache routing headers for OpenAI/Codex models was opened, aiming to fix a massive drop in prompt cache hit rates ([PR #47399](https://github.com/NousResearch/hermes-agent/pull/47399)).

### 4. Community Hot Topics
The most discussed items revolve around user control over model configurations and platform integrations.
*   **Custom Model Picker Filtering:** The highest-voted active feature is a request to add `picker_providers` to filter which providers appear in the `/model` command ([Issue #12655](https://github.com/NousResearch/hermes-agent/issues/12655)). This pairs closely with a request to auto-discover models from custom endpoints ([Issue #10011](https://github.com/NousResearch/hermes-agent/issues/10011)), highlighting a strong community need for better self-hosted LLM gateway management.
*   **Missing Messaging Channels:** Users are actively requesting parity with other agent frameworks, specifically asking for integrations with IRC, Google Chat, LINE, Nostr, and Twitch ([Issue #8950](https://github.com/NousResearch/hermes-agent/issues/8950)).
*   **Agent Looping Fixes:** Users are frustrated by agents repeating identical blocked tool calls, requesting better re-prompting logic ([Issue #41490](https://github.com/NousResearch/hermes-agent/issues/41490)).

### 5. Bugs & Stability
Several high-severity (P1/P2) bugs were reported today, indicating some stability regressions in recent updates, particularly around provider APIs and memory handling.
*   **P1 - OpenRouter HTTP 400:** Hermes 0.9.0 is returning empty body 400 errors for all OpenRouter requests, even when `curl` works perfectly ([Issue #16804](https://github.com/NousResearch/hermes-agent/issues/16804)). 
*   **P1 - Anthropic Tool Call Drops:** Tool calls emitted as text instead of structured `tool_use` blocks are being dropped entirely, halting the agent loop ([Issue #47472](https://github.com/NousResearch/hermes-agent/issues/47472)). *A fix is already in progress via [PR #47473](https://github.com/NousResearch/hermes-agent/pull/47473).*
*   **P2 - WhatsApp Routing:** Message targets using group/LID JIDs are silently falling back to the home channel, risking message leakage ([Issue #41407](https://github.com/NousResearch/hermes-agent/issues/41407)).
*   **P2 - Browser Vision Overloads:** Full-page screenshots are bypassing the proactive embed cap, permanently bricking sessions with oversized base64 payloads ([Issue #47467](https://github.com/NousResearch/hermes-agent/issues/47467)).
*   **P1 - Broken Anthropic OAuth:** The native PKCE login flow is returning 404s because Anthropic migrated their token endpoint ([Issue #47474](https://github.com/NousResearch/hermes-agent/pull/47474)). *A fix is currently open in [PR #47474](https://github.com/NousResearch/hermes-agent/pull/47474).*

### 6. Feature Requests & Roadmap Signals
Based on the issue tracker, the following features are strong candidates for the next version:
*   **Advanced Delegation:** Real-time task steering via PTY channels, allowing users to interrupt, skip, or narrow batch tasks in real-time ([PR #47480](https://github.com/NousResearch/hermes-agent/pull/47480)). Additionally, allowing provider/model overrides per delegated task is highly requested ([PR #47479](https://github.com/NousResearch/hermes-agent/pull/47479)).
*   **Durable Cron Memory:** Changing cron jobs to read memory (`MEMORY.md`/`USER.md`) by default while requiring opt-in for writes, greatly improving automated context tasks ([Issue #45768](https://github.com/NousResearch/hermes-agent/issues/45768)).
*   **Native Canvas Mode:** A first-class collaborative UI state for persistent visual planning and design workflows, moving beyond markdown approximations ([Issue #29379](https://github.com/NousResearch/hermes-agent/issues/29379)).

### 7. User Feedback Summary
Users are heavily utilizing Hermes as an omnipresent personal assistant bridging LLMs with multiple chat gateways (WhatsApp, Telegram). 
*   **Pain Points:** There is notable friction in environment management, specifically on Windows/macOS where the Desktop app isolates itself from existing WSL installations ([Issue #40140](https://github.com/NousResearch/hermes-agent/issues/40140)) and suffers from ASAR path crashes ([Issue #47439](https://github.com/NousResearch/hermes-agent/issues/47439)). Additionally, credential redaction logic is currently too aggressive, corrupting legitimate code variables during file writes ([PR #47348](https://github.com/NousResearch/hermes-agent/pull/47348)).
*   **Satisfaction:** Despite stability bugs around provider API updates, users remain highly invested in the project, contributing complex skills, robust bug reports, and offering deep architectural feedback on memory and state management.

### 8. Backlog Watch
*   **Long-Standing Integrations:** The request for native JMAP email integration has been open since April 17 and remains unanswered by maintainers ([Issue #11424](https://github.com/NousResearch/hermes-agent/issues/11424)).
*   **Durable Feedback Routing:** A highly detailed feature request from late March regarding better integration of `memory` and `skills` for follow-up planning needs maintainer feedback ([Issue #3506](https://github.com/NousResearch/hermes-agent/issues/3506)).
*   **Telegram Plugin Limits:** A bug causing plugin slash commands to be truncated by Telegram's 30-command hard limit has been idle since May 27 ([Issue #33480](https://github.com/NousResearch/hermes-agent/issues/33480)).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw based on the GitHub data provided for June 17, 2026.

### 1. Today's Overview
PicoClaw exhibits high engineering momentum today, heavily focused on stability enhancements and critical bug resolutions, as evidenced by 16 updated PRs (13 merged/closed) and a new nightly release. The development team is making solid progress in hardening the agent's runtime (e.g., adding panic recovery to core paths) and refining LLM provider compatibility (e.g., Gemini 3.5 Flash Agentic). However, the project is currently facing a significant security and operational audit, with a massive batch of 12 stale vulnerability reports (primarily concerning inbound channel spoofing and SSRF) surfacing in today's digest, alongside notable community friction regarding native execution (`su`) and streaming configurations. 

### 2. Releases
*   **[nightly] Nightly Build (v0.2.9-nightly.20260616.c1ff5aa6)**
    *   **Details:** Automated nightly build cut from the `main` branch. 
    *   **Notes:** Marked as potentially unstable. Users and integrators are advised to use with caution.
    *   **Full Changelog:** [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

### 3. Project Progress
Today's development was highly productive, with 13 PRs merged or closed, advancing the project in several key areas:
*   **Runtime Stability:** PR [#3132](https://github.com/sipeed/picoclaw/pull/3132) added panic recovery (`defer-recover`) to core-path goroutines, preventing single tool execution failures from crashing the entire agent process.
*   **LLM Provider Compatibility:** PR [#3136](https://github.com/sipeed/picoclaw/pull/3136) fixed an integration issue with the Gemini HTTP API to support `thought_signature` (snake_case), ensuring compatibility with Gemini 3.5 Flash Agentic reasoning. PR [#2983](https://github.com/sipeed/picoclaw/pull/2983) fixed a silent retry gap where empty HTTP 200 LLM responses would stall the agent loop.
*   **Messaging Channels:** PR [#3135](https://github.com/sipeed/picoclaw/pull/3135) fixed a Telegram adapter bug where forum topic replies were incorrectly routed to `#General`. 
*   **Memory & Context:** PR [#2988](https://github.com/sipeed/picoclaw/pull/2988) fixed agent context compression logic to finally respect the `summarize_token_percent` config, and PR [#2990](https://github.com/sipeed/picoclaw/pull/2990) fixed Web UI session history truncation.
*   **Code Quality:** PRs [#3127](https://github.com/sipeed/picoclaw/pull/3127) and [#3129](https://github.com/sipeed/picoclaw/pull/3129) cleaned up silent file `Close()` error discards, while PR [#3130](https://github.com/sipeed/picoclaw/pull/3130) added explicit error handling for JSON marshaling in seahorse tools.

### 4. Community Hot Topics
*   **Streaming LLM Requests:** Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404) (12 comments, created in April) remains highly active. The community strongly desires native support for `streaming: true` in the config for HTTP requests to LLM backends to reduce latency in AI responses. 
*   **Telegram Forum Integration:** Issue [#3110](https://github.com/sipeed/picoclaw/issues/3110) and PR [#3135](https://github.com/sipeed/picoclaw/pull/3135) sparked community interaction. Users deploying PicoClaw in Telegram supergroups highlighted that while the bot registered "typing" actions in the correct topic, the actual messages defaulted to the root thread, breaking conversational flow in forum setups.
*   **Out-of-Tree Extensibility:** PR [#3120](https://github.com/sipeed/picoclaw/pull/3120) was a popular structural addition, allowing third-party modules to register custom channels natively via configuration, a move praised for reducing the need to maintain hard forks.

### 5. Bugs & Stability
*   **🔴 CRITICAL: `su -c` Execution Crash:** Issue [#3134](https://github.com/sipeed/picoclaw/issues/3134) reports a hard crash when the agent attempts to execute `su -c 'echo OK'`, returning "No daemon is currently running!" This represents a severe limitation for agents requiring privilege escalation. (Fix status: No PR yet).
*   **🟠 HIGH: WebSocket Configuration Reload:** Issue [#3071](https://github.com/sipeed/picoclaw/issues/3071) highlights that authenticated WebSocket clients can trigger unauthorized gateway reloads via `/reload`. 
*   **🟡 MEDIUM: Gemini 3.5 Tool Calls:** (Fixed in PR [#3136](https://github.com/sipeed/picoclaw/pull/3136)) The agent was breaking when talking to Gemini 3.5 because it expected camelCase JSON instead of snake_case.
*   **🟡 MEDIUM: Process Crashes on Tool Panic:** (Fixed in PR [#3132](https://github.com/sipeed/picoclaw/pull/3132)) Prior to this fix, a single panicked goroutine could terminate the whole agent runtime.

### 6. Feature Requests & Roadmap Signals
*   **HTTP Streaming (Issue [#2404](https://github.com/sipeed/picoclaw/issues/2404)):** Given the 12 comments and longevity, this is a highly anticipated feature. It is a strong candidate for the upcoming v0.3.0 milestone.
*   **Third-Party Channel Support (PR [#3120](https://github.com/sipeed/picoclaw/pull/3120)):** Now merged, this sets a roadmap signal that PicoClaw is positioning itself as a highly extensible framework, moving away from monolithic channel adapters.
*   **Remote Cron Commands (PR [#3137](https://github.com/sipeed/picoclaw/pull/3137) - Closed):** An attempt to add remote channel execution to cron tools. Although closed today, it signals a community need for cross-channel scheduled tasks.

### 7. User Feedback Summary
User satisfaction is generally positive regarding PicoClaw's rapid iteration and deep integrations with platforms like Telegram, OneBot, and Feishu. Developers appreciate the increasing robustness of the Go-based runtime. However, **security and deployment safety** are major current pain points. Users operating PicoClaw in exposed environments are expressing concern over the volume of SSRF and authorization bypass vulnerabilities reported today. Additionally, users leveraging PicoClaw for local sysadmin tasks are frustrated by the inability to execute basic privilege escalation commands safely (`su` bug). 

### 8. Backlog Watch (Maintainer Attention Needed)
The repository currently has a massive backlog of **stale security advisories** opened by user `YLChen-007` that urgently require triage:
1.  **SSRF Bypasses:** [#3078](https://github.com/sipeed/picoclaw/issues/3078) (HTTP Proxy bypass) and [#3074](https://github.com/sipeed/picoclaw/issues/3074) (IPv6 ISATAP bypass). These allow attackers to force the agent to fetch internal host data.
2.  **Channel Authorization Bypasses:** [#3082](https://github.com/sipeed/picoclaw/issues/3082) (Feishu parent messages), [#3076](https://github.com/sipeed/picoclaw/issues/3076) (WeCom group triggers), and [#3068](https://github.com/sipeed/picoclaw/issues/3068) (MQTT client ID spoofing).
3.  **Local Execution Vulnerabilities:** [#3075](https://github.com/sipeed/picoclaw/issues/3075) (Untrusted `skills/` metadata injection) and [#3081](https://github.com/sipeed/picoclaw/issues/3081) (Symlink race in `exec` tool).
4.  **Open PRs needing review:** PR [#3115](https://github.com/sipeed/picoclaw/pull/3115) fixing inline data URL media extraction, and PR [#3116](https://github.com/sipeed/picoclaw/pull/3116) fixing the `turn.done` lifecycle signaling.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw based on the provided GitHub data.

# NanoClaw Project Digest
**Date:** 2026-06-17
**Repository:** [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

### 1. Today's Overview
NanoClaw exhibits highly active and healthy development momentum, with 14 total community interactions (6 issues, 8 PRs) processed in the last 24 hours. The contributor base is highly engaged in expanding platform integrations, evidenced by multiple open PRs introducing new remote MCP (Model Context Protocol) server supports and messaging channel capabilities. Maintenance and stability are also a clear focus, as maintainers successfully merged 4 PRs addressing infrastructure routing, agent error handling, and documentation drift. The project appears to be in a mature scaling phase, actively reducing operational friction and broadening its third-party ecosystem.

### 2. Releases
No new releases were published today. 

### 3. Project Progress
The project advanced significantly in infrastructure reliability and user experience, with 4 PRs merged/closed today:
*   **Agent Error Handling ([PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759)):** Merged a critical fix that ensures LLM turns failing due to budget exhaustion or billing limits are now properly surfaced to the user, rather than failing silently. 
*   **Infrastructure Self-Healing ([PR #2782](https://github.com/nanocoai/nanoclaw/pull/2782)):** Closed/Merged a fix for the `tailscale-docker` routing service, converting a boot-time `oneshot` script into a persistent service to prevent Tailscale from silently dropping IP rules mid-session.
*   **Documentation Accuracy ([PR #2775](https://github.com/nanocoai/nanoclaw/pull/2775)):** Clarified that `@onecli-sh/sdk` version bumps do not automatically upgrade active OneCLI gateways on existing installs, correcting false assumptions in previous changelogs.
*   **Stale Architecture Closure ([PR #2069](https://github.com/nanocoai/nanoclaw/pull/2069)):** Closed a legacy v1 WebChat skill proposal, indicating a shift in architectural strategy for communication channels.

### 4. Community Hot Topics
*   **OneCLI Credential Decoupling ([Issue #2781](https://github.com/nanocoai/nanoclaw/issues/2781)):** A highly impactful feature request from a downstream packager (`shekohex`) asking for native environment credentials to bypass the OneCLI gateway. This highlights strong enterprise/sandbox demand for deploying NanoClaw without monolithic internal dependencies.
*   **API Authentication Risk ([Issue #1669](https://github.com/nanocoai/nanoclaw/issues/1669)):** An older but recently updated discussion regarding whether NanoClaw's Credential Proxy implementation might trigger Anthropic's anti-fraud/ban mechanisms for acting as a reverse OAuth proxy.
*   **Strava Integration ([PR #2777](https://github.com/nanocoai/nanoclaw/pull/2777)):** High community interest in fitness data, with a new skill proposing a full OAuth flow to connect to the official Strava MCP endpoint.

### 5. Bugs & Stability
Ranked by severity:
1.  **[CRITICAL] Silent Budget Drops (Fixed):** ([Issue #2751](https://github.com/nanocoai/nanoclaw/issues/2751)) Users were receiving no replies when agent turns hit API spending limits. **Status:** Fixed via merged [PR #2759](https://github.com/nanocoai/nanoclaw/pull/2759).
2.  **[HIGH] Broken WhatsApp Media Ingestion:** ([PR #2778](https://github.com/nanocoai/nanoclaw/pull/2778)) Inbound WhatsApp media was failing to reach the agent container because files were written to the host rather than the per-session container directory. **Status:** Open PR available for review.
3.  **[MEDIUM] Container-Runner Source Staleness:** ([Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784)) The session staleness check only watches `index.ts`, meaning updates to `ipc-mcp-stdio.ts` are ignored, potentially causing outdated MCP stdio logic to run in agent sessions.
4.  **[LOW] Slack URL Mangling:** ([Issue #2779](https://github.com/nanocoai/nanoclaw/issues/2779)) Slack formatting intercepts `@handles` inside standard URLs (e.g., HackMD/Mastodon links), breaking the link when posted by the agent.
5.  **[LOW] Outdated Security Docs:** ([Issue #2783](https://github.com/nanocoai/nanoclaw/issues/2783)) `SECURITY.md` still describes the retired v1 trust model, which could confuse new auditors and operators.

### 6. Feature Requests & Roadmap Signals
Recent submissions suggest the next version or minor release will heavily feature expanded MCP compatibility and enterprise fleet controls:
*   **Remote MCP Support:** [PR #2776](https://github.com/nanocoai/nanoclaw/pull/2776) introduces HTTP/SSE support for remote MCP servers, moving beyond local standard I/O (stdio) limitations.
*   **Fleet Management Controls:** [PR #2780](https://github.com/nanocoai/nanoclaw/pull/2780) introduces an environment variable (`NANOCLAW_DISABLE_UPGRADE_TRIPWIRE=1`) to opt-out of startup upgrade tripwires, a necessary feature for immutable, managed deployments.
*   **External Credential Injection:** Aligning with [Issue #2781](https://github.com/nanocoai/nanoclaw/issues/2781), expect native support for externally provided router/API credentials to bypass local gateways entirely.

### 7. User Feedback Summary
Users are pushing NanoClaw into complex, production-grade deployments but are encountering friction with containerized storage boundaries and aggressive budget controls. Specifically, users want clearer feedback when underlying LLM infrastructure fails (like billing errors) and seamless file mounting between host and agent containers (as seen in the WhatsApp media bug). Additionally, the community is organically building connectors for external services (Strava, HTTP-based MCPs), demonstrating a thriving and self-sufficient open-source ecosystem around the core framework.

### 8. Backlog Watch
*   **[Issue #1669](https://github.com/nanocoai/nanoclaw/issues/1669):** Open since April 2026, this question about the Terms of Service / ban risks regarding Anthropic's OAuth reverse-proxy implementation still lacks a definitive maintainer response. Given the critical nature of account bans, an official stance is urgently needed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-17, NullClaw is experiencing highly active development, characterized by a strong focus on resolving long-standing bugs and pushing major architectural features forward. The community is highly engaged, with recent activity concentrated around enterprise integrations (MS Teams) and background processing capabilities (cron/scheduler). However, the project currently shows a bottleneck in the maintainer review process, as there were zero merged PRs or closed issues in the last 24 hours despite a steady influx of substantial contributions. Overall project health appears stable, though merge queues are lengthening.

### 2. Releases
*Omitted. No new releases were recorded in the last 24 hours.*

### 3. Project Progress
No PRs were merged today, but significant progress is visible in the open pipeline, specifically regarding background processing and platform integration:
*   **Cron/Scheduler Infrastructure:** A massive feature addition is nearing completion with [PR #783](https://github.com/nullclaw/nullclaw/pull/783), which introduces a DB-backed scheduler, JSON CLI outputs, and security hardening. 
*   **Security Fixes:** Contributor `vernonstinebaker` submitted [PR #959](https://github.com/nullclaw/nullclaw/pull/959) to persist paired tokens securely (using ChaCha20-Poly1305 encryption) for cron tool access. This is a direct follow-up to [PR #783](https://github.com/nullclaw/nullclaw/pull/783) and a fix for Issue #839.

### 4. Community Hot Topics
The most actively discussed items revolve around local execution limitations and enterprise platform connectivity:
*   **[Issue #952](https://github.com/nullclaw/nullclaw/issues/952) ([bug] Local model using ollama returns incomplete answers):** With 2 comments, this highlights a friction point for users trying to run NullClaw locally. The underlying need is better token-handling or context-window management when interfacing with local Ollama models (like Gemma), which often have stricter output constraints.
*   **[PR #958](https://github.com/nullclaw/nullclaw/pull/958) (fix(teams): accept lowercase serviceurl JWT claim):** This addresses a critical integration failure with MS Teams. It highlights the community's ongoing need for flawless enterprise communication platform support, specifically regarding strict JWT validation compliance.

### 5. Bugs & Stability
*   **Severity: High | [Issue #839](https://github.com/nullclaw/nullclaw/issues/839) - [bug] bit has no access to scheduler**
    *   *Details:* Users report that the agent loses access to the scheduler, breaking automated tasks.
    *   *Fix Status:* **Patch available.** [PR #959](https://github.com/nullclaw/nullclaw/pull/959) directly addresses this by securely persisting the paired token between the gateway and the cron tool.
*   **Severity: Medium | [Issue #952](https://github.com/nullclaw/nullclaw/issues/952) - [bug] Local model using ollama returns incomplete answers**
    *   *Details:* Agent responses are truncated when using Ollama.
    *   *Fix Status:* No PR is currently available. Likely requires adjustments to NullClaw's local inference payload handling or prompt sizing.

### 6. Feature Requests & Roadmap Signals
The open PRs strongly signal the project's immediate roadmap trajectory:
*   **Advanced Task Automation:** [PR #783](https://github.com/nullclaw/nullclaw/pull/783) introduces a comprehensive cron subagent engine with run history, atomic task queuing, and per-job timezone offsets. This signals a major pivot from a purely conversational AI assistant to an autonomous, background-running AI agent framework.
*   **Enterprise & DevOps Readiness:** The addition of `--json` flags for CLI outputs and heavy security hardening (encrypted tokens at rest) indicates that the maintainers are targeting enterprise deployment and CI/CD automation use cases for the next major version.

### 7. User Feedback Summary
Users are actively pushing NullClaw into production environments, specifically utilizing it to bridge LLMs with enterprise tools (MS Teams) and scheduling workflows. There is notable frustration regarding local model execution, as seen in Issue #952, where local Ollama implementations yield degraded performance compared to cloud APIs. Satisfaction with the project's extensibility remains high among contributors, evidenced by complex, well-documented PRs from community members like `yanggf8` and `dtarandek`. 

### 8. Backlog Watch
*   **[PR #783](https://github.com/nullclaw/nullclaw/pull/783) (Created: 2026-04-07):** Open for over two months. This is a massive, complex feature PR that desperately needs maintainer review to avoid bit-rot. 
*   **[Issue #839](https://github.com/nullclaw/nullclaw/issues/839) (Created: 2026-04-18):** Open for two months. Despite having a coded solution in [PR #959](https://github.com/nullclaw/nullclaw/pull/959), it requires maintainer action to merge and release the fix to users experiencing broken scheduler access.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project digest for IronClaw based on the provided GitHub data.

# IronClaw Project Digest — 2026-06-17

## 1. Today's Overview
IronClaw is currently exhibiting a very high development velocity, driven largely by internal "dogfooding" initiatives for the Reborn WebUI and Engine V2. Over the past 24 hours, the project processed exactly 50 issues (31 open, 19 closed) and 50 pull requests (33 open, 17 merged/closed), indicating an exceptionally active maintenance and feature integration cycle. The core engineering team is heavily focused on hardening agent reliability—specifically addressing tool approval workflows, OAuth integrations, and error recovery to prevent terminal run failures. While no new releases were shipped today, the sheer volume of merged PRs suggests a major stabilization update is imminent. Overall project health appears robust, with systematic tracking of UX feedback and rapid iteration on bugs.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Significant advancements were made across multiple core systems today, particularly in run execution reliability, UI feedback, and observability:
*   **Agent Run Reliability & Error Recovery:** Merged [PR #4954](https://github.com/nearai/ironclaw/pull/4954) ensures that approval-gate denials are surfaced to the model rather than abruptly cancelling the run, preventing infinite loop behaviors. [PR #4993](https://github.com/nearai/ironclaw/pull/4993) (Open) fixes an issue where the no-progress safety guard falsely reported task completion. 
*   **Tooling & Capability Visibility:** Merged [PR #4858](https://github.com/nearai/ironclaw/pull/4858) significantly improves UX by surfacing sanitized shell command details in approval prompts and activity logs, directly resolving previous blind spots.
*   **Engine V2 Integration:** The team is actively pushing Engine V2 compatibility. [PR #4989](https://github.com/nearai/ironclaw/pull/4989) (Open) persists Engine V2 LLM usage data into the admin aggregates, while [PR #4997](https://github.com/nearai/ironclaw/pull/4997) (Open) adds a host-side seam to extract text from binary documents (PDF, DOCX, etc.) in Google Drive.
*   **Developer Operations:** Work is ongoing to improve CI/CD quality, with the merging of benchmark forwarding ([PR #4995](https://github.com/nearai/ironclaw/pull/4995)) and active PRs for multi-tenant isolation contract tests ([PR #3890](https://github.com/nearai/ironclaw/pull/3890)).

## 4. Community Hot Topics
The most actively discussed issues center around confusion during initial setup and agent behavior during multi-step tool executions:
*   **Onboarding & OAuth Confusion ([Issue #4908](https://github.com/nearai/ironclaw/issues/4908)):** A highly discussed issue where the Google Calendar extension displays as "ACTIVE" while still prompting the user to click "Activate." This highlights underlying state-management friction in the Reborn UI extensions layer.
*   **Failed Tool Execution UX ([Issue #4942](https://github.com/nearai/ironclaw/issues/4942)):** Users reported that failed tool calls do not render in the UI until a manual page reload, breaking real-time conversational flow. This is actively being addressed in [PR #4984](https://github.com/nearai/ironclaw/pull/4984).
*   **Agent Dead-ends on Repeated Failures ([Issue #4761](https://github.com/nearai/ironclaw/issues/4761)):** When tools repeatedly fail (e.g., trying to reach an unreachable URL), the agent stops completely instead of recovering or explaining the failure to the user. This is targeted by the massive architectural fix in [PR #4841](https://github.com/nearai/ironclaw/pull/4841).

## 5. Bugs & Stability
Today's bug reports are heavily concentrated on the Reborn WebUI, with varying degrees of severity:
1.  **[HIGH] Recurring Automations Permanently Blocked ([Issue #4986](https://github.com/nearai/ironclaw/issues/4986)):** Automations requiring tool approval (like `builtin.http`) can become permanently stuck waiting for human intervention, breaking background workflows.
2.  **[HIGH] Run Fails After Successful Google OAuth ([Issue #4907](https://github.com/nearai/ironclaw/issues/4907)):** Authentication succeeds, but the original agent run dies instead of resuming execution. *Fix in progress: [PR #4998](https://github.com/nearai/ironclaw/pull/4998).*
3.  **[MEDIUM] WASM Google Drive Auth Dead-End ([Issue #4991](https://github.com/nearai/ironclaw/issues/4991)):** Expired Google OAuth tokens return a generic `operation_failed` error without prompting the user to refresh credentials. *Fix in progress: [PR #4968](https://github.com/nearai/ironclaw/pull/4968).*
4.  **[LOW] Automations UI Clarity ([Issue #4988](https://github.com/nearai/ironclaw/issues/4988), [Issue #4981](https://github.com/nearai/ironclaw/issues/4981)):** Dashboard status badges (MUTED, SIGNAL, INFO) and ambiguous colored dots for execution history are confusing users.

## 6. Feature Requests & Roadmap Signals
Analysis of today's issues and PRs reveals a clear trajectory for the next release:
*   **Robust Background Automations:** The system is moving toward seamless background execution. Signals point to dynamic, per-turn permission resolutions without requiring app restarts ([Issue #4959](https://github.com/nearai/ironclaw/issues/4959)).
*   **Preview Deployments:** An infrastructure request ([Issue #4881](https://github.com/nearai/ironclaw/issues/4881)) to implement Vercel-like preview environments for PRs will likely be adopted soon to speed up QA.
*   **Self-Healing Agent Loops:** The team is building a "reflection" E2E testing framework ([PR #4994](https://github.com/nearai/ironclaw/pull/4994)) and comprehensive error-recovery pipelines ([PR #4841](https://github.com/nearai/ironclaw/pull/4841)) so that agents rarely hit terminal, unrecoverable states. 

## 7. User Feedback Summary
Real user interactions underscore a phase of rapid, sometimes volatile, iteration. 
*   **Pain Points:** Users are frustrated by friction during first-run setups—especially configuring GSuite and GitHub Classic PATs versus Fine-grained PATs ([Issue #4806](https://github.com/nearai/ironclaw/issues/4806)). Furthermore, silent failures in the UI erode trust; users want to see exactly what shell command is being run ([Issue #4852](https://github.com/nearai/ironclaw/issues/4852)) and immediate feedback when tools are denied or fail.
*   **Satisfaction:** Despite UX frictions, the heavy volume of internal QA (via "Dogfoolding" issues like [#4879](https://github.com/nearai/ironclaw/issues/4879)) shows a highly committed core team actively smoothing out the rough edges of an undeniably complex AI agent ecosystem.

## 8. Backlog Watch
*   **[PR #4876](https://github.com/nearai/ironclaw/pull/4876) (Dependabot):** A massive dependency bump affecting 43 packages (including agent-client-protocol and rustls). As an "XL" change, it requires careful maintainer review to avoid regressions.
*   **[Issue #4692](https://github.com/nearai/ironclaw/issues/4692) & [Issue #4879](https://github.com/nearai/ironclaw/issues/4879):** Ongoing mega-threads for weekly local dogfooding findings. These serve as the primary backlogs for UX and WebUI nits and require continuous triage.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI Project Digest — 2026-06-17

## 1. Today's Overview
LobsterAI (by NetEase Youdao) is demonstrating active, steady development with a clear focus on UI/UX refinement and architectural stability. Over the past 24 hours, the project processed 4 pull requests, successfully merging 75% of them (3 closed), with no new releases published. The development team is heavily focused on improving the collaborative "Cowork" experience and refining the visual interface. While new feature velocity is healthy, the project has a noticeable backlog of stale issues and PRs that require triage to maintain long-term code health.

## 2. Releases
*No new releases were published in the last 24 hours. The last known referenced version in issues is `v2026.4.1`.*

## 3. Project Progress
Development today was highly productive, focusing primarily on frontend optimizations, search capabilities, and UX enhancements. Three significant PRs were closed/merged:
*   **Artifacts & Preview Experience ([PR #2169](https://github.com/netease-youdao/LobsterAI/pull/2169)):** Major UI/UX overhaul of preview cards. This includes unifying dark mode hover effects, adding subtitles, optimizing the HTML open-with menu (prioritizing the built-in browser), and refining multi-file collapse views.
*   **Cowork Search Architecture ([PR #2170](https://github.com/netease-youdao/LobsterAI/pull/2170)):** Shifted task search from a shallow frontend filter (preloaded recent sessions) to a robust database query against the backing SQLite store. This significantly improves search scalability without breaking existing sidebar and pagination behaviors.
*   **Cowork UI Controls ([PR #2168](https://github.com/netease-youdao/LobsterAI/pull/2168)):** Introduced a smooth-scrolling floating "scroll-to-bottom" button for cowork conversations, complete with wheel passthrough and internationalization (i18n) support.

## 4. Community Hot Topics
The most active items in the repository are currently older issues and PRs that saw updates today (likely via automated stale bots or maintainer backlog reviews).
*   **Most Discussed / Impactful PR:** [PR #1424](https://github.com/netease-youdao/LobsterAI/pull/1424) addresses a "silent failure" issue in scheduled tasks. The underlying user need here is **system reliability**—users are frustrated when the UI lies about success states. 
*   *Underlying Needs:* The community strongly values accurate state reporting. Features that "fake" success (like the scheduled task bug) severely degrade trust in the AI agent's autonomy.

## 5. Bugs & Stability
Today's updates highlighted two distinct UI and logic bugs, though no critical crashes were reported.
1.  **[HIGH] Scheduled Task State Inconsistency ([PR #1424](https://github.com/netease-youdao/LobsterAI/pull/1424)):** The IPC handler for "stopping" scheduled tasks returns `{ success: true }` without actually stopping the task. Additionally, errors are written to Redux state but never surfaced in the UI. *Note: A comprehensive fix PR exists but is currently stale and needs merging.*
2.  **[LOW] Hotkey Duplication Validation Missing ([Issue #1425](https://github.com/netease-youdao/LobsterAI/issues/1425)):** Users can save duplicate keyboard shortcuts without receiving a warning, leading to potential UI conflicts later. 

## 6. Feature Requests & Roadmap Signals
Based on the recently merged code, the immediate roadmap signals point toward deeper integration of the "Lobster Browser" and better multitasking:
*   **Built-in Browser Priority:** The changes in [PR #2169](https://github.com/netease-youdao/LobsterAI/pull/2169) strongly indicate a strategic push to keep users inside the app's ecosystem rather than relying on external system browsers, especially for HTML artifacts.
*   **Multi-Agent/Cowork Maturation:** With database-backed search ([PR #2170](https://github.com/netease-youdao/LobsterAI/pull/2170)) and UI scrolling fixes ([PR #2168](https://github.com/netease-youdao/LobsterAI/pull/2168)), the team is clearly preparing the "Cowork" feature for heavier, session-heavy workloads.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing friction with background tasks. The core dissatisfaction stems from a lack of transparency—when a background or scheduled task fails, the UI provides no feedback, leaving users to discover failures manually.
*   **Use Cases:** Heavy reliance on keyboard navigation and artifact generation/previewing.
*   **Satisfaction:** Generally positive, as users are utilizing advanced features (like custom hotkeys and scheduled tasks). However, dissatisfaction arises from minor polishing issues (like duplicate hotkeys slipping through validation).

## 8. Backlog Watch
The following items have been open since April 2026 and urgently require maintainer attention:
*   **[PR #1424](https://github.com/netease-youdao/LobsterAI/pull/1424) - Scheduled Task IPC & UI Fixes:** This is a critical UX-breaking bug. The PR is well-documented, solves both the backend logic and frontend error surfacing, but has gone stale. Needs review and merge.
*   **[Issue #1425](https://github.com/netease-youdao/LobsterAI/issues/1425) - Hotkey Validation:** Simple frontend validation request that has been left open and marked stale. Should be a quick win for a maintainer to implement and close out.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

Here is the structured project digest for TinyClaw (TinyAGI) based on the provided GitHub data.

### 1. Today's Overview
**Date:** 2026-06-17  
As of today, the TinyClaw (TinyAGI) project exhibits a low-volume, steady-state development pace with no releases or active issue discussions in the last 24 hours. The project's core functionality remains stable, and recent community focus has shifted entirely toward ecosystem compatibility rather than building new features. Activity over the past day is limited to a single, highly technical pull request addressing native Windows environments. Overall project health appears quiet but stable, with contributors actively working to broaden the framework's cross-platform accessibility. 

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
*No pull requests were merged or closed today.* However, a new contribution was introduced to the review pipeline. The project is currently focused on fixing platform-specific execution bugs rather than advancing new core capabilities. 

### 4. Community Hot Topics
The most notable active item in the repository is a newly opened Pull Request concerning CLI operability:
*   **[PR #281](https://github.com/TinyAGI/tinyagi/pull/281) [OPEN]**: *fix: Windows cross-platform support in CLI* by `mperkins0155`
    *   **Analysis:** The underlying need here is cross-platform accessibility. Users attempting to run TinyClaw natively on Windows (outside of Windows Subsystem for Linux) are experiencing complete CLI failures. By addressing this, the project is actively trying to lower the barrier to entry for Windows-based developers.

### 5. Bugs & Stability
The past 24 hours highlighted three specific bugs preventing native Windows execution, detailed in [PR #281](https://github.com/TinyAGI/tinyagi/pull/281). 

*   **High Severity:** 
    *   **Path Resolution Crash (`MODULE_NOT_FOUND`)**: The use of `new URL('.', import.meta.url).pathname` incorrectly resolves Windows paths to a malformed format (e.g., `/C:/Users/...`). This breaks Node.js module loading entirely on Windows, causing a hard crash during CLI initialization.
*   **Medium Severity:**
    *   **Platform-Specific Execution Blockers**: Two additional Windows-only bugs (details pending in the PR body) prevent the `tinyagi` CLI from running properly outside of WSL. 
    *   *Note:* A comprehensive fix for all three bugs has been submitted in [PR #281](https://github.com/TinyAGI/tinyagi/pull/281) and is currently awaiting maintainer review.

### 6. Feature Requests & Roadmap Signals
There were no new feature requests or explicit roadmap updates in the last 24 hours. However, the emphasis on cross-platform stability signals that the project's immediate trajectory is focused on robustness and developer experience (DX). Once [PR #281](https://github.com/TinyAGI/tinyagi/pull/281) is merged, it is highly likely the project will cut a minor patch release to provide native Windows users with a working CLI. 

### 7. User Feedback Summary
Current user feedback (derived from PR context) points to a clear pain point: **Operating System compatibility friction**. Users operating in native Windows environments have expressed dissatisfaction with being forced to use workarounds (like WSL) just to interact with the `tinyagi` CLI. The primary use case driving this feedback is local, native AI agent management on standard Windows machines. Addressing this PR will likely result in a noticeable uptick in user satisfaction among Windows developers.

### 8. Backlog Watch
While there are no long-unanswered issues reported today, the repository currently has one item requiring immediate maintainer attention:
*   **[PR #281](https://github.com/TinyAGI/tinyagi/pull/281)** needs a code review and testing on a native Windows environment. Merging this contribution is critical to unblocking Windows users and expanding TinyClaw's user base.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-06-17

### 1. Today's Overview
As of June 17, 2026, the Moltis project exhibits a quiet but steadily progressing development status. There has been a complete absence of issue activity, new releases, or merged code in the past 24 hours. However, two significant pull requests have been actively updated, indicating that the core development team is focused on expanding configurability and external integrations. Overall project health appears stable, currently prioritizing architectural enhancements over rapid feature releases.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
While no PRs were merged or closed today, active development is advancing on two key fronts:
*   **Automated Contextualization:** Work is progressing on the ability to inject runtime context dynamically, moving away from manual user input. 
*   **External Agent Expansion:** Developers are refining the `/model` interface to support more granular configuration for external agents, signaling a push toward broader interoperability.

### 4. Community Hot Topics
Community engagement is currently focused on the development side rather than user-reported issues, as evidenced by the two open PRs authored by `gptme-thomas`. Both items have generated 0 comments and 0 reactions, suggesting a heads-down, independent development phase rather than a collaborative community debate. 
*   [PR #1124: Add context command support for chat turns](https://github.com/moltis-org/moltis/pull/1124) addresses the need for automated environment context.
*   [PR #1125: Support model and effort selection for external agents](https://github.com/moltis-org/moltis/pull/1125) highlights a community push for customizable external model usage.

### 5. Bugs & Stability
*No bugs, crashes, or regressions were reported by the community in the last 24 hours.* The issue tracker shows zero open or active issues, indicating no immediate stability threats.

### 6. Feature Requests & Roadmap Signals
Although no formal feature requests were filed today, the open PRs provide strong roadmap signals. The project is clearly moving toward:
1.  **Automated Context Management:** Allowing deployments to run scripts/commands to gather session context automatically.
2.  **External Provider Flexibility:** Giving users first-class control over both the model and the compute effort applied when routing tasks to external agents. 
*Prediction:* If these PRs are merged in their current state, the next minor version release will likely focus heavily on "Enterprise/Deployment Integrations" and "External Agent Customization."

### 7. User Feedback Summary
Direct user feedback is currently unavailable due to a 24-hour drought of issue creation, comments, or reactions. The current lack of friction points (bugs/issues) suggests that the existing user base is either highly technical, self-sufficient, or simply waiting for the next batch of features to be merged. The pain points being addressed right now are strictly architectural, driven by the maintainers rather than end-users.

### 8. Backlog Watch
*   **Needs Maintainer Action:** Both [PR #1124](https://github.com/moltis-org/moltis/pull/1124) and [PR #1125](https://github.com/moltis-org/moltis/pull/1125) have been open since June 15th and updated on June 16th, yet remain unmerged and lack any code review comments. Maintainers should prioritize reviewing these to unblock further development.
*   **Issue Tracker:** The issue tracker is completely clear of long-unanswered items, giving the maintainers a clean slate to operate from.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured project digest for CoPaw (QwenPaw) based on the GitHub data from 2026-06-17.

### 1. Today's Overview
The CoPaw (QwenPaw) project exhibits **highly active and healthy development**, driven by a strong open-source community and responsive maintainers. In the last 24 hours, the project processed 41 issues (closing 22) and 40 PRs (merging/closing 20), alongside the release of version `v1.1.12-beta.1`. Community engagement is currently surging, with a notable influx of first-time contributors submitting valuable patches for UI, context management, and platform stability. However, the issue tracker indicates that recent updates have introduced platform-specific regressions, particularly concerning macOS stability (ChromaDB crashes) and context management freezes.

### 2. Releases
*   **[v1.1.12-beta.1](https://github.com/agentscope-ai/QwenPaw/releases)**
    *   **Security:** Isolated the keychain master key per install to prevent cross-installation credential access.
    *   **Desktop (Windows):** Hardened the Tauri Windows CI to mitigate `crates.io` fetch failures.
    *   *Note:* As a beta release, users relying on the Tauri Desktop app or enterprise deployments should test thoroughly before production rollout.

### 3. Project Progress
Maintainers and contributors aggressively merged fixes and features today, focusing on model compatibility and core stability:
*   **Configuration Safety:** Merged [PR #5229](https://github.com/agentscope-ai/QwenPaw/pull/5229) to enforce deep copying of cached agent configurations, fixing a critical bug where user configs (`agent.json`) were silently overwritten. 
*   **Model Provider Compatibility:** Merged [PR #5226](https://github.com/agentscope-ai/QwenPaw/pull/5226) and [PR #5228](https://github.com/agentscope-ai/QwenPaw/pull/5228), which sanitize tool schemas and use native formatters to prevent `400 INVALID_ARGUMENT` errors and support non-OpenAI formats (like Gemini).
*   **Console UX Enhancements:** Merged [PR #5222](https://github.com/agentscope-ai/QwenPaw/pull/5222) adding a "simple mode" with flat navigation and sorted sessions, addressing complaints about UI clutter. 
*   **Channels:** Added a fallback message for empty model responses in chat ([PR #5232](https://github.com/agentscope-ai/QwenPaw/pull/5232)).

### 4. Community Hot Topics
*   **Process Freezes during Context Compaction** ([Issue #5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) - 13 comments): Users report that sub-agents triggering context compression freeze the app entirely. This ties directly to open [PR #5242](https://github.com/agentscope-ai/QwenPaw/pull/5242), which adds timeout protection to LLM calls during compaction.
*   **Massive Token Savings Proposal** ([Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063) - 6 comments): High interest in integrating "Headroom" as a reversible context compression layer. A corresponding first-time contributor [PR #5244](https://github.com/agentscope-ai/QwenPaw/pull/5244) is already under review.
*   **Feishu CardKit Streaming Lag** ([Issue #5167](https://github.com/agentscope-ai/QwenPaw/issues/5167) - 5 comments): Enterprise users highlighted severe latency when streaming long replies via Feishu, noting the chunk-by-chunk rendering degrades usability.

### 5. Bugs & Stability
Ranked by severity:
1.  **[Critical] macOS SIGSEGV Crashes via ChromaDB** ([Issue #5243](https://github.com/agentscope-ai/QwenPaw/issues/5243)): Frequent null-pointer crashes (`chromadb_rust_bindings.abi3.so`) interrupting memory vector operations. *Fix status:* [PR #5246](https://github.com/agentscope-ai/QwenPaw/pull/5246) submitted to add config overrides and fallback paths.
2.  **[High] Tauri Desktop Crash Loop** ([Issue #5209](https://github.com/agentscope-ai/QwenPaw/issues/5209): The backend process enters a reboot death-loop on macOS ARM64. *Fix status:* [PR #5238](https://github.com/agentscope-ai/QwenPaw/pull/5238) repairs Tauri plugin dependency startup behavior.
3.  **[High] Silent Failure of DingTalk Stream** ([Issue #5214](https://github.com/agentscope-ai/QwenPaw/issues/5214)): System sleep creates "half-open" TCP connections for DingTalk, causing messages to be permanently lost without error logs. (Fix pending).
4.  **[Medium] Cron Task Interruption** ([Issue #5250](https://github.com/agentscope-ai/QwenPaw/issues/5250)): Scheduled cron tasks inject as user messages, hijacking the agent's current complex workflows. *Fix status:* [PR #5241](https://github.com/agentscope-ai/QwenPaw/pull/5241) increases misfire grace seconds.

### 6. Feature Requests & Roadmap Signals
Based on community proposals, the following areas are signaling the next phase of QwenPaw's roadmap:
*   **Agent Self-Evolution** ([Issue #5205](https://github.com/agentscope-ai/QwenPaw/issues/5205)): Moving beyond static `AGENTS.md` rules into dynamic behavior correction, allowing the agent to compile mistakes into enforceable logic.
*   **Enterprise Channel Upgrades** ([Issue #5217](https://github.com/agentscope-ai/QwenPaw/issues/5217)): Strong demand for WeCom (Enterprise WeChat) to support combined text + image payloads natively.
*   **Workspace Hygiene** ([Issue #5225](https://github.com/agentscope-ai/QwenPaw/issues/5225)): Decoupling temporary model generation files from the root workspace directory to prevent file management chaos.

### 7. User Feedback Summary
*   **Pain Point - Multi-Model Fidelity:** Users utilizing newer or non-standard models (like MiniMax-M2.5 or LongCat-2.0) are frustrated by reasoning format incompatibilities (e.g., XML parsing failures, mismatched "reasoning" vs "thinking" blocks) breaking agent loops ([Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625), [Issue #5208](https://github.com/agentscope-ai/QwenPaw/issues/5208)).
*   **Pain Point - Desktop Resource Management:** Desktop users feel the UI layout prioritizes navigation over actual chat space and suffer from silent background crashes.
*   **Positive Feedback - Plugin Ecosystem:** Users are highly enthusiastic about extending capabilities, actively requesting specific tools like `kimi-for-coding` and commending the integration of data analysis tools like `DataPaw`.

### 8. Backlog Watch
*   **[PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622) DataPaw Plugin (Open since May 22):** A massive contribution adding 12 BI/Data-analysis skills. It has been under review for nearly a month. Given the community's hunger for better coding/data tools, this needs a final maintainer review or roadmap alignment.
*   **[PR #5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) Sandbox Interface Discussion (Open since June 10):** A breaking change proposal for initial governance and plugin sandboxing. Crucial for the project's long-term security posture but currently stalled in the discussion phase.
*   **[Issue #5156](https://github.com/agentscope-ai/QwenPaw/issues/5156) Kimi-for-coding Support:** Users want the `uv` allowlist updated to bypass official API routes for their existing coding subscriptions. Requires maintainer input on security and integration policies.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

Here is the structured project digest for ZeptoClaw based on the provided GitHub data.

### 1. Today's Overview
As of 2026-06-17, the ZeptoClaw project is experiencing a period of low developmental and community activity. Over the past 24 hours, there have been no new releases, no newly opened issues, and no community interactions such as comments or reactions. The only recorded activity is a single automated dependency update, indicating that automated maintenance processes are functioning normally even in the absence of direct human contribution. While the project does not appear to be actively growing at this moment, the lack of incoming bug reports suggests baseline stability for current users.

### 2. Releases
*No new releases were recorded in this reporting period.*

### 3. Project Progress
No new code was merged or implemented into the project today. The sole item updated in the last 24 hours is an automated dependency pull request ([PR #630](https://github.com/qhkm/zeptoclaw/pull/630)), which proposes upgrading the project's Debian Docker base image. 

### 4. Community Hot Topics
*There were no active community discussions in the past 24 hours.* 
There are currently zero open issues or user-generated pull requests, indicating either a highly stable user experience or a dormant/inactive community footprint.

### 5. Bugs & Stability
*No bugs, crashes, or regressions were reported today.* 
The complete absence of new issue creation over the 24-hour window suggests that the latest deployed version of ZeptoClaw is operating without major disruptions for its existing user base.

### 6. Feature Requests & Roadmap Signals
*No new feature requests were logged today.* 
Because user feedback and issue tracking are currently empty, there are no immediate roadmap signals to analyze. The project's immediate trajectory appears focused purely on routine maintenance.

### 7. User Feedback Summary
*No direct user feedback was captured in the last 24 hours.*
Without new comments, bug reports, or discussions, it is impossible to gauge current real user pain points or use cases. 

### 8. Backlog Watch
The primary item currently requiring maintainer attention is the automated dependency PR:
*   **[PR #630](https://github.com/qhkm/zeptoclaw/pull/630) - chore(deps): bump debian from `b6e2a15` to `4e401d9`**: Authored by Dependabot, this PR aims to update the Docker base image (`trixie-slim`). Although low-risk, it currently sits open and should be reviewed and merged by maintainers to ensure the project's containerized environment remains secure and up-to-date.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw based on the provided GitHub data.

# ZeroClaw Project Digest — 2026-06-17

## 1. Today's Overview
The ZeroClaw project is experiencing a highly active and healthy development phase, marked by robust community engagement and rapid iteration. With 33 issues updated and an impressive 50 pull requests seeing activity in the last 24 hours, the maintainers are clearly pushing hard on upcoming milestones. The ratio of open to merged PRs (27 open vs. 23 closed) indicates a steady merge cadence, focusing heavily on backend hardening, terminal UX (ZeroCode), and the upcoming v0.8.2 WASM plugin system. While no new releases dropped today, the volume of feature-tracking issues and RFCs being accepted suggests the team is laying a strong foundation for the next major iteration. 

## 2. Releases
*No new releases were recorded in this reporting period.*

## 3. Project Progress
Significant advancements were made across the codebase today, with 23 PRs merged or closed. Key progress includes:
*   **Observability & Telemetry:** [PR #7771](https://github.com/zeroclaw-labs/zeroclaw/pull/7771) successfully wired `channel`, `agent_alias`, and `turn_id` metadata into agent lifecycle observer events, enabling better OpenTelemetry (OTel) trace correlation.
*   **Security & Agent Posture:** [PR #7321](https://github.com/zeroclaw-labs/zeroclaw/pull/7321) introduced a read-only `zeroclaw security status` command, allowing operators to audit the effective security posture of configured agents.
*   **Terminal UX (ZeroCode):** Work continues to bring the TUI to feature parity with the web dashboard. [PR #7802](https://github.com/zeroclaw-labs/zeroclaw/pull/7802) added a dedicated `doctor` pane for terminal-first operators.
*   **Gateway Fixes:** [PR #7801](https://github.com/zeroclaw-labs/zeroclaw/pull/7801) improved error handling for gateway port binding conflicts, providing clear operator guidance instead of a raw spawn failure.

## 4. Community Hot Topics
The most active discussions center around project governance and operational workflows:
*   **Governance & Board Automation:** [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (11 comments) discusses an accepted RFC for "Work Lanes" to automate work routing via labels. This shows the community and maintainers are actively refining how scale contributes without creating manual administrative bottlenecks.
*   **Supply Chain Security:** [Issue #7675](https://github.com/zeroclaw-labs/zeroclaw/issues/7675) (2 comments) proposes adding a `ci-security-hardened.yml` workflow covering SBOM generation and provenance. This reflects a mature, enterprise-ready shift in the project's deployment expectations.
*   **Integration Trackers:** [Issue #6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) continues to track the massive v0.8.1 queue for channels and providers, highlighting the community's strong demand for extensibility.

## 5. Bugs & Stability
Several high-severity bugs (S1/S2) were reported today, many revolving around the gateway, MCP tool integrations, and channel regressions:
*   **Missing Slack/Discord Support [S1]:** [Issue #7787](https://github.com/zeroclaw-labs/zeroclaw/issues/7787) notes a severe regression where v0.8.0 prebuilt binaries strip out Slack and Discord channel features. *Fix status: Mitigated by downgrade; pending core fix.*
*   **MCP/Native Tool Unavailability [S1]:** [Issue #7756](https://github.com/zeroclaw-labs/zeroclaw/issues/7756) reports that tools are registering but not actually reaching models (OpenAI/Anthropic) during turns. 
*   **Code History Message Alternating Error [S1]:** [Issue #7804](https://github.com/zeroclaw-labs/zeroclaw/issues/7804) causes Anthropic provider calls to fail with a 400 error due to adjacent same-role messages.
*   **Gateway WebSocket Lifecycle [S1]:** [Issue #7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) highlights that client disconnects currently cancel in-flight agent turns. A corresponding feature request is in progress. 
*   **Looping Agent Tool Calls:** [PR #7681](https://github.com/zeroclaw-labs/zeroclaw/pull/7681) addresses a critical bug where `detect_no_progress` failed to catch infinite loops when interleaved with different tools. 

## 6. Feature Requests & Roadmap Signals
The roadmap signals a massive push toward flexible, per-agent configurations and terminal (TUI) parity:
*   **WASM Plugin Architecture:** [Issue #7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) tracks the v0.8.2 agnostic WASM plugin program, which will revolutionize how the community builds extensions.
*   **Per-Agent "Dream Mode":** [Issue #7794](https://github.com/zeroclaw-labs/zeroclaw/issues/7794) & [PR #7797](https://github.com/zeroclaw-labs/zeroclaw/pull/7797) request making background memory processing ("Dreaming") opt-in per agent, bringing parity to features seen in OpenClaw/Hermes.
*   **Granular Per-Agent Overrides:** [Issue #7749](https://github.com/zeroclaw-labs/zeroclaw/issues/7749) requests per-agent `prompt_injection_mode` overrides, moving away from global-only settings.
*   *Prediction:* The next version (likely v0.8.1 or v0.8.2) will almost certainly focus heavily on TUI feature parity, agent-specific security/memory configurations, and resolving the recent channel/provider regressions.

## 7. User Feedback Summary
Users are heavily utilizing ZeroClaw as a headless, multi-channel autonomous agent, but they are running into friction with documentation and enterprise scaling. 
*   **Documentation Frustration:** A poignant S1 bug report ([Issue #7758](https://github.com/zeroclaw-labs/zeroclaw/issues/7758) - *“It doesn't matter how good the code is if the documentation is crap”*) highlights that users find configuration syntax and quickstart guides inaccessible.
*   **Missing Documentation for Tools:** Users specifically noted missing cron documentation and an inability to assign cheap models to scheduled tasks ([Issue #7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762)).
*   **Web vs. TUI parity:** Power users operating in headless environments are frustrated that the terminal UI lacks critical features found in the web gateway, such as switching active code sessions ([Issue #7803](https://github.com/zeroclaw-labs/zeroclaw/issues/7803)) and viewing all skill types ([Issue #7757](https://github.com/zeroclaw-labs/zeroclaw/issues/7757)).

## 8. Backlog Watch
Several important but long-lingering issues and PRs require maintainer attention to prevent system degradation:
*   **Security Vulnerability in Skill Cooldowns:** [Issue #6683](https://github.com/zeroclaw-labs/zeroclaw/issues/6683) (open since May 15) reveals that skill patching ignores cooldown limits, allowing unbounded skill mutations. This needs immediate priority.
*   **Gateway Port Pairing Bug:** [Issue #5266](https://github.com/zeroclaw-labs/zeroclaw/issues/5266) (open since April 3) breaks device pairing on non-default ports, a frustrating hurdle for developers running multiple instances.
*   **Stale PRs:** Several community PRs from May have gone stale and are marked as `stale-candidate`, including [PR #6626](https://github.com/zeroclaw-labs/zeroclaw/pull/6626) (security OTP warnings), [PR #6861](https://github.com/zeroclaw-labs/zeroclaw/pull/6861) (MCP tool filter groups), and [PR #6630](https://github.com/zeroclaw-labs/zeroclaw/pull/6630) (Telegram prompt caching). These need review or closure to keep the contribution queue healthy.

</details>