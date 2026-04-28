# OpenClaw Ecosystem Digest 2026-04-29

> Issues: 500 | PRs: 500 | Projects covered: 14 | Generated: 2026-04-28 22:16 UTC

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

# OpenClaw Project Digest — 2026-04-29

## 1. Today's Overview
OpenClaw is experiencing extremely high community engagement and development velocity, evidenced by 500 issues and 500 pull requests updated in the last 24 hours. However, this activity is heavily weighted toward open items (468 open issues, 461 open PRs), indicating a significant backlog that outpaces the core team's capacity to review, triage, and merge. The project recently shipped version `2026.4.26`, which introduced major realtime voice capabilities via Google Live, but the release has already triggered critical regressions across channel runtimes. Overall, OpenClaw is in a phase of rapid feature expansion and intense community contribution, but is struggling to maintain stability and bug-fix turnaround across its wide array of supported messaging channels.

## 2. Releases
**[v2026.4.26](https://github.com/openclaw/openclaw/releases/tag/v2026.4.26)**
*   **Changes:** Introduced a generic browser realtime transport contract, Google Live browser Talk sessions with constrained ephemeral tokens, and a Gateway relay for backend-only realtime voice plugins. 
*   **CLI/models:** Routed provider-filtered model listing.
*   *Migration / Stability Note:* No explicit breaking changes were listed in the truncated release notes, but the new realtime transport architecture has caused immediate CPU-spinning regressions in existing channel runtimes (see Bugs & Stability).

## 3. Project Progress
Despite the high volume of open PRs, a few critical patches were closed/merged today, primarily focusing on infrastructure stability and multi-agent correctness:
*   **ACPs and Subagent Cleanup:** PR [#67946](https://github.com/openclaw/openclaw/pull/67946) (Clear stale subagent lineage on top-level sessions) and PR [#63793](https://github.com/openclaw/openclaw/pull/63793) (Fail fast on dead spawns and recover stale disconnects) were progressed, addressing core multi-agent orchestration leaks.
*   **Channel Fixes:** PR [#60677](https://github.com/openclaw/openclaw/pull/60677) resolved iMessage tapback reactions being delivered as regular text, and PR [#64110](https://github.com/openclaw/openclaw/pull/64110) ensured deleting scheduled tasks clears them from the active queue.
*   **Platform Expansion:** Major progress was made on the GTK-native Linux App via PR [#59859](https://github.com/openclaw/openclaw/pull/59859), addressing a long-standing community request (Issue [#75](https://github.com/openclaw/openclaw/issues/75)).

## 4. Community Hot Topics
*   **Cross-Platform Desktop Apps:** The most active historical issue is [#75](https://github.com/openclaw/openclaw/issues/75) (98 comments, 73 👍), requesting Linux/Windows apps. The recent GTK Linux PR has reinvigorated this discussion.
*   **Multi-Agent Orchestration Instability:** Issue [#43367](https://github.com/openclaw/openclaw/issues/43367) highlights that concurrent agent config overwrites and session-lock failures make parallel coding batches unreliable. This reflects a growing user base attempting complex, automated agentic workflows.
*   **Agent Hallucinations on Tool Failure:** Users are highly frustrated by agents hallucinating success. Issue [#41304](https://github.com/openclaw/openclaw/issues/41304) (Agent refuses to invoke write tools, hallucinates success) and [#49876](https://github.com/openclaw/openclaw/issues/49876) (Cron sessions deliver hallucinated output) show a critical need for reliable tool-execution verification before LLM summarization.

## 5. Bugs & Stability
The latest release has introduced severe stability issues, with core systems and channel adapters failing:
*   **Critical (Gateway CPU Spin):** Issue [#73647](https://github.com/openclaw/openclaw/issues/73647) reports that the `2026.4.26` release causes a permanent CPU spin in Telegram-only gateways due to the new staged runtime dependencies. *Status: No linked fix PR yet.*
*   **Critical (Processing Stalls):** Issue [#73581](https://github.com/openclaw/openclaw/issues/73581) notes that the agent processing lane can stall for minutes without timeout recovery on the latest version. *Status: No linked fix PR yet.*
*   **High (Session Context Leakage):** Issue [#29387](https://github.com/openclaw/openclaw/issues/29387) reveals that per-agent directory bootstrap files are silently ignored. Issue [#32296](https://github.com/openclaw/openclaw/issues/32296) reports agents replying to previous messages.
*   **High (Media/Blind Spots):** Issue [#51857](https://github.com/openclaw/openclaw/issues/51857) tracks a cluster of vision failures where agents silently process incorrect media.
*   **Moderate (Channel specific):** Feishu video downloads fail with 502s ([#49855](https://github.com/openclaw/openclaw/issues/49855)), and WhatsApp Web suffers from chronic stale-socket loops ([#48390](https://github.com/openclaw/openclaw/issues/48390)).

## 6. Feature Requests & Roadmap Signals
*   **Private Network Access:** Issue [#39604](https://github.com/openclaw/openclaw/issues/39604) requests an opt-in toggle for `web_fetch` to reach localhost/internal networks. Given the high demand, this is likely to be prioritized.
*   **Direct Exec Mode for Cron:** Issue [#18160](https://github.com/openclaw/openclaw/issues/18160) (9 👍) requests bypassing LLM interpretation for simple cron jobs to save API costs and prevent hallucinations.
*   **Denylist for Exec Security:** Issue [#71097](https://github.com/openclaw/openclaw/issues/71097) proposes a balanced security mode for command execution, suggesting users are deploying OpenClaw in more constrained enterprise environments.

## 7. User Feedback Summary
Users are actively pushing OpenClaw into production environments but hitting operational friction. Pain points center around **stability during multi-agent runs** and **unreliable state management** (e.g., hardcoded paths merging into production [#51429](https://github.com/openclaw/openclaw/issues/51429), and session write lock deadlocks [#49157](https://github.com/openclaw/openclaw/issues/49157)). 
On the positive side, the project's extensive channel support (Feishu, WhatsApp, Telegram, iMessage, Discord) is highly valued, but users express dissatisfaction with the varying maturity levels across these channels—particularly Feishu's encoding bugs and Discord's context injection issues. The community is highly technical, often submitting PRs with deep architectural fixes (e.g., overhauling session lineage), showing a strong OSS contributor base.

## 8. Backlog Watch
The maintainers need to address several highly-upvoted or critical items that have been languishing or exacerbated by the latest release:
*   **v2026.4.26 Regressions:** The CPU spinning bug ([#73647](https://github.com/openclaw/openclaw/issues/73647)) is a critical release-blocker for users running single-channel gateways.
*   **Secrets Provider Consolidation:** Issue [#17311](https://github.com/openclaw/openclaw/issues/17311) (integrating env, keyring, and 1Password) and Issue [#13597](https://github.com/openclaw/openclaw/issues/13597) (AWS deployment guide) are essential for enterprise adoption and need maintainer review.
*   **Multi-agent Infrastructure:** The silent ignore of `agentDir` bootstrap files ([#29387](https://github.com/openclaw/openclaw/issues/29387)) fundamentally breaks custom agent personalities and requires an immediate triage.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report analyzing the open-source AI agent and personal assistant ecosystem based on the April 29, 2026 community digests.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by rapid feature expansion, intense community engagement, and significant architectural maturation. Projects are heavily pivoting toward complex multi-agent orchestration, multi-channel messaging integrations (Telegram, Discord, WeChat), and multimodal capabilities, frequently outpacing core maintainer capacity. As these frameworks transition from experimental tools to production-grade systems, developers are hitting substantial operational friction related to state management, memory optimization, and security hardening.

## 2. Activity Comparison
*Health Scores are estimated based on issue/PR backlog management, release stability, and community momentum.*

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (468 open) | 500 (461 open) | `v2026.4.26` (Regressions) | 🟡 Moderate |
| **Hermes Agent** | 50 (47 open) | 50 (38 open) | No release (v0.11.0 base) | 🟡 Moderate |
| **LobsterAI** | ~15 (est. active) | 47 (23 merged) | No release | 🟢 Good |
| **NanoBot** | 13 (10 closed) | 35 (16 merged) | No release (v0.1.5.post2) | 🟢 Good |
| **NanoClaw** | 8 | 23 (11 merged) | No release | 🟢 Good |
| **IronClaw** | 30 | 45 (13 merged) | No release (v0.26.0) | 🟡 Moderate |
| **CoPaw** | 43 (25 open) | 31 (20 merged) | `v1.1.5-beta.1` | 🟡 Moderate |
| **Moltis** | ~5 (est. active) | 11 merged | `20260428.03` | 🟢 Excellent |
| **ZeroClaw** | 16 | 48 | No release (v0.7.4 target)| 🟢 Good |
| **NullClaw** | 1 | 3 | No release | 🟢 Stable |
| **ZeptoClaw** | 0 | 15 (Dependabot) | No release | 🟢 Stable/Automated|
| **TinyClaw / EasyClaw** | 0 | 0 | No release | ⚪ Inactive/Dormant |

## 3. OpenClaw's Position
**Advantages vs Peers:** OpenClaw remains the undisputed core reference implementation with the largest community footprint and the broadest out-of-the-box channel support (iMessage, WhatsApp, Feishu, Telegram). Its recent integration of Google Live realtime voice capabilities puts it ahead of competitors in voice-first interactions.
**Technical Approach Differences:** Unlike ZeroClaw (which is refactoring into a microkernel) or IronClaw (which is building low-level host substrates), OpenClaw operates as a monolithic, high-velocity gateway. However, this approach is currently its biggest liability; the `v2026.4.26` release introduced severe CPU-spinning regressions, whereas projects like NanoClaw and NullClaw are heavily prioritizing crash-loop protection and circuit breakers.
**Community Size Comparison:** OpenClaw's community is massive (500 updates/day) but severely bottlenecked, resulting in a massive backlog of unreviewed PRs and unresolved P1 security issues. In contrast, Moltis and NanoBot demonstrate much higher maintainer responsiveness, merging nearly 100% of community PRs daily.

## 4. Shared Technical Focus Areas
*   **Multi-Agent State & Context Bleed (OpenClaw, CoPaw, NanoClaw, Hermes):** A universal growing pain. Projects are struggling with session deadlocks, cross-thread context contamination, and hallucinated tool executions when agents run in parallel. 
*   **Robust Cron/Scheduled Autonomy (OpenClaw, NullClaw, Hermes):** Users want agents that act as reliable background workers. There is a shared demand for database-backed cron schedulers that bypass expensive LLM calls for simple tasks, alongside robust execution history.
*   **Local & Edge LLM Compatibility (LobsterAI, NanoBot, ZeroClaw):** As seen with LobsterAI's quick patch for DeepSeek V4 and NanoBot's `extra_body` PR for vLLM, projects are heavily investing in standardized routing to accommodate local inference servers, custom coding plans, and hardware edge devices.
*   **Security & Tool Execution Sandboxing (Hermes, NullClaw, LobsterAI):** With increased autonomy comes severe security risks. Cross-project efforts are focusing on SSRF validation, preventing arbitrary command injection, and escaping `restrict_to_workspace` boundaries.

## 5. Differentiation Analysis
*   **Target User Base:** OpenClaw, CoPaw, and LobsterAI are targeting enterprise/power users seeking rich Web UIs and massive platform integrations. NullClaw and ZeptoClaw target infrastructure engineers, relying on systems languages (Zig/Rust) for lightweight, daemonized agents. Hermes and ZeroClaw focus heavily on developer/SECDEVOPS automation via CLI and terminal interfaces.
*   **Architecture:** ZeroClaw is explicitly transitioning to a microkernel architecture, while IronClaw is building a modular "Reborn" substrate system. This contrasts sharply with NanoBot and NanoClaw, which are iterating rapidly on a monolithic Python plugin architecture to deliver features faster.
*   **Feature Focus:** Moltis is heavily differentiating via a polished UX (command palettes, file upload UI), whereas Hermes and IronClaw are prioritizing complex backend orchestration, such as bridging Claude Code/Cursor workers and managing cryptographic hardware wallets.

## 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators (Moltis, NanoBot, LobsterAI, NanoClaw):** These projects exhibit a highly healthy cycle of user-reported bugs immediately met with merged PRs. They are in an aggressive stabilization phase.
*   **Tier 2: Architectural Evolvers (IronClaw, ZeroClaw):** Experiencing high development velocity, but current friction lies in integration (failing live canaries, missing documentation). They are in transitional phases that temporarily hurt usability.
*   **Tier 3: Strained Scaling (OpenClaw, Hermes):** While extremely popular, both projects are drowning in community contributions and security audits. They are accumulating technical debt faster than core maintainers can triage it.
*   **Tier 4: Stabilized/Niche (NullClaw, ZeptoClaw):** Low noise, high reliability. Activity is driven by dependency bumps and critical patches rather than feature churn.

## 7. Trend Signals
1.  **The Move from Chatbots to Autonomous Workers:** Across the ecosystem, users are rejecting the simple "chat" paradigm. The demand for "direct exec mode," background memory consolidation (ZeroClaw's "Dream Mode"), and resource-constrained containers indicates that developers are treating these agents as long-running microservices, not interactive chat clients.
2.  **Configuration as Code & Declarative Infrastructure:** Users (especially on IronClaw and ZeroClaw) are expressing deep frustration with GUI-first or `.env`-heavy configurations. The industry trend is moving toward declarative, auditable, and code-first configurations for deploying agent fleets.
3.  **Observability & Tracing are Non-Negotiable:** As multi-agent loops become complex, developers cannot debug infinite loops or hallucinations blindly. PRs introducing span tracing (NanoBot) and OTel GenAI spans (ZeroClaw) signal that enterprise-grade observability is becoming a standard requirement for agent frameworks.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-04-29

## 1. Today's Overview
NanoBot is demonstrating **very high development velocity** today, driven by strong community engagement. Activity over the last 24 hours includes 13 updated issues (10 closed) and a substantial 35 pull requests (16 closed/merged). The project is currently in an active "feature-freeze and stabilization" phase. Contributors are heavily focused on expanding channel integrations, improving provider flexibility, and resolving platform-specific edge cases. No new official releases were cut today, but the sheer volume of merged PRs suggests a potential patch or minor release is imminent. Overall project health appears excellent, with fast turnaround on user-reported bugs and a vibrant open-source ecosystem.

## 2. Releases
**No new official releases** were published today. The community is actively consolidating bug fixes and new features into the main branch following the recent `v0.1.5.post2` release.

## 3. Project Progress
A highly productive day with 16 merged/closed PRs. Key advancements include:

*   **New Search & Provider Integrations:** Merged a new web search backend via the Olostep provider ([PR #3505](https://github.com/HKUDS/nanobot/pull/3505)). Added support for passing custom parameters to OpenAI-compatible endpoints (`extra_body`), greatly improving compatibility with local inference servers like vLLM and Ollama ([PR #3491](https://github.com/HKUDS/nanobot/pull/3491)).
*   **Channel & Bug Fixes:** Fixed a critical UI/UX bug in the Feishu channel where status emojis were prematurely removed during tool-call rounds ([PR #3502](https://github.com/HKUDS/nanobot/pull/3502)). 
*   **Web Scraping Improvements:** Merged a highly anticipated enhancement allowing users to bypass Cloudflare captchas and JS challenges by customizing User-Agent and disabling Jina Reader ([PR #3382](https://github.com/HKUDS/nanobot/pull/3382)).
*   **CLI Enhancements:** Allowed custom config paths for channel login/status commands, improving multi-instance deployments ([PR #2740](https://github.com/HKUDS/nanobot/pull/2740)).

## 4. Community Hot Topics
*   **Memory System & Context Budgets:** Users are actively discussing the limitations of the current memory architecture. [Issue #3494](https://github.com/HKUDS/nanobot/issues/3494) highlights a critical UX issue where context limits are blown because `history.jsonl` is loaded indiscriminately, leading to 287% context overflows. This builds on broader requests for memory system optimization ([Issue #490](https://github.com/HKUDS/nanobot/issues/490)).
*   **Model Provider Support:** There is continued demand for broader LLM support. A user requested integration with Kimi (by Moonshot AI) and offered to contribute the code ([Issue #217](https://github.com/HKUDS/nanobot/issues/217)).
*   **Multi-modal Roadmap:** The community is keeping the multi-modal vision alive. [Issue #223](https://github.com/HKUDS/nanobot/issues/223) (Multi-modal Support: Images, Voice, Video) received fresh engagement, aligning with today's open PR for local Whisper voice transcription support ([PR #3513](https://github.com/HKUDS/nanobot/pull/3513)).

## 5. Bugs & Stability
Several bugs were reported today, spanning critical memory leaks to Windows-specific deployment issues. 

*   **Medium Severity:**
    *   **Windows Platform Errors:** NanoBot struggles with Windows file paths. The Matrix channel fails to send messages due to invalid colon usage in store paths ([Issue #3506](https://github.com/HKUDS/nanobot/issues/3506)), and MCP integrations fail with `WinError 193` ([Issue #3324](https://github.com/HKUDS/nanobot/issues/3324)). *Fix PR: [PR #3510](https://github.com/HKUDS/nanobot/pull/3510)*.
    *   **WebSocket Remote Access:** Binding WebUI to `0.0.0.0` breaks WebSocket connections for remote hosts ([Issue #3473](https://github.com/HKUDS/nanobot/issues/3473)).
    *   **Telegram Attachments:** Documents are sent as generic `application.octet-stream`, breaking in-app viewers ([Issue #3488](https://github.com/HKUDS/nanobot/issues/3488)).
*   **Low Severity:**
    *   **Deserialization Errors:** DeepSeek API calls fail with deserialization errors following the `0.1.5.post1` update ([Issue #3328](https://github.com/HKUDS/nanobot/issues/3328)).

## 6. Feature Requests & Roadmap Signals
The open PR queue provides clear signals about the project's near-term roadmap:
*   **Audio/Voice Processing:** [PR #3513](https://github.com/HKUDS/nanobot/pull/3513) introduces local Whisper support and unifies transcription providers.
*   **Expanded Chat Channels:** [PR #3509](https://github.com/HKUDS/nanobot/pull/3509) adds Napcat (QQ) integration, fulfilling a major request from the Chinese user base.
*   **Observability & Profiling:** [PR #3501](https://github.com/HKUDS/nanobot/pull/3501) introduces span tracing and a module-level profiler, indicating NanoBot is targeting enterprise-grade reliability.
*   **Per-Provider Configurations:** [PR #3507](https://github.com/HKUDS/nanobot/pull/3507) introduces per-provider temperature and context window settings, solving a major pain point for users swapping between different LLMs.
*   **Group Chat UX:** [Issue #3511](https://github.com/HKUDS/nanobot/issues/3511) requests `sender_id` context in group chats. Combined with open PRs fixing WhatsApp @mentions ([PR #3514](https://github.com/HKUDS/nanobot/pull/3514)), multi-user group interactions are clearly a priority.

## 7. User Feedback Summary
Users are heavily utilizing NanoBot across diverse platforms (Telegram, Discord, WeChat/WeCom, Matrix) but encounter friction with platform-specific edge cases. A prominent user pain point is **context management**—users are frustrated by history mixing across sessions and ballooning memory sizes (e.g., the jump to 600MB RAM in the latest versions, [Issue #3410](https://github.com/HKUDS/nanobot/issues/3410)). Developers deploying on Windows or self-hosting local LLMs are expressing a strong need for better defaults and configuration flexibility. Despite these infrastructure gripes, enthusiasm is high, with users actively contributing PRs to fix bugs and add the integrations they need.

## 8. Backlog Watch
Maintainers should review the following stalled or long-term items:
*   **Security Hardening:** [Issue #3504](https://github.com/HKUDS/nanobot/issues/3504) highlights that the `restrict_to_workspace` feature relies on static path analysis and is vulnerable to symlink escapes and dynamic obfuscation. This is a critical security audit item.
*   **Memory Optimization:** [Issue #490](https://github.com/HKUDS/nanobot/issues/490) and [PR #3481](https://github.com/HKUDS/nanobot/pull/3481) (Session-scoped history) need core maintainer attention, as the current memory leak/overflow issues directly degrade the user experience.
*   **External Integrations:** Maintainers should triage [Issue #3512](https://github.com/HKUDS/nanobot/issues/3512) (SwarmScore request) and the substantial [PR #3144](https://github.com/HKUDS/nanobot/pull/3144) (AgentHiFive integration) to determine if they align with the core project architecture.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-04-29

## 1. Today's Overview
The Hermes Agent project is experiencing exceptionally high activity, with 100 total events (50 issues and 50 pull requests) updated in the last 24 hours. The volume of new open issues (47) significantly outpaces closures (3), alongside a robust 38 open PRs, indicating heavy community engagement but potential maintainer bottleneck. The vast majority of today's activity consists of newly opened issues and PRs (many created on 2026-04-28), highlighting a fresh wave of community auditing, bug reporting, and feature development. Despite the heavy development volume, there have been no new releases, meaning users must rely on manual builds or the `main` branch to get the latest fixes.

## 2. Releases
There have been **0 new releases** for Hermes Agent today. The latest identifiable release baseline in current issue reports is `v0.11.0` / `2026.4.23`. Users facing critical bugs on the stable release must cherry-pick open PRs or run nightly builds.

## 3. Project Progress
Out of 50 updated PRs, **12 were merged or closed**, while 38 remain open. 

*   **Security & Auth Progress:** A critical PR, [PR #16957](https://github.com/NousResearch/hermes-agent/pull/16957), was merged/closed today. It removes Claude Code fingerprinting from the Anthropic OAuth Messages API path, fixing a P1 security/compliance issue. 
*   **TUI Overhaul:** Developer `OutThisLife` pushed a massive series of PRs to fix and enhance the Terminal User Interface (TUI). Notably, fixes for macOS terminal copy behavior ([PR #17131](https://github.com/NousResearch/hermes-agent/pull/17131)), Rich/ANSI rendering conflicts ([PR #17111](https://github.com/NousResearch/hermes-agent/pull/17111)), and browser CDP URL propagation ([PR #17120](https://github.com/NousResearch/hermes-agent/pull/17120)).
*   **Tooling & CLI Enhancements:** The community is actively improving developer ergonomics. Merged/advanced PRs include a TTS API key `.env` fix ([PR #17163](https://github.com/NousResearch/hermes-agent/pull/17163)), a new `hermes skills diff` command ([PR #17156](https://github.com/NousResearch/hermes-agent/pull/17156)), and a lean-context bootstrap implementation ([PR #16928](https://github.com/NousResearch/hermes-agent/pull/16928)).

## 4. Community Hot Topics
The most actively discussed items today center around stability, security audits, and integration snags:

*   **Gateway Startup Crash:** [Issue #8091](https://github.com/NousResearch/hermes-agent/issues/8091) (👍 5, 4 comments) reports a `NameError: name 'RedactingFormatter' is not defined` crash at `gateway/run.py` line 8477. This is a highly impactful bug blocking users from starting the gateway.
*   **Playwright Browser Friction:** [Issue #11073](https://github.com/NousResearch/hermes-agent/issues/11073) (3 comments) highlights user demand for exposing Playwright's `ignoreDefaultArgs` to suppress the `--enable-automation` infobar, which currently interferes with extensions like 1Password during headed-local browsing.
*   **Architecture Quality Audit:** [Issue #17154](https://github.com/NousResearch/hermes-agent/issues/17154) (1 comment) details an external scan using `hermescheck`, pointing out systemic issues with restart continuity, gateway sprawl, and tool-policy coverage. This highlights a community desire for better long-term architecture validation.

## 5. Bugs & Stability
The tracker saw multiple high-severity (P1/P2) bug reports today, with several posing stability and security risks.

**P1 - Critical/System Crashes:**
*   **Gateway Crash ([Issue #8091](https://github.com/NousResearch/hermes-agent/issues/8091)):** Immediate crash on startup due to missing `RedactingFormatter` import. *No fix PR linked yet.*
*   **Silent Process Kill ([Issue #8049](https://github.com/NousResearch/hermes-agent/issues/8049)):** `run_conversation` silently kills the Python process without firing `atexit` handlers when `max_iterations` is reached.
*   **Nix CI Blocker ([Issue #15272](https://github.com/NousResearch/hermes-agent/issues/15272)):** `npmDepsHash` out of date, failing all PRs. *No fix PR linked yet.*
*   **Cron Delivery Failure ([Issue #17139](https://github.com/NousResearch/hermes-agent/issues/17139)):** Cron jobs targeting Telegram fail to resolve delivery targets. *No fix PR linked yet.*

**P2 - Security & Data Integrity:**
*   **Database State Corruption ([Issue #8029](https://github.com/NousResearch/hermes-agent/issues/8029)):** Non-atomic transcript rewrites (`/retry`, `/undo`) cause data loss if the process crashes mid-operation.
*   **Credential Pool TOCTOU ([Issue #8040](https://github.com/NousResearch/hermes-agent/issues/8040)):** Process-local threading locks fail to protect the credential JSON from cross-process race conditions.
*   **MCP Connection staleness ([Issue #17003](https://github.com/NousResearch/hermes-agent/issues/17003)):** Long-lived HTTP MCP sessions fail silently after ~12h idle periods.

**P1/P2 - Fix PRs Available:**
*   **TTS API Keys ([Issue #17140](https://github.com/NousResearch/hermes-agent/issues/17140)):** TTS tools failing to read from `.env`. *Fix available in [PR #17163](https://github.com/NousResearch/hermes-agent/pull/17163).*
*   **Discord Slash Commands ([Issue #17157](https://github.com/NousResearch/hermes-agent/issues/17157)):** Sync timeouts. *Fix available in [PR #17159](https://github.com/NousResearch/hermes-agent/pull/17159).*

## 6. Feature Requests & Roadmap Signals
Several feature requests hint at the community's desire to run Hermes in complex, multi-agent, and enterprise environments:
*   **Cross-Platform Agent Bridging:** [PR #16226](https://github.com/NousResearch/hermes-agent/pull/16226) introduces a native bridge transport for Claude Code and Cursor workers, signaling a strong push toward orchestrating Hermes as a top-level agent manager.
*   **Session-Scoped Repo Pinning:** [Issue #10309](https://github.com/NousResearch/hermes-agent/issues/10309) requests preserving repository identity across overnight compression/resume cycles. This reflects a growing use-case of Hermes as a long-lived autonomous coding assistant.
*   **Custom Command Prefixes:** [Issue #12688](https://github.com/NousResearch/hermes-agent/issues/12688) asks for configurable command prefixes to avoid conflicts with native Matrix/Mattermost slash commands.
*   **Custom Bedrock Endpoints:** [PR #17162](https://github.com/NousResearch/hermes-agent/pull/17162) adds support for Bearer token auth for custom AWS Bedrock endpoints, showing increased enterprise adoption behind corporate gateways.

## 7. User Feedback Summary
**Pain Points:** Docker users are frustrated by permission issues where memory writes create root-owned files unreadable by the gateway user ([Issue #17144](https://github.com/NousResearch/hermes-agent/issues/17144)). Users deploying via messaging platforms (Telegram, Discord, Slack) are encountering platform-specific integration failures (e.g., Slack manifest breaking, Telegram session summaries failing in [Issue #8045](https://github.com/NousResearch/hermes-agent/issues/8045)). Additionally, configuration quirks—like silently ignoring the `context_window` key ([Issue #8015](https://github.com/NousResearch/hermes-agent/issues/8015))—are causing unexpected model behavior.

**Satisfaction/Dissatisfaction:** The project is clearly valued, evidenced by deep-dive community audits like the `hermescheck` scan. However, the flood of P1 security and data-loss bugs indicates that the rapid pace of feature development (TUI enhancements, new transports) may be outstripping QA and testing, leading to frustration for users running production deployments.

## 8. Backlog Watch
*   **Massive Security Audit Backlog (user `tomqiaozc`):** A single user opened a highly detailed series of P1/P2 security issues on April 12th that remain unresolved and need immediate maintainer triage. Critical items include:
    *   Terminal tool `force=True` exposed to LLM ([Issue #8032](https://github.com/NousResearch/hermes-agent/issues/8032))
    *   SSRF validation skipped on local browser ([Issue #8034](https://github.com/NousResearch/hermes-agent/issues/8034))
    *   File tool read path not blocking `auth.json` ([Issue #8035](https://github.com/NousResearch/hermes-agent/issues/8035))
    *   Thread-unsafe global caches in `model_metadata.py` ([Issue #8039](https://github.com/NousResearch/hermes-agent/issues/8039))
*   **Stale Gateway Fixes:** [PR #8012](https://github.com/NousResearch/hermes-agent/pull/8012) fixes a P1 datetime comparison bug in gateway session suspension, has been open since April 12, and needs review to unblock gateway stability.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-04-29

## 1. Today's Overview
NanoClaw is experiencing a very high-velocity development and community contribution cycle, primarily driven by external contributors. With 23 pull requests updated in the last 24 hours and a near-even split between open (12) and merged (11) PRs, the project is rapidly iterating on its multi-channel messaging integrations and agent infrastructure. The 8 active issues highlight a strong focus on container reliability, multi-platform chat routing contexts (Discord, Telegram), and multi-agent orchestration. Overall, project health appears robust, showing an active, engaged open-source community building around the v2 architecture.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
A significant amount of code was merged today, focusing heavily on stabilizing chat channels, fixing database edge cases, and refining container startup logic:
*   **Telegram & Chat SDK Fixes:** Merged [PR #2008](https://github.com/qwibitai/nanoclaw/pull/2008) to route image/video/audio files through typed media APIs for inline previews, and [PR #2007](https://github.com/qwibitai/nanoclaw/pull/2007) to fix composite ID lookups for reactions.
*   **Database & Duplicates:** Resolved duplicate message insert crashes via [PR #2077](https://github.com/qwibitai/nanoclaw/pull/2077) by introducing `INSERT OR IGNORE`.
*   **Slack Setup:** Fixed end-to-end Slack setup wiring with a welcome DM in [PR #2075](https://github.com/qwibai/nanoclaw/pull/2075).
*   **Container Crash Protection:** Merged [PR #2080](https://github.com/qwibitai/nanoclaw/pull/2080) (and duplicate [PR #2079](https://github.com/qwibitai/nanoclaw/pull/2079)) to add a top-level startup circuit breaker, preventing Cloudflare IP bans during crash loops.
*   **MCP & Providers:** The long-running effort to integrate OpenCode SDK saw multiple documentation and pinning updates merged ([PR #1864](https://github.com/qwibitai/nanoclaw/pull/1864), [PR #1776](https://github.com/qwibitai/nanoclaw/pull/1776), [PR #1628](https://github.com/qwibitai/nanoclaw/pull/1628)). 
*   **Rejected PRs:** [PR #2083](https://github.com/qwibitai/nanoclaw/pull/2083) (a massive addition of Discord, Telegram, WhatsApp, and Codex) and [PR #2081](https://github.com/qwibitai/nanoclaw/pull/2081) were closed, likely due to scope/quality guidelines.

## 4. Community Hot Topics
*   **Container Resource Limits:** [Issue #2029](https://github.com/qwibitai/nanoclaw/issues/2029) (3 comments) is generating discussion around the need for `--memory`, `--cpus`, and `--pids-limit` flags to prevent runaway agent loops from triggering host OOM (Out of Memory) kills. This highlights a maturing user base deploying NanoClaw in production environments.
*   **Discord Context Bleed:** [Issue #1959](https://github.com/qwibitai/nanoclaw/issues/1959) (1 comment, 1 thumbs up) outlines a frustrating bug where agents fail to reply in context, instead spamming a single container-init thread.
*   **MCP Self-Modification Fix:** [PR #2074](https://github.com/qwibitai/nanoclaw/pull/2074) addresses an issue where MCP server arguments were malformed during self-modification.

## 5. Bugs & Stability
Several high-severity bugs regarding data context and session management were identified today:
1.  **Read-Only DB Crash (High):** [Issue #2073](https://github.com/qwibitai/nanoclaw/issues/2073) reports instant container crashes when the host runs as root. *No fix PR is currently linked.*
2.  **Session-Bound Scheduled Tasks (Medium/High):** [Issue #2067](https://github.com/qwibitai/nanoclaw/issues/2067) identifies that tasks are blind to other threads, severely limiting multi-thread scheduling. *No fix PR is currently linked.*
3.  **Agent-to-Agent Routing Loops (Medium):** [Issue #2063](https://github.com/qwibitai/nanoclaw/issues/2063) (via open [PR #2063](https://github.com/qwibitai/nanoclaw/pull/2063)) highlights self-loops and politeness loops in agent-to-agent messaging. A cap PR is currently open.
4.  **Message ID Suffix Bug (Medium):** The namespace suffix appending strategy is breaking adapter operations, currently addressed in open [PR #2078](https://github.com/qwibitai/nanoclaw/pull/2078).

## 6. Feature Requests & Roadmap Signals
The community is actively pushing NanoClaw toward deeper multi-agent and multi-platform capabilities:
*   **Unwired Agent Provisioning:** [Issue #2085](https://github.com/qwibitai/nanoclaw/issues/2085) requests a `/create-agent` skill to provision agent groups before wiring them to chats (e.g., per-user personal agents).
*   **Disaster Recovery:** [PR #2084](https://github.com/qwibitai/nanoclaw/pull/2084) introduces daily project backups and per-agent restore capabilities, a critical feature for production readiness.
*   **Multimodal & Local AI:** [PR #2072](https://github.com/qwibitai/nanoclaw/pull/2072) adds image support for Ollama models, and [PR #2070](https://github.com/qwibitai/nanoclaw/pull/2070) improves inbox handling for native host-path attachments (Signal CLI).

## 7. User Feedback Summary
Users are deploying NanoClaw in complex, multi-user environments, leading to sophisticated growing pains. Administrators are encountering friction with database permissions ([Issue #2073](https://github.com/qwibitai/nanoclaw/issues/2073)) and crash-loop IP bans ([PR #2080](https://github.com/qwibitai/nanoclaw/pull/2080)), indicating enthusiastic but sometimes painful production deployment. End-users are frustrated by context loss in Discord ([Issue #1959](https://github.com/qwibitai/nanoclaw/issues/1959)) and want more granular control over agent creation ([Issue #2085](https://github.com/qwibitai/nanoclaw/issues/2085)). Overall sentiment is positive, with contributors actively writing PRs to solve their own operational pain points.

## 8. Backlog Watch
*   **OpenCode Provider PRs:** The suite of PRs ([#1628](https://github.com/qwibitai/nanoclaw/pull/1628), [#1776](https://github.com/qwibitai/nanoclaw/pull/1776), [#1864](https://github.com/qwibitai/nanoclaw/pull/1864)) adding OpenCode as a first-class agent provider has been open since early-mid April. Despite continuous updates to pin versions and fix documentation, it awaits final core maintainer merging.
*   **Matrix E2EE:** [PR #1624](https://github.com/qwibitai/nanoclaw/pull/1624), implementing Matrix as an E2EE channel, has been open since April 4th and needs maintainer review.
*   **Container Resource Constraints:** [Issue #2029](https://github.com/qwibitai/nanoclaw/issues/2029) is highly upvoted and critical for production safety, but currently lacks a linked PR to implement Docker resource caps.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-04-29

## 1. Today's Overview
NullClaw shows moderate development activity for April 29, 2026, driven entirely by ongoing community contributions and bug tracking rather than new official releases. Activity over the last 24 hours consisted of 1 active issue and 3 pull requests. The primary focus of the day's activity centers around addressing high-severity regressions introduced by the recent Zig 0.16 migration, alongside ongoing feature development for scheduling capabilities. Overall project health remains stable, with active community members quickly identifying and submitting patches for critical production-breaking bugs, though no new releases were cut today to address these issues.

## 2. Releases
No new releases were published today. *(Note: Given the high-severity Mattermost regressions identified, a patch release is likely pending once the respective fix PR is merged).*

## 3. Project Progress
The project saw one pull request closed today, alongside progress on ongoing feature and bugfix branches:
*   **[CLOSED PR #872](https://github.com/nullclaw/nullclaw/pull/872) (fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin):** This PR was closed today. It appears to have been superseded or re-targeted by a new attempt to fix the same issue.
*   **[OPEN PR #873](https://github.com/nullclaw/nullclaw/pull/873) (fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin):** This new PR was immediately opened to replace #872, carrying forward the critical fixes for the Mattermost integration.
*   **[OPEN PR #783](https://github.com/nullclaw/nullclaw/pull/783) (feat(cron): cron subagent, run history, JSON output, security hardening):** This expansive feature PR saw continued updates today. It introduces a DB-backed scheduler, bringing robust cron-job capabilities to the AI agent. 

## 4. Community Hot Topics
*   **Mattermost/Zig 0.16 Migration Crisis:** The most critical topic is the struggle with the Zig 0.16 migration. Author `vernonstinebaker` opened and closed [PR #872](https://github.com/nullclaw/nullclaw/pull/872) and opened [PR #873](https://github.com/nullclaw/nullclaw/pull/873) in rapid succession to patch gateway CPU spins and silent messaging failures. This highlights an urgent underlying need for better test coverage or CI pipeline checks surrounding NullClaw's gateway threading and HTTP POST behaviors during language version upgrades.
*   **Security Configuration Clarifications:** [Issue #874](https://github.com/nullclaw/nullclaw/issues/874) was opened to address missing documentation for the `default_allowed_commands` security policy. This signals that as NullClaw adds security hardening (like in PR #783), users are actively trying to understand and adopt these security boundaries but are blocked by missing documentation.

## 5. Bugs & Stability
*   **Severity: HIGH — [PR #873](https://github.com/nullclaw/nullclaw/pull/873) / [PR #872](https://github.com/nullclaw/nullclaw/pull/872):** A production-breaking regression affecting all Mattermost-connected agents since the Zig 0.16 migration. 
    *   *Bug 1:* 100% CPU utilization on the gateway thread caused by a busy-spin on `EAGAIN`. Affects all platforms in daemon mode.
    *   *Bug 2:* Silent Mattermost messaging failure due to empty-body POSTs being dropped.
    *   *Status:* An active fix PR (#873) is open and awaiting merge.

## 6. Feature Requests & Roadmap Signals
*   **Advanced Job Scheduling ([PR #783](https://github.com/nullclaw/nullclaw/pull/783)):** The ongoing development of the Cron subagent engine indicates a strong roadmap signal towards enterprise-level reliability. Features include a `cron_runs` history table, per-job TZ offsets, and operator alerts. This suggests the next major or minor version will allow users to schedule complex autonomous tasks reliably.
*   **Structured CLI Output:** Part of [PR #783](https://github.com/nullclaw/nullclaw/pull/783) introduces `--json` flags for cron commands, pointing towards a roadmap focus on machine-readable outputs, likely for better integration with external orchestrators or dashboards.

## 7. User Feedback Summary
*   **Pain Points:** Administrators running NullClaw in daemon mode with Mattermost integrations are likely experiencing severe performance degradation (100% CPU) and silent message loss. Furthermore, users implementing custom security policies are frustrated by the lack of documentation for variables like `default_allowed_commands`.
*   **Use Cases:** Community members are actively trying to use NullClaw as a persistent, scheduled autonomous worker (evidenced by the cron features) and rely on it as a background daemon rather than just an interactive CLI tool.

## 8. Backlog Watch
*   **[PR #783](https://github.com/nullclaw/nullclaw/pull/783) (feat(cron)):** This PR has been open since April 7th and is still receiving updates. Given its massive scope (scheduler, run history, JSON output, security hardening), it requires careful maintainer review to ensure atomic database operations and security policies are airtight before merging.
*   **[Issue #874](https://github.com/nullclaw/nullclaw/issues/874) (Docs: missing documentation):** While not a code bug, missing documentation for security policies leaves a gap in the project's security posture. Maintainers should prioritize a quick documentation patch for `default_allowed_commands` to close this out.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-04-29

## 1. Today's Overview
The IronClaw project is experiencing **very high** architectural development activity, dominated entirely by the sprawling "Reborn" re-architecture initiative. With 30 active issues and 45 active pull requests updated in the last 24 hours, maintainers and contributors are heavily focused on breaking down the Reborn monolithic upgrade into reviewable, incremental substrates. 

While this core architectural work progresses rapidly, it is occurring against a backdrop of **activeqa and operational friction**: automated live-canary tests are failing repeatedly, users are reporting basic usability bugs, and significant feature requests are being raised by the community. Notably, the project saw no new official releases today, indicating the team is deep in a heavy integration/development phase rather than a shipping phase.

## 2. Releases
**No new releases were published today.** The project remains on version `0.26.0` as developers focus on landing the Reborn architecture and stabilizing recent engine updates.

## 3. Project Progress
Thirteen pull requests were merged or closed today, highlighting rapid iteration on both the new architecture and existing bug fixes:

*   **Reborn Substrates Advancing:** Core maintainers successfully merged several foundational slices of the Reborn architecture, including the **Auth Control Substrate** ([PR #2999](https://github.com/nearai/ironclaw/pull/2999)), **Extension Manifest Registry** ([PR #3015](https://github.com/nearai/ironclaw/pull/3015)), and **Filesystem Substrate** ([PR #2996](https://github.com/nearai/ironclaw/pull/2996)). These PRs represent the low-level building blocks being assembled to eventually replace the current host/control-plane.
*   **UI/Engine Migration Fixes:** A significant fix for users upgrading from v1 to v2 was merged ([PR #2992](https://github.com/nearai/ironclaw/pull/2992)), ensuring that "Routines" tabs are not lost when the v2 engine is enabled. 
*   **Security Fixes:** [PR #3040](https://github.com/nearai/ironclaw/pull/3040) (open, but highly relevant) introduced a patch to require admin privileges for shared skill mutations, closing an authorization gap in multi-tenant modes.

## 4. Community Hot Topics
*   **The "Reborn" Rollout Strategy:** The most active item today is the Reborn Architecture Epic ([Issue #2987](https://github.com/nearai/ironclaw/issues/2987)), boasting 23 comments. Maintainers are actively negotiating how to land this massive re-architecture without burdening reviewers with unreviewable mega-PRs, opting instead for a grouped integration plan. 
*   **Configuration as Code:** Opened by a maintainer, [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) (1 comment, 1 👍) requests a declarative way to configure IronClaw. It highlights a major current pain point: operators currently have to hand-edit a messy mix of `.env`, workspace docs, and JSON with no schema or audit trail.
*   **Hardware Wallet Support:** A user-requested feature ([Issue #3025](https://github.com/nearai/ironclaw/issues/3025)) asking for MetaMask and Trezor integration gained immediate visibility today, highlighting a gap in the current hot-wallet connector options for self-hosters.

## 5. Bugs & Stability
The project's stability indicators are currently **mixed to concerning**, with CI failures and basic usability bugs present:

*   **CI / Live Canary Failures (Critical):** Automated canary tests failed on three separate occasions today across `public-smoke` and `private-oauth` lanes ([Issue #3038](https://github.com/nearai/ironclaw/issues/3038), [Issue #3037](https://github.com/nearai/ironclaw/issues/3037), [Issue #3030](https://github.com/nearai/ironclaw/issues/3030), [Issue #3005](https://github.com/nearai/ironclaw/issues/3005)). This indicates potential instability in recent commits to `staging`.
*   **Tool Schema Normalization (High):** [Issue #2437](https://github.com/nearai/ironclaw/issues/2437) (Closed today) caused HTTP 400 errors from providers when tools used `oneOf`/`anyOf` in their parameter schemas.
*   **V2 Engine Usability Bugs (Medium):** QA uncovered that the HTTP tool is disabled by default with no UI onboarding ([Issue #3034](https://github.com/nearai/ironclaw/issues/3034)) and agents ignore configured display names ([Issue #3035](https://github.com/nearai/ironclaw/issues/3035)).
*   **Context Retention (Medium):** [Issue #3010](https://github.com/nearai/ironclaw/issues/3010) reports that generated images are not carried over as visual context in follow-up turns, breaking multi-step generative workflows.
*   **Logging Blindspot (Medium):** [Issue #3011](https://github.com/nearai/ironclaw/issues/3011) notes that `ironclaw run` produces zero stderr output regardless of `RUST_LOG` settings, making local debugging very difficult.

## 6. Feature Requests & Roadmap Signals
Based on today's data, the near-term roadmap is heavily signaled:

*   **Reborn Runtime Presets:** Before the new architecture lands, the team is actively scoping runtime presets and local developer profiles ([Issue #3045](https://github.com/nearai/ironclaw/issues/3045), [Issue #3044](https://github.com/nearai/ironclaw/issues/3044)) to ensure developers can run the agent locally without hand-wiring complex grants and mounts.
*   **Telegram Access Controls:** A community contributor submitted two PRs today ([PR #3048](https://github.com/nearai/ironclaw/pull/3048), [PR #3047](https://github.com/nearai/ironclaw/pull/3047)) adding granular group-chat access and an "observe mode" for the Telegram integration, suggesting a push toward better multi-user chat deployments.
*   **Cloud Provider Expansion:** [PR #1446](https://github.com/nearai/ironclaw/pull/1446) remains active, aiming to add dedicated support for Aliyun BaiLian Coding Plan, indicating an upcoming expansion of native LLM provider options.

## 7. User Feedback Summary
Self-hosting users are expressing friction regarding **deployment flexibility and documentation**. The inability to use popular hardware/software wallets easily ([Issue #3025](https://github.com/nearai/ironclaw/issues/3025)) and the lack of structured "Configuration-as-Code" ([Issue #3036](https://github.com/nearai/ironclaw/issues/3036)) show that operators are struggling with the rigidities of the current setup. Furthermore, upgrading between minor versions (e.g., 0.24.0 to 0.26.0) has proven to be a painful experience for some users, with state migration issues ([Issue #2982](https://github.com/nearai/ironclaw/issues/2982)) and missing UI elements causing operational disruptions.

## 8. Backlog Watch
*   **The E2E Testing Harness:** [Issue #2828](https://github.com/nearai/ironclaw/issues/2828) outlines a plan to unify fragmented testing systems (replay, E2E, live canary). Given today's multiple Live Canary failures, addressing this architecture-level testing debt should be a top priority for maintainers.
*   **Installer Compatibility:** [Issue #2949](https://github.com/nearai/ironclaw/issues/2949) (Open since 2026-04-24) reports that the official `curl` install script fails on standard `x86_64-unknown-linux-gnu` environments. This is a fundamental blocker for new user adoption and needs an urgent patch.
*   **Cross-Conversation Contamination:** [Issue #2833](https://github.com/nearai/ironclaw/issues/2833), where responses leak across different chat windows, remains open and represents a severe degradation of the user experience for multi-tasking users.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-04-29

## 1. Today's Overview
LobsterAI is experiencing a high-velocity, bug-squashing phase, heavily focused on refining its multi-agent cowork features, IM (Instant Messaging) integrations, and expanding LLM compatibility. With 47 pull requests updated in the last 24 hours (23 closed/merged) and a steady stream of active issues, the development team is highly responsive. The current iteration demonstrates a strong push toward stabilizing the UI (specifically model selection and rendering) and ensuring robust gateway execution for complex, multi-modal models. No new official releases were cut today, indicating an intensive development and QA cycle preparing for a future stable release.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
The team merged 23 PRs today, demonstrating rapid progress in platform stability, IM channel integrations, and model support. 
*   **Multi-Agent & UI Architecture:** A major refactor ([PR #1865](https://github.com/netease-youdao/LobsterAI/pull/1865)) successfully implemented per-agent model selection, fixing a critical global state issue. Additionally, UI fixes were merged to truncate long model names in the selector ([PR #1855](https://github.com/netease-youdao/LobsterAI/pull/1855)) and adjust z-index layers to prevent overlay issues during gateway restarts ([PR #1858](https://github.com/netease-youdao/LobsterAI/pull/1858)).
*   **Gateway & Session Stability:** Several fixes targeted the core gateway, including preventing hard restarts when switching home page models ([PR #1857](https://github.com/netease-youdao/LobsterAI/pull/1857)), fixing an issue with Qwen 3.6 plus triggering restarts ([PR #1870](https://github.com/netease-youdao/LobsterAI/pull/1870)), and aborting gateway runs on lifecycle errors to prevent session deadlocks ([PR #1869](https://github.com/netease-youdao/LobsterAI/pull/1869)).
*   **Model Compatibility & Features:** Support was added for Baidu Qianfan coding plan ([PR #1859](https://github.com/netease-youdao/LobsterAI/pull/1859)) and Xiaomi Mimo model coding plan ([PR #1862](https://github.com/netease-youdao/LobsterAI/pull/1862)).
*   **IM & Integrations:** Updates include fixing WeChat file receiving issues ([PR #1863](https://github.com/netease-youdao/LobsterAI/pull/1863)), fixing Feishu Chinese filename garbling ([PR #1866](https://github.com/netease-youdao/LobsterAI/pull/1866)), stripping IM media metadata properly in desktop clients ([PR #1856](https://github.com/netease-youdao/LobsterAI/pull/1856)), and upgrading the Youdaonote skill ([PR #1864](https://github.com/netease-youdao/LobsterAI/pull/1864)).

## 4. Community Hot Topics
The most actively discussed issues today center around cutting-edge model integration and state management in multi-model workflows:
*   **DeepSeek V4 Integration Failure:** Users are actively discussing errors when using the newly released DeepSeek V4 model. The provider is rejecting the request schema or tool payload ([Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813), 6 comments). *Underlying need:* The community expects day-zero compatibility with frontier open-source models, requiring constant schema updates from the maintainers.
*   **Multimodal State Desync:** A detailed bug report regarding image attachments not correctly updating their base64/file-path state when switching between vision and non-vision models ([Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861), 1 comment). *Underlying need:* Users are heavily utilizing multi-modal workflows and expect seamless, dynamic state updates in the UI without manual workarounds.

## 5. Bugs & Stability
Today's reports highlight session reliability and multimodal rendering issues, though the maintainers are already addressing many of them in recent PRs:
1.  **High: Session Deadlocks on Follow-ups.** Users report experiencing infinite `NO_REPLY` loops or early output truncation when asking follow-up questions, caused by tasks completing prematurely in the backend ([Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849)). *Status: Root cause identified by maintainers, likely addressed by [PR #1869](https://github.com/netease-youdao/LobsterAI/pull/1869).*
2.  **High: Image State Desync.** Switching models after adding an image causes the submission logic to fail, sending base64 to non-vision models or file paths to vision models ([Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861)). *Status: Fix merged in [PR #1860](https://github.com/netease-youdao/LobsterAI/pull/1860).*
3.  **Medium: Gateway Restarts & Layout Glitches.** Switching models on the home page triggers hard gateway restarts, and long model names cause UI overflows. *Status: Fixed in [PR #1857](https://github.com/netease-youdao/LobsterAI/pull/1857) and [PR #1855](https://github.com/netease-youdao/LobsterAI/pull/1855).*

## 6. Feature Requests & Roadmap Signals
While mostly a stability phase, several clear signals point to the project's near-term roadmap:
*   **"Coding Plan" Paradigm Expansion:** The explicit addition of support for Xiaomi Mimo and Baidu Qianfan "coding plans" ([PR #1862](https://github.com/netease-youdao/LobsterAI/pull/1862), [PR #1859](https://github.com/netease-youdao/LobsterAI/pull/1859)) signals that LobsterAI is building specialized, structured reasoning workflows (similar to OpenAI's structured outputs) specifically optimized for code generation across diverse local LLM providers.
*   **Advanced Multi-Agent Orchestration:** The architectural changes to support per-agent model selection ([PR #1865](https://github.com/netease-youdao/LobsterAI/pull/1865)) indicate a heavy upcoming focus on "cowork" features, where different specialized agents within the same workspace can run on different, purpose-fit models simultaneously.

## 7. User Feedback Summary
Users are pushing LobsterAI as a serious daily driver for complex, multi-model desktop AI interactions. The feedback reveals a user base that actively tests newly released LLMs (like DeepSeek V4) and relies heavily on multimodal capabilities (vision models). However, friction exists around IM channel quirks (metadata display issues) and gateway stability during rapid model switching. The overall sentiment is balanced: users are encountering functional bugs during advanced use cases, but the rapid merge rate of fix PRs suggests high satisfaction with the project's momentum. 

## 8. Backlog Watch
Two significant security-focused PRs remain open and stale, requiring immediate maintainer attention:
*   **[PR #908](https://github.com/netease-youdao/LobsterAI/pull/908) - Command Injection Vulnerability:** A fix to validate `stdio` commands in MCP Server to prevent arbitrary command injection. This represents a high-priority security risk if the render process is compromised.
*   **[PR #909](https://github.com/netease-youdao/LobsterAI/pull/909) - Skill Scan Bypass:** A patch to require user confirmation when a maliciously crafted skill intentionally crashes the security scanner (causing a fail-open bypass). 

*Note: These security PRs have been open for a month. Merging them should be prioritized before the next official stable release to protect end-users.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-04-29

## 1. Today's Overview
Moltis demonstrates robust project health and high development velocity as of April 29, 2026. The maintainers merged an impressive 11 pull requests in the last 24 hours, heavily focusing on expanding integration capabilities, enhancing the UI, and hardening existing provider support. The open-source community remains active, submitting targeted bug reports and new feature requests. With the release of version `20260428.03`, the project is rapidly iterating towards a highly configurable, multi-channel AI assistant ecosystem.

## 2. Releases
- **[20260428.03](https://github.com/moltis-org/moltis/releases/tag/20260428.03)**
  - **Summary:** This latest stable release incorporates the massive influx of recently merged features and bug fixes detailed below, including new crawling tools, browser backends, and UI updates.
  - **Migration Notes:** Administrators using reverse proxies should immediately update their Nginx configurations to use `$http_host` instead of `$host` to prevent WebSocket cross-origin rejection errors. Users utilizing Docker, Homebrew, or binary installations can now use the native self-update command.

## 3. Project Progress
The project saw 11 merged PRs, indicating heavy feature implementation and stabilization:
*   **UI & UX Enhancements:** Implemented a command palette (`Cmd+K` / `Ctrl+K`) for quick navigation and actions ([PR #904](https://github.com/moltis-org/moltis/pull/904)).
*   **External Integrations:** Added multi-source import capabilities from Claude Code, Claude Desktop, and Hermes ([PR #914](https://github.com/moltis-org/moltis/pull/914)).
*   **Web Browsing:** Integrated "Obscura" as a lightweight, zero-dependency sidecar browser backend ([PR #869](https://github.com/moltis-org/moltis/pull/869)).
*   **Lifecycle & Config:** Unified provider name validation ([PR #912](https://github.com/moltis-org/moltis/pull/912)), standardized the SessionMemoryHook dispatch across lifecycle paths ([PR #910](https://github.com/moltis-org/moltis/pull/910)), and fixed changelog scoping for cleaner release notes ([PR #909](https://github.com/moltis-org/moltis/pull/909)).
*   **Deployability:** Added an in-place `/update` command for CLI and a UI update button ([PR #911](https://github.com/moltis-org/moltis/pull/911)), and made Discord/MS Teams channels optional at compile time ([PR #899](https://github.com/moltis-org/moltis/pull/899)).
*   **Data Tools:** Bundled multiple Go-based crawl tools (WhatsApp, Discord, Slack, Twitter, Google Suite) into the sandbox ([PR #913](https://github.com/moltis-org/moltis/pull/913)).

## 4. Community Hot Topics
*   **Telegram Name Parsing (Issue/PR #905 / #915):** A highly active bug report ([Issue #905](https://github.com/moltis-org/moltis/issues/905), 3 comments, 1 upvote) highlighted failures with Mistral and OpenAI when receiving Telegram messages due to unsanitized display names. This was swiftly addressed in [PR #915](https://github.com/moltis-org/moltis/pull/915), showing excellent maintainer responsiveness.
*   **Sub-agent Configurability ([Issue #906](https://github.com/moltis-org/moltis/issues/906)):** A newly opened feature request asking for web UI configuration for sub-agents. This signals a growing user demand for managing complex, multi-agent architectures directly through the GUI.
*   **File Attachments ([Issue #533](https://github.com/moltis-org/moltis/issues/533)):** An ongoing discussion (open since March) regarding a "+" button for message attachments, which strongly aligns with the currently open [PR #876](https://github.com/moltis-org/moltis/pull/876).

## 5. Bugs & Stability
1.  **[HIGH] Docker Build DNS Failure ([Issue #896](https://github.com/moltis-org/moltis/issues/896)):** Users reported a `Temporary failure resolving 'ports.ubuntu.com'` during `apt-get update`. This has been closed, likely addressed by recent patches or environment updates, but indicates potential underlying Docker DNS network quirks for new users.
2.  **[MEDIUM] Telegram Channel Formatting Error ([Issue #905](https://github.com/moltis-org/moltis/issues/905)):** As mentioned above, unsanitized spaces/characters broke OpenAI/Mistral API calls. *Status: Fixed in [PR #915](https://github.com/moltis-org/moltis/pull/915).*
3.  **[LOW] Reverse Proxy Rejection ([PR #907](https://github.com/moltis-org/moltis/pull/907)):** WebSockets failed behind standard Nginx reverse proxies on non-standard ports. *Status: Fixed in [PR #907](https://github.com/moltis-org/moltis/pull/907).*

## 6. Feature Requests & Roadmap Signals
*   **Sub-Agent UI ([Issue #906](https://github.com/moltis-org/moltis/issues/906)):** Users want to manage sub-agents via the WebUI. This signals a shift towards decentralized agent management.
*   **Alternative AI Routing ([Issue #266](https://github.com/moltis-org/moltis/issues/266)):** A request for native support of 9router, a universal AI proxy. This highlights a user need to easily swap and manage underlying LLM providers without hard-coding.
*   **Voice Personas ([PR #916](https://github.com/moltis-org/moltis/pull/916)):** An open PR introducing deterministic voice identities for TTS. This is a strong candidate for the next major release, pushing Moltis closer to being a fully-fledged voice-first assistant.
*   **Auto-Code Indexing ([PR #903](https://github.com/moltis-org/moltis/pull/903)):** Implementing file watchers and auto-indexing. This suggests the next version will offer seamless, background-aware coding assistance.

## 7. User Feedback Summary
Users are actively utilizing Moltis across diverse messaging platforms (Telegram, Discord, MS Teams) but are occasionally hitting friction with character limits and network proxies. The community strongly desires UI parity with major LLM chat providers (e.g., command palettes, file upload buttons). Developers are also pushing for better external tool integrations, as seen in the multi-source import PRs and data crawling skills. Overall satisfaction appears high, with contributors submitting high-quality, well-scoped PRs.

## 8. Backlog Watch
*   **Web UI File Upload ([PR #876](https://github.com/moltis-org/moltis/pull/876)):** Open since April 25. Requires maintainer review as it directly resolves a long-standing community request ([Issue #533](https://github.com/moltis-org/moltis/issues/533)).
*   **Compaction Summary Model ([PR #826](https://github.com/moltis-org/moltis/pull/826)):** Open since April 22. Addresses chat compaction using auxiliary providers. Needs review to ensure long-term context stability.
*   **Traditional Chinese Locale ([PR #339](https://github.com/moltis-org/moltis/pull/339)):** Open for nearly two months. Internationalization PRs are often complex and may require dedicated maintainer time to review without breaking existing UI flows.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-04-29

## 1. Today's Overview
CoPaw (under the agentscope-ai org, also commonly referred to as QwenPaw) is experiencing an **highly active and slightly turbulent development phase**. The project recorded 43 issues updated (25 open, 18 closed) and 31 pull requests updated (11 open, 20 merged/closed) in the past 24 hours, indicating a very responsive maintainer team pushing aggressive fixes. The release of `v1.1.5-beta.1` highlights a focus on UI state management, timezone handling, and the introduction of ACP (Agent Communication Protocol). However, the high volume of open bugs related to session handling, context syncing, and frontend freezing suggests the project is currently straining under the weight of its rapid feature expansion, struggling to stabilize core concurrency mechanisms.

## 2. Releases
**v1.1.5-beta.1**
*   **What's Changed:**
    *   `fix(console)`: Switched to hybrid storage for per-tab agent selection to prevent state loss.
    *   `fix(timezone)`: Normalized non-standard timezone names.
    *   `feat(ACP)`: Initial addition of Agent Communication Protocol support.
*   **Migration/Breaking Changes:** No explicit breaking changes reported in the release notes, but users deploying the new ACP feature should be aware of early-stage compatibility issues (see Bug section).

## 3. Project Progress
The team merged 20 PRs today, focusing heavily on **performance optimization** and **critical bug squashing**. 
*   **Frontend Performance:** Significant refactoring was done to improve the web console, notably virtualizing the chat session list with `react-window` ([PR #3912](https://github.com/agentscope-ai/QwenPaw/pull/3912)) and deduplicating repeated model API requests on the `/chat` page ([PR #3897](https://github.com/agentscope-ai/QwenPaw/pull/3897)).
*   **Concurrency & Memory:** Caching was introduced for skill manifest reads to prevent file descriptor exhaustion ([PR #3910](https://github.com/agentscope-ai/QwenPaw/pull/3910)).
*   **Platform Support:** Fixes were merged for Docker volume mount points during backup restoration ([PR #3916](https://github.com/agentscope-ai/QwenPaw/pull/3916)) and QQ channel voice message mappings ([PR #3845](https://github.com/agentscope-ai/QwenPaw/pull/3845)).

## 4. Community Hot Topics
The community is highly engaged, mostly around platform stability and integration capabilities.
*   **Stop Button Ineffectiveness:** Users are frustrated that the UI "Stop" button only halts frontend rendering while the backend Agent continues executing tool calls ([Issue #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850) 👍 1, 5 comments). This highlights a strong need for true backend task cancellation.
*   **Project Identity & Direction:** Users are asking about the relationship between QwenPaw and CoPaw and their future maintenance paths ([Issue #3430](https://github.com/agentscope-ai/QwenPaw/issues/3430) - 7 comments).
*   **MCP Stability:** Integrations with external MCP (Model Context Protocol) servers are causing infinite hanging in chats ([Issue #3822](https://github.com/agentscope-ai/QwenPaw/issues/3822) - 3 comments), pointing to issues in how the platform handles third-party timeouts.
*   **Workflows vs. Agents:** Users are actively requesting visual workflow orchestration tools similar to OpenClaw's Lobster ([Issue #3873](https://github.com/agentscope-ai/QwenPaw/issues/3873) - 👍 1, 2 comments).

## 5. Bugs & Stability
Stability remains the weakest point for CoPaw currently, specifically regarding context management and agent execution lifecycle.
*   **[Critical] Context Sync Race Condition:** High `max_iters` causes an infinite loop because tool results are dropped before the next LLM call. A fix PR exists and is under review ([Issue #3893](https://github.com/agentscope-ai/QwenPaw/issues/3893) / Fix PR: [#3895](https://github.com/agentscope-ai/QwenPaw/pull/3895)).
*   **[High] UI Freezing on Linux:** On Debian 12, saving model settings causes the page to freeze and requires a full service restart, particularly when not running as root ([Issue #3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) - 9 comments).
*   **[High] Session Disappearing:** Chat histories vanish randomly, sometimes routing new messages to different, invisible sessions ([Issue #3843](https://github.com/agentscope-ai/QwenPaw/issues/3843) - 6 comments).
*   **[Medium] ACP Compatibility:** The newly released ACP feature fails to work correctly with the Hermes Agent, throwing `'types.SimpleNamespace' object is not iterable` errors ([Issue #3886](https://github.com/agentscope-ai/QwenPaw/issues/3886)).

## 6. Feature Requests & Roadmap Signals
Users are pushing for more customization and broader integration support, with several signals likely to influence the `v1.1.5` stable release:
*   **Model/Provider Support:** High demand for adding official support for Kimi Code API ([Issue #3437](https://github.com/agentscope-ai/QwenPaw/issues/3437)) and llama.cpp ([Issue #3920](https://github.com/agentscope-ai/QwenPaw/issues/3920)).
*   **Configuration Depth:** Requests to make hardcoded limits dynamic, specifically regarding web console file upload sizes ([Issue #3884](https://github.com/agentscope-ai/QwenPaw/issues/3884) - implemented in recent PRs) and setting independent timeouts/context windows per model ([Issue #3929](https://github.com/agentscope-ai/QwenPaw/issues/3929)).
*   **Developer Experience:** Request for unit test frameworks for custom skills ([Issue #3883](https://github.com/agentscope-ai/QwenPaw/issues/3883)) and better MCP server debugging interfaces ([Issue #2495](https://github.com/agentscope-ai/QwenPaw/issues/2495)).

## 7. User Feedback Summary
**Pain Points:** Users feel that core conversational features—specifically chat persistence, stopping tasks, and tool-calling reliability—are currently fragile. The "Stop" button being a frontend placebo is a major source of friction. Furthermore, Chinese IME support is broken in specific UI text fields ([Issue #3927](https://github.com/agentscope-ai/QwenPaw/issues/3927)).
**Satisfaction/Use Cases:** Users are leveraging CoPaw for complex, long-running tasks involving code execution, Dream Agent memory management, and enterprise channels (WeCom, DingTalk). The active merging of PRs and robust 43/31 issue-to-PR interaction ratio shows users are generally positive about the project's trajectory and maintainers' responsiveness, despite the growing pains.

## 8. Backlog Watch
*   **Long-term Stop/Execution Bug:** The inability to properly stop agents has been reported multiple times over the last month ([Issue #3850](https://github.com/agentscope-ai/QwenPaw/issues/3850), [#3750](https://github.com/agentscope-ai/QwenPaw/issues/3750), [#2190](https://github.com/agentscope-ai/QwenPaw/issues/2190)). While the console is being updated, the underlying backend `is_running` flag race condition needs a definitive architectural fix.
*   **MCP Tool Visibility:** The request to view available tools after configuring an MCP server ([Issue #2495](https://github.com/agentscope-ai/QwenPaw/issues/2495)) has been open since March 2026. It is crucial for UX and currently lacks a linked PR.
*   **DingTalk Quoted Messages:** A highly requested enterprise feature for DingTalk bots to process quoted messages/files ([Issue #3747](https://github.com/agentscope-ai/QwenPaw/issues/3747)) remains open.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest: 2026-04-29

## 1. Today's Overview
ZeptoClaw experienced a burst of automated dependency management activity over the past 24 hours, marked exclusively by 15 new Pull Requests generated by Dependabot. There were no new releases, no newly opened issues, and no merged PRs during this period. While the repository shows no signs of instability or user-reported bugs today, the complete lack of human-authored merges, feature development, or community discussion suggests a temporary lull in active maintainer engagement. The project's automated health and security upkeep remains highly active and robust.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
No PRs were merged or closed today, meaning no substantive feature advancements or bug fixes were deployed to the main codebase. All 15 PRs opened in the last 24 hours are automated dependency bumps currently awaiting review:
*   **Rust Ecosystem:** Major bumps include [tokio `1.50.0` to `1.51.1` (#550)](https://github.com/qhkm/zeptoclaw/pull/550), [lettre `0.11.20` to `0.11.21` (#563)](https://github.com/qhkm/zeptoclaw/pull/563), [libc `0.2.184` to `0.2.185` (#560)](https://github.com/qhkm/zeptoclaw/pull/560), [webpki-roots `1.0.6` to `1.0.7` (#558)](https://github.com/qhkm/zeptoclaw/pull/558), and [zip `8.4.0` to `8.5.1` (#555)](https://github.com/qhkm/zeptoclaw/pull/555).
*   **JavaScript & UI (Docs/Landing):** Vite was bumped to `8.0.8` (#561), and Astro was bumped to `6.1.6` in both [/landing/zeptoclaw/docs (#557)](https://github.com/qhkm/zeptoclaw/pull/557) and [/landing/r8r/docs (#552)](https://github.com/qhkm/zeptoclaw/pull/552).
*   **CI/CD & Infrastructure:** Updates include [softprops/action-gh-release `3.0.0` (#553)](https://github.com/qhkm/zeptoclaw/pull/553), [actions/upload-artifact `7.0.1` (#551)](https://github.com/qhkm/zeptoclaw/pull/551), and a Debian base image bump (#549).

## 4. Community Hot Topics
There are no active community hot topics to report today. With zero new issues opened and zero user comments left on existing PRs, there is no organic community discussion taking place. All current activity is entirely mechanical.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported by users today. However, maintainers should be aware of potential stability shifts hidden in the dependency PRs. For example, the bump to `softprops/action-gh-release` is a major version jump (from `2.6.1` to `3.0.0` - [PR #553](https://github.com/qhkm/zeptoclaw/pull/553)) which could alter release workflow behaviors if not reviewed carefully.

## 6. Feature Requests & Roadmap Signals
There are no new feature requests or roadmap signals to derive from today's data. The 24-hour snapshot relies strictly on bot-driven dependency updates, offering no insight into upcoming user-facing features or strategic shifts for the ZeptoClaw assistant.

## 7. User Feedback Summary
No direct user feedback, pain points, or use cases were shared in the repository over the last 24 hours. 

## 8. Backlog Watch
With 15 automated PRs sitting open and no maintainer merges or comments recorded today, the immediate backlog consists entirely of pending dependency updates. While a single day of bot activity is perfectly normal, the accumulating open PRs will soon require maintainer attention to ensure the project's security and upstream compatibility remain tightly integrated.

</details>

<details>
<summary><strong>EasyClaw</strong> — <a href="https://github.com/gaoyangz77/easyclaw">gaoyangz77/easyclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-04-29

## 1. Today's Overview
ZeroClaw is experiencing a period of intense development and high community engagement, largely driven by its transition toward a microkernel architecture (v0.7.x → v1.0.0) and efforts to make its web dashboard a first-class interaction surface. Activity is currently skewed heavily toward pull requests (48 open), indicating that contributors are actively writing code, submitting bug fixes, and expanding documentation. The issue tracker shows 16 open active issues reported in the last 24 hours, revealing that while new features are rapidly landing, users are encountering significant friction with setup, local models, and specific channel integrations. Overall, project health is robust and highly iterative, though maintainers should monitor the rising volume of S1/S2 bug reports as the v0.7.4 milestone approaches.

## 2. Releases
There were no new releases today. The project is currently iterating towards the **v0.7.4 milestone** ([Issue #5877](https://github.com/zeroclaw-labs/zeroclaw/issues/5877)), which was renumbered following an emergency v0.7.3 patch.

## 3. Project Progress
Development momentum is highly focused on stabilizing the web dashboard, expanding channel integrations, and improving telemetry. A breakdown of today's merged/closed items and active PR advancements:

*   **Dashboard & UX Stability:** A major web dashboard crash bug was officially closed today ([Issue #4866](https://github.com/zeroclaw-labs/zeroclaw/issues/4866)). Active work continues via a dashboard bugfix bundle ([PR #6161](https://github.com/zeroclaw-labs/zeroclaw/pull/6161)), web router refactoring for faster startup ([PR #6176](https://github.com/zeroclaw-labs/zeroclaw/pull/6176)), and defensive API array handling ([PR #6162](https://github.com/zeroclaw-labs/zeroclaw/pull/6162)).
*   **New Channel Integrations:** Progress on a WeChat personal account integration via iLink Bot ([PR #6166](https://github.com/zeroclaw-labs/zeroclaw/pull/6166)) and an ESP32 smart-room Telegram demo ([PR #6148](https://github.com/zeroclaw-labs/zeroclaw/pull/6148)).
*   **Core Runtime & Comms:** Full implementation of ACP protocol v1 is under review ([PR #6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167)), which will restore external tool-call permissions. Additionally, OTel GenAI spans are being enriched for better observability ([PR #6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009), [PR #6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190)).
*   **Hardware & Edge:** Documentation and setup instructions for edge devices (Arduino Uno Q) are being updated ([PR #6172](https://github.com/zeroclaw-labs/zeroclaw/pull/6172)), indicating expanded IoT use cases.

## 4. Community Hot Topics
*   **Microkernel Transition ([Issue #5574](https://github.com/zeroclaw-labs/zeroclaw/issues/5574)):** Closed today, this accepted RFC outlines the transition from a reactive codebase to an intentional architecture. This is the defining strategic shift for the project's path to v1.0.0.
*   **Multi-Agent UX Design ([Issue #5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890)):** With 7 comments, this RFC is actively shaping how ZeroClaw will handle multiple agents. The discussion period recently concluded, and it is currently awaiting a Core Team vote.
*   **Configuring the Reply Gate ([Issue #5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674)):** Highly upvoted (👍 3), users are frustrated that the `classify_channel_reply_intent` feature causes the assistant to ignore them in private chats. This highlights a strong community need for contextual awareness in communication channels.

## 5. Bugs & Stability
Several high-priority bugs were reported today, primarily affecting the runtime and setup flows:

*   **S1 - Workflow Blocked:** Users are unable to use local llama-server instances due to provider/model routing errors ([Issue #6180](https://github.com/zeroclaw-labs/zeroclaw/issues/6180)). *No fix PR yet.*
*   **S1 - Workflow Blocked:** Documentation for the Config Reference Guide is missing ([Issue #6187](https://github.com/zeroclaw-labs/zeroclaw/issues/6187)). *No fix PR yet.*
*   **S1 - Security / Setup Blocked:** Persistent provider config (`enc2:`) cannot be re-decrypted after a machine identity rotation (e.g., during a host switch or OS reflash) ([Issue #6188](https://github.com/zeroclaw-labs/zeroclaw/issues/6188)). *No fix PR yet.*
*   **S2 - Degraded Behavior:** The `model_switch` tool fails to persist across turns and is ignored by the gateway UI ([Issue #6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173)). *No fix PR yet.*
*   **S2 - Degraded Behavior:** Local images generated by "skills" cannot be read by the API model due to path handling ([Issue #6097](https://github.com/zeroclaw-labs/zeroclaw/issues/6097)). *Fixes are actively being addressed in [PR #6184](https://github.com/zeroclaw-labs/zeroclaw/pull/6184) and [PR #6189](https://github.com/zeroclaw-labs/zeroclaw/pull/6189).*

## 6. Feature Requests & Roadmap Signals
*   **Web Onboarding Parity ([Issue #6175](https://github.com/zeroclaw-labs/zeroclaw/issues/6175)):** A P1 request to allow users to complete provider auth, model selection, and channel setup entirely from the web dashboard without touching the CLI. This signals a massive push for mainstream accessibility in v0.7.4.
*   **Dream Mode ([Issue #5849](https://github.com/zeroclaw-labs/zeroclaw/issues/5849)):** Proposed lightweight background process for memory consolidation during idle periods. Reflects a maturing interest in autonomous agent memory management.
*   **Re-activate HMAC Tool Receipts ([Issue #6182](https://github.com/zeroclaw-labs/zeroclaw/issues/6182)):** Security enhancement to re-wire cryptographic tool receipts that were stripped before a prior merge.
*   *Prediction for v0.7.4:* Based on current PRs, the next release will be heavily focused on Web Dashboard parity, fixing multimodal/image handling for local models, and finalizing the ACP protocol updates.

## 7. User Feedback Summary
Users are excited about expanding ZeroClaw to new platforms (WeChat, smart home IoT, edge hardware), but they are experiencing friction with daily operations. Specifically, users express dissatisfaction with local LLM integration (llama-server compatibility) and UI-level bugs (models not persisting when switched via UI). There is a strong desire from the community to move away from CLI-based configuration, as evidenced by repeated requests for a stable, feature-complete web dashboard. The `enc2:` decryption issue also reveals that users operating self-hosted or edge deployments frequently re-flash their systems, underscoring the need for portable, cloud-backed, or easily exportable identity configurations.

## 8. Backlog Watch
*   **[Issue #5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837):** ACP-protocol session cancellation support is currently marked as `status: blocked`. Requires maintainer input to unblock.
*   **[Issue #2628](https://github.com/zeroclaw-labs/zeroclaw/issues/2628):** A request for official container images compiled with all build options. Closed, but foundational for heavy Docker adopters. Maintainers should ensure this is tracked in the v0.7.4 milestone.
*   **[PR #6071](https://github.com/zeroclaw-labs/zeroclaw/pull/6071):** A security-related fix preventing the markdown scanner from flagging high-risk commands in documentation prose. Needs review to ensure skill auditing remains strict but doesn't trigger false positives on instructional text.

</details>