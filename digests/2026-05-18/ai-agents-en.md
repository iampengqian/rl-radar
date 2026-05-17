# OpenClaw Ecosystem Digest 2026-05-18

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-17 22:40 UTC

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

# OpenClaw Project Digest — 2026-05-18

## 1. Today's Overview
OpenClaw is experiencing exceptionally high community engagement, with 500 issues and 500 pull requests updated in the last 24 hours. However, the disparity between active items (474 open issues, 429 open PRs) and resolved ones (26 closed issues, 71 merged/closed PRs) indicates that maintainer bandwidth is struggling to keep pace with community submissions and bug reports. The project is actively iterating on its beta release cycle, pushing out UI redesigns, security improvements, and agent routing fixes in rapid succession. Overall, the project's health is highly active but shows signs of triage congestion, with many critical issues accumulating in the backlog awaiting product or security review.

## 2. Releases
Two new versions were released, continuing the rapid `v2026.5.16-beta` iteration:

*   **v2026.5.16-beta.5**
    *   **Changes:** Significant Mac app UI overhaul (redesigned Settings pages with consistent card layouts, cached navigation, better spacing for the native sidebar). Renamed the repo-local Codex closeout review skill/helper to `autoreview`.
*   **v2026.5.16-beta.4**
    *   **Changes:** Added `security.audit.suppressions` to allow intentionally accepted audit findings, keeping them out of active summaries while preserving them in JSON output (Thanks @100menotu001). Added labeling for delegated agents/subagents.

## 3. Project Progress
Merged and recently closed PRs show steady progress in performance optimization, stability, and security hardening:

