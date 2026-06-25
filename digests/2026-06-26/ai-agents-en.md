# OpenClaw Ecosystem Digest 2026-06-26

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-25 22:26 UTC

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

Here is the project digest for OpenClaw based on the provided GitHub data for June 26, 2026.

### 1. Today's Overview
OpenClaw is experiencing an exceptionally high volume of activity, with 500 issues and 500 pull requests updated in the last 24 hours. The project is pushing the boundaries of enterprise-grade AI agent orchestration, evidenced by the new beta release focusing on advanced channel control and Slack/Mattermost integrations. However, the massive scale of open issues (477 active/closed today) and pending PRs (394 open) suggests the engineering team and community are heavily engaged in a backlog battle. Core focuses have shifted toward enterprise stability, including severe memory leak resolutions, multi-session architecture improvements, and tightening security boundaries for untrusted inputs across community skills.

### 2. Releases
**v2026.6.11-beta.1** 
The latest beta introduces highly anticipated features for channel operations, making them easier to automate and tune. 
*   **Slack Relay Mode:** New capability for advanced Slack message routing.
*   **Mattermost Native Queueing:** Introduced `/oc_queue` for Mattermost.
*   **Granular Model Overrides:** Added per-DM (Direct Message) model overrides, allowing operators to use different models for specific users or contexts on the fly. 

