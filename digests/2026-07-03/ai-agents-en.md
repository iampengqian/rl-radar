# OpenClaw Ecosystem Digest 2026-07-03

> Issues: 195 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-02 22:19 UTC

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

Here is the project digest for OpenClaw on 2026-07-03.

### 1. Today's Overview
OpenClaw is exhibiting explosive open-source community activity, underscored by nearly 500 updated Pull Requests and 195 active Issues in the past 24 hours. The project recently shipped release `v2026.7.1-beta.1`, which introduces anticipated OpenAI GPT-5.6 support and external harness attachment capabilities. However, the staggering volume of open PRs (454) against a small fraction of merges (46) suggests the maintainer team is facing a significant review bottleneck. Furthermore, while new feature sets are landing rapidly, stability around multi-agent session states, channel integrations, and external OAuth (specifically OpenAI/Codex) has regressed, requiring immediate patching focus.

### 2. Releases
**v2026.7.1-beta.1**
*   **OpenAI GPT-5.6 support:** OpenClaw now natively recognizes the GPT-5.6 model family across catalog, capability, and runtime selection paths. ([#98333](https://github.com/openclaw/openclaw/issues/98333))
*   **External harness attachment:** The new `openclaw attach` command allows launching an external harness against an existing Gateway session.
*   *Migration Note:* Organizations utilizing OpenAI's Codex runtime or external harnesses should test their auth flows in this beta, as session tokens and OAuth refreshes are currently demonstrating fragility during migrations.

### 3. Project Progress
The community is driving massive forward momentum, particularly in mobile UI/UX and backend security:
*   **PR Review Automation:** An automated PR review pipeline using the Claude Agent SDK was merged ([PR #68936](https://github.com/openclaw/openclaw/pull/68936)), which should help alleviate the project's severe review bottleneck moving forward.
*   **iOS Native Overhaul:** Major progress on the official iOS app, including a branded typography system ([PR #99246](https://github.com/openclaw/openclaw/pull/99246)) and native SwiftUI navigation ([PR #99231](https://github.com/openclaw/openclaw/pull/99231)).
*   **Enterprise Support:** Advancements in GitHub Enterprise data-residency Copilot auth ([PR #99221](https://github.com/openclaw/openclaw/pull/99221)) and a new Windows MXC sandbox backend ([PR #97086](https://github.com/openclaw/openclaw/pull/97086)).
*   **Security Hardening:** The web UI Content Security Policy (CSP) was successfully tightened to prevent XSS exploits via WebSocket ([PR #99024](https://github.com/openclaw/openclaw/pull/99024)).

### 4. Community Hot Topics
*   **Agent Output Leakages ([#25592](https://github.com/openclaw/openclaw/issues/25592)):** With 33 comments, the most discussed issue is internal agent text (error handling, inner monologue) leaking directly into Slack/iMessage channels. *Underlying need:* Users require a strict separation between agent "thinking/processing" and user-facing replies to maintain trust in production environments.
*   **Multi-Agent RFC ([#35203](https://github.com/openclaw/openclaw/issues/35203)):** A highly engaged RFC proposing capability profiling, shared blackboards, and layered memory boundaries. *Underlying need:* As users build complex multi-agent systems, token consumption is spiraling out of control, and task delegation logic remains too ambiguous.
*   **Tool Output Degradation ([#96857](https://github.com/openclaw/openclaw/issues/96857) & [#99168](https://github.com/openclaw/openclaw/issues/99168)):** Users are highly frustrated by long or ANSI-heavy tool outputs collapsing into unreadable `(see attached image)` or `(no output)` placeholders.

### 5. Bugs & Stability
Ranked by severity:
1.  **[P1] Anthropic Thinking Block Bricking ([#94228](https://github.com/openclaw/openclaw/issues/94228)):** Long-lived multi-turn tool-use sessions permanently break due to `Invalid signature in thinking block` 400 errors, causing infinite retry loops. *Fix Status:* No PR yet.
2.  **[P1] Reentrancy Guard Missing in Published Dist ([#98416](https://github.com/openclaw/openclaw/issues/98416)):** The `v2026.6.11` release shipped missing a reentrancy guard in its distribution build, causing reply session conflicts. *Fix Status:* Actively being addressed.
3.  **[P1] Node Fork ENOENT Crash ([#99183](https://github.com/openclaw/openclaw/issues/99183)):** Local embedding workers crash after Node version upgrades due to stale execPaths. *Fix Status:* Fix PR submitted ([PR #99222](https://github.com/openclaw/openclaw/pull/99222)).
4.  **[P1] iOS Voice Wake Crash ([#99093](https://github.com/openclaw/openclaw/issues/99093)):** Voice wake crashes with AVFoundation exceptions when reinstalling mic taps during screen recording. *Fix Status:* Closed/Fixed.
5.  **[P2] Feishu Approval UX Degradation ([#69754](https://github.com/openclaw/openclaw/issues/69754)):* Interactive approval buttons degrade silently into manual text commands. *Fix Status:* Linked PR open.

### 6. Feature Requests & Roadmap Signals
Based on active Issue tags and community demand, the following features are highly likely to land in the next stable versions:
*   **Advanced Multi-Agent Controls:** Implementation of the Shared Blackboard and Token Cost Governance requested in [#35203](https://github.com/openclaw/openclaw/issues/35203).
*   **Workspace Auto-Discovery:** Auto-loading of agent configurations from specified workspace directories ([#32530](https://github.com/openclaw/openclaw/issues/32530)) to simplify deployment.
*   **Apple CarPlay Support:** Native iOS extension to allow safe, voice-first interaction in vehicles ([#97993](https://github.com/openclaw/openclaw/issues/97993)).
*   **Configurable Sandboxes:** Allowing users to configure `MEDIA_MAX_BYTES` past the hardcoded 5MB limit ([#40880](https://github.com/openclaw/openclaw/issues/40880)).

### 7. User Feedback Summary
**Pain Points:** Users operating OpenClaw on edge networks or strict enterprise environments are frustrated by proxy handling and OAuth migrations (e.g., Codex CLI, Mattermost 401 loops). Additionally, the recent shift to externalize plugins (like Mattermost) is causing integration breakages. 
**Satisfaction:** The rapid addition of modern models (GPT-5.6, Grok builds) and native mobile apps is highly praised. The agent community is heavily leaning into complex, multi-agent workflows and long-running sessions.
**Use Cases:** Heavy adoption is seen in using OpenClaw as a localized coding agent, a cross-platform mobile assistant (iOS/Tailscale), and an automated bridge for internal enterprise communications (Slack, Discord, MS Teams, Feishu).

### 8. Backlog Watch
The issue triage system (`clawsweeper`) is currently overloaded. The following critical items require immediate maintainer attention:
*   **Channel State Deadlocks ([#70024](https://github.com/openclaw/openclaw/issues/70024)):** Channels silently dying with `running: true` due to stale store entries. Tagged `clawsweeper:no-new-fix-pr` since April.
*   **Memory Security Boundaries ([#84466](https://github.com/openclaw/openclaw/issues/84466)):** `MEMORY.md` loading in Discord guild servers despite documentation explicitly stating it shouldn't. Needs a security review.
*   **Gateway Overload ([#72015](https://github.com/openclaw/openclaw/issues/72015)):** The `active-memory` plugin is blocking replies and overloading multi-agent gateways.
*   **Subagent Tracking Failures ([#75593](https://github.com/openclaw/openclaw/issues/75593)):* `/subagents list` remains empty even after successful child spawns, breaking multi-agent orchestration reliability.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the July 3, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing an explosive growth phase, characterized by rapid iteration toward complex multi-agent workflows and deep enterprise communication integrations. Projects are pivoting from basic chat interfaces to highly autonomous, multi-tenant platforms requiring rigorous memory management, robust security boundaries, and tool-agnostic architectures. While foundational projects like OpenClaw are pushing massive feature sets and early mobile-first experiences, emerging competitors are aggressively targeting enterprise stability, modular deployments, and specialized model routing. Across the board, maintainers are navigating significant growing pains, particularly in scaling code review pipelines, hardening multi-tenant security, and preventing context exhaustion.

### 2. Activity Comparison
*Health Score is calculated based on PR merge ratios, issue triage responsiveness, and release stability.*

| Project | Active Issues (24h) | Active PRs (24h) | Recent Release Status | Health Score | Assessment |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 195 | 500 (46 merged) | `v2026.7.1-beta.1` | **B-** | Explosive growth, but suffering from severe PR review bottlenecks and P1 stability regressions. |
| **ZeroClaw** | 37 | 50 (27 merged) | None (Accumulating) | **A** | Highly active, healthy merge ratio. Strong architectural RFCs and security hardening. |
| **CoPaw** | 25 | 50 (27 merged) | `v2.0.0-beta.2` | **A-** | Fast iteration towards v2.0. High engagement, successfully clearing backlog. |
| **IronClaw** | 23 | 50 (20 merged) | None (QA Phase) | **A** | Exceptional hygiene. Focused on rigorous QA, test coverage, and de-duplication. |
| **NanoBot** | 96 | 64 (28 merged) | None (Consolidating)| **B+** | High velocity and strong security patching, but accumulating massive core changes. |
| **Hermes Agent**| 50 | 50 (15 merged) | None (Refactoring) | **B+** | High engagement, successfully fixing gateway lifecycle bugs, but UI state desyncs persist. |
| **NanoClaw** | 4 | 11 (2 merged) | None | **B** | Focused development on messaging adapters, but PR review is slightly stalled. |
| **PicoClaw** | 2 | 25 (Unknown) | Nightly (`v0.3.1`) | **C+** | Heavy maintenance, but critical startup/config bugs are hurting deployment trust. |
| **LobsterAI** | 5 | 7 (7 merged) | None | **C** | Code velocity is okay, but community support is failing (stale issues, BSOD bugs). |
| **Moltis** | 0 | 3 (1 merged) | None | **B** | Highly focused, stable pipeline addressing specific LLM and WhatsApp routing bugs. |
| **NullClaw** | 0 | 0 | None | **N/A** | Dormant. |
| **TinyClaw** | 0 | 0 | None | **N/A** | Dormant. |
| **ZeptoClaw**| 0 | 0 | None | **N/A** | Dormant. |

### 3. OpenClaw's Position
**Advantages:** OpenClaw remains the undisputed hub of open-source community activity, processing nearly 500 PRs in a single day. It is leading the ecosystem in adopting frontier models (GPT-5.6) and expanding beyond the desktop into native mobile (iOS SwiftUI) and in-vehicle (CarPlay) environments. Its sheer volume of feature additions makes it the most versatile platform for cross-platform deployment.
**Technical Approach Differences:** OpenClaw relies heavily on massive community-driven feature injection, whereas peers like IronClaw and ZeroClaw are taking a more measured, RFC-driven approach to architecture. OpenClaw's "move fast" mentality has resulted in externalized plugin systems and complex multi-agent capabilities, but it currently lacks the architectural hygiene seen in IronClaw.
**Community Size Comparison:** OpenClaw's community dwarfs all others, generating 10x the PR volume of ZeroClaw and IronClaw. However, this has become a double-edged sword; with only 46 PRs merged out of 500, the project is facing a catastrophic review bottleneck that has forced them to deploy automated Claude Agent SDK pipelines to keep up.

### 4. Shared Technical Focus Areas
Several architectural and functional requirements are converging across the ecosystem:
*   **Strict Agent Boundary Separation (Context Leakage):** Preventing internal monologue, chain-of-thought, and error handling from leaking into user-facing channels. (*OpenClaw, IronClaw, NanoBot*).
*   **Advanced Multi-Agent Memory & Isolation:** Moving away from flat `MEMORY.md` files toward dynamic, database-driven backends with strict tenant isolation. (*Hermes Agent, ZeroClaw, IronClaw, OpenClaw*).
*   **Resilient Messaging Gateways:** Auto-reconnection logic and heartbeat monitoring to prevent "silent zombie" states in long-polling integrations. (*PicoClaw, NanoBot, CoPaw, Moltis*).
*   **Provider-Agnostic Routing:** Adopting wire-protocol-first architectures to seamlessly support OpenAI, Anthropic, Gemini, and regional LLMs (Volcengine, Qwen) without serialization breaks. (*ZeroClaw, PicoClaw, Moltis, NanoBot*).
*   **Enterprise Config Security:** Enforcing environment variable resolution, SSRF protections, and credential desensitization in multi-tenant environments. (*CoPaw, NanoBot, IronClaw*).

### 5. Differentiation Analysis
*   **Platform & Environment Focus:** OpenClaw is heavily differentiate by its push into native mobile (iOS) and vehicle extensions (CarPlay). In contrast, ZeroClaw and IronClaw are hyper-focused on backend stability, multi-tenant web UIs, and headless/CLI operations.
*   **Target Audiences:** CoPaw and LobsterAI show heavy adoption in Asian enterprise ecosystems (Feishu/Lark, DingTalk, NetEase Popo). NanoClaw and Moltis are positioning themselves as specialized, resilient bridges for decentralized and privacy-first networks (WhatsApp LID, Signal, Matrix).
*   **Architecture & Security:** IronClaw is differentiating through extreme technical hygiene—enforcing architecture sprawl checks and comprehensive E2E test harnesses. ZeroClaw is innovating on the tool-layer, pushing for sandboxed WASM tool installations.

### 6. Community Momentum & Maturity
*   **Hyper-Growth / Bleeding Edge:** **OpenClaw** is experiencing viral growth but is struggling with maturity, resulting in severe P1 bugs (session bricking) and triage overload. **CoPaw** is also in a massive acceleration phase toward v2.0, successfully unblocking features but battling memory leaks.
*   **Rapidly Iterating & Maturing:** **ZeroClaw, IronClaw,** and **NanoBot** represent the most mature middle-ground. They have high development velocity but maintain strong merge ratios, active RFC discussions, and a proactive stance on security (patching SSRF, path traversal, and OAuth flaws).
*   **Stabilizing / Niche:** **PicoClaw, Hermes Agent,** and **LobsterAI** are currently in heavy maintenance/stabilization phases, fighting platform-specific edge cases (Windows GUI, iMessage gRPC streams) and backlogs of stale bugs.

### 7. Trend Signals
*   **AI-Assisted Code Review is Mandatory:** OpenClaw's integration of the Claude Agent SDK to automate PR reviews signals that human maintainers can no longer manually parse the volume of community contributions to open-source agent frameworks.
*   **The Death of Flat-File Memory:** The ecosystem is uniformly rejecting static prompt-injected memory (e.g., `MEMORY.md`) in favor of externalized, database-driven memory providers (like Honcho) to reduce token bloat and enable dynamic semantic retrieval.
*   **Voice and Streaming UX Bottlenecks:** As platforms push for native voice (STT/TTS), developers are hitting severe latency walls (e.g., 35-60s delays in NanoBot) and UI deadlocks (Hermes Agent), indicating that asynchronous, decoupled audio streaming pipelines are the next critical frontier.
*   **Silent Failing is the New Crash:** A major trend across PicoClaw, NanoBot, and CoPaw is the "zombie agent" problem—where network drops or tool failures leave the main process alive but functionally dead. Implementing robust connection state machines and tool-execution timeouts is a top priority for developers building 24/7 deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest (2026-07-03)

## 1. Today's Overview
NanoBot is exhibiting exceptionally high development velocity and community engagement, maintaining a hyper-active state with 96 updated issues (93 open) and 64 active pull requests (36 open) in the last 24 hours. The project is currently in a massive consolidation and hardening phase, with core maintainers (notably `hamb1y`) aggressively pushing architectural refactors, security patches, and bug fixes. The lack of new releases indicates that the team is accumulating substantial changes—likely preparing for a major stable release in the near future. Overall project health appears robust but requires careful merging due to the sheer volume of concurrent modifications to core agent loops and channel integrations.

## 2. Releases
**None.** No new releases were published in the last 24 hours. The project remains on its current main branch iteration as upstream feature freezing and bug fixing continues.

## 3. Project Progress
Development today was heavily focused on enhancing system security, fixing tool execution pipelines, and improving memory/context management. Out of 64 updated PRs, 28 were successfully merged or closed. Key advancements include:
*   **Batch Bug & Security Fixes:** PR [#4648](https://github.com/HKUDS/nanobot/pull/4648) was closed after successfully laying the groundwork for addressing a massive batch of validated issues, resolving bugs related to tool parsing, session handling, and missing runtime contexts.
*   **Message & Tool Security:** Maintainers merged crucial security constraints, including enforcing message outbound policies to prevent unauthorized cross-chat sends (PR [#4668](https://github.com/HKUDS/nanobot/pull/4668)) and containing malformed MCP (Model Context Protocol) tool results to prevent crashes (PR [#4666](https://github.com/HKUDS/nanobot/pull/4666)).
*   **Memory & Skill Management:** PR [#4673](https://github.com/HKUDS/nanobot/pull/4673) grounded Dream memory audit records in real git diffs for better transparency, while PR [#4667](https://github.com/HKUDS/nanobot/pull/4667) added write guards to protect user skills from being overwritten by the Dream agent.
*   **Provider Compatibility:** PR [#4662](https://github.com/HKUDS/nanobot/pull/4662) normalized OpenAI-compatible text-format tool calls into structured ones, fixing a major interoperability gap. 

## 4. Community Hot Topics
The community is highly engaged in discussing architectural tracking and multi-channel communication needs:
*   **Validated Bug Tracking ([#4657](https://github.com/HKUDS/nanobot/issues/4657)):** A tracking issue for 13 independently validated bugs/security gaps. This shows a highly organized approach to technical debt management.
*   **DingTalk File Uploads ([#3344](https://github.com/HKUDS/nanobot/issues/3344)):** Users are actively discussing the inability of DingTalk to send files directly to the agent due to API message splitting, highlighting the need for smarter attachment-parsing logic in enterprise IM channels.
*   **Plugin System Request ([#2231](https://github.com/HKUDS/nanobot/issues/2231)):** A continued highly-debated thread requesting a Copilot CLI-style plugin architecture (`plugin.json` manifests) to allow easier third-party agent extensibility.
*   **Anthropic OAuth Integration ([#4604](https://github.com/HKUDS/nanobot/issues/4604)):** Strong demand for native Anthropic OAuth support, enabling Claude subscription users to utilize NanoBot without needing explicit API keys.

## 5. Bugs & Stability
Several high-severity bugs regarding system stability and channel reliability were addressed today:
1.  **High: Copilot Token Race Conditions:** Concurrent requests triggering simultaneous token refreshes caused failures. **Fix:** PR [#4684](https://github.com/HKUDS/nanobot/pull/4684) implements an `asyncio.Lock` to guard the token refresh process.
2.  **High: SSRF DNS Validation Bypass:** Web fetching and MCP probes were vulnerable to Server-Side Request Forgery. **Fix:** PR [#4671](https://github.com/HKUDS/nanobot/pull/4671) pins DNS lookups to validated IPs.
3.  **Medium: Cron Job Context Leaking ([#4082](https://github.com/HKUDS/nanobot/issues/4082)):** Repeated scheduled tasks shared session contexts, causing compounding hallucinations. 
4.  **Medium: Telegram Long Polling Hangs ([#3626](https://github.com/HKUDS/nanobot/issues/3626)):** Network interruptions silently dropped the bot's ability to receive messages, leaving it in a "zombie" alive state.
5.  **Low: Anthropic Sonnet-5 Temperature Parameter ([#4683](https://github.com/HKUDS/nanobot/issues/4683)):** Passing the deprecated `temperature` parameter to Sonnet-5 caused 400 errors. **Fix:** PR [#4685](https://github.com/HKUDS/nanobot/pull/4685) omits the parameter.

## 6. Feature Requests & Roadmap Signals
Based on open PRs and community discussions, upcoming releases will likely lean heavily into voice, enterprise channels, and advanced reasoning:
*   **Native Voice Pipeline (TTS/STT):** Feature request [#4010](https://github.com/HKUDS/nanobot/issues/4010) for end-to-end voice output support aligns with discussions around latency metrics in [#3257](https://github.com/HKUDS/nanobot/issues/3257).
*   **Adaptive Reasoning Effort:** Users want the agent to dynamically scale its reasoning depth based on task complexity (Issue [#4419](https://github.com/HKUDS/nanobot/issues/4419)).
*   **Enterprise Chat Expansions:** A highly active PR for Mattermost integration (PR [#4459](https://github.com/HKUDS/nanobot/pull/4459)) and proposed features for WhatsApp human-handoff (Issue [#2837](https://github.com/HKUDS/nanobot/issues/2837)) signal a push into enterprise and semi-automated customer support environments.

## 7. User Feedback Summary
**Pain Points:** Users operating NanoBot in multi-tenant environments are experiencing friction with context isolation and cross-channel messaging. WhatsApp users report significant JSON parsing failures that silently drop messages (Issue [#2881](https://github.com/HKUDS/nanobot/issues/2881)), and Windows users are frustrated by inconsistent shell executions where single-line commands use `cmd.exe` but multi-line uses PowerShell (Issue [#4544](https://github.com/HKUDS/nanobot/issues/4544)).
**Satisfaction:** Developers highly appreciate the "Dream" memory system and MCP tool integrations but request more transparent audit logs and explicit retention planning. The rapid maintainer response to security vulnerabilities (SSRF, Outbound Auth) is drawing positive sentiment from self-hosting enterprise users.

## 8. Backlog Watch
The following important issues require maintainer attention or final code review:
*   **[OPEN] Pipeline latency metrics for voice interactions ([#3257](https://github.com/HKUDS/nanobot/issues/3257)):** Created in April, users still lack the necessary telemetry to debug 35-60 second end-to-end voice delays. Needs an architectural RFC.
*   **[OPEN] Embedding-based context compression ([#2937](https://github.com/HKUDS/nanobot/issues/2937)):** A highly upvoted proposal from April to replace lossy token-budget trimming with semantic retrieval pipelines.
*   **[OPEN] Tool scheduling should trust LLM's parallel tool calls ([#3096](https://github.com/HKUDS/nanobot/issues/3096)):** Static tool properties currently force nearly all tool calls to execute serially, drastically slowing down complex agent tasks. Requires a refactor of the `Tool` base class.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent based on the GitHub data from July 3, 2026.

### 1. Today's Overview
The Hermes Agent project is experiencing exceptionally high development velocity and community engagement, processing 50 issues and 50 PRs in the last 24 hours alone. The lack of new official releases today is heavily outweighed by the massive merging and closing activity (15 PRs merged/closed, 7 issues closed), indicating active integration of community code into the mainline. Much of today's focus revolves around refactoring the agent gateway's memory lifecycle, fixing installation/TUI launch blockers for packaged distributions, and addressing platform-specific edge cases (particularly Windows and iMessage/BlueBubbles). The project maintains a healthy open-source ecosystem, demonstrated by structured issue reporting and multiple contributors salvaging and extending each other's pull requests.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Significant architectural and stability improvements were merged today, specifically targeting gateway session management and memory providers:
*   **Memory & Session Lifecycle Fixes:** Maintainers successfully merged several complex PRs to fix a critical race condition where gateway sessions expired silently without triggering `MemoryProvider.on_session_end()`. This included the merging of PR [#54293](https://github.com/NousResearch/hermes-agent/pull/54293) (fixing idle-TTL eviction) and a collaborative salvage effort on PR [#57378](https://github.com/NousResearch/hermes-agent/pull/57378) and PR [#31856](https://github.com/NousResearch/hermes-agent/pull/31856), ensuring memory providers no longer drop conversation history during agent cache evictions.
*   **Windows GUI Launching:** The bug preventing detached GUI applications from launching on Windows ([Issue #56147](https://github.com/NousResearch/hermes-agent/issues/56147)) was officially closed, resolving a severe friction point for Windows users.
*   **Gateway Stability:** Merged PR [#11304](https://github.com/NousResearch/hermes-agent/pull/11304) to properly dispatch memory session-end hooks from the live gateway agent before the flush worker tears the session down.

### 4. Community Hot Topics
*   **Configurable Memory Backends ([Issue #47349](https://github.com/NousResearch/hermes-agent/issues/47349)):** With 11 comments, this is the most actively discussed issue. The community is pushing heavily to deprecate hardcoded memory files (`MEMORY.md`) in favor of external user memory backends like Honcho, signaling a strong desire for dynamic, database-driven agent memory rather than static prompt injection.
*   **Context File Discrepancies ([Issue #5200](https://github.com/NousResearch/hermes-agent/issues/5200)):** High engagement (5 comments, 5 👍) surrounds a bug where `AGENTS.md` recursive walks documented in the docs do not match the actual code implementation. This highlights community frustration with outdated or inaccurate onboarding documentation.
*   **Mixture of Agents (MoA) on Desktop ([Issue #53817](https://github.com/NousResearch/hermes-agent/issues/53817)):** Users are actively discussing (6 comments) an inability to select MoA presets (like `BeastMode`) via the Desktop app when connected to a remote Linux gateway, despite it working on Telegram.

### 5. Bugs & Stability
Today's bug reports highlight significant issues with platform-specific executions, tool zombies, and UI deadlocks:
*   **P1 - TUI WebSocket Disconnects ([Issue #53773](https://github.com/NousResearch/hermes-agent/issues/53773)):** *Status: Closed.* Long-running `delegate_task` subagents block the event loop, causing the TUI/Electron client to hang for ~9 minutes before timing out. 
*   **P2 - MCP Server Zombie Accumulation ([Issue #57355](https://github.com/NousResearch/hermes-agent/issues/57355)):** Failed MCP server subprocesses are never killed on connection retries, rapidly accumulating orphan processes. *No fix PR yet.*
*   **P2 - Blank Slate Installations Broken ([Issue #57315](https://github.com/NousResearch/hermes-agent/issues/57315)):** New installations using the "blank slate" setup fail to load any tools besides `cronjob`, even after explicit enabling. *No fix PR yet.*
*   **P3 - Photon/iMessage Stream Death ([Issue #55416](https://github.com/NousResearch/hermes-agent/issues/55416)):** Persistent gRPC `RST_STREAM` errors are making the iMessage integration completely non-functional, despite the sidecar process staying alive. (Note: Community is actively fighting this via PR [#57384](https://github.com/NousResearch/hermes-agent/pull/57384) which adds streamed live-edit previews).
*   **P3 - Python 3.14 Installation Crash ([Issue #57381](https://github.com/NousResearch/hermes-agent/issues/57381)):** `hermes setup` crashes on Python 3.14 due to the removed `distutils.version` module. *No fix PR yet.*

### 6. Feature Requests & Roadmap Signals
Several highly upvoted and structured feature requests hint at the immediate roadmap trajectory:
*   **CLI & TUI Decoupling:** Multiple PRs ([#57064](https://github.com/NousResearch/hermes-agent/pull/57064), [#57047](https://github.com/NousResearch/hermes-agent/pull/57047), [#57087](https://github.com/NousResearch/hermes-agent/pull/57087)) are dedicated to fixing TUI workspace checks for Homebrew/NixOS/pip installs. This strongly signals an upcoming push for 1-click managed installations without requiring a git checkout.
*   **Advanced Voice & Speech:** [Issue #57120](https://github.com/NousResearch/hermes-agent/issues/57120) requests first-class Google Cloud STT (Chirp 3) and TTS providers using ADC auth, expanding the already mature voice stack.
*   **Blockchain & Tooling Expansion:** PR [#57374](https://github.com/NousResearch/hermes-agent/pull/57374) adds Hedera blockchain skills, and PR [#13314](https://github.com/NousResearch/hermes-agent/pull/13314) introduces You.com as a no-API-key remote MCP research tool, showing a trend toward zero-config expansion of agent capabilities.

### 7. User Feedback Summary
*   **Windows Friction:** A massive cluster of today's issues ([#57191](https://github.com/NousResearch/hermes-agent/issues/57191), [#57207](https://github.com/NousResearch/hermes-agent/issues/57207), [#38786](https://github.com/NousResearch/hermes-agent/issues/38786)) relate specifically to Windows. Users are frustrated by duplicate cron messages, GUI launch failures, local image rendering failures, and unsupported security scanners (Tirith).
*   **UI State Desyncs:** Users report the desktop UI frequently "freezes" visually while backend processes complete successfully. [Issue #57237](https://github.com/NousResearch/hermes-agent/issues/57237) details how multiple subagents cause the UI to stay stuck in a "Processing" state, resulting in message queue build-up and user confusion.
*   **System Prompt Bloat:** [Issue #52821](https://github.com/NousResearch/hermes-agent/issues/52821) highlights developer/user pain regarding `AGENTS.md` growing to 70,000 characters (~25k tokens), which drastically increases token costs and latency for every minor cron job or chat interaction.

### 8. Backlog Watch
*   **[Issue #7142](https://github.com/NousResearch/hermes-agent/issues/7142) (Created April 2026):** A tested fix for a `TypeError` crash in cronjob creation (missing string-to-int coercion) has sat in the backlog for ~3 months. Despite the author providing a fix, it remains untouched.
*   **[Issue #14694](https://github.com/NousResearch/hermes-agent/issues/14694) (Created April 2026):** A critical bug where anti-thrashing protection permanently disables auto-compression with zero recovery mechanism. This long-running issue could silently degrade agent performance over long sessions and requires maintainer intervention.
*   **[Issue #24782](https://github.com/NousResearch/hermes-agent/issues/24782) (Created May 2026):** Subagent model fallbacks incorrectly use the parent's `base_url`. This breaks complex multi-provider routing setups and has been waiting for resolution for nearly two months.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the structured project digest for PicoClaw based on the provided GitHub data.

# PicoClaw Project Digest (2026-07-03)

## 1. Today's Overview
PicoClaw is exhibiting high development velocity and active maintenance, as evidenced by 25 pull requests updated alongside a new nightly release in the last 24 hours. The project is currently in a heavy maintenance and stabilization phase, balancing critical security and architectural bug fixes with massive automated dependency upgrades (led by Dependabot). However, the community is reporting significant regressions in core functionality—specifically configuration migration and network resiliency. Maintainer responsiveness to underlying architectural flaws appears active in the PR pipeline, though newly opened community bugs remain unaddressed.

## 2. Releases
- **nightly: Nightly Build (v0.3.1-nightly.20260702.2cf030d2)**
  - **Notes:** This is an automated build flagged as potentially unstable. It bridges the gap towards `v0.3.1`. Given the open issues regarding `v2→v3` config migrations, users upgrading from older stable branches (like `v0.2.9`) to this nightly should back up their `config.json` to prevent data loading failures.
  - **Full Changelog**: [v0.3.1...main](https://github.com/sipeed/picoclaw/compare/v0.3.1...main)

## 3. Project Progress
Significant forward progress was made today, particularly in hardening security, refining execution rules, and expanding communication gateways.
- **Security & Execution Hardening:** 
  - [PR #3160](https://github.com/sipeed/picoclaw/pull/3160) merged fixes to reject cross-site launcher setup requests, protecting the first-run dashboard password store via browser provenance checks.
  - [PR #3161](https://github.com/sipeed/picoclaw/pull/3161) merged an update ensuring `exec` deny patterns remain active even if a command matches a custom allow rule, plugging a vulnerability where restricted environments could be bypassed.
- **Platform & Integrations:** 
  - [PR #3063](https://github.com/sipeed/picoclaw/pull/3063) was closed, showing progress on integrating a DeltaChat gateway.
  - [PR #3158](https://github.com/sipeed/picoclaw/pull/3158) added vital regression tests for Windows path handling within sandbox filesystems.
- **Dependency Deprecation Cleanup:** A massive sweep of frontend and backend dependency bumps were closed, including Go core libraries ([PR #3210](https://github.com/sipeed/picoclaw/pull/3210)), Anthropic SDK ([PR #3209](https://github.com/sipeed/picoclaw/pull/3209)), and frontend UI tooling (React, Vite, ESLint).

## 4. Community Hot Topics
While newly opened issues have zero comments as of yet, several open PRs are driving heavy architectural discussions.
- **Volcengine Doubao Seed XML Handling ([PR #3165](https://github.com/sipeed/picoclaw/pull/3165)):** This open PR attempts to recover `<seed:tool_call>` XML blocks from OpenAI-compatible responses. This highlights a community need for better structured data extraction and cleaner streaming payloads when using non-standard LLM backends.
- **GitHub Copilot SDK Integration ([PR #3207](https://github.com/sipeed/picoclaw/pull/3207)):** A massive version bump for the Copilot SDK (from `0.2.0` to `1.0.5`). This open PR indicates heavy ongoing work to stabilize GitHub Copilot as a primary AI brain for the PicoClaw agent framework.

## 5. Bugs & Stability
Two major stability issues were reported today by the community, affecting core agent operability.
1. **[CRITICAL] Config Migration Failure ([Issue #3206](https://github.com/sipeed/picoclaw/issues/3206))**
   - **Description:** Running `picoclaw status` fails completely on fresh installs due to a broken `v2→v3` config migration. The system erroneously rejects `build_info` and `session.dm_scope` as unknown fields.
   - **Status:** No fix PR yet. Blocker for anyone setting up the current stable release.
2. **[HIGH] Silent Death of Matrix Sync ([Issue #3203](https://github.com/sipeed/picoclaw/issues/3203))**
   - **Description:** The Matrix channel's `/sync` loop permanently dies upon network disruption. Because the main process stays alive, auto-restarts (like systemd) fail to trigger, causing the agent to silently go offline.
   - **Status:** No fix PR submitted yet. Interestingly, an open dependency bump for the Matrix SDK ([PR #3208](https://github.com/sipeed/picoclaw/pull/3208) `mautrix 0.27.0 → 0.28.1`) might offer upstream relief, but explicit reconnection logic is missing.

## 6. Feature Requests & Roadmap Signals
- **Multi-Platform Chat Resiliency:** Issue #3203 strongly signals an upcoming need for built-in connection state machines and heartbeat monitoring for messaging integrations (Matrix, LINE). We can expect a feature PR addressing auto-reconnection logic soon.
- **Expanding LLM Tool Calling:** The work in PR #3165 to parse Volcengine Doubao Seed blocks shows a roadmap trend toward making PicoClaw universally compatible with regional/specialized LLMs, not just standard OpenAI/Anthropic models.
- **Messaging Gateway Expansion:** The closing of the DeltaChat gateway PR indicates potential shifts in focus; maintainers might be evaluating which chat platforms (LINE, Matrix, DeltaChat) to officially support in the `v0.3.1` stable release.

## 7. User Feedback Summary
- **Pain Points:** Users deploying PicoClaw in production via daemon services (systemd) are frustrated by "silent failures"—where the agent disconnects but doesn't crash, breaking infrastructure automations. Furthermore, the broken `v2→v3` migration is a severe friction point for updates, eroding trust in the upgrade path.
- **Use Cases:** Users are heavily utilizing PicoClaw as an always-on bridging agent for decentralized networks like Matrix, relying on it for long-polling continuous execution.
- **Satisfaction:** Despite robust development velocity, satisfaction is currently tempered by basic operational bugs. Users appreciate the rapid feature additions (custom gateways, OpenAI compatibility) but require higher reliability for 24/7 deployment.

## 8. Backlog Watch
The following high-value items require immediate maintainer attention:
- **[Issue #3206](https://github.com/sipeed/picoclaw/issues/3206) & [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203):** Both were created yesterday with 0 comments and 0 reactions. As core functionality bugs (startup and connectivity), they require immediate triage.
- **[PR #3171](https://github.com/sipeed/picoclaw/pull/3171):** Open and marked `[stale]`. This adds `ok` checks for `sync.Map` type assertions in the LINE channel, preventing potential panics. As a relatively small, defensive-coding PR, it should be prioritized for review to prevent unexpected crashes in Asian messaging markets.
- **[PR #3165](https://github.com/sipeed/picoclaw/pull/3165):** Open and marked `[stale]`. Addressing Volcengine tool-calling extraction. Given the difficulty of working with non-standard LLM XML schemas, the maintainer should validate the author's methodology and merge or request changes.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw on 2026-07-03.

### 1. Today's Overview
NanoClaw is currently exhibiting a very high velocity of development and community engagement, processing 11 pull requests and 4 issues in the last 24 hours. The project is actively expanding its multi-channel capabilities and core infrastructure, with a notable focus on refining the WhatsApp Cloud integration and introducing new "Agent Templates." Code merging is slightly stalled with a 9-to-2 open-to-merged ratio today, but underlying activity shows robust feature development. Container stability and skill discovery are also receiving significant attention from contributors. Overall, project health appears strong and highly iterative.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
Two significant pull requests were successfully merged/closed today, advancing core infrastructure and performance:
*   **Agent Templates Foundation Merged:** [PR #2890](https://github.com/nanocoai/nanoclaw/pull/2890) `feat(templates): local template loader, ncl --template, and docs` by `amit-shafnir` was closed/merged. This establishes the local-only template loader, allowing groups to be stamped from templates, paving the way for the setup-wizard flow in PR #2909.
*   **Container Stability Improvements Merged:** [PR #2771](https://github.com/nanocoai/nanoclaw/pull/2771) `perf(container): configurable --shm-size (default 1g) + --init for agent containers` by `ankushchadha`. This prevents agent-browser (headless Chromium) from crashing on large pages due to Docker's default 64MB shared memory limit.

### 4. Community Hot Topics
The most substantive community activity revolves around channel routing conflicts and scheduling reliability:
*   **WhatsApp Adapter Collision:** The community has identified a critical architectural clash where the new WhatsApp Cloud bridge silently overwrites the native Baileys adapter. This generated two coordinated issues ([Issue #2911](https://github.com/nanocoai/nanoclaw/issues/2911), [Issue #2912](https://github.com/nanocoai/nanoclaw/issues/2912)) and immediate documentation/code fixes ([PR #2914](https://github.com/nanocoai/nanoclaw/pull/2914), [PR #2913](https://github.com/nanocoai/nanoclaw/pull/2913)), highlighting the user need for seamless multi-provider integrations without manual routing conflicts.
*   **Scheduling Forking:** [PR #2915](https://github.com/nanocoai/nanoclaw/pull/2915) addressing recurring tasks forking into duplicates shows strong community attention to core agent execution reliability, particularly when agents hit execution time ceilings (e.g., 30-min absolute-ceiling kills).

### 5. Bugs & Stability
Today's bug reports focus heavily on channel routing and message routing logic, ranked by severity:
1.  **[High] WhatsApp Cloud Adapter Collision ([Issue #2911](https://github.com/nanocoai/nanoclaw/issues/2911)):** Installing both Cloud and native WhatsApp channels disables one and misroutes messages. **Status:** Fix actively submitted in [PR #2913](https://github.com/nanocoai/nanoclaw/pull/2913).
2.  **[Medium] WhatsApp User ID Divergence ([Issue #2912](https://github.com/nanocoai/nanoclaw/issues/2912)):** Native (`JID`) and Cloud (`bare wa_id`) paths assign different user IDs, causing roles and memberships to fail across paths.
3.  **[Medium] Core Instruction Loop ([PR #2910](https://github.com/nanocoai/nanoclaw/pull/2910)):** Agents are repeating `send_message` content in final message blocks, indicating a prompt-compliance regression that is being addressed via core instruction updates.
4.  **[Low] Spam/Noise:** [Issue #2916](https://github.com/nanocoai/nanoclaw/issues/2916) and [Issue #2907](https://github.com/nanocoai/nanoclaw/issues/2907) are low-effort/spammy issues requiring standard triage cleanup.

### 6. Feature Requests & Roadmap Signals
Several open PRs indicate a clear roadmap trajectory toward better Developer Experience (DX) and LLM provider flexibility:
*   **Agent Templates & Setup Wizard:** [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) introduces a template setup flow in the wizard.
*   **Codex Provider Support:** [PR #2908](https://github.com/nanocoai/nanoclaw/pull/2908) brings persona prepending and git-independent skill discovery, specifically ensuring templates work end-to-end with OpenAI's Codex. 
*   **Instance-Wide Defaults:** [PR #2906](https://github.com/nanocoai/nanoclaw/pull/2906) adds an instance-wide default agent provider, reducing configuration friction for operators.
*   **Advanced Tooling:** [PR #2725](https://github.com/nanocoai/nanoclaw/pull/2725) adds `web-search-plus`, a multi-provider web search utility with no MCP requirement.
*   *Prediction:* The next version will likely ship the Agent Template system, Codex provider parity, and the WhatsApp Cloud adapter namespace fixes.

### 7. User Feedback Summary
Users are heavily utilizing NanoClaw for messaging-app-centric agent deployments (WhatsApp, Signal) and are running into edge cases when running multiple adapters for the same platform. There is clear satisfaction with the project's extensibility (users easily building bridges and templates), but frustration around message routing drops—such as Signal DMs being silently dropped due to missing `isMention` flags ([PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689)). Operator feedback also shows a desire for less repetitive configuration, driving the push for instance-wide provider defaults.

### 8. Backlog Watch
The following items have been open for an extended period (20+ days) and require maintainer review to prevent contributor stagnation:
*   **[PR #2725](https://github.com/nanocoai/nanoclaw/pull/2725)** *(Opened: 2026-06-10)*: `web-search-plus` utility skill. A substantial feature addition that has been awaiting merge for 22 days.
*   **[PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689)** *(Opened: 2026-06-04)*: Signal DM platform ID consistency fix. Critical for Signal reliability, this PR has been waiting for review for nearly a month.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-03

## 1. Today's Overview
IronClaw is experiencing a period of exceptionally high development velocity and rigorous quality assurance, heavily focused on stabilizing the "Reborn" agent runtime and WebUI-v2. Over the last 24 hours, the project saw a massive surge in activity with 50 updated PRs (30 open, 20 merged/closed) and 23 updated issues. A dedicated "bug bash" and QA initiative has unearthed several critical UI and agent-loop regressions, which the core team is addressing with rapid, well-scoped fixes. Overall project health appears robust, characterized by strong test coverage culture, active multi-contributor collaboration, and clear architectural hygiene enforcement.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Significant architectural and functional ground was covered today, particularly through the merging of 20 PRs:
*   **Architectural Cleanup & Hygiene:** The codebase benefited from several complexity reduction initiatives, notably the execution of a type/trait deduplication backlog ([PR #5567](https://github.com/nearai/ironclaw/pull/5567)) and the enforcement of architecture sprawl checks to prevent future code smells ([PR #5559](https://github.com/nearai/ironclaw/pull/5559)).
*   **Reborn Runtime Coverage:** The team shipped vital test harness wiring for multi-user/multi-actor groups ([PR #5526](https://github.com/nearai/ironclaw/pull/5526)) and enhanced backend coverage for skills, durable states, and errors ([PR #5547](https://github.com/nearai/ironclaw/pull/5547)). 
*   **Reborn Guidance:** Stale agent routing documentation was refreshed to align with modern Reborn flows ([PR #5543](https://github.com/nearai/ironclaw/pull/5543)).
*   **Pipelines & Security:** Core features like Trace Commons enrollment ([PR #5280](https://github.com/nearai/ironclaw/pull/5280)) and the next major release pipeline ([PR #5311](https://github.com/nearai/ironclaw/pull/5311)) continue to receive active maintenance updates.

## 4. Community Hot Topics
*   **Workspace Privacy & Memory Isolation:** Issue [#5460](https://github.com/nearai/ironclaw/issues/5460) regarding memories being visible across a workspace has sparked attention. This highlights a critical underlying need for strict data isolation and private user context within shared tenant environments.
*   **Configurable WASM Tools:** Issue [#5459](https://github.com/nearai/ironclaw/issues/5459) outlines a massive architectural requirement: allowing admins to install global WASM tools while letting users install private ones. This is driving a significant refactor of the extension/credentials system, showing the community's strong desire for highly customizable, sandboxed agent capabilities.
*   **SSO & Testing Infrastructure:** Issue [#5570](https://github.com/nearai/ironclaw/issues/5570) discusses the inability to test Google SSO on ephemeral PR preview deployments. This shows the community's demand for robust, production-like QA environments accessible during the development cycle.

## 5. Bugs & Stability
A comprehensive QA pass on the Railway staging environment uncovered several high-severity bugs (ranked below):
*   **[P1 Critical] Routine Creation Hangs:** Issue [#5504](https://github.com/nearai/ironclaw/issues/5504) reports that routine creation hangs indefinitely without returning a confirmation or error, severely breaking core automation workflows. 
*   **[P1 Critical] Exa MCP Web Search Aborts:** Issue [#5571](https://github.com/nearai/ironclaw/issues/5571) shows that upstream throttling from the Exa MCP results in an `invalid_output` error that cascades and aborts the entire agent turn. *Fix Status: Addressed in [PR #5573](https://github.com/nearai/ironclaw/pull/5573).*
*   **[P1 Critical] Slack Integration Failures:** Automations are failing to read Slack DMs due to missing capabilities ([Issue #5522](https://github.com/nearai/ironclaw/issues/5522)), and delivery targets are failing to register despite active connections ([Issue #5508](https://github.com/nearai/ironclaw/issues/5508)). 
*   **[P2 High] Checkpoint Port Failures:** Issue [#5572](https://github.com/nearai/ironclaw/issues/5572) reveals that hooks-enabled coordinator turns fail at the Checkpoint stage due to un-forwarded payloads, effectively breaking execution hooks.
*   **[P2 High] UI/UX Regressions:** A bug bash uncovered multiple frustrating UI bugs, including chat creation latency scaling with history ([Issue #5509](https://github.com/nearai/ironclaw/issues/5509)), mobile layout overflow ([Issue #5554](https://github.com/nearai/ironclaw/issues/5554)), and overlapping UI buttons ([Issue #5555](https://github.com/nearai/ironclaw/issues/5555)).

## 6. Feature Requests & Roadmap Signals
Based on recent issue creation and draft PRs, the immediate roadmap is heavily focused on the **WebUI-v2 Automations experience** and **Reborn multi-tenancy**:
*   **Decoupled Outbound Channels:** A major proposal ([PR #5566](https://github.com/nearai/ironclaw/pull/5566)) seeks to decouple outbound channels from routine output, making the WebUI a first-class communication thread. 
*   **Admin Tool Credentialing:** Expanding on the highly requested WASM tool configurations, [PR #5513](https://github.com/nearai/ironclaw/pull/5513) introduces an admin UI for tenant-shared tool credentials. We predict this, alongside the WASM zip installer ([PR #5499](https://github.com/nearai/ironclaw/pull/5499)), will be flagship features in the next release.
*   **Agent Output Refinement:** [PR #5568](https://github.com/nearai/ironclaw/pull/5568) enables a dormant "final-answer nudge" to make agent responses more concise—a highly requested UX feature for agent platforms.

## 7. User Feedback Summary
Real-world testing feedback over the last 24 hours points to some clear dissatisfaction with agent execution transparency and UI reliability. Users are frustrated by **opaque error messages** ([Issue #5552](https://github.com/nearai/ironclaw/issues/5552)), where multiple tool failures result in a generic "invalid result" rather than actionable debugging info. Furthermore, users are experiencing **hallucination compliance** ([Issue #5558](https://github.com/nearai/ironclaw/issues/5558)), where the vision model accepts false corrections without re-analyzing images. Routine outputs are also bleeding internal chain-of-thought into external channels ([Issue #5551](https://github.com/nearai/ironclaw/issues/5551)), indicating that users need sharper boundaries between agent "thinking" and agent "delivery."

## 8. Backlog Watch
*   **[Action Required] E2E Test Failures:** The nightly E2E run is failing as reported by GitHub Actions in [Issue #4108](https://github.com/nearai/ironclaw/issues/4108). This has been open since late May and needs immediate CI/CD attention to ensure reliable merges.
*   **[Attention Needed] Idempotency Scope Mismatch:** Issue [#5527](https://github.com/nearai/ironclaw/issues/5527) reveals a production mismatch where owner-scope writes and system-scope reads never align, leaving early replay-before-policy features effectively dead in production.
*   **[Under Review] Thread Pagination Overload:** [PR #5542](https://github.com/nearai/ironclaw/pull/5542) addresses a scaling issue where automation threads dominate the thread list, requiring backend-side pagination filtering. This needs a swift review as it impacts core chat navigability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the provided GitHub data.

# LobsterAI Project Digest
**Date:** 2026-07-03
**Repository:** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

### 1. Today's Overview
LobsterAI is demonstrating highly active development alongside an aging, unaddressed community bug backlog. Over the past 24 hours, maintainers successfully merged 7 pull requests, primarily focusing on UI/UX refinements, DeepSeek prompt caching optimizations, and critical stability fixes. However, the 5 issues updated today remain open and marked as `[stale]`, indicating a disconnect between community-reported bugs (some dating back to April 2026) and the core development cycle. While the engineering velocity is robust and improving system stability, community support and issue triage require immediate attention.

### 2. Releases
**None.** No new versions or releases were published in the last 24 hours. Development remains on the main branch with continuous integration of fixes and features.

### 3. Project Progress
The development team closed 7 PRs, showing strong momentum in refining the renderer, main engine, and OpenClaw integrations:
*   **UI & UX Enhancements:** PR [#2257](https://github.com/netease-youdao/LobsterAI/pull/2257) unified the engine startup screen into a single, continuous splash screen, eliminating UI flickering during initialization. PR [#2259](https://github.com/netease-youdao/LobsterAI/pull/2259) optimized the engine failure overlay.
*   **AI Integration & Performance:** PR [#2258](https://github.com/netease-youdao/LobsterAI/pull/2258) stabilized DeepSeek prompt caching in long sessions by preventing aggregate tool-result rewriting, ensuring byte-stability for provider prefix caches.
*   **Stability Fixes:** PR [#2252](https://github.com/netease-youdao/LobsterAI/pull/2252) fixed a white-screen crash triggered when deleting the currently active custom model/provider in the settings menu.

### 4. Community Hot Topics
The most actively updated issues revolve around task scheduling and agent reliability:
*   **Scheduled Task Management ([#1358](https://github.com/netease-youdao/LobsterAI/issues/1358)):** Users reported that clicking scheduled tasks yields zero interactive feedback, leaving them unsure if the task was successfully initiated. This highlights a strong need for better UI event acknowledgment.
*   **Agent Lifecycle and Persistence ([#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)):** A critical workflow failure where deleted tasks (like sending automated messages to colleagues on Popo) resurrect upon application restart.

### 5. Bugs & Stability
Ranked by severity based on today's data:
1.  **High - System Crash/Blue Screen ([#1354](https://github.com/netease-youdao/LobsterAI/issues/1354)):** Launching `pageant` via the assistant intermittently causes a fatal Windows Blue Screen of Death (BSOD).
2.  **High - Task Resurrection ([#1359](https://github.com/netease-youdao/LobsterAI/issues/1359)):** Deleted tasks persist in the local state and reappear after restarting the app, causing potential spam and confusion.
3.  **Medium - Tool Execution Failure ([#1357](https://github.com/netease-youdao/LobsterAI/issues/1357)):** The agent hallucinates execution, claiming `pageant` has been started when it actually hasn't.
4.  **Low - Settings White Screen:** As noted in the community, deleting active providers caused crashes, but this has been proactively fixed today via merged PRs [#2252](https://github.com/netease-youdao/LobsterAI/pull/2252) and [#2256](https://github.com/netease-youdao/LobsterAI/pull/2256).

### 6. Feature Requests & Roadmap Signals
*   **Actionable Feedback Signals:** Issue [#1360](https://github.com/netease-youdao/LobsterAI/issues/1360) requests duplicate naming validation for custom Agents. This is a standard UX safeguard currently missing from the "My Agent" creation flow.
*   **Predictions for Next Version:** Based on the merged PRs and open issues, the next release will likely feature a heavily refined notification/scheduled task system (fixing the "Do Not Notify" channel bug in PR [#2255](https://github.com/netease-youdao/LobsterAI/pull/2255)) and a smoother, crash-resistant application boot sequence.

### 7. User Feedback Summary
*   **Use Cases:** Users are heavily utilizing LobsterAI for OS-level automations (starting local executables like `pageant`) and workplace automations (sending scheduled messages to colleagues via NetEase Popo).
*   **Pain Points:** Users express frustration over agent "hallucinations" (claiming an action succeeded when it failed) and application state reliability. 
*   **Satisfaction:** While users appreciate the automation capabilities, trust is currently eroded by severe bugs (like resurrected tasks and BSODs) and poor feedback loops (no visual confirmation for scheduled tasks).

### 8. Backlog Watch
*   **Urgent Triage Needed:** All 5 issues updated today ([#1354](https://github.com/netease-youdao/LobsterAI/issues/1354), [#1357](https://github.com/netease-youdao/LobsterAI/issues/1357), [#1358](https://github.com/netease-youdao/LobsterAI/issues/1358), [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359), [#1360](https://github.com/netease-youdao/LobsterAI/issues/1360)) are 3 months old and labeled `[stale]`. 
*   **Action Item:** Maintainers need to verify if the recent merged PRs regarding settings, task notifications, and renderer stability resolve these older issues. If not, these system-critical bugs (especially the BSOD and resurrected tasks) require explicit assignment and milestone tagging.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the structured project digest for Moltis based on the provided GitHub data.

### 1. Today's Overview
As of 2026-07-03, the Moltis project demonstrates focused, active development with moderate community engagement. Over the past 24 hours, the project recorded no new releases and zero open or closed issues, but successfully processed 3 pull requests. The development pipeline is currently highly concentrated on expanding Large Language Model (LLM) provider compatibility and resolving complex messaging routing behaviors. With two new feature PRs opened and one critical bug fix merged, the project maintains a healthy, forward-moving trajectory without visible signs of instability or backlog stagnation.

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Development activity today successfully advanced the platform's messaging gateway reliability and LLM agnostic capabilities:
*   **[MERGED/CLOSED] fix(whatsapp): deliver replies to @lid chats via PN JID rewrite** ([PR #1116](https://github.com/moltis-org/moltis/pull/1116)): A significant bug fix dating back to mid-June was finally resolved. This fix ensures that agent-generated replies to privacy-enabled senders (using @lid chats) are actually delivered by rewriting the Phone Number (PN) JID, preventing messages from being silently dropped.

### 4. Community Hot Topics
The most notable community activity today revolves around enhancing the platform's extensibility and adapting to third-party API changes:
*   **[PR #1143](https://github.com/moltis-org/moltis/pull/1143) (Add Requesty as an OpenAI-compatible provider):** Authored by Thibaultjaigu, this PR introduces Requesty (an OpenAI-compatible LLM router) to Moltis. It highlights the community's strong desire to plug various LLM routing services into the agent framework easily.
*   **[PR #1144](https://github.com/moltis-org/moltis/pull/1144) (bump whatsapp-rust 0.5 -> 0.6 with LID-native addressing):** Authored by juanlotito, this reflects a vital infrastructure upgrade. It underscores the ongoing, often invisible work required to maintain integrations with strict platforms like WhatsApp as they migrate underlying architectures (in this case, moving to LID-native addressing).

### 5. Bugs & Stability
*   **High Severity / Resolved:** Replies sent to privacy-enabled senders (@lid chats) on WhatsApp were silently dropping without delivering the message or a read receipt. This was a critical failure in the agent-to-user communication loop. **Status:** Fixed and closed via [PR #1116](https://github.com/moltis-org/moltis/pull/1116).
*   **No New Bugs:** Zero new bug reports or crash regressions were filed in the last 24 hours, indicating stable recent builds.

### 6. Feature Requests & Roadmap Signals
Based on today's PR pipeline, the immediate roadmap signals point toward:
*   **Expanded LLM Router Support:** The addition of Requesty ([PR #1143](https://github.com/moltis-org/moltis/pull/1143)) indicates that upcoming versions will likely feature broader, table-driven support for various LLM routing services (similar to OpenRouter).
*   **Modernized WhatsApp Infrastructure:** The transition to `whatsapp-rust` 0.6 ([PR #1144](https://github.com/moltis-org/moltis/pull/1144)) signals a preparation phase to natively support WhatsApp's latest LID addressing system, permanently moving away from legacy 0.5 dependencies. Both of these features are strong candidates for the next minor version release.

### 7. User Feedback Summary
While direct user feedback (issues) was at zero today, the developer contributions highlight clear use cases and pain points:
*   **Pain Point:** Deploying Moltis as a WhatsApp agent has been historically fragile due to WhatsApp's privacy (LID) updates silently breaking message delivery.
*   **Use Case:** Developers are actively seeking to route their AI agent logic through specialized LLM routers (like OpenRouter and Requesty) rather than direct provider APIs, likely for cost-management, load balancing, or model A/B testing.

### 8. Backlog Watch
The project's issue and PR backlog appears to be in a healthy state. There are no long-unanswered issues accumulating (0 open issues updated today). The only item requiring final maintainer attention is the successful review and merging of the two currently open PRs ([#1143](https://github.com/moltis-org/moltis/pull/1143) and [#1144](https://github.com/moltis-org/moltis/pull/1144)) to clear the current development queue.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the structured project digest for CoPaw (QwenPaw) based on the GitHub data from 2026-07-03.

### 1. Today's Overview
The CoPaw (QwenPaw) project is exhibiting exceptionally high development velocity and community engagement as it iterates towards its major v2.0.0 release. Over the last 24 hours, the project processed 25 issues (closing 9) and handled an impressive 50 pull requests (merging/closing 27), indicating a very healthy and active maintainer core. The recent rollout of `v2.0.0-beta.2` has successfully unblocked a wave of community feature contributions, particularly in the areas of security, UX, and channel integrations. However, the rapid iteration has also surfaced critical v2.0 regressions and underlying v1.x memory/context management bottlenecks that require immediate attention.

### 2. Releases
*   **[v2.0.0-beta.2](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.2)**
    *   **Details:** This is an early beta release intended for developers and early adopters, explicitly marked as *not ready for production use*. 
    *   **Changes & Features:** Introduces new CLI capabilities, specifically the `cron up` command for scheduled tasks.
    *   **Warnings:** Users should expect potential instability and breaking changes as active development continues.

### 3. Project Progress
Significant architectural and feature advancements were merged or closed today, pushing the ecosystem forward:
*   **UI & UX Enhancements:** The Agents settings page received a readability overhaul ([PR #5620](https://github.com/agentscope-ai/QwenPaw/pull/5620)), and legacy desktop packaging transitions began with a pipeline switch to Tauri ([PR #5734](https://github.com/agentscope-ai/QwenPaw/pull/5734)).
*   **Runtime & Logic Fixes:** Maintainers merged a critical fix for the goal mode gate architecture and scope filtering, ensuring universal handlers evaluate correctly ([PR #5727](https://github.com/agentscope-ai/QwenPaw/pull/5727)). A fix to prevent context compaction crashes when summaries exceed schema lengths was also finalized ([PR #5287](https://github.com/agentscope-ai/QwenPaw/pull/5287)).
*   **Provider Support:** Merged a fix to avoid treating provider content safety image errors (like MiniMax's) as media capability failures ([PR #5533](https://github.com/agentscope-ai/QwenPaw/pull/5533)).
*   **Infrastructure:** CI fixes for macOS bash 3.2 guards were deployed ([PR #5743](https://github.com/agentscope-ai/QwenPaw/pull/5743)), and multi-dimensional rate limiting/crash protection was added ([PR #5738](https://github.com/agentscope-ai/QwenPaw/pull/5738)).

### 4. Community Hot Topics
*   **[Issue #5705](https://github.com/agentscope-ai/QwenPaw/issues/5705) (6 comments):** A deep-dive feature request highlighting gaps in QwenPaw's secret key desensitization. The community is actively discussing how environment variable fallbacks aren't fully covering all channels and how dialog/ReMe logs are exposing sensitive keys.
*   **[Issue #5630](https://github.com/agentscope-ai/QwenPaw/issues/5630) (8 comments):** A request to support custom BaseURLs for Telegram channels, indicating heavy community usage of Telegram bot deployments in regions requiring proxying.
*   **[Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) (4 comments):** A highly detailed root-cause analysis submitted by a user regarding a severe memory leak in v1.1.12. The user identified that orphaned asynchronous tasks and unclosed HTTP sessions eventually trigger heartbeat timeouts and database corruption.

### 5. Bugs & Stability
*   🔴 **High Severity: Severe Memory Leak & DB Corruption ([Issue #5720](https://github.com/agentscope-ai/QwenPaw/issues/5720))**
    *   *Details:* In v1.1.12, memory gradually increases (~5.5MB/min) due to uncleaned background tasks and agent HTTP sessions, leading to process kills and corrupted local databases.
*   🔴 **High Severity: 2.0 Beta Context Eviction ([Issue #5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) | [PR #5747](https://github.com/agentscope-ai/QwenPaw/pull/5747))**
    *   *Details:* The new `scroll` context strategy in v2.0.0-beta.2 erroneously compacts the *active* task turn, causing the agent to abruptly "forget" current instructions and hallucinate older contexts.
    *   *Status:* Fix PR submitted.
*   🟠 **Medium Severity: Agent Hangs on Tool Failure ([Issue #5748](https://github.com/agentscope-ai/QwenPaw/issues/5748) | [PR #5749](https://github.com/agentscope-ai/QwenPaw/pull/5749))**
    *   *Details:* Tool execution exceptions cause the consumer queue to block indefinitely, leaving the typing indicator spinning forever.
    *   *Status:* Fix PR submitted.
*   🟠 **Medium Severity: ChromaDB Index Bloat ([Issue #4795](https://github.com/agentscope-ai/QwenPaw/issues/4795))**
    *   *Details:* Vector index膨胀 to 37GB after 3 months of use, crashing `memory_search` every 30 minutes.

### 6. Feature Requests & Roadmap Signals
Several highly supported PRs hint at what will land in the next GA or patch releases:
*   **Advanced Security & Config:** Direct community work on environment variable resolution (`${ENV_VAR}`) in JSON configs and dialog log sanitization is nearly ready ([PR #5740](https://github.com/agentscope-ai/QwenPaw/pull/5740), [PR #5741](https://github.com/agentscope-ai/QwenPaw/pull/5741), [PR #5745](https://github.com/agentscope-ai/QwenPaw/pull/5745)).
*   **Automated Model Fallbacks:** A backend feature to automatically switch to backup LLMs if the primary model hits rate limits or permission errors ([PR #5597](https://github.com/agentscope-ai/QwenPaw/pull/5597), [Issue #5718](https://github.com/agentscope-ai/QwenPaw/issues/5718)).
*   **Enhanced Memory Search:** An under-review PR adding a dedicated reranker API stage on top of reme0.4's hybrid BM25 + vector retrieval ([PR #5692](https://github.com/agentscope-ai/QwenPaw/pull/5692)).
*   **Prediction:** The v2.0.0 stable release will almost certainly prioritize context-protection anchors, consumer timeouts, and these rigorous config/log security hardening features.

### 7. User Feedback Summary
*   **Pain Points:** Users operating QwenPaw in headless or containerized environments are frustrated by the lack of CLI depth ([Issue #5737](https://github.com/agentscope-ai/QwenPaw/issues/5737)) and UI blocking, such as the browser lagging heavily during streaming outputs ([Issue #5725](https://github.com/agentscope-ai/QwenPaw/issues/5725)) or browser autofills hijacking admin search fields ([Issue #5403](https://github.com/agentscope-ai/QwenPaw/issues/5403)). Another major pain point is the lack of basic password protection for the Web Console ([Issue #5715](https://github.com/agentscope-ai/QwenPaw/issues/5715)).
*   **Use Cases:** There is a massive uptick in users building **multi-agent ecosystems** via Feishu (Lark). Users are deploying multiple bot accounts in shared group chats to interact with each other. Consequently, they are hitting logical bottlenecks: bots ignoring bot @mentions ([Issue #5709](https://github.com/agentscope-ai/QwenPaw/issues/5709)), broken interactive card parsing ([Issue #5708](https://github.com/agentscope-ai/QwenPaw/issues/5708)), and losing sender identity in shared group sessions ([Issue #5721](https://github.com/agentscope-ai/QwenPaw/issues/5721)).

### 8. Backlog Watch
*   **[Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) (Open since June 1):** A critical bug where launching two subagents simultaneously causes the main agent to enter an infinite, high-frequency polling loop, which cannot be interrupted from the Feishu channel. Still active and unresolved.
*   **[PR #5525](https://github.com/agentscope-ai/QwenPaw/pull/5525) (Open since June 25):** A first-time contributor PR implementing a native Windows sandbox. Given that memory leaks and tool-hangs deeply affect Windows users (as seen in #5720), this security layer requires maintainer review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the structured project digest for ZeroClaw based on the GitHub data provided for July 3, 2026.

### 1. Today's Overview
ZeroClaw is demonstrating exceptionally high development velocity and community engagement, processing 37 issues and 50 pull requests in the last 24 hours alone. The project is currently in a major active development phase, heavily focused on hardening security (path traversal, zip bombs, auth), improving multi-tenancy (per-agent environments), and expanding integration channels. With 27 PRs merged or closed, maintainers are effectively clearing the backlog and advancing architectural RFCs. However, the issue tracker shows growing pains typical of a rapidly expanding open-source AI project, notably concerning multi-agent memory management, Windows compatibility gaps, and provider serialization edge cases.

### 2. Releases
*No new releases were published in the last 24 hours. The project appears to be actively accumulating changes on the `master` branch, likely in preparation for a future milestone release (potentially v0.9.0 based on active trackers).*

### 3. Project Progress
A massive amount of code made it through the review pipeline today, including critical security hardening and architectural refactors:
*   **Channel & SOP Ingress Expansions:** The team merged the stacked PR series for Git forge channels. [PR #8609](https://github.com/zeroclaw-labs/zeroclaw/pull/8609) (GitHub provider) and [PR #8611](https://github.com/zeroclaw-labs/zeroclaw/pull/8611) (Gitea/Forgejo provider) landed, adding channel-sourced SOP ingress. 
*   **Security Hardening:** [PR #8628](https://github.com/zeroclaw-labs/zeroclaw/pull/8628) fixed a path traversal vulnerability in WeChat local attachments. [PR #8574](https://github.com/zeroclaw-labs/zeroclaw/pull/8574) added regression tests for zip-bomb inflation guards.
*   **Memory Architecture:** [PR #8619](https://github.com/zeroclaw-labs/zeroclaw/pull/8619) implemented unified memory-context injection keyed on TurnOrigin ingress provenance, advancing the multi-agent memory story.
*   **Observability & Logging:** [PR #8437](https://github.com/zeroclaw-labs/zeroclaw/pull/8437) refactored the JSONL write pipeline into a testable helper.

### 4. Community Hot Topics
*   **MCP Tool Discoverability is Broken:** [Issue #8193](https://github.com/zeroclaw-labs/zeroclaw/issues/8193) (14 comments, S1 workflow blocked) highlights that while gateway sees MCP tools, `zerocode` TUI sessions do not receive them. This is severely impacting agent workflows and points to a disconnect between the gateway and the TUI wire layer.
*   **CI and Governance Updates:** [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (13 comments) outlines the accepted RFC for Work Lanes, Board Automation, and Label Cleanup. The community is highly engaged in how the project routes work and automates project management moving forward.
*   **Multi-Tenant Isolation Needs:** [Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) (5 comments) sparked discussion around per-agent custom environment variables, specifically resolving token multi-tenancy across shared MCP instances.

### 5. Bugs & Stability
Ranked by severity, here are the top stability threats reported:
*   **S0 - Data Loss / Security:** [Issue #5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) - Consecutive Out of Memory (OOM) crashes in WSL2. The daemon is being killed by the OS, representing a severe stability flaw for power users.
*   **S1 - CI / Workflow Blocked:** [Issue #8632](https://github.com/zeroclaw-labs/zeroclaw/issues/8632) - Source installs with `embedded-web` fail because the gateway build script triggers before the web API client TypeScript files are generated.
*   **S2 - Provider Compatibility:** [Issue #6302](https://github.com/zeroclaw-labs/zeroclaw/issues/6302) - Gemini models return HTTP 400 because ZeroClaw emits an `assistant` tool_call before the first `user` turn, violating Gemini's strict wire API invariants.
*   **S2 - Windows Stability:** [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) - 74 test failures on Windows (code page 936) due to Unix-only test commands and path semantics, showing a gap in cross-platform CI coverage.

### 6. Feature Requests & Roadmap Signals
*   **OpenAI Compatibility Layer:** Two highly visible requests ([Issue #8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) and [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) ask for an OpenAI-compatible Chat Completions endpoint. This would allow drop-in integration with UIs like Open WebUI and LobeChat, strongly signaling this will be a priority for v0.9.0.
*   **Wire-Protocol-First Providers:** [Issue #8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) proposes an RFC to make `wire_api` the primary organizing axis for providers, aiming to eliminate the serialization bugs seen with providers like Gemini and vLLM.
*   **Agent Evaluation Harness:** [Issue #7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) requests `zeroclaw eval`, a first-class deterministic replay and live grading mode for agent behavior—a crucial maturation step for production deployments.

### 7. User Feedback Summary
*   **Pain Points:** Users are frustrated by silent data/formatting losses. For example, [Issue #8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) notes that the compatible provider silently deletes content via unconditional `<think>` tag stripping. Another pain point is the broken "pull a skill and use it" flow reported in [Issue #8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334), which breaks the expected user experience for multi-agent installs.
*   **Use Cases:** There is heavy community interest in using ZeroClaw as a backend for multi-channel communication and custom UIs (WhatsApp location pins [PR #8427](https://github.com/zeroclaw-labs/zeroclaw/pull/8427), Git forge integrations).
*   **Sentiment:** Dissatisfaction is primarily directed at CI bottlenecks ([Issue #7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108), 15-20m wait times) and config validation gaps. Overall, sentiment remains highly collaborative, with users actively submitting comprehensive RFCs and architectural deep-dives.

### 8. Backlog Watch
*   **[Issue #6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250)** (Created May 1): Request to extract `require_auth` to route-layer middleware. Despite being an S1 security/quickstart priority, it is still awaiting implementation.
*   **[Issue #8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044)** (Created Jun 20): Request to harden `/model --agent` scope with per-sender authorization to prevent unauthorized model switching. Needs immediate maintainer attention given the high security risk.
*   **[PR #7905](https://github.com/zeroclaw-labs/zeroclaw/pull/7905)** (Created Jun 17): Adds cron run history and trigger to the TUI via RPC. A medium-sized enhancement sitting open for two weeks; needs a review push to unblock TUI dashboard features.

</details>