# OpenClaw Ecosystem Digest 2026-05-30

> Issues: 326 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-29 22:28 UTC

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

# OpenClaw Project Digest — 2026-05-30

## 1. Today's Overview
OpenClaw is experiencing extremely high community and development activity, with **826 total events (326 issues and 500 PRs)** processed in the last 24 hours. The maintainers recently shipped three rapid-fire beta releases (v2026.5.28-beta.1 through .3), focusing heavily on stabilizing the Agent and Codex runtimes. However, the unusually high ratio of open PRs to merged PRs (347 open vs. 153 closed) suggests a significant backlog or an influx of draft PRs awaiting review. The issue tracker remains busy with active user reports (155 open/active), heavily centered around the newly introduced Codex runtime integration, event-loop stability under heavy loads, and multi-channel routing regressions.

## 2. Releases
Three new versions were released, all grouped under the **v2026.5.28-beta** tag:
- **v2026.5.28-beta.3** (Latest)
- **v2026.5.28-beta.2**
- **v2026.5.28-beta.1**

**Changes & Highlights:**
The primary focus of these releases is **Agent and Codex runtime recovery**. The updates introduce steadier state management:
* Subagents now strictly maintain `cwd/workspace` separation.
* Hook context is correctly scoped to `prompt-local`.
* Session locks are now properly released on timeout aborts, preventing zombie locks.
* Measures were added to avoid stale restart continuations.
* Codex app-server/helper failures are now isolated so they no longer tear down shared runtime state.

*Migration Note:* Users upgrading to this beta should be aware that `openclaw doctor --fix` and `openclaw onboard` currently have known edge cases (see Bugs section) when migrating legacy configs to the new Codex runtime paths.

