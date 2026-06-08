# OpenClaw Ecosystem Digest 2026-06-09

> Issues: 500 | PRs: 494 | Projects covered: 13 | Generated: 2026-06-08 22:28 UTC

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

# OpenClaw Project Digest: 2026-06-09

## 1. Today's Overview
OpenClaw experienced an exceptionally high-velocity day of development, with nearly 500 issues and 494 pull requests updated within the last 24 hours. Despite the massive volume of community submissions and active PRs (335 open), project maintainers continue to merge fixes at a steady pace (159 merged/closed PRs), keeping the open issue count manageable (447 open). The bulk of today's activity revolves around hardening the newly released `v2026.6.5-beta.3`, specifically targeting memory management, multi-agent session stability, and channel adapter reliability. Overall, the project is highly active, though the maintainers are stretched thin by the sheer volume of incoming bug reports and architectural feature requests.

## 2. Releases
- **v2026.6.5-beta.3** (`openclaw/openclaw` Release Notes)
  - **Highlights:** Improved model reasoning management and MCP tool handling. 
  - **Changes:** QQBot now explicitly strips model reasoning/thinking scaffolding (like `<thinking>` tags) before native delivery, preventing raw internal thoughts from leaking into channel replies. MCP tool results now correctly coerce `resource_link`, `resource`, `audio`, and malformed images.

