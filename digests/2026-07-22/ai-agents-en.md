# OpenClaw Ecosystem Digest 2026-07-22

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-21 22:16 UTC

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

Here is the project digest for OpenClaw based on the GitHub data provided for July 22, 2026.

### 1. Today's Overview
OpenClaw is experiencing an exceptionally high level of development and community engagement, processing exactly 500 issue updates and 500 pull request updates in the last 24 hours. The maintainers are actively pushing the platform's boundaries, focusing heavily on enterprise readiness, complex agentic workflows, and robust multi-channel messaging. Activity is highlighted by major architectural refactoring (PRs by `steipete`), new UI dashboards, and crucial security hardening discussions. Despite the immense throughput, there is a visible backlog of complex bugs related to local LLM integrations and session state management that the community is eager to see resolved.

### 2. Releases
No new releases were recorded in this 24-hour cycle. Development appears focused on merging incremental fixes and merging foundational refactoring ahead of the next stable launch.

### 3. Project Progress
Development today was marked by major feature drops and deep architectural improvements:
*   **Web UI & Dashboard Enhancements:** Significant work landed for the Gateway Control UI, including a new session observer HUD, sidebar subtitles, and routable WorkBoards ([PR #112260](https://github.com/openclaw/openclaw/pull/112260), [PR #112302](https://github.com/openclaw/openclaw/pull/112302)).
*   **Channel Architecture Refactoring:** Core channel setup interfaces were significantly shrunk to a generic envelope with a deprecated compatibility tier, cleaning up legacy technical debt ([PR #112319](https://github.com/openclaw/openclaw/pull/112319)).
*   **Cron & Sub-agent Delivery:** Important fixes were merged regarding cron script limits and durable source identity, alongside fixes for sub-agent completion delivery accounting ([PR #112415](https://github.com/openclaw/openclaw/pull/112415), [PR #112387](https://github.com/openclaw/openclaw/pull/112387), [PR #95847](https://github.com/openclaw/openclaw/pull/95847)).
*   **macOS Privacy & UX:** Privacy boundaries were tightened in the macOS app, now requiring explicit consent for privacy-sensitive accesses like Voice Wake ([PR #112321](https://github.com/openclaw/openclaw/pull/112321)).

### 4. Community Hot Topics
The community is highly focused on security boundaries, agentic memory, and multi-channel routing:
*   **[Issue #10659](https://github.com/openclaw/openclaw/issues/10659) (15 comments): Masked Secrets Feature.** Users are highly invested in creating a system where agents can *use* API keys without *seeing* them, mitigating prompt injection attacks.
*   **[Issue #101290](https://github.com/openclaw/openclaw/issues/101290) (13 comments): macOS SQLite DB Corruption.** A major P0 regression introduced in v2026.6.6 where health-check commands corrupt the state DB. High user frustration.
*   **[Issue #86996](https://github.com/openclaw/openclaw/issues/86996) (11 comments): Codex & Active Memory Latency.** Heated discussion around severe latency and event-loop stalls when using memory backend integrations with OpenAI/Codex models.
*   **[Issue #20786](https://github.com/openclaw/openclaw/issues/20786) (9 comments, 6 👍): Telegram Business Bot Support.** Strong demand for integrating OpenClaw bots with Telegram Business-connected personal chats.

### 5. Bugs & Stability
Several high-severity regressions and bugs are currently impacting stability:
*   **P0 - SQLite State DB Corruption:** ([Issue #101290](https://github.com/openclaw/openclaw/issues/101290)) CLI startup preflight corrupts `openclaw.sqlite` while the gateway is running, causing data loss. Marked as a beta release blocker.
*   **P1 - llama.cpp Tool Calling Broken:** ([Issue #108473](https://github.com/openclaw/openclaw/issues/108473)) & ([Issue #106779](https://github.com/openclaw/openclaw/issues/106779)) Regressions in v2026.7.1 broke tool-calling entirely for local llama.cpp providers due to parser generation failures and unanchored regex patterns.
*   **P1 - Tool Parameter Dropping:** ([Issue #53408](https://github.com/openclaw/openclaw/issues/53408)) After long conversations (15+ turns), `write` and `exec` tools silently drop parameters, resulting in empty arguments and failed executions.
*   **Fix PR Available:** The memory/Codex latency bug ([Issue #86996](https://github.com/openclaw/openclaw/issues/86996)) has a corresponding fix progressing in [PR #89040](https://github.com/openclaw/openclaw/pull/89040), which addresses event-loop stalls during `embedded_run` bootstrap-context.

### 6. Feature Requests & Roadmap Signals
Based on user proposals and PRs, the upcoming roadmap strongly signals a push toward **enterprise security** and **infrastructure flexibility**:
*   **Skill Sandboxing & Permissions:** Multiple highly-rated requests ([Issue #12219](https://github.com/openclaw/openclaw/issues/12219), [Issue #12678](https://github.com/openclaw/openclaw/issues/12678), [Issue #7722](https://github.com/openclaw/openclaw/issues/7722)) are begging for a standard `skill.yaml` permission manifest, capability-based tool restrictions, and filesystem sandboxing to defend against malicious prompt injections.
*   **Cloud & Deployment UX:** Users want first-class cloud guides ([Issue #13597](https://github.com/openclaw/openclaw/issues/13597)) and safer update mechanisms with auto-rollback ([Issue #14526](https://github.com/openclaw/openclaw/issues/14526)).
*   **Advanced Memory Control:** Demand for session snapshots to A/B test prompts ([Issue #13700](https://github.com/openclaw/openclaw/issues/13700)) and better context management to reduce tool schema token bloat ([Issue #14785](https://github.com/openclaw/openclaw/issues/14785)).

### 7. User Feedback Summary
OpenClaw users are deploying highly complex, multi-agent pipelines across diverse messaging platforms (Telegram, Discord, WhatsApp, Feishu). 
*   **Pain Points:** The primary dissatisfaction stems from **context degradation** over long sessions (tools dropping parameters) and **local model breakage** (llama.cpp regressions). Furthermore, onboarding is seen as too difficult, with critical features like memory/embedding setup missing from the wizard ([Issue #16670](https://github.com/openclaw/openclaw/issues/16670)).
*   **Satisfaction:** Users love the power of the sub-agent routing and tool ecosystem but want more granular control. The fast iteration on UI features (HUD, workboards) and proactive security tightening (macOS privacy consents) are well-received.

### 8. Backlog Watch
Several critical items are stalling and urgently need maintainer product decisions:
*   **[Issue #10659](https://github.com/openclaw/openclaw/issues/10659)** (Open since Feb 6): Masked secrets feature. Given the rising threat of prompt injection, this P1 enhancement is vital and needs a final security review.
*   **[Issue #90840](https://github.com/openclaw/openclaw/issues/90840)** (Open since Jun 6): Subagent raw output being delivered directly to end-users (Discord/QQBot) instead of a summarized parent response is a severe UX regression that remains unresolved.
*   **[Issue #94147](https://github.com/openclaw/openclaw/issues/94147)** (Closed/Stale): The macOS desktop app bug where `CLLocationManager` is rebuilt every second, causing an infinite loop of TCC privacy permission requests, was closed but represents a deeply intrusive bug if still prevalent in production.

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report based on the July 22, 2026 community digests.

### 1. Ecosystem Overview
The open-source personal AI assistant and agent ecosystem is currently experiencing a phase of hyper-active iteration, characterized by massive architectural refactoring and a strong pivot towards enterprise readiness. Projects are moving rapidly beyond simple chat interfaces, focusing heavily on complex agentic workflows, multi-channel messaging integrations (Telegram, Discord, Matrix), and autonomous execution loops. A dominant theme across the landscape is the aggressive hardening of security boundaries—specifically filesystem sandboxing, tool governance, and secret masking—to mitigate the inherent risks of autonomous LLM agents. Meanwhile, developers are actively wrestling with the growing pains of state management and memory optimization under heavy concurrent workloads.

### 2. Activity Comparison
*Health Score is calculated based on issue/PR throughput, bug resolution velocity, and community engagement.*

| Project | Issues (Processed/Active) | PRs (Processed/Active) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 500 updates | 500 updates | No release (Pre-stable) | 🟢 Excellent |
| **CoPaw** | 41 (~51% closed) | 46 | **v2.0.1-beta.1** | 🟢 Excellent |
| **IronClaw** | 43 (13 closed) | 50 (16 merged) | **v1.0.0-rc.1** | 🟢 Excellent |
| **Hermes Agent**| 50 | 50 (4 merged) | No release (v0.19.0) | 🟢 Good |
| **ZeroClaw** | 48 active | 41 active (9 merged) | No release | 🟡 Good (Debt piling) |
| **NanoBot** | 9 closed | 34 (22 merged) | No release | 🟢 Excellent |
| **LobsterAI** | Low | 10 (5 merged) | No release | 🟡 Stable |
| **PicoClaw** | 8 active | 8 active | No release (v0.3.1) | 🟡 Stable |
| **Moltis** | 0 | 1 (Dependabot) | No release | 🔴 Stagnant |
| **NanoClaw** | *Digest Failed* | *Digest Failed* | Unknown | ⚪ Unknown |
| **NullClaw, TinyClaw, ZeptoClaw** | 0 | 0 | No release | 🔴 Dormant |

### 3. OpenClaw's Position
OpenClaw operates at a massive scale compared to its peers, processing exactly 500 issue and 500 PR updates in a single day—dwarfing the activity of other actively developed projects like IronClaw and Hermes Agent. 
*   **Advantages:** OpenClaw is establishing itself as an enterprise-grade powerhouse. It leads in complex multi-agent routing, deep UI/dashboard integrations (HUD, WorkBoards), and native OS privacy refinements (macOS). Its community size provides immense bug-hunting bandwidth, though it currently suffers from a backlog.
*   **Technical Approach:** Unlike IronClaw (which relies on a tightly coordinated, ground-up Rust "Reborn" architecture) or ZeroClaw (focusing on an SOP engine), OpenClaw appears to be aggressively iterating on a legacy stack, balancing massive feature drops (channel architecture refactoring) with technical debt cleanup.
*   **Community:** The community is highly advanced, deploying complex pipelines across global messaging platforms (Telegram, Feishu, Discord). However, OpenClaw users are hitting scale-induced ceiling limits, such as severe context degradation over long sessions.

### 4. Shared Technical Focus Areas
Several critical requirements are emerging universally across the open-source agent landscape:
*   **Filesystem Sandboxing & Tool Governance:** Preventing unauthorized shell executions and directory traversals. *(NanoBot, PicoClaw, ZeroClaw, CoPaw)*
*   **Robust State Management & SQLite Stability:** Fixing database corruption, session lease leaks, and concurrency locks during heavy agent workloads. *(OpenClaw, Hermes Agent, CoPaw)*
*   **Human-in-the-Loop Execution Controls:** Implementing granular permission checks, multi-agent approval routing, and kill-switches (`/cancel-goal`). *(NanoBot, Hermes Agent, IronClaw, CoPaw)*
*   **Local Model / Ollama Performance:** Resolving massive latency overheads and broken tool-calling formats when running local inference. *(OpenClaw, NanoBot)*
*   **Token & Cost Optimization:** Supporting per-block prompt caching and allowing users to disable bloated built-in tool schemas. *(PicoClaw, CoPaw)*

### 5. Differentiation Analysis
*   **Target Audience:** OpenClaw and Hermes Agent are targeting power-users and enterprise deployers needing advanced multi-channel routing and multi-agent architectures. LobsterAI is focusing heavily on everyday end-user UX (Windows auto-updates, UI toggles, artifact sharing). 
*   **Architectural Paradigms:** IronClaw is undergoing a rigorous, ground-up rebuild (v1.0.0-rc.1) utilizing strict "Capability Dispatch" and Configuration-as-Code. ZeroClaw is leaning into autonomous orchestration via its "Goal Mode" and Standard Operating Procedure (SOP) engine. CoPaw is differentiating by integrating highly structured workflow modes (UltraQA, Autopilot, Team).
*   **Security Posture:** IronClaw and ZeroClaw are treating security as a foundational architectural constraint (origin-to-gate matrixes, authorized witnesses). In contrast, projects like NanoBot and PicoClaw are rapidly patching security features (filesystem containment bypasses, OAuth updates) as they scale.

### 6. Community Momentum & Maturity
*   **Tier 1: Rapidly Iterating / Hyper-Active (OpenClaw, IronClaw, CoPaw, Hermes Agent):** These projects have massive PR throughput. IronClaw and CoPaw are actively fighting through the friction of major v1.0/v2.0 stable release candidates, absorbing breaking changes to solidify their cores.
*   **Tier 2: Fast-Following / Bug-Squashing (NanoBot, ZeroClaw, PicoClaw):** These projects have highly responsive maintainers merging community PRs daily. NanoBot, for instance, boast an impressive merge rate (22/34 PRs). However, ZeroClaw is accumulating technical debt and needs to resolve stalled gateway PRs.
*   **Tier 3: Stable / Niche (LobsterAI):** Maintaining steady, incremental UI/UX updates without massive architectural upheaval.
*   **Tier 4: Stagnant / Dormant:** Moltis, NullClaw, TinyClaw, and ZeptoClaw show zero organic activity, relying solely on automated bots or sitting abandoned.

### 7. Trend Signals
For AI agent developers and technical decision-makers, today's digests highlight three major industry trends:
1.  **The Shift to Deterministic Memory:** Agent memory is moving away from simple append-only text files (like `MEMORY.md`) towards serialized, DB-backed, and snapshot-based memory systems to allow for A/B testing, state reversion, and context degradation prevention. *(Hermes Agent, OpenClaw)*
2.  **Multi-Tenancy & Provider Resilience:** As agents are deployed in enterprise settings via platforms like Telegram, Feishu, and Matrix, there is a massive demand for multi-account support, smart fallback routing during 503 errors, and cross-platform SSE stream reliability. *(Hermes Agent, PicoClaw, OpenClaw)*
3.  **Autonomous Error Recovery:** The frontier of agentic coding is moving from mere code generation to runtime resilience. Systems are expected to catch mid-run execution errors, feed the traceback back to the LLM, and autonomously recover without dropping the user's session state. *(IronClaw)*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the project digest for NanoBot based on the GitHub data from July 22, 2026.

### 1. Today's Overview
NanoBot is currently experiencing a period of exceptionally high development velocity and active community engagement. In the last 24 hours, the project processed 34 Pull Requests (merging 22) and resolved 9 issues, indicating a very healthy and responsive maintenance cycle. The core focus of this burst of activity centers on hardening system security, fixing memory leaks, and refining tool execution workflows. However, with 12 new PRs opened alongside 2 active bugs, maintainers are facing sustained pressure to review critical patches, particularly regarding filesystem containment and execution loop flaws. 

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Project Progress
Significant advancements were merged today, primarily focusing on architectural stability, provider compatibility, and security:
*   **Tool & Memory Management Fixes:** PR [#4663](https://github.com/HKUDS/nanobot/pull/4663) quarantined invalid tool results, fixing state corruption. Resource leaks were addressed, and process cleanup was improved to prevent orphaned subprocesses.
*   **Security & Configuration:** PR [#5010](https://github.com/HKUDS/nanobot/pull/5010) updated documentation to recommend environment variables over plaintext API keys. PR [#4984](https://github.com/HKUDS/nanobot/pull/4984) implemented atomic writes for `config.json` to prevent file corruption during crashes.
*   **Provider & Transcription Expansions:** ModelScope was added as a built-in provider via PR [#4965](https://github.com/HKUDS/nanobot/pull/4965). Voice processing received two major fixes: resolving environment variable interpolation for transcription keys (PR [#4989](https://github.com/HKUDS/nanobot/pull/4989)) and sanitizing UTF-16 surrogates to prevent provider request failures (PR [#4952](https://github.com/HKUDS/nanobot/pull/4952)).
*   **WebUI & Scheduling:** Cron scheduling parsing was fixed (PR [#4983](https://github.com/HKUDS/nanobot/pull/4983)), and the WebUI received updates to highlight skill references (PR [#5020](https://github.com/HKUDS/nanobot/pull/5020)).

### 4. Community Hot Topics
The most actively discussed issues highlight strong user demand for local model efficiency and robust tool execution:
*   **Ollama Performance Degradation (22 comments):** Issue [#4867](https://github.com/HKUDS/nanobot/issues/4867) details a 60-second delay per turn when using local Ollama models. This highlights a critical pain point for self-hosted users relying on local hardware (32GB VRAM). 
*   **Endless Loop in Tool Calling (4 comments):** Issue [#4864](https://github.com/HKUDS/nanobot/issues/4864) reports a severe bug where the `complete_goal` function enters an endless loop because the gateway misparses JSON parameters. This shows the community's reliance on complex, chained tool execution.
*   **Shell Execution Safety (1 comment):** Issue [#5013](https://github.com/HKUDS/nanobot/issues/5013) features a user requesting a human-in-the-loop confirmation step before the agent executes shell commands, reflecting growing concerns over autonomous agent safety in production environments.

### 5. Bugs & Stability
Today's bug reports were highly technical, focusing heavily on edge cases in memory management, security, and execution safety. Fix PRs already exist for most of them:
1.  **[P0] Filesystem Containment Bypass:** Under review in PR [#4987](https://github.com/HKUDS/nanobot/pull/4987). It fixes workspace validation for `read_file` and `edit_file` by binding checks to opened file handles to prevent path traversal.
2.  **[P1] Sustained-Goal Loops (Regression):** Reported in issue [#5022](https://github.com/HKUDS/nanobot/pull/5022). Agents get stuck in loops where system-level "continue" prompts override user "stop" commands. Addressed by the newly opened `/cancel-goal` command PR.
3.  **[P1] Qwen DashScope API Leak:** Issue [#4934](https://github.com/HKUDS/nanobot/issues/4934) exposes internal reasoning content in chat responses. Addressed in PR [#5023](https://github.com/HKUDS/nanobot/pull/5023).
4.  **[P1] Orphaned Subprocesses:** Reported in issue [#4794](https://github.com/HKUDS/nanobot/issues/4794), where gateway exits leave child processes running indefinitely. Fixed in PR [#5021](https://github.com/HKUDS/nanobot/pull/5021) to cascade termination on `/stop`.
5.  **[P2] OOM Crash on File Read:** Issue [#4785](https://github.com/HKUDS/nanobot/issues/4785) loads massive files directly into RAM before truncating. Fixed via PR [#4987](https://github.com/HKUDS/nanobot/pull/4987).

### 6. Feature Requests & Roadmap Signals
Recent PRs and issues suggest the next version will heavily feature UX safety and agent control:
*   **Granular Execution Control:** A prominent signal is the need for human-in-the-loop middleware. Issue [#5013](https://github.com/HKUDS/nanobot/issues/5013) and the new `/cancel-goal` command (PR [#5022](https://github.com/HKUDS/nanobot/pull/5022)) indicate a roadmap pivot towards giving users tighter real-time intervention capabilities.
*   **Model & Provider Flexibility:** Users want more native choices. PR [#4866](https://github.com/HKUDS/nanobot/pull/4866) introduces binding model presets directly to sessions, and PR [#5019](https://github.com/HKUDS/nanobot/pull/5019) adds support for Codex Fast mode.
*   **Explicit Context Loading:** PR [#5018](https://github.com/HKUDS/nanobot/pull/5018) finally enables direct callers to preload specific skills, pointing towards more deterministic agent behavior.

### 7. User Feedback Summary
Users are pushing NanoBot to its limits with long-running, automated tasks. The feedback reveals dissatisfaction with how the agent handles memory over time—specifically complaining about unbounded `Session.messages` lists (Issue [#4787](https://github.com/HKUDS/nanobot/issues/4787)) and poorly managed subprocess lifecycles. Self-hosters using Ollama are highly frustrated by latency issues that make the bot "totally unusable." Conversely, there is strong community satisfaction with the rapid turnaround on security vulnerabilities, such as the swift move away from plaintext API key storage and the patching of shell command bypasses.

### 8. Backlog Watch
Several critical, high-priority Pull Requests are currently stuck in an "Open" or "Conflict" state and require maintainer mediation to merge:
*   **PR [#4987](https://github.com/HKUDS/nanobot/pull/4987) (Priority P0, Conflict):** The filesystem containment fix is marked with a merge conflict. Given its P0 severity for preventing workspace escapes, this needs immediate attention.
*   **PR [#4963](https://github.com/HKUDS/nanobot/pull/4963) (Conflict):** A massive WebUI overhaul replacing raw tool logs with a unified "one-line activity language" using Streamdown. This large UX improvement is blocked by conflicts.
*   **PR [#4866](https://github.com/HKUDS/nanobot/pull/4866) (Priority P1):** The feature to bind model presets to sessions has been open since July 10th and needs final review to unstick users who require multi-model workflows.
*   **PR [#4941](https://github.com/HKUDS/nanobot/pull/4941) (Priority P1):** A critical regression fix for WebUI workspace scopes falling back to default paths after a restart has been open for a week.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for the Hermes Agent project based on the GitHub data from July 22, 2026.

## 1. Today's Overview
The Hermes Agent project is exhibiting extremely high community engagement and rapid development velocity, processing 50 issues and 50 pull requests in the last 24 hours. The maintainers and contributors are currently focused on a massive stability and performance sweep ahead of a stable release, as evidenced by the 46 open PRs targeting architectural refactors, database serialization, and UI fixes. A significant portion of recent bug reports surrounds cross-platform gateway messaging adapters (Windows/macOS compatibility) and state management (SQLite session leaks). The high PR-to-issue ratio indicates a healthy, contributor-driven phase aimed at consolidating recent features and hardening system boundaries. 

## 2. Releases
**No new releases were published in the last 24 hours.** 
*Note: The project is currently operating on v0.19.0, with active development seemingly paving the way for the next minor or major release.*

## 3. Project Progress
While only 4 PRs were merged/closed today, the development pipeline is flush with 46 highly targeted, open PRs addressing critical system flaws. Key advancements include:
*   **Telemetry & Observability:** Significant progress on observability infrastructure, specifically two PRs ([#68883](https://github.com/NousResearch/hermes-agent/pull/68883), [#68882](https://github.com/NousResearch/hermes-agent/pull/68882)) introducing privacy-safe Relay tool metrics and skill lifecycle tracking.
*   **Infrastructure Refactoring:** A major move to overhaul distribution and CI, with [PR #68217](https://github.com/NousResearch/hermes-agent/pull/68217) ripping out Homebrew/PyPI wheel support in favor of Docker/Nix, and [PR #66520](https://github.com/NousResearch/hermes-agent/pull/66520) migrating GitHub Actions to GKE self-hosted runners.
*   **Performance Optimization:** [PR #68891](https://github.com/NousResearch/hermes-agent/pull/68891) successfully narrows SQLite FTS update triggers to prevent disk I/O saturation during state compaction.

## 4. Community Hot Topics
The most active community discussions center around customizing agent constraints and persistent database issues.
*   **Configurable Memory Backends** ([Issue #47349](https://github.com/NousResearch/hermes-agent/issues/47349)): The most discussed issue (13 comments) focuses on renaming `MEMORY.md` and allowing users to disable hardcoded memory files in favor of specialized backends. *Underlying need:* Users want tighter control over the LLM's system prompt context window and token usage.
*   **Immutable Skills** ([Issue #25083](https://github.com/NousResearch/hermes-agent/issues/25083): 7 comments): Users are requesting a way to protect critical governance and safety skills from being modified by the agent itself. *Underlying need:* Trust and safety boundaries; users are running increasingly autonomous agents and need guarantees that core directives won't be bypassed.
*   **Plugin Initialization & Web Tools** ([Issue #27683](https://github.com/NousResearch/hermes-agent/issues/27683): 7 comments, Closed): Fresh installs were silently failing to execute web searches due to undiscovered plugins, showing that first-time user onboarding remains a friction point.

## 5. Bugs & Stability
Today's bug reports highlight severe edge cases in state management and OS-level integrations, ranked by severity:

*   **[P1] State DB Zeroed on Windows Update** ([Issue #68474](https://github.com/NousResearch/hermes-agent/issues/68474)): A critical bug where updating to v0.19.0 on Windows completely destroys the `state.db` SQLite file (replaced with 95MB of null bytes). 
*   **[P1] Worker Deadlock with Background Servers** ([Issue #68915](https://github.com/NousResearch/hermes-agent/issues/68915)): Using shell `&` to background a process (like a dev server) causes a permanent Python-level deadlock. 
    *   *Fix Status:* [PR #68948](https://github.com/NousResearch/hermes-agent/pull/68948) is open and addresses the terminal compound rewrite causing the deadlock.
*   **[P2] Kanban DB Index Corruption** ([Issue #34385](https://github.com/NousResearch/hermes-agent/issues/34385) & [Issue #53819](https://github.com/NousResearch/hermes-agent/issues/53819)): Under high concurrent-worker load, unserialized SQLite writes corrupt the Kanban database. 
    *   *Fix Status:* [PR #68343](https://github.com/NousResearch/hermes-agent/pull/68343) is open, aiming to serialize sticky blocks and fix bridge-managed receipts.
*   **[P2] Session Lease Leaks** ([Issue #68920](https://github.com/NousResearch/hermes-agent/issues/68920)): Desktop/TUI sessions leak active leases, eventually blocking users from starting new sessions. 
    *   *Fix Status:* Addressed today by [PR #68947](https://github.com/NousResearch/hermes-agent/pull/68947) and [PR #68949](https://github.com/NousResearch/hermes-agent/pull/68949).
*   **[P2] Gateway Platform Failures (Windows):** Multiple reports ([#68465](https://github.com/NousResearch/hermes-agent/issues/68465), [#68167](https://github.com/NousResearch/hermes-agent/issues/68167)) indicate Telegram and Signal adapters fail entirely on Windows due to HTTP/SSE incompatibilities.

## 6. Feature Requests & Roadmap Signals
Based on recent issues and PRs, the roadmap heavily leans into cross-platform gateway support and agent observability:
*   **New Messaging Platforms:** Requests for Block's newly open-sourced **Buzz** platform ([Issue #68871](https://github.com/NousResearch/hermes-agent/issues/68871)) and Atomic Hermes mobile support ([Issue #68951](https://github.com/NousResearch/hermes-agent/issues/68951)) signal a push to make Hermes a truly omnipresent, cross-platform assistant. [PR #68199](https://github.com/NousResearch/hermes-agent/pull/68199) is already refining Matrix approvals.
*   **Smarter Fallback Routing:** [Issue #68771](https://github.com/NousResearch/hermes-agent/issues/68771) requests that HTTP 503 provider errors trigger the fallback chain rather than just failing. This shows users are running Hermes in high-availability production setups.
*   **Tool Isolation:** [PR #68955](https://github.com/NousResearch/hermes-agent/pull/68955) introduces an MCP server discovery allowlist, preventing worker processes from needlessly booting up 50+ MCP watchdog children, saving massive system resources.

## 7. User Feedback Summary
**Pain Points:** Windows users are distinctly frustrated by broken event streams (Signal/Telegram) and catastrophic state loss during updates. Developers using Hermes for coding tasks report friction with terminal execution deadlocking when running dev servers. Additionally, advanced users feel constrained by hardcoded memory configurations and aggressive secret redaction (e.g., [Issue #68911](https://github.com/NousResearch/hermes-agent/issues/68911) redacting E.164 phone numbers) without opt-in toggles.
**Satisfaction:** Despite the severe P1 bugs, the community is highly engaged. The fact that users are testing complex multi-process SQLite workloads, headless gateway deployments, and MCP server integrations indicates strong enterprise/power-user adoption. The rapid community submission of fixes (e.g., webtecnica consistently patching CLI/Desktop bugs) shows a deeply invested and capable contributor base.

## 8. Backlog Watch
Maintainers need to address several aging, high-complexity items that are blocking future architecture work:
*   **[PR #20379] UI-TUI Widget Grid** (Open since May 5, 2026): A massive layout engine and theme overhaul for the TUI. It requires a maintainer decision to merge.
*   **[Issue #53819] Kanban DB Serialization** (Open since June 27, 2026): A confirmed root cause analysis exists for this concurrent-worker bug, but the serialization fix has yet to be officially merged into main, impacting heavy automation users.
*   **[Issue #25083] Protected Skills** (Open since May 13, 2026): A highly requested feature (7 comments) to prevent the agent from modifying governance rules. As autonomous agent task duration increases, this security boundary is becoming a critical necessity.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest (2026-07-22)

## 1. Today's Overview
PicoClaw exhibited highly active and healthy development over the past 24 hours, processing 8 issues and 8 pull requests. The community is heavily engaged in expanding channel integrations, refining LLM provider compatibility, and hardening security boundaries. Maintainers successfully merged key architectural improvements, including system execution policies and bot identity customizations. However, the rapid iteration has introduced OAuth integration regressions and highlighted performance bottlenecks in the Web UI that require immediate attention. Overall, the project's trajectory shows rapid maturation with strong community-led bug fixing.

## 2. Releases
*No new releases were published in the last 24 hours. The project remains on its latest stable versions (v0.2.8 - v0.3.1) while development focuses on the `main` branch.*

## 3. Project Progress
Several significant pull requests were closed/merged today, pushing the project's capabilities forward:
*   **Policy-Gated System Execution ([PR #3282](https://github.com/sipeed/picoclaw/pull/3282)):** A major security enhancement adding an opt-in `system.exec.v1` node companion. It enforces strict validation (working-root, environment, timeout) and executes direct canonical argv without a shell, greatly reducing injection risks.
*   **Customizable Bot Identity ([PR #303](https://github.com/sipeed/picoclaw/pull/303)):** Resolved a long-standing UX inconsistency by introducing a `bot_name` config field, allowing the `/start` greetings in Telegram and DingTalk to respect custom bot identities.
*   **Backward Compatibility Fixes ([PR #3233](https://github.com/sipeed/picoclaw/pull/3233)):** Cleaned up and merged backward compatibility fixes from previous patch attempts.
*   *Open PR progress includes active work on Anthropic prompt caching ([PR #3228](https://github.com/sipeed/picoclaw/pull/3228)) and Web UI default model fallback chains ([PR #3200](https://github.com/sipeed/picoclaw/pull/3200)).*

## 4. Community Hot Topics
*   **Migrating away from deprecated crypto libraries ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)):** This high-priority issue requesting a shift from `libolm` to `vodozemac` has accumulated 9 comments. It highlights the community's strong focus on foundational security and maintaining compliance with modern Matrix protocol standards.
*   **Antigravity (Google OAuth) Auth Block ([Issue #3278](https://github.com/sipeed/picoclaw/issues/3278)):** Google's recent decision to block PicoClaw's OAuth consent screen has sparked immediate developer action, resulting in a comprehensive fix attempt within 24 hours.
*   **Web UI Performance with Long Contexts ([Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)):** A newly reported issue highlighting severe input lag when chatting with long histories. This indicates that as users adopt PicoClaw for longer agentic workflows, frontend state management is becoming a critical pain point.

## 5. Bugs & Stability
Reported bugs today primarily revolve around recent regressions, third-party API changes, and provider-specific formatting issues:
1.  **[Critical] Google OAuth Policy Block ([Issue #3278](https://github.com/sipeed/picoclaw/issues/3278)):** Google is actively blocking the Antigravity provider's authentication. *Fix Status: Addressed via [PR #3280](https://github.com/sipeed/picoclaw/pull/3280).*
2.  **[High] Antigravity Provider Regression ([Issue #3274](https://github.com/sipeed/picoclaw/issues/3274)):** Users building from `main` are hitting `INVALID_ARGUMENT` errors because the previous `simple` tool schema transform is no longer sufficient.
3.  **[High] Matrix Sync Silent Death ([Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)):** The Matrix channel's `/sync` loop dies permanently after network blips. Because the process stays alive, systemd restarts fail to trigger, making the bot silently unresponsive.
4.  **[Medium] Tool Call Leakage ([Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)) & DingTalk UI Bug ([Issue #3255](https://github.com/sipeed/picoclaw/issues/3255)):** Volcengine models occasionally leak raw `<seed:tool_call>` XML to users, and DingTalk previews fail to show message content. *Fix Status: Leakage addressed via [PR #3279](https://github.com/sipeed/picoclaw/pull/3279), and DingTalk naming addressed in [PR #303](https://github.com/sipeed/picoclaw/pull/303).*
5.  **[Low] Rate Limiting Edge Case ([Issue #3232](https://github.com/sipeed/picoclaw/issues/3232)):** Rate limiting silently fails if no fallback model is configured.

## 6. Feature Requests & Roadmap Signals
*   **Cryptographic Modernization:** Making `libolm` optional in favor of `vodozemac` ([Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)) is marked as high priority by maintainers and will likely be a headline feature of the next release.
*   **Prompt Caching Optimization:** [PR #3228](https://github.com/sipeed/picoclaw/pull/3228) shows a strong push to support Anthropic's per-block `cache_control`, indicating a roadmap focus on reducing operational costs for heavy LLM users.
*   **Rich Media Channel Support:** [PR #3256](https://github.com/sipeed/picoclaw/pull/3256) aims to upgrade Feishu integrations to support native audio/video playback, moving beyond simple file uploads.
*   *Prediction for Next Version:* The next release will likely focus heavily on authentication resilience (incorporating [PR #3280](https://github.com/sipeed/picoclaw/pull/3280)) and LLM provider schema compatibility fixes.

## 7. User Feedback Summary
Users are pushing PicoClaw into complex, production-grade enterprise environments, leading to sophisticated feedback. A primary pain point is **provider brittleness**—users are frustrated when switching to cutting-edge models (like `doubao-seed-2.0-pro`) breaks tool calling due to raw text leakage. **Deployment resilience** is another major concern, particularly regarding headless server setups where network drops break Matrix syncing or OAuth flows require manual restarts. Furthermore, users deeply desire **customization and cost efficiency**, evidenced by their enthusiasm for configurable fallback chains and prompt caching. While the core agent capabilities are highly valued, the Web UI's struggle with long contexts ([Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)) shows that frontend infrastructure needs optimization to match backend performance.

## 8. Backlog Watch
*   **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) (Matrix Sync Reconnection):** Open since July 2nd. This "silent death" bug severely impacts bot availability for self-hosters and needs a maintainer to design a proper auto-reconnect loop.
*   **[PR #3228](https://github.com/sipeed/picoclaw/pull/3228) (Anthropic Cache Control):** Open since July 6th. A highly valuable technical contribution for API cost reduction that is currently stalled and marked as stale.
*   **[PR #3256](https://github.com/sipeed/picoclaw/pull/3256) (Feishu Native Media):** Open since July 14th. Needs maintainer review to merge improved multimedia handling for enterprise users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

Here is the structured project digest for IronClaw based on the GitHub data from July 22, 2026.

### 1. Today's Overview
IronClaw is currently exhibiting exceptionally high engineering momentum, driven by the rollout of the ground-up "Reborn" architecture rebuild. Over the last 24 hours, the project saw 43 issues updated (30 actively open, 13 closed) and an intense 50 pull requests updated (34 open, 16 merged/closed). This bottleneck of open PRs, largely composed of "XL" scoped changes, indicates that core maintainers are in the middle of a massive, tightly coordinated integration sprint to finalize the v1.0.0 release candidate. The focus is heavily skewed toward architectural unification, capability security, and establishing robust end-to-end testing harnesses.

### 2. Releases
*   **[ironclaw-v1.0.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/v1.0.0-rc.1)** (Released 2026-07-20)
    *   **Changes:** This is the first release candidate of a completely rearchitected system, representing a ground-up rebuild of the agent runtime, storage, extension host, and web UI.
    *   **Migration Notes:** This is explicitly *not* an increment on the 0.29.x line. The legacy v1 monolith (formerly `src/`) has been deleted from the tree, and production deploy configs (Railway, GCP systemd, Docker CI) have been repointed to the Reborn stack. The primary binary is now the rearchitected CLI.

### 3. Project Progress
Today's merged and closed PRs reflect a massive consolidation phase to prepare the Reborn architecture for production:
*   **Security & Dispatch Authority:** [PR #6432](https://github.com/nearai/ironclaw/pull/6432) was merged, successfully wiring the `Authorized` witness as the pre-flight authority for capability dispatch and completing the origin-to-gate matrix portions.
*   **State & UI Stability:** [PR #6429](https://github.com/nearai/ironclaw/pull/6429) removed `libsql` and `postgres` Cargo feature switches so both backends compile unconditionally, eliminating brittle `cfg` branches. 
*   **Web UI Fixes:** [PR #6153](https://github.com/nearai/ironclaw/pull/6153) fixed an automation status display bug in WebUI v2, ensuring the "Running" state appears correctly on the first run.
*   **Dependency Maintenance:** Routine but critical security/maintenance updates were merged, including bumping `dompurify` ([PR #6196](https://github.com/nearai/ironclaw/pull/6196)) and other Rust ecosystem dependencies.

### 4. Community Hot Topics
The community and core contributors are heavily focused on the transition strategy and architectural purity:
*   **[Issue #2987](https://github.com/nearai/ironclaw/issues/2987) - [EPIC] Track Reborn architecture landing strategy (44 comments):** The most active issue. Maintainers are utilizing a grouped PR plan to avoid massive, un-reviewable pull requests. This highlights the community's strong demand for transparency and manageable code reviews during the v1.0 transition.
*   **[Issue #6389](https://github.com/nearai/ironclaw/issues/6389) - Collapse runtime-assembly paths (10 comments):** High discussion around simplifying `build_local_runtime` and `build_production_shaped` into a single `build_runtime(cfg)`. This shows a strong maintainer push to eliminate technical debt before the v1.0 stable release.
*   **[Issue #3036](https://github.com/nearai/ironclaw/issues/3036) - Configuration-as-Code for Reborn (7 comments, 1 👍):** Users and operators are actively requesting a declarative way to configure IronClaw (tenant blueprints) instead of hand-editing `.env` files and JSON, driven by the need for audit trails and source control.

### 5. Bugs & Stability
*   **High Severity / Architecture-level:** [Issue #6434](https://github.com/nearai/ironclaw/issues/6434) identifies a lingering security/state path where dispatch happens *without* a witness via the loose `CapabilityDispatchRequest`. A fix is already actively being reviewed in [PR #6438](https://github.com/nearai/ironclaw/pull/6438) (Seal process redispatch authority).
*   **Medium Severity / UX Bug:** [Issue #6394](https://github.com/nearai/ironclaw/issues/6394) opened as an Epic for Dogfooding & QA bug fixing (07/20 - 07/24). This indicates the team is actively hunting for production-readiness regressions.
*   **Medium Severity / WebUI:** SSE (Server-Sent Events) streams were dropping or failing during navigation. This is being comprehensively addressed in [PR #6425](https://github.com/nearai/ironclaw/pull/6425), which restores local replay cursors and hydrates fresh routes properly.

### 6. Feature Requests & Roadmap Signals
Based on recent issues and active PRs, the immediate roadmap includes:
*   **Error Recoverability:** [Issue #6284](https://github.com/nearai/ironclaw/issues/6284) outlines an ambitious goal: "the model recovers from 100% of the errors it sees." The runtime should survive mid-run errors and feed the LLM actionable recovery context. (Currently being implemented in [PR #6437](https://github.com/nearai/ironclaw/pull/6437)).
*   **Multi-Account Messaging Channels:** [Issue #2392](https://github.com/nearai/ironclaw/issues/2392) requests host-level multi-account support for channels like WeCom and Telegram, moving away from the 1-to-1 channel/account mapping limitation.
*   **Persistent Multi-Identity Browsing:** [Issue #2355](https://github.com/nearai/ironclaw/issues/2355) details a plan for built-in Rust browser automation using Chrome + CDP, allowing the agent to authenticate and maintain long-lived, encrypted browsing profiles.
*   **Custom Instructions / Master Prompt:** [Issue #6433](https://github.com/nearai/ironclaw/issues/6433) requests a dedicated UI section for custom instructions (similar to ChatGPT/Claude), moving away from feeding preferences directly into chat context.

### 7. User Feedback Summary
Operators and advanced users are expressing friction regarding the complexity of configuring the new Reborn stack. The reliance on mixing `.env` variables, internal workspace docs, and JSON settings without a unified schema is a noted pain point ([Issue #3036](https://github.com/nearai/ironclaw/issues/3036)). Furthermore, contributors are feeling the friction of the massive architectural overhaul, requiring strict "Contributor Runways" ([Issue #3484](https://github.com/nearai/ironclaw/issues/3484)) to port tools and skills without touching kernel internals. However, there is underlying satisfaction with the team's rigorous approach to testing and capability security, ensuring that tools cannot execute arbitrary credentials at runtime.

### 8. Backlog Watch
Several critical, wide-scope Epics require sustained maintainer attention to prevent the v1.0 release from stalling:
*   **[Issue #2792](https://github.com/nearai/ironclaw/issues/2792) - Gateway state convergence:** Eliminating UI/backend state drift so that "the frontend is a pure function of the backend." This is structurally massive but vital for UX stability.
*   **[Issue #4539](https://github.com/nearai/ironclaw/issues/4539) - Reborn approvals parity:** The new stack currently lacks V1's practical approval loops (e.g., "approve once", "always allow"). This is blocking V1 users from migrating seamlessly.
*   **[Issue #2828](https://github.com/nearai/ironclaw/issues/2828) - Harness testing epic:** IronClaw currently has fragmented testing (replay, E2E, canary, eval). This needs unification to ensure automated QA can verify the new Reborn binary without human involvement.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the GitHub data provided for July 22, 2026.

### 1. Today's Overview
LobsterAI is currently exhibiting a highly active and healthy development cadence with a strong focus on UI/UX refinement and cross-model stability. Over the past 24 hours, the project saw substantial maintenance progress, successfully merging or closing 5 Pull Requests, while maintaining a steady stream of 5 new open PRs. The development team is actively iterating on the "cowork" (multi-model) capabilities and artifact sharing workflows. However, the community has surfaced a notable regression regarding state synchronization when switching between vision and non-vision models, which the maintainers have already addressed in a newly opened PR. 

### 2. Releases
*No new releases were published in the last 24 hours.*

### 3. Project Progress
Today's development progress was primarily concentrated on refining the "cowork" features, artifact handling, and platform-specific updates:
*   **Windows Auto-Update Improvements:** ([#2368](https://github.com/netease-youdao/LobsterAI/pull/2368)) Merged a feature to allow silent installations of Windows updates via NSIS, improving the auto-update UX by bypassing the interactive wizard while gracefully handling UAC denials.
*   **Artifact Sharing & Deployment Flow:** ([#2369](https://github.com/netease-youdao/LobsterAI/pull/2369), [#2370](https://github.com/netease-youdao/LobsterAI/pull/2370)) Closed two PRs that optimize the artifact sharing lifecycle. The team unified the subscription interception pop-ups for sharing and local deployment, and separated "create share" from "update access permissions" to prevent accidental share creation upon opening dialogs.
*   **Browser Annotation Refinements:** ([#2371](https://github.com/netease-youdao/LobsterAI/pull/2371)) Closed a PR significantly improving the browser annotation tool, supporting style modifications without comments, syncing draft clearances, and preserving screenshot metadata.
*   **OpenClaw Token Proxy Fix:** ([#2372](https://github.com/netease-youdao/LobsterAI/pull/2372)) Closed a fix addressing SSE (Server-Sent Events) truncation issues in the OpenClaw token proxy.

### 4. Community Hot Topics
The most notable active topic revolves around **image attachment handling during model switching**. 
*   **Issue:** ([#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)) outlines a frustrating edge case where users switch from a text-only model (e.g., glm-5.1) to a vision model (e.g., Doubao-Seed-2.0-lite). The image payload fails to convert from a file path to a base64 URL, resulting in the vision model "seeing" nothing. 
*   **Underlying Needs:** As LobsterAI supports an increasing variety of upstream models, users expect seamless, dynamic state management. The AI assistant's front-end needs to intelligently react to the specific API constraints (vision vs. non-vision) of the *currently active* model without requiring the user to manually re-upload attachments.
*   **Ad Dismissal:** ([#2342](https://github.com/netease-youdao/LobsterAI/pull/2374)) Users are also actively requesting more control over their workspace, specifically asking for the ability to permanently hide sidebar ad banners rather than just temporarily dismissing them.

### 5. Bugs & Stability
1.  **[High Severity] State Desync in Multi-Model Image Processing:** As detailed in Issue ([#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)), stale image payloads (base64 vs. file path) break multimodal interactions when models are swapped mid-conversation. 
    *   *Fix Status:* **Fix PR exists.** Developer `yaodong-shen` opened PR ([#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)) today, which strips stale `dataUrl` payloads when moving to a non-vision model and ensures proper prompt building.
2.  **[Medium Severity] OpenClaw SSE Truncation:** Interrupted streaming responses via the token proxy.
    *   *Fix Status:* **Fixed.** Addressed in PR ([#2372](https://github.com/netease-youdao/LobsterAI/pull/2372)).
3.  **[Low Severity] Residual Annotation State:** Webview annotation states were getting stuck on the page when clearing drafts.
    *   *Fix Status:* **Fixed.** Resolved in PR ([#2371](https://github.com/netease-youdao/LobsterAI/pull/2371)).

### 6. Feature Requests & Roadmap Signals
*   **Granular UI Controls:** PR ([#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)) introduces a permanent toggle for sidebar ads. This signals a roadmap shift toward offering users a cleaner, more distraction-free premium experience.
*   **Monetization/Subscription Architecture:** Recent artifact PRs ([#2369](https://github.com/netease-youdao/LobsterAI/pull/2369), [#2370](https://github.com/netease-youdao/LobsterAI/pull/2370)) heavily emphasize "subscription interception," "permission gates," and distinct login flows for sharing vs. deploying. This strongly signals that LobsterAI is actively building out a SaaS/Subscription tier for artifact deployment and local server hosting.

### 7. User Feedback Summary
*   **Pain Point:** Multimodal reliability is currently a friction point. Users want to fluidly switch between cost-effective text models and premium vision models within the same workspace without experiencing "blindness" in the AI's context window. 
*   **Satisfaction:** Overall satisfaction with new features (like browser annotations and local deployment) appears high, as evidenced by the rapid iteration on edge cases (like artifact permission sharing and webview metadata preservation) rather than fundamental functionality complaints.

### 8. Backlog Watch
The automated dependency manager (`dependabot`) has several significant, stale Pull Requests that have been open since April 2026 and urgently require maintainer attention to address technical debt and security:
*   **React Major Upgrade:** PR ([#1280](https://github.com/netease-youdao/LobsterAI/pull/1280)) - Bumping `react-dom` from 18.3.1 to 19.2.4.
*   **Vite Major Upgrade:** PR ([#1281](https://github.com/netease-youdao/LobsterAI/pull/1281)) - Bumping `vite` from 5.4.21 to 8.0.9.
*   **Cross-Env Major Upgrade:** PR ([#1279](https://github.com/netease-youdao/LobsterAI/pull/1279)) - Bumping `cross-env` from 7.0.3 to 10.1.0.
*Note: Upgrading React to v19 and Vite to v8 will likely require codebase regression testing and should be prioritized before the next major release.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the structured project digest for Moltis based on the provided GitHub data.

### 1. Today's Overview
As of 2026-07-22, the Moltis project is experiencing a period of very low development and community activity. Over the past 24 hours, there were no new releases, no newly opened or closed issues, and no merged pull requests. The repository's sole recorded activity stems from automated dependency management, indicating a temporary lull in active feature development or codebase iteration. Despite the current stagnation, the project's ongoing reliance on Dependabot suggests maintainers are still passively ensuring the project's documentation infrastructure remains secure and up-to-date. 

### 2. Releases
*No new releases were recorded today.*

### 3. Project Progress
No features were advanced or fixed through direct maintainer intervention today, as zero pull requests were merged. The only forward progress is represented by an automated pull request addressing technical debt. 
*   **[PR #1161](https://github.com/moltis-org/moltis/pull/1161)**: Opened by `dependabot[bot]`, this proposes a minor version bump for the `astro` framework (from 7.0.9 to 7.1.3) within the `/docs` directory. This is a routine maintenance update to prevent dependency drift and patch potential vulnerabilities in the npm/yarn ecosystem.

### 4. Community Hot Topics
*No active discussions were recorded today.* 
There are 0 open or active issues, and the sole active PR is automated. There are currently no organic community debates, feedback loops, or hot topics to analyze.

### 5. Bugs & Stability
*No bugs, crashes, or regressions were reported today.* 
The fact that the active issue queue is entirely empty is a strong indicator of baseline project stability, though it is heavily influenced by the current lack of community/user engagement.

### 6. Feature Requests & Roadmap Signals
There are no explicit feature requests to report today. However, analyzing the automated dependency update provides a faint technical signal regarding the project's stack: 
*   The update to **Astro 7.1.3** indicates that the Moltis documentation site is built on a modern, actively iterated web framework. While no official next version has been announced, the project's underlying technical foundation remains modernized. 

### 7. User Feedback Summary
There is no direct user feedback, pain points, or use cases available from today's data. The absence of newly created issues suggests that existing users (if any are actively deploying the project today) are not encountering blocking errors significant enough to report. 

### 8. Backlog Watch
*   **[PR #1161 [OPEN]](https://github.com/moltis-org/moltis/pull/1161)**: While not a long-unanswered issue, this automated dependency bump currently requires maintainer attention. The `/docs` Astro update should be reviewed and merged to clear the PR queue and maintain CI/CD pipeline health. Maintainers should monitor whether this lull in activity is seasonal or a sign of project abandonment.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw) based on the GitHub data provided.

# CoPaw (QwenPaw) Project Digest
**Date:** 2026-07-22

## 1. Today's Overview
CoPaw is exhibiting exceptionally high development velocity and robust community engagement as it iterates on its v2.0 series. Over the last 24 hours, the project processed 41 issues (achieving a balanced close rate of ~51%) and reviewed or merged 46 Pull Requests, indicating a highly active maintainer team. The release of **v2.0.1-beta.1** marks a shift towards hardening the v2.0 architecture, specifically targeting stability bugs and developer experience. Underlying community health is strong, with several first-time contributors successfully merging features, though users are actively reporting performance regressions and state-management inconsistencies introduced in the v2.0 overhaul.

## 2. Releases
### v2.0.1-beta.1
A rapid hotfix/beta release focused on resolving immediate architectural friction from the v2.0 launch.
* **Core Changes:**
  * Fixed absolute imports in the Tauri desktop entry point ([PR #6234](https://github.com/agentscope-ai/QwenPaw/pull/6234)).
  * Addressed unhandled `OSError` exceptions in `memoryspace` (`_saved_tool_refs`), improving memory tool resilience.
  * Bumped version to 2.0.1b1 ([PR #6266](https://github.com/agentscope-ai/QwenPaw/pull/6266)).

## 3. Project Progress
The development focus today was heavily centered on **governance, safety checks, and developer workflows**, alongside significant community feature merges:
* **Tool Governance & Safety:** The team unified built-in and plugin tool registration around a single metadata source via `@tool_descriptor` ([PR #6190](https://github.com/agentscope-ai/QwenPaw/pull/6190)). Additionally, the ACP (Agent Communication Protocol) module was refactored to decouple slash commands and extract safety checks into a shared primitive ([PR #5796](https://github.com/agentscope-ai/QwenPaw/pull/5796)).
* **Workflow Modes Integration:** Merged five new agent workflow modes (UltraQA, Ralph, Ultrawork, Autopilot, Team) and hardened `spawn_subagent` with tool/skill whitelisting and polling backoff ([PR #5882](https://github.com/agentscope-ai/QwenPaw/pull/5882)).
* **Community Contributions Shipped:** 
  * Added per-session model overrides, allowing different LLMs in the same agent ([PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)).
  * Added scriptable encrypted environment reads for safer CLI automations ([PR #6251](https://github.com/agentscope-ai/QwenPaw/pull/6251)).
  * Introduced one-click copy for agent configurations ([PR #6262](https://github.com/agentscope-ai/QwenPaw/pull/6262)).
  * Made logging rotation limits configurable via environment variables ([PR #6183](https://github.com/agentscope-ai/QwenPaw/pull/6183)).

## 4. Community Hot Topics
* **Agent Looping & Tool Call Failures ([#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241), [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257)):** Users reported that agents are entering infinite `memory_search` loops and generating identical thinking blocks during parallel tool calls. This underscores a critical need for the framework to implement better deterministic halting mechanisms for LLMs that fail at reasoning loops.
* **Call for Mobile and Desktop UX Parity ([#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281), [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297)):** There is massive demand for mobile-adapted Web consoles and native drag-and-drop support for documents (PDFs, Office files) directly in the chat interface. Users doing contract reviews feel the current upload workflow breaks their flow.
* **Open Contributor Tasks ([#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)):** The official "Help Wanted" tracker remains highly active, successfully guiding first-time contributors into the codebase (e.g., theming, logging, and CLI features).

## 5. Bugs & Stability
Ranked by severity based on today's data:
1. **Critical: Session Contamination & History Loss ([Issue #6299](https://github.com/agentscope-ai/QwenPaw/issues/6299), [Issue #5860](https://github.com/agentscope-ai/QwenPaw/issues/5860)):** Upgrading to v2.0 introduced severe state bugs where deleted sessions persist in the DB, causing cross-context contamination and infinite loops during streaming.
   * *Status:* Actively being patched via [PR #6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) (fixing session ID mismatches during migration).
2. **High: v2.0 Performance Overhead ([Issue #6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)):** A frustrating ~2s fixed overhead per simple conversational reply was introduced in v2.0, completely independent of model latency. 
3. **Medium: Subagent Polling & Interrupts ([Issue #4873](https://github.com/agentscope-ai/QwenPaw/issues/4873)):** Running concurrent subagents triggers a rapid infinite polling loop that locks up the main agent, which cannot be interrupted via external channels (e.g., Feishu).
4. **Low/Medium: Naive Timezones ([Issue #6301](https://github.com/agentscope-ai/QwenPaw/issues/6301)):** UTC timestamps are being mistakenly treated as local time. 
   * *Status:* Fixed in [PR #6309](https://github.com/agentscope-ai/QwenPaw/pull/6309).

## 6. Feature Requests & Roadmap Signals
Based on user issues and active PRs, the immediate roadmap will likely focus on:
* **Native File Handling & UX:** Direct drag-and-drop file parsing and workspace quick-access buttons for the Desktop UI ([Issue #6083](https://github.com/agentscope-ai/QwenPaw/issues/6083), [Issue #6297](https://github.com/agentscope-ai/QwenPaw/issues/6297)).
* **Dynamic Agent Contexts:** Automatic injection of real-time data (like current time) to prevent historical date confusion ([Issue #6283](https://github.com/agentscope-ai/QwenPaw/issues/6283)), and enforcing pre-condition rules in `AGENTS.md` before tools execute ([Issue #6321](https://github.com/agentscope-ai/QwenPaw/issues/6321)).
* **Token Optimization ([Issue #6286](https://github.com/agentscope-ai/QwenPaw/issues/6286)):** Allowing users to disable or customize built-in tool descriptions to save 8,000-10,000 tokens per request.
* **Upcoming Plugin/Feature:** "QwenPaw Creator" is currently under review, which will bring a script-to-video creation workflow into the ecosystem ([PR #6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)).

## 7. User Feedback Summary
**Dissatisfaction:** The transition to v2.0 has been rocky for a subset of users, specifically regarding state management (context loss/bleed) and unexpected latency overheads. Non-technical users express frustration over clunky file navigation in the Tauri Desktop app and poor mobile web responsiveness. 

**Satisfaction:** Developer satisfaction remains incredibly high. The extensibility of the plugin system, the new workflow modes (OMP integration), and the responsiveness of maintainers to community PRs are highly praised. The recent unification of tool registries and model provider additions (like AIOnly) show the project is maturely handling its own scale.

## 8. Backlog Watch
* **Task Tracking & Concurrency Semantics ([Issue #6273](https://github.com/agentscope-ai/QwenPaw/issues/6273)):** Opened by a maintainer, this architectural bug shows that same-session concurrency behaves differently depending on the execution entry point. This requires immediate structural alignment before v2.0.1 can go stable.
* **External Channel Approvals ([Issue #5295](https://github.com/agentscope-ai/QwenPaw/issues/5295)):** Subagent safety approval requests (like file deletions) aren't pushing to external channels (QQ, Discord), which poses a potential security/workflow risk for remote management.
* **OpenAI Token Limit Override ([Issue #6258](https://github.com/agentscope-ai/QwenPaw/issues/6258)):** The `max_output_tokens` parameter for OpenAI-compatible models is silently failing to apply, which needs maintainer attention to prevent broken API calls on constrained models.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw on 2026-07-22.

### 1. Today's Overview
ZeroClaw is exhibiting highly active and robust development, characterized by a massive volume of ongoing pull requests (41 open) and active issue triage (48 open). The project is currently in a heavy architectural refactoring and capability-expansion phase, notably advancing the new "Goal Mode" and standardizing channel/provider boundaries. While the engineering pace is frenetic, the community has reported several critical stability and security bugs that require immediate maintainer attention. Overall, the project's health is strong but currently carrying significant technical debt related to local tool execution and configuration parsing.

### 2. Releases
No new releases were recorded in the last 24 hours. 

### 3. Project Progress
Developers merged 9 PRs, focusing heavily on quality assurance, documentation, and architectural cleanup:
*   **SOP Engine Fixes:** [PR #9183](https://github.com/zeroclaw-labs/zeroclaw/pull/9183) fixed a routing bug where `switch` evaluation occurred even when a false top-level `when` guard was present.
*   **Cross-Platform & CI Stability:** [PR #8756](https://github.com/zeroclaw-labs/zeroclaw/pull/8756) made media marker assertions portable for Windows, and [PR #9055](https://github.com/zeroclaw-labs/zeroclaw/pull/9055) fixed documentation translation refreshes to be reproducible.
*   **ZeroCode UX Enhancements:** [PR #9011](https://github.com/zeroclaw-labs/zeroclaw/pull/9011) advanced the ZeroCode dashboard to display active runtime context (daemon, config, endpoint) directly.

### 4. Community Hot Topics
The most engaging discussions center around multi-agent architectures and integration capabilities:
*   **Agent Multi-Tenancy & Identity:** [Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) (6 comments) discusses adding typed per-agent git identities to resolve token and parameter collisions across shared process lanes. This highlights a critical need for isolated agent execution in enterprise setups.
*   **Telegram Channel Breakages:** [Issue #8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) (6 comments) reveals a high-severity blocker where the Telegram channel fails to configure properly via quickstart, frustrating users trying to deploy the bot externally.
*   **OpenAI API Compatibility:** [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (4 comments) features an RFC for an OpenAI Chat Completions adapter, showing strong community desire to plug ZeroClaw into popular frontends like Open WebUI and LobeChat.

### 5. Bugs & Stability
Several severe bugs (S0/S1) were reported or remain active, primarily concerning security and local execution memory leaks:
*   **S0 - Shell Workspace Bypass:** [Issue #9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) reports that the shell tool fails to enforce workspace boundaries, allowing symlinks to facilitate unauthorized reads/writes outside the workspace. *No fix PR yet.*
*   **S0 - Sub-agent Policy Bypass:** [Issue #8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) notes that the `delegate` tool ignores the parent agent's tool allowlist, allowing sub-agents to invoke restricted tools. 
*   **S1 - Memory Leaks & Zombies:** [Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) (MCP schema cloning causes unbounded RSS growth) and [Issue #8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) (Stdio MCP servers accumulate as zombie processes). Both severely impact long-running daemon stability.

### 6. Feature Requests & Roadmap Signals
Key feature signals indicate a push toward autonomous execution and multi-model orchestration:
*   **Goal Mode for Autonomous Work:** [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) requests a durable mode for an agent to pursue an objective until completion or budget exhaustion. This is actively being developed via a massive 4-PR stack ([PR #8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687), [PR #8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688), [PR #8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)).
*   **Mixture-of-Agents (MoA):** [Issue #8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) proposes a virtual model provider where reference models run in parallel and feed analysis to an aggregator model.
*   **Per-chat Model Switching:** [Issue #8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) requests seamless model switching within multi-model providers (like OpenRouter).
*   **Realtime Audio Channels:** [Issue #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) proposes an RFC for a backend-agnostic speech-to-speech realtime channel, starting with Gemini Live.

### 7. User Feedback Summary
Users are highly impressed with ZeroClaw's Rust-based memory safety and advanced concepts like the SOP (Standard Operating Procedure) engine, but they express frustration with onboarding friction and silent failures. A major pain point is configuration parsing: users reported that `zeroclaw config init` ships templates that the daemon rejects ([Issue #8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718)), and that `Config::save_dirty()` silently drops writes for any model containing a dot in its name (like `gpt-4.1` or `claude-3.5-sonnet`) ([Issue #9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240)). Telegram onboarding also remains a sore spot due to lacking documentation ([Issue #8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)).

### 8. Backlog Watch
*   **SkillForge Orphaning:** [Issue #8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) has been open since late June. The auto-skill discovery engine (SkillForge) landed months ago but remains completely unwired in running instances. Maintainers need to decide whether to hook it up with safe defaults or remove the dead code.
*   **Stalled Provider & Gateway PRs:** Multiple large, high-risk PRs are waiting on author action, including [PR #8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) (fixing SSE streaming for major providers) and [PR #8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) (RPC context window refactoring). These need maintainer reviews to progress.

</details>