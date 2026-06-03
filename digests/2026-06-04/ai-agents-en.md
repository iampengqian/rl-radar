# OpenClaw Ecosystem Digest 2026-06-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-06-03 22:40 UTC

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

# OpenClaw Project Digest — 2026-06-04

## 1. Today's Overview
OpenClaw is experiencing a period of exceptionally high activity with 1,000 total issue and pull request events in the last 24 hours. The core team recently shipped two releases (`v2026.6.1` and `v2026.6.1-beta.3`) focused on runtime stability and messaging reliability. However, with 358 open issues and 388 open PRs currently active, the project is facing significant scaling challenges. A substantial portion of community activity revolves around regressions in session management, context bloat, and message delivery across various platform integrations.

## 2. Releases
Two new versions were released today, both sharing identical highlights and patch notes, suggesting a rapid iteration/patch cycle:
*   **v2026.6.1** & **v2026.6.1-beta.3**
    *   **Highlights:** Improved resilience in agents and CLI-backed runtimes. They now recover more cleanly from interrupted tool calls, stale session bindings, compaction handoffs, and media delivery retries.
    *   **Stability:** Channels and mobile delivery are steadier across Telegram, WhatsApp, iMessage, and Slack.
    *   *Note:* No explicit breaking changes were listed, but the update requires standard update procedures.

