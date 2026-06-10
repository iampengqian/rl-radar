# OpenClaw Ecosystem Digest 2026-06-11

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-10 22:33 UTC

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

# OpenClaw Project Digest — 2026-06-11

## 1. Today's Overview
The OpenClaw project is currently experiencing an exceptionally high volume of activity, with **500 issues** and **500 pull requests** updated in the last 24 hours. However, the ratio of closed issues (27) to open issues (473), and merged PRs (78) to open PRs (422), indicates a massive backlog of active development and community requests that are accumulating faster than the maintainers can resolve them. The release of `v2026.6.6-beta.1` highlights a major strategic focus on tightening security boundaries across the board. Beneath the surface, the project is undergoing a massive internal architectural overhaul—specifically migrating session and transcript state to SQLite via an accessor seam—to resolve long-standing stability and message-loss bugs.

## 2. Releases
**Version: `v2026.6.6-beta.1` (Released recently, active today)**
*   **Changes:** Security boundaries have been substantially tightened across transcripts, sandbox binds, host environment inheritance, MCP stdio, Codex HTTP access, native search policy, elevated sender checks, deleted-agent ACP bypasses, loopback tools, Discord moderation, and Teams group access.
*   **Migration Notes:** Administrators should review default sandbox and native search policies, as legacy configurations may be unintentionally restrictive under the new boundary enforcements.