### 3. Project Progress
Today's development progress is heavily focused on memory management, security hardening, and asynchronous execution (cron jobs).
*   **Plugin Security Boundaries ([PR #96556](https://github.com/openclaw/openclaw/pull/96556)):** Introduced an `allowStateAccess` permission for `agent_end`, allowing plugins to read run success/failure metrics without being exposed to sensitive raw conversation content.
*   **Resilient Cron Jobs ([PR #83933](https://github.com/openclaw/openclaw/pull/83933)):** Fixed an issue where manual runs of cron jobs would accidentally delete `deleteAfterRun` jobs and mutate consecutive error counters. 
*   **Message Delivery Safeguards ([PR #88968](https://github.com/openclaw/openclaw/pull/88968)):** Ensured that background memory flush failures do not abort and overwrite actual user replies.
*   **Untrusted Payload Buffering ([PR #96033](https://github.com/openclaw/openclaw/pull/96033), [PR #96495](https://github.com/openclaw/openclaw/pull/96495)):** Added strict size caps (`maxBytes`) to JSON response parsing across Mattermost, OpenAI, Google, OpenRouter, and Minimax image generation extensions to prevent OOM attacks from untrusted servers.

### 4. Community Hot Topics
*   **Community Skill Security & ClawHub Ecosystem ([Issue #50090](https://github.com/openclaw/openclaw/issues/50090), [Issue #45740](https://github.com/openclaw/openclaw/issues/45740)):** Users are actively discussing the "wide gap" between the promise of ClawHub and actual security. @zients reported that raw GitHub issue bodies are injected directly into sub-agent prompts without sanitization. Underlying need: A secure sandboxing or prompt-injection firewall for community-developed skills.
*   **Multi-encoding File Handling ([Issue #48788](https://github.com/openclaw/openclaw/issues/48788)):** Highly discussed proposal to centralize filename encoding (handling Shift-JIS, EUC-KR, GB18030) across channel adapters following a Feishu bug. Underlying need: Robust internationalization layer for file transfers.
*   **Skill Priority Configuration ([Issue #50199](https://github.com/openclaw/openclaw/issues/50199)):** Request for overlapping skills to have priority rules. Underlying need: Better routing logic as users stack multiple skills (e.g., GitHub issues vs. Jira).

### 5. Bugs & Stability
*   🔴 **P1: Gateway Memory Leak / OOM Crashes ([Issue #55334](https://github.com/openclaw/openclaw/issues/55334), [Issue #54155](https://github.com/openclaw/openclaw/issues/54155)):** `sessions.json` experiences unbounded growth, ballooning memory from 389MB to 14.7GB over 4 days due to duplicated `skillsSnapshot` data. 
*   🔴 **P1: Discord Internal Trace Leaks ([Issue #44905](https://github.com/openclaw/openclaw/issues/44905)):** Internal tool-call artifacts (like `NO_REPLY`, `commentary`, and function JSON arguments) are being surfaced directly to end-users in Discord channels.
*   🟠 **P2: Broken Chrome Extension / Cross-Machine Relay ([Issue #53599](https://github.com/openclaw/openclaw/issues/53599)):** A regression in v2026.3.22 removed the driver extension, breaking managed hosting providers that rely on cross-machine browser automation.
*   🟠 **P2: Hallucinated Cron Outputs ([Issue #49876](https://github.com/openclaw/openclaw/issues/49876)):** Isolated cron sessions are fabricating plausible-looking outputs instead of failing cleanly when tools break, creating trust and safety issues.
*   *Note: Multiple fix PRs for stability, including [PR #96853](https://github.com/openclaw/openclaw/pull/96853) (reconcile stale running sessions) and [PR #84009](https://github.com/openclaw/openclaw/pull/84009) (daily session reset schedules), are currently open and awaiting merge.*

### 6. Feature Requests & Roadmap Signals
*   **First-Class Multi-Session Architecture ([Issue #48874](https://github.com/openclaw/openclaw/issues/48874)):** Request for a shared LLM inference layer with isolated sessions and a public knowledge base. This is a strong signal for enterprise multi-tenant architecture.
*   **Model-Aware Memory Failover ([Issue #63990](https://github.com/openclaw/openclaw/issues/63990)):** Allowing multi-index embedding support so vector spaces aren't corrupted when switching between embedding providers.
*   **Guaranteed Raw Message Context ([Issue #58818](https://github.com/openclaw/openclaw/issues/58818)):** A mechanism to ensure the last *N* raw messages survive daily context resets and compaction.
*   **Prediction:** Given the current PRs, the next stable release will likely heavily feature robust cron execution, strict MCP/OAuth serialization (e.g., [PR #94610](https://github.com/openclaw/openclaw/pull/94610)), and bounded payload reads across all REST extensions.

### 7. User Feedback Summary
*   **Pain Point - Session State Management:** The most prominent frustration is "session chaos." Users report subagents appearing completed before work finishes ([Issue #50165](https://github.com/openclaw/openclaw/issues/50165)), parent sessions getting stuck ([Issue #52249](https://github.com/openclaw/openclaw/issues/52249)), and agents promising follow-ups without triggering background actions ([Issue #58450](https://github.com/openclaw/openclaw/issues/58450)).
*   **Pain Point - Hardcoded Regressions:** A notable frustration was a merged PR that hardcoded a user's local directory (`/Users/wangtao`) into production, breaking Docker/working directories ([Issue #51429](https://github.com/openclaw/openclaw/issues/51429)).
*   **Satisfaction:** The community remains highly engaged, praising the breadth of channel integrations (WhatsApp, Feishu, Mattermost) and actively contributing complex field reports for browser automation tools ([Issue #44431](https://github.com/openclaw/openclaw/issues/44431)). 

### 8. Backlog Watch
*   **Persistent Stale RFCs:** [Issue #45758](https://github.com/openclaw/openclaw/issues/45758) (YAML config support) and [Issue #48874](https://github.com/openclaw/openclaw/issues/48874) have been open since March and need product decisions.
*   **Large Untouched PRs:** [PR #46303](https://github.com/openclaw/openclaw/pull/46303) (fixing SIGUSR1 buffer wipes) and [PR #44143](https://github.com/openclaw/openclaw/pull/44143) (serializing outbound deliveries) are massive community contributions marked as "waiting on author" or "needs proof" since March. These represent critical message-delivery fixes that risk being abandoned.
*   **Doctor Config Drift ([Issue #50561](https://github.com/openclaw/openclaw/issues/50561)):** Users request auto-applying safe gateway fixes on startup to prevent repeated config warnings, a quality-of-life feature sitting in the backlog since March.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the June 26, 2026 community digests.

# Cross-Project Analysis: AI Agent & Personal Assistant Ecosystem (June 26, 2026)

## 1. Ecosystem Overview
The open-source AI agent and personal assistant ecosystem is currently experiencing a massive developmental pivot from foundational LLM integration toward production-grade stability, security, and enterprise multi-tenancy. Projects across the board are aggressively hardening their execution environments to mitigate prompt injection, Out-Of-Memory (OOM) crashes, and Server-Side Request Forgery (SSRF) vulnerabilities. There is a unified push toward sophisticated multi-agent orchestration (sub-agents, delegation) and modular tool management, heavily driven by the adoption of the Model Context Protocol (MCP). Furthermore, the ecosystem is expanding its footprint across communication channels, prioritizing native, privacy-preserving integrations for platforms like Slack, Discord, Matrix, and regional IMs.

## 2. Activity Comparison
*Health Score is inferred from PR merge rates, issue triaging responsiveness, and community engagement metrics.*

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 | ~500 | **v2026.6.11-beta.1** (Active) | 🟢 Excellent (High engagement, backlog battle) |
| **NanoBot** | 22 | 38 | No release (Patches imminent) | 🟢 Excellent (Rapid security triaging) |
| **Hermes Agent**| 50 | 50 | No release | 🟢 Excellent (Balanced iteration & feature drop) |
| **IronClaw** | 47 | 50 | No release (Major "Reborn" migration) | 🟢 Excellent (Heavy core refactoring) |
| **CoPaw** | 27 | 50 | No release (Runtime 2.0 migration) | 🟢 Excellent (Strong 1st-time contributor flow) |
| **ZeroClaw** | 48 | 50 | No release | 🟢 Excellent (RFC-driven, architectural focus) |
| **PicoClaw** | N/A | 19 | No release | 🟡 Good (Steady bug fixing, quiet community) |
| **LobsterAI** | < 5 | 9 | No release | 🟡 Moderate (Strong dev velocity, stale issues) |
| **NanoClaw** | N/A | 16 | No release | 🟡 Good (Maturing, container focus) |
| **NullClaw, TinyClaw, Moltis, ZeptoClaw** | 0 | 0 | Dormant | 🔴 Inactive |

## 3. OpenClaw's Position
**OpenClaw** operates at a massive scale, processing ~500 issues and PRs daily, placing it at the apex of community engagement alongside ZeroClaw and Hermes Agent. 
*   **Advantages vs. Peers:** OpenClaw is aggressively capturing the enterprise market. Its latest beta release introduces highly tuned channel operations (e.g., Slack Relay, Mattermost Queueing, per-DM model overrides) that outpace competitors. Furthermore, its focus on secure plugin boundaries (`allowStateAccess`) positions it well for enterprise audits.
*   **Technical Approach Differences:** While ZeroClaw bets heavily on a WebAssembly (Wasm) first-architecture, and IronClaw experiments with userland memory stores, OpenClaw remains focused on resilient asynchronous execution (cron jobs) and strict payload buffering to prevent OOM attacks. 
*   **Vulnerabilities:** OpenClaw's massive scale is its Achilles' heel. It is currently battling severe P1 memory leaks (389MB to 14.7GB over 4 days) and "session chaos" (subagents stuck, hallucinated cron outputs). Unlike smaller projects like NanoBot or NanoClaw, which boast rapid merge rates for bug fixes, OpenClaw has a massive backlog of stale RFCs and untouched PRs representing critical message-delivery fixes.

## 4. Shared Technical Focus Areas
Several universal requirements are emerging across the ecosystem:
1.  **Granular Security & Sandboxing:** A top priority across the board. **NanoBot** patched severe `exec` tool bypasses, **NanoClaw** confined file reads to `/workspace`, **Hermes Agent** is building TLS-intercepting egress firewalls, and **ZeroClaw** is tightening delegate tool allowlists. As agents gain autonomy, robust sandboxing is mandatory.
2.  **Context Memory Management & Compaction:** Preventing context window explosions and memory loss is a shared struggle. **Hermes Agent** and **CoPaw** are fighting UI crashes from large histories and dropped messages during context compression. **OpenClaw** and **IronClaw** are heavily focused on token budget management and memory leak prevention.
3.  **Advanced Multi-Agent Orchestration:** Transitioning from single-turn bots to complex workflows. **CoPaw**, **LobsterAI**, and **OpenClaw** are refining sub-agent state management and parent/child session polling.
4.  **MCP Integration & Lifecycle Management:** The Model Context Protocol is widely adopted but facing growing pains. **NanoBot** and **ZeroClaw** are actively patching MCP resource exposures and orphaned child processes, emphasizing the need for robust MCP server lifecycle management.

## 5. Differentiation Analysis
*   **Enterprise vs. Hobbyist/Local:** OpenClaw and Hermes Agent are heavily targeting enterprise multi-tenancy (shared inference, zero-knowledge credential brokers). In contrast, NanoBot and CoPaw are heavily focused on the local/desktop user experience (WebUI/PWA support, Windows desktop fixes).
*   **Architecture:** ZeroClaw is differentiating itself by ripping out native code in favor of a Rust → WebAssembly plugin architecture to ensure high performance and strict security boundaries.
*   **Ecosystem Alignment:** LobsterAI is tailoring its experience specifically to regional/Chinese LLMs (Qwen, GLM) and IM platforms (QQ, DingTalk), whereas OpenClaw and Hermes Agent focus on global standards (Slack, Mattermost, Discord).
*   **Platform Delivery:** NanoClaw is unique in its strict reliance on containerization (Docker resource limits, Rancher/Apple container support), making it highly portable for self-hosted enterprise deployments.

## 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Momentum):** NanoBot, Hermes Agent, and IronClaw. These projects are merging large volumes of community PRs, rapidly closing security loopholes, and reacting instantly to user feedback.
*   **Scaling & Stabilizing (Mature Phase):** OpenClaw and ZeroClaw. While incredibly active, their development is bottlenecked by massive architectural RFCs, large codebases, and the complexity of maintaining unbounded community ecosystems. They are shifting from feature drops to stability maintenance.
*   **Stagnating:** LobsterAI shows strong backend development but severely lacks community issue triaging, leading to stale user reports. 

## 7. Trend Signals
*   **Zero-Trust Agent Execution:** The era of trusting agent outputs is ending. Projects are implementing strict circuit breakers (PicoClaw), payload size caps (OpenClaw), and multi-admin approvals (NanoClaw) to prevent autonomous agents from incurring massive costs or executing destructive loops.
*   **Native E2EE Messaging:** There is a strong trend toward decentralized, privacy-focused communication gateways. NanoClaw and PicoClaw are replacing unmaintained libraries (libolm) and fragile bridges with native Rust adapters (vodozemac) for Matrix and Deltachat.
*   **Progressive Context Disclosure:** To reduce LLM latency and token bloat, projects like IronClaw and OpenClaw are implementing lazy-loading tool schemas and dynamic context injection, shifting away from dumping massive system prompts into the context window.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot based on the GitHub data from 2026-06-26.

### 1. Today's Overview
NanoBot is exhibiting exceptionally high development velocity and community engagement, processing 38 pull requests and 22 issues in the last 24 hours alone. The project's current phase is heavily focused on security hardening, specifically regarding shell command execution (`exec`) and Model Context Protocol (MCP) server capabilities. Several critical vulnerabilities were identified and rapidly addressed through open PRs, demonstrating a highly responsive security posture. Additionally, developers are actively merging bug fixes to enhance system stability across WebUI, third-party APIs, and provider integrations. 

### 2. Releases
No new releases were published today. Given the high volume of security patches and bug fixes currently in the PR pipeline, a patch release is likely imminent.

### 3. Project Progress
Significant progress was made today in squashing bugs and improving system robustness, with 14 PRs merged or closed. Key fixes include:
*   **WebUI & UI Enhancements:** [PR #4494](https://github.com/HKUDS/nanobot/pull/4494) introduced Progressive Web App (PWA) support and mobile swipe gestures, while [PR #4493](https://github.com/HKUDS/nanobot/pull/4493) fixed voice transcription failures for Xiaomi MiMo ASR by adding WebM-to-WAV conversion.
*   **Core Stability:** [PR #4533](https://github.com/HKUDS/nanobot/pull/4533) fixed a session key collision on disk that caused cross-session data bleeding. [PR #4530](https://github.com/HKUDS/nanobot/pull/4530) resolved an issue where duplicate tool call IDs from OpenAI-compatible providers caused execution loops.
*   **Tooling Limits:** [PR #4522](https://github.com/HKUDS/nanobot/pull/4522) implemented a generic guard against infinite loops for repeated, failing tool calls (e.g., `read_file`).

### 4. Community Hot Topics
The community was highly active in security auditing and system deployment configurations today.
*   **Security Auditing:** Security researcher `YLChen-007` submitted a flurry of high-priority vulnerabilities regarding the `exec` tool's allowlist bypasses ([Issue #4514](https://github.com/HKUDS/nanobot/issues/4514), [Issue #4520](https://github.com/HKUDS/nanobot/issues/4520)) and MCP scope exposures ([Issue #4519](https://github.com/HKUDS/nanobot/issues/4519)). This indicates a mature project attracting serious security scrutiny.
*   **Windows Deployments:** Two highly engaged bug reports ([Issue #4513](https://github.com/HKUDS/nanobot/issues/4513), [Issue #4511](https://github.com/HKUDS/nanobot/issues/4511)) highlighted persistent issues when running NanoBot as a Windows background service using `nssm`, specifically regarding process management and port binding on restarts.

### 5. Bugs & Stability
Today's bugs were heavily weighted toward security bypasses and edge-case crashes, with fixes already in progress:
*   **[Critical] `exec` Allowlist Bypasses:** Multiple issues ([#4514](https://github.com/HKUDS/nanobot/issues/4514), [#4520](https://github.com/HKUDS/nanobot/issues/4520), [#4521](https://github.com/HKUDS/nanobot/issues/4521)) revealed that users could execute chained shell commands (e.g., `echo hello; rm -rf /`) bypassing `allowPatterns`.
  * *Fix Status:* [PR #4526](https://github.com/HKUDS/nanobot/pull/4526) addresses this by changing regex matching from `search()` to `fullmatch()`.
*   **[High] MCP Scope Bypass:** Issue [#4519](https://github.com/HKUDS/nanobot/issues/4519) showed that MCP resources and prompts ignored the `enabledTools` allowlist, potentially leaking capabilities to the model.
  * *Fix Status:* [PR #4524](https://github.com/HKUDS/nanobot/pull/4524) applies filtering to resources and prompts.
*   **[Medium] Telegram Web Regression:** [Issue #4488](https://github.com/HKUDS/nanobot/issues/4488) noted that recent rich message features broke rendering on Telegram Web. (Closed)
*   **[Low] Flaky Tests:** [PR #4523](https://github.com/HKUDS/nanobot/pull/4523) addressed a flaky test related to identical file modification times in memory pruning.

### 6. Feature Requests & Roadmap Signals
Several advanced feature requests signal the project's trajectory toward more autonomous, robust, and fine-tuned agent behaviors:
*   **Agent Clarification Mechanism:** [Issue #4508](https://github.com/HKUDS/nanobot/issues/4508) requests an `ask_clarification` tool, allowing the agent to pause and ask focused questions rather than hallucinating or failing on ambiguous prompts.
*   **Sub-agent Architecture:** [PR #4414](https://github.com/HKUDS/nanobot/pull/4414) (aggregated result mode) and [PR #4415](https://github.com/HKUDS/nanobot/pull/4415) (spawn model override) indicate a strong push toward making sub-agents more modular and configurable.
*   **Resource Management:** [PR #4506](https://github.com/HKUDS/nanobot/pull/4506) proposed an idle timeout auto-kill watchdog for MCP servers to prevent memory leaks from zombie processes.

*Roadmap Prediction:* The next minor version will likely heavily feature sub-agent configuration options, PWA support out-of-the-box, and tightened MCP resource management.

### 7. User Feedback Summary
Users are pushing NanoBot into complex, production-grade environments, which is surfacing specific pain points:
*   **Sandbox vs. Usability Friction:** Users want to lock down the `exec` tool for safety ([Issue #4441](https://github.com/HKUDS/nanobot/pull/4441), [PR #4404](https://github.com/HKUDS/nanobot/pull/4404)), but require flexible sandboxing (like custom `bwrap` bind roots) to access local toolchains without compromising security.
*   **Provider Compatibility:** There is ongoing friction with non-OpenAI providers. Users have to manually patch configurations to support different thinking styles ([Issue #4429](https://github.com/HKUDS/nanobot/issues/4429)) or handle non-standard audio formats ([Issue #4492](https://github.com/HKUDS/nanobot/issues/4492)).
*   **Platform Support:** Windows users feel somewhat left behind by process lifecycle features (like `--background` and `/restart`), which appear highly optimized for Unix environments.

### 8. Backlog Watch
*   **Long-standing Silent Issues:** [Issue #1710](https://github.com/HKUDS/nanobot/issues/1710) (open since March 2026) highlights an ongoing frustration where the model returns "I've completed processing but have no response to give," particularly with smaller/local models like Qwen 3.5. This lacks recent comments and needs a core prompt-engineering review.
*   **Idle PRs Needing Review:** [PR #4402](https://github.com/HKUDS/nanobot/pull/4402) (Eager memory consolidation) and [PR #4437](https://github.com/HKUDS/nanobot/pull/4437) (Heartbeat trigger command) represent significant architectural contributions to memory and cron-job handling that have been open for nearly a week without merge activity. Maintainers should prioritize reviewing these to prevent contribution bottlenecks.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-06-26

## 1. Today's Overview
Hermes Agent is currently exhibiting extremely high open-source project health, characterized by massive community engagement and rapid iteration. In the past 24 hours, the project processed 50 issues (closing 17) and 50 pull requests (merging/closing 18), indicating a highly responsive maintainance cycle. The development focus is heavily split between maturing the agent's core architecture—specifically context memory and session compaction—and expanding enterprise capabilities through advanced security boundaries and integrations. Meanwhile, the community is actively tackling platform integrations (Slack, Telegram, Discord) and addressing edge cases across diverse OS environments like Windows.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Development velocity is exceptionally high, with several critical pull requests making it into the codebase today:
*   **Security Enhancements:** Maintainers merged [PR #35940](https://github.com/NousResearch/hermes-agent/pull/35940), which blocks private network redirects in Slack image batches. Additionally, [PR #52349](https://github.com/NousResearch/hermes-agent/pull/52349) (currently open) enforces strict cloud-metadata floors on browser tools, preventing Server-Side Request Forgery (SSRF) vulnerabilities.
*   **Core System Fixes:** [PR #51741](https://github.com/NousResearch/hermes-agent/pull/51741) fixed two critical bugs preventing the `/compress` command from working in the TUI with LM Studio. [PR #48048](https://github.com/NousResearch/hermes-agent/pull/48048) resolved a benign but alarming systemd error message during gateway restarts.
*   **UI & Dashboard Cleanup:** [PR #52717](https://github.com/NousResearch/hermes-agent/pull/52717) removed cost and cache-hit rate reporting from all UI surfaces to prevent inaccurate billing estimates from confusing users. [PR #52719](https://github.com/NousResearch/hermes-agent/pull/52719) cleanly relabeled mixed platform configurations under a unified "Messaging" tab.
*   **Performance:** [PR #48932](https://github.com/NousResearch/hermes-agent/pull/48932) drastically optimized the dashboard's session stats API, replacing an O(N) SQL query loop with a single `GROUP BY` query.

## 4. Community Hot Topics
The community is highly engaged in discussing architectural limitations and integration capabilities:
*   **Credential & Sandbox Security:** [Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656) (11 comments) proposes a zero-knowledge HTTP/HTTPS broker for agent credentials. This aligns closely with [PR #30179](https://github.com/NousResearch/hermes-agent/pull/30179), showing a strong community drive toward enterprise-grade credential isolation.
*   **Context Management Optimization:** [Issue #39691](https://github.com/NousResearch/hermes-agent/issues/39691) (8 comments, 10 👍) requests granular, tool-output level compression using `headroom-ai` instead of whole-context LLM calls, highlighting user demand for more efficient token management.
*   **Platform Integration Upgrades:** Users are actively requesting modern formatting standards across messaging platforms. [Issue #8552](https://github.com/NousResearch/hermes-agent/issues/8552) (8 comments) requests Slack Block Kit markdown, while [Issue #44428](https://github.com/NousResearch/hermes-agent/issues/44428) (7 comments) asks for Telegram Bot API 10.1 Rich Messages.
*   **i18n Expansion:** [Issue #52137](https://github.com/NousResearch/hermes-agent/issues/52137) requests Russian localization, adding to a growing backlog of French, Chinese, and Portuguese localization requests, signaling global adoption.

## 5. Bugs & Stability
Several high-severity (P1/P2) bugs were reported or addressed today:
*   **Memory Black Holes (P1):** Multiple issues revealed critical flaws in context compaction. [Issue #29522](https://github.com/NousResearch/hermes-agent/issues/29522) and [Issue #28093](https://github.com/NousResearch/hermes-agent/issues/28093) report that automatic context compaction actively drops just-completed assistant responses or unprocessed user messages.
*   **Search & Recall Failure (P1):** [Issue #19434](https://github.com/NousResearch/hermes-agent/issues/19434) details a critical `session_search` failure where JSON snapshots and SQLite split-brains, essentially breaking cross-session memory.
*   **Dangerous Skill Archiving (P1):** [Issue #29912](https://github.com/NousResearch/hermes-agent/issues/29912) notes that the Curator skill may archive operationally critical skills during umbrella consolidation without verified evidence.
*   **Dashboard/UI Crashes (P2):** [Issue #36658](https://github.com/NousResearch/hermes-agent/issues/36658) reports a broken dashboard chat feature due to React error #301, and [Issue #46260](https://github.com/NousResearch/hermes-agent/issues/46260) highlights complete installation failures on Windows 10 during the npm desktop setup phase.
*   **Rate Limiting / Edge Cases (P2):** [Issue #50663](https://github.com/NousResearch/hermes-agent/issues/50663) and [Issue #47685](https://github.com/NousResearch/hermes-agent/issues/47685) report hard rate limits and 429 errors when using z.ai / GLM-5.2 coding plans, specifically triggered by the phrase "Hermes Agent" in system prompts.

## 6. Feature Requests & Roadmap Signals
Based on today’s PRs and highly-rated issues, the upcoming roadmap will likely feature:
*   **First-Class Projects (Epic):** [PR #49037](https://github.com/NousResearch/hermes-agent/pull/49037) introduces a massive desktop overhaul bringing per-profile Projects, a coding rail, and a review pane, directly positioning Hermes as an IDE-adjacent AI assistant.
*   **Advanced Sandboxing:** [PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427) adds Vertex AI as a first-class provider, while [PR #30179](https://github.com/NousResearch/hermes-agent/pull/30179) adds a TLS-intercepting egress firewall for remote sandboxes.
*   **Platform-Sarse Tooling:** [PR #52683](https://github.com/NousResearch/hermes-agent/pull/52683) brings tool-side inline-query dispatch to Telegram, and [Issue #52597](https://github.com/NousResearch/hermes-agent/issues/52597) highlights a need to disable specific toolsets (like web search) on a per-messenger-platform basis.

## 7. User Feedback Summary
*   **Pain Points:** Users are experiencing deep frustration with context compression. The memory "black holes" (dropped messages, broken `session_search`) undermine trust in the agent's long-term autonomous capabilities. Additionally, Windows users continue to face installation friction (e.g., npm desktop failures, gateway crashes due to cp950 encoding in [Issue #52649](https://github.com/NousResearch/hermes-agent/issues/52649)).
*   **Use Cases:** The community is heavily utilizing Hermes as an autonomous coding agent integrated with diverse messaging platforms (Slack, Discord, Matrix) and external models (z.ai, LM Studio, Copilot).
*   **Satisfaction/Dissatisfaction:** While excitement is high for enterprise features (Projects, Vertex AI, custom providers like [PR #52645](https://github.com/NousResearch/hermes-agent/pull/52645)), there is underlying anxiety regarding UI accuracy (stale model labels in [Issue #48173](https://github.com/NousResearch/hermes-agent/issues/48173)) and silent memory loss.

## 8. Backlog Watch
The following important items require direct maintainer attention:
*   **[Issue #4656](https://github.com/NousResearch/hermes-agent/issues/4656):** Open since April 2026, this zero-knowledge credential proxy is vital for enterprise deployment and needs final approval/batching with recent egress proxy PRs.
*   **[PR #49037](https://github.com/NousResearch/hermes-agent/pull/49037):** The "First-class Projects" PR is an architectural cornerstone for the Desktop UI but has been open for nearly a week; it needs thorough review to avoid blocking related desktop feature development.
*   **[PR #8427](https://github.com/NousResearch/hermes-agent/pull/8427):** Vertex AI support has been waiting since April. Given the high community demand for alternative providers, this should be prioritized for merge.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw on 2026-06-26.

### 1. Today's Overview
PicoClaw exhibits highly active and healthy maintenance status, driven primarily by rigorous dependency updates and aggressive bug-fixing. Over the last 24 hours, the project processed 19 Pull Requests (merging/closing 6) and resolved several critical stability issues. The development team is heavily focused on code hardening, specifically addressing edge cases in type assertions, error handling, and resource leaks. While new feature development remains steady with the introduction of new communication gateways, the overarching theme of today's activity is maximizing agent execution stability and preventing silent failures. 

### 2. Releases
*No new releases were published today.*

### 3. Project Progress
The project made substantial progress in system stability and background task management. 
*   **Evolution & Agent Behavior:** The team successfully merged a critical fix for the "Evolution" feature (PR [#3169](https://github.com/sipeed/picoclaw/pull/3169)), preventing it from wastefully spending tokens on periodic heartbeat checks. 
*   **Build & Provider Fixes:** A native search logging error (PR [#3166](https://github.com/sipeed/picoclaw/pull/3166)) and an OpenAI-compatible model list read failure (PR [#3168](https://github.com/sipeed/picoclaw/pull/3168)) were fixed, ensuring reliable LLM provider integration.
*   **Code Quality & Hardening:** Maintainers merged multiple pull requests today (e.g., PR [#3172](https://github.com/sipeed/picoclaw/pull/3172), PR [#3171](https://github.com/sipeed/picoclaw/pull/3171), PR [#3170](https://github.com/sipeed/picoclaw/pull/3170)) focused on explicitly handling error paths and type assertions to prevent Go panics. Additionally, a Matrix user ID parsing bug was fixed via PR [#3045](https://github.com/sipeed/picoclaw/pull/3045).

### 4. Community Hot Topics
*   **High-Priority Cryptography Overhaul ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088))**: A highly upvoted (👍 2) feature request asks for the replacement of `libolm` with `vodozemac`. The community highlights that `libolm` is currently unmaintained and insecure, indicating a strong user need for robust end-to-end encryption, especially for Matrix integration.
*   **Deltachat Integration ([PR #3063](https://github.com/sipeed/picoclaw/pull/3063))**: A community-submitted PR introducing a Deltachat gateway has generated activity, showing strong demand for decentralized and privacy-focused messaging channels.
*   **Cron Tasks & Channels ([Issue #1757](https://github.com/sipeed/picoclaw/issues/1757))**: A lengthy discussion (10 comments) regarding channel errors when an agent executes continuous hourly tasks highlights the community's reliance on PicoClaw for long-running, autonomous background workflows.

### 5. Bugs & Stability
*   **🔴 High: Infinite Token Consumption ([Issue #3012](https://github.com/sipeed/picoclaw/issues/3012))**
    *   *Bug:* Continuous consumption of tokens every minute when "Evolution" is enabled.
    *   *Status:* **Fixed & Closed**. The underlying cause was addressed in PR [#3169](https://github.com/sipeed/picoclaw/pull/3169), which skips the cold path for heartbeat turns.
*   **🟠 Medium: Session History Corruption ([PR #3115](https://github.com/sipeed/picoclaw/pull/3115))**
    *   *Bug:* Plain text tool outputs (like `read_file` or `exec`) returning base64 strings were incorrectly parsed as media attachments, corrupting session history. A comprehensive fix PR is currently under review.
*   **🟡 Low: Duplicate Agent Messages ([PR #3142](https://github.com/sipeed/picoclaw/pull/3142))**
    *   *Bug:* Async sub-agents triggered duplicate message deliveries. A fix to clear the `ForUser` field in sub-turn ToolResults is currently open.

### 6. Feature Requests & Roadmap Signals
Several clear signals point to the next phase of PicoClaw's roadmap:
*   **Remote Agent Execution:** PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) introduces a remote WebSocket mode, signaling a shift towards decoupled agent execution environments (running agents on separate servers/devices rather than locally).
*   **Expanding Channel Ecosystems:** The push for Deltachat (PR [#3063](https://github.com/sipeed/picoclaw/pull/3063)) alongside dependency bumps for LINE and Telegram indicates an aggressive expansion of supported communication platforms.
*   **Security Modernization:** The open request to migrate to `vodozemac` ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)) suggests an upcoming architectural pivot regarding how PicoClaw handles encrypted message transports.

### 7. User Feedback Summary
*   **Pain Point - Cost Control:** Users deploying PicoClaw on continuous loops (like Web/MiniMax deployments) are highly sensitive to token drainage, as seen in the token consumption bug. Autonomy features like "Evolution" need strict circuit breakers.
*   **Use Case - Autonomous Monitoring:** Users are actively trying to build agents that watch files or states and report via Telegram on an hourly/daily basis. Channel stability during these long-running cron triggers is a primary concern.
*   **Satisfaction:** Despite some complex edge-case bugs, the rapid turnaround from bug report to merged regression test (e.g., the Evolution token fix) demonstrates a highly responsive core team, earning community confidence.

### 8. Backlog Watch
*   **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) - Migrate libolm to vodozemac**: Flagged as `priority: high` and currently stale. Given the security implications of using unmaintained crypto libraries, this issue requires immediate maintainer triage to either accept PRs or outline an implementation path.
*   **[PR #3142](https://github.com/sipeed/picoclaw/pull/3142) - Spawn Sub-turn Duplicate Messages**: Open for over a week and marked stale. This affects fundamental message delivery logic for asynchronous agents and needs a review pass.
*   **Dependabot Queue:** There are currently 5 open Dependabot PRs (e.g., PR [#3177](https://github.com/sipeed/picoclaw/pull/3177), PR [#3173](https://github.com/sipeed/picoclaw/pull/3173)). While routine, the backlog should be batch-merged soon to prevent merge conflicts in core SDK dependencies.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw based on the GitHub data provided.

### 1. Today's Overview
**June 26, 2026** - NanoClaw demonstrates exceptional project health and active maintainer engagement today, merging 11 Pull Requests alongside 5 new open PRs. The development focus is heavily skewed toward enhancing core stability, tightening container and file system security, and expanding integration capabilities (such as Matrix and Slack). The community is highly active, contributing complex fixes for edge cases in v1-to-v2 migrations, socket handling, and credential management. Overall, the rapid merge rate of high-quality, regression-tested bug fixes indicates a highly responsive maintainer team and a maturing AI agent ecosystem.

### 2. Releases
*No new releases were published today.*

### 3. Project Progress
Significant advancements were merged today, particularly around system reliability, security, and container management:
*   **Security Enhancements:** PR [#2817](https://github.com/nanocoai/nanoclaw/pull/2817) was merged to confine `send_file` reads strictly to the `/workspace` directory, successfully blocking workspace symlinks that attempt to escape containment.
*   **Credential & Auth Posture:** Merged PR [#2855](https://github.com/nanocoai/nanoclaw/pull/2855) introduces a robust auth posture where Claude OAuth subscriptions act as the primary credential, automatically failing over to a standby `ANTHROPIC_API_KEY` if the subscription is evicted.
*   **Container Resource Management:** PR [#2856](https://github.com/nanocoai/nanoclaw/pull/2856) adds opt-in CPU and memory limits (`docker run --cpus` and `--memory`) to prevent a single agent from monopolizing host resources.
*   **Core Bug Fixes:** Several crucial fixes landed, including preventing dead peer service registrations from accumulating in OS launchers ([#2830](https://github.com/nanocoai/nanoclaw/pull/2830)), fixing JSON primitive parsing in the router ([#2815](https://github.com/nanocoai/nanoclaw/pull/2815)), and correcting byte-count caps for socket responses to prevent multi-byte UTF-8 overflows ([#2813](https://github.com/nanocoai/nanoclaw/pull/2813)).
*   **Agent Approvals:** PR [#2832](https://github.com/nanocoai/nanoclaw/pull/2832) introduces a "Reject with reason" feature for module approval cards, allowing the denying admin to send actionable feedback back to the agent.

### 4. Community Hot Topics
*   **Agent Approval Bottlenecks ([Issue #2857](https://github.com/nanocoai/nanoclaw/issues/2857)):** A highly relevant feature request asking for multi-admin approvals and terminal CLI approvals. Currently, if the primary admin is offline, the agent gets blocked. This highlights a community need for High Availability (HA) and self-hosted, terminal-based oversight for enterprise deployments.
*   **Matrix E2EE Rewrite ([PR #2844](https://github.com/nanocoai/nanoclaw/pull/2844)):** An open PR replacing the Chat SDK bridge with a native, Rust-backed Matrix adapter. This indicates a strong community push towards prioritizing robust, native End-to-End Encryption (E2EE) for privacy-focused communication platforms.

### 5. Bugs & Stability
*   **High Severity - Migration Crash:** A fatal bug for older installations (v1.1.0) where the v2 DB seed crashes with `no such column: is_main`. This cascades and breaks sessions and tasks. A fix is actively open in PR [#2859](https://github.com/nanocoai/nanoclaw/pull/2859).
*   **Medium Severity - macOS SSL Failure:** Agents running on macOS via Rancher Desktop failed all API calls due to self-signed certificate detection caused by `TMPDIR` misconfiguration. Resolved and merged in PR [#2854](https://github.com/nanocoai/nanoclaw/pull/2854).
*   **Medium Severity - Router Socket Overflow:** Sockets were miscounting response caps by character length rather than byte length, causing crashes when processing multi-byte UTF-8 payloads. Fixed via merged PR [#2813](https://github.com/nanocoai/nanoclaw/pull/2813).
*   **Low Severity - Stale OS Daemons:** Deleting a NanoClaw checkout without uninstalling leaves dangling `launchd`/`systemd` services that infinitely try to launch missing binaries. Cleaned up via PR [#2830](https://github.com/nanocoai/nanoclaw/pull/2830).

### 6. Feature Requests & Roadmap Signals
Based on today's issue and PR activity, the immediate roadmap signals point toward **enterprise readiness and native integrations**:
*   **Distributed Approvals (Predicted next feature):** Driven by Issue [#2857](https://github.com/nanocoai/nanoclaw/issues/2857), implementing fallback admin queues or CLI-based approvals is critical for scaling agent fleets in production.
*   **Native Matrix Protocol Support:** PR [#2844](https://github.com/nanocoai/nanoclaw/pull/2844) shows an intent to phase out fragile bridge dependencies in favor of direct SDK implementations.
*   **Agent Self-Learning:** The closed `/learn` skill PR ([#2843](https://github.com/nanocoai/nanoclaw/pull/2843)) signals a roadmap push towards autonomous skill distillation, where agents dynamically create reusable tools from URLs or past conversations.

### 7. User Feedback Summary
*   **Pain Points:** Enterprise users and developers on macOS (using Rancher/Apple containers) are experiencing friction with network proxies and SSL certificates. Additionally, users running multiple agents on shared hosts are feeling the pain of resource monopolization, which required today's CPU/Memory limit fix.
*   **Satisfaction:** Feedback is overwhelmingly positive regarding the maintainers' pace. Contributors appreciate the rigorous standards (requiring replacement PRs with regression tests rather than just quick patches). The proactive posture on security (workspace confinement) and auth failover shows the project is maturing beyond a hobbyist tool into a reliable production agent.

### 8. Backlog Watch
*   **CLI Dashboard Addition ([PR #2858](https://github.com/nanocoai/nanoclaw/pull/2858) & [PR #2795](https://github.com/nanocoai/nanoclaw/pull/2795)):** The `/add-clidash` skill—a highly-anticipated read-only CLI-derived dashboard—has been iterating through maintainer-requested fixes for several days. It requires final review and merging as it provides significant operational visibility. 
*   **Slack Per-Thread Session Decoupling ([PR #2472](https://github.com/nanocoai/nanoclaw/pull/2472)):** Open since mid-May, this addresses a significant UX issue where Slack DMs collapse into a single ever-growing session. Though closed recently, verifying its deployment status should be a priority to ensure the fix reaches end-users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the project digest for IronClaw on 2026-06-26.

### 1. Today's Overview
IronClaw is currently exhibiting exceptionally high development velocity, driven primarily by the rollout of the "Reborn" stack and local dogfooding initiatives. Over the past 24 hours, the project saw a massive flurry of activity with 47 issues updated (17 closed) and 50 PRs updated (26 merged/closed), indicating a highly responsive and active core maintainer team. The focus is heavily split between aggressively triaging user-interface and approval-gate bugs from internal dogfooding, and merging foundational architecture overhauls. Specifically, the team is making huge strides in capability policies, memory management, and database write optimizations to prepare Reborn for broader multi-tenant use.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
The core team merged several critical architectural and performance improvements today:
*   **User-Scoped Tool Settings ([PR #5256](https://github.com/nearai/ironclaw/pull/5256)):** Fixed a major permissions issue where regular WebUI users couldn't access tool settings without operator privileges. 
*   **WASM Execution Freeze ([PR #5206](https://github.com/nearai/ironclaw/pull/5206)):** Resolved a devastating meltdown where ~40 concurrent turns starved the tokio worker pool, causing a 4-minute total runtime freeze.
*   **Prompt Content Denylist Fix ([PR #5258](https://github.com/nearai/ironclaw/pull/5258)):** Exempted certified skill content from the prompt denylist, fixing an issue where benign requests failed because of keyword collision in internal documentation.
*   **Engine v2 Tool Context ([PR #3669](https://github.com/nearai/ironclaw/pull/3669)):** Merged a massive effort to restore channel-supplied thread/response IDs to tools, enabling tools to properly correlate external side-effects with originating conversations.
*   **Tool Disabling Security ([PR #3548](https://github.com/nearai/ironclaw/pull/3548)):** Added a `DISABLE_TOOLS_LIST` flag that prevents specific tools from entering the registry or being dispatched, hardening multi-tenant environments.

### 4. Community Hot Topics
*   **The Reborn Dogfooding Initiative ([Issue #5119](https://github.com/nearai/ironclaw/issues/5119)):** Serving as the central tracker for the 06/22-06/28 local testing push. This is currently generating the most derivative discussions as developers and testers find first-run usability problems.
*   **Capability Policy Architecture ([Issue #5261](https://github.com/nearai/ironclaw/issues/5261) & [Issue #4628](https://github.com/nearai/ironclaw/issues/4628)):** A massive new epic initiated by `zetyquickly` to build admin-shared tools with per-user auth in the Reborn stack. This signals a major shift toward true enterprise multi-tenancy.
*   **Reborn Personal Memory System ([Issue #5260](https://github.com/nearai/ironclaw/issues/5260) & [PR #5205](https://github.com/nearai/ironclaw/pull/5205)):** `BenKurrek` introduced a north-star tracking issue and an implementing PR for a native, self-curating, self-learning memory store modeled as a "userland extension."

### 5. Bugs & Stability
Today's bug reports are heavily focused on Reborn WebUI stability, gate lifecycle, and UI states:
1.  **Critical - WASM Pool Starvation ([Fixed in PR #5206](https://github.com/nearai/ironclaw/pull/5206)):** Concurrent tool calls were entirely freezing the agent runtime.
2.  **High - Broken Tool Approval Flow ([Issue #5243](https://github.com/nearai/ironclaw/issues/5243), [Issue #5196](https://github.com/nearai/ironclaw/issues/5196)):** "Approve & always allow" fails to persist settings, and "Ask each time" throws duplicate authorization errors. 
3.  **High - Scheduler False Failures ([Issue #5239](https://github.com/nearai/ironclaw/issues/5239)):** The `turn_scheduler` misclassifies stale heartbeats as failures, attempting to kill already-completed runs.
4.  **Medium - UI State Loss ([Issue #5210](https://github.com/nearai/ironclaw/issues/5210)):** Sending a message while a tool approval is open causes repeated warnings and lost message state.
5.  **Low - UI Leak ([Issue #5191](https://github.com/nearai/ironclaw/issues/5191)):** Internal skill activation and context budget debug messages are bleeding into the main chat UI.

### 6. Feature Requests & Roadmap Signals
*   **Per-User Admin Tool Scoping:** The creation of the capability-policy epic ([Issue #5261](https://github.com/nearai/ironclaw/issues/5261)) and the opening of foundational PRs ([PR #5262](https://github.com/nearai/ironclaw/pull/5262), [PR #5263](https://github.com/nearai/ironclaw/pull/5263)) signals that granular, role-based (Owner > Admin > Member) capability access is the next major system rolling out.
*   **Skill Learning & Distillation:** [PR #5156](https://github.com/nearai/ironclaw/pull/5156) introduces an approval gate for "learned skills" from transcripts. This moves the roadmap toward self-improving agents while maintaining strict human-in-the-loop safety.
*   **Progressive Tool Disclosure:** [PR #5149](https://github.com/nearai/ironclaw/pull/5149) implements lazy-loading tool schemas to drastically cut prompt token sizes (from 25.8k down significantly), aimed squarely at reducing LLM latency and timeouts.

### 7. User Feedback Summary
Real user feedback (via dogfooding tracks like [Issue #5119](https://github.com/nearai/ironclaw/issues/5119)) highlights a product that is functionally powerful but UX-frustrating during its transitional "Reborn" phase. Users are dissatisfied with inconsistent UI behaviors, such as missing conversation timestamps ([Issue #5212](https://github.com/nearai/ironclaw/issues/5212)), frozen message inputs ([Issue #5208](https://github.com/nearai/ironclaw/issues/5208)), and a lack of onboarding guidance for automations ([Issue #4980](https://github.com/nearai/ironclaw/issues/4980)). However, the incredibly fast turnaround time by maintainers on these UX papercuts indicates a highly responsive development cycle that is rapidly building user trust.

### 8. Backlog Watch
*   **[PR #4544](https://github.com/nearai/ironclaw/pull/4544) - Scoped Lifecycle Admin Foundation:** Open since June 8th, this XL-sized PR is a massive dependency for multi-tenant capabilities and needs final review/merge to unblock subsequent work.
*   **[PR #4997](https://github.com/nearai/ironclaw/pull/4997) - Binary Document Extraction:** Open since June 16th, this highly requested feature adds seams for extracting text from PDFs, PPTX, and DOCX files via Google Drive.
*   **[Issue #5221](https://github.com/nearai/ironclaw/issues/5221) & [Issue #5173](https://github.com/nearai/ironclaw/issues/5173) - Deepseek-v4-flash Benchmarks:** Ongoing tracking issues for model-specific harness failures. While low-priority code-wise, they require ongoing attention from core contributors to triage infrastructure defects from actual model quality drops.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the GitHub data from 2026-06-26.

### 1. Today's Overview
LobsterAI is currently demonstrating a highly active and healthy development pace, characterized by a strong focus on backend stability and agent orchestration. In the last 24 hours, the engineering team merged 9 pull requests with a 100% closure rate, showing tight quality control and agile development velocity. The development focus is heavily centered on refining the "OpenClaw" plugin ecosystem and improving the "cowork" (multi-agent) experience. While the project's output is robust, there are signs of stagnation in community issue triaging, as no new releases were cut and older bug reports are starting to pile up. 

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
The project made massive strides in stabilizing multi-agent workflows, UI rendering, and third-party integrations. 9 PRs were successfully merged/closed today:
*   **Agent Orchestration & Cowork Enhancements:** Fixed polling mechanisms for subagents to ensure they continue running after parent completion ([#2199](https://github.com/netease-youdao/LobsterAI/pull/2199)). Resolved stream jitter issues to prevent duplicate plan messages in Qwen ([#2200](https://github.com/netease-youdao/LobsterAI/pull/2200)) and fixed block-level plan tag parsing for GLM models ([#2204](https://github.com/netease-youdao/LobsterAI/pull/2204)). Also updated the plan mode UI icon ([#2205](https://github.com/netease-youdao/LobsterAI/pull/2205)).
*   **OpenClaw Ecosystem Hardening:** Significant work was done to harden the OpenClaw extension framework, including deduplicating yielded assistant final syncs to prevent repeated thinking blocks ([#2201](https://github.com/netease-youdao/LobsterAI/pull/2201)), fixing precompiled local extension loading ([#2203](https://github.com/netease-youdao/LobsterAI/pull/2203)), and ensuring browser plugins remain allowlisted under restrictive configs ([#2202](https://github.com/netease-youdao/LobsterAI/pull/2202)).
*   **System & Integrations:** Pre-installed official QQ and Discord plugins for instant messaging routing, fixing NIM account/env-var indexing ([#2198](https://github.com/netease-youdao/LobsterAI/pull/2198)). Additionally, synced the "launch at login" feature directly with OS states, particularly cleaning up Windows login items ([#2206](https://github.com/netease-youdao/LobsterAI/pull/2206)).

### 4. Community Hot Topics
*Due to the data provided featuring only one active issue and no PR comments, there are no active "hot topics" in terms of volume.*
*   **Most Active Issue:** [Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392) regarding scheduled task switches not responding. 
*   **Underlying Needs:** Users relying on LobsterAI for automated, background-driven agent tasks need reliable UI toggles and deterministic state management for scheduled triggers. 

### 5. Bugs & Stability
Based on the day's merged PRs, developers have been aggressively patching streaming and multi-agent bugs. Ranked by severity:
1.  **High - Subagent State Desyncs:** Agents were duplicating visible replies and thinking blocks, or dropping terminal events. Fixed in [#2201](https://github.com/netease-youdao/LobsterAI/pull/2201) and [#2199](https://github.com/netease-youdao/LobsterAI/pull/2199).
2.  **Medium - UI/Stream Jitter:** Stream jitter from models like Qwen and GLM was causing broken UI rendering (duplicate messages, leaking tags). Fixed in [#2200](https://github.com/netease-youdao/LobsterAI/pull/2200) and [#2204](https://github.com/netease-youdao/LobsterAI/pull/2204).
3.  **Low - OS Integration Fragmentation:** Windows registry/login items were being cluttered due to historical argument variants. Fixed in [#2206](https://github.com/netease-youdao/LobsterAI/pull/2206).
4.  **Reported User Bug (Unfixed):** Scheduled tasks cannot be turned off via the UI toggle in some edge cases ([Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392)).

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were filed today, the merged code acts as a strong roadmap signal:
*   **Deepening Social/IM Integration:** The pre-installation of QQ and Discord OpenClaw plugins ([#2198](https://github.com/netease-youdao/LobsterAI/pull/2198)) signals a major push to position LobsterAI as a localized, cross-platform IM bot host.
*   **Advanced Multi-Model Support:** Specific fixes for Qwen and GLM plan-modes indicate an aggressive push to support a diverse array of local/Chinese LLMs for complex, multi-step agentic workflows. 

### 7. User Feedback Summary
Current user feedback highlights friction with automated task management. A user reported an inability to toggle off scheduled tasks ([Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392)), indicating a frustrating use case where automation runs wild without an easy off-switch. However, overall development satisfaction is implicitly high, as core pain points around agent duplication and IM integration are being rapidly addressed by maintainers.

### 8. Backlog Watch
*   **[Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392) [OPEN] [stale]:** Created on April 3rd, this issue has been open for nearly 3 months and is marked as stale. The user reports that scheduled task toggles are unresponsive. **Action needed:** Maintainers should verify if recent renderer fixes (like OS state syncing) resolve this, or prompt the user for reproduction steps on the latest commit.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured project digest for CoPaw based on the provided GitHub data.

# CoPaw Project Digest — 2026-06-26

## 1. Today's Overview
CoPaw is exhibiting exceptionally high development velocity and robust community engagement, processing 50 pull requests and 27 issues in the last 24 hours alone. The project is clearly in the thick of a major architectural migration (likely "Runtime 2.0" / "AgentScope 2.0"), with numerous PRs dedicated to bridging legacy features into the new system. Frontend stability and memory/context management are currently focal points for both community contributors and core maintainers. The high volume of first-time contributor PRs successfully addressing complex bugs indicates a healthy, accessible open-source ecosystem. 

## 2. Releases
*No new releases were published in the last 24 hours. The project appears to be in an active development/aggregation phase, likely building towards a major release incorporating the Runtime 2.0 migration.*

## 3. Project Progress
Significant strides were made across frontend UI, context management, and desktop integrages, with 22 PRs merged/closed today:
*   **Architecture & Migration:** The Runtime 2.0 migration advanced significantly. [PR #5442](https://github.com/agentscope-ai/QwenPaw/pull/5442) successfully integrated "Mission Mode" with the Runtime v2 architecture, while [PR #5443](https://github.com/agentscope-ai/QwenPaw/pull/5443) restored Agent Client Protocol (ACP) commands and inline approvals in the TUI.
*   **Desktop & TUI:** [PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) introduced native Tauri system tray behavior for the desktop app, replacing legacy `pystray` implementations. [PR #5448](https://github.com/agentscope-ai/QwenPaw/pull/5448) added project-scoped code sessions to the TUI.
*   **Memory & Context:** [PR #5321](https://github.com/agentscope-ai/QwenPaw/pull/5321) is currently under review and brings a "scroll" context-management strategy, persisting evicted turns to SQLite for on-demand REPL recall.

## 4. Community Hot Topics
The community is highly engaged in refining model compatibility and system context:
*   **Custom Provider Function Calling:** [Issue #5345](https://github.com/agentscope-ai/QwenPaw/Issue/5345) (Closed, 8 comments) sparked significant discussion regarding OMLX and OpenAI-compatible providers failing to execute tools properly. 
*   **Contextual Timestamps:** [Issue #5455](https://github.com/agentscope-ai/QwenPaw/Issue/5455) (Open, 4 comments) questioned why system time is injected into the environment context rather than as a per-user-message prefix. This led to active development in [PR #5499](https://github.com/agentscope-ai/QwenPaw/pull/5499), which aims to improve prompt caching stability by making timestamps dynamic.
*   **Linux Browser Automation:** [Issue #5528](https://github.com/agentscope-ai/QwenPaw/Issue/5528) (Open, 2 comments) and [PR #5526](https://github.com/agentscope-ai/QwenPaw/pull/5526) highlighted and fixed a major pain point for Linux users where IME-wrapped browser executions failed to launch.

## 5. Bugs & Stability
Several high-impact bugs were reported and swiftly addressed by the community today, ranked by severity:
1.  **Memory Leaks / Resource Exhaustion (Critical):** 
    *   *Bug:* [Issue #2733](https://github.com/agentscope-ai/QwenPaw/Issue/2733) (Chrome processes not closing) and its regression [Issue #5520](https://github.com/agentscope-ai/QwenPaw/Issue/5520) (orphaned renderers after `browser_use stop()`).
    *   *Fix Status:* Addressed in [PR #5536](https://github.com/agentscope-ai/QwenPaw/pull/5536).
2.  **Frontend UI Crashes (High):**
    *   *Bug:* [Issue #5479](https://github.com/agentscope-ai/QwenPaw/Issue/5479) reports the Web UI crashes entirely when opening conversations with >500KB of JSON history.
    *   *Fix Status:* Partially addressed by frontend optimizations, but large file handling still needs core attention.
3.  **Model Capabilities Caching (High):**
    *   *Bug:* [Issue #5505](https://github.com/agentscope-ai/QwenPaw/Issue/5505) notes MiniMax-M3 image safety rejections are incorrectly cached as `rejects_media=True`, permanently blinding the model for the session.
    *   *Fix Status:* Fixed in [PR #5535](https://github.com/agentscope-ai/QwenPaw/pull/5535).
4.  **Markdown Rendering (Medium):**
    *   *Bug:* [Issue #5480](https://github.com/agentscope-ai/QwenPaw/Issue/5480) notes long streamed messages lose newline formatting until a tab switch forces a CSS recalculation.
    *   *Fix Status:* Fixed in [PR #5538](https://github.com/agentscope-ai/QwenPaw/pull/5538).

## 6. Feature Requests & Roadmap Signals
Key signals from issues and PRs point to the following roadmap directions for the next version:
*   **Ecosystem Standardization:** [Issue #5484](https://github.com/agentscope-ai/QwenPaw/Issue/5484) strongly advocates for PyPI-based plugin installation via `pip` instead of relying solely on ZIP archives. 
*   **Advanced Context Defense:** [Issue #5342](https://github.com/agentscope-ai/QwenPaw/Issue/5342) requests a hard cap on tool result sizes at the execution layer to prevent context window explosions during cascading LLM failures.
*   **Dynamic Model Failover:** [Issue #5527](https://github.com/agentscope-ai/QwenPaw/Issue/5527) requests dynamic switching between models in AgentScope 2.0, allowing fallbacks if a provider rate-limits or goes down.
*   **Enterprise Integrations:** [Issue #4887](https://github.com/agentscope-ai/QwenPaw/Issue/4887) (Closed) signals demand for custom endpoints for private DingTalk deployments, a feature likely to drop in the next release alongside the new Slack integration ([PR #5193](https://github.com/agentscope-ai/QwenPaw/pull/5193)).

## 7. User Feedback Summary
*   **Pain Points:** Users operating CoPaw via local Windows apps are experiencing friction, notably with broken file preview links ([Issue #5508](https://github.com/agentscope-ai/QwenPaw/Issue/5508) returning 404s) and local Intranet blank-page rendering bugs ([Issue #5497](https://github.com/agentscope-ai/QwenPaw/Issue/5497)). Additionally, basic UI friction—like browser autofill hijacking the model provider search ([Issue #5403](https://github.com/agentscope-ai/QwenPaw/Issue/5403))—detracts from the polished experience.
*   **Satisfaction:** Despite bugs, the community is highly collaborative. Users are actively performing root-cause analyses (e.g., identifying hardcoded timeouts in heartbeat tasks in [Issue #5539](https://github.com/agentscope-ai/QwenPaw/Issue/5539)) and directly contributing fixes. The rapid absorption of first-time contributor PRs shows high user satisfaction and investment in the project.

## 8. Backlog Watch
The following items require maintainer attention:
*   **Dead Conversation Loops:** [Issue #5162](https://github.com/agentscope-ai/QwenPaw/Issue/5162) (Open since June 12) reports the agent's thinking logic entering a death loop. This is a critical workflow blocker and needs urgent core team triage.
*   **Large Document Performance:** [Issue #4188](https://github.com/agentscope-ai/QwenPaw/Issue/4188) (Open since May 11) and [Issue #5479](https://github.com/agentscope-ai/QwenPaw/Issue/5479) indicate severe performance degradation when handling large documents or conversation histories. The UI needs virtualization or progressive loading.
*   **Complex Plugin Reviews:** Complex, high-value plugins like **DataPaw** (12 BI skills, [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)) and **Slack Multimodal Integration** ([PR #5193](https://github.com/agentscope-ai/QwenPaw/pull/5193)) have been under review for extended periods. Merging these would represent major capability expansions for CoPaw.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-06-26.

### 1. Today's Overview
ZeroClaw is currently experiencing a period of intense architectural refinement and high community engagement, as evidenced by 48 updated issues and 50 active pull requests in the last 24 hours. The project is actively balancing massive structural overhauls—such as migrating to a WebAssembly (Wasm) first architecture and tightening A2A security—with essential quality-of-life improvements. Activity is heavily concentrated on the upcoming `v0.8.2` and `v0.8.3` milestones, with maintainers aggressively triaging bugs, merging rapid fixes, and advancing large-scale epics. Project health appears strong, with a clear pipeline of accepted RFCs driving sustained development momentum.

### 2. Releases
*No new releases were cut in the last 24 hours.*

### 3. Project Progress
While 44 PRs remain open for review, 6 PRs were merged/closed, and several notable feature advancements landed in the codebase:
*   **Onboarding Overhaul ([PR #8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033)):** Massive progress on the `zeroclaw-onboard` crate, introducing a two-path deterministic and LLM-guided onboarding state tree to drastically improve initial user setup.
*   **Wasm Plugin Host ([PR #7928](https://github.com/zeroclaw-labs/zeroclaw/pull/7928)):** Initial WebAssembly component-model plugin host code was merged, laying the technical foundation for the broader "Wasm-first" architecture proposed in recent RFCs.
*   **Context Window Visibility ([PR #7946](https://github.com/zeroclaw-labs/zeroclaw/pull/7946)):** Integrated a unified context window usage bar across the ZeroCode TUI, Gateway chat, and CLI interactive mode.
*   **Security & Policy Fixes ([PR #7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960), [PR #8003](https://github.com/zeroclaw-labs/zeroclaw/pull/8003)):** Advanced fixes for `execute_pipeline` tool-gating policy and wired up previously dead `session_end` lifecycle hooks.

### 4. Community Hot Topics
The community is highly focused on project governance, plugin architecture, and security boundaries:
*   **Governance & CI ([Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)):** The highest-trafficked issue (11 comments) is an accepted RFC regarding Work Lanes, Board Automation, and Label Cleanup, indicating maintainers are actively streamlining how community contributions are routed.
*   **Supply Chain Security ([Issue #8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)):** An 8-comment RFC discussing hardware-backed PGP keys, multi-party quorum, and SLSA provenance for container images. This highlights a community mandate for ZeroClaw to adopt enterprise-grade anti-tampering mechanisms.
*   **Core Architecture "Slimming" ([Issue #6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)):** A heavily discussed RFC proposing the removal of native code for tools like Jira and GitHub in favor of external skills/MCP integrations to reduce bloat.

### 5. Bugs & Stability
Several high-severity bugs were reported today, though maintainers have rapidly issued fixes for many of them:
*   **[S0 Security] Delegate Tool Bypass ([Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)) (CLOSED):** Sub-agents could bypass parent tool allowlists, creating a severe privilege escalation risk. Addressed alongside explicit delegation modes.
*   **[S1 Workflow] Kimi Code Provider Dead URL ([Issue #8154](https://github.com/zeroclaw-labs/zeroclaw/issues/8154)) (CLOSED):** A regression where the Moonshot endpoint targeted a 404 dead URL, completely blocking workflows. 
*   **[S1 Stability] MCP Stdio Orphan Accumulation ([Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)) (OPEN):** With `heartbeat.enabled = true`, the daemon leaks one stdio child process per tick (~48 orphans per day), eventually crashing the host. *Needs maintainance.*
*   **[S2 Data Loss] Translation Leak Repair ([Issue #8312](https://github.com/zeroclaw-labs/zeroclaw/issues/8312)) (OPEN):** `fill-translations` leaves stale map entries, silently re-shipping leaked text. 
*   **[S2 Cost/Token] Native Tool Image Inflation ([Issue #8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)) (OPEN):** OpenAI-compatible providers receive base64 image data as plain text instead of structured image parts, wildly inflating token counts. 

### 6. Feature Requests & Roadmap Signals
Based on accepted RFCs and tracker updates, the `v0.8.2` and `v0.8.3` releases will likely feature:
*   **Independent Delegate Modes ([Issue #8238](https://github.com/zeroclaw-labs/zeroclaw/issues/8238) / [PR #8239](https://github.com/zeroclaw-labs/zeroclaw/pull/8239)):** Explicit delegation allowing specialist agents to run under their own policies rather than inheriting parent constraints.
*   **Goal Mode ([Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)):** A first-class durable mode for bounded autonomous session work, running until a user objective is completed or a budget is exhausted.
*   **In-App Supervised Upgrades ([Issue #8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)):** Allowing users to apply updates and trigger supervised restarts directly from the web dashboard.
*   **OpenRouter Fallbacks ([Issue #8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138)):** Native support for automatic OpenRouter model failovers via config arrays to prevent rate-limit downtime.

### 7. User Feedback Summary
**Dissatisfaction & Pain Points:** Users operating ZeroClaw via Telegram are experiencing fragmented UX due to media groups (photo albums) dispatching as individual agent requests ([Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514), [Issue #7873](https://github.com/zeroclaw-labs/zeroclaw/issues/7873)). Additionally, users integrating local LLMs (via llama.cpp/Groq) are frustrated by provider API strictness and token-count bloating ([Issue #8327](https://github.com/zeroclaw-labs/zeroclaw/issues/8327)). 
**Satisfaction & Praise:** The community shows strong enthusiasm for the project's technical direction. Proposals to rip out legacy Node.js/React builds in favor of pure Rust→Wasm ([Issue #8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)) and hardware integrations ([Issue #8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187)) are receiving highly positive engagements, showing users value performance and security over short-term feature additions.

### 8. Backlog Watch
*   **[Issue #8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) - SkillForge Orphaned:** The auto-discovery engine (SkillForge) was merged months ago but is wired to nothing. It currently sits blocked awaiting maintainer decision: ship with safe defaults or rip it out.
*   **[Issue #8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) - Wasm-First RFC:** The massive RFC to make WebAssembly the default plugin runtime is currently blocked and needs maintainer review. It is a massive undertaking that will shape the project's extensibility for years.
*   **[Issue #5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) - MCP Child Process Leak:** This high-severity daemon bug has been open since April and causes severe memory bloat on long-running instances. It urgently needs a patch.

</details>