*   **Security & Secret Management:** Several PRs are actively stripping plaintext API keys from `models.json` (e.g., PR [#83294](https://github.com/openclaw/openclaw/pull/83294), PR [#83296](https://github.com/openclaw/openclaw/pull/83296)) to prevent LLM access to credentials. A new plugin manifest contract for SecretRef provider integrations was also introduced (PR [#82326](https://github.com/openclaw/openclaw/pull/82326)).
*   **Performance & CLI:** CLI performance got a boost with a help fast-path to bypass full bootstrap (PR [#61612](https://github.com/openclaw/openclaw/pull/61612)), and tool factory memoization was added to reduce overhead per agent turn (PR [#73039](https://github.com/openclaw/openclaw/pull/73039)). Plugin registry snapshots are now coalesced within 2s to prevent filesystem locking (PR [#78101](https://github.com/openclaw/openclaw/pull/78101)).
*   **Messaging & Channels:** Discord verbose tool progress delivery was fixed (PR [#80042](https://github.com/openclaw/openclaw/pull/80042)), and high-priority operations fixes for WhatsApp web memory handling were merged (PR [#81897](https://github.com/openclaw/openclaw/pull/81897)).

## 4. Community Hot Topics
The most discussed issues highlight strong user demand for cross-platform support, better multi-agent routing, and secrets security:

*   **Linux/Windows Clawdbot Apps (104 comments, 75 👍):** Issue [#75](https://github.com/openclaw/openclaw/issues/75) remains the most highly anticipated feature. Users strongly desire desktop parity with the macOS app.
*   **Inter-agent text leaks (26 comments):** Issue [#25592](https://github.com/openclaw/openclaw/issues/25592) highlights a critical UX flaw where internal agent reasoning/errors leak into user-facing messaging channels (Slack, iMessage).
*   **Signal Daemon Crash Loops (17 comments):** Issue [#22676](https://github.com/openclaw/openclaw/issues/22676) details a race condition on SIGUSR1 restarts causing orphaned processes and send failures.
*   **Security Roadmap & Masked Secrets (15 comments, 4 👍):** Issues [#11829](https://github.com/openclaw/openclaw/issues/11829) and [#10659](https://github.com/openclaw/openclaw/issues/10659) reveal deep community anxiety about LLMs accessing raw API keys, requesting masked secrets systems.
*   **Slack Block Kit Support (13 comments):** Issue [#12602](https://github.com/openclaw/openclaw/issues/12602) requests rich interactive messaging for CRM and database query use cases.
*   **Direct Exec Mode for Cron Jobs (11 comments, 9 👍):** Issue [#18160](https://github.com/openclaw/openclaw/issues/18160) highlights frustration with LLM timeouts on simple cron tasks; users want direct command execution to save tokens and latency.

## 5. Bugs & Stability
Several high-severity regressions and data-loss bugs were reported or actively worked on today:

*   **P1: Cron Watchdog aborts (8 comments):** The isolated cron watchdog is still killing beta.4 runs at `attempt_dispatch` after 60s (Issue [#81368](https://github.com/openclaw/openclaw/issues/81368) - CLOSED). Related active fixes are attempting to persist followup queues across restarts (PR [#82572](https://github.com/openclaw/openclaw/pull/82572)).
*   **P1: Session Context Confusion (12 comments):** Agents replying to previous messages instead of the current one due to session state mix-ups (Issue [#32296](https://github.com/openclaw/openclaw/issues/32296)). Fix PRs routing embedded tool calls through in-process dispatch are open (PR [#42497](https://github.com/openclaw/openclaw/pull/42497)).
*   **P1: Windows EBUSY Update Failure (8 comments):** `openclaw update` fails on Windows due to file locking issues (Issue [#40540](https://github.com/openclaw/openclaw/issues/40540)).
*   **P1: Docker/Sandbox Workspace Mounts (8 comments):** Docker-outside-of-Docker setups cannot properly bind `/workspace` (Issue [#31331](https://github.com/openclaw/openclaw/issues/31331)).
*   **P1: Feishu Image Media Loss (11 comments):** Read image tool results are dropped before the final outbound payload in Feishu (Issue [#41744](https://github.com/openclaw/openclaw/issues/41744)).
*   **Regression: Broken UI Avatars (9 comments):** The Control UI avatar endpoint returns 404 even with valid configurations (Issue [#38439](https://github.com/openclaw/openclaw/issues/38439), Issue [#41201](https://github.com/openclaw/openclaw/issues/41201)).

## 6. Feature Requests & Roadmap Signals
Based on open PRs and highly-upvoted issues, upcoming releases will likely focus heavily on secure execution environments and enterprise features:

*   **Secrets Management & Redaction:** With multiple open PRs addressing API key stripping from `models.json`, a comprehensive "Masked Secrets" or Vault-integration feature seems imminent.
*   **Advanced Cron Capabilities:** Direct exec mode (Issue [#18160](https://github.com/openclaw/openclaw/issues/18160)) and append modes for the write tool (Issue [#40001](https://github.com/openclaw/openclaw/issues/40001)) are critical for cron reliability.
*   **Private Network Access:** Opt-in allowance for `web_fetch` to access internal/private networks (Issue [#39604](https://github.com/openclaw/openclaw/issues/39604), 7 👍).
*   **Pre-response Enforcement Hooks:** Hard gates forcing agents to call specific tools before responding (Issue [#13583](https://github.com/openclaw/openclaw/issues/13583)).
*   **Mac App UI Refinements:** As seen in today's beta.5 release, UI consistency and caching improvements remain an active focus.

## 7. User Feedback Summary
Users are enthusiastic but experiencing friction with deployment, multi-agent reliability, and session context limits:

*   **Pain Points:** Docker deployments and sandbox configurations are a major source of friction. Token overhead from large tool schemas (Issue [#14785](https://github.com/openclaw/openclaw/issues/14785)) and unoptimized bootstrap file loading (Issue [#22438](https://github.com/openclaw/openclaw/issues/22438)) are expensive and wasteful for users with large workspaces.
*   **Use Cases:** Users are building complex multi-agent workflows where orchestration (sub-agent announce routing, Issue [#27445](https://github.com/openclaw/openclaw/issues/27445)) is critical. There is also strong demand for using OpenClaw as an interactive operational tool via Slack Block Kit and Telegram Business accounts.
*   **Satisfaction:** Dissatisfaction is centered around silent data loss (overwriting files instead of appending, dropped media in Feishu) and perceived security vulnerabilities surrounding `.env` handling.

## 8. Backlog Watch
The triage system is heavily saturated, with many critical issues tagged `clawsweeper:no-new-fix-pr`, `clawsweeper:fix-shape-clear`, and `clawsweeper:needs-maintainer-review`. 

*   **Long-standing Linux/Windows Request:** Issue [#75](https://github.com/openclaw/openclaw/issues/75) has been open since Jan 1, 2026, accumulating 104 comments but still lacks a definitive product decision or targeted timeline.
*   **Stale Security RFCs:** Highly important features like Tiered Bootstrap Loading (Issue [#22438](https://github.com/openclaw/openclaw/issues/22438)) and Exec Denylists (Issue [#6615](https://github.com/openclaw/openclaw/issues/6615)) have been stuck in "needs-product-decision" or "needs-security-review" for months despite community engagement.
*   **Stalled PRs:** Large infrastructure PRs, such as the terminal aborts vs retryable failures fix (PR [#62682](https://github.com/openclaw/openclaw/pull/62682)), have been open for over a month waiting for "real behavior proof," potentially blocking future stability improvements.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from May 18, 2026.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is experiencing a period of intense, rapid iteration, primarily driven by the need for multi-channel integration and diverse LLM provider support. Projects are heavily focused on stabilizing deployments—especially in containerized environments like Docker—and resolving complex state management issues in both UI streaming and long-term agent memory. As agents become more autonomous, there is a pronounced industry-wide shift toward implementing robust security boundaries, secrets management, and strict tool-sandboxing to prevent unauthorized access or data leakage. Overall, the ecosystem is transitioning from experimental, single-platform chatbots into highly orchestrated, multi-agent frameworks designed for enterprise-grade reliability.

### 2. Activity Comparison
*Health scores reflect a combination of maintainer responsiveness, release stability, issue triage efficiency, and community momentum.*

| Project | 24h Issue Count | 24h PR Count | Recent Release Status | Health Score & Assessment |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | Active (2 betas) | **B+** (Massive scale, but maintainer triage is bottlenecked) |
| **Hermes Agent** | 50 | 50 | None (Stabilizing) | **A-** (High velocity, responsive bug fixes) |
| **IronClaw** | 20+ | 50 | None (Development) | **B+** (Heavy architectural progress, UI regressions) |
| **ZeroClaw** | 20 | 50 | None (Sprint) | **B+** (Preparing for major release, resolving dead configs) |
| **NanoBot** | 6 | 18 | None (Stabilizing) | **A** (Excellent merge cadence, stable) |
| **CoPaw** | 17 | 17 | None (Testing) | **B** (Active, but plagued by critical deadlocks/RCE) |
| **NanoClaw** | 6 | 12 | None | **B+** (Responsive merges, but critical key leak found) |
| **PicoClaw** | 12 | 7 | Nightly build | **B+** (Healthy, focused feature advancement) |
| **Moltis** | 2 | 3 | Released (v20260517) | **A** (High-quality feature merges, focused) |
| **NullClaw** | 3 | 0 | None | **C** (Maintainer stall, zero PR activity) |
| **LobsterAI** | 0 | 9 (stale) | None | **C-** (Dormant, PRs closed without merging) |
| **TinyClaw / ZeptoClaw**| 0 | 0 | None | **N/A** (Inactive) |

### 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw remains the undisputed core reference implementation with the largest community footprint (500+ daily updates). It is uniquely positioned at the forefront of secure enterprise deployments, actively developing masked secrets and security audit suppressions—a stark contrast to projects still struggling with basic authentication.
*   **Technical Approach:** OpenClaw treats agents as deeply integrated, multi-platform system services (with advanced cron watchdogs and Docker-outside-of-Docker workspace mounting). In contrast, projects like Hermes and Moltis focus more on gateway adapters or external session persistence.
*   **Community Size & Risks:** While OpenClaw’s community dwarfs others (e.g., highly active multi-channel discussions via Slack, iMessage, Discord), it faces scaling pains. Its primary risk is triage congestion, where high-severity bugs and security RFCs stall in the backlog due to sheer volume—a problem smaller, more agile projects like NanoBot or Moltis do not yet face.

### 4. Shared Technical Focus Areas
Several universal requirements are emerging simultaneously across independent projects:
*   **Reasoning Token Handling (OpenClaw, NanoBot, PicoClaw, Moltis, ZeroClaw):** With the rise of reasoning models (e.g., DeepSeek-V4, Gemma-4, Qwen), multiple projects are actively patching UI and backend systems to separate internal `<thought>` tags from user-facing text to prevent UX "leaks."
*   **Multi-Channel Identity & Metadata (NanoClaw, ZeroClaw, Hermes, NullClaw):** As agents operate across Telegram, Discord, and Slack, routing context without session confusion is critical. Projects are implementing strict `from-channel` metadata and session-scoping to fix agents replying out of context.
*   **Tool-Sandboxing & Security Policies (IronClaw, CoPaw, PicoClaw, ZeroClaw):** There is a collective push toward dynamic, fine-grained tool execution. Projects are implementing "allow/deny" frontmatter policies, agent capability sandboxes, and fixing overly aggressive regex guards that block legitimate CLI web requests.
*   **Docker & Reverse-Proxy UX (NanoBot, Hermes, NanoClaw):** Container networking remains a shared pain point. Projects are actively fixing localhost hardcoding bugs to support external UI access via reverse proxies and resolving inter-container DNS routing.

### 5. Differentiation Analysis
*   **Target Users:** OpenClaw, ZeroClaw, and Hermes target heavy-duty, multi-platform users and enterprises needing Slack/Discord/WeChat orchestration. Conversely, PicoClaw and LobsterAI cater to highly decentralized, local-first users (e.g., running models via LM Studio or Termux on Android/RISC-V).
*   **Feature Focus:** IronClaw is heavily differentiating by overhauling its core architecture to support "Reborn" runtime dynamic tool installation (IronHub). Moltis is unique in its focus on secure, persistent external agent sessions via advanced networking tunnels (Cloudflare/NetBird).
*   **Architecture:** NanoClaw is pivoting toward a multi-provider AI orchestration platform (integrating a dedicated Codex provider alongside Claude), whereas NanoBot and Hermes are refining memory optimization (e.g., BM25-lite routing, context compression) to maximize token efficiency.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators & Market Leaders (OpenClaw, Hermes, IronClaw, ZeroClaw):** These projects process 50+ PRs/issues daily. However, they are currently paying a "scale tax," bogged down by Windows installation roadblocks, UI state regressions, and provider compatibility issues.
*   **Tier 2: High-Velocity Stabilizers (NanoBot, CoPaw, NanoClaw, PicoClaw):** These projects have strong, healthy merge cadences (10-20 updates daily). They are actively tightening bugs and optimizing codebases before pushing their next major stable releases.
*   **Tier 3: Niche / Slow Pace (Moltis):** Shows slow but incredibly high-quality, targeted momentum, specifically targeting enterprise networking.
*   **Tier 4: Stalled / At Risk (NullClaw, LobsterAI):** LobsterAI appears to be suffering maintainer abandonment (closing PRs without merging), while NullClaw is experiencing a temporary development stall despite detailed community bug reports.

### 7. Trend Signals
1.  **The Rise of "Agentic OPCloud" Management:** Agents are no longer just chatbots; they require infrastructure-grade tooling. The demand for dynamic tool installation at runtime (IronClaw) and sophisticated secrets/vault management (OpenClaw) reflects a trend where agents manage their own micro-infrastructure.
2.  **Global Provider Adaptation:** Developers are rapidly adopting non-Western LLMs. Ecosystems are urgently rolling out integrations for SiliconFlow, xAI Grok, and local Chinese providers (DeepSeek, Kimi, Qwen), forcing frameworks to build resilient fallback providers and standardized reasoning tag parsers.
3.  **Zero-Trust Agentic Execution:** Community feedback shows zero tolerance for security placebo effects. From OpenClaw's LLM key stripping to CoPaw's RCE vulnerability alarms, developers are demanding strict execution boundaries (denylists, sandboxing) and auditability (IronClaw's Trace Commons).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-18

## 1. Today's Overview
NanoBot is exhibiting **high and healthy development velocity**, with maintainers actively merging community and core team contributions. The project recorded 18 pull requests updated in the last 24 hours, with a balanced split of 9 open and 9 merged/closed, indicating a steady cadence of code review and integration. Activity is currently dominated by **WebUI stability improvements, Docker deployment fixes, and core agent memory optimization**, showing that the project is in an active stabilization phase following a recent feature release. Six active issues and zero new releases suggest the team is heads-down on resolving deployment and UI regressions rather than pushing new versions. Overall, the project's momentum is strong and community engagement is highly collaborative.

## 2. Releases
No new releases were recorded today. The project remains on recent build versions (e.g., `0.1.5.post3.2026.05.13`), with efforts seemingly focused on stabilizing the codebase and addressing deployment friction before cutting a new stable tag.

## 3. Project Progress
Nine PRs were merged/closed today, advancing several critical areas:
*   **Core Stability & Concurrency:** [PR #3881](https://github.com/HKUDS/nanobot/pull/3881) resolved a significant race condition between `AutoCompact` and the `Consolidator` that caused session state corruption.
*   **Memory & Context Management:** [PR #3864](https://github.com/HKUDS/nanobot/pull/3864) improved resilience for Chinese LLM providers by recognizing localized rate-limit markers. [PR #3878](https://github.com/HKUDS/nanobot/pull/3878) fixed a jarring UX bug where reasoning tokens (e.g., DeepSeek-V4) were printed one-per-line in the CLI.
*   **WebUI & Long Tasks:** [PR #3788](https://github.com/HKUDS/nanobot/pull/3788) was merged, introducing chat-scoped sustained goal state (`/goal` command) and long-running task management, replacing the older orchestrator model. [PR #3877](https://github.com/HKUDS/nanobot/pull/3877) significantly optimized WebUI streaming and Markdown rendering for long agent chats.
*   **Deployment & Docs:** Three Docker-related fixes were merged: [PR #3870](https://github.com/HKUDS/nanobot/pull/3870) (fixed `hatch_build.py` missing error), [PR #3872](https://github.com/HKUDS/nanobot/pull/3872) (fixed WebUI port mapping), and [PR #3874](https://github.com/HKUDS/nanobot/pull/3874) (synced documentation with `docker-compose.yml`). [PR #3866](https://github.com/HKUDS/nanobot/pull/3866) expanded configuration docs for secrets management.

## 4. Community Hot Topics
*   **WebUI Display Bugs:** The most actively discussed issue is [Issue #3790](https://github.com/HKUDS/nanobot/issues/3790) (14 comments), where users report severe formatting/display scrambling when printing content in the WebUI, requiring a hard refresh. This indicates persistent frontend state-management challenges.
*   **Docker Deployment Inaccessibility:** [Issue #3873](https://github.com/HKUDS/nanobot/issues/3873) and [Issue #3876](https://github.com/HKUDS/nanobot/issues/3876) highlight a major pain point for self-hosters: the WebUI `bootstrap` endpoint hardcodes `localhost` checks, breaking deployments where NanoBot runs inside a Docker container but is accessed from the host machine or a reverse proxy.
*   **WeChat Protocol Upgrade:** [Issue #3882](https://github.com/HKUDS/nanobot/issues/3882) was opened to address the aging WeChat channel implementation, noting that the underlying protocol library is severely outdated (`v1.0.3` vs `v2.4.3`) and risks sudden failure.

## 5. Bugs & Stability
Reported bugs today heavily center around the WebUI and channel integrations:
1.  **[Critical] WebUI Conversation Closes ([#3884](https://github.com/HKUDS/nanobot/issues/3884)):** Users report that WebSocket conversations terminate immediately after the first agent response. (No fix PR yet).
2.  **[High] Docker WebUI 403 / Bootstrap HTTP 500 ([#3857](https://github.com/HKUDS/nanobot/issues/3857), [#3876](https://github.com/HKUDS/nanobot/issues/3876)):** Gateway fails with HTTP 500 or rejects remote connections. (Fixes addressed in merged [PR #3872](https://github.com/HKUDS/nanobot/pull/3872) and open [PR #3875](https://github.com/HKUDS/nanobot/pull/3875)).
3.  **[Medium] WeChat Login Fails ([#3863](https://github.com/HKUDS/nanobot/issues/3863)):** QR code scanning fails, claiming the WeChat version is too low, even on the latest app version. (No fix PR yet, likely tied to the protocol upgrade needed in [#3882](https://github.com/HKUDS/nanobot/issues/3882)).

## 6. Feature Requests & Roadmap Signals
Several open PRs signal the roadmap directions contributors are pushing for:
*   **Dynamic Skill Loading:** [PR #3847](https://github.com/HKUDS/nanobot/pull/3847) proposes a `skill_load` tool to prevent context window pollution and skill loss in multi-turn conversations.
*   **Agent Memory Optimization:** [PR #3865](https://github.com/HKUDS/nanobot/pull/3865) introduces a BM25-lite skill router to reduce system prompts by ~60%, and [PR #3880](https://github.com/HKUDS/nanobot/pull/3880) adds pre-consolidation compression for long tool results. Both signal a strong focus on **token efficiency and long-term memory management**.
*   **Multi-Modal & CLI Expansion:** [PR #3879](https://github.com/HKUDS/nanobot/pull/3879) adds MiniMax image generation support, while [PR #3883](https://github.com/HKUDS/nanobot/pull/3883) introduces CLI commands for easier model/provider configuration.
*   **Prediction:** The next release will likely focus heavily on memory optimization, Docker deployment UX, and WebUI streaming stability.

## 7. User Feedback Summary
Users are actively testing NanoBot in complex self-hosted environments, particularly utilizing Docker, Linux Debian, and integrating with both local and Chinese LLM providers (like DeepSeek). 
*   **Dissatisfaction:** There is notable frustration regarding Docker deployment documentation, which has drifted significantly from the actual configuration required to make the WebUI and `bwrap` sandbox work.
*   **Pain Points:** CLI visual bugs with reasoning tokens and WebUI stability (crashing conversations, display glitches) are the primary usability barriers. 
*   **Use Cases:** Users are heavily utilizing multi-channel setups (Telegram groups, WeChat) and pushing the limits of long-running agent tasks via the WebUI.

## 8. Backlog Watch
*   **[PR #2060](https://github.com/HKUDS/nanobot/pull/2060):** A highly practical security enhancement allowing specific paths (like `/dev/null`) when `restrict_to_workspace` is true. Open since March 2026, this needs maintainer review as it blocks secure agent executions.
*   **[PR #3368](https://github.com/HKUDS/nanobot/pull/3368):** Proposes adding a model override for heartbeat phases to save costs. Open since April, it represents a critical operational need for users running background agents continuously.
*   **[Issue #3882](https://github.com/HKUDS/nanobot/issues/3882):** The WeChat protocol upgrade is currently just an open issue. Maintainer acknowledgment and assignment are highly recommended due to the high risk of sudden channel failure.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-18

## 1. Today's Overview
Hermes Agent is experiencing a **very high volume of community and development activity**, processing 50 issue updates and 50 pull request updates within the last 24 hours. The project is currently heavily focused on stabilizing its multi-platform gateway adapters (such as Telegram, QQBot, and Mattermost), refining its recently introduced v0.13.0/v0.14.0 Codex app-server integrations, and addressing friction with Windows installations. A disproportionate number of today's reports highlight failures in third-party OAuth flows—specifically regarding xAI Grok and OpenAI—and early build/deployment bugs from recent releases. Overall, the high PR throughput (16 merged/closed) indicates a responsive and actively maintaining development team iterating quickly on user-reported edge cases.

## 2. Releases
**No new releases were published today.** 
*Note:* The backlog heavily references deployment issues stemming from the recently published `v0.13.0` and `v0.14.0` (such as missing pip package locales and context compression regressions), suggesting the core team is currently in a bug-fixing and stabilization phase before cutting a new minor or patch release.

## 3. Project Progress
Significant headway was made today on UI/UX, plugin management, and core memory handling, evidenced by 16 merged/closed PRs. 
*   **TUI & Dashboard Fixes:** Several UI bugs were squashed, including fixing sidebar navigation links that were treated as React Router patterns rather than URLs ([PR #27621](https://github.com/NousResearch/hermes-agent/pull/27621)), fixing 404 errors on plugin tab links ([PR #27619](https://github.com/NousResearch/hermes-agent/pull/27619)), and expanding the slash command autocomplete limit from 30 to 200 to accommodate 158 registered commands ([PR #27647](https://github.com/NousResearch/hermes-agent/pull/27647)).
*   **Memory and Tooling:** A new `in_session` mode was added to `session_search` to allow agents to recall current conversation text accurately without relying on improvisation ([PR #27593](https://github.com/NousResearch/hermes-agent/pull/27593)).
*   **Infrastructure & Codex:** Persistence for compressed Codex app-server turns was implemented ([PR #27637](https://github.com/NousResearch/hermes-agent/pull/27637)), and OpenAI-compatible local server probing was refactored to reduce spurious 404 health check noise ([PR #23215](https://github.com/NousResearch/hermes-agent/pull/23215)).

## 4. Community Hot Topics
The most actively discussed items revolve around installation roadblocks, multi-platform stability, and cloud provider authentication.
*   **Windows Installation Roadblocks:** The community is struggling with the one-line PowerShell install script, which is throwing `assignment expression is not valid` errors in both PowerShell 7.6.1 and Windows PowerShell (x86). ([Issue #27622](https://github.com/NousResearch/hermes-agent/issues/27622), [Issue #27397](https://github.com/NousResearch/hermes-agent/issues/27397))
*   **Telegram Gateway Limitations:** Users report a critical usability flaw where Telegram's native interception of the `/` command completely breaks the `/approve` and `/deny` flow for dangerous actions ([Issue #27587](https://github.com/NousResearch/hermes-agent/issues/27587)), alongside an issue where the agent loops for 30+ minutes trying to read user-sent images ([Issue #22385](https://github.com/NousResearch/hermes-agent/issues/22385)).
*   **Docker Node.js Lifecycle:** A highly upvoted discussion highlights that the Docker image relies on Node.js 20.x, which reaches end-of-life in April 2026, prompting a push to upgrade to Node 22 LTS ([Issue #4876](https://github.com/NousResearch/hermes-agent/issues/4876)).

## 5. Bugs & Stability
Several high-severity (P1) bugs were reported today, primarily affecting the latest versions and Docker environments:
*   **P1: Missing Translation Keys in v0.13.0:** The `locales/` directory is missing from the pip package, causing slash commands to output raw i18n keys instead of text. ([Issue #27632](https://github.com/NousResearch/hermes-agent/issues/27632))
*   **P1: Context Compression Loop:** Context compression triggers repeatedly every 1-2 turns due to an estimated token count overwriting the precise API value, preventing session stabilization. ([Issue #27566](https://github.com/NousResearch/hermes-agent/issues/27566))
*   **P1: Vision Fallback Chain Silently Broken:** A kwarg mismatch (`base_url` vs `explicit_base_url`) causes the vision tool's fallback chain to silently return `None`. ([Issue #27555](https://github.com/NousResearch/hermes-agent/issues/27555))
*   **P2: xAI OAuth Failures:** Users utilizing headless Docker or LAN setups are locked out of xAI Grok OAuth due to a missing `S256` code challenge implementation ([Issue #27573](https://github.com/NousResearch/hermes-agent/issues/27573)). 
*   **P2: Docker EACCES Permissions:** The dashboard chat tab fails in Docker because `/opt/hermes/ui-tui` is root-owned while the dashboard runs as the `hermes` user. ([Issue #20500](https://github.com/NousResearch/hermes-agent/issues/20500))
*   *Note on Fixes:* The community and maintainers are reacting swiftly; for example, the plugin loader bypassing the `plugins.enabled` config ([Issue #27631](https://github.com/NousResearch/hermes-agent/issues/27631)) was immediately addressed by a corresponding fix ([PR #27638](https://github.com/NousResearch/hermes-agent/pull/27638)).

## 6. Feature Requests & Roadmap Signals
Feature development is heavily trending toward enterprise resilience, platform parity, and tooling.
*   **Per-Task Fallback Providers:** Users want auxiliary tasks (vision, web_extract, etc.) to have independent `fallback_providers`, showing a strong desire for enterprise-grade uptime and resilience ([Issue #22201](https://github.com/NousResearch/hermes-agent/issues/22201)).
*   **Rich Spreadsheet Skill:** A demand for first-class `.xlsx` and `.csv` handling abstraction rather than relying on raw Python/pandas prompts ([Issue #4438](https://github.com/NousResearch/hermes-agent/issues/4438)).
*   **Mattermost Interactive Buttons:** Implementing button-based approval to replace the broken slash-command approval workflow ([Issue #27587](https://github.com/NousResearch/hermes-agent/issues/27587)).
*   **Cryptographic Audit Trails:** A proposed feature to implement integrity checks for tool calls and skill executions via MCP, signaling a trajectory into enterprise compliance ([Issue #5041](https://github.com/NousResearch/hermes-agent/issues/5041)).
*   **Predictions for Next Release:** Immediate roadmap priorities clearly include fixing the broken Windows installer, patching the xAI OAuth flow for headless environments, and releasing hotfixes for the context compression and i18n regressions.

## 7. User Feedback Summary
Users are actively deploying Hermes Agent in complex, multi-platform environments (Coolify, Docker, Telegram, OpenRouter, local LLMs) but are encountering friction with platform-specific edge cases and provider authentication. 
*   **Pain Points:** The Docker permission model frustrates users trying to use the dashboard alongside the CLI. Additionally, local model users running Ollama or vLLM are hindered by hardcoded platform timeouts ([Issue #21525](https://github.com/NousResearch/hermes-agent/issues/21525)).
*   **Satisfaction:** Despite stability issues in the newest releases, the community response is highly engaged. The rapid filing of detailed, well-documented bug reports—and immediate community PRs to address plugin discovery ([PR #19813](https://github.com/NousResearch/hermes-agent/pull/19813))—shows a dedicated and technically proficient user base that is heavily invested in the project's success.

## 8. Backlog Watch
*   **Google Meet Japanese Captions ([Issue #26941](https://github.com/NousResearch/hermes-agent/issues/26941)):** Opened a day prior and actively discussed, this specific localization bug in the Meet bot needs a maintainer's confirmation on the root cause.
*   **OpenRouter Grok Cache Affinity ([Issue #22705](https://github.com/NousResearch/hermes-agent/issues/22705)):** A performance-focused issue highlighting higher token costs due to missed xAI server-affinity headers. This has sat in the backlog for over a week and needs prioritization as it directly impacts user operational costs.
*   **OpenAI Codex OAuth CLI vs Gateway Discrepancy ([Issue #12058](https://github.com/NousResearch/hermes-agent/issues/12058)):** Open since April 2026, this gateway-specific auth issue is blocking users from successfully running the new Codex integrations on web platforms while the CLI works fine.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw on 2026-05-18.

### 1. Today's Overview
PicoClaw is currently in an active development phase, maintaining strong momentum as the community and contributors drive the project toward its next stable milestone. The ecosystem saw 12 issues updated (7 open, 5 closed) and 7 pull requests updated (6 open, 1 closed) in the last 24 hours, accompanied by a new automated nightly build. Activity heavily centers around expanding provider compatibility (specifically SiliconFlow and LM Studio) and refining tool-sandboxing behaviors. Overall, the project exhibits a healthy balance of community-driven feature requests, active third-party bug reporting, and responsive core development.

### 2. Releases
*   **nightly: v0.2.8-nightly.20260517.0df050ff**
    *   **Type:** Automated Nightly Build
    *   **Notes:** Bridges the gap between `v0.2.8` and the `main` branch. As an automated snapshot, it includes the newest merged commits (such as recent provider and tool updates) but may carry instability. Users are advised to proceed with caution in production environments. 
    *   **Full Changelog**: [v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

### 3. Project Progress
Only **1 PR was merged/closed** today, though several active PRs received updates indicating ongoing review:
*   **Closed:** [PR #2462](https://github.com/sipeed/picoclaw/pull/2462) `[codex] fix codex streaming output and telegram duplicate retries`. This was a significant community contribution that resolved edge cases in streaming outputs and prevented duplicate retries on Telegram, specifically tested on resource-constrained Android/Termux environments. 

**Active features advancing in the PR pipeline:**
*   [PR #2885](https://github.com/sipeed/picoclaw/pull/2885): Native integration of the SiliconFlow provider.
*   [PR #2886](https://github.com/sipeed/picoclaw/pull/2886): Introduction of a 4-state chat detail visibility selector (allowing users to toggle reasoning and tool-call visibility separately).
*   [PR #2888](https://github.com/sipeed/picoclaw/pull/2888): Fix for the `load_image` tool configuration initialization.

### 4. Community Hot Topics
*   **LM Studio Easy Connect** - [Issue #28](https://github.com/sipeed/picoclaw/issues/28) (👍 2, 19 comments): Originally requested in February, this issue remains highly active. The underlying need is clear: non-technical users (specifically on Android) want a streamlined, zero-code way to connect PicoClaw to local LM Studio instances.
*   **Exec Tool Guard Path Evaluation** - [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) (👍 2, 12 comments): A linguistic/localization bug where the `guardCommand` regex misinterprets URLs (like `wttr.in/Beijing`) as forbidden relative paths. This indicates a strong user reliance on PicoClaw for agentic web-interaction tasks.
*   **Ollama Cloud Credentials** - [Issue #2225](https://github.com/sipeed/picoclaw/issues/2225) (12 comments): Users are heavily utilizing Ollama cloud instances and require a dedicated UI/backend mechanism to input credentials safely.

### 5. Bugs & Stability
*   🔴 **High Severity - RISC-V Port Broken:** [Issue #2887](https://github.com/sipeed/picoclaw/issues/2887) reports that the `.deb` build for RISC-V is non-functional with OpenAI models. No fix PR is currently attached.
*   🟡 **Medium Severity - Sandboxing Regex Bug:** [Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) The overly aggressive `exec` safety guard is blocking legitimate CLI tools (`curl`). *Mitigation: A broader fix for path evaluation is being addressed in [PR #2759](https://github.com/sipeed/picoclaw/pull/2759).*
*   🟡 **Medium Severity - Reasoning Model Leaks:** [Issue #2745](https://github.com/sipeed/picoclaw/issues/2745) OpenRouter reasoning models are exposing internal monologues to end-users. This was recently closed, likely addressed by the chat visibility updates seen in [PR #2886](https://github.com/sipeed/picoclaw/pull/2886).
*   🟢 **Low Severity - Config Bug:** [Issue #2878](https://github.com/sipeed/picoclaw/issues/2878) `load_image` cannot be toggled via `config.json`. *Fix Status: Patch already submitted in [PR #2888](https://github.com/sipeed/picoclaw/pull/2888).*

### 6. Feature Requests & Roadmap Signals
The community's recent activity points toward a strong desire for **multi-agent security** and **diverse provider support**:
*   **Tool Policy Frontmatter:** [Issue #2837](https://github.com/sipeed/picoclaw/issues/2837) & [PR #2838](https://github.com/sipeed/picoclaw/pull/2838) Users want `AGENT.md` to natively support `allow`/`deny` tool policies. This signals PicoClaw is being increasingly used for complex multi-agent setups where tool boundaries must be strictly isolated.
*   **MCP Server OAuth 2.1:** [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546) Requesting a no-code dashboard experience to add OAuth-protected MCP servers.
*   **SiliconFlow Provider:** [Issue #2884](https://github.com/sipeed/picoclaw/issues/2884) & [PR #2885](https://github.com/sipeed/picoclaw/pull/2885) Native SiliconFlow integration. Because the PR was opened on the same day as the issue, this feature is practically guaranteed to land in the immediate next release.

### 7. User Feedback Summary
Users are deploying PicoClaw on a highly diverse range of hardware—from Android TV boxes and Termux environments to RISC-V Debian servers. The primary pain points revolve around the difficulty of configuring local network providers (LM Studio) and the rigidness of the agent's safety/sandboxing tools, which frequently break expected workflows. The opening of PRs like #2462 (Termux/Telegram fixes) and #2888 (config fixes) shows an engaged, technical developer community willing to scratch their own itches.

### 8. Backlog Watch
*   **Frontmatter Tool Policies:** [PR #2838](https://github.com/sipeed/picoclaw/pull/2838) and [Issue #2837](https://github.com/sipeed/picoclaw/issues/2837) have been open since May 9th and are now marked as `stale`. This is a crucial architectural feature for multi-agent stability and requires a maintainer review.
*   **Session Timestamps:** [PR #2788](https://github.com/sipeed/picoclaw/pull/2788) aims to fix frontend message-timing inaccuracy by adding per-message `created_at` timestamps. Open since May 6th and marked `stale`, it needs core-team feedback.
*   **Seahorse Session Scoping:** [PR #2759](https://github.com/sipeed/picoclaw/pull/2759) prevents cross-session data leaking in retrieval tools. Open since May 4th, awaiting merge to resolve critical security/privacy boundaries.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-18

## 1. Today's Overview
NanoClaw experienced a high-activity day with significant operational throughput, closing 9 Pull Requests while managing 6 active issues. The project is in an active development and stabilization phase, heavily focused on fixing containerization, CLI orchestration bugs, and expanding multi-provider support. The high PR merge-to-open ratio (9 closed vs. 3 open) indicates responsive maintainer activity and rapid integration of community and internal contributions.

## 2. Releases
No new official releases were published today. The project's latest changes remain unreleased and are currently sitting on the main/feature branches.

## 3. Project Progress
Today saw a substantial number of merged PRs, pushing forward several key subsystems:
*   **Finance & Agent Skills:** Merged the first two parts of "Finance Plan 3" (PR [#2486](https://github.com/qwibitai/nanoclaw/pull/2486), PR [#2487](https://github.com/qwibitai/nanoclaw/pull/2487)), introducing schema, bootstrap, and Levis behavior templates.
*   **Agent Orchestration:** Merged a critical fix for cron outputs that were being self-suppressed across all agents (PR [#2481](https://github.com/qwibitai/nanoclaw/pull/2481)). Additionally, a new CLI mode was merged (PR [#2470](https://github.com/qwibitai/nanoclaw/pull/2470)) that bypasses the Agent SDK in favor of interactive quota via `claude --print --resume`.
*   **CLI & Infrastructure:** Merged PR [#2510](https://github.com/qwibitai/nanoclaw/pull/2510) which fixes a bug where the CLI failed to hydrate receiver session-local databases during destination approvals.
*   **Adapter Fixes:** Improved WhatsApp failure-mode UX (PR [#2469](https://github.com/qwibitai/nanoclaw/pull/2469)) and introduced graceful restart capabilities (PR [#2476](https://github.com/qwibitai/nanoclaw/pull/2476)).

## 4. Community Hot Topics
The most actively discussed issues revolve around multi-channel messaging and container initialization:
*   **Double Message Delivery ([#2404](https://github.com/qwibitai/nanoclaw/issues/2404)):** With 2 comments, this active bug highlights an architectural clash when agents use the MCP tool and message blocks simultaneously, causing duplicate messaging due to subprocess handling.
*   **CLI Group Creation Constraints ([#2386](https://github.com/qwibitai/nanoclaw/issues/2386)):** Users are actively discussing (1 comment) the friction caused by auto-generated UUIDs violating OneCLI identifier rules (must start with a letter). 
*   **Multi-Channel Metadata ([#2521](https://github.com/qwibitai/nanoclaw/pull/2521)):** An open PR adding `from-channel` and `from-type` to XML message attributes. It highlights a growing community need for better origin-tracking in multi-channel (Telegram + Discord) setups.

## 5. Bugs & Stability
Several high-priority bugs were reported today, mostly tied to the CLI initialization and cross-platform container networking:
1.  **[High] Container Config not found on first spawn ([#2415](https://github.com/qwibitai/nanoclaw/issues/2415)):** `ncl groups create` skips the `container_configs` row, breaking initial message wiring. *(No fix PR submitted yet)*.
2.  **[High] WhatsApp Signal Protocol Key Leak ([#2520](https://github.com/qwibitai/nanoclaw/issues/2520)):** `logs/nanoclaw.log` is capturing raw `privKey`/`rootKey` buffers from `libsignal-node` on session close. *(No fix PR submitted yet - requires immediate host startup filter)*.
3.  **[High] Inter-container Comms Failure ([#2512](https://github.com/qwibitai/nanoclaw/issues/2512)):** Default Ubuntu Docker installs are failing to route DNS between OneCLI and Postgres over the bridge network.
4.  **[Medium] Telegram Approval Cards failing ([#2522](https://github.com/qwibitai/nanoclaw/issues/2522)):** Outbound text transformation is skipped on `ask_question` paths. *(Fix exists in PR [#2523](https://github.com/qwibitai/nanoclaw/pull/2523))*.
5.  **[Medium] Orphaned Archived Groups ([#2517](https://github.com/qwibitai/nanoclaw/issues/2517)):** MGA rows are still referencing archived `agent_groups`, causing reference errors. Needs unarchive-on-reference logic.

## 6. Feature Requests & Roadmap Signals
Recent PR activity points heavily toward multi-model AI support and agentic flexibility:
*   **Alternative AI Providers:** The open PR [#2518](https://github.com/qwibitai/nanoclaw/pull/2518) introduces a dedicated **Codex provider**, allowing isolated Codex state/auth within agent containers. This signals a strategic shift from a purely Claude-dependent architecture to a multi-provider AI orchestration platform.
*   **Enhanced Observability:** PR [#2521](https://github.com/qwibitai/nanoclaw/pull/2521) indicates roadmap movement toward better structured logging and dashboard integration for multi-channel deployments.
*   **CLI Agent Mode:** The merging of PR [#2470](https://github.com/qwibitai/nanoclaw/pull/2470) establishes a foundation for quota management using standard CLI modes rather than strictly relying on the Agent SDK.

## 7. User Feedback Summary
**Pain Points:** Administrators are experiencing significant friction deploying NanoClaw on default Linux setups, specifically with Docker DNS routing (#2512). Furthermore, CLI users are frustrated by UUID generation that doesn't align with underlying SDK constraints (#2386). Security-conscious users flagged a severe logging oversight regarding Signal protocol key leakage (#2520).
**Use Cases:** Developers are actively utilizing NanoClaw for complex, multi-channel routing (Telegram, Discord, WhatsApp) and heavily utilizing the `chat-sdk-bridge` for custom approval workflows and monitoring dashboards.

## 8. Backlog Watch
*   **Security Patch Required:** Issue [#2520](https://github.com/qwibitai/nanoclaw/issues/2520) (Signal protocol key logging) poses a severe security risk and requires an immediate patch to the host startup logger.
*   **Architectural Bottleneck:** Issue [#2404](https://github.com/qwibitai/nanoclaw/issues/2404) (Double delivery via MCP tool) has been open since 2026-05-10. Resolving the subprocess `StdioServerTransport` routing logic is crucial for message integrity.
*   **Stale PR:** PR [#2524](https://github.com/qwibitai/nanoclaw/pull/2524) ("chore: latest") was closed today, but PRs [#2518](https://github.com/qwibitai/nanoclaw/pull/2518) (Codex provider) and [#2523](https://github.com/qwibitai/nanoclaw/pull/2523) (Telegram SDK fix) are awaiting maintainer review and merging to unblock multi-model and Telegram users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the project digest for NullClaw on 2026-05-18.

### 1. Today's Overview
NullClaw is currently experiencing active community usage and troubleshooting, as evidenced by three open issues updated within the last 24 hours. However, the project shows zero pull request activity and no new releases today, resulting in a 24-hour maintenance stall. The lack of closed issues or merged PRs suggests that maintainers may be temporarily unavailable or are backloggged. The issues reported are highly technical, indicating an engaged developer userbase actively stress-testing NullClaw's integration capabilities (specifically Telegram, subagents, and memory management). Overall project health remains stable, but responsiveness to bug reports is currently lagging.

### 2. Releases
No new releases were recorded today. 

### 3. Project Progress
No progress was made in the form of merged or closed pull requests today. The development pipeline is currently static, with no new code contributions, patches, or feature implementations moving through the review process. 

### 4. Community Hot Topics
The most active topics in the community revolve around core functional failures when using NullClaw as a Telegram-integrated personal assistant. 
* **[#915 [bug] Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)**: This is the most discussed issue of the day (1 comment), highlighting a persistent pain point for users self-hosting NullClaw with external LLMs (like Ollama). 
* **Underlying Needs**: The core underlying need across all active discussions is **multi-platform integration reliability**. Users want seamless Telegram bot interactions, robust background task scheduling, and reliable asynchronous subagent workflows.

### 5. Bugs & Stability
Three significant bugs were reported/updated today, ranked by system severity:
1. **High: [#918 spawn tool results never delivered to Telegram](https://github.com/nullclaw/nullclaw/issues/918)**: A critical data-loss bug where subagent tasks are executed successfully, but the results are silently dropped before reaching the user interface. The user has identified the root cause in `channel_loop.zig:1296` (bus=null in SubagentManager). *Note: No fix PRs are currently open.*
2. **Medium: [#917 memory_list tool always passes session_id](https://github.com/nullclaw/nullclaw/issues/917)**: A database/query layer bug that breaks global memory retrieval. Because the tool forcefully attaches a session ID, it filters out global (session_id=NULL) memories, severely limiting the AI assistant's ability to retain cross-session knowledge. *Note: No fix PRs are currently open.*
3. **Medium: [#915 Problem with scheduler unauthorized](https://github.com/nullclaw/nullclaw/issues/915)**: An authentication/permissions bug preventing the scheduler from functioning properly on self-hosted Ubuntu setups. *Note: No fix PRs are currently open.*

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were opened today, the bug reports provide strong signals for architectural requirements in upcoming versions:
* **Robust Subagent/Multi-agent Orchestration**: The bug detailed in Issue #918 shows that the `spawn` tool needs better message bus handling. A roadmap priority should be hardening inter-process communication between the main agent and subagents.
* **Advanced Memory Hierarchy**: Issue #917 signals the need for a more sophisticated memory retrieval system that successfully balances "global" long-term memories with "session-specific" short-term contexts. 

### 7. User Feedback Summary
User feedback is highly technical and centers around self-hosting and advanced AI workflows:
* **Use Cases**: Users are deploying NullClaw on Linux (Ubuntu) as Telegram bots, utilizing powerful local or network-hosted open-source models (specifically `qwen3.6:27b` via Ollama on RTX 3090s). They are actively utilizing advanced agentic features like spawning subagents and persistent memory storage.
* **Pain Points**: Users are experiencing friction with system-level integrations. Specifically, memory management and task execution workflows (scheduler, subagent channel loops) are failing in production environments. The "silent loss" of subagent results (noted in #918) is a major source of dissatisfaction as it breaks user trust in the assistant's reliability.

### 8. Backlog Watch
* **Urgent Attention Needed on Identified Root Causes**: Issue [#918](https://github.com/nullclaw/nullclaw/issues/918) and [#917](https://github.com/nullclaw/nullclaw/issues/917) were created just yesterday with zero maintainer response. Because #918 involves silent data loss and the user has already done the diagnostic work by pinpointing `channel_loop.zig:1296`, a maintainer review and patch are highly overdue.
* **Aging Unresolved Auth Issue**: Issue [#915](https://github.com/nullclaw/nullclaw/issues/915) was created on May 15th and is still open despite user interaction. The scheduler authorization problem blocks basic functionality for self-hosters and needs prioritization.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw (nearai/ironclaw) Project Digest — 2026-05-18

## 1. Today's Overview
The IronClaw project is experiencing a period of high architectural evolution and active development, heavily focused on the "Reborn" agent-loop runtime and its associated subsystems. Activity levels are robust, with 50 pull requests updated in the last 24 hours (19 merged/closed) and core maintainers pushing significant structural changes. However, this rapid iteration seems to have introduced UI and configuration regressions in the current stable builds. The lack of new releases today suggests the team is deeply focused on landing major foundational PRs before cutting a new stable version.

## 2. Releases
No new releases were cut today. The project is actively iterating on features and architecture in the `main`/development branches.

## 3. Project Progress
Significant forward momentum was made on the "Reborn" architecture, tooling ecosystems, and test frameworks. 19 PRs were merged/closed, highlighting progress on core infrastructure:

*   **Reborn Composition & Architecture:** Merged [PR #3695](https://github.com/nearai/ironclaw/pull/3695) (Consolidate composition root, narrow public surface, ship live binary) marks a major milestone in the Reborn runtime's maturity. This was supported by closed planning PRs like [PR #3723](https://github.com/nearai/ironclaw/pull/3723) (Replacing agent-loop planning docs).
*   **IronHub Integration:** Opened [PR #3737](https://github.com/nearai/ironclaw/pull/3737), an XL-sized new feature allowing agents to install tools and skills dynamically at runtime directly from IronHub via CLI, agent tools, or gateway.
*   **Trace Commons:** Merged [PR #3131](https://github.com/nearai/ironclaw/pull/3131), bringing a Trace Commons client to Reborn for opt-in trace contribution, deterministic redaction, and queueing. 
*   **Hooks Framework:** Extensive drafting occurred on the new hooks framework, with multiple successor PRs to #3573 updated today, including WASM execution ([PR #3634](https://github.com/nearai/ironclaw/pull/3634)) and event-triggered hooks ([PR #3640](https://github.com/nearai/ironclaw/pull/3640)).
*   **First-Party Tools:** [PR #3681](https://github.com/nearai/ironclaw/pull/3681) introduced a first-party HTTP egress tool (`builtin.http`) for Reborn.

## 4. Community Hot Topics
*   **Reborn Identity & Context:** [Issue #3692](https://github.com/nearai/ironclaw/issues/3692) (4 comments) is the most discussed issue today. The community and maintainers are actively debating the implementation of policy-gated personal identity and heartbeat prompt context. This indicates a strong focus on how the AI agent securely retains and accesses persistent user context.
*   **IronHub & Extensibility:** The opening of [PR #3737](https://github.com/nearai/ironclaw/pull/3737) signals a massive shift toward dynamic extensibility, moving away from strictly build-time tool integration to runtime tool/skill installation. 
*   **Reborn Configuration-as-Code:** [PR #3703](https://github.com/nearai/ironclaw/pull/3703) and [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) highlight ongoing structural work to allow tenant blueprints and use-case harnesses.

## 5. Bugs & Stability
There are clear signs of a regression in the `v0.28.2` release, particularly concerning tool installation workflows and TEE/Provider configurations. No active fix PRs for these specific UI bugs were identified in today's digest.

*   **Critical/High Severity:**
    *   [Issue #3734](https://github.com/nearai/ironclaw/issues/3734): v0.28.2 regression where Non-TEE agent provider configs are missing API Key and "Fetch available models" controls, breaking user ability to configure inference providers.
    *   [Issue #3736](https://github.com/nearai/ironclaw/issues/3736): v0.28.2 regression in TEE agents where unconfigured providers display a "Use" button, potentially leading to user confusion or runtime errors.
*   **Medium Severity (Auth & Tool Install Loop Bugs):**
    *   [Issue #3728](https://github.com/nearai/ironclaw/issues/3728): Re-prompting bug. Denying `tool_install(gmail)` triggers an immediate re-prompt, and the assistant ultimately asks the user to approve it even after explicit denial.
    *   [Issue #3729](https://github.com/nearai/ironclaw/issues/3729): State rendering bug. Failed `tool_install` calls display as successful (green ✅) with "ACTION FAILED" text after a page refresh.
    *   [Issue #3731](https://github.com/nearai/ironclaw/issues/3731): State persistence bug. Gmail is installed, but chat re-prompts `tool_install(gmail)`.
*   **Low Severity (UX / UI):**
    *   [Issue #3732](https://github.com/nearai/ironclaw/issues/3732): Inconsistent Gmail auth UI across different threads.
    *   [Issue #3733](https://github.com/nearai/ironclaw/issues/3733): Invalid Gmail tokens trigger a false "success/activated" toast notification.

## 6. Feature Requests & Roadmap Signals
*   **Dynamic Tool Installation ([PR #3737](https://github.com/nearai/ironclaw/pull/3737)):** The ability to search, list, and install tools/skills from IronHub on the fly. This is a strong signal for the next major feature set, enabling autonomous agents to expand their own capabilities.
*   **Advanced Identity & Profiles ([Issue #3692](https://github.com/nearai/ironclaw/issues/3692), [PR #3721](https://github.com/nearai/ironclaw/pull/3721)):** Gating personal context by run profile and implementing policy-gated identity.
*   **Configuration-as-Code (CaC) ([PR #3704](https://github.com/nearai/ironclaw/pull/3704), [PR #3703](https://github.com/nearai/ironclaw/pull/3703)):** Defining tenant blueprints and provider catalogs via `config.toml` and `providers.json`. This suggests the next release will heavily target enterprise/deployment operational needs.

## 7. User Feedback Summary
User feedback today (primarily from `sunglow666`) centers around **UI reliability and state management**. The friction lies specifically in the extension/tool lifecycle: installing tools, authenticating them (specifically Gmail OAuth), and maintaining consistent visual state on refresh. Users expect that when an extension is installed, it remains installed, and when an auth token is invalid, the system does not lie to them with a success toast. These pain points indicate that while backend "Reborn" architecture is advancing rapidly, the frontend/agent-loop state machine bridging the UI to the backend needs stabilization.

## 8. Backlog Watch
*   **Dependency Updates Stalling:** Massive dependency bump PRs are sitting open for extended periods, specifically [PR #3361](https://github.com/nearai/ironclaw/pull/3361) (43 updates) and [PR #3360](https://github.com/nearai/ironclaw/pull/3360) (Tokio ecosystem). Maintainers should review these to prevent technical debt and security drift.
*   **Nightly E2E Failures:** [Issue #3447](https://github.com/nearai/ironclaw/issues/3447) indicates the Nightly E2E scheduled run failed 7 days ago and remains open. This requires immediate attention to ensure the main branch remains stable for future merges.
*   **E2E Test Framework Plan:** [Issue #3702](https://github.com/nearai/ironclaw/issues/3702) (Revise and implement binary-E2E test framework) is crucial for the project's health given the current v0.28.2 regression bugs, and should be prioritized to catch UI and tool-install loop failures before they hit production.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI Project Digest (2026-05-18)

### 1. Today's Overview
LobsterAI experienced a quiet day in terms of active, synchronous development, with zero new issues opened, zero issues closed, and no new official releases. However, maintainers interacted with the pull request backlog, causing metadata updates on 9 PRs, signaling a periodic review or automated stale-bot pass. All 7 currently open PRs carry the `[stale]` tag, indicating a temporary lull in reviewer engagement for these specific feature branches. The lack of new user-reported issues suggests the current production build is relatively stable.

### 2. Releases
No new releases were recorded today. 

### 3. Project Progress
Activity today consisted solely of the closure of two existing Pull Requests:
*   **[CLOSED] feat(skills): New skill execution statistics display ([PR #871](https://github.com/netease-youdao/LobsterAI/pull/871)):** Added a UI popup in the SkillsManager that parses OpenClaw session JSONL data to display invocation statistics for individual skills. *Note: Closed without merging.*
*   **[CLOSED] perf(sqlite): Debounce save() and cache getConfig() to reduce main thread blocking ([PR #812](https://github.com/netease-youdao/LobsterAI/pull/812)):** Addressed severe main process blocking in Electron by debouncing SQLite `save()` calls (merging ~11-13 writes per streaming turn into a single 500ms debounced async write) and caching `getConfig()`. *Note: Closed without merging.*

### 4. Community Hot Topics
There are no heavily debated items from the last 24 hours, as all 9 updated PRs have `undefined` comments and `0` reactions. Despite the lack of active chatter today, two PRs represent highly requested community concepts:
*   **API Auto-Detection ([PR #762](https://github.com/netease-youdao/LobsterAI/pull/762)):** Aims to eliminate user friction by automatically detecting whether a custom model endpoint requires an Anthropic-compatible or OpenAI-compatible format.
*   **Opik Observability Integration ([PR #768](https://github.com/netease-youdao/LobsterAI/pull/768)):** Proposes a new "Observability" tab in settings to capture telemetry via OpenClaw, laying the groundwork for future LangFuse/LangSmith integrations.

### 5. Bugs & Stability
While no *new* bugs were reported today, the backlog highlights previously identified stability and performance issues:
*   **Critical Performance (Open):** [PR #770](https://github.com/netease-youdao/LobsterAI/pull/770) highlights that `MarkdownContent` components were re-rendering unnecessarily on every parent state update (e.g., every streaming token), causing UI lag. The fix wraps the component in `React.memo`.
*   **Data Integrity / Duplication (Open):** [PR #788](https://github.com/netease-youdao/LobsterAI/pull/788) addresses a duplicate task creation bug occurring during SQLite-to-OpenClaw migrations upon app restart.
*   **UI Truncation (Open):** [PR #783](https://github.com/netease-youdao/LobsterAI/pull/783) provides a minor UI fix for bottom input field truncation in the cowork module.

### 6. Feature Requests & Roadmap Signals
Based on the backlog updates, the community and contributors are pushing heavily toward **UX simplification**, **agent observability**, and **multi-modal support**. 
*   **Auto-detection of APIs** ([PR #762](https://github.com/netease-youdao/LobsterAI/pull/762)) lowers the barrier to entry for non-technical users.
*   **Image Thumbnail Previews** ([PR #771](https://github.com/netease-youdao/LobsterAI/pull/771)) transitions the cowork module into a more robust multi-modal interface by redesigning pasted attachments into card layouts with 56x56 previews.
*   We predict that if the maintainers resume merging, the next version will likely focus on performance enhancements (debouncing SQLite) and multi-modal UI upgrades, as these provide the most immediate impact to end-users.

### 7. User Feedback Summary
Implicit feedback derived from PR contexts indicates that users frequently struggle with manual API configurations for diverse LLM providers and desire a more seamless setup process. Additionally, the focus on resolving SQLite main-thread blocking and Markdown re-rendering implies that users are actively using the client for heavy, continuous AI streaming sessions, where UI jank becomes a noticeable pain point.

### 8. Backlog Watch
*Attention Maintainers:* There is a significant backlog of feature and performance PRs that are now marked as `[stale]`. 
*   **[PR #812](https://github.com/netease-youdao/LobsterAI/pull/812)** and **[PR #871](https://github.com/netease-youdao/LobsterAI/pull/871)** were closed today rather than merged. If these were intentionally skipped, maintainers should leave feedback so contributors know the reasoning.
*   High-impact performance and bug-fix PRs like **[PR #770](https://github.com/netease-youdao/LobsterAI/pull/770)** (Markdown re-renders) and **[PR #788](https://github.com/netease-youdao/LobsterAI/pull/788)** (Task duplication) require maintainer review to push them toward completion.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-18

## 1. Today's Overview
Moltis demonstrates a healthy, highly active development cycle today, characterized by the successful merging of three significant Pull Requests and a new release. The project continues to heavily invest in infrastructure flexibility and enterprise-grade agent integrations, evidenced by the addition of new remote access tunnels and persistent external agent sessions. While the maintainer and contributor "penso" are driving substantial feature expansions, the community is actively stress-testing the system, bringing to light specific edge-case bugs. Overall, project momentum is strongly positive, transitioning newly coded features directly into released builds. 

## 2. Releases
- **[20260517.03](https://github.com/moltis-org/moltis/releases/tag/20260517.03)** 
  Released on May 17, this build incorporates the latest approved changes, including newly introduced remote access connectors and persistent session capabilities. No specific breaking changes or migration conflicts were highlighted in today's data, indicating a stable forward progression from previous versions.

## 3. Project Progress
Today saw three notable PRs closed and merged, pushing Moltis's capabilities forward in remote access and AI agent lifecycle management:
- **[PR #1008](https://github.com/moltis-org/moltis/pull/1008) Add NetBird and Cloudflare Tunnel to onboarding:** Streamlined the user experience by integrating the newly developed networking tunnels directly into the initial setup and onboarding UI, complete with end-to-end testing.
- **[PR #1002](https://github.com/moltis-org/moltis/pull/1002) feat(remote-access): add NetBird and Cloudflare Tunnel support:** Delivered the core backend infrastructure for NetBird (featuring a managed loopback-preserving TCP forwarder) and Cloudflare Tunnel (including WebAuthn hostname updates).
- **[PR #566](https://github.com/moltis-org/moltis/pull/566) feat(external-agents): add persistent agent sessions:** A major architectural update (in development since April 6) that allows Moltis to maintain persistent sessions with external agents like ACP, Codex CLI, and Claude Code. This ensures chat sessions can attach, detach, and resume external agent conversations without losing state.

## 4. Community Hot Topics
While today's newly opened issues have not yet accumulated high comment volumes, they represent critical user touchpoints:
- **[Issue #1007](https://github.com/moltis-org/moltis/issues/1007) & [Issue #1006](https://github.com/moltis-org/moltis/issues/1006):** Both authored by user `maop`, these issues highlight a growing trend of users utilizing Moltis with advanced, non-standard LLM configurations (like Gemma-4 and specific TTS setups). The underlying need here is for Moltis to natively parse and gracefully handle the diverse and often idiosyncratic output schemas of rapidly evolving open-source AI models.

## 5. Bugs & Stability
Two new bugs were reported today, requiring maintainer attention:
1. **Critical/High: [Issue #1007](https://github.com/moltis-org/moltis/issues/1007) - `<thought>` tags treated as plain text:** When using the `gemma-4-31b-it` model, Moltis fails to separate reasoning tokens from the final output. This breaks core AI assistant functionality, exposing internal reasoning steps to the user as text. *(No fix PR available yet)*.
2. **Medium: [Issue #1006](https://github.com/moltis-org/moltis/issues/1006) - VoiceCoquiTtsConfig stripped during auto-compact:** The configuration for Coqui TTS is "disappearing" during Moltis's memory/context auto-compaction phase. This indicates a state-management bug that causes user settings to be wiped. *(No fix PR available yet)*.

## 6. Feature Requests & Roadmap Signals
Based on the merged PRs and current issue trajectories, the near-term roadmap strongly signals an upcoming focus on **Enterprise/Advanced Networking** and **Multi-Agent Orchestration**. 
- *Signals from PRs:* The heavy investment in Cloudflare, NetBird, and persistent agent sessions shows Moltis is positioning itself as a self-hosted, securely exposed hub for complex AI workflows.
- *Signals for Next Version:* We can predict the next versions will focus on hardening the newly merged external agent sessions (Claude Code/Codex) and expanding native parsing support for emerging model architectures (fixing the Gemma-4 reasoning tags).

## 7. User Feedback Summary
- **Pain Points:** Users running localized, highly customized AI setups (specifically local LLMs like Gemma-4 and local TTS engines like Coqui) are experiencing friction. Moltis's auto-compact feature and prompt parser are slightly too rigid, failing to recognize specific model tags or stripping necessary custom configuration files.
- **Satisfaction/Dissatisfaction:** The rapid resolution and merging of remote access features indicate that users demanding easy, secure self-hosting exposure are likely highly satisfied with the current trajectory.

## 8. Backlog Watch
- **[PR #566](https://github.com/moltis-org/moltis/pull/566) (Persistent agent sessions):** Though merged today, this PR was open since April 6. Maintainers should watch the backlog for any newly introduced edge-case bugs or performance regressions resulting from this massive lifecycle change.
- **[Issue #1007](https://github.com/moltis-org/moltis/issues/1007) (Gemma-4 parsing):** As a zero-comment, zero-reaction bug reported yesterday that directly impacts core LLM output quality, this requires immediate triage to prevent user friction for those utilizing the latest Gemma models.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (agentscope-ai/CoPaw) for 2026-05-18.

### 1. Today's Overview
CoPaw (internally referenced as QwenPaw in repository links) experienced a highly active day with significant community engagement, evidenced by 17 updated issues and 17 updated pull requests in the last 24 hours. The project currently has no new releases, indicating a focus on ongoing development, testing infrastructure, and backlog triage rather than immediate deployment. The maintainer team is actively reviewing substantial community contributions, including desktop integrations and new LLM providers. However, the community is currently raising alarms regarding several severe stability issues—specifically UI freezes and agent deadlocks—which require immediate attention.

### 2. Releases
There were **0 new releases** today. The most recently discussed versions in issue tracking are `v1.1.2` and `v1.1.7`.

### 3. Project Progress
While only 4 PRs were merged/closed today, they represent important stability and codebase maintenance milestones:
*   **[CLOSED] refactor(wechat): centralize legacy data migrations ([#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605)):** Cleaned up legacy Weixin/WeChat identifiers to ensure smoother workspace startup.
*   **[CLOSED] fix(Workspace): handle path separators correctly ([#1669](https://github.com/agentscope-ai/QwenPaw/pull/1669)):** Fixed an indefinite "loading..." bug in the workspace path UI on Windows systems.
*   **[CLOSED] fix(workspace): fix memory files not being fetched by agent ID ([#1661](https://github.com/agentscope-ai/QwenPaw/pull/1661)):** Resolved a bug where daily memory files were incorrectly fetched globally instead of per-agent.
*   **[CLOSED] test(security): Phase 0-1 unit tests ([#4466](https://github.com/agentscope-ai/QwenPaw/pull/4466)):** Replaced by the active Phase 1 PR, establishing a baseline for security testing (tool_guard + skill_scanner).

### 4. Community Hot Topics
The most actively discussed items revolve around unresponsive agents and UI chat loops, highlighting a critical pain point in daily usage:
*   **Agent "Zombie" / Unresponsive Bug ([#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640) - 7 comments):** Users report agents becoming completely unresponsive on platforms like DingTalk and WeChat without crashing, requiring manual restarts. 
*   **Ubuntu Startup Crash ([#2684](https://github.com/agentscope-ai/QwenPaw/issues/2684) - 7 comments):** A persistent installation bug where `copaw app` fails due to deprecated websockets legacy imports.
*   **Chat Window Unresponsiveness ([#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453) & [#4469](https://github.com/agentscope-ai/QwenPaw/issues/4469) - 6 & 5 comments respectively):** Users are experiencing a persistent "jumping dots" animation in the UI, rendering the chat completely useless regardless of model switching or reinstalling. 
*   **Console Freeze via `/mission` ([#4454](https://github.com/agentscope-ai/QwenPaw/issues/4454) - 1 comment):** Executing the `/mission` command completely freezes the UI.

### 5. Bugs & Stability
Today's bug reports point to significant stability and security concerns:
1.  **CRITICAL - Unauthorized RCE Vulnerability ([#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470)):** A user reported an unauthorized Remote Code Execution vulnerability in the plugin interface on `v1.1.7`. *No fix PR is currently visible.*
2.  **CRITICAL - Core Event Loop / TaskGroup Crashes ([#3640](https://github.com/agentscope-ai/QwenPaw/issues/3640), [#4453](https://github.com/agentscope-ai/QwenPaw/issues/4453)):** Agents are silently failing due to `RuntimeError: Event loop stopped` or TaskGroup exceptions. *No specific core fix PR is linked yet.*
3.  **HIGH - Chromadb Rust Binding Segfault ([#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854)):** On Ubuntu 25.10/Python 3.13, `chromadb` causes a hard SIGSEGV that kills the entire CoPaw process without traceback.
4.  **MEDIUM - Rate Limiting Errors ([#4468](https://github.com/agentscope-ai/QwenPaw/issues/4468)):** LLM execution is hitting frequency limits ("retry after 300 seconds"), affecting continuous agent operations.

### 6. Feature Requests & Roadmap Signals
The open PRs and issues show a strong push toward **E2E testing, Desktop apps, and expanded LLM Provider support**. Signals for the next version include:
*   **Testing Infrastructure Push:** User `hanson-hex` opened 5 issues ([#4457](https://github.com/agentscope-ai/QwenPaw/issues/4457), [#4458](https://github.com/agentscope-ai/QwenPaw/issues/4458), [#4459](https://github.com/agentscope-ai/QwenPaw/issues/4459), [#4460](https://github.com/agentscope-ai/QwenPaw/issues/4460), [#4462](https://github.com/agentscope-ai/QwenPaw/issues/4462)) and PR [#4464](https://github.com/agentscope-ai/QwenPaw/pull/4464) to migrate Python E2E tests and mock APIs. PR [#4467](https://github.com/agentscope-ai/QwenPaw/pull/4467) adds 481 security unit tests.
*   **Desktop Application Support:** First-time contributor PRs for Tauri 2.x desktop integration ([#3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)) and Windows system tray functionality ([#4041](https://github.com/agentscope-ai/QwenPaw/pull/4041)).
*   **New Provider: xAI Grok:** PR [#4444](https://github.com/agentscope-ai/QwenPaw/pull/4444) introduces xAI OAuth and Grok provider integration.
*   **Context Estimation Optimization:** Issue [#4463](https://github.com/agentscope-ai/QwenPaw/issues/4463) / PR [#4465](https://github.com/agentscope-ai/QwenPaw/pull/4465) aims to cache and improve context token estimation, reducing overhead.

### 7. User Feedback Summary
Users are heavily utilizing CoPaw as a persistent, multi-channel personal assistant (integrating with WeChat, DingTalk, Console). While the feature set is highly valued, there is notable frustration regarding **runtime reliability**. Multiple reports of the system silently halting or the UI hanging indefinitely (requiring manual container restarts) indicate that the asynchronous/event-loop management needs stabilization. Furthermore, users are attempting to run the stack on newer environments (Python 3.13, Ubuntu 25.10) and are encountering compatibility issues with underlying libraries (like `chromadb` and `websockets`).

### 8. Backlog Watch
The following important items require immediate maintainer triage:
*   **[CRITICAL] Plugin RCE Vulnerability ([#4470](https://github.com/agentscope-ai/QwenPaw/issues/4470)):** This security issue needs immediate validation and patching by the maintainers.
*   **[OPEN] Fix for Chromadb Segfault ([#3854](https://github.com/agentscope-ai/QwenPaw/issues/3854)):** Open since April 27th, this hard crash makes the agent unusable on newer Linux setups and lacks a linked fix PR.
*   **[STALE] Ubuntu Installation Deprecation ([#2684](https://github.com/agentscope-ai/QwenPaw/issues/2684)):** Open since March 31st, the script installation fails on standard Ubuntu setups due to deprecated websockets, blocking new user adoption.
*   **[OPEN] Token Usage Visibility ([#4433](https://github.com/agentscope-ai/QwenPaw/pull/4433)):** A solid UI enhancement PR to show token usage, awaiting maintainer review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-18

## 1. Today's Overview
The ZeroClaw project is currently experiencing a high-velocity development phase, evidenced by 50 pull requests updated and 20 issues touched in the past 24 hours. The activity is heavily concentrated on squashing bugs, expanding multi-platform support, and stabilizing provider integrations. However, a significant portion of today’s activity involves identifying dead configuration code and addressing severe regressions in thinking-mode provider compatibility. With 38 open PRs and no new releases, the maintainers appear to be in an active feature-accumulation and stabilization sprint, likely preparing for a substantial upcoming release.

## 2. Releases
No new releases were recorded today. The project has not published a new version recently, indicating that the substantial volume of open PRs is being accumulated for a future milestone.

## 3. Project Progress
While 12 PRs were merged or closed today, the bulk of the visible progress lies in the 38 active PRs undergoing review:
*   **Platform & Infrastructure:** Significant work is being done to expand platform support, including restoring WhatsApp protocol parity via `whatsapp-rust 0.6` ([PR #6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706)), adding Windows/Linux support to the desktop app ([PR #6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710)), and expanding the cross-platform build matrix ([PR #6749](https://github.com/zeroclaw-labs/zeroclaw/pull/6749)).
*   **Security & Plugin Architecture:** [PR #6746](https://github.com/zeroclaw-labs/zeroclaw/pull/6746) aligns plugin discovery and installation paths, addressing architectural ambiguity.
*   **Channel Fixes:** [PR #6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701) fixes Telegram markdown message splitting, and [PR #6741](https://github.com/zeroclaw-labs/zeroclaw/pull/6741) resolves cron API timezone preservation.

## 4. Community Hot Topics
The community is highly focused on provider compatibility and missing documentation.
*   **DeepSeek-V4 Thinking Mode Incompatibility:** [Issue #6059](https://github.com/zeroclaw-labs/zeroclaw/issues/6059) (4 👍, 9 comments) highlights that ZeroClaw currently breaks when using DeepSeek-V4's API due to changes in the thinking mode format.
*   **Kimi-Code Provider Streaming Errors:** [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) (1 👍, 9 comments) points out similar S1 workflow blocks related to `reasoning_content` missing in assistant tool calls.
*   **Documentation Website Demand:** [Issue #5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) (4 comments) tracks the community's need for an official centralized documentation site, as current fragmented docs are slowing down user onboarding.
*   **Skills UX Tracker:** [Issue #6253](https://github.com/zeroclaw-labs/zeroclaw/issues/6253) is the accepted epic for improving `zeroclaw skills` in the next release cycle, actively soliciting community input.

## 5. Bugs & Stability
Today's reports reveal several critical stability issues, particularly surrounding provider APIs and dead configuration code:
*   **S0 / S1 - Provider Tool-Call Loops:** Xiaomi mimo-v2.5 models are losing `reasoning_content` in agentic loops ([Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)), and MCP tool schemas are silently hanging for 120s and auto-denying due to `tool_search` missing from `default_auto_approve` ([Issue #6721](https://github.com/zeroclaw-labs/zeroclaw/issues/6721)).
*   **S1 - Windows Cron Jobs:** Cron jobs are failing on Windows due to hardcoded `sh` execution ([Issue #6705](https://github.com/zeroclaw-labs/zeroclaw/issues/6705)). A fix is being addressed in related cron PRs like [PR #6740](https://github.com/zeroclaw-labs/zeroclaw/pull/6740).
*   **S2 - Dead Config Code:** Multiple reports show configuration parameters are parsed but do nothing, including `timeout_secs` for native OpenAI ([Issue #6723](https://github.com/zeroclaw-labs/zeroclaw/issues/6723)), `context_aware_tools` ([Issue #6720](https://github.com/zeroclaw-labs/zeroclaw/issues/6720)), and `rerank_enabled` ([Issue #6722](https://github.com/zeroclaw-labs/zeroclaw/issues/6722)). 
*   **S2 - Matrix/Qwen Leak:** Qwen 3.6 tool-call envelopes are leaking raw payloads into Matrix channel replies ([Issue #6734](https://github.com/zeroclaw-labs/zeroclaw/issues/6734)).
*   **Fixes in Progress:** Fortunately, fixes are already proposed for several high-severity bugs, such as [PR #6732](https://github.com/zeroclaw-labs/zeroclaw/pull/6732) resolving OpenAI-compat function name regex failures.

## 6. Feature Requests & Roadmap Signals
Analysis of today's issues and PRs points to clear themes for the v0.7.6 and v0.8.0 milestones:
*   **Agent Capability Sandboxing:** [Issue #6729](https://github.com/zeroclaw-labs/zeroclaw/issues/6729) requests per-agent flags for workspace escapes, signaling a roadmap push toward hardened multi-tenant security.
*   **Skill Auditing Relaxation:** [Issue #6714](https://github.com/zeroclaw-labs/zeroclaw/issues/6714) highlights the need to remove high false-positive markdown link blocks in skill audits to improve the developer experience.
*   **LLM Payload Tracing:** [PR #6744](https://github.com/zeroclaw-labs/zeroclaw/pull/6744) introduces streaming payload tracing via `--log-llm`, showing a focus on improving developer observability for complex agent loops.

## 7. User Feedback Summary
Users are expressing frustration over **config-placebo features** (settings that exist in the docs but don't actually work, like OpenAI timeouts and memory reranking). Additionally, users deploying ZeroClaw in non-interactive or webhook-based environments are experiencing friction, specifically with silent 120-second hangs during MCP tool loading. On a positive note, community members are actively contributing sophisticated fixes (like cross-platform plist rendering and async runtime patches), indicating a highly technically engaged user base.

## 8. Backlog Watch
*   **Massive Commit Revert Recovery:** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) tracks the recovery of 153 commits lost in a bulk revert from March 2026. This issue requires continuous maintainer attention to ensure no critical bug fixes are permanently lost.
*   **Desktop PR Needs Review:** The large PR for Windows and Linux desktop support ([PR #6710](https://github.com/zeroclaw-labs/zeroclaw/pull/6710)) is currently closed but represents a major requested feature; its architectural approach needs maintainer validation to move forward.
*   **CI Actions Allow List:** [Issue #6747](https://github.com/zeroclaw-labs/zeroclaw/issues/6747) notes a quick-fix CI issue where a necessary PR linting action is failing due to repo/org allow-list restrictions.

</details>