## 3. Project Progress
Today saw 159 pull requests merged or closed, focusing heavily on infrastructure reliability, channel delivery fixes, and dependency updates:
- **Stability & Security:** 
  - **PR [#91340](https://github.com/openclaw/openclaw/pull/91340):** Fixed a critical default permission bypass in Claude CLI live runs. OpenClaw will no longer default to `--permission-mode bypassPermissions` unless explicitly configured, improving default security boundaries.
  - **PR [#90035](https://github.com/openclaw/openclaw/pull/90035):** Fixed a crash during `openclaw doctor` on Node 23.0–23.10 runtimes by patching missing `StatementSync.columns()` support.
- **Messaging & Session Reliability:**
  - **PR [#90500](https://github.com/openclaw/openclaw/pull/90500):** Prevented stale persisted session model/provider states from routing through providers that have been removed from the gateway catalog.
  - **PR [#90060](https://github.com/openclaw/openclaw/pull/90060):** Patched the fuzzy text matching editor to stop it from silently rewriting unrelated lines (stripping whitespace/smart quotes) during edits.
- **UI & Observability:**
  - **PR [#91080](https://github.com/openclaw/openclaw/pull/91080):** Introduced a startup watchdog that dumps in-flight diagnostic phases if the gateway HTTP server hangs for over 60 seconds.
  - **PR [#91511](https://github.com/openclaw/openclaw/pull/91511):** Fixed the mobile Control UI composer being obscured by the native keyboard.

## 4. Community Hot Topics
The community is highly engaged, with several long-standing architectural discussions and critical bugs generating significant traffic:
- **Multi-encoding Content-Disposition Handling ([Issue #48788](https://github.com/openclaw/openclaw/issues/48788), 18 comments):** A proposal to centralize filename encoding for non-UTF8 channels (Shift-JIS, GB18030, etc.). This highlights a major pain point for international users, particularly on Asian messaging platforms where file uploads routinely break.
- **Secure Context/Device Identity Bug ([Issue #32473](https://github.com/openclaw/openclaw/issues/32473), 17 comments, 4 thumbs-up):** A regression where the Control UI requires a secure context (HTTPS), locking out users deploying behind HTTP VPS/Docker setups. 
- **GPT-5.4/5.5 API Transport Failure ([Issue #90083](https://github.com/openclaw/openclaw/issues/90083), 15 comments, 3 thumbs-up):** A critical P1 bug where the newest OpenAI models fail with `invalid_provider_content_type`. This is severely impacting users trying to use bleeding-edge LLMs.
- **ClawHub & Skill Ecosystem Viability ([Issue #50090](https://github.com/openclaw/openclaw/issues/50090), 15 comments):** Community members are expressing frustration over the gap between the promise of the `SKILL.md` ecosystem and the reality of deploying/finding reliable community skills.

## 5. Bugs & Stability
Several high-severity bugs are affecting core agent operations, with some posing trust and security risks:
1. **P1: Session Context Confusion ([Issue #32296](https://github.com/openclaw/openclaw/issues/32296)):** Agents reply to previous messages instead of the current prompt, causing conversation misalignment. 
2. **P1: Untrusted Prompt Injection in `gh-issues` Skill ([Issue #45740](https://github.com/openclaw/openclaw/issues/45740)):** Raw GitHub issue bodies are injected directly into sub-agent prompts without sanitization, opening the system to prompt injection attacks via maliciously crafted GitHub issues.
3. **P1: Feishu Streaming Card Truncation ([Issue #88929](https://github.com/openclaw/openclaw/issues/88929)):** Streaming replies on Feishu show an awful typewriter effect and truncate the final message, leaving only the last character (e.g., "？"). 
4. **P1: Hardcoded Working Paths ([Issue #51429](https://github.com/openclaw/openclaw/issues/51429)):** A ridiculous regression where a developer's local path (`/Users/wangtao`) was hardcoded, merged, and published, breaking default installations.
5. **P1: Cron Session Hallucinations ([Issue #49876](https://github.com/openclaw/openclaw/issues/49876)):** When a cron job encounters a tool failure, the LLM fabricates a successful result instead of failing cleanly, potentially sending false automated reports to users.

## 6. Feature Requests & Roadmap Signals
User requests are heavily trending toward enterprise observability, multi-agent orchestration, and granular control:
- **Per-Skill Model Routing ([Issue #43260](https://github.com/openclaw/openclaw/issues/43260)):** Allowing `SKILL.md` to define specific models. This would allow operators to use cheap/fast models for basic tasks and expensive models for complex reasoning within the same agent.
- **Per-Agent Cost Budgets ([Issue #42475](https://github.com/openclaw/openclaw/issues/42475)):** Gateway-enforced daily/monthly spend caps per agent to prevent runaway API costs.
- **Plugin Observability Traces ([Issue #50291](https://github.com/openclaw/openclaw/issues/50291)):** Requests for distributed tracing (`messageId`, `runId`) in plugin hooks to debug concurrent message handling in group chats.
- **LaTeX Rendering in Control UI ([Issue #42840](https://github.com/openclaw/openclaw/issues/42840)):** Highly requested (5 thumbs-up) MathJax support for academic and scientific use cases.

## 7. User Feedback Summary
Users are excited about OpenClaw's expanding capabilities (support for the newest GPT-5 models, ACP bindings, and tools like Codex), but are experiencing significant friction with **session lifecycle management**. Pain points largely center on subagents becoming unresponsive, zombie sessions persisting after termination, and memory management acting chaotically across different users on the same system. Deployment friction is also high: non-HTTPS Docker setups are broken, and documentation is sometimes ahead of the actual releases, confusing operators trying to configure new features.

## 8. Backlog Watch
Several critical issues and ambitious PRs are stalled, awaiting maintainer review:
- **PR [#89040](https://github.com/openclaw/openclaw/pull/89040):** A fix for massive 14-22 second event-loop stalls during `embedded_run` bootstrap. This is causing direct message loss and needs urgent merging.
- **PR [#91499](https://github.com/openclaw/openclaw/pull/91499):** An effort to preserve tool policies in scheduled cron turns. 
- **Issue [#43747](https://github.com/openclaw/openclaw/issues/43747):** "Memory management is in chaos." Users report wildly inconsistent behavior with memory chunking and storage backends.
- **Issue [#43367](https://github.com/openclaw/openclaw/issues/43367):** Multi-agent orchestration is fundamentally unstable, with concurrent config overwrites and detached child work making parallel agent batches unusable.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from June 9, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a phase of aggressive feature expansion coupled with intense growing pains. Projects are rapidly evolving from simple chat wrappers into complex, multi-modal orchestrators capable of managing multi-agent topologies, persistent memory, and enterprise messaging integrations. However, this velocity is exposing significant stability and user-experience friction, particularly around context management, secure container deployments, and channel reliability. Across the board, core maintainers and communities are pivoting to harden their architectures through security overhauls, strict error handling, and air-gapped deployment support to meet early enterprise demands.

## 2. Activity Comparison

*Note: Health Score is assessed based on issue triage speed, PR merge cadence, and backlog management.*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Assessment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 | 494 (159 merged) | **Active** (`v2026.6.5-beta.3`) | 🟡 **B+** | Massive volume, but maintainers stretched thin; accumulation of P1 bugs. |
| **IronClaw** | 84 | 84 (24 merged) | Pre-release (`0.29.x` staging) | 🟢 **A-** | High velocity, fast triage of complex architectural PRs. |
| **CoPaw** | 92 | Active (23 merged) | Stable (`1.1.10/1.1.11`) | 🟢 **A-** | Highly engaged community, active bug fixing, healthy ecosystem growth. |
| **NanoBot** | 8 | 36 (15 merged) | Stable (No release) | 🟢 **A** | Focused, high-quality merges; strong contributor momentum. |
| **Hermes Agent**| 50 | 50 (5 merged) | Stable (`v0.16.0`) | 🟡 **B** | High engagement, but low PR merge rate and growing backlog. |
| **ZeroClaw** | 50 | 50 (11 merged) | Pre-release (v0.9.0 target)| 🟡 **B+** | Intense architectural iteration, but struggling with config UX and S0 bugs. |
| **LobsterAI** | 0 | 18 merged | Stable (No release) | 🟢 **A** | Excellent technical debt cleanup; highly responsive maintainers. |
| **PicoClaw** | Low | 18 (9 merged) | Nightly (`v0.2.9-nightly`)| 🟢 **A-** | Healthy, focused on systematic code hardening and stability. |
| **NanoClaw** | 1 | 3 (2 merged) | Stable (No release) | 🟢 **A** | Slow but highly focused on critical security and integration fixes. |
| **TinyClaw** | 0 | 1 (0 merged) | Stable (No release) | 🟡 **B-** | Low activity; currently bottlenecked by basic setup/deployment issues. |

## 3. OpenClaw's Position
*   **Advantages vs Peers:** OpenClaw remains the undeniable core reference implementation with the largest community footprint (nearly 1,000 GitHub events daily). It is the quickest to adopt bleeding-edge models (e.g., GPT-5.5) and set industry standards for tool handling (MCP).
*   **Technical Approach:** OpenClaw functions as a broad, extensible gateway hub, heavily relying on community skills (`SKILL.md`). In contrast, projects like **IronClaw** are heavily engineering structured multi-agent runtimes ("Reborn" architecture), while **NanoBot** and **CoPaw** focus on deep, localized context governance.
*   **Community Size:** OpenClaw’s community is massive and vocal, unearthing complex edge cases (e.g., multi-encoding Content-Disposition). However, unlike **LobsterAI** or **NanoBot**, which maintain tight ship turnaround times, OpenClaw’s maintainers are currently "stretched thin," leading to P1 regressions (like hardcoded local paths) sitting in the backlog.

## 4. Shared Technical Focus Areas
Several synchronized requirements are emerging across the ecosystem, highlighting universal challenges in AI agent development:
*   **Context Window & Memory Management:** 
    *   *Projects:* OpenClaw, NanoBot, CoPaw, ZeroClaw.
    *   *Needs:* Systems are buckling under token bloat. There is a universal demand for "microcompaction," "memory strategies," and preventing infinite history injection (e.g., NanoBot's `dream` bug).
*   **Container Security & Isolation:**
    *   *Projects:* NanoClaw, NanoBot, IronClaw.
    *   *Needs:* As agents execute code, strict sandboxing is critical. Projects are implementing `--internal` Docker networks, blocking symlink escapes, and replacing pseudo-random numbers with cryptographic UUIDs.
*   **Channel/Gateway Reliability (Telegram, WeChat, Feishu):**
    *   *Projects:* OpenClaw, CoPaw, PicoClaw, Hermes.
    *   *Needs:* Long-running streaming responses routinely break HTML/Markdown rendering. WeChat token expirations and dead-loop state reloads are a persistent pain point across the board.
*   **Desktop Client & UI Friction:**
    *   *Projects:* Hermes Agent, LobsterAI, PicoClaw, CoPaw.
    *   *Needs:* Windows GUI flashing, OAuth token drops, and poor clipboard handling (pasting rich text/Excel data) indicate that Desktop integrations (Tauri/Electron) require maturation.

## 5. Differentiation Analysis
*   **Target Audience:** **IronClaw** and **ZeroClaw** are explicitly targeting enterprise/operators, focusing heavily on OIDC/SSO, multi-tenant auth, and durable state workflows. Conversely, **PicoClaw** and **TinyClaw** lean toward hobbyists and edge-computing users, focusing on lower resource utilization and niche hardware support (e.g., RISC-V).
*   **Feature Focus:** **CoPaw (QwenPaw)** is positioning itself as a comprehensive AI development platform, integrating built-in PRD tools and "Goal Modes." **Hermes Agent** is differentiating via its event-driven notification architecture and cross-platform gateway support.
*   **Technical Architecture:** **OpenClaw** and **Hermes** rely heavily on pluggable skill ecosystems via Markdown/YAML. **ZeroClaw** is taking a more rigorous route, implementing WASI Component Models for sandboxed, namespaced plugin execution.

## 6. Community Momentum & Maturity
*   **Tier 1: Rapidly Iterating (High Momentum):** **IronClaw**, **CoPaw**, and **OpenClaw**. These projects are pushing hundreds of commits weekly, rapidly integrating new LLM capabilities. However, they are currently paying the "innovation tax" through high bug volumes and architectural rewrites.
*   **Tier 2: Stabilizing & Hardening (High Maturity):** **LobsterAI**, **NanoBot**, and **PicoClaw**. These projects show fewer dramatic feature drops but exhibit high maturity through rigorous error wrapping (`%w` in Go), aggressive debt reduction (merging stale PRs), and strict security patches. 
*   **Tier 3: Niche/Slow Cycle:** **NanoClaw**, **TinyClaw**, **ZeptoClaw**, **Moltis**. Activity here is sparse, heavily reliant on a few core contributors, or currently dormant.

## 7. Trend Signals
*   **Local-First & Agentic Self-Evolution:** Users are demanding better support for local models (Ollama, vLLM) with strict parsing, moving away from pure cloud reliance. Furthermore, there is a strong pull toward "Self-Evolving" loops (as seen in CoPaw and Hermes), where agents autonomously create and refine their own skills over time.
*   **Observability over Opacity:** Operators are frustrated by silent failures (e.g., file writes failing invisibly, agents masking cron timeouts as "success"). There is a clear trend toward adding deep telemetry (Langfuse, distributed tracing) and "failing loudly" to build user trust.
*   **Multi-Agent State Lifecycle:** The transition from single chatbots to multi-agent frameworks is the primary source of ecosystem friction. Concurrent config overwrites, sub-agent infinite polling, and context confusion indicate that robust, isolated state management will be the defining competitive advantage for AI agent frameworks in late 2026.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-09

## 1. Today's Overview
NanoBot is experiencing a highly active development phase with **36 pull requests** updated and **8 issues** processed in the past 24 hours, indicating a strong and engaged contributor base. The project's current focus is heavily bifurcated between expanding core infrastructure—such as the new top-level transcription system, context governance, and multi-agent collaboration—and hardening existing features through rigorous bug fixes and security patches. A significant portion of today's activity revolves around communitycontributions and merge requests, with 15 PRs merged or closed. Despite the high velocity, no new official version was released today, suggesting the maintainers are likely stabilizing recent features for a future milestone.

## 2. Releases
No new releases were published today.

## 3. Project Progress
Today saw 15 PRs merged or closed, marking significant forward momentum in several key areas:

*   **Provider & Transcription Infrastructure:** The new top-level `transcription` system is rapidly taking shape. [PR #4232](https://github.com/HKUDS/nanobot/pull/4232) established shared voice input support across WebUI and desktop. Within this new framework, PRs for new providers were successfully merged, including [AssemblyAI (#4224)](https://github.com/HKUDS/nanobot/pull/4224), [Xiaomi MiMo ASR (#4175)](https://github.com/HKUDS/nanobot/pull/4175), and [OpenRouter (#4113)](https://github.com/HKUDS/nanobot/pull/4113). Additionally, [PR #4217](https://github.com/HKUDS/nanobot/pull/4217) added `extra_query` config support for Azure-style OpenAI-compatible gateways.
*   **Security & Workspace Isolation:** Security hardening is clearly a priority. [PR #4221](https://github.com/HKUDS/nanobot/pull/4221) was merged to block relative symlink workspace escapes in the `ExecTool`, preventing malicious workspace breakouts.
*   **Context & Session Management:** Foundational fixes were applied to session handling. [PR #4219](https://github.com/HKUDS/nanobot/pull/4219) fixed an issue where orphan tool results caused legal-boundary trimming failures. 
*   **WebUI Enhancements:** [PR #4235](https://github.com/HKUDS/nanobot/pull/4235) added version display and PyPI update checks to the WebUI settings.

## 4. Community Hot Topics
The most heavily discussed topics revolve around context window management, multi-model support, and channel reliability.

*   **Context Window & Memory Bloat:** [Issue #4242](https://github.com/HKUDS/nanobot/issues/4242) sparked notable interest regarding the `dream` feature. Users discovered that disabling `dream.enabled` prevents the dream cursor from advancing, inadvertently injecting the entire raw chat history into the system prompt and risking massive token bloat. 
*   **Per-Conversation Model Switching:** [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) (opened by rombert) highlights a strong user need to easily alternate between local (private/slow) and cloud (capable/fast) models on a per-conversation basis, rather than relying solely on global settings.
*   **Channel Reliability (WeChat/Telegram):** Users with long-running sessions continue to report edge cases. [Issue #4250](https://github.com/HKUDS/nanobot/issues/4250) details how long Telegram responses break markdown rendering when split. Similarly, [PR #4223](https://github.com/HKUDS/nanobot/pull/4223) addresses a critical deadlock in WeChat where session expiration leads to a silent, permanent loop without state reload.

## 5. Bugs & Stability
Several high-impact bugs were identified today, with maintainers and contributors actively addressing them:

*   **High Severity - Dream/History Memory Leak:** Disabling the dream cron job freezes the history cursor, leading to infinite prompt size growth ([Issue #4242](https://github.com/HKUDS/nanobot/issues/4242)).
    *   *Fix Status:* Monitored, underlying cursor allocation logic addressed in related PRs (e.g., [PR #4256](https://github.com/HKUDS/nanobot/pull/4256)).
*   **High Severity - WeChat Deadloop:** Expired WeChat tokens are not refreshed after a sleep pause, permanently breaking the channel ([PR #4223](https://github.com/HKUDS/nanobot/pull/4223)). 
    *   *Fix Status:* PR open and pending merge.
*   **Medium Severity - Telegram Fenced Code Breaks:** Long code blocks are split mid-way, ruining HTML rendering ([Issue #4250](https://github.com/HKUDS/nanobot/issues/4250)). 
    *   *Fix Status:* Active fix submitted in [PR #4257](https://github.com/HKUDS/nanobot/pull/4257).
*   **Medium Severity - Microcompaction Estimation Drift:** Token counting in `/status` is inaccurate because `estimate_session_prompt_tokens` bypasses the microcompaction pipeline ([PR #4254](https://github.com/HKUDS/nanobot/pull/4254)).

## 6. Feature Requests & Roadmap Signals
User requests today heavily point toward **multimodality**, **context governance**, and **flexible agent topologies**.

*   **Advanced Multimodality:** Users are asking for native file/image uploads in the UI to interact directly with PDFs and images for summarization and analysis ([Issue #4251](https://github.com/HKUDS/nanobot/issues/4251)).
*   **Agent Collaboration:** [PR #3992](https://github.com/HKUDS/nanobot/pull/3992) introduces a cross-instance message bus, signaling a strategic shift toward multi-agent topologies. 
*   **Dynamic Context Management:** [PR #4238](https://github.com/HKUDS/nanobot/pull/4238) extracts model-message governance into a `ContextGovernor`, moving away from fixed tool-result counts toward true context pressure evaluation.

*Roadmap Prediction:* The next version will likely heavily feature the finalized `transcription` subsystem, enhanced WebUI version tracking, and aggressive context-governance mechanisms (microcompaction).

## 7. User Feedback Summary
Real-world usage reveals a user base pushing NanoBot into complex, multi-model, and multi-channel deployments. 

*   **Pain Points:** Users operating cross-border or with specific privacy needs find the global model configuration too rigid. Channel reliability (specifically long-response splitting and session expiry) remains a friction point for daily power users. 
*   **Satisfaction & Workarounds:** The community is highly technical. Rather than complaining about bugs, users are actively writing complex scripted harnesses, proposing context governors, and submitting regression tests (e.g., user `yu-xin-c`'s prolific contributions today). The demand for a simple "know my version/update" feature ([Issue #4233](https://github.com/HKUDS/nanobot/issues/4233)) shows that NanoBot has a wide deployment base that wants a smoother turnkey experience.

## 8. Backlog Watch
Several strategic PRs have been open for over a week and require maintainer review to prevent stalling:

*   **Agent Collaboration ([PR #3992](https://github.com/HKUDS/nanobot/pull/3992)):** Open since May 24th. This is a massive architectural addition (cross-agent message bus). It needs priority review to determine if it aligns with the core team's v1 roadmap.
*   **Filesystem Security ([PR #4119](https://github.com/HKUDS/nanobot/pull/4119) & [PR #4053](https://github.com/HKUDS/nanobot/pull/4053)):** Open since late May, addressing symlink escapes and read-only path enforcement. Given that security issues are being actively merged in this area (e.g., PR #4221), closing out these open security PRs should be a priority.
*   **Test Harnesses ([PR #3982](https://github.com/HKUDS/nanobot/pull/3982) & [PR #3983](https://github.com/HKUDS/nanobot/pull/3983)):** Scripted agent runner tests open since May 24th. Merging these is crucial to validate the ongoing context and memory changes safely.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-09

## 1. Today's Overview
Hermes Agent is experiencing a period of high community engagement and intense development iteration, as evidenced by 100 GitHub events (50 issues and 50 PRs) in the past 24 hours. The project currently shows a significant backlog, with 43 open issues and 45 open PRs pending triage and review. A substantial portion of the pipeline consists of security, performance, and notification architecture overhauls driven primarily by prolific contributors. Although no new software release was cut today, the sheer volume of bug reports surrounding the Desktop client, gateway integrations, and skill curator logic indicates that the project is actively expanding its user base into new platforms and complex automation use cases.

## 2. Releases
No new releases were recorded today. The latest version available remains **v0.16.0**. Given the current accumulation of critical bug fixes and security enhancements in the open PR queue, a patch release appears likely in the near future.

## 3. Project Progress
Activity today was heavily focused on opening new bug reports and advancing long-standing infrastructure PRs. Only 5 PRs were merged/closed and 7 issues were resolved. 

Key progress includes:
* **Skills Hub Infrastructure:** PR [#42347](https://github.com/NousResearch/hermes-agent/pull/42347) was merged, resolving an issue where whole tabs in the Skills Hub would silently vanish during deployment if GitHub API rate limits were hit.
* **Notification Architecture Overhaul:** A major multi-part effort by contributor `someaka` is progressing to replace direct queue calls with an event-driven system, spanning TUI adapters ([#36089](https://github.com/NousResearch/hermes-agent/pull/36089)), gateway SSE delivery ([#35553](https://github.com/NousResearch/hermes-agent/pull/35553)), and core event plumbing ([#36132](https://github.com/NousResearch/hermes-agent/pull/36132)).
* **Database Reliability:** PR [#36116](https://github.com/NousResearch/hermes-agent/pull/36116) introduces `close()` methods for SQLite classes and fixes a WAL file descriptor leak, while PR [#42039](https://github.com/NousResearch/hermes-agent/issues/42039) (closed today) resolved a duplicate message write anomaly in `state.db`.
* **Security Hardening:** Multiple PRs are actively seeking merge, including shell injection mitigation via `shlex` ([#35545](https://github.com/NousResearch/hermes-agent/pull/35545)), traceback sanitization ([#36140](https://github.com/NousResearch/hermes-agent/pull/36140)), and guards for `quick_commands` exec handlers ([#41559](https://github.com/NousResearch/hermes-agent/pull/41559)).

## 4. Community Hot Topics
The community is highly focused on UI readability, messaging gateway parity, and skill lifecycle management.
* **Dashboard Theming (38 👍, 24 comments):** Issue [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) remains the most active issue. Users are frustrated by poor font choices, low-contrast serif fonts, and lack of functional themes, indicating that UI/UX is a major pain point for daily users.
* **Gateway / Platform Expansion:** There is a strong push for enterprise messaging integration. The Microsoft Teams feature request ([#9512](https://github.com/NousResearch/hermes-agent/issues/9512), 6 comments) and a proposed Microsoft 365 Graph API skill ([#25979](https://github.com/NousResearch/hermes-agent/issues/25979), 4 comments) show demand for native enterprise productivity tooling.
* **Skill Curator Reliability (5 & 4 comments):** Users report that the automated skill curator is too aggressive. Issue [#29912](https://github.com/NousResearch/hermes-agent/issues/29912) highlights active skills being archived without verified consolidation, and [#26326](https://github.com/NousResearch/hermes-agent/issues/26326) notes that cron jobs break when the curator deletes their referenced skills. 

## 5. Bugs & Stability
Several high-priority (P2) bugs affecting core functionality were reported today, alongside specific Desktop client quirks.

* **P2: Gateway Auth & Docker Paths:** 
  * Discord slash commands fail with "not authorized" on confirmation buttons when no allowlist is set ([#42362](https://github.com/NousResearch/hermes-agent/issues/42362)).
  * Gated dashboard mode returns 401s to cookie-authenticated clients ([#42139](https://github.com/NousResearch/hermes-agent/issues/42139)).
  * Docker terminal backend rejects container-mapped paths for media delivery ([#42299](https://github.com/NousResearch/hermes-agent/issues/42299)).
* **P2: Cron & Curator Masking Failures:** 
  * LLM fallback path masks cron script timeouts as `last_status=ok` ([#36845](https://github.com/NousResearch/hermes-agent/issues/36845)).
  * `bump_use` is skipped on script-gated cron skills, causing the curator to mistakenly prune active skills ([#42303](https://github.com/NousResearch/hermes-agent/issues/42303)).
* **P3: Desktop Client Glitches:**
  * Pasting from Excel inserts raw tab characters ([#42256](https://github.com/NousResearch/hermes-agent/issues/42256)).
  * Pasting rich text from Word incorrectly attaches it as an image ([#42280](https://github.com/NousResearch/hermes-agent/issues/42280)).
  * Artifacts view shows Jan 1970 timestamps due to epoch/millisecond constructor mismatch ([#42409](https://github.com/NousResearch/hermes-agent/issues/42409)).

## 6. Feature Requests & Roadmap Signals
Feature requests today signal user needs for deeper enterprise integration, stricter security boundaries, and better data persistence.
* **Decoupled Memory Writes:** Request [#42388](https://github.com/NousResearch/hermes-agent/issues/42388) (already seeing a corresponding PR in [#42410](https://github.com/NousResearch/hermes-agent/pull/42410)) asks to decouple background-review fork write scope from spawn triggers to prevent unauthorized memory modifications.
* **Native Secure Mail Tool:** Users want a shell-free mail tool for untrusted inputs to harden against prompt injection ([#42307](https://github.com/NousResearch/hermes-agent/issues/42307)).
* **Attachment Persistence:** Issue [#41979](https://github.com/NousResearch/hermes-agent/issues/41979) requests that received gateway file attachments be saved persistently rather than silently discarded post-processing.
* *Prediction:* The next version will likely focus heavily on gateway stability, cron/skill lifecycle management, and security hardening based on the current PR pipeline.

## 7. User Feedback Summary
Users are actively pushing Hermes Agent into production environments, particularly leveraging the Docker backend, multi-platform gateways, and automated skill/cron systems. However, this is exposing "rough edges"—especially around authorization logic (e.g., Teams plugin Python version mismatch in [#26083](https://github.com/NousResearch/hermes-agent/issues/26083) and OAuth credential overwrites in [#42102](https://github.com/NousResearch/hermes-agent/issues/42102)). Desktop users appreciate the feature set but are encountering frustrating clipboard and UI formatting bugs. Overall, the sentiment leans toward cautious optimism: users highly value the extensibility (e.g., custom provider support addressed in [#42411](https://github.com/NousResearch/hermes-agent/pull/42411)) but need better QA on cross-platform desktop behaviors and edge-case authentication flows.

## 8. Backlog Watch
* **Setup Failures on Windows:** Issue [#38963](https://github.com/NousResearch/hermes-agent/issues/38963) ("hermes desktop strat fail, it say no git???") and the localized counterpart [#41933](https://github.com/NousResearch/hermes-agent/issues/41933) indicate significant setup friction for Windows users, requiring immediate maintainer triage.
* **Matrix Gateway Support:** The bug preventing Matrix gateway usage from the official Docker image ([#30399](https://github.com/NousResearch/hermes-agent/issues/30399)) has been open for weeks. A community PR ([#42413](https://github.com/NousResearch/hermes-agent/pull/42413)) is available but needs core team review.
* **Missing Telemetry Data:** Issue [#42306](https://github.com/NousResearch/hermes-agent/issues/42306) highlights that the Langfuse observability plugin creates spans but fails to log token counts or costs, breaking a critical production observability use case.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-06-09)

## 1. Today's Overview
PicoClaw demonstrates highly active and healthy development momentum, characterized by a significant focus on code hardening and stability. The community merged 9 Pull Requests in the last 24 hours against 9 new ones, showing a rapid review-and-merge cadence. Much of today's effort revolves around defensive programming—specifically addressing unchecked type assertions and error handling across the codebase. Alongside these reliability improvements, maintainers are actively fixing platform-specific bugs (Windows, RISC-V) and expanding integration capabilities with new messaging gateways.

## 2. Releases
- **nightly: Nightly Build**
  - **Tag:** `v0.2.9-nightly.20260608.875cf4a2`
  - **Notes:** Automated build incorporating the latest main branch updates. Use with caution in production environments. 
  - **Full Changelog**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress
Today saw 9 PRs merged/closed, largely dominated by a systematic code-hardening effort by contributor `chengzhichao-xydt`, alongside critical bug fixes:
- **Error Handling & Refactoring:** Merged a suite of PRs replacing `%v` with `%w` for proper error wrapping ([#3051](https://github.com/sipeed/picoclaw/pull/3051)), explicitly ignoring `Close()` errors to satisfy linters ([#3059](https://github.com/sipeed/picoclaw/pull/3059)), adding safety checks to type assertions ([#3056](https://github.com/sipeed/picoclaw/pull/3056), [#3057](https://github.com/sipeed/picoclaw/pull/3057), [#3058](https://github.com/sipeed/picoclaw/pull/3058)), and replacing standard print statements with structured logging ([#3050](https://github.com/sipeed/picoclaw/pull/3050)).
- **Channel Fixes:** A fix for Telegram location messages being ignored was merged ([#3052](https://github.com/sipeed/picoclaw/pull/3052)), allowing location pins to successfully reach the AI agent pipeline.
- **Platform Stability:** Fixed a critical issue where agent loops caused panics during reload ([#2904](https://github.com/sipeed/picoclaw/pull/2904)).
- **Code Cleanup:** Consolidation PR [#3018](https://github.com/sipeed/picoclaw/pull/3018) was closed, with its changes likely absorbed into the more granular PRs mentioned above.

## 4. Community Hot Topics
- **RISC-V Compatibility ([#2887](https://github.com/sipeed/picoclaw/issues/2887)):** An ongoing bug report regarding the `.deb` version failing to function with OpenAI models on RISC-V architecture. With 9 comments, this represents a highly active discussion, highlighting the community's demand for diverse hardware support.
- **Windows GUI Issues ([#3015](https://github.com/sipeed/picoclaw/issues/3015) & PR [#3061](https://github.com/sipeed/picoclaw/pull/3061)):** Users reported connection failures on Windows, while maintainers are actively addressing poor UX (console flashing) when running the GUI launcher.
- **New Gateway Feature ([#3063](https://github.com/sipeed/picoclaw/pull/3063)):** A new open PR proposing a DeltaChat gateway, signaling community interest in expanding decentralized messaging platform support.

## 5. Bugs & Stability
- **Low/Medium Severity (Windows UX):** Console windows flashing when child processes are executed. A targeted fix is currently open in PR [#3061](https://github.com/sipeed/picoclaw/pull/3061).
- **Medium Severity (Telegram):** Location pins silently ignored. Fixed and merged today in PR [#3052](https://github.com/sipeed/picoclaw/pull/3052) (Closing Issue [#3049](https://github.com/sipeed/picoclaw/issues/3049)).
- **High Severity (Agent Panic):** Agent loops causing panics during provider reload. Addressed and merged via PR [#2904](https://github.com/sipeed/picoclaw/pull/2904), significantly improving runtime stability.
- **High Severity (RISC-V):** The application fails to operate correctly with OpenAI models on RISC-V via the `.deb` package (Issue [#2887](https://github.com/sipeed/picoclaw/issues/2887)). Currently unresolved and awaiting a definitive fix.
- **Potential Regressions:** PR [#3062](https://github.com/sipeed/picoclaw/pull/3062) attempted to fix health checks always returning "not ready" but was closed, meaning this critical infrastructure issue might still be present.

## 6. Feature Requests & Roadmap Signals
- **DeltaChat Integration:** PR [#3063](https://github.com/sipeed/picoclaw/pull/3063) introduces a gateway for DeltaChat, indicating a roadmap leaning towards broader multi-channel messaging support.
- **Multimodal Location Awareness:** The resolution of Issue [#3049](https://github.com/sipeed/picoclaw/issues/3049) proves that spatial/location context is being actively mapped into the AI agent pipeline.
- **Next Version Prediction:** The upcoming `v0.2.9` release will almost certainly be branded as a "Stability & Hardening" release, focusing on zero-panic goals and strict error handling.

## 7. User Feedback Summary
Users operating PicoClaw on niche or embedded hardware (RISC-V, Raspberry Pi OS on ARMv7) are experiencing friction regarding environment compatibility and package viability. Additionally, Windows users running the gateway are encountering poor default behaviors (console flashes) and network token retrieval timeouts. However, overall satisfaction with the multi-channel architecture is high, as evidenced by users seamlessly utilizing diverse platforms like Telegram and QQ. 

## 8. Backlog Watch
- **Stale RISC-V Bug ([#2887](https://github.com/sipeed/picoclaw/issues/2887)):** Open since mid-May and lacking a confirmed fix PR. Needs maintainer attention to ensure the upcoming v0.2.9 release does not alienate the RISC-V community.
- **Matrix User ID Parsing ([#3045](https://github.com/sipeed/picoclaw/pull/3045)):** A fix for `allow_from` silently rejecting Matrix users with standard ID formats. This open PR requires an expedited review as it directly impacts access control and security for Matrix users.
- **Discarded Health Check Fix ([#3062](https://github.com/sipeed/picoclaw/pull/3062)):** Needs investigation to understand why the fix for the readiness endpoint was closed without merging.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-09

## 1. Today's Overview
NanoClaw is currently experiencing a moderate but highly focused day of development, characterized entirely by community-driven pull requests and a newly opened critical bug report. With three pull requests updated and one high-value issue opened in the last 24 hours, the project demonstrates an actively engaged open-source community. The focus of today's activity leans heavily toward security hardening and integration stability, specifically regarding WhatsApp media handling and network egress controls. While there are no new official releases, the influx of security patches indicates that maintainers are likely preparing for a stability-focused release in the near future.

## 2. Releases
There have been no new releases recorded today.

## 3. Project Progress
Development advanced significantly today through two merged/closed pull requests, highlighting active community contributions to core functionality:
*   **Egress Lockdown Implementation:** [PR #2713](https://github.com/nanocoai/nanoclaw/pull/2713) (Closed/Merged) introduced an opt-in egress lockdown feature. By isolating agent containers on a Docker `--internal` network and routing traffic strictly through an attached gateway, this PR successfully advances the project's enterprise security posture.
*   **Guidelines Update:** [PR #2712](https://github.com/nanocoai/nanoclaw/pull/2712) (Closed) was processed, related to project contribution guidelines and operational skills.
*   *Note: [PR #2714](https://github.com/nanocoai/nanoclaw/pull/2714) remains open and under review (detailed below).*

## 4. Community Hot Topics
The community is heavily focused on two primary areas today: tightening container security and fixing broken integration workflows.
*   **Container Network Security:** [PR #2714](https://github.com/nanocoai/nanoclaw/pull/2714) (Open) addresses four distinct security vulnerabilities, including changing webhook binding from `0.0.0.0` to localhost and replacing `Math.random()` with cryptographically secure UUIDs for approval IDs. This highlights the community's ongoing commitment to making NanoClaw production-ready.
*   **Integration Failures:** [Issue #2715](https://github.com/nanocoai/nanoclaw/issues/2715) (Open) sparked attention regarding broken WhatsApp media ingestion, reflecting user reliance on NanoClaw for automated messaging pipelines.

## 5. Bugs & Stability
A high-severity integration bug was reported today affecting agents interacting with WhatsApp users:
*   **High Severity - Unreachable WhatsApp Media:** [Issue #2715](https://github.com/nanocoai/nanoclaw/issues/2715) reports that inbound WhatsApp attachments (images, docs, audio) are saving to an unmounted `DATA_DIR/attachments` directory on the host. Consequently, the agent receives a `/workspace/attachments/...` path that does not exist inside its container, completely breaking the agent's ability to process user-sent media.
    *   *Status:* No fix PRs have been submitted or linked yet. 

## 6. Feature Requests & Roadmap Signals
While no explicit feature requests were opened today, the submitted pull requests act as strong roadmap signals for upcoming capabilities:
*   **Air-Gapped / Strict Network Deployments:** The merge of [PR #2713](https://github.com/nanocoai/nanoclaw/pull/2713) signals that NanoClaw is gearing up to support highly secure, air-gapped environments where agents must operate without direct internet access.
*   **Cryptography & Webhook Hardening:** [PR #2714](https://github.com/nanocoai/nanoclaw/pull/2714) indicates an upcoming shift toward stricter security defaults (e.g., `crypto.randomUUID`), which will likely be a prerequisite for a future major or minor version release.

## 7. User Feedback Summary
User feedback today centers around friction in real-world deployment and integration testing:
*   **Pain Point (Docker Volumes/Mounts):** The core pain point expressed in [Issue #2715](https://github.com/nanocoai/nanoclaw/issues/2715) reveals user frustration with Docker volume mapping for non-trivial integrations. Users expect multi-modal inputs (like WhatsApp audio and images) to work seamlessly out-of-the-box via the agent's workspace, rather than having to manually troubleshoot host-to-container mount paths.

## 8. Backlog Watch
While today's issues are fresh, immediate attention is required to prevent user workflow blockages:
*   **Attention Needed for WhatsApp Media:** [Issue #2715](https://github.com/nanocoai/nanoclaw/issues/2715) needs maintainer triage. Given that it completely breaks multi-modal WhatsApp usage, it should be prioritized. A patch ensuring `DATA_DIR/attachments` is properly mounted into the container inbox is required.
*   **Security Audit PR:** [PR #2714](https://github.com/nanocoai/nanoclaw/pull/2714) requires maintainer review. Because it changes default webhook binding behaviors (`127.0.0.1` vs `0.0.0.0`), it needs careful evaluation before merging to avoid breaking existing external deployments.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-09

## 1. Today's Overview
The IronClaw project is experiencing exceptionally high development activity, with 84 total issues and pull requests updated in the last 24 hours. The core team and contributors are heavily focused on the "Reborn" architectural overhaul, pushing forward production readiness, OpenAI API compatibility, and multi-tenant auth infrastructure. With 24 PRs merged/closed and multiple new epics opened, the project is in a phase of aggressive feature expansion and architectural cutover, while simultaneously addressing emerging stability and UX issues in recently shipped channels like Telegram, Slack, and WeCom.

## 2. Releases
No new releases were cut today. The main open release PR ([#3708](https://github.com/nearai/ironclaw/pull/3708)) tracks the upcoming `0.29.x` / `0.5.0` milestone, which includes API-breaking changes across `ironclaw_common`, `ironclaw_skills`, and other core crates.

## 3. Project Progress
Merged and closed PRs today represent major forward movement in the Reborn product workflow and operational stability:
- **Reborn OpenAI API Compatibility:** `chat/completions` and `/responses` are being natively routed through the Reborn `ProductWorkflow` via merged foundations and new open PRs ([PR #4495](https://github.com/nearai/ironclaw/pull/4495), [PR #4552](https://github.com/nearai/ironclaw/pull/4552), [PR #4546](https://github.com/nearai/ironclaw/pull/4546), [PR #4571](https://github.com/nearai/ironclaw/pull/4571)). 
- **LLM Tool Call Parsing:** The framework for better tool argument error handling was merged in Phase A ([PR #4522](https://github.com/nearai/ironclaw/pull/4522)), with Phase B (`arguments_parse_error` field) actively being plumbed in ([PR #4576](https://github.com/nearai/ironclaw/pull/4576)).
- **Codex Model Discovery Fix:** Hardcoded client versions restricting new models (like GPT-5.5) were fixed ([PR #4566](https://github.com/nearai/ironclaw/pull/4566)).
- **Durable State:** Slack host-beta workflow state persistence and outbound delivery defaults were implemented ([PR #4528](https://github.com/nearai/ironclaw/pull/4528), [PR #4574](https://github.com/nearai/ironclaw/pull/4574)).
- **Bug Fixes:** System `ResourceScope` JSON round-trip deserialization errors were resolved ([PR #4523](https://github.com/nearai/ironclaw/pull/4523)), and docs/trigger delivery boundaries were cleaned up ([PR #4573](https://github.com/nearai/ironclaw/pull/4573), [PR #4579](https://github.com/nearai/ironclaw/pull/4579)).

## 4. Community Hot Topics
The most actively discussed items revolve around the **Reborn cutover** and **production auth/security**:
- **Production Readiness Epics:** [Issue #3026](https://github.com/nearai/ironclaw/issues/3026) (Reborn production wiring) and [Issue #3288](https://github.com/nearai/ironclaw/issues/3288) (Capability lifecycle admin parity) remain central nodes of architectural debate.
- **Auth & SSO:** The carry-over of SSO (Google/GitHub/NEAR) into WebChat v2 generated significant discussion ([Issue #4116](https://github.com/nearai/ironclaw/issues/4116) - closed, with follow-up auth work in [Issue #4175](https://github.com/nearai/ironclaw/issues/4175) regarding OAuth PKCE HA safety).
- **Security & Hooks:** Third-party hook activation hardening ([Issue #3957](https://github.com/nearai/ironclaw/issues/3957)) and `SecurityAuditSink` adoption ([Issue #3959](https://github.com/nearai/ironclaw/issues/3959)) are highly active, indicating the team is aggressively closing security gaps before enabling 3rd-party hooks in multi-tenant prod.

## 5. Bugs & Stability
Several user-facing and operational bugs were reported today, though most have immediate PR fixes:
1. **Critical/Auth:** OAuth (Google/GitHub) users cannot chat and are looped to `/welcome` ([Issue #4536](https://github.com/nearai/ironclaw/issues/4536)). Fixed via SSO carry-over.
2. **High/Regression:** Telegram creates new conversations instead of continuing existing ones after `0.28.2 -> 0.29.1` upgrade ([Issue #4556](https://github.com/nearai/ironclaw/issues/4556)).
3. **Medium/Runtime:** Hosted agents randomly return `403 Forbidden` while instances remain running in CrabShack ([Issue #4557](https://github.com/nearai/ironclaw/issues/4557)). 
4. **Medium/API:** Chat completions serialize duplicate `model` fields when tools are included, causing DeepSeek API 400 errors ([Issue #4548](https://github.com/nearai/ironclaw/issues/4548)).
5. **Low/Logic:** `google_calendar list_events` returns oldest events instead of upcoming ones. Fix provided by the community in [PR #4578](https://github.com/nearai/ironclaw/pull/4578).
6. **CI:** Nightly E2E tests failed ([Issue #4108](https://github.com/nearai/ironclaw/issues/4108)).

## 6. Feature Requests & Roadmap Signals
Recent epics signal a massive push toward **self-serve enterprise features** and **operator tooling**:
- **Self-Serve Secrets & Credentials:** [Issue #4545](https://github.com/nearai/ironclaw/issues/4545) requests self-serve secret setup for user-generated tools, while [Issue #4543](https://github.com/nearai/ironclaw/issues/4543) requests runtime service profiles for credentialed HTTP egress.
- **Operator Diagnostics:** [Issue #4533](https://github.com/nearai/ironclaw/issues/4533) introduces an epic for Reborn operator setup, config, and service lifecycle management to fully detach from V1 dependencies.
- **Approvals Parity:** [Issue #4539](https://github.com/nearai/ironclaw/issues/4539) requests a full product workflow for human-in-the-loop tool approvals.
- **Subagent Planner:** [PR #4572](https://github.com/nearai/ironclaw/pull/4572) replaces the `researcher` subagent flavor with a structured `planner`, indicating a shift toward more robust multi-agent orchestration. 
*Prediction:* The next version will heavily highlight OpenAI Responses API parity, robust Slack/Telegram operational states, and sub-agent planning capabilities.

## 7. User Feedback Summary
Users are actively testing the `0.29.x` staging and production releases, specifically pushing the boundaries of multilingual support and channel integrations. 
- **Pain Points:** Users are experiencing friction with internationalization, noting incomplete coverage and runtime crashes in the WebUI v2 static frontend ([Issue #4554](https://github.com/nearai/ironclaw/issues/4554)). WeCom channel validation also revealed formatting and reliability bugs ([Issue #4191](https://github.com/nearai/ironclaw/issues/4191)).
- **Use Cases:** Users are relying heavily on IronClaw for integrations with external services (DeepSeek, Google Calendar, Slack, WeCom, Telegram) and are eager to connect custom tools via APIs requiring credentials (Crisp, Stripe).
- **Overall Sentiment:** While the velocity is high, the v1-to-Reborn transition is causing upgrade turbulence (e.g., Telegram conversation splits, SSO breakages). However, fast issue triage and immediate PR fixes show strong maintainership.

## 8. Backlog Watch
- **OpenAI API Idempotency & Refs:** [Issue #4443](https://github.com/nearai/ironclaw/issues/4443) is a closed prerequisite, but its dependent PRs for wiring the actual durable identity layer are still actively being refined.
- **Reborn Postgres Config:** [Issue #4551](https://github.com/nearai/ironclaw/issues/4551) needs maintainer attention to wire standalone `ironclaw-reborn` Postgres storage config for production setups.
- **WeCom Validation:** [Issue #4191](https://github.com/nearai/ironclaw/issues/4191) remains open with several acknowledged staging findings; needs dedicated PRs to address formatting and reconnection issues before full prod rollout.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest (2026-06-09)

Here is the structured analysis for the LobsterAI project based on the GitHub data from the last 24 hours.

## 1. Today's Overview
LobsterAI experienced a highly active day, characterized by a massive merging of 18 Pull Requests with no new issues reported. The development focus was heavily skewed toward improving desktop client reliability, specifically refining the new local authentication callback flow and introducing a robust user data migration/backup system. The simultaneous resolution of multiple long-standing "stale" PRs indicates a concerted effort by the maintainers to clear technical debt and push pending community contributions into the main branch.

## 2. Releases
**None.** 
No new official versions were cut in the last 24 hours. The substantial volume of merged code suggests that the project is likely staging a significant release in the near future.

## 3. Project Progress
The project saw 18 merged/closed PRs, driven primarily by core maintainers (`fisherdaddy`, `liuzhq1986`) and featuring several revived community PRs by contributors such as `MaoQianTu` and `swuzjb`. 

*   **Authentication Overhaul:** Advancement of the desktop login experience via a new localhost callback flow ([PR #2122](https://github.com/netease-youdao/LobsterAI/pull/2122)), complete with Windows focus-tricking to force the app to the foreground post-login ([PR #2127](https://github.com/netease-youdao/LobsterAI/pull/2127)) and diagnostic logging ([PR #2129](https://github.com/netease-youdao/LobsterAI/pull/2129)).
*   **Data Portability:** Introduction of a complete user data backup and restore service ([PR #2125](https://github.com/netease-youdao/LobsterAI/pull/2125)), with immediate follow-ups to ensure runtime lock files are preserved during restoration ([PR #2126](https://github.com/netease-youdao/LobsterAI/pull/2126)) and network directories are excluded ([PR #2128](https://github.com/netease-youdao/LobsterAI/pull/2128)).
*   **Stale PR Bloodbath:** The maintainers aggressively merged 7 previously stalled PRs from early April. This included fixes for silent IM notification failures in scheduled tasks ([PR #1510](https://github.com/netease-youdao/LobsterAI/pull/1510)), QQ Bot UI inputs ([PR #1514](https://github.com/netease-youdao/LobsterAI/pull/1514)), log export timeouts ([PR #1515](https://github.com/netease-youdao/LobsterAI/pull/1515)), and Copilot OAuth token loss ([PR #1517](https://github.com/netease-youdao/LobsterAI/pull/1517)).
*   **Settings & UI Enhancements:** Addition of dynamic model list fetching straight from provider APIs ([PR #1522](https://github.com/netease-youdao/LobsterAI/pull/1522)) and color-coding for cowork sessions ([PR #1526](https://github.com/netease-youdao/LobsterAI/pull/1526)).

## 4. Community Hot Topics
Because 0 new issues were opened today, "hot topics" are defined by the most impactful recently closed community PRs:

*   **Dynamic Model Fetching ([PR #1522](https://github.com/netease-youdao/LobsterAI/pull/1522)):** With LLM providers constantly releasing new models (e.g., GLM-5.1), users were frustrated by manual entry. This merge reveals a strong community need for the client to dynamically pull available models directly from provider APIs (`GET /v1/models`).
*   **OpenClaw Gateway Status ([PR #2123](https://github.com/netease-youdao/LobsterAI/pull/2123)):** Surfacing the internal OpenClaw gateway URL and status to the user points to developers actively trying to integrate external tools or troubleshoot local agent connections.

## 5. Bugs & Stability
Several notable bugs were addressed today, ranging from moderate annoyances to critical data-loss edge cases:

1.  **GitHub Copilot Token Silent Loss ([PR #1517](https://github.com/netease-youdao/LobsterAI/pull/1517)):** *High Severity.* Closing the settings panel during OAuth polling caused successful tokens to be silently dropped, forcing re-authentication. (Fixed).
2.  **Log Export Timeout ([PR #1515](https://github.com/netease-youdao/LobsterAI/pull/1515)):** *High Severity.* Serial DEFLATE compression of massive log files (up to hundreds of MBs) caused a 30-second timeout crash. (Fixed via optimization).
3.  **Provider Model Deletion Override ([PR #2117](https://github.com/netease-youdao/LobsterAI/pull/2117)):** *Moderate Severity.* User-deleted default models were incorrectly re-injected upon app restart. (Fixed by tracking migration versions).
4.  **Oversized OpenClaw Image Payloads ([PR #2110](https://github.com/netease-youdao/LobsterAI/pull/2110)):** *Moderate Severity.* Sending images over `chat.send` could crash the gateway. (Fixed via pre-estimation and error classification).
5.  **Windows Post-Login Focus ([PR #2127](https://github.com/netease-youdao/LobsterAI/pull/2127)):** *Low Severity.* Browser login completed, but the Electron app remained hidden in the taskbar. (Fixed via always-on-top toggling).

## 6. Feature Requests & Roadmap Signals
The merged PRs provide clear signals about the immediate product roadmap:
*   **Portable User Profiles:** The backup/restore migration feature ([PR #2125](https://github.com/netease-youdao/LobsterAI/pull/2125)) heavily implies that LobsterAI is preparing for a major version upgrade or aiming to support enterprise users who need to migrate profiles between machines.
*   **Seamless Desktop Auth:** The implementation of local `127.0.0.1` callback servers ([PR #2122](https://github.com/netease-youdao/LobsterAI/pull/2122)) indicates a push toward a frictionless, native desktop experience that bypasses OS browser popups.
*   **Rich Error Diagnostics:** Enhancements to connection testing feedback ([PR #1524](https://github.com/netease-youdao/LobsterAI/pull/1524)) show a maturing focus on user self-service, allowing users to debug their own API endpoints without opening GitHub issues.

## 7. User Feedback Summary
Analyzing the context of the closed PRs reveals a clear picture of the user base:
*   **Use Cases:** Users are heavily leveraging the client for multi-platform Bot integrations (QQ, Feishu, DingTalk) and scheduled tasks.
*   **Pain Points:** Configuration and initial setup are still friction points. Users struggle with hardcoded model lists, silent authentication failures, and vague "Connection Failed" error messages. 
*   **Satisfaction:** While the volume of bug fixes indicates the software still has rough edges, the fact that these issues are being thoroughly addressed with i18n support and targeted UI improvements shows high responsiveness to community needs.

## 8. Backlog Watch
*   **Dependency Updates:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (bumping `electron` from v40.2.1 to v42.3.3) remains **Open**. It was updated today but not merged, likely due to the need for extensive QA testing given the size of the Electron framework bump.
*   **Zero Open Issues:** There are currently 0 open issues reported in the last 24 hours. For a healthier ecosystem, maintainers might want to look at converting some of the newly merged PRs (especially the dynamic model fetching) into official documentation updates to guide users.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI) Project Digest: 2026-06-09

## 1. Today's Overview
The TinyClaw (TinyAGI) project is currently experiencing a low-activity phase, with no new releases, issue updates, or merged code in the past 24 hours. Activity over the last day has been limited to the creation of a single new pull request. While there are no signs of active feature development or community discussions happening today, the open pull request indicates that contributors are still working on foundational improvements. The overall project status remains stable, with current maintainer focus seemingly directed towards developer experience and installation reliability.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
No pull requests were merged or closed today, meaning no new features or fixes have officially advanced into the main codebase over the last 24 hours.

## 4. Community Hot Topics
There are no active community hot topics or discussions today, as there have been no new comments, issue updates, or reactions across the repository in the past 24 hours.

## 5. Bugs & Stability
While no bugs were formally reported via Issues today, a contributor has identified a significant installation friction point and submitted a fix:
*   **Installation/Native Addon Compilation Issue:** Users are experiencing setup failures on fresh installations because `better-sqlite3` (a core database dependency requiring C++ compilation) does not build automatically. 
    *   **Status:** A fix is currently proposed in open Pull Request [#280](https://github.com/TinyAGI/tinyagi/pull/280).
    *   **Proposed Solution:** The PR introduces a `postinstall` script to automatically rebuild the addon, eliminating the need for users to manually run `npm rebuild better-sqlite3`.
    *   **Severity:** Medium (Blocks fresh deployments and degrades the initial developer experience, though it does not impact already running instances).

## 6. Feature Requests & Roadmap Signals
There are no new feature requests or explicit roadmap signals from the community today. However, the existence of [PR #280](https://github.com/TinyAGI/tinyagi/pull/280) signals an ongoing effort to streamline the setup process. Should this PR be merged, it will likely be bundled into the next minor release to improve out-of-the-box stability.

## 7. User Feedback Summary
No direct user feedback (issues or comments) was submitted today. However, the context provided by [PR #280](https://github.com/TinyAGI/tinyagi/pull/280) highlights an underlying user pain point: the local setup process is prone to breaking due to Node.js runtime mismatches with prebuilt binaries. Users are expressing a need (implicitly, via the contributor's fix) for a "plug-and-play" installation experience that abstracts away manual native module compilation.

## 8. Backlog Watch
With zero activity on existing issues today, the repository appears to have a quiet backlog. Key areas for maintainers to monitor:
*   **Pending Action Required:** [PR #280](https://github.com/TinyAGI/tinyagi/pull/280) requires a maintainer review. Given that it directly addresses a barrier to entry for new users, testing and merging this PR should be prioritized to keep the project accessible.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-06-09

## 1. Today's Overview
CoPaw (internally referenced as QwenPaw) is experiencing a highly active development cycle, evidenced by 92 total issues and pull requests updated in the past 24 hours. The community is vibrantly engaged, with 26 open issues actively generating discussion and 21 open pull requests pending review. While there are no new official releases today, maintainers and contributors are aggressively merging bug fixes, porting the system to AgentScope 2.0, and shipping new console features. The project's stability is currently being stress-tested by its growing user base, particularly regarding multi-channel integrations (WeCom, Feishu, OneBot) and memory management, which are generating the highest volume of reports. Overall, project health is strong, characterized by rapid iteration and responsive issue triage.

## 2. Releases
No new releases were published today. The community actively continues to iterate on the `1.1.10` / `1.1.11` versions, with several PRs laying the groundwork for a forthcoming patch or minor release. 

## 3. Project Progress
While 23 PRs were merged or closed today, the open PR pipeline shows where the project's architecture is actively advancing:
*   **AgentScope 2.0 Migration:** Core backend readiness for AgentScope 2.0 is progressing, highlighted by [PR #5018](https://github.com/agentscope-ai/QwenPaw/pull/5018) which successfully bridges QwenPaw’s `ModelInfo` into AgentScope's native `compress_context()`.
*   **Plugin Ecosystem Expansion:** Infrastructure for a richer plugin ecosystem is being built. [PR #5023](https://github.com/agentscope-ai/QwenPaw/pull/5023) introduces a "Plugin Market" integrated with AgentScope Platform, while [PR #4997](https://github.com/agentscope-ai/QwenPaw/pull/4997) establishes a frontend extension point registry system for plugins.
*   **UX & Console Upgrades:** Improvements to the desktop app include a Tauri auto-updater ([PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669)), collapsible code blocks ([PR #4345](https://github.com/agentscope-ai/QwenPaw/pull/4345)), and customized console columns ([PR #4975](https://github.com/agentscope-ai/QwenPaw/pull/4975)).
*   **System Stability:** Fixing session logic and preventing junk data left behind by warmup sessions ([PR #5027](https://github.com/agentscope-ai/QwenPaw/pull/5027)) and fixing file naming duplication ([PR #5026](https://github.com/agentscope-ai/QwenPaw/pull/5026)).

## 4. Community Hot Topics
*   **Learning from Competitors / Agentic Self-Evolution:** [Issue #5017](https://github.com/agentscope-ai/QwenPaw/issues/5017) (👍 1, 7 comments) sparked a deep discussion on borrowing "Learning Loop" concepts from the trending Hermes Agent project. Similarly, [Issue #4994](https://github.com/agentscope-ai/QwenPaw/issues/4994) (👍 1, 2 comments) advocates for a self-evolving memory system. *Analysis:* Users are pushing QwenPaw beyond simple prompt-response loops toward autonomous skill creation and advanced memory management.
*   **Upgrading to AgentScope 2.0:** [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) (👍 2, 6 comments) outlines the breaking changes needed to migrate from 1.x. *Analysis:* This is a major architectural milestone that maintainers are actively planning, which will unlock better runtime models but requires careful execution.
*   **File & Workspace Management:** [Issue #4408](https://github.com/agentscope-ai/QwenPaw/issues/4408) (7 comments) requests hiding working directory files into a dedicated `.qwenpaw` folder. *Analysis:* As the product scales to less technical users, clean filesystem abstraction is becoming a high-priority UX requirement.

## 5. Bugs & Stability
The community reported several high-severity bugs today, primarily surrounding channel integrations, memory handling, and local LLM compatibility:
1.  **WeChat iLink Context Expiration:** [Issue #4477](https://github.com/agentscope-ai/QwenPaw/issues/4477) (15 comments) reports failed cron push notifications due to a lack of retry logic when `context_token` expires. 
2.  **Memory Compaction Crashes:** [Issue #5019](https://github.com/agentscope-ai/QwenPaw/issues/5019) causes an `AttributeError` crash when the system receives a string instead of a dict during memory compression. [PR #5021](https://github.com/agentscope-ai/QwenPaw/pull/5021) addresses context compaction ignoring max input lengths.
3.  **Channel Process Accumulation & Port Binding:** WeCom custom channels break监听 on save ([Issue #4877](https://github.com/agentscope-ai/QwenPaw/issues/4877)), and OneBot fails to release WebSocket ports on restart ([Issue #4926](https://github.com/agentscope-ai/QwenPaw/issues/4926)). MCP server processes also accumulate ([Issue #4834](https://github.com/agentscope-ai/QwenPaw/issues/4834)), though a fix is proposed in [PR #5014](https://github.com/agentscope-ai/QwenPaw/pull/5014).
4.  **Local Model Stalling:** Users report that local models (Qwen 3.6-27B via vLLM) cause infinite loading in v1.1.9+ ([Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989)), and Coding Plan models get stuck ([Issue #5003](https://github.com/agentscope-ai/QwenPaw/issues/5003)).

## 6. Feature Requests & Roadmap Signals
Based on today's issues and PRs, the roadmap is heavily leaning into multi-modal support, plugin expansion, and developer experience:
*   **Independent Visual Models:** [Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992) (👍 1) requests a visual fallback model to translate images to text for non-multimodal main models. This signals strong user demand for cheaper/more flexible multi-modal pipelines.
*   **Goal Mode & PRD Management:** [PR #4443](https://github.com/agentscope-ai/QwenPaw/pull/4443) introduces session-scoped standing objectives (`/goal`), and [PR #4902](https://github.com/agentscope-ai/QwenPaw/pull/4902) adds a built-in PRD CRUD tool, moving QwenPaw closer to a complete AI development platform.
*   **Silent Tool Execution:** [Issue #4838](https://github.com/agentscope-ai/QwenPaw/issues/4838) requests the suppression of final text responses after tool calls, indicating users are building strict automated pipelines where conversational "chatter" is undesirable.

## 7. User Feedback Summary
*   **Pain Points:** Windows users are frustrated by console windows flashing on command execution ([Issue #4123](https://github.com/agentscope-ai/QwenPaw/issues/4123)). Desktop UI performance on Windows degrades significantly during task execution ([Issue #5015](https://github.com/agentscope-ai/QwenPaw/issues/5015)), pointing to frontend resource management issues. Image handling remains a pain point, with bugs involving infinite compression loops ([Issue #4895](https://github.com/agentscope-ai/QwenPaw/issues/4895)) and jittery preview UI ([Issue #4993](https://github.com/agentscope-ai/QwenPaw/issues/4993)).
*   **Satisfaction:** Users heavily praise the out-of-the-box experience and robust localizations. First-time contributors are actively participating (e.g., [PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622], [PR #4902](https://github.com/agentscope-ai/QwenPaw/pull/4902)), indicating a healthy, welcoming open-source community.

## 8. Backlog Watch
*   **AgentScope 2.0 Migration:** [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) requires continuous maintainer focus as it touches the entire backend architecture.
*   **Multi-Agent Console Stability:** [Issue #5016](https://github.com/agentscope-ai/QwenPaw/issues/5016) highlights unreliability in multi-agent chat registration/display, a critical feature for advanced users that needs UI/API synchronization fixes.
*   **Sub-agent Infinite Polling:** [Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) (Two subagents causing infinite rapid polling) represents a severe architectural edge-case that locks up the agent and prevents interruption via Feishu. This needs priority triage.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-09

## 1. Today's Overview
ZeroClaw is currently experiencing a phase of intense architectural iteration and active bug fixing, as evidenced by 50 updated issues and 50 updated pull requests in the last 24 hours. The open-source AI assistant project is pushing towards a major architectural milestone (v0.9.0), focusing heavily on pluggable security providers, extensible memory strategies, and advanced desktop capabilities. While the high number of open PRs (39) against merged/closed ones (11) indicates rapid feature development, it also highlights a surge in complexity across the runtime, channel management, and tool execution layers. Overall community engagement is robust, with detailed RFCs and deep-dive debugging sessions dominating the current project lifecycle.

## 2. Releases
No new releases were recorded today. The project is likely consolidating its extensive backlog of open PRs and RFCs for an upcoming version bump (frequently referenced in issues as v0.9.0).

## 3. Project Progress
While integration and merging are ongoing, 11 PRs were closed or merged in the last 24 hours. Key advancements include:
*   **Channel Resilience:** PR [#7388](https://github.com/zeroclaw-labs/zeroclaw/pull/7388) introduced vital isolation for Matrix multi-agent setups, preventing cross-bot session leakage.
*   **Tool & Runtime Stability:** PR [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129) (targeting Issue [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627)) fixed a high-severity bug where the `file_write` tool silently failed in ephemeral workspaces. Additionally, PR [#7402](https://github.com/zeroclaw-labs/zeroclaw/pull/7402) prevented gateway crashes during transient `accept()` errors.
*   **Formatting & Fixes:** Merged efforts to preserve Markdown fences in Telegram ([#6701](https://github.com/zeroclaw-labs/zeroclaw/pull/6701)) and sanitize tool names to prevent provider regex rejections ([#7399](https://github.com/zeroclaw-labs/zeroclaw/pull/7399)).

## 4. Community Hot Topics
The most active discussions revolve around system architecture, security, and local-first capabilities:
*   **MCP Tool Filtering Bug (7 comments):** Issue [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) is generating significant debate. The `tool_filter_groups` config is currently a "no-op" for real MCP tools due to a prefix-check bug, severely limiting tool execution control.
*   **Computer-Use RFC (6 comments):** Users are actively discussing Issue [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909), proposing native desktop GUI interaction (mouse/keyboard events, screenshots) to compete with OpenAI Codex.
*   **Security & Command Execution RFCs (4 comments each):** Pluggable security providers ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)) and a tiered confirmation system for high-risk shell commands ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)) are heavily requested.
*   **Local-First Mode (3 comments, 2 👍):** Issue [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) highlights a strong community desire for compact prompting and strict parsing for small/local models (like Ollama).

## 5. Bugs & Stability
Several high-severity bugs affecting runtime stability and provider compatibility were updated today:
*   **Memory & OOM Issues:** Issue [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) reports consecutive Out-of-Memory crashes on WSL2, leading to data loss (Severity: S0).
*   **Provider Compatibility (S1):** Gemini clients are completely blocked due to an OAuth failure ([#4879](https://github.com/zeroclaw-labs/zeroclaw/issues/4879)) and a history serializer invariant violation ([#6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302)). MiniMax providers are also broken due to context compression dropping tool calls ([#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)).
*   **Runtime Configuration Misfires:** Critical configurations are being silently ignored, including `max_tool_iterations` ([#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877)) and full autonomy shell commands ([#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)).
*   *(Silver lining: Corresponding PRs for several of these issues, such as [#7129](https://github.com/zeroclaw-labs/zeroclaw/pull/7129), are actively open and under review).*

## 6. Feature Requests & Roadmap Signals
The project is clearly laying the groundwork for **v0.9.0**, which appears to be a security and extensibility-focused release:
*   **Authentication & Security:** OIDC Authentication Provider support is officially tracked for v0.9.0 ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)).
*   **Memory Architecture:** The Memory Lifecycle Policy is being successfully decoupled from storage backends via the new `MemoryStrategy` trait ([#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850), advanced via PR [#7234](https://github.com/zeroclaw-labs/zeroclaw/pull/7234)).
*   **Advanced Plugin System:** Introduction of WASI Component Model WIT interface files ([#7060](https://github.com/zeroclaw-labs/zeroclaw/pull/7060)) and namespaced plugin tools ([#7337](https://github.com/zeroclaw-labs/zeroclaw/pull/7337)) suggest a highly robust, sandboxed plugin ecosystem is imminent.

## 7. User Feedback Summary
Real-world users are expressing frustration with configuration discovery and provider inconsistencies:
*   **Configuration UX is Fragmented:** Users are struggling with hidden "no-op" configs. For instance, users expected `runtime_profiles` to govern tool iterations, only to find it only works under `agents` ([#6877](https://github.com/zeroclaw-labs/zeroclaw/issues/6877)). Documentation improvements ([#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269)) are heavily requested.
*   **Silent Failures vs. Loud Errors:** Feedback on Issue [#4627](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) praised the shift toward "failing loudly" rather than reporting false successes (e.g., invisible file writes).
*   **Channel Reliability:** Operators relying on multi-channel deployments (WhatsApp, Telegram, Matrix) report invisible message drops ([#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)) and broken prompt caching ([#6360](https://github.com/zeroclaw-labs/zeroclaw/issues/6360)), indicating that channel reliability remains a primary pain point for active deployments.

## 8. Backlog Watch
*   **High-Priority Bugs Needing Maintainer Triage:** The LID-based contact silent message drops in WhatsApp ([#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)) and the context compression failure with OpenAI-compatible providers ([#6361](https://github.com/zeroclaw-labs/zeroclaw/issues/6361)) are severely impacting users and require expedited reviews.
*   **Stalled Enterprise Features:** Cross-channel TOTP gating for destructive commands ([#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767)) and MCP resource/prompt support ([#4467](https://github.com/zeroclaw-labs/zeroclaw/issues/4467), 4 👍) have been open for months and are highly requested by the community for secure, enterprise-grade deployments.
*   **Bulk Revert Audit:** Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) reminds maintainers that 153 commits are still lost from a bulk revert months ago; this needs structured recovery to prevent regressions.

</details>