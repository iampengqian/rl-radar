# OpenClaw Ecosystem Digest 2026-05-23

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-22 22:17 UTC

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

# OpenClaw Project Digest — 2026-05-23

## 1. Today's Overview
OpenClaw experienced very high issue and pull request activity over the last 24 hours, with **500 issues updated** (410 open, 90 closed) and **500 PRs updated** (389 open, 111 merged/closed). Despite the high volume of maintenance and community submissions, **no new stable releases were cut today**, leaving several critical bugs unpatched in the latest public builds. The project is clearly in a state of heavy architectural iteration, with significant maintainer-submitted refactor PRs indicating preparations for a major internal overhaul, though community members are increasingly frustrated by accumulating regressions.

## 2. Releases
No new releases were published today. The project remains on a recent nightly/alpha cadence, and users are actively reporting issues stemming from recent unstable builds (e.g., `2026.5.19` to `2026.5.20`).

## 3. Project Progress
While 111 PRs were merged or closed, the most notable advancements are seen in large architectural and security-related pull requests submitted by maintainers:

*   **Architectural Refactoring:** Maintainer `steipete` opened two massive PRs. [PR #81402](https://github.com/openclaw/openclaw/pull/81402) (Size: XL) migrates scattered runtime state (JSON, JSONL, lock files) into a typed SQLite layout to resolve unbounded state growth. [PR #85341](https://github.com/openclaw/openclaw/pull/85341) (Size: XL) internalizes the former Pi agent/runtime package surface under OpenClaw-owned modules.
*   **Core Fixes:** Several fixes were merged or advanced, including restoring subagent model default priority in [PR #58823](https://github.com/openclaw/openclaw/pull/58823) and fixing unhandled promise rejections in the subagent registry in [PR #84616](https://github.com/openclaw/openclaw/pull/84616).
*   **Security & DevEx:** The `openclaw doctor` command is getting exposed to dry-run previews in [PR #84472](https://github.com/openclaw/openclaw/pull/84472), and TOCTOU races in security-critical file reads were addressed in [PR #58311](https://github.com/openclaw/openclaw/pull/58311).

## 4. Community Hot Topics
The community is highly active, predominantly focused on message delivery failures, multi-agent state management, and configuration regressions.

*   **Subagent State Loss:** The most discussed issue is [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) (14 comments). Users report subagent task results are silently lost without retry or notification, severely breaking complex multi-step orchestration.
*   **System Prompt Injections Ignored:** [Issue #29387](https://github.com/openclaw/openclaw/issues/29387) (13 comments, 4 thumbs up) highlights that per-agent `agentDir` configurations (like `SOUL.md` and `AGENTS.md`) are silently ignored in favor of the shared workspace, disrupting agent customization.
*   **Hardcoded Paths:** A highly concerning operational bug generated significant buzz in [Issue #51429](https://github.com/openclaw/openclaw/issues/51429) (11 comments). A developer's local path (`/Users/wangtao`) was hardcoded and merged into the release, breaking out-of-the-box installations. 
*   **Unbounded Memory Growth:** [Issue #55334](https://github.com/openclaw/openclaw/issues/55334) (11 comments) details how `sessions.json` grows indefinitely with duplicated snapshots, causing Gateway OOM kills.

## 5. Bugs & Stability
Stability remains the weakest link in the current build cycle, with several critical P1 bugs reported or updated today:

*   **P0 Security Leak (Patched/Closed):** [Issue #85240](https://github.com/openclaw/openclaw/issues/85240) was quickly closed after it was discovered that the `relevant-memories` semantic recall feature was injecting private User A memories into User B's session context due to missing `sender_id` isolation.
*   **Performance Regressions:** [Issue #85333](https://github.com/openclaw/openclaw/issues/85333) reports that `openclaw doctor --fix` became 4-5x slower overnight (55s to 229s+) due to a session snapshot path traversal bottleneck.
*   **Silent Message Truncation:** [Issue #84516](https://github.com/openclaw/openclaw/issues/84516) (P1) shows long agent replies via the Codex app-server being silently truncated at ~1000 characters with no error flags.
*   **Upgrade Breakages:** [Issue #85027](https://github.com/openclaw/openclaw/issues/85027) reports that upgrading from `2026.5.6` to `2026.5.19` completely broke macOS LaunchAgent Gateways, requiring a Time Machine restore.

## 6. Feature Requests & Roadmap Signals
Key feature requests signal user needs for better enterprise proxy support and multi-tenant security:

*   **Dynamic Model Discovery:** [Issue #10687](https://github.com/openclaw/openclaw/issues/10687) requests fully dynamic model catalogs for providers like OpenRouter. This seems aligned with the internal refactoring seen in today's PRs.
*   **Per-Candidate Retry Counts:** [Issue #59413](https://github.com/openclaw/openclaw/issues/59413) highlights the need for customizable model fallback behavior for pool-based/proxy API providers, preventing immediate failovers on single key failures.
*   **Outbound Policy Enforcement:** [Issue #56349](https://github.com/openclaw/openclaw/issues/56349) requests an unbypassable pre-send validation boundary for all outbound messages to guarantee compliance and security hooks.
*   **Image Generation Metadata:** [Issue #85461](https://github.com/openclaw/openclaw/issues/85461) requests capturing provider-returned cost and usage metadata for image generation tasks.

## 7. User Feedback Summary
Users are expressing significant frustration with the reliability of long-running sessions and multi-channel messaging. A recurring theme is **"silent failures"**—processes that appear to succeed in the UI or logs but fail to deliver messages (e.g., Telegram, Discord, Feishu) or execute sub-tasks. Docker and multi-instance users are plagued by file permission and container name collision issues ([Issue #51363](https://github.com/openclaw/openclaw/issues/51363)). However, despite the turbulence, power users are deeply invested in the plugin ecosystem and are actively submitting complex PRs to fix memory leaks and deadlocks, showing high community commitment.

## 8. Backlog Watch
Several highly critical issues are accumulating the `clawsweeper:no-new-fix-pr` label, indicating maintainer bottlenecks:

*   **Session State Races:** [Issue #57019](https://github.com/openclaw/openclaw/issues/57019) describes a session write lock race where async release can delete newly acquired locks. A linked PR is open but awaits review.
*   **Compaction Model Override:** [Issue #57901](https://github.com/openclaw/openclaw/issues/57901) (P2) reports safeguard compaction ignores configured models, leading to unexpected billing/model usage.
*   **Proactive Routing:** [Issue #51947](https://github.com/openclaw/openclaw/issues/51947) (Closed, but active) highlights proactive sends routing to the wrong conversation in multi-chat environments.
*   **Event Priority Queueing:** [Issue #50739](https://github.com/openclaw/openclaw/issues/50739) notes that system events queue behind failing LLM requests, making in-session alerts unreliable during rate-limit incidents.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests from May 23, 2026.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently in a state of rapid, bifurcated growth, characterized by a massive architectural maturation phase. Major frameworks like **OpenClaw**, **IronClaw**, and **ZeroClaw** are undergoing ground-up rewrites to support advanced multi-agent orchestration, tool security, and RPC-driven architectures. Simultaneously, interface and deployment projects like **NanoBot**, **Moltis**, and **CoPaw** are aggressively iterating on user experience, local-first computing, and multimodal integrations (voice, TTS, and diverse messaging platforms). While the ecosystem is highly active, it is also experiencing friction, with projects accumulating technical debt and regressions as they rush to stabilize frequent nightly builds for power users.

## 2. Activity Comparison
*Health Score Key: A (Excellent/High Momentum), B (Active/Stable), C (Passive/Stale).*

| Project | Issues (24h) | PRs (24h) | Releases | Focus / Status | Health Score |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 (90 closed) | 500 (111 merged) | 0 | High volatility; heavy refactoring | B+ |
| **IronClaw** | 26 (6 closed) | 50 (17 merged) | 0 | Major "Reborn" architecture rewrite | A |
| **ZeroClaw** | ~40+ active | 41 open, 9 merged | 0 | TUI/RPC transition, channel bugs | B+ |
| **CoPaw** | 24 active | 23 active (10 merged)| 0 | Plugin system, channel fixes | A- |
| **NanoBot** | 7 active | 20 active (12 merged)| 0 | Local-first image gen, WebUI | A |
| **NanoClaw** | 4 active | 28 merged | 0 | Channel integrations, container fixes| A- |
| **LobsterAI** | Low volume | 12 merged | **1** (v2026.5.22) | Subagent UX stability | A |
| **Moltis** | 7 closed | 9 merged | 0 | Voice/TTS, Docker edge cases | A |
| **Hermes Agent**| 50 active | 50 active (22 merged)| 0 | Gateway routing, CI stabilization | B+ |
| **NullClaw** | 0 | 3 updated | 0 | Low activity, PR backlog | C |
| **PicoClaw / TinyClaw / ZeptoClaw** | N/A | N/A | N/A | No activity / Generation failed | N/A |

## 3. OpenClaw's Position
*   **Advantages vs. Peers:** OpenClaw remains the undisputed core reference implementation with the largest raw volume of community engagement (over 1,000 issue/PR updates daily). Its scale attracts deep, enterprise-grade feature proposals like dynamic model discovery and multi-tenant security boundaries.
*   **Technical Approach:** Unlike application-layer projects, OpenClaw is currently focused on deep foundational infrastructure—specifically migrating scattered JSON/JSONL states into typed SQLite layouts and internalizing runtime packages. 
*   **Community Size Comparison:** While OpenClaw dwarfs other projects in contributor volume, its signal-to-noise ratio is currently stressed. Projects like LobsterAI and Moltis demonstrate much tighter, highly synchronized maintainer-to-user feedback loops. OpenClaw is accumulating high-severity regressions (e.g., hardcoded paths, silent truncations) that require immediate triage to maintain community trust.

## 4. Shared Technical Focus Areas
Several technical requirements are emerging simultaneously across independent projects, highlighting universal needs in the AI agent landscape:

*   **Robust Subagent & Multi-Agent Orchestration:** Managing child agents without losing context is a top priority. **OpenClaw** (subagent task loss), **IronClaw** (Reborn subagent spawn loops), and **LobsterAI** (Subagent session UIs) are all heavily focused on fixing state handoffs between agents.
*   **Context Window & Memory Optimization:** Token bloat is a universal pain point. **NanoBot** is optimizing skill routers to reduce system prompts by 60%, **NanoClaw** is rotating oversized session transcripts, and **Hermes Agent** is actively battling context compression crashes.
*   **Docker & Container Isolation:** Self-hosters demand safer, more isolated execution environments. **IronClaw** and **Moltis** are explicitly implementing Docker sandboxes and better host-to-container data mounts, while **NanoClaw** is battling to support rootless Podman and Apple Containers.
*   **Advanced Provider & Model Routing:** As models proliferate, systems need dynamic fallbacks. **OpenClaw**, **Hermes Agent**, and **NullClaw** are introducing custom model fallbacks, adaptive retries, and preserving granular network errors for provider health probes.

## 5. Differentiation Analysis
*   **Architecture & Deployment:**
    *   **OpenClaw / IronClaw:** Focused on massive, scalable, event-driven core architectures (Event Buses, SQLite state migrations).
    *   **Moltis / Hermes / CoPaw:** Heavily biased toward multimodal channel bridging (Telegram, WhatsApp, WeChat) and voice/TTS integrations. 
    *   **NanoBot / ZeroClaw:** Pushing the envelope on local-first and CLI/TUI experiences, treating the terminal as a first-class citizen.
*   **Target Users:**
    *   **CoPaw / LobsterAI:** Targeting desktop and enterprise end-users who want out-of-the-box UIs, dashboard analytics, and visual subagent tracking.
    *   **IronClaw / OpenClaw:** Targeted at developers and self-hosters building complex, multi-tenant, or cloud-hosted agentic platforms.
*   **Security:** **IronClaw** differentiates with a heavy focus on scoped tool permissions and OAuth substrates, whereas **NullClaw** is prioritizing strict infrastructure observability (cURL transport failures).

## 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iteration & Architectural Shifts:** **OpenClaw**, **IronClaw**, **ZeroClaw**, and **Hermes Agent**. These projects show massive momentum but are highly volatile, currently burdened by CI pipeline fixes, flaky tests, and edge-case regressions. 
*   **Tier 2: High-Velocity Feature Expansion:** **NanoBot**, **NanoClaw**, **CoPaw**, and **Moltis**. These projects are shipping numerous daily PRs. They are incredibly responsive to user feedback, often closing bugs within 24-48 hours.
*   **Tier 3: Stable Cadence / Lull:** **LobsterAI** and **NullClaw**. LobsterAI represents the ideal "stabilization" phase, issuing coordinated, highly polished releases (v2026.5.22). NullClaw is currently in a dormant lull, requiring core maintainer review to clear a growing PR backlog.

## 7. Trend Signals
*   **Silent Failures are the New Crash:** As agents become more asynchronous, the most frustrating user experience is "silent failure"—where an API returns 200 OK but the message is never delivered or is truncated (seen in OpenClaw, CoPaw, Hermes). Observability tools (like OpenTelemetry in ZeroClaw and `nanobot doctor`) will be critical.
*   **The "Opinionated Gateway" Backlash:** Users are pushing back against messaging gateways (WhatsApp/Telegram) that assume an AI *must* reply to every ping. There is a distinct need for AI agents to intelligently choose to remain silent, requiring better intent-routing filters.
*   **Local-First AI over Cloud API Proxies:** The swift implementation of Ollama image generation in NanoBot and the demand for Apple Container support in NanoClaw highlight a growing demographic of power users who want fully capable, offline-first, locally-hosted AI ecosystems.
*   **Security at the Tool Level:** With the rise of MCP (Model Context Protocol) and dynamic tooling, security is shifting from the LLM layer to the execution layer. Features like user-scoped tool installs, Docker sandboxes, and SSRF protections on internal URL fetches are becoming standard requirements.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-23

## 1. Today's Overview
NanoBot is currently experiencing a high-velocity development phase with very strong community engagement. In the last 24 hours, the project saw a significant influx of 20 updated Pull Requests (12 merged/closed) and 7 active Issues, indicating a rapid iteration cycle led by both maintainers and contributors. Activity is heavily focused on expanding provider support (especially for image generation), introducing a new "CLI Apps" paradigm, and hardening existing features like memory management and the WebUI. No new official version was tagged today, but the sheer volume of merged features and bug fixes suggests an upcoming release is imminent. Overall, the project is highly active and healthy.

## 2. Releases
No new official releases were tagged today (2026-05-23). 

## 3. Project Progress
Today saw an impressive 12 PRs merged/closed, bringing major feature advancements, structural refactoring, and critical stability patches:
*   **New Capabilities:** Native Ollama image generation is now fully integrated ([PR #3946](https://github.com/HKUDS/nanobot/pull/3946)), alongside new OpenAI and Codex image generation providers ([PR #3954](https://github.com/HKUDS/nanobot/pull/3954)). The highly anticipated "CLI Apps" feature for CLI-Anything integrations was also merged ([PR #3963](https://github.com/HKUDS/nanobot/pull/3963)).
*   **Infrastructure & Refactoring:** The legacy unified-diff `patch` parameter was completely removed in favor of a structured `edits` array to clean up the `apply_patch` tool ([PR #3960](https://github.com/HKUDS/nanobot/pull/3960)). Image provider HTTP handling was unified across MiniMax and AIHubMix ([PR #3929](https://github.com/HKUDS/nanobot/pull/3929)).
*   **Bug Fixes & UX:** Fixed a critical bug where Responses replay item IDs were duplicating, which caused Codex to reject resumed conversations ([PR #3961](https://github.com/HKUDS/nanobot/pull/3961)). WebUI was improved by filling missing locale keys for `es`, `fr`, `id`, `ko`, `vi`, `zh-TW`, and `ja` ([PR #3964](https://github.com/HKUDS/nanobot/pull/3964), [PR #3962](https://github.com/HKUDS/nanobot/pull/3962)), and fixing misleading file edit counters ([PR #3957](https://github.com/HKUDS/nanobot/pull/3957)). 

## 4. Community Hot Topics
*   **Multi-turn Skill Management:** [Issue #3846](https://github.com/HKUDS/nanobot/issues/3846) (👍 1, 4 comments) proposes a design enhancement to keep skill content persistent during multi-turn conversations, moving away from the generic `read_file` tool. This highlights a user need for more reliable, context-aware complex agent workflows.
*   **Heartbeat Task Duplication:** [Issue #3028](https://github.com/HKUDS/nanobot/issues/3028) (3 comments) brings up a critical architectural design flaw where the heartbeat mechanism (a scheduled task) triggers the creation of *another* scheduled task, resulting in duplicated actions (e.g., spamming the user). 
*   **BM25-lite Skill Router:** [PR #3865](https://github.com/HKUDS/nanobot/pull/3865) proposes a lightweight BM25-based skill router to reduce system prompts by ~60%. This suggests the community is actively optimizing for high-skill-volume environments where token limits and prompt clarity are becoming bottlenecks.

## 5. Bugs & Stability
*   **API 400 Error on Anthropic (Severity: High):** [Issue #3956](https://github.com/HKUDS/nanobot/issues/3956) reported that reading images via `read_file` stored content as a `list`, causing permanent 400 errors from the Anthropic API. *Status: Closed/Fixed as of today.*
*   **WebUI Conversation Crash (Severity: Medium):** [Issue #3884](https://github.com/HKUDS/nanobot/issues/3884) details conversations closing immediately after the first response on the WebUI interface. *Status: Closed, likely addressed by recent WebUI patches.*
*   **Disabled Skills Still Showing (Severity: Low):** [Issue #3959](https://github.com/HKUDS/nanobot/issues/3959) notes that skills added to `disabledSkills` in the config are still listed by the `/skill` command. *Status: Open, awaiting fix.*
*   **Security Fix:** [PR #3928](https://github.com/HKUDS/nanobot/pull/3928) addressed an SSRF vulnerability where `web_fetch` validated initial URLs but failed to validate internal/private redirect targets. *Status: Merged.*

## 6. Feature Requests & Roadmap Signals
Several open PRs and issues signal strong roadmap directions for the next version:
*   **Lean Built-in Skills:** [Issue #3958](https://github.com/HKUDS/nanobot/issues/3958) requests moving the "Weather" skill from a built-in feature to an example, indicating a move toward a leaner core.
*   **Local-First Image Gen:** With Ollama support merged, users are pushing for deeper local-first ecosystems (as requested in [Issue #3941](https://github.com/HKUDS/nanobot/issues/3941)).
*   **Safety & Execution Control:** [PR #3937](https://github.com/HKUDS/nanobot/pull/3937) introduces a user confirmation mechanism for dangerous CLI commands, which will likely be a key security feature in the next release.
*   **Long-Term Memory Optimization:** [PR #3952](https://github.com/HKUDS/nanobot/pull/3952) proposes enhancing "Dream + Consolidator" prompts to prevent memory duplication bloat in `MEMORY.md`—a crucial improvement for power users running long-lived agents.
*   **Health Diagnostics:** [PR #3776](https://github.com/HKUDS/nanobot/pull/3776) proposes `nanobot doctor`, a one-stop diagnostic tool for checking API keys, workspace validity, and network reachability.

## 7. User Feedback Summary
Users are actively utilizing NanoBot in complex, multi-turn setups but are encountering friction with context window management (e.g., token bloat from loading too many skills, skills failing to persist over long sessions). There is distinct friction around scheduled tasks and heartbeats, with users noting that background proactive agents tend to duplicate tasks or fail to read context properly. However, the rapid closure of issues and active deployment of bug fixes demonstrate high maintainer responsiveness. The community is highly engaged in local-first computing, evidenced by the rapid implementation of Ollama image generation. 

## 8. Backlog Watch
The following items require maintainer attention to progress:
*   **Heartbeat Architecture Re-imagining:** [PR #1443](https://github.com/HKUDS/nanobot/pull/1443) (Open since March 2026) and [PR #2364](https://github.com/HKUDS/nanobot/pull/2364) (Closed, but addressing the still-open [Issue #3028](https://github.com/HKUDS/nanobot/issues/3028)). The heartbeat duplication issue needs a definitive architectural merge to prevent runaway cron tasks.
*   **Skill Router PR:** [PR #3865](https://github.com/HKUDS/nanobot/pull/3865) is a massive quality-of-life improvement for agents with many skills but is still open. Further testing and maintainer review are needed.
*   **Manifest Provider Integration:** [PR #3568](https://github.com/HKUDS/nanobot/pull/3568) has been open for nearly a month, awaiting final review for the Manifest LLM router integration.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-23

## 1. Today's Overview
The Hermes Agent project is experiencing highly active daily development, with 50 issues and 50 pull requests updated in the last 24 hours. The community remains deeply engaged in enhancing gateway stability, expanding platform integrations, and fixing provider-specific edge cases. While no new software releases were cut today, a significant volume of bug fixes and foundational architectural PRs were merged, indicating steady preparation for a future release. Overall, the project is healthy but currently burdened by an accumulation of edge-case bugs related to context compression, provider fallbacks, and platform gateway routing.

## 2. Releases
There were **0 new releases** today. The latest identified release version in current usage/discussions is **v0.14.0**. 

## 3. Project Progress
Today saw 22 PRs merged or closed, demonstrating strong momentum in fixing CI pipelines, stabilizing providers, and introducing community platform adapters. Key advancements include:
*   **CI/CD Stability:** Multiple PRs addressing a flaky supply-chain scanner were finally resolved (PR [#13411](https://github.com/NousResearch/hermes-agent/pull/13411), [#23592](https://github.com/NousResearch/hermes-agent/pull/23592), [#30621](https://github.com/NousResearch/hermes-agent/pull/30621)), migrating from asymmetric two-dot diffs to merge-base diffs to eliminate false positives on stale branches.
*   **Provider Fixes:** MiniMax OAuth token caching was fixed (PR [#30619](https://github.com/NousResearch/hermes-agent/pull/30619)), and custom provider normalization was patched to stop silently discarding `api_version` and `auth_mode` (PR [#30617](https://github.com/NousResearch/hermes-agent/pull/30617)).
*   **New Platform Integrations:** The lightweight push-notification service `ntfy` was introduced as a fully functional platform adapter (PR [#30625](https://github.com/NousResearch/hermes-agent/pull/30625)), and Discord slash-command access controls were added (PR [#29953](https://github.com/NousResearch/hermes-agent/pull/29953)).

## 4. Community Hot Topics
The community is actively discussing core agent limitations, particularly around token lengths and context management:
*   **Output Length Truncation (33 comments, 4 👍):** [Issue #7237](https://github.com/NousResearch/hermes-agent/issues/7237) remains a major pain point. Users report frequent `Error: Response truncated due to output length limit` mid-stream during long-form generations across CLI and gateways.
*   **Claude CLI Setup Failure (11 comments, 4 👍):** [Issue #29125](https://github.com/NousResearch/hermes-agent/issues/29125) highlights that users are struggling to configure Hermes with Anthropic's Claude CLI, particularly when handling tokens for Claude Pro/Max subscriptions.
*   **Google Workspace Multi-Account (4 comments, 9 👍):** [Issue #15602](https://github.com/NousResearch/hermes-agent/issues/15602) is highly requested. Users heavily desire the ability to link both personal and work Google Workspace accounts simultaneously. 
*   **Cloud Config Sync (3 comments, 6 👍):** [Issue #20510](https://github.com/NousResearch/hermes-agent/issues/20510) requests native cross-device syncing for the `~/.hermes/` configuration directory, reflecting a growing user base operating across multiple machines.

## 5. Bugs & Stability
Several high-priority (P1) bugs impacting gateways and core agent loops were reported today:
*   **P1 | Gateway Profile Blindness:** [Issue #30626](https://github.com/NousResearch/hermes-agent/issues/30626) reveals that gateways only read `active_profile` at boot, ignoring live switches. *Fix status: No PR yet.*
*   **P1 | Telegram Compression Crash Loop:** [Issue #20470](https://github.com/NousResearch/hermes-agent/issues/20470) (7 👍) notes that session splits during context compression cause an infinite preflight loop. *Fix status: Addressed in PR [#30622](https://github.com/NousResearch/hermes-agent/pull/30622) (Open).*
*   **P1 | Vision Fallback Failure:** [Issue #27555](https://github.com/NousResearch/hermes-agent/issues/27555) exposes that `_resolve_single_provider()` passes the wrong kwargs, silently breaking the entire vision fallback chain. *Fix status: No PR yet.*
*   **P1 | Silent Oneshot Failure:** [Issue #30623](https://github.com/NousResearch/hermes-agent/issues/30623) notes `hermes -z` silently exits with code 0 in non-TTY environments (SSH/Cron) without making an API call. *Fix status: No PR yet.*
*   **P1 | Event Loop Crash Loop:** [Issue #19471](https://github.com/NousResearch/hermes-agent/issues/19471) affects gateway `--profile` runs, dropping the event loop after a SIGTERM. *Fix status: No PR yet.*
*   **P2 | macOS Launchd Domain:** [Issue #30586](https://github.com/NousResearch/hermes-agent/issues/30586) hardcodes `gui/`, breaking gateway setups for SSH-only/headless Mac users. *Fix status: No PR yet.*

## 6. Feature Requests & Roadmap Signals
Current feature requests point toward robust multi-platform support, deeper enterprise integration, and architectural maturity:
*   **Intelligent Task Retry/Routing:** PR [#30620](https://github.com/NousResearch/hermes-agent/pull/30620) and Issue [#30587](https://github.com/NousResearch/hermes-agent/issues/30587) propose adaptive retries with automatic model escalation (e.g., falling back to Opus if Sonnet fails a task).
*   **Enterprise Ecosystem Skills:** Users are building out the productivity suite. A Microsoft 365 Calendar/To-Do skill via Graph API was proposed ([Issue #25979](https://github.com/NousResearch/hermes-agent/issues/25979)) as a counterpart to the existing Google Workspace skill.
*   **Profile & Workspace Isolation:** [Issue #30585](https://github.com/NousResearch/hermes-agent/issues/30585) requests Docker-based profile isolation so agents cannot cross-contaminate workspaces.
*   **Architectural Refactoring:** PR [#30627](https://github.com/NousResearch/hermes-agent/pull/30627) introduces an EventBus and OperationalStateManager, signaling a roadmap shift toward self-healing agent architectures.

## 7. User Feedback Summary
Users are leveraging Hermes heavily for continuous gateway messaging (Telegram, WhatsApp, Discord) and advanced local tooling, but friction remains in specific environments. A recurring theme is frustration with **"opinionated" gateway defaults**: users are annoyed that WhatsApp and Telegram adapters assume a response is always required, leading to spammy fallback messages when the correct action is silence ([Issue #28208](https://github.com/NousResearch/hermes-agent/issues/28208), [Issue #18848](https://github.com/NousResearch/hermes-agent/issues/18848)). Additionally, **headless/SSH users** feel neglected, as evidenced by TUI mouse bugs ([Issue #30536](https://github.com/NousResearch/hermes-agent/issues/30536)), non-TTY oneshot failures ([Issue #30623](https://github.com/NousResearch/hermes-agent/issues/30623)), and Mac launchd bugs ([Issue #30586](https://github.com/NousResearch/hermes-agent/issues/30586)). Finally, documentation drift—where code behavior no longer matches the docs for features like `AGENTS.md` context files ([Issue #5200](https://github.com/NousResearch/hermes-agent/issues/5200))—is causing onboarding friction.

## 8. Backlog Watch
The following high-impact items require immediate maintainer attention:
*   **PR [#30622](https://github.com/NousResearch/hermes-agent/pull/30622) (Context Compression):** This open PR introduces guarded context compression continuity. Given the severe gateway crashes tied to compression (Issues [#20470](https://github.com/NousResearch/hermes-agent/issues/20470), [#23975](https://github.com/NousResearch/hermes-agent/issues/23975), [#30555](https://github.com/NousResearch/hermes-agent/issues/30555)), merging this is critical for gateway stability.
*   **Issue #5200 (Docs vs. Code):** With 5 👍, this issue highlights that context file loading (`AGENTS.md`) works recursively in the docs but not in the code. It needs triage to align user expectations.
*   **Issue #3491 (Local Apple Silicon MLX Whisper):** A highly requested 5 👍 feature to bypass `faster-whisper` in favor of native MLX for STT on macOS.
*   **PR #30575 (Test Slicing):** An open CI optimization PR that reduces test wall time from ~8 minutes to ~3.3 minutes. Merging this would significantly speed up contributor feedback loops.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-23

## 1. Today's Overview
NanoClaw is experiencing a highly active and productive development phase, characterized by a massive influx of community-driven merges. Over the past 24 hours, the project merged **28 Pull Requests** while actively tracking **4 open issues**. The development focus is heavily distributed across expanding integration capabilities (such as Apple Container, Telegram, and Codex), hardening existing messaging channels (WhatsApp, Signal), and improving underlying agent infrastructure like context management and transcript rotation. The volume of external contributions indicates a healthy, engaged open-source community actively reshaping the project's ecosystem and stability.

## 2. Releases
No new official releases were published today. 

## 3. Project Progress
A staggering 28 PRs were merged/closed, pushing significant advancements across the platform:
*   **Platform Integrations:** Codex-only installation support is now fully integrated ([PR #2580](https://github.com/nanocoai/nanoclaw/pull/2580)). Additionally, fixes for rootless Podman deployments were merged ([PR #2572](https://github.com/nanocoai/nanoclaw/pull/2572)), broadening container runtime choices.
*   **Channel Fixes (WhatsApp & Signal):** Multiple critical WhatsApp fixes were merged, including proper `@<phone>` mention rendering ([PR #2552](https://github.com/nanocoai/nanoclaw/pull/2552)), WhatsApp formatting skills ([PR #2553](https://github.com/nanocoai/nanoclaw/pull/2553)), QR browser wrapper fixes ([PR #2551](https://github.com/nanocoai/nanoclaw/pull/2551)), and clearing auth credentials on 401 logout ([PR #2579](https://github.com/nanocoai/nanoclaw/pull/2579)). Signal also received a fix for `signal-cli` 0.13+ JSON field name mismatches ([PR #2584](https://github.com/nanocoai/nanoclaw/pull/2584)).
*   **Agent Infrastructure:** The agent-runner received an important fix to drop the `<messages>` envelope, preventing the Claude Agent SDK from emitting synthetic 'No response requested' errors ([PR #2556](https://github.com/nanocoai/nanoclaw/pull/2556)). Agent context awareness was upgraded to surface context-window usage directly to the AI ([PR #2573](https://github.com/nanocoai/nanoclaw/pull/2573)), and a fix was merged to rotate oversized session transcripts to prevent memory bloat ([PR #2586](https://github.com/nanocoai/nanoclaw/pull/2586)). 

## 4. Community Hot Topics
The community is highly focused on multi-platform deployment and local debugging workflows:
*   **Apple Container Deployment:** A cluster of issues ([#2587](https://github.com/nanocoai/nanoclaw/issues/2587), [#2588](https://github.com/nanocoai/nanoclaw/issues/2588), [#2589](https://github.com/nanocoai/nanoclaw/issues/2589)) highlights user struggles to get NanoClaw running on Apple's native containerization. The underlying issue stems from a stale skill branch that has fallen out of sync with the mainline's migration from Node+tsc to Bun. 
*   **Local Development Friction:** [Issue #2590](https://github.com/nanocoai/nanoclaw/issues/2590) highlights significant frustration with "dependency hell" when attempting to run the project locally on Ubuntu without containerization, pointing to underlying friction with Node/SQLite native bindings.

## 5. Bugs & Stability
Today's bug reports highlight platform-specific regressions and dependency drift:
1.  **Severe - Stale Skill Branch / Build Failures:** The `skill/apple-container` branch is entirely broken, referencing nonexistent APIs and causing immediate failures ([Issue #2588](https://github.com/nanocoai/nanoclaw/issues/2588), [Issue #2587](https://github.com/nanocoai/nanoclaw/issues/2587)). *No fix PRs are currently noted.*
2.  **High - Agent-runner Synthetic Responses:** Batching multiple messages caused the Claude-agent-sdk to silently fail and emit synthetic responses. *Status: Fixed and merged in [PR #2556](https://github.com/nanocoai/nanoclaw/pull/2556) / [Issue #2555](https://github.com/nanocoai/nanoclaw/issues/2555).*
3.  **High - Signal Auth Loop:** `signal-cli` >= 0.13 changed its JSON output, causing an infinite setup loop. *Status: Fixed and merged in [PR #2584](https://github.com/nanocoai/nanoclaw/pull/2584) / [Issue #2581](https://github.com/nanocoai/nanoclaw/issues/2581).*
4.  **Medium - Localhost resolution in MicroVMs:** Apple Containers fail to resolve `host.docker.internal` for the OneCLI proxy. *Status: Open, no fix PR yet ([Issue #2589](https://github.com/nanocoai/nanoclaw/issues/2589)).*

## 6. Feature Requests & Roadmap Signals
Based on open PRs and community submissions, upcoming capabilities likely to be integrated include:
*   **Enhanced Multi-Channel Dashboards:** [PR #2521](https://github.com/nanocoai/nanoclaw/pull/2521) proposes adding `from-channel` and `from-type` to XML message attributes, enabling better third-party monitoring dashboards for multi-channel setups (Telegram + Discord).
*   **Token Optimization:** [PR #2571](https://github.com/nanocoai/nanoclaw/pull/2571) introduces an `/add-rtk` skill integrating a CLI proxy that claims 60-90% token savings on dev commands.
*   **Telegram Claim Links & Shared Sessions:** Feature PRs for Telegram claim links ([PR #2578](https://github.com/nanocoai/nanoclaw/pull/2578)) and default shared agent sessions ([PR #2593](https://github.com/nanocoai/nanoclaw/pull/2593)) are actively awaiting final review/merge.

## 7. User Feedback Summary
Users are enthusiastically adopting NanoClaw across diverse messaging channels (WhatsApp, Signal, Teams, Telegram) but are encountering operational friction in non-Docker environments. A notable pain point is the complexity of local debugging, with users reporting "dependency hell" when trying to compile native Node modules (like SQLite wrappers) on standard Linux (Ubuntu) setups ([Issue #2590](https://github.com/nanocoai/nanoclaw/issues/2590)). Conversely, the rapid adoption of alternative container runtimes (Podman, Apple Container) shows a strong desire among power users to move away from strict Docker dependencies, though the project's documentation and skill branches have lagged slightly behind these use cases.

## 8. Backlog Watch
*   **[PR #2521](https://github.com/nanocoai/nanoclaw/pull/2521) - feat(formatter):** This open PR adds valuable XML attributes for channel routing context. Created on May 17, it has been pending for nearly a week and is ripe for maintainer review.
*   **Apple Container Failures:** The open issues regarding the Apple Container skill ([#2587](https://github.com/nanocoai/nanoclaw/issues/2587), [#2588](https://github.com/nanocoai/nanoclaw/issues/2588), [#2589](https://github.com/nanocoai/nanoclaw/issues/2589)) urgently require a dedicated branch rebase to align the runtime with the mainline Bun migration.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the structured project digest for NullClaw based on the provided GitHub data for 2026-05-23.

### 1. Today's Overview
As of May 23, 2026, the NullClaw project is experiencing a moderate lull in overall community engagement but maintains a steady undercurrent of development. There were zero new issues reported and no new releases published today. However, three existing pull requests saw recent updates as of yesterday, indicating that maintainers and contributors are actively reviewing pending code. The current activity assessment suggests the project is in a stabilization and integration phase, with a strong focus on improving infrastructure compatibility and expanding AI provider options. 

### 2. Releases
**No new releases.** There have been no version tags or releases published recently.

### 3. Project Progress
No PRs were merged or closed today. However, the following significant open pull requests received updates (as of May 22), indicating ongoing development progress:
*   **Provider Expansion:** [PR #922](https://github.com/nullclaw/nullclaw/pull/922) adds support for the NEAR AI Cloud provider, implementing it as an OpenAI-compatible endpoint complete with onboarding defaults and model catalog parsing.
*   **Observability Improvements:** [PR #891](https://github.com/nullclaw/nullclaw/pull/891) improves provider health probes by preserving granular cURL transport failures (DNS, TLS, Timeout errors) rather than collapsing them into generic failures.
*   **Core Threading Fix:** [PR #878](https://github.com/nullclaw/nullclaw/pull/878) addresses a critical OS-level thread suspension issue by switching to a POSIX `nanosleep` path, ensuring that NullClaw's managed threads actually sleep at the hardware level rather than just yielding cooperatively.

### 4. Community Hot Topics
Due to a lack of recent comments and zero reactions (👍 0) across the currently active items, explicit community hot topics are difficult to identify today. The underlying needs of the project are currently being driven primarily by contributor pull requests rather than high-volume user discussion. The main themes derived from these PRs are a demand for **broader AI cloud interoperability** (NEAR AI) and **stricter, more predictable infrastructure behavior** (exact error bubbling and true OS thread sleeping).

### 5. Bugs & Stability
No new bugs or crashes were reported by users today. However, active fix PRs reveal previously existing stability issues:
*   **[Medium/High Severity] Thread Sleep Blocking:** [PR #878](https://github.com/nullclaw/nullclaw/pull/878) highlights that NullClaw's managed threaded environment was failing to truly suspend OS threads, relying instead on cooperative yields. A fix PR is currently open and awaiting merge.
*   **[Medium Severity] Masked Network Failures:** [PR #891](https://github.com/nullclaw/nullclaw/pull/891) reveals that provider health probes were masking specific network failures. By preserving exact cURL error states, NullClaw's observability and reliability will be significantly enhanced. 

### 6. Feature Requests & Roadmap Signals
While no formal feature requests were filed today, open PRs provide a clear signal of the project's near-term roadmap:
*   **Multi-Cloud Agnostic Support:** The addition of the NEAR AI Cloud provider ([PR #922](https://github.com/nullclaw/nullclaw/pull/922)) signals a continuing roadmap trend toward making NullClaw a universal, hardware/cloud-agnostic AI assistant capable of connecting to any OpenAI-compatible API.
*   **Prediction:** If these open PRs are merged in their current state, the next version release will likely be a minor/patch version focused heavily on infrastructure robustness, network error reporting, and the addition of the NEAR AI provider option.

### 7. User Feedback Summary
There is no direct user feedback, sentiment, or pain points to analyze today, as the issue tracker saw zero new submissions in the last 24 hours. 

### 8. Backlog Watch
The project currently has three open PRs that require maintainer attention. None have recorded reactions, and all have undefined comment metrics, suggesting they may be awaiting initial core review or feedback:
*   [PR #922](https://github.com/nullclaw/nullclaw/pull/922) (Open since May 21)
*   [PR #891](https://github.com/nullclaw/nullclaw/pull/891) (Open since May 5 - *Stale risk*)
*   [PR #878](https://github.com/nullclaw/nullclaw/pull/878) (Open since April 30 - *High stale risk, needs maintainer review*)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-23

## 1. Today's Overview
IronClaw is experiencing a phase of exceptionally high architectural development, primarily focused on the "Reborn" initiative—a ground-up rewrite of the agent loop, WebUI, and extension systems. The project saw a massive volume of activity in the last 24 hours, with **50 pull requests updated** (33 open, 17 closed/merged) and **26 issues updated** (20 open, 6 closed). The contributor core team is heavily focused on building out multi-phase infrastructure for subagent spawning, OAuth integration, and native tool capabilities. There are no new releases today, indicating the project is currently in the middle of a heavy feature implementation cycle rather than a stabilization phase.

## 2. Releases
No new releases were recorded today. 

## 3. Project Progress
The closed and merged PRs today indicate steady progress on WebUI routing and inbound workflows.
*   **WebUI & Inbound Facade:** Issues like [#3623](https://github.com/nearai/ironclaw/issues/3623) (BeforeInboundPolicy seam) and [#3611](https://github.com/nearai/ironclaw/issues/3611) (Minimal native WebChat v2 routes) were closed. PR [#3876](https://github.com/nearai/ironclaw/pull/3876) merged, introducing the typed `WebChatV2EventFrame` schema to standardize browser-facing SSE output.
*   **Subagent Spawn Design:** A massive architectural PR suite for Reborn subagent spawning was opened by core contributor `henrypark133`, spanning Phases 0 through 4:
    *   [PR #3867](https://github.com/nearai/ironclaw/pull/3867) (Phase 0: Pending-gate projection foundation)
    *   [PR #3868](https://github.com/nearai/ironclaw/pull/3868) (Phase 1: Contracts and isolated units)
    *   [PR #3896](https://github.com/nearai/ironclaw/pull/3896) (Phase 4: Composition wiring & verification)
*   **Google Extensions Suite:** Core contributor `henrypark133` also opened a rapid sequence of PRs implementing a Google OAuth and native extensions stack (Phases 1 through 6), culminating in dedicated Google Calendar ([PR #3897](https://github.com/nearai/ironclaw/pull/3897)) and Gmail ([PR #3898](https://github.com/nearai/ironclaw/pull/3898)) native capability packages.
*   **Budgets & Infrastructure:** [PR #3899](https://github.com/nearai/ironclaw/pull/3899) implements cost-based budget follow-ups, ensuring token usage is tracked accurately in the Reborn loop.

## 4. Community Hot Topics
Most of today's "hot topics" are driven by core maintainers laying down extensive design plans and opening corresponding tracking issues, which gathered immediate attention and linked sub-issues.
*   **Subagent Spawn Architecture:** [Issue #3798](https://github.com/nearai/ironclaw/issues/3798) (Subagent spawn for the Reborn agent loop) and its follow-up [Issue #3875](https://github.com/nearai/ironclaw/issues/3875) (Blocking spawn parent recovery) are highly active. This highlights a critical architectural need: enabling the agent to spawn and manage child agents seamlessly without losing execution context.
*   **Local File Access for Cloud Hosts:** [Issue #2117](https://github.com/nearai/ironclaw/issues/2117) (`ironclaw-bridge` — local file/MCP bridge daemon) received an upvote and updates. This represents a strong user need to bridge local laptop resources (like Obsidian vaults) to cloud-hosted IronClaw instances.
*   **Automated Triggers:** [Issue #3873](https://github.com/nearai/ironclaw/issues/3873) (Trigger Loop — scheduled cron triggers) introduces synthetic inbound messages to trigger LLM workflows, addressing the community need for autonomous, scheduled AI tasks.

## 5. Bugs & Stability
*   **Nightly E2E Failure:** The automated CI flagged a failure in the `v2-engine` E2E test suite ([Issue #3447](https://github.com/nearai/ironclaw/issues/3447)). While details are sparse, E2E failures on the v2-engine represent a **Medium-High risk** as it could signal regressions in the core Reborn agent loop.
*   **Pre-existing Test Flakes:** Core maintainer `ilblackdragon` opened [PR #3902](https://github.com/nearai/ironclaw/pull/3902) to address four buckets of pre-existing test failures in `reborn-integration` and capability contract tests, noting that outdated fixtures (e.g., `ECHO_MANIFEST`) were causing false negatives.
*   **Executor Bloat:** [Issue #3871](https://github.com/nearai/ironclaw/issues/3871) highlights that `executor.rs` is over architectural size limits and needs decomposition, posing a **Low risk** to long-term maintainability and code health.

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily signaled by the "Lane" and "Phase" issues opened by maintainers.
*   **Google Workspace Integration:** Based on PRs [#3893](https://github.com/nearai/ironclaw/pull/3893) through [#3898](https://github.com/nearai/ironclaw/pull/3898), users can expect native, authenticated Gmail and Google Calendar capabilities in the next release, managed via a new `ironclaw_oauth` substrate.
*   **Enhanced Tooling Security:** [Issue #3891](https://github.com/nearai/ironclaw/issues/3891) (Durable approval-policy port) and [Issue #3905](https://github.com/nearai/ironclaw/issues/3905) (Safe user-scoped tool installs) signal that the next version will feature robust, scoped permissions for custom tools, preventing global scope pollution and enhancing multi-tenant security.
*   **Chat Integrations:** [Issue #3805](https://github.com/nearai/ironclaw/issues/3805) (Notion MCP capability) and [Issue #3857](https://github.com/nearai/ironclaw/issues/3857) (Slack ProductAdapter MVP) indicate that major third-party platform integrations are actively being architected for the Reborn WebUI Beta.

## 7. User Feedback Summary
Direct user feedback is currently overshadowed by maintainer-driven core architecture work. However, underlying developer/user pain points are clearly reflected in the issues:
*   **Local Resource Access:** The ongoing relevance of [Issue #2117](https://github.com/nearai/ironclaw/issues/2117) indicates that users are frustrated by the inability to connect cloud-hosted agents to local file systems securely.
*   **Docker Sandboxing:** [PR #3900](https://github.com/nearai/ironclaw/pull/3900) (Docker sandbox command transport) addresses an implicit need for safer, isolated execution environments for untrusted code/tools, a critical requirement for production AI assistants.
*   **Secret Management Complexities:** Several issues and PRs (like [PR #3880](https://github.com/nearai/ironclaw/pull/3880) refactoring CAS retry loops, and [PR #3903](https://github.com/nearai/ironclaw/pull/3903) addressing credential boundary gaps) suggest that managing API keys and tool credentials in multi-tenant setups has been a friction point that is now getting a hardened, system-level fix.

## 8. Backlog Watch
*   **WeCom Channel PR:** [PR #2394](https://github.com/nearai/ironclaw/pull/2394) (Enterprise WeChat WASM channel) was updated today but is an `XL` size, `high risk` PR submitted back in April. Given the current focus on Reborn, this complex external channel PR risks staleness and may require dedicated maintainer review to prevent merge conflicts with the new WebUI architecture.
*   **Test Framework Revisions:** [Issue #3702](https://github.com/nearai/ironclaw/issues/3702) (Revise and implement binary-E2E test framework plan) has been open since mid-May. As core contributors note that integration test parity is crucial for Reborn, this test infrastructure issue should be prioritized to prevent the E2E failures seen in [Issue #3447](https://github.com/nearai/ironclaw/issues/3447).

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-23

## 1. Today's Overview
LobsterAI experienced a **highly active day**, driven primarily by a concentrated internal development effort resulting in a new release and a large number of merged pull requests. The project merged **12 PRs** and logged 1 new release, indicating a strong, synchronized push by the core maintainers (primarily targeting the subagent UX and cowork engine). Open issues and PRs remain low in community comments, with the bulk of today’s activity coming from internal contributors. Overall, project health appears **strong and highly active**, with a clear focus on iterative feature refinement and stability.

## 2. Releases
- **[LobsterAI 2026.5.22](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.5.22)**
  - **Highlights**: Major updates to the Subagent experience, artifacts preview, cowork engine stability, and model configuration flexibility.
  - **Key Changes**:
    - **Subagent Session UI**: Introduced a sidebar display and standalone detail view for subagent sessions, reusing the main conversation rendering pipeline.
    - **Model Configuration**: Added support for custom model parameters and a display block for the model's "thinking" process.
    - **Artifacts & Cowork**: Improvements to cowork engine stability and artifacts preview.
  - *No breaking changes or explicit migration notes were provided in this release.*

## 3. Project Progress
Today saw 12 merged/closed PRs, almost entirely focused on polishing the newly released features. The development trajectory shows a heavy emphasis on frontend robustness and state management:

- **Subagent UX & Stability**:
  - **[#2034](https://github.com/netease-youdao/LobsterAI/pull/2034)**: Subagent session messages are now persisted to a dedicated `subagent_messages` SQLite table, enabling instant offline loading and preventing unnecessary network RPCs.
  - **[#2033](https://github.com/netease-youdao/LobsterAI/pull/2033)** & **[#2029](https://github.com/netease-youdao/LobsterAI/pull/2029)**: Fixed various subagent session bugs, including missing tool results, sync issues, and sidebar highlight state.
  - **[#2030](https://github.com/netease-youdao/LobsterAI/pull/2030)**: Refactored the subagent session to reuse the main conversation rendering pipeline (`ConversationTurnsView`), ensuring UI consistency.
  - **[#2027](https://github.com/netease-youdao/LobsterAI/pull/2027)**: Fixed Mac window padding for the draggable header and added sidebar toggles for the subagent page.
- **Core Functionality & Bug Fixes**:
  - **[#2032](https://github.com/netease-youdao/LobsterAI/pull/2032)**: Fixed model switching errors when utilizing custom models.
  - **[#2031](https://github.com/netease-youdao/LobsterAI/pull/2031)**: Fixed invalid browser configuration issues.
  - **[#2035](https://github.com/netease-youdao/LobsterAI/pull/2035)**: Fixed the coding plan documentation for Qwen 3.6 Plus.
- **UI & Text**: **[#2037](https://github.com/netease-youdao/LobsterAI/pull/2037)** & **[#2028](https://github.com/netease-youdao/LobsterAI/pull/2028)** optimized IM-related copywriting and general UI updates.

*(Note: PR [#2038](https://github.com/netease-youdao/LobsterAI/pull/2038) was closed in favor of the official 2026.5.22 release).*

## 4. Community Hot Topics
Community engagement today was highlighted by a strategic architectural request rather than general bug reports.

- **[Issue #2036](https://github.com/netease-youdao/LobsterAI/issues/2036)** (👍 0, Comments 1): **Requesting an `agent:turn` or `agent:loop` event for the OpenClaw gateway.**
  - *Analysis*: The author (@woxinsj) points out that to achieve true real-time data persistence ("落盘"), the main loop needs to broadcast a completion event automatically at the end of every turn. Currently, the lack of this event limits the client's ability to reliably save state mid-complex workflows. This indicates that advanced users are heavily utilizing the multi-agent/cowork capabilities and pushing the limits of the underlying OpenClaw gateway's event system.

## 5. Bugs & Stability
Today's bug reports were addressed almost immediately by the core team in the current development cycle. No high-severity crashes were reported today.

- **[Medium] Subagent Sync & Display Bugs**: Missing tool results and sync issues in subagent views were fixed in **[#2033](https://github.com/netease-youdao/LobsterAI/pull/2033)**.
- **[Low-Medium] Model Configuration Instability**: Switching custom models caused errors (fixed in **[#2032](https://github.com/netease-youdao/LobsterAI/pull/2032)**), and invalid browser configs were patched in **[#2031](https://github.com/netease-youdao/LobsterAI/pull/2031)**.
- **[Low] UI Padding & Overlap**: Mac window controls overlapping the subagent back button was resolved via padding adjustments in **[#2027](https://github.com/netease-youdao/LobsterAI/pull/2027)**.

## 6. Feature Requests & Roadmap Signals
- **Real-time Turn Event System**: As noted in [Issue #2036](https://github.com/netease-youdao/LobsterAI/issues/2036), there is a distinct need for a turn-based broadcasting event in OpenClaw. Implementing this will likely be a prerequisite for robust offline-sync and real-time persistence in future releases.
- **External Model & UI Flexibility**: The rapid fixes to custom model parameters and the "thinking block" display show a commitment to supporting a diverse ecosystem of third-party LLMs (like Qwen 3.6 Plus), suggesting future versions will continue to expand model provider support.

## 7. User Feedback Summary
User feedback today is highly technical and specific to agentic workflows. The primary pain point revolves around **data persistence reliability in multi-agent loops**. The user opening [Issue #2036](https://github.com/netease-youdao/LobsterAI/issues/2036) highlights a clear use-case where users are running complex, long-running agent loops and require bulletproof, real-time saving of conversation states without waiting for the entire process to conclude.

## 8. Backlog Watch
Several dependency upgrades and community feature PRs remain pending and are starting to age (marked as stale), requiring maintainer review:

- **Dependency Bottlenecks**: Major framework bumps are currently open and unmerged, which could eventually block future development or cause tech debt:
  - **[PR #1766](https://github.com/netease-youdao/LobsterAI/pull/1766)**: Bumping Vite from 5.x to 8.x (Major version change).
  - **[PR #1764](https://github.com/netease-youdao/LobsterAI/pull/1764)**: Bumping React DOM from 18.x to 19.x.
- **Security & Quality Improvements** (High Value):
  - **[PR #1534](https://github.com/netease-youdao/LobsterAI/pull/1534)**: Mitigates API proxy logs leaking credentials and full response bodies.
  - **[PR #1535](https://github.com/netease-youdao/LobsterAI/pull/1535)**: Adds a key whitelist to the renderer process KV store IPC to prevent malicious rendering processes from accessing sensitive tokens.
- **UI Polish**:
  - **[PR #1531](https://github.com/netease-youdao/LobsterAI/pull/1531)**: Replaces the theme color grid with a compact circle selector.
  - **[PR #1533](https://github.com/netease-youdao/LobsterAI/pull/1533)**: Adds a local session usage statistics panel to settings.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-23

## 1. Today's Overview
Moltis experienced a highly active development day, with 7 issues closed and 9 pull requests merged, signaling a focused and responsive maintainer team addressing rapid user feedback following a recent release. The activity was predominantly driven by core contributor `penso`, who implemented a series of targeted bug fixes and feature enhancements across voice, telephony, UI, and Docker sandbox modules. With 0 new releases issued today, the project is currently in an active iteration and stabilization phase. The high ratio of merged PRs to closed issues indicates a highly efficient cycle of bug triage and patch deployment. Overall project health appears robust, with active community engagement testing critical edge cases in self-hosted environments.

## 2. Releases
No new releases were published today. 

## 3. Project Progress
Today's development was marked by a massive merging spree of 9 PRs, pushing forward several key functionalities:
*   **Sandbox & Docker Fixes:** PR [#1040](https://github.com/moltis-org/moltis/pull/1040) and PR [#1035](https://github.com/moltis-org/moltis/pull/1035) significantly improved media file reading and auto-detection of host data mounts for Docker/Podman deployments. 
*   **Voice & Telephony:** The pipeline saw major fixes for voice compatibility. PR [#1041](https://github.com/moltis-org/moltis/pull/1041) switched OpenAI-compatible TTS generation to MP3 to fix provider compatibility, and PR [#1043](https://github.com/moltis-org/moltis/pull/1043) added proper WAV wrapping for Piper TTS. Additionally, PR [#1034](https://github.com/moltis-org/moltis/pull/1034) fixed a critical Twilio telephony bug where gathered speech wasn't being dispatched to the agent.
*   **UI & Agents:** Web UI capabilities were expanded with support for arbitrary file attachments via PR [#1042](https://github.com/moltis-org/moltis/pull/1042), and agents were given the ability to query local documentation out-of-the-box via PR [#1044](https://github.com/moltis-org/moltis/pull/1044).
*   **Security/Config:** PR [#1033](https://github.com/moltis-org/moltis/pull/1033) introduced the ability to disable vault encryption at rest, simplifying authentication for specific deployment topologies.
*   **Maintenance:** Dependency updates were handled efficiently by Dependabot, bumping OpenSSL (PR [#1039](https://github.com/moltis-org/moltis/pull/1039)).

## 4. Community Hot Topics
The most engaged community discussion occurred in Issue [#977](https://github.com/moltis-org/moltis/issues/977) (5 comments), where users detailed complex Docker/Proxmox LXC setups failing during browser sandbox execution. Although opened weeks ago, its closure today alongside PRs [#1040](https://github.com/moltis-org/moltis/pull/1040) and [#1035](https://github.com/moltis-org/moltis/pull/1035) highlights the community's strong reliance on advanced self-hosted infrastructure and the maintainers' willingness to resolve intricate containerization edge cases. 

Another active topic was Issue [#1028](https://github.com/moltis-org/moltis/issues/1028) (2 comments), discussing how Moltis agents should access project documentation. The community is heavily invested in making autonomous agents more self-sufficient, which aligns perfectly with today's merge of PR [#1044](https://github.com/moltis-org/moltis/pull/1044).

## 5. Bugs & Stability
Today saw a heavy focus on exterminating bugs that affected core AI interactions, specifically multimodal and voice channels:
1.  **Twilio Voice Deadlocks (High):** Issue [#1032](https://github.com/moltis-org/moltis/issues/1032) reported agents greeting users but ignoring subsequent speech. Fixed seamlessly by PR [#1034](https://github.com/moltis-org/moltis/pull/1034).
2.  **Docker Media Transmission (Medium):** Issue [#1037](https://github.com/moltis-org/moltis/issues/1037) highlighted that `send_image` and `send_document` failed in Docker setups. Resolved by PR [#1040](https://github.com/moltis-org/moltis/pull/1040).
3.  **TTS Provider Compatibility (Medium):** Issue [#1030](https://github.com/moltis-org/moltis/issues/1030) identified that Speaches (an OpenAI-compatible server) does not support the Opus format mandated by Moltis. Fixed by falling back to MP3 in PR [#1041](https://github.com/moltis-org/moltis/pull/1041).
4.  **Piper Audio Formatting (Low):** Issue [#1029](https://github.com/moltis-org/moltis/issues/1029) noted improper raw PCM handling for Piper TTS. Solved via PR [#1043](https://github.com/moltis-org/moltis/pull/1043).
5.  **UI Theme Bug (Low):** Issue [#1045](https://github.com/moltis-org/moltis/issues/1045) is the only *newly opened* bug today, reporting missing syntax highlighting in light mode code blocks. No fix PR has been submitted for this yet.

## 6. Feature Requests & Roadmap Signals
User requests today strongly signal a desire for a fully multimodal, context-aware AI assistant:
*   **Arbitrary File Attachments:** Requested in Issue [#1036](https://github.com/moltis-org/moltis/issues/1036) and immediately delivered in PR [#1042](https://github.com/moltis-org/moltis/pull/1042).
*   **Autonomous Documentation Lookup:** Requested in Issue [#1028](https://github.com/moltis-org/moltis/issues/1028) and delivered in PR [#1044](https://github.com/moltis-org/moltis/pull/1044).
*   **Vault Configuration Flexibility:** PR [#1033](https://github.com/moltis-org/moltis/pull/1033) merging the ability to toggle vault encryption suggests upcoming releases will focus heavily on deployment flexibility for enterprise and complex self-hosting scenarios. 

Given the high volume of merged features and bug fixes today, it is highly probable that a version bump/release is imminent.

## 7. User Feedback Summary
Users are actively pushing Moltis to its limits in diverse self-hosted environments (Proxmox, Docker, Twilio integrations, local TTS models). There is distinct satisfaction with the pace of development, as evidenced by user-reported issues being rapidly triaged and resolved in a 24-48 hour window. However, the feedback highlights pain points around container isolation (sharing files between host and sandbox) and audio translation layers. The opening of issue [#1045](https://github.com/moltis-org/moltis/issues/1045) also indicates a segment of users actively utilizing the web UI in light mode, pointing to a maturing design/UX expectation.

## 8. Backlog Watch
All 8 issues updated in the last 24 hours have been closed, with the exception of one new issue:
*   **[OPEN] Issue [#1045](https://github.com/moltis-org/moltis/issues/1045): [Bug] No code block syntax highlighting in light mode.** This newly reported UI bug requires maintainer attention and has currently generated no comments or assignees.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw (QwenPaw) project digest for 2026-05-23.

### 1. Today's Overview
The CoPaw project exhibited high development velocity and robust community engagement over the past 24 hours, characterized by the processing of 23 pull requests and 24 issues. The contributor base is actively expanding, evidenced by multiple "first-time-contributor" PRs addressing diverse ecosystem needs like MCP management, data analysis, and plugin hooks. While several critical bugs were reported regarding chat history persistence and channel reliability, maintainer and community response has been swift, with 10 PRs merged/closed. The current project phase appears focused on ecosystem enrichment (plugins, desktop app), multi-model compatibility (Gemini, MiniMax), and UI/UX refinements.

### 2. Releases
No new official releases were published today. The community remains highly active on the `v1.1.8.post1` baseline, with heavy back-porting and bug fixing indicating potential preparation for a `v1.1.9` or `v1.2.0` release in the near future.

### 3. Project Progress
A total of 10 PRs were merged or closed, showcasing solid forward momentum across the stack:
*   **Model Compatibility:** A significant crash with Gemini/Gemma models was resolved by mapping `max_tokens` to `max_output_tokens` ([PR #4621](https://github.com/agentscope-ai/QwenPaw/pull/4621)).
*   **Channel Reliability:** The WeChat iLink channel received two crucial fixes. First, preventing conversation aborts on invalid `context_token` ([PR #4618](https://github.com/agentscope-ai/QwenPaw/pull/4618)), followed by a deeper architectural fix replacing the instance-level flag with a per-request meta flag to prevent cross-request interference ([PR #4627](https://github.com/agentscope-ai/QwenPaw/pull/4627)). DingTalk filename encoding was also fixed ([PR #4600](https://github.com/agentscope-ai/QwenPaw/pull/4600)).
*   **Task Automation:** Scheduled cron tasks now support a "Clear Before Run" toggle to prevent context pollution ([PR #4434](https://github.com/agentscope-ai/QwenPaw/pull/4434)).
*   **UI Polish:** Updates were merged for the Skill Market page ([PR #4623](https://github.com/agentscope-ai/QwenPaw/pull/4623)), and a bug causing the desktop "pet" to get stuck in a "Done" state was fixed ([PR #4626](https://github.com/agentscope-ai/QwenPaw/pull/4626)).

### 4. Community Hot Topics
*   **Chat History Disappearance ([Issue #4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)):** With 12 comments, this is the most active issue today. Users report switching sessions and finding their history wiped. This indicates a high-severity pain point in core UX, though underlying causes may be related to context compaction limits.
*   **DeepSeek "Think" Tag Parsing ([Issue #4051](https://github.com/agentscope-ai/QwenPaw/issues/4051)):** A 10-comment discussion regarding DeepSeek V4 Flash. The model's output gets trapped in `<think tags>`, failing to render actual replies. This highlights ongoing friction in supporting third-party reasoning models.
*   **Missing Multi-line File Write Tool ([Issue #4632](https://github.com/agentscope-ai/QwenPaw/issues/4632)):** Users are frustrated by the agent's inability to reliably write multi-line text to files (Python, JSON, configs), heavily hindering autonomous coding workflows.

### 5. Bugs & Stability
*   **Critical - Chat History Loss ([Issue #4620](https://github.com/agentscope-ai/QwenPaw/issues/4620)):** Related to context compaction, `context_check` logic splits user/assistant pairs, causing orphaned UI messages ([Issue #3984](https://github.com/agentscope-ai/QwenPaw/issues/3984)). No definitive fix PR has been merged yet.
*   **High - Channel Unreliability:** Users report sending files via the WeChat channel shows "success" in the API/Tool but silently fails to deliver ([Issue #4612](https://github.com/agentscope-ai/QwenPaw/issues/4612)). *Status: Mitigation merged in PR #4618 and #4627.*
*   **High - Gemini Crashes ([Issue #4605](https://github.com/agentscope-ai/QwenPaw/issues/4605)):** `pydantic_core.ValidationError` crashed the app when using `max_tokens`. *Status: Resolved via PR #4621.*
*   **Medium - MiniMax XML Format Bug ([Issue #4625](https://github.com/agentscope-ai/QwenPaw/issues/4625)):** MiniMax M2.5 returns XML in thought processes, causing QwenPaw to halt execution. 
*   **Medium - Whisper Voice Transcription Ignored ([Issue #4556](https://github.com/agentscope-ai/QwenPaw/issues/4556)):** The Web UI ignores the custom Whisper API provider and falls back to the browser's native API.

### 6. Feature Requests & Roadmap Signals
*   **Plugin System Expansion:** Strong signals for plugin lifecycle hooks. A new PR introduces session and message hooks ([PR #4638](https://github.com/agentscope-ai/QwenPaw/pull/4638)), and a feature request asks for `register_agent_hook` to integrate external RAG systems ([Issue #4613](https://github.com/agentscope-ai/QwenPaw/issues/4613)).
*   **MCP & Tooling Enhancements:** Requests for a remote Playwright browser endpoint for lightweight agents ([Issue #4617](https://github.com/agentscope-ai/QwenPaw/issues/4617)) and a first-time contributor PR adding an MCP marketplace & health check ([PR #4630](https://github.com/agentscope-ai/QwenPaw/pull/4630)).
*   **Desktop App improvements:** Requests to remember window size/position ([Issue #4634](https://github.com/agentscope-ai/QwenPaw/issues/4634)).
*   *Prediction:* The rapid addition of DataPaw (Data analysis skills) and MCP marketplace features suggests the next major version will pivot heavily towards "out-of-the-box" tool integration for enterprise productivity.

### 7. User Feedback Summary
Users are pushing QwenPaw into complex, multi-model production environments. Pain points center heavily on **multi-tenant routing** and **provider discrepancies**—specifically, global proxy settings failing to bypass correctly ([Issue #4607](https://github.com/agentscope-ai/QwenPaw/issues/4607)), and the urgent need for per-model rate limiting/retry configurations because global settings cause instability ([Issue #4624](https://github.com/agentscope-ai/QwenPaw/issues/4624)). Satisfaction is generally high regarding the project's responsiveness, but users express frustration with silent API failures (especially across WeChat, DingTalk, and HTTP API bridges) where the QwenPaw server logs success, but the end-user receives nothing.

### 8. Backlog Watch
*   **ACP Session Orphaning ([Issue #4611](https://github.com/agentscope-ai/QwenPaw/issues/4611) & [PR #4615](https://github.com/agentscope-ai/QwenPaw/pull/4615)):** External agent protocols (ACP) are leaving zombie processes. A fix is under review and needs prompt maintainer merging to prevent server memory leaks.
*   **Tauri Desktop App ([PR #3813](https://github.com/agentscope-ai/QwenPaw/pull/3813)):** A massive architectural PR introducing Tauri 2.x desktop support has been open for roughly a month. It needs a final review pass from core maintainers.
*   **Comprehensive E2E Testing ([PR #4464](https://github.com/agentscope-ai/QwenPaw/pull/4464)):** An ongoing effort to migrate Python E2E tests with mock infrastructure. Keeping this tracked is vital for long-term stability, given the recent surge in channel-specific bugs.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-23

## 1. Today's Overview
ZeroClaw experienced an exceptionally high volume of activity over the last 24 hours, with 81 total issue and pull request updates. The open-source AI agent assistant is currently undergoing a massive architectural push centered around a new Terminal User Interface (TUI) and RPC daemon communication layer. While feature development is surging with 41 open PRs, maintainers are actively juggling significant stability challenges. High-severity bugs affecting core tooling (MCP filters, Windows shell encoding, memory purges) and critical channel integration workflows (WhatsApp onboarding, Slack tokens, Telegram API routing) indicate that the project is in a complex transitional phase between v0.7.x and the upcoming v0.8.0 release.

## 2. Releases
No new releases were tracked in the last 24 hours. The project remains on the bleeding edge, with heavy merging happening in preparation for the `v0.8.0` milestone.

## 3. Project Progress
Nine pull requests were closed or merged today, showing steady progress on core observability, documentation, and deployment infrastructure:
*   **Observability Enhancements:** [#6009](https://github.com/zeroclaw-labs/zeroclaw/pull/6009) was closed, having enriched OpenTelemetry tool spans with semantic conventions, pairing with Issue [#5980](https://github.com/zeroclaw-labs/zeroclaw/issues/5980).
*   **Deploy & v0.8.0 Prep:** [#6805](https://github.com/zeroclaw-labs/zeroclaw/pull/6805) and [#6804](https://github.com/zeroclaw-labs/zeroclaw/pull/6804) updated systemd service templates to remove deprecated v0.8.0 gateway flags and parameterized hardcoded deployment usernames. 
*   **Core Bug Fixes:** PR [#6772](https://github.com/zeroclaw-labs/zeroclaw/pull/6772) (Fixes [#6704](https://github.com/zeroclaw-labs/zeroclaw/issues/6704)) successfully resolved garbled Windows shell output for non-UTF-8 code pages. Fixed memory namespace purging in [#6801](https://github.com/zeroclaw-labs/zeroclaw/issues/6801).
*   **Docs and Asset Management:** Image optimizations ([#6748](https://github.com/zeroclaw-labs/zeroclaw/pull/6748)) and documentation configuration updates were finalized.

## 4. Community Hot Topics
The community and core maintainers are actively discussing major architectural and workflow changes, with a strong focus on the new TUI and governance:
*   **High-Impact MCP Tool Bug (6 comments):** [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) reveals a severe bug where `tool_filter_groups` are a "no-op" for real MCP tools due to a prefix mismatch. This is generating significant discussion on how tool loading and filtering are fundamentally handled in the runtime.
*   **Project Governance RFC (4 comments):** [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) proposes "Work Lanes" and label cleanup. This highlights the maintainers' struggle to manage the massive influx of community contributions and route PRs efficiently.
*   **The TUI Takeover:** The most significant driver of activity is a cluster of tightly linked Tracker Issues created by core maintainer `singlerider`: the TUI ACP Bridge ([#6823](https://github.com/zeroclaw-labs/zeroclaw/issues/6823)), TUI Agent Chat ([#6824](https://github.com/zeroclaw-labs/zeroclaw/issues/6824)), and Daemon RPC dispatch layer ([#6837](https://github.com/zeroclaw-labs/zeroclaw/issues/6837)). The underlying need is clear: ZeroClaw is moving beyond a simple CLI/daemon tool into a fully-fledged, locally-hosted AI operator dashboard.

## 5. Bugs & Stability
Stability remains a pain point, particularly for Windows users and channel integrations. Several P1 bugs were reported today:
*   **P1 - WhatsApp Onboarding Workflow Blocked:** [Issue #6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847) reports that the WhatsApp channel fails to show the QR code required for linking. (Fix PRs are currently in-flight, notably [#6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706) which bumps the `whatsapp-rust` protocol parity).
*   **P1 - Multimodal Vision Provider Ignored:** [Issue #6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841) identifies that inbound images are silently routed to the fallback provider instead of the configured `vision_provider`.
*   **P1 - Slack Environment Variables Broken:** [Issue #6844](https://github.com/zeroclaw-labs/zeroclaw/issues/6844) notes a regression where `bot_token` cannot be supplied via environment variables.
*   **P1 - Windows Shell Encoding (Fix Merged):** [Issue #6704](https://github.com/zeroclaw-labs/zeroclaw/issues/6704) regarding garbled non-UTF-8 text on Windows was marked closed today, with follow-up requested for behavioral tests in [Issue #6859](https://github.com/zeroclaw-labs/zeroclaw/issues/6859).
*   **P2 - Windows Minimal Build Bloat:** [Issue #6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836) points out that `setup.bat --minimal` produces a 26MB build instead of the expected ~6MB.

## 6. Feature Requests & Roadmap Signals
The roadmap strongly points toward modular memory architectures, better developer tooling, and the TUI launch:
*   **Next Version Signals (v0.8.0):** The transition to RPC Daemon transport ([#6837](https://github.com/zeroclaw-labs/zeroclaw/issues/6837)), `--ephemeral` daemon mode ([#6818](https://github.com/zeroclaw-labs/zeroclaw/issues/6818)), and session-scoped overrides without reloads ([#6817](https://github.com/zeroclaw-labs/zeroclaw/issues/6817)) are all marked as `in-progress`. The massive Integration PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) serves as the staging ground for these features.
*   **Decoupled Memory Architecture:** [Issue #6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) proposes a `MemoryStrategy` trait to separate storage backends from context consolidation policies, indicating ZeroClaw is preparing for highly complex, long-term agent memory contexts.
*   **Channel Expansion:** Community members are actively requesting custom Telegram Web API endpoints ([#6807](https://github.com/zeroclaw-labs/zeroclaw/issues/6807)) and Jina AI as a web search provider ([PR #6833](https://github.com/zeroclaw-labs/zeroclaw/pull/6833)). 

## 7. User Feedback Summary
Users are highly enthusiastic about the project's direction but are encountering friction in edge cases and specific OS environments:
*   **Appreciation:** User `MushiTheMoshi` commented ([#6847](https://github.com/zeroclaw-labs/zeroclaw/issues/6847)), *"Best tool out there. Wishing way more stars,"* praising the overall architecture.
*   **Configuration Pain Points:** Users are struggling with dead configuration fields (e.g., `vision_provider`, `native_headless`) that silently fail to execute ([#6841](https://github.com/zeroclaw-labs/zeroclaw/issues/6841), [#6241](https://github.com/zeroclaw-labs/zeroclaw/issues/6241)). Additionally, missing config toggles that used to exist (like `show_tool_calls` in schema v3, [Issue #6856](https://github.com/zeroclaw-labs/zeroclaw/issues/6856)) are causing frustrations during upgrades.
*   **Windows friction:** The Windows ecosystem continues to lag behind Unix setups in terms of stability, with users reporting build size anomalies ([#6836](https://github.com/zeroclaw-labs/zeroclaw/issues/6836)) and encoding nightmares.

## 8. Backlog Watch
Several high-impact items require maintainer action to unblock community contributors and users:
*   **Recovering Lost Commits:** [Issue #6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) tracks an ongoing, high-risk audit of 153 commits lost during a bulk revert from March 2026. This remains "in-progress" but is bottlenecking historical bug fixes.
*   **Stalled Docker ARM64 Build:** [PR #5187](https://github.com/zeroclaw-labs/zeroclaw/pull/5187) introduces native `arm64` Docker cross-compilation, a critical feature for self-hosters running on ARM boards. It has been open since April 2nd and requires author action to finalize.
*   **Duplicate Tooling PRs:** Maintainers should take a look at PR [#5979](https://github.com/zeroclaw-labs/zeroclaw/pull/5979) (opt-out reply-intent precheck) and PR [#6706](https://github.com/zeroclaw-labs/zeroclaw/pull/6706) (WhatsApp namespace revert), both of which are blocking channel improvements and are flagged as `needs-author-action`.

</details>