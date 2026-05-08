# OpenClaw Ecosystem Digest 2026-05-09

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-08 22:16 UTC

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

# OpenClaw Project Digest — 2026-05-09

## 1. Today's Overview
OpenClaw is experiencing a period of extremely high community engagement and rapid development iteration, though no official stable release was published today. The project saw massive activity in the last 24 hours, with 500 issues updated (285 open, 215 closed) and 500 pull requests updated (342 open, 158 merged/closed). This indicates that maintainers and contributors are actively triaging bugs and merging contributions, likely in preparation for a future release. The focus remains heavily on stability—addressing ACP (Agent Communication Protocol) runtime bugs, gateway reliability under load, and cross-channel parity. 

## 2. Releases
**No new releases** were published today. However, the high volume of bug fixes and the preparation of infrastructure PRs (like pnpm 11 upgrades and SQLite refactoring) strongly suggest the team is gearing up for a patch or minor version bump to address recent regressions reported in versions `2026.5.4` and `2026.5.5`.

## 3. Project Progress
A massive amount of foundational work and bug fixing occurred today across 158 closed/merged PRs. Key areas of advancement include:

*   **Agent Memory & Execution:** Critical fixes were merged to prevent memory and execution loss during session compaction. For example, active background exec references are now preserved across compaction events ([PR #79307](https://github.com/openclaw/openclaw/pull/79307)), and memory flushes no longer share abort signals with the parent operation, preventing premature task cancellation ([PR #79403](https://github.com/openclaw/openclaw/pull/79403)).
*   **Sub-agent & ACP Reliability:** Fixed an issue where sub-agents spawned via `sessions_spawn` lacked access to workspace skills ([PR #79533](https://github.com/openclaw/openclaw/pull/79533)). Additionally, new PRs were opened to warm-restore active ACP sessions on gateway start ([PR #79541](https://github.com/openclaw/openclaw/pull/79541)) and capture ACP token usage accurately ([PR #79540](https://github.com/openclaw/openclaw/pull/79540)).
*   **Control UI & Webchat:** Resolved a highly frustrating UI bug where assistant messages disappeared upon sending a new user message ([PR #76991](https://github.com/openclaw/openclaw/pull/76991)).
*   **Infrastructure:** A major refactor was initiated to migrate the runtime state from scattered JSON/JSONL files into a unified SQLite storage model ([PR #78595](https://github.com/openclaw/openclaw/pull/78595)), and the workspace was upgraded to pnpm 11 ([PR #79414](https://github.com/openclaw/openclaw/pull/79414)).

## 4. Community Hot Topics
The most discussed issues revolve around recent regressions, model provider compatibility, and complex multi-agent deployments:

*   **Filesystem Tool Loss ([Issue #34810](https://github.com/openclaw/openclaw/issues/34810)):** A highly upvoted bug (9 thumbs up, 29 comments) where the agent suddenly loses the ability to execute commands or interact with the filesystem. This points to fragile context/tool injection during long-running sessions.
*   **Doctor Overwriting Model Configs ([Issue #78407](https://github.com/openclaw/openclaw/issues/78407)):** The `openclaw doctor --fix` command is mistakenly rewriting `openai-codex/*` references to `openai/*`, locking out OAuth users. Community PRs like [PR #79494](https://github.com/openclaw/openclaw/pull/79494) have been submitted to address this.
*   **Google Gemini Hangs ([Issue #78502](https://github.com/openclaw/openclaw/issues/78502)):** Developers are frustrated by Gemini Pro models hanging on main sessions while working fine in direct API calls or isolated subagents.
*   **Mistral Object Serialization Bug ([Issue #78846](https://github.com/openclaw/openclaw/issues/78846)):** Mistral models are returning un-serialized `[object Object]` strings in memory and agent messages.

## 5. Bugs & Stability
Several high-severity regressions were reported today affecting core gateway stability and messaging channels:

*   **Gateway Liveness Restarts ([Issue #78601](https://github.com/openclaw/openclaw/issues/78601)):** The gateway's event loop is freezing (98% utilization), triggering continuous watchdog restarts. 
*   **Discord Unknown Channel ([Issue #78572](https://github.com/openclaw/openclaw/issues/78572)):** A regression in v2026.5.4 where the `message` tool fails with "Unknown Channel" despite the bot being connected.
*   **Telegram DM Topics Breakage ([Issue #79455](https://github.com/openclaw/openclaw/issues/79455)):** A sudden API change on Telegram's side is rejecting `message_thread_id` for private DM topics, requiring a patch to use `direct_messages_topic_id`.
*   **Model Allowlist Breaking Cron ([Issue #78000](https://github.com/openclaw/openclaw/issues/78000)):** Silent breaking change where model allowlists are now rejecting valid cron job payload models (e.g., `claude-haiku-4-5`).

*Thankfully, maintainers and community members are rapidly issuing targeted fixes for these issues, indicating strong project health and responsiveness.*

## 6. Feature Requests & Roadmap Signals
User requests are heavily trending toward enterprise needs, granular permissions, and advanced multi-channel integrations:

*   **Hard Permission Gates ([Issue #13583](https://github.com/openclaw/openclaw/issues/13583)):** Strong demand for mechanical "hard gates" that prevent agents from responding until specific tool policies are met (crucial for finance/security use cases).
*   **Direct Exec Mode for Cron ([Issue #18160](https://github.com/openclaw/openclaw/issues/18160)):** Users want cron jobs to execute simple commands without spinning up an LLM `agentTurn`, saving latency and API costs.
*   **Slack Block Kit & Telegram Inline Buttons ([Issue #12602](https://github.com/openclaw/openclaw/issues/12602), [Issue #45839](https://github.com/openclaw/openclaw/issues/45839)):** Pushing for richer UI in messaging platforms rather than plain markdown text.
*   **Native Web Search Passthrough ([Issue #17925](https://github.com/openclaw/openclaw/issues/17925)):** Requesting parity across LLM providers (GLM, Gemini) for native web search, similar to existing xAI support.

*Prediction:* The next version will likely focus heavily on patching the ACP/session spawn lifecycle and merging the SQLite state refactor before adding new feature flags.

## 7. User Feedback Summary
Users are deploying OpenClaw in complex, multi-platform environments (NAS setups, WSL2, enterprise messaging) and are heavily reliant on its cross-channel capabilities (Telegram, Discord, Feishu, Matrix). The main pain point right now is **update friction**—recent point releases have introduced subtle breaking behaviors (like the `doctor` config rewrite and strict model allowlists) that disrupt headless deployments. However, the ability to run local sub-agents and use memory features remains highly valued. Users appreciate the rapid community-driven PRs but are slightly fatigued by the need to constantly check logs for silent regressions.

## 8. Backlog Watch
*   **MemoryFlush Unreliability ([Issue #12590](https://github.com/openclaw/openclaw/issues/12590)):** An open issue since Feb 2026 where memory flushes only fire on every *other* compaction cycle. While recently updated, it needs a definitive upstream fix.
*   **Feature Parity for Telegram Groups ([Issue #8295](https://github.com/openclaw/openclaw/issues/8295)):** Requesting `allowBots` support for Telegram (already supported in Discord/Slack) to enable multi-agent bot-to-bot interactions.
*   **Tool Schema Token Overhead ([Issue #14785](https://github.com/openclaw/openclaw/issues/14785)):** Loading tool schemas currently consumes ~3,500 tokens per session. Optimizing this is critical for long-term scalability and cost reduction.
*   **Signal Daemon Orphaned Processes ([Issue #22676](https://github.com/openclaw/openclaw/issues/22676)):** A lingering race condition during `SIGUSR1` restarts causing port conflicts and orphaned processes.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal assistant open-source ecosystem based on the 2026-05-09 community digests.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by rapid iteration and intense focus on production readiness. Major projects are evolving beyond basic chat interfaces into complex, multi-channel, and multi-modal agentic systems capable of operating across platforms like Telegram, Discord, WeChat, and Slack. A significant portion of current engineering effort is dedicated to resolving infrastructure growing pains—specifically around memory persistence, agent loop stability, and secure multi-tenancy. Meanwhile, architectural philosophies are diverging, with some projects targeting massive enterprise scalability while others optimize for local-first, edge, or IoT deployments.

## 2. Activity Comparison
*Health Score Key: A (Stable/Mature), B (Active/Healthy), C (High Velocity/Growing Pains), D (Maintenance/Low Activity).*

| Project | Issues (24h) | Pull Requests (24h) | Release Status | Health Score | Core Focus |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (285 open) | 500 (342 open) | No release (Gearing up) | **B+** | ACP reliability, fixing regressions, SQLite migration |
| **CoPaw** | 36 | 36 (21 merged) | `v1.1.6-beta.1` | **A-** | WebUI performance, Cron routing, multi-channel |
| **ZeroClaw** | 21 | 48 (12 merged) | `v0.7.5` (Prep `v0.8.0`) | **B** | Desktop app (Tauri), microkernel refactor, provider fixes |
| **LobsterAI** | 2 | 29 (27 merged) | `release/2026.05.08` imminent | **A** | UI/UX polish, CodeMirror integration, Cron scheduling |
| **Hermes Agent** | 50 | 50 (6 merged) | No release (v2026.5.7 prev) | **C+** | Windows support, CI unblocking, severe P1 bugs |
| **PicoClaw** | *High* | 18 merged | `v0.2.8-nightly` | **B+** | Edge/IoT integrations, MQTT, tool safety guards |
| **IronClaw** | 11 | 45 (20 merged) | `v0.28.0` prep | **B** | "Reborn" architecture, multi-tenant security |
| **NanoClaw** | 5 | 17 (2 merged) | No release | **B-** | K8s container runtimes, DB architecture, TS build fixes |
| **NanoBot** | 10 | 22 (14 merged) | No release | **A-** | Agent loop stability, WebUI redesign, Feishu/WeChat |
| **Moltis** | 0 | 5 (2 merged) | `20260508.01` | **A** | External agent sessions, Chat UI refresh |
| **NullClaw** | 1 | 4 merged | No release | **B+** | ACP adapter, CI/CD nightly builds |
| **ZeptoClaw** | 0 | 0 | No release | **D** | Low activity; refining memory routing |
| **TinyClaw** | 0 | 0 | No release | **D** | Dormant |

## 3. OpenClaw's Position
*   **Advantages:** OpenClaw serves as the **core reference implementation** and possesses the largest raw volume of community engagement (1,000+ issues/PRs updated daily). Its cross-channel parity and robust multi-agent capabilities set the baseline for the ecosystem.
*   **Technical Approach:** Unlike peers swapping entire architectures (like IronClaw's "Reborn" substrate) or targeting edge devices, OpenClaw is deeply focused on data layer maturity—specifically migrating from scattered JSON/JSONL files to a unified SQLite storage model to ensure state consistency. 
*   **Community Size Comparison:** OpenClaw's community is massive but currently feeling "update friction" due to subtle regressions in recent point releases. In contrast, projects like LobsterAI and NanoBot have smaller but highly synchronized communities that are currently shipping features with less turbulence. 

## 4. Shared Technical Focus Areas
Several universal requirements are emerging simultaneously across independent projects:
*   **Persistent Agent Memory & Sessions:** Users are frustrated by lost context. 
    *   *Projects:* **OpenClaw** (fixing memory loss during session compaction), **NanoBot** (fixing memory hidden by replay window), **Hermes Agent** (29% session leakage on hard exits), **CoPaw** (context dropping).
*   **Dynamic & Cost-Aware Model Routing:** Relying on a single LLM is no longer sufficient; assistants must escalate tasks or failover dynamically. 
    *   *Projects:* **Hermes Agent** (community demanding per-turn expert-on-demand escalation), **NanoBot** (adding model presets and failover), **Moltis** (surfacing specific STT models).
*   **Broken/Strict Sandbox Execution:** Giving AI filesystem access remains fraught with permission bugs.
    *   *Projects:* **OpenClaw** (losing filesystem tools mid-session), **PicoClaw** (`guardCommand` regex false positives), **ZeroClaw** (sandbox lockouts).
*   **Multi-Tenancy & Security Isolation:** As agents move to enterprise, isolating users is critical.
    *   *Projects:* **IronClaw** (patching cross-tenant SSE/WS leaks), **Hermes Agent** (profile isolation gaps), **NullClaw** (proposing a Data Governance Layer).

## 5. Differentiation Analysis
*   **Enterprise vs. Local-First:** **IronClaw** and **NanoClaw** are heavily focused on enterprise/Kubernetes substrates (durable credentials, container runtimes). Conversely, **ZeroClaw** and **PicoClaw** are distinctly targeting local-first, edge, and IoT environments (Tauri desktop apps, MQTT protocols, Raspberry Pi support).
*   **Target Markets:** **CoPaw**, **NanoBot**, and **PicoClaw** share a strong focus on Chinese messaging platforms (WeChat, Feishu, DingTalk) and regional edge hardware. **Hermes Agent** and **OpenClaw** have a broader Western/Global focus with deep Slack/Discord/Telegram integrations.
*   **Architectural Paradigms:** **IronClaw** is unique in its heavy reliance on a Rust-based "microkernel" loop driver, whereas most other projects (OpenClaw, NanoBot, CoPaw) operate on TypeScript/Node.js or Python ecosystems with gateway-based execution models.

## 6. Community Momentum & Maturity
*   **Stabilizing & Shipping (Mature):** **LobsterAI**, **NanoBot**, and **Moltis** show high merge rates, targeted UI/UX polish, and stable releases, indicating they are mature projects successfully responding to refined user feedback.
*   **Rapidly Iterating (High Velocity/Growing Pains):** **OpenClaw** and **Hermes Agent** are moving massive volumes of code but are bogged down by P1 regressions (e.g., broken CLI tools, gateway restarts). They are trading stability for speed. **ZeroClaw** is actively navigating a major architectural shift to a desktop-first model.
*   **Niche/Slow Iteration:** **ZeptoClaw** and **NullClaw** represent highly specialized or newer entries (Zig-based) that maintain healthy but low-volume development cycles.

## 7. Trend Signals
*   **The Rise of "Agentic UIs":** There is a distinct shift away from simple markdown chat interfaces toward rich, desktop-like agentic UIs. **LobsterAI** adopting CodeMirror 6, **ZeroClaw** bundling static assets into Tauri, and **Moltis's** UI composer refresh signal that users expect native-grade control and rich artifact rendering in their assistants.
*   **Hybrid Cloud/Local Inference will be Standard:** Developer friction regarding provider timeouts and GPU/CPU fallbacks (**CoPaw**, **ZeroClaw**) highlights a critical need: agents must seamlessly route tasks between local models (for privacy/speed) and cloud models (for heavy reasoning), a feature currently being actively demanded in **Hermes Agent**.
*   **Vocal Demand for Reversibility:** Users want the ability to undo agent actions. The strong community push for "hard permission gates" (**OpenClaw**) and "session rollbacks/rewinds" (**CoPaw**) indicates that trust in AI autonomy remains low. Developers building agentic loops must prioritize granular human-in-the-loop approval systems.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-09

## 1. Today's Overview
NanoBot demonstrated robust development activity over the past 24 hours, processing 10 issues and 22 pull requests. With 14 PRs merged/closed and 8 remaining open, the project maintains a strong merge velocity and active contributor base. The day's focus was heavily concentrated on hardening agent loop stability, expanding channel integrations (Feishu, WeChat), and introducing highly anticipated configuration features like model presets and WebUI settings redesigns. There were no new releases cut today, indicating an ongoing accumulation of features for an impending milestone.

## 2. Releases
No new releases were published today. The project is currently iterating rapidly on the main and nightly branches, accumulating significant feature additions and bug fixes for a future release.

## 3. Project Progress
Significant advancements were merged today across agent stability, UI/UX, and core functionality:
*   **Agent Loop Stability:** Two critical PRs by `andrew-ellis-engineering` were merged to prevent infinite reasoning loops: [PR #3701](https://github.com/HKUDS/nanobot/pull/3701) (guards repeated identical local tool calls) and [PR #3702](https://github.com/HKUDS/nanobot/pull/3702) (adds configurable turn-level escalation).
*   **WebUI & Configuration:** [PR #3703](https://github.com/HKUDS/nanobot/pull/3703) completely redesigned the WebUI settings and BYOK (Bring Your Own Key) configuration experience. [PR #3358](https://github.com/HKUDS/nanobot/pull/3358) introduced model presets for quick switching and failover. 
*   **Multimodal & Memory:** [PR #3695](https://github.com/HKUDS/nanobot/pull/3695) added first-class image generation support with artifact persistence. [PR #3687](https://github.com/HKUDS/nanobot/pull/3687) fixed a critical memory consolidation bug where history was hidden by the replay window.
*   **Channel Fixes:** [PR #3704](https://github.com/HKUDS/nanobot/pull/3704) resolved an issue where Feishu bot messages leaked out of their designated group topics. [PR #3697](https://github.com/HKUDS/nanobot/pull/3697) fixed a Windows CLI crash caused by surrogate code points (e.g., emojis) during input.

## 4. Community Hot Topics
*   **[Issue #3652](https://github.com/HKUDS/nanobot/issues/3652) (Closed):** Users requested the ability to completely disable the "Dream" background consolidation feature. This aligns directly with open PR [PR #3591](https://github.com/HKUDS/nanobot/pull/3591), which adds granular update scope controls to Dream, proving the community and contributors are synced on this need.
*   **[Issue #3650](https://github.com/HKUDS/nanobot/issues/3650) (Open):** A highly popular feature request asking for the ability to customize the bot's name and icon in agent mode (e.g., changing "nanobot is thinking..." to "mybot is thinking..."). This reflects a strong user desire for better white-labeling and personalization of their assistants.
*   **[Issue #3637](https://github.com/HKUDS/nanobot/issues/3637) (Open):** Discussion around the transparent configuration of Groq voice transcription providers, highlighting friction in multi-modal provider setups.

## 5. Bugs & Stability
*   **High Severity - Infinite Tool Loops:** The agent was prone to repeating identical local tool calls until manual cancellation. *Status:* Fixed and merged in [PR #3701](https://github.com/HKUDS/nanobot/pull/3701).
*   **Medium Severity - Memory Loss on Interruption:** [Issue #3689](https://github.com/HKUDS/nanobot/issues/3689) reports that interrupting a bot stuck in a loop causes it to lose the context of the current conversation. *Status:* Open, no PR yet.
*   **Medium Severity - WeChat Silent Drops:** Inbound messages in WeChat were being silently dropped due to exceptions and expired tokens. *Status:* Fix proposed in [PR #3684](https://github.com/HKUDS/nanobot/pull/3684) (Open).
*   **Low Severity - Feishu Topic Leakage:** Multiple file uploads in a Feishu topic caused some files to post to the main group chat. *Status:* Fixed and merged in [PR #3704](https://github.com/HKUDS/nanobot/pull/3704).
*   **Low Severity - Windows CLI Emoji Crash:** Surrogate code points crashed the message bus on Windows. *Status:* Fixed and merged in [PR #3697](https://github.com/HKUDS/nanobot/pull/3697).

## 6. Feature Requests & Roadmap Signals
*   **Custom Bot Branding:** [Issue #3650](https://github.com/HKUDS/nanobot/issues/3650) requests configurable bot name/icons.
*   **Streaming Tool Events:** [Issue #3698](https://github.com/HKUDS/nanobot/issues/3698) requests injecting tool progress events into the API server's SSE stream, vital for building responsive third-party UI clients.
*   **Feishu Topic Isolation Toggle:** [Issue #3692](https://github.com/HKUDS/nanobot/issues/3692) asks for an on/off switch for the new Feishu topic isolation feature, as automatic isolation breaks workflows where multiple files need to be processed in a single group context.
*   *Prediction:* The next release will likely heavily feature WebUI enhancements (BYOK, settings, image generation UI) and robust agent loop/failover guardrails.

## 7. User Feedback Summary
Users are actively pushing NanoBot into production environments via diverse channels (Feishu, WeChat, WhatsApp), which is surfacing channel-specific edge cases. A clear pain point is **agent loop management**—users express frustration when the bot gets stuck in repetitive reasoning cycles, and even more frustration when interrupting the loop causes context loss. Additionally, power users want tighter control over the agent's background operations (specifically disabling or throttling "Dream" and Heartbeat tasks) to prevent local LLM endpoint overload.

## 8. Backlog Watch
*   **[PR #3514](https://github.com/HKUDS/nanobot/pull/3514):** A fix stripping device suffixes from WhatsApp JIDs to correctly match group mentions. It has been open since April 28th and requires maintainer review.
*   **[PR #3590](https://github.com/HKUDS/nanobot/pull/3590):** Adds a manual trigger command for Heartbeat. Open since May 2nd, awaiting validation.
*   **[Issue #1412](https://github.com/HKUDS/nanobot/issues/1412):** A request from March regarding processing/restrictions for Home Assistant bot notifications. It has an upvote but only 2 comments, indicating it may have fallen off the maintainer radar.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-09

## 1. Today's Overview
Hermes Agent experienced a massive spike in community activity on May 8, 2026, with exactly 50 issues updated (49 open, 1 closed) and 50 pull requests updated (44 open, 6 merged/closed). The project remains under highly active development, driven largely by community contributors expanding platform integrations, fixing edge cases across diverse environments, and proposing architectural enhancements. However, the lack of a new release alongside a surge in open bugs and feature PRs suggests the project is in a heavy iteration and accumulation phase. The high volume of P1 and P2 bug reports highlights growing pains as users deploy Hermes in complex, multi-platform, and self-hosted configurations.

## 2. Releases
There were **0 new releases** today. The last known version referenced in recent issues is `v2026.5.7`. Users and contributors are actively accumulating fixes and features for what appears to be an upcoming patch or minor release.

## 3. Project Progress
Six pull requests were merged or closed today, representing incremental but important progress across Windows support, CI stability, and system reliability:

- **Windows Support & Docs:** PR [#22099](https://github.com/NousResearch/hermes-agent/pull/22099) adds gateway service install options for Windows during setup, and PR [#22089](https://github.com/NousResearch/hermes-agent/pull/22089) ships comprehensive native Windows documentation and an install one-liner on the landing page.
- **CI Unblocked:** PR [#22098](https://github.com/NousResearch/hermes-agent/pull/22098) removes 50 stale/broken tests that were blocking the main CI workflow.
- **Resilience Fix:** PR [#22091](https://github.com/NousResearch/hermes-agent/pull/22091) guards `hermes_bootstrap` imports to prevent partial updates from breaking the CLI ("bricking" the installation).
- **Update Speed:** PR [#22101](https://github.com/NousResearch/hermes-agent/pull/22101) cuts post-drain update wait time from ~60s to ~5s by bypassing `systemd RestartSec` after voluntary restarts.

## 4. Community Hot Topics
The most actively discussed issues reveal strong community interest in adaptive model routing, Telegram API changes, and UX polish:

- **[#20249](https://github.com/NousResearch/hermes-agent/issues/20249)** (7 comments) — *Model Presets: per-turn expert-on-demand model escalation.* Users want Hermes to automatically escalate from a cheap/fast model to a high-reasoning model (e.g., Opus-level) for complex turns. This signals demand for cost-aware, dynamic inference routing.
- **[#5151](https://github.com/NousResearch/hermes-agent/issues/5151)** (4 comments, 8 👍) — *Streaming retry status messages accumulate.* A UX bug where retry messages pile up in chat even after successful recovery. High thumb-ups indicate this is a widely experienced annoyance.
- **[#21981](https://github.com/NousResearch/hermes-agent/issues/21981)** (3 comments, 5 👍) — *Telegram topic-enabled DM shows typing but never delivers response.* A P1 bug specifically affecting Telegram's topic-based DMs. Closed status suggests a possible fix.
- **[#12146](https://github.com/NousResearch/hermes-agent/issues/12146)** (3 comments) — *Agent falls back to OpenRouter despite custom provider config.* A critical config isolation bug for self-hosted users using Ollama or vLLM.
- **[#21893](https://github.com/NousResearch/hermes-agent/issues/21893)** (2 comments) — *Discord reaction-based option selection.* A feature request to replace typed responses with emoji reactions for the `clarify` tool on Discord.

## 5. Bugs & Stability
Today saw numerous bug reports, with several P1 issues affecting core functionality:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **P1** | [#12146](https://github.com/NousResearch/hermes-agent/issues/12146) | Custom model provider config ignored; falls back to OpenRouter | No fix PR yet |
| **P1** | [#21937](https://github.com/NousResearch/hermes-agent/issues/21937) | `_priority_key` ValueError in concurrent tool execution | No fix PR yet |
| **P1** | [#22032](https://github.com/NousResearch/hermes-agent/issues/22032) | SQLite locking protocol fails on NFS/WSL1, silently breaks session features | No fix PR yet |
| **P1** | [#21981](https://github.com/NousResearch/hermes-agent/issues/21981) | Telegram topic DMs show typing but never deliver response | **Closed** (likely fixed) |
| **P2** | [#15421](https://github.com/NousResearch/hermes-agent/issues/15421) | Slack top-level messages create isolated sessions; sessions.json not persisting | No fix PR yet |
| **P2** | [#21946](https://github.com/NousResearch/hermes-agent/issues/21946) | DeepSeek V4 Pro thinking content not persisted, causing HTTP 400 on multi-turn | No fix PR yet |
| **P2** | [#21948](https://github.com/NousResearch/hermes-agent/issues/21948) | Dashboard Chat WebSocket connects but never streams frames | No fix PR yet |
| **P2** | [#21950](https://github.com/NousResearch/hermes-agent/issues/21950) | Credential pool in auth.json silently overrides config.yaml api_key | No fix PR yet |
| **P2** | [#22071](https://github.com/NousResearch/hermes-agent/issues/22071) | 29% of sessions leak with `ended_at=NULL` on hard exits | No fix PR yet |
| **P2** | [#22079](https://github.com/NousResearch/hermes-agent/issues/22079) | Default pytest run fails under xdist across multiple test suites | Related to CI cleanup PR [#22098](https://github.com/NousResearch/hermes-agent/pull/22098) |

**Stability Assessment:** The P1 bugs around provider config resolution (#12146) and SQLite on network filesystems (#22032) are likely impacting self-hosted and enterprise users. The session leak issue (#22071) at 29% is a significant data integrity concern for production deployments.

## 6. Feature Requests & Roadmap Signals
Several feature requests provide signals about where the community wants Hermes to evolve:

- **Local Brain / Hybrid Cognition** — [#21992](https://github.com/NousResearch/hermes-agent/issues/21992): A first-class local model layer for hybrid local/cloud agent reasoning. This would be a major architectural addition.
- **Model Escalation** — [#20249](https://github.com/NousResearch/hermes-agent/issues/20249): Per-turn automatic model switching based on task complexity. High engagement (7 comments) suggests strong demand.
- **Nostr/Vector Integration** — [#22033](https://github.com/NousResearch/hermes-agent/issues/22033): Decentralized messaging via the Nostr network for censorship-resistant communication.
- **Persistent Webchat Sessions** — [#22027](https://github.com/NousResearch/hermes-agent/issues/22027): Tasks should continue running even when the browser tab closes.
- **Voice-Adaptive Personality** — [#22057](https://github.com/NousResearch/hermes-agent/issues/22057): Automatic personality switching when TTS/voice mode is active to avoid emoji readouts.
- **Cross-Profile Dashboard Cron** — [#22021](https://github.com/NousResearch/hermes-agent/issues/22021): Display all profiles' cron jobs in the dashboard.

**Prediction for next release:** The most likely inclusions are Windows support improvements (already merged), CI stabilization, the `sendMessageDraft` Telegram streaming transport ([#22093](https://github.com/NousResearch/hermes-agent/pull/22093)), and security redaction fixes ([#22102](https://github.com/NousResearch/hermes-agent/pull/22102)). The Local Brain and model escalation features are likely longer-term roadmap items.

## 7. User Feedback Summary
Real user pain points emerging from today's issues:

- **Self-hosting friction is high:** Multiple issues (#12146, #22054, #22032) reveal that users running Hermes with local models (Ollama, vLLM) on non-standard setups (NFS, WSL1, Docker) encounter silent failures and config overrides. The PATH injection issue (#22054) where the venv shadows system Python 3.11 is a particularly sharp edge.
- **Multi-platform gateway maturity varies:** Telegram is breaking due to Bot API 10.0 changes (#22022, #21981), Slack has session isolation problems (#15421), and Microsoft Teams has packaging issues (#22015). Discord appears most stable.
- **Credential management is confusing:** The auth.json vs config.yaml precedence issue (#21950) causes silent stale-key errors. Users expect config.yaml to be authoritative.
- **Session reliability concerns:** Session leakage (#22071) and the lack of persistent sessions on webchat disconnect (#22027) suggest the session lifecycle needs hardening.
- **Local/cloud hybrid interest is strong:** The Local Brain proposal (#21992) and model escalation request (#20249) both reflect users wanting cost-effective, adaptive AI rather than always-on expensive models.

## 8. Backlog Watch
Several important issues and PRs appear to need maintainer attention:

- **[#12146](https://github.com/NousResearch/hermes-agent/issues/12146)** (P1, open since 2026-04-18): Custom provider fallback bug has 3 comments but no assigned fix. Critical for self-hosted users.
- **[#5151](https://github.com/NousResearch/hermes-agent/issues/5151)** (P2/P3 UX, open since 2026-04-05): Accumulating retry status messages. 8 👍 — the highest reaction count of any open issue — yet no fix PR.
- **[#15421](https://github.com/NousResearch/hermes-agent/issues/15421)** (P2, open since 2026-04-24): Slack session isolation. 3 comments, no activity toward a fix.
- **[#10376](https://github.com/NousResearch/hermes-agent/issues/10376)** (P2, open since 2026-04-15): Profile isolation is incomplete — clone copies memory, agents can read across profiles. A fundamental security/isolation gap with no fix PR.
- **[#16225](https://github.com/NousResearch/hermes-agent/pull/16225)** (P2, open since 2026-04-26): Binds API server models endpoint to only configured models. A security-hardening PR awaiting review.
- **[#21344](https://github.com/NousResearch/hermes-agent/pull/21344)** (P2, open since 2026-05-07): DingTalk file transfer support. Community-contributed platform enhancement needing review.

**Priority recommendation:** The profile isolation bug (#10376) and custom provider fallback (#12146) should be addressed before the next release as they represent potential data leakage and broken core functionality respectively.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-05-09

## 1. Today's Overview
PicoClaw demonstrates highly active and healthy development momentum, closing 14 issues and merging 18 PRs in the last 24 hours. The project is currently iterating rapidly towards its next milestone, evidenced by the publication of a new nightly build. Core maintainers and community contributors are heavily focused on refining multi-agent capabilities, enhancing channel integrations (like Telegram, WhatsApp, and Matrix), and hardening the agent's safety guardrails. With a balanced mix of bug fixes, architectural refactors, and new feature implementations, the project is in a state of robust, collaborative growth.

## 2. Releases
- **nightly: Nightly Build** (`v0.2.8-nightly.20260508.2834db13`)
  - **Overview:** Automated nightly build cut from the `main` branch. Users should be aware that this is an automated snapshot and may be unstable. 
  - **Migration Notes:** None explicitly stated, though it includes all recent merged PRs up to May 8, 2026. 

## 3. Project Progress
Today saw significant progress in merging 18 PRs, focusing heavily on agent execution flows, streaming, and protocol compatibility:
- **Agent Core & Messaging:** Several foundational PRs by contributor `bogdanovich` were merged/closed, fixing how tool feedback is dismissed during synchronous subturns ([PR #2822](https://github.com/sipeed/picoclaw/pull/2822)) and when outbound messages are skipped ([PR #2823](https://github.com/sipeed/picoclaw/pull/2823)). Transcription of queued voice follow-ups was also patched ([PR #2828](https://github.com/sipeed/picoclaw/pull/2828)).
- **Streaming & Chat UX:** Web chat streaming and scroll UX improvements advanced ([PR #2587](https://github.com/sipeed/picoclaw/pull/2587)), alongside native audio input support for multimodal LLMs ([PR #2626](https://github.com/sipeed/picoclaw/pull/2626)). 
- **Provider Compatibility:** Fixes for OpenAI-compatible streaming usage ([PR #2522](https://github.com/sipeed/picoclaw/pull/2522)) and MCP tool schema sanitization for Gemini models ([PR #2681](https://github.com/sipeed/picoclaw/pull/2681)) were successfully merged.
- **New Channels:** MQTT protocol channel support was merged ([PR #2705](https://github.com/sipeed/picoclaw/pull/2705)), expanding PicoClaw's IoT/edge capabilities.

## 4. Community Hot Topics
- **LM Studio Connectivity ([Issue #28](https://github.com/sipeed/picoclaw/issues/28)):** With 18 comments and ongoing activity since Feb 2026, users are highly interested in a seamless "Easy Connect" experience for local LM Studio instances, highlighting a strong demand for simplified local model deployment.
- **`exec` Tool Safety Guard Overreach ([Issue #1042](https://github.com/sipeed/picoclaw/issues/1042)):** A 10-comment thread discussing the `guardCommand` method's regex blocking benign commands (like `curl wttr.in/Beijing`) due to path-matching logic.
- **Feishu (Lark) Plugin Optimization ([Issue #2580](https://github.com/sipeed/picoclaw/issues/2580)):** A 3-comment thread requesting better streaming, status display, and integration for the Chinese messaging platform Feishu, indicating a strong regional user base.
- **Codex OAuth Empty Responses ([Issue #2674](https://github.com/sipeed/picoclaw/issues/2674)):** Upvoted 3 times, users are actively discussing issues with empty assistant responses when using the OpenAI ChatGPT backend via Codex OAuth.

## 5. Bugs & Stability
Recent bugs reported today largely center around the newly released v0.2.8 and specific channel configurations:
1. **v0.2.8 Image Recognition Failure ([Issue #2738](https://github.com/sipeed/picoclaw/issues/2738)):** Users report uploaded images are no longer recognized after upgrading to v0.2.8. *Status: Closed (Likely resolved in today's nightly).*
2. **Exec Tool Safety Guard False Positives ([Issue #1042](https://github.com/sipeed/picoclaw/issues/1042) & [PR #2826](https://github.com/sipeed/picoclaw/pull/2826)):** `restrict_to_workspace` incorrectly evaluates bash commands. *Status: Fix PR actively open.*
3. **Android v0.2.8 Data Access Crash ([Issue #2744](https://github.com/sipeed/picoclaw/issues/2744)):** Users on Android cannot access any data from tabs. *Status: Open.*
4. **Config Panics with SecureString ([PR #2270](https://github.com/sipeed/picoclaw/pull/2270)):** Fixes a system panic when iterating map values containing `SecureString`. *Status: Open/Merged into nightly.*
5. **Matrix Channel `allow_from` Broken ([PR #2827](https://github.com/sipeed/picoclaw/pull/2827)):** MXIDs with colons break the allowlist filter. *Status: Fix PR open.*
6. **Tool Feedback UI Bug in Feishu ([Issue #2785](https://github.com/sipeed/picoclaw/issues/2785)):** Feishu notification center only shows the first tool call message. *Status: Open.*

## 6. Feature Requests & Roadmap Signals
- **Embedded Systems Support:** Request to add UART (serial communication) tools to complement existing I2C/SPI support ([Issue #2649](https://github.com/sipeed/picoclaw/issues/2649)), reinforcing PicoClaw's edge/IoT niche.
- **Web Search Grounding:** A highly strategic open PR adds a Gemini Google Search provider (`tools.web.provider = "gemini"`) for native web grounding ([PR #2763](https://github.com/sipeed/picoclaw/pull/2763)).
- **Advanced Memory Integrations:** Users are requesting native integrations for provider APIs like `mem0` and `Supermemory` to improve long-term agent memory ([Issue #2515](https://github.com/sipeed/picoclaw/issues/2515)).
- **Multi-Agent Discovery:** Layer 1 multi-agent registry injection is actively being developed in [PR #2158](https://github.com/sipeed/picoclaw/pull/2158), signaling a major leap towards complex agentic workflows in upcoming versions.
- **Pre-compiled WhatsApp Builds:** Request for default ARM64 builds to include WhatsApp support for Raspberry Pi users ([Issue #2625](https://github.com/sipeed/picoclaw/issues/2625)).

## 7. User Feedback Summary
Users appreciate PicoClaw's lightweight footprint and its adaptability to edge devices (like Raspberry Pi Zero 2) and embedded environments. However, friction points exist around the `workspace` directory sandboxing, which users report as overly aggressive and prone to generating hundreds of error logs ([Issue #2519](https://github.com/sipeed/picoclaw/issues/2519)). Mobile users (specifically on Android) have expressed frustration with the "Enter" key instantly sending messages instead of creating new lines ([Issue #2376](https://github.com/sipeed/picoclaw/issues/2376)), and some OAuth configurations (like OpenAI and Antigravity) remain tricky to deploy on ARM64 architectures ([Issue #2602](https://github.com/sipeed/picoclaw/issues/2602)). Overall, the community is highly engaged, frequently submitting detailed bug reports and feature proposals tailored to specific hardware and messaging networks.

## 8. Backlog Watch
- **WhatsApp Native Defects:** The compounded `whatsapp_native` defects silently breaking `group_trigger.mention_only` and `allow_from` LID-migration issues ([Issue #2541](https://github.com/sipeed/picoclaw/issues/2541), [Issue #2540](https://github.com/sipeed/picoclaw/issues/2540)) require core maintainer attention, as users have provided local patches but they remain unmerged.
- **Windows Build Support:** [Issue #2651](https://github.com/sipeed/picoclaw/issues/2651) asks for build instructions on Windows but remains unanswered. 
- **Seahorse Context Budget:** [Issue #2527](https://github.com/sipeed/picoclaw/issues/2527) requests making `fresh_tail_size` configurable. The issue has support but no active PR is linked to it yet. 
- **Bedrock Streaming Implementation:** [PR #2645](https://github.com/sipeed/picoclaw/pull/2645) implementing `StreamingProvider` for AWS Bedrock has been open for over two weeks and requires a maintainer review to proceed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-09

## 1. Today's Overview
NanoClaw is experiencing a **high-activity surge**, driven almost entirely by community contributions. With 17 pull requests updated in the last 24 hours (15 open, 2 merged/closed) and 5 issues processed, the project's contributor base is highly engaged. The current development focus is heavily split between hardening the system's infrastructure (improving container runtimes, database migrations, and mount security) and fixing critical message-routing edge cases. Notably, this burst of activity exposed a temporary TypeScript build failure on `main`, which the community has already self-corrected. 

## 2. Releases
**No new releases** were cut today.

## 3. Project Progress
Two pull requests were successfully closed/merged, and several major infrastructure features advanced through open PRs:
*   **CLI & Admin Tooling:** [`feat(cli): add ncl admin CLI` (#2350)](https://github.com/qwibitai/nanoclaw/pull/2350) was closed. This introduces a robust admin CLI (`ncl`) for querying and modifying the central DB via Unix socket, representing a massive leap in operator experience.
*   **Setup/Onboarding:** [`setup: correct Slack member-ID card directions` (#2300)](https://github.com/qwibitai/nanoclaw/pull/2300) was merged, resolving a UI copywriting bug that pointed users to the wrong Slack profile button locations.
*   **Database Architecture (In Progress):** [`feat(db): move container config from filesystem to DB` (#2351)](https://github.com/qwibitai/nanoclaw/pull/2351) is open. This shifts the source of truth for container runtime configs to a central DB, a necessary prerequisite for advanced multi-node scaling.
*   **Build Pipeline (In Progress):** [`fix(container-runner): raise install_packages build timeout to 15min` (#2352)](https://github.com/qwibitai/nanoclaw/pull/2352) is open, addressing timeout issues for heavier self-modification flows on slower networks.

## 4. Community Hot Topics
The most actively discussed topics center around enterprise scalability, multi-platform stability, and security:
*   **Enterprise/Kubernetes Adoption:** The open issue [`feat: Kubernetes container runtime for agent spawning` (#2354)](https://github.com/qwibitai/nanoclaw/issues/2354) sparked traction. The underlying need is clear: power users want to move beyond local Docker/Apple Container setups to deploy per-session agent containers as Kubernetes pods on managed clusters.
*   **Telegram Security Vulnerability:** Issues [`#2340`](https://github.com/qwibitai/nanoclaw/issues/2340) and [`#2341`](https://github.com/qwibitai/nanoclaw/issues/2341) highlight a critical oversight where any user in a main Telegram group could trigger host restarts (`/restart`, `/build`). The community has successfully driven the addition of an owner-role check to mitigate this.
*   **Agent Prompting Compose-ability:** [`feat(claude-md-compose): auto-import per-group CLAUDE.role.md` (#2345)](https://github.com/qwibitai/nanoclaw/pull/2345) is generating interest as users push for more dynamic, group-specific persona management without modifying the shared base prompt.

## 5. Bugs & Stability
Several bugs impacting system stability and message routing were identified today, but the community has aggressively opened PRs to address them:

*   **Severity: High (Build Failure)**
    *   *Issue:* `pnpm run build` on `main` is currently failing due to TypeScript errors introduced by recent schema changes (missing `in_reply_to` and tightened types).
    *   *Fix PR:* [`fix(tests): satisfy tightened RoutableAgentMessage and Session types` (#2344)](https://github.com/qwibitai/nanoclaw/pull/2344) and [`fix(test): add missing in_reply_to to A2A test objects` (#2339)](https://github.com/qwibitai/nanoclaw/pull/2339) are actively seeking merge.
*   **Severity: High (Message Routing Drops)**
    *   *Issue:* Unknown slash commands cause the Agent SDK to misinterpret inputs, resulting in silently dropped responses. 
    *   *Fix PR:* [`fix(formatter): treat unknown slash commands as normal chat` (#2346)](https://github.com/qwibitai/nanoclaw/pull/2346).
*   **Severity: Medium (Context Loss)**
    *   *Issue:* Thread context is lost when a batch begins with a non-chat system message (e.g., an `install_packages` approval).
    *   *Fix PR:* [`fix(agent-runner/formatter): preserve thread context when system message heads the batch` (#2347)](https://github.com/qwibitai/nanoclaw/pull/2347).
*   **Severity: Medium (Linux/Root Spawns)**
    *   *Issue:* Linux installs running as root hit an unrecoverable container spawn loop due to UID/GID permission mismatches on network filesystems.
    *   *Fix PR:* [`fix(session-manager): chown new session dirs when host runs as root` (#2353)](https://github.com/qwibitai/nanoclaw/pull/2353).
*   **Severity: Low (System Alerts)**
    *   *Issue:* [`verify oauth-sync system alert delivery` (#2343)](https://github.com/qwibitai/nanoclaw/issues/2343) was closed after identifying that alerts failed to fire when credentials went missing.

## 6. Feature Requests & Roadmap Signals
*   **Kubernetes Runtime ([#2354](https://github.com/qwibitai/nanoclaw/issues/2354)):** This is the strongest signal for the project's next major architectural phase. Decoupling agent spawning from local containerization will unlock enterprise deployments.
*   **Mount Security & WhatsApp Reconnects:** [`fix(mount-security)` (#2349)](https://github.com/qwibitai/nanoclaw/pull/2349) and [`fix(channels/whatsapp)` (#2348)](https://github.com/qwibitai/nanoclaw/pull/2348) indicate an ongoing effort to harden external integrations and file I/O reliability. 
*   **CLAUDE.md Role Composition ([#2345](https://github.com/qwibitai/nanoclaw/pull/2345)):** As agents become more complex, users are demanding modular prompt management. This feature is highly likely to be prioritized for the next release.

## 7. User Feedback Summary
Operators and users deploying NanoClaw in production are currently feeling the friction of **multi-platform network management and permissions**. The TypeScript build breaks, while minor and test-only, caused frustration, highlighting the need for stricter CI checks before merging to `main`. Conversely, the rapid community response to the Telegram security issue and the WhatsApp reconnect logic shows strong user satisfaction with the project's open-source collaboration model. Users running heavy self-modification flows (like `install_packages`) are actively pushing the system beyond its original timeouts, indicating advanced, heavy-use adoption.

## 8. Backlog Watch
The following open PRs have been lingering and require immediate maintainer attention to keep development velocity high:
*   **`fix: rename @Andy trigger references in runtime group registration` ([#1917](https://github.com/qwibitai/nanoclaw/pull/1917), [#1913](https://github.com/qwibitai/nanoclaw/pull/1913)):** Open since late April. These PRs address critical identity/trigger mapping when `ASSISTANT_NAME` is customized. Maintainer review is needed to consolidate these overlapping fixes.
*   **`fix: guard numeric config env vars against NaN` ([#1916](https://github.com/qwibitai/nanoclaw/pull/1916)):** Open since late April. A simple, high-value guard against non-positive integer env vars that currently lacks review.
*   **`fix: handle empty container stdout with clear error in fallback parser` ([#1912](https://github.com/qwibitai/nanoclaw/pull/1912)):** Open since April 22nd. Silently failing on empty container stdout is a frustrating debug experience; this PR needs prioritization.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest: 2026-05-09

## 1. Today's Overview
NullClaw demonstrates healthy, steady development momentum as an open-source AI agent/personal assistant project. Activity over the last 24 hours shows a strong focus on infrastructure reliability and expanding interoperability, with four pull requests successfully merged by the core team. While new feature releases are currently paused, underlying maintenance—such as nightly build automation and protocol adapters—indicates active preparation for future stable releases. The community also successfully resolved a onboarding friction point regarding local setup, reflecting a responsive contributor base. Overall, project health appears stable and cycle-time for issue resolution is excellent.

## 2. Releases
No new official releases were published today. However, the core team is actively laying the groundwork for automated deployment pipelines (see PR [#899](https://github.com/nullclaw/nullclaw/pull/899)), suggesting that automated nightly builds may be available to testers in the near future.

## 3. Project Progress
Significant infrastructure and feature progress was merged today, highlighting efforts to improve protocol compatibility and developer experience:
*   **ACP Interoperability:** PR [#896](https://github.com/nullclaw/nullclaw/pull/896) (closed/merged) introduced a native Agent Client Protocol (ACP) stdio JSON-RPC adapter directly into the main binary. This is a major step forward for integrating NullClaw with other AI agents and standardized communication protocols.
*   **CI/CD Improvements:** PR [#898](https://github.com/nullclaw/nullclaw/pull/898) (closed/merged) resolved an issue where scheduled nightly builds were being dropped by the system's deduplication logic by enabling `force=true` for scheduled triggers. Additionally, PR [#899](https://github.com/nullclaw/nullclaw/pull/899) (closed/merged) established the publishing mechanism for these nightly builds.
*   **Documentation:** PR [#897](https://github.com/nullclaw/nullclaw/pull/897) (closed/merged) added quick setup documentation for the Zig environment on Debian, successfully closing a recent user inquiry.

## 4. Community Hot Topics
*   **Data Governance & Hackathon Activity:** The most notable active community item is PR [#885](https://github.com/nullclaw/nullclaw/pull/885) (open), submitted by team «Безопасность бэкофиса (DS)» for the WB × OpenSource Hackathon. This draft PR introduces a "NullClaw Data Governance Layer." This signals strong community interest in enterprise readiness, data permissioning, and security for personal AI assistants.
*   **Onboarding Enquiries:** Issue [#820](https://github.com/nullclaw/nullclaw/issues/820) (closed) garnered 5 comments before being resolved. Users were actively discussing the complexities of installing Zig on Debian and whether Docker should be a mandatory prerequisite for local development.

## 5. Bugs & Stability
No explicit runtime bugs, crashes, or regressions were reported in the last 24 hours. 
*   *Infrastructure Fix:* A functional CI/CD bug was addressed in PR [#898](https://github.com/nullclaw/nullclaw/pull/898), which fixed silent failures in the scheduled nightly workflows. This improves the stability of the project's testing pipeline.

## 6. Feature Requests & Roadmap Signals
*   **Standardized Agent Communication:** The merging of the native ACP adapter ([#896](https://github.com/nullclaw/nullclaw/pull/896)) signals that the next version of NullClaw will likely feature out-of-the-box, standardized communication capabilities with other AI agents and tools.
*   **Data Governance:** The open Hackathon PR ([#885](https://github.com/nullclaw/nullclaw/pull/885)) suggests that future iterations may see robust data governance features being merged, addressing how personal AI assistants securely manage and restrict access to user data.
*   **Simplified Local Setup:** With Zig setup documentation now merged ([#897](https://github.com/nullclaw/nullclaw/pull/897)), the project is lowering the barrier to entry for new contributors.

## 7. User Feedback Summary
User feedback today centers around **developer onboarding friction**. In Issue [#820](https://github.com/nullclaw/nullclaw/issues/820), users expressed mild dissatisfaction with the lack of clear instructions for setting up the Zig toolchain on Debian, specifically questioning the necessity of Docker. The swift resolution of this issue via documentation updates shows a positive feedback loop: users report friction, and the community acts quickly to smooth the onboarding curve.

## 8. Backlog Watch
*   **PR [#885](https://github.com/nullclaw/nullclaw/pull/885) (Open):** The NullClaw Data Governance Layer draft PR requires attention from core maintainers. As a Hackathon submission, it will need a thorough architectural review before merging, given the complexity of implementing secure data permissioning in an AI assistant.
*   No long-unanswered issues were updated today, but maintainers should monitor whether the new ACP stdio adapter ([#896](https://github.com/nullclaw/nullclaw/pull/896)) generates incoming user questions regarding JSON-RPC implementations once the next nightly or stable release drops.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-09

## 1. Today's Overview
IronClaw experienced high development velocity today, driven predominantly by core contributors advancing the foundational **Reborn** architecture—an overhaul of the agent loop, turn execution, and secrets substrate. With 45 pull requests updated (20 merged/closed) and 11 active issues, the repository is in a state of deep, heads-down feature construction. Activity is heavily consolidated around a single core contributor (serrrfirat) for the Reborn stack, while other contributors are landing quality-of-life fixes for multi-tenancy, UI, and channel integrations. No stable public releases shipped today, though an automated release train PR was opened. 

## 2. Releases
No new official releases were published today. However, a release preparation PR is underway:
- **[PR #3388](https://github.com/nearai/ironclaw/pull/3388)**: Prepared by `ironclaw-ci[bot]`, it targets version bumps for `ironclaw` (0.24.0 → 0.28.0) and `ironclaw_common` (0.4.1 → 0.4.2). The large minor version jump in the main crate indicates significant recent accumulated changes.

## 3. Project Progress
The primary focus was landing the building blocks for the "Reborn" agent execution stack, alongside critical security and UX fixes for the existing live system.

**Reborn Architecture (Core Substrate):**
The team is systematically landing the foundational crates and contracts for how agent loops execute turns, persist state, and handle credentials.
- **[PR #3391](https://github.com/nearai/ironclaw/pull/3391)** (Closed): Added the `ironclaw_loop_support` MVP with thread-backed adapters for context, transcript, and model ports.
- **[PR #3401](https://github.com/nearai/ironclaw/pull/3401)** (Closed): Implemented durable credential account/session persistence (`LibSql` and `Postgres`).
- **[PR #3408](https://github.com/nearai/ironclaw/pull/3408)** (Closed): Added encryption for durable credential payloads, ensuring secrets are encrypted at rest.
- **[PR #3405](https://github.com/nearai/ironclaw/pull/3405)** (Closed): Added the loop driver registry and readiness validation.
- **[PR #3403](https://github.com/nearai/ironclaw/pull/3403)** (Closed): Introduced the production loop model gateway for durable LLM provider routing.
- **[PR #3397](https://github.com/nearai/ironclaw/pull/3397)** (Open): Emitting Reborn loop support model and transcript milestones.
- **[PR #3398](https://github.com/nearai/ironclaw/pull/3398)** (Open): Composing the text-only loop host ports.
- **[PR #3400](https://github.com/nearai/ironclaw/pull/3400)** (Open): Adding the concrete Reborn text-only model reply driver.

**Multi-Tenancy & Security Fixes:**
- **[PR #3374](https://github.com/nearai/ironclaw/pull/3374)** (Closed): Fixed a critical multi-tenant workspace memory isolation leak, ensuring private workspace layers are correctly scoped to authenticated users.
- **[PR #3390](https://github.com/nearai/ironclaw/pull/3390)** (Open): Plugged a multi-tenant cross-channel leak in `GatewayChannel` where SSE/WS status events were fanning out to all connected users.

**Agent UX & Channel Integrations:**
- **[PR #3366](https://github.com/nearai/ironclaw/pull/3366)** (Open): Implemented auto-resume for paused missions after gate resolution (e.g., completing an OAuth flow).
- **[PR #3381](https://github.com/nearai/ironclaw/pull/3381)** (Open): Fixed three P1 bugs in the Telegram pairing and OAuth failure recovery flow.
- **[PR #3396](https://github.com/nearai/ironclaw/pull/3396)** (Open): Added a `pairing_approve` tool allowing users to bind Slack accounts directly via the IronClaw chat UI.
- **[PR #3331](https://github.com/nearai/ironclaw/pull/3331)** (Open): Polished non-image attachment UI and persistence in the web gateway.
- **[PR #3065](https://github.com/nearai/ironclaw/pull/3065)** (Open): Persisting inline image artifacts for tool results, enabling image editing reuse.

## 4. Community Hot Topics
The most actively discussed issues reveal the community and maintainers coordinating heavily around the new Reborn test coverage and architecture.

- **Reborn Integration Testing (32 Comments):** **[Issue #3067](https://github.com/nearai/ironclaw/issues/3067)** tracks the creation of vertical-slice integration tests for the Reborn stack. The high comment volume indicates complex coordination on how to test the new substrate without relying on local mocks.
- **Reborn Cutover Architecture (11 Comments):** **[Issue #3016](https://github.com/nearai/ironclaw/issues/3016)** acts as a central hub for the AgentLoopHost facade cutover blocker, highlighting the careful deprecation path required to move from legacy agent loops to Reborn.
- **Conversation Binding Contracts (5 Comments):** **[Issue #3193](https://github.com/nearai/ironclaw/issues/3193)** focuses on defining semantic contracts for session thread bindings, showing a rigorous approach to API stability.

## 5. Bugs & Stability
Several stability issues and bugs were identified today, with fixes already in flight.

- **P1: Cross-Tenant SSE/WS Leak:** A severe multi-tenant data leak was identified where producers lacking `user_id` metadata were broadcasting tool calls/output to all users. Fixed in **[PR #3390](https://github.com/nearai/ironclaw/pull/3390)**.
- **P1: Nightly E2E Failure:** **[Issue #3323](https://github.com/nearai/ironclaw/issues/3323)** reported a failed scheduled nightly test run on commit `3fab297`. No immediate fix PR was tagged, but this is actively monitored.
- **P1: Telegram Auth Flow:** Broken Telegram pairing and OAuth recovery logic (causing stuck conversations) was addressed in **[PR #3381](https://github.com/nearai/ironclaw/pull/3381)**.
- **UI Bug: Conversation Titles:** **[Issue #3385](https://github.com/nearai/ironclaw/issues/3385)** reported that chat sidebar titles default to the raw first user message rather than an auto-summarized title.
- **Deny-Message Execution Loop:** **[PR #3399](https://github.com/nearai/ironclaw/pull/3399)** addresses a subtle behavior where denied-tool messages could accidentally trigger execution intent, locking the agent in a loop.

## 6. Feature Requests & Roadmap Signals
Today's issues provide clear signals on the project's near-term roadmap:

1. **Advanced Image Tooling:** **[PR #3004](https://github.com/nearai/ironclaw/pull/3004)** introduces dedicated configuration for image generation/analysis, explicitly separating image API credentials from chat LLM routing.
2. **Resilient MCP Integration:** **[PR #3006](https://github.com/nearai/ironclaw/pull/3006)** adds retry logic for MCP servers that temporarily reject auth headers during container startup, improving reliability.
3. **Loop Checkpointing & Driver Expansion:** The creation of **[Issue #3406](https://github.com/nearai/ironclaw/issues/3406)** (Loop checkpoint state staging) and **[Issue #3407](https://github.com/nearai/ironclaw/issues/3407)** (Text-only AgentLoopDriverHost factory) indicates the next immediate development cycle will focus on state persistence and supporting multi-modal loop drivers.

## 7. User Feedback Summary
- **UI/UX Polish Needed:** A recurring theme is friction in the web UI. Users expect automated title generation (**[Issue #3385](https://github.com/nearai/ironclaw/issues/3385)**) rather than cluttering the sidebar with raw message snippets. The active PRs working on attachment UIs and image artifacts (**[PR #3331](https://github.com/nearai/ironclaw/pull/3331)**, **[PR #3065](https://github.com/nearai/ironclaw/pull/3065)**) show the team is actively closing this visual and functional gap.
- **Cross-Platform Onboarding:** Users are struggling with cross-channel onboarding flows (e.g., Telegram to Gmail OAuth, Slack pairing). The fixes in **[PR #3381](https://github.com/nearai/ironclaw/pull/3381)** and new features in **[PR #3396](https://github.com/nearai/ironclaw/pull/3396)** directly address this friction, moving toward a more unified authentication experience.

## 8. Backlog Watch
- **[Issue #3323](https://github.com/nearai/ironclaw/issues/3323)** (Nightly E2E failed): Automated CI issues need prompt maintainer triage to ensure the main branch remains stable.
- **[PR #3004](https://github.com/nearai/ironclaw/pull/3004)** and **[PR #3006](https://github.com/nearai/ironclaw/pull/3006)**: Both are experienced-contributor PRs spanning multiple scopes (config, MCP, tools) that have been open since late April. They require core maintainer review to unblock image and MCP stability improvements.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-05-09)

## 1. Today's Overview
LobsterAI is currently experiencing a **very high level of development activity**, characterized by a massive volume of code merges in preparation for a release. Over the last 24 hours, the project saw 29 updated Pull Requests, with 27 successfully merged or closed, contrasted by 2 newly opened, unresolved issues. The engineering focus is clearly centered on a major `release/2026.05.08` branch, involving rigorous cherry-picking of mature feature branches. Overall, the project is in an excellent state of health, demonstrating active maintenance, responsive bug fixing, and significant UI/UX overhauls.

## 2. Releases
No official GitHub Releases were published today. However, the maintainers are aggressively finalizing the `release/2026.05.08` branch, indicating that an official stable release is imminent.

## 3. Project Progress
The development team closed an impressive 27 PRs in the last 24 hours. Key advancements include:
*   **Code Rendering Engine Migration:** Successfully merged the rewrite of code blocks from `react-syntax-highlighter` to **CodeMirror 6** ([PR #1306](https://github.com/netease-youdao/LobsterAI/pull/1306) & [PR #1922](https://github.com/netease-youdao/LobsterAI/pull/1922)), bringing syntax highlighting for 50+ languages, in-code search, line numbers, and fullscreen view.
*   **Task Scheduling Enhancements:** Introduced custom Cron scheduling with a visual builder mode ([PR #1519](https://github.com/netease-youdao/LobsterAI/pull/1519) & [PR #1917](https://github.com/netease-youdao/LobsterAI/pull/1917)).
*   **Message Bookmarks:** Added a comprehensive bookmarking feature to Cowork sessions ([PR #1664](https://github.com/netease-youdao/LobsterAI/pull/1664)).
*   **UI/UX Polish:** Addressed multiple visual feedback gaps, including adding required field indicators across 21 form locations ([PR #1511](https://github.com/netease-youdao/LobsterAI/pull/1511)), sidebar UI optimization ([PR #1928](https://github.com/netease-youdao/LobsterAI/pull/1928)), and fixing artifacts preview duplication ([PR #1925](https://github.com/netease-youdao/LobsterAI/pull/1925)).
*   **Message Metadata:** Implemented timestamps and response duration indicators for chat messages ([PR #1147](https://github.com/netease-youdao/LobsterAI/pull/1147)).

## 4. Community Hot Topics
While today's newly opened issues lack massive comment threads, the topics raised directly correlate with long-running open PRs, showing active community/stakeholder involvement in UI consistency:
*   **UI Loading & Empty States:** [Issue #1920](https://github.com/netease-youdao/LobsterAI/issues/1920) (Cowork initialization blank loading state) and [Issue #1921](https://github.com/netease-youdao/LobsterAI/issues/1921) (Missing icons in Skills Manager empty states) both highlight a strong underlying need for a polished, cohesive visual experience. Both issues already have corresponding open PRs ([PR #1769](https://github.com/netease-youdao/LobsterAI/pull/1769) and [PR #1770](https://github.com/netease-youdao/LobsterAI/pull/1770)) actively addressing these gaps.

## 5. Bugs & Stability
Several notable bugs were identified and immediately resolved in this cycle:
*   **Critical Workflow Bug (Fixed):** A crawler task continued executing even after the user clicked "Stop" because auto-approve logic bypassed the stop-cooldown check. Root cause addressed via check reordering in [PR #1756](https://github.com/netease-youdao/LobsterAI/pull/1756) and [PR #1923](https://github.com/netease-youdao/LobsterAI/pull/1923).
*   **UI Regression (Fixed):** `NO_REPLY` text and prefixes leaked into user chat interfaces, fixed by [PR #1918](https://github.com/netease-youdao/LobsterAI/pull/1918).
*   **Data Display (Fixed):** Zero-value cache reads displaying unnecessarily in Cowork, fixed by [PR #1927](https://github.com/netease-youdao/LobsterAI/pull/1927).
*   **Error Handling (Fixed):** IMAP/SMTP email connectivity failures previously displayed only a raw `}` character, which was fixed in [PR #1161](https://github.com/netease-youdao/LobsterAI/pull/1161).

## 6. Feature Requests & Roadmap Signals
Based on the volume of merged PRs today, the upcoming release is heavily focused on:
1.  **Advanced Task Automation:** The rollout of Cron expressions ([PR #1917](https://github.com/netease-youdao/LobsterAI/pull/1917)) signals a push toward allowing users to run autonomous background agents.
2.  **Information Retrieval:** The introduction of the Bookmarks feature ([PR #1664](https://github.com/netease-youdao/LobsterAI/pull/1664)) shows a focus on knowledge management, allowing users to save and retrieve important AI responses easily.
3.  **Developer Experience:** The CodeMirror 6 integration ([PR #1922](https://github.com/netease-youdao/LobsterAI/pull/1922)) heavily implies that the target audience uses the AI assistant for complex coding tasks requiring advanced code previewing.

## 7. User Feedback Summary
User feedback (via issues authored by `xiaoye5200`) reveals that users are paying close attention to micro-interactions and design consistency. Specifically, users find static text (e.g., "Loading...") and empty states lacking icons to feel "unfinished" and "jarring" compared to the rest of the application. The prompt resolution of these issues into skeleton screens and rich empty states indicates that the development team highly values a premium user experience and rapid iteration based on internal/external QA feedback.

## 8. Backlog Watch
Currently, the project is very well-maintained with no significantly stale items in today's data. However, maintainers should ensure that the open PRs ([PR #1769](https://github.com/netease-youdao/LobsterAI/pull/1769) and [PR #1770](https://github.com/netease-youdao/LobsterAI/pull/1770)) receive the necessary reviews so they can be merged in time for the imminent `2026.05.08` release, ensuring the UI consistency goals set by today's issues are met.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-09

## 1. Today's Overview
Moltis demonstrates a healthy and highly active development cycle, currently characterized by a strong focus on user experience (UX) overhaul and ecosystem expansion. Over the last 24 hours, the team merged 2 pull requests, opened 3 new feature PRs, and deployed a new release (`20260508.01`). While community bug reporting via issues is currently at zero, the continuous integration of significant features—such as a revamped chat UI and documentation migration—indicates a project in a phase of rapid, structured maturation rather than maintenance.

## 2. Releases
*   **[20260508.01](https://github.com/moltis-org/moltis/releases/tag/20260508.01)**: Released on May 8, 2026. 
    *   *Note: The release notes provided in the data payload are minimal (identical to the tag name). Based on recently merged PRs, this version likely includes the newly surfaced OpenAI realtime model guidance and the updated Traditional Chinese (zh-TW) localizations.*

## 3. Project Progress
Two pull requests were successfully merged/closed, bringing tangible improvements to localization and voice capabilities:
*   **Updated Traditional Chinese Locale ([PR #986](https://github.com/moltis-org/moltis/pull/986))**: Contributed by `PeterDaveHello`, this PR significantly improved the clarity and standardization of the zh-TW translations (specifically standardizing "AI 助理" and "Moltis" terminology).
*   **OpenAI Realtime Voice Guidance ([PR #984](https://github.com/moltis-org/moltis/pull/984))**: Authored by `penso`, this enhancement surfaces specific STT model settings (`gpt-4o-transcribe` and `gpt-4o-mini-transcribe`) and prevents users from accidentally using Realtime voice model IDs for standard clip transcription. Playwright coverage was also added.

## 4. Community Hot Topics
There are no newly updated Issues in the last 24 hours to gauge broader community chatter. However, new foundational PRs opened by the core team signal where the project's immediate attention is focused:
*   **Persistent External Agent Sessions ([PR #566](https://github.com/moltis-org/moltis/pull/566))**: Opened by `penso`. This is a major architectural feature allowing Moltis chat sessions to maintain persistent bindings with external agents (ACP, Codex CLI, Claude Code) across multiple conversational turns.
*   **Web Chat Composer Refresh ([PR #985](https://github.com/moltis-org/moltis/pull/985))**: A much-needed UI/UX overhaul redesigning the chat input into a modern, centered rounded composer with dynamic footer controls (model selection, reasoning, attachments, voice).
*   **Astro Documentation Site ([PR #987](https://github.com/moltis-org/moltis/pull/987))**: A technical debt/infrastructure PR aiming to replace the aging mdBook deployment with a modern Astro-generated site, featuring custom sidebars, dark mode, and native search.

## 5. Bugs & Stability
*   **Severity: None detected.** 
    Zero bug reports or crash-related issues were opened or updated in the last 24 hours. The inclusion of Playwright testing in the recently merged voice PR ([PR #984](https://github.com/moltis-org/moltis/pull/984)) suggests the team is actively investing in automated stability to prevent UI regressions.

## 6. Feature Requests & Roadmap Signals
Based on today's PR activity, the short-term roadmap is heavily focused on **multi-agent interoperability** and **developer/user experience**.
*   *Multi-Agent Ecosystems:* The work on persistent external agent sessions ([PR #566](https://github.com/moltis-org/moltis/pull/566)) indicates Moltis is positioning itself as an orchestration layer capable of managing stateful conversations with third-party AI agents.
*   *Voice/Modal Diversity:* Enhancing Voice UI capabilities ([PR #984](https://github.com/moltis-org/moltis/pull/984)) alongside UI composer upgrades ([PR #985](https://github.com/moltis-org/moltis/pull/985)) shows a drive toward a unified, multimodal chat experience. 
*   *Predictions for Next Release:* The next version will likely formally introduce the persistent external agent sessions and the completely redesigned web chat interface.

## 7. User Feedback Summary
Direct user feedback via issues is absent today. However, contributor `PeterDaveHello`’s focus on refining the Traditional Chinese translations ([PR #986](https://github.com/moltis-org/moltis/pull/986)) implies that the international user base is actively engaged in making the assistant more accessible for non-English speakers. The core maintainers' decision to build explicit attachment pickers and token-context wrappers in the UI ([PR #985](https://github.com/moltis-org/moltis/pull/985)) suggests underlying user pain points regarding context window visibility and file management in the current web UI.

## 8. Backlog Watch
*   **Long-running PR requiring attention**: [PR #566 (Persistent Agent Sessions)](https://github.com/moltis-org/moltis/pull/566) was created on April 6, 2026, making it over a month old. It received an update on May 8th, meaning it is actively being worked on, but its complexity (gateway APIs, chat lifecycle handling) makes it a critical item in the backlog that should be monitored for merge-readiness.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-05-09

## 1. Today's Overview
CoPaw is experiencing very high activity, with 36 issues and 36 pull requests updated in the last 24 hours. The merge rate is strong (21 out of 36 PRs closed/merged), indicating active and responsive maintainer engagement. A new beta version (`v1.1.6-beta.1`) was cut, signaling that the team is stabilizing features for the next minor release. The bulk of today's activity focuses on performance optimizations for the WebUI, multi-channel stability (WeChat, DingTalk, Discord), and expanding provider/model compatibility.

## 2. Releases
*   **v1.1.6-beta.1**
    *   **What's Changed:** Version bump to `1.1.6b1`, addition of app startup and settings/envs smoke tests for better integration coverage, and a preliminary fix for an SSE (Server-Sent Events) console crash.
    *   **Migration Notes:** As a beta release, users should test in staging environments. The inclusion of new smoke tests suggests backend configuration/environment handling might have been refined.

## 3. Project Progress
Significant engineering milestones were achieved today, focusing heavily on system stability, desktop packaging, and frontend performance:
*   **Frontend Performance Shipped:** A major WebUI optimization ([PR #4110](https://github.com/agentscope-ai/QwenPaw/pull/4110)) was merged, resolving severe UI lag during LLM token generation by stabilizing `ConsolePollService` state references.
*   **Desktop & Log Stability:** Fixed a critical Windows conda-pack packaging conflict ([PR #4093](https://github.com/agentscope-ai/QwenPaw/pull/4093)) and enforced cross-platform log rotation ([PR #4076](https://github.com/agentscope-ai/QwenPaw/pull/4076)) to prevent unbounded 5+ MiB log files.
*   **Agent Reload Reliability:** Merged a graceful task draining mechanism for `AgentConfigWatcher` ([PR #4064](https://github.com/agentscope-ai/QwenPaw/pull/4064)), fixing an issue where DingTalk streams lost HTTP clients mid-flight during config reloads.
*   **Provider & Tooling Expansions:** Added the Aliyun token plan as a built-in provider ([PR #4122](https://github.com/agentscope-ai/QwenPaw/pull/4122)) and merged fixes for dict tool arguments in channel renderers ([PR #308](https://github.com/agentscope-ai/QwenPaw/pull/308)).

## 4. Community Hot Topics
*   **WebUI Performance Degradation:** Users reported extreme system lag (mouse frame drops) during LLM response generation ([Issue #4108](https://github.com/agentscope-ai/QwenPaw/issues/4108)). This aligns perfectly with today's merged frontend performance fix, though users on older versions are still feeling the pain.
*   **Session/Context Persistence:** Users are highly frustrated by sessions dropping and memory being reset, especially when switching Agents or upgrading ([Issue #3919](https://github.com/agentscope-ai/QwenPaw/issues/3919), [Issue #4101](https://github.com/agentscope-ai/QwenPaw/issues/4101)).
*   **Cron Job Channel Routing:** Multiple upvoted issues highlight that scheduled tasks (cron) often dispatch to the wrong channel (e.g., defaulting to `console` instead of `wechat`) ([Issue #3783](https://github.com/agentscope-ai/QwenPaw/issues/3783), [Issue #2964](https://github.com/agentscope-ai/QwenPaw/issues/2964)). Community members are actively submitting PRs to address cron session isolation ([PR #3255](https://github.com/agentscope-ai/QwenPaw/pull/3255)).
*   **OpenClaw-Inspired Features:** A meta-issue tracking OpenClaw-style features for "compounding agent value" ([Issue #578](https://github.com/agentscope-ai/QwenPaw/issues/578)) saw renewed community discussion today.

## 5. Bugs & Stability
*   **[High] MCP Streamable HTTP Disconnects:** The `HttpStatefulClient` fails to recover automatically after a 300s timeout, leaving tools unusable ([Issue #4100](https://github.com/agentscope-ai/QwenPaw/issues/4100)). *No linked fix PR yet.*
*   **[High] GPU Fallback to CPU on Local Models:** Users running CoPaw Local with Llama.cpp report that GPUs (e.g., RTX 3060) are ignored, defaulting to CPU processing ([Issue #2725](https://github.com/agentscope-ai/QwenPaw/issues/2725)).
*   **[Medium] `venv` Reset on Update:** Skill dependencies are wiped during software updates, severely impacting workflow continuity ([Issue #2382](https://github.com/agentscope-ai/QwenPaw/issues/2382)). 
*   **[Medium] Hardcoded Agent Names:** Session metadata hardcodes the agent name as "Friday" instead of reading from `agent.json`, breaking downstream Auto-Memory features ([Issue #4099](https://github.com/agentscope-ai/QwenPaw/issues/4099)).
*   **[Medium] Windows `execute_shell_command` Popup:** Every tool call flashes an annoying console window on Windows ([Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123)). *Fix currently in review via system tray PR [PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041).*

## 6. Feature Requests & Roadmap Signals
*   **Group Chat / Multi-Agent Orchestration:** Strong demand for project-based "groups" where multiple agents share a context window and can be @-mentioned ([Issue #4131](https://github.com/agentscope-ai/QwenPaw/issues/4131)).
*   **Rewind / Rollback Functionality:** Users want a `/rewind` command similar to Claude Code to recover from corrupted files, hallucinations, or bad prompts without losing the entire session ([Issue #4129](https://github.com/agentscope-ai/QwenPaw/issues/4129)).
*   **Vision Context Management:** Requests for a native OCR tool to process screen captures instead of burning tokens by continuously compressing and passing screenshots in the LLM context ([Issue #4102](https://github.com/agentscope-ai/QwenPaw/issues/4102)).
*   *Roadmap Prediction:* The merging of PlanNotebook ([PR #3238](https://github.com/agentscope-ai/QwenPaw/pull/3238)) and continued work on multi-agent grouping signals that CoPaw is aggressively pursuing **complex, multi-step autonomous task execution**.

## 7. User Feedback Summary
Users appreciate CoPaw's deep integration with daily tools (WeChat, DingTalk, Feishu) and its flexible provider support. However, satisfaction is currently strained by performance bottlenecks and upgrade friction. A clear pain point is **context and state management**—users hate losing their chat history, agent configurations, or installed skill dependencies after an update or an unexpected crash. Furthermore, users running CoPaw on standard Windows machines feel left behind by UI performance issues, though today's merged fixes should alleviate this.

## 8. Backlog Watch
*   **[PR #4041](https://github.com/agentscope-ai/QwenPaw/pull/4041) - System Tray Startup (Windows):** A first-time contributor submitted a vital quality-of-life feature for long-running desktop agents. It has been open for 3 days and is "Under Review." Needs final maintainer approval to be merged.
*   **[PR #2315](https://github.com/agentscope-ai/QwenPaw/pull/2315) - Disable Hot Reload for Unsafe Stdio Clients:** Open since late March, this first-time contributor PR addresses a significant stability issue with MCP bridges like `chrome-mcp-stdio` during hot reloads.
*   **[Issue #2725](https://github.com/agentscope-ai/QwenPaw/issues/2725) - Local GPU Ignored:** A critical issue for local-model users that remains unresolved despite being active for over a month.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-05-09

## 1. Today's Overview
The ZeptoClaw project is currently experiencing a period of low-level maintenance, with no new releases, issue updates, or merged code in the past 24 hours. The repository's pulse is faint but steady, maintained entirely by a single open pull request focused on AI agent tooling refinement. With zero active issues reported today, the project demonstrates stability but also a low traffic volume, suggesting it is either highly stable, in a feature freeze, or experiencing a lull in community engagement. Overall, the project remains healthy with no pressing emergencies, though an influx of community interaction would be beneficial.

## 2. Releases
*No new releases were published today. There are no immediate migration notes or breaking changes to report.*

## 3. Project Progress
No pull requests were merged or closed today. However, architectural progress is pending in the pipeline. 
*   **Open PR:** [PR #571 feat(tools): trigger-phrase nudges in longterm_memory description](https://github.com/qhkm/zeptoclaw/pull/571)
    *   **Author:** qhkm
    *   **Status:** Open (Updated on May 8, 2026)
    *   **Advancement:** This PR aims to enhance the `longterm_memory` tool by rewriting its description to include explicit "Use when" / "Do NOT use when" trigger phrases. This is a crucial optimization for LLM-based agents, as it helps the underlying model accurately route tasks to the correct tool. It also introduces a doc-test to prevent future regressions in these trigger blocks.

## 4. Community Hot Topics
There are no high-activity discussions, issues, or comment threads occurring in the repository today. 
*   The only focal point is the aforementioned [PR #571](https://github.com/qhkm/zeptoclaw/pull/571). While it does not have a high volume of comments or reactions (👍 0), its underlying focus on mirroring the "Hermes Agent" pattern reveals a strong architectural interest in standardizing how ZeptoClaw's AI handles memory retrieval.

## 5. Bugs & Stability
*No bugs, crashes, or regressions were reported in the issues or PRs today. The project currently maintains a clean stability slate.*

## 6. Feature Requests & Roadmap Signals
While no formal feature requests were submitted today, pending PRs provide a strong signal for the immediate roadmap.
*   **Refined Agent Memory Routing:** The changes proposed in [PR #571](https://github.com/qhkm/zeptoclaw/pull/571) indicate that the next evolutionary step for ZeptoClaw is reducing AI hallucinations regarding memory context. By implementing concrete trigger phrases, the project is actively working on making the personal AI assistant more reliable and context-aware. This alignment with Hermes Agent's methodology suggests a broader industry trend being adopted here. 

## 7. User Feedback Summary
*Due to a complete absence of new comments, reactions, or issue submissions from users in the last 24 hours, there is no direct user feedback to analyze today.*

## 8. Backlog Watch
*   **[PR #571](https://github.com/qhkm/zeptoclaw/pull/571):** This PR has been open since 2026-05-03 and was last updated on 2026-05-08. As it is a foundational improvement to the AI's tool-handling capabilities and includes its own regression tests, it requires a maintainer's final review and merge to clear the current bottleneck.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-09

## 1. Today's Overview
ZeroClaw is experiencing a period of high activity and rapid iteration, fueled by the recent rollout of the **v0.7.5** release and preparation for the **v0.8.0** milestone. The project's daily GitHub footprint is exceptionally active, with 48 updated Pull Requests (36 open) and 21 updated Issues (15 open). The open-source community and core contributors are heavily focused on hardening the newly introduced in-browser onboarding flow, stabilizing the "microkernel" architectural refactor, and fixing regressions across various channel integrations (most notably Matrix and Slack). Overall project health appears robust, though the high volume of open PRs and newly reported S1/S2 bugs suggests the maintainers are currently navigating a critical post-release stabilization phase.

## 2. Releases
**v0.7.5** was released recently (with ongoing CI/CD fixes landing today).
* **Headline Changes:** Introduces a schema-driven `/onboard` flow, allowing for complete in-browser configuration without CLI intervention. It also adds a per-property gateway CRUD surface backed by an OpenAPI 3.1 spec, a typed CLI, and a three-surface personality editor (CLI / TUI / Web).
* **Migration Notes:** Based on today's PR activity, operators should be aware that legacy path configurations and environment variable overrides might require adjustments ahead of the upcoming `v0.8.0` schema-mirror env-var grammar changes.

## 3. Project Progress
Today saw **12 PRs merged or closed**, indicating steady progress on bug fixing and architectural refactoring:
* **Architectural Refactoring:** A major effort to separate `llama.cpp` into a dedicated provider kind ([PR #6417](https://github.com/zeroclaw-labs/zeroclaw/pull/6417)) was closed, setting the stage for better local LLM support. Additionally, the codebase is being prepped for v0.8.0 with a breaking overhaul of the env-var config grammar ([PR #6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523)).
* **Channel Fixes:** The highly annoying Matrix duplicate inbound message bug was officially resolved via [PR #6306](https://github.com/zeroclaw-labs/zeroclaw/pull/6306), and Mistral-compatible tool call serialization was fixed in [PR #5121](https://github.com/zeroclaw-labs/zeroclaw/pull/5121).
* **Runtime & Core:** Critical fixes were merged to ensure `SopEngine` actually loads SOPs at runtime ([PR #6534](https://github.com/zeroclaw-labs/zeroclaw/pull/6534)), and config directory path resolution was fixed ([PR #6533](https://github.com/zeroclaw-labs/zeroclaw/pull/6533)). 
* **CI/CD:** Maintainers successfully unblocked the v0.7.5 release pipeline by fixing a module generation step ([PR #6502](https://github.com/zeroclaw-labs/zeroclaw/pull/6502)) and updated CODEOWNERS to reflect the new `/crates/**` microkernel layout ([PR #6537](https://github.com/zeroclaw-labs/zeroclaw/pull/6537)).

## 4. Community Hot Topics
The most actively discussed items revolve around provider reliability and the new desktop experience:
* **Unifying Providers Architecture ([Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) - 8 comments):** The community and maintainers are actively discussing the need to refactor the `reqwest` builder and consolidate model construction parameters. This highlights underlying technical debt from the rapid addition of new AI providers.
* **Matrix Channel Instability ([Issue #6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) - 7 comments):** Voice transcription failures in the Matrix channel are causing significant friction for users self-hosting chat interfaces via Element Web/Android.
* **Desktop Parity and Features:** Several highly discussed feature requests revolve around making ZeroClaw a native desktop app. Bundling the chat-ui as static assets inside the Tauri binary ([Issue #6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465)) and implementing macOS UI control capability handlers ([Issue #6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499)) are generating buzz and represent a strategic shift toward local-first desktop AI assistance.

## 5. Bugs & Stability
Several high-severity bugs have been reported or updated today, particularly concerning provider handling and the new gateway/web UI:
1. **S1 - Security/Config Risk:** Fallback providers fail to inherit credentials from `config.toml`, leading to potential workflow blocks and security risks during provider failover ([Issue #6418](https://github.com/zeroclaw-labs/zeroclaw/issues/6418)).
2. **S1 - Web UI Approval Bypass:** The WebSocket gateway path bypasses the `ApprovalManager`, meaning supervised tool approvals never surface in the daemon web UI ([Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207)). *Fix already in progress: [PR #6522](https://github.com/zeroclaw-labs/zeroclaw/pull/6522) implements the web chat approval UI, and [PR #6527](https://github.com/zeroclaw-labs/zeroclaw/pull/6527) fixes SSE event drops.*
3. **S2 - Build Failure:** A recursion limit overflow when building with the `channel-matrix` feature ([Issue #6530](https://github.com/zeroclaw-labs/zeroclaw/issues/6530)) is currently blocking users compiling on certain environments (e.g., Podman/Debian).
4. **S2 - Sandbox Lockout:** A bug in ACP "cwd" changes locks the agent out of reading its own skill files ([Issue #6516](https://github.com/zeroclaw-labs/zeroclaw/issues/6516)). *Fix exists: [PR #6532](https://github.com/zeroclaw-labs/zeroclaw/pull/6532) resolves the workspace path issues.*
5. **S2 - Local LLM limitations:** Custom remote providers sending local image file paths instead of data URLs breaks multimodal requests for local setups like Raspberry Pi + vLLM ([Issue #6399](https://github.com/zeroclaw-labs/zeroclaw/issues/6399)).

## 6. Feature Requests & Roadmap Signals
Today's issues and PRs strongly signal the trajectory for **v0.8.0**:
* **Operator Config Overhaul:** The breaking change PR for a V0.8.0 schema-mirror env-var grammar ([PR #6523](https://github.com/zeroclaw-labs/zeroclaw/pull/6523)) indicates a strong focus on standardizing Docker and system-level deployments.
* **Desktop First-Class Experience:** Continued momentum on Tauri-based features ([Issue #6499](https://github.com/zeroclaw-labs/zeroclaw/issues/6499), [Issue #6465](https://github.com/zeroclaw-labs/zeroclaw/issues/6465), [Issue #6320](https://github.com/zeroclaw-labs/zeroclaw/issues/6320)) suggests the upcoming versions will aim to compete directly with closed-source desktop AI apps by offering native OS controls (screenshots, clicks, AppleScript).
* **Advanced Provider Customization:** Requests for Ollama context/predict tuning ([PR #6178](https://github.com/zeroclaw-labs/zeroclaw/pull/6178)) and per-provider cost tracking ([PR #6357](https://github.com/zeroclaw-labs/zeroclaw/pull/6357)) show that power users are running complex multi-model setups and need finer financial and performance control over their agents.

## 7. User Feedback Summary
User pain points today center heavily around **local/self-hosted LLM setups** and **channel integrations**. 
* **Self-hosters** running on ARM architectures (Raspberry Pi) or using local servers (llama.cpp, vLLM, Ollama) are running into edge cases with multimodal support and provider default configurations (e.g., issue #6399, #6377). 
* **Channel users** are experiencing degraded behaviors, particularly in Matrix (voice transcription issues and message duplication) and Slack (duplicate LLM invocations per user request noted in [Issue #6474](https://github.com/zeroclaw-labs/zeroclaw/issues/6474)).
* Conversely, there is visible excitement and positive momentum around the new Tauri desktop initiative, with contributors actively submitting architectural PRs to make the web UI fully bundled and autonomous from remote gateways.

## 8. Backlog Watch
* **[Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937):** The high-risk refactoring of the providers architecture has 8 comments but remains `status:blocked`. This debt is likely the root cause of multiple provider-specific bugs seen today and needs maintainer prioritization.
* **[PR #5838](https://github.com/zeroclaw-labs/zeroclaw/pull/5838):** The webhook retry logic with exponential backoff has been open since April 17th and requires author action. Merging this would significantly improve outbound integration reliability.
* **[Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207):** The gateway approval bypass is marked `priority:p1` and `status:in-progress`. Maintainers should push to merge the pending frontend/backend PRs (#6522, #6527) to close this security-adjacent workflow block.

</details>