## 3. Project Progress
Significant architectural groundwork and bug fixes were merged or advanced in today's PR pipeline (153 closed/merged):
* **State Management Refactoring:** Progress is being made on moving scattered JSON/JSONL state into a typed SQLite layout ([PR #81402](https://github.com/openclaw/openclaw/pull/81402)).
* **Security Enhancements:** Development advanced on the `exec` deny-list feature, bridging the gap between strict allowlists and unrestricted YOLO mode ([PR #82596](https://github.com/openclaw/openclaw/pull/82596)), and a specific `tools.exec.denyPathPatterns` hard-deny gate ([PR #88075](https://github.com/openclaw/openclaw/pull/88075)).
* **CLI & UX Fixes:** Merges include differentiating gateway restart hints for hot-loadable configs ([PR #80823](https://github.com/openclaw/openclaw/pull/80823)) and fixing WebChat run-status label race conditions ([Issue #86939](https://github.com/openclaw/openclaw/issues/86939)).
* **Provider Support:** Work is underway to add Hermes provider parity ([PR #88145](https://github.com/openclaw/openclaw/pull/88145)) and separate API key env vars for the OpenCode Zen and Go plugins ([PR #87762](https://github.com/openclaw/openclaw/pull/87762)).

## 4. Community Hot Topics
The most actively discussed issues reveal a community heavily focused on runtime stability and provider migrations:
* **Codex Runtime & Token Inflation ([Issue #84038](https://github.com/openclaw/openclaw/issues/84038) - 12 comments, 3 👍):** Users reported that `doctor --fix` silently migrates configs to `openai/`, breaking PI+OAuth and causing 3-4x token inflation. This highlights anxiety around unintended breaking changes in automated repair tools.
* **Windows UI Regression ([Issue #67035](https://github.com/openclaw/openclaw/issues/67035) - 13 comments):** A lingering P1 bug where typed input is swallowed and streamed replies are invisible until refreshed. This is a major pain point for desktop/web users.
* **Event Loop Starvation ([Issue #75378](https://github.com/openclaw/openclaw/issues/75378) - 8 comments, 2 👍):** Spawning parallel subagents blocks the Node.js event loop, causing 1012 restarts. Users running heavy models (DeepSeek-v4) are actively discussing architectural bottlenecks here.
* **Hook Relay Failures ([Issue #86820](https://github.com/openclaw/openclaw/issues/86820) - 10 comments, 6 👍):** High engagement regarding OAuth compaction falling back to direct API and failing. The high ratio of upvotes to comments indicates a widespread, easily reproducible blocker.

## 5. Bugs & Stability
Stability is currently the paramount concern, specifically regarding the Node.js event loop and file descriptors (FDs). Ranked by severity:

* **P1 - Event Loop & Lock Starvation:** 
  * Context compaction stalls the event loop for up to 87 seconds, timing out fetch requests and crashing sessions ([Issue #86509](https://github.com/openclaw/openclaw/issues/86509)). *Fix advanced: PR #88136 centralizes terminal run outcome precedence.*
  * Session yield leaves transcript locks held, timing out subagent callbacks ([Issue #85953](https://github.com/openclaw/openclaw/issues/85953)).
* **P1 - Gateway Memory & FD Leaks:** 
  * A massive memory leak grows the gateway from 389MB to 14.7GB over 4 days ([Issue #54155](https://github.com/openclaw/openclaw/issues/54155)).
  * `memory_search` leaks ~N FDs per call on macOS, degrading to FD exhaustion ([Issue #86613](https://github.com/openclaw/openclaw/issues/86613)). *Fix PR exists: PR #88149 caps bootstrap snapshot cache.*
* **P1 - Provider & Config Mismatches:** 
  * Codex-backed Telegram turns repeatedly time out waiting for turn completion ([Issue #87744](https://github.com/openclaw/openclaw/issues/87744)).
  * Feishu channel fails to dispatch messages after v2026.5.27 upgrade ([Issue #87646](https://github.com/openclaw/openclaw/issues/87646)). *Fix PR exists: PR #88135 targets stale managed runtime plugins.*
* **P2 - UI & Rendering:** 
  * Control UI chat session picker suffers from a blur/click race condition ([Issue #87554](https://github.com/openclaw/openclaw/issues/87554) - closed, fixed).

## 6. Feature Requests & Roadmap Signals
User requests indicate a desire for more control over agent environments and broader provider support:
* **Security & Control:** Fine-grained execution controls are highly requested. The advancement of the `exec` denylist ([PR #82596](https://github.com/openclaw/openclaw/pull/82596)) and path denial patterns ([PR #88075](https://github.com/openclaw/openclaw/pull/88075)) signal these will likely land in the next stable release.
* **Provider Expansion:** Users are requesting native `web_search` passthrough for Google (Gemini) and ZAI (GLM) providers ([Issue #17925](https://github.com/openclaw/openclaw/issues/17925)). With the recent NovitaAI/GMI Cloud PRs ([PR #88145](https://github.com/openclaw/openclaw/pull/88145)), provider parity is clearly on the roadmap.
* **Agent Customization:** Requests for per-agent dreaming configuration to prevent OOM kills during cron jobs ([Issue #67413](https://github.com/openclaw/openclaw/issues/67413)) reflect a maturing user base running complex, multi-agent setups.

## 7. User Feedback Summary
**Pain Points:**
Users are visibly frustrated by **race conditions and UI state bugs** (e.g., invisible text on Windows, stuck "In progress" labels on WebChat). Furthermore, the **`doctor --fix` command has lost community trust**; multiple reports indicate it breaks more than it fixes regarding OAuth and Codex provider routing. 

**Satisfaction & Use Cases:**
Despite stability complaints, the high volume of specific bug reports (complete with system logs and repro steps) shows a highly technical, invested power-user base. Users are successfully deploying OpenClaw across diverse environments (Raspberry Pi 5, macOS, VPS setups) and integrating it heavily into community platforms (Telegram, Matrix, Discord, Feishu, WhatsApp). The push for a TUI multi-line input feature ([Issue #10118](https://github.com/openclaw/openclaw/issues/10118)) highlights a segment of users using OpenClaw heavily in terminal environments.

## 8. Backlog Watch
Several critical issues require immediate maintainer attention:
* **[Issue #67035](https://github.com/openclaw/openclaw/issues/67035):** A severe Windows UI regression causing invisible messages and input swallowing. Open since April 15, tagged as P1, but still awaiting a definitive live fix despite 13 comments.
* **[Issue #54155](https://github.com/openclaw/openclaw/issues/54155):** Gateway memory leak (up to 14.7GB). Open since March 25 with 7 comments. Given the merging of PR #81402 (SQLite state migration), this might be alleviated, but it explicitly needs verification.
* **[Issue #62328](https://github.com/openclaw/openclaw/issues/62328):** Memory search silently failing due to missing FTS5 module in standard Node.js builds. Open since April 7, blocking a core feature (memory) for standard npm installs.
* **[PR #81402](https://github.com/openclaw/openclaw/pull/81402):** The massive SQLite refactor PR. It is marked as an XL change with high merge risk. It needs a final maintainer look to unblock numerous state-related bugs.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the community digests for 2026-05-30.

## 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a phase of rapid, parallel feature expansion coupled with intensive stability hardening. Driven by the integration of complex multi-agent orchestration and diverse communication channels, projects are facing significant architectural growing pains—particularly regarding memory management, event-loop stability, and context window optimization. Security has also taken center stage, with core frameworks aggressively addressing SSRF vulnerabilities, execution sandbox escapes, and supply chain risks. The overarching trajectory shows a maturing market pivoting from basic chat interfaces toward highly extensible, multi-tenant platforms capable of autonomous, cross-platform task execution.

## 2. Activity Comparison
*Health Score Legend: Excellent (Rapid resolution, high velocity), Good (Active iteration, clearing backlog), Moderate (High activity, but high bug backlog/instability), Steady (Slow but stable maintenance).*

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 326 | 500 | v2026.5.28-beta.3 | Moderate |
| **Hermes Agent** | 50 | 50 | v0.15.2 (Hotfixes) | Moderate |
| **IronClaw** | 21 | 50 | No release (v0.27.0 latest) | Good |
| **CoPaw** | ~30 | 49 | v1.1.10-beta.1 | Good |
| **NanoBot** | 33 | 43 | No release | Excellent |
| **ZeroClaw** | 14 | 32 | Upcoming v0.8.0-beta-2 | Moderate |
| **NanoClaw** | 2 | 8 | No release | Good |
| **NullClaw** | N/A | 9 | v2026.5.29 | Excellent |
| **LobsterAI** | 0 | 14 | No release | Excellent |
| **Moltis** | 3 | 2 | No release | Steady |
| **TinyAGI** | 0 | 0 | No activity | N/A |
| **ZeptoClaw** | 0 | 0 | No activity | N/A |
| **PicoClaw** | *Error* | *Error* | *Error* | N/A |

## 3. OpenClaw's Position
*   **Advantages vs Peers:** OpenClaw commands an immense scale of community engagement (826 events in 24h) that dwarfs most peers, second only to CoPaw in raw throughput. Its technical depth in multi-channel routing (Telegram, Feishu, Matrix, WhatsApp) is highly mature, and it is making aggressive moves in state management (transitioning to SQLite) and advanced security (`exec` deny-lists).
*   **Technical Approach Differences:** Unlike CoPaw or Hermes, which are heavily leaning into desktop-app features (Desktop Pets, local TUI dashboards), OpenClaw remains heavily focused on headless/gateway deployments, infrastructure runtimes (Codex), and CLI workflows. 
*   **Community Size Comparison:** OpenClaw has one of the largest and most technical user bases, evidenced by detailed bug reports with system logs. However, it currently suffers from an overloaded maintainer backlog (347 open PRs), causing user friction over long-standing P1 UI and memory leak bugs.

## 4. Shared Technical Focus Areas
Several core requirements are universally emerging across the ecosystem:
*   **Robust Multi-Agent Orchestration:** Projects are actively solving how agents delegate tasks. **OpenClaw** is fixing subagent `cwd` separation and event-loop starvation; **CoPaw** introduced a `spawn_subagent` tool; **Moltis** users are demanding PTY-based control for CLI agents; and **NullClaw** fixed Telegram subagent polling.
*   **Security & Execution Sandboxing:** Tightening agent boundaries is critical. **IronClaw** and **NanoBot** are leading strict security audits (SSRF, path traversal, unauthenticated APIs), while **ZeroClaw** and **OpenClaw** are implementing granular tool execution policies and filesystem deny-lists.
*   **Context & Memory Stability:** Managing long-term memory and context limits is a universal pain point. **NanoBot** users report "short-term memory loss," **Hermes** is hitting strict 2,200 character limits, **NullClaw** fixed global memory blindspots, and **CoPaw** is battling massive Vector DB bloat (ChromaDB inflating to 37GB).
*   **Platform & Dependency Friction:** The transition of local AI tools into enterprise environments is causing friction with corporate proxies, Apple Silicon (`arm64`) architectures, and complex Docker setups (reported in **Moltis**, **IronClaw**, and **Hermes**).

## 5. Differentiation Analysis
*   **Core Frameworks vs. Specialized Wrappers:** **OpenClaw**, **Hermes**, and **IronClaw** act as deep infrastructure frameworks focusing on gateway routing, cryptographic attestation, and complex state management. In contrast, **CoPaw** and **LobsterAI** differentiate by targeting end-users with rich desktop GUIs, coding modes, and embedded "desktop pet" features.
*   **Target Audience:** **IronClaw** leans heavily toward enterprise and Web3/NEAR ecosystems with audited tool execution and crash-safe replays. **Hermes** and **OpenClaw** target power-users and self-hosters heavily invested in Telegram/Discord bots. **Moltis** targets autonomous CLI orchestration.
*   **Technical Architecture:** **IronClaw** and **ZeroClaw** utilize high-performance Rust backends, tackling strict memory safety and CVE dependency blocks. In contrast, Node.js/Python-based projects (like **OpenClaw**, **Hermes**, **NanoBot**) are battling UI race conditions, WebSocket tick starvation, and event-loop blocking.

## 6. Community Momentum & Maturity
*   **Hyper-Growth / Rapid Iteration Tier:** **OpenClaw**, **CoPaw**, **Hermes**, and **IronClaw** show massive momentum but are actively fighting regressions and breaking configurations caused by their rapid release cadences.
*   **Stabilization / High-Maturity Tier:** **NanoBot**, **NullClaw**, and **LobsterAI** show excellent project health. They are merging highly specific, targeted patches (e.g., UI delayed rendering, OS-specific shell fixes) without introducing massive systemic regressions, indicating a maturing codebase.
*   **Architecture / Pre-Release Tier:** **ZeroClaw** is heavily WIP, building massive architectural features (TUI, RPC transport) but struggling to get them across the finish line. 
*   **Dormant Tier:** **ZeptoClaw** and **TinyAGI** show zero activity, indicating either project abandonment or deep architectural hibernation.

## 7. Trend Signals
*   **Supply Chain Security Anxiety:** A growing trend among developers is the distrust of third-party MCP (Model Context Protocol) tools. **NanoClaw** users flagged unvetted Gmail tools, signaling a market opportunity for officially vetted, secure credential-management plugins across all frameworks.
*   **Egress & Credential Hardening:** The era of "YOLO mode" is ending. The progression of feature requests across **IronClaw** (zeroizing HTTP credentials), **OpenClaw** (`exec` deny lists), and **ZeroClaw** (granular sandboxing) indicates that production AI agents require enterprise-grade isolation.
*   **UI / Rendering Bottlenecks:** As LLMs generate massive code blocks and tool outputs (>1MB), standard Markdown renderers are failing (seen in **LobsterAI** and **OpenClaw**). Frameworks must implement delayed rendering, virtual DOMs, or head/tail previewing to prevent chat UIs from freezing.
*   **The Cost of Multi-Turn Context:** Users are increasingly frustrated by token inflation and out-of-memory crashes during complex tasks (seen in **OpenClaw** and **CoPaw**). AI agent developers must urgently address KV cache optimization and efficient context compaction to make multi-agent delegation commercially viable.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest: 2026-05-30

## 1. Today's Overview
The NanoBot project is experiencing a massive surge in activity, demonstrating highly active development and maintenance. In the last 24 hours, the repository saw 33 issues updated (with 30 currently open) and an impressive 43 pull requests updated. A significant portion of today's activity is driven by a coordinated security and stability audit, resulting in the simultaneous opening of numerous bug reports and their corresponding fix PRs. This indicates a strong, proactive effort by the development team to harden the AI agent's core infrastructure, particularly concerning memory management, execution boundaries, and API security. 

## 2. Releases
There have been **no new releases** recorded today. Given the current influx of security and bug-fix PRs, it is highly likely that the maintainers are preparing a consolidated patch release in the near future.

## 3. Project Progress
Today saw 16 merged or closed pull requests, alongside 27 open PRs actively under review. The work heavily focused on infrastructure reliability, Windows compatibility, and user experience.

*   **Windows Execution Fix:** A notable merged PR [#4051](https://github.com/HKUDS/nanobot/pull/4051) fixed a bug where `cmd.exe /c` would silently drop multi-line python commands on Windows, switching the default shell to PowerShell for multi-line execution.
*   **Docker Enhancements:** PR [#4087](https://github.com/HKUDS/nanobot/pull/4087) was merged, refactoring Docker Compose to support environment-based gateway configuration.
*   **Security & Dispatch Hardening (Open):** A large batch of PRs was opened by contributor `hamb1y` to address a comprehensive security and stability audit. Key open PRs include enforcing Dream skill ownership ([#4101](https://github.com/HKUDS/nanobot/pull/4101)), fixing WebSocket outbound drops ([#4094](https://github.com/HKUDS/nanobot/pull/4094)), correcting filesystem read/write boundaries ([#4099](https://github.com/HKUDS/nanobot/pull/4099)), and fixing OpenAI-compatible tool parsing ([#4092](https://github.com/HKUDS/nanobot/pull/4092)).

## 4. Community Hot Topics
The most actively discussed issues by the community center around platform flexibility and context management:

*   **Short-term Memory Loss ([#4044](https://github.com/HKUDS/nanobot/issues/4044) - 4 comments):** Users are reporting that the agent frequently forgets the question it just asked during multi-turn conversations. This highlights ongoing struggles with context window pressure and the agent's internal memory consolidation logic.
*   **WeChat 10-Message Limit ([#2772](https://github.com/HKUDS/nanobot/issues/2772) - 7 comments):** A highly discussed issue regarding hard limits on the number of responses returned in a single context token via the WeChat channel. This signals strong user demand for better message chunking or pagination for tightly constrained messaging platforms.
*   **Document Extraction Overhead ([#4043](https://github.com/HKUDS/nanobot/issues/4043) - 1 comment):** Users are frustrated by the automatic document injection, which limits workflow flexibility when using custom OCR tools.

## 5. Bugs & Stability
Today brought a wave of newly identified bugs, ranked from critical security vulnerabilities to core logic flaws. Fortunately, nearly all of them have corresponding fix PRs already submitted.

*   **Critical: Unauthenticated API Access ([#4078](https://github.com/HKUDS/nanobot/issues/4078)):** The OpenAI-compatible endpoint currently accepts unauthenticated requests. *(Fix pending in PR #4103, #4086)*
*   **Critical: SSRF & Exec Guard Bypasses ([#4074](https://github.com/HKUDS/nanobot/issues/4074), [#4072](https://github.com/HKUDS/nanobot/issues/4072)):** MCP HTTP connections attempt loopback connections before SSRF rejection, and workspace restrictions can be bypassed using relative symlinks. *(Fix pending in PR #4100, #4098)*
*   **High: Session and Memory Collisions ([#4057](https://github.com/HKUDS/nanobot/issues/4057), [#4081](https://github.com/HKUDS/nanobot/issues/4081)):** Distinct session keys collide on disk due to sanitization, and concurrent writes can duplicate history cursors. *(Fix pending in PR #4090)*
*   **Medium: API Empty-Response Retry Loops ([#4079](https://github.com/HKUDS/nanobot/issues/4079)):** Empty API responses trigger retries that duplicate user turns. *(Fix pending in PR #4094)*
*   **Low: Config Fallbacks ([#4067](https://github.com/HKUDS/nanobot/issues/4067)):** Invalid configurations silently fall back to defaults instead of failing safely. *(Fix pending in PR #4095)*

## 6. Feature Requests & Roadmap Signals
*   **Disable Automatic Document Extraction ([#4043](https://github.com/HKUDS/nanobot/issues/4043)):** A request for a config flag to bypass built-in document injection for channels. This empowers advanced users to swap out the default PDF parser for domain-specific alternatives.
*   **Matrix Encryption Verification ([#4042](https://github.com/HKUDS/nanobot/issues/4042)):** A request to handle `m.key.verification.*` to clear "unverified device" warnings in Element X clients. This is essential for ensuring enterprise-ready E2EE compliance for the Matrix channel.
*   **Model Presets for Quick Switching (PR [#3696](https://github.com/HKUDS/nanobot/pull/3696)):** A closed/merged PR introducing named model presets and automatic failover. This suggests the next release will feature highly anticipated multi-model routing capabilities.

## 7. User Feedback Summary
Users are actively pushing NanoBot into complex, multi-platform enterprise deployments, but they are encountering friction with rigid memory management and platform-specific quirks. The dissatisfaction expressed in the memory loss issue ([#4044](https://github.com/HKUDS/nanobot/issues/4044)) shows that context compression and system prompt sizing remain critical pain points for AI assistants. On the positive side, the quick turnaround on the Windows multi-line execution bug shows that the community is successfully stress-testing cross-platform CLI behaviors, and maintainers are highly responsive to merging community contributions. 

## 8. Backlog Watch
*   **Silent API Failures on Arrearage ([#3006](https://github.com/HKUDS/nanobot/issues/3006)):** Open since April 10th, this issue requests a warning when an API key runs out of credits. Currently, the bot simply stops responding without an error. This poor developer experience needs maintainer attention.
*   **Unanswered Matrix Verification Protocol ([#4042](https://github.com/HKUDS/nanobot/issues/4042)):** Labeled as a "good first issue", this feature request is crucial for Matrix adoption but currently lacks a linked PR or core maintainer assignment.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-30

## 1. Today's Overview
Hermes Agent is currently experiencing a massive spike in community activity, driven primarily by the rollout of the v0.15.x release series. The project saw 50 issues and 50 pull requests updated in the last 24 hours, indicating an engaged but heavily taxed QA and development cycle. The maintainers are actively managing the fallout from v0.15.0, pushing out hotfixes to address packaging and deployment regressions. Overall project health is robust, though the volume of P1 bugs related to the latest release suggests that the v0.15 rollout has introduced significant edge-case instabilities.

## 2. Releases
Two new patch releases were published yesterday, aimed at stabilizing the v0.15 milestone:
- **[v2026.5.29: Hermes Agent v0.15.1](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29)**: A same-day hotfix for v0.15.0. It resolved 28 commits across 21 merged PRs. The headline fix addressed an infinite-reload loop in the dashboard affecting users running the app in loopback mode.
- **[v2026.5.29.2: Hermes Agent v0.15.2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.29.2)**: An urgent follow-up patch that fixed a critical packaging bug where `plugin.yaml` manifests were omitted from the Python wheel and source distribution (sdist), causing platform adapters to fail discovery.

## 3. Project Progress
The project saw 12 merged/closed PRs today, reflecting a strong focus on hardening gateway security and fixing command execution vulnerabilities. Key advancements include:
- **Security Hardening:** Multiple security fixes were merged, including sandboxing `file://` URLs against path traversal ([PR #34981](https://github.com/NousResearch/hermes-agent/pull/34981)), SSRF protection in image sending ([PR #34982](https://github.com/NousResearch/hermes-agent/pull/34982)), and replacing dangerous `eval()` statements with `ast.literal_eval` ([PR #34989](https://github.com/NousResearch/hermes-agent/pull/34989)).
- **Tooling & CLI:** Shell metacharacter sanitization was added to the TTS command template ([PR #34983](https://github.com/NousResearch/hermes-agent/pull/34983)).
- **Active Development:** 38 PRs remain open, showing active development in plugin hooks ([PR #27208](https://github.com/NousResearch/hermes-agent/pull/27208)), Mattermost interactive approvals ([PR #29373](https://github.com/NousResearch/hermes-agent/pull/29373), [PR #26537](https://github.com/NousResearch/hermes-agent/pull/26537)), and model observability for sub-agents ([PR #12794](https://github.com/NousResearch/hermes-agent/pull/12794)).

## 4. Community Hot Topics
- **Dashboard Usability Needs Rethinking:** [Issue #18080](https://github.com/NousResearch/hermes-agent/issues/18080) (22 comments, 32 👍) highlights significant user dissatisfaction with the current Dashboard TUI. Users report that the fonts are hard to read and themes only change colors without fixing fundamental layout and contrast issues.
- **Critical Docker Deployment Regression:** [Issue #34071](https://github.com/NousResearch/hermes-agent/issues/34071) (11 comments) details how the v0.15.0 Docker image completely breaks on startup due to missing boot scripts, blocking all containerized deployments.
- **Telegram Topic Routing Demand:** [Issue #10143](https://github.com/NousResearch/hermes-agent/issues/10143) (10 comments) reveals a strong use case for advanced community managers wanting to route single Telegram bots to different agent profiles based on forum topics/threads.
- **Pip Packaging Breakage:** [Issue #34576](https://github.com/NousResearch/hermes-agent/issues/34576) (5 comments) sparked urgent discussion because v0.15.1 prevented platform adapters (Discord, IRC, Teams) from being discovered after a standard `pip install`.

## 5. Bugs & Stability
The v0.15.x release cycle introduced several high-severity bugs, though the community and maintainers are rapidly addressing them:
1. **P1 - Missing Platform Adapters in Pip:** Installed platforms were completely non-functional due to missing manifests in the PyPI package. *(Fixed in v0.15.2 / [Issue #34576](https://github.com/NousResearch/hermes-agent/issues/34576))*.
2. **P1 - Docker Init Crash:** v0.15.0 image exits with code 127 because of missing `stage2-hook.sh` ([Issue #34071](https://github.com/NousResearch/hermes-agent/issues/34071)).
3. **P1 - MCP Process Leaks:** Gateway reloads leak MCP server processes, leading to RAM exhaustion ([Issue #34966](https://github.com/NousResearch/hermes-agent/issues/34966)). 
4. **P1 - Config Migration Wipes Cron Jobs:** Updating destroys scheduled tasks by emptying `jobs.json` during config migration v23 to v24 ([Issue #34600](https://github.com/NousResearch/hermes-agent/issues/34600)).
5. **P1 - Gateway Crashes on Single MCP Failure:** An `asyncio.TaskGroup` bug crashes the whole gateway if just one MCP server fails to initialize ([Issue #34443](https://github.com/NousResearch/hermes-agent/issues/34443)).
6. **P2 - Infinite Echo Loops:** Gateways (specifically ntfy) are getting stuck in infinite response loops when "silence" hallucinations are treated as new inputs ([Issue #34447](https://github.com/NousResearch/hermes-agent/issues/34447), [Issue #34616](https://github.com/NousResearch/hermes-agent/issues/34616)).

## 6. Feature Requests & Roadmap Signals
Based on recent activity, upcoming releases will likely focus on:
- **Memory Upgrades:** Requests for paginated memory to bypass the strict 2,200 character limit are gaining traction ([Issue #34745](https://github.com/NousResearch/hermes-agent/issues/34745)).
- **Smarter Model Fallbacks:** Users want automatic reasoning fallbacks when APIs reject `reasoning_effort` parameters ([Issue #34786](https://github.com/NousResearch/hermes-agent/issues/34786)), building on the sub-agent model override work seen in [PR #12794](https://github.com/NousResearch/hermes-agent/pull/12794).
- **Better Cron Routing:** Expanding cron delivery targets to include specific Matrix rooms/threads ([PR #19900](https://github.com/NousResearch/hermes-agent/pull/19900)).
- **Stable Update Tracking:** Users are frustrated that `hermes update` pulls bleeding-edge `main` commits instead of stable tags ([Issue #34514](https://github.com/NousResearch/hermes-agent/issues/34514)), signaling a need for a more robust release channel strategy.

## 7. User Feedback Summary
Users are enthusiastic about the rapid pace of development but are actively expressing frustration with deployment stability and UI polish. The transition to v0.15 has been painful for Docker and Pip users due to missing files and breaking config migrations. From a UX perspective, the dashboard is failing accessibility standards due to poor font choices and low contrast. On the positive side, advanced users are heavily utilizing multi-agent setups via tools like `delegate_task` and complex gateway setups, praising the platform's extensibility while requesting better model visibility and cost tracking for these specific advanced workflows. 

## 8. Backlog Watch
- **[PR #13888](https://github.com/NousResearch/hermes-agent/pull/13888)**: A fix allowing TTS tools to properly read `base_url` and `api_key` from `config.yaml` instead of relying strictly on environment variables. Critical for self-hosted setups, but has been open since April 22.
- **[Issue #29849](https://github.com/NousResearch/hermes-agent/issues/29849)**: A P2 bug where `no_agent=True` cronjobs execute locally instead of on configured remote SSH backends. Open since May 21, awaiting maintainer prioritization.
- **[Issue #34444](https://github.com/NousResearch/hermes-agent/issues/34444)**: A noted performance bottleneck where `SessionDB._lock` serializes all concurrent database writes across all active sessions, limiting multi-session scalability.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-30

## 1. Today's Overview
Project activity for NanoClaw on 2026-05-30 indicates a highly active and iterative development cycle, particularly concentrated on platform integrations and routing logic. The community and contributors generated 8 active Pull Requests (3 closed/merged, 5 remaining open) alongside 2 newly opened Issues. The development focus is currently split between expanding core capabilities—such as observability, chat context management, and environmental mapping—and hardening existing platform adapters like Telegram. No new software versions were released today, signaling an ongoing accumulation of features and fixes before the next tagged milestone.

## 2. Releases
No new releases were recorded today.

## 3. Project Progress
Today's merged and closed PRs demonstrate solid advancements in observability and platform reliability, alongside some active community feature attempts:
*   **LangFuse Observability Added ([PR #2456](https://github.com/nanocoai/nanoclaw/pull/2456)):** A significant contribution introducing LangFuse tracing to the Claude provider. This is a major win for platform debugging, allowing operators to track latency, API errors, tool timing, and token counts.
*   **Telegram Dependency Conflict Resolved ([PR #2642](https://github.com/nanocoai/nanoclaw/pull/2642)):** Addressed a peerDependency mismatch between `@chat-adapter/telegram` and the core `chat` package, ensuring new Telegram bots can be added without installation failures.
*   **Gmail MCP Tool Proposal Closed ([PR #1961](https://github.com/nanocoai/nanoclaw/pull/1961)):** A long-standing PR attempting to add a OneCLI-native Gmail MCP tool was closed. 
*   **iOS Reliability Attempt Closed ([PR #2639](https://github.com/nanocoai/nanoclaw/pull/2639)):** A community submission targeting iOS reliability was closed, likely pending further refinement or failing to meet project guidelines.

## 4. Community Hot Topics
The most pressing community discussions are centered around AI safety and agent context awareness:
*   **Supply Chain Risks in MCP Tools ([Issue #2641](https://github.com/nanocoai/nanoclaw/issues/2641)):** User `NoamGit` raised a critical security warning regarding third-party Gmail MCP tools (`@gongrzhe/server-gmail-autoauth-mcp`). This highlights a growing underlying need within the NanoClaw community for officially vetted, secure credential management (which ties into the recent closure of PR #1961).
*   **Group Chat Context Awareness ([PR #2645](https://github.com/nanocoai/nanoclaw/pull/2645)):** An open PR proposing a per-agent-group context window. This directly addresses a highly requested need for AI agents to maintain conversational awareness in multi-user environments without losing context.

## 5. Bugs & Stability
Two distinct stability issues were reported today, with one posing a notable operational risk:
*   **Critical: SQLite Database Race Condition ([Issue #2640](https://github.com/nanocoai/nanoclaw/issues/2640)):** A conflict between host read-polling and container write-transactions on `outbound.db` is generating `SQLITE_READONLY_ROLLBACK` errors. Because polling occurs every 1000ms (`ACTIVE_POLL_MS`), this is a high-frequency error that could degrade performance or lose delivery state.
*   **Medium: Telegram Bot Reply Context ([PR #2644](https://github.com/nanocoai/nanoclaw/pull/2644)) & Mention Routing ([PR #2643](https://github.com/nanocoai/nanoclaw/pull/2643)):** The bot currently fails to recognize direct replies or @mentions in certain routing configurations, effectively ignoring users. Fix PRs have been actively submitted by the community and are currently open.

## 6. Feature Requests & Roadmap Signals
Recent open PRs provide clear signals about the project's short-term trajectory and feature priorities:
*   **Advanced Agent Routing:** Work on `evaluateEngage` pattern matching and context windows (PRs [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) and [#2645](https://github.com/nanocoai/nanoclaw/pull/2645)) suggests the next version will heavily feature improved multi-agent orchestration and group chat capabilities.
*   **Geo/Environment Integrations:** The introduction of a Street Wind & Shadow Map ([PR #2646](https://github.com/nanocoai/nanoclaw/pull/2646)) indicates that contributors are expanding NanoClaw's utility into physical-world data visualization and geographical reasoning.

## 7. User Feedback Summary
The current user feedback is heavily focused on edge cases in multi-platform deployments and trust/security:
*   **Pain Points:** Users are experiencing friction with dependency resolution on platform adapters (e.g., Telegram) and are expressing severe anxiety regarding the security of external MCP dependencies. 
*   **Use Cases:** Heavy usage of NanoClaw in group-chat environments (via Telegram) is evident, with users demanding smarter context tracking and precise @mention handling.
*   **Satisfaction:** Overall community engagement appears positive and highly technical. Users are not just reporting bugs but actively submitting complex architectural fixes (like the SQLite polling and routing logic PRs).

## 8. Backlog Watch
*   **Supply Chain Security Guidance:** [Issue #2641](https://github.com/nanocoai/nanoclaw/issues/2641) needs an official maintainer response regarding the unvetted Gmail MCP tool. Given the closure of the official Gmail PR ([PR #1961](https://github.com/nanocoai/nanoclaw/pull/1961)), users are currently left without a secure, native alternative.
*   **Database Architecture:** The `SQLITE_READONLY_ROLLBACK` bug ([Issue #2640](https://github.com/nanocoai/nanoclaw/issues/2640)) requires core maintainer intervention to decide whether the fix lies in changing the journal mode, adjusting the host polling frequency, or refactoring the `delivery.ts` read/write lock mechanism.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

Here is the project digest for NullClaw on 2026-05-30.

### 1. Today's Overview
NullClaw is demonstrating highly active and healthy development momentum, currently focused on hardening its multi-channel integrations and core memory capabilities. In the past 24 hours, the project saw a significant burst of merging activity, with 9 pull requests merged and a new release published. The maintainers and contributors are actively resolving critical bugs in the Telegram channel and memory tools, alongside implementing new gateway features. Overall project activity is robust, showing excellent responsiveness to community-reported issues.

### 2. Releases
*   **v2026.5.29** ([PR #938](https://github.com/nullclaw/nullclaw/pull/938))
    *   *What's Changed:* 
        *   Added a native ACP stdio adapter ([PR #896](https://github.com/nullclaw/nullclaw/pull/896)).
        *   Moved GitHub workflows to `nullbuilder` ([PR #889](https://github.com/nullclaw/nullclaw/pull/889)).
        *   General version bump and patch updates ([PR #888](https://github.com/nullclaw/nullclaw/pull/888)).
    *   *Migration Notes:* No immediate breaking changes noted in the release PR, but infrastructure updates require contributors to note the shift to `nullbuilder` for CI/CD workflows.

### 3. Project Progress
A total of 9 PRs were merged today, pushing forward several key areas:
*   **Channel Fixes:** Telegram routing is vastly improved, merging fixes for inbound context replies ([PR #930](https://github.com/nullclaw/nullclaw/pull/930)) and polling delivery for subagent results ([PR #928](https://github.com/nullclaw/nullclaw/pull/928)). LINE messaging routing is also upgraded with a reply token cache ([PR #934](https://github.com/nullclaw/nullclaw/pull/934)).
*   **Memory & Tooling:** Fixed a critical flaw where the agent failed to query global memories ([PR #929](https://github.com/nullclaw/nullclaw/pull/929)).
*   **Infrastructure & Testing:** Upgraded Nix flake lockfiles for Zig 0.16.0 support ([PR #935](https://github.com/nullclaw/nullclaw/pull/935)), added new gateway authentication methods ([PR #933](https://github.com/nullclaw/nullclaw/pull/933)), patched macOS path security blocks ([PR #925](https://github.com/nullclaw/nullclaw/pull/925)), and improved test determinism for web search and compatible APIs ([PR #926](https://github.com/nullclaw/nullclaw/pull/926), [PR #927](https://github.com/nullclaw/nullclaw/pull/927)).

### 4. Community Hot Topics
Based on recently updated items, community focus is heavily centered on channel reliability and context handling.
*   **Subagent delivery failures ([Issue #918](https://github.com/nullclaw/nullclaw/issues/918)):** Users relying on the `spawn` tool within Telegram saw silent failures. This generated needed attention and was resolved in [PR #928](https://github.com/nullclaw/nullclaw/pull/928). The underlying need is reliable multi-agent orchestration over chat interfaces.
*   **Message context continuity in Telegram ([Issue #916](https://github.com/nullclaw/nullclaw/issues/916)):** The community heavily utilizes the bot in group chats. The failure to capture `reply_to_message` broke conversational continuity. Addressed in [PR #930](https://github.com/nullclaw/nullclaw/pull/930).
*   **Custom OpenAI provider compatibility ([PR #940](https://github.com/nullclaw/nullclaw/pull/940)):** Currently open and active, this PR highlights a user need to seamlessly integrate custom/local LLMs without being locked into hardcoded defaults.

### 5. Bugs & Stability
Several critical bugs were identified and patched in this cycle:
1.  **High: Spawn tool drops results ([Issue #918](https://github.com/nullclaw/nullclaw/issues/918))** - Subagents completed tasks but results were lost due to `bus=null`. *Fix merged: [PR #928](https://github.com/nullclaw/nullclaw/pull/928).*
2.  **High: Global memory blindspot ([Issue #917](https://github.com/nullclaw/nullclaw/issues/917))** - `memory_list` ignored global entries, severely limiting cross-session memory capabilities. *Fix merged: [PR #929](https://github.com/nullclaw/nullclaw/pull/929).*
3.  **Medium: Dead config flag ([PR #939](https://github.com/nullclaw/nullclaw/pull/939))** - `compact_context` was parsed but never acted upon, causing constant, unintended context compaction. *Fix is currently open.*
4.  **Low: macOS workspace blocklist false positive ([Issue noted in PR #925](https://github.com/nullclaw/nullclaw/pull/925))** - Path security was blocking standard macOS `/private/var/folders/...` workspaces. *Fix merged.*

### 6. Feature Requests & Roadmap Signals
Recent PRs and issues signal clear directions for the next iteration:
*   **Advanced Gateway Capabilities:** The addition of `POST /media/transcribe` and secure paired token hashes ([PR #933](https://github.com/nullclaw/nullclaw/pull/933)) indicates a push toward robust, secure mobile/web gateway integrations.
*   **Enhanced LLM Provider Support:** The open PR to query `base_url` for custom providers ([PR #940](https://github.com/nullclaw/nullclaw/pull/940)) suggests the next version will likely feature a dynamic model catalog fetched from user-hosted endpoints, breaking away from hardcoded Claude models.
*   **Smarter Context Management:** The current activity around the `compact_context` flag ([PR #939](https://github.com/nullclaw/nullclaw/pull/939)) shows the team is actively optimizing token usage and long-term memory handling.

### 7. User Feedback Summary
Users are deploying NullClaw extensively as a personal AI assistant on messaging platforms (Telegram, LINE). 
*   **Pain Points:** Frustration has stemmed from the bot "forgetting" replies in group chats or failing to recall global memories across different chat threads. Users also experience friction when trying to use non-standard LLM providers due to rigid model menus.
*   **Satisfaction:** The rapid turnaround time—where complex but well-documented issues (like the subagent spawning bug) are opened and resolved within days—shows high user satisfaction and trust in the maintenance team.

### 8. Backlog Watch
Maintainers should review the following high-value open items:
*   **[PR #940](https://github.com/nullclaw/nullclaw/pull/940):** Needs review. Essential for users utilizing OpenAI-compatible local APIs (e.g., Ollama, vLLM).
*   **[PR #939](https://github.com/nullclaw/nullclaw/pull/939):** Needs review. Fixes a critical configuration oversight that causes unintended context compaction, which secretly degrades agent performance over long sessions.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-30

## 1. Today's Overview
IronClaw is experiencing highly active and heavily concerted development, characterized by a massive volume of pull requests (50 updated, 24 merged/closed) and a focused batch of issues (21 updated). The development cycle is currently dominated by core contributors `serrrfirat`, `henrypark133`, and `zmanian`, who are driving parallel workstreams across the "Reborn" architecture, cryptographic attestation/signing, and audited tool execution. There is a clear, systematic push to mature the runtime's security, credential injection, and async capabilities, alongside notable third-party interest in LLM provider optimizations and downstream packaging. 

## 2. Releases
No new releases were published today. The latest GitHub tag is `v0.27.0` (Apr 29), while the `crates.io` registry is pinned at `0.24.0` due to downstream CVE constraints, meaning a bulk version publish will eventually be required once dependencies stabilize.

## 3. Project Progress
Merged PRs today heavily targeted security hardening, auth architecture, and CI stability:
- **Reborn Durable Product Auth & Credentials:** PR [#4234](https://github.com/nearai/ironclaw/pull/4234) refactored filesystem-backed product-auth adapters for crash-safe replay, while PR [#4232](https://github.com/nearai/ironclaw/pull/4232) hardened auth blocked exits to prevent them from accidentally falling into `RecoveryRequired` states. 
- **Credential Brokering & Staging:** PR [#4231](https://github.com/nearai/ironclaw/pull/4231) wired GSuite credential staging for host HTTP egress, and PR [#4223](https://github.com/nearai/ironclaw/pull/4223) ported the NEAR AI MCP to Reborn extensions, routing through host-mediated egress.
- **CI & Dependency Fixes:** PR [#4243](https://github.com/nearai/ironclaw/pull/4243) swiftly fixed a trait drift compilation failure in `RecordingFlowManager`, and PR [#4242](https://github.com/nearai/ironclaw/pull/4242) bumped the `tar` dependency to patch a PAX security vulnerability.
- **Design Docs:** PR [#4240](https://github.com/nearai/ironclaw/pull/4240) established the design spec for communication delivery resolution.

## 4. Community Hot Topics
- **Crates.io Publishing Blockade ([#3259](https://github.com/nearai/ironclaw/issues/3259)):** With 11 comments, this remains a highly active issue. Downstream consumers are stuck on `v0.24.0` due to Wasm 28.x CVEs. The community is actively discussing how to unblock the 0.25.0–0.27.0 publish without exposing vulnerable downstream dependencies.
- **Reborn Binary E2E Testing ([#3702](https://github.com/nearai/ironclaw/issues/3702)):** With 4 comments, contributors are fleshing out a robust plan to categorize 88 existing Rust integration tests to ensure parity with the new Reborn architecture.
- **Security of Path Credentials ([#3917](https://github.com/nearai/ironclaw/issues/3917)):** A focused 5-comment debate on whether `RuntimeCredentialTarget::PathPlaceholder` should be hardened or completely killed before shipping, highlighting the team's strict stance on eliminating secret leakage surfaces.

## 5. Bugs & Stability
- **Critical Regression - HTTP Errors Aborting Agent Runs ([#4022](https://github.com/nearai/ironclaw/issues/4022)):** PR [#4014](https://github.com/nearai/ironclaw/pull/4014) introduced a severe regression where remote HTTP server errors unexpectedly abort the entire agent run. *Fix Status: Open (PR [#4022](https://github.com/nearai/ironclaw/pull/4022) is up, pending merge).*
- **Nightly E2E Failure ([#4108](https://github.com/nearai/ironclaw/issues/4108)):** The scheduled CI run failed on commit `749f584`. *Fix Status: Open.*
- **Product Workflow Compilation Break ([#4237](https://github.com/nearai/ironclaw/issues/4237)):** PR [#4234](https://github.com/nearai/ironclaw/pull/4234) left broken integration tests in `ironclaw_product_workflow`. *Fix Status: Fixed quickly via PR [#4243](https://github.com/nearai/ironclaw/pull/4243).*

## 6. Feature Requests & Roadmap Signals
- **Advanced Cognitive Caching ([#4241](https://github.com/nearai/ironclaw/issues/4241)):** A user requested live workspace prompt inputs to stop invalidating KV Cache across conversation turns. This signals a strong need for LLM inference cost-reduction and optimized long-term memory handling.
- **Zeroizing HTTP Credential Material ([#4222](https://github.com/nearai/ironclaw/issues/4222)):** Feature request to secure memory by zeroing injected plaintext credentials in network carriers immediately after use.
- **Async HTTP Egress ([#4206](https://github.com/nearai/ironclaw/issues/4206)):** A roadmap item to convert the synchronous HTTP egress stack to async end-to-end, clearing the way for higher concurrency.
- **Tool Execution Audit Funnel:** Open PRs ([#4023](https://github.com/nearai/ironclaw/pull/4023), [#4024](https://github.com/nearai/ironclaw/pull/4024)) reveal a major near-term milestone: forcing *all* tool executions (chat, scheduler, routines) through an audited funnel to guarantee `ActionRecord` generation.

## 7. User Feedback Summary
Users and downstream integrators are showing mild frustration regarding the lack of recent `crates.io` releases, as they are forced to maintain custom forks or rely on GitHub SHAs to bypass the Wasm CVE pin. On the positive side, advanced users are deeply engaging with the system's LLM provider mechanics, specifically providing highly technical feedback on how agent framework metadata (like prompt inputs) interferes with provider-side KV caching. The overall sentiment leans toward enthusiasm for the hardened security postures being adopted, even if it temporarily slows down release velocity.

## 8. Backlog Watch
- **WebChat v2 SSO ([#4204](https://github.com/nearai/ironclaw/issues/4204)):** Needs implementation for GitHub and NEAR providers (Google was completed in PR [#4182](https://github.com/nearai/ironclaw/pull/4182)). 
- **Slack ProductAdapter MVP ([#3857](https://github.com/nearai/ironclaw/issues/3857)):** A highly requested feature to route Slack DMs and app mentions through Reborn services, currently awaiting PR merges to proceed.
- **Host Runtime Refactor ([#4209](https://github.com/nearai/ironclaw/issues/4209)):** `ironclaw_host_runtime/src/lib.rs` has ballooned to 1828 lines, well past the project's self-imposed 1500-line threshold, explicitly blocking further auth/egress work until modularized.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the project digest for LobsterAI based on the provided data.

# LobsterAI Project Digest: 2026-05-30

## 1. Today's Overview
LobsterAI is currently in a highly active development phase, demonstrating strong project health with a robust merge velocity. Over the past 24 hours, the project saw 14 updated pull requests, with 9 successfully merged or closed and zero new issues opened. Maintainers are heavily focused on optimizing rendering performance for large outputs, stabilizing the "cowork" multi-agent subsystem, and refining the OpenClaw gateway. This sustained merging of performance and bugfix PRs without a corresponding influx of new issues indicates a mature stabilization period leading to a potential future release.

## 2. Releases
No new releases were recorded in the past 24 hours. 

## 3. Project Progress
Significant advancements were made today, particularly in UI performance, subagent management, and desktop app stability. 
*   **Rendering & UI Optimizations:** Addressed performance bottlenecks when agents execute tools generating massive outputs (>1MB). Large Markdown payloads are now subjected to delayed rendering, displaying a lightweight head/tail preview with an expand button to prevent UI blocking ([PR #2077](https://github.com/netease-youdao/LobsterAI/pull/2077), [PR #2075](https://github.com/netease-youdao/LobsterAI/pull/2075)). Artifact file preview toolbars were also refined for better usability ([PR #2076](https://github.com/netease-youdao/LobsterAI/pull/2076)).
*   **Cowork & Subagents:** Added the ability to safely delete subagent sessions, ensuring proper cleanup of the runtime/store and returning the UI to the parent session ([PR #2074](https://github.com/netease-youdao/LobsterAI/pull/2074)). 
*   **Gateway & Startup:** The OpenClaw gateway startup logic was optimized to eliminate redundant plugin registrations, resolve dev-mode path errors, and pre-warm caches ([PR #2072](https://github.com/netease-youdao/LobsterAI/pull/2072)). 
*   **Error Handling:** Implemented clear error toast messages for local missing/inaccessible files in artifacts, improving cross-platform path handling ([PR #2073](https://github.com/netease-youdao/LobsterAI/pull/2073)).
*   **Platform Maintenance:** Replaced a deprecated VBScript launcher with hidden PowerShell for app updates ([PR #2057](https://github.com/netease-youdao/LobsterAI/pull/2057)), and scoped IM reply assembly to prevent thinking block leaks ([PR #2063](https://github.com/netease-youdao/LobsterAI/pull/2063)).

## 4. Community Hot Topics
While today's fresh PR updates were mostly quiet on the comment front, the most notable community-driven activity centers around a cluster of PRs opened by contributor `MaoQianTu` back in April. 
*   **Data Loss Prevention (PRs [#1473](https://github.com/netease-youdao/LobsterAI/pull/1473), [#1474](https://github.com/netease-youdao/LobsterAI/pull/1474), [#1475](https://github.com/netease-youdao/LobsterAI/pull/1475), [#1476](https://github.com/netease-youdao/LobsterAI/pull/1476), [#1477](https://github.com/netease-youdao/LobsterAI/pull/1477)):** These PRs systematically address UX pain points where user input (drafts, configurations, agent prompts) is silently lost when closing modals or switching views. They introduce `isDirty` checks and confirmation dialogs.
*   **Underlying Needs:** The focus on these PRs highlights a strong community desire for robust state preservation and better defensive UX design in the renderer components.

## 5. Bugs & Stability
Today's closed PRs addressed several critical stability and regression bugs:
1.  **High Severity - UI Freezing:** Large tool outputs (>20KB) previously blocked the Markdown rendering pipeline and caused WebSocket tick starvation, leading to premature disconnections. *Fixed in [PR #2077](https://github.com/netease-youdao/LobsterAI/pull/2077) (delayed rendering/watchdog fix).*
2.  **Medium Severity - Subagent State Management:** Deleting a subagent previously lacked a proper IPC/store cleanup path, potentially leaving orphaned data. *Fixed in [PR #2074](https://github.com/netease-youdao/LobsterAI/pull/2074).*
3.  **Medium Severity - File Access:** Broken local links or moved files in artifacts previously failed silently. *Fixed in [PR #2073](https://github.com/netease-youdao/LobsterAI/pull/2073).*
4.  **Low Severity - RPC Timeouts:** `sessions.list` RPC timeouts during output storms were documented as known behavior, with existing backoff mechanisms confirmed as sufficient ([PR #2077](https://github.com/netease-youdao/LobsterAI/pull/2077)).

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent Routing Metadata:** [PR #2078](https://github.com/netease-youdao/LobsterAI/pull/2078) (merged) introduced routing metadata for selected skills. This signals an upcoming shift toward more modular, metadata-driven agent skill routing rather than inlining heavy prompts.
*   **Robust UX State Preservation:** The pending PRs by `MaoQianTu` strongly signal a required roadmap initiative to harden the frontend against data loss. Merging these PRs should be a priority for the next minor version release.

## 7. User Feedback Summary
Analysis of the recent PRs indicates that power users are pushing the limits of tool-execution outputs (stdout > 1MB), causing severe performance degradation. The maintainers have successfully responded to this with delayed rendering techniques. Additionally, desktop users (specifically on Windows) were experiencing silent update mechanism failures due to deprecated scripting infrastructure, which has now been modernized.

## 8. Backlog Watch
The following community PRs from early April 2026 are still open and marked as `[stale]`. They address critical user retention issues (data loss) and require a maintainer's code review to proceed:
*   [PR #1473](https://github.com/netease-youdao/LobsterAI/pull/1473) - Unsaved confirmation for Agent creation modal.
*   [PR #1474](https://github.com/netease-youdao/LobsterAI/pull/1474) - Unsaved confirmation for Agent settings panel.
*   [PR #1475](https://github.com/netease-youdao/LobsterAI/pull/1475) - Unsaved confirmation for MCP server configuration.
*   [PR #1476](https://github.com/netease-youdao/LobsterAI/pull/1476) - Immediate persistence of input box drafts on view switch.
*   [PR #1477](https://github.com/netease-youdao/LobsterAI/pull/1477) - Overwrite confirmation when re-editing historical messages.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-05-30

## 1. Today's Overview
The Moltis project is currently maintaining a steady baseline of daily development activity, with three open issues, one closed bug report, and one merged pull request recorded over the past 24 hours. Although there have been no new software releases recently, the development focus is clearly directed toward improving platform stability and broadening hardware compatibility. The maintainer team is highly responsive to community bug reports, as evidenced by the rapid triage and resolution of a UI logic flaw regarding skill management. Currently, developer attention seems split between routine dependency maintenance and addressing edge-case environments, such as corporate proxies and ARM64 architecture limitations. 

## 2. Releases
No new releases were published today. The project remains on its current stable version without any immediate breaking changes or migration requirements.

## 3. Project Progress
Functional progress was made today in the area of skill management and system dependencies:
*   **Merged PR:** [PR #1084 fix(skills): track bundled skill disables individually](https://github.com/moltis-org/moltis/pull/1084). Authored by `penso`, this PR successfully resolves a logic flaw where users were unable to disable individual bundled skills without disabling the entire category. This fix includes new regression tests, representing a concrete improvement to the assistant's configuration capabilities.
*   **Dependency Updates:** [PR #1087 chore(deps): bump tar from 0.4.45 to 0.4.46](https://github.com/moltis-org/moltis/pull/1087). A standard automated dependency bump initiated by Dependabot for the Rust `tar` crate, currently awaiting review and merge.

## 4. Community Hot Topics
The most actively discussed issue in the repository is **[Issue #235 PTY-based interactive Claude Code CLI control for autonomous multi-agent orchestration](https://github.com/moltis-org/moltis/issues/235)** (6 comments, 1 upvote). Originally opened in February, this issue highlights a significant architectural desire from the advanced user base. Because Moltis executes Claude Code as a standard subprocess (where `isatty() == false`), the CLI automatically drops its interactive mode. The underlying need here is robust multi-agent orchestration; users want the Moltis framework to be able to spawn, control, and seamlessly interact with CLI agents mid-task without losing rich terminal interactivity. 

## 5. Bugs & Stability
Today brought three distinct bug reports, highlighting some platform-specific and architectural growing pains. 

1.  **Medium Severity:** [Issue #1083 [bug]: Skills enabled/disabled per-category](https://github.com/moltis-org/moltis/issues/1083). Reported by `bsarkisov`, users could not toggle individual skills within a broader category. 
    *   *Status:* **Fixed and Closed.** The fix was immediately implemented in [PR #1084](https://github.com/moltis-org/moltis/pull/1084) and merged.
2.  **Low/Medium Severity:** [Issue #1085 Docker sandbox fails on arm64](https://github.com/moltis-org/moltis/issues/1085). Reported by `karlmdavis`, Moltis hardcodes x86-specific `tmpfs` mounts (`/sys/class/dmi`). This crashes the Docker sandbox on Apple Silicon (arm64) because the directories do not exist in that architecture's sysfs.
    *   *Status:* Open, awaiting fix.
3.  **Low Severity (Environment Specific):** [Issue #1086 Apple Containers backend: sandbox image build fails](https://github.com/moltis-org/moltis/issues/1086). Also reported by `karlmdavis`, the `apple-container` backend fails to pre-build sandbox images due to DNS resolution failing inside the builder VM when operating behind a corporate HTTPS proxy (like Zscaler).
    *   *Status:* Open, awaiting fix.

## 6. Feature Requests & Roadmap Signals
*   **Multi-Agent CLI Orchestration:** [Issue #235](https://github.com/moltis-org/moltis/issues/235) strongly signals that the community wants Moltis to act as an autonomous orchestrator for CLI-based AI agents. Implementing a PTY-based control mechanism would be a major architectural upgrade. Given its continued activity, this is a strong candidate for a future milestone.
*   **Apple Silicon / Sandbox Hardening:** The consecutive reports by the same user regarding Docker on arm64 ([Issue #1085](https://github.com/moltis-org/moltis/issues/1085)) and Apple Containers ([Issue #1086](https://github.com/moltis-org/moltis/issues/1086)) indicate a clear need for Moltis to dynamically detect architectures for sandbox mounts and provide proxy/DNS configuration passthroughs for its container backends. 

## 7. User Feedback Summary
Users operating Moltis in heterogeneous environments (specifically macOS on Apple Silicon and corporate networks) are experiencing friction with sandbox initialization. However, the standard user experience for core software features remains solid, and the rapid turnaround time on the UI/logic bug ([Issue #1083](https://github.com/moltis-org/moltis/issues/1083)) demonstrates that the core team is attentive to daily usability complaints. There is a highly satisfied subset of power users looking to push Moltis into complex, autonomous multi-agent workflows, though they are currently bottlenecked by standard subprocess limitations.

## 8. Backlog Watch
*   **[Issue #235: PTY-based interactive Claude Code CLI control](https://github.com/moltis-org/moltis/issues/235)** is approaching 3 months open (created 2026-02-25). Given that it requires fundamental changes to how Moltis handles child processes (moving from `stdio: pipe` to PTY), it requires significant maintainer bandwidth. This should be prioritized for a roadmap update to let the community know if it is aligned with the project's long-term vision.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-05-30

## 1. Today's Overview
CoPaw is currently experiencing a very high-velocity development phase, evidenced by 79 total issue and PR updates in the last 24 hours. The recent launch of version v1.1.9 and the immediate rollout of v1.1.10-beta.1 indicate aggressive iteration, likely aimed at stabilizing the desktop experience and refining multi-agent capabilities. The community is highly engaged, with a healthy ratio of 18 merged/closed PRs to 16 open ones. However, there are underlying stability concerns in the current v1.1.9 release, particularly regarding scheduled tasks (crons), memory leaks, and desktop UI glitches. Overall, the project health is strong but actively battling regressions typical of fast-moving open-source AI assistants.

## 2. Releases
**New Release:** [v1.1.10-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.10-beta.1)
*   **Changes:** This beta release focuses on repository maintenance and CI/CD cleanup. It refines the README news section, bumps the version from v1.1.9, and drops the redundant `unit-tests.yml` workflow.
*   **Migration Notes:** No immediate breaking changes in this specific release tag, but it serves as a precursor to the upcoming AgentScope 2.0 migration.

## 3. Project Progress
The team and community merged 18 PRs today, making significant strides in core agent features, plugin infrastructure, and desktop stability:
*   **Multi-Agent Collaboration:** A major new feature was introduced in [PR #4806](https://github.com/agentscope-ai/QwenPaw/pull/4806) (closed/merged), adding a `spawn_subagent` tool. This allows agents to delegate ephemeral sub-tasks within their own workspace, complementing the existing cross-workspace `chat_with_agent`.
*   **Plugin Ecosystem:** [PR #4794](https://github.com/agentscope-ai/QwenPaw/pull/4794) expanded the plugin API with uninstall hooks and exposed the skill provider API. Additionally, [PR #4804](https://github.com/agentscope-ai/QwenPaw/pull/4804) introduced a **Prompt Section Registry**, allowing plugins to safely inject custom instructions into the system prompt without monkey-patching core code.
*   **Desktop & Coding Mode Fixes:** [PR #4779](https://github.com/agentscope-ai/QwenPaw/pull/4779) fixed a critical desktop issue by bundling the `qwenpaw` CLI executable, which previously caused cron tasks to fail on Windows. [PR #4696](https://github.com/agentscope-ai/QwenPaw/pull/4696) hid annoying Windows git console windows, and [PR #4805](https://github.com/agentscope-ai/QwenPaw/pull/4805) fixed editor tabs not clearing when switching projects in Coding mode.
*   **Channel Integrations:** Major refactoring was done in the Feishu channel ([PR #4742](https://github.com/agentscope-ai/QwenPaw/pull/4742)), and OpenRouter attribution headers were added to improve QwenPaw's ranking visibility ([PR #4809](https://github.com/agentscope-ai/QwenPaw/pull/4809)).

## 4. Community Hot Topics
*   **Agent Teams & Multi-Agent Evolution:** [Issue #3224](https://github.com/agentscope-ai/QwenPaw/issues/3224) (6 comments, Open) proposes "CoPaw Agent Teams"—a natural-language-driven, self-evolving multi-agent collaboration system. Users are hitting the limits of manual workspace configuration and are eager for automated team orchestration. This aligns closely with today's merged `spawn_subagent` PR.
*   **Session Sharing in Crons:** [Issue #4653](https://github.com/agentscope-ai/QwenPaw/issues/4653) (7 comments, Closed) highlighted a major architectural flaw where scheduled tasks (cron) shared sessions with user messages, causing the cron to abort if the user chatted during execution.
*   **UI/UX Polish:** [Issue #4789](https://github.com/agentscope-ai/QwenPaw/issues/4789) (4 comments, 1 👍) requested granular chat history rollback (similar to Trae), and [Issue #4796](https://github.com/agentscope-ai/QwenPaw/issues/4796) (5 comments) requested better `/skill` auto-complete in the chat input.

## 5. Bugs & Stability
Several high-priority bugs were reported today, mostly concentrated on the v1.1.9 Desktop release:
*   **Critical: Vector DB Memory Bloat:** [Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795) reports the ChromaDB index (`file_store`) inflating to 37GB after 3 months of normal use, causing `memory_search` to crash every 30 minutes. *No fix PR is open yet.*
*   **High: Desktop Pet & Cron Failures:** [Issue #4783](https://github.com/agentscope-ai/QwenPaw/issues/4783) noted the desktop pet failing to load due to missing PySide6 dependencies (*Fix merged in [PR #4801](https://github.com/agentscope-ai/QwenPaw/pull/4801)*). [Issue #4773](https://github.com/agentscope-ai/QwenPaw/issues/4773) highlighted Windows desktop cron tasks failing to find the CLI path (*Fix merged in [PR #4779](https://github.com/agentscope-ai/QwenPaw/pull/4779)*).
*   **High: Ghost Cron Jobs & Empty Traces:** [Issue #4649](https://github.com/agentscope-ai/QwenPaw/issues/4649) reported orphaned cron jobs executing indefinitely. [Issue #4818](https://github.com/agentscope-ai/QwenPaw/issues/4818) reported cron agents showing empty execution traces. (*Fix submitted in [PR #4822](https://github.com/agentscope-ai/QwenPaw/pull/4822)*).
*   **Medium: Streaming Performance:** [Issue #4792](https://github.com/agentscope-ai/QwenPaw/issues/4792) reported severe OS-level lag (mouse freezing) during long streaming outputs on the web console.
*   **Medium: CLI Tool Hangs:** [Issue #4712](https://github.com/agentscope-ai/QwenPaw/issues/4712) noted that local CLI tools with WebSocket dependencies (like Feishu CLI) fail when run inside QwenPaw's subprocess.

## 6. Feature Requests & Roadmap Signals
*   **AgentScope 2.0 Migration:** [Issue #4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) (2 👍) is a breaking change proposal to migrate the backend from AgentScope 1.x to 2.0. This is the definitive roadmap signal for the next major version.
*   **Enhanced Coding Mode:** [Issue #4759](https://github.com/agentscope-ai/QwenPaw/issues/4759) requests a VSCode-compatible editor experience and direct folder importing (without forcing copies).
*   **Plugin-driven Channels:** [PR #4693](https://github.com/agentscope-ai/QwenPaw/pull/4693) (Open) introduces schema-driven custom channel registration. If merged, this will allow the community to build and distribute UI-integrated integrations for almost any chat platform without touching the core codebase.

## 7. User Feedback Summary
Users are enthusiastic about CoPaw's transition from a simple chat interface to a multi-agent, skill-driven desktop assistant. The coding mode and desktop pet features are seeing high adoption. 
However, there is noticeable frustration regarding **state persistence and session management**. Users dislike that switching UI tabs causes history to disappear ([Issue #4713](https://github.com/agentscope-ai/QwenPaw/issues/4713)), input boxes to retain old text ([Issue #4774](https://github.com/agentscope-ai/QwenPaw/issues/4774)), and settings (like disabled skills) resetting upon upgrade ([Issue #4807](https://github.com/agentscope-ai/QwenPaw/issues/4807)). Windows desktop users specifically feel treated as second-class citizens due to environment variable and subprocess limitations.

## 8. Backlog Watch
*   **Long-standing Multi-Agent Cron Issues:** [Issue #2115](https://github.com/agentscope-ai/QwenPaw/issues/2115) and [Issue #2569](https://github.com/agentscope-ai/QwenPaw/issues/2569) highlight that cron tasks created by non-default sub-agents have been broken or misallocated since March 2026. Despite recent PRs addressing parts of the cron system, these specific architectural oversights need explicit maintainer attention.
*   **Global Config Inheritance:** [Issue #4491](https://github.com/agentscope-ai/QwenPaw/issues/4491) (Open since May 18) asks whether newly created sub-agents should inherit global MCP/ACP configs. This requires a final architectural decision from the core team to standardize multi-agent setups.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-30

## 1. Today's Overview
The ZeroClaw project is currently experiencing very high open-source activity, operating at a rapid iteration pace characteristic of a late-stage beta cycle. With 14 active issues reported in the last 24 hours and 32 pull requests updated, community and core contributors are highly engaged. The complete absence of closed issues alongside 29 open PRs indicates a heavy "work-in-progress" phase where new features and edge-case bug reports are outpacing final merge approvals. The team is actively laying the groundwork for the `v0.8.0-beta-2` release, with a strong focus on hardening multi-agent configurations, fixing channel integrations, and enforcing strict security policies for tool execution.

## 2. Releases
**No new releases were published today.** The main development branch appears to be consolidating changes for an upcoming `v0.8.0-beta-2` pre-release milestone.

## 3. Project Progress
Although the merge rate was low today (only 3 PRs merged/closed out of 32 updated), significant architectural features advanced in the review pipeline:
*   **Beta-2 Integration:** The massive integration PR [#6848](https://github.com/zeroclaw-labs/zeroclaw/pull/6848) (introducing the zerocode TUI, RPC socket transport, and beta-2 integration) was actively updated.
*   **Tooling Enhancements:** Work progressed on binary file handling with PR [#7004](https://github.com/zeroclaw-labs/zeroclaw/pull/7004) (adding base64 encoding for `file_read`/`file_write`) and multi-file uploads via PR [#6775](https://github.com/zeroclaw-labs/zeroclaw/pull/6775) (`file_upload_bundle`).
*   **Security & Policy Enforcement:** Defense-in-depth measures advanced with PR [#6920](https://github.com/zeroclaw-labs/zeroclaw/pull/6920) enforcing `allowed_tools`/`denied_tools` at execution time, and PR [#6924](https://github.com/zeroclaw-labs/zeroclaw/pull/6924) introducing scoped tool elevation for skills.
*   **Channel Fixes:** Stubbed fixes were submitted to resolve broken Telegram voice transcription ([#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000)) and multi-agent TTS routing ([#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002)).

## 4. Community Hot Topics
The most actively discussed items revolve around version discrepancies, lost code contributions, and complex configuration states:
*   **Documentation Version Mismatch:** Issue [#6997](https://github.com/zeroclaw-labs/zeroclaw/issues/6997) highlights severe frustration that documentation covers `v0.8.0-beta-1` while the latest official release is `v0.7.5`, breaking contributor and user workflows.
*   **Lost Commits Audit:** Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (Active since April) tracks the ongoing effort to recover 153 commits lost in a bulk revert from March. Maintainers are seeking help to audit and safely re-merge valuable features.
*   **MCP Tool Filtering Failure:** Issue [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) (7 comments) points out a critical flaw where `tool_filter_groups` is essentially a "no-op" for real MCP tools due to a prefix-check bug.

## 5. Bugs & Stability
Several high-severity (S1/S2) bugs were reported today, exposing regressions primarily in channel messaging and runtime security. Fortunately, fix PRs already exist for the most critical issues:
1.  **Slack Integration Auth Failure (S1):** PR [#6992](https://github.com/zeroclaw-labs/zeroclaw/issues/6992) reports that Slack Socket Mode rejects all messages as "unauthorized user" *(No fix PR yet)*.
2.  **Security Policy Bypass (S2):** Issue [#6991](https://github.com/zeroclaw-labs/zeroclaw/issues/6991) reveals that native tool serialization bypasses Risk Profiles and Tool Filters in `v0.8.0-beta-1`. *(Fix available: PR [#6960](https://github.com/zeroclaw-labs/zeroclaw/pull/6960) and [#6986](https://github.com/zeroclaw-labs/zeroclaw/pull/6986))*.
3.  **Telegram Voice Failure (S1):** Issue [#6999](https://github.com/zeroclaw-labs/zeroclaw/issues/6999) notes voice transcription always fails due to a missing provider alias. *(Fix available: PR [#7000](https://github.com/zeroclaw-labs/zeroclaw/pull/7000))*.
4.  **TTS Provider Resolution (S2):** Issue [#7001](https://github.com/zeroclaw-labs/zeroclaw/issues/7001) points out multi-agent configs resolve the wrong agent's `tts_provider`. *(Fix available: PR [#7002](https://github.com/zeroclaw-labs/zeroclaw/pull/7002))*.
5.  **Stream Error Recovery (S2):** A major regression where streamed errors crash before falling back. *(Fix available: PR [#6983](https://github.com/zeroclaw-labs/zeroclaw/pull/6983))*.

## 6. Feature Requests & Roadmap Signals
Today's issues and open PRs signal a strong trajectory toward enterprise-grade security, cross-provider standardization, and UX overhauls for `v0.8.0`:
*   **Schema-Guided Reasoning (SGR):** RFC [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) proposes cross-provider structured output, aiming to generalize reasoning capabilities across LLM providers.
*   **Granular Sandboxing:** RFC [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) requests config-driven filesystem and network restrictions for OS-level sandboxes (Landlock, Bubblewrap, Seatbelt), highlighting a push for stricter multi-tenant isolation.
*   **Secrets Management:** Issue [#6989](https://github.com/zeroclaw-labs/zeroclaw/issues/6989) requests extending `#[secret]` derivation to automatically redact bearer tokens inside config header maps.
*   **UX & TUI:** Tracker issue [#6825](https://github.com/zeroclaw-labs/zeroclaw/issues/6825) and various open PRs show an active push to polish the Terminal User Interface before the next official release.

## 7. User Feedback Summary
Users are heavily utilizing multi-agent configurations and diverse channel integrations (Telegram, Slack, WhatsApp), but they are experiencing friction with the multi-tenant boundaries. Specifically, users note that TTS and transcription providers are breaking when agents share channels, and ACLs (Access Control Lists) for channels are cumbersome to configure natively. Furthermore, international users reported a highly visible usability blocker: the interactive CLI (`zeroclaw agent`) deletes CJK characters byte-by-byte rather than by grapheme, requiring 3 backspaces to delete a single Asian character ([#6995](https://github.com/zeroclaw-labs/zeroclaw/issues/6995)).

## 8. Backlog Watch
*   **Bulk Revert Recovery:** Issue [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) is approaching its 5th week. Recovering the 153 lost commits from March is vital for preserving community contributions, and it desperately needs a dedicated maintainer to drive resolution.
*   **Stale Architectural Migrations:** Several large Pull Requests (e.g., PR [#6793](https://github.com/zeroclaw-labs/zeroclaw/pull/6793) and PR [#6778](https://github.com/zeroclaw-labs/zeroclaw/pull/6778)) focused on migrating channel allowlists to `aspect_std` are flagged as `needs-author-action` and have stalled.
*   **Flake/Nix Support:** PR [#5987](https://github.com/zeroclaw-labs/zeroclaw/pull/5987) for adding a `flake.nix` has been open for over a month pending author updates, blocking a smoother onboarding for NixOS users.

</details>