## 3. Project Progress
Today saw 112 PRs merged/closed, indicating aggressive maintenance and feature integration. Key advancements include:
*   **Auth Infrastructure Overhaul:** A massive refactor ([PR #89102](https://github.com/openclaw/openclaw/pull/89102)) is underway to move auth profiles and runtime state from JSON files into `openclaw-agent.sqlite`.
*   **Session Resiliency:** Several fixes target silent message loss and stuck sessions. Notably, [PR #89045](https://github.com/openclaw/openclaw/pull/89045) ensures terminal session statuses recover on visible inbound turns, and [PR #89939](https://github.com/openclaw/openclaw/pull/89939) fixes ACP child completion delivery.
*   **Memory & Search:** [PR #90030](https://github.com/openclaw/openclaw/pull/90030) fixed a synchronous zero-hit search path bug in the `qmd` memory backend.
*   **Reverts:** The team reverted a first-party marketplace allowlist ([PR #89998](https://github.com/openclaw/openclaw/pull/89998)) due to compatibility issues with Codex native plugin configs.

## 4. Community Hot Topics
The community is highly focused on **session continuity** and **message delivery reliability**. 
*   **SQLite Migration Tracking** ([Issue #88838](https://github.com/openclaw/openclaw/issues/88838), 17 comments): The most discussed open issue tracks the core session/transcript runtime-state migration to SQLite. Users and maintainers are actively debating a "branch-by-abstraction" seam to avoid risky large-scope rewrites.
*   **Codex App-Server Regression** ([Issue #88312](https://github.com/openclaw/openclaw/issues/88312), 12 comments): A hot topic regarding multi-tool agent turns failing with "Codex stopped before confirming the turn was complete."
*   **Heartbeat Isolated Mode** ([Issue #65161](https://github.com/openclaw/openclaw/issues/65161), 14 comments): Users report multiple regressions in isolated mode where heartbeat cadence stalls and mislabels execution events, interfering with system operations.

## 5. Bugs & Stability
Stability is currently the biggest concern, with multiple high-severity regressions affecting core functionalities. 
*   **P1 - Windows Chat UI Regression** ([Issue #67035](https://github.com/openclaw/openclaw/issues/67035)): Input text is swallowed, and streamed replies are invisible until a page refresh. *No active fix PR linked yet.*
*   **P1 - Context Engine Doomloop** ([Issue #63998](https://github.com/openclaw/openclaw/issues/63998)): Gateway enters an unrecoverable crash loop when sessions accumulate large payloads, resulting in Gateway OOMs. 
*   **P1 - MCP Tools Not Injected** ([Issue #85030](https://github.com/openclaw/openclaw/issues/85030)): MCP tool schemas are ignored during `sessions_spawn`, stripping subagents of necessary tools.
*   **P1 - OAuth Wedging** ([Issue #86215](https://github.com/openclaw/openclaw/issues/86215)): Codex OAuth refresh failures can wedge agents for hours without alerting. 
*   **Fix PRs in flight:** Fixes are actively being reviewed for related session bugs, such as preventing memory flush failures from aborting user replies ([PR #88968](https://github.com/openclaw/openclaw/pull/88968)).

## 6. Feature Requests & Roadmap Signals
*   **Standard Interface for External Security** ([Issue #72741](https://github.com/openclaw/openclaw/issues/72741)): Users want a unified API for third-party security and guardrail checks around agent actions. This is highly requested for enterprise adoption.
*   **Multi-index Embedding Memory** ([Issue #63990](https://github.com/openclaw/openclaw/issues/63990)): A request for first-class multi-embedding support to allow resilient provider/model failover without corrupting vector semantics.
*   **Voice-Channel as I/O** ([Issue #73699](https://github.com/openclaw/openclaw/issues/73699)): Bridging Discord voice channel I/O to text-channel agent sessions, rather than running voice in isolated sessions.

## 7. User Feedback Summary
Users are expressing frustration with **token consumption and context bloat** ([Issue #67419](https://github.com/openclaw/openclaw/issues/67419)), noting that bootstrap files are re-injected every turn, wasting 20-30% of prompt tokens. There is also widespread dissatisfaction with **WebChat reliability** ([Issue #67035](https://github.com/openclaw/openclaw/issues/67035), [Issue #77136](https://github.com/openclaw/openclaw/issues/77136)), where invisible messages and WebSocket disconnects are pushing users toward CLI/TUI alternatives. On the positive side, the team's quick patches to the heartbeat and SQLite issues in `v2026.6.1` have been acknowledged as steps in the right direction.

## 8. Backlog Watch
Several critical, high-impact issues remain stalled or awaiting triage:
*   **Session Crash on Token Estimation** ([Issue #63612](https://github.com/openclaw/openclaw/issues/63612)): A crash loop triggered by a simple `Cannot read properties of undefined (reading 'length')` in compaction token estimation has been open since April 9.
*   **Stuck Session Recovery Double Failure** ([Issue #76038](https://github.com/openclaw/openclaw/issues/76038)): Event loops blocking the Gateway and the system failing to recover from "stuck" states.
*   **Auth Router API Key Ignored** ([Issue #67423](https://github.com/openclaw/openclaw/issues/67423)): A severe bug where the auth router selects the wrong key for split provider entries, potentially compromising security.
*   **Circuit Breaker Flaw** ([Issue #64500](https://github.com/openclaw/openclaw/issues/64500)): The global circuit breaker blocks individual tools but allows agents to seamlessly switch to an alternate tool, enabling infinite ping-pong loops.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report for the AI agent and personal AI assistant open-source ecosystem based on June 4, 2026, data.

### 1. Ecosystem Overview
The open-source AI agent ecosystem is currently experiencing a massive architectural shift from simple chat interfaces to complex, multi-agent runtime environments. Projects are aggressively iterating to solve fundamental infrastructure challenges—specifically context window management, memory persistence, and robust multi-channel messaging. Community engagement across the board is exceptionally high, indicating a rapidly maturing market of developers and enterprise users pushing these frameworks into production. However, this high velocity is exposing critical stability and scaling bottlenecks, forcing projects to balance rapid feature integration with urgent backend hardening.

### 2. Activity Comparison
*Health Score is rated 1-5 based on issue triage speed, PR merge ratios, release cadence, and critical bug backlog. (Projects with 0 activity are excluded).*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 1000 events (358 open) | 388 open, 112 merged | **Active** (`v2026.6.1` released) | 3/5 (High activity, but P1 scaling issues) |
| **CoPaw** | 48 updated | 50 active | Pre-release (`v1.1.11` staging) | 4/5 (High velocity, excellent test coverage) |
| **IronClaw** | 19 updated | 50 active (50% merged) | **Active** (`v0.29.1` released) | 5/5 (Rapid "Reborn" overhaul, efficient merging) |
| **ZeroClaw** | 50 active | 50 active (41 open) | Pre-release (`v0.8.0` staging) | 4/5 (Massive community influx, good triage) |
| **Hermes Agent** | 50 active | 50 active | Stale | 3/5 (Maintainer triage bottleneck, 0 releases) |
| **NanoBot** | 32 active | 30 active (16 merged) | Pre-release (Imminent bump) | 4/5 (High velocity, clean lifecycle hooks) |
| **LobsterAI** | 14 merged/closed | 14 merged | **Active** (`2026.6.3` released) | 4/5 (Strong momentum, commercial friction) |
| **Moltis** | 14 updated (9 closed) | 3 open | **Active** (2 recent releases) | 4/5 (Rapid bug resolution, healthy cycle) |
| **PicoClaw** | 3 open | 10 active (3 merged) | **Active** (Nightly `v0.2.9`) | 4/5 (Stable, hardening phase) |
| **NanoClaw** | 0 new | 9 open | Stale | 3/5 (Useful PRs, but awaiting maintainer review) |
| **NullClaw** | 0 new | 1 open | Stale | 3/5 (Silent but stable, low activity) |

### 3. OpenClaw's Position
**Advantages vs. Peers:** OpenClaw remains the undisputed core reference implementation with by far the largest raw volume of community activity (1,000 events) and open issues/PRs. Its explicit focus on cross-platform channel stability (Telegram, WhatsApp, Slack, iMessage) is currently unmatched in breadth by peers.
**Technical Approach Differences:** Unlike projects taking "bottom-up" pure architectural approaches (like IronClaw's total "Reborn" refactor or NanoBot's event-driven bus), OpenClaw appears to be scaling via rapid, aggressive patching and iterative refactors (e.g., branching-by-abstraction for SQLite migration) while keeping the live system operational. 
**Community Size Comparison:** While IronClaw, ZeroClaw, and Hermes Agent are seeing ~50 daily interactions (indicating a highly active mid-tier), OpenClaw operates at an order of magnitude higher volume. However, this massive scale is currently its biggest weakness, as the core team is struggling to triage severe P1 regressions (e.g., WebChat UI swallowing text, Context Engine OOMs).

### 4. Shared Technical Focus Areas
*   **Context Bloat & Memory Management:** The most universal pain point. *CoPaw* (37GB ChromaDB bloats), *NanoBot* (MECE memory optimization), *Hermes Agent* (on-demand tool loading), and *OpenClaw* (Gateway crash loops) are all actively reworking how context is pruned, compressed, and handed off.
*   **Secure Sandboxing & Execution:** Striking the right balance between agent autonomy and host security. *ZeroClaw* (false positives in path policies), *NanoBot* (`restrict_to_workspace` bypass flaws), and *Hermes Agent* (approval gates) are all actively prioritizing tool-execution boundaries.
*   **Multi-Agent Orchestration (ACP):** The shift from single agents to swarms. *NanoBot* (File-system mailboxes), *NanoClaw* (Parent/child permissions), *IronClaw* (Reborn subagent completions), and *OpenClaw* (MCP child completion) are laying the groundwork for inter-agent communication.
*   **Containerization & Deployment:** Self-hosting remains difficult. *Moltis* (Docker/Podman breaking basic tools), *ZeroClaw* (FreeBSD/LXC quirks), and *NanoClaw* (encrypted home directory boot failures) show that deployment reliability is a required focus.

### 5. Differentiation Analysis
*   **IronClaw** is differentiating through deep, foundational enterprise architecture. Its "Reborn" overhaul and strict DTO boundaries target organizations needing bulletproof, auditable multi-channel deployments.
*   **CoPaw (QwenPaw)** focuses heavily on the local desktop experience (Tauri) and complex internal memory systems ("Dream" agent), catering to power users running long-term autonomous tasks.
*   **LobsterAI** is uniquely focused on collaborative "Cowork" UI features (conversation forking, artifact sharing), blurring the line between personal AI and team workspace.
*   **ZeroClaw** positions itself as the ultimate tinkerer's tool, prioritizing extreme platform diversity (FreeBSD, WhatsApp, 30+ locales) and deep model routing configurations, though it suffers UX friction.
*   **Hermes Agent** acts as the polyglot provider gateway, prioritizing rapid integration of diverse LLMs (Inception, MiniMax, Nebius) for users reliant on multi-model failover strategies.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapid Iterators (IronClaw, CoPaw, NanoBot):** These projects show the healthiest ratios of PR merges to opens. They have clear roadmaps (e.g., IronClaw's v0.30, NanoBot's event bus) and are efficiently processing community contributions.
*   **Tier 2: Scaling & Triage Phase (OpenClaw, ZeroClaw, Hermes Agent):** These projects have massive community interest but are choking on their own pipeline. Hermes has 50 open PRs with only 6 merged today; OpenClaw has nearly 400 open PRs. They risk alienating contributors if bottlenecks aren't addressed.
*   **Tier 3: Stabilizers (Moltis, LobsterAI, PicoClaw):** Mature projects focusing on UI/UX, deployment hardening, and patching edge cases rather than pursuing radical architectural rewrites.

### 7. Trend Signals
1.  **The Rise of "Deterministic" Evals:** As agents become more autonomous, standard prompting is insufficient. *ZeroClaw* introducing an offline deterministic replay harness (`zeroclaw-eval`) signals a coming industry-wide demand for standardized, reproducible agent testing frameworks.
2.  **Token Efficiency via Dynamic Tool Loading:** With context windows becoming a premium resource, injecting all available tools/MCPs at runtime is no longer viable. *NullClaw* and *Hermes Agent* are pioneering "on-demand" native API tool routing to reduce prompt bloat—a must-have for future enterprise agents.
3.  **Commercial Backlash on Usage Models:** *LobsterAI* users are aggressively pushing back against credit expiration policies. As open-source projects monetize, opaque consumption limits will cause community fractures, pushing users toward purely open localized runtimes (like *CoPaw*).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-06-04

## 1. Today's Overview
NanoBot demonstrates exceptionally high development velocity and active community engagement as of June 4, 2026. The project saw 62 total events (32 issues and 30 pull requests) updated in the last 24 hours, with a strong ratio of 16 merged/closed PRs against 14 remaining open. Maintainer `@chengyongru` is highly active, driving core refactors and merging community contributions at a rapid pace. While no new stable releases were cut today, the volume of recently closed feature PRs indicates that a substantial version bump is imminent. The project is currently in a phase of architectural maturation, focusing heavily on multi-agent orchestration, memory management, and core stability.

## 2. Releases
No new releases were published today (Latest release remains past versions). However, given the volume of core refactors and feature merges, a new version tag is likely being staged.

## 3. Project Progress
Development is heavily focused on architectural refactoring, WebUI stability, and foundational multi-agent support.
*   **Event-Driven Architecture:** PR [#4135](https://github.com/HKUDS/nanobot/pull/4135) (merged) refactored the WebUI runtime state onto a new event bus, decoupling UI state from the core agent loop.
*   **Multi-Agent Communication:** PR [#3461](https://github.com/HKUDS/nanobot/pull/3461) (merged) introduced a file-system-based mailbox channel plugin for inter-agent communication, laying the groundwork for multi-instance collaboration.
*   **Memory Optimization:** PR [#3952](https://github.com/HKUDS/nanobot/pull/3952) (merged) enhanced Dream and Consolidator prompts to ensure MECE (Mutually Exclusive, Collectively Exhaustive) long-term memory, reducing context bloat. 
*   **Agent Lifecycle & Hooks:** PR [#4176](https://github.com/HKUDS/nanobot/pull/4176) (open) introduced run-level agent hook lifecycles (`before_run`, `after_run`, `on_error`).
*   **Bug Fixes:** PR [#3932](https://github.com/HKUDS/nanobot/pull/3932) fixed a critical duplicate `tool_call_id` bug in OpenAI-compatible stream parsing modes. PR [#4157](https://github.com/HKUDS/nanobot/pull/4157) fixed WebUI hanging on startup due to unbounded fetch waits.

## 4. Community Hot Topics
The community remains highly engaged, primarily discussing multi-agent setups, memory constraints, and use-case specific hallucinations.
*   **Multi-Agent Setup Demands:** Issue [#222](https://github.com/HKUDS/nanobot/issues/222) (10 comments, 7 👍) remains highly active. Users are requesting comprehensive documentation and official support for multi-agent orchestration.
*   **Security & Prompt Injection:** Issue [#979](https://github.com/HKUDS/nanobot/issues/979) (5 comments) highlights an ongoing struggle where users are testing the AI's safety limits (e.g., bypassing `rm` command restrictions), showing that AI safety within agent frameworks remains a practical pain point.
*   **Long-Running Task Failures:** Issue [#1022](https://github.com/HKUDS/nanobot/issues/1022) (4 comments, 3 👍) details user frustration with agents hanging on complex, long-running web scraping/analysis tasks without completing them.
*   **Core Architecture RFCs:** Issue [#97](https://github.com/HKUDS/nanobot/issues/97) (1 comment, 6 👍) contains a highly upvoted proposal for core improvements to memory, security, and testing.

## 5. Bugs & Stability
Several notable bugs affecting stability and security were tracked today:
1.  **CRITICAL - Filesystem Sandboxing Flaw:** Issue [#143](https://github.com/HKUDS/nanobot/issues/143) (4 👍) reports that filesystem tools (`ReadFile`, `Write`, etc.) do not enforce `restrict_to_workspace`. This poses a significant security risk for host systems.
2.  **HIGH - Tool Hallucinations:** Issue [#937](https://github.com/HKUDS/nanobot/issues/937) (2 comments) reports frequent hallucinations when using the `exec` tool, causing users to halt framework evaluation. 
3.  **HIGH - Streaming Leaks:** Issue [#954](https://github.com/HKUDS/nanobot/issues/954) (3 comments, 1 👍) notes that since v0.1.4, internal tool calls (e.g., `read_file`) are being leaked directly into the user's chat interface.
4.  **MEDIUM - WebUI Startup Hangs:** Addressed today by merged PR [#4157](https://github.com/HKUDS/nanobot/pull/4157), which fixed WebUI failing to load on startup due to permanently pending API requests.

## 6. Feature Requests & Roadmap Signals
The roadmap is clearly trending toward multi-agent collaboration, multi-tenancy, and task-specific routing.
*   **Agent-to-Agent (A2A) Orchestration:** Issue [#4179](https://github.com/HKUDS/nanobot/issues/4179) (opened today) requests native Supervisor/Worker agent teams within a shared context, signaling a shift from single-agent to swarm architectures.
*   **Task-Specific Model Routing:** Issue [#912](https://github.com/HKUDS/nanobot/issues/912) (3 comments, 3 👍) proposes assigning different LLMs to different tasks (e.g., cheap model for chat, smart model for tool use/browser).
*   **Lightweight Memory Retrieval:** Issue [#80](https://github.com/HKUDS/nanobot/issues/80) (4 comments) advocates for BM25/TF-IDF retrieval over full-context injection to save tokens.
*   **Multi-Tenant Gateways:** Issue [#936](https://github.com/HKUDS/nanobot/issues/936) requests a single gateway container capable of routing to multiple distinct agents.

## 7. User Feedback Summary
Users praise NanoBot for being an ultra-lightweight, clean alternative to heavier frameworks. However, real-world deployment has exposed specific friction points:
*   **Pain Point - Sandbox Limitations:** Users are frustrated by the dichotomy of sandboxing. Issue [#940](https://github.com/HKUDS/nanobot/issues/940) notes the sandbox blocks the agent from accessing host media/skills, while Issue [#143](https://github.com/HKUDS/nanobot/issues/143) notes the sandbox doesn't restrict direct filesystem tools.
*   **Pain Point - Context Length:** Users relying on NanoBot for long tasks (scraping, coding) experience silent failures or context window exhaustion.
*   **Use Case - Integrations:** There is a strong desire to use NanoBot across diverse comms platforms, with active requests for Mattermost ([#1011](https://github.com/HKUDS/nanobot/issues/1011), 4 👍), WeChat ([#192](https://github.com/HKUDS/nanobot/issues/192)), and SimpleX Chat ([#240](https://github.com/HKUDS/nanobot/issues/240)).

## 8. Backlog Watch
Several highly-upvoted or critical issues have gone stale and require immediate maintainer attention:
*   **Security Vulnerability:** Issue [#143](https://github.com/HKUDS/nanobot/issues/143) (Filesystem `restrict_to_workspace` bypass) has been open since February and represents a critical security gap.
*   **Persistent Long-Term Memory:** Issue [#135](https://github.com/HKUDS/nanobot/issues/135) (4 👍) requests persistent memory across sessions, a fundamental feature for personal AI assistants that remains unimplemented at the core level.
*   **Mattermost Support:** Issue [#1011](https://github.com/HKUDS/nanobot/issues/1011) (4 👍) remains a highly requested integration with no official PR yet.
*   **Documentation Deficit:** Issue [#222](https://github.com/HKUDS/nanobot/issues/222) shows users actively trying to use multi-agent features but failing due to lack of documentation. With the recent merge of the mailbox channel ([#3461](https://github.com/HKUDS/nanobot/pull/3461)), updating the docs is crucial.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-06-04

## 1. Today's Overview
Hermes Agent is currently experiencing a massive spike in community engagement, with 50 issues and 50 pull requests updated in the last 24 hours. The project is in a highly active development phase, predominantly driven by community and contributor submissions focused on expanding provider support (Inception, Nebius, MiniMax) and refining the desktop experience. However, the high ratio of open items (45 open issues, 44 open PRs) compared to closed ones (5 issues, 6 PRs) suggests that maintainers may be facing a triage bottleneck. With zero new releases issued today, the current iteration is firmly in an integration and testing phase rather than a deployment phase.

## 2. Releases
There were **0 new releases** today. The project's latest distributed version remains unchanged. Users and downstream dependents should continue monitoring for the next patch or minor release, which will likely bundle the numerous bug fixes currently sitting in the open PR queue.

## 3. Project Progress
Although only a handful of items were merged or closed today, the open PR pipeline is bursting with substantial feature work and critical architectural fixes awaiting review:

*   **Gateway & Core Agent Resilience:** A lot of effort is going into fixing process lifecycle and communication bugs. PR [#38522](https://github.com/NousResearch/hermes-agent/pull/38522) ensures `/update` notifications aren't dropped during reconnects, while PR [#27492](https://github.com/NousResearch/hermes-agent/pull/27492) addresses a P1 cron lock starvation issue.
*   **Auxiliary Vision & Fallback Fixes:** PR [#38521](https://github.com/NousResearch/hermes-agent/pull/38521) repairs a silent `TypeError` that completely broke the fallback chain for vision tasks. 
*   **Expanded Provider Ecosystem:** New provider integrations are actively being prepped, including Inception (PR [#38518](https://github.com/NousResearch/hermes-agent/pull/38518)), Nebius Token Factory (PR [#38009](https://github.com/NousResearch/hermes-agent/pull/38009)), and MiniMax China OAuth (PR [#36286](https://github.com/NousResearch/hermes-agent/pull/36286)).
*   **Security & Tooling:** Maintainers are tightening security around terminal tool executions. PR [#37107](https://github.com/NousResearch/hermes-agent/pull/37107) introduces an approval gate for Perl/Awk in-place edits of Hermes configuration files.

## 4. Community Hot Topics
The most actively discussed items revolve around system stability, platform integrations, and UX friction:

*   **Memory Provider Crash (5 Comments):** Issue [#14036](https://github.com/NousResearch/hermes-agent/issues/14036) details a frustrating bug where using the ByteRover memory provider causes the gateway to exit silently mid-turn. This highlights a persistent need for more robust external memory integrations.
*   **Gemini Fallback Blindspot (4 Comments, 1 👍):** In Issue [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) and Issue [#24039](https://github.com/NousResearch/hermes-agent/issues/24039) (2 👍), users report that Gemini API errors (HTTP 503) completely bypass configured fallback providers. This indicates a strong user reliance on multi-provider resilience.
*   **Docker Matrix Gateway Missing Dependencies (4 Comments, 1 👍):** Issue [#30399](https://github.com/NousResearch/hermes-agent/issues/30399) shows friction for self-hosters. The official Docker image lacks the `mautrix[encryption]` package, making it impossible to run the Matrix gateway without custom image rebuilding.
*   **macOS Build Failures (3 Comments, 1 👍):** Issue [#36980](https://github.com/NousResearch/hermes-agent/issues/36980) reveals that the macOS desktop installer fails on clean installs due to a `@testing-library/dom` dependency resolution error.

## 5. Bugs & Stability
Several high-priority bugs impacting daily usage were reported today, though the community has reacted swiftly with corresponding fix PRs:

*   **[P1] Windows Update Bricking Installs:** Issue [#37881](https://github.com/NousResearch/hermes-agent/issues/37881) notes that running `hermes update` on Windows permanently breaks the installation due to a failed venv rebuild. **Fix:** PR [#38511](https://github.com/NousResearch/hermes-agent/pull/38511) implements `uv venv --clear` to safely replace partial directories.
*   **[P2] 100% CPU Zombie TUI Processes:** Issue [#38425](https://github.com/NousResearch/hermes-agent/issues/38425) reports orphaned Node processes causing massive CPU spikes after closing the TUI. (No PR linked yet).
*   **[P2] MCP Permanent Disconnect:** Issue [#38488](https://github.com/NousResearch/hermes-agent/issues/38488) highlights that transient backend outages permanently kill MCP servers. **Fix:** PR [#38509](https://github.com/NousResearch/hermes-agent/pull/38509) implements infinite reconnect retries.
*   **[P2] Patch Tool Corruption:** Issue [#38510](https://github.com/NousResearch/hermes-agent/pull/38510) fixes a fuzzy matcher bug where literal `\n` escapes were written into files instead of actual newlines.
*   **[P2] Docker TUI CWD Leak on Windows:** Issue [#38156](https://github.com/NousResearch/hermes-agent/issues/38156) points out a potential security/container-isolation issue where the host directory bleeds into the Docker terminal backend.

## 6. Feature Requests & Roadmap Signals
User feature requests are heavily trending toward UX improvements, deeper integration platforms, and system efficiency:

*   **Desktop UX & Control:** Users want a frontend-only installation for Windows (Issue [#38519](https://github.com/NousResearch/hermes-agent/issues/38519)), better handling of long cron prompts (Issue [#38452](https://github.com/NousResearch/hermes-agent/issues/38452)), and custom Electron flags for Chromebook Crostini (Issue [#38515](https://github.com/NousResearch/hermes-agent/issues/38515)). PR [#38517](https://github.com/NousResearch/hermes-agent/pull/38517) adds a much-requested "YOLO toggle" to the desktop status bar.
*   **On-Demand Tool Loading:** A structural RFC (Issue [#34038](https://github.com/NousResearch/hermes-agent/issues/34038)) proposes moving away from loading all tools/MCP servers at startup to an on-demand model. This signals a likely architectural shift in the next major version to reduce memory footprint and token bloat.
*   **Agent "Thinking" Mechanisms:** RFC Issue [#36053](https://github.com/NousResearch/hermes-agent/issues/36053) proposes a "Context Preflight" to force reflection before action, addressing the agent's structural bias toward immediate action over planning.
*   **Platform Integrations:** Requests for Linear Webhooks (PR [#38356](https://github.com/NousResearch/hermes-agent/pull/38356)) and preserving CC recipients in the Email Gateway (Issue [#38512](https://github.com/NousResearch/hermes-agent/issues/38512)) indicate a growing enterprise/power-user adoption vector.

## 7. User Feedback Summary
Users are actively pushing Hermes Agent to its limits, particularly across diverse OS environments (Windows, macOS, Crostini) and complex multi-provider setups. Self-hosters and Docker users are experiencing friction regarding missing encryption dependencies and platform-specific quirks. There is a strong undercurrent of appreciation for the expanding provider support, but also clear dissatisfaction with how the agent handles external API failures (Gemini 503/429 errors). Overall, users love the expanding feature set (tools, platforms, providers) but are currently struggling with desktop UI bugs and startup/CLI reliability.

## 8. Backlog Watch
Maintainers should prioritize reviewing the following long-standing or high-impact items:

*   **Vision Architecture Debt:** The auxiliary vision fallback chain is fundamentally broken for Gemini models. Issue [#25822](https://github.com/NousResearch/hermes-agent/issues/25822) (open since mid-May) and Issue [#30704](https://github.com/NousResearch/hermes-agent/issues/30704) show that Gemini 2.5+ models are missing from allowlists, heavily impacting users relying on Google's models. PR [#38521](https://github.com/NousResearch/hermes-agent/pull/38521) is ready for merge.
*   **Streaming Timeouts on Agent Payloads:** Issue [#29418](https://github.com/NousResearch/hermes-agent/issues/29418) (open since late May) reports that the Nous inference API times out on large, agent-sized payloads during streaming. This is a core infrastructure bottleneck that needs backend attention.
*   **P1 Cron Lock Starvation:** PR [#27492](https://github.com/NousResearch/hermes-agent/pull/27492) has been open since mid-May and fixes a critical flaw where `fcntl` locks freeze the entire cron scheduler during long jobs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-06-04

## 1. Today's Overview
PicoClaw demonstrates active and steady development, currently iterating towards its next milestone with a recent nightly build (v0.2.9). The project shows a healthy contributor pipeline with 10 pull requests updated in the last 24 hours, including bug fixes, dependency upgrades, and documentation enhancements. Although issue activity is moderate with 3 open items, the lack of closed issues today is offset by 3 merged/closed PRs, indicating a focus on codebase hardening and resolving existing bugs. The active merging of fixes for session history, tool execution, and security configurations suggests the maintainers are in a stabilization phase for the v0.2.9 release. 

## 2. Releases
*   **nightly: v0.2.9-nightly.20260603.a502aa7f**
    *   **Details:** An automated nightly build synced with the `main` branch. 
    *   **Note:** Marked as potentially unstable. Suitable for testers but should be avoided in production environments.
    *   **Full Changelog**: [v0.2.9...main](https://github.com/sipeed/picoclaw/compare/v0.2.9...main)

## 3. Project Progress
Three pull requests were successfully closed/merged today, advancing the project's stability and security:
*   **[PR #2997](https://github.com/sipeed/picoclaw/pull/2997) (CLOSED):** Bumped the Go dependency from 1.25.10 to 1.25.11 to patch a security vulnerability (`GO-2026-5039`) related to unescaped header names in `net/textproto`.
*   **[PR #2899](https://github.com/sipeed/picoclaw/pull/2899) (CLOSED):** Introduced configurable TLS verification for the MQTT channel, replacing the hardcoded `InsecureSkipVerify: true` to protect against Man-in-the-Middle (MITM) attacks.
*   **[PR #2994](https://github.com/sipeed/picoclaw/pull/2994) (CLOSED):** Added a new `picoclaw-agent` skill document (`SKILL.md`) to serve as a comprehensive operational guide for the agent's behavior, CLI usage, and provider workflows.

## 4. Community Hot Topics
The most engaging community discussion revolves around native streaming support and tool-call reliability:
*   **[Issue #2404](https://github.com/sipeed/picoclaw/issues/2404) (11 comments, 👍 1):** A feature request asking for a `"streaming": true` configuration option for HTTP requests to LLM backends. The high comment volume indicates that real-time streaming responses are a critical requirement for users building interactive applications.
*   **[Issue #2958](https://github.com/sipeed/picoclaw/issues/2958) & [PR #2957](https://github.com/sipeed/picoclaw/pull/2957):** Active discussion on a bug where `tool_calls` messages are dropped during consecutive streaming requests via the pico WebSocket channel. The author (loafoe) actively engaged by submitting a corresponding fix.

## 5. Bugs & Stability
Several bugs were reported or addressed today, primarily concerning session management, tool execution, and process handling:
1.  **Critical/Regression: Session History Pollution** 
    *   *Bug:* Upgrading to v0.2.9 caused new Web UI sessions to inherit old messages due to a fault in `PromoteAliasHistory` ([PR #2992](https://github.com/sipeed/picoclaw/pull/2992)).
    *   *Status:* Fix submitted and currently open.
2.  **High: Tool Calls Dropped in WebSockets**
    *   *Bug:* Subsequent `tool_calls` messages are dropped during consecutive streaming requests ([Issue #2958](https://github.com/sipeed/picoclaw/issues/2958)).
    *   *Status:* Fix submitted in [PR #2957](https://github.com/sipeed/picoclaw/pull/2957), which corrects the auxiliary message filtering logic.
3.  **Medium: Singleton Process Identity**
    *   *Bug:* Startup failures occur if the PID file is reused by an unrelated system process (e.g., `systemd-resolved`) ([PR #2955](https://github.com/sipeed/picoclaw/pull/2955)).
    *   *Status:* Fix submitted, adding strict process identity verification.
4.  **Low: Silent JSON Marshaling Errors**
    *   *Bug:* `json.Marshal` errors in `pkg/tools/shell.go` were silently ignored, returning empty strings to the LLM ([PR #2996](https://github.com/sipeed/picoclaw/pull/2996)).
    *   *Status:* Fix submitted, implementing proper error handling.
5.  **Low: 32-Bit Android Incompatibility**
    *   *Bug:* PicoClaw does not currently support 32-bit Android systems (Termux) ([Issue #2954](https://github.com/sipeed/picoclaw/issues/2954)).
    *   *Status:* Open, awaiting triage.

## 6. Feature Requests & Roadmap Signals
*   **Streaming HTTP Configuration ([Issue #2404](https://github.com/sipeed/picoclaw/issues/2404)):** Users want granular control over streaming API calls. Given the ongoing `v0.2.9` nightly iterations, this highly requested feature is a strong candidate for near-term integration.
*   **Dynamic MCP Headers ([PR #2696](https://github.com/sipeed/picoclaw/pull/2696)):** A proposal to support per-request dynamic headers from channel contexts to MCP servers. This indicates a roadmap signal towards more secure, context-aware multi-agent routing.

## 7. User Feedback Summary
Users are actively deploying PicoClaw across diverse environments but face friction with architecture limits and configuration behavior. The 32-bit Android issue highlights a demand for broader mobile/Termux compatibility. Additionally, users relying on complex automations (via the Pico WebSocket channel) are encountering edge cases with tool-calling continuity. On the positive side, community members like `loafoe` and `yuxuan-7814` are not only reporting bugs but also contributing high-quality PRs to resolve them, reflecting a healthy, invested open-source community.

## 8. Backlog Watch
The following items have gone stale and require maintainer attention:
*   **[PR #2956](https://github.com/sipeed/picoclaw/pull/2956):** Fix for channel enabled states being overwritten by `.security.yml`. A crucial configuration bug affecting Telegram channel setups that needs review.
*   **[PR #2955](https://github.com/sipeed/picoclaw/pull/2955):** Singleton PID check fix. A low-friction PR that prevents startup race conditions.
*   **[PR #2696](https://github.com/sipeed/picoclaw/pull/2696):** The dynamic headers feature PR has been open since late April and risks becoming stale. Maintainer feedback is requested to keep this security-enhancing feature on the roadmap.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw (qwibitai/nanoclaw) for June 4, 2026.

### 1. Today's Overview
NanoClaw is currently experiencing a highly active development phase, characterized by a burst of community-driven pull requests addressing various architectural and stability issues. In the last 24 hours, the project saw 9 open pull requests updated, including several focused on hardening the agent's task scheduling module and fixing proxy/routing errors. While the maintainers have not yet merged any PRs today, the pipeline is rich with bug fixes and quality-of-life improvements. No new software versions were released today. Overall, project health appears robust, with contributors actively identifying and patching edge cases in containerization, integrations, and local CLI tooling.

### 2. Releases
No new releases were recorded today. The current batch of open pull requests will likely be queued for an upcoming patch or minor version release once maintainers complete their reviews.

### 3. Project Progress
Although no PRs were merged or closed in the last 24 hours, several significant advancements were proposed and are currently under review:
*   **Scheduling System Overhaul:** A series of PRs by contributors `yairixStudio` and `shrwnsan` aim to significantly improve the reliability of scheduled tasks. This includes better handling of recurrence for failed tasks ([PR #2678](https://github.com/nanocoai/nanoclaw/pull/2678)), notifying users of permanently failed tasks ([PR #2679](https://github.com/nanocoai/nanoclaw/pull/2679)), and adding diagnostic retry logic for pre-task scripts ([PR #2677](https://github.com/nanocoai/nanoclaw/pull/2677)).
*   **Skill Versioning & Tooling:** Progress was made on modernizing the skill ecosystem, with `ira-at-work` submitting a fix to automatically skip outdated v1-only skill branches during updates ([PR #2682](https://github.com/nanocoai/nanoclaw/pull/2682)).
*   **Hybrid Search Integration:** A new container skill was proposed to integrate QMD (Query Markdown Documents) for hybrid markdown search (BM25 + vector) directly within the agent ([PR #2683](https://github.com/nanocoai/nanoclaw/pull/2683)).

### 4. Community Hot Topics
The community is highly focused on system resilience and local infrastructure integration today. 
*   **Slack Integration Limits:** A notable PR by `IamAdamJowett` ([PR #2675](https://github.com/nanocoai/nanoclaw/pull/2675)) addresses a major pain point with Vercel's Chat SDK dropping Slack messages due to a hard 3000-character limit per section block. This indicates a strong active user base utilizing NanoClaw for Slack bot deployment.
*   **Agent Permissions:** PR [#2605](https://github.com/nanocoai/nanoclaw/pull/2605) (originally opened in May) saw updates today. The proposal to allow child agents to inherit parent permissions via OneCLI is generating ongoing interest, highlighting a community need for more complex, multi-agent delegation workflows.

### 5. Bugs & Stability
*   **[Priority: Medium] Service Boot Failure on Encrypted Home Directories:** A critical edge case was documented by `glifocat` where enabling `linger` on systems with per-user encrypted home directories (ecryptfs, fscrypt) causes the service to silently fail at boot ([Issue #2680](https://github.com/nanocoai/nanoclaw/issues/2680)). **Status:** A fix has already been proposed by the same author in [PR #2681](https://github.com/nanocoai/nanoclaw/pull/2681).
*   **[Priority: Low] Proxy Bypass for Local Services:** A stability fix was introduced to bypass `OneCLI` proxy settings for local services using `NO_PROXY`, preventing internal routing loops ([PR #2676](https://github.com/nanocoai/nanoclaw/pull/2676)).

### 6. Feature Requests & Roadmap Signals
While no explicit feature requests were opened today, the PRs currently in the pipeline signal clear roadmap directions:
*   **Enhanced Local Search:** The introduction of the QMD container skill ([PR #2683](https://github.com/nanocoai/nanoclaw/pull/2683)) suggests a strategic move toward empowering the agent with better local RAG (Retrieval-Augmented Generation) and document parsing capabilities.
*   **Resilient Autonomous Scheduling:** The trio of scheduling fixes implies the project is pushing toward enterprise-grade reliability for autonomous, background-running agents.
*   **Next Version Prediction:** The next release will likely focus heavily on *background task reliability* and *integration stability*, given the current contents of the open PR backlog.

### 7. User Feedback Summary
User feedback today is implicitly tied to the bugs and PRs submitted, reflecting a technically proficient user base operating NanoClaw in diverse environments:
*   **Pain Point - Silent Failures:** Users are frustrated by silent failures (e.g., boot failures on encrypted directories, scheduled tasks failing without notification). The rapid patching of these exact issues shows high alignment between user pain points and contributor focus.
*   **Pain Point - Integration Quirks:** Users deploying NanoClaw as a Slack bot are experiencing dropped messages due to payload limits, indicating a need for better message chunking or truncation handling.
*   **Use Cases:** Heavy usage of NanoClaw for scheduled task automation, Slack integration, and local markdown querying via containerized skills.

### 8. Backlog Watch
*   **Long-term PR needs attention:** [PR #2605](https://github.com/nanocoai/nanoclaw/pull/2605) ("feat: inherit parent agent permissions via OneCLI") has been open since May 24, 2026. Despite being updated today, it awaits maintainer review. Given the complexity of multi-agent permission inheritance, this is a critical architectural PR that requires explicit maintainer feedback to avoid becoming stale.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Based on the provided GitHub data for NullClaw, here is the project digest for 2026-06-04.

### 1. Today's Overview
NullClaw exhibited low but highly focused technical activity over the past 24 hours, with no new releases, opened issues, or closed pull requests. The project's current state can be described as stable but in an active architectural refinement phase, specifically concerning its tool-calling and system prompt mechanics. A single open pull request introduced targeted improvements to how the AI agent handles tool filtering, indicating that maintainers are actively optimizing context window usage and MCP (Model Context Protocol) integrations. The absence of new issues suggests no immediate stability regressions affecting the broader user base. Overall, project health remains steady as backend optimizations take priority.

### 2. Releases
No new releases were recorded today. The project has not published a new version recently based on the current data window.

### 3. Project Progress
While no PRs were merged today, architectural advancements are actively being staged. 
*   **Tool Filtering Optimization:** A new open pull request ([#946](https://github.com/nullclaw/nullclaw/pull/946)) authored by `vernonstinebaker` was updated. This PR introduces a mechanism to filter tools within the system prompt text. By separating text-based tool calls from native API tool-calling schemas, the project is taking a significant step toward reducing prompt token bloat and improving agent response efficiency.

### 4. Community Hot Topics
There are no high-activity discussions or community hot topics to report today. The 24-hour window recorded zero new comments and zero reactions across all tracked issues and pull requests. 

### 5. Bugs & Stability
*   **No Critical Bugs:** Zero bug reports or crash issues were filed in the last 24 hours, indicating that the current public release remains stable.
*   **Stability Enhancements in Pipeline:** PR [#946](https://github.com/nullclaw/nullclaw/pull/946) addresses a structural optimization rather than an explicit crash. By moving dynamic-group MCP tools out of the text prompt and routing them strictly through native API schemas based on turn keywords, the system will likely prevent unintended tool-calling errors and improve overall agent reliability.

### 6. Feature Requests & Roadmap Signals
No explicit user-generated feature requests were submitted today. However, looking at the open PRs provides a strong signal about the immediate technical roadmap:
*   **MCP & Native API Convergence:** The ongoing work in PR [#946](https://github.com/nullclaw/nullclaw/pull/946) signals that the next version of NullClaw will feature a much more sophisticated, hybrid approach to tool management. Users can expect dynamic routing for MCP tools, where only "always-on" tools consume text context, while situational tools are loaded natively. 

### 7. User Feedback Summary
Due to a complete absence of new issues and comments today, there is no direct qualitative user feedback (pain points or satisfaction metrics) to analyze for this reporting period. 

### 8. Backlog Watch
Today’s data does not reflect any long-unanswered issues or stalled PRs requiring immediate maintainer attention. However, maintainer `vernonstinebaker`'s active PR ([#946](https://github.com/nullclaw/nullclaw/pull/946)) is currently open and will require further review before merging to push the project's tool-handling capabilities forward.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-06-04

## 1. Today's Overview
IronClaw experienced a high-velocity day of development, driven largely by its core contributor team advancing the sweeping **"Reborn"** architectural overhaul and expanding integration capabilities. Activity was robust, with 50 pull requests updated (achieving a balanced 50% merge/close rate) and 19 issues processed over the last 24 hours. The day culminated in the release of **`v0.29.1`**, which delivered targeted fixes to the API and conversation engine alongside new CI enhancements. Overall, the project is in a highly active, builder-heavy phase, prioritizing deep backend refactoring, security hardening, and the expansion of multi-channel integrations like Slack.

## 2. Releases
**[ironclaw-v0.29.1](https://github.com/nearai/ironclaw/releases/tag/v0.29.1)**
*   **Added:** Exposed the `temperature` parameter through the Responses API for web channels ([PR #3641](https://github.com/nearai/ironclaw/pull/3641)).
*   **Fixed:** Corrected context scoping for v1 history in channel conversations to prevent bleeding history across channels ([PR #4320](https://github.com/nearai/ironclaw/pull/4320)).
*   **CI / Release:** Added "WeCo" to the release process. No breaking changes or mandatory migration steps were noted.

## 3. Project Progress
Today's merged and closed PRs reflect massive horizontal progress on the Reborn runtime, new product adapters, and security infrastructure.
*   **Slack Integration MVP:** The groundworks for the Slack adapter are actively merging. [PR #4418](https://github.com/nearai/ironclaw/pull/4418) wired the Slack host-beta route into the Reborn server, while [PR #4421](https://github.com/nearai/ironclaw/pull/4421) introduced actor bindings for Slack users. 
*   **WebUI & Chat:** Advancements in WebUI v2 state management ([PR #4419](https://github.com/nearai/ironclaw/pull/4419)) and a critical fix for live projection cursor resumption that prevented synthetic updates from advancing the durable runtime cursor ([PR #4417](https://github.com/nearai/ironclaw/pull/4417)).
*   **Triggers & Automations:** Foundational trigger work landed, including full-path trigger poller integration testing ([PR #4415](https://github.com/nearai/ironclaw/pull/4415)) and a read-only automations API for the WebUI ([PR #4380](https://github.com/nearai/ironclaw/pull/4380)).
*   **Hooks System:** The team is merging a 4-part series for durable predicate backends. Today, the LibSQL ([PR #3936](https://github.com/nearai/ironclaw/pull/3936)) and Postgres ([PR #3933](https://github.com/nearai/ironclaw/pull/3933)) backends saw activity, alongside activation preparations ([PR #3938](https://github.com/nearai/ironclaw/pull/3938)) and third-party extension hook support ([PR #3951](https://github.com/nearai/ironclaw/pull/3951)).
*   **Security & Recovery:** Core systems were hardened, including loop capability validation ([PR #4414](https://github.com/nearai/ironclaw/pull/4414)) and subagent completion delivery to prevent replay double-writes ([PR #4413](https://github.com/nearai/ironclaw/pull/4413)).

## 4. Community Hot Topics
The most actively discussed issues revolve around the complexities of the "Reborn" migration, indicating strong maintainer-collaborator coordination on architectural boundaries.
*   **[Issue #3857](https://github.com/nearai/ironclaw/issues/3857)** *(6 comments)*: Discussing the implementation path for the Slack ProductAdapter MVP, specifically how to route work through Reborn services using preconfigured credentials.
*   **[Issue #3280](https://github.com/nearai/ironclaw/issues/3280)** *(5 comments)*: Designing the `ProductWorkflow` and `InboundTurnService` facade. The high comment volume highlights the complexity of creating a stable API layer between ProductAdapters and host-layer Reborn services.
*   **[Issue #4376](https://github.com/nearai/ironclaw/issues/4376)** *(2 comments)*: A technical deep-dive into security, discussing how to prevent cloned HTTP credentials from persisting in memory by enforcing strict DTO boundaries.

## 5. Bugs & Stability
Several critical bugs regarding state management, context overflow, and runtime loops were identified and closed today, demonstrating rapid response times from the engineering team.
*   **Context Overflow Loop (Fixed):** [Issue #4310](https://github.com/nearai/ironclaw/issues/4310) reported that context-overflow recovery emitted a shrink command, but the executor retried without actually shrinking the prompt, leading to repeated failures.
*   **Checkpoint Data Leak (Fixed):** [Issue #4309](https://github.com/nearai/ironclaw/issues/4309) revealed a race condition where compaction summaries could outlive a failed `BeforeModel` checkpoint, blocking subsequent model retries.
*   **Incomplete Trigger Policies (Open):** [Issue #4420](https://github.com/nearai/ironclaw/issues/4420) noted that `TriggerCompletionPolicy::CompleteAfterFirstFire` is saved but never acted upon, causing triggers to fire infinitely. (No linked fix PR is active yet).
*   **Stale PID File (Open):** [Issue #4400](https://github.com/nearai/ironclaw/issues/4400) reported production instances failing to restart due to unhandled stale PID files, causing a bootloop until manual intervention.

## 6. Feature Requests & Roadmap Signals
Looking at the current open issues and PRs, several distinct roadmap signals are visible for the upcoming v0.30.0 release:
*   **Model-Visible Capability Selection:** [Issue #4407](https://github.com/nearai/ironclaw/issues/4407) highlights that Reborn's expanding host-runtime capabilities are exceeding provider tool-count limits (e.g., OpenAI's GPT-5.4-nano limits). Designing a capability selection/filtering layer will be required soon.
*   **Default OAuth Accounts:** [Issue #4382](https://github.com/nearai/ironclaw/issues/4382) requests a "set once, gate never re-fires" default OAuth account system per provider (Notion, Google). This will massively reduce user friction in multi-tool workflows.
*   **Canonical Identity Resolver:** [Issue #4381](https://github.com/nearai/ironclaw/issues/4381) proposes a canonical Reborn identity resolver for OAuth, moving away from transient SSO bindings to stable `UserId`s.
*   **Reborn CLI Migration:** [PR #4379](https://github.com/nearai/ironclaw/pull/4379) signals the migration of standard read-only CLI commands (`doctor`, `status`, `config`) to the new Reborn binary natively.

## 7. User Feedback Summary
While much of today's activity was internal/infrastructure-focused, external user pain points surfaced around platform usability and provider integrations.
*   **Model Naming Confusion:** A user ([Issue #4377](https://github.com/nearai/ironclaw/issues/4377)) expressed frustration that the `/model` command returns display names (like "OpenAI GPT-5") that cannot be directly used to switch models via the NEAR AI provider. This highlights a friction point in CLI/chat UX regarding internal vs. display identifiers.
*   **Startup Reliability:** The stale PID file issue ([Issue #4400](https://github.com/nearai/ironclaw/issues/4400)) shows that self-hosted users are experiencing service downtime due to a lack of automatic cleanup mechanisms during unexpected crashes.
*   **User Sentiment:** Overall, users are testing the absolute edge of the system (hitting tool count limits, utilizing SSO/OAuth). The project is viewed as powerful but is currently exposing rough edges related to its rapid Reborn migration.

## 8. Backlog Watch
Several high-impact, core-infrastructure issues and PRs require continued maintainer attention:
*   **Nightly E2E Failures:** [Issue #4108](https://github.com/nearai/ironclaw/issues/4108) reports that the Nightly E2E scheduled run failed 24 hours ago. Infrastructure stability needs addressing to prevent regressions.
*   **MCP Auth Follow-ups:** [Issue #4389](https://github.com/nearai/ironclaw/issues/4389) tracks intentionally deferred risky behavior changes related to hosted MCP and GSuite/Notion OAuth. These need to be picked up before the next stable release.
*   **Trigger Completion Policy:** [Issue #4420](https://github.com/nearai/ironclaw/issues/4420) is an open bug with zero comments and no linked PRs. Given that it causes infinite trigger loops, it requires triage prioritization.
*   **Complex PR Queues:** Massive integration PRs like the Slack Host wiring ([PR #4418](https://github.com/nearai/ironclaw/pull/4418)) and Slack Actor bindings ([PR #4421](https://github.com/nearai/ironclaw/pull/4421)) touch dozens of scopes and require deep review to prevent supply-chain/host vulnerabilities.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI for June 4, 2026.

### 1. Today's Overview
LobsterAI is experiencing a highly active and healthy development phase, characterized by the release of version 2026.6.3 and the merging of 14 pull requests in the last 24 hours. The core maintainers are heavily focused on iterating on the "cowork" collaborative features, refining HTML sharing capabilities, and improving Model Context Protocol (MCP) stability. While the backend and feature development are moving swiftly, there is notable friction in the community regarding subscription and credit policies. Overall, the project demonstrates strong engineering momentum with robust feature rollouts and immediate bug resolutions.

### 2. Releases
*   **[LobsterAI 2026.6.3](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.6.3)** (Released 2026-06-03)
    *   *Changes:* This release includes optimizations for launching npx MCP servers (now with first response timing logs) and improvements to the HTML sharing feature. It also incorporates cowork module enhancements.

### 3. Project Progress
A massive amount of code was merged today, highlighting rapid iteration in several key modules:
*   **Cowork Module Expansion:** Maintainers implemented local conversation forking ([PR #2085](https://github.com/netease-youdao/LobsterAI/pull/2085)), allowing users to branch off from specific assistant messages. They also added the ability to inject selected text from artifact previews directly into the chat context ([PR #2098](https://github.com/netease-youdao/LobsterAI/pull/2098), [PR #2101](https://github.com/netease-youdao/LobsterAI/pull/2101)). 
*   **UI & UX Improvements:** Significant refactoring was done on keyboard shortcuts ([PR #2109](https://github.com/netease-youdao/LobsterAI/pull/2109)), and several UI bugs were fixed, including popover overflow issues and better search modal closing behavior ([PR #2097](https://github.com/netease-youdao/LobsterAI/pull/2097)).
*   **HTML Sharing:** The sharing dialog and access controls were completely refined, moving the feature out of strict test mode and improving copy/share workflows ([PR #2099](https://github.com/netease-youdao/LobsterAI/pull/2099), [PR #2105](https://github.com/netease-youdao/LobsterAI/pull/2105)).
*   **MCP Stability:** Several fixes were merged to prevent session timeouts during gateway reloads ([PR #2104](https://github.com/netease-youdao/LobsterAI/pull/2104)) and to validate remote server URLs ([PR #2103](https://github.com/netease-youdao/LobsterAI/pull/2103)). 

### 4. Community Hot Topics
*   **Credit Expiration Frustration:** The most active issue today is [Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081), where a user complains about their purchased 5,500 credits being cleared at the end of the month without use. This indicates significant user dissatisfaction with the current credit expiration/subscription policies and requires a clear official response to prevent community backlash.

### 5. Bugs & Stability
*   **Context Window Overrides (Fixed):** A bug where user-configured context windows were not being preserved was fixed today in [PR #2102](https://github.com/netease-youdao/LobsterAI/pull/2102). 
*   **MCP Stdio Failures (Fixed):** A stability issue where MCP npm install commands failed to recognize the correct Node toolchain path was resolved via [PR #2100](https://github.com/netease-youdao/LobsterAI/pull/2100), which also ensures raw stdio configs aren't dropped during launch failures.
*   **Channel Session Sync (Fixed):** Addressed a bug where recreated channel sessions could cause sync issues, resolved by syncing only the latest user turn and properly cleaning up deleted transcripts ([PR #2108](https://github.com/netease-youdao/LobsterAI/pull/2108)).

### 6. Feature Requests & Roadmap Signals
Based on today's merged code, the immediate roadmap heavily favors collaborative "Cowork" environments and AI tool integrations:
*   **Advanced Chat Contexting:** The ability to highlight text from AI artifacts and previous messages to feed back into the current prompt ([PR #2098](https://github.com/netease-youdao/LobsterAI/pull/2098)) signals a move toward more granular, multi-turn context control.
*   **New Models Support:** The inclusion of preparations for "mimo v2.5 models" in [PR #2102](https://github.com/netease-youdao/LobsterAI/pull/2102) suggests upcoming support for newer LLMs.
*   **Long-Awaited UI Polish:** An open PR, [PR #1463](https://github.com/netease-youdao/LobsterAI/pull/1463), introduces truncation and tooltips for long modal titles, a requested UX feature that might finally be merged soon.

### 7. User Feedback Summary
User feedback today highlights a stark contrast between engineering quality and commercial satisfaction. Technically, users are benefiting from the robust artifact sharing and conversation forking features. Commercially, however, the credit expiration policy is a major pain point. Users expect rollover or at least prominent warnings before monetary credits (like the 5,500 credits mentioned in [Issue #2081](https://github.com/netease-youdao/LobsterAI/issues/2081)) are wiped.

### 8. Backlog Watch
*   **Dependency Bottleneck:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) is an automated `dependabot[bot]` PR attempting to bump Electron from `40.2.1` to `42.3.1`. It has been open since April 2026. Major dependency upgrades like this can block other development or introduce unexpected rendering bugs, requiring maintainer intervention.
*   **Stale UX PR:** [PR #1463](https://github.com/netease-youdao/LobsterAI/pull/1463) (fixing long modal titles) has been open since early April and is marked as `[stale]`. It needs a final review from maintainers to be pushed across the finish line.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-06-04

## 1. Today's Overview
Moltis demonstrates a highly active and healthy development cycle, showing strong momentum in both community engagement and maintenance. Over the last 24 hours, the project saw a significant amount of traction with 14 issues updated (9 closed, 5 open) and 3 new pull requests submitted by contributors. The maintainers successfully merged recent development efforts into two new production releases. Current activity heavily focuses on refining the platform's stability across diverse deployment environments (like Docker and Podman) and enhancing the user experience regarding tool transparency and interface integrations.

## 2. Releases
Two new releases were published, indicating rapid iteration and deployment:
*   **[20260603.01](https://github.com/moltis-org/moltis/releases/tag/20260603.01)**: Released on June 3rd.
*   **[20260602.05](https://github.com/moltis-org/moltis/releases/tag/20260602.05)**: Released on June 2nd.
*(Note: Specific changelogs were not attached to the release metadata, but the closure of 9 bugs/features yesterday suggests these versions primarily focus on UI fixes, security patches, and file-handling improvements).*

## 3. Project Progress
While no PRs were explicitly marked as "merged" in the last 24 hours, the closure of 9 issues indicates that recent code merges have successfully resolved several standing bugs and feature requests. 
*   **Security & Config Fixes**: The team addressed a security vulnerability where environment variables from `stdio` MCP server configs were exposed via `mcp_list` ([#1054](https://github.com/moltis-org/moltis/issues/1054)).
*   **UI Enhancements**: Fixed UI constraints in the model picker ([#1052](https://github.com/moltis-org/moltis/issues/1052)) and restored syntax highlighting for code blocks in light mode ([#1045](https://github.com/moltis-org/moltis/issues/1045)).
*   **Active PRs in Pipeline**: Three open PRs are currently under review, focusing on improving tool payload handling (PR [#1098](https://github.com/moltis-org/moltis/pull/1098)), session history optimization (PR [#1089](https://github.com/moltis-org/moltis/pull/1089)), and tool status visibility (PR [#1093](https://github.com/moltis-org/moltis/pull/1093)).

## 4. Community Hot Topics
The most actively discussed items revolve around tool transparency and LLM context management:
*   **Activity Log Visibility ([#1092](https://github.com/moltis-org/moltis/issues/1092) & [PR #1093](https://github.com/moltis-org/moltis/pull/1093))**: Authored by `s-salamatov`, this issue and its accompanying PR introduce granular settings for channel activity logs. The underlying need is to reduce visual noise for end-users in interfaces like Telegram while retaining the ability to view tool executions when necessary. 
*   **Agent Context & Documentation ([#1028](https://github.com/moltis-org/moltis/issues/1028))**: A 3-comment discussion on providing the Moltis documentation Out-Of-The-Box (OOTB) to the AI agent. This highlights a community desire for the agent to be more autonomously capable of referencing internal documentation without manual prompting.

## 5. Bugs & Stability
Several new bugs were reported today, with containerized deployments representing the most severe stability pain points:
1.  **Container/Tool Isolation (High)**: `Read`/`Write`/`Edit` tools are completely non-functional inside Docker environments ([#1096](https://github.com/moltis-org/moltis/issues/1096)), and users are reporting that Podman is fundamentally broken ([#1095](https://github.com/moltis-org/moltis/issues/1095)). No fix PRs are attached yet.
2.  **Streaming Output Formatting (Medium)**: Telegram edit-in-place streaming is mixing intermediate processing outputs into the final reply ([#1097](https://github.com/moltis-org/moltis/issues/1097)).
3.  **LLM Parameter Handling (Medium)**: Smaller, local models (like Gemma 4) passing explicit `null` values in optional parameters are causing browser tool calls to fail. A fix is already proposed in PR [#1098](https://github.com/moltis-org/moltis/pull/1098).
4.  **Model Selection Logic (Low)**: Users are experiencing issues with model preference de-selection ([#1094](https://github.com/moltis-org/moltis/issues/1094)). 

## 6. Feature Requests & Roadmap Signals
User feedback suggests a strong trajectory toward better multi-modal capabilities and smarter UI:
*   **File Attachments**: Users are requesting the ability to process arbitrary inbound file attachments directly within the Web UI ([#1036](https://github.com/moltis-org/moltis/issues/1036)).
*   **Tool Result Optimization**: PR [#1089](https://github.com/moltis-org/moltis/pull/1089) introduces capping for persisted tool results during session rehydration. This signals upcoming optimizations for memory handling and long-term context windows.
*   *Prediction*: The next version will likely focus heavily on hardening container deployments and merging the activity log visibility settings, considering the rapid pace of the related PRs.

## 7. User Feedback Summary
Users are pushing Moltis into self-hosted, containerized production environments, as evidenced by the sudden spike in Docker and Podman-related issues. There is a clear dichotomy in the user base: technical users are integrating complex MCP servers and local LLMs, while end-users interacting via channels like Telegram demand a clean, chat-like experience without JSON artifacts or stream glitches. The fast resolution of the Vault password bug ([#1046](https://github.com/moltis-org/moltis/issues/1046)) and skill-toggle bug ([#1083](https://github.com/moltis-org/moltis/issues/1083)) has generated positive community sentiment regarding the project's responsiveness.

## 8. Backlog Watch
*   **Local Model Compatibility**: As local deployments grow, addressing the `null` parameter bug (PR [#1098](https://github.com/moltis-org/moltis/pull/1098)) is crucial. Maintainers should review and merge this swiftly to improve the out-of-the-box experience for local LLM users.
*   **Vault & Security Stability**: Although recently closed, the Vault setup ([#1046](https://github.com/moltis-org/moltis/issues/1046)) and MCP env var exposure ([#1054](https://github.com/moltis-org/moltis/issues/1054)) issues are critical. Maintainers should ensure these patches are thoroughly documented in the new release notes to encourage users on older versions to upgrade.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-06-04

## 1. Today's Overview
CoPaw (QwenPaw) is experiencing a high-velocity development cycle with 50 active Pull Requests and 48 updated Issues in the last 24 hours, indicating a very active maintainership and community engagement. The bulk of today's activity centers around hardening the platform's memory management systems and stabilizing the newly introduced Tauri desktop client. Significant engineering effort is being directed toward fixing context compaction bugs, resolving ChromaDB vector store bloat, and expanding messaging channel capabilities. Overall, the project is in a highly iterative phase, actively incorporating community feedback to refine its core agent features.

## 2. Releases
No new official releases were recorded today. The project maintainers and contributors are currently focused on merging stability patches, dependency updates, and integration tests, likely building up to a future `v1.1.11` stable release.

## 3. Project Progress
Significant advancements were merged into the project today, focusing heavily on bug fixes, test coverage, and dependency management:

*   **Context Compaction Fixes:** Merged [PR #4933](https://github.com/agentscope-ai/QwenPaw/pull/4933) which resolves media block processing crashes during context compression by handling non-dictionary source objects.
*   **Dependency & Watcher Reliability:** Merged [PR #4935](https://github.com/agentscope-ai/QwenPaw/pull/4935), updating the `reme-ai` dependency to `0.3.1.10` to fix a critical stop-event reset bug in the base file watcher.
*   **Integration Testing:** A massive update to automated testing was merged and refined ([PR #4943](https://github.com/agentscope-ai/QwenPaw/pull/4943), [PR #4940](https://github.com/agentscope-ai/QwenPaw/pull/4940)), adding 55 new P0 contract tests covering agent routing, skills CRUD, and plugin loader timeout resilience.
*   **Roadmap Update:** The internal roadmap was officially updated ([PR #4942](https://github.com/agentscope-ai/QwenPaw/pull/4942)).

## 4. Community Hot Topics
The most actively discussed issues highlight the community's focus on browser automation, context handling, and autonomous evolution:

*   **Browser Automation Instability:** [Issue #4919](https://github.com/agentscope-ai/QwenPaw/issues/4919) (6 comments) reports persistent CDP timeouts and browser crashes when using `browser_use`, forcing users to seek CLI fallbacks. A fix is already in the pipeline via [PR #4944](https://github.com/agentscope-ai/QwenPaw/pull/4944).
*   **Context Compaction Failures:** [Issue #4924](https://github.com/agentscope-ai/QwenPaw/issues/4924) (4 comments) and [Issue #4448](https://github.com/agentscope-ai/QwenPaw/issues/4448) (4 comments) detail widespread issues with memory compaction crashing over long conversations. 
*   **Self-Evolving Agents:** Community demand for autonomous agent evolution (similar to Hermes Agent) remains a trending theme, as seen in [Issue #3470](https://github.com/agentscope-ai/QwenPaw/issues/3470) (6 comments) and [Issue #3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) (4 comments).
*   **Memory Search Bloat:** [Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) (3 comments) highlights a severe case where ChromaDB vector indexes ballooned to 37GB, causing `memory_search` to crash consistently.

## 5. Bugs & Stability
Several high-severity bugs affecting core agent memory and the desktop client were identified today:

1.  **Critical - Dream Agent Memory Overwrite:** The Dream agent uses relative paths when writing files, causing catastrophic cross-workspace memory overwrites. (Bug report: [Issue #4888](https://github.com/agentscope-ai/QwenPaw/issues/4888), Fix PR: [PR #4936](https://github.com/agentscope-ai/QwenPaw/pull/4936)).
2.  **Critical - ChromaDB Segfaults:** [Issue #3854](https://github.com/agentscope-ai/QwenPaw/issues/3854) notes that Chromadb's Rust bindings cause hard process crashes (SIGSEGV) without Python-level error handling. 
3.  **High - Tauri Plugin Loader:** Desktop users are unable to use plugins due to an uninitialized plugin loader ([Issue #4889](https://github.com/agentscope-ai/QwenPaw/issues/4889)). A structural fix is currently under review in [PR #4900](https://github.com/agentscope-ai/QwenPaw/pull/4900).
4.  **Medium - Shell Output Context Blowup:** [Issue #4781](https://github.com/agentscope-ai/QwenPaw/issues/4781) reports that `tool_result_pruning` fails to truncate unexpectedly large shell outputs (e.g., 263KB JSON files), overflowing the context window.

## 6. Feature Requests & Roadmap Signals
User feedback is heavily shaping the next iteration of QwenPaw's memory and UI capabilities:

*   **ACP & TUI Support:** [PR #4949](https://github.com/agentscope-ai/QwenPaw/pull/4949) introduces advanced Agent Client Protocol metadata, signaling an upcoming first-class Terminal UI experience.
*   **Advanced Memory Distillation:** [PR #4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) proposes a "title-diffing" distillation engine to consolidate daily notes with ~92% noise reduction, addressing complaints about inefficient memory consolidation.
*   **Auto-Memory Pre-hooks:** Users are requesting automated memory archival at the end of every session so agents don't "forget" to save context ([Issue #4640](https://github.com/agentscope-ai/QwenPaw/issues/4640)).
*   **MiniMax M3 Integration:** Community contributors are rapidly adding support for the new MiniMax M3 512K context model ([PR #4881](https://github.com/agentscope-ai/QwenPaw/pull/4881)), addressing limitations noted in [Issue #4937](https://github.com/agentscope-ai/QwenPaw/issues/4937).

## 7. User Feedback Summary
Users operating long-running, complex agents are butting up against the limits of QwenPaw's memory management. While the "Dream" memory optimization feature is highly anticipated, users are frustrated by its current instability, noting that it sometimes leaves core memory files completely blank ([Issue #3905](https://github.com/agentscope-ai/QwenPaw/issues/3905)). On the UI front, desktop users are experiencing frustrating permission errors during backups ([Issue #4916](https://github.com/agentscope-ai/QwenPaw/issues/4916)) and unintuitive chat input behavior ([Issue #4920](https://github.com/agentscope-ai/QwenPaw/issues/4920)). Furthermore, users managing multi-channel setups report that saving settings in custom channels randomly drops the listener connection ([Issue #4877](https://github.com/agentscope-ai/QwenPaw/issues/4877)). 

## 8. Backlog Watch
Several structurally important PRs and Issues require final maintainer approval to unblock community workflows:

*   **[PR #4669](https://github.com/agentscope-ai/QwenPaw/pull/4669):** The Tauri Auto-Updater has been open since late May. Merging this will drastically reduce desktop user friction.
*   **[Issue #4877](https://github.com/agentscope-ai/QwenPaw/issues/4877):** A well-analyzed bug detailing a logical race condition in channel management that causes listeners to fail upon settings save. Needs an official maintainer fix.
*   **[Issue #4640](https://github.com/agentscope-ai/QwenPaw/issues/4640):** An RFC proposing a much-needed Pre-hook Memory Archiving system to automate session summarization. Architectural feedback from maintainers is needed.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-06-04

## 1. Today's Overview
ZeroClaw is currently experiencing a period of exceptionally high development velocity and community engagement, serving as a hub of active open-source collaboration. The project saw 50 issues and 50 pull requests updated in the last 24 hours, indicating heavy iteration across the codebase. While the core team has closed a significant number of critical bugs (26 issues closed/9 PRs merged), 41 new pull requests remain open, reflecting a massive influx of community contributions and ongoing architectural refactors. With active tracker issues open for versions 0.8.0 and 0.8.1, ZeroClaw is in a mature stabilization phase, heavily focused on hardening security, fixing edge cases in its configuration/runtime layers, and expanding internationalization. 

## 2. Releases
**No new releases** were published today. The project is actively staging work for the upcoming **v0.8.0** and **v0.8.1** milestones.

## 3. Project Progress
Today's merged/closed PRs and active PRs reflect a strong focus on stability, multi-platform support, and deterministic testing:
*   **Provider Support Fixed:** [PR #7172](https://github.com/zeroclaw-labs/zeroclaw/pull/7172) was merged to honor the `wire_api = "responses"` setting for the llamacpp provider, fixing an issue where it unconditionally defaulted to chat completions.
*   **New Platform Support:** [PR #7161](https://github.com/zeroclaw-labs/zeroclaw/pull/7161) introduces FreeBSD setup guides, `rc.d` scripts, and jail dist files.
*   **Expanded Provider Capabilities:** [PR #7163](https://github.com/zeroclaw-labs/zeroclaw/pull/7163) adds `extra_body` support for OpenAI-compatible providers, allowing custom JSON fields.
*   **Evaluation Framework Phase 0:** [PR #7067](https://github.com/zeroclaw-labs/zeroclaw/pull/7067) introduces a deterministic replay evaluation harness (`zeroclaw-eval`), enabling offline agent testing.
*   **TUI/CLI Polish:** [PR #7132](https://github.com/zeroclaw-labs/zeroclaw/pull/7132) scrubbed stale `zeroclaw onboard` references, replacing them with the new `quickstart` nomenclature.
*   **Internationalization:** [PR #7140](https://github.com/zeroclaw-labs/zeroclaw/pull/7140) fixed missing agent translation keys across 30 non-English locales.

## 4. Community Hot Topics
The most actively discussed issues center around **security architecture** and **severe runtime workflow blocks**:
*   **Pluggable Security & OIDC (v0.9.0 Architecture):** Two major tracking issues were opened by `singlerider` to outline the v0.9.0 roadmap: [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) (OIDC Authentication for RPC/WSS) and [Issue #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) (Pluggable security provider interface). Both received 3 comments each, highlighting strong community interest in enterprise-grade auth.
*   **Fresh Install Default Model Bug:** [Issue #6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) by `rgnyldz` generated 18 comments. Users are frustrated by a config bug that completely blocks workflows on fresh installations when connecting to external Ollama instances.
*   **Skill Execution & Security:** [Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722) (6 comments) details how default sandbox configurations are too restrictive for complex Python skills (like InvestorClaw). Furthermore, [Issue #5697](https://github.com/zeroclaw-labs/zeroclaw/issues/5697) highlights contradictory behavior where skills are blocked even when explicitly allowed via `skills.allow_scripts = true`.
*   **Context Compression DeepSeek Bug:** [Issue #6269](https://github.com/zeroclaw-labs/zeroclaw/issues/6269) (4 comments) highlights a critical degradation for DeepSeek usage where proactive context compression strips `reasoning_content`, breaking thought-dependent models.

## 5. Bugs & Stability
Several critical bugs (S1/S2) were addressed or surfaced today:
*   **Gateway/WebSocket Approval Bypass [S1]:** [Issue #6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) reveals that the WebSocket gateway path bypasses `ApprovalManager`. *Fix is currently in progress.*
*   **Skill Download Panics [S1]:** [Issue #6681](https://github.com/zeroclaw-labs/zeroclaw/issues/6681) reports that `zeroclaw skills install clawhub:*` panics due to a blocking `reqwest` call inside a Tokio async context.
*   **Path Policy False Positives [S2]:** [Issue #7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133) reports that the path-policy tokenizer flags `~` tokens in quoted/heredoc strings, blocking safe commands.
*   **UTF-8 Panics in UI [S2]:** [PR #7123](https://github.com/zeroclaw-labs/zeroclaw/pull/7123) fixes a byte-indexing panic in the dashboard's text truncation logic that occurred when handling multi-byte characters (like CJK text). Similarly, [PR #7154](https://github.com/zeroclaw-labs/zeroclaw/pull/7154) fixes a panic in short-option parsing.
*   **Channel Onboarding Regression [S1]:** [Issue #7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173) notes that the new quickstart channel webhook config fails to prompt for a port, crashing the agent on startup.

## 6. Feature Requests & Roadmap Signals
Based on recent issues and the v0.8.0/v0.8.1 trackers, users can expect the following in upcoming releases:
*   **Session Branching:** A highly requested feature ([Issue #7168](https://github.com/zeroclaw-labs/zeroclaw/issues/7168), [Issue #7167](https://github.com/zeroclaw-labs/zeroclaw/issues/7167)) to fork conversations at any message point for "what if" exploration.
*   **ACP Session Cancellation:** [Issue #5837](https://github.com/zeroclaw-labs/zeroclaw/issues/5837) requests cancellation support for ACP-protocol sessions.
*   **Kilo AI Gateway Integration:** [PR #7136](https://github.com/zeroclaw-labs/zeroclaw/pull/7136) is adding Kilo AI as a first-class model provider.
*   **Per-Recipient Reply Pacing:** [PR #6389](https://github.com/zeroclaw-labs/zeroclaw/pull/6389) is bringing rate-limiting/reply pacing across 9 social/chat channels to prevent spamming.
*   **Gateway Credential Rotation Fixes:** [PR #6988](https://github.com/zeroclaw-labs/zeroclaw/pull/6988) ensures bearer tokens are actually invalidated upon device deletion/rotation.

## 7. User Feedback Summary
Users are enthusiastically adopting ZeroClaw across diverse environments (LXC containers, FreeBSD, WhatsApp integrations), but are encountering friction with the configuration schema. Specifically, users report that the transition from `onboard` to `quickstart` left broken configuration workflows, particularly missing ports ([Issue #7173](https://github.com/zeroclaw-labs/zeroclaw/issues/7173)). Another major pain point is the strictness of the security sandbox; advanced users writing custom Python skills feel blocked by false-positive security triggers ([Issue #5722](https://github.com/zeroclaw-labs/zeroclaw/issues/5722), [Issue #7133](https://github.com/zeroclaw-labs/zeroclaw/issues/7133)). Overall sentiment shows a power-user base eager to push the agent to its limits via complex skills, multi-modal inputs, and non-English locales.

## 8. Backlog Watch
*   **v0.8.0 Stable Blockers:** [Issue #7112](https://github.com/zeroclaw-labs/zeroclaw/issues/7112) is the main tracker for v0.8.0 and currently requires focused attention to finalize config/tool-call-parser stability. It has 0 comments today, suggesting it needs active triage.
*   **Observability Regression:** [Issue #6103](https://github.com/zeroclaw-labs/zeroclaw/issues/6103) (Token accounting for webhook observer events) has been marked as `status:blocked` since April 25th and needs resolution for proper enterprise observability.
*   **Missing Skill Documentation:** [Issue #5863](https://github.com/zeroclaw-labs/zeroclaw/issues/5863) points out a critical gap in explaining how to write and structure skills. This is fundamental for the project's growth but remains unresolved.

</details>