## 3. Project Progress
Today's development is heavily defined by a synchronized, multi-PR architectural refactor aimed at overhauling state management:
*   **The SQLite Migration (Path 3.1b / 3.2):** Maintainer `jalehman` opened/reviewed a massive chain of PRs ([#90463](https://github.com/openclaw/openclaw/pull/90463), [#89178](https://github.com/openclaw/openclaw/pull/89178), [#89201](https://github.com/openclaw/openclaw/pull/89201), [#89519](https://github.com/openclaw/openclaw/pull/89519)) to introduce a storage-neutral session accessor seam. This will replace direct file I/O with SQLite, aiming to resolve systemic race conditions.
*   **Message Delivery Reliability:** `Jerry-Xin` submitted significant fixes for event-loop stalls ([#89040](https://github.com/openclaw/openclaw/pull/89040)) and silent message loss from `EmbeddedAttemptSessionTakeoverError` ([#89039](https://github.com/openclaw/openclaw/pull/89039)).
*   **Auth & Cloud Providers:** `ferminquant` pushed a fix to clear stale provider cooldowns for model fallbacks ([#87697](https://github.com/openclaw/openclaw/pull/87697)), and `849261680` fixed routing for Anthropic thinking profiles ([#92040](https://github.com/openclaw/openclaw/pull/92040)).

## 4. Community Hot Topics
*   **Tool Call Text Leaking ([#25592](https://github.com/openclaw/openclaw/issues/25592)):** With 31 comments, this P0 security/UX issue highlights a critical underlying need: the community heavily uses OpenClaw across multiple chat platforms (Slack, iMessage) and needs strict isolation between the agent's internal reasoning/error-logging and user-facing outbound messages.
*   **Android APK Requests ([#9443](https://github.com/openclaw/openclaw/issues/9443)):** With 25 comments and growing traction, users want a streamlined mobile experience without needing to compile the `apps/android` directory from source, indicating a strong demand for on-the-go management of local agents.
*   **Direct Exec Mode for Cron Jobs ([#18160](https://github.com/openclaw/openclaw/issues/18160)):** Currently, cron jobs require an `agentTurn` (LLM interpretation), which is costly, slow, and prone to timing out. With 12 comments and 10 upvotes, the community clearly needs deterministic, lightweight, script-based cron execution for routine tasks.

## 5. Bugs & Stability
OpenClaw is wrestling with significant stability issues related to concurrency and state management:
*   **P0: Signal Daemon Orphaned Processes ([#22676](https://github.com/openclaw/openclaw/issues/22676)):** A race condition on `SIGUSR1` restarts causes the signal daemon to spawn overlapping instances that fail to send messages. *No active fix PR linked.*
*   **P0: Heartbeat Blocking Telegram ([#40611](https://github.com/openclaw/openclaw/issues/40611)):** A previous fix for heartbeat drift introduced aggressive retries that block Telegram message handling during active conversations. *Linked PR exists.*
*   **P0: Write Tool Data Loss ([#40001](https://github.com/openclaw/openclaw/issues/40001)):** Because the `write` tool lacks an `append` mode, concurrent cron sessions silently overwrite shared memory files. *Linked PR exists.*
*   **P1: Control UI Secure Context ([#32473](https://github.com/openclaw/openclaw/issues/32473)):** A regression now requires HTTPS/localhost for device identity, breaking Docker hosts using HTTP. *No active fix PR linked.*

## 6. Feature Requests & Roadmap Signals
*   **Masked Secrets ([#10659](https://github.com/openclaw/openclaw/issues/10659)):** Users want agents to *use* API keys without being able to *see* them (preventing prompt-injection leaks). Given the new security focus in `v2026.6.6-beta.1`, this is a strong candidate for the next release.
*   **Pre-response Enforcement Hooks ([#13583](https://github.com/openclaw/openclaw/issues/13583)):** High-stakes users want "hard gates" that mechanically prevent the agent from responding until specific tools are executed. 
*   **Subagent Lifecycle Observability ([#38626](https://github.com/openclaw/openclaw/issues/38626)):** As multi-agent architectures grow, operators need deterministic tracking of spawned subagents. This aligns well with the ongoing `sessions_spawn` execution backend placement work seen in PR [#84758](https://github.com/openclaw/openclaw/pull/84758).

## 7. User Feedback Summary
The overarching sentiment from the user base is a mixture of excitement for the project's capabilities and frustration with the brittleness of multi-platform messaging. Users deploying OpenClaw in production are hitting painful edge cases: Dockerized sandboxes default to read-only states ([#37634](https://github.com/openclaw/openclaw/issues/37634)), environment variables silently fail to pass to the `exec` tool ([#31583](https://github.com/openclaw/openclaw/issues/31583)), and the web UI frequently suffers broken avatar images ([#38439](https://github.com/openclaw/openclaw/issues/38439)). While the core agent logic is highly praised, the surrounding infrastructure (cron reliability, chat integrations, UI) clearly needs stabilization.

## 8. Backlog Watch
Many critical issues are lingering with the `clawsweeper:needs-maintainer-review` label but lack actionable fix PRs. Key items requiring immediate maintainer attention include:
*   **[#10687](https://github.com/openclaw/openclaw/issues/10687): Fully Dynamic Model Discovery.** Currently relies on static catalogs, making fast-moving providers (like OpenRouter) difficult to use.
*   **[#85030](https://github.com/openclaw/openclaw/issues/85030): MCP Tools not Injected into Subagents.** A fundamental architectural flaw where `sessions_spawn` ignores MCP tool schemas, breaking multi-agent workflows.
*   **[#16670](https://github.com/openclaw/openclaw/issues/16670): Onboarding Wizard Lacks Memory/Embedding Setup.** A critical UX barrier where new users install OpenClaw but cannot figure out how to enable persistent memory.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from June 11, 2026.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently characterized by rapid architectural maturation and intense development velocity. Projects are transitioning from basic LLM wrappers into complex, multi-modal systems capable of tool use, multi-agent orchestration, and persistent memory. A common theme across the board is "hardening"—developers are actively tackling edge cases related to concurrency, multi-platform integrations (Slack, Telegram, Discord), and strict security boundaries. There is a clear industry-wide shift toward local-first, privacy-preserving desktop applications and modular, microkernel architectures.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Ecosystem Health Score | Summary |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 | 500 | `v2026.6.6-beta.1` | ⚠️ Moderate (High Backlog) | Core reference project; undergoing massive SQLite architectural migration; severe backlog outpacing maintainers. |
| **IronClaw** | 50 | 50 | Pre-release (Reborn) | 🟢 High | Intense "Reborn" WebUI v2 sprint; strong focus on tenant security and Slack integrations; active community testing. |
| **CoPaw** | 36 | 50 | `v1.1.11` (Stable) | 🟢 High | Extremely fast release cadence; stabilizing Windows desktop client; transitioning to AgentScope 2.0. |
| **ZeroClaw** | 37 | 50 | None | 🟢 High | Deep architectural overhaul; RFC-driven development; transitioning to a dynamic WASM plugin system. |
| **Hermes Agent**| 50 | 50 | `v0.16.0` (Latest) | 🟡 Growing | High community reporting cycle outpacing maintainers; heavy focus on multi-platform parity and memory plugins. |
| **LobsterAI** | 0 | 20 | `2026.6.10` | 🟢 High | Bulk backlog clearance; strong focus on Windows installer stability and UI refinements. |
| **NanoBot** | 9 | 32 | None | 🟢 High | Healthy iterative growth; resolved critical memory pollution bugs; pushing towards GUI automation. |
| **PicoClaw** | ~5 | 13 | `v0.2.9-nightly` | 🟢 High | Focused security patching (SSRF) and multi-platform bug fixes; privacy-first user base. |
| **NanoClaw** | 1 | 10 | None | 🟢 High | High PR throughput; expanding modular "skills" ecosystem and multi-tenant IPC security. |
| **NullClaw** | 0 | 6 | None | 🟢 Stable | Quiet bug-fixing phase; focused on gateway stability and cron execution. |
| **Moltis** | 1 | 0 | None | 🟡 Low | Dormant phase; minimal activity aside from minor TTS provider bug reports. |
| **TinyClaw** | 0 | 0 | None | 🔴 Inactive | No activity in the last 24 hours. |
| **ZeptoClaw** | 0 | 0 | None | 🔴 Inactive | No activity in the last 24 hours. |

### 3. OpenClaw's Position
*   **Advantages:** As the core reference implementation, OpenClaw boasts the largest feature set and the most active community discourse. Its scale is unmatched, handling complex multi-platform routing and enterprise-grade security boundaries (e.g., the sweeping updates in `v2026.6.6-beta.1`).
*   **Technical Approach:** OpenClaw is undergoing a rigorous "internal plumbing" overhaul via SQLite state migration to solve systemic race conditions. While peers like ZeroClaw are moving toward microkernel/WASM architectures, OpenClaw remains a monolith that is currently being structurally reinforced.
*   **Community Size & Risks:** OpenClaw has the largest community volume (500 issues/PRs daily). However, its maintainers are currently drowning in this success. With only 27 issues and 78 PRs closed recently, it suffers from a severe backlog and unresolved P0 stability bugs (e.g., orphaned processes, write-tool data loss), whereas peers like CoPaw and NanoBot are resolving bugs almost as fast as they are reported.

### 4. Shared Technical Focus Areas
Several critical requirements are emerging simultaneously across the ecosystem:
*   **Memory & State Management:** Managing massive context windows is a universal pain point. *OpenClaw* is migrating to SQLite to fix state loss; *NanoBot* resolved cross-session context pollution; *CoPaw* is seeking token compression solutions; and *Hermes* is battling database bloat in memory plugins.
*   **Desktop & OS Integration:** The shift to local-first desktop apps is causing platform-specific friction. *LobsterAI*, *CoPaw*, and *Hermes* are all actively fighting Windows updater bugs, UI rendering freezes, and system tray behaviors.
*   **Security & Sandboxing:** Preventing prompt injection and containing agents is top-of-mind. *OpenClaw*, *PicoClaw*, and *NanoClaw* are all implementing strict SSRF guards, secure IPC namespaces, and isolated RBAC controls.
*   **Agent Observability:** Multi-agent setups are "black boxes." *ZeroClaw*, *NanoClaw*, *CoPaw*, and *IronClaw* users are loudly demanding better real-time trace visibility, tool-visibility hooks, and token-usage tracking.

### 5. Differentiation Analysis
*   **Architecture:** **ZeroClaw** is aggressively pursuing a microkernel approach (RFCs for dynamic plugins, WASM), whereas **OpenClaw** and **Hermes** rely on more centralized, monolithic agent loops. **NanoClaw** differentiates with a modular "skills" ecosystem.
*   **Target Demographics:** **CoPaw** and **LobsterAI** are heavily focused on non-technical end-users requiring polished desktop GUIs and one-click LLM hubs. **PicoClaw** and **Moltis** cater specifically to homelabbers and privacy-maximalists seeking edge/IoT and local TTS integrations. **OpenClaw**, **IronClaw**, and **ZeroClaw** are targeting enterprise operators needing multi-tenant security, CI/CD integrations, and reproducible deployments.
*   **Multi-Platform vs. Narrow Focus:** **Hermes** stands out for its aggressive push for cross-platform parity (Slack, Telegram, Mattermost, WhatsApp), whereas **NullClaw** operates as a quiet, highly stable backend focused purely on cron execution and gateway stability.

### 6. Community Momentum & Maturity
*   **Rapid Iterators (High Momentum):** **CoPaw**, **IronClaw**, and **NanoBot** show exceptional maintainer responsiveness, demonstrated by rapid release cadences, quick patching of P0 bugs, and balanced open/closed ratios.
*   **Scaling Under Strain (Stabilizing):** **OpenClaw** and **Hermes** are experiencing high community traction but are showing signs of maintainer burnout/insufficiency. Their momentum is high, but unresolved bugs are lingering for weeks, shifting their phase from rapid iteration to backlog management.
*   **Architectural Pivots:** **ZeroClaw** is in a transitional phase, holding back releases to land massive RFCs that will define its v0.8.0 release. 

### 7. Trend Signals for AI Agent Developers
1.  **The Rise of the Agent OS:** Agents are no longer just chatbots; they are becoming OS-level daemons. The ecosystem is demanding system-tray integrations (CoPaw), UI overlays, and native OS lifecycle management (LobsterAI).
2.  **RAG is Dead; Long live Context Compression:** Simply stuffing documents into context is failing. The industry is moving toward aggressive context window management, reversible compression layers (CoPaw), and sub-agent context isolation to prevent hallucinations.
3.  **The "Batteries Included" Deployment Dilemma:** While architects want modular microkernels, users are screaming for simple Docker images that just work (ZeroClaw, IronClaw). Developers must balance clean, decoupled codebases with user-friendly, unified deployment experiences.
4.  **Security Defaulting to "Zero Trust":** The era of agents having unfettered access to local file systems and host variables is ending. Projects are unanimously implementing SSRF guards, tool-level approval loops, and hidden API key vaults to prevent prompt-injection-driven data exfiltration.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-11

## 1. Today's Overview
NanoBot demonstrates exceptionally high community engagement and robust development velocity today, with 32 pull requests updated and 9 issues processed in the last 24 hours. The maintainers are actively merging community contributions at a rapid pace, closing 19 PRs and resolving 6 issues within a single day. The current development focus is heavily concentrated on system stability, context management (preventing memory loss and cross-session pollution), and expanding user-interface capabilities. Despite the absence of a formal software release today, the sheer volume of merged, high-quality PRs indicates a project in a highly healthy, iterative growth phase, likely building up to a minor or patch version release soon.

## 2. Releases
No new releases were recorded today (2026-06-11).

## 3. Project Progress
A remarkable 19 PRs were merged/closed today, advancing several critical features and stability improvements toward the main branch:
*   **Context & Memory Management:** Significant progress was made on session handling. [PR #4274](https://github.com/HKUDS/nanobot/pull/4274) resolved cross-session context pollution by scoping `# Recent History` prompts to specific sessions. [PR #4270](https://github.com/HKUDS/nanobot/pull/4270) addressed "short-term memory loss" by ensuring idle compactions archive the full session history. Additionally, [PR #4278](https://github.com/HKUDS/nanobot/pull/4278) introduced segment transcript storage to prevent large WebUI chats from breaking.
*   **Provider Stability:** [PR #4272](https://github.com/HKUDS/nanobot/pull/4272) introduced retry and fallback mechanisms for LLM stream stalling, directly addressing timeout errors. 
*   **Configuration & Execution:** [PR #4273](https://github.com/HKUDS/nanobot/pull/4273) added a `pathPrepend` config for the exec tool, solving Python virtual environment priority issues. [PR #4275](https://github.com/HKUDS/nanobot/pull/4275) implemented fail-fast behaviors for invalid config files, improving debugging.
*   **Channel & WebUI:** The Feishu channel received a major refactor to lazy-load its heavy Lark SDK ([PR #4277](https://github.com/HKUDS/nanobot/pull/4277)), and the WebUI's real-time version checking was refactored into a lightweight, on-demand model ([PR #4255](https://github.com/HKUDS/nanobot/pull/4255)).

## 4. Community Hot Topics
*   **LLM Stream Stalling & Empty Responses ([Issue #4013](https://github.com/HKUDS/nanobot/issues/4013), [Issue #4287](https://github.com/HKUDS/nanobot/issues/4287)):** The most active discussions revolve around external LLM API instabilities. Users are frustrated when the bot stops mid-generation or returns empty choices. The community has actively proposed and submitted fixes ([PR #4272](https://github.com/HKUDS/nanobot/pull/4272), [PR #4288](https://github.com/HKUDS/nanobot/pull/4288)) to make the fallback logic more resilient.
*   **Context Pollution and "Sustained Goal" Errors ([Issue #4259](https://github.com/HKUDS/nanobot/issues/4259), [Issue #4286](https://github.com/HKUDS/nanobot/issues/4286)):** Users report encountering unexpected missing context or injected irrelevant history. This highlights the underlying complexity of NanoBot's autonomous memory consolidation ("Dream" phase) and shows the community is deeply analyzing its core agent loop.

## 5. Bugs & Stability
Bugs reported today primarily concern external API resilience and sandbox configurations, with fix PRs already available for the most critical ones:
1.  **[High] Stream Stalls & Empty Choices:** ([Issue #4013](https://github.com/HKUDS/nanobot/issues/4013), [Issue #4287](https://github.com/HKUDS/nanobot/issues/4287)) LLM streams stalling for >90s or returning empty responses halt the agent. *Fix Status: PRs [4272](https://github.com/HKUDS/nanobot/pull/4272) and [4288](https://github.com/HKUDS/nanobot/pull/4288) submitted.*
2.  **[High] Cross-Session Context Pollution:** ([Issue #4259](https://github.com/HKUDS/nanobot/issues/4259)) `history.jsonl` mixed previous session summaries into the current system prompt. *Fix Status: Resolved via [PR #4274](https://github.com/HKUDS/nanobot/pull/4274).*
3.  **[Medium] bwrap Sandbox HOME Variable:** ([Issue #4237](https://github.com/HKUDS/nanobot/issues/4237)) The sandbox fails to reset the `$HOME` directory, causing tool writes to fail.
4.  **[Medium] OpenAICompatProvider max_tokens:** ([Issue #4261](https://github.com/HKUDS/nanobot/issues/4261)) GPT-5.x requires `max_completion_tokens`, but the provider still sends `max_tokens`.

## 6. Feature Requests & Roadmap Signals
Several open PRs and issues signal the community's strong desire to turn NanoBot into a multimodal, desktop-capable automation agent:
*   **Computer Use & Browser Automation:** [PR #4276](https://github.com/HKUDS/nanobot/pull/4276) proposes adding native, model-agnostic `computer_use` (pixel-based) and `browser` (DOM-based) tools. This represents a massive leap toward agentic GUI interaction.
*   **Subagent Orchestration:** [Issue #4279](https://github.com/HKUDS/nanobot/issues/4279) requests aggregated notifications for subagents to prevent LLM hallucinations caused by real-time result spam.
*   **WebUI Enhancements:** [PR #4284](https://github.com/HKUDS/nanobot/pull/4284) seeks to allow skill activation via the slash-command palette, and [PR #4282](https://github.com/HKUDS/nanobot/pull/4282) proposes integrated file browsing for the host machine directly within the WebUI settings.
*   **Granular Bot Controls:** [PR #4289](https://github.com/HKUDS/nanobot/pull/4289) adds a `groupRequireMention` feature for Slack, showing a need for bots to be less noisy in enterprise environments.

## 7. User Feedback Summary
Users are heavily utilizing NanoBot for long-running autonomous tasks (e.g., writing full articles, executing Python scripts), which is pushing the agent's context window and memory limits to the edge. Satisfaction is generally high with the core architecture (one user explicitly praised v0.1.5post2), but frustration arises during long contexts when the agent suffers "memory loss" or encounters unrecoverable LLM API errors. The community consists of advanced users and developers, as evidenced by their ability to trace bugs through the `Consolidator.archive()` and `ContextBuilder` data paths. 

## 8. Backlog Watch
Maintainers should direct their attention to the following open, high-impact items requiring final review or resolution:
*   **[PR #4276](https://github.com/HKUDS/nanobot/pull/4276) (Computer Use):** A massive architectural addition that requires careful security and capability review before merging.
*   **[PR #4270](https://github.com/HKUDS/nanobot/pull/4270) (Archive Full Session):** Addresses critical memory loss during idle compaction. Needs a maintainer's eyes to verify context continuity logic.
*   **[PR #4202](https://github.com/HKUDS/nanobot/pull/4202) (Filesystem Write Policy):** An open PR since June 5 attempting to align `apply_patch` path handling with workspace access policies.
*   **[Issue #4286](https://github.com/HKUDS/nanobot/issues/4286) (Missing "Sustained Goal"):** An open bug report with 0 comments regarding missing context during article generation that needs triage.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-11

## 1. Today's Overview
The Hermes Agent project is experiencing a highly active day, with 50 issues and 50 pull requests updated in the past 24 hours. The vast majority of issues remain open (39), alongside 40 open PRs, indicating a rapid community reporting cycle that is currently outpacing the maintainers' capacity to merge resolutions. Activity is heavily concentrated around the recently released v0.16.0, with significant community effort directed toward gateway stability, the Honcho memory plugin integration, and achieving parity across messaging platforms (specifically Telegram, WhatsApp, and Mattermost). No new software releases were cut today, but the open PR pipeline suggests a patch or minor update is actively being staged.

## 2. Releases
No new releases were published today. The latest available version remains **v0.16.0**.

## 3. Project Progress
Maintainers and contributors closed 10 PRs and resolved 11 issues today. Progress was notably advanced in documentation, CI/CD reliability, and security controls for delegated agents:
*   **Agent Security & Tooling:** PR [#43113](https://github.com/NousResearch/hermes-agent/pull/43113) (Closed) introduced curator post-hooks and skill profile routing. PR [#43474](https://github.com/NousResearch/hermes-agent/pull/43474) (Open) advanced a critical security fix to strip messaging/cron toolsets from delegated children.
*   **Mattermost Parity:** A major community push occurred today to bring Mattermost up to speed with the Slack adapter, with PR [#43791](https://github.com/NousResearch/hermes-agent/pull/43791) (Closed) and new open PRs [#43805](https://github.com/NousResearch/hermes-agent/pull/43805) and [#43804](https://github.com/NousResearch/hermes-agent/pull/43804) introducing thread context seeding and in-thread auto-responses.
*   **CI/CD Pipeline:** PR [#43703](https://github.com/NousResearch/hermes-agent/pull/43703) removed `pytest-timeout` to fix flaky CI tests, stabilizing the development pipeline.
*   **Documentation:** PR [#13949](https://github.com/NousResearch/hermes-agent/pull/13949) added a Chinese Quick Start guide, and [#43801](https://github.com/NousResearch/hermes-agent/pull/43801) cross-linked the new write-approval gates across various feature docs.

## 4. Community Hot Topics
The most actively discussed items revolve around UI/UX friction and integration versatility:
*   **Dashboard Themes Readability (39 👍, 25 Comments):** Issue [#18080](https://github.com/NousResearch/hermes-agent/issues/18080) remains highly active. Users are frustrated by the non-standard font choices, small serif fonts, and low contrast in the TUI dashboard themes. This is clearly a high-visibility aesthetic pain point.
*   **Telegram Topic-to-Profile Routing (13 Comments):** Issue [#10143](https://github.com/NousResearch/hermes-agent/issues/10143) requests the ability to route different Telegram forum topics to specialized agent profiles. This highlights a strong enterprise/community need to use a single bot endpoint for multiple distinct operational purposes.
*   **macOS 26 Launchd Regression (8 Comments):** Issue [#40831](https://github.com/NousResearch/hermes-agent/issues/40831) details a regression in v0.16.0 where hardcoded `launchd` domains break Aqua sessions. High engagement reflects the project's substantial developer-user base operating on macOS.

## 5. Bugs & Stability
Several high-severity bugs were reported against v0.16.0, particularly concerning configuration, memory, and platform gateways:
*   **[P1] macOS Launchd Regression:** Issue [#40831](https://github.com/NousResearch/hermes-agent/issues/40831) breaks the gateway startup on macOS 26.5.1 Aqua sessions. (Status: Closed, fix identified).
*   **[P1] Anthropic Multi-turn Thinking Loss:** Issue [#17861](https://github.com/NousResearch/hermes-agent/issues/17861) causes multi-turn history to drop `redacted_thinking` blocks when using Anthropic models. (Status: Closed).
*   **[P2] Docker HOME Path Leak:** Issue [#33913](https://github.com/NousResearch/hermes-agent/issues/33913) reports a double-`.hermes` path mismatch that breaks Docker setups. (Status: Open, no linked fix PR yet).
*   **[P1] Honcho Memory Silent Failures:** Issues [#43775](https://github.com/NousResearch/hermes-agent/issues/43775), [#43731](https://github.com/NousResearch/hermes-agent/issues/43731), and [#43733](https://github.com/NousResearch/hermes-agent/issues/43733) report that the Honcho plugin silently fails, re-runs migrations repeatedly flooding the deriver, and pollutes user speech. *Fix PR exists:* [#43803](https://github.com/NousResearch/hermes-agent/pull/43803).
*   **[P2] Desktop App Boot Loop:** Issue [#43640](https://github.com/NousResearch/hermes-agent/issues/43640) notes the Desktop renderer crashes with `exitCode=15`. *Fix PR exists:* [#43790](https://github.com/NousResearch/hermes-agent/pull/43790) addresses Windows subprocess crashes.
*   **[P2] WhatsApp Media Leak:** Issue [#43656](https://github.com/NousResearch/hermes-agent/issues/43656) exposes internal `MEDIA:<path>` directives as visible text to users. (Status: Open).

## 6. Feature Requests & Roadmap Signals
Based on today's issue tracker, the following user-driven features are likely to be prioritized or included in an upcoming release:
*   **Memory Provider Degradation:** A request for a 3-second timeout with automatic fallback to builtin memory when external providers (like Hindsight/Honcho) fail ([#35218](https://github.com/NousResearch/hermes-agent/issues/35218)). This is critical for agent autonomy.
*   **Interactive Tool Handling:** Allowing the bash tool to handle interactive inputs (e.g., playing a guessing game) ([#9059](https://github.com/NousResearch/hermes-agent/issues/9059)). (Status: Implemented on main).
*   **Native Xiaomi MiMo TTS:** Support for MiMo-V2.5-TTS streaming without source-code modifications ([#43700](https://github.com/NousResearch/hermes-agent/issues/43700)).
*   **Telegram Compaction UX:** Changing how context compaction visually deletes messages, which currently terrifies users ([#40416](https://github.com/NousResearch/hermes-agent/issues/40416)).

## 7. User Feedback Summary
Users are leveraging Hermes as a highly customized, multi-platform personal assistant, but they are encountering significant friction in the "long tail" of configurations. A major theme is **provider flexibility vs. strict defaults**—users are running into walls when trying to use local Ollama models (`deepseek-r1` issuing 400 errors, [#13659](https://github.com/NousResearch/hermes-agent/issues/13659)), custom OpenAI-compatible endpoints sending `no-key-required` ([#43586](https://github.com/NousResearch/hermes-agent/issues/43586)), and custom TTS providers. 
Furthermore, users are highly sensitive to **visual polish and localization**. Requests for Russian localization ([#43806](https://github.com/NousResearch/hermes-agent/issues/43806)), better Desktop arrow-key traversal ([#43671](https://github.com/NousResearch/hermes-agent/issues/43671)), and complaints about unreadable fonts indicate that the userbase expects a finished, consumer-grade UI to match the powerful backend. 

## 8. Backlog Watch
*   **Memory/State Bloat:** Issue [#43690](https://github.com/NousResearch/hermes-agent/issues/43690) reports an 18.3x expansion ratio in the `messages_fts_trigram` index, causing a 502MB database bloat from just 27MB of content. This needs maintainer triage to prevent long-term performance degradation.
*   **CLI Installer Hanging:** Issue [#6147](https://github.com/NousResearch/hermes-agent/issues/6147) (Installer stuck at "Install ripgrep") has been open since April 8th and still lacks a definitive resolution, creating a poor first-time setup experience.
*   **Telegram Markdown Rendering:** Issue [#43441](https://github.com/NousResearch/hermes-agent/issues/43441) (raw markdown rendering in bound topics) severely degrades the Telegram user experience and requires prioritization.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-06-11

## 1. Today's Overview
PicoClaw demonstrates robust and healthy development activity, currently iterating actively towards the **v0.2.9** stable release. The project shows a strong focus on security and robustness, with multiple contributors simultaneously addressing critical vulnerabilities like Server-Side Request Forgery (SSRF) bypasses, platform-specific bugs (Windows/macOS), and improving Go type safety. With 13 pull requests updated today (8 open, 5 closed) and a fresh nightly build, the maintainer team is effectively managing community contributions while hardening the agent's core infrastructure.

## 2. Releases
- **[nightly: Nightly Build v0.2.9-nightly.20260610.b9a8fad6](https://github.com/sipeed/picoclaw/releases/tag/nightly)**
  - **Details:** Automated build targeting the upcoming `v0.2.9` milestone.
  - **Notes:** Marked as potentially unstable. Recommended for testing but not production environments.

## 3. Project Progress
Five pull requests were closed/merged today, showing tangible progress in API compatibility, error handling, and tooling:
- **Security Patching:** [PR #3085](https://github.com/sipeed/picoclaw/pull/3085) successfully blocked the `198.18.0.0/15` IPv4 range in the SSRF guard, closing an active security vulnerability.
- **API & Model Compatibility:** [PR #2951](https://github.com/sipeed/picoclaw/pull/2951) fixed HTTP 400 errors with OpenAI-compatible endpoints by standardizing the `web_search` tool type. Additionally, [PR #2948](https://github.com/sipeed/picoclaw/pull/2948) resolved temperature parameter incompatibilities with the new `claude-opus-4-7` models.
- **Code Quality & Observability:** [PR #3043](https://github.com/sipeed/picoclaw/pull/3043) merged to prevent silent failures by properly checking `strconv.Atoi` and `json.Unmarshal` errors. 
- **Tooling:** [PR #2945](https://github.com/sipeed/picoclaw/pull/2945) introduced `picoclaw-tracer`, a new standalone web UI for rendering per-turn LLM traces from JSON-Lines logs.

## 4. Community Hot Topics
- **[Issue #2472](https://github.com/sipeed/picoclaw/issues/2472) (👍 1, 5 comments):** A long-standing bug where `list_dir` fails on Windows due to path separator mismatches with Go's `fs.FS`. After almost two months of discussion, it has gained traction again alongside a new fix PR.
- **Security Advisory [Issue #3077](https://github.com/sipeed/picoclaw/issues/3077):** Rapidly addressed a critical SSRF restriction bypass. The community (specifically user YLChen-007) actively participates in offensive security auditing of the agent's `web_fetch` capabilities, indicating a mature, security-conscious user base.

## 5. Bugs & Stability
- **[CRITICAL] SSRF Bypass ([Issue #3077](https://github.com/sipeed/picoclaw/issues/3077)):** The `web_fetch` tool failed to block benchmark networking IPs (`198.18.0.0/15`). *Status:* Fixed and closed via [PR #3085](https://github.com/sipeed/picoclaw/pull/3085).
- **[HIGH] UI Failure on Older iOS ([Issue #3090](https://github.com/sipeed/picoclaw/issues/3090)):** The PicoClaw control panel is entirely non-functional on Safari for iOS versions below 16.4. *Status:* Open, no fix PR submitted yet.
- **[LOW] Golang Runtime Panics & Silent Failures:** Multiple PRs opened today by contributor `chengzhichao-xydt` to fix unchecked type assertions across the codebase (e.g., [PR #3091](https://github.com/sipeed/picoclaw/pull/3091), [PR #3092](https://github.com/sipeed/picoclaw/pull/3092), [PR #3053](https://github.com/sipeed/picoclaw/pull/3053)). While not immediately crashing for most users, these represent significant stability improvements.
- **[LOW] Windows Pathing ([Issue #2472](https://github.com/sipeed/picoclaw/issues/2472)):** Windows users experiencing "invalid argument" errors in file tools. *Status:* Fix proposed in [PR #3089](https://github.com/sipeed/picoclaw/pull/3089).

## 6. Feature Requests & Roadmap Signals
- **Decentralized Messaging Integrations ([Issue #3093](https://github.com/sipeed/picoclaw/issues/3093)):** Users are requesting gateway support for SimpleX, Wire, and Tox. This strongly signals that PicoClaw's user base is highly privacy-conscious and desires the AI agent to operate over decentralized, E2EE communication networks.
- **Hardened Access Control ([PR #3083](https://github.com/sipeed/picoclaw/pull/3083)):** A proposed feature to add configurable localhost bypass behavior and trusted proxy CIDRs to the launcher. This indicates PicoClaw is increasingly being deployed in complex, proxied production environments rather than just simple local setups.
- **Roadmap Prediction for v0.2.9 Stable:** The next release will almost certainly focus heavily on multi-platform stability (Windows fixes) and tightening security boundaries (SSRF hardening, access controls).

## 7. User Feedback Summary
Users operating PicoClaw in self-hosted, privacy-first environments are driving the current feedback loop. The use of Raspberry Pi OS (Debian 13) as reported in [Issue #3090](https://github.com/sipeed/picoclaw/issues/3090) confirms a hobbyist/homelab demographic, while demands for Matrix identity fixes ([PR #3045](https://github.com/sipeed/picoclaw/pull/3045)) and SimpleX support highlight the need for versatile, non-standard messaging platform bridging. Pain points currently center around edge-case deployment environments (older iOS, Windows path structures) and silent backend failures when interacting with various LLM providers.

## 8. Backlog Watch
- **[PR #3067](https://github.com/sipeed/picoclaw/pull/3067):** A fix for a frustrating UI bug where the `Session Scope` setting cannot be permanently saved. This directly impacts session isolation behavior for users but is currently awaiting merge.
- **[PR #3087](https://github.com/sipeed/picoclaw/pull/3087):** Fixes a critical false-positive in the `restrict_to_workspace` safety guard that blocks legitimate relative execution paths. Requires maintainer review as it affects agent execution security policies.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-06-11

## 1. Today's Overview
NanoClaw is demonstrating a highly active and healthy development cycle, primarily driven by a surge in community contributions. Over the past 24 hours, the project saw 10 pull requests updated, with 6 successfully merged or closed, signaling strong and responsive maintainer engagement. Current engineering focus is heavily centered on expanding the project's modular "skills" ecosystem, introducing advanced observability, and hardening multi-tenant security. While only one issue saw active updates today, the high PR throughput indicates that the project is in an active feature-building and stabilization phase.

## 2. Releases
No new releases were recorded in the last 24 hours.

## 3. Project Progress
Six PRs were merged or closed today, advancing project stability, security, and developer experience:
* **Security Hardening:** [#3 (Closed)](https://github.com/qwibitai/nanoclaw/pull/3) introduced secure IPC with per-group namespaces, preventing privilege escalation in multi-tenant environments by isolating `/data/ipc/` directories. 
* **Critical Bug Fix:** [#2718 (Closed)](https://github.com/qwibitai/nanoclaw/pull/2718) resolved a production issue where Feishu interactive cards got stuck in a "running" state when the `agent-runner` process was killed by timeouts. 
* **Framework Documentation:** [#2721 (Closed)](https://github.com/qwibitai/nanoclaw/pull/2721) merged crucial documentation regarding the skills-based customization contract, establishing clear guidelines for contributors.
* **Housekeeping:** Closed a misdirected PR ([#2724](https://github.com/qwibitai/nanoclaw/pull/2724)) and an incomplete feature PR ([#2719](https://github.com/qwibitai/nanoclaw/pull/2719), uninstall script). A finance agent skill PR ([#2723](https://github.com/qwibitai/nanoclaw/pull/2723)) was also closed, likely requiring revisions to meet the newly documented skill guidelines.

## 4. Community Hot Topics
The most actively discussed item is **[#1690: Multi-runtime agent SDK abstraction (Claude + Codex + local models)](https://github.com/qwibitai/nanoclaw/issues/1690)** (👍 3, 6 Comments).
* *Analysis:* The community is actively discussing the need to decouple NanoClaw from a single LLM provider. Users want a modular "AgentRuntime" interface that allows different agent SDKs (Claude, Codex, local models) to be plugged in as skills, mirroring the existing modular channel integrations (like `/add-telegram`). This high-engagement issue highlights a strong user desire for model-agnostic architectures in AI agent frameworks.

## 5. Bugs & Stability
* **Severity: High** — A critical production bug was patched via **[#2718](https://github.com/qwibitai/nanoclaw/pull/2718)**. Agent containers running via Feishu were leaving behind zombie UI states ("running" cards) when killed by `PROCESS_TIMEOUT`. The fix ensures `deleteActiveCard` is reliably triggered, significantly improving UX for Feishu users.
* **Severity: Low** — Discarded agent container stdout/stderr logs have been identified as an observability gap. **[#2727](https://github.com/qwibitai/nanoclaw/pull/2727) (Open)** proposes persisting these logs to disk, which will greatly aid in future debugging and crash forensics.

## 6. Feature Requests & Roadmap Signals
Today's open PRs provide strong signals about the immediate roadmap, focusing heavily on agentic safety, visibility, and capabilities:
* **Safety & Security:** **[#2726 (Open)](https://github.com/qwibitai/nanoclaw/pull/2726)** proposes `/add-guardrails`, allowing deterministic regex and keyphrase blocking to prevent prompt injections and credential leaks.
* **Observability:** **[#2211 (Open)](https://github.com/qwibitai/nanoclaw/pull/2211)** introduces `tool-visibility`, offering live previews of tool-calls directly in the chat UI via hooks.
* **Web Capabilities:** **[#2725 (Open)](https://github.com/qwibitai/nanoclaw/pull/2725)** suggests adding `web-search-plus`, a multi-provider web search and extraction CLI utility that deliberately operates without MCP.
* *Prediction:* Given the current momentum, the next release will likely be a minor version bump focusing on "Agent Safety & Developer Observability," packaging the new guardrails, tool visibility, and IPC security updates.

## 7. User Feedback Summary
Community feedback and PR submissions indicate that power users are successfully leveraging NanoClaw's skill-based architecture but require better enterprise-grade safety and debugging tools. Users appreciate the modular channel pattern (adding Slack/Telegram) and are actively trying to extend this pattern to the AI runtimes themselves. The main pain points revolve around debugging "black box" agent executions (hence the push for log persistence and tool visibility) and mitigating LLM security risks (prompt injection blocking).

## 8. Backlog Watch
* **[#2211 (Open)](https://github.com/qwibitai/nanoclaw/pull/2211):** This `tool-visibility` PR has been open since early May 2026 and appears stalled. It was recently updated to conform to `docs/skill-guidelines.md`. Maintainer attention is needed to review and unblock this highly useful observability feature.
* **[#1690 (Open)](https://github.com/qwibitai/nanoclaw/pull/1690):** The multi-runtime SDK abstraction issue has been open since April 2026. As a significant architectural shift, it requires a definitive maintainer decision on whether to accept the proposed `AgentRuntime` interface to guide further community development.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the NullClaw project digest for 2026-06-11:

### 1. Today's Overview
NullClaw demonstrated steady development momentum today, primarily driven by internal refinement and bug-fixing efforts rather than new feature rollouts. Activity was concentrated entirely on the Pull Request front, with six updates recorded over the last 24 hours—four of which introduced new open fixes, while two were successfully merged. There was no user-generated issue activity or new software releases, indicating a mature phase of development currently focused on hardening existing agent execution, gateway stability, and data redaction systems. Overall project health remains active, with maintainers proactively addressing technical debt and edge-case regressions.

### 2. Releases
No new releases were recorded today. 

### 3. Project Progress
Two Pull Requests were closed/merged today, representing tangible progress in system stability and prompt optimization:
*   **PR [#945](https://github.com/nullclaw/nullclaw/pull/945) [CLOSED]**: Resolved a false-positive redaction bug where standard ISO date/time patterns emitted by system prompts were mistakenly flagged and redacted as phone numbers.
*   **PR [#946](https://github.com/nullclaw/nullclaw/pull/946) [CLOSED]**: Advanced the agent's prompt engineering architecture by refining how tools are loaded into text-based system prompts, specifically filtering out dynamic-group MCP tools from text while retaining them for native API tool-calling. 

### 4. Community Hot Topics
There is minimal overt community debate or engagement (comments/reactions) on today's tickets. However, the open PRs indicate active, quiet collaboration between maintainers. 
*   **PR [#948](https://github.com/nullclaw/nullclaw/pull/948)** by *DonPrus* and **PR [#951](https://github.com/nullclaw/nullclaw/pull/951)** by *vernonstinebaker* represent ongoing collaborative work to refine cron-based agent delivery attribution and standardize agent output handling. 
*   The underlying need driving these "hot" areas of development is ensuring clean, attributable background execution for automated AI tasks without leaking system initialization data into user-facing channels.

### 5. Bugs & Stability
Several distinct bugs were identified and addressed today, with fix PRs currently open. 
*   **Medium Severity: Resource Leak** – **PR [#950](https://github.com/nullclaw/nullclaw/pull/950)** highlights a test leak in the gateway. If `gateway.run()` encountered an `AddressInUse` error, it allocated memory and resources that were not properly cleaned up. A port probe was moved to prevent this. *(Fix PR Open)*
*   **Medium Severity: Agent Output Pollution** – **PR [#951](https://github.com/nullclaw/nullclaw/pull/951)** addresses a bug where non-zero exits in agent child processes caused stderr initialization logs (like memory plans and MCP registration) to be posted as fake agent responses. *(Fix PR Open)*
*   **Low Severity: Configuration limitation** – **PR [#949](https://github.com/nullclaw/nullclaw/pull/949)** fixes a limitation where queue mode could not be set via `config.json`, defaulting incorrectly and causing friction. *(Fix PR Open)*

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were logged by users today, the open PRs strongly signal the maintainers' roadmap regarding core architecture:
*   **Enhanced Customization:** **PR [#949](https://github.com/nullclaw/nullclaw/pull/949)** introduces `agent.default_queue_mode` in `config.json`, signaling a move toward giving administrators tighter control over agent queue behaviors.
*   **Advanced Tool Routing:** The merged **PR [#946](https://github.com/nullclaw/nullclaw/pull/946)** implies a push toward dynamic tool loading based on turn keywords. This suggests the next version will feature highly optimized context windows, where tool schemas are only loaded when logically necessary.
*   **Robust Cron Delivery:** **PR [#948](https://github.com/nullclaw/nullclaw/pull/948)** points to ongoing investments in background task automation and precise message attribution.

### 7. User Feedback Summary
Because there were 0 issues created today, direct user satisfaction and dissatisfaction are difficult to measure. However, judging by the issues the maintainers are actively solving, administrators and operators of NullClaw have likely been experiencing anomalies with cron job routing (PR [#948](https://github.com/nullclaw/nullclaw/pull/948)) and redaction logic over-triggering during standard operations (PR [#945](https://github.com/nullclaw/nullclaw/pull/945)). The rapid closure of these PRs implies a responsive approach to operational pain points.

### 8. Backlog Watch
No long-unanswered issues or PRs are apparent from today's data snapshot. All Pull Requests updated within the last 24 hours were created within the last 8 days. 
*   Maintainer attention should now be directed to finalizing the four open PRs (particularly **PR [#950](https://github.com/nullclaw/nullclaw/pull/950)** to ensure test suite stability). 
*   It is worth monitoring **PR [#945](https://github.com/nullclaw/nullclaw/pull/945)** and **PR [#946](https://github.com/nullclaw/nullclaw/pull/946)** to ensure they are formally tagged and included in an upcoming release, as they have been closed but not yet versioned.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-11

## 1. Today's Overview
The IronClaw project is experiencing a massive spike in development activity, entirely centered around the **"Reborn"** architectural overhaul and its new WebUI v2. Beta testing for Reborn has begun in earnest, resulting in a flood of targeted feedback and local-testing bug reports. The repository saw 50 issues and 50 pull requests updated in the last 24 hours, indicating a highly active, coordinated sprint. Maintainers and core contributors are focused on shoring up the WebUI user experience, fixing provider onboarding flows, and landing critical infrastructure like file attachments and observability seams.

## 2. Releases
There were **0 new releases** published today. However, it is worth noting that the project is currently accumulating changes for a significant release (potentially `0.29.1` or `0.30.0`), as seen in the open release chore PR ([PR #3708](https://github.com/nearai/ironclaw/pull/3708)). 

## 3. Project Progress
Significant architectural and feature advancements were merged or closed today, moving the Reborn WebUI closer to a stable beta state:
*   **Slack Integration E2E:** Personal triggered-event delivery via Slack DMs was completed and merged ([PR #4730](https://github.com/nearai/ironclaw/pull/4730)), alongside enabling Slack for QA Railway Reborn deployments ([PR #4739](https://github.com/nearai/ironclaw/pull/4739)).
*   **Security & Auth Refactoring:** Tenant-scoped authentication and security audit logging for egress blocking reached completion ([PR #4565](https://github.com/nearai/ironclaw/pull/4565), [Issue #4603](https://github.com/nearai/ironclaw/issues/4603)).
*   **OpenAI Compat & Responses API:** The migration of Responses create, retrieve, and cancel routes to the Reborn ProductWorkflow was officially closed ([Issue #4445](https://github.com/nearai/ironclaw/issues/4445)).
*   **UX Approvals:** The "Always Approve" affordance for tool execution in the WebUI v2 was restored and merged ([PR #4717](https://github.com/nearai/ironclaw/pull/4717)).

Open PRs pushing forward today include the new attachment web UX ([PR #4738](https://github.com/nearai/ironclaw/pull/4738)), agent-driven Trace Commons onboarding ([PR #4559](https://github.com/nearai/ironclaw/pull/4559)), and the critical Reborn LLM provider configuration fix ([PR #4731](https://github.com/nearai/ironclaw/pull/4731)).

## 4. Community Hot Topics
The most engaged discussions highlight friction in the distribution pipeline and long-term architectural direction:
*   **Crates.io Publish Lag ([Issue #3259](https://github.com/nearai/ironclaw/issues/3259) - 14 comments):** Downstream Rust consumers are frustrated that versions `0.25.0–0.27.0` remain unpublished to crates.io due to Wasmtime CVEs. This indicates that enterprise or advanced local users are relying heavily on the Rust crate ecosystem rather than just Docker/compiled binaries.
*   **Configuration-as-Code Epic ([Issue #3036](https://github.com/nearai/ironclaw/issues/3036) - 5 comments):** Operators are requesting a declarative (GitOps) approach to configuring IronClaw tenants. The high engagement reflects an enterprise need for reproducible, version-controlled setups (replacing `.env` and manual DB-backed settings).
*   **WebUI v2 Browser E2E Testing ([Issue #4604](https://github.com/nearai/ironclaw/issues/4604) / [Issue #4632](https://github.com/nearai/ironclaw/issues/4632)):** Contributors are actively discussing the missing real-browser end-to-end test coverage, an essential prerequisite before the WebUI can safely ship to a broader audience.

## 5. Bugs & Stability
Local testing of the Reborn WebUI beta exposed several bugs, primarily related to provider configuration and WebChat UX. 

**Critical / High Severity:**
*   **LLM Provider Save Failure:** NEAR AI configuration succeeds on "Test Connection" but silently fails on "Save", requiring core architectural fixes in [PR #4731](https://github.com/nearai/ironclaw/pull/4731) and [Issue #4673](https://github.com/nearai/ironclaw/issues/4673).
*   **Local Dev Secret Store Crash:** A corrupt/low-entropy key file throws an opaque, un-actionable error, breaking the local dev server ([Issue #4741](https://github.com/nearai/ironclaw/issues/4741)).
*   **Local OAuth Loop Broken:** NEAR AI login rejects all non-private.near.ai frontend callbacks, breaking local desktop builds ([Issue #4729](https://github.com/nearai/ironclaw/issues/4729)). *Fix is being addressed in [PR #4726](https://github.com/nearai/ironclaw/pull/4726).*

**Moderate / Low Severity:**
*   **Tool Approval Loop:** `builtin.http` loops continuously after an `invalid_input` failure without surfacing the error to the user ([Issue #4704](https://github.com/nearai/ironclaw/issues/4704)). *Addressed in [PR #4732](https://github.com/nearai/ironclaw/pull/4732).*
*   **State Loss in WebUI:** Unsent drafts are lost when navigating away from a conversation ([Issue #4724](https://github.com/nearai/ironclaw/issues/4724)).
*   **Capability-Port Validation:** Strict-mode providers' `null` parameters are rejected by the validator, breaking most first-party tools ([Issue #4642](https://github.com/nearai/ironclaw/issues/4642)).

## 6. Feature Requests & Roadmap Signals
Recent issues and PRs reveal clear roadmap trajectories for the next iteration of IronClaw:
*   **Automated MCP Integrations:** A strong push to detect `NEARAI_BASE_URL` + `NEARAI_API_KEY` and automatically wire up MCP extensions ([Issue #4700](https://github.com/nearai/ironclaw/issues/4700), [PR #4726](https://github.com/nearai/ironclaw/pull/4726)).
*   **Richer Slack Tool Schemas:** Exposing parameters like `channel` and `text` strictly to the LLM so it stops guessing untyped parameters ([Issue #4740](https://github.com/nearai/ironclaw/issues/4740)).
*   **Observability Seams:** Implementing trajectory observer hooks to allow external benchmarking/observability tools (like `nearai-bench`) to integrate seamlessly ([PR #4588](https://github.com/nearai/ironclaw/pull/4588)).
*   **Programmatic Extension Config:** Allowing API callers to configure MCP servers and inject OAuth headers programmatically in a single shot ([PR #4735](https://github.com/nearai/ironclaw/pull/4735)).

## 7. User Feedback Summary
Real-world usability testing of the WebUI v2 surfaced granular dissatisfaction regarding UI polish and feedback loops:
*   **Lack of Visual Context:** Users noted missing syntax highlighting for code ([Issue #4708](https://github.com/nearai/ironclaw/issues/4708)), missing user/assistant avatars during generation ([Issue #4722](https://github.com/nearai/ironclaw/issues/4722)), and placeholder icons ([Issue #4734](https://github.com/nearai/ironclaw/issues/4734)).
*   **UX Navigation Friction:** Clicking response links navigates users away from the active chat. Users expect links to open in a new tab ([Issue #4733](https://github.com/nearai/ironclaw/issues/4733)).
*   **Missing Error Context:** When drivers fail, errors like "driver temporarily unavailable" confuse users. Users explicitly request actionable messages ([Issue #4683](https://github.com/nearai/ironclaw/issues/4683), [Issue #4701](https://github.com/nearai/ironclaw/issues/4701)). 
*   **Accessibility:** Text size in the chat view is reported as too small for comfortable reading ([Issue #4707](https://github.com/nearai/ironclaw/issues/4707)).

## 8. Backlog Watch
*   **Release Blocker:** The Wasmtime/Crates.io publishing block ([Issue #3259](https://github.com/nearai/ironclaw/issues/3259)) has been open since May 5th. It requires immediate maintainer action to ensure downstream Rust consumers can securely update past `0.24.0`.
*   **WebUI Security Audit:** The Open/Closed state of WebUI auth and security parity for Reborn routes ([Issue #3615](https://github.com/nearai/ironclaw/issues/3615)) needs final verification and sign-off before the beta goes public.
*   **Browser E2E Coverage:** The epic for browser-driven full-stack E2E testing ([Issue #4632](https://github.com/nearai/ironclaw/issues/4632)) has broad scope but requires dedicated QA/CI bandwidth to land successfully.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-06-11

## 1. Today's Overview
LobsterAI experienced a highly active day, characterized by the release of version 2026.6.10 and a massive bulk-closure of 20 pull requests. The core maintainers are heavily focused on polishing desktop client experiences (specifically Windows updates and installers) and refining the UI renderer. The resolution of numerous long-standing "stale" community PRs—some dating back to early April—signals a concerted effort by the maintainers to clear the backlog and stabilize the codebase ahead of the new release. Project health is robust, showing strong iterative momentum and active repository maintenance.

## 2. Releases
- **LobsterAI 2026.6.10** 
  - **What's Changed:** This version bundles three major new features: user data backup & restore, a local callback login flow, and task completion notifications. Additional enhancements include UI/UX polish for the model selector and markdown rendering, refinements to OpenClaw settings, and critical fixes to the Windows in-app updater.
  - **Breaking Changes / Migration Notes:** The shift to a new local callback login flow (`PR #2122`) and data migration tools (`PR #2125`) imply backend and state-management updates. Users utilizing the desktop client will need to apply the latest update to maintain seamless notification and authentication flows.

## 3. Project Progress
The project saw 20 merged or closed PRs today, with substantial progress across multiple domains:
- **Desktop & Installer Stability:** Maintainer `@fisherdaddy` closed two critical PRs for the Windows platform, addressing a broken in-app updater ([PR #2141](https://github.com/netease-youdao/LobsterAI/pull/2141)) and redesigning the NSIS engine loading page ([PR #2142](https://github.com/netease-youdao/LobsterAI/pull/2142)).
- **Data Migration & Authentication:** The release officially integrates user data backup/restore capabilities and local callback login mechanisms, securing the application's foundation for local-first usage.
- **UI & Notifications:** `@liuzhq1986` successfully merged task completion notifications that restore the main window ([PR #2134](https://github.com/netease-youdao/LobsterAI/pull/2134)), while significant markdown and code block rendering updates were merged to enhance readability ([PR #2139](https://github.com/netease-youdao/LobsterAI/pull/2139)).
- **Backlog Clearance:** A massive batch of stale PRs from early April was closed/merged, bringing much-needed community contributions into the main branch (detailed in sections below).

## 4. Community Hot Topics
Although zero new issues were created today, the PRs that received closure today highlight the features the community has been most actively contributing to over the past two months:
- **Long-form Cowork & Context Management:** [PR #1499](https://github.com/netease-youdao/LobsterAI/pull/1499) (Session pruning to prevent context window exhaustion) addresses a fundamental limitation in AI agent memory. This reveals a strong user reliance on extended Cowork sessions for complex, multi-step tasks.
- **Skill Management Overhauls:** Two highly anticipated fixes regarding disabled skills still being injected into prompts were closed ([PR #1485](https://github.com/netease-youdao/LobsterAI/pull/1485), [PR #1501](https://github.com/netease-youdao/LobsterAI/pull/1501)). This highlights community demand for precise, reliable toggling of custom agent behaviors.
- **System Integrations:** Several PRs addressing IM Bot integrations (POPO), macOS local notifications, and scheduled tasks indicate heavy enterprise and power-user adoption of automation workflows.

## 5. Bugs & Stability
Several stability issues were officially closed today, indicating they are resolved in the `2026.6.10` release:
1. **High Severity - Windows Updater:** [PR #2141](https://github.com/netease-youdao/LobsterAI/pull/2141) fixed the in-app updater failing on Windows. *(Fix included in today's release)*.
2. **High Severity - System Prompts:** [PR #1485](https://github.com/netease-youdao/LobsterAI/pull/1485) fixed disabled skills bypassing restrictions and continuing to execute via OpenClaw. *(Fix merged today)*.
3. **Medium Severity - Data Loss:** [PR #2138](https://github.com/netease-youdao/LobsterAI/pull/2138) ensured that target backups, runtimes, and mcp-packages are preserved during a data restore.
4. **Low Severity - UI:** [PR #1505](https://github.com/netease-youdao/LobsterAI/pull/1505) fixed a bug where active skills wouldn't sync in the current session until the Agent was manually switched.

## 6. Feature Requests & Roadmap Signals
Today's merged stale PRs act as strong indicators of the project's evolving roadmap:
- **Rich Text Agent Configuration:** The introduction of a WYSIWYG Markdown editor for Agent identity/soul/user prompt files ([PR #1503](https://github.com/netease-youdao/LobsterAI/pull/1503)) suggests a push toward making Agent creation more user-friendly.
- **Desktop Lifecycle Controls:** [PR #1497](https://github.com/netease-youdao/LobsterAI/pull/1497) introduces explicit "Minimize to taskbar vs. Quit App" behavior for Windows, signaling a push toward native OS parity and desktop UX maturity.
- **Scheduled Task Debugging:** The addition of a "Test Task" button ([PR #1486](https://github.com/netease-youdao/LobsterAI/pull/1486)) hints that the upcoming versions will focus heavily on developer/automation operator experiences within the UI.

## 7. User Feedback Summary
Aggregating the context from the closed PRs, user pain points over the last quarter have revolved around:
- **Context Window Fragility:** Users running long, continuous AI sessions easily hit token limits, causing unrecoverable errors (solved by automatic session pruning).
- **Windows App Quirks:** Frustration with how the app handled backgrounding and updates on Windows OS.
- **State Desyncs:** Configuration changes (like disabling a skill or updating an agent) requiring app restarts or manual context switching to actually take effect. The latest release appears heavily targeted at smoothing over these friction points.

## 8. Backlog Watch
- **Dependency Bottlenecks:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (Dependabot bumping Electron from 40.x to 42.x) remains **Open** since April. Given the recent focus on Windows update bugs, merging and validating this major Electron bump should be a top priority for the maintainer team to ensure future stability.
- **Stale Bot Efficacy:** Numerous `stale` PRs received merge closure today, but many lacked active comment threads before merging. Maintainers should ensure these automated bulk-merges pass rigorous CI/CD checks to prevent regressions in the new release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-06-11

## 1. Today's Overview
The Moltis project is currently experiencing a period of low observable activity, with no new pull requests, merged code, or releases recorded in the past 24 hours. The sole piece of new activity is a minor bug report submitted yesterday regarding an unconfigured voice provider. This reduced cadence suggests that maintainers may be operating in a planning phase, taking a break, or working on long-term architectural branches that have not yet been pushed to the public repository. Overall, the project’s immediate bug tracker remains quiet, indicating general stability but highlighting a specific area for improvement in TTS (Text-to-Speech) integrations.

## 2. Releases
No new releases were recorded today. There are no breaking changes, new features, or migration notes to report.

## 3. Project Progress
There has been no measurable progress in the form of merged or closed pull requests today. The development pipeline is currently dry, with zero open PRs updated or merged in the last 24 hours.

## 4. Community Hot Topics
Community activity was minimal, centering entirely around a single newly opened issue:
*   **[#1114 [Bug]: provider 'coqui' not configured](https://github.com/moltis-org/moltis/issues/1114)**

**Analysis:** While this issue has zero comments and no reactions, it signals an underlying need within the user base to integrate or utilize local/open-source Text-to-Speech (TTS) solutions like Coqui. Users attempting to configure this provider are running into roadblocks, likely due to missing documentation, deprecated dependencies, or changes in the provider's API handling within Moltis.

## 5. Bugs & Stability
Only one bug was reported recently, categorized as minor:
*   **Minor: [#1114 [Bug]: provider 'coqui' not configured](https://github.com/moltis-org/moltis/issues/1114)** 
    *   *Details:* Opened by user `vvuk` on 2026-06-10. The issue notes that the Coqui provider is not configured correctly, preventing the use of this specific AI voice generation integration. 
    *   *Status:* No fix PRs are currently linked to this issue, and it remains unaddressed by maintainers.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were submitted today. However, the bug report regarding [#1114 (Coqui provider)](https://github.com/moltis-org/moltis/issues/1114) indirectly signals user demand for robust, self-hosted AI voice and audio capabilities. Maintainers should anticipate future feature requests asking for expanded support for local AI voice models as users seek alternatives to proprietary API providers.

## 7. User Feedback Summary
User feedback for the day is directly tied to the single bug report. The primary pain point identified is **integration friction with local AI models/plugins**. Users of Moltis expect seamless plug-and-play support for various AI modalities (like Coqui for audio). When configurations fail, it creates dissatisfaction, particularly for power users trying to build comprehensive, localized personal AI assistants. 

## 8. Backlog Watch
With today's volume being exceptionally low, the active backlog is small but requires attention to prevent staleness:
*   **[Issue #1114](https://github.com/moltis-org/moltis/issues/1114):** Though created recently, it currently has zero maintainer engagement. It requires triaging to determine if it is a user-error documentation gap or an actual backend bug. 
*   *General Observation:* The complete lack of PRs and releases suggests a broader need for maintainers to update the community on the project's current development status and expected roadmap to ensure long-term contributor confidence.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-06-11

## 1. Today's Overview
CoPaw (internally aligned with the QwenPaw repository) is experiencing **very high activity**, with 50 pull requests and 36 issues updated in the last 24 hours. The maintainers successfully cut two new releases (`v1.1.11-beta.3` and the stable `v1.1.11`), demonstrating a healthy, rapid release cadence. The open-to-closed ratio for both issues (18 open / 18 closed) and PRs (20 open / 30 merged) indicates a strong capacity by the core team to resolve community reports and merge contributions promptly. Overall, the project is in a highly active state, focusing heavily on stabilizing desktop client behaviors, expanding LLM provider support, and refining the developer/contributor experience.

## 2. Releases
*   **v1.1.11** (Stable Release)
    *   **Zero-Config Free Models:** Introduced Free Model OAuth, allowing one-click authentication for zero-config free models ([PR #5049](https://github.com/agentscope-ai/QwenPaw/pull/5049)).
    *   **New Provider:** Added Xiaomi MiMo Token Plan as a built-in provider ([PR #4722](https://github.com/agentscope-ai/QwenPaw/pull/4722)).
*   **v1.1.11-beta.3** (Pre-release)
    *   **Self-Evolving Skills:** Enhanced the `make-skill` flow to support self-evolving skill creation ([PR #4857](https://github.com/agentscope-ai/QwenPaw/pull/4857)).
    *   **CI Cleanup:** Removed redundant `channel-tests` workflow.

## 3. Project Progress
Today saw 30 PRs merged or closed, highlighting rapid progression in several key areas:
*   **Release Deployment:** The stable release was officially cut and merged ([PR #5080](https://github.com/agentscope-ai/QwenPaw/pull/5080)).
*   **Build & Packaging Fixes (Windows):** The team tackled several tricky Windows build verification issues related to `aiohttp` and SSL certificate stores, pinning versions and using the `certifi` CA bundle ([PR #5082](https://github.com/agentscope-ai/QwenPaw/pull/5082), [PR #5083](https://github.com/agentscope-ai/QwenPaw/pull/5083), [PR #5084](https://github.com/agentscope-ai/QwenPaw/pull/5084)).
*   **Security & UX:** Added the ability to safely preview files outside the workspace in File Guard ([PR #5081](https://github.com/agentscope-ai/QwenPaw/pull/5081)), and surfaced original API error reasons directly to users instead of generic error messages ([PR #5079](https://github.com/agentscope-ai/QwenPaw/pull/5079)).
*   **Desktop Fixes:** Addressed an annoying bug where restarting the Windows desktop app reset the selected agent by persisting the backend port across restarts ([PR #5051](https://github.com/agentscope-ai/QwenPaw/pull/5051)), and fixed session filename duplication causing overflow on Windows ([PR #5036](https://github.com/agentscope-ai/QwenPaw/pull/5036)).
*   **Channel Integrations:** Fixed DingTalk sending empty "Processing..." AI cards by moving to on-demand card creation ([PR #5061](https://github.com/agentscope-ai/QwenPaw/pull/5061)).

## 4. Community Hot Topics
*   **AgentScope 2.0 Migration** ([Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)): A highly discussed breaking change proposal (8 comments, 2 👍). The maintainers plan to upgrade the backend from AgentScope 1.x to 2.0. This is a major architectural shift that the community is watching closely.
*   **Test Coverage Phase 5** ([Issue #4342](https://github.com/agentscope-ai/QwenPaw/issues/4342)): Closed today after 11 comments. This reflects the rigorous ongoing effort to supplement unit tests for `local_models`, `providers`, and `utils`.
*   **Sub-agent Visibility** ([Issue #4923](https://github.com/agentscope-ai/QwenPaw/issues/4923)): Users are actively requesting (3 comments) better real-time visibility into tasks executed by sub-agents spawned via `spraw_subagent`. 
*   **Integrating Headroom for Token Compression** ([Issue #5063](https://github.com/agentscope-ai/QwenPaw/issues/5063)): Proposed on the same day, already garnering 2 comments. It suggests integrating a local-first reversible context compression layer to reduce token consumption by up to 95%.

## 5. Bugs & Stability
The team resolved several critical bugs today, though some persistent stability issues remain open:
*   **Severe - Desktop Console UI Freezing:** 
    *   Users report severe UI lag (>10 seconds) when switching between 4+ session tabs in the Windows Tauri client ([Issue #5053](https://github.com/agentscope-ai/QwenPaw/issues/5053) - *Open*). 
    *   Chat history rendering causes massive freezes when token counts get into the millions. Users are requesting chunked loading/pagination ([Issue #4213](https://github.com/agentscope-ai/QwenPaw/issues/4213) - *Closed, but underlying UX issue noted*).
*   **High - Local Model/Shell Execution Hangups:** 
    *   Using local LLMs (e.g., Qwen 3.6-27B via vLLM) causes the UI to infinitely load without backend errors ([Issue #4989](https://github.com/agentscope-ai/QwenPaw/issues/4989) - *Closed*).
    *   Windows desktop executions of shell commands constantly pop up CMD windows, severely disrupting workflows ([Issue #4777](https://github.com/agentscope-ai/QwenPaw/issues/4777) - *Closed*).
*   **Medium - Scheduled Tasks failing to push:** WeChat scheduled tasks trigger correctly but fail to push the final response due to target ID mismatches ([Issue #4878](https://github.com/agentscope-ai/QwenPaw/issues/4878) - *Closed*).
*   **Medium - Tool Call Arguments Bug:** After several successful tool calls, subsequent calls fail with `unexpected keyword argument 'arguments'` ([Issue #5052](https://github.com/agentscope-ai/QwenPaw/issues/5052) - *Open*).

## 6. Feature Requests & Roadmap Signals
Recent PRs and issues strongly signal the project's near-term trajectory:
*   **Agent OS Driver & MCP/A2A Unification:** A major open PR ([PR #5067](https://github.com/agentscope-ai/QwenPaw/pull/5067)) introduces a unified abstraction layer for external capabilities (MCP/A2A/ACP), moving away from fragmented agent code.
*   **Runtime 2.0:** [PR #5078](https://github.com/agentscope-ai/QwenPaw/pull/5078) proposes replacing the monolithic runner with a modular architecture and a `ToolCoordinator`.
*   **Agent-Scoped Authentication:** Merged recently ([PR #4858](https://github.com/agentscope-ai/QwenPaw/pull/4858)), this allows different users to safely access different agents on the same deployment. 
*   **Visual Model Fallback:** Users are requesting an independent visual model config for text-only LLMs ([Issue #4992](https://github.com/agentscope-ai/QwenPaw/issues/4992)).
*   **Predictions for next versions:** Look for the AgentScope 2.0 integration, the modular Runtime 2.0 rollout, and built-in context compression mechanisms.

## 7. User Feedback Summary
Users are heavily utilizing CoPaw/QwenPaw as a desktop application and local LLM hub, but this brings specific pain points:
*   **Streaming UX gaps:** A major frustration is the lack of streaming renders for tool calls (like `write_file`). Users cannot tell if the agent is "thinking" or "frozen" while generating long code blocks ([Issue #4865](https://github.com/agentscope-ai/QwenPaw/issues/4865), 2 👍).
*   **Memory/Resource Leaks:** Users are experiencing heavy client resource usage, leading to UI freezes and MCP server process accumulation after multiple restarts ([Issue #4834](https://github.com/agentscope-ai/QwenPaw/issues/4834)).
*   **Overall Satisfaction:** Despite UI sluggishness with heavy histories, the rapid patching of bugs (like the `/skills` command failure and file path overflows) shows a highly responsive dev team meeting user needs efficiently.

## 8. Backlog Watch
*   **Plugin & Data Analysis contributions:** The community PR adding a data-analysis plugin (DataPaw) with 12 BI skills ([PR #4622](https://github.com/agentscope-ai/QwenPaw/pull/4622)) has been open since May 22 and needs final maintainer review.
*   **Chat-level Token Visibility:** [PR #4433](https://github.com/agentscope-ai/QwenPaw/pull/4433) (open since May 15) seeks to add a `TokenUsageBadge` to the console. Given the user complaints about context window sizes and token consumption, this PR addresses a core need and warrants prioritization.
*   **Windows System Tray Support:** A user-requested quality-of-life feature ([Issue #3751](https://github.com/agentscope-ai/QwenPaw/issues/3751)) to minimize the app to the system tray. Crucial for a desktop background assistant, it has been open since April 23 without core-team assignment.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-06-11

## 1. Today's Overview
ZeroClaw exhibited exceptionally high development velocity over the past 24 hours, with 50 pull requests and 37 issues updated, indicating an actively engaged maintainer and contributor base. The project is currently heads-down on architectural overhauls, with significant efforts directed toward a dynamic plugin system, cross-platform CI stability, and resolving high-severity runtime edge cases. There were no new software releases today, suggesting the team is currently in a heavy feature accrual and stabilization phase, likely building towards the next major milestone.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
The merged and closed PRs reveal a strong focus on infrastructure, security, and memory architecture:
*   **Security & Tooling:** [`feat(tools): add http_request auth secrets`](https://github.com/zeroclaw-labs/zeroclaw/pull/7354) was merged, allowing agents to securely reference credentials without leaking secrets into tool-call arguments. 
*   **Performance:** [`perf(runtime): avoid final CLI output clones`](https://github.com/zeroclaw-labs/zeroclaw/pull/7353) was merged, optimizing memory usage during agent loop returns.
*   **Architecture:** [`feat(memory): migrate gateway and channel consolidation to MemoryStrategy`](https://github.com/zeroclaw-labs/zeroclaw/pull/7234) successfully landed, completing a major milestone in standardizing memory handling across channels.
*   **Hardware/IoT:** The [`feat(channels/hardware/demo): add host Telegram ESP32 simulator harness`](https://github.com/zeroclaw-labs/zeroclaw/pull/7363) was merged, expanding ZeroClaw's edge/IoT capabilities.

## 4. Community Hot Topics
Community discussions were dominated by core architecture and deployment accessibility:
*   **Logo and Branding:** The most commented issue is a fun community thread requesting a [`better LOGO for Zeroclaw`](https://github.com/zeroclaw-labs/zeroclaw/issues/4710) (20 comments), showing healthy community attachment.
*   **Full Docker Image:** [`[Feature]: Provide a "full" docker image`](https://github.com/zeroclaw-labs/zeroclaw/issues/3642) (11 comments) remains highly active. Users are frustrated by feature-gated deployments (like WhatsApp) and desire a batteries-included Docker image to lower the barrier to entry for non-technical users.
*   **Multi-Tenancy:** [`[Feature]: Per-sender RBAC for multi-tenant agent deployments`](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (9 comments) is generating significant interest from enterprise users needing isolated workspaces, tool sets, and rate limits within a single ZeroClaw instance.

## 5. Bugs & Stability
Several high-priority (P1) bugs were reported, but the maintainers are actively pushing fixes:
*   **Context Window Crashing (P1):** Users reported that the [`Default 32k context budget is exceeded by system prompt + tool definitions on iteration 1`](https://github.com/zeroclaw-labs/zeroclaw/issues/5808), causing a perpetual preemptive trim loop that entirely blocks workflows.
*   **MCP Silent Hangs (P1):** [`tool_search not in default_auto_approve`](https://github.com/zeroclaw-labs/zeroclaw/issues/6721) is causing deferred loading + webhook setups to silently hang for 120 seconds and auto-deny. *Fix available:* Maintainer Audacity88 opened [`fix(runtime): apply MCP policy to MCP registration`](https://github.com/zeroclaw-labs/zeroclaw/pull/7456) to resolve this.
*   **Data Loss (S0/P1):** A critical bug where [`file_write tool silently fails — written files are invisible on the host filesystem`](https://github.com/zeroclaw-labs/zeroclaw/issues/4627) was updated today, highlighting severe container volume mounting or sandbox security issues.
*   **Windows Instability (P2):** User NiuBlibing reported that [`74 test failures on Windows`](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) are going unnoticed because the test suite only runs on Linux. *Fix available:* PR [`fix(ci): restore master compile`](https://github.com/zeroclaw-labs/zeroclaw/pull/7466) and [`[Feature]: Run the test suite on Windows and macOS in CI`](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) have been opened to address the platform gap.

## 6. Feature Requests & Roadmap Signals
A clear roadmap towards v0.8.0+ is solidifying, heavily focused on extensibility and unifying the runtime:
*   **Dynamic Plugin System:** RFC [`RFC: Native Dynamic-Library Plugin System`](https://github.com/zeroclaw-labs/zeroclaw/issues/7420) and the merged work on WASM plugins (e.g., PR [`feat(plugins): add office-tools WASM plugin`](https://github.com/zeroclaw-labs/zeroclaw/pull/7454)) indicate a massive shift towards a modular architecture.
*   **Core Simplification:** [`RFC: Prefer a lighter ZeroClaw core through external integrations`](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) proposes stripping out built-in tools in favor of external skills/plugins.
*   **Engine Unification:** [`RFC: Unify the three agent turn engines`](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) signals a major refactor to clean up duplicated agent-loop code.
*   **Voice Pipelines:** PR [`feat(channels): add voice pipeline facade`](https://github.com/zeroclaw-labs/zeroclaw/pull/7394) is actively being reviewed, paving the way for robust audio agent interactions.

## 7. User Feedback Summary
Users love the microkernel architecture but are experiencing growing pains as the project scales into enterprise use cases. Pain points largely revolve around default configurations being too restrictive or brittle (e.g., 32k token limits breaking out-of-the-box, complex MCP auto-approval setups). Non-technical users are struggling with deployment, heavily requesting "batteries-included" containers. However, overall satisfaction is high, evidenced by robust community engagement in RFCs and a strong willingness to submit detailed, high-quality bug reports.

## 8. Backlog Watch
*   **[P1] Provider configurations being overwritten:** [`Agent running model_routing_config "action": "upsert_agent" stomps on schema_version = 2 settings`](https://github.com/zeroclaw-labs/zeroclaw/issues/6309) is currently blocked and needs author action, but represents a significant configuration degradation for advanced users.
*   **[P2] Dead Configuration Code:** [`MemoryConfig.rerank_enabled / rerank_threshold scaffolded but no consumer`](https://github.com/zeroclaw-labs/zeroclaw/issues/6722) exposes orphaned configuration code that tricks users into thinking they are tweaking reranking parameters. Needs a maintainers to wire it up or remove it. 
*   **[P1] Subagent Working Directories:** [`[Bug]: Subagents do not inherit "cwd" in ACP sessions`](https://github.com/zeroclaw-labs/zeroclaw/issues/7263) is causing workflow blocks for users running complex multi-agent setups